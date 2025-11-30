const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log(typeof typeof 1)`?",
    question_hi: "`console.log(typeof typeof 1)` का आउटपुट क्या है?",
    options_en: ["string", "number", "undefined", "object"],
    options_hi: ["string", "number", "undefined", "object"],
    answer_en: "string",
    answer_hi: "string",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method returns the first element that satisfies a condition?",
    question_hi: "कौन-सा मेथड पहला एलिमेंट लौटाता है जो कंडीशन को संतुष्ट करता है?",
    options_en: ["find()", "filter()", "search()", "locate()"],
    options_hi: ["find()", "filter()", "search()", "locate()"],
    answer_en: "find()",
    answer_hi: "find()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `rest` parameter (...) do in function parameters?",
    question_hi: "फंक्शन पैरामीटर्स में `rest` पैरामीटर (...) क्या करता है?",
    options_en: ["Collects multiple arguments into an array", "Spreads array elements", "Restricts parameters", "Creates optional parameters"],
    options_hi: ["कई आर्गुमेंट्स को ऐरे में इकट्ठा करता है", "ऐरे एलिमेंट्स फैलाता है", "पैरामीटर्स रिस्ट्रिक्ट करता है", "ऑप्शनल पैरामीटर्स बनाता है"],
    answer_en: "Collects multiple arguments into an array",
    answer_hi: "कई आर्गुमेंट्स को ऐरे में इकट्ठा करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method returns a new array with elements from subarrays?",
    question_hi: "कौन-सा मेथड सबअरे से एलिमेंट्स के साथ नया ऐरे लौटाता है?",
    options_en: ["flat()", "concat()", "merge()", "join()"],
    options_hi: ["flat()", "concat()", "merge()", "join()"],
    answer_en: "flat()",
    answer_hi: "flat()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `Object.freeze()`?",
    question_hi: "`Object.freeze()` का उद्देश्य क्या है?",
    options_en: ["Prevents modification of object properties", "Makes object read-only", "Freezes object execution", "Stops object methods"],
    options_hi: ["ऑब्जेक्ट प्रॉपर्टीज में मॉडिफिकेशन रोकता है", "ऑब्जेक्ट को रीड-ओनली बनाता है", "ऑब्जेक्ट एक्जिक्यूशन फ्रीज करता है", "ऑब्जेक्ट मेथड्स रोकता है"],
    answer_en: "Prevents modification of object properties",
    answer_hi: "ऑब्जेक्ट प्रॉपर्टीज में मॉडिफिकेशन रोकता है",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which method checks if an array includes a certain value?",
    question_hi: "कौन-सा मेथड चेक करता है कि ऐरे में कोई वैल्यू है?",
    options_en: ["includes()", "contains()", "has()", "indexOf()"],
    options_hi: ["includes()", "contains()", "has()", "indexOf()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the result of `console.log(1 < 2 < 3)` and `console.log(3 > 2 > 1)`?",
    question_hi: "`console.log(1 < 2 < 3)` और `console.log(3 > 2 > 1)` का रिजल्ट क्या है?",
    options_en: ["true, false", "true, true", "false, false", "false, true"],
    options_hi: ["true, false", "true, true", "false, false", "false, true"],
    answer_en: "true, false",
    answer_hi: "true, false",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method creates a new array with all elements that pass the test?",
    question_hi: "कौन-सा मेथड नया ऐरे बनाता है जिसमें टेस्ट पास करने वाले सभी एलिमेंट्स हों?",
    options_en: ["filter()", "map()", "reduce()", "forEach()"],
    options_hi: ["filter()", "map()", "reduce()", "forEach()"],
    answer_en: "filter()",
    answer_hi: "filter()",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What does `Object.seal()` do?",
    question_hi: "`Object.seal()` क्या करता है?",
    options_en: ["Prevents adding new properties", "Allows modifying existing properties", "Both A and B", "Makes object immutable"],
    options_hi: ["नई प्रॉपर्टीज जोड़ने से रोकता है", "एक्सिस्टिंग प्रॉपर्टीज मॉडिफाई करने की अनुमति देता है", "A और B दोनों", "ऑब्जेक्ट को इम्यूटेबल बनाता है"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method returns the last index of an element in an array?",
    question_hi: "कौन-सा मेथड ऐरे में एलिमेंट का आखिरी इंडेक्स लौटाता है?",
    options_en: ["lastIndexOf()", "findLastIndex()", "searchLast()", "indexOfLast()"],
    options_hi: ["lastIndexOf()", "findLastIndex()", "searchLast()", "indexOfLast()"],
    answer_en: "lastIndexOf()",
    answer_hi: "lastIndexOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
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
    num: 12,
    question_en: "Which method checks if a string ends with specific characters?",
    question_hi: "कौन-सा मेथड चेक करता है कि स्ट्रिंग विशेष करैक्टर्स से खत्म होती है?",
    options_en: ["endsWith()", "startsWith()", "includes()", "match()"],
    options_hi: ["endsWith()", "startsWith()", "includes()", "match()"],
    answer_en: "endsWith()",
    answer_hi: "endsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the purpose of `Symbol` in JavaScript?",
    question_hi: "JavaScript में `Symbol` का उद्देश्य क्या है?",
    options_en: ["Create unique identifiers", "Create private properties", "Both A and B", "Create mathematical symbols"],
    options_hi: ["यूनिक आइडेंटिफायर बनाना", "प्राइवेट प्रॉपर्टीज बनाना", "A और B दोनों", "मैथमेटिकल सिंबल्स बनाना"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
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
    num: 15,
    question_en: "What does `Object.getPrototypeOf()` return?",
    question_hi: "`Object.getPrototypeOf()` क्या लौटाता है?",
    options_en: ["Prototype of specified object", "Properties of object", "Methods of object", "Class of object"],
    options_hi: ["निर्दिष्ट ऑब्जेक्ट का प्रोटोटाइप", "ऑब्जेक्ट की प्रॉपर्टीज", "ऑब्जेक्ट की मेथड्स", "ऑब्जेक्ट की क्लास"],
    answer_en: "Prototype of specified object",
    answer_hi: "निर्दिष्ट ऑब्जेक्ट का प्रोटोटाइप",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method returns the primitive value of an object?",
    question_hi: "कौन-सा मेथड ऑब्जेक्ट की प्रिमिटिव वैल्यू लौटाता है?",
    options_en: ["valueOf()", "toString()", "toValue()", "primitive()"],
    options_hi: ["valueOf()", "toString()", "toValue()", "primitive()"],
    answer_en: "valueOf()",
    answer_hi: "valueOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
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
    num: 18,
    question_en: "Which method checks if an object has a specific property?",
    question_hi: "कौन-सा मेथड चेक करता है कि ऑब्जेक्ट में विशिष्ट प्रॉपर्टी है?",
    options_en: ["hasOwnProperty()", "hasProperty()", "contains()", "includes()"],
    options_hi: ["hasOwnProperty()", "hasProperty()", "contains()", "includes()"],
    answer_en: "hasOwnProperty()",
    answer_hi: "hasOwnProperty()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the purpose of `WeakMap`?",
    question_hi: "`WeakMap` का उद्देश्य क्या है?",
    options_en: ["Store key-value pairs with weak references", "Create weak arrays", "Make maps smaller", "Optimize memory usage"],
    options_hi: ["वीक रेफरेंस के साथ की-वैल्यू पेयर्स स्टोर करना", "वीक ऐरे बनाना", "मैप्स को छोटा बनाना", "मेमोरी यूसेज ऑप्टिमाइज करना"],
    answer_en: "Store key-value pairs with weak references",
    answer_hi: "वीक रेफरेंस के साथ की-वैल्यू पेयर्स स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method creates a new function with specified `this` value?",
    question_hi: "कौन-सा मेथड निर्दिष्ट `this` वैल्यू के साथ नया फंक्शन बनाता है?",
    options_en: ["bind()", "call()", "apply()", "attach()"],
    options_hi: ["bind()", "call()", "apply()", "attach()"],
    answer_en: "bind()",
    answer_hi: "bind()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the result of `console.log(!![])`?",
    question_hi: "`console.log(!![])` का रिजल्ट क्या है?",
    options_en: ["true", "false", "undefined", "[]"],
    options_hi: ["true", "false", "undefined", "[]"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
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
    num: 23,
    question_en: "What does `Object.assign()` do?",
    question_hi: "`Object.assign()` क्या करता है?",
    options_en: ["Copies properties from source to target object", "Assigns values to variables", "Creates new objects", "Merges arrays"],
    options_hi: ["सोर्स से टारगेट ऑब्जेक्ट में प्रॉपर्टीज कॉपी करता है", "वेरिएबल्स को वैल्यूज असाइन करता है", "नए ऑब्जेक्ट्स बनाता है", "ऐरे मर्ज करता है"],
    answer_en: "Copies properties from source to target object",
    answer_hi: "सोर्स से टारगेट ऑब्जेक्ट में प्रॉपर्टीज कॉपी करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method checks if a value is an array?",
    question_hi: "कौन-सा मेथड चेक करता है कि वैल्यू ऐरे है?",
    options_en: ["Array.isArray()", "typeof", "instanceof", "isArray()"],
    options_hi: ["Array.isArray()", "typeof", "instanceof", "isArray()"],
    answer_en: "Array.isArray()",
    answer_hi: "Array.isArray()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the purpose of `Proxy` object?",
    question_hi: "`Proxy` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Create custom behavior for fundamental operations", "Create proxy servers", "Handle HTTP requests", "Manage object properties"],
    options_hi: ["फंडामेंटल ऑपरेशन्स के लिए कस्टम बिहेवियर बनाना", "प्रॉक्सी सर्वर बनाना", "HTTP रिक्वेस्ट्स हैंडल करना", "ऑब्जेक्ट प्रॉपर्टीज मैनेज करना"],
    answer_en: "Create custom behavior for fundamental operations",
    answer_hi: "फंडामेंटल ऑपरेशन्स के लिए कस्टम बिहेवियर बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
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
    num: 27,
    question_en: "What is the output of `console.log(0 == '0')`?",
    question_hi: "`console.log(0 == '0')` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method creates a new array with results of calling function?",
    question_hi: "कौन-सा मेथड फंक्शन कॉल के रिजल्ट्स के साथ नया ऐरे बनाता है?",
    options_en: ["map()", "forEach()", "filter()", "reduce()"],
    options_hi: ["map()", "forEach()", "filter()", "reduce()"],
    answer_en: "map()",
    answer_hi: "map()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What does `Object.create()` do?",
    question_hi: "`Object.create()` क्या करता है?",
    options_en: ["Creates new object with specified prototype", "Creates empty object", "Copies object", "Initializes object"],
    options_hi: ["निर्दिष्ट प्रोटोटाइप के साथ नया ऑब्जेक्ट बनाता है", "खाली ऑब्जेक्ट बनाता है", "ऑब्जेक्ट कॉपी करता है", "ऑब्जेक्ट इनिशियलाइज करता है"],
    answer_en: "Creates new object with specified prototype",
    answer_hi: "निर्दिष्ट प्रोटोटाइप के साथ नया ऑब्जेक्ट बनाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method checks if a string starts with specific characters?",
    question_hi: "कौन-सा मेथड चेक करता है कि स्ट्रिंग विशेष करैक्टर्स से शुरू होती है?",
    options_en: ["startsWith()", "endsWith()", "includes()", "match()"],
    options_hi: ["startsWith()", "endsWith()", "includes()", "match()"],
    answer_en: "startsWith()",
    answer_hi: "startsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the purpose of `Reflect` object?",
    question_hi: "`Reflect` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Provide methods for interceptable JavaScript operations", "Reflect objects", "Create mirrors", "Handle reflections"],
    options_hi: ["इंटरसेप्टेबल JavaScript ऑपरेशन्स के लिए मेथड्स प्रोवाइड करना", "ऑब्जेक्ट्स रिफ्लेक्ट करना", "मिरर बनाना", "रिफ्लेक्शन हैंडल करना"],
    answer_en: "Provide methods for interceptable JavaScript operations",
    answer_hi: "इंटरसेप्टेबल JavaScript ऑपरेशन्स के लिए मेथड्स प्रोवाइड करना",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
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
    num: 33,
    question_en: "What is the output of `console.log([] === [])`?",
    question_hi: "`console.log([] === [])` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "[]"],
    options_hi: ["false", "true", "undefined", "[]"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method executes reducer function on each element?",
    question_hi: "कौन-सा मेथड प्रत्येक एलिमेंट पर रिड्यूसर फंक्शन चलाता है?",
    options_en: ["reduce()", "map()", "filter()", "forEach()"],
    options_hi: ["reduce()", "map()", "filter()", "forEach()"],
    answer_en: "reduce()",
    answer_hi: "reduce()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What does `Object.defineProperty()` do?",
    question_hi: "`Object.defineProperty()` क्या करता है?",
    options_en: ["Defines new property directly on object", "Modifies existing property", "Deletes property", "Copies property"],
    options_hi: ["ऑब्जेक्ट पर सीधे नई प्रॉपर्टी डिफाइन करता है", "एक्सिस्टिंग प्रॉपर्टी मॉडिफाई करता है", "प्रॉपर्टी डिलीट करता है", "प्रॉपर्टी कॉपी करता है"],
    answer_en: "Defines new property directly on object",
    answer_hi: "ऑब्जेक्ट पर सीधे नई प्रॉपर्टी डिफाइन करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method tests whether at least one element passes the test?",
    question_hi: "कौन-सा मेथड टेस्ट करता है कि कम से कम एक एलिमेंट टेस्ट पास करता है?",
    options_en: ["some()", "every()", "filter()", "find()"],
    options_hi: ["some()", "every()", "filter()", "find()"],
    answer_en: "some()",
    answer_hi: "some()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `Intl` object?",
    question_hi: "`Intl` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Language sensitive string formatting", "Internationalization", "Both A and B", "Internal operations"],
    options_hi: ["लैंग्वेज सेंसिटिव स्ट्रिंग फॉर्मेटिंग", "इंटरनेशनलाइजेशन", "A और B दोनों", "इंटरनल ऑपरेशन्स"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method tests whether all elements pass the test?",
    question_hi: "कौन-सा मेथड टेस्ट करता है कि सभी एलिमेंट्स टेस्ट पास करते हैं?",
    options_en: ["every()", "some()", "filter()", "all()"],
    options_hi: ["every()", "some()", "filter()", "all()"],
    answer_en: "every()",
    answer_hi: "every()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(+'')`?",
    question_hi: "`console.log(+'')` का आउटपुट क्या है?",
    options_en: ["0", "NaN", "undefined", "''"],
    options_hi: ["0", "NaN", "undefined", "''"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method creates array from array-like object?",
    question_hi: "कौन-सा मेथड ऐरे-जैसी ऑब्जेक्ट से ऐरे बनाता है?",
    options_en: ["Array.from()", "Array.of()", "Array.create()", "Array.new()"],
    options_hi: ["Array.from()", "Array.of()", "Array.create()", "Array.new()"],
    answer_en: "Array.from()",
    answer_hi: "Array.from()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What does `Object.getOwnPropertyNames()` return?",
    question_hi: "`Object.getOwnPropertyNames()` क्या लौटाता है?",
    options_en: ["Array of all property names", "Array of enumerable properties", "Object properties", "Property values"],
    options_hi: ["सभी प्रॉपर्टी नामों का ऐरे", "एन्यूमरेबल प्रॉपर्टीज का ऐरे", "ऑब्जेक्ट प्रॉपर्टीज", "प्रॉपर्टी वैल्यूज"],
    answer_en: "Array of all property names",
    answer_hi: "सभी प्रॉपर्टी नामों का ऐरे",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
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
    num: 43,
    question_en: "What is the purpose of `Set` object?",
    question_hi: "`Set` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Store unique values", "Store key-value pairs", "Create sets of objects", "Manage collections"],
    options_hi: ["यूनिक वैल्यूज स्टोर करना", "की-वैल्यू पेयर्स स्टोर करना", "ऑब्जेक्ट्स के सेट बनाना", "कलेक्शन्स मैनेज करना"],
    answer_en: "Store unique values",
    answer_hi: "यूनिक वैल्यूज स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method fills array with static value?",
    question_hi: "कौन-सा मेथड ऐरे को स्टेटिक वैल्यू से भरता है?",
    options_en: ["fill()", "push()", "pop()", "set()"],
    options_hi: ["fill()", "push()", "pop()", "set()"],
    answer_en: "fill()",
    answer_hi: "fill()",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the output of `console.log(typeof null)`?",
    question_hi: "`console.log(typeof null)` का आउटपुट क्या है?",
    options_en: ["object", "null", "undefined", "boolean"],
    options_hi: ["object", "null", "undefined", "boolean"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method copies array elements within array?",
    question_hi: "कौन-सा मेथड ऐरे एलिमेंट्स को ऐरे के अंदर कॉपी करता है?",
    options_en: ["copyWithin()", "slice()", "splice()", "copy()"],
    options_hi: ["copyWithin()", "slice()", "splice()", "copy()"],
    answer_en: "copyWithin()",
    answer_hi: "copyWithin()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What does `Object.values()` return?",
    question_hi: "`Object.values()` क्या लौटाता है?",
    options_en: ["Array of object's own property values", "Array of property names", "Object values", "Property descriptors"],
    options_hi: ["ऑब्जेक्ट की अपनी प्रॉपर्टी वैल्यूज का ऐरे", "प्रॉपर्टी नामों का ऐरे", "ऑब्जेक्ट वैल्यूज", "प्रॉपर्टी डिस्क्रिप्टर्स"],
    answer_en: "Array of object's own property values",
    answer_hi: "ऑब्जेक्ट की अपनी प्रॉपर्टी वैल्यूज का ऐरे",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method creates array from arguments?",
    question_hi: "कौन-सा मेथड आर्गुमेंट्स से ऐरे बनाता है?",
    options_en: ["Array.of()", "Array.from()", "Array.create()", "Array.new()"],
    options_hi: ["Array.of()", "Array.from()", "Array.create()", "Array.new()"],
    answer_en: "Array.of()",
    answer_hi: "Array.of()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `Map` object?",
    question_hi: "`Map` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Store key-value pairs", "Store unique values", "Create mappings", "Manage key collections"],
    options_hi: ["की-वैल्यू पेयर्स स्टोर करना", "यूनिक वैल्यूज स्टोर करना", "मैपिंग्स बनाना", "की कलेक्शन्स मैनेज करना"],
    answer_en: "Store key-value pairs",
    answer_hi: "की-वैल्यू पेयर्स स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method returns new array with elements in reverse order?",
    question_hi: "कौन-सा मेथड रिवर्स ऑर्डर में एलिमेंट्स के साथ नया ऐरे लौटाता है?",
    options_en: ["reverse()", "sort()", "flip()", "backwards()"],
    options_hi: ["reverse()", "sort()", "flip()", "backwards()"],
    answer_en: "reverse()",
    answer_hi: "reverse()",
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
