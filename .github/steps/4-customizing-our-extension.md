## Step 4: Customizing our Extension

Nice work getting your extension up and running! :tada:
It feels cool to see Copilot responding, right?! :sunglasses:

Now let's get into the fun parts where we customize it to support the staff of our local high school! :unicorn:

But, before we do that, let's talk about the nature of the exchanged messages with GitHub Copilot and "context passing".

### What is context?

Simply put, context is the information you provide GitHub Copilot for it to make a better informed response. That could be asking Copilot to assume a persona, providing it some background data, or asking it a particular question.

For this application, that means JSON objects with a defined role and some text content. In our case, we will attach a few `system` messages that look similar to the below. When the user interacts with GitHub Copilot, you will notice those attached as the `user` role.

```json
{
  "role": "system",
  "content": "You are a software developer creating desktop and web-based programs to support a high school staff."
}
```

### :keyboard: Activity: Configuring our extension

Customizing Copilot is pretty simple. It's similar to sharing more information with a coworker.
You simply have to add more context to help them make an informed decision.

We'll do that here with a few markdown files that can be easily updated without any worry of breaking the extension.

1. Open VS Code and expand the `/ghc-extension-js` folder.
1. Let's give our extension Agent a job description. Everyone likes job clarity, right?

   1. Open `index.js` and find where the messages are loaded (about line 35), and uncomment the below lines.
      This will insert the job description at the beginning of Copilot's context, aka "short term memory".

      ```js
      const messages = payload.messages; // After this line, add the below

      // Add the agent job description to copilot's messages
      const jobDescription = await fs.readFile(
        path.join(__dirname, "agent-knowledge", "job-description.md"),
        "utf8"
      );
      messages.unshift({
        role: "system",
        content: jobDescription,
      });
      ```

   1. Open the file `/agent-knowledge/job-description.md` and replace the placeholder with the following content.

      ```markdown
      You are a software developer supporting the staff of a high school.
      Your goal is to provide automation services and tools to help them work faster.
      ```

      > **Tip:** You can add more detail to your description. Check out the `job-description-ext.md` file for ideas.

1. Now, let's repeat the above process for 2 more files.
1. Modify `index.js` to also use `/agent-knowledge/school-overview.md` with the below content for ideas.

   ```markdown
   This is an overview of the high school so instructors can more naturally describe their needs.

   - The school name is "Mergington High School"
   - The school is a public high school in Mergington, Florida.
   - The school moto is "Branch out and grow".
   - It serves grades 9 through 12 and typically has 100 to 150 students per grade.

   - The school year starts in August and ends in May.
   - There are 3 trimesters per year.
   - There is a 4th summer cycle, but it is optional.
   ```

   > **Tip:** You can add more detail to your description. Check out the `school-overview-ext.md` file for ideas.

1. Modify `index.js` to also use `/agent-knowledge/staff-roles.md` with the below content.

   ```markdown
   Below is a list of common roles and tasks they might want help with.
   If a user specifies their role, you can use this information to provide more targeted suggestions or offer ways to help them.

   ## School Administration

   - Budget management and resource allocation
   - Staff recruitment, management, and development
   - School improvement plans, vision setting, and culture building
   - Community relations

   ## Instructional Staff

   - Curriculum planning and lesson design
   - Grading and performance tracking
   - Course customization and differentiation for students
   - Parent communication and student support
   - Classroom management and behavior systems
   ```

   > **Tip:** You can add more detail to your description. Check out the `staff-roles-ext.md` file.

1. Great work! Now we have a job description and some context for our extension to use. Let's test it out!
1. If the extension service is not already running, use the debugger to start it.
1. Like previously, navigate to [github.com](https://github.com) and start a generic chat with Copilot.
1. Try interacting with Copilot using some of the below prompts.

   > <img width="13px" src="https://github.com/user-attachments/assets/98fd5d2e-ea29-4a4a-9212-c7050e177a69" /> **Prompt**
   >
   > ```prompt
   > @my-ghc-extension-{{login_lowercase}} I heard you can help me with my students. In what ways?
   > ```

   > <img width="13px" src="https://github.com/user-attachments/assets/98fd5d2e-ea29-4a4a-9212-c7050e177a69" /> **Prompt**
   >
   > ```prompt
   > @my-ghc-extension-{{login_lowercase}} Tell me a bit about our school?
   > ```

   > <img width="13px" src="https://github.com/user-attachments/assets/98fd5d2e-ea29-4a4a-9212-c7050e177a69" /> **Prompt**
   >
   > ```prompt
   > @my-ghc-extension-{{login_lowercase}} I'd like to create a system for tracking student progress
   > across years and teachers. Let's make a website for it.
   > ```

   > <img width="13px" src="https://github.com/user-attachments/assets/98fd5d2e-ea29-4a4a-9212-c7050e177a69" /> **Prompt**
   >
   > ```prompt
   > @my-ghc-extension-{{login_lowercase}} How can I visualize data exported from our student management system?
   > For example a graph of each students' grades over the year.
   > ```

1. When you are done experimenting with prompts and changing the files, please commit and push the changes.
   - Make sure you are on the `my-ghc-extension` branch.
   - Git should show changes for 4 files:
     - `index.js`
     - `agent-knowledge/job-description.md`
     - `agent-knowledge/school-overview.md`
     - `agent-knowledge/staff-roles.md`
