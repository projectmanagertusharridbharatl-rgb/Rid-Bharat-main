const questions =[
  { num: 1, question: "Which method is called when an object implements AutoCloseable in try-with-resources?", options: ["close()", "finalize()", "destroy()", "cleanup()"], answer: "close()", attempted: false, selected: "" },
  { num: 2, question: "Which happens first during class loading?", options: ["Loading", "Linking", "Initialization", "Execution"], answer: "Loading", attempted: false, selected: "" },
  { num: 3, question: "Which Stream operation is lazy and does not execute until terminal operation?", options: ["Intermediate operations", "Terminal operations", "Collect", "ForEach"], answer: "Intermediate operations", attempted: false, selected: "" },
  { num: 4, question: "Which serialization mechanism allows object versioning?", options: ["Serializable + serialVersionUID", "Externalizable", "Cloneable", "Transient"], answer: "Serializable + serialVersionUID", attempted: false, selected: "" },
  { num: 5, question: "Which method ensures CompletableFuture runs after multiple futures complete?", options: ["allOf()", "anyOf()", "thenRun()", "runAsync()"], answer: "allOf()", attempted: false, selected: "" },
  { num: 6, question: "Which pattern is used for global object access with lazy initialization?", options: ["Singleton", "Factory", "Prototype", "Observer"], answer: "Singleton", attempted: false, selected: "" },
  { num: 7, question: "Which happens when final, static, and instance blocks are used together?", options: ["Static block → Instance block → Constructor", "Final block → Constructor → Static block", "Constructor → Instance block → Static block", "Instance block → Static block → Constructor"], answer: "Static block → Instance block → Constructor", attempted: false, selected: "" },
  { num: 8, question: "Which exception occurs when transient field is accessed after deserialization incorrectly?", options: ["NullPointerException", "IOException", "ClassCastException", "IllegalArgumentException"], answer: "NullPointerException", attempted: false, selected: "" },
  { num: 9, question: "Which keyword in Java ensures thread safety for method?", options: ["synchronized", "volatile", "atomic", "transient"], answer: "synchronized", attempted: false, selected: "" },
  { num: 10, question: "Which happens if HashMap key hashCode() changes after insertion?", options: ["Key becomes unreachable", "Nothing happens", "Key duplicates", "HashMap crashes"], answer: "Key becomes unreachable", attempted: false, selected: "" },
  { num: 11, question: "Which optional method prevents null access without exception?", options: ["isPresent()", "get()", "orElseThrow()", "ifPresent()"], answer: "isPresent()", attempted: false, selected: "" },
  { num: 12, question: "Which method in ForkJoinPool waits for all subtasks recursively?", options: ["join()", "fork()", "invoke()", "submit()"], answer: "join()", attempted: false, selected: "" },
  { num: 13, question: "Which method in Stream avoids boxing for primitive streams?", options: ["mapToInt()", "map()", "flatMap()", "filter()"], answer: "mapToInt()", attempted: false, selected: "" },
  { num: 14, question: "Which exception occurs if ThreadGroup is destroyed while thread is running?", options: ["IllegalThreadStateException", "InterruptedException", "RuntimeException", "ThreadDeath"], answer: "IllegalThreadStateException", attempted: false, selected: "" },
  { num: 15, question: "Which pattern decouples object creation from implementation?", options: ["Factory", "Singleton", "Observer", "Adapter"], answer: "Factory", attempted: false, selected: "" },
  { num: 16, question: "Which method allows stream to reuse elements safely after terminal operation?", options: ["collect()", "map()", "peek()", "none, stream cannot be reused"], answer: "none, stream cannot be reused", attempted: false, selected: "" },
  { num: 17, question: "Which class ensures thread-safe lazy singleton using holder idiom?", options: ["Private static inner class", "Enum Singleton", "Synchronized getInstance", "Double-checked locking"], answer: "Private static inner class", attempted: false, selected: "" },
  { num: 18, question: "Which method prevents serialization of singleton breaking?", options: ["readResolve()", "writeReplace()", "clone()", "finalize()"], answer: "readResolve()", attempted: false, selected: "" },
  { num: 19, question: "Which occurs if synchronized block locks object but throws exception?", options: ["Lock released automatically", "Deadlock occurs", "Lock remains", "RuntimeException thrown"], answer: "Lock released automatically", attempted: false, selected: "" },
  { num: 20, question: "Which annotation allows unchecked warnings to be suppressed?", options: ["@SuppressWarnings(\"unchecked\")", "@Override", "@Deprecated", "@SafeVarargs"], answer: "@SuppressWarnings(\"unchecked\")", attempted: false, selected: "" },
  { num: 21, question: "Which collection is best for high read and occasional writes?", options: ["CopyOnWriteArrayList", "ArrayList", "LinkedList", "Vector"], answer: "CopyOnWriteArrayList", attempted: false, selected: "" },
  { num: 22, question: "Which serialization interface requires custom writeObject/readObject?", options: ["Serializable", "Externalizable", "Cloneable", "AutoCloseable"], answer: "Externalizable", attempted: false, selected: "" },
  { num: 23, question: "Which method ensures correct ordering in priority queues?", options: ["Comparator", "Comparable", "equals()", "hashCode()"], answer: "Comparator", attempted: false, selected: "" },
  { num: 24, question: "Which ThreadPoolExecutor method interrupts idle threads immediately?", options: ["shutdownNow()", "shutdown()", "awaitTermination()", "execute()"], answer: "shutdownNow()", attempted: false, selected: "" },
  { num: 25, question: "Which design pattern allows adding behavior dynamically?", options: ["Decorator", "Strategy", "Proxy", "Adapter"], answer: "Decorator", attempted: false, selected: "" },
  { num: 26, question: "Which method checks if stream contains elements matching predicate?", options: ["anyMatch()", "allMatch()", "noneMatch()", "filter()"], answer: "anyMatch()", attempted: false, selected: "" },
  { num: 27, question: "Which class ensures atomic updates for long values?", options: ["AtomicLong", "LongAdder", "Long", "Integer"], answer: "AtomicLong", attempted: false, selected: "" },
  { num: 28, question: "Which method in Optional executes lambda if value is present?", options: ["ifPresent()", "orElse()", "get()", "orElseGet()"], answer: "ifPresent()", attempted: false, selected: "" },
  { num: 29, question: "Which collection maintains insertion order and allows nulls?", options: ["LinkedHashMap", "HashMap", "TreeMap", "Hashtable"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 30, question: "Which JVM option enables assertions?", options: ["-ea", "-Xmx", "-Xms", "-verbose"], answer: "-ea", attempted: false, selected: "" },
  { num: 31, question: "Which keyword prevents cloning of object?", options: ["final", "private clone()", "abstract", "sealed"], answer: "private clone()", attempted: false, selected: "" },
  { num: 32, question: "Which method in CompletableFuture handles exceptions?", options: ["exceptionally()", "handle()", "thenApply()", "thenAccept()"], answer: "exceptionally()", attempted: false, selected: "" },
  { num: 33, question: "Which method executes after JVM shuts down?", options: ["Runtime.addShutdownHook()", "System.exit()", "finalize()", "close()"], answer: "Runtime.addShutdownHook()", attempted: false, selected: "" },
  { num: 34, question: "Which Stream operation triggers short-circuit evaluation?", options: ["anyMatch()", "map()", "filter()", "flatMap()"], answer: "anyMatch()", attempted: false, selected: "" },
  { num: 35, question: "Which interface allows lambda expression to define single abstract method?", options: ["FunctionalInterface", "Serializable", "Cloneable", "Runnable"], answer: "FunctionalInterface", attempted: false, selected: "" },
  { num: 36, question: "Which exception occurs on invalid format in DateTime parsing?", options: ["DateTimeParseException", "ParseException", "IllegalArgumentException", "IOException"], answer: "DateTimeParseException", attempted: false, selected: "" },
  { num: 37, question: "Which annotation ensures method arguments are not null at runtime?", options: ["@NonNull", "@Override", "@SafeVarargs", "@Deprecated"], answer: "@NonNull", attempted: false, selected: "" },
  { num: 38, question: "Which pattern defers object creation until needed?", options: ["Lazy Initialization", "Singleton", "Factory", "Builder"], answer: "Lazy Initialization", attempted: false, selected: "" },
  { num: 39, question: "Which method avoids deadlock in multiple synchronized blocks?", options: ["lock ordering", "wait()", "notify()", "yield()"], answer: "lock ordering", attempted: false, selected: "" },
  { num: 40, question: "Which collection class supports concurrent addition/removal without locking?", options: ["ConcurrentLinkedQueue", "ArrayList", "LinkedList", "Vector"], answer: "ConcurrentLinkedQueue", attempted: false, selected: "" },
  { num: 41, question: "Which method prevents serialization from creating new instance in singleton?", options: ["readResolve()", "writeReplace()", "clone()", "finalize()"], answer: "readResolve()", attempted: false, selected: "" },
  { num: 42, question: "Which Optional method returns default if value is empty?", options: ["orElse()", "get()", "orElseThrow()", "ifPresent()"], answer: "orElse()", attempted: false, selected: "" },
  { num: 43, question: "Which annotation helps in type-safe varargs?", options: ["@SafeVarargs", "@Override", "@Deprecated", "@FunctionalInterface"], answer: "@SafeVarargs", attempted: false, selected: "" },
  { num: 44, question: "Which class allows fork-join with recursive decomposition?", options: ["ForkJoinTask", "Thread", "Runnable", "ExecutorService"], answer: "ForkJoinTask", attempted: false, selected: "" },
  { num: 45, question: "Which JVM option enables printing compilation details?", options: ["-XX:+PrintCompilation", "-Xmx", "-Xms", "-verbose"], answer: "-XX:+PrintCompilation", attempted: false, selected: "" },
  { num: 46, question: "Which method ensures Optional chaining without NPE?", options: ["map()", "get()", "orElse()", "ifPresent()"], answer: "map()", attempted: false, selected: "" },
  { num: 47, question: "Which collection allows concurrent reads and blocking writes?", options: ["ReadWriteLock with HashMap", "ConcurrentHashMap", "CopyOnWriteArrayList", "Vector"], answer: "ReadWriteLock with HashMap", attempted: false, selected: "" },
  { num: 48, question: "Which keyword prevents serialization using default mechanism?", options: ["transient", "final", "volatile", "static"], answer: "transient", attempted: false, selected: "" },
  { num: 49, question: "Which Stream operation converts elements to a different type?", options: ["map()", "filter()", "flatMap()", "collect()"], answer: "map()", attempted: false, selected: "" },
  { num: 50, question: "Which exception occurs if thread pool task throws exception?", options: ["ExecutionException", "InterruptedException", "RuntimeException", "TimeoutException"], answer: "ExecutionException", attempted: false, selected: "" }
];

let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}



function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}



////////////////////////////////////////////////////////////////////////////////////////////

// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

      function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            // check correct answer
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }

        } else {
            notAttempted++;
        }

        // push result
        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // store in localStorage
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // ask for result page
    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}



function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////