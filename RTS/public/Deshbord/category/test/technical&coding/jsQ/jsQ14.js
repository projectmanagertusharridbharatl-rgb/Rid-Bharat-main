const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log(typeof (() => {}))`?",
    question_hi: "`console.log(typeof (() => {}))` का आउटपुट क्या है?",
    options_en: ["'function'", "'object'", "'arrow'", "'undefined'"],
    options_hi: ["'function'", "'object'", "'arrow'", "'undefined'"],
    answer_en: "'function'",
    answer_hi: "'function'",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method is used to schedule a function to run repeatedly?",
    question_hi: "फंक्शन को बार-बार रन करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["setInterval()", "setTimeout()", "repeat()", "schedule()"],
    options_hi: ["setInterval()", "setTimeout()", "repeat()", "schedule()"],
    answer_en: "setInterval()",
    answer_hi: "setInterval()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the output of `console.log([1, 2, 3].filter(x => x > 1))`?",
    question_hi: "`console.log([1, 2, 3].filter(x => x > 1))` का आउटपुट क्या है?",
    options_en: ["[2, 3]", "[1, 2, 3]", "[1]", "[]"],
    options_hi: ["[2, 3]", "[1, 2, 3]", "[1]", "[]"],
    answer_en: "[2, 3]",
    answer_hi: "[2, 3]",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which operator is used for strict equality comparison?",
    question_hi: "स्ट्रिक्ट इक्वलिटी कंपेरिजन के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    options_en: ["===", "==", "=", "!=="],
    options_hi: ["===", "==", "=", "!=="],
    answer_en: "===",
    answer_hi: "===",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the output of `console.log('5' - - '3')`?",
    question_hi: "`console.log('5' - - '3')` का आउटपुट क्या है?",
    options_en: ["8", "2", "'53'", "NaN"],
    options_hi: ["8", "2", "'53'", "NaN"],
    answer_en: "8",
    answer_hi: "8",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which method is used to find the maximum value in an array?",
    question_hi: "ऐरे में मैक्सिमम वैल्यू ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.max(...array)", "array.max()", "Math.max(array)", "max(array)"],
    options_hi: ["Math.max(...array)", "array.max()", "Math.max(array)", "max(array)"],
    answer_en: "Math.max(...array)",
    answer_hi: "Math.max(...array)",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the output of `console.log(!![])`?",
    question_hi: "`console.log(!![])` का आउटपुट क्या है?",
    options_en: ["true", "false", "[]", "Error"],
    options_hi: ["true", "false", "[]", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method is used to convert a string to uppercase?",
    question_hi: "स्ट्रिंग को अप्परकेस में कन्वर्ट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toUpperCase()", "toUpper()", "upperCase()", "caseUpper()"],
    options_hi: ["toUpperCase()", "toUpper()", "upperCase()", "caseUpper()"],
    answer_en: "toUpperCase()",
    answer_hi: "toUpperCase()",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the output of `console.log(1 + + '1')`?",
    question_hi: "`console.log(1 + + '1')` का आउटपुट क्या है?",
    options_en: ["2", "'11'", "11", "NaN"],
    options_hi: ["2", "'11'", "11", "NaN"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which keyword is used to refer to the current object in a method?",
    question_hi: "मेथड में करंट ऑब्जेक्ट को रेफर करने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    options_en: ["this", "self", "current", "object"],
    options_hi: ["this", "self", "current", "object"],
    answer_en: "this",
    answer_hi: "this",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the output of `console.log([1, 2, 3].includes(2))`?",
    question_hi: "`console.log([1, 2, 3].includes(2))` का आउटपुट क्या है?",
    options_en: ["true", "false", "2", "Error"],
    options_hi: ["true", "false", "2", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method is used to remove the first element from an array?",
    question_hi: "ऐरे से पहला एलिमेंट रिमूव करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["shift()", "pop()", "removeFirst()", "splice(0, 1)"],
    options_hi: ["shift()", "pop()", "removeFirst()", "splice(0, 1)"],
    answer_en: "shift()",
    answer_hi: "shift()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the output of `console.log(typeof null)`?",
    question_hi: "`console.log(typeof null)` का आउटपुट क्या है?",
    options_en: ["'object'", "'null'", "'undefined'", "'boolean'"],
    options_hi: ["'object'", "'null'", "'undefined'", "'boolean'"],
    answer_en: "'object'",
    answer_hi: "'object'",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to check if a string contains a substring?",
    question_hi: "स्ट्रिंग में सबस्ट्रिंग है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["includes()", "contains()", "has()", "indexOf() !== -1"],
    options_hi: ["includes()", "contains()", "has()", "indexOf() !== -1"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the output of `console.log(2 * '3')`?",
    question_hi: "`console.log(2 * '3')` का आउटपुट क्या है?",
    options_en: ["6", "'6'", "23", "NaN"],
    options_hi: ["6", "'6'", "23", "NaN"],
    answer_en: "6",
    answer_hi: "6",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to sort an array?",
    question_hi: "ऐरे को सॉर्ट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["sort()", "order()", "arrange()", "sorted()"],
    options_hi: ["sort()", "order()", "arrange()", "sorted()"],
    answer_en: "sort()",
    answer_hi: "sort()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the output of `console.log(!!'')`?",
    question_hi: "`console.log(!!'')` का आउटपुट क्या है?",
    options_en: ["false", "true", "''", "Error"],
    options_hi: ["false", "true", "''", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to create a new array with all elements that pass a test?",
    question_hi: "टेस्ट पास करने वाले सभी एलिमेंट्स के साथ नई ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["filter()", "map()", "find()", "select()"],
    options_hi: ["filter()", "map()", "find()", "select()"],
    answer_en: "filter()",
    answer_hi: "filter()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the output of `console.log(0 || 'default')`?",
    question_hi: "`console.log(0 || 'default')` का आउटपुट क्या है?",
    options_en: ["'default'", "0", "false", "Error"],
    options_hi: ["'default'", "0", "false", "Error"],
    answer_en: "'default'",
    answer_hi: "'default'",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which keyword is used to create a new instance of a class?",
    question_hi: "क्लास की नई इंस्टेंस बनाने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    options_en: ["new", "create", "instance", "this"],
    options_hi: ["new", "create", "instance", "this"],
    answer_en: "new",
    answer_hi: "new",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the output of `console.log([1, 2, 3].find(x => x > 1))`?",
    question_hi: "`console.log([1, 2, 3].find(x => x > 1))` का आउटपुट क्या है?",
    options_en: ["2", "[2, 3]", "true", "undefined"],
    options_hi: ["2", "[2, 3]", "true", "undefined"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to get the length of a string?",
    question_hi: "स्ट्रिंग की लेंथ प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: [".length", ".size()", ".count()", ".getLength()"],
    options_hi: [".length", ".size()", ".count()", ".getLength()"],
    answer_en: ".length",
    answer_hi: ".length",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log(typeof true)`?",
    question_hi: "`console.log(typeof true)` का आउटपुट क्या है?",
    options_en: ["'boolean'", "'true'", "'object'", "'string'"],
    options_hi: ["'boolean'", "'true'", "'object'", "'string'"],
    answer_en: "'boolean'",
    answer_hi: "'boolean'",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to execute a function for each array element?",
    question_hi: "हर ऐरे एलिमेंट के लिए फंक्शन एक्जीक्यूट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["forEach()", "map()", "for()", "loop()"],
    options_hi: ["forEach()", "map()", "for()", "loop()"],
    answer_en: "forEach()",
    answer_hi: "forEach()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the output of `console.log('5' + 3)`?",
    question_hi: "`console.log('5' + 3)` का आउटपुट क्या है?",
    options_en: ["'53'", "8", "'8'", "Error"],
    options_hi: ["'53'", "8", "'8'", "Error"],
    answer_en: "'53'",
    answer_hi: "'53'",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to convert a number to a string?",
    question_hi: "नंबर को स्ट्रिंग में कन्वर्ट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: [".toString()", "String()", "Both A and B", "parseString()"],
    options_hi: [".toString()", "String()", "A और B दोनों", "parseString()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the output of `console.log(undefined == null)`?",
    question_hi: "`console.log(undefined == null)` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to get the current date and time?",
    question_hi: "करंट डेट और टाइम प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["new Date()", "Date.now()", "Both A and B", "Time.current()"],
    options_hi: ["new Date()", "Date.now()", "A और B दोनों", "Time.current()"],
    answer_en: "new Date()",
    answer_hi: "new Date()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the output of `console.log(2 ** 4)`?",
    question_hi: "`console.log(2 ** 4)` का आउटपुट क्या है?",
    options_en: ["16", "8", "6", "Error"],
    options_hi: ["16", "8", "6", "Error"],
    answer_en: "16",
    answer_hi: "16",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method is used to check if a value is NaN?",
    question_hi: "वैल्यू NaN है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number.isNaN()", "isNaN()", "Both A and B", "NaN.check()"],
    options_hi: ["Number.isNaN()", "isNaN()", "A और B दोनों", "NaN.check()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the output of `console.log([1, 2] + [3, 4])`?",
    question_hi: "`console.log([1, 2] + [3, 4])` का आउटपुट क्या है?",
    options_en: ["'1,23,4'", "[1,2,3,4]", "[4,6]", "Error"],
    options_hi: ["'1,23,4'", "[1,2,3,4]", "[4,6]", "Error"],
    answer_en: "'1,23,4'",
    answer_hi: "'1,23,4'",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to remove whitespace from start of a string?",
    question_hi: "स्ट्रिंग के स्टार्ट से व्हाइटस्पेस रिमूव करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["trimStart()", "trimLeft()", "Both A and B", "trim()"],
    options_hi: ["trimStart()", "trimLeft()", "A और B दोनों", "trim()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the output of `console.log(typeof {})`?",
    question_hi: "`console.log(typeof {})` का आउटपुट क्या है?",
    options_en: ["'object'", "'{}'", "'undefined'", "'null'"],
    options_hi: ["'object'", "'{}'", "'undefined'", "'null'"],
    answer_en: "'object'",
    answer_hi: "'object'",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to check if an array is empty?",
    question_hi: "ऐरे एम्प्टी है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["array.length === 0", "array.isEmpty()", "array.empty()", "isArrayEmpty(array)"],
    options_hi: ["array.length === 0", "array.isEmpty()", "array.empty()", "isArrayEmpty(array)"],
    answer_en: "array.length === 0",
    answer_hi: "array.length === 0",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the output of `console.log(1 && 0)`?",
    question_hi: "`console.log(1 && 0)` का आउटपुट क्या है?",
    options_en: ["0", "1", "false", "true"],
    options_hi: ["0", "1", "false", "true"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to get a random number between 0 and 1?",
    question_hi: "0 और 1 के बीच रैंडम नंबर प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.random()", "random()", "Math.rand()", "Number.random()"],
    options_hi: ["Math.random()", "random()", "Math.rand()", "Number.random()"],
    answer_en: "Math.random()",
    answer_hi: "Math.random()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the output of `console.log(Boolean(1))`?",
    question_hi: "`console.log(Boolean(1))` का आउटपुट क्या है?",
    options_en: ["true", "false", "1", "Error"],
    options_hi: ["true", "false", "1", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method is used to round a number to the nearest integer?",
    question_hi: "नंबर को नजदीकी इंटीजर में राउंड करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.round()", "Math.floor()", "Math.ceil()", "round()"],
    options_hi: ["Math.round()", "Math.floor()", "Math.ceil()", "round()"],
    answer_en: "Math.round()",
    answer_hi: "Math.round()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(+true)`?",
    question_hi: "`console.log(+true)` का आउटपुट क्या है?",
    options_en: ["1", "0", "true", "Error"],
    options_hi: ["1", "0", "true", "Error"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to find the last index of an element in an array?",
    question_hi: "ऐरे में एलिमेंट का लास्ट इंडेक्स ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["lastIndexOf()", "findLastIndex()", "Both A and B", "searchLast()"],
    options_hi: ["lastIndexOf()", "findLastIndex()", "A और B दोनों", "searchLast()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the output of `console.log(undefined === null)`?",
    question_hi: "`console.log(undefined === null)` का आउटपुट क्या है?",
    options_en: ["false", "true", "Error", "undefined"],
    options_hi: ["false", "true", "Error", "undefined"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to convert a string to a number?",
    question_hi: "स्ट्रिंग को नंबर में कन्वर्ट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
    options_hi: ["Number()", "parseInt()", "parseFloat()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the output of `console.log([].constructor === Array)`?",
    question_hi: "`console.log([].constructor === Array)` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method is used to remove whitespace from end of a string?",
    question_hi: "स्ट्रिंग के एंड से व्हाइटस्पेस रिमूव करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["trimEnd()", "trimRight()", "Both A and B", "trim()"],
    options_hi: ["trimEnd()", "trimRight()", "A और B दोनों", "trim()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the output of `console.log(2 == '2')`?",
    question_hi: "`console.log(2 == '2')` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to get the square root of a number?",
    question_hi: "नंबर का स्क्वायर रूट प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.sqrt()", "sqrt()", "Math.root()", "Number.sqrt()"],
    options_hi: ["Math.sqrt()", "sqrt()", "Math.root()", "Number.sqrt()"],
    answer_en: "Math.sqrt()",
    answer_hi: "Math.sqrt()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the output of `console.log(typeof Date)`?",
    question_hi: "`console.log(typeof Date)` का आउटपुट क्या है?",
    options_en: ["'function'", "'object'", "'date'", "'undefined'"],
    options_hi: ["'function'", "'object'", "'date'", "'undefined'"],
    answer_en: "'function'",
    answer_hi: "'function'",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to check if a string matches a regular expression?",
    question_hi: "स्ट्रिंग रेगुलर एक्सप्रेशन से मैच करती है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["match()", "test()", "search()", "All of the above"],
    options_hi: ["match()", "test()", "search()", "उपरोक्त सभी"],
    answer_en: "match()",
    answer_hi: "match()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the output of `console.log(0 == false)`?",
    question_hi: "`console.log(0 == false)` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to get the absolute value of a number?",
    question_hi: "नंबर का एब्सोल्यूट वैल्यू प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.abs()", "abs()", "Math.absolute()", "Number.abs()"],
    options_hi: ["Math.abs()", "abs()", "Math.absolute()", "Number.abs()"],
    answer_en: "Math.abs()",
    answer_hi: "Math.abs()",
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
