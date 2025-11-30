const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log(2 + '2' - 1)`?",
    question_hi: "`console.log(2 + '2' - 1)` का आउटपुट क्या है?",
    options_en: ["21", "3", "23", "NaN"],
    options_hi: ["21", "3", "23", "NaN"],
    answer_en: "21",
    answer_hi: "21",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method is used to find the last index of an element in array?",
    question_hi: "ऐरे में एलिमेंट का आखिरी इंडेक्स ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["lastIndexOf()", "findLastIndex()", "searchLast()", "indexOf()"],
    options_hi: ["lastIndexOf()", "findLastIndex()", "searchLast()", "indexOf()"],
    answer_en: "lastIndexOf()",
    answer_hi: "lastIndexOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `in` operator check in JavaScript?",
    question_hi: "`in` ऑपरेटर JavaScript में क्या चेक करता है?",
    options_en: ["Property existence in object", "Value in array", "Type of variable", "All of the above"],
    options_hi: ["ऑब्जेक्ट में प्रॉपर्टी का अस्तित्व", "ऐरे में वैल्यू", "वेरिएबल का टाइप", "उपरोक्त सभी"],
    answer_en: "Property existence in object",
    answer_hi: "ऑब्जेक्ट में प्रॉपर्टी का अस्तित्व",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method is used to create a new array with all sub-array elements?",
    question_hi: "सभी सब-ऐरे एलिमेंट्स के साथ नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["flat()", "concat()", "merge()", "join()"],
    options_hi: ["flat()", "concat()", "merge()", "join()"],
    answer_en: "flat()",
    answer_hi: "flat()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `console.table()`?",
    question_hi: "`console.table()` का उद्देश्य क्या है?",
    options_en: ["Display data as table", "Create table in HTML", "Format data", "All of the above"],
    options_hi: ["डेटा को टेबल के रूप में दिखाना", "HTML में टेबल बनाना", "डेटा फॉर्मेट करना", "उपरोक्त सभी"],
    answer_en: "Display data as table",
    answer_hi: "डेटा को टेबल के रूप में दिखाना",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which method is used to get the integer part of a number?",
    question_hi: "नंबर का इंटीजर हिस्सा पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.trunc()", "Math.floor()", "Math.ceil()", "Math.round()"],
    options_hi: ["Math.trunc()", "Math.floor()", "Math.ceil()", "Math.round()"],
    answer_en: "Math.trunc()",
    answer_hi: "Math.trunc()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the output of `console.log(!![]))`?",
    question_hi: "`console.log(!![])` का आउटपुट क्या है?",
    options_en: ["true", "false", "[]", "Error"],
    options_hi: ["true", "false", "[]", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method is used to check if every element passes a test?",
    question_hi: "हर एलिमेंट टेस्ट पास करता है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["every()", "some()", "all()", "check()"],
    options_hi: ["every()", "some()", "all()", "check()"],
    answer_en: "every()",
    answer_hi: "every()",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the purpose of `??` operator?",
    question_hi: "`??` ऑपरेटर का उद्देश्य क्या है?",
    options_en: ["Nullish coalescing", "Logical OR", "Ternary operator", "Comparison"],
    options_hi: ["नलिश कोलेसिंग", "लॉजिकल OR", "टर्नरी ऑपरेटर", "कम्पेरिजन"],
    answer_en: "Nullish coalescing",
    answer_hi: "नलिश कोलेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method is used to create a new array with specified elements?",
    question_hi: "स्पेसिफाइड एलिमेंट्स के साथ नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Array.of()", "Array.from()", "Array.create()", "new Array()"],
    options_hi: ["Array.of()", "Array.from()", "Array.create()", "new Array()"],
    answer_en: "Array.of()",
    answer_hi: "Array.of()",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the output of `console.log([1, 2] + [3, 4])`?",
    question_hi: "`console.log([1, 2] + [3, 4])` का आउटपुट क्या है?",
    options_en: ["'1,23,4'", "[1,2,3,4]", "7", "NaN"],
    options_hi: ["'1,23,4'", "[1,2,3,4]", "7", "NaN"],
    answer_en: "'1,23,4'",
    answer_hi: "'1,23,4'",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property is used to get the constructor of an object?",
    question_hi: "ऑब्जेक्ट का कंस्ट्रक्टर पाने के लिए कौन-सा प्रॉपर्टी उपयोग होता है?",
    options_en: ["constructor", "prototype", "__proto__", "All of the above"],
    options_hi: ["constructor", "prototype", "__proto__", "उपरोक्त सभी"],
    answer_en: "constructor",
    answer_hi: "constructor",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the purpose of `arguments` object?",
    question_hi: "`arguments` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Access function arguments", "Create arguments array", "Both A and B", "None of the above"],
    options_hi: ["फंक्शन आर्गुमेंट्स तक पहुंच", "आर्गुमेंट्स ऐरे बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to copy properties from one object to another?",
    question_hi: "एक ऑब्जेक्ट से दूसरे ऑब्जेक्ट में प्रॉपर्टीज कॉपी करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.assign()", "Object.copy()", "Object.merge()", "Object.clone()"],
    options_hi: ["Object.assign()", "Object.copy()", "Object.merge()", "Object.clone()"],
    answer_en: "Object.assign()",
    answer_hi: "Object.assign()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the purpose of `finally` block in try-catch?",
    question_hi: "try-catch में `finally` ब्लॉक का उद्देश्य क्या है?",
    options_en: ["Always execute code", "Execute on error", "Execute on success", "None of the above"],
    options_hi: ["हमेशा कोड चलाना", "एरर पर चलाना", "सक्सेस पर चलाना", "उपरोक्त में से कोई नहीं"],
    answer_en: "Always execute code",
    answer_hi: "हमेशा कोड चलाना",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to get the day of the week?",
    question_hi: "हफ्ते का दिन पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["getDay()", "getDate()", "getWeekDay()", "getWeek()"],
    options_hi: ["getDay()", "getDate()", "getWeekDay()", "getWeek()"],
    answer_en: "getDay()",
    answer_hi: "getDay()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `Object.create(null)`?",
    question_hi: "`Object.create(null)` का उद्देश्य क्या है?",
    options_en: ["Create object without prototype", "Create empty object", "Create null object", "All of the above"],
    options_hi: ["प्रोटोटाइप के बिना ऑब्जेक्ट बनाना", "खाली ऑब्जेक्ट बनाना", "null ऑब्जेक्ट बनाना", "उपरोक्त सभी"],
    answer_en: "Create object without prototype",
    answer_hi: "प्रोटोटाइप के बिना ऑब्जेक्ट बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to check if a string matches a pattern?",
    question_hi: "स्ट्रिंग पैटर्न से मैच करती है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["match()", "test()", "search()", "All of the above"],
    options_hi: ["match()", "test()", "search()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the output of `console.log(Boolean('false'))`?",
    question_hi: "`console.log(Boolean('false'))` का आउटपुट क्या है?",
    options_en: ["true", "false", "'false'", "Error"],
    options_hi: ["true", "false", "'false'", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method is used to create a promise that rejects?",
    question_hi: "रिजेक्ट होने वाला प्रॉमिस बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Promise.reject()", "Promise.fail()", "new Promise()", "All of the above"],
    options_hi: ["Promise.reject()", "Promise.fail()", "new Promise()", "उपरोक्त सभी"],
    answer_en: "Promise.reject()",
    answer_hi: "Promise.reject()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the purpose of `let` keyword?",
    question_hi: "`let` कीवर्ड का उद्देश्य क्या है?",
    options_en: ["Declare block-scoped variables", "Declare mutable variables", "Both A and B", "None of the above"],
    options_hi: ["ब्लॉक-स्कोप्ड वेरिएबल्स डिक्लेयर करना", "म्यूटेबल वेरिएबल्स डिक्लेयर करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to find an element by its value?",
    question_hi: "वैल्यू के आधार पर एलिमेंट ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["find()", "filter()", "search()", "locate()"],
    options_hi: ["find()", "filter()", "search()", "locate()"],
    answer_en: "find()",
    answer_hi: "find()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log(0 || 'Hello')`?",
    question_hi: "`console.log(0 || 'Hello')` का आउटपुट क्या है?",
    options_en: ["'Hello'", "0", "false", "Error"],
    options_hi: ["'Hello'", "0", "false", "एरर"],
    answer_en: "'Hello'",
    answer_hi: "'Hello'",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to get a random number between 0 and 1?",
    question_hi: "0 और 1 के बीच रैंडम नंबर पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.random()", "Math.rand()", "Number.random()", "Random()"],
    options_hi: ["Math.random()", "Math.rand()", "Number.random()", "Random()"],
    answer_en: "Math.random()",
    answer_hi: "Math.random()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the purpose of `new` keyword?",
    question_hi: "`new` कीवर्ड का उद्देश्य क्या है?",
    options_en: ["Create instance of object", "Call constructor", "Both A and B", "None of the above"],
    options_hi: ["ऑब्जेक्ट का इंस्टेंस बनाना", "कंस्ट्रक्टर कॉल करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to pad a string?",
    question_hi: "स्ट्रिंग को पैड करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["padStart()", "padEnd()", "Both A and B", "None of the above"],
    options_hi: ["padStart()", "padEnd()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the output of `console.log(+true)`?",
    question_hi: "`console.log(+true)` का आउटपुट क्या है?",
    options_en: ["1", "true", "NaN", "Error"],
    options_hi: ["1", "true", "NaN", "एरर"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to check if a value is array?",
    question_hi: "वैल्यू ऐरे है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Array.isArray()", "isArray()", "typeof", "Both A and B"],
    options_hi: ["Array.isArray()", "isArray()", "typeof", "A और B दोनों"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `document.createElement()`?",
    question_hi: "`document.createElement()` का उद्देश्य क्या है?",
    options_en: ["Create new element", "Select element", "Modify element", "Remove element"],
    options_hi: ["नया एलिमेंट बनाना", "एलिमेंट सेलेक्ट करना", "एलिमेंट मॉडिफाई करना", "एलिमेंट हटाना"],
    answer_en: "Create new element",
    answer_hi: "नया एलिमेंट बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which operator is used for bitwise AND?",
    question_hi: "बिटवाइज AND के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    options_en: ["&", "&&", "|", "||"],
    options_hi: ["&", "&&", "|", "||"],
    answer_en: "&",
    answer_hi: "&",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the output of `console.log('Hello'.toUpperCase())`?",
    question_hi: "`console.log('Hello'.toUpperCase())` का आउटपुट क्या है?",
    options_en: ["'HELLO'", "'hello'", "'Hello'", "Error"],
    options_hi: ["'HELLO'", "'hello'", "'Hello'", "एरर"],
    answer_en: "'HELLO'",
    answer_hi: "'HELLO'",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to format a number with precision?",
    question_hi: "प्रिसिजन के साथ नंबर फॉर्मेट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toPrecision()", "toFixed()", "toExponential()", "toString()"],
    options_hi: ["toPrecision()", "toFixed()", "toExponential()", "toString()"],
    answer_en: "toPrecision()",
    answer_hi: "toPrecision()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of `Array.prototype.map()`?",
    question_hi: "`Array.prototype.map()` का उद्देश्य क्या है?",
    options_en: ["Transform each element", "Create new array", "Both A and B", "None of the above"],
    options_hi: ["प्रत्येक एलिमेंट बदलना", "नया ऐरे बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to reverse a string?",
    question_hi: "स्ट्रिंग को रिवर्स करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["split('').reverse().join('')", "reverse()", "flip()", "invert()"],
    options_hi: ["split('').reverse().join('')", "reverse()", "flip()", "invert()"],
    answer_en: "split('').reverse().join('')",
    answer_hi: "split('').reverse().join('')",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the output of `console.log(null == undefined)`?",
    question_hi: "`console.log(null == undefined)` का आउटपुट क्या है?",
    options_en: ["true", "false", "null", "undefined"],
    options_hi: ["true", "false", "null", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to combine two arrays?",
    question_hi: "दो ऐरे को कंबाइन करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["concat()", "merge()", "combine()", "join()"],
    options_hi: ["concat()", "merge()", "combine()", "join()"],
    answer_en: "concat()",
    answer_hi: "concat()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `prompt()` method?",
    question_hi: "`prompt()` मेथड का उद्देश्य क्या है?",
    options_en: ["Get user input", "Show message", "Both A and B", "None of the above"],
    options_hi: ["यूजर इनपुट लेना", "मैसेज दिखाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method is used to get the largest integer less than or equal to a number?",
    question_hi: "नंबर से छोटा या बराबर सबसे बड़ा इंटीजर पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
    options_hi: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
    answer_en: "Math.floor()",
    answer_hi: "Math.floor()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(typeof {})`?",
    question_hi: "`console.log(typeof {})` का आउटपुट क्या है?",
    options_en: ["object", "{}", "undefined", "string"],
    options_hi: ["object", "{}", "undefined", "string"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to remove whitespace from end of string?",
    question_hi: "स्ट्रिंग के अंत से व्हाइटस्पेस हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["trimEnd()", "trim()", "trimStart()", "strip()"],
    options_hi: ["trimEnd()", "trim()", "trimStart()", "strip()"],
    answer_en: "trimEnd()",
    answer_hi: "trimEnd()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the purpose of `break` statement in switch?",
    question_hi: "switch में `break` स्टेटमेंट का उद्देश्य क्या है?",
    options_en: ["Exit switch statement", "Continue to next case", "Stop program", "All of the above"],
    options_hi: ["switch स्टेटमेंट से बाहर निकलना", "अगले केस पर जाना", "प्रोग्राम रोकना", "उपरोक्त सभी"],
    answer_en: "Exit switch statement",
    answer_hi: "switch स्टेटमेंट से बाहर निकलना",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to get the Unicode value of a character?",
    question_hi: "कैरेक्टर का यूनिकोड वैल्यू पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["charCodeAt()", "charAt()", "codePointAt()", "getUnicode()"],
    options_hi: ["charCodeAt()", "charAt()", "codePointAt()", "getUnicode()"],
    answer_en: "charCodeAt()",
    answer_hi: "charCodeAt()",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the output of `console.log(!!null)`?",
    question_hi: "`console.log(!!null)` का आउटपुट क्या है?",
    options_en: ["false", "true", "null", "Error"],
    options_hi: ["false", "true", "null", "एरर"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method is used to stop a timer?",
    question_hi: "टाइमर रोकने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["clearInterval()", "clearTimeout()", "stopTimer()", "Both A and B"],
    options_hi: ["clearInterval()", "clearTimeout()", "stopTimer()", "A और B दोनों"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the purpose of `document.getElementById()`?",
    question_hi: "`document.getElementById()` का उद्देश्य क्या है?",
    options_en: ["Select element by ID", "Select element by class", "Create element", "Remove element"],
    options_hi: ["ID से एलिमेंट सेलेक्ट करना", "क्लास से एलिमेंट सेलेक्ट करना", "एलिमेंट बनाना", "एलिमेंट हटाना"],
    answer_en: "Select element by ID",
    answer_hi: "ID से एलिमेंट सेलेक्ट करना",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to check if string ends with substring?",
    question_hi: "स्ट्रिंग सबस्ट्रिंग से खत्म होती है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["endsWith()", "startsWith()", "includes()", "contains()"],
    options_hi: ["endsWith()", "startsWith()", "includes()", "contains()"],
    answer_en: "endsWith()",
    answer_hi: "endsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the output of `console.log([] === [])`?",
    question_hi: "`console.log([] === [])` का आउटपुट क्या है?",
    options_en: ["false", "true", "[]", "Error"],
    options_hi: ["false", "true", "[]", "एरर"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to remove all whitespace?",
    question_hi: "सभी व्हाइटस्पेस हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["replace(/\\s/g, '')", "trim()", "strip()", "clean()"],
    options_hi: ["replace(/\\s/g, '')", "trim()", "strip()", "clean()"],
    answer_en: "replace(/\\s/g, '')",
    answer_hi: "replace(/\\s/g, '')",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `typeof` operator?",
    question_hi: "`typeof` ऑपरेटर का उद्देश्य क्या है?",
    options_en: ["Check variable type", "Check value type", "Both A and B", "None of the above"],
    options_hi: ["वेरिएबल टाइप चेक करना", "वैल्यू टाइप चेक करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to find the highest value?",
    question_hi: "सबसे ऊंची वैल्यू ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.max()", "Math.min()", "Array.max()", "Number.max()"],
    options_hi: ["Math.max()", "Math.min()", "Array.max()", "Number.max()"],
    answer_en: "Math.max()",
    answer_hi: "Math.max()",
    attempted: false,
    selected: ""
  }
];





// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ (FINAL FIXED) ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // ⭐ LIVE TIME CALCULATION (CORRECT)
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // SAVE TIME
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
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

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // SAVE DATA
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // GO TO RESULT PAGE
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
        <div class="circle"
        style="background:${color}"
        onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA (NO CHANGE) ----------------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};
