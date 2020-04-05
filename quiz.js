// Question string
let question = document.getElementById('question');

// Counter in heading (#1/5)
let questionCounterText = document.getElementById('question-counter-text');

// Button "Play"
let buttonPlay = document.getElementById('button-play');

// Answer options containers
let choiceContainers = Array.from(document.getElementsByClassName('choice-container'));

// Answer options text
const choices = Array.from(document.getElementsByClassName('choice-text'));

// Button "Start over"
let startOverButton = document.getElementById('restart');

let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];
let score = 0;

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
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackSogo.mp3',
    choice1: 'Janggo',
    choice2: 'Daegeum',
    choice3: 'Buk',
    choice4: 'Sogo',
    answer: 4
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackAjaeng.mp3',
    choice1: 'Hyang Piri',
    choice2: 'Ajaeng',
    choice3: 'Haegeum',
    choice4: 'Gayageum',
    answer: 2
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackGeomungo.mp3',
    choice1: 'Haegeum',
    choice2: 'Danso',
    choice3: 'Geomungo',
    choice4: 'Janggo',
    answer: 3
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackBuk.mp3',
    choice1: 'Buk',
    choice2: 'Kkwaenggwari',
    choice3: 'Jing',
    choice4: 'Janggo',
    answer: 1
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackDaegeum.mp3',
    choice1: 'Danso',
    choice2: 'Taepyeongso',
    choice3: 'Daegeum',
    choice4: 'Gayageum',
    answer: 3
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackTaepyeongso.mp3',
    choice1: 'Haegeum',
    choice2: 'Taepyeongso',
    choice3: 'Ajaeng',
    choice4: 'Danso',
    answer: 2
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackDanso.mp3',
    choice1: 'Danso',
    choice2: 'Hyang Piri',
    choice3: 'Geomungo',
    choice4: 'Daegeum',
    answer: 4
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackJing.mp3',
    choice1: 'Jing',
    choice2: 'Sogo',
    choice3: 'Gayageum',
    choice4: 'Hyang Piri',
    answer: 1
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
    return endGame();
    };

    questionCounter++;
    questionCounterText.innerText = '#'+questionCounter + '/' + MAX_QUESTIONS;

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
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // Current question icon in progress bar
        let currentQuestionIcon = document.getElementById('progress-icon-'+questionCounter);

        // Correct or incorrect answer
        let validation = '';
        if (selectedAnswer == currentQuestion.answer) {
            validation = 'correct';
            selectedChoice.innerHTML += ' 👏🏼'
            currentQuestionIcon.innerText = '👏🏼'
            incrementScore();
        }
        else {
            validation = 'incorrect';
            selectedChoice.innerHTML += ' 💩'
            currentQuestionIcon.innerText = '💩'
        }

        // Timeout before new question appears
        setTimeout(() => {
            getNewQuestion();
            // Set icon to "Play"
            document.getElementById('icon-play-pause').setAttribute('href', '#icon-play');
        }, 1000);
        console.log(score);
    });
});

incrementScore = () => {
    score++;
}

endGame = () => {
    track.pause();
    question.innerHTML = "You've got "+score+"&nbsp;"+"out"+"&nbsp;"+"of"+"&nbsp;"+MAX_QUESTIONS+"!";
    buttonPlay.style.visibility = 'hidden';
    choiceContainers.forEach(container => {
        container.style.display = 'none';
    });
    startOverButton.style.display = '';
}

// Simpler function to play and pause
questionPlayPause = () => {
    if (track.paused) {
        track.play();
    }
    else {
        track.pause();
    }
};

// Simpler function to swap icon to pause and back
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