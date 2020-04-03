// paragraph text //
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000
  });

// begin the game //
var start = document.querySelector("#start");
var intro = document.querySelector("#intro");
var navbar = document.querySelector("#nav")
var quizContainer = document.querySelector("#quiz");

var shuffledQuestions, currentQuestion

start.addEventListener("click", function(){
  currentQuestion = 0
  shuffledQuestions = questions.sort(() => Math.random() -.5)
  startGame();
})

function startGame () {
  intro.classList.add("hide")
  navbar.classList.remove("hide")
  quizContainer.classList.remove("hide")
  showQuestion(question);
}

// question array //
var questions = [
  {
    question:"What is Maya's favorite color?",
    answers: [
      {text: "Yellow, like her skin.", correct: false},
      {text: "Baby gum pink.", correct: false},
      {text: "A Barney purple.", correct: false},
      {text: "Money green baby.", correct: true}
    ]
  },
  {
    question:"What is Maya's social security number?",
    answers: [
      {text: "122-34-5678", correct: false},
      {text: "I don't know,  but I'd like to.", correct: false},
      {text: "What's a social security number?", correct: false},
      {text: "1-800 she'll never tell.", correct: true}
    ]
  },
  {
    question:"Does Maya have children?",
    answers: [
      {text: "Yes, one.", correct: false},
      {text: "Nope", correct: false},
      {text: "She's expecting actually.", correct: false},
      {text: "All you hoes.", correct: true}
    ]
  },
  {
    question:"How many siblings does Maya have?",
    answers: [
      {text: "She has siblings?", correct: false},
      {text: "Two!", correct: false},
      {text: "She's the only girl.", correct: false},
      {text: "Three that she knows of.", correct: true}
    ]
  },
  {
    question:"What's Maya's favorite pastime?",
    answers: [
      {text: "Sleeping.", correct: false},
      {text: "Riding her bike.", correct: false},
      {text: "Crotcheting- ask her to make you a sweater.", correct: false},
      {text: "Pimpin' baby.", correct: true}
    ]
  },
  {
    question:"Where does she want to travel?",
    answers: [
      {text: "To London so she can try fish and chips.", correct: false},
      {text: "To Paris so she can see the Eiffle Tower.", correct: false},
      {text: "Yo mama's house.", correct: false},
      {text: "Any and everywhere she can shawty.", correct: true}
    ]
  }
]

var questionTitle = document.querySelector(".quesiton");
var questionAnswers = document.querySelector(".answers")
var button = document.createElement("button");

function showQuestion(question) {
  questionTitle.innerHTML = question.question
  question.answers.forEach(function (answer) {
    // var button = document.createElement("button");
    button.innerText = answer.text
    button.classList.add("answer");
    // if(answer.correct) {
    //     button.dataset.correct = answer.correct
    // } 
   
    // button.addEventListener('click', answerSelect)
    answers.appendChild(button)
})

}

// clear out the previous answers//
function clearAnswers(){
  while(answers.firstChild) {
      answers.removeChild
      (answers.firstChild)
  }
}


// next question function //
var next = document.querySelector(".next");

next.addEventListener("click", function(){
  showQuestion();
})
