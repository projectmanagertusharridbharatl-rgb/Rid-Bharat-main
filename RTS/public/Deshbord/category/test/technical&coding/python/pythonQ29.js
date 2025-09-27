const questions = 
[
  { num: 1, question: "1 What is the output of print(type(5))?", options: ["<class 'int'>", "<class 'number'>", "<class 'float'>", "<class 'str'>"], answer: "<class 'int'>", attempted: false, selected: "" },
  { num: 2, question: "2 Which method is used to add an element at the end of a list?", options: ["append()", "insert()", "add()", "push()"], answer: "append()", attempted: false, selected: "" },
  { num: 3, question: "3 What does the break statement do in a loop?", options: ["Skips current iteration", "Terminates the loop", "Continues to next iteration", "Pauses execution"], answer: "Terminates the loop", attempted: false, selected: "" },
  { num: 4, question: "4 How do you create a tuple with one element?", options: ["(1)", "(1,)", "[1]", "{1}"], answer: "(1,)", attempted: false, selected: "" },
  { num: 5, question: "5 What is the output of 'Python'[::2]?", options: ["'Pto'", "'Pyth'", "'yhn'", "'Python'"], answer: "'Pto'", attempted: false, selected: "" },
  { num: 6, question: "6 Which module is used for mathematical operations?", options: ["math", "calc", "numpy", "arithmetic"], answer: "math", attempted: false, selected: "" },
  { num: 7, question: "7 What does the dict.get(key) method return if key doesn't exist?", options: ["None", "KeyError", "False", "0"], answer: "None", attempted: false, selected: "" },
  { num: 8, question: "8 How do you convert a number to a string?", options: ["str()", "string()", "toString()", "parseStr()"], answer: "str()", attempted: false, selected: "" },
  { num: 9, question: "9 What is the output of bool(' ')?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 10, question: "10 Which is used to remove whitespace from string ends?", options: ["trim()", "strip()", "clean()", "remove()"], answer: "strip()", attempted: false, selected: "" },
  { num: 11, question: "11 What does the sorted() function return?", options: ["Original list", "New sorted list", "Sorted tuple", "None"], answer: "New sorted list", attempted: false, selected: "" },
  { num: 12, question: "12 How do you check if all characters are alphabetic?", options: ["isalpha()", "isletter()", "alpha()", "isalphabetic()"], answer: "isalpha()", attempted: false, selected: "" },
  { num: 13, question: "13 What is the output of 3 == '3'?", options: ["True", "False", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 14, question: "14 Which is used to create an anonymous function?", options: ["lambda", "def", "function", "anon"], answer: "lambda", attempted: false, selected: "" },
  { num: 15, question: "15 What does the __file__ variable contain?", options: ["Current file name", "File object", "File content", "File size"], answer: "Current file name", attempted: false, selected: "" },
  { num: 16, question: "16 How do you round a number to 2 decimal places?", options: ["round(x, 2)", "round(2, x)", "round(x)", "round(x, 0.01)"], answer: "round(x, 2)", attempted: false, selected: "" },
  { num: 17, question: "17 What is the output of [1, 2] * 2?", options: ["[1, 2, 1, 2]", "[2, 4]", "[[1, 2], [1, 2]]", "Error"], answer: "[1, 2, 1, 2]", attempted: false, selected: "" },
  { num: 18, question: "18 Which method is used to get all dictionary keys?", options: ["keys()", "getKeys()", "items()", "allKeys()"], answer: "keys()", attempted: false, selected: "" },
  { num: 19, question: "19 What does the continue statement do?", options: ["Ends the loop", "Skips current iteration", "Pauses execution", "Restarts loop"], answer: "Skips current iteration", attempted: false, selected: "" },
  { num: 20, question: "20 How do you import a specific function from a module?", options: ["from module import function", "import function from module", "import module.function", "require module.function"], answer: "from module import function", attempted: false, selected: "" },
  { num: 21, question: "21 What is the output of 'hello'.capitalize()?", options: ["'Hello'", "'hello'", "'HELLO'", "'hELLO'"], answer: "'Hello'", attempted: false, selected: "" },
  { num: 22, question: "22 Which is used to measure code execution time?", options: ["time.time()", "time.measure()", "time.clock()", "time.exec()"], answer: "time.time()", attempted: false, selected: "" },
  { num: 23, question: "23 What does the any() function return?", options: ["True if any element is true", "First true element", "Count of true elements", "List of true elements"], answer: "True if any element is true", attempted: false, selected: "" },
  { num: 24, question: "24 How do you create a shallow copy of a list?", options: ["list.copy()", "list[:]", "list(list)", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 25, question: "25 What is the output of 'a' + str(1)?", options: ["'a1'", "'a 1'", "Error", "1"], answer: "'a1'", attempted: false, selected: "" },
  { num: 26, question: "26 Which is used to remove an item by value from list?", options: ["remove()", "pop()", "delete()", "discard()"], answer: "remove()", attempted: false, selected: "" },
  { num: 27, question: "27 What does the filter() function do?", options: ["Filters elements", "Applies function", "Returns iterator", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 28, question: "28 How do you check if a variable is a list?", options: ["type(var) == list", "isinstance(var, list)", "var.isList()", "Both A and B"], answer: "Both A and B", attempted: false, selected: "" },
  { num: 29, question: "29 What is the output of 10 / 3?", options: ["3", "3.333...", "3.0", "Error"], answer: "3.333...", attempted: false, selected: "" },
  { num: 30, question: "30 Which is used to generate random numbers?", options: ["random", "rand", "numpy", "math"], answer: "random", attempted: false, selected: "" },
  { num: 31, question: "31 What does the join() method do?", options: ["Combines strings", "Joins lists", "Concatenates tuples", "Merges dictionaries"], answer: "Combines strings", attempted: false, selected: "" },
  { num: 32, question: "32 How do you convert a list to a tuple?", options: ["tuple(list)", "list.toTuple()", "convert(list, tuple)", "tuple.fromList(list)"], answer: "tuple(list)", attempted: false, selected: "" },
  { num: 33, question: "33 What is the output of bool('0')?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 34, question: "34 Which is used to format strings with variables?", options: ["f-strings", ".format()", "% operator", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 35, question: "35 What does the __doc__ attribute contain?", options: ["Documentation string", "Docstring", "Module docs", "Both A and B"], answer: "Both A and B", attempted: false, selected: "" },
  { num: 36, question: "36 How do you count occurrences in a list?", options: ["count()", "occurrences()", "findAll()", "counter()"], answer: "count()", attempted: false, selected: "" },
  { num: 37, question: "37 What is the output of 'hello'.replace('l', '')?", options: ["'heo'", "'helo'", "'heo'", "'hello'"], answer: "'heo'", attempted: false, selected: "" },
  { num: 38, question: "38 Which is used to get current working directory?", options: ["os.getcwd()", "os.path()", "os.current()", "os.pwd()"], answer: "os.getcwd()", attempted: false, selected: "" },
  { num: 39, question: "39 What does the setdefault() method do?", options: ["Sets default value", "Gets or sets default", "Creates default dict", "Returns default"], answer: "Gets or sets default", attempted: false, selected: "" },
  { num: 40, question: "40 How do you make a class inherit from another?", options: ["class Child(Parent)", "class Child: Parent", "class Child extends Parent", "class Child <- Parent"], answer: "class Child(Parent)", attempted: false, selected: "" },
  { num: 41, question: "41 What is the output of 'Python'.find('th')?", options: ["2", "3", "4", "-1"], answer: "2", attempted: false, selected: "" },
  { num: 42, question: "42 Which is used to remove dictionary items?", options: ["del", "pop()", "remove()", "Both A and B"], answer: "Both A and B", attempted: false, selected: "" },
  { num: 43, question: "43 What does the all() function return?", options: ["True if all elements are true", "First false element", "Count of true elements", "List of all elements"], answer: "True if all elements are true", attempted: false, selected: "" },
  { num: 44, question: "44 How do you check if a string contains digits?", options: ["isdigit()", "isnumeric()", "containsDigit()", "Both A and B"], answer: "Both A and B", attempted: false, selected: "" },
  { num: 45, question: "45 What is the output of chr(65)?", options: ["'A'", "'65'", "65", "Error"], answer: "'A'", attempted: false, selected: "" },
  { num: 46, question: "46 Which is used to create a package?", options: ["__init__.py", "__package__.py", "package.py", "setup.py"], answer: "__init__.py", attempted: false, selected: "" },
  { num: 47, question: "47 What does the locals() function return?", options: ["Local variables", "Global variables", "Built-ins", "Module variables"], answer: "Local variables", attempted: false, selected: "" },
  { num: 48, question: "48 How do you convert bytes to string?", options: ["decode()", "encode()", "str()", "bytesToString()"], answer: "decode()", attempted: false, selected: "" },
  { num: 49, question: "49 What is the output of ord('A')?", options: ["65", "'A'", "1", "Error"], answer: "65", attempted: false, selected: "" },
  { num: 50, question: "50 Which is used to execute Python code dynamically?", options: ["exec()", "eval()", "run()", "Both A and B"], answer: "Both A and B", attempted: false, selected: "" }
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
