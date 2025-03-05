## Step 3: Connecting to GitHub

A critical component for using our extension is creating a [GitHub App](https://docs.github.com/en/apps/overview), which handles presenting our extension to the user and providing authorization to resources. In fact, GitHub Apps can be used for many things such as managing issues, commenting on pull requests, and even talking to other services like Slack.

For our extension, it will be similar to talking to another service, and displaying it in a general purpose chat on github.com and in Copilot Chat for Visual Studio Code.

> [!TIP]
> If you would like to learn more about these and other capabilities, check out the [GitHub Apps Overview](https://docs.github.com/en/apps/overview) page.

### :keyboard: Activity: Connecting to GitHub

Let's make a GitHub App, configure it to work with GitHub Copilot as an Agent, and install it on your account.

1. Navigate to GitHub.com
1. In the top right, click your profile picture, then click **Settings**.
1. In the left sidebar at the bottom, select **Developer settings**.
1. In the left sidebar at the top, select **GitHub Apps** .
1. Click the **New GitHub App** button.
1. In the displayed form, enter the following:
   1. In the **Register new GitHub App** section, enter:
      - **GitHub App name**: `my-ghc-extension-{{login}}`
        - The app name must be unique across all GitHub.
        - Note: The handle in Copilot Chat will be lowercase, like `@my-ghc-extension-{{login_lowercase}}`.
      - **Description**: `My first extension for GitHub Copilot`
      - **Homepage URL**: Any url that provides an overview and usage instructions for your extension.
        - We will use our web service's information page. This is the url displayed on console when you run the extension, plus `/info`.
        - Example: `https://conscious-jumper-abcdefg-3000.app.github.dev/info`
   1. In the **Identifying and authorizing users** section, enter:
      - **Callback URL**: The url displayed on console when you run the extension, plus `/callback`.
        - Example: `https://conscious-jumper-abcdefg-3000.app.github.dev/callback`
      - **Expire user authorization tokens**: `[x] Checked`
      - **Request user authorization (OAuth) during installation**: `[x] Checked`
      - **Enable Device Flow**: `[ ] Unchecked`
   1. In the **Webhook** section enter:
      - **Active**: `[ ] Unchecked`
   1. In the **Permissions** section, select the following permissions:
      - Repository: `None`
      - Organization: `None`
      - Account:
        - **Copilot Chat**: `read only`
   1. In the **Where can this GitHub App be installed?** section, select:
      - `Only on this account`
1. Click **Create GitHub App**.
1. On the left sidebar, click **Copilot**.
   - If this is your first time creating a Copilot extension, you will be prompted to accept the terms.
1. In the **App Type** dropdown, select `Agent`. Enter the following details:
   - **Preauthorization URL**: Blank
   - **Agent Definition > URL**: The url displayed on the console when you run the extension, plus `/copilot`.
     - Example: `https://conscious-jumper-abcdefg-3000.app.github.dev/copilot`
   - **Inference Description**: `My first extension for GitHub Copilot`
     - This will be displayed as a tooltip in the Copilot chat interface.
1. click **Save**.
1. On the left sidebar, click **Install App**.
1. Click **Install** and **Install & Authorize**.

### :keyboard: Activity: Testing the connection

Let's check if our extension service is available to use on github.com and in our IDE, and that they are able to communicate.

1. In VS Code, use the debugger to start the extension service if it is not already running.
1. Open a web browser and navigate to [github.com](https://github.com).
1. At the top of the page, click the **Copilot Icon**.
1. Start a general purpose chat.
1. Type `@my-ghc-extension-{{login_lowercase}} How can you help me?` and press enter. You should get a response.
   > **Tip:** Try opening another VS Code window. You can use the extension there with Copilot Chat as well!
1. After you are done configuring your **GitHub App** and testing the connection, leave the following comment on the issue to let Mona know you are ready for the next step.

   ```markdown
   Hey @professortocat, I'm all done configuring my GitHub App. Here's the link. What's next?

   https://github.com/apps/my-ghc-extension-{{login}}
   ```
