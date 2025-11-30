const questions=
 [
  { num: 1, question: "Which class is used for formatting dates?", options: ["SimpleDateFormat", "DateFormat", "Formatter", "All of these"], answer: "SimpleDateFormat", attempted: false, selected: "" },
  { num: 2, question: "Which method formats date to string?", options: ["format()", "toString()", "formatDate()", "allOfThese"], answer: "format()", attempted: false, selected: "" },
  { num: 3, question: "Which class parses formatted date string?", options: ["SimpleDateFormat", "Date", "LocalDate", "Calendar"], answer: "SimpleDateFormat", attempted: false, selected: "" },
  { num: 4, question: "Which class stores time-zone information?", options: ["TimeZone", "Calendar", "ZoneId", "LocalDateTime"], answer: "TimeZone", attempted: false, selected: "" },
  { num: 5, question: "Which method gets default time-zone?", options: ["getDefault()", "getTimeZone()", "defaultZone()", "getZone()"], answer: "getDefault()", attempted: false, selected: "" },
  { num: 6, question: "Which class provides immutable date-time objects?", options: ["LocalDate", "Date", "Calendar", "DateTime"], answer: "LocalDate", attempted: false, selected: "" },
  { num: 7, question: "Which class provides time without date?", options: ["LocalTime", "Time", "Date", "Calendar"], answer: "LocalTime", attempted: false, selected: "" },
  { num: 8, question: "Which class provides date and time?", options: ["LocalDateTime", "Date", "Calendar", "LocalTime"], answer: "LocalDateTime", attempted: false, selected: "" },
  { num: 9, question: "Which method returns current date?", options: ["now()", "currentDate()", "today()", "getDate()"], answer: "now()", attempted: false, selected: "" },
  { num: 10, question: "Which method adds days to LocalDate?", options: ["plusDays()", "addDays()", "incrementDays()", "nextDays()"], answer: "plusDays()", attempted: false, selected: "" },
  { num: 11, question: "Which method subtracts days from LocalDate?", options: ["minusDays()", "subtractDays()", "prevDays()", "removeDays()"], answer: "minusDays()", attempted: false, selected: "" },
  { num: 12, question: "Which interface allows sorting of objects?", options: ["Comparable", "Comparator", "Collection", "Iterable"], answer: "Comparable", attempted: false, selected: "" },
  { num: 13, question: "Which interface defines external sorting logic?", options: ["Comparator", "Comparable", "Collection", "Iterable"], answer: "Comparator", attempted: false, selected: "" },
  { num: 14, question: "Which method sorts list using natural order?", options: ["Collections.sort(list)", "list.sort()", "sortList(list)", "sort()"], answer: "Collections.sort(list)", attempted: false, selected: "" },
  { num: 15, question: "Which method sorts list using Comparator?", options: ["Collections.sort(list, comp)", "list.sort(comp)", "sortWithComparator(list)", "allOfThese"], answer: "Collections.sort(list, comp)", attempted: false, selected: "" },
  { num: 16, question: "Which class represents big numbers?", options: ["BigInteger", "Integer", "Long", "Double"], answer: "BigInteger", attempted: false, selected: "" },
  { num: 17, question: "Which class represents big decimal numbers?", options: ["BigDecimal", "Double", "Float", "Decimal"], answer: "BigDecimal", attempted: false, selected: "" },
  { num: 18, question: "Which method converts BigInteger to int?", options: ["intValue()", "toInt()", "convertToInt()", "getInt()"], answer: "intValue()", attempted: false, selected: "" },
  { num: 19, question: "Which method converts BigDecimal to double?", options: ["doubleValue()", "toDouble()", "convertToDouble()", "getDouble()"], answer: "doubleValue()", attempted: false, selected: "" },
  { num: 20, question: "Which class reads lines from file?", options: ["BufferedReader", "Scanner", "FileReader", "All of these"], answer: "BufferedReader", attempted: false, selected: "" },
  { num: 21, question: "Which class reads bytes from file?", options: ["FileInputStream", "FileReader", "BufferedReader", "Scanner"], answer: "FileInputStream", attempted: false, selected: "" },
  { num: 22, question: "Which class writes bytes to file?", options: ["FileOutputStream", "FileWriter", "PrintWriter", "BufferedWriter"], answer: "FileOutputStream", attempted: false, selected: "" },
  { num: 23, question: "Which class writes characters to file?", options: ["FileWriter", "FileOutputStream", "PrintWriter", "BufferedWriter"], answer: "FileWriter", attempted: false, selected: "" },
  { num: 24, question: "Which class buffers output for efficiency?", options: ["BufferedWriter", "FileWriter", "PrintWriter", "FileOutputStream"], answer: "BufferedWriter", attempted: false, selected: "" },
  { num: 25, question: "Which method closes stream?", options: ["close()", "shutdown()", "exit()", "finish()"], answer: "close()", attempted: false, selected: "" },
  { num: 26, question: "Which method reads single character?", options: ["read()", "readChar()", "getChar()", "nextChar()"], answer: "read()", attempted: false, selected: "" },
  { num: 27, question: "Which class reads primitive data types?", options: ["DataInputStream", "Scanner", "BufferedReader", "FileReader"], answer: "DataInputStream", attempted: false, selected: "" },
  { num: 28, question: "Which class writes primitive data types?", options: ["DataOutputStream", "FileWriter", "BufferedWriter", "PrintWriter"], answer: "DataOutputStream", attempted: false, selected: "" },
  { num: 29, question: "Which method checks if file exists?", options: ["exists()", "isPresent()", "checkFile()", "allOfThese"], answer: "exists()", attempted: false, selected: "" },
  { num: 30, question: "Which method deletes file?", options: ["delete()", "remove()", "erase()", "allOfThese"], answer: "delete()", attempted: false, selected: "" },
  { num: 31, question: "Which class creates temporary files?", options: ["File", "TempFile", "Path", "Files"], answer: "File", attempted: false, selected: "" },
  { num: 32, question: "Which method creates directories?", options: ["mkdir()", "createDir()", "makeDir()", "allOfThese"], answer: "mkdir()", attempted: false, selected: "" },
  { num: 33, question: "Which class reads environment variables?", options: ["System", "Runtime", "Properties", "Env"], answer: "System", attempted: false, selected: "" },
  { num: 34, question: "Which method gets system property?", options: ["getProperty()", "getEnv()", "systemProperty()", "allOfThese"], answer: "getProperty()", attempted: false, selected: "" },
  { num: 35, question: "Which method sets system property?", options: ["setProperty()", "setEnv()", "addProperty()", "allOfThese"], answer: "setProperty()", attempted: false, selected: "" },
  { num: 36, question: "Which class executes system commands?", options: ["Runtime", "System", "Process", "ProcessBuilder"], answer: "Runtime", attempted: false, selected: "" },
  { num: 37, question: "Which method executes command?", options: ["exec()", "run()", "execute()", "start()"], answer: "exec()", attempted: false, selected: "" },
  { num: 38, question: "Which class represents runtime exceptions?", options: ["RuntimeException", "Exception", "Error", "Throwable"], answer: "RuntimeException", attempted: false, selected: "" },
  { num: 39, question: "Which class represents checked exceptions?", options: ["Exception", "RuntimeException", "Error", "Throwable"], answer: "Exception", attempted: false, selected: "" },
  { num: 40, question: "Which class represents serious system errors?", options: ["Error", "Exception", "RuntimeException", "Throwable"], answer: "Error", attempted: false, selected: "" },
  { num: 41, question: "Which class represents all throwable types?", options: ["Throwable", "Exception", "Error", "RuntimeException"], answer: "Throwable", attempted: false, selected: "" },
  { num: 42, question: "Which class handles input/output exceptions?", options: ["IOException", "FileNotFoundException", "RuntimeException", "Error"], answer: "IOException", attempted: false, selected: "" },
  { num: 43, question: "Which class handles file not found?", options: ["FileNotFoundException", "IOException", "RuntimeException", "Error"], answer: "FileNotFoundException", attempted: false, selected: "" },
  { num: 44, question: "Which method reads all bytes from file?", options: ["readAllBytes()", "read()", "getBytes()", "allOfThese"], answer: "readAllBytes()", attempted: false, selected: "" },
  { num: 45, question: "Which method writes bytes to file?", options: ["write()", "put()", "save()", "allOfThese"], answer: "write()", attempted: false, selected: "" },
  { num: 46, question: "Which class represents files and paths?", options: ["Path", "File", "Files", "FileSystem"], answer: "Path", attempted: false, selected: "" },
  { num: 47, question: "Which class provides static file operations?", options: ["Files", "File", "FileSystem", "Path"], answer: "Files", attempted: false, selected: "" },
  { num: 48, question: "Which method reads all lines of file?", options: ["readAllLines()", "read()", "getLines()", "allOfThese"], answer: "readAllLines()", attempted: false, selected: "" },
  { num: 49, question: "Which method writes lines to file?", options: ["write()", "putLines()", "saveLines()", "allOfThese"], answer: "write()", attempted: false, selected: "" },
  { num: 50, question: "Which interface supports auto-closeable resources?", options: ["AutoCloseable", "Closeable", "Runnable", "Resource"], answer: "AutoCloseable", attempted: false, selected: "" }
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
