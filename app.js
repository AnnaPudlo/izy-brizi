var fullName;

do {
    fullName=prompt("Введите, пожалуйста, ваше имя и фамилию:", "");
} while ((fullName === null)||(fullName===""));

var age = confirm("Вам уже исполнилось 18?");

var info = "Привет, " + fullName + '! ';

if (age) {
    info+="Вот ваша водка и сигареты!";
} else {
    info+="Сори, водку не продам. Вот ваши сигареты!"
}

alert(info);