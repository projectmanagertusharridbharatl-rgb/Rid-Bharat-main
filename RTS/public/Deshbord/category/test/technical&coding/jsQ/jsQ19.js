const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log([] == false)`?",
    question_hi: "`console.log([] == false)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method is used to convert a string to a number?",
    question_hi: "स्ट्रिंग को नंबर में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
    options_hi: ["Number()", "parseInt()", "parseFloat()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `delete` operator do in JavaScript?",
    question_hi: "`delete` ऑपरेटर JavaScript में क्या करता है?",
    options_en: ["Deletes object properties", "Deletes variables", "Deletes functions", "All of the above"],
    options_hi: ["ऑब्जेक्ट प्रॉपर्टीज डिलीट करता है", "वेरिएबल्स डिलीट करता है", "फंक्शन्स डिलीट करता है", "उपरोक्त सभी"],
    answer_en: "Deletes object properties",
    answer_hi: "ऑब्जेक्ट प्रॉपर्टीज डिलीट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method is used to add elements to the end of an array?",
    question_hi: "ऐरे के अंत में एलिमेंट जोड़ने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["push()", "pop()", "shift()", "unshift()"],
    options_hi: ["push()", "pop()", "shift()", "unshift()"],
    answer_en: "push()",
    answer_hi: "push()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `console.warn()`?",
    question_hi: "`console.warn()` का उद्देश्य क्या है?",
    options_en: ["Display warning messages", "Display error messages", "Display info messages", "Clear console"],
    options_hi: ["वार्निंग मैसेज दिखाना", "एरर मैसेज दिखाना", "इनफॉर्मेशन मैसेज दिखाना", "कंसोल क्लियर करना"],
    answer_en: "Display warning messages",
    answer_hi: "वार्निंग मैसेज दिखाना",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which method is used to round a number to the nearest integer?",
    question_hi: "नंबर को नजदीकी इंटीजर में राउंड करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
    options_hi: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
    answer_en: "Math.round()",
    answer_hi: "Math.round()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the output of `console.log(typeof undefined)`?",
    question_hi: "`console.log(typeof undefined)` का आउटपुट क्या है?",
    options_en: ["undefined", "null", "object", "string"],
    options_hi: ["undefined", "null", "object", "string"],
    answer_en: "undefined",
    answer_hi: "undefined",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
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
    num: 9,
    question_en: "What is the purpose of `!==` operator?",
    question_hi: "`!==` ऑपरेटर का उद्देश्य क्या है?",
    options_en: ["Strict inequality comparison", "Assignment", "Loose inequality comparison", "Type conversion"],
    options_hi: ["स्ट्रिक्ट इनइक्वलिटी कम्पेरिजन", "असाइनमेंट", "लूज इनइक्वलिटी कम्पेरिजन", "टाइप कन्वर्जन"],
    answer_en: "Strict inequality comparison",
    answer_hi: "स्ट्रिक्ट इनइक्वलिटी कम्पेरिजन",
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
    question_en: "What is the output of `console.log('5' * 3)`?",
    question_hi: "`console.log('5' * 3)` का आउटपुट क्या है?",
    options_en: ["15", "53", "NaN", "Error"],
    options_hi: ["15", "53", "NaN", "एरर"],
    answer_en: "15",
    answer_hi: "15",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property is used to find the length of an array?",
    question_hi: "ऐरे की लंबाई ढूंढने के लिए कौन-सा प्रॉपर्टी उपयोग होता है?",
    options_en: ["length", "size", "count", "getLength()"],
    options_hi: ["length", "size", "count", "getLength()"],
    answer_en: "length",
    answer_hi: "length",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the purpose of `function` keyword?",
    question_hi: "`function` कीवर्ड का उद्देश्य क्या है?",
    options_en: ["Define a function", "Call a function", "Return from function", "All of the above"],
    options_hi: ["फंक्शन डिफाइन करना", "फंक्शन कॉल करना", "फंक्शन से रिटर्न करना", "उपरोक्त सभी"],
    answer_en: "Define a function",
    answer_hi: "फंक्शन डिफाइन करना",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to convert a JSON string to JavaScript object?",
    question_hi: "JSON स्ट्रिंग को JavaScript ऑब्जेक्ट में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["JSON.parse()", "JSON.stringify()", "Object.parse()", "String.parse()"],
    options_hi: ["JSON.parse()", "JSON.stringify()", "Object.parse()", "String.parse()"],
    answer_en: "JSON.parse()",
    answer_hi: "JSON.parse()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
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
    num: 16,
    question_en: "Which method is used to get the current date?",
    question_hi: "करेंट डेट पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["new Date()", "Date.now()", "Date.current()", "getCurrentDate()"],
    options_hi: ["new Date()", "Date.now()", "Date.current()", "getCurrentDate()"],
    answer_en: "new Date()",
    answer_hi: "new Date()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `undefined` in JavaScript?",
    question_hi: "JavaScript में `undefined` का उद्देश्य क्या है?",
    options_en: ["Represent uninitialized variables", "Represent missing properties", "Both A and B", "None of the above"],
    options_hi: ["अनइनिशियलाइज्ड वेरिएबल्स रिप्रेजेंट करना", "मिसिंग प्रॉपर्टीज रिप्रेजेंट करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to check if a string contains a substring?",
    question_hi: "स्ट्रिंग में सबस्ट्रिंग है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["includes()", "contains()", "has()", "find()"],
    options_hi: ["includes()", "contains()", "has()", "find()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the output of `console.log(Boolean(0))`?",
    question_hi: "`console.log(Boolean(0))` का आउटपुट क्या है?",
    options_en: ["false", "true", "0", "1"],
    options_hi: ["false", "true", "0", "1"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method is used to execute a function repeatedly?",
    question_hi: "फंक्शन को बार-बार एक्जीक्यूट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["setInterval()", "setTimeout()", "delay()", "repeat()"],
    options_hi: ["setInterval()", "setTimeout()", "delay()", "repeat()"],
    answer_en: "setInterval()",
    answer_hi: "setInterval()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the purpose of `const` keyword?",
    question_hi: "`const` कीवर्ड का उद्देश्य क्या है?",
    options_en: ["Declare constant variables", "Declare block-scoped variables", "Both A and B", "None of the above"],
    options_hi: ["कॉन्स्टेंट वेरिएबल्स डिक्लेयर करना", "ब्लॉक-स्कोप्ड वेरिएबल्स डिक्लेयर करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to remove elements from an array?",
    question_hi: "ऐरे से एलिमेंट्स हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["splice()", "slice()", "split()", "cut()"],
    options_hi: ["splice()", "slice()", "split()", "cut()"],
    answer_en: "splice()",
    answer_hi: "splice()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log(3 ** 2)`?",
    question_hi: "`console.log(3 ** 2)` का आउटपुट क्या है?",
    options_en: ["9", "6", "8", "5"],
    options_hi: ["9", "6", "8", "5"],
    answer_en: "9",
    answer_hi: "9",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to find the minimum value?",
    question_hi: "मिनिमम वैल्यू ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.min()", "Math.max()", "Array.min()", "Number.min()"],
    options_hi: ["Math.min()", "Math.max()", "Array.min()", "Number.min()"],
    answer_en: "Math.min()",
    answer_hi: "Math.min()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the purpose of `throw` statement?",
    question_hi: "`throw` स्टेटमेंट का उद्देश्य क्या है?",
    options_en: ["Throw an exception", "Create an error", "Both A and B", "None of the above"],
    options_hi: ["एक्सेप्शन थ्रो करना", "एरर बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to repeat a string?",
    question_hi: "स्ट्रिंग को रिपीट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["repeat()", "copy()", "duplicate()", "multiply()"],
    options_hi: ["repeat()", "copy()", "duplicate()", "multiply()"],
    answer_en: "repeat()",
    answer_hi: "repeat()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the output of `console.log({} + [])`?",
    question_hi: "`console.log({} + [])` का आउटपुट क्या है?",
    options_en: ["[object Object]", "{}", "[]", "0"],
    options_hi: ["[object Object]", "{}", "[]", "0"],
    answer_en: "[object Object]",
    answer_hi: "[object Object]",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to check if a variable is defined?",
    question_hi: "वेरिएबल डिफाइंड है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["typeof variable !== 'undefined'", "variable !== undefined", "Both A and B", "None of the above"],
    options_hi: ["typeof variable !== 'undefined'", "variable !== undefined", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `document.querySelector()`?",
    question_hi: "`document.querySelector()` का उद्देश्य क्या है?",
    options_en: ["Select first matching element", "Select all matching elements", "Create element", "Remove element"],
    options_hi: ["पहला मैचिंग एलिमेंट सेलेक्ट करना", "सभी मैचिंग एलिमेंट्स सेलेक्ट करना", "एलिमेंट बनाना", "एलिमेंट हटाना"],
    answer_en: "Select first matching element",
    answer_hi: "पहला मैचिंग एलिमेंट सेलेक्ट करना",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which operator is used for loose equality comparison?",
    question_hi: "लूज इक्वलिटी कम्पेरिजन के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    options_en: ["==", "===", "!=", "!=="],
    options_hi: ["==", "===", "!=", "!=="],
    answer_en: "==",
    answer_hi: "==",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the output of `console.log('Hello'.charAt(1))`?",
    question_hi: "`console.log('Hello'.charAt(1))` का आउटपुट क्या है?",
    options_en: ["'e'", "'H'", "'l'", "Error"],
    options_hi: ["'e'", "'H'", "'l'", "एरर"],
    answer_en: "'e'",
    answer_hi: "'e'",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to convert a number to exponential notation?",
    question_hi: "नंबर को एक्सपोनेंशियल नोटेशन में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toExponential()", "toFixed()", "toPrecision()", "toString()"],
    options_hi: ["toExponential()", "toFixed()", "toPrecision()", "toString()"],
    answer_en: "toExponential()",
    answer_hi: "toExponential()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of `Array.prototype.forEach()`?",
    question_hi: "`Array.prototype.forEach()` का उद्देश्य क्या है?",
    options_en: ["Execute function for each element", "Create new array", "Filter elements", "Reduce array"],
    options_hi: ["प्रत्येक एलिमेंट के लिए फंक्शन चलाना", "नया ऐरे बनाना", "एलिमेंट्स फिल्टर करना", "ऐरे रिड्यूस करना"],
    answer_en: "Execute function for each element",
    answer_hi: "प्रत्येक एलिमेंट के लिए फंक्शन चलाना",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to sort an array?",
    question_hi: "ऐरे को सॉर्ट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["sort()", "order()", "arrange()", "sequence()"],
    options_hi: ["sort()", "order()", "arrange()", "sequence()"],
    answer_en: "sort()",
    answer_hi: "sort()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the output of `console.log(1 == true)`?",
    question_hi: "`console.log(1 == true)` का आउटपुट क्या है?",
    options_en: ["true", "false", "1", "Error"],
    options_hi: ["true", "false", "1", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to extract part of an array?",
    question_hi: "ऐरे का हिस्सा निकालने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["slice()", "splice()", "split()", "cut()"],
    options_hi: ["slice()", "splice()", "split()", "cut()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `confirm()` method?",
    question_hi: "`confirm()` मेथड का उद्देश्य क्या है?",
    options_en: ["Show confirmation dialog", "Show alert dialog", "Show prompt dialog", "Log message"],
    options_hi: ["कन्फर्मेशन डायलॉग दिखाना", "अलर्ट डायलॉग दिखाना", "प्रॉम्प्ट डायलॉग दिखाना", "मैसेज लॉग करना"],
    answer_en: "Show confirmation dialog",
    answer_hi: "कन्फर्मेशन डायलॉग दिखाना",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method is used to calculate power of a number?",
    question_hi: "नंबर की पावर कैलकुलेट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.pow()", "Math.power()", "Math.exp()", "Number.pow()"],
    options_hi: ["Math.pow()", "Math.power()", "Math.exp()", "Number.pow()"],
    answer_en: "Math.pow()",
    answer_hi: "Math.pow()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(typeof [1, 2, 3])`?",
    question_hi: "`console.log(typeof [1, 2, 3])` का आउटपुट क्या है?",
    options_en: ["object", "array", "undefined", "string"],
    options_hi: ["object", "array", "undefined", "string"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to remove whitespace from start of string?",
    question_hi: "स्ट्रिंग की शुरुआत से व्हाइटस्पेस हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["trimStart()", "trim()", "trimEnd()", "strip()"],
    options_hi: ["trimStart()", "trim()", "trimEnd()", "strip()"],
    answer_en: "trimStart()",
    answer_hi: "trimStart()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the purpose of `return` statement?",
    question_hi: "`return` स्टेटमेंट का उद्देश्य क्या है?",
    options_en: ["Return value from function", "Stop function execution", "Both A and B", "None of the above"],
    options_hi: ["फंक्शन से वैल्यू लौटाना", "फंक्शन एक्जीक्यूशन रोकना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to get part of a string?",
    question_hi: "स्ट्रिंग का हिस्सा पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["substring()", "slice()", "substr()", "All of the above"],
    options_hi: ["substring()", "slice()", "substr()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the output of `console.log(!!'Hello')`?",
    question_hi: "`console.log(!!'Hello')` का आउटपुट क्या है?",
    options_en: ["true", "false", "'Hello'", "Error"],
    options_hi: ["true", "false", "'Hello'", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method is used to clear a timer?",
    question_hi: "टाइमर क्लियर करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["clearInterval()", "clearTimeout()", "Both A and B", "None of the above"],
    options_hi: ["clearInterval()", "clearTimeout()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the purpose of `document.querySelectorAll()`?",
    question_hi: "`document.querySelectorAll()` का उद्देश्य क्या है?",
    options_en: ["Select all matching elements", "Select first element", "Create elements", "Remove elements"],
    options_hi: ["सभी मैचिंग एलिमेंट्स सेलेक्ट करना", "पहला एलिमेंट सेलेक्ट करना", "एलिमेंट्स बनाना", "एलिमेंट्स हटाना"],
    answer_en: "Select all matching elements",
    answer_hi: "सभी मैचिंग एलिमेंट्स सेलेक्ट करना",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to check if string starts with substring?",
    question_hi: "स्ट्रिंग सबस्ट्रिंग से शुरू होती है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["startsWith()", "endsWith()", "includes()", "contains()"],
    options_hi: ["startsWith()", "endsWith()", "includes()", "contains()"],
    answer_en: "startsWith()",
    answer_hi: "startsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the output of `console.log({} === {})`?",
    question_hi: "`console.log({} === {})` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "एरर"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to remove whitespace from both ends?",
    question_hi: "दोनों सिरों से व्हाइटस्पेस हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["trim()", "trimStart()", "trimEnd()", "strip()"],
    options_hi: ["trim()", "trimStart()", "trimEnd()", "strip()"],
    answer_en: "trim()",
    answer_hi: "trim()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `instanceof` operator?",
    question_hi: "`instanceof` ऑपरेटर का उद्देश्य क्या है?",
    options_en: ["Check object type", "Check if object is instance of class", "Both A and B", "None of the above"],
    options_hi: ["ऑब्जेक्ट टाइप चेक करना", "चेक करना ऑब्जेक्ट क्लास का इंस्टेंस है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to find square root?",
    question_hi: "स्क्वायर रूट ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.sqrt()", "Math.root()", "Math.squareRoot()", "Number.sqrt()"],
    options_hi: ["Math.sqrt()", "Math.root()", "Math.squareRoot()", "Number.sqrt()"],
    answer_en: "Math.sqrt()",
    answer_hi: "Math.sqrt()",
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
