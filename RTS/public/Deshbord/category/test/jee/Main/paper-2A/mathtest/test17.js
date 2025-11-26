const questions = [
  {
    "num": 1,
    "question_en": "The value of C(9,4) is:",
    "question_hi": "C(9,4) का मान है:",
    "options_en": [
      "84",
      "126",
      "70"
    ],
    "options_hi": [
      "84",
      "126",
      "70"
    ],
    "answer_en": "126",
    "answer_hi": "126",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "If tanA = 7/24, then sinA = ?",
    "question_hi": "यदि tanA = 7/24 है, तो sinA का मान क्या है?",
    "options_en": [
      "24/25",
      "7/24",
      "7/25",
      "25/24"
    ],
    "options_hi": [
      "24/25",
      "7/24",
      "7/25",
      "25/24"
    ],
    "answer_en": "7/25",
    "answer_hi": "7/25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "The integral of 1x^2 dx equals:",
    "question_hi": "1x^2 dx का समाकलन है:",
    "options_en": [
      "1/1 x^2 + C",
      "1x^3 + C",
      "x^3/(3) + C",
      "2x^2 + C"
    ],
    "options_hi": [
      "1/1 x^2 + C",
      "1x^3 + C",
      "x^3/(3) + C",
      "2x^2 + C"
    ],
    "answer_en": "x^3/(3) + C",
    "answer_hi": "x^3/(3) + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The determinant of [[2,-1],[3,-3]] is:",
    "question_hi": "[[2,-1],[3,-3]] का सारणिक (determinant) है:",
    "options_en": [
      "3",
      "-9",
      "1",
      "-3"
    ],
    "options_hi": [
      "3",
      "-9",
      "1",
      "-3"
    ],
    "answer_en": "-3",
    "answer_hi": "-3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Magnitude of vector 3i + -3j + 1k is:",
    "question_hi": "वेक्टर 3i + -3j + 1k का परिमाण है:",
    "options_en": [
      "7",
      "3",
      "√18",
      "√19"
    ],
    "options_hi": [
      "7",
      "3",
      "√18",
      "√19"
    ],
    "answer_en": "√19",
    "answer_hi": "√19",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "The n-th term of the A.P. with first term 3 and common difference 6 is:",
    "question_hi": "प्रथम पद 3 और समानांतर अंतर 6 वाली ए.पी. का nवाँ पद है:",
    "options_en": [
      "3n + 6",
      "3 + (n+1)6",
      "3 + (n−1)6",
      "3 + nd"
    ],
    "options_hi": [
      "3n + 6",
      "3 + (n+1)6",
      "3 + (n−1)6",
      "3 + nd"
    ],
    "answer_en": "3 + (n−1)6",
    "answer_hi": "3 + (n−1)6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "The derivative of 1x^5 with respect to x is:",
    "question_hi": "1x^5 का x के सापेक्ष अवकलज क्या है?",
    "options_en": [
      "5x^5",
      "5x^4",
      "1x^4",
      "4x^3"
    ],
    "options_hi": [
      "5x^5",
      "5x^4",
      "1x^4",
      "4x^3"
    ],
    "answer_en": "5x^4",
    "answer_hi": "5x^4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The determinant of [[-3,1],[1,1]] is:",
    "question_hi": "[[-3,1],[1,1]] का सारणिक (determinant) है:",
    "options_en": [
      "-2",
      "-4",
      "0",
      "0"
    ],
    "options_hi": [
      "-2",
      "-4",
      "0",
      "0"
    ],
    "answer_en": "-4",
    "answer_hi": "-4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "The determinant of [[2,2],[1,-4]] is:",
    "question_hi": "[[2,2],[1,-4]] का सारणिक (determinant) है:",
    "options_en": [
      "10",
      "1",
      "-6",
      "-10"
    ],
    "options_hi": [
      "10",
      "1",
      "-6",
      "-10"
    ],
    "answer_en": "-10",
    "answer_hi": "-10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "lim (x→0) (sin x)/x equals:",
    "question_hi": "lim (x→0) (sin x)/x का मान है:",
    "options_en": [
      "Does not exist",
      "∞",
      "0",
      "1"
    ],
    "options_hi": [
      "Does not exist",
      "∞",
      "0",
      "1"
    ],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Coefficient of x^3 in (1 + x)^6 is:",
    "question_hi": "(1 + x)^6 में x^3 का गुणांक है:",
    "options_en": [
      "20",
      "35",
      "15",
      "10"
    ],
    "options_hi": [
      "20",
      "35",
      "15",
      "10"
    ],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Equation of a circle with centre (0,0) and radius 6 is:",
    "question_hi": "केंद्र (0,0) और त्रिज्या 6 वाले वृत्त का समीकरण है:",
    "options_en": [
      "(x−6)² + y² = 0",
      "x² − y² = 36",
      "x² + y² = 36",
      "x² + y² = 12"
    ],
    "options_hi": [
      "(x−6)² + y² = 0",
      "x² − y² = 36",
      "x² + y² = 36",
      "x² + y² = 12"
    ],
    "answer_en": "x² + y² = 36",
    "answer_hi": "x² + y² = 36",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Value of sin²30° + cos²30° is:",
    "question_hi": "sin²30° + cos²30° का मान है:",
    "options_en": [
      "3/4",
      "1",
      "0",
      "1/2"
    ],
    "options_hi": [
      "3/4",
      "1",
      "0",
      "1/2"
    ],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "∫_0^3 (1x + 2) dx equals:",
    "question_hi": "∫_0^3 (1x + 2) dx का मान है:",
    "options_en": [
      "10.5",
      "15",
      "4.5",
      "9"
    ],
    "options_hi": [
      "10.5",
      "15",
      "4.5",
      "9"
    ],
    "answer_en": "10.5",
    "answer_hi": "10.5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
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
    "num": 16,
    "question_en": "Equation of the plane through origin with normal (-3, 1, -1) is:",
    "question_hi": "उद्गम से गुजरने वाला तथा सामान्य (-3, 1, -1) वाला तल का समीकरण है:",
    "options_en": [
      "-3x − 1y + -1z = 0",
      "-3x + 1y + -1z = 0",
      "-3x + 1y + -1z = 1",
      "1x + -3y + -1z = 0"
    ],
    "options_hi": [
      "-3x − 1y + -1z = 0",
      "-3x + 1y + -1z = 0",
      "-3x + 1y + -1z = 1",
      "1x + -3y + -1z = 0"
    ],
    "answer_en": "-3x + 1y + -1z = 0",
    "answer_hi": "-3x + 1y + -1z = 0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Coefficient of x^7 in (1 + x)^8 is:",
    "question_hi": "(1 + x)^8 में x^7 का गुणांक है:",
    "options_en": [
      "36",
      "28",
      "8",
      "1"
    ],
    "options_hi": [
      "36",
      "28",
      "8",
      "1"
    ],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The derivative of 6x^2 with respect to x is:",
    "question_hi": "6x^2 का x के सापेक्ष अवकलज क्या है?",
    "options_en": [
      "6x^0",
      "12x^1",
      "12x^2",
      "6x^1"
    ],
    "options_hi": [
      "6x^0",
      "12x^1",
      "12x^2",
      "6x^1"
    ],
    "answer_en": "12x^1",
    "answer_hi": "12x^1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The value of C(8,2) is:",
    "question_hi": "C(8,2) का मान है:",
    "options_en": [
      "21",
      "8",
      "56",
      "28"
    ],
    "options_hi": [
      "21",
      "8",
      "56",
      "28"
    ],
    "answer_en": "28",
    "answer_hi": "28",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "If tanA = 7/24, then cosA = ?",
    "question_hi": "यदि tanA = 7/24 है, तो cosA का मान क्या है?",
    "options_en": [
      "25/24",
      "24/25",
      "7/24",
      "25/7"
    ],
    "options_hi": [
      "25/24",
      "24/25",
      "7/24",
      "25/7"
    ],
    "answer_en": "24/25",
    "answer_hi": "24/25",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Coefficient of x^2 in (1 + x)^6 is:",
    "question_hi": "(1 + x)^6 में x^2 का गुणांक है:",
    "options_en": [
      "15",
      "21",
      "10",
      "6"
    ],
    "options_hi": [
      "15",
      "21",
      "10",
      "6"
    ],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The integral of 2x^3 dx equals:",
    "question_hi": "2x^3 dx का समाकलन है:",
    "options_en": [
      "2/2 x^3 + C",
      "2x^4 + C",
      "2/4 x^4 + C",
      "6x^3 + C"
    ],
    "options_hi": [
      "2/2 x^3 + C",
      "2x^4 + C",
      "2/4 x^4 + C",
      "6x^3 + C"
    ],
    "answer_en": "2/4 x^4 + C",
    "answer_hi": "2/4 x^4 + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The derivative of 1x^3 with respect to x is:",
    "question_hi": "1x^3 का x के सापेक्ष अवकलज क्या है?",
    "options_en": [
      "2x^1",
      "3x^2",
      "3x^3",
      "1x^2"
    ],
    "options_hi": [
      "2x^1",
      "3x^2",
      "3x^3",
      "1x^2"
    ],
    "answer_en": "3x^2",
    "answer_hi": "3x^2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Magnitude of vector -2i + -2j + -1k is:",
    "question_hi": "वेक्टर -2i + -2j + -1k का परिमाण है:",
    "options_en": [
      "√8",
      "3",
      "2",
      "5"
    ],
    "options_hi": [
      "√8",
      "3",
      "2",
      "5"
    ],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "The integral of 4x^3 dx equals:",
    "question_hi": "4x^3 dx का समाकलन है:",
    "options_en": [
      "12x^3 + C",
      "4/2 x^3 + C",
      "4/4 x^4 + C",
      "4x^4 + C"
    ],
    "options_hi": [
      "12x^3 + C",
      "4/2 x^3 + C",
      "4/4 x^4 + C",
      "4x^4 + C"
    ],
    "answer_en": "4/4 x^4 + C",
    "answer_hi": "4/4 x^4 + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Equation of the plane through origin with normal (2, -3, -2) is:",
    "question_hi": "उद्गम से गुजरने वाला तथा सामान्य (2, -3, -2) वाला तल का समीकरण है:",
    "options_en": [
      "2x + -3y + -2z = 1",
      "-3x + 2y + -2z = 0",
      "2x − -3y + -2z = 0",
      "2x + -3y + -2z = 0"
    ],
    "options_hi": [
      "2x + -3y + -2z = 1",
      "-3x + 2y + -2z = 0",
      "2x − -3y + -2z = 0",
      "2x + -3y + -2z = 0"
    ],
    "answer_en": "2x + -3y + -2z = 0",
    "answer_hi": "2x + -3y + -2z = 0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "The n-th term of the A.P. with first term -2 and common difference 4 is:",
    "question_hi": "प्रथम पद -2 और समानांतर अंतर 4 वाली ए.पी. का nवाँ पद है:",
    "options_en": [
      "-2 + (n−1)4",
      "-2 + nd",
      "-2 + (n+1)4",
      "-2n + 4"
    ],
    "options_hi": [
      "-2 + (n−1)4",
      "-2 + nd",
      "-2 + (n+1)4",
      "-2n + 4"
    ],
    "answer_en": "-2 + (n−1)4",
    "answer_hi": "-2 + (n−1)4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "For z = 5 + 5i, |z| equals:",
    "question_hi": "z = 5 + 5i के लिए |z| का मान है:",
    "options_en": [
      "0",
      "√50",
      "√0",
      "10"
    ],
    "options_hi": [
      "0",
      "√50",
      "√0",
      "10"
    ],
    "answer_en": "√50",
    "answer_hi": "√50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Coefficient of x^1 in (1 + x)^6 is:",
    "question_hi": "(1 + x)^6 में x^1 का गुणांक है:",
    "options_en": [
      "7",
      "1",
      "5",
      "6"
    ],
    "options_hi": [
      "7",
      "1",
      "5",
      "6"
    ],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "The n-th term of the A.P. with first term -2 and common difference 7 is:",
    "question_hi": "प्रथम पद -2 और समानांतर अंतर 7 वाली ए.पी. का nवाँ पद है:",
    "options_en": [
      "-2 + nd",
      "-2 + (n−1)7",
      "-2 + (n+1)7",
      "-2n + 7"
    ],
    "options_hi": [
      "-2 + nd",
      "-2 + (n−1)7",
      "-2 + (n+1)7",
      "-2n + 7"
    ],
    "answer_en": "-2 + (n−1)7",
    "answer_hi": "-2 + (n−1)7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Value of sin²45° + cos²45° is:",
    "question_hi": "sin²45° + cos²45° का मान है:",
    "options_en": [
      "1",
      "0",
      "1/2",
      "3/4"
    ],
    "options_hi": [
      "1",
      "0",
      "1/2",
      "3/4"
    ],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "For z = 5 + 3i, |z| equals:",
    "question_hi": "z = 5 + 3i के लिए |z| का मान है:",
    "options_en": [
      "2",
      "8",
      "√34",
      "√16"
    ],
    "options_hi": [
      "2",
      "8",
      "√34",
      "√16"
    ],
    "answer_en": "√34",
    "answer_hi": "√34",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The determinant of [[-3,0],[-4,2]] is:",
    "question_hi": "[[-3,0],[-4,2]] का सारणिक (determinant) है:",
    "options_en": [
      "0",
      "-6",
      "12",
      "-5"
    ],
    "options_hi": [
      "0",
      "-6",
      "12",
      "-5"
    ],
    "answer_en": "-6",
    "answer_hi": "-6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "The integral of 3x^5 dx equals:",
    "question_hi": "3x^5 dx का समाकलन है:",
    "options_en": [
      "15x^5 + C",
      "3/4 x^5 + C",
      "3x^6 + C",
      "3/6 x^6 + C"
    ],
    "options_hi": [
      "15x^5 + C",
      "3/4 x^5 + C",
      "3x^6 + C",
      "3/6 x^6 + C"
    ],
    "answer_en": "3/6 x^6 + C",
    "answer_hi": "3/6 x^6 + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Magnitude of vector 1i + -1j + -2k is:",
    "question_hi": "वेक्टर 1i + -1j + -2k का परिमाण है:",
    "options_en": [
      "√2",
      "2",
      "4",
      "√6"
    ],
    "options_hi": [
      "√2",
      "2",
      "4",
      "√6"
    ],
    "answer_en": "√6",
    "answer_hi": "√6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "∫_1^4 (4x + 0) dx equals:",
    "question_hi": "∫_1^4 (4x + 0) dx का मान है:",
    "options_en": [
      "12",
      "30.0",
      "30",
      "60"
    ],
    "options_hi": [
      "12",
      "30.0",
      "30",
      "60"
    ],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The integral of 3x^1 dx equals:",
    "question_hi": "3x^1 dx का समाकलन है:",
    "options_en": [
      "3x^2 + C",
      "3/2 x^2 + C",
      "3x^1 + C",
      "3/1 x^1 + C"
    ],
    "options_hi": [
      "3x^2 + C",
      "3/2 x^2 + C",
      "3x^1 + C",
      "3/1 x^1 + C"
    ],
    "answer_en": "3/2 x^2 + C",
    "answer_hi": "3/2 x^2 + C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The value of P(6,4) is:",
    "question_hi": "P(6,4) का मान है:",
    "options_en": [
      "120",
      "360",
      "120",
      "720"
    ],
    "options_hi": [
      "120",
      "360",
      "120",
      "720"
    ],
    "answer_en": "360",
    "answer_hi": "360",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Coefficient of x^4 in (1 + x)^5 is:",
    "question_hi": "(1 + x)^5 में x^4 का गुणांक है:",
    "options_en": [
      "5",
      "1",
      "15",
      "10"
    ],
    "options_hi": [
      "5",
      "1",
      "15",
      "10"
    ],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "A fair die is rolled. The probability of getting a number ≥ 5 is:",
    "question_hi": "एक निष्पक्ष पासा फेंका जाता है। 5 या उससे अधिक संख्या आने की प्रायिकता है:",
    "options_en": [
      "5/6",
      "2/3",
      "1/3",
      "1/6"
    ],
    "options_hi": [
      "5/6",
      "2/3",
      "1/3",
      "1/6"
    ],
    "answer_en": "1/3",
    "answer_hi": "1/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Magnitude of vector -2i + -3j + -2k is:",
    "question_hi": "वेक्टर -2i + -3j + -2k का परिमाण है:",
    "options_en": [
      "3",
      "7",
      "√13",
      "√17"
    ],
    "options_hi": [
      "3",
      "7",
      "√13",
      "√17"
    ],
    "answer_en": "√17",
    "answer_hi": "√17",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "For z = 2 + 2i, |z| equals:",
    "question_hi": "z = 2 + 2i के लिए |z| का मान है:",
    "options_en": [
      "√0",
      "4",
      "√8",
      "0"
    ],
    "options_hi": [
      "√0",
      "4",
      "√8",
      "0"
    ],
    "answer_en": "√8",
    "answer_hi": "√8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Value of sin²60° + cos²60° is:",
    "question_hi": "sin²60° + cos²60° का मान है:",
    "options_en": [
      "3/4",
      "1/2",
      "0",
      "1"
    ],
    "options_hi": [
      "3/4",
      "1/2",
      "0",
      "1"
    ],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "A fair die is rolled. The probability of getting a number ≥ 3 is:",
    "question_hi": "एक निष्पक्ष पासा फेंका जाता है। 3 या उससे अधिक संख्या आने की प्रायिकता है:",
    "options_en": [
      "2/3",
      "1/2",
      "1/6"
    ],
    "options_hi": [
      "2/3",
      "1/2",
      "1/6"
    ],
    "answer_en": "2/3",
    "answer_hi": "2/3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The value of C(6,4) is:",
    "question_hi": "C(6,4) का मान है:",
    "options_en": [
      "20",
      "15",
      "6",
      "5"
    ],
    "options_hi": [
      "20",
      "15",
      "6",
      "5"
    ],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The determinant of [[-2,-3],[1,0]] is:",
    "question_hi": "[[-2,-3],[1,0]] का सारणिक (determinant) है:",
    "options_en": [
      "3",
      "-2",
      "-3",
      "-4"
    ],
    "options_hi": [
      "3",
      "-2",
      "-3",
      "-4"
    ],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "The distance between points (3,5) and (5,3) is:",
    "question_hi": "बिंदु (3,5) और (5,3) के बीच की दूरी है:",
    "options_en": [
      "2",
      "√8",
      "√4"
    ],
    "options_hi": [
      "2",
      "√8",
      "√4"
    ],
    "answer_en": "√8",
    "answer_hi": "√8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The n-th term of the A.P. with first term -3 and common difference 2 is:",
    "question_hi": "प्रथम पद -3 और समानांतर अंतर 2 वाली ए.पी. का nवाँ पद है:",
    "options_en": [
      "-3n + 2",
      "-3 + (n+1)2",
      "-3 + (n−1)2",
      "-3 + nd"
    ],
    "options_hi": [
      "-3n + 2",
      "-3 + (n+1)2",
      "-3 + (n−1)2",
      "-3 + nd"
    ],
    "answer_en": "-3 + (n−1)2",
    "answer_hi": "-3 + (n−1)2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Equation of a circle with centre (0,0) and radius 9 is:",
    "question_hi": "केंद्र (0,0) और त्रिज्या 9 वाले वृत्त का समीकरण है:",
    "options_en": [
      "x² − y² = 81",
      "(x−9)² + y² = 0",
      "x² + y² = 81",
      "x² + y² = 18"
    ],
    "options_hi": [
      "x² − y² = 81",
      "(x−9)² + y² = 0",
      "x² + y² = 81",
      "x² + y² = 18"
    ],
    "answer_en": "x² + y² = 81",
    "answer_hi": "x² + y² = 81",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The slope of the line 3x + -5y + 5 = 0 is:",
    "question_hi": "रेखा 3x + -5y + 5 = 0 का ढाल है:",
    "options_en": [
      "0",
      "-5/3",
      "5/3",
      "3/5"
    ],
    "options_hi": [
      "0",
      "-5/3",
      "5/3",
      "3/5"
    ],
    "answer_en": "3/5",
    "answer_hi": "3/5",
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
