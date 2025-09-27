const questions = [
     { num: 1, question: "1 What is the output of console.log(typeof null)?", options: ["object", "null", "undefined", "string"], answer: "object", attempted: false, selected: "" },
  { num: 2, question: "2 Which method adds new elements to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()", attempted: false, selected: "" },
  { num: 3, question: "3 What does the 'this' keyword refer to in JavaScript?", options: ["The current function", "The global object", "The object that owns the executing code", "The parent object"], answer: "The object that owns the executing code", attempted: false, selected: "" },
  { num: 4, question: "4 What is the output of console.log(1 + '1')?", options: ["2", "11", "NaN", "undefined"], answer: "11", attempted: false, selected: "" },
  { num: 5, question: "5 Which symbol is used for strict equality comparison?", options: ["==", "===", "=", "!=="], answer: "===", attempted: false, selected: "" },
  { num: 6, question: "6 What is the purpose of the 'use strict' directive?", options: ["To enforce stricter type checking", "To enable modern JavaScript features", "To enforce better coding practices", "To prevent the use of global variables"], answer: "To enforce better coding practices", attempted: false, selected: "" },
  { num: 7, question: "7 Which function is used to parse a string to an integer?", options: ["parseInt()", "parseFloat()", "Number()", "toInteger()"], answer: "parseInt()", attempted: false, selected: "" },
  { num: 8, question: "8 What is the output of console.log(0.1 + 0.2 === 0.3)?", options: ["true", "false", "NaN", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 9, question: "9 Which keyword is used to declare a block-scoped variable?", options: ["var", "let", "const", "both let and const"], answer: "both let and const", attempted: false, selected: "" },
  { num: 10, question: "10 What is the output of console.log([] + [])?", options: ["[]", "[object Object]", "''", "undefined"], answer: "''", attempted: false, selected: "" },
  { num: 11, question: "11 Which method creates a new array with all sub-array elements concatenated?", options: ["concat()", "join()", "flat()", "merge()"], answer: "flat()", attempted: false, selected: "" },
  { num: 12, question: "12 What is the purpose of the 'finally' block in try-catch?", options: ["To handle errors", "To run code regardless of try/catch outcome", "To define custom errors", "To stop execution"], answer: "To run code regardless of try/catch outcome", attempted: false, selected: "" },
  { num: 13, question: "13 What is the output of console.log(typeof NaN)?", options: ["number", "NaN", "undefined", "string"], answer: "number", attempted: false, selected: "" },
  { num: 14, question: "14 Which operator has the highest precedence?", options: ["&&", "||", ",", "()"], answer: "()", attempted: false, selected: "" },
  { num: 15, question: "15 What is the output of console.log('5' - 3)?", options: ["2", "8", "53", "NaN"], answer: "2", attempted: false, selected: "" },
  { num: 16, question: "16 Which method is used to remove the last element from an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "pop()", attempted: false, selected: "" },
  { num: 17, question: "17 What is the purpose of the 'bind()' method?", options: ["To create a new function", "To copy an object", "To set the 'this' value", "To merge objects"], answer: "To set the 'this' value", attempted: false, selected: "" },
  { num: 18, question: "18 What is the output of console.log(!!'false')?", options: ["true", "false", "undefined", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 19, question: "19 Which symbol is used for the spread operator?", options: ["...", "::", "=>", "**"], answer: "...", attempted: false, selected: "" },
  { num: 20, question: "20 What is the output of console.log(3 > 2 > 1)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 21, question: "21 Which method returns the first index at which an element can be found?", options: ["find()", "indexOf()", "search()", "locate()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 22, question: "22 What is the purpose of the 'async' keyword?", options: ["To define a generator function", "To define an asynchronous function", "To pause function execution", "To create promises"], answer: "To define an asynchronous function", attempted: false, selected: "" },
  { num: 23, question: "23 What is the output of console.log([] == 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 24, question: "24 Which method converts a JSON string to an object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.convert()"], answer: "JSON.parse()", attempted: false, selected: "" },
  { num: 25, question: "25 What is the output of console.log(typeof function() {})?", options: ["function", "object", "undefined", "string"], answer: "function", attempted: false, selected: "" },
  { num: 26, question: "26 Which method creates a new array with filtered elements?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "filter()", attempted: false, selected: "" },
  { num: 27, question: "27 What is the purpose of the 'yield' keyword?", options: ["To pause generator function execution", "To return from a function", "To throw an error", "To create a promise"], answer: "To pause generator function execution", attempted: false, selected: "" },
  { num: 28, question: "28 What is the output of console.log('b' + 'a' + + 'a' + 'a')?", options: ["baaa", "baNaNa", "baaNa", "baNaN"], answer: "baNaNa", attempted: false, selected: "" },
  { num: 29, question: "29 Which property gives the length of an array?", options: [".size", ".count", ".length", ".items"], answer: ".length", attempted: false, selected: "" },
  { num: 30, question: "30 What is the output of console.log(typeof undefined)?", options: ["object", "null", "undefined", "string"], answer: "undefined", attempted: false, selected: "" },
  { num: 31, question: "31 Which method executes a reducer function on each array element?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "reduce()", attempted: false, selected: "" },
  { num: 32, question: "32 What is the purpose of the 'Symbol' data type?", options: ["To create unique identifiers", "To create private methods", "To create iterators", "To create constants"], answer: "To create unique identifiers", attempted: false, selected: "" },
  { num: 33, question: "33 What is the output of console.log(1 == '1')?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 34, question: "34 Which method creates a new array with transformed elements?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "map()", attempted: false, selected: "" },
  { num: 35, question: "35 What is the output of console.log([] === [])?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 36, question: "36 Which method removes the first element from an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "shift()", attempted: false, selected: "" },
  { num: 37, question: "37 What is the purpose of the 'await' keyword?", options: ["To pause async function execution", "To create a promise", "To handle errors", "To define a generator"], answer: "To pause async function execution", attempted: false, selected: "" },
  { num: 38, question: "38 What is the output of console.log(typeof [])?", options: ["array", "object", "undefined", "string"], answer: "object", attempted: false, selected: "" },
  { num: 39, question: "39 Which method adds elements to the beginning of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "unshift()", attempted: false, selected: "" },
  { num: 40, question: "40 What is the output of console.log('5' + 3)?", options: ["8", "53", "2", "NaN"], answer: "53", attempted: false, selected: "" },
  { num: 41, question: "41 Which method returns a string representation of an array?", options: ["toString()", "join()", "stringify()", "valueOf()"], answer: "toString()", attempted: false, selected: "" },
  { num: 42, question: "42 What is the purpose of the 'new' keyword?", options: ["To create a new object", "To define a class", "To create an instance", "Both to create an instance and object"], answer: "Both to create an instance and object", attempted: false, selected: "" },
  { num: 43, question: "43 What is the output of console.log(!!null)?", options: ["true", "false", "null", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 44, question: "44 Which method checks if an array includes a certain value?", options: ["contains()", "includes()", "has()", "find()"], answer: "includes()", attempted: false, selected: "" },
  { num: 45, question: "45 What is the output of console.log(1 === '1')?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 46, question: "46 Which method creates a new array with a portion of an existing array?", options: ["slice()", "splice()", "split()", "cut()"], answer: "slice()", attempted: false, selected: "" },
  { num: 47, question: "47 What is the purpose of the 'super' keyword?", options: ["To call parent class methods", "To create super variables", "To access global objects", "To define super classes"], answer: "To call parent class methods", attempted: false, selected: "" },
  { num: 48, question: "48 What is the output of console.log(!!undefined)?", options: ["true", "false", "undefined", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 49, question: "49 Which method modifies an array by adding/removing elements?", options: ["slice()", "splice()", "split()", "modify()"], answer: "splice()", attempted: false, selected: "" },
  { num: 50, question: "50 What is the output of console.log(typeof true)?", options: ["boolean", "object", "string", "number"], answer: "boolean", attempted: false, selected: "" },
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
