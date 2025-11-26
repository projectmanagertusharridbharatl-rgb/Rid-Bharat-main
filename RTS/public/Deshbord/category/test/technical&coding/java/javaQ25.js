const questions=
  [
  { num: 1, question: "Which class represents a mutable sequence of characters?", options: ["StringBuilder", "StringBuffer", "String", "CharSequence"], answer: "StringBuilder", attempted: false, selected: "" },
  { num: 2, question: "Which class represents a thread-safe mutable sequence of characters?", options: ["StringBuffer", "StringBuilder", "String", "CharSequence"], answer: "StringBuffer", attempted: false, selected: "" },
  { num: 3, question: "Which method appends string to StringBuilder?", options: ["append()", "add()", "concat()", "join()"], answer: "append()", attempted: false, selected: "" },
  { num: 4, question: "Which method inserts string at given index?", options: ["insert()", "addAt()", "put()", "set()"], answer: "insert()", attempted: false, selected: "" },
  { num: 5, question: "Which method deletes characters from sequence?", options: ["delete()", "remove()", "cut()", "erase()"], answer: "delete()", attempted: false, selected: "" },
  { num: 6, question: "Which method reverses the sequence?", options: ["reverse()", "invert()", "flip()", "back()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 7, question: "Which method returns length of sequence?", options: ["length()", "size()", "count()", "getLength()"], answer: "length()", attempted: false, selected: "" },
  { num: 8, question: "Which interface is implemented by StringBuilder?", options: ["Serializable", "CharSequence", "Comparable", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 9, question: "Which method compares two strings ignoring case?", options: ["equalsIgnoreCase()", "compareToIgnoreCase()", "compare()", "equals()"], answer: "equalsIgnoreCase()", attempted: false, selected: "" },
  { num: 10, question: "Which method returns Unicode value of character?", options: ["codePointAt()", "charAt()", "getCode()", "unicodeValue()"], answer: "codePointAt()", attempted: false, selected: "" },
  { num: 11, question: "Which method returns substring from string?", options: ["substring()", "substr()", "getSubString()", "cut()"], answer: "substring()", attempted: false, selected: "" },
  { num: 12, question: "Which method trims whitespace from string?", options: ["trim()", "strip()", "removeSpaces()", "allOfThese"], answer: "trim()", attempted: false, selected: "" },
  { num: 13, question: "Which method replaces characters in string?", options: ["replace()", "substitute()", "change()", "set()"], answer: "replace()", attempted: false, selected: "" },
  { num: 14, question: "Which method splits string by delimiter?", options: ["split()", "divide()", "partition()", "separate()"], answer: "split()", attempted: false, selected: "" },
  { num: 15, question: "Which method checks if string starts with prefix?", options: ["startsWith()", "beginsWith()", "hasPrefix()", "checkStart()"], answer: "startsWith()", attempted: false, selected: "" },
  { num: 16, question: "Which method checks if string ends with suffix?", options: ["endsWith()", "hasSuffix()", "finishWith()", "checkEnd()"], answer: "endsWith()", attempted: false, selected: "" },
  { num: 17, question: "Which method converts string to character array?", options: ["toCharArray()", "toArray()", "getChars()", "asArray()"], answer: "toCharArray()", attempted: false, selected: "" },
  { num: 18, question: "Which method compares two strings lexicographically?", options: ["compareTo()", "equals()", "compare()", "match()"], answer: "compareTo()", attempted: false, selected: "" },
  { num: 19, question: "Which method checks if string contains substring?", options: ["contains()", "has()", "find()", "indexOf()"], answer: "contains()", attempted: false, selected: "" },
  { num: 20, question: "Which method returns index of substring?", options: ["indexOf()", "search()", "findIndex()", "position()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 21, question: "Which method returns last index of character?", options: ["lastIndexOf()", "indexOfLast()", "findLast()", "searchLast()"], answer: "lastIndexOf()", attempted: false, selected: "" },
  { num: 22, question: "Which method converts string to lowercase?", options: ["toLowerCase()", "lowercase()", "toLower()", "allOfThese"], answer: "toLowerCase()", attempted: false, selected: "" },
  { num: 23, question: "Which method converts string to uppercase?", options: ["toUpperCase()", "uppercase()", "toUpper()", "allOfThese"], answer: "toUpperCase()", attempted: false, selected: "" },
  { num: 24, question: "Which method returns true if string is empty?", options: ["isEmpty()", "empty()", "hasContent()", "length()==0"], answer: "isEmpty()", attempted: false, selected: "" },
  { num: 25, question: "Which class is used for regex pattern?", options: ["Pattern", "Matcher", "Regex", "RegExp"], answer: "Pattern", attempted: false, selected: "" },
  { num: 26, question: "Which class is used to match regex?", options: ["Matcher", "Pattern", "RegExp", "Regex"], answer: "Matcher", attempted: false, selected: "" },
  { num: 27, question: "Which method checks regex match?", options: ["matches()", "check()", "validate()", "find()"], answer: "matches()", attempted: false, selected: "" },
  { num: 28, question: "Which method finds regex occurrences?", options: ["find()", "matches()", "search()", "allMatches()"], answer: "find()", attempted: false, selected: "" },
  { num: 29, question: "Which method replaces regex matches?", options: ["replaceAll()", "replace()", "substitute()", "replaceFirst()"], answer: "replaceAll()", attempted: false, selected: "" },
  { num: 30, question: "Which method replaces first regex match?", options: ["replaceFirst()", "replace()", "replaceAll()", "substitute()"], answer: "replaceFirst()", attempted: false, selected: "" },
  { num: 31, question: "Which class converts string to primitive?", options: ["Wrapper classes", "String", "Scanner", "Object"], answer: "Wrapper classes", attempted: false, selected: "" },
  { num: 32, question: "Which method parses string to int?", options: ["Integer.parseInt()", "Integer.valueOf()", "parseInt()", "toInt()"], answer: "Integer.parseInt()", attempted: false, selected: "" },
  { num: 33, question: "Which method parses string to double?", options: ["Double.parseDouble()", "parseDouble()", "Double.valueOf()", "toDouble()"], answer: "Double.parseDouble()", attempted: false, selected: "" },
  { num: 34, question: "Which class converts primitive to string?", options: ["String.valueOf()", "Integer.toString()", "Double.toString()", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 35, question: "Which method returns class of object?", options: ["getClass()", "classOf()", "getType()", "objectClass()"], answer: "getClass()", attempted: false, selected: "" },
  { num: 36, question: "Which method returns hashcode of object?", options: ["hashCode()", "getHash()", "code()", "getCode()"], answer: "hashCode()", attempted: false, selected: "" },
  { num: 37, question: "Which method checks equality of objects?", options: ["equals()", "==", "isEqual()", "match()"], answer: "equals()", attempted: false, selected: "" },
  { num: 38, question: "Which method returns string representation of object?", options: ["toString()", "asString()", "stringify()", "getString()"], answer: "toString()", attempted: false, selected: "" },
  { num: 39, question: "Which method clones object?", options: ["clone()", "copy()", "duplicate()", "replicate()"], answer: "clone()", attempted: false, selected: "" },
  { num: 40, question: "Which interface supports object cloning?", options: ["Cloneable", "Serializable", "Comparable", "Runnable"], answer: "Cloneable", attempted: false, selected: "" },
  { num: 41, question: "Which method finalizes object before GC?", options: ["finalize()", "cleanup()", "destroy()", "onDelete()"], answer: "finalize()", attempted: false, selected: "" },
  { num: 42, question: "Which method requests garbage collection?", options: ["System.gc()", "Runtime.gc()", "collect()", "allOfThese"], answer: "System.gc()", attempted: false, selected: "" },
  { num: 43, question: "Which class provides runtime info?", options: ["Runtime", "System", "Process", "Thread"], answer: "Runtime", attempted: false, selected: "" },
  { num: 44, question: "Which method returns available processors?", options: ["availableProcessors()", "getProcessors()", "processorCount()", "allOfThese"], answer: "availableProcessors()", attempted: false, selected: "" },
  { num: 45, question: "Which method returns free memory in JVM?", options: ["freeMemory()", "getFreeMemory()", "memoryAvailable()", "allOfThese"], answer: "freeMemory()", attempted: false, selected: "" },
  { num: 46, question: "Which method returns total memory in JVM?", options: ["totalMemory()", "getTotalMemory()", "memoryTotal()", "allOfThese"], answer: "totalMemory()", attempted: false, selected: "" },
  { num: 47, question: "Which class is used to execute external process?", options: ["ProcessBuilder", "Runtime", "Process", "System"], answer: "ProcessBuilder", attempted: false, selected: "" },
  { num: 48, question: "Which method starts process with ProcessBuilder?", options: ["start()", "run()", "exec()", "launch()"], answer: "start()", attempted: false, selected: "" },
  { num: 49, question: "Which class manages environment variables?", options: ["System", "Runtime", "ProcessBuilder", "Env"], answer: "System", attempted: false, selected: "" },
  { num: 50, question: "Which method returns available memory after GC?", options: ["gc()", "freeMemory()", "totalMemory()", "maxMemory()"], answer: "freeMemory()", attempted: false, selected: "" }
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