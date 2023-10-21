function startTyping() {
    var userInput = document.getElementById('userInput').value;
    var outputElement = document.getElementById('output');
    outputElement.textContent = '';

    var index = 0;

    var intervalId = setInterval(function () {
        if (index < userInput.length) {
            outputElement.textContent += userInput.charAt(index);
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 100);
}