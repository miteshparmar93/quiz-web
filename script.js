const questions =[
  {
    question: "which  is largest animal in the world?",
    answers : [
      {text: "shark ",correct: false},
      {text: "blue whale ",correct: true},
      {text: "Elephant ",correct: false},
      {text: "Giraffe ",correct: false}
     ]
  },
  {
    question: "which  is the smallest continent in the world?",
    answers : [
      {text: "asia ",correct: false},
      {text: "australia ",correct: true},
      {text: "arctic ",correct: false},
      {text: "africa",correct: false}
     ]
  },
  {question: "which is the largest desert in the world?",
    answers : [
      {text: "kalahari ",correct: false},
      {text: "gobi ",correct: true},
      {text: "sahara ",correct: false},
      {text: "antarctica",correct: false}
     ]
    },

    {question: "which is the smallest country in the world?",
      answers : [
        {text: "vatican city",correct: false},
        {text: "bhutan ",correct: false},
        {text: "nepal ",correct: false},
        {text: "shri lanka",correct: true}
       ]
      }
]
const queSec =document.querySelector(".q");
const ansbtn =document.querySelector(".ans-btn");
const nextbtn=document.querySelector(".next");

let CurrentQuestionIndex =0;
let score =0;

function startQuiz(){
  CurrentQuestionIndex =0;
  score = 0;
  nextbtn.innerHTML= "Next" ;
  ShowQuestion();
}



function ShowQuestion() {
  resetState();
  let currentQuestion = questions[CurrentQuestionIndex];
  let questionNo =CurrentQuestionIndex +1;
  queSec.innerHTML =questionNo + " . " +currentQuestion.question;

  currentQuestion.answers.forEach(answers =>{
    const button =document.createElement("button");
    button.innerHTML =answers.text;
    button.classList.add("btn");
    ansbtn.appendChild(button);
    if(answers.correct){
      button.dataset.correct = answers.correct;

    }
    button.addEventListener("click" ,selectans)
  })
}



function selectans (e){
  const selectedBtn =e.target;
  const iscorrect =selectedBtn.dataset.correct === "true";
  if(iscorrect){
    selectedBtn.classList.add("correct");
    score ++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(ansbtn.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled= true;
  });
  nextbtn.style.display ="block"
}



function resetState(){
  nextbtn.style.display ="none"
  while (ansbtn.firstChild){
    ansbtn.removeChild(ansbtn.firstChild)
  }
}
function handleNextBtn (){
  CurrentQuestionIndex ++;
  if(CurrentQuestionIndex <questions.length){
    ShowQuestion()
  }else{
    showScore();
  }
}

function showScore(){
  resetState();
  queSec.innerHTML =`you scored ${score} out of ${questions.length}! `;
  nextbtn.innerHTML ="play again";
  nextbtn.style.display ="block";
}

nextbtn.addEventListener("click" , ()=>{
  if(CurrentQuestionIndex < questions.length){
    handleNextBtn();
  }else{
    startQuiz();
  }
})


startQuiz();