const questions = [
  { num: 1, question_en: "Which data type is used to store true/false values?", options_en: ["int", "boolean", "char", "float"], answer_en: "boolean", attempted: false, selected: "" },

  { num: 2, question_en: "Which of the following is used to declare a variable in Java?", options_en: ["var", "dim", "let", "int"], answer_en: "int", attempted: false, selected: "" },

  { num: 3, question_en: "Which loop executes at least once?", options_en: ["for", "while", "do-while", "foreach"], answer_en: "do-while", attempted: false, selected: "" },

  { num: 4, question_en: "Which symbol is used for single-line comments?", options_en: ["//", "/* */", "#", "--"], answer_en: "//", attempted: false, selected: "" },

  { num: 5, question_en: "What is the default value of a boolean variable?", options_en: ["true", "false", "0", "null"], answer_en: "false", attempted: false, selected: "" },

  { num: 6, question_en: "Which operator is used for logical AND?", options_en: ["&", "&&", "||", "|"], answer_en: "&&", attempted: false, selected: "" },

  { num: 7, question_en: "Which operator is used to check inequality?", options_en: ["!=", "==", "=", "<>"], answer_en: "!=", attempted: false, selected: "" },

  { num: 8, question_en: "Which of these is a floating-point type?", options_en: ["int", "double", "char", "boolean"], answer_en: "double", attempted: false, selected: "" },

  { num: 9, question_en: "Which statement is used to exit a loop?", options_en: ["exit", "break", "continue", "stop"], answer_en: "break", attempted: false, selected: "" },

  { num: 10, question_en: "Which method is used to convert a string to integer?", options_en: ["Integer.parseInt()", "String.toInt()", "Integer.valueOf()", "int.parse()"], answer_en: "Integer.parseInt()", attempted: false, selected: "" },

  { num: 11, question_en: "Which keyword is used to create a subclass?", options_en: ["inherits", "extends", "super", "implements"], answer_en: "extends", attempted: false, selected: "" },

  { num: 12, question_en: "Which type of array stores elements of the same data type?", options_en: ["Mixed Array", "Object Array", "Primitive Array", "All of these"], answer_en: "Primitive Array", attempted: false, selected: "" },

  { num: 13, question_en: "Which of these is a character type?", options_en: ["int", "double", "char", "boolean"], answer_en: "char", attempted: false, selected: "" },

  { num: 14, question_en: "Which of the following is used for reading input from console?", options_en: ["Scanner", "BufferedReader", "InputStreamReader", "All of these"], answer_en: "All of these", attempted: false, selected: "" },

  { num: 15, question_en: "Which keyword is used to prevent inheritance?", options_en: ["final", "static", "abstract", "sealed"], answer_en: "final", attempted: false, selected: "" },

  { num: 16, question_en: "Which method returns the character at a specified index in a string?", options_en: ["charAt()", "substring()", "getChar()", "indexOf()"], answer_en: "charAt()", attempted: false, selected: "" },

  { num: 17, question_en: "Which loop is best when the number of iterations is known?", options_en: ["for", "while", "do-while", "foreach"], answer_en: "for", attempted: false, selected: "" },

  { num: 18, question_en: "Which keyword refers to the parent class object?", options_en: ["parent", "super", "this", "base"], answer_en: "super", attempted: false, selected: "" },

  { num: 19, question_en: "Which method combines two strings?", options_en: ["concat()", "append()", "merge()", "combine()"], answer_en: "concat()", attempted: false, selected: "" },

  { num: 20, question_en: "Which operator is used for remainder calculation?", options_en: ["%", "/", "*", "mod"], answer_en: "%", attempted: false, selected: "" },

  { num: 21, question_en: "Which keyword defines a method that must be implemented by subclasses?", options_en: ["abstract", "final", "static", "override"], answer_en: "abstract", attempted: false, selected: "" },

  { num: 22, question_en: "Which data type can store whole numbers?", options_en: ["int", "float", "boolean", "char"], answer_en: "int", attempted: false, selected: "" },

  { num: 23, question_en: "Which method returns the length of an array?", options_en: ["length", "length()", "size()", "count()"], answer_en: "length", attempted: false, selected: "" },

  { num: 24, question_en: "Which operator is used for string concatenation?", options_en: ["+", "&", ".", "|"], answer_en: "+", attempted: false, selected: "" },

  { num: 25, question_en: "Which exception occurs when dividing by zero?", options_en: ["ArithmeticException", "IOException", "NullPointerException", "ArrayIndexOutOfBoundsException"], answer_en: "ArithmeticException", attempted: false, selected: "" },

  { num: 26, question_en: "Which of the following is an example of a wrapper class?", options_en: ["Integer", "int", "double", "char"], answer_en: "Integer", attempted: false, selected: "" },

  { num: 27, question_en: "Which keyword is used to define a constant?", options_en: ["final", "static", "const", "immutable"], answer_en: "final", attempted: false, selected: "" },

  { num: 28, question_en: "Which method converts a string to uppercase?", options_en: ["toUpperCase()", "toUpper()", "uppercase()", "convertToUpper()"], answer_en: "toUpperCase()", attempted: false, selected: "" },

  { num: 29, question_en: "Which access modifier allows access within the same package?", options_en: ["default", "private", "public", "protected"], answer_en: "default", attempted: false, selected: "" },

  { num: 30, question_en: "Which keyword is used to define an interface?", options_en: ["interface", "abstract", "class", "implements"], answer_en: "interface", attempted: false, selected: "" },

  { num: 31, question_en: "Which method compares two strings for equality?", options_en: ["equals()", "==", "compare()", "compareTo()"], answer_en: "equals()", attempted: false, selected: "" },

  { num: 32, question_en: "Which keyword is used to inherit an interface?", options_en: ["implements", "extends", "inherits", "super"], answer_en: "implements", attempted: false, selected: "" },

  { num: 33, question_en: "Which of the following is used to declare a constant for all objects?", options_en: ["static final", "final", "const", "immutable"], answer_en: "static final", attempted: false, selected: "" },

  { num: 34, question_en: "Which loop is best when the number of iterations is unknown?", options_en: ["while", "for", "do-while", "foreach"], answer_en: "while", attempted: false, selected: "" },

  { num: 35, question_en: "Which keyword prevents a method from being overridden?", options_en: ["final", "static", "abstract", "sealed"], answer_en: "final", attempted: false, selected: "" },

  { num: 36, question_en: "Which class is used to handle exceptions?", options_en: ["Exception", "Error", "Throwable", "Runtime"], answer_en: "Exception", attempted: false, selected: "" },

  { num: 37, question_en: "Which of these is not a primitive type?", options_en: ["String", "int", "boolean", "char"], answer_en: "String", attempted: false, selected: "" },

  { num: 38, question_en: "Which operator is used for increment by 1?", options_en: ["++", "+", "--", "+="], answer_en: "++", attempted: false, selected: "" },

  { num: 39, question_en: "Which method returns a substring of a string?", options_en: ["substring()", "substr()", "getSubString()", "cut()"], answer_en: "substring()", attempted: false, selected: "" },

  { num: 40, question_en: "Which method converts a string to lowercase?", options_en: ["toLowerCase()", "toLower()", "lowercase()", "convertToLower()"], answer_en: "toLowerCase()", attempted: false, selected: "" },

  { num: 41, question_en: "Which type of variable is shared across all objects of a class?", options_en: ["instance variable", "local variable", "static variable", "parameter"], answer_en: "static variable", attempted: false, selected: "" },

  { num: 42, question_en: "Which keyword is used to refer to the current object?", options_en: ["this", "super", "self", "me"], answer_en: "this", attempted: false, selected: "" },

  { num: 43, question_en: "Which keyword is used to refer to the parent class constructor?", options_en: ["super", "parent", "base", "root"], answer_en: "super", attempted: false, selected: "" },

  { num: 44, question_en: "Which method of Thread class is used to pause execution?", options_en: ["sleep()", "wait()", "stop()", "pause()"], answer_en: "sleep()", attempted: false, selected: "" },

  { num: 45, question_en: "Which keyword is used to create an object?", options_en: ["new", "create", "make", "instance"], answer_en: "new", attempted: false, selected: "" },

  { num: 46, question_en: "Which operator is used for multiplication?", options_en: ["*", "+", "-", "%"], answer_en: "*", attempted: false, selected: "" },

  { num: 47, question_en: "Which method returns the index of a character in a string?", options_en: ["indexOf()", "charAt()", "search()", "find()"], answer_en: "indexOf()", attempted: false, selected: "" },

  { num: 48, question_en: "Which of these is used to terminate a program?", options_en: ["System.exit(0)", "stop()", "exit()", "terminate()"], answer_en: "System.exit(0)", attempted: false, selected: "" },

  { num: 49, question_en: "Which keyword is used to define a class?", options_en: ["class", "define", "object", "struct"], answer_en: "class", attempted: false, selected: "" },

  { num: 50, question_en: "Which operator is used for logical OR?", options_en: ["||", "|", "&&", "&"], answer_en: "||", attempted: false, selected: "" }
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