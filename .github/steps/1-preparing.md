full_repo_name: string

---

## Step 1: Preparing to make your extension

**Welcome to "Your first extension for GitHub Copilot"!** :robot:

Before we get started on your extension, we have to configure our development environment.
Fortunately, this has been bootstrapped for you with a pre-configured [Codespace](https://github.com/features/codespaces).

The environment includes:

- The Node.js runtime
- An empty GitHub Extension (javascript web service)
- [VS Code](https://code.visualstudio.com/) launch settings to start your extension in debug mode.

<!-- Insert theory here that supports the course -->

### :keyboard: Activity: Getting to know your extension development environment

1. Click the below button to open the **Create Codespace** page.

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)

   - The free tier of Codespaces that comes with all GitHub accounts is fine, assuming you still have minutes available.
   - The default Codespace settings are fine.
   - This repository will provide the additional settings and files for making your extension.

1. Confirm the **Repository** field is your copy of the exercise, not the original, then click the green **Create Codespace** button.

   - ✅ Your copy: `/{{full_repo_name}}`
   - ❌ Original: `/skills/your-first-extension-for-github-copilot`

1. Wait a moment for Visual Studio Code to load.

1. Before we continue let's take a moment to familiarize ourselves with the project folder.

   - The left navigation bar is where you can access the file explorer, debugger, and search.
   - The lower panel (Ctrl+J) shows the debugger output, allows running terminal commands, and allows configuring the web service ports.
   - Our template extension is in the `ghc-extension-js` folder. More on that in the next steps!
   - The `index.js` file is the entry point for the extension and hosts the web service for Copilot to interact with.
   - The `package-lock.json` and `package.json` files define the extension's dependencies.

1. Create a new branch named `my-ghc-extension`. Ensure it is checked out in VS Code and published to GitHub.

   - Note: Creating this branch triggers the next step in your exercise.
