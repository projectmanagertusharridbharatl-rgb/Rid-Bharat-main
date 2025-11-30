const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log(!!'0')`?",
    question_hi: "`console.log(!!'0')` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
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
    num: 3,
    question_en: "What does `Array.prototype.findLast()` do?",
    question_hi: "`Array.prototype.findLast()` क्या करता है?",
    options_en: ["Finds last element that satisfies condition", "Reverses and finds first", "Finds last index", "Finds last occurrence"],
    options_hi: ["आखिरी एलिमेंट ढूंढता है जो कंडीशन को संतुष्ट करता है", "रिवर्स करके पहला ढूंढता है", "आखिरी इंडेक्स ढूंढता है", "आखिरी ऑकरेंस ढूंढता है"],
    answer_en: "Finds last element that satisfies condition",
    answer_hi: "आखिरी एलिमेंट ढूंढता है जो कंडीशन को संतुष्ट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What is the output of `console.log(typeof new String('hello'))`?",
    question_hi: "`console.log(typeof new String('hello'))` का आउटपुट क्या है?",
    options_en: ["object", "string", "String", "function"],
    options_hi: ["object", "string", "String", "function"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which method is used to pad a string from the start?",
    question_hi: "स्ट्रिंग को स्टार्ट से पैड करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["padStart()", "padEnd()", "padLeft()", "padRight()"],
    options_hi: ["padStart()", "padEnd()", "padLeft()", "padRight()"],
    answer_en: "padStart()",
    answer_hi: "padStart()",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the output of `console.log(1 == true)`?",
    question_hi: "`console.log(1 == true)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which method is used to create an array from arguments object?",
    question_hi: "आर्ग्युमेंट्स ऑब्जेक्ट से ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Array.from()", "Array.of()", "[...arguments]", "All of the above"],
    options_hi: ["Array.from()", "Array.of()", "[...arguments]", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What does `Object.hasOwn()` do?",
    question_hi: "`Object.hasOwn()` क्या करता है?",
    options_en: ["Checks if object has own property", "Checks prototype chain", "Checks if property exists", "All of the above"],
    options_hi: ["चेक करता है कि ऑब्जेक्ट की अपनी प्रॉपर्टी है", "प्रोटोटाइप चेन चेक करता है", "चेक करता है कि प्रॉपर्टी है", "उपरोक्त सभी"],
    answer_en: "Checks if object has own property",
    answer_hi: "चेक करता है कि ऑब्जेक्ट की अपनी प्रॉपर्टी है",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the output of `console.log(!!NaN)`?",
    question_hi: "`console.log(!!NaN)` का आउटपुट क्या है?",
    options_en: ["false", "true", "NaN", "Error"],
    options_hi: ["false", "true", "NaN", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method is used to check if a value is array buffer?",
    question_hi: "वैल्यू ऐरे बफर है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["ArrayBuffer.isView()", "value instanceof ArrayBuffer", "Both A and B", "Array.isArrayBuffer()"],
    options_hi: ["ArrayBuffer.isView()", "value instanceof ArrayBuffer", "A और B दोनों", "Array.isArrayBuffer()"],
    answer_en: "value instanceof ArrayBuffer",
    answer_hi: "value instanceof ArrayBuffer",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the output of `console.log(2 + true)`?",
    question_hi: "`console.log(2 + true)` का आउटपुट क्या है?",
    options_en: ["3", "2true", "NaN", "Error"],
    options_hi: ["3", "2true", "NaN", "Error"],
    answer_en: "3",
    answer_hi: "3",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method is used to get the property names including non-enumerable?",
    question_hi: "नॉन-एन्युमरेबल सहित प्रॉपर्टी नेम्स प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.getOwnPropertyNames()", "Object.keys()", "Reflect.ownKeys()", "Both A and C"],
    options_hi: ["Object.getOwnPropertyNames()", "Object.keys()", "Reflect.ownKeys()", "A और C दोनों"],
    answer_en: "Object.getOwnPropertyNames()",
    answer_hi: "Object.getOwnPropertyNames()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the output of `console.log(Number(undefined))`?",
    question_hi: "`console.log(Number(undefined))` का आउटपुट क्या है?",
    options_en: ["NaN", "0", "undefined", "Error"],
    options_hi: ["NaN", "0", "undefined", "Error"],
    answer_en: "NaN",
    answer_hi: "NaN",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to create a shared array buffer?",
    question_hi: "शेयर्ड ऐरे बफर बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["new SharedArrayBuffer()", "SharedArrayBuffer.create()", "ArrayBuffer.shared()", "new ArrayBuffer()"],
    options_hi: ["new SharedArrayBuffer()", "SharedArrayBuffer.create()", "ArrayBuffer.shared()", "new ArrayBuffer()"],
    answer_en: "new SharedArrayBuffer()",
    answer_hi: "new SharedArrayBuffer()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the output of `console.log([] + {})`?",
    question_hi: "`console.log([] + {})` का आउटपुट क्या है?",
    options_en: ["'[object Object]'", "{}", "[]", "Error"],
    options_hi: ["'[object Object]'", "{}", "[]", "Error"],
    answer_en: "'[object Object]'",
    answer_hi: "'[object Object]'",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to check if a number is within safe range?",
    question_hi: "नंबर सेफ रेंज में है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number.isSafeInteger()", "Number.isFinite()", "isSafe()", "Number.inRange()"],
    options_hi: ["Number.isSafeInteger()", "Number.isFinite()", "isSafe()", "Number.inRange()"],
    answer_en: "Number.isSafeInteger()",
    answer_hi: "Number.isSafeInteger()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the output of `console.log({} + [])`?",
    question_hi: "`console.log({} + [])` का आउटपुट क्या है?",
    options_en: ["0", "'[object Object]'", "NaN", "Error"],
    options_hi: ["0", "'[object Object]'", "NaN", "Error"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to get the year from Date?",
    question_hi: "Date से साल प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["getFullYear()", "getYear()", "getUTCFullYear()", "Both A and C"],
    options_hi: ["getFullYear()", "getYear()", "getUTCFullYear()", "A और C दोनों"],
    answer_en: "Both A and C",
    answer_hi: "A और C दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the output of `console.log(0 || 1)`?",
    question_hi: "`console.log(0 || 1)` का आउटपुट क्या है?",
    options_en: ["1", "0", "true", "false"],
    options_hi: ["1", "0", "true", "false"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method is used to check if a value is typed array?",
    question_hi: "वैल्यू टाइप्ड ऐरे है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["ArrayBuffer.isView()", "value instanceof TypedArray", "Both A and B", "TypedArray.is()"],
    options_hi: ["ArrayBuffer.isView()", "value instanceof TypedArray", "A और B दोनों", "TypedArray.is()"],
    answer_en: "ArrayBuffer.isView()",
    answer_hi: "ArrayBuffer.isView()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the output of `console.log(1 && 2)`?",
    question_hi: "`console.log(1 && 2)` का आउटपुट क्या है?",
    options_en: ["2", "1", "true", "false"],
    options_hi: ["2", "1", "true", "false"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to get the month from Date?",
    question_hi: "Date से महीना प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["getMonth()", "getUTCMonth()", "Both A and B", "getDateMonth()"],
    options_hi: ["getMonth()", "getUTCMonth()", "A और B दोनों", "getDateMonth()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log(null || 'default')`?",
    question_hi: "`console.log(null || 'default')` का आउटपुट क्या है?",
    options_en: ["'default'", "null", "undefined", "Error"],
    options_hi: ["'default'", "null", "undefined", "Error"],
    answer_en: "'default'",
    answer_hi: "'default'",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to check if a value is async function?",
    question_hi: "वैल्यू एसिंक फंक्शन है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["value.constructor.name === 'AsyncFunction'", "typeof value === 'async function'", "value instanceof AsyncFunction", "No direct method"],
    options_hi: ["value.constructor.name === 'AsyncFunction'", "typeof value === 'async function'", "value instanceof AsyncFunction", "कोई डायरेक्ट मेथड नहीं"],
    answer_en: "value.constructor.name === 'AsyncFunction'",
    answer_hi: "value.constructor.name === 'AsyncFunction'",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the output of `console.log(undefined && 'test')`?",
    question_hi: "`console.log(undefined && 'test')` का आउटपुट क्या है?",
    options_en: ["undefined", "'test'", "true", "false"],
    options_hi: ["undefined", "'test'", "true", "false"],
    answer_en: "undefined",
    answer_hi: "undefined",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to get the timezone offset?",
    question_hi: "टाइमजोन ऑफसेट प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["getTimezoneOffset()", "getUTCOffset()", "getOffset()", "Date.timezoneOffset()"],
    options_hi: ["getTimezoneOffset()", "getUTCOffset()", "getOffset()", "Date.timezoneOffset()"],
    answer_en: "getTimezoneOffset()",
    answer_hi: "getTimezoneOffset()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the output of `console.log('5' * 2)`?",
    question_hi: "`console.log('5' * 2)` का आउटपुट क्या है?",
    options_en: ["10", "'10'", "52", "NaN"],
    options_hi: ["10", "'10'", "52", "NaN"],
    answer_en: "10",
    answer_hi: "10",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to check if a value is generator function?",
    question_hi: "वैल्यू जेनरेटर फंक्शन है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["value.constructor.name === 'GeneratorFunction'", "typeof value === 'generator'", "value instanceof GeneratorFunction", "No direct method"],
    options_hi: ["value.constructor.name === 'GeneratorFunction'", "typeof value === 'generator'", "value instanceof GeneratorFunction", "कोई डायरेक्ट मेथड नहीं"],
    answer_en: "value.constructor.name === 'GeneratorFunction'",
    answer_hi: "value.constructor.name === 'GeneratorFunction'",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the output of `console.log([] == 0)`?",
    question_hi: "`console.log([] == 0)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method is used to check if a value is map?",
    question_hi: "वैल्यू मैप है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["value instanceof Map", "Map.isMap()", "isMap(value)", "typeof value === 'map'"],
    options_hi: ["value instanceof Map", "Map.isMap()", "isMap(value)", "typeof value === 'map'"],
    answer_en: "value instanceof Map",
    answer_hi: "value instanceof Map",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the output of `console.log({} == 0)`?",
    question_hi: "`console.log({} == 0)` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to check if a value is set?",
    question_hi: "वैल्यू सेट है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["value instanceof Set", "Set.isSet()", "isSet(value)", "typeof value === 'set'"],
    options_hi: ["value instanceof Set", "Set.isSet()", "isSet(value)", "typeof value === 'set'"],
    answer_en: "value instanceof Set",
    answer_hi: "value instanceof Set",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the output of `console.log(!!undefined)`?",
    question_hi: "`console.log(!!undefined)` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to check if a value is weakmap?",
    question_hi: "वैल्यू वीकमैप है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["value instanceof WeakMap", "WeakMap.isWeakMap()", "isWeakMap(value)", "typeof value === 'weakmap'"],
    options_hi: ["value instanceof WeakMap", "WeakMap.isWeakMap()", "isWeakMap(value)", "typeof value === 'weakmap'"],
    answer_en: "value instanceof WeakMap",
    answer_hi: "value instanceof WeakMap",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the output of `console.log(!!Infinity)`?",
    question_hi: "`console.log(!!Infinity)` का आउटपुट क्या है?",
    options_en: ["true", "false", "Infinity", "Error"],
    options_hi: ["true", "false", "Infinity", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to check if a value is weakset?",
    question_hi: "वैल्यू वीकसेट है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["value instanceof WeakSet", "WeakSet.isWeakSet()", "isWeakSet(value)", "typeof value === 'weakset'"],
    options_hi: ["value instanceof WeakSet", "WeakSet.isWeakSet()", "isWeakSet(value)", "typeof value === 'weakset'"],
    answer_en: "value instanceof WeakSet",
    answer_hi: "value instanceof WeakSet",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the output of `console.log(+false)`?",
    question_hi: "`console.log(+false)` का आउटपुट क्या है?",
    options_en: ["0", "1", "NaN", "Error"],
    options_hi: ["0", "1", "NaN", "Error"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method is used to check if a value is promise?",
    question_hi: "वैल्यू प्रॉमिस है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["value instanceof Promise", "Promise.isPromise()", "isPromise(value)", "typeof value === 'promise'"],
    options_hi: ["value instanceof Promise", "Promise.isPromise()", "isPromise(value)", "typeof value === 'promise'"],
    answer_en: "value instanceof Promise",
    answer_hi: "value instanceof Promise",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(-true)`?",
    question_hi: "`console.log(-true)` का आउटपुट क्या है?",
    options_en: ["-1", "1", "NaN", "Error"],
    options_hi: ["-1", "1", "NaN", "Error"],
    answer_en: "-1",
    answer_hi: "-1",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to check if a value is regexp?",
    question_hi: "वैल्यू रेजेक्सप है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["value instanceof RegExp", "RegExp.isRegExp()", "isRegExp(value)", "typeof value === 'regexp'"],
    options_hi: ["value instanceof RegExp", "RegExp.isRegExp()", "isRegExp(value)", "typeof value === 'regexp'"],
    answer_en: "value instanceof RegExp",
    answer_hi: "value instanceof RegExp",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the output of `console.log(~0)`?",
    question_hi: "`console.log(~0)` का आउटपुट क्या है?",
    options_en: ["-1", "0", "1", "Error"],
    options_hi: ["-1", "0", "1", "Error"],
    answer_en: "-1",
    answer_hi: "-1",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to check if a value is error?",
    question_hi: "वैल्यू एरर है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["value instanceof Error", "Error.isError()", "isError(value)", "typeof value === 'error'"],
    options_hi: ["value instanceof Error", "Error.isError()", "isError(value)", "typeof value === 'error'"],
    answer_en: "value instanceof Error",
    answer_hi: "value instanceof Error",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the output of `console.log(~~3.14)`?",
    question_hi: "`console.log(~~3.14)` का आउटपुट क्या है?",
    options_en: ["3", "3.14", "4", "Error"],
    options_hi: ["3", "3.14", "4", "Error"],
    answer_en: "3",
    answer_hi: "3",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method is used to check if a value is date?",
    question_hi: "वैल्यू डेट है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["value instanceof Date", "Date.isDate()", "isDate(value)", "typeof value === 'date'"],
    options_hi: ["value instanceof Date", "Date.isDate()", "isDate(value)", "typeof value === 'date'"],
    answer_en: "value instanceof Date",
    answer_hi: "value instanceof Date",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the output of `console.log(0 == '')`?",
    question_hi: "`console.log(0 == '')` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to check if a value is function?",
    question_hi: "वैल्यू फंक्शन है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["typeof value === 'function'", "value instanceof Function", "Both A and B", "Function.isFunction()"],
    options_hi: ["typeof value === 'function'", "value instanceof Function", "A और B दोनों", "Function.isFunction()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the output of `console.log(null == 0)`?",
    question_hi: "`console.log(null == 0)` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to check if a value is object?",
    question_hi: "वैल्यू ऑब्जेक्ट है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["typeof value === 'object'", "value instanceof Object", "Both A and B", "Object.isObject()"],
    options_hi: ["typeof value === 'object'", "value instanceof Object", "A और B दोनों", "Object.isObject()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the output of `console.log(undefined == 0)`?",
    question_hi: "`console.log(undefined == 0)` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to check if a value is null?",
    question_hi: "वैल्यू null है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["value === null", "typeof value === 'null'", "isNull(value)", "Object.isNull()"],
    options_hi: ["value === null", "typeof value === 'null'", "isNull(value)", "Object.isNull()"],
    answer_en: "value === null",
    answer_hi: "value === null",
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
