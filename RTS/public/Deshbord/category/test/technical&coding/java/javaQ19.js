const questions=[
  { num: 1, question: "Which class converts primitive to object?", options: ["Wrapper Classes", "Converter Classes", "PrimitiveClass", "ObjectClass"], answer: "Wrapper Classes", attempted: false, selected: "" },
  { num: 2, question: "Which method converts string to double?", options: ["Double.parseDouble()", "String.toDouble()", "Double.valueOfString()", "parseDouble()"], answer: "Double.parseDouble()", attempted: false, selected: "" },
  { num: 3, question: "Which method converts string to float?", options: ["Float.parseFloat()", "String.toFloat()", "Float.valueOf()", "parseFloat()"], answer: "Float.parseFloat()", attempted: false, selected: "" },
  { num: 4, question: "Which method converts string to long?", options: ["Long.parseLong()", "String.toLong()", "Long.valueOfString()", "parseLong()"], answer: "Long.parseLong()", attempted: false, selected: "" },
  { num: 5, question: "Which class provides system properties?", options: ["System", "Properties", "Env", "Config"], answer: "System", attempted: false, selected: "" },
  { num: 6, question: "Which method gets system property?", options: ["System.getProperty()", "System.property()", "Properties.get()", "Env.getProperty()"], answer: "System.getProperty()", attempted: false, selected: "" },
  { num: 7, question: "Which method sets system property?", options: ["System.setProperty()", "Properties.set()", "System.propertySet()", "Env.setProperty()"], answer: "System.setProperty()", attempted: false, selected: "" },
  { num: 8, question: "Which method returns current time in milliseconds?", options: ["System.currentTimeMillis()", "Date.now()", "Time.getMillis()", "Clock.currentMillis()"], answer: "System.currentTimeMillis()", attempted: false, selected: "" },
  { num: 9, question: "Which class represents date and time?", options: ["LocalDateTime", "DateTime", "Date", "Calendar"], answer: "LocalDateTime", attempted: false, selected: "" },
  { num: 10, question: "Which class represents only date?", options: ["LocalDate", "Date", "Calendar", "DateTime"], answer: "LocalDate", attempted: false, selected: "" },
  { num: 11, question: "Which class represents only time?", options: ["LocalTime", "Time", "Clock", "DateTime"], answer: "LocalTime", attempted: false, selected: "" },
  { num: 12, question: "Which method returns current date?", options: ["LocalDate.now()", "Date.today()", "Calendar.getDate()", "LocalDate.get()"], answer: "LocalDate.now()", attempted: false, selected: "" },
  { num: 13, question: "Which method returns current time?", options: ["LocalTime.now()", "Time.now()", "Clock.now()", "LocalTime.get()"], answer: "LocalTime.now()", attempted: false, selected: "" },
  { num: 14, question: "Which method adds days to date?", options: ["plusDays()", "addDays()", "increaseDays()", "nextDays()"], answer: "plusDays()", attempted: false, selected: "" },
  { num: 15, question: "Which method subtracts days from date?", options: ["minusDays()", "subtractDays()", "reduceDays()", "prevDays()"], answer: "minusDays()", attempted: false, selected: "" },
  { num: 16, question: "Which class represents time zone?", options: ["ZoneId", "TimeZone", "Zone", "Clock"], answer: "ZoneId", attempted: false, selected: "" },
  { num: 17, question: "Which method gets default system zone?", options: ["ZoneId.systemDefault()", "ZoneId.getDefault()", "TimeZone.getDefault()", "Zone.defaultZone()"], answer: "ZoneId.systemDefault()", attempted: false, selected: "" },
  { num: 18, question: "Which method formats date to string?", options: ["DateTimeFormatter.format()", "Date.format()", "DateTime.format()", "Format.date()"], answer: "DateTimeFormatter.format()", attempted: false, selected: "" },
  { num: 19, question: "Which class parses string to date?", options: ["DateTimeFormatter", "SimpleDateFormat", "DateParser", "DateFormat"], answer: "DateTimeFormatter", attempted: false, selected: "" },
  { num: 20, question: "Which interface represents unmodifiable collection?", options: ["Unmodifiable", "Immutable", "ReadOnlyCollection", "Collections.unmodifiableCollection()"], answer: "Collections.unmodifiableCollection()", attempted: false, selected: "" },
  { num: 21, question: "Which method returns size of collection?", options: ["size()", "length()", "count()", "getSize()"], answer: "size()", attempted: false, selected: "" },
  { num: 22, question: "Which method checks if collection contains element?", options: ["contains()", "has()", "exists()", "check()"], answer: "contains()", attempted: false, selected: "" },
  { num: 23, question: "Which method removes element from collection?", options: ["remove()", "delete()", "discard()", "pop()"], answer: "remove()", attempted: false, selected: "" },
  { num: 24, question: "Which method clears all elements from collection?", options: ["clear()", "reset()", "deleteAll()", "removeAll()"], answer: "clear()", attempted: false, selected: "" },
  { num: 25, question: "Which method converts collection to array?", options: ["toArray()", "asArray()", "convertToArray()", "array()"], answer: "toArray()", attempted: false, selected: "" },
  { num: 26, question: "Which interface represents map of key-value pairs?", options: ["Map", "Dictionary", "HashMap", "Properties"], answer: "Map", attempted: false, selected: "" },
  { num: 27, question: "Which method gets value by key in map?", options: ["get()", "fetch()", "valueOf()", "lookup()"], answer: "get()", attempted: false, selected: "" },
  { num: 28, question: "Which method adds key-value pair in map?", options: ["put()", "add()", "insert()", "set()"], answer: "put()", attempted: false, selected: "" },
  { num: 29, question: "Which method removes key-value pair from map?", options: ["remove()", "delete()", "discard()", "unset()"], answer: "remove()", attempted: false, selected: "" },
  { num: 30, question: "Which method checks if map contains key?", options: ["containsKey()", "hasKey()", "existsKey()", "checkKey()"], answer: "containsKey()", attempted: false, selected: "" },
  { num: 31, question: "Which method checks if map contains value?", options: ["containsValue()", "hasValue()", "existsValue()", "checkValue()"], answer: "containsValue()", attempted: false, selected: "" },
  { num: 32, question: "Which class provides synchronized map?", options: ["Collections.synchronizedMap()", "HashMap", "Hashtable", "ConcurrentMap"], answer: "Collections.synchronizedMap()", attempted: false, selected: "" },
  { num: 33, question: "Which interface allows sorted map?", options: ["SortedMap", "Map", "TreeMap", "HashMap"], answer: "SortedMap", attempted: false, selected: "" },
  { num: 34, question: "Which class implements sorted map?", options: ["TreeMap", "HashMap", "LinkedHashMap", "ConcurrentHashMap"], answer: "TreeMap", attempted: false, selected: "" },
  { num: 35, question: "Which method returns first key in sorted map?", options: ["firstKey()", "getFirst()", "headKey()", "startKey()"], answer: "firstKey()", attempted: false, selected: "" },
  { num: 36, question: "Which method returns last key in sorted map?", options: ["lastKey()", "getLast()", "tailKey()", "endKey()"], answer: "lastKey()", attempted: false, selected: "" },
  { num: 37, question: "Which method returns submap from sorted map?", options: ["subMap()", "getSubMap()", "slice()", "range()"], answer: "subMap()", attempted: false, selected: "" },
  { num: 38, question: "Which interface allows set of unique keys?", options: ["Set", "Map", "HashMap", "SortedSet"], answer: "Set", attempted: false, selected: "" },
  { num: 39, question: "Which method adds element in set?", options: ["add()", "insert()", "put()", "set()"], answer: "add()", attempted: false, selected: "" },
  { num: 40, question: "Which method removes element from set?", options: ["remove()", "delete()", "discard()", "unset()"], answer: "remove()", attempted: false, selected: "" },
  { num: 41, question: "Which method checks if set contains element?", options: ["contains()", "has()", "exists()", "check()"], answer: "contains()", attempted: false, selected: "" },
  { num: 42, question: "Which interface allows queue operations?", options: ["Queue", "Deque", "List", "Stack"], answer: "Queue", attempted: false, selected: "" },
  { num: 43, question: "Which method adds element at end of queue?", options: ["offer()", "add()", "enqueue()", "push()"], answer: "offer()", attempted: false, selected: "" },
  { num: 44, question: "Which method removes element from head of queue?", options: ["poll()", "remove()", "dequeue()", "pop()"], answer: "poll()", attempted: false, selected: "" },
  { num: 45, question: "Which method retrieves head without removing?", options: ["peek()", "element()", "get()", "top()"], answer: "peek()", attempted: false, selected: "" },
  { num: 46, question: "Which interface represents double-ended queue?", options: ["Deque", "Queue", "Stack", "List"], answer: "Deque", attempted: false, selected: "" },
  { num: 47, question: "Which method adds element at front of deque?", options: ["addFirst()", "addFront()", "pushFront()", "offerFirst()"], answer: "addFirst()", attempted: false, selected: "" },
  { num: 48, question: "Which method adds element at end of deque?", options: ["addLast()", "addEnd()", "pushEnd()", "offerLast()"], answer: "addLast()", attempted: false, selected: "" },
  { num: 49, question: "Which method removes element from front of deque?", options: ["removeFirst()", "pollFirst()", "popFront()", "deleteFront()"], answer: "removeFirst()", attempted: false, selected: "" },
  { num: 50, question: "Which method removes element from end of deque?", options: ["removeLast()", "pollLast()", "popEnd()", "deleteEnd()"], answer: "removeLast()", attempted: false, selected: "" }
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