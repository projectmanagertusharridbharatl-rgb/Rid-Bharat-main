const questions = [

    {
        "num": 1,
        "question_en": "What is the meaning of the word 'Sanskrit'?",
        "question_hi": "संस्कृत शब्द का अर्थ क्या है?",
        "options_en": ["Ancient", "Pure", "Complex", "New"],
        "options_hi": ["प्राचीन", "शुद्ध", "जटिल", "नया"],
        "answer_en": "Pure",
        "answer_hi": "शुद्ध",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Who is the author of the Sanskrit text 'Raghukul Nandan'?",
        "question_hi": "संस्कृत ग्रंथ 'रघुकुल नंदन' के लेखक कौन हैं?",
        "options_en": ["Kalidasa", "Bharavi", "Raja Shankar", "Harshvardhan"],
        "options_hi": ["कालिदास", "भारवि", "राजा शंकर", "हर्षवर्धन"],
        "answer_en": "Kalidasa",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "What is the meaning of 'Dharma' in Sanskrit literature?",
        "question_hi": "संस्कृत साहित्य में 'धर्म' का क्या अर्थ है?",
        "options_en": ["Truth", "Duty", "Religion", "Wealth"],
        "options_hi": ["सत्य", "कर्तव्य", "धर्म", "धन"],
        "answer_en": "Duty",
        "answer_hi": "कर्तव्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which epic is primarily written in Sanskrit?",
        "question_hi": "कौन सा महाकाव्य मुख्य रूप से संस्कृत में लिखा गया है?",
        "options_en": ["Mahabharata", "Ramayana", "Vishnu Purana", "Upanishads"],
        "options_hi": ["महाभारत", "रामायण", "विष्णु पुराण", "उपनिषद"],
        "answer_en": "Mahabharata",
        "answer_hi": "महाभारत",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "What does 'Tat' mean in Sanskrit?",
        "question_hi": "संस्कृत में 'तत्' का क्या अर्थ है?",
        "options_en": ["That", "This", "Here", "There"],
        "options_hi": ["वह", "यह", "यहां", "वहां"],
        "answer_en": "That",
        "answer_hi": "वह",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which of the following is the most famous work of Kalidasa?",
        "question_hi": "नीचे दिए गए में से कालिदास का सबसे प्रसिद्ध काव्य कौन सा है?",
        "options_en": ["Shakuntala", "Meghaduta", "Raghuvamsa", "Abhijnana Shakuntalam"],
        "options_hi": ["शकुंतला", "मेघदूत", "रघुवंसा", "अभिज्ञान शकुंतलाम"],
        "answer_en": "Shakuntala",
        "answer_hi": "शकुंतला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "In Sanskrit, what is the term for 'love'?",
        "question_hi": "संस्कृत में 'प्रेम' के लिए कौन सा शब्द है?",
        "options_en": ["Prema", "Kama", "Bhakti", "Sambandha"],
        "options_hi": ["प्रेम", "काम", "भक्ति", "संबंध"],
        "answer_en": "Prema",
        "answer_hi": "प्रेम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which Sanskrit text is dedicated to the teachings of Lord Shiva?",
        "question_hi": "कौन सा संस्कृत ग्रंथ भगवान शिव के उपदेशों को समर्पित है?",
        "options_en": ["Shiv Purana", "Vishnu Purana", "Bhagavad Gita", "Rigveda"],
        "options_hi": ["शिव पुराण", "विष्णु पुराण", "भगवद गीता", "ऋग्वेद"],
        "answer_en": "Shiv Purana",
        "answer_hi": "शिव पुराण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "What does 'Yoga' mean in Sanskrit?",
        "question_hi": "संस्कृत में 'योग' का क्या अर्थ है?",
        "options_en": ["Union", "Discipline", "Meditation", "Health"],
        "options_hi": ["संयोग", "अनुशासन", "ध्यान", "स्वास्थ्य"],
        "answer_en": "Union",
        "answer_hi": "संयोग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which ancient Indian text is considered the foundation of Sanskrit grammar?",
        "question_hi": "कौन सा प्राचीन भारतीय ग्रंथ संस्कृत व्याकरण का आधार माना जाता है?",
        "options_en": ["Ashtadhyayi", "Mahabharata", "Ramayana", "Vedas"],
        "options_hi": ["अष्टाध्यायी", "महाभारत", "रामायण", "वेद"],
        "answer_en": "Ashtadhyayi",
        "answer_hi": "अष्टाध्यायी",
        "attempted": false,
        "selected": ""
      }

];

let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes

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
