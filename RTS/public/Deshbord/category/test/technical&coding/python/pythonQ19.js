const questions=[
  {
    "num": 1,
    "question_en": "Which method is used to add an element at the end of a list?",
    "question_hi": "लिस्ट के अंत में एक एलिमेंट जोड़ने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["append()", "insert()", "extend()", "add()"],
    "options_hi": ["append()", "insert()", "extend()", "add()"],
    "answer_en": "append()",
    "answer_hi": "append()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the output of `print(2 ** 3 ** 2)`?",
    "question_hi": "`print(2 ** 3 ** 2)` का आउटपुट क्या होगा?",
    "options_en": ["64", "512", "256", "SyntaxError"],
    "options_hi": ["64", "512", "256", "सिंटैक्सएरर"],
    "answer_en": "512",
    "answer_hi": "512",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which module is used for HTTP requests?",
    "question_hi": "HTTP रिक्वेस्ट्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["http", "requests", "urllib", "socket"],
    "options_hi": ["http", "requests", "urllib", "socket"],
    "answer_en": "requests",
    "answer_hi": "requests",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does `__name__ == '__main__'` do?",
    "question_hi": "`__name__ == '__main__'` क्या करता है?",
    "options_en": ["Checks if the script is imported", "Runs the script directly", "Defines a main function", "Both A and B"],
    "options_hi": ["चेक करता है कि स्क्रिप्ट इम्पोर्ट की गई है", "स्क्रिप्ट को डायरेक्ट रन करता है", "मेन फंक्शन डिफाइन करता है", "A और B दोनों"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which decorator caches function results?",
    "question_hi": "कौन सा डेकोरेटर फंक्शन रिजल्ट्स को कैश करता है?",
    "options_en": ["@cache", "@lru_cache", "@memoize", "@remember"],
    "options_hi": ["@cache", "@lru_cache", "@memoize", "@remember"],
    "answer_en": "@lru_cache",
    "answer_hi": "@lru_cache",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the output of `'Python'.lower()`?",
    "question_hi": "`'Python'.lower()` का आउटपुट क्या है?",
    "options_en": ["PYTHON", "python", "Python", "Error"],
    "options_hi": ["PYTHON", "python", "Python", "एरर"],
    "answer_en": "python",
    "answer_hi": "python",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which method converts a dictionary to JSON?",
    "question_hi": "डिक्शनरी को JSON में कौन सी मेथड कन्वर्ट करती है?",
    "options_en": ["json.dumps()", "dict.to_json()", "jsonify()", "serialize()"],
    "options_hi": ["json.dumps()", "dict.to_json()", "jsonify()", "serialize()"],
    "answer_en": "json.dumps()",
    "answer_hi": "json.dumps()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does `'Hello'.count('l')` return?",
    "question_hi": "`'Hello'.count('l')` क्या रिटर्न करता है?",
    "options_en": ["1", "2", "3", "0"],
    "options_hi": ["1", "2", "3", "0"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which operator is used for floor division?",
    "question_hi": "फ्लोर डिवीजन के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["/", "//", "%", "|"],
    "options_hi": ["/", "//", "%", "|"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the output of `bool([])`?",
    "question_hi": "`bool([])` का आउटपुट क्या है?",
    "options_en": ["True", "False", "None", "Error"],
    "options_hi": ["True", "False", "None", "एरर"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which module is used for multithreading?",
    "question_hi": "मल्टीथ्रेडिंग के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["threading", "multiprocessing", "async", "concurrent"],
    "options_hi": ["threading", "multiprocessing", "async", "concurrent"],
    "answer_en": "threading",
    "answer_hi": "threading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does `'Python'.endswith('n')` return?",
    "question_hi": "`'Python'.endswith('n')` क्या रिटर्न करता है?",
    "options_en": ["True", "False", "n", "Error"],
    "options_hi": ["True", "False", "n", "एरर"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method removes all items from a dictionary?",
    "question_hi": "डिक्शनरी से सभी आइटम्स हटाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["clear()", "remove()", "delete()", "purge()"],
    "options_hi": ["clear()", "remove()", "delete()", "purge()"],
    "answer_en": "clear()",
    "answer_hi": "clear()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the output of `' '.join(['a', 'b', 'c'])`?",
    "question_hi": "`' '.join(['a', 'b', 'c'])` का आउटपुट क्या है?",
    "options_en": ["a b c", "abc", "a,b,c", "Error"],
    "options_hi": ["a b c", "abc", "a,b,c", "एरर"],
    "answer_en": "a b c",
    "answer_hi": "a b c",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function returns the memory address of an object?",
    "question_hi": "ऑब्जेक्ट के मेमोरी एड्रेस को कौन सा फंक्शन रिटर्न करता है?",
    "options_en": ["id()", "address()", "mem()", "hex()"],
    "options_hi": ["id()", "address()", "mem()", "hex()"],
    "answer_en": "id()",
    "answer_hi": "id()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does `'Python'.islower()` return?",
    "question_hi": "`'Python'.islower()` क्या रिटर्न करता है?",
    "options_en": ["True", "False", "None", "Error"],
    "options_hi": ["True", "False", "None", "एरर"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which module is used for working with ZIP files?",
    "question_hi": "ZIP फाइल्स के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["zipfile", "gzip", "tarfile", "compress"],
    "options_hi": ["zipfile", "gzip", "tarfile", "compress"],
    "answer_en": "zipfile",
    "answer_hi": "zipfile",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the output of `'Python'[::2]`?",
    "question_hi": "`'Python'[::2]` का आउटपुट क्या है?",
    "options_en": ["Pto", "yhn", "Python", "Error"],
    "options_hi": ["Pto", "yhn", "Python", "एरर"],
    "answer_en": "Pto",
    "answer_hi": "Pto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method returns the current working directory?",
    "question_hi": "करंट वर्किंग डायरेक्टरी को कौन सी मेथड रिटर्न करती है?",
    "options_en": ["os.getcwd()", "os.cwd()", "os.path()", "os.dir()"],
    "options_hi": ["os.getcwd()", "os.cwd()", "os.path()", "os.dir()"],
    "answer_en": "os.getcwd()",
    "answer_hi": "os.getcwd()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does `'Python'.split('t')` return?",
    "question_hi": "`'Python'.split('t')` क्या रिटर्न करता है?",
    "options_en": ["['Py', 'hon']", "['Pyth', 'on']", "['P', 'hon']", "Error"],
    "options_hi": ["['Py', 'hon']", "['Pyth', 'on']", "['P', 'hon']", "एरर"],
    "answer_en": "['Py', 'hon']",
    "answer_hi": "['Py', 'hon']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function returns the largest item in an iterable?",
    "question_hi": "इटरेबल में सबसे बड़े आइटम को कौन सा फंक्शन रिटर्न करता है?",
    "options_en": ["max()", "largest()", "big()", "top()"],
    "options_hi": ["max()", "largest()", "big()", "top()"],
    "answer_en": "max()",
    "answer_hi": "max()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the output of `'Python'.find('z')`?",
    "question_hi": "`'Python'.find('z')` का आउटपुट क्या है?",
    "options_en": ["0", "-1", "Error", "None"],
    "options_hi": ["0", "-1", "एरर", "None"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which module is used for SQLite databases?",
    "question_hi": "SQLite डेटाबेस के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["sqlite3", "pysqlite", "sql", "db.sqlite"],
    "options_hi": ["sqlite3", "pysqlite", "sql", "db.sqlite"],
    "answer_en": "sqlite3",
    "answer_hi": "sqlite3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does `'Python'.isnumeric()` return?",
    "question_hi": "`'Python'.isnumeric()` क्या रिटर्न करता है?",
    "options_en": ["True", "False", "None", "Error"],
    "options_hi": ["True", "False", "None", "एरर"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method returns a list of dictionary keys?",
    "question_hi": "डिक्शनरी कीज़ की लिस्ट कौन सी मेथड रिटर्न करती है?",
    "options_en": ["keys()", "items()", "values()", "get_keys()"],
    "options_hi": ["keys()", "items()", "values()", "get_keys()"],
    "answer_en": "keys()",
    "answer_hi": "keys()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the output of `'Python'.upper().lower()`?",
    "question_hi": "`'Python'.upper().lower()` का आउटपुट क्या है?",
    "options_en": ["PYTHON", "python", "Python", "Error"],
    "options_hi": ["PYTHON", "python", "Python", "एरर"],
    "answer_en": "python",
    "answer_hi": "python",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which module is used for random number generation?",
    "question_hi": "रैंडम नंबर जनरेशन के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["random", "numpy", "math", "statistics"],
    "options_hi": ["random", "numpy", "math", "statistics"],
    "answer_en": "random",
    "answer_hi": "random",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does `'Python'.replace('Python', 'Java')` return?",
    "question_hi": "`'Python'.replace('Python', 'Java')` क्या रिटर्न करता है?",
    "options_en": ["Python", "Java", "Error", "None"],
    "options_hi": ["Python", "Java", "एरर", "None"],
    "answer_en": "Java",
    "answer_hi": "Java",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function returns the smallest item in an iterable?",
    "question_hi": "इटरेबल में सबसे छोटे आइटम को कौन सा फंक्शन रिटर्न करता है?",
    "options_en": ["min()", "smallest()", "little()", "bottom()"],
    "options_hi": ["min()", "smallest()", "little()", "bottom()"],
    "answer_en": "min()",
    "answer_hi": "min()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the output of `'Python'.index('t')`?",
    "question_hi": "`'Python'.index('t')` का आउटपुट क्या है?",
    "options_en": ["2", "3", "-1", "Error"],
    "options_hi": ["2", "3", "-1", "एरर"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which method returns a list of dictionary values?",
    "question_hi": "डिक्शनरी वैल्यूज़ की लिस्ट कौन सी मेथड रिटर्न करती है?",
    "options_en": ["keys()", "items()", "values()", "get_values()"],
    "options_hi": ["keys()", "items()", "values()", "get_values()"],
    "answer_en": "values()",
    "answer_hi": "values()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does `'Python'.isupper()` return?",
    "question_hi": "`'Python'.isupper()` क्या रिटर्न करता है?",
    "options_en": ["True", "False", "None", "Error"],
    "options_hi": ["True", "False", "None", "एरर"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which module is used for working with dates?",
    "question_hi": "डेट्स के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["time", "datetime", "calendar", "date"],
    "options_hi": ["time", "datetime", "calendar", "date"],
    "answer_en": "datetime",
    "answer_hi": "datetime",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the output of `'Python'.capitalize()`?",
    "question_hi": "`'Python'.capitalize()` का आउटपुट क्या है?",
    "options_en": ["python", "PYTHON", "Python", "Error"],
    "options_hi": ["python", "PYTHON", "Python", "एरर"],
    "answer_en": "Python",
    "answer_hi": "Python",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function returns the length of an object?",
    "question_hi": "ऑब्जेक्ट की लंबाई कौन सा फंक्शन रिटर्न करता है?",
    "options_en": ["len()", "length()", "size()", "count()"],
    "options_hi": ["len()", "length()", "size()", "count()"],
    "answer_en": "len()",
    "answer_hi": "len()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does `'Python'.startswith('P')` return?",
    "question_hi": "`'Python'.startswith('P')` क्या रिटर्न करता है?",
    "options_en": ["True", "False", "P", "Error"],
    "options_hi": ["True", "False", "P", "एरर"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which module is used for mathematical operations?",
    "question_hi": "गणितीय ऑपरेशन्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["math", "numpy", "calc", "algebra"],
    "options_hi": ["math", "numpy", "calc", "algebra"],
    "answer_en": "math",
    "answer_hi": "math",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the output of `'Python'.swapcase()`?",
    "question_hi": "`'Python'.swapcase()` का आउटपुट क्या है?",
    "options_en": ["PYTHON", "python", "pYTHON", "Error"],
    "options_hi": ["PYTHON", "python", "pYTHON", "एरर"],
    "answer_en": "pYTHON",
    "answer_hi": "pYTHON",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method returns a list of dictionary key-value pairs?",
    "question_hi": "डिक्शनरी की-वैल्यू पेयर्स की लिस्ट कौन सी मेथड रिटर्न करती है?",
    "options_en": ["keys()", "items()", "values()", "pairs()"],
    "options_hi": ["keys()", "items()", "values()", "pairs()"],
    "answer_en": "items()",
    "answer_hi": "items()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does `'Python'.title()` return?",
    "question_hi": "`'Python'.title()` क्या रिटर्न करता है?",
    "options_en": ["PYTHON", "python", "Python", "Error"],
    "options_hi": ["PYTHON", "python", "Python", "एरर"],
    "answer_en": "Python",
    "answer_hi": "Python",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which module is used for file operations?",
    "question_hi": "फाइल ऑपरेशन्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["file", "os", "sys", "io"],
    "options_hi": ["file", "os", "sys", "io"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the output of `'Python'.zfill(10)`?",
    "question_hi": "`'Python'.zfill(10)` का आउटपुट क्या है?",
    "options_en": ["Python", "0000Python", "Python0000", "Error"],
    "options_hi": ["Python", "0000Python", "Python0000", "एरर"],
    "answer_en": "0000Python",
    "answer_hi": "0000Python",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method checks if a string contains only digits?",
    "question_hi": "कौन सी मेथड चेक करती है कि स्ट्रिंग में केवल डिजिट्स हैं?",
    "options_en": ["isalpha()", "isdigit()", "isalnum()", "isnumeric()"],
    "options_hi": ["isalpha()", "isdigit()", "isalnum()", "isnumeric()"],
    "answer_en": "isdigit()",
    "answer_hi": "isdigit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does `'Python'.center(10, '*')` return?",
    "question_hi": "`'Python'.center(10, '*')` क्या रिटर्न करता है?",
    "options_en": ["**Python**", "Python****", "****Python", "Error"],
    "options_hi": ["**Python**", "Python****", "****Python", "एरर"],
    "answer_en": "**Python**",
    "answer_hi": "**Python**",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which module is used for system-specific parameters?",
    "question_hi": "सिस्टम-स्पेसिफिक पैरामीटर्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["sys", "os", "platform", "system"],
    "options_hi": ["sys", "os", "platform", "system"],
    "answer_en": "sys",
    "answer_hi": "sys",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the output of `'Python'.ljust(10, '-')`?",
    "question_hi": "`'Python'.ljust(10, '-')` का आउटपुट क्या है?",
    "options_en": ["Python----", "----Python", "Python", "Error"],
    "options_hi": ["Python----", "----Python", "Python", "एरर"],
    "answer_en": "Python----",
    "answer_hi": "Python----",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method checks if a string contains only letters?",
    "question_hi": "कौन सी मेथड चेक करती है कि स्ट्रिंग में केवल लेटर्स हैं?",
    "options_en": ["isalpha()", "isdigit()", "isalnum()", "isnumeric()"],
    "options_hi": ["isalpha()", "isdigit()", "isalnum()", "isnumeric()"],
    "answer_en": "isalpha()",
    "answer_hi": "isalpha()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does `'Python'.rjust(10, '-')` return?",
    "question_hi": "`'Python'.rjust(10, '-')` क्या रिटर्न करता है?",
    "options_en": ["Python----", "----Python", "Python", "Error"],
    "options_hi": ["Python----", "----Python", "Python", "एरर"],
    "answer_en": "----Python",
    "answer_hi": "----Python",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which module is used for command-line arguments?",
    "question_hi": "कमांड-लाइन आर्ग्युमेंट्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["argparse", "sys", "getopt", "All of the above"],
    "options_hi": ["argparse", "sys", "getopt", "सभी"],
    "answer_en": "All of the above",
    "answer_hi": "सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does `'Python'.partition('t')` return?",
    "question_hi": "`'Python'.partition('t')` क्या रिटर्न करता है?",
    "options_en": ["('Py', 't', 'hon')", "('Pyth', 'on')", "('Python',)", "Error"],
    "options_hi": ["('Py', 't', 'hon')", "('Pyth', 'on')", "('Python',)", "एरर"],
    "answer_en": "('Py', 't', 'hon')",
    "answer_hi": "('Py', 't', 'hon')",
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