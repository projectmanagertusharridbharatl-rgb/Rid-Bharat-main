const questions = 
 [
  { num: 1, question: "Which of the following statements is true about Java?", options: ["Java is platform dependent", "Java supports multiple inheritance using classes", "Java supports operator overloading", "Java is platform independent"], answer: "Java is platform independent", attempted: false, selected: "" },
  { num: 2, question: "Which of these can store decimal values accurately?", options: ["float", "double", "BigDecimal", "int"], answer: "BigDecimal", attempted: false, selected: "" },
  { num: 3, question: "Which of the following is not a primitive data type?", options: ["byte", "boolean", "String", "char"], answer: "String", attempted: false, selected: "" },
  { num: 4, question: "Which method can be used to convert a string to lowercase?", options: ["toLowerCase()", "toLower()", "lowercase()", "convertLower()"], answer: "toLowerCase()", attempted: false, selected: "" },
  { num: 5, question: "Which keyword is used to define a constant variable?", options: ["const", "final", "static", "constant"], answer: "final", attempted: false, selected: "" },
  { num: 6, question: "Which of the following modifiers makes a variable belong to the class rather than an instance?", options: ["public", "private", "static", "final"], answer: "static", attempted: false, selected: "" },
  { num: 7, question: "Which method is used to compare two strings?", options: ["equals()", "==", "compare()", "same()"], answer: "equals()", attempted: false, selected: "" },
  { num: 8, question: "Which statement is used to exit from a loop?", options: ["return", "break", "continue", "exit"], answer: "break", attempted: false, selected: "" },
  { num: 9, question: "What is the default value of a local variable in Java?", options: ["0", "null", "false", "No default value"], answer: "No default value", attempted: false, selected: "" },
  { num: 10, question: "Which keyword is used to inherit an interface?", options: ["extends", "implements", "inherits", "uses"], answer: "implements", attempted: false, selected: "" },
  { num: 11, question: "Which of these can be overloaded?", options: ["Constructors", "Methods", "Both", "None"], answer: "Both", attempted: false, selected: "" },
  { num: 12, question: "What is the parent class of all exceptions?", options: ["Throwable", "Error", "Exception", "RuntimeException"], answer: "Throwable", attempted: false, selected: "" },
  { num: 13, question: "Which of the following is not a loop structure?", options: ["for", "while", "foreach", "repeat"], answer: "repeat", attempted: false, selected: "" },
  { num: 14, question: "What is the extension of a compiled Java file?", options: [".class", ".java", ".jar", ".exe"], answer: ".class", attempted: false, selected: "" },
  { num: 15, question: "Which keyword is used to call a superclass constructor?", options: ["base", "super", "this", "extends"], answer: "super", attempted: false, selected: "" },
  { num: 16, question: "Which class is used for mathematical operations?", options: ["Math", "Number", "Calculator", "Compute"], answer: "Math", attempted: false, selected: "" },
  { num: 17, question: "Which method is used to find the absolute value of a number?", options: ["abs()", "absolute()", "fabs()", "val()"], answer: "abs()", attempted: false, selected: "" },
  { num: 18, question: "Which keyword is used to handle multiple exceptions in one block?", options: ["multi", "or", "pipe", "None of these"], answer: "None of these", attempted: false, selected: "" },
  { num: 19, question: "Which exception occurs when accessing an array beyond its size?", options: ["NullPointerException", "IndexOutOfBoundsException", "IOException", "ArithmeticException"], answer: "IndexOutOfBoundsException", attempted: false, selected: "" },
  { num: 20, question: "Which method is used to find the length of an array in Java?", options: ["length", "size()", "count()", "getLength()"], answer: "length", attempted: false, selected: "" },
  { num: 21, question: "Which of these keywords is used to create a subclass?", options: ["extends", "inherits", "implements", "subclass"], answer: "extends", attempted: false, selected: "" },
  { num: 22, question: "What is used to handle runtime errors in Java?", options: ["try-catch", "if-else", "switch", "loops"], answer: "try-catch", attempted: false, selected: "" },
  { num: 23, question: "Which of these is a runtime exception?", options: ["IOException", "SQLException", "NullPointerException", "FileNotFoundException"], answer: "NullPointerException", attempted: false, selected: "" },
  { num: 24, question: "Which method is used to stop execution of a thread temporarily?", options: ["pause()", "wait()", "sleep()", "stop()"], answer: "sleep()", attempted: false, selected: "" },
  { num: 25, question: "Which keyword is used to check whether an object is an instance of a class?", options: ["instanceof", "is", "typeOf", "objectOf"], answer: "instanceof", attempted: false, selected: "" },
  { num: 26, question: "Which method is used to remove whitespace from both ends of a string?", options: ["trim()", "strip()", "clean()", "removeSpace()"], answer: "trim()", attempted: false, selected: "" },
  { num: 27, question: "Which of these classes is used for input in Java?", options: ["Scanner", "Console", "BufferedReader", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 28, question: "What does JDK stand for?", options: ["Java Development Kit", "Java Deployment Kit", "Java Debug Kit", "Java Data Kit"], answer: "Java Development Kit", attempted: false, selected: "" },
  { num: 29, question: "Which component of Java is responsible for bytecode execution?", options: ["JDK", "JVM", "JRE", "Compiler"], answer: "JVM", attempted: false, selected: "" },
  { num: 30, question: "Which of these is not a valid keyword in Java?", options: ["volatile", "synchronized", "unsigned", "transient"], answer: "unsigned", attempted: false, selected: "" },
  { num: 31, question: "Which of these allows us to store key-value pairs?", options: ["List", "Map", "Set", "Array"], answer: "Map", attempted: false, selected: "" },
  { num: 32, question: "Which keyword is used to define an enumeration?", options: ["enum", "enumerate", "list", "define"], answer: "enum", attempted: false, selected: "" },
  { num: 33, question: "Which interface defines a collection that doesn’t allow duplicates?", options: ["Set", "List", "Queue", "Stack"], answer: "Set", attempted: false, selected: "" },
  { num: 34, question: "Which collection class maintains insertion order?", options: ["HashSet", "TreeSet", "LinkedHashSet", "PriorityQueue"], answer: "LinkedHashSet", attempted: false, selected: "" },
  { num: 35, question: "Which keyword is used to create a package?", options: ["package", "namespace", "import", "include"], answer: "package", attempted: false, selected: "" },
  { num: 36, question: "Which method must be implemented in all Java applets?", options: ["start()", "main()", "init()", "run()"], answer: "init()", attempted: false, selected: "" },
  { num: 37, question: "Which of the following cannot be declared abstract?", options: ["Class", "Method", "Variable", "Interface"], answer: "Variable", attempted: false, selected: "" },
  { num: 38, question: "Which of the following is true about interfaces?", options: ["They can have constructors", "They can have final methods", "They can contain abstract methods", "They can be instantiated"], answer: "They can contain abstract methods", attempted: false, selected: "" },
  { num: 39, question: "Which of these keywords can be used to prevent method overriding?", options: ["final", "static", "private", "Both final and static"], answer: "Both final and static", attempted: false, selected: "" },
  { num: 40, question: "Which of these statements about constructors is false?", options: ["Constructors can be overloaded", "Constructors can be inherited", "Constructors have no return type", "Constructors initialize objects"], answer: "Constructors can be inherited", attempted: false, selected: "" },
  { num: 41, question: "Which type of variable is shared among all objects of a class?", options: ["instance variable", "local variable", "static variable", "final variable"], answer: "static variable", attempted: false, selected: "" },
  { num: 42, question: "Which keyword is used to refer to the parent class object?", options: ["super", "this", "parent", "base"], answer: "super", attempted: false, selected: "" },
  { num: 43, question: "Which exception is thrown when dividing by zero in integers?", options: ["ArithmeticException", "NumberFormatException", "IllegalArgumentException", "RuntimeException"], answer: "ArithmeticException", attempted: false, selected: "" },
  { num: 44, question: "Which of these can be used to create immutable objects?", options: ["final", "static", "volatile", "abstract"], answer: "final", attempted: false, selected: "" },
  { num: 45, question: "Which operator is used to access static members?", options: [".", "::", "->", ":"], answer: ".", attempted: false, selected: "" },
  { num: 46, question: "Which statement transfers control to another part of the program?", options: ["return", "break", "goto", "continue"], answer: "goto", attempted: false, selected: "" },
  { num: 47, question: "Which method is used to compare two objects?", options: ["compareTo()", "equals()", "compare()", "same()"], answer: "equals()", attempted: false, selected: "" },
  { num: 48, question: "Which exception must be caught or declared?", options: ["Checked", "Unchecked", "Runtime", "None"], answer: "Checked", attempted: false, selected: "" },
  { num: 49, question: "Which of these statements is false about Java arrays?", options: ["Arrays are objects", "Arrays are fixed in size", "Arrays can grow dynamically", "Array index starts at 0"], answer: "Arrays can grow dynamically", attempted: false, selected: "" },
  { num: 50, question: "Which keyword is used to define a subclass?", options: ["extends", "inherits", "derives", "implements"], answer: "extends", attempted: false, selected: "" }
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