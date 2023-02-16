// Завдання 2

// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// 1. Створити функцію яка буде приймати одне число.
// 2. В середині функції перевіряємо чи це число є простим.
// 3. Після перевірки виводимо повідомлення в console.log().

function showPrimes(number) {
  let check = true;

  for (let i = 2; i < num; i += 1) {
    if (num % i == 0) {
      check = false;
    }
  }

  console.log(`Просте число ${num} є ${check}`);
}

let num = +prompt(`Перевір число тут...`);
showPrimes(num);
