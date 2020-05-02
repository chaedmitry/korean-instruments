// Question string
let question = document.getElementById('question');

// Counter in heading (#1/5)
let questionCounterText = document.getElementById('question-counter-text');

// Button "Play"
let buttonPlay = document.getElementById('button-play');

// Choices parent container
let choices = document.getElementById('choices');

// Choice containers
let choiceContainers = Array.from(document.getElementsByClassName('choice-container'));

// Choices text
const choiceTexts = Array.from(document.getElementsByClassName('choice-text'));

// Choices pictures
const choicePics = Array.from(document.getElementsByClassName('choice-pic'));

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
    choicepic1: 'img/instruments-small/gayageum-small.svg',

    choice2: 'Hyang Bipa',
    choicepic2: 'img/instruments-small/bipa-small.svg',

    choice3: 'Haegeum',
    choicepic3: 'img/instruments-small/haegeum-small.svg',

    choice4: 'Geomungo',
    choicepic4: 'img/instruments-small/geomungo-small.svg',

    answer: 1
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackJanggo.mp3',
    choice1: 'Jing',
    choicepic1: 'img/instruments-small/jing-small.svg',

    choice2: 'Buk',
    choicepic2: 'img/instruments-small/buk-small.svg',

    choice3: 'Sogo',
    choicepic3: 'img/instruments-small/sogo-small.svg',

    choice4: 'Janggo',
    choicepic4: 'img/instruments-small/janggo-small.svg',

    answer: 4
},

{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackHaegeum.mp3',
    choice1: 'Ajaeng',
    choicepic1: 'img/instruments-small/ajaeng-small.svg',

    choice2: 'Hyang Piri',
    choicepic2: 'img/instruments-small/hyangpiri-small.svg',

    choice3: 'Haegeum',
    choicepic3: 'img/instruments-small/haegeum-small.svg',

    choice4: 'Geomungo',
    choicepic4: 'img/instruments-small/geomungo-small.svg',

    answer: 3
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackHyangPiri.mp3',
    choice1: 'Taepyeongso',
    choicepic1: 'img/instruments-small/taepyeongso-small.svg',

    choice2: 'Daegeum',
    choicepic2: 'img/instruments-small/daegeum-small.svg',

    choice3: 'Danso',
    choicepic3: 'img/instruments-small/danso-small.svg',

    choice4: 'Hyang Piri',
    choicepic4: 'img/instruments-small/hyangpiri-small.svg',

    answer: 4
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackKkwaenggwari.mp3',
    choice1: 'Jing',
    choicepic1: 'img/instruments-small/jing-small.svg',

    choice2: 'Kkwaenggwari',
    choicepic2: 'img/instruments-small/kkwaenggwari-small.svg',

    choice3: 'Buk',
    choicepic3: 'img/instruments-small/buk-small.svg',

    choice4: 'Janggo',
    choicepic4: 'img/instruments-small/janggo-small.svg',

    answer: 2
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackSogo.mp3',
    choice1: 'Janggo',
    choicepic1: 'img/instruments-small/janggo-small.svg',

    choice2: 'Jing',
    choicepic2: 'img/instruments-small/jing-small.svg',

    choice3: 'Buk',
    choicepic3: 'img/instruments-small/buk-small.svg',

    choice4: 'Sogo',
    choicepic4: 'img/instruments-small/sogo-small.svg',

    answer: 4
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackAjaeng.mp3',
    choice1: 'Hyang Piri',
    choicepic1: 'img/instruments-small/hyangpiri-small.svg',

    choice2: 'Ajaeng',
    choicepic2: 'img/instruments-small/ajaeng-small.svg',

    choice3: 'Haegeum',
    choicepic3: 'img/instruments-small/haegeum-small.svg',
    
    choice4: 'Gayageum',
    choicepic4: 'img/instruments-small/gayageum-small.svg',
    
    answer: 2
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackGeomungo.mp3',
    choice1: 'Haegeum',
    choicepic1: 'img/instruments-small/haegeum-small.svg',

    choice2: 'Gayageum',
    choicepic2: 'img/instruments-small/gayageum-small.svg',

    choice3: 'Geomungo',
    choicepic3: 'img/instruments-small/geomungo-small.svg',
    
    choice4: 'Hyang Bipa',
    choicepic4: 'img/instruments-small/bipa-small.svg',
    
    answer: 3
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackBuk.mp3',
    choice1: 'Buk',
    choicepic1: 'img/instruments-small/buk-small.svg',
    
    choice2: 'Kkwaenggwari',
    choicepic2: 'img/instruments-small/kkwaenggwari-small.svg',

    choice3: 'Jing',
    choicepic3: 'img/instruments-small/jing-small.svg',

    choice4: 'Janggo',
    choicepic4: 'img/instruments-small/janggo-small.svg',

    answer: 1
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackDaegeum.mp3',
    choice1: 'Danso',
    choicepic1: 'img/instruments-small/danso-small.svg',
    
    choice2: 'Taepyeongso',
    choicepic2: 'img/instruments-small/taepyeongso-small.svg',

    choice3: 'Daegeum',
    choicepic3: 'img/instruments-small/daegeum-small.svg',

    choice4: 'Hyang Piri',
    choicepic4: 'img/instruments-small/hyangpiri-small.svg',

    answer: 3
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackTaepyeongso.mp3',
    choice1: 'Haegeum',
    choicepic1: 'img/instruments-small/haegeum-small.svg',

    choice2: 'Taepyeongso',
    choicepic2: 'img/instruments-small/taepyeongso-small.svg',

    choice3: 'Hyang Piri',
    choicepic3: 'img/instruments-small/hyangpiri-small.svg',

    choice4: 'Danso',
    choicepic4: 'img/instruments-small/danso-small.svg',

    answer: 2
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackDanso.mp3',
    choice1: 'Danso',
    choicepic1: 'img/instruments-small/danso-small.svg',

    choice2: 'Hyang Piri',
    choicepic2: 'img/instruments-small/hyangpiri-small.svg',

    choice3: 'Taepyeongso',
    choicepic3: 'img/instruments-small/taepyeongso-small.svg',

    choice4: 'Daegeum',
    choicepic4: 'img/instruments-small/daegeum-small.svg',

    answer: 1
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackJing.mp3',
    choice1: 'Jing',
    choicepic1: 'img/instruments-small/jing-small.svg',

    choice2: 'Sogo',
    choicepic2: 'img/instruments-small/sogo-small.svg',

    choice3: 'Buk',
    choicepic3: 'img/instruments-small/buk-small.svg',

    choice4: 'Kkwaenggwari',
    choicepic4: 'img/instruments-small/kkwaenggwari-small.svg',

    answer: 1
},
{
    question: 'https://chaedmitry.github.io/korean-instruments/sounds/trackHyangBipa.mp3',
    choice1: 'Geomungo',
    choicepic1: 'img/instruments-small/geomungo-small.svg',

    choice2: 'Gayageum',
    choicepic2: 'img/instruments-small/gayageum-small.svg',

    choice3: 'Hyang Bipa',
    choicepic3: 'img/instruments-small/bipa-small.svg',

    choice4: 'Ajaeng',
    choicepic4: 'img/instruments-small/ajaeng-small.svg',

    answer: 3
},
]

const maxQuestions = 5;

startGame = () => {
    questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    //game ends
    return endGame();
    };

    questionCounter++;
    questionCounterText.innerText = '#'+questionCounter + '/' + maxQuestions;

    // Randomly choose a question
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];

    // Set a track depending on question
    track.src = currentQuestion.question;
    
    // Fetch choice pics from question object and insert to every choice
    choicePics.forEach(pic => {
        const number = pic.dataset['number'];
        pic.src = currentQuestion['choicepic' + number];
    })

    // Fetch choice text from question object and insert to every choice
    choiceTexts.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    // Remove this question from available questions
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choiceContainers.forEach(container => {
    container.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.children[1].dataset['number'];

        // Current question icon in progress bar
        let currentQuestionIcon = document.getElementById('progress-icon-'+questionCounter);

        // Correct or incorrect answer
        let validation = '';
        if (selectedAnswer == currentQuestion.answer) {
            validation = 'correct';
            selectedChoice.children[1].innerText = '👏🏼'
            currentQuestionIcon.innerText = '👏🏼'
            incrementScore();
        }
        else {
            validation = 'incorrect';
            selectedChoice.children[1].innerText = '💩'
            currentQuestionIcon.innerText = '💩'
        }

        // Timeout before new question appears
        setTimeout(() => {
            getNewQuestion();
            // Set icon to "Play"
            document.getElementById('icon-play-pause').setAttribute('href', '#icon-play');
        }, 1000);
    })
})

incrementScore = () => {
    score++;
}

endGame = () => {
    track.pause();
    question.innerHTML = "You've got "+score+"&nbsp;"+"out"+"&nbsp;"+"of"+"&nbsp;"+maxQuestions+"!";
    buttonPlay.style.visibility = 'hidden';
    choices.style.display = 'none';
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
track.addEventListener('ended', e => {
    document.getElementById('icon-play-pause').setAttribute('href', '#icon-play');
});

// Listen for click on "Play" button
document.querySelector('#button-play').addEventListener('click', () => {
    questionPlayPause();
    questionSwapIcon();
});

startGame();