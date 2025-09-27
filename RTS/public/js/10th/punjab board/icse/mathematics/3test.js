
const questions = [
        
        [
                {
                  "num": 1,
                  "question_en": "What is the solution of the equation \(2x + 3 = 7\)?",
                  "question_hi": "समीकरण \(2x + 3 = 7\) का हल क्या है?",
                  "options_en": ["2", "3", "4", "5"],
                  "options_hi": ["2", "3", "4", "5"],
                  "answer_en": "2",
                  "answer_hi": "2",
                  "attempted": false
                },
                {
                  "num": 2,
                  "question_en": "If \(x = 2\) is a root of the equation \(x^2 - 5x + k = 0\), what is the value of \(k\)?",
                  "question_hi": "यदि \(x = 2\) समीकरण \(x^2 - 5x + k = 0\) का एक मूल है, तो \(k\) का मान क्या है?",
                  "options_en": ["6", "4", "2", "8"],
                  "options_hi": ["6", "4", "2", "8"],
                  "answer_en": "6",
                  "answer_hi": "6",
                  "attempted": false
                },
                {
                  "num": 3,
                  "question_en": "The sum of the first 10 natural numbers is:",
                  "question_hi": "पहली 10 प्राकृतिक संख्याओं का योग है:",
                  "options_en": ["45", "50", "55", "60"],
                  "options_hi": ["45", "50", "55", "60"],
                  "answer_en": "55",
                  "answer_hi": "55",
                  "attempted": false
                },
                {
                  "num": 4,
                  "question_en": "The distance between the points \(A(2, 3)\) and \(B(5, 7)\) is:",
                  "question_hi": "बिंदु \(A(2, 3)\) और \(B(5, 7)\) के बीच की दूरी है:",
                  "options_en": ["5", "6", "7", "8"],
                  "options_hi": ["5", "6", "7", "8"],
                  "answer_en": "5",
                  "answer_hi": "5",
                  "attempted": false
                },
                {
                  "num": 5,
                  "question_en": "The common difference of the AP: 3, 7, 11, 15, ... is:",
                  "question_hi": "समांतर श्रेणी 3, 7, 11, 15, ... का सार्व अंतर है:",
                  "options_en": ["2", "3", "4", "5"],
                  "options_hi": ["2", "3", "4", "5"],
                  "answer_en": "4",
                  "answer_hi": "4",
                  "attempted": false
                },
                {
                  "num": 6,
                  "question_en": "The quadratic equation whose roots are 2 and 3 is:",
                  "question_hi": "द्विघात समीकरण जिसके मूल 2 और 3 हैं, वह है:",
                  "options_en": ["\(x^2 - 5x + 6 = 0\)", "\(x^2 + 5x + 6 = 0\)", "\(x^2 - 6x + 5 = 0\)", "\(x^2 + 6x + 5 = 0\)"],
                  "options_hi": ["\(x^2 - 5x + 6 = 0\)", "\(x^2 + 5x + 6 = 0\)", "\(x^2 - 6x + 5 = 0\)", "\(x^2 + 6x + 5 = 0\)"],
                  "answer_en": "\(x^2 - 5x + 6 = 0\)",
                  "answer_hi": "\(x^2 - 5x + 6 = 0\)",
                  "attempted": false
                },
                {
                  "num": 7,
                  "question_en": "The slope of the line joining the points (1, 2) and (3, 6) is:",
                  "question_hi": "बिंदु (1, 2) और (3, 6) को मिलाने वाली रेखा की ढाल है:",
                  "options_en": ["1", "2", "3", "4"],
                  "options_hi": ["1", "2", "3", "4"],
                  "answer_en": "2",
                  "answer_hi": "2",
                  "attempted": false
                },
                {
                  "num": 8,
                  "question_en": "The 10th term of the AP: 5, 9, 13, 17, ... is:",
                  "question_hi": "समांतर श्रेणी 5, 9, 13, 17, ... का 10वाँ पद है:",
                  "options_en": ["41", "45", "49", "53"],
                  "options_hi": ["41", "45", "49", "53"],
                  "answer_en": "41",
                  "answer_hi": "41",
                  "attempted": false
                },
                {
                  "num": 9,
                  "question_en": "The sum of the roots of the equation \(x^2 - 8x + 15 = 0\) is:",
                  "question_hi": "समीकरण \(x^2 - 8x + 15 = 0\) के मूलों का योग है:",
                  "options_en": ["8", "-8", "15", "-15"],
                  "options_hi": ["8", "-8", "15", "-15"],
                  "answer_en": "8",
                  "answer_hi": "8",
                  "attempted": false
                },
                {
                  "num": 10,
                  "question_en": "The midpoint of the line segment joining (4, 5) and (6, 9) is:",
                  "question_hi": "बिंदु (4, 5) और (6, 9) को मिलाने वाले रेखाखंड का मध्यबिंदु है:",
                  "options_en": ["(5, 7)", "(6, 7)", "(7, 5)", "(7, 6)"],
                  "options_hi": ["(5, 7)", "(6, 7)", "(7, 5)", "(7, 6)"],
                  "answer_en": "(5, 7)",
                  "answer_hi": "(5, 7)",
                  "attempted": false
                },
                {
                  "num": 11,
                  "question_en": "The product of the roots of the equation \(x^2 + 7x + 10 = 0\) is:",
                  "question_hi": "समीकरण \(x^2 + 7x + 10 = 0\) के मूलों का गुणनफल है:",
                  "options_en": ["7", "10", "-7", "-10"],
                  "options_hi": ["7", "10", "-7", "-10"],
                  "answer_en": "10",
                  "answer_hi": "10",
                  "attempted": false
                },
                {
                  "num": 12,
                  "question_en": "The common ratio of the GP: 3, 6, 12, 24, ... is:",
                  "question_hi": "गुणोत्तर श्रेणी 3, 6, 12, 24, ... का सार्व अनुपात है:",
                  "options_en": ["2", "3", "4", "6"],
                  "options_hi": ["2", "3", "4", "6"],
                  "answer_en": "2",
                  "answer_hi": "2",
                  "attempted": false
                },
                {
                  "num": 13,
                  "question_en": "The equation \(3x - 2y = 5\) has:",
                  "question_hi": "समीकरण \(3x - 2y = 5\) के:",
                  "options_en": ["One solution", "Two solutions", "Infinitely many solutions", "No solution"],
                  "options_hi": ["एक हल", "दो हल", "अनंत हल", "कोई हल नहीं"],
                  "answer_en": "Infinitely many solutions",
                  "answer_hi": "अनंत हल",
                  "attempted": false
                },
                {
                  "num": 14,
                  "question_en": "The 5th term of the GP: 2, 6, 18, ... is:",
                  "question_hi": "गुणोत्तर श्रेणी 2, 6, 18, ... का 5वाँ पद है:",
                  "options_en": ["54", "108", "162", "216"],
                  "options_hi": ["54", "108", "162", "216"],
                  "answer_en": "162",
                  "answer_hi": "162",
                  "attempted": false
                },
                {
                  "num": 15,
                  "question_en": "The discriminant of the equation \(x^2 - 4x + 4 = 0\) is:",
                  "question_hi": "समीकरण \(x^2 - 4x + 4 = 0\) का विविक्तकर है:",
                  "options_en": ["0", "4", "8", "16"],
                  "options_hi": ["0", "4", "8", "16"],
                  "answer_en": "0",
                  "answer_hi": "0",
                  "attempted": false
                },
                {
                  "num": 16,
                  "question_en": "The sum of the first 20 terms of the AP: 1, 4, 7, ... is:",
                  "question_hi": "समांतर श्रेणी 1, 4, 7, ... के पहले 20 पदों का योग है:",
                  "options_en": ["590", "600", "610", "620"],
                  "options_hi": ["590", "600", "610", "620"],
                  "answer_en": "590",
                  "answer_hi": "590",
                  "attempted": false
                },
                {
                  "num": 17,
                  "question_en": "The roots of the equation \(x^2 - 9 = 0\) are:",
                  "question_hi": "समीकरण \(x^2 - 9 = 0\) के मूल हैं:",
                  "options_en": ["3 and -3", "9 and -9", "3 only", "9 only"],
                  "options_hi": ["3 और -3", "9 और -9", "केवल 3", "केवल 9"],
                  "answer_en": "3 and -3",
                  "answer_hi": "3 और -3",
                  "attempted": false
                },
                {
                  "num": 18,
                  "question_en": "The equation of the line parallel to the x-axis and passing through (2, 3) is:",
                  "question_hi": "x-अक्ष के समानांतर और बिंदु (2, 3) से गुजरने वाली रेखा का समीकरण है:",
                  "options_en": ["\(y = 2\)", "\(y = 3\)", "\(x = 2\)", "\(x = 3\)"],
                  "options_hi": ["\(y = 2\)", "\(y = 3\)", "\(x = 2\)", "\(x = 3\)"],
                  "answer_en": "\(y = 3\)",
                  "answer_hi": "\(y = 3\)",
                  "attempted": false
                },
                {
                  "num": 19,
                  "question_en": "The sum of the infinite GP: \(1, \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, ...\) is:",
                  "question_hi": "अनंत गुणोत्तर श्रेणी \(1, \frac{1}{2}, \frac{1}{4}, \frac{1}{8}, ...\) का योग है:",
                  "options_en": ["1", "2", "\(\frac{1}{2}\)", "\(\frac{3}{2}\)"],
                  "options_hi": ["1", "2", "\(\frac{1}{2}\)", "\(\frac{3}{2}\)"],
                  "answer_en": "2",
                  "answer_hi": "2",
                  "attempted": false
                },
                {
                  "num": 20,
                  "question_en": "The point of intersection of the lines \(2x + 3y = 5\) and \(3x + 2y = 5\) is:",
                  "question_hi": "रेखाओं \(2x + 3y = 5\) और \(3x + 2y = 5\) का प्रतिच्छेदन बिंदु है:",
                  "options_en": ["(1, 1)", "(2, 2)", "(3, 3)", "(4, 4)"],
                  "options_hi": ["(1, 1)", "(2, 2)", "(3, 3)", "(4, 4)"],
                  "answer_en": "(1, 1)",
                  "answer_hi": "(1, 1)",
                  "attempted": false
                },
                {
                  "num": 21,
                  "question_en": "The sum of the first \(n\) odd natural numbers is:",
                  "question_hi": "पहले \(n\) विषम प्राकृतिक संख्याओं का योग है:",
                  "options_en": ["\(n^2\)", "\(n(n+1)\)", "\(\frac{n(n+1)}{2}\)", "\(2n\)"],
                  "options_hi": ["\(n^2\)", "\(n(n+1)\)", "\(\frac{n(n+1)}{2}\)", "\(2n\)"],
                  "answer_en": "\(n^2\)",
                  "answer_hi": "\(n^2\)",
                  "attempted": false
                },
                {
                  "num": 22,
                  "question_en": "The roots of the equation \(x^2 + x + 1 = 0\) are:",
                  "question_hi": "समीकरण \(x^2 + x + 1 = 0\) के मूल हैं:",
                  "options_en": ["Real and equal", "Real and distinct", "Imaginary", "None of these"],
                  "options_hi": ["वास्तविक और समान", "वास्तविक और भिन्न", "काल्पनिक", "इनमें से कोई नहीं"],
                  "answer_en": "Imaginary",
                  "answer_hi": "काल्पनिक",
                  "attempted": false
                },
                {
                  "num": 23,
                  "question_en": "The equation of the line with slope 2 and y-intercept 3 is:",
                  "question_hi": "ढाल 2 और y-अंत:खंड 3 वाली रेखा का समीकरण है:",
                  "options_en": ["\(y = 2x + 3\)", "\(y = 3x + 2\)", "\(2y = x + 3\)", "\(3y = 2x + 1\)"],
                  "options_hi": ["\(y = 2x + 3\)", "\(y = 3x + 2\)", "\(2y = x + 3\)", "\(3y = 2x + 1\)"],
                  "answer_en": "\(y = 2x + 3\)",
                  "answer_hi": "\(y = 2x + 3\)",
                  "attempted": false
                },
                {
                  "num": 24,
                  "question_en": "The 15th term of the AP: 7, 11, 15, 19, ... is:",
                  "question_hi": "समांतर श्रेणी 7, 11, 15, 19, ... का 15वाँ पद है:",
                  "options_en": ["63", "67", "71", "75"],
                  "options_hi": ["63", "67", "71", "75"],
                  "answer_en": "63",
                  "answer_hi": "63",
                  "attempted": false
                },
                {
                  "num": 25,
                  "question_en": "The sum of the series \(1 + 3 + 5 + ... + 19\) is:",
                  "question_hi": "श्रेणी \(1 + 3 + 5 + ... + 19\) का योग है:",
                  "options_en": ["100", "121", "144", "169"],
                  "options_hi": ["100", "121", "144", "169"],
                  "answer_en": "100",
                  "answer_hi": "100",
                  "attempted": false
                },
                {
                  "num": 26,
                  "question_en": "The equation \(x^2 - 2x + 1 = 0\) has:",
                  "question_hi": "समीकरण \(x^2 - 2x + 1 = 0\) के:",
                  "options_en": ["Two distinct real roots", "One real root", "No real roots", "None of these"],
                  "options_hi": ["दो भिन्न वास्तविक मूल", "एक वास्तविक मूल", "कोई वास्तविक मूल नहीं", "इनमें से कोई नहीं"],
                  "answer_en": "One real root",
                  "answer_hi": "एक वास्तविक मूल",
                  "attempted": false
                },
                {
                  "num": 27,
                  "question_en": "The slope of the line \(3x + 4y = 7\) is:",
                  "question_hi": "रेखा \(3x + 4y = 7\) की ढाल है:",
                  "options_en": ["\(\frac{3}{4}\)", "\(-\frac{3}{4}\)", "\(\frac{4}{3}\)", "\(-\frac{4}{3}\)"],
                  "options_hi": ["\(\frac{3}{4}\)", "\(-\frac{3}{4}\)", "\(\frac{4}{3}\)", "\(-\frac{4}{3}\)"],
                  "answer_en": "\(-\frac{3}{4}\)",
                  "answer_hi": "\(-\frac{3}{4}\)",
                  "attempted": false
                },
                {
                  "num": 28,
                  "question_en": "The sum of the first 10 terms of the GP: 2, 4, 8, 16, ... is:",
                  "question_hi": "गुणोत्तर श्रेणी 2, 4, 8, 16, ... के पहले 10 पदों का योग है:",
                  "options_en": ["1022", "1024", "2046", "2048"],
                  "options_hi": ["1022", "1024", "2046", "2048"],
                  "answer_en": "2046",
                  "answer_hi": "2046",
                  "attempted": false
                },
                {
                  "num": 29,
                  "question_en": "The equation of the line passing through (1, 2) and (3, 4) is:",
                  "question_hi": "बिंदु (1, 2) और (3, 4) से गुजरने वाली रेखा का समीकरण है:",
                  "options_en": ["\(y = x + 1\)", "\(y = 2x\)", "\(y = 3x - 1\)", "\(y = 4x - 2\)"],
                  "options_hi": ["\(y = x + 1\)", "\(y = 2x\)", "\(y = 3x - 1\)", "\(y = 4x - 2\)"],
                  "answer_en": "\(y = x + 1\)",
                  "answer_hi": "\(y = x + 1\)",
                  "attempted": false
                },
                {
                  "num": 30,
                  "question_en": "The value of \(k\) for which the equation \(x^2 - kx + 4 = 0\) has equal roots is:",
                  "question_hi": "\(k\) का मान जिसके लिए समीकरण \(x^2 - kx + 4 = 0\) के मूल समान हैं, वह है:",
                  "options_en": ["2", "4", "6", "8"],
                  "options_hi": ["2", "4", "6", "8"],
                  "answer_en": "4",
                  "answer_hi": "4",
                  "attempted": false
                },
                {
                  "num": 31,
                  "question_en": "The sum of the series \(1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + ...\) to infinity is:",
                  "question_hi": "श्रेणी \(1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + ...\) का अनंत तक योग है:",
                  "options_en": ["1", "2", "\(\frac{3}{2}\)", "\(\frac{4}{3}\)"],
                  "options_hi": ["1", "2", "\(\frac{3}{2}\)", "\(\frac{4}{3}\)"],
                  "answer_en": "2",
                  "answer_hi": "2",
                  "attempted": false
                },
                {
                  "num": 32,
                  "question_en": "The distance between the points (0, 0) and (3, 4) is:",
                  "question_hi": "बिंदु (0, 0) और (3, 4) के बीच की दूरी है:",
                  "options_en": ["3", "4", "5", "7"],
                  "options_hi": ["3", "4", "5", "7"],
                  "answer_en": "5",
                  "answer_hi": "5",
                  "attempted": false
                },
                {
                  "num": 33,
                  "question_en": "The common difference of the AP whose general term is \(a_n = 3n + 2\) is:",
                  "question_hi": "समांतर श्रेणी जिसका व्यापक पद \(a_n = 3n + 2\) है, का सार्व अंतर है:",
                  "options_en": ["2", "3", "5", "6"],
                  "options_hi": ["2", "3", "5", "6"],
                  "answer_en": "3",
                  "answer_hi": "3",
                  "attempted": false
                },
                {
                  "num": 34,
                  "question_en": "The roots of the equation \(x^2 - 5x + 6 = 0\) are:",
                  "question_hi": "समीकरण \(x^2 - 5x + 6 = 0\) के मूल हैं:",
                  "options_en": ["2 and 3", "-2 and -3", "1 and 6", "-1 and -6"],
                  "options_hi": ["2 और 3", "-2 और -3", "1 और 6", "-1 और -6"],
                  "answer_en": "2 and 3",
                  "answer_hi": "2 और 3",
                  "attempted": false
                },
                {
                  "num": 35,
                  "question_en": "The equation of the line parallel to \(y = 2x + 3\) and passing through (1, 5) is:",
                  "question_hi": "रेखा \(y = 2x + 3\) के समानांतर और बिंदु (1, 5) से गुजरने वाली रेखा का समीकरण है:",
                  "options_en": ["\(y = 2x + 3\)", "\(y = 2x + 5\)", "\(y = 2x + 7\)", "\(y = 2x + 9\)"],
                  "options_hi": ["\(y = 2x + 3\)", "\(y = 2x + 5\)", "\(y = 2x + 7\)", "\(y = 2x + 9\)"],
                  "answer_en": "\(y = 2x + 3\)",
                  "answer_hi": "\(y = 2x + 3\)",
                  "attempted": false
                },
                {
                  "num": 36,
                  "question_en": "The sum of the first 15 multiples of 8 is:",
                  "question_hi": "8 के पहले 15 गुणजों का योग है:",
                  "options_en": ["960", "920", "880", "840"],
                  "options_hi": ["960", "920", "880", "840"],
                  "answer_en": "960",
                  "answer_hi": "960",
                  "attempted": false
                },
                {
                  "num": 37,
                  "question_en": "The nature of the roots of the equation \(x^2 - 6x + 9 = 0\) is:",
                  "question_hi": "समीकरण \(x^2 - 6x + 9 = 0\) के मूलों की प्रकृति है:",
                  "options_en": ["Real and equal", "Real and distinct", "Imaginary", "None of these"],
                  "options_hi": ["वास्तविक और समान", "वास्तविक और भिन्न", "काल्पनिक", "इनमें से कोई नहीं"],
                  "answer_en": "Real and equal",
                  "answer_hi": "वास्तविक और समान",
                  "attempted": false
                },
                {
                  "num": 38,
                  "question_en": "The equation of the line perpendicular to \(y = 3x + 2\) and passing through (1, 1) is:",
                  "question_hi": "रेखा \(y = 3x + 2\) के लंबवत और बिंदु (1, 1) से गुजरने वाली रेखा का समीकरण है:",
                  "options_en": ["\(y = -\frac{1}{3}x + \frac{4}{3}\)", "\(y = -3x + 4\)", "\(y = \frac{1}{3}x + \frac{2}{3}\)", "\(y = 3x - 2\)"],
                  "options_hi": ["\(y = -\frac{1}{3}x + \frac{4}{3}\)", "\(y = -3x + 4\)", "\(y = \frac{1}{3}x + \frac{2}{3}\)", "\(y = 3x - 2\)"],
                  "answer_en": "\(y = -\frac{1}{3}x + \frac{4}{3}\)",
                  "answer_hi": "\(y = -\frac{1}{3}x + \frac{4}{3}\)",
                  "attempted": false
                },
                {
                  "num": 39,
                  "question_en": "The 8th term of the GP: 5, 10, 20, 40, ... is:",
                  "question_hi": "गुणोत्तर श्रेणी 5, 10, 20, 40, ... का 8वाँ पद है:",
                  "options_en": ["640", "1280", "2560", "5120"],
                  "options_hi": ["640", "1280", "2560", "5120"],
                  "answer_en": "640",
                  "answer_hi": "640",
                  "attempted": false
                },
                {
                  "num": 40,
                  "question_en": "The point which divides the line segment joining (2, 3) and (4, 5) in the ratio 1:1 is:",
                  "question_hi": "वह बिंदु जो बिंदु (2, 3) और (4, 5) को मिलाने वाले रेखाखंड को 1:1 के अनुपात में विभाजित करता है, वह है:",
                  "options_en": ["(3, 4)", "(4, 3)", "(5, 6)", "(6, 5)"],
                  "options_hi": ["(3, 4)", "(4, 3)", "(5, 6)", "(6, 5)"],
                  "answer_en": "(3, 4)",
                  "answer_hi": "(3, 4)",
                  "attempted": false
                },
                {
                  "num": 41,
                  "question_en": "The sum of the series \(1 + 4 + 7 + ... + 25\) is:",
                  "question_hi": "श्रेणी \(1 + 4 + 7 + ... + 25\) का योग है:",
                  "options_en": ["117", "121", "125", "129"],
                  "options_hi": ["117", "121", "125", "129"],
                  "answer_en": "117",
                  "answer_hi": "117",
                  "attempted": false
                },
                {
                  "num": 42,
                  "question_en": "The discriminant of the equation \(x^2 + 3x + 2 = 0\) is:",
                  "question_hi": "समीकरण \(x^2 + 3x + 2 = 0\) का विविक्तकर है:",
                  "options_en": ["1", "2", "3", "4"],
                  "options_hi": ["1", "2", "3", "4"],
                  "answer_en": "1",
                  "answer_hi": "1",
                  "attempted": false
                },
                {
                  "num": 43,
                  "question_en": "The equation of the line with x-intercept 2 and y-intercept 3 is:",
                  "question_hi": "x-अंत:खंड 2 और y-अंत:खंड 3 वाली रेखा का समीकरण है:",
                  "options_en": ["\(3x + 2y = 6\)", "\(2x + 3y = 6\)", "\(3x - 2y = 6\)", "\(2x - 3y = 6\)"],
                  "options_hi": ["\(3x + 2y = 6\)", "\(2x + 3y = 6\)", "\(3x - 2y = 6\)", "\(2x - 3y = 6\)"],
                  "answer_en": "\(3x + 2y = 6\)",
                  "answer_hi": "\(3x + 2y = 6\)",
                  "attempted": false
                },
                {
                  "num": 44,
                  "question_en": "The sum of the first 12 terms of the AP: 10, 6, 2, -2, ... is:",
                  "question_hi": "समांतर श्रेणी 10, 6, 2, -2, ... के पहले 12 पदों का योग है:",
                  "options_en": ["-144", "-120", "-96", "-72"],
                  "options_hi": ["-144", "-120", "-96", "-72"],
                  "answer_en": "-120",
                  "answer_hi": "-120",
                  "attempted": false
                },
                {
                  "num": 45,
                  "question_en": "The roots of the equation \(x^2 + 4x + 5 = 0\) are:",
                  "question_hi": "समीकरण \(x^2 + 4x + 5 = 0\) के मूल हैं:",
                  "options_en": ["Real and equal", "Real and distinct", "Imaginary", "None of these"],
                  "options_hi": ["वास्तविक और समान", "वास्तविक और भिन्न", "काल्पनिक", "इनमें से कोई नहीं"],
                  "answer_en": "Imaginary",
                  "answer_hi": "काल्पनिक",
                  "attempted": false
                },
                {
                  "num": 46,
                  "question_en": "The equation of the line passing through (0, 0) and (1, 1) is:",
                  "question_hi": "बिंदु (0, 0) और (1, 1) से गुजरने वाली रेखा का समीकरण है:",
                  "options_en": ["\(y = x\)", "\(y = -x\)", "\(y = 2x\)", "\(y = \frac{1}{2}x\)"],
                  "options_hi": ["\(y = x\)", "\(y = -x\)", "\(y = 2x\)", "\(y = \frac{1}{2}x\)"],
                  "answer_en": "\(y = x\)",
                  "answer_hi": "\(y = x\)",
                  "attempted": false
                },
                {
                  "num": 47,
                  "question_en": "The 10th term of the GP: 1, -2, 4, -8, ... is:",
                  "question_hi": "गुणोत्तर श्रेणी 1, -2, 4, -8, ... का 10वाँ पद है:",
                  "options_en": ["512", "-512", "1024", "-1024"],
                  "options_hi": ["512", "-512", "1024", "-1024"],
                  "answer_en": "512",
                  "answer_hi": "512",
                  "attempted": false
                },
                {
                  "num": 48,
                  "question_en": "The distance between the points (1, 1) and (4, 5) is:",
                  "question_hi": "बिंदु (1, 1) और (4, 5) के बीच की दूरी है:",
                  "options_en": ["3", "4", "5", "6"],
                  "options_hi": ["3", "4", "5", "6"],
                  "answer_en": "5",
                  "answer_hi": "5",
                  "attempted": false
                },
                {
                  "num": 49,
                  "question_en": "The sum of the first \(n\) even natural numbers is:",
                  "question_hi": "पहले \(n\) सम प्राकृतिक संख्याओं का योग है:",
                  "options_en": ["\(n(n+1)\)", "\(\frac{n(n+1)}{2}\)", "\(n^2\)", "\(2n\)"],
                  "options_hi": ["\(n(n+1)\)", "\(\frac{n(n+1)}{2}\)", "\(n^2\)", "\(2n\)"],
                  "answer_en": "\(n(n+1)\)",
                  "answer_hi": "\(n(n+1)\)",
                  "attempted": false
                },
                {
                  "num": 50,
                  "question_en": "The equation \(x^2 + 1 = 0\) has:",
                  "question_hi": "समीकरण \(x^2 + 1 = 0\) के:",
                  "options_en": ["One real root", "Two real roots", "No real roots", "Infinite roots"],
                  "options_hi": ["एक वास्तविक मूल", "दो वास्तविक मूल", "कोई वास्तविक मूल नहीं", "अनंत मूल"],
                  "answer_en": "No real roots",
                  "answer_hi": "कोई वास्तविक मूल नहीं",
                  "attempted": false
                }
              ]

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
                window.location.href = "/RTS/Public/Deshbord/category/test/submit-test.html";
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