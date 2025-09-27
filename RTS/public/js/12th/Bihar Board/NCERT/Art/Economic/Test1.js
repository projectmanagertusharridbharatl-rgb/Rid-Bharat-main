const questions = [
  {
    "num": 1,
    "question_en": "What is the main objective of economic planning in India?",
    "question_hi": "भारत में आर्थिक योजना का मुख्य उद्देश्य क्या है?",
    "options_en": ["Increase imports", "Reduce exports", "Economic development", "Promote monopoly"],
    "options_hi": ["आयात बढ़ाना", "निर्यात कम करना", "आर्थिक विकास", "एकाधिकार को बढ़ावा देना"],
    "answer": "Economic development",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does GDP stand for?",
    "question_hi": "GDP का पूर्ण रूप क्या है?",
    "options_en": ["Gross Domestic Product", "General Domestic Policy", "Great Domestic Product", "Gross Development Plan"],
    "options_hi": ["सकल घरेलू उत्पाद", "सामान्य घरेलू नीति", "महान घरेलू उत्पाद", "सकल विकास योजना"],
    "answer": "Gross Domestic Product",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which sector contributes the most to India’s GDP currently?",
    "question_hi": "वर्तमान में भारत की GDP में सबसे अधिक योगदान किस क्षेत्र का है?",
    "options_en": ["Agriculture", "Industry", "Service", "Mining"],
    "options_hi": ["कृषि", "उद्योग", "सेवा", "खनन"],
    "answer": "Service",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which indicator is used to measure inflation in India?",
    "question_hi": "भारत में मुद्रास्फीति को मापने के लिए कौन सा सूचकांक उपयोग किया जाता है?",
    "options_en": ["GDP", "WPI", "GNP", "FDI"],
    "options_hi": ["GDP", "WPI", "GNP", "FDI"],
    "answer": "WPI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of the following is not a function of the Reserve Bank of India?",
    "question_hi": "निम्नलिखित में से कौन भारतीय रिजर्व बैंक का कार्य नहीं है?",
    "options_en": ["Currency Issuance", "Credit Control", "Public Debt Collection", "Foreign Exchange Management"],
    "options_hi": ["मुद्रा निर्गमन", "ऋण नियंत्रण", "सार्वजनिक ऋण संग्रहण", "विदेशी मुद्रा प्रबंधन"],
    "answer": "Public Debt Collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is meant by unemployment?",
    "question_hi": "बेरोजगारी का क्या अर्थ है?",
    "options_en": ["Having too much work", "Working without salary", "Willing to work but no job", "Working more than one job"],
    "options_hi": ["बहुत अधिक काम होना", "बिना वेतन के काम करना", "काम करने की इच्छा होना पर नौकरी न होना", "एक से अधिक नौकरी करना"],
    "answer": "Willing to work but no job",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does the term 'poverty line' mean?",
    "question_hi": "'गरीबी रेखा' शब्द का क्या अर्थ है?",
    "options_en": ["Line of poor people", "Minimum income needed to survive", "A rule for rich", "Standard tax rate"],
    "options_hi": ["गरीब लोगों की रेखा", "जीवित रहने के लिए न्यूनतम आय", "अमीरों के लिए नियम", "मानक कर दर"],
    "answer": "Minimum income needed to survive",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which is a feature of a developed economy?",
    "question_hi": "विकसित अर्थव्यवस्था की कौन सी विशेषता है?",
    "options_en": ["High illiteracy", "Low income", "High per capita income", "High birth rate"],
    "options_hi": ["अधिक अशिक्षा", "कम आय", "उच्च प्रति व्यक्ति आय", "अधिक जन्म दर"],
    "answer": "High per capita income",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "When was the First Five Year Plan started in India?",
    "question_hi": "भारत में पहली पंचवर्षीय योजना कब शुरू हुई थी?",
    "options_en": ["1947", "1951", "1956", "1961"],
    "options_hi": ["1947", "1951", "1956", "1961"],
    "answer": "1951",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the main objective of the Green Revolution?",
    "question_hi": "हरित क्रांति का मुख्य उद्देश्य क्या था?",
    "options_en": ["Promote industry", "Increase agricultural production", "Export crops", "Import technology"],
    "options_hi": ["उद्योग को बढ़ावा देना", "कृषि उत्पादन बढ़ाना", "फसलें निर्यात करना", "प्रौद्योगिकी आयात करना"],
    "answer": "Increase agricultural production",
    "attempted": false,
    "selected": ""
  }
]

    // Continue adding more questions up to 30


// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
let timerInterval;

function loadQuestion(index) {
    const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
    const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

    document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    optionsArray.forEach(option => {
        optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
    });

    updateCircles();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateCircles();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function updateCircles() {
    const circleContainer = document.getElementById("circleContainer");
    circleContainer.innerHTML = "";
    const start = currentCirclePage * circlesPerPage;
    const end = Math.min(start + circlesPerPage, questions.length);

    for (let i = start; i < end; i++) {
        const q = questions[i];
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

function prevCirclePage() {
    if (currentCirclePage > 0) {
        currentCirclePage--;
        updateCircles();
    }
}

function nextCirclePage() {
    if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
        currentCirclePage++;
        updateCircles();
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0, notAttempted = 0, score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting the quiz automatically.");
            submitQuiz();
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

window.onload = function () {
    startTimer();
    loadQuestion(currentQuestion);
};
