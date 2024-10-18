const quizQuestions2024 = [{
        question: "What is a key theme of the World Economic Forum's 2024 meeting?",
        options: [
            "Rebuilding trust",
            "Expanding cryptocurrency",
            "Increasing global trade restrictions",
            "Reducing reliance on renewable energy"
        ],
        correctAnswer: "Rebuilding trust"
    },
    {
        question: "Which two global risks were identified as the most severe in the WEF Global Risks Report 2024?",
        options: [
            "Cyberattacks and AI",
            "Climate change and misinformation",
            "Inflation and housing crisis",
            "Trade war and military conflicts"
        ],
        correctAnswer: "Climate change and misinformation"
    },
    {
        question: "What major technological challenge is the WEF addressing in 2024 with the AI Governance Alliance?",
        options: [
            "Data storage",
            "Sustainable AI development",
            "Internet accessibility",
            "Online privacy"
        ],
        correctAnswer: "Sustainable AI development"
    },
    {
        question: "What economic opportunity was highlighted as a potential way to close the global gender gap, according to WEF's 2024 discussions?",
        options: [
            "The 'gender dividend'",
            "The 'green economy'",
            "The 'tech inclusion initiative'",
            "The 'digital equity fund'"
        ],
        correctAnswer: "The 'gender dividend'"
    },
    {
        question: "In 2024, how does the WEF propose to balance AI growth with sustainability efforts?",
        options: [
            "By limiting AI research",
            "Through collaborative AI governance frameworks",
            "By banning AI in certain industries",
            "By outsourcing AI innovation to low-carbon regions"
        ],
        correctAnswer: "Through collaborative AI governance frameworks"
    },
    {
        question: "What is one of the WEF's goals for the global workforce in 2024?",
        options: [
            "Reducing work-from-home opportunities",
            "Promoting lifelong learning and upskilling",
            "Limiting international collaboration",
            "Decreasing automation in manufacturing"
        ],
        correctAnswer: "Promoting lifelong learning and upskilling"
    },
    {
        question: "What economic growth model did the WEF advocate for during the 2024 meeting?",
        options: [
            "Free trade capitalism without regulations",
            "A model balancing productivity with equity and sustainability",
            "Focus on fossil fuel-driven growth",
            "A return to industrial manufacturing"
        ],
        correctAnswer: "A model balancing productivity with equity and sustainability"
    },
    {
        question: "Which major global initiative is WEF promoting to support climate action in 2024?",
        options: [
            "The First Movers Coalition",
            "The Digital Taxation Policy",
            "The Free Energy Alliance",
            "The Consumer Tech Coalition"
        ],
        correctAnswer: "The First Movers Coalition"
    },
    {
        question: "What does the WEF identify as a key challenge to economic recovery in 2024?",
        options: [
            "Rising consumer debt",
            "Fragmented global cooperation",
            "Labor shortages",
            "Technology adoption"
        ],
        correctAnswer: "Fragmented global cooperation"
    },
    {
        question: "How does WEF propose to ensure equitable access to technology in 2024?",
        options: [
            "Expanding global technology patents",
            "Promoting digital inclusion initiatives",
            "Limiting AI to developed countries",
            "Outsourcing tech production to wealthier nations"
        ],
        correctAnswer: "Promoting digital inclusion initiatives"
    }
];

let currentQuestionIndex = 0;
let userName = '';
let score = 0;
let selectedAnswers = [];
let quizDuration = 1 * 60; // 10 minutes in seconds
let timerInterval;
let timeRemaining = 600; // 10 minutes in seconds

    function showScreen(screenNumber) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById('screen' + screenNumber).classList.remove('hidden');
    document.getElementById("name").focus();
    }

      // Initialize to show the first screen
  showScreen(1);

  

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
// Start countdown timer
startTimer();

// Re-enable and show the help section
const helpSection = document.getElementById("helpSection");
if (helpSection) {
    helpSection.style.display = "block"; // Show the help section again
        }

// Reset the help button when the quiz starts
const helpButton = document.getElementById("helpButton");
helpButton.disabled = false; // Re-enable the button
helpButton.style.opacity = 1; // Restore opacity
helpButton.innerText = "50% Help: Remove 2 Options"; // Reset the button text
    }

    function showQuestion() {
        const questionData = quizQuestions2024[currentQuestionIndex];
    
        // Shuffle the options before displaying them
        shuffleArray(questionData.options);
    
        document.getElementById("questionText").innerText = questionData.question;
    
        const questionCounter = document.getElementById("questionCounter");
        questionCounter.innerText = `${currentQuestionIndex + 1}/${quizQuestions2024.length}`;
    
        const optionsContainer = document.getElementById("optionsContainer");
        optionsContainer.innerHTML = ''; // Clear previous options
    
        // Display the shuffled options
        questionData.options.forEach((option) => {
            const optionElement = document.createElement("button");
        optionElement.className = "optionQ";
        optionElement.innerText = option;
            optionElement.onclick = () => selectOption(option);
        optionsContainer.appendChild(optionElement);
        });
    }

function selectOption(selectedOption) {
        const options = document.querySelectorAll('.optionQ');
        options.forEach(option => {
    option.classList.remove('active'); // Deselect all options
        });

        const selectedElement = [...options].find(option => option.innerText === selectedOption);
selectedElement.classList.add('active'); // Highlight selected option

selectedAnswers[currentQuestionIndex] = selectedOption; // Store selected answer
    }

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
    