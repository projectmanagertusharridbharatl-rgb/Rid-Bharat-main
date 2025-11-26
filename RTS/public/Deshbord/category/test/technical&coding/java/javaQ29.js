const questions=
 [
  { num: 1, question: "Which keyword is used to explicitly call a constructor?", options: ["this", "super", "parent", "base"], answer: "this", attempted: false, selected: "" },
  { num: 2, question: "Which method returns hash code of an object?", options: ["hashCode()", "getHash()", "hash()", "code()"], answer: "hashCode()", attempted: false, selected: "" },
  { num: 3, question: "Which method compares two objects for equality?", options: ["equals()", "compare()", "match()", "isEqual()"], answer: "equals()", attempted: false, selected: "" },
  { num: 4, question: "Which method returns string representation of an object?", options: ["toString()", "stringify()", "asString()", "convert()"], answer: "toString()", attempted: false, selected: "" },
  { num: 5, question: "Which keyword is used to prevent inheritance of class?", options: ["final", "sealed", "abstract", "static"], answer: "final", attempted: false, selected: "" },
  { num: 6, question: "Which keyword defines a sealed class?", options: ["sealed", "final", "abstract", "locked"], answer: "sealed", attempted: false, selected: "" },
  { num: 7, question: "Which interface is used to implement comparable objects?", options: ["Comparable", "Comparator", "ComparableObject", "Sortable"], answer: "Comparable", attempted: false, selected: "" },
  { num: 8, question: "Which method defines natural ordering of objects?", options: ["compareTo()", "compare()", "equals()", "order()"], answer: "compareTo()", attempted: false, selected: "" },
  { num: 9, question: "Which interface is used for custom sorting?", options: ["Comparator", "Comparable", "Sortable", "Ordering"], answer: "Comparator", attempted: false, selected: "" },
  { num: 10, question: "Which class implements thread-safe queue?", options: ["ConcurrentLinkedQueue", "LinkedList", "ArrayDeque", "PriorityQueue"], answer: "ConcurrentLinkedQueue", attempted: false, selected: "" },
  { num: 11, question: "Which class implements delay queue?", options: ["DelayQueue", "PriorityQueue", "LinkedList", "ArrayDeque"], answer: "DelayQueue", attempted: false, selected: "" },
  { num: 12, question: "Which interface defines blocking queue?", options: ["BlockingQueue", "Queue", "Deque", "Collection"], answer: "BlockingQueue", attempted: false, selected: "" },
  { num: 13, question: "Which class implements concurrent deque?", options: ["ConcurrentLinkedDeque", "LinkedList", "ArrayDeque", "Deque"], answer: "ConcurrentLinkedDeque", attempted: false, selected: "" },
  { num: 14, question: "Which class is used to handle timer tasks?", options: ["Timer", "TaskScheduler", "Thread", "Executor"], answer: "Timer", attempted: false, selected: "" },
  { num: 15, question: "Which method schedules a task with delay?", options: ["schedule()", "submit()", "execute()", "run()"], answer: "schedule()", attempted: false, selected: "" },
  { num: 16, question: "Which class implements fixed-size thread pool?", options: ["Executors", "ExecutorService", "ThreadPool", "ScheduledExecutorService"], answer: "Executors", attempted: false, selected: "" },
  { num: 17, question: "Which method returns available processors?", options: ["availableProcessors()", "getCPU()", "cpuCount()", "processors()"], answer: "availableProcessors()", attempted: false, selected: "" },
  { num: 18, question: "Which class provides atomic boolean operations?", options: ["AtomicBoolean", "BooleanAtomic", "Boolean", "Atomic"], answer: "AtomicBoolean", attempted: false, selected: "" },
  { num: 19, question: "Which class provides atomic long operations?", options: ["AtomicLong", "LongAtomic", "Long", "Atomic"], answer: "AtomicLong", attempted: false, selected: "" },
  { num: 20, question: "Which interface represents read-only view of collection?", options: ["Iterable", "Collection", "List", "Unmodifiable"], answer: "Iterable", attempted: false, selected: "" },
  { num: 21, question: "Which method checks if collection contains element?", options: ["contains()", "has()", "exists()", "includes()"], answer: "contains()", attempted: false, selected: "" },
  { num: 22, question: "Which method removes all elements from collection?", options: ["clear()", "removeAll()", "deleteAll()", "empty()"], answer: "clear()", attempted: false, selected: "" },
  { num: 23, question: "Which method checks if collection is empty?", options: ["isEmpty()", "empty()", "size()==0", "checkEmpty()"], answer: "isEmpty()", attempted: false, selected: "" },
  { num: 24, question: "Which interface defines double-ended queue?", options: ["Deque", "Queue", "Stack", "List"], answer: "Deque", attempted: false, selected: "" },
  { num: 25, question: "Which class implements array-based deque?", options: ["ArrayDeque", "LinkedList", "PriorityQueue", "Stack"], answer: "ArrayDeque", attempted: false, selected: "" },
  { num: 26, question: "Which method retrieves first element from deque?", options: ["getFirst()", "peek()", "element()", "first()"], answer: "getFirst()", attempted: false, selected: "" },
  { num: 27, question: "Which method retrieves last element from deque?", options: ["getLast()", "peekLast()", "last()", "elementLast()"], answer: "getLast()", attempted: false, selected: "" },
  { num: 28, question: "Which method adds element at front of deque?", options: ["addFirst()", "push()", "insertFirst()", "offerFirst()"], answer: "addFirst()", attempted: false, selected: "" },
  { num: 29, question: "Which method adds element at end of deque?", options: ["addLast()", "offer()", "append()", "insertLast()"], answer: "addLast()", attempted: false, selected: "" },
  { num: 30, question: "Which method removes first element from deque?", options: ["removeFirst()", "poll()", "pop()", "deleteFirst()"], answer: "removeFirst()", attempted: false, selected: "" },
  { num: 31, question: "Which method removes last element from deque?", options: ["removeLast()", "pollLast()", "popLast()", "deleteLast()"], answer: "removeLast()", attempted: false, selected: "" },
  { num: 32, question: "Which method pushes element onto stack?", options: ["push()", "add()", "insert()", "offer()"], answer: "push()", attempted: false, selected: "" },
  { num: 33, question: "Which method pops element from stack?", options: ["pop()", "remove()", "delete()", "poll()"], answer: "pop()", attempted: false, selected: "" },
  { num: 34, question: "Which method peeks element from stack?", options: ["peek()", "top()", "get()", "element()"], answer: "peek()", attempted: false, selected: "" },
  { num: 35, question: "Which method converts collection to array?", options: ["toArray()", "array()", "asArray()", "convert()"], answer: "toArray()", attempted: false, selected: "" },
  { num: 36, question: "Which method iterates collection using lambda?", options: ["forEach()", "iterate()", "loop()", "apply()"], answer: "forEach()", attempted: false, selected: "" },
  { num: 37, question: "Which method filters collection elements?", options: ["stream().filter()", "filter()", "select()", "choose()"], answer: "stream().filter()", attempted: false, selected: "" },
  { num: 38, question: "Which method maps collection elements?", options: ["stream().map()", "map()", "convert()", "transform()"], answer: "stream().map()", attempted: false, selected: "" },
  { num: 39, question: "Which method reduces elements to single value?", options: ["stream().reduce()", "reduce()", "accumulate()", "combine()"], answer: "stream().reduce()", attempted: false, selected: "" },
  { num: 40, question: "Which method sorts stream elements?", options: ["stream().sorted()", "sorted()", "order()", "arrange()"], answer: "stream().sorted()", attempted: false, selected: "" },
  { num: 41, question: "Which method collects stream into list?", options: ["collect(Collectors.toList())", "toList()", "asList()", "collectList()"], answer: "collect(Collectors.toList())", attempted: false, selected: "" },
  { num: 42, question: "Which method collects stream into set?", options: ["collect(Collectors.toSet())", "toSet()", "asSet()", "collectSet()"], answer: "collect(Collectors.toSet())", attempted: false, selected: "" },
  { num: 43, question: "Which method limits stream elements?", options: ["limit()", "take()", "maxElements()", "restrict()"], answer: "limit()", attempted: false, selected: "" },
  { num: 44, question: "Which method skips first n stream elements?", options: ["skip()", "drop()", "ignore()", "removeFirst()"], answer: "skip()", attempted: false, selected: "" },
  { num: 45, question: "Which class supports optional values?", options: ["Optional", "Option", "Maybe", "Nullable"], answer: "Optional", attempted: false, selected: "" },
  { num: 46, question: "Which method checks if optional has value?", options: ["isPresent()", "hasValue()", "exists()", "isValue()"], answer: "isPresent()", attempted: false, selected: "" },
  { num: 47, question: "Which method retrieves value from optional?", options: ["get()", "value()", "getValue()", "retrieve()"], answer: "get()", attempted: false, selected: "" },
  { num: 48, question: "Which method provides default if optional empty?", options: ["orElse()", "default()", "or()", "fallback()"], answer: "orElse()", attempted: false, selected: "" },
  { num: 49, question: "Which method executes lambda if optional present?", options: ["ifPresent()", "executeIfPresent()", "runIfPresent()", "doIfPresent()"], answer: "ifPresent()", attempted: false, selected: "" },
  { num: 50, question: "Which method filters optional value?", options: ["filter()", "select()", "check()", "validate()"], answer: "filter()", attempted: false, selected: "" }
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