const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log(0.1 + 0.2 === 0.3)`?",
    question_hi: "`console.log(0.1 + 0.2 === 0.3)` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "NaN"],
    options_hi: ["false", "true", "undefined", "NaN"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method removes whitespace from both ends of a string?",
    question_hi: "कौन-सा मेथड स्ट्रिंग के दोनों सिरों से व्हाइटस्पेस हटाता है?",
    options_en: ["trim()", "trimStart()", "trimEnd()", "strip()"],
    options_hi: ["trim()", "trimStart()", "trimEnd()", "strip()"],
    answer_en: "trim()",
    answer_hi: "trim()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `?.` operator do?",
    question_hi: "`?.` ऑपरेटर क्या करता है?",
    options_en: ["Optional chaining", "Nullish coalescing", "Ternary operator", "Logical AND"],
    options_hi: ["ऑप्शनल चेनिंग", "नलिश कोलेसिंग", "टर्नरी ऑपरेटर", "लॉजिकल AND"],
    answer_en: "Optional chaining",
    answer_hi: "ऑप्शनल चेनिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method returns a new array with elements from original array?",
    question_hi: "कौन-सा मेथड ओरिजिनल ऐरे के एलिमेंट्स से नया ऐरे लौटाता है?",
    options_en: ["slice()", "splice()", "split()", "cut()"],
    options_hi: ["slice()", "splice()", "split()", "cut()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `Set` in JavaScript?",
    question_hi: "JavaScript में `Set` का उद्देश्य क्या है?",
    options_en: ["Store unique values", "Store key-value pairs", "Store arrays", "Store objects"],
    options_hi: ["यूनिक वैल्यूज स्टोर करना", "की-वैल्यू पेयर्स स्टोर करना", "ऐरे स्टोर करना", "ऑब्जेक्ट्स स्टोर करना"],
    answer_en: "Store unique values",
    answer_hi: "यूनिक वैल्यूज स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which method adds an element to a Set?",
    question_hi: "कौन-सा मेथड Set में एलिमेंट जोड़ता है?",
    options_en: ["add()", "push()", "insert()", "set()"],
    options_hi: ["add()", "push()", "insert()", "set()"],
    answer_en: "add()",
    answer_hi: "add()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the purpose of `Map` in JavaScript?",
    question_hi: "JavaScript में `Map` का उद्देश्य क्या है?",
    options_en: ["Store key-value pairs", "Store unique values", "Store arrays", "Store functions"],
    options_hi: ["की-वैल्यू पेयर्स स्टोर करना", "यूनिक वैल्यूज स्टोर करना", "ऐरे स्टोर करना", "फंक्शन्स स्टोर करना"],
    answer_en: "Store key-value pairs",
    answer_hi: "की-वैल्यू पेयर्स स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method sets a value for a key in Map?",
    question_hi: "कौन-सा मेथड Map में की के लिए वैल्यू सेट करता है?",
    options_en: ["set()", "add()", "put()", "insert()"],
    options_hi: ["set()", "add()", "put()", "insert()"],
    answer_en: "set()",
    answer_hi: "set()",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
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
    num: 10,
    question_en: "Which method converts a string to uppercase?",
    question_hi: "कौन-सा मेथड स्ट्रिंग को अपरकेस में बदलता है?",
    options_en: ["toUpperCase()", "toUpper()", "upperCase()", "capitalize()"],
    options_hi: ["toUpperCase()", "toUpper()", "upperCase()", "capitalize()"],
    answer_en: "toUpperCase()",
    answer_hi: "toUpperCase()",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the purpose of `fetch` API?",
    question_hi: "`fetch` API का उद्देश्य क्या है?",
    options_en: ["Make HTTP requests", "Fetch files", "Get user data", "Read local storage"],
    options_hi: ["HTTP रिक्वेस्ट्स बनाना", "फाइल्स फेच करना", "यूजर डेटा लेना", "लोकल स्टोरेज पढ़ना"],
    answer_en: "Make HTTP requests",
    answer_hi: "HTTP रिक्वेस्ट्स बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method converts a JSON response to JavaScript object?",
    question_hi: "कौन-सा मेथड JSON रिस्पांस को JavaScript ऑब्जेक्ट में बदलता है?",
    options_en: ["json()", "parse()", "object()", "convert()"],
    options_hi: ["json()", "parse()", "object()", "convert()"],
    answer_en: "json()",
    answer_hi: "json()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the purpose of `localStorage`?",
    question_hi: "`localStorage` का उद्देश्य क्या है?",
    options_en: ["Store data in browser", "Store data in server", "Temporary storage", "Cache data"],
    options_hi: ["ब्राउज़र में डेटा स्टोर करना", "सर्वर में डेटा स्टोर करना", "टेम्पररी स्टोरेज", "कैश डेटा"],
    answer_en: "Store data in browser",
    answer_hi: "ब्राउज़र में डेटा स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method saves data to localStorage?",
    question_hi: "कौन-सा मेथड localStorage में डेटा सेव करता है?",
    options_en: ["setItem()", "saveItem()", "store()", "put()"],
    options_hi: ["setItem()", "saveItem()", "store()", "put()"],
    answer_en: "setItem()",
    answer_hi: "setItem()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is event delegation?",
    question_hi: "इवेंट डेलिगेशन क्या है?",
    options_en: ["Handling events on parent element", "Delegating events to server", "Creating custom events", "Removing events"],
    options_hi: ["पैरेंट एलिमेंट पर इवेंट्स हैंडल करना", "सर्वर को इवेंट्स डेलिगेट करना", "कस्टम इवेंट्स बनाना", "इवेंट्स हटाना"],
    answer_en: "Handling events on parent element",
    answer_hi: "पैरेंट एलिमेंट पर इवेंट्स हैंडल करना",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method attaches an event handler?",
    question_hi: "कौन-सा मेथड इवेंट हैंडलर अटैच करता है?",
    options_en: ["addEventListener()", "attachEvent()", "onEvent()", "handleEvent()"],
    options_hi: ["addEventListener()", "attachEvent()", "onEvent()", "handleEvent()"],
    answer_en: "addEventListener()",
    answer_hi: "addEventListener()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `this` in arrow functions?",
    question_hi: "एरो फंक्शन्स में `this` का उद्देश्य क्या है?",
    options_en: ["Lexically scoped", "Dynamically scoped", "Always undefined", "Global object"],
    options_hi: ["लेक्सिकली स्कोप्ड", "डायनामिकली स्कोप्ड", "हमेशा undefined", "ग्लोबल ऑब्जेक्ट"],
    answer_en: "Lexically scoped",
    answer_hi: "लेक्सिकली स्कोप्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method creates a new function with bound `this`?",
    question_hi: "कौन-सा मेथड बाउंड `this` के साथ नया फंक्शन बनाता है?",
    options_en: ["bind()", "call()", "apply()", "attach()"],
    options_hi: ["bind()", "call()", "apply()", "attach()"],
    answer_en: "bind()",
    answer_hi: "bind()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the output of `console.log(1 + '1')`?",
    question_hi: "`console.log(1 + '1')` का आउटपुट क्या है?",
    options_en: ["'11'", "2", "NaN", "Error"],
    options_hi: ["'11'", "2", "NaN", "एरर"],
    answer_en: "'11'",
    answer_hi: "'11'",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method checks if an array includes a value?",
    question_hi: "कौन-सा मेथड चेक करता है कि ऐरे में वैल्यू है?",
    options_en: ["includes()", "contains()", "has()", "find()"],
    options_hi: ["includes()", "contains()", "has()", "find()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the purpose of `async/await`?",
    question_hi: "`async/await` का उद्देश्य क्या है?",
    options_en: ["Write asynchronous code synchronously", "Make code faster", "Handle errors", "Create promises"],
    options_hi: ["एसिंक्रोनस कोड सिंक्रोनसली लिखना", "कोड फास्टर बनाना", "एरर्स हैंडल करना", "प्रॉमिसेस बनाना"],
    answer_en: "Write asynchronous code synchronously",
    answer_hi: "एसिंक्रोनस कोड सिंक्रोनसली लिखना",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which keyword is used to wait for a promise?",
    question_hi: "प्रॉमिस का इंतजार करने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    options_en: ["await", "async", "then", "wait"],
    options_hi: ["await", "async", "then", "wait"],
    answer_en: "await",
    answer_hi: "await",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the purpose of `Promise.resolve()`?",
    question_hi: "`Promise.resolve()` का उद्देश्य क्या है?",
    options_en: ["Create resolved promise", "Create rejected promise", "Check promise status", "Cancel promise"],
    options_hi: ["रिजॉल्व्ड प्रॉमिस बनाना", "रिजेक्टेड प्रॉमिस बनाना", "प्रॉमिस स्टेटस चेक करना", "प्रॉमिस कैंसिल करना"],
    answer_en: "Create resolved promise",
    answer_hi: "रिजॉल्व्ड प्रॉमिस बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method returns the current timestamp?",
    question_hi: "कौन-सा मेथड करेंट टाइमस्टैम्प लौटाता है?",
    options_en: ["Date.now()", "new Date()", "Date.time()", "Date.timestamp()"],
    options_hi: ["Date.now()", "new Date()", "Date.time()", "Date.timestamp()"],
    answer_en: "Date.now()",
    answer_hi: "Date.now()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the purpose of `Object.entries()`?",
    question_hi: "`Object.entries()` का उद्देश्य क्या है?",
    options_en: ["Returns key-value pairs", "Returns keys", "Returns values", "Returns properties"],
    options_hi: ["की-वैल्यू पेयर्स लौटाता है", "कीज़ लौटाता है", "वैल्यूज लौटाता है", "प्रॉपर्टीज़ लौटाता है"],
    answer_en: "Returns key-value pairs",
    answer_hi: "की-वैल्यू पेयर्स लौटाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method creates a new array with filtered elements?",
    question_hi: "कौन-सा मेथड फिल्टर्ड एलिमेंट्स के साथ नया ऐरे बनाता है?",
    options_en: ["filter()", "map()", "reduce()", "find()"],
    options_hi: ["filter()", "map()", "reduce()", "find()"],
    answer_en: "filter()",
    answer_hi: "filter()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the purpose of `Array.prototype.reduce()`?",
    question_hi: "`Array.prototype.reduce()` का उद्देश्य क्या है?",
    options_en: ["Reduce array to single value", "Reduce array size", "Remove elements", "Filter array"],
    options_hi: ["ऐरे को सिंगल वैल्यू में बदलना", "ऐरे साइज़ कम करना", "एलिमेंट्स हटाना", "ऐरे फिल्टर करना"],
    answer_en: "Reduce array to single value",
    answer_hi: "ऐरे को सिंगल वैल्यू में बदलना",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method checks if all elements pass a test?",
    question_hi: "कौन-सा मेथड चेक करता है कि सभी एलिमेंट्स टेस्ट पास करते हैं?",
    options_en: ["every()", "some()", "all()", "check()"],
    options_hi: ["every()", "some()", "all()", "check()"],
    answer_en: "every()",
    answer_hi: "every()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `Array.prototype.some()`?",
    question_hi: "`Array.prototype.some()` का उद्देश्य क्या है?",
    options_en: ["Check if some elements pass test", "Check all elements", "Filter elements", "Find elements"],
    options_hi: ["चेक करना कि कुछ एलिमेंट्स टेस्ट पास करते हैं", "सभी एलिमेंट्स चेक करना", "एलिमेंट्स फिल्टर करना", "एलिमेंट्स ढूंढना"],
    answer_en: "Check if some elements pass test",
    answer_hi: "चेक करना कि कुछ एलिमेंट्स टेस्ट पास करते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which method creates a new array with reversed elements?",
    question_hi: "कौन-सा मेथड रिवर्स्ड एलिमेंट्स के साथ नया ऐरे बनाता है?",
    options_en: ["reverse()", "sort()", "flip()", "invert()"],
    options_hi: ["reverse()", "sort()", "flip()", "invert()"],
    answer_en: "reverse()",
    answer_hi: "reverse()",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the purpose of `Object.getPrototypeOf()`?",
    question_hi: "`Object.getPrototypeOf()` का उद्देश्य क्या है?",
    options_en: ["Get object's prototype", "Set object's prototype", "Create prototype", "Delete prototype"],
    options_hi: ["ऑब्जेक्ट का प्रोटोटाइप लेना", "ऑब्जेक्ट का प्रोटोटाइप सेट करना", "प्रोटोटाइप बनाना", "प्रोटोटाइप डिलीट करना"],
    answer_en: "Get object's prototype",
    answer_hi: "ऑब्जेक्ट का प्रोटोटाइप लेना",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method checks if an object is array?",
    question_hi: "कौन-सा मेथड चेक करता है कि ऑब्जेक्ट ऐरे है?",
    options_en: ["Array.isArray()", "Object.isArray()", "isArray()", "typeOf()"],
    options_hi: ["Array.isArray()", "Object.isArray()", "isArray()", "typeOf()"],
    answer_en: "Array.isArray()",
    answer_hi: "Array.isArray()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of `Object.seal()`?",
    question_hi: "`Object.seal()` का उद्देश्य क्या है?",
    options_en: ["Prevent adding new properties", "Prevent all changes", "Make object immutable", "Delete properties"],
    options_hi: ["नई प्रॉपर्टीज जोड़ने से रोकना", "सभी बदलाव रोकना", "ऑब्जेक्ट इम्यूटेबल बनाना", "प्रॉपर्टीज डिलीट करना"],
    answer_en: "Prevent adding new properties",
    answer_hi: "नई प्रॉपर्टीज जोड़ने से रोकना",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method creates a shallow copy of an object?",
    question_hi: "कौन-सा मेथड ऑब्जेक्ट की शैलो कॉपी बनाता है?",
    options_en: ["Object.assign()", "Object.copy()", "Object.clone()", "Object.create()"],
    options_hi: ["Object.assign()", "Object.copy()", "Object.clone()", "Object.create()"],
    answer_en: "Object.assign()",
    answer_hi: "Object.assign()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the purpose of `String.prototype.replace()`?",
    question_hi: "`String.prototype.replace()` का उद्देश्य क्या है?",
    options_en: ["Replace substring", "Remove substring", "Find substring", "Split string"],
    options_hi: ["सबस्ट्रिंग रिप्लेस करना", "सबस्ट्रिंग हटाना", "सबस्ट्रिंग ढूंढना", "स्ट्रिंग स्प्लिट करना"],
    answer_en: "Replace substring",
    answer_hi: "सबस्ट्रिंग रिप्लेस करना",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method converts a string to lowercase?",
    question_hi: "कौन-सा मेथड स्ट्रिंग को लोअरकेस में बदलता है?",
    options_en: ["toLowerCase()", "toLower()", "lowerCase()", "smallCase()"],
    options_hi: ["toLowerCase()", "toLower()", "lowerCase()", "smallCase()"],
    answer_en: "toLowerCase()",
    answer_hi: "toLowerCase()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `Number.isInteger()`?",
    question_hi: "`Number.isInteger()` का उद्देश्य क्या है?",
    options_en: ["Check if value is integer", "Convert to integer", "Round number", "Check number type"],
    options_hi: ["चेक करना वैल्यू इंटीजर है", "इंटीजर में बदलना", "नंबर राउंड करना", "नंबर टाइप चेक करना"],
    answer_en: "Check if value is integer",
    answer_hi: "चेक करना वैल्यू इंटीजर है",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method parses a string to floating point number?",
    question_hi: "कौन-सा मेथड स्ट्रिंग को फ्लोटिंग पॉइंट नंबर में बदलता है?",
    options_en: ["parseFloat()", "parseInt()", "Number()", "Float()"],
    options_hi: ["parseFloat()", "parseInt()", "Number()", "Float()"],
    answer_en: "parseFloat()",
    answer_hi: "parseFloat()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the purpose of `Math.random()`?",
    question_hi: "`Math.random()` का उद्देश्य क्या है?",
    options_en: ["Generate random number", "Round number", "Get maximum value", "Calculate square root"],
    options_hi: ["रैंडम नंबर जनरेट करना", "नंबर राउंड करना", "मैक्सिमम वैल्यू लेना", "स्क्वायर रूट कैलकुलेट करना"],
    answer_en: "Generate random number",
    answer_hi: "रैंडम नंबर जनरेट करना",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method rounds a number to nearest integer?",
    question_hi: "कौन-सा मेथड नंबर को नजदीकी इंटीजर में राउंड करता है?",
    options_en: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
    options_hi: ["Math.round()", "Math.floor()", "Math.ceil()", "Math.trunc()"],
    answer_en: "Math.round()",
    answer_hi: "Math.round()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the purpose of `Array.prototype.fill()`?",
    question_hi: "`Array.prototype.fill()` का उद्देश्य क्या है?",
    options_en: ["Fill array with static value", "Filter array", "Find value in array", "Flatten array"],
    options_hi: ["ऐरे को स्टैटिक वैल्यू से भरना", "ऐरे फिल्टर करना", "ऐरे में वैल्यू ढूंढना", "ऐरे फ्लैटन करना"],
    answer_en: "Fill array with static value",
    answer_hi: "ऐरे को स्टैटिक वैल्यू से भरना",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method returns the first index where element is found?",
    question_hi: "कौन-सा मेथड पहला इंडेक्स लौटाता है जहां एलिमेंट मिलता है?",
    options_en: ["indexOf()", "findIndex()", "search()", "locate()"],
    options_hi: ["indexOf()", "findIndex()", "search()", "locate()"],
    answer_en: "indexOf()",
    answer_hi: "indexOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the purpose of `String.prototype.split()`?",
    question_hi: "`String.prototype.split()` का उद्देश्य क्या है?",
    options_en: ["Split string into array", "Join array into string", "Cut string", "Divide string"],
    options_hi: ["स्ट्रिंग को ऐरे में बदलना", "ऐरे को स्ट्रिंग में जोड़ना", "स्ट्रिंग काटना", "स्ट्रिंग डिवाइड करना"],
    answer_en: "Split string into array",
    answer_hi: "स्ट्रिंग को ऐरे में बदलना",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method joins array elements into string?",
    question_hi: "कौन-सा मेथड ऐरे एलिमेंट्स को स्ट्रिंग में जोड़ता है?",
    options_en: ["join()", "concat()", "merge()", "combine()"],
    options_hi: ["join()", "concat()", "merge()", "combine()"],
    answer_en: "join()",
    answer_hi: "join()",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the purpose of `Object.values()`?",
    question_hi: "`Object.values()` का उद्देश्य क्या है?",
    options_en: ["Return object's values", "Return object's keys", "Return key-value pairs", "Return properties"],
    options_hi: ["ऑब्जेक्ट की वैल्यूज लौटाना", "ऑब्जेक्ट की कीज़ लौटाना", "की-वैल्यू पेयर्स लौटाना", "प्रॉपर्टीज़ लौटाना"],
    answer_en: "Return object's values",
    answer_hi: "ऑब्जेक्ट की वैल्यूज लौटाना",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method checks if property exists in object?",
    question_hi: "कौन-सा मेथड चेक करता है कि प्रॉपर्टी ऑब्जेक्ट में है?",
    options_en: ["hasOwnProperty()", "in operator", "Both", "None"],
    options_hi: ["hasOwnProperty()", "in ऑपरेटर", "दोनों", "कोई नहीं"],
    answer_en: "Both",
    answer_hi: "दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the purpose of `Array.prototype.flat()`?",
    question_hi: "`Array.prototype.flat()` का उद्देश्य क्या है?",
    options_en: ["Flatten nested arrays", "Create flat array", "Remove duplicates", "Sort array"],
    options_hi: ["नेस्टेड ऐरे फ्लैटन करना", "फ्लैट ऐरे बनाना", "डुप्लिकेट्स हटाना", "ऐरे सॉर्ट करना"],
    answer_en: "Flatten nested arrays",
    answer_hi: "नेस्टेड ऐरे फ्लैटन करना",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method creates a new array with duplicates removed?",
    question_hi: "कौन-सा मेथड डुप्लिकेट्स हटाकर नया ऐरे बनाता है?",
    options_en: ["Set with spread operator", "filter()", "map()", "reduce()"],
    options_hi: ["स्प्रेड ऑपरेटर के साथ Set", "filter()", "map()", "reduce()"],
    answer_en: "Set with spread operator",
    answer_hi: "स्प्रेड ऑपरेटर के साथ Set",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `Object.freeze()`?",
    question_hi: "`Object.freeze()` का उद्देश्य क्या है?",
    options_en: ["Make object immutable", "Prevent property addition", "Seal object", "Lock object"],
    options_hi: ["ऑब्जेक्ट इम्यूटेबल बनाना", "प्रॉपर्टी एडिशन रोकना", "ऑब्जेक्ट सील करना", "ऑब्जेक्ट लॉक करना"],
    answer_en: "Make object immutable",
    answer_hi: "ऑब्जेक्ट इम्यूटेबल बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method returns the character at specified index?",
    question_hi: "कौन-सा मेथड स्पेसिफाइड इंडेक्स पर कैरेक्टर लौटाता है?",
    options_en: ["charAt()", "charCodeAt()", "at()", "getChar()"],
    options_hi: ["charAt()", "charCodeAt()", "at()", "getChar()"],
    answer_en: "charAt()",
    answer_hi: "charAt()",
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