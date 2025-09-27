const questions = 
[
  { num: 1, question: "1 What is the output of 'print(2**3)'?", options: ["6", "8", "9", "5"], answer: "8", attempted: false, selected: "" },
  { num: 2, question: "2 Which keyword is used to define a function in Python?", options: ["def", "function", "define", "func"], answer: "def", attempted: false, selected: "" },
  { num: 3, question: "3 What does the 'len()' function do?", options: ["Returns the length of an object", "Converts to lowercase", "Rounds a number", "Returns absolute value"], answer: "Returns the length of an object", attempted: false, selected: "" },
  { num: 4, question: "4 Which of these is NOT a Python data type?", options: ["int", "float", "double", "str"], answer: "double", attempted: false, selected: "" },
  { num: 5, question: "5 What does enumerate() return?", options: ["Index-value pairs", "Only values", "Only indexes", "List of strings"], answer: "Index-value pairs", attempted: false, selected: "" },
  { num: 6, question: "6 How do you start a comment in Python?", options: ["//", "#", "/*", "--"], answer: "#", attempted: false, selected: "" },
  { num: 7, question: "7 What is the output of 'print(3 == '3')'?", options: ["True", "False", "Error", "None"], answer: "False", attempted: false, selected: "" },
  { num: 8, question: "8 Which method removes the last item from a list?", options: ["pop()", "remove()", "delete()", "clear()"], answer: "pop()", attempted: false, selected: "" },
  { num: 9, question: "9 What is the correct way to create an empty dictionary?", options: ["{}", "dict()", "[]", "Both {} and dict()"], answer: "Both {} and dict()", attempted: false, selected: "" },
  { num: 10, question: "10 Which module is used for regular expressions?", options: ["re", "regex", "pyre", "regx"], answer: "re", attempted: false, selected: "" },
  { num: 11, question: "11 What does the 'strip()' method do?", options: ["Removes whitespace", "Splits a string", "Converts to uppercase", "Joins strings"], answer: "Removes whitespace", attempted: false, selected: "" },
  { num: 12, question: "12 How do you import a module named 'mymodule'?", options: ["import mymodule", "require mymodule", "include mymodule", "using mymodule"], answer: "import mymodule", attempted: false, selected: "" },
  { num: 13, question: "13 What is the output of 'print(type([]))'?", options: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'dict'>"], answer: "<class 'list'>", attempted: false, selected: "" },
  { num: 14, question: "14 Which keyword is used for exception handling?", options: ["try", "catch", "exception", "error"], answer: "try", attempted: false, selected: "" },
  { num: 15, question: "15 What does 'range(3)' generate?", options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "(0, 1, 2)"], answer: "[0, 1, 2]", attempted: false, selected: "" },
  { num: 16, question: "16 How do you open a file for reading?", options: ["open('file.txt', 'r')", "open('file.txt', 'read')", "open('file.txt')", "open('file.txt', 'w')"], answer: "open('file.txt', 'r')", attempted: false, selected: "" },
  { num: 17, question: "17 What is the correct syntax for a lambda function?", options: ["lambda x: x", "function(x): x", "lambda(x): x", "def lambda x: x"], answer: "lambda x: x", attempted: false, selected: "" },
  { num: 18, question: "18 Which operator is used for floor division?", options: ["/", "//", "%", "**"], answer: "//", attempted: false, selected: "" },
  { num: 19, question: "19 What does 'pass' do in Python?", options: ["Exits the program", "Skips current iteration", "Does nothing", "Raises an error"], answer: "Does nothing", attempted: false, selected: "" },
  { num: 20, question: "20 How do you check if a key exists in a dictionary?", options: ["if key in dict", "if dict.has_key(key)", "if dict[key]", "if dict.exists(key)"], answer: "if key in dict", attempted: false, selected: "" },
  { num: 21, question: "21 What is the output of 'print('Hello' * 2)'?", options: ["HelloHello", "Hello2", "Error", "['Hello', 'Hello']"], answer: "HelloHello", attempted: false, selected: "" },
  { num: 22, question: "22 Which method converts a string to lowercase?", options: ["lower()", "tolower()", "casefold()", "Both lower() and casefold()"], answer: "Both lower() and casefold()", attempted: false, selected: "" },
  { num: 23, question: "23 What does the 'zip()' function do?", options: ["Compresses files", "Combines iterables", "Creates backups", "Encrypts data"], answer: "Combines iterables", attempted: false, selected: "" },
  { num: 24, question: "24 Which is the correct way to create a set?", options: ["{}", "set()", "[]", "Both {} and set()"], answer: "set()", attempted: false, selected: "" },
  { num: 25, question: "25 What is the output of 'bool('False')'?", options: ["False", "True", "Error", "None"], answer: "True", attempted: false, selected: "" },
  { num: 26, question: "26 How do you reverse a list in place?", options: ["list.reverse()", "reversed(list)", "list[::-1]", "Both list.reverse() and list[::-1]"], answer: "list.reverse()", attempted: false, selected: "" },
  { num: 27, question: "27 What does 'sys.argv' contain?", options: ["Command-line arguments", "System variables", "Python path", "Installed modules"], answer: "Command-line arguments", attempted: false, selected: "" },
  { num: 28, question: "28 Which decorator is used for class methods?", options: ["@classmethod", "@staticmethod", "@method", "@classfunc"], answer: "@classmethod", attempted: false, selected: "" },
  { num: 29, question: "29 What is the output of 'print(0.1 + 0.2 == 0.3)'?", options: ["True", "False", "Error", "None"], answer: "False", attempted: false, selected: "" },
  { num: 30, question: "30 How do you create a virtual environment?", options: ["python -m venv env", "virtualenv env", "pipenv shell", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 31, question: "31 What does '__init__' represent?", options: ["Constructor", "Destructor", "Iterator", "Generator"], answer: "Constructor", attempted: false, selected: "" },
  { num: 32, question: "32 Which module is used for date/time operations?", options: ["datetime", "time", "calendar", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 33, question: "33 What is the output of 'print('Python'.find('th'))'?", options: ["2", "3", "4", "-1"], answer: "2", attempted: false, selected: "" },
  { num: 34, question: "34 How do you convert a string to an integer?", options: ["int()", "strToInt()", "parseInt()", "convert.int()"], answer: "int()", attempted: false, selected: "" },
  { num: 35, question: "35 What does 'with' statement do?", options: ["Creates context", "Handles exceptions", "Imports modules", "Defines loops"], answer: "Creates context", attempted: false, selected: "" },
  { num: 36, question: "36 Which is immutable in Python?", options: ["List", "Dictionary", "Tuple", "Set"], answer: "Tuple", attempted: false, selected: "" },
  { num: 37, question: "37 What is the output of 'print([i for i in range(5) if i%2==0])'?", options: ["[0, 2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]", "[2, 4]"], answer: "[0, 2, 4]", attempted: false, selected: "" },
  { num: 38, question: "38 How do you get the current working directory?", options: ["os.getcwd()", "os.path()", "os.currentdir()", "sys.path()"], answer: "os.getcwd()", attempted: false, selected: "" },
  { num: 39, question: "39 What does 'super()' do?", options: ["Calls parent class", "Creates object", "Terminates program", "Imports modules"], answer: "Calls parent class", attempted: false, selected: "" },
  { num: 40, question: "40 Which is NOT a Python web framework?", options: ["Django", "Flask", "Pyramid", "Spring"], answer: "Spring", attempted: false, selected: "" },
  { num: 41, question: "41 What is the output of 'print('Hello'.upper())'?", options: ["HELLO", "hello", "Hello", "Error"], answer: "HELLO", attempted: false, selected: "" },
  { num: 42, question: "42 How do you check if a variable is None?", options: ["if var == None", "if var is None", "if !var", "Both if var == None and if var is None"], answer: "if var is None", attempted: false, selected: "" },
  { num: 43, question: "43 What does 'yield' do in Python?", options: ["Returns value", "Pauses function", "Creates generator", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 44, question: "44 Which is used for formatted strings?", options: ["f-strings", ".format()", "% formatting", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 45, question: "45 What is the output of 'print(round(3.14159, 2))'?", options: ["3.14", "3.1", "3.142", "3.141"], answer: "3.14", attempted: false, selected: "" },
  { num: 46, question: "46 How do you copy a list?", options: ["list.copy()", "list[:]", "copy.copy(list)", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 47, question: "47 What does 'isinstance()' do?", options: ["Checks type", "Creates instance", "Compares values", "Imports module"], answer: "Checks type", attempted: false, selected: "" },
  { num: 48, question: "48 Which is used for mathematical operations?", options: ["math", "numpy", "random", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 49, question: "49 What is the output of 'print('Python'[1:4])'?", options: ["yth", "Pyt", "thon", "Python"], answer: "yth", attempted: false, selected: "" },
  { num: 50, question: "50 How do you exit a Python script?", options: ["sys.exit()", "exit()", "quit()", "All of the above"], answer: "All of the above", attempted: false, selected: "" }
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
