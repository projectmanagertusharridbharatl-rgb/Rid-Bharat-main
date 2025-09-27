const questions = [
  {
    "num": 11,
    "question_en": "Which is a cause of inflation?",
    "question_hi": "मुद्रास्फीति का एक कारण क्या है?",
    "options_en": ["Decrease in demand", "Increase in supply", "Increase in demand", "Stability in price"],
    "options_hi": ["मांग में कमी", "आपूर्ति में वृद्धि", "मांग में वृद्धि", "मूल्य में स्थिरता"],
    "answer": "Increase in demand",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is disinvestment?",
    "question_hi": "विनिवेश क्या है?",
    "options_en": ["Investment in new firms", "Withdrawal of government investment from public sector", "Increasing taxes", "Giving loans to private sector"],
    "options_hi": ["नई कंपनियों में निवेश", "सार्वजनिक क्षेत्र से सरकारी निवेश निकालना", "करों में वृद्धि", "निजी क्षेत्र को ऋण देना"],
    "answer": "Withdrawal of government investment from public sector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Who prepares the Union Budget in India?",
    "question_hi": "भारत में केंद्रीय बजट कौन तैयार करता है?",
    "options_en": ["Reserve Bank of India", "Finance Commission", "Ministry of Finance", "Planning Commission"],
    "options_hi": ["भारतीय रिजर्व बैंक", "वित्त आयोग", "वित्त मंत्रालय", "योजना आयोग"],
    "answer": "Ministry of Finance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the main source of income for the government?",
    "question_hi": "सरकार की आय का मुख्य स्रोत क्या है?",
    "options_en": ["Loans", "Taxes", "Donations", "Imports"],
    "options_hi": ["ऋण", "कर", "दान", "आयात"],
    "answer": "Taxes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which sector is known as the primary sector?",
    "question_hi": "प्राथमिक क्षेत्र किसे कहा जाता है?",
    "options_en": ["Industry", "Services", "Agriculture", "Trade"],
    "options_hi": ["उद्योग", "सेवाएँ", "कृषि", "व्यापार"],
    "answer": "Agriculture",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which of the following is a direct tax?",
    "question_hi": "निम्नलिखित में से कौन सा प्रत्यक्ष कर है?",
    "options_en": ["Excise duty", "Income tax", "Sales tax", "Service tax"],
    "options_hi": ["उत्पादन शुल्क", "आयकर", "विक्रय कर", "सेवा कर"],
    "answer": "Income tax",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does FDI stand for?",
    "question_hi": "FDI का क्या अर्थ है?",
    "options_en": ["Foreign Direct Investment", "Foreign Domestic Investment", "Fixed Deposit Interest", "Final Development Index"],
    "options_hi": ["विदेशी प्रत्यक्ष निवेश", "विदेशी घरेलू निवेश", "फिक्स्ड डिपॉजिट ब्याज", "अंतिम विकास सूचकांक"],
    "answer": "Foreign Direct Investment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is meant by liberalisation?",
    "question_hi": "उदारीकरण का क्या अर्थ है?",
    "options_en": ["Imposing trade barriers", "Removing restrictions from economy", "Nationalising industries", "Controlling prices"],
    "options_hi": ["व्यापार बाधाएँ लगाना", "अर्थव्यवस्था से प्रतिबंध हटाना", "उद्योगों का राष्ट्रीयकरण", "मूल्य नियंत्रण"],
    "answer": "Removing restrictions from economy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which organization is responsible for collecting national income data in India?",
    "question_hi": "भारत में राष्ट्रीय आय के आंकड़े कौन एकत्र करता है?",
    "options_en": ["NITI Aayog", "RBI", "NSO", "Finance Ministry"],
    "options_hi": ["नीति आयोग", "भारतीय रिजर्व बैंक", "एनएसओ", "वित्त मंत्रालय"],
    "answer": "NSO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is a mixed economy?",
    "question_hi": "मिश्रित अर्थव्यवस्था क्या है?",
    "options_en": ["Only private sector", "Only public sector", "Both private and public sector", "Only agriculture sector"],
    "options_hi": ["केवल निजी क्षेत्र", "केवल सार्वजनिक क्षेत्र", "निजी और सार्वजनिक दोनों क्षेत्र", "केवल कृषि क्षेत्र"],
    "answer": "Both private and public sector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is GDP?",
    "question_hi": "GDP क्या है?",
    "options_en": ["Gross Domestic Product", "General Demand Position", "Gross Data Production", "Government Development Plan"],
    "options_hi": ["सकल घरेलू उत्पाद", "सामान्य मांग स्थिति", "सकल डेटा उत्पादन", "सरकारी विकास योजना"],
    "answer": "Gross Domestic Product",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which one is an example of capital expenditure?",
    "question_hi": "निम्नलिखित में से कौन पूंजीगत व्यय का उदाहरण है?",
    "options_en": ["Salary payments", "Interest payments", "Construction of roads", "Subsidies"],
    "options_hi": ["वेतन भुगतान", "ब्याज भुगतान", "सड़कों का निर्माण", "सब्सिडी"],
    "answer": "Construction of roads",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which sector has shown maximum growth in recent years in India?",
    "question_hi": "हाल के वर्षों में भारत में किस क्षेत्र ने अधिकतम वृद्धि दिखाई है?",
    "options_en": ["Agriculture", "Industry", "Service", "Mining"],
    "options_hi": ["कृषि", "उद्योग", "सेवा", "खनन"],
    "answer": "Service",
    "attempted": false,
    "selected": ""
  },
  

    // Continue adding more questions up to 30
];

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
