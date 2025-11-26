const questions = [
  {
    num: 1,
    question_en: "What does `var` keyword do in JavaScript?",
    question_hi: "`var` कीवर्ड JavaScript में क्या करता है?",
    options_en: ["Declares a variable", "Creates a function", "Declares a constant", "Deletes a variable"],
    options_hi: ["एक वेरिएबल घोषित करता है", "एक फंक्शन बनाता है", "एक कॉन्स्टेंट घोषित करता है", "एक वेरिएबल हटाता है"],
    answer_en: "Declares a variable",
    answer_hi: "एक वेरिएबल घोषित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method converts an object to JSON?",
    question_hi: "कौन-सा मेथड ऑब्जेक्ट को JSON में बदलता है?",
    options_en: ["JSON.stringify()", "JSON.parse()", "Object.toJSON()", "Object.stringify()"],
    options_hi: ["JSON.stringify()", "JSON.parse()", "Object.toJSON()", "Object.stringify()"],
    answer_en: "JSON.stringify()",
    answer_hi: "JSON.stringify()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which operator is used for strict equality?",
    question_hi: "कड़ी समानता के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["===", "==", "!==", "="],
    options_hi: ["===", "==", "!==", "="],
    answer_en: "===",
    answer_hi: "===",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which keyword declares a constant variable?",
    question_hi: "कौन-सा कीवर्ड एक स्थायी वेरिएबल घोषित करता है?",
    options_en: ["const", "let", "var", "constant"],
    options_hi: ["const", "let", "var", "constant"],
    answer_en: "const",
    answer_hi: "const",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which function is used to parse a string to integer?",
    question_hi: "कौन-सा फंक्शन स्ट्रिंग को पूर्णांक में बदलता है?",
    options_en: ["parseInt()", "parseFloat()", "Number()", "String()"],
    options_hi: ["parseInt()", "parseFloat()", "Number()", "String()"],
    answer_en: "parseInt()",
    answer_hi: "parseInt()",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which method adds an element at the end of an array?",
    question_hi: "कौन-सा मेथड ऐरे के अंत में एलिमेंट जोड़ता है?",
    options_en: ["push()", "pop()", "shift()", "unshift()"],
    options_hi: ["push()", "pop()", "shift()", "unshift()"],
    answer_en: "push()",
    answer_hi: "push()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which method removes the last element of an array?",
    question_hi: "कौन-सा मेथड ऐरे का आखिरी एलिमेंट हटाता है?",
    options_en: ["pop()", "push()", "shift()", "unshift()"],
    options_hi: ["pop()", "push()", "shift()", "unshift()"],
    answer_en: "pop()",
    answer_hi: "pop()",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which keyword is used to create a class in JavaScript?",
    question_hi: "JavaScript में क्लास बनाने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    options_en: ["class", "function", "object", "new"],
    options_hi: ["class", "function", "object", "new"],
    answer_en: "class",
    answer_hi: "class",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which method executes a function for each array element?",
    question_hi: "कौन-सा मेथड ऐरे के प्रत्येक एलिमेंट पर फंक्शन चलाता है?",
    options_en: ["forEach()", "map()", "filter()", "reduce()"],
    options_hi: ["forEach()", "map()", "filter()", "reduce()"],
    answer_en: "forEach()",
    answer_hi: "forEach()",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which operator is used to concatenate strings?",
    question_hi: "स्ट्रिंग जोड़ने के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    options_en: ["+", "-", "*", "&"],
    options_hi: ["+", "-", "*", "&"],
    answer_en: "+",
    answer_hi: "+",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
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
    num: 12,
    question_en: "Which method creates a new array with transformed elements?",
    question_hi: "कौन-सा मेथड बदले गए एलिमेंट्स के साथ नया ऐरे बनाता है?",
    options_en: ["map()", "filter()", "reduce()", "forEach()"],
    options_hi: ["map()", "filter()", "reduce()", "forEach()"],
    answer_en: "map()",
    answer_hi: "map()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What does the `this` keyword refer to in a method?",
    question_hi: "मेथड में `this` कीवर्ड किसे संदर्भित करता है?",
    options_en: ["The object that called the method", "The global object", "The function itself", "The parent object"],
    options_hi: ["वह ऑब्जेक्ट जिसने मेथड को कॉल किया", "ग्लोबल ऑब्जेक्ट", "फंक्शन स्वयं", "पैरेंट ऑब्जेक्ट"],
    answer_en: "The object that called the method",
    answer_hi: "वह ऑब्जेक्ट जिसने मेथड को कॉल किया",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
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
    num: 15,
    question_en: "What is the purpose of `use strict`?",
    question_hi: "`use strict` का उद्देश्य क्या है?",
    options_en: ["Enables strict mode", "Disables strict mode", "Imports a module", "Defines a constant"],
    options_hi: ["स्ट्रिक्ट मोड सक्षम करता है", "स्ट्रिक्ट मोड अक्षम करता है", "मॉड्यूल इम्पोर्ट करता है", "कॉन्स्टेंट डिफाइन करता है"],
    answer_en: "Enables strict mode",
    answer_hi: "स्ट्रिक्ट मोड सक्षम करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method returns the length of a string?",
    question_hi: "कौन-सा मेथड स्ट्रिंग की लंबाई लौटाता है?",
    options_en: ["length", "size()", "count()", "length()"],
    options_hi: ["length", "size()", "count()", "length()"],
    answer_en: "length",
    answer_hi: "length",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What does `NaN` stand for?",
    question_hi: "`NaN` का पूरा नाम क्या है?",
    options_en: ["Not a Number", "Not a Null", "Number and Number", "No assigned Number"],
    options_hi: ["नॉट अ नंबर", "नॉट अ नल", "नंबर एंड नंबर", "नो असाइंड नंबर"],
    answer_en: "Not a Number",
    answer_hi: "नॉट अ नंबर",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method converts a string to uppercase?",
    question_hi: "कौन-सा मेथड स्ट्रिंग को अपरकेस में बदलता है?",
    options_en: ["toUpperCase()", "toUpper()", "upperCase()", "convertUpper()"],
    options_hi: ["toUpperCase()", "toUpper()", "upperCase()", "convertUpper()"],
    answer_en: "toUpperCase()",
    answer_hi: "toUpperCase()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the default return value of a function?",
    question_hi: "फंक्शन का डिफॉल्ट रिटर्न वैल्यू क्या है?",
    options_en: ["undefined", "null", "0", "No return value"],
    options_hi: ["undefined", "null", "0", "कोई रिटर्न वैल्यू नहीं"],
    answer_en: "undefined",
    answer_hi: "undefined",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which operator has the highest precedence?",
    question_hi: "किस ऑपरेटर की प्राथमिकता सबसे अधिक है?",
    options_en: ["()", "++", "*", "&&"],
    options_hi: ["()", "++", "*", "&&"],
    answer_en: "()",
    answer_hi: "()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is closure in JavaScript?",
    question_hi: "JavaScript में क्लोजर क्या है?",
    options_en: ["Function with access to outer scope", "A closed function", "An anonymous function", "A callback function"],
    options_hi: ["बाहरी स्कोप तक पहुंच वाला फंक्शन", "एक बंद फंक्शन", "एक अनाम फंक्शन", "एक कॉलबैक फंक्शन"],
    answer_en: "Function with access to outer scope",
    answer_hi: "बाहरी स्कोप तक पहुंच वाला फंक्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method creates a new array from array-like objects?",
    question_hi: "कौन-सा मेथड ऐरे-जैसी ऑब्जेक्ट्स से नया ऐरे बनाता है?",
    options_en: ["Array.from()", "Array.of()", "Array.create()", "Array.new()"],
    options_hi: ["Array.from()", "Array.of()", "Array.create()", "Array.new()"],
    answer_en: "Array.from()",
    answer_hi: "Array.from()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What does the `delete` operator do?",
    question_hi: "`delete` ऑपरेटर क्या करता है?",
    options_en: ["Removes a property from an object", "Deletes a variable", "Removes an array element", "Deletes a function"],
    options_hi: ["ऑब्जेक्ट से प्रॉपर्टी हटाता है", "वेरिएबल डिलीट करता है", "ऐरे एलिमेंट हटाता है", "फंक्शन डिलीट करता है"],
    answer_en: "Removes a property from an object",
    answer_hi: "ऑब्जेक्ट से प्रॉपर्टी हटाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
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
    num: 25,
    question_en: "What is hoisting in JavaScript?",
    question_hi: "JavaScript में होइस्टिंग क्या है?",
    options_en: ["Moving declarations to the top", "Lifting variables", "Raising functions", "Elevating objects"],
    options_hi: ["डिक्लेरेशन को ऊपर ले जाना", "वेरिएबल्स उठाना", "फंक्शन्स उठाना", "ऑब्जेक्ट्स उठाना"],
    answer_en: "Moving declarations to the top",
    answer_hi: "डिक्लेरेशन को ऊपर ले जाना",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which loop is best for iterating over object properties?",
    question_hi: "ऑब्जेक्ट प्रॉपर्टीज पर इटरेट करने के लिए कौन-सा लूप सबसे अच्छा है?",
    options_en: ["for...in", "for...of", "forEach", "while"],
    options_hi: ["for...in", "for...of", "forEach", "while"],
    answer_en: "for...in",
    answer_hi: "for...in",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What does `Array.isArray()` check?",
    question_hi: "`Array.isArray()` क्या चेक करता है?",
    options_en: ["If value is an array", "If array is empty", "If array has elements", "If value is array-like"],
    options_hi: ["क्या वैल्यू ऐरे है", "क्या ऐरे खाली है", "क्या ऐरे में एलिमेंट्स हैं", "क्या वैल्यू ऐरे-जैसी है"],
    answer_en: "If value is an array",
    answer_hi: "क्या वैल्यू ऐरे है",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method creates a new array with all sub-array elements?",
    question_hi: "कौन-सा मेथड सभी सब-ऐरे एलिमेंट्स के साथ नया ऐरे बनाता है?",
    options_en: ["flat()", "concat()", "merge()", "join()"],
    options_hi: ["flat()", "concat()", "merge()", "join()"],
    answer_en: "flat()",
    answer_hi: "flat()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `void` operator?",
    question_hi: "`void` ऑपरेटर का उद्देश्य क्या है?",
    options_en: ["Evaluate expression and return undefined", "Delete a variable", "Stop execution", "Skip expression"],
    options_hi: ["एक्सप्रेशन इवैल्यूएट करे और undefined लौटाए", "वेरिएबल डिलीट करे", "एक्जिक्यूशन रोके", "एक्सप्रेशन स्किप करे"],
    answer_en: "Evaluate expression and return undefined",
    answer_hi: "एक्सप्रेशन इवैल्यूएट करे और undefined लौटाए",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method returns a string representation of an array?",
    question_hi: "कौन-सा मेथड ऐरे का स्ट्रिंग रिप्रेजेंटेशन लौटाता है?",
    options_en: ["toString()", "String()", "join()", "valueOf()"],
    options_hi: ["toString()", "String()", "join()", "valueOf()"],
    answer_en: "toString()",
    answer_hi: "toString()",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What does the `in` operator check?",
    question_hi: "`in` ऑपरेटर क्या चेक करता है?",
    options_en: ["If property exists in object", "If value is in array", "If variable is defined", "If function exists"],
    options_hi: ["क्या प्रॉपर्टी ऑब्जेक्ट में है", "क्या वैल्यू ऐरे में है", "क्या वेरिएबल डिफाइंड है", "क्या फंक्शन है"],
    answer_en: "If property exists in object",
    answer_hi: "क्या प्रॉपर्टी ऑब्जेक्ट में है",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method finds the first element that satisfies a condition?",
    question_hi: "कौन-सा मेथड पहला एलिमेंट ढूंढता है जो कंडीशन को संतुष्ट करता है?",
    options_en: ["find()", "filter()", "search()", "locate()"],
    options_hi: ["find()", "filter()", "search()", "locate()"],
    answer_en: "find()",
    answer_hi: "find()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the difference between `==` and `===`?",
    question_hi: "`==` और `===` में क्या अंतर है?",
    options_en: ["`===` checks type and value", "`==` is faster", "`===` is for strings only", "No difference"],
    options_hi: ["`===` टाइप और वैल्यू चेक करता है", "`==` तेज है", "`===` सिर्फ स्ट्रिंग्स के लिए है", "कोई अंतर नहीं"],
    answer_en: "`===` checks type and value",
    answer_hi: "`===` टाइप और वैल्यू चेक करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
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
    num: 35,
    question_en: "What does `Object.keys()` return?",
    question_hi: "`Object.keys()` क्या लौटाता है?",
    options_en: ["Array of property names", "Array of property values", "Object properties", "Number of properties"],
    options_hi: ["प्रॉपर्टी नामों का ऐरे", "प्रॉपर्टी वैल्यूज का ऐरे", "ऑब्जेक्ट प्रॉपर्टीज", "प्रॉपर्टीज की संख्या"],
    answer_en: "Array of property names",
    answer_hi: "प्रॉपर्टी नामों का ऐरे",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method prevents modifications to an object?",
    question_hi: "कौन-सा मेथड ऑब्जेक्ट में मॉडिफिकेशन रोकता है?",
    options_en: ["Object.freeze()", "Object.seal()", "Object.prevent()", "Object.lock()"],
    options_hi: ["Object.freeze()", "Object.seal()", "Object.prevent()", "Object.lock()"],
    answer_en: "Object.freeze()",
    answer_hi: "Object.freeze()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is a generator function?",
    question_hi: "जनरेटर फंक्शन क्या है?",
    options_en: ["Function that can be paused", "Function that generates numbers", "Fast function", "Async function"],
    options_hi: ["फंक्शन जो पॉज किया जा सकता है", "फंक्शन जो नंबर्स जनरेट करता है", "तेज फंक्शन", "एसिंक फंक्शन"],
    answer_en: "Function that can be paused",
    answer_hi: "फंक्शन जो पॉज किया जा सकता है",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which symbol is used for unique property keys?",
    question_hi: "यूनिक प्रॉपर्टी की के लिए कौन-सा सिंबल उपयोग होता है?",
    options_en: ["Symbol", "Unique", "Key", "ID"],
    options_hi: ["Symbol", "Unique", "Key", "ID"],
    answer_en: "Symbol",
    answer_hi: "Symbol",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What does `Array.prototype` represent?",
    question_hi: "`Array.prototype` क्या रिप्रेजेंट करता है?",
    options_en: ["Prototype for all arrays", "First array element", "Array constructor", "Array methods"],
    options_hi: ["सभी ऐरे का प्रोटोटाइप", "पहला ऐरे एलिमेंट", "ऐरे कंस्ट्रक्टर", "ऐरे मेथड्स"],
    answer_en: "Prototype for all arrays",
    answer_hi: "सभी ऐरे का प्रोटोटाइप",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method creates a new object with specified prototype?",
    question_hi: "कौन-सा मेथड निर्दिष्ट प्रोटोटाइप के साथ नया ऑब्जेक्ट बनाता है?",
    options_en: ["Object.create()", "Object.new()", "Object.prototype()", "Object.construct()"],
    options_hi: ["Object.create()", "Object.new()", "Object.prototype()", "Object.construct()"],
    answer_en: "Object.create()",
    answer_hi: "Object.create()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is destructuring assignment?",
    question_hi: "डिस्ट्रक्चरिंग असाइनमेंट क्या है?",
    options_en: ["Extract values from arrays/objects", "Destroy variables", "Break objects", "Delete properties"],
    options_hi: ["ऐरे/ऑब्जेक्ट से वैल्यू निकालना", "वेरिएबल्स डिस्ट्रॉय करना", "ऑब्जेक्ट्स तोड़ना", "प्रॉपर्टीज डिलीट करना"],
    answer_en: "Extract values from arrays/objects",
    answer_hi: "ऐरे/ऑब्जेक्ट से वैल्यू निकालना",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method returns a portion of an array?",
    question_hi: "कौन-सा मेथड ऐरे का एक हिस्सा लौटाता है?",
    options_en: ["slice()", "splice()", "split()", "cut()"],
    options_hi: ["slice()", "splice()", "split()", "cut()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What does the `yield` keyword do?",
    question_hi: "`yield` कीवर्ड क्या करता है?",
    options_en: ["Pauses generator function", "Returns value", "Stops function", "Yields control"],
    options_hi: ["जनरेटर फंक्शन पॉज करता है", "वैल्यू लौटाता है", "फंक्शन रोकता है", "कंट्रोल यील्ड करता है"],
    answer_en: "Pauses generator function",
    answer_hi: "जनरेटर फंक्शन पॉज करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method checks if an object has a property?",
    question_hi: "कौन-सा मेथड चेक करता है कि ऑब्जेक्ट में प्रॉपर्टी है?",
    options_en: ["hasOwnProperty()", "hasProperty()", "contains()", "includes()"],
    options_hi: ["hasOwnProperty()", "hasProperty()", "contains()", "includes()"],
    answer_en: "hasOwnProperty()",
    answer_hi: "hasOwnProperty()",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the purpose of `arguments` object?",
    question_hi: "`arguments` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Access function arguments", "Create arguments", "Store variables", "Pass parameters"],
    options_hi: ["फंक्शन आर्गुमेंट्स तक पहुंच", "आर्गुमेंट्स बनाए", "वेरिएबल्स स्टोर करे", "पैरामीटर पास करे"],
    answer_en: "Access function arguments",
    answer_hi: "फंक्शन आर्गुमेंट्स तक पहुंच",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method creates a function with specific `this`?",
    question_hi: "कौन-सा मेथड विशिष्ट `this` के साथ फंक्शन बनाता है?",
    options_en: ["bind()", "call()", "apply()", "attach()"],
    options_hi: ["bind()", "call()", "apply()", "attach()"],
    answer_en: "bind()",
    answer_hi: "bind()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What does `Object.assign()` do?",
    question_hi: "`Object.assign()` क्या करता है?",
    options_en: ["Copies properties to target object", "Assigns values", "Creates new object", "Merges arrays"],
    options_hi: ["प्रॉपर्टीज को टारगेट ऑब्जेक्ट में कॉपी करता है", "वैल्यूज असाइन करता है", "नया ऑब्जेक्ट बनाता है", "ऐरे मर्ज करता है"],
    answer_en: "Copies properties to target object",
    answer_hi: "प्रॉपर्टीज को टारगेट ऑब्जेक्ट में कॉपी करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which operator checks instance of class?",
    question_hi: "कौन-सा ऑपरेटर क्लास का इंस्टेंस चेक करता है?",
    options_en: ["instanceof", "typeof", "in", "is"],
    options_hi: ["instanceof", "typeof", "in", "is"],
    answer_en: "instanceof",
    answer_hi: "instanceof",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is a pure function?",
    question_hi: "प्योर फंक्शन क्या है?",
    options_en: ["No side effects, same input same output", "Fast function", "Simple function", "Async function"],
    options_hi: ["कोई साइड इफेक्ट नहीं, समान इनपुट समान आउटपुट", "तेज फंक्शन", "सरल फंक्शन", "एसिंक फंक्शन"],
    answer_en: "No side effects, same input same output",
    answer_hi: "कोई साइड इफेक्ट नहीं, समान इनपुट समान आउटपुट",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method removes whitespace from string ends?",
    question_hi: "कौन-सा मेथड स्ट्रिंग के सिरों से व्हाइटस्पेस हटाता है?",
    options_en: ["trim()", "strip()", "clean()", "removeSpace()"],
    options_hi: ["trim()", "strip()", "clean()", "removeSpace()"],
    answer_en: "trim()",
    answer_hi: "trim()",
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