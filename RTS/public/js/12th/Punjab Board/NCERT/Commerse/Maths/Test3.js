// # Matrix (unit-3)
const questions = [
  {
    num: 1,
    question_en: "What is the order of a matrix with 3 rows and 2 columns?",
    question_hi: "3 पंक्तियों और 2 स्तम्भों वाली मैट्रिक्स का क्रम क्या है?",
    options_en: ["3 × 2", "2 × 3", "3 + 2", "3 - 2"],
    options_hi: ["3 × 2", "2 × 3", "3 + 2", "3 - 2"],
    answer: "3 × 2",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which of the following is a square matrix?",
    question_hi: "निम्नलिखित में से कौन एक वर्ग मैट्रिक्स है?",
    options_en: ["2 × 3", "3 × 2", "2 × 2", "4 × 3"],
    options_hi: ["2 × 3", "3 × 2", "2 × 2", "4 × 3"],
    answer: "2 × 2",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "A matrix with only one row is called?",
    question_hi: "एक ऐसी मैट्रिक्स जिसमें केवल एक पंक्ति हो, उसे क्या कहते हैं?",
    options_en: ["Column matrix", "Row matrix", "Square matrix", "Zero matrix"],
    options_hi: ["स्तम्भ मैट्रिक्स", "पंक्ति मैट्रिक्स", "वर्ग मैट्रिक्स", "शून्य मैट्रिक्स"],
    answer: "Row matrix",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "If a matrix has equal number of rows and columns, it is called?",
    question_hi: "यदि किसी मैट्रिक्स में पंक्तियों और स्तम्भों की संख्या समान हो, तो वह कहलाती है?",
    options_en: ["Rectangular matrix", "Column matrix", "Row matrix", "Square matrix"],
    options_hi: ["आयताकार मैट्रिक्स", "स्तम्भ मैट्रिक्स", "पंक्ति मैट्रिक्स", "वर्ग मैट्रिक्स"],
    answer: "Square matrix",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which of the following is a diagonal matrix?",
    question_hi: "निम्नलिखित में से कौन एक विकर्ण मैट्रिक्स है?",
    options_en: ["[[1, 0], [0, 2]]", "[[0, 1], [1, 0]]", "[[1, 1], [1, 1]]", "[[0, 0], [0, 0]]"],
    options_hi: ["[[1, 0], [0, 2]]", "[[0, 1], [1, 0]]", "[[1, 1], [1, 1]]", "[[0, 0], [0, 0]]"],
    answer: "[[1, 0], [0, 2]]",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "A matrix with all elements zero is called?",
    question_hi: "एक मैट्रिक्स जिसमें सभी अवयव शून्य हों, क्या कहलाती है?",
    options_en: ["Null matrix", "Identity matrix", "Diagonal matrix", "Unit matrix"],
    options_hi: ["शून्य मैट्रिक्स", "पहचान मैट्रिक्स", "विकर्ण मैट्रिक्स", "यूनिट मैट्रिक्स"],
    answer: "Null matrix",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the transpose of a 2 × 3 matrix?",
    question_hi: "2 × 3 मैट्रिक्स का प्रतिलोम क्या होगा?",
    options_en: ["3 × 2", "2 × 2", "3 × 3", "No change"],
    options_hi: ["3 × 2", "2 × 2", "3 × 3", "कोई परिवर्तन नहीं"],
    answer: "3 × 2",
    attempted: false,
    selected: ""
  },
    {
      num: 8,
      question_en: "What condition must be satisfied to add two matrices?",
      question_hi: "दो मैट्रिक्स को जोड़ने के लिए कौन सी शर्त पूरी होनी चाहिए?",
      options_en: ["Same number of rows", "Same number of columns", "Same order", "Any matrices can be added"],
      options_hi: ["समान पंक्तियाँ हों", "समान स्तंभ हों", "समान क्रम हो", "कोई भी मैट्रिक्स जोड़े जा सकते हैं"],
      answer: "Same order",
      attempted: false,
      selected: ""
    },
    {
      num: 9,
      question_en: "If A = [[1,2],[3,4]] and B = [[4,3],[2,1]], then A + B = ?",
      question_hi: "यदि A = [[1,2],[3,4]] और B = [[4,3],[2,1]], तो A + B = ?",
      options_en: ["[[5,5],[5,5]]", "[[3,5],[1,5]]", "[[5,1],[1,5]]", "[[2,2],[6,6]]"],
      options_hi: ["[[5,5],[5,5]]", "[[3,5],[1,5]]", "[[5,1],[1,5]]", "[[2,2],[6,6]]"],
      answer: "[[5,5],[5,5]]",
      attempted: false,
      selected: ""
    },
    {
      num: 10,
      question_en: "Matrix addition is defined for matrices of?",
      question_hi: "मैट्रिक्स जोड़ किन मैट्रिक्स के लिए परिभाषित है?",
      options_en: ["Same number of rows", "Same number of columns", "Same order", "Any matrices"],
      options_hi: ["समान पंक्तियों वाली", "समान स्तंभों वाली", "समान क्रम वाली", "कोई भी मैट्रिक्स"],
      answer: "Same order",
      attempted: false,
      selected: ""
    },
    {
      num: 11,
      question_en: "What is the result of adding a matrix with zero matrix of same order?",
      question_hi: "समान क्रम की शून्य मैट्रिक्स को किसी मैट्रिक्स में जोड़ने पर परिणाम क्या होगा?",
      options_en: ["Zero matrix", "Same matrix", "Identity matrix", "Transpose of matrix"],
      options_hi: ["शून्य मैट्रिक्स", "समान मैट्रिक्स", "पहचान मैट्रिक्स", "मैट्रिक्स का प्रतिलोम"],
      answer: "Same matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 12,
      question_en: "Matrix addition is ______.",
      question_hi: "मैट्रिक्स जोड़ ______ होती है।",
      options_en: ["Commutative", "Associative", "Both A and B", "None"],
      options_hi: ["समुत्क्रमणीय", "सहचारी", "A और B दोनों", "कोई नहीं"],
      answer: "Both A and B",
      attempted: false,
      selected: ""
    },
    {
      num: 13,
      question_en: "If A and B are matrices of same order, then A + B = B + A is?",
      question_hi: "यदि A और B समान क्रम की मैट्रिक्स हैं, तो A + B = B + A क्या है?",
      options_en: ["Associative property", "Commutative property", "Distributive property", "Inverse property"],
      options_hi: ["सहचारी गुणधर्म", "समुत्क्रमणीय गुणधर्म", "वितरक गुणधर्म", "व्युत्क्रम गुणधर्म"],
      answer: "Commutative property",
      attempted: false,
      selected: ""
    },
    {
      num: 14,
      question_en: "Which of the following is the additive identity in matrix addition?",
      question_hi: "मैट्रिक्स जोड़ में निम्नलिखित में से कौन योग पहचान है?",
      options_en: ["Zero matrix", "Identity matrix", "Transpose of matrix", "Inverse of matrix"],
      options_hi: ["शून्य मैट्रिक्स", "पहचान मैट्रिक्स", "प्रतिलोम मैट्रिक्स", "व्युत्क्रम मैट्रिक्स"],
      answer: "Zero matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 15,
      question_en: "What is the additive inverse of matrix A?",
      question_hi: "मैट्रिक्स A का योग व्युत्क्रम क्या होता है?",
      options_en: ["A", "-A", "0", "Aᵗ"],
      options_hi: ["A", "-A", "0", "Aᵗ"],
      answer: "-A",
      attempted: false,
      selected: ""
    },
    {
      num: 16,
      question_en: "Which property is shown by A + (B + C) = (A + B) + C?",
      question_hi: "A + (B + C) = (A + B) + C किस गुणधर्म को दर्शाता है?",
      options_en: ["Commutative property", "Associative property", "Inverse property", "Distributive property"],
      options_hi: ["समुत्क्रमणीय गुणधर्म", "सहचारी गुणधर्म", "व्युत्क्रम गुणधर्म", "वितरक गुणधर्म"],
      answer: "Associative property",
      attempted: false,
      selected: ""
    },
    {
      num: 17,
      question_en: "Which matrix, when added to matrix A, gives A?",
      question_hi: "कौन सी मैट्रिक्स, A में जोड़ने पर A ही प्राप्त होती है?",
      options_en: ["Zero matrix", "Identity matrix", "Transpose of A", "Inverse of A"],
      options_hi: ["शून्य मैट्रिक्स", "पहचान मैट्रिक्स", "A का प्रतिलोम", "A का व्युत्क्रम"],
      answer: "Zero matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 18, 
      question_en: "Which matrix, when added to matrix A, gives A?",
      question_hi: "कौन सी मैट्रिक्स, A में जोड़ने पर A ही प्राप्त होती है?",
      options_en: ["Zero matrix", "Identity matrix", "Transpose of A", "Inverse of A"],
      options_hi: ["शून्य मैट्रिक्स", "पहचान मैट्रिक्स", "A का प्रतिलोम", "A का व्युत्क्रम"],
      answer: "Zero matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 19,
      question_en: "What is the result of A + (-A)?",
      question_hi: "A + (-A) का परिणाम क्या होगा?",
      options_en: ["A", "Zero matrix", "-A", "A²"],
      options_hi: ["A", "शून्य मैट्रिक्स", "-A", "A²"],
      answer: "Zero matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 20,
      question_en: "If A = [[1,2],[3,4]], then -A = ?",
      question_hi: "यदि A = [[1,2],[3,4]], तो -A क्या होगा?",
      options_en: ["[[-1,-2],[-3,-4]]", "[[1,-2],[-3,4]]", "[[-1,2],[3,-4]]", "[[1,2],[3,4]]"],
      options_hi: ["[[-1,-2],[-3,-4]]", "[[1,-2],[-3,4]]", "[[-1,2],[3,-4]]", "[[1,2],[3,4]]"],
      answer: "[[-1,-2],[-3,-4]]",
      attempted: false,
      selected: ""
    },
    {
      num: 21,
      question_en: "What is the order of the sum of two 2×2 matrices?",
      question_hi: "दो 2×2 मैट्रिक्स का योग किस क्रम का होता है?",
      options_en: ["2×2", "2×1", "1×2", "4×4"],
      options_hi: ["2×2", "2×1", "1×2", "4×4"],
      answer: "2×2",
      attempted: false,
      selected: ""
    },
    {
      num: 22,
      question_en: "What is the transpose of [[1, 2, 3]]?",
      question_hi: "[[1, 2, 3]] का प्रतिलोम क्या होगा?",
      options_en: ["[[1], [2], [3]]", "[[3, 2, 1]]", "[[1, 2, 3]]", "[[1, 2], [3]]"],
      options_hi: ["[[1], [2], [3]]", "[[3, 2, 1]]", "[[1, 2, 3]]", "[[1, 2], [3]]"],
      answer: "[[1], [2], [3]]",
      attempted: false,
      selected: ""
    },
    {
      num: 23,
      question_en: "Which of the following is true about matrix addition?",
      question_hi: "निम्न में से कौन मैट्रिक्स जोड़ के बारे में सत्य है?",
      options_en: ["Defined only for same order", "Defined for any matrix", "Always undefined", "Only for square matrices"],
      options_hi: ["केवल समान क्रम के लिए परिभाषित", "किसी भी मैट्रिक्स के लिए परिभाषित", "हमेशा अपरिभाषित", "केवल वर्ग मैट्रिक्स के लिए"],
      answer: "Defined only for same order",
      attempted: false,
      selected: ""
    },
    {
      num: 24,
      question_en: "If A = [[2,3],[4,5]] and B = [[1,1],[1,1]], then A - B = ?",
      question_hi: "यदि A = [[2,3],[4,5]] और B = [[1,1],[1,1]], तो A - B = ?",
      options_en: ["[[1,2],[3,4]]", "[[3,4],[5,6]]", "[[1,1],[1,1]]", "[[2,2],[3,4]]"],
      options_hi: ["[[1,2],[3,4]]", "[[3,4],[5,6]]", "[[1,1],[1,1]]", "[[2,2],[3,4]]"],
      answer: "[[1,2],[3,4]]",
      attempted: false,
      selected: ""
    },
    {
      num: 25,
      question_en: "Which matrix is both a row and a column matrix?",
      question_hi: "कौन सी मैट्रिक्स पंक्ति और स्तम्भ दोनों मैट्रिक्स होती है?",
      options_en: ["Zero matrix", "Square matrix", "Unit matrix", "Singleton matrix"],
      options_hi: ["शून्य मैट्रिक्स", "वर्ग मैट्रिक्स", "यूनिट मैट्रिक्स", "एकतत्त्वीय मैट्रिक्स"],
      answer: "Singleton matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 26,
      question_en: "A 1 × 1 matrix is also known as?",
      question_hi: "1 × 1 मैट्रिक्स को और क्या कहते हैं?",
      options_en: ["Singleton matrix", "Identity matrix", "Null matrix", "Square matrix"],
      options_hi: ["एकतत्त्वीय मैट्रिक्स", "पहचान मैट्रिक्स", "शून्य मैट्रिक्स", "वर्ग मैट्रिक्स"],
      answer: "Singleton matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 27,
      question_en: "Which matrix is symmetric about its main diagonal?",
      question_hi: "मुख्य विकर्ण के सापेक्ष सममित कौन सी मैट्रिक्स होती है?",
      options_en: ["Symmetric matrix", "Skew-symmetric matrix", "Diagonal matrix", "Row matrix"],
      options_hi: ["सममित मैट्रिक्स", "विकृत सममित मैट्रिक्स", "विकर्ण मैट्रिक्स", "पंक्ति मैट्रिक्स"],
      answer: "Symmetric matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 28,
      question_en: "If Aᵗ = -A, then A is called?",
      question_hi: "यदि Aᵗ = -A, तो A को क्या कहते हैं?",
      options_en: ["Symmetric matrix", "Skew-symmetric matrix", "Diagonal matrix", "Unit matrix"],
      options_hi: ["सममित मैट्रिक्स", "विकृत सममित मैट्रिक्स", "विकर्ण मैट्रिक्स", "यूनिट मैट्रिक्स"],
      answer: "Skew-symmetric matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 29,
      question_en: "Which matrix satisfies the property A + Aᵗ = 0?",
      question_hi: "कौन सी मैट्रिक्स A + Aᵗ = 0 गुणधर्म को संतुष्ट करती है?",
      options_en: ["Skew-symmetric matrix", "Symmetric matrix", "Identity matrix", "Null matrix"],
      options_hi: ["विकृत सममित मैट्रिक्स", "सममित मैट्रिक्स", "पहचान मैट्रिक्स", "शून्य मैट्रिक्स"],
      answer: "Skew-symmetric matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 30,
      question_en: "Transpose of a row matrix is a?",
      question_hi: "पंक्ति मैट्रिक्स का प्रतिलोम क्या होता है?",
      options_en: ["Column matrix", "Row matrix", "Square matrix", "Diagonal matrix"],
      options_hi: ["स्तम्भ मैट्रिक्स", "पंक्ति मैट्रिक्स", "वर्ग मैट्रिक्स", "विकर्ण मैट्रिक्स"],
      answer: "Column matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 31,
      question_en: "Transpose of a column matrix is a?",
      question_hi: "स्तम्भ मैट्रिक्स का प्रतिलोम क्या होता है?",
      options_en: ["Row matrix", "Column matrix", "Square matrix", "Singleton matrix"],
      options_hi: ["पंक्ति मैट्रिक्स", "स्तम्भ मैट्रिक्स", "वर्ग मैट्रिक्स", "एकतत्त्वीय मैट्रिक्स"],
      answer: "Row matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 32,
      question_en: "The transpose of a matrix changes its?",
      question_hi: "मैट्रिक्स का प्रतिलोम किसे बदल देता है?",
      options_en: ["Order", "Elements", "Values", "Type"],
      options_hi: ["क्रम", "तत्त्व", "मूल्य", "प्रकार"],
      answer: "Order",
      attempted: false,
      selected: ""
    },
    {
      num: 33,
      question_en: "If a matrix has 3 rows and 2 columns, what is its order?",
      question_hi: "यदि एक मैट्रिक्स में 3 पंक्तियाँ और 2 स्तम्भ हैं, तो इसका क्रम क्या होगा?",
      options_en: ["3×2", "2×3", "3×3", "2×2"],
      options_hi: ["3×2", "2×3", "3×3", "2×2"],
      answer: "3×2",
      attempted: false,
      selected: ""
    },
    {
      num: 34,
      question_en: "Which matrix is defined by all elements being zero?",
      question_hi: "कौन सी मैट्रिक्स सभी तत्वों के शून्य होने से परिभाषित होती है?",
      options_en: ["Zero matrix", "Identity matrix", "Unit matrix", "Diagonal matrix"],
      options_hi: ["शून्य मैट्रिक्स", "पहचान मैट्रिक्स", "यूनिट मैट्रिक्स", "विकर्ण मैट्रिक्स"],
      answer: "Zero matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 35,
      question_en: "Which matrix has all diagonal elements as 1 and all other elements as 0?",
      question_hi: "कौन सी मैट्रिक्स में सभी विकर्ण तत्व 1 होते हैं और सभी अन्य तत्व 0 होते हैं?",
      options_en: ["Identity matrix", "Zero matrix", "Diagonal matrix", "Unit matrix"],
      options_hi: ["पहचान मैट्रिक्स", "शून्य मैट्रिक्स", "विकर्ण मैट्रिक्स", "यूनिट मैट्रिक्स"],
      answer: "Identity matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 36,
      question_en: "If A is a square matrix, what is the order of A + Aᵗ?",
      question_hi: "यदि A एक वर्ग मैट्रिक्स है, तो A + Aᵗ का क्रम क्या होगा?",
      options_en: ["Same as A", "1×1", "2×2", "Square of A"],
      options_hi: ["A जैसा ही", "1×1", "2×2", "A का वर्ग"],
      answer: "Same as A",
      attempted: false,
      selected: ""
    },
    {
      num: 37,
      question_en: "Which of the following is a property of a square matrix?",
      question_hi: "निम्न में से कौन सी गुण विशेष रूप से वर्ग मैट्रिक्स की है?",
      options_en: ["Number of rows equal to number of columns", "Always has a determinant", "Only exists for n × n matrices", "All of the above"],
      options_hi: ["पंक्तियाँ और स्तम्भों की संख्या समान होती है", "हमेशा इसका निर्धारितांक होता है", "यह केवल n × n मैट्रिक्स के लिए अस्तित्व में होता है", "सभी उपर्युक्त"],
      answer: "All of the above",
      attempted: false,
      selected: ""
    },
    {
      num: 38,
      question_en: "What is the inverse of a 2×2 matrix?",
      question_hi: "2×2 मैट्रिक्स का प्रतिलोम क्या होता है?",
      options_en: ["Matrix that when multiplied by A gives the identity matrix", "Matrix that is the transpose of A", "Matrix with all elements reversed", "Matrix that is the determinant of A"],
      options_hi: ["वह मैट्रिक्स जो A के साथ गुणा करने पर पहचान मैट्रिक्स देता है", "वह मैट्रिक्स जो A का प्रतिलोम होता है", "वह मैट्रिक्स जिसके सभी तत्व उलटे होते हैं", "वह मैट्रिक्स जो A का निर्धारितांक होता है"],
      answer: "Matrix that when multiplied by A gives the identity matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 39,
      question_en: "What is the condition for the existence of the inverse of a matrix?",
      question_hi: "मैट्रिक्स के प्रतिलोम के अस्तित्व के लिए शर्त क्या है?",
      options_en: ["Matrix must be square", "Matrix must have non-zero determinant", "Matrix must be symmetric", "Matrix must be skew-symmetric"],
      options_hi: ["मैट्रिक्स वर्ग मैट्रिक्स होना चाहिए", "मैट्रिक्स का निर्धारितांक शून्य नहीं होना चाहिए", "मैट्रिक्स सममित होना चाहिए", "मैट्रिक्स विकृत सममित होना चाहिए"],
      answer: "Matrix must have non-zero determinant",
      attempted: false,
      selected: ""
    },
    {
      num: 40,
      question_en: "If A is a square matrix, what is the determinant of A + Aᵗ?",
      question_hi: "यदि A एक वर्ग मैट्रिक्स है, तो A + Aᵗ का निर्धारितांक क्या होगा?",
      options_en: ["Determinant of A", "Determinant of Aᵗ", "Zero", "Sum of determinants of A and Aᵗ"],
      options_hi: ["A का निर्धारितांक", "Aᵗ का निर्धारितांक", "शून्य", "A और Aᵗ के निर्धारितांकों का योग"],
      answer: "Zero",
      attempted: false,
      selected: ""
    },
    {
      num: 41,
      question_en: "Which of the following matrices is always diagonal?",
      question_hi: "निम्न में से कौन सी मैट्रिक्स हमेशा विकर्ण होती है?",
      options_en: ["Identity matrix", "Zero matrix", "Symmetric matrix", "None of the above"],
      options_hi: ["पहचान मैट्रिक्स", "शून्य मैट्रिक्स", "सममित मैट्रिक्स", "उपर्युक्त में से कोई नहीं"],
      answer: "Identity matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 42,
      question_en: "What is the order of a matrix with 4 rows and 6 columns?",
      question_hi: "4 पंक्तियाँ और 6 स्तम्भों वाली मैट्रिक्स का क्रम क्या होगा?",
      options_en: ["4×6", "6×4", "4×4", "6×6"],
      options_hi: ["4×6", "6×4", "4×4", "6×6"],
      answer: "4×6",
      attempted: false,
      selected: ""
    },
    {
      num: 43,
      question_en: "Which of the following matrices is a scalar matrix?",
      question_hi: "निम्न में से कौन सी मैट्रिक्स एक परिमाण मैट्रिक्स होती है?",
      options_en: ["Identity matrix", "Diagonal matrix", "Zero matrix", "None of the above"],
      options_hi: ["पहचान मैट्रिक्स", "विकर्ण मैट्रिक्स", "शून्य मैट्रिक्स", "उपर्युक्त में से कोई नहीं"],
      answer: "Diagonal matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 44,
      question_en: "What is the identity matrix for a 3×3 matrix?",
      question_hi: "3×3 मैट्रिक्स के लिए पहचान मैट्रिक्स क्या होती है?",
      options_en: ["[[1,0,0], [0,1,0], [0,0,1]]", "[[0,0,0], [0,0,0], [0,0,0]]", "[[1,1,1], [1,1,1], [1,1,1]]", "[[0,1,0], [1,0,1], [0,1,0]]"],
      options_hi: ["[[1,0,0], [0,1,0], [0,0,1]]", "[[0,0,0], [0,0,0], [0,0,0]]", "[[1,1,1], [1,1,1], [1,1,1]]", "[[0,1,0], [1,0,1], [0,1,0]]"],
      answer: "[[1,0,0], [0,1,0], [0,0,1]]",
      attempted: false,
      selected: ""
    },
    {
      num: 45,
      question_en: "What is the determinant of a 2×2 identity matrix?",
      question_hi: "2×2 पहचान मैट्रिक्स का निर्धारितांक क्या होता है?",
      options_en: ["1", "0", "2", "-1"],
      options_hi: ["1", "0", "2", "-1"],
      answer: "1",
      attempted: false,
      selected: ""
    },
    {
      num: 46,
      question_en: "If A is a matrix and Aᵗ = A, then A is?",
      question_hi: "यदि A एक मैट्रिक्स है और Aᵗ = A है, तो A क्या होगा?",
      options_en: ["Symmetric matrix", "Skew-symmetric matrix", "Diagonal matrix", "Identity matrix"],
      options_hi: ["सममित मैट्रिक्स", "विकृत सममित मैट्रिक्स", "विकर्ण मैट्रिक्स", "पहचान मैट्रिक्स"],
      answer: "Symmetric matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 47,
      question_en: "If A is a skew-symmetric matrix, what is A + Aᵗ?",
      question_hi: "यदि A विकृत सममित मैट्रिक्स है, तो A + Aᵗ क्या होगा?",
      options_en: ["Zero matrix", "Identity matrix", "Diagonal matrix", "Symmetric matrix"],
      options_hi: ["शून्य मैट्रिक्स", "पहचान मैट्रिक्स", "विकर्ण मैट्रिक्स", "सममित मैट्रिक्स"],
      answer: "Zero matrix",
      attempted: false,
      selected: ""
    },
    {
      num: 48,
      question_en: "Which of the following matrices is a row matrix?",
      question_hi: "निम्न में से कौन सी मैट्रिक्स पंक्ति मैट्रिक्स होती है?",
      options_en: ["[1,2,3]", "[[1],[2],[3]]", "[[1,2], [3,4]]", "[[1,2,3,4,5]]"],
      options_hi: ["[1,2,3]", "[[1],[2],[3]]", "[[1,2], [3,4]]", "[[1,2,3,4,5]]"],
      answer: "[1,2,3]",
      attempted: false,
      selected: ""
    },
    {
      num: 49,
      question_en: "Which of the following matrices is a column matrix?",
      question_hi: "निम्न में से कौन सी मैट्रिक्स स्तम्भ मैट्रिक्स होती है?",
      options_en: ["[1,2,3]", "[[1],[2],[3]]", "[[1,2], [3,4]]", "[[1,2,3,4,5]]"],
      options_hi: ["[1,2,3]", "[[1],[2],[3]]", "[[1,2], [3,4]]", "[[1,2,3,4,5]]"],
      answer: "[[1],[2],[3]]",
      attempted: false,
      selected: ""
    },
    {
      num: 50,
      question_en: "The matrix which has only one row is called?",
      question_hi: "वह मैट्रिक्स जो केवल एक पंक्ति होती है, क्या कहलाती है?",
      options_en: ["Row matrix", "Column matrix", "Square matrix", "Diagonal matrix"],
      options_hi: ["पंक्ति मैट्रिक्स", "स्तम्भ मैट्रिक्स", "वर्ग मैट्रिक्स", "विकर्ण मैट्रिक्स"],
      answer: "Row matrix",
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
      if (q.attempted) {
          attempted++;
          if (q.selected === q.answer) score++;
      } else {
          notAttempted++;
      }
      results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
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
