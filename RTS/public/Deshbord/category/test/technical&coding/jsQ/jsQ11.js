const questions = [
        { "num": 51, "question": "51 Which method creates a new array with flatMap() then flat(1)?", "options": ["flatMap()", "mapFlat()", "flat()", "map()"], "answer": "flatMap()", "attempted": false, "selected": "" },
  { "num": 52, "question": "52 What is the output of console.log(1 == '1')?", "options": ["true", "false", "undefined", "Error"], "answer": "true", "attempted": false, "selected": "" },
  { "num": 53, "question": "53 Which method creates a new array with concatenated results?", "options": ["concatMap()", "flatMap()", "mapConcat()", "mergeMap()"], "answer": "flatMap()", "attempted": false, "selected": "" },
  { "num": 54, "question": "54 What is the purpose of the 'Proxy' object?", "options": ["To create object proxies", "To handle HTTP requests", "To manage memory", "To create virtual DOM"], "answer": "To create object proxies", "attempted": false, "selected": "" },
  { "num": 55, "question": "55 Which method returns a new array with unique values?", "options": ["unique()", "distinct()", "Set()", "Array.from(new Set())"], "answer": "Array.from(new Set())", "attempted": false, "selected": "" },
  { "num": 56, "question": "56 What is the output of console.log(+'1' + +'2')?", "options": ["3", "12", "NaN", "undefined"], "answer": "3", "attempted": false, "selected": "" },
  { "num": 57, "question": "57 Which method creates a shallow copy of an object?", "options": ["Object.copy()", "Object.clone()", "Object.assign()", "Object.create()"], "answer": "Object.assign()", "attempted": false, "selected": "" },
  { "num": 58, "question": "58 What is the purpose of the 'Reflect' object?", "options": ["To reflect on code", "To provide methods for interceptable operations", "To create mirrors", "To handle HTTP responses"], "answer": "To provide methods for interceptable operations", "attempted": false, "selected": "" },
  { "num": 59, "question": "59 Which method returns a string's characters as an array?", "options": ["split()", "chars()", "toArray()", "Array.from()"], "answer": "Array.from()", "attempted": false, "selected": "" },
  { "num": 60, "question": "60 What is the output of console.log([] == 0)?", "options": ["true", "false", "undefined", "Error"], "answer": "true", "attempted": false, "selected": "" },
  { "num": 61, "question": "61 Which method creates a new array with reversed elements?", "options": ["reverse()", "flip()", "invert()", "backwards()"], "answer": "reverse()", "attempted": false, "selected": "" },
  { "num": 62, "question": "62 What is the purpose of the 'WeakMap' object?", "options": ["To create maps with weak keys", "To create lightweight maps", "To create temporary maps", "To create fast maps"], "answer": "To create maps with weak keys", "attempted": false, "selected": "" },
  { "num": 63, "question": "63 Which method returns a new array with sorted elements?", "options": ["sort()", "order()", "arrange()", "sequence()"], "answer": "sort()", "attempted": false, "selected": "" },
  { "num": 64, "question": "64 What is the output of console.log('b' + 'a' + + 'a' + 'a')?", "options": ["baaa", "baNaNa", "baNaNa", "baundefineda"], "answer": "baNaNa", "attempted": false, "selected": "" },
  { "num": 65, "question": "65 Which method creates a new array with joined elements?", "options": ["concat()", "join()", "merge()", "combine()"], "answer": "join()", "attempted": false, "selected": "" },
  { "num": 66, "question": "66 What is the purpose of the 'WeakSet' object?", "options": ["To create sets with weak values", "To create lightweight sets", "To create temporary sets", "To create fast sets"], "answer": "To create sets with weak values", "attempted": false, "selected": "" },
  { "num": 67, "question": "67 Which method returns the last index of an element?", "options": ["lastIndexOf()", "findLast()", "searchLast()", "indexLast()"], "answer": "lastIndexOf()", "attempted": false, "selected": "" },
  { "num": 68, "question": "68 What is the output of console.log(null == undefined)?", "options": ["true", "false", "undefined", "Error"], "answer": "true", "attempted": false, "selected": "" },
  { "num": 69, "question": "69 Which method creates a new array with filled values?", "options": ["fill()", "populate()", "create()", "make()"], "answer": "fill()", "attempted": false, "selected": "" },
  { "num": 70, "question": "70 What is the purpose of the 'Intl' object?", "options": ["To handle internationalization", "To create integers", "To manage intervals", "To handle internal operations"], "answer": "To handle internationalization", "attempted": false, "selected": "" },
  { "num": 71, "question": "71 Which method checks if an array includes a value?", "options": ["contains()", "includes()", "has()", "find()"], "answer": "includes()", "attempted": false, "selected": "" },
  { "num": 72, "question": "72 What is the output of console.log(typeof NaN)?", "options": ["NaN", "number", "undefined", "null"], "answer": "number", "attempted": false, "selected": "" },
  { "num": 73, "question": "73 Which method creates a new array with array-like objects?", "options": ["Array.from()", "Array.of()", "Array.create()", "Array.new()"], "answer": "Array.from()", "attempted": false, "selected": "" },
  { "num": 74, "question": "74 What is the purpose of the 'ArrayBuffer' object?", "options": ["To buffer arrays", "To handle binary data", "To create array backups", "To manage memory"], "answer": "To handle binary data", "attempted": false, "selected": "" },
  { "num": 75, "question": "75 Which method creates a new array with specified elements?", "options": ["Array.from()", "Array.of()", "Array.create()", "Array.new()"], "answer": "Array.of()", "attempted": false, "selected": "" },
  { "num": 76, "question": "76 What is the output of console.log([] === [])?", "options": ["true", "false", "undefined", "Error"], "answer": "false", "attempted": false, "selected": "" },
  { "num": 77, "question": "77 Which method creates an iterator from an array?", "options": ["iterator()", "values()", "entries()", "All of the above"], "answer": "All of the above", "attempted": false, "selected": "" },
  { "num": 78, "question": "78 What is the purpose of the 'DataView' object?", "options": ["To view data", "To handle binary data in ArrayBuffer", "To create data visualizations", "To manage databases"], "answer": "To handle binary data in ArrayBuffer", "attempted": false, "selected": "" },
  { "num": 79, "question": "79 Which method creates a new array with flattened elements?", "options": ["flatten()", "flat()", "concat()", "merge()"], "answer": "flat()", "attempted": false, "selected": "" },
  { "num": 80, "question": "80 What is the output of console.log(+[])?", "options": ["0", "NaN", "[]", "Error"], "answer": "0", "attempted": false, "selected": "" },
  { "num": 81, "question": "81 Which method creates a new array with mapped and flattened results?", "options": ["mapFlat()", "flatMap()", "mergeMap()", "concatMap()"], "answer": "flatMap()", "attempted": false, "selected": "" },
  { "num": 82, "question": "82 What is the purpose of the 'Atomics' object?", "options": ["To handle atomic operations", "To create atomic elements", "To manage physics calculations", "To handle chemical data"], "answer": "To handle atomic operations", "attempted": false, "selected": "" },
  { "num": 83, "question": "83 Which method copies part of an array to another location?", "options": ["copy()", "copyWithin()", "paste()", "insert()"], "answer": "copyWithin()", "attempted": false, "selected": "" },
  { "num": 84, "question": "84 What is the output of console.log('' == false)?", "options": ["true", "false", "undefined", "Error"], "answer": "true", "attempted": false, "selected": "" },
  { "num": 85, "question": "85 Which method creates a new array with combined results?", "options": ["concat()", "merge()", "combine()", "join()"], "answer": "concat()", "attempted": false, "selected": "" },
  { "num": 86, "question": "86 What is the purpose of the 'SharedArrayBuffer' object?", "options": ["To share array buffers between threads", "To create shared arrays", "To manage memory sharing", "To handle concurrent operations"], "answer": "To share array buffers between threads", "attempted": false, "selected": "" },
  { "num": 87, "question": "87 Which method creates a string from an array?", "options": ["toString()", "join()", "stringify()", "toText()"], "answer": "join()", "attempted": false, "selected": "" },
  { "num": 88, "question": "88 What is the output of console.log(!!0)?", "options": ["true", "false", "0", "Error"], "answer": "false", "attempted": false, "selected": "" },
  { "num": 89, "question": "89 Which method checks if an object is an array?", "options": ["isArray()", "arrayCheck()", "typeOf()", "instanceOf()"], "answer": "isArray()", "attempted": false, "selected": "" },
  { "num": 90, "question": "90 What is the purpose of the 'Promise' object?", "options": ["To make promises", "To handle asynchronous operations", "To create synchronous code", "To manage events"], "answer": "To handle asynchronous operations", "attempted": false, "selected": "" },
  { "num": 91, "question": "91 Which method creates a new array with some elements changed?", "options": ["with()", "modify()", "change()", "update()"], "answer": "with()", "attempted": false, "selected": "" },
  { "num": 92, "question": "92 What is the output of console.log(!!{})?", "options": ["true", "false", "{}", "Error"], "answer": "true", "attempted": false, "selected": "" },
  { "num": 93, "question": "93 Which method creates a new array with elements until a condition fails?", "options": ["takeWhile()", "filter()", "until()", "some()"], "answer": "takeWhile()", "attempted": false, "selected": "" },
  { "num": 94, "question": "94 What is the purpose of the 'Generator' function?", "options": ["To generate numbers", "To create iterators", "To produce values on demand", "To handle loops"], "answer": "To produce values on demand", "attempted": false, "selected": "" },
  { "num": 95, "question": "95 Which method creates a new array with elements from start to end?", "options": ["slice()", "splice()", "cut()", "split()"], "answer": "slice()", "attempted": false, "selected": "" },
  { "num": 96, "question": "96 What is the output of console.log(+'')?", "options": ["0", "NaN", "''", "Error"], "answer": "0", "attempted": false, "selected": "" },
  { "num": 97, "question": "97 Which method creates a new array with elements that don't pass a test?", "options": ["reject()", "filterNot()", "exclude()", "None of the above"], "answer": "None of the above", "attempted": false, "selected": "" },
  { "num": 98, "question": "98 What is the purpose of the 'Iterator' protocol?", "options": ["To define how to iterate over objects", "To create loops", "To handle asynchronous iteration", "To manage array methods"], "answer": "To define how to iterate over objects", "attempted": false, "selected": "" },
  { "num": 99, "question": "99 Which method creates a new array with elements from multiple arrays?", "options": ["concat()", "merge()", "combine()", "join()"], "answer": "concat()", "attempted": false, "selected": "" },
  { "num": 100, "question": "100 What is the output of console.log(!![])?", "options": ["true", "false", "[]", "Error"], "answer": "true", "attempted": false, "selected": "" }
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
