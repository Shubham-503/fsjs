const quizData = [
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    a: "while()",
    b: "loop()",
    c: "forEach()",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Which built-in method reverses the order of the elements of an array?",
    a: "changeOrder(order)",
    b: "reverse()",
    c: "sort(order)",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "Which of the following is a valid type of function javascript supports?",
    a: "named function",
    b: "anonymous function",
    c: "Both the above",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.querySelector(".quiz-header");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

loadQuiz(quizData[currentQuiz]);

function loadQuiz(quiz) {
  questionEl.innerHTML = quiz.question;
  a_text.innerHTML = quiz.a;
  b_text.innerHTML = quiz.b;
  c_text.innerHTML = quiz.c;
  d_text.innerHTML = quiz.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let val = document.querySelector("input[type=radio][name=answer]:checked");
  if (val === null) return;
  val = val.id;
  if (quizData[currentQuiz].correct === val) score += 1;
  console.log(val, score, quizData[currentQuiz].correct);
  currentQuiz += 1;
}

// function reset() {
//   currentQuiz = 0;
//   score = 0;
//   loadQuiz(quizData[currentQuiz]);
// }

submitBtn.addEventListener("click", () => {
  getSelected();
  deselectAnswers();
  if (currentQuiz === quizData.length) {
    quiz.innerHTML = `your score is: ${score}`;
    // submitBtn.innerHTML = "RESET";
  } else loadQuiz(quizData[currentQuiz]);
});
