const questions = [
  {
    num: 1,
    question_en: "Which keyword is used to define a subclass of an abstract class?",
    question_hi: "एब्स्ट्रैक्ट क्लास की सबक्लास को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["extends", "inherits", "implements", "super"],
    options_hi: ["extends", "inherits", "implements", "super"],
    answer_en: "extends",
    answer_hi: "extends",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the extension of compiled Java bytecode files?",
    question_hi: "कम्पाइल्ड जावा बाइटकोड फ़ाइलों का एक्सटेंशन क्या होता है?",
    options_en: [".java", ".class", ".jar", ".exe"],
    options_hi: [".java", ".class", ".jar", ".exe"],
    answer_en: ".class",
    answer_hi: ".class",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which component converts Java source code into bytecode?",
    question_hi: "कौन सा घटक जावा सोर्स कोड को बाइटकोड में बदलता है?",
    options_en: ["JVM", "JRE", "JIT", "Javac"],
    options_hi: ["JVM", "JRE", "JIT", "Javac"],
    answer_en: "Javac",
    answer_hi: "Javac",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which keyword is used to stop a thread temporarily?",
    question_hi: "कौन सा कीवर्ड एक थ्रेड को अस्थायी रूप से रोकने के लिए उपयोग किया जाता है?",
    options_en: ["pause", "sleep", "wait", "halt"],
    options_hi: ["pause", "sleep", "wait", "halt"],
    answer_en: "sleep",
    answer_hi: "sleep",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which keyword is used to define a block that must execute regardless of exception?",
    question_hi: "कौन सा कीवर्ड एक ब्लॉक को परिभाषित करता है जो अपवाद होने पर भी चलता है?",
    options_en: ["try", "catch", "finally", "throw"],
    options_hi: ["try", "catch", "finally", "throw"],
    answer_en: "finally",
    answer_hi: "finally",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which of the following represents a valid Java array declaration?",
    question_hi: "निम्न में से कौन सा एक वैध जावा ऐरे घोषणा है?",
    options_en: ["int arr[];", "int arr;", "arr int[];", "array int;"],
    options_hi: ["int arr[];", "int arr;", "arr int[];", "array int;"],
    answer_en: "int arr[];",
    answer_hi: "int arr[];",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which method can be used to get the current thread in Java?",
    question_hi: "जावा में वर्तमान थ्रेड प्राप्त करने के लिए किस मेथड का उपयोग होता है?",
    options_en: ["Thread.get()", "Thread.run()", "Thread.currentThread()", "Thread.active()"],
    options_hi: ["Thread.get()", "Thread.run()", "Thread.currentThread()", "Thread.active()"],
    answer_en: "Thread.currentThread()",
    answer_hi: "Thread.currentThread()",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which keyword is used to make a variable belong to the class rather than an instance?",
    question_hi: "कौन सा कीवर्ड एक वेरिएबल को इंस्टेंस की बजाय क्लास का बनाता है?",
    options_en: ["final", "static", "constant", "shared"],
    options_hi: ["final", "static", "constant", "shared"],
    answer_en: "static",
    answer_hi: "static",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which operator is used to create an instance of a class?",
    question_hi: "किस ऑपरेटर का उपयोग ऑब्जेक्ट बनाने के लिए किया जाता है?",
    options_en: ["instanceof", "create", "new", "object"],
    options_hi: ["instanceof", "create", "new", "object"],
    answer_en: "new",
    answer_hi: "new",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which collection class allows key-value pairs with duplicate values but unique keys?",
    question_hi: "कौन सी कलेक्शन क्लास यूनिक की के साथ डुप्लिकेट वैल्यू की अनुमति देती है?",
    options_en: ["Set", "List", "Map", "Vector"],
    options_hi: ["Set", "List", "Map", "Vector"],
    answer_en: "Map",
    answer_hi: "Map",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which exception is thrown when an array is accessed out of bounds?",
    question_hi: "जब किसी ऐरे को सीमा से बाहर एक्सेस किया जाता है तो कौन सा अपवाद फेंका जाता है?",
    options_en: ["IOException", "NullPointerException", "ArrayIndexOutOfBoundsException", "ClassCastException"],
    options_hi: ["IOException", "NullPointerException", "ArrayIndexOutOfBoundsException", "ClassCastException"],
    answer_en: "ArrayIndexOutOfBoundsException",
    answer_hi: "ArrayIndexOutOfBoundsException",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which of these keywords is used for method overloading?",
    question_hi: "इनमें से कौन सा कीवर्ड मेथड ओवरलोडिंग के लिए उपयोग होता है?",
    options_en: ["overload", "override", "sameName", "None of these"],
    options_hi: ["overload", "override", "sameName", "इनमें से कोई नहीं"],
    answer_en: "None of these",
    answer_hi: "इनमें से कोई नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the return type of System.out.println()?",
    question_hi: "System.out.println() का रिटर्न प्रकार क्या है?",
    options_en: ["int", "void", "String", "boolean"],
    options_hi: ["int", "void", "String", "boolean"],
    answer_en: "void",
    answer_hi: "void",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which class provides mathematical functions like sqrt() and pow()?",
    question_hi: "कौन सा क्लास sqrt() और pow() जैसे गणित फ़ंक्शन प्रदान करता है?",
    options_en: ["System", "Math", "Number", "Calculator"],
    options_hi: ["System", "Math", "Number", "Calculator"],
    answer_en: "Math",
    answer_hi: "Math",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which method is called just before an object is garbage collected?",
    question_hi: "ऑब्जेक्ट के गार्बेज कलेक्ट होने से पहले कौन सा मेथड कॉल होता है?",
    options_en: ["finalize()", "delete()", "dispose()", "clear()"],
    options_hi: ["finalize()", "delete()", "dispose()", "clear()"],
    answer_en: "finalize()",
    answer_hi: "finalize()",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which of these is not a valid Java access modifier?",
    question_hi: "इनमें से कौन सा जावा एक्सेस मॉडिफायर मान्य नहीं है?",
    options_en: ["private", "protected", "default", "external"],
    options_hi: ["private", "protected", "default", "external"],
    answer_en: "external",
    answer_hi: "external",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which keyword is used to define a method that must be implemented by subclasses?",
    question_hi: "कौन सा कीवर्ड ऐसे मेथड के लिए उपयोग होता है जिसे सबक्लास को अनिवार्य रूप से लागू करना चाहिए?",
    options_en: ["final", "static", "abstract", "implements"],
    options_hi: ["final", "static", "abstract", "implements"],
    answer_en: "abstract",
    answer_hi: "abstract",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the parent package of all Java packages?",
    question_hi: "सभी जावा पैकेज का पैरेंट पैकेज कौन सा है?",
    options_en: ["java", "lang", "util", "root"],
    options_hi: ["java", "lang", "util", "root"],
    answer_en: "java",
    answer_hi: "java",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which statement is used to throw an exception manually?",
    question_hi: "कौन सा स्टेटमेंट मैन्युअली एक्सेप्शन फेंकने के लिए उपयोग होता है?",
    options_en: ["throws", "throw", "raise", "error"],
    options_hi: ["throws", "throw", "raise", "error"],
    answer_en: "throw",
    answer_hi: "throw",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which of these allows dynamic method dispatch in Java?",
    question_hi: "इनमें से कौन सा जावा में डायनामिक मेथड डिस्पैच को सक्षम बनाता है?",
    options_en: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    options_hi: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    answer_en: "Polymorphism",
    answer_hi: "Polymorphism",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which keyword is used to refer to the superclass version of a variable or method?",
    question_hi: "कौन सा कीवर्ड सुपरक्लास के वेरिएबल या मेथड को संदर्भित करता है?",
    options_en: ["this", "super", "extends", "parent"],
    options_hi: ["this", "super", "extends", "parent"],
    answer_en: "super",
    answer_hi: "super",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which interface is used to iterate over a collection?",
    question_hi: "कलेक्शन पर इटरेशन के लिए कौन सा इंटरफेस उपयोग होता है?",
    options_en: ["Iterator", "Iterable", "Loop", "Collection"],
    options_hi: ["Iterator", "Iterable", "Loop", "Collection"],
    answer_en: "Iterator",
    answer_hi: "Iterator",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which class is the root of the Java exception hierarchy?",
    question_hi: "जावा एक्सेप्शन हाइरार्की का रूट क्लास कौन सा है?",
    options_en: ["Throwable", "Exception", "Error", "RuntimeException"],
    options_hi: ["Throwable", "Exception", "Error", "RuntimeException"],
    answer_en: "Throwable",
    answer_hi: "Throwable",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which keyword is used to make a class unmodifiable?",
    question_hi: "कौन सा कीवर्ड क्लास को अनमॉडिफायबल बनाता है?",
    options_en: ["static", "final", "sealed", "const"],
    options_hi: ["static", "final", "sealed", "const"],
    answer_en: "final",
    answer_hi: "final",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which operator is used for bitwise OR in Java?",
    question_hi: "जावा में बिटवाइज OR के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["||", "|", "or", "&&"],
    options_hi: ["||", "|", "or", "&&"],
    answer_en: "|",
    answer_hi: "|",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which function is used to find the absolute value of a number?",
    question_hi: "किस फ़ंक्शन का उपयोग संख्या का एब्सोल्यूट मान प्राप्त करने के लिए किया जाता है?",
    options_en: ["Math.abs()", "Math.absolute()", "Math.value()", "Math.positive()"],
    options_hi: ["Math.abs()", "Math.absolute()", "Math.value()", "Math.positive()"],
    answer_en: "Math.abs()",
    answer_hi: "Math.abs()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which of these is not a valid String method?",
    question_hi: "इनमें से कौन सा एक वैध String मेथड नहीं है?",
    options_en: ["concat()", "length()", "append()", "toLowerCase()"],
    options_hi: ["concat()", "length()", "append()", "toLowerCase()"],
    answer_en: "append()",
    answer_hi: "append()",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which class is used to take formatted input from console?",
    question_hi: "कंसोल से फॉर्मैटेड इनपुट लेने के लिए कौन सा क्लास उपयोग होता है?",
    options_en: ["Scanner", "BufferedReader", "Console", "InputReader"],
    options_hi: ["Scanner", "BufferedReader", "Console", "InputReader"],
    answer_en: "Scanner",
    answer_hi: "Scanner",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which keyword is used to create a thread by implementing an interface?",
    question_hi: "इंटरफेस को लागू कर थ्रेड बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["Runnable", "Thread", "Executor", "Task"],
    options_hi: ["Runnable", "Thread", "Executor", "Task"],
    answer_en: "Runnable",
    answer_hi: "Runnable",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which type of variable is shared among all instances of a class?",
    question_hi: "क्लास की सभी इंस्टेंस के बीच कौन सा वेरिएबल साझा होता है?",
    options_en: ["local", "instance", "static", "final"],
    options_hi: ["local", "instance", "static", "final"],
    answer_en: "static",
    answer_hi: "static",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which method of Object class is used to compare two objects?",
    question_hi: "दो ऑब्जेक्ट्स की तुलना करने के लिए Object क्लास का कौन सा मेथड उपयोग होता है?",
    options_en: ["equals()", "compare()", "==", "isEqual()"],
    options_hi: ["equals()", "compare()", "==", "isEqual()"],
    answer_en: "equals()",
    answer_hi: "equals()",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which Java operator is used for conditional branching?",
    question_hi: "कंडिशनल ब्रांचिंग के लिए जावा में कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["?", ":", "?:", "->"],
    options_hi: ["?", ":", "?:", "->"],
    answer_en: "?:",
    answer_hi: "?:",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which keyword prevents a variable from being changed once initialized?",
    question_hi: "कौन सा कीवर्ड किसी वेरिएबल को इनिशियलाइज़ होने के बाद बदलने से रोकता है?",
    options_en: ["static", "final", "const", "volatile"],
    options_hi: ["static", "final", "const", "volatile"],
    answer_en: "final",
    answer_hi: "final",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which keyword is used to catch multiple exceptions together?",
    question_hi: "कई एक्सेप्शन एक साथ पकड़ने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["multi", "catch", "multi-catch", "pipe"],
    options_hi: ["multi", "catch", "multi-catch", "pipe"],
    answer_en: "multi-catch",
    answer_hi: "multi-catch",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which class provides methods for manipulating arrays?",
    question_hi: "कौन सा क्लास ऐरे को मैनेज करने के लिए मेथड प्रदान करता है?",
    options_en: ["Collections", "Arrays", "List", "System"],
    options_hi: ["Collections", "Arrays", "List", "System"],
    answer_en: "Arrays",
    answer_hi: "Arrays",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to get the current time in milliseconds?",
    question_hi: "मिलीसेकंड में वर्तमान समय प्राप्त करने के लिए कौन सा मेथड उपयोग होता है?",
    options_en: ["System.getTime()", "System.nanoTime()", "System.currentTimeMillis()", "Date.now()"],
    options_hi: ["System.getTime()", "System.nanoTime()", "System.currentTimeMillis()", "Date.now()"],
    answer_en: "System.currentTimeMillis()",
    answer_hi: "System.currentTimeMillis()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which keyword allows using a class from another package?",
    question_hi: "दूसरे पैकेज से क्लास उपयोग करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["package", "include", "import", "use"],
    options_hi: ["package", "include", "import", "use"],
    answer_en: "import",
    answer_hi: "import",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which keyword allows a subclass to access superclass constructors?",
    question_hi: "सुपरक्लास के कंस्ट्रक्टर तक पहुंचने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["extends", "super", "this", "base"],
    options_hi: ["extends", "super", "this", "base"],
    answer_en: "super",
    answer_hi: "super",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which method can convert a string to an integer?",
    question_hi: "कौन सा मेथड स्ट्रिंग को इंटीजर में बदल सकता है?",
    options_en: ["Integer.parseInt()", "String.toInt()", "Integer.value()", "parseInt()"],
    options_hi: ["Integer.parseInt()", "String.toInt()", "Integer.value()", "parseInt()"],
    answer_en: "Integer.parseInt()",
    answer_hi: "Integer.parseInt()",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which Java concept is achieved using interfaces?",
    question_hi: "कौन सा जावा कॉन्सेप्ट इंटरफेस के माध्यम से प्राप्त किया जाता है?",
    options_en: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
    options_hi: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
    answer_en: "Abstraction",
    answer_hi: "Abstraction",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which of these methods belongs to the Thread class?",
    question_hi: "इनमें से कौन सा मेथड Thread क्लास का हिस्सा है?",
    options_en: ["run()", "execute()", "start()", "both run() and start()"],
    options_hi: ["run()", "execute()", "start()", "दोनों run() और start()"],
    answer_en: "both run() and start()",
    answer_hi: "दोनों run() और start()",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which keyword indicates that a method cannot be overridden?",
    question_hi: "कौन सा कीवर्ड यह दर्शाता है कि मेथड को ओवरराइड नहीं किया जा सकता?",
    options_en: ["final", "static", "const", "sealed"],
    options_hi: ["final", "static", "const", "sealed"],
    answer_en: "final",
    answer_hi: "final",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which class stores key-value elements and maintains insertion order?",
    question_hi: "कौन सा क्लास की-वैल्यू तत्वों को स्टोर करता है और इंसर्शन ऑर्डर बनाए रखता है?",
    options_en: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"],
    options_hi: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"],
    answer_en: "LinkedHashMap",
    answer_hi: "LinkedHashMap",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which of these is not a valid collection type?",
    question_hi: "इनमें से कौन सा एक मान्य कलेक्शन प्रकार नहीं है?",
    options_en: ["List", "Set", "Map", "Record"],
    options_hi: ["List", "Set", "Map", "Record"],
    answer_en: "Record",
    answer_hi: "Record",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which keyword is used to prevent inheritance of a class?",
    question_hi: "कौन सा कीवर्ड क्लास की इनहेरिटेंस रोकने के लिए उपयोग होता है?",
    options_en: ["static", "final", "sealed", "abstract"],
    options_hi: ["static", "final", "sealed", "abstract"],
    answer_en: "final",
    answer_hi: "final",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method returns the character at a given index?",
    question_hi: "कौन सा मेथड दिए गए इंडेक्स पर स्थित कैरेक्टर लौटाता है?",
    options_en: ["charAt()", "getChar()", "indexOf()", "charOf()"],
    options_hi: ["charAt()", "getChar()", "indexOf()", "charOf()"],
    answer_en: "charAt()",
    answer_hi: "charAt()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which operator performs a ternary operation?",
    question_hi: "कौन सा ऑपरेटर टर्नरी ऑपरेशन करता है?",
    options_en: ["if-else", "?:", "&&", "||"],
    options_hi: ["if-else", "?:", "&&", "||"],
    answer_en: "?:",
    answer_hi: "?:",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which keyword is used to synchronize a method?",
    question_hi: "कौन सा कीवर्ड मेथड को सिंक्रोनाइज़ करने के लिए उपयोग होता है?",
    options_en: ["sync", "synchronized", "locked", "threadsafe"],
    options_hi: ["sync", "synchronized", "locked", "threadsafe"],
    answer_en: "synchronized",
    answer_hi: "synchronized",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which method is automatically called when an object is printed?",
    question_hi: "कौन सा मेथड ऑब्जेक्ट प्रिंट होने पर स्वतः कॉल होता है?",
    options_en: ["print()", "toString()", "display()", "getInfo()"],
    options_hi: ["print()", "toString()", "display()", "getInfo()"],
    answer_en: "toString()",
    answer_hi: "toString()",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which keyword is used to define a nested class?",
    question_hi: "नेस्टेड क्लास को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    options_en: ["inner", "nested", "class", "None of these"],
    options_hi: ["inner", "nested", "class", "इनमें से कोई नहीं"],
    answer_en: "class",
    answer_hi: "class",
    attempted: false,
    selected: ""
  }
]




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
