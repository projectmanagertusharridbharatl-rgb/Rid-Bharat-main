const questions = [
    { "num": 1, "question": "1 Which keyword is used to declare variables in JavaScript?", "options": ["var", "let", "const", "All of the above"], "answer": "All of the above", "attempted": false, "selected": "" },
  { "num": 2, "question": "2 What is the result of typeof null in JavaScript?", "options": ["null", "object", "undefined", "string"], "answer": "object", "attempted": false, "selected": "" },
  { "num": 3, "question": "3 Which method adds one or more elements to the end of an array?", "options": ["push()", "pop()", "shift()", "unshift()"], "answer": "push()", "attempted": false, "selected": "" },
  { "num": 4, "question": "4 What does === operator check?", "options": ["Only value equality", "Only type equality", "Both value and type equality", "Neither value nor type equality"], "answer": "Both value and type equality", "attempted": false, "selected": "" },
  { "num": 5, "question": "5 Which function is used to parse a string to an integer?", "options": ["parseInt()", "parseFloat()", "Number()", "toInteger()"], "answer": "parseInt()", "attempted": false, "selected": "" },
  { "num": 6, "question": "6 What is the output of console.log(1 + '1')?", "options": ["2", "11", "NaN", "undefined"], "answer": "11", "attempted": false, "selected": "" },
  { "num": 7, "question": "7 Which method creates a new array with all sub-array elements concatenated?", "options": ["concat()", "flat()", "join()", "merge()"], "answer": "flat()", "attempted": false, "selected": "" },
  { "num": 8, "question": "8 What does the 'this' keyword refer to in JavaScript?", "options": ["The current function", "The global object", "The object that owns the executing code", "Always refers to window object"], "answer": "The object that owns the executing code", "attempted": false, "selected": "" },
  { "num": 9, "question": "9 Which method is used to remove the last element from an array?", "options": ["push()", "pop()", "shift()", "unshift()"], "answer": "pop()", "attempted": false, "selected": "" },
  { "num": 10, "question": "10 What is the purpose of the 'use strict' directive?", "options": ["To enforce stricter type checking", "To enable ES6 features", "To enforce stricter parsing and error handling", "To disable all warnings"], "answer": "To enforce stricter parsing and error handling", "attempted": false, "selected": "" },
  { "num": 11, "question": "11 Which symbol is used for template literals in JavaScript?", "options": ["$", "#", "`", "~"], "answer": "`", "attempted": false, "selected": "" },
  { "num": 12, "question": "12 What is the output of console.log(typeof [])?", "options": ["array", "object", "undefined", "null"], "answer": "object", "attempted": false, "selected": "" },
  { "num": 13, "question": "13 Which method converts a JavaScript object to a JSON string?", "options": ["JSON.parse()", "JSON.stringify()", "toJSON()", "toString()"], "answer": "JSON.stringify()", "attempted": false, "selected": "" },
  { "num": 14, "question": "14 What does the 'NaN' value represent?", "options": ["Not a Node", "Not a Number", "Null and None", "No available Number"], "answer": "Not a Number", "attempted": false, "selected": "" },
  { "num": 15, "question": "15 Which operator is used for exponentiation in JavaScript?", "options": ["^", "**", "*", "^^"], "answer": "**", "attempted": false, "selected": "" },
  { "num": 16, "question": "16 What is the purpose of the 'finally' block in a try-catch statement?", "options": ["To handle errors", "To try code that might fail", "To execute code regardless of try/catch result", "To skip error handling"], "answer": "To execute code regardless of try/catch result", "attempted": false, "selected": "" },
  { "num": 17, "question": "17 Which method returns the first index at which a given element can be found in an array?", "options": ["find()", "indexOf()", "search()", "locate()"], "answer": "indexOf()", "attempted": false, "selected": "" },
  { "num": 18, "question": "18 What is the output of console.log(0.1 + 0.2 === 0.3)?", "options": ["true", "false", "undefined", "NaN"], "answer": "false", "attempted": false, "selected": "" },
  { "num": 19, "question": "19 Which method creates a new array with the results of calling a function on every element?", "options": ["forEach()", "map()", "filter()", "reduce()"], "answer": "map()", "attempted": false, "selected": "" },
  { "num": 20, "question": "20 What is hoisting in JavaScript?", "options": ["Moving variables to the top of their scope", "Creating a new scope", "Deleting unused variables", "Converting variables to constants"], "answer": "Moving variables to the top of their scope", "attempted": false, "selected": "" },
  { "num": 21, "question": "21 Which method returns a string representation of an array?", "options": ["toString()", "join()", "stringify()", "toText()"], "answer": "toString()", "attempted": false, "selected": "" },
  { "num": 22, "question": "22 What is the purpose of the 'bind()' method?", "options": ["To create a new function", "To bind two objects together", "To set the 'this' value for a function", "To prevent a function from being called"], "answer": "To set the 'this' value for a function", "attempted": false, "selected": "" },
  { "num": 23, "question": "23 Which operator returns true if a property is in an object?", "options": ["contains", "has", "in", "exists"], "answer": "in", "attempted": false, "selected": "" },
  { "num": 24, "question": "24 What is the output of console.log([] == ![])?", "options": ["true", "false", "undefined", "Error"], "answer": "true", "attempted": false, "selected": "" },
  { "num": 25, "question": "25 Which method creates a new array with elements that pass a test?", "options": ["forEach()", "map()", "filter()", "reduce()"], "answer": "filter()", "attempted": false, "selected": "" },
  { "num": 26, "question": "26 What is a closure in JavaScript?", "options": ["A function inside another function", "A function with access to its outer function's scope", "A way to close a program", "A method to hide variables"], "answer": "A function with access to its outer function's scope", "attempted": false, "selected": "" },
  { "num": 27, "question": "27 Which method executes a reducer function on each element of an array?", "options": ["forEach()", "map()", "filter()", "reduce()"], "answer": "reduce()", "attempted": false, "selected": "" },
  { "num": 28, "question": "28 What is the purpose of the 'async' keyword?", "options": ["To make a function synchronous", "To declare an asynchronous function", "To pause function execution", "To create a promise"], "answer": "To declare an asynchronous function", "attempted": false, "selected": "" },
  { "num": 29, "question": "29 Which method returns the primitive value of an object?", "options": ["value()", "primitive()", "valueOf()", "toValue()"], "answer": "valueOf()", "attempted": false, "selected": "" },
  { "num": 30, "question": "30 What is the output of console.log(3 > 2 > 1)?", "options": ["true", "false", "undefined", "Error"], "answer": "false", "attempted": false, "selected": "" },
  { "num": 31, "question": "31 Which method creates a new array with all elements that pass the test?", "options": ["find()", "filter()", "some()", "every()"], "answer": "filter()", "attempted": false, "selected": "" },
  { "num": 32, "question": "32 What is the purpose of the 'Symbol' data type?", "options": ["To create unique identifiers", "To represent currency values", "To store binary data", "To create special numbers"], "answer": "To create unique identifiers", "attempted": false, "selected": "" },
  { "num": 33, "question": "33 Which method checks if at least one element passes a test?", "options": ["find()", "filter()", "some()", "every()"], "answer": "some()", "attempted": false, "selected": "" },
  { "num": 34, "question": "34 What is the output of console.log('5' - 3)?", "options": ["2", "8", "53", "NaN"], "answer": "2", "attempted": false, "selected": "" },
  { "num": 35, "question": "35 Which method returns the first element that passes a test?", "options": ["find()", "filter()", "some()", "every()"], "answer": "find()", "attempted": false, "selected": "" },
  { "num": 36, "question": "36 What is the purpose of the 'await' keyword?", "options": ["To wait for a promise to resolve", "To create a new promise", "To pause all JavaScript execution", "To throw an error"], "answer": "To wait for a promise to resolve", "attempted": false, "selected": "" },
  { "num": 37, "question": "37 Which method checks if all elements pass a test?", "options": ["find()", "filter()", "some()", "every()"], "answer": "every()", "attempted": false, "selected": "" },
  { "num": 38, "question": "38 What is the output of console.log([] + [])?", "options": ["[]", "[][]", "''", "undefined"], "answer": "''", "attempted": false, "selected": "" },
  { "num": 39, "question": "39 Which method returns a new array with subarrays concatenated?", "options": ["concat()", "flat()", "join()", "merge()"], "answer": "flat()", "attempted": false, "selected": "" },
  { "num": 40, "question": "40 What is a pure function in JavaScript?", "options": ["A function with no parameters", "A function that doesn't use 'this'", "A function that always returns the same output for the same inputs", "A function that modifies external state"], "answer": "A function that always returns the same output for the same inputs", "attempted": false, "selected": "" },
  { "num": 41, "question": "41 Which method returns a portion of an array?", "options": ["slice()", "splice()", "split()", "cut()"], "answer": "slice()", "attempted": false, "selected": "" },
  { "num": 42, "question": "42 What is the purpose of the 'new' keyword?", "options": ["To create a new variable", "To create a new object instance", "To declare a new function", "To update an existing object"], "answer": "To create a new object instance", "attempted": false, "selected": "" },
  { "num": 43, "question": "43 Which method changes the contents of an array?", "options": ["slice()", "splice()", "split()", "cut()"], "answer": "splice()", "attempted": false, "selected": "" },
  { "num": 44, "question": "44 What is the output of console.log(typeof function() {})?", "options": ["function", "object", "undefined", "method"], "answer": "function", "attempted": false, "selected": "" },
  { "num": 45, "question": "45 Which method returns the keys of an object?", "options": ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"], "answer": "Object.keys()", "attempted": false, "selected": "" },
  { "num": 46, "question": "46 What is the purpose of the 'yield' keyword?", "options": ["To pause generator function execution", "To return from a function", "To throw an error", "To create a promise"], "answer": "To pause generator function execution", "attempted": false, "selected": "" },
  { "num": 47, "question": "47 Which method returns the values of an object?", "options": ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"], "answer": "Object.values()", "attempted": false, "selected": "" },
  { "num": 48, "question": "48 What is the output of console.log(!!'false')?", "options": ["false", "true", "undefined", "Error"], "answer": "true", "attempted": false, "selected": "" },
  { "num": 49, "question": "49 Which method returns key-value pairs of an object?", "options": ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"], "answer": "Object.entries()", "attempted": false, "selected": "" },
  { "num": 50, "question": "50 What is the purpose of the 'super' keyword?", "options": ["To call parent class methods", "To create a super variable", "To reference the global object", "To make a function asynchronous"], "answer": "To call parent class methods", "attempted": false, "selected": "" },   
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
