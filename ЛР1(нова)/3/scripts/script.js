function showDialog(){
var InputValue=document.getElementById("field")
var monthNumber = InputValue.value
var Seasons=["Зима", "Весна", "Літо", "Осінь"]
if (monthNumber==3 || monthNumber==4 || monthNumber==5){
    alert(Seasons[1]);
}
else if(monthNumber==6 || monthNumber==7 || monthNumber==8){
    alert(Seasons[2]);
}
else if(monthNumber==9 || monthNumber==10 || monthNumber==11){
    alert(Seasons[3]);
}
else if(monthNumber==12 || monthNumber==2 || monthNumber==1){
    alert(Seasons[0]);
}
else{
    alert("Неправильне число");
}
}

var showDialogButton = document.getElementById("showDialog");
showDialogButton.addEventListener("click", showDialog);

