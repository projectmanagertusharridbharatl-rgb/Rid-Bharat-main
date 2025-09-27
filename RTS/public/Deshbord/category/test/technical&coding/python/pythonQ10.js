const questions = [
  { num: 1, question: "1 What is the correct file extension for Python files?", options: [".py", ".python", ".pt", ".pyt"], answer: ".py", attempted: false, selected: "" },
  { num: 2, question: "2 How do you insert comments in Python code?", options: ["# Comment", "// Comment", "/* Comment */", "<!-- Comment -->"], answer: "# Comment", attempted: false, selected: "" },
  { num: 3, question: "3 How do you create a variable with value 5 in Python?", options: ["x = 5", "int x = 5", "let x = 5", "x := 5"], answer: "x = 5", attempted: false, selected: "" },
  { num: 4, question: "4 What is the correct way to create a function in Python?", options: ["def myFunc():", "function myFunc():", "create myFunc():", "fun myFunc()"], answer: "def myFunc():", attempted: false, selected: "" },
  { num: 5, question: "5 Which data type is immutable?", options: ["tuple", "list", "dict", "set"], answer: "tuple", attempted: false, selected: "" },
  { num: 6, question: "6 What will print(2**3) output?", options: ["8", "6", "9", "5"], answer: "8", attempted: false, selected: "" },
  { num: 7, question: "7 What is the output of print(len('Python'))?", options: ["6", "5", "7", "Error"], answer: "6", attempted: false, selected: "" },
  { num: 8, question: "8 How do you start a while loop in Python?", options: ["while x < 5:", "while (x < 5)", "loop x<5", "while x<5 then"], answer: "while x < 5:", attempted: false, selected: "" },
  { num: 9, question: "9 What will print(type(10)) output?", options: ["<class 'int'>", "<int>", "int", "number"], answer: "<class 'int'>", attempted: false, selected: "" },
  { num: 10, question: "10 What is the output of print(10 % 3)?", options: ["1", "3", "0", "2"], answer: "1", attempted: false, selected: "" },
  { num: 11, question: "11 Which keyword is used to create a class in Python?", options: ["class", "define", "object", "new"], answer: "class", attempted: false, selected: "" },
  { num: 12, question: "12 What is the correct way to create a dictionary?", options: ["{'a': 1}", "{a = 1}", "dict = (a:1)", "[a:1]"], answer: "{'a': 1}", attempted: false, selected: "" },
  { num: 13, question: "13 Which function converts a string to an integer?", options: ["int()", "str()", "float()", "bool()"], answer: "int()", attempted: false, selected: "" },
  { num: 14, question: "14 Which of the following is a valid list?", options: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "1, 2, 3"], answer: "[1, 2, 3]", attempted: false, selected: "" },
  { num: 15, question: "15 How do you access the first element in a list named myList?", options: ["myList[0]", "myList(0)", "myList{0}", "myList.0"], answer: "myList[0]", attempted: false, selected: "" },
  { num: 16, question: "16 Which function is used to get user input?", options: ["input()", "get()", "scan()", "read()"], answer: "input()", attempted: false, selected: "" },
  { num: 17, question: "17 What is the keyword to define a block of code in a function?", options: ["def", "function", "fun", "define"], answer: "def", attempted: false, selected: "" },
  { num: 18, question: "18 How do you handle exceptions in Python?", options: ["try-except", "if-catch", "try-catch", "except-if"], answer: "try-except", attempted: false, selected: "" },
  { num: 19, question: "19 Which method adds an item to a list?", options: ["append()", "add()", "insert()", "push()"], answer: "append()", attempted: false, selected: "" },
  { num: 20, question: "20 What is the output of print(4 // 2)?", options: ["2", "2.0", "4", "1"], answer: "2", attempted: false, selected: "" },
  { num: 21, question: "21 What does print('Hello'.lower()) output?", options: ["hello", "HELLO", "Hello", "error"], answer: "hello", attempted: false, selected: "" },
  { num: 22, question: "22 What is the result of print(bool(1))?", options: ["True", "False", "1", "None"], answer: "True", attempted: false, selected: "" },
  { num: 23, question: "23 What is the default value of a function parameter?", options: ["None", "0", "''", "undefined"], answer: "None", attempted: false, selected: "" },
  { num: 24, question: "24 How do you create an empty set?", options: ["set()", "{}", "[]", "empty()"], answer: "set()", attempted: false, selected: "" },
  { num: 25, question: "25 What will print('1' + '2') return?", options: ["12", "3", "Error", "1 2"], answer: "12", attempted: false, selected: "" },
  { num: 26, question: "26 Which function returns the largest item in a list?", options: ["max()", "biggest()", "large()", "top()"], answer: "max()", attempted: false, selected: "" },
  { num: 27, question: "27 How to define a multi-line string?", options: ['"""text"""', "'text'", "text\ntext", "#text"], answer: '"""text"""', attempted: false, selected: "" },
  { num: 28, question: "28 How to check if a key exists in a dictionary?", options: ["'key' in dict", "dict.has('key')", "exists(dict, 'key')", "key in dict.keys()"], answer: "'key' in dict", attempted: false, selected: "" },
  { num: 29, question: "29 What does len([]) return?", options: ["0", "1", "None", "Error"], answer: "0", attempted: false, selected: "" },
  { num: 30, question: "30 What is the output of print(type([]))?", options: ["<class 'list'>", "list", "List", "object"], answer: "<class 'list'>", attempted: false, selected: "" },
  { num: 31, question: "31 How do you convert a list to a tuple?", options: ["tuple(list)", "list.toTuple()", "list2tuple()", "convert(tuple)"], answer: "tuple(list)", attempted: false, selected: "" },
  { num: 32, question: "32 What is the output of print(3 != 3)?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 33, question: "33 What keyword is used for inheritance?", options: ["class Child(Parent):", "inherits", "extends", "derive"], answer: "class Child(Parent):", attempted: false, selected: "" },
  { num: 34, question: "34 How to stop an infinite loop?", options: ["break", "exit", "stop", "halt"], answer: "break", attempted: false, selected: "" },
  { num: 35, question: "35 How to print without newline?", options: ["print('hello', end='')", "print.hello", "echo 'hello'", "print 'hello';"], answer: "print('hello', end='')", attempted: false, selected: "" },
  { num: 36, question: "36 What does continue do in a loop?", options: ["Skips to next iteration", "Breaks loop", "Exits function", "Starts loop again"], answer: "Skips to next iteration", attempted: false, selected: "" },
  { num: 37, question: "37 How do you create a comment that spans multiple lines?", options: ["''' comment '''", "# comment", "// comment", "-- comment"], answer: "''' comment '''", attempted: false, selected: "" },
  { num: 38, question: "38 Which operator is used for exponentiation?", options: ["**", "^", "%", "//"], answer: "**", attempted: false, selected: "" },
  { num: 39, question: "39 Which is a built-in function?", options: ["print()", "write()", "draw()", "paint()"], answer: "print()", attempted: false, selected: "" },
  { num: 40, question: "40 What will print(2 + 3 * 4) output?", options: ["14", "20", "24", "10"], answer: "14", attempted: false, selected: "" },
  { num: 41, question: "41 Which function returns the ASCII of a character?", options: ["ord()", "ascii()", "chr()", "char()"], answer: "ord()", attempted: false, selected: "" },
  { num: 42, question: "42 What is the output of print(True and False)?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 43, question: "43 Which function returns the smallest item?", options: ["min()", "small()", "least()", "tiny()"], answer: "min()", attempted: false, selected: "" },
  { num: 44, question: "44 Which loop is used to iterate a fixed number of times?", options: ["for", "while", "do", "foreach"], answer: "for", attempted: false, selected: "" },
  { num: 45, question: "45 What is indentation used for?", options: ["Block of code", "Comments", "Styling", "Spacing"], answer: "Block of code", attempted: false, selected: "" },
  { num: 46, question: "46 What does print(type(True)) return?", options: ["<class 'bool'>", "boolean", "int", "True"], answer: "<class 'bool'>", attempted: false, selected: "" },
  { num: 47, question: "47 How do you create a float variable?", options: ["x = 3.14", "float x = 3.14", "x := 3.14", "x = float"], answer: "x = 3.14", attempted: false, selected: "" },
  { num: 48, question: "48 What will print('5' * 2) output?", options: ["55", "10", "5", "Error"], answer: "55", attempted: false, selected: "" },
  { num: 49, question: "49 What does range(3) return?", options: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "1, 2"], answer: "0, 1, 2", attempted: false, selected: "" },
  { num: 50, question: "50 What is the correct syntax to open a file?", options: ["open('file.txt')", "file.open('file.txt')", "read('file.txt')", "load('file.txt')"], answer: "open('file.txt')", attempted: false, selected: "" }
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
