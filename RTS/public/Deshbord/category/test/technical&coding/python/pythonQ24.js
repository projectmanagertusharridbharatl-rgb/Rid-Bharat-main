const questions = 
[
 
  { num: 1, question: "2 Which method is used to add an element to the end of a list?", options: [".append()", ".insert()", ".add()", ".push()"], answer: ".append()", attempted: false, selected: "" },
   { num: 2, question: "1 What is the output of `print(2 + 2 * 2)`?", options: ["6", "8", "4", "SyntaxError"], answer: "6", attempted: false, selected: "" },
  { num: 3, question: "3 What is the correct way to create a tuple with a single element?", options: ["(1)", "(1,)", "[1]", "{1}"], answer: "(1,)", attempted: false, selected: "" },
  { num: 4, question: "4 What does the `globals()` function return?", options: ["All global variables", "Only built-in functions", "Current module name", "List of imported modules"], answer: "All global variables", attempted: false, selected: "" },
  { num: 5, question: "5 How do you check if a variable is an instance of a specific class?", options: ["isinstance()", "type()", "hasattr()", "checktype()"], answer: "isinstance()", attempted: false, selected: "" },
  { num: 6, question: "6 What is the output of `print(0.1 + 0.2 == 0.3)`?", options: ["True", "False", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 7, question: "7 Which module is used for working with JSON data?", options: ["json", "simplejson", "js", "pyjson"], answer: "json", attempted: false, selected: "" },
  { num: 8, question: "8 What does the `__name__` variable contain when a script is run directly?", options: ["__main__", "main", "script", "None"], answer: "__main__", attempted: false, selected: "" },
  { num: 9, question: "9 How do you create a dictionary with default values?", options: ["defaultdict", "dict.default()", "setdefault()", "default()"], answer: "defaultdict", attempted: false, selected: "" },
  { num: 10, question: "10 What is the output of `print('Hello, {}'.format('World'))`?", options: ["Hello, World", "Hello, {}", "Error", "None"], answer: "Hello, World", attempted: false, selected: "" },
  { num: 11, question: "11 Which method is used to remove whitespace from the beginning and end of a string?", options: [".strip()", ".trim()", ".clean()", ".remove()"], answer: ".strip()", attempted: false, selected: "" },
  { num: 12, question: "12 What does `list(range(1, 5))` return?", options: ["[1, 2, 3, 4]", "[1, 2, 3, 4, 5]", "[0, 1, 2, 3, 4]", "Error"], answer: "[1, 2, 3, 4]", attempted: false, selected: "" },
  { num: 13, question: "13 Which operator is used for floor division?", options: ["//", "/", "%", "|"], answer: "//", attempted: false, selected: "" },
  { num: 14, question: "14 What is the output of `print(bool([]))`?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 15, question: "15 How do you convert a string to an integer?", options: ["int()", "strToInt()", "parseInt()", "toInt()"], answer: "int()", attempted: false, selected: "" },
  { num: 16, question: "16 What does `'hello'.capitalize()` return?", options: ["Hello", "hello", "HELLO", "hELLO"], answer: "Hello", attempted: false, selected: "" },
  { num: 17, question: "17 Which method is used to sort a list in place?", options: [".sort()", "sorted()", ".order()", ".arrange()"], answer: ".sort()", attempted: false, selected: "" },
  { num: 18, question: "18 What is the output of `print(3 == '3')`?", options: ["True", "False", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 19, question: "19 How do you read the entire content of a file into a string?", options: [".read()", ".readline()", ".readall()", ".get()"], answer: ".read()", attempted: false, selected: "" },
  { num: 20, question: "20 What does `'hello'.endswith('o')` return?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 21, question: "21 Which method is used to get the index of an element in a list?", options: [".index()", ".find()", ".search()", ".get()"], answer: ".index()", attempted: false, selected: "" },
  { num: 22, question: "22 What is the output of `print(not True)`?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 23, question: "23 How do you create a shallow copy of a dictionary?", options: [".copy()", "dict()", "clone()", "[:]"], answer: ".copy()", attempted: false, selected: "" },
  { num: 24, question: "24 What does `'hello'.count('l')` return?", options: ["2", "1", "0", "Error"], answer: "2", attempted: false, selected: "" },
  { num: 25, question: "25 Which module is used for mathematical operations?", options: ["math", "calc", "numpy", "algebra"], answer: "math", attempted: false, selected: "" },
  { num: 26, question: "26 What is the output of `print('Hello' * 2)`?", options: ["HelloHello", "Hello2", "Error", "None"], answer: "HelloHello", attempted: false, selected: "" },
  { num: 27, question: "27 How do you check if a string contains only digits?", options: [".isdigit()", ".isnumeric()", ".isnumber()", ".isdigits()"], answer: ".isdigit()", attempted: false, selected: "" },
  { num: 28, question: "28 What does `'hello'.islower()` return?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 29, question: "29 Which method is used to remove the last element of a list?", options: [".pop()", ".remove()", ".delete()", ".cut()"], answer: ".pop()", attempted: false, selected: "" },
  { num: 30, question: "30 What is the output of `print(10 / 3)`?", options: ["3.333...", "3", "3.0", "Error"], answer: "3.333...", attempted: false, selected: "" },
  { num: 31, question: "31 How do you convert a list to a tuple?", options: ["tuple()", "listToTuple()", "convert()", "toTuple()"], answer: "tuple()", attempted: false, selected: "" },
  { num: 32, question: "32 What does `'hello'.startswith('h')` return?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 33, question: "33 Which method is used to join list elements into a string?", options: ["'.join()'", "concat()", "merge()", "combine()"], answer: "'.join()'", attempted: false, selected: "" },
  { num: 34, question: "34 What is the output of `print(7 % 2)`?", options: ["1", "0", "3.5", "Error"], answer: "1", attempted: false, selected: "" },
  { num: 35, question: "35 How do you check if a variable exists in Python?", options: ["'var' in locals() or 'var' in globals()", "exists()", "hasVar()", "checkVar()"], answer: "'var' in locals() or 'var' in globals()", attempted: false, selected: "" },
  { num: 36, question: "36 What does `'hello'.title()` return?", options: ["Hello", "hello", "HELLO", "hELLO"], answer: "Hello", attempted: false, selected: "" },
  { num: 37, question: "37 Which method is used to remove all elements from a list?", options: [".clear()", ".empty()", ".deleteAll()", ".removeAll()"], answer: ".clear()", attempted: false, selected: "" },
  { num: 38, question: "38 What is the output of `print(3 > 2 > 1)`?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 39, question: "39 How do you check the Python version from the command line?", options: ["python --version", "python -v", "python version", "python -V"], answer: "python --version", attempted: false, selected: "" },
  { num: 40, question: "40 What does `'hello'.swapcase()` return?", options: ["HELLO", "hello", "hELLO", "Hello"], answer: "hELLO", attempted: false, selected: "" },
  { num: 41, question: "41 Which method is used to get the absolute value of a number?", options: ["abs()", "absolute()", "mod()", "pos()"], answer: "abs()", attempted: false, selected: "" },
  { num: 42, question: "42 What is the output of `print(1 == True)`?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 43, question: "43 How do you get the ASCII value of a character?", options: ["ord()", "chr()", "ascii()", "getASCII()"], answer: "ord()", attempted: false, selected: "" },
  { num: 44, question: "44 What does `'hello'.partition('l')` return?", options: ["('he', 'l', 'lo')", "('h', 'e', 'llo')", "('hel', 'l', 'o')", "Error"], answer: "('he', 'l', 'lo')", attempted: false, selected: "" },
  { num: 45, question: "45 Which module is used for working with operating system functionalities?", options: ["os", "sys", "platform", "shutil"], answer: "os", attempted: false, selected: "" },
  { num: 46, question: "46 What is the output of `print(not 0)`?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 47, question: "47 How do you convert a string to a list of characters?", options: ["list()", "split()", "toList()", "chars()"], answer: "list()", attempted: false, selected: "" },
  { num: 48, question: "48 What does `'hello'.center(10)` return?", options: ["'  hello   '", "'hello     '", "'   hello  '", "Error"], answer: "'  hello   '", attempted: false, selected: "" },
  { num: 49, question: "49 Which method is used to check if a string contains a substring?", options: ["in operator", ".contains()", ".has()", ".find()"], answer: "in operator", attempted: false, selected: "" },
  { num: 50, question: "50 What is the output of `print(2 + True)`?", options: ["3", "2", "True", "Error"], answer: "3", attempted: false, selected: "" }
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
