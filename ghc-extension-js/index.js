import express from "express";
import { Readable } from "node:stream";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import { promises as fs } from "node:fs";

// Get current directory to help with loading files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create a web service that listens for incoming requests
const app = express();

// Provide a basic website if the user visits the extension's URL
app.get("/", (req, res) => {
  console.log("Endpoint called: /");
  res.sendFile(__dirname + "/info.html");
});
app.get("/info", (req, res) => {
  console.log("Endpoint called: /info");
  res.sendFile(__dirname + "/info.html");
});

// After installing the app, GitHub will redirect the user to this URL
app.get("/callback", (req, res) => {
  console.log("Endpoint called: /callback");
  res.send("Success! You may close this window and return to GitHub.");
});

// Receive chat requests, process, and return a response
app.post("/copilot", express.json(), async (req, res) => {
  // Load messages array from the request payload
  const payload = req.body;
  const messages = payload.messages;

  // Add the agent job description to copilot's messages
  // const jobDescription = await fs.readFile(
  //   path.join(__dirname, "agent-knowledge", "job-description.md"),
  //   "utf8"
  // );
  // messages.unshift({
  //   role: "system",
  //   content: jobDescription,
  // });

  // Add the school overview to copilot's messages
  // const schoolOverview = await fs.readFile(
  //   path.join(__dirname, "agent-knowledge", "school-overview.md"),
  //   "utf8"
  // );
  // messages.unshift({
  //   role: "system",
  //   content: schoolOverview,
  // });

  // Add the staff descriptions to copilot's messages
  // const staffDescriptions = await fs.readFile(
  //   path.join(__dirname, "agent-knowledge", "staff-roles.md"),
  //   "utf8"
  // );
  // messages.unshift({
  //   role: "system",
  //   content: staffDescriptions,
  // });

  // Send messages array to copilot and collect the response
  const userToken = req.get("X-GitHub-Token");
  const copilotResponse = await fetch("https://api.githubcopilot.com/chat/completions", {
    method: "POST",
    headers: {
      authorization: `Bearer ${userToken}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      messages,
      stream: true,
    }),
  });

  // Forward the response stream back to the user
  Readable.from(copilotResponse.body).pipe(res);
});

// Start the extension web service and show the URL where the web service is running.
const port = Number(process.env.PORT || "3000");
app.listen(port, () => {
  const codespaceName = process.env.CODESPACE_NAME;
  const url = codespaceName
    ? `https://${codespaceName}-${port}.app.github.dev`
    : `http://localhost:${port}`;
  console.log(`Copilot extension service running at: ${url}`);
});
