const questions = [
  {
    num: 1,
    question_en: "What is the output of `console.log(3 + 4 + '5')`?",
    question_hi: "`console.log(3 + 4 + '5')` का आउटपुट क्या है?",
    options_en: ["'75'", "12", "'345'", "Error"],
    options_hi: ["'75'", "12", "'345'", "एरर"],
    answer_en: "'75'",
    answer_hi: "'75'",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which method is used to find the last index of an element in array?",
    question_hi: "ऐरे में एलिमेंट का लास्ट इंडेक्स ढूंढने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["lastIndexOf()", "findLastIndex()", "searchLast()", "indexFromEnd()"],
    options_hi: ["lastIndexOf()", "findLastIndex()", "searchLast()", "indexFromEnd()"],
    answer_en: "lastIndexOf()",
    answer_hi: "lastIndexOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does `console.log(typeof [1, 2, 3])` output?",
    question_hi: "`console.log(typeof [1, 2, 3])` क्या आउटपुट देता है?",
    options_en: ["object", "array", "undefined", "number"],
    options_hi: ["object", "array", "undefined", "number"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which method is used to check if a number is NaN?",
    question_hi: "नंबर NaN है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["isNaN()", "Number.isNaN()", "Both A and B", "None of the above"],
    options_hi: ["isNaN()", "Number.isNaN()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the purpose of `Array.prototype.reduceRight()`?",
    question_hi: "`Array.prototype.reduceRight()` का उद्देश्य क्या है?",
    options_en: ["Reduce array from right to left", "Reverse and reduce", "Both A and B", "None of the above"],
    options_hi: ["ऐरे को राइट से लेफ्ट रिड्यूस करना", "रिवर्स और रिड्यूस करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Reduce array from right to left",
    answer_hi: "ऐरे को राइट से लेफ्ट रिड्यूस करना",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the output of `console.log('5' * 3)`?",
    question_hi: "`console.log('5' * 3)` का आउटपुट क्या है?",
    options_en: ["15", "8", "NaN", "'53'"],
    options_hi: ["15", "8", "NaN", "'53'"],
    answer_en: "15",
    answer_hi: "15",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which method is used to get the primitive value of an object?",
    question_hi: "ऑब्जेक्ट की प्रिमिटिव वैल्यू पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["valueOf()", "toString()", "toPrimitive()", "getValue()"],
    options_hi: ["valueOf()", "toString()", "toPrimitive()", "getValue()"],
    answer_en: "valueOf()",
    answer_hi: "valueOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What does `console.log(Boolean('false'))` output?",
    question_hi: "`console.log(Boolean('false'))` क्या आउटपुट देता है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which method is used to create an array from arguments?",
    question_hi: "आर्गुमेंट्स से ऐरे बनाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Array.from()", "Array.of()", "Both A and B", "None of the above"],
    options_hi: ["Array.from()", "Array.of()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Array.of()",
    answer_hi: "Array.of()",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the output of `console.log(!!0)`?",
    question_hi: "`console.log(!!0)` का आउटपुट क्या है?",
    options_en: ["false", "true", "0", "undefined"],
    options_hi: ["false", "true", "0", "undefined"],
    answer_en: "false",
    answer_hi: "false",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which method is used to get the current timestamp in milliseconds?",
    question_hi: "मिलीसेकंड में करेंट टाइमस्टैम्प पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Date.now()", "new Date().getTime()", "performance.now()", "All of the above"],
    options_hi: ["Date.now()", "new Date().getTime()", "performance.now()", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the purpose of `Object.getPrototypeOf()`?",
    question_hi: "`Object.getPrototypeOf()` का उद्देश्य क्या है?",
    options_en: ["Get object's prototype", "Set object's prototype", "Check prototype chain", "Create prototype"],
    options_hi: ["ऑब्जेक्ट का प्रोटोटाइप पाना", "ऑब्जेक्ट का प्रोटोटाइप सेट करना", "प्रोटोटाइप चेन चेक करना", "प्रोटोटाइप बनाना"],
    answer_en: "Get object's prototype",
    answer_hi: "ऑब्जेक्ट का प्रोटोटाइप पाना",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the output of `console.log([1, 2, 3].toString())`?",
    question_hi: "`console.log([1, 2, 3].toString())` का आउटपुट क्या है?",
    options_en: ["'1,2,3'", "[1,2,3]", "'123'", "Error"],
    options_hi: ["'1,2,3'", "[1,2,3]", "'123'", "एरर"],
    answer_en: "'1,2,3'",
    answer_hi: "'1,2,3'",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which method is used to check if an object is prototype of another?",
    question_hi: "ऑब्जेक्ट दूसरे का प्रोटोटाइप है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["isPrototypeOf()", "instanceof", "Both A and B", "None of the above"],
    options_hi: ["isPrototypeOf()", "instanceof", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "isPrototypeOf()",
    answer_hi: "isPrototypeOf()",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the output of `console.log(Number(''))`?",
    question_hi: "`console.log(Number(''))` का आउटपुट क्या है?",
    options_en: ["0", "NaN", "''", "Error"],
    options_hi: ["0", "NaN", "''", "एरर"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which method is used to get the day of the week from a date?",
    question_hi: "डेट से वीक का दिन पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["getDay()", "getDate()", "getWeekDay()", "getWeek()"],
    options_hi: ["getDay()", "getDate()", "getWeekDay()", "getWeek()"],
    answer_en: "getDay()",
    answer_hi: "getDay()",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the purpose of `String.prototype.trim()`?",
    question_hi: "`String.prototype.trim()` का उद्देश्य क्या है?",
    options_en: ["Remove whitespace from both ends", "Remove all whitespace", "Trim specific characters", "None of the above"],
    options_hi: ["दोनों साइड्स से व्हाइटस्पेस हटाना", "सभी व्हाइटस्पेस हटाना", "स्पेसिफिक कैरेक्टर्स ट्रिम करना", "उपरोक्त में से कोई नहीं"],
    answer_en: "Remove whitespace from both ends",
    answer_hi: "दोनों साइड्स से व्हाइटस्पेस हटाना",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the output of `console.log(undefined == null)`?",
    question_hi: "`console.log(undefined == null)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which method is used to get the exponential notation of a number?",
    question_hi: "नंबर की एक्सपोनेंशियल नोटेशन पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["toExponential()", "toScientific()", "toExp()", "scientific()"],
    options_hi: ["toExponential()", "toScientific()", "toExp()", "scientific()"],
    answer_en: "toExponential()",
    answer_hi: "toExponential()",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "What is the purpose of `Array.prototype.copyWithin()`?",
    question_hi: "`Array.prototype.copyWithin()` का उद्देश्य क्या है?",
    options_en: ["Copy array elements within the array", "Copy to another array", "Both A and B", "None of the above"],
    options_hi: ["ऐरे के अंदर ऐरे एलिमेंट्स कॉपी करना", "दूसरे ऐरे में कॉपी करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Copy array elements within the array",
    answer_hi: "ऐरे के अंदर ऐरे एलिमेंट्स कॉपी करना",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the output of `console.log(+true)`?",
    question_hi: "`console.log(+true)` का आउटपुट क्या है?",
    options_en: ["1", "0", "true", "NaN"],
    options_hi: ["1", "0", "true", "NaN"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which method is used to get the Unicode of a character?",
    question_hi: "कैरेक्टर का यूनिकोड पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["codePointAt()", "charCodeAt()", "Both A and B", "None of the above"],
    options_hi: ["codePointAt()", "charCodeAt()", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the purpose of `Object.preventExtensions()`?",
    question_hi: "`Object.preventExtensions()` का उद्देश्य क्या है?",
    options_en: ["Prevent adding new properties", "Allow modifying existing", "Both A and B", "None of the above"],
    options_hi: ["नई प्रॉपर्टीज जोड़ने से रोकना", "एग्जिस्टिंग प्रॉपर्टीज मॉडिफाई करने देना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Prevent adding new properties",
    answer_hi: "नई प्रॉपर्टीज जोड़ने से रोकना",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What is the output of `console.log('Hello'.slice(1, 4))`?",
    question_hi: "`console.log('Hello'.slice(1, 4))` का आउटपुट क्या है?",
    options_en: ["'ell'", "'Hel'", "'ello'", "'Hell'"],
    options_hi: ["'ell'", "'Hel'", "'ello'", "'Hell'"],
    answer_en: "'ell'",
    answer_hi: "'ell'",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which method is used to check if a value is array?",
    question_hi: "वैल्यू ऐरे है या नहीं चेक करने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Array.isArray()", "instanceof Array", "Both A and B", "None of the above"],
    options_hi: ["Array.isArray()", "instanceof Array", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "What is the purpose of `String.prototype.padStart()`?",
    question_hi: "`String.prototype.padStart()` का उद्देश्य क्या है?",
    options_en: ["Pad string from start", "Add padding to beginning", "Both A and B", "None of the above"],
    options_hi: ["स्ट्रिंग को स्टार्ट से पैड करना", "शुरुआत में पैडिंग जोड़ना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
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
    num: 28,
    question_en: "Which method is used to get the absolute value of a number?",
    question_hi: "नंबर की एब्सोल्यूट वैल्यू पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.abs()", "Math.absolute()", "abs()", "absolute()"],
    options_hi: ["Math.abs()", "Math.absolute()", "abs()", "absolute()"],
    answer_en: "Math.abs()",
    answer_hi: "Math.abs()",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the purpose of `Promise.race()`?",
    question_hi: "`Promise.race()` का उद्देश्य क्या है?",
    options_en: ["Wait for first promise to settle", "Wait for all promises", "Handle promise errors", "Create promise race"],
    options_hi: ["पहली प्रॉमिस के सेटल होने का इंतज़ार करना", "सभी प्रॉमिसेस का इंतज़ार करना", "प्रॉमिस एरर्स हैंडल करना", "प्रॉमिस रेस बनाना"],
    answer_en: "Wait for first promise to settle",
    answer_hi: "पहली प्रॉमिस के सेटल होने का इंतज़ार करना",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What is the output of `console.log([...[1,2],...[3,4]])`?",
    question_hi: "`console.log([...[1,2],...[3,4]])` का आउटपुट क्या है?",
    options_en: ["[1,2,3,4]", "[[1,2],[3,4]]", "[1,2,[3,4]]", "Error"],
    options_hi: ["[1,2,3,4]", "[[1,2],[3,4]]", "[1,2,[3,4]]", "एरर"],
    answer_en: "[1,2,3,4]",
    answer_hi: "[1,2,3,4]",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which method is used to convert a string to lowercase?",
    question_hi: "स्ट्रिंग को लोअरकेस में बदलने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["toLowerCase()", "toLower()", "lowerCase()", "caseLower()"],
    options_hi: ["toLowerCase()", "toLower()", "lowerCase()", "caseLower()"],
    answer_en: "toLowerCase()",
    answer_hi: "toLowerCase()",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "What is the purpose of `Object.defineProperty()`?",
    question_hi: "`Object.defineProperty()` का उद्देश्य क्या है?",
    options_en: ["Define new property with descriptors", "Modify existing property", "Both A and B", "None of the above"],
    options_hi: ["डिस्क्रिप्टर्स के साथ नई प्रॉपर्टी डिफाइन करना", "एग्जिस्टिंग प्रॉपर्टी मॉडिफाई करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the output of `console.log(0 || 'default')`?",
    question_hi: "`console.log(0 || 'default')` का आउटपुट क्या है?",
    options_en: ["'default'", "0", "false", "Error"],
    options_hi: ["'default'", "0", "false", "एरर"],
    answer_en: "'default'",
    answer_hi: "'default'",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which method is used to get the power of a number?",
    question_hi: "नंबर की पावर पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.pow()", "** operator", "Both A and B", "None of the above"],
    options_hi: ["Math.pow()", "** ऑपरेटर", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the purpose of `Array.prototype.fill()`?",
    question_hi: "`Array.prototype.fill()` का उद्देश्य क्या है?",
    options_en: ["Fill array with static value", "Replace all elements", "Both A and B", "None of the above"],
    options_hi: ["ऐरे को स्टेटिक वैल्यू से भरना", "सभी एलिमेंट्स रिप्लेस करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "What is the output of `console.log(typeof new Date())`?",
    question_hi: "`console.log(typeof new Date())` का आउटपुट क्या है?",
    options_en: ["object", "date", "string", "number"],
    options_hi: ["object", "date", "string", "number"],
    answer_en: "object",
    answer_hi: "object",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which method is used to get the natural logarithm of a number?",
    question_hi: "नंबर का नेचुरल लॉगरिदम पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.log()", "Math.ln()", "log()", "naturalLog()"],
    options_hi: ["Math.log()", "Math.ln()", "log()", "naturalLog()"],
    answer_en: "Math.log()",
    answer_hi: "Math.log()",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What is the purpose of `String.prototype.match()`?",
    question_hi: "`String.prototype.match()` का उद्देश्य क्या है?",
    options_en: ["Match string against regex", "Find substring", "Both A and B", "None of the above"],
    options_hi: ["स्ट्रिंग को रेगेक्स के खिलाफ मैच करना", "सबस्ट्रिंग ढूंढना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Match string against regex",
    answer_hi: "स्ट्रिंग को रेगेक्स के खिलाफ मैच करना",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the output of `console.log([] instanceof Array)`?",
    question_hi: "`console.log([] instanceof Array)` का आउटपुट क्या है?",
    options_en: ["true", "false", "undefined", "Error"],
    options_hi: ["true", "false", "undefined", "एरर"],
    answer_en: "true",
    answer_hi: "true",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which method is used to get the cosine of a number?",
    question_hi: "नंबर का कोसाइन पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.cos()", "Math.cosine()", "cos()", "cosine()"],
    options_hi: ["Math.cos()", "Math.cosine()", "cos()", "cosine()"],
    answer_en: "Math.cos()",
    answer_hi: "Math.cos()",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the purpose of `Array.prototype.entries()`?",
    question_hi: "`Array.prototype.entries()` का उद्देश्य क्या है?",
    options_en: ["Return key-value pairs", "Get array iterator", "Both A and B", "None of the above"],
    options_hi: ["की-वैल्यू पेयर्स रिटर्न करना", "ऐरे इटरेटर पाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "What is the output of `console.log('Hello'.charAt(1))`?",
    question_hi: "`console.log('Hello'.charAt(1))` का आउटपुट क्या है?",
    options_en: ["'e'", "'H'", "'l'", "'o'"],
    options_hi: ["'e'", "'H'", "'l'", "'o'"],
    answer_en: "'e'",
    answer_hi: "'e'",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which method is used to get the sine of a number?",
    question_hi: "नंबर का साइन पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.sin()", "Math.sine()", "sin()", "sine()"],
    options_hi: ["Math.sin()", "Math.sine()", "sin()", "sine()"],
    answer_en: "Math.sin()",
    answer_hi: "Math.sin()",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What is the purpose of `Object.is()`?",
    question_hi: "`Object.is()` का उद्देश्य क्या है?",
    options_en: ["Compare values strictly", "Check object equality", "Both A and B", "None of the above"],
    options_hi: ["वैल्यूज को स्ट्रिक्टली कंपेयर करना", "ऑब्जेक्ट इक्वलिटी चेक करना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the output of `console.log(Number.MAX_SAFE_INTEGER)`?",
    question_hi: "`console.log(Number.MAX_SAFE_INTEGER)` का आउटपुट क्या है?",
    options_en: ["9007199254740991", "Infinity", "Number limit", "Error"],
    options_hi: ["9007199254740991", "Infinity", "नंबर लिमिट", "एरर"],
    answer_en: "9007199254740991",
    answer_hi: "9007199254740991",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which method is used to get the tangent of a number?",
    question_hi: "नंबर का टैन्जेंट पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.tan()", "Math.tangent()", "tan()", "tangent()"],
    options_hi: ["Math.tan()", "Math.tangent()", "tan()", "tangent()"],
    answer_en: "Math.tan()",
    answer_hi: "Math.tan()",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the purpose of `Array.prototype.values()`?",
    question_hi: "`Array.prototype.values()` का उद्देश्य क्या है?",
    options_en: ["Return array values iterator", "Get all values", "Both A and B", "None of the above"],
    options_hi: ["ऐरे वैल्यूज इटरेटर रिटर्न करना", "सभी वैल्यूज पाना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "What is the output of `console.log(Math.PI)`?",
    question_hi: "`console.log(Math.PI)` का आउटपुट क्या है?",
    options_en: ["3.141592653589793", "3.14", "22/7", "π"],
    options_hi: ["3.141592653589793", "3.14", "22/7", "π"],
    answer_en: "3.141592653589793",
    answer_hi: "3.141592653589793",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which method is used to get the base 10 logarithm of a number?",
    question_hi: "नंबर का बेस 10 लॉगरिदम पाने के लिए कौन-सी मेथड उपयोग होती है?",
    options_en: ["Math.log10()", "Math.log(10)", "log10()", "Both A and B"],
    options_hi: ["Math.log10()", "Math.log(10)", "log10()", "A और B दोनों"],
    answer_en: "Math.log10()",
    answer_hi: "Math.log10()",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What is the purpose of `String.prototype.search()`?",
    question_hi: "`String.prototype.search()` का उद्देश्य क्या है?",
    options_en: ["Search for regex match", "Find substring index", "Both A and B", "None of the above"],
    options_hi: ["रेगेक्स मैच ढूंढना", "सबस्ट्रिंग इंडेक्स ढूंढना", "A और B दोनों", "उपरोक्त में से कोई नहीं"],
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