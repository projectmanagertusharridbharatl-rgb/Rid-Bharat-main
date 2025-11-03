 //  inverseTrigonometricFunctions (unit-2)
 const questions = [
    {
      num: 1,
      question_en: "What is the determinant of a 2x2 matrix [[a, b], [c, d]]?",
      question_hi: "2x2 मैट्रिक्स [[a, b], [c, d]] का व्य تعیینक क्या है?",
      options_en: ["ad - bc", "ab - cd", "ac - bd", "a + d"],
      options_hi: ["ad - bc", "ab - cd", "ac - bd", "a + d"],
      answer: "ad - bc",
      attempted: false,
      selected: ""
    },
    {
      num: 2,
      question_en: "If the rows of a determinant are interchanged, what happens to its value?",
      question_hi: "यदि एक नियतांक की पंक्तियाँ आपस में बदल दी जाएँ, तो उसके मान पर क्या प्रभाव पड़ता है?",
      options_en: ["Remains same", "Becomes negative", "Doubles", "Halves"],
      options_hi: ["समान रहता है", "ऋणात्मक हो जाता है", "दोगुना हो जाता है", "आधा हो जाता है"],
      answer: "Becomes negative",
      attempted: false,
      selected: ""
    },
    {
      num: 3,
      question_en: "If all elements of a row (or column) are zero, the determinant is:",
      question_hi: "यदि किसी पंक्ति (या स्तंभ) के सभी तत्व शून्य हों, तो नियतांक का मान होता है:",
      options_en: ["1", "0", "Infinity", "Cannot be determined"],
      options_hi: ["1", "0", "अनंत", "निर्धारित नहीं किया जा सकता"],
      answer: "0",
      attempted: false,
      selected: ""
    },
    {
      num: 4,
      question_en: "Determinant of an identity matrix of any order is:",
      question_hi: "किसी भी क्रम की आइडेंटिटी मैट्रिक्स का नियतांक होता है:",
      options_en: ["0", "1", "-1", "n"],
      options_hi: ["0", "1", "-1", "n"],
      answer: "1",
      attempted: false,
      selected: ""
    },
    {
      num: 5,
      question_en: "What is the value of determinant of a triangular matrix?",
      question_hi: "त्रिकोणीय मैट्रिक्स का नियतांक का मान क्या होता है?",
      options_en: ["Sum of diagonal elements", "Product of diagonal elements", "0", "1"],
      options_hi: ["विकर्ण तत्वों का योग", "विकर्ण तत्वों का गुणनफल", "0", "1"],
      answer: "Product of diagonal elements",
      attempted: false,
      selected: ""
    },
    {
      num: 6,
      question_en: "If two rows of a determinant are identical, then the determinant is:",
      question_hi: "यदि एक नियतांक की दो पंक्तियाँ समान हों, तो नियतांक का मान होता है:",
      options_en: ["0", "1", "-1", "Cannot say"],
      options_hi: ["0", "1", "-1", "कहा नहीं जा सकता"],
      answer: "0",
      attempted: false,
      selected: ""
    },
    {
      num: 7,
      question_en: "Which property is used when the determinant remains same after transposing a matrix?",
      question_hi: "किस गुणधर्म के कारण किसी मैट्रिक्स को ट्रांसपोज करने पर उसका नियतांक समान रहता है?",
      options_en: ["Multiplicative Property", "Transpose Property", "Addition Property", "Zero Property"],
      options_hi: ["गुणन गुणधर्म", "ट्रांसपोज गुणधर्म", "योग गुणधर्म", "शून्य गुणधर्म"],
      answer: "Transpose Property",
      attempted: false,
      selected: ""
    },
    {
      num: 8,
      question_en: "What is the determinant of matrix [[1, 2], [3, 4]]?",
      question_hi: "मैट्रिक्स [[1, 2], [3, 4]] का नियतांक क्या है?",
      options_en: ["-2", "-5", "2", "5"],
      options_hi: ["-2", "-5", "2", "5"],
      answer: "-2",
      attempted: false,
      selected: ""
    },
    {
      num: 9,
      question_en: "If det(A) = 3, then det(2A) for a 2×2 matrix is:",
      question_hi: "यदि det(A) = 3 है, तो 2×2 मैट्रिक्स के लिए det(2A) का मान होगा:",
      options_en: ["6", "12", "9", "None of these"],
      options_hi: ["6", "12", "9", "इनमें से कोई नहीं"],
      answer: "12",
      attempted: false,
      selected: ""
    },
    {
      num: 10,
      question_en: "If the determinant of a matrix is zero, the matrix is:",
      question_hi: "यदि किसी मैट्रिक्स का नियतांक शून्य है, तो वह मैट्रिक्स होता है:",
      options_en: ["Invertible", "Non-invertible", "Unit", "Identity"],
      options_hi: ["इनवर्टिबल", "नॉन-इनवर्टिबल", "यूनिट", "आइडेंटिटी"],
      answer: "Non-invertible",
      attempted: false,
      selected: ""
    },
    {
      num: 11,
      question_en: "What is the effect of multiplying a row by a constant k on determinant?",
      question_hi: "किसी पंक्ति को एक नियतांक k से गुणा करने पर नियतांक पर क्या प्रभाव पड़ता है?",
      options_en: ["Multiplied by k", "Divided by k", "Remains same", "Becomes zero"],
      options_hi: ["k से गुणा होता है", "k से विभाजित होता है", "समान रहता है", "शून्य हो जाता है"],
      answer: "Multiplied by k",
      attempted: false,
      selected: ""
    },
    {
      num: 12,
      question_en: "For 3×3 matrix, how many terms are there in determinant expansion?",
      question_hi: "3×3 मैट्रिक्स के लिए नियतांक विस्तार में कितने पद होते हैं?",
      options_en: ["3", "6", "9", "27"],
      options_hi: ["3", "6", "9", "27"],
      answer: "6",
      attempted: false,
      selected: ""
    },
    {
      num: 13,
      question_en: "Determinant is defined only for:",
      question_hi: "नियतांक केवल किसके लिए परिभाषित होता है?",
      options_en: ["Rectangular matrices", "Square matrices", "Row matrices", "Column matrices"],
      options_hi: ["आयताकार मैट्रिक्स", "वर्गाकार मैट्रिक्स", "पंक्ति मैट्रिक्स", "स्तंभ मैट्रिक्स"],
      answer: "Square matrices",
      attempted: false,
      selected: ""
    },
    {
      num: 14,
      question_en: "If A is a matrix and det(A) = 0, then A⁻¹ exists:",
      question_hi: "यदि A एक मैट्रिक्स है और det(A) = 0 है, तो A⁻¹:",
      options_en: ["Exists", "Does not exist", "Is identity", "Is zero"],
      options_hi: ["अस्तित्व में है", "अस्तित्व में नहीं है", "आइडेंटिटी है", "शून्य है"],
      answer: "Does not exist",
      attempted: false,
      selected: ""
    },
    {
      num: 15,
      question_en: "If A is a 3×3 matrix and det(A) = 2, what is det(3A)?",
      question_hi: "यदि A एक 3×3 मैट्रिक्स है और det(A) = 2 है, तो det(3A) क्या होगा?",
      options_en: ["6", "18", "54", "None of these"],
      options_hi: ["6", "18", "54", "इनमें से कोई नहीं"],
      answer: "54",
      attempted: false,
      selected: ""
    },
    {
      num: 16,
      question_en: "If determinant of matrix A is non-zero, it is called:",
      question_hi: "यदि मैट्रिक्स A का नियतांक शून्य नहीं है, तो उसे क्या कहा जाता है?",
      options_en: ["Singular", "Non-singular", "Zero matrix", "Null matrix"],
      options_hi: ["सिंगुलर", "नॉन-सिंगुलर", "शून्य मैट्रिक्स", "नल मैट्रिक्स"],
      answer: "Non-singular",
      attempted: false,
      selected: ""
    },
    {
      num: 17,
      question_en: "What is cofactor of element a11 in a 3x3 matrix?",
      question_hi: "3x3 मैट्रिक्स में तत्व a11 का सहगुणांक क्या है?",
      options_en: ["Minor with sign", "Minor only", "Same element", "None"],
      options_hi: ["चिह्न सहित माइनर", "केवल माइनर", "समान तत्व", "कोई नहीं"],
      answer: "Minor with sign",
      attempted: false,
      selected: ""
    },
    {
      num: 18,
      question_en: "What is the adjoint of a matrix?",
      question_hi: "किसी मैट्रिक्स का एडजॉइंट क्या होता है?",
      options_en: ["Matrix of minors", "Matrix of cofactors", "Transpose of cofactor matrix", "Transpose of original matrix"],
      options_hi: ["माइनर्स की मैट्रिक्स", "कोफैक्टर्स की मैट्रिक्स", "कोफैक्टर मैट्रिक्स का ट्रांसपोज", "मूल मैट्रिक्स का ट्रांसपोज"],
      answer: "Transpose of cofactor matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 19,
      question_en: "Which of the following is NOT a property of determinants?",
      question_hi: "निम्नलिखित में से कौन नियतांकों का गुणधर्म नहीं है?",
      options_en: ["Row interchange changes sign", "Adding rows changes determinant", "Scalar multiplication affects determinant", "Transposing does not affect value"],
      options_hi: ["पंक्ति बदलने से चिह्न बदलता है", "पंक्तियों को जोड़ने से नियतांक बदलता है", "स्केलर गुणा का प्रभाव पड़ता है", "ट्रांसपोज से मान नहीं बदलता"],
      answer: "Adding rows changes determinant",
      attempted: false,
      selected: ""
    },
    {
      num: 20,
      question_en: "Value of determinant using Sarrus Rule applies to:",
      question_hi: "Sarrus नियम का उपयोग किस पर होता है?",
      options_en: ["2x2 matrix", "3x3 matrix", "4x4 matrix", "All of the above"],
      options_hi: ["2x2 मैट्रिक्स", "3x3 मैट्रिक्स", "4x4 मैट्रिक्स", "उपरोक्त सभी"],
      answer: "3x3 matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 21,
      question_en: "Which of the following matrices has a determinant equal to zero?",
      question_hi: "निम्नलिखित में से किस मैट्रिक्स का नियतांक शून्य होगा?",
      options_en: ["Singular matrix", "Non-singular matrix", "Unit matrix", "Identity matrix"],
      options_hi: ["सिंगुलर मैट्रिक्स", "नॉन-सिंगुलर मैट्रिक्स", "यूनिट मैट्रिक्स", "आइडेंटिटी मैट्रिक्स"],
      answer: "Singular matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 22,
      question_en: "Which of the following is used to find area using determinants?",
      question_hi: "नियतांकों का उपयोग करके क्षेत्रफल निकालने के लिए किसका उपयोग किया जाता है?",
      options_en: ["2x2 matrix", "3x3 matrix", "Determinant of points", "Minor"],
      options_hi: ["2x2 मैट्रिक्स", "3x3 मैट्रिक्स", "बिंदुओं का नियतांक", "माइनर"],
      answer: "Determinant of points",
      attempted: false,
      selected: ""
    },
    {
      num: 23,
      question_en: "What is the determinant of a scalar matrix kI of order 3?",
      question_hi: "क्रम 3 की स्केलर मैट्रिक्स kI का नियतांक क्या होता है?",
      options_en: ["k", "k²", "k³", "3k"],
      options_hi: ["k", "k²", "k³", "3k"],
      answer: "k³",
      attempted: false,
      selected: ""
    },
    {
      num: 24,
      question_en: "What is determinant of a zero matrix?",
      question_hi: "शून्य मैट्रिक्स का नियतांक क्या होता है?",
      options_en: ["1", "0", "Infinity", "Undefined"],
      options_hi: ["1", "0", "अनंत", "अपरिभाषित"],
      answer: "0",
      attempted: false,
      selected: ""
    },
    {
      num: 25,
      question_en: "How is determinant of A⁻¹ related to determinant of A?",
      question_hi: "A⁻¹ का नियतांक A के नियतांक से किस प्रकार संबंधित होता है?",
      options_en: ["Same", "Reciprocal", "Negative", "Square"],
      options_hi: ["समान", "प्रतिलोम", "ऋणात्मक", "वर्ग"],
      answer: "Reciprocal",
      attempted: false,
      selected: ""
    },
      {
        num: 26,
        question_en: "If det(A) = 5, then what is det(A⁻¹)?",
        question_hi: "यदि det(A) = 5 है, तो det(A⁻¹) क्या होगा?",
        options_en: ["1/5", "5", "-5", "0"],
        options_hi: ["1/5", "5", "-5", "0"],
        answer: "1/5",
        attempted: false,
        selected: ""
      },
      {
        num: 27,
        question_en: "What is the minor of an element in a matrix?",
        question_hi: "किसी मैट्रिक्स में किसी तत्व का माइनर क्या होता है?",
        options_en: ["Original element", "Determinant of submatrix", "Cofactor", "Transpose"],
        options_hi: ["मूल तत्व", "उपमैट्रिक्स का नियतांक", "सहगुणांक", "ट्रांसपोज"],
        answer: "Determinant of submatrix",
        attempted: false,
        selected: ""
      },
      {
        num: 28,
        question_en: "Which operation does NOT change the value of a determinant?",
        question_hi: "नियतांक के मान को कौन सा ऑपरेशन नहीं बदलता है?",
        options_en: ["Adding multiple of one row to another", "Interchanging rows", "Multiplying a row by constant", "None"],
        options_hi: ["एक पंक्ति को दूसरी में जोड़ना", "पंक्तियाँ बदलना", "एक पंक्ति को गुणा करना", "कोई नहीं"],
        answer: "Adding multiple of one row to another",
        attempted: false,
        selected: ""
      },
      {
        num: 29,
        question_en: "If determinant of matrix A is 0, then the system of equations AX = B has:",
        question_hi: "यदि मैट्रिक्स A का नियतांक 0 है, तो समीकरण AX = B का हल:",
        options_en: ["Unique solution", "No solution or infinite solutions", "Always no solution", "Always infinite solutions"],
        options_hi: ["एकमात्र हल", "कोई हल नहीं या अनंत हल", "हमेशा कोई हल नहीं", "हमेशा अनंत हल"],
        answer: "No solution or infinite solutions",
        attempted: false,
        selected: ""
      },
      {
        num: 30,
        question_en: "What is the order of a determinant defined for a 4x4 matrix?",
        question_hi: "4x4 मैट्रिक्स के लिए नियतांक का क्रम क्या होता है?",
        options_en: ["4", "16", "2", "Undefined"],
        options_hi: ["4", "16", "2", "अपरिभाषित"],
        answer: "4",
        attempted: false,
        selected: ""
      },
      {
        num: 31,
        question_en: "If det(A) = 0, then A is called:",
        question_hi: "यदि det(A) = 0, तो A को क्या कहा जाता है?",
        options_en: ["Non-singular matrix", "Singular matrix", "Unit matrix", "Orthogonal matrix"],
        options_hi: ["नॉन-सिंगुलर मैट्रिक्स", "सिंगुलर मैट्रिक्स", "यूनिट मैट्रिक्स", "ऑर्थोगोनल मैट्रिक्स"],
        answer: "Singular matrix",
        attempted: false,
        selected: ""
      },
      {
        num: 32,
        question_en: "Which matrix has determinant equal to 1?",
        question_hi: "किस मैट्रिक्स का नियतांक 1 होता है?",
        options_en: ["Identity matrix", "Singular matrix", "Zero matrix", "Any matrix"],
        options_hi: ["आइडेंटिटी मैट्रिक्स", "सिंगुलर मैट्रिक्स", "शून्य मैट्रिक्स", "कोई भी मैट्रिक्स"],
        answer: "Identity matrix",
        attempted: false,
        selected: ""
      },
      {
        num: 33,
        question_en: "What is the determinant of a 1x1 matrix [a]?",
        question_hi: "1x1 मैट्रिक्स [a] का नियतांक क्या होता है?",
        options_en: ["a", "1", "0", "a²"],
        options_hi: ["a", "1", "0", "a²"],
        answer: "a",
        attempted: false,
        selected: ""
      },
      {
        num: 34,
        question_en: "Which method uses cofactors to find the determinant?",
        question_hi: "कौनसी विधि नियतांक निकालने के लिए cofactors का उपयोग करती है?",
        options_en: ["Row reduction", "Laplace expansion", "Sarrus rule", "Gauss elimination"],
        options_hi: ["पंक्ति न्यूनीकरण", "लाप्लास विस्तार", "सारस नियम", "गाउस उन्मूलन"],
        answer: "Laplace expansion",
        attempted: false,
        selected: ""
      },
      {
        num: 35,
        question_en: "The determinant of a diagonal matrix is:",
        question_hi: "एक विकर्ण मैट्रिक्स का नियतांक होता है:",
        options_en: ["Sum of elements", "Product of diagonal elements", "Zero", "1"],
        options_hi: ["तत्वों का योग", "विकर्ण तत्वों का गुणनफल", "शून्य", "1"],
        answer: "Product of diagonal elements",
        attempted: false,
        selected: ""
      },
      {
        num: 36,
        question_en: "In a 3x3 matrix, how many minors can be formed?",
        question_hi: "3x3 मैट्रिक्स में कितने माइनर्स बनाए जा सकते हैं?",
        options_en: ["3", "6", "9", "12"],
        options_hi: ["3", "6", "9", "12"],
        answer: "9",
        attempted: false,
        selected: ""
      },
      {
        num: 37,
        question_en: "If a row is multiplied by k, determinant becomes:",
        question_hi: "यदि किसी पंक्ति को k से गुणा किया जाए, तो नियतांक हो जाता है:",
        options_en: ["k times", "k² times", "k³ times", "Same"],
        options_hi: ["k गुना", "k² गुना", "k³ गुना", "समान"],
        answer: "k times",
        attempted: false,
        selected: ""
      },
      {
        num: 38,
        question_en: "What is the use of determinant in linear equations?",
        question_hi: "रेखीय समीकरणों में नियतांक का क्या उपयोग होता है?",
        options_en: ["Finding sum", "Finding inverse", "Finding solution", "Finding range"],
        options_hi: ["योग निकालना", "व्युत्क्रम निकालना", "हल निकालना", "रेंज निकालना"],
        answer: "Finding solution",
        attempted: false,
        selected: ""
      },
      {
        num: 39,
        question_en: "Which of the following is correct about cofactor matrix?",
        question_hi: "निम्नलिखित में से कौन कोफैक्टर मैट्रिक्स के बारे में सही है?",
        options_en: ["Always square", "Always symmetric", "Transpose of original", "Not defined"],
        options_hi: ["हमेशा वर्गाकार", "हमेशा सममित", "मूल का ट्रांसपोज", "परिभाषित नहीं"],
        answer: "Always square",
        attempted: false,
        selected: ""
      },
      {
        num: 40,
        question_en: "Determinant of adjoint of A is equal to:",
        question_hi: "adj(A) का नियतांक बराबर होता है:",
        options_en: ["det(A)", "det(A)²", "det(A)³", "1/det(A)"],
        options_hi: ["det(A)", "det(A)²", "det(A)³", "1/det(A)"],
        answer: "det(A)²",
        attempted: false,
        selected: ""
      },
      {
        num: 41,
        question_en: "Which of these operations affects determinant the most?",
        question_hi: "इनमें से कौन सा ऑपरेशन नियतांक को सबसे अधिक प्रभावित करता है?",
        options_en: ["Adding a scalar", "Swapping rows", "Transposing", "Subtracting elements"],
        options_hi: ["स्केलर जोड़ना", "पंक्तियाँ बदलना", "ट्रांसपोज करना", "तत्व घटाना"],
        answer: "Swapping rows",
        attempted: false,
        selected: ""
      },
      {
        num: 42,
        question_en: "Cramer's Rule is based on:",
        question_hi: "क्रैमर नियम आधारित है:",
        options_en: ["Matrices", "Determinants", "Functions", "Derivatives"],
        options_hi: ["मैट्रिक्स", "नियतांक", "फंक्शन", "व्युत्पन्न"],
        answer: "Determinants",
        attempted: false,
        selected: ""
      },
      {
        num: 43,
        question_en: "Which of these is used to find inverse using determinant?",
        question_hi: "नियतांक का उपयोग करके व्युत्क्रम निकालने में क्या उपयोग होता है?",
        options_en: ["A + I", "adj(A)", "A²", "Aᵀ"],
        options_hi: ["A + I", "adj(A)", "A²", "Aᵀ"],
        answer: "adj(A)",
        attempted: false,
        selected: ""
      },
      {
        num: 44,
        question_en: "Determinant of transpose of A is equal to:",
        question_hi: "A के ट्रांसपोज का नियतांक होता है:",
        options_en: ["Different", "Zero", "Same", "Square"],
        options_hi: ["भिन्न", "शून्य", "समान", "वर्ग"],
        answer: "Same",
        attempted: false,
        selected: ""
      },
      {
        num: 45,
        question_en: "If A is a matrix with det(A) ≠ 0, then A is:",
        question_hi: "यदि A एक मैट्रिक्स है और det(A) ≠ 0 है, तो A होगा:",
        options_en: ["Singular", "Invertible", "Zero matrix", "Undefined"],
        options_hi: ["सिंगुलर", "इनवर्टिबल", "शून्य मैट्रिक्स", "अपरिभाषित"],
        answer: "Invertible",
        attempted: false,
        selected: ""
      },
      {
        num: 46,
        question_en: "Which of these can be used to solve 3-variable linear equations?",
        question_hi: "तीन चर वाले रैखिक समीकरणों को हल करने के लिए इनमें से क्या उपयोगी है?",
        options_en: ["Cramer's rule", "Quadratic formula", "Integration", "Limits"],
        options_hi: ["क्रैमर नियम", "द्विघात सूत्र", "समाकलन", "सीमाएँ"],
        answer: "Cramer's rule",
        attempted: false,
        selected: ""
      },
      {
        num: 47,
        question_en: "Determinant gives a scalar value representing:",
        question_hi: "नियतांक एक स्केलर मान देता है जो दर्शाता है:",
        options_en: ["Size of matrix", "Area/volume", "Rank", "Transpose"],
        options_hi: ["मैट्रिक्स का आकार", "क्षेत्रफल/आयतन", "रैंक", "ट्रांसपोज"],
        answer: "Area/volume",
        attempted: false,
        selected: ""
      },
      {
        num: 48,
        question_en: "Which of the following operations is valid for computing determinant?",
        question_hi: "नियतांक की गणना के लिए इनमें से कौन सा ऑपरेशन वैध है?",
        options_en: ["Laplace expansion", "Gaussian elimination", "Matrix addition", "All of these"],
        options_hi: ["लाप्लास विस्तार", "गाउसियन एलिमिनेशन", "मैट्रिक्स जोड़", "इनमें से सभी"],
        answer: "Laplace expansion",
        attempted: false,
        selected: ""
      },
      {
        num: 49,
        question_en: "If A is orthogonal, then det(A) is:",
        question_hi: "यदि A ऑर्थोगोनल है, तो det(A) होता है:",
        options_en: ["1 or -1", "0", "2", "None"],
        options_hi: ["1 या -1", "0", "2", "कोई नहीं"],
        answer: "1 or -1",
        attempted: false,
        selected: ""
      },
      {
        num: 50,
        question_en: "Which of the following is NOT true for determinants?",
        question_hi: "नियतांकों के लिए निम्नलिखित में से कौन सही नहीं है?",
        options_en: ["It is defined only for square matrices", "It is used to find area", "It is always positive", "It helps in finding inverse"],
        options_hi: ["यह केवल वर्गाकार मैट्रिक्स के लिए परिभाषित है", "यह क्षेत्रफल निकालने में उपयोगी है", "यह हमेशा धनात्मक होता है", "यह व्युत्क्रम निकालने में सहायक है"],
        answer: "It is always positive",
        attempted: false,
        selected: ""
      }
    ];
    
let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
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
