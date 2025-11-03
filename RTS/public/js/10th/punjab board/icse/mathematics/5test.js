
const questions = [
        
                {
                  "num": 1,
                  "question_en": "The value of sin²θ + cos²θ is:",
                  "question_hi": "sin²θ + cos²θ का मान है:",
                  "options_en": ["0", "1", "2", "sinθ"],
                  "options_hi": ["0", "1", "2", "sinθ"],
                  "answer_en": "1",
                  "answer_hi": "1",
                  "attempted": false
                },
                {
                  "num": 2,
                  "question_en": "If sinθ = 1/2, then the value of θ is:",
                  "question_hi": "यदि sinθ = 1/2, तो θ का मान है:",
                  "options_en": ["30°", "45°", "60°", "90°"],
                  "options_hi": ["30°", "45°", "60°", "90°"],
                  "answer_en": "30°",
                  "answer_hi": "30°",
                  "attempted": false
                },
                {
                  "num": 3,
                  "question_en": "The value of tan45° is:",
                  "question_hi": "tan45° का मान है:",
                  "options_en": ["0", "1", "√3", "1/√3"],
                  "options_hi": ["0", "1", "√3", "1/√3"],
                  "answer_en": "1",
                  "answer_hi": "1",
                  "attempted": false
                },
                {
                  "num": 4,
                  "question_en": "The volume of a cube with edge 5 cm is:",
                  "question_hi": "5 सेमी किनारे वाले घन का आयतन है:",
                  "options_en": ["25 cm³", "100 cm³", "125 cm³", "150 cm³"],
                  "options_hi": ["25 सेमी³", "100 सेमी³", "125 सेमी³", "150 सेमी³"],
                  "answer_en": "125 cm³",
                  "answer_hi": "125 सेमी³",
                  "attempted": false
                },
                {
                  "num": 5,
                  "question_en": "The value of sin30° + cos60° is:",
                  "question_hi": "sin30° + cos60° का मान है:",
                  "options_en": ["0", "1/2", "1", "2"],
                  "options_hi": ["0", "1/2", "1", "2"],
                  "answer_en": "1",
                  "answer_hi": "1",
                  "attempted": false
                },
                {
                  "num": 6,
                  "question_en": "The curved surface area of a cylinder with radius 7 cm and height 10 cm is:",
                  "question_hi": "7 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले बेलन का वक्र पृष्ठीय क्षेत्रफल है:",
                  "options_en": ["140π cm²", "154π cm²", "440π cm²", "540π cm²"],
                  "options_hi": ["140π सेमी²", "154π सेमी²", "440π सेमी²", "540π सेमी²"],
                  "answer_en": "440π cm²",
                  "answer_hi": "440π सेमी²",
                  "attempted": false
                },
                {
                  "num": 7,
                  "question_en": "The value of sec²θ - tan²θ is:",
                  "question_hi": "sec²θ - tan²θ का मान है:",
                  "options_en": ["0", "1", "2", "sinθ"],
                  "options_hi": ["0", "1", "2", "sinθ"],
                  "answer_en": "1",
                  "answer_hi": "1",
                  "attempted": false
                },
                {
                  "num": 8,
                  "question_en": "The total surface area of a cube with edge 4 cm is:",
                  "question_hi": "4 सेमी किनारे वाले घन का कुल पृष्ठीय क्षेत्रफल है:",
                  "options_en": ["16 cm²", "64 cm²", "96 cm²", "128 cm²"],
                  "options_hi": ["16 सेमी²", "64 सेमी²", "96 सेमी²", "128 सेमी²"],
                  "answer_en": "96 cm²",
                  "answer_hi": "96 सेमी²",
                  "attempted": false
                },
                {
                  "num": 9,
                  "question_en": "If tanθ = 1, then the value of θ is:",
                  "question_hi": "यदि tanθ = 1, तो θ का मान है:",
                  "options_en": ["30°", "45°", "60°", "90°"],
                  "options_hi": ["30°", "45°", "60°", "90°"],
                  "answer_en": "45°",
                  "answer_hi": "45°",
                  "attempted": false
                },
                {
                  "num": 10,
                  "question_en": "The volume of a sphere with radius 3 cm is:",
                  "question_hi": "3 सेमी त्रिज्या वाले गोले का आयतन है:",
                  "options_en": ["12π cm³", "27π cm³", "36π cm³", "108π cm³"],
                  "options_hi": ["12π सेमी³", "27π सेमी³", "36π सेमी³", "108π सेमी³"],
                  "answer_en": "36π cm³",
                  "answer_hi": "36π सेमी³",
                  "attempted": false
                },
                {
                  "num": 11,
                  "question_en": "The value of cosec30° is:",
                  "question_hi": "cosec30° का मान है:",
                  "options_en": ["1/2", "1", "2", "√2"],
                  "options_hi": ["1/2", "1", "2", "√2"],
                  "answer_en": "2",
                  "answer_hi": "2",
                  "attempted": false
                },
                {
                  "num": 12,
                  "question_en": "The lateral surface area of a cone with radius 5 cm and slant height 13 cm is:",
                  "question_hi": "5 सेमी त्रिज्या और 13 सेमी तिर्यक ऊँचाई वाले शंकु का पार्श्व पृष्ठीय क्षेत्रफल है:",
                  "options_en": ["65π cm²", "130π cm²", "325π cm²", "650π cm²"],
                  "options_hi": ["65π सेमी²", "130π सेमी²", "325π सेमी²", "650π सेमी²"],
                  "answer_en": "65π cm²",
                  "answer_hi": "65π सेमी²",
                  "attempted": false
                },
                {
                  "num": 13,
                  "question_en": "The value of sin(90°-θ) is:",
                  "question_hi": "sin(90°-θ) का मान है:",
                  "options_en": ["sinθ", "cosθ", "tanθ", "cosecθ"],
                  "options_hi": ["sinθ", "cosθ", "tanθ", "cosecθ"],
                  "answer_en": "cosθ",
                  "answer_hi": "cosθ",
                  "attempted": false
                },
                {
                  "num": 14,
                  "question_en": "The volume of a cuboid with dimensions 5 cm × 4 cm × 3 cm is:",
                  "question_hi": "5 सेमी × 4 सेमी × 3 सेमी विमाओं वाले घनाभ का आयतन है:",
                  "options_en": ["12 cm³", "24 cm³", "60 cm³", "120 cm³"],
                  "options_hi": ["12 सेमी³", "24 सेमी³", "60 सेमी³", "120 सेमी³"],
                  "answer_en": "60 cm³",
                  "answer_hi": "60 सेमी³",
                  "attempted": false
                },
                {
                  "num": 15,
                  "question_en": "The value of 2sin30°cos30° is:",
                  "question_hi": "2sin30°cos30° का मान है:",
                  "options_en": ["1/2", "√3/2", "1", "√3"],
                  "options_hi": ["1/2", "√3/2", "1", "√3"],
                  "answer_en": "√3/2",
                  "answer_hi": "√3/2",
                  "attempted": false
                },
                {
                  "num": 16,
                  "question_en": "The total surface area of a hemisphere with radius 7 cm is:",
                  "question_hi": "7 सेमी त्रिज्या वाले अर्धगोले का कुल पृष्ठीय क्षेत्रफल है:",
                  "options_en": ["147π cm²", "154π cm²", "294π cm²", "308π cm²"],
                  "options_hi": ["147π सेमी²", "154π सेमी²", "294π सेमी²", "308π सेमी²"],
                  "answer_en": "147π cm²",
                  "answer_hi": "147π सेमी²",
                  "attempted": false
                },
                {
                  "num": 17,
                  "question_en": "If cosθ = √3/2, then the value of θ is:",
                  "question_hi": "यदि cosθ = √3/2, तो θ का मान है:",
                  "options_en": ["30°", "45°", "60°", "90°"],
                  "options_hi": ["30°", "45°", "60°", "90°"],
                  "answer_en": "30°",
                  "answer_hi": "30°",
                  "attempted": false
                },
                {
                  "num": 18,
                  "question_en": "The volume of a cone with radius 6 cm and height 8 cm is:",
                  "question_hi": "6 सेमी त्रिज्या और 8 सेमी ऊँचाई वाले शंकु का आयतन है:",
                  "options_en": ["48π cm³", "96π cm³", "144π cm³", "288π cm³"],
                  "options_hi": ["48π सेमी³", "96π सेमी³", "144π सेमी³", "288π सेमी³"],
                  "answer_en": "96π cm³",
                  "answer_hi": "96π सेमी³",
                  "attempted": false
                },
                {
                  "num": 19,
                  "question_en": "The value of tanθ × cotθ is:",
                  "question_hi": "tanθ × cotθ का मान है:",
                  "options_en": ["0", "1", "sinθ", "cosθ"],
                  "options_hi": ["0", "1", "sinθ", "cosθ"],
                  "answer_en": "1",
                  "answer_hi": "1",
                  "attempted": false
                },
                {
                  "num": 20,
                  "question_en": "The curved surface area of a hemisphere with radius 14 cm is:",
                  "question_hi": "14 सेमी त्रिज्या वाले अर्धगोले का वक्र पृष्ठीय क्षेत्रफल है:",
                  "options_en": ["196π cm²", "392π cm²", "588π cm²", "784π cm²"],
                  "options_hi": ["196π सेमी²", "392π सेमी²", "588π सेमी²", "784π सेमी²"],
                  "answer_en": "392π cm²",
                  "answer_hi": "392π सेमी²",
                  "attempted": false
                },
                {
                  "num": 21,
                  "question_en": "The value of sin60°cos30° + cos60°sin30° is:",
                  "question_hi": "sin60°cos30° + cos60°sin30° का मान है:",
                  "options_en": ["0", "1/2", "1", "√3/2"],
                  "options_hi": ["0", "1/2", "1", "√3/2"],
                  "answer_en": "1",
                  "answer_hi": "1",
                  "attempted": false
                },
                {
                  "num": 22,
                  "question_en": "The total surface area of a cylinder with radius 7 cm and height 10 cm is:",
                  "question_hi": "7 सेमी त्रिज्या और 10 सेमी ऊँचाई वाले बेलन का कुल पृष्ठीय क्षेत्रफल है:",
                  "options_en": ["140π cm²", "238π cm²", "440π cm²", "748π cm²"],
                  "options_hi": ["140π सेमी²", "238π सेमी²", "440π सेमी²", "748π सेमी²"],
                  "answer_en": "748π cm²",
                  "answer_hi": "748π सेमी²",
                  "attempted": false
                },
                {
                  "num": 23,
                  "question_en": "If cotθ = √3, then the value of θ is:",
                  "question_hi": "यदि cotθ = √3, तो θ का मान है:",
                  "options_en": ["30°", "45°", "60°", "90°"],
                  "options_hi": ["30°", "45°", "60°", "90°"],
                  "answer_en": "30°",
                  "answer_hi": "30°",
                  "attempted": false
                },
                {
                  "num": 24,
                  "question_en": "The volume of a cuboid whose dimensions are in the ratio 1:2:3 and total surface area is 88 cm² is:",
                  "question_hi": "एक घनाभ का आयतन जिसकी विमाएँ 1:2:3 के अनुपात में हैं और कुल पृष्ठीय क्षेत्रफल 88 सेमी² है, वह है:",
                  "options_en": ["24 cm³", "48 cm³", "64 cm³", "96 cm³"],
                  "options_hi": ["24 सेमी³", "48 सेमी³", "64 सेमी³", "96 सेमी³"],
                  "answer_en": "48 cm³",
                  "answer_hi": "48 सेमी³",
                  "attempted": false
                },
                {
                  "num": 25,
                  "question_en": "The value of (1 - sin²θ)(1 + tan²θ) is:",
                  "question_hi": "(1 - sin²θ)(1 + tan²θ) का मान है:",
                  "options_en": ["0", "1", "sinθ", "cosθ"],
                  "options_hi": ["0", "1", "sinθ", "cosθ"],
                  "answer_en": "1",
                  "answer_hi": "1",
                  "attempted": false
                },
                {
                  "num": 26,
                  "question_en": "The height of a cone whose volume is 1232 cm³ and radius 7 cm is:",
                  "question_hi": "एक शंकु की ऊँचाई जिसका आयतन 1232 सेमी³ और त्रिज्या 7 सेमी है, वह है:",
                  "options_en": ["12 cm", "18 cm", "24 cm", "36 cm"],
                  "options_hi": ["12 सेमी", "18 सेमी", "24 सेमी", "36 सेमी"],
                  "answer_en": "24 cm",
                  "answer_hi": "24 सेमी",
                  "attempted": false
                },
                {
                  "num": 27,
                  "question_en": "The value of tan²θ - sec²θ is:",
                  "question_hi": "tan²θ - sec²θ का मान है:",
                  "options_en": ["0", "1", "-1", "2"],
                  "options_hi": ["0", "1", "-1", "2"],
                  "answer_en": "-1",
                  "answer_hi": "-1",
                  "attempted": false
                },
                {
                  "num": 28,
                  "question_en": "The diameter of a sphere whose surface area is 154 cm² is:",
                  "question_hi": "एक गोले का व्यास जिसका पृष्ठीय क्षेत्रफल 154 सेमी² है, वह है:",
                  "options_en": ["3.5 cm", "7 cm", "14 cm", "21 cm"],
                  "options_hi": ["3.5 सेमी", "7 सेमी", "14 सेमी", "21 सेमी"],
                  "answer_en": "7 cm",
                  "answer_hi": "7 सेमी",
                  "attempted": false
                },
                {
                  "num": 29,
                  "question_en": "If sinA = cosA, then the value of A is:",
                  "question_hi": "यदि sinA = cosA, तो A का मान है:",
                  "options_en": ["30°", "45°", "60°", "90°"],
                  "options_hi": ["30°", "45°", "60°", "90°"],
                  "answer_en": "45°",
                  "answer_hi": "45°",
                  "attempted": false
                },
                {
                  "num": 30,
                  "question_en": "The volume of a cylindrical pipe with length 14 cm and external and internal radii 4 cm and 3 cm respectively is:",
                  "question_hi": "एक बेलनाकार पाइप का आयतन जिसकी लंबाई 14 सेमी और बाह्य तथा आंतरिक त्रिज्याएँ क्रमशः 4 सेमी और 3 सेमी हैं, वह है:",
                  "options_en": ["44π cm³", "154π cm³", "176π cm³", "616π cm³"],
                  "options_hi": ["44π सेमी³", "154π सेमी³", "176π सेमी³", "616π सेमी³"],
                  "answer_en": "154π cm³",
                  "answer_hi": "154π सेमी³",
                  "attempted": false
                },
                {
                  "num": 31,
                  "question_en": "The value of (sinθ + cosecθ)² + (cosθ + secθ)² is:",
                  "question_hi": "(sinθ + cosecθ)² + (cosθ + secθ)² का मान है:",
                  "options_en": ["5", "5 + tan²θ + cot²θ", "7", "7 + tan²θ + cot²θ"],
                  "options_hi": ["5", "5 + tan²θ + cot²θ", "7", "7 + tan²θ + cot²θ"],
                  "answer_en": "7 + tan²θ + cot²θ",
                  "answer_hi": "7 + tan²θ + cot²θ",
                  "attempted": false
                },
                {
                  "num": 32,
                  "question_en": "The ratio of the volumes of two spheres is 8:27. The ratio of their surface areas is:",
                  "question_hi": "दो गोलों के आयतनों का अनुपात 8:27 है। उनके पृष्ठीय क्षेत्रफलों का अनुपात है:",
                  "options_en": ["2:3", "4:9", "8:27", "16:81"],
                  "options_hi": ["2:3", "4:9", "8:27", "16:81"],
                  "answer_en": "4:9",
                  "answer_hi": "4:9",
                  "attempted": false
                },
                {
                  "num": 33,
                  "question_en": "If tanθ = 3/4, then the value of sinθ is:",
                  "question_hi": "यदि tanθ = 3/4, तो sinθ का मान है:",
                  "options_en": ["3/5", "4/5", "5/3", "5/4"],
                  "options_hi": ["3/5", "4/5", "5/3", "5/4"],
                  "answer_en": "3/5",
                  "answer_hi": "3/5",
                  "attempted": false
                },
                {
                  "num": 34,
                  "question_en": "The total surface area of a cone with radius 5 cm and slant height 13 cm is:",
                  "question_hi": "5 सेमी त्रिज्या और 13 सेमी तिर्यक ऊँचाई वाले शंकु का कुल पृष्ठीय क्षेत्रफल है:",
                  "options_en": ["65π cm²", "90π cm²", "130π cm²", "195π cm²"],
                  "options_hi": ["65π सेमी²", "90π सेमी²", "130π सेमी²", "195π सेमी²"],
                  "answer_en": "90π cm²",
                  "answer_hi": "90π सेमी²",
                  "attempted": false
                },
                {
                  "num": 35,
                  "question_en": "The value of sin²30° + cos²60° is:",
                  "question_hi": "sin²30° + cos²60° का मान है:",
                  "options_en": ["1/4", "1/2", "3/4", "1"],
                  "options_hi": ["1/4", "1/2", "3/4", "1"],
                  "answer_en": "1/2",
                  "answer_hi": "1/2",
                  "attempted": false
                },
                {
                  "num": 36,
                  "question_en": "The volume of a sphere whose surface area is 616 cm² is:",
                  "question_hi": "एक गोले का आयतन जिसका पृष्ठीय क्षेत्रफल 616 सेमी² है, वह है:",
                  "options_en": ["1437.33 cm³", "1792.66 cm³", "2156 cm³", "4312 cm³"],
                  "options_hi": ["1437.33 सेमी³", "1792.66 सेमी³", "2156 सेमी³", "4312 सेमी³"],
                  "answer_en": "1437.33 cm³",
                  "answer_hi": "1437.33 सेमी³",
                  "attempted": false
                },
                {
                  "num": 37,
                  "question_en": "If secθ = 2, then the value of θ is:",
                  "question_hi": "यदि secθ = 2, तो θ का मान है:",
                  "options_en": ["30°", "45°", "60°", "90°"],
                  "options_hi": ["30°", "45°", "60°", "90°"],
                  "answer_en": "60°",
                  "answer_hi": "60°",
                  "attempted": false
                },
                {
                  "num": 38,
                  "question_en": "The ratio of the volumes of two cubes is 1:8. The ratio of their surface areas is:",
                  "question_hi": "दो घनों के आयतनों का अनुपात 1:8 है। उनके पृष्ठीय क्षेत्रफलों का अनुपात है:",
                  "options_en": ["1:2", "1:4", "1:8", "1:16"],
                  "options_hi": ["1:2", "1:4", "1:8", "1:16"],
                  "answer_en": "1:4",
                  "answer_hi": "1:4",
                  "attempted": false
                },
                {
                  "num": 39,
                  "question_en": "The value of (1 + tanθ + secθ)(1 + cotθ - cosecθ) is:",
                  "question_hi": "(1 + tanθ + secθ)(1 + cotθ - cosecθ) का मान है:",
                  "options_en": ["0", "1", "2", "sinθcosθ"],
                  "options_hi": ["0", "1", "2", "sinθcosθ"],
                  "answer_en": "2",
                  "answer_hi": "2",
                  "attempted": false
                },
                {
                  "num": 40,
                  "question_en": "The height of a cylinder whose volume is 3080 cm³ and radius 7 cm is:",
                  "question_hi": "एक बेलन की ऊँचाई जिसका आयतन 3080 सेमी³ और त्रिज्या 7 सेमी है, वह है:",
                  "options_en": ["10 cm", "15 cm", "20 cm", "25 cm"],
                  "options_hi": ["10 सेमी", "15 सेमी", "20 सेमी", "25 सेमी"],
                  "answer_en": "20 cm",
                  "answer_hi": "20 सेमी",
                  "attempted": false
                },
                {
                  "num": 41,
                  "question_en": "If cosecθ = 2/√3, then the value of θ is:",
                  "question_hi": "यदि cosecθ = 2/√3, तो θ का मान है:",
                  "options_en": ["30°", "45°", "60°", "90°"],
                  "options_hi": ["30°", "45°", "60°", "90°"],
                  "answer_en": "60°",
                  "answer_hi": "60°",
                  "attempted": false
                },
                {
                  "num": 42,
                  "question_en": "The volume of a hemisphere with radius 21 cm is:",
                  "question_hi": "21 सेमी त्रिज्या वाले अर्धगोले का आयतन है:",
                  "options_en": ["882π cm³", "1764π cm³", "2646π cm³", "3704π cm³"],
                  "options_hi": ["882π सेमी³", "1764π सेमी³", "2646π सेमी³", "3704π सेमी³"],
                  "answer_en": "882π cm³",
                  "answer_hi": "882π सेमी³",
                  "attempted": false
                },
                {
                  "num": 43,
                  "question_en": "The value of sin(45°+θ) - cos(45°-θ) is:",
                  "question_hi": "sin(45°+θ) - cos(45°-θ) का मान है:",
                  "options_en": ["0", "1", "2sinθ", "2cosθ"],
                  "options_hi": ["0", "1", "2sinθ", "2cosθ"],
                  "answer_en": "0",
                  "answer_hi": "0",
                  "attempted": false
                },
                {
                  "num": 44,
                  "question_en": "The total surface area of a cuboid with dimensions 10 cm × 8 cm × 5 cm is:",
                  "question_hi": "10 सेमी × 8 सेमी × 5 सेमी विमाओं वाले घनाभ का कुल पृष्ठीय क्षेत्रफल है:",
                  "options_en": ["200 cm²", "300 cm²", "340 cm²", "400 cm²"],
                  "options_hi": ["200 सेमी²", "300 सेमी²", "340 सेमी²", "400 सेमी²"],
                  "answer_en": "340 cm²",
                  "answer_hi": "340 सेमी²",
                  "attempted": false
                },
                {
                  "num": 45,
                  "question_en": "If sinθ = cosθ, then the value of tanθ is:",
                  "question_hi": "यदि sinθ = cosθ, तो tanθ का मान है:",
                  "options_en": ["0", "1", "√3", "undefined"],
                  "options_hi": ["0", "1", "√3", "अपरिभाषित"],
                  "answer_en": "1",
                  "answer_hi": "1",
                  "attempted": false
                },
                {
                  "num": 46,
                  "question_en": "The curved surface area of a cone with radius 7 cm and slant height 25 cm is:",
                  "question_hi": "7 सेमी त्रिज्या और 25 सेमी तिर्यक ऊँचाई वाले शंकु का वक्र पृष्ठीय क्षेत्रफल है:",
                  "options_en": ["175π cm²", "350π cm²", "525π cm²", "700π cm²"],
                  "options_hi": ["175π सेमी²", "350π सेमी²", "525π सेमी²", "700π सेमी²"],
                  "answer_en": "175π cm²",
                  "answer_hi": "175π सेमी²",
                  "attempted": false
                },
                {
                  "num": 47,
                  "question_en": "The value of tan1°tan2°tan3°...tan89° is:",
                  "question_hi": "tan1°tan2°tan3°...tan89° का मान है:",
                  "options_en": ["0", "1", "√3", "undefined"],
                  "options_hi": ["0", "1", "√3", "अपरिभाषित"],
                  "answer_en": "1",
                  "answer_hi": "1",
                  "attempted": false
                },
                {
                  "num": 48,
                  "question_en": "The volume of a cube whose surface area is 150 cm² is:",
                  "question_hi": "एक घन का आयतन जिसका पृष्ठीय क्षेत्रफल 150 सेमी² है, वह है:",
                  "options_en": ["25 cm³", "125 cm³", "225 cm³", "625 cm³"],
                  "options_hi": ["25 सेमी³", "125 सेमी³", "225 सेमी³", "625 सेमी³"],
                  "answer_en": "125 cm³",
                  "answer_hi": "125 सेमी³",
                  "attempted": false
                },
                {
                  "num": 49,
                  "question_en": "If secθ + tanθ = 4, then the value of secθ - tanθ is:",
                  "question_hi": "यदि secθ + tanθ = 4, तो secθ - tanθ का मान है:",
                  "options_en": ["1/4", "1/2", "1", "2"],
                  "options_hi": ["1/4", "1/2", "1", "2"],
                  "answer_en": "1/4",
                  "answer_hi": "1/4",
                  "attempted": false
                },
                {
                  "num": 50,
                  "question_en": "The total surface area of a hemisphere with radius 10.5 cm is:",
                  "question_hi": "10.5 सेमी त्रिज्या वाले अर्धगोले का कुल पृष्ठीय क्षेत्रफल है:",
                  "options_en": ["346.5 cm²", "693 cm²", "1039.5 cm²", "1386 cm²"],
                  "options_hi": ["346.5 सेमी²", "693 सेमी²", "1039.5 सेमी²", "1386 सेमी²"],
                  "answer_en": "1039.5 cm²",
                  "answer_hi": "1039.5 सेमी²",
                  "attempted": false
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
