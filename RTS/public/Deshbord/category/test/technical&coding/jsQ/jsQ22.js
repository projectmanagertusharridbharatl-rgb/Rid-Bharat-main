const questions = [
  {
    num: 1,
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
    num: 2,
    question_en: "Which method creates a new array with all sub-array elements concatenated?",
    question_hi: "कौन-सी मेथड सभी सब-ऐरे एलिमेंट्स को कॉन्केटनेट करके नया ऐरे बनाती है?",
    options_en: ["flat()", "concat()", "join()", "merge()"],
    options_hi: ["flat()", "concat()", "join()", "merge()"],
    answer_en: "flat()",
    answer_hi: "flat()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does `console.log(0.1 + 0.2 === 0.3)` output?",
    question_hi: "`console.log(0.1 + 0.2 === 0.3)` क्या आउटपुट देता है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "एरर"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method is used to remove the last element from an array?",
    question_hi: "ऐरे से आखिरी एलिमेंट हटाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["pop()", "shift()", "splice()", "remove()"],
    options_hi: ["pop()", "shift()", "splice()", "remove()"],
    answer_en: "pop()",
    answer_hi: "pop()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `use strict` in JavaScript?",
    question_hi: "JavaScript में `use strict` का उद्देश्य क्या है?",
    options_en: ["Enforce stricter parsing and error handling", "Make code run faster", "Both A and B", "None of the above"],
    options_hi: ["सख्त पार्सिंग और एरर हैंडलिंग", "कोड को तेज चलाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Enforce stricter parsing and error handling",
    answer_hi: "सख्त पार्सिंग और एरर हैंडलिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which operator returns the data type of a variable?",
    question_hi: "कौन-सा ऑपरेटर वेरिएबल के डेटा टाइप को रिटर्न करता है?",
    options_en: ["typeof", "instanceof", "typeofof", "type"],
    options_hi: ["typeof", "instanceof", "typeofof", "type"],
    answer_en: "typeof",
    answer_hi: "typeof",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
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
    num: 8,
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
    num: 9,
    question_en: "What does `console.log(typeof null)` output?",
    question_hi: "`console.log(typeof null)` क्या आउटपुट देता है?",
    options_en: ["object", "null", "undefined", "number"],
    options_hi: ["object", "null", "undefined", "number"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method is used to convert an object to JSON string?",
    question_hi: "ऑब्जेक्ट को JSON स्ट्रिंग में बदलने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["JSON.stringify()", "JSON.parse()", "Object.toString()", "Stringify()"],
    options_hi: ["JSON.stringify()", "JSON.parse()", "Object.toString()", "Stringify()"],
    answer_en: "JSON.stringify()",
    answer_hi: "JSON.stringify()",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the output of `console.log(1 + '2')`?",
    question_hi: "`console.log(1 + '2')` का आउटपुट क्या है?",
    options_en: ["'12'", "3", "NaN", "Error"],
    options_hi: ["'12'", "3", "NaN", "एरर"],
    answer_en: "'12'",
    answer_hi: "'12'",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method is used to get the length of a string?",
    question_hi: "स्ट्रिंग की लंबाई पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["length", "size()", "count()", "getLength()"],
    options_hi: ["length", "size()", "count()", "getLength()"],
    answer_en: "length",
    answer_hi: "length",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the purpose of `bind()` method?",
    question_hi: "`bind()` मेथड का उद्देश्य क्या है?",
    options_en: ["Create new function with specific this value", "Bind events", "Both A and B", "None of the above"],
    options_hi: ["स्पेसिफिक this वैल्यू के साथ नया फंक्शन बनाना", "इवेंट्स बाइंड करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Create new function with specific this value",
    answer_hi: "स्पेसिफिक this वैल्यू के साथ नया फंक्शन बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to reverse an array?",
    question_hi: "ऐरे को रिवर्स करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["reverse()", "sort()", "flip()", "invert()"],
    options_hi: ["reverse()", "sort()", "flip()", "invert()"],
    answer_en: "reverse()",
    answer_hi: "reverse()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
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
    num: 16,
    question_en: "Which method is used to sort an array?",
    question_hi: "ऐरे को सॉर्ट करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["sort()", "order()", "arrange()", "sequence()"],
    options_hi: ["sort()", "order()", "arrange()", "sequence()"],
    answer_en: "sort()",
    answer_hi: "sort()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `call()` method?",
    question_hi: "`call()` मेथड का उद्देश्य क्या है?",
    options_en: ["Invoke function with specific this value", "Make phone call", "Call another function", "All of the above"],
    options_hi: ["स्पेसिफिक this वैल्यू के साथ फंक्शन इनवोक करना", "फोन कॉल करना", "दूसरा फंक्शन कॉल करना", "उपरोक्त सभी"],
    answer_en: "Invoke function with specific this value",
    answer_hi: "स्पेसिफिक this वैल्यू के साथ फंक्शन इनवोक करना",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to join array elements into a string?",
    question_hi: "ऐरे एलिमेंट्स को स्ट्रिंग में जोड़ने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["join()", "concat()", "merge()", "combine()"],
    options_hi: ["join()", "concat()", "merge()", "combine()"],
    answer_en: "join()",
    answer_hi: "join()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the output of `console.log(typeof function(){})`?",
    question_hi: "`console.log(typeof function(){})` का आउटपुट क्या है?",
    options_en: ["function", "object", "undefined", "function object"],
    options_hi: ["function", "object", "undefined", "function object"],
    answer_en: "function",
    answer_hi: "function",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
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
    num: 21,
    question_en: "What is the purpose of `apply()` method?",
    question_hi: "`apply()` मेथड का उद्देश्य क्या है?",
    options_en: ["Invoke function with array of arguments", "Apply styles", "Both A and B", "None of the above"],
    options_hi: ["आर्गुमेंट्स के ऐरे के साथ फंक्शन इनवोक करना", "स्टाइल्स एप्लाई करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Invoke function with array of arguments",
    answer_hi: "आर्गुमेंट्स के ऐरे के साथ फंक्शन इनवोक करना",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to check if a property exists in an object?",
    question_hi: "ऑब्जेक्ट में प्रॉपर्टी exists है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["hasOwnProperty()", "in operator", "Both A and B", "None of the above"],
    options_hi: ["hasOwnProperty()", "in ऑपरेटर", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log(2 ** 3)`?",
    question_hi: "`console.log(2 ** 3)` का आउटपुट क्या है?",
    options_en: ["8", "6", "9", "Error"],
    options_hi: ["8", "6", "9", "एरर"],
    answer_en: "8",
    answer_hi: "8",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to create a new array with sliced elements?",
    question_hi: "स्लाइस्ड एलिमेंट्स के साथ नया ऐरे बनाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["slice()", "splice()", "cut()", "split()"],
    options_hi: ["slice()", "splice()", "cut()", "split()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the purpose of `Promise.all()`?",
    question_hi: "`Promise.all()` का उद्देश्य क्या है?",
    options_en: ["Wait for all promises to resolve", "Wait for first promise to resolve", "Handle promise errors", "Create new promises"],
    options_hi: ["सभी प्रॉमिसेस के रिजॉल्व होने का इंतज़ार करना", "पहली प्रॉमिस के रिजॉल्व होने का इंतज़ार करना", "प्रॉमिस एरर्स हैंडल करना", "नई प्रॉमिसेस बनाना"],
    answer_en: "Wait for all promises to resolve",
    answer_hi: "सभी प्रॉमिसेस के रिजॉल्व होने का इंतज़ार करना",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
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
    num: 27,
    question_en: "What is the output of `console.log('5' - 3)`?",
    question_hi: "`console.log('5' - 3)` का आउटपुट क्या है?",
    options_en: ["2", "8", "NaN", "'53'"],
    options_hi: ["2", "8", "NaN", "'53'"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to convert a string to uppercase?",
    question_hi: "स्ट्रिंग को अप्परकेस में बदलने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["toUpperCase()", "toUpper()", "upperCase()", "caseUpper()"],
    options_hi: ["toUpperCase()", "toUpper()", "upperCase()", "caseUpper()"],
    answer_en: "toUpperCase()",
    answer_hi: "toUpperCase()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `setTimeout()`?",
    question_hi: "`setTimeout()` का उद्देश्य क्या है?",
    options_en: ["Execute function after delay", "Set time interval", "Both A and B", "None of the above"],
    options_hi: ["डिले के बाद फंक्शन एक्सीक्यूट करना", "टाइम इंटरवल सेट करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Execute function after delay",
    answer_hi: "डिले के बाद फंक्शन एक्सीक्यूट करना",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method is used to get a substring from a string?",
    question_hi: "स्ट्रिंग से सबस्ट्रिंग पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["substring()", "slice()", "substr()", "All of the above"],
    options_hi: ["substring()", "slice()", "substr()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the output of `console.log(null == undefined)`?",
    question_hi: "`console.log(null == undefined)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to check if a value is an integer?",
    question_hi: "वैल्यू इंटीजर है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Number.isInteger()", "isInteger()", "isInt()", "checkInteger()"],
    options_hi: ["Number.isInteger()", "isInteger()", "isInt()", "checkInteger()"],
    answer_en: "Number.isInteger()",
    answer_hi: "Number.isInteger()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of `Array.from()`?",
    question_hi: "`Array.from()` का उद्देश्य क्या है?",
    options_en: ["Create array from array-like objects", "Convert to array", "Both A and B", "None of the above"],
    options_hi: ["ऐरे-लाइक ऑब्जेक्ट्स से ऐरे बनाना", "ऐरे में बदलना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
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
    num: 35,
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
    num: 36,
    question_en: "Which method is used to remove elements from an array and add new ones?",
    question_hi: "ऐरे से एलिमेंट्स हटाने और नए एलिमेंट्स जोड़ने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["splice()", "slice()", "replace()", "modify()"],
    options_hi: ["splice()", "slice()", "replace()", "modify()"],
    answer_en: "splice()",
    answer_hi: "splice()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `Object.freeze()`?",
    question_hi: "`Object.freeze()` का उद्देश्य क्या है?",
    options_en: ["Prevent object modification", "Make object immutable", "Both A and B", "None of the above"],
    options_hi: ["ऑब्जेक्ट मॉडिफिकेशन रोकना", "ऑब्जेक्ट को इम्यूटेबल बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method is used to get the square root of a number?",
    question_hi: "नंबर का स्क्वायर रूट पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.sqrt()", "Math.squareRoot()", "root()", "sqrt()"],
    options_hi: ["Math.sqrt()", "Math.squareRoot()", "root()", "sqrt()"],
    answer_en: "Math.sqrt()",
    answer_hi: "Math.sqrt()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(typeof [])`?",
    question_hi: "`console.log(typeof [])` का आउटपुट क्या है?",
    options_en: ["object", "array", "undefined", "null"],
    options_hi: ["object", "array", "undefined", "null"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
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
    num: 41,
    question_en: "What is the purpose of `Object.seal()`?",
    question_hi: "`Object.seal()` का उद्देश्य क्या है?",
    options_en: ["Prevent adding new properties", "Allow modifying existing properties", "Both A and B", "None of the above"],
    options_hi: ["नई प्रॉपर्टीज जोड़ने से रोकना", "एग्जिस्टिंग प्रॉपर्टीज मॉडिफाई करने की अनुमति देना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
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
    num: 43,
    question_en: "What is the output of `console.log('b' + 'a' + + 'a' + 'a')`?",
    question_hi: "`console.log('b' + 'a' + + 'a' + 'a')` का आउटपुट क्या है?",
    options_en: ["'baNaNa'", "'baaa'", "'baNaNa'", "'baundefineda'"],
    options_hi: ["'baNaNa'", "'baaa'", "'baNaNa'", "'baundefineda'"],
    answer_en: "'baNaNa'",
    answer_hi: "'baNaNa'",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
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
    num: 45,
    question_en: "What is the purpose of `Object.create()`?",
    question_hi: "`Object.create()` का उद्देश्य क्या है?",
    options_en: ["Create new object with specified prototype", "Clone object", "Both A and B", "None of the above"],
    options_hi: ["स्पेसिफाइड प्रोटोटाइप के साथ नया ऑब्जेक्ट बनाना", "ऑब्जेक्ट क्लोन करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Create new object with specified prototype",
    answer_hi: "स्पेसिफाइड प्रोटोटाइप के साथ नया ऑब्जेक्ट बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
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
    num: 47,
    question_en: "What is the output of `console.log(!!{})`?",
    question_hi: "`console.log(!!{})` का आउटपुट क्या है?",
    options_en: ["true", "false", "{}", "undefined"],
    options_hi: ["true", "false", "{}", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to get a random number between 0 and 1?",
    question_hi: "0 और 1 के बीच रैंडम नंबर पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.random()", "Math.rand()", "random()", "Math.rnd()"],
    options_hi: ["Math.random()", "Math.rand()", "random()", "Math.rnd()"],
    answer_en: "Math.random()",
    answer_hi: "Math.random()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `Object.keys()`?",
    question_hi: "`Object.keys()` का उद्देश्य क्या है?",
    options_en: ["Return object's own property names", "Return object values", "Return key-value pairs", "Check object properties"],
    options_hi: ["ऑब्जेक्ट की अपनी प्रॉपर्टी नेम्स रिटर्न करना", "ऑब्जेक्ट वैल्यूज रिटर्न करना", "की-वैल्यू पेयर्स रिटर्न करना", "ऑब्जेक्ट प्रॉपर्टीज चेक करना"],
    answer_en: "Return object's own property names",
    answer_hi: "ऑब्जेक्ट की अपनी प्रॉपर्टी नेम्स रिटर्न करना",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to round a number to the nearest integer?",
    question_hi: "नंबर को नजदीकी इंटीजर में राउंड करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
    options_hi: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
    answer_en: "Math.round()",
    answer_hi: "Math.round()",
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
