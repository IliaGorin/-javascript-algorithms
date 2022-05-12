/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  const arrayStr = str.split(' ');
  newArray = arrayStr.map((word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  });
  return newArray.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит'));
