const questions =[
  { num: 1, question: "Which method in Object class returns the hash code of an object?", options: ["hashCode()", "toString()", "equals()", "getClass()"], answer: "hashCode()", attempted: false, selected: "" },
  { num: 2, question: "Which interface represents a function with input and output?", options: ["Function", "Consumer", "Supplier", "Predicate"], answer: "Function", attempted: false, selected: "" },
  { num: 3, question: "Which method in Collections sorts list in natural order?", options: ["sort()", "reverse()", "shuffle()", "binarySearch()"], answer: "sort()", attempted: false, selected: "" },
  { num: 4, question: "Which annotation suppresses compiler warnings?", options: ["@SuppressWarnings", "@Deprecated", "@Override", "@FunctionalInterface"], answer: "@SuppressWarnings", attempted: false, selected: "" },
  { num: 5, question: "Which method in StringBuilder reverses content?", options: ["reverse()", "invert()", "flip()", "swap()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 6, question: "Which exception occurs when thread pool is exhausted?", options: ["RejectedExecutionException", "InterruptedException", "IllegalStateException", "RuntimeException"], answer: "RejectedExecutionException", attempted: false, selected: "" },
  { num: 7, question: "Which method splits string based on regex?", options: ["split()", "divide()", "partition()", "slice()"], answer: "split()", attempted: false, selected: "" },
  { num: 8, question: "Which method returns unmodifiable view of map?", options: ["Collections.unmodifiableMap()", "Map.of()", "Map.copyOf()", "Both a and c"], answer: "Both a and c", attempted: false, selected: "" },
  { num: 9, question: "Which interface allows lambda with two inputs and no return?", options: ["BiConsumer", "Consumer", "Supplier", "Function"], answer: "BiConsumer", attempted: false, selected: "" },
  { num: 10, question: "Which method in Arrays binary search requires sorted array?", options: ["binarySearch()", "search()", "indexOf()", "find()"], answer: "binarySearch()", attempted: false, selected: "" },
  { num: 11, question: "Which annotation marks class as immutable?", options: ["@Immutable", "@FunctionalInterface", "@Deprecated", "@Override"], answer: "@Immutable", attempted: false, selected: "" },
  { num: 12, question: "Which method removes duplicates from Stream?", options: ["distinct()", "unique()", "filter()", "map()"], answer: "distinct()", attempted: false, selected: "" },
  { num: 13, question: "Which interface allows lambda with no arguments and returns value?", options: ["Supplier", "Function", "Consumer", "Predicate"], answer: "Supplier", attempted: false, selected: "" },
  { num: 14, question: "Which method joins multiple strings with delimiter?", options: ["String.join()", "concat()", "merge()", "append()"], answer: "String.join()", attempted: false, selected: "" },
  { num: 15, question: "Which method performs action only if Optional has value?", options: ["ifPresent()", "get()", "orElse()", "orElseGet()"], answer: "ifPresent()", attempted: false, selected: "" },
  { num: 16, question: "Which method in CompletableFuture waits for completion without exception?", options: ["join()", "get()", "complete()", "completeExceptionally()"], answer: "join()", attempted: false, selected: "" },
  { num: 17, question: "Which annotation documents intended API deprecation?", options: ["@Deprecated", "@Override", "@FunctionalInterface", "@SafeVarargs"], answer: "@Deprecated", attempted: false, selected: "" },
  { num: 18, question: "Which method in Stream limits number of elements?", options: ["limit()", "skip()", "filter()", "map()"], answer: "limit()", attempted: false, selected: "" },
  { num: 19, question: "Which exception occurs for invalid object deserialization?", options: ["InvalidClassException", "IOException", "ClassNotFoundException", "RuntimeException"], answer: "InvalidClassException", attempted: false, selected: "" },
  { num: 20, question: "Which interface allows lambda with input and boolean return?", options: ["Predicate", "Consumer", "Supplier", "Function"], answer: "Predicate", attempted: false, selected: "" },
  { num: 21, question: "Which method converts primitive stream to boxed Stream?", options: ["boxed()", "map()", "collect()", "flatMap()"], answer: "boxed()", attempted: false, selected: "" },
  { num: 22, question: "Which method removes element from Collection if predicate matches?", options: ["removeIf()", "filter()", "retainAll()", "deleteIf()"], answer: "removeIf()", attempted: false, selected: "" },
  { num: 23, question: "Which collection maintains natural ordering of elements?", options: ["TreeSet", "HashSet", "LinkedHashSet", "ArrayList"], answer: "TreeSet", attempted: false, selected: "" },
  { num: 24, question: "Which method converts Stream to List?", options: ["collect(Collectors.toList())", "toArray()", "forEach()", "map()"], answer: "collect(Collectors.toList())", attempted: false, selected: "" },
  { num: 25, question: "Which exception occurs if Optional.get() is empty?", options: ["NoSuchElementException", "NullPointerException", "IllegalStateException", "RuntimeException"], answer: "NoSuchElementException", attempted: false, selected: "" },
  { num: 26, question: "Which annotation indicates that method parameters can accept null?", options: ["@Nullable", "@NonNull", "@NotNull", "@Deprecated"], answer: "@Nullable", attempted: false, selected: "" },
  { num: 27, question: "Which method returns Set view of keys in Map?", options: ["keySet()", "values()", "entrySet()", "allKeys()"], answer: "keySet()", attempted: false, selected: "" },
  { num: 28, question: "Which interface allows lambda with two inputs and return value?", options: ["BiFunction", "Function", "Consumer", "Supplier"], answer: "BiFunction", attempted: false, selected: "" },
  { num: 29, question: "Which method converts Stream to Map with key mapper?", options: ["Collectors.toMap()", "collect()", "map()", "forEach()"], answer: "Collectors.toMap()", attempted: false, selected: "" },
  { num: 30, question: "Which method returns array of Map entries?", options: ["entrySet().toArray()", "keySet().toArray()", "values().toArray()", "toArray()"], answer: "entrySet().toArray()", attempted: false, selected: "" },
  { num: 31, question: "Which method retrieves last element from Deque?", options: ["getLast()", "peekLast()", "pollLast()", "removeLast()"], answer: "getLast()", attempted: false, selected: "" },
  { num: 32, question: "Which method in Collections rotates list elements?", options: ["rotate()", "shift()", "swap()", "shuffle()"], answer: "rotate()", attempted: false, selected: "" },
  { num: 33, question: "Which method returns sum of IntStream?", options: ["sum()", "reduce()", "collect()", "count()"], answer: "sum()", attempted: false, selected: "" },
  { num: 34, question: "Which method in Arrays fills array with value?", options: ["fill()", "setAll()", "replaceAll()", "copyOf()"], answer: "fill()", attempted: false, selected: "" },
  { num: 35, question: "Which method in ThreadFactory creates new thread?", options: ["newThread()", "createThread()", "startThread()", "execute()"], answer: "newThread()", attempted: false, selected: "" },
  { num: 36, question: "Which method removes element from List by value?", options: ["remove(Object)", "remove(int)", "delete()", "discard()"], answer: "remove(Object)", attempted: false, selected: "" },
  { num: 37, question: "Which Stream method skips first n elements?", options: ["skip()", "limit()", "filter()", "map()"], answer: "skip()", attempted: false, selected: "" },
  { num: 38, question: "Which exception occurs when invoking method via reflection incorrectly?", options: ["InvocationTargetException", "IllegalAccessException", "NoSuchMethodException", "RuntimeException"], answer: "InvocationTargetException", attempted: false, selected: "" },
  { num: 39, question: "Which method converts Map values to List?", options: ["new ArrayList<>(map.values())", "map.values().toList()", "collect()", "stream().collect()"], answer: "new ArrayList<>(map.values())", attempted: false, selected: "" },
  { num: 40, question: "Which method in Comparator reverses order of comparison?", options: ["reversed()", "compare()", "thenComparing()", "naturalOrder()"], answer: "reversed()", attempted: false, selected: "" },
  { num: 41, question: "Which annotation documents that field should not be serialized?", options: ["@Transient", "@Deprecated", "@Override", "@FunctionalInterface"], answer: "@Transient", attempted: false, selected: "" },
  { num: 42, question: "Which interface represents operation with two inputs and no return?", options: ["BiConsumer", "Consumer", "Supplier", "Function"], answer: "BiConsumer", attempted: false, selected: "" },
  { num: 43, question: "Which method returns maximum element from Stream?", options: ["max()", "min()", "reduce()", "sorted()"], answer: "max()", attempted: false, selected: "" },
  { num: 44, question: "Which annotation marks method for unchecked warnings suppression?", options: ["@SafeVarargs", "@SuppressWarnings", "@Override", "@FunctionalInterface"], answer: "@SafeVarargs", attempted: false, selected: "" },
  { num: 45, question: "Which method ensures safe concurrent addition in list?", options: ["CopyOnWriteArrayList.add()", "ArrayList.add()", "Vector.add()", "LinkedList.add()"], answer: "CopyOnWriteArrayList.add()", attempted: false, selected: "" },
  { num: 46, question: "Which method in ForkJoinPool executes task recursively?", options: ["invokeAll()", "fork()", "join()", "submit()"], answer: "invokeAll()", attempted: false, selected: "" },
  { num: 47, question: "Which method retrieves first element from Deque?", options: ["getFirst()", "peekFirst()", "pollFirst()", "removeFirst()"], answer: "getFirst()", attempted: false, selected: "" },
  { num: 48, question: "Which exception occurs when casting primitive wrapper incorrectly?", options: ["ClassCastException", "ArithmeticException", "IllegalStateException", "RuntimeException"], answer: "ClassCastException", attempted: false, selected: "" },
  { num: 49, question: "Which Stream method combines all elements to single value?", options: ["reduce()", "collect()", "map()", "filter()"], answer: "reduce()", attempted: false, selected: "" },
  { num: 50, question: "Which annotation marks field as read-only after initialization?", options: ["@Final", "@Transient", "@Immutable", "@Deprecated"], answer: "@Final", attempted: false, selected: "" }
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