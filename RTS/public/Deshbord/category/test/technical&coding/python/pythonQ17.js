const questions=[
  {
    "num": 1,
    "question_en": "What keyword is used to create a function in Python?",
    "question_hi": "Python में फ़ंक्शन बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["def", "function", "fun", "create"],
    "options_hi": ["def", "function", "fun", "create"],
    "answer_en": "def",
    "answer_hi": "def",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which symbol is used for comments in Python?",
    "question_hi": "Python में कमेंट्स के लिए कौन सा चिन्ह उपयोग होता है?",
    "options_en": ["#", "//", "/* */", "<!-- -->"],
    "options_hi": ["#", "//", "/* */", "<!-- -->"],
    "answer_en": "#",
    "answer_hi": "#",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the output of print(5 // 2)?",
    "question_hi": "print(5 // 2) का आउटपुट क्या होगा?",
    "options_en": ["2", "2.5", "3", "Error"],
    "options_hi": ["2", "2.5", "3", "Error"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which method converts all characters in a string to uppercase?",
    "question_hi": "किस method से स्ट्रिंग के सभी अक्षर uppercase में बदल जाते हैं?",
    "options_en": ["upper()", "capitalize()", "lower()", "title()"],
    "options_hi": ["upper()", "capitalize()", "lower()", "title()"],
    "answer_en": "upper()",
    "answer_hi": "upper()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "How do you start a for loop in Python?",
    "question_hi": "Python में for loop कैसे शुरू करते हैं?",
    "options_en": ["for i in range():", "for(i=0; i<10; i++)", "foreach i in range()", "loop for i in range()"],
    "options_hi": ["for i in range():", "for(i=0; i<10; i++)", "foreach i in range()", "loop for i in range()"],
    "answer_en": "for i in range():",
    "answer_hi": "for i in range():",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which data type is immutable in Python?",
    "question_hi": "Python में कौन सा डेटा टाइप immutable है?",
    "options_en": ["tuple", "list", "set", "dict"],
    "options_hi": ["tuple", "list", "set", "dict"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does the 'len()' function do?",
    "question_hi": "'len()' फंक्शन क्या करता है?",
    "options_en": ["Returns the length of an object", "Deletes an object", "Adds elements", "Prints the object"],
    "options_hi": ["किसी वस्तु की लंबाई लौटाता है", "वस्तु को हटाता है", "तत्व जोड़ता है", "वस्तु को प्रिंट करता है"],
    "answer_en": "Returns the length of an object",
    "answer_hi": "किसी वस्तु की लंबाई लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword is used for exception handling in Python?",
    "question_hi": "Python में exception handling के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try", "catch", "handle", "except"],
    "options_hi": ["try", "catch", "handle", "except"],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What will be the output of print(bool(0))?",
    "question_hi": "print(bool(0)) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "0", "Error"],
    "options_hi": ["False", "True", "0", "Error"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which operator is used for string concatenation in Python?",
    "question_hi": "Python में string जोड़ने के लिए कौन सा operator उपयोग होता है?",
    "options_en": ["+", "-", "*", "/"],
    "options_hi": ["+", "-", "*", "/"],
    "answer_en": "+",
    "answer_hi": "+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which keyword is used to define a class in Python?",
    "question_hi": "Python में क्लास बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["class", "def", "object", "module"],
    "options_hi": ["class", "def", "object", "module"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "How do you create a list in Python?",
    "question_hi": "Python में सूची (list) कैसे बनाते हैं?",
    "options_en": ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
    "options_hi": ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
    "answer_en": "[1, 2, 3]",
    "answer_hi": "[1, 2, 3]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method removes the last item from a list?",
    "question_hi": "कौन सा method सूची से आखिरी आइटम हटाता है?",
    "options_en": ["pop()", "remove()", "del", "clear()"],
    "options_hi": ["pop()", "remove()", "del", "clear()"],
    "answer_en": "pop()",
    "answer_hi": "pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the output of print(type({}))?",
    "question_hi": "print(type({})) का आउटपुट क्या होगा?",
    "options_en": ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "<class 'tuple'>"],
    "options_hi": ["<class 'dict'>", "<class 'set'>", "<class 'list'>", "<class 'tuple'>"],
    "answer_en": "<class 'dict'>",
    "answer_hi": "<class 'dict'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does the 'break' statement do in a loop?",
    "question_hi": "लूप में 'break' स्टेटमेंट क्या करता है?",
    "options_en": ["Terminates the loop", "Skips current iteration", "Continues loop", "None of the above"],
    "options_hi": ["लूप को समाप्त करता है", "वर्तमान पुनरावृत्ति छोड़ता है", "लूप जारी रखता है", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Terminates the loop",
    "answer_hi": "लूप को समाप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which of these is a Python keyword?",
    "question_hi": "इनमें से कौन सा Python कीवर्ड है?",
    "options_en": ["pass", "fetch", "join", "select"],
    "options_hi": ["pass", "fetch", "join", "select"],
    "answer_en": "pass",
    "answer_hi": "pass",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "How do you start a Python interpreter from the command line?",
    "question_hi": "कमांड लाइन से Python interpreter कैसे शुरू करते हैं?",
    "options_en": ["python", "run python", "start python", "execute python"],
    "options_hi": ["python", "run python", "start python", "execute python"],
    "answer_en": "python",
    "answer_hi": "python",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which of the following is used to create an empty set?",
    "question_hi": "खाली सेट बनाने के लिए कौन सा उपयोग होता है?",
    "options_en": ["set()", "{}", "[]", "()"],
    "options_hi": ["set()", "{}", "[]", "()"],
    "answer_en": "set()",
    "answer_hi": "set()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the output of print(3 * 'ab')?",
    "question_hi": "print(3 * 'ab') का आउटपुट क्या होगा?",
    "options_en": ["ababab", "ab3", "3ab", "Error"],
    "options_hi": ["ababab", "ab3", "3ab", "Error"],
    "answer_en": "ababab",
    "answer_hi": "ababab",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of the following converts a string to a list of characters?",
    "question_hi": "स्ट्रिंग को अक्षरों की सूची में बदलने के लिए कौन सा उपयोग होता है?",
    "options_en": ["list()", "dict()", "set()", "tuple()"],
    "options_hi": ["list()", "dict()", "set()", "tuple()"],
    "answer_en": "list()",
    "answer_hi": "list()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the output of print(10 % 3)?",
    "question_hi": "print(10 % 3) का आउटपुट क्या होगा?",
    "options_en": ["1", "3", "0", "Error"],
    "options_hi": ["1", "3", "0", "Error"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method returns a string in lowercase?",
    "question_hi": "कौन सा method स्ट्रिंग को lowercase में बदलता है?",
    "options_en": ["lower()", "upper()", "capitalize()", "casefold()"],
    "options_hi": ["lower()", "upper()", "capitalize()", "casefold()"],
    "answer_en": "lower()",
    "answer_hi": "lower()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function is used to output text to the console?",
    "question_hi": "कंसोल में टेक्स्ट दिखाने के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["print()", "echo()", "write()", "display()"],
    "options_hi": ["print()", "echo()", "write()", "display()"],
    "answer_en": "print()",
    "answer_hi": "print()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the output of print(bool(''))?",
    "question_hi": "print(bool('')) का आउटपुट क्या होगा?",
    "options_en": ["False", "True", "None", "Error"],
    "options_hi": ["False", "True", "None", "Error"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of the following is used to create a generator in Python?",
    "question_hi": "Python में generator बनाने के लिए क्या उपयोग होता है?",
    "options_en": ["yield", "return", "generate", "produce"],
    "options_hi": ["yield", "return", "generate", "produce"],
    "answer_en": "yield",
    "answer_hi": "yield",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "How do you declare a variable in Python?",
    "question_hi": "Python में वेरिएबल कैसे डिक्लेयर करते हैं?",
    "options_en": ["variable_name = value", "var variable_name = value", "declare variable_name = value", "let variable_name = value"],
    "options_hi": ["variable_name = value", "var variable_name = value", "declare variable_name = value", "let variable_name = value"],
    "answer_en": "variable_name = value",
    "answer_hi": "variable_name = value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which of the following is a Python built-in data structure?",
    "question_hi": "निम्न में से कौन सा Python में बिल्ट-इन डेटा स्ट्रक्चर है?",
    "options_en": ["list", "tree", "graph", "stack"],
    "options_hi": ["list", "tree", "graph", "stack"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },
 
  {
    "num": 28,
    "question_en": "What is the output of print(2 ** 3)?",
    "question_hi": "print(2 ** 3) का आउटपुट क्या होगा?",
    "options_en": ["6", "8", "9", "5"],
    "options_hi": ["6", "8", "9", "5"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "How do you start a comment in Python?",
    "question_hi": "Python में टिप्पणी कैसे शुरू करते हैं?",
    "options_en": ["//", "#", "<!--", "**"],
    "options_hi": ["//", "#", "<!--", "**"],
    "answer_en": "#",
    "answer_hi": "#",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What will be the output of print('Hello' + 'World')?",
    "question_hi": "print('Hello' + 'World') का आउटपुट क्या होगा?",
    "options_en": ["Hello World", "HelloWorld", "\"HelloWorld\"", "Hello+World"],
    "options_hi": ["Hello World", "HelloWorld", "\"HelloWorld\"", "Hello+World"],
    "answer_en": "HelloWorld",
    "answer_hi": "HelloWorld",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which of the following is used to define a function in Python?",
    "question_hi": "Python में फ़ंक्शन परिभाषित करने के लिए कौन सा उपयोग होता है?",
    "options_en": ["function", "def", "define", "func"],
    "options_hi": ["function", "def", "define", "func"],
    "answer_en": "def",
    "answer_hi": "def",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What will be the output of print(bool(0))?",
    "question_hi": "print(bool(0)) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "0", "None"],
    "options_hi": ["True", "False", "0", "None"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which of the following is a mutable data type in Python?",
    "question_hi": "Python में कौन सा डेटा प्रकार परिवर्तनीय है?",
    "options_en": ["Tuple", "String", "List", "Integer"],
    "options_hi": ["Tuple", "String", "List", "Integer"],
    "answer_en": "List",
    "answer_hi": "List",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the len() function do?",
    "question_hi": "len() फ़ंक्शन क्या करता है?",
    "options_en": ["Returns the length of a string", "Returns the number of items in a list", "Both A and B", "None of the above"],
    "options_hi": ["स्ट्रिंग की लंबाई लौटाता है", "सूची में आइटम की संख्या लौटाता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword is used to create a class in Python?",
    "question_hi": "Python में क्लास बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["class", "def", "object", "module"],
    "options_hi": ["class", "def", "object", "module"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What will be the output of print(3 * 'A')?",
    "question_hi": "print(3 * 'A') का आउटपुट क्या होगा?",
    "options_en": ["AAA", "3A", "A3", "Error"],
    "options_hi": ["AAA", "3A", "A3", "Error"],
    "answer_en": "AAA",
    "answer_hi": "AAA",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which operator is used to check if a value exists in a list?",
    "question_hi": "सूची में मान मौजूद है या नहीं यह जांचने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["in", "exists", "has", "contains"],
    "options_hi": ["in", "exists", "has", "contains"],
    "answer_en": "in",
    "answer_hi": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the output of print(type([]))?",
    "question_hi": "print(type([])) का आउटपुट क्या होगा?",
    "options_en": ["<class 'list'>", "<class 'dict'>", "<class 'tuple'>", "<class 'set'>"],
    "options_hi": ["<class 'list'>", "<class 'dict'>", "<class 'tuple'>", "<class 'set'>"],
    "answer_en": "<class 'list'>",
    "answer_hi": "<class 'list'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which statement is used to handle exceptions in Python?",
    "question_hi": "Python में अपवादों को संभालने के लिए कौन सा कथन उपयोग होता है?",
    "options_en": ["try…catch", "try…except", "handle…except", "catch…finally"],
    "options_hi": ["try…catch", "try…except", "handle…except", "catch…finally"],
    "answer_en": "try…except",
    "answer_hi": "try…except",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What will be the output of print(10 % 3)?",
    "question_hi": "print(10 % 3) का आउटपुट क्या होगा?",
    "options_en": ["1", "3", "0", "10"],
    "options_hi": ["1", "3", "0", "10"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "How do you create a function in Python that takes two parameters?",
    "question_hi": "Python में दो पैरामीटर लेने वाला फ़ंक्शन कैसे बनाते हैं?",
    "options_en": ["def function(param1, param2):", "function(param1, param2):", "create function(param1, param2):", "function: param1, param2"],
    "options_hi": ["def function(param1, param2):", "function(param1, param2):", "create function(param1, param2):", "function: param1, param2"],
    "answer_en": "def function(param1, param2):",
    "answer_hi": "def function(param1, param2):",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What will be the output of print('Python'[-1])?",
    "question_hi": "print('Python'[-1]) का आउटपुट क्या होगा?",
    "options_en": ["n", "P", "Error", "o"],
    "options_hi": ["n", "P", "Error", "o"],
    "answer_en": "n",
    "answer_hi": "n",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which of the following is a correct way to import a module in Python?",
    "question_hi": "Python में एक मॉड्यूल आयात करने का सही तरीका कौन सा है?",
    "options_en": ["import module_name", "include module_name", "require module_name", "load module_name"],
    "options_hi": ["import module_name", "include module_name", "require module_name", "load module_name"],
    "answer_en": "import module_name",
    "answer_hi": "import module_name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the output of print('abc' * 3)?",
    "question_hi": "print('abc' * 3) का आउटपुट क्या होगा?",
    "options_en": ["abcabcabc", "abc abc abc", "Error", "3abc"],
    "options_hi": ["abcabcabc", "abc abc abc", "Error", "3abc"],
    "answer_en": "abcabcabc",
    "answer_hi": "abcabcabc",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method is used to add an element to a list in Python?",
    "question_hi": "Python में सूची में तत्व जोड़ने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["add()", "append()", "insert()", "push()"],
    "options_hi": ["add()", "append()", "insert()", "push()"],
    "answer_en": "append()",
    "answer_hi": "append()",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 46,
    "question_en": "What is the output of print('Hello'[1:4])?",
    "question_hi": "print('Hello'[1:4]) का आउटपुट क्या होगा?",
    "options_en": ["ell", "Hel", "llo", "lo"],
    "options_hi": ["ell", "Hel", "llo", "lo"],
    "answer_en": "ell",
    "answer_hi": "ell",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used to convert a string to an integer in Python?",
    "question_hi": "Python में स्ट्रिंग को पूर्णांक में बदलने के लिए कौन सा फ़ंक्शन उपयोग किया जाता है?",
    "options_en": ["str()", "int()", "float()", "char()"],
    "options_hi": ["str()", "int()", "float()", "char()"],
    "answer_en": "int()",
    "answer_hi": "int()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the keyword used to define an anonymous function in Python?",
    "question_hi": "Python में एक अनाम फ़ंक्शन को परिभाषित करने के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["lambda", "def", "anon", "func"],
    "options_hi": ["lambda", "def", "anon", "func"],
    "answer_en": "lambda",
    "answer_hi": "lambda",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does the 'break' statement do in a loop?",
    "question_hi": "लूप में 'break' स्टेटमेंट क्या करता है?",
    "options_en": ["Exits the loop", "Skips the current iteration", "Pauses the loop", "Restarts the loop"],
    "options_hi": ["लूप से बाहर निकलता है", "वर्तमान पुनरावृत्ति को छोड़ता है", "लूप को रोकता है", "लूप को पुनः प्रारंभ करता है"],
    "answer_en": "Exits the loop",
    "answer_hi": "लूप से बाहर निकलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which of the following is the correct way to write a docstring in Python?",
    "question_hi": "Python में डॉकस्ट्रिंग लिखने का सही तरीका कौन सा है?",
    "options_en": ["'''This is a docstring'''", "// This is a docstring", "# This is a docstring", "/* This is a docstring */"],
    "options_hi": ["'''यह एक डॉकस्ट्रिंग है'''", "// यह एक डॉकस्ट्रिंग है", "# यह एक डॉकस्ट्रिंग है", "/* यह एक डॉकस्ट्रिंग है */"],
    "answer_en": "'''This is a docstring'''",
    "answer_hi": "'''यह एक डॉकस्ट्रिंग है'''",
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