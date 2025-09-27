const questions = [
  { num: 1, question: "1 What is a metaclass in Python?", options: ["Class of a class", "Instance of a class", "Class method", "Type of module"], answer: "Class of a class", attempted: false, selected: "" },
  { num: 2, question: "2 What does the 'nonlocal' keyword do?", options: ["Modifies variable in outer scope", "Declares global variable", "Creates local variable", "Imports module"], answer: "Modifies variable in outer scope", attempted: false, selected: "" },
  { num: 3, question: "3 What is the output of: isinstance(True, int)?", options: ["True", "False", "Error", "None"], answer: "True", attempted: false, selected: "" },
  { num: 4, question: "4 What is the use of __slots__ in Python?", options: ["Memory optimization", "Loop iteration", "Inheritance", "File handling"], answer: "Memory optimization", attempted: false, selected: "" },
  { num: 5, question: "5 What is monkey patching in Python?", options: ["Modifying behavior at runtime", "File encryption", "Debugging method", "Memory testing"], answer: "Modifying behavior at runtime", attempted: false, selected: "" },
  { num: 6, question: "6 What is the output of: {x: x**2 for x in range(3)}?", options: ["{0: 0, 1: 1, 2: 4}", "{1: 1, 2: 4, 3: 9}", "[0, 1, 4]", "(0, 1, 2)"], answer: "{0: 0, 1: 1, 2: 4}", attempted: false, selected: "" },
  { num: 7, question: "7 What does __repr__ return?", options: ["String representation for developers", "Display for end user", "Integer result", "Boolean result"], answer: "String representation for developers", attempted: false, selected: "" },
  { num: 8, question: "8 Which protocol does iter() follow?", options: ["Iterator protocol", "Context protocol", "Memory protocol", "IO protocol"], answer: "Iterator protocol", attempted: false, selected: "" },
  { num: 9, question: "9 What is the result of: ''.__class__.__name__?", options: ["str", "type", "object", "name"], answer: "str", attempted: false, selected: "" },
  { num: 10, question: "10 What is the purpose of functools.lru_cache?", options: ["Memoization", "Thread safety", "Logging", "Lazy loading"], answer: "Memoization", attempted: false, selected: "" },
  { num: 11, question: "11 What is contextlib used for?", options: ["Context manager utilities", "Database connection", "Logging", "GUI"], answer: "Context manager utilities", attempted: false, selected: "" },
  { num: 12, question: "12 Which module in Python is used for concurrency?", options: ["asyncio", "math", "sys", "os"], answer: "asyncio", attempted: false, selected: "" },
  { num: 13, question: "13 What does 'yield from' do?", options: ["Delegates to another generator", "Returns from function", "Breaks loop", "Imports module"], answer: "Delegates to another generator", attempted: false, selected: "" },
  { num: 14, question: "14 What does hasattr(obj, name) return?", options: ["True if obj has attribute", "Name of attribute", "None", "Value of attribute"], answer: "True if obj has attribute", attempted: false, selected: "" },
  { num: 15, question: "15 What does __call__ method do?", options: ["Makes instance callable", "Creates constructor", "Initializes method", "Returns lambda"], answer: "Makes instance callable", attempted: false, selected: "" },
  { num: 16, question: "16 What is a coroutine in Python?", options: ["Function that can pause/resume", "Function with no return", "Always returns list", "Only for multithreading"], answer: "Function that can pause/resume", attempted: false, selected: "" },
  { num: 17, question: "17 What does 'del obj.attr' do?", options: ["Deletes attribute", "Deletes object", "Deletes module", "Deletes function"], answer: "Deletes attribute", attempted: false, selected: "" },
  { num: 18, question: "18 What is the output of: list(reversed([1, 2, 3]))?", options: ["[3, 2, 1]", "[1, 2, 3]", "[2, 3, 1]", "[3, 1, 2]"], answer: "[3, 2, 1]", attempted: false, selected: "" },
  { num: 19, question: "19 What is the purpose of '__init__.py' file?", options: ["Marks directory as a package", "Initializes class", "Defines constructor", "Creates file object"], answer: "Marks directory as a package", attempted: false, selected: "" },
  { num: 20, question: "20 What does the 'inspect' module do?", options: ["Introspects live objects", "Encrypts values", "Handles network", "Reads from file"], answer: "Introspects live objects", attempted: false, selected: "" },
  { num: 21, question: "21 What does property() function return?", options: ["Managed attribute", "Static variable", "Dictionary object", "Private method"], answer: "Managed attribute", attempted: false, selected: "" },
  { num: 22, question: "22 What is a descriptor in Python?", options: ["Object that defines __get__ etc.", "Decorator", "Wrapper", "Class attribute"], answer: "Object that defines __get__ etc.", attempted: false, selected: "" },
  { num: 23, question: "23 What does 'weakref' module do?", options: ["Creates weak references", "Encrypts data", "Multithreading", "Generates random values"], answer: "Creates weak references", attempted: false, selected: "" },
  { num: 24, question: "24 What does 'gc' module manage?", options: ["Garbage collection", "GUI", "Graphs", "Global config"], answer: "Garbage collection", attempted: false, selected: "" },
  { num: 25, question: "25 What is the output of: type(NotImplemented)?", options: ["<class 'NotImplementedType'>", "<class 'NoneType'>", "<class 'bool'>", "<class 'int'>"], answer: "<class 'NotImplementedType'>", attempted: false, selected: "" },
  { num: 26, question: "26 What does 'abc.ABCMeta' provide?", options: ["Abstract base class support", "JSON parsing", "Serialization", "Threading"], answer: "Abstract base class support", attempted: false, selected: "" },
  { num: 27, question: "27 What is a frozen set?", options: ["Immutable set", "Mutable list", "Dictionary wrapper", "File type"], answer: "Immutable set", attempted: false, selected: "" },
  { num: 28, question: "28 What does operator module provide?", options: ["Functional equivalents of operators", "Math operations", "I/O operations", "Thread control"], answer: "Functional equivalents of operators", attempted: false, selected: "" },
  { num: 29, question: "29 What does the term MRO stand for?", options: ["Method Resolution Order", "Meta Runtime Object", "Main Runtime Option", "Module Runtime Order"], answer: "Method Resolution Order", attempted: false, selected: "" },
  { num: 30, question: "30 What is the output of: float('inf') > 9999999?", options: ["True", "False", "Error", "None"], answer: "True", attempted: false, selected: "" },
  { num: 31, question: "31 What does sys.getsizeof() return?", options: ["Size of object in bytes", "Memory location", "Type of object", "Name of variable"], answer: "Size of object in bytes", attempted: false, selected: "" },
  { num: 32, question: "32 What is the purpose of asyncio.gather()?", options: ["Runs multiple coroutines concurrently", "Waits for a thread", "Blocks main loop", "Cancels coroutine"], answer: "Runs multiple coroutines concurrently", attempted: false, selected: "" },
  { num: 33, question: "33 What does pathlib module provide?", options: ["Object-oriented filesystem paths", "Threading support", "Pattern matching", "Clipboard handling"], answer: "Object-oriented filesystem paths", attempted: false, selected: "" },
  { num: 34, question: "34 What does 'from __future__ import' do?", options: ["Enable features from future Python versions", "Import system module", "Define new module", "Speed up execution"], answer: "Enable features from future Python versions", attempted: false, selected: "" },
  { num: 35, question: "35 What is the output of: id(1000) == id(1000)?", options: ["False", "True", "Depends on system", "Raises error"], answer: "Depends on system", attempted: false, selected: "" },
  { num: 36, question: "36 What does context manager guarantee?", options: ["Automatic resource cleanup", "Faster loops", "Multithreading", "None"], answer: "Automatic resource cleanup", attempted: false, selected: "" },
  { num: 37, question: "37 What is a generator expression?", options: ["(x for x in iterable)", "[x for x in iterable]", "{x: x for x in iterable}", "yield x"], answer: "(x for x in iterable)", attempted: false, selected: "" },
  { num: 38, question: "38 Which module provides JSON parsing?", options: ["json", "pickle", "marshal", "re"], answer: "json", attempted: false, selected: "" },
  { num: 39, question: "39 What is GIL in Python?", options: ["Global Interpreter Lock", "Graphical Interface Library", "Generic Integer Limit", "Global Index List"], answer: "Global Interpreter Lock", attempted: false, selected: "" },
  { num: 40, question: "40 What does __enter__ method support?", options: ["Context managers", "File handling only", "OOP inheritance", "JSON parsing"], answer: "Context managers", attempted: false, selected: "" },
  { num: 41, question: "41 What is the result of: len({True: 1, 1: 2})?", options: ["1", "2", "3", "Error"], answer: "1", attempted: false, selected: "" },
  { num: 42, question: "42 What is metaprogramming?", options: ["Code that modifies code", "Strict typing", "Code obfuscation", "Garbage collection"], answer: "Code that modifies code", attempted: false, selected: "" },
  { num: 43, question: "43 What is the purpose of @classmethod?", options: ["Method bound to class", "Method bound to instance", "Static method", "Lambda function"], answer: "Method bound to class", attempted: false, selected: "" },
  { num: 44, question: "44 What does random.seed() do?", options: ["Initialize random number generator", "Clear memory", "Lock process", "Save log"], answer: "Initialize random number generator", attempted: false, selected: "" },
  { num: 45, question: "45 What will be the output: all([])?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 46, question: "46 What does the zip(*list) pattern do?", options: ["Transpose a matrix", "Flatten list", "Reverse values", "Create iterator"], answer: "Transpose a matrix", attempted: false, selected: "" },
  { num: 47, question: "47 What is difference between list and tuple?", options: ["List is mutable, tuple is not", "Tuple is mutable, list is not", "Both are same", "List uses more memory"], answer: "List is mutable, tuple is not", attempted: false, selected: "" },
  { num: 48, question: "48 What does os.path.abspath() return?", options: ["Absolute path", "Relative path", "File content", "Filename only"], answer: "Absolute path", attempted: false, selected: "" },
  { num: 49, question: "49 What is 'Ellipsis' used for?", options: ["Advanced slicing", "Error handling", "Context manager", "None"], answer: "Advanced slicing", attempted: false, selected: "" },
  { num: 50, question: "50 What does __del__ method define?", options: ["Destructor", "Constructor", "Logger", "Initializer"], answer: "Destructor", attempted: false, selected: "" }
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
