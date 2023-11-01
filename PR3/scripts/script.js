function addItem(){
    let Input=document.getElementById("myInput");
    let Checker=document.getElementById("checkbox");
    let li=document.createElement("li");
    let edit=document.createElement("input");
    let itemDeleteButton=document.createElement("button");
    itemDeleteButton.textContent="Видалити";
    let itemEditButton=document.createElement("button");
    itemEditButton.textContent="Редагувати";
    let saveButton=document.createElement("button");
    saveButton.textContent="Готово";
    let cancelButton=document.createElement("button");
    cancelButton.textContent="Відміна";
    let liContent;

    let list=document.getElementById("list");
    
    li.style.margin="0.5rem";
    itemDeleteButton.style.margin="0 0.5rem";
    saveButton.style.margin="0 0.5rem";
    
    itemDeleteButton.addEventListener("click", function(){
        if (confirm("Точно видалити?")){
            li.remove();
        }
    })
    
    itemEditButton.addEventListener("click", function(){
        li.appendChild(edit);
        li.appendChild(saveButton);
        li.appendChild(cancelButton);
        edit.value=li.firstChild.textContent;
        itemDeleteButton.remove();
        itemEditButton.remove();
        liContent=li.firstChild.textContent;
        li.firstChild.textContent="";
    })

    saveButton.addEventListener("click", function(){
        li.textContent=edit.value;
        li.appendChild(itemDeleteButton);
        li.appendChild(itemEditButton);
    })

    cancelButton.addEventListener("click", function(){
        li.textContent=liContent;
        li.appendChild(itemDeleteButton);
        li.appendChild(itemEditButton);
    })
    li.textContent=Input.value;
    li.appendChild(itemDeleteButton);
    li.appendChild(itemEditButton);
    
    list.appendChild(li)
    
    Input.focus();
    if (Checker.checked){
        Input.value=""
    }
}