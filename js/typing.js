var roles = [
    "student :)",
    "< frontend developer />",
    "$ programmer",
    "#! /coder"
];

var typingDelay = 45;
var removeDelay = 35;

var initialTypingDelay = 750;
var delayBeforeRemove = 1500;
var delayBeforeType = 400;

window.addEventListener("load", () => {
    let field = document.getElementById("roles_text");

    let typeWord = (words, currentWordIndex, currentLetterIndex) => {
        if (currentLetterIndex < words[currentWordIndex].length) {
            field.textContent += words[currentWordIndex][currentLetterIndex];
            setTimeout(() => {
                typeWord(roles, currentWordIndex, currentLetterIndex + 1);
            }, typingDelay);
        }
        else {
            setTimeout(() => {
                removeWord(words, currentWordIndex, currentLetterIndex);
            }, delayBeforeRemove);
        }
    };

    let removeWord = (words, currentWordIndex, currentLetterIndex) => {
        if (field.textContent.length > 0) {
            field.textContent = field.textContent.substring(0, field.textContent.length - 1);
            setTimeout(() => {
                removeWord(words, currentWordIndex, currentLetterIndex);
            }, removeDelay);
        }
        else {
            let nextIndex = currentWordIndex + 1;
            if (nextIndex >= words.length) {
                nextIndex = 0;
            }
            setTimeout(() => {
                typeWord(roles, nextIndex, 0);
            }, delayBeforeType);
        }
    };

    setTimeout(() => {
        typeWord(roles, 0, 0);
    }, initialTypingDelay);
}, true);
