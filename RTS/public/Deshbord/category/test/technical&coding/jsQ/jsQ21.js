const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log([1, 2, 3].map(num => num * 2))`?",
    question_hi: "`console.log([1, 2, 3].map(num => num * 2))` का आउटपुट क्या है?",
    options_en: ["[2, 4, 6]", "[1, 2, 3]", "[1, 4, 9]", "Error"],
    options_hi: ["[2, 4, 6]", "[1, 2, 3]", "[1, 4, 9]", "एरर"],
    answer_en: "[2, 4, 6]",
    answer_hi: "[2, 4, 6]",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method is used to find the first element that satisfies a condition?",
    question_hi: "कंडीशन को पूरा करने वाला पहला एलिमेंट ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["find()", "filter()", "search()", "locate()"],
    options_hi: ["find()", "filter()", "search()", "locate()"],
    answer_en: "find()",
    answer_hi: "find()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `rest` parameter do in JavaScript?",
    question_hi: "`rest` पैरामीटर JavaScript में क्या करता है?",
    options_en: ["Collects multiple arguments into array", "Spreads array elements", "Both A and B", "None of the above"],
    options_hi: ["मल्टीपल आर्गुमेंट्स को ऐरे में इकट्ठा करता है", "ऐरे एलिमेंट्स को फैलाता है", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Collects multiple arguments into array",
    answer_hi: "मल्टीपल आर्गुमेंट्स को ऐरे में इकट्ठा करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method is used to check if all elements satisfy a condition?",
    question_hi: "सभी एलिमेंट्स कंडीशन को सैटिस्फाई करते हैं या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["every()", "some()", "all()", "check()"],
    options_hi: ["every()", "some()", "all()", "check()"],
    answer_en: "every()",
    answer_hi: "every()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `Object.entries()`?",
    question_hi: "`Object.entries()` का उद्देश्य क्या है?",
    options_en: ["Returns key-value pairs", "Returns keys only", "Returns values only", "Checks object properties"],
    options_hi: ["की-वैल्यू पेयर्स लौटाता है", "केवल कीज़ लौटाता है", "केवल वैल्यूज लौटाता है", "ऑब्जेक्ट प्रॉपर्टीज चेक करता है"],
    answer_en: "Returns key-value pairs",
    answer_hi: "की-वैल्यू पेयर्स लौटाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which method is used to get the current timestamp?",
    question_hi: "करेंट टाइमस्टैम्प पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Date.now()", "new Date()", "Date.getTime()", "All of the above"],
    options_hi: ["Date.now()", "new Date()", "Date.getTime()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the output of `console.log(typeof Symbol())`?",
    question_hi: "`console.log(typeof Symbol())` का आउटपुट क्या है?",
    options_en: ["symbol", "object", "function", "undefined"],
    options_hi: ["symbol", "object", "function", "undefined"],
    answer_en: "symbol",
    answer_hi: "symbol",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method is used to check if any element satisfies a condition?",
    question_hi: "कोई भी एलिमेंट कंडीशन को सैटिस्फाई करता है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["some()", "every()", "any()", "check()"],
    options_hi: ["some()", "every()", "any()", "check()"],
    answer_en: "some()",
    answer_hi: "some()",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the purpose of `spread` operator?",
    question_hi: "`spread` ऑपरेटर का उद्देश्य क्या है?",
    options_en: ["Expand arrays/objects", "Combine arrays/objects", "Both A and B", "None of the above"],
    options_hi: ["ऐरे/ऑब्जेक्ट्स को एक्सपैंड करना", "ऐरे/ऑब्जेक्ट्स को कंबाइन करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method is used to create a new array with filtered elements?",
    question_hi: "फिल्टर्ड एलिमेंट्स के साथ नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["filter()", "map()", "reduce()", "find()"],
    options_hi: ["filter()", "map()", "reduce()", "find()"],
    answer_en: "filter()",
    answer_hi: "filter()",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the output of `console.log([...'hello'])`?",
    question_hi: "`console.log([...'hello'])` का आउटपुट क्या है?",
    options_en: "['h', 'e', 'l', 'l', 'o']",
    options_hi: "['h', 'e', 'l', 'l', 'o']",
    answer_en: "['h', 'e', 'l', 'l', 'o']",
    answer_hi: "['h', 'e', 'l', 'l', 'o']",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property is used to get the class of an object?",
    question_hi: "ऑब्जेक्ट की क्लास पाने के लिए कौन-सा प्रॉपर्टी उपयोग होता है?",
    options_en: ["constructor", "prototype", "__proto__", "class"],
    options_hi: ["constructor", "prototype", "__proto__", "class"],
    answer_en: "constructor",
    answer_hi: "constructor",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the purpose of `default parameters`?",
    question_hi: "`default parameters` का उद्देश्य क्या है?",
    options_en: ["Provide default values for parameters", "Make parameters optional", "Both A and B", "None of the above"],
    options_hi: ["पैरामीटर्स के लिए डिफॉल्ट वैल्यूज प्रोवाइड करना", "पैरामीटर्स को ऑप्शनल बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to merge multiple objects?",
    question_hi: "मल्टीपल ऑब्जेक्ट्स को मर्ज करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Object.assign()", "Object.merge()", "Object.combine()", "Object.join()"],
    options_hi: ["Object.assign()", "Object.merge()", "Object.combine()", "Object.join()"],
    answer_en: "Object.assign()",
    answer_hi: "Object.assign()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the purpose of `async` functions?",
    question_hi: "`async` फंक्शन्स का उद्देश्य क्या है?",
    options_en: ["Work with promises easily", "Write asynchronous code", "Both A and B", "None of the above"],
    options_hi: ["प्रॉमिसेस के साथ आसानी से काम करना", "एसिंक्रोनस कोड लिखना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to get the month from a date?",
    question_hi: "डेट से महीना पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["getMonth()", "getDate()", "getFullYear()", "getTime()"],
    options_hi: ["getMonth()", "getDate()", "getFullYear()", "getTime()"],
    answer_en: "getMonth()",
    answer_hi: "getMonth()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `Object.values()`?",
    question_hi: "`Object.values()` का उद्देश्य क्या है?",
    options_en: ["Returns object values", "Returns object keys", "Returns key-value pairs", "Checks object properties"],
    options_hi: ["ऑब्जेक्ट वैल्यूज लौटाता है", "ऑब्जेक्ट कीज़ लौटाता है", "की-वैल्यू पेयर्स लौटाता है", "ऑब्जेक्ट प्रॉपर्टीज चेक करता है"],
    answer_en: "Returns object values",
    answer_hi: "ऑब्जेक्ट वैल्यूज लौटाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which method is used to replace text using regex?",
    question_hi: "रेगेक्स का उपयोग करके टेक्स्ट रिप्लेस करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["replace()", "substitute()", "change()", "update()"],
    options_hi: ["replace()", "substitute()", "change()", "update()"],
    answer_en: "replace()",
    answer_hi: "replace()",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the output of `console.log(Number('123'))`?",
    question_hi: "`console.log(Number('123'))` का आउटपुट क्या है?",
    options_en: ["123", "'123'", "NaN", "Error"],
    options_hi: ["123", "'123'", "NaN", "एरर"],
    answer_en: "123",
    answer_hi: "123",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method is used to handle promise rejection?",
    question_hi: "प्रॉमिस रिजेक्शन को हैंडल करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["catch()", "then()", "finally()", "error()"],
    options_hi: ["catch()", "then()", "finally()", "error()"],
    answer_en: "catch()",
    answer_hi: "catch()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the purpose of `template literals`?",
    question_hi: "`template literals` का उद्देश्य क्या है?",
    options_en: ["Create strings with embedded expressions", "Multi-line strings", "Both A and B", "None of the above"],
    options_hi: ["एम्बेडेड एक्सप्रेशन्स के साथ स्ट्रिंग्स बनाना", "मल्टी-लाइन स्ट्रिंग्स", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to reduce an array to a single value?",
    question_hi: "ऐरे को सिंगल वैल्यू में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["reduce()", "map()", "filter()", "find()"],
    options_hi: ["reduce()", "map()", "filter()", "find()"],
    answer_en: "reduce()",
    answer_hi: "reduce()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the output of `console.log(null ?? 'default')`?",
    question_hi: "`console.log(null ?? 'default')` का आउटपुट क्या है?",
    options_en: ["'default'", "null", "undefined", "Error"],
    options_hi: ["'default'", "null", "undefined", "एरर"],
    answer_en: "'default'",
    answer_hi: "'default'",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method is used to get the smallest integer greater than or equal to a number?",
    question_hi: "नंबर से बड़ा या बराबर सबसे छोटा इंटीजर पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.trunc()"],
    options_hi: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.trunc()"],
    answer_en: "Math.ceil()",
    answer_hi: "Math.ceil()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the purpose of `destructuring assignment`?",
    question_hi: "`destructuring assignment` का उद्देश्य क्या है?",
    options_en: ["Extract values from arrays/objects", "Assign values to variables", "Both A and B", "None of the above"],
    options_hi: ["ऐरे/ऑब्जेक्ट्स से वैल्यूज निकालना", "वेरिएबल्स को वैल्यूज असाइन करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to check if a string includes another string?",
    question_hi: "स्ट्रिंग में दूसरी स्ट्रिंग है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["includes()", "contains()", "has()", "find()"],
    options_hi: ["includes()", "contains()", "has()", "find()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the output of `console.log(+'')`?",
    question_hi: "`console.log(+'')` का आउटपुट क्या है?",
    options_en: ["0", "NaN", "''", "Error"],
    options_hi: ["0", "NaN", "''", "एरर"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to check if a value is finite?",
    question_hi: "वैल्यू फाइनाइट है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["isFinite()", "Number.isFinite()", "Both A and B", "None of the above"],
    options_hi: ["isFinite()", "Number.isFinite()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `addEventListener()`?",
    question_hi: "`addEventListener()` का उद्देश्य क्या है?",
    options_en: ["Attach event handler", "Remove event handler", "Create event", "All of the above"],
    options_hi: ["इवेंट हैंडलर अटैच करना", "इवेंट हैंडलर रिमूव करना", "इवेंट बनाना", "उपरोक्त सभी"],
    answer_en: "Attach event handler",
    answer_hi: "इवेंट हैंडलर अटैच करना",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
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
    num: 31,
    question_en: "What is the output of `console.log('Hello'.repeat(2))`?",
    question_hi: "`console.log('Hello'.repeat(2))` का आउटपुट क्या है?",
    options_en: ["'HelloHello'", "'Hello'", "'Hello Hello'", "Error"],
    options_hi: ["'HelloHello'", "'Hello'", "'Hello Hello'", "एरर"],
    answer_en: "'HelloHello'",
    answer_hi: "'HelloHello'",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to convert a number to string with fixed decimals?",
    question_hi: "फिक्स्ड डेसीमल्स के साथ नंबर को स्ट्रिंग में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toFixed()", "toString()", "toPrecision()", "toExponential()"],
    options_hi: ["toFixed()", "toString()", "toPrecision()", "toExponential()"],
    answer_en: "toFixed()",
    answer_hi: "toFixed()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of `Array.prototype.forEach()`?",
    question_hi: "`Array.prototype.forEach()` का उद्देश्य क्या है?",
    options_en: ["Execute function for each element", "Create new array", "Filter elements", "Reduce array"],
    options_hi: ["प्रत्येक एलिमेंट के लिए फंक्शन चलाना", "नया ऐरे बनाना", "एलिमेंट्स फिल्टर करना", "ऐरे रिड्यूस करना"],
    answer_en: "Execute function for each element",
    answer_hi: "प्रत्येक एलिमेंट के लिए फंक्शन चलाना",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to create a shallow copy of an array?",
    question_hi: "ऐरे की शैलो कॉपी बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["slice()", "splice()", "copy()", "clone()"],
    options_hi: ["slice()", "splice()", "copy()", "clone()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the output of `console.log(undefined ?? 'default')`?",
    question_hi: "`console.log(undefined ?? 'default')` का आउटपुट क्या है?",
    options_en: ["'default'", "undefined", "null", "Error"],
    options_hi: ["'default'", "undefined", "null", "एरर"],
    answer_en: "'default'",
    answer_hi: "'default'",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to remove duplicates from array?",
    question_hi: "ऐरे से डुप्लिकेट्स हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["[...new Set(array)]", "array.unique()", "array.distinct()", "array.removeDuplicates()"],
    options_hi: ["[...new Set(array)]", "array.unique()", "array.distinct()", "array.removeDuplicates()"],
    answer_en: "[...new Set(array)]",
    answer_hi: "[...new Set(array)]",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `fetch()` API?",
    question_hi: "`fetch()` API का उद्देश्य क्या है?",
    options_en: ["Make HTTP requests", "Get data from server", "Both A and B", "None of the above"],
    options_hi: ["HTTP रिक्वेस्ट्स बनाना", "सर्वर से डेटा लेना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method is used to get the sign of a number?",
    question_hi: "नंबर का साइन पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["Math.sign()", "Math.abs()", "Math.floor()", "Math.ceil()"],
    options_hi: ["Math.sign()", "Math.abs()", "Math.floor()", "Math.ceil()"],
    answer_en: "Math.sign()",
    answer_hi: "Math.sign()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(Array.isArray([]))`?",
    question_hi: "`console.log(Array.isArray([]))` का आउटपुट क्या है?",
    options_en: ["true", "false", "[]", "Error"],
    options_hi: ["true", "false", "[]", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to convert string to array?",
    question_hi: "स्ट्रिंग को ऐरे में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["split()", "join()", "concat()", "merge()"],
    options_hi: ["split()", "join()", "concat()", "merge()"],
    answer_en: "split()",
    answer_hi: "split()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the purpose of `localStorage`?",
    question_hi: "`localStorage` का उद्देश्य क्या है?",
    options_en: ["Store data in browser", "Store data temporarily", "Both A and B", "None of the above"],
    options_hi: ["ब्राउज़र में डेटा स्टोर करना", "डेटा टेम्पररली स्टोर करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Store data in browser",
    answer_hi: "ब्राउज़र में डेटा स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to get character code?",
    question_hi: "कैरेक्टर कोड पाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["charCodeAt()", "charAt()", "codeAt()", "getCharCode()"],
    options_hi: ["charCodeAt()", "charAt()", "codeAt()", "getCharCode()"],
    answer_en: "charCodeAt()",
    answer_hi: "charCodeAt()",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the output of `console.log(Boolean([]))`?",
    question_hi: "`console.log(Boolean([]))` का आउटपुट क्या है?",
    options_en: ["true", "false", "[]", "Error"],
    options_hi: ["true", "false", "[]", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method is used to parse JSON?",
    question_hi: "JSON पार्स करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["JSON.parse()", "JSON.stringify()", "Object.parse()", "String.parse()"],
    options_hi: ["JSON.parse()", "JSON.stringify()", "Object.parse()", "String.parse()"],
    answer_en: "JSON.parse()",
    answer_hi: "JSON.parse()",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the purpose of `querySelectorAll()`?",
    question_hi: "`querySelectorAll()` का उद्देश्य क्या है?",
    options_en: ["Select all matching elements", "Select first element", "Create elements", "Remove elements"],
    options_hi: ["सभी मैचिंग एलिमेंट्स सेलेक्ट करना", "पहला एलिमेंट सेलेक्ट करना", "एलिमेंट्स बनाना", "एलिमेंट्स हटाना"],
    answer_en: "Select all matching elements",
    answer_hi: "सभी मैचिंग एलिमेंट्स सेलेक्ट करना",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to check if array includes value?",
    question_hi: "ऐरे में वैल्यू है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["includes()", "contains()", "has()", "find()"],
    options_hi: ["includes()", "contains()", "has()", "find()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the output of `console.log({a: 1} === {a: 1})`?",
    question_hi: "`console.log({a: 1} === {a: 1})` का आउटपुट क्या है?",
    options_en: ["false", "true", "{a: 1}", "Error"],
    options_hi: ["false", "true", "{a: 1}", "एरर"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to flatten nested arrays?",
    question_hi: "नेस्टेड ऐरे को फ्लैटन करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["flat()", "concat()", "merge()", "join()"],
    options_hi: ["flat()", "concat()", "merge()", "join()"],
    answer_en: "flat()",
    answer_hi: "flat()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `await` keyword?",
    question_hi: "`await` कीवर्ड का उद्देश्य क्या है?",
    options_en: ["Wait for promise to resolve", "Pause async function", "Both A and B", "None of the above"],
    options_hi: ["प्रॉमिस के रिजॉल्व होने का इंतज़ार करना", "async फंक्शन को पॉज़ करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to find the index of element?",
    question_hi: "एलिमेंट का इंडेक्स ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["indexOf()", "findIndex()", "Both A and B", "None of the above"],
    options_hi: ["indexOf()", "findIndex()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
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