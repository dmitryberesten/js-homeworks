// Завдання 3

// Написати розв’язок нижче описаного завдання за допомогою function expression or arrow:
// 1. Створіть функцію, в яку передається 2 параметри, які користувач вводить через вікно prompt().
// 2. Потрібно щоб функція виводила діапазон тільки простих чисел console.log(), між тими які ввів користувач.

// Приклад роботи:
// simpleNumber(10,15) – має повернути 11, 13
// simpleNumber (2,20) – має повернути 2,3,5,7,11,13,17,19

let n1 = +prompt(`write first number`);
let n2 = +prompt(`write second number`);

let sN = (n1, n2) => {
  nextPrime: for (let i = n1; i <= n2; i += 1) {

    for (let j = 2; j < i; j += 1) {
      if (i % j == 0) continue nextPrime;
    }

    console.log(i);
  }
};

let simpleNumber = sN(n1, n2);