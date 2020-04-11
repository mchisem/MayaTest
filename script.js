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

//variables//
const start = document.querySelector("#start-button");
var exit = document.querySelector("#exit");
var timer = document.querySelector("#timer");
var next = document.querySelector("#next");
var highScore = document.querySelector("#score");
var navbar = document.querySelector("#nav");
var intro = document.querySelector("#intro");
var questionContainer = document.querySelector(".questions-container");

var shuffledQuestions;
var currentQuestion = 0;

var secondsLeft = 75;

//start game event listener//
start.addEventListener('click', function(){
    score = 0;
    currentQuestion = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    startGame();
    nextShuffle();
})

//timer function//
function startGame() {
    navbar.classList.remove("hide");
    intro.classList.add("hide");
    questionContainer.classList.remove("hide");

    var timerInterval = setInterval(function(){
      secondsLeft --;
      timer.textContent = 'Time: ' + secondsLeft;

      if(secondsLeft === 0) {
          clearInterval(timerInterval);
          endGame();
          console.log("Game Over!");
      }
  }, 1000);

}

//quiz question/answer array//
var questions = [
  {
    question:"What is Maya's favorite color?",
    answers: [
      {text: "Yellow, like her skin", correct: false},
      {text: "Baby gum pink", correct: false},
      {text: "Money green baby", correct: true},
      {text: "A Barney purple", correct: false}
    ]
  },
  {
    question:"When is Maya's birthday?",
    answers: [
      {text: "Sometime on the Spring?", correct: false},
      {text: "June 20", correct: false},
      {text: "January 21", correct: false},
      {text: "January 22", correct: true}
    ]
  },
  {
    question:"Has Maya ever been married?",
    answers: [
      {text: "No", correct: false},
      {text: "Yes", correct: true}
    ]
  },
  {
    question:"BONUS: What is Maya's social security number?",
    answers: [
      {text: "122-34-5678", correct: false},
      {text: "Why do you know this?", correct: true},
      {text: "I don't know,  but I'd like to", correct: false},
      {text: "What's a social security number?", correct: false},
    ]
  },
  {
    question:"What's Maya's favorite pastime?",
    answers: [
      {text: "Sleeping", correct: false},
      {text: "Riding her bike", correct: false},
      {text: "Pimpin' baby", correct: true},
      {text: "Crotcheting- ask her to make you a sweater", correct: false}
    ]
  },
  {
    question:"Where does she want to travel?",
    answers: [
      {text: "To London so she can try fish and chips", correct: false},
      {text: "Any and everywhere she can shawty", correct: true},
      {text: "To Paris so she can see the Eiffle Tower", correct: false},
      {text: "Yo mama's house", correct: false}
    ]
  }
];

// display quesitons and answers // 
var questionTitle = document.querySelector(".title");
var answers = document.querySelector(".answer");

function showQuestion(question) {
    questionTitle.innerHTML = question.question;
    question.answers.forEach(function (answer) {
        var button = document.createElement("button");
        button.innerText = answer.text
        button.classList.add("answer");
        answers.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
          }
          button.addEventListener('click', pickAnswer)
    })
}

// answer selection
function pickAnswer(e) {
    const selectedAnswer = e.target
    const correct = selectedAnswer.dataset.correct
    checkAnswer(document.body, correct)
    Array.from(answers.children).forEach(button => {
    checkAnswer(button, button.dataset.correct)
})
    if (shuffledQuestions.length > currentQuestion + 1) {
        console.log("done!");
    } else {
        endGame();
    }
}

function checkAnswer(button, correct) {
    if(correct) {
        button.classList.add("right");
        score+=10;
        highScore.textContent = 'Score: ' + score;

    } else {
        button.classList.add("wrong");
        score+=0;
        highScore.textContent = 'Score: ' + score;
    }
}

// next button event listener//
next.addEventListener('click', function(){
    currentQuestion++;
    nextShuffle();
})

// randomly shuffles questions//
function nextShuffle() {
    clearAnswers();
    showQuestion(shuffledQuestions[currentQuestion]);
}

// clear out the previous answers//
function clearAnswers(){
    while(answers.firstChild) {
        answers.removeChild
        (answers.firstChild)
    }
}

//end game screen//
function endGame() {
    clearInterval(timer);
  
    var gameOver =
      `
      <h3>Game Over!</h3>
      <div class="answers-container">
        You got ${score}/100
      <div>

      `
    document.querySelector(".questions-container").innerHTML = gameOver;
  }

// end quiz score/input name
// var input =document.querySelector("#name");
// var submit = document.querySelector("#submit");

// function inputName () {
//     submit.addEventListener("click", userInfo)
// }

// function userInfo(){
//     var name = createInput.value;
//     localStorage.setItem("name", name);
//     localStorage.setItem("score", score);
//     window.location.href = "highscores.html";
// }