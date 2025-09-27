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