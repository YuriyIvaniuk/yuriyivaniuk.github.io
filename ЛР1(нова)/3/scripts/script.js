function showDialog() {
    var InputValue = document.getElementById("field");
    var monthNumber = InputValue.value;
  
    if (/^[1-9]|1[0-2]$/.test(monthNumber)) {
      monthNumber = parseInt(monthNumber);
      console.log(monthNumber);
  
      switch (true) {
        case monthNumber >= 3 && monthNumber <= 5:
          alert(`Пора року - Весна`);
          break;
        case monthNumber >= 6 && monthNumber <= 8:
          alert(`Пора року - Літо`);
          break;
        case monthNumber >= 9 && monthNumber <= 11:
          alert(`Пора року - Осінь`);
          break;
        case monthNumber <= 2 || monthNumber == 12:
          alert(`Пора року - Зима`);
          break;
        default:
          alert(`Введіть номер місяця від 1 до 12`);
      }
    } else {
      alert("Некоректний номер місяця. Введіть число від 1 до 12.");
    }
  }
  
  var showDialogButton = document.getElementById("showDialog");
  showDialogButton.addEventListener("click", showDialog);
  