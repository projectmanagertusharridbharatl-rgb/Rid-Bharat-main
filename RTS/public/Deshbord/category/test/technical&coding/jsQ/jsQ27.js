const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log(!!'0')`?",
    question_hi: "`console.log(!!'0')` का आउटपुट क्या है?",
    options_en: ["true", "false", "'0'", "undefined"],
    options_hi: ["true", "false", "'0'", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method is used to get the current URL in the browser?",
    question_hi: "ब्राउज़र में करेंट URL पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["window.location.href", "document.URL", "Both A and B", "None of the above"],
    options_hi: ["window.location.href", "document.URL", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does `console.log([1, 2, 3].join('-'))` output?",
    question_hi: "`console.log([1, 2, 3].join('-'))` क्या आउटपुट देता है?",
    options_en: ["'1-2-3'", "[1-2-3]", "'123'", "Error"],
    options_hi: ["'1-2-3'", "[1-2-3]", "'123'", "एरर"],
    answer_en: "'1-2-3'",
    answer_hi: "'1-2-3'",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method is used to prevent an object from being extended?",
    question_hi: "ऑब्जेक्ट को एक्सटेंड होने से रोकने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Object.preventExtensions()", "Object.seal()", "Object.freeze()", "All of the above"],
    options_hi: ["Object.preventExtensions()", "Object.seal()", "Object.freeze()", "उपरोक्त सभी"],
    answer_en: "Object.preventExtensions()",
    answer_hi: "Object.preventExtensions()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `Array.prototype.some()`?",
    question_hi: "`Array.prototype.some()` का उद्देश्य क्या है?",
    options_en: ["Check if any element satisfies condition", "Check if all elements satisfy condition", "Filter elements", "Find element"],
    options_hi: ["चेक करना कोई एलिमेंट कंडीशन को पूरा करता है", "चेक करना सभी एलिमेंट्स कंडीशन को पूरा करते हैं", "एलिमेंट्स फिल्टर करना", "एलिमेंट ढूंढना"],
    answer_en: "Check if any element satisfies condition",
    answer_hi: "चेक करना कोई एलिमेंट कंडीशन को पूरा करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the output of `console.log(typeof new Date())`?",
    question_hi: "`console.log(typeof new Date())` का आउटपुट क्या है?",
    options_en: ["object", "date", "string", "number"],
    options_hi: ["object", "date", "string", "number"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which method is used to get the character at a specific index in a string?",
    question_hi: "स्ट्रिंग में स्पेसिफिक इंडेक्स पर कैरेक्टर पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["charAt()", "charCodeAt()", "Both A and B", "None of the above"],
    options_hi: ["charAt()", "charCodeAt()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "charAt()",
    answer_hi: "charAt()",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What does `console.log(Math.random())` output?",
    question_hi: "`console.log(Math.random())` क्या आउटपुट देता है?",
    options_en: ["Random number between 0 and 1", "Random integer", "0", "1"],
    options_hi: ["0 और 1 के बीच रैंडम नंबर", "रैंडम इंटीजर", "0", "1"],
    answer_en: "Random number between 0 and 1",
    answer_hi: "0 और 1 के बीच रैंडम नंबर",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which method is used to convert a string to a floating point number?",
    question_hi: "स्ट्रिंग को फ्लोटिंग पॉइंट नंबर में बदलने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["parseFloat()", "Number()", "Both A and B", "None of the above"],
    options_hi: ["parseFloat()", "Number()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the output of `console.log(2 * '2')`?",
    question_hi: "`console.log(2 * '2')` का आउटपुट क्या है?",
    options_en: ["4", "'4'", "NaN", "Error"],
    options_hi: ["4", "'4'", "NaN", "एरर"],
    answer_en: "4",
    answer_hi: "4",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which method is used to execute a function after a specified delay?",
    question_hi: "स्पेसिफाइड डिले के बाद फंक्शन को एक्सीक्यूट करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    options_hi: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    answer_en: "setTimeout()",
    answer_hi: "setTimeout()",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the purpose of `Array.prototype.every()`?",
    question_hi: "`Array.prototype.every()` का उद्देश्य क्या है?",
    options_en: ["Check if all elements satisfy condition", "Check if any element satisfies condition", "Execute function on each element", "Filter elements"],
    options_hi: ["चेक करना सभी एलिमेंट्स कंडीशन को पूरा करते हैं", "चेक करना कोई एलिमेंट कंडीशन को पूरा करता है", "प्रत्येक एलिमेंट पर फंक्शन चलाना", "एलिमेंट्स फिल्टर करना"],
    answer_en: "Check if all elements satisfy condition",
    answer_hi: "चेक करना सभी एलिमेंट्स कंडीशन को पूरा करते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the output of `console.log('5' + 2)`?",
    question_hi: "`console.log('5' + 2)` का आउटपुट क्या है?",
    options_en: ["'52'", "7", "'7'", "Error"],
    options_hi: ["'52'", "7", "'7'", "एरर"],
    answer_en: "'52'",
    answer_hi: "'52'",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to get the length of an array?",
    question_hi: "ऐरे की लंबाई पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["length", "size()", "count()", "getLength()"],
    options_hi: ["length", "size()", "count()", "getLength()"],
    answer_en: "length",
    answer_hi: "length",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the output of `console.log(Boolean(0))`?",
    question_hi: "`console.log(Boolean(0))` का आउटपुट क्या है?",
    options_en: ["false", "true", "0", "undefined"],
    options_hi: ["false", "true", "0", "undefined"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to remove the last element from an array?",
    question_hi: "ऐरे से आखिरी एलिमेंट हटाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["pop()", "shift()", "remove()", "delete()"],
    options_hi: ["pop()", "shift()", "remove()", "delete()"],
    answer_en: "pop()",
    answer_hi: "pop()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `Promise.prototype.finally()`?",
    question_hi: "`Promise.prototype.finally()` का उद्देश्य क्या है?",
    options_en: ["Execute code regardless of promise outcome", "Handle promise rejection", "Handle promise resolution", "All of the above"],
    options_hi: ["प्रॉमिस आउटकम के बावजूद कोड चलाना", "प्रॉमिस रिजेक्शन हैंडल करना", "प्रॉमिस रिजॉल्यूशन हैंडल करना", "उपरोक्त सभी"],
    answer_en: "Execute code regardless of promise outcome",
    answer_hi: "प्रॉमिस आउटकम के बावजूद कोड चलाना",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the output of `console.log([] instanceof Object)`?",
    question_hi: "`console.log([] instanceof Object)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which method is used to add elements to the beginning of an array?",
    question_hi: "ऐरे की शुरुआत में एलिमेंट्स जोड़ने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["unshift()", "push()", "prepend()", "addFirst()"],
    options_hi: ["unshift()", "push()", "prepend()", "addFirst()"],
    answer_en: "unshift()",
    answer_hi: "unshift()",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "What is the output of `console.log('b' + 'a' + + 'a' + 'a')`?",
    question_hi: "`console.log('b' + 'a' + + 'a' + 'a')` का आउटपुट क्या है?",
    options_en: ["'baNaNa'", "'baaa'", "'baundefineda'", "Error"],
    options_hi: ["'baNaNa'", "'baaa'", "'baundefineda'", "एरर"],
    answer_en: "'baNaNa'",
    answer_hi: "'baNaNa'",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which method is used to check if a string starts with specific characters?",
    question_hi: "स्ट्रिंग स्पेसिफिक कैरेक्टर्स से शुरू होती है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["startsWith()", "startWith()", "beginsWith()", "checkStart()"],
    options_hi: ["startsWith()", "startWith()", "beginsWith()", "checkStart()"],
    answer_en: "startsWith()",
    answer_hi: "startsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the purpose of `Object.create()`?",
    question_hi: "`Object.create()` का उद्देश्य क्या है?",
    options_en: ["Create object with specified prototype", "Clone object", "Create empty object", "All of the above"],
    options_hi: ["स्पेसिफाइड प्रोटोटाइप के साथ ऑब्जेक्ट बनाना", "ऑब्जेक्ट क्लोन करना", "खाली ऑब्जेक्ट बनाना", "उपरोक्त सभी"],
    answer_en: "Create object with specified prototype",
    answer_hi: "स्पेसिफाइड प्रोटोटाइप के साथ ऑब्जेक्ट बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log([1, 2, 3].reverse())`?",
    question_hi: "`console.log([1, 2, 3].reverse())` का आउटपुट क्या है?",
    options_en: ["[3, 2, 1]", "[1, 2, 3]", "[3,2,1]", "Error"],
    options_hi: ["[3, 2, 1]", "[1, 2, 3]", "[3,2,1]", "एरर"],
    answer_en: "[3, 2, 1]",
    answer_hi: "[3, 2, 1]",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to check if a string ends with specific characters?",
    question_hi: "स्ट्रिंग स्पेसिफिक कैरेक्टर्स से खत्म होती है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["endsWith()", "endWith()", "finishesWith()", "checkEnd()"],
    options_hi: ["endsWith()", "endWith()", "finishesWith()", "checkEnd()"],
    answer_en: "endsWith()",
    answer_hi: "endsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the output of `console.log(typeof null)`?",
    question_hi: "`console.log(typeof null)` का आउटपुट क्या है?",
    options_en: ["object", "null", "undefined", "Error"],
    options_hi: ["object", "null", "undefined", "एरर"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to get the minimum value from numbers?",
    question_hi: "नंबर्स से मिनिमम वैल्यू पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.min()", "Math.minimum()", "min()", "minimum()"],
    options_hi: ["Math.min()", "Math.minimum()", "min()", "minimum()"],
    answer_en: "Math.min()",
    answer_hi: "Math.min()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the purpose of `Array.prototype.filter()`?",
    question_hi: "`Array.prototype.filter()` का उद्देश्य क्या है?",
    options_en: ["Create new array with filtered elements", "Remove elements from array", "Both A and B", "None of the above"],
    options_hi: ["फिल्टर्ड एलिमेंट्स के साथ नया ऐरे बनाना", "ऐरे से एलिमेंट्स हटाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Create new array with filtered elements",
    answer_hi: "फिल्टर्ड एलिमेंट्स के साथ नया ऐरे बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What is the output of `console.log('Hello'.slice(0, 2))`?",
    question_hi: "`console.log('Hello'.slice(0, 2))` का आउटपुट क्या है?",
    options_en: ["'He'", "'Hel'", "'Hello'", "Error"],
    options_hi: ["'He'", "'Hel'", "'Hello'", "एरर"],
    answer_en: "'He'",
    answer_hi: "'He'",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which method is used to get the maximum value from numbers?",
    question_hi: "नंबर्स से मैक्सिमम वैल्यू पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.max()", "Math.maximum()", "max()", "maximum()"],
    options_hi: ["Math.max()", "Math.maximum()", "max()", "maximum()"],
    answer_en: "Math.max()",
    answer_hi: "Math.max()",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What is the output of `console.log(1 == true)`?",
    question_hi: "`console.log(1 == true)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which method is used to execute a function repeatedly at specified intervals?",
    question_hi: "स्पेसिफाइड इंटरवल्स पर बार-बार फंक्शन चलाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["setInterval()", "setTimeout()", "repeat()", "interval()"],
    options_hi: ["setInterval()", "setTimeout()", "repeat()", "interval()"],
    answer_en: "setInterval()",
    answer_hi: "setInterval()",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "What is the purpose of `Array.prototype.forEach()`?",
    question_hi: "`Array.prototype.forEach()` का उद्देश्य क्या है?",
    options_en: ["Execute function for each element", "Create new array", "Return new array", "Filter elements"],
    options_hi: ["प्रत्येक एलिमेंट के लिए फंक्शन चलाना", "नया ऐरे बनाना", "नया ऐरे रिटर्न करना", "एलिमेंट्स फिल्टर करना"],
    answer_en: "Execute function for each element",
    answer_hi: "प्रत्येक एलिमेंट के लिए फंक्शन चलाना",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the output of `console.log('5' == 5)`?",
    question_hi: "`console.log('5' == 5)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to get the square root of a number?",
    question_hi: "नंबर का स्क्वायर रूट पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.sqrt()", "Math.squareRoot()", "sqrt()", "squareRoot()"],
    options_hi: ["Math.sqrt()", "Math.squareRoot()", "sqrt()", "squareRoot()"],
    answer_en: "Math.sqrt()",
    answer_hi: "Math.sqrt()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the output of `console.log(0 == false)`?",
    question_hi: "`console.log(0 == false)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to round a number to the nearest integer?",
    question_hi: "नंबर को नजदीकी इंटीजर में राउंड करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.round()", "Math.floor()", "Math.ceil()", "All of the above"],
    options_hi: ["Math.round()", "Math.floor()", "Math.ceil()", "उपरोक्त सभी"],
    answer_en: "Math.round()",
    answer_hi: "Math.round()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `JSON.stringify()`?",
    question_hi: "`JSON.stringify()` का उद्देश्य क्या है?",
    options_en: ["Convert object to JSON string", "Convert JSON to object", "Parse JSON", "Stringify object"],
    options_hi: ["ऑब्जेक्ट को JSON स्ट्रिंग में बदलना", "JSON को ऑब्जेक्ट में बदलना", "JSON पार्स करना", "ऑब्जेक्ट स्ट्रिंगिफाई करना"],
    answer_en: "Convert object to JSON string",
    answer_hi: "ऑब्जेक्ट को JSON स्ट्रिंग में बदलना",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What is the output of `console.log(Array.from('abc'))`?",
    question_hi: "`console.log(Array.from('abc'))` का आउटपुट क्या है?",
    options_en: ["['a', 'b', 'c']", "'abc'", "[97, 98, 99]", "Error"],
    options_hi: ["['a', 'b', 'c']", "'abc'", "[97, 98, 99]", "एरर"],
    answer_en: "['a', 'b', 'c']",
    answer_hi: "['a', 'b', 'c']",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which method is used to add elements to the end of an array?",
    question_hi: "ऐरे के अंत में एलिमेंट्स जोड़ने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["push()", "pop()", "append()", "add()"],
    options_hi: ["push()", "pop()", "append()", "add()"],
    answer_en: "push()",
    answer_hi: "push()",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the purpose of `document.getElementById()`?",
    question_hi: "`document.getElementById()` का उद्देश्य क्या है?",
    options_en: ["Select element by ID", "Select element by class", "Create element with ID", "All of the above"],
    options_hi: ["ID से एलिमेंट सेलेक्ट करना", "क्लास से एलिमेंट सेलेक्ट करना", "ID के साथ एलिमेंट बनाना", "उपरोक्त सभी"],
    answer_en: "Select element by ID",
    answer_hi: "ID से एलिमेंट सेलेक्ट करना",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the output of `console.log(typeof NaN)`?",
    question_hi: "`console.log(typeof NaN)` का आउटपुट क्या है?",
    options_en: ["number", "NaN", "undefined", "object"],
    options_hi: ["number", "NaN", "undefined", "object"],
    answer_en: "number",
    answer_hi: "number",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to remove the first element from an array?",
    question_hi: "ऐरे से पहला एलिमेंट हटाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["shift()", "pop()", "removeFirst()", "delete()"],
    options_hi: ["shift()", "pop()", "removeFirst()", "delete()"],
    answer_en: "shift()",
    answer_hi: "shift()",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the purpose of `String.prototype.replace()`?",
    question_hi: "`String.prototype.replace()` का उद्देश्य क्या है?",
    options_en: ["Replace substring with new string", "Replace all occurrences", "Both A and B", "None of the above"],
    options_hi: ["सबस्ट्रिंग को नई स्ट्रिंग से रिप्लेस करना", "सभी occurrences रिप्लेस करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What is the output of `console.log([1, 2] + [3, 4])`?",
    question_hi: "`console.log([1, 2] + [3, 4])` का आउटपुट क्या है?",
    options_en: ["'1,23,4'", "[1,2,3,4]", "[1,2][3,4]", "Error"],
    options_hi: ["'1,23,4'", "[1,2,3,4]", "[1,2][3,4]", "एरर"],
    answer_en: "'1,23,4'",
    answer_hi: "'1,23,4'",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which method is used to get the absolute value of a number?",
    question_hi: "नंबर की एब्सोल्यूट वैल्यू पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.abs()", "Math.absolute()", "abs()", "absolute()"],
    options_hi: ["Math.abs()", "Math.absolute()", "abs()", "absolute()"],
    answer_en: "Math.abs()",
    answer_hi: "Math.abs()",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the purpose of `Array.prototype.concat()`?",
    question_hi: "`Array.prototype.concat()` का उद्देश्य क्या है?",
    options_en: ["Merge arrays", "Create new array from multiple arrays", "Both A and B", "None of the above"],
    options_hi: ["ऐरे मर्ज करना", "मल्टीपल ऐरे से नया ऐरे बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the output of `console.log('Hello'.charAt(0))`?",
    question_hi: "`console.log('Hello'.charAt(0))` का आउटपुट क्या है?",
    options_en: ["'H'", "'e'", "'Hello'", "Error"],
    options_hi: ["'H'", "'e'", "'Hello'", "एरर"],
    answer_en: "'H'",
    answer_hi: "'H'",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to get the current date and time?",
    question_hi: "करेंट डेट और टाइम पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["new Date()", "Date.now()", "Both A and B", "None of the above"],
    options_hi: ["new Date()", "Date.now()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `Array.prototype.includes()`?",
    question_hi: "`Array.prototype.includes()` का उद्देश्य क्या है?",
    options_en: ["Check if array contains value", "Find element index", "Both A and B", "None of the above"],
    options_hi: ["चेक करना ऐरे में वैल्यू है", "एलिमेंट इंडेक्स ढूंढना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Check if array contains value",
    answer_hi: "चेक करना ऐरे में वैल्यू है",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What is the output of `console.log(3 + 4 + '5')`?",
    question_hi: "`console.log(3 + 4 + '5')` का आउटपुट क्या है?",
    options_en: ["'75'", "12", "'345'", "Error"],
    options_hi: ["'75'", "12", "'345'", "एरर"],
    answer_en: "'75'",
    answer_hi: "'75'",
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
