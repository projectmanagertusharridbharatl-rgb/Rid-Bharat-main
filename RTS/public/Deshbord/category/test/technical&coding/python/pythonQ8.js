const questions = [
  { num: 1, question: "1 What is the output of print(2 + 3 * 2)?", options: ["8", "10", "12", "9"], answer: "8", attempted: false, selected: "" },
  { num: 2, question: "2 Which of these is a mutable data type in Python?", options: ["list", "tuple", "str", "int"], answer: "list", attempted: false, selected: "" },
  { num: 3, question: "3 What does the len() function return?", options: ["Length", "Size in bytes", "Memory address", "Nothing"], answer: "Length", attempted: false, selected: "" },
  { num: 4, question: "4 What is the index of first element in a Python list?", options: ["0", "1", "-1", "None"], answer: "0", attempted: false, selected: "" },
  { num: 5, question: "5 Which keyword is used to define a class?", options: ["class", "define", "struct", "object"], answer: "class", attempted: false, selected: "" },
  { num: 6, question: "6 Which symbol is used for floor division?", options: ["//", "/", "%", "**"], answer: "//", attempted: false, selected: "" },
  { num: 7, question: "7 Which function is used to find maximum value?", options: ["max()", "maximum()", "high()", "top()"], answer: "max()", attempted: false, selected: "" },
  { num: 8, question: "8 Which one is a loop structure in Python?", options: ["for", "switch", "case", "select"], answer: "for", attempted: false, selected: "" },
  { num: 9, question: "9 Which function is used to round numbers?", options: ["round()", "floor()", "int()", "truncate()"], answer: "round()", attempted: false, selected: "" },
  { num: 10, question: "10 Which of these is a Python boolean value?", options: ["True", "YES", "true", "1"], answer: "True", attempted: false, selected: "" },
  { num: 11, question: "11 How are elements separated in a list?", options: ["Commas", "Semicolons", "Spaces", "Slashes"], answer: "Commas", attempted: false, selected: "" },
  { num: 12, question: "12 Which operator checks for equality?", options: ["==", "=", "!=", "==="], answer: "==", attempted: false, selected: "" },
  { num: 13, question: "13 How to import a math library in Python?", options: ["import math", "include math", "require math", "using math"], answer: "import math", attempted: false, selected: "" },
  { num: 14, question: "14 What will len('') return?", options: ["0", "1", "Error", "None"], answer: "0", attempted: false, selected: "" },
  { num: 15, question: "15 Which method joins list into string?", options: ["join()", "append()", "merge()", "add()"], answer: "join()", attempted: false, selected: "" },
  { num: 16, question: "16 What is the default value of bool()?", options: ["False", "True", "None", "0"], answer: "False", attempted: false, selected: "" },
  { num: 17, question: "17 What does 'pass' statement do?", options: ["Does nothing", "Breaks loop", "Returns value", "Raises error"], answer: "Does nothing", attempted: false, selected: "" },
  { num: 18, question: "18 Which of these is not a keyword in Python?", options: ["value", "if", "while", "break"], answer: "value", attempted: false, selected: "" },
  { num: 19, question: "19 Which type is returned by input()?", options: ["str", "int", "float", "bool"], answer: "str", attempted: false, selected: "" },
  { num: 20, question: "20 What is the correct way to declare a set?", options: ["{1, 2, 3}", "[1, 2, 3]", "(1, 2, 3)", "{'a': 1}"], answer: "{1, 2, 3}", attempted: false, selected: "" },
  { num: 21, question: "21 Which function gives ASCII value of character?", options: ["ord()", "ascii()", "chr()", "ordvalue()"], answer: "ord()", attempted: false, selected: "" },
  { num: 22, question: "22 Which of these is a Python comment?", options: ["# This is a comment", "// comment", "/* comment */", "--comment"], answer: "# This is a comment", attempted: false, selected: "" },
  { num: 23, question: "23 What will print(2 ** 3 ** 2) output?", options: ["512", "64", "36", "256"], answer: "512", attempted: false, selected: "" },
  { num: 24, question: "24 What is the keyword to define constructor?", options: ["__init__", "constructor", "__create__", "init"], answer: "__init__", attempted: false, selected: "" },
  { num: 25, question: "25 Which function is used to get all keys of dictionary?", options: ["keys()", "getkeys()", "allKeys()", "dict_keys()"], answer: "keys()", attempted: false, selected: "" },
  { num: 26, question: "26 What is the correct way to check type of variable?", options: ["type()", "checkType()", "typeof()", "instanceof()"], answer: "type()", attempted: false, selected: "" },
  { num: 27, question: "27 What does list.pop() do?", options: ["Removes last item", "Adds item", "Deletes list", "Sorts list"], answer: "Removes last item", attempted: false, selected: "" },
  { num: 28, question: "28 Which loop runs at least once?", options: ["while True", "for loop", "do-while (not in Python)", "until loop"], answer: "while True", attempted: false, selected: "" },
  { num: 29, question: "29 Which function is used to find minimum value?", options: ["min()", "minimum()", "low()", "smallest()"], answer: "min()", attempted: false, selected: "" },
  { num: 30, question: "30 What will print('a' * 3) output?", options: ["aaa", "a a a", "3a", "Error"], answer: "aaa", attempted: false, selected: "" },
  { num: 31, question: "31 Which method checks if string ends with a substring?", options: ["endswith()", "end()", "checkend()", "last()"], answer: "endswith()", attempted: false, selected: "" },
  { num: 32, question: "32 What does range(5) return?", options: ["0 to 4", "1 to 5", "0 to 5", "1 to 4"], answer: "0 to 4", attempted: false, selected: "" },
  { num: 33, question: "33 Which module is used to generate random numbers?", options: ["random", "math", "numbers", "rand"], answer: "random", attempted: false, selected: "" },
  { num: 34, question: "34 How do you stop a loop?", options: ["break", "exit", "stop", "quit"], answer: "break", attempted: false, selected: "" },
  { num: 35, question: "35 What is output of bool('False')?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 36, question: "36 What is correct file mode to append?", options: ["'a'", "'w'", "'r'", "'x'"], answer: "'a'", attempted: false, selected: "" },
  { num: 37, question: "37 What is a correct way to define function with default value?", options: ["def fun(x=10):", "function(x:10)", "def fun(x==10)", "fun def(x=10)"], answer: "def fun(x=10):", attempted: false, selected: "" },
  { num: 38, question: "38 What does isinstance(5, int) return?", options: ["True", "False", "Error", "None"], answer: "True", attempted: false, selected: "" },
  { num: 39, question: "39 Which keyword is used to define anonymous function?", options: ["lambda", "anon", "def", "func"], answer: "lambda", attempted: false, selected: "" },
  { num: 40, question: "40 What will 'Python'.lower() return?", options: ["python", "PYTHON", "Python", "error"], answer: "python", attempted: false, selected: "" },
  { num: 41, question: "41 Which is not a core data type?", options: ["class", "list", "tuple", "dict"], answer: "class", attempted: false, selected: "" },
  { num: 42, question: "42 Which of the following opens file in write mode?", options: ["open('file.txt', 'w')", "open('file.txt', 'r')", "open('file.txt', 'a')", "open('file.txt')"], answer: "open('file.txt', 'w')", attempted: false, selected: "" },
  { num: 43, question: "43 What does '//' operator return?", options: ["Integer division", "Modulo", "Float", "Exponent"], answer: "Integer division", attempted: false, selected: "" },
  { num: 44, question: "44 Which is correct way to handle multiple exceptions?", options: ["except (A, B):", "except A + B:", "except A or B:", "except All:"], answer: "except (A, B):", attempted: false, selected: "" },
  { num: 45, question: "45 Which keyword is used to exit a function?", options: ["return", "exit", "break", "continue"], answer: "return", attempted: false, selected: "" },
  { num: 46, question: "46 Which is a valid variable name?", options: ["_value", "2value", "value$", "val-ue"], answer: "_value", attempted: false, selected: "" },
  { num: 47, question: "47 What is the output of print('5' + '5')?", options: ["55", "10", "Error", "5 + 5"], answer: "55", attempted: false, selected: "" },
  { num: 48, question: "48 What does the eval() function do?", options: ["Evaluates string as code", "Prints result", "Checks error", "Validates syntax"], answer: "Evaluates string as code", attempted: false, selected: "" },
  { num: 49, question: "49 What will print(type(None)) return?", options: ["<class 'NoneType'>", "<class 'None'>", "<NoneType>", "None"], answer: "<class 'NoneType'>", attempted: false, selected: "" },
  { num: 50, question: "50 Which of the following is used to comment multiple lines?", options: ["''' comment '''", "// comment", "-- comment", "*/ comment"], answer: "''' comment '''", attempted: false, selected: "" }
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
