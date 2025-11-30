const questions = [

  {
    num: 1,
    question_en: "Which keyword is used to create a subclass object in Java?",
    question_hi: "Java में subclass का object बनाने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["new", "extends", "implements", "create"],
    options_hi: ["new", "extends", "implements", "create"],
    answer_en: "new",
    answer_hi: "new",
    attempted: false,
    selected: ""
  },

  {
    num: 2,
    question_en: "Which method is used to print output to the console?",
    question_hi: "Console पर output प्रिंट करने के लिए कौन सा method उपयोग होता है?",
    options_en: ["print()", "display()", "show()", "echo()"],
    options_hi: ["print()", "display()", "show()", "echo()"],
    answer_en: "print()",
    answer_hi: "print()",
    attempted: false,
    selected: ""
  },

  {
    num: 3,
    question_en: "What is the default value of an int variable in Java?",
    question_hi: "Java में int variable का default मान क्या होता है?",
    options_en: ["0", "1", "null", "undefined"],
    options_hi: ["0", "1", "null", "undefined"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },

  {
    num: 4,
    question_en: "Which keyword is used to define a constructor?",
    question_hi: "Constructor को परिभाषित करने के लिए क्या उपयोग होता है?",
    options_en: ["constructor", "init", "same as class name", "function"],
    options_hi: ["constructor", "init", "class नाम जैसा", "function"],
    answer_en: "same as class name",
    answer_hi: "class नाम जैसा",
    attempted: false,
    selected: ""
  },

  {
    num: 5,
    question_en: "Which keyword is used to exit from the current method?",
    question_hi: "Current method से बाहर निकलने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["stop", "break", "return", "exit"],
    options_hi: ["stop", "break", "return", "exit"],
    answer_en: "return",
    answer_hi: "return",
    attempted: false,
    selected: ""
  },

  {
    num: 6,
    question_en: "Which loop executes zero or more times based on a condition?",
    question_hi: "कौन सा loop condition के आधार पर zero या अधिक बार चलता है?",
    options_en: ["for", "while", "do-while", "foreach"],
    options_hi: ["for", "while", "do-while", "foreach"],
    answer_en: "while",
    answer_hi: "while",
    attempted: false,
    selected: ""
  },

  {
    num: 7,
    question_en: "Which operator is used to increment value by one?",
    question_hi: "Value को एक से बढ़ाने के लिए कौन सा operator उपयोग होता है?",
    options_en: ["++", "+", "+=", "--"],
    options_hi: ["++", "+", "+=", "--"],
    answer_en: "++",
    answer_hi: "++",
    attempted: false,
    selected: ""
  },

  {
    num: 8,
    question_en: "Which method converts string to character array?",
    question_hi: "String को character array में बदलने के लिए कौन सा method उपयोग होता है?",
    options_en: ["toCharArray()", "getChars()", "split()", "charArray()"],
    options_hi: ["toCharArray()", "getChars()", "split()", "charArray()"],
    answer_en: "toCharArray()",
    answer_hi: "toCharArray()",
    attempted: false,
    selected: ""
  },

  {
    num: 9,
    question_en: "Which keyword is used to refer to immediate parent class?",
    question_hi: "Immediate parent class को संदर्भित करने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["super", "this", "parent", "extends"],
    options_hi: ["super", "this", "parent", "extends"],
    answer_en: "super",
    answer_hi: "super",
    attempted: false,
    selected: ""
  },

  {
    num: 10,
    question_en: "Which class is the base of all exceptions in Java?",
    question_hi: "Java में सभी exceptions की base class कौन सी है?",
    options_en: ["Exception", "Throwable", "Error", "RuntimeException"],
    options_hi: ["Exception", "Throwable", "Error", "RuntimeException"],
    answer_en: "Throwable",
    answer_hi: "Throwable",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "Which block handles exceptions in Java?",
    question_hi: "Java में exceptions को कौन सा block handle करता है?",
    options_en: ["handle", "catch", "try", "error"],
    options_hi: ["handle", "catch", "try", "error"],
    answer_en: "catch",
    answer_hi: "catch",
    attempted: false,
    selected: ""
  },

  {
    num: 12,
    question_en: "Which of these is not a valid return type in Java?",
    question_hi: "इनमें से कौन Java का valid return type नहीं है?",
    options_en: ["void", "int", "real", "boolean"],
    options_hi: ["void", "int", "real", "boolean"],
    answer_en: "real",
    answer_hi: "real",
    attempted: false,
    selected: ""
  },

  {
    num: 13,
    question_en: "Which keyword is used to define an interface method without a body?",
    question_hi: "Body के बिना interface method को परिभाषित करने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["abstract", "interface", "virtual", "none"],
    options_hi: ["abstract", "interface", "virtual", "none"],
    answer_en: "abstract",
    answer_hi: "abstract",
    attempted: false,
    selected: ""
  },

  {
    num: 14,
    question_en: "Which collection class stores key-value pairs?",
    question_hi: "कौन सी collection class key-value pairs store करती है?",
    options_en: ["List", "Map", "Set", "Queue"],
    options_hi: ["List", "Map", "Set", "Queue"],
    answer_en: "Map",
    answer_hi: "Map",
    attempted: false,
    selected: ""
  },

  {
    num: 15,
    question_en: "Which exception is thrown when array index is invalid?",
    question_hi: "Array index invalid होने पर कौन सा exception throw होता है?",
    options_en: [
      "ArrayIndexOutOfBoundsException",
      "NullPointerException",
      "IOException",
      "ClassNotFoundException"
    ],
    options_hi: [
      "ArrayIndexOutOfBoundsException",
      "NullPointerException",
      "IOException",
      "ClassNotFoundException"
    ],
    answer_en: "ArrayIndexOutOfBoundsException",
    answer_hi: "ArrayIndexOutOfBoundsException",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Which keyword is used to prevent subclassing of a class?",
    question_hi: "किस keyword का उपयोग class को subclass होने से रोकने के लिए किया जाता है?",
    options_en: ["final", "private", "sealed", "static"],
    options_hi: ["final", "private", "sealed", "static"],
    answer_en: "final",
    answer_hi: "final",
    attempted: false,
    selected: ""
  },

  {
    num: 17,
    question_en: "Which operator is used for division?",
    question_hi: "Division के लिए कौन सा operator उपयोग होता है?",
    options_en: ["/", "%", "*", "-"],
    options_hi: ["/", "%", "*", "-"],
    answer_en: "/",
    answer_hi: "/",
    attempted: false,
    selected: ""
  },

  {
    num: 18,
    question_en: "Which data type is used to store decimal values?",
    question_hi: "Decimal values store करने के लिए कौन सा data type उपयोग होता है?",
    options_en: ["float", "int", "boolean", "char"],
    options_hi: ["float", "int", "boolean", "char"],
    answer_en: "float",
    answer_hi: "float",
    attempted: false,
    selected: ""
  },

  {
    num: 19,
    question_en: "Which method is called automatically when an object is created?",
    question_hi: "Object बनने पर कौन सा method अपने-आप call होता है?",
    options_en: ["main()", "constructor", "init()", "create()"],
    options_hi: ["main()", "constructor", "init()", "create()"],
    answer_en: "constructor",
    answer_hi: "constructor",
    attempted: false,
    selected: ""
  },

  {
    num: 20,
    question_en: "Which operator is used to access members of a class?",
    question_hi: "Class के members को access करने के लिए कौन सा operator उपयोग होता है?",
    options_en: [".", "->", "::", ":"],
    options_hi: [".", "->", "::", ":"],
    answer_en: ".",
    answer_hi: ".",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "Which class is the parent of all exception classes?",
    question_hi: "सभी exception classes की parent class कौन सी है?",
    options_en: ["Throwable", "Exception", "RuntimeException", "Error"],
    options_hi: ["Throwable", "Exception", "RuntimeException", "Error"],
    answer_en: "Throwable",
    answer_hi: "Throwable",
    attempted: false,
    selected: ""
  },

  {
    num: 22,
    question_en: "Which keyword is used to create a subclass relationship?",
    question_hi: "Subclass संबंध बनाने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["extends", "implements", "super", "inherits"],
    options_hi: ["extends", "implements", "super", "inherits"],
    answer_en: "extends",
    answer_hi: "extends",
    attempted: false,
    selected: ""
  },

  {
    num: 23,
    question_en: "Which loop can iterate through arrays easily?",
    question_hi: "कौन सा loop आसानी से array पर iterate कर सकता है?",
    options_en: ["foreach", "while", "for", "do-while"],
    options_hi: ["foreach", "while", "for", "do-while"],
    answer_en: "foreach",
    answer_hi: "foreach",
    attempted: false,
    selected: ""
  },

  {
    num: 24,
    question_en: "Which operator performs logical NOT operation?",
    question_hi: "Logical NOT operation के लिए कौन सा operator उपयोग होता है?",
    options_en: ["!", "||", "&&", "!="],
    options_hi: ["!", "||", "&&", "!="],
    answer_en: "!",
    answer_hi: "!",
    attempted: false,
    selected: ""
  },

  {
    num: 25,
    question_en: "Which keyword is used for method overriding?",
    question_hi: "Method overriding के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["@Override", "extends", "inherit", "super"],
    options_hi: ["@Override", "extends", "inherit", "super"],
    answer_en: "@Override",
    answer_hi: "@Override",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "Which method is used to find maximum of two numbers?",
    question_hi: "दो संख्याओं का अधिकतम मान पाने के लिए कौन सा method उपयोग होता है?",
    options_en: ["Math.max()", "Math.min()", "Math.abs()", "Math.pow()"],
    options_hi: ["Math.max()", "Math.min()", "Math.abs()", "Math.pow()"],
    answer_en: "Math.max()",
    answer_hi: "Math.max()",
    attempted: false,
    selected: ""
  },

  {
    num: 27,
    question_en: "Which method converts a number to a string?",
    question_hi: "कौन सा method संख्या को string में बदलता है?",
    options_en: ["String.valueOf()", "Integer.toString()", "toString()", "All of these"],
    options_hi: ["String.valueOf()", "Integer.toString()", "toString()", "इन सभी"],
    answer_en: "All of these",
    answer_hi: "इन सभी",
    attempted: false,
    selected: ""
  },

  {
    num: 28,
    question_en: "Which operator checks whether an object is of a certain type?",
    question_hi: "कौन सा operator चेक करता है कि object किसी विशेष type का है या नहीं?",
    options_en: ["instanceof", "type", "is", "equals"],
    options_hi: ["instanceof", "type", "is", "equals"],
    answer_en: "instanceof",
    answer_hi: "instanceof",
    attempted: false,
    selected: ""
  },

  {
    num: 29,
    question_en: "Which method is used to get current system time?",
    question_hi: "Current system time पाने के लिए कौन सा method उपयोग होता है?",
    options_en: ["System.currentTimeMillis()", "System.getTime()", "Date.now()", "Clock.now()"],
    options_hi: ["System.currentTimeMillis()", "System.getTime()", "Date.now()", "Clock.now()"],
    answer_en: "System.currentTimeMillis()",
    answer_hi: "System.currentTimeMillis()",
    attempted: false,
    selected: ""
  },

  {
    num: 30,
    question_en: "Which keyword is used to define a variable constant?",
    question_hi: "Variable को constant बनाने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["final", "const", "static", "sealed"],
    options_hi: ["final", "const", "static", "sealed"],
    answer_en: "final",
    answer_hi: "final",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which statement is used to skip current iteration?",
    question_hi: "Current iteration को skip करने के लिए कौन सा statement उपयोग होता है?",
    options_en: ["skip", "next", "continue", "break"],
    options_hi: ["skip", "next", "continue", "break"],
    answer_en: "continue",
    answer_hi: "continue",
    attempted: false,
    selected: ""
  },

  {
    num: 32,
    question_en: "Which class is used for mathematical operations?",
    question_hi: "Mathematical operations के लिए कौन सी class उपयोग होती है?",
    options_en: ["Math", "Number", "Calculator", "Arithmetic"],
    options_hi: ["Math", "Number", "Calculator", "Arithmetic"],
    answer_en: "Math",
    answer_hi: "Math",
    attempted: false,
    selected: ""
  },

  {
    num: 33,
    question_en: "Which keyword makes a variable belong to a class?",
    question_hi: "कौन सा keyword variable को class का member बनाता है?",
    options_en: ["static", "final", "public", "constant"],
    options_hi: ["static", "final", "public", "constant"],
    answer_en: "static",
    answer_hi: "static",
    attempted: false,
    selected: ""
  },

  {
    num: 34,
    question_en: "Which exception occurs when a null object is accessed?",
    question_hi: "Null object को access करने पर कौन सा exception होता है?",
    options_en: ["NullPointerException", "IOException", "ClassCastException", "RuntimeException"],
    options_hi: ["NullPointerException", "IOException", "ClassCastException", "RuntimeException"],
    answer_en: "NullPointerException",
    answer_hi: "NullPointerException",
    attempted: false,
    selected: ""
  },

  {
    num: 35,
    question_en: "Which data structure uses LIFO order?",
    question_hi: "कौन सा data structure LIFO order का पालन करता है?",
    options_en: ["Stack", "Queue", "ArrayList", "LinkedList"],
    options_hi: ["Stack", "Queue", "ArrayList", "LinkedList"],
    answer_en: "Stack",
    answer_hi: "Stack",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which method removes whitespace from both ends of a string?",
    question_hi: "String के दोनों तरफ के whitespace हटाने के लिए कौन सा method उपयोग होता है?",
    options_en: ["trim()", "strip()", "cut()", "clean()"],
    options_hi: ["trim()", "strip()", "cut()", "clean()"],
    answer_en: "trim()",
    answer_hi: "trim()",
    attempted: false,
    selected: ""
  },

  {
    num: 37,
    question_en: "Which keyword is used to handle multiple exceptions?",
    question_hi: "Multiple exceptions handle करने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["multi-catch", "catch", "throws", "try-catch"],
    options_hi: ["multi-catch", "catch", "throws", "try-catch"],
    answer_en: "multi-catch",
    answer_hi: "multi-catch",
    attempted: false,
    selected: ""
  },

  {
    num: 38,
    question_en: "Which operator performs bitwise AND?",
    question_hi: "Bitwise AND operation के लिए कौन सा operator उपयोग होता है?",
    options_en: ["&", "&&", "|", "^"],
    options_hi: ["&", "&&", "|", "^"],
    answer_en: "&",
    answer_hi: "&",
    attempted: false,
    selected: ""
  },

  {
    num: 39,
    question_en: "Which class is used to read input from console?",
    question_hi: "Console से input पढ़ने के लिए कौन सी class उपयोग होती है?",
    options_en: ["Scanner", "BufferedReader", "InputStreamReader", "All of these"],
    options_hi: ["Scanner", "BufferedReader", "InputStreamReader", "इन सभी"],
    answer_en: "All of these",
    answer_hi: "इन सभी",
    attempted: false,
    selected: ""
  },

  {
    num: 40,
    question_en: "Which keyword is used to import user-defined packages?",
    question_hi: "User-defined packages import करने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["import", "package", "include", "require"],
    options_hi: ["import", "package", "include", "require"],
    answer_en: "import",
    answer_hi: "import",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "Which operator performs modulus operation?",
    question_hi: "Modulus operation के लिए कौन सा operator उपयोग होता है?",
    options_en: ["%", "/", "*", "-"],
    options_hi: ["%", "/", "*", "-"],
    answer_en: "%",
    answer_hi: "%",
    attempted: false,
    selected: ""
  },

  {
    num: 42,
    question_en: "Which loop runs indefinitely if condition never becomes false?",
    question_hi: "अगर condition कभी false नहीं होती तो कौन सा loop अनंत बार चलता है?",
    options_en: ["while", "for", "do-while", "any loop"],
    options_hi: ["while", "for", "do-while", "any loop"],
    answer_en: "while",
    answer_hi: "while",
    attempted: false,
    selected: ""
  },

  {
    num: 43,
    question_en: "Which method is used to pause a thread temporarily?",
    question_hi: "Thread को अस्थायी रूप से रोकने के लिए कौन सा method उपयोग होता है?",
    options_en: ["sleep()", "wait()", "stop()", "suspend()"],
    options_hi: ["sleep()", "wait()", "stop()", "suspend()"],
    answer_en: "sleep()",
    answer_hi: "sleep()",
    attempted: false,
    selected: ""
  },

  {
    num: 44,
    question_en: "Which keyword is used to declare a variable inside a class but outside methods?",
    question_hi: "Class के अंदर लेकिन methods के बाहर variable declare करने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["instance", "field", "class", "none of these"],
    options_hi: ["instance", "field", "class", "none of these"],
    answer_en: "instance",
    answer_hi: "instance",
    attempted: false,
    selected: ""
  },

  {
    num: 45,
    question_en: "Which exception occurs when dividing a number by zero?",
    question_hi: "Zero से संख्या divide करने पर कौन सा exception होता है?",
    options_en: ["ArithmeticException", "IOException", "NullPointerException", "ClassCastException"],
    options_hi: ["ArithmeticException", "IOException", "NullPointerException", "ClassCastException"],
    answer_en: "ArithmeticException",
    answer_hi: "ArithmeticException",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which keyword is used to throw an exception manually?",
    question_hi: "Exception को manually throw करने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["throw", "throws", "error", "raise"],
    options_hi: ["throw", "throws", "error", "raise"],
    answer_en: "throw",
    answer_hi: "throw",
    attempted: false,
    selected: ""
  },

  {
    num: 47,
    question_en: "Which keyword is used to declare a method without implementation?",
    question_hi: "Implementation के बिना method declare करने के लिए कौन सा keyword उपयोग होता है?",
    options_en: ["abstract", "final", "static", "default"],
    options_hi: ["abstract", "final", "static", "default"],
    answer_en: "abstract",
    answer_hi: "abstract",
    attempted: false,
    selected: ""
  },

  {
    num: 48,
    question_en: "Which interface provides the compare() method?",
    question_hi: "कौन सा interface compare() method प्रदान करता है?",
    options_en: ["Comparator", "Comparable", "Iterable", "Cloneable"],
    options_hi: ["Comparator", "Comparable", "Iterable", "Cloneable"],
    answer_en: "Comparator",
    answer_hi: "Comparator",
    attempted: false,
    selected: ""
  },

  {
    num: 49,
    question_en: "Which class is used to work with dates?",
    question_hi: "Dates के साथ काम करने के लिए कौन सी class उपयोग होती है?",
    options_en: ["Date", "Calendar", "Time", "Schedule"],
    options_hi: ["Date", "Calendar", "Time", "Schedule"],
    answer_en: "Date",
    answer_hi: "Date",
    attempted: false,
    selected: ""
  },

  {
    num: 50,
    question_en: "Which method converts lowercase to uppercase in a string?",
    question_hi: "String को uppercase में बदलने के लिए कौन सा method उपयोग होता है?",
    options_en: ["toUpperCase()", "upper()", "capitalize()", "changeCase()"],
    options_hi: ["toUpperCase()", "upper()", "capitalize()", "changeCase()"],
    answer_en: "toUpperCase()",
    answer_hi: "toUpperCase()",
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
