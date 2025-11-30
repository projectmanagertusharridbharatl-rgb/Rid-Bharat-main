const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log([] + {} + [])`?",
    question_hi: "`console.log([] + {} + [])` का आउटपुट क्या है?",
    options_en: ["[object Object]", "{}[]", "[object Object][]", "undefined"],
    options_hi: ["[object Object]", "{}[]", "[object Object][]", "undefined"],
    answer_en: "[object Object]",
    answer_hi: "[object Object]",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method creates a new array with all elements that pass a test implemented by a function?",
    question_hi: "कौन-सा मेथड नया ऐरे बनाता है जिसमें फंक्शन द्वारा इम्प्लीमेंटेड टेस्ट पास करने वाले सभी एलिमेंट्स हों?",
    options_en: ["filter()", "map()", "reduce()", "forEach()"],
    options_hi: ["filter()", "map()", "reduce()", "forEach()"],
    answer_en: "filter()",
    answer_hi: "filter()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `yield` keyword do in JavaScript?",
    question_hi: "JavaScript में `yield` कीवर्ड क्या करता है?",
    options_en: ["Pauses and resumes generator function", "Returns value from function", "Stops function execution", "Yields control to another function"],
    options_hi: ["जनरेटर फंक्शन को पॉज और रिज्यूम करता है", "फंक्शन से वैल्यू रिटर्न करता है", "फंक्शन एक्जिक्यूशन रोकता है", "कंट्रोल दूसरे फंक्शन को देता है"],
    answer_en: "Pauses and resumes generator function",
    answer_hi: "जनरेटर फंक्शन को पॉज और रिज्यूम करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method returns a new array with the results of calling a function on every element?",
    question_hi: "कौन-सा मेथड हर एलिमेंट पर फंक्शन कॉल के रिजल्ट्स के साथ नया ऐरे लौटाता है?",
    options_en: ["map()", "filter()", "reduce()", "forEach()"],
    options_hi: ["map()", "filter()", "reduce()", "forEach()"],
    answer_en: "map()",
    answer_hi: "map()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `Object.preventExtensions()`?",
    question_hi: "`Object.preventExtensions()` का उद्देश्य क्या है?",
    options_en: ["Prevents new properties from being added", "Prevents property modification", "Prevents property deletion", "Makes object immutable"],
    options_hi: ["नई प्रॉपर्टीज जोड़ने से रोकता है", "प्रॉपर्टी मॉडिफिकेशन रोकता है", "प्रॉपर्टी डिलीशन रोकता है", "ऑब्जेक्ट को इम्यूटेबल बनाता है"],
    answer_en: "Prevents new properties from being added",
    answer_hi: "नई प्रॉपर्टीज जोड़ने से रोकता है",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which method tests whether at least one element in the array passes the test?",
    question_hi: "कौन-सा मेथड टेस्ट करता है कि ऐरे में कम से कम एक एलिमेंट टेस्ट पास करता है?",
    options_en: ["some()", "every()", "filter()", "find()"],
    options_hi: ["some()", "every()", "filter()", "find()"],
    answer_en: "some()",
    answer_hi: "some()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the output of `console.log(typeof [][Symbol.iterator])`?",
    question_hi: "`console.log(typeof [][Symbol.iterator])` का आउटपुट क्या है?",
    options_en: ["function", "object", "undefined", "symbol"],
    options_hi: ["function", "object", "undefined", "symbol"],
    answer_en: "function",
    answer_hi: "function",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method creates a new array with all sub-array elements concatenated?",
    question_hi: "कौन-सा मेथड सभी सब-ऐरे एलिमेंट्स को कॉन्केटनेट करके नया ऐरे बनाता है?",
    options_en: ["flat()", "concat()", "merge()", "join()"],
    options_hi: ["flat()", "concat()", "merge()", "join()"],
    answer_en: "flat()",
    answer_hi: "flat()",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What does `Object.getOwnPropertyDescriptor()` return?",
    question_hi: "`Object.getOwnPropertyDescriptor()` क्या लौटाता है?",
    options_en: ["Property descriptor object", "Property value", "Property name", "Property type"],
    options_hi: ["प्रॉपर्टी डिस्क्रिप्टर ऑब्जेक्ट", "प्रॉपर्टी वैल्यू", "प्रॉपर्टी नाम", "प्रॉपर्टी टाइप"],
    answer_en: "Property descriptor object",
    answer_hi: "प्रॉपर्टी डिस्क्रिप्टर ऑब्जेक्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method returns the first index at which a given element can be found?",
    question_hi: "कौन-सा मेथड पहला इंडेक्स लौटाता है जहाँ दिया गया एलिमेंट मिल सकता है?",
    options_en: ["indexOf()", "findIndex()", "search()", "locate()"],
    options_hi: ["indexOf()", "findIndex()", "search()", "locate()"],
    answer_en: "indexOf()",
    answer_hi: "indexOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the output of `console.log(new Boolean(false) ? 'true' : 'false')`?",
    question_hi: "`console.log(new Boolean(false) ? 'true' : 'false')` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method tests whether all elements in the array pass the test?",
    question_hi: "कौन-सा मेथड टेस्ट करता है कि ऐरे के सभी एलिमेंट्स टेस्ट पास करते हैं?",
    options_en: ["every()", "some()", "filter()", "all()"],
    options_hi: ["every()", "some()", "filter()", "all()"],
    answer_en: "every()",
    answer_hi: "every()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the purpose of `WeakSet` in JavaScript?",
    question_hi: "JavaScript में `WeakSet` का उद्देश्य क्या है?",
    options_en: ["Store weakly held objects in collection", "Create weak arrays", "Make sets smaller", "Optimize memory usage"],
    options_hi: ["कलेक्शन में वीकली हेल्ड ऑब्जेक्ट्स स्टोर करना", "वीक ऐरे बनाना", "सेट्स को छोटा बनाना", "मेमोरी यूसेज ऑप्टिमाइज करना"],
    answer_en: "Store weakly held objects in collection",
    answer_hi: "कलेक्शन में वीकली हेल्ड ऑब्जेक्ट्स स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method creates a new array with a sequence of numbers?",
    question_hi: "कौन-सा मेथड नंबर्स की सीक्वेंस के साथ नया ऐरे बनाता है?",
    options_en: ["Array.from({length: n}, (_, i) => i)", "Array.range()", "Array.sequence()", "Array.generate()"],
    options_hi: ["Array.from({length: n}, (_, i) => i)", "Array.range()", "Array.sequence()", "Array.generate()"],
    answer_en: "Array.from({length: n}, (_, i) => i)",
    answer_hi: "Array.from({length: n}, (_, i) => i)",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What does `Object.is()` method do?",
    question_hi: "`Object.is()` मेथड क्या करता है?",
    options_en: ["Compares two values for sameness", "Checks if objects are equal", "Compares object types", "Checks object identity"],
    options_hi: ["दो वैल्यूज की समानता की तुलना करता है", "चेक करता है कि ऑब्जेक्ट्स बराबर हैं", "ऑब्जेक्ट टाइप्स की तुलना करता है", "ऑब्जेक्ट आइडेंटिटी चेक करता है"],
    answer_en: "Compares two values for sameness",
    answer_hi: "दो वैल्यूज की समानता की तुलना करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method returns a new array with elements in reverse order?",
    question_hi: "कौन-सा मेथड रिवर्स ऑर्डर में एलिमेंट्स के साथ नया ऐरे लौटाता है?",
    options_en: ["reverse()", "sort()", "flip()", "backwards()"],
    options_hi: ["reverse()", "sort()", "flip()", "backwards()"],
    answer_en: "reverse()",
    answer_hi: "reverse()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the output of `console.log(+!![])`?",
    question_hi: "`console.log(+!![])` का आउटपुट क्या है?",
    options_en: ["1", "0", "true", "false"],
    options_hi: ["1", "0", "true", "false"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method creates a new array with specified elements?",
    question_hi: "कौन-सा मेथड निर्दिष्ट एलिमेंट्स के साथ नया ऐरे बनाता है?",
    options_en: ["Array.of()", "Array.from()", "Array.create()", "Array.new()"],
    options_hi: ["Array.of()", "Array.from()", "Array.create()", "Array.new()"],
    answer_en: "Array.of()",
    answer_hi: "Array.of()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What does the `in` operator return for array indices?",
    question_hi: "ऐरे इंडिसेस के लिए `in` ऑपरेटर क्या लौटाता है?",
    options_en: ["true for existing indices", "true for all indices", "false for all indices", "undefined"],
    options_hi: ["एक्सिस्टिंग इंडिसेस के लिए true", "सभी इंडिसेस के लिए true", "सभी इंडिसेस के लिए false", "undefined"],
    answer_en: "true for existing indices",
    answer_hi: "एक्सिस्टिंग इंडिसेस के लिए true",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method returns array iterator with key/value pairs?",
    question_hi: "कौन-सा मेथड की/वैल्यू पेयर्स के साथ ऐरे इटरेटर लौटाता है?",
    options_en: ["entries()", "keys()", "values()", "pairs()"],
    options_hi: ["entries()", "keys()", "values()", "pairs()"],
    answer_en: "entries()",
    answer_hi: "entries()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the output of `console.log([1, 2, 3].map(num => num * 2))`?",
    question_hi: "`console.log([1, 2, 3].map(num => num * 2))` का आउटपुट क्या है?",
    options_en: ["[2, 4, 6]", "[1, 2, 3]", "[2, 2, 2]", "Error"],
    options_hi: ["[2, 4, 6]", "[1, 2, 3]", "[2, 2, 2]", "Error"],
    answer_en: "[2, 4, 6]",
    answer_hi: "[2, 4, 6]",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method fills all array elements with a static value?",
    question_hi: "कौन-सा मेथड सभी ऐरे एलिमेंट्स को स्टेटिक वैल्यू से भरता है?",
    options_en: ["fill()", "push()", "pop()", "set()"],
    options_hi: ["fill()", "push()", "pop()", "set()"],
    answer_en: "fill()",
    answer_hi: "fill()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What does `Object.setPrototypeOf()` do?",
    question_hi: "`Object.setPrototypeOf()` क्या करता है?",
    options_en: ["Sets prototype of specified object", "Gets prototype of object", "Creates new prototype", "Modifies prototype chain"],
    options_hi: ["निर्दिष्ट ऑब्जेक्ट का प्रोटोटाइप सेट करता है", "ऑब्जेक्ट का प्रोटोटाइप प्राप्त करता है", "नया प्रोटोटाइप बनाता है", "प्रोटोटाइप चेन मॉडिफाई करता है"],
    answer_en: "Sets prototype of specified object",
    answer_hi: "निर्दिष्ट ऑब्जेक्ट का प्रोटोटाइप सेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method returns array iterator with keys?",
    question_hi: "कौन-सा मेथड कीज़ के साथ ऐरे इटरेटर लौटाता है?",
    options_en: ["keys()", "entries()", "values()", "indexes()"],
    options_hi: ["keys()", "entries()", "values()", "indexes()"],
    answer_en: "keys()",
    answer_hi: "keys()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the output of `console.log(Array.isArray(Array.prototype))`?",
    question_hi: "`console.log(Array.isArray(Array.prototype))` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method copies array elements to another position in array?",
    question_hi: "कौन-सा मेथड ऐरे एलिमेंट्स को ऐरे में दूसरी पोजीशन पर कॉपी करता है?",
    options_en: ["copyWithin()", "slice()", "splice()", "copy()"],
    options_hi: ["copyWithin()", "slice()", "splice()", "copy()"],
    answer_en: "copyWithin()",
    answer_hi: "copyWithin()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What does `Object.getOwnPropertySymbols()` return?",
    question_hi: "`Object.getOwnPropertySymbols()` क्या लौटाता है?",
    options_en: ["Array of symbol properties", "Array of all properties", "Symbol objects", "Property symbols"],
    options_hi: ["सिंबल प्रॉपर्टीज का ऐरे", "सभी प्रॉपर्टीज का ऐरे", "सिंबल ऑब्जेक्ट्स", "प्रॉपर्टी सिंबल्स"],
    answer_en: "Array of symbol properties",
    answer_hi: "सिंबल प्रॉपर्टीज का ऐरे",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method reduces array to single value using function?",
    question_hi: "कौन-सा मेथड फंक्शन का उपयोग करके ऐरे को सिंगल वैल्यू में बदलता है?",
    options_en: ["reduce()", "map()", "filter()", "forEach()"],
    options_hi: ["reduce()", "map()", "filter()", "forEach()"],
    answer_en: "reduce()",
    answer_hi: "reduce()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the output of `console.log([...[1, 2], 3])`?",
    question_hi: "`console.log([...[1, 2], 3])` का आउटपुट क्या है?",
    options_en: ["[1, 2, 3]", "[[1, 2], 3]", "[1, 2, [3]]", "Error"],
    options_hi: ["[1, 2, 3]", "[[1, 2], 3]", "[1, 2, [3]]", "Error"],
    answer_en: "[1, 2, 3]",
    answer_hi: "[1, 2, 3]",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method returns array iterator with values?",
    question_hi: "कौन-सा मेथड वैल्यूज के साथ ऐरे इटरेटर लौटाता है?",
    options_en: ["values()", "keys()", "entries()", "items()"],
    options_hi: ["values()", "keys()", "entries()", "items()"],
    answer_en: "values()",
    answer_hi: "values()",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What does `Object.fromEntries()` do?",
    question_hi: "`Object.fromEntries()` क्या करता है?",
    options_en: ["Creates object from key-value pairs", "Creates entries from object", "Converts object to array", "Maps object properties"],
    options_hi: ["की-वैल्यू पेयर्स से ऑब्जेक्ट बनाता है", "ऑब्जेक्ट से एंट्रीज बनाता है", "ऑब्जेक्ट को ऐरे में कन्वर्ट करता है", "ऑब्जेक्ट प्रॉपर्टीज मैप करता है"],
    answer_en: "Creates object from key-value pairs",
    answer_hi: "की-वैल्यू पेयर्स से ऑब्जेक्ट बनाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method finds first element that satisfies testing function?",
    question_hi: "कौन-सा मेथड पहला एलिमेंट ढूंढता है जो टेस्टिंग फंक्शन को संतुष्ट करता है?",
    options_en: ["find()", "filter()", "search()", "locate()"],
    options_hi: ["find()", "filter()", "search()", "locate()"],
    answer_en: "find()",
    answer_hi: "find()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the output of `console.log([1, 2, 3].find(x => x > 1))`?",
    question_hi: "`console.log([1, 2, 3].find(x => x > 1))` का आउटपुट क्या है?",
    options_en: ["2", "1", "3", "undefined"],
    options_hi: ["2", "1", "3", "undefined"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method creates array from array-like or iterable object?",
    question_hi: "कौन-सा मेथड ऐरे-जैसी या इटरेबल ऑब्जेक्ट से ऐरे बनाता है?",
    options_en: ["Array.from()", "Array.of()", "Array.create()", "Array.new()"],
    options_hi: ["Array.from()", "Array.of()", "Array.create()", "Array.new()"],
    answer_en: "Array.from()",
    answer_hi: "Array.from()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What does `Object.hasOwn()` method do?",
    question_hi: "`Object.hasOwn()` मेथड क्या करता है?",
    options_en: ["Checks if object has specified property", "Checks if property exists in prototype", "Checks object ownership", "Validates object properties"],
    options_hi: ["चेक करता है कि ऑब्जेक्ट में निर्दिष्ट प्रॉपर्टी है", "चेक करता है कि प्रॉपर्टी प्रोटोटाइप में है", "ऑब्जेक्ट ओनरशिप चेक करता है", "ऑब्जेक्ट प्रॉपर्टीज वैलिडेट करता है"],
    answer_en: "Checks if object has specified property",
    answer_hi: "चेक करता है कि ऑब्जेक्ट में निर्दिष्ट प्रॉपर्टी है",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method returns last index of element in array?",
    question_hi: "कौन-सा मेथड ऐरे में एलिमेंट का आखिरी इंडेक्स लौटाता है?",
    options_en: ["lastIndexOf()", "findLastIndex()", "searchLast()", "indexOfLast()"],
    options_hi: ["lastIndexOf()", "findLastIndex()", "searchLast()", "indexOfLast()"],
    answer_en: "lastIndexOf()",
    answer_hi: "lastIndexOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the output of `console.log([1, 2, 3].includes(2))`?",
    question_hi: "`console.log([1, 2, 3].includes(2))` का आउटपुट क्या है?",
    options_en: ["true", "false", "2", "undefined"],
    options_hi: ["true", "false", "2", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method joins all array elements into string?",
    question_hi: "कौन-सा मेथड सभी ऐरे एलिमेंट्स को स्ट्रिंग में जोड़ता है?",
    options_en: ["join()", "concat()", "merge()", "combine()"],
    options_hi: ["join()", "concat()", "merge()", "combine()"],
    answer_en: "join()",
    answer_hi: "join()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What does `Array.prototype[Symbol.iterator]` return?",
    question_hi: "`Array.prototype[Symbol.iterator]` क्या लौटाता है?",
    options_en: ["Array iterator function", "Array values", "Array keys", "Array entries"],
    options_hi: ["ऐरे इटरेटर फंक्शन", "ऐरे वैल्यूज", "ऐरे कीज़", "ऐरे एंट्रीज"],
    answer_en: "Array iterator function",
    answer_hi: "ऐरे इटरेटर फंक्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method removes/adds elements from array?",
    question_hi: "कौन-सा मेथड ऐरे से एलिमेंट्स हटाता/जोड़ता है?",
    options_en: ["splice()", "slice()", "cut()", "replace()"],
    options_hi: ["splice()", "slice()", "cut()", "replace()"],
    answer_en: "splice()",
    answer_hi: "splice()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the output of `console.log(Array.from('hello'))`?",
    question_hi: "`console.log(Array.from('hello'))` का आउटपुट क्या है?",
    options_en: ["['h', 'e', 'l', 'l', 'o']", "['hello']", "[104, 101, 108, 108, 111]", "Error"],
    options_hi: ["['h', 'e', 'l', 'l', 'o']", "['hello']", "[104, 101, 108, 108, 111]", "Error"],
    answer_en: "['h', 'e', 'l', 'l', 'o']",
    answer_hi: "['h', 'e', 'l', 'l', 'o']",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method returns portion of array into new array?",
    question_hi: "कौन-सा मेथड ऐरे के हिस्से को नए ऐरे में लौटाता है?",
    options_en: ["slice()", "splice()", "split()", "cut()"],
    options_hi: ["slice()", "splice()", "split()", "cut()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What does `Object.entries()` return?",
    question_hi: "`Object.entries()` क्या लौटाता है?",
    options_en: ["Array of key-value pairs", "Object properties", "Property values", "Object keys"],
    options_hi: ["की-वैल्यू पेयर्स का ऐरे", "ऑब्जेक्ट प्रॉपर्टीज", "प्रॉपर्टी वैल्यूज", "ऑब्जेक्ट कीज़"],
    answer_en: "Array of key-value pairs",
    answer_hi: "की-वैल्यू पेयर्स का ऐरे",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method sorts elements of array in place?",
    question_hi: "कौन-सा मेथड ऐरे के एलिमेंट्स को उसी जगह सॉर्ट करता है?",
    options_en: ["sort()", "order()", "arrange()", "sorted()"],
    options_hi: ["sort()", "order()", "arrange()", "sorted()"],
    answer_en: "sort()",
    answer_hi: "sort()",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the output of `console.log([3, 1, 4].sort())`?",
    question_hi: "`console.log([3, 1, 4].sort())` का आउटपुट क्या है?",
    options_en: ["[1, 3, 4]", "[3, 1, 4]", "[4, 3, 1]", "[1, 4, 3]"],
    options_hi: ["[1, 3, 4]", "[3, 1, 4]", "[4, 3, 1]", "[1, 4, 3]"],
    answer_en: "[1, 3, 4]",
    answer_hi: "[1, 3, 4]",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method returns string representation of array?",
    question_hi: "कौन-सा मेथड ऐरे का स्ट्रिंग रिप्रेजेंटेशन लौटाता है?",
    options_en: ["toString()", "String()", "join()", "valueOf()"],
    options_hi: ["toString()", "String()", "join()", "valueOf()"],
    answer_en: "toString()",
    answer_hi: "toString()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What does `Array.prototype.constructor` refer to?",
    question_hi: "`Array.prototype.constructor` किसे संदर्भित करता है?",
    options_en: ["Array function", "Object function", "Constructor method", "Prototype object"],
    options_hi: ["Array फंक्शन", "Object फंक्शन", "कंस्ट्रक्टर मेथड", "प्रोटोटाइप ऑब्जेक्ट"],
    answer_en: "Array function",
    answer_hi: "Array फंक्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method concatenates two or more arrays?",
    question_hi: "कौन-सा मेथड दो या अधिक ऐरे को कॉन्केटनेट करता है?",
    options_en: ["concat()", "merge()", "join()", "combine()"],
    options_hi: ["concat()", "merge()", "join()", "combine()"],
    answer_en: "concat()",
    answer_hi: "concat()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the output of `console.log([1, 2].concat([3, 4]))`?",
    question_hi: "`console.log([1, 2].concat([3, 4]))` का आउटपुट क्या है?",
    options_en: ["[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "[1, 2, [3, 4]]", "Error"],
    options_hi: ["[1, 2, 3, 4]", "[[1, 2], [3, 4]]", "[1, 2, [3, 4]]", "Error"],
    answer_en: "[1, 2, 3, 4]",
    answer_hi: "[1, 2, 3, 4]",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method finds index of first element satisfying function?",
    question_hi: "कौन-सा मेथड फंक्शन को संतुष्ट करने वाले पहले एलिमेंट का इंडेक्स ढूंढता है?",
    options_en: ["findIndex()", "indexOf()", "search()", "locateIndex()"],
    options_hi: ["findIndex()", "indexOf()", "search()", "locateIndex()"],
    answer_en: "findIndex()",
    answer_hi: "findIndex()",
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
