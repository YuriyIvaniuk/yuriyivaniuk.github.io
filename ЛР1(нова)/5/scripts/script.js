while(true){
var inputValue=prompt("Введіть кількість студентів:");
var isNumber=/^\d+$/.test(inputValue);
if (isNumber) {
    var outputValue = parseInt(inputValue);
    alert(outputValue);
    for (var i = 0; i < outputValue; i++) {
        var Name = prompt("Введіть будь ласка прізвище та ім'я студента " + (i + 1));
        // Перевірка на наявність одного пробілу у змінній Name
        var spaceCount = (Name.match(/ /g) || []).length;
        if (spaceCount !== 1) {
            alert("Прізвище та ім'я повинні містити рівно один пробіл.");
            i--; // Повторно запитати для цього студента
            continue;
        }
        // Перевірка на наявність цифр або інших спеціальних символів у імені
        if (!/^[А-Яа-яA-Za-zіІїЇ\s-']+$/.test(Name.split(" ")[1])) {
            alert("Ім'я студента повинно містити тільки букви і не містити цифр або спеціальних символів.");
            i--; // Повторно запитати для цього студента
            continue;
        }
        document.write((i + 1) + ". " + Name + "<br>");
    }
    break;
} else {
    alert("Ваш ввід некоректний, введіть будь ласка ціле число без використання інших символів");
    continue;
}
}