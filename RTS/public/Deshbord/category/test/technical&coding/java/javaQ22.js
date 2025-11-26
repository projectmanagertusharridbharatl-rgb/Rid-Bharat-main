const questions=
  [
  { num: 1, question: "Which method converts integer to string?", options: ["String.valueOf()", "Integer.toString()", "toString()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 2, question: "Which class represents immutable string?", options: ["String", "StringBuilder", "StringBuffer", "CharSequence"], answer: "String", attempted: false, selected: "" },
  { num: 3, question: "Which class allows mutable strings?", options: ["StringBuilder", "String", "StringBuffer", "CharSequence"], answer: "StringBuilder", attempted: false, selected: "" },
  { num: 4, question: "Which class is synchronized for mutable strings?", options: ["StringBuffer", "StringBuilder", "String", "CharSequence"], answer: "StringBuffer", attempted: false, selected: "" },
  { num: 5, question: "Which method appends string in StringBuilder?", options: ["append()", "add()", "concat()", "insert()"], answer: "append()", attempted: false, selected: "" },
  { num: 6, question: "Which method inserts string at index in StringBuilder?", options: ["insert()", "append()", "add()", "set()"], answer: "insert()", attempted: false, selected: "" },
  { num: 7, question: "Which method deletes characters in StringBuilder?", options: ["delete()", "remove()", "discard()", "cut()"], answer: "delete()", attempted: false, selected: "" },
  { num: 8, question: "Which method replaces characters in StringBuilder?", options: ["replace()", "set()", "update()", "put()"], answer: "replace()", attempted: false, selected: "" },
  { num: 9, question: "Which method reverses StringBuilder?", options: ["reverse()", "invert()", "flip()", "revert()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 10, question: "Which method returns character at index in StringBuilder?", options: ["charAt()", "get()", "character()", "index()"], answer: "charAt()", attempted: false, selected: "" },
  { num: 11, question: "Which class represents random numbers?", options: ["Random", "Math", "SecureRandom", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 12, question: "Which method returns random integer?", options: ["nextInt()", "randomInt()", "randInt()", "getInt()"], answer: "nextInt()", attempted: false, selected: "" },
  { num: 13, question: "Which method returns random double?", options: ["nextDouble()", "randomDouble()", "randDouble()", "getDouble()"], answer: "nextDouble()", attempted: false, selected: "" },
  { num: 14, question: "Which class represents thread?", options: ["Thread", "Runnable", "Executor", "Task"], answer: "Thread", attempted: false, selected: "" },
  { num: 15, question: "Which method starts a new thread?", options: ["start()", "run()", "execute()", "begin()"], answer: "start()", attempted: false, selected: "" },
  { num: 16, question: "Which method runs thread code?", options: ["run()", "start()", "execute()", "begin()"], answer: "run()", attempted: false, selected: "" },
  { num: 17, question: "Which interface allows thread implementation?", options: ["Runnable", "Threadable", "Executor", "Callable"], answer: "Runnable", attempted: false, selected: "" },
  { num: 18, question: "Which class allows thread sleeping?", options: ["Thread", "Runnable", "Executor", "Task"], answer: "Thread", attempted: false, selected: "" },
  { num: 19, question: "Which method pauses thread?", options: ["sleep()", "wait()", "pause()", "stop()"], answer: "sleep()", attempted: false, selected: "" },
  { num: 20, question: "Which method notifies waiting threads?", options: ["notify()", "notifyAll()", "signal()", "wake()"], answer: "notify()", attempted: false, selected: "" },
  { num: 21, question: "Which method notifies all waiting threads?", options: ["notifyAll()", "notify()", "signalAll()", "wakeAll()"], answer: "notifyAll()", attempted: false, selected: "" },
  { num: 22, question: "Which exception occurs when thread sleeps?", options: ["InterruptedException", "IllegalStateException", "ThreadException", "RuntimeException"], answer: "InterruptedException", attempted: false, selected: "" },
  { num: 23, question: "Which class allows scheduling tasks?", options: ["Timer", "TaskScheduler", "ScheduledExecutor", "ThreadScheduler"], answer: "Timer", attempted: false, selected: "" },
  { num: 24, question: "Which method schedules a task in Timer?", options: ["schedule()", "start()", "run()", "execute()"], answer: "schedule()", attempted: false, selected: "" },
  { num: 25, question: "Which method cancels a Timer task?", options: ["cancel()", "stop()", "end()", "terminate()"], answer: "cancel()", attempted: false, selected: "" },
  { num: 26, question: "Which class provides math constants and methods?", options: ["Math", "Random", "Calculator", "Number"], answer: "Math", attempted: false, selected: "" },
  { num: 27, question: "Which constant represents pi in Math class?", options: ["Math.PI", "Math.E", "Math.Pi", "Math.PiValue"], answer: "Math.PI", attempted: false, selected: "" },
  { num: 28, question: "Which method returns square root?", options: ["Math.sqrt()", "Math.squareRoot()", "Math.root()", "Math.pow(0.5)"], answer: "Math.sqrt()", attempted: false, selected: "" },
  { num: 29, question: "Which method returns power?", options: ["Math.pow()", "Math.power()", "Math.exp()", "Math.raise()"], answer: "Math.pow()", attempted: false, selected: "" },
  { num: 30, question: "Which method returns absolute value?", options: ["Math.abs()", "Math.absolute()", "Math.value()", "Math.mod()"], answer: "Math.abs()", attempted: false, selected: "" },
  { num: 31, question: "Which method returns max of two numbers?", options: ["Math.max()", "Math.maximum()", "Math.greater()", "Math.top()"], answer: "Math.max()", attempted: false, selected: "" },
  { num: 32, question: "Which method returns min of two numbers?", options: ["Math.min()", "Math.minimum()", "Math.lower()", "Math.bottom()"], answer: "Math.min()", attempted: false, selected: "" },
  { num: 33, question: "Which method rounds a number to nearest integer?", options: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.fix()"], answer: "Math.round()", attempted: false, selected: "" },
  { num: 34, question: "Which method rounds a number up?", options: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.up()"], answer: "Math.ceil()", attempted: false, selected: "" },
  { num: 35, question: "Which method rounds a number down?", options: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.down()"], answer: "Math.floor()", attempted: false, selected: "" },
  { num: 36, question: "Which class provides formatting for numbers?", options: ["DecimalFormat", "NumberFormat", "Formatter", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 37, question: "Which pattern rounds number to 2 decimal places?", options: ["#.##", "#.00", "0.00", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 38, question: "Which class formats dates?", options: ["SimpleDateFormat", "DateFormat", "DateTimeFormatter", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 39, question: "Which pattern formats date as dd/MM/yyyy?", options: ["dd/MM/yyyy", "MM/dd/yyyy", "yyyy/MM/dd", "All of these"], answer: "dd/MM/yyyy", attempted: false, selected: "" },
  { num: 40, question: "Which class provides file reading methods?", options: ["FileReader", "BufferedReader", "Scanner", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 41, question: "Which class provides file writing methods?", options: ["FileWriter", "BufferedWriter", "PrintWriter", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 42, question: "Which method reads a line from file?", options: ["readLine()", "read()", "getLine()", "nextLine()"], answer: "readLine()", attempted: false, selected: "" },
  { num: 43, question: "Which method writes a line to file?", options: ["write()", "append()", "print()", "println()"], answer: "write()", attempted: false, selected: "" },
  { num: 44, question: "Which exception is thrown for file not found?", options: ["FileNotFoundException", "IOException", "NullPointerException", "RuntimeException"], answer: "FileNotFoundException", attempted: false, selected: "" },
  { num: 45, question: "Which exception is thrown for I/O errors?", options: ["IOException", "FileNotFoundException", "RuntimeException", "InterruptedException"], answer: "IOException", attempted: false, selected: "" },
  { num: 46, question: "Which class represents object serialization?", options: ["ObjectOutputStream", "ObjectInputStream", "Serializable", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 47, question: "Which interface allows object serialization?", options: ["Serializable", "Externalizable", "Clonable", "All of these"], answer: "Serializable", attempted: false, selected: "" },
  { num: 48, question: "Which method writes object to stream?", options: ["writeObject()", "serialize()", "save()", "putObject()"], answer: "writeObject()", attempted: false, selected: "" },
  { num: 49, question: "Which method reads object from stream?", options: ["readObject()", "deserialize()", "getObject()", "loadObject()"], answer: "readObject()", attempted: false, selected: "" },
  { num: 50, question: "Which exception occurs during serialization?", options: ["NotSerializableException", "IOException", "ClassNotFoundException", "All of these"], answer: "NotSerializableException", attempted: false, selected: "" }
]


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



////////////////////////////////////////////////////////////////////////////////////////////

// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

      function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            // check correct answer
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }

        } else {
            notAttempted++;
        }

        // push result
        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // store in localStorage
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // ask for result page
    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
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


///////////////////////////////////////