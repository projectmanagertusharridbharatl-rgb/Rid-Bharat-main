const questions = [
        
  
  { num: 1, question: "1 What does `typeof null` return?", options: ["object", "null", "undefined", "number"], answer: "object", attempted: false, selected: "" },
  { num: 2, question: "2 Which method adds elements to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()", attempted: false, selected: "" },
  { num: 3, question: "3 What does `===` operator check?", options: ["Value only", "Value and type", "Type only", "Neither"], answer: "Value and type", attempted: false, selected: "" },
  { num: 4, question: "4 What is the result of `'5' + 3`?", options: ["8", "53", "Error", "NaN"], answer: "53", attempted: false, selected: "" },
  { num: 5, question: "5 Which keyword declares a block-scoped variable?", options: ["var", "let", "const", "both let and const"], answer: "both let and const", attempted: false, selected: "" },
  { num: 6, question: "6 What does `this` refer to in a method?", options: ["The function itself", "Global object", "The owner object", "undefined"], answer: "The owner object", attempted: false, selected: "" },
  { num: 7, question: "7 What does `Array.prototype.map()` do?", options: ["Modifies original array", "Creates new array", "Filters elements", "Reduces to single value"], answer: "Creates new array", attempted: false, selected: "" },
  { num: 8, question: "8 What is `0.1 + 0.2` in JavaScript?", options: ["0.3", "0.30000000000000004", "NaN", "Error"], answer: "0.30000000000000004", attempted: false, selected: "" },
  { num: 9, question: "9 Which is NOT a JavaScript framework?", options: ["React", "Angular", "Vue", "Django"], answer: "Django", attempted: false, selected: "" },
  { num: 10, question: "10 What does `typeof function(){}` return?", options: ["function", "object", "undefined", "string"], answer: "function", attempted: false, selected: "" },
  
  { num: 11, question: "11 What is hoisting in JavaScript?", options: ["Moving declarations to bottom", "Variable lifting", "Declaration moving to top", "A type of loop"], answer: "Declaration moving to top", attempted: false, selected: "" },
  { num: 12, question: "12 What does `NaN` stand for?", options: ["Not a Node", "Not a Number", "No applicable Number", "Null and None"], answer: "Not a Number", attempted: false, selected: "" },
  { num: 13, question: "13 Which method parses JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"], answer: "JSON.parse()", attempted: false, selected: "" },
  { num: 14, question: "14 What is the result of `[] == ![]`?", options: ["true", "false", "Error", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 15, question: "15 What is the scope of `let` variables?", options: ["Global", "Function", "Block", "Module"], answer: "Block", attempted: false, selected: "" },
  { num: 16, question: "16 Which method removes the last array element?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "pop()", attempted: false, selected: "" },
  { num: 17, question: "17 What does `setTimeout()` do?", options: ["Pauses execution", "Executes code after delay", "Sets interval", "Stops execution"], answer: "Executes code after delay", attempted: false, selected: "" },
  { num: 18, question: "18 What is a closure?", options: ["Function with access to outer scope", "A way to close variables", "Ending function", "Type of loop"], answer: "Function with access to outer scope", attempted: false, selected: "" },
  { num: 19, question: "19 What is `'hello'.length`?", options: ["4", "5", "6", "Error"], answer: "5", attempted: false, selected: "" },
  { num: 20, question: "20 Which operator gives division remainder?", options: ["/", "%", "*", "//"], answer: "%", attempted: false, selected: "" },

  { num: 21, question: "21 What does `'use strict'` do?", options: ["Enables strict mode", "Disables features", "Is a comment", "Enforces types"], answer: "Enables strict mode", attempted: false, selected: "" },
  { num: 22, question: "22 What does `Array.reduce()` do?", options: ["Filters array", "Reduces to single value", "Maps values", "Reverses array"], answer: "Reduces to single value", attempted: false, selected: "" },
  { num: 23, question: "23 What is `typeof NaN`?", options: ["number", "NaN", "undefined", "object"], answer: "number", attempted: false, selected: "" },
  { num: 24, question: "24 Which method joins array into string?", options: ["join()", "concat()", "split()", "merge()"], answer: "join()", attempted: false, selected: "" },
  { num: 25, question: "25 What does `new` keyword do?", options: ["Creates variable", "Creates object instance", "Declares function", "Imports module"], answer: "Creates object instance", attempted: false, selected: "" },
  { num: 26, question: "26 What is `2 + '2'`?", options: ["4", "22", "NaN", "Error"], answer: "22", attempted: false, selected: "" },
  { num: 27, question: "27 Which method finds element index?", options: ["find()", "indexOf()", "search()", "locate()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 28, question: "28 What is an IIFE?", options: ["Immediately Invoked Function", "Inline Function", "Internal Function", "Iterative Function"], answer: "Immediately Invoked Function", attempted: false, selected: "" },
  { num: 29, question: "29 What is `Boolean('false')`?", options: ["true", "false", "Error", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 30, question: "30 Which method flattens nested arrays?", options: ["concat()", "flat()", "join()", "merge()"], answer: "flat()", attempted: false, selected: "" },

  // Questions 31-40
  { num: 31, question: "31 What does `async` do?", options: ["Makes function sync", "Returns promise", "Prevents execution", "Creates callback"], answer: "Returns promise", attempted: false, selected: "" },
  { num: 32, question: "32 What does `Promise.all()` do?", options: ["Waits for all promises", "First promise only", "Rejects all", "Creates promises"], answer: "Waits for all promises", attempted: false, selected: "" },
  { num: 33, question: "33 What is `'b' + 'a' + + 'a' + 'a'`?", options: ["baaa", "baNaNa", "banana", "Error"], answer: "baNaNa", attempted: false, selected: "" },
  { num: 34, question: "34 Which method filters arrays?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "filter()", attempted: false, selected: "" },
  { num: 35, question: "35 What does `finally` do in try/catch?", options: ["Always executes", "On success only", "On error only", "Never executes"], answer: "Always executes", attempted: false, selected: "" },
  { num: 36, question: "36 What is `Math.max()` with no args?", options: ["0", "undefined", "-Infinity", "NaN"], answer: "-Infinity", attempted: false, selected: "" },
  { num: 37, question: "37 Which method stringifies objects?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toJson()", "JSON.encode()"], answer: "JSON.stringify()", attempted: false, selected: "" },
  { num: 38, question: "38 What is event bubbling?", options: ["Child to parent", "Parent to child", "Multiple events", "Event canceling"], answer: "Child to parent", attempted: false, selected: "" },
  { num: 39, question: "39 What is `!!null`?", options: ["true", "false", "null", "Error"], answer: "false", attempted: false, selected: "" },
  { num: 40, question: "40 Which method removes first array element?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "shift()", attempted: false, selected: "" },

  // Questions 41-50
  { num: 41, question: "41 What is a callback?", options: ["Function as argument", "Self-calling function", "Returning function", "No-param function"], answer: "Function as argument", attempted: false, selected: "" },
  { num: 42, question: "42 What does `await` do?", options: ["Pauses async function", "Creates promise", "Throws error", "Runs sync"], answer: "Pauses async function", attempted: false, selected: "" },
  { num: 43, question: "43 What is `[] + []`?", options: ["[]", "[[]]", "''", "Error"], answer: "''", attempted: false, selected: "" },
  { num: 44, question: "44 Which method checks array inclusion?", options: ["contains()", "has()", "includes()", "find()"], answer: "includes()", attempted: false, selected: "" },
  { num: 45, question: "45 What does `Object.keys()` do?", options: ["Returns keys array", "Returns values", "Locks object", "Creates keys"], answer: "Returns keys array", attempted: false, selected: "" },
  { num: 46, question: "46 What is `typeof undefined`?", options: ["undefined", "null", "object", "string"], answer: "undefined", attempted: false, selected: "" },
  { num: 47, question: "47 Which method adds to array start?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "unshift()", attempted: false, selected: "" },
  { num: 48, question: "48 What is `localStorage` for?", options: ["Permanent storage", "Session storage", "Server storage", "Temp variables"], answer: "Permanent storage", attempted: false, selected: "" },
  { num: 49, question: "49 What is `'5' - 3`?", options: ["2", "53", "Error", "NaN"], answer: "2", attempted: false, selected: "" },
  { num: 50, question: "50 Which method creates array from array-like?", options: ["Array.from()", "Array.new()", "Array.create()", "Array.of()"], answer: "Array.from()", attempted: false, selected: "" },

  // Questions 51-100 continue in the same pattern...
  // ...
   { num: 100, question: "100 Which method combines flatMap() and flat(1)?", options: ["flatMap()", "mapFlat()", "flat()", "map()"], answer: "flatMap()", attempted: false, selected: "" }
];

// Export the array if using modules
// export default javascriptQuestions;


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
