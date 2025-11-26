const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log(typeof NaN)`?",
    question_hi: "`console.log(typeof NaN)` का आउटपुट क्या है?",
    options_en: ["number", "NaN", "undefined", "string"],
    options_hi: ["number", "NaN", "undefined", "string"],
    answer_en: "number",
    answer_hi: "number",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method is used to check if a variable is an array?",
    question_hi: "वेरिएबल ऐरे है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Array.isArray()", "isArray()", "typeof", "instanceof"],
    options_hi: ["Array.isArray()", "isArray()", "typeof", "instanceof"],
    answer_en: "Array.isArray()",
    answer_hi: "Array.isArray()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `void` operator do in JavaScript?",
    question_hi: "`void` ऑपरेटर JavaScript में क्या करता है?",
    options_en: ["Returns undefined", "Deletes variable", "Empties value", "Stops execution"],
    options_hi: ["undefined लौटाता है", "वेरिएबल डिलीट करता है", "वैल्यू खाली करता है", "एक्जीक्यूशन रोकता है"],
    answer_en: "Returns undefined",
    answer_hi: "undefined लौटाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method is used to prevent modifications to an object?",
    question_hi: "ऑब्जेक्ट में मॉडिफिकेशन रोकने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "All of the above"],
    options_hi: ["Object.freeze()", "Object.seal()", "Object.preventExtensions()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `Symbol` in JavaScript?",
    question_hi: "JavaScript में `Symbol` का उद्देश्य क्या है?",
    options_en: ["Create unique identifiers", "Create private properties", "Both A and B", "None of the above"],
    options_hi: ["यूनिक आइडेंटिफायर्स बनाना", "प्राइवेट प्रॉपर्टीज बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which method is used to create a new object with specified prototype?",
    question_hi: "स्पेसिफाइड प्रोटोटाइप के साथ नया ऑब्जेक्ट बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.create()", "Object.new()", "Object.prototype()", "new Object()"],
    options_hi: ["Object.create()", "Object.new()", "Object.prototype()", "new Object()"],
    answer_en: "Object.create()",
    answer_hi: "Object.create()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the output of `console.log(1 < 2 < 3)`?",
    question_hi: "`console.log(1 < 2 < 3)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method is used to get the prototype of an object?",
    question_hi: "ऑब्जेक्ट का प्रोटोटाइप पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.getPrototypeOf()", "obj.prototype", "obj.__proto__", "All of the above"],
    options_hi: ["Object.getPrototypeOf()", "obj.prototype", "obj.__proto__", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the purpose of `WeakMap` in JavaScript?",
    question_hi: "JavaScript में `WeakMap` का उद्देश्य क्या है?",
    options_en: ["Store key-value pairs with weak references", "Store weak values", "Create weak objects", "All of the above"],
    options_hi: ["वीक रेफरेंस के साथ की-वैल्यू पेयर्स स्टोर करना", "वीक वैल्यूज स्टोर करना", "वीक ऑब्जेक्ट्स बनाना", "उपरोक्त सभी"],
    answer_en: "Store key-value pairs with weak references",
    answer_hi: "वीक रेफरेंस के साथ की-वैल्यू पेयर्स स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method is used to check if an object has a property?",
    question_hi: "ऑब्जेक्ट में प्रॉपर्टी है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["hasOwnProperty()", "in operator", "Both A and B", "None of the above"],
    options_hi: ["hasOwnProperty()", "in ऑपरेटर", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the output of `console.log(3 > 2 > 1)`?",
    question_hi: "`console.log(3 > 2 > 1)` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "एरर"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method is used to create a new array from array-like objects?",
    question_hi: "ऐरे-लाइक ऑब्जेक्ट्स से नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Array.from()", "Array.of()", "Array.create()", "new Array()"],
    options_hi: ["Array.from()", "Array.of()", "Array.create()", "new Array()"],
    answer_en: "Array.from()",
    answer_hi: "Array.from()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the purpose of `Proxy` in JavaScript?",
    question_hi: "JavaScript में `Proxy` का उद्देश्य क्या है?",
    options_en: ["Create wrapper for objects", "Intercept object operations", "Both A and B", "None of the above"],
    options_hi: ["ऑब्जेक्ट्स के लिए रैपर बनाना", "ऑब्जेक्ट ऑपरेशन्स इंटरसेप्ट करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to get the constructor of an object?",
    question_hi: "ऑब्जेक्ट का कंस्ट्रक्टर पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["obj.constructor", "Object.getConstructor()", "obj.getConstructor()", "All of the above"],
    options_hi: ["obj.constructor", "Object.getConstructor()", "obj.getConstructor()", "उपरोक्त सभी"],
    answer_en: "obj.constructor",
    answer_hi: "obj.constructor",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the output of `console.log([] + {})`?",
    question_hi: "`console.log([] + {})` का आउटपुट क्या है?",
    options_en: ["[object Object]", "{}", "[]", "Error"],
    options_hi: ["[object Object]", "{}", "[]", "एरर"],
    answer_en: "[object Object]",
    answer_hi: "[object Object]",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to check if a number is safe integer?",
    question_hi: "नंबर सेफ इंटीजर है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number.isSafeInteger()", "isSafeInteger()", "Number.isInteger()", "isInteger()"],
    options_hi: ["Number.isSafeInteger()", "isSafeInteger()", "Number.isInteger()", "isInteger()"],
    answer_en: "Number.isSafeInteger()",
    answer_hi: "Number.isSafeInteger()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `Reflect` in JavaScript?",
    question_hi: "JavaScript में `Reflect` का उद्देश्य क्या है?",
    options_en: ["Provide methods for interceptable operations", "Reflect objects", "Create mirrors", "All of the above"],
    options_hi: ["इंटरसेप्टेबल ऑपरेशन्स के लिए मेथड्स प्रोवाइड करना", "ऑब्जेक्ट्स रिफ्लेक्ट करना", "मिरर बनाना", "उपरोक्त सभी"],
    answer_en: "Provide methods for interceptable operations",
    answer_hi: "इंटरसेप्टेबल ऑपरेशन्स के लिए मेथड्स प्रोवाइड करना",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to get property descriptor of an object?",
    question_hi: "ऑब्जेक्ट की प्रॉपर्टी डिस्क्रिप्टर पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.getOwnPropertyDescriptor()", "obj.getDescriptor()", "Object.descriptor()", "All of the above"],
    options_hi: ["Object.getOwnPropertyDescriptor()", "obj.getDescriptor()", "Object.descriptor()", "उपरोक्त सभी"],
    answer_en: "Object.getOwnPropertyDescriptor()",
    answer_hi: "Object.getOwnPropertyDescriptor()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the output of `console.log(+'Hello')`?",
    question_hi: "`console.log(+'Hello')` का आउटपुट क्या है?",
    options_en: ["NaN", "0", "Error", "undefined"],
    options_hi: ["NaN", "0", "एरर", "undefined"],
    answer_en: "NaN",
    answer_hi: "NaN",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method is used to define new properties on an object?",
    question_hi: "ऑब्जेक्ट पर नई प्रॉपर्टीज डिफाइन करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.defineProperty()", "Object.defineProperties()", "Both A and B", "None of the above"],
    options_hi: ["Object.defineProperty()", "Object.defineProperties()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the purpose of `Generator` functions in JavaScript?",
    question_hi: "JavaScript में `Generator` फंक्शन्स का उद्देश्य क्या है?",
    options_en: ["Create iterators that can be paused", "Generate values on demand", "Both A and B", "None of the above"],
    options_hi: ["ऐसे इटरेटर्स बनाना जो पॉज़ किए जा सकें", "डिमांड पर वैल्यूज जनरेट करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which keyword is used in generator functions to pause execution?",
    question_hi: "जनरेटर फंक्शन्स में एक्जीक्यूशन पॉज़ करने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    options_en: ["yield", "pause", "stop", "break"],
    options_hi: ["yield", "pause", "stop", "break"],
    answer_en: "yield",
    answer_hi: "yield",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log(typeof (() => {}))`?",
    question_hi: "`console.log(typeof (() => {}))` का आउटपुट क्या है?",
    options_en: ["function", "object", "undefined", "arrow"],
    options_hi: ["function", "object", "undefined", "arrow"],
    answer_en: "function",
    answer_hi: "function",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to check if an object is extensible?",
    question_hi: "ऑब्जेक्ट एक्सटेंसिबल है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.isExtensible()", "obj.isExtensible", "Object.extensible()", "All of the above"],
    options_hi: ["Object.isExtensible()", "obj.isExtensible", "Object.extensible()", "उपरोक्त सभी"],
    answer_en: "Object.isExtensible()",
    answer_hi: "Object.isExtensible()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the purpose of `async/await` in JavaScript?",
    question_hi: "JavaScript में `async/await` का उद्देश्य क्या है?",
    options_en: ["Write asynchronous code synchronously", "Handle promises easily", "Both A and B", "None of the above"],
    options_hi: ["एसिंक्रोनस कोड सिंक्रोनसली लिखना", "प्रॉमिसेस आसानी से हैंडल करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to create a promise that resolves immediately?",
    question_hi: "तुरंत रिजॉल्व होने वाला प्रॉमिस बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Promise.resolve()", "Promise.fulfill()", "new Promise()", "All of the above"],
    options_hi: ["Promise.resolve()", "Promise.fulfill()", "new Promise()", "उपरोक्त सभी"],
    answer_en: "Promise.resolve()",
    answer_hi: "Promise.resolve()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the output of `console.log(Promise.resolve(1))`?",
    question_hi: "`console.log(Promise.resolve(1))` का आउटपुट क्या है?",
    options_en: ["Promise {<fulfilled>: 1}", "1", "undefined", "Error"],
    options_hi: ["Promise {<fulfilled>: 1}", "1", "undefined", "एरर"],
    answer_en: "Promise {<fulfilled>: 1}",
    answer_hi: "Promise {<fulfilled>: 1}",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to handle multiple promises?",
    question_hi: "मल्टीपल प्रॉमिसेस हैंडल करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Promise.all()", "Promise.race()", "Promise.any()", "All of the above"],
    options_hi: ["Promise.all()", "Promise.race()", "Promise.any()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `BigInt` in JavaScript?",
    question_hi: "JavaScript में `BigInt` का उद्देश्य क्या है?",
    options_en: ["Represent large integers", "Handle precise calculations", "Both A and B", "None of the above"],
    options_hi: ["बड़े इंटीजर्स रिप्रेजेंट करना", "प्रीसाइज कैलकुलेशन्स हैंडल करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method is used to create a BigInt?",
    question_hi: "BigInt बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["BigInt()", "123n", "Both A and B", "None of the above"],
    options_hi: ["BigInt()", "123n", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the output of `console.log(1n + 2n)`?",
    question_hi: "`console.log(1n + 2n)` का आउटपुट क्या है?",
    options_en: ["3n", "3", "Error", "NaN"],
    options_hi: ["3n", "3", "एरर", "NaN"],
    answer_en: "3n",
    answer_hi: "3n",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to check if a value is a BigInt?",
    question_hi: "वैल्यू BigInt है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["typeof value === 'bigint'", "BigInt.isBigInt()", "value instanceof BigInt", "All of the above"],
    options_hi: ["typeof value === 'bigint'", "BigInt.isBigInt()", "value instanceof BigInt", "उपरोक्त सभी"],
    answer_en: "typeof value === 'bigint'",
    answer_hi: "typeof value === 'bigint'",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of `Optional Chaining` operator?",
    question_hi: "`Optional Chaining` ऑपरेटर का उद्देश्य क्या है?",
    options_en: ["Safely access nested properties", "Prevent null/undefined errors", "Both A and B", "None of the above"],
    options_hi: ["नेस्टेड प्रॉपर्टीज तक सुरक्षित पहुंच", "null/undefined एरर्स रोकना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which operator is used for optional chaining?",
    question_hi: "ऑप्शनल चेनिंग के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    options_en: ["?.", "??", "?:", "&&"],
    options_hi: ["?.", "??", "?:", "&&"],
    answer_en: "?.",
    answer_hi: "?.",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the output of `console.log(null?.property)`?",
    question_hi: "`console.log(null?.property)` का आउटपुट क्या है?",
    options_en: ["undefined", "null", "Error", "NaN"],
    options_hi: ["undefined", "null", "एरर", "NaN"],
    answer_en: "undefined",
    answer_hi: "undefined",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to get the own property names of an object?",
    question_hi: "ऑब्जेक्ट के ओन प्रॉपर्टी नेम्स पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.getOwnPropertyNames()", "Object.keys()", "Both A and B", "None of the above"],
    options_hi: ["Object.getOwnPropertyNames()", "Object.keys()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `Object.preventExtensions()`?",
    question_hi: "`Object.preventExtensions()` का उद्देश्य क्या है?",
    options_en: ["Prevent adding new properties", "Allow modifying existing properties", "Both A and B", "None of the above"],
    options_hi: ["नई प्रॉपर्टीज जोड़ने से रोकना", "एक्सिस्टिंग प्रॉपर्टीज मॉडिफाई करने देना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method is used to check if an object is sealed?",
    question_hi: "ऑब्जेक्ट सील्ड है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.isSealed()", "obj.isSealed", "Object.sealed()", "All of the above"],
    options_hi: ["Object.isSealed()", "obj.isSealed", "Object.sealed()", "उपरोक्त सभी"],
    answer_en: "Object.isSealed()",
    answer_hi: "Object.isSealed()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(Number.MAX_SAFE_INTEGER)`?",
    question_hi: "`console.log(Number.MAX_SAFE_INTEGER)` का आउटपुट क्या है?",
    options_en: ["9007199254740991", "Infinity", "Number.MAX_VALUE", "Error"],
    options_hi: ["9007199254740991", "Infinity", "Number.MAX_VALUE", "एरर"],
    answer_en: "9007199254740991",
    answer_hi: "9007199254740991",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to check if a number is NaN?",
    question_hi: "नंबर NaN है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number.isNaN()", "isNaN()", "Both A and B", "None of the above"],
    options_hi: ["Number.isNaN()", "isNaN()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the purpose of `globalThis` in JavaScript?",
    question_hi: "JavaScript में `globalThis` का उद्देश्य क्या है?",
    options_en: ["Access global object consistently", "Reference window/global object", "Both A and B", "None of the above"],
    options_hi: ["ग्लोबल ऑब्जेक्ट तक कंसिस्टेंटली पहुंच", "window/global ऑब्जेक्ट रेफरेंस करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to get the own property symbols of an object?",
    question_hi: "ऑब्जेक्ट के ओन प्रॉपर्टी सिंबल्स पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.getOwnPropertySymbols()", "Object.symbols()", "obj.getSymbols()", "All of the above"],
    options_hi: ["Object.getOwnPropertySymbols()", "Object.symbols()", "obj.getSymbols()", "उपरोक्त सभी"],
    answer_en: "Object.getOwnPropertySymbols()",
    answer_hi: "Object.getOwnPropertySymbols()",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the output of `console.log(String.raw`Hello\nWorld`)`?",
    question_hi: "`console.log(String.raw`Hello\nWorld`)` का आउटपुट क्या है?",
    options_en: ["Hello\\nWorld", "Hello\nWorld", "Hello World", "Error"],
    options_hi: ["Hello\\nWorld", "Hello\nWorld", "Hello World", "एरर"],
    answer_en: "Hello\\nWorld",
    answer_hi: "Hello\\nWorld",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method is used to create a tagged template literal?",
    question_hi: "टैग्ड टेम्पलेट लिटरल बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Define a function", "Use backticks with function", "Both A and B", "None of the above"],
    options_hi: ["फंक्शन डिफाइन करना", "फंक्शन के साथ बैकटिक्स उपयोग करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the purpose of `Array.prototype.at()`?",
    question_hi: "`Array.prototype.at()` का उद्देश्य क्या है?",
    options_en: ["Access elements using positive/negative indices", "Only positive indices", "Only negative indices", "None of the above"],
    options_hi: ["पॉजिटिव/नेगेटिव इंडिसेस का उपयोग करके एलिमेंट्स तक पहुंच", "केवल पॉजिटिव इंडिसेस", "केवल नेगेटिव इंडिसेस", "उपरोक्त में से कोई नहीं"],
    answer_en: "Access elements using positive/negative indices",
    answer_hi: "पॉजिटिव/नेगेटिव इंडिसेस का उपयोग करके एलिमेंट्स तक पहुंच",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to replace all occurrences in a string?",
    question_hi: "स्ट्रिंग में सभी occurrences रिप्लेस करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["replaceAll()", "replace() with global flag", "Both A and B", "None of the above"],
    options_hi: ["replaceAll()", "replace() ग्लोबल फ्लैग के साथ", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the output of `console.log(Object.is(0, -0))`?",
    question_hi: "`console.log(Object.is(0, -0))` का आउटपुट क्या है?",
    options_en: ["false", "true", "0", "Error"],
    options_hi: ["false", "true", "0", "एरर"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used for deep comparison of values?",
    question_hi: "वैल्यूज की डीप कम्पेरिजन के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.is()", "=== operator", "Both A and B", "None of the above"],
    options_hi: ["Object.is()", "=== ऑपरेटर", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `Error` constructor in JavaScript?",
    question_hi: "JavaScript में `Error` कंस्ट्रक्टर का उद्देश्य क्या है?",
    options_en: ["Create error objects", "Custom error messages", "Both A and B", "None of the above"],
    options_hi: ["एरर ऑब्जेक्ट्स बनाना", "कस्टम एरर मैसेजेस", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to get the stack trace of an error?",
    question_hi: "एरर का स्टैक ट्रेस पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["error.stack", "Error.stack()", "console.trace()", "All of the above"],
    options_hi: ["error.stack", "Error.stack()", "console.trace()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  }
];



let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}



function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}



////////////////////////////////////////////////////////////////////////////////////////////

// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

      function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            // check correct answer
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }

        } else {
            notAttempted++;
        }

        // push result
        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // store in localStorage
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // ask for result page
    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}



function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////