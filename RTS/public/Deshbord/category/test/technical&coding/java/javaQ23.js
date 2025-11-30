const questions=
 [
  { num: 1, question: "Which keyword is used for inner classes?", options: ["class", "inner", "nested", "private"], answer: "nested", attempted: false, selected: "" },
  { num: 2, question: "Which type of nested class is static?", options: ["Static Nested Class", "Inner Class", "Anonymous Class", "Local Class"], answer: "Static Nested Class", attempted: false, selected: "" },
  { num: 3, question: "Which class is anonymous?", options: ["Anonymous Class", "Inner Class", "Static Nested Class", "Top-level Class"], answer: "Anonymous Class", attempted: false, selected: "" },
  { num: 4, question: "Which keyword is used for interface variables?", options: ["static", "final", "const", "both static and final"], answer: "both static and final", attempted: false, selected: "" },
  { num: 5, question: "Which interface provides collection iteration?", options: ["Iterable", "Collection", "List", "Set"], answer: "Iterable", attempted: false, selected: "" },
  { num: 6, question: "Which method returns iterator from collection?", options: ["iterator()", "getIterator()", "next()", "allOfThese"], answer: "iterator()", attempted: false, selected: "" },
  { num: 7, question: "Which method checks if collection has more elements?", options: ["hasNext()", "next()", "contains()", "exists()"], answer: "hasNext()", attempted: false, selected: "" },
  { num: 8, question: "Which method returns next element in iterator?", options: ["next()", "get()", "retrieve()", "element()"], answer: "next()", attempted: false, selected: "" },
  { num: 9, question: "Which interface allows list operations?", options: ["List", "Set", "Map", "Queue"], answer: "List", attempted: false, selected: "" },
  { num: 10, question: "Which interface does HashSet implement?", options: ["Set", "List", "Map", "Queue"], answer: "Set", attempted: false, selected: "" },
  { num: 11, question: "Which interface does LinkedHashMap implement?", options: ["Map", "Set", "List", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 12, question: "Which method adds element to list?", options: ["add()", "insert()", "put()", "append()"], answer: "add()", attempted: false, selected: "" },
  { num: 13, question: "Which method removes element from list?", options: ["remove()", "delete()", "discard()", "allOfThese"], answer: "remove()", attempted: false, selected: "" },
  { num: 14, question: "Which method returns size of collection?", options: ["size()", "length()", "count()", "allOfThese"], answer: "size()", attempted: false, selected: "" },
  { num: 15, question: "Which class implements priority queue?", options: ["PriorityQueue", "Queue", "LinkedList", "ArrayList"], answer: "PriorityQueue", attempted: false, selected: "" },
  { num: 16, question: "Which method inserts element in queue?", options: ["offer()", "add()", "enqueue()", "put()"], answer: "offer()", attempted: false, selected: "" },
  { num: 17, question: "Which method retrieves element from queue without removing?", options: ["peek()", "poll()", "element()", "get()"], answer: "peek()", attempted: false, selected: "" },
  { num: 18, question: "Which method retrieves and removes element from queue?", options: ["poll()", "peek()", "remove()", "dequeue()"], answer: "poll()", attempted: false, selected: "" },
  { num: 19, question: "Which interface is implemented by Stack?", options: ["Deque", "List", "Queue", "Set"], answer: "Deque", attempted: false, selected: "" },
  { num: 20, question: "Which method adds element to stack?", options: ["push()", "add()", "offer()", "enqueue()"], answer: "push()", attempted: false, selected: "" },
  { num: 21, question: "Which method removes element from stack?", options: ["pop()", "remove()", "poll()", "dequeue()"], answer: "pop()", attempted: false, selected: "" },
  { num: 22, question: "Which interface supports map operations?", options: ["Map", "Set", "List", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 23, question: "Which method puts key-value pair in map?", options: ["put()", "add()", "insert()", "append()"], answer: "put()", attempted: false, selected: "" },
  { num: 24, question: "Which method retrieves value by key from map?", options: ["get()", "find()", "retrieve()", "lookup()"], answer: "get()", attempted: false, selected: "" },
  { num: 25, question: "Which method removes key-value pair from map?", options: ["remove()", "delete()", "discard()", "allOfThese"], answer: "remove()", attempted: false, selected: "" },
  { num: 26, question: "Which interface is implemented by HashMap?", options: ["Map", "Set", "List", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 27, question: "Which interface is implemented by TreeMap?", options: ["Map", "Set", "List", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 28, question: "Which interface is implemented by LinkedHashSet?", options: ["Set", "List", "Map", "Queue"], answer: "Set", attempted: false, selected: "" },
  { num: 29, question: "Which method checks if key exists in map?", options: ["containsKey()", "contains()", "existsKey()", "hasKey()"], answer: "containsKey()", attempted: false, selected: "" },
  { num: 30, question: "Which method checks if value exists in map?", options: ["containsValue()", "hasValue()", "existsValue()", "checkValue()"], answer: "containsValue()", attempted: false, selected: "" },
  { num: 31, question: "Which class implements random-access list?", options: ["ArrayList", "LinkedList", "Vector", "Stack"], answer: "ArrayList", attempted: false, selected: "" },
  { num: 32, question: "Which class implements synchronized list?", options: ["Vector", "ArrayList", "LinkedList", "Stack"], answer: "Vector", attempted: false, selected: "" },
  { num: 33, question: "Which method converts collection to array?", options: ["toArray()", "asArray()", "array()", "getArray()"], answer: "toArray()", attempted: false, selected: "" },
  { num: 34, question: "Which class is used for date and time in Java 8?", options: ["LocalDate", "Date", "Calendar", "Time"], answer: "LocalDate", attempted: false, selected: "" },
  { num: 35, question: "Which class stores date and time?", options: ["LocalDateTime", "Date", "Calendar", "All of these"], answer: "LocalDateTime", attempted: false, selected: "" },
  { num: 36, question: "Which method returns current time in millis?", options: ["System.currentTimeMillis()", "Time.now()", "Clock.getTime()", "Date.getTime()"], answer: "System.currentTimeMillis()", attempted: false, selected: "" },
  { num: 37, question: "Which interface is implemented by Comparator?", options: ["Comparator", "Comparable", "Collection", "Iterable"], answer: "Comparator", attempted: false, selected: "" },
  { num: 38, question: "Which method compares two objects in Comparator?", options: ["compare()", "compareTo()", "equals()", "match()"], answer: "compare()", attempted: false, selected: "" },
  { num: 39, question: "Which interface is implemented by Comparable?", options: ["Comparable", "Comparator", "Collection", "Iterable"], answer: "Comparable", attempted: false, selected: "" },
  { num: 40, question: "Which method compares objects in Comparable?", options: ["compareTo()", "compare()", "equals()", "match()"], answer: "compareTo()", attempted: false, selected: "" },
  { num: 41, question: "Which class is used for regular expressions?", options: ["Pattern", "Matcher", "Regex", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 42, question: "Which method compiles regex pattern?", options: ["compile()", "pattern()", "create()", "build()"], answer: "compile()", attempted: false, selected: "" },
  { num: 43, question: "Which method matches regex with string?", options: ["matcher()", "matches()", "check()", "verify()"], answer: "matcher()", attempted: false, selected: "" },
  { num: 44, question: "Which method returns true if regex matches string?", options: ["matches()", "find()", "check()", "verify()"], answer: "matches()", attempted: false, selected: "" },
  { num: 45, question: "Which class replaces characters using regex?", options: ["Matcher", "Pattern", "String", "StringBuilder"], answer: "Matcher", attempted: false, selected: "" },
  { num: 46, question: "Which method finds regex pattern in string?", options: ["find()", "matches()", "search()", "look()"], answer: "find()", attempted: false, selected: "" },
  { num: 47, question: "Which class is used for properties file?", options: ["Properties", "PropertyFile", "Config", "All of these"], answer: "Properties", attempted: false, selected: "" },
  { num: 48, question: "Which method loads properties from file?", options: ["load()", "read()", "open()", "get()"], answer: "load()", attempted: false, selected: "" },
  { num: 49, question: "Which method retrieves property value?", options: ["getProperty()", "get()", "value()", "read()"], answer: "getProperty()", attempted: false, selected: "" },
  { num: 50, question: "Which method sets property value?", options: ["setProperty()", "put()", "add()", "append()"], answer: "setProperty()", attempted: false, selected: "" }
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
