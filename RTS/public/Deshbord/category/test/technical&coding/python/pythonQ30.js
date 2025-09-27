const questions = 
[
  { num: 1, question: "1 What is the output of `print(0.1 + 0.2 == 0.3)`?", options: ["True", "False", "Error", "None"], answer: "False", attempted: false, selected: "" },
  { num: 2, question: "2 Which method is used to get the index of an element in a list?", options: ["index()", "find()", "search()", "get()"], answer: "index()", attempted: false, selected: "" },
  { num: 3, question: "3 What does `__slots__` do in a Python class?", options: ["Prevents dynamic attribute creation", "Speeds up attribute access", "Reduces memory usage", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 4, question: "4 How do you create a frozen set?", options: ["frozenset()", "set(frozen=True)", "frozen(set)", "set().freeze()"], answer: "frozenset()", attempted: false, selected: "" },
  { num: 5, question: "5 What is the output of `'Python'.split('t')`?", options: ["['Py', 'hon']", "['P', 'hon']", "['Pyt', 'hon']", "Error"], answer: "['Py', 'hon']", attempted: false, selected: "" },
  { num: 6, question: "6 Which decorator caches function return values?", options: ["@cache", "@lru_cache", "@memoize", "@remember"], answer: "@lru_cache", attempted: false, selected: "" },
  { num: 7, question: "7 What does `__call__` method do?", options: ["Makes an object callable", "Initializes the object", "Deletes the object", "Prints the object"], answer: "Makes an object callable", attempted: false, selected: "" },
  { num: 8, question: "8 How do you check if an object is an instance of a class?", options: ["isinstance()", "type()", "hasattr()", "isclass()"], answer: "isinstance()", attempted: false, selected: "" },
  { num: 9, question: "9 What is the output of `bool([])`?", options: ["True", "False", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 10, question: "10 Which is used to create a context manager?", options: ["__enter__ and __exit__", "__start__ and __end__", "__open__ and __close__", "with()"], answer: "__enter__ and __exit__", attempted: false, selected: "" },
  { num: 11, question: "11 What does `globals()` return?", options: ["Global variables", "Local variables", "Module variables", "Built-in functions"], answer: "Global variables", attempted: false, selected: "" },
  { num: 12, question: "12 How do you make a variable private in a class?", options: ["Use `private` keyword", "Prefix with `__`", "Use `_` prefix", "Python has no true private variables"], answer: "Prefix with `__`", attempted: false, selected: "" },
  { num: 13, question: "13 What is the output of `(1,) + (2,)`?", options: ["(1, 2)", "(3,)", "Error", "1, 2"], answer: "(1, 2)", attempted: false, selected: "" },
  { num: 14, question: "14 Which is used to serialize Python objects?", options: ["json", "pickle", "yaml", "All of the above"], answer: "pickle", attempted: false, selected: "" },
  { num: 15, question: "15 What does `__annotations__` store?", options: ["Type hints", "Docstrings", "Class methods", "Module imports"], answer: "Type hints", attempted: false, selected: "" },
  { num: 16, question: "16 How do you create a metaclass?", options: ["By inheriting from `type`", "Using `@metaclass`", "Defining `__metaclass__`", "Both A and C"], answer: "By inheriting from `type`", attempted: false, selected: "" },
  { num: 17, question: "17 What is the output of `'hello'.encode('utf-8')`?", options: ["b'hello'", "'hello'", "[104, 101, 108, 108, 111]", "Error"], answer: "b'hello'", attempted: false, selected: "" },
  { num: 18, question: "18 Which is used to create a coroutine?", options: ["async def", "yield", "generator", "Both A and B"], answer: "async def", attempted: false, selected: "" },
  { num: 19, question: "19 What does `__mro__` stand for?", options: ["Method Resolution Order", "Module Resolution Order", "Multiple Return Object", "Meta Resolution Order"], answer: "Method Resolution Order", attempted: false, selected: "" },
  { num: 20, question: "20 How do you check if a file exists?", options: ["os.path.exists()", "os.file_exists()", "path.exists()", "file.exists()"], answer: "os.path.exists()", attempted: false, selected: "" },
  { num: 21, question: "21 What is the output of `hash('Python')`?", options: ["A fixed integer", "A random number", "The string itself", "Error"], answer: "A fixed integer", attempted: false, selected: "" },
  { num: 22, question: "22 Which is used to create a thread?", options: ["threading.Thread()", "os.fork()", "multiprocessing.Process()", "async.run()"], answer: "threading.Thread()", attempted: false, selected: "" },
  { num: 23, question: "23 What does `__import__` do?", options: ["Dynamically imports a module", "Checks if a module exists", "Reloads a module", "Imports all submodules"], answer: "Dynamically imports a module", attempted: false, selected: "" },
  { num: 24, question: "24 How do you create a deep copy?", options: ["copy.deepcopy()", "object.clone()", "copy.copy()", "deepcopy()"], answer: "copy.deepcopy()", attempted: false, selected: "" },
  { num: 25, question: "25 What is the output of `'hello'.islower()`?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 26, question: "26 Which is used to handle warnings?", options: ["warnings module", "try-except", "assert", "logging"], answer: "warnings module", attempted: false, selected: "" },
  { num: 27, question: "27 What does `__dict__` contain?", options: ["Object attributes", "Class methods", "Module variables", "Built-ins"], answer: "Object attributes", attempted: false, selected: "" },
  { num: 28, question: "28 How do you measure memory usage of an object?", options: ["sys.getsizeof()", "obj.__sizeof__()", "memory.size()", "Both A and B"], answer: "sys.getsizeof()", attempted: false, selected: "" },
  { num: 29, question: "29 What is the output of `'hello'.title()`?", options: ["'Hello'", "'HELLO'", "'hello'", "'hElLo'"], answer: "'Hello'", attempted: false, selected: "" },
  { num: 30, question: "30 Which is used to profile Python code?", options: ["cProfile", "timeit", "profile", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 31, question: "31 What does `__bases__` contain?", options: ["Base classes", "Class attributes", "Module hierarchy", "Method arguments"], answer: "Base classes", attempted: false, selected: "" },
  { num: 32, question: "32 How do you create a class method?", options: ["@classmethod", "@staticmethod", "@method", "def classmethod"], answer: "@classmethod", attempted: false, selected: "" },
  { num: 33, question: "33 What is the output of `'hello'.center(10, '*')`?", options: ["'**hello***'", "'***hello**'", "'hello*****'", "'****hello*'"], answer: "'**hello***'", attempted: false, selected: "" },
  { num: 34, question: "34 Which is used to parse command-line arguments?", options: ["argparse", "sys.argv", "getopt", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 35, question: "35 What does `__subclasses__()` return?", options: ["Immediate subclasses", "All child classes", "Parent classes", "None"], answer: "Immediate subclasses", attempted: false, selected: "" },
  { num: 36, question: "36 How do you create a property with a setter?", options: ["@property and @x.setter", "@setter", "property() function", "Both A and C"], answer: "Both A and C", attempted: false, selected: "" },
  { num: 37, question: "37 What is the output of `'hello'.swapcase()`?", options: ["'HELLO'", "'Hello'", "'hELLO'", "'hello'"], answer: "'hELLO'", attempted: false, selected: "" },
  { num: 38, question: "38 Which is used to create a generator expression?", options: ["(x for x in iterable)", "[x for x in iterable]", "{x for x in iterable}", "yield x"], answer: "(x for x in iterable)", attempted: false, selected: "" },
  { num: 39, question: "39 What does `__all__` do in a module?", options: ["Defines public exports", "Lists all attributes", "Imports everything", "None"], answer: "Defines public exports", attempted: false, selected: "" },
  { num: 40, question: "40 How do you check if a string is a valid identifier?", options: ["str.isidentifier()", "isidentifier(str)", "valid_identifier()", "check_id()"], answer: "str.isidentifier()", attempted: false, selected: "" },
  { num: 41, question: "41 What is the output of `'hello'.partition('l')`?", options: ["('he', 'l', 'lo')", "('h', 'e', 'llo')", "('he', 'll', 'o')", "Error"], answer: "('he', 'l', 'lo')", attempted: false, selected: "" },
  { num: 42, question: "42 Which is used to create a weak reference?", options: ["weakref.ref()", "ref()", "weak_ref()", "weak.reference()"], answer: "weakref.ref()", attempted: false, selected: "" },
  { num: 43, question: "43 What does `__getitem__` do?", options: ["Enables indexing", "Gets an attribute", "Checks containment", "Deletes an item"], answer: "Enables indexing", attempted: false, selected: "" },
  { num: 44, question: "44 How do you create a namespace?", options: ["types.SimpleNamespace()", "namespace()", "dict()", "object()"], answer: "types.SimpleNamespace()", attempted: false, selected: "" },
  { num: 45, question: "45 What is the output of `'hello'.zfill(8)`?", options: ["'000hello'", "'hello000'", "'   hello'", "'hello   '"], answer: "'000hello'", attempted: false, selected: "" },
  { num: 46, question: "46 Which is used to create an abstract base class?", options: ["abc.ABC", "@abstractmethod", "abstract class", "Both A and B"], answer: "Both A and B", attempted: false, selected: "" },
  { num: 47, question: "47 What does `__contains__` do?", options: ["Enables `in` operator", "Checks containment", "Returns length", "Both A and B"], answer: "Both A and B", attempted: false, selected: "" },
  { num: 48, question: "48 How do you create a read-only property?", options: ["@property", "@readonly", "property(readonly=True)", "frozen_property()"], answer: "@property", attempted: false, selected: "" },
  { num: 49, question: "49 What is the output of `'hello'.ljust(10, '-')`?", options: ["'hello-----'", "'-----hello'", "'hello     '", "'     hello'"], answer: "'hello-----'", attempted: false, selected: "" },
  { num: 50, question: "50 Which is used to create a descriptor?", options: ["__get__ and __set__", "@descriptor", "descriptor()", "property()"], answer: "__get__ and __set__", attempted: false, selected: "" }
]
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
