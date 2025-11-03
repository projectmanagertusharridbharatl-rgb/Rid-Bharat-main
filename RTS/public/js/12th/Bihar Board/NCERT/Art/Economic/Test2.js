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


let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}

function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};
