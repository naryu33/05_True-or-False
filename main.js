const titleText = document.getElementById('title');
const questionText = document.getElementById('question');

let correctAnswer;

const questions = [
    {question: '野尻湖遺跡から打製石器が発見された。○か×か。', answer: 0},
    {question: '三内丸山遺跡は長野県にある。○か×か。', answer: 0},
    {question: '縄文時代に石包丁が使われていた。○か×か。', answer: 0},
    {question: '弥生時代に稲作が伝来した。○か×か。', answer: 1},
    {question: '57年に漢書地理志が書かれた。○か×か。', answer: 0},
    {question: '邪馬台国に卑弥呼という女王がいた。○か×か。', answer: 1}
];

function writeQuestion() {
    titleText.textContent = `第${sum + 1}問`;
    questionText.textContent = questions[sum].question;
}

function onAnswer(ans) {
    if (ans === questions[sum].answer) {
        console.log('正解');
        correctAnswer++;
    } else {
        console.log('不正解');
    }
    
    sum++;

    if (sum >= questions.length) {
        alert(`${questions.length}問中${correctAnswer}問正解です`);   
        onStart();
    } else {
        writeQuestion();
    }
}

function onStart() {
    sum = 0;
    correctAnswer = 0;
    writeQuestion();
}

onStart();