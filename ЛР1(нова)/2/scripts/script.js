function showDialog(){
    var text=document.getElementById("field")
    var InputValue = text.value.trim();
    var textAlert=document.getElementById("textAlert")
    var alertValue=textAlert.value;
    if (InputValue.trim() !== "") {
        alert(InputValue);
        alertValue="";
        textAlert.innerText = alertValue;
    } else {
        alertValue="Введіть будь ласка текст!";
        textAlert.style.color = "red";
        textAlert.innerText = alertValue;
        setTimeout(function() {
            textAlert.style.color = "";
            textAlert.innerText = "";
        }, 1500);
    }
}/*if value>0*/
var showDialogButton = document.getElementById("showDialog");
showDialogButton.addEventListener("click", showDialog);