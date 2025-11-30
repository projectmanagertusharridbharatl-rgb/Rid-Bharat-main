const questions = 
 [
  { num: 1, question: "Which memory area stores class-level variables and methods?", options: ["Heap", "Stack", "Method Area", "PC Register"], answer: "Method Area", attempted: false, selected: "" },
  { num: 2, question: "Which type of class loader loads classes from JDK libraries?", options: ["Bootstrap ClassLoader", "System ClassLoader", "Extension ClassLoader", "Custom ClassLoader"], answer: "Bootstrap ClassLoader", attempted: false, selected: "" },
  { num: 3, question: "Which garbage collection algorithm is based on generations?", options: ["Mark and Sweep", "Generational GC", "Reference Counting", "Copying GC"], answer: "Generational GC", attempted: false, selected: "" },
  { num: 4, question: "Which annotation is used to suppress compiler warnings?", options: ["@SuppressWarnings", "@Deprecated", "@SafeVarargs", "@Override"], answer: "@SuppressWarnings", attempted: false, selected: "" },
  { num: 5, question: "Which Java class represents a thread-safe hash map?", options: ["HashMap", "Hashtable", "ConcurrentHashMap", "LinkedHashMap"], answer: "ConcurrentHashMap", attempted: false, selected: "" },
  { num: 6, question: "Which design pattern restricts instantiation to a single object?", options: ["Factory", "Singleton", "Builder", "Observer"], answer: "Singleton", attempted: false, selected: "" },
  { num: 7, question: "Which method in Object class is called by JVM before garbage collection?", options: ["finalize()", "destroy()", "cleanup()", "close()"], answer: "finalize()", attempted: false, selected: "" },
  { num: 8, question: "Which keyword ensures that updates to a variable are visible across threads?", options: ["final", "volatile", "synchronized", "static"], answer: "volatile", attempted: false, selected: "" },
  { num: 9, question: "Which of these collections is optimized for fast lookups?", options: ["ArrayList", "HashMap", "LinkedList", "TreeSet"], answer: "HashMap", attempted: false, selected: "" },
  { num: 10, question: "Which design pattern provides a unified interface to a set of interfaces?", options: ["Adapter", "Facade", "Decorator", "Proxy"], answer: "Facade", attempted: false, selected: "" },
  { num: 11, question: "Which Java feature allows immutable objects with builder-like initialization?", options: ["Records", "StringBuilder", "Enums", "Optional"], answer: "Records", attempted: false, selected: "" },
  { num: 12, question: "Which method is used to get the class name at runtime?", options: ["getClassName()", "getName()", "getClass().getName()", "className()"], answer: "getClass().getName()", attempted: false, selected: "" },
  { num: 13, question: "Which type of reference allows GC to reclaim object even if reference exists?", options: ["Strong Reference", "Soft Reference", "Weak Reference", "Phantom Reference"], answer: "Weak Reference", attempted: false, selected: "" },
  { num: 14, question: "Which ExecutorService method waits for all tasks to complete?", options: ["shutdown()", "shutdownNow()", "awaitTermination()", "invokeAll()"], answer: "awaitTermination()", attempted: false, selected: "" },
  { num: 15, question: "Which interface represents a computation that returns a result and may throw exception?", options: ["Runnable", "Callable", "Supplier", "Executor"], answer: "Callable", attempted: false, selected: "" },
  { num: 16, question: "Which method in ThreadPoolExecutor controls number of active threads?", options: ["setCorePoolSize()", "setMaxThreads()", "setActiveCount()", "setThreads()"], answer: "setCorePoolSize()", attempted: false, selected: "" },
  { num: 17, question: "Which pattern separates object creation from its representation?", options: ["Factory", "Builder", "Prototype", "Singleton"], answer: "Builder", attempted: false, selected: "" },
  { num: 18, question: "Which Java feature allows multiple inheritance of behavior but not state?", options: ["Interfaces", "Abstract Classes", "Enums", "Records"], answer: "Interfaces", attempted: false, selected: "" },
  { num: 19, question: "Which of these collections maintain insertion order?", options: ["HashMap", "LinkedHashMap", "TreeMap", "HashSet"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 20, question: "Which annotation marks a deprecated method or class?", options: ["@SuppressWarnings", "@Deprecated", "@Override", "@FunctionalInterface"], answer: "@Deprecated", attempted: false, selected: "" },
  { num: 21, question: "Which type of class loader is used to load classes from custom locations?", options: ["Bootstrap ClassLoader", "System ClassLoader", "Extension ClassLoader", "Custom ClassLoader"], answer: "Custom ClassLoader", attempted: false, selected: "" },
  { num: 22, question: "Which design pattern provides a surrogate or placeholder for another object?", options: ["Proxy", "Adapter", "Decorator", "Facade"], answer: "Proxy", attempted: false, selected: "" },
  { num: 23, question: "Which collection allows fast retrieval of elements in sorted order?", options: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"], answer: "TreeSet", attempted: false, selected: "" },
  { num: 24, question: "Which class allows serialization of object state to byte stream?", options: ["ObjectInputStream", "ObjectOutputStream", "FileOutputStream", "FileReader"], answer: "ObjectOutputStream", attempted: false, selected: "" },
  { num: 25, question: "Which Java 9 feature allows immutable collection creation?", options: ["List.of()", "Collections.unmodifiableList()", "Arrays.asList()", "Set.of()"], answer: "List.of()", attempted: false, selected: "" },
  { num: 26, question: "Which pattern defines a family of related objects without specifying concrete classes?", options: ["Abstract Factory", "Factory", "Builder", "Prototype"], answer: "Abstract Factory", attempted: false, selected: "" },
  { num: 27, question: "Which of these is not thread-safe?", options: ["Vector", "ArrayList", "Hashtable", "ConcurrentHashMap"], answer: "ArrayList", attempted: false, selected: "" },
  { num: 28, question: "Which class loader is parent of Extension ClassLoader?", options: ["Bootstrap ClassLoader", "System ClassLoader", "Custom ClassLoader", "None"], answer: "Bootstrap ClassLoader", attempted: false, selected: "" },
  { num: 29, question: "Which Java interface is used for observing changes in objects?", options: ["Observer", "Listener", "Callable", "Runnable"], answer: "Observer", attempted: false, selected: "" },
  { num: 30, question: "Which Java collection offers constant-time performance for get and put?", options: ["ArrayList", "HashMap", "LinkedList", "TreeMap"], answer: "HashMap", attempted: false, selected: "" },
  { num: 31, question: "Which method of ConcurrentHashMap avoids blocking for reads?", options: ["get()", "put()", "compute()", "replace()"], answer: "get()", attempted: false, selected: "" },
  { num: 32, question: "Which design pattern allows object cloning without coupling to concrete classes?", options: ["Prototype", "Builder", "Factory", "Singleton"], answer: "Prototype", attempted: false, selected: "" },
  { num: 33, question: "Which keyword ensures a class cannot be subclassed?", options: ["final", "abstract", "sealed", "private"], answer: "final", attempted: false, selected: "" },
  { num: 34, question: "Which JVM memory area stores primitive local variables?", options: ["Heap", "Stack", "Method Area", "Native Memory"], answer: "Stack", attempted: false, selected: "" },
  { num: 35, question: "Which interface is used to define natural ordering of objects?", options: ["Comparator", "Comparable", "Iterable", "Cloneable"], answer: "Comparable", attempted: false, selected: "" },
  { num: 36, question: "Which class provides atomic operations for integers?", options: ["AtomicInteger", "Integer", "AtomicLong", "IntegerBuffer"], answer: "AtomicInteger", attempted: false, selected: "" },
  { num: 37, question: "Which annotation enforces that an interface has exactly one abstract method?", options: ["@FunctionalInterface", "@Override", "@Deprecated", "@SafeVarargs"], answer: "@FunctionalInterface", attempted: false, selected: "" },
  { num: 38, question: "Which of these prevents a thread from being interrupted?", options: ["join()", "sleep()", "yield()", "Thread.currentThread().interrupt()"], answer: "yield()", attempted: false, selected: "" },
  { num: 39, question: "Which Java collection is most suitable for FIFO order?", options: ["ArrayList", "Stack", "Queue", "TreeSet"], answer: "Queue", attempted: false, selected: "" },
  { num: 40, question: "Which JVM option is used to enable verbose GC logging?", options: ["-verbose", "-Xloggc", "-XX:+PrintGC", "-Xms"], answer: "-Xloggc", attempted: false, selected: "" },
  { num: 41, question: "Which interface defines a comparison function for sorting?", options: ["Comparable", "Comparator", "Iterable", "Cloneable"], answer: "Comparator", attempted: false, selected: "" },
  { num: 42, question: "Which feature of Java supports multi-versioned JARs?", options: ["Modules", "Generics", "Records", "Optional"], answer: "Modules", attempted: false, selected: "" },
  { num: 43, question: "Which collection is backed by a hash table and allows null values?", options: ["HashMap", "Hashtable", "TreeMap", "ConcurrentHashMap"], answer: "HashMap", attempted: false, selected: "" },
  { num: 44, question: "Which method ensures atomic read-modify-write operation?", options: ["synchronized block", "AtomicInteger.incrementAndGet()", "volatile", "ReentrantLock"], answer: "AtomicInteger.incrementAndGet()", attempted: false, selected: "" },
  { num: 45, question: "Which class in java.util.concurrent manages a pool of threads?", options: ["ThreadPoolExecutor", "ExecutorService", "ForkJoinPool", "ScheduledThreadPool"], answer: "ThreadPoolExecutor", attempted: false, selected: "" },
  { num: 46, question: "Which type of reference is used to detect object reclamation after GC?", options: ["Soft Reference", "Weak Reference", "Phantom Reference", "Strong Reference"], answer: "Phantom Reference", attempted: false, selected: "" },
  { num: 47, question: "Which keyword in sealed class restricts which classes may extend it?", options: ["permits", "restricts", "extends", "sealed"], answer: "permits", attempted: false, selected: "" },
  { num: 48, question: "Which JVM memory area stores string literals?", options: ["Heap", "Stack", "String Pool", "Method Area"], answer: "String Pool", attempted: false, selected: "" },
  { num: 49, question: "Which method is used to atomically swap variables?", options: ["compareAndSwap()", "swap()", "exchange()", "replace()"], answer: "compareAndSwap()", attempted: false, selected: "" },
  { num: 50, question: "Which annotation indicates that a method parameter can never be null?", options: ["@NonNull", "@Nullable", "@NotNull", "@SafeVarargs"], answer: "@NonNull", attempted: false, selected: "" }
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
