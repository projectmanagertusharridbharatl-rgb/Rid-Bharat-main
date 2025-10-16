// # Matrix (unit-3)
const questions = [
  {
    num: 1,
    question_en: "A matrix with only one row is called?",
    question_hi: "एक ऐसी मैट्रिक्स जिसमें केवल एक पंक्ति हो, उसे क्या कहते हैं?",
    options_en: ["Column matrix", "Row matrix", "Square matrix", "Zero matrix"],
    options_hi: ["स्तम्भ मैट्रिक्स", "पंक्ति मैट्रिक्स", "वर्ग मैट्रिक्स", "शून्य मैट्रिक्स"],
    answer_en: "Row matrix",
    answer_hi: "पंक्ति मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "A matrix with only one column is called?",
    question_hi: "एक ऐसी मैट्रिक्स जिसमें केवल एक स्तम्भ हो, उसे क्या कहते हैं?",
    options_en: ["Column matrix", "Row matrix", "Square matrix", "Zero matrix"],
    options_hi: ["स्तम्भ मैट्रिक्स", "पंक्ति मैट्रिक्स", "वर्ग मैट्रिक्स", "शून्य मैट्रिक्स"],
    answer_en: "Column matrix",
    answer_hi: "स्तम्भ मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "A matrix having equal number of rows and columns is called?",
    question_hi: "जिस मैट्रिक्स में पंक्तियों और स्तम्भों की संख्या समान हो, उसे क्या कहते हैं?",
    options_en: ["Square matrix", "Rectangular matrix", "Zero matrix", "Diagonal matrix"],
    options_hi: ["वर्ग मैट्रिक्स", "आयताकार मैट्रिक्स", "शून्य मैट्रिक्स", "व्युत्क्रम मैट्रिक्स"],
    answer_en: "Square matrix",
    answer_hi: "वर्ग मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "A matrix in which all elements are zero is called?",
    question_hi: "ऐसी मैट्रिक्स जिसमें सभी तत्त्व शून्य हों, उसे क्या कहते हैं?",
    options_en: ["Zero matrix", "Identity matrix", "Diagonal matrix", "Scalar matrix"],
    options_hi: ["शून्य मैट्रिक्स", "पहचान मैट्रिक्स", "व्युत्क्रम मैट्रिक्स", "स्केलर मैट्रिक्स"],
    answer_en: "Zero matrix",
    answer_hi: "शून्य मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "A square matrix in which all elements outside the main diagonal are zero is called?",
    question_hi: "ऐसी वर्ग मैट्रिक्स जिसमें मुख्य व्युत्क्रम के बाहर सभी तत्त्व शून्य हों, उसे क्या कहते हैं?",
    options_en: ["Diagonal matrix", "Scalar matrix", "Identity matrix", "Zero matrix"],
    options_hi: ["व्युत्क्रम मैट्रिक्स", "स्केलर मैट्रिक्स", "पहचान मैट्रिक्स", "शून्य मैट्रिक्स"],
    answer_en: "Diagonal matrix",
    answer_hi: "व्युत्क्रम मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "A diagonal matrix in which all diagonal elements are equal is called?",
    question_hi: "ऐसी व्युत्क्रम मैट्रिक्स जिसमें सभी व्युत्क्रम तत्त्व समान हों, उसे क्या कहते हैं?",
    options_en: ["Scalar matrix", "Identity matrix", "Zero matrix", "Row matrix"],
    options_hi: ["स्केलर मैट्रिक्स", "पहचान मैट्रिक्स", "शून्य मैट्रिक्स", "पंक्ति मैट्रिक्स"],
    answer_en: "Scalar matrix",
    answer_hi: "स्केलर मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "A diagonal matrix in which all diagonal elements are 1 is called?",
    question_hi: "ऐसी व्युत्क्रम मैट्रिक्स जिसमें सभी व्युत्क्रम तत्त्व 1 हों, उसे क्या कहते हैं?",
    options_en: ["Identity matrix", "Scalar matrix", "Zero matrix", "Square matrix"],
    options_hi: ["पहचान मैट्रिक्स", "स्केलर मैट्रिक्स", "शून्य मैट्रिक्स", "वर्ग मैट्रिक्स"],
    answer_en: "Identity matrix",
    answer_hi: "पहचान मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "The transpose of a matrix is obtained by?",
    question_hi: "मैट्रिक्स का प्रतिलिपि कैसे प्राप्त की जाती है?",
    options_en: ["Interchanging rows and columns", "Adding all elements", "Multiplying all elements", "Subtracting all elements"],
    options_hi: ["पंक्तियों और स्तम्भों का स्थान बदलना", "सभी तत्त्वों का जोड़", "सभी तत्त्वों का गुणा", "सभी तत्त्वों का घटाव"],
    answer_en: "Interchanging rows and columns",
    answer_hi: "पंक्तियों और स्तम्भों का स्थान बदलना",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "If A is a matrix, then the transpose of the transpose of A is?",
    question_hi: "यदि A मैट्रिक्स है, तो A के प्रतिलिपि का प्रतिलिपि क्या होगा?",
    options_en: ["A", "-A", "Zero matrix", "Identity matrix"],
    options_hi: ["A", "-A", "शून्य मैट्रिक्स", "पहचान मैट्रिक्स"],
    answer_en: "A",
    answer_hi: "A",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "The sum of two matrices is defined only when?",
    question_hi: "दो मैट्रिक्स का योग कब परिभाषित होता है?",
    options_en: ["They have the same order", "They have different orders", "They are square matrices", "They are zero matrices"],
    options_hi: ["उनका क्रम समान हो", "उनका क्रम भिन्न हो", "वे वर्ग मैट्रिक्स हों", "वे शून्य मैट्रिक्स हों"],
    answer_en: "They have the same order",
    answer_hi: "उनका क्रम समान हो",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "The product of two matrices A (m×n) and B (p×q) is defined only when?",
    question_hi: "दो मैट्रिक्स A (m×n) और B (p×q) का गुणा कब परिभाषित होता है?",
    options_en: ["n = p", "m = q", "m = p", "n = q"],
    options_hi: ["n = p", "m = q", "m = p", "n = q"],
    answer_en: "n = p",
    answer_hi: "n = p",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which matrix is called symmetric?",
    question_hi: "ऐसी मैट्रिक्स जिसे सममित मैट्रिक्स कहते हैं?",
    options_en: ["A matrix equal to its transpose", "A zero matrix", "A scalar matrix", "A diagonal matrix"],
    options_hi: ["अपनी प्रतिलिपि के बराबर मैट्रिक्स", "शून्य मैट्रिक्स", "स्केलर मैट्रिक्स", "व्युत्क्रम मैट्रिक्स"],
    answer_en: "A matrix equal to its transpose",
    answer_hi: "अपनी प्रतिलिपि के बराबर मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which matrix is called skew-symmetric?",
    question_hi: "ऐसी मैट्रिक्स जिसे विषम सममित मैट्रिक्स कहते हैं?",
    options_en: ["A matrix whose transpose is negative of itself", "A zero matrix", "An identity matrix", "A scalar matrix"],
    options_hi: ["ऐसी मैट्रिक्स जिसकी प्रतिलिपि उसका ऋणात्मक हो", "शून्य मैट्रिक्स", "पहचान मैट्रिक्स", "स्केलर मैट्रिक्स"],
    answer_en: "A matrix whose transpose is negative of itself",
    answer_hi: "ऐसी मैट्रिक्स जिसकी प्रतिलिपि उसका ऋणात्मक हो",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "If A is a skew-symmetric matrix, then the diagonal elements of A are?",
    question_hi: "यदि A एक विषम सममित मैट्रिक्स है, तो A के व्युत्क्रम तत्त्व क्या होंगे?",
    options_en: ["Zero", "One", "Minus One", "Equal to 2"],
    options_hi: ["शून्य", "एक", "माइनस एक", "2 के बराबर"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which of the following is an example of a scalar matrix?",
    question_hi: "निम्नलिखित में से कौन स्केलर मैट्रिक्स का उदाहरण है?",
    options_en: [
      "[[2,0],[0,2]]",
      "[[1,0],[0,0]]",
      "[[0,1],[1,0]]",
      "[[1,1],[1,1]]"
    ],
    options_hi: [
      "[[2,0],[0,2]]",
      "[[1,0],[0,0]]",
      "[[0,1],[1,0]]",
      "[[1,1],[1,1]]"
    ],
    answer_en: "[[2,0],[0,2]]",
    answer_hi: "[[2,0],[0,2]]",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "What is the order of matrix A if it has 3 rows and 4 columns?",
    question_hi: "यदि मैट्रिक्स A में 3 पंक्तियाँ और 4 स्तम्भ हैं, तो इसका क्रम क्या होगा?",
    options_en: ["3×4", "4×3", "7", "12"],
    options_hi: ["3×4", "4×3", "7", "12"],
    answer_en: "3×4",
    answer_hi: "3×4",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which of the following matrices is a zero matrix?",
    question_hi: "निम्नलिखित में से कौन-सी मैट्रिक्स शून्य मैट्रिक्स है?",
    options_en: [
      "[[0,0],[0,0]]",
      "[[1,0],[0,1]]",
      "[[0,1],[1,0]]",
      "[[1,1],[1,1]]"
    ],
    options_hi: [
      "[[0,0],[0,0]]",
      "[[1,0],[0,1]]",
      "[[0,1],[1,0]]",
      "[[1,1],[1,1]]"
    ],
    answer_en: "[[0,0],[0,0]]",
    answer_hi: "[[0,0],[0,0]]",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "If A and B are two matrices of the same order, then A + B is?",
    question_hi: "यदि A और B समान क्रम की दो मैट्रिक्स हैं, तो A + B क्या होगा?",
    options_en: ["A matrix of same order", "Zero matrix", "Identity matrix", "Scalar matrix"],
    options_hi: ["समान क्रम की मैट्रिक्स", "शून्य मैट्रिक्स", "पहचान मैट्रिक्स", "स्केलर मैट्रिक्स"],
    answer_en: "A matrix of same order",
    answer_hi: "समान क्रम की मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "The element at ith row and jth column of a matrix A is denoted as?",
    question_hi: "मैट्रिक्स A के iवीं पंक्ति और jवीं स्तम्भ में तत्त्व को कैसे दर्शाया जाता है?",
    options_en: ["a_ij", "a_ji", "a_ii", "a_jj"],
    options_hi: ["a_ij", "a_ji", "a_ii", "a_jj"],
    answer_en: "a_ij",
    answer_hi: "a_ij",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "The transpose of a symmetric matrix is?",
    question_hi: "सममित मैट्रिक्स का प्रतिलिपि क्या होता है?",
    options_en: ["Same as the matrix", "Zero matrix", "Negative of the matrix", "Scalar matrix"],
    options_hi: ["मूल मैट्रिक्स के समान", "शून्य मैट्रिक्स", "मूल मैट्रिक्स का ऋणात्मक", "स्केलर मैट्रिक्स"],
    answer_en: "Same as the matrix",
    answer_hi: "मूल मैट्रिक्स के समान",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "The inverse of a matrix A is denoted by?",
    question_hi: "मैट्रिक्स A का व्युत्क्रम किस प्रकार दर्शाया जाता है?",
    options_en: ["A⁻¹", "A", "Aᵗ", "1/A"],
    options_hi: ["A⁻¹", "A", "Aᵗ", "1/A"],
    answer_en: "A⁻¹",
    answer_hi: "A⁻¹",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which of the following is true for identity matrix I?",
    question_hi: "पहचान मैट्रिक्स I के लिए कौन सा कथन सही है?",
    options_en: ["A × I = A", "I × I = 0", "A + I = 0", "I = 0"],
    options_hi: ["A × I = A", "I × I = 0", "A + I = 0", "I = 0"],
    answer_en: "A × I = A",
    answer_hi: "A × I = A",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "If the order of matrix A is 3×3, how many elements does it have?",
    question_hi: "यदि मैट्रिक्स A का क्रम 3×3 है, तो इसमें कितने तत्त्व होंगे?",
    options_en: ["9", "6", "3", "12"],
    options_hi: ["9", "6", "3", "12"],
    answer_en: "9",
    answer_hi: "9",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which of the following matrices is not square?",
    question_hi: "निम्नलिखित में से कौन सी मैट्रिक्स वर्ग मैट्रिक्स नहीं है?",
    options_en: [
      "[[1,2,3],[4,5,6]]",
      "[[1,0],[0,1]]",
      "[[2,0],[0,2]]",
      "[[3,0,0],[0,3,0],[0,0,3]]"
    ],
    options_hi: [
      "[[1,2,3],[4,5,6]]",
      "[[1,0],[0,1]]",
      "[[2,0],[0,2]]",
      "[[3,0,0],[0,3,0],[0,0,3]]"
    ],
    answer_en: "[[1,2,3],[4,5,6]]",
    answer_hi: "[[1,2,3],[4,5,6]]",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "If A and B are matrices such that AB = BA, then matrices A and B are said to be?",
    question_hi: "यदि मैट्रिक्स A और B के लिए AB = BA हो, तो उन्हें क्या कहा जाता है?",
    options_en: ["Commutative", "Associative", "Distributive", "Symmetric"],
    options_hi: ["परिवर्तनीय", "संघटक", "वितरणीय", "सममित"],
    answer_en: "Commutative",
    answer_hi: "परिवर्तनीय",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "A matrix with only one column is called?",
    question_hi: "एक ऐसी मैट्रिक्स जिसमें केवल एक स्तम्भ हो, उसे क्या कहते हैं?",
    options_en: ["Column matrix", "Row matrix", "Square matrix", "Zero matrix"],
    options_hi: ["स्तम्भ मैट्रिक्स", "पंक्ति मैट्रिक्स", "वर्ग मैट्रिक्स", "शून्य मैट्रिक्स"],
    answer_en: "Column matrix",
    answer_hi: "स्तम्भ मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the order of a 3x3 matrix?",
    question_hi: "3x3 मैट्रिक्स का क्रम क्या होता है?",
    options_en: ["3", "6", "9", "None of these"],
    options_hi: ["3", "6", "9", "इनमें से कोई नहीं"],
    answer_en: "3",
    answer_hi: "3",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "The sum of two matrices is defined if and only if?",
    question_hi: "दो मैट्रिक्स का योग कब परिभाषित होता है?",
    options_en: [
      "They have the same order",
      "They have different orders",
      "They are square matrices",
      "They have equal determinants"
    ],
    options_hi: [
      "उनका क्रम समान हो",
      "उनका क्रम भिन्न हो",
      "वे वर्ग मैट्रिक्स हों",
      "उनके डेटरमिनेंट समान हों"
    ],
    answer_en: "They have the same order",
    answer_hi: "उनका क्रम समान हो",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "If A and B are two matrices of the same order, then A + B is?",
    question_hi: "यदि A और B दो समान क्रम की मैट्रिक्स हैं, तो A + B क्या होगा?",
    options_en: [
      "Matrix of the same order",
      "Matrix of different order",
      "Zero matrix",
      "Not defined"
    ],
    options_hi: [
      "समान क्रम की मैट्रिक्स",
      "भिन्न क्रम की मैट्रिक्स",
      "शून्य मैट्रिक्स",
      "परिभाषित नहीं"
    ],
    answer_en: "Matrix of the same order",
    answer_hi: "समान क्रम की मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Transpose of a matrix is obtained by?",
    question_hi: "किसी मैट्रिक्स का ट्रांसपोज़ कैसे प्राप्त किया जाता है?",
    options_en: [
      "Interchanging rows and columns",
      "Adding rows and columns",
      "Subtracting rows and columns",
      "Multiplying rows and columns"
    ],
    options_hi: [
      "पंक्तियों और स्तंभों को बदलना",
      "पंक्तियों और स्तंभों को जोड़ना",
      "पंक्तियों और स्तंभों को घटाना",
      "पंक्तियों और स्तंभों को गुणा करना"
    ],
    answer_en: "Interchanging rows and columns",
    answer_hi: "पंक्तियों और स्तंभों को बदलना",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "If A is a matrix of order m x n, then the order of Aᵀ (transpose of A) is?",
    question_hi: "यदि A मैट्रिक्स का क्रम m x n हो, तो Aᵀ (A का ट्रांसपोज़) का क्रम क्या होगा?",
    options_en: ["m x n", "n x m", "m x m", "n x n"],
    options_hi: ["m x n", "n x m", "m x m", "n x n"],
    answer_en: "n x m",
    answer_hi: "n x m",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "A square matrix which is equal to its transpose is called?",
    question_hi: "वह वर्ग मैट्रिक्स जो अपने ट्रांसपोज़ के बराबर हो, उसे क्या कहते हैं?",
    options_en: [
      "Symmetric matrix",
      "Skew-symmetric matrix",
      "Zero matrix",
      "Identity matrix"
    ],
    options_hi: [
      "समानांतर मैट्रिक्स",
      "विषम समानांतर मैट्रिक्स",
      "शून्य मैट्रिक्स",
      "पहचान मैट्रिक्स"
    ],
    answer_en: "Symmetric matrix",
    answer_hi: "समानांतर मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "A square matrix which is equal to negative of its transpose is called?",
    question_hi: "वह वर्ग मैट्रिक्स जो अपने ट्रांसपोज़ के ऋणात्मक के बराबर हो, उसे क्या कहते हैं?",
    options_en: [
      "Skew-symmetric matrix",
      "Symmetric matrix",
      "Zero matrix",
      "Diagonal matrix"
    ],
    options_hi: [
      "विषम समानांतर मैट्रिक्स",
      "समानांतर मैट्रिक्स",
      "शून्य मैट्रिक्स",
      "आयताकार मैट्रिक्स"
    ],
    answer_en: "Skew-symmetric matrix",
    answer_hi: "विषम समानांतर मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "The diagonal elements of a skew-symmetric matrix are always?",
    question_hi: "विषम समानांतर मैट्रिक्स के विकर्ण तत्व हमेशा क्या होते हैं?",
    options_en: ["Zero", "One", "Negative", "Positive"],
    options_hi: ["शून्य", "एक", "ऋणात्मक", "धनात्मक"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "The product of two matrices A and B is defined if?",
    question_hi: "दो मैट्रिक्स A और B का गुणन कब परिभाषित होता है?",
    options_en: [
      "Number of columns of A = Number of rows of B",
      "Number of rows of A = Number of rows of B",
      "Number of columns of A = Number of columns of B",
      "None of these"
    ],
    options_hi: [
      "A के स्तम्भों की संख्या = B की पंक्तियों की संख्या",
      "A की पंक्तियों की संख्या = B की पंक्तियों की संख्या",
      "A के स्तम्भों की संख्या = B के स्तम्भों की संख्या",
      "इनमें से कोई नहीं"
    ],
    answer_en: "Number of columns of A = Number of rows of B",
    answer_hi: "A के स्तम्भों की संख्या = B की पंक्तियों की संख्या",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "If A is a 2x3 matrix and B is a 3x4 matrix, what will be the order of AB?",
    question_hi: "यदि A मैट्रिक्स 2x3 का हो और B मैट्रिक्स 3x4 का हो, तो AB का क्रम क्या होगा?",
    options_en: ["2x4", "3x3", "2x3", "3x4"],
    options_hi: ["2x4", "3x3", "2x3", "3x4"],
    answer_en: "2x4",
    answer_hi: "2x4",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Matrix multiplication is?",
    question_hi: "मैट्रिक्स गुणन किस प्रकार होता है?",
    options_en: [
      "Not commutative",
      "Commutative",
      "Associative",
      "Both Commutative and Associative"
    ],
    options_hi: [
      "अपरिवर्तनीय",
      "परिवर्तनीय",
      "संघटक",
      "परिवर्तनीय और संघटक दोनों"
    ],
    answer_en: "Not commutative",
    answer_hi: "अपरिवर्तनीय",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "The identity matrix of order n is denoted by?",
    question_hi: "क्रम n की पहचान मैट्रिक्स को क्या कहते हैं?",
    options_en: ["Iₙ", "0", "Eₙ", "Dₙ"],
    options_hi: ["Iₙ", "0", "Eₙ", "Dₙ"],
    answer_en: "Iₙ",
    answer_hi: "Iₙ",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "The determinant of the identity matrix is?",
    question_hi: "पहचान मैट्रिक्स का डेटरमिनेंट क्या होता है?",
    options_en: ["1", "0", "n", "-1"],
    options_hi: ["1", "0", "n", "-1"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "If A is any square matrix, then A + 0 (zero matrix) equals?",
    question_hi: "यदि A कोई वर्ग मैट्रिक्स हो, तो A + 0 (शून्य मैट्रिक्स) क्या होगा?",
    options_en: [
      "A",
      "0",
      "2A",
      "Undefined"
    ],
    options_hi: [
      "A",
      "0",
      "2A",
      "परिभाषित नहीं"
    ],
    answer_en: "A",
    answer_hi: "A",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "If A is a square matrix, then the matrix A - A equals?",
    question_hi: "यदि A वर्ग मैट्रिक्स हो, तो A - A क्या होगा?",
    options_en: [
      "Zero matrix",
      "Identity matrix",
      "A",
      "Undefined"
    ],
    options_hi: [
      "शून्य मैट्रिक्स",
      "पहचान मैट्रिक्स",
      "A",
      "परिभाषित नहीं"
    ],
    answer_en: "Zero matrix",
    answer_hi: "शून्य मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "A diagonal matrix is a matrix in which all elements are zero except?",
    question_hi: "एक विकर्ण मैट्रिक्स वह मैट्रिक्स होता है जिसमें सभी तत्व शून्य होते हैं सिवाय?",
    options_en: ["Diagonal elements", "First row", "First column", "Last row"],
    options_hi: ["विकर्ण तत्व", "पहली पंक्ति", "पहला स्तम्भ", "आखिरी पंक्ति"],
    answer_en: "Diagonal elements",
    answer_hi: "विकर्ण तत्व",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "A scalar matrix is a diagonal matrix in which all diagonal elements are?",
    question_hi: "स्केलर मैट्रिक्स वह विकर्ण मैट्रिक्स होता है जिसमें सभी विकर्ण तत्व?",
    options_en: [
      "Are equal",
      "Are zero",
      "Are different",
      "Are negative"
    ],
    options_hi: [
      "समान होते हैं",
      "शून्य होते हैं",
      "अलग-अलग होते हैं",
      "ऋणात्मक होते हैं"
    ],
    answer_en: "Are equal",
    answer_hi: "समान होते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "A matrix with all elements zero is called?",
    question_hi: "जिस मैट्रिक्स के सभी तत्व शून्य होते हैं, उसे क्या कहते हैं?",
    options_en: ["Zero matrix", "Identity matrix", "Diagonal matrix", "Scalar matrix"],
    options_hi: ["शून्य मैट्रिक्स", "पहचान मैट्रिक्स", "विकर्ण मैट्रिक्स", "स्केलर मैट्रिक्स"],
    answer_en: "Zero matrix",
    answer_hi: "शून्य मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "The sum of two zero matrices is?",
    question_hi: "दो शून्य मैट्रिक्स का योग क्या होगा?",
    options_en: ["Zero matrix", "Identity matrix", "Scalar matrix", "Diagonal matrix"],
    options_hi: ["शून्य मैट्रिक्स", "पहचान मैट्रिक्स", "स्केलर मैट्रिक्स", "विकर्ण मैट्रिक्स"],
    answer_en: "Zero matrix",
    answer_hi: "शून्य मैट्रिक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "If A is a matrix and I is the identity matrix, then AI equals?",
    question_hi: "यदि A मैट्रिक्स हो और I पहचान मैट्रिक्स हो, तो AI क्या होगा?",
    options_en: [
      "A",
      "I",
      "Zero matrix",
      "Undefined"
    ],
    options_hi: [
      "A",
      "I",
      "शून्य मैट्रिक्स",
      "परिभाषित नहीं"
    ],
    answer_en: "A",
    answer_hi: "A",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "If A is a matrix of order m x n, and B is a matrix of order p x q, then AB is defined only if?",
    question_hi: "यदि A मैट्रिक्स का क्रम m x n हो और B मैट्रिक्स का क्रम p x q हो, तो AB कब परिभाषित होगा?",
    options_en: [
      "n = p",
      "m = q",
      "m = p",
      "n = q"
    ],
    options_hi: [
      "n = p",
      "m = q",
      "m = p",
      "n = q"
    ],
    answer_en: "n = p",
    answer_hi: "n = p",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "In matrix multiplication, if AB is defined, then BA?",
    question_hi: "मैट्रिक्स गुणा में यदि AB परिभाषित है, तो BA?",
    options_en: [
      "May or may not be defined",
      "Is always defined",
      "Is never defined",
      "Is equal to AB"
    ],
    options_hi: [
      "हो सकता है या नहीं हो सकता",
      "हमेशा परिभाषित है",
      "कभी नहीं परिभाषित है",
      "AB के बराबर है"
    ],
    answer_en: "May or may not be defined",
    answer_hi: "हो सकता है या नहीं हो सकता",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "The transpose of a product of two matrices A and B is?",
    question_hi: "दो मैट्रिक्स A और B के गुणन का ट्रांसपोज़ क्या होगा?",
    options_en: [
      "(AB)ᵀ = BᵀAᵀ",
      "(AB)ᵀ = AᵀBᵀ",
      "(AB)ᵀ = AB",
      "(AB)ᵀ = BA"
    ],
    options_hi: [
      "(AB)ᵀ = BᵀAᵀ",
      "(AB)ᵀ = AᵀBᵀ",
      "(AB)ᵀ = AB",
      "(AB)ᵀ = BA"
    ],
    answer_en: "(AB)ᵀ = BᵀAᵀ",
    answer_hi: "(AB)ᵀ = BᵀAᵀ",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "If A is a symmetric matrix, then Aᵀ equals?",
    question_hi: "यदि A समानांतर मैट्रिक्स हो, तो Aᵀ क्या होगा?",
    options_en: [
      "A",
      "-A",
      "Zero matrix",
      "Identity matrix"
    ],
    options_hi: [
      "A",
      "-A",
      "शून्य मैट्रिक्स",
      "पहचान मैट्रिक्स"
    ],
    answer_en: "A",
    answer_hi: "A",
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
