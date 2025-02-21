## Step 2: Running our Extension

Now that our codespace is configured...we can test out the template extension.

<!-- Insert theory here that supports the course -->

### :keyboard: Activity: Running our extension

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

1. Leave the debugger running to keep the service alive, and add an issue comment using the example below. Make sure you tag @mona to notify her and to update the link!

   ```markdown
   Hey @mona, please check if my codespace is running correctly.

   https://my-codespace-link-3000.app.github.dev
   ```
