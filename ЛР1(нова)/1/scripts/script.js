function showDialogBox() {
    var userResponse = alert("Натисність OK")

    // Перевірити, чи користувач натиснув "OK"
    if (userResponse !== null) {
        // Вивести фразу у вікні браузера
        document.write("Hello, world!");
    }
    else{
        document.write("Ви не натиснули ОК")
    }
}
showDialogBox()