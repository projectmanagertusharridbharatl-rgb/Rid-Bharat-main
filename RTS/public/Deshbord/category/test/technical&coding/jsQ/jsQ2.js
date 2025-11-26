const questions = [
  {
    num: 1,
    question_en: "What is the result of `console.log(0.1 + 0.2 === 0.3)`?",
    question_hi: "`console.log(0.1 + 0.2 === 0.3)` का रिजल्ट क्या है?",
    options_en: ["false", "true", "undefined", "NaN"],
    options_hi: ["false", "true", "undefined", "NaN"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method creates a new array with the results of calling a function on every element?",
    question_hi: "कौन-सा मेथड हर एलिमेंट पर फंक्शन कॉल करके नया ऐरे बनाता है?",
    options_en: ["map()", "forEach()", "filter()", "reduce()"],
    options_hi: ["map()", "forEach()", "filter()", "reduce()"],
    answer_en: "map()",
    answer_hi: "map()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the `spread` operator (...) do?",
    question_hi: "`spread` ऑपरेटर (...) क्या करता है?",
    options_en: ["Expands iterables into individual elements", "Combines elements", "Creates objects", "Destructures arrays"],
    options_hi: ["इटरेबल्स को अलग-अलग एलिमेंट्स में फैलाता है", "एलिमेंट्स को कॉम्बाइन करता है", "ऑब्जेक्ट्स बनाता है", "ऐरे डिस्ट्रक्चर करता है"],
    answer_en: "Expands iterables into individual elements",
    answer_hi: "इटरेबल्स को अलग-अलग एलिमेंट्स में फैलाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method is used to handle asynchronous operations in modern JavaScript?",
    question_hi: "मॉडर्न JavaScript में एसिंक्रोनस ऑपरेशन्स के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["async/await", "callbacks", "promises", "Both async/await and promises"],
    options_hi: ["async/await", "callbacks", "promises", "async/await और promises दोनों"],
    answer_en: "Both async/await and promises",
    answer_hi: "async/await और promises दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `localStorage` in JavaScript?",
    question_hi: "JavaScript में `localStorage` का उद्देश्य क्या है?",
    options_en: ["Store data persistently in browser", "Store session data", "Store cookies", "Store temporary data"],
    options_hi: ["ब्राउज़र में डेटा परमानेंट स्टोर करना", "सेशन डेटा स्टोर करना", "कुकीज़ स्टोर करना", "टेम्पररी डेटा स्टोर करना"],
    answer_en: "Store data persistently in browser",
    answer_hi: "ब्राउज़र में डेटा परमानेंट स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which method returns the first element that matches a CSS selector?",
    question_hi: "कौन-सा मेथड पहला एलिमेंट लौटाता है जो CSS सेलेक्टर से मैच करता है?",
    options_en: ["querySelector()", "getElementById()", "getElementsByClassName()", "querySelectorAll()"],
    options_hi: ["querySelector()", "getElementById()", "getElementsByClassName()", "querySelectorAll()"],
    answer_en: "querySelector()",
    answer_hi: "querySelector()",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is event bubbling in JavaScript?",
    question_hi: "JavaScript में इवेंट बबलिंग क्या है?",
    options_en: ["Events propagate from target to parent", "Events propagate from parent to target", "Events don't propagate", "Events cancel each other"],
    options_hi: ["इवेंट्स टारगेट से पैरेंट की तरफ प्रोपेगेट होते हैं", "इवेंट्स पैरेंट से टारगेट की तरफ प्रोपेगेट होते हैं", "इवेंट्स प्रोपेगेट नहीं होते", "इवेंट्स एक-दूसरे को कैंसल करते हैं"],
    answer_en: "Events propagate from target to parent",
    answer_hi: "इवेंट्स टारगेट से पैरेंट की तरफ प्रोपेगेट होते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which method is used to prevent the default behavior of an event?",
    question_hi: "इवेंट की डिफॉल्ट बिहेवियर रोकने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["preventDefault()", "stopPropagation()", "stopImmediatePropagation()", "cancelDefault()"],
    options_hi: ["preventDefault()", "stopPropagation()", "stopImmediatePropagation()", "cancelDefault()"],
    answer_en: "preventDefault()",
    answer_hi: "preventDefault()",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the difference between `let` and `var`?",
    question_hi: "`let` और `var` में क्या अंतर है?",
    options_en: ["`let` has block scope, `var` has function scope", "`var` has block scope, `let` has function scope", "No difference", "`let` is hoisted, `var` is not"],
    options_hi: ["`let` का ब्लॉक स्कोप है, `var` का फंक्शन स्कोप है", "`var` का ब्लॉक स्कोप है, `let` का फंक्शन स्कोप है", "कोई अंतर नहीं", "`let` होइस्टेड है, `var` नहीं है"],
    answer_en: "`let` has block scope, `var` has function scope",
    answer_hi: "`let` का ब्लॉक स्कोप है, `var` का फंक्शन स्कोप है",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which method converts a JavaScript object to a JSON string?",
    question_hi: "कौन-सा मेथड JavaScript ऑब्जेक्ट को JSON स्ट्रिंग में बदलता है?",
    options_en: ["JSON.stringify()", "JSON.parse()", "Object.toString()", "Stringify()"],
    options_hi: ["JSON.stringify()", "JSON.parse()", "Object.toString()", "Stringify()"],
    answer_en: "JSON.stringify()",
    answer_hi: "JSON.stringify()",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the purpose of `fetch` API in JavaScript?",
    question_hi: "JavaScript में `fetch` API का उद्देश्य क्या है?",
    options_en: ["Make HTTP requests", "Fetch local files", "Get user input", "Fetch DOM elements"],
    options_hi: ["HTTP रिक्वेस्ट्स बनाना", "लोकल फाइल्स फ़ेच करना", "यूजर इनपुट लेना", "DOM एलिमेंट्स फ़ेच करना"],
    answer_en: "Make HTTP requests",
    answer_hi: "HTTP रिक्वेस्ट्स बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which method adds one or more elements to the beginning of an array?",
    question_hi: "कौन-सा मेथड एक या अधिक एलिमेंट्स को ऐरे की शुरुआत में जोड़ता है?",
    options_en: ["unshift()", "push()", "shift()", "pop()"],
    options_hi: ["unshift()", "push()", "shift()", "pop()"],
    answer_en: "unshift()",
    answer_hi: "unshift()",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What does the `typeof` operator return for an array?",
    question_hi: "`typeof` ऑपरेटर ऐरे के लिए क्या लौटाता है?",
    options_en: ["object", "array", "undefined", "null"],
    options_hi: ["object", "array", "undefined", "null"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to copy an array in JavaScript?",
    question_hi: "JavaScript में ऐरे कॉपी करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["slice()", "splice()", "copy()", "clone()"],
    options_hi: ["slice()", "splice()", "copy()", "clone()"],
    answer_en: "slice()",
    answer_hi: "slice()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is a callback function?",
    question_hi: "कॉलबैक फंक्शन क्या है?",
    options_en: ["Function passed as argument to another function", "Function that calls itself", "Function that returns another function", "Async function"],
    options_hi: ["फंक्शन जो दूसरे फंक्शन में आर्गुमेंट के रूप में पास होता है", "फंक्शन जो खुद को कॉल करता है", "फंक्शन जो दूसरा फंक्शन लौटाता है", "एसिंक फंक्शन"],
    answer_en: "Function passed as argument to another function",
    answer_hi: "फंक्शन जो दूसरे फंक्शन में आर्गुमेंट के रूप में पास होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method removes the first element from an array?",
    question_hi: "कौन-सा मेथड ऐरे का पहला एलिमेंट हटाता है?",
    options_en: ["shift()", "pop()", "slice()", "splice()"],
    options_hi: ["shift()", "pop()", "slice()", "splice()"],
    answer_en: "shift()",
    answer_hi: "shift()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `use strict` in JavaScript?",
    question_hi: "JavaScript में `use strict` का उद्देश्य क्या है?",
    options_en: ["Enforce stricter parsing and error handling", "Make code run faster", "Enable new features", "Disable errors"],
    options_hi: ["स्ट्रिक्टर पार्सिंग और एरर हैंडलिंग", "कोड को तेज चलाना", "नई फीचर्स सक्षम करना", "एरर्स डिसेबल करना"],
    answer_en: "Enforce stricter parsing and error handling",
    answer_hi: "स्ट्रिक्टर पार्सिंग और एरर हैंडलिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which operator is used for nullish coalescing?",
    question_hi: "नलिश कोएलसिंग के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    options_en: ["??", "||", "&&", "?:", "??"],
    options_hi: ["??", "||", "&&", "?:", "??"],
    answer_en: "??",
    answer_hi: "??",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the result of `console.log([] == ![])`?",
    question_hi: "`console.log([] == ![])` का रिजल्ट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "Error"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which method is used to merge two or more arrays?",
    question_hi: "दो या अधिक ऐरे मर्ज करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["concat()", "merge()", "join()", "combine()"],
    options_hi: ["concat()", "merge()", "join()", "combine()"],
    answer_en: "concat()",
    answer_hi: "concat()",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is a Promise in JavaScript?",
    question_hi: "JavaScript में Promise क्या है?",
    options_en: ["Object representing eventual completion/failure of async operation", "Function that returns immediately", "Sync operation handler", "Error handling object"],
    options_hi: ["ऑब्जेक्ट जो एसिंक ऑपरेशन के कम्पलीशन/फेल्योर को रिप्रेजेंट करता है", "फंक्शन जो तुरंत रिटर्न होता है", "सिंक ऑपरेशन हैंडलर", "एरर हैंडलिंग ऑब्जेक्ट"],
    answer_en: "Object representing eventual completion/failure of async operation",
    answer_hi: "ऑब्जेक्ट जो एसिंक ऑपरेशन के कम्पलीशन/फेल्योर को रिप्रेजेंट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to handle fulfilled promises?",
    question_hi: "फुलफिल्ड प्रॉमिसेस को हैंडल करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["then()", "catch()", "finally()", "done()"],
    options_hi: ["then()", "catch()", "finally()", "done()"],
    answer_en: "then()",
    answer_hi: "then()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the purpose of `await` keyword?",
    question_hi: "`await` कीवर्ड का उद्देश्य क्या है?",
    options_en: ["Wait for Promise to resolve", "Stop execution", "Create async function", "Handle errors"],
    options_hi: ["Promise के रिजॉल्व होने का इंतज़ार करना", "एक्जिक्यूशन रोकना", "एसिंक फंक्शन बनाना", "एरर्स हैंडल करना"],
    answer_en: "Wait for Promise to resolve",
    answer_hi: "Promise के रिजॉल्व होने का इंतज़ार करना",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which method creates a new array with elements that pass a test?",
    question_hi: "कौन-सा मेथड नया ऐरे बनाता है जिसमें टेस्ट पास करने वाले एलिमेंट्स हों?",
    options_en: ["filter()", "map()", "reduce()", "forEach()"],
    options_hi: ["filter()", "map()", "reduce()", "forEach()"],
    answer_en: "filter()",
    answer_hi: "filter()",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is event delegation in JavaScript?",
    question_hi: "JavaScript में इवेंट डेलिगेशन क्या है?",
    options_en: ["Attaching event listener to parent instead of children", "Delegating events to another function", "Creating custom events", "Removing event listeners"],
    options_hi: ["चाइल्ड के बजाय पैरेंट में इवेंट लिसनर अटैच करना", "इवेंट्स को दूसरे फंक्शन को डेलिगेट करना", "कस्टम इवेंट्स बनाना", "इवेंट लिसनर्स हटाना"],
    answer_en: "Attaching event listener to parent instead of children",
    answer_hi: "चाइल्ड के बजाय पैरेंट में इवेंट लिसनर अटैच करना",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which method is used to convert a string to an integer?",
    question_hi: "स्ट्रिंग को इंटीजर में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["parseInt()", "parseFloat()", "Number()", "All of the above"],
    options_hi: ["parseInt()", "parseFloat()", "Number()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the difference between `null` and `undefined`?",
    question_hi: "`null` और `undefined` में क्या अंतर है?",
    options_en: ["`null` is intentional absence, `undefined` is default", "`undefined` is intentional absence, `null` is default", "No difference", "Both represent empty values"],
    options_hi: ["`null` इंटेंशनल अनुपस्थिति है, `undefined` डिफॉल्ट है", "`undefined` इंटेंशनल अनुपस्थिति है, `null` डिफॉल्ट है", "कोई अंतर नहीं", "दोनों खाली वैल्यू रिप्रेजेंट करते हैं"],
    answer_en: "`null` is intentional absence, `undefined` is default",
    answer_hi: "`null` इंटेंशनल अनुपस्थिति है, `undefined` डिफॉल्ट है",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to find the index of an element in an array?",
    question_hi: "ऐरे में एलिमेंट का इंडेक्स ढूंढने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["indexOf()", "findIndex()", "search()", "Both indexOf() and findIndex()"],
    options_hi: ["indexOf()", "findIndex()", "search()", "indexOf() और findIndex() दोनों"],
    answer_en: "Both indexOf() and findIndex()",
    answer_hi: "indexOf() और findIndex() दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `addEventListener` method?",
    question_hi: "`addEventListener` मेथड का उद्देश्य क्या है?",
    options_en: ["Attach event handler to element", "Create new event", "Remove event listener", "Trigger event"],
    options_hi: ["एलिमेंट में इवेंट हैंडलर अटैच करना", "नया इवेंट बनाना", "इवेंट लिसनर हटाना", "इवेंट ट्रिगर करना"],
    answer_en: "Attach event handler to element",
    answer_hi: "एलिमेंट में इवेंट हैंडलर अटैच करना",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which operator is used for optional chaining?",
    question_hi: "ऑप्शनल चेनिंग के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    options_en: ["?.", "??", "&&", "||"],
    options_hi: ["?.", "??", "&&", "||"],
    answer_en: "?.",
    answer_hi: "?.",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is a higher-order function?",
    question_hi: "हायर-ऑर्डर फंक्शन क्या है?",
    options_en: ["Function that takes/returns another function", "Function with higher priority", "Async function", "Generator function"],
    options_hi: ["फंक्शन जो दूसरा फंक्शन लेता/लौटाता है", "हायर प्रायोरिटी वाला फंक्शन", "एसिंक फंक्शन", "जनरेटर फंक्शन"],
    answer_en: "Function that takes/returns another function",
    answer_hi: "फंक्शन जो दूसरा फंक्शन लेता/लौटाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which method is used to remove whitespace from both ends of a string?",
    question_hi: "स्ट्रिंग के दोनों सिरों से व्हाइटस्पेस हटाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["trim()", "strip()", "clean()", "removeSpace()"],
    options_hi: ["trim()", "strip()", "clean()", "removeSpace()"],
    answer_en: "trim()",
    answer_hi: "trim()",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the purpose of `setTimeout` function?",
    question_hi: "`setTimeout` फंक्शन का उद्देश्य क्या है?",
    options_en: ["Execute code after delay", "Set time interval", "Stop execution", "Measure time"],
    options_hi: ["डिले के बाद कोड एक्जिक्यूट करना", "टाइम इंटरवल सेट करना", "एक्जिक्यूशन रोकना", "टाइम मापना"],
    answer_en: "Execute code after delay",
    answer_hi: "डिले के बाद कोड एक्जिक्यूट करना",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to convert a string to lowercase?",
    question_hi: "स्ट्रिंग को लोअरकेस में बदलने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["toLowerCase()", "toLower()", "lowerCase()", "convertLower()"],
    options_hi: ["toLowerCase()", "toLower()", "lowerCase()", "convertLower()"],
    answer_en: "toLowerCase()",
    answer_hi: "toLowerCase()",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the result of `console.log(1 + '1')`?",
    question_hi: "`console.log(1 + '1')` का रिजल्ट क्या है?",
    options_en: ["'11'", "2", "NaN", "Error"],
    options_hi: ["'11'", "2", "NaN", "Error"],
    answer_en: "'11'",
    answer_hi: "'11'",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which method is used to check if a string contains a substring?",
    question_hi: "स्ट्रिंग में सबस्ट्रिंग है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["includes()", "contains()", "has()", "indexOf()"],
    options_hi: ["includes()", "contains()", "has()", "indexOf()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the purpose of `Array.from()` method?",
    question_hi: "`Array.from()` मेथड का उद्देश्य क्या है?",
    options_en: ["Create array from array-like objects", "Convert to array", "Copy array", "Create empty array"],
    options_hi: ["ऐरे-जैसी ऑब्जेक्ट्स से ऐरे बनाना", "ऐरे में कन्वर्ट करना", "ऐरे कॉपी करना", "खाली ऐरे बनाना"],
    answer_en: "Create array from array-like objects",
    answer_hi: "ऐरे-जैसी ऑब्जेक्ट्स से ऐरे बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which method is used to sort an array?",
    question_hi: "ऐरे सॉर्ट करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["sort()", "order()", "arrange()", "sorted()"],
    options_hi: ["sort()", "order()", "arrange()", "sorted()"],
    answer_en: "sort()",
    answer_hi: "sort()",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is a JavaScript module?",
    question_hi: "JavaScript मॉड्यूल क्या है?",
    options_en: ["Reusable piece of code that exports functionality", "HTML module", "CSS module", "Database module"],
    options_hi: ["रीयूजेबल कोड जो फंक्शनैलिटी एक्सपोर्ट करता है", "HTML मॉड्यूल", "CSS मॉड्यूल", "डेटाबेस मॉड्यूल"],
    answer_en: "Reusable piece of code that exports functionality",
    answer_hi: "रीयूजेबल कोड जो फंक्शनैलिटी एक्सपोर्ट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which keyword is used to export functions from a module?",
    question_hi: "मॉड्यूल से फंक्शन्स एक्सपोर्ट करने के लिए कौन-सा कीवर्ड उपयोग होता है?",
    options_en: ["export", "module.exports", "exports", "All of the above"],
    options_hi: ["export", "module.exports", "exports", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the purpose of `try...catch` statement?",
    question_hi: "`try...catch` स्टेटमेंट का उद्देश्य क्या है?",
    options_en: ["Handle errors gracefully", "Try different approaches", "Catch values", "Test code"],
    options_hi: ["एरर्स को ग्रेसफुली हैंडल करना", "अलग-अलग एप्रोच ट्राई करना", "वैल्यूज कैच करना", "कोड टेस्ट करना"],
    answer_en: "Handle errors gracefully",
    answer_hi: "एरर्स को ग्रेसफुली हैंडल करना",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which method is used to reverse an array?",
    question_hi: "ऐरे रिवर्स करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["reverse()", "flip()", "backwards()", "invert()"],
    options_hi: ["reverse()", "flip()", "backwards()", "invert()"],
    answer_en: "reverse()",
    answer_hi: "reverse()",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the difference between `==` and `===`?",
    question_hi: "`==` और `===` में क्या अंतर है?",
    options_en: ["`===` checks type and value, `==` only value", "`==` checks type and value, `===` only value", "No difference", "`===` is faster"],
    options_hi: ["`===` टाइप और वैल्यू चेक करता है, `==` सिर्फ वैल्यू", "`==` टाइप और वैल्यू चेक करता है, `===` सिर्फ वैल्यू", "कोई अंतर नहीं", "`===` तेज है"],
    answer_en: "`===` checks type and value, `==` only value",
    answer_hi: "`===` टाइप और वैल्यू चेक करता है, `==` सिर्फ वैल्यू",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which method is used to join array elements into a string?",
    question_hi: "ऐरे एलिमेंट्स को स्ट्रिंग में जोड़ने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["join()", "concat()", "merge()", "combine()"],
    options_hi: ["join()", "concat()", "merge()", "combine()"],
    answer_en: "join()",
    answer_hi: "join()",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is a JavaScript generator?",
    question_hi: "JavaScript जनरेटर क्या है?",
    options_en: ["Function that can be paused and resumed", "Function that generates numbers", "Async function", "Callback function"],
    options_hi: ["फंक्शन जो पॉज और रिज्यूम किया जा सकता है", "फंक्शन जो नंबर्स जनरेट करता है", "एसिंक फंक्शन", "कॉलबैक फंक्शन"],
    answer_en: "Function that can be paused and resumed",
    answer_hi: "फंक्शन जो पॉज और रिज्यूम किया जा सकता है",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to create a new array with all sub-array elements?",
    question_hi: "सभी सब-ऐरे एलिमेंट्स के साथ नया ऐरे बनाने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["flat()", "concat()", "merge()", "join()"],
    options_hi: ["flat()", "concat()", "merge()", "join()"],
    answer_en: "flat()",
    answer_hi: "flat()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the purpose of `Object.keys()` method?",
    question_hi: "`Object.keys()` मेथड का उद्देश्य क्या है?",
    options_en: ["Return array of object's own property names", "Return object values", "Return object methods", "Return object length"],
    options_hi: ["ऑब्जेक्ट के अपने प्रॉपर्टी नामों का ऐरे लौटाना", "ऑब्जेक्ट वैल्यूज लौटाना", "ऑब्जेक्ट मेथड्स लौटाना", "ऑब्जेक्ट लेंथ लौटाना"],
    answer_en: "Return array of object's own property names",
    answer_hi: "ऑब्जेक्ट के अपने प्रॉपर्टी नामों का ऐरे लौटाना",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which method is used to check if an array includes a value?",
    question_hi: "ऐरे में वैल्यू है या नहीं चेक करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["includes()", "contains()", "has()", "indexOf()"],
    options_hi: ["includes()", "contains()", "has()", "indexOf()"],
    answer_en: "includes()",
    answer_hi: "includes()",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the purpose of `Array.reduce()` method?",
    question_hi: "`Array.reduce()` मेथड का उद्देश्य क्या है?",
    options_en: ["Reduce array to single value", "Reduce array size", "Remove elements", "Filter array"],
    options_hi: ["ऐरे को सिंगल वैल्यू में बदलना", "ऐरे साइज कम करना", "एलिमेंट्स हटाना", "ऐरे फिल्टर करना"],
    answer_en: "Reduce array to single value",
    answer_hi: "ऐरे को सिंगल वैल्यू में बदलना",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which method is used to remove elements from an array and add new ones?",
    question_hi: "ऐरे से एलिमेंट्स हटाने और नए एड करने के लिए कौन-सा मेथड उपयोग होता है?",
    options_en: ["splice()", "slice()", "cut()", "replace()"],
    options_hi: ["splice()", "slice()", "cut()", "replace()"],
    answer_en: "splice()",
    answer_hi: "splice()",
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