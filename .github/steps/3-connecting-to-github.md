## Step 3: Connecting to GitHub

Before our extension is visible in the chat interface, we need to connect it to GitHub.
This is done by creating a GitHub App and installing it on your account.

<!-- Insert theory here that supports the course -->

### :keyboard: Activity: Connecting to GitHub

1. Navigate to GitHub.com
1. In the top right, click your profile picture, then click **Settings**.
1. In the left sidebar at the bottom, select **Developer settings**.
1. In the left sidebar at the top, select **GitHub Apps** .
1. Click the **New GitHub App** button.
1. On the displayed form, enter the following:
   1. In the **Register new GitHub App** section, enter:
      - **GitHub App name**: `my-first-extension`
        - This will be the handle in chat like `@my-first-extension`.
      - **Description**: `My first extension for GitHub Copilot`
        - This will be displayed in the chat UI tooltip.
      - **Homepage URL**: URL to your repository.
   1. In the **Identifying and authorizing users** section, enter:
      - **Callback URL**: The url displayed on console when you run the extension, plus `/callback`.
        - Example: `https://conscious-jumper-abcdefg-3000.app.github.dev/callback`
      - **Expire user authorization tokens**: Checked
      - **Request user authorization (OAuth) during installation**: [x] Checked
      - **Enable Device Flow**: `Unchecked`
   1. In the **Webhook** section enter:
      - **Active**: `Unchecked`
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
   - **Agent Definition > URL**: The url displayed on console when you run the extension.
     - Example: `https://conscious-jumper-abcdefg-3000.app.github.dev`
   - **Inference Description**: `My first extension for GitHub Copilot`
     - This will be displayed as a tooltip the Copilot chat interface.
1. click **Save**.
1. On the left sidebar, click **Install App**.
1. Click **Install** and **Install & Authorize**.
