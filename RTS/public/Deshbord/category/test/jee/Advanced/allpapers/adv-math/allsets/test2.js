const questions = [
  {
    num: 1,
    question_en: "If cosθ = 12/13, then sinθ equals:",
    question_hi: "यदि cosθ = 12/13 है, तो sinθ का मान है:",
    options_en: ["5/13", "12/13", "13/5", "1/13"],
    options_hi: ["5/13", "12/13", "13/5", "1/13"],
    answer_en: "5/13",
    answer_hi: "5/13",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "tan45° + cot45° equals:",
    question_hi: "tan45° + cot45° का मान है:",
    options_en: ["2", "1", "0", "√2"],
    options_hi: ["2", "1", "0", "√2"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "If sinA = 0.6, then cosA = ?",
    question_hi: "यदि sinA = 0.6 है, तो cosA = ?",
    options_en: ["0.8", "0.5", "0.7", "0.4"],
    options_hi: ["0.8", "0.5", "0.7", "0.4"],
    answer_en: "0.8",
    answer_hi: "0.8",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Value of sin²30° + cos²30° is:",
    question_hi: "sin²30° + cos²30° का मान है:",
    options_en: ["1", "0", "1/2", "3/4"],
    options_hi: ["1", "0", "1/2", "3/4"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "If A + B = 90°, then sinA = ?",
    question_hi: "यदि A + B = 90°, तो sinA का मान है:",
    options_en: ["cosB", "sinB", "tanB", "cotB"],
    options_hi: ["cosB", "sinB", "tanB", "cotB"],
    answer_en: "cosB",
    answer_hi: "cosB",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Derivative of logx with respect to x is:",
    question_hi: "x के सापेक्ष logx का अवकलज है:",
    options_en: ["1/x", "x", "logx", "0"],
    options_hi: ["1/x", "x", "logx", "0"],
    answer_en: "1/x",
    answer_hi: "1/x",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "If y = eˣ, then dy/dx equals:",
    question_hi: "यदि y = eˣ, तो dy/dx का मान है:",
    options_en: ["eˣ", "1", "xeˣ", "0"],
    options_hi: ["eˣ", "1", "xeˣ", "0"],
    answer_en: "eˣ",
    answer_hi: "eˣ",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "∫ cosx dx equals:",
    question_hi: "∫ cosx dx का मान है:",
    options_en: ["sinx + C", "-sinx + C", "cosx + C", "tanx + C"],
    options_hi: ["sinx + C", "-sinx + C", "cosx + C", "tanx + C"],
    answer_en: "sinx + C",
    answer_hi: "sinx + C",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "If dy/dx = 0, then the function is:",
    question_hi: "यदि dy/dx = 0 है, तो फलन कैसा है?",
    options_en: ["Constant", "Increasing", "Decreasing", "Variable"],
    options_hi: ["स्थिर", "बढ़ता हुआ", "घटता हुआ", "परिवर्ती"],
    answer_en: "Constant",
    answer_hi: "स्थिर",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "The slope of line parallel to x-axis is:",
    question_hi: "x-अक्ष के समानांतर रेखा का ढाल क्या है?",
    options_en: ["0", "∞", "1", "-1"],
    options_hi: ["0", "∞", "1", "-1"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "The equation of y-axis is:",
    question_hi: "y-अक्ष का समीकरण है:",
    options_en: ["x=0", "y=0", "x=y", "x+y=0"],
    options_hi: ["x=0", "y=0", "x=y", "x+y=0"],
    answer_en: "x=0",
    answer_hi: "x=0",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Distance between (2,3) and (5,7) is:",
    question_hi: "(2,3) और (5,7) के बीच की दूरी है:",
    options_en: ["5", "6", "4", "3"],
    options_hi: ["5", "6", "4", "3"],
    answer_en: "5",
    answer_hi: "5",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "The mid-point of (1,2) and (3,4) is:",
    question_hi: "(1,2) और (3,4) का मध्यबिंदु है:",
    options_en: ["(2,3)", "(1,3)", "(2,2)", "(3,3)"],
    options_hi: ["(2,3)", "(1,3)", "(2,2)", "(3,3)"],
    answer_en: "(2,3)",
    answer_hi: "(2,3)",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Equation of a circle with center (a,b) and radius r is:",
    question_hi: "केंद्र (a,b) और त्रिज्या r वाले वृत्त का समीकरण है:",
    options_en: [
      "(x−a)²+(y−b)²=r²",
      "(x+a)²+(y+b)²=r²",
      "x²+y²=r",
      "(x−b)²+(y−a)²=r²",
    ],
    options_hi: [
      "(x−a)²+(y−b)²=r²",
      "(x+a)²+(y+b)²=r²",
      "x²+y²=r",
      "(x−b)²+(y−a)²=r²",
    ],
    answer_en: "(x−a)²+(y−b)²=r²",
    answer_hi: "(x−a)²+(y−b)²=r²",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "The focus of parabola x² = 4ay is:",
    question_hi: "परवलय x² = 4ay का फोकस है:",
    options_en: ["(0,a)", "(a,0)", "(-a,0)", "(0,-a)"],
    options_hi: ["(0,a)", "(a,0)", "(-a,0)", "(0,-a)"],
    answer_en: "(0,a)",
    answer_hi: "(0,a)",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "If A = {1,2,3}, then number of subsets of A is:",
    question_hi: "यदि A = {1,2,3}, तो A के उपसमुच्चयों की संख्या है:",
    options_en: ["8", "6", "3", "9"],
    options_hi: ["8", "6", "3", "9"],
    answer_en: "8",
    answer_hi: "8",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Probability of getting head when tossing a fair coin is:",
    question_hi: "एक निष्पक्ष सिक्का उछालने पर हेड आने की प्रायिकता है:",
    options_en: ["1/2", "1/3", "1/4", "1"],
    options_hi: ["1/2", "1/3", "1/4", "1"],
    answer_en: "1/2",
    answer_hi: "1/2",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "If A = 60°, then value of tanA + cotA is:",
    question_hi: "यदि A = 60° है, तो tanA + cotA का मान है:",
    options_en: ["7/√3", "4/√3", "2/√3", "2√3/3"],
    options_hi: ["7/√3", "4/√3", "2/√3", "2√3/3"],
    answer_en: "7/√3",
    answer_hi: "7/√3",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "tan²A + 1 = ?",
    question_hi: "tan²A + 1 = ?",
    options_en: ["sec²A", "cosec²A", "cot²A", "sin²A"],
    options_hi: ["sec²A", "cosec²A", "cot²A", "sin²A"],
    answer_en: "sec²A",
    answer_hi: "sec²A",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "The sum of roots of 3x² − 5x + 2 = 0 is:",
    question_hi: "3x² − 5x + 2 = 0 के मूलों का योग है:",
    options_en: ["5/3", "3/5", "−5/3", "2/3"],
    options_hi: ["5/3", "3/5", "−5/3", "2/3"],
    answer_en: "5/3",
    answer_hi: "5/3",
    attempted: false,
    selected: "",
  },

  {
    num: 21,
    question_en: "The product of roots of equation 2x² − 7x + 3 = 0 is:",
    question_hi: "समीकरण 2x² − 7x + 3 = 0 के मूलों का गुणनफल है:",
    options_en: ["3/2", "7/2", "2/3", "1/3"],
    options_hi: ["3/2", "7/2", "2/3", "1/3"],
    answer_en: "3/2",
    answer_hi: "3/2",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "If A = 45°, then sin2A = ?",
    question_hi: "यदि A = 45°, तो sin2A = ?",
    options_en: ["1", "0", "√2/2", "√3/2"],
    options_hi: ["1", "0", "√2/2", "√3/2"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Value of cos²45° + sin²45° is:",
    question_hi: "cos²45° + sin²45° का मान है:",
    options_en: ["1", "0", "1/2", "2"],
    options_hi: ["1", "0", "1/2", "2"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "The general solution of cosx = 0 is:",
    question_hi: "cosx = 0 का सामान्य हल है:",
    options_en: ["x = (2n+1)π/2", "x = nπ", "x = nπ/2", "x = 2nπ"],
    options_hi: ["x = (2n+1)π/2", "x = nπ", "x = nπ/2", "x = 2nπ"],
    answer_en: "x = (2n+1)π/2",
    answer_hi: "x = (2n+1)π/2",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "If tanA = 3/4, then sinA = ?",
    question_hi: "यदि tanA = 3/4, तो sinA का मान है:",
    options_en: ["3/5", "4/5", "5/3", "1/5"],
    options_hi: ["3/5", "4/5", "5/3", "1/5"],
    answer_en: "3/5",
    answer_hi: "3/5",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "If f(x) = x³, then f'(x) = ?",
    question_hi: "यदि f(x) = x³ है, तो f'(x) = ?",
    options_en: ["3x²", "2x³", "x²", "3x"],
    options_hi: ["3x²", "2x³", "x²", "3x"],
    answer_en: "3x²",
    answer_hi: "3x²",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "If f(x) = e^x, then ∫f(x) dx = ?",
    question_hi: "यदि f(x) = e^x है, तो ∫f(x) dx = ?",
    options_en: ["e^x + C", "x·e^x + C", "x + e^x", "e^(x+1)"],
    options_hi: ["e^x + C", "x·e^x + C", "x + e^x", "e^(x+1)"],
    answer_en: "e^x + C",
    answer_hi: "e^x + C",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "If f(x) = sinx, then f''(x) = ?",
    question_hi: "यदि f(x) = sinx है, तो f''(x) = ?",
    options_en: ["−sinx", "cosx", "−cosx", "sinx"],
    options_hi: ["−sinx", "cosx", "−cosx", "sinx"],
    answer_en: "−sinx",
    answer_hi: "−sinx",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "The area of a circle with diameter 14 cm is:",
    question_hi: "14 सेमी व्यास वाले वृत्त का क्षेत्रफल है:",
    options_en: ["154 cm²", "49 cm²", "98 cm²", "100 cm²"],
    options_hi: ["154 cm²", "49 cm²", "98 cm²", "100 cm²"],
    answer_en: "154 cm²",
    answer_hi: "154 cm²",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "The sum of first n natural numbers is:",
    question_hi: "पहली n प्राकृतिक संख्याओं का योग है:",
    options_en: ["n(n+1)/2", "n²", "n(n−1)/2", "2n"],
    options_hi: ["n(n+1)/2", "n²", "n(n−1)/2", "2n"],
    answer_en: "n(n+1)/2",
    answer_hi: "n(n+1)/2",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Sum of first n even numbers is:",
    question_hi: "पहली n सम संख्याओं का योग है:",
    options_en: ["n(n+1)", "n²", "n(n−1)", "2n"],
    options_hi: ["n(n+1)", "n²", "n(n−1)", "2n"],
    answer_en: "n(n+1)",
    answer_hi: "n(n+1)",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "If a + b + c = 0, then a³ + b³ + c³ = ?",
    question_hi: "यदि a + b + c = 0, तो a³ + b³ + c³ = ?",
    options_en: ["3abc", "0", "a³ + b³ + c³", "−3abc"],
    options_hi: ["3abc", "0", "a³ + b³ + c³", "−3abc"],
    answer_en: "3abc",
    answer_hi: "3abc",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Equation of line passing through (1,2) with slope 3 is:",
    question_hi: "ढाल 3 और बिंदु (1,2) से गुजरने वाली रेखा का समीकरण है:",
    options_en: ["y − 2 = 3(x − 1)", "y + 2 = 3(x + 1)", "y = 3x", "x = 3y"],
    options_hi: ["y − 2 = 3(x − 1)", "y + 2 = 3(x + 1)", "y = 3x", "x = 3y"],
    answer_en: "y − 2 = 3(x − 1)",
    answer_hi: "y − 2 = 3(x − 1)",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "If A = [ [1,2],[3,4] ], then trace(A) = ?",
    question_hi: "यदि A = [ [1,2],[3,4] ], तो trace(A) = ?",
    options_en: ["5", "6", "4", "3"],
    options_hi: ["5", "6", "4", "3"],
    answer_en: "5",
    answer_hi: "5",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "If determinant |A| = 3, then |2A| = ?",
    question_hi: "यदि |A| = 3 है, तो |2A| का मान है:",
    options_en: ["12", "6", "9", "24"],
    options_hi: ["12", "6", "9", "24"],
    answer_en: "12",
    answer_hi: "12",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "The direction cosines of x-axis are:",
    question_hi: "x-अक्ष के दिशा कोसाइन हैं:",
    options_en: ["(1,0,0)", "(0,1,0)", "(0,0,1)", "(1,1,1)"],
    options_hi: ["(1,0,0)", "(0,1,0)", "(0,0,1)", "(1,1,1)"],
    answer_en: "(1,0,0)",
    answer_hi: "(1,0,0)",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "If a·b = |a||b|cosθ, then θ is the angle between:",
    question_hi: "यदि a·b = |a||b|cosθ, तो θ किनके बीच का कोण है?",
    options_en: ["Vectors a and b", "Scalars a and b", "Lines", "Planes"],
    options_hi: ["वेक्टर a और b", "स्केलर a और b", "रेखाएँ", "तल"],
    answer_en: "Vectors a and b",
    answer_hi: "वेक्टर a और b",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "If A = [ [1,0],[0,1] ], then A⁻¹ = ?",
    question_hi: "यदि A = [ [1,0],[0,1] ], तो A⁻¹ = ?",
    options_en: ["A", "−A", "0", "2A"],
    options_hi: ["A", "−A", "0", "2A"],
    answer_en: "A",
    answer_hi: "A",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "The value of C(5,2) is:",
    question_hi: "C(5,2) का मान है:",
    options_en: ["10", "5", "20", "15"],
    options_hi: ["10", "5", "20", "15"],
    answer_en: "10",
    answer_hi: "10",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "The value of P(5,2) is:",
    question_hi: "P(5,2) का मान है:",
    options_en: ["20", "10", "15", "25"],
    options_hi: ["20", "10", "15", "25"],
    answer_en: "20",
    answer_hi: "20",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "If mean of 5,10,15,20 is M, then M = ?",
    question_hi: "यदि 5,10,15,20 का औसत M है, तो M = ?",
    options_en: ["12.5", "10", "15", "20"],
    options_hi: ["12.5", "10", "15", "20"],
    answer_en: "12.5",
    answer_hi: "12.5",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Variance of 1,1,1,1 is:",
    question_hi: "1,1,1,1 का विचलन (variance) है:",
    options_en: ["0", "1", "2", "4"],
    options_hi: ["0", "1", "2", "4"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "If x + y = 10 and xy = 21, then roots of equation are:",
    question_hi: "यदि x + y = 10 और xy = 21, तो समीकरण के मूल हैं:",
    options_en: ["3 and 7", "4 and 6", "2 and 8", "5 and 5"],
    options_hi: ["3 और 7", "4 और 6", "2 और 8", "5 और 5"],
    answer_en: "3 and 7",
    answer_hi: "3 और 7",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "If secA = 2, then cosA = ?",
    question_hi: "यदि secA = 2, तो cosA = ?",
    options_en: ["1/2", "2", "√3/2", "1"],
    options_hi: ["1/2", "2", "√3/2", "1"],
    answer_en: "1/2",
    answer_hi: "1/2",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "tan30° equals:",
    question_hi: "tan30° का मान है:",
    options_en: ["1/√3", "√3", "1", "√3/2"],
    options_hi: ["1/√3", "√3", "1", "√3/2"],
    answer_en: "1/√3",
    answer_hi: "1/√3",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "If a,b,c are in A.P., then 2b = ?",
    question_hi: "यदि a,b,c अंकगणितीय श्रेणी में हैं, तो 2b = ?",
    options_en: ["a + c", "a − c", "ac", "a/c"],
    options_hi: ["a + c", "a − c", "ac", "a/c"],
    answer_en: "a + c",
    answer_hi: "a + c",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "If sinA = 3/5, find tanA:",
    question_hi: "यदि sinA = 3/5, तो tanA का मान ज्ञात करें:",
    options_en: ["3/4", "4/3", "5/3", "3/5"],
    options_hi: ["3/4", "4/3", "5/3", "3/5"],
    answer_en: "3/4",
    answer_hi: "3/4",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "If ∫₀¹ (3x²) dx = k, then k = ?",
    question_hi: "यदि ∫₀¹ (3x²) dx = k, तो k = ?",
    options_en: ["1", "2", "3", "1/3"],
    options_hi: ["1", "2", "3", "1/3"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "The probability of getting an even number on a die is:",
    question_hi: "पासे पर सम संख्या आने की प्रायिकता है:",
    options_en: ["1/2", "1/3", "2/3", "1/6"],
    options_hi: ["1/2", "1/3", "2/3", "1/6"],
    answer_en: "1/2",
    answer_hi: "1/2",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "If A = [ [2,0],[0,2] ], then determinant of A is:",
    question_hi: "यदि A = [ [2,0],[0,2] ], तो A का सारणिक (determinant) है:",
    options_en: ["4", "2", "0", "8"],
    options_hi: ["4", "2", "0", "8"],
    answer_en: "4",
    answer_hi: "4",
    attempted: false,
    selected: "",
  },
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
  document.getElementById("questionCounter").textContent = `Question ${
    index + 1
  } of ${questions.length}`;

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
            <input type="radio" name="option" value="${option}" ${
      isSelected ? "checked" : ""
    } style="margin-right:8px;">
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
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
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

  if (!confirmation) {
    return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
  }

  let attempted = 0;
  let notAttempted = 0;
  let score = 0;
  const results = [];

  questions.forEach((q) => {
    if (q.attempted) {
      attempted++;
      if (q.selected === q.answer) {
        score++;
      }
    } else {
      notAttempted++;
    }
    results.push({
      question: q.question,
      selected: q.selected || "Not Answered",
      correct: q.answer,
    });
  });

  localStorage.setItem("attempted", attempted);
  localStorage.setItem("notAttempted", notAttempted);
  localStorage.setItem("score", score);
  localStorage.setItem("results", JSON.stringify(results));

  // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
  let viewResult = confirm(
    "Test submitted successfully! Do you want to view your result?"
  );
  if (viewResult) {
    window.location.href =
      "/RTS/public/Deshbord/category/test/submit-test.html";
  }
}
window.onload = () => {
  loadQuestion(currentQuestion);
};

function updateNavigation() {
  const nav = document.getElementById("circleContainer");
  nav.innerHTML = "";
  questions.forEach((q, i) => {
    let color = "gray";
    if (i === currentQuestion) color = "blue";
    else if (q.attempted) color = "green";
    nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${
      i + 1
    }</div>`;
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
    const newSize = Math.max(
      80,
      Math.min(250, Math.max(startWidth + dx, startHeight + dy))
    );
    container.style.width = `${newSize}px`;
    container.style.height = `${newSize}px`;
  });

  document.addEventListener("mouseup", () => {
    isResizing = false;
  });

  // ✅ Camera stream
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      videoStream = stream;
      detectMovement(video);
    })
    .catch((err) => {
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
    videoStream.getTracks().forEach((track) => track.stop());
  }
  const camContainer = document.getElementById("camera-container");
  if (camContainer) camContainer.remove();

  movementCount = 0;
  currentQuestion = 0;
  timeLeft = 180 * 60;

  questions.forEach((q) => {
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
