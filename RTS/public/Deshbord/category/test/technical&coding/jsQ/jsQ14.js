const questions = [
        { num: 1, question: "1 Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 2, question: "2 What is the result of typeof null in JavaScript?", options: ["object", "null", "undefined", "string"], answer: "object", attempted: false, selected: "" },
  { num: 3, question: "3 Which method adds one or more elements to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()", attempted: false, selected: "" },
  { num: 4, question: "4 What does the '===' operator check for?", options: ["Value equality", "Type equality", "Both value and type equality", "Neither value nor type equality"], answer: "Both value and type equality", attempted: false, selected: "" },
  { num: 5, question: "5 Which function is used to parse a string to an integer?", options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"], answer: "parseInt()", attempted: false, selected: "" },
  { num: 6, question: "6 What is the output of console.log(1 + '1')?", options: ["2", "11", "NaN", "undefined"], answer: "11", attempted: false, selected: "" },
  { num: 7, question: "7 Which method removes the last element from an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "pop()", attempted: false, selected: "" },
  { num: 8, question: "8 What does the 'this' keyword refer to in JavaScript?", options: ["The current function", "The global object", "The object that owns the current code", "It depends on the context"], answer: "It depends on the context", attempted: false, selected: "" },
  { num: 9, question: "9 Which statement is used to skip the current iteration of a loop?", options: ["break", "continue", "skip", "return"], answer: "continue", attempted: false, selected: "" },
  { num: 10, question: "10 What is the purpose of the 'use strict' directive?", options: ["To enforce stricter type checking", "To enable modern JavaScript features", "To enforce stricter parsing and error handling", "To optimize code performance"], answer: "To enforce stricter parsing and error handling", attempted: false, selected: "" },
  { num: 11, question: "11 Which method joins all elements of an array into a string?", options: ["join()", "concat()", "toString()", "combine()"], answer: "join()", attempted: false, selected: "" },
  { num: 12, question: "12 What is the output of console.log(typeof [])?", options: ["array", "object", "list", "undefined"], answer: "object", attempted: false, selected: "" },
  { num: 13, question: "13 Which operator returns the remainder of a division?", options: ["%", "/", "*", "//"], answer: "%", attempted: false, selected: "" },
  { num: 14, question: "14 What does NaN stand for?", options: ["Not a Node", "Not a Number", "No available Number", "Null and None"], answer: "Not a Number", attempted: false, selected: "" },
  { num: 15, question: "15 Which method creates a new array with filtered elements?", options: ["filter()", "map()", "reduce()", "forEach()"], answer: "filter()", attempted: false, selected: "" },
  { num: 16, question: "16 What is the default return value of a function that doesn't specify one?", options: ["null", "0", "undefined", "false"], answer: "undefined", attempted: false, selected: "" },
  { num: 17, question: "17 Which statement immediately terminates a loop?", options: ["break", "continue", "exit", "return"], answer: "break", attempted: false, selected: "" },
  { num: 18, question: "18 What is the scope of a variable declared with 'let'?", options: ["Global", "Function", "Block", "Module"], answer: "Block", attempted: false, selected: "" },
  { num: 19, question: "19 Which method converts a string to lowercase?", options: ["toLower()", "lowerCase()", "toLowerCase()", "convertLower()"], answer: "toLowerCase()", attempted: false, selected: "" },
  { num: 20, question: "20 What does the '&&' operator return if the first operand is false?", options: ["The first operand", "The second operand", "true", "false"], answer: "The first operand", attempted: false, selected: "" },
  { num: 21, question: "21 Which method creates a new array with transformed elements?", options: ["filter()", "map()", "reduce()", "forEach()"], answer: "map()", attempted: false, selected: "" },
  { num: 22, question: "22 What is the output of console.log(!!'false')?", options: ["false", "true", "undefined", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 23, question: "23 Which method checks if an array includes a certain value?", options: ["contains()", "includes()", "has()", "find()"], answer: "includes()", attempted: false, selected: "" },
  { num: 24, question: "24 What is the purpose of the 'finally' block in try-catch?", options: ["To handle errors", "To run code regardless of try/catch outcome", "To skip error handling", "To return a value"], answer: "To run code regardless of try/catch outcome", attempted: false, selected: "" },
  { num: 25, question: "25 Which symbol is used for template literals?", options: ["''", "\"\"", "``", "[]"], answer: "``", attempted: false, selected: "" },
  { num: 26, question: "26 What is the output of console.log(0.1 + 0.2 === 0.3)?", options: ["true", "false", "undefined", "NaN"], answer: "false", attempted: false, selected: "" },
  { num: 27, question: "27 Which method removes the first element from an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "shift()", attempted: false, selected: "" },
  { num: 28, question: "28 What is the purpose of the 'bind()' method?", options: ["To create a new function with a specific 'this' value", "To concatenate strings", "To bind events to elements", "To create a copy of an object"], answer: "To create a new function with a specific 'this' value", attempted: false, selected: "" },
  { num: 29, question: "29 Which operator is used for exponentiation?", options: ["^", "**", "*^", "^^"], answer: "**", attempted: false, selected: "" },
  { num: 30, question: "30 What is the output of console.log([] == ![])?", options: ["true", "false", "undefined", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 31, question: "31 Which method returns the first element that satisfies a condition?", options: ["find()", "filter()", "search()", "first()"], answer: "find()", attempted: false, selected: "" },
  { num: 32, question: "32 What is the output of console.log('5' - 3)?", options: ["2", "8", "53", "NaN"], answer: "2", attempted: false, selected: "" },
  { num: 33, question: "33 Which method adds one or more elements to the beginning of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "unshift()", attempted: false, selected: "" },
  { num: 34, question: "34 What is the purpose of the 'async' keyword?", options: ["To define a synchronous function", "To define an asynchronous function", "To pause execution", "To create a promise"], answer: "To define an asynchronous function", attempted: false, selected: "" },
  { num: 35, question: "35 Which method converts an object to a JSON string?", options: ["stringify()", "parse()", "toJSON()", "toString()"], answer: "stringify()", attempted: false, selected: "" },
  { num: 36, question: "36 What is the output of console.log(typeof function() {})?", options: ["function", "object", "undefined", "method"], answer: "function", attempted: false, selected: "" },
  { num: 37, question: "37 Which method creates a new array with all sub-array elements concatenated?", options: ["concat()", "flat()", "join()", "merge()"], answer: "flat()", attempted: false, selected: "" },
  { num: 38, question: "38 What is the purpose of the 'await' keyword?", options: ["To wait for a promise to resolve", "To create a delay", "To throw an error", "To pause all execution"], answer: "To wait for a promise to resolve", attempted: false, selected: "" },
  { num: 39, question: "39 Which method returns a string representation of an array?", options: ["toString()", "join()", "stringify()", "toArray()"], answer: "toString()", attempted: false, selected: "" },
  { num: 40, question: "40 What is the output of console.log(1 == '1')?", options: ["true", "false", "undefined", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 41, question: "41 Which method executes a reducer function on each array element?", options: ["filter()", "map()", "reduce()", "forEach()"], answer: "reduce()", attempted: false, selected: "" },
  { num: 42, question: "42 What is the output of console.log([] + [])?", options: ["[]", "[][]", "\"\"", "0"], answer: "\"\"", attempted: false, selected: "" },
  { num: 43, question: "43 Which method returns the index of the first matching element?", options: ["findIndex()", "indexOf()", "search()", "locate()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 44, question: "44 What is the purpose of the 'new' keyword?", options: ["To create a new variable", "To create a new instance of an object", "To declare a new function", "To update an existing object"], answer: "To create a new instance of an object", attempted: false, selected: "" },
  { num: 45, question: "45 Which method creates a shallow copy of an array?", options: ["copy()", "clone()", "slice()", "duplicate()"], answer: "slice()", attempted: false, selected: "" },
  { num: 46, question: "46 What is the output of console.log(typeof NaN)?", options: ["number", "NaN", "undefined", "string"], answer: "number", attempted: false, selected: "" },
  { num: 47, question: "47 Which method checks if an object has a specific property?", options: ["has()", "contains()", "hasOwnProperty()", "exists()"], answer: "hasOwnProperty()", attempted: false, selected: "" },
  { num: 48, question: "48 What is the purpose of the 'arguments' object?", options: ["To access all arguments passed to a function", "To create arguments", "To store function results", "To pass arguments to other functions"], answer: "To access all arguments passed to a function", attempted: false, selected: "" },
  { num: 49, question: "49 Which method converts a JSON string to an object?", options: ["stringify()", "parse()", "toObject()", "fromJSON()"], answer: "parse()", attempted: false, selected: "" },
  { num: 50, question: "50 What is the output of console.log(!!0)?", options: ["true", "false", "0", "1"], answer: "false", attempted: false, selected: "" },
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
