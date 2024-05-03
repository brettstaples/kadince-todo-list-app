# To-Do List App

### The To-Do list application has the given functionalities

1. View a list of to-do items with the ability to filter the list by pending, complete, and all to-dos
2. Create a new to-do item
3. Edit a to-do item
4. Delete a to-do item
5. Complete a to-do item
6. Set a deadline for a to-do item
7. Output whether the to-do item was completed on time 
8. Remove Deadline
9. Optionally show the deadline and finished dates

### Tech Stack

- `Express` backend written in Node.js
- `React` frontend built using vite for frontend tooling
- `Firebase` for hosting the application
- `Supabase` using a postgreSQL database
- `Bulma` library used for styling of the application
- `Cypress` frontend test automation tool

### Application Structure

- `public` public base path for static asset handling
- `server` backend express directory with database fundamental
- `database` the schema for the postgreSQL database and the configurations for the migrations
- `drizzle` the past database migrations
- `src` frontend react directory with components
- `components` reusable parts of the frontend with specific use cases
- `cypress` end to end testing directory for application

### How To Use The Application

1. Utilize the creation form at the top of the page to input a name for the task
2. Choose whether to add a deadline by utilizing the set deadline button
3. Submit the task using the input task button to add the task to the ongoing list below
4. Filter between the task by all, in progress or finished buttons
5. Delete the tasks using the delete button in the top left of the task cell
6. Change the progress of the task with the progress button in the top center of the task cell
7. Completing a task will set the completion date for the task chosen
8. Edit the name and deadline of the task with the edit button in the top right of the task cell
9. While editing, input a name and choose whether to input a deadline or remove the deadline then submit
10. Utilize the show date(s) button to choose whether the date(s) is displayed or not (by default, the date(s) will display when in progress and not display when finished)
11. After completing a task with a deadline there will be text describing whether the task was completed on time or not

### Cypress Testing

#### Testing Files
- `header_test` demo test to demonstrate the functionality of cypress testing within the project
- `create_task_test` inputting a new task into the task list
- `delete_task_test` deleting a task from the task list
- `edit_task_test` editing a task from the task list
- `filter_tasks_test` filtering all tasks from the task list

#### Notable Bug Tests
1. Testing whether a deadline was inputted after selecting to input, typing a deadline, exiting the input and submitting the task
2. Testing whether filtering will output the tasks in the correct place on the webpage
3. Testing whether editing a task will allow the deadline input to be nullified if exited then submitting the edits
