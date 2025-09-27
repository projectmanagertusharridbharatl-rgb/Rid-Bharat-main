  const questions = 
  [
  { num: 51, question: "51 What does `Object.assign()` do?", options: ["Copies properties", "Assigns prototype", "Deep copies", "Merges arrays"], answer: "Copies properties", attempted: false, selected: "" },
  { num: 52, question: "52 What is the `...` operator?", options: ["Spread/rest", "Exponentiation", "Increment", "Ternary"], answer: "Spread/rest", attempted: false, selected: "" },
  { num: 53, question: "53 What is `null == undefined`?", options: ["true", "false", "Error", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 54, question: "54 Which method reverses arrays?", options: ["reverse()", "sort()", "flip()", "rotate()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 55, question: "55 What is a pure function?", options: ["No parameters", "Modifies state", "Same output for same input", "Async function"], answer: "Same output for same input", attempted: false, selected: "" },
  { num: 56, question: "56 What is `typeof function(){}`?", options: ["function", "object", "method", "undefined"], answer: "function", attempted: false, selected: "" },
  { num: 57, question: "57 Which method slices arrays?", options: ["slice()", "splice()", "split()", "select()"], answer: "slice()", attempted: false, selected: "" },
  { num: 58, question: "58 What does `bind()` do?", options: ["Binds this value", "Binds functions", "Deep copies", "Merges objects"], answer: "Binds this value", attempted: false, selected: "" },
  { num: 59, question: "59 What is `1 + true`?", options: ["1", "2", "true", "Error"], answer: "2", attempted: false, selected: "" },
  { num: 60, question: "60 Which method loops arrays?", options: ["map()", "filter()", "forEach()", "reduce()"], answer: "forEach()", attempted: false, selected: "" },

  // Questions 61-70
  { num: 61, question: "61 What does `Array.some()` do?", options: ["Tests some elements", "Tests all elements", "Checks if empty", "Checks length"], answer: "Tests some elements", attempted: false, selected: "" },
  { num: 62, question: "62 What is the `void` operator?", options: ["Returns undefined", "Creates void", "Deletes variables", "Checks null"], answer: "Returns undefined", attempted: false, selected: "" },
  { num: 63, question: "63 What is `'hello' instanceof String`?", options: ["true", "false", "Error", "NaN"], answer: "false", attempted: false, selected: "" },
  { num: 64, question: "64 Which method modifies arrays?", options: ["slice()", "splice()", "split()", "shift()"], answer: "splice()", attempted: false, selected: "" },
  { num: 65, question: "65 What is memoization?", options: ["Caching results", "Memory allocation", "Garbage collection", "Function binding"], answer: "Caching results", attempted: false, selected: "" },
  { num: 66, question: "66 What is `typeof new Date()`?", options: ["date", "object", "string", "number"], answer: "object", attempted: false, selected: "" },
  { num: 67, question: "67 Which method stringifies arrays?", options: ["toString()", "join()", "stringify()", "valueOf()"], answer: "toString()", attempted: false, selected: "" },
  { num: 68, question: "68 What does `Object.freeze()` do?", options: ["Prevents changes", "Makes writable", "Creates copy", "Deletes properties"], answer: "Prevents changes", attempted: false, selected: "" },
  { num: 69, question: "69 What is `+'10'`?", options: ["10", "'10'", "NaN", "Error"], answer: "10", attempted: false, selected: "" },
  { num: 70, question: "70 Which method tests all elements?", options: ["some()", "every()", "filter()", "map()"], answer: "every()", attempted: false, selected: "" },

  // Questions 71-80
  { num: 71, question: "71 What is a generator function?", options: ["Number generator", "Pausable function", "Object creator", "Infinite loop"], answer: "Pausable function", attempted: false, selected: "" },
  { num: 72, question: "72 What does `yield` do?", options: ["Pauses generator", "Returns value", "Throws error", "Stops execution"], answer: "Pauses generator", attempted: false, selected: "" },
  { num: 73, question: "73 What is `typeof class C{}`?", options: ["class", "object", "function", "undefined"], answer: "function", attempted: false, selected: "" },
  { num: 74, question: "74 Which method deeply flattens?", options: ["flat()", "flatMap()", "concat()", "join()"], answer: "flat()", attempted: false, selected: "" },
  { num: 75, question: "75 What does `Object.seal()` do?", options: ["Prevents additions", "Allows changes", "Both", "Creates immutable"], answer: "Both", attempted: false, selected: "" },
  { num: 76, question: "76 What is `Boolean([])`?", options: ["true", "false", "Error", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 77, question: "77 Which method finds elements?", options: ["find()", "filter()", "search()", "get()"], answer: "find()", attempted: false, selected: "" },
  { num: 78, question: "78 What does `Array.fill()` do?", options: ["Fills with value", "Filters", "Creates new", "Replaces first"], answer: "Fills with value", attempted: false, selected: "" },
  { num: 79, question: "79 What is `typeof []`?", options: ["object", "array", "function", "null"], answer: "object", attempted: false, selected: "" },
  { num: 80, question: "80 Which method transforms arrays?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "map()", attempted: false, selected: "" },

  // Questions 81-90
  { num: 81, question: "81 What does `Object.create()` do?", options: ["Creates with prototype", "Copies object", "Merges objects", "Creates class"], answer: "Creates with prototype", attempted: false, selected: "" },
  { num: 82, question: "82 What checks `in` operator?", options: ["Property exists", "Value in array", "Defined variable", "Function exists"], answer: "Property exists", attempted: false, selected: "" },
  { num: 83, question: "83 What is `typeof Symbol()`?", options: ["symbol", "object", "function", "string"], answer: "symbol", attempted: false, selected: "" },
  { num: 84, question: "84 Which method gets key/value pairs?", options: ["entries()", "keys()", "values()", "items()"], answer: "entries()", attempted: false, selected: "" },
  { num: 85, question: "85 What is higher-order function?", options: ["Takes function", "Returns function", "Both", "High priority"], answer: "Both", attempted: false, selected: "" },
  { num: 86, question: "86 What is `typeof new Boolean(true)`?", options: ["boolean", "object", "string", "number"], answer: "object", attempted: false, selected: "" },
  { num: 87, question: "87 Which method gets property names?", options: ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"], answer: "Object.keys()", attempted: false, selected: "" },
  { num: 88, question: "88 What does `reduceRight()` do?", options: ["Reduces right-left", "Reverses array", "Reduces middle", "Filters end"], answer: "Reduces right-left", attempted: false, selected: "" },
  { num: 89, question: "89 What is `'2' * '3'`?", options: ["5", "6", "23", "NaN"], answer: "6", attempted: false, selected: "" },
  { num: 90, question: "90 Which method capitalizes strings?", options: ["capitalize()", "toUpper()", "No built-in", "firstUpper()"], answer: "No built-in", attempted: false, selected: "" },

  // Questions 91-100
  { num: 91, question: "91 What does `Object.defineProperty()` do?", options: ["Adds property", "Defines object", "Deletes property", "Copies property"], answer: "Adds property", attempted: false, selected: "" },
  { num: 92, question: "92 What does `delete` do?", options: ["Deletes object", "Removes property", "Deletes variable", "Clears array"], answer: "Removes property", attempted: false, selected: "" },
  { num: 93, question: "93 What is `typeof (() => {})`?", options: ["arrow", "function", "object", "undefined"], answer: "function", attempted: false, selected: "" },
  { num: 94, question: "94 Which method gets property values?", options: ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"], answer: "Object.values()", attempted: false, selected: "" },
  { num: 95, question: "95 What is currying?", options: ["Function sequence", "Curry functions", "Function binding", "Function composition"], answer: "Function sequence", attempted: false, selected: "" },
  { num: 96, question: "96 What is `typeof Math`?", options: ["math", "object", "function", "undefined"], answer: "object", attempted: false, selected: "" },
  { num: 97, question: "97 Which method gets keys?", options: ["entries()", "keys()", "values()", "items()"], answer: "keys()", attempted: false, selected: "" },
  { num: 98, question: "98 What does `Object.getPrototypeOf()` do?", options: ["Gets prototype", "Creates prototype", "Copies prototype", "Deletes prototype"], answer: "Gets prototype", attempted: false, selected: "" },
  { num: 99, question: "99 What is `typeof new Number(1)`?", options: ["number", "object", "string", "NaN"], answer: "object", attempted: false, selected: "" },
  { num: 100, question: "100 Which method combines flatMap() and flat(1)?", options: ["flatMap()", "mapFlat()", "flat()", "map()"], answer: "flatMap()", attempted: false, selected: "" }
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
