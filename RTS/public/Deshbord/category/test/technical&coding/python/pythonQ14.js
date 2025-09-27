const questions = [
  { num: 1, question: "1 What is the output of: print(type(10))?", options: ["<class 'int'>", "<type 'int'>", "int", "number"], answer: "<class 'int'>", attempted: false, selected: "" },
  { num: 2, question: "2 How do you insert a comment in Python code?", options: ["Using #", "Using //", "Using <!-- -->", "Using /* */"], answer: "Using #", attempted: false, selected: "" },
  { num: 3, question: "3 Which of the following is a valid variable name?", options: ["my_var", "2var", "var-2", "my var"], answer: "my_var", attempted: false, selected: "" },
  { num: 4, question: "4 How do you create a list in Python?", options: ["Using []", "Using ()", "Using {}", "Using <>"], answer: "Using []", attempted: false, selected: "" },
  { num: 5, question: "5 What will print(2 ** 3) output?", options: ["8", "6", "9", "5"], answer: "8", attempted: false, selected: "" },
  { num: 6, question: "6 How to get the length of a list named 'mylist'?", options: ["len(mylist)", "length(mylist)", "count(mylist)", "size(mylist)"], answer: "len(mylist)", attempted: false, selected: "" },
  { num: 7, question: "7 Which operator is used for floor division?", options: ["/", "//", "%", "**"], answer: "//", attempted: false, selected: "" },
  { num: 8, question: "8 How do you check if two variables a and b are equal?", options: ["a == b", "a = b", "a != b", "a equals b"], answer: "a == b", attempted: false, selected: "" },
  { num: 9, question: "9 What data type is returned by input() function?", options: ["String", "Integer", "Float", "Boolean"], answer: "String", attempted: false, selected: "" },
  { num: 10, question: "10 What is the output of: print(bool(0))?", options: ["False", "True", "0", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 11, question: "11 Which keyword is used to define a function?", options: ["def", "function", "fun", "define"], answer: "def", attempted: false, selected: "" },
  { num: 12, question: "12 How do you start an if statement?", options: ["if condition:", "if condition then", "if (condition)", "if condition"], answer: "if condition:", attempted: false, selected: "" },
  { num: 13, question: "13 Which of the following is a tuple?", options: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "<1, 2, 3>"], answer: "(1, 2, 3)", attempted: false, selected: "" },
  { num: 14, question: "14 How do you add an element to the end of a list?", options: ["append()", "add()", "insert()", "extend()"], answer: "append()", attempted: false, selected: "" },
  { num: 15, question: "15 What does the 'pass' statement do?", options: ["Does nothing", "Exits program", "Skips iteration", "Throws error"], answer: "Does nothing", attempted: false, selected: "" },
  { num: 16, question: "16 How do you create a dictionary?", options: ["Using {}", "Using []", "Using ()", "Using <>"], answer: "Using {}", attempted: false, selected: "" },
  { num: 17, question: "17 What does the expression '5 % 2' evaluate to?", options: ["1", "2", "0", "3"], answer: "1", attempted: false, selected: "" },
  { num: 18, question: "18 How to convert string '123' to integer?", options: ["int('123')", "str(123)", "float('123')", "convert('123')"], answer: "int('123')", attempted: false, selected: "" },
  { num: 19, question: "19 How do you start a while loop?", options: ["while condition:", "while (condition)", "while condition then", "while condition"], answer: "while condition:", attempted: false, selected: "" },
  { num: 20, question: "20 How do you check if an element exists in a list?", options: ["element in list", "element has list", "element exist list", "list contains element"], answer: "element in list", attempted: false, selected: "" },
  { num: 21, question: "21 What is the output of print('Hello' + 'World')?", options: ["HelloWorld", "Hello World", "Hello+World", "Error"], answer: "HelloWorld", attempted: false, selected: "" },
  { num: 22, question: "22 How do you create a set?", options: ["Using set()", "Using list()", "Using dict()", "Using tuple()"], answer: "Using set()", attempted: false, selected: "" },
  { num: 23, question: "23 What is the output of: print(type({}))?", options: ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "<class 'tuple'>"], answer: "<class 'dict'>", attempted: false, selected: "" },
  { num: 24, question: "24 How do you handle exceptions?", options: ["try-except", "if-else", "for-while", "switch-case"], answer: "try-except", attempted: false, selected: "" },
  { num: 25, question: "25 What does the 'break' statement do?", options: ["Exits loop", "Skips iteration", "Continues loop", "Throws error"], answer: "Exits loop", attempted: false, selected: "" },
  { num: 26, question: "26 What does the 'continue' statement do?", options: ["Skips current iteration", "Exits loop", "Ends program", "Starts loop"], answer: "Skips current iteration", attempted: false, selected: "" },
  { num: 27, question: "27 How do you write a for loop to iterate over a list?", options: ["for item in list:", "for i to list:", "for each item list:", "loop item in list:"], answer: "for item in list:", attempted: false, selected: "" },
  { num: 28, question: "28 Which function converts a number to string?", options: ["str()", "int()", "float()", "string()"], answer: "str()", attempted: false, selected: "" },
  { num: 29, question: "29 What is the output of: print(3 == 3.0)?", options: ["True", "False", "Error", "None"], answer: "True", attempted: false, selected: "" },
  { num: 30, question: "30 How do you import the math module?", options: ["import math", "include math", "require math", "using math"], answer: "import math", attempted: false, selected: "" },
  { num: 31, question: "31 Which of the following is immutable?", options: ["Tuple", "List", "Dictionary", "Set"], answer: "Tuple", attempted: false, selected: "" },
  { num: 32, question: "32 How do you create an empty list?", options: ["[]", "()", "{}", "set()"], answer: "[]", attempted: false, selected: "" },
  { num: 33, question: "33 What is the output of print(2 > 3)?", options: ["False", "True", "Error", "None"], answer: "False", attempted: false, selected: "" },
  { num: 34, question: "34 What is the output of: print('Python'[-1])?", options: ["n", "P", "o", "N"], answer: "n", attempted: false, selected: "" },
  { num: 35, question: "35 What does 'elif' stand for?", options: ["Else if", "Else", "If", "End if"], answer: "Else if", attempted: false, selected: "" },
  { num: 36, question: "36 How to define a class in Python?", options: ["class MyClass:", "def MyClass:", "new class MyClass:", "create class MyClass:"], answer: "class MyClass:", attempted: false, selected: "" },
  { num: 37, question: "37 How do you instantiate a class named Dog?", options: ["d = Dog()", "d = Dog", "d = new Dog()", "d = class Dog()"], answer: "d = Dog()", attempted: false, selected: "" },
  { num: 38, question: "38 What does 'del' keyword do?", options: ["Deletes object or variable", "Defines function", "Declares class", "Imports module"], answer: "Deletes object or variable", attempted: false, selected: "" },
  { num: 39, question: "39 Which keyword is used to inherit a class?", options: ["class Child(Parent):", "class Child inherits Parent:", "inherit Child Parent", "class Child extends Parent:"], answer: "class Child(Parent):", attempted: false, selected: "" },
  { num: 40, question: "40 How do you write a multiline string?", options: ['Using """ """', "Using ''' '''", "Both A and B", "Using //"], answer: "Both A and B", attempted: false, selected: "" },
  { num: 41, question: "41 What is the output of print(10 // 3)?", options: ["3", "3.33", "4", "None"], answer: "3", attempted: false, selected: "" },
  { num: 42, question: "42 How do you check the type of variable x?", options: ["type(x)", "typeof x", "checktype(x)", "varType(x)"], answer: "type(x)", attempted: false, selected: "" },
  { num: 43, question: "43 What is the result of 7 % 4?", options: ["3", "1", "4", "0"], answer: "3", attempted: false, selected: "" },
  { num: 44, question: "44 How do you convert string '3.14' to float?", options: ["float('3.14')", "int('3.14')", "str('3.14')", "convert('3.14')"], answer: "float('3.14')", attempted: false, selected: "" },
  { num: 45, question: "45 Which of these is a Boolean value?", options: ["True", "'True'", "1", "'False'"], answer: "True", attempted: false, selected: "" },
  { num: 46, question: "46 What is the output of print(list('abc'))?", options: ["['a', 'b', 'c']", "['abc']", "abc", "Error"], answer: "['a', 'b', 'c']", attempted: false, selected: "" },
  { num: 47, question: "47 How do you create an infinite loop?", options: ["while True:", "while 1==0:", "for i in range(0):", "for True in while:"], answer: "while True:", attempted: false, selected: "" },
  { num: 48, question: "48 Which function outputs to the console?", options: ["print()", "input()", "output()", "write()"], answer: "print()", attempted: false, selected: "" },
  { num: 49, question: "49 What does the 'is' operator check?", options: ["Object identity", "Value equality", "Type equality", "Reference value"], answer: "Object identity", attempted: false, selected: "" },
  { num: 50, question: "50 How do you concatenate strings 'a' and 'b'?", options: ["'a' + 'b'", "'a' & 'b'", "'a' . 'b'", "'a' and 'b'"], answer: "'a' + 'b'", attempted: false, selected: "" }
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
