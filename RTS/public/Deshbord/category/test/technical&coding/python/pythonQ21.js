const questions=[
  {
    "num": 1,
    "question_en": "What is the keyword to define a function in Python?",
    "options_en": ["def", "function", "fun", "define"],
    "answer_en": "def",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which of the following is a Python tuple?",
    "options_en": ["(1, 2)", "[1, 2]", "{1, 2}", "<1, 2>"],
    "answer_en": "(1, 2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function returns the length of a list?",
    "options_en": ["length()", "count()", "len()", "size()"],
    "answer_en": "len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the output of 2 ** 3?",
    "options_en": ["6", "8", "9", "5"],
    "answer_en": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of the following is a mutable data type?",
    "options_en": ["tuple", "list", "str", "int"],
    "answer_en": "list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the result of 10 // 3?",
    "options_en": ["3.3", "3", "4", "3.0"],
    "answer_en": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which keyword is used to create a class?",
    "options_en": ["class", "define", "struct", "module"],
    "answer_en": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the default return value of a function that doesn't return anything?",
    "options_en": ["0", "null", "None", "undefined"],
    "answer_en": "None",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function is used to get user input?",
    "options_en": ["input()", "get()", "scanf()", "read()"],
    "answer_en": "input()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword is used for exception handling?",
    "options_en": ["try", "catch", "except", "handle"],
    "answer_en": "except",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which operator is used for string concatenation?",
    "options_en": ["+", "&", "concat", "."],
    "answer_en": "+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to convert a string to lowercase?",
    "options_en": ["lower()", "down()", "tolower()", "strlower()"],
    "answer_en": "lower()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which data structure does not allow duplicate values?",
    "options_en": ["list", "tuple", "set", "dictionary"],
    "answer_en": "set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the output of bool(0)?",
    "options_en": ["True", "False", "0", "Error"],
    "answer_en": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which of the following is used to start a loop?",
    "options_en": ["loop", "for", "repeat", "iterate"],
    "answer_en": "for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method adds an item to the end of a list?",
    "options_en": ["append()", "add()", "insert()", "extend()"],
    "answer_en": "append()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword is used to define an anonymous function?",
    "options_en": ["lambda", "def", "func", "anon"],
    "answer_en": "lambda",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does `len()` return for a dictionary?",
    "options_en": ["Number of keys", "Number of values", "Length of first key", "Length of first value"],
    "answer_en": "Number of keys",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is used to convert a number to a string?",
    "options_en": ["str()", "int()", "toString()", "chr()"],
    "answer_en": "str()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of the following is not a Python keyword?",
    "options_en": ["pass", "eval", "def", "lambda"],
    "answer_en": "eval",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which of these will throw a NameError?",
    "options_en": ["print(x)", "x = 5", "x = 'a'", "x = None"],
    "answer_en": "print(x)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method removes all items from a list?",
    "options_en": ["clear()", "remove()", "delete()", "pop()"],
    "answer_en": "clear()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What does `is` keyword check in Python?",
    "options_en": ["Identity", "Equality", "Inequality", "Membership"],
    "answer_en": "Identity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which function gives the ASCII value of a character?",
    "options_en": ["ord()", "chr()", "ascii()", "code()"],
    "answer_en": "ord()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which module is used to work with dates and times?",
    "options_en": ["datetime", "time", "calendar", "os"],
    "answer_en": "datetime",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which operator checks if a value is in a list?",
    "options_en": ["in", "==", "has", "is"],
    "answer_en": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does `print(type([]))` output?",
    "options_en": ["<class 'list'>", "<type 'list'>", "list", "[]"],
    "answer_en": "<class 'list'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the result of 5 % 2?",
    "options_en": ["1", "2", "0", "2.5"],
    "answer_en": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which of the following can be a dictionary key?",
    "options_en": ["tuple", "list", "set", "dict"],
    "answer_en": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword is used to stop a loop?",
    "options_en": ["break", "stop", "exit", "halt"],
    "answer_en": "break",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 31,
    "question_en": "What does `enumerate()` do in Python?",
    "options_en": ["Returns index and item pairs", "Sorts the list", "Filters a list", "Creates a dictionary"],
    "answer_en": "Returns index and item pairs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method can be used to convert a string to an integer?",
    "options_en": ["int()", "str()", "float()", "eval()"],
    "answer_en": "int()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output of `type({})` in Python?",
    "options_en": ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "<class 'tuple'>"],
    "answer_en": "<class 'dict'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does `list(range(3))` return?",
    "options_en": ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "[1, 2]"],
    "answer_en": "[0, 1, 2]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which statement is used to skip the current iteration in a loop?",
    "options_en": ["continue", "break", "pass", "skip"],
    "answer_en": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which function is used to sort a list in place?",
    "options_en": ["sort()", "sorted()", "order()", "arrange()"],
    "answer_en": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the use of `with` statement in Python?",
    "options_en": ["Handles file context", "Defines class", "Loops through iterable", "Imports modules"],
    "answer_en": "Handles file context",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which module is used for regular expressions in Python?",
    "options_en": ["re", "regex", "rexp", "expression"],
    "answer_en": "re",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is used to convert decimal to hexadecimal?",
    "options_en": ["hex()", "dec()", "to_hex()", "convert_hex()"],
    "answer_en": "hex()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which of the following is used to create an empty set?",
    "options_en": ["set()", "{}", "[]", "emptyset()"],
    "answer_en": "set()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What does the `zip()` function do?",
    "options_en": ["Combines two iterables element-wise", "Zips files", "Joins strings", "Sorts iterables"],
    "answer_en": "Combines two iterables element-wise",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which function is used to convert string to list?",
    "options_en": ["list()", "split()", "toList()", "convert()"],
    "answer_en": "list()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function is used to open a file in Python?",
    "options_en": ["open()", "file()", "read()", "os.open()"],
    "answer_en": "open()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does `int('10', 2)` return?",
    "options_en": ["2", "10", "5", "None"],
    "answer_en": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the output of `type(lambda x: x)`?",
    "options_en": ["<class 'function'>", "<class 'lambda'>", "<type>", "<lambda>"],
    "answer_en": "<class 'function'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method can be used to check if a string ends with a specific character?",
    "options_en": ["endswith()", "end()", "checkend()", "lastchar()"],
    "answer_en": "endswith()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What does `os.listdir()` do?",
    "options_en": ["Lists files in a directory", "Deletes a file", "Creates a directory", "Changes working directory"],
    "answer_en": "Lists files in a directory",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which function is used to generate random numbers?",
    "options_en": ["random()", "rand()", "randomize()", "get_random()"],
    "answer_en": "random()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which of the following is used to import a module?",
    "options_en": ["import", "include", "require", "use"],
    "answer_en": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the output of `bool('')`?",
    "options_en": ["False", "True", "None", "Error"],
    "answer_en": "False",
    "attempted": false,
    "selected": ""
  }
];



let currentQuestion = 0;
let language = "en"; // Default English
let timeLeft = 10800; // 5-minute timer
let timerInterval;

function loadQuestion(index) {
        const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
        const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

        document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
        document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

        const optionsElement = document.getElementById("options");
        optionsElement.innerHTML = "";

        optionsArray.forEach(option => {
                optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
        });

        updateNavigation();
}

function markAttempted(index, selectedAnswer) {
        questions[index].attempted = true;
        questions[index].selected = selectedAnswer;
        updateNavigation();
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

function changeLanguage() {
        language = document.getElementById("languageSelect").value;
        loadQuestion(currentQuestion);
}

function submitQuiz() {
        let confirmation = confirm("Are you sure you want to submit the test?");
        if (!confirmation) return;

        clearInterval(timerInterval);

        let attempted = 0, notAttempted = 0, score = 0;
        const results = [];

        questions.forEach(q => {
                if (q.attempted) {
                        attempted++;
                        if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                                score++;
                        }
                } else {
                        notAttempted++;
                }
                results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
        });

        localStorage.setItem("attempted", attempted);
        localStorage.setItem("notAttempted", notAttempted);
        localStorage.setItem("score", score);
        localStorage.setItem("results", JSON.stringify(results));

        let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
        if (viewResult) {
                window.location.href = "/RTS/Public/Deshbord/category/test/submit-test.html";
        }
}

function startTimer() {
        const timerElement = document.getElementById("timer");
        timeLeft = 180 * 60; // Convert 180 minutes to seconds (180 × 60)

        timerInterval = setInterval(() => {
                if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        alert("Time's up! Submitting the quiz automatically.");
                        submitQuiz();
                } else {
                        const hours = Math.floor(timeLeft / 3600);
                        const minutes = Math.floor((timeLeft % 3600) / 60);
                        const seconds = timeLeft % 60;

                        // Format as HH:MM:SS with leading zeros
                        timerElement.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                        timeLeft--;
                }
        }, 1000);
}
function updateNavigation() {
        const navElement = document.getElementById("circleContainer");
        navElement.innerHTML = "";

        questions.forEach((q, index) => {
                let color = "gray"; // Default not visited
                if (q.attempted) {
                        color = "green"; // Answered
                }
                if (q.selected === "") {
                        color = "gray"; // Not answered
                }
                if (index === currentQuestion) {
                        color = "blue"; // Current question
                }
                navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
        });
}

window.onload = function () {
        loadQuestion(currentQuestion);
        startTimer();
};