const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log(typeof null)`?",
    question_hi: "`console.log(typeof null)` का आउटपुट क्या है?",
    options_en: ["object", "null", "undefined", "string"],
    options_hi: ["object", "null", "undefined", "string"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method creates a new array with all sub-array elements concatenated?",
    question_hi: "कौन-सा मेथड सभी सब-ऐरे एलिमेंट्स को जोड़कर नया ऐरे बनाता है?",
    options_en: ["flat()", "concat()", "join()", "merge()"],
    options_hi: ["flat()", "concat()", "join()", "merge()"],
    answer_en: "flat()",
    answer_hi: "flat()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `??` operator do?",
    question_hi: "`??` ऑपरेटर क्या करता है?",
    options_en: ["Nullish coalescing", "Logical OR", "Logical AND", "Ternary operator"],
    options_hi: ["नलिश कोलेसिंग", "लॉजिकल OR", "लॉजिकल AND", "टर्नरी ऑपरेटर"],
    answer_en: "Nullish coalescing",
    answer_hi: "नलिश कोलेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method returns a string representation of an array?",
    question_hi: "कौन-सा मेथड ऐरे का स्ट्रिंग रिप्रेजेंटेशन लौटाता है?",
    options_en: ["toString()", "join()", "String()", "valueOf()"],
    options_hi: ["toString()", "join()", "String()", "valueOf()"],
    answer_en: "toString()",
    answer_hi: "toString()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is hoisting in JavaScript?",
    question_hi: "JavaScript में होइस्टिंग क्या है?",
    options_en: ["Moving declarations to top", "Moving variables up", "Lifting objects", "Elevating functions"],
    options_hi: ["डिक्लेरेशन को टॉप पर ले जाना", "वेरिएबल्स को ऊपर ले जाना", "ऑब्जेक्ट्स उठाना", "फंक्शन्स को ऊपर उठाना"],
    answer_en: "Moving declarations to top",
    answer_hi: "डिक्लेरेशन को टॉप पर ले जाना",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which symbol is used for template literals?",
    question_hi: "टेम्पलेट लिटरल्स के लिए कौन-सा सिंबल उपयोग होता है?",
    options_en: ["`", "'", "\"", "$"],
    options_hi: ["`", "'", "\"", "$"],
    answer_en: "`",
    answer_hi: "`",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What does `Array.isArray()` method do?",
    question_hi: "`Array.isArray()` मेथड क्या करता है?",
    options_en: ["Checks if value is array", "Creates array", "Converts to array", "Validates array"],
    options_hi: ["चेक करता है वैल्यू ऐरे है", "ऐरे बनाता है", "ऐरे में बदलता है", "ऐरे वैलिडेट करता है"],
    answer_en: "Checks if value is array",
    answer_hi: "चेक करता है वैल्यू ऐरे है",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method creates an array from array-like objects?",
    question_hi: "कौन-सा मेथड ऐरे-लाइक ऑब्जेक्ट्स से ऐरे बनाता है?",
    options_en: ["Array.from()", "Array.of()", "Array.create()", "Array.new()"],
    options_hi: ["Array.from()", "Array.of()", "Array.create()", "Array.new()"],
    answer_en: "Array.from()",
    answer_hi: "Array.from()",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the purpose of `use strict`?",
    question_hi: "`use strict` का उद्देश्य क्या है?",
    options_en: ["Enables strict mode", "Disables features", "Enables ES6", "Optimizes code"],
    options_hi: ["स्ट्रिक्ट मोड एनेबल करता है", "फीचर्स डिसेबल करता है", "ES6 एनेबल करता है", "कोड ऑप्टिमाइज़ करता है"],
    answer_en: "Enables strict mode",
    answer_hi: "स्ट्रिक्ट मोड एनेबल करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method returns the keys of an object?",
    question_hi: "कौन-सा मेथड ऑब्जेक्ट की कीज़ लौटाता है?",
    options_en: ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"],
    options_hi: ["Object.keys()", "Object.values()", "Object.entries()", "Object.properties()"],
    answer_en: "Object.keys()",
    answer_hi: "Object.keys()",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What does the `in` operator check?",
    question_hi: "`in` ऑपरेटर क्या चेक करता है?",
    options_en: ["Property existence", "Value existence", "Type of property", "Property value"],
    options_hi: ["प्रॉपर्टी का अस्तित्व", "वैल्यू का अस्तित्व", "प्रॉपर्टी का टाइप", "प्रॉपर्टी वैल्यू"],
    answer_en: "Property existence",
    answer_hi: "प्रॉपर्टी का अस्तित्व",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method freezes an object?",
    question_hi: "कौन-सा मेथड ऑब्जेक्ट को फ्रीज़ करता है?",
    options_en: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "Object.lock()"],
    options_hi: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "Object.lock()"],
    answer_en: "Object.freeze()",
    answer_hi: "Object.freeze()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is a closure in JavaScript?",
    question_hi: "JavaScript में क्लोजर क्या है?",
    options_en: ["Function with access to outer scope", "Closed function", "Private function", "Inner function"],
    options_hi: ["बाहरी स्कोप तक पहुंच वाला फंक्शन", "क्लोज्ड फंक्शन", "प्राइवेट फंक्शन", "इनर फंक्शन"],
    answer_en: "Function with access to outer scope",
    answer_hi: "बाहरी स्कोप तक पहुंच वाला फंक्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method creates a new object with prototype?",
    question_hi: "कौन-सा मेथड प्रोटोटाइप के साथ नया ऑब्जेक्ट बनाता है?",
    options_en: ["Object.create()", "Object.new()", "Object.prototype()", "Object.construct()"],
    options_hi: ["Object.create()", "Object.new()", "Object.prototype()", "Object.construct()"],
    answer_en: "Object.create()",
    answer_hi: "Object.create()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What does `NaN` stand for?",
    question_hi: "`NaN` का पूरा नाम क्या है?",
    options_en: ["Not a Number", "Not a Null", "Number and Null", "No assigned Number"],
    options_hi: ["नॉट ए नंबर", "नॉट ए नल", "नंबर एंड नल", "नो असाइंड नंबर"],
    answer_en: "Not a Number",
    answer_hi: "नॉट ए नंबर",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method checks if a value is NaN?",
    question_hi: "कौन-सा मेथड चेक करता है कि वैल्यू NaN है?",
    options_en: ["isNaN()", "Number.isNaN()", "Both", "None"],
    options_hi: ["isNaN()", "Number.isNaN()", "दोनों", "कोई नहीं"],
    answer_en: "Both",
    answer_hi: "दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `arguments` object?",
    question_hi: "`arguments` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Access function arguments", "Create arguments", "Store parameters", "Validate inputs"],
    options_hi: ["फंक्शन आर्गुमेंट्स तक पहुंच", "आर्गुमेंट्स बनाना", "पैरामीटर्स स्टोर करना", "इनपुट वैलिडेट करना"],
    answer_en: "Access function arguments",
    answer_hi: "फंक्शन आर्गुमेंट्स तक पहुंच",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which operator has the highest precedence?",
    question_hi: "किस ऑपरेटर की प्रीसीडेंस सबसे ज्यादा है?",
    options_en: ["()", "++", "*", "&&"],
    options_hi: ["()", "++", "*", "&&"],
    answer_en: "()",
    answer_hi: "()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What does the `void` operator do?",
    question_hi: "`void` ऑपरेटर क्या करता है?",
    options_en: ["Evaluates expression and returns undefined", "Deletes variable", "Empties value", "Clears memory"],
    options_hi: ["एक्सप्रेशन इवैल्यूएट करता है और undefined लौटाता है", "वेरिएबल डिलीट करता है", "वैल्यू खाली करता है", "मेमोरी क्लियर करता है"],
    answer_en: "Evaluates expression and returns undefined",
    answer_hi: "एक्सप्रेशन इवैल्यूएट करता है और undefined लौटाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method returns the primitive value of an object?",
    question_hi: "कौन-सा मेथड ऑब्जेक्ट की प्रिमिटिव वैल्यू लौटाता है?",
    options_en: ["valueOf()", "toString()", "toPrimitive()", "getValue()"],
    options_hi: ["valueOf()", "toString()", "toPrimitive()", "getValue()"],
    answer_en: "valueOf()",
    answer_hi: "valueOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is a generator function?",
    question_hi: "जनरेटर फंक्शन क्या है?",
    options_en: ["Function that can be paused", "Function that generates numbers", "Fast function", "Async function"],
    options_hi: ["फंक्शन जो पॉज़ किया जा सकता है", "फंक्शन जो नंबर जनरेट करता है", "फास्ट फंक्शन", "एसिंक फंक्शन"],
    answer_en: "Function that can be paused",
    answer_hi: "फंक्शन जो पॉज़ किया जा सकता है",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which keyword is used in generator functions?",
    question_hi: "जनरेटर फंक्शन्स में कौन-सा कीवर्ड उपयोग होता है?",
    options_en: ["yield", "return", "break", "pause"],
    options_hi: ["yield", "return", "break", "pause"],
    answer_en: "yield",
    answer_hi: "yield",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is destructuring assignment?",
    question_hi: "डिस्ट्रक्चरिंग असाइनमेंट क्या है?",
    options_en: ["Unpack values from objects/arrays", "Destroy objects", "Structure data", "Assign multiple values"],
    options_hi: ["ऑब्जेक्ट्स/ऐरे से वैल्यूज़ निकालना", "ऑब्जेक्ट्स को डिस्ट्रॉय करना", "डेटा स्ट्रक्चर करना", "मल्टीपल वैल्यू असाइन करना"],
    answer_en: "Unpack values from objects/arrays",
    answer_hi: "ऑब्जेक्ट्स/ऐरे से वैल्यूज़ निकालना",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method creates a new array with results of calling function on every element?",
    question_hi: "कौन-सा मेथड प्रत्येक एलिमेंट पर फंक्शन कॉल के रिजल्ट से नया ऐरे बनाता है?",
    options_en: ["map()", "forEach()", "filter()", "reduce()"],
    options_hi: ["map()", "forEach()", "filter()", "reduce()"],
    answer_en: "map()",
    answer_hi: "map()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the difference between `==` and `===`?",
    question_hi: "`==` और `===` में क्या अंतर है?",
    options_en: ["== checks value, === checks value and type", "No difference", "=== is faster", "== is newer"],
    options_hi: ["== वैल्यू चेक करता है, === वैल्यू और टाइप चेक करता है", "कोई अंतर नहीं", "=== फास्टर है", "== नया है"],
    answer_en: "== checks value, === checks value and type",
    answer_hi: "== वैल्यू चेक करता है, === वैल्यू और टाइप चेक करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method finds the first element that satisfies a condition?",
    question_hi: "कौन-सा मेथड पहला एलिमेंट ढूंढता है जो कंडीशन को सैटिस्फाई करता है?",
    options_en: ["find()", "filter()", "search()", "locate()"],
    options_hi: ["find()", "filter()", "search()", "locate()"],
    answer_en: "find()",
    answer_hi: "find()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is a polyfill?",
    question_hi: "पॉलीफिल क्या है?",
    options_en: ["Code that provides modern features in older browsers", "Filler code", "CSS feature", "HTML element"],
    options_hi: ["कोड जो पुराने ब्राउज़र में मॉडर्न फीचर्स प्रोवाइड करता है", "फिलर कोड", "CSS फीचर", "HTML एलिमेंट"],
    answer_en: "Code that provides modern features in older browsers",
    answer_hi: "कोड जो पुराने ब्राउज़र में मॉडर्न फीचर्स प्रोवाइड करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method returns the last index of an element in array?",
    question_hi: "कौन-सा मेथड ऐरे में एलिमेंट का लास्ट इंडेक्स लौटाता है?",
    options_en: ["lastIndexOf()", "indexOf()", "findLastIndex()", "searchLast()"],
    options_hi: ["lastIndexOf()", "indexOf()", "findLastIndex()", "searchLast()"],
    answer_en: "lastIndexOf()",
    answer_hi: "lastIndexOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `Symbol` in JavaScript?",
    question_hi: "JavaScript में `Symbol` का उद्देश्य क्या है?",
    options_en: ["Create unique identifiers", "Create strings", "Generate numbers", "Create constants"],
    options_hi: ["यूनिक आइडेंटिफायर्स बनाना", "स्ट्रिंग्स बनाना", "नंबर्स जनरेट करना", "कॉन्स्टेंट्स बनाना"],
    answer_en: "Create unique identifiers",
    answer_hi: "यूनिक आइडेंटिफायर्स बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method copies properties from source to target object?",
    question_hi: "कौन-सा मेथड सोर्स से टार्गेट ऑब्जेक्ट में प्रॉपर्टीज़ कॉपी करता है?",
    options_en: ["Object.assign()", "Object.copy()", "Object.merge()", "Object.clone()"],
    options_hi: ["Object.assign()", "Object.copy()", "Object.merge()", "Object.clone()"],
    answer_en: "Object.assign()",
    answer_hi: "Object.assign()",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is a proxy in JavaScript?",
    question_hi: "JavaScript में प्रॉक्सी क्या है?",
    options_en: ["Object that wraps another object", "Server object", "Network object", "Function wrapper"],
    options_hi: ["ऑब्जेक्ट जो दूसरे ऑब्जेक्ट को रैप करता है", "सर्वर ऑब्जेक्ट", "नेटवर्क ऑब्जेक्ट", "फंक्शन रैपर"],
    answer_en: "Object that wraps another object",
    answer_hi: "ऑब्जेक्ट जो दूसरे ऑब्जेक्ट को रैप करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method creates a new array with specified elements?",
    question_hi: "कौन-सा मेथड स्पेसिफाइड एलिमेंट्स के साथ नया ऐरे बनाता है?",
    options_en: ["Array.of()", "Array.from()", "Array.new()", "Array.create()"],
    options_hi: ["Array.of()", "Array.from()", "Array.new()", "Array.create()"],
    answer_en: "Array.of()",
    answer_hi: "Array.of()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of `Reflect` object?",
    question_hi: "`Reflect` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Provides methods for interceptable operations", "Reflects light", "Mirrors objects", "Copies functions"],
    options_hi: ["इंटरसेप्टेबल ऑपरेशन्स के लिए मेथड्स प्रोवाइड करता है", "लाइट रिफ्लेक्ट करता है", "ऑब्जेक्ट्स मिरर करता है", "फंक्शन्स कॉपी करता है"],
    answer_en: "Provides methods for interceptable operations",
    answer_hi: "इंटरसेप्टेबल ऑपरेशन्स के लिए मेथड्स प्रोवाइड करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method checks if an object is sealed?",
    question_hi: "कौन-सा मेथड चेक करता है कि ऑब्जेक्ट सील्ड है?",
    options_en: ["Object.isSealed()", "Object.isFrozen()", "Object.isExtensible()", "Object.isLocked()"],
    options_hi: ["Object.isSealed()", "Object.isFrozen()", "Object.isExtensible()", "Object.isLocked()"],
    answer_en: "Object.isSealed()",
    answer_hi: "Object.isSealed()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is a WeakMap?",
    question_hi: "वीकमैप क्या है?",
    options_en: ["Collection of key-value pairs with weak references", "Weak array", "Slow map", "Simple object"],
    options_hi: ["वीक रेफरेंस वाले की-वैल्यू पेयर्स का कलेक्शन", "वीक ऐरे", "स्लो मैप", "सिंपल ऑब्जेक्ट"],
    answer_en: "Collection of key-value pairs with weak references",
    answer_hi: "वीक रेफरेंस वाले की-वैल्यू पेयर्स का कलेक्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method returns the string representation of a number in specified base?",
    question_hi: "कौन-सा मेथड स्पेसिफाइड बेस में नंबर का स्ट्रिंग रिप्रेजेंटेशन लौटाता है?",
    options_en: ["toString()", "toFixed()", "toExponential()", "toPrecision()"],
    options_hi: ["toString()", "toFixed()", "toExponential()", "toPrecision()"],
    answer_en: "toString()",
    answer_hi: "toString()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `with` statement?",
    question_hi: "`with` स्टेटमेंट का उद्देश्य क्या है?",
    options_en: ["Extends scope chain", "Creates objects", "Withdraws variables", "Deletes properties"],
    options_hi: ["स्कोप चेन एक्सटेंड करता है", "ऑब्जेक्ट्स बनाता है", "वेरिएबल्स विदड्रॉ करता है", "प्रॉपर्टीज़ डिलीट करता है"],
    answer_en: "Extends scope chain",
    answer_hi: "स्कोप चेन एक्सटेंड करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method formats a number with fixed digits after decimal?",
    question_hi: "कौन-सा मेथड डेसीमल के बाद फिक्स्ड डिजिट्स के साथ नंबर फॉर्मेट करता है?",
    options_en: ["toFixed()", "toPrecision()", "toExponential()", "toString()"],
    options_hi: ["toFixed()", "toPrecision()", "toExponential()", "toString()"],
    answer_en: "toFixed()",
    answer_hi: "toFixed()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is memoization?",
    question_hi: "मेमोइज़ेशन क्या है?",
    options_en: ["Caching function results", "Memory allocation", "Data storage", "Function optimization"],
    options_hi: ["फंक्शन रिजल्ट्स कैशिंग", "मेमोरी अलोकेशन", "डेटा स्टोरेज", "फंक्शन ऑप्टिमाइज़ेशन"],
    answer_en: "Caching function results",
    answer_hi: "फंक्शन रिजल्ट्स कैशिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method returns the length of a string?",
    question_hi: "कौन-सा मेथड स्ट्रिंग की लंबाई लौटाता है?",
    options_en: ["length", "size()", "count()", "getLength()"],
    options_hi: ["length", "size()", "count()", "getLength()"],
    answer_en: "length",
    answer_hi: "length",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the purpose of `delete` operator?",
    question_hi: "`delete` ऑपरेटर का उद्देश्य क्या है?",
    options_en: ["Deletes object properties", "Deletes variables", "Deletes functions", "Deletes arrays"],
    options_hi: ["ऑब्जेक्ट प्रॉपर्टीज़ डिलीट करता है", "वेरिएबल्स डिलीट करता है", "फंक्शन्स डिलीट करता है", "ऐरे डिलीट करता है"],
    answer_en: "Deletes object properties",
    answer_hi: "ऑब्जेक्ट प्रॉपर्टीज़ डिलीट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method extracts a section of string?",
    question_hi: "कौन-सा मेथड स्ट्रिंग का एक सेक्शन निकालता है?",
    options_en: ["slice()", "substring()", "substr()", "All of above"],
    options_hi: ["slice()", "substring()", "substr()", "उपरोक्त सभी"],
    answer_en: "All of above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is event bubbling?",
    question_hi: "इवेंट बबलिंग क्या है?",
    options_en: ["Event propagation from inner to outer elements", "Event creating bubbles", "Event capturing", "Event stopping"],
    options_hi: ["इनर से आउटर एलिमेंट्स की तरफ इवेंट प्रोपेगेशन", "इवेंट बबल्स बनाना", "इवेंट कैप्चरिंग", "इवेंट स्टॉपिंग"],
    answer_en: "Event propagation from inner to outer elements",
    answer_hi: "इनर से आउटर एलिमेंट्स की तरफ इवेंट प्रोपेगेशन",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method prevents event bubbling?",
    question_hi: "कौन-सा मेथड इवेंट बबलिंग रोकता है?",
    options_en: ["stopPropagation()", "stopImmediatePropagation()", "preventDefault()", "Both A and B"],
    options_hi: ["stopPropagation()", "stopImmediatePropagation()", "preventDefault()", "A और B दोनों"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the purpose of `documentFragment`?",
    question_hi: "`documentFragment` का उद्देश्य क्या है?",
    options_en: ["Lightweight document container", "Document piece", "HTML fragment", "DOM element"],
    options_hi: ["लाइटवेट डॉक्यूमेंट कंटेनर", "डॉक्यूमेंट पीस", "HTML फ्रैगमेंट", "DOM एलिमेंट"],
    answer_en: "Lightweight document container",
    answer_hi: "लाइटवेट डॉक्यूमेंट कंटेनर",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method creates a text node?",
    question_hi: "कौन-सा मेथड टेक्स्ट नोड बनाता है?",
    options_en: ["createTextNode()", "createElement()", "createNode()", "createText()"],
    options_hi: ["createTextNode()", "createElement()", "createNode()", "createText()"],
    answer_en: "createTextNode()",
    answer_hi: "createTextNode()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the purpose of `requestAnimationFrame`?",
    question_hi: "`requestAnimationFrame` का उद्देश्य क्या है?",
    options_en: ["Smooth animations", "Request frames", "Animate requests", "Frame animation"],
    options_hi: ["स्मूद एनिमेशन्स", "रिक्वेस्ट फ्रेम्स", "एनिमेट रिक्वेस्ट्स", "फ्रेम एनिमेशन"],
    answer_en: "Smooth animations",
    answer_hi: "स्मूद एनिमेशन्स",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method deep clones an object?",
    question_hi: "कौन-सा मेथड ऑब्जेक्ट की डीप क्लोन बनाता है?",
    options_en: ["JSON.parse(JSON.stringify())", "Object.assign()", "Spread operator", "Object.clone()"],
    options_hi: ["JSON.parse(JSON.stringify())", "Object.assign()", "स्प्रेड ऑपरेटर", "Object.clone()"],
    answer_en: "JSON.parse(JSON.stringify())",
    answer_hi: "JSON.parse(JSON.stringify())",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is a service worker?",
    question_hi: "सर्विस वर्कर क्या है?",
    options_en: ["Script that runs in background", "Server worker", "Web worker", "Background script"],
    options_hi: ["स्क्रिप्ट जो बैकग्राउंड में चलती है", "सर्वर वर्कर", "वेब वर्कर", "बैकग्राउंड स्क्रिप्ट"],
    answer_en: "Script that runs in background",
    answer_hi: "स्क्रिप्ट जो बैकग्राउंड में चलती है",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method registers a service worker?",
    question_hi: "कौन-सा मेथड सर्विस वर्कर रजिस्टर करता है?",
    options_en: ["navigator.serviceWorker.register()", "serviceWorker.register()", "worker.register()", "registerServiceWorker()"],
    options_hi: ["navigator.serviceWorker.register()", "serviceWorker.register()", "worker.register()", "registerServiceWorker()"],
    answer_en: "navigator.serviceWorker.register()",
    answer_hi: "navigator.serviceWorker.register()",
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
