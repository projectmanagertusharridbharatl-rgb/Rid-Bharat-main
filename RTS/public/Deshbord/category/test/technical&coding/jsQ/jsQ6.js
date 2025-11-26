const questions = [
  {
    num: 1,
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
    num: 2,
    question_en: "Which method is used to get the current time in milliseconds since Unix epoch?",
    question_hi: "Unix epoch से मिलीसेकंड में करंट टाइम प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Date.now()", "new Date().getTime()", "Both A and B", "Time.current()"],
    options_hi: ["Date.now()", "new Date().getTime()", "A और B दोनों", "Time.current()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `debugger` statement do in JavaScript?",
    question_hi: "JavaScript में `debugger` स्टेटमेंट क्या करता है?",
    options_en: ["Pauses execution for debugging", "Logs debug information", "Throws error", "Continues execution"],
    options_hi: ["डिबगिंग के लिए एक्जिक्यूशन पॉज करता है", "डिबग इनफॉर्मेशन लॉग करता है", "एरर थ्रो करता है", "एक्जिक्यूशन जारी रखता है"],
    answer_en: "Pauses execution for debugging",
    answer_hi: "डिबगिंग के लिए एक्जिक्यूशन पॉज करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method is used to encode a URI component?",
    question_hi: "URI कंपोनेंट एनकोड करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["encodeURIComponent()", "encodeURI()", "escape()", "encode()"],
    options_hi: ["encodeURIComponent()", "encodeURI()", "escape()", "encode()"],
    answer_en: "encodeURIComponent()",
    answer_hi: "encodeURIComponent()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `Number.isInteger()` method?",
    question_hi: "`Number.isInteger()` मेथड का उद्देश्य क्या है?",
    options_en: ["Check if value is integer", "Convert to integer", "Round number", "Check number type"],
    options_hi: ["चेक करना कि वैल्यू इंटीजर है", "इंटीजर में कन्वर्ट करना", "नंबर राउंड करना", "नंबर टाइप चेक करना"],
    answer_en: "Check if value is integer",
    answer_hi: "चेक करना कि वैल्यू इंटीजर है",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which operator is used for exponentiation in JavaScript?",
    question_hi: "JavaScript में एक्सपोनेंशिएशन के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    options_en: ["**", "^", "pow()", "exp()"],
    options_hi: ["**", "^", "pow()", "exp()"],
    answer_en: "**",
    answer_hi: "**",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the output of `console.log(!!0)`?",
    question_hi: "`console.log(!!0)` का आउटपुट क्या है?",
    options_en: ["false", "true", "0", "1"],
    options_hi: ["false", "true", "0", "1"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method is used to get the character at specific index in string?",
    question_hi: "स्ट्रिंग में स्पेसिफिक इंडेक्स पर करैक्टर प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["charAt()", "charCodeAt()", "indexOf()", "getChar()"],
    options_hi: ["charAt()", "charCodeAt()", "indexOf()", "getChar()"],
    answer_en: "charAt()",
    answer_hi: "charAt()",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What does the `with` statement do in JavaScript?",
    question_hi: "JavaScript में `with` स्टेटमेंट क्या करता है?",
    options_en: ["Extends scope chain", "Creates object", "Defines variables", "Throws error"],
    options_hi: ["स्कोप चेन एक्सटेंड करता है", "ऑब्जेक्ट बनाता है", "वेरिएबल्स डिफाइन करता है", "एरर थ्रो करता है"],
    answer_en: "Extends scope chain",
    answer_hi: "स्कोप चेन एक्सटेंड करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method is used to decode a URI component?",
    question_hi: "URI कंपोनेंट डिकोड करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["decodeURIComponent()", "decodeURI()", "unescape()", "decode()"],
    options_hi: ["decodeURIComponent()", "decodeURI()", "unescape()", "decode()"],
    answer_en: "decodeURIComponent()",
    answer_hi: "decodeURIComponent()",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
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
    num: 12,
    question_en: "Which method is used to check if a number is finite?",
    question_hi: "नंबर फाइनाइट है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Number.isFinite()", "isFinite()", "Both A and B", "Number.isSafeInteger()"],
    options_hi: ["Number.isFinite()", "isFinite()", "A और B दोनों", "Number.isSafeInteger()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the purpose of `String.raw` method?",
    question_hi: "`String.raw` मेथड का उद्देश्य क्या है?",
    options_en: ["Get raw string form of template literal", "Remove whitespace", "Convert to raw format", "Escape characters"],
    options_hi: ["टेम्पलेट लिटरल का रॉ स्ट्रिंग फॉर्म प्राप्त करना", "व्हाइटस्पेस हटाना", "रॉ फॉर्मेट में कन्वर्ट करना", "करैक्टर्स एस्केप करना"],
    answer_en: "Get raw string form of template literal",
    answer_hi: "टेम्पलेट लिटरल का रॉ स्ट्रिंग फॉर्म प्राप्त करना",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which property returns the number of arguments passed to function?",
    question_hi: "कौन-सी प्रॉपर्टी फंक्शन में पास किए गए आर्गुमेंट्स की संख्या लौटाती है?",
    options_en: ["arguments.length", "function.length", "args.length", "parameters.length"],
    options_hi: ["arguments.length", "function.length", "args.length", "parameters.length"],
    answer_en: "arguments.length",
    answer_hi: "arguments.length",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the output of `console.log(Math.PI)`?",
    question_hi: "`console.log(Math.PI)` का आउटपुट क्या है?",
    options_en: ["3.141592653589793", "3.14", "π", "22/7"],
    options_hi: ["3.141592653589793", "3.14", "π", "22/7"],
    answer_en: "3.141592653589793",
    answer_hi: "3.141592653589793",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to get the Unicode of character at specific index?",
    question_hi: "स्पेसिफिक इंडेक्स पर करैक्टर का यूनिकोड प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["charCodeAt()", "charAt()", "codePointAt()", "getUnicode()"],
    options_hi: ["charCodeAt()", "charAt()", "codePointAt()", "getUnicode()"],
    answer_en: "charCodeAt()",
    answer_hi: "charCodeAt()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What does the `label` statement do in JavaScript?",
    question_hi: "JavaScript में `label` स्टेटमेंट क्या करता है?",
    options_en: ["Identifies statement for break/continue", "Creates variable label", "Marks code section", "Throws labeled error"],
    options_hi: ["break/continue के लिए स्टेटमेंट आइडेंटिफाई करता है", "वेरिएबल लेबल बनाता है", "कोड सेक्शन मार्क करता है", "लेबल्ड एरर थ्रो करता है"],
    answer_en: "Identifies statement for break/continue",
    answer_hi: "break/continue के लिए स्टेटमेंट आइडेंटिफाई करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to get the current date as string?",
    question_hi: "करंट डेट को स्ट्रिंग के रूप में प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Date().toString()", "new Date().toDateString()", "Both A and B", "Date.now().toString()"],
    options_hi: ["Date().toString()", "new Date().toDateString()", "A और B दोनों", "Date.now().toString()"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the output of `console.log(2 ** 3)`?",
    question_hi: "`console.log(2 ** 3)` का आउटपुट क्या है?",
    options_en: ["8", "6", "9", "5"],
    options_hi: ["8", "6", "9", "5"],
    answer_en: "8",
    answer_hi: "8",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method is used to check if string starts with specific characters?",
    question_hi: "स्ट्रिंग विशेष करैक्टर्स से शुरू होती है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["startsWith()", "starts()", "beginWith()", "checkStart()"],
    options_hi: ["startsWith()", "starts()", "beginWith()", "checkStart()"],
    answer_en: "startsWith()",
    answer_hi: "startsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the purpose of `globalThis` in JavaScript?",
    question_hi: "JavaScript में `globalThis` का उद्देश्य क्या है?",
    options_en: ["Reference global object in any environment", "Create global variables", "Check global scope", "Access window object"],
    options_hi: ["किसी भी एनवायरनमेंट में ग्लोबल ऑब्जेक्ट रेफरेंस करना", "ग्लोबल वेरिएबल्स बनाना", "ग्लोबल स्कोप चेक करना", "विंडो ऑब्जेक्ट एक्सेस करना"],
    answer_en: "Reference global object in any environment",
    answer_hi: "किसी भी एनवायरनमेंट में ग्लोबल ऑब्जेक्ट रेफरेंस करना",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to get the square root of a number?",
    question_hi: "नंबर का स्क्वायर रूट प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.sqrt()", "sqrt()", "Math.root()", "Number.sqrt()"],
    options_hi: ["Math.sqrt()", "sqrt()", "Math.root()", "Number.sqrt()"],
    answer_en: "Math.sqrt()",
    answer_hi: "Math.sqrt()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
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
    num: 24,
    question_en: "Which method is used to check if string ends with specific characters?",
    question_hi: "स्ट्रिंग विशेष करैक्टर्स से खत्म होती है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["endsWith()", "ends()", "finishWith()", "checkEnd()"],
    options_hi: ["endsWith()", "ends()", "finishWith()", "checkEnd()"],
    answer_en: "endsWith()",
    answer_hi: "endsWith()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the purpose of `Function.prototype.call()` method?",
    question_hi: "`Function.prototype.call()` मेथड का उद्देश्य क्या है?",
    options_en: ["Call function with specific this value", "Check if function is callable", "Create function call", "Execute function immediately"],
    options_hi: ["विशिष्ट this वैल्यू के साथ फंक्शन कॉल करना", "चेक करना कि फंक्शन कॉल करने योग्य है", "फंक्शन कॉल बनाना", "फंक्शन तुरंत एक्जिक्यूट करना"],
    answer_en: "Call function with specific this value",
    answer_hi: "विशिष्ट this वैल्यू के साथ फंक्शन कॉल करना",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to get the absolute value of a number?",
    question_hi: "नंबर का एब्सोल्यूट वैल्यू प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.abs()", "abs()", "Number.abs()", "absolute()"],
    options_hi: ["Math.abs()", "abs()", "Number.abs()", "absolute()"],
    answer_en: "Math.abs()",
    answer_hi: "Math.abs()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the output of `console.log(Number.isNaN('hello'))`?",
    question_hi: "`console.log(Number.isNaN('hello'))` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "Error"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to repeat a string multiple times?",
    question_hi: "स्ट्रिंग को मल्टीपल टाइम्स रिपीट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["repeat()", "replicate()", "copy()", "multiply()"],
    options_hi: ["repeat()", "replicate()", "copy()", "multiply()"],
    answer_en: "repeat()",
    answer_hi: "repeat()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `Function.prototype.bind()` method?",
    question_hi: "`Function.prototype.bind()` मेथड का उद्देश्य क्या है?",
    options_en: ["Create new function with bound this value", "Bind variables to function", "Create function binding", "Attach function to object"],
    options_hi: ["बाउंड this वैल्यू के साथ नया फंक्शन बनाना", "फंक्शन में वेरिएबल्स बाइंड करना", "फंक्शन बाइंडिंग बनाना", "ऑब्जेक्ट में फंक्शन अटैच करना"],
    answer_en: "Create new function with bound this value",
    answer_hi: "बाउंड this वैल्यू के साथ नया फंक्शन बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method is used to get the largest integer less than or equal to a number?",
    question_hi: "नंबर के बराबर या उससे छोटा सबसे बड़ा इंटीजर प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
    options_hi: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
    answer_en: "Math.floor()",
    answer_hi: "Math.floor()",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the output of `console.log('hello'.toUpperCase())`?",
    question_hi: "`console.log('hello'.toUpperCase())` का आउटपुट क्या है?",
    options_en: ["HELLO", "Hello", "hello", "Error"],
    options_hi: ["HELLO", "Hello", "hello", "Error"],
    answer_en: "HELLO",
    answer_hi: "HELLO",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to get the smallest integer greater than or equal to a number?",
    question_hi: "नंबर के बराबर या उससे बड़ा सबसे छोटा इंटीजर प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.trunc()"],
    options_hi: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.trunc()"],
    answer_en: "Math.ceil()",
    answer_hi: "Math.ceil()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of `Function.prototype.apply()` method?",
    question_hi: "`Function.prototype.apply()` मेथड का उद्देश्य क्या है?",
    options_en: ["Call function with array of arguments", "Apply function to array", "Check function application", "Execute function with apply"],
    options_hi: ["आर्गुमेंट्स के ऐरे के साथ फंक्शन कॉल करना", "ऐरे में फंक्शन एप्लाई करना", "फंक्शन एप्लिकेशन चेक करना", "एप्लाई के साथ फंक्शन एक्जिक्यूट करना"],
    answer_en: "Call function with array of arguments",
    answer_hi: "आर्गुमेंट्स के ऐरे के साथ फंक्शन कॉल करना",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to round a number to the nearest integer?",
    question_hi: "नंबर को नजदीकी इंटीजर में राउंड करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
    options_hi: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
    answer_en: "Math.round()",
    answer_hi: "Math.round()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the output of `console.log(Math.random())`?",
    question_hi: "`console.log(Math.random())` का आउटपुट क्या है?",
    options_en: ["Random number between 0 and 1", "Random integer", "0", "1"],
    options_hi: ["0 और 1 के बीच रैंडम नंबर", "रैंडम इंटीजर", "0", "1"],
    answer_en: "Random number between 0 and 1",
    answer_hi: "0 और 1 के बीच रैंडम नंबर",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to remove the integer part of a number?",
    question_hi: "नंबर के इंटीजर पार्ट को हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.trunc()", "Math.floor()", "Math.ceil()", "Math.round()"],
    options_hi: ["Math.trunc()", "Math.floor()", "Math.ceil()", "Math.round()"],
    answer_en: "Math.trunc()",
    answer_hi: "Math.trunc()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `String.prototype.padStart()` method?",
    question_hi: "`String.prototype.padStart()` मेथड का उद्देश्य क्या है?",
    options_en: ["Pad string from start with specific character", "Add padding to start", "Create padded string", "Extend string length from start"],
    options_hi: ["स्ट्रिंग को शुरुआत से विशेष करैक्टर से पैड करना", "शुरुआत में पैडिंग जोड़ना", "पैडेड स्ट्रिंग बनाना", "स्ट्रिंग लंबाई को शुरुआत से एक्सटेंड करना"],
    answer_en: "Pad string from start with specific character",
    answer_hi: "स्ट्रिंग को शुरुआत से विशेष करैक्टर से पैड करना",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method is used to get the maximum value from numbers?",
    question_hi: "नंबर्स से मैक्सिमम वैल्यू प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.max()", "max()", "Number.max()", "Maximum()"],
    options_hi: ["Math.max()", "max()", "Number.max()", "Maximum()"],
    answer_en: "Math.max()",
    answer_hi: "Math.max()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(' HELLO '.trim())`?",
    question_hi: "`console.log(' HELLO '.trim())` का आउटपुट क्या है?",
    options_en: ["HELLO", " HELLO", "HELLO ", "  HELLO  "],
    options_hi: ["HELLO", " HELLO", "HELLO ", "  HELLO  "],
    answer_en: "HELLO",
    answer_hi: "HELLO",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to get the minimum value from numbers?",
    question_hi: "नंबर्स से मिनिमम वैल्यू प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.min()", "min()", "Number.min()", "Minimum()"],
    options_hi: ["Math.min()", "min()", "Number.min()", "Minimum()"],
    answer_en: "Math.min()",
    answer_hi: "Math.min()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the purpose of `String.prototype.padEnd()` method?",
    question_hi: "`String.prototype.padEnd()` मेथड का उद्देश्य क्या है?",
    options_en: ["Pad string from end with specific character", "Add padding to end", "Create padded string at end", "Extend string length from end"],
    options_hi: ["स्ट्रिंग को अंत से विशेष करैक्टर से पैड करना", "अंत में पैडिंग जोड़ना", "अंत में पैडेड स्ट्रिंग बनाना", "स्ट्रिंग लंबाई को अंत से एक्सटेंड करना"],
    answer_en: "Pad string from end with specific character",
    answer_hi: "स्ट्रिंग को अंत से विशेष करैक्टर से पैड करना",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to get the exponential value of a number?",
    question_hi: "नंबर का एक्सपोनेंशियल वैल्यू प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.exp()", "exp()", "Number.exp()", "exponential()"],
    options_hi: ["Math.exp()", "exp()", "Number.exp()", "exponential()"],
    answer_en: "Math.exp()",
    answer_hi: "Math.exp()",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the output of `console.log('hello'.charAt(1))`?",
    question_hi: "`console.log('hello'.charAt(1))` का आउटपुट क्या है?",
    options_en: ["e", "h", "l", "o"],
    options_hi: ["e", "h", "l", "o"],
    answer_en: "e",
    answer_hi: "e",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method is used to get the natural logarithm of a number?",
    question_hi: "नंबर का नेचुरल लॉगरिदम प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.log()", "log()", "Number.log()", "logarithm()"],
    options_hi: ["Math.log()", "log()", "Number.log()", "logarithm()"],
    answer_en: "Math.log()",
    answer_hi: "Math.log()",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the purpose of `String.prototype.substring()` method?",
    question_hi: "`String.prototype.substring()` मेथड का उद्देश्य क्या है?",
    options_en: ["Extract characters between two indices", "Get sub string", "Create string slice", "Extract part of string"],
    options_hi: ["दो इंडिसेस के बीच करैक्टर्स एक्सट्रैक्ट करना", "सब स्ट्रिंग प्राप्त करना", "स्ट्रिंग स्लाइस बनाना", "स्ट्रिंग का हिस्सा एक्सट्रैक्ट करना"],
    answer_en: "Extract characters between two indices",
    answer_hi: "दो इंडिसेस के बीच करैक्टर्स एक्सट्रैक्ट करना",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to get the base 10 logarithm of a number?",
    question_hi: "नंबर का बेस 10 लॉगरिदम प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.log10()", "log10()", "Number.log10()", "Math.log(10)"],
    options_hi: ["Math.log10()", "log10()", "Number.log10()", "Math.log(10)"],
    answer_en: "Math.log10()",
    answer_hi: "Math.log10()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the output of `console.log('hello'.indexOf('l'))`?",
    question_hi: "`console.log('hello'.indexOf('l'))` का आउटपुट क्या है?",
    options_en: ["2", "3", "1", "4"],
    options_hi: ["2", "3", "1", "4"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to get the power of a number?",
    question_hi: "नंबर की पावर प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.pow()", "pow()", "Number.pow()", "power()"],
    options_hi: ["Math.pow()", "pow()", "Number.pow()", "power()"],
    answer_en: "Math.pow()",
    answer_hi: "Math.pow()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `String.prototype.slice()` method?",
    question_hi: "`String.prototype.slice()` मेथड का उद्देश्य क्या है?",
    options_en: ["Extract section of string and return new string", "Slice string into parts", "Cut string", "Divide string"],
    options_hi: ["स्ट्रिंग का सेक्शन एक्सट्रैक्ट करना और नई स्ट्रिंग लौटाना", "स्ट्रिंग को भागों में स्लाइस करना", "स्ट्रिंग काटना", "स्ट्रिंग डिवाइड करना"],
    answer_en: "Extract section of string and return new string",
    answer_hi: "स्ट्रिंग का सेक्शन एक्सट्रैक्ट करना और नई स्ट्रिंग लौटाना",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to get the sine of a number?",
    question_hi: "नंबर का साइन प्राप्त करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.sin()", "sin()", "Number.sin()", "sine()"],
    options_hi: ["Math.sin()", "sin()", "Number.sin()", "sine()"],
    answer_en: "Math.sin()",
    answer_hi: "Math.sin()",
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