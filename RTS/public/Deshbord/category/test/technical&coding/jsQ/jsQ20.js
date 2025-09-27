const questions = [
{ num: 1, question: "1 What does 'typeof null' return in JavaScript?", options: ["object", "null", "undefined", "string"], answer: "object", attempted: false, selected: "" },
  { num: 2, question: "2 Which method removes the last element from an array?", options: ["pop()", "shift()", "slice()", "splice()"], answer: "pop()", attempted: false, selected: "" },
  { num: 3, question: "3 What is the result of 3 + '3' in JavaScript?", options: ["6", "33", "NaN", "TypeError"], answer: "33", attempted: false, selected: "" },
  { num: 4, question: "4 Which keyword is used to declare a constant in JavaScript?", options: ["let", "var", "const", "define"], answer: "const", attempted: false, selected: "" },
  { num: 5, question: "5 What does 'NaN' stand for?", options: ["Not a Node", "Not a Number", "Null and None", "No assigned Number"], answer: "Not a Number", attempted: false, selected: "" },
  { num: 6, question: "6 How do you check if a variable is an array?", options: ["typeof variable", "variable.isArray()", "Array.isArray(variable)", "variable instanceof Array"], answer: "Array.isArray(variable)", attempted: false, selected: "" },
  { num: 7, question: "7 What is the output of console.log(0.1 + 0.2 === 0.3)?", options: ["true", "false", "NaN", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 8, question: "8 Which function is used to execute code after a delay?", options: ["setTimeout()", "setInterval()", "delay()", "wait()"], answer: "setTimeout()", attempted: false, selected: "" },
  { num: 9, question: "9 What does the 'this' keyword refer to in a global context?", options: ["The current function", "The DOM window object", "undefined", "null"], answer: "The DOM window object", attempted: false, selected: "" },
  { num: 10, question: "10 What is the output of console.log([] == ![])?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 11, question: "11 Which method joins array elements into a string?", options: ["concat()", "join()", "split()", "merge()"], answer: "join()", attempted: false, selected: "" },
  { num: 12, question: "12 What is the purpose of 'use strict' in JavaScript?", options: ["Enforces stricter type checking", "Enables modern syntax", "Prevents silent errors", "Optimizes performance"], answer: "Prevents silent errors", attempted: false, selected: "" },
  { num: 13, question: "13 What is the output of console.log(typeof undefined)?", options: ["undefined", "null", "object", "string"], answer: "undefined", attempted: false, selected: "" },
  { num: 14, question: "14 Which loop is best for iterating over object properties?", options: ["for loop", "while loop", "for...in loop", "do...while loop"], answer: "for...in loop", attempted: false, selected: "" },
  { num: 15, question: "15 What does 'JSON.parse()' do?", options: ["Converts JSON to a string", "Parses JSON into a JavaScript object", "Validates JSON", "Encodes JSON"], answer: "Parses JSON into a JavaScript object", attempted: false, selected: "" },
  { num: 16, question: "16 What is the output of console.log(1 == '1')?", options: ["true", "false", "TypeError", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 17, question: "17 Which method adds elements to the beginning of an array?", options: ["push()", "unshift()", "shift()", "prepend()"], answer: "unshift()", attempted: false, selected: "" },
  { num: 18, question: "18 What is a closure in JavaScript?", options: ["A function bundled with its lexical scope", "A way to close a program", "A type of loop", "A built-in method"], answer: "A function bundled with its lexical scope", attempted: false, selected: "" },
  { num: 19, question: "19 What does 'let' provide that 'var' does not?", options: ["Global scope", "Hoisting", "Block scope", "Reassignment"], answer: "Block scope", attempted: false, selected: "" },
  { num: 20, question: "20 What is the output of console.log(2 + '2' - 1)?", options: ["21", "3", "23", "NaN"], answer: "21", attempted: false, selected: "" },
  { num: 21, question: "21 Which method removes whitespace from both ends of a string?", options: ["trim()", "strip()", "clean()", "removeSpace()"], answer: "trim()", attempted: false, selected: "" },
  { num: 22, question: "22 What is the purpose of 'event.preventDefault()'?", options: ["Stops event propagation", "Prevents default browser behavior", "Removes an event listener", "Triggers an event manually"], answer: "Prevents default browser behavior", attempted: false, selected: "" },
  { num: 23, question: "23 What is the output of console.log([] + [])?", options: ["[]", "[object Object]", "'' (empty string)", "undefined"], answer: "'' (empty string)", attempted: false, selected: "" },
  { num: 24, question: "24 Which operator returns the remainder of a division?", options: ["%", "/", "*", "**"], answer: "%", attempted: false, selected: "" },
  { num: 25, question: "25 What does 'isNaN()' check for?", options: ["If a value is not a number", "If a value is null", "If a value is undefined", "If a value is zero"], answer: "If a value is not a number", attempted: false, selected: "" },
  { num: 26, question: "26 What is the output of console.log(typeof [])?", options: ["array", "object", "undefined", "null"], answer: "object", attempted: false, selected: "" },
  { num: 27, question: "27 Which method creates a new array with filtered elements?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "filter()", attempted: false, selected: "" },
  { num: 28, question: "28 What is the output of console.log('5' - 3)?", options: ["2", "8", "NaN", "TypeError"], answer: "2", attempted: false, selected: "" },
  { num: 29, question: "29 What does 'localStorage' do?", options: ["Stores data temporarily", "Stores data persistently in the browser", "Clears cookies", "Manages server storage"], answer: "Stores data persistently in the browser", attempted: false, selected: "" },
  { num: 30, question: "30 Which method converts a string to lowercase?", options: ["toLowerCase()", "toLower()", "lowerCase()", "convertLower()"], answer: "toLowerCase()", attempted: false, selected: "" },
  { num: 31, question: "31 What is the output of console.log(!!'false')?", options: ["true", "false", "undefined", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 32, question: "32 What does 'Array.prototype.map()' return?", options: ["A new array", "The original array", "A single value", "undefined"], answer: "A new array", attempted: false, selected: "" },
  { num: 33, question: "33 What is the output of console.log(1 === '1')?", options: ["true", "false", "TypeError", "NaN"], answer: "false", attempted: false, selected: "" },
  { num: 34, question: "34 Which method reverses an array in place?", options: ["reverse()", "sort()", "rotate()", "flip()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 35, question: "35 What is the purpose of 'bind()' in JavaScript?", options: ["To bind events", "To create a new function with a fixed 'this'", "To concatenate strings", "To merge objects"], answer: "To create a new function with a fixed 'this'", attempted: false, selected: "" },
  { num: 36, question: "36 What is the output of console.log(typeof NaN)?", options: ["number", "NaN", "undefined", "string"], answer: "number", attempted: false, selected: "" },
  { num: 37, question: "37 Which method checks if an array includes a value?", options: ["contains()", "includes()", "has()", "indexOf()"], answer: "includes()", attempted: false, selected: "" },
  { num: 38, question: "38 What is the output of console.log('b' + 'a' + + 'a' + 'a')?", options: ["baaa", "baNaNa", "baa", "TypeError"], answer: "baNaNa", attempted: false, selected: "" },
  { num: 39, question: "39 What does 'async/await' do?", options: ["Makes code synchronous", "Simplifies asynchronous code", "Replaces callbacks", "Optimizes loops"], answer: "Simplifies asynchronous code", attempted: false, selected: "" },
  { num: 40, question: "40 Which method returns the first index of a value in an array?", options: ["find()", "indexOf()", "search()", "locate()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 41, question: "41 What is the output of console.log(!!0)?", options: ["true", "false", "0", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 42, question: "42 What does 'Object.keys()' return?", options: ["An array of keys", "An array of values", "An object", "A string"], answer: "An array of keys", attempted: false, selected: "" },
  { num: 43, question: "43 What is the output of console.log(10 == '10')?", options: ["true", "false", "TypeError", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 44, question: "44 Which method executes a function after repeated intervals?", options: ["setTimeout()", "setInterval()", "delay()", "repeat()"], answer: "setInterval()", attempted: false, selected: "" },
  { num: 45, question: "45 What is the purpose of 'JSON.stringify()'?", options: ["Converts an object to JSON string", "Parses JSON", "Validates JSON", "Compresses JSON"], answer: "Converts an object to JSON string", attempted: false, selected: "" },
  { num: 46, question: "46 What is the output of console.log([] == false)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 47, question: "47 Which method flattens nested arrays?", options: ["flat()", "flatten()", "join()", "concat()"], answer: "flat()", attempted: false, selected: "" },
  { num: 48, question: "48 What is the output of console.log(3 > 2 > 1)?", options: ["true", "false", "TypeError", "NaN"], answer: "false", attempted: false, selected: "" },
  { num: 49, question: "49 What does 'Promise.resolve()' do?", options: ["Rejects a promise", "Creates a resolved promise", "Pauses execution", "Checks promise state"], answer: "Creates a resolved promise", attempted: false, selected: "" },
  { num: 50, question: "50 Which method converts a string to an integer?", options: ["parseInt()", "toInteger()", "convertToInt()", "Number()"], answer: "parseInt()", attempted: false, selected: "" },
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
