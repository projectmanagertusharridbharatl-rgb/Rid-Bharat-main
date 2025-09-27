 //  inverseTrigonometricFunctions (unit-2)
 const questions = [
   
   {
    num: 1,
    question_en: "What is the determinant of a 2x2 matrix [[a, b], [c, d]]?",
    question_hi: "2x2 मैट्रिक्स [[a, b], [c, d]] का व्य निर्धारक क्या है?",
    options_en: ["ad - bc", "ab - cd", "ac - bd", "a + d"],
    options_hi: ["ad - bc", "ab - cd", "ac - bd", "a + d"],
    answer_en: "ad - bc",
    answer_hi: "ad - bc",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the determinant of the identity matrix of order 3?",
    question_hi: "क्रम 3 की पहचान मैट्रिक्स का व्य निर्धारक क्या होता है?",
    options_en: ["0", "1", "3", "-1"],
    options_hi: ["0", "1", "3", "-1"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "If two rows of a matrix are identical, what is the determinant?",
    question_hi: "यदि किसी मैट्रिक्स की दो पंक्तियाँ समान हैं, तो व्य निर्धारक क्या होगा?",
    options_en: ["0", "1", "Matrix order", "Cannot be determined"],
    options_hi: ["0", "1", "मैट्रिक्स का क्रम", "निर्धारित नहीं किया जा सकता"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What happens to the determinant if two rows of a matrix are interchanged?",
    question_hi: "यदि मैट्रिक्स की दो पंक्तियाँ अदला-बदली कर दी जाएं तो व्य निर्धारक क्या होगा?",
    options_en: ["Changes sign", "Becomes zero", "Remains same", "Doubles"],
    options_hi: ["चिह्न बदल जाता है", "शून्य हो जाता है", "वह समान रहता है", "दोगुना हो जाता है"],
    answer_en: "Changes sign",
    answer_hi: "चिह्न बदल जाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "The determinant of a triangular matrix is the product of what?",
    question_hi: "त्रिभुजाकार मैट्रिक्स का व्य निर्धारक किसका गुणनफल होता है?",
    options_en: ["Diagonal elements", "All elements", "First row elements", "Last column elements"],
    options_hi: ["मुख्य विकर्ण तत्व", "सभी तत्व", "पहली पंक्ति के तत्व", "अंतिम स्तंभ के तत्व"],
    answer_en: "Diagonal elements",
    answer_hi: "मुख्य विकर्ण तत्व",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "If a matrix has a row of zeros, its determinant is?",
    question_hi: "यदि किसी मैट्रिक्स की एक पंक्ति सभी शून्य हो तो उसका व्य निर्धारक क्या होगा?",
    options_en: ["0", "1", "Matrix order", "Undefined"],
    options_hi: ["0", "1", "मैट्रिक्स का क्रम", "अपरिभाषित"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "The determinant of a matrix remains unchanged if we add to a row a scalar multiple of another row? (True/False)",
    question_hi: "यदि हम किसी पंक्ति में दूसरी पंक्ति का गुणक जोड़ दें तो व्य निर्धारक अपरिवर्तित रहता है? (सही/गलत)",
    options_en: ["True", "False"],
    options_hi: ["सही", "गलत"],
    answer_en: "True",
    answer_hi: "सही",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the determinant of the zero matrix of order 4?",
    question_hi: "क्रम 4 के शून्य मैट्रिक्स का व्य निर्धारक क्या होगा?",
    options_en: ["0", "1", "4", "-1"],
    options_hi: ["0", "1", "4", "-1"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "If each element of a row of a matrix is multiplied by a scalar k, how does the determinant change?",
    question_hi: "यदि मैट्रिक्स की एक पंक्ति के सभी तत्व को k से गुणा किया जाए तो व्य निर्धारक कैसे बदलता है?",
    options_en: ["Multiplied by k", "Multiplied by k^n", "Remains same", "Becomes zero"],
    options_hi: ["k से गुणा हो जाता है", "k^n से गुणा हो जाता है", "वह समान रहता है", "शून्य हो जाता है"],
    answer_en: "Multiplied by k",
    answer_hi: "k से गुणा हो जाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "The determinant of the product of two matrices is?",
    question_hi: "दो मैट्रिक्स के गुणनफल का व्य निर्धारक क्या होता है?",
    options_en: ["Product of their determinants", "Sum of their determinants", "Difference of their determinants", "Cannot be determined"],
    options_hi: ["उनके व्य निर्धारकों का गुणनफल", "उनके व्य निर्धारकों का योग", "उनके व्य निर्धारकों का अंतर", "निर्धारित नहीं किया जा सकता"],
    answer_en: "Product of their determinants",
    answer_hi: "उनके व्य निर्धारकों का गुणनफल",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "If a matrix is singular, what is its determinant?",
    question_hi: "यदि कोई मैट्रिक्स singular है, तो उसका व्य निर्धारक क्या होगा?",
    options_en: ["0", "1", "Undefined", "Negative"],
    options_hi: ["0", "1", "अपरिभाषित", "ऋणात्मक"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "The determinant of a matrix equals the determinant of its transpose? (True/False)",
    question_hi: "किसी मैट्रिक्स का व्य निर्धारक उसके ट्रांसपोज़ के व्य निर्धारक के बराबर होता है? (सही/गलत)",
    options_en: ["True", "False"],
    options_hi: ["सही", "गलत"],
    answer_en: "True",
    answer_hi: "सही",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which operation does NOT change the determinant of a matrix?",
    question_hi: "कौन सा ऑपरेशन मैट्रिक्स के व्य निर्धारक को नहीं बदलता?",
    options_en: ["Adding a multiple of one row to another", "Swapping two rows", "Multiplying a row by a scalar", "Replacing a row by zeros"],
    options_hi: ["एक पंक्ति में दूसरी पंक्ति का गुणक जोड़ना", "दो पंक्तियों का स्थान बदलना", "एक पंक्ति को किसी स्केलर से गुणा करना", "एक पंक्ति को शून्य से बदलना"],
    answer_en: "Adding a multiple of one row to another",
    answer_hi: "एक पंक्ति में दूसरी पंक्ति का गुणक जोड़ना",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "For a 3x3 matrix, how many 2x2 minors are used to calculate the determinant by expansion?",
    question_hi: "3x3 मैट्रिक्स के व्य निर्धारक की गणना के लिए कितने 2x2 उपव्य निर्धारक (minors) का उपयोग होता है?",
    options_en: ["3", "6", "9", "1"],
    options_hi: ["3", "6", "9", "1"],
    answer_en: "3",
    answer_hi: "3",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the value of determinant if a matrix has two proportional rows?",
    question_hi: "यदि मैट्रिक्स की दो पंक्तियाँ अनुपात में हैं तो व्य निर्धारक का मान क्या होगा?",
    options_en: ["0", "1", "Matrix order", "Cannot be determined"],
    options_hi: ["0", "1", "मैट्रिक्स का क्रम", "निर्धारित नहीं किया जा सकता"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "The determinant of a diagonal matrix is the product of which elements?",
    question_hi: "एक विकर्ण मैट्रिक्स का व्य निर्धारक किन तत्वों का गुणनफल होता है?",
    options_en: ["Diagonal elements", "Off-diagonal elements", "First row elements", "Last column elements"],
    options_hi: ["मुख्य विकर्ण तत्व", "मुख्य विकर्ण के बाहर के तत्व", "पहली पंक्ति के तत्व", "अंतिम स्तंभ के तत्व"],
    answer_en: "Diagonal elements",
    answer_hi: "मुख्य विकर्ण तत्व",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "If a row of a matrix is multiplied by 0, what is the determinant?",
    question_hi: "यदि मैट्रिक्स की एक पंक्ति को 0 से गुणा किया जाए तो व्य निर्धारक क्या होगा?",
    options_en: ["0", "1", "Matrix order", "Cannot be determined"],
    options_hi: ["0", "1", "मैट्रिक्स का क्रम", "निर्धारित नहीं किया जा सकता"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "If a matrix A has determinant 5, what is the determinant of 3A?",
    question_hi: "यदि मैट्रिक्स A का व्य निर्धारक 5 है, तो 3A का व्य निर्धारक क्या होगा?",
    options_en: ["15", "45", "5", "0"],
    options_hi: ["15", "45", "5", "0"],
    answer_en: "45",
    answer_hi: "45",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "How does the determinant change when a scalar k multiplies every element of an n x n matrix?",
    question_hi: "जब एक स्केलर k, n x n मैट्रिक्स के हर तत्व को गुणा करता है तो व्य निर्धारक कैसे बदलता है?",
    options_en: ["Multiplied by k^n", "Multiplied by k", "Remains same", "Multiplied by n"],
    options_hi: ["k^n से गुणा हो जाता है", "k से गुणा हो जाता है", "वह समान रहता है", "n से गुणा हो जाता है"],
    answer_en: "Multiplied by k^n",
    answer_hi: "k^n से गुणा हो जाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "What is the cofactor of element a_ij in a matrix?",
    question_hi: "मैट्रिक्स में तत्व a_ij का सह-व्य निर्धारक (cofactor) क्या होता है?",
    options_en: [
      "(-1)^{i+j} × Minor of a_ij",
      "Sum of elements in ith row",
      "Product of ith row elements",
      "Determinant of the matrix"
    ],
    options_hi: [
      "(-1)^{i+j} × a_ij का उपव्य निर्धारक",
      "iवीं पंक्ति के तत्वों का योग",
      "iवीं पंक्ति के तत्वों का गुणनफल",
      "मैट्रिक्स का व्य निर्धारक"
    ],
    answer_en: "(-1)^{i+j} × Minor of a_ij",
    answer_hi: "(-1)^{i+j} × a_ij का उपव्य निर्धारक",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the determinant of a matrix with a row replaced by the sum of two rows?",
    question_hi: "जब किसी मैट्रिक्स की एक पंक्ति को दो पंक्तियों के योग से बदल दिया जाए तो व्य निर्धारक क्या होगा?",
    options_en: [
      "Equal to the sum of determinants of the two matrices",
      "Double the determinant",
      "Zero",
      "Cannot be determined"
    ],
    options_hi: [
      "दो मैट्रिक्स के व्य निर्धारकों के योग के बराबर",
      "दोगुना व्य निर्धारक",
      "शून्य",
      "निर्धारित नहीं किया जा सकता"
    ],
    answer_en: "Equal to the sum of determinants of the two matrices",
    answer_hi: "दो मैट्रिक्स के व्य निर्धारकों के योग के बराबर",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "If the determinant of a matrix is zero, then the matrix is said to be?",
    question_hi: "यदि मैट्रिक्स का व्य निर्धारक शून्य है, तो इसे क्या कहा जाता है?",
    options_en: ["Singular", "Non-singular", "Diagonal", "Identity"],
    options_hi: ["Singular", "Non-singular", "Diagonal", "Identity"],
    answer_en: "Singular",
    answer_hi: "Singular",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which of the following is true about determinants?",
    question_hi: "निम्नलिखित में से कौन सा व्य निर्धारकों के बारे में सही है?",
    options_en: [
      "Determinant of transpose = Determinant of original matrix",
      "Determinant of sum = Sum of determinants",
      "Determinant of product = Sum of determinants",
      "Determinant never changes with row operations"
    ],
    options_hi: [
      "ट्रांसपोज़ का व्य निर्धारक = मूल मैट्रिक्स का व्य निर्धारक",
      "योग का व्य निर्धारक = व्य निर्धारकों का योग",
      "गुणनफल का व्य निर्धारक = व्य निर्धारकों का योग",
      "पंक्ति संचालन से व्य निर्धारक कभी नहीं बदलता"
    ],
    answer_en: "Determinant of transpose = Determinant of original matrix",
    answer_hi: "ट्रांसपोज़ का व्य निर्धारक = मूल मैट्रिक्स का व्य निर्धारक",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What is the determinant of the matrix [[2, 0], [0, 3]]?",
    question_hi: "मैट्रिक्स [[2, 0], [0, 3]] का व्य निर्धारक क्या है?",
    options_en: ["6", "5", "0", "1"],
    options_hi: ["6", "5", "0", "1"],
    answer_en: "6",
    answer_hi: "6",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "If a matrix has a determinant of 1, what does it imply about the matrix?",
    question_hi: "यदि किसी मैट्रिक्स का व्य निर्धारक 1 है, तो इसका क्या अर्थ है?",
    options_en: [
      "Matrix is invertible",
      "Matrix is singular",
      "Matrix is zero matrix",
      "Matrix is diagonal"
    ],
    options_hi: [
      "मैट्रिक्स उल्टनीय है",
      "मैट्रिक्स singular है",
      "मैट्रिक्स शून्य मैट्रिक्स है",
      "मैट्रिक्स विकर्ण है"
    ],
    answer_en: "Matrix is invertible",
    answer_hi: "मैट्रिक्स उल्टनीय है",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "If the determinant of a matrix is zero, what does it imply about the matrix?",
    question_hi: "अगर किसी मैट्रिक्स का व्य निर्धारक शून्य है, तो इसका क्या मतलब है?",
    options_en: ["Matrix is invertible", "Matrix is singular", "Matrix is diagonal", "Matrix is identity"],
    options_hi: ["मैट्रिक्स उलटने योग्य है", "मैट्रिक्स एकवचन है", "मैट्रिक्स विकर्ण है", "मैट्रिक्स पहचान मैट्रिक्स है"],
    answer_en: "Matrix is singular",
    answer_hi: "मैट्रिक्स एकवचन है",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the determinant of the identity matrix of order n?",
    question_hi: "n क्रम के पहचान मैट्रिक्स का व्य निर्धारक क्या होता है?",
    options_en: ["0", "1", "n", "Depends on n"],
    options_hi: ["0", "1", "n", "n पर निर्भर करता है"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which of the following operations changes the determinant of a matrix?",
    question_hi: "इनमें से कौन सा ऑपरेशन मैट्रिक्स के व्य निर्धारक को बदलता है?",
    options_en: ["Adding a multiple of one row to another", "Interchanging two rows", "Multiplying a row by 1", "None of these"],
    options_hi: ["एक पंक्ति को दूसरी पंक्ति के गुणांक में जोड़ना", "दो पंक्तियों को बदलना", "एक पंक्ति को 1 से गुणा करना", "इनमें से कोई नहीं"],
    answer_en: "Interchanging two rows",
    answer_hi: "दो पंक्तियों को बदलना",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "The determinant of a triangular matrix is:",
    question_hi: "एक त्रिभुजाकार मैट्रिक्स का व्य निर्धारक क्या होता है?",
    options_en: ["Sum of diagonal elements", "Product of diagonal elements", "Sum of all elements", "Zero"],
    options_hi: ["मुख्य विकर्ण के तत्वों का योग", "मुख्य विकर्ण के तत्वों का गुणनफल", "सभी तत्वों का योग", "शून्य"],
    answer_en: "Product of diagonal elements",
    answer_hi: "मुख्य विकर्ण के तत्वों का गुणनफल",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "If all elements of a row (or column) are multiplied by a scalar k, the determinant is:",
    question_hi: "यदि किसी पंक्ति (या स्तम्भ) के सभी तत्व k से गुणा किए जाएं, तो व्य निर्धारक क्या होगा?",
    options_en: ["Multiplied by k", "Multiplied by k²", "Divided by k", "Unchanged"],
    options_hi: ["k से गुणा हो जाता है", "k² से गुणा हो जाता है", "k से भाग हो जाता है", "अपरिवर्तित रहता है"],
    answer_en: "Multiplied by k",
    answer_hi: "k से गुणा हो जाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Determinant of a matrix is equal to determinant of its transpose. True or False?",
    question_hi: "मैट्रिक्स का व्य निर्धारक उसके प्रतिलिपि के व्य निर्धारक के बराबर होता है। सही या गलत?",
    options_en: ["True", "False"],
    options_hi: ["सही", "गलत"],
    answer_en: "True",
    answer_hi: "सही",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "The determinant of a 3x3 matrix is calculated by expanding along:",
    question_hi: "3x3 मैट्रिक्स का व्य निर्धारक किसके साथ विस्तार करके निकाला जाता है?",
    options_en: ["A row or a column", "Only the first row", "Only the diagonal", "Only the last column"],
    options_hi: ["किसी पंक्ति या स्तम्भ के साथ", "केवल पहली पंक्ति के साथ", "केवल विकर्ण के साथ", "केवल अंतिम स्तम्भ के साथ"],
    answer_en: "A row or a column",
    answer_hi: "किसी पंक्ति या स्तम्भ के साथ",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "If two rows of a matrix are identical, the determinant is:",
    question_hi: "यदि मैट्रिक्स की दो पंक्तियाँ समान हों, तो व्य निर्धारक क्या होगा?",
    options_en: ["Zero", "One", "Negative", "Cannot be determined"],
    options_hi: ["शून्य", "एक", "ऋणात्मक", "निर्धारित नहीं किया जा सकता"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "If a matrix has a row or column of all zeros, its determinant is:",
    question_hi: "यदि मैट्रिक्स की कोई पंक्ति या स्तम्भ सभी शून्य हो, तो उसका व्य निर्धारक क्या होगा?",
    options_en: ["Zero", "One", "Determinant of submatrix", "Cannot be zero"],
    options_hi: ["शून्य", "एक", "उपमैट्रिक्स का व्य निर्धारक", "शून्य नहीं हो सकता"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which method is commonly used to calculate determinant of 3x3 matrices?",
    question_hi: "3x3 मैट्रिक्स के व्य निर्धारक को निकालने के लिए सामान्यतः कौन सी विधि उपयोग की जाती है?",
    options_en: ["Sarrus' Rule", "Cramer's Rule", "Gauss Elimination", "Laplace Expansion"],
    options_hi: ["सारस नियम", "क्रैमर नियम", "गॉस उन्मूलन", "लाप्लास विस्तार"],
    answer_en: "Sarrus' Rule",
    answer_hi: "सारस नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "If a matrix is multiplied by a scalar k, its determinant is multiplied by:",
    question_hi: "यदि मैट्रिक्स को k से गुणा किया जाए, तो उसका व्य निर्धारक किससे गुणा होगा?",
    options_en: ["k", "k^n where n is order of matrix", "1/k", "Unchanged"],
    options_hi: ["k", "k^n जहाँ n मैट्रिक्स का क्रम है", "1/k", "अपरिवर्तित"],
    answer_en: "k^n where n is order of matrix",
    answer_hi: "k^n जहाँ n मैट्रिक्स का क्रम है",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "The determinant of the product of two matrices equals:",
    question_hi: "दो मैट्रिक्स के गुणनफल का व्य निर्धारक क्या होता है?",
    options_en: ["Sum of determinants", "Product of determinants", "Difference of determinants", "None of these"],
    options_hi: ["व्य निर्धारकों का योग", "व्य निर्धारकों का गुणनफल", "व्य निर्धारकों का अंतर", "इनमें से कोई नहीं"],
    answer_en: "Product of determinants",
    answer_hi: "व्य निर्धारकों का गुणनफल",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "If A is a matrix and I is the identity matrix of same order, then det(A × I) = ?",
    question_hi: "यदि A एक मैट्रिक्स है और I उसी क्रम का पहचान मैट्रिक्स है, तो det(A × I) = ?",
    options_en: ["det(A)", "det(I)", "0", "1"],
    options_hi: ["det(A)", "det(I)", "0", "1"],
    answer_en: "det(A)",
    answer_hi: "det(A)",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the determinant of a diagonal matrix?",
    question_hi: "एक विकर्ण मैट्रिक्स का व्य निर्धारक क्या होता है?",
    options_en: ["Sum of diagonal elements", "Product of diagonal elements", "Zero", "One"],
    options_hi: ["मुख्य विकर्ण के तत्वों का योग", "मुख्य विकर्ण के तत्वों का गुणनफल", "शून्य", "एक"],
    answer_en: "Product of diagonal elements",
    answer_hi: "मुख्य विकर्ण के तत्वों का गुणनफल",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property is NOT true for determinants?",
    question_hi: "इनमें से कौन-सी गुणधर्म व्य निर्धारकों के लिए सही नहीं है?",
    options_en: ["Determinant of transpose = determinant of matrix", "Determinant changes sign if two rows are interchanged", "Determinant is zero if matrix is invertible", "Determinant of product = product of determinants"],
    options_hi: ["प्रतिलिपि का व्य निर्धारक = मैट्रिक्स का व्य निर्धारक", "दो पंक्तियों के अदला-बदली पर व्य निर्धारक का चिह्न बदल जाता है", "यदि मैट्रिक्स उलटने योग्य हो तो व्य निर्धारक शून्य होता है", "गुणनफल का व्य निर्धारक = व्य निर्धारकों का गुणनफल"],
    answer_en: "Determinant is zero if matrix is invertible",
    answer_hi: "यदि मैट्रिक्स उलटने योग्य हो तो व्य निर्धारक शून्य होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "If a matrix A is singular, then det(A) is:",
    question_hi: "यदि मैट्रिक्स A एकवचन है, तो det(A) क्या होगा?",
    options_en: ["0", "1", "Greater than 0", "Less than 0"],
    options_hi: ["0", "1", "0 से बड़ा", "0 से छोटा"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "If a matrix has two proportional rows, its determinant is:",
    question_hi: "यदि मैट्रिक्स की दो पंक्तियाँ समानुपाती हों, तो उसका व्य निर्धारक क्या होगा?",
    options_en: ["Zero", "One", "Product of rows", "Cannot be determined"],
    options_hi: ["शून्य", "एक", "पंक्तियों का गुणनफल", "निर्धारित नहीं किया जा सकता"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the cofactor of an element in a matrix?",
    question_hi: "मैट्रिक्स के किसी तत्व का सहनिर्धारक क्या होता है?",
    options_en: ["Minor with sign", "Determinant", "Sum of elements", "Product of elements"],
    options_hi: ["चिन्ह सहित लघुत्तक", "व्य निर्धारक", "तत्वों का योग", "तत्वों का गुणनफल"],
    answer_en: "Minor with sign",
    answer_hi: "चिन्ह सहित लघुत्तक",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "The determinant of an upper triangular matrix is the product of:",
    question_hi: "एक ऊपरी त्रिभुजाकार मैट्रिक्स का व्य निर्धारक किसका गुणनफल होता है?",
    options_en: ["Diagonal elements", "All elements", "First row elements", "Last column elements"],
    options_hi: ["मुख्य विकर्ण के तत्व", "सभी तत्व", "पहली पंक्ति के तत्व", "अंतिम स्तम्भ के तत्व"],
    answer_en: "Diagonal elements",
    answer_hi: "मुख्य विकर्ण के तत्व",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "The determinant of a 2x2 matrix [[1, 2], [3, 4]] is:",
    question_hi: "2x2 मैट्रिक्स [[1, 2], [3, 4]] का व्य निर्धारक क्या है?",
    options_en: ["-2", "10", "0", "7"],
    options_hi: ["-2", "10", "0", "7"],
    answer_en: "-2",
    answer_hi: "-2",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Expanding the determinant of a matrix along a row means:",
    question_hi: "किसी पंक्ति के साथ मैट्रिक्स के व्य निर्धारक का विस्तार करने का क्या मतलब है?",
    options_en: ["Using cofactors of that row", "Adding all elements of that row", "Multiplying all elements of that row", "Ignoring that row"],
    options_hi: ["उस पंक्ति के सहनिर्धारकों का उपयोग करना", "उस पंक्ति के सभी तत्वों का योग करना", "उस पंक्ति के सभी तत्वों का गुणन करना", "उस पंक्ति को नजरअंदाज करना"],
    answer_en: "Using cofactors of that row",
    answer_hi: "उस पंक्ति के सहनिर्धारकों का उपयोग करना",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the determinant of a matrix when all rows are multiplied by zero?",
    question_hi: "जब मैट्रिक्स की सभी पंक्तियाँ शून्य से गुणा की जाएं तो व्य निर्धारक क्या होगा?",
    options_en: ["Zero", "One", "Undefined", "Cannot be zero"],
    options_hi: ["शून्य", "एक", "परिभाषित नहीं", "शून्य नहीं हो सकता"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "If a matrix A has determinant 5, what is det(2A)? (A is 2x2)",
    question_hi: "यदि मैट्रिक्स A का व्य निर्धारक 5 है, तो det(2A) क्या होगा? (A 2x2 है)",
    options_en: ["20", "10", "5", "25"],
    options_hi: ["20", "10", "5", "25"],
    answer_en: "20",
    answer_hi: "20",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "The determinant of an elementary matrix that swaps two rows is:",
    question_hi: "दो पंक्तियों को बदलने वाले प्राथमिक मैट्रिक्स का व्य निर्धारक क्या होता है?",
    options_en: ["-1", "1", "0", "Depends on matrix size"],
    options_hi: ["-1", "1", "0", "मैट्रिक्स के आकार पर निर्भर करता है"],
    answer_en: "-1",
    answer_hi: "-1",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "The determinant of a matrix A is 3, what is determinant of A⁻¹?",
    question_hi: "यदि मैट्रिक्स A का व्य निर्धारक 3 है, तो A⁻¹ का व्य निर्धारक क्या होगा?",
    options_en: ["1/3", "3", "-3", "0"],
    options_hi: ["1/3", "3", "-3", "0"],
    answer_en: "1/3",
    answer_hi: "1/3",
    attempted: false,
    selected: ""
  }
];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
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

  updateCircles();
}

function markAttempted(index, selectedAnswer) {
  questions[index].attempted = true;
  questions[index].selected = selectedAnswer;
  updateCircles();
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

function updateCircles() {
  const circleContainer = document.getElementById("circleContainer");
  circleContainer.innerHTML = "";
  const start = currentCirclePage * circlesPerPage;
  const end = Math.min(start + circlesPerPage, questions.length);

  for (let i = start; i < end; i++) {
    const q = questions[i];
    let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
    circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
  }
}

function jumpToQuestion(index) {
  currentQuestion = index;
  loadQuestion(index);
}

function prevCirclePage() {
  if (currentCirclePage > 0) {
    currentCirclePage--;
    updateCircles();
  }
}

function nextCirclePage() {
  if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
    currentCirclePage++;
    updateCircles();
  }
}

function changeLanguage() {
  language = document.getElementById("languageSelect").value;
  loadQuestion(currentQuestion);
}

function submitQuiz() {
  let confirmation = confirm("Are you sure you want to submit the test?");
  if (!confirmation) return;

  let attempted = 0, notAttempted = 0, score = 0;
  const results = [];

  questions.forEach(q => {
      const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
      if (q.attempted) {
          attempted++;
          if (q.selected === correctAnswer) score++;
      } else {
          notAttempted++;
      }
      results.push({ 
          question: language === "en" ? q.question_en : q.question_hi,
          selected: q.selected || "Not Answered", 
          correct: correctAnswer 
      });
  });

  localStorage.setItem("attempted", attempted);
  localStorage.setItem("notAttempted", notAttempted);
  localStorage.setItem("score", score);
  localStorage.setItem("results", JSON.stringify(results));

  let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
  if (viewResult) {
      window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
  }
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! Submitting the quiz automatically.");
      submitQuiz();
    } else {
      timerElement.textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

window.onload = function () {
  startTimer();
  loadQuestion(currentQuestion);
};