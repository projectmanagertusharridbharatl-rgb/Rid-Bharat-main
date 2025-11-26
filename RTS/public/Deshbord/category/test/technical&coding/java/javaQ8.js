const questions = 
 [
  { num: 1, question: "Which of these allows type-safe code reusability in Java?", options: ["Interfaces", "Generics", "Inheritance", "Polymorphism"], answer: "Generics", attempted: false, selected: "" },
  { num: 2, question: "Which functional interface represents a function that accepts one argument and returns a result?", options: ["Consumer", "Supplier", "Function", "Predicate"], answer: "Function", attempted: false, selected: "" },
  { num: 3, question: "Which of these is a valid lambda expression?", options: ["x -> x + 2", "(x) => x + 2;", "x => {x+2}", "lambda x: x+2"], answer: "x -> x + 2", attempted: false, selected: "" },
  { num: 4, question: "Which stream method is used to filter elements based on a condition?", options: ["filter()", "map()", "reduce()", "collect()"], answer: "filter()", attempted: false, selected: "" },
  { num: 5, question: "Which method of Stream is used to transform elements?", options: ["map()", "filter()", "forEach()", "collect()"], answer: "map()", attempted: false, selected: "" },
  { num: 6, question: "Which keyword prevents a variable from being modified once assigned?", options: ["final", "static", "volatile", "const"], answer: "final", attempted: false, selected: "" },
  { num: 7, question: "Which class provides thread-safe dynamic array implementation?", options: ["ArrayList", "Vector", "LinkedList", "Stack"], answer: "Vector", attempted: false, selected: "" },
  { num: 8, question: "Which interface provides a mechanism to iterate elements one by one?", options: ["Iterator", "Iterable", "Enumeration", "Collection"], answer: "Iterator", attempted: false, selected: "" },
  { num: 9, question: "Which Java feature is used to achieve runtime polymorphism?", options: ["Method Overloading", "Method Overriding", "Encapsulation", "Abstraction"], answer: "Method Overriding", attempted: false, selected: "" },
  { num: 10, question: "Which of these methods is used to start a thread execution?", options: ["run()", "execute()", "start()", "init()"], answer: "start()", attempted: false, selected: "" },
  { num: 11, question: "Which class is used for reading objects from a file?", options: ["FileReader", "ObjectInputStream", "BufferedReader", "Scanner"], answer: "ObjectInputStream", attempted: false, selected: "" },
  { num: 12, question: "Which exception is thrown when a thread is waiting, sleeping or blocked and another thread interrupts it?", options: ["InterruptedException", "IOException", "IllegalThreadStateException", "ThreadException"], answer: "InterruptedException", attempted: false, selected: "" },
  { num: 13, question: "Which collection does not allow duplicate elements?", options: ["List", "Set", "Map", "Queue"], answer: "Set", attempted: false, selected: "" },
  { num: 14, question: "Which of the following is a marker interface?", options: ["Serializable", "Comparable", "Runnable", "Cloneable"], answer: "Serializable", attempted: false, selected: "" },
  { num: 15, question: "Which of these is not a valid functional interface in java.util.function?", options: ["Predicate", "Consumer", "Mapper", "Supplier"], answer: "Mapper", attempted: false, selected: "" },
  { num: 16, question: "Which stream terminal operation returns the count of elements?", options: ["count()", "sum()", "collect()", "reduce()"], answer: "count()", attempted: false, selected: "" },
  { num: 17, question: "Which of the following is used to execute multiple threads?", options: ["ExecutorService", "Runnable", "ThreadGroup", "Callable"], answer: "ExecutorService", attempted: false, selected: "" },
  { num: 18, question: "Which of these methods converts a stream to a list?", options: ["toList()", "collect(Collectors.toList())", "list()", "convert()"], answer: "collect(Collectors.toList())", attempted: false, selected: "" },
  { num: 19, question: "Which method in the Thread class is used to pause the execution?", options: ["wait()", "sleep()", "stop()", "yield()"], answer: "sleep()", attempted: false, selected: "" },
  { num: 20, question: "Which Java 8 feature allows processing of data in parallel?", options: ["Parallel Streams", "Threads", "ForkJoin", "Lambda"], answer: "Parallel Streams", attempted: false, selected: "" },
  { num: 21, question: "Which keyword is used for exception propagation?", options: ["throws", "throw", "try", "catch"], answer: "throws", attempted: false, selected: "" },
  { num: 22, question: "Which class is used for high-performance random access of large files?", options: ["FileReader", "BufferedReader", "RandomAccessFile", "FileInputStream"], answer: "RandomAccessFile", attempted: false, selected: "" },
  { num: 23, question: "Which of these collections guarantees sorted order?", options: ["HashSet", "TreeSet", "ArrayList", "LinkedList"], answer: "TreeSet", attempted: false, selected: "" },
  { num: 24, question: "Which method in Stream API is used to remove duplicate elements?", options: ["filter()", "distinct()", "map()", "collect()"], answer: "distinct()", attempted: false, selected: "" },
  { num: 25, question: "Which Java keyword ensures visibility and ordering of variables in threads?", options: ["volatile", "synchronized", "final", "transient"], answer: "volatile", attempted: false, selected: "" },
  { num: 26, question: "Which method in Object class creates and returns a copy of the object?", options: ["copy()", "clone()", "duplicate()", "replicate()"], answer: "clone()", attempted: false, selected: "" },
  { num: 27, question: "Which class is used for handling formatted output?", options: ["Formatter", "PrintStream", "PrintWriter", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 28, question: "Which of these is a checked exception?", options: ["IOException", "NullPointerException", "ArithmeticException", "RuntimeException"], answer: "IOException", attempted: false, selected: "" },
  { num: 29, question: "Which of the following allows method references?", options: ["Java 8", "Java 7", "Java 5", "Java 6"], answer: "Java 8", attempted: false, selected: "" },
  { num: 30, question: "Which interface does every collection class implement?", options: ["Collection", "Iterable", "Iterator", "Comparator"], answer: "Iterable", attempted: false, selected: "" },
  { num: 31, question: "Which method is used to convert an Optional into a value or default?", options: ["getOrElse()", "orElse()", "value()", "default()"], answer: "orElse()", attempted: false, selected: "" },
  { num: 32, question: "Which of these allows functional-style operations on collections?", options: ["Stream API", "Lambda", "Generics", "Reflection"], answer: "Stream API", attempted: false, selected: "" },
  { num: 33, question: "Which keyword is used to make a method thread-safe?", options: ["volatile", "synchronized", "static", "final"], answer: "synchronized", attempted: false, selected: "" },
  { num: 34, question: "Which class is used for immutable strings?", options: ["String", "StringBuffer", "StringBuilder", "CharArray"], answer: "String", attempted: false, selected: "" },
  { num: 35, question: "Which class provides a dynamic array with synchronized methods?", options: ["ArrayList", "Vector", "HashSet", "Stack"], answer: "Vector", attempted: false, selected: "" },
  { num: 36, question: "Which method in Thread class is used to check if thread is alive?", options: ["isAlive()", "isRunning()", "isStarted()", "exists()"], answer: "isAlive()", attempted: false, selected: "" },
  { num: 37, question: "Which exception is thrown when object serialization fails?", options: ["NotSerializableException", "IOException", "ClassNotFoundException", "RuntimeException"], answer: "NotSerializableException", attempted: false, selected: "" },
  { num: 38, question: "Which package contains collection framework interfaces?", options: ["java.util", "java.io", "java.net", "java.lang"], answer: "java.util", attempted: false, selected: "" },
  { num: 39, question: "Which of the following allows lazy computation in streams?", options: ["Intermediate Operations", "Terminal Operations", "Parallel Streams", "Collectors"], answer: "Intermediate Operations", attempted: false, selected: "" },
  { num: 40, question: "Which method in Stream is used for reduction operation?", options: ["reduce()", "map()", "filter()", "flatMap()"], answer: "reduce()", attempted: false, selected: "" },
  { num: 41, question: "Which feature of Java enables code to discover class information at runtime?", options: ["Reflection", "Serialization", "Encapsulation", "Abstraction"], answer: "Reflection", attempted: false, selected: "" },
  { num: 42, question: "Which interface is implemented by HashMap?", options: ["Map", "Set", "Collection", "List"], answer: "Map", attempted: false, selected: "" },
  { num: 43, question: "Which method of Files class reads all lines from a file?", options: ["readLines()", "readAllLines()", "getLines()", "read()"], answer: "readAllLines()", attempted: false, selected: "" },
  { num: 44, question: "Which class in java.time package represents a date without time?", options: ["LocalDate", "LocalTime", "LocalDateTime", "Date"], answer: "LocalDate", attempted: false, selected: "" },
  { num: 45, question: "Which interface provides total ordering on objects?", options: ["Comparable", "Comparator", "Iterable", "ComparatorChain"], answer: "Comparable", attempted: false, selected: "" },
  { num: 46, question: "Which Java feature helps in managing memory automatically?", options: ["Garbage Collection", "Manual Allocation", "Destructor", "Finalizer"], answer: "Garbage Collection", attempted: false, selected: "" },
  { num: 47, question: "Which annotation marks a method that should run after object construction?", options: ["@PostConstruct", "@Init", "@After", "@Construct"], answer: "@PostConstruct", attempted: false, selected: "" },
  { num: 48, question: "Which collection class allows null keys and values?", options: ["HashMap", "TreeMap", "Hashtable", "ConcurrentHashMap"], answer: "HashMap", attempted: false, selected: "" },
  { num: 49, question: "Which Java keyword is used to prevent serialization?", options: ["transient", "volatile", "final", "static"], answer: "transient", attempted: false, selected: "" },
  { num: 50, question: "Which method in Thread class waits for another thread to finish?", options: ["wait()", "join()", "sleep()", "yield()"], answer: "join()", attempted: false, selected: "" }
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