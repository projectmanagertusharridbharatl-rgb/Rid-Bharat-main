const questions = [
  { num: 1, question: "1 What is the output of list(map(lambda x: x**2, [1, 2, 3]))?", options: ["[1, 4, 9]", "[2, 3, 4]", "[1, 2, 3]", "Error"], answer: "[1, 4, 9]", attempted: false, selected: "" },
  { num: 2, question: "2 What does the 'with' statement do in Python?", options: ["Manages resources", "Starts a loop", "Creates a thread", "Handles errors"], answer: "Manages resources", attempted: false, selected: "" },
  { num: 3, question: "3 Which decorator is used to define a static method?", options: ["@staticmethod", "@class", "@staticmethod()", "@static"], answer: "@staticmethod", attempted: false, selected: "" },
  { num: 4, question: "4 What will print({1, 2, 3} & {2, 3, 4}) output?", options: ["{2, 3}", "{1, 4}", "{1, 2, 3, 4}", "Error"], answer: "{2, 3}", attempted: false, selected: "" },
  { num: 5, question: "5 What is a correct way to catch any exception?", options: ["except Exception:", "catch Exception:", "handle Exception:", "except Any:"], answer: "except Exception:", attempted: false, selected: "" },
  { num: 6, question: "6 What does 'yield' keyword do in Python?", options: ["Returns a generator", "Stops function", "Exits program", "Returns None"], answer: "Returns a generator", attempted: false, selected: "" },
  { num: 7, question: "7 What is the output of [i for i in range(5) if i%2==0]?", options: ["[0, 2, 4]", "[1, 3, 5]", "[2, 4]", "[0, 1, 2, 3, 4]"], answer: "[0, 2, 4]", attempted: false, selected: "" },
  { num: 8, question: "8 What is '__name__' variable used for?", options: ["Module check", "Variable name", "Error handler", "Function caller"], answer: "Module check", attempted: false, selected: "" },
  { num: 9, question: "9 What will be output of 'None == False'?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 10, question: "10 What is the base class of all classes in Python?", options: ["object", "base", "super", "main"], answer: "object", attempted: false, selected: "" },
  { num: 11, question: "11 What is the output of set('hello')?", options: ["{'h','e','l','o'}", "['hello']", "['h','e','l','l','o']", "Error"], answer: "{'h','e','l','o'}", attempted: false, selected: "" },
  { num: 12, question: "12 Which module in Python supports regular expressions?", options: ["re", "regex", "match", "regexp"], answer: "re", attempted: false, selected: "" },
  { num: 13, question: "13 What is the output of type(lambda x: x)?", options: ["<class 'function'>", "<type>", "<lambda>", "<class>"], answer: "<class 'function'>", attempted: false, selected: "" },
  { num: 14, question: "14 What is the use of 'assert' statement?", options: ["Debugging", "Looping", "Exception", "Return value"], answer: "Debugging", attempted: false, selected: "" },
  { num: 15, question: "15 What does json.dumps() do?", options: ["Convert dict to string", "Convert string to dict", "Encode JSON to bytes", "Read JSON"], answer: "Convert dict to string", attempted: false, selected: "" },
  { num: 16, question: "16 What does 'is' operator check?", options: ["Object identity", "Equality", "Type match", "Membership"], answer: "Object identity", attempted: false, selected: "" },
  { num: 17, question: "17 Which method is called when an object is deleted?", options: ["__del__", "__delete__", "__destroy__", "__remove__"], answer: "__del__", attempted: false, selected: "" },
  { num: 18, question: "18 What does enumerate() return?", options: ["Index and element", "Only index", "Only value", "Nothing"], answer: "Index and element", attempted: false, selected: "" },
  { num: 19, question: "19 What is the output of 10//3?", options: ["3", "3.33", "4", "Error"], answer: "3", attempted: false, selected: "" },
  { num: 20, question: "20 What will be output of bool([])?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 21, question: "21 What does the zip() function do?", options: ["Combines iterables", "Sorts list", "Filters elements", "Splits list"], answer: "Combines iterables", attempted: false, selected: "" },
  { num: 22, question: "22 What will be output of 2 < 3 < 4?", options: ["True", "False", "Error", "None"], answer: "True", attempted: false, selected: "" },
  { num: 23, question: "23 What is the output of [1, 2] * 2?", options: ["[1, 2, 1, 2]", "[2, 4]", "[1, 2, 2]", "Error"], answer: "[1, 2, 1, 2]", attempted: false, selected: "" },
  { num: 24, question: "24 Which is not a valid exception class?", options: ["WrongError", "TypeError", "ValueError", "KeyError"], answer: "WrongError", attempted: false, selected: "" },
  { num: 25, question: "25 What will print([None]*3) output?", options: ["[None, None, None]", "[null, null, null]", "[0, 0, 0]", "[None]*3"], answer: "[None, None, None]", attempted: false, selected: "" },
  { num: 26, question: "26 What does list comprehension return?", options: ["New list", "Generator", "Tuple", "Set"], answer: "New list", attempted: false, selected: "" },
  { num: 27, question: "27 Which is a ternary conditional operator?", options: ["a if cond else b", "if a then b", "a ? b : c", "cond(a, b)"], answer: "a if cond else b", attempted: false, selected: "" },
  { num: 28, question: "28 What is the output of bool(0)?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 29, question: "29 Which of the following is a named tuple?", options: ["collections.namedtuple()", "tuple.named()", "named.tuple()", "collections.tuple()"], answer: "collections.namedtuple()", attempted: false, selected: "" },
  { num: 30, question: "30 What will be output of list('abc')?", options: ["['a', 'b', 'c']", "abc", "['abc']", "[a, b, c]"], answer: "['a', 'b', 'c']", attempted: false, selected: "" },
  { num: 31, question: "31 What does **kwargs allow?", options: ["Arbitrary keyword arguments", "Default values", "Keyword-only args", "Arbitrary values"], answer: "Arbitrary keyword arguments", attempted: false, selected: "" },
  { num: 32, question: "32 What is 'lambda' used for?", options: ["Anonymous function", "Looping", "Class", "Exception"], answer: "Anonymous function", attempted: false, selected: "" },
  { num: 33, question: "33 What is difference between is and ==?", options: ["is checks identity", "is checks equality", "No difference", "== checks reference"], answer: "is checks identity", attempted: false, selected: "" },
  { num: 34, question: "34 What does filter() return?", options: ["Filtered iterator", "List", "Boolean", "None"], answer: "Filtered iterator", attempted: false, selected: "" },
  { num: 35, question: "35 What is a closure?", options: ["Function with environment", "Loop", "Tuple", "List"], answer: "Function with environment", attempted: false, selected: "" },
  { num: 36, question: "36 What is a generator expression?", options: ["(x for x in iterable)", "[x for x in iterable]", "{x for x in iterable}", "x -> iterable"], answer: "(x for x in iterable)", attempted: false, selected: "" },
  { num: 37, question: "37 What is the return type of open()?", options: ["file object", "string", "bool", "buffer"], answer: "file object", attempted: false, selected: "" },
  { num: 38, question: "38 What is output of print(chr(65))?", options: ["A", "65", "a", "Error"], answer: "A", attempted: false, selected: "" },
  { num: 39, question: "39 What does os.getcwd() do?", options: ["Returns current working directory", "Deletes folder", "Lists files", "Opens terminal"], answer: "Returns current working directory", attempted: false, selected: "" },
  { num: 40, question: "40 What does 're.match()' do?", options: ["Matches at start", "Matches anywhere", "Replaces string", "Splits string"], answer: "Matches at start", attempted: false, selected: "" },
  { num: 41, question: "41 What does 'global' keyword do?", options: ["Access global variable", "Define module", "Import file", "Create thread"], answer: "Access global variable", attempted: false, selected: "" },
  { num: 42, question: "42 What is the result of divmod(9, 4)?", options: ["(2, 1)", "(2, 2)", "(1, 2)", "(4, 1)"], answer: "(2, 1)", attempted: false, selected: "" },
  { num: 43, question: "43 What does str.strip() remove by default?", options: ["Whitespace", "Numbers", "Letters", "Punctuation"], answer: "Whitespace", attempted: false, selected: "" },
  { num: 44, question: "44 What is a module in Python?", options: ["File with .py extension", "Folder", "Class", "Function"], answer: "File with .py extension", attempted: false, selected: "" },
  { num: 45, question: "45 What will print(5 > 3 and 2 < 1) return?", options: ["False", "True", "Error", "None"], answer: "False", attempted: false, selected: "" },
  { num: 46, question: "46 Which one is used to raise an exception?", options: ["raise", "throw", "error", "except"], answer: "raise", attempted: false, selected: "" },
  { num: 47, question: "47 What will ' '.join(['A', 'B']) output?", options: ["A B", "AB", "['A','B']", "Error"], answer: "A B", attempted: false, selected: "" },
  { num: 48, question: "48 Which module provides time-related functions?", options: ["time", "date", "clock", "datetime"], answer: "time", attempted: false, selected: "" },
  { num: 49, question: "49 What is a Python package?", options: ["Collection of modules", "Single file", "Compiled code", "Binary file"], answer: "Collection of modules", attempted: false, selected: "" },
  { num: 50, question: "50 Which keyword is used for inheritance?", options: ["class Derived(Base):", "inherit", "extends", "super"], answer: "class Derived(Base):", attempted: false, selected: "" }
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
