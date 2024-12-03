document.getElementById("addReminderBtn").addEventListener("click", function () {
    const newReminderInput = document.getElementById("newReminder");
    const newReminderText = newReminderInput.value.trim();

    if (newReminderText) {
        const reminderList = document.getElementById("reminderList");

        const newLi = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "complete-checkbox";

        const span = document.createElement("span");
        span.textContent = newReminderText;

        newLi.appendChild(checkbox);
        newLi.appendChild(span);
        reminderList.appendChild(newLi);

        newReminderInput.value = ""; // Clear the input field
    }
});

// Toggle completed style when checkbox is clicked
document.getElementById("reminderList").addEventListener("change", function (e) {
    if (e.target.classList.contains("complete-checkbox")) {
        const listItem = e.target.nextElementSibling;
        if (e.target.checked) {
            listItem.style.textDecoration = "line-through";
            listItem.style.color = "#888";
        } else {
            listItem.style.textDecoration = "none";
            listItem.style.color = "#333";
        }
    }
});
