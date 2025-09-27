
const questions = [
    {
        "num": 1,
        "question_en": "What is the value of (a + b)²?",
        "question_hi": "(a + b)² का मान क्या है?",
        "options_en": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "2a² + 2b²"],
        "options_hi": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "2a² + 2b²"],
        "answer_en": "a² + 2ab + b²",
        "answer_hi": "a² + 2ab + b²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "What is the HCF of 36 and 48?",
        "question_hi": "36 और 48 का महत्तम समापवर्तक (HCF) क्या है?",
        "options_en": ["6", "12", "18", "24"],
        "options_hi": ["6", "12", "18", "24"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "The quadratic equation x² - 5x + 6 = 0 has roots:",
        "question_hi": "x² - 5x + 6 = 0 समीकरण की मूल (roots) हैं:",
        "options_en": ["2 and 3", "1 and 6", "3 and 5", "1 and 5"],
        "options_hi": ["2 और 3", "1 और 6", "3 और 5", "1 और 5"],
        "answer_en": "2 and 3",
        "answer_hi": "2 और 3",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "What is the formula for the area of a circle?",
        "question_hi": "वृत्त का क्षेत्रफल निकालने का सूत्र क्या है?",
        "options_en": ["2πr", "πr²", "πd²", "πr"],
        "options_hi": ["2πr", "πr²", "πd²", "πr"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Which of the following is a rational number?",
        "question_hi": "निम्नलिखित में से कौन एक परिमेय संख्या है?",
        "options_en": ["√2", "π", "0.75", "√3"],
        "options_hi": ["√2", "π", "0.75", "√3"],
        "answer_en": "0.75",
        "answer_hi": "0.75",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "If sinθ = 1/2, then θ is:",
        "question_hi": "यदि sinθ = 1/2 है, तो θ का मान क्या होगा?",
        "options_en": ["30°", "45°", "60°", "90°"],
        "options_hi": ["30°", "45°", "60°", "90°"],
        "answer_en": "30°",
        "answer_hi": "30°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "The distance between the points (1, 2) and (4, 6) is:",
        "question_hi": "(1, 2) और (4, 6) बिंदुओं के बीच की दूरी क्या है?",
        "options_en": ["5", "4", "6", "7"],
        "options_hi": ["5", "4", "6", "7"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "The graph of a linear equation in two variables is always a:",
        "question_hi": "दो चर वाले रेखीय समीकरण का ग्राफ हमेशा होता है:",
        "options_en": ["Curve", "Parabola", "Straight line", "Circle"],
        "options_hi": ["वक्र", "पराबोला", "सिधी रेखा", "वृत्त"],
        "answer_en": "Straight line",
        "answer_hi": "सिधी रेखा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "What is the probability of getting a head when a coin is tossed?",
        "question_hi": "एक सिक्का उछालने पर हेड आने की प्रायिकता क्या है?",
        "options_en": ["1", "1/2", "1/3", "1/4"],
        "options_hi": ["1", "1/2", "1/3", "1/4"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "What is the value of 2³?",
        "question_hi": "2³ का मान क्या है?",
        "options_en": ["6", "8", "4", "10"],
        "options_hi": ["6", "8", "4", "10"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "What is the perimeter of a rectangle with length 8 cm and width 6 cm?",
        "question_hi": "8 cm लंबाई और 6 cm चौड़ाई वाले आयत का परिमाप क्या है?",
        "options_en": ["28 cm", "32 cm", "14 cm", "12 cm"],
        "options_hi": ["28 cm", "32 cm", "14 cm", "12 cm"],
        "answer_en": "28 cm",
        "answer_hi": "28 cm",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "The sum of the angles of a triangle is always:",
        "question_hi": "त्रिभुज के कोणों का योग हमेशा क्या होता है?",
        "options_en": ["90°", "180°", "360°", "120°"],
        "options_hi": ["90°", "180°", "360°", "120°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which of the following is the solution to the equation 2x + 5 = 15?",
        "question_hi": "2x + 5 = 15 समीकरण का हल निम्नलिखित में से कौन सा है?",
        "options_en": ["x = 5", "x = 3", "x = 2", "x = 10"],
        "options_hi": ["x = 5", "x = 3", "x = 2", "x = 10"],
        "answer_en": "x = 5",
        "answer_hi": "x = 5",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "The value of √81 is:",
        "question_hi": "√81 का मान क्या है?",
        "options_en": ["9", "8", "7", "10"],
        "options_hi": ["9", "8", "7", "10"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "What is the area of a triangle with base 10 cm and height 5 cm?",
        "question_hi": "10 cm आधार और 5 cm ऊँचाई वाले त्रिभुज का क्षेत्रफल क्या है?",
        "options_en": ["25 cm²", "50 cm²", "20 cm²", "15 cm²"],
        "options_hi": ["25 cm²", "50 cm²", "20 cm²", "15 cm²"],
        "answer_en": "25 cm²",
        "answer_hi": "25 cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What is the solution to the equation x² - 16 = 0?",
        "question_hi": "x² - 16 = 0 समीकरण का हल क्या है?",
        "options_en": ["x = 4", "x = -4", "x = ±4", "x = 16"],
        "options_hi": ["x = 4", "x = -4", "x = ±4", "x = 16"],
        "answer_en": "x = ±4",
        "answer_hi": "x = ±4",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What is the formula for the volume of a cylinder?",
        "question_hi": "गोला बेलन (Cylinder) का आयतन निकालने का सूत्र क्या है?",
        "options_en": ["πr²h", "πd²h", "2πr²h", "πr²d"],
        "options_hi": ["πr²h", "πd²h", "2πr²h", "πr²d"],
        "answer_en": "πr²h",
        "answer_hi": "πr²h",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "The hypotenuse of a right-angled triangle with sides 3 cm and 4 cm is:",
        "question_hi": "एक समकोण त्रिभुज जिसका एक भुजा 3 cm और दूसरी भुजा 4 cm है, का कर्ण (hypotenuse) क्या होगा?",
        "options_en": ["5 cm", "6 cm", "7 cm", "4 cm"],
        "options_hi": ["5 cm", "6 cm", "7 cm", "4 cm"],
        "answer_en": "5 cm",
        "answer_hi": "5 cm",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "The probability of drawing a red card from a deck of 52 cards is:",
        "question_hi": "52 पत्तों के एक पैक से एक लाल पत्ता निकालने की प्रायिकता क्या है?",
        "options_en": ["1/2", "1/4", "1/13", "1/26"],
        "options_hi": ["1/2", "1/4", "1/13", "1/26"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "The area of a square with side 6 cm is:",
        "question_hi": "6 cm पक्ष वाला एक वर्ग का क्षेत्रफल क्या है?",
        "options_en": ["36 cm²", "18 cm²", "24 cm²", "12 cm²"],
        "options_hi": ["36 cm²", "18 cm²", "24 cm²", "12 cm²"],
        "answer_en": "36 cm²",
        "answer_hi": "36 cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "What is the solution to the equation 3x + 7 = 16?",
        "question_hi": "3x + 7 = 16 समीकरण का हल क्या है?",
        "options_en": ["x = 3", "x = 5", "x = 2", "x = 6"],
        "options_hi": ["x = 3", "x = 5", "x = 2", "x = 6"],
        "answer_en": "x = 3",
        "answer_hi": "x = 3",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "The sum of the interior angles of a hexagon is:",
        "question_hi": "एक षट्भुज के आंतरिक कोणों का योग क्या होता है?",
        "options_en": ["720°", "360°", "1080°", "540°"],
        "options_hi": ["720°", "360°", "1080°", "540°"],
        "answer_en": "720°",
        "answer_hi": "720°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "What is the perimeter of a circle with radius 7 cm?",
        "question_hi": "7 cm त्रिज्या वाले वृत्त का परिधि क्या है?",
        "options_en": ["44 cm", "22 cm", "28 cm", "14 cm"],
        "options_hi": ["44 cm", "22 cm", "28 cm", "14 cm"],
        "answer_en": "44 cm",
        "answer_hi": "44 cm",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "The solution to the equation 5x - 2 = 18 is:",
        "question_hi": "5x - 2 = 18 समीकरण का हल क्या है?",
        "options_en": ["x = 4", "x = 2", "x = 5", "x = 3"],
        "options_hi": ["x = 4", "x = 2", "x = 5", "x = 3"],
        "answer_en": "x = 4",
        "answer_hi": "x = 4",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "The distance between the points (1, 2) and (4, 6) is:",
        "question_hi": "(1, 2) और (4, 6) बिंदुओं के बीच की दूरी क्या है?",
        "options_en": ["5", "4", "6", "7"],
        "options_hi": ["5", "4", "6", "7"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Which of the following is the Pythagorean triple?",
        "question_hi": "निम्नलिखित में से कौन सा पायथागोरस त्रैतीयक है?",
        "options_en": ["3, 4, 5", "5, 6, 7", "8, 9, 10", "7, 8, 9"],
        "options_hi": ["3, 4, 5", "5, 6, 7", "8, 9, 10", "7, 8, 9"],
        "answer_en": "3, 4, 5",
        "answer_hi": "3, 4, 5",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "What is the volume of a sphere with radius 6 cm?",
        "question_hi": "6 cm त्रिज्या वाले गोले का आयतन क्या है?",
        "options_en": ["864π cm³", "720π cm³", "576π cm³", "864 cm³"],
        "options_hi": ["864π cm³", "720π cm³", "576π cm³", "864 cm³"],
        "answer_en": "864π cm³",
        "answer_hi": "864π cm³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "What is the square root of 144?",
        "question_hi": "144 का वर्गमूल क्या है?",
        "options_en": ["10", "11", "12", "14"],
        "options_hi": ["10", "11", "12", "14"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "The area of a circle with radius 7 cm is:",
        "question_hi": "7 cm त्रिज्या वाले वृत्त का क्षेत्रफल क्या है?",
        "options_en": ["154 cm²", "144 cm²", "140 cm²", "130 cm²"],
        "options_hi": ["154 cm²", "144 cm²", "140 cm²", "130 cm²"],
        "answer_en": "154 cm²",
        "answer_hi": "154 cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "What is the value of tan 45°?",
        "question_hi": "tan 45° का मान क्या है?",
        "options_en": ["0", "1", "√3", "∞"],
        "options_hi": ["0", "1", "√3", "∞"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "The surface area of a sphere with radius 5 cm is:",
        "question_hi": "5 cm त्रिज्या वाले गोले का क्षेत्रफल क्या है?",
        "options_en": ["50π cm²", "100π cm²", "25π cm²", "75π cm²"],
        "options_hi": ["50π cm²", "100π cm²", "25π cm²", "75π cm²"],
        "answer_en": "100π cm²",
        "answer_hi": "100π cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "If the sum of two numbers is 20 and their difference is 4, what are the numbers?",
        "question_hi": "दो संख्याओं का योग 20 और अंतर 4 है, तो वे संख्याएँ क्या हैं?",
        "options_en": ["12 and 8", "10 and 10", "15 and 5", "14 and 6"],
        "options_hi": ["12 और 8", "10 और 10", "15 और 5", "14 और 6"],
        "answer_en": "12 and 8",
        "answer_hi": "12 और 8",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "The LCM of 12 and 15 is:",
        "question_hi": "12 और 15 का लघुत्तम समापवर्त्य (LCM) क्या है?",
        "options_en": ["30", "60", "45", "120"],
        "options_hi": ["30", "60", "45", "120"],
        "answer_en": "60",
        "answer_hi": "60",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "What is the slope of the line passing through the points (2, 3) and (4, 7)?",
        "question_hi": "वह रेखा जो बिंदुओं (2, 3) और (4, 7) से गुजरती है, उसका ढलान (slope) क्या है?",
        "options_en": ["2", "3", "4", "1"],
        "options_hi": ["2", "3", "4", "1"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "The sum of two angles of a triangle is 90°. The third angle is:",
        "question_hi": "एक त्रिभुज के दो कोणों का योग 90° है, तो तीसरे कोण का मान क्या होगा?",
        "options_en": ["90°", "60°", "45°", "30°"],
        "options_hi": ["90°", "60°", "45°", "30°"],
        "answer_en": "90°",
        "answer_hi": "90°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "The perimeter of a square with side 5 cm is:",
        "question_hi": "5 cm पक्ष वाले एक वर्ग का परिमाप क्या है?",
        "options_en": ["20 cm", "25 cm", "10 cm", "15 cm"],
        "options_hi": ["20 cm", "25 cm", "10 cm", "15 cm"],
        "answer_en": "20 cm",
        "answer_hi": "20 cm",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "If the length of a rectangle is 12 cm and its breadth is 8 cm, the area is:",
        "question_hi": "यदि एक आयत की लंबाई 12 cm और चौड़ाई 8 cm है, तो उसका क्षेत्रफल क्या होगा?",
        "options_en": ["96 cm²", "100 cm²", "80 cm²", "90 cm²"],
        "options_hi": ["96 cm²", "100 cm²", "80 cm²", "90 cm²"],
        "answer_en": "96 cm²",
        "answer_hi": "96 cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What is the value of cos 0°?",
        "question_hi": "cos 0° का मान क्या है?",
        "options_en": ["0", "1", "∞", "√2"],
        "options_hi": ["0", "1", "∞", "√2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "The value of 3² + 4² is:",
        "question_hi": "3² + 4² का मान क्या है?",
        "options_en": ["16", "25", "20", "10"],
        "options_hi": ["16", "25", "20", "10"],
        "answer_en": "25",
        "answer_hi": "25",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "What is the formula for the surface area of a cone?",
        "question_hi": "कोण का क्षेत्रफल निकालने का सूत्र क्या है?",
        "options_en": ["πr²", "πr(l + r)", "πr²h", "2πr(l + r)"],
        "options_hi": ["πr²", "πr(l + r)", "πr²h", "2πr(l + r)"],
        "answer_en": "πr(l + r)",
        "answer_hi": "πr(l + r)",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "What is the volume of a cone with radius 3 cm and height 4 cm?",
        "question_hi": "3 cm त्रिज्या और 4 cm ऊँचाई वाले कोण का आयतन क्या है?",
        "options_en": ["12π cm³", "18π cm³", "24π cm³", "15π cm³"],
        "options_hi": ["12π cm³", "18π cm³", "24π cm³", "15π cm³"],
        "answer_en": "12π cm³",
        "answer_hi": "12π cm³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "What is the area of a parallelogram with base 6 cm and height 4 cm?",
        "question_hi": "6 cm आधार और 4 cm ऊँचाई वाले समलम्ब त्रिकोण का क्षेत्रफल क्या है?",
        "options_en": ["24 cm²", "30 cm²", "20 cm²", "18 cm²"],
        "options_hi": ["24 cm²", "30 cm²", "20 cm²", "18 cm²"],
        "answer_en": "24 cm²",
        "answer_hi": "24 cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "The difference between the squares of two consecutive natural numbers is:",
        "question_hi": "दो लगातार प्राकृतिक संख्याओं के वर्गों के बीच का अंतर क्या होगा?",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "The perimeter of a circle with radius 10 cm is:",
        "question_hi": "10 cm त्रिज्या वाले वृत्त का परिधि क्या है?",
        "options_en": ["60 cm", "62.8 cm", "63 cm", "62 cm"],
        "options_hi": ["60 cm", "62.8 cm", "63 cm", "62 cm"],
        "answer_en": "62.8 cm",
        "answer_hi": "62.8 cm",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "The sum of the angles of a triangle is:",
        "question_hi": "त्रिभुज के कोणों का योग क्या है?",
        "options_en": ["180°", "360°", "90°", "270°"],
        "options_hi": ["180°", "360°", "90°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "What is the volume of a cylinder with radius 3 cm and height 5 cm?",
        "question_hi": "3 cm त्रिज्या और 5 cm ऊँचाई वाले बेलन का आयतन क्या है?",
        "options_en": ["45π cm³", "50π cm³", "40π cm³", "30π cm³"],
        "options_hi": ["45π cm³", "50π cm³", "40π cm³", "30π cm³"],
        "answer_en": "45π cm³",
        "answer_hi": "45π cm³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "The equation of a line with slope 2 and passing through the point (1, 3) is:",
        "question_hi": "एक रेखा का ढलान (slope) 2 है और वह बिंदु (1, 3) से गुजरती है, उसकी समीकरण क्या होगी?",
        "options_en": ["y = 2x + 1", "y = 2x + 3", "y = 3x + 2", "y = 2x - 1"],
        "options_hi": ["y = 2x + 1", "y = 2x + 3", "y = 3x + 2", "y = 2x - 1"],
        "answer_en": "y = 2x + 1",
        "answer_hi": "y = 2x + 1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "What is the surface area of a hemisphere with radius 6 cm?",
        "question_hi": "6 cm त्रिज्या वाले अर्धगोले का क्षेत्रफल क्या है?",
        "options_en": ["72π cm²", "72 cm²", "108π cm²", "108 cm²"],
        "options_hi": ["72π cm²", "72 cm²", "108π cm²", "108 cm²"],
        "answer_en": "72π cm²",
        "answer_hi": "72π cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "The sum of the first 20 natural numbers is:",
        "question_hi": "पहली 20 प्राकृतिक संख्याओं का योग क्या है?",
        "options_en": ["210", "190", "200", "220"],
        "options_hi": ["210", "190", "200", "220"],
        "answer_en": "210",
        "answer_hi": "210",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What is the volume of a sphere with radius 7 cm?",
        "question_hi": "7 cm त्रिज्या वाले गोले का आयतन क्या है?",
        "options_en": ["143π cm³", "150π cm³", "148π cm³", "140π cm³"],
        "options_hi": ["143π cm³", "150π cm³", "148π cm³", "140π cm³"],
        "answer_en": "143π cm³",
        "answer_hi": "143π cm³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "The perimeter of a rectangle with length 8 cm and width 6 cm is:",
        "question_hi": "8 cm लंबाई और 6 cm चौड़ाई वाले आयत का परिमाप क्या है?",
        "options_en": ["28 cm", "24 cm", "26 cm", "30 cm"],
        "options_hi": ["28 cm", "24 cm", "26 cm", "30 cm"],
        "answer_en": "28 cm",
        "answer_hi": "28 cm",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "The area of a triangle with base 10 cm and height 5 cm is:",
        "question_hi": "10 cm आधार और 5 cm ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या है?",
        "options_en": ["25 cm²", "30 cm²", "50 cm²", "15 cm²"],
        "options_hi": ["25 cm²", "30 cm²", "50 cm²", "15 cm²"],
        "answer_en": "25 cm²",
        "answer_hi": "25 cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "If a line intersects the x-axis at (4, 0), the equation of the line is:",
        "question_hi": "यदि एक रेखा x-अक्ष को बिंदु (4, 0) पर काटती है, तो रेखा की समीकरण क्या होगी?",
        "options_en": ["x = 4", "y = 4", "x + y = 4", "x - y = 4"],
        "options_hi": ["x = 4", "y = 4", "x + y = 4", "x - y = 4"],
        "answer_en": "x = 4",
        "answer_hi": "x = 4",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "The value of tan 60° is:",
        "question_hi": "tan 60° का मान क्या है?",
        "options_en": ["1", "√3", "2", "√2"],
        "options_hi": ["1", "√3", "2", "√2"],
        "answer_en": "√3",
        "answer_hi": "√3",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "What is the value of 2³ + 3²?",
        "question_hi": "2³ + 3² का मान क्या है?",
        "options_en": ["17", "14", "16", "18"],
        "options_hi": ["17", "14", "16", "18"],
        "answer_en": "17",
        "answer_hi": "17",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "The equation of a circle with center (0, 0) and radius 5 is:",
        "question_hi": "केंद्र (0, 0) और त्रिज्या 5 वाले वृत्त की समीकरण क्या है?",
        "options_en": ["x² + y² = 25", "x² + y² = 5", "x² + y² = 50", "x² + y² = 10"],
        "options_hi": ["x² + y² = 25", "x² + y² = 5", "x² + y² = 50", "x² + y² = 10"],
        "answer_en": "x² + y² = 25",
        "answer_hi": "x² + y² = 25",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "The area of a sector of a circle with radius 7 cm and central angle 60° is:",
        "question_hi": "7 cm त्रिज्या और 60° केंद्रीय कोण वाले वृत्त के क्षेत्रफल का क्षेत्रफल क्या है?",
        "options_en": ["7π cm²", "14π cm²", "21π cm²", "35π cm²"],
        "options_hi": ["7π cm²", "14π cm²", "21π cm²", "35π cm²"],
        "answer_en": "7π cm²",
        "answer_hi": "7π cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "The value of cos 30° is:",
        "question_hi": "cos 30° का मान क्या है?",
        "options_en": ["√3/2", "1/2", "√2/2", "1"],
        "options_hi": ["√3/2", "1/2", "√2/2", "1"],
        "answer_en": "√3/2",
        "answer_hi": "√3/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "The value of cos 60° is:",
        "question_hi": "cos 60° का मान क्या है?",
        "options_en": ["1", "1/2", "√2/2", "√3/2"],
        "options_hi": ["1", "1/2", "√2/2", "√3/2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "The perimeter of a square with side 5 cm is:",
        "question_hi": "5 cm पक्ष वाले वर्ग का परिमाप क्या है?",
        "options_en": ["20 cm", "25 cm", "15 cm", "30 cm"],
        "options_hi": ["20 cm", "25 cm", "15 cm", "30 cm"],
        "answer_en": "20 cm",
        "answer_hi": "20 cm",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "The volume of a cube with side 4 cm is:",
        "question_hi": "4 cm पक्ष वाले घन का आयतन क्या है?",
        "options_en": ["64 cm³", "48 cm³", "60 cm³", "50 cm³"],
        "options_hi": ["64 cm³", "48 cm³", "60 cm³", "50 cm³"],
        "answer_en": "64 cm³",
        "answer_hi": "64 cm³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "The area of a circle with radius 7 cm is:",
        "question_hi": "7 cm त्रिज्या वाले वृत्त का क्षेत्रफल क्या है?",
        "options_en": ["49π cm²", "42π cm²", "44π cm²", "40π cm²"],
        "options_hi": ["49π cm²", "42π cm²", "44π cm²", "40π cm²"],
        "answer_en": "49π cm²",
        "answer_hi": "49π cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "The value of sin 30° is:",
        "question_hi": "sin 30° का मान क्या है?",
        "options_en": ["1/2", "√3/2", "1", "√2/2"],
        "options_hi": ["1/2", "√3/2", "1", "√2/2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "The area of a triangle with base 12 cm and height 8 cm is:",
        "question_hi": "12 cm आधार और 8 cm ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या है?",
        "options_en": ["48 cm²", "50 cm²", "60 cm²", "52 cm²"],
        "options_hi": ["48 cm²", "50 cm²", "60 cm²", "52 cm²"],
        "answer_en": "48 cm²",
        "answer_hi": "48 cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "The sum of the angles of a quadrilateral is:",
        "question_hi": "चतुर्भुज के कोणों का योग क्या है?",
        "options_en": ["360°", "180°", "90°", "270°"],
        "options_hi": ["360°", "180°", "90°", "270°"],
        "answer_en": "360°",
        "answer_hi": "360°",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "The equation of a line with slope 3 and passing through the point (0, 2) is:",
        "question_hi": "ढलान (slope) 3 और बिंदु (0, 2) से गुजरने वाली रेखा की समीकरण क्या है?",
        "options_en": ["y = 3x + 2", "y = 3x - 2", "y = x + 2", "y = 2x + 3"],
        "options_hi": ["y = 3x + 2", "y = 3x - 2", "y = x + 2", "y = 2x + 3"],
        "answer_en": "y = 3x + 2",
        "answer_hi": "y = 3x + 2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "The probability of getting a tail in a single toss of a coin is:",
        "question_hi": "एक सिक्के के एक बार उछालने पर पंख (tail) आने की संभावना क्या है?",
        "options_en": ["1/2", "1/4", "1/3", "1"],
        "options_hi": ["1/2", "1/4", "1/3", "1"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "The surface area of a sphere with radius 4 cm is:",
        "question_hi": "4 cm त्रिज्या वाले गोले का क्षेत्रफल क्या है?",
        "options_en": ["16π cm²", "32π cm²", "64π cm²", "24π cm²"],
        "options_hi": ["16π cm²", "32π cm²", "64π cm²", "24π cm²"],
        "answer_en": "16π cm²",
        "answer_hi": "16π cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "What is the area of a rhombus with diagonals 10 cm and 12 cm?",
        "question_hi": "10 cm और 12 cm विकर्ण वाले समचतुर्भुज का क्षेत्रफल क्या है?",
        "options_en": ["60 cm²", "70 cm²", "80 cm²", "90 cm²"],
        "options_hi": ["60 cm²", "70 cm²", "80 cm²", "90 cm²"],
        "answer_en": "60 cm²",
        "answer_hi": "60 cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "The volume of a cylinder with radius 5 cm and height 10 cm is:",
        "question_hi": "5 cm त्रिज्या और 10 cm ऊँचाई वाले बेलन का आयतन क्या है?",
        "options_en": ["250π cm³", "300π cm³", "350π cm³", "400π cm³"],
        "options_hi": ["250π cm³", "300π cm³", "350π cm³", "400π cm³"],
        "answer_en": "250π cm³",
        "answer_hi": "250π cm³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "The equation of a circle with center (3, -4) and radius 5 is:",
        "question_hi": "केंद्र (3, -4) और त्रिज्या 5 वाले वृत्त की समीकरण क्या है?",
        "options_en": ["(x - 3)² + (y + 4)² = 25", "(x + 3)² + (y - 4)² = 25", "(x - 3)² + (y - 4)² = 25", "(x + 3)² + (y + 4)² = 25"],
        "options_hi": ["(x - 3)² + (y + 4)² = 25", "(x + 3)² + (y - 4)² = 25", "(x - 3)² + (y - 4)² = 25", "(x + 3)² + (y + 4)² = 25"],
        "answer_en": "(x - 3)² + (y + 4)² = 25",
        "answer_hi": "(x - 3)² + (y + 4)² = 25",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "The perimeter of an equilateral triangle with side 8 cm is:",
        "question_hi": "8 cm पक्ष वाले समद्विबाहु त्रिकोण का परिमाप क्या है?",
        "options_en": ["24 cm", "20 cm", "18 cm", "22 cm"],
        "options_hi": ["24 cm", "20 cm", "18 cm", "22 cm"],
        "answer_en": "24 cm",
        "answer_hi": "24 cm",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "The area of a sector of a circle with radius 7 cm and central angle 90° is:",
        "question_hi": "7 cm त्रिज्या और 90° केंद्रीय कोण वाले वृत्त के क्षेत्रफल का क्षेत्रफल क्या है?",
        "options_en": ["49π/4 cm²", "49π/2 cm²", "7π cm²", "49 cm²"],
        "options_hi": ["49π/4 cm²", "49π/2 cm²", "7π cm²", "49 cm²"],
        "answer_en": "49π/4 cm²",
        "answer_hi": "49π/4 cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "The value of sin 45° is:",
        "question_hi": "sin 45° का मान क्या है?",
        "options_en": ["1", "√2/2", "1/2", "√3/2"],
        "options_hi": ["1", "√2/2", "1/2", "√3/2"],
        "answer_en": "√2/2",
        "answer_hi": "√2/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "The sum of the first 50 even numbers is:",
        "question_hi": "पहली 50 सम संख्याओं का योग क्या है?",
        "options_en": ["2500", "2550", "2450", "2600"],
        "options_hi": ["2500", "2550", "2450", "2600"],
        "answer_en": "2550",
        "answer_hi": "2550",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "The area of a square with side 9 cm is:",
        "question_hi": "9 cm लंबाई वाले वर्ग का क्षेत्रफल क्या है?",
        "options_en": ["81 cm²", "90 cm²", "72 cm²", "85 cm²"],
        "options_hi": ["81 cm²", "90 cm²", "72 cm²", "85 cm²"],
        "answer_en": "81 cm²",
        "answer_hi": "81 cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "The value of 2x - 5 = 7 is:",
        "question_hi": "2x - 5 = 7 का मान क्या है?",
        "options_en": ["x = 6", "x = 5", "x = 4", "x = 3"],
        "options_hi": ["x = 6", "x = 5", "x = 4", "x = 3"],
        "answer_en": "x = 6",
        "answer_hi": "x = 6",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "The probability of getting a head in a single toss of a coin is:",
        "question_hi": "एक सिक्के के एक बार उछालने पर सिर (head) आने की संभावना क्या है?",
        "options_en": ["1/2", "1/3", "1/4", "1"],
        "options_hi": ["1/2", "1/3", "1/4", "1"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "The length of the diagonal of a square with side 12 cm is:",
        "question_hi": "12 cm पक्ष वाले वर्ग का विकर्ण (diagonal) लंबाई क्या है?",
        "options_en": ["12√2 cm", "24 cm", "12 cm", "14 cm"],
        "options_hi": ["12√2 cm", "24 cm", "12 cm", "14 cm"],
        "answer_en": "12√2 cm",
        "answer_hi": "12√2 cm",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "The surface area of a cone with radius 4 cm and slant height 6 cm is:",
        "question_hi": "4 cm त्रिज्या और 6 cm तिरछी ऊँचाई वाले शंकु का क्षेत्रफल क्या है?",
        "options_en": ["32π cm²", "36π cm²", "30π cm²", "40π cm²"],
        "options_hi": ["32π cm²", "36π cm²", "30π cm²", "40π cm²"],
        "answer_en": "32π cm²",
        "answer_hi": "32π cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "The equation of the line passing through the points (1, 2) and (3, 6) is:",
        "question_hi": "बिंदु (1, 2) और (3, 6) से गुजरने वाली रेखा की समीकरण क्या है?",
        "options_en": ["y = 2x", "y = 2x + 1", "y = 3x", "y = x + 1"],
        "options_hi": ["y = 2x", "y = 2x + 1", "y = 3x", "y = x + 1"],
        "answer_en": "y = 2x",
        "answer_hi": "y = 2x",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "The volume of a cone with radius 3 cm and height 6 cm is:",
        "question_hi": "3 cm त्रिज्या और 6 cm ऊँचाई वाले शंकु का आयतन क्या है?",
        "options_en": ["18π cm³", "24π cm³", "30π cm³", "36π cm³"],
        "options_hi": ["18π cm³", "24π cm³", "30π cm³", "36π cm³"],
        "answer_en": "18π cm³",
        "answer_hi": "18π cm³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "The area of a trapezium with parallel sides 8 cm and 12 cm, and height 5 cm is:",
        "question_hi": "8 cm और 12 cm समानांतर पक्षों और 5 cm ऊँचाई वाले त्रैकोण का क्षेत्रफल क्या है?",
        "options_en": ["50 cm²", "40 cm²", "60 cm²", "70 cm²"],
        "options_hi": ["50 cm²", "40 cm²", "60 cm²", "70 cm²"],
        "answer_en": "50 cm²",
        "answer_hi": "50 cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "If the length and breadth of a rectangle are increased by 20%, the area of the rectangle will increase by:",
        "question_hi": "यदि आयत की लंबाई और चौड़ाई 20% बढ़ा दी जाती है, तो आयत का क्षेत्रफल कितना बढ़ेगा?",
        "options_en": ["44%", "40%", "38%", "42%"],
        "options_hi": ["44%", "40%", "38%", "42%"],
        "answer_en": "44%",
        "answer_hi": "44%",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "The perimeter of a semicircle with radius 7 cm is:",
        "question_hi": "7 cm त्रिज्या वाले अर्धवृत्त का परिमाप क्या है?",
        "options_en": ["22 cm", "28 cm", "30 cm", "32 cm"],
        "options_hi": ["22 cm", "28 cm", "30 cm", "32 cm"],
        "answer_en": "22 cm",
        "answer_hi": "22 cm",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "The equation of a line passing through the points (4, -2) and (-2, 4) is:",
        "question_hi": "बिंदु (4, -2) और (-2, 4) से गुजरने वाली रेखा की समीकरण क्या है?",
        "options_en": ["y = x - 6", "y = x + 2", "y = -x + 2", "y = -x - 2"],
        "options_hi": ["y = x - 6", "y = x + 2", "y = -x + 2", "y = -x - 2"],
        "answer_en": "y = -x + 2",
        "answer_hi": "y = -x + 2",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "The volume of a hemisphere with radius 6 cm is:",
        "question_hi": "6 cm त्रिज्या वाले अर्धगोलाकार का आयतन क्या है?",
        "options_en": ["432π cm³", "432 cm³", "252π cm³", "216π cm³"],
        "options_hi": ["432π cm³", "432 cm³", "252π cm³", "216π cm³"],
        "answer_en": "432π cm³",
        "answer_hi": "432π cm³",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "The ratio of the areas of two squares is 25:36. The ratio of their sides is:",
        "question_hi": "दो वर्गों के क्षेत्रफल का अनुपात 25:36 है। उनके पक्षों का अनुपात क्या होगा?",
        "options_en": ["5:6", "25:36", "6:5", "10:12"],
        "options_hi": ["5:6", "25:36", "6:5", "10:12"],
        "answer_en": "5:6",
        "answer_hi": "5:6",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "The value of tan 45° is:",
        "question_hi": "tan 45° का मान क्या है?",
        "options_en": ["1", "√3", "0", "∞"],
        "options_hi": ["1", "√3", "0", "∞"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "The sum of the first 25 odd numbers is:",
        "question_hi": "पहली 25 विषम संख्याओं का योग क्या है?",
        "options_en": ["625", "6250", "62500", "650"],
        "options_hi": ["625", "6250", "62500", "650"],
        "answer_en": "625",
        "answer_hi": "625",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "The area of a rectangle with length 8 cm and breadth 4 cm is:",
        "question_hi": "8 cm लंबाई और 4 cm चौड़ाई वाले आयत का क्षेत्रफल क्या है?",
        "options_en": ["32 cm²", "34 cm²", "28 cm²", "30 cm²"],
        "options_hi": ["32 cm²", "34 cm²", "28 cm²", "30 cm²"],
        "answer_en": "32 cm²",
        "answer_hi": "32 cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "The value of 2x + 5 = 15 is:",
        "question_hi": "2x + 5 = 15 का मान क्या है?",
        "options_en": ["x = 5", "x = 4", "x = 6", "x = 7"],
        "options_hi": ["x = 5", "x = 4", "x = 6", "x = 7"],
        "answer_en": "x = 5",
        "answer_hi": "x = 5",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "The surface area of a cylinder with radius 7 cm and height 10 cm is:",
        "question_hi": "7 cm त्रिज्या और 10 cm ऊँचाई वाले बेलन का क्षेत्रफल क्या है?",
        "options_en": ["440 cm²", "440π cm²", "440π cm³", "400 cm²"],
        "options_hi": ["440 cm²", "440π cm²", "440π cm³", "400 cm²"],
        "answer_en": "440π cm²",
        "answer_hi": "440π cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "The perimeter of a rectangle with length 12 cm and breadth 5 cm is:",
        "question_hi": "12 cm लंबाई और 5 cm चौड़ाई वाले आयत का परिमाप क्या है?",
        "options_en": ["34 cm", "38 cm", "44 cm", "50 cm"],
        "options_hi": ["34 cm", "38 cm", "44 cm", "50 cm"],
        "answer_en": "34 cm",
        "answer_hi": "34 cm",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "The distance between the points (2, 3) and (5, 7) is:",
        "question_hi": "बिंदु (2, 3) और (5, 7) के बीच की दूरी क्या है?",
        "options_en": ["√34", "√30", "√25", "√40"],
        "options_hi": ["√34", "√30", "√25", "√40"],
        "answer_en": "√34",
        "answer_hi": "√34",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "The mean of the numbers 3, 5, 7, 9, 11 is:",
        "question_hi": "संख्याओं 3, 5, 7, 9, 11 का औसत (mean) क्या है?",
        "options_en": ["7", "6", "5", "8"],
        "options_hi": ["7", "6", "5", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "The probability of getting a red ball from a box containing 3 red balls, 4 green balls, and 5 blue balls is:",
        "question_hi": "एक बॉक्स से 3 लाल गेंदों, 4 हरी गेंदों और 5 नीली गेंदों में से लाल गेंद प्राप्त करने की संभावना क्या है?",
        "options_en": ["3/12", "3/10", "4/12", "5/12"],
        "options_hi": ["3/12", "3/10", "4/12", "5/12"],
        "answer_en": "3/12",
        "answer_hi": "3/12",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "The area of a circle with radius 7 cm is:",
        "question_hi": "7 cm त्रिज्या वाले वृत्त का क्षेत्रफल क्या है?",
        "options_en": ["49π cm²", "44π cm²", "49 cm²", "44 cm²"],
        "options_hi": ["49π cm²", "44π cm²", "49 cm²", "44 cm²"],
        "answer_en": "49π cm²",
        "answer_hi": "49π cm²",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "The equation of a line passing through the points (3, 2) and (5, 4) is:",
        "question_hi": "बिंदु (3, 2) और (5, 4) से गुजरने वाली रेखा की समीकरण क्या है?",
        "options_en": ["y = x + 1", "y = 2x - 4", "y = x - 1", "y = x + 3"],
        "options_hi": ["y = x + 1", "y = 2x - 4", "y = x - 1", "y = x + 3"],
        "answer_en": "y = x + 1",
        "answer_hi": "y = x + 1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "The volume of a cylinder with radius 4 cm and height 9 cm is:",
        "question_hi": "4 cm त्रिज्या और 9 cm ऊँचाई वाले बेलन का आयतन क्या है?",
        "options_en": ["36π cm³", "72π cm³", "36 cm³", "72 cm³"],
        "options_hi": ["36π cm³", "72π cm³", "36 cm³", "72 cm³"],
        "answer_en": "36π cm³",
        "answer_hi": "36π cm³",
        "attempted": false,
        "selected": ""
      }
    

  
    // Add more questions here...
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
        window.location.href = "/Deshbord/category/test/submit-test.html";
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