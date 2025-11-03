const questions = [
  {
    "num": 1,
    "question_en": "What is the output of print(2 ** 3)?",
    "question_hi": "print(2 ** 3) का आउटपुट क्या होगा?",
    "options_en": ["6", "8", "9", "5"],
    "options_hi": ["6", "8", "9", "5"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to create a function in Python?",
    "question_hi": "Python में एक फ़ंक्शन बनाने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    "options_en": ["function", "def", "define", "func"],
    "options_hi": ["function", "def", "define", "func"],
    "answer_en": "def",
    "answer_hi": "def",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What data type is the result of: type(3.5)?",
    "question_hi": "type(3.5) का परिणाम किस डेटा प्रकार का होगा?",
    "options_en": ["int", "float", "str", "complex"],
    "options_hi": ["int", "float", "str", "complex"],
    "answer_en": "float",
    "answer_hi": "float",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the correct file extension for Python files?",
    "question_hi": "Python फ़ाइलों के लिए सही फ़ाइल एक्सटेंशन क्या है?",
    "options_en": [".py", ".pt", ".pyt", ".python"],
    "options_hi": [".py", ".pt", ".pyt", ".python"],
    "answer_en": ".py",
    "answer_hi": ".py",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What does the 'len()' function do?",
    "question_hi": "'len()' फ़ंक्शन क्या करता है?",
    "options_en": ["Returns length", "Returns type", "Counts digits", "Checks truth value"],
    "options_hi": ["लंबाई लौटाता है", "प्रकार लौटाता है", "अंकों की गिनती करता है", "सत्य मान की जाँच करता है"],
    "answer_en": "Returns length",
    "answer_hi": "लंबाई लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "How do you start a comment in Python?",
    "question_hi": "Python में कमेंट कैसे शुरू करते हैं?",
    "options_en": ["//", "/*", "#", "--"],
    "options_hi": ["//", "/*", "#", "--"],
    "answer_en": "#",
    "answer_hi": "#",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the output of: print('5' + '5')?",
    "question_hi": "print('5' + '5') का आउटपुट क्या होगा?",
    "options_en": ["10", "55", "TypeError", "5"],
    "options_hi": ["10", "55", "TypeError", "5"],
    "answer_en": "55",
    "answer_hi": "55",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the correct way to create a dictionary?",
    "question_hi": "Python में dictionary बनाने का सही तरीका क्या है?",
    "options_en": ["{}", "[]", "()", "<>"],
    "options_hi": ["{}", "[]", "()", "<>"],
    "answer_en": "{}",
    "answer_hi": "{}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method can add an item to a list?",
    "question_hi": "List में item जोड़ने के लिए कौन-सा method उपयोग होता है?",
    "options_en": ["add()", "append()", "insert()", "extend()"],
    "options_hi": ["add()", "append()", "insert()", "extend()"],
    "answer_en": "append()",
    "answer_hi": "append()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the output of type(True)?",
    "question_hi": "type(True) का आउटपुट क्या होगा?",
    "options_en": ["bool", "int", "str", "float"],
    "options_hi": ["bool", "int", "str", "float"],
    "answer_en": "bool",
    "answer_hi": "bool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "How do you create a variable with the numeric value 5?",
    "question_hi": "संख्यात्मक मान 5 के साथ variable कैसे बनाते हैं?",
    "options_en": ["num = 5", "int num = 5", "num := 5", "num == 5"],
    "options_hi": ["num = 5", "int num = 5", "num := 5", "num == 5"],
    "answer_en": "num = 5",
    "answer_hi": "num = 5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What will print(type([])) return?",
    "question_hi": "print(type([])) क्या लौटाएगा?",
    "options_en": ["list", "<class 'list'>", "[]", "object"],
    "options_hi": ["list", "<class 'list'>", "[]", "object"],
    "answer_en": "<class 'list'>",
    "answer_hi": "<class 'list'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is used to handle exceptions in Python?",
    "question_hi": "Python में exception को handle करने के लिए क्या उपयोग होता है?",
    "options_en": ["catch", "handle", "try/except", "trap"],
    "options_hi": ["catch", "handle", "try/except", "trap"],
    "answer_en": "try/except",
    "answer_hi": "try/except",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which operator is used for floor division?",
    "question_hi": "Floor division के लिए कौन-सा operator उपयोग होता है?",
    "options_en": ["/", "%", "//", "**"],
    "options_hi": ["/", "%", "//", "**"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "How do you insert comments in Python?",
    "question_hi": "Python में comment कैसे डालते हैं?",
    "options_en": ["# comment", "// comment", "/* comment */", "-- comment"],
    "options_hi": ["# comment", "// comment", "/* comment */", "-- comment"],
    "answer_en": "# comment",
    "answer_hi": "# comment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the output of bool(0)?",
    "question_hi": "bool(0) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "0", "None"],
    "options_hi": ["True", "False", "0", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which data structure is immutable?",
    "question_hi": "कौन-सा data structure immutable है?",
    "options_en": ["list", "set", "dict", "tuple"],
    "options_hi": ["list", "set", "dict", "tuple"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the purpose of the pass statement?",
    "question_hi": "pass statement का उद्देश्य क्या है?",
    "options_en": ["Skip iteration", "End loop", "Do nothing", "Break loop"],
    "options_hi": ["Skip iteration", "End loop", "कुछ नहीं करता", "Break loop"],
    "answer_en": "Do nothing",
    "answer_hi": "कुछ नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which module is used to generate random numbers?",
    "question_hi": "Random numbers generate करने के लिए कौन-सा module उपयोग होता है?",
    "options_en": ["math", "random", "os", "sys"],
    "options_hi": ["math", "random", "os", "sys"],
    "answer_en": "random",
    "answer_hi": "random",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does the 'in' keyword check?",
    "question_hi": "'in' keyword क्या check करता है?",
    "options_en": ["Existence in sequence", "Assignment", "Type", "Conversion"],
    "options_hi": ["Sequence में मौजूदगी", "Assignment", "Type", "Conversion"],
    "answer_en": "Existence in sequence",
    "answer_hi": "Sequence में मौजूदगी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the correct way to define a class?",
    "question_hi": "Class define करने का सही तरीका क्या है?",
    "options_en": ["def MyClass:", "class MyClass:", "MyClass:", "define MyClass:"],
    "options_hi": ["def MyClass:", "class MyClass:", "MyClass:", "define MyClass:"],
    "answer_en": "class MyClass:",
    "answer_hi": "class MyClass:",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method is called when an object is created?",
    "question_hi": "Object create होने पर कौन-सा method call होता है?",
    "options_en": ["__start__", "__create__", "__init__", "__make__"],
    "options_hi": ["__start__", "__create__", "__init__", "__make__"],
    "answer_en": "__init__",
    "answer_hi": "__init__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "How do you access values in a list?",
    "question_hi": "List में values को access कैसे करते हैं?",
    "options_en": ["list{0}", "list[0]", "list(0)", "list<0>"],
    "options_hi": ["list{0}", "list[0]", "list(0)", "list<0>"],
    "answer_en": "list[0]",
    "answer_hi": "list[0]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the correct syntax to define a lambda function?",
    "question_hi": "Lambda function define करने का सही syntax क्या है?",
    "options_en": ["lambda x: x+1", "def x(): x+1", "func x: x+1", "lambda = x+1"],
    "options_hi": ["lambda x: x+1", "def x(): x+1", "func x: x+1", "lambda = x+1"],
    "answer_en": "lambda x: x+1",
    "answer_hi": "lambda x: x+1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the purpose of 'self' in Python classes?",
    "question_hi": "Python classes में 'self' का उद्देश्य क्या है?",
    "options_en": ["Refers to class", "Refers to instance", "Refers to method", "Refers to file"],
    "options_hi": ["Class को संदर्भित करता है", "Instance को संदर्भित करता है", "Method को संदर्भित करता है", "File को संदर्भित करता है"],
    "answer_en": "Refers to instance",
    "answer_hi": "Instance को संदर्भित करता है",
    "attempted": false,
    "selected": ""
  },



   {
    "num": 26,
    "question_en": "Which keyword is used to inherit a class?",
    "question_hi": "Class inherit करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["inherit", "extends", "super", "class"],
    "options_hi": ["inherit", "extends", "super", "class"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method returns the number of items in a list?",
    "question_hi": "List में items की संख्या प्राप्त करने के लिए कौन-सा method उपयोग होता है?",
    "options_en": ["size()", "length()", "len()", "count()"],
    "options_hi": ["size()", "length()", "len()", "count()"],
    "answer_en": "len()",
    "answer_hi": "len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is slicing used for in Python?",
    "question_hi": "Python में slicing किस लिए उपयोग होती है?",
    "options_en": ["Copy elements", "Access parts of sequence", "Sort items", "Update values"],
    "options_hi": ["Elements को copy करना", "Sequence के हिस्सों को access करना", "Items को sort करना", "Values update करना"],
    "answer_en": "Access parts of sequence",
    "answer_hi": "Sequence के हिस्सों को access करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which statement is used to exit a loop?",
    "question_hi": "Loop को exit करने के लिए कौन-सा statement उपयोग होता है?",
    "options_en": ["exit", "stop", "end", "break"],
    "options_hi": ["exit", "stop", "end", "break"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "How do you convert a string to an integer?",
    "question_hi": "String को integer में कैसे convert करते हैं?",
    "options_en": ["int('5')", "str(5)", "float('5')", "toInt('5')"],
    "options_hi": ["int('5')", "str(5)", "float('5')", "toInt('5')"],
    "answer_en": "int('5')",
    "answer_hi": "int('5')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does the open() function return?",
    "question_hi": "open() function क्या return करता है?",
    "options_en": ["File object", "String", "List", "Boolean"],
    "options_hi": ["File object", "String", "List", "Boolean"],
    "answer_en": "File object",
    "answer_hi": "File object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword is used to define an anonymous function?",
    "question_hi": "Anonymous function define करने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["anon", "lambda", "func", "def"],
    "options_hi": ["anon", "lambda", "func", "def"],
    "answer_en": "lambda",
    "answer_hi": "lambda",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output of: 'abc'.upper()?",
    "question_hi": "'abc'.upper() का आउटपुट क्या होगा?",
    "options_en": ["abc", "ABC", "Abc", "Syntax Error"],
    "options_hi": ["abc", "ABC", "Abc", "Syntax Error"],
    "answer_en": "ABC",
    "answer_hi": "ABC",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "How do you handle an exception?",
    "question_hi": "Exception को handle कैसे करते हैं?",
    "options_en": ["try/except", "if/else", "catch/finally", "try/catch"],
    "options_hi": ["try/except", "if/else", "catch/finally", "try/catch"],
    "answer_en": "try/except",
    "answer_hi": "try/except",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is a correct way to define a list?",
    "question_hi": "List define करने का सही तरीका क्या है?",
    "options_en": ["(1,2,3)", "{1,2,3}", "[1,2,3]", "<1,2,3>"],
    "options_hi": ["(1,2,3)", "{1,2,3}", "[1,2,3]", "<1,2,3>"],
    "answer_en": "[1,2,3]",
    "answer_hi": "[1,2,3]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which function is used to get user input?",
    "question_hi": "User input प्राप्त करने के लिए कौन-सा function उपयोग होता है?",
    "options_en": ["scanf()", "input()", "get()", "read()"],
    "options_hi": ["scanf()", "input()", "get()", "read()"],
    "answer_en": "input()",
    "answer_hi": "input()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "How to remove whitespace from a string?",
    "question_hi": "String से whitespace कैसे हटाते हैं?",
    "options_en": ["strip()", "trim()", "remove()", "erase()"],
    "options_hi": ["strip()", "trim()", "remove()", "erase()"],
    "answer_en": "strip()",
    "answer_hi": "strip()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the 'is' operator compare?",
    "question_hi": "'is' operator क्या compare करता है?",
    "options_en": ["Values", "Memory locations", "Types", "Keys"],
    "options_hi": ["Values", "Memory locations", "Types", "Keys"],
    "answer_en": "Memory locations",
    "answer_hi": "Memory locations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which statement is used to skip iteration in a loop?",
    "question_hi": "Loop में iteration skip करने के लिए कौन-सा statement उपयोग होता है?",
    "options_en": ["break", "pass", "continue", "exit"],
    "options_hi": ["break", "pass", "continue", "exit"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the result of: 10 % 3?",
    "question_hi": "10 % 3 का परिणाम क्या होगा?",
    "options_en": ["1", "3", "0", "10"],
    "options_hi": ["1", "3", "0", "10"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "How do you check if a value exists in a dictionary?",
    "question_hi": "Dictionary में value मौजूद है या नहीं कैसे check करते हैं?",
    "options_en": ["in", "has", "exists", "check"],
    "options_hi": ["in", "has", "exists", "check"],
    "answer_en": "in",
    "answer_hi": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword is used to create a generator?",
    "question_hi": "Generator बनाने के लिए कौन-सा keyword उपयोग होता है?",
    "options_en": ["generate", "yield", "return", "yield return"],
    "options_hi": ["generate", "yield", "return", "yield return"],
    "answer_en": "yield",
    "answer_hi": "yield",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function is used to sort a list in Python?",
    "question_hi": "Python में list को sort करने के लिए कौन-सा function उपयोग होता है?",
    "options_en": ["sorted()", "order()", "arrange()", "sortlist()"],
    "options_hi": ["sorted()", "order()", "arrange()", "sortlist()"],
    "answer_en": "sorted()",
    "answer_hi": "sorted()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What will type(None) return?",
    "question_hi": "type(None) क्या return करेगा?",
    "options_en": ["NoneType", "null", "None", "undefined"],
    "options_hi": ["NoneType", "null", "None", "undefined"],
    "answer_en": "NoneType",
    "answer_hi": "NoneType",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the default return value of a function if not specified?",
    "question_hi": "यदि return value specify न हो तो function का default return value क्या होता है?",
    "options_en": ["None", "0", "False", "Empty string"],
    "options_hi": ["None", "0", "False", "Empty string"],
    "answer_en": "None",
    "answer_hi": "None",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the output of: bool('False')?",
    "question_hi": "bool('False') का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "Error", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the use of 'with' statement in file handling?",
    "question_hi": "File handling में 'with' statement का उपयोग क्या है?",
    "options_en": ["Manages file context", "Closes file manually", "Opens in GUI", "Locks file"],
    "options_hi": ["Manages file context", "File को manually close करना", "GUI में open करना", "File lock करना"],
    "answer_en": "Manages file context",
    "answer_hi": "Manages file context",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "How do you install external packages in Python?",
    "question_hi": "Python में external packages कैसे install करते हैं?",
    "options_en": ["pip install package", "install package", "python install", "pkg add package"],
    "options_hi": ["pip install package", "install package", "python install", "pkg add package"],
    "answer_en": "pip install package",
    "answer_hi": "pip install package",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the use of 'enumerate()'?",
    "question_hi": "'enumerate()' का उपयोग क्या है?",
    "options_en": ["Index and value", "Count items", "Loop once", "Map items"],
    "options_hi": ["Index and value", "Items count करना", "Loop once करना", "Map items करना"],
    "answer_en": "Index and value",
    "answer_hi": "Index and value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "How do you create a set in Python?",
    "question_hi": "Python में set कैसे बनाते हैं?",
    "options_en": ["set()", "{}", "[]", "set[]"],
    "options_hi": ["set()", "{}", "[]", "set[]"],
    "answer_en": "set()",
    "answer_hi": "set()",
    "attempted": false,
    "selected": ""
  }
];


let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
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
