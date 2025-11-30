const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log(typeof (() => {}))`?",
    question_hi: "`console.log(typeof (() => {}))` का आउटपुट क्या है?",
    options_en: ["function", "object", "arrow", "undefined"],
    options_hi: ["function", "object", "arrow", "undefined"],
    answer_en: "function",
    answer_hi: "function",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method is used to check if a promise is fulfilled?",
    question_hi: "प्रॉमिस फुलफिल्ड है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Promise.prototype.then()", "Promise.prototype.finally()", "Promise.prototype.catch()", "No direct method"],
    options_hi: ["Promise.prototype.then()", "Promise.prototype.finally()", "Promise.prototype.catch()", "कोई डायरेक्ट मेथड नहीं"],
    answer_en: "No direct method",
    answer_hi: "कोई डायरेक्ट मेथड नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does `Object.getOwnPropertyDescriptor()` return?",
    question_hi: "`Object.getOwnPropertyDescriptor()` क्या रिटर्न करता है?",
    options_en: ["Property descriptor object", "Property value", "Property name", "Boolean"],
    options_hi: ["प्रॉपर्टी डिस्क्रिप्टर ऑब्जेक्ट", "प्रॉपर्टी वैल्यू", "प्रॉपर्टी नाम", "बूलियन"],
    answer_en: "Property descriptor object",
    answer_hi: "प्रॉपर्टी डिस्क्रिप्टर ऑब्जेक्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What is the output of `console.log(1 < 2 < 3)`?",
    question_hi: "`console.log(1 < 2 < 3)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which method is used to prevent modifications to existing properties?",
    question_hi: "एक्सिस्टिंग प्रॉपर्टीज में मॉडिफिकेशन रोकने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "All of the above"],
    options_hi: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "उपरोक्त सभी"],
    answer_en: "Object.freeze()",
    answer_hi: "Object.freeze()",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the output of `console.log([...[1,2],...[3,4]])`?",
    question_hi: "`console.log([...[1,2],...[3,4]])` का आउटपुट क्या है?",
    options_en: ["[1,2,3,4]", "[[1,2],[3,4]]", "[1,2,[3,4]]", "Error"],
    options_hi: ["[1,2,3,4]", "[[1,2],[3,4]]", "[1,2,[3,4]]", "Error"],
    answer_en: "[1,2,3,4]",
    answer_hi: "[1,2,3,4]",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which method is used to get the constructor of an object?",
    question_hi: "ऑब्जेक्ट का कंस्ट्रक्टर प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["object.constructor", "Object.getConstructor()", "object.prototype.constructor", "Both A and C"],
    options_hi: ["object.constructor", "Object.getConstructor()", "object.prototype.constructor", "A और C दोनों"],
    answer_en: "Both A and C",
    answer_hi: "A और C दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the output of `console.log(0 === -0)`?",
    question_hi: "`console.log(0 === -0)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which method is used to check if a number is safe integer?",
    question_hi: "नंबर सेफ इंटीजर है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number.isSafeInteger()", "Number.isInteger()", "isSafeInteger()", "SafeInteger.is()"],
    options_hi: ["Number.isSafeInteger()", "Number.isInteger()", "isSafeInteger()", "SafeInteger.is()"],
    answer_en: "Number.isSafeInteger()",
    answer_hi: "Number.isSafeInteger()",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What does the `in` operator check for arrays?",
    question_hi: "`in` ऑपरेटर ऐरे के लिए क्या चेक करता है?",
    options_en: ["If index exists", "If value exists", "If property exists", "If element exists"],
    options_hi: ["क्या इंडेक्स है", "क्या वैल्यू है", "क्या प्रॉपर्टी है", "क्या एलिमेंट है"],
    answer_en: "If index exists",
    answer_hi: "क्या इंडेक्स है",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the output of `console.log(String.raw`Hello\nWorld`)`?",
    question_hi: "`console.log(String.raw`Hello\nWorld`)` का आउटपुट क्या है?",
    options_en: ["Hello\\nWorld", "Hello\nWorld", "Hello World", "Error"],
    options_hi: ["Hello\\nWorld", "Hello\nWorld", "Hello World", "Error"],
    answer_en: "Hello\\nWorld",
    answer_hi: "Hello\\nWorld",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method is used to compare two values using SameValueZero?",
    question_hi: "SameValueZero का उपयोग करके दो वैल्यूज को कंपेयर करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.is()", "===", "Array.prototype.includes()", "Both B and C"],
    options_hi: ["Object.is()", "===", "Array.prototype.includes()", "B और C दोनों"],
    answer_en: "Both B and C",
    answer_hi: "B और C दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the output of `console.log(new Array(3))`?",
    question_hi: "`console.log(new Array(3))` का आउटपुट क्या है?",
    options_en: ["[empty × 3]", "[undefined, undefined, undefined]", "[3]", "Error"],
    options_hi: ["[empty × 3]", "[undefined, undefined, undefined]", "[3]", "Error"],
    answer_en: "[empty × 3]",
    answer_hi: "[empty × 3]",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to get the own property names including symbols?",
    question_hi: "सिंबल्स सहित ओन प्रॉपर्टी नेम्स प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.getOwnPropertyNames()", "Object.getOwnPropertySymbols()", "Reflect.ownKeys()", "All of the above"],
    options_hi: ["Object.getOwnPropertyNames()", "Object.getOwnPropertySymbols()", "Reflect.ownKeys()", "उपरोक्त सभी"],
    answer_en: "Reflect.ownKeys()",
    answer_hi: "Reflect.ownKeys()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the output of `console.log(1 / 0)`?",
    question_hi: "`console.log(1 / 0)` का आउटपुट क्या है?",
    options_en: ["Infinity", "NaN", "Error", "undefined"],
    options_hi: ["Infinity", "NaN", "Error", "undefined"],
    answer_en: "Infinity",
    answer_hi: "Infinity",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to create a promise that resolves immediately?",
    question_hi: "इमीडिएटली रिजॉल्व होने वाला प्रॉमिस बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Promise.resolve()", "Promise.reject()", "new Promise()", "Promise.fulfill()"],
    options_hi: ["Promise.resolve()", "Promise.reject()", "new Promise()", "Promise.fulfill()"],
    answer_en: "Promise.resolve()",
    answer_hi: "Promise.resolve()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the output of `console.log(3 > 2 > 1)`?",
    question_hi: "`console.log(3 > 2 > 1)` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to check if an object is sealed?",
    question_hi: "ऑब्जेक्ट सील्ड है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.isSealed()", "Object.sealed()", "isSealed()", "Object.checkSealed()"],
    options_hi: ["Object.isSealed()", "Object.sealed()", "isSealed()", "Object.checkSealed()"],
    answer_en: "Object.isSealed()",
    answer_hi: "Object.isSealed()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the output of `console.log(Number(''))`?",
    question_hi: "`console.log(Number(''))` का आउटपुट क्या है?",
    options_en: ["0", "NaN", "undefined", "Error"],
    options_hi: ["0", "NaN", "undefined", "Error"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method is used to get the day of the week from Date?",
    question_hi: "Date से वीक का दिन प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["getDay()", "getDate()", "getWeekDay()", "getUTCDay()"],
    options_hi: ["getDay()", "getDate()", "getWeekDay()", "getUTCDay()"],
    answer_en: "getDay()",
    answer_hi: "getDay()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the output of `console.log([] instanceof Array)`?",
    question_hi: "`console.log([] instanceof Array)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to check if a value is primitive?",
    question_hi: "वैल्यू प्रिमिटिव है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.prototype.valueOf()", "typeof", "No direct method", "Object.isPrimitive()"],
    options_hi: ["Object.prototype.valueOf()", "typeof", "कोई डायरेक्ट मेथड नहीं", "Object.isPrimitive()"],
    answer_en: "No direct method",
    answer_hi: "कोई डायरेक्ट मेथड नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log(Math.min())`?",
    question_hi: "`console.log(Math.min())` का आउटपुट क्या है?",
    options_en: ["Infinity", "-Infinity", "NaN", "Error"],
    options_hi: ["Infinity", "-Infinity", "NaN", "Error"],
    answer_en: "Infinity",
    answer_hi: "Infinity",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to convert a number to exponential notation?",
    question_hi: "नंबर को एक्सपोनेंशियल नोटेशन में कन्वर्ट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toExponential()", "toPrecision()", "toFixed()", "toString()"],
    options_hi: ["toExponential()", "toPrecision()", "toFixed()", "toString()"],
    answer_en: "toExponential()",
    answer_hi: "toExponential()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the output of `console.log(undefined + 1)`?",
    question_hi: "`console.log(undefined + 1)` का आउटपुट क्या है?",
    options_en: ["NaN", "1", "undefined", "Error"],
    options_hi: ["NaN", "1", "undefined", "Error"],
    answer_en: "NaN",
    answer_hi: "NaN",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to check if a string matches a regular expression?",
    question_hi: "स्ट्रिंग रेगुलर एक्सप्रेशन से मैच करती है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["match()", "test()", "search()", "All of the above"],
    options_hi: ["match()", "test()", "search()", "उपरोक्त सभी"],
    answer_en: "match()",
    answer_hi: "match()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the output of `console.log([1,2,3].copyWithin(1, 2))`?",
    question_hi: "`console.log([1,2,3].copyWithin(1, 2))` का आउटपुट क्या है?",
    options_en: ["[1,3,3]", "[1,2,2]", "[3,2,1]", "Error"],
    options_hi: ["[1,3,3]", "[1,2,2]", "[3,2,1]", "Error"],
    answer_en: "[1,3,3]",
    answer_hi: "[1,3,3]",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to get the Unicode code point of a character?",
    question_hi: "करैक्टर का यूनिकोड कोड पॉइंट प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["codePointAt()", "charCodeAt()", "fromCodePoint()", "Both A and B"],
    options_hi: ["codePointAt()", "charCodeAt()", "fromCodePoint()", "A और B दोनों"],
    answer_en: "codePointAt()",
    answer_hi: "codePointAt()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the output of `console.log(Array.from('hello'))`?",
    question_hi: "`console.log(Array.from('hello'))` का आउटपुट क्या है?",
    options_en: ["['h','e','l','l','o']", "['hello']", "[104,101,108,108,111]", "Error"],
    options_hi: ["['h','e','l','l','o']", "['hello']", "[104,101,108,108,111]", "Error"],
    answer_en: "['h','e','l','l','o']",
    answer_hi: "['h','e','l','l','o']",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method is used to check if an object is frozen?",
    question_hi: "ऑब्जेक्ट फ्रोजन है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.isFrozen()", "Object.frozen()", "isFrozen()", "Object.checkFrozen()"],
    options_hi: ["Object.isFrozen()", "Object.frozen()", "isFrozen()", "Object.checkFrozen()"],
    answer_en: "Object.isFrozen()",
    answer_hi: "Object.isFrozen()",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the output of `console.log(+'')`?",
    question_hi: "`console.log(+'')` का आउटपुट क्या है?",
    options_en: ["0", "NaN", "undefined", "Error"],
    options_hi: ["0", "NaN", "undefined", "Error"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to create a new array with sorted elements?",
    question_hi: "सॉर्टेड एलिमेंट्स के साथ नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toSorted()", "sort()", "order()", "arrange()"],
    options_hi: ["toSorted()", "sort()", "order()", "arrange()"],
    answer_en: "toSorted()",
    answer_hi: "toSorted()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the output of `console.log(Object.is(0, -0))`?",
    question_hi: "`console.log(Object.is(0, -0))` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to get the minutes from Date?",
    question_hi: "Date से मिनट्स प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["getMinutes()", "getUTCMinutes()", "Both A and B", "getTimeMinutes()"],
    options_hi: ["getMinutes()", "getUTCMinutes()", "A और B दोनों", "getTimeMinutes()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the output of `console.log(2 in [1, 2, 3])`?",
    question_hi: "`console.log(2 in [1, 2, 3])` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to check if a string contains only whitespace?",
    question_hi: "स्ट्रिंग में केवल व्हाइटस्पेस है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["/^\s*$/.test()", "string.isWhitespace()", "string.trim().length === 0", "Both A and C"],
    options_hi: ["/^\s*$/.test()", "string.isWhitespace()", "string.trim().length === 0", "A और C दोनों"],
    answer_en: "Both A and C",
    answer_hi: "A और C दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the output of `console.log(parseInt('0xF'))`?",
    question_hi: "`console.log(parseInt('0xF'))` का आउटपुट क्या है?",
    options_en: ["15", "0", "NaN", "Error"],
    options_hi: ["15", "0", "NaN", "Error"],
    answer_en: "15",
    answer_hi: "15",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method is used to get the property descriptor of an object?",
    question_hi: "ऑब्जेक्ट का प्रॉपर्टी डिस्क्रिप्टर प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.getOwnPropertyDescriptor()", "Object.getPropertyDescriptor()", "Object.descriptor()", "Object.property()"],
    options_hi: ["Object.getOwnPropertyDescriptor()", "Object.getPropertyDescriptor()", "Object.descriptor()", "Object.property()"],
    answer_en: "Object.getOwnPropertyDescriptor()",
    answer_hi: "Object.getOwnPropertyDescriptor()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log([1,2].toString())`?",
    question_hi: "`console.log([1,2].toString())` का आउटपुट क्या है?",
    options_en: ["'1,2'", "'[1,2]'", "'12'", "Error"],
    options_hi: ["'1,2'", "'[1,2]'", "'12'", "Error"],
    answer_en: "'1,2'",
    answer_hi: "'1,2'",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to check if a value is finite number?",
    question_hi: "वैल्यू फाइनाइट नंबर है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["isFinite()", "Number.isFinite()", "Both A and B", "Number.isSafeInteger()"],
    options_hi: ["isFinite()", "Number.isFinite()", "A और B दोनों", "Number.isSafeInteger()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the output of `console.log(typeof class {})`?",
    question_hi: "`console.log(typeof class {})` का आउटपुट क्या है?",
    options_en: ["function", "class", "object", "undefined"],
    options_hi: ["function", "class", "object", "undefined"],
    answer_en: "function",
    answer_hi: "function",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to get the hours from Date?",
    question_hi: "Date से घंटे प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["getHours()", "getUTCHours()", "Both A and B", "getTimeHours()"],
    options_hi: ["getHours()", "getUTCHours()", "A और B दोनों", "getTimeHours()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the output of `console.log(Number(null))`?",
    question_hi: "`console.log(Number(null))` का आउटपुट क्या है?",
    options_en: ["0", "NaN", "null", "Error"],
    options_hi: ["0", "NaN", "null", "Error"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method is used to check if an array is empty?",
    question_hi: "ऐरे खाली है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["array.length === 0", "array.isEmpty()", "Array.isEmpty(array)", "All of the above"],
    options_hi: ["array.length === 0", "array.isEmpty()", "Array.isEmpty(array)", "उपरोक्त सभी"],
    answer_en: "array.length === 0",
    answer_hi: "array.length === 0",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the output of `console.log(Boolean(new Boolean(false)))`?",
    question_hi: "`console.log(Boolean(new Boolean(false)))` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to get the seconds from Date?",
    question_hi: "Date से सेकंड्स प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["getSeconds()", "getUTCSeconds()", "Both A and B", "getTimeSeconds()"],
    options_hi: ["getSeconds()", "getUTCSeconds()", "A और B दोनों", "getTimeSeconds()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the output of `console.log(1..toString())`?",
    question_hi: "`console.log(1..toString())` का आउटपुट क्या है?",
    options_en: ["'1'", "1", "Error", "undefined"],
    options_hi: ["'1'", "1", "Error", "undefined"],
    answer_en: "'1'",
    answer_hi: "'1'",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to check if a string is empty?",
    question_hi: "स्ट्रिंग खाली है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["string.length === 0", "string === ''", "string.isEmpty()", "Both A and B"],
    options_hi: ["string.length === 0", "string === ''", "string.isEmpty()", "A और B दोनों"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
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
    num: 50,
    question_en: "Which method is used to get the milliseconds from Date?",
    question_hi: "Date से मिलीसेकंड्स प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["getMilliseconds()", "getUTCMilliseconds()", "Both A and B", "getTime()"],
    options_hi: ["getMilliseconds()", "getUTCMilliseconds()", "A और B दोनों", "getTime()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
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
