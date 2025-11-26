const questions = [
  {
    num: 1,
    question_en: "Which of the following is not a Java keyword?",
    question_hi: "निम्न में से कौन सा जावा कीवर्ड नहीं है?",
    options_en: ["static", "void", "then", "switch"],
    options_hi: ["static", "void", "then", "switch"],
    answer_en: "then",
    answer_hi: "then",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the size of a char variable in Java?",
    question_hi: "जावा में char वेरिएबल का आकार कितना होता है?",
    options_en: ["8 bits", "16 bits", "32 bits", "64 bits"],
    options_hi: ["8 बिट", "16 बिट", "32 बिट", "64 बिट"],
    answer_en: "16 bits",
    answer_hi: "16 बिट",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which method is called when an object is created?",
    question_hi: "जब एक ऑब्जेक्ट बनाया जाता है, तब कौन सी मेथड कॉल होती है?",
    options_en: ["finalize()", "main()", "constructor", "start()"],
    options_hi: ["finalize()", "main()", "constructor", "start()"],
    answer_en: "constructor",
    answer_hi: "constructor",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which of these is not a valid access modifier in Java?",
    question_hi: "इनमें से कौन जावा में वैध एक्सेस मॉडिफ़ायर नहीं है?",
    options_en: ["public", "private", "protected", "internal"],
    options_hi: ["public", "private", "protected", "internal"],
    answer_en: "internal",
    answer_hi: "internal",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which keyword is used to prevent inheritance?",
    question_hi: "इनहेरिटेंस रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["final", "static", "sealed", "const"],
    options_hi: ["final", "static", "sealed", "const"],
    answer_en: "final",
    answer_hi: "final",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which operator is used to compare two values?",
    question_hi: "दो मानों की तुलना करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "==", "===", "!="],
    options_hi: ["=", "==", "===", "!="],
    answer_en: "==",
    answer_hi: "==",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which of the following is not a valid loop in Java?",
    question_hi: "निम्न में से कौन सा जावा में वैध लूप नहीं है?",
    options_en: ["for", "foreach", "while", "do-while"],
    options_hi: ["for", "foreach", "while", "do-while"],
    answer_en: "foreach",
    answer_hi: "foreach",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which package is automatically imported in every Java program?",
    question_hi: "प्रत्येक जावा प्रोग्राम में स्वचालित रूप से कौन सा पैकेज इंपोर्ट होता है?",
    options_en: ["java.util", "java.io", "java.lang", "java.net"],
    options_hi: ["java.util", "java.io", "java.lang", "java.net"],
    answer_en: "java.lang",
    answer_hi: "java.lang",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which of the following is used to create a thread?",
    question_hi: "थ्रेड बनाने के लिए इनमें से क्या उपयोग होता है?",
    options_en: ["Runnable interface", "Thread class", "Both", "None"],
    options_hi: ["Runnable interface", "Thread class", "Both", "None"],
    answer_en: "Both",
    answer_hi: "Both",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which exception is thrown when dividing by zero?",
    question_hi: "शून्य से विभाजन करने पर कौन सा अपवाद फेंका जाता है?",
    options_en: ["ArithmeticException", "NullPointerException", "IOException", "ArrayIndexOutOfBoundsException"],
    options_hi: ["ArithmeticException", "NullPointerException", "IOException", "ArrayIndexOutOfBoundsException"],
    answer_en: "ArithmeticException",
    answer_hi: "ArithmeticException",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "Which data type is used to store decimal numbers?",
    question_hi: "दशमलव संख्याएँ संग्रहीत करने के लिए कौन सा डेटा प्रकार उपयोग होता है?",
    options_en: ["int", "float", "char", "boolean"],
    options_hi: ["int", "float", "char", "boolean"],
    answer_en: "float",
    answer_hi: "float",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the default value of a boolean variable?",
    question_hi: "boolean वेरिएबल का डिफ़ॉल्ट मान क्या है?",
    options_en: ["true", "false", "0", "null"],
    options_hi: ["true", "false", "0", "null"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which class is the superclass of all classes in Java?",
    question_hi: "जावा में सभी क्लासों की सुपरक्लास कौन सी है?",
    options_en: ["Object", "Class", "Main", "Base"],
    options_hi: ["Object", "Class", "Main", "Base"],
    answer_en: "Object",
    answer_hi: "Object",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method must be implemented by all threads?",
    question_hi: "सभी थ्रेड्स में कौन सी मेथड अनिवार्य रूप से लागू होती है?",
    options_en: ["run()", "start()", "stop()", "sleep()"],
    options_hi: ["run()", "start()", "stop()", "sleep()"],
    answer_en: "run()",
    answer_hi: "run()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What does JVM stand for?",
    question_hi: "JVM का पूरा नाम क्या है?",
    options_en: ["Java Virtual Machine", "Java Variable Method", "Java Verified Mode", "Java Version Manager"],
    options_hi: ["Java Virtual Machine", "Java Variable Method", "Java Verified Mode", "Java Version Manager"],
    answer_en: "Java Virtual Machine",
    answer_hi: "Java Virtual Machine",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Which keyword is used to define an abstract class?",
    question_hi: "एब्सट्रैक्ट क्लास को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["virtual", "abstract", "interface", "base"],
    options_hi: ["virtual", "abstract", "interface", "base"],
    answer_en: "abstract",
    answer_hi: "abstract",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which collection class allows duplicate elements?",
    question_hi: "कौन सा कलेक्शन क्लास डुप्लीकेट एलिमेंट की अनुमति देता है?",
    options_en: ["Set", "List", "Map", "TreeSet"],
    options_hi: ["Set", "List", "Map", "TreeSet"],
    answer_en: "List",
    answer_hi: "List",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to get the length of an array?",
    question_hi: "एरे की लंबाई प्राप्त करने के लिए कौन सी मेथड उपयोग होती है?",
    options_en: ["length()", "size()", "length", "getSize()"],
    options_hi: ["length()", "size()", "length", "getSize()"],
    answer_en: "length",
    answer_hi: "length",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which keyword is used to inherit a class in Java?",
    question_hi: "जावा में किसी क्लास को इनहेरिट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["extends", "implements", "inherits", "super"],
    options_hi: ["extends", "implements", "inherits", "super"],
    answer_en: "extends",
    answer_hi: "extends",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which of these is a marker interface?",
    question_hi: "इनमें से कौन सा मार्कर इंटरफ़ेस है?",
    options_en: ["Serializable", "Runnable", "Comparable", "Cloneable"],
    options_hi: ["Serializable", "Runnable", "Comparable", "Cloneable"],
    answer_en: "Serializable",
    answer_hi: "Serializable",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "Which of the following can be used to handle exceptions?",
    question_hi: "अपवादों को संभालने के लिए इनमें से क्या उपयोग होता है?",
    options_en: ["try-catch", "if-else", "for loop", "switch"],
    options_hi: ["try-catch", "if-else", "for loop", "switch"],
    answer_en: "try-catch",
    answer_hi: "try-catch",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which keyword is used to refer to the current object?",
    question_hi: "वर्तमान ऑब्जेक्ट को संदर्भित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["this", "super", "self", "own"],
    options_hi: ["this", "super", "self", "own"],
    answer_en: "this",
    answer_hi: "this",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which method is used to start a thread?",
    question_hi: "थ्रेड शुरू करने के लिए कौन सी मेथड उपयोग होती है?",
    options_en: ["run()", "execute()", "start()", "begin()"],
    options_hi: ["run()", "execute()", "start()", "begin()"],
    answer_en: "start()",
    answer_hi: "start()",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which of the following is not an OOP principle?",
    question_hi: "इनमें से कौन सा OOP सिद्धांत नहीं है?",
    options_en: ["Inheritance", "Encapsulation", "Abstraction", "Compilation"],
    options_hi: ["Inheritance", "Encapsulation", "Abstraction", "Compilation"],
    answer_en: "Compilation",
    answer_hi: "Compilation",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which class provides system input and output?",
    question_hi: "सिस्टम इनपुट और आउटपुट के लिए कौन सा क्लास उपयोग होता है?",
    options_en: ["System", "Scanner", "Console", "Input"],
    options_hi: ["System", "Scanner", "Console", "Input"],
    answer_en: "System",
    answer_hi: "System",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "Which operator is used to access members of a class?",
    question_hi: "क्लास के सदस्यों तक पहुँचने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: [".", "::", "->", ":"],
    options_hi: [".", "::", "->", ":"],
    answer_en: ".",
    answer_hi: ".",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What does the 'break' keyword do in a loop?",
    question_hi: "'break' कीवर्ड लूप में क्या करता है?",
    options_en: ["Ends the loop", "Skips one iteration", "Restarts the loop", "None"],
    options_hi: ["लूप समाप्त करता है", "एक iteration स्किप करता है", "लूप फिर से शुरू करता है", "कोई नहीं"],
    answer_en: "Ends the loop",
    answer_hi: "लूप समाप्त करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to find the length of a string?",
    question_hi: "स्ट्रिंग की लंबाई पता करने के लिए कौन सी मेथड उपयोग होती है?",
    options_en: ["size()", "length()", "getLength()", "len()"],
    options_hi: ["size()", "length()", "getLength()", "len()"],
    answer_en: "length()",
    answer_hi: "length()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which of these is not a valid identifier in Java?",
    question_hi: "इनमें से कौन सा जावा में वैध पहचानकर्ता नहीं है?",
    options_en: ["_temp", "1value", "value1", "VALUE"],
    options_hi: ["_temp", "1value", "value1", "VALUE"],
    answer_en: "1value",
    answer_hi: "1value",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which keyword is used to create a subclass?",
    question_hi: "सबक्लास बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["extends", "inherits", "derives", "implements"],
    options_hi: ["extends", "inherits", "derives", "implements"],
    answer_en: "extends",
    answer_hi: "extends",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which keyword is used to define an interface?",
    question_hi: "इंटरफ़ेस को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["class", "interface", "implements", "extends"],
    options_hi: ["class", "interface", "implements", "extends"],
    answer_en: "interface",
    answer_hi: "interface",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which class is used to take user input?",
    question_hi: "यूज़र इनपुट लेने के लिए कौन सा क्लास उपयोग होता है?",
    options_en: ["BufferedReader", "Scanner", "InputStream", "Reader"],
    options_hi: ["BufferedReader", "Scanner", "InputStream", "Reader"],
    answer_en: "Scanner",
    answer_hi: "Scanner",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which keyword is used to create an object?",
    question_hi: "ऑब्जेक्ट बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["create", "new", "make", "build"],
    options_hi: ["create", "new", "make", "build"],
    answer_en: "new",
    answer_hi: "new",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which of the following is not a Java feature?",
    question_hi: "इनमें से कौन सा जावा की विशेषता नहीं है?",
    options_en: ["Object-Oriented", "Platform Dependent", "Portable", "Secure"],
    options_hi: ["Object-Oriented", "Platform Dependent", "Portable", "Secure"],
    answer_en: "Platform Dependent",
    answer_hi: "Platform Dependent",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which of these is a valid conditional operator?",
    question_hi: "इनमें से कौन सा एक वैध conditional ऑपरेटर है?",
    options_en: ["?:", "??", "::", "&&"],
    options_hi: ["?:", "??", "::", "&&"],
    answer_en: "?:",
    answer_hi: "?:",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which keyword is used to define a constant in Java?",
    question_hi: "जावा में स्थिरांक (constant) को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["final", "const", "static", "constant"],
    options_hi: ["final", "const", "static", "constant"],
    answer_en: "final",
    answer_hi: "final",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the default value of an int variable?",
    question_hi: "int वेरिएबल का डिफ़ॉल्ट मान क्या है?",
    options_en: ["0", "null", "undefined", "1"],
    options_hi: ["0", "null", "undefined", "1"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which of these is a wrapper class?",
    question_hi: "इनमें से कौन सा एक wrapper क्लास है?",
    options_en: ["Integer", "int", "number", "float"],
    options_hi: ["Integer", "int", "number", "float"],
    answer_en: "Integer",
    answer_hi: "Integer",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which keyword is used to import packages?",
    question_hi: "पैकेज आयात करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["include", "package", "import", "library"],
    options_hi: ["include", "package", "import", "library"],
    answer_en: "import",
    answer_hi: "import",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which of the following is not a control statement?",
    question_hi: "इनमें से कौन सा नियंत्रण कथन नहीं है?",
    options_en: ["if", "switch", "goto", "for"],
    options_hi: ["if", "switch", "goto", "for"],
    answer_en: "goto",
    answer_hi: "goto",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "Which of the following is not a type of constructor?",
    question_hi: "इनमें से कौन सा constructor का प्रकार नहीं है?",
    options_en: ["Default", "Parameterized", "Copy", "Inline"],
    options_hi: ["Default", "Parameterized", "Copy", "Inline"],
    answer_en: "Inline",
    answer_hi: "Inline",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which keyword is used for memory allocation?",
    question_hi: "मेमोरी आवंटन के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["malloc", "alloc", "new", "allocate"],
    options_hi: ["malloc", "alloc", "new", "allocate"],
    answer_en: "new",
    answer_hi: "new",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which statement is true about Java?",
    question_hi: "जावा के बारे में कौन सा कथन सत्य है?",
    options_en: ["Java is compiled only", "Java is interpreted only", "Java is both compiled and interpreted", "None"],
    options_hi: ["Java is compiled only", "Java is interpreted only", "Java is both compiled and interpreted", "None"],
    answer_en: "Java is both compiled and interpreted",
    answer_hi: "Java is both compiled and interpreted",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which of these allows multiple inheritance?",
    question_hi: "इनमें से कौन सा मल्टीपल इनहेरिटेंस की अनुमति देता है?",
    options_en: ["Classes", "Interfaces", "Abstract Classes", "None"],
    options_hi: ["Classes", "Interfaces", "Abstract Classes", "None"],
    answer_en: "Interfaces",
    answer_hi: "Interfaces",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which exception is the parent of all exceptions?",
    question_hi: "सभी exceptions का parent कौन है?",
    options_en: ["Throwable", "Exception", "Error", "RuntimeException"],
    options_hi: ["Throwable", "Exception", "Error", "RuntimeException"],
    answer_en: "Throwable",
    answer_hi: "Throwable",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which keyword is used to stop a thread?",
    question_hi: "थ्रेड को रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["stop()", "terminate()", "sleep()", "None"],
    options_hi: ["stop()", "terminate()", "sleep()", "None"],
    answer_en: "None",
    answer_hi: "None",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which of these types cannot be returned by a method?",
    question_hi: "इनमें से कौन सा प्रकार किसी मेथड द्वारा return नहीं किया जा सकता?",
    options_en: ["int", "float", "class", "constructor"],
    options_hi: ["int", "float", "class", "constructor"],
    answer_en: "constructor",
    answer_hi: "constructor",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which keyword is used for exception handling?",
    question_hi: "Exception handling के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["try", "catch", "throw", "All of these"],
    options_hi: ["try", "catch", "throw", "All of these"],
    answer_en: "All of these",
    answer_hi: "All of these",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which method is automatically called before an object is destroyed?",
    question_hi: "किस मेथड को ऑब्जेक्ट नष्ट होने से पहले स्वचालित रूप से कॉल किया जाता है?",
    options_en: ["finalize()", "delete()", "dispose()", "end()"],
    options_hi: ["finalize()", "delete()", "dispose()", "end()"],
    answer_en: "finalize()",
    answer_hi: "finalize()",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which keyword is used to define packages?",
    question_hi: "पैकेज परिभाषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["package", "namespace", "import", "module"],
    options_hi: ["package", "namespace", "import", "module"],
    answer_en: "package",
    answer_hi: "package",
    attempted: false,
    selected: ""
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