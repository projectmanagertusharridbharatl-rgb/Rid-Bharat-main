const questions = [
  { num: 1, question: "1 What is the output of print(2 ** 3)?", options: ["8", "6", "9", "5"], answer: "8", attempted: false, selected: "" },
  { num: 2, question: "2 Which keyword is used to define a function in Python?", options: ["def", "func", "define", "function"], answer: "def", attempted: false, selected: "" },
  { num: 3, question: "3 What is the output of len('Hello')?", options: ["5", "4", "6", "Error"], answer: "5", attempted: false, selected: "" },
  { num: 4, question: "4 What data type is the result of 3 / 2?", options: ["float", "int", "str", "bool"], answer: "float", attempted: false, selected: "" },
  { num: 5, question: "5 Which symbol is used for comments in Python?", options: ["#", "//", "/* */", "--"], answer: "#", attempted: false, selected: "" },
  { num: 6, question: "6 Which function is used to get input from the user?", options: ["input()", "read()", "scan()", "get()"], answer: "input()", attempted: false, selected: "" },
  { num: 7, question: "7 What is the correct way to define a list?", options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "list(1,2,3)"], answer: "[1, 2, 3]", attempted: false, selected: "" },
  { num: 8, question: "8 Which loop runs while a condition is True?", options: ["while", "for", "until", "loop"], answer: "while", attempted: false, selected: "" },
  { num: 9, question: "9 What is the result of 5 % 2?", options: ["1", "2", "0", "2.5"], answer: "1", attempted: false, selected: "" },
  { num: 10, question: "10 What is the correct file extension for Python files?", options: [".py", ".python", ".pt", ".p"], answer: ".py", attempted: false, selected: "" },
  { num: 11, question: "11 Which of these is a valid variable name?", options: ["my_var", "2var", "my-var", "var!"], answer: "my_var", attempted: false, selected: "" },
  { num: 12, question: "12 What will print(type('123')) output?", options: ["<class 'str'>", "<class 'int'>", "<class 'float'>", "<class 'bool'>"], answer: "<class 'str'>", attempted: false, selected: "" },
  { num: 13, question: "13 Which one is a mutable data type?", options: ["list", "tuple", "str", "int"], answer: "list", attempted: false, selected: "" },
  { num: 14, question: "14 What is the result of bool(0)?", options: ["False", "True", "None", "0"], answer: "False", attempted: false, selected: "" },
  { num: 15, question: "15 What is the default value of variables that are not initialized?", options: ["None", "0", "False", "Error"], answer: "None", attempted: false, selected: "" },
  { num: 16, question: "16 How do you declare a dictionary?", options: ["{'a':1}", "['a':1]", "{a=1}", "(a:1)"], answer: "{'a':1}", attempted: false, selected: "" },
  { num: 17, question: "17 What is the output of int('5')?", options: ["5", "'5'", "Error", "None"], answer: "5", attempted: false, selected: "" },
  { num: 18, question: "18 Which function is used to find the maximum value?", options: ["max()", "maximum()", "high()", "top()"], answer: "max()", attempted: false, selected: "" },
  { num: 19, question: "19 What is the output of 'a' * 3?", options: ["aaa", "a3", "Error", "3a"], answer: "aaa", attempted: false, selected: "" },
  { num: 20, question: "20 Which function converts a string to lowercase?", options: ["lower()", "tolower()", "mincase()", "small()"], answer: "lower()", attempted: false, selected: "" },
  { num: 21, question: "21 How to check the type of a variable?", options: ["type()", "typeof()", "checktype()", "vartype()"], answer: "type()", attempted: false, selected: "" },
  { num: 22, question: "22 Which keyword is used to exit a loop?", options: ["break", "exit", "stop", "end"], answer: "break", attempted: false, selected: "" },
  { num: 23, question: "23 What is the result of round(4.6)?", options: ["5", "4", "4.6", "Error"], answer: "5", attempted: false, selected: "" },
  { num: 24, question: "24 How do you create a tuple?", options: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "tuple[1,2,3]"], answer: "(1, 2, 3)", attempted: false, selected: "" },
  { num: 25, question: "25 What is the output of 10 == 10.0?", options: ["True", "False", "Error", "None"], answer: "True", attempted: false, selected: "" },
  { num: 26, question: "26 Which operator is used for string concatenation?", options: ["+", "&", "*", "concat"], answer: "+", attempted: false, selected: "" },
  { num: 27, question: "27 What is the output of 3 != 4?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 28, question: "28 How to convert a number to string?", options: ["str()", "int()", "string()", "toString()"], answer: "str()", attempted: false, selected: "" },
  { num: 29, question: "29 What does print(5//2) output?", options: ["2", "2.5", "3", "1"], answer: "2", attempted: false, selected: "" },
  { num: 30, question: "30 What is the index of 'b' in 'abc'?", options: ["1", "0", "2", "3"], answer: "1", attempted: false, selected: "" },
  { num: 31, question: "31 What is the output of bool('False')?", options: ["True", "False", "Error", "None"], answer: "True", attempted: false, selected: "" },
  { num: 32, question: "32 Which function returns the absolute value?", options: ["abs()", "absolute()", "fabs()", "pos()"], answer: "abs()", attempted: false, selected: "" },
  { num: 33, question: "33 How do you comment multiple lines in Python?", options: ["''' comment '''", "// comment", "<!-- comment -->", "/* comment */"], answer: "''' comment '''", attempted: false, selected: "" },
  { num: 34, question: "34 What is the output of print(0 or 5)?", options: ["5", "0", "None", "Error"], answer: "5", attempted: false, selected: "" },
  { num: 35, question: "35 What is the result of print('5' + '3')?", options: ["53", "8", "Error", "35"], answer: "53", attempted: false, selected: "" },
  { num: 36, question: "36 What will print('Python'[:2]) output?", options: ["Py", "Pyt", "on", "th"], answer: "Py", attempted: false, selected: "" },
  { num: 37, question: "37 Which function converts string to list?", options: ["list()", "split()", "str()", "toList()"], answer: "list()", attempted: false, selected: "" },
  { num: 38, question: "38 How to check if value exists in list?", options: ["in", "has", "exists", "find"], answer: "in", attempted: false, selected: "" },
  { num: 39, question: "39 What is the result of print(2 in [1, 2, 3])?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 40, question: "40 How do you import the math module?", options: ["import math", "include math", "require math", "math.load()"], answer: "import math", attempted: false, selected: "" },
  { num: 41, question: "41 What is the result of print(5 > 3 and 2 < 4)?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 42, question: "42 Which of the following is a boolean value?", options: ["True", "true", "'True'", "Yes"], answer: "True", attempted: false, selected: "" },
  { num: 43, question: "43 What is returned by input() function?", options: ["String", "Integer", "Float", "Boolean"], answer: "String", attempted: false, selected: "" },
  { num: 44, question: "44 Which of the following is not a keyword in Python?", options: ["value", "if", "else", "import"], answer: "value", attempted: false, selected: "" },
  { num: 45, question: "45 What is the output of print(bool(''))?", options: ["False", "True", "Error", "None"], answer: "False", attempted: false, selected: "" },
  { num: 46, question: "46 What does print(2*'3') output?", options: ["33", "6", "Error", "3"], answer: "33", attempted: false, selected: "" },
  { num: 47, question: "47 Which method adds item to end of list?", options: ["append()", "add()", "push()", "insert()"], answer: "append()", attempted: false, selected: "" },
  { num: 48, question: "48 How do you remove all items from a list?", options: ["clear()", "remove()", "delete()", "empty()"], answer: "clear()", attempted: false, selected: "" },
  { num: 49, question: "49 Which function is used to sort a list?", options: ["sort()", "order()", "arrange()", "align()"], answer: "sort()", attempted: false, selected: "" },
  { num: 50, question: "50 What is the output of print(type(10.0))?", options: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "<class 'double'>"], answer: "<class 'float'>", attempted: false, selected: "" }
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
