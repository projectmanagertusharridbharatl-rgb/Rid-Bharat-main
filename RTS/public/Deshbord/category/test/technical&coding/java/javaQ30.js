const questions=
  [
  { num: 1, question: "Which class is used for reading characters from file?", options: ["FileReader", "BufferedReader", "InputStreamReader", "FileInputStream"], answer: "FileReader", attempted: false, selected: "" },
  { num: 2, question: "Which class is used for writing characters to file?", options: ["FileWriter", "BufferedWriter", "OutputStreamWriter", "FileOutputStream"], answer: "FileWriter", attempted: false, selected: "" },
  { num: 3, question: "Which method reads a line from BufferedReader?", options: ["readLine()", "read()", "nextLine()", "getLine()"], answer: "readLine()", attempted: false, selected: "" },
  { num: 4, question: "Which method writes string to BufferedWriter?", options: ["write()", "append()", "print()", "put()"], answer: "write()", attempted: false, selected: "" },
  { num: 5, question: "Which class is used to read bytes from file?", options: ["FileInputStream", "FileReader", "BufferedInputStream", "InputStream"], answer: "FileInputStream", attempted: false, selected: "" },
  { num: 6, question: "Which class is used to write bytes to file?", options: ["FileOutputStream", "FileWriter", "BufferedOutputStream", "OutputStream"], answer: "FileOutputStream", attempted: false, selected: "" },
  { num: 7, question: "Which method reads a byte from FileInputStream?", options: ["read()", "get()", "next()", "input()"], answer: "read()", attempted: false, selected: "" },
  { num: 8, question: "Which method closes a stream?", options: ["close()", "end()", "shutdown()", "finish()"], answer: "close()", attempted: false, selected: "" },
  { num: 9, question: "Which class implements Random Access File?", options: ["RandomAccessFile", "FileReader", "FileWriter", "BufferedReader"], answer: "RandomAccessFile", attempted: false, selected: "" },
  { num: 10, question: "Which mode opens file for reading?", options: ["r", "rw", "w", "a"], answer: "r", attempted: false, selected: "" },
  { num: 11, question: "Which mode opens file for read/write?", options: ["rw", "r", "w", "a"], answer: "rw", attempted: false, selected: "" },
  { num: 12, question: "Which class is used for formatted printing?", options: ["PrintWriter", "BufferedWriter", "Formatter", "PrintStream"], answer: "PrintWriter", attempted: false, selected: "" },
  { num: 13, question: "Which class formats strings?", options: ["Formatter", "StringBuilder", "StringBuffer", "PrintWriter"], answer: "Formatter", attempted: false, selected: "" },
  { num: 14, question: "Which method returns parent directory?", options: ["getParent()", "getPath()", "getRoot()", "getDirectory()"], answer: "getParent()", attempted: false, selected: "" },
  { num: 15, question: "Which method checks if file exists?", options: ["exists()", "isFile()", "check()", "found()"], answer: "exists()", attempted: false, selected: "" },
  { num: 16, question: "Which method deletes a file?", options: ["delete()", "remove()", "destroy()", "erase()"], answer: "delete()", attempted: false, selected: "" },
  { num: 17, question: "Which method creates new file?", options: ["createNewFile()", "newFile()", "makeFile()", "addFile()"], answer: "createNewFile()", attempted: false, selected: "" },
  { num: 18, question: "Which method checks if file is readable?", options: ["canRead()", "isReadable()", "checkRead()", "readable()"], answer: "canRead()", attempted: false, selected: "" },
  { num: 19, question: "Which method checks if file is writable?", options: ["canWrite()", "isWritable()", "checkWrite()", "writable()"], answer: "canWrite()", attempted: false, selected: "" },
  { num: 20, question: "Which class reads primitive data types from file?", options: ["DataInputStream", "FileInputStream", "BufferedReader", "Scanner"], answer: "DataInputStream", attempted: false, selected: "" },
  { num: 21, question: "Which class writes primitive data types to file?", options: ["DataOutputStream", "FileOutputStream", "BufferedWriter", "PrintWriter"], answer: "DataOutputStream", attempted: false, selected: "" },
  { num: 22, question: "Which class reads objects from file?", options: ["ObjectInputStream", "DataInputStream", "FileInputStream", "BufferedReader"], answer: "ObjectInputStream", attempted: false, selected: "" },
  { num: 23, question: "Which class writes objects to file?", options: ["ObjectOutputStream", "DataOutputStream", "FileOutputStream", "PrintWriter"], answer: "ObjectOutputStream", attempted: false, selected: "" },
  { num: 24, question: "Which exception occurs for file not found?", options: ["FileNotFoundException", "IOException", "NullPointerException", "RuntimeException"], answer: "FileNotFoundException", attempted: false, selected: "" },
  { num: 25, question: "Which method flushes output stream?", options: ["flush()", "clear()", "close()", "commit()"], answer: "flush()", attempted: false, selected: "" },
  { num: 26, question: "Which class reads console input?", options: ["Console", "Scanner", "BufferedReader", "InputStreamReader"], answer: "Console", attempted: false, selected: "" },
  { num: 27, question: "Which method reads password from console?", options: ["readPassword()", "readLine()", "nextLine()", "getPassword()"], answer: "readPassword()", attempted: false, selected: "" },
  { num: 28, question: "Which method returns file length?", options: ["length()", "size()", "getLength()", "getSize()"], answer: "length()", attempted: false, selected: "" },
  { num: 29, question: "Which method renames a file?", options: ["renameTo()", "rename()", "changeName()", "setName()"], answer: "renameTo()", attempted: false, selected: "" },
  { num: 30, question: "Which class provides random access to file pointer?", options: ["RandomAccessFile", "FileReader", "FileWriter", "BufferedReader"], answer: "RandomAccessFile", attempted: false, selected: "" },
  { num: 31, question: "Which method moves file pointer?", options: ["seek()", "move()", "goto()", "position()"], answer: "seek()", attempted: false, selected: "" },
  { num: 32, question: "Which method reads byte array from file?", options: ["read(byte[] b)", "readBytes()", "readAll()", "getBytes()"], answer: "read(byte[] b)", attempted: false, selected: "" },
  { num: 33, question: "Which method writes byte array to file?", options: ["write(byte[] b)", "writeBytes()", "sendBytes()", "putBytes()"], answer: "write(byte[] b)", attempted: false, selected: "" },
  { num: 34, question: "Which method checks if file is directory?", options: ["isDirectory()", "isFolder()", "checkDirectory()", "directory()"], answer: "isDirectory()", attempted: false, selected: "" },
  { num: 35, question: "Which method lists files in directory?", options: ["list()", "getFiles()", "directoryFiles()", "listFiles()"], answer: "listFiles()", attempted: false, selected: "" },
  { num: 36, question: "Which method lists file names only?", options: ["list()", "listFiles()", "names()", "getNames()"], answer: "list()", attempted: false, selected: "" },
  { num: 37, question: "Which class reads data from byte array?", options: ["ByteArrayInputStream", "ByteInput", "ByteArrayReader", "ByteStream"], answer: "ByteArrayInputStream", attempted: false, selected: "" },
  { num: 38, question: "Which class writes data to byte array?", options: ["ByteArrayOutputStream", "ByteOutput", "ByteArrayWriter", "ByteStream"], answer: "ByteArrayOutputStream", attempted: false, selected: "" },
  { num: 39, question: "Which class reads data from string as stream?", options: ["StringReader", "StringInput", "Reader", "StringStream"], answer: "StringReader", attempted: false, selected: "" },
  { num: 40, question: "Which class writes data to string as stream?", options: ["StringWriter", "StringOutput", "Writer", "StringStream"], answer: "StringWriter", attempted: false, selected: "" },
  { num: 41, question: "Which method returns available bytes in InputStream?", options: ["available()", "bytesAvailable()", "getAvailable()", "remaining()"], answer: "available()", attempted: false, selected: "" },
  { num: 42, question: "Which class buffers output for efficiency?", options: ["BufferedOutputStream", "FileOutputStream", "PrintWriter", "DataOutputStream"], answer: "BufferedOutputStream", attempted: false, selected: "" },
  { num: 43, question: "Which class buffers input for efficiency?", options: ["BufferedInputStream", "FileInputStream", "Scanner", "DataInputStream"], answer: "BufferedInputStream", attempted: false, selected: "" },
  { num: 44, question: "Which class allows mark and reset of stream?", options: ["BufferedInputStream", "FileInputStream", "Scanner", "DataInputStream"], answer: "BufferedInputStream", attempted: false, selected: "" },
  { num: 45, question: "Which method marks current position in stream?", options: ["mark(int readlimit)", "position()", "bookmark()", "mark()"], answer: "mark(int readlimit)", attempted: false, selected: "" },
  { num: 46, question: "Which method resets stream to mark?", options: ["reset()", "goBack()", "rewind()", "restart()"], answer: "reset()", attempted: false, selected: "" },
  { num: 47, question: "Which method skips n bytes in stream?", options: ["skip(long n)", "move(long n)", "forward(long n)", "jump(long n)"], answer: "skip(long n)", attempted: false, selected: "" },
  { num: 48, question: "Which class reads primitive data from byte array?", options: ["DataInputStream", "ByteArrayInputStream", "ObjectInputStream", "Scanner"], answer: "DataInputStream", attempted: false, selected: "" },
  { num: 49, question: "Which class writes primitive data to byte array?", options: ["DataOutputStream", "ByteArrayOutputStream", "ObjectOutputStream", "PrintWriter"], answer: "DataOutputStream", attempted: false, selected: "" },
  { num: 50, question: "Which method closes all streams in try-with-resources?", options: ["automatic close", "close()", "shutdown()", "release()"], answer: "automatic close", attempted: false, selected: "" }
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