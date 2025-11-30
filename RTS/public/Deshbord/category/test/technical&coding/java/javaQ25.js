const questions=
  [
  { num: 1, question: "Which class represents a mutable sequence of characters?", options: ["StringBuilder", "StringBuffer", "String", "CharSequence"], answer: "StringBuilder", attempted: false, selected: "" },
  { num: 2, question: "Which class represents a thread-safe mutable sequence of characters?", options: ["StringBuffer", "StringBuilder", "String", "CharSequence"], answer: "StringBuffer", attempted: false, selected: "" },
  { num: 3, question: "Which method appends string to StringBuilder?", options: ["append()", "add()", "concat()", "join()"], answer: "append()", attempted: false, selected: "" },
  { num: 4, question: "Which method inserts string at given index?", options: ["insert()", "addAt()", "put()", "set()"], answer: "insert()", attempted: false, selected: "" },
  { num: 5, question: "Which method deletes characters from sequence?", options: ["delete()", "remove()", "cut()", "erase()"], answer: "delete()", attempted: false, selected: "" },
  { num: 6, question: "Which method reverses the sequence?", options: ["reverse()", "invert()", "flip()", "back()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 7, question: "Which method returns length of sequence?", options: ["length()", "size()", "count()", "getLength()"], answer: "length()", attempted: false, selected: "" },
  { num: 8, question: "Which interface is implemented by StringBuilder?", options: ["Serializable", "CharSequence", "Comparable", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 9, question: "Which method compares two strings ignoring case?", options: ["equalsIgnoreCase()", "compareToIgnoreCase()", "compare()", "equals()"], answer: "equalsIgnoreCase()", attempted: false, selected: "" },
  { num: 10, question: "Which method returns Unicode value of character?", options: ["codePointAt()", "charAt()", "getCode()", "unicodeValue()"], answer: "codePointAt()", attempted: false, selected: "" },
  { num: 11, question: "Which method returns substring from string?", options: ["substring()", "substr()", "getSubString()", "cut()"], answer: "substring()", attempted: false, selected: "" },
  { num: 12, question: "Which method trims whitespace from string?", options: ["trim()", "strip()", "removeSpaces()", "allOfThese"], answer: "trim()", attempted: false, selected: "" },
  { num: 13, question: "Which method replaces characters in string?", options: ["replace()", "substitute()", "change()", "set()"], answer: "replace()", attempted: false, selected: "" },
  { num: 14, question: "Which method splits string by delimiter?", options: ["split()", "divide()", "partition()", "separate()"], answer: "split()", attempted: false, selected: "" },
  { num: 15, question: "Which method checks if string starts with prefix?", options: ["startsWith()", "beginsWith()", "hasPrefix()", "checkStart()"], answer: "startsWith()", attempted: false, selected: "" },
  { num: 16, question: "Which method checks if string ends with suffix?", options: ["endsWith()", "hasSuffix()", "finishWith()", "checkEnd()"], answer: "endsWith()", attempted: false, selected: "" },
  { num: 17, question: "Which method converts string to character array?", options: ["toCharArray()", "toArray()", "getChars()", "asArray()"], answer: "toCharArray()", attempted: false, selected: "" },
  { num: 18, question: "Which method compares two strings lexicographically?", options: ["compareTo()", "equals()", "compare()", "match()"], answer: "compareTo()", attempted: false, selected: "" },
  { num: 19, question: "Which method checks if string contains substring?", options: ["contains()", "has()", "find()", "indexOf()"], answer: "contains()", attempted: false, selected: "" },
  { num: 20, question: "Which method returns index of substring?", options: ["indexOf()", "search()", "findIndex()", "position()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 21, question: "Which method returns last index of character?", options: ["lastIndexOf()", "indexOfLast()", "findLast()", "searchLast()"], answer: "lastIndexOf()", attempted: false, selected: "" },
  { num: 22, question: "Which method converts string to lowercase?", options: ["toLowerCase()", "lowercase()", "toLower()", "allOfThese"], answer: "toLowerCase()", attempted: false, selected: "" },
  { num: 23, question: "Which method converts string to uppercase?", options: ["toUpperCase()", "uppercase()", "toUpper()", "allOfThese"], answer: "toUpperCase()", attempted: false, selected: "" },
  { num: 24, question: "Which method returns true if string is empty?", options: ["isEmpty()", "empty()", "hasContent()", "length()==0"], answer: "isEmpty()", attempted: false, selected: "" },
  { num: 25, question: "Which class is used for regex pattern?", options: ["Pattern", "Matcher", "Regex", "RegExp"], answer: "Pattern", attempted: false, selected: "" },
  { num: 26, question: "Which class is used to match regex?", options: ["Matcher", "Pattern", "RegExp", "Regex"], answer: "Matcher", attempted: false, selected: "" },
  { num: 27, question: "Which method checks regex match?", options: ["matches()", "check()", "validate()", "find()"], answer: "matches()", attempted: false, selected: "" },
  { num: 28, question: "Which method finds regex occurrences?", options: ["find()", "matches()", "search()", "allMatches()"], answer: "find()", attempted: false, selected: "" },
  { num: 29, question: "Which method replaces regex matches?", options: ["replaceAll()", "replace()", "substitute()", "replaceFirst()"], answer: "replaceAll()", attempted: false, selected: "" },
  { num: 30, question: "Which method replaces first regex match?", options: ["replaceFirst()", "replace()", "replaceAll()", "substitute()"], answer: "replaceFirst()", attempted: false, selected: "" },
  { num: 31, question: "Which class converts string to primitive?", options: ["Wrapper classes", "String", "Scanner", "Object"], answer: "Wrapper classes", attempted: false, selected: "" },
  { num: 32, question: "Which method parses string to int?", options: ["Integer.parseInt()", "Integer.valueOf()", "parseInt()", "toInt()"], answer: "Integer.parseInt()", attempted: false, selected: "" },
  { num: 33, question: "Which method parses string to double?", options: ["Double.parseDouble()", "parseDouble()", "Double.valueOf()", "toDouble()"], answer: "Double.parseDouble()", attempted: false, selected: "" },
  { num: 34, question: "Which class converts primitive to string?", options: ["String.valueOf()", "Integer.toString()", "Double.toString()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 35, question: "Which method returns class of object?", options: ["getClass()", "classOf()", "getType()", "objectClass()"], answer: "getClass()", attempted: false, selected: "" },
  { num: 36, question: "Which method returns hashcode of object?", options: ["hashCode()", "getHash()", "code()", "getCode()"], answer: "hashCode()", attempted: false, selected: "" },
  { num: 37, question: "Which method checks equality of objects?", options: ["equals()", "==", "isEqual()", "match()"], answer: "equals()", attempted: false, selected: "" },
  { num: 38, question: "Which method returns string representation of object?", options: ["toString()", "asString()", "stringify()", "getString()"], answer: "toString()", attempted: false, selected: "" },
  { num: 39, question: "Which method clones object?", options: ["clone()", "copy()", "duplicate()", "replicate()"], answer: "clone()", attempted: false, selected: "" },
  { num: 40, question: "Which interface supports object cloning?", options: ["Cloneable", "Serializable", "Comparable", "Runnable"], answer: "Cloneable", attempted: false, selected: "" },
  { num: 41, question: "Which method finalizes object before GC?", options: ["finalize()", "cleanup()", "destroy()", "onDelete()"], answer: "finalize()", attempted: false, selected: "" },
  { num: 42, question: "Which method requests garbage collection?", options: ["System.gc()", "Runtime.gc()", "collect()", "allOfThese"], answer: "System.gc()", attempted: false, selected: "" },
  { num: 43, question: "Which class provides runtime info?", options: ["Runtime", "System", "Process", "Thread"], answer: "Runtime", attempted: false, selected: "" },
  { num: 44, question: "Which method returns available processors?", options: ["availableProcessors()", "getProcessors()", "processorCount()", "allOfThese"], answer: "availableProcessors()", attempted: false, selected: "" },
  { num: 45, question: "Which method returns free memory in JVM?", options: ["freeMemory()", "getFreeMemory()", "memoryAvailable()", "allOfThese"], answer: "freeMemory()", attempted: false, selected: "" },
  { num: 46, question: "Which method returns total memory in JVM?", options: ["totalMemory()", "getTotalMemory()", "memoryTotal()", "allOfThese"], answer: "totalMemory()", attempted: false, selected: "" },
  { num: 47, question: "Which class is used to execute external process?", options: ["ProcessBuilder", "Runtime", "Process", "System"], answer: "ProcessBuilder", attempted: false, selected: "" },
  { num: 48, question: "Which method starts process with ProcessBuilder?", options: ["start()", "run()", "exec()", "launch()"], answer: "start()", attempted: false, selected: "" },
  { num: 49, question: "Which class manages environment variables?", options: ["System", "Runtime", "ProcessBuilder", "Env"], answer: "System", attempted: false, selected: "" },
  { num: 50, question: "Which method returns available memory after GC?", options: ["gc()", "freeMemory()", "totalMemory()", "maxMemory()"], answer: "freeMemory()", attempted: false, selected: "" }
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
