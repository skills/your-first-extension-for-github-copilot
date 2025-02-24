## Step 4: Customizing our Extension

Nice work getting your extension up and running! :tada:
It feels cool to see Copilot responding, right?!

Now let's get into the REALLy fun parts where we customize it to support our local high school! :unicorn:

<!-- Insert theory here that supports the course -->

### :keyboard: Configuring our extension

Customizing Copilot is pretty simple. It's similar to sharing more information with a coworker.
You simply have to add more context to help them make informed decision.
We'll do that here with a few markdown files that can be easily updated without any working of breaking our extension.

1. Open VS Code and expand the `/ghc-extension-js` folder.
1. Let's give our extension Agent a job description. Everyone likes job clarity, right?

   1. Open `index.js` and find where the messages are loaded (about line 35), and add the below lines.
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

   1. Create the file `/agent-knowledge/job-description.md`, open it, and add the following content.

      ```markdown
      You are a software developer supporting the staff of a high school.
      Your goal is to provide automation services and tools to help them work faster.
      ```

      > [!TIP]
      > You can add more detail to your description. Check out the `job-description-ext.md` file.

1. Now, let's repeat the above process for 2 more files.
1. Add the `/agent-knowledge/school-overview.md` file with the below content.

   ```markdown
   This is overview of the high school so instructors can more naturally describe their needs.

   - The school name is "Mergington High School"
   - The school is a public high school in Mergington, Florida.
   - The school moto is "Branch out and grow".
   - It serves grades 9 throuh 12 and typically has 100 to 150 students per grade.

   - The school year Starts in August and ends in May.
   - There are 3 trimesters per year.
   - There is a 4th summer cycle, but it is optional.
   ```

   > [!TIP]
   > You can add more detail to your description. Check out the `school-overview-ext.md` file.

1. Add the `/agent-knowledge/staff-roles.md` file with the below content

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

   > [!TIP]
   > You can add more detail to your description. Check out the `staff-roles-ext.md` file.

1. Great work! Now we have a job description and some context for our extension to use. Let's test it out!
1. In the left navigation bar, use the debugger to start the extension service.
1. Like previously, navigate to [github.com](https://github.com) and start a generic chat with Copilot.
1. Try interacting with Copilot using some of the below prompts.

   ```
   @my-first-extension-{{login}} I heard you can help me with my students. In what ways?
   ```

   ```
   @my-first-extension-{{login}} Tell me a bit about our school?
   ```

   ```
   @my-first-extension-{{login}} I'd like to create a system for tracking student progress across years and teachers. Let's make a website for it.
   ```

   ```
   @my-first-extension-{{login}} I have a data file exported from our student management system. Show me a graph of each students' grades over the year.
   ```

1. When you are done experimenting with prompts and changing the files, please commit and push the changes.
   - Make sure you are on the `my-ghc-extension` branch.
   - Git should show changes for 4 files:
     - `index.js`
     - `agent-knowledge/job-description.md`
     - `agent-knowledge/school-overview.md`
     - `agent-knowledge/staff-roles.md`.
