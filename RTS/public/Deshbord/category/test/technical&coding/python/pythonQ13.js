const questions = [
  { num: 1, question: "1 What is a lambda function in Python?", options: ["Anonymous function", "Class method", "Loop function", "Recursive function"], answer: "Anonymous function", attempted: false, selected: "" },
  { num: 2, question: "2 What does the `map()` function do?", options: ["Applies a function to each item in an iterable", "Maps keys to values", "Converts list to dict", "Sorts a list"], answer: "Applies a function to each item in an iterable", attempted: false, selected: "" },
  { num: 3, question: "3 What is the output of: list(map(lambda x: x*x, [1, 2, 3]))?", options: ["[1, 4, 9]", "[1, 2, 3]", "[2, 4, 6]", "[1, 8, 27]"], answer: "[1, 4, 9]", attempted: false, selected: "" },
  { num: 4, question: "4 Which module in Python is used for regular expressions?", options: ["re", "regex", "pyregex", "match"], answer: "re", attempted: false, selected: "" },
  { num: 5, question: "5 What does the `*args` syntax do in a function?", options: ["Pass variable number of arguments", "Create a list", "Create a dictionary", "Pass default values"], answer: "Pass variable number of arguments", attempted: false, selected: "" },
  { num: 6, question: "6 What is the purpose of `**kwargs` in Python functions?", options: ["Pass variable keyword arguments", "Pass list of arguments", "Return multiple values", "Catch exceptions"], answer: "Pass variable keyword arguments", attempted: false, selected: "" },
  { num: 7, question: "7 What does the `filter()` function return?", options: ["Filtered iterable", "List", "String", "Boolean"], answer: "Filtered iterable", attempted: false, selected: "" },
  { num: 8, question: "8 What does `zip()` do in Python?", options: ["Combine iterables into tuples", "Compress data", "Unzip files", "Concatenate strings"], answer: "Combine iterables into tuples", attempted: false, selected: "" },
  { num: 9, question: "9 What is a generator?", options: ["Function that yields values", "Function that returns list", "Recursive function", "Threaded function"], answer: "Function that yields values", attempted: false, selected: "" },
  { num: 10, question: "10 What keyword is used to create a generator?", options: ["yield", "return", "generate", "create"], answer: "yield", attempted: false, selected: "" },
  { num: 11, question: "11 Which decorator is used to define a static method?", options: ["@staticmethod", "@classmethod", "@static", "@method"], answer: "@staticmethod", attempted: false, selected: "" },
  { num: 12, question: "12 Which method is called when an object is created?", options: ["__init__", "__str__", "__new__", "__create__"], answer: "__init__", attempted: false, selected: "" },
  { num: 13, question: "13 What is the purpose of `__str__` method?", options: ["Returns string representation", "Initializes class", "Deletes object", "Creates object"], answer: "Returns string representation", attempted: false, selected: "" },
  { num: 14, question: "14 What does `self` represent in a class?", options: ["Current instance", "Class name", "Module", "Parent class"], answer: "Current instance", attempted: false, selected: "" },
  { num: 15, question: "15 What does `isinstance()` check?", options: ["Object type", "Object value", "Object identity", "Function return"], answer: "Object type", attempted: false, selected: "" },
  { num: 16, question: "16 What does `__name__ == '__main__'` mean?", options: ["Script is run directly", "Module is imported", "Function call", "Class method"], answer: "Script is run directly", attempted: false, selected: "" },
  { num: 17, question: "17 Which exception is raised for division by zero?", options: ["ZeroDivisionError", "ValueError", "ArithmeticError", "MathError"], answer: "ZeroDivisionError", attempted: false, selected: "" },
  { num: 18, question: "18 What is the output of: `bool([])`?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 19, question: "19 What is list comprehension?", options: ["Compact way to create list", "Function", "Loop", "Class"], answer: "Compact way to create list", attempted: false, selected: "" },
  { num: 20, question: "20 What is the result of `[x for x in range(3) if x % 2 == 0]`?", options: ["[0, 2]", "[1, 2]", "[0, 1]", "[2]"], answer: "[0, 2]", attempted: false, selected: "" },
  { num: 21, question: "21 What does `set()` do?", options: ["Removes duplicates", "Sorts list", "Creates tuple", "Adds elements"], answer: "Removes duplicates", attempted: false, selected: "" },
  { num: 22, question: "22 What does `enumerate()` return?", options: ["Index and value pairs", "Sorted list", "Mapped list", "Zipped list"], answer: "Index and value pairs", attempted: false, selected: "" },
  { num: 23, question: "23 What is the output of `'abc'.upper()`?", options: ["ABC", "abc", "Abc", "aBc"], answer: "ABC", attempted: false, selected: "" },
  { num: 24, question: "24 What is a docstring in Python?", options: ["Documentation string", "Function name", "Comment", "Variable"], answer: "Documentation string", attempted: false, selected: "" },
  { num: 25, question: "25 Which symbol is used for multi-line docstring?", options: ['"""', "'''", "//", "#"], answer: '"""', attempted: false, selected: "" },
  { num: 26, question: "26 What does `try` block do?", options: ["Handles exceptions", "Runs loops", "Returns values", "Declares class"], answer: "Handles exceptions", attempted: false, selected: "" },
  { num: 27, question: "27 Which block runs after `try` if no error occurs?", options: ["else", "except", "finally", "catch"], answer: "else", attempted: false, selected: "" },
  { num: 28, question: "28 Which function opens a file in Python?", options: ["open()", "file()", "read()", "load()"], answer: "open()", attempted: false, selected: "" },
  { num: 29, question: "29 Which mode opens file for writing?", options: ["'w'", "'r'", "'a'", "'x'"], answer: "'w'", attempted: false, selected: "" },
  { num: 30, question: "30 What does `with open()` ensure?", options: ["Auto close file", "Create file", "Delete file", "None"], answer: "Auto close file", attempted: false, selected: "" },
  { num: 31, question: "31 What is a context manager?", options: ["Manages resources", "Defines class", "Runs loop", "Handles list"], answer: "Manages resources", attempted: false, selected: "" },
  { num: 32, question: "32 What does `os` module handle?", options: ["Operating system tasks", "Graphics", "UI", "Sound"], answer: "Operating system tasks", attempted: false, selected: "" },
  { num: 33, question: "33 Which module supports JSON parsing?", options: ["json", "os", "sys", "pickle"], answer: "json", attempted: false, selected: "" },
  { num: 34, question: "34 What is `pickle` used for?", options: ["Serializing objects", "Parsing HTML", "Debugging", "Compressing files"], answer: "Serializing objects", attempted: false, selected: "" },
  { num: 35, question: "35 Which statement can be used with `for` to get index?", options: ["enumerate()", "range()", "index()", "zip()"], answer: "enumerate()", attempted: false, selected: "" },
  { num: 36, question: "36 What is monkey patching?", options: ["Changing behavior at runtime", "Adding comments", "Debugging", "Unit testing"], answer: "Changing behavior at runtime", attempted: false, selected: "" },
  { num: 37, question: "37 What is duck typing?", options: ["Behavior matters more than type", "Type checking", "Polymorphism", "Multithreading"], answer: "Behavior matters more than type", attempted: false, selected: "" },
  { num: 38, question: "38 What is `__slots__` used for?", options: ["Memory optimization", "Function overloading", "Class inheritance", "File handling"], answer: "Memory optimization", attempted: false, selected: "" },
  { num: 39, question: "39 Which module allows multi-threading?", options: ["threading", "os", "time", "math"], answer: "threading", attempted: false, selected: "" },
  { num: 40, question: "40 What is GIL in Python?", options: ["Global Interpreter Lock", "Global Import Log", "Generic Instance Loader", "Graphical Interface Library"], answer: "Global Interpreter Lock", attempted: false, selected: "" },
  { num: 41, question: "41 What is a metaclass?", options: ["Class of a class", "Instance method", "Static method", "Data attribute"], answer: "Class of a class", attempted: false, selected: "" },
  { num: 42, question: "42 Which module is used for unit testing?", options: ["unittest", "pytest", "testit", "validate"], answer: "unittest", attempted: false, selected: "" },
  { num: 43, question: "43 What is a frozen set?", options: ["Immutable set", "Locked list", "Sorted dictionary", "Tuple set"], answer: "Immutable set", attempted: false, selected: "" },
  { num: 44, question: "44 What is the use of `super()`?", options: ["Call parent methods", "Override variables", "Create object", "Check type"], answer: "Call parent methods", attempted: false, selected: "" },
  { num: 45, question: "45 What is list slicing `a[::-1]` used for?", options: ["Reverse list", "Copy list", "Sort list", "Split list"], answer: "Reverse list", attempted: false, selected: "" },
  { num: 46, question: "46 What does `@property` do?", options: ["Creates getter", "Creates setter", "Creates private var", "Creates static method"], answer: "Creates getter", attempted: false, selected: "" },
  { num: 47, question: "47 What is `__repr__()` used for?", options: ["Developer representation", "Print object", "User output", "String reverse"], answer: "Developer representation", attempted: false, selected: "" },
  { num: 48, question: "48 What does `id()` return?", options: ["Object memory address", "Type of object", "Length of list", "Hash value"], answer: "Object memory address", attempted: false, selected: "" },
  { num: 49, question: "49 What is `any([])` output?", options: ["False", "True", "Error", "None"], answer: "False", attempted: false, selected: "" },
  { num: 50, question: "50 Which method creates class instance from string?", options: ["eval()", "exec()", "input()", "str()"], answer: "eval()", attempted: false, selected: "" }
];

let currentQuestion = 0;

    function loadQuestion(index) {
        document.getElementById("question").textContent = questions[index].question;
        document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;
        const optionsElement = document.getElementById("options");
        optionsElement.innerHTML = "";
        questions[index].options.forEach(option => {
            optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
        });
        updateCircles();
    }

    function markAttempted(index, selectedAnswer) {
        questions[index].attempted = true;
        questions[index].selected = selectedAnswer;
        updateCircles();
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

    function updateCircles() {
        const circleContainer = document.getElementById("circleContainer");
        circleContainer.innerHTML = "";
        questions.forEach((q, i) => {
            let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
            circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
        });
    }

    function jumpToQuestion(index) {
        currentQuestion = index;
        loadQuestion(index);
    }

    function submitQuiz() {
        let confirmation = confirm("Are you sure you want to submit the test?");
        
        if (!confirmation) {
            return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
        }

        let attempted = 0;
        let notAttempted = 0;
        let score = 0;
        const results = [];

        questions.forEach(q => {
            if (q.attempted) {
                attempted++;
                if (q.selected === q.answer) {
                    score++;
                }
            } else {
                notAttempted++;
            }
            results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
        });

        localStorage.setItem("attempted", attempted);
        localStorage.setItem("notAttempted", notAttempted);
        localStorage.setItem("score", score);
        localStorage.setItem("results", JSON.stringify(results));

        // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
        let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
        if (viewResult) {
            window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
        }
    }
    window.onload = () => {
        loadQuestion(currentQuestion);
    };
