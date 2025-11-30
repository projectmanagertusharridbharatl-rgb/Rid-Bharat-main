let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes
let timerInterval;

// -------------------- LOAD QUESTION --------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const box = document.createElement("div");
        box.className = "option-box";
        box.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        box.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        box.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(box);
    });

    updateNavigation();
}

// -------------------- MARK ATTEMPT --------------------
function markAttempted(index, selected) {
    questions[index].attempted = true;
    questions[index].selected = selected;
    updateNavigation();
}

// -------------------- NEXT/PREV --------------------
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

// -------------------- LANGUAGE CHANGE ----------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// -------------------- TIMER --------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")} : ${m.toString().padStart(2, "0")} : ${s.toString().padStart(2, "0")}`;

        timeLeft--;

    }, 1000);
}

// -------------------- SUBMIT QUIZ --------------------
function submitQuiz() {
    if (!confirm("Submit test?")) return;

    clearInterval(timerInterval);

    // 🎯 Correct Time Calculation
    const totalSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalSpent / 60);
    const secs = totalSpent % 60;

    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// -------------------- NAVIGATION PANEL --------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class='circle' style='background:${color}'
            onclick='jumpToQuestion(${i})'>${i + 1}</div>`;
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// -------------------- CAMERA --------------------
let videoStream;

function startCamera() {
    const box = document.createElement("div");
    box.id = "camera-container";
    box.style.position = "fixed";
    box.style.top = "10px";
    box.style.left = "10px";
    box.style.width = "130px";
    box.style.height = "130px";
    box.style.borderRadius = "50%";
    box.style.overflow = "hidden";
    box.style.border = "3px solid red";
    box.style.zIndex = "9999";

    document.body.appendChild(box);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";

    box.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible"));
}

// -------------------- PAGE LOAD --------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};
