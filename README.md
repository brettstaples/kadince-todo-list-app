# To-Do List App

### The To-Do list application has the given functionalities

1. View a list of to-do items with the ability to filter the list by pending, complete, and all to-dos
2. Create a new to-do item
3. Edit a to-do item
4. Delete a to-do item
5. Complete a to-do item
6. Set a deadline for a to-do item
7. Output whether or not the to-do item was completed on time 

### Tech Stack

- `Express` backend written in Node.js
- `React` frontend built using vite for frontend tooling
- `Firebase` for hosting the application
- `Supabase` using a postgreSQL database
- `Bulma` library used for styling of the application

### Application Structure

- `public` public base path for static asset handling
- `server` backend express directory with database fundamental
- `database` the schema for the postgreSQL database and the configurations for the migrations
- `drizzle` the past database migrations
- `src` frontend react directory with components
- `components` reusable parts of the frontend with specific use cases

### How To Use The Application

1. Utilize the creation form at the top of the page to input a name for the task
2. Choose whether to add a deadline by utilizing the set deadline button
3. Submit the task using the input task button to add the task to the ongoing list below
4. Filter between the task by all, in progress or finished buttons
5. Delete the tasks using the delete button in the top left of the task cell
6. Change the progress of the task with the progess button in the top center of the task cell
7. Edit the name and date of the task with the edit button in the top right of the task cell
8. While editing, input a name and choose whether to input a deadline or remove the deadline then submit
9. Utilize the show deadline button to choose whether the deadline is displayed or not (by default, the deadline will display when in progress and not display when finished)