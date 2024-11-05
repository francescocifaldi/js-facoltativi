const word = "marco"

const letters = word.split('')
const wovels = ['a', 'e', 'i', 'o', 'u']
let newWord = '';

letters.forEach((letter) => {
    if (wovels.includes(letter)) {
        newWord += letter + 'f' + letter
    }
    else {
        newWord += letter
    }
})

console.log(newWord)