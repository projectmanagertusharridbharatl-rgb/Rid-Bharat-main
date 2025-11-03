


const questions = [
    
    
        {
            "num": 1,
            "question_en": "What is the full form of HTML?",
            "question_hi": "HTML का पूर्ण रूप क्या है?",
            "options_en": ["Hyper Text Markup Language", "Hyper Tool Markup Language", "Hyper Text Making Language", "Hyper Text Markup Links"],
            "options_hi": ["हाइपर टेक्स्ट मार्कअप लैंग्वेज", "हाइपर टूल मार्कअप लैंग्वेज", "हाइपर टेक्स्ट मेकिंग लैंग्वेज", "हाइपर टेक्स्ट मार्कअप लिंक्स"],
            "answer_en": "Hyper Text Markup Language",
            "answer_hi": "हाइपर टेक्स्ट मार्कअप लैंग्वेज",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "Which tag is used to create a hyperlink in HTML?",
            "question_hi": "HTML में हाइपरलिंक बनाने के लिए किस टैग का उपयोग किया जाता है?",
            "options_en": ["<a>", "<link>", "<href>", "<hyper>"],
            "options_hi": ["<a>", "<link>", "<href>", "<hyper>"],
            "answer_en": "<a>",
            "answer_hi": "<a>",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "What is the correct extension for a Python file?",
            "question_hi": "Python फ़ाइल का सही एक्सटेंशन क्या है?",
            "options_en": [".py", ".pyt", ".python", ".pt"],
            "options_hi": [".py", ".pyt", ".python", ".pt"],
            "answer_en": ".py",
            "answer_hi": ".py",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "Which of the following is a loop in Python?",
            "question_hi": "निम्नलिखित में से Python में लूप कौन सा है?",
            "options_en": ["for", "if", "else", "print"],
            "options_hi": ["for", "if", "else", "print"],
            "answer_en": "for",
            "answer_hi": "for",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "What does CSS stand for?",
            "question_hi": "CSS का पूर्ण रूप क्या है?",
            "options_en": ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Syntax"],
            "options_hi": ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल सिस्टम", "कलरफुल स्टाइल सिंटैक्स"],
            "answer_en": "Cascading Style Sheets",
            "answer_hi": "कैस्केडिंग स्टाइल शीट्स",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "Which protocol is used to send emails?",
            "question_hi": "ईमेल भेजने के लिए किस प्रोटोकॉल का उपयोग किया जाता है?",
            "options_en": ["SMTP", "HTTP", "FTP", "TCP"],
            "options_hi": ["SMTP", "HTTP", "FTP", "TCP"],
            "answer_en": "SMTP",
            "answer_hi": "SMTP",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "What is the output of `print(2 + 3 * 2)` in Python?",
            "question_hi": "Python में `print(2 + 3 * 2)` का आउटपुट क्या होगा?",
            "options_en": ["8", "10", "12", "7"],
            "options_hi": ["8", "10", "12", "7"],
            "answer_en": "8",
            "answer_hi": "8",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "Which of the following is a cybercrime?",
            "question_hi": "निम्नलिखित में से कौन सा साइबर अपराध है?",
            "options_en": ["Phishing", "Programming", "Browsing", "Typing"],
            "options_hi": ["फिशिंग", "प्रोग्रामिंग", "ब्राउज़िंग", "टाइपिंग"],
            "answer_en": "Phishing",
            "answer_hi": "फिशिंग",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "What is the full form of URL?",
            "question_hi": "URL का पूर्ण रूप क्या है?",
            "options_en": ["Uniform Resource Locator", "Universal Resource Locator", "Unique Resource Link", "Uniform Resource Link"],
            "options_hi": ["यूनिफ़ॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनीक रिसोर्स लिंक", "यूनिफ़ॉर्म रिसोर्स लिंक"],
            "answer_en": "Uniform Resource Locator",
            "answer_hi": "यूनिफ़ॉर्म रिसोर्स लोकेटर",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "Which command is used to print output in Python?",
            "question_hi": "Python में आउटपुट प्रिंट करने के लिए किस कमांड का उपयोग किया जाता है?",
            "options_en": ["print()", "echo()", "output()", "display()"],
            "options_hi": ["print()", "echo()", "output()", "display()"],
            "answer_en": "print()",
            "answer_hi": "print()",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "What is the purpose of a firewall?",
            "question_hi": "फ़ायरवॉल का उद्देश्य क्या है?",
            "options_en": ["To block unauthorized access", "To increase internet speed", "To create websites", "To store data"],
            "options_hi": ["अनधिकृत पहुंच को रोकने के लिए", "इंटरनेट की गति बढ़ाने के लिए", "वेबसाइट बनाने के लिए", "डेटा स्टोर करने के लिए"],
            "answer_en": "To block unauthorized access",
            "answer_hi": "अनधिकृत पहुंच को रोकने के लिए",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "Which of the following is an example of a web browser?",
            "question_hi": "निम्नलिखित में से कौन सा वेब ब्राउज़र का उदाहरण है?",
            "options_en": ["Google Chrome", "MS Word", "Windows Media Player", "Adobe Photoshop"],
            "options_hi": ["गूगल क्रोम", "एमएस वर्ड", "विंडोज मीडिया प्लेयर", "एडोब फोटोशॉप"],
            "answer_en": "Google Chrome",
            "answer_hi": "गूगल क्रोम",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
            "question_en": "What does CPU stand for?",
            "question_hi": "CPU का पूर्ण रूप क्या है?",
            "options_en": ["Central Processing Unit", "Computer Processing Unit", "Central Power Unit", "Control Processing Unit"],
            "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल पावर यूनिट", "कंट्रोल प्रोसेसिंग यूनिट"],
            "answer_en": "Central Processing Unit",
            "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 14,
            "question_en": "Which of the following is an input device?",
            "question_hi": "निम्नलिखित में से कौन सा इनपुट डिवाइस है?",
            "options_en": ["Keyboard", "Monitor", "Printer", "Speaker"],
            "options_hi": ["कीबोर्ड", "मॉनिटर", "प्रिंटर", "स्पीकर"],
            "answer_en": "Keyboard",
            "answer_hi": "कीबोर्ड",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "What is the function of an operating system?",
            "question_hi": "ऑपरेटिंग सिस्टम का कार्य क्या है?",
            "options_en": ["Manages hardware and software", "Designs websites", "Creates animations", "Edits videos"],
            "options_hi": ["हार्डवेयर और सॉफ्टवेयर प्रबंधित करता है", "वेबसाइट डिज़ाइन करता है", "एनिमेशन बनाता है", "वीडियो एडिट करता है"],
            "answer_en": "Manages hardware and software",
            "answer_hi": "हार्डवेयर और सॉफ्टवेयर प्रबंधित करता है",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 16,
            "question_en": "What is the full form of PDF?",
            "question_hi": "PDF का पूर्ण रूप क्या है?",
            "options_en": ["Portable Document Format", "Personal Data File", "Printed Document File", "Public Document Format"],
            "options_hi": ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "पर्सनल डेटा फाइल", "प्रिंटेड डॉक्यूमेंट फाइल", "पब्लिक डॉक्यूमेंट फॉर्मेट"],
            "answer_en": "Portable Document Format",
            "answer_hi": "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "Which of the following is a programming language?",
            "question_hi": "निम्नलिखित में से कौन सी प्रोग्रामिंग भाषा है?",
            "options_en": ["Java", "MS Excel", "Adobe Photoshop", "Google Chrome"],
            "options_hi": ["जावा", "एमएस एक्सेल", "एडोब फोटोशॉप", "गूगल क्रोम"],
            "answer_en": "Java",
            "answer_hi": "जावा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "What is the purpose of a 'while' loop in Python?",
            "question_hi": "Python में 'while' लूप का उद्देश्य क्या है?",
            "options_en": ["Repeats code while condition is true", "Stops the program", "Creates a function", "Prints output"],
            "options_hi": ["कंडीशन सही होने तक कोड दोहराता है", "प्रोग्राम रोकता है", "फंक्शन बनाता है", "आउटपुट प्रिंट करता है"],
            "answer_en": "Repeats code while condition is true",
            "answer_hi": "कंडीशन सही होने तक कोड दोहराता है",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "Which of the following is a storage device?",
            "question_hi": "निम्नलिखित में से कौन सा स्टोरेज डिवाइस है?",
            "options_en": ["Hard Disk", "Monitor", "Keyboard", "Mouse"],
            "options_hi": ["हार्ड डिस्क", "मॉनिटर", "कीबोर्ड", "माउस"],
            "answer_en": "Hard Disk",
            "answer_hi": "हार्ड डिस्क",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "What is the full form of Wi-Fi?",
            "question_hi": "Wi-Fi का पूर्ण रूप क्या है?",
            "options_en": ["Wireless Fidelity", "Wired Fiber", "Wireless Fiber", "Wired Fidelity"],
            "options_hi": ["वायरलेस फिडेलिटी", "वायर्ड फाइबर", "वायरलेस फाइबर", "वायर्ड फिडेलिटी"],
            "answer_en": "Wireless Fidelity",
            "answer_hi": "वायरलेस फिडेलिटी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 21,
            "question_en": "Which tag is used to insert an image in HTML?",
            "question_hi": "HTML में इमेज डालने के लिए किस टैग का उपयोग किया जाता है?",
            "options_en": ["<img>", "<image>", "<picture>", "<photo>"],
            "options_hi": ["<img>", "<image>", "<picture>", "<photo>"],
            "answer_en": "<img>",
            "answer_hi": "<img>",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 22,
            "question_en": "What is the purpose of the 'if' statement in Python?",
            "question_hi": "Python में 'if' स्टेटमेंट का उद्देश्य क्या है?",
            "options_en": ["To make decisions", "To loop code", "To print output", "To define a function"],
            "options_hi": ["निर्णय लेने के लिए", "कोड लूप करने के लिए", "आउटपुट प्रिंट करने के लिए", "फंक्शन डिफाइन करने के लिए"],
            "answer_en": "To make decisions",
            "answer_hi": "निर्णय लेने के लिए",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 23,
            "question_en": "Which of the following is a search engine?",
            "question_hi": "निम्नलिखित में से कौन सा सर्च इंजन है?",
            "options_en": ["Google", "WhatsApp", "MS Word", "Photoshop"],
            "options_hi": ["गूगल", "व्हाट्सएप", "एमएस वर्ड", "फोटोशॉप"],
            "answer_en": "Google",
            "answer_hi": "गूगल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 24,
            "question_en": "What is the full form of RAM?",
            "question_hi": "RAM का पूर्ण रूप क्या है?",
            "options_en": ["Random Access Memory", "Read Access Memory", "Random Active Memory", "Read Only Memory"],
            "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम एक्टिव मेमोरी", "रीड ओनली मेमोरी"],
            "answer_en": "Random Access Memory",
            "answer_hi": "रैंडम एक्सेस मेमोरी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 25,
            "question_en": "Which of the following is a social media platform?",
            "question_hi": "निम्नलिखित में से कौन सा सोशल मीडिया प्लेटफॉर्म है?",
            "options_en": ["Facebook", "MS Paint", "Notepad", "Calculator"],
            "options_hi": ["फेसबुक", "एमएस पेंट", "नोटपैड", "कैलकुलेटर"],
            "answer_en": "Facebook",
            "answer_hi": "फेसबुक",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 26,
            "question_en": "What does SQL stand for?",
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
            "question_en": "Which of the following is a type of malware?",
            "question_hi": "निम्नलिखित में से कौन सा मैलवेयर का प्रकार है?",
            "options_en": ["Virus", "Firewall", "Antivirus", "Password"],
            "options_hi": ["वायरस", "फ़ायरवॉल", "एंटीवायरस", "पासवर्ड"],
            "answer_en": "Virus",
            "answer_hi": "वायरस",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 28,
            "question_en": "What is the purpose of the 'print()' function in Python?",
            "question_hi": "Python में 'print()' फंक्शन का उद्देश्य क्या है?",
            "options_en": ["To display output", "To take input", "To create a loop", "To define a variable"],
            "options_hi": ["आउटपुट दिखाने के लिए", "इनपुट लेने के लिए", "लूप बनाने के लिए", "वेरिएबल डिफाइन करने के लिए"],
            "answer_en": "To display output",
            "answer_hi": "आउटपुट दिखाने के लिए",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 29,
            "question_en": "Which of the following is a Boolean value in Python?",
            "question_hi": "निम्नलिखित में से Python में बूलियन वैल्यू कौन सी है?",
            "options_en": ["True", "10", "'Hello'", "3.14"],
            "options_hi": ["True", "10", "'Hello'", "3.14"],
            "answer_en": "True",
            "answer_hi": "True",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 30,
            "question_en": "What is the full form of VPN?",
            "question_hi": "VPN का पूर्ण रूप क्या है?",
            "options_en": ["Virtual Private Network", "Visual Private Network", "Virtual Public Network", "Visual Public Network"],
            "options_hi": ["वर्चुअल प्राइवेट नेटवर्क", "विजुअल प्राइवेट नेटवर्क", "वर्चुअल पब्लिक नेटवर्क", "विजुअल पब्लिक नेटवर्क"],
            "answer_en": "Virtual Private Network",
            "answer_hi": "वर्चुअल प्राइवेट नेटवर्क",
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
