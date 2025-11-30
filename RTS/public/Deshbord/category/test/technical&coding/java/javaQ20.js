const questions=[
  { num: 1, question: "Which method converts int to string?", options: ["String.valueOf()", "Integer.toString()", "int.toString()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 2, question: "Which class provides mathematical functions?", options: ["Math", "Calculator", "Numbers", "Arithmetic"], answer: "Math", attempted: false, selected: "" },
  { num: 3, question: "Which method returns absolute value?", options: ["Math.abs()", "Math.absolute()", "Math.value()", "Math.absValue()"], answer: "Math.abs()", attempted: false, selected: "" },
  { num: 4, question: "Which method returns square root?", options: ["Math.sqrt()", "Math.root()", "Math.squareRoot()", "Math.getSqrt()"], answer: "Math.sqrt()", attempted: false, selected: "" },
  { num: 5, question: "Which method returns power of a number?", options: ["Math.pow()", "Math.power()", "Math.exponent()", "Math.raise()"], answer: "Math.pow()", attempted: false, selected: "" },
  { num: 6, question: "Which method returns random number?", options: ["Math.random()", "Random.next()", "Math.rand()", "Random.number()"], answer: "Math.random()", attempted: false, selected: "" },
  { num: 7, question: "Which class generates random numbers?", options: ["Random", "Math", "NumberGenerator", "ThreadLocalRandom"], answer: "Random", attempted: false, selected: "" },
  { num: 8, question: "Which method generates next int in range?", options: ["nextInt()", "nextInteger()", "getInt()", "randInt()"], answer: "nextInt()", attempted: false, selected: "" },
  { num: 9, question: "Which class represents immutable sequence of characters?", options: ["String", "StringBuilder", "StringBuffer", "CharSequence"], answer: "String", attempted: false, selected: "" },
  { num: 10, question: "Which class represents mutable sequence of characters?", options: ["StringBuilder", "String", "StringBuffer", "CharSequence"], answer: "StringBuilder", attempted: false, selected: "" },
  { num: 11, question: "Which class is thread-safe mutable string?", options: ["StringBuffer", "String", "StringBuilder", "CharSequence"], answer: "StringBuffer", attempted: false, selected: "" },
  { num: 12, question: "Which method appends string to StringBuilder?", options: ["append()", "add()", "concat()", "insert()"], answer: "append()", attempted: false, selected: "" },
  { num: 13, question: "Which method inserts string at index?", options: ["insert()", "appendAt()", "add()", "concatAt()"], answer: "insert()", attempted: false, selected: "" },
  { num: 14, question: "Which method deletes substring in StringBuilder?", options: ["delete()", "remove()", "discard()", "erase()"], answer: "delete()", attempted: false, selected: "" },
  { num: 15, question: "Which method reverses StringBuilder?", options: ["reverse()", "flip()", "invert()", "backward()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 16, question: "Which class checks string equality ignoring case?", options: ["equalsIgnoreCase()", "StringUtils", "String.compare()", "compareIgnoreCase()"], answer: "equalsIgnoreCase()", attempted: false, selected: "" },
  { num: 17, question: "Which method trims whitespace from string?", options: ["trim()", "strip()", "removeSpaces()", "clean()"], answer: "trim()", attempted: false, selected: "" },
  { num: 18, question: "Which method checks if string starts with prefix?", options: ["startsWith()", "beginWith()", "prefixCheck()", "matchStart()"], answer: "startsWith()", attempted: false, selected: "" },
  { num: 19, question: "Which method checks if string ends with suffix?", options: ["endsWith()", "endWith()", "suffixCheck()", "matchEnd()"], answer: "endsWith()", attempted: false, selected: "" },
  { num: 20, question: "Which method replaces substring in string?", options: ["replace()", "replaceAll()", "substitute()", "change()"], answer: "replace()", attempted: false, selected: "" },
  { num: 21, question: "Which method splits string by delimiter?", options: ["split()", "divide()", "tokenize()", "partition()"], answer: "split()", attempted: false, selected: "" },
  { num: 22, question: "Which method returns substring from index?", options: ["substring()", "subStringFrom()", "slice()", "cut()"], answer: "substring()", attempted: false, selected: "" },
  { num: 23, question: "Which method converts string to char array?", options: ["toCharArray()", "toChars()", "convertToArray()", "getChars()"], answer: "toCharArray()", attempted: false, selected: "" },
  { num: 24, question: "Which class parses primitive from string?", options: ["Wrapper Classes", "Parser", "Converter", "PrimitiveParser"], answer: "Wrapper Classes", attempted: false, selected: "" },
  { num: 25, question: "Which method returns index of char?", options: ["indexOf()", "charIndex()", "find()", "search()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 26, question: "Which method returns last index of char?", options: ["lastIndexOf()", "findLast()", "searchLast()", "charLastIndex()"], answer: "lastIndexOf()", attempted: false, selected: "" },
  { num: 27, question: "Which class provides character checks?", options: ["Character", "CharUtils", "String", "CharCheck"], answer: "Character", attempted: false, selected: "" },
  { num: 28, question: "Which method checks if char is digit?", options: ["Character.isDigit()", "Character.isNumber()", "Character.checkDigit()", "Char.isDigit()"], answer: "Character.isDigit()", attempted: false, selected: "" },
  { num: 29, question: "Which method checks if char is letter?", options: ["Character.isLetter()", "Character.isAlphabet()", "Character.isChar()", "Char.isLetter()"], answer: "Character.isLetter()", attempted: false, selected: "" },
  { num: 30, question: "Which method converts char to uppercase?", options: ["Character.toUpperCase()", "Character.upper()", "Char.toUpper()", "Char.uppercase()"], answer: "Character.toUpperCase()", attempted: false, selected: "" },
  { num: 31, question: "Which method converts char to lowercase?", options: ["Character.toLowerCase()", "Character.lower()", "Char.toLower()", "Char.lowercase()"], answer: "Character.toLowerCase()", attempted: false, selected: "" },
  { num: 32, question: "Which method returns Unicode value of char?", options: ["Character.getNumericValue()", "Character.toInt()", "Char.getUnicode()", "Character.toCode()"], answer: "Character.getNumericValue()", attempted: false, selected: "" },
  { num: 33, question: "Which class represents system input/output?", options: ["System", "IO", "Console", "Scanner"], answer: "System", attempted: false, selected: "" },
  { num: 34, question: "Which object reads console input?", options: ["Scanner", "BufferedReader", "Console", "InputStreamReader"], answer: "Scanner", attempted: false, selected: "" },
  { num: 35, question: "Which method reads next line from Scanner?", options: ["nextLine()", "readLine()", "getLine()", "read()"], answer: "nextLine()", attempted: false, selected: "" },
  { num: 36, question: "Which method reads next token from Scanner?", options: ["next()", "nextToken()", "read()", "get()"], answer: "next()", attempted: false, selected: "" },
  { num: 37, question: "Which method closes Scanner?", options: ["close()", "end()", "shutdown()", "terminate()"], answer: "close()", attempted: false, selected: "" },
  { num: 38, question: "Which method flushes output stream?", options: ["flush()", "clear()", "reset()", "refresh()"], answer: "flush()", attempted: false, selected: "" },
  { num: 39, question: "Which method prints output without newline?", options: ["print()", "println()", "write()", "output()"], answer: "print()", attempted: false, selected: "" },
  { num: 40, question: "Which method prints output with newline?", options: ["println()", "print()", "writeLine()", "outputLine()"], answer: "println()", attempted: false, selected: "" },
  { num: 41, question: "Which class writes text to file?", options: ["FileWriter", "BufferedWriter", "PrintWriter", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 42, question: "Which method writes string to file?", options: ["write()", "append()", "print()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 43, question: "Which class reads text from file?", options: ["FileReader", "BufferedReader", "Scanner", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 44, question: "Which method closes file reader/writer?", options: ["close()", "end()", "finish()", "terminate()"], answer: "close()", attempted: false, selected: "" },
  { num: 45, question: "Which exception occurs when file not found?", options: ["FileNotFoundException", "IOException", "RuntimeException", "InputException"], answer: "FileNotFoundException", attempted: false, selected: "" },
  { num: 46, question: "Which method checks if file exists?", options: ["exists()", "isFile()", "checkFile()", "fileExists()"], answer: "exists()", attempted: false, selected: "" },
  { num: 47, question: "Which method deletes a file?", options: ["delete()", "remove()", "erase()", "destroy()"], answer: "delete()", attempted: false, selected: "" },
  { num: 48, question: "Which class represents directories?", options: ["File", "Path", "Directory", "Folder"], answer: "File", attempted: false, selected: "" },
  { num: 49, question: "Which method creates new file?", options: ["createNewFile()", "newFile()", "makeFile()", "File.create()"], answer: "createNewFile()", attempted: false, selected: "" },
  { num: 50, question: "Which method creates directory?", options: ["mkdir()", "createDir()", "makeDir()", "newDir()"], answer: "mkdir()", attempted: false, selected: "" }
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
