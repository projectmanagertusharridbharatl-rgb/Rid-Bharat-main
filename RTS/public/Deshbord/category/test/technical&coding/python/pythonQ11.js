const questions = [
  { num: 1, question: "1 What does the 'with' statement do in Python?", options: ["Manages context", "Defines loop", "Handles import", "Declares function"], answer: "Manages context", attempted: false, selected: "" },
  { num: 2, question: "2 What does 'yield' keyword do?", options: ["Pauses function and returns value", "Returns multiple values", "Raises error", "Defines loop"], answer: "Pauses function and returns value", attempted: false, selected: "" },
  { num: 3, question: "3 Which module in Python is used for regular expressions?", options: ["re", "regex", "exp", "pattern"], answer: "re", attempted: false, selected: "" },
  { num: 4, question: "4 What is a lambda function?", options: ["Anonymous function", "Looping function", "Recursive function", "Built-in method"], answer: "Anonymous function", attempted: false, selected: "" },
  { num: 5, question: "5 What does the 'pass' statement do?", options: ["Does nothing", "Skips iteration", "Stops program", "Breaks loop"], answer: "Does nothing", attempted: false, selected: "" },
  { num: 6, question: "6 What does isinstance(x, int) check?", options: ["If x is an integer", "If x is float", "If x is list", "If x is None"], answer: "If x is an integer", attempted: false, selected: "" },
  { num: 7, question: "7 Which statement is used to catch exceptions?", options: ["try-except", "if-catch", "try-catch", "catch-error"], answer: "try-except", attempted: false, selected: "" },
  { num: 8, question: "8 How to raise a custom exception?", options: ["raise Exception('Error')", "throw Error", "create error", "exception throw"], answer: "raise Exception('Error')", attempted: false, selected: "" },
  { num: 9, question: "9 What is the purpose of decorators?", options: ["Modify function behavior", "Define class", "Import libraries", "Create loops"], answer: "Modify function behavior", attempted: false, selected: "" },
  { num: 10, question: "10 What is list comprehension?", options: ["Concise way to create lists", "List function", "Loop function", "Set iteration"], answer: "Concise way to create lists", attempted: false, selected: "" },
  { num: 11, question: "11 What does 'zip()' do?", options: ["Pairs elements", "Unzips data", "Compresses lists", "Sorts tuples"], answer: "Pairs elements", attempted: false, selected: "" },
  { num: 12, question: "12 What is the output of list('abc')?", options: ["['a', 'b', 'c']", "['abc']", "['a b c']", "['a','bc']"], answer: "['a', 'b', 'c']", attempted: false, selected: "" },
  { num: 13, question: "13 What does map() return?", options: ["Iterator", "List", "Tuple", "String"], answer: "Iterator", attempted: false, selected: "" },
  { num: 14, question: "14 How do you get the current working directory?", options: ["os.getcwd()", "os.curdir()", "os.path()", "sys.cwd()"], answer: "os.getcwd()", attempted: false, selected: "" },
  { num: 15, question: "15 Which module is used for JSON operations?", options: ["json", "os", "pickle", "csv"], answer: "json", attempted: false, selected: "" },
  { num: 16, question: "16 What does *args allow?", options: ["Variable number of arguments", "Default arguments", "Named arguments", "Keyword arguments"], answer: "Variable number of arguments", attempted: false, selected: "" },
  { num: 17, question: "17 What does **kwargs allow?", options: ["Keyword variable arguments", "Positional arguments", "Return values", "Fixed arguments"], answer: "Keyword variable arguments", attempted: false, selected: "" },
  { num: 18, question: "18 What does the 'global' keyword do?", options: ["Declares global variable", "Creates module", "Declares constant", "Deletes variable"], answer: "Declares global variable", attempted: false, selected: "" },
  { num: 19, question: "19 What is a generator?", options: ["Function that yields values", "Infinite loop", "Static method", "Dictionary"], answer: "Function that yields values", attempted: false, selected: "" },
  { num: 20, question: "20 What is the output of [x for x in range(3)]?", options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "[x, x, x]"], answer: "[0, 1, 2]", attempted: false, selected: "" },
  { num: 21, question: "21 Which built-in can be used to sort a list in reverse?", options: ["sorted(list, reverse=True)", "list.sort(reverse=False)", "reverse(list)", "sort(list)"], answer: "sorted(list, reverse=True)", attempted: false, selected: "" },
  { num: 22, question: "22 What does enumerate() return?", options: ["Index and value", "Only value", "Only index", "List"], answer: "Index and value", attempted: false, selected: "" },
  { num: 23, question: "23 How to create a virtual environment?", options: ["python -m venv env", "pip install venv", "virtualenv install", "env create"], answer: "python -m venv env", attempted: false, selected: "" },
  { num: 24, question: "24 What does '__init__' represent?", options: ["Constructor", "Loop", "Variable", "Destructor"], answer: "Constructor", attempted: false, selected: "" },
  { num: 25, question: "25 Which keyword is used for abstract classes?", options: ["ABC", "abstract", "class", "super"], answer: "ABC", attempted: false, selected: "" },
  { num: 26, question: "26 What is duck typing in Python?", options: ["Type based on behavior", "Static typing", "Strong typing", "Dynamic class"], answer: "Type based on behavior", attempted: false, selected: "" },
  { num: 27, question: "27 What is monkey patching?", options: ["Modify class/function at runtime", "Patch software", "Fix bugs", "Change IDE"], answer: "Modify class/function at runtime", attempted: false, selected: "" },
  { num: 28, question: "28 How do you convert a list to a set?", options: ["set(list)", "list.set()", "convert(set)", "make_set(list)"], answer: "set(list)", attempted: false, selected: "" },
  { num: 29, question: "29 What does the walrus operator do?", options: ["Assigns value in expression", "Divides integers", "Yields generator", "Sets default value"], answer: "Assigns value in expression", attempted: false, selected: "" },
  { num: 30, question: "30 How do you import a specific function from a module?", options: ["from module import func", "import func", "module.func()", "load func from module"], answer: "from module import func", attempted: false, selected: "" },
  { num: 31, question: "31 What is the output of 10 < 20 < 30?", options: ["True", "False", "Error", "None"], answer: "True", attempted: false, selected: "" },
  { num: 32, question: "32 What is a context manager?", options: ["Manages resources with 'with'", "Defines class", "Handles errors", "Creates loops"], answer: "Manages resources with 'with'", attempted: false, selected: "" },
  { num: 33, question: "33 What does hasattr(obj, 'attr') return?", options: ["True if object has attr", "Always False", "Error", "Attr value"], answer: "True if object has attr", attempted: false, selected: "" },
  { num: 34, question: "34 What is the purpose of super()?", options: ["Access parent class", "Call constructor", "Create instance", "Override method"], answer: "Access parent class", attempted: false, selected: "" },
  { num: 35, question: "35 How to reverse a list?", options: ["list[::-1]", "list.reverse()", "reversed(list)", "All of the above"], answer: "All of the above", attempted: false, selected: "" },
  { num: 36, question: "36 What does 'del' keyword do?", options: ["Deletes variable or item", "Defines method", "Stops loop", "Ignores condition"], answer: "Deletes variable or item", attempted: false, selected: "" },
  { num: 37, question: "37 What does __str__() return?", options: ["String representation of object", "String length", "None", "Memory ID"], answer: "String representation of object", attempted: false, selected: "" },
  { num: 38, question: "38 What is slicing?", options: ["Extracting part of sequence", "Creating list", "Deleting item", "Modifying item"], answer: "Extracting part of sequence", attempted: false, selected: "" },
  { num: 39, question: "39 Which function checks if all elements are True?", options: ["all()", "any()", "checkAll()", "filter()"], answer: "all()", attempted: false, selected: "" },
  { num: 40, question: "40 What does the 'not' keyword do?", options: ["Inverts boolean", "Returns True", "Returns False", "None of these"], answer: "Inverts boolean", attempted: false, selected: "" },
  { num: 41, question: "41 What is the result of 'abc'.find('b')?", options: ["1", "0", "2", "-1"], answer: "1", attempted: false, selected: "" },
  { num: 42, question: "42 What is the return type of range()?", options: ["range object", "list", "int", "None"], answer: "range object", attempted: false, selected: "" },
  { num: 43, question: "43 How do you open a file in binary mode?", options: ["'rb'", "'br'", "'binary'", "'b'"], answer: "'rb'", attempted: false, selected: "" },
  { num: 44, question: "44 What is the result of bool([])?", options: ["False", "True", "None", "Error"], answer: "False", attempted: false, selected: "" },
  { num: 45, question: "45 What does __name__ == '__main__' mean?", options: ["Script is run directly", "Script is imported", "Function is called", "Class is defined"], answer: "Script is run directly", attempted: false, selected: "" },
  { num: 46, question: "46 Which operator is overloaded by __add__?", options: ["+", "-", "*", "/"], answer: "+", attempted: false, selected: "" },
  { num: 47, question: "47 What is the default encoding for open() in Python 3?", options: ["utf-8", "ascii", "ansi", "unicode"], answer: "utf-8", attempted: false, selected: "" },
  { num: 48, question: "48 What is 'assert' used for?", options: ["Debug testing", "Create variable", "Looping", "File handling"], answer: "Debug testing", attempted: false, selected: "" },
  { num: 49, question: "49 What is the output of len(set([1,2,2,3]))?", options: ["3", "4", "2", "1"], answer: "3", attempted: false, selected: "" },
  { num: 50, question: "50 What does the time.sleep(1) function do?", options: ["Pauses for 1 second", "Stops code", "Delays input", "Starts timer"], answer: "Pauses for 1 second", attempted: false, selected: "" }
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
