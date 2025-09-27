const questions=[
  {
    "num": 1,
    "question_en": "Which of the following is the correct syntax to output 'Hello World' in Python?",
    "options_en": ["echo 'Hello World'", "print('Hello World')", "console.log('Hello World')", "printf('Hello World')"],
    "answer_en": "print('Hello World')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which of the following is not a valid variable name in Python?",
    "options_en": ["my_var", "myVar", "MyVar", "2myVar"],
    "answer_en": "2myVar",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of the following data types is immutable in Python?",
    "options_en": ["list", "set", "tuple", "dictionary"],
    "answer_en": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the output of the following code?\n\n```python\nx = [1, 2, 3]\nprint(x[1])\n```",
    "options_en": ["1", "2", "3", "IndexError"],
    "answer_en": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of the following methods is used to add an element to the end of a list in Python?",
    "options_en": ["add()", "append()", "insert()", "extend()"],
    "answer_en": "append()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following is used to create a dictionary in Python?",
    "options_en": ["{}", "[]", "()", "<>"],
    "answer_en": "{}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which of the following is not a valid Python keyword?",
    "options_en": ["def", "class", "function", "return"],
    "answer_en": "function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which of the following functions is used to get the length of a list in Python?",
    "options_en": ["len()", "length()", "count()", "size()"],
    "answer_en": "len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of the following is used to handle exceptions in Python?",
    "options_en": ["try", "catch", "finally", "exception"],
    "answer_en": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of the following is the correct syntax to create a function in Python?",
    "options_en": ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"],
    "answer_en": "def myFunc():",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is used to import a module in Python?",
    "options_en": ["import module_name", "include module_name", "use module_name", "require module_name"],
    "answer_en": "import module_name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which of the following is the correct syntax to create a class in Python?",
    "options_en": ["class MyClass:", "MyClass class:", "class MyClass{}", "class: MyClass"],
    "answer_en": "class MyClass:",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which of the following is used to remove an element from a list in Python?",
    "options_en": ["remove()", "delete()", "pop()", "All of the above"],
    "answer_en": "All of the above",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which of the following is used to concatenate two strings in Python?",
    "options_en": ["+", ".", "&", "*"],
    "answer_en": "+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which of the following is used to repeat a string in Python?",
    "options_en": ["*", ".", "+", "&"],
    "answer_en": "*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which of the following is used to check if a value exists in a list in Python?",
    "options_en": ["in", "exists", "contains", "has"],
    "answer_en": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which of the following is used to check if a value does not exist in a list in Python?",
    "options_en": ["not in", "not exists", "not contains", "not has"],
    "answer_en": "not in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which of the following is used to get the index of an element in a list in Python?",
    "options_en": ["index()", "get()", "find()", "position()"],
    "answer_en": "index()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which of the following is used to sort a list in Python?",
    "options_en": ["sort()", "sorted()", "order()", "arrange()"],
    "answer_en": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of the following is used to reverse a list in Python?",
    "options_en": ["reverse()", "reversed()", "flip()", "invert()"],
    "answer_en": "reverse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which of the following is used to get the maximum value from a list in Python?",
    "options_en": ["max()", "maximum()", "largest()", "biggest()"],
    "answer_en": "max()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which of the following is used to get the minimum value from a list in Python?",
    "options_en": ["min()", "minimum()", "smallest()", "least()"],
    "answer_en": "min()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of the following is used to get the sum of all elements in a list in Python?",
    "options_en": ["sum()", "total()", "add()", "accumulate()"],
    "answer_en": "sum()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which of the following is used to get the average of all elements in a list in Python?",
    "options_en": ["mean()", "average()", "avg()", "sum() / len()"],
    "answer_en": "sum() / len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of the following is used to get the length of a string in Python?",
    "options_en": ["len()", "length()", "count()", "size()"],
    "answer_en": "len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which of the following is used to convert a string to lowercase in Python?",
    "options_en": ["lower()", "downcase()", "tolower()", "lc()"],
    "answer_en": "lower()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which of the following is used to convert a string to uppercase in Python?",
    "options_en": ["upper()", "upcase()", "toupper()", "uc()"],
    "answer_en": "upper()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which of the following is used to strip whitespace from the beginning and end of a string in Python?",
    "options_en": ["strip()", "trim()", "chomp()", "clean()"],
    "answer_en": "strip()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which of the following is used to split a string into a list in Python?",
    "options_en": ["split()", "divide()", "cut()", "break()"],
    "answer_en": "split()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which of the following is used to join a list into a string in Python?",
    "options_en": ["join()", "concatenate()", "combine()", "merge()"],
    "answer_en": "join()",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 31,
    "question_en": "Which method is used to replace a substring in a string in Python?",
    "options_en": ["replace()", "sub()", "change()", "update()"],
    "answer_en": "replace()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which of the following is the correct way to create a set in Python?",
    "options_en": ["set()", "{}", "[]", "()"],
    "answer_en": "set()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method is used to add an element to a set?",
    "options_en": ["add()", "append()", "insert()", "push()"],
    "answer_en": "add()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the pop() method do on a set?",
    "options_en": ["Removes a random element", "Removes the last element", "Removes a specific element", "Throws error"],
    "answer_en": "Removes a random element",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword is used to define an anonymous function in Python?",
    "options_en": ["lambda", "def", "anon", "function"],
    "answer_en": "lambda",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which of the following is used to iterate over a sequence in Python?",
    "options_en": ["for", "while", "loop", "repeat"],
    "answer_en": "for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the result of 4 == 4.0 in Python?",
    "options_en": ["True", "False", "TypeError", "None"],
    "answer_en": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What will `bool('False')` return?",
    "options_en": ["True", "False", "None", "Error"],
    "answer_en": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method is used to convert a list into a tuple?",
    "options_en": ["tuple()", "list()", "toTuple()", "make_tuple()"],
    "answer_en": "tuple()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which built-in function returns the Unicode code of a character?",
    "options_en": ["ord()", "chr()", "ascii()", "unicode()"],
    "answer_en": "ord()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which of the following file modes is used to read a file?",
    "options_en": ["'r'", "'w'", "'a'", "'x'"],
    "answer_en": "'r'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does `open('file.txt', 'a')` do?",
    "options_en": ["Appends to file", "Reads file", "Overwrites file", "Creates new file"],
    "answer_en": "Appends to file",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method reads the entire content of a file?",
    "options_en": ["read()", "readline()", "readlines()", "input()"],
    "answer_en": "read()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which module in Python is used for regular expressions?",
    "options_en": ["re", "regex", "match", "string"],
    "answer_en": "re",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword is used to define a generator in Python?",
    "options_en": ["yield", "return", "generator", "gen"],
    "answer_en": "yield",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the output of `type([])`?",
    "options_en": ["<class 'list'>", "<type 'list'>", "list", "[]"],
    "answer_en": "<class 'list'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method returns the number of items in a dictionary?",
    "options_en": ["len()", "count()", "size()", "length()"],
    "answer_en": "len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which of the following methods removes all items from a dictionary?",
    "options_en": ["clear()", "remove()", "pop()", "del"],
    "answer_en": "clear()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword is used to handle exceptions in Python?",
    "options_en": ["try", "catch", "except", "handle"],
    "answer_en": "except",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Python keyword ensures a block of code runs no matter what?",
    "options_en": ["finally", "ensure", "always", "catch"],
    "answer_en": "finally",
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