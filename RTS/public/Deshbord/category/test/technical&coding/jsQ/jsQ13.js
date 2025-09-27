const questions = [
        
  { num: 51, question: "51 Which method returns the primitive value of an object?", options: ["valueOf()", "toString()", "toPrimitive()", "convert()"], answer: "valueOf()", attempted: false, selected: "" },
  { num: 52, question: "52 What is the output of `console.log('b' + 'a' + + 'a' + 'a')`?", options: ["baaa", "baNaNa", "baNaN", "baaNa"], answer: "baNaNa", attempted: false, selected: "" },
  { num: 53, question: "53 Which method creates an array from an array-like object?", options: ["Array.from()", "Array.of()", "Array.create()", "Array.new()"], answer: "Array.from()", attempted: false, selected: "" },
  { num: 54, question: "54 What is the output of `console.log(3 > 2 > 1)`?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 55, question: "55 Which method returns a new array with elements from start to end (not including end)?", options: ["slice()", "splice()", "split()", "subarray()"], answer: "slice()", attempted: false, selected: "" },
  { num: 56, question: "56 What is the purpose of the `Symbol` data type?", options: ["To create unique identifiers", "To represent currency values", "To define private methods", "To optimize performance"], answer: "To create unique identifiers", attempted: false, selected: "" },
  { num: 57, question: "57 What does `Object.seal()` do?", options: ["Prevents new properties from being added", "Makes properties non-writable", "Freezes the object completely", "Allows property deletion but not addition"], answer: "Prevents new properties from being added", attempted: false, selected: "" },
  { num: 58, question: "58 What is the output of `console.log(typeof (() => {}))`?", options: ["function", "object", "arrow", "undefined"], answer: "function", attempted: false, selected: "" },
  { num: 59, question: "59 Which method is used to merge two or more arrays?", options: ["merge()", "concat()", "combine()", "join()"], answer: "concat()", attempted: false, selected: "" },
  { num: 60, question: "60 What is the output of `console.log(!!' ')`?", options: ["true", "false", "undefined", "TypeError"], answer: "true", attempted: false, selected: "" },

  { num: 61, question: "61 Which method returns the keys of an object as an array?", options: ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"], answer: "Object.keys()", attempted: false, selected: "" },
  { num: 62, question: "62 What is the output of `console.log(10 == '10')`?", options: ["true", "false", "TypeError", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 63, question: "63 Which method prevents modifications to an object?", options: ["Object.freeze()", "Object.seal()", "Object.lock()", "Object.immutable()"], answer: "Object.freeze()", attempted: false, selected: "" },
  { num: 64, question: "64 What is the output of `console.log([] == 0)`?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 65, question: "65 Which method schedules a function to run after a delay?", options: ["setTimeout()", "setInterval()", "delay()", "queueMicrotask()"], answer: "setTimeout()", attempted: false, selected: "" },
  { num: 66, question: "66 What is the output of `console.log('Hello' instanceof String)`?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 67, question: "67 Which method removes whitespace from both ends of a string?", options: ["trim()", "strip()", "clean()", "normalize()"], answer: "trim()", attempted: false, selected: "" },
  { num: 68, question: "68 What is the output of `console.log(2 ** 3)`?", options: ["6", "8", "9", "NaN"], answer: "8", attempted: false, selected: "" },
  { num: 69, question: "69 Which method returns the last index of a matching element?", options: ["lastIndexOf()", "findLast()", "searchLast()", "indexLast()"], answer: "lastIndexOf()", attempted: false, selected: "" },
  { num: 70, question: "70 What is the output of `console.log(null == undefined)`?", options: ["true", "false", "TypeError", "NaN"], answer: "true", attempted: false, selected: "" },

  { num: 71, question: "71 Which method converts a string to an array of substrings?", options: ["split()", "divide()", "slice()", "partition()"], answer: "split()", attempted: false, selected: "" },
  { num: 72, question: "72 What is the output of `console.log(0 === -0)`?", options: ["true", "false", "TypeError", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 73, question: "73 Which method creates a new array with a subset of elements?", options: ["filter()", "map()", "reduce()", "subset()"], answer: "filter()", attempted: false, selected: "" },
  { num: 74, question: "74 What is the output of `console.log(typeof new Date())`?", options: ["date", "object", "string", "number"], answer: "object", attempted: false, selected: "" },
  { num: 75, question: "75 Which method checks if a string contains a substring?", options: ["contains()", "includes()", "has()", "indexOf()"], answer: "includes()", attempted: false, selected: "" },
  { num: 76, question: "76 What is the output of `console.log(1 < 2 < 3)`?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 77, question: "77 Which method returns a Promise that resolves after all Promises resolve?", options: ["Promise.all()", "Promise.race()", "Promise.any()", "Promise.settle()"], answer: "Promise.all()", attempted: false, selected: "" },
  { num: 78, question: "78 What is the output of `console.log(+'')`?", options: ["0", "NaN", "undefined", "TypeError"], answer: "0", attempted: false, selected: "" },
  { num: 79, question: "79 Which method reverses an array in place?", options: ["reverse()", "flip()", "invert()", "backwards()"], answer: "reverse()", attempted: false, selected: "" },
  { num: 80, question: "80 What is the output of `console.log(!!{})`?", options: ["true", "false", "undefined", "TypeError"], answer: "true", attempted: false, selected: "" },

  { num: 81, question: "81 Which method returns a new array with unique elements?", options: ["unique()", "distinct()", "Set()", "Array.from(new Set())"], answer: "Array.from(new Set())", attempted: false, selected: "" },
  { num: 82, question: "82 What is the output of `console.log('5' * 3)`?", options: ["15", "53", "NaN", "TypeError"], answer: "15", attempted: false, selected: "" },
  { num: 83, question: "83 Which method creates a shallow copy of an object?", options: ["Object.assign()", "Object.copy()", "Object.clone()", "Object.create()"], answer: "Object.assign()", attempted: false, selected: "" },
  { num: 84, question: "84 What is the output of `console.log(undefined == null)`?", options: ["true", "false", "TypeError", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 85, question: "85 Which method returns the first rejected Promise in an iterable?", options: ["Promise.any()", "Promise.race()", "Promise.all()", "Promise.reject()"], answer: "Promise.race()", attempted: false, selected: "" },
  { num: 86, question: "86 What is the output of `console.log('Hello'[1])`?", options: ["H", "e", "l", "o"], answer: "e", attempted: false, selected: "" },
  { num: 87, question: "87 Which method executes a function once per array element?", options: ["forEach()", "map()", "filter()", "reduce()"], answer: "forEach()", attempted: false, selected: "" },
  { num: 88, question: "88 What is the output of `console.log(!![]))`?", options: ["true", "false", "undefined", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 89, question: "89 Which method returns a Promise that resolves when any Promise resolves?", options: ["Promise.any()", "Promise.race()", "Promise.all()", "Promise.some()"], answer: "Promise.any()", attempted: false, selected: "" },
  { num: 90, question: "90 What is the output of `console.log(1 + + '1')`?", options: ["2", "11", "NaN", "TypeError"], answer: "2", attempted: false, selected: "" },

  { num: 91, question: "91 Which method returns a new array with elements passing a test?", options: ["filter()", "map()", "reduce()", "find()"], answer: "filter()", attempted: false, selected: "" },
  { num: 92, question: "92 What is the output of `console.log(typeof (() => {}))`?", options: ["function", "object", "arrow", "undefined"], answer: "function", attempted: false, selected: "" },
  { num: 93, question: "93 Which method converts an array to a string with commas?", options: ["toString()", "join()", "stringify()", "toCSV()"], answer: "toString()", attempted: false, selected: "" },
  { num: 94, question: "94 What is the output of `console.log(0 || 'Hello')`?", options: ["0", "Hello", "true", "false"], answer: "Hello", attempted: false, selected: "" },
  { num: 95, question: "95 Which method returns a new array with flattened elements?", options: ["flat()", "flatten()", "concat()", "merge()"], answer: "flat()", attempted: false, selected: "" },
  { num: 96, question: "96 What is the output of `console.log('' == false)`?", options: ["true", "false", "TypeError", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 97, question: "97 Which method returns the primitive value of an object?", options: ["valueOf()", "toString()", "toPrimitive()", "convert()"], answer: "valueOf()", attempted: false, selected: "" },
  { num: 98, question: "98 What is the output of `console.log(1 == true)`?", options: ["true", "false", "TypeError", "NaN"], answer: "true", attempted: false, selected: "" },
  { num: 99, question: "99 Which method creates a new array with flatMap() then flat(1)?", options: ["flatMap()", "mapFlat()", "flat()", "map()"], answer: "flatMap()", attempted: false, selected: "" },
  { num: 100, question: "100 What is the output of `console.log([] == ![])`?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" }

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
