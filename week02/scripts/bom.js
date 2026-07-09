// Select the input field for favorite chapter
const input = document.querySelector("#favchap");
// Select the submit button
const button = document.querySelector("#submit");
// Select the list container where chapters will be added
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value.trim() != '')  {
        // Create a new list item element
        const li = document.createElement("li");
        // Create a delete button element
        const deleteButton = document.createElement("button");

        // Set the list item text to the user's input value
        li.textContent = input.value;
        // Set the delete button text to an X emoji
        deleteButton.textContent = "❌";

        deleteButton.addEventListener("click", function (event) {
            // Remove the parent list item when the delete button is clicked
            li.remove(li);
            input.focus();
        });

        // Append the delete button inside the list item
        li.append(deleteButton);
        // Append the complete list item to the list
        list.append(li);
        input.value = '';
    }
    input.focus();
});


