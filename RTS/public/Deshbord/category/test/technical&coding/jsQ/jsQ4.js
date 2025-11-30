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
    question_en: "Which method is used to parse a JSON string into an object?",
    question_hi: "JSON स्ट्रिंग को ऑब्जेक्ट में पार्स करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["JSON.parse()", "JSON.stringify()", "Object.parse()", "String.parse()"],
    options_hi: ["JSON.parse()", "JSON.stringify()", "Object.parse()", "String.parse()"],
    answer_en: "JSON.parse()",
    answer_hi: "JSON.parse()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `void` operator do in JavaScript?",
    question_hi: "JavaScript में `void` ऑपरेटर क्या करता है?",
    options_en: ["Evaluates expression and returns undefined", "Deletes a variable", "Stops execution", "Skips expression"],
    options_hi: ["एक्सप्रेशन इवैल्यूएट करता है और undefined लौटाता है", "वेरिएबल डिलीट करता है", "एक्जिक्यूशन रोकता है", "एक्सप्रेशन स्किप करता है"],
    answer_en: "Evaluates expression and returns undefined",
    answer_hi: "एक्सप्रेशन इवैल्यूएट करता है और undefined लौटाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method is used to get the current timestamp?",
    question_hi: "करंट टाइमस्टैम्प प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Date.now()", "new Date().getTime()", "Both A and B", "Time.now()"],
    options_hi: ["Date.now()", "new Date().getTime()", "A और B दोनों", "Time.now()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `isNaN()` function?",
    question_hi: "`isNaN()` फंक्शन का उद्देश्य क्या है?",
    options_en: ["Check if value is NaN", "Check if value is number", "Check if value is null", "Check if value is undefined"],
    options_hi: ["चेक करना कि वैल्यू NaN है", "चेक करना कि वैल्यू नंबर है", "चेक करना कि वैल्यू null है", "चेक करना कि वैल्यू undefined है"],
    answer_en: "Check if value is NaN",
    answer_hi: "चेक करना कि वैल्यू NaN है",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which operator has the highest precedence in JavaScript?",
    question_hi: "JavaScript में किस ऑपरेटर की प्राथमिकता सबसे अधिक है?",
    options_en: ["()", "++", "*", "&&"],
    options_hi: ["()", "++", "*", "&&"],
    answer_en: "()",
    answer_hi: "()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the output of `console.log(typeof function(){})`?",
    question_hi: "`console.log(typeof function(){})` का आउटपुट क्या है?",
    options_en: ["function", "object", "undefined", "string"],
    options_hi: ["function", "object", "undefined", "string"],
    answer_en: "function",
    answer_hi: "function",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method is used to remove the last element from an array?",
    question_hi: "ऐरे से आखिरी एलिमेंट हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["pop()", "push()", "shift()", "slice()"],
    options_hi: ["pop()", "push()", "shift()", "slice()"],
    answer_en: "pop()",
    answer_hi: "pop()",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What does the `in` operator check?",
    question_hi: "`in` ऑपरेटर क्या चेक करता है?",
    options_en: ["If property exists in object", "If value is in array", "If variable is defined", "If function exists"],
    options_hi: ["क्या प्रॉपर्टी ऑब्जेक्ट में है", "क्या वैल्यू ऐरे में है", "क्या वेरिएबल डिफाइंड है", "क्या फंक्शन है"],
    answer_en: "If property exists in object",
    answer_hi: "क्या प्रॉपर्टी ऑब्जेक्ट में है",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method is used to execute a function after a delay?",
    question_hi: "डिले के बाद फंक्शन एक्जिक्यूट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    options_hi: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    answer_en: "setTimeout()",
    answer_hi: "setTimeout()",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the result of `console.log(1 == '1')`?",
    question_hi: "`console.log(1 == '1')` का रिजल्ट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method is used to convert a string to a floating point number?",
    question_hi: "स्ट्रिंग को फ्लोटिंग पॉइंट नंबर में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["parseFloat()", "parseInt()", "Number()", "Float()"],
    options_hi: ["parseFloat()", "parseInt()", "Number()", "Float()"],
    answer_en: "parseFloat()",
    answer_hi: "parseFloat()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the purpose of `arguments` object in functions?",
    question_hi: "फंक्शन्स में `arguments` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Access function arguments", "Create arguments", "Store variables", "Pass parameters"],
    options_hi: ["फंक्शन आर्गुमेंट्स तक पहुंच", "आर्गुमेंट्स बनाए", "वेरिएबल्स स्टोर करे", "पैरामीटर पास करे"],
    answer_en: "Access function arguments",
    answer_hi: "फंक्शन आर्गुमेंट्स तक पहुंच",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
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
    num: 15,
    question_en: "What does the `delete` operator do?",
    question_hi: "`delete` ऑपरेटर क्या करता है?",
    options_en: ["Removes property from object", "Deletes variable", "Removes array element", "Deletes function"],
    options_hi: ["ऑब्जेक्ट से प्रॉपर्टी हटाता है", "वेरिएबल डिलीट करता है", "ऐरे एलिमेंट हटाता है", "फंक्शन डिलीट करता है"],
    answer_en: "Removes property from object",
    answer_hi: "ऑब्जेक्ट से प्रॉपर्टी हटाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to check if a string contains a substring?",
    question_hi: "स्ट्रिंग में सबस्ट्रिंग है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["includes()", "contains()", "has()", "indexOf()"],
    options_hi: ["includes()", "contains()", "has()", "indexOf()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the output of `console.log([] + {})`?",
    question_hi: "`console.log([] + {})` का आउटपुट क्या है?",
    options_en: ["[object Object]", "{}", "[]", "undefined"],
    options_hi: ["[object Object]", "{}", "[]", "undefined"],
    answer_en: "[object Object]",
    answer_hi: "[object Object]",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to prevent event bubbling?",
    question_hi: "इवेंट बबलिंग रोकने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["stopPropagation()", "preventDefault()", "stopBubble()", "cancelBubble()"],
    options_hi: ["stopPropagation()", "preventDefault()", "stopBubble()", "cancelBubble()"],
    answer_en: "stopPropagation()",
    answer_hi: "stopPropagation()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the purpose of `Array.prototype`?",
    question_hi: "`Array.prototype` का उद्देश्य क्या है?",
    options_en: ["Prototype for all arrays", "First array element", "Array constructor", "Array methods"],
    options_hi: ["सभी ऐरे का प्रोटोटाइप", "पहला ऐरे एलिमेंट", "ऐरे कंस्ट्रक्टर", "ऐरे मेथड्स"],
    answer_en: "Prototype for all arrays",
    answer_hi: "सभी ऐरे का प्रोटोटाइप",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method is used to get the length of a string?",
    question_hi: "स्ट्रिंग की लंबाई प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["length", "size()", "count()", "length()"],
    options_hi: ["length", "size()", "count()", "length()"],
    answer_en: "length",
    answer_hi: "length",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the result of `console.log(typeof NaN)`?",
    question_hi: "`console.log(typeof NaN)` का रिजल्ट क्या है?",
    options_en: ["number", "NaN", "undefined", "object"],
    options_hi: ["number", "NaN", "undefined", "object"],
    answer_en: "number",
    answer_hi: "number",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to add elements to the end of an array?",
    question_hi: "ऐरे के अंत में एलिमेंट्स जोड़ने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["push()", "pop()", "shift()", "unshift()"],
    options_hi: ["push()", "pop()", "shift()", "unshift()"],
    answer_en: "push()",
    answer_hi: "push()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What does the `instanceof` operator check?",
    question_hi: "`instanceof` ऑपरेटर क्या चेक करता है?",
    options_en: ["If object is instance of constructor", "If object has property", "If object is defined", "If object is null"],
    options_hi: ["क्या ऑब्जेक्ट कंस्ट्रक्टर का इंस्टेंस है", "क्या ऑब्जेक्ट में प्रॉपर्टी है", "क्या ऑब्जेक्ट डिफाइंड है", "क्या ऑब्जेक्ट null है"],
    answer_en: "If object is instance of constructor",
    answer_hi: "क्या ऑब्जेक्ट कंस्ट्रक्टर का इंस्टेंस है",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to convert a number to a string?",
    question_hi: "नंबर को स्ट्रिंग में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toString()", "String()", "Both A and B", "Number.toString()"],
    options_hi: ["toString()", "String()", "A और B दोनों", "Number.toString()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the purpose of `use strict` directive?",
    question_hi: "`use strict` डायरेक्टिव का उद्देश्य क्या है?",
    options_en: ["Enforce stricter parsing and error handling", "Make code run faster", "Enable new features", "Disable errors"],
    options_hi: ["स्ट्रिक्टर पार्सिंग और एरर हैंडलिंग", "कोड को तेज चलाना", "नई फीचर्स सक्षम करना", "एरर्स डिसेबल करना"],
    answer_en: "Enforce stricter parsing and error handling",
    answer_hi: "स्ट्रिक्टर पार्सिंग और एरर हैंडलिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to get the current date and time?",
    question_hi: "करंट डेट और टाइम प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["new Date()", "Date.current()", "now()", "Date.now()"],
    options_hi: ["new Date()", "Date.current()", "now()", "Date.now()"],
    answer_en: "new Date()",
    answer_hi: "new Date()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the output of `console.log(0.1 + 0.2)`?",
    question_hi: "`console.log(0.1 + 0.2)` का आउटपुट क्या है?",
    options_en: ["0.30000000000000004", "0.3", "0.30", "0.300"],
    options_hi: ["0.30000000000000004", "0.3", "0.30", "0.300"],
    answer_en: "0.30000000000000004",
    answer_hi: "0.30000000000000004",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to remove the first element from an array?",
    question_hi: "ऐरे से पहला एलिमेंट हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["shift()", "pop()", "slice()", "splice()"],
    options_hi: ["shift()", "pop()", "slice()", "splice()"],
    answer_en: "shift()",
    answer_hi: "shift()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What does the `this` keyword refer to in a global context?",
    question_hi: "ग्लोबल कॉन्टेक्स्ट में `this` कीवर्ड किसे संदर्भित करता है?",
    options_en: ["Global object (window)", "undefined", "null", "Current function"],
    options_hi: ["ग्लोबल ऑब्जेक्ट (window)", "undefined", "null", "करंट फंक्शन"],
    answer_en: "Global object (window)",
    answer_hi: "ग्लोबल ऑब्जेक्ट (window)",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method is used to execute a function repeatedly at intervals?",
    question_hi: "इंटरवल्स पर फंक्शन को बार-बार एक्जिक्यूट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["setInterval()", "setTimeout()", "repeat()", "interval()"],
    options_hi: ["setInterval()", "setTimeout()", "repeat()", "interval()"],
    answer_en: "setInterval()",
    answer_hi: "setInterval()",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the result of `console.log([] == false)`?",
    question_hi: "`console.log([] == false)` का रिजल्ट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to find the minimum value in an array?",
    question_hi: "ऐरे में मिनिमम वैल्यू ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.min(...array)", "array.min()", "Math.min(array)", "min(array)"],
    options_hi: ["Math.min(...array)", "array.min()", "Math.min(array)", "min(array)"],
    answer_en: "Math.min(...array)",
    answer_hi: "Math.min(...array)",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of `localStorage`?",
    question_hi: "`localStorage` का उद्देश्य क्या है?",
    options_en: ["Store data persistently in browser", "Store session data", "Store cookies", "Store temporary data"],
    options_hi: ["ब्राउज़र में डेटा परमानेंट स्टोर करना", "सेशन डेटा स्टोर करना", "कुकीज़ स्टोर करना", "टेम्पररी डेटा स्टोर करना"],
    answer_en: "Store data persistently in browser",
    answer_hi: "ब्राउज़र में डेटा परमानेंट स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to convert a string to uppercase?",
    question_hi: "स्ट्रिंग को अपरकेस में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toUpperCase()", "toUpper()", "upperCase()", "convertUpper()"],
    options_hi: ["toUpperCase()", "toUpper()", "upperCase()", "convertUpper()"],
    answer_en: "toUpperCase()",
    answer_hi: "toUpperCase()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
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
    num: 36,
    question_en: "Which method is used to add elements to the beginning of an array?",
    question_hi: "ऐरे की शुरुआत में एलिमेंट्स जोड़ने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["unshift()", "push()", "shift()", "pop()"],
    options_hi: ["unshift()", "push()", "shift()", "pop()"],
    answer_en: "unshift()",
    answer_hi: "unshift()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What does the `await` keyword do?",
    question_hi: "`await` कीवर्ड क्या करता है?",
    options_en: ["Wait for Promise to resolve", "Stop execution", "Create async function", "Handle errors"],
    options_hi: ["Promise के रिजॉल्व होने का इंतज़ार करना", "एक्जिक्यूशन रोकना", "एसिंक फंक्शन बनाना", "एरर्स हैंडल करना"],
    answer_en: "Wait for Promise to resolve",
    answer_hi: "Promise के रिजॉल्व होने का इंतज़ार करना",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
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
    num: 39,
    question_en: "What is the result of `console.log('5' - 3)`?",
    question_hi: "`console.log('5' - 3)` का रिजल्ट क्या है?",
    options_en: ["2", "8", "53", "NaN"],
    options_hi: ["2", "8", "53", "NaN"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to convert a string to lowercase?",
    question_hi: "स्ट्रिंग को लोअरकेस में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toLowerCase()", "toLower()", "lowerCase()", "convertLower()"],
    options_hi: ["toLowerCase()", "toLower()", "lowerCase()", "convertLower()"],
    answer_en: "toLowerCase()",
    answer_hi: "toLowerCase()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the purpose of `sessionStorage`?",
    question_hi: "`sessionStorage` का उद्देश्य क्या है?",
    options_en: ["Store data for session duration", "Store data permanently", "Store cookies", "Store temporary data"],
    options_hi: ["सेशन की अवधि के लिए डेटा स्टोर करना", "डेटा परमानेंट स्टोर करना", "कुकीज़ स्टोर करना", "टेम्पररी डेटा स्टोर करना"],
    answer_en: "Store data for session duration",
    answer_hi: "सेशन की अवधि के लिए डेटा स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to round a number to the nearest integer?",
    question_hi: "नंबर को नजदीकी इंटीजर में राउंड करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.round()", "Math.floor()", "Math.ceil()", "Number.round()"],
    options_hi: ["Math.round()", "Math.floor()", "Math.ceil()", "Number.round()"],
    answer_en: "Math.round()",
    answer_hi: "Math.round()",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the output of `console.log(1 === '1')`?",
    question_hi: "`console.log(1 === '1')` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method is used to find the square root of a number?",
    question_hi: "नंबर का स्क्वायर रूट ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.sqrt()", "sqrt()", "Math.root()", "Number.sqrt()"],
    options_hi: ["Math.sqrt()", "sqrt()", "Math.root()", "Number.sqrt()"],
    answer_en: "Math.sqrt()",
    answer_hi: "Math.sqrt()",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What does the `finally` block do in try-catch?",
    question_hi: "try-catch में `finally` ब्लॉक क्या करता है?",
    options_en: ["Executes regardless of try/catch outcome", "Handles errors", "Tries code", "Catches errors"],
    options_hi: ["try/catch के आउटकम की परवाह किए बिना एक्जिक्यूट होता है", "एरर्स हैंडल करता है", "कोड ट्राई करता है", "एरर्स कैच करता है"],
    answer_en: "Executes regardless of try/catch outcome",
    answer_hi: "try/catch के आउटकम की परवाह किए बिना एक्जिक्यूट होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to get the length of an array?",
    question_hi: "ऐरे की लंबाई प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["length", "size()", "count()", "length()"],
    options_hi: ["length", "size()", "count()", "length()"],
    answer_en: "length",
    answer_hi: "length",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the result of `console.log('b' + 'a' + + 'a' + 'a')`?",
    question_hi: "`console.log('b' + 'a' + + 'a' + 'a')` का रिजल्ट क्या है?",
    options_en: ["baNaNa", "baaa", "baNaNa", "baundefineda"],
    options_hi: ["baNaNa", "baaa", "baNaNa", "baundefineda"],
    answer_en: "baNaNa",
    answer_hi: "baNaNa",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to remove whitespace from both ends of a string?",
    question_hi: "स्ट्रिंग के दोनों सिरों से व्हाइटस्पेस हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["trim()", "strip()", "clean()", "removeSpace()"],
    options_hi: ["trim()", "strip()", "clean()", "removeSpace()"],
    answer_en: "trim()",
    answer_hi: "trim()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `fetch` API?",
    question_hi: "`fetch` API का उद्देश्य क्या है?",
    options_en: ["Make HTTP requests", "Fetch local files", "Get user input", "Fetch DOM elements"],
    options_hi: ["HTTP रिक्वेस्ट्स बनाना", "लोकल फाइल्स फ़ेच करना", "यूजर इनपुट लेना", "DOM एलिमेंट्स फ़ेच करना"],
    answer_en: "Make HTTP requests",
    answer_hi: "HTTP रिक्वेस्ट्स बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to check if a value is finite?",
    question_hi: "वैल्यू फाइनाइट है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["isFinite()", "isNaN()", "isNumber()", "Number.isFinite()"],
    options_hi: ["isFinite()", "isNaN()", "isNumber()", "Number.isFinite()"],
    answer_en: "isFinite()",
    answer_hi: "isFinite()",
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
