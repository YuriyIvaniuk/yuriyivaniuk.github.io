    var userBet = prompt("Введіть суму вашої ставки:");
    if (userBet !== null && !isNaN(userBet) && userBet>=1) {
        var randomValue = Math.floor(Math.random() * 11) - 5;
        setTimeout(function () {
            if (randomValue <= 0) {
                alert("Ви не вгадали зі своєю ставкою.");
            } else {
                var winnings = userBet * randomValue;
                alert("Ви виграли " + winnings + " гривень!");
            }
        }, 1000);
    } else {
        alert("Ви ввели некоректну суму ставки або відмінили введення.");
    }