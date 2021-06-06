function showRandom() {
    let randomNumbers = [];
    let sum = 0;
    let multi = 1;

    randomNumbers.length = 10;

    console.log(randomNumbers);

    for (let i = 0; i < 10; i++) {

        randomNumbers[i] = Math.round(Math.random() * 20) - 10;
        sum += randomNumbers[i];
        multi *= randomNumbers[i];
    }

    alert("Рандомный список чисел: " + randomNumbers);
    alert("Максимальное число: " + Math.max.apply(null, randomNumbers));
    alert("Минимальное число: " + Math.min.apply(null, randomNumbers));
    alert("Среднее арифметическое: " + sum / randomNumbers.length);
    alert("Сумма всех чисел: " + sum);
    alert("Произведение всех чисел: " + multi);
}