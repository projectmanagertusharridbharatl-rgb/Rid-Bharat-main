const questions = [
    { num: 1, question: " 1 What is the SI unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: "Ampere", attempted: false, selected: "" },
    { num: 2, question: " 2 What is the chemical symbol for water?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O", attempted: false, selected: "" },
    { num: 3, question: "3 What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars", attempted: false, selected: "" },
    { num: 4, question: "4 Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], answer: "Albert Einstein", attempted: false, selected: "" },
    { num: 5, question: " 5 What gas do plants use for photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide", attempted: false, selected: "" },
    { num: 6, question: " 6 Which element has the chemical symbol 'Fe'?", options: ["Iron", "Fluorine", "Lead", "Gold"], answer: "Iron", attempted: false, selected: "" },
    { num: 7, question: "7 What is the hardest natural substance on Earth?", options: ["Gold", "Diamond", "Quartz", "Iron"], answer: "Diamond", attempted: false, selected: "" },
    { num: 8, question: "8 Which planet is closest to the sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury", attempted: false, selected: "" },
    { num: 9, question: " 9 How many bones are there in the adult human body?", options: ["206", "210", "180", "230"], answer: "206", attempted: false, selected: "" },
    { num: 10, question: " 10 What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris", attempted: false, selected: "" },
    { num: 11, question: " 11 Which gas do humans breathe in to survive?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Oxygen", attempted: false, selected: "" },
    { num: 12, question: " 12 What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8", attempted: false, selected: "" },
    { num: 13, question: "13 Who wrote 'Hamlet'?", options: ["William Wordsworth", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "William Shakespeare", attempted: false, selected: "" },
    { num: 14, question: " 14 Which planet is known for its rings?", options: ["Mars", "Jupiter", "Saturn", "Neptune"], answer: "Saturn", attempted: false, selected: "" },
    { num: 15, question: "15 How many continents are there on Earth?", options: ["5", "6", "7", "8"], answer: "7", attempted: false, selected: "" },
    { num: 16, question: "16 What is the boiling point of water in Celsius?", options: ["90°C", "100°C", "120°C", "150°C"], answer: "100°C", attempted: false, selected: "" },
    { num: 17, question: " 17 What is the capital of Japan?", options: ["Beijing", "Seoul", "Bangkok", "Tokyo"], answer: "Tokyo", attempted: false, selected: "" },
    { num: 18, question: " 18 Who painted the Mona Lisa?", options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"], answer: "Leonardo da Vinci", attempted: false, selected: "" },
    { num: 19, question: "19 What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean", attempted: false, selected: "" },
    { num: 20, question: "20 What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2", attempted: false, selected: "" },
    { num: 21, question: " 21 Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "India", "South Korea"], answer: "Japan", attempted: false, selected: "" },
    { num: 22, question: " 22 What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "600,000 km/s"], answer: "300,000 km/s", attempted: false, selected: "" },
    { num: 23, question: " 23 Which gas is used to fill balloons?", options: ["Oxygen", "Nitrogen", "Helium", "Carbon Dioxide"], answer: "Helium", attempted: false, selected: "" },
    { num: 24, question: " 24 Who is the author of 'Harry Potter'?", options: ["J.R.R. Tolkien", "J.K. Rowling", "George R.R. Martin", "Stephen King"], answer: "J.K. Rowling", attempted: false, selected: "" },
    { num: 25, question: "25 Which bird is known for its ability to mimic human speech?", options: ["Eagle", "Parrot", "Owl", "Pigeon"], answer: "Parrot", attempted: false, selected: "" },
    { num: 26, question: "26 Which element is needed for breathing?", options: ["Oxygen", "Carbon", "Nitrogen", "Sulfur"], answer: "Oxygen", attempted: false, selected: "" },
    { num: 27, question: " 27 What is the main ingredient in chocolate?", options: ["Sugar", "Milk", "Cocoa", "Flour"], answer: "Cocoa", attempted: false, selected: "" },
    { num: 28, question: "28 Which instrument is used to measure temperature?", options: ["Barometer", "Thermometer", "Hygrometer", "Seismometer"], answer: "Thermometer", attempted: false, selected: "" },
    { num: 29, question: " 29 How many colors are in a rainbow?", options: ["5", "6", "7", "8"], answer: "7", attempted: false, selected: "" },
    { num: 30, question: " 30 Which metal is the best conductor of electricity?", options: ["Iron", "Copper", "Gold", "Silver"], answer: "Silver", attempted: false, selected: "" }
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
