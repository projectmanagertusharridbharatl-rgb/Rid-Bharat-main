const questions =[
  { num: 1, question: "Which method returns an Optional containing the value if present?", options: ["Optional.of()", "Optional.get()", "Optional.isPresent()", "Optional.empty()"], answer: "Optional.of()", attempted: false, selected: "" },
  { num: 2, question: "Which Stream operation is intermediate and lazy?", options: ["map()", "forEach()", "collect()", "reduce()"], answer: "map()", attempted: false, selected: "" },
  { num: 3, question: "Which Java 11 feature allows multi-line string literals?", options: ["Text Blocks", "String.join()", "StringBuilder", "String.format()"], answer: "Text Blocks", attempted: false, selected: "" },
  { num: 4, question: "Which interface represents a function that takes an argument and returns a result?", options: ["Predicate", "Function", "Consumer", "Supplier"], answer: "Function", attempted: false, selected: "" },
  { num: 5, question: "Which collection is thread-safe but not blocking?", options: ["ConcurrentHashMap", "BlockingQueue", "Vector", "ArrayList"], answer: "ConcurrentHashMap", attempted: false, selected: "" },
  { num: 6, question: "Which Stream operation produces a single result?", options: ["reduce()", "filter()", "map()", "peek()"], answer: "reduce()", attempted: false, selected: "" },
  { num: 7, question: "Which method is used to load a class at runtime using Reflection?", options: ["Class.forName()", "ClassLoader.load()", "Class.getClass()", "Class.loadClass()"], answer: "Class.forName()", attempted: false, selected: "" },
  { num: 8, question: "Which method removes null elements from a Stream?", options: ["filter(Objects::nonNull)", "map()", "peek()", "collect()"], answer: "filter(Objects::nonNull)", attempted: false, selected: "" },
  { num: 9, question: "Which method safely retrieves a value from Optional or returns default?", options: ["orElse()", "get()", "isPresent()", "ifPresent()"], answer: "orElse()", attempted: false, selected: "" },
  { num: 10, question: "Which Java collection is suitable for producer-consumer problem?", options: ["BlockingQueue", "ArrayList", "HashMap", "LinkedList"], answer: "BlockingQueue", attempted: false, selected: "" },
  { num: 11, question: "Which Stream operation preserves order of elements?", options: ["sorted()", "unordered()", "parallel()", "map()"], answer: "sorted()", attempted: false, selected: "" },
  { num: 12, question: "Which class provides memory-efficient immutable lists?", options: ["List.of()", "ArrayList", "LinkedList", "Vector"], answer: "List.of()", attempted: false, selected: "" },
  { num: 13, question: "Which keyword prevents memory leak in inner classes by not holding reference to outer class?", options: ["static", "final", "transient", "volatile"], answer: "static", attempted: false, selected: "" },
  { num: 14, question: "Which interface is used for consuming input without returning result?", options: ["Consumer", "Function", "Supplier", "Predicate"], answer: "Consumer", attempted: false, selected: "" },
  { num: 15, question: "Which method in ExecutorService submits a task and returns Future?", options: ["submit()", "execute()", "invokeAll()", "invokeAny()"], answer: "submit()", attempted: false, selected: "" },
  { num: 16, question: "Which class represents immutable key-value pairs?", options: ["Map.Entry", "HashMap", "Hashtable", "LinkedHashMap"], answer: "Map.Entry", attempted: false, selected: "" },
  { num: 17, question: "Which Java 11 method trims all whitespaces including non-breaking spaces?", options: ["strip()", "trim()", "stripLeading()", "stripTrailing()"], answer: "strip()", attempted: false, selected: "" },
  { num: 18, question: "Which exception occurs when serialVersionUID mismatches during deserialization?", options: ["InvalidClassException", "ClassNotFoundException", "IOException", "OptionalException"], answer: "InvalidClassException", attempted: false, selected: "" },
  { num: 19, question: "Which type of stream allows parallel processing of data?", options: ["parallelStream()", "sequentialStream()", "filterStream()", "mapStream()"], answer: "parallelStream()", attempted: false, selected: "" },
  { num: 20, question: "Which annotation marks a field to be ignored during serialization?", options: ["@Transient", "@Deprecated", "@NonNull", "@SafeVarargs"], answer: "@Transient", attempted: false, selected: "" },
  { num: 21, question: "Which method checks if Optional contains a value?", options: ["isPresent()", "get()", "orElse()", "ifPresent()"], answer: "isPresent()", attempted: false, selected: "" },
  { num: 22, question: "Which interface is used to test boolean conditions?", options: ["Predicate", "Function", "Consumer", "Supplier"], answer: "Predicate", attempted: false, selected: "" },
  { num: 23, question: "Which Java 11 method returns lines from a file as Stream<String>?", options: ["Files.lines()", "BufferedReader.readLines()", "FileReader.readLines()", "Scanner.readLines()"], answer: "Files.lines()", attempted: false, selected: "" },
  { num: 24, question: "Which method combines multiple Optionals into one?", options: ["flatMap()", "map()", "filter()", "orElse()"], answer: "flatMap()", attempted: false, selected: "" },
  { num: 25, question: "Which type of reference avoids memory leaks in caches?", options: ["WeakReference", "StrongReference", "SoftReference", "PhantomReference"], answer: "SoftReference", attempted: false, selected: "" },
  { num: 26, question: "Which method in Stream flattens nested collections?", options: ["flatMap()", "map()", "peek()", "forEach()"], answer: "flatMap()", attempted: false, selected: "" },
  { num: 27, question: "Which feature allows modules to define dependencies explicitly?", options: ["Module-info.java", "package-info.java", "module.xml", "module.properties"], answer: "Module-info.java", attempted: false, selected: "" },
  { num: 28, question: "Which exception occurs if thread waits indefinitely on a lock?", options: ["Deadlock", "InterruptedException", "TimeoutException", "IllegalMonitorStateException"], answer: "Deadlock", attempted: false, selected: "" },
  { num: 29, question: "Which Stream method processes elements in encounter order for parallel streams?", options: ["forEachOrdered()", "forEach()", "map()", "peek()"], answer: "forEachOrdered()", attempted: false, selected: "" },
  { num: 30, question: "Which functional interface has a single method returning a boolean?", options: ["Predicate", "Consumer", "Function", "Supplier"], answer: "Predicate", attempted: false, selected: "" },
  { num: 31, question: "Which method returns a modifiable copy of an immutable collection?", options: ["new ArrayList<>(List.of(...))", "Collections.unmodifiableList()", "Arrays.asList()", "List.copyOf()"], answer: "new ArrayList<>(List.of(...))", attempted: false, selected: "" },
  { num: 32, question: "Which annotation documents that method accepts only non-null parameters?", options: ["@NonNull", "@Nullable", "@NotNull", "@SafeVarargs"], answer: "@NonNull", attempted: false, selected: "" },
  { num: 33, question: "Which type of memory leak occurs due to unused static references?", options: ["Static Memory Leak", "Stack Overflow", "Heap Leak", "Native Leak"], answer: "Static Memory Leak", attempted: false, selected: "" },
  { num: 34, question: "Which method converts Stream to List?", options: ["collect(Collectors.toList())", "toList()", "map()", "flatMap()"], answer: "collect(Collectors.toList())", attempted: false, selected: "" },
  { num: 35, question: "Which class ensures atomic updates on reference objects?", options: ["AtomicReference", "AtomicInteger", "AtomicLong", "AtomicBoolean"], answer: "AtomicReference", attempted: false, selected: "" },
  { num: 36, question: "Which Optional method executes a lambda if value is present?", options: ["ifPresent()", "isPresent()", "get()", "orElse()"], answer: "ifPresent()", attempted: false, selected: "" },
  { num: 37, question: "Which method returns first element from Stream if available?", options: ["findFirst()", "findAny()", "filter()", "map()"], answer: "findFirst()", attempted: false, selected: "" },
  { num: 38, question: "Which annotation documents an interface intended for functional programming?", options: ["@FunctionalInterface", "@Deprecated", "@SafeVarargs", "@Override"], answer: "@FunctionalInterface", attempted: false, selected: "" },
  { num: 39, question: "Which collection allows null keys and values?", options: ["HashMap", "Hashtable", "ConcurrentHashMap", "TreeMap"], answer: "HashMap", attempted: false, selected: "" },
  { num: 40, question: "Which method in ObjectInputStream reads objects from byte stream?", options: ["readObject()", "read()", "readLine()", "readBytes()"], answer: "readObject()", attempted: false, selected: "" },
  { num: 41, question: "Which Stream operation is terminal and produces side effects?", options: ["forEach()", "map()", "filter()", "peek()"], answer: "forEach()", attempted: false, selected: "" },
  { num: 42, question: "Which method avoids null checks by returning Optional.empty()?", options: ["ofNullable()", "of()", "get()", "orElse()"], answer: "ofNullable()", attempted: false, selected: "" },
  { num: 43, question: "Which class in java.util.concurrent supports delayed scheduling?", options: ["ScheduledThreadPoolExecutor", "ThreadPoolExecutor", "ExecutorService", "ForkJoinPool"], answer: "ScheduledThreadPoolExecutor", attempted: false, selected: "" },
  { num: 44, question: "Which method checks equality of two Optionals?", options: ["equals()", "==", "compare()", "compareTo()"], answer: "equals()", attempted: false, selected: "" },
  { num: 45, question: "Which JVM option enables Flight Recorder for performance monitoring?", options: ["-XX:StartFlightRecording", "-Xloggc", "-verbose", "-Xms"], answer: "-XX:StartFlightRecording", attempted: false, selected: "" },
  { num: 46, question: "Which Stream method skips first n elements?", options: ["skip(n)", "limit(n)", "map()", "filter()"], answer: "skip(n)", attempted: false, selected: "" },
  { num: 47, question: "Which feature prevents modification of collections in Java 10+?", options: ["unmodifiableList()", "List.of()", "Collections.unmodifiableList()", "Arrays.asList()"], answer: "List.of()", attempted: false, selected: "" },
  { num: 48, question: "Which annotation marks a method to accept varargs safely?", options: ["@SafeVarargs", "@FunctionalInterface", "@NonNull", "@Override"], answer: "@SafeVarargs", attempted: false, selected: "" },
  { num: 49, question: "Which method in Optional maps value to another Optional?", options: ["flatMap()", "map()", "orElse()", "filter()"], answer: "flatMap()", attempted: false, selected: "" },
  { num: 50, question: "Which interface allows iteration with lambda expressions?", options: ["Iterable", "Iterator", "Collection", "Stream"], answer: "Iterable", attempted: false, selected: "" }
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
