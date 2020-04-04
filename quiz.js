// Answer options
const choices = Array.from(document.getElementsByClassName('choice-text'));

// Counter in heading (#1/5)
let questionNumber = document.getElementById('question-number');

let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];

// All questions
let questions = [
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackGayageum.mp3',
    choice1: 'Gayageum',
    choice2: 'Ajaeng',
    choice3: 'Haegeum',
    choice4: 'Jing',
    answer: 1
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackJanggo.mp3',
    choice1: 'Jing',
    choice2: 'Buk',
    choice3: 'Kkwaenggwari',
    choice4: 'Janggo',
    answer: 4
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackHaegeum.mp3',
    choice1: 'Ajaeng',
    choice2: 'Sogo',
    choice3: 'Haegeum',
    choice4: 'Geomungo',
    answer: 3
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackHyangPiri.mp3',
    choice1: 'Taepyeongso',
    choice2: 'Daegeum',
    choice3: 'Buk',
    choice4: 'Hyang Piri',
    answer: 4
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackKkwaenggwari.mp3',
    choice1: 'Danso',
    choice2: 'Kkwaenggwari',
    choice3: 'Buk',
    choice4: 'Janggo',
    answer: 2
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackJing.mp3',
    choice1: 'Jing',
    choice2: 'Sogo',
    choice3: 'Gayageum',
    choice4: 'Hyang Piri',
    answer: 2
},]

const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //game ends
    return window.location.assign('/result.html');
    };

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    track.src = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        
        questionNumber.innerHTML++;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // Set icon to "Play"
        document.getElementById('icon-play-pause').setAttribute('href', '#icon-play');

        getNewQuestion();
        console.log(choices);
    });
});

questionPlayPause = () => {
    if (track.paused) {
        track.play();
    }
    else {
        track.pause();
    }
};

questionSwapIcon = () => {
    if (!track.paused) {
        document.getElementById('icon-play-pause').setAttribute('href','#icon-pause');
    }
    else {
        document.getElementById('icon-play-pause').setAttribute('href','#icon-play');
    }
};

// Swap icon to "Play" when track is ended
track.addEventListener('ended', function(){
    document.getElementById('icon-play-pause').setAttribute('href', '#icon-play');
});


startGame();