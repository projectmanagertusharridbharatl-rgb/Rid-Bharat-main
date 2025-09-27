// # relationsAndFunctions (unit-1)
const questions = [
     {
    num: 1,
    question_en: "What is the domain of the function f(x) = 1/x?",
    question_hi: "फलन f(x) = 1/x का परिभाग क्या है?",
    options_en: ["x ≠ 0", "x > 0", "x < 0", "x = 0"],
    options_hi: ["x ≠ 0", "x > 0", "x < 0", "x = 0"],
    answer_en: "x ≠ 0",
    answer_hi: "x ≠ 0",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the range of the function f(x) = x²?",
    question_hi: "फलन f(x) = x² का मान कहाँ है?",
    options_en: ["y ≥ 0", "y ≤ 0", "y > 0", "y < 0"],
    options_hi: ["y ≥ 0", "y ≤ 0", "y > 0", "y < 0"],
    answer_en: "y ≥ 0",
    answer_hi: "y ≥ 0",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "If f(x) = √(x - 3), what is the domain of f?",
    question_hi: "यदि f(x) = √(x - 3) है, तो इसका परिभाग क्या होगा?",
    options_en: ["x ≥ 3", "x > 3", "x ≤ 3", "x < 3"],
    options_hi: ["x ≥ 3", "x > 3", "x ≤ 3", "x < 3"],
    answer_en: "x ≥ 3",
    answer_hi: "x ≥ 3",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "The function f(x) = |x| is:",
    question_hi: "फलन f(x) = |x| क्या है?",
    options_en: ["Even", "Odd", "Neither", "Both"],
    options_hi: ["सम", "विषम", "न तो सम न विषम", "दोनों"],
    answer_en: "Even",
    answer_hi: "सम",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "For which values of x is f(x) = ln(x) defined?",
    question_hi: "किस x मानों के लिए f(x) = ln(x) परिभाषित है?",
    options_en: ["x > 0", "x ≥ 0", "x < 0", "x ≤ 0"],
    options_hi: ["x > 0", "x ≥ 0", "x < 0", "x ≤ 0"],
    answer_en: "x > 0",
    answer_hi: "x > 0",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "The function f(x) = sin(x) is:",
    question_hi: "फलन f(x) = sin(x) क्या है?",
    options_en: ["Odd", "Even", "Neither", "Constant"],
    options_hi: ["विषम", "सम", "न तो सम न विषम", "स्थिर"],
    answer_en: "Odd",
    answer_hi: "विषम",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "If f(x) = x³, then f(-x) equals:",
    question_hi: "यदि f(x) = x³ है, तो f(-x) कितना होगा?",
    options_en: ["-x³", "x³", "-3x²", "3x²"],
    options_hi: ["-x³", "x³", "-3x²", "3x²"],
    answer_en: "-x³",
    answer_hi: "-x³",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "The function f(x) = e^x is defined for:",
    question_hi: "फलन f(x) = e^x किसके लिए परिभाषित है?",
    options_en: ["All real numbers", "x > 0", "x ≥ 0", "x < 0"],
    options_hi: ["सभी वास्तविक संख्याएं", "x > 0", "x ≥ 0", "x < 0"],
    answer_en: "All real numbers",
    answer_hi: "सभी वास्तविक संख्याएं",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which of the following is a one-one function?",
    question_hi: "निम्नलिखित में से कौन-सा एक-से-एक फलन है?",
    options_en: ["f(x) = x²", "f(x) = x³", "f(x) = |x|", "f(x) = sin(x)"],
    options_hi: ["f(x) = x²", "f(x) = x³", "f(x) = |x|", "f(x) = sin(x)"],
    answer_en: "f(x) = x³",
    answer_hi: "f(x) = x³",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the range of f(x) = sin(x)?",
    question_hi: "फलन f(x) = sin(x) का मान कहाँ है?",
    options_en: ["[-1,1]", "[0,1]", "[-∞, ∞]", "[0,∞)"],
    options_hi: ["[-1,1]", "[0,1]", "[-∞, ∞]", "[0,∞)"],
    answer_en: "[-1,1]",
    answer_hi: "[-1,1]",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "If f(x) = 2x + 3, find f(2).",
    question_hi: "यदि f(x) = 2x + 3 है, तो f(2) का मान ज्ञात करें।",
    options_en: ["7", "4", "8", "10"],
    options_hi: ["7", "4", "8", "10"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which function is not defined at x=0?",
    question_hi: "कौन सा फलन x=0 पर परिभाषित नहीं है?",
    options_en: ["f(x) = 1/x", "f(x) = x²", "f(x) = sin(x)", "f(x) = e^x"],
    options_hi: ["f(x) = 1/x", "f(x) = x²", "f(x) = sin(x)", "f(x) = e^x"],
    answer_en: "f(x) = 1/x",
    answer_hi: "f(x) = 1/x",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "If f(x) = x² - 1, then f(0) is:",
    question_hi: "यदि f(x) = x² - 1 है, तो f(0) कितना होगा?",
    options_en: ["-1", "1", "0", "2"],
    options_hi: ["-1", "1", "0", "2"],
    answer_en: "-1",
    answer_hi: "-1",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "The function f(x) = |x| is:",
    question_hi: "फलन f(x) = |x| किस प्रकार का फलन है?",
    options_en: ["Non-negative", "Negative", "Positive only", "Zero"],
    options_hi: ["ऋणात्मक नहीं", "ऋणात्मक", "सिर्फ धनात्मक", "शून्य"],
    answer_en: "Non-negative",
    answer_hi: "ऋणात्मक नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the value of f(-3) if f(x) = 4x + 1?",
    question_hi: "यदि f(x) = 4x + 1 है, तो f(-3) का मान क्या होगा?",
    options_en: ["-11", "-13", "11", "13"],
    options_hi: ["-11", "-13", "11", "13"],
    answer_en: "-11",
    answer_hi: "-11",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which of these is an even function?",
    question_hi: "इनमें से कौन-सा फलन सम फलन है?",
    options_en: ["f(x) = x²", "f(x) = x³", "f(x) = x", "f(x) = sin x"],
    options_hi: ["f(x) = x²", "f(x) = x³", "f(x) = x", "f(x) = sin x"],
    answer_en: "f(x) = x²",
    answer_hi: "f(x) = x²",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "If f(x) = 3x - 4, what is f(1)?",
    question_hi: "यदि f(x) = 3x - 4 है, तो f(1) कितना होगा?",
    options_en: ["-1", "1", "-7", "7"],
    options_hi: ["-1", "1", "-7", "7"],
    answer_en: "-1",
    answer_hi: "-1",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "The function f(x) = 1/x is undefined at:",
    question_hi: "फलन f(x) = 1/x किस बिंदु पर परिभाषित नहीं है?",
    options_en: ["x=0", "x=1", "x=-1", "x=2"],
    options_hi: ["x=0", "x=1", "x=-1", "x=2"],
    answer_en: "x=0",
    answer_hi: "x=0",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "If f(x) = 2x + 5, find f(-2).",
    question_hi: "यदि f(x) = 2x + 5 है, तो f(-2) ज्ञात करें।",
    options_en: ["1", "9", "-1", "-9"],
    options_hi: ["1", "9", "-1", "-9"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which of the following is a constant function?",
    question_hi: "निम्नलिखित में से कौन-सा स्थिर फलन है?",
    options_en: ["f(x) = 5", "f(x) = x", "f(x) = x²", "f(x) = sin x"],
    options_hi: ["f(x) = 5", "f(x) = x", "f(x) = x²", "f(x) = sin x"],
    answer_en: "f(x) = 5",
    answer_hi: "f(x) = 5",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "The function f(x) = x - 3 is:",
    question_hi: "फलन f(x) = x - 3 किस प्रकार का फलन है?",
    options_en: ["Linear", "Quadratic", "Constant", "None of these"],
    options_hi: ["रेखीय", "द्विघात", "स्थिर", "इनमें से कोई नहीं"],
    answer_en: "Linear",
    answer_hi: "रेखीय",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "The domain of f(x) = √x is:",
    question_hi: "फलन f(x) = √x का परिभाग क्या है?",
    options_en: ["x ≥ 0", "x > 0", "x ≤ 0", "x < 0"],
    options_hi: ["x ≥ 0", "x > 0", "x ≤ 0", "x < 0"],
    answer_en: "x ≥ 0",
    answer_hi: "x ≥ 0",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "If f(x) = |x|, then f(-4) is:",
    question_hi: "यदि f(x) = |x| है, तो f(-4) क्या होगा?",
    options_en: ["4", "-4", "0", "Undefined"],
    options_hi: ["4", "-4", "0", "परिभाषित नहीं"],
    answer_en: "4",
    answer_hi: "4",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "The function f(x) = x³ is:",
    question_hi: "फलन f(x) = x³ किस प्रकार का फलन है?",
    options_en: ["Odd", "Even", "Neither", "Constant"],
    options_hi: ["विषम", "सम", "न तो सम न विषम", "स्थिर"],
    answer_en: "Odd",
    answer_hi: "विषम",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "If f(x) = 2x + 3 and g(x) = x - 1, find (f + g)(x).",
    question_hi: "यदि f(x) = 2x + 3 और g(x) = x - 1 है, तो (f + g)(x) क्या होगा?",
    options_en: ["3x + 2", "x + 2", "2x - 1", "x - 4"],
    options_hi: ["3x + 2", "x + 2", "2x - 1", "x - 4"],
    answer_en: "3x + 2",
    answer_hi: "3x + 2",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "If f(x) = √(x - 2), what is the domain of f(x)?",
    question_hi: "यदि f(x) = √(x - 2) है, तो f(x) का परिभाग क्या होगा?",
    options_en: ["x ≥ 2", "x > 2", "x ≤ 2", "x < 2"],
    options_hi: ["x ≥ 2", "x > 2", "x ≤ 2", "x < 2"],
    answer_en: "x ≥ 2",
    answer_hi: "x ≥ 2",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "The function f(x) = x² - 4 is defined for which values of x?",
    question_hi: "फलन f(x) = x² - 4 किस x के मानों के लिए परिभाषित है?",
    options_en: ["All real numbers", "x > 0", "x ≥ 0", "x < 0"],
    options_hi: ["सभी वास्तविक संख्याएँ", "x > 0", "x ≥ 0", "x < 0"],
    answer_en: "All real numbers",
    answer_hi: "सभी वास्तविक संख्याएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Find the range of the function f(x) = x + 5 where x ∈ R.",
    question_hi: "फलन f(x) = x + 5 का मानक्षेत्र ज्ञात करें जहाँ x ∈ R है।",
    options_en: ["All real numbers", "x > 5", "x < 5", "x ≥ 5"],
    options_hi: ["सभी वास्तविक संख्याएँ", "x > 5", "x < 5", "x ≥ 5"],
    answer_en: "All real numbers",
    answer_hi: "सभी वास्तविक संख्याएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the range of the function f(x) = 1/x?",
    question_hi: "फलन f(x) = 1/x का मानक्षेत्र क्या है?",
    options_en: ["y ≠ 0", "y > 0", "y < 0", "y = 0"],
    options_hi: ["y ≠ 0", "y > 0", "y < 0", "y = 0"],
    answer_en: "y ≠ 0",
    answer_hi: "y ≠ 0",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "If f(x) = 3x + 2, what is f(4)?",
    question_hi: "यदि f(x) = 3x + 2 है, तो f(4) क्या होगा?",
    options_en: ["14", "12", "10", "8"],
    options_hi: ["14", "12", "10", "8"],
    answer_en: "14",
    answer_hi: "14",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "The function f(x) = x² - 1 is defined over which domain?",
    question_hi: "फलन f(x) = x² - 1 किस परिभाग में परिभाषित है?",
    options_en: ["All real numbers", "x ≥ 0", "x > 1", "x < 1"],
    options_hi: ["सभी वास्तविक संख्याएँ", "x ≥ 0", "x > 1", "x < 1"],
    answer_en: "All real numbers",
    answer_hi: "सभी वास्तविक संख्याएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "What is the domain of the function f(x) = ln(x)?",
    question_hi: "फलन f(x) = ln(x) का परिभाग क्या है?",
    options_en: ["x > 0", "x ≥ 0", "x < 0", "All real numbers"],
    options_hi: ["x > 0", "x ≥ 0", "x < 0", "सभी वास्तविक संख्याएँ"],
    answer_en: "x > 0",
    answer_hi: "x > 0",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "The function f(x) = |x| is defined for which values of x?",
    question_hi: "फलन f(x) = |x| किस x के मानों के लिए परिभाषित है?",
    options_en: ["All real numbers", "x > 0", "x ≥ 0", "x < 0"],
    options_hi: ["सभी वास्तविक संख्याएँ", "x > 0", "x ≥ 0", "x < 0"],
    answer_en: "All real numbers",
    answer_hi: "सभी वास्तविक संख्याएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "If f(x) = 2x + 1, what is f(-3)?",
    question_hi: "यदि f(x) = 2x + 1 है, तो f(-3) क्या होगा?",
    options_en: ["-5", "-7", "-3", "5"],
    options_hi: ["-5", "-7", "-3", "5"],
    answer_en: "-5",
    answer_hi: "-5",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Find the range of f(x) = x² where x ∈ R.",
    question_hi: "यदि x ∈ R है तो f(x) = x² का मानक्षेत्र क्या होगा?",
    options_en: ["y ≥ 0", "y > 0", "y ≤ 0", "All real numbers"],
    options_hi: ["y ≥ 0", "y > 0", "y ≤ 0", "सभी वास्तविक संख्याएँ"],
    answer_en: "y ≥ 0",
    answer_hi: "y ≥ 0",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "The function f(x) = sin(x) is defined for which values of x?",
    question_hi: "फलन f(x) = sin(x) किस x के मानों के लिए परिभाषित है?",
    options_en: ["All real numbers", "x ≥ 0", "x > 0", "x < 0"],
    options_hi: ["सभी वास्तविक संख्याएँ", "x ≥ 0", "x > 0", "x < 0"],
    answer_en: "All real numbers",
    answer_hi: "सभी वास्तविक संख्याएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the range of the function f(x) = cos(x)?",
    question_hi: "फलन f(x) = cos(x) का मानक्षेत्र क्या है?",
    options_en: ["-1 ≤ y ≤ 1", "y ≥ 0", "y ≤ 0", "All real numbers"],
    options_hi: ["-1 ≤ y ≤ 1", "y ≥ 0", "y ≤ 0", "सभी वास्तविक संख्याएँ"],
    answer_en: "-1 ≤ y ≤ 1",
    answer_hi: "-1 ≤ y ≤ 1",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "If f(x) = e^x, what is the domain of f?",
    question_hi: "यदि f(x) = e^x है, तो f का परिभाग क्या है?",
    options_en: ["All real numbers", "x > 0", "x ≥ 0", "x < 0"],
    options_hi: ["सभी वास्तविक संख्याएँ", "x > 0", "x ≥ 0", "x < 0"],
    answer_en: "All real numbers",
    answer_hi: "सभी वास्तविक संख्याएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Find the value of f(0) if f(x) = x³ - 2x + 1.",
    question_hi: "यदि f(x) = x³ - 2x + 1 है, तो f(0) का मान क्या होगा?",
    options_en: ["1", "0", "-1", "2"],
    options_hi: ["1", "0", "-1", "2"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the range of the function f(x) = |x - 1|?",
    question_hi: "फलन f(x) = |x - 1| का मानक्षेत्र क्या है?",
    options_en: ["y ≥ 0", "y > 0", "y ≤ 0", "All real numbers"],
    options_hi: ["y ≥ 0", "y > 0", "y ≤ 0", "सभी वास्तविक संख्याएँ"],
    answer_en: "y ≥ 0",
    answer_hi: "y ≥ 0",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "If f(x) = 1/(x+2), what is the domain of f?",
    question_hi: "यदि f(x) = 1/(x+2) है, तो f का परिभाग क्या है?",
    options_en: ["x ≠ -2", "x ≠ 2", "x > -2", "x < -2"],
    options_hi: ["x ≠ -2", "x ≠ 2", "x > -2", "x < -2"],
    answer_en: "x ≠ -2",
    answer_hi: "x ≠ -2",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "What is the range of f(x) = x / (x² + 1)?",
    question_hi: "फलन f(x) = x / (x² + 1) का मानक्षेत्र क्या है?",
    options_en: ["All real numbers between -0.5 and 0.5", "All real numbers", "y ≥ 0", "y ≤ 0"],
    options_hi: ["-0.5 से 0.5 के बीच सभी वास्तविक संख्याएँ", "सभी वास्तविक संख्याएँ", "y ≥ 0", "y ≤ 0"],
    answer_en: "All real numbers between -0.5 and 0.5",
    answer_hi: "-0.5 से 0.5 के बीच सभी वास्तविक संख्याएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Find f(2) if f(x) = 2x² - 3x + 1.",
    question_hi: "यदि f(x) = 2x² - 3x + 1 है, तो f(2) क्या होगा?",
    options_en: ["3", "5", "7", "9"],
    options_hi: ["3", "5", "7", "9"],
    answer_en: "3",
    answer_hi: "3",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "The function f(x) = 1 / √x is defined for which values of x?",
    question_hi: "फलन f(x) = 1 / √x किस x के मानों के लिए परिभाषित है?",
    options_en: ["x > 0", "x ≥ 0", "x < 0", "All real numbers"],
    options_hi: ["x > 0", "x ≥ 0", "x < 0", "सभी वास्तविक संख्याएँ"],
    answer_en: "x > 0",
    answer_hi: "x > 0",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Find the domain of f(x) = 1 / (x² - 4).",
    question_hi: "फलन f(x) = 1 / (x² - 4) का परिभाग क्या है?",
    options_en: ["x ≠ ±2", "x ≠ 2", "x > 2", "x < 2"],
    options_hi: ["x ≠ ±2", "x ≠ 2", "x > 2", "x < 2"],
    answer_en: "x ≠ ±2",
    answer_hi: "x ≠ ±2",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "If f(x) = x³, what is f(-1)?",
    question_hi: "यदि f(x) = x³ है, तो f(-1) क्या होगा?",
    options_en: ["-1", "1", "0", "Undefined"],
    options_hi: ["-1", "1", "0", "परिभाषित नहीं"],
    answer_en: "-1",
    answer_hi: "-1",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "The function f(x) = tan(x) is undefined at which values?",
    question_hi: "फलन f(x) = tan(x) किन मानों पर परिभाषित नहीं है?",
    options_en: ["x = π/2 + nπ, n ∈ Z", "x = 0", "x = π", "x = nπ, n ∈ Z"],
    options_hi: ["x = π/2 + nπ, n ∈ Z", "x = 0", "x = π", "x = nπ, n ∈ Z"],
    answer_en: "x = π/2 + nπ, n ∈ Z",
    answer_hi: "x = π/2 + nπ, n ∈ Z",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Find the range of f(x) = 2x + 3 where x ∈ R.",
    question_hi: "यदि x ∈ R है तो f(x) = 2x + 3 का मानक्षेत्र क्या होगा?",
    options_en: ["All real numbers", "y ≥ 3", "y ≤ 3", "y > 3"],
    options_hi: ["सभी वास्तविक संख्याएँ", "y ≥ 3", "y ≤ 3", "y > 3"],
    answer_en: "All real numbers",
    answer_hi: "सभी वास्तविक संख्याएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "If f(x) = |x + 2|, what is f(-3)?",
    question_hi: "यदि f(x) = |x + 2| है, तो f(-3) क्या होगा?",
    options_en: ["1", "-1", "3", "-3"],
    options_hi: ["1", "-1", "3", "-3"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What is the domain of f(x) = √(9 - x²)?",
    question_hi: "फलन f(x) = √(9 - x²) का परिभाग क्या है?",
    options_en: ["-3 ≤ x ≤ 3", "x > 3", "x < 3", "x ≥ 3"],
    options_hi: ["-3 ≤ x ≤ 3", "x > 3", "x < 3", "x ≥ 3"],
    answer_en: "-3 ≤ x ≤ 3",
    answer_hi: "-3 ≤ x ≤ 3",
    attempted: false,
    selected: ""
  }
    // Continue adding more questions up to 30
];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
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

  updateCircles();
}

function markAttempted(index, selectedAnswer) {
  questions[index].attempted = true;
  questions[index].selected = selectedAnswer;
  updateCircles();
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

function updateCircles() {
  const circleContainer = document.getElementById("circleContainer");
  circleContainer.innerHTML = "";
  const start = currentCirclePage * circlesPerPage;
  const end = Math.min(start + circlesPerPage, questions.length);

  for (let i = start; i < end; i++) {
    const q = questions[i];
    let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
    circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
  }
}

function jumpToQuestion(index) {
  currentQuestion = index;
  loadQuestion(index);
}

function prevCirclePage() {
  if (currentCirclePage > 0) {
    currentCirclePage--;
    updateCircles();
  }
}

function nextCirclePage() {
  if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
    currentCirclePage++;
    updateCircles();
  }
}

function changeLanguage() {
  language = document.getElementById("languageSelect").value;
  loadQuestion(currentQuestion);
}

function submitQuiz() {
  let confirmation = confirm("Are you sure you want to submit the test?");
  if (!confirmation) return;

  let attempted = 0, notAttempted = 0, score = 0;
  const results = [];

  questions.forEach(q => {
      const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
      if (q.attempted) {
          attempted++;
          if (q.selected === correctAnswer) score++;
      } else {
          notAttempted++;
      }
      results.push({ 
          question: language === "en" ? q.question_en : q.question_hi,
          selected: q.selected || "Not Answered", 
          correct: correctAnswer 
      });
  });

  localStorage.setItem("attempted", attempted);
  localStorage.setItem("notAttempted", notAttempted);
  localStorage.setItem("score", score);
  localStorage.setItem("results", JSON.stringify(results));

  let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
  if (viewResult) {
      window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
  }
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! Submitting the quiz automatically.");
      submitQuiz();
    } else {
      timerElement.textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

window.onload = function () {
  startTimer();
  loadQuestion(currentQuestion);
};