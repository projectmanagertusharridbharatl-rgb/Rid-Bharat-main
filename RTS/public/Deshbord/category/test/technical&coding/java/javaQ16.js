const questions =[
  { num: 1, question: "Which method in String returns index of substring?", options: ["indexOf()", "search()", "find()", "locate()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 2, question: "Which interface represents a predicate with two inputs?", options: ["BiPredicate", "Predicate", "BiFunction", "Function"], answer: "BiPredicate", attempted: false, selected: "" },
  { num: 3, question: "Which method converts List to array?", options: ["toArray()", "asArray()", "arrayify()", "convert()"], answer: "toArray()", attempted: false, selected: "" },
  { num: 4, question: "Which method trims leading and trailing spaces in String?", options: ["trim()", "strip()", "clean()", "removeSpaces()"], answer: "trim()", attempted: false, selected: "" },
  { num: 5, question: "Which method in Collections reverses list elements?", options: ["reverse()", "rotate()", "shuffle()", "swap()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 6, question: "Which exception is thrown when accessing array index out of bounds?", options: ["ArrayIndexOutOfBoundsException", "IndexOutOfRangeException", "IllegalArgumentException", "RuntimeException"], answer: "ArrayIndexOutOfBoundsException", attempted: false, selected: "" },
  { num: 7, question: "Which method in Stream filters elements based on condition?", options: ["filter()", "map()", "distinct()", "limit()"], answer: "filter()", attempted: false, selected: "" },
  { num: 8, question: "Which annotation ensures method overrides superclass method?", options: ["@Override", "@Deprecated", "@FunctionalInterface", "@SuppressWarnings"], answer: "@Override", attempted: false, selected: "" },
  { num: 9, question: "Which interface allows lambda with one input and no return?", options: ["Consumer", "Function", "Supplier", "Predicate"], answer: "Consumer", attempted: false, selected: "" },
  { num: 10, question: "Which class is parent of all exception classes?", options: ["Throwable", "Exception", "Error", "RuntimeException"], answer: "Throwable", attempted: false, selected: "" },
  { num: 11, question: "Which method returns lowercase string?", options: ["toLowerCase()", "toLower()", "lower()", "convertToLower()"], answer: "toLowerCase()", attempted: false, selected: "" },
  { num: 12, question: "Which interface represents supplier of results with no input?", options: ["Supplier", "Consumer", "Function", "Predicate"], answer: "Supplier", attempted: false, selected: "" },
  { num: 13, question: "Which method in Arrays copies array elements to new array?", options: ["copyOf()", "clone()", "duplicate()", "replicate()"], answer: "copyOf()", attempted: false, selected: "" },
  { num: 14, question: "Which method checks if string starts with prefix?", options: ["startsWith()", "beginsWith()", "prefixCheck()", "matchPrefix()"], answer: "startsWith()", attempted: false, selected: "" },
  { num: 15, question: "Which method checks if string ends with suffix?", options: ["endsWith()", "suffixCheck()", "finishWith()", "matchSuffix()"], answer: "endsWith()", attempted: false, selected: "" },
  { num: 16, question: "Which interface allows two inputs and boolean output?", options: ["BiPredicate", "BiFunction", "Predicate", "Consumer"], answer: "BiPredicate", attempted: false, selected: "" },
  { num: 17, question: "Which method in StringBuilder inserts text at index?", options: ["insert()", "append()", "add()", "put()"], answer: "insert()", attempted: false, selected: "" },
  { num: 18, question: "Which method in StringBuilder deletes characters between indices?", options: ["delete()", "remove()", "erase()", "cut()"], answer: "delete()", attempted: false, selected: "" },
  { num: 19, question: "Which method in Stream skips first n elements?", options: ["skip()", "limit()", "filter()", "map()"], answer: "skip()", attempted: false, selected: "" },
  { num: 20, question: "Which annotation marks that method is functional interface?", options: ["@FunctionalInterface", "@Override", "@Deprecated", "@SuppressWarnings"], answer: "@FunctionalInterface", attempted: false, selected: "" },
  { num: 21, question: "Which method in Arrays sorts array?", options: ["sort()", "order()", "arrange()", "reorder()"], answer: "sort()", attempted: false, selected: "" },
  { num: 22, question: "Which method returns character at index from String?", options: ["charAt()", "getChar()", "character()", "charOf()"], answer: "charAt()", attempted: false, selected: "" },
  { num: 23, question: "Which interface allows input and output with function?", options: ["Function", "Consumer", "Supplier", "Predicate"], answer: "Function", attempted: false, selected: "" },
  { num: 24, question: "Which method removes first element from Deque?", options: ["removeFirst()", "pollFirst()", "getFirst()", "peekFirst()"], answer: "removeFirst()", attempted: false, selected: "" },
  { num: 25, question: "Which method returns last element from Deque?", options: ["removeLast()", "pollLast()", "getLast()", "peekLast()"], answer: "removeLast()", attempted: false, selected: "" },
  { num: 26, question: "Which method in Stream finds first element?", options: ["findFirst()", "first()", "getFirst()", "head()"], answer: "findFirst()", attempted: false, selected: "" },
  { num: 27, question: "Which method returns Optional if value present in Stream?", options: ["findAny()", "getAny()", "getFirst()", "findFirst()"], answer: "findAny()", attempted: false, selected: "" },
  { num: 28, question: "Which method converts string to char array?", options: ["toCharArray()", "chars()", "convertToChars()", "getChars()"], answer: "toCharArray()", attempted: false, selected: "" },
  { num: 29, question: "Which method in Collections shuffles elements?", options: ["shuffle()", "randomize()", "swap()", "rotate()"], answer: "shuffle()", attempted: false, selected: "" },
  { num: 30, question: "Which method joins strings in StringJoiner?", options: ["add()", "append()", "concat()", "merge()"], answer: "add()", attempted: false, selected: "" },
  { num: 31, question: "Which method converts Stream to array?", options: ["toArray()", "collect()", "map()", "flatMap()"], answer: "toArray()", attempted: false, selected: "" },
  { num: 32, question: "Which method in Comparator compares in reversed order?", options: ["reversed()", "reverse()", "compare()", "thenComparing()"], answer: "reversed()", attempted: false, selected: "" },
  { num: 33, question: "Which method returns string representation of object?", options: ["toString()", "asString()", "stringify()", "print()"], answer: "toString()", attempted: false, selected: "" },
  { num: 34, question: "Which method returns stream of array elements?", options: ["Arrays.stream()", "Stream.of()", "Stream.fromArray()", "arrayStream()"], answer: "Arrays.stream()", attempted: false, selected: "" },
  { num: 35, question: "Which interface represents boolean function of input?", options: ["Predicate", "Function", "Consumer", "Supplier"], answer: "Predicate", attempted: false, selected: "" },
  { num: 36, question: "Which method concatenates two StringBuilder objects?", options: ["append()", "concat()", "merge()", "add()"], answer: "append()", attempted: false, selected: "" },
  { num: 37, question: "Which method in Stream removes duplicate elements?", options: ["distinct()", "unique()", "filter()", "map()"], answer: "distinct()", attempted: false, selected: "" },
  { num: 38, question: "Which method in Stream limits elements to n?", options: ["limit()", "skip()", "map()", "filter()"], answer: "limit()", attempted: false, selected: "" },
  { num: 39, question: "Which method returns Map values as Collection?", options: ["values()", "entries()", "keys()", "toCollection()"], answer: "values()", attempted: false, selected: "" },
  { num: 40, question: "Which method returns entry set of Map?", options: ["entrySet()", "keySet()", "values()", "mapSet()"], answer: "entrySet()", attempted: false, selected: "" },
  { num: 41, question: "Which method adds element at end of Deque?", options: ["addLast()", "addFirst()", "offerLast()", "offerFirst()"], answer: "addLast()", attempted: false, selected: "" },
  { num: 42, question: "Which method adds element at front of Deque?", options: ["addFirst()", "addLast()", "offerFirst()", "offerLast()"], answer: "addFirst()", attempted: false, selected: "" },
  { num: 43, question: "Which method in Optional returns default value if empty?", options: ["orElse()", "orElseGet()", "get()", "ifPresent()"], answer: "orElse()", attempted: false, selected: "" },
  { num: 44, question: "Which method in Optional returns value or throws exception?", options: ["orElseThrow()", "get()", "orElse()", "orElseGet()"], answer: "orElseThrow()", attempted: false, selected: "" },
  { num: 45, question: "Which annotation indicates unchecked warnings are safe?", options: ["@SafeVarargs", "@SuppressWarnings", "@Deprecated", "@Override"], answer: "@SafeVarargs", attempted: false, selected: "" },
  { num: 46, question: "Which method returns sequential Stream from Collection?", options: ["stream()", "parallelStream()", "collect()", "map()"], answer: "stream()", attempted: false, selected: "" },
  { num: 47, question: "Which method returns parallel Stream from Collection?", options: ["parallelStream()", "stream()", "collect()", "map()"], answer: "parallelStream()", attempted: false, selected: "" },
  { num: 48, question: "Which method in String replaces characters with another?", options: ["replace()", "substitute()", "swap()", "change()"], answer: "replace()", attempted: false, selected: "" },
  { num: 49, question: "Which method in String replaces all regex matches?", options: ["replaceAll()", "replace()", "replaceFirst()", "substituteAll()"], answer: "replaceAll()", attempted: false, selected: "" },
  { num: 50, question: "Which annotation indicates element should not be serialized?", options: ["@Transient", "@Deprecated", "@Override", "@SuppressWarnings"], answer: "@Transient", attempted: false, selected: "" }
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
