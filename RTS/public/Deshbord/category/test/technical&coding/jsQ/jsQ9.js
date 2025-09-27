const questions = [
  { num: 51, question: "51 What is the purpose of `Object.assign()`?", options: ["Copies properties from source to target object", "Assigns new prototype", "Creates deep copy", "Merges arrays"], answer: "Copies properties from source to target object", attempted: false, selected: "" },
  { num: 52, question: "52 What does the `...` operator do in JavaScript?", options: ["Spread/rest operator", "Exponentiation", "Increment", "Ternary operation"], answer: "Spread/rest operator", attempted: false, selected: "" },
  { num: 53, question: "53 What will `null == undefined` return?", options: ["true", "false", "Error", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 54, question: "54 Which method reverses an array in place?", options: ["reverse()", "sort()", "flip()", "rotate()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 55, question: "55 What is a pure function?", options: ["Function with no parameters", "Function that modifies external state", "Function that always returns same output for same input", "Async function"], answer: "Function that always returns same output for same input", attempted: false, selected: "" },
  { num: 56, question: "56 What will `typeof function(){}` return?", options: ["function", "object", "method", "undefined"], answer: "function", attempted: false, selected: "" },
  { num: 57, question: "57 Which method returns selected elements from array as new array?", options: ["slice()", "splice()", "split()", "select()"], answer: "slice()", attempted: false, selected: "" },
  { num: 58, question: "58 What is the purpose of `bind()` method?", options: ["Creates new function with bound this value", "Binds two functions together", "Creates deep copy", "Merges objects"], answer: "Creates new function with bound this value", attempted: false, selected: "" },
  { num: 59, question: "59 What will `1 + true` return?", options: ["1", "2", "true", "Error"], answer: "2", attempted: false, selected: "" },
  { num: 60, question: "60 Which method executes function for each array element?", options: ["map()", "filter()", "forEach()", "reduce()"], answer: "forEach()", attempted: false, selected: "" },

  { num: 61, question: "61 What is the purpose of `Array.prototype.some()`?", options: ["Tests if at least one element passes test", "Tests if all elements pass test", "Tests if array is empty", "Tests array length"], answer: "Tests if at least one element passes test", attempted: false, selected: "" },
  { num: 62, question: "62 What does the `void` operator do?", options: ["Evaluates expression and returns undefined", "Creates void variable", "Deletes variable", "Checks for null"], answer: "Evaluates expression and returns undefined", attempted: false, selected: "" },
  { num: 63, question: "63 What will `'hello' instanceof String` return?", options: ["true", "false", "Error", "NaN"], answer: "false", attempted: false, selected: "" },
  { num: 64, question: "64 Which method removes/adds elements to array?", options: ["slice()", "splice()", "split()", "shift()"], answer: "splice()", attempted: false, selected: "" },
  { num: 65, question: "65 What is memoization?", options: ["Optimization technique storing results of expensive calls", "Memory allocation", "Garbage collection", "Function binding"], answer: "Optimization technique storing results of expensive calls", attempted: false, selected: "" },
  { num: 66, question: "66 What will `typeof new Date()` return?", options: ["date", "object", "string", "number"], answer: "object", attempted: false, selected: "" },
  { num: 67, question: "67 Which method returns string representation of array?", options: ["toString()", "join()", "stringify()", "valueOf()"], answer: "toString()", attempted: false, selected: "" },
  { num: 68, question: "68 What is the purpose of `Object.freeze()`?", options: ["Prevents new properties being added to object", "Makes object writeable", "Creates copy of object", "Deletes object properties"], answer: "Prevents new properties being added to object", attempted: false, selected: "" },
  { num: 69, question: "69 What will `+'10'` return?", options: ["10", "'10'", "NaN", "Error"], answer: "10", attempted: false, selected: "" },
  { num: 70, question: "70 Which method tests if all elements pass test?", options: ["some()", "every()", "filter()", "map()"], answer: "every()", attempted: false, selected: "" },

  { num: 71, question: "71 What is a generator function?", options: ["Function that generates numbers", "Function that can be exited and re-entered", "Function that creates objects", "Function that runs forever"], answer: "Function that can be exited and re-entered", attempted: false, selected: "" },
  { num: 72, question: "72 What does the `yield` keyword do?", options: ["Pauses generator function", "Returns value from function", "Throws error", "Stops execution"], answer: "Pauses generator function", attempted: false, selected: "" },
  { num: 73, question: "73 What will `typeof class C{}` return?", options: ["class", "object", "function", "undefined"], answer: "function", attempted: false, selected: "" },
  { num: 74, question: "74 Which method creates new array with all sub-arrays concatenated recursively?", options: ["flat()", "flatMap()", "concat()", "join()"], answer: "flat()", attempted: false, selected: "" },
  { num: 75, question: "75 What is the purpose of `Object.seal()`?", options: ["Prevents adding new properties", "Allows changing existing properties", "Both prevents adding and allows changing", "Creates immutable object"], answer: "Both prevents adding and allows changing", attempted: false, selected: "" },
  { num: 76, question: "76 What will `Boolean([])` return?", options: ["true", "false", "Error", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 77, question: "77 Which method returns first element that satisfies test?", options: ["find()", "filter()", "search()", "get()"], answer: "find()", attempted: false, selected: "" },
  { num: 78, question: "78 What is the purpose of `Array.prototype.fill()`?", options: ["Fills all elements with static value", "Filters array", "Creates new array", "Replaces first element"], answer: "Fills all elements with static value", attempted: false, selected: "" },
  { num: 79, question: "79 What will `typeof []` return?", options: ["object", "array", "function", "null"], answer: "object", attempted: false, selected: "" },
  { num: 80, question: "80 Which method creates new array with results of calling function on every element?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "map()", attempted: false, selected: "" },

  { num: 81, question: "81 What is the purpose of `Object.create()`?", options: ["Creates new object with specified prototype", "Copies object", "Merges objects", "Creates class"], answer: "Creates new object with specified prototype", attempted: false, selected: "" },
  { num: 82, question: "82 What does the `in` operator check?", options: ["If property exists in object", "If value exists in array", "If variable is defined", "If function exists"], answer: "If property exists in object", attempted: false, selected: "" },
  { num: 83, question: "83 What will `typeof Symbol()` return?", options: ["symbol", "object", "function", "string"], answer: "symbol", attempted: false, selected: "" },
  { num: 84, question: "84 Which method returns array iterator with key/value pairs?", options: ["entries()", "keys()", "values()", "items()"], answer: "entries()", attempted: false, selected: "" },
  { num: 85, question: "85 What is a higher-order function?", options: ["Function that takes another function as argument", "Function that returns a function", "Both takes and returns functions", "Function with higher priority"], answer: "Both takes and returns functions", attempted: false, selected: "" },
  { num: 86, question: "86 What will `typeof new Boolean(true)` return?", options: ["boolean", "object", "string", "number"], answer: "object", attempted: false, selected: "" },
  { num: 87, question: "87 Which method returns array of object's own property names?", options: ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"], answer: "Object.keys()", attempted: false, selected: "" },
  { num: 88, question: "88 What is the purpose of `Array.prototype.reduceRight()`?", options: ["Reduces array right to left", "Reverses array", "Reduces from middle", "Filters from end"], answer: "Reduces array right to left", attempted: false, selected: "" },
  { num: 89, question: "89 What will `'2' * '3'` return?", options: ["5", "6", "23", "NaN"], answer: "6", attempted: false, selected: "" },
  { num: 90, question: "90 Which method returns string with first letter capitalized?", options: ["capitalize()", "toUpper()", "No built-in method", "firstUpper()"], answer: "No built-in method", attempted: false, selected: "" },

  { num: 91, question: "91 What is the purpose of `Object.defineProperty()`?", options: ["Adds property to object with descriptor", "Defines new object", "Deletes property", "Copies property"], answer: "Adds property to object with descriptor", attempted: false, selected: "" },
  { num: 92, question: "92 What does the `delete` operator do?", options: ["Deletes object", "Removes property from object", "Deletes variable", "Clears array"], answer: "Removes property from object", attempted: false, selected: "" },
  { num: 93, question: "93 What will `typeof (() => {})` return?", options: ["arrow", "function", "object", "undefined"], answer: "function", attempted: false, selected: "" },
  { num: 94, question: "94 Which method returns array of object's own property values?", options: ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"], answer: "Object.values()", attempted: false, selected: "" },
  { num: 95, question: "95 What is currying in JavaScript?", options: ["Converting function with multiple args into sequence of functions", "Creating curry functions", "Function binding", "Function composition"], answer: "Converting function with multiple args into sequence of functions", attempted: false, selected: "" },
  { num: 96, question: "96 What will `typeof Math` return?", options: ["math", "object", "function", "undefined"], answer: "object", attempted: false, selected: "" },
  { num: 97, question: "97 Which method returns array iterator with keys?", options: ["entries()", "keys()", "values()", "items()"], answer: "keys()", attempted: false, selected: "" },
  { num: 98, question: "98 What is the purpose of `Object.getPrototypeOf()`?", options: ["Gets prototype of object", "Creates prototype", "Copies prototype", "Deletes prototype"], answer: "Gets prototype of object", attempted: false, selected: "" },
  { num: 99, question: "99 What will `typeof new Number(1)` return?", options: ["number", "object", "string", "NaN"], answer: "object", attempted: false, selected: "" },
  { num: 100, question: "100 Which method creates new array with flatMap() then flat(1)?", options: ["flatMap()", "mapFlat()", "flat()", "map()"], answer: "flatMap()", attempted: false, selected: "" }

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
