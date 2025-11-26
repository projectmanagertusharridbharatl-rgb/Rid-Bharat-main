const questions = [
  {
    num: 1,
    question_en: "If sinθ = 3/5, then what is the value of cosθ?",
    question_hi: "यदि sinθ = 3/5 है, तो cosθ का मान क्या होगा?",
    options_en: ["4/5", "5/4", "3/4", "1/5"],
    options_hi: ["4/5", "5/4", "3/4", "1/5"],
    answer_en: "4/5",
    answer_hi: "4/5",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "The derivative of sinx with respect to x is:",
    question_hi: "x के सापेक्ष sinx का अवकलज क्या है?",
    options_en: ["cosx", "-cosx", "sinx", "-sinx"],
    options_hi: ["cosx", "-cosx", "sinx", "-sinx"],
    answer_en: "cosx",
    answer_hi: "cosx",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "The integral of x² dx is:",
    question_hi: "x² dx का समाकलन क्या है?",
    options_en: ["x³/3 + C", "3x² + C", "x³ + C", "x²/3 + C"],
    options_hi: ["x³/3 + C", "3x² + C", "x³ + C", "x²/3 + C"],
    answer_en: "x³/3 + C",
    answer_hi: "x³/3 + C",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "If A = {1,2,3} and B = {a,b}, then number of functions from A to B is:",
    question_hi:
      "यदि A = {1,2,3} और B = {a,b}, तो A से B में कितने फलन संभव हैं?",
    options_en: ["6", "8", "9", "12"],
    options_hi: ["6", "8", "9", "12"],
    answer_en: "8",
    answer_hi: "8",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "The solution of the equation 2x + 3 = 7 is:",
    question_hi: "समीकरण 2x + 3 = 7 का हल क्या है?",
    options_en: ["x = 2", "x = 3", "x = 4", "x = 5"],
    options_hi: ["x = 2", "x = 3", "x = 4", "x = 5"],
    answer_en: "x = 2",
    answer_hi: "x = 2",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "The slope of the line 3x - 2y + 6 = 0 is:",
    question_hi: "रेखा 3x - 2y + 6 = 0 का ढाल क्या है?",
    options_en: ["3/2", "-3/2", "2/3", "-2/3"],
    options_hi: ["3/2", "-3/2", "2/3", "-2/3"],
    answer_en: "3/2",
    answer_hi: "3/2",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "The quadratic equation x² - 5x + 6 = 0 has roots:",
    question_hi: "x² - 5x + 6 = 0 समीकरण के मूल क्या हैं?",
    options_en: ["2 and 3", "1 and 6", "3 and 5", "2 and 5"],
    options_hi: ["2 और 3", "1 और 6", "3 और 5", "2 और 5"],
    answer_en: "2 and 3",
    answer_hi: "2 और 3",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "If A and B are independent events, then P(A ∩ B) = ?",
    question_hi: "यदि A और B स्वतंत्र घटनाएँ हैं, तो P(A ∩ B) = ?",
    options_en: ["P(A) × P(B)", "P(A) + P(B)", "P(A) - P(B)", "None"],
    options_hi: ["P(A) × P(B)", "P(A) + P(B)", "P(A) - P(B)", "कोई नहीं"],
    answer_en: "P(A) × P(B)",
    answer_hi: "P(A) × P(B)",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "The distance between points (3,4) and (0,0) is:",
    question_hi: "(3,4) और (0,0) के बीच की दूरी क्या है?",
    options_en: ["5", "4", "3", "7"],
    options_hi: ["5", "4", "3", "7"],
    answer_en: "5",
    answer_hi: "5",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "The coordinates of the midpoint of (2,3) and (4,7) are:",
    question_hi: "(2,3) और (4,7) के मध्यबिंदु के निर्देशांक क्या हैं?",
    options_en: ["(3,5)", "(2,5)", "(3,4)", "(4,5)"],
    options_hi: ["(3,5)", "(2,5)", "(3,4)", "(4,5)"],
    answer_en: "(3,5)",
    answer_hi: "(3,5)",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "If the sum of roots of x² - 7x + 10 = 0 is S, then S = ?",
    question_hi: "यदि x² - 7x + 10 = 0 के मूलों का योग S है, तो S = ?",
    options_en: ["7", "-7", "10", "-10"],
    options_hi: ["7", "-7", "10", "-10"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Number of permutations of 5 objects taken 3 at a time is:",
    question_hi:
      "5 वस्तुओं को 3-3 के समूह में व्यवस्थित करने की कुल संख्‍या क्या है?",
    options_en: ["60", "20", "10", "15"],
    options_hi: ["60", "20", "10", "15"],
    answer_en: "60",
    answer_hi: "60",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Area of triangle with base 6 cm and height 4 cm is:",
    question_hi:
      "6 सेमी आधार और 4 सेमी ऊँचाई वाले त्रिभुज का क्षेत्रफल क्या है?",
    options_en: ["12 cm²", "10 cm²", "14 cm²", "8 cm²"],
    options_hi: ["12 cm²", "10 cm²", "14 cm²", "8 cm²"],
    answer_en: "12 cm²",
    answer_hi: "12 cm²",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "nth term of the arithmetic progression 2,5,8,11,... is:",
    question_hi: "2,5,8,11,... अंकगणितीय श्रेणी का nवाँ पद क्या है?",
    options_en: ["3n - 1", "3n - 4", "2n + 3", "5n - 2"],
    options_hi: ["3n - 1", "3n - 4", "2n + 3", "5n - 2"],
    answer_en: "3n - 1",
    answer_hi: "3n - 1",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "If tanA = 1, then A = ?",
    question_hi: "यदि tanA = 1 है, तो A का मान क्या है?",
    options_en: ["45°", "30°", "60°", "90°"],
    options_hi: ["45°", "30°", "60°", "90°"],
    answer_en: "45°",
    answer_hi: "45°",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Equation of x-axis is:",
    question_hi: "x-अक्ष का समीकरण क्या है?",
    options_en: ["y = 0", "x = 0", "x = y", "x + y = 0"],
    options_hi: ["y = 0", "x = 0", "x = y", "x + y = 0"],
    answer_en: "y = 0",
    answer_hi: "y = 0",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Equation of y-axis is:",
    question_hi: "y-अक्ष का समीकरण क्या है?",
    options_en: ["x = 0", "y = 0", "x = y", "x + y = 0"],
    options_hi: ["x = 0", "y = 0", "x = y", "x + y = 0"],
    answer_en: "x = 0",
    answer_hi: "x = 0",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "Value of log₁₀100 is:",
    question_hi: "log₁₀100 का मान क्या है?",
    options_en: ["2", "1", "10", "0"],
    options_hi: ["2", "1", "10", "0"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "If radius of circle is 7 cm, area is:",
    question_hi: "यदि वृत्त की त्रिज्या 7 सेमी है, तो क्षेत्रफल क्या है?",
    options_en: ["154 cm²", "44 cm²", "49 cm²", "77 cm²"],
    options_hi: ["154 cm²", "44 cm²", "49 cm²", "77 cm²"],
    answer_en: "154 cm²",
    answer_hi: "154 cm²",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "If a = 2, b = 3, then (a + b)² = ?",
    question_hi: "यदि a = 2, b = 3, तो (a + b)² का मान क्या है?",
    options_en: ["25", "10", "13", "20"],
    options_hi: ["25", "10", "13", "20"],
    answer_en: "25",
    answer_hi: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "For z = 3 + 4i, what is |z|?",
    question_hi: "z = 3 + 4i के लिए |z| का मान क्या है?",
    options_en: ["5", "7", "4", "3"],
    options_hi: ["5", "7", "4", "3"],
    answer_en: "5",
    answer_hi: "5",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "The determinant of [[1,2],[3,4]] is:",
    question_hi: "[[1,2],[3,4]] का सारणिक (determinant) क्या है?",
    options_en: ["-2", "2", "1", "0"],
    options_hi: ["-2", "2", "1", "0"],
    answer_en: "-2",
    answer_hi: "-2",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "If A = [[1,1],[0,1]], then A⁵ equals:",
    question_hi: "यदि A = [[1,1],[0,1]] हो, तो A⁵ क्या होगा?",
    options_en: [
      "[[1,5],[0,1]]",
      "[[1,1],[0,5]]",
      "[[5,1],[0,1]]",
      "[[1,0],[5,1]]",
    ],
    options_hi: [
      "[[1,5],[0,1]]",
      "[[1,1],[0,5]]",
      "[[5,1],[0,1]]",
      "[[1,0],[5,1]]",
    ],
    answer_en: "[[1,5],[0,1]]",
    answer_hi: "[[1,5],[0,1]]",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "The sum to infinity of GP 2, 1, 1/2, ... is:",
    question_hi: "GP 2, 1, 1/2, ... का अनंत तक योग क्या है?",
    options_en: ["4", "3", "2", "5"],
    options_hi: ["4", "3", "2", "5"],
    answer_en: "4",
    answer_hi: "4",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "lim (x→0) (sin x)/x equals:",
    question_hi: "lim (x→0) (sin x)/x का मान है:",
    options_en: ["1", "0", "∞", "Does not exist"],
    options_hi: ["1", "0", "∞", "अस्तित्व नहीं"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "f(x) = |x| is differentiable at x = 0?",
    question_hi: "f(x) = |x| x = 0 पर अवकलनीय है?",
    options_en: ["No", "Yes", "Only from right", "Only from left"],
    options_hi: ["नहीं", "हाँ", "केवल दाएँ से", "केवल बाएँ से"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "∫₀¹ 2x dx equals:",
    question_hi: "∫₀¹ 2x dx का मान है:",
    options_en: ["1", "2", "1/2", "3/2"],
    options_hi: ["1", "2", "1/2", "3/2"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "If a·b = 0 and a,b ≠ 0, then vectors a and b are:",
    question_hi: "यदि a·b = 0 और a,b ≠ 0, तो a और b वेक्टर हैं:",
    options_en: ["Perpendicular", "Parallel", "Equal", "None"],
    options_hi: ["लंबवत", "समांतर", "समान", "कोई नहीं"],
    answer_en: "Perpendicular",
    answer_hi: "लंबवत",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "If l, m, n are direction cosines of a line, then:",
    question_hi: "यदि l, m, n किसी रेखा के दिशिकोण कोसाइन हैं, तो:",
    options_en: [
      "l² + m² + n² = 1",
      "l + m + n = 1",
      "lm + mn + nl = 1",
      "l² + m² = n²",
    ],
    options_hi: [
      "l² + m² + n² = 1",
      "l + m + n = 1",
      "lm + mn + nl = 1",
      "l² + m² = n²",
    ],
    answer_en: "l² + m² + n² = 1",
    answer_hi: "l² + m² + n² = 1",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Equation of a circle with centre (0,0) and radius 5 is:",
    question_hi: "केंद्र (0,0) और त्रिज्या 5 वाले वृत्त का समीकरण है:",
    options_en: [
      "x² + y² = 25",
      "x² + y² = 10",
      "(x-5)² + y² = 0",
      "x² - y² = 25",
    ],
    options_hi: [
      "x² + y² = 25",
      "x² + y² = 10",
      "(x-5)² + y² = 0",
      "x² - y² = 25",
    ],
    answer_en: "x² + y² = 25",
    answer_hi: "x² + y² = 25",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Eccentricity of the parabola y² = 4ax is:",
    question_hi: "परवलय y² = 4ax का विकेन्द्रता (e) है:",
    options_en: ["1", "0", "1/2", "2"],
    options_hi: ["1", "0", "1/2", "2"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "Focus of parabola y² = 4ax is:",
    question_hi: "परवलय y² = 4ax का फोकस है:",
    options_en: ["(a, 0)", "(-a, 0)", "(0, a)", "(0, -a)"],
    options_hi: ["(a, 0)", "(-a, 0)", "(0, a)", "(0, -a)"],
    answer_en: "(a, 0)",
    answer_hi: "(a, 0)",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Eccentricity of ellipse x²/9 + y²/4 = 1 is:",
    question_hi: "दीर्घवृत्त x²/9 + y²/4 = 1 की विकेन्द्रता (e) है:",
    options_en: ["√5/3", "2/3", "√13/3", "1/3"],
    options_hi: ["√5/3", "2/3", "√13/3", "1/3"],
    answer_en: "√5/3",
    answer_hi: "√5/3",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Eccentricity of hyperbola x²/9 − y²/4 = 1 is:",
    question_hi: "आयतवक्र x²/9 − y²/4 = 1 की विकेन्द्रता (e) है:",
    options_en: ["√13/3", "√5/3", "2/3", "3/2"],
    options_hi: ["√13/3", "√5/3", "2/3", "3/2"],
    answer_en: "√13/3",
    answer_hi: "√13/3",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "If sinA = 3/5 and cosB = 5/13 (A,B acute), then sin(A + B) =",
    question_hi:
      "यदि sinA = 3/5 और cosB = 5/13 (A,B तीक्ष्ण) हैं, तो sin(A + B) =",
    options_en: ["63/65", "56/65", "33/65", "24/65"],
    options_hi: ["63/65", "56/65", "33/65", "24/65"],
    answer_en: "63/65",
    answer_hi: "63/65",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "General solution of sin x = 0 is:",
    question_hi: "sin x = 0 का सामान्य हल है:",
    options_en: ["x = nπ", "x = (2n+1)π/2", "x = 2nπ/3", "x = nπ/2"],
    options_hi: ["x = nπ", "x = (2n+1)π/2", "x = 2nπ/3", "x = nπ/2"],
    answer_en: "x = nπ",
    answer_hi: "x = nπ",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Sum of first 50 natural numbers is:",
    question_hi: "पहले 50 प्राकृतिक संख्याओं का योग है:",
    options_en: ["1275", "1225", "1325", "1250"],
    options_hi: ["1275", "1225", "1325", "1250"],
    answer_en: "1275",
    answer_hi: "1275",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "Coefficient of x³ in (1 + 2x)⁵ is:",
    question_hi: "(1 + 2x)⁵ में x³ का गुणांक है:",
    options_en: ["80", "40", "120", "60"],
    options_hi: ["80", "40", "120", "60"],
    answer_en: "80",
    answer_hi: "80",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "A fair die is rolled. P(number ≥ 4) is:",
    question_hi: "एक निष्पक्ष पासा फेंका गया। P(संख्या ≥ 4) क्या है?",
    options_en: ["1/2", "1/3", "2/3", "1/6"],
    options_hi: ["1/2", "1/3", "2/3", "1/6"],
    answer_en: "1/2",
    answer_hi: "1/2",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Mean of the data 2, 4, 6, 8 is:",
    question_hi: "2, 4, 6, 8 का औसत है:",
    options_en: ["5", "6", "4", "7"],
    options_hi: ["5", "6", "4", "7"],
    answer_en: "5",
    answer_hi: "5",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "General solution of dy/dx = y is:",
    question_hi: "dy/dx = y का सामान्य हल है:",
    options_en: ["y = Ce^x", "y = Cx", "y = C/x", "y = C"],
    options_hi: ["y = Ce^x", "y = Cx", "y = C/x", "y = C"],
    answer_en: "y = Ce^x",
    answer_hi: "y = Ce^x",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "∫₀^π sin x dx equals:",
    question_hi: "∫₀^π sin x dx का मान है:",
    options_en: ["2", "0", "1", "π"],
    options_hi: ["2", "0", "1", "π"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Area under y = x from x = 0 to x = 1 is:",
    question_hi: "y = x वक्र के नीचे x = 0 से x = 1 तक का क्षेत्रफल है:",
    options_en: ["1/2", "1", "2", "1/4"],
    options_hi: ["1/2", "1", "2", "1/4"],
    answer_en: "1/2",
    answer_hi: "1/2",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "For quadratic ax² + bx + c = 0, roots are equal if:",
    question_hi: "द्विघात ax² + bx + c = 0 के मूल समान होंगे यदि:",
    options_en: [
      "b² − 4ac = 0",
      "b² − 4ac > 0",
      "b² − 4ac < 0",
      "a + b + c = 0",
    ],
    options_hi: [
      "b² − 4ac = 0",
      "b² − 4ac > 0",
      "b² − 4ac < 0",
      "a + b + c = 0",
    ],
    answer_en: "b² − 4ac = 0",
    answer_hi: "b² − 4ac = 0",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "tan⁻¹(1) equals:",
    question_hi: "tan⁻¹(1) का मान है:",
    options_en: ["π/4", "π/3", "π/6", "π/2"],
    options_hi: ["π/4", "π/3", "π/6", "π/2"],
    answer_en: "π/4",
    answer_hi: "π/4",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Determinant of identity matrix I₂ is:",
    question_hi: "इकाई मैट्रिक्स I₂ का सारणिक (determinant) है:",
    options_en: ["1", "0", "2", "-1"],
    options_hi: ["1", "0", "2", "-1"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "Magnitude of vector 2i − j + 2k is:",
    question_hi: "वेक्टर 2i − j + 2k का परिमाण है:",
    options_en: ["3", "√9", "√5", "√8"],
    options_hi: ["3", "√9", "√5", "√8"],
    answer_en: "3",
    answer_hi: "3",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "Direction ratios of the line joining (1,2,3) and (4,6,9) are:",
    question_hi: "(1,2,3) और (4,6,9) को जोड़ने वाली रेखा के दिशा अनुपात हैं:",
    options_en: ["3, 4, 6", "1, 2, 3", "4, 6, 9", "2, 4, 6"],
    options_hi: ["3, 4, 6", "1, 2, 3", "4, 6, 9", "2, 4, 6"],
    answer_en: "3, 4, 6",
    answer_hi: "3, 4, 6",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Equation of the plane through origin with normal (1, −2, 3):",
    question_hi:
      "उद्गम से गुजरने वाले तथा सामान्य (1, −2, 3) वाले तल का समीकरण:",
    options_en: [
      "x − 2y + 3z = 0",
      "x + 2y + 3z = 0",
      "x − 2y − 3z = 0",
      "−x + 2y − 3z = 0",
    ],
    options_hi: [
      "x − 2y + 3z = 0",
      "x + 2y + 3z = 0",
      "x − 2y − 3z = 0",
      "−x + 2y − 3z = 0",
    ],
    answer_en: "x − 2y + 3z = 0",
    answer_hi: "x − 2y + 3z = 0",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "If α, β are roots of x² − px + q = 0, then α + β equals:",
    question_hi: "यदि α, β, x² − px + q = 0 के मूल हैं, तो α + β का मान:",
    options_en: ["p", "q", "−p", "p/q"],
    options_hi: ["p", "q", "−p", "p/q"],
    answer_en: "p",
    answer_hi: "p",
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
