const questions = [
        { num: 51, question: "51 What is the output of console.log('hello' instanceof String)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 52, question: "52 What does 'Array.prototype.reduce()' do?", options: ["Reduces array length", "Executes a reducer function on each element", "Removes duplicates", "Sorts the array"], answer: "Executes a reducer function on each element", attempted: false, selected: "" },
  { num: 53, question: "53 What is the output of console.log(null == undefined)?", options: ["true", "false", "TypeError", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 54, question: "54 Which method checks if an object has a property?", options: ["has()", "hasOwnProperty()", "contains()", "exists()"], answer: "hasOwnProperty()", attempted: false, selected: "" },
  { num: 55, question: "55 What is the purpose of 'event.stopPropagation()'?", options: ["Prevents default behavior", "Stops event bubbling", "Removes the event", "Triggers another event"], answer: "Stops event bubbling", attempted: false, selected: "" },
  { num: 56, question: "56 What is the output of console.log(typeof function() {})?", options: ["function", "object", "undefined", "string"], answer: "function", attempted: false, selected: "" },
  { num: 57, question: "57 Which method creates a shallow copy of an object?", options: ["Object.assign()", "Object.copy()", "Object.clone()", "Object.create()"], answer: "Object.assign()", attempted: false, selected: "" },
  { num: 58, question: "58 What is the output of console.log(1 < 2 < 3)?", options: ["true", "false", "TypeError", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 59, question: "59 What does 'Array.prototype.some()' do?", options: ["Checks if some elements pass a test", "Returns some elements", "Modifies some elements", "Combines some elements"], answer: "Checks if some elements pass a test", attempted: false, selected: "" },
  { num: 60, question: "60 Which method returns the primitive value of an object?", options: ["valueOf()", "toString()", "toPrimitive()", "convert()"], answer: "valueOf()", attempted: false, selected: "" },
  { num: 61, question: "61 What is the output of console.log(+'10')?", options: ["10", "'10'", "NaN", "TypeError"], answer: "10", attempted: false, selected: "" },
  { num: 62, question: "62 What does 'Object.freeze()' do?", options: ["Makes an object immutable", "Deletes all properties", "Converts to JSON", "Makes properties writable"], answer: "Makes an object immutable", attempted: false, selected: "" },
  { num: 63, question: "63 What is the output of console.log('5' + 3)?", options: ["8", "53", "NaN", "TypeError"], answer: "53", attempted: false, selected: "" },
  { num: 64, question: "64 Which method returns the last index of a value in an array?", options: ["lastIndexOf()", "findLast()", "searchLast()", "getLast()"], answer: "lastIndexOf()", attempted: false, selected: "" },
  { num: 65, question: "65 What is the purpose of 'Array.prototype.every()'?", options: ["Checks if all elements pass a test", "Executes a function on every element", "Returns every other element", "Modifies every element"], answer: "Checks if all elements pass a test", attempted: false, selected: "" },
  { num: 66, question: "66 What is the output of console.log(!!{})?", options: ["true", "false", "undefined", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 67, question: "67 What does 'Object.seal()' do?", options: ["Prevents new properties but allows modifications", "Makes an object immutable", "Deletes all properties", "Converts to an array"], answer: "Prevents new properties but allows modifications", attempted: false, selected: "" },
  { num: 68, question: "68 What is the output of console.log(undefined === null)?", options: ["true", "false", "TypeError", "NaN"], answer: "false", attempted: false, selected: "" },
  { num: 69, question: "69 Which method returns a string representation of an array?", options: ["toString()", "join()", "stringify()", "toArray()"], answer: "toString()", attempted: false, selected: "" },
  { num: 70, question: "70 What is the purpose of 'Array.prototype.find()'?", options: ["Finds the first element that satisfies a condition", "Finds the index of an element", "Searches for a substring", "Returns all matching elements"], answer: "Finds the first element that satisfies a condition", attempted: false, selected: "" },
  { num: 71, question: "71 What is the output of console.log(0 == '0')?", options: ["true", "false", "TypeError", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 72, question: "72 What does 'Object.create()' do?", options: ["Creates a new object with a prototype", "Clones an object", "Merges objects", "Freezes an object"], answer: "Creates a new object with a prototype", attempted: false, selected: "" },
  { num: 73, question: "73 What is the output of console.log(typeof true)?", options: ["boolean", "string", "number", "object"], answer: "boolean", attempted: false, selected: "" },
  { num: 74, question: "74 Which method removes the first element from an array?", options: ["shift()", "pop()", "slice()", "splice()"], answer: "shift()", attempted: false, selected: "" },
  { num: 75, question: "75 What is the purpose of 'Array.prototype.forEach()'?", options: ["Iterates over array elements", "Returns a new array", "Filters elements", "Reduces the array"], answer: "Iterates over array elements", attempted: false, selected: "" },
  { num: 76, question: "76 What is the output of console.log('' == false)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 77, question: "77 What does 'Object.entries()' return?", options: ["An array of key-value pairs", "An array of keys", "An array of values", "An object"], answer: "An array of key-value pairs", attempted: false, selected: "" },
  { num: 78, question: "78 What is the output of console.log(1 + + '1')?", options: ["2", "11", "NaN", "TypeError"], answer: "2", attempted: false, selected: "" },
  { num: 79, question: "79 Which method checks if a string includes a substring?", options: ["contains()", "includes()", "has()", "indexOf()"], answer: "includes()", attempted: false, selected: "" },
  { num: 80, question: "80 What is the purpose of 'Array.prototype.concat()'?", options: ["Merges arrays", "Joins array elements", "Flattens arrays", "Splits arrays"], answer: "Merges arrays", attempted: false, selected: "" },
  { num: 81, question: "81 What is the output of console.log(!![])?", options: ["true", "false", "undefined", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 82, question: "82 What does 'Object.values()' return?", options: ["An array of values", "An array of keys", "An object", "A string"], answer: "An array of values", attempted: false, selected: "" },
  { num: 83, question: "83 What is the output of console.log('10' - 5)?", options: ["5", "'5'", "NaN", "TypeError"], answer: "5", attempted: false, selected: "" },
  { num: 84, question: "84 Which method checks if a variable is NaN?", options: ["isNaN()", "Number.isNaN()", "checkNaN()", "validateNaN()"], answer: "Number.isNaN()", attempted: false, selected: "" },
  { num: 85, question: "85 What is the purpose of 'Array.prototype.slice()'?", options: ["Modifies the original array", "Returns a shallow copy of a portion of an array", "Joins arrays", "Reverses the array"], answer: "Returns a shallow copy of a portion of an array", attempted: false, selected: "" },
  { num: 86, question: "86 What is the output of console.log(null === undefined)?", options: ["true", "false", "TypeError", "NaN"], answer: "false", attempted: false, selected: "" },
  { num: 87, question: "87 What does 'Object.getPrototypeOf()' do?", options: ["Gets the prototype of an object", "Sets the prototype", "Deletes the prototype", "Copies the prototype"], answer: "Gets the prototype of an object", attempted: false, selected: "" },
  { num: 88, question: "88 What is the output of console.log(1 - '1')?", options: ["0", "'0'", "NaN", "TypeError"], answer: "0", attempted: false, selected: "" },
  { num: 89, question: "89 Which method returns the characters at a specific index in a string?", options: ["charAt()", "getChar()", "at()", "index()"], answer: "charAt()", attempted: false, selected: "" },
  { num: 90, question: "90 What is the purpose of 'Array.prototype.splice()'?", options: ["Adds/removes elements from an array", "Joins arrays", "Reverses the array", "Creates a new array"], answer: "Adds/removes elements from an array", attempted: false, selected: "" },
  { num: 91, question: "91 What is the output of console.log(!!'')?", options: ["true", "false", "undefined", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 92, question: "92 What does 'Object.setPrototypeOf()' do?", options: ["Sets the prototype of an object", "Gets the prototype", "Deletes the prototype", "Copies the prototype"], answer: "Sets the prototype of an object", attempted: false, selected: "" },
  { num: 93, question: "93 What is the output of console.log('10' + 5)?", options: ["15", "'105'", "NaN", "TypeError"], answer: "'105'", attempted: false, selected: "" },
  { num: 94, question: "94 Which method converts a string to uppercase?", options: ["toUpperCase()", "toUpper()", "upperCase()", "convertUpper()"], answer: "toUpperCase()", attempted: false, selected: "" },
  { num: 95, question: "95 What is the purpose of 'Array.prototype.reduceRight()'?", options: ["Reduces from left to right", "Reduces from right to left", "Reverses the array", "Joins elements"], answer: "Reduces from right to left", attempted: false, selected: "" },
  { num: 96, question: "96 What is the output of console.log(!!null)?", options: ["true", "false", "undefined", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 97, question: "97 What does 'Object.is()' do?", options: ["Compares two values", "Creates an object", "Checks if an object exists", "Merges objects"], answer: "Compares two values", attempted: false, selected: "" },
  { num: 98, question: "98 What is the output of console.log(0 === '0')?", options: ["true", "false", "TypeError", "NaN"], answer: "false", attempted: false, selected: "" },
  { num: 99, question: "99 Which method splits a string into an array of substrings?", options: ["split()", "join()", "slice()", "divide()"], answer: "split()", attempted: false, selected: "" },
  { num: 100, question: "100 What is the output of console.log([] == ![])?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" }
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
