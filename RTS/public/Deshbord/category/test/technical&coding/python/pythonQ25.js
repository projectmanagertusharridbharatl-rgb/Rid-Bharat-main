const questions = 
[
    { num: 1, question: "6 Which method is used to remove an item from a list by value?", options: [".remove()", ".pop()", ".delete()", ".clear()"], answer: ".remove()", attempted: false, selected: "" },
 
  { num: 2, question: "2 Which keyword is used to define a function in Python?", options: ["def", "function", "define", "func"], answer: "def", attempted: false, selected: "" },
  { num: 3, question: "3 What does the `len()` function do?", options: ["Returns the length of an object", "Converts to lowercase", "Rounds a number", "Imports a module"], answer: "Returns the length of an object", attempted: false, selected: "" },
  { num: 4, question: "4 How do you start a comment in Python?", options: ["//", "#", "/*", "--"], answer: "#", attempted: false, selected: "" },
  { num: 5, question: "5 What does `enumerate()` return?", options: ["Index-value pairs", "Only values", "Only indexes", "List of strings"], answer: "Index-value pairs", attempted: false, selected: "" },
  { num: 6, question: "1 What is the output of `print(type([]))`?", options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"], answer: "<class 'list'>", attempted: false, selected: "" },
  { num: 7, question: "7 What is the output of `'hello'[1:4]`?", options: ["ell", "hel", "ello", "lo"], answer: "ell", attempted: false, selected: "" },
  { num: 8, question: "8 How do you create a virtual environment in Python?", options: ["python -m venv env", "python create env", "virtualenv python", "env create python"], answer: "python -m venv env", attempted: false, selected: "" },
  { num: 9, question: "9 What is the purpose of `__init__` in a class?", options: ["Constructor method", "Destructor method", "Static method", "Private method"], answer: "Constructor method", attempted: false, selected: "" },
  { num: 10, question: "10 Which operator is used for exponentiation?", options: ["^", "**", "^^", "*"], answer: "**", attempted: false, selected: "" },
  { num: 11, question: "11 What does `sys.argv` contain?", options: ["Command-line arguments", "System variables", "Python version", "Installed packages"], answer: "Command-line arguments", attempted: false, selected: "" },
  { num: 12, question: "12 How do you open a file for reading in Python?", options: ["open('file.txt', 'r')", "open('file.txt', 'read')", "open('file.txt', 'w')", "open('file.txt')"], answer: "open('file.txt', 'r')", attempted: false, selected: "" },
  { num: 13, question: "13 What is the output of `bool('False')`?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 14, question: "14 Which module is used for regular expressions?", options: ["regex", "re", "pyre", "regexp"], answer: "re", attempted: false, selected: "" },
  { num: 15, question: "15 What does the `pass` statement do?", options: ["Skips the rest of the loop", "Does nothing", "Exits the program", "Raises an exception"], answer: "Does nothing", attempted: false, selected: "" },
  { num: 16, question: "16 How do you convert a string to lowercase?", options: [".lower()", ".toLowerCase()", ".casefold()", ".small()"], answer: ".lower()", attempted: false, selected: "" },
  { num: 17, question: "17 What is the output of `3 * 'ab'`?", options: ["ababab", "3ab", "ab3", "Error"], answer: "ababab", attempted: false, selected: "" },
  { num: 18, question: "18 Which collection is ordered and changeable?", options: ["set", "tuple", "list", "dict"], answer: "list", attempted: false, selected: "" },
  { num: 19, question: "19 What does `@staticmethod` do?", options: ["Makes a method static", "Deletes a method", "Makes a method private", "Overrides a method"], answer: "Makes a method static", attempted: false, selected: "" },
  { num: 20, question: "20 How do you check if a key exists in a dictionary?", options: ["key in dict", "dict.has_key()", "dict.exists()", "key.exists()"], answer: "key in dict", attempted: false, selected: "" },
  { num: 21, question: "21 What is the output of `round(3.14159, 2)`?", options: ["3.14", "3.142", "3.141", "3.1"], answer: "3.14", attempted: false, selected: "" },
  { num: 22, question: "22 Which is used to handle exceptions?", options: ["try-except", "try-catch", "error-handle", "exception"], answer: "try-except", attempted: false, selected: "" },
  { num: 23, question: "23 What does `[::-1]` do to a sequence?", options: ["Reverses it", "Sorts it", "Shuffles it", "Copies it"], answer: "Reverses it", attempted: false, selected: "" },
  { num: 24, question: "24 How do you create a set?", options: ["{}", "set()", "[]", "()"], answer: "set()", attempted: false, selected: "" },
  { num: 25, question: "25 What is the output of `'Hello'.replace('l', 'L')`?", options: ["HeLLo", "HELLO", "hello", "HeLlo"], answer: "HeLLo", attempted: false, selected: "" },
  { num: 26, question: "26 Which is NOT a Python built-in function?", options: ["print()", "input()", "main()", "len()"], answer: "main()", attempted: false, selected: "" },
  { num: 27, question: "27 What does `zip()` do?", options: ["Compresses files", "Combines iterables", "Zips folders", "Encrypts data"], answer: "Combines iterables", attempted: false, selected: "" },
  { num: 28, question: "28 How do you get the current working directory?", options: ["os.getcwd()", "os.path()", "sys.path()", "path.current()"], answer: "os.getcwd()", attempted: false, selected: "" },
  { num: 29, question: "29 What is the output of `bool(0)`?", options: ["True", "False", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 30, question: "30 Which decorator is used for class methods?", options: ["@classmethod", "@staticmethod", "@method", "@class"], answer: "@classmethod", attempted: false, selected: "" },
  { num: 31, question: "31 How do you create a dictionary?", options: ["{}", "dict()", "[]", "()"], answer: "{}", attempted: false, selected: "" },
  { num: 32, question: "32 What does `__name__ == '__main__'` check?", options: ["If the script is imported", "If the script is run directly", "If it's the main class", "If it's the main thread"], answer: "If the script is run directly", attempted: false, selected: "" },
  { num: 33, question: "33 Which is used for formatted strings?", options: ["f-strings", "format()", "% operator", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 34, question: "34 What is the output of `2 + 3 * 4`?", options: ["20", "14", "24", "Error"], answer: "14", attempted: false, selected: "" },
  { num: 35, question: "35 How do you import a module named 'mymodule'?", options: ["import mymodule", "require mymodule", "include mymodule", "using mymodule"], answer: "import mymodule", attempted: false, selected: "" },
  { num: 36, question: "36 What does `random.randint(1, 10)` return?", options: ["Float between 1-10", "Integer between 1-10", "List of numbers", "Random string"], answer: "Integer between 1-10", attempted: false, selected: "" },
  { num: 37, question: "37 Which is immutable?", options: ["list", "dict", "set", "tuple"], answer: "tuple", attempted: false, selected: "" },
  { num: 38, question: "38 What does `'hello'.upper()` return?", options: ["HELLO", "Hello", "hello", "hElLo"], answer: "HELLO", attempted: false, selected: "" },
  { num: 39, question: "39 How do you create a generator?", options: ["Using yield", "Using return", "Using generate", "Using gen"], answer: "Using yield", attempted: false, selected: "" },
  { num: 40, question: "40 What is the output of `'a' in ['a', 'b', 'c']`?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 41, question: "41 Which is used to measure code execution time?", options: ["timeit", "datetime", "clock", "stopwatch"], answer: "timeit", attempted: false, selected: "" },
  { num: 42, question: "42 What does `math.sqrt(16)` return?", options: ["4", "4.0", "8", "2"], answer: "4.0", attempted: false, selected: "" },
  { num: 43, question: "43 How do you copy a list?", options: ["list.copy()", "list[:]", "list.copy", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 44, question: "44 What is the output of `bool([])`?", options: ["True", "False", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 45, question: "45 Which is used to iterate over key-value pairs?", options: [".items()", ".keys()", ".values()", ".pairs()"], answer: ".items()", attempted: false, selected: "" },
  { num: 46, question: "46 What does `' hello '.strip()` return?", options: ["hello", "'hello'", "' hello '", "Error"], answer: "hello", attempted: false, selected: "" },
  { num: 47, question: "47 How do you create a lambda function?", options: ["lambda x: x", "function(x): x", "def lambda x: x", "lambda function x"], answer: "lambda x: x", attempted: false, selected: "" },
  { num: 48, question: "48 What is the output of `max([1, 2, 3])`?", options: ["1", "2", "3", "Error"], answer: "3", attempted: false, selected: "" },
  { num: 49, question: "49 Which module is used for HTTP requests?", options: ["http", "requests", "urllib", "All of these"], answer: "All of these", attempted: false, selected: "" },
  { num: 50, question: "50 What does `help()` function do?", options: ["Shows documentation", "Provides assistance", "Calls customer support", "Prints help message"], answer: "Shows documentation", attempted: false, selected: "" }
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
