const questions = [
  { num: 1, question: "1 Which keyword is used to define a function in Python?", options: ["def", "func", "define", "function"], answer: "def", attempted: false, selected: "" },
  { num: 2, question: "2 What is the correct file extension for Python files?", options: [".py", ".pt", ".pyt", ".p"], answer: ".py", attempted: false, selected: "" },
  { num: 3, question: "3 How do you insert comments in Python code?", options: ["# comment", "// comment", "/* comment */", "<!-- comment -->"], answer: "# comment", attempted: false, selected: "" },
  { num: 4, question: "4 Which data type is used to store text?", options: ["str", "int", "float", "bool"], answer: "str", attempted: false, selected: "" },
  { num: 5, question: "5 Which operator is used for exponentiation in Python?", options: ["**", "^", "exp", "//"], answer: "**", attempted: false, selected: "" },
  { num: 6, question: "6 What is the result of: 3 == 3.0?", options: ["True", "False", "Error", "None"], answer: "True", attempted: false, selected: "" },
  { num: 7, question: "7 Which method can be used to remove whitespace from a string?", options: ["strip()", "trim()", "clean()", "remove()"], answer: "strip()", attempted: false, selected: "" },
  { num: 8, question: "8 What is the output of: len('Python')?", options: ["6", "5", "7", "Error"], answer: "6", attempted: false, selected: "" },
  { num: 9, question: "9 Which of the following is a valid list declaration?", options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"], answer: "[1, 2, 3]", attempted: false, selected: "" },
  { num: 10, question: "10 Which keyword is used to start a conditional statement?", options: ["if", "for", "while", "def"], answer: "if", attempted: false, selected: "" },
  { num: 11, question: "11 What is the output of: type([])?", options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"], answer: "<class 'list'>", attempted: false, selected: "" },
  { num: 12, question: "12 What is the output of: bool(0)?", options: ["False", "True", "0", "None"], answer: "False", attempted: false, selected: "" },
  { num: 13, question: "13 What will be the result of: 10 // 3?", options: ["3", "3.33", "3.0", "4"], answer: "3", attempted: false, selected: "" },
  { num: 14, question: "14 Which keyword is used for loops in Python?", options: ["for", "repeat", "do", "loop"], answer: "for", attempted: false, selected: "" },
  { num: 15, question: "15 How do you create a variable with the numeric value 5?", options: ["x = 5", "int x = 5", "x := 5", "let x = 5"], answer: "x = 5", attempted: false, selected: "" },
  { num: 16, question: "16 What is used to define a block of code in Python?", options: ["Indentation", "Braces", "Parentheses", "Colon"], answer: "Indentation", attempted: false, selected: "" },
  { num: 17, question: "17 How do you start a while loop in Python?", options: ["while condition:", "loop condition:", "repeat:", "do while:"], answer: "while condition:", attempted: false, selected: "" },
  { num: 18, question: "18 Which function returns the length of a list?", options: ["len()", "length()", "count()", "size()"], answer: "len()", attempted: false, selected: "" },
  { num: 19, question: "19 Which method adds an item to the end of a list?", options: ["append()", "insert()", "add()", "extend()"], answer: "append()", attempted: false, selected: "" },
  { num: 20, question: "20 Which operator is used for string concatenation?", options: ["+", "&", "*", "%"], answer: "+", attempted: false, selected: "" },
  { num: 21, question: "21 How do you create a dictionary in Python?", options: ["{'a': 1, 'b': 2}", "[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}"], answer: "{'a': 1, 'b': 2}", attempted: false, selected: "" },
  { num: 22, question: "22 What does the 'break' statement do?", options: ["Exits loop", "Starts loop", "Skips iteration", "Repeats loop"], answer: "Exits loop", attempted: false, selected: "" },
  { num: 23, question: "23 What is the output of: 2 ** 3?", options: ["8", "6", "9", "5"], answer: "8", attempted: false, selected: "" },
  { num: 24, question: "24 How do you open a file for reading in Python?", options: ["open('file.txt', 'r')", "file('file.txt')", "read('file.txt')", "open('file.txt')"], answer: "open('file.txt', 'r')", attempted: false, selected: "" },
  { num: 25, question: "25 What is the correct way to handle exceptions?", options: ["try/except", "catch/throw", "do/except", "try/catch"], answer: "try/except", attempted: false, selected: "" },
  { num: 26, question: "26 How do you convert a string to an integer?", options: ["int('5')", "str(5)", "float('5')", "chr(5)"], answer: "int('5')", attempted: false, selected: "" },
  { num: 27, question: "27 What is the correct syntax for a class in Python?", options: ["class MyClass:", "MyClass class:", "class = MyClass", "define class MyClass"], answer: "class MyClass:", attempted: false, selected: "" },
  { num: 28, question: "28 What is the keyword used to inherit a class?", options: ["class Derived(Base):", "inherit Base", "extends Base", "Derived inherits Base"], answer: "class Derived(Base):", attempted: false, selected: "" },
  { num: 29, question: "29 Which function is used to get user input?", options: ["input()", "read()", "scan()", "fetch()"], answer: "input()", attempted: false, selected: "" },
  { num: 30, question: "30 What symbol is used to comment a single line in Python?", options: ["#", "//", "/*", "<!--"], answer: "#", attempted: false, selected: "" },
  { num: 31, question: "31 What is the output of: print(10 % 3)?", options: ["1", "3", "0", "2"], answer: "1", attempted: false, selected: "" },
  { num: 32, question: "32 Which function is used to convert a list into a set?", options: ["set()", "list()", "tuple()", "dict()"], answer: "set()", attempted: false, selected: "" },
  { num: 33, question: "33 What is the output of: bool([])?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 34, question: "34 What is a correct syntax to define a lambda function?", options: ["lambda x: x+1", "def lambda(x): x+1", "lambda(x): return x+1", "function x => x+1"], answer: "lambda x: x+1", attempted: false, selected: "" },
  { num: 35, question: "35 What is the output of: list('abc')?", options: ["['a', 'b', 'c']", "['abc']", "abc", "('a', 'b', 'c')"], answer: "['a', 'b', 'c']", attempted: false, selected: "" },
  { num: 36, question: "36 Which function converts a list into a tuple?", options: ["tuple()", "list()", "set()", "dict()"], answer: "tuple()", attempted: false, selected: "" },
  { num: 37, question: "37 What does 'continue' do in a loop?", options: ["Skips to next iteration", "Exits loop", "Starts loop", "Breaks loop"], answer: "Skips to next iteration", attempted: false, selected: "" },
  { num: 38, question: "38 What is the output of: 5 > 3 and 2 < 4?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 39, question: "39 How do you create a tuple with one item?", options: ["(1,)", "(1)", "[1]", "{1}"], answer: "(1,)", attempted: false, selected: "" },
  { num: 40, question: "40 What is the output of: type({})?", options: ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "<class 'tuple'>"], answer: "<class 'dict'>", attempted: false, selected: "" },
  { num: 41, question: "41 What is the correct way to declare a global variable?", options: ["global x", "var x", "declare x", "let x"], answer: "global x", attempted: false, selected: "" },
  { num: 42, question: "42 What is the result of: 'a' + 'b'?", options: ["ab", "a b", "a+b", "Error"], answer: "ab", attempted: false, selected: "" },
  { num: 43, question: "43 Which data structure does not allow duplicate elements?", options: ["set", "list", "tuple", "dictionary"], answer: "set", attempted: false, selected: "" },
  { num: 44, question: "44 What is the output of: 4 != 4?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 45, question: "45 What is the default value of variables in Python?", options: ["No default", "0", "None", "Empty string"], answer: "No default", attempted: false, selected: "" },
  { num: 46, question: "46 How do you define a constant in Python?", options: ["By convention using uppercase", "const keyword", "define keyword", "final keyword"], answer: "By convention using uppercase", attempted: false, selected: "" },
  { num: 47, question: "47 What does isinstance(obj, type) check?", options: ["Type of object", "Memory address", "Value of object", "Length of object"], answer: "Type of object", attempted: false, selected: "" },
  { num: 48, question: "48 What is the result of: 10 / 4?", options: ["2.5", "2", "2.0", "2.25"], answer: "2.5", attempted: false, selected: "" },
  { num: 49, question: "49 How do you write a multi-line string in Python?", options: ["'''text'''", '"text"', "#text", "/text/"], answer: "'''text'''", attempted: false, selected: "" },
  { num: 50, question: "50 What will be the output: print(type(3.14))?", options: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "<class 'complex'>"], answer: "<class 'float'>", attempted: false, selected: "" }
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
