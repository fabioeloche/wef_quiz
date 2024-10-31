const quizQuestions2024 = [{
    question: "What is a key theme of the World Economic Forum's 2024 meeting?",
    options: ["Rebuilding trust", "Expanding cryptocurrency", "Increasing global trade restrictions", "Reducing reliance on renewable energy"],
    correctAnswer: "Rebuilding trust"
}, {
    question: "Which two global risks were identified as the most severe in the WEF Global Risks Report 2024?",
    options: ["Cyberattacks and AI", "Climate change and misinformation", "Inflation and housing crisis", "Trade war and military conflicts"],
    correctAnswer: "Climate change and misinformation"
}, {
    question: "What major technological challenge is the WEF addressing in 2024 with the AI Governance Alliance?",
    options: ["Data storage", "Sustainable AI development", "Internet accessibility", "Online privacy"],
    correctAnswer: "Sustainable AI development"
}, {
    question: "What economic opportunity was highlighted as a potential way to close the global gender gap, according to WEF's 2024 discussions?",
    options: ["The 'gender dividend'", "The 'green economy'", "The 'tech inclusion initiative'", "The 'digital equity fund'"],
    correctAnswer: "The 'gender dividend'"
}, {
    question: "In 2024, how does the WEF propose to balance AI growth with sustainability efforts?",
    options: ["By limiting AI research", "Through collaborative AI governance frameworks", "By banning AI in certain industries", "By outsourcing AI innovation to low-carbon regions"],
    correctAnswer: "Through collaborative AI governance frameworks"
}, {
    question: "What is one of the WEF's goals for the global workforce in 2024?",
    options: ["Reducing work-from-home opportunities", "Promoting lifelong learning and upskilling", "Limiting international collaboration", "Decreasing automation in manufacturing"],
    correctAnswer: "Promoting lifelong learning and upskilling"
}, {
    question: "What economic growth model did the WEF advocate for during the 2024 meeting?",
    options: ["Free trade capitalism without regulations", "A model balancing productivity with equity and sustainability", "Focus on fossil fuel-driven growth", "A return to industrial manufacturing"],
    correctAnswer: "A model balancing productivity with equity and sustainability"
}, {
    question: "Which major global initiative is WEF promoting to support climate action in 2024?",
    options: ["The First Movers Coalition", "The Digital Taxation Policy", "The Free Energy Alliance", "The Consumer Tech Coalition"],
    correctAnswer: "The First Movers Coalition"
}, {
    question: "What does the WEF identify as a key challenge to economic recovery in 2024?",
    options: ["Rising consumer debt", "Fragmented global cooperation", "Labor shortages", "Technology adoption"],
    correctAnswer: "Fragmented global cooperation"
}, {
    question: "How does WEF propose to ensure equitable access to technology in 2024?",
    options: ["Expanding global technology patents", "Promoting digital inclusion initiatives", "Limiting AI to developed countries", "Outsourcing tech production to wealthier nations"],
    correctAnswer: "Promoting digital inclusion initiatives"
}];

let currentQuestionIndex = 0;
let userName = '';
let score = 0;
let selectedAnswers = [];
let quizDuration = 1 * 60; // 10 minutes in seconds
let timerInterval;
let timeRemaining = 600; // 10 minutes in seconds

/**
 * Displays the specified screen by hiding others.
 * @param {number} screenNumber - The screen number to show.
 */
function showScreen(screenNumber) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById('screen' + screenNumber).classList.remove('hidden');
    document.getElementById("name").focus();
}

// Initialize to show the first screen
showScreen(1);

/**
 * Starts the quiz by initializing variables, shuffling questions, and setting up the timer.
 */
function startQuiz() {
    userName = document.getElementById("name").value;
    if (userName.trim() === '') {
        alert('Please enter your name to start the quiz.');
        return;
    }
    shuffleArray(quizQuestions2024); // Shuffle questions
    document.getElementById("screen3").classList.add("hidden");
    document.getElementById("screen4").classList.remove("hidden");
    document.getElementById("nextQuestionBtn").classList.remove("hidden");
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = [];

    showQuestion();

    timeRemaining = 600;
    document.getElementById("timerDisplay").classList.remove("hidden");
    startTimer();

    const helpSection = document.getElementById("helpSection");
    if (helpSection) {
        helpSection.style.display = "block";
    }

    const helpButton = document.getElementById("helpButton");
    helpButton.disabled = false;
    helpButton.style.opacity = 1;
    helpButton.innerText = "50% Help: Remove 2 Options";
}

/**
 * Displays the current question and options on the screen.
 */
function showQuestion() {
    const questionData = quizQuestions2024[currentQuestionIndex];
    shuffleArray(questionData.options);

    document.getElementById("questionText").innerText = questionData.question;

    const questionCounter = document.getElementById("questionCounter");
    questionCounter.innerText = `${currentQuestionIndex + 1}/${quizQuestions2024.length}`;

    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = '';

    questionData.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.className = "optionQ";
        optionElement.innerText = option;
        optionElement.onclick = () => selectOption(option);
        optionsContainer.appendChild(optionElement);
    });
}

/**
 * Handles the selection of an answer option.
 * @param {string} selectedOption - The option selected by the user.
 */
function selectOption(selectedOption) {
    const options = document.querySelectorAll('.optionQ');
    options.forEach(option => option.classList.remove('active'));

    const selectedElement = [...options].find(option => option.innerText === selectedOption);
    selectedElement.classList.add('active');

    selectedAnswers[currentQuestionIndex] = selectedOption;
}

/**
 * Moves to the next question in the quiz or displays results if it's the last question.
 */
function nextQuestion() {
    const currentQuestion = quizQuestions2024[currentQuestionIndex];
    if (!selectedAnswers[currentQuestionIndex]) {
        alert('Please select an answer before proceeding.');
        return;
    }

    if (selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions2024.length) {
        showQuestion();
    } else {
        clearInterval(timerInterval);
        showResults();
    }
}

/**
 * Displays the quiz results on the screen.
 */
function showResults() {
    document.getElementById("screen4").classList.add("hidden");
    document.getElementById("resultScreen").classList.remove("hidden");

    const resultMessage = `${userName}, you scored ${score} out of ${quizQuestions2024.length}!`;
    document.getElementById("resultMessage").innerText = resultMessage;
}

let reviewIndex = 0;

/**
 * Allows the user to review their answers, displaying correct and selected options.
 */
function reviewAnswers() {
    document.getElementById("timerDisplay").classList.add("hidden");

    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = '';

    const question = quizQuestions2024[reviewIndex];
    const questionElement = document.createElement("div");
    questionElement.innerHTML = `<strong>${reviewIndex + 1}. ${question.question}</strong>`;
    optionsContainer.appendChild(questionElement);

    question.options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.className = "optionQ";

        if (selectedAnswers[reviewIndex] === option) {
            optionElement.classList.add('selected');
        }
        if (option === question.correctAnswer) {
            optionElement.classList.add('correct');
        }
        if (selectedAnswers[reviewIndex] !== question.correctAnswer && selectedAnswers[reviewIndex] === option) {
            optionElement.classList.add('wrong');
        }

        const helpSection = document.getElementById("helpSection");
        if (helpSection) {
            helpSection.style.display = "none";
        }

        optionElement.innerText = option;
        optionsContainer.appendChild(optionElement);
    });

    const questionCounter = document.createElement("div");
    questionCounter.style.textAlign = "center";
    questionCounter.innerText = `${reviewIndex + 1}/${quizQuestions2024.length}`;
    optionsContainer.appendChild(questionCounter);

    const navContainer = document.createElement("div");
    navContainer.style.display = "flex";
    navContainer.style.justifyContent = "space-between";
    navContainer.style.marginTop = "20px";

    const prevButton = document.createElement("button");
    prevButton.className = "whiteBtn";
    prevButton.innerText = "Previous";
    prevButton.onclick = () => {
        if (reviewIndex > 0) {
            reviewIndex--;
            reviewAnswers();
        }
    };
    prevButton.disabled = reviewIndex === 0;
    navContainer.appendChild(prevButton);

    const nextButton = document.createElement("button");
    nextButton.className = "whiteBtn";
    nextButton.innerText = "Next";
    nextButton.onclick = () => {
        if (reviewIndex < quizQuestions2024.length - 1) {
            reviewIndex++;
            reviewAnswers();
        }
    };
    nextButton.disabled = reviewIndex === quizQuestions2024.length - 1;
    navContainer.appendChild(nextButton);

    optionsContainer.appendChild(navContainer);

    const resultButtonContainer = document.createElement("div");
    resultButtonContainer.style.textAlign = "center";
    const resultButton = document.createElement("button");
    resultButton.className = "whiteBtn btnDark";
    resultButton.innerText = "Result";
    resultButton.onclick = () => {
        document.getElementById("resultScreen").classList.remove("hidden");
        document.getElementById("screen4").classList.add("hidden");
    };
    resultButtonContainer.appendChild(resultButton);
    optionsContainer.appendChild(resultButtonContainer);

    document.getElementById("questionText").innerHTML = "";
    document.getElementById("questionCounter").innerHTML = "";
    document.getElementById("nextQuestionBtn").classList.add("hidden");

    document.getElementById("resultScreen").classList.add("hidden");
    document.getElementById("screen4").classList.remove("hidden");
}

/**
 * Shuffles an array in place.
 * @param {Array} array - The array to shuffle.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Restarts the quiz by resetting variables and the screen.
 */
function restartQuiz() {
    document.getElementById("resultScreen").classList.add("hidden");
    document.getElementById("name").value = '';

    document.getElementById("screen3").classList.remove("hidden");

    clearInterval(timerInterval);

    timeRemaining = 600;
    document.getElementById("timerDisplay").innerText = `Start Timer: 10:00`;

    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = [];
}

/**
 * Starts a countdown timer for the quiz.
 */
function startTimer() {
    timerInterval = setInterval(function () {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById("timerDisplay").innerText = `Start Timer: ${minutes}: ${seconds < 10 ? '0' + seconds : seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

/**
 * Removes two incorrect options as a hint for the current question.
 */
function eliminateOptions() {
    const questionData = quizQuestions2024[currentQuestionIndex];
    const correctAnswer = questionData.correctAnswer;
    const allOptions = questionData.options;

    const wrongAnswers = allOptions.filter(option => option !== correctAnswer);

    const selectedWrongAnswer = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];

    const remainingOptions = [correctAnswer, selectedWrongAnswer];

    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = '';

    remainingOptions.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.className = "optionQ";
        optionElement.innerText = option;
        optionElement.onclick = () => selectOption(option);
        optionsContainer.appendChild(optionElement);
    });

    const helpButton = document.querySelector(".helpBtn");
    helpButton.disabled = true;
    helpButton.style.opacity = 0.6;
    helpButton.innerText = "50% Help Used";
}