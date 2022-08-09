const text = document.getElementById('textarea1');
const wordCount = document.getElementById('WordCount');
const charCount = document.getElementById('charCount');
const clear = document.getElementById('clear');
const countBtn = document.getElementById('count');


function countWords(){
    const words = text.value;
    const newWords = words.trim().split(" ");
    if(newWords[0] === ''){
        wordCount.innerText = 0;
    }
    else{
        wordCount.innerText = newWords.length;
        charCount.innerText = words.length;
    }
}

function clearText(){
    text.value = '';
    wordCount.innerText = 0;
    charCount.innerText = 0;
}

countBtn.addEventListener('click', countWords);
clear.addEventListener('click', clearText);

