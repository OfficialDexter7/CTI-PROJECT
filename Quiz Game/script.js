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
    },

    {
        question: "Which OWASP vulnerability occurs when user input is executed as code in the browser?",
        answers: [
            { text: "Cross-Site Scripting (XSS)", correct: true },
            { text: "Broken Authentication", correct: false },
            { text: "Security Misconfiguration", correct: false },
            { text: "SQL Injection", correct: false },
        ]
    },
    {
        question: "What is the primary goal of OWASP?",
        answers: [
            { text: "To provide open-source tools for penetration testing", correct: false },
            { text: "To improve software security awareness and education", correct: true },
            { text: "To create web application firewalls", correct: false },
            { text: "To enforce security regulations on companies", correct: false },
        ]
    },
    {
        question: "Which OWASP vulnerability is associated with poor session management?",
        answers: [
            { text: "Broken Authentication", correct: true },
            { text: "Cross-Site Request Forgery (CSRF)", correct: false },
            { text: "Security Misconfiguration", correct: false },
            { text: "Cryptographic Failures", correct: false },
        ]
    },
    {
        question: "What is the purpose of a Content Security Policy (CSP)?",
        answers: [
            { text: "To prevent SQL Injection attacks", correct: false },
            { text: "To mitigate the impact of Cross-Site Scripting (XSS)", correct: true },
            { text: "To prevent server-side attacks", correct: false },
            { text: "To allow unrestricted API access", correct: false },
        ]
    },
    {
        question: "Which security measure helps prevent brute force attacks?",
        answers: [
            { text: "Using CAPTCHA", correct: true },
            { text: "Disabling HTTPS", correct: false },
            { text: "Storing passwords in plaintext", correct: false },
            { text: "Allowing unlimited login attempts", correct: false },
        ]
    },
    {
        question: "Which of the following is an example of Security Misconfiguration?",
        answers: [
            { text: "Using default credentials for admin accounts", correct: true },
            { text: "Hashing passwords before storing them", correct: false },
            { text: "Implementing multi-factor authentication", correct: false },
            { text: "Validating user input", correct: false },
        ]
    },
    {
        question: "Which of the following helps prevent Cross-Site Request Forgery (CSRF)?",
        answers: [
            { text: "Using CSRF tokens", correct: true },
            { text: "Disabling cookies", correct: false },
            { text: "Encrypting database connections", correct: false },
            { text: "Allowing mixed HTTP/HTTPS content", correct: false },
        ]
    },
    {
        question: "Why should you avoid using hardcoded credentials in your application?",
        answers: [
            { text: "They can be easily exposed and exploited", correct: true },
            { text: "They improve performance", correct: false },
            { text: "They are required for secure authentication", correct: false },
            { text: "They make debugging easier", correct: false },
        ]
    },
    {
        question: "Which attack exploits insufficient validation of serialized objects?",
        answers: [
            { text: "Insecure Deserialization", correct: true },
            { text: "Broken Access Control", correct: false },
            { text: "SQL Injection", correct: false },
            { text: "Security Misconfiguration", correct: false },
        ]
    },
    {
        question: "What is the best practice for securing stored passwords?",
        answers: [
            { text: "Using strong hashing algorithms like bcrypt", correct: true },
            { text: "Storing passwords in plaintext", correct: false },
            { text: "Encrypting passwords with a reversible algorithm", correct: false },
            { text: "Using short, simple passwords", correct: false },
        ]
    },
    {
        question: "Which OWASP vulnerability involves allowing unauthorized users to access data?",
        answers: [
            { text: "Broken Access Control", correct: true },
            { text: "SQL Injection", correct: false },
            { text: "Insecure Deserialization", correct: false },
            { text: "Cross-Site Scripting (XSS)", correct: false },
        ]
    },
    {
        question: "What is the most effective way to prevent a Server-Side Request Forgery (SSRF) attack?",
        answers: [
            { text: "Restricting internal resource access", correct: true },
            { text: "Using weak authentication methods", correct: false },
            { text: "Disabling firewalls", correct: false },
            { text: "Storing API keys in client-side code", correct: false },
        ]
    },
    {
        question: "Which of the following is an insecure coding practice?",
        answers: [
            { text: "Using parameterized queries", correct: false },
            { text: "Sanitizing user input", correct: false },
            { text: "Storing sensitive data in local storage", correct: true },
            { text: "Applying the principle of least privilege", correct: false },
        ]
    },
    {
        question: "What is the primary cause of a Directory Traversal attack?",
        answers: [
            { text: "Improper validation of user input", correct: true },
            { text: "Weak password policies", correct: false },
            { text: "Lack of HTTPS encryption", correct: false },
            { text: "Excessive user permissions", correct: false },
        ]
    },
    {
        question: "What type of attack attempts to guess user credentials by trying multiple combinations?",
        answers: [
            { text: "Brute Force Attack", correct: true },
            { text: "Man-in-the-Middle Attack", correct: false },
            { text: "SQL Injection", correct: false },
            { text: "Denial of Service (DoS)", correct: false },
        ]
    },
    {
        question: "Which security concept involves giving users the minimum necessary access?",
        answers: [
            { text: "Principle of Least Privilege", correct: true },
            { text: "Security Misconfiguration", correct: false },
            { text: "Privilege Escalation", correct: false },
            { text: "Denial of Service", correct: false },
        ]
    },
    {
        question: "Which of the following is an example of Cryptographic Failure?",
        answers: [
            { text: "Using outdated encryption algorithms", correct: true },
            { text: "Using strong authentication", correct: false },
            { text: "Enforcing SSL/TLS connections", correct: false },
            { text: "Applying Content Security Policy (CSP)", correct: false },
        ]
    },
    {
        question: "Why is it important to validate and sanitize user input?",
        answers: [
            { text: "To prevent injection attacks and ensure data integrity", correct: true },
            { text: "To improve website performance", correct: false },
            { text: "To make forms more user-friendly", correct: false },
            { text: "To increase page loading speed", correct: false },
        ]
    },
    {
        question: "Which practice helps protect sensitive data in transit?",
        answers: [
            { text: "Using HTTPS and TLS encryption", correct: true },
            { text: "Storing credentials in cookies", correct: false },
            { text: "Allowing unencrypted connections", correct: false },
            { text: "Disabling security headers", correct: false },
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function getRandomQuestions(array, num) {
    let shuffled = [...array].sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, num); // Get first 'num' elements
}

function startQuiz() {
    selectedQuestions = getRandomQuestions(questions, 10); // Pick 10 unique random questions
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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
        answerButtons.removeChild(answerButtons.firstChild);
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

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${selectedQuestions.length}!`;
    nextButton.innerHTML = "Play again !!";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < selectedQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

