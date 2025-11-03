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
