
const questions = [
        
        
                {
                  "num": 1,
                  "question_en": "The length of the tangent from a point P to a circle of radius 6 cm is 8 cm. The distance of P from the center of the circle is:",
                  "question_hi": "6 सेमी त्रिज्या वाले वृत्त के बाहर एक बिंदु P से खींची गई स्पर्श रेखा की लंबाई 8 सेमी है। वृत्त के केंद्र से P की दूरी है:",
                  "options_en": ["10 cm", "12 cm", "14 cm", "16 cm"],
                  "options_hi": ["10 सेमी", "12 सेमी", "14 सेमी", "16 सेमी"],
                  "answer_en": "10 cm",
                  "answer_hi": "10 सेमी",
                  "attempted": false
                },
                {
                  "num": 2,
                  "question_en": "In two similar triangles, the ratio of their corresponding sides is 3:5. The ratio of their areas is:",
                  "question_hi": "दो समरूप त्रिभुजों में, उनकी संगत भुजाओं का अनुपात 3:5 है। उनके क्षेत्रफलों का अनुपात है:",
                  "options_en": ["3:5", "6:10", "9:25", "27:125"],
                  "options_hi": ["3:5", "6:10", "9:25", "27:125"],
                  "answer_en": "9:25",
                  "answer_hi": "9:25",
                  "attempted": false
                },
                {
                  "num": 3,
                  "question_en": "The angle between a tangent to a circle and the radius drawn at the point of contact is:",
                  "question_hi": "एक वृत्त की स्पर्श रेखा और स्पर्श बिंदु पर खींची गई त्रिज्या के बीच का कोण है:",
                  "options_en": ["30°", "45°", "60°", "90°"],
                  "options_hi": ["30°", "45°", "60°", "90°"],
                  "answer_en": "90°",
                  "answer_hi": "90°",
                  "attempted": false
                },
                {
                  "num": 4,
                  "question_en": "If two circles touch externally, the number of common tangents is:",
                  "question_hi": "यदि दो वृत्त बाह्य रूप से स्पर्श करते हैं, तो उभयनिष्ठ स्पर्श रेखाओं की संख्या है:",
                  "options_en": ["1", "2", "3", "4"],
                  "options_hi": ["1", "2", "3", "4"],
                  "answer_en": "3",
                  "answer_hi": "3",
                  "attempted": false
                },
                {
                  "num": 5,
                  "question_en": "The length of the tangent drawn from a point 10 cm away from the center of a circle of radius 6 cm is:",
                  "question_hi": "6 सेमी त्रिज्या वाले वृत्त के केंद्र से 10 सेमी दूर एक बिंदु से खींची गई स्पर्श रेखा की लंबाई है:",
                  "options_en": ["4 cm", "6 cm", "8 cm", "10 cm"],
                  "options_hi": ["4 सेमी", "6 सेमी", "8 सेमी", "10 सेमी"],
                  "answer_en": "8 cm",
                  "answer_hi": "8 सेमी",
                  "attempted": false
                },
                {
                  "num": 6,
                  "question_en": "In ΔABC and ΔDEF, if ∠A = ∠D and ∠B = ∠E, then the two triangles are similar by:",
                  "question_hi": "ΔABC और ΔDEF में, यदि ∠A = ∠D और ∠B = ∠E, तो दोनों त्रिभुज किसके द्वारा समरूप हैं?",
                  "options_en": ["AAA criterion", "SAS criterion", "SSS criterion", "RHS criterion"],
                  "options_hi": ["AAA मानदंड", "SAS मानदंड", "SSS मानदंड", "RHS मानदंड"],
                  "answer_en": "AAA criterion",
                  "answer_hi": "AAA मानदंड",
                  "attempted": false
                },
                {
                  "num": 7,
                  "question_en": "The length of the tangent from a point 13 cm away from the center of a circle of radius 5 cm is:",
                  "question_hi": "5 सेमी त्रिज्या वाले वृत्त के केंद्र से 13 सेमी दूर एक बिंदु से खींची गई स्पर्श रेखा की लंबाई है:",
                  "options_en": ["8 cm", "10 cm", "12 cm", "14 cm"],
                  "options_hi": ["8 सेमी", "10 सेमी", "12 सेमी", "14 सेमी"],
                  "answer_en": "12 cm",
                  "answer_hi": "12 सेमी",
                  "attempted": false
                },
                {
                  "num": 8,
                  "question_en": "If two chords AB and CD of a circle intersect at point P inside the circle, then:",
                  "question_hi": "यदि एक वृत्त की दो जीवाएँ AB और CD वृत्त के अंदर बिंदु P पर प्रतिच्छेद करती हैं, तो:",
                  "options_en": ["AP × BP = CP × DP", "AP × CP = BP × DP", "AP × DP = BP × CP", "AP × BP × CP = DP"],
                  "options_hi": ["AP × BP = CP × DP", "AP × CP = BP × DP", "AP × DP = BP × CP", "AP × BP × CP = DP"],
                  "answer_en": "AP × BP = CP × DP",
                  "answer_hi": "AP × BP = CP × DP",
                  "attempted": false
                },
                {
                  "num": 9,
                  "question_en": "The ratio of the areas of two similar triangles is 16:25. The ratio of their corresponding sides is:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 16:25 है। उनकी संगत भुजाओं का अनुपात है:",
                  "options_en": ["4:5", "5:4", "16:25", "25:16"],
                  "options_hi": ["4:5", "5:4", "16:25", "25:16"],
                  "answer_en": "4:5",
                  "answer_hi": "4:5",
                  "attempted": false
                },
                {
                  "num": 10,
                  "question_en": "In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides. This is known as:",
                  "question_hi": "एक समकोण त्रिभुज में, कर्ण का वर्ग अन्य दो भुजाओं के वर्गों के योग के बराबर होता है। इसे कहा जाता है:",
                  "options_en": ["Pythagoras theorem", "Thales theorem", "Basic proportionality theorem", "Mid-point theorem"],
                  "options_hi": ["पाइथागोरस प्रमेय", "थेल्स प्रमेय", "मूल समानुपातिकता प्रमेय", "मध्य-बिंदु प्रमेय"],
                  "answer_en": "Pythagoras theorem",
                  "answer_hi": "पाइथागोरस प्रमेय",
                  "attempted": false
                },
                {
                  "num": 11,
                  "question_en": "The angle subtended by an arc at the center is ________ the angle subtended by it at any point on the remaining part of the circle.",
                  "question_hi": "एक चाप द्वारा केंद्र पर अंतरित कोण, वृत्त के शेष भाग पर किसी बिंदु पर अंतरित कोण से ________ होता है।",
                  "options_en": ["equal to", "half", "twice", "four times"],
                  "options_hi": ["बराबर", "आधा", "दोगुना", "चार गुना"],
                  "answer_en": "twice",
                  "answer_hi": "दोगुना",
                  "attempted": false
                },
                {
                  "num": 12,
                  "question_en": "The line drawn from the center of a circle perpendicular to a chord ________ the chord.",
                  "question_hi": "एक वृत्त के केंद्र से एक जीवा पर लंबवत खींची गई रेखा जीवा को ________ करती है।",
                  "options_en": ["bisects", "trisects", "quadrisects", "does not intersect"],
                  "options_hi": ["समद्विभाजित करती है", "त्रिभाजित करती है", "चतुर्भाजित करती है", "प्रतिच्छेद नहीं करती"],
                  "answer_en": "bisects",
                  "answer_hi": "समद्विभाजित करती है",
                  "attempted": false
                },
                {
                  "num": 13,
                  "question_en": "If two circles touch internally, the number of common tangents is:",
                  "question_hi": "यदि दो वृत्त आंतरिक रूप से स्पर्श करते हैं, तो उभयनिष्ठ स्पर्श रेखाओं की संख्या है:",
                  "options_en": ["0", "1", "2", "3"],
                  "options_hi": ["0", "1", "2", "3"],
                  "answer_en": "1",
                  "answer_hi": "1",
                  "attempted": false
                },
                {
                  "num": 14,
                  "question_en": "The angle in a semicircle is:",
                  "question_hi": "अर्धवृत्त में कोण होता है:",
                  "options_en": ["acute", "obtuse", "right", "straight"],
                  "options_hi": ["न्यून", "अधिक", "समकोण", "सीधा"],
                  "answer_en": "right",
                  "answer_hi": "समकोण",
                  "attempted": false
                },
                {
                  "num": 15,
                  "question_en": "The opposite angles of a cyclic quadrilateral are:",
                  "question_hi": "एक चक्रीय चतुर्भुज के सम्मुख कोण होते हैं:",
                  "options_en": ["complementary", "supplementary", "equal", "none of these"],
                  "options_hi": ["पूरक", "संपूरक", "बराबर", "इनमें से कोई नहीं"],
                  "answer_en": "supplementary",
                  "answer_hi": "संपूरक",
                  "attempted": false
                },
                {
                  "num": 16,
                  "question_en": "The line segment joining the midpoints of two sides of a triangle is parallel to the third side and ________ of it.",
                  "question_hi": "एक त्रिभुज की दो भुजाओं के मध्यबिंदुओं को मिलाने वाला रेखाखंड तीसरी भुजा के समांतर होता है और उसका ________ होता है।",
                  "options_en": ["half", "one-third", "one-fourth", "equal"],
                  "options_hi": ["आधा", "एक-तिहाई", "एक-चौथाई", "बराबर"],
                  "answer_en": "half",
                  "answer_hi": "आधा",
                  "attempted": false
                },
                {
                  "num": 17,
                  "question_en": "The point of intersection of the perpendicular bisectors of the sides of a triangle is called its:",
                  "question_hi": "एक त्रिभुज की भुजाओं के लंब समद्विभाजकों का प्रतिच्छेदन बिंदु कहलाता है:",
                  "options_en": ["centroid", "incenter", "circumcenter", "orthocenter"],
                  "options_hi": ["केंद्रक", "अंतःकेंद्र", "परिकेंद्र", "लंबकेंद्र"],
                  "answer_en": "circumcenter",
                  "answer_hi": "परिकेंद्र",
                  "attempted": false
                },
                {
                  "num": 18,
                  "question_en": "The point of intersection of the medians of a triangle is called its:",
                  "question_hi": "एक त्रिभुज की माध्यिकाओं का प्रतिच्छेदन बिंदु कहलाता है:",
                  "options_en": ["centroid", "incenter", "circumcenter", "orthocenter"],
                  "options_hi": ["केंद्रक", "अंतःकेंद्र", "परिकेंद्र", "लंबकेंद्र"],
                  "answer_en": "centroid",
                  "answer_hi": "केंद्रक",
                  "attempted": false
                },
                {
                  "num": 19,
                  "question_en": "The point of intersection of the altitudes of a triangle is called its:",
                  "question_hi": "एक त्रिभुज की शीर्षलंबों का प्रतिच्छेदन बिंदु कहलाता है:",
                  "options_en": ["centroid", "incenter", "circumcenter", "orthocenter"],
                  "options_hi": ["केंद्रक", "अंतःकेंद्र", "परिकेंद्र", "लंबकेंद्र"],
                  "answer_en": "orthocenter",
                  "answer_hi": "लंबकेंद्र",
                  "attempted": false
                },
                {
                  "num": 20,
                  "question_en": "The point of intersection of the angle bisectors of a triangle is called its:",
                  "question_hi": "एक त्रिभुज के कोण समद्विभाजकों का प्रतिच्छेदन बिंदु कहलाता है:",
                  "options_en": ["centroid", "incenter", "circumcenter", "orthocenter"],
                  "options_hi": ["केंद्रक", "अंतःकेंद्र", "परिकेंद्र", "लंबकेंद्र"],
                  "answer_en": "incenter",
                  "answer_hi": "अंतःकेंद्र",
                  "attempted": false
                },
                {
                  "num": 21,
                  "question_en": "The construction of a triangle with sides 5 cm, 6 cm, and 7 cm is possible because:",
                  "question_hi": "5 सेमी, 6 सेमी और 7 सेमी भुजाओं वाले त्रिभुज की रचना संभव है क्योंकि:",
                  "options_en": ["Sum of any two sides > third side", "Difference of any two sides < third side", "Both (a) and (b)", "None of these"],
                  "options_hi": ["किन्हीं दो भुजाओं का योग > तीसरी भुजा", "किन्हीं दो भुजाओं का अंतर < तीसरी भुजा", "दोनों (a) और (b)", "इनमें से कोई नहीं"],
                  "answer_en": "Both (a) and (b)",
                  "answer_hi": "दोनों (a) और (b)",
                  "attempted": false
                },
                {
                  "num": 22,
                  "question_en": "The construction of a triangle with sides 2 cm, 3 cm, and 6 cm is not possible because:",
                  "question_hi": "2 सेमी, 3 सेमी और 6 सेमी भुजाओं वाले त्रिभुज की रचना संभव नहीं है क्योंकि:",
                  "options_en": ["2 + 3 < 6", "3 + 6 < 2", "2 + 6 < 3", "All of these"],
                  "options_hi": ["2 + 3 < 6", "3 + 6 < 2", "2 + 6 < 3", "ये सभी"],
                  "answer_en": "2 + 3 < 6",
                  "answer_hi": "2 + 3 < 6",
                  "attempted": false
                },
                {
                  "num": 23,
                  "question_en": "To construct a triangle similar to a given triangle with scale factor 2/3, we:",
                  "question_hi": "किसी दिए गए त्रिभुज के समरूप त्रिभुज की रचना स्केल फैक्टर 2/3 के साथ करने के लिए, हम:",
                  "options_en": ["Multiply each side by 2/3", "Divide each side by 2/3", "Add 2/3 to each side", "Subtract 2/3 from each side"],
                  "options_hi": ["प्रत्येक भुजा को 2/3 से गुणा करते हैं", "प्रत्येक भुजा को 2/3 से भाग देते हैं", "प्रत्येक भुजा में 2/3 जोड़ते हैं", "प्रत्येक भुजा से 2/3 घटाते हैं"],
                  "answer_en": "Multiply each side by 2/3",
                  "answer_hi": "प्रत्येक भुजा को 2/3 से गुणा करते हैं",
                  "attempted": false
                },
                {
                  "num": 24,
                  "question_en": "The ratio of the areas of two similar triangles is equal to the ratio of the squares of their corresponding:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात उनकी संगत ________ के वर्गों के अनुपात के बराबर होता है।",
                  "options_en": ["sides", "altitudes", "medians", "all of these"],
                  "options_hi": ["भुजाओं", "शीर्षलंबों", "माध्यिकाओं", "ये सभी"],
                  "answer_en": "all of these",
                  "answer_hi": "ये सभी",
                  "attempted": false
                },
                {
                  "num": 25,
                  "question_en": "If the ratio of corresponding sides of two similar triangles is 4:9, then the ratio of their areas is:",
                  "question_hi": "यदि दो समरूप त्रिभुजों की संगत भुजाओं का अनुपात 4:9 है, तो उनके क्षेत्रफलों का अनुपात है:",
                  "options_en": ["2:3", "4:9", "16:81", "64:729"],
                  "options_hi": ["2:3", "4:9", "16:81", "64:729"],
                  "answer_en": "16:81",
                  "answer_hi": "16:81",
                  "attempted": false
                },
                {
                  "num": 26,
                  "question_en": "In the figure, if DE || BC, then the value of x is:",
                  "question_hi": "आकृति में, यदि DE || BC, तो x का मान है:",
                  "options_en": ["2", "3", "4", "5"],
                  "options_hi": ["2", "3", "4", "5"],
                  "answer_en": "3",
                  "answer_hi": "3",
                  "attempted": false
                },
                {
                  "num": 27,
                  "question_en": "The ratio of the areas of two similar triangles is 9:16. The ratio of their corresponding heights is:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 9:16 है। उनकी संगत ऊँचाइयों का अनुपात है:",
                  "options_en": ["3:4", "4:3", "9:16", "16:9"],
                  "options_hi": ["3:4", "4:3", "9:16", "16:9"],
                  "answer_en": "3:4",
                  "answer_hi": "3:4",
                  "attempted": false
                },
                {
                  "num": 28,
                  "question_en": "In the figure, if PQ || BC, then the length of AQ is:",
                  "question_hi": "आकृति में, यदि PQ || BC, तो AQ की लंबाई है:",
                  "options_en": ["2 cm", "3 cm", "4 cm", "5 cm"],
                  "options_hi": ["2 सेमी", "3 सेमी", "4 सेमी", "5 सेमी"],
                  "answer_en": "3 cm",
                  "answer_hi": "3 सेमी",
                  "attempted": false
                },
                {
                  "num": 29,
                  "question_en": "The ratio of the areas of two similar triangles is 25:36. The ratio of their corresponding medians is:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 25:36 है। उनकी संगत माध्यिकाओं का अनुपात है:",
                  "options_en": ["5:6", "6:5", "25:36", "36:25"],
                  "options_hi": ["5:6", "6:5", "25:36", "36:25"],
                  "answer_en": "5:6",
                  "answer_hi": "5:6",
                  "attempted": false
                },
                {
                  "num": 30,
                  "question_en": "In the figure, if AD is the angle bisector of ∠BAC, then the value of x is:",
                  "question_hi": "आकृति में, यदि AD, ∠BAC का कोण समद्विभाजक है, तो x का मान है:",
                  "options_en": ["2", "3", "4", "5"],
                  "options_hi": ["2", "3", "4", "5"],
                  "answer_en": "3",
                  "answer_hi": "3",
                  "attempted": false
                },
                {
                  "num": 31,
                  "question_en": "The ratio of the perimeters of two similar triangles is equal to the ratio of their corresponding:",
                  "question_hi": "दो समरूप त्रिभुजों के परिमापों का अनुपात उनकी संगत ________ के अनुपात के बराबर होता है।",
                  "options_en": ["sides", "areas", "heights", "medians"],
                  "options_hi": ["भुजाओं", "क्षेत्रफलों", "ऊँचाइयों", "माध्यिकाओं"],
                  "answer_en": "sides",
                  "answer_hi": "भुजाओं",
                  "attempted": false
                },
                {
                  "num": 32,
                  "question_en": "In the figure, if DE || BC and AD = 3 cm, DB = 4 cm, AE = 4.5 cm, then the length of EC is:",
                  "question_hi": "आकृति में, यदि DE || BC और AD = 3 सेमी, DB = 4 सेमी, AE = 4.5 सेमी, तो EC की लंबाई है:",
                  "options_en": ["3 cm", "4 cm", "5 cm", "6 cm"],
                  "options_hi": ["3 सेमी", "4 सेमी", "5 सेमी", "6 सेमी"],
                  "answer_en": "6 cm",
                  "answer_hi": "6 सेमी",
                  "attempted": false
                },
                {
                  "num": 33,
                  "question_en": "The ratio of the areas of two similar triangles is 1:4. The ratio of their corresponding sides is:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 1:4 है। उनकी संगत भुजाओं का अनुपात है:",
                  "options_en": ["1:2", "1:4", "1:8", "1:16"],
                  "options_hi": ["1:2", "1:4", "1:8", "1:16"],
                  "answer_en": "1:2",
                  "answer_hi": "1:2",
                  "attempted": false
                },
                {
                  "num": 34,
                  "question_en": "In the figure, if ΔABC ~ ΔDEF, then the measure of ∠E is:",
                  "question_hi": "आकृति में, यदि ΔABC ~ ΔDEF, तो ∠E का माप है:",
                  "options_en": ["50°", "60°", "70°", "80°"],
                  "options_hi": ["50°", "60°", "70°", "80°"],
                  "answer_en": "60°",
                  "answer_hi": "60°",
                  "attempted": false
                },
                {
                  "num": 35,
                  "question_en": "The ratio of the areas of two similar triangles is 4:9. The ratio of their corresponding sides is:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 4:9 है। उनकी संगत भुजाओं का अनुपात है:",
                  "options_en": ["2:3", "3:2", "4:9", "9:4"],
                  "options_hi": ["2:3", "3:2", "4:9", "9:4"],
                  "answer_en": "2:3",
                  "answer_hi": "2:3",
                  "attempted": false
                },
                {
                  "num": 36,
                  "question_en": "In the figure, if ΔABC ~ ΔPQR, then the value of x is:",
                  "question_hi": "आकृति में, यदि ΔABC ~ ΔPQR, तो x का मान है:",
                  "options_en": ["4", "5", "6", "7"],
                  "options_hi": ["4", "5", "6", "7"],
                  "answer_en": "5",
                  "answer_hi": "5",
                  "attempted": false
                },
                {
                  "num": 37,
                  "question_en": "The ratio of the areas of two similar triangles is 16:25. The ratio of their corresponding perimeters is:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 16:25 है। उनके संगत परिमापों का अनुपात है:",
                  "options_en": ["4:5", "5:4", "16:25", "25:16"],
                  "options_hi": ["4:5", "5:4", "16:25", "25:16"],
                  "answer_en": "4:5",
                  "answer_hi": "4:5",
                  "attempted": false
                },
                {
                  "num": 38,
                  "question_en": "In the figure, if ΔABC ~ ΔDEF, then the length of DF is:",
                  "question_hi": "आकृति में, यदि ΔABC ~ ΔDEF, तो DF की लंबाई है:",
                  "options_en": ["6 cm", "7 cm", "8 cm", "9 cm"],
                  "options_hi": ["6 सेमी", "7 सेमी", "8 सेमी", "9 सेमी"],
                  "answer_en": "8 cm",
                  "answer_hi": "8 सेमी",
                  "attempted": false
                },
                {
                  "num": 39,
                  "question_en": "The ratio of the areas of two similar triangles is 9:25. The ratio of their corresponding altitudes is:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 9:25 है। उनकी संगत ऊँचाइयों का अनुपात है:",
                  "options_en": ["3:5", "5:3", "9:25", "25:9"],
                  "options_hi": ["3:5", "5:3", "9:25", "25:9"],
                  "answer_en": "3:5",
                  "answer_hi": "3:5",
                  "attempted": false
                },
                {
                  "num": 40,
                  "question_en": "In the figure, if ΔABC ~ ΔDEF, then the measure of ∠F is:",
                  "question_hi": "आकृति में, यदि ΔABC ~ ΔDEF, तो ∠F का माप है:",
                  "options_en": ["40°", "50°", "60°", "70°"],
                  "options_hi": ["40°", "50°", "60°", "70°"],
                  "answer_en": "70°",
                  "answer_hi": "70°",
                  "attempted": false
                },
                {
                  "num": 41,
                  "question_en": "The ratio of the areas of two similar triangles is 1:9. The ratio of their corresponding sides is:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 1:9 है। उनकी संगत भुजाओं का अनुपात है:",
                  "options_en": ["1:3", "1:9", "1:27", "1:81"],
                  "options_hi": ["1:3", "1:9", "1:27", "1:81"],
                  "answer_en": "1:3",
                  "answer_hi": "1:3",
                  "attempted": false
                },
                {
                  "num": 42,
                  "question_en": "In the figure, if ΔABC ~ ΔPQR, then the value of y is:",
                  "question_hi": "आकृति में, यदि ΔABC ~ ΔPQR, तो y का मान है:",
                  "options_en": ["4", "5", "6", "7"],
                  "options_hi": ["4", "5", "6", "7"],
                  "answer_en": "6",
                  "answer_hi": "6",
                  "attempted": false
                },
                {
                  "num": 43,
                  "question_en": "The ratio of the areas of two similar triangles is 25:36. The ratio of their corresponding medians is:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 25:36 है। उनकी संगत माध्यिकाओं का अनुपात है:",
                  "options_en": ["5:6", "6:5", "25:36", "36:25"],
                  "options_hi": ["5:6", "6:5", "25:36", "36:25"],
                  "answer_en": "5:6",
                  "answer_hi": "5:6",
                  "attempted": false
                },
                {
                  "num": 44,
                  "question_en": "In the figure, if ΔABC ~ ΔDEF, then the length of EF is:",
                  "question_hi": "आकृति में, यदि ΔABC ~ ΔDEF, तो EF की लंबाई है:",
                  "options_en": ["6 cm", "7 cm", "8 cm", "9 cm"],
                  "options_hi": ["6 सेमी", "7 सेमी", "8 सेमी", "9 सेमी"],
                  "answer_en": "9 cm",
                  "answer_hi": "9 सेमी",
                  "attempted": false
                },
                {
                  "num": 45,
                  "question_en": "The ratio of the areas of two similar triangles is 4:25. The ratio of their corresponding altitudes is:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 4:25 है। उनकी संगत ऊँचाइयों का अनुपात है:",
                  "options_en": ["2:5", "5:2", "4:25", "25:4"],
                  "options_hi": ["2:5", "5:2", "4:25", "25:4"],
                  "answer_en": "2:5",
                  "answer_hi": "2:5",
                  "attempted": false
                },
                {
                  "num": 46,
                  "question_en": "In the figure, if ΔABC ~ ΔPQR, then the measure of ∠R is:",
                  "question_hi": "आकृति में, यदि ΔABC ~ ΔPQR, तो ∠R का माप है:",
                  "options_en": ["40°", "50°", "60°", "70°"],
                  "options_hi": ["40°", "50°", "60°", "70°"],
                  "answer_en": "60°",
                  "answer_hi": "60°",
                  "attempted": false
                },
                {
                  "num": 47,
                  "question_en": "The ratio of the areas of two similar triangles is 9:16. The ratio of their corresponding sides is:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 9:16 है। उनकी संगत भुजाओं का अनुपात है:",
                  "options_en": ["3:4", "4:3", "9:16", "16:9"],
                  "options_hi": ["3:4", "4:3", "9:16", "16:9"],
                  "answer_en": "3:4",
                  "answer_hi": "3:4",
                  "attempted": false
                },
                {
                  "num": 48,
                  "question_en": "In the figure, if ΔABC ~ ΔDEF, then the value of x is:",
                  "question_hi": "आकृति में, यदि ΔABC ~ ΔDEF, तो x का मान है:",
                  "options_en": ["4", "5", "6", "7"],
                  "options_hi": ["4", "5", "6", "7"],
                  "answer_en": "5",
                  "answer_hi": "5",
                  "attempted": false
                },
                {
                  "num": 49,
                  "question_en": "The ratio of the areas of two similar triangles is 16:49. The ratio of their corresponding perimeters is:",
                  "question_hi": "दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात 16:49 है। उनके संगत परिमापों का अनुपात है:",
                  "options_en": ["4:7", "7:4", "16:49", "49:16"],
                  "options_hi": ["4:7", "7:4", "16:49", "49:16"],
                  "answer_en": "4:7",
                  "answer_hi": "4:7",
                  "attempted": false
                },
                {
                  "num": 50,
                  "question_en": "In the figure, if ΔABC ~ ΔPQR, then the length of PR is:",
                  "question_hi": "आकृति में, यदि ΔABC ~ ΔPQR, तो PR की लंबाई है:",
                  "options_en": ["6 cm", "7 cm", "8 cm", "9 cm"],
                  "options_hi": ["6 सेमी", "7 सेमी", "8 सेमी", "9 सेमी"],
                  "answer_en": "8 cm",
                  "answer_hi": "8 सेमी",
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
