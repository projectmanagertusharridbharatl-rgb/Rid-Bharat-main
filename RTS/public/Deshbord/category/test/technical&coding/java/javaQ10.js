const questions=[
  { num: 1, question: "Which JVM memory area stores class metadata?", options: ["Metaspace", "Heap", "Stack", "PermGen"], answer: "Metaspace", attempted: false, selected: "" },
  { num: 2, question: "Which type of reference allows GC to reclaim object eagerly?", options: ["PhantomReference", "WeakReference", "SoftReference", "StrongReference"], answer: "PhantomReference", attempted: false, selected: "" },
  { num: 3, question: "Which exception is thrown when ClassCast fails at runtime?", options: ["ClassCastException", "IllegalArgumentException", "TypeMismatchException", "RuntimeException"], answer: "ClassCastException", attempted: false, selected: "" },
  { num: 4, question: "Which method is called when an object is garbage collected?", options: ["finalize()", "destroy()", "cleanup()", "delete()"], answer: "finalize()", attempted: false, selected: "" },
  { num: 5, question: "Which classloader loads classes from JDK internal classes?", options: ["Bootstrap ClassLoader", "System ClassLoader", "Extension ClassLoader", "Custom ClassLoader"], answer: "Bootstrap ClassLoader", attempted: false, selected: "" },
  { num: 6, question: "Which method in ThreadPoolExecutor prevents new tasks from being submitted?", options: ["shutdown()", "shutdownNow()", "awaitTermination()", "terminate()"], answer: "shutdown()", attempted: false, selected: "" },
  { num: 7, question: "Which keyword ensures a variable is visible across threads?", options: ["volatile", "synchronized", "transient", "final"], answer: "volatile", attempted: false, selected: "" },
  { num: 8, question: "Which type of exception is not required to be caught or declared?", options: ["Unchecked Exception", "Checked Exception", "IOException", "SQLException"], answer: "Unchecked Exception", attempted: false, selected: "" },
  { num: 9, question: "Which method throws InterruptedException?", options: ["Thread.sleep()", "System.gc()", "Thread.yield()", "Object.wait()"], answer: "Object.wait()", attempted: false, selected: "" },
  { num: 10, question: "Which collection prevents concurrent modification exceptions?", options: ["CopyOnWriteArrayList", "ArrayList", "LinkedList", "HashSet"], answer: "CopyOnWriteArrayList", attempted: false, selected: "" },
  { num: 11, question: "Which type of nested class cannot access instance members of outer class?", options: ["Static Nested Class", "Inner Class", "Anonymous Class", "Local Class"], answer: "Static Nested Class", attempted: false, selected: "" },
  { num: 12, question: "Which annotation ensures a method overrides parent method?", options: ["@Override", "@Deprecated", "@FunctionalInterface", "@SafeVarargs"], answer: "@Override", attempted: false, selected: "" },
  { num: 13, question: "Which method in Runtime executes system commands?", options: ["exec()", "run()", "start()", "system()"], answer: "exec()", attempted: false, selected: "" },
  { num: 14, question: "Which class ensures thread-safe increment of integers?", options: ["AtomicInteger", "Integer", "LongAdder", "AtomicLong"], answer: "AtomicInteger", attempted: false, selected: "" },
  { num: 15, question: "Which keyword prevents method overriding but allows overloading?", options: ["final", "static", "abstract", "synchronized"], answer: "final", attempted: false, selected: "" },
  { num: 16, question: "Which collection is designed for high concurrency and non-blocking reads?", options: ["ConcurrentHashMap", "HashMap", "TreeMap", "Hashtable"], answer: "ConcurrentHashMap", attempted: false, selected: "" },
  { num: 17, question: "Which type of exception occurs when null is used in equals method?", options: ["NullPointerException", "IllegalArgumentException", "ClassCastException", "ArithmeticException"], answer: "NullPointerException", attempted: false, selected: "" },
  { num: 18, question: "Which Java 8 feature allows method reference syntax?", options: ["Lambda Expressions", "Streams", "Optional", "Annotations"], answer: "Lambda Expressions", attempted: false, selected: "" },
  { num: 19, question: "Which method throws ConcurrentModificationException?", options: ["Iterator.next()", "List.get()", "Set.add()", "Map.put()"], answer: "Iterator.next()", attempted: false, selected: "" },
  { num: 20, question: "Which annotation processes code at compile time?", options: ["Annotation Processing Tool", "@Override", "@Deprecated", "@FunctionalInterface"], answer: "Annotation Processing Tool", attempted: false, selected: "" },
  { num: 21, question: "Which collection allows null values but not null keys?", options: ["Hashtable", "HashMap", "ConcurrentHashMap", "TreeMap"], answer: "ConcurrentHashMap", attempted: false, selected: "" },
  { num: 22, question: "Which method is used to start daemon thread?", options: ["setDaemon(true) + start()", "start()", "run()", "execute()"], answer: "setDaemon(true) + start()", attempted: false, selected: "" },
  { num: 23, question: "Which method in StringBuilder deletes characters?", options: ["delete()", "remove()", "cut()", "erase()"], answer: "delete()", attempted: false, selected: "" },
  { num: 24, question: "Which JVM area stores local variables of method calls?", options: ["Stack", "Heap", "Metaspace", "Code Cache"], answer: "Stack", attempted: false, selected: "" },
  { num: 25, question: "Which exception occurs on invalid format in Scanner?", options: ["InputMismatchException", "NumberFormatException", "ParseException", "IOException"], answer: "InputMismatchException", attempted: false, selected: "" },
  { num: 26, question: "Which type of lock allows multiple readers but one writer?", options: ["ReadWriteLock", "ReentrantLock", "ReentrantReadLock", "Semaphore"], answer: "ReadWriteLock", attempted: false, selected: "" },
  { num: 27, question: "Which JVM phase converts bytecode to native code?", options: ["Just-In-Time Compilation", "Class Loading", "Linking", "Verification"], answer: "Just-In-Time Compilation", attempted: false, selected: "" },
  { num: 28, question: "Which generic type declaration is correct?", options: ["List<String>", "List<int>", "List<?>", "List<Object>"], answer: "List<String>", attempted: false, selected: "" },
  { num: 29, question: "Which exception occurs if interrupt() is called on sleeping thread?", options: ["InterruptedException", "IllegalThreadStateException", "TimeoutException", "RuntimeException"], answer: "InterruptedException", attempted: false, selected: "" },
  { num: 30, question: "Which method in ClassLoader loads class bytes manually?", options: ["defineClass()", "loadClass()", "findClass()", "resolveClass()"], answer: "defineClass()", attempted: false, selected: "" },
  { num: 31, question: "Which keyword ensures compile-time type safety in generics?", options: ["extends", "super", "<?>", "T"], answer: "T", attempted: false, selected: "" },
  { num: 32, question: "Which collection is ideal for LRU cache implementation?", options: ["LinkedHashMap", "HashMap", "TreeMap", "ConcurrentHashMap"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 33, question: "Which method in ThreadPoolExecutor interrupts running tasks?", options: ["shutdownNow()", "shutdown()", "awaitTermination()", "execute()"], answer: "shutdownNow()", attempted: false, selected: "" },
  { num: 34, question: "Which annotation indicates deprecated method usage warning?", options: ["@Deprecated", "@Override", "@SafeVarargs", "@FunctionalInterface"], answer: "@Deprecated", attempted: false, selected: "" },
  { num: 35, question: "Which class is used for stack-safe recursion with ForkJoin?", options: ["RecursiveTask", "Thread", "Runnable", "Callable"], answer: "RecursiveTask", attempted: false, selected: "" },
  { num: 36, question: "Which exception occurs if finalize() throws exception?", options: ["Ignored by GC", "RuntimeException", "Error", "IOException"], answer: "Ignored by GC", attempted: false, selected: "" },
  { num: 37, question: "Which keyword ensures a class cannot be subclassed?", options: ["final", "abstract", "sealed", "private"], answer: "final", attempted: false, selected: "" },
  { num: 38, question: "Which type of inner class has no name?", options: ["Anonymous Class", "Static Nested Class", "Local Class", "Inner Class"], answer: "Anonymous Class", attempted: false, selected: "" },
  { num: 39, question: "Which method in Object class compares references only?", options: ["==", "equals()", "compareTo()", "hashCode()"], answer: "==", attempted: false, selected: "" },
  { num: 40, question: "Which exception occurs if array access is invalid?", options: ["ArrayIndexOutOfBoundsException", "IndexOutOfBoundsException", "NullPointerException", "IllegalArgumentException"], answer: "ArrayIndexOutOfBoundsException", attempted: false, selected: "" },
  { num: 41, question: "Which method in CompletableFuture executes task asynchronously?", options: ["supplyAsync()", "runAsync()", "submit()", "execute()"], answer: "supplyAsync()", attempted: false, selected: "" },
  { num: 42, question: "Which memory area stores method bytecode instructions?", options: ["Code Cache", "Heap", "Stack", "Metaspace"], answer: "Code Cache", attempted: false, selected: "" },
  { num: 43, question: "Which exception occurs when accessing volatile variable incorrectly?", options: ["None", "IllegalMonitorStateException", "IllegalAccessException", "RuntimeException"], answer: "None", attempted: false, selected: "" },
  { num: 44, question: "Which keyword in generics allows upper-bound type restriction?", options: ["extends", "super", "T", "<?>"], answer: "extends", attempted: false, selected: "" },
  { num: 45, question: "Which annotation documents functional interface intended for lambda?", options: ["@FunctionalInterface", "@Override", "@SafeVarargs", "@Deprecated"], answer: "@FunctionalInterface", attempted: false, selected: "" },
  { num: 46, question: "Which method in ThreadPoolExecutor waits for termination?", options: ["awaitTermination()", "shutdown()", "shutdownNow()", "execute()"], answer: "awaitTermination()", attempted: false, selected: "" },
  { num: 47, question: "Which method prevents external modification in unmodifiable collection?", options: ["Collections.unmodifiableList()", "List.copyOf()", "ArrayList()", "LinkedList()"], answer: "Collections.unmodifiableList()", attempted: false, selected: "" },
  { num: 48, question: "Which type of deadlock involves circular waiting?", options: ["Classic Deadlock", "Resource Deadlock", "Starvation", "Livelock"], answer: "Classic Deadlock", attempted: false, selected: "" },
  { num: 49, question: "Which method in ForkJoinPool submits a task recursively?", options: ["invoke()", "submit()", "execute()", "fork()"], answer: "fork()", attempted: false, selected: "" },
  { num: 50, question: "Which JVM option prints GC details?", options: ["-Xlog:gc", "-Xmx", "-Xms", "-XX:+UseG1GC"], answer: "-Xlog:gc", attempted: false, selected: "" }
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
