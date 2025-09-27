const questions = 
[
  { num: 1, question: "1 What is the output of 'Hello' + 3 in Python?", options: ["Hello3", "TypeError", "Hello Hello Hello", "Nothing"], answer: "TypeError", attempted: false, selected: "" },
  { num: 2, question: "2 Which keyword is used to define a function in Python?", options: ["def", "function", "define", "func"], answer: "def", attempted: false, selected: "" },
  { num: 3, question: "3 What does the len() function do?", options: ["Returns the length of an object", "Converts to lowercase", "Rounds a number", "Creates a list"], answer: "Returns the length of an object", attempted: false, selected: "" },
  { num: 4, question: "4 How do you start a for loop in Python?", options: ["for x in y:", "for (x in y)", "loop x in y:", "for x from y:"], answer: "for x in y:", attempted: false, selected: "" },
  { num: 5, question: "5 What does enumerate() return?", options: ["Index-value pairs", "Only values", "Only indexes", "List of strings"], answer: "Index-value pairs", attempted: false, selected: "" },
  { num: 6, question: "6 Which operator is used for exponentiation in Python?", options: ["^", "**", "*", "//"], answer: "**", attempted: false, selected: "" },
  { num: 7, question: "7 What is the correct way to create an empty list?", options: ["list = []", "list = list()", "list = {}", "Both A and B"], answer: "Both A and B", attempted: false, selected: "" },
  { num: 8, question: "8 How do you comment a single line in Python?", options: ["// comment", "# comment", "/* comment */", "-- comment"], answer: "# comment", attempted: false, selected: "" },
  { num: 9, question: "9 What is the output of bool('False')?", options: ["False", "True", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 10, question: "10 Which method removes the last item from a list?", options: ["remove()", "pop()", "delete()", "cut()"], answer: "pop()", attempted: false, selected: "" },
  { num: 11, question: "11 What is the correct file extension for Python files?", options: [".py", ".python", ".pyt", ".pt"], answer: ".py", attempted: false, selected: "" },
  { num: 12, question: "12 Which module is used for working with dates?", options: ["time", "date", "datetime", "calendar"], answer: "datetime", attempted: false, selected: "" },
  { num: 13, question: "13 What does the 'is' operator compare?", options: ["Values", "Memory locations", "Types", "Lengths"], answer: "Memory locations", attempted: false, selected: "" },
  { num: 14, question: "14 How do you open a file for reading in Python?", options: ["open('file.txt', 'r')", "open('file.txt', 'read')", "open('file.txt')", "open('file.txt', 'w')"], answer: "open('file.txt', 'r')", attempted: false, selected: "" },
  { num: 15, question: "15 What is the output of 3 * 'abc'?", options: ["'abcabcabc'", "'3abc'", "Error", "None"], answer: "'abcabcabc'", attempted: false, selected: "" },
  { num: 16, question: "16 Which collection is unordered and unindexed?", options: ["List", "Tuple", "Set", "Dictionary"], answer: "Set", attempted: false, selected: "" },
  { num: 17, question: "17 What is the correct way to create a virtual environment?", options: ["python -m venv env", "python create env", "python virtual env", "python -m virtual env"], answer: "python -m venv env", attempted: false, selected: "" },
  { num: 18, question: "18 How do you convert a string to lowercase?", options: ["lower()", "toLower()", "caseLower()", "str.lower()"], answer: "lower()", attempted: false, selected: "" },
  { num: 19, question: "19 What does the __init__ method do?", options: ["Initializes a class", "Terminates a program", "Imports modules", "Creates a loop"], answer: "Initializes a class", attempted: false, selected: "" },
  { num: 20, question: "20 Which decorator is used for class methods?", options: ["@staticmethod", "@classmethod", "@method", "@function"], answer: "@classmethod", attempted: false, selected: "" },
  { num: 21, question: "21 What is the output of [x for x in range(3)]?", options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "Error"], answer: "[0, 1, 2]", attempted: false, selected: "" },
  { num: 22, question: "22 How do you handle exceptions in Python?", options: ["try-except", "try-catch", "error-handle", "exception"], answer: "try-except", attempted: false, selected: "" },
  { num: 23, question: "23 What does the pass statement do?", options: ["Terminates the program", "Skips current iteration", "Does nothing", "Raises an error"], answer: "Does nothing", attempted: false, selected: "" },
  { num: 24, question: "24 Which function returns the absolute value?", options: ["abs()", "absolute()", "val()", "mod()"], answer: "abs()", attempted: false, selected: "" },
  { num: 25, question: "25 What is the output of 'Hello'[1:3]?", options: ["'Hel'", "'el'", "'llo'", "'ell'"], answer: "'el'", attempted: false, selected: "" },
  { num: 26, question: "26 How do you reverse a list in place?", options: ["list.reverse()", "reversed(list)", "list[::-1]", "Both A and C"], answer: "list.reverse()", attempted: false, selected: "" },
  { num: 27, question: "27 Which module is used for regular expressions?", options: ["regex", "re", "regexp", "pyre"], answer: "re", attempted: false, selected: "" },
  { num: 28, question: "28 What is the output of bool(0)?", options: ["True", "False", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 29, question: "29 How do you create a dictionary?", options: ["dict = {}", "dict = dict()", "dict = []", "Both A and B"], answer: "Both A and B", attempted: false, selected: "" },
  { num: 30, question: "30 What does the zip() function do?", options: ["Compresses files", "Combines iterables", "Unpacks lists", "Creates loops"], answer: "Combines iterables", attempted: false, selected: "" },
  { num: 31, question: "31 Which is not a Python built-in data type?", options: ["list", "tuple", "array", "set"], answer: "array", attempted: false, selected: "" },
  { num: 32, question: "32 What is the output of 2**3**2?", options: ["64", "512", "16", "12"], answer: "512", attempted: false, selected: "" },
  { num: 33, question: "33 How do you check if a key exists in a dictionary?", options: ["key in dict", "dict.has_key()", "dict.exists()", "dict.contains()"], answer: "key in dict", attempted: false, selected: "" },
  { num: 34, question: "34 What does the super() function do?", options: ["Calls parent class methods", "Terminates program", "Creates super variables", "Imports all modules"], answer: "Calls parent class methods", attempted: false, selected: "" },
  { num: 35, question: "35 Which is used for string formatting?", options: ["%", ".format()", "f-strings", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 36, question: "36 What is the output of 'hello'.upper()?", options: ["'HELLO'", "'Hello'", "'hello'", "Error"], answer: "'HELLO'", attempted: false, selected: "" },
  { num: 37, question: "37 How do you create a generator function?", options: ["def with yield", "def with return", "gen function", "generator def"], answer: "def with yield", attempted: false, selected: "" },
  { num: 38, question: "38 What does the @property decorator do?", options: ["Creates read-only properties", "Imports properties", "Deletes properties", "Hides properties"], answer: "Creates read-only properties", attempted: false, selected: "" },
  { num: 39, question: "39 Which is immutable?", options: ["List", "Dictionary", "Tuple", "Set"], answer: "Tuple", attempted: false, selected: "" },
  { num: 40, question: "40 What is the output of 7 // 2?", options: ["3.5", "3", "4", "Error"], answer: "3", attempted: false, selected: "" },
  { num: 41, question: "41 How do you import a module with an alias?", options: ["import module as m", "import m from module", "alias module m", "module import as m"], answer: "import module as m", attempted: false, selected: "" },
  { num: 42, question: "42 What does the __name__ variable contain?", options: ["Current module name", "File path", "Class name", "Function name"], answer: "Current module name", attempted: false, selected: "" },
  { num: 43, question: "43 Which is used for multi-line comments?", options: ["''' '''", "# #", "// //", "/* */"], answer: "''' '''", attempted: false, selected: "" },
  { num: 44, question: "44 What is the output of bool([])?", options: ["True", "False", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 45, question: "45 How do you create a set?", options: ["set = {}", "set = set()", "set = []", "Both A and B"], answer: "set = set()", attempted: false, selected: "" },
  { num: 46, question: "46 What does the map() function do?", options: ["Creates a map object", "Applies function to items", "Draws a map", "Both A and B"], answer: "Both A and B", attempted: false, selected: "" },
  { num: 47, question: "47 Which is not a Python keyword?", options: ["lambda", "yield", "async", "function"], answer: "function", attempted: false, selected: "" },
  { num: 48, question: "48 What is the output of 'a' in {'a': 1}?", options: ["True", "False", "1", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 49, question: "49 How do you convert a string to an integer?", options: ["int()", "toInt()", "parseInt()", "strToInt()"], answer: "int()", attempted: false, selected: "" },
  { num: 50, question: "50 What does the __str__ method do?", options: ["String representation", "Converts to string", "Prints object", "Both A and B"], answer: "String representation", attempted: false, selected: "" }
]
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
