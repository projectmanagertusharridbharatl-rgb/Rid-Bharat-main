
const questions = [
    
    
        {
            "num": 1,
            "question_en": "What is the value of (a + b)²?",
            "question_hi": "(a + b)² का मान क्या है?",
            "options_en": ["a² + 2ab + b²", "a² - 2ab + b²", "a² + b²", "a² - b²"],
            "options_hi": ["a² + 2ab + b²", "a² - 2ab + b²", "a² + b²", "a² - b²"],
            "answer_en": "a² + 2ab + b²",
            "answer_hi": "a² + 2ab + b²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "The value of √144 is:",
            "question_hi": "√144 का मान है:",
            "options_en": ["10", "11", "12", "13"],
            "options_hi": ["10", "11", "12", "13"],
            "answer_en": "12",
            "answer_hi": "12",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "Which of the following is a quadratic equation?",
            "question_hi": "निम्नलिखित में से कौन सा द्विघात समीकरण है?",
            "options_en": ["x² + 3x + 2 = 0", "2x + 5 = 0", "x³ + 1 = 0", "x - 4 = 0"],
            "options_hi": ["x² + 3x + 2 = 0", "2x + 5 = 0", "x³ + 1 = 0", "x - 4 = 0"],
            "answer_en": "x² + 3x + 2 = 0",
            "answer_hi": "x² + 3x + 2 = 0",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "If a triangle has sides 3 cm, 4 cm, and 5 cm, it is a:",
            "question_hi": "यदि एक त्रिभुज के भुजाएँ 3 सेमी, 4 सेमी और 5 सेमी हैं, तो वह है:",
            "options_en": ["Scalene triangle", "Right-angled triangle", "Equilateral triangle", "Isosceles triangle"],
            "options_hi": ["विषमभुज त्रिभुज", "समकोण त्रिभुज", "समभुज त्रिभुज", "समद्विबाहु त्रिभुज"],
            "answer_en": "Right-angled triangle",
            "answer_hi": "समकोण त्रिभुज",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "What is the HCF of 12 and 18?",
            "question_hi": "12 और 18 का लघुत्तम समापवर्त्य (HCF) क्या है?",
            "options_en": ["2", "3", "6", "12"],
            "options_hi": ["2", "3", "6", "12"],
            "answer_en": "6",
            "answer_hi": "6",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "The value of π (pi) is approximately:",
            "question_hi": "π (पाई) का मान लगभग होता है:",
            "options_en": ["3.14", "3.41", "2.71", "1.41"],
            "options_hi": ["3.14", "3.41", "2.71", "1.41"],
            "answer_en": "3.14",
            "answer_hi": "3.14",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "The formula to find the area of a circle is:",
            "question_hi": "वृत्त का क्षेत्रफल ज्ञात करने का सूत्र है:",
            "options_en": ["πr²", "2πr", "πd", "r²"],
            "options_hi": ["πr²", "2πr", "πd", "r²"],
            "answer_en": "πr²",
            "answer_hi": "πr²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "Which of the following has terminating decimal expansion?",
            "question_hi": "निम्नलिखित में से किसका दशमलव विस्तार समाप्त होता है?",
            "options_en": ["1/2", "1/3", "1/7", "1/9"],
            "options_hi": ["1/2", "1/3", "1/7", "1/9"],
            "answer_en": "1/2",
            "answer_hi": "1/2",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "The distance between (0, 0) and (3, 4) is:",
            "question_hi": "(0, 0) और (3, 4) के बीच की दूरी है:",
            "options_en": ["5", "7", "6", "4"],
            "options_hi": ["5", "7", "6", "4"],
            "answer_en": "5",
            "answer_hi": "5",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "What is the value of sin 90°?",
            "question_hi": "sin 90° का मान क्या है?",
            "options_en": ["0", "1", "1/2", "√2/2"],
            "options_hi": ["0", "1", "1/2", "√2/2"],
            "answer_en": "1",
            "answer_hi": "1",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "Which of the following is a prime number?",
            "question_hi": "निम्नलिखित में से कौन एक अभाज्य संख्या है?",
            "options_en": ["15", "21", "29", "33"],
            "options_hi": ["15", "21", "29", "33"],
            "answer_en": "29",
            "answer_hi": "29",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "If the sides of a triangle are 5 cm, 5 cm, and 8 cm, it is a:",
            "question_hi": "यदि किसी त्रिभुज की भुजाएँ 5 सेमी, 5 सेमी, और 8 सेमी हैं, तो वह एक है:",
            "options_en": ["Equilateral triangle", "Scalene triangle", "Right-angled triangle", "Isosceles triangle"],
            "options_hi": ["समभुज त्रिभुज", "विषमभुज त्रिभुज", "समकोण त्रिभुज", "समद्विबाहु त्रिभुज"],
            "answer_en": "Isosceles triangle",
            "answer_hi": "समद्विबाहु त्रिभुज",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
            "question_en": "The LCM of 8 and 12 is:",
            "question_hi": "8 और 12 का ल.स. (LCM) क्या है?",
            "options_en": ["12", "16", "24", "36"],
            "options_hi": ["12", "16", "24", "36"],
            "answer_en": "24",
            "answer_hi": "24",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 14,
            "question_en": "The solution of the equation 2x - 4 = 10 is:",
            "question_hi": "समीकरण 2x - 4 = 10 का हल है:",
            "options_en": ["5", "6", "7", "8"],
            "options_hi": ["5", "6", "7", "8"],
            "answer_en": "7",
            "answer_hi": "7",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "What is the value of tan 45°?",
            "question_hi": "tan 45° का मान क्या है?",
            "options_en": ["0", "1", "√3", "1/√3"],
            "options_hi": ["0", "1", "√3", "1/√3"],
            "answer_en": "1",
            "answer_hi": "1",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 16,
            "question_en": "The formula for surface area of a cube is:",
            "question_hi": "घन का सम्पूर्ण पृष्ठीय क्षेत्रफल ज्ञात करने का सूत्र है:",
            "options_en": ["6a²", "4a²", "a²", "2a²"],
            "options_hi": ["6a²", "4a²", "a²", "2a²"],
            "answer_en": "6a²",
            "answer_hi": "6a²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "The mean of first 5 natural numbers is:",
            "question_hi": "प्रथम 5 प्राकृतिक संख्याओं का औसत है:",
            "options_en": ["2", "3", "4", "5"],
            "options_hi": ["2", "3", "4", "5"],
            "answer_en": "3",
            "answer_hi": "3",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "The value of 5³ is:",
            "question_hi": "5³ का मान है:",
            "options_en": ["15", "25", "125", "225"],
            "options_hi": ["15", "25", "125", "225"],
            "answer_en": "125",
            "answer_hi": "125",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "Which of these numbers is a perfect square?",
            "question_hi": "इनमें से कौन सी संख्या पूर्ण वर्ग है?",
            "options_en": ["20", "30", "49", "50"],
            "options_hi": ["20", "30", "49", "50"],
            "answer_en": "49",
            "answer_hi": "49",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "A pair of linear equations in two variables represents:",
            "question_hi": "दो चर में रैखिक समीकरणों की एक युग्म दर्शाता है:",
            "options_en": ["Line", "Point", "Plane", "Curve"],
            "options_hi": ["रेखा", "बिंदु", "समतल", "वक्र"],
            "answer_en": "Line",
            "answer_hi": "रेखा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 21,
            "question_en": "The square root of 81 is:",
            "question_hi": "81 का वर्गमूल है:",
            "options_en": ["7", "8", "9", "10"],
            "options_hi": ["7", "8", "9", "10"],
            "answer_en": "9",
            "answer_hi": "9",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 22,
            "question_en": "Which number is not a rational number?",
            "question_hi": "निम्नलिखित में से कौन संख्या परिमेय संख्या नहीं है?",
            "options_en": ["2", "3/4", "√2", "-5"],
            "options_hi": ["2", "3/4", "√2", "-5"],
            "answer_en": "√2",
            "answer_hi": "√2",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 23,
            "question_en": "The area of a triangle with base 10 cm and height 6 cm is:",
            "question_hi": "आधार 10 सेमी और ऊंचाई 6 सेमी वाले त्रिभुज का क्षेत्रफल है:",
            "options_en": ["30 cm²", "60 cm²", "16 cm²", "40 cm²"],
            "options_hi": ["30 cm²", "60 cm²", "16 cm²", "40 cm²"],
            "answer_en": "30 cm²",
            "answer_hi": "30 cm²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 24,
            "question_en": "The value of 2⁵ is:",
            "question_hi": "2⁵ का मान है:",
            "options_en": ["16", "32", "64", "128"],
            "options_hi": ["16", "32", "64", "128"],
            "answer_en": "32",
            "answer_hi": "32",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 25,
            "question_en": "The number of zeroes in the polynomial x² + 5x + 6 is:",
            "question_hi": "बहुपद x² + 5x + 6 में शून्यों की संख्या है:",
            "options_en": ["1", "2", "3", "0"],
            "options_hi": ["1", "2", "3", "0"],
            "answer_en": "2",
            "answer_hi": "2",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 26,
            "question_en": "If sin A = 1/2, then angle A is:",
            "question_hi": "यदि sin A = 1/2, तो कोण A है:",
            "options_en": ["30°", "45°", "60°", "90°"],
            "options_hi": ["30°", "45°", "60°", "90°"],
            "answer_en": "30°",
            "answer_hi": "30°",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 27,
            "question_en": "The value of 0 ÷ 5 is:",
            "question_hi": "0 ÷ 5 का मान है:",
            "options_en": ["0", "5", "undefined", "1"],
            "options_hi": ["0", "5", "अपरिभाषित", "1"],
            "answer_en": "0",
            "answer_hi": "0",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 28,
            "question_en": "The coordinates of the origin in Cartesian plane are:",
            "question_hi": "कार्टीशियन तल में मूल बिंदु के निर्देशांक हैं:",
            "options_en": ["(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"],
            "options_hi": ["(0, 0)", "(1, 1)", "(0, 1)", "(1, 0)"],
            "answer_en": "(0, 0)",
            "answer_hi": "(0, 0)",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 29,
            "question_en": "What is the mode in the data set: 2, 3, 3, 4, 5?",
            "question_hi": "डेटा सेट 2, 3, 3, 4, 5 में मोड क्या है?",
            "options_en": ["2", "3", "4", "5"],
            "options_hi": ["2", "3", "4", "5"],
            "answer_en": "3",
            "answer_hi": "3",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 30,
            "question_en": "The perimeter of a square with side 6 cm is:",
            "question_hi": "भुजा 6 सेमी वाले वर्ग की परिमिति है:",
            "options_en": ["24 cm", "12 cm", "36 cm", "18 cm"],
            "options_hi": ["24 cm", "12 cm", "36 cm", "18 cm"],
            "answer_en": "24 cm",
            "answer_hi": "24 cm",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 31,
            "question_en": "Which of the following is a Pythagorean triplet?",
            "question_hi": "निम्नलिखित में से कौन एक पाइथागोरस त्रिक है?",
            "options_en": ["3, 4, 5", "5, 6, 7", "6, 8, 10", "7, 24, 25"],
            "options_hi": ["3, 4, 5", "5, 6, 7", "6, 8, 10", "7, 24, 25"],
            "answer_en": "3, 4, 5",
            "answer_hi": "3, 4, 5",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 32,
            "question_en": "Which of the following is not a quadratic equation?",
            "question_hi": "निम्न में से कौन द्विघात समीकरण नहीं है?",
            "options_en": ["x² + 5x + 6 = 0", "2x + 3 = 0", "x² - 4 = 0", "x² + x = 0"],
            "options_hi": ["x² + 5x + 6 = 0", "2x + 3 = 0", "x² - 4 = 0", "x² + x = 0"],
            "answer_en": "2x + 3 = 0",
            "answer_hi": "2x + 3 = 0",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 33,
            "question_en": "If a² - b² = 0, then:",
            "question_hi": "यदि a² - b² = 0, तो:",
            "options_en": ["a = b", "a = -b", "a² = b²", "All of these"],
            "options_hi": ["a = b", "a = -b", "a² = b²", "उपरोक्त सभी"],
            "answer_en": "All of these",
            "answer_hi": "उपरोक्त सभी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 34,
            "question_en": "How many sides does a hexagon have?",
            "question_hi": "षट्भुज में कितनी भुजाएँ होती हैं?",
            "options_en": ["5", "6", "7", "8"],
            "options_hi": ["5", "6", "7", "8"],
            "answer_en": "6",
            "answer_hi": "6",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 35,
            "question_en": "The sum of interior angles of a triangle is:",
            "question_hi": "त्रिभुज के आंतरिक कोणों का योगफल होता है:",
            "options_en": ["90°", "180°", "270°", "360°"],
            "options_hi": ["90°", "180°", "270°", "360°"],
            "answer_en": "180°",
            "answer_hi": "180°",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 36,
            "question_en": "A number which is divisible by 3 and 4 is also divisible by:",
            "question_hi": "एक संख्या जो 3 और 4 दोनों से विभाज्य है, वह किससे भी विभाज्य होगी?",
            "options_en": ["6", "7", "8", "12"],
            "options_hi": ["6", "7", "8", "12"],
            "answer_en": "12",
            "answer_hi": "12",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 37,
            "question_en": "Which figure has only one line of symmetry?",
            "question_hi": "निम्न में से किस आकृति में केवल एक सममिति रेखा होती है?",
            "options_en": ["Circle", "Rectangle", "Isosceles triangle", "Square"],
            "options_hi": ["वृत्त", "आयत", "समद्विबाहु त्रिभुज", "वर्ग"],
            "answer_en": "Isosceles triangle",
            "answer_hi": "समद्विबाहु त्रिभुज",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 38,
            "question_en": "What is the smallest prime number?",
            "question_hi": "सबसे छोटी अभाज्य संख्या कौन सी है?",
            "options_en": ["0", "1", "2", "3"],
            "options_hi": ["0", "1", "2", "3"],
            "answer_en": "2",
            "answer_hi": "2",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 39,
            "question_en": "What is the value of (–2) × (–3)?",
            "question_hi": "(–2) × (–3) का मान क्या है?",
            "options_en": ["–6", "6", "–1", "5"],
            "options_hi": ["–6", "6", "–1", "5"],
            "answer_en": "6",
            "answer_hi": "6",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 40,
            "question_en": "Which number is both even and prime?",
            "question_hi": "कौन सी संख्या सम और अभाज्य दोनों है?",
            "options_en": ["2", "4", "6", "8"],
            "options_hi": ["2", "4", "6", "8"],
            "answer_en": "2",
            "answer_hi": "2",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 41,
            "question_en": "What is the next prime number after 7?",
            "question_hi": "7 के बाद अगली अभाज्य संख्या कौन सी है?",
            "options_en": ["8", "9", "10", "11"],
            "options_hi": ["8", "9", "10", "11"],
            "answer_en": "11",
            "answer_hi": "11",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 42,
            "question_en": "Which of the following is a factor of 36?",
            "question_hi": "निम्न में से कौन 36 का गुणनखंड है?",
            "options_en": ["5", "6", "7", "11"],
            "options_hi": ["5", "6", "7", "11"],
            "answer_en": "6",
            "answer_hi": "6",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 43,
            "question_en": "Which of the following is a linear equation?",
            "question_hi": "निम्न में से कौन एक रैखिक समीकरण है?",
            "options_en": ["x + 2 = 5", "x² + 2 = 0", "x³ = 8", "x² - x + 1 = 0"],
            "options_hi": ["x + 2 = 5", "x² + 2 = 0", "x³ = 8", "x² - x + 1 = 0"],
            "answer_en": "x + 2 = 5",
            "answer_hi": "x + 2 = 5",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 44,
            "question_en": "If a triangle has all angles less than 90°, it is called:",
            "question_hi": "यदि किसी त्रिभुज के सभी कोण 90° से कम हैं, तो वह कहलाता है:",
            "options_en": ["Right triangle", "Acute triangle", "Obtuse triangle", "Equilateral triangle"],
            "options_hi": ["समकोण त्रिभुज", "नुकीला त्रिभुज", "अधिक कोण त्रिभुज", "समभुज त्रिभुज"],
            "answer_en": "Acute triangle",
            "answer_hi": "नुकीला त्रिभुज",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 45,
            "question_en": "What is the square of 12?",
            "question_hi": "12 का वर्ग क्या है?",
            "options_en": ["124", "144", "164", "122"],
            "options_hi": ["124", "144", "164", "122"],
            "answer_en": "144",
            "answer_hi": "144",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 46,
            "question_en": "What is the cube root of 27?",
            "question_hi": "27 का घनमूल क्या है?",
            "options_en": ["2", "3", "4", "5"],
            "options_hi": ["2", "3", "4", "5"],
            "answer_en": "3",
            "answer_hi": "3",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 47,
            "question_en": "Which of the following is an irrational number?",
            "question_hi": "निम्नलिखित में से कौन अपरिमेय संख्या है?",
            "options_en": ["√2", "3/4", "0.5", "2"],
            "options_hi": ["√2", "3/4", "0.5", "2"],
            "answer_en": "√2",
            "answer_hi": "√2",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 48,
            "question_en": "What is 25% of 200?",
            "question_hi": "200 का 25% क्या है?",
            "options_en": ["25", "50", "75", "100"],
            "options_hi": ["25", "50", "75", "100"],
            "answer_en": "50",
            "answer_hi": "50",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 49,
            "question_en": "Which of these is a multiple of 9?",
            "question_hi": "इनमें से कौन 9 का गुणज है?",
            "options_en": ["14", "18", "22", "26"],
            "options_hi": ["14", "18", "22", "26"],
            "answer_en": "18",
            "answer_hi": "18",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 50,
            "question_en": "What is the value of 10²?",
            "question_hi": "10² का मान क्या है?",
            "options_en": ["10", "20", "100", "1000"],
            "options_hi": ["10", "20", "100", "1000"],
            "answer_en": "100",
            "answer_hi": "100",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 51,
            "question_en": "If x + y = 10 and x - y = 4, what is the value of x?",
            "question_hi": "यदि x + y = 10 और x - y = 4, तो x का मान क्या है?",
            "options_en": ["3", "5", "7", "10"],
            "options_hi": ["3", "5", "7", "10"],
            "answer_en": "7",
            "answer_hi": "7",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 52,
            "question_en": "What is the value of x in the equation 2x = 14?",
            "question_hi": "समीकरण 2x = 14 में x का मान क्या है?",
            "options_en": ["5", "6", "7", "8"],
            "options_hi": ["5", "6", "7", "8"],
            "answer_en": "7",
            "answer_hi": "7",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 53,
            "question_en": "Which angle is a right angle?",
            "question_hi": "कौन सा कोण समकोण है?",
            "options_en": ["45°", "60°", "90°", "120°"],
            "options_hi": ["45°", "60°", "90°", "120°"],
            "answer_en": "90°",
            "answer_hi": "90°",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 54,
            "question_en": "What is the LCM of 8 and 12?",
            "question_hi": "8 और 12 का लघुत्तम समापवर्त्य (LCM) क्या है?",
            "options_en": ["16", "20", "24", "32"],
            "options_hi": ["16", "20", "24", "32"],
            "answer_en": "24",
            "answer_hi": "24",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 55,
            "question_en": "What is the perimeter of a square with side 5 cm?",
            "question_hi": "5 सेमी भुजा वाले वर्ग का परिमाप क्या है?",
            "options_en": ["10 cm", "15 cm", "20 cm", "25 cm"],
            "options_hi": ["10 सेमी", "15 सेमी", "20 सेमी", "25 सेमी"],
            "answer_en": "20 cm",
            "answer_hi": "20 सेमी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 56,
            "question_en": "What is the area of a rectangle with length 6 cm and breadth 4 cm?",
            "question_hi": "6 सेमी लंबाई और 4 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या है?",
            "options_en": ["20 cm²", "24 cm²", "30 cm²", "36 cm²"],
            "options_hi": ["20 सेमी²", "24 सेमी²", "30 सेमी²", "36 सेमी²"],
            "answer_en": "24 cm²",
            "answer_hi": "24 सेमी²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 57,
            "question_en": "How many zeros are there in 1 lakh?",
            "question_hi": "1 लाख में कितने शून्य होते हैं?",
            "options_en": ["4", "5", "6", "7"],
            "options_hi": ["4", "5", "6", "7"],
            "answer_en": "5",
            "answer_hi": "5",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 58,
            "question_en": "Which of the following has no reciprocal?",
            "question_hi": "निम्नलिखित में से किसका कोई प्रतिलोम नहीं होता है?",
            "options_en": ["0", "1", "2", "5"],
            "options_hi": ["0", "1", "2", "5"],
            "answer_en": "0",
            "answer_hi": "0",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 59,
            "question_en": "What is the sum of first 10 natural numbers?",
            "question_hi": "प्रथम 10 प्राकृतिक संख्याओं का योगफल क्या है?",
            "options_en": ["45", "50", "55", "60"],
            "options_hi": ["45", "50", "55", "60"],
            "answer_en": "55",
            "answer_hi": "55",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 60,
            "question_en": "What is the mean of 5, 10, 15, 20, and 25?",
            "question_hi": "5, 10, 15, 20 और 25 का औसत क्या है?",
            "options_en": ["10", "15", "20", "25"],
            "options_hi": ["10", "15", "20", "25"],
            "answer_en": "15",
            "answer_hi": "15",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 61,
            "question_en": "What is the value of 0 ÷ 7?",
            "question_hi": "0 ÷ 7 का मान क्या है?",
            "options_en": ["0", "1", "7", "Undefined"],
            "options_hi": ["0", "1", "7", "अपरिभाषित"],
            "answer_en": "0",
            "answer_hi": "0",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 62,
            "question_en": "What is 50% of 300?",
            "question_hi": "300 का 50% कितना होता है?",
            "options_en": ["100", "125", "150", "200"],
            "options_hi": ["100", "125", "150", "200"],
            "answer_en": "150",
            "answer_hi": "150",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 63,
            "question_en": "What is the HCF of 18 and 24?",
            "question_hi": "18 और 24 का महत्तम समापवर्तक (HCF) क्या है?",
            "options_en": ["2", "3", "6", "12"],
            "options_hi": ["2", "3", "6", "12"],
            "answer_en": "6",
            "answer_hi": "6",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 64,
            "question_en": "What is the next even number after 48?",
            "question_hi": "48 के बाद अगली सम संख्या कौन सी है?",
            "options_en": ["49", "50", "51", "52"],
            "options_hi": ["49", "50", "51", "52"],
            "answer_en": "50",
            "answer_hi": "50",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 65,
            "question_en": "Which number is divisible by 9?",
            "question_hi": "इनमें से कौन सी संख्या 9 से विभाज्य है?",
            "options_en": ["17", "18", "20", "22"],
            "options_hi": ["17", "18", "20", "22"],
            "answer_en": "18",
            "answer_hi": "18",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 66,
            "question_en": "What is the square root of 81?",
            "question_hi": "81 का वर्गमूल क्या है?",
            "options_en": ["7", "8", "9", "10"],
            "options_hi": ["7", "8", "9", "10"],
            "answer_en": "9",
            "answer_hi": "9",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 67,
            "question_en": "Which of the following is an even number?",
            "question_hi": "निम्न में से कौन सी संख्या सम है?",
            "options_en": ["11", "13", "15", "16"],
            "options_hi": ["11", "13", "15", "16"],
            "answer_en": "16",
            "answer_hi": "16",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 68,
            "question_en": "What is the value of 7 × 6?",
            "question_hi": "7 × 6 का मान क्या है?",
            "options_en": ["36", "42", "48", "56"],
            "options_hi": ["36", "42", "48", "56"],
            "answer_en": "42",
            "answer_hi": "42",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 69,
            "question_en": "What is the formula of the area of a circle?",
            "question_hi": "वृत्त का क्षेत्रफल निकालने का सूत्र क्या है?",
            "options_en": ["πr", "πr²", "2πr", "πd"],
            "options_hi": ["πr", "πr²", "2πr", "πd"],
            "answer_en": "πr²",
            "answer_hi": "πr²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 70,
            "question_en": "What is the value of 3² + 4²?",
            "question_hi": "3² + 4² का मान क्या है?",
            "options_en": ["12", "16", "25", "30"],
            "options_hi": ["12", "16", "25", "30"],
            "answer_en": "25",
            "answer_hi": "25",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 71,
            "question_en": "What is the cube of 3?",
            "question_hi": "3 का घनफल क्या है?",
            "options_en": ["6", "9", "27", "81"],
            "options_hi": ["6", "9", "27", "81"],
            "answer_en": "27",
            "answer_hi": "27",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 72,
            "question_en": "Which of the following is a prime number?",
            "question_hi": "निम्नलिखित में से कौन एक अभाज्य संख्या है?",
            "options_en": ["4", "6", "9", "11"],
            "options_hi": ["4", "6", "9", "11"],
            "answer_en": "11",
            "answer_hi": "11",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 73,
            "question_en": "What is the value of 15% of 200?",
            "question_hi": "200 का 15% कितना होगा?",
            "options_en": ["25", "30", "35", "40"],
            "options_hi": ["25", "30", "35", "40"],
            "answer_en": "30",
            "answer_hi": "30",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 74,
            "question_en": "What is the formula for perimeter of a rectangle?",
            "question_hi": "आयत का परिमाप निकालने का सूत्र क्या है?",
            "options_en": ["2(l + b)", "l × b", "2l", "2b"],
            "options_hi": ["2(l + b)", "l × b", "2l", "2b"],
            "answer_en": "2(l + b)",
            "answer_hi": "2(l + b)",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 75,
            "question_en": "What is the place value of 7 in 5721?",
            "question_hi": "5721 में 7 का स्थानिक मान क्या है?",
            "options_en": ["7", "70", "700", "7000"],
            "options_hi": ["7", "70", "700", "7000"],
            "answer_en": "700",
            "answer_hi": "700",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 76,
            "question_en": "Which is the smallest 4-digit number?",
            "question_hi": "सबसे छोटी 4-अंकीय संख्या कौन सी है?",
            "options_en": ["1000", "100", "999", "1111"],
            "options_hi": ["1000", "100", "999", "1111"],
            "answer_en": "1000",
            "answer_hi": "1000",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 77,
            "question_en": "What is the next multiple of 9 after 45?",
            "question_hi": "45 के बाद 9 का अगला गुणज क्या है?",
            "options_en": ["46", "49", "54", "63"],
            "options_hi": ["46", "49", "54", "63"],
            "answer_en": "54",
            "answer_hi": "54",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 78,
            "question_en": "What is the value of 6² - 5²?",
            "question_hi": "6² - 5² का मान क्या है?",
            "options_en": ["1", "11", "25", "35"],
            "options_hi": ["1", "11", "25", "35"],
            "answer_en": "11",
            "answer_hi": "11",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 79,
            "question_en": "How many sides does a hexagon have?",
            "question_hi": "षट्भुज में कितनी भुजाएँ होती हैं?",
            "options_en": ["5", "6", "7", "8"],
            "options_hi": ["5", "6", "7", "8"],
            "answer_en": "6",
            "answer_hi": "6",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 80,
            "question_en": "What is the value of 1/2 + 1/4?",
            "question_hi": "1/2 + 1/4 का मान क्या है?",
            "options_en": ["3/4", "1", "5/4", "2/4"],
            "options_hi": ["3/4", "1", "5/4", "2/4"],
            "answer_en": "3/4",
            "answer_hi": "3/4",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 81,
            "question_en": "Which of these is a square number?",
            "question_hi": "निम्नलिखित में से कौन एक वर्ग संख्या है?",
            "options_en": ["12", "15", "16", "18"],
            "options_hi": ["12", "15", "16", "18"],
            "answer_en": "16",
            "answer_hi": "16",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 82,
            "question_en": "What is the value of 100 ÷ 4?",
            "question_hi": "100 ÷ 4 का मान क्या है?",
            "options_en": ["20", "25", "30", "40"],
            "options_hi": ["20", "25", "30", "40"],
            "answer_en": "25",
            "answer_hi": "25",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 83,
            "question_en": "What is 3/4 expressed as a percentage?",
            "question_hi": "3/4 को प्रतिशत में कैसे व्यक्त करेंगे?",
            "options_en": ["25%", "50%", "75%", "100%"],
            "options_hi": ["25%", "50%", "75%", "100%"],
            "answer_en": "75%",
            "answer_hi": "75%",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 84,
            "question_en": "What is the sum of angles of a triangle?",
            "question_hi": "त्रिभुज के कोणों का योगफल क्या होता है?",
            "options_en": ["90°", "180°", "270°", "360°"],
            "options_hi": ["90°", "180°", "270°", "360°"],
            "answer_en": "180°",
            "answer_hi": "180°",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 85,
            "question_en": "What is the result of 10 - (3 + 2)?",
            "question_hi": "10 - (3 + 2) का परिणाम क्या है?",
            "options_en": ["3", "4", "5", "6"],
            "options_hi": ["3", "4", "5", "6"],
            "answer_en": "5",
            "answer_hi": "5",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 86,
            "question_en": "Which of the following is a factor of 36?",
            "question_hi": "निम्नलिखित में से कौन 36 का गुणनखंड है?",
            "options_en": ["5", "6", "7", "8"],
            "options_hi": ["5", "6", "7", "8"],
            "answer_en": "6",
            "answer_hi": "6",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 87,
            "question_en": "Which one is greater: 0.7 or 0.77?",
            "question_hi": "इनमें से कौन बड़ा है: 0.7 या 0.77?",
            "options_en": ["0.7", "0.77", "Equal", "Cannot say"],
            "options_hi": ["0.7", "0.77", "समान", "कह नहीं सकते"],
            "answer_en": "0.77",
            "answer_hi": "0.77",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 88,
            "question_en": "Which figure has only one line of symmetry?",
            "question_hi": "निम्न आकृतियों में से किसमें केवल एक रेखीय सममिति होती है?",
            "options_en": ["Rectangle", "Circle", "Isosceles triangle", "Square"],
            "options_hi": ["आयत", "वृत्त", "समद्विबाहु त्रिभुज", "वर्ग"],
            "answer_en": "Isosceles triangle",
            "answer_hi": "समद्विबाहु त्रिभुज",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 89,
            "question_en": "What is the square of 12?",
            "question_hi": "12 का वर्गफल क्या है?",
            "options_en": ["124", "144", "122", "132"],
            "options_hi": ["124", "144", "122", "132"],
            "answer_en": "144",
            "answer_hi": "144",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 90,
            "question_en": "Which number comes next in the sequence: 2, 4, 8, 16, ___?",
            "question_hi": "श्रृंखला में अगली संख्या क्या होगी: 2, 4, 8, 16, ___?",
            "options_en": ["18", "24", "30", "32"],
            "options_hi": ["18", "24", "30", "32"],
            "answer_en": "32",
            "answer_hi": "32",
            "attempted": false,
            "selected": ""
        },

        {
            "num": 91,
            "question_en": "What is the average of 4, 8, and 12?",
            "question_hi": "4, 8 और 12 का औसत क्या है?",
            "options_en": ["6", "8", "12", "24"],
            "options_hi": ["6", "8", "12", "24"],
            "answer_en": "8",
            "answer_hi": "8",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 92,
            "question_en": "How many degrees are there in a right angle?",
            "question_hi": "समकोण में कितने अंश होते हैं?",
            "options_en": ["45°", "60°", "90°", "180°"],
            "options_hi": ["45°", "60°", "90°", "180°"],
            "answer_en": "90°",
            "answer_hi": "90°",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 93,
            "question_en": "Which is the next prime number after 13?",
            "question_hi": "13 के बाद अगली अभाज्य संख्या कौन सी है?",
            "options_en": ["15", "17", "19", "21"],
            "options_hi": ["15", "17", "19", "21"],
            "answer_en": "17",
            "answer_hi": "17",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 94,
            "question_en": "What is 1/3 of 90?",
            "question_hi": "90 का 1/3 क्या है?",
            "options_en": ["30", "25", "35", "45"],
            "options_hi": ["30", "25", "35", "45"],
            "answer_en": "30",
            "answer_hi": "30",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 95,
            "question_en": "Which unit is used to measure area?",
            "question_hi": "क्षेत्रफल मापने की इकाई क्या है?",
            "options_en": ["cm", "cm²", "cm³", "kg"],
            "options_hi": ["सेमी", "सेमी²", "सेमी³", "किग्रा"],
            "answer_en": "cm²",
            "answer_hi": "सेमी²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 96,
            "question_en": "What is the LCM of 3 and 4?",
            "question_hi": "3 और 4 का लघुत्तम समापवर्त्य (LCM) क्या है?",
            "options_en": ["6", "8", "10", "12"],
            "options_hi": ["6", "8", "10", "12"],
            "answer_en": "12",
            "answer_hi": "12",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 97,
            "question_en": "What is 10% of 500?",
            "question_hi": "500 का 10% क्या है?",
            "options_en": ["50", "25", "100", "10"],
            "options_hi": ["50", "25", "100", "10"],
            "answer_en": "50",
            "answer_hi": "50",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 98,
            "question_en": "What is the reciprocal of 5?",
            "question_hi": "5 का व्युत्क्रम क्या है?",
            "options_en": ["1/2", "1/3", "1/5", "5"],
            "options_hi": ["1/2", "1/3", "1/5", "5"],
            "answer_en": "1/5",
            "answer_hi": "1/5",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 99,
            "question_en": "What is the value of π (pi) approximately?",
            "question_hi": "π (पाई) का लगभग मान क्या है?",
            "options_en": ["2.14", "3.14", "4.14", "5.14"],
            "options_hi": ["2.14", "3.14", "4.14", "5.14"],
            "answer_en": "3.14",
            "answer_hi": "3.14",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 100,
            "question_en": "Which of the following is a perfect cube?",
            "question_hi": "निम्नलिखित में से कौन पूर्ण घन संख्या है?",
            "options_en": ["8", "9", "12", "15"],
            "options_hi": ["8", "9", "12", "15"],
            "answer_en": "8",
            "answer_hi": "8",
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