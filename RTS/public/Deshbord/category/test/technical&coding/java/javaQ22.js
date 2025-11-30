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






// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

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
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ (FINAL FIXED) ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // ⭐ LIVE TIME CALCULATION (CORRECT)
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // SAVE TIME
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // SAVE DATA
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // GO TO RESULT PAGE
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
        <div class="circle"
        style="background:${color}"
        onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA (NO CHANGE) ----------------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};
