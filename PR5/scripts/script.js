let taskInput = document.getElementById("input");
let taskList = document.getElementById("taskList");
let CheckedButton=document.getElementById("Checked");
let UncheckedButton=document.getElementById("Unchecked");
let tasksObject = [];
tasksObject = JSON.parse(localStorage.getItem('tasks')) || [];

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let taskText = taskInput.value.trim();
        let check = false;
        let date = new Date().toDateString();
        if (taskText !== '') {
            SaveToLocal(taskInput.value.trim(), false);
            addTask(taskText, check, date, tasksObject.length - 1);
            taskInput.value = '';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    let savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        for (let i = 0; i < tasksObject.length; i++) {
            let text = tasksObject[i].text;
            let check = tasksObject[i].checked;
            let date = tasksObject[i].date;
            addTask(text, check, date, i);
        }
    }
});
function addTask(text, check, date, index) {
    let taskItem = document.createElement('div');
    let taskCheckbox = document.createElement('input')
    let taskText = document.createElement('p');
    let taskDeleter = document.createElement('button');
    let edit = document.createElement("input");
    let divDate = document.createElement('div');

    taskCheckbox.type = "checkbox";
    taskText.textContent = text;
    taskCheckbox.classList.add("changer")
    taskItem.classList.add("item");
    taskDeleter.textContent = "Видалити";

    let textHolder = taskText.textContent;
    let editTaskHandler = editTask(taskItem, taskDeleter, taskText, edit, textHolder, check);
    taskText.addEventListener('dblclick', editTaskHandler);

    taskCheckbox.addEventListener('change', function (event) {
        if (event.target.checked) {
            taskText.removeEventListener("dblclick", editTaskHandler);
            taskCheckbox.disabled=true;
            taskCheckbox.style.scale="0";
            taskText.style.color="lightgray";
            taskText.style.textDecoration = "line-through";
            SaveToLocal(taskText.textContent,true,index);
        }
    });
    edit.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            if (edit.value.trim() !== "") {
                taskText.textContent = edit.value
                SaveToLocal(edit.value, false, index)
            }
        }
        if (event.key === "Escape") {
            taskText.textContent = textHolder;
        }
    });
    divDate.innerHTML = date;
    taskDeleter.addEventListener('click', function () {
        taskItem.remove();
        tasksObject.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasksObject));
        taskList.innerHTML = '';
        tasksObject.forEach((task, index) => {
            addTask(task.text, task.checked, task.date, index);
        });
    });

    if (check === true) {
        taskItem.appendChild(taskCheckbox);
        taskCheckbox.disabled=true;
        taskCheckbox.style.scale="0";
        taskText.style.color="lightgray";
        taskText.style.textDecoration = "line-through";
    } else {
        taskItem.appendChild(taskCheckbox);
    }
    taskItem.appendChild(taskText);
    taskItem.appendChild(taskDeleter);
    taskItem.appendChild(divDate);
    taskList.appendChild(taskItem);
}
CheckedButton.addEventListener('click', function () {
    let checkedTasks = tasksObject.filter(task => task.checked);
    let uncheckedTasks = tasksObject.filter(task => !task.checked);

    taskList.innerHTML = '';
    let reorderedTasks = [...uncheckedTasks, ...checkedTasks];
    reorderedTasks.forEach((task, index) => {
        addTask(task.text, task.checked, task.date, index);
    });
    tasksObject = reorderedTasks;
    localStorage.setItem('tasks', JSON.stringify(tasksObject));
    console.log(tasksObject);
});
UncheckedButton.addEventListener('click', function () {
    let checkedTasks = tasksObject.filter(task => task.checked);
    let uncheckedTasks = tasksObject.filter(task => !task.checked);
    taskList.innerHTML = '';
    let reorderedTasks = [...checkedTasks, ...uncheckedTasks];
    reorderedTasks.forEach((task, index) => {
        addTask(task.text, task.checked, task.date, index);
    });
    tasksObject = reorderedTasks;
    localStorage.setItem('tasks', JSON.stringify(tasksObject));
    console.log(tasksObject);
});
function editTask(taskItem, taskDeleter, taskText, edit, textHolder, isChecked) {
    return function () {
        if (isChecked) {
            return;
        }

        edit.value = taskText.textContent;
        taskText.textContent = "";
        taskText.appendChild(edit);
    };
}

function SaveToLocal(text, check, index) {
    let data = new Date().toDateString();
    console.log("index=" + index);
    let tasks = {
        text: text,
        checked: check,
        date: data
    }
    if (index !== undefined && index >= 0 && index < tasksObject.length) {
        tasksObject[index] = tasks
        localStorage.setItem("tasks", JSON.stringify(tasksObject))
    }
    if (index > tasksObject.length - 1 || index === undefined) {
        tasksObject.push(tasks);
        localStorage.setItem("tasks", JSON.stringify(tasksObject))
    }
}
console.log(tasksObject);

//localStorage.setItem("tasks",JSON.stringify([]))
// Array.prototype.push.call(tasksObject,tasks.text,tasks.checked,tasks.date);
