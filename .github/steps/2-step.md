## Step 2: Running our Extension

Let's learn a bit more about the web application that will become our GitHub Copilot Extension, more specifically, the needed endpoints for communicating with our [GitHub App](https://docs.github.com/en/apps/creating-github-apps/about-creating-github-apps/about-creating-github-apps) (next step).

There are 2 required and 1 recommended web service endpoints:

- **[GET] /callback** - A simple HTML message provided to the user after authorization to confirm that the extension has permissions.
- **[POST] /copilot** - A response endpoint to exchange messages with GitHub Copilot.
- **[GET] /** - (Optional) A default response from the root of your web service for viewing in a normal web browser, to provide an overview of the extension.

> [!NOTE]
> The `/callback` and `/copilot` endpoints can be renamed as desired. They just have match the GitHub App settings.

### :keyboard: Activity: Running our extension

Before we start customizing, let's try running the template extension that was provided.

1. In VS Code, expand the the lower panel (Ctrl+J) and select the **Terminal** tab.

1. Run the below command to install the required javascript packages.

   ```bash
   cd ghc-extension-js
   npm install
   ```

1. Configure the open ports.

   1. In the lower panel bar, select the **Ports** tab.
   1. Verify port `3000` is active and the visibility is `public`.
   1. If the port visibility is not `public`, right click on the entry and select **Port Visibility** to update it.

1. Verify the included template program works.

   1. In the left navigation bar, select the debug icon.
   1. Click the green play button to start the debugger.
   1. The program should run and output some text like: `Copilot extension service running at: {URL}`
   1. This is the global URL for your extension running in this codespace.

1. Verify our extension service is running.

   1. In the lower panel bar, return to the **Ports** tab.
   1. Right click on the URL and select **Open in Browser**.
   1. You should see a web page describing your extension!

1. Leave the debugger running to keep the service alive, and add an issue comment using the example below. Make sure you tag Professor Octocat to notify her and to update the link!

   ```markdown
   Hey @professortocat, please check if my codespace is running correctly.

   https://my-codespace-link-3000.app.github.dev
   ```

> [!IMPORTANT]
> When you restart a Codespace, the exposed ports are reset.
> This may mean they are removed or changed to private visibility.
