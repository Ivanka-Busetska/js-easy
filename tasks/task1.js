// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u, y) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  return str.replace(/[aeiouy]/gi, '*');
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;