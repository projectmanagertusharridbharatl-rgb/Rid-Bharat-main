const questions=
  [
  { num: 1, question: "Which interface is used for sorting collections?", options: ["Comparable", "Comparator", "Iterable", "Collection"], answer: "Comparator", attempted: false, selected: "" },
  { num: 2, question: "Which method compares two objects using Comparator?", options: ["compare()", "compareTo()", "equals()", "match()"], answer: "compare()", attempted: false, selected: "" },
  { num: 3, question: "Which interface is implemented by classes that can be iterated?", options: ["Iterable", "Iterator", "Collection", "List"], answer: "Iterable", attempted: false, selected: "" },
  { num: 4, question: "Which interface is used to iterate over a collection?", options: ["Iterator", "Iterable", "Enumeration", "ListIterator"], answer: "Iterator", attempted: false, selected: "" },
  { num: 5, question: "Which method checks if collection has more elements in Iterator?", options: ["hasNext()", "next()", "more()", "isEmpty()"], answer: "hasNext()", attempted: false, selected: "" },
  { num: 6, question: "Which method returns next element from Iterator?", options: ["next()", "getNext()", "nextElement()", "element()"], answer: "next()", attempted: false, selected: "" },
  { num: 7, question: "Which interface allows bidirectional iteration?", options: ["ListIterator", "Iterator", "Iterable", "Enumeration"], answer: "ListIterator", attempted: false, selected: "" },
  { num: 8, question: "Which method adds element to collection?", options: ["add()", "insert()", "put()", "append()"], answer: "add()", attempted: false, selected: "" },
  { num: 9, question: "Which method removes element from collection?", options: ["remove()", "delete()", "discard()", "pop()"], answer: "remove()", attempted: false, selected: "" },
  { num: 10, question: "Which collection interface is implemented by HashSet?", options: ["Set", "List", "Map", "Queue"], answer: "Set", attempted: false, selected: "" },
  { num: 11, question: "Which collection class maintains insertion order?", options: ["LinkedHashSet", "HashSet", "TreeSet", "ArrayList"], answer: "LinkedHashSet", attempted: false, selected: "" },
  { num: 12, question: "Which collection class sorts elements naturally?", options: ["TreeSet", "HashSet", "LinkedList", "ArrayList"], answer: "TreeSet", attempted: false, selected: "" },
  { num: 13, question: "Which method checks if collection contains element?", options: ["contains()", "has()", "exists()", "includes()"], answer: "contains()", attempted: false, selected: "" },
  { num: 14, question: "Which method removes all elements from collection?", options: ["clear()", "removeAll()", "deleteAll()", "empty()"], answer: "clear()", attempted: false, selected: "" },
  { num: 15, question: "Which method returns size of collection?", options: ["size()", "length()", "count()", "getSize()"], answer: "size()", attempted: false, selected: "" },
  { num: 16, question: "Which interface represents a key-value mapping?", options: ["Map", "Set", "List", "Collection"], answer: "Map", attempted: false, selected: "" },
  { num: 17, question: "Which method adds key-value pair in Map?", options: ["put()", "add()", "insert()", "set()"], answer: "put()", attempted: false, selected: "" },
  { num: 18, question: "Which method returns value for key in Map?", options: ["get()", "find()", "lookup()", "value()"], answer: "get()", attempted: false, selected: "" },
  { num: 19, question: "Which method removes key-value pair in Map?", options: ["remove()", "delete()", "discard()", "pop()"], answer: "remove()", attempted: false, selected: "" },
  { num: 20, question: "Which interface is implemented by HashMap?", options: ["Map", "Set", "List", "Collection"], answer: "Map", attempted: false, selected: "" },
  { num: 21, question: "Which Map implementation preserves insertion order?", options: ["LinkedHashMap", "HashMap", "TreeMap", "Hashtable"], answer: "LinkedHashMap", attempted: false, selected: "" },
  { num: 22, question: "Which Map implementation sorts keys?", options: ["TreeMap", "HashMap", "LinkedHashMap", "Hashtable"], answer: "TreeMap", attempted: false, selected: "" },
  { num: 23, question: "Which interface represents a queue?", options: ["Queue", "Deque", "Stack", "List"], answer: "Queue", attempted: false, selected: "" },
  { num: 24, question: "Which method adds element at end of queue?", options: ["offer()", "add()", "insert()", "enqueue()"], answer: "offer()", attempted: false, selected: "" },
  { num: 25, question: "Which method removes element from front of queue?", options: ["poll()", "remove()", "dequeue()", "pop()"], answer: "poll()", attempted: false, selected: "" },
  { num: 26, question: "Which interface represents double-ended queue?", options: ["Deque", "Queue", "Stack", "List"], answer: "Deque", attempted: false, selected: "" },
  { num: 27, question: "Which class implements Deque?", options: ["ArrayDeque", "LinkedList", "PriorityQueue", "Stack"], answer: "ArrayDeque", attempted: false, selected: "" },
  { num: 28, question: "Which interface represents a priority queue?", options: ["Queue", "PriorityQueue", "Deque", "List"], answer: "Queue", attempted: false, selected: "" },
  { num: 29, question: "Which class implements priority queue?", options: ["PriorityQueue", "ArrayDeque", "LinkedList", "Stack"], answer: "PriorityQueue", attempted: false, selected: "" },
  { num: 30, question: "Which class represents LIFO structure?", options: ["Stack", "Queue", "ArrayList", "LinkedList"], answer: "Stack", attempted: false, selected: "" },
  { num: 31, question: "Which method pushes element onto stack?", options: ["push()", "add()", "insert()", "offer()"], answer: "push()", attempted: false, selected: "" },
  { num: 32, question: "Which method pops element from stack?", options: ["pop()", "remove()", "delete()", "poll()"], answer: "pop()", attempted: false, selected: "" },
  { num: 33, question: "Which method peeks top element of stack?", options: ["peek()", "top()", "element()", "front()"], answer: "peek()", attempted: false, selected: "" },
  { num: 34, question: "Which interface represents set of unique elements?", options: ["Set", "List", "Queue", "Map"], answer: "Set", attempted: false, selected: "" },
  { num: 35, question: "Which class implements Set and sorts elements?", options: ["TreeSet", "HashSet", "LinkedHashSet", "ArrayList"], answer: "TreeSet", attempted: false, selected: "" },
  { num: 36, question: "Which class implements Set without duplicates and order not guaranteed?", options: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"], answer: "HashSet", attempted: false, selected: "" },
  { num: 37, question: "Which class implements Set with insertion order preserved?", options: ["LinkedHashSet", "TreeSet", "HashSet", "ArrayList"], answer: "LinkedHashSet", attempted: false, selected: "" },
  { num: 38, question: "Which class provides synchronized map?", options: ["Hashtable", "HashMap", "TreeMap", "LinkedHashMap"], answer: "Hashtable", attempted: false, selected: "" },
  { num: 39, question: "Which class provides synchronized set?", options: ["Collections.synchronizedSet()", "HashSet", "TreeSet", "LinkedHashSet"], answer: "Collections.synchronizedSet()", attempted: false, selected: "" },
  { num: 40, question: "Which class provides unmodifiable collections?", options: ["Collections.unmodifiableList()", "HashSet", "ArrayList", "LinkedList"], answer: "Collections.unmodifiableList()", attempted: false, selected: "" },
  { num: 41, question: "Which class provides synchronized list?", options: ["Collections.synchronizedList()", "ArrayList", "LinkedList", "Vector"], answer: "Collections.synchronizedList()", attempted: false, selected: "" },
  { num: 42, question: "Which class is legacy synchronized vector?", options: ["Vector", "ArrayList", "LinkedList", "Stack"], answer: "Vector", attempted: false, selected: "" },
  { num: 43, question: "Which class is legacy synchronized stack?", options: ["Stack", "Vector", "ArrayDeque", "ArrayList"], answer: "Stack", attempted: false, selected: "" },
  { num: 44, question: "Which method reverses order of elements in list?", options: ["Collections.reverse()", "list.reverse()", "invert()", "allOfThese"], answer: "Collections.reverse()", attempted: false, selected: "" },
  { num: 45, question: "Which method shuffles elements of list?", options: ["Collections.shuffle()", "shuffle()", "mix()", "allOfThese"], answer: "Collections.shuffle()", attempted: false, selected: "" },
  { num: 46, question: "Which method sorts list elements?", options: ["Collections.sort()", "list.sort()", "sort()", "allOfThese"], answer: "Collections.sort()", attempted: false, selected: "" },
  { num: 47, question: "Which method finds max element in collection?", options: ["Collections.max()", "max()", "findMax()", "allOfThese"], answer: "Collections.max()", attempted: false, selected: "" },
  { num: 48, question: "Which method finds min element in collection?", options: ["Collections.min()", "min()", "findMin()", "allOfThese"], answer: "Collections.min()", attempted: false, selected: "" },
  { num: 49, question: "Which method swaps two elements in list?", options: ["Collections.swap()", "swap()", "exchange()", "allOfThese"], answer: "Collections.swap()", attempted: false, selected: "" },
  { num: 50, question: "Which method copies elements from source list to destination list?", options: ["Collections.copy()", "copy()", "clone()", "allOfThese"], answer: "Collections.copy()", attempted: false, selected: "" }
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