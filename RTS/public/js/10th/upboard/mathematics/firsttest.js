const questions = [
            {
                "num": 1,
                "question_en": "What is the antonym of 'brave'?",
                "question_hi": "'brave' का विलोम शब्द क्या है?",
                "options_en": ["Coward", "Strong", "Bold", "Hero"],
                "options_hi": ["कायर", "मजबूत", "निडर", "वीर"],
                "answer_en": "Coward",
                "answer_hi": "कायर",
                "attempted": false,
                "selected": "",
                "visited": false
            },
            {
                "num": 2,
                "question_en": "Choose the correct synonym of 'happy'.",
                "question_hi": "'happy' का पर्यायवाची शब्द चुनें।",
                "options_en": ["Sad", "Joyful", "Angry", "Fearful"],
                "options_hi": ["दुखी", "प्रसन्न", "क्रोधित", "भयभीत"],
                "answer_en": "Joyful",
                "answer_hi": "प्रसन्न",
                "attempted": false,
                "selected": "",
                "visited": false
            },
            {
                "num": 3,
                "question_en": "Which part of speech is the word 'quickly'?",
                "question_hi": "'quickly' किस प्रकार का शब्द है?",
                "options_en": ["Adjective", "Verb", "Adverb", "Noun"],
                "options_hi": ["विशेषण", "क्रिया", "क्रियाविशेषण", "संज्ञा"],
                "answer_en": "Adverb",
                "answer_hi": "क्रियाविशेषण",
                "attempted": false,
                "selected": "",
                "visited": false
            },
            {
                "num": 4,
                "question_en": "Select the correct spelling.",
                "question_hi": "सही वर्तनी चुनें।",
                "options_en": ["Enviroment", "Environment", "Enviornment", "Environmant"],
                "options_hi": ["Enviroment", "Environment", "Enviornment", "Environmant"],
                "answer_en": "Environment",
                "answer_hi": "Environment",
                "attempted": false,
                "selected": "",
                "visited": false
            },
            {
                "num": 5,
                "question_en": "What is the plural of 'child'?",
                "question_hi": "'child' का बहुवचन क्या है?",
                "options_en": ["Childs", "Childes", "Children", "Childer"],
                "options_hi": ["Childs", "Childes", "Children", "Childer"],
                "answer_en": "Children",
                "answer_hi": "Children",
                "attempted": false,
                "selected": "",
                "visited": false
            },
            {
                "num": 6,
                "question_en": "Identify the tense: She has gone to school.",
                "question_hi": "काल की पहचान करें: She has gone to school.",
                "options_en": ["Simple Past", "Present Perfect", "Past Perfect", "Present Continuous"],
                "options_hi": ["साधारण भूतकाल", "वर्तमान पूर्णकाल", "भूतकाल पूर्णकाल", "वर्तमान अपूर्ण काल"],
                "answer_en": "Present Perfect",
                "answer_hi": "वर्तमान पूर्णकाल",
                "attempted": false,
                "selected": "",
                "visited": false
            },
            {
                "num": 7,
                "question_en": "Which sentence is in passive voice?",
                "question_hi": "निम्न में से कौन-सा वाक्य कर्तृवाच्य में है?",
                "options_en": ["He eats a mango.", "A mango is eaten by him.", "He is eating a mango.", "He ate a mango."],
                "options_hi": ["He eats a mango.", "A mango is eaten by him.", "He is eating a mango.", "He ate a mango."],
                "answer_en": "A mango is eaten by him.",
                "answer_hi": "A mango is eaten by him.",
                "attempted": false,
                "selected": "",
                "visited": false
            },
            {
                "num": 8,
                "question_en": "Change into indirect speech: He said, 'I am going home.'",
                "question_hi": "अप्रत्यक्ष कथन में बदलें: He said, 'I am going home.'",
                "options_en": [
                    "He said that he is going home.",
                    "He said that he was going home.",
                    "He said that he went home.",
                    "He said that he had gone home."
                ],
                "options_hi": [
                    "He said that he is going home.",
                    "He said that he was going home.",
                    "He said that he went home.",
                    "He said that he had gone home."
                ],
                "answer_en": "He said that he was going home.",
                "answer_hi": "He said that he was going home.",
                "attempted": false,
                "selected": "",
                "visited": false
            },
            {
                "num": 9,
                "question_en": "Which of the following is a question tag for 'He is a doctor'?",
                "question_hi": "'He is a doctor' के लिए सही प्रश्न वाचक अनुच्छेद कौन-सा है?",
                "options_en": ["is he?", "isn't he?", "was he?", "wasn't he?"],
                "options_hi": ["is he?", "isn't he?", "was he?", "wasn't he?"],
                "answer_en": "isn't he?",
                "answer_hi": "isn't he?",
                "attempted": false,
                "selected": "",
                "visited": false
            },
            {
                "num": 10,
                "question_en": "Fill in the blank: She is fond ___ music.",
                "question_hi": "रिक्त स्थान भरें: She is fond ___ music.",
                "options_en": ["to", "with", "in", "of"],
                "options_hi": ["to", "with", "in", "of"],
                "answer_en": "of",
                "answer_hi": "of",
                "attempted": false,
                "selected": "",
                "visited": false
            },
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
