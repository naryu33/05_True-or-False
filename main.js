const titleText = document.getElementById('title');
const questionText = document.getElementById('question');

let correctAnswer;

const questions = [
    {question: '野尻湖遺跡から( ? )が発見された。　　　1,ナウマンゾウ　2,打製石器　3,磨製石器　4,マンモス', answer: 1},
    {question: '三内丸山遺跡は( ? )にある。　　　1,長野県　2,群馬県　3,青山県　4奈良県,', answer: 3},
    {question: '縄文時代には( ? )というゴミ捨て場が東京にあった。　　　1,森貝塚　2,林貝塚　3,大林貝塚　4,大森貝塚', answer: 4},
    {question: '弥生時代に( ? )が伝来した。これによって、定住化が進んだ。　　　1,稲作　2,土偶　3,須恵器　4,仏教', answer: 1},
    {question: '57年に( ? )が書かれた。　　　1,漢書地理志　2,後漢書東夷伝　3,魏志倭人伝　4,風土記', answer: 2},
    {question: '( ? )に卑弥呼という女王がいた。　　　1,邪馬台国　2,八馬台国　3,邪間台国　4,八間台国', answer: 1}
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

Button1.onmousedown = function () {
    onAnswer(1)
}

Button2.onmousedown = function () {
    onAnswer(2)
}

Button3.onmousedown = function () {
    onAnswer(3)
}

Button4.onmousedown = function () {
    onAnswer(4)
}

function onStart() {
    sum = 0;
    correctAnswer = 0;
    writeQuestion();
}

onStart();

