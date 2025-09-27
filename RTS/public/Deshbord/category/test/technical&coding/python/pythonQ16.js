const questions=[
  {
    "num": 1,
    "question_en": "Which keyword is used to define a function in Python?",
    "question_hi": "Python में फंक्शन को परिभाषित करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
    "options_en": ["def", "function", "define", "func"],
    "options_hi": ["def", "function", "define", "func"],
    "answer_en": "def",
    "answer_hi": "def",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which of the following is used to create a comment in Python?",
    "question_hi": "Python में कमेंट बनाने के लिए निम्न में से किसका उपयोग किया जाता है?",
    "options_en": ["//", "#", "/* */", "--"],
    "options_hi": ["//", "#", "/* */", "--"],
    "answer_en": "#",
    "answer_hi": "#",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which data type is immutable in Python?",
    "question_hi": "Python में कौन सा डेटा टाइप इम्यूटेबल (अपरिवर्तनीय) होता है?",
    "options_en": ["List", "Dictionary", "Tuple", "Set"],
    "options_hi": ["लिस्ट", "डिक्शनरी", "टपल", "सेट"],
    "answer_en": "Tuple",
    "answer_hi": "टपल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the output of `print(3 + 2 * 2)` in Python?",
    "question_hi": "Python में `print(3 + 2 * 2)` का आउटपुट क्या होगा?",
    "options_en": ["10", "7", "5", "Error"],
    "options_hi": ["10", "7", "5", "एरर"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method is used to read user input in Python?",
    "question_hi": "Python में यूजर इनपुट पढ़ने के लिए किस मेथड का उपयोग किया जाता है?",
    "options_en": ["input()", "read()", "get()", "scan()"],
    "options_hi": ["input()", "read()", "get()", "scan()"],
    "answer_en": "input()",
    "answer_hi": "input()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which keyword is used to handle exceptions in Python?",
    "question_hi": "Python में एक्सेप्शन हैंडल करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
    "options_en": ["try", "catch", "except", "handle"],
    "options_hi": ["try", "catch", "except", "handle"],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does `len()` function do in Python?",
    "question_hi": "Python में `len()` फंक्शन क्या करता है?",
    "options_en": ["Converts to lowercase", "Returns length", "Rounds a number", "Checks type"],
    "options_hi": ["लोअरकेस में बदलता है", "लंबाई रिटर्न करता है", "संख्या राउंड करता है", "टाइप चेक करता है"],
    "answer_en": "Returns length",
    "answer_hi": "लंबाई रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which operator is used for exponentiation in Python?",
    "question_hi": "Python में घातांक (exponentiation) के लिए किस ऑपरेटर का उपयोग किया जाता है?",
    "options_en": ["^", "**", "^^", "//"],
    "options_hi": ["^", "**", "^^", "//"],
    "answer_en": "**",
    "answer_hi": "**",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "How do you start a 'for' loop in Python?",
    "question_hi": "Python में 'for' लूप कैसे शुरू करते हैं?",
    "options_en": ["for i in range(5):", "for (i=0; i<5; i++)", "loop i to 5", "for i from 1 to 5"],
    "options_hi": ["for i in range(5):", "for (i=0; i<5; i++)", "loop i to 5", "for i from 1 to 5"],
    "answer_en": "for i in range(5):",
    "answer_hi": "for i in range(5):",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the output of `'hello'.upper()`?",
    "question_hi": "`'hello'.upper()` का आउटपुट क्या होगा?",
    "options_en": ["hello", "HELLO", "Hello", "hElLo"],
    "options_hi": ["hello", "HELLO", "Hello", "hElLo"],
    "answer_en": "HELLO",
    "answer_hi": "HELLO",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which module is used for mathematical operations in Python?",
    "question_hi": "Python में गणितीय ऑपरेशन्स के लिए किस मॉड्यूल का उपयोग किया जाता है?",
    "options_en": ["math", "calc", "numpy", "algebra"],
    "options_hi": ["math", "calc", "numpy", "algebra"],
    "answer_en": "math",
    "answer_hi": "math",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does `list.append(x)` do?",
    "question_hi": "`list.append(x)` क्या करता है?",
    "options_en": ["Removes x from list", "Adds x to the end of the list", "Sorts the list", "Reverses the list"],
    "options_hi": ["लिस्ट से x हटाता है", "लिस्ट के अंत में x जोड़ता है", "लिस्ट को सॉर्ट करता है", "लिस्ट को उलट देता है"],
    "answer_en": "Adds x to the end of the list",
    "answer_hi": "लिस्ट के अंत में x जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which symbol is used for single-line comments in Python?",
    "question_hi": "Python में सिंगल-लाइन कमेंट्स के लिए किस सिंबल का उपयोग किया जाता है?",
    "options_en": ["//", "#", "--", "/*"],
    "options_hi": ["//", "#", "--", "/*"],
    "answer_en": "#",
    "answer_hi": "#",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the output of `print(type(5))`?",
    "question_hi": "`print(type(5))` का आउटपुट क्या होगा?",
    "options_en": ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'number'>"],
    "options_hi": ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'number'>"],
    "answer_en": "<class 'int'>",
    "answer_hi": "<class 'int'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to open a file in Python?",
    "question_hi": "Python में फाइल ओपन करने के लिए किस फंक्शन का उपयोग किया जाता है?",
    "options_en": ["open()", "read()", "file()", "load()"],
    "options_hi": ["open()", "read()", "file()", "load()"],
    "answer_en": "open()",
    "answer_hi": "open()",
    "attempted": false,
    "selected": ""
  },
    {
    "num": 16,
    "question_en": "Which method removes and returns the last item of a list?",
    "question_hi": "कौन सी मेथड लिस्ट के अंतिम आइटम को हटाकर रिटर्न करती है?",
    "options_en": ["pop()", "remove()", "delete()", "clear()"],
    "options_hi": ["pop()", "remove()", "delete()", "clear()"],
    "answer_en": "pop()",
    "answer_hi": "pop()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does `'Hello' + 'World'` return?",
    "question_hi": "`'Hello' + 'World'` क्या रिटर्न करता है?",
    "options_en": ["HelloWorld", "Hello World", "HW", "Error"],
    "options_hi": ["HelloWorld", "Hello World", "HW", "एरर"],
    "answer_en": "HelloWorld",
    "answer_hi": "HelloWorld",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword stops a loop iteration immediately?",
    "question_hi": "कौन सा कीवर्ड लूप इटरेशन को तुरंत रोक देता है?",
    "options_en": ["stop", "break", "exit", "return"],
    "options_hi": ["stop", "break", "exit", "return"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the output of `bool(0)`?",
    "question_hi": "`bool(0)` का आउटपुट क्या है?",
    "options_en": ["True", "False", "0", "Error"],
    "options_hi": ["True", "False", "0", "एरर"],
    "answer_en": "False",
    "answer_hi": "False",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which module supports regular expressions?",
    "question_hi": "रेगुलर एक्सप्रेशन्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["regex", "re", "pyre", "pattern"],
    "options_hi": ["regex", "re", "pyre", "pattern"],
    "answer_en": "re",
    "answer_hi": "re",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "How do you create an empty dictionary?",
    "question_hi": "खाली डिक्शनरी कैसे बनाते हैं?",
    "options_en": ["{}", "dict()", "[]", "Both A and B"],
    "options_hi": ["{}", "dict()", "[]", "A और B दोनों"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is `sys.argv` used for?",
    "question_hi": "`sys.argv` किस लिए उपयोग किया जाता है?",
    "options_en": ["File handling", "Command-line arguments", "System exit", "Error handling"],
    "options_hi": ["फाइल हैंडलिंग", "कमांड-लाइन आर्ग्युमेंट्स", "सिस्टम एक्जिट", "एरर हैंडलिंग"],
    "answer_en": "Command-line arguments",
    "answer_hi": "कमांड-लाइन आर्ग्युमेंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which method checks if a key exists in a dictionary?",
    "question_hi": "कौन सी मेथड चेक करती है कि डिक्शनरी में कोई की मौजूद है?",
    "options_en": ["has_key()", "contains()", "in", "exists()"],
    "options_hi": ["has_key()", "contains()", "in", "exists()"],
    "answer_en": "in",
    "answer_hi": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does `'abc'.split()` return?",
    "question_hi": "`'abc'.split()` क्या रिटर्न करता है?",
    "options_en": ["['a', 'b', 'c']", "['abc']", "[]", "Error"],
    "options_hi": ["['a', 'b', 'c']", "['abc']", "[]", "एरर"],
    "answer_en": "['abc']",
    "answer_hi": "['abc']",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which operator checks identity?",
    "question_hi": "कौन सा ऑपरेटर आइडेंटिटी चेक करता है?",
    "options_en": ["==", "===", "is", "equals()"],
    "options_hi": ["==", "===", "is", "equals()"],
    "answer_en": "is",
    "answer_hi": "is",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the output of `round(3.14159, 2)`?",
    "question_hi": "`round(3.14159, 2)` का आउटपुट क्या है?",
    "options_en": ["3.14", "3.141", "3.1", "3"],
    "options_hi": ["3.14", "3.141", "3.1", "3"],
    "answer_en": "3.14",
    "answer_hi": "3.14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which decorator is used for class methods?",
    "question_hi": "क्लास मेथड्स के लिए कौन सा डेकोरेटर उपयोग किया जाता है?",
    "options_en": ["@staticmethod", "@classmethod", "@method", "@decorate"],
    "options_hi": ["@staticmethod", "@classmethod", "@method", "@decorate"],
    "answer_en": "@classmethod",
    "answer_hi": "@classmethod",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does `__init__` do?",
    "question_hi": "`__init__` क्या करता है?",
    "options_en": ["Initializes a class", "Terminates a program", "Imports a module", "Handles errors"],
    "options_hi": ["क्लास को इनिशियलाइज़ करता है", "प्रोग्राम को टर्मिनेट करता है", "मॉड्यूल इम्पोर्ट करता है", "एरर्स हैंडल करता है"],
    "answer_en": "Initializes a class",
    "answer_hi": "क्लास को इनिशियलाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function reverses a list?",
    "question_hi": "कौन सा फंक्शन लिस्ट को उलट देता है?",
    "options_en": ["reverse()", "reversed()", "flip()", "sort(reverse=True)"],
    "options_hi": ["reverse()", "reversed()", "flip()", "sort(reverse=True)"],
    "answer_en": "reverse()",
    "answer_hi": "reverse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the output of `'Python'[1:4]`?",
    "question_hi": "`'Python'[1:4]` का आउटपुट क्या है?",
    "options_en": ["Pyt", "yth", "thon", "Error"],
    "options_hi": ["Pyt", "yth", "thon", "एरर"],
    "answer_en": "yth",
    "answer_hi": "yth",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which keyword is used for inheritance?",
    "question_hi": "इनहेरिटेंस के लिए कौन सा कीवर्ड उपयोग किया जाता है?",
    "options_en": ["extends", "inherits", "super", "class"],
    "options_hi": ["extends", "inherits", "super", "class"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does `os.path.join()` do?",
    "question_hi": "`os.path.join()` क्या करता है?",
    "options_en": ["Joins strings with slashes", "Combines path components", "Splits paths", "Checks file existence"],
    "options_hi": ["स्लैश के साथ स्ट्रिंग्स जोड़ता है", "पाथ कॉम्पोनेंट्स को कॉम्बाइन करता है", "पाथ्स को स्प्लिट करता है", "फाइल एक्सिस्टेंस चेक करता है"],
    "answer_en": "Combines path components",
    "answer_hi": "पाथ कॉम्पोनेंट्स को कॉम्बाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which exception is raised for division by zero?",
    "question_hi": "शून्य से भाग देने पर कौन सा एक्सेप्शन रेज़ होता है?",
    "options_en": ["ValueError", "ZeroDivisionError", "MathError", "ArithmeticError"],
    "options_hi": ["ValueError", "ZeroDivisionError", "MathError", "ArithmeticError"],
    "answer_en": "ZeroDivisionError",
    "answer_hi": "ZeroDivisionError",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "How do you convert a string to lowercase?",
    "question_hi": "स्ट्रिंग को लोअरकेस में कैसे बदलते हैं?",
    "options_en": ["str.lower()", "str.toLower()", "str.casefold()", "str.small()"],
    "options_hi": ["str.lower()", "str.toLower()", "str.casefold()", "str.small()"],
    "answer_en": "str.lower()",
    "answer_hi": "str.lower()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the output of `'Python'.find('th')`?",
    "question_hi": "`'Python'.find('th')` का आउटपुट क्या है?",
    "options_en": ["2", "3", "-1", "True"],
    "options_hi": ["2", "3", "-1", "True"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which method removes whitespace from both ends of a string?",
    "question_hi": "कौन सी मेथड स्ट्रिंग के दोनों सिरों से व्हाइटस्पेस हटाती है?",
    "options_en": ["trim()", "strip()", "clean()", "remove()"],
    "options_hi": ["trim()", "strip()", "clean()", "remove()"],
    "answer_en": "strip()",
    "answer_hi": "strip()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does `'Hello'.replace('l', 's')` return?",
    "question_hi": "`'Hello'.replace('l', 's')` क्या रिटर्न करता है?",
    "options_en": ["Hesso", "Heslo", "Heeso", "Hssso"],
    "options_hi": ["Hesso", "Heslo", "Heeso", "Hssso"],
    "answer_en": "Hesso",
    "answer_hi": "Hesso",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which module is used for date/time operations?",
    "question_hi": "डेट/टाइम ऑपरेशन्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["time", "datetime", "calendar", "date"],
    "options_hi": ["time", "datetime", "calendar", "date"],
    "answer_en": "datetime",
    "answer_hi": "datetime",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the output of `bool('False')`?",
    "question_hi": "`bool('False')` का आउटपुट क्या है?",
    "options_en": ["False", "True", "Error", "None"],
    "options_hi": ["False", "True", "एरर", "None"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function returns the absolute value?",
    "question_hi": "कौन सा फंक्शन एब्सोल्यूट वैल्यू रिटर्न करता है?",
    "options_en": ["abs()", "absolute()", "mod()", "pos()"],
    "options_hi": ["abs()", "absolute()", "mod()", "pos()"],
    "answer_en": "abs()",
    "answer_hi": "abs()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What does `'Python'[::-1]` return?",
    "question_hi": "`'Python'[::-1]` क्या रिटर्न करता है?",
    "options_en": ["Pytho", "nohtyP", "Python", "Error"],
    "options_hi": ["Pytho", "nohtyP", "Python", "एरर"],
    "answer_en": "nohtyP",
    "answer_hi": "nohtyP",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method converts a list to a tuple?",
    "question_hi": "कौन सी मेथड लिस्ट को टपल में बदलती है?",
    "options_en": ["list.toTuple()", "tuple(list)", "convert()", "tuple.fromList()"],
    "options_hi": ["list.toTuple()", "tuple(list)", "convert()", "tuple.fromList()"],
    "answer_en": "tuple(list)",
    "answer_hi": "tuple(list)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output of `max([1, 2, 3, 0])`?",
    "question_hi": "`max([1, 2, 3, 0])` का आउटपुट क्या है?",
    "options_en": ["1", "3", "0", "Error"],
    "options_hi": ["1", "3", "0", "एरर"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which operator checks membership?",
    "question_hi": "कौन सा ऑपरेटर मेंबरशिप चेक करता है?",
    "options_en": ["in", "has", "contains", "member"],
    "options_hi": ["in", "has", "contains", "member"],
    "answer_en": "in",
    "answer_hi": "in",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does `'abc'.isalpha()` return?",
    "question_hi": "`'abc'.isalpha()` क्या रिटर्न करता है?",
    "options_en": ["True", "False", "None", "Error"],
    "options_hi": ["True", "False", "None", "एरर"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which function returns the square root?",
    "question_hi": "कौन सा फंक्शन स्क्वायर रूट रिटर्न करता है?",
    "options_en": ["sqrt()", "root()", "math.sqrt()", "pow()"],
    "options_hi": ["sqrt()", "root()", "math.sqrt()", "pow()"],
    "answer_en": "math.sqrt()",
    "answer_hi": "math.sqrt()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the output of `min('Python')`?",
    "question_hi": "`min('Python')` का आउटपुट क्या है?",
    "options_en": ["P", "y", "h", "n"],
    "options_hi": ["P", "y", "h", "n"],
    "answer_en": "P",
    "answer_hi": "P",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method capitalizes the first letter of a string?",
    "question_hi": "कौन सी मेथड स्ट्रिंग के पहले अक्षर को कैपिटलाइज़ करती है?",
    "options_en": ["capitalize()", "upper()", "title()", "firstUpper()"],
    "options_hi": ["capitalize()", "upper()", "title()", "firstUpper()"],
    "answer_en": "capitalize()",
    "answer_hi": "capitalize()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does `'123'.isdigit()` return?",
    "question_hi": "`'123'.isdigit()` क्या रिटर्न करता है?",
    "options_en": ["True", "False", "123", "Error"],
    "options_hi": ["True", "False", "123", "एरर"],
    "answer_en": "True",
    "answer_hi": "True",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which function returns the Unicode code point of a character?",
    "question_hi": "कौन सा फंक्शन कैरेक्टर का यूनिकोड कोड पॉइंट रिटर्न करता है?",
    "options_en": ["chr()", "ord()", "unicode()", "code()"],
    "options_hi": ["chr()", "ord()", "unicode()", "code()"],
    "answer_en": "ord()",
    "answer_hi": "ord()",
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