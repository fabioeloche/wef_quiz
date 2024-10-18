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

    function showScreen(screenNumber) {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById('screen' + screenNumber).classList.remove('hidden');
    document.getElementById("name").focus();
    }