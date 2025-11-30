const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log([1, 2] + [3, 4])`?",
    question_hi: "`console.log([1, 2] + [3, 4])` का आउटपुट क्या है?",
    options_en: ["'1,23,4'", "[1,2,3,4]", "7", "Error"],
    options_hi: ["'1,23,4'", "[1,2,3,4]", "7", "Error"],
    answer_en: "'1,23,4'",
    answer_hi: "'1,23,4'",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
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
    num: 3,
    question_en: "What does `Array.prototype.flatMap()` do?",
    question_hi: "`Array.prototype.flatMap()` क्या करता है?",
    options_en: ["Maps then flattens result", "Flattens then maps", "Maps nested arrays", "Flattens multi-dimensional arrays"],
    options_hi: ["मैप करता है फिर रिजल्ट फ्लैटन करता है", "फ्लैटन करता है फिर मैप करता है", "नेस्टेड ऐरे मैप करता है", "मल्टी-डायमेंशनल ऐरे फ्लैटन करता है"],
    answer_en: "Maps then flattens result",
    answer_hi: "मैप करता है फिर रिजल्ट फ्लैटन करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What is the output of `console.log(!![])`?",
    question_hi: "`console.log(!![])` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "[]"],
    options_hi: ["true", "false", "undefined", "[]"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which method is used to check if a string ends with a specific substring?",
    question_hi: "स्ट्रिंग किसी स्पेसिफिक सबस्ट्रिंग से खत्म होती है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["endsWith()", "endWith()", "finishesWith()", "checkEnd()"],
    options_hi: ["endsWith()", "endWith()", "finishesWith()", "checkEnd()"],
    answer_en: "endsWith()",
    answer_hi: "endsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
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
    num: 7,
    question_en: "Which method is used to create a new array with all sub-array elements concatenated?",
    question_hi: "सभी सब-ऐरे एलिमेंट्स को कॉन्केटनेट करके नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["flat()", "concat()", "join()", "merge()"],
    options_hi: ["flat()", "concat()", "join()", "merge()"],
    answer_en: "flat()",
    answer_hi: "flat()",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What does `Object.values()` return?",
    question_hi: "`Object.values()` क्या रिटर्न करता है?",
    options_en: ["Array of object's own property values", "Array of object's keys", "Array of key-value pairs", "Object of values"],
    options_hi: ["ऑब्जेक्ट की अपनी प्रॉपर्टी वैल्यूज का ऐरे", "ऑब्जेक्ट की कीज का ऐरे", "की-वैल्यू पेयर्स का ऐरे", "वैल्यूज का ऑब्जेक्ट"],
    answer_en: "Array of object's own property values",
    answer_hi: "ऑब्जेक्ट की अपनी प्रॉपर्टी वैल्यूज का ऐरे",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the output of `console.log(null === undefined)`?",
    question_hi: "`console.log(null === undefined)` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method is used to check if an object has a property in its prototype chain?",
    question_hi: "ऑब्जेक्ट की प्रोटोटाइप चेन में प्रॉपर्टी है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["in operator", "hasOwnProperty()", "Object.has()", "propertyExists()"],
    options_hi: ["in operator", "hasOwnProperty()", "Object.has()", "propertyExists()"],
    answer_en: "in operator",
    answer_hi: "in operator",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
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
    num: 12,
    question_en: "Which method is used to repeat a string multiple times?",
    question_hi: "स्ट्रिंग को मल्टीपल टाइम्स रिपीट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["repeat()", "replicate()", "copy()", "multiply()"],
    options_hi: ["repeat()", "replicate()", "copy()", "multiply()"],
    answer_en: "repeat()",
    answer_hi: "repeat()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the output of `console.log(Boolean('0'))`?",
    question_hi: "`console.log(Boolean('0'))` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "0"],
    options_hi: ["true", "false", "undefined", "0"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
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
    num: 15,
    question_en: "What is the output of `console.log(!!0)`?",
    question_hi: "`console.log(!!0)` का आउटपुट क्या है?",
    options_en: ["false", "true", "0", "undefined"],
    options_hi: ["false", "true", "0", "undefined"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to copy object properties to another object?",
    question_hi: "ऑब्जेक्ट प्रॉपर्टीज को दूसरे ऑब्जेक्ट में कॉपी करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.assign()", "Object.copy()", "Object.merge()", "Object.spread()"],
    options_hi: ["Object.assign()", "Object.copy()", "Object.merge()", "Object.spread()"],
    answer_en: "Object.assign()",
    answer_hi: "Object.assign()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `Object.seal()`?",
    question_hi: "`Object.seal()` का उद्देश्य क्या है?",
    options_en: ["Prevents adding new properties", "Allows modifying existing properties", "Both A and B", "Makes object immutable"],
    options_hi: ["नई प्रॉपर्टीज जोड़ने से रोकता है", "एक्सिस्टिंग प्रॉपर्टीज मॉडिफाई करने की अनुमति देता है", "A और B दोनों", "ऑब्जेक्ट को इम्यूटेबल बनाता है"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to create a new array with unique values?",
    question_hi: "यूनिक वैल्यूज के साथ नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["[...new Set(array)]", "array.unique()", "array.distinct()", "Set.from(array)"],
    options_hi: ["[...new Set(array)]", "array.unique()", "array.distinct()", "Set.from(array)"],
    answer_en: "[...new Set(array)]",
    answer_hi: "[...new Set(array)]",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the output of `console.log(typeof new Date())`?",
    question_hi: "`console.log(typeof new Date())` का आउटपुट क्या है?",
    options_en: ["object", "date", "string", "function"],
    options_hi: ["object", "date", "string", "function"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method is used to check if a number is integer?",
    question_hi: "नंबर इंटीजर है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number.isInteger()", "isInteger()", "isInt()", "Integer.is()"],
    options_hi: ["Number.isInteger()", "isInteger()", "isInt()", "Integer.is()"],
    answer_en: "Number.isInteger()",
    answer_hi: "Number.isInteger()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What does the `void` operator return?",
    question_hi: "`void` ऑपरेटर क्या लौटाता है?",
    options_en: ["undefined", "null", "0", "No return value"],
    options_hi: ["undefined", "null", "0", "कोई रिटर्न वैल्यू नहीं"],
    answer_en: "undefined",
    answer_hi: "undefined",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to parse a JSON string?",
    question_hi: "JSON स्ट्रिंग को पार्स करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["JSON.parse()", "JSON.stringify()", "Object.fromJSON()", "parseJSON()"],
    options_hi: ["JSON.parse()", "JSON.stringify()", "Object.fromJSON()", "parseJSON()"],
    answer_en: "JSON.parse()",
    answer_hi: "JSON.parse()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log(+true)`?",
    question_hi: "`console.log(+true)` का आउटपुट क्या है?",
    options_en: ["1", "true", "NaN", "Error"],
    options_hi: ["1", "true", "NaN", "Error"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to get the prototype of an object?",
    question_hi: "ऑब्जेक्ट का प्रोटोटाइप प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.getPrototypeOf()", "object.prototype", "object.__proto__", "All of the above"],
    options_hi: ["Object.getPrototypeOf()", "object.prototype", "object.__proto__", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the purpose of `Array.from()`?",
    question_hi: "`Array.from()` का उद्देश्य क्या है?",
    options_en: ["Create array from array-like objects", "Convert to array", "Copy array", "All of the above"],
    options_hi: ["ऐरे-लाइक ऑब्जेक्ट्स से ऐरे बनाना", "ऐरे में कन्वर्ट करना", "ऐरे कॉपी करना", "उपरोक्त सभी"],
    answer_en: "Create array from array-like objects",
    answer_hi: "ऐरे-लाइक ऑब्जेक्ट्स से ऐरे बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
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
    num: 27,
    question_en: "Which method is used to check if a value is NaN?",
    question_hi: "वैल्यू NaN है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number.isNaN()", "isNaN()", "Both A and B", "NaN.is()"],
    options_hi: ["Number.isNaN()", "isNaN()", "A और B दोनों", "NaN.is()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What is the output of `console.log(!!{})`?",
    question_hi: "`console.log(!!{})` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "object"],
    options_hi: ["true", "false", "undefined", "object"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which method is used to get the character at specific index in string?",
    question_hi: "स्ट्रिंग में स्पेसिफिक इंडेक्स पर करैक्टर प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["charAt()", "charCodeAt()", "at()", "All of the above"],
    options_hi: ["charAt()", "charCodeAt()", "at()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What is the output of `console.log(2 ** 3)`?",
    question_hi: "`console.log(2 ** 3)` का आउटपुट क्या है?",
    options_en: ["8", "6", "9", "Error"],
    options_hi: ["8", "6", "9", "Error"],
    answer_en: "8",
    answer_hi: "8",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which method is used to create a function with fixed this context?",
    question_hi: "फिक्स्ड this कॉन्टेक्स्ट के साथ फंक्शन बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["bind()", "call()", "apply()", "fix()"],
    options_hi: ["bind()", "call()", "apply()", "fix()"],
    answer_en: "bind()",
    answer_hi: "bind()",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "What is the output of `console.log([1, 2, 3].slice(1, 2))`?",
    question_hi: "`console.log([1, 2, 3].slice(1, 2))` का आउटपुट क्या है?",
    options_en: ["[2]", "[1, 2]", "[2, 3]", "[]"],
    options_hi: ["[2]", "[1, 2]", "[2, 3]", "[]"],
    answer_en: "[2]",
    answer_hi: "[2]",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which method is used to find the last index of an element in array?",
    question_hi: "ऐरे में एलिमेंट का लास्ट इंडेक्स ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["lastIndexOf()", "findLastIndex()", "searchLast()", "locateLast()"],
    options_hi: ["lastIndexOf()", "findLastIndex()", "searchLast()", "locateLast()"],
    answer_en: "lastIndexOf()",
    answer_hi: "lastIndexOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "What is the output of `console.log(typeof Symbol())`?",
    question_hi: "`console.log(typeof Symbol())` का आउटपुट क्या है?",
    options_en: ["symbol", "object", "function", "undefined"],
    options_hi: ["symbol", "object", "function", "undefined"],
    answer_en: "symbol",
    answer_hi: "symbol",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which method is used to check if object is extensible?",
    question_hi: "ऑब्जेक्ट एक्सटेंसिबल है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.isExtensible()", "Object.extensible()", "isExtensible()", "Object.canExtend()"],
    options_hi: ["Object.isExtensible()", "Object.extensible()", "isExtensible()", "Object.canExtend()"],
    answer_en: "Object.isExtensible()",
    answer_hi: "Object.isExtensible()",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "What is the output of `console.log(0 || 'default')`?",
    question_hi: "`console.log(0 || 'default')` का आउटपुट क्या है?",
    options_en: ["'default'", "0", "false", "undefined"],
    options_hi: ["'default'", "0", "false", "undefined"],
    answer_en: "'default'",
    answer_hi: "'default'",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which method is used to get the primitive value of an object?",
    question_hi: "ऑब्जेक्ट की प्रिमिटिव वैल्यू प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["valueOf()", "toString()", "toPrimitive()", "getValue()"],
    options_hi: ["valueOf()", "toString()", "toPrimitive()", "getValue()"],
    answer_en: "valueOf()",
    answer_hi: "valueOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What is the output of `console.log(undefined ?? 'default')`?",
    question_hi: "`console.log(undefined ?? 'default')` का आउटपुट क्या है?",
    options_en: ["'default'", "undefined", "null", "Error"],
    options_hi: ["'default'", "undefined", "null", "Error"],
    answer_en: "'default'",
    answer_hi: "'default'",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which method is used to create a new array with reversed elements?",
    question_hi: "रिवर्स्ड एलिमेंट्स के साथ नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toReversed()", "reverse()", "flip()", "invert()"],
    options_hi: ["toReversed()", "reverse()", "flip()", "invert()"],
    answer_en: "toReversed()",
    answer_hi: "toReversed()",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What does `Object.entries()` return?",
    question_hi: "`Object.entries()` क्या रिटर्न करता है?",
    options_en: ["Array of key-value pairs", "Object keys", "Object values", "Array of keys"],
    options_hi: ["की-वैल्यू पेयर्स का ऐरे", "ऑब्जेक्ट कीज", "ऑब्जेक्ट वैल्यूज", "कीज का ऐरे"],
    answer_en: "Array of key-value pairs",
    answer_hi: "की-वैल्यू पेयर्स का ऐरे",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the output of `console.log(Number.MAX_SAFE_INTEGER)`?",
    question_hi: "`console.log(Number.MAX_SAFE_INTEGER)` का आउटपुट क्या है?",
    options_en: ["9007199254740991", "Infinity", "Number.MAX_VALUE", "undefined"],
    options_hi: ["9007199254740991", "Infinity", "Number.MAX_VALUE", "undefined"],
    answer_en: "9007199254740991",
    answer_hi: "9007199254740991",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to clone an object deeply?",
    question_hi: "ऑब्जेक्ट को डीपली क्लोन करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["structuredClone()", "JSON.parse(JSON.stringify())", "Both A and B", "Object.assign()"],
    options_hi: ["structuredClone()", "JSON.parse(JSON.stringify())", "A और B दोनों", "Object.assign()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the purpose of `WeakMap`?",
    question_hi: "`WeakMap` का उद्देश्य क्या है?",
    options_en: ["Store key-value pairs with weak references", "Lightweight Map", "Fast Map", "Simple Map"],
    options_hi: ["वीक रेफरेंसेस के साथ की-वैल्यू पेयर्स स्टोर करना", "लाइटवेट Map", "फास्ट Map", "सिंपल Map"],
    answer_en: "Store key-value pairs with weak references",
    answer_hi: "वीक रेफरेंसेस के साथ की-वैल्यू पेयर्स स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What is the output of `console.log(!!null)`?",
    question_hi: "`console.log(!!null)` का आउटपुट क्या है?",
    options_en: ["false", "true", "null", "undefined"],
    options_hi: ["false", "true", "null", "undefined"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which method is used to check if a value is array?",
    question_hi: "वैल्यू ऐरे है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Array.isArray()", "isArray()", "typeof", "instanceof Array"],
    options_hi: ["Array.isArray()", "isArray()", "typeof", "instanceof Array"],
    answer_en: "Array.isArray()",
    answer_hi: "Array.isArray()",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What does `Array.prototype.reduce()` do?",
    question_hi: "`Array.prototype.reduce()` क्या करता है?",
    options_en: ["Executes reducer on each element", "Reduces array size", "Filters array", "Maps array"],
    options_hi: ["प्रत्येक एलिमेंट पर रिड्यूसर एक्जिक्यूट करता है", "ऐरे साइज रिड्यूस करता है", "ऐरे फिल्टर करता है", "ऐरे मैप करता है"],
    answer_en: "Executes reducer on each element",
    answer_hi: "प्रत्येक एलिमेंट पर रिड्यूसर एक्जिक्यूट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the output of `console.log('5' + 2)`?",
    question_hi: "`console.log('5' + 2)` का आउटपुट क्या है?",
    options_en: ["'52'", "7", "NaN", "Error"],
    options_hi: ["'52'", "7", "NaN", "Error"],
    answer_en: "'52'",
    answer_hi: "'52'",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to get a portion of array?",
    question_hi: "ऐरे का पोर्शन प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["slice()", "splice()", "split()", "cut()"],
    options_hi: ["slice()", "splice()", "split()", "cut()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `Proxy` object?",
    question_hi: "`Proxy` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Create custom behavior for fundamental operations", "Create secure objects", "Monitor object changes", "All of the above"],
    options_hi: ["फंडामेंटल ऑपरेशन्स के लिए कस्टम बिहेवियर बनाना", "सिक्योर ऑब्जेक्ट्स बनाना", "ऑब्जेक्ट चेंजेस मॉनिटर करना", "उपरोक्त सभी"],
    answer_en: "Create custom behavior for fundamental operations",
    answer_hi: "फंडामेंटल ऑपरेशन्स के लिए कस्टम बिहेवियर बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What is the output of `console.log(1 + + '1')`?",
    question_hi: "`console.log(1 + + '1')` का आउटपुट क्या है?",
    options_en: ["2", "'11'", "11", "NaN"],
    options_hi: ["2", "'11'", "11", "NaN"],
    answer_en: "2",
    answer_hi: "2",
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
