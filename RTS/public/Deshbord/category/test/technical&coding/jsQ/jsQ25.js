const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log([] == ![])`?",
    question_hi: "`console.log([] == ![])` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method is used to check if a value is a safe integer?",
    question_hi: "वैल्यू सेफ इंटीजर है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Number.isSafeInteger()", "isSafeInteger()", "safeInteger()", "checkSafeInteger()"],
    options_hi: ["Number.isSafeInteger()", "isSafeInteger()", "safeInteger()", "checkSafeInteger()"],
    answer_en: "Number.isSafeInteger()",
    answer_hi: "Number.isSafeInteger()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does `console.log([, , ,].length)` output?",
    question_hi: "`console.log([, , ,].length)` क्या आउटपुट देता है?",
    options_en: ["3", "0", "undefined", "Error"],
    options_hi: ["3", "0", "undefined", "एरर"],
    answer_en: "3",
    answer_hi: "3",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method is used to get the exponential value of e?",
    question_hi: "e का एक्सपोनेंशियल वैल्यू पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.exp()", "Math.e", "Math.E", "Both A and C"],
    options_hi: ["Math.exp()", "Math.e", "Math.E", "A और C दोनों"],
    answer_en: "Both A and C",
    answer_hi: "A और C दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `Object.fromEntries()`?",
    question_hi: "`Object.fromEntries()` का उद्देश्य क्या है?",
    options_en: ["Convert key-value pairs to object", "Create object from entries", "Both A and B", "None of the above"],
    options_hi: ["की-वैल्यू पेयर्स को ऑब्जेक्ट में बदलना", "एंट्रीज से ऑब्जेक्ट बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the output of `console.log(Number.EPSILON)`?",
    question_hi: "`console.log(Number.EPSILON)` का आउटपुट क्या है?",
    options_en: ["2.220446049250313e-16", "0.0001", "1e-10", "Smallest positive number"],
    options_hi: ["2.220446049250313e-16", "0.0001", "1e-10", "सबसे छोटा पॉजिटिव नंबर"],
    answer_en: "2.220446049250313e-16",
    answer_hi: "2.220446049250313e-16",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which method is used to get the hyperbolic sine of a number?",
    question_hi: "नंबर का हाइपरबोलिक साइन पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.sinh()", "Math.hypersin()", "hyperbolicSin()", "sinh()"],
    options_hi: ["Math.sinh()", "Math.hypersin()", "hyperbolicSin()", "sinh()"],
    answer_en: "Math.sinh()",
    answer_hi: "Math.sinh()",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What does `console.log(new Array(3))` output?",
    question_hi: "`console.log(new Array(3))` क्या आउटपुट देता है?",
    options_en: ["[empty × 3]", "[3]", "[undefined, undefined, undefined]", "Error"],
    options_hi: ["[empty × 3]", "[3]", "[undefined, undefined, undefined]", "एरर"],
    answer_en: "[empty × 3]",
    answer_hi: "[empty × 3]",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which method is used to get the hyperbolic cosine of a number?",
    question_hi: "नंबर का हाइपरबोलिक कोसाइन पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.cosh()", "Math.hypercos()", "hyperbolicCos()", "cosh()"],
    options_hi: ["Math.cosh()", "Math.hypercos()", "hyperbolicCos()", "cosh()"],
    answer_en: "Math.cosh()",
    answer_hi: "Math.cosh()",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the output of `console.log(2 in [1, 2, 3])`?",
    question_hi: "`console.log(2 in [1, 2, 3])` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which method is used to get the hyperbolic tangent of a number?",
    question_hi: "नंबर का हाइपरबोलिक टैन्जेंट पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.tanh()", "Math.hypertan()", "hyperbolicTan()", "tanh()"],
    options_hi: ["Math.tanh()", "Math.hypertan()", "hyperbolicTan()", "tanh()"],
    answer_en: "Math.tanh()",
    answer_hi: "Math.tanh()",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the purpose of `Array.prototype[Symbol.iterator]()`?",
    question_hi: "`Array.prototype[Symbol.iterator]()` का उद्देश्य क्या है?",
    options_en: ["Make array iterable", "Create iterator for array", "Both A and B", "None of the above"],
    options_hi: ["ऐरे को इटरेबल बनाना", "ऐरे के लिए इटरेटर बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the output of `console.log(Math.clz32(1))`?",
    question_hi: "`console.log(Math.clz32(1))` का आउटपुट क्या है?",
    options_en: ["31", "32", "0", "1"],
    options_hi: ["31", "32", "0", "1"],
    answer_en: "31",
    answer_hi: "31",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to get the inverse hyperbolic sine of a number?",
    question_hi: "नंबर का इनवर्स हाइपरबोलिक साइन पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.asinh()", "Math.invsinh()", "inverseHyperbolicSin()", "asinh()"],
    options_hi: ["Math.asinh()", "Math.invsinh()", "inverseHyperbolicSin()", "asinh()"],
    answer_en: "Math.asinh()",
    answer_hi: "Math.asinh()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the output of `console.log('11' + 1)`?",
    question_hi: "`console.log('11' + 1)` का आउटपुट क्या है?",
    options_en: ["'111'", "12", "'12'", "Error"],
    options_hi: ["'111'", "12", "'12'", "एरर"],
    answer_en: "'111'",
    answer_hi: "'111'",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to get the inverse hyperbolic cosine of a number?",
    question_hi: "नंबर का इनवर्स हाइपरबोलिक कोसाइन पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.acosh()", "Math.invcosh()", "inverseHyperbolicCos()", "acosh()"],
    options_hi: ["Math.acosh()", "Math.invcosh()", "inverseHyperbolicCos()", "acosh()"],
    answer_en: "Math.acosh()",
    answer_hi: "Math.acosh()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `String.prototype[Symbol.iterator]()`?",
    question_hi: "`String.prototype[Symbol.iterator]()` का उद्देश्य क्या है?",
    options_en: ["Make string iterable", "Create iterator for string", "Both A and B", "None of the above"],
    options_hi: ["स्ट्रिंग को इटरेबल बनाना", "स्ट्रिंग के लिए इटरेटर बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the output of `console.log(Math.fround(1.337))`?",
    question_hi: "`console.log(Math.fround(1.337))` का आउटपुट क्या है?",
    options_en: ["1.3370000123977661", "1.337", "1.34", "1.3"],
    options_hi: ["1.3370000123977661", "1.337", "1.34", "1.3"],
    answer_en: "1.3370000123977661",
    answer_hi: "1.3370000123977661",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which method is used to get the inverse hyperbolic tangent of a number?",
    question_hi: "नंबर का इनवर्स हाइपरबोलिक टैन्जेंट पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.atanh()", "Math.invtanh()", "inverseHyperbolicTan()", "atanh()"],
    options_hi: ["Math.atanh()", "Math.invtanh()", "inverseHyperbolicTan()", "atanh()"],
    answer_en: "Math.atanh()",
    answer_hi: "Math.atanh()",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "What is the output of `console.log('11' - 1)`?",
    question_hi: "`console.log('11' - 1)` का आउटपुट क्या है?",
    options_en: ["10", "'10'", "'111'", "Error"],
    options_hi: ["10", "'10'", "'111'", "एरर"],
    answer_en: "10",
    answer_hi: "10",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which method is used to get the cube root of a number?",
    question_hi: "नंबर का क्यूब रूट पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.cbrt()", "Math.cubeRoot()", "cubeRoot()", "cbrt()"],
    options_hi: ["Math.cbrt()", "Math.cubeRoot()", "cubeRoot()", "cbrt()"],
    answer_en: "Math.cbrt()",
    answer_hi: "Math.cbrt()",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the purpose of `Map.prototype[Symbol.iterator]()`?",
    question_hi: "`Map.prototype[Symbol.iterator]()` का उद्देश्य क्या है?",
    options_en: ["Make map iterable", "Create iterator for map", "Both A and B", "None of the above"],
    options_hi: ["मैप को इटरेबल बनाना", "मैप के लिए इटरेटर बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log(Math.hypot(3, 4))`?",
    question_hi: "`console.log(Math.hypot(3, 4))` का आउटपुट क्या है?",
    options_en: ["5", "7", "25", "12"],
    options_hi: ["5", "7", "25", "12"],
    answer_en: "5",
    answer_hi: "5",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to get the base 2 logarithm of a number?",
    question_hi: "नंबर का बेस 2 लॉगरिदम पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.log2()", "Math.log(2)", "log2()", "Both A and B"],
    options_hi: ["Math.log2()", "Math.log(2)", "log2()", "A और B दोनों"],
    answer_en: "Math.log2()",
    answer_hi: "Math.log2()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the output of `console.log(0.1 + 0.2)`?",
    question_hi: "`console.log(0.1 + 0.2)` का आउटपुट क्या है?",
    options_en: ["0.30000000000000004", "0.3", "0.30000000000000000", "0.30"],
    options_hi: ["0.30000000000000004", "0.3", "0.30000000000000000", "0.30"],
    answer_en: "0.30000000000000004",
    answer_hi: "0.30000000000000004",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to get the truncated integer of a number?",
    question_hi: "नंबर का ट्रंकेटेड इंटीजर पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.trunc()", "Math.floor()", "Math.ceil()", "Math.round()"],
    options_hi: ["Math.trunc()", "Math.floor()", "Math.ceil()", "Math.round()"],
    answer_en: "Math.trunc()",
    answer_hi: "Math.trunc()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the purpose of `Set.prototype[Symbol.iterator]()`?",
    question_hi: "`Set.prototype[Symbol.iterator]()` का उद्देश्य क्या है?",
    options_en: ["Make set iterable", "Create iterator for set", "Both A and B", "None of the above"],
    options_hi: ["सेट को इटरेबल बनाना", "सेट के लिए इटरेटर बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What is the output of `console.log(Math.imul(2, 4))`?",
    question_hi: "`console.log(Math.imul(2, 4))` का आउटपुट क्या है?",
    options_en: ["8", "6", "0", "32"],
    options_hi: ["8", "6", "0", "32"],
    answer_en: "8",
    answer_hi: "8",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which method is used to get the natural logarithm of 1 + x?",
    question_hi: "1 + x का नेचुरल लॉगरिदम पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.log1p()", "Math.log(1+x)", "log1p()", "Both A and B"],
    options_hi: ["Math.log1p()", "Math.log(1+x)", "log1p()", "A और B दोनों"],
    answer_en: "Math.log1p()",
    answer_hi: "Math.log1p()",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What is the output of `console.log(1 / 0)`?",
    question_hi: "`console.log(1 / 0)` का आउटपुट क्या है?",
    options_en: ["Infinity", "0", "undefined", "Error"],
    options_hi: ["Infinity", "0", "undefined", "एरर"],
    answer_en: "Infinity",
    answer_hi: "Infinity",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which method is used to get the sign of a number?",
    question_hi: "नंबर का साइन पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.sign()", "Math.abs()", "sign()", "getSign()"],
    options_hi: ["Math.sign()", "Math.abs()", "sign()", "getSign()"],
    answer_en: "Math.sign()",
    answer_hi: "Math.sign()",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "What is the purpose of `Promise.prototype[Symbol.toStringTag]`?",
    question_hi: "`Promise.prototype[Symbol.toStringTag]` का उद्देश्य क्या है?",
    options_en: ["Customize Object.prototype.toString", "Set promise tag", "Both A and B", "None of the above"],
    options_hi: ["Object.prototype.toString कस्टमाइज़ करना", "प्रॉमिस टैग सेट करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the output of `console.log(-1 / 0)`?",
    question_hi: "`console.log(-1 / 0)` का आउटपुट क्या है?",
    options_en: ["-Infinity", "0", "undefined", "Error"],
    options_hi: ["-Infinity", "0", "undefined", "एरर"],
    answer_en: "-Infinity",
    answer_hi: "-Infinity",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to get e raised to the power of x minus 1?",
    question_hi: "e की पावर x माइनस 1 पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.expm1()", "Math.exp(x-1)", "expm1()", "Both A and B"],
    options_hi: ["Math.expm1()", "Math.exp(x-1)", "expm1()", "A और B दोनों"],
    answer_en: "Math.expm1()",
    answer_hi: "Math.expm1()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the output of `console.log(0 / 0)`?",
    question_hi: "`console.log(0 / 0)` का आउटपुट क्या है?",
    options_en: ["NaN", "0", "Infinity", "Error"],
    options_hi: ["NaN", "0", "Infinity", "एरर"],
    answer_en: "NaN",
    answer_hi: "NaN",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to get the 32-bit representation of a number?",
    question_hi: "नंबर का 32-बिट रिप्रेजेंटेशन पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.fround()", "parseFloat()", "Number()", "toFixed()"],
    options_hi: ["Math.fround()", "parseFloat()", "Number()", "toFixed()"],
    answer_en: "Math.fround()",
    answer_hi: "Math.fround()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `Array.prototype[Symbol.unscopables]`?",
    question_hi: "`Array.prototype[Symbol.unscopables]` का उद्देश्य क्या है?",
    options_en: ["Exclude properties from with binding", "Hide properties", "Both A and B", "None of the above"],
    options_hi: ["विथ बाइंडिंग से प्रॉपर्टीज एक्सक्लूड करना", "प्रॉपर्टीज हाइड करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What is the output of `console.log(1..toString())`?",
    question_hi: "`console.log(1..toString())` का आउटपुट क्या है?",
    options_en: ["'1'", "1", "undefined", "Error"],
    options_hi: ["'1'", "1", "undefined", "एरर"],
    answer_en: "'1'",
    answer_hi: "'1'",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which method is used to get the number of leading zero bits?",
    question_hi: "लीडिंग जीरो बिट्स की संख्या पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.clz32()", "Math.leadingZeros()", "clz32()", "countLeadingZeros()"],
    options_hi: ["Math.clz32()", "Math.leadingZeros()", "clz32()", "countLeadingZeros()"],
    answer_en: "Math.clz32()",
    answer_hi: "Math.clz32()",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the output of `console.log(typeof (function(){}).constructor)`?",
    question_hi: "`console.log(typeof (function(){}).constructor)` का आउटपुट क्या है?",
    options_en: ["function", "object", "undefined", "constructor"],
    options_hi: ["function", "object", "undefined", "constructor"],
    answer_en: "function",
    answer_hi: "function",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which method is used to get the square root of 1/2?",
    question_hi: "1/2 का स्क्वायर रूट पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.SQRT1_2", "Math.sqrt(0.5)", "Both A and B", "None of the above"],
    options_hi: ["Math.SQRT1_2", "Math.sqrt(0.5)", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "What is the purpose of `String.prototype[Symbol.match]()`?",
    question_hi: "`String.prototype[Symbol.match]()` का उद्देश्य क्या है?",
    options_en: ["Customize match behavior", "Override String.prototype.match", "Both A and B", "None of the above"],
    options_hi: ["मैच बिहेवियर कस्टमाइज़ करना", "String.prototype.match ओवरराइड करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
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
    num: 44,
    question_en: "Which method is used to get the square root of 2?",
    question_hi: "2 का स्क्वायर रूट पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.SQRT2", "Math.sqrt(2)", "Both A and B", "None of the above"],
    options_hi: ["Math.SQRT2", "Math.sqrt(2)", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the purpose of `String.prototype[Symbol.replace]()`?",
    question_hi: "`String.prototype[Symbol.replace]()` का उद्देश्य क्या है?",
    options_en: ["Customize replace behavior", "Override String.prototype.replace", "Both A and B", "None of the above"],
    options_hi: ["रिप्लेस बिहेवियर कस्टमाइज़ करना", "String.prototype.replace ओवरराइड करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the output of `console.log(1 .toString())`?",
    question_hi: "`console.log(1 .toString())` का आउटपुट क्या है?",
    options_en: ["'1'", "1", "undefined", "Error"],
    options_hi: ["'1'", "1", "undefined", "एरर"],
    answer_en: "'1'",
    answer_hi: "'1'",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which method is used to get the natural logarithm of 2?",
    question_hi: "2 का नेचुरल लॉगरिदम पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.LN2", "Math.log(2)", "Both A and B", "None of the above"],
    options_hi: ["Math.LN2", "Math.log(2)", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "What is the purpose of `String.prototype[Symbol.search]()`?",
    question_hi: "`String.prototype[Symbol.search]()` का उद्देश्य क्या है?",
    options_en: ["Customize search behavior", "Override String.prototype.search", "Both A and B", "None of the above"],
    options_hi: ["सर्च बिहेवियर कस्टमाइज़ करना", "String.prototype.search ओवरराइड करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the output of `console.log((1).toString())`?",
    question_hi: "`console.log((1).toString())` का आउटपुट क्या है?",
    options_en: ["'1'", "1", "undefined", "Error"],
    options_hi: ["'1'", "1", "undefined", "एरर"],
    answer_en: "'1'",
    answer_hi: "'1'",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to get the natural logarithm of 10?",
    question_hi: "10 का नेचुरल लॉगरिदम पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.LN10", "Math.log(10)", "Both A and B", "None of the above"],
    options_hi: ["Math.LN10", "Math.log(10)", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
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