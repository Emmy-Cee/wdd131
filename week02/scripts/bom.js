const input = document.querySelector("#favchap");
const button = document.querySelector("#submit");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value.trim() != '')  {
        displayItem(input.value);
    }
    input.focus();
});

function displayItem(item) {
    const li = document.createElement("li");
        li.textContent = input.value;
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", function (event) {
            li.remove(li);
            input.focus();
        });
        li.append(deleteButton);
        list.append(li);
        input.value = '';
}


