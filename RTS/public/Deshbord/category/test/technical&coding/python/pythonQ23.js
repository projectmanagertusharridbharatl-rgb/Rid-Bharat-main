const questions = [
   { num: 1, question: "3 What does the `len()` function do?", options: ["Returns the length of an object", "Converts to lowercase", "Rounds a number", "Creates a list"], answer: "Returns the length of an object", attempted: false, selected: "" },     
  { num: 2, question: "1 What is the output of `print(type([]))`?", options: ["<class 'list'>", "<class 'tuple'>", "<class 'array'>", "<class 'dict'>"], answer: "<class 'list'>", attempted: false, selected: "" },
  { num: 3, question: "2 Which keyword is used to define a function in Python?", options: ["def", "function", "define", "func"], answer: "def", attempted: false, selected: "" },
  
  { num: 4, question: "4 How do you start a comment in Python?", options: ["//", "#", "/*", "--"], answer: "#", attempted: false, selected: "" },
  { num: 5, question: "5 What does `enumerate()` return?", options: ["Index-value pairs", "Only values", "Only indexes", "List of strings"], answer: "Index-value pairs", attempted: false, selected: "" },
  { num: 6, question: "6 Which method is used to remove an item from a list by value?", options: [".remove()", ".pop()", ".delete()", ".discard()"], answer: ".remove()", attempted: false, selected: "" },
  { num: 7, question: "7 What is the output of `'Hello' + 3`?", options: ["Hello3", "TypeError", "HelloHelloHello", "Nothing"], answer: "TypeError", attempted: false, selected: "" },
  { num: 8, question: "8 How do you create a virtual environment in Python?", options: ["python -m venv env", "python create env", "virtualenv create", "python -m virtual env"], answer: "python -m venv env", attempted: false, selected: "" },
  { num: 9, question: "9 What does the `pass` statement do?", options: ["Skips the current iteration", "Exits the program", "Does nothing", "Raises an error"], answer: "Does nothing", attempted: false, selected: "" },
  { num: 10, question: "10 Which operator is used for exponentiation?", options: ["^", "**", "^^", "*"], answer: "**", attempted: false, selected: "" },
  { num: 11, question: "11 What is the correct way to create an empty set?", options: ["{}", "set()", "[]", "()"], answer: "set()", attempted: false, selected: "" },
  { num: 12, question: "12 How do you open a file for reading in Python?", options: ["open('file.txt', 'r')", "open('file.txt', 'read')", "open('file.txt', 'readonly')", "open('file.txt')"], answer: "open('file.txt', 'r')", attempted: false, selected: "" },
  { num: 13, question: "13 What does the `__init__` method do?", options: ["Initializes a class instance", "Terminates a program", "Imports modules", "Checks syntax"], answer: "Initializes a class instance", attempted: false, selected: "" },
  { num: 14, question: "14 Which module is used for working with dates?", options: ["time", "datetime", "calendar", "date"], answer: "datetime", attempted: false, selected: "" },
  { num: 15, question: "15 What is the output of `bool('False')`?", options: ["False", "True", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 16, question: "16 How do you convert a string to lowercase?", options: [".lower()", ".toLower()", ".casefold()", ".downcase()"], answer: ".lower()", attempted: false, selected: "" },
  { num: 17, question: "17 What does `sys.argv` contain?", options: ["Command-line arguments", "System variables", "Python version", "Installed packages"], answer: "Command-line arguments", attempted: false, selected: "" },
  { num: 18, question: "18 Which decorator is used for class methods?", options: ["@classmethod", "@staticmethod", "@method", "@classfunc"], answer: "@classmethod", attempted: false, selected: "" },
  { num: 19, question: "19 What is the result of `3 * 'ab'`?", options: ["ababab", "3ab", "ab3", "Error"], answer: "ababab", attempted: false, selected: "" },
  { num: 20, question: "20 How do you check if a key exists in a dictionary?", options: ["key in dict", "dict.has_key()", "dict.exists()", "key.exists()"], answer: "key in dict", attempted: false, selected: "" },
  { num: 21, question: "21 What does the `zip()` function do?", options: ["Combines iterables", "Compresses files", "Creates ZIP archives", "Encrypts data"], answer: "Combines iterables", attempted: false, selected: "" },
  { num: 22, question: "22 Which is NOT a valid variable name?", options: ["my_var", "_var", "1var", "var1"], answer: "1var", attempted: false, selected: "" },
  { num: 23, question: "23 What is the output of `round(3.5)`?", options: ["3", "4", "3.5", "3.0"], answer: "4", attempted: false, selected: "" },
  { num: 24, question: "24 How do you reverse a list in place?", options: [".reverse()", "reversed()", "[::-1]", ".flip()"], answer: ".reverse()", attempted: false, selected: "" },
  { num: 25, question: "25 What does `'hello'.upper()` return?", options: ["HELLO", "hello", "Hello", "hELLO"], answer: "HELLO", attempted: false, selected: "" },
  { num: 26, question: "26 Which is used to handle exceptions?", options: ["try-except", "try-catch", "error-handle", "exception-handle"], answer: "try-except", attempted: false, selected: "" },
  { num: 27, question: "27 What is the output of `2 ** 3 ** 2`?", options: ["64", "512", "16", "12"], answer: "512", attempted: false, selected: "" },
  { num: 28, question: "28 How do you get the current working directory?", options: ["os.getcwd()", "os.cwd()", "os.path()", "os.currentdir()"], answer: "os.getcwd()", attempted: false, selected: "" },
  { num: 29, question: "29 What does `'hello'.isalpha()` return?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 30, question: "30 Which is NOT a Python built-in data type?", options: ["list", "tuple", "array", "dict"], answer: "array", attempted: false, selected: "" },
  { num: 31, question: "31 What is the output of `bool(0)`?", options: ["True", "False", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 32, question: "32 How do you create a generator?", options: ["Using yield", "Using return", "Using generate", "Using iterator"], answer: "Using yield", attempted: false, selected: "" },
  { num: 33, question: "33 What does `'hello'.split()` return?", options: ["['h','e','l','l','o']", "['hello']", "['he', 'llo']", "Error"], answer: "['hello']", attempted: false, selected: "" },
  { num: 34, question: "34 Which module is used for regular expressions?", options: ["regex", "re", "regexp", "pyre"], answer: "re", attempted: false, selected: "" },
  { num: 35, question: "35 What is the output of `[x for x in range(3)]`?", options: ["[0,1,2]", "[1,2,3]", "[0,1,2,3]", "Error"], answer: "[0,1,2]", attempted: false, selected: "" },
  { num: 36, question: "36 How do you convert an integer to a string?", options: ["str()", "string()", "toString()", "intToStr()"], answer: "str()", attempted: false, selected: "" },
  { num: 37, question: "37 What does `'hello'.replace('l', 'x')` return?", options: ["hexxo", "hexlo", "helxo", "hexo"], answer: "hexxo", attempted: false, selected: "" },
  { num: 38, question: "38 Which is used to measure code execution time?", options: ["time.clock()", "time.time()", "time.measure()", "time.exec()"], answer: "time.time()", attempted: false, selected: "" },
  { num: 39, question: "39 What is the output of `'hello'[1:4]`?", options: ["ell", "hel", "ello", "lo"], answer: "ell", attempted: false, selected: "" },
  { num: 40, question: "40 How do you create a copy of a list?", options: ["list.copy()", "list.clone()", "copy(list)", "list[:]"], answer: "list.copy()", attempted: false, selected: "" },
  { num: 41, question: "41 What does `math.sqrt(4)` return?", options: ["2", "2.0", "4", "16"], answer: "2.0", attempted: false, selected: "" },
  { num: 42, question: "42 Which is used to create an anonymous function?", options: ["lambda", "def", "function", "anon"], answer: "lambda", attempted: false, selected: "" },
  { num: 43, question: "43 What is the output of `'hello'[::-1]`?", options: ["olleh", "hello", "h", "Error"], answer: "olleh", attempted: false, selected: "" },
  { num: 44, question: "44 How do you check if all characters are digits?", options: [".isdigit()", ".isnumeric()", ".isnumber()", ".isdigits()"], answer: ".isdigit()", attempted: false, selected: "" },
  { num: 45, question: "45 What does `random.randint(1, 10)` return?", options: ["Integer between 1-10", "Float between 1-10", "List of numbers", "Random string"], answer: "Integer between 1-10", attempted: false, selected: "" },
  { num: 46, question: "46 Which is used to iterate over key-value pairs?", options: [".items()", ".keys()", ".values()", ".pairs()"], answer: ".items()", attempted: false, selected: "" },
  { num: 47, question: "47 What is the output of `'hello'.find('e')`?", options: ["1", "0", "-1", "True"], answer: "1", attempted: false, selected: "" },
  { num: 48, question: "48 How do you import a specific function from a module?", options: ["from module import function", "import function from module", "import module.function", "require module.function"], answer: "from module import function", attempted: false, selected: "" },
  { num: 49, question: "49 What does `' hello '.strip()` return?", options: ["hello", "'hello'", "' hello '", "Error"], answer: "hello", attempted: false, selected: "" },
  { num: 50, question: "50 Which is used to exit a loop prematurely?", options: ["break", "exit", "stop", "return"], answer: "break", attempted: false, selected: "" }

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
