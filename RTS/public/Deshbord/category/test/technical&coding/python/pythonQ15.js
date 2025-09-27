const questions=[
  {
    "num": 1,
    "question_en": "Which of the following is used to define a function in Python?",
    "question_hi": "Python में एक फ़ंक्शन को परिभाषित करने के लिए निम्न में से कौन सा उपयोग किया जाता है?",
    "options_en": ["def", "function", "func", "define"],
    "options_hi": ["def", "function", "func", "define"],
    "answer_en": "def",
    "answer_hi": "def",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What will be the output of print(2 ** 3)?",
    "question_hi": "print(2 ** 3) का आउटपुट क्या होगा?",
    "options_en": ["6", "8", "9", "Error"],
    "options_hi": ["6", "8", "9", "Error"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of the following is a mutable data type?",
    "question_hi": "निम्न में से कौन सा एक परिवर्तनीय (mutable) डेटा प्रकार है?",
    "options_en": ["tuple", "list", "str", "frozenset"],
    "options_hi": ["tuple", "list", "str", "frozenset"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },
  {
        "num": 4,
        "question_en": "What is the default value of the 'sep' parameter in the print() function?",
        "question_hi": "print() फ़ंक्शन में 'sep' पैरामीटर का डिफ़ॉल्ट मान क्या है?",
        "options_en": ["' '", "','", "None", "'\\n'"],
        "options_hi": ["' '", "','", "None", "'\\n'"],
        "answer_en": "' '",
        "answer_hi": "' '",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which of the following is not a valid Python identifier?",
        "question_hi": "निम्नलिखित में से कौन सा एक मान्य Python पहचानकर्ता नहीं है?",
        "options_en": ["_variable", "variable1", "1variable", "variable_2"],
        "options_hi": ["_variable", "variable1", "1variable", "variable_2"],
        "answer_en": "1variable",
        "answer_hi": "1variable",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What does the 'continue' statement do in a loop?",
        "question_hi": "'continue' स्टेटमेंट लूप में क्या करता है?",
        "options_en": ["Terminates the loop", "Skips the current iteration", "Exits the program", "None of the above"],
        "options_hi": ["लूप को समाप्त करता है", "वर्तमान पुनरावृत्ति को छोड़ता है", "प्रोग्राम से बाहर निकलता है", "इनमें से कोई नहीं"],
        "answer_en": "Skips the current iteration",
        "answer_hi": "वर्तमान पुनरावृत्ति को छोड़ता है",
        "attempted": false,
        "selected": ""
    },
    
  {
    "num": 7,
    "question_en": "Which of the following is used to handle exceptions in Python?",
    "question_hi": "Python में अपवादों को संभालने के लिए निम्न में से क्या उपयोग किया जाता है?",
    "options_en": ["try", "except", "finally", "All of the above"],
    "options_hi": ["try", "except", "finally", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the 'pass' statement?",
    "question_hi": "'pass' स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["Exits the loop", "Skips the current iteration", "Acts as a placeholder", "None of the above"],
    "options_hi": ["लूप से बाहर निकलता है", "मौजूदा पुनरावृत्ति को छोड़ता है", "एक प्लेसहोल्डर की तरह कार्य करता है", "इनमें से कोई नहीं"],
    "answer_en": "Acts as a placeholder",
    "answer_hi": "एक प्लेसहोल्डर की तरह कार्य करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of the following is an immutable data type?",
    "question_hi": "निम्न में से कौन सा अपरिवर्तनीय डेटा प्रकार है?",
    "options_en": ["list", "dict", "tuple", "set"],
    "options_hi": ["सूची (list)", "शब्दकोश (dict)", "टपल (tuple)", "सेट (set)"],
    "answer_en": "tuple",
    "answer_hi": "टपल (tuple)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What will be the output of print(type([]))?",
    "question_hi": "print(type([])) का आउटपुट क्या होगा?",
    "options_en": ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
    "options_hi": ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"],
    "answer_en": "<class 'list'>",
    "answer_hi": "<class 'list'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which operator is used for exponentiation?",
    "question_hi": "घात के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["**", "^", "//", "%"],
    "options_hi": ["**", "^", "//", "%"],
    "answer_en": "**",
    "answer_hi": "**",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the output of print('Python'.lower())?",
    "question_hi": "print('Python'.lower()) का आउटपुट क्या होगा?",
    "options_en": ["python", "PYTHON", "Python", "Error"],
    "options_hi": ["python", "PYTHON", "Python", "त्रुटि"],
    "answer_en": "python",
    "answer_hi": "python",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method is used to add an element at the end of a list?",
    "question_hi": "सूची के अंत में तत्व जोड़ने के लिए कौन सी विधि उपयोग की जाती है?",
    "options_en": ["add()", "append()", "insert()", "extend()"],
    "options_hi": ["add()", "append()", "insert()", "extend()"],
    "answer_en": "append()",
    "answer_hi": "append()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What will be the output of print(3 * 'ab')?",
    "question_hi": "print(3 * 'ab') का आउटपुट क्या होगा?",
    "options_en": ["'ababab'", "'ab3'", "'ab ab ab'", "Error"],
    "options_hi": ["'ababab'", "'ab3'", "'ab ab ab'", "त्रुटि"],
    "answer_en": "'ababab'",
    "answer_hi": "'ababab'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which of the following is used to define a class in Python?",
    "question_hi": "Python में क्लास को परिभाषित करने के लिए इनमें से क्या उपयोग किया जाता है?",
    "options_en": ["class", "def", "object", "module"],
    "options_hi": ["class", "def", "object", "module"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the 'self' parameter in a method?",
    "question_hi": "किसी विधि में 'self' पैरामीटर का क्या उद्देश्य होता है?",
    "options_en": ["Refers to the instance of the class", "Defines the return type", "Used for recursion", "None of the above"],
    "options_hi": ["क्लास के उदाहरण को दर्शाता है", "वापसी प्रकार को परिभाषित करता है", "पुनरावृत्ति के लिए उपयोग होता है", "इनमें से कोई नहीं"],
    "answer_en": "Refers to the instance of the class",
    "answer_hi": "क्लास के उदाहरण को दर्शाता है",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 17,
    "question_en": "Which of the following is used to create a dictionary in Python?",
    "question_hi": "Python में dictionary बनाने के लिए कौन सा विकल्प उपयोग किया जाता है?",
    "options_en": ["{}", "[]", "()", "dict()"],
    "options_hi": ["{}", "[]", "()", "dict()"],
    "answer_en": "{}",
    "answer_hi": "{}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the output of print(10 // 3)?",
    "question_hi": "print(10 // 3) का आउटपुट क्या होगा?",
    "options_en": ["3", "3.33", "3.0", "4"],
    "options_hi": ["3", "3.33", "3.0", "4"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method removes an element from a list by its value?",
    "question_hi": "कौन सा method सूची से मान द्वारा तत्व हटाता है?",
    "options_en": ["remove()", "pop()", "del", "clear()"],
    "options_hi": ["remove()", "pop()", "del", "clear()"],
    "answer_en": "remove()",
    "answer_hi": "remove()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the 'global' keyword?",
    "question_hi": "'global' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Defines a global variable", "Accesses a global variable", "Modifies a global variable", "None of the above"],
    "options_hi": ["एक global variable को परिभाषित करता है", "एक global variable तक पहुँचता है", "एक global variable को संशोधित करता है", "इनमें से कोई नहीं"],
    "answer_en": "Accesses a global variable",
    "answer_hi": "एक global variable तक पहुँचता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the output of print(bool('False'))?",
    "question_hi": "print(bool('False')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "None", "Error"],
    "options_hi": ["True", "False", "None", "Error"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which of the following is used to create a tuple in Python?",
    "question_hi": "Python में tuple बनाने के लिए कौन सा विकल्प उपयोग किया जाता है?",
    "options_en": ["{}", "[]", "()", "tuple()"],
    "options_hi": ["{}", "[]", "()", "tuple()"],
    "answer_en": "()",
    "answer_hi": "()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the output of print('Python'[::-1])?",
    "question_hi": "print('Python'[::-1]) का आउटपुट क्या होगा?",
    "options_en": ["Python", "nohtyP", "Pytho", "Error"],
    "options_hi": ["Python", "nohtyP", "Pytho", "Error"],
    "answer_en": "nohtyP",
    "answer_hi": "nohtyP",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used to import a module in Python?",
    "question_hi": "Python में module import करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["import", "include", "require", "use"],
    "options_hi": ["import", "include", "require", "use"],
    "answer_en": "import",
    "answer_hi": "import",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the purpose of the 'yield' keyword?",
    "question_hi": "'yield' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Defines a generator function", "Returns a value from a function", "Terminates a loop", "None of the above"],
    "options_hi": ["एक generator function को परिभाषित करता है", "function से मान लौटाता है", "loop को समाप्त करता है", "इनमें से कोई नहीं"],
    "answer_en": "Defines a generator function",
    "answer_hi": "एक generator function को परिभाषित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which of the following is used to define a set in Python?",
    "question_hi": "Python में set बनाने के लिए कौन सा विकल्प उपयोग किया जाता है?",
    "options_en": ["{}", "[]", "()", "set()"],
    "options_hi": ["{}", "[]", "()", "set()"],
    "answer_en": "{}",
    "answer_hi": "{}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the output of print(len('Python'))?",
    "question_hi": "print(len('Python')) का आउटपुट क्या होगा?",
    "options_en": ["6", "5", "7", "Error"],
    "options_hi": ["6", "5", "7", "Error"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which of the following is used to create a frozenset in Python?",
    "question_hi": "Python में frozenset बनाने के लिए कौन सा विकल्प उपयोग किया जाता है?",
    "options_en": ["frozenset()", "set()", "dict()", "tuple()"],
    "options_hi": ["frozenset()", "set()", "dict()", "tuple()"],
    "answer_en": "frozenset()",
    "answer_hi": "frozenset()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output of print('Python'.replace('o', '0'))?",
    "question_hi": "print('Python'.replace('o', '0')) का आउटपुट क्या होगा?",
    "options_en": ["Pyth0n", "Python", "Pyth0", "Error"],
    "options_hi": ["Pyth0n", "Python", "Pyth0", "Error"],
    "answer_en": "Pyth0n",
    "answer_hi": "Pyth0n",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the purpose of the 'assert' statement?",
    "question_hi": "'assert' स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["Tests if a condition is true", "Defines a function", "Handles exceptions", "None of the above"],
    "options_hi": ["शर्त सही है या नहीं जांचता है", "फंक्शन को परिभाषित करता है", "exceptions को संभालता है", "इनमें से कोई नहीं"],
    "answer_en": "Tests if a condition is true",
    "answer_hi": "शर्त सही है या नहीं जांचता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function creates a range object in Python?",
    "question_hi": "Python में range ऑब्जेक्ट बनाने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["range()", "list()", "tuple()", "set()"],
    "options_hi": ["range()", "list()", "tuple()", "set()"],
    "answer_en": "range()",
    "answer_hi": "range()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the output of print('Python'[:3])?",
    "question_hi": "print('Python'[:3]) का आउटपुट क्या होगा?",
    "options_en": ["Pyt", "Python", "tho", "Error"],
    "options_hi": ["Pyt", "Python", "tho", "Error"],
    "answer_en": "Pyt",
    "answer_hi": "Pyt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which methods remove an element from a set?",
    "question_hi": "Set से तत्व हटाने के लिए कौन से method उपयोग होते हैं?",
    "options_en": ["remove()", "pop()", "discard()", "All of the above"],
    "options_hi": ["remove()", "pop()", "discard()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the purpose of the 'del' statement?",
    "question_hi": "'del' स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["Deletes a variable", "Deletes a function", "Deletes an object", "All of the above"],
    "options_hi": ["एक variable हटाता है", "एक function हटाता है", "एक ऑब्जेक्ट हटाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function creates a memoryview object in Python?",
    "question_hi": "Python में memoryview ऑब्जेक्ट बनाने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["memoryview()", "array()", "buffer()", "None of the above"],
    "options_hi": ["memoryview()", "array()", "buffer()", "इनमें से कोई नहीं"],
    "answer_en": "memoryview()",
    "answer_hi": "memoryview()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the output of print('Python'.startswith('Py'))?",
    "question_hi": "print('Python'.startswith('Py')) का आउटपुट क्या होगा?",
    "options_en": ["True", "False", "None", "Error"],
    "options_hi": ["True", "False", "None", "Error"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "How to check if a key exists in a dictionary?",
    "question_hi": "कैसे जांचें कि कोई key dictionary में मौजूद है?",
    "options_en": ["in", "has_key()", "contains", "None of the above"],
    "options_hi": ["in", "has_key()", "contains", "इनमें से कोई नहीं"],
    "answer_en": "in",
    "answer_hi": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the output of print('Python'.count('t'))?",
    "question_hi": "print('Python'.count('t')) का आउटपुट क्या होगा?",
    "options_en": ["1", "2", "3", "Error"],
    "options_hi": ["1", "2", "3", "Error"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is used to create a complex number in Python?",
    "question_hi": "Python में complex नंबर बनाने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["complex()", "complex_number()", "complexify()", "None of the above"],
    "options_hi": ["complex()", "complex_number()", "complexify()", "इनमें से कोई नहीं"],
    "answer_en": "complex()",
    "answer_hi": "complex()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the output of print('Python'.find('t'))?",
    "question_hi": "print('Python'.find('t')) का आउटपुट क्या होगा?",
    "options_en": ["2", "3", "-1", "Error"],
    "options_hi": ["2", "3", "-1", "Error"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method converts a list to a set?",
    "question_hi": "List को set में बदलने के लिए कौन सा method उपयोग होता है?",
    "options_en": ["set()", "list()", "dict()", "tuple()"],
    "options_hi": ["set()", "list()", "dict()", "tuple()"],
    "answer_en": "set()",
    "answer_hi": "set()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the output of print(type(lambda x: x + 1))?",
    "question_hi": "print(type(lambda x: x + 1)) का आउटपुट क्या होगा?",
    "options_en": ["<class 'function'>", "<class 'lambda'>", "<function>", "lambda"],
    "options_hi": ["<class 'function'>", "<class 'lambda'>", "<function>", "lambda"],
    "answer_en": "<class 'function'>",
    "answer_hi": "<class 'function'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the purpose of the 'isinstance()' function?",
    "question_hi": "'isinstance()' function का उद्देश्य क्या है?",
    "options_en": ["Check type of an object", "Create an instance", "Delete an object", "None"],
    "options_hi": ["किसी ऑब्जेक्ट के प्रकार की जाँच करना", "एक instance बनाना", "एक ऑब्जेक्ट हटाना", "इनमें से कोई नहीं"],
    "answer_en": "Check type of an object",
    "answer_hi": "किसी ऑब्जेक्ट के प्रकार की जाँच करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which keyword is used to inherit a class in Python?",
    "question_hi": "Python में class inheritance के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["class Child(Base):", "inherit Child from Base", "Child inherits Base", "extends Child(Base)"],
    "options_hi": ["class Child(Base):", "inherit Child from Base", "Child inherits Base", "extends Child(Base)"],
    "answer_en": "class Child(Base):",
    "answer_hi": "class Child(Base):",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 45,
    "question_en": "What will be the output of len(set('banana'))?",
    "question_hi": "len(set('banana')) का आउटपुट क्या होगा?",
    "options_en": ["3", "6", "4", "2"],
    "options_hi": ["3", "6", "4", "2"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which of the following is NOT a valid Python data type?",
    "question_hi": "निम्न में से कौन सा Python डेटा प्रकार मान्य नहीं है?",
    "options_en": ["list", "dict", "array", "tuple"],
    "options_hi": ["list", "dict", "array", "tuple"],
    "answer_en": "array",
    "answer_hi": "array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
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
    "num": 48,
    "question_en": "Which of the following statements is used to handle exceptions?",
    "question_hi": "exceptions को संभालने के लिए कौन सा स्टेटमेंट उपयोग होता है?",
    "options_en": ["try-except", "if-else", "for-while", "switch-case"],
    "options_hi": ["try-except", "if-else", "for-while", "switch-case"],
    "answer_en": "try-except",
    "answer_hi": "try-except",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does the method list.append() do?",
    "question_hi": "list.append() method क्या करता है?",
    "options_en": ["Adds an element at the end", "Removes an element", "Sorts the list", "Clears the list"],
    "options_hi": ["सूची के अंत में तत्व जोड़ता है", "तत्व हटाता है", "सूची को क्रमबद्ध करता है", "सूची को साफ करता है"],
    "answer_en": "Adds an element at the end",
    "answer_hi": "सूची के अंत में तत्व जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which function is used to read input from the user?",
    "question_hi": "यूजर से इनपुट लेने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["input()", "read()", "scan()", "get()"],
    "options_hi": ["input()", "read()", "scan()", "get()"],
    "answer_en": "input()",
    "answer_hi": "input()",
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

 




