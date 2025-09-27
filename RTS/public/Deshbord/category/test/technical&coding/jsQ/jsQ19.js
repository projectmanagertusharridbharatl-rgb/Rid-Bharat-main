const questions = [
{ num: 51, question: "51 Which method returns the primitive value of an object?", options: ["toString()", "valueOf()", "toPrimitive()", "convert()"], answer: "valueOf()", attempted: false, selected: "" },
  { num: 52, question: "52 What is the purpose of the 'prototype' property?", options: ["To add properties/methods to all instances", "To create private members", "To define static methods", "To access parent classes"], answer: "To add properties/methods to all instances", attempted: false, selected: "" },
  { num: 53, question: "53 What is the output of console.log(!!'')?", options: ["true", "false", "undefined", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 54, question: "54 Which method returns the last index at which an element can be found?", options: ["lastIndexOf()", "findLast()", "searchLast()", "last()"], answer: "lastIndexOf()", attempted: false, selected: "" },
  { num: 55, question: "55 What is the output of console.log(null == undefined)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 56, question: "56 Which method creates an array from an array-like object?", options: ["Array.from()", "Array.of()", "Array.create()", "Array.new()"], answer: "Array.from()", attempted: false, selected: "" },
  { num: 57, question: "57 What is the purpose of the 'static' keyword in classes?", options: ["To define instance methods", "To define class-level methods", "To prevent inheritance", "To create constants"], answer: "To define class-level methods", attempted: false, selected: "" },
  { num: 58, question: "58 What is the output of console.log(!!0)?", options: ["true", "false", "0", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 59, question: "59 Which method checks if an object is an array?", options: ["Array.isArray()", "Object.isArray()", "typeOfArray()", "isTypeArray()"], answer: "Array.isArray()", attempted: false, selected: "" },
  { num: 60, question: "60 What is the output of console.log(null === undefined)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 61, question: "61 Which method returns the keys of an object as an array?", options: ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"], answer: "Object.keys()", attempted: false, selected: "" },
  { num: 62, question: "62 What is the purpose of the 'get' keyword in classes?", options: ["To define a getter method", "To retrieve class properties", "To access static members", "To import modules"], answer: "To define a getter method", attempted: false, selected: "" },
  { num: 63, question: "63 What is the output of console.log(!!1)?", options: ["true", "false", "1", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 64, question: "64 Which method returns the values of an object as an array?", options: ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"], answer: "Object.values()", attempted: false, selected: "" },
  { num: 65, question: "65 What is the output of console.log(typeof NaN)?", options: ["number", "NaN", "undefined", "string"], answer: "number", attempted: false, selected: "" },
  { num: 66, question: "66 Which method returns key-value pairs of an object as arrays?", options: ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"], answer: "Object.entries()", attempted: false, selected: "" },
  { num: 67, question: "67 What is the purpose of the 'set' keyword in classes?", options: ["To define a setter method", "To set class properties", "To define static members", "To export modules"], answer: "To define a setter method", attempted: false, selected: "" },
  { num: 68, question: "68 What is the output of console.log(!!{})?", options: ["true", "false", "{}", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 69, question: "69 Which method creates a new object with the specified prototype?", options: ["Object.create()", "Object.new()", "Object.prototype()", "Object.assign()"], answer: "Object.create()", attempted: false, selected: "" },
  { num: 70, question: "70 What is the output of console.log(typeof (() => {}))?", options: ["function", "object", "arrow", "undefined"], answer: "function", attempted: false, selected: "" },
  { num: 71, question: "71 Which method copies properties from source to target objects?", options: ["Object.copy()", "Object.assign()", "Object.merge()", "Object.clone()"], answer: "Object.assign()", attempted: false, selected: "" },
  { num: 72, question: "72 What is the purpose of the 'extends' keyword?", options: ["To create class inheritance", "To import modules", "To extend arrays", "To add methods to objects"], answer: "To create class inheritance", attempted: false, selected: "" },
  { num: 73, question: "73 What is the output of console.log(!![])?", options: ["true", "false", "[]", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 74, question: "74 Which method prevents new properties from being added to an object?", options: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "Object.lock()"], answer: "Object.preventExtensions()", attempted: false, selected: "" },
  { num: 75, question: "75 What is the output of console.log(typeof class {})?", options: ["class", "object", "function", "undefined"], answer: "function", attempted: false, selected: "" },
  { num: 76, question: "76 Which method prevents any changes to an object's properties?", options: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "Object.lock()"], answer: "Object.freeze()", attempted: false, selected: "" },
  { num: 77, question: "77 What is the purpose of the 'import' keyword?", options: ["To include modules", "To export functions", "To load scripts", "To define dependencies"], answer: "To include modules", attempted: false, selected: "" },
  { num: 78, question: "78 What is the output of console.log(!!new Boolean(false))?", options: ["true", "false", "Boolean", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 79, question: "79 Which method prevents new properties but allows changes to existing ones?", options: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "Object.lock()"], answer: "Object.seal()", attempted: false, selected: "" },
  { num: 80, question: "80 What is the output of console.log(typeof Symbol())?", options: ["symbol", "object", "string", "function"], answer: "symbol", attempted: false, selected: "" },
  { num: 81, question: "81 Which method creates a new array with the results of calling a function?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "map()", attempted: false, selected: "" },
  { num: 82, question: "82 What is the purpose of the 'export' keyword?", options: ["To include modules", "To make code available to other modules", "To load scripts", "To define public methods"], answer: "To make code available to other modules", attempted: false, selected: "" },
  { num: 83, question: "83 What is the output of console.log(!!Boolean(false))?", options: ["true", "false", "Boolean", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 84, question: "84 Which method executes a function once for each array element?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "forEach()", attempted: false, selected: "" },
  { num: 85, question: "85 What is the output of console.log(typeof BigInt(1))?", options: ["bigint", "number", "object", "function"], answer: "bigint", attempted: false, selected: "" },
  { num: 86, question: "86 Which method creates a new array with elements that pass a test?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "filter()", attempted: false, selected: "" },
  { num: 87, question: "87 What is the purpose of the 'default' keyword in exports?", options: ["To define the main export", "To set default values", "To create fallback exports", "To specify required modules"], answer: "To define the main export", attempted: false, selected: "" },
  { num: 88, question: "88 What is the output of console.log(!!new String(''))?", options: ["true", "false", "String", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 89, question: "89 Which method applies a function against an accumulator and each element?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "reduce()", attempted: false, selected: "" },
  { num: 90, question: "90 What is the output of console.log(typeof Date())?", options: ["date", "object", "string", "function"], answer: "string", attempted: false, selected: "" },
  { num: 91, question: "91 Which method creates a new array with all sub-arrays concatenated recursively?", options: ["concat()", "join()", "flat()", "merge()"], answer: "flat()", attempted: false, selected: "" },
  { num: 92, question: "92 What is the purpose of the 'Promise' object?", options: ["To handle asynchronous operations", "To create synchronous functions", "To define classes", "To manage events"], answer: "To handle asynchronous operations", attempted: false, selected: "" },
  { num: 93, question: "93 What is the output of console.log(!!String(''))?", options: ["true", "false", "String", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 94, question: "94 Which method creates a new array with elements from start to end?", options: ["slice()", "splice()", "split()", "cut()"], answer: "slice()", attempted: false, selected: "" },
  { num: 95, question: "95 What is the output of console.log(typeof new Date())?", options: ["date", "object", "string", "function"], answer: "object", attempted: false, selected: "" },
  { num: 96, question: "96 Which method joins all elements of an array into a string?", options: ["toString()", "join()", "concat()", "merge()"], answer: "join()", attempted: false, selected: "" },
  { num: 97, question: "97 What is the purpose of the 'then()' method?", options: ["To handle Promise resolution", "To create chained functions", "To define callbacks", "To schedule execution"], answer: "To handle Promise resolution", attempted: false, selected: "" },
  { num: 98, question: "98 What is the output of console.log(!!Number(0))?", options: ["true", "false", "Number", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 99, question: "99 Which method reverses the order of elements in an array?", options: ["reverse()", "sort()", "flip()", "rotate()"], answer: "reverse()", attempted: false, selected: "" },
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
