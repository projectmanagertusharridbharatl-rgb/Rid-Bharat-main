const questions =[
  { num: 1, question: "Which method checks if string contains sequence?", options: ["contains()", "includes()", "has()", "check()"], answer: "contains()", attempted: false, selected: "" },
  { num: 2, question: "Which method returns substring from start to end index?", options: ["substring()", "subStr()", "slice()", "cut()"], answer: "substring()", attempted: false, selected: "" },
  { num: 3, question: "Which class provides random numbers?", options: ["Random", "Math", "Randomizer", "NumberGenerator"], answer: "Random", attempted: false, selected: "" },
  { num: 4, question: "Which method returns hash code of object?", options: ["hashCode()", "getHash()", "hash()", "code()"], answer: "hashCode()", attempted: false, selected: "" },
  { num: 5, question: "Which class represents immutable string?", options: ["String", "StringBuilder", "StringBuffer", "CharSequence"], answer: "String", attempted: false, selected: "" },
  { num: 6, question: "Which class represents mutable string?", options: ["StringBuilder", "String", "StringBuffer", "CharSequence"], answer: "StringBuilder", attempted: false, selected: "" },
  { num: 7, question: "Which method appends character sequence to StringBuilder?", options: ["append()", "add()", "concat()", "insert()"], answer: "append()", attempted: false, selected: "" },
  { num: 8, question: "Which method reverses StringBuilder content?", options: ["reverse()", "flip()", "invert()", "mirror()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 9, question: "Which class represents synchronized mutable string?", options: ["StringBuffer", "StringBuilder", "String", "CharSequence"], answer: "StringBuffer", attempted: false, selected: "" },
  { num: 10, question: "Which interface allows mapping input to output?", options: ["Function", "Consumer", "Supplier", "Predicate"], answer: "Function", attempted: false, selected: "" },
  { num: 11, question: "Which method in Collections finds minimum element?", options: ["min()", "minimum()", "least()", "findMin()"], answer: "min()", attempted: false, selected: "" },
  { num: 12, question: "Which method in Collections finds maximum element?", options: ["max()", "maximum()", "greatest()", "findMax()"], answer: "max()", attempted: false, selected: "" },
  { num: 13, question: "Which class represents key-value mapping?", options: ["Map", "Set", "List", "Queue"], answer: "Map", attempted: false, selected: "" },
  { num: 14, question: "Which method returns keys of Map?", options: ["keySet()", "keys()", "getKeys()", "entrySet()"], answer: "keySet()", attempted: false, selected: "" },
  { num: 15, question: "Which method adds element to Set?", options: ["add()", "put()", "insert()", "append()"], answer: "add()", attempted: false, selected: "" },
  { num: 16, question: "Which method removes element from Set?", options: ["remove()", "delete()", "discard()", "pop()"], answer: "remove()", attempted: false, selected: "" },
  { num: 17, question: "Which method checks if Set contains element?", options: ["contains()", "has()", "exists()", "find()"], answer: "contains()", attempted: false, selected: "" },
  { num: 18, question: "Which interface allows testing boolean condition?", options: ["Predicate", "Function", "Consumer", "Supplier"], answer: "Predicate", attempted: false, selected: "" },
  { num: 19, question: "Which method returns boolean if Optional has value?", options: ["isPresent()", "hasValue()", "exists()", "isEmpty()"], answer: "isPresent()", attempted: false, selected: "" },
  { num: 20, question: "Which method removes all elements from Collection?", options: ["clear()", "removeAll()", "deleteAll()", "empty()"], answer: "clear()", attempted: false, selected: "" },
  { num: 21, question: "Which method converts primitive int to Integer object?", options: ["valueOf()", "parseInt()", "toInteger()", "convert()"], answer: "valueOf()", attempted: false, selected: "" },
  { num: 22, question: "Which method parses string to integer?", options: ["parseInt()", "valueOf()", "toInt()", "convert()"], answer: "parseInt()", attempted: false, selected: "" },
  { num: 23, question: "Which method in Collections counts frequency of element?", options: ["frequency()", "count()", "occurrence()", "repeat()"], answer: "frequency()", attempted: false, selected: "" },
  { num: 24, question: "Which interface represents two inputs and one output?", options: ["BiFunction", "Function", "BiConsumer", "BinaryOperator"], answer: "BiFunction", attempted: false, selected: "" },
  { num: 25, question: "Which class sorts arrays?", options: ["Arrays", "Collections", "SortUtil", "ArrayUtils"], answer: "Arrays", attempted: false, selected: "" },
  { num: 26, question: "Which method returns true if array contains value?", options: ["binarySearch()", "contains()", "indexOf()", "search()"], answer: "binarySearch()", attempted: false, selected: "" },
  { num: 27, question: "Which class allows dynamic array?", options: ["ArrayList", "List", "Vector", "LinkedList"], answer: "ArrayList", attempted: false, selected: "" },
  { num: 28, question: "Which method in ArrayList adds element?", options: ["add()", "insert()", "append()", "push()"], answer: "add()", attempted: false, selected: "" },
  { num: 29, question: "Which method in ArrayList removes element by index?", options: ["remove()", "delete()", "discard()", "pop()"], answer: "remove()", attempted: false, selected: "" },
  { num: 30, question: "Which class represents doubly linked list?", options: ["LinkedList", "ArrayList", "Vector", "Deque"], answer: "LinkedList", attempted: false, selected: "" },
  { num: 31, question: "Which interface allows adding and removing elements from end?", options: ["Deque", "Queue", "Stack", "List"], answer: "Deque", attempted: false, selected: "" },
  { num: 32, question: "Which method returns and removes first element from Queue?", options: ["poll()", "remove()", "pop()", "peek()"], answer: "poll()", attempted: false, selected: "" },
  { num: 33, question: "Which method returns first element without removing from Queue?", options: ["peek()", "poll()", "get()", "first()"], answer: "peek()", attempted: false, selected: "" },
  { num: 34, question: "Which method reverses list in Collections?", options: ["reverse()", "flip()", "invert()", "mirror()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 35, question: "Which interface allows performing action on element?", options: ["Consumer", "Supplier", "Predicate", "Function"], answer: "Consumer", attempted: false, selected: "" },
  { num: 36, question: "Which method executes action if Optional value present?", options: ["ifPresent()", "isPresent()", "get()", "orElse()"], answer: "ifPresent()", attempted: false, selected: "" },
  { num: 37, question: "Which class is used for date and time?", options: ["LocalDateTime", "Date", "Calendar", "Time"], answer: "LocalDateTime", attempted: false, selected: "" },
  { num: 38, question: "Which method adds element at specific index in List?", options: ["add(index, element)", "insert()", "set()", "put()"], answer: "add(index, element)", attempted: false, selected: "" },
  { num: 39, question: "Which method updates element at index in List?", options: ["set()", "add()", "replace()", "update()"], answer: "set()", attempted: false, selected: "" },
  { num: 40, question: "Which method removes element by object in List?", options: ["remove(Object)", "removeAt()", "delete()", "discard()"], answer: "remove(Object)", attempted: false, selected: "" },
  { num: 41, question: "Which method converts Stream to List?", options: ["collect(Collectors.toList())", "toList()", "asList()", "streamToList()"], answer: "collect(Collectors.toList())", attempted: false, selected: "" },
  { num: 42, question: "Which class allows storing key-value pairs in sorted order?", options: ["TreeMap", "HashMap", "LinkedHashMap", "Map"], answer: "TreeMap", attempted: false, selected: "" },
  { num: 43, question: "Which class allows key-value pairs with insertion order?", options: ["LinkedHashMap", "HashMap", "TreeMap", "Map"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 44, question: "Which class allows concurrent hash map?", options: ["ConcurrentHashMap", "HashMap", "Hashtable", "TreeMap"], answer: "ConcurrentHashMap", attempted: false, selected: "" },
  { num: 45, question: "Which method splits string by regex?", options: ["split()", "divide()", "tokenize()", "cut()"], answer: "split()", attempted: false, selected: "" },
  { num: 46, question: "Which method returns Unicode code point at index?", options: ["codePointAt()", "charAt()", "unicodeAt()", "getCode()"], answer: "codePointAt()", attempted: false, selected: "" },
  { num: 47, question: "Which method converts string to bytes?", options: ["getBytes()", "toBytes()", "bytes()", "convertToBytes()"], answer: "getBytes()", attempted: false, selected: "" },
  { num: 48, question: "Which class provides system properties?", options: ["System", "Runtime", "Properties", "Environment"], answer: "System", attempted: false, selected: "" },
  { num: 49, question: "Which method returns system property by key?", options: ["getProperty()", "property()", "get()", "fetchProperty()"], answer: "getProperty()", attempted: false, selected: "" },
  { num: 50, question: "Which method in Math returns absolute value?", options: ["abs()", "absolute()", "mod()", "valueOf()"], answer: "abs()", attempted: false, selected: "" }
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