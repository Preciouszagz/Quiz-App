const questions = [
    {
        question: "What is the capital city of Japan?",
        answer: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question:  "Which is  the smallest country in the  world?",
        answer: [
            {  text:  "Vatican City", correct: true},
            {  text:  "Bhutan", correct: false},
            {  text:  "Nepal", correct: false},
            {  text:  "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which country is known for the Eiffel Tower?",
        answer: [
            { text: "Italy", correct: false },
            { text: "France", correct: true },
            { text: "Germany", correct: false },
            { text: "Spain", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answer: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answer: [
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol O?",
        answer: [
            { text: "Gold", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Silver", correct: false },
            { text: "Iron", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answer: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Which ocean is the largest?",
        answer: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question:  "Which is  the  largest  desert in the  world?",
        answer: [
            {  text:  "Kalahari", correct: false},
            {  text:  "Gobi", correct: false},
            {  text:  "Sahara", correct: false},
            {  text:  "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the longest river in the world?",
        answer: [
            { text: "Amazon River", correct: false },
            { text: "Nile River", correct: true },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ]
    },
    {
        question:  "Which is  the  largest  animal in the  world?",
        answer: [
            {  text:  "Shark", correct: false},
            {  text:  "Blue Whale", correct: true},
            {  text:  "Elephant", correct: false},
            {  text:  "Giraffe", correct: false},
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answer: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answer: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "India", correct: false },
            { text: "South Korea", correct: false }
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answer: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false }
        ]
    },
    {
        question: "Which instrument is used to measure temperature?",
        answer: [
            { text: "Barometer", correct: false },
            { text: "Hygrometer", correct: false },
            { text: "Thermometer", correct: true },
            { text: "Anemometer", correct: false }
        ]
    },
    {
        question: "Who is the author of 'Harry Potter' series?",
        answer: [
            { text: "J.K. Rowling", correct: true },
            { text: "J.R.R. Tolkien", correct: false },
            { text: "George R.R. Martin", correct: false },
            { text: "Stephen King", correct: false }
        ]
    },
    {
        question: "What is the currency of the United Kingdom?",
        answer: [
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false },
            { text: "Pound Sterling", correct: true },
            { text: "Yen", correct: false }
        ]
    },
    {
        question: "Which planet is closest to the sun?",
        answer: [
            { text: "Venus", correct: false },
            { text: "Earth", correct: false },
            { text: "Mercury", correct: true },
            { text: "Mars", correct: false }
        ]
    }
];


const  questionElement =  document.getElementById("question");
const  answerButtons =  document.getElementById("answer-buttons");
const  nextButton =  document.getElementById("next-btn");

let  currentQuestionIndex = 0;
let  score = 0;
let  perfectScore = false;

function  startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}

function showQuestion(){
    resetState()
    let  currentQuestion = questions[currentQuestionIndex]
    let  questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "  + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const  button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect  = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
       if(button.dataset.correct === "true"){
            button.classList.add("correct");
       } 
       button.disabled = true
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
   /*  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"; */
    let total = questions.length;
    let passScore = total/2;
    if(score < passScore){
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!. That's fine, but you can surely do better. Give it another try!`;
        nextButton.innerHTML = "Try again";
    }else if(score >= passScore && score < total){
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!. That's a good one. Let's replay, and aim for a perfect score this time, and claim our reward, shall we?`;
        nextButton.innerHTML = "Replay";
    }else{
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!. A perfect score! That's amazing. Congratulations, champ!`;
        nextButton.innerHTML = "Claim Reward";
        perfectScore = true;
    }
    nextButton.style.display  = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (perfectScore) {
        // Automatically download the image
        const link = document.createElement("a");
        link.href = "img/20240531_052205.png";  // Path to your reward image
        link.download = "20240531_052205.png";
        link.click();
    } else {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    }
});


startQuiz();