const questions = [
        
  { num: 1, question: "1 What will `typeof null` return?", options: ["object", "null", "undefined", "number"], answer: "object", attempted: false, selected: "" },
  { num: 2, question: "2 Which method adds one or more elements to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()", attempted: false, selected: "" },
  { num: 3, question: "3 What does the `===` operator check?", options: ["Value only", "Value and type", "Type only", "Neither value nor type"], answer: "Value and type", attempted: false, selected: "" },
  { num: 4, question: "4 What will `'5' + 3` return in JavaScript?", options: ["8", "53", "Error", "NaN"], answer: "53", attempted: false, selected: "" },
  { num: 5, question: "5 Which keyword is used to declare a variable in modern JavaScript?", options: ["var", "let", "const", "Both let and const"], answer: "Both let and const", attempted: false, selected: "" },
  { num: 6, question: "6 What is the purpose of the `this` keyword in JavaScript?", options: ["Refers to the current function", "Refers to the parent function", "Refers to the global object", "Refers to the object it belongs to"], answer: "Refers to the object it belongs to", attempted: false, selected: "" },
  { num: 7, question: "7 What does the `Array.prototype.map()` method do?", options: ["Modifies the original array", "Creates a new array with results of calling a function on every element", "Filters the array based on a condition", "Reduces the array to a single value"], answer: "Creates a new array with results of calling a function on every element", attempted: false, selected: "" },
  { num: 8, question: "8 What will `0.1 + 0.2 === 0.3` return?", options: ["true", "false", "Error", "NaN"], answer: "false", attempted: false, selected: "" },
  { num: 9, question: "9 Which of these is NOT a JavaScript framework?", options: ["React", "Angular", "Vue", "Django"], answer: "Django", attempted: false, selected: "" },
  { num: 10, question: "10 What does the `typeof` operator return for a function?", options: ["function", "object", "method", "undefined"], answer: "function", attempted: false, selected: "" },
  
  { num: 11, question: "11 What is hoisting in JavaScript?", options: ["Moving variables to bottom of scope", "Moving functions to bottom of scope", "Variable/function declarations moved to top of scope", "A type of loop"], answer: "Variable/function declarations moved to top of scope", attempted: false, selected: "" },
  { num: 12, question: "12 What does `NaN` stand for?", options: ["Not a Node", "Not a Number", "No applicable Number", "Null and None"], answer: "Not a Number", attempted: false, selected: "" },
  { num: 13, question: "13 Which method converts JSON string to an object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"], answer: "JSON.parse()", attempted: false, selected: "" },
  { num: 14, question: "14 What will `[] == ![]` return?", options: ["true", "false", "Error", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 15, question: "15 What is the scope of a variable declared with `let`?", options: ["Global", "Function", "Block", "Module"], answer: "Block", attempted: false, selected: "" },
  { num: 16, question: "16 Which method removes the last element from an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "pop()", attempted: false, selected: "" },
  { num: 17, question: "17 What does the `setTimeout()` function do?", options: ["Pauses execution", "Executes code after delay", "Sets time interval", "Stops execution"], answer: "Executes code after delay", attempted: false, selected: "" },
  { num: 18, question: "18 What is a closure in JavaScript?", options: ["A function with access to its own scope, outer function's scope, and global scope", "A way to close variables", "A method to end functions", "A type of loop"], answer: "A function with access to its own scope, outer function's scope, and global scope", attempted: false, selected: "" },
  { num: 19, question: "19 What will `'hello'.length` return?", options: ["4", "5", "6", "Error"], answer: "5", attempted: false, selected: "" },
  { num: 20, question: "20 Which operator returns the remainder of a division?", options: ["/", "%", "*", "//"], answer: "%", attempted: false, selected: "" },

  { num: 21, question: "21 What does `'use strict'` do?", options: ["Enables strict mode", "Disables strict mode", "Is a comment", "Enforces type checking"], answer: "Enables strict mode", attempted: false, selected: "" },
  { num: 22, question: "22 What is the purpose of `Array.prototype.reduce()`?", options: ["To filter array elements", "To execute reducer function on each element resulting in single output", "To map array elements", "To reverse array"], answer: "To execute reducer function on each element resulting in single output", attempted: false, selected: "" },
  { num: 23, question: "23 What will `typeof NaN` return?", options: ["number", "NaN", "undefined", "object"], answer: "number", attempted: false, selected: "" },
  { num: 24, question: "24 Which method joins array elements into a string?", options: ["join()", "concat()", "split()", "merge()"], answer: "join()", attempted: false, selected: "" },
  { num: 25, question: "25 What does the `new` keyword do?", options: ["Creates new variable", "Creates new object instance", "Declares new function", "Imports new module"], answer: "Creates new object instance", attempted: false, selected: "" },
  { num: 26, question: "26 What will `2 + '2'` return?", options: ["4", "22", "NaN", "Error"], answer: "22", attempted: false, selected: "" },
  { num: 27, question: "27 Which method returns the first index of an element in an array?", options: ["find()", "indexOf()", "search()", "locate()"], answer: "indexOf()", attempted: false, selected: "" },
  { num: 28, question: "28 What is an IIFE?", options: ["Immediately Invoked Function Expression", "Inline Iterated Function Element", "Internal Integrated Function Event", "Immediate Iterative Function Execution"], answer: "Immediately Invoked Function Expression", attempted: false, selected: "" },
  { num: 29, question: "29 What will `Boolean('false')` return?", options: ["true", "false", "Error", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 30, question: "30 Which method creates a new array with all sub-array elements concatenated?", options: ["concat()", "flat()", "join()", "merge()"], answer: "flat()", attempted: false, selected: "" },

  { num: 31, question: "31 What does the `async` keyword do?", options: ["Makes function synchronous", "Makes function return a promise", "Prevents function execution", "Creates callback"], answer: "Makes function return a promise", attempted: false, selected: "" },
  { num: 32, question: "32 What is the purpose of `Promise.all()`?", options: ["Waits for all promises to resolve", "Waits for first promise to resolve", "Rejects all promises", "Creates new promises"], answer: "Waits for all promises to resolve", attempted: false, selected: "" },
  { num: 33, question: "33 What will `'b' + 'a' + + 'a' + 'a'` return?", options: ["baaa", "baNaNa", "banana", "Error"], answer: "baNaNa", attempted: false, selected: "" },
  { num: 34, question: "34 Which method creates a new array with elements that pass a test?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "filter()", attempted: false, selected: "" },
  { num: 35, question: "35 What is the purpose of the `finally` block in try/catch?", options: ["Executes after try/catch regardless of outcome", "Executes only on success", "Executes only on error", "Prevents execution"], answer: "Executes after try/catch regardless of outcome", attempted: false, selected: "" },
  { num: 36, question: "36 What will `Math.max()` return with no arguments?", options: ["0", "undefined", "-Infinity", "NaN"], answer: "-Infinity", attempted: false, selected: "" },
  { num: 37, question: "37 Which method converts object to JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toJson()", "JSON.encode()"], answer: "JSON.stringify()", attempted: false, selected: "" },
  { num: 38, question: "38 What is event bubbling in JavaScript?", options: ["Events propagate from child to parent", "Events propagate from parent to child", "Multiple events fire simultaneously", "Events cancel each other"], answer: "Events propagate from child to parent", attempted: false, selected: "" },
  { num: 39, question: "39 What will `!!null` return?", options: ["true", "false", "null", "Error"], answer: "false", attempted: false, selected: "" },
  { num: 40, question: "40 Which method removes first element from an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "shift()", attempted: false, selected: "" },

  { num: 41, question: "41 What is a callback function?", options: ["Function passed as argument to another function", "Function that calls itself", "Function that returns another function", "Function with no parameters"], answer: "Function passed as argument to another function", attempted: false, selected: "" },
  { num: 42, question: "42 What does the `await` keyword do?", options: ["Pauses async function execution until promise settles", "Creates new promise", "Throws error", "Executes synchronously"], answer: "Pauses async function execution until promise settles", attempted: false, selected: "" },
  { num: 43, question: "43 What will `[] + []` return?", options: ["[]", "[[]]", "''", "Error"], answer: "''", attempted: false, selected: "" },
  { num: 44, question: "44 Which method checks if array includes a value?", options: ["contains()", "has()", "includes()", "find()"], answer: "includes()", attempted: false, selected: "" },
  { num: 45, question: "45 What is the purpose of `Object.keys()`?", options: ["Returns array of object's keys", "Returns array of object's values", "Locks object properties", "Creates new keys"], answer: "Returns array of object's keys", attempted: false, selected: "" },
  { num: 46, question: "46 What will `typeof undefined` return?", options: ["undefined", "null", "object", "string"], answer: "undefined", attempted: false, selected: "" },
  { num: 47, question: "47 Which method adds elements to beginning of array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "unshift()", attempted: false, selected: "" },
  { num: 48, question: "48 What is the purpose of `localStorage`?", options: ["Store data permanently in browser", "Store data for session only", "Store data on server", "Store temporary variables"], answer: "Store data permanently in browser", attempted: false, selected: "" },
  { num: 49, question: "49 What will `'5' - 3` return?", options: ["2", "53", "Error", "NaN"], answer: "2", attempted: false, selected: "" },
  { num: 50, question: "50 Which method creates new array from array-like object?", options: ["Array.from()", "Array.new()", "Array.create()", "Array.of()"], answer: "Array.from()", attempted: false, selected: "" },

  

// Export the array if using modules
// export default javascriptQuestions;
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
