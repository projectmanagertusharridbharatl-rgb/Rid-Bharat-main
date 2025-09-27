const questions = 
[
  { num: 1, question: "51 What does the `__name__` variable equal when a script is executed directly?", options: ["__main__", "script", "module", "filename"], answer: "__main__", attempted: false, selected: "" },
  { num: 2, question: "52 Which method is used to get all keys from a dictionary?", options: [".keys()", ".items()", ".values()", ".get()"], answer: ".keys()", attempted: false, selected: "" },
  { num: 3, question: "53 What is the output of `print('Hello'.replace('l', 'x'))`?", options: ["Hexxo", "Hxxlo", "Hexlo", "Hexxo"], answer: "Hexxo", attempted: false, selected: "" },
  { num: 4, question: "54 Which module is used for JSON operations?", options: ["json", "simplejson", "js", "Both json and simplejson"], answer: "Both json and simplejson", attempted: false, selected: "" },
  { num: 5, question: "55 How do you convert a string to a list of characters?", options: ["list(string)", "[*string]", "[c for c in string]", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 6, question: "56 What does `@property` decorator do?", options: ["Creates getter", "Allows method as attribute", "Encapsulates data", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 7, question: "57 Which is faster for membership testing?", options: ["List", "Tuple", "Set", "Dictionary"], answer: "Set", attempted: false, selected: "" },
  { num: 8, question: "58 What is the output of `print([1, 2] + [3, 4])`?", options: ["[1, 2, 3, 4]", "[4, 6]", "[[1, 2], [3, 4]]", "Error"], answer: "[1, 2, 3, 4]", attempted: false, selected: "" },
  { num: 9, question: "59 How do you make a shallow copy of a dictionary?", options: ["dict.copy()", "dict(dict)", "{**dict}", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 10, question: "60 What does `break` do in a loop?", options: ["Skips iteration", "Exits loop", "Continues next iteration", "Pauses loop"], answer: "Exits loop", attempted: false, selected: "" },
  { num: 11, question: "61 Which is NOT a valid variable name?", options: ["_var", "var1", "1var", "var_1"], answer: "1var", attempted: false, selected: "" },
  { num: 12, question: "62 What is the output of `print('Python'[-2])`?", options: ["o", "n", "h", "y"], answer: "o", attempted: false, selected: "" },
  { num: 13, question: "63 How do you handle multiple exceptions?", options: ["Multiple except blocks", "Tuple in except", "Both", "Neither"], answer: "Both", attempted: false, selected: "" },
  { num: 14, question: "64 What does `frozenset()` do?", options: ["Freezes variable", "Creates immutable set", "Stops execution", "Converts to tuple"], answer: "Creates immutable set", attempted: false, selected: "" },
  { num: 15, question: "65 Which is used for database operations?", options: ["sqlite3", "MySQLdb", "psycopg2", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 16, question: "66 What is the output of `print(any([False, True, False]))`?", options: ["True", "False", "None", "Error"], answer: "True", attempted: false, selected: "" },
  { num: 17, question: "67 How do you make a class abstract?", options: ["abc module", "@abstractmethod", "inherit ABC", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 18, question: "68 What does `globals()` return?", options: ["Global variables", "Imported modules", "Functions", "Classes"], answer: "Global variables", attempted: false, selected: "" },
  { num: 19, question: "69 Which is used for async programming?", options: ["asyncio", "async/await", "aiohttp", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 20, question: "70 What is the output of `print('Python'.islower())`?", options: ["True", "False", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 21, question: "71 How do you convert bytes to string?", options: [".decode()", "str()", "bytes.decode()", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 22, question: "72 What does `__slots__` do?", options: ["Saves memory", "Restricts attributes", "Speeds access", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 23, question: "73 Which is used for type hints?", options: ["typing module", "-> syntax", "Annotations", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 24, question: "74 What is the output of `print(bool([]))`?", options: ["True", "False", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 25, question: "75 How do you make a deep copy?", options: ["copy.deepcopy()", "[*list]", "dict(dict)", "None work"], answer: "copy.deepcopy()", attempted: false, selected: "" },
  { num: 26, question: "76 What does `__call__` method do?", options: ["Makes instance callable", "Constructor", "Destructor", "Iterator"], answer: "Makes instance callable", attempted: false, selected: "" },
  { num: 27, question: "77 Which is used for unit testing?", options: ["unittest", "pytest", "nose", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 28, question: "78 What is the output of `print('Python'.find('tho'))`?", options: ["2", "-1", "3", "Error"], answer: "-1", attempted: false, selected: "" },
  { num: 29, question: "79 How do you check if a string is a digit?", options: [".isdigit()", "isinstance(str, int)", "try/except", "All of the above"], answer: ".isdigit()", attempted: false, selected: "" },
  { num: 30, question: "80 What does `__import__()` do?", options: ["Dynamic imports", "Reloads module", "Checks imports", "Installs package"], answer: "Dynamic imports", attempted: false, selected: "" },
  { num: 31, question: "81 Which is used for data analysis?", options: ["pandas", "numpy", "matplotlib", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 32, question: "82 What is the output of `print(chr(65))`?", options: ["A", "65", "a", "Error"], answer: "A", attempted: false, selected: "" },
  { num: 33, question: "83 How do you make a private variable?", options: ["__prefix", "_prefix", "private keyword", "Both __prefix and _prefix"], answer: "Both __prefix and _prefix", attempted: false, selected: "" },
  { num: 34, question: "84 What does `nonlocal` do?", options: ["Accesses outer scope", "Creates global", "Declares constant", "Imports module"], answer: "Accesses outer scope", attempted: false, selected: "" },
  { num: 35, question: "85 Which is used for web scraping?", options: ["BeautifulSoup", "Scrapy", "requests", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 36, question: "86 What is the output of `print(ascii('ö'))`?", options: ["ö", "'\\xf6'", "Error", "None"], answer: "'\\xf6'", attempted: false, selected: "" },
  { num: 37, question: "87 How do you measure execution time?", options: ["timeit", "datetime", "time.time()", "Both timeit and time.time()"], answer: "Both timeit and time.time()", attempted: false, selected: "" },
  { num: 38, question: "88 What does `__mro__` show?", options: ["Method resolution order", "Module order", "Memory usage", "Metadata"], answer: "Method resolution order", attempted: false, selected: "" },
  { num: 39, question: "89 Which is used for GUI programming?", options: ["tkinter", "PyQt", "wxPython", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 40, question: "90 What is the output of `print('Python'.partition('th'))`?", options: ["('Py', 'th', 'on')", "['Py', 'th', 'on']", "Error", "None"], answer: "('Py', 'th', 'on')", attempted: false, selected: "" },
  { num: 41, question: "91 How do you create a named tuple?", options: ["collections.namedtuple", "typing.NamedTuple", "Both", "Neither"], answer: "Both", attempted: false, selected: "" },
  { num: 42, question: "92 What does `__annotations__` contain?", options: ["Type hints", "Docstrings", "Imports", "Decorators"], answer: "Type hints", attempted: false, selected: "" },
  { num: 43, question: "93 Which is used for machine learning?", options: ["tensorflow", "scikit-learn", "pytorch", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 44, question: "94 What is the output of `print(bin(5))`?", options: ["101", "0b101", "5", "Error"], answer: "0b101", attempted: false, selected: "" },
  { num: 45, question: "95 How do you create a coroutine?", options: ["async def", "@asyncio.coroutine", "Both", "Neither"], answer: "Both", attempted: false, selected: "" },
  { num: 46, question: "96 What does `__file__` contain?", options: ["Current file path", "Imported files", "File handle", "File content"], answer: "Current file path", attempted: false, selected: "" },
  { num: 47, question: "97 Which is used for image processing?", options: ["Pillow", "OpenCV", "scikit-image", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 48, question: "98 What is the output of `print('Python'.center(10, '*'))`?", options: ["**Python**", "Python****", "****Python", "**Python"], answer: "**Python**", attempted: false, selected: "" },
  { num: 49, question: "99 How do you create a metaclass?", options: ["type subclass", "__metaclass__", "Both", "Neither"], answer: "Both", attempted: false, selected: "" },
  { num: 50, question: "100 What does `__all__` define?", options: ["Public exports", "Private vars", "Imports", "Constants"], answer: "Public exports", attempted: false, selected: "" }
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
