const questions = [
  { num: 1, question: "Which method is used to find the length of a string in Java?", options: ["getSize()", "length()", "size()", "getLength()"], answer: "length()", attempted: false, selected: "" },
  { num: 2, question: "Which of the following is not a keyword in Java?", options: ["static", "Boolean", "final", "super"], answer: "Boolean", attempted: false, selected: "" },
  { num: 3, question: "What is the default value of a boolean variable in Java?", options: ["true", "false", "0", "null"], answer: "false", attempted: false, selected: "" },
  { num: 4, question: "Which of the following is used to handle exceptions in Java?", options: ["try-catch", "goto", "if-else", "switch"], answer: "try-catch", attempted: false, selected: "" },
  { num: 5, question: "Which keyword is used to inherit a class in Java?", options: ["inherit", "extends", "implements", "import"], answer: "extends", attempted: false, selected: "" },
  { num: 6, question: "Which operator is used to compare two values in Java?", options: ["=", "==", "equals", "!="], answer: "==", attempted: false, selected: "" },
  { num: 7, question: "What is the size of an int data type in Java?", options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"], answer: "4 bytes", attempted: false, selected: "" },
  { num: 8, question: "Which of these is a reference data type?", options: ["int", "float", "String", "double"], answer: "String", attempted: false, selected: "" },
  { num: 9, question: "Which keyword is used to define an interface in Java?", options: ["interface", "class", "implements", "extends"], answer: "interface", attempted: false, selected: "" },
  { num: 10, question: "What is the parent class of all classes in Java?", options: ["Parent", "System", "Object", "Class"], answer: "Object", attempted: false, selected: "" },
  { num: 11, question: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do-while", "foreach"], answer: "do-while", attempted: false, selected: "" },
  { num: 12, question: "Which access modifier makes members accessible only within the same class?", options: ["public", "private", "protected", "default"], answer: "private", attempted: false, selected: "" },
  { num: 13, question: "Which of these is not a valid data type in Java?", options: ["byte", "short", "real", "long"], answer: "real", attempted: false, selected: "" },
  { num: 14, question: "What is used to create an object in Java?", options: ["create", "new", "object", "construct"], answer: "new", attempted: false, selected: "" },
  { num: 15, question: "Which method is called when an object is created?", options: ["main()", "start()", "constructor", "init()"], answer: "constructor", attempted: false, selected: "" },
  { num: 16, question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Visual Machine", "Java Variable Model", "Java Version Manager"], answer: "Java Virtual Machine", attempted: false, selected: "" },
  { num: 17, question: "Which of these is not a looping statement?", options: ["for", "while", "repeat", "do-while"], answer: "repeat", attempted: false, selected: "" },
  { num: 18, question: "Which keyword is used to prevent method overriding?", options: ["const", "final", "static", "volatile"], answer: "final", attempted: false, selected: "" },
  { num: 19, question: "Which method is the entry point of any Java program?", options: ["start()", "init()", "run()", "main()"], answer: "main()", attempted: false, selected: "" },
  { num: 20, question: "Which package is imported by default in Java?", options: ["java.io", "java.lang", "java.util", "java.net"], answer: "java.lang", attempted: false, selected: "" },
  { num: 21, question: "Which exception occurs when dividing by zero?", options: ["NullPointerException", "ArithmeticException", "IOException", "RuntimeException"], answer: "ArithmeticException", attempted: false, selected: "" },
  { num: 22, question: "Which of the following is not an OOP concept?", options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"], answer: "Compilation", attempted: false, selected: "" },
  { num: 23, question: "What does 'this' keyword refer to?", options: ["Current method", "Current class", "Current object", "Parent object"], answer: "Current object", attempted: false, selected: "" },
  { num: 24, question: "Which of these is not a valid identifier in Java?", options: ["myVar", "_data", "$sum", "123abc"], answer: "123abc", attempted: false, selected: "" },
  { num: 25, question: "Which of the following is not a Java feature?", options: ["Object-Oriented", "Platform Dependent", "Secure", "Robust"], answer: "Platform Dependent", attempted: false, selected: "" },
  { num: 26, question: "Which statement is used to exit a loop?", options: ["stop", "exit", "break", "return"], answer: "break", attempted: false, selected: "" },
  { num: 27, question: "Which method is used to compare two strings?", options: ["==", "equals()", "compare()", "match()"], answer: "equals()", attempted: false, selected: "" },
  { num: 28, question: "Which keyword is used to define a constant variable?", options: ["constant", "final", "static", "const"], answer: "final", attempted: false, selected: "" },
  { num: 29, question: "Which operator is used for logical AND?", options: ["&&", "&", "||", "|"], answer: "&&", attempted: false, selected: "" },
  { num: 30, question: "Which collection class does not allow duplicates?", options: ["List", "Map", "Set", "ArrayList"], answer: "Set", attempted: false, selected: "" },
  { num: 31, question: "Which keyword is used to call the parent class constructor?", options: ["this", "parent", "super", "extends"], answer: "super", attempted: false, selected: "" },
  { num: 32, question: "Which of these is not a valid access modifier?", options: ["public", "private", "protected", "friendly"], answer: "friendly", attempted: false, selected: "" },
  { num: 33, question: "Which class is used to handle input from the user?", options: ["Scanner", "Input", "Reader", "Console"], answer: "Scanner", attempted: false, selected: "" },
  { num: 34, question: "Which keyword is used to define a subclass?", options: ["inherits", "extends", "implements", "subclass"], answer: "extends", attempted: false, selected: "" },
  { num: 35, question: "Which method is used to convert string to lowercase?", options: ["toLowerCase()", "lower()", "makeLower()", "convertLower()"], answer: "toLowerCase()", attempted: false, selected: "" },
  { num: 36, question: "What is the default value of a local variable?", options: ["0", "false", "null", "No default value"], answer: "No default value", attempted: false, selected: "" },
  { num: 37, question: "Which of these is a wrapper class?", options: ["int", "Integer", "float", "char"], answer: "Integer", attempted: false, selected: "" },
  { num: 38, question: "Which keyword is used to create an interface reference?", options: ["interface", "class", "implements", "None of these"], answer: "None of these", attempted: false, selected: "" },
  { num: 39, question: "Which operator is used to access members of a class or object?", options: [".", "->", "::", ":"], answer: ".", attempted: false, selected: "" },
  { num: 40, question: "Which of these can be used to define an abstract method?", options: ["static", "final", "abstract", "private"], answer: "abstract", attempted: false, selected: "" },
  { num: 41, question: "Which of these keywords is used to define a package?", options: ["package", "import", "define", "namespace"], answer: "package", attempted: false, selected: "" },
  { num: 42, question: "Which collection class stores key-value pairs?", options: ["List", "Set", "Map", "ArrayList"], answer: "Map", attempted: false, selected: "" },
  { num: 43, question: "What is the return type of the main() method?", options: ["void", "int", "String", "boolean"], answer: "void", attempted: false, selected: "" },
  { num: 44, question: "Which exception is checked at compile time?", options: ["IOException", "ArithmeticException", "NullPointerException", "RuntimeException"], answer: "IOException", attempted: false, selected: "" },
  { num: 45, question: "Which keyword is used to import a package?", options: ["import", "package", "include", "require"], answer: "import", attempted: false, selected: "" },
  { num: 46, question: "Which method is used to terminate a thread?", options: ["exit()", "stop()", "destroy()", "terminate()"], answer: "stop()", attempted: false, selected: "" },
  { num: 47, question: "Which of the following is used to generate documentation?", options: ["javac", "javadoc", "java", "jar"], answer: "javadoc", attempted: false, selected: "" },
  { num: 48, question: "Which keyword is used to implement an interface?", options: ["inherit", "extends", "implements", "interface"], answer: "implements", attempted: false, selected: "" },
  { num: 49, question: "Which of these classes is used to read data from a file?", options: ["FileReader", "FileWriter", "BufferedWriter", "PrintWriter"], answer: "FileReader", attempted: false, selected: "" },
  { num: 50, question: "Which keyword is used to define a subclass constructor?", options: ["this", "super", "parent", "inherit"], answer: "super", attempted: false, selected: "" }
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