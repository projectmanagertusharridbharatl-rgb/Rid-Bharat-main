const questions = [
  {
    num: 1,
    question_en: "Which keyword is used to define a class in Java?",
    question_hi: "Java में क्लास को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["define", "class", "struct", "object"],
    options_hi: ["define", "class", "struct", "object"],
    answer_en: "class",
    answer_hi: "class",
    attempted: false,
    selected: ""
  },

  {
    num: 2,
    question_en: "Which of the following is not a primitive data type in Java?",
    question_hi: "इनमें से कौन सा Java में प्रिमिटिव डेटा टाइप नहीं है?",
    options_en: ["int", "float", "String", "boolean"],
    options_hi: ["int", "float", "String", "boolean"],
    answer_en: "String",
    answer_hi: "String",
    attempted: false,
    selected: ""
  },

  {
    num: 3,
    question_en: "What is the entry point of a Java program?",
    question_hi: "Java प्रोग्राम का एंट्री पॉइंट क्या है?",
    options_en: ["start()", "main()", "execute()", "run()"],
    options_hi: ["start()", "main()", "execute()", "run()"],
    answer_en: "main()",
    answer_hi: "main()",
    attempted: false,
    selected: ""
  },

  {
    num: 4,
    question_en: "Which symbol is used to terminate a statement in Java?",
    question_hi: "Java में स्टेटमेंट को समाप्त करने के लिए कौन सा सिंबल उपयोग होता है?",
    options_en: [";", ":", ".", ","],
    options_hi: [";", ":", ".", ","],
    answer_en: ";",
    answer_hi: ";",
    attempted: false,
    selected: ""
  },

  {
    num: 5,
    question_en: "Which keyword is used to inherit a class in Java?",
    question_hi: "Java में क्लास इनहेरिट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["inherits", "extends", "implements", "super"],
    options_hi: ["inherits", "extends", "implements", "super"],
    answer_en: "extends",
    answer_hi: "extends",
    attempted: false,
    selected: ""
  },

  {
    num: 6,
    question_en: "Which class is used to take input from the user in Java?",
    question_hi: "Java में यूज़र से इनपुट लेने के लिए कौन सी क्लास उपयोग होती है?",
    options_en: ["BufferedReader", "Scanner", "InputStream", "DataReader"],
    options_hi: ["BufferedReader", "Scanner", "InputStream", "DataReader"],
    answer_en: "Scanner",
    answer_hi: "Scanner",
    attempted: false,
    selected: ""
  },

  {
    num: 7,
    question_en: "Which of the following is not a valid access modifier?",
    question_hi: "इनमें से कौन सा एक वैध एक्सेस मॉडिफ़ायर नहीं है?",
    options_en: ["public", "private", "protected", "global"],
    options_hi: ["public", "private", "protected", "global"],
    answer_en: "global",
    answer_hi: "global",
    attempted: false,
    selected: ""
  },

  {
    num: 8,
    question_en: "Which operator is used for equality comparison?",
    question_hi: "इक्वलिटी तुलना के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "==", "!=", "==="],
    options_hi: ["=", "==", "!=", "==="],
    answer_en: "==",
    answer_hi: "==",
    attempted: false,
    selected: ""
  },

  {
    num: 9,
    question_en: "What is used to create objects in Java?",
    question_hi: "Java में ऑब्जेक्ट बनाने के लिए क्या उपयोग होता है?",
    options_en: ["new", "create", "make", "instance"],
    options_hi: ["new", "create", "make", "instance"],
    answer_en: "new",
    answer_hi: "new",
    attempted: false,
    selected: ""
  },

  {
    num: 10,
    question_en: "Which of the following loops is entry-controlled?",
    question_hi: "इनमें से कौन सा लूप एंट्री-कंट्रोल्ड है?",
    options_en: ["do-while", "for", "while", "both b and c"],
    options_hi: ["do-while", "for", "while", "दोनों b और c"],
    answer_en: "both b and c",
    answer_hi: "दोनों b और c",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "Which keyword is used to stop loop execution?",
    question_hi: "लूप को रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["exit", "stop", "break", "return"],
    options_hi: ["exit", "stop", "break", "return"],
    answer_en: "break",
    answer_hi: "break",
    attempted: false,
    selected: ""
  },

  {
    num: 12,
    question_en: "Which method is used to compare two strings?",
    question_hi: "दो स्ट्रिंग्स की तुलना करने के लिए कौन सी मेथड उपयोग होती है?",
    options_en: ["equals()", "==", "compare()", "compareTo()"],
    options_hi: ["equals()", "==", "compare()", "compareTo()"],
    answer_en: "equals()",
    answer_hi: "equals()",
    attempted: false,
    selected: ""
  },

  {
    num: 13,
    question_en: "Which package is automatically imported in every Java program?",
    question_hi: "हर Java प्रोग्राम में कौन सा पैकेज स्वतः इम्पोर्ट होता है?",
    options_en: ["java.io", "java.util", "java.lang", "java.net"],
    options_hi: ["java.io", "java.util", "java.lang", "java.net"],
    answer_en: "java.lang",
    answer_hi: "java.lang",
    attempted: false,
    selected: ""
  },

  {
    num: 14,
    question_en: "Which keyword is used to define a constant variable?",
    question_hi: "कांस्टेंट वेरिएबल को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["final", "static", "constant", "const"],
    options_hi: ["final", "static", "constant", "const"],
    answer_en: "final",
    answer_hi: "final",
    attempted: false,
    selected: ""
  },

  {
    num: 15,
    question_en: "Which method is used to get the length of a string?",
    question_hi: "स्ट्रिंग की लंबाई प्राप्त करने के लिए कौन सी मेथड उपयोग होती है?",
    options_en: ["len()", "length()", "size()", "count()"],
    options_hi: ["len()", "length()", "size()", "count()"],
    answer_en: "length()",
    answer_hi: "length()",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Which statement always executes after try and catch blocks?",
    question_hi: "try और catch ब्लॉक्स के बाद कौन सा स्टेटमेंट हमेशा चलता है?",
    options_en: ["end", "finally", "exit", "default"],
    options_hi: ["end", "finally", "exit", "default"],
    answer_en: "finally",
    answer_hi: "finally",
    attempted: false,
    selected: ""
  },

  {
    num: 17,
    question_en: "Which keyword is used to handle exceptions?",
    question_hi: "एक्सेप्शन हैंडल करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["error", "catch", "try", "Both try and catch"],
    options_hi: ["error", "catch", "try", "दोनों try और catch"],
    answer_en: "Both try and catch",
    answer_hi: "दोनों try और catch",
    attempted: false,
    selected: ""
  },

  {
    num: 18,
    question_en: "Which of these is not an OOP concept?",
    question_hi: "इनमें से कौन सा OOP की अवधारणा नहीं है?",
    options_en: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"],
    options_hi: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"],
    answer_en: "Compilation",
    answer_hi: "Compilation",
    attempted: false,
    selected: ""
  },

  {
    num: 19,
    question_en: "What is the parent class of all classes in Java?",
    question_hi: "Java में सभी क्लासेस की पैरेंट क्लास कौन सी है?",
    options_en: ["Base", "Object", "Core", "Root"],
    options_hi: ["Base", "Object", "Core", "Root"],
    answer_en: "Object",
    answer_hi: "Object",
    attempted: false,
    selected: ""
  },

  {
    num: 20,
    question_en: "Which keyword is used to inherit an interface?",
    question_hi: "इंटरफेस को इनहेरिट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["extends", "implements", "inherits", "super"],
    options_hi: ["extends", "implements", "inherits", "super"],
    answer_en: "implements",
    answer_hi: "implements",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "Which method must be in every Java application?",
    question_hi: "हर Java एप्लीकेशन में कौन सी मेथड आवश्यक है?",
    options_en: ["start()", "run()", "main()", "execute()"],
    options_hi: ["start()", "run()", "main()", "execute()"],
    answer_en: "main()",
    answer_hi: "main()",
    attempted: false,
    selected: ""
  },

  {
    num: 22,
    question_en: "What is the size of int in Java?",
    question_hi: "Java में int का साइज़ कितना होता है?",
    options_en: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
    options_hi: ["2 bytes", "4 bytes", "8 bytes", "OS पर निर्भर"],
    answer_en: "4 bytes",
    answer_hi: "4 bytes",
    attempted: false,
    selected: ""
  },

  {
    num: 23,
    question_en: "Which of the following is used for comments in Java?",
    question_hi: "Java में कमेंट के लिए क्या उपयोग होता है?",
    options_en: ["//", "#", "<!-- -->", "/* */"],
    options_hi: ["//", "#", "<!-- -->", "/* */"],
    answer_en: "//",
    answer_hi: "//",
    attempted: false,
    selected: ""
  },

  {
    num: 24,
    question_en: "Which keyword refers to the current object?",
    question_hi: "वर्तमान ऑब्जेक्ट को संदर्भित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["self", "this", "super", "own"],
    options_hi: ["self", "this", "super", "own"],
    answer_en: "this",
    answer_hi: "this",
    attempted: false,
    selected: ""
  },

  {
    num: 25,
    question_en: "Which keyword calls the parent class constructor?",
    question_hi: "पैरेंट क्लास के कंस्ट्रक्टर को कॉल करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["parent", "base", "super", "root"],
    options_hi: ["parent", "base", "super", "root"],
    answer_en: "super",
    answer_hi: "super",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "Which of these is not a valid identifier?",
    question_hi: "इनमें से कौन सा वैध आइडेंटिफ़ायर नहीं है?",
    options_en: ["_value", "value1", "1value", "value_"],
    options_hi: ["_value", "value1", "1value", "value_"],
    answer_en: "1value",
    answer_hi: "1value",
    attempted: false,
    selected: ""
  },

  {
    num: 27,
    question_en: "Which collection class allows duplicates?",
    question_hi: "कौन सा कलेक्शन डुप्लिकेट्स की अनुमति देता है?",
    options_en: ["Set", "List", "Map", "TreeSet"],
    options_hi: ["Set", "List", "Map", "TreeSet"],
    answer_en: "List",
    answer_hi: "List",
    attempted: false,
    selected: ""
  },

  {
    num: 28,
    question_en: "Which collection does not allow duplicates?",
    question_hi: "कौन सा कलेक्शन डुप्लिकेट्स की अनुमति नहीं देता?",
    options_en: ["ArrayList", "HashSet", "LinkedList", "Vector"],
    options_hi: ["ArrayList", "HashSet", "LinkedList", "Vector"],
    answer_en: "HashSet",
    answer_hi: "HashSet",
    attempted: false,
    selected: ""
  },

  {
    num: 29,
    question_en: "Which keyword makes a method belong to the class?",
    question_hi: "कौन सा कीवर्ड किसी मेथड को क्लास से संबंधित बनाता है?",
    options_en: ["static", "public", "final", "constant"],
    options_hi: ["static", "public", "final", "constant"],
    answer_en: "static",
    answer_hi: "static",
    attempted: false,
    selected: ""
  },

  {
    num: 30,
    question_en: "Which interface must be implemented for multithreading?",
    question_hi: "मल्टीथ्रेडिंग के लिए कौन सा इंटरफ़ेस लागू करना आवश्यक है?",
    options_en: ["Runnable", "Threadable", "Executable", "Task"],
    options_hi: ["Runnable", "Threadable", "Executable", "Task"],
    answer_en: "Runnable",
    answer_hi: "Runnable",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which method starts a thread?",
    question_hi: "कौन सी मेथड एक थ्रेड शुरू करती है?",
    options_en: ["start()", "run()", "execute()", "begin()"],
    options_hi: ["start()", "run()", "execute()", "begin()"],
    answer_en: "start()",
    answer_hi: "start()",
    attempted: false,
    selected: ""
  },

  {
    num: 32,
    question_en: "Which keyword is used for synchronization?",
    question_hi: "सिंक्रोनाइजेशन के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["sync", "locked", "synchronized", "threadsafe"],
    options_hi: ["sync", "locked", "synchronized", "threadsafe"],
    answer_en: "synchronized",
    answer_hi: "synchronized",
    attempted: false,
    selected: ""
  },

  {
    num: 33,
    question_en: "Which keyword prevents method overriding?",
    question_hi: "कौन सा कीवर्ड मेथड ओवरराइडिंग को रोकता है?",
    options_en: ["final", "private", "protected", "static"],
    options_hi: ["final", "private", "protected", "static"],
    answer_en: "final",
    answer_hi: "final",
    attempted: false,
    selected: ""
  },

  {
    num: 34,
    question_en: "Which class is used for file operations in Java?",
    question_hi: "Java में फाइल ऑपरेशन के लिए कौन सी क्लास उपयोग होती है?",
    options_en: ["File", "FileReader", "FileWriter", "All of these"],
    options_hi: ["File", "FileReader", "FileWriter", "इन सभी"],
    answer_en: "All of these",
    answer_hi: "इन सभी",
    attempted: false,
    selected: ""
  },

  {
    num: 35,
    question_en: "Which method reads a single character from a file?",
    question_hi: "फाइल से एक कैरेक्टर पढ़ने के लिए कौन सी मेथड उपयोग होती है?",
    options_en: ["readChar()", "read()", "getChar()", "nextChar()"],
    options_hi: ["readChar()", "read()", "getChar()", "nextChar()"],
    answer_en: "read()",
    answer_hi: "read()",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which keyword defines an abstract class?",
    question_hi: "कौन सा कीवर्ड एब्स्ट्रैक्ट क्लास को परिभाषित करता है?",
    options_en: ["abstract", "virtual", "interface", "class"],
    options_hi: ["abstract", "virtual", "interface", "class"],
    answer_en: "abstract",
    answer_hi: "abstract",
    attempted: false,
    selected: ""
  },

  {
    num: 37,
    question_en: "Which keyword defines an interface?",
    question_hi: "इंटरफेस को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["interface", "implements", "abstract", "protocol"],
    options_hi: ["interface", "implements", "abstract", "protocol"],
    answer_en: "interface",
    answer_hi: "interface",
    attempted: false,
    selected: ""
  },

  {
    num: 38,
    question_en: "Which collection class is synchronized?",
    question_hi: "कौन सा कलेक्शन synchronized है?",
    options_en: ["ArrayList", "HashMap", "Vector", "HashSet"],
    options_hi: ["ArrayList", "HashMap", "Vector", "HashSet"],
    answer_en: "Vector",
    answer_hi: "Vector",
    attempted: false,
    selected: ""
  },

  {
    num: 39,
    question_en: "Which of these is a checked exception?",
    question_hi: "इनमें से कौन सा checked exception है?",
    options_en: ["NullPointerException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
    options_hi: ["NullPointerException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
    answer_en: "IOException",
    answer_hi: "IOException",
    attempted: false,
    selected: ""
  },

  {
    num: 40,
    question_en: "What will System.exit(0) do?",
    question_hi: "System.exit(0) क्या करता है?",
    options_en: ["Terminates JVM", "Pauses JVM", "Restarts JVM", "Throws error"],
    options_hi: ["JVM को बंद करता है", "JVM को रोकता है", "JVM रीस्टार्ट करता है", "त्रुटि फेंकता है"],
    answer_en: "Terminates JVM",
    answer_hi: "JVM को बंद करता है",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "Which keyword is used to define packages in Java?",
    question_hi: "Java में पैकेज को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["package", "namespace", "include", "import"],
    options_hi: ["package", "namespace", "include", "import"],
    answer_en: "package",
    answer_hi: "package",
    attempted: false,
    selected: ""
  },

  {
    num: 42,
    question_en: "Which keyword is used to import packages?",
    question_hi: "पैकेज को इम्पोर्ट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["import", "include", "use", "load"],
    options_hi: ["import", "include", "use", "load"],
    answer_en: "import",
    answer_hi: "import",
    attempted: false,
    selected: ""
  },

  {
    num: 43,
    question_en: "What does JVM stand for?",
    question_hi: "JVM का पूरा नाम क्या है?",
    options_en: ["Java Virtual Machine", "Java Version Manager", "Java Value Machine", "Java Variable Manager"],
    options_hi: ["Java Virtual Machine", "Java Version Manager", "Java Value Machine", "Java Variable Manager"],
    answer_en: "Java Virtual Machine",
    answer_hi: "Java Virtual Machine",
    attempted: false,
    selected: ""
  },

  {
    num: 44,
    question_en: "Which method is used to find array length?",
    question_hi: "Array की लंबाई प्राप्त करने के लिए कौन सी मेथड उपयोग होती है?",
    options_en: ["length()", "size()", "count()", "len()"],
    options_hi: ["length()", "size()", "count()", "len()"],
    answer_en: "length()",
    answer_hi: "length()",
    attempted: false,
    selected: ""
  },

  {
    num: 45,
    question_en: "Which operator is used to concatenate strings?",
    question_hi: "Strings को जोड़ने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["+", "&", ".", "concat"],
    options_hi: ["+", "&", ".", "concat"],
    answer_en: "+",
    answer_hi: "+",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which exception is thrown when dividing by zero?",
    question_hi: "शून्य से विभाजन करने पर कौन सा exception फेंका जाता है?",
    options_en: ["IOException", "ArithmeticException", "NullPointerException", "RuntimeException"],
    options_hi: ["IOException", "ArithmeticException", "NullPointerException", "RuntimeException"],
    answer_en: "ArithmeticException",
    answer_hi: "ArithmeticException",
    attempted: false,
    selected: ""
  },

  {
    num: 47,
    question_en: "Which keyword is used to create an enumeration?",
    question_hi: "Enumeration बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["enum", "enumerate", "define", "type"],
    options_hi: ["enum", "enumerate", "define", "type"],
    answer_en: "enum",
    answer_hi: "enum",
    attempted: false,
    selected: ""
  },

  {
    num: 48,
    question_en: "Which method is used to pause a thread?",
    question_hi: "थ्रेड को रोकने के लिए कौन सी मेथड उपयोग होती है?",
    options_en: ["wait()", "sleep()", "stop()", "delay()"],
    options_hi: ["wait()", "sleep()", "stop()", "delay()"],
    answer_en: "sleep()",
    answer_hi: "sleep()",
    attempted: false,
    selected: ""
  },

  {
    num: 49,
    question_en: "Which collection stores unique elements in sorted order?",
    question_hi: "कौन सा कलेक्शन यूनिक एलिमेंट्स को sorted order में स्टोर करता है?",
    options_en: ["HashSet", "TreeSet", "LinkedList", "ArrayList"],
    options_hi: ["HashSet", "TreeSet", "LinkedList", "ArrayList"],
    answer_en: "TreeSet",
    answer_hi: "TreeSet",
    attempted: false,
    selected: ""
  },

  {
    num: 50,
    question_en: "Which collection maintains insertion order and does not allow duplicates?",
    question_hi: "कौन सा कलेक्शन insertion order बनाए रखता है और duplicates की अनुमति नहीं देता?",
    options_en: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"],
    options_hi: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"],
    answer_en: "LinkedHashSet",
    answer_hi: "LinkedHashSet",
    attempted: false,
    selected: ""
  }
];

// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

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
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ (FINAL FIXED) ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // ⭐ LIVE TIME CALCULATION (CORRECT)
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // SAVE TIME
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
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

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // SAVE DATA
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // GO TO RESULT PAGE
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
        <div class="circle"
        style="background:${color}"
        onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA (NO CHANGE) ----------------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};
