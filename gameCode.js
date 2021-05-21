//3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

var gamerAnswer = 0,
    ok = false,
    correctAnswers = 0,
    checkIncorrect = 0,
    score = 0;

    document.write("<h1> Игра - Кто хочет стать миллионером</h1>")

for (var n = 0; n < questions.length; n++) {

    do { // Цикл проверки существования номера варианта
        gamerAnswer = +prompt("Вопрос " + (n + 1) + " : " + questions[n].question + "\n" + "Варианты ответов:" + "\n" + questions[n].v1 + "\n" + questions[n].v2 + "\n" + questions[n].v3 + "\n" + questions[n].v4 + "\nВведите номер варианта ответа.\nВыход из игры -1");
        ok = ((gamerAnswer > 0 && gamerAnswer < 5) || (gamerAnswer == -1)) ? gamerAnswer : gamerAnswer = +prompt("Вы ввели несуществующий номер варианта ответа. \nВведите номер варианта ответа");
    } while (!ok)

    if (gamerAnswer == -1) {
        alert("До свидания");
        break;
    }
    if (gamerAnswer == questions[n].answer) {
        score += (n + 1) * 100;
        alert("Отлично! Правильно! \nВаш призовой фонд пополнен на" + " " + score + " рублей");
        correctAnswers++;
    } else {
        checkIncorrect++;
        if (checkIncorrect < 3) {
            alert("У Вас неверный ответ\n Осталось " + (3 - checkIncorrect) + " попытки");
        } else {
            alert("У Вас закончились попытки");
            break;
        }
    }
}
if (score == 0) {
    alert('К сожеланию, Вам не удалось заработать, не растраивайтесь');
} else
    alert("У Вас было " + correctAnswers + " правильных ответа " + "\nВаш призовой фонд " + score + " рублей");