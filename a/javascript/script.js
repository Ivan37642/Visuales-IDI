document.addEventListener("DOMContentLoaded", function () {
  const generateQuestionsBtn = document.getElementById("generateQuestionsBtn");
  const questionsContainer = document.getElementById("questionsContainer");

  const allQuestions = [
    {
      question: "pregunta 1",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 2",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 3",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 4",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 5",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 6",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 7",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 8",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 9",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 10",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 11",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 12",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 13",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 14",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 15",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 16",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 17",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 18",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 19",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 20",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 21",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 22",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 23",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 24",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 25",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 26",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 27",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 28",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 29",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 30",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 31",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 32",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 33",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 34",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 35",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 36",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 37",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 38",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 39",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 40",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 41",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 42",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 43",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 44",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 45",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 46",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 47",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 48",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 49",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
    {
      question: "pregunta 50",
      options: ["1", "2", "3", "4"],
      correctAnswer: "1",
    },
  ];

  generateQuestionsBtn.addEventListener("click", function () {
    questionsContainer.innerHTML = ""; // Limpia el contenido anterior

    const selectedQuestions = getRandomQuestions(allQuestions, 10);

    selectedQuestions.forEach(function (questionData, index) {
      const questionCard = createQuestionCard(questionData, index + 1);
      questionsContainer.appendChild(questionCard);
    });
  });

  function getRandomQuestions(allQuestions, count) {
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, count);
  }

  function createQuestionCard(questionData, questionNumber) {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const questionHeader = document.createElement("h5");
    questionHeader.classList.add("card-title");
    questionHeader.textContent = `Pregunta ${questionNumber}: ${questionData.question}`;

    const optionsList = document.createElement("ul");
    optionsList.classList.add("list-group", "list-group-flush");

    questionData.options.forEach(function (option) {
      const optionItem = document.createElement("li");
      optionItem.classList.add("list-group-item");

      const optionLabel = document.createElement("label");
      optionLabel.classList.add("form-check-label");

      const optionInput = document.createElement("input");
      optionInput.classList.add("form-check-input");
      optionInput.type = "radio";
      optionInput.name = `question${questionNumber}`;
      optionInput.value = option;

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));

      optionItem.appendChild(optionLabel);
      optionsList.appendChild(optionItem);
    });

    cardBody.appendChild(questionHeader);
    cardBody.appendChild(optionsList);
    card.appendChild(cardBody);

    return card;
  }
  // ... (código anterior)

  generateQuestionsBtn.addEventListener("click", function () {
    // ... (código anterior)

    selectedQuestions.forEach(function (questionData, index) {
      const questionCard = createQuestionCard(questionData, index + 1);
      questionsContainer.appendChild(questionCard);
    });
  });

  submitAnswersBtn.addEventListener("click", function () {
    const correctAnswers = selectedQuestions.filter(
      (questionData) => questionData.userAnswer === questionData.correctAnswer
    );
    resultMessage.textContent = `Respuestas correctas: ${correctAnswers.length} de 10`;
  });

  // ... (código anterior)
});
