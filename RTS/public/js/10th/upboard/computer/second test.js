


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
let language = "en"; // Default English
let timeLeft = 300; // 5-minute timer
let timerInterval;

function loadQuestion(index) {
const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

const optionsElement = document.getElementById("options");
optionsElement.innerHTML = "";

optionsArray.forEach(option => {
    optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
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
let confirmation = confirm("Are you sure you want to submit the test?");
if (!confirmation) return;

clearInterval(timerInterval);

let attempted = 0, notAttempted = 0, score = 0;
const results = [];

questions.forEach(q => {
    if (q.attempted) {
        attempted++;
        if (q.selected === q.answer_en || q.selected === q.answer_hi) {
            score++;
        }
    } else {
        notAttempted++;
    }
    results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
});

localStorage.setItem("attempted", attempted);
localStorage.setItem("notAttempted", notAttempted);
localStorage.setItem("score", score);
localStorage.setItem("results", JSON.stringify(results));

let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
if (viewResult) {
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}
}

function startTimer() {
const timerElement = document.getElementById("timer");
timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Time's up! Submitting the quiz automatically.");
        submitQuiz();
    } else {
        timerElement.textContent = `Time Left: ${Math.floor(timeLeft / 60)}:${timeLeft % 60}`;
        timeLeft--;
    }
}, 1000);
}

function updateNavigation() {
const navElement = document.getElementById("circleContainer");
navElement.innerHTML = "";

questions.forEach((q, index) => {
    let color = "gray"; // Default not visited
    if (q.attempted) {
        color = "green"; // Answered
    }
    if (q.selected === "") {
        color = "gray"; // Not answered
    }
    if (index === currentQuestion) {
        color = "blue"; // Current question
    }
    navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
});
}

window.onload = function () {
loadQuestion(currentQuestion);
startTimer();
};