## Task Tracker Documentation

This documentation provides an overview of the "Task Tracker" application, which is a simple web-based tool for managing tasks. The application allows users to add tasks with a title, date, time, and status, and then filter the tasks by status.

### Files

The application consists of three files:

1. **index1.html:** This file contains the HTML structure of the application. It defines the layout, elements, and functionality.
2. **styles1.css:** This file contains the CSS styles for the application. It controls the appearance and presentation.
3. **script1.js:** This file contains the JavaScript code that provides the dynamic behavior of the application. It handles adding tasks, filtering tasks, and deleting tasks.

### Index1.html (index1.html)

The `index1.html` file provides the basic structure of the application. It includes the following elements:

* **Head:**
    * **Meta tags:** Specifies character set (`UTF-8`), viewport settings, and the title of the page ("Task Tracker").
    * **External CSS:** Links the `styles1.css` file for styling.
    * **Font import:** Imports the "Poppins" font from Google Fonts for a consistent appearance.

* **Body:**
    * **Container:** The main container div that holds all the application elements.
    * **Code:** A div for the main code of the application.
        * **Filter buttons:** Buttons for filtering tasks by status: "On Going", "In Process", "Completed", and "Canceled".
        * **Recent tasks:** A heading for the recent tasks section.
        * **To-Do List:** A section for the task list with a calendar.
            * **Task Form:** A form for adding new tasks, with input fields for:
                * Task title
                * Task date
                * Task time
                * Task status (dropdown)
                * Add Task button
            * **Task list:** A div with the ID "taskList" to display the added tasks.
    * **Script:** A script tag linking the `script1.js` file for functionality.

### Styles1.css (styles1.css)

The `styles1.css` file provides the visual appearance of the application, defining the following:

* **Overall styles:**
    * Font family and sizes
    * Basic layout and spacing
    * Button styles

* **Specific element styles:**
    * Task form elements (input fields, dropdown, button)
    * Task list items (display, spacing)
    * Filter buttons (appearance, hover effects)
    * Delete button (style and positioning)

### Script1.js (script1.js)

The `script1.js` file provides the dynamic behavior of the application. It contains the following functions:

* **`addTask()`:**
    * Gets the task details from the form inputs.
    * Creates a new task item (`div`) and adds it to the task list (`taskList`).
    * Includes a delete button for each task item.
    * Clears the input fields after adding a task.

* **`filterTasks(status)`:**
    * Takes a status as input.
    * Loops through all task items.
    * Shows only the tasks matching the given status.
    * Hides the tasks that don't match the status.

* **`deleteTask()`:**
    * This function is called when the delete button is clicked.
    * Removes the corresponding task item from the task list.

### Functionality

The application works as follows:

1. The user can add tasks by filling out the task form.
2. Each added task is displayed in the task list.
3. The user can filter the tasks by status using the filter buttons.
4. The user can delete tasks by clicking the delete button next to each task.

### Further Improvements

Here are some potential improvements that could be added to the application:

* **Task editing:** Allow users to edit the details of existing tasks.
* **Task sorting:** Add the ability to sort tasks by different criteria (e.g., due date, priority).
* **Visual indicators:** Use different colors or icons to distinguish between different task statuses.
* **Local storage:** Save the task data in the user's browser's local storage so that the data persists even after the page is closed.

This documentation provides a comprehensive overview of the Task Tracker application. With the provided code and explanations, you can understand the functionality and create your own task tracker application.
