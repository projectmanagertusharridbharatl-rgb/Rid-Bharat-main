const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log(1 < 2 < 3)`?",
    question_hi: "`console.log(1 < 2 < 3)` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method is used to add elements to the beginning of an array?",
    question_hi: "ऐरे की शुरुआत में एलिमेंट्स ऐड करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["unshift()", "push()", "shift()", "prepend()"],
    options_hi: ["unshift()", "push()", "shift()", "prepend()"],
    answer_en: "unshift()",
    answer_hi: "unshift()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the output of `console.log([] == ![])`?",
    question_hi: "`console.log([] == ![])` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method creates a new array with the results of calling a function on every element?",
    question_hi: "हर एलिमेंट पर फंक्शन को कॉल करके नई ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["map()", "forEach()", "filter()", "reduce()"],
    options_hi: ["map()", "forEach()", "filter()", "reduce()"],
    answer_en: "map()",
    answer_hi: "map()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the output of `console.log(typeof (() => {}))`?",
    question_hi: "`console.log(typeof (() => {}))` का आउटपुट क्या है?",
    options_en: ["'function'", "'object'", "'arrow'", "'undefined'"],
    options_hi: ["'function'", "'object'", "'arrow'", "'undefined'"],
    answer_en: "'function'",
    answer_hi: "'function'",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which operator returns the remainder of a division?",
    question_hi: "कौन-सा ऑपरेटर डिवीजन का रिमेंडर रिटर्न करता है?",
    options_en: ["%", "/", "//", "mod"],
    options_hi: ["%", "/", "//", "mod"],
    answer_en: "%",
    answer_hi: "%",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the output of `console.log('b' + 'a' + + 'a' + 'a')`?",
    question_hi: "`console.log('b' + 'a' + + 'a' + 'a')` का आउटपुट क्या है?",
    options_en: ["'baNaNa'", "'baaa'", "'baana'", "Error"],
    options_hi: ["'baNaNa'", "'baaa'", "'baana'", "Error"],
    answer_en: "'baNaNa'",
    answer_hi: "'baNaNa'",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method is used to convert an array to a string?",
    question_hi: "ऐरे को स्ट्रिंग में कन्वर्ट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["join()", "toString()", "Both A and B", "stringify()"],
    options_hi: ["join()", "toString()", "A और B दोनों", "stringify()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the output of `console.log(3 > 2 > 1)`?",
    question_hi: "`console.log(3 > 2 > 1)` का आउटपुट क्या है?",
    options_en: ["false", "true", "Error", "undefined"],
    options_hi: ["false", "true", "Error", "undefined"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which keyword is used to create a class in JavaScript?",
    question_hi: "जावास्क्रिप्ट में क्लास बनाने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    options_en: ["class", "function", "object", "create"],
    options_hi: ["class", "function", "object", "create"],
    answer_en: "class",
    answer_hi: "class",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the output of `console.log([10, 20, 30].reduce((a, b) => a + b))`?",
    question_hi: "`console.log([10, 20, 30].reduce((a, b) => a + b))` का आउटपुट क्या है?",
    options_en: ["60", "102030", "[10,20,30]", "Error"],
    options_hi: ["60", "102030", "[10,20,30]", "Error"],
    answer_en: "60",
    answer_hi: "60",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method is used to get a substring from a string?",
    question_hi: "स्ट्रिंग से सबस्ट्रिंग प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["substring()", "substr()", "slice()", "All of the above"],
    options_hi: ["substring()", "substr()", "slice()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the output of `console.log(0 === -0)`?",
    question_hi: "`console.log(0 === -0)` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to check if a string ends with a specific value?",
    question_hi: "स्ट्रिंग स्पेसिफिक वैल्यू से एंड होती है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["endsWith()", "endWith()", "checkEnd()", "lastIndexOf()"],
    options_hi: ["endsWith()", "endWith()", "checkEnd()", "lastIndexOf()"],
    answer_en: "endsWith()",
    answer_hi: "endsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the output of `console.log(typeof Symbol())`?",
    question_hi: "`console.log(typeof Symbol())` का आउटपुट क्या है?",
    options_en: ["'symbol'", "'object'", "'function'", "'undefined'"],
    options_hi: ["'symbol'", "'object'", "'function'", "'undefined'"],
    answer_en: "'symbol'",
    answer_hi: "'symbol'",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to create a new array with selected elements?",
    question_hi: "सिलेक्टेड एलिमेंट्स के साथ नई ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["slice()", "splice()", "cut()", "extract()"],
    options_hi: ["slice()", "splice()", "cut()", "extract()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the output of `console.log(NaN === NaN)`?",
    question_hi: "`console.log(NaN === NaN)` का आउटपुट क्या है?",
    options_en: ["false", "true", "Error", "undefined"],
    options_hi: ["false", "true", "Error", "undefined"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to find the index of an element in an array?",
    question_hi: "ऐरे में एलिमेंट का इंडेक्स ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["indexOf()", "findIndex()", "Both A and B", "search()"],
    options_hi: ["indexOf()", "findIndex()", "A और B दोनों", "search()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
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
    num: 20,
    question_en: "Which keyword is used to implement inheritance in classes?",
    question_hi: "क्लासेस में इनहेरिटेंस इम्प्लीमेंट करने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    options_en: ["extends", "implements", "inherits", "super"],
    options_hi: ["extends", "implements", "inherits", "super"],
    answer_en: "extends",
    answer_hi: "extends",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the output of `console.log(typeof BigInt(123))`?",
    question_hi: "`console.log(typeof BigInt(123))` का आउटपुट क्या है?",
    options_en: ["'bigint'", "'number'", "'object'", "'string'"],
    options_hi: ["'bigint'", "'number'", "'object'", "'string'"],
    answer_en: "'bigint'",
    answer_hi: "'bigint'",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to remove elements from an array and add new ones?",
    question_hi: "ऐरे से एलिमेंट्स रिमूव करने और नए ऐड करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["splice()", "slice()", "replace()", "modify()"],
    options_hi: ["splice()", "slice()", "replace()", "modify()"],
    answer_en: "splice()",
    answer_hi: "splice()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log(!!{})`?",
    question_hi: "`console.log(!!{})` का आउटपुट क्या है?",
    options_en: ["true", "false", "{}", "Error"],
    options_hi: ["true", "false", "{}", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to check if a value is an array?",
    question_hi: "वैल्यू ऐरे है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Array.isArray()", "typeof value === 'array'", "value instanceof Array", "Both A and C"],
    options_hi: ["Array.isArray()", "typeof value === 'array'", "value instanceof Array", "A और C दोनों"],
    answer_en: "Both A and C",
    answer_hi: "A और C दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the output of `console.log('5' + 2)`?",
    question_hi: "`console.log('5' + 2)` का आउटपुट क्या है?",
    options_en: ["'52'", "7", "'7'", "Error"],
    options_hi: ["'52'", "7", "'7'", "Error"],
    answer_en: "'52'",
    answer_hi: "'52'",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to get the keys of an object?",
    question_hi: "ऑब्जेक्ट की keys प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.keys()", "Object.getKeys()", "keys()", "Object.properties()"],
    options_hi: ["Object.keys()", "Object.getKeys()", "keys()", "Object.properties()"],
    answer_en: "Object.keys()",
    answer_hi: "Object.keys()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the output of `console.log(1 == '1')`?",
    question_hi: "`console.log(1 == '1')` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to prevent extensions to an object?",
    question_hi: "ऑब्जेक्ट में एक्सटेंशन रोकने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.preventExtensions()", "Object.seal()", "Object.freeze()", "All of the above"],
    options_hi: ["Object.preventExtensions()", "Object.seal()", "Object.freeze()", "उपरोक्त सभी"],
    answer_en: "Object.preventExtensions()",
    answer_hi: "Object.preventExtensions()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the output of `console.log(typeof new Number(5))`?",
    question_hi: "`console.log(typeof new Number(5))` का आउटपुट क्या है?",
    options_en: ["'object'", "'number'", "'Number'", "'function'"],
    options_hi: ["'object'", "'number'", "'Number'", "'function'"],
    answer_en: "'object'",
    answer_hi: "'object'",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method is used to get the prototype of an object?",
    question_hi: "ऑब्जेक्ट का प्रोटोटाइप प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.getPrototypeOf()", "obj.__proto__", "Both A and B", "Object.prototype()"],
    options_hi: ["Object.getPrototypeOf()", "obj.__proto__", "A और B दोनों", "Object.prototype()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the output of `console.log([1, 2, 3].join('-'))`?",
    question_hi: "`console.log([1, 2, 3].join('-'))` का आउटपुट क्या है?",
    options_en: ["'1-2-3'", "[1-2-3]", "'123'", "Error"],
    options_hi: ["'1-2-3'", "[1-2-3]", "'123'", "Error"],
    answer_en: "'1-2-3'",
    answer_hi: "'1-2-3'",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to check if an object is sealed?",
    question_hi: "ऑब्जेक्ट सील है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.isSealed()", "Object.sealed()", "isSealed()", "Object.checkSealed()"],
    options_hi: ["Object.isSealed()", "Object.sealed()", "isSealed()", "Object.checkSealed()"],
    answer_en: "Object.isSealed()",
    answer_hi: "Object.isSealed()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the output of `console.log(!!new Boolean(false))`?",
    question_hi: "`console.log(!!new Boolean(false))` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to create a new object with the specified prototype?",
    question_hi: "स्पेसिफाइड प्रोटोटाइप के साथ नया ऑब्जेक्ट बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.create()", "new Object()", "Object.prototype()", "createObject()"],
    options_hi: ["Object.create()", "new Object()", "Object.prototype()", "createObject()"],
    answer_en: "Object.create()",
    answer_hi: "Object.create()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the output of `console.log(2 in [1, 2, 3])`?",
    question_hi: "`console.log(2 in [1, 2, 3])` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
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
    num: 37,
    question_en: "What is the output of `console.log([].length)`?",
    question_hi: "`console.log([].length)` का आउटपुट क्या है?",
    options_en: ["0", "undefined", "Error", "null"],
    options_hi: ["0", "undefined", "Error", "null"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method is used to get the values of an object?",
    question_hi: "ऑब्जेक्ट की values प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.values()", "Object.getValues()", "values()", "Object.properties()"],
    options_hi: ["Object.values()", "Object.getValues()", "values()", "Object.properties()"],
    answer_en: "Object.values()",
    answer_hi: "Object.values()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(typeof Math)`?",
    question_hi: "`console.log(typeof Math)` का आउटपुट क्या है?",
    options_en: ["'object'", "'math'", "'function'", "'undefined'"],
    options_hi: ["'object'", "'math'", "'function'", "'undefined'"],
    answer_en: "'object'",
    answer_hi: "'object'",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to get the entries of an object as key-value pairs?",
    question_hi: "ऑब्जेक्ट की entries को key-value पेयर्स के रूप में प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.entries()", "Object.getEntries()", "entries()", "Object.pairs()"],
    options_hi: ["Object.entries()", "Object.getEntries()", "entries()", "Object.pairs()"],
    answer_en: "Object.entries()",
    answer_hi: "Object.entries()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the output of `console.log(+'')`?",
    question_hi: "`console.log(+'')` का आउटपुट क्या है?",
    options_en: ["0", "NaN", "''", "Error"],
    options_hi: ["0", "NaN", "''", "Error"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to check if a property exists in an object?",
    question_hi: "ऑब्जेक्ट में प्रॉपर्टी है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["'prop' in obj", "obj.hasOwnProperty('prop')", "Both A and B", "Object.has(obj, 'prop')"],
    options_hi: ["'prop' in obj", "obj.hasOwnProperty('prop')", "A और B दोनों", "Object.has(obj, 'prop')"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the output of `console.log(!!' ')`?",
    question_hi: "`console.log(!!' ')` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method is used to copy values from one object to another?",
    question_hi: "एक ऑब्जेक्ट से दूसरे ऑब्जेक्ट में वैल्यूज कॉपी करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.assign()", "Object.copy()", "Object.merge()", "Object.clone()"],
    options_hi: ["Object.assign()", "Object.copy()", "Object.merge()", "Object.clone()"],
    answer_en: "Object.assign()",
    answer_hi: "Object.assign()",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the output of `console.log(1 === 1)`?",
    question_hi: "`console.log(1 === 1)` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to create a deep copy of an object?",
    question_hi: "ऑब्जेक्ट की डीप कॉपी बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["JSON.parse(JSON.stringify(obj))", "Object.assign()", "Object.clone()", "All of the above"],
    options_hi: ["JSON.parse(JSON.stringify(obj))", "Object.assign()", "Object.clone()", "उपरोक्त सभी"],
    answer_en: "JSON.parse(JSON.stringify(obj))",
    answer_hi: "JSON.parse(JSON.stringify(obj))",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the output of `console.log(typeof undefined)`?",
    question_hi: "`console.log(typeof undefined)` का आउटपुट क्या है?",
    options_en: ["'undefined'", "'null'", "'object'", "'NaN'"],
    options_hi: ["'undefined'", "'null'", "'object'", "'NaN'"],
    answer_en: "'undefined'",
    answer_hi: "'undefined'",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to check if a number is integer?",
    question_hi: "नंबर इंटीजर है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number.isInteger()", "isInteger()", "Number.isInt()", "Math.isInteger()"],
    options_hi: ["Number.isInteger()", "isInteger()", "Number.isInt()", "Math.isInteger()"],
    answer_en: "Number.isInteger()",
    answer_hi: "Number.isInteger()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the output of `console.log([1, 2] == '1,2')`?",
    question_hi: "`console.log([1, 2] == '1,2')` का आउटपुट क्या है?",
    options_en: ["true", "false", "Error", "undefined"],
    options_hi: ["true", "false", "Error", "undefined"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to check if a number is finite?",
    question_hi: "नंबर फाइनाइट है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number.isFinite()", "isFinite()", "Both A and B", "Math.isFinite()"],
    options_hi: ["Number.isFinite()", "isFinite()", "A और B दोनों", "Math.isFinite()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
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