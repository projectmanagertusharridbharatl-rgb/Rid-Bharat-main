const questions =[
  { num: 1, question: "Which method rounds a floating number to nearest integer?", options: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"], answer: "Math.round()", attempted: false, selected: "" },
  { num: 2, question: "Which method returns largest of two numbers?", options: ["Math.max()", "Math.min()", "Math.greater()", "Math.compare()"], answer: "Math.max()", attempted: false, selected: "" },
  { num: 3, question: "Which method returns smallest of two numbers?", options: ["Math.min()", "Math.max()", "Math.lower()", "Math.compare()"], answer: "Math.min()", attempted: false, selected: "" },
  { num: 4, question: "Which method returns square root of number?", options: ["Math.sqrt()", "Math.square()", "Math.pow()", "Math.root()"], answer: "Math.sqrt()", attempted: false, selected: "" },
  { num: 5, question: "Which method returns power of number?", options: ["Math.pow()", "Math.power()", "Math.exp()", "Math.raise()"], answer: "Math.pow()", attempted: false, selected: "" },
  { num: 6, question: "Which method returns exponential e^x?", options: ["Math.exp()", "Math.exponent()", "Math.pow()", "Math.e()"], answer: "Math.exp()", attempted: false, selected: "" },
  { num: 7, question: "Which method returns natural logarithm?", options: ["Math.log()", "Math.ln()", "Math.log10()", "Math.log2()"], answer: "Math.log()", attempted: false, selected: "" },
  { num: 8, question: "Which method returns base 10 logarithm?", options: ["Math.log10()", "Math.log()", "Math.ln()", "Math.log2()"], answer: "Math.log10()", attempted: false, selected: "" },
  { num: 9, question: "Which method returns absolute difference?", options: ["Math.abs()", "Math.diff()", "Math.delta()", "Math.subtract()"], answer: "Math.abs()", attempted: false, selected: "" },
  { num: 10, question: "Which method returns random double between 0.0 and 1.0?", options: ["Math.random()", "Random.nextDouble()", "Math.rand()", "Random.random()"], answer: "Math.random()", attempted: false, selected: "" },
  { num: 11, question: "Which class allows formatting numbers?", options: ["DecimalFormat", "NumberFormat", "Formatter", "Format"], answer: "DecimalFormat", attempted: false, selected: "" },
  { num: 12, question: "Which method formats number as currency?", options: ["NumberFormat.getCurrencyInstance()", "DecimalFormat.currency()", "Currency.format()", "Format.currency()"], answer: "NumberFormat.getCurrencyInstance()", attempted: false, selected: "" },
  { num: 13, question: "Which method formats percentage?", options: ["NumberFormat.getPercentInstance()", "DecimalFormat.percent()", "Percent.format()", "Format.percent()"], answer: "NumberFormat.getPercentInstance()", attempted: false, selected: "" },
  { num: 14, question: "Which class parses numeric strings?", options: ["Integer", "Double", "Long", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 15, question: "Which method converts integer to string?", options: ["String.valueOf()", "Integer.toString()", "Both a and b", "toString()"], answer: "Both a and b", attempted: false, selected: "" },
  { num: 16, question: "Which interface allows sorting by comparator?", options: ["Comparator", "Comparable", "ComparableList", "Sorter"], answer: "Comparator", attempted: false, selected: "" },
  { num: 17, question: "Which interface allows natural ordering?", options: ["Comparable", "Comparator", "Ordered", "Sort"], answer: "Comparable", attempted: false, selected: "" },
  { num: 18, question: "Which method in Comparator compares two objects?", options: ["compare()", "compareTo()", "compareObjects()", "check()"], answer: "compare()", attempted: false, selected: "" },
  { num: 19, question: "Which method in Comparable compares current object?", options: ["compareTo()", "compare()", "equals()", "check()"], answer: "compareTo()", attempted: false, selected: "" },
  { num: 20, question: "Which class represents fixed-size queue?", options: ["ArrayDeque", "LinkedList", "PriorityQueue", "Queue"], answer: "ArrayDeque", attempted: false, selected: "" },
  { num: 21, question: "Which class represents priority queue?", options: ["PriorityQueue", "LinkedList", "ArrayDeque", "Queue"], answer: "PriorityQueue", attempted: false, selected: "" },
  { num: 22, question: "Which interface allows LIFO stack?", options: ["Stack", "Deque", "Queue", "List"], answer: "Deque", attempted: false, selected: "" },
  { num: 23, question: "Which method in Stack adds element?", options: ["push()", "add()", "append()", "insert()"], answer: "push()", attempted: false, selected: "" },
  { num: 24, question: "Which method in Stack removes top element?", options: ["pop()", "remove()", "delete()", "discard()"], answer: "pop()", attempted: false, selected: "" },
  { num: 25, question: "Which method returns top element without removing?", options: ["peek()", "top()", "get()", "first()"], answer: "peek()", attempted: false, selected: "" },
  { num: 26, question: "Which class provides system input and output streams?", options: ["System", "Scanner", "Console", "IOStream"], answer: "System", attempted: false, selected: "" },
  { num: 27, question: "Which class provides console input?", options: ["Console", "Scanner", "System", "BufferedReader"], answer: "Console", attempted: false, selected: "" },
  { num: 28, question: "Which method in Console reads password securely?", options: ["readPassword()", "readSecure()", "readLine()", "getPassword()"], answer: "readPassword()", attempted: false, selected: "" },
  { num: 29, question: "Which class represents immutable list?", options: ["List.of()", "Collections.unmodifiableList()", "Arrays.asList()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 30, question: "Which method checks if object equals another?", options: ["equals()", "==", "compareTo()", "isEqual()"], answer: "equals()", attempted: false, selected: "" },
  { num: 31, question: "Which method returns class name of object?", options: ["getClass()", "className()", "getName()", "toString()"], answer: "getClass()", attempted: false, selected: "" },
  { num: 32, question: "Which method returns canonical name of class?", options: ["getCanonicalName()", "getName()", "className()", "getSimpleName()"], answer: "getCanonicalName()", attempted: false, selected: "" },
  { num: 33, question: "Which method returns simple name of class?", options: ["getSimpleName()", "getName()", "className()", "getCanonicalName()"], answer: "getSimpleName()", attempted: false, selected: "" },
  { num: 34, question: "Which method returns superclass of class?", options: ["getSuperclass()", "getParent()", "superClass()", "parentClass()"], answer: "getSuperclass()", attempted: false, selected: "" },
  { num: 35, question: "Which method checks if object is instance of class?", options: ["instanceof", "isInstance()", "checkInstance()", "typeOf()"], answer: "instanceof", attempted: false, selected: "" },
  { num: 36, question: "Which class allows property change listener?", options: ["PropertyChangeSupport", "PropertyListener", "Observable", "ChangeSupport"], answer: "PropertyChangeSupport", attempted: false, selected: "" },
  { num: 37, question: "Which method fires property change event?", options: ["firePropertyChange()", "notifyChange()", "fireChange()", "triggerChange()"], answer: "firePropertyChange()", attempted: false, selected: "" },
  { num: 38, question: "Which interface allows object cloning?", options: ["Cloneable", "Serializable", "Copiable", "Duplicable"], answer: "Cloneable", attempted: false, selected: "" },
  { num: 39, question: "Which method in Object clones object?", options: ["clone()", "copy()", "duplicate()", "replicate()"], answer: "clone()", attempted: false, selected: "" },
  { num: 40, question: "Which interface allows object serialization?", options: ["Serializable", "Cloneable", "Externalizable", "Persistable"], answer: "Serializable", attempted: false, selected: "" },
  { num: 41, question: "Which class writes objects to file?", options: ["ObjectOutputStream", "ObjectWriter", "FileWriter", "ObjectStream"], answer: "ObjectOutputStream", attempted: false, selected: "" },
  { num: 42, question: "Which class reads objects from file?", options: ["ObjectInputStream", "ObjectReader", "FileReader", "ObjectStream"], answer: "ObjectInputStream", attempted: false, selected: "" },
  { num: 43, question: "Which method returns character array from string?", options: ["toCharArray()", "getChars()", "charArray()", "extractChars()"], answer: "toCharArray()", attempted: false, selected: "" },
  { num: 44, question: "Which method copies string characters to array?", options: ["getChars()", "toCharArray()", "copyChars()", "extractChars()"], answer: "getChars()", attempted: false, selected: "" },
  { num: 45, question: "Which class provides regular expressions?", options: ["Pattern", "Matcher", "Regex", "Expression"], answer: "Pattern", attempted: false, selected: "" },
  { num: 46, question: "Which class matches regex on string?", options: ["Matcher", "Pattern", "RegexMatcher", "Expression"], answer: "Matcher", attempted: false, selected: "" },
  { num: 47, question: "Which method checks if string matches regex?", options: ["matches()", "match()", "check()", "verify()"], answer: "matches()", attempted: false, selected: "" },
  { num: 48, question: "Which method splits string by regex?", options: ["split()", "divide()", "tokenize()", "cut()"], answer: "split()", attempted: false, selected: "" },
  { num: 49, question: "Which method replaces substring in string?", options: ["replace()", "replaceAll()", "substitute()", "update()"], answer: "replace()", attempted: false, selected: "" },
  { num: 50, question: "Which method replaces all regex matches?", options: ["replaceAll()", "replace()", "replaceFirst()", "updateAll()"], answer: "replaceAll()", attempted: false, selected: "" }
];






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
