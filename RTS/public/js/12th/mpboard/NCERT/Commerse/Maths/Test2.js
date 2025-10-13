 //  inverseTrigonometricFunctions (unit-2)
 const questions = [
   {
    num: 1,
    question_en: "What is the value of cot⁻¹(√2)?",
    question_hi: "cot⁻¹(√2) का मान क्या है?",
    options_en: ["π/4", "π/6", "π/3", "π/2"],
    options_hi: ["π/4", "π/6", "π/3", "π/2"],
    answer_en: "π/4",
    answer_hi: "π/4",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "If sin⁻¹(x) = π/6, then x is equal to?",
    question_hi: "यदि sin⁻¹(x) = π/6 है, तो x का मान क्या होगा?",
    options_en: ["1/2", "√3/2", "1", "0"],
    options_hi: ["1/2", "√3/2", "1", "0"],
    answer_en: "1/2",
    answer_hi: "1/2",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the principal value of tan⁻¹(1)?",
    question_hi: "tan⁻¹(1) का प्रधान मान क्या है?",
    options_en: ["π/4", "π/3", "π/6", "π/2"],
    options_hi: ["π/4", "π/3", "π/6", "π/2"],
    answer_en: "π/4",
    answer_hi: "π/4",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Evaluate sin(tan⁻¹(1)).",
    question_hi: "sin(tan⁻¹(1)) का मान ज्ञात करें।",
    options_en: ["√2/2", "1/√2", "1", "1/2"],
    options_hi: ["√2/2", "1/√2", "1", "1/2"],
    answer_en: "√2/2",
    answer_hi: "√2/2",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the value of cos⁻¹(0)?",
    question_hi: "cos⁻¹(0) का मान क्या है?",
    options_en: ["π/2", "0", "π", "π/3"],
    options_hi: ["π/2", "0", "π", "π/3"],
    answer_en: "π/2",
    answer_hi: "π/2",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "If tan⁻¹(x) + tan⁻¹(y) = π/4, and xy = 1, what is x + y?",
    question_hi: "यदि tan⁻¹(x) + tan⁻¹(y) = π/4 और xy = 1 है, तो x + y का मान क्या होगा?",
    options_en: ["0", "1", "2", "Undefined"],
    options_hi: ["0", "1", "2", "अपरिभाषित"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Find the value of sin⁻¹(1).",
    question_hi: "sin⁻¹(1) का मान क्या है?",
    options_en: ["π/2", "0", "π/4", "π"],
    options_hi: ["π/2", "0", "π/4", "π"],
    answer_en: "π/2",
    answer_hi: "π/2",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is tan(sin⁻¹(1/2))?",
    question_hi: "tan(sin⁻¹(1/2)) का मान क्या है?",
    options_en: ["1/√3", "√3", "1", "√2"],
    options_hi: ["1/√3", "√3", "1", "√2"],
    answer_en: "1/√3",
    answer_hi: "1/√3",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Evaluate cos(tan⁻¹(1)).",
    question_hi: "cos(tan⁻¹(1)) का मान ज्ञात करें।",
    options_en: ["√2/2", "1", "1/2", "0"],
    options_hi: ["√2/2", "1", "1/2", "0"],
    answer_en: "√2/2",
    answer_hi: "√2/2",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "If cos⁻¹(x) = π/3, find x.",
    question_hi: "यदि cos⁻¹(x) = π/3 है, तो x का मान क्या होगा?",
    options_en: ["1/2", "√3/2", "1", "0"],
    options_hi: ["1/2", "√3/2", "1", "0"],
    answer_en: "1/2",
    answer_hi: "1/2",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the value of tan⁻¹(0)?",
    question_hi: "tan⁻¹(0) का मान क्या है?",
    options_en: ["0", "π/4", "π/2", "π"],
    options_hi: ["0", "π/4", "π/2", "π"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Find the value of sin⁻¹(0).",
    question_hi: "sin⁻¹(0) का मान ज्ञात करें।",
    options_en: ["0", "π/2", "π", "π/4"],
    options_hi: ["0", "π/2", "π", "π/4"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "If tan⁻¹(x) = π/4, what is x?",
    question_hi: "यदि tan⁻¹(x) = π/4 है, तो x का मान क्या होगा?",
    options_en: ["1", "0", "√3", "1/√3"],
    options_hi: ["1", "0", "√3", "1/√3"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Evaluate cos(sin⁻¹(1/2)).",
    question_hi: "cos(sin⁻¹(1/2)) का मान क्या है?",
    options_en: ["√3/2", "1/2", "1", "√2/2"],
    options_hi: ["√3/2", "1/2", "1", "√2/2"],
    answer_en: "√3/2",
    answer_hi: "√3/2",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is sin⁻¹(-1)?",
    question_hi: "sin⁻¹(-1) का मान क्या है?",
    options_en: ["-π/2", "π/2", "0", "π"],
    options_hi: ["-π/2", "π/2", "0", "π"],
    answer_en: "-π/2",
    answer_hi: "-π/2",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "If sin⁻¹(x) + cos⁻¹(x) = π/2, find x.",
    question_hi: "यदि sin⁻¹(x) + cos⁻¹(x) = π/2 है, तो x का मान क्या होगा?",
    options_en: ["Any value in [-1,1]", "0", "1", "-1"],
    options_hi: ["-1 से 1 के बीच कोई भी मान", "0", "1", "-1"],
    answer_en: "Any value in [-1,1]",
    answer_hi: "-1 से 1 के बीच कोई भी मान",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Find tan(sin⁻¹(x)) in terms of x.",
    question_hi: "tan(sin⁻¹(x)) को x के सन्दर्भ में व्यक्त करें।",
    options_en: ["x / √(1 - x²)", "√(1 - x²) / x", "x", "1/x"],
    options_hi: ["x / √(1 - x²)", "√(1 - x²) / x", "x", "1/x"],
    answer_en: "x / √(1 - x²)",
    answer_hi: "x / √(1 - x²)",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Evaluate sin⁻¹(√3/2).",
    question_hi: "sin⁻¹(√3/2) का मान क्या है?",
    options_en: ["π/3", "π/6", "π/2", "π/4"],
    options_hi: ["π/3", "π/6", "π/2", "π/4"],
    answer_en: "π/3",
    answer_hi: "π/3",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the value of cos⁻¹(-1)?",
    question_hi: "cos⁻¹(-1) का मान क्या है?",
    options_en: ["π", "0", "π/2", "π/4"],
    options_hi: ["π", "0", "π/2", "π/4"],
    answer_en: "π",
    answer_hi: "π",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "If cot⁻¹(x) = π/4, find x.",
    question_hi: "यदि cot⁻¹(x) = π/4 है, तो x का मान क्या होगा?",
    options_en: ["1", "0", "√3", "1/√3"],
    options_hi: ["1", "0", "√3", "1/√3"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Find the value of tan⁻¹(√3).",
    question_hi: "tan⁻¹(√3) का मान क्या है?",
    options_en: ["π/3", "π/4", "π/6", "π/2"],
    options_hi: ["π/3", "π/4", "π/6", "π/2"],
    answer_en: "π/3",
    answer_hi: "π/3",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Evaluate sin(cos⁻¹(1/2)).",
    question_hi: "sin(cos⁻¹(1/2)) का मान क्या है?",
    options_en: ["√3/2", "1/2", "1", "√2/2"],
    options_hi: ["√3/2", "1/2", "1", "√2/2"],
    answer_en: "√3/2",
    answer_hi: "√3/2",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the value of cot⁻¹(1)?",
    question_hi: "cot⁻¹(1) का मान क्या है?",
    options_en: ["π/4", "π/2", "π/3", "π/6"],
    options_hi: ["π/4", "π/2", "π/3", "π/6"],
    answer_en: "π/4",
    answer_hi: "π/4",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "If sin⁻¹(x) = 0, what is x?",
    question_hi: "यदि sin⁻¹(x) = 0 है, तो x क्या होगा?",
    options_en: ["0", "1", "-1", "Undefined"],
    options_hi: ["0", "1", "-1", "अपरिभाषित"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Find cos(tan⁻¹(x)) in terms of x.",
    question_hi: "cos(tan⁻¹(x)) को x के सन्दर्भ में व्यक्त करें।",
    options_en: ["1 / √(1 + x²)", "x / √(1 + x²)", "√(1 + x²)", "x"],
    options_hi: ["1 / √(1 + x²)", "x / √(1 + x²)", "√(1 + x²)", "x"],
    answer_en: "1 / √(1 + x²)",
    answer_hi: "1 / √(1 + x²)",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "If sin⁻¹(x) + cos⁻¹(x) = ?, then find the value.",
    question_hi: "यदि sin⁻¹(x) + cos⁻¹(x) = ?, तो इसका मान ज्ञात कीजिए।",
    options_en: ["π/2", "π/4", "π", "0"],
    options_hi: ["π/2", "π/4", "π", "0"],
    answer_en: "π/2",
    answer_hi: "π/2",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the principal value range of sin⁻¹(x)?",
    question_hi: "sin⁻¹(x) का प्रमुख मान सीमा क्या है?",
    options_en: ["[-π/2, π/2]", "[0, π]", "[-π, π]", "[0, 2π]"],
    options_hi: ["[-π/2, π/2]", "[0, π]", "[-π, π]", "[0, 2π]"],
    answer_en: "[-π/2, π/2]",
    answer_hi: "[-π/2, π/2]",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Find the value of cos⁻¹(1/2).",
    question_hi: "cos⁻¹(1/2) का मान ज्ञात कीजिए।",
    options_en: ["π/3", "π/6", "π/2", "2π/3"],
    options_hi: ["π/3", "π/6", "π/2", "2π/3"],
    answer_en: "π/3",
    answer_hi: "π/3",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the value of tan⁻¹(1)?",
    question_hi: "tan⁻¹(1) का मान क्या है?",
    options_en: ["π/4", "π/3", "π/6", "π/2"],
    options_hi: ["π/4", "π/3", "π/6", "π/2"],
    answer_en: "π/4",
    answer_hi: "π/4",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "If sin⁻¹(3/5) = θ, then find cos θ.",
    question_hi: "यदि sin⁻¹(3/5) = θ हो, तो cos θ का मान क्या होगा?",
    options_en: ["4/5", "3/5", "5/3", "√(1 - (3/5)²)"],
    options_hi: ["4/5", "3/5", "5/3", "√(1 - (3/5)²)"],
    answer_en: "4/5",
    answer_hi: "4/5",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the value of cos⁻¹(0)?",
    question_hi: "cos⁻¹(0) का मान क्या है?",
    options_en: ["π/2", "0", "π", "π/4"],
    options_hi: ["π/2", "0", "π", "π/4"],
    answer_en: "π/2",
    answer_hi: "π/2",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Find the value of sin⁻¹(0).",
    question_hi: "sin⁻¹(0) का मान ज्ञात कीजिए।",
    options_en: ["0", "π/2", "π", "-π/2"],
    options_hi: ["0", "π/2", "π", "-π/2"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "If tan⁻¹(x) + tan⁻¹(y) = π/4, find x + y when xy = 1.",
    question_hi: "यदि tan⁻¹(x) + tan⁻¹(y) = π/4 हो, और xy = 1 हो, तो x + y क्या होगा?",
    options_en: ["0", "1", "-1", "2"],
    options_hi: ["0", "1", "-1", "2"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "What is the principal value range of tan⁻¹(x)?",
    question_hi: "tan⁻¹(x) का प्रमुख मान सीमा क्या है?",
    options_en: ["(-π/2, π/2)", "[0, π]", "[-π, π]", "[0, 2π]"],
    options_hi: ["(-π/2, π/2)", "[0, π]", "[-π, π]", "[0, 2π]"],
    answer_en: "(-π/2, π/2)",
    answer_hi: "(-π/2, π/2)",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Find the value of cot⁻¹(1).",
    question_hi: "cot⁻¹(1) का मान ज्ञात कीजिए।",
    options_en: ["π/4", "π/3", "π/2", "π/6"],
    options_hi: ["π/4", "π/3", "π/2", "π/6"],
    answer_en: "π/4",
    answer_hi: "π/4",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "If sin⁻¹(x) = π/6, find x.",
    question_hi: "यदि sin⁻¹(x) = π/6 हो, तो x का मान क्या होगा?",
    options_en: ["1/2", "√3/2", "1", "0"],
    options_hi: ["1/2", "√3/2", "1", "0"],
    answer_en: "1/2",
    answer_hi: "1/2",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Evaluate cos(sin⁻¹(3/5)).",
    question_hi: "cos(sin⁻¹(3/5)) का मान ज्ञात कीजिए।",
    options_en: ["4/5", "3/5", "5/3", "√(1 - (3/5)²)"],
    options_hi: ["4/5", "3/5", "5/3", "√(1 - (3/5)²)"],
    answer_en: "4/5",
    answer_hi: "4/5",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Find the value of tan(cos⁻¹(1/2)).",
    question_hi: "tan(cos⁻¹(1/2)) का मान ज्ञात कीजिए।",
    options_en: ["√3/3", "√3", "1", "0"],
    options_hi: ["√3/3", "√3", "1", "0"],
    answer_en: "√3/3",
    answer_hi: "√3/3",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "If sin⁻¹(x) = θ, express cos θ in terms of x.",
    question_hi: "यदि sin⁻¹(x) = θ हो, तो cos θ को x के रूप में व्यक्त कीजिए।",
    options_en: ["√(1 - x²)", "x", "1 - x", "1 + x²"],
    options_hi: ["√(1 - x²)", "x", "1 - x", "1 + x²"],
    answer_en: "√(1 - x²)",
    answer_hi: "√(1 - x²)",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Find the value of sin⁻¹(1).",
    question_hi: "sin⁻¹(1) का मान ज्ञात कीजिए।",
    options_en: ["π/2", "0", "π", "-π/2"],
    options_hi: ["π/2", "0", "π", "-π/2"],
    answer_en: "π/2",
    answer_hi: "π/2",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "If tan⁻¹(1) + tan⁻¹(√3) = ?, then find the value.",
    question_hi: "यदि tan⁻¹(1) + tan⁻¹(√3) = ?, तो इसका मान ज्ञात कीजिए।",
    options_en: ["π/2", "π/3", "π/4", "π/6"],
    options_hi: ["π/2", "π/3", "π/4", "π/6"],
    answer_en: "π/2",
    answer_hi: "π/2",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Find the principal value of cot⁻¹(0).",
    question_hi: "cot⁻¹(0) का प्रमुख मान ज्ञात कीजिए।",
    options_en: ["π/2", "0", "π", "π/4"],
    options_hi: ["π/2", "0", "π", "π/4"],
    answer_en: "π/2",
    answer_hi: "π/2",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "If cos⁻¹(x) = π/3, find x.",
    question_hi: "यदि cos⁻¹(x) = π/3 हो, तो x का मान ज्ञात कीजिए।",
    options_en: ["1/2", "√3/2", "1", "0"],
    options_hi: ["1/2", "√3/2", "1", "0"],
    answer_en: "1/2",
    answer_hi: "1/2",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What is the principal value range of cos⁻¹(x)?",
    question_hi: "cos⁻¹(x) का प्रमुख मान सीमा क्या है?",
    options_en: ["[0, π]", "[-π/2, π/2]", "[0, 2π]", "[-π, π]"],
    options_hi: ["[0, π]", "[-π/2, π/2]", "[0, 2π]", "[-π, π]"],
    answer_en: "[0, π]",
    answer_hi: "[0, π]",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Evaluate tan⁻¹(0).",
    question_hi: "tan⁻¹(0) का मान ज्ञात कीजिए।",
    options_en: ["0", "π/4", "π/2", "π"],
    options_hi: ["0", "π/4", "π/2", "π"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Find the value of cot⁻¹(√3).",
    question_hi: "cot⁻¹(√3) का मान ज्ञात कीजिए।",
    options_en: ["π/6", "π/4", "π/3", "π/2"],
    options_hi: ["π/6", "π/4", "π/3", "π/2"],
    answer_en: "π/6",
    answer_hi: "π/6",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "If tan θ = 1, find θ in principal value.",
    question_hi: "यदि tan θ = 1 हो, तो θ का प्रमुख मान क्या होगा?",
    options_en: ["π/4", "π/3", "π/6", "π/2"],
    options_hi: ["π/4", "π/3", "π/6", "π/2"],
    answer_en: "π/4",
    answer_hi: "π/4",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Find sin(tan⁻¹(1)).",
    question_hi: "sin(tan⁻¹(1)) का मान ज्ञात कीजिए।",
    options_en: ["√2/2", "1", "0", "1/√2"],
    options_hi: ["√2/2", "1", "0", "1/√2"],
    answer_en: "√2/2",
    answer_hi: "√2/2",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Evaluate cos(tan⁻¹(1)).",
    question_hi: "cos(tan⁻¹(1)) का मान ज्ञात कीजिए।",
    options_en: ["√2/2", "1", "0", "1/√2"],
    options_hi: ["√2/2", "1", "0", "1/√2"],
    answer_en: "√2/2",
    answer_hi: "√2/2",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "If sin⁻¹(x) + sin⁻¹(y) = π/2, then find the relation between x and y.",
    question_hi: "यदि sin⁻¹(x) + sin⁻¹(y) = π/2 हो, तो x और y के बीच संबंध क्या होगा?",
    options_en: ["x² + y² = 1", "xy = 1", "x + y = 1", "x - y = 0"],
    options_hi: ["x² + y² = 1", "xy = 1", "x + y = 1", "x - y = 0"],
    answer_en: "x² + y² = 1",
    answer_hi: "x² + y² = 1",
    attempted: false,
    selected: ""
  }
];





let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
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
