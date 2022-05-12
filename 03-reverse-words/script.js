/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
 */

function reverseWords(str) {
  const array = str.split(' ');
  let result = '';
  for (let i = 0; i < array.length; i++) {
    if (!result) {
      result = array[array.length - 1 - i];
    } else {
      result = result + ' ' + array[array.length - 1 - i];
    }
  }
  return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"
