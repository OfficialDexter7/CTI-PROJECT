const questions = [
    {
        question: "What does OWASP stand for ?",
        answers: [
            { text: "Open Web Application Security Program", correct: false },
            { text: "Open Web Application Security Project", correct: true },
            { text: "Open Web Application Security Policy", correct: false },
            { text: "Open Web Application Security Protocol", correct: false },
        ]
    },
    {
        question: "Which of the following is the top vulnerability in the OWASP Top 10 (2021) ?",
        answers: [
            { text: "Broken Access Control", correct: true },
            { text: "Security Misconfiguration", correct: false },
            { text: "Injection", correct: false },
            { text: "Insecure Deserialization", correct: false },
        ]
    },
    {
        question: "Which attack is an example of an Injection vulnerability ?",
        answers: [
            
            { text: "Cross-Site Scripting (XSS)", correct: false },
            { text: "Directory Traversal", correct: false },
            { text: "SQL Injection", correct: true },
            { text: "Buffer Overflow", correct: false },
        ]
    },
    {
        question: "How can SQL Injection be prevented ?",
        answers: [
            
            { text: "Storing passwords in plaintext", correct: false },
            { text: "Allowing unrestricted database access", correct: false },
            { text: "Disabling HTTPS", correct: false },
            { text: "Using parameterized queries", correct: true },
        ]
    },

    {
        question: "What does XSS (Cross-Site Scripting) exploit ?",
        answers: [
            
            { text: " Server’s database", correct: false },
            { text: " User input validation", correct: true },
            { text: "Weak passwords", correct: false },
            { text: " Firewall settings", correct: false },
        ]
    },

    {
        question: "What is the best way to prevent Cross-Site Scripting (XSS) ?",
        answers: [
            
            { text: "Disabling JavaScript in browsers", correct: false },
            { text: "Blocking all user inputs", correct: false },
            { text: " Encrypting database tables", correct: false },
            { text: " Encoding user input", correct: true },
        ]
    },

    {
        question: "Which of the following is an example of Broken Access Control?",
        answers: [
            
            { text: " Using weak passwords", correct: false },
            { text: " Encrypting sensitive data", correct: false },
            { text: "Viewing another user's private data without authorization", correct: true },
            { text: "Implementing CAPTCHA", correct: false },
        ]
    },

    {
        question: "Which OWASP vulnerability involves exposing sensitive data unintentionally?",
        answers: [
            
            { text: " Security Misconfiguration", correct: false },
            { text: "Cryptographic Failures", correct: true },
            { text: " Server-Side Request Forgery (SSRF)", correct: false },
            { text: "Cross-Site Scripting", correct: false },
        ]
    },

    {
        question: " What is the best practice for securing API endpoints ?",
        answers: [
            
            { text: "Allowing unrestricted API calls", correct: false },
            { text: "Storing API keys in client-side JavaScript", correct: false },
            { text: "Implementing rate limiting and authentication", correct: true },
            { text: "Hardcoding credentials in the source code", correct: false },
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons"); // Fix typo
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Fix typo

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // Fix variable name
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again !!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
