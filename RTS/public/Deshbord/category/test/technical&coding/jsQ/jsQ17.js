const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log(typeof [])`?",
    question_hi: "`console.log(typeof [])` का आउटपुट क्या है?",
    options_en: ["object", "array", "undefined", "string"],
    options_hi: ["object", "array", "undefined", "string"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method is used to convert a string to an integer?",
    question_hi: "स्ट्रिंग को इंटीजर में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["parseInt()", "parseFloat()", "Number()", "String()"],
    options_hi: ["parseInt()", "parseFloat()", "Number()", "String()"],
    answer_en: "parseInt()",
    answer_hi: "parseInt()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `++` operator do?",
    question_hi: "`++` ऑपरेटर क्या करता है?",
    options_en: ["Increments a value", "Adds two numbers", "Concatenates strings", "Compares values"],
    options_hi: ["वैल्यू बढ़ाता है", "दो नंबर जोड़ता है", "स्ट्रिंग जोड़ता है", "वैल्यू तुलना करता है"],
    answer_en: "Increments a value",
    answer_hi: "वैल्यू बढ़ाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which keyword is used to declare a variable in JavaScript?",
    question_hi: "JavaScript में वेरिएबल डिक्लेयर करने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    options_en: ["var", "let", "const", "All of the above"],
    options_hi: ["var", "let", "const", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `console.error()`?",
    question_hi: "`console.error()` का उद्देश्य क्या है?",
    options_en: ["Display error messages", "Log information", "Show warnings", "Clear console"],
    options_hi: ["एरर मैसेज दिखाना", "इनफॉर्मेशन लॉग करना", "वार्निंग दिखाना", "कंसोल क्लियर करना"],
    answer_en: "Display error messages",
    answer_hi: "एरर मैसेज दिखाना",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which method is used to round a number down to the nearest integer?",
    question_hi: "नंबर को नीचे की ओर नजदीकी इंटीजर में राउंड करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
    options_hi: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
    answer_en: "Math.floor()",
    answer_hi: "Math.floor()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What does `NaN` represent in JavaScript?",
    question_hi: "JavaScript में `NaN` क्या रिप्रेजेंट करता है?",
    options_en: ["Not a Number", "Not a Null", "Number and Null", "No assigned Number"],
    options_hi: ["नॉट ए नंबर", "नॉट ए नल", "नंबर एंड नल", "नो असाइंड नंबर"],
    answer_en: "Not a Number",
    answer_hi: "नॉट ए नंबर",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method is used to remove the last element from an array?",
    question_hi: "ऐरे से आखिरी एलिमेंट हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["pop()", "push()", "shift()", "unshift()"],
    options_hi: ["pop()", "push()", "shift()", "unshift()"],
    answer_en: "pop()",
    answer_hi: "pop()",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the purpose of `===` operator?",
    question_hi: "`===` ऑपरेटर का उद्देश्य क्या है?",
    options_en: ["Strict equality comparison", "Assignment", "Loose equality comparison", "Type conversion"],
    options_hi: ["स्ट्रिक्ट इक्वलिटी कम्पेरिजन", "असाइनमेंट", "लूज इक्वलिटी कम्पेरिजन", "टाइप कन्वर्जन"],
    answer_en: "Strict equality comparison",
    answer_hi: "स्ट्रिक्ट इक्वलिटी कम्पेरिजन",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method is used to add elements to the beginning of an array?",
    question_hi: "ऐरे की शुरुआत में एलिमेंट जोड़ने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["unshift()", "push()", "shift()", "pop()"],
    options_hi: ["unshift()", "push()", "shift()", "pop()"],
    answer_en: "unshift()",
    answer_hi: "unshift()",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the output of `console.log('5' - 3)`?",
    question_hi: "`console.log('5' - 3)` का आउटपुट क्या है?",
    options_en: ["2", "53", "NaN", "Error"],
    options_hi: ["2", "53", "NaN", "एरर"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method is used to find the length of a string?",
    question_hi: "स्ट्रिंग की लंबाई ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["length", "size()", "count()", "getLength()"],
    options_hi: ["length", "size()", "count()", "getLength()"],
    answer_en: "length",
    answer_hi: "length",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the purpose of `return` statement in a function?",
    question_hi: "फंक्शन में `return` स्टेटमेंट का उद्देश्य क्या है?",
    options_en: ["Return a value from function", "Stop function execution", "Both A and B", "None of the above"],
    options_hi: ["फंक्शन से वैल्यू लौटाना", "फंक्शन एक्जीक्यूशन रोकना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to convert an object to a JSON string?",
    question_hi: "ऑब्जेक्ट को JSON स्ट्रिंग में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["JSON.stringify()", "JSON.parse()", "Object.toString()", "String()"],
    options_hi: ["JSON.stringify()", "JSON.parse()", "Object.toString()", "String()"],
    answer_en: "JSON.stringify()",
    answer_hi: "JSON.stringify()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the purpose of `break` statement in a loop?",
    question_hi: "लूप में `break` स्टेटमेंट का उद्देश्य क्या है?",
    options_en: ["Exit the loop immediately", "Skip current iteration", "Continue to next iteration", "Stop the program"],
    options_hi: ["लूप से तुरंत बाहर निकलना", "करंट इटरेशन स्किप करना", "अगली इटरेशन जारी रखना", "प्रोग्राम रोकना"],
    answer_en: "Exit the loop immediately",
    answer_hi: "लूप से तुरंत बाहर निकलना",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to get the current date and time?",
    question_hi: "करेंट डेट और टाइम पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["new Date()", "Date.now()", "Date.current()", "getCurrentDate()"],
    options_hi: ["new Date()", "Date.now()", "Date.current()", "getCurrentDate()"],
    answer_en: "new Date()",
    answer_hi: "new Date()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `null` in JavaScript?",
    question_hi: "JavaScript में `null` का उद्देश्य क्या है?",
    options_en: ["Represent intentional absence of value", "Represent undefined value", "Represent zero", "Represent empty string"],
    options_hi: ["वैल्यू की जानबूझकर अनुपस्थिति दिखाना", "अनडिफाइंड वैल्यू दिखाना", "जीरो दिखाना", "खाली स्ट्रिंग दिखाना"],
    answer_en: "Represent intentional absence of value",
    answer_hi: "वैल्यू की जानबूझकर अनुपस्थिति दिखाना",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to check if a string contains a specified substring?",
    question_hi: "स्ट्रिंग में स्पेसिफाइड सबस्ट्रिंग है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["includes()", "contains()", "has()", "find()"],
    options_hi: ["includes()", "contains()", "has()", "find()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the output of `console.log(Boolean(''))`?",
    question_hi: "`console.log(Boolean(''))` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "null"],
    options_hi: ["false", "true", "undefined", "null"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method is used to execute a function after a specified delay?",
    question_hi: "स्पेसिफाइड डिले के बाद फंक्शन एक्जीक्यूट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    options_hi: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    answer_en: "setTimeout()",
    answer_hi: "setTimeout()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the purpose of `class` keyword in JavaScript?",
    question_hi: "JavaScript में `class` कीवर्ड का उद्देश्य क्या है?",
    options_en: ["Define a class", "Create an object", "Declare a variable", "Define a function"],
    options_hi: ["क्लास डिफाइन करना", "ऑब्जेक्ट बनाना", "वेरिएबल डिक्लेयर करना", "फंक्शन डिफाइन करना"],
    answer_en: "Define a class",
    answer_hi: "क्लास डिफाइन करना",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to remove the first element from an array?",
    question_hi: "ऐरे से पहला एलिमेंट हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["shift()", "pop()", "unshift()", "push()"],
    options_hi: ["shift()", "pop()", "unshift()", "push()"],
    answer_en: "shift()",
    answer_hi: "shift()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log(2 ** 3)`?",
    question_hi: "`console.log(2 ** 3)` का आउटपुट क्या है?",
    options_en: ["8", "6", "9", "5"],
    options_hi: ["8", "6", "9", "5"],
    answer_en: "8",
    answer_hi: "8",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to find the maximum value in a list of numbers?",
    question_hi: "नंबर्स की लिस्ट में मैक्सिमम वैल्यू ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.max()", "Math.min()", "Array.max()", "Number.max()"],
    options_hi: ["Math.max()", "Math.min()", "Array.max()", "Number.max()"],
    answer_en: "Math.max()",
    answer_hi: "Math.max()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the purpose of `try...catch` statement?",
    question_hi: "`try...catch` स्टेटमेंट का उद्देश्य क्या है?",
    options_en: ["Handle errors", "Create errors", "Ignore errors", "Log errors"],
    options_hi: ["एरर्स हैंडल करना", "एरर्स बनाना", "एरर्स इग्नोर करना", "एरर्स लॉग करना"],
    answer_en: "Handle errors",
    answer_hi: "एरर्स हैंडल करना",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to repeat a string a specified number of times?",
    question_hi: "स्ट्रिंग को स्पेसिफाइड नंबर ऑफ टाइम्स रिपीट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["repeat()", "copy()", "duplicate()", "multiply()"],
    options_hi: ["repeat()", "copy()", "duplicate()", "multiply()"],
    answer_en: "repeat()",
    answer_hi: "repeat()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the output of `console.log([] + [])`?",
    question_hi: "`console.log([] + [])` का आउटपुट क्या है?",
    options_en: ["''", "[]", "[object Object]", "0"],
    options_hi: ["''", "[]", "[object Object]", "0"],
    answer_en: "''",
    answer_hi: "''",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to check if a variable is undefined?",
    question_hi: "वेरिएबल अनडिफाइंड है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["typeof variable === 'undefined'", "variable === undefined", "Both A and B", "None of the above"],
    options_hi: ["typeof variable === 'undefined'", "variable === undefined", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `document.getElementById()`?",
    question_hi: "`document.getElementById()` का उद्देश्य क्या है?",
    options_en: ["Get element by ID", "Get element by class", "Create new element", "Remove element"],
    options_hi: ["ID से एलिमेंट लेना", "क्लास से एलिमेंट लेना", "नया एलिमेंट बनाना", "एलिमेंट हटाना"],
    answer_en: "Get element by ID",
    answer_hi: "ID से एलिमेंट लेना",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which operator is used for strict inequality comparison?",
    question_hi: "स्ट्रिक्ट इनइक्वलिटी कम्पेरिजन के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    options_en: ["!==", "!=", "===", "=="],
    options_hi: ["!==", "!=", "===", "=="],
    answer_en: "!==",
    answer_hi: "!==",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the output of `console.log('Hello'.length)`?",
    question_hi: "`console.log('Hello'.length)` का आउटपुट क्या है?",
    options_en: ["5", "4", "6", "Error"],
    options_hi: ["5", "4", "6", "एरर"],
    answer_en: "5",
    answer_hi: "5",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to convert a number to a string?",
    question_hi: "नंबर को स्ट्रिंग में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toString()", "String()", "Both A and B", "None of the above"],
    options_hi: ["toString()", "String()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of `Array.isArray()` method?",
    question_hi: "`Array.isArray()` मेथड का उद्देश्य क्या है?",
    options_en: ["Check if value is an array", "Create new array", "Convert to array", "Check array length"],
    options_hi: ["चेक करना वैल्यू ऐरे है", "नया ऐरे बनाना", "ऐरे में बदलना", "ऐरे लंबाई चेक करना"],
    answer_en: "Check if value is an array",
    answer_hi: "चेक करना वैल्यू ऐरे है",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to sort the elements of an array?",
    question_hi: "ऐरे के एलिमेंट्स को सॉर्ट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["sort()", "order()", "arrange()", "sequence()"],
    options_hi: ["sort()", "order()", "arrange()", "sequence()"],
    answer_en: "sort()",
    answer_hi: "sort()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the output of `console.log(0 == false)`?",
    question_hi: "`console.log(0 == false)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "null"],
    options_hi: ["true", "false", "undefined", "null"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to create a new array from an existing array?",
    question_hi: "एक्सिस्टिंग ऐरे से नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["slice()", "splice()", "split()", "cut()"],
    options_hi: ["slice()", "splice()", "split()", "cut()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `window.alert()` method?",
    question_hi: "`window.alert()` मेथड का उद्देश्य क्या है?",
    options_en: ["Display alert dialog", "Show confirmation dialog", "Display prompt dialog", "Log message to console"],
    options_hi: ["अलर्ट डायलॉग दिखाना", "कन्फर्मेशन डायलॉग दिखाना", "प्रॉम्प्ट डायलॉग दिखाना", "कंसोल में मैसेज लॉग करना"],
    answer_en: "Display alert dialog",
    answer_hi: "अलर्ट डायलॉग दिखाना",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method is used to find the square root of a number?",
    question_hi: "नंबर का स्क्वायर रूट ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.sqrt()", "Math.pow()", "Math.root()", "Math.square()"],
    options_hi: ["Math.sqrt()", "Math.pow()", "Math.root()", "Math.square()"],
    answer_en: "Math.sqrt()",
    answer_hi: "Math.sqrt()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(typeof NaN)`?",
    question_hi: "`console.log(typeof NaN)` का आउटपुट क्या है?",
    options_en: ["number", "NaN", "undefined", "string"],
    options_hi: ["number", "NaN", "undefined", "string"],
    answer_en: "number",
    answer_hi: "number",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to remove whitespace from the end of a string?",
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
    question_en: "What is the purpose of `continue` statement in a loop?",
    question_hi: "लूप में `continue` स्टेटमेंट का उद्देश्य क्या है?",
    options_en: ["Skip current iteration", "Exit the loop", "Stop the program", "Restart the loop"],
    options_hi: ["करंट इटरेशन स्किप करना", "लूप से बाहर निकलना", "प्रोग्राम रोकना", "लूप रीस्टार्ट करना"],
    answer_en: "Skip current iteration",
    answer_hi: "करंट इटरेशन स्किप करना",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to get a substring from a string?",
    question_hi: "स्ट्रिंग से सबस्ट्रिंग लेने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["substring()", "slice()", "substr()", "All of the above"],
    options_hi: ["substring()", "slice()", "substr()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the output of `console.log(!!'')`?",
    question_hi: "`console.log(!!'')` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "null"],
    options_hi: ["false", "true", "undefined", "null"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method is used to execute a function repeatedly at specified intervals?",
    question_hi: "स्पेसिफाइड इंटरवल पर बार-बार फंक्शन एक्जीक्यूट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["setInterval()", "setTimeout()", "repeat()", "interval()"],
    options_hi: ["setInterval()", "setTimeout()", "repeat()", "interval()"],
    answer_en: "setInterval()",
    answer_hi: "setInterval()",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the purpose of `document.querySelector()`?",
    question_hi: "`document.querySelector()` का उद्देश्य क्या है?",
    options_en: ["Select first matching element", "Select all matching elements", "Create new element", "Remove element"],
    options_hi: ["पहला मैचिंग एलिमेंट सेलेक्ट करना", "सभी मैचिंग एलिमेंट्स सेलेक्ट करना", "नया एलिमेंट बनाना", "एलिमेंट हटाना"],
    answer_en: "Select first matching element",
    answer_hi: "पहला मैचिंग एलिमेंट सेलेक्ट करना",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to check if a string starts with a specified substring?",
    question_hi: "स्ट्रिंग स्पेसिफाइड सबस्ट्रिंग से शुरू होती है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["startsWith()", "endsWith()", "includes()", "contains()"],
    options_hi: ["startsWith()", "endsWith()", "includes()", "contains()"],
    answer_en: "startsWith()",
    answer_hi: "startsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the output of `console.log([] === [])`?",
    question_hi: "`console.log([] === [])` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "एरर"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to remove whitespace from the beginning of a string?",
    question_hi: "स्ट्रिंग की शुरुआत से व्हाइटस्पेस हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["trimStart()", "trim()", "trimEnd()", "strip()"],
    options_hi: ["trimStart()", "trim()", "trimEnd()", "strip()"],
    answer_en: "trimStart()",
    answer_hi: "trimStart()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `instanceof` operator?",
    question_hi: "`instanceof` ऑपरेटर का उद्देश्य क्या है?",
    options_en: ["Check if object is instance of class", "Check object type", "Compare objects", "Create new instance"],
    options_hi: ["चेक करना ऑब्जेक्ट क्लास का इंस्टेंस है", "ऑब्जेक्ट टाइप चेक करना", "ऑब्जेक्ट्स कम्पेयर करना", "नया इंस्टेंस बनाना"],
    answer_en: "Check if object is instance of class",
    answer_hi: "चेक करना ऑब्जेक्ट क्लास का इंस्टेंस है",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to find the minimum value in a list of numbers?",
    question_hi: "नंबर्स की लिस्ट में मिनिमम वैल्यू ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.min()", "Math.max()", "Array.min()", "Number.min()"],
    options_hi: ["Math.min()", "Math.max()", "Array.min()", "Number.min()"],
    answer_en: "Math.min()",
    answer_hi: "Math.min()",
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
