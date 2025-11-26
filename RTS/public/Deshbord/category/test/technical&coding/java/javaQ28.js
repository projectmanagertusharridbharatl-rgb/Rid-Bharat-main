const questions=
  [
  { num: 1, question: "Which method checks if string is empty?", options: ["isEmpty()", "empty()", "length()==0", "checkEmpty()"], answer: "isEmpty()", attempted: false, selected: "" },
  { num: 2, question: "Which method trims whitespace from string?", options: ["trim()", "strip()", "remove()", "clean()"], answer: "trim()", attempted: false, selected: "" },
  { num: 3, question: "Which method checks if string starts with prefix?", options: ["startsWith()", "beginWith()", "prefix()", "hasPrefix()"], answer: "startsWith()", attempted: false, selected: "" },
  { num: 4, question: "Which method checks if string ends with suffix?", options: ["endsWith()", "finishWith()", "suffix()", "hasSuffix()"], answer: "endsWith()", attempted: false, selected: "" },
  { num: 5, question: "Which method returns substring from start to end index?", options: ["substring()", "substr()", "slice()", "getSubString()"], answer: "substring()", attempted: false, selected: "" },
  { num: 6, question: "Which method compares strings ignoring case?", options: ["equalsIgnoreCase()", "compareIgnoreCase()", "equals()", "matchIgnoreCase()"], answer: "equalsIgnoreCase()", attempted: false, selected: "" },
  { num: 7, question: "Which method returns index of substring?", options: ["indexOf()", "search()", "find()", "getIndex()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 8, question: "Which method replaces characters in string?", options: ["replace()", "change()", "substitute()", "update()"], answer: "replace()", attempted: false, selected: "" },
  { num: 9, question: "Which method splits string by regex?", options: ["split()", "divide()", "break()", "tokenize()"], answer: "split()", attempted: false, selected: "" },
  { num: 10, question: "Which class is used to format text output?", options: ["Formatter", "Format", "TextFormat", "PrintFormat"], answer: "Formatter", attempted: false, selected: "" },
  { num: 11, question: "Which method formats string using format specifiers?", options: ["format()", "apply()", "convert()", "style()"], answer: "format()", attempted: false, selected: "" },
  { num: 12, question: "Which class is used for console input?", options: ["Scanner", "Console", "InputReader", "BufferedReader"], answer: "Console", attempted: false, selected: "" },
  { num: 13, question: "Which method reads line from Console?", options: ["readLine()", "nextLine()", "input()", "getLine()"], answer: "readLine()", attempted: false, selected: "" },
  { num: 14, question: "Which class allows reading characters from file?", options: ["FileReader", "BufferedReader", "InputStreamReader", "Reader"], answer: "FileReader", attempted: false, selected: "" },
  { num: 15, question: "Which class buffers input for efficiency?", options: ["BufferedReader", "FileReader", "Scanner", "InputReader"], answer: "BufferedReader", attempted: false, selected: "" },
  { num: 16, question: "Which method reads a line from BufferedReader?", options: ["readLine()", "read()", "nextLine()", "getLine()"], answer: "readLine()", attempted: false, selected: "" },
  { num: 17, question: "Which exception is thrown for IO errors?", options: ["IOException", "FileNotFoundException", "RuntimeException", "NullPointerException"], answer: "IOException", attempted: false, selected: "" },
  { num: 18, question: "Which exception occurs when file not found?", options: ["FileNotFoundException", "IOException", "RuntimeException", "NullPointerException"], answer: "FileNotFoundException", attempted: false, selected: "" },
  { num: 19, question: "Which class reads primitive data types from input?", options: ["DataInputStream", "Scanner", "BufferedReader", "Console"], answer: "DataInputStream", attempted: false, selected: "" },
  { num: 20, question: "Which method reads integer from DataInputStream?", options: ["readInt()", "readInteger()", "nextInt()", "getInt()"], answer: "readInt()", attempted: false, selected: "" },
  { num: 21, question: "Which interface represents list of elements?", options: ["List", "Array", "Collection", "Sequence"], answer: "List", attempted: false, selected: "" },
  { num: 22, question: "Which method adds element to list?", options: ["add()", "insert()", "append()", "put()"], answer: "add()", attempted: false, selected: "" },
  { num: 23, question: "Which method removes element from list?", options: ["remove()", "delete()", "discard()", "erase()"], answer: "remove()", attempted: false, selected: "" },
  { num: 24, question: "Which method returns element at index?", options: ["get()", "elementAt()", "fetch()", "read()"], answer: "get()", attempted: false, selected: "" },
  { num: 25, question: "Which method returns size of list?", options: ["size()", "length()", "count()", "getSize()"], answer: "size()", attempted: false, selected: "" },
  { num: 26, question: "Which class implements dynamic array?", options: ["ArrayList", "Vector", "LinkedList", "HashMap"], answer: "ArrayList", attempted: false, selected: "" },
  { num: 27, question: "Which class implements thread-safe dynamic array?", options: ["Vector", "ArrayList", "LinkedList", "HashMap"], answer: "Vector", attempted: false, selected: "" },
  { num: 28, question: "Which class implements doubly-linked list?", options: ["LinkedList", "ArrayList", "Vector", "HashMap"], answer: "LinkedList", attempted: false, selected: "" },
  { num: 29, question: "Which interface defines a set of unique elements?", options: ["Set", "List", "Map", "Queue"], answer: "Set", attempted: false, selected: "" },
  { num: 30, question: "Which interface defines key-value mapping?", options: ["Map", "List", "Set", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 31, question: "Which class implements Map with hash table?", options: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"], answer: "HashMap", attempted: false, selected: "" },
  { num: 32, question: "Which class implements Map in sorted order?", options: ["TreeMap", "HashMap", "LinkedHashMap", "Hashtable"], answer: "TreeMap", attempted: false, selected: "" },
  { num: 33, question: "Which class maintains insertion order of map?", options: ["LinkedHashMap", "HashMap", "TreeMap", "Hashtable"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 34, question: "Which class implements legacy synchronized map?", options: ["Hashtable", "HashMap", "TreeMap", "LinkedHashMap"], answer: "Hashtable", attempted: false, selected: "" },
  { num: 35, question: "Which interface represents FIFO collection?", options: ["Queue", "Stack", "List", "Set"], answer: "Queue", attempted: false, selected: "" },
  { num: 36, question: "Which class implements queue using linked list?", options: ["LinkedList", "ArrayList", "PriorityQueue", "HashSet"], answer: "LinkedList", attempted: false, selected: "" },
  { num: 37, question: "Which class implements priority queue?", options: ["PriorityQueue", "LinkedList", "ArrayList", "HashSet"], answer: "PriorityQueue", attempted: false, selected: "" },
  { num: 38, question: "Which interface represents LIFO collection?", options: ["Stack", "Queue", "List", "Set"], answer: "Stack", attempted: false, selected: "" },
  { num: 39, question: "Which class implements stack?", options: ["Stack", "LinkedList", "ArrayList", "Vector"], answer: "Stack", attempted: false, selected: "" },
  { num: 40, question: "Which interface represents collection of elements?", options: ["Collection", "List", "Set", "Map"], answer: "Collection", attempted: false, selected: "" },
  { num: 41, question: "Which method returns iterator for collection?", options: ["iterator()", "getIterator()", "iterate()", "next()"], answer: "iterator()", attempted: false, selected: "" },
  { num: 42, question: "Which class implements synchronization for collection?", options: ["Collections", "Concurrent", "SyncCollection", "ThreadSafe"], answer: "Collections", attempted: false, selected: "" },
  { num: 43, question: "Which method sorts list in ascending order?", options: ["sort()", "order()", "arrange()", "ascending()"], answer: "sort()", attempted: false, selected: "" },
  { num: 44, question: "Which method shuffles elements of list?", options: ["shuffle()", "randomize()", "mix()", "scramble()"], answer: "shuffle()", attempted: false, selected: "" },
  { num: 45, question: "Which class provides thread pool for tasks?", options: ["ExecutorService", "ThreadPool", "Executor", "TaskScheduler"], answer: "ExecutorService", attempted: false, selected: "" },
  { num: 46, question: "Which method submits task to executor?", options: ["submit()", "execute()", "run()", "schedule()"], answer: "submit()", attempted: false, selected: "" },
  { num: 47, question: "Which class schedules tasks at fixed rate?", options: ["ScheduledExecutorService", "ExecutorService", "Timer", "ThreadPool"], answer: "ScheduledExecutorService", attempted: false, selected: "" },
  { num: 48, question: "Which class implements concurrent hash map?", options: ["ConcurrentHashMap", "HashMap", "TreeMap", "LinkedHashMap"], answer: "ConcurrentHashMap", attempted: false, selected: "" },
  { num: 49, question: "Which interface supports callable tasks?", options: ["Callable", "Runnable", "Task", "Executor"], answer: "Callable", attempted: false, selected: "" },
  { num: 50, question: "Which class is used for atomic operations?", options: ["AtomicInteger", "Integer", "Number", "Atomic"], answer: "AtomicInteger", attempted: false, selected: "" }
]



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