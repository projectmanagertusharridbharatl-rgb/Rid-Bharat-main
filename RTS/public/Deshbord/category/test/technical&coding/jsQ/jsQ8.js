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
    question_en: "Which method creates a new array with sub-arrays flattened?",
    question_hi: "कौन-सा मेथड सब-ऐरे फ्लैटन करके नया ऐरे बनाता है?",
    options_en: ["flat()", "flatten()", "merge()", "concat()"],
    options_hi: ["flat()", "flatten()", "merge()", "concat()"],
    answer_en: "flat()",
    answer_hi: "flat()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `?.` operator do?",
    question_hi: "`?.` ऑपरेटर क्या करता है?",
    options_en: ["Optional chaining", "Nullish coalescing", "Ternary operator", "Safe navigation"],
    options_hi: ["ऑप्शनल चेनिंग", "नलिश कोलेसिंग", "टर्नरी ऑपरेटर", "सेफ नेविगेशन"],
    answer_en: "Optional chaining",
    answer_hi: "ऑप्शनल चेनिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method returns a promise that resolves after all promises are resolved?",
    question_hi: "कौन-सा मेथड प्रॉमिस रिटर्न करता है जो सभी प्रॉमिसेज रिजॉल्व होने के बाद रिजॉल्व होता है?",
    options_en: ["Promise.all()", "Promise.race()", "Promise.any()", "Promise.allSettled()"],
    options_hi: ["Promise.all()", "Promise.race()", "Promise.any()", "Promise.allSettled()"],
    answer_en: "Promise.all()",
    answer_hi: "Promise.all()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
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
    num: 6,
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
    num: 7,
    question_en: "What is the output of `console.log(1 + '1')`?",
    question_hi: "`console.log(1 + '1')` का आउटपुट क्या है?",
    options_en: ["'11'", "2", "NaN", "Error"],
    options_hi: ["'11'", "2", "NaN", "Error"],
    answer_en: "'11'",
    answer_hi: "'11'",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method creates a new array with unique values?",
    question_hi: "यूनिक वैल्यूज के साथ नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["[...new Set(array)]", "array.unique()", "array.distinct()", "Set.from(array)"],
    options_hi: ["[...new Set(array)]", "array.unique()", "array.distinct()", "Set.from(array)"],
    answer_en: "[...new Set(array)]",
    answer_hi: "[...new Set(array)]",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What does the `??` operator return?",
    question_hi: "`??` ऑपरेटर क्या रिटर्न करता है?",
    options_en: ["Right operand when left is null/undefined", "Left operand when truthy", "Boolean result", "Always right operand"],
    options_hi: ["राइट ऑपरेंड जब लेफ्ट null/undefined हो", "लेफ्ट ऑपरेंड जब ट्रुथी हो", "बूलियन रिजल्ट", "हमेशा राइट ऑपरेंड"],
    answer_en: "Right operand when left is null/undefined",
    answer_hi: "राइट ऑपरेंड जब लेफ्ट null/undefined हो",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method is used to delay function execution?",
    question_hi: "फंक्शन एक्जिक्यूशन डिले करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    options_hi: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    answer_en: "setTimeout()",
    answer_hi: "setTimeout()",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the output of `console.log([] + [])`?",
    question_hi: "`console.log([] + [])` का आउटपुट क्या है?",
    options_en: ["''", "[]", "[object Object]", "Error"],
    options_hi: ["''", "[]", "[object Object]", "Error"],
    answer_en: "''",
    answer_hi: "''",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method converts an object to query string?",
    question_hi: "ऑब्जेक्ट को क्वेरी स्ट्रिंग में कन्वर्ट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["URLSearchParams", "Object.toQuery()", "JSON.stringify()", "queryString()"],
    options_hi: ["URLSearchParams", "Object.toQuery()", "JSON.stringify()", "queryString()"],
    answer_en: "URLSearchParams",
    answer_hi: "URLSearchParams",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
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
    num: 14,
    question_en: "Which method creates a function with fixed this?",
    question_hi: "फिक्स्ड this के साथ फंक्शन बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["bind()", "call()", "apply()", "fix()"],
    options_hi: ["bind()", "call()", "apply()", "fix()"],
    answer_en: "bind()",
    answer_hi: "bind()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What does `Array.from()` do?",
    question_hi: "`Array.from()` क्या करता है?",
    options_en: ["Creates array from array-like objects", "Converts to array", "Copies array", "All of the above"],
    options_hi: ["ऐरे-लाइक ऑब्जेक्ट्स से ऐरे बनाता है", "ऐरे में कन्वर्ट करता है", "ऐरे कॉपी करता है", "उपरोक्त सभी"],
    answer_en: "Creates array from array-like objects",
    answer_hi: "ऐरे-लाइक ऑब्जेक्ट्स से ऐरे बनाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
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
    num: 17,
    question_en: "Which method checks if property exists in object prototype?",
    question_hi: "प्रॉपर्टी ऑब्जेक्ट प्रोटोटाइप में है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["hasOwnProperty()", "in operator", "Object.has()", "propertyExists()"],
    options_hi: ["hasOwnProperty()", "in operator", "Object.has()", "propertyExists()"],
    answer_en: "hasOwnProperty()",
    answer_hi: "hasOwnProperty()",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
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
    num: 19,
    question_en: "Which method is used to reverse an array?",
    question_hi: "ऐरे को रिवर्स करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["reverse()", "flip()", "invert()", "backwards()"],
    options_hi: ["reverse()", "flip()", "invert()", "backwards()"],
    answer_en: "reverse()",
    answer_hi: "reverse()",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "What does `Object.create()` do?",
    question_hi: "`Object.create()` क्या करता है?",
    options_en: ["Creates object with specified prototype", "Creates empty object", "Copies object", "Creates class instance"],
    options_hi: ["स्पेसिफाइड प्रोटोटाइप के साथ ऑब्जेक्ट बनाता है", "खाली ऑब्जेक्ट बनाता है", "ऑब्जेक्ट कॉपी करता है", "क्लास इंस्टेंस बनाता है"],
    answer_en: "Creates object with specified prototype",
    answer_hi: "स्पेसिफाइड प्रोटोटाइप के साथ ऑब्जेक्ट बनाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
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
    num: 22,
    question_en: "Which method returns array iterator with key/value pairs?",
    question_hi: "की/वैल्यू पेयर्स के साथ ऐरे इटरेटर रिटर्न करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["entries()", "keys()", "values()", "pairs()"],
    options_hi: ["entries()", "keys()", "values()", "pairs()"],
    answer_en: "entries()",
    answer_hi: "entries()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log([] === [])`?",
    question_hi: "`console.log([] === [])` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
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
    num: 25,
    question_en: "What does `Array.of()` create?",
    question_hi: "`Array.of()` क्या बनाता है?",
    options_en: ["Array with given arguments as elements", "Empty array", "Array from single argument", "Array of objects"],
    options_hi: ["दिए गए आर्ग्युमेंट्स को एलिमेंट्स के रूप में वाला ऐरे", "खाली ऐरे", "सिंगल आर्ग्युमेंट से ऐरे", "ऑब्जेक्ट्स का ऐरे"],
    answer_en: "Array with given arguments as elements",
    answer_hi: "दिए गए आर्ग्युमेंट्स को एलिमेंट्स के रूप में वाला ऐरे",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
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
    num: 27,
    question_en: "Which method checks if all elements pass test?",
    question_hi: "सभी एलिमेंट्स टेस्ट पास करते हैं या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["every()", "all()", "some()", "filter()"],
    options_hi: ["every()", "all()", "some()", "filter()"],
    answer_en: "every()",
    answer_hi: "every()",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What is the purpose of `Symbol`?",
    question_hi: "`Symbol` का उद्देश्य क्या है?",
    options_en: ["Create unique identifiers", "Create private properties", "Both A and B", "Create constants"],
    options_hi: ["यूनिक आइडेंटिफायर्स बनाना", "प्राइवेट प्रॉपर्टीज बनाना", "A और B दोनों", "कॉन्स्टेंट्स बनाना"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the output of `console.log(typeof [1,2,3])`?",
    question_hi: "`console.log(typeof [1,2,3])` का आउटपुट क्या है?",
    options_en: ["object", "array", "list", "undefined"],
    options_hi: ["object", "array", "list", "undefined"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method returns array of object property names?",
    question_hi: "ऑब्जेक्ट प्रॉपर्टी नेम्स का ऐरे रिटर्न करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.keys()", "Object.properties()", "Object.names()", "Object.getProperties()"],
    options_hi: ["Object.keys()", "Object.properties()", "Object.names()", "Object.getProperties()"],
    answer_en: "Object.keys()",
    answer_hi: "Object.keys()",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the output of `console.log(null == undefined)`?",
    question_hi: "`console.log(null == undefined)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method creates a new array with specified elements?",
    question_hi: "स्पेसिफाइड एलिमेंट्स के साथ नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Array.of()", "Array.from()", "new Array()", "Array.create()"],
    options_hi: ["Array.of()", "Array.from()", "new Array()", "Array.create()"],
    answer_en: "Array.of()",
    answer_hi: "Array.of()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What does `Object.preventExtensions()` do?",
    question_hi: "`Object.preventExtensions()` क्या करता है?",
    options_en: ["Prevents adding new properties", "Allows modifying existing", "Both A and B", "Makes object immutable"],
    options_hi: ["नई प्रॉपर्टीज जोड़ने से रोकता है", "एक्सिस्टिंग मॉडिफाई करने की अनुमति देता है", "A और B दोनों", "ऑब्जेक्ट इम्यूटेबल बनाता है"],
    answer_en: "Prevents adding new properties",
    answer_hi: "नई प्रॉपर्टीज जोड़ने से रोकता है",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "What is the output of `console.log(+'10')`?",
    question_hi: "`console.log(+'10')` का आउटपुट क्या है?",
    options_en: ["10", "'10'", "NaN", "Error"],
    options_hi: ["10", "'10'", "NaN", "Error"],
    answer_en: "10",
    answer_hi: "10",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which method checks if any element passes test?",
    question_hi: "कोई एलिमेंट टेस्ट पास करता है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["some()", "any()", "every()", "find()"],
    options_hi: ["some()", "any()", "every()", "find()"],
    answer_en: "some()",
    answer_hi: "some()",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
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
    num: 37,
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
    num: 38,
    question_en: "Which method returns the primitive value of an object?",
    question_hi: "ऑब्जेक्ट की प्रिमिटिव वैल्यू रिटर्न करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["valueOf()", "toString()", "toPrimitive()", "getValue()"],
    options_hi: ["valueOf()", "toString()", "toPrimitive()", "getValue()"],
    answer_en: "valueOf()",
    answer_hi: "valueOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(undefined === null)`?",
    question_hi: "`console.log(undefined === null)` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method creates a new array with reversed elements?",
    question_hi: "रिवर्स्ड एलिमेंट्स के साथ नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toReversed()", "reverse()", "flip()", "invert()"],
    options_hi: ["toReversed()", "reverse()", "flip()", "invert()"],
    answer_en: "toReversed()",
    answer_hi: "toReversed()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
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
    num: 42,
    question_en: "What is the output of `console.log('b' + 'a' + + 'a' + 'a')`?",
    question_hi: "`console.log('b' + 'a' + + 'a' + 'a')` का आउटपुट क्या है?",
    options_en: ["'baNaNa'", "'baaa'", "'baundefineda'", "Error"],
    options_hi: ["'baNaNa'", "'baaa'", "'baundefineda'", "Error"],
    answer_en: "'baNaNa'",
    answer_hi: "'baNaNa'",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
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
    num: 44,
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
    num: 45,
    question_en: "Which method checks if value is integer?",
    question_hi: "वैल्यू इंटीजर है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number.isInteger()", "isInteger()", "isInt()", "Integer.is()"],
    options_hi: ["Number.isInteger()", "isInteger()", "isInt()", "Integer.is()"],
    answer_en: "Number.isInteger()",
    answer_hi: "Number.isInteger()",
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
    question_en: "What is the output of `console.log(typeof Date())`?",
    question_hi: "`console.log(typeof Date())` का आउटपुट क्या है?",
    options_en: ["string", "object", "date", "function"],
    options_hi: ["string", "object", "date", "function"],
    answer_en: "string",
    answer_hi: "string",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method returns a portion of array?",
    question_hi: "ऐरे का पोर्शन रिटर्न करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["slice()", "splice()", "split()", "cut()"],
    options_hi: ["slice()", "splice()", "split()", "cut()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
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
    num: 50,
    question_en: "What is the output of `console.log(!!null)`?",
    question_hi: "`console.log(!!null)` का आउटपुट क्या है?",
    options_en: ["false", "true", "null", "undefined"],
    options_hi: ["false", "true", "null", "undefined"],
    answer_en: "false",
    answer_hi: "false",
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
