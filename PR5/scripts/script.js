let taskInput=document.getElementById("input");
let taskList=document.getElementById("taskList");
let edit=document.createElement("input");
taskInput.addEventListener("keydown", function(event){
    if (event.key==="Enter"){
        let taskText=taskInput.value.trim();
        if (taskText !== ''){
            addTask(taskText);
            taskInput.value='';
        }
    }
});

function addTask(text){
    let taskItem=document.createElement('div');
    let taskCheckbox=document.createElement('input')
    let taskText=document.createElement('p');
    let taskDeleter=document.createElement('button');
    taskCheckbox.type="checkbox";
    taskText.textContent=text;
    taskItem.style.display="flex";
    taskDeleter.textContent="Видалити";
    taskCheckbox.addEventListener('change', function(event) {
        if (event.target.checked) {
          taskCheckbox.remove();
          taskText.style.textDecoration="line-through";
        } 
    })
    taskDeleter.addEventListener('click',function(){
        taskItem.remove();
    })
    taskText.addEventListener('dblclick', function(){
        taskDeleter.remove()
        taskItem.appendChild(edit);
        edit.value=taskItem.firstChild.textContent;
        taskItem.appendChild(taskDeleter);
    })
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(taskDeleter);
    taskList.appendChild(taskItem);
}
