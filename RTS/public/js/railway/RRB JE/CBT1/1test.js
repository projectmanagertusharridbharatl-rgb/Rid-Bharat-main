const questions = [
  {
    num: 1,
    question_en: "Which is the hardest natural substance?",
    question_hi: "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    options_en: ["Iron", "Diamond", "Gold", "Silver"],
    options_hi: ["लोहा", "हीरा", "सोना", "चांदी"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the SI unit of force?",
    question_hi: "बल की एसआई इकाई क्या है?",
    options_en: ["Joule", "Newton", "Watt", "Pascal"],
    options_hi: ["जूल", "न्यूटन", "वाट", "पास्कल"],
    answer_en: "Newton",
    answer_hi: "न्यूटन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which gas is most abundant in Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे प्रचुर गैस कौन सी है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which part of the plant conducts photosynthesis?",
    question_hi: "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
    options_en: ["Root", "Stem", "Leaf", "Flower"],
    options_hi: ["जड़", "तना", "पत्ती", "फूल"],
    answer_en: "Leaf",
    answer_hi: "पत्ती",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the capital of India?",
    question_hi: "भारत की राजधानी क्या है?",
    options_en: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    options_hi: ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
    answer_en: "Delhi",
    answer_hi: "दिल्ली",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which operator is used to add two values?",
    question_hi: "दो मानों को जोड़ने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["+", "-", "*", "/"],
    options_hi: ["+", "-", "*", "/"],
    answer_en: "Addition operator '+'",
    answer_hi: "जोड़ने वाला ऑपरेटर '+' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which operator is used to subtract one value from another?",
    question_hi: "एक मान से दूसरे मान को घटाने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["-", "+", "*", "/"],
    options_hi: ["-", "+", "*", "/"],
    answer_en: "Subtraction operator '-'",
    answer_hi: "घटाने वाला ऑपरेटर '-' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which operator is used to multiply two values?",
    question_hi: "दो मानों को गुणा करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["*", "/", "%", "+"],
    options_hi: ["*", "/", "%", "+"],
    answer_en: "Multiplication operator '*'",
    answer_hi: "गुणा करने वाला ऑपरेटर '*' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which operator is used to divide one value by another?",
    question_hi: "एक मान को दूसरे मान से विभाजित करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["/", "*", "-", "+"],
    options_hi: ["/", "*", "-", "+"],
    answer_en: "Division operator '/'",
    answer_hi: "विभाजन करने वाला ऑपरेटर '/' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which operator is used to find the remainder of a division?",
    question_hi: "विभाजन के बाद शेषफल (remainder) प्राप्त करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["%", "/", "*", "+"],
    options_hi: ["%", "/", "*", "+"],
    answer_en: "Modulus operator '%'",
    answer_hi: "शेषफल प्राप्त करने वाला ऑपरेटर '%' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which operator is used to increment a value by 1?",
    question_hi: "किसी मान को 1 से बढ़ाने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["++", "--", "+=", "-="],
    options_hi: ["++", "--", "+=", "-="],
    answer_en: "Increment operator '++'",
    answer_hi: "मान को 1 से बढ़ाने वाला ऑपरेटर '++' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which operator is used to decrement a value by 1?",
    question_hi: "किसी मान को 1 से घटाने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["--", "++", "-=", "+="],
    options_hi: ["--", "++", "-=", "+="],
    answer_en: "Decrement operator '--'",
    answer_hi: "मान को 1 से घटाने वाला ऑपरेटर '--' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which operator is used to compare two values for equality?",
    question_hi: "दो मानों की समानता की तुलना करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["==", "=", "===", "!="],
    options_hi: ["==", "=", "===", "!="],
    answer_en: "Equality operator '=='",
    answer_hi: "समानता की तुलना करने वाला ऑपरेटर '==' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which operator is used to compare two values for inequality?",
    question_hi: "दो मानों की असमानता की तुलना करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["!=", "==", ">", "<"],
    options_hi: ["!=", "==", ">", "<"],
    answer_en: "Not equal to operator '!='",
    answer_hi: "असमानता की तुलना करने वाला ऑपरेटर '!=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which operator is used to compare if one value is greater than another?",
    question_hi: "एक मान दूसरे मान से बड़ा है या नहीं यह तुलना करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: [">", "<", ">=", "<="],
    options_hi: [">", "<", ">=", "<="],
    answer_en: "Greater than operator '>'",
    answer_hi: "बड़ा होने की तुलना करने वाला ऑपरेटर '>' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which operator is used to compare if one value is less than another?",
    question_hi: "एक मान दूसरे मान से छोटा है या नहीं यह तुलना करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["<", ">", "<=", ">="],
    options_hi: ["<", ">", "<=", ">="],
    answer_en: "Less than operator '<'",
    answer_hi: "छोटा होने की तुलना करने वाला ऑपरेटर '<' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which operator is used to subtract one value from another?",
    question_hi: "एक मान से दूसरे मान को घटाने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["-", "+", "*", "/"],
    options_hi: ["-", "+", "*", "/"],
    answer_en: "Subtraction operator '-'",
    answer_hi: "घटाने वाला ऑपरेटर '-' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which operator is used to assign a value to a variable?",
    question_hi: "Variable को मान असाइन करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "==", "===", "+="],
    options_hi: ["=", "==", "===", "+="],
    answer_en: "Assignment operator '='",
    answer_hi: "असाइनमेंट ऑपरेटर '=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which operator is used to add a value to a variable?",
    question_hi: "Variable में मान जोड़ने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "+", "+=", "-="],
    options_hi: ["=", "+", "+=", "-="],
    answer_en: "Addition assignment operator '+='",
    answer_hi: "जोड़ असाइनमेंट ऑपरेटर '+=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which operator is used to subtract a value from a variable?",
    question_hi: "Variable से मान घटाने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "-", "-=", "+="],
    options_hi: ["=", "-", "-=", "+="],
    answer_en: "Subtraction assignment operator '-='",
    answer_hi: "घटाव असाइनमेंट ऑपरेटर '-=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which operator is used to multiply a variable by a value?",
    question_hi: "Variable को मान से गुणा करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "*", "*=", "/="],
    options_hi: ["=", "*", "*=", "/="],
    answer_en: "Multiplication assignment operator '*='",
    answer_hi: "गुणा असाइनमेंट ऑपरेटर '*=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which operator is used to divide a variable by a value?",
    question_hi: "Variable को मान से भाग देने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "/", "/=", "*="],
    options_hi: ["=", "/", "/=", "*="],
    answer_en: "Division assignment operator '/='",
    answer_hi: "भाग असाइनमेंट ऑपरेटर '/=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which operator is used to assign the remainder of a division to a variable?",
    question_hi: "विभाजन के remainder को variable में assign करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "%", "%=", "/="],
    options_hi: ["=", "%", "%=", "/="],
    answer_en: "Remainder assignment operator '%='",
    answer_hi: "शेष असाइनमेंट ऑपरेटर '%=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which operator is used to raise a variable to the power of a value?",
    question_hi: "Variable को मान की शक्ति में raise करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "**", "**=", "*="],
    options_hi: ["=", "**", "**=", "*="],
    answer_en: "Exponentiation assignment operator '**='",
    answer_hi: "एक्सपोनेंटिएशन असाइनमेंट ऑपरेटर '**=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which operator is used to assign a value to a variable only if it's null or undefined?",
    question_hi: "यदि variable null या undefined है तो default मान assign करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "??=", "||=", "&&="],
    options_hi: ["=", "??=", "||=", "&&="],
    answer_en: "Nullish coalescing assignment operator '??='",
    answer_hi: "नलिश कोलेसिंग असाइनमेंट ऑपरेटर '??=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which operator is used to assign a value to a variable only if it's falsy?",
    question_hi: "यदि variable falsy है तो ही मान assign करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "??=", "||=", "&&="],
    options_hi: ["=", "??=", "||=", "&&="],
    answer_en: "Logical OR assignment operator '||='",
    answer_hi: "लॉजिकल OR असाइनमेंट ऑपरेटर '||=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the smallest unit of life?",
    question_hi: "जीवन की सबसे छोटी इकाई क्या है?",
    options_en: ["Tissue", "Cell", "Organ", "Molecule"],
    options_hi: ["ऊतक", "कोशिका", "अंग", "अणु"],
    answer_en: "Cell",
    answer_hi: "कोशिका",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which operator is used to assign a value to a variable only if it's null or undefined?",
    question_hi: "यदि वेरिएबल null या undefined है, तो ही मान असाइन करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "??=", "||=", "&&="],
    options_hi: ["=", "??=", "||=", "&&="],
    answer_en: "Nullish coalescing assignment operator '??='",
    answer_hi: "नलिश कोलेसिंग असाइनमेंट ऑपरेटर '??=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which operator is used to assign a value to a variable only if it's falsy?",
    question_hi: "यदि वेरिएबल falsy है, तो ही मान असाइन करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "??=", "||=", "&&="],
    options_hi: ["=", "??=", "||=", "&&="],
    answer_en: "Logical OR assignment operator '||='",
    answer_hi: "लॉजिकल OR असाइनमेंट ऑपरेटर '||=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which operator is used to assign a value to a variable only if it's truthy?",
    question_hi: "यदि वेरिएबल truthy है, तो ही मान असाइन करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "??=", "||=", "&&="],
    options_hi: ["=", "??=", "||=", "&&="],
    answer_en: "Logical AND assignment operator '&&='",
    answer_hi: "लॉजिकल AND असाइनमेंट ऑपरेटर '&&=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the result of the expression `x += y *= z`?",
    question_hi: "व्यक्तित्व `x += y *= z` का परिणाम क्या होगा?",
    options_en: ["x = x + (y * z)", "x = (x + y) * z", "x = x + y + z", "x = x * y * z"],
    options_hi: ["x = x + (y * z)", "x = (x + y) * z", "x = x + y + z", "x = x * y * z"],
    answer_en: "x = x + (y * z)",
    answer_hi: "x = x + (y * z)",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "What is the result of the expression `x %= y`?",
    question_hi: "व्यक्तित्व `x %= y` का परिणाम क्या होगा?",
    options_en: ["x = x % y", "x = x * y", "x = x / y", "x = x + y"],
    options_hi: ["x = x % y", "x = x * y", "x = x / y", "x = x + y"],
    answer_en: "x = x % y",
    answer_hi: "x = x % y",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which operator is used to assign a value to a variable?",
    question_hi: "वेरिएबल को मान असाइन करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "==", "===", "+="],
    options_hi: ["=", "==", "===", "+="],
    answer_en: "Assignment operator '='",
    answer_hi: "असाइनमेंट ऑपरेटर '=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which operator is used to add a value to a variable?",
    question_hi: "वेरिएबल में मान जोड़ने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "+", "+=", "-="],
    options_hi: ["=", "+", "+=", "-="],
    answer_en: "Addition assignment operator '+='",
    answer_hi: "जोड़ असाइनमेंट ऑपरेटर '+=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which operator is used to subtract a value from a variable?",
    question_hi: "वेरिएबल से मान घटाने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "-", "-=", "+="],
    options_hi: ["=", "-", "-=", "+="],
    answer_en: "Subtraction assignment operator '-='",
    answer_hi: "घटाव असाइनमेंट ऑपरेटर '-=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which operator is used to multiply a variable by a value?",
    question_hi: "वेरिएबल को मान से गुणा करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["=", "*", "*=", "/="],
    options_hi: ["=", "*", "*=", "/="],
    answer_en: "Multiplication assignment operator '*='",
    answer_hi: "गुणा असाइनमेंट ऑपरेटर '*=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What does the increment operator '++' do?",
    question_hi: "इन्क्रीमेंट ऑपरेटर '++' क्या करता है?",
    options_en: ["Increases a variable's value by 1", "Decreases a variable's value by 1", "Assigns a value", "Checks equality"],
    options_hi: ["वेरिएबल के मान को 1 से बढ़ाता है", "वेरिएबल के मान को 1 से घटाता है", "मान असाइन करता है", "समानता जांचता है"],
    answer_en: "Increases a variable's value by 1",
    answer_hi: "वेरिएबल के मान को 1 से बढ़ाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What is the purpose of the decrement operator '--'?",
    question_hi: "डिक्रिमेंट ऑपरेटर '--' का क्या उद्देश्य है?",
    options_en: ["Decreases a variable's value by 1", "Increases a variable's value by 1", "Assigns a value", "Checks inequality"],
    options_hi: ["वेरिएबल के मान को 1 से घटाता है", "वेरिएबल के मान को 1 से बढ़ाता है", "मान असाइन करता है", "असमानता जांचता है"],
    answer_en: "Decreases a variable's value by 1",
    answer_hi: "वेरिएबल के मान को 1 से घटाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which operator is used to concatenate two strings?",
    question_hi: "दो स्ट्रिंग्स को जोड़ने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["+", "-", "*", "/"],
    options_hi: ["+", "-", "*", "/"],
    answer_en: "The '+' operator",
    answer_hi: "'+' ऑपरेटर",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the output of `typeof null` in JavaScript?",
    question_hi: "JavaScript में `typeof null` का आउटपुट क्या होगा?",
    options_en: ["'object'", "'null'", "'undefined'", "'boolean'"],
    options_hi: ["'object'", "'null'", "'undefined'", "'boolean'"],
    answer_en: "'object'",
    answer_hi: "'object'",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which operator is used to divide a variable by a value?",
    question_hi: "वेरिएबल को मान से भाग देने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["/", "/=", "*=", "-="],
    options_hi: ["/", "/=", "*=", "-="],
    answer_en: "Division assignment operator '/='",
    answer_hi: "भाग असाइनमेंट ऑपरेटर '/=' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "What does the modulus operator '%' do?",
    question_hi: "मॉड्यूलस ऑपरेटर '%' क्या करता है?",
    options_en: ["Gives the remainder of division", "Divides two numbers", "Multiplies two numbers", "Adds two numbers"],
    options_hi: ["भाग करने पर शेषफल देता है", "दो संख्याओं को भाग देता है", "दो संख्याओं को गुणा करता है", "दो संख्याओं को जोड़ता है"],
    answer_en: "Gives the remainder of division",
    answer_hi: "भाग करने पर शेषफल देता है",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which operator is used to check equality of value and type?",
    question_hi: "मान और प्रकार की समानता जांचने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    options_en: ["===", "==", "=", "!="],
    options_hi: ["===", "==", "=", "!="],
    answer_en: "Strict equality operator '==='",
    answer_hi: "सख्त समानता ऑपरेटर '===' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which operator checks equality of value but ignores type?",
    question_hi: "मान की समानता जांचता है लेकिन प्रकार को नजरअंदाज करता है, ऐसा कौन सा ऑपरेटर है?",
    options_en: ["==", "===", "=", "!="],
    options_hi: ["==", "===", "=", "!="],
    answer_en: "Equality operator '=='",
    answer_hi: "समानता ऑपरेटर '==' होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What does the '!=' operator do?",
    question_hi: "'!=' ऑपरेटर क्या करता है?",
    options_en: ["Checks if two values are not equal", "Assigns a value", "Adds two numbers", "Checks if two values are equal"],
    options_hi: ["जांचता है कि दो मान समान नहीं हैं", "मान असाइन करता है", "दो संख्याओं को जोड़ता है", "जांचता है कि दो मान समान हैं"],
    answer_en: "Checks if two values are not equal",
    answer_hi: "जांचता है कि दो मान समान नहीं हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the use of the logical AND operator '&&'?",
    question_hi: "लॉजिकल AND ऑपरेटर '&&' का उपयोग क्या है?",
    options_en: ["Returns true if both operands are true", "Returns true if any operand is true", "Assigns value", "Returns false always"],
    options_hi: ["सत्य लौटाता है यदि दोनों ऑपरेण्ड सत्य हों", "सत्य लौटाता है यदि कोई भी ऑपरेण्ड सत्य हो", "मान असाइन करता है", "हमेशा असत्य लौटाता है"],
    answer_en: "Returns true if both operands are true",
    answer_hi: "सत्य लौटाता है यदि दोनों ऑपरेण्ड सत्य हों",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What does the logical OR operator '||' do?",
    question_hi: "लॉजिकल OR ऑपरेटर '||' क्या करता है?",
    options_en: ["Returns true if at least one operand is true", "Returns true only if both are true", "Assigns value", "Returns false always"],
    options_hi: ["सत्य लौटाता है यदि कम से कम एक ऑपरेण्ड सत्य हो", "सत्य लौटाता है केवल अगर दोनों सत्य हों", "मान असाइन करता है", "हमेशा असत्य लौटाता है"],
    answer_en: "Returns true if at least one operand is true",
    answer_hi: "सत्य लौटाता है यदि कम से कम एक ऑपरेण्ड सत्य हो",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "What is the ternary operator used for?",
    question_hi: "टर्नरी ऑपरेटर किस काम के लिए उपयोग होता है?",
    options_en: ["To perform a conditional operation", "To assign a value", "To add numbers", "To compare values"],
    options_hi: ["शर्तीय ऑपरेशन करने के लिए", "मान असाइन करने के लिए", "संख्या जोड़ने के लिए", "मानों की तुलना के लिए"],
    answer_en: "To perform a conditional operation",
    answer_hi: "शर्तीय ऑपरेशन करने के लिए",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the output of `console.log(typeof NaN)`?",
    question_hi: "`console.log(typeof NaN)` का आउटपुट क्या होगा?",
    options_en: ["'number'", "'NaN'", "'undefined'", "'object'"],
    options_hi: ["'number'", "'NaN'", "'undefined'", "'object'"],
    answer_en: "'number'",
    answer_hi: "'number'",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which operator is used to assign a value to a variable?",
    question_hi: "Variable को value assign करने के लिए कौन सा operator उपयोग होता है?",
    options_en: ["=", "==", "===", "+="],
    options_hi: ["=", "==", "===", "+="],
    answer_en: "Assignment operator '='",
    answer_hi: "असाइनमेंट ऑपरेटर '=' होता है",
    attempted: false,
    selected: ""
  }
];
let currentQuestion = 0;
let language = "en"; // Default English
let timeLeft = 10800; // 5-minute timer
let timerInterval;

function loadQuestion(index) {
        const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
        const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

        document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
        document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

        const optionsElement = document.getElementById("options");
        optionsElement.innerHTML = "";

        optionsArray.forEach(option => {
                optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
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
        let confirmation = confirm("Are you sure you want to submit the test?");
        if (!confirmation) return;

        clearInterval(timerInterval);

        let attempted = 0, notAttempted = 0, score = 0;
        const results = [];

        questions.forEach(q => {
                if (q.attempted) {
                        attempted++;
                        if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                                score++;
                        }
                } else {
                        notAttempted++;
                }
                results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
        });

        localStorage.setItem("attempted", attempted);
        localStorage.setItem("notAttempted", notAttempted);
        localStorage.setItem("score", score);
        localStorage.setItem("results", JSON.stringify(results));

        let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
        if (viewResult) {
                window.location.href = "/RTS/Public/Deshbord/category/test/submit-test.html";
        }
}

function startTimer() {
        const timerElement = document.getElementById("timer");
        timeLeft = 180 * 60; // Convert 180 minutes to seconds (180 × 60)

        timerInterval = setInterval(() => {
                if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        alert("Time's up! Submitting the quiz automatically.");
                        submitQuiz();
                } else {
                        const hours = Math.floor(timeLeft / 3600);
                        const minutes = Math.floor((timeLeft % 3600) / 60);
                        const seconds = timeLeft % 60;

                        // Format as HH:MM:SS with leading zeros
                        timerElement.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                        timeLeft--;
                }
        }, 1000);
}
function updateNavigation() {
        const navElement = document.getElementById("circleContainer");
        navElement.innerHTML = "";

        questions.forEach((q, index) => {
                let color = "gray"; // Default not visited
                if (q.attempted) {
                        color = "green"; // Answered
                }
                if (q.selected === "") {
                        color = "gray"; // Not answered
                }
                if (index === currentQuestion) {
                        color = "blue"; // Current question
                }
                navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
        });
}

window.onload = function () {
        loadQuestion(currentQuestion);
        startTimer();
};
