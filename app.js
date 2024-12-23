document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "1: What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
      marks: 6,
    },
    {
      question: "2: Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
      marks: 5,
    },
    {
      question: "3: Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
      marks: 12,
    },
    {
      question: "4: What is the largest mammal in the world?",
      choices: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
      marks: 10,
    },
    {
      question: "5: In which year did the Titanic sink?",
      choices: ["1905", "1912", "1920", "1935"],
      answer: "1912",
      marks: 7,
    },
  ];

  let currentQuestionIndex = 0;
  let score = [];

  startBtn.addEventListener("click", startQuiz);

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = "";
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    showQuestion();
  }

  function showQuestion() {
    questionText.textContent = `${questions[currentQuestionIndex].question}  (${questions[currentQuestionIndex].marks} - Marks)`;
    choicesList.innerHTML = "";
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(li, choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(selectedLi, choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const allChoices = document.querySelectorAll("li");
    allChoices.forEach((li) => li.classList.remove("selected"));
    // selectedLi.classList.add("selected")
    if (choice === correctAnswer) {
      selectedLi.classList.add("correct");
      score.push(questions[currentQuestionIndex].marks)
    } else {
      selectedLi.classList.add("wrong");
    }

    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        startQuiz();
      } else {
        showResult();
      }
    }, 500);
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    let totalScore = score.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let totalMarks = questions.reduce((accumulator, question) => accumulator + question.marks, 0)
    scoreDisplay.textContent = `Your Total score is ${totalScore} / out of ${totalMarks}`
  }
});
