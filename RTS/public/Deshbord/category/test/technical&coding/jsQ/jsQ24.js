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
    question_en: "Which method is used to check if an object is sealed?",
    question_hi: "ऑब्जेक्ट सील है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Object.isSealed()", "Object.sealed()", "isSealed()", "checkSealed()"],
    options_hi: ["Object.isSealed()", "Object.sealed()", "isSealed()", "checkSealed()"],
    answer_en: "Object.isSealed()",
    answer_hi: "Object.isSealed()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does `console.log(1 < 2 < 3)` output?",
    question_hi: "`console.log(1 < 2 < 3)` क्या आउटपुट देता है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method is used to get the property descriptors of an object?",
    question_hi: "ऑब्जेक्ट की प्रॉपर्टी डिस्क्रिप्टर्स पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Object.getOwnPropertyDescriptors()", "Object.descriptors()", "getDescriptors()", "Object.properties()"],
    options_hi: ["Object.getOwnPropertyDescriptors()", "Object.descriptors()", "getDescriptors()", "Object.properties()"],
    answer_en: "Object.getOwnPropertyDescriptors()",
    answer_hi: "Object.getOwnPropertyDescriptors()",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `WeakMap` in JavaScript?",
    question_hi: "JavaScript में `WeakMap` का उद्देश्य क्या है?",
    options_en: ["Store key-value pairs with weak references", "Create weak arrays", "Both A and B", "None of the above"],
    options_hi: ["वीक रेफरेंसेस के साथ की-वैल्यू पेयर्स स्टोर करना", "वीक ऐरे बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Store key-value pairs with weak references",
    answer_hi: "वीक रेफरेंसेस के साथ की-वैल्यू पेयर्स स्टोर करना",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the output of `console.log([1, 2] == '1,2')`?",
    question_hi: "`console.log([1, 2] == '1,2')` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which method is used to check if an object is frozen?",
    question_hi: "ऑब्जेक्ट फ्रोजन है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Object.isFrozen()", "Object.frozen()", "isFrozen()", "checkFrozen()"],
    options_hi: ["Object.isFrozen()", "Object.frozen()", "isFrozen()", "checkFrozen()"],
    answer_en: "Object.isFrozen()",
    answer_hi: "Object.isFrozen()",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What does `console.log(3 > 2 > 1)` output?",
    question_hi: "`console.log(3 > 2 > 1)` क्या आउटपुट देता है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "एरर"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which method is used to get the own property names of an object?",
    question_hi: "ऑब्जेक्ट की ओन प्रॉपर्टी नेम्स पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Object.getOwnPropertyNames()", "Object.keys()", "Both A and B", "None of the above"],
    options_hi: ["Object.getOwnPropertyNames()", "Object.keys()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Object.getOwnPropertyNames()",
    answer_hi: "Object.getOwnPropertyNames()",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the output of `console.log(!!'')`?",
    question_hi: "`console.log(!!'')` का आउटपुट क्या है?",
    options_en: ["false", "true", "''", "undefined"],
    options_hi: ["false", "true", "''", "undefined"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which method is used to create a new function with fixed this value?",
    question_hi: "फिक्स्ड this वैल्यू के साथ नया फंक्शन बनाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["bind()", "call()", "apply()", "attach()"],
    options_hi: ["bind()", "call()", "apply()", "attach()"],
    answer_en: "bind()",
    answer_hi: "bind()",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the purpose of `Proxy` object in JavaScript?",
    question_hi: "JavaScript में `Proxy` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Create custom behavior for fundamental operations", "Proxy network requests", "Both A and B", "None of the above"],
    options_hi: ["फंडामेंटल ऑपरेशन्स के लिए कस्टम बिहेवियर बनाना", "नेटवर्क रिक्वेस्ट्स प्रॉक्सी करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Create custom behavior for fundamental operations",
    answer_hi: "फंडामेंटल ऑपरेशन्स के लिए कस्टम बिहेवियर बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the output of `console.log(Number.isNaN('NaN'))`?",
    question_hi: "`console.log(Number.isNaN('NaN'))` का आउटपुट क्या है?",
    options_en: ["false", "true", "undefined", "Error"],
    options_hi: ["false", "true", "undefined", "एरर"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to check if an object is extensible?",
    question_hi: "ऑब्जेक्ट एक्सटेंसिबल है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Object.isExtensible()", "Object.extensible()", "isExtensible()", "checkExtensible()"],
    options_hi: ["Object.isExtensible()", "Object.extensible()", "isExtensible()", "checkExtensible()"],
    answer_en: "Object.isExtensible()",
    answer_hi: "Object.isExtensible()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the output of `console.log(String.raw`Hello\nWorld`)`?",
    question_hi: "`console.log(String.raw`Hello\nWorld`)` का आउटपुट क्या है?",
    options_en: ["'Hello\\nWorld'", "'Hello World'", "'Hello\nWorld'", "Error"],
    options_hi: ["'Hello\\nWorld'", "'Hello World'", "'Hello\nWorld'", "एरर"],
    answer_en: "'Hello\\nWorld'",
    answer_hi: "'Hello\\nWorld'",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to get the prototype of an object?",
    question_hi: "ऑब्जेक्ट का प्रोटोटाइप पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Object.getPrototypeOf()", "Object.prototype", "getPrototype()", "proto()"],
    options_hi: ["Object.getPrototypeOf()", "Object.prototype", "getPrototype()", "proto()"],
    answer_en: "Object.getPrototypeOf()",
    answer_hi: "Object.getPrototypeOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `Reflect` object in JavaScript?",
    question_hi: "JavaScript में `Reflect` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Provide methods for interceptable JavaScript operations", "Reflect light", "Both A and B", "None of the above"],
    options_hi: ["इंटरसेप्टेबल JavaScript ऑपरेशन्स के लिए मेथड्स प्रोवाइड करना", "लाइट रिफ्लेक्ट करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Provide methods for interceptable JavaScript operations",
    answer_hi: "इंटरसेप्टेबल JavaScript ऑपरेशन्स के लिए मेथड्स प्रोवाइड करना",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the output of `console.log(Math.max())`?",
    question_hi: "`console.log(Math.max())` का आउटपुट क्या है?",
    options_en: ["-Infinity", "0", "undefined", "Error"],
    options_hi: ["-Infinity", "0", "undefined", "एरर"],
    answer_en: "-Infinity",
    answer_hi: "-Infinity",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which method is used to set the prototype of an object?",
    question_hi: "ऑब्जेक्ट का प्रोटोटाइप सेट करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Object.setPrototypeOf()", "Object.prototype=", "setPrototype()", "proto="],
    options_hi: ["Object.setPrototypeOf()", "Object.prototype=", "setPrototype()", "proto="],
    answer_en: "Object.setPrototypeOf()",
    answer_hi: "Object.setPrototypeOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "What is the purpose of `Generator` functions in JavaScript?",
    question_hi: "JavaScript में `Generator` फंक्शन्स का उद्देश्य क्या है?",
    options_en: ["Create iterators that can be paused", "Generate random numbers", "Both A and B", "None of the above"],
    options_hi: ["ऐसे इटरेटर्स बनाना जिन्हें पॉज़ किया जा सके", "रैंडम नंबर्स जेनरेट करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Create iterators that can be paused",
    answer_hi: "ऐसे इटरेटर्स बनाना जिन्हें पॉज़ किया जा सके",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the output of `console.log(Math.min())`?",
    question_hi: "`console.log(Math.min())` का आउटपुट क्या है?",
    options_en: ["Infinity", "0", "undefined", "Error"],
    options_hi: ["Infinity", "0", "undefined", "एरर"],
    answer_en: "Infinity",
    answer_hi: "Infinity",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to check if a property is enumerable?",
    question_hi: "प्रॉपर्टी एन्यूमरेबल है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["propertyIsEnumerable()", "isEnumerable()", "checkEnumerable()", "enumerable()"],
    options_hi: ["propertyIsEnumerable()", "isEnumerable()", "checkEnumerable()", "enumerable()"],
    answer_en: "propertyIsEnumerable()",
    answer_hi: "propertyIsEnumerable()",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
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
    num: 24,
    question_en: "What is the output of `console.log(Array.from('hello'))`?",
    question_hi: "`console.log(Array.from('hello'))` का आउटपुट क्या है?",
    options_en: ["['h','e','l','l','o']", "'hello'", "[104,101,108,108,111]", "Error"],
    options_hi: ["['h','e','l','l','o']", "'hello'", "[104,101,108,108,111]", "एरर"],
    answer_en: "['h','e','l','l','o']",
    answer_hi: "['h','e','l','l','o']",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which method is used to get the own property symbols of an object?",
    question_hi: "ऑब्जेक्ट की ओन प्रॉपर्टी सिंबल्स पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Object.getOwnPropertySymbols()", "Object.symbols()", "getSymbols()", "propertySymbols()"],
    options_hi: ["Object.getOwnPropertySymbols()", "Object.symbols()", "getSymbols()", "propertySymbols()"],
    answer_en: "Object.getOwnPropertySymbols()",
    answer_hi: "Object.getOwnPropertySymbols()",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "What is the purpose of `Intl` object in JavaScript?",
    question_hi: "JavaScript में `Intl` ऑब्जेक्ट का उद्देश्य क्या है?",
    options_en: ["Internationalization and localization", "Internal operations", "Both A and B", "None of the above"],
    options_hi: ["इंटरनेशनलाइजेशन और लोकलाइजेशन", "इंटरनल ऑपरेशन्स", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Internationalization and localization",
    answer_hi: "इंटरनेशनलाइजेशन और लोकलाइजेशन",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the output of `console.log(new Set([1,2,3,2,1]))`?",
    question_hi: "`console.log(new Set([1,2,3,2,1]))` का आउटपुट क्या है?",
    options_en: ["Set {1,2,3}", "[1,2,3]", "{1,2,3}", "Error"],
    options_hi: ["Set {1,2,3}", "[1,2,3]", "{1,2,3}", "एरर"],
    answer_en: "Set {1,2,3}",
    answer_hi: "Set {1,2,3}",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which method is used to create a new array with mapped elements?",
    question_hi: "मैप्ड एलिमेंट्स के साथ नया ऐरे बनाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["map()", "forEach()", "filter()", "reduce()"],
    options_hi: ["map()", "forEach()", "filter()", "reduce()"],
    answer_en: "map()",
    answer_hi: "map()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `Web Workers` in JavaScript?",
    question_hi: "JavaScript में `Web Workers` का उद्देश्य क्या है?",
    options_en: ["Run scripts in background threads", "Create web applications", "Both A and B", "None of the above"],
    options_hi: ["बैकग्राउंड थ्रेड्स में स्क्रिप्ट्स चलाना", "वेब एप्लिकेशन्स बनाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Run scripts in background threads",
    answer_hi: "बैकग्राउंड थ्रेड्स में स्क्रिप्ट्स चलाना",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What is the output of `console.log([1,2,3].find(x => x > 1))`?",
    question_hi: "`console.log([1,2,3].find(x => x > 1))` का आउटपुट क्या है?",
    options_en: ["2", "1", "[2,3]", "Error"],
    options_hi: ["2", "1", "[2,3]", "एरर"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which method is used to check if a string matches a pattern?",
    question_hi: "स्ट्रिंग पैटर्न से मैच करती है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["match()", "test()", "search()", "All of the above"],
    options_hi: ["match()", "test()", "search()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "What is the purpose of `Service Workers` in JavaScript?",
    question_hi: "JavaScript में `Service Workers` का उद्देश्य क्या है?",
    options_en: ["Proxy network requests", "Enable offline functionality", "Both A and B", "None of the above"],
    options_hi: ["नेटवर्क रिक्वेस्ट्स प्रॉक्सी करना", "ऑफलाइन फंक्शनैलिटी एनेबल करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the output of `console.log(Promise.resolve(42))`?",
    question_hi: "`console.log(Promise.resolve(42))` का आउटपुट क्या है?",
    options_en: ["Promise {<fulfilled>: 42}", "42", "Promise {42}", "Error"],
    options_hi: ["Promise {<fulfilled>: 42}", "42", "Promise {42}", "एरर"],
    answer_en: "Promise {<fulfilled>: 42}",
    answer_hi: "Promise {<fulfilled>: 42}",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to get the current URL?",
    question_hi: "करेंट URL पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["window.location.href", "document.URL", "Both A and B", "None of the above"],
    options_hi: ["window.location.href", "document.URL", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the purpose of `Intersection Observer API`?",
    question_hi: "`Intersection Observer API` का उद्देश्य क्या है?",
    options_en: ["Observe element visibility", "Detect element intersection", "Both A and B", "None of the above"],
    options_hi: ["एलिमेंट विजिबिलिटी ऑब्जर्व करना", "एलिमेंट इंटरसेक्शन डिटेक्ट करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "What is the output of `console.log(navigator.userAgent)`?",
    question_hi: "`console.log(navigator.userAgent)` का आउटपुट क्या है?",
    options_en: ["Browser user agent string", "Browser name", "OS information", "All of the above"],
    options_hi: ["ब्राउज़र यूजर एजेंट स्ट्रिंग", "ब्राउज़र नाम", "OS इनफॉर्मेशन", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which method is used to play audio in JavaScript?",
    question_hi: "JavaScript में ऑडियो प्ले करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["HTMLAudioElement.play()", "AudioContext", "Both A and B", "None of the above"],
    options_hi: ["HTMLAudioElement.play()", "AudioContext", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What is the purpose of `Geolocation API`?",
    question_hi: "`Geolocation API` का उद्देश्य क्या है?",
    options_en: ["Get user's geographical location", "Track location changes", "Both A and B", "None of the above"],
    options_hi: ["यूजर की जियोग्राफिकल लोकेशन पाना", "लोकेशन चेंजेस ट्रैक करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log(document.readyState)`?",
    question_hi: "`console.log(document.readyState)` का आउटपुट क्या है?",
    options_en: ["Document loading state", "Document content", "Both A and B", "None of the above"],
    options_hi: ["डॉक्यूमेंट लोडिंग स्टेट", "डॉक्यूमेंट कंटेंट", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Document loading state",
    answer_hi: "डॉक्यूमेंट लोडिंग स्टेट",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to draw on canvas?",
    question_hi: "कैनवास पर ड्रा करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["getContext('2d')", "CanvasRenderingContext2D", "Both A and B", "None of the above"],
    options_hi: ["getContext('2d')", "CanvasRenderingContext2D", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the purpose of `WebSocket` in JavaScript?",
    question_hi: "JavaScript में `WebSocket` का उद्देश्य क्या है?",
    options_en: ["Create persistent connection between client and server", "Send real-time data", "Both A and B", "None of the above"],
    options_hi: ["क्लाइंट और सर्वर के बीच परसिस्टेंट कनेक्शन बनाना", "रियल-टाइम डेटा भेजना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "What is the output of `console.log(performance.now())`?",
    question_hi: "`console.log(performance.now())` का आउटपुट क्या है?",
    options_en: ["High-resolution timestamp", "Current time", "Both A and B", "None of the above"],
    options_hi: ["हाई-रिजॉल्यूशन टाइमस्टैम्प", "करेंट टाइम", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "High-resolution timestamp",
    answer_hi: "हाई-रिजॉल्यूशन टाइमस्टैम्प",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which method is used to store data in localStorage?",
    question_hi: "localStorage में डेटा स्टोर करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["setItem()", "store()", "save()", "All of the above"],
    options_hi: ["setItem()", "store()", "save()", "उपरोक्त सभी"],
    answer_en: "setItem()",
    answer_hi: "setItem()",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What is the purpose of `Mutation Observer`?",
    question_hi: "`Mutation Observer` का उद्देश्य क्या है?",
    options_en: ["Observe DOM changes", "Watch for element modifications", "Both A and B", "None of the above"],
    options_hi: ["DOM चेंजेस ऑब्जर्व करना", "एलिमेंट मॉडिफिकेशन्स वॉच करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the output of `console.log('Hello'.concat(' World'))`?",
    question_hi: "`console.log('Hello'.concat(' World'))` का आउटपुट क्या है?",
    options_en: ["'Hello World'", "'HelloWorld'", "['Hello','World']", "Error"],
    options_hi: ["'Hello World'", "'HelloWorld'", "['Hello','World']", "एरर"],
    answer_en: "'Hello World'",
    answer_hi: "'Hello World'",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to prevent default browser behavior?",
    question_hi: "डिफॉल्ट ब्राउज़र बिहेवियर रोकने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["preventDefault()", "stopDefault()", "cancelDefault()", "blockDefault()"],
    options_hi: ["preventDefault()", "stopDefault()", "cancelDefault()", "blockDefault()"],
    answer_en: "preventDefault()",
    answer_hi: "preventDefault()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the purpose of `requestAnimationFrame()`?",
    question_hi: "`requestAnimationFrame()` का उद्देश्य क्या है?",
    options_en: ["Schedule animation frame", "Optimize animations", "Both A and B", "None of the above"],
    options_hi: ["एनिमेशन फ्रेम शेड्यूल करना", "एनिमेशन्स ऑप्टिमाइज़ करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "What is the output of `console.log(document.querySelector('div'))`?",
    question_hi: "`console.log(document.querySelector('div'))` का आउटपुट क्या है?",
    options_en: ["First div element or null", "All div elements", "Div HTML", "Error"],
    options_hi: ["पहला div एलिमेंट या null", "सभी div एलिमेंट्स", "Div HTML", "एरर"],
    answer_en: "First div element or null",
    answer_hi: "पहला div एलिमेंट या null",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which method is used to stop event propagation?",
    question_hi: "इवेंट प्रोपेगेशन रोकने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["stopPropagation()", "cancelBubble()", "Both A and B", "None of the above"],
    options_hi: ["stopPropagation()", "cancelBubble()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What is the purpose of `class` syntax in JavaScript?",
    question_hi: "JavaScript में `class` सिंटैक्स का उद्देश्य क्या है?",
    options_en: ["Create object blueprints", "Implement inheritance", "Both A and B", "None of the above"],
    options_hi: ["ऑब्जेक्ट ब्लूप्रिंट्स बनाना", "इनहेरिटेंस इम्प्लीमेंट करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
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