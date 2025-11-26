const questions = [
  {
    "num": 1,
    "question_en": "lim (x→0) (sin x)/x equals:",
    "question_hi": "lim (x→0) (sin x)/x का मान है:",
    "options_en": [
      "Does not exist",
      "1",
      "∞",
      "0"
    ],
    "options_hi": [
      "Does not exist",
      "1",
      "∞",
      "0"
    ],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Magnitude of vector 0i + 1j + 3k is:",
    "question_hi": "वेक्टर 0i + 1j + 3k का परिमाण है:",
    "options_en": [
      "4",
      "3",
      "√10",
      "√1"
    ],
    "options_hi": [
      "4",
      "3",
      "√10",
      "√1"
    ],
    "answer_en": "√10",
    "answer_hi": "√10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "The value of P(6,3) is:",
    "question_hi": "P(6,3) का मान है:",
    "options_en": [
      "360",
      "120",
      "60",
      "30"
    ],
    "options_hi": [
      "360",
      "120",
      "60",
      "30"
    ],
    "answer_en": "120",
    "answer_hi": "120",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The determinant of [[3,-4],[-4,-3]] is:",
    "question_hi": "[[3,-4],[-4,-3]] का सारणिक (determinant) है:",
    "options_en": [
      "-25",
      "-8",
      "-24",
      "7"
    ],
    "options_hi": [
      "-25",
      "-8",
      "-24",
      "7"
    ],
    "answer_en": "-25",
    "answer_hi": "-25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Coefficient of x^1 in (1 + x)^4 is:",
    "question_hi": "(1 + x)^4 में x^1 का गुणांक है:",
    "options_en": [
      "4",
      "3",
      "5",
      "1"
    ],
    "options_hi": [
      "4",
      "3",
      "5",
      "1"
    ],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Value of sin²30° + cos²30° is:",
    "question_hi": "sin²30° + cos²30° का मान है:",
    "options_en": [
      "1/2",
      "3/4",
      "0",
      "1"
    ],
    "options_hi": [
      "1/2",
      "3/4",
      "0",
      "1"
    ],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The n-th term of the A.P. with first term 1 and common difference 3 is:",
    "question_hi": "प्रथम पद 1 और समानांतर अंतर 3 वाली ए.पी. का nवाँ पद है:",
    "options_en": [
      "1 + (n−1)3",
      "1 + nd",
      "1n + 3",
      "1 + (n+1)3"
    ],
    "options_hi": [
      "1 + (n−1)3",
      "1 + nd",
      "1n + 3",
      "1 + (n+1)3"
    ],
    "answer_en": "1 + (n−1)3",
    "answer_hi": "1 + (n−1)3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The determinant of [[-2,1],[-1,4]] is:",
    "question_hi": "[[-2,1],[-1,4]] का सारणिक (determinant) है:",
    "options_en": [
      "-7",
      "2",
      "-2",
      "-9"
    ],
    "options_hi": [
      "-7",
      "2",
      "-2",
      "-9"
    ],
    "answer_en": "-7",
    "answer_hi": "-7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "The slope of the line -4x + 1y + 1 = 0 is:",
    "question_hi": "रेखा -4x + 1y + 1 = 0 का ढाल है:",
    "options_en": [
      "4",
      "0",
      "-1/-4",
      "1/-4"
    ],
    "options_hi": [
      "4",
      "0",
      "-1/-4",
      "1/-4"
    ],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "The integral of 1x^1 dx equals:",
    "question_hi": "1x^1 dx का समाकलन है:",
    "options_en": [
      "1x^2 + C",
      "1x^1 + C",
      "1/1 x^1 + C",
      "x^2/(2) + C"
    ],
    "options_hi": [
      "1x^2 + C",
      "1x^1 + C",
      "1/1 x^1 + C",
      "x^2/(2) + C"
    ],
    "answer_en": "x^2/(2) + C",
    "answer_hi": "x^2/(2) + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The distance between points (3,-2) and (-2,-3) is:",
    "question_hi": "बिंदु (3,-2) और (-2,-3) के बीच की दूरी है:",
    "options_en": [
      "5",
      "√25",
      "√26",
      "1"
    ],
    "options_hi": [
      "5",
      "√25",
      "√26",
      "1"
    ],
    "answer_en": "√26",
    "answer_hi": "√26",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Equation of a circle with centre (0,0) and radius 2 is:",
    "question_hi": "केंद्र (0,0) और त्रिज्या 2 वाले वृत्त का समीकरण है:",
    "options_en": [
      "x² + y² = 4",
      "x² − y² = 4",
      "x² + y² = 4",
      "(x−2)² + y² = 0"
    ],
    "options_hi": [
      "x² + y² = 4",
      "x² − y² = 4",
      "x² + y² = 4",
      "(x−2)² + y² = 0"
    ],
    "answer_en": "x² + y² = 4",
    "answer_hi": "x² + y² = 4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Equation of a circle with centre (0,0) and radius 5 is:",
    "question_hi": "केंद्र (0,0) और त्रिज्या 5 वाले वृत्त का समीकरण है:",
    "options_en": [
      "x² + y² = 25",
      "x² + y² = 10",
      "(x−5)² + y² = 0",
      "x² − y² = 25"
    ],
    "options_hi": [
      "x² + y² = 25",
      "x² + y² = 10",
      "(x−5)² + y² = 0",
      "x² − y² = 25"
    ],
    "answer_en": "x² + y² = 25",
    "answer_hi": "x² + y² = 25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Coefficient of x^3 in (1 + x)^8 is:",
    "question_hi": "(1 + x)^8 में x^3 का गुणांक है:",
    "options_en": [
      "56",
      "35",
      "84",
      "28"
    ],
    "options_hi": [
      "56",
      "35",
      "84",
      "28"
    ],
    "answer_en": "56",
    "answer_hi": "56",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "The determinant of [[-1,0],[-1,-3]] is:",
    "question_hi": "[[-1,0],[-1,-3]] का सारणिक (determinant) है:",
    "options_en": [
      "3",
      "-5",
      "0",
      "1"
    ],
    "options_hi": [
      "3",
      "-5",
      "0",
      "1"
    ],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The value of P(7,2) is:",
    "question_hi": "P(7,2) का मान है:",
    "options_en": [
      "210",
      "42",
      "7",
      "30"
    ],
    "options_hi": [
      "210",
      "42",
      "7",
      "30"
    ],
    "answer_en": "42",
    "answer_hi": "42",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Magnitude of vector 0i + 3j + 3k is:",
    "question_hi": "वेक्टर 0i + 3j + 3k का परिमाण है:",
    "options_en": [
      "√18",
      "3",
      "√9",
      "6"
    ],
    "options_hi": [
      "√18",
      "3",
      "√9",
      "6"
    ],
    "answer_en": "√18",
    "answer_hi": "√18",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "∫_0^3 (3x + 4) dx equals:",
    "question_hi": "∫_0^3 (3x + 4) dx का मान है:",
    "options_en": [
      "25.5",
      "13.5",
      "39",
      "21"
    ],
    "options_hi": [
      "25.5",
      "13.5",
      "39",
      "21"
    ],
    "answer_en": "25.5",
    "answer_hi": "25.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Value of sin²45° + cos²45° is:",
    "question_hi": "sin²45° + cos²45° का मान है:",
    "options_en": [
      "0",
      "3/4",
      "1/2",
      "1"
    ],
    "options_hi": [
      "0",
      "3/4",
      "1/2",
      "1"
    ],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "The slope of the line 4x + 3y + -10 = 0 is:",
    "question_hi": "रेखा 4x + 3y + -10 = 0 का ढाल है:",
    "options_en": [
      "-4/3",
      "3/4",
      "-3/4",
      "0"
    ],
    "options_hi": [
      "-4/3",
      "3/4",
      "-3/4",
      "0"
    ],
    "answer_en": "-4/3",
    "answer_hi": "-4/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "If tanA = 5/12, then cosA = ?",
    "question_hi": "यदि tanA = 5/12 है, तो cosA का मान क्या है?",
    "options_en": [
      "5/12",
      "12/13",
      "13/12",
      "13/5"
    ],
    "options_hi": [
      "5/12",
      "12/13",
      "13/12",
      "13/5"
    ],
    "answer_en": "12/13",
    "answer_hi": "12/13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Magnitude of vector 3i + 3j + -3k is:",
    "question_hi": "वेक्टर 3i + 3j + -3k का परिमाण है:",
    "options_en": [
      "√27",
      "√18",
      "3",
      "9"
    ],
    "options_hi": [
      "√27",
      "√18",
      "3",
      "9"
    ],
    "answer_en": "√27",
    "answer_hi": "√27",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "If tanA = 7/24, then cosA = ?",
    "question_hi": "यदि tanA = 7/24 है, तो cosA का मान क्या है?",
    "options_en": [
      "25/7",
      "24/25",
      "7/24",
      "25/24"
    ],
    "options_hi": [
      "25/7",
      "24/25",
      "7/24",
      "25/24"
    ],
    "answer_en": "24/25",
    "answer_hi": "24/25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The distance between points (3,0) and (-3,-3) is:",
    "question_hi": "बिंदु (3,0) और (-3,-3) के बीच की दूरी है:",
    "options_en": [
      "3",
      "6",
      "√36",
      "√45"
    ],
    "options_hi": [
      "3",
      "6",
      "√36",
      "√45"
    ],
    "answer_en": "√45",
    "answer_hi": "√45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "A fair die is rolled. The probability of getting a number ≥ 3 is:",
    "question_hi": "एक निष्पक्ष पासा फेंका जाता है। 3 या उससे अधिक संख्या आने की प्रायिकता है:",
    "options_en": [
      "1/2",
      "2/3",
      "1/6"
    ],
    "options_hi": [
      "1/2",
      "2/3",
      "1/6"
    ],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Equation of a circle with centre (0,0) and radius 9 is:",
    "question_hi": "केंद्र (0,0) और त्रिज्या 9 वाले वृत्त का समीकरण है:",
    "options_en": [
      "(x−9)² + y² = 0",
      "x² + y² = 18",
      "x² − y² = 81",
      "x² + y² = 81"
    ],
    "options_hi": [
      "(x−9)² + y² = 0",
      "x² + y² = 18",
      "x² − y² = 81",
      "x² + y² = 81"
    ],
    "answer_en": "x² + y² = 81",
    "answer_hi": "x² + y² = 81",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Coefficient of x^2 in (1 + x)^4 is:",
    "question_hi": "(1 + x)^4 में x^2 का गुणांक है:",
    "options_en": [
      "6",
      "3",
      "4",
      "10"
    ],
    "options_hi": [
      "6",
      "3",
      "4",
      "10"
    ],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "If tanA = 7/24, then sinA = ?",
    "question_hi": "यदि tanA = 7/24 है, तो sinA का मान क्या है?",
    "options_en": [
      "7/25",
      "24/25",
      "25/7",
      "7/24"
    ],
    "options_hi": [
      "7/25",
      "24/25",
      "25/7",
      "7/24"
    ],
    "answer_en": "7/25",
    "answer_hi": "7/25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Equation of a circle with centre (0,0) and radius 6 is:",
    "question_hi": "केंद्र (0,0) और त्रिज्या 6 वाले वृत्त का समीकरण है:",
    "options_en": [
      "(x−6)² + y² = 0",
      "x² + y² = 12",
      "x² + y² = 36",
      "x² − y² = 36"
    ],
    "options_hi": [
      "(x−6)² + y² = 0",
      "x² + y² = 12",
      "x² + y² = 36",
      "x² − y² = 36"
    ],
    "answer_en": "x² + y² = 36",
    "answer_hi": "x² + y² = 36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "The integral of 2x^1 dx equals:",
    "question_hi": "2x^1 dx का समाकलन है:",
    "options_en": [
      "2/2 x^2 + C",
      "2/1 x^1 + C",
      "2x^2 + C",
      "2x^1 + C"
    ],
    "options_hi": [
      "2/2 x^2 + C",
      "2/1 x^1 + C",
      "2x^2 + C",
      "2x^1 + C"
    ],
    "answer_en": "2/2 x^2 + C",
    "answer_hi": "2/2 x^2 + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Equation of the plane through origin with normal (-2, 0, -3) is:",
    "question_hi": "उद्गम से गुजरने वाला तथा सामान्य (-2, 0, -3) वाला तल का समीकरण है:",
    "options_en": [
      "-2x + 0y + -3z = 0",
      "0x + -2y + -3z = 0",
      "-2x + 0y + -3z = 1",
      "-2x − 0y + -3z = 0"
    ],
    "options_hi": [
      "-2x + 0y + -3z = 0",
      "0x + -2y + -3z = 0",
      "-2x + 0y + -3z = 1",
      "-2x − 0y + -3z = 0"
    ],
    "answer_en": "-2x + 0y + -3z = 0",
    "answer_hi": "-2x + 0y + -3z = 0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The distance between points (3,-4) and (-3,-1) is:",
    "question_hi": "बिंदु (3,-4) और (-3,-1) के बीच की दूरी है:",
    "options_en": [
      "√45",
      "6",
      "3",
      "√36"
    ],
    "options_hi": [
      "√45",
      "6",
      "3",
      "√36"
    ],
    "answer_en": "√45",
    "answer_hi": "√45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The value of C(10,2) is:",
    "question_hi": "C(10,2) का मान है:",
    "options_en": [
      "10",
      "36",
      "120",
      "45"
    ],
    "options_hi": [
      "10",
      "36",
      "120",
      "45"
    ],
    "answer_en": "45",
    "answer_hi": "45",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "The determinant of [[4,-2],[-1,0]] is:",
    "question_hi": "[[4,-2],[-1,0]] का सारणिक (determinant) है:",
    "options_en": [
      "-4",
      "2",
      "1",
      "-2"
    ],
    "options_hi": [
      "-4",
      "2",
      "1",
      "-2"
    ],
    "answer_en": "-2",
    "answer_hi": "-2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "The value of C(11,3) is:",
    "question_hi": "C(11,3) का मान है:",
    "options_en": [
      "55",
      "120",
      "330",
      "165"
    ],
    "options_hi": [
      "55",
      "120",
      "330",
      "165"
    ],
    "answer_en": "165",
    "answer_hi": "165",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The distance between points (-5,-4) and (1,5) is:",
    "question_hi": "बिंदु (-5,-4) और (1,5) के बीच की दूरी है:",
    "options_en": [
      "√117",
      "9",
      "6",
      "√36"
    ],
    "options_hi": [
      "√117",
      "9",
      "6",
      "√36"
    ],
    "answer_en": "√117",
    "answer_hi": "√117",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The value of C(6,3) is:",
    "question_hi": "C(6,3) का मान है:",
    "options_en": [
      "15",
      "20",
      "10",
      "15"
    ],
    "options_hi": [
      "15",
      "20",
      "10",
      "15"
    ],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "For z = 3 + 2i, |z| equals:",
    "question_hi": "z = 3 + 2i के लिए |z| का मान है:",
    "options_en": [
      "√5",
      "5",
      "1",
      "√13"
    ],
    "options_hi": [
      "√5",
      "5",
      "1",
      "√13"
    ],
    "answer_en": "√13",
    "answer_hi": "√13",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "The value of C(6,4) is:",
    "question_hi": "C(6,4) का मान है:",
    "options_en": [
      "5",
      "20",
      "6",
      "15"
    ],
    "options_hi": [
      "5",
      "20",
      "6",
      "15"
    ],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "The determinant of [[-1,-1],[-4,4]] is:",
    "question_hi": "[[-1,-1],[-4,4]] का सारणिक (determinant) है:",
    "options_en": [
      "-8",
      "8",
      "-2",
      "0"
    ],
    "options_hi": [
      "-8",
      "8",
      "-2",
      "0"
    ],
    "answer_en": "-8",
    "answer_hi": "-8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "The value of C(7,2) is:",
    "question_hi": "C(7,2) का मान है:",
    "options_en": [
      "7",
      "21",
      "35",
      "15"
    ],
    "options_hi": [
      "7",
      "21",
      "35",
      "15"
    ],
    "answer_en": "21",
    "answer_hi": "21",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Magnitude of vector 2i + 3j + 3k is:",
    "question_hi": "वेक्टर 2i + 3j + 3k का परिमाण है:",
    "options_en": [
      "√13",
      "√22",
      "8",
      "3"
    ],
    "options_hi": [
      "√13",
      "√22",
      "8",
      "3"
    ],
    "answer_en": "√22",
    "answer_hi": "√22",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Coefficient of x^6 in (1 + x)^9 is:",
    "question_hi": "(1 + x)^9 में x^6 का गुणांक है:",
    "options_en": [
      "126",
      "210",
      "84",
      "28"
    ],
    "options_hi": [
      "126",
      "210",
      "84",
      "28"
    ],
    "answer_en": "84",
    "answer_hi": "84",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "The slope of the line -2x + 4y + -5 = 0 is:",
    "question_hi": "रेखा -2x + 4y + -5 = 0 का ढाल है:",
    "options_en": [
      "1/2",
      "-1/2",
      "2/-1",
      "-2/-1"
    ],
    "options_hi": [
      "1/2",
      "-1/2",
      "2/-1",
      "-2/-1"
    ],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Coefficient of x^4 in (1 + x)^5 is:",
    "question_hi": "(1 + x)^5 में x^4 का गुणांक है:",
    "options_en": [
      "10",
      "15",
      "1",
      "5"
    ],
    "options_hi": [
      "10",
      "15",
      "1",
      "5"
    ],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Value of sin²60° + cos²60° is:",
    "question_hi": "sin²60° + cos²60° का मान है:",
    "options_en": [
      "1",
      "3/4",
      "1/2",
      "0"
    ],
    "options_hi": [
      "1",
      "3/4",
      "1/2",
      "0"
    ],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "A fair die is rolled. The probability of getting a number ≥ 4 is:",
    "question_hi": "एक निष्पक्ष पासा फेंका जाता है। 4 या उससे अधिक संख्या आने की प्रायिकता है:",
    "options_en": [
      "1/2",
      "2/3",
      "1/6",
      "1/3"
    ],
    "options_hi": [
      "1/2",
      "2/3",
      "1/6",
      "1/3"
    ],
    "answer_en": "1/2",
    "answer_hi": "1/2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "∫_0^1 (3x + 4) dx equals:",
    "question_hi": "∫_0^1 (3x + 4) dx का मान है:",
    "options_en": [
      "7",
      "5.5",
      "1.5",
      "7"
    ],
    "options_hi": [
      "7",
      "5.5",
      "1.5",
      "7"
    ],
    "answer_en": "5.5",
    "answer_hi": "5.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "For z = 4 + 4i, |z| equals:",
    "question_hi": "z = 4 + 4i के लिए |z| का मान है:",
    "options_en": [
      "8",
      "√0",
      "0",
      "√32"
    ],
    "options_hi": [
      "8",
      "√0",
      "0",
      "√32"
    ],
    "answer_en": "√32",
    "answer_hi": "√32",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Equation of the plane through origin with normal (0, 3, -3) is:",
    "question_hi": "उद्गम से गुजरने वाला तथा सामान्य (0, 3, -3) वाला तल का समीकरण है:",
    "options_en": [
      "3x + 0y + -3z = 0",
      "0x − 3y + -3z = 0",
      "0x + 3y + -3z = 1",
      "0x + 3y + -3z = 0"
    ],
    "options_hi": [
      "3x + 0y + -3z = 0",
      "0x − 3y + -3z = 0",
      "0x + 3y + -3z = 1",
      "0x + 3y + -3z = 0"
    ],
    "answer_en": "0x + 3y + -3z = 0",
    "answer_hi": "0x + 3y + -3z = 0",
    "attempted": false,
    "selected": ""
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
