const questions =[
  { num: 1, question: "Which method in Object class checks object equality based on content?", options: ["equals()", "==", "hashCode()", "compareTo()"], answer: "equals()", attempted: false, selected: "" },
  { num: 2, question: "Which method ensures deterministic cleanup of resources?", options: ["try-with-resources", "finalize()", "close()", "shutdown()"], answer: "try-with-resources", attempted: false, selected: "" },
  { num: 3, question: "Which Thread method yields execution to allow other threads?", options: ["yield()", "sleep()", "wait()", "notify()"], answer: "yield()", attempted: false, selected: "" },
  { num: 4, question: "Which method is used to atomically update a double value?", options: ["AtomicDouble", "DoubleAdder", "synchronized block", "volatile"], answer: "DoubleAdder", attempted: false, selected: "" },
  { num: 5, question: "Which annotation ensures overridden method checks superclass signature?", options: ["@Override", "@Deprecated", "@SafeVarargs", "@FunctionalInterface"], answer: "@Override", attempted: false, selected: "" },
  { num: 6, question: "Which method in Enum prevents creation of duplicate constants?", options: ["valueOf()", "ordinal()", "name()", "constructor"], answer: "valueOf()", attempted: false, selected: "" },
  { num: 7, question: "Which Stream operation flattens nested streams into a single stream?", options: ["flatMap()", "map()", "filter()", "collect()"], answer: "flatMap()", attempted: false, selected: "" },
  { num: 8, question: "Which method in CompletableFuture handles both result and exception?", options: ["handle()", "thenApply()", "thenAccept()", "exceptionally()"], answer: "handle()", attempted: false, selected: "" },
  { num: 9, question: "Which interface represents a supplier of results without input?", options: ["Supplier", "Consumer", "Function", "Predicate"], answer: "Supplier", attempted: false, selected: "" },
  { num: 10, question: "Which method converts List to Map in Java 8 streams?", options: ["Collectors.toMap()", "Collectors.toList()", "collect()", "map()"], answer: "Collectors.toMap()", attempted: false, selected: "" },
  { num: 11, question: "Which exception occurs if thread waits without owning the monitor?", options: ["IllegalMonitorStateException", "InterruptedException", "RuntimeException", "ThreadDeath"], answer: "IllegalMonitorStateException", attempted: false, selected: "" },
  { num: 12, question: "Which annotation ensures variable is initialized only once?", options: ["@Final", "@Volatile", "@Transient", "@Immutable"], answer: "@Final", attempted: false, selected: "" },
  { num: 13, question: "Which class helps to execute scheduled tasks repeatedly?", options: ["ScheduledExecutorService", "ThreadPoolExecutor", "Timer", "ExecutorService"], answer: "ScheduledExecutorService", attempted: false, selected: "" },
  { num: 14, question: "Which exception occurs when stream is closed prematurely?", options: ["IllegalStateException", "IOException", "RuntimeException", "NoSuchElementException"], answer: "IllegalStateException", attempted: false, selected: "" },
  { num: 15, question: "Which method converts Optional to Stream?", options: ["stream()", "map()", "flatMap()", "filter()"], answer: "stream()", attempted: false, selected: "" },
  { num: 16, question: "Which method in ThreadLocal provides initial value lazily?", options: ["initialValue()", "get()", "set()", "remove()"], answer: "initialValue()", attempted: false, selected: "" },
  { num: 17, question: "Which exception occurs when deserialized class is missing?", options: ["ClassNotFoundException", "IOException", "NullPointerException", "InvalidClassException"], answer: "ClassNotFoundException", attempted: false, selected: "" },
  { num: 18, question: "Which method is used to combine two predicates in Java 8?", options: ["and()", "or()", "negate()", "all of the above"], answer: "all of the above", attempted: false, selected: "" },
  { num: 19, question: "Which interface allows bi-parameter lambda expressions?", options: ["BiFunction", "Function", "Supplier", "Consumer"], answer: "BiFunction", attempted: false, selected: "" },
  { num: 20, question: "Which interface represents an operation that accepts input and returns boolean?", options: ["Predicate", "Function", "Consumer", "Supplier"], answer: "Predicate", attempted: false, selected: "" },
  { num: 21, question: "Which annotation marks methods for functional programming contracts?", options: ["@FunctionalInterface", "@Override", "@Deprecated", "@SafeVarargs"], answer: "@FunctionalInterface", attempted: false, selected: "" },
  { num: 22, question: "Which method in ExecutorService waits for termination after shutdown?", options: ["awaitTermination()", "shutdown()", "invokeAll()", "execute()"], answer: "awaitTermination()", attempted: false, selected: "" },
  { num: 23, question: "Which mechanism ensures safe publishing of object between threads?", options: ["volatile", "final field", "synchronized", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 24, question: "Which method ensures AtomicInteger is incremented safely?", options: ["incrementAndGet()", "getAndIncrement()", "addAndGet()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 25, question: "Which pattern is used to separate object construction from representation?", options: ["Builder", "Factory", "Singleton", "Prototype"], answer: "Builder", attempted: false, selected: "" },
  { num: 26, question: "Which method in Optional executes lambda if empty?", options: ["orElseGet()", "orElse()", "get()", "ifPresent()"], answer: "orElseGet()", attempted: false, selected: "" },
  { num: 27, question: "Which collection class allows lock-free reads and writes?", options: ["ConcurrentHashMap", "HashMap", "Hashtable", "Vector"], answer: "ConcurrentHashMap", attempted: false, selected: "" },
  { num: 28, question: "Which method converts Stream to array?", options: ["toArray()", "collect()", "map()", "forEach()"], answer: "toArray()", attempted: false, selected: "" },
  { num: 29, question: "Which keyword ensures safe publication of final reference field?", options: ["final", "volatile", "synchronized", "static"], answer: "final", attempted: false, selected: "" },
  { num: 30, question: "Which method creates immutable copy of list?", options: ["List.copyOf()", "Collections.unmodifiableList()", "stream().collect()", "Both a and b"], answer: "Both a and b", attempted: false, selected: "" },
  { num: 31, question: "Which exception occurs when accessing array index out of bounds?", options: ["ArrayIndexOutOfBoundsException", "IndexOutOfBoundsException", "RuntimeException", "IOException"], answer: "ArrayIndexOutOfBoundsException", attempted: false, selected: "" },
  { num: 32, question: "Which annotation marks code deprecated for removal in future?", options: ["@Deprecated(forRemoval = true)", "@Override", "@SuppressWarnings", "@FunctionalInterface"], answer: "@Deprecated(forRemoval = true)", attempted: false, selected: "" },
  { num: 33, question: "Which method retrieves element from BlockingQueue with timeout?", options: ["poll(timeout)", "take()", "offer()", "peek()"], answer: "poll(timeout)", attempted: false, selected: "" },
  { num: 34, question: "Which exception occurs for interrupted sleeping thread?", options: ["InterruptedException", "IllegalStateException", "RuntimeException", "TimeoutException"], answer: "InterruptedException", attempted: false, selected: "" },
  { num: 35, question: "Which Stream method returns optional of first element?", options: ["findFirst()", "findAny()", "anyMatch()", "allMatch()"], answer: "findFirst()", attempted: false, selected: "" },
  { num: 36, question: "Which annotation documents that method should not be overridden?", options: ["@Override + final", "@Deprecated", "@FunctionalInterface", "@SafeVarargs"], answer: "@Override + final", attempted: false, selected: "" },
  { num: 37, question: "Which exception occurs if object is cast to incompatible type?", options: ["ClassCastException", "IOException", "IllegalArgumentException", "RuntimeException"], answer: "ClassCastException", attempted: false, selected: "" },
  { num: 38, question: "Which method ensures fork-join task returns computed result?", options: ["join()", "fork()", "invoke()", "execute()"], answer: "join()", attempted: false, selected: "" },
  { num: 39, question: "Which interface represents operation with one input and no return?", options: ["Consumer", "Function", "Supplier", "Predicate"], answer: "Consumer", attempted: false, selected: "" },
  { num: 40, question: "Which Stream method executes action for each element?", options: ["forEach()", "map()", "flatMap()", "filter()"], answer: "forEach()", attempted: false, selected: "" },
  { num: 41, question: "Which annotation ensures unchecked casts do not produce warnings?", options: ["@SafeVarargs", "@Override", "@Deprecated", "@FunctionalInterface"], answer: "@SafeVarargs", attempted: false, selected: "" },
  { num: 42, question: "Which method in ConcurrentHashMap avoids locking during reads?", options: ["get()", "put()", "remove()", "compute()"], answer: "get()", attempted: false, selected: "" },
  { num: 43, question: "Which method in ForkJoinTask submits task to pool?", options: ["fork()", "join()", "execute()", "invoke()"], answer: "fork()", attempted: false, selected: "" },
  { num: 44, question: "Which exception occurs when accessing null in streams?", options: ["NullPointerException", "IOException", "IllegalArgumentException", "RuntimeException"], answer: "NullPointerException", attempted: false, selected: "" },
  { num: 45, question: "Which annotation ensures method is intended for lambda?", options: ["@FunctionalInterface", "@Override", "@SafeVarargs", "@Deprecated"], answer: "@FunctionalInterface", attempted: false, selected: "" },
  { num: 46, question: "Which collection class provides navigable map operations?", options: ["TreeMap", "HashMap", "LinkedHashMap", "Hashtable"], answer: "TreeMap", attempted: false, selected: "" },
  { num: 47, question: "Which method retrieves optional value or throws custom exception?", options: ["orElseThrow()", "orElse()", "get()", "ifPresent()"], answer: "orElseThrow()", attempted: false, selected: "" },
  { num: 48, question: "Which method filters stream elements based on predicate?", options: ["filter()", "map()", "flatMap()", "forEach()"], answer: "filter()", attempted: false, selected: "" },
  { num: 49, question: "Which method converts primitive int array to Stream?", options: ["Arrays.stream()", "Stream.of()", "collect()", "map()"], answer: "Arrays.stream()", attempted: false, selected: "" },
  { num: 50, question: "Which exception occurs when thread is interrupted while waiting?", options: ["InterruptedException", "IllegalStateException", "RuntimeException", "TimeoutException"], answer: "InterruptedException", attempted: false, selected: "" }
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