


const questions = [
    
    
        {
            "num": 1,
            "question_en": "Which language is used to style a webpage?",
            "question_hi": "वेबपेज को स्टाइल करने के लिए कौन सी भाषा उपयोग की जाती है?",
            "options_en": ["CSS", "HTML", "Python", "SQL"],
            "options_hi": ["CSS", "HTML", "Python", "SQL"],
            "answer_en": "CSS",
            "answer_hi": "CSS",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "What is the output of `print(5 // 2)` in Python?",
            "question_hi": "Python में `print(5 // 2)` का आउटपुट क्या होगा?",
            "options_en": ["2", "2.5", "3", "1"],
            "options_hi": ["2", "2.5", "3", "1"],
            "answer_en": "2",
            "answer_hi": "2",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "Which protocol is used for secure web browsing?",
            "question_hi": "सुरक्षित वेब ब्राउज़िंग के लिए किस प्रोटोकॉल का उपयोग होता है?",
            "options_en": ["HTTPS", "HTTP", "FTP", "SMTP"],
            "options_hi": ["HTTPS", "HTTP", "FTP", "SMTP"],
            "answer_en": "HTTPS",
            "answer_hi": "HTTPS",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "What is the full form of LAN?",
            "question_hi": "LAN का पूर्ण रूप क्या है?",
            "options_en": ["Local Area Network", "Large Area Network", "Logical Access Network", "Local Access Node"],
            "options_hi": ["लोकल एरिया नेटवर्क", "लार्ज एरिया नेटवर्क", "लॉजिकल एक्सेस नेटवर्क", "लोकल एक्सेस नोड"],
            "answer_en": "Local Area Network",
            "answer_hi": "लोकल एरिया नेटवर्क",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "Which tag is used to create a numbered list in HTML?",
            "question_hi": "HTML में नंबर लिस्ट बनाने के लिए कौन सा टैग उपयोग किया जाता है?",
            "options_en": ["<ol>", "<ul>", "<li>", "<nl>"],
            "options_hi": ["<ol>", "<ul>", "<li>", "<nl>"],
            "answer_en": "<ol>",
            "answer_hi": "<ol>",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "What is the purpose of a compiler?",
            "question_hi": "कंपाइलर का उद्देश्य क्या है?",
            "options_en": ["Convert high-level code to machine code", "Execute Python scripts", "Design websites", "Store data"],
            "options_hi": ["हाई-लेवल कोड को मशीन कोड में बदलना", "Python स्क्रिप्ट चलाना", "वेबसाइट डिज़ाइन करना", "डेटा स्टोर करना"],
            "answer_en": "Convert high-level code to machine code",
            "answer_hi": "हाई-लेवल कोड को मशीन कोड में बदलना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "Which of the following is a Python data type?",
            "question_hi": "निम्नलिखित में से कौन सा Python डेटा टाइप है?",
            "options_en": ["Dictionary", "Table", "Frame", "Sheet"],
            "options_hi": ["डिक्शनरी", "टेबल", "फ्रेम", "शीट"],
            "answer_en": "Dictionary",
            "answer_hi": "डिक्शनरी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "What does ROM stand for?",
            "question_hi": "ROM का पूर्ण रूप क्या है?",
            "options_en": ["Read Only Memory", "Random Access Memory", "Run Only Memory", "Read Open Memory"],
            "options_hi": ["रीड ओनली मेमोरी", "रैंडम एक्सेस मेमोरी", "रन ओनली मेमोरी", "रीड ओपन मेमोरी"],
            "answer_en": "Read Only Memory",
            "answer_hi": "रीड ओनली मेमोरी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "Which operator is used for exponentiation in Python?",
            "question_hi": "Python में एक्सपोनेंटिएशन के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
            "options_en": ["**", "^", "//", "%%"],
            "options_hi": ["**", "^", "//", "%%"],
            "answer_en": "**",
            "answer_hi": "**",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "What is the full form of GUI?",
            "question_hi": "GUI का पूर्ण रूप क्या है?",
            "options_en": ["Graphical User Interface", "General User Interface", "Graphical Unified Interface", "Global User Index"],
            "options_hi": ["ग्राफ़िकल यूज़र इंटरफ़ेस", "जनरल यूज़र इंटरफ़ेस", "ग्राफ़िकल यूनिफाइड इंटरफ़ेस", "ग्लोबल यूज़र इंडेक्स"],
            "answer_en": "Graphical User Interface",
            "answer_hi": "ग्राफ़िकल यूज़र इंटरफ़ेस",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "Which function is used to read user input in Python?",
            "question_hi": "Python में यूज़र इनपुट पढ़ने के लिए किस फंक्शन का उपयोग किया जाता है?",
            "options_en": ["input()", "read()", "scan()", "get()"],
            "options_hi": ["input()", "read()", "scan()", "get()"],
            "answer_en": "input()",
            "answer_hi": "input()",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "What is the purpose of an IP address?",
            "question_hi": "IP एड्रेस का उद्देश्य क्या है?",
            "options_en": ["Identify a device on a network", "Store files", "Run programs", "Create backups"],
            "options_hi": ["नेटवर्क पर डिवाइस की पहचान करना", "फाइल्स स्टोर करना", "प्रोग्राम चलाना", "बैकअप बनाना"],
            "answer_en": "Identify a device on a network",
            "answer_hi": "नेटवर्क पर डिवाइस की पहचान करना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
            "question_en": "Which of the following is a relational database management system?",
            "question_hi": "निम्नलिखित में से कौन सा रिलेशनल डेटाबेस मैनेजमेंट सिस्टम है?",
            "options_en": ["MySQL", "HTML", "CSS", "Python"],
            "options_hi": ["MySQL", "HTML", "CSS", "Python"],
            "answer_en": "MySQL",
            "answer_hi": "MySQL",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 14,
            "question_en": "What is the extension of a Word document?",
            "question_hi": "Word डॉक्यूमेंट का एक्सटेंशन क्या है?",
            "options_en": [".docx", ".pdf", ".html", ".py"],
            "options_hi": [".docx", ".pdf", ".html", ".py"],
            "answer_en": ".docx",
            "answer_hi": ".docx",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "Which symbol is used for comments in Python?",
            "question_hi": "Python में कमेंट्स के लिए किस सिंबल का उपयोग किया जाता है?",
            "options_en": ["#", "//", "/*", "--"],
            "options_hi": ["#", "//", "/*", "--"],
            "answer_en": "#",
            "answer_hi": "#",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 16,
            "question_en": "What is the full form of BIOS?",
            "question_hi": "BIOS का पूर्ण रूप क्या है?",
            "options_en": ["Basic Input Output System", "Binary Input Output System", "Basic Integrated Operating System", "Boot Input Output Service"],
            "options_hi": ["बेसिक इनपुट आउटपुट सिस्टम", "बाइनरी इनपुट आउटपुट सिस्टम", "बेसिक इंटीग्रेटेड ऑपरेटिंग सिस्टम", "बूट इनपुट आउटपुट सर्विस"],
            "answer_en": "Basic Input Output System",
            "answer_hi": "बेसिक इनपुट आउटपुट सिस्टम",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "Which of the following is a cloud storage service?",
            "question_hi": "निम्नलिखित में से कौन सी क्लाउड स्टोरेज सेवा है?",
            "options_en": ["Google Drive", "MS Paint", "Notepad", "Calculator"],
            "options_hi": ["गूगल ड्राइव", "एमएस पेंट", "नोटपैड", "कैलकुलेटर"],
            "answer_en": "Google Drive",
            "answer_hi": "गूगल ड्राइव",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "What is the purpose of a 'for' loop in Python?",
            "question_hi": "Python में 'for' लूप का उद्देश्य क्या है?",
            "options_en": ["Iterate over a sequence", "Stop execution", "Define variables", "Print output"],
            "options_hi": ["सीक्वेंस पर इटरेट करना", "एक्ज़िक्यूशन रोकना", "वेरिएबल्स डिफाइन करना", "आउटपुट प्रिंट करना"],
            "answer_en": "Iterate over a sequence",
            "answer_hi": "सीक्वेंस पर इटरेट करना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "Which device connects multiple computers in a network?",
            "question_hi": "कौन सा डिवाइस नेटवर्क में कई कंप्यूटरों को जोड़ता है?",
            "options_en": ["Router", "Printer", "Monitor", "Keyboard"],
            "options_hi": ["राउटर", "प्रिंटर", "मॉनिटर", "कीबोर्ड"],
            "answer_en": "Router",
            "answer_hi": "राउटर",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "What is the full form of HTTP?",
            "question_hi": "HTTP का पूर्ण रूप क्या है?",
            "options_en": ["HyperText Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Protocol", "High Text Transfer Protocol"],
            "options_hi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाई ट्रांसफर टेक्स्ट प्रोटोकॉल", "हाइपर ट्रांसफर टेक्स्ट प्रोटोकॉल", "हाई टेक्स्ट ट्रांसफर प्रोटोकॉल"],
            "answer_en": "HyperText Transfer Protocol",
            "answer_hi": "हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 21,
            "question_en": "Which of the following is an example of an output device?",
            "question_hi": "निम्नलिखित में से कौन सा आउटपुट डिवाइस का उदाहरण है?",
            "options_en": ["Monitor", "Keyboard", "Mouse", "Scanner"],
            "options_hi": ["मॉनिटर", "कीबोर्ड", "माउस", "स्कैनर"],
            "answer_en": "Monitor",
            "answer_hi": "मॉनिटर",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 22,
            "question_en": "What does IDE stand for in programming?",
            "question_hi": "प्रोग्रामिंग में IDE का पूर्ण रूप क्या है?",
            "options_en": ["Integrated Development Environment", "Internal Development Engine", "Interactive Design Environment", "Integrated Design Engine"],
            "options_hi": ["इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट", "इंटरनल डेवलपमेंट इंजन", "इंटरएक्टिव डिज़ाइन एनवायरनमेंट", "इंटीग्रेटेड डिज़ाइन इंजन"],
            "answer_en": "Integrated Development Environment",
            "answer_hi": "इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 23,
            "question_en": "Which of the following is a Python framework for web development?",
            "question_hi": "निम्नलिखित में से कौन सा Python का वेब डेवलपमेंट फ्रेमवर्क है?",
            "options_en": ["Django", "Pandas", "NumPy", "Matplotlib"],
            "options_hi": ["Django", "Pandas", "NumPy", "Matplotlib"],
            "answer_en": "Django",
            "answer_hi": "Django",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 24,
            "question_en": "What is the purpose of the `range()` function in Python?",
            "question_hi": "Python में `range()` फंक्शन का उद्देश्य क्या है?",
            "options_en": ["Generate a sequence of numbers", "Print text", "Create a list", "Define a function"],
            "options_hi": ["नंबर्स की सीक्वेंस जनरेट करना", "टेक्स्ट प्रिंट करना", "लिस्ट बनाना", "फंक्शन डिफाइन करना"],
            "answer_en": "Generate a sequence of numbers",
            "answer_hi": "नंबर्स की सीक्वेंस जनरेट करना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 25,
            "question_en": "Which of the following is a version control system?",
            "question_hi": "निम्नलिखित में से कौन सा वर्जन कंट्रोल सिस्टम है?",
            "options_en": ["Git", "Excel", "Photoshop", "Word"],
            "options_hi": ["Git", "Excel", "Photoshop", "Word"],
            "answer_en": "Git",
            "answer_hi": "Git",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 26,
            "question_en": "What is the full form of SQL?",
            "question_hi": "SQL का पूर्ण रूप क्या है?",
            "options_en": ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "System Query Link"],
            "options_hi": ["स्ट्रक्चर्ड क्वेरी लैंग्वेज", "सिंपल क्वेरी लैंग्वेज", "स्टैण्डर्ड क्वेरी लॉजिक", "सिस्टम क्वेरी लिंक"],
            "answer_en": "Structured Query Language",
            "answer_hi": "स्ट्रक्चर्ड क्वेरी लैंग्वेज",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 27,
            "question_en": "Which of the following is a Python library for data analysis?",
            "question_hi": "निम्नलिखित में से कौन सा Python लाइब्रेरी डेटा एनालिसिस के लिए है?",
            "options_en": ["Pandas", "Django", "PyGame", "Tkinter"],
            "options_hi": ["Pandas", "Django", "PyGame", "Tkinter"],
            "answer_en": "Pandas",
            "answer_hi": "Pandas",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 28,
            "question_en": "What is the purpose of the `len()` function in Python?",
            "question_hi": "Python में `len()` फंक्शन का उद्देश्य क्या है?",
            "options_en": ["Return the length of an object", "Print text", "Create a loop", "Define a variable"],
            "options_hi": ["ऑब्जेक्ट की लंबाई रिटर्न करना", "टेक्स्ट प्रिंट करना", "लूप बनाना", "वेरिएबल डिफाइन करना"],
            "answer_en": "Return the length of an object",
            "answer_hi": "ऑब्जेक्ट की लंबाई रिटर्न करना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 29,
            "question_en": "Which of the following is a Python conditional statement?",
            "question_hi": "निम्नलिखित में से कौन सा Python कंडीशनल स्टेटमेंट है?",
            "options_en": ["if", "for", "print", "input"],
            "options_hi": ["if", "for", "print", "input"],
            "answer_en": "if",
            "answer_hi": "if",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 30,
            "question_en": "What is the full form of PDF?",
            "question_hi": "PDF का पूर्ण रूप क्या है?",
            "options_en": ["Portable Document Format", "Personal Data File", "Printed Document File", "Public Document Format"],
            "options_hi": ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "पर्सनल डेटा फाइल", "प्रिंटेड डॉक्यूमेंट फाइल", "पब्लिक डॉक्यूमेंट फॉर्मेट"],
            "answer_en": "Portable Document Format",
            "answer_hi": "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
            "attempted": false,
            "selected": ""
        }
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
