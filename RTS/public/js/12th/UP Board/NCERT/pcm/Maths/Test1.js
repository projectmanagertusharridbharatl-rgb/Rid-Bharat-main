// # relationsAndFunctions (unit-1)
const questions = [
    {
      num: 1,
      question_en: "What is the domain of the function f(x) = 1/x?",
      question_hi: "फलन f(x) = 1/x का परिभाग क्या है?",
      options_en: ["x ≠ 0", "x > 0", "x < 0", "x = 0"],
      options_hi: ["x ≠ 0", "x > 0", "x < 0", "x = 0"],
      answer: "x ≠ 0",
      attempted: false,
      selected: ""
    },
    {
      num: 2,
      question_en: "Which of the following is a function?",
      question_hi: "निम्नलिखित में से कौन एक फलन है?",
      options_en: ["{(1,2), (1,3)}", "{(1,2), (2,3)}", "{(2,3), (2,4)}", "{(3,4), (4,3), (3,2)}"],
      options_hi: ["{(1,2), (1,3)}", "{(1,2), (2,3)}", "{(2,3), (2,4)}", "{(3,4), (4,3), (3,2)}"],
      answer: "{(1,2), (2,3)}",
      attempted: false,
      selected: ""
    },
    {
      num: 3,
      question_en: "What is the range of f(x) = x² where x ∈ R?",
      question_hi: "जहाँ x ∈ R, वहाँ f(x) = x² का परास क्या है?",
      options_en: ["[0, ∞)", "(-∞, ∞)", "(-∞, 0]", "[1, ∞)"],
      options_hi: ["[0, ∞)", "(-∞, ∞)", "(-∞, 0]", "[1, ∞)"],
      answer: "[0, ∞)",
      attempted: false,
      selected: ""
    },
    {
      num: 4,
      question_en: "If f(x) = 2x + 3, what is f⁻¹(x)?",
      question_hi: "यदि f(x) = 2x + 3 है, तो f⁻¹(x) क्या है?",
      options_en: ["(x - 3)/2", "2x - 3", "(x + 3)/2", "x/2 - 3"],
      options_hi: ["(x - 3)/2", "2x - 3", "(x + 3)/2", "x/2 - 3"],
      answer: "(x - 3)/2",
      attempted: false,
      selected: ""
    },
    {
      num: 5,
      question_en: "Which of the following is a one-one function?",
      question_hi: "निम्नलिखित में से कौन-सा एक-एक फलन है?",
      options_en: ["f(x) = x", "f(x) = x²", "f(x) = |x|", "f(x) = x³ - x"],
      options_hi: ["f(x) = x", "f(x) = x²", "f(x) = |x|", "f(x) = x³ - x"],
      answer: "f(x) = x",
      attempted: false,
      selected: ""
    },
    {
      num: 6,
      question_en: "The function f(x) = sin(x) is:",
      question_hi: "फलन f(x) = sin(x) कैसा है?",
      options_en: ["Many-one", "One-one", "Constant", "Identity"],
      options_hi: ["Many-one", "One-one", "Constant", "Identity"],
      answer: "Many-one",
      attempted: false,
      selected: ""
    },
    {
      num: 7,
      question_en: "If f: A → B is a function, then which of the following must be true?",
      question_hi: "यदि f: A → B एक फलन है, तो निम्नलिखित में से क्या सत्य होना चाहिए?",
      options_en: ["Every element of A has exactly one image in B", "Every element of B has an image in A", "A = B", "f is one-one"],
      options_hi: ["A के प्रत्येक अवयव की B में केवल एक छवि होनी चाहिए", "B के प्रत्येक अवयव की A में छवि होनी चाहिए", "A = B", "f एक-एक है"],
      answer: "Every element of A has exactly one image in B",
      attempted: false,
      selected: ""
    },
    {
      num: 8,
      question_en: "If a relation R in set A is reflexive, then:",
      question_hi: "यदि समुच्चय A में संबंध R परावर्तनीय (reflexive) है, तो:",
      options_en: ["(a, a) ∈ R ∀ a ∈ A", "(a, b) ∈ R ∀ a, b ∈ A", "(a, b) ∈ R ⇒ (b, a) ∈ R", "(a, a) ∉ R"],
      options_hi: ["(a, a) ∈ R ∀ a ∈ A", "(a, b) ∈ R ∀ a, b ∈ A", "(a, b) ∈ R ⇒ (b, a) ∈ R", "(a, a) ∉ R"],
      answer: "(a, a) ∈ R ∀ a ∈ A",
      attempted: false,
      selected: ""
    },
    {
      num: 9,
      question_en: "The relation R = {(a, a)} on set A is:",
      question_hi: "समुच्चय A पर संबंध R = {(a, a)} है, तो यह संबंध कैसा है?",
      options_en: ["Reflexive, Symmetric and Transitive", "Only Reflexive", "Only Symmetric", "Only Transitive"],
      options_hi: ["परावर्तनीय, सममित और संक्रामक", "केवल परावर्तनीय", "केवल सममित", "केवल संक्रामक"],
      answer: "Reflexive, Symmetric and Transitive",
      attempted: false,
      selected: ""
    },
    {
      num: 10,
      question_en: "What is the range of f(x) = |x| for x ∈ R?",
      question_hi: "x ∈ R के लिए f(x) = |x| का परास (range) क्या है?",
      options_en: ["[0, ∞)", "(-∞, ∞)", "(-∞, 0]", "[1, ∞)"],
      options_hi: ["[0, ∞)", "(-∞, ∞)", "(-∞, 0]", "[1, ∞)"],
      answer: "[0, ∞)",
      attempted: false,
      selected: ""
    },
    {
      num: 11,
      question_en: "If f(x) = x³, then f⁻¹(x) is:",
      question_hi: "यदि f(x) = x³ है, तो f⁻¹(x) क्या होगा?",
      options_en: ["∛x", "x", "x³", "x²"],
      options_hi: ["∛x", "x", "x³", "x²"],
      answer: "∛x",
      attempted: false,
      selected: ""
    },
    {
      num: 12,
      question_en: "What type of relation is the empty relation on set A?",
      question_hi: "समुच्चय A पर रिक्त संबंध (empty relation) कैसा होता है?",
      options_en: ["Irreflexive", "Symmetric", "Transitive", "All of these"],
      options_hi: ["अपरावर्तनीय", "सममित", "संक्रामक", "उपरोक्त सभी"],
      answer: "All of these",
      attempted: false,
      selected: ""
    },
    {
      num: 13,
      question_en: "Which function is both one-one and onto?",
      question_hi: "कौन-सा फलन एक-एक और ओन्टो दोनों है?",
      options_en: ["f(x) = x", "f(x) = x²", "f(x) = |x|", "f(x) = sin(x)"],
      options_hi: ["f(x) = x", "f(x) = x²", "f(x) = |x|", "f(x) = sin(x)"],
      answer: "f(x) = x",
      attempted: false,
      selected: ""
    },
    {
      num: 14,
      question_en: "What is the composition of functions f(x) = x + 1 and g(x) = 2x?",
      question_hi: "यदि f(x) = x + 1 और g(x) = 2x, तो f∘g(x) क्या होगा?",
      options_en: ["2x + 1", "2x - 1", "x + 2", "x - 2"],
      options_hi: ["2x + 1", "2x - 1", "x + 2", "x - 2"],
      answer: "2x + 1",
      attempted: false,
      selected: ""
    },
    {
      num: 15,
      question_en: "If a relation is symmetric and transitive, it may not be:",
      question_hi: "यदि कोई संबंध सममित और संक्रामक है, तो वह आवश्यक नहीं कि कैसा होगा?",
      options_en: ["Reflexive", "Symmetric", "Transitive", "None"],
      options_hi: ["परावर्तनीय", "सममित", "संक्रामक", "कोई नहीं"],
      answer: "Reflexive",
      attempted: false,
      selected: ""
    },
    {
        num: 16,
        question_en: "If a relation R is reflexive, symmetric and transitive, it is called:",
        question_hi: "यदि एक संबंध R परावर्तनीय, सममित और संक्रामक है, तो इसे क्या कहा जाता है?",
        options_en: ["Equivalence relation", "Reflexive relation", "Symmetric relation", "Transitive relation"],
        options_hi: ["समानतात्मक संबंध", "परावर्तनीय संबंध", "सममित संबंध", "संक्रामक संबंध"],
        answer: "Equivalence relation",
        attempted: false,
        selected: ""
      },
      {
        num: 17,
        question_en: "What is the inverse of the function f(x) = x - 4?",
        question_hi: "फलन f(x) = x - 4 का व्युत्क्रम (inverse) क्या है?",
        options_en: ["f⁻¹(x) = x + 4", "f⁻¹(x) = x - 4", "f⁻¹(x) = 4 - x", "f⁻¹(x) = x/4"],
        options_hi: ["f⁻¹(x) = x + 4", "f⁻¹(x) = x - 4", "f⁻¹(x) = 4 - x", "f⁻¹(x) = x/4"],
        answer: "f⁻¹(x) = x + 4",
        attempted: false,
        selected: ""
      },
      {
        num: 18,
        question_en: "What is the domain of the function f(x) = √(x-3)?",
        question_hi: "फलन f(x) = √(x-3) का परिभाग (domain) क्या है?",
        options_en: ["x ≥ 3", "x > 3", "x ≤ 3", "x < 3"],
        options_hi: ["x ≥ 3", "x > 3", "x ≤ 3", "x < 3"],
        answer: "x ≥ 3",
        attempted: false,
        selected: ""
      },
      {
        num: 19,
        question_en: "Which of the following is a composite function?",
        question_hi: "निम्नलिखित में से कौन-सा संयोजी फलन है?",
        options_en: ["f(g(x))", "f(x) + g(x)", "f(x) - g(x)", "f(x) * g(x)"],
        options_hi: ["f(g(x))", "f(x) + g(x)", "f(x) - g(x)", "f(x) * g(x)"],
        answer: "f(g(x))",
        attempted: false,
        selected: ""
      },
      {
        num: 20,
        question_en: "What type of function is f(x) = |x|?",
        question_hi: "फलन f(x) = |x| किस प्रकार का फलन है?",
        options_en: ["Many-one", "One-one", "Onto", "Constant"],
        options_hi: ["अनेक-एक", "एक-एक", "ओन्टो", "स्थिर"],
        answer: "Many-one",
        attempted: false,
        selected: ""
      },
      {
        num: 21,
        question_en: "If f(x) = x², then f(x) is:",
        question_hi: "यदि f(x) = x² है, तो f(x) क्या होगा?",
        options_en: ["One-one", "Onto", "Neither one-one nor onto", "Bijective"],
        options_hi: ["एक-एक", "ओन्टो", "न तो एक-एक और न ओन्टो", "Bijective"],
        answer: "Neither one-one nor onto",
        attempted: false,
        selected: ""
      },
      {
        num: 22,
        question_en: "Which of the following is an example of a relation on set A?",
        question_hi: "निम्नलिखित में से कौन-सा समुच्चय A पर एक संबंध का उदाहरण है?",
        options_en: ["{(1,2), (2,3), (3,4)}", "{(a,b), (b,c), (c,d)}", "{(1,1), (2,2)}", "{(a,b), (b,a)}"],
        options_hi: ["{(1,2), (2,3), (3,4)}", "{(a,b), (b,c), (c,d)}", "{(1,1), (2,2)}", "{(a,b), (b,a)}"],
        answer: "{(1,2), (2,3), (3,4)}",
        attempted: false,
        selected: ""
      },
      {
        num: 23,
        question_en: "If f(x) = 2x + 1 and g(x) = x², what is (f∘g)(x)?",
        question_hi: "यदि f(x) = 2x + 1 और g(x) = x² है, तो (f∘g)(x) क्या होगा?",
        options_en: ["2x² + 1", "2x² + 2", "2x² - 1", "x² + 1"],
        options_hi: ["2x² + 1", "2x² + 2", "2x² - 1", "x² + 1"],
        answer: "2x² + 1",
        attempted: false,
        selected: ""
      },
      {
        num: 24,
        question_en: "What is the range of the function f(x) = 1/x?",
        question_hi: "फलन f(x) = 1/x का परास (range) क्या है?",
        options_en: ["(-∞, ∞)", "(0, ∞)", "(0, ∞) ∪ (-∞, 0)", "(-∞, 0)"],
        options_hi: ["(-∞, ∞)", "(0, ∞)", "(0, ∞) ∪ (-∞, 0)", "(-∞, 0)"],
        answer: "(0, ∞) ∪ (-∞, 0)",
        attempted: false,
        selected: ""
      },
      {
        num: 25,
        question_en: "Which of the following is a many-one function?",
        question_hi: "निम्नलिखित में से कौन एक अनेक-एक फलन है?",
        options_en: ["f(x) = x²", "f(x) = x + 1", "f(x) = 2x", "f(x) = x"],
        options_hi: ["f(x) = x²", "f(x) = x + 1", "f(x) = 2x", "f(x) = x"],
        answer: "f(x) = x²",
        attempted: false,
        selected: ""
      },
      {
        num: 26,
        question_en: "If f(x) = 2x + 3, find the value of f(1).",
        question_hi: "यदि f(x) = 2x + 3 है, तो f(1) का मान ज्ञात कीजिए।",
        options_en: ["5", "4", "3", "2"],
        options_hi: ["5", "4", "3", "2"],
        answer: "5",
        attempted: false,
        selected: ""
      },
      {
        num: 27,
        question_en: "Which of the following relations is a function?",
        question_hi: "निम्नलिखित में से कौन-सा संबंध एक फलन है?",
        options_en: ["{(1,2), (2,3), (3,4)}", "{(1,2), (2,2), (3,4)}", "{(1,1), (1,2)}", "{(1,1), (1,3)}"],
        options_hi: ["{(1,2), (2,3), (3,4)}", "{(1,2), (2,2), (3,4)}", "{(1,1), (1,2)}", "{(1,1), (1,3)}"],
        answer: "{(1,2), (2,3), (3,4)}",
        attempted: false,
        selected: ""
      },
      {
        num: 28,
        question_en: "If f(x) = x² and g(x) = 2x, what is (g∘f)(x)?",
        question_hi: "यदि f(x) = x² और g(x) = 2x है, तो (g∘f)(x) क्या होगा?",
        options_en: ["2x²", "2x", "x² + 2x", "2x² + x"],
        options_hi: ["2x²", "2x", "x² + 2x", "2x² + x"],
        answer: "2x²",
        attempted: false,
        selected: ""
      },
      {
        num: 29,
        question_en: "If the function f(x) = x² is defined for all real x, it is:",
        question_hi: "यदि फलन f(x) = x² सभी वास्तविक x के लिए परिभाषित है, तो यह क्या है?",
        options_en: ["Even function", "Odd function", "Neither even nor odd", "Bijective"],
        options_hi: ["समांतर फलन", "विपरीत फलन", "न तो समांतर और न विपरीत", "Bijective"],
        answer: "Even function",
        attempted: false,
        selected: ""
      },
      {
        num: 30,
        question_en: "Which of the following is a one-one function?",
        question_hi: "निम्नलिखित में से कौन-सा एक-एक फलन है?",
        options_en: ["f(x) = x + 1", "f(x) = x²", "f(x) = x² - 1", "f(x) = 2x"],
        options_hi: ["f(x) = x + 1", "f(x) = x²", "f(x) = x² - 1", "f(x) = 2x"],
        answer: "f(x) = x + 1",
        attempted: false,
        selected: ""
      },
        {
          num: 31,
          question_en: "What is the domain of the function f(x) = √(x - 1)?",
          question_hi: "f(x) = √(x - 1) फलन का परिमाण क्या है?",
          options_en: ["[1, ∞)", "(0, ∞)", "[0, ∞)", "[1, 2]"],
          options_hi: ["[1, ∞)", "(0, ∞)", "[0, ∞)", "[1, 2]"],
          answer: "[1, ∞)",
          attempted: false,
          selected: ""
        },
        {
          num: 32,
          question_en: "Which of the following is a function?",
          question_hi: "निम्नलिखित में से कौन सा फलन है?",
          options_en: ["{(1, 2), (2, 3), (1, 4)}", "{(1, 2), (2, 3), (2, 4)}", "{(1, 2), (3, 4)}", "{(1, 2), (1, 3)}"],
          options_hi: ["{(1, 2), (2, 3), (1, 4)}", "{(1, 2), (2, 3), (2, 4)}", "{(1, 2), (3, 4)}", "{(1, 2), (1, 3)}"],
          answer: "{(1, 2), (3, 4)}",
          attempted: false,
          selected: ""
        },
        {
          num: 33,
          question_en: "Which of the following is a one-to-one function?",
          question_hi: "निम्नलिखित में से कौन सा एक-से-एक फलन है?",
          options_en: ["f(x) = x²", "f(x) = x + 1", "f(x) = sin(x)", "f(x) = x³"],
          options_hi: ["f(x) = x²", "f(x) = x + 1", "f(x) = sin(x)", "f(x) = x³"],
          answer: "f(x) = x + 1",
          attempted: false,
          selected: ""
        },
        {
          num: 34,
          question_en: "What is the range of the function f(x) = x²?",
          question_hi: "f(x) = x² फलन का सीमा क्या है?",
          options_en: ["(-∞, ∞)", "[0, ∞)", "(-∞, 0]", "[1, ∞)"],
          options_hi: ["(-∞, ∞)", "[0, ∞)", "(-∞, 0]", "[1, ∞)"],
          answer: "[0, ∞)",
          attempted: false,
          selected: ""
        },
        {
          num: 35,
          question_en: "Which of the following is the inverse of f(x) = 2x + 3?",
          question_hi: "f(x) = 2x + 3 का युत्क्रिया कौन सा है?",
          options_en: ["f⁻¹(x) = (x - 3)/2", "f⁻¹(x) = 2x - 3", "f⁻¹(x) = x/2 + 3", "f⁻¹(x) = 3 - 2x"],
          options_hi: ["f⁻¹(x) = (x - 3)/2", "f⁻¹(x) = 2x - 3", "f⁻¹(x) = x/2 + 3", "f⁻¹(x) = 3 - 2x"],
          answer: "f⁻¹(x) = (x - 3)/2",
          attempted: false,
          selected: ""
        },
        {
          num: 36,
          question_en: "If f(x) = x² and g(x) = √x, what is (f ∘ g)(x)?",
          question_hi: "यदि f(x) = x² और g(x) = √x, तो (f ∘ g)(x) क्या होगा?",
          options_en: ["x", "x²", "√x", "x³"],
          options_hi: ["x", "x²", "√x", "x³"],
          answer: "x",
          attempted: false,
          selected: ""
        },
        {
          num: 37,
          question_en: "If f(x) = x + 1, what is the value of f(2)?",
          question_hi: "यदि f(x) = x + 1, तो f(2) का मान क्या है?",
          options_en: ["3", "2", "4", "5"],
          options_hi: ["3", "2", "4", "5"],
          answer: "3",
          attempted: false,
          selected: ""
        },
        {
          num: 38,
          question_en: "Which of the following is not a relation?",
          question_hi: "निम्नलिखित में से कौन सा संबंध नहीं है?",
          options_en: ["{(1, 2), (3, 4)}", "{(1, 2), (2, 2)}", "{(1, 2), (3, 1)}", "{(1, 2), (1, 3)}"],
          options_hi: ["{(1, 2), (3, 4)}", "{(1, 2), (2, 2)}", "{(1, 2), (3, 1)}", "{(1, 2), (1, 3)}"],
          answer: "{(1, 2), (1, 3)}",
          attempted: false,
          selected: ""
        },
        {
          num: 39,
          question_en: "What is the inverse of the function f(x) = 3x + 5?",
          question_hi: "f(x) = 3x + 5 फलन का युत्क्रिया क्या है?",
          options_en: ["f⁻¹(x) = (x - 5)/3", "f⁻¹(x) = 3x + 5", "f⁻¹(x) = x - 5", "f⁻¹(x) = 3/x + 5"],
          options_hi: ["f⁻¹(x) = (x - 5)/3", "f⁻¹(x) = 3x + 5", "f⁻¹(x) = x - 5", "f⁻¹(x) = 3/x + 5"],
          answer: "f⁻¹(x) = (x - 5)/3",
          attempted: false,
          selected: ""
        },
        {
          num: 40,
          question_en: "What is the range of the function f(x) = √(x + 1)?",
          question_hi: "f(x) = √(x + 1) फलन का सीमा क्या है?",
          options_en: ["[-1, ∞)", "(0, ∞)", "[0, ∞)", "(-∞, ∞)"],
          options_hi: ["[-1, ∞)", "(0, ∞)", "[0, ∞)", "(-∞, ∞)"],
          answer: "[0, ∞)",
          attempted: false,
          selected: ""
        },
        {
          num: 41,
          question_en: "What is the value of f(x) if f(x) = 2x + 3 and x = 4?",
          question_hi: "यदि f(x) = 2x + 3 और x = 4, तो f(x) का मान क्या होगा?",
          options_en: ["11", "7", "5", "6"],
          options_hi: ["11", "7", "5", "6"],
          answer: "11",
          attempted: false,
          selected: ""
        },
        {
          num: 42,
          question_en: "Which of the following is a bijection?",
          question_hi: "निम्नलिखित में से कौन सा बायजेक्शन है?",
          options_en: ["f(x) = x²", "f(x) = x + 1", "f(x) = x³", "f(x) = √x"],
          options_hi: ["f(x) = x²", "f(x) = x + 1", "f(x) = x³", "f(x) = √x"],
          answer: "f(x) = x + 1",
          attempted: false,
          selected: ""
        },
        {
          num: 43,
          question_en: "Which of the following is a surjection?",
          question_hi: "निम्नलिखित में से कौन सा पर्याय है?",
          options_en: ["f(x) = x²", "f(x) = x + 1", "f(x) = x³", "f(x) = 2x + 5"],
          options_hi: ["f(x) = x²", "f(x) = x + 1", "f(x) = x³", "f(x) = 2x + 5"],
          answer: "f(x) = x³",
          attempted: false,
          selected: ""
        },
        {
          num: 44,
          question_en: "What is the inverse of the function f(x) = x³?",
          question_hi: "f(x) = x³ फलन का युत्क्रिया क्या है?",
          options_en: ["f⁻¹(x) = x²", "f⁻¹(x) = x", "f⁻¹(x) = x³", "f⁻¹(x) = √x"],
          options_hi: ["f⁻¹(x) = x²", "f⁻¹(x) = x", "f⁻¹(x) = x³", "f⁻¹(x) = √x"],
          answer: "f⁻¹(x) = x",
          attempted: false,
          selected: ""
        },
        {
          num: 45,
          question_en: "What is the domain of the function f(x) = ln(x)?",
          question_hi: "f(x) = ln(x) फलन का परिमाण क्या है?",
          options_en: ["(0, ∞)", "(0, 1)", "[0, ∞)", "(-∞, ∞)"],
          options_hi: ["(0, ∞)", "(0, 1)", "[0, ∞)", "(-∞, ∞)"],
          answer: "(0, ∞)",
          attempted: false,
          selected: ""
        },
        {
          num: 46,
          question_en: "If f(x) = x + 2, what is the value of f(3)?",
          question_hi: "यदि f(x) = x + 2, तो f(3) का मान क्या होगा?",
          options_en: ["5", "6", "4", "7"],
          options_hi: ["5", "6", "4", "7"],
          answer: "5",
          attempted: false,
          selected: ""
        },
        {
          num: 47,
          question_en: "Which of the following is a reflexive relation?",
          question_hi: "निम्नलिखित में से कौन सा परावर्तक संबंध है?",
          options_en: ["{(1, 1), (2, 3)}", "{(1, 2), (2, 3)}", "{(1, 1), (2, 2)}", "{(1, 2), (2, 3)}"],
          options_hi: ["{(1, 1), (2, 3)}", "{(1, 2), (2, 3)}", "{(1, 1), (2, 2)}", "{(1, 2), (2, 3)}"],
          answer: "{(1, 1), (2, 2)}",
          attempted: false,
          selected: ""
        },
        {
          num: 48,
          question_en: "Which of the following is not a function?",
          question_hi: "निम्नलिखित में से कौन सा फलन नहीं है?",
          options_en: ["{(1, 2), (3, 4)}", "{(1, 2), (2, 3)}", "{(1, 2), (1, 3)}", "{(1, 3), (2, 4)}"],
          options_hi: ["{(1, 2), (3, 4)}", "{(1, 2), (2, 3)}", "{(1, 2), (1, 3)}", "{(1, 3), (2, 4)}"],
          answer: "{(1, 2), (1, 3)}",
          attempted: false,
          selected: ""
        },
        {
          num: 49,
          question_en: "What is the inverse of f(x) = 3x?",
          question_hi: "f(x) = 3x का युत्क्रिया क्या है?",
          options_en: ["f⁻¹(x) = x/3", "f⁻¹(x) = 3x", "f⁻¹(x) = x", "f⁻¹(x) = 1/x"],
          options_hi: ["f⁻¹(x) = x/3", "f⁻¹(x) = 3x", "f⁻¹(x) = x", "f⁻¹(x) = 1/x"],
          answer: "f⁻¹(x) = x/3",
          attempted: false,
          selected: ""
        },
        {
          num: 50,
          question_en: "What is the domain of the function f(x) = 1/x?",
          question_hi: "f(x) = 1/x फलन का परिमाण क्या है?",
          options_en: ["(-∞, 0) ∪ (0, ∞)", "(-∞, ∞)", "(0, ∞)", "[1, ∞)"],
          options_hi: ["(-∞, 0) ∪ (0, ∞)", "(-∞, ∞)", "(0, ∞)", "[1, ∞)"],
          answer: "(-∞, 0) ∪ (0, ∞)",
          attempted: false,
          selected: ""
        },
    // Continue adding more questions up to 30
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
