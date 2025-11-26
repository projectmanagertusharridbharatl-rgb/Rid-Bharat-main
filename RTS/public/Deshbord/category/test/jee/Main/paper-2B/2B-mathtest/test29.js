const questions = [
  {
    num: 1,
    question_en: "lim (x→0) (sin x)/x equals:",
    question_hi: "lim (x→0) (sin x)/x का मान है:",
    options_en: ["∞", "1", "Does not exist", "0"],
    options_hi: ["∞", "1", "Does not exist", "0"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Value of sin²60° + cos²60° is:",
    question_hi: "sin²60° + cos²60° का मान है:",
    options_en: ["3/4", "0", "1/2", "1"],
    options_hi: ["3/4", "0", "1/2", "1"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "The integral of 4x^5 dx equals:",
    question_hi: "4x^5 dx का समाकलन है:",
    options_en: ["4x^6 + C", "20x^5 + C", "4/4 x^5 + C", "4/6 x^6 + C"],
    options_hi: ["4x^6 + C", "20x^5 + C", "4/4 x^5 + C", "4/6 x^6 + C"],
    answer_en: "4/6 x^6 + C",
    answer_hi: "4/6 x^6 + C",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Value of sin²45° + cos²45° is:",
    question_hi: "sin²45° + cos²45° का मान है:",
    options_en: ["1/2", "3/4", "0", "1"],
    options_hi: ["1/2", "3/4", "0", "1"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "The distance between points (-1,-2) and (0,-2) is:",
    question_hi: "बिंदु (-1,-2) और (0,-2) के बीच की दूरी है:",
    options_en: ["0", "1", "√0", "√1"],
    options_hi: ["0", "1", "√0", "√1"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "∫_1^2 (2x + 4) dx equals:",
    question_hi: "∫_1^2 (2x + 4) dx का मान है:",
    options_en: ["10", "14", "7", "3.0"],
    options_hi: ["10", "14", "7", "3.0"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "The derivative of 4x^5 with respect to x is:",
    question_hi: "4x^5 का x के सापेक्ष अवकलज क्या है?",
    options_en: ["20x^5", "4x^4", "20x^4", "16x^3"],
    options_hi: ["20x^5", "4x^4", "20x^4", "16x^3"],
    answer_en: "20x^4",
    answer_hi: "20x^4",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Magnitude of vector 2i + 0j + 2k is:",
    question_hi: "वेक्टर 2i + 0j + 2k का परिमाण है:",
    options_en: ["√4", "4", "2", "√8"],
    options_hi: ["√4", "4", "2", "√8"],
    answer_en: "√8",
    answer_hi: "√8",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Equation of a circle with centre (0,0) and radius 9 is:",
    question_hi: "केंद्र (0,0) और त्रिज्या 9 वाले वृत्त का समीकरण है:",
    options_en: [
      "(x−9)² + y² = 0",
      "x² − y² = 81",
      "x² + y² = 18",
      "x² + y² = 81",
    ],
    options_hi: [
      "(x−9)² + y² = 0",
      "x² − y² = 81",
      "x² + y² = 18",
      "x² + y² = 81",
    ],
    answer_en: "x² + y² = 81",
    answer_hi: "x² + y² = 81",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "Equation of a circle with centre (0,0) and radius 7 is:",
    question_hi: "केंद्र (0,0) और त्रिज्या 7 वाले वृत्त का समीकरण है:",
    options_en: [
      "x² + y² = 14",
      "(x−7)² + y² = 0",
      "x² − y² = 49",
      "x² + y² = 49",
    ],
    options_hi: [
      "x² + y² = 14",
      "(x−7)² + y² = 0",
      "x² − y² = 49",
      "x² + y² = 49",
    ],
    answer_en: "x² + y² = 49",
    answer_hi: "x² + y² = 49",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Magnitude of vector 1i + -3j + -3k is:",
    question_hi: "वेक्टर 1i + -3j + -3k का परिमाण है:",
    options_en: ["√10", "√19", "7", "3"],
    options_hi: ["√10", "√19", "7", "3"],
    answer_en: "√19",
    answer_hi: "√19",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en:
      "Equation of the plane through origin with normal (0, -3, 3) is:",
    question_hi:
      "उद्गम से गुजरने वाला तथा सामान्य (0, -3, 3) वाला तल का समीकरण है:",
    options_en: [
      "0x + -3y + 3z = 0",
      "-3x + 0y + 3z = 0",
      "0x + -3y + 3z = 1",
      "0x − -3y + 3z = 0",
    ],
    options_hi: [
      "0x + -3y + 3z = 0",
      "-3x + 0y + 3z = 0",
      "0x + -3y + 3z = 1",
      "0x − -3y + 3z = 0",
    ],
    answer_en: "0x + -3y + 3z = 0",
    answer_hi: "0x + -3y + 3z = 0",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "The slope of the line 3x + 2y + -10 = 0 is:",
    question_hi: "रेखा 3x + 2y + -10 = 0 का ढाल है:",
    options_en: ["-3/2", "0", "3/2", "-2/3"],
    options_hi: ["-3/2", "0", "3/2", "-2/3"],
    answer_en: "-3/2",
    answer_hi: "-3/2",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "The value of P(8,2) is:",
    question_hi: "P(8,2) का मान है:",
    options_en: ["336", "56", "8", "42"],
    options_hi: ["336", "56", "8", "42"],
    answer_en: "56",
    answer_hi: "56",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Magnitude of vector -2i + -3j + 0k is:",
    question_hi: "वेक्टर -2i + -3j + 0k का परिमाण है:",
    options_en: ["√4", "5", "3", "√13"],
    options_hi: ["√4", "5", "3", "√13"],
    answer_en: "√13",
    answer_hi: "√13",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "The determinant of [[-3,-3],[2,-1]] is:",
    question_hi: "[[-3,-3],[2,-1]] का सारणिक (determinant) है:",
    options_en: ["-5", "-3", "-9", "9"],
    options_hi: ["-5", "-3", "-9", "9"],
    answer_en: "9",
    answer_hi: "9",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "The distance between points (-3,2) and (-2,-5) is:",
    question_hi: "बिंदु (-3,2) और (-2,-5) के बीच की दूरी है:",
    options_en: ["√1", "1", "7", "√50"],
    options_hi: ["√1", "1", "7", "√50"],
    answer_en: "√50",
    answer_hi: "√50",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "The determinant of [[-4,0],[-3,3]] is:",
    question_hi: "[[-4,0],[-3,3]] का सारणिक (determinant) है:",
    options_en: ["0", "-4", "-12", "12"],
    options_hi: ["0", "-4", "-12", "12"],
    answer_en: "-12",
    answer_hi: "-12",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "The slope of the line 1x + -2y + -6 = 0 is:",
    question_hi: "रेखा 1x + -2y + -6 = 0 का ढाल है:",
    options_en: ["-2/1", "0", "1/2", "2/1"],
    options_hi: ["-2/1", "0", "1/2", "2/1"],
    answer_en: "1/2",
    answer_hi: "1/2",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "The distance between points (3,1) and (-3,-4) is:",
    question_hi: "बिंदु (3,1) और (-3,-4) के बीच की दूरी है:",
    options_en: ["6", "√36", "5", "√61"],
    options_hi: ["6", "√36", "5", "√61"],
    answer_en: "√61",
    answer_hi: "√61",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "For z = 2 + 1i, |z| equals:",
    question_hi: "z = 2 + 1i के लिए |z| का मान है:",
    options_en: ["3", "1", "√3", "√5"],
    options_hi: ["3", "1", "√3", "√5"],
    answer_en: "√5",
    answer_hi: "√5",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "The determinant of [[1,-3],[-3,-4]] is:",
    question_hi: "[[1,-3],[-3,-4]] का सारणिक (determinant) है:",
    options_en: ["-13", "5", "-15", "-9"],
    options_hi: ["-13", "5", "-15", "-9"],
    answer_en: "-13",
    answer_hi: "-13",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "The value of C(10,4) is:",
    question_hi: "C(10,4) का मान है:",
    options_en: ["252", "126", "210", "120"],
    options_hi: ["252", "126", "210", "120"],
    answer_en: "210",
    answer_hi: "210",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "For z = 6 + 6i, |z| equals:",
    question_hi: "z = 6 + 6i के लिए |z| का मान है:",
    options_en: ["12", "√72", "√0", "0"],
    options_hi: ["12", "√72", "√0", "0"],
    answer_en: "√72",
    answer_hi: "√72",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Value of sin²30° + cos²30° is:",
    question_hi: "sin²30° + cos²30° का मान है:",
    options_en: ["1/2", "1", "3/4", "0"],
    options_hi: ["1/2", "1", "3/4", "0"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "The slope of the line -1x + -4y + 0 = 0 is:",
    question_hi: "रेखा -1x + -4y + 0 = 0 का ढाल है:",
    options_en: ["-1/4", "-1/-4", "0", "4/-1"],
    options_hi: ["-1/4", "-1/-4", "0", "4/-1"],
    answer_en: "-1/4",
    answer_hi: "-1/4",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "Equation of the plane through origin with normal (0, 3, 1) is:",
    question_hi:
      "उद्गम से गुजरने वाला तथा सामान्य (0, 3, 1) वाला तल का समीकरण है:",
    options_en: [
      "0x − 3y + 1z = 0",
      "3x + 0y + 1z = 0",
      "0x + 3y + 1z = 1",
      "0x + 3y + 1z = 0",
    ],
    options_hi: [
      "0x − 3y + 1z = 0",
      "3x + 0y + 1z = 0",
      "0x + 3y + 1z = 1",
      "0x + 3y + 1z = 0",
    ],
    answer_en: "0x + 3y + 1z = 0",
    answer_hi: "0x + 3y + 1z = 0",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "The n-th term of the A.P. with first term 4 and common difference 1 is:",
    question_hi: "प्रथम पद 4 और समानांतर अंतर 1 वाली ए.पी. का nवाँ पद है:",
    options_en: ["4n + 1", "4 + (n−1)1", "4 + (n+1)1", "4 + nd"],
    options_hi: ["4n + 1", "4 + (n−1)1", "4 + (n+1)1", "4 + nd"],
    answer_en: "4 + (n−1)1",
    answer_hi: "4 + (n−1)1",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "The distance between points (-1,-5) and (-3,-2) is:",
    question_hi: "बिंदु (-1,-5) और (-3,-2) के बीच की दूरी है:",
    options_en: ["2", "3", "√4", "√13"],
    options_hi: ["2", "3", "√4", "√13"],
    answer_en: "√13",
    answer_hi: "√13",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Coefficient of x^1 in (1 + x)^4 is:",
    question_hi: "(1 + x)^4 में x^1 का गुणांक है:",
    options_en: ["3", "4", "5", "1"],
    options_hi: ["3", "4", "5", "1"],
    answer_en: "4",
    answer_hi: "4",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "The determinant of [[1,-4],[-2,-1]] is:",
    question_hi: "[[1,-4],[-2,-1]] का सारणिक (determinant) है:",
    options_en: ["-6", "-9", "7", "-6"],
    options_hi: ["-6", "-9", "7", "-6"],
    answer_en: "-9",
    answer_hi: "-9",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "The value of C(7,3) is:",
    question_hi: "C(7,3) का मान है:",
    options_en: ["35", "20", "21"],
    options_hi: ["35", "20", "21"],
    answer_en: "35",
    answer_hi: "35",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Coefficient of x^2 in (1 + x)^5 is:",
    question_hi: "(1 + x)^5 में x^2 का गुणांक है:",
    options_en: ["6", "15", "10", "5"],
    options_hi: ["6", "15", "10", "5"],
    answer_en: "10",
    answer_hi: "10",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Coefficient of x^2 in (1 + x)^4 is:",
    question_hi: "(1 + x)^4 में x^2 का गुणांक है:",
    options_en: ["3", "4", "6", "10"],
    options_hi: ["3", "4", "6", "10"],
    answer_en: "6",
    answer_hi: "6",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "The determinant of [[2,-2],[4,2]] is:",
    question_hi: "[[2,-2],[4,2]] का सारणिक (determinant) है:",
    options_en: ["6", "0", "12", "-4"],
    options_hi: ["6", "0", "12", "-4"],
    answer_en: "12",
    answer_hi: "12",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "∫_1^3 (1x + 4) dx equals:",
    question_hi: "∫_1^3 (1x + 4) dx का मान है:",
    options_en: ["4.0", "12", "16", "18"],
    options_hi: ["4.0", "12", "16", "18"],
    answer_en: "12",
    answer_hi: "12",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "The determinant of [[4,2],[-2,-2]] is:",
    question_hi: "[[4,2],[-2,-2]] का सारणिक (determinant) है:",
    options_en: ["-12", "2", "0", "-4"],
    options_hi: ["-12", "2", "0", "-4"],
    answer_en: "-4",
    answer_hi: "-4",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "Magnitude of vector 1i + -3j + -1k is:",
    question_hi: "वेक्टर 1i + -3j + -1k का परिमाण है:",
    options_en: ["√10", "√11", "3", "5"],
    options_hi: ["√10", "√11", "3", "5"],
    answer_en: "√11",
    answer_hi: "√11",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "The determinant of [[3,0],[-3,-3]] is:",
    question_hi: "[[3,0],[-3,-3]] का सारणिक (determinant) है:",
    options_en: ["-9", "-3", "0"],
    options_hi: ["-9", "-3", "0"],
    answer_en: "-9",
    answer_hi: "-9",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "The integral of 1x^4 dx equals:",
    question_hi: "1x^4 dx का समाकलन है:",
    options_en: ["x^5/(5) + C", "4x^4 + C", "1/3 x^4 + C", "1x^5 + C"],
    options_hi: ["x^5/(5) + C", "4x^4 + C", "1/3 x^4 + C", "1x^5 + C"],
    answer_en: "x^5/(5) + C",
    answer_hi: "x^5/(5) + C",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "The n-th term of the A.P. with first term 1 and common difference 5 is:",
    question_hi: "प्रथम पद 1 और समानांतर अंतर 5 वाली ए.पी. का nवाँ पद है:",
    options_en: ["1 + (n+1)5", "1 + (n−1)5", "1 + nd", "1n + 5"],
    options_hi: ["1 + (n+1)5", "1 + (n−1)5", "1 + nd", "1n + 5"],
    answer_en: "1 + (n−1)5",
    answer_hi: "1 + (n−1)5",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "If tanA = 5/12, then cosA = ?",
    question_hi: "यदि tanA = 5/12 है, तो cosA का मान क्या है?",
    options_en: ["12/13", "13/5", "5/12", "13/12"],
    options_hi: ["12/13", "13/5", "5/12", "13/12"],
    answer_en: "12/13",
    answer_hi: "12/13",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "Equation of the plane through origin with normal (-1, 3, 2) is:",
    question_hi:
      "उद्गम से गुजरने वाला तथा सामान्य (-1, 3, 2) वाला तल का समीकरण है:",
    options_en: [
      "-1x + 3y + 2z = 1",
      "-1x − 3y + 2z = 0",
      "-1x + 3y + 2z = 0",
      "3x + -1y + 2z = 0",
    ],
    options_hi: [
      "-1x + 3y + 2z = 1",
      "-1x − 3y + 2z = 0",
      "-1x + 3y + 2z = 0",
      "3x + -1y + 2z = 0",
    ],
    answer_en: "-1x + 3y + 2z = 0",
    answer_hi: "-1x + 3y + 2z = 0",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "The derivative of 1x^2 with respect to x is:",
    question_hi: "1x^2 का x के सापेक्ष अवकलज क्या है?",
    options_en: ["2x^2", "2x^1", "1x^0", "1x^1"],
    options_hi: ["2x^2", "2x^1", "1x^0", "1x^1"],
    answer_en: "2x^1",
    answer_hi: "2x^1",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "The n-th term of the A.P. with first term 0 and common difference 2 is:",
    question_hi: "प्रथम पद 0 और समानांतर अंतर 2 वाली ए.पी. का nवाँ पद है:",
    options_en: ["0 + (n+1)2", "0 + (n−1)2", "0 + nd", "0n + 2"],
    options_hi: ["0 + (n+1)2", "0 + (n−1)2", "0 + nd", "0n + 2"],
    answer_en: "0 + (n−1)2",
    answer_hi: "0 + (n−1)2",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "The n-th term of the A.P. with first term 3 and common difference 2 is:",
    question_hi: "प्रथम पद 3 और समानांतर अंतर 2 वाली ए.पी. का nवाँ पद है:",
    options_en: ["3n + 2", "3 + (n−1)2", "3 + (n+1)2", "3 + nd"],
    options_hi: ["3n + 2", "3 + (n−1)2", "3 + (n+1)2", "3 + nd"],
    answer_en: "3 + (n−1)2",
    answer_hi: "3 + (n−1)2",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "The distance between points (-1,0) and (-4,1) is:",
    question_hi: "बिंदु (-1,0) और (-4,1) के बीच की दूरी है:",
    options_en: ["√9", "√10", "3", "1"],
    options_hi: ["√9", "√10", "3", "1"],
    answer_en: "√10",
    answer_hi: "√10",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "The n-th term of the A.P. with first term -4 and common difference 1 is:",
    question_hi: "प्रथम पद -4 और समानांतर अंतर 1 वाली ए.पी. का nवाँ पद है:",
    options_en: ["-4 + nd", "-4 + (n+1)1", "-4 + (n−1)1", "-4n + 1"],
    options_hi: ["-4 + nd", "-4 + (n+1)1", "-4 + (n−1)1", "-4n + 1"],
    answer_en: "-4 + (n−1)1",
    answer_hi: "-4 + (n−1)1",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "A fair die is rolled. The probability of getting a number ≥ 4 is:",
    question_hi:
      "एक निष्पक्ष पासा फेंका जाता है। 4 या उससे अधिक संख्या आने की प्रायिकता है:",
    options_en: ["1/2", "2/3", "1/6", "1/3"],
    options_hi: ["1/2", "2/3", "1/6", "1/3"],
    answer_en: "1/2",
    answer_hi: "1/2",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Equation of a circle with centre (0,0) and radius 2 is:",
    question_hi: "केंद्र (0,0) और त्रिज्या 2 वाले वृत्त का समीकरण है:",
    options_en: [
      "x² + y² = 4",
      "x² − y² = 4",
      "(x−2)² + y² = 0",
      "x² + y² = 4",
    ],
    options_hi: [
      "x² + y² = 4",
      "x² − y² = 4",
      "(x−2)² + y² = 0",
      "x² + y² = 4",
    ],
    answer_en: "x² + y² = 4",
    answer_hi: "x² + y² = 4",
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
