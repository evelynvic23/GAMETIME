const question = document.querySelector(".question");
const resp = document.querySelector(".resp");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentJogo = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentJogo = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentJogo < questions.length - 1) {
    currentJogo++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  
    if(questionsCorrect <= 10){


        textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}, Você conhece muito bem os personagens!`;
        content.style.display = "none";
        contentFinish.style.display = "flex";
    
    }
    if(questionsCorrect <= 8){
      
        textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}, acertou quase tudo`;
        content.style.display = "none";
        contentFinish.style.display = "flex";

    }
    if(questionsCorrect <= 4 ){
      
        textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}, tente novamente :(`;
        content.style.display = "none";
        contentFinish.style.display = "flex";

    }
  
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentJogo + 1}/${questions.length}`;
  const item = questions[currentJogo];
  resp.innerHTML = "";
  question.innerHTML = item.question;

  item.resp.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    resp.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
