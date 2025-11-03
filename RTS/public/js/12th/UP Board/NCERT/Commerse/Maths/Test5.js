const questions = [
    {
      num: 1,
      question_en: "What is the integral of xⁿ dx?",
      question_hi: "xⁿ का समाकलन dx क्या होता है?",
      options_en: ["xⁿ⁺¹/(n+1) + C", "xⁿ/(n+1) + C", "nxⁿ⁻¹ + C", "1/xⁿ + C"],
      options_hi: ["xⁿ⁺¹/(n+1) + C", "xⁿ/(n+1) + C", "nxⁿ⁻¹ + C", "1/xⁿ + C"],
      answer: "xⁿ⁺¹/(n+1) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 2,
      question_en: "What is the integral of 1/x dx?",
      question_hi: "1/x का समाकलन dx क्या है?",
      options_en: ["ln|x| + C", "x ln x + C", "1/(x²) + C", "e^x + C"],
      options_hi: ["ln|x| + C", "x ln x + C", "1/(x²) + C", "e^x + C"],
      answer: "ln|x| + C",
      attempted: false,
      selected: ""
    },
    {
      num: 3,
      question_en: "Which rule is used for integrating a sum of functions?",
      question_hi: "फंक्शनों के योग के समाकलन के लिए कौन सा नियम प्रयोग होता है?",
      options_en: ["Addition rule", "Sum rule", "Linearity of integrals", "Product rule"],
      options_hi: ["योग नियम", "सम नियम", "समाकलनों की रेखीयता", "गुणन नियम"],
      answer: "Linearity of integrals",
      attempted: false,
      selected: ""
    },
    {
      num: 4,
      question_en: "What is the integral of e^x dx?",
      question_hi: "e^x का समाकलन dx क्या होता है?",
      options_en: ["e^x + C", "x e^x + C", "ln x + C", "1/e^x + C"],
      options_hi: ["e^x + C", "x e^x + C", "ln x + C", "1/e^x + C"],
      answer: "e^x + C",
      attempted: false,
      selected: ""
    },
    {
      num: 5,
      question_en: "Which of the following is a method of integration?",
      question_hi: "निम्नलिखित में से कौन समाकलन की विधि है?",
      options_en: ["Substitution", "Factorization", "Completion of square", "Elimination"],
      options_hi: ["प्रतिस्थापन", "गुणनखंडन", "वर्ग पूर्ण करना", "उन्मूलन"],
      answer: "Substitution",
      attempted: false,
      selected: ""
    },
    {
      num: 6,
      question_en: "What is the integral of cos(x) dx?",
      question_hi: "cos(x) का समाकलन dx क्या होता है?",
      options_en: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
      options_hi: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
      answer: "sin(x) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 7,
      question_en: "What is the integral of sin(x) dx?",
      question_hi: "sin(x) का समाकलन dx क्या होता है?",
      options_en: ["-cos(x) + C", "cos(x) + C", "sin(x) + C", "-sin(x) + C"],
      options_hi: ["-cos(x) + C", "cos(x) + C", "sin(x) + C", "-sin(x) + C"],
      answer: "-cos(x) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 8,
      question_en: "What is the integral of sec²(x) dx?",
      question_hi: "sec²(x) का समाकलन dx क्या होता है?",
      options_en: ["tan(x) + C", "-tan(x) + C", "cot(x) + C", "-cot(x) + C"],
      options_hi: ["tan(x) + C", "-tan(x) + C", "cot(x) + C", "-cot(x) + C"],
      answer: "tan(x) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 9,
      question_en: "What is the integral of 1/(1+x²) dx?",
      question_hi: "1/(1+x²) का समाकलन dx क्या होता है?",
      options_en: ["tan⁻¹(x) + C", "sin⁻¹(x) + C", "ln(1 + x²) + C", "1/x + C"],
      options_hi: ["tan⁻¹(x) + C", "sin⁻¹(x) + C", "ln(1 + x²) + C", "1/x + C"],
      answer: "tan⁻¹(x) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 10,
      question_en: "Which of the following is an indefinite integral?",
      question_hi: "निम्नलिखित में से कौन अनिश्चित समाकलन है?",
      options_en: ["∫f(x) dx", "∫ₐᵇ f(x) dx", "Area under curve", "Definite value"],
      options_hi: ["∫f(x) dx", "∫ₐᵇ f(x) dx", "वक्र के नीचे का क्षेत्रफल", "निश्चित मान"],
      answer: "∫f(x) dx",
      attempted: false,
      selected: ""
    },
    {
      num: 11,
      question_en: "Which integral formula corresponds to ∫1/√(1 - x²) dx?",
      question_hi: "∫1/√(1 - x²) dx के लिए कौन सा समाकलन सूत्र है?",
      options_en: ["sin⁻¹(x) + C", "cos⁻¹(x) + C", "tan⁻¹(x) + C", "sec⁻¹(x) + C"],
      options_hi: ["sin⁻¹(x) + C", "cos⁻¹(x) + C", "tan⁻¹(x) + C", "sec⁻¹(x) + C"],
      answer: "sin⁻¹(x) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 12,
      question_en: "Which of the following is not an elementary function?",
      question_hi: "निम्नलिखित में से कौन प्राथमिक फलन नहीं है?",
      options_en: ["x", "ln x", "e^x", "∫e^(-x²) dx"],
      options_hi: ["x", "ln x", "e^x", "∫e^(-x²) dx"],
      answer: "∫e^(-x²) dx",
      attempted: false,
      selected: ""
    },
    {
      num: 13,
      question_en: "What is the integral of tan(x) dx?",
      question_hi: "tan(x) का समाकलन dx क्या होता है?",
      options_en: ["ln|sec(x)| + C", "ln|cos(x)| + C", "sec²(x) + C", "-cot(x) + C"],
      options_hi: ["ln|sec(x)| + C", "ln|cos(x)| + C", "sec²(x) + C", "-cot(x) + C"],
      answer: "ln|sec(x)| + C",
      attempted: false,
      selected: ""
    },
    {
      num: 14,
      question_en: "Which function integrates to ln|x| + C?",
      question_hi: "कौन सा फलन समाकलन करने पर ln|x| + C देता है?",
      options_en: ["1/x", "ln x", "e^x", "x²"],
      options_hi: ["1/x", "ln x", "e^x", "x²"],
      answer: "1/x",
      attempted: false,
      selected: ""
    },
    {
      num: 15,
      question_en: "What is ∫0¹ x dx?",
      question_hi: "∫0¹ x dx का मान क्या है?",
      options_en: ["1/2", "1", "0", "2"],
      options_hi: ["1/2", "1", "0", "2"],
      answer: "1/2",
      attempted: false,
      selected: ""
    },
    {
      num: 16,
      question_en: "Which function’s derivative is cos(x)?",
      question_hi: "cos(x) किस फलन का अवकलज है?",
      options_en: ["sin(x)", "-sin(x)", "cos(x)", "-cos(x)"],
      options_hi: ["sin(x)", "-sin(x)", "cos(x)", "-cos(x)"],
      answer: "sin(x)",
      attempted: false,
      selected: ""
    },
    {
      num: 17,
      question_en: "What is ∫x e^x dx?",
      question_hi: "∫x e^x dx का मान क्या है?",
      options_en: ["x e^x - e^x + C", "x e^x + e^x + C", "e^x + C", "x² e^x + C"],
      options_hi: ["x e^x - e^x + C", "x e^x + e^x + C", "e^x + C", "x² e^x + C"],
      answer: "x e^x - e^x + C",
      attempted: false,
      selected: ""
    },
    {
      num: 18,
      question_en: "Integration is reverse of which operation?",
      question_hi: "समाकलन किस क्रिया का प्रतिलोम है?",
      options_en: ["Differentiation", "Multiplication", "Addition", "Division"],
      options_hi: ["अवकलन", "गुणा", "योग", "भाग"],
      answer: "Differentiation",
      attempted: false,
      selected: ""
    },
    {
      num: 19,
      question_en: "If ∫f(x) dx = F(x) + C, then dF/dx = ?",
      question_hi: "यदि ∫f(x) dx = F(x) + C है, तो dF/dx क्या होगा?",
      options_en: ["f(x)", "F(x)", "C", "1"],
      options_hi: ["f(x)", "F(x)", "C", "1"],
      answer: "f(x)",
      attempted: false,
      selected: ""
    },
    {
      num: 20,
      question_en: "What is ∫0^π sin(x) dx?",
      question_hi: "∫0^π sin(x) dx का मान क्या है?",
      options_en: ["2", "0", "1", "π"],
      options_hi: ["2", "0", "1", "π"],
      answer: "2",
      attempted: false,
      selected: ""
    },
    {
      num: 21,
      question_en: "What is ∫cos²(x) dx?",
      question_hi: "cos²(x) का समाकलन क्या है?",
      options_en: ["(x/2) + (sin(2x)/4) + C", "cos(x) + C", "x² + C", "1 + sin(x) + C"],
      options_hi: ["(x/2) + (sin(2x)/4) + C", "cos(x) + C", "x² + C", "1 + sin(x) + C"],
      answer: "(x/2) + (sin(2x)/4) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 22,
      question_en: "What is the integral of 1/(a² + x²)?",
      question_hi: "1/(a² + x²) का समाकलन क्या होता है?",
      options_en: ["(1/a) tan⁻¹(x/a) + C", "tan⁻¹(x) + C", "log|x| + C", "1/x + C"],
      options_hi: ["(1/a) tan⁻¹(x/a) + C", "tan⁻¹(x) + C", "log|x| + C", "1/x + C"],
      answer: "(1/a) tan⁻¹(x/a) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 23,
      question_en: "What is the integral of sec(x) dx?",
      question_hi: "sec(x) का समाकलन क्या होता है?",
      options_en: ["ln|sec(x) + tan(x)| + C", "ln|cos(x)| + C", "tan(x) + C", "1/x + C"],
      options_hi: ["ln|sec(x) + tan(x)| + C", "ln|cos(x)| + C", "tan(x) + C", "1/x + C"],
      answer: "ln|sec(x) + tan(x)| + C",
      attempted: false,
      selected: ""
    },
    {
      num: 24,
      question_en: "Which formula is used for ∫f'(x)/f(x) dx?",
      question_hi: "∫f'(x)/f(x) dx के लिए कौन सा सूत्र प्रयोग होता है?",
      options_en: ["ln|f(x)| + C", "1/f(x) + C", "f(x)²/2 + C", "e^f(x) + C"],
      options_hi: ["ln|f(x)| + C", "1/f(x) + C", "f(x)²/2 + C", "e^f(x) + C"],
      answer: "ln|f(x)| + C",
      attempted: false,
      selected: ""
    },
    {
      num: 25,
      question_en: "What is ∫(2x + 3) dx?",
      question_hi: "∫(2x + 3) dx का समाकलन क्या होगा?",
      options_en: ["x² + 3x + C", "2x + 3 + C", "x + 3 + C", "x² + C"],
      options_hi: ["x² + 3x + C", "2x + 3 + C", "x + 3 + C", "x² + C"],
      answer: "x² + 3x + C",
      attempted: false,
      selected: ""
    },
    {
      num: 26,
      question_en: "What is the integral of xⁿ with respect to x (n ≠ -1)?",
      question_hi: "xⁿ का x के सापेक्ष समाकलन क्या है (n ≠ -1)?",
      options_en: ["xⁿ⁺¹/(n+1) + C", "nxⁿ⁻¹ + C", "xⁿ + C", "ln|x| + C"],
      options_hi: ["xⁿ⁺¹/(n+1) + C", "nxⁿ⁻¹ + C", "xⁿ + C", "ln|x| + C"],
      answer: "xⁿ⁺¹/(n+1) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 27,
      question_en: "What is ∫sec²x dx?",
      question_hi: "∫sec²x dx क्या है?",
      options_en: ["tanx + C", "secx + C", "cosx + C", "-tanx + C"],
      options_hi: ["tanx + C", "secx + C", "cosx + C", "-tanx + C"],
      answer: "tanx + C",
      attempted: false,
      selected: ""
    },
    {
      num: 28,
      question_en: "∫1/(1 + x²) dx is equal to?",
      question_hi: "∫1/(1 + x²) dx बराबर है?",
      options_en: ["tan⁻¹x + C", "log|x| + C", "x² + C", "sec⁻¹x + C"],
      options_hi: ["tan⁻¹x + C", "log|x| + C", "x² + C", "sec⁻¹x + C"],
      answer: "tan⁻¹x + C",
      attempted: false,
      selected: ""
    },
    {
      num: 29,
      question_en: "What is ∫eˣ dx?",
      question_hi: "∫eˣ dx का उत्तर क्या है?",
      options_en: ["eˣ + C", "xeˣ + C", "ln|x| + C", "1/eˣ + C"],
      options_hi: ["eˣ + C", "xeˣ + C", "ln|x| + C", "1/eˣ + C"],
      answer: "eˣ + C",
      attempted: false,
      selected: ""
    },
    {
      num: 30,
      question_en: "What is ∫1/x dx?",
      question_hi: "∫1/x dx का मान क्या है?",
      options_en: ["ln|x| + C", "xlnx + C", "1/x + C", "x + C"],
      options_hi: ["ln|x| + C", "xlnx + C", "1/x + C", "x + C"],
      answer: "ln|x| + C",
      attempted: false,
      selected: ""
    },
    {
      num: 31,
      question_en: "∫cosx dx equals?",
      question_hi: "∫cosx dx बराबर होता है?",
      options_en: ["sinx + C", "-sinx + C", "cosx + C", "-cosx + C"],
      options_hi: ["sinx + C", "-sinx + C", "cosx + C", "-cosx + C"],
      answer: "sinx + C",
      attempted: false,
      selected: ""
    },
    {
      num: 32,
      question_en: "∫sinx dx is equal to?",
      question_hi: "∫sinx dx का उत्तर क्या है?",
      options_en: ["-cosx + C", "cosx + C", "-sinx + C", "sinx + C"],
      options_hi: ["-cosx + C", "cosx + C", "-sinx + C", "sinx + C"],
      answer: "-cosx + C",
      attempted: false,
      selected: ""
    },
    {
      num: 33,
      question_en: "Which of the following is a standard integral?",
      question_hi: "निम्नलिखित में से कौन एक मानक समाकलन है?",
      options_en: ["∫1/(√1 - x²) dx = sin⁻¹x + C", "∫eˣ dx = ln|x| + C", "∫lnx dx = 1/x + C", "∫cosx dx = cosx + C"],
      options_hi: ["∫1/(√1 - x²) dx = sin⁻¹x + C", "∫eˣ dx = ln|x| + C", "∫lnx dx = 1/x + C", "∫cosx dx = cosx + C"],
      answer: "∫1/(√1 - x²) dx = sin⁻¹x + C",
      attempted: false,
      selected: ""
    },
    {
      num: 34,
      question_en: "What is the integration of x³ dx?",
      question_hi: "x³ dx का समाकलन क्या है?",
      options_en: ["x⁴/4 + C", "3x² + C", "x³ + C", "4x + C"],
      options_hi: ["x⁴/4 + C", "3x² + C", "x³ + C", "4x + C"],
      answer: "x⁴/4 + C",
      attempted: false,
      selected: ""
    },
    {
      num: 35,
      question_en: "∫1/(x² + a²) dx is equal to?",
      question_hi: "∫1/(x² + a²) dx बराबर है?",
      options_en: ["(1/a)tan⁻¹(x/a) + C", "ln|x| + C", "1/x + C", "x² + C"],
      options_hi: ["(1/a)tan⁻¹(x/a) + C", "ln|x| + C", "1/x + C", "x² + C"],
      answer: "(1/a)tan⁻¹(x/a) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 36,
      question_en: "What is the integration of √x dx?",
      question_hi: "√x dx का समाकलन क्या होगा?",
      options_en: ["(2/3)x^(3/2) + C", "(3/2)x^(2/3) + C", "2√x + C", "x² + C"],
      options_hi: ["(2/3)x^(3/2) + C", "(3/2)x^(2/3) + C", "2√x + C", "x² + C"],
      answer: "(2/3)x^(3/2) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 37,
      question_en: "Integration is the reverse process of?",
      question_hi: "समाकलन किस प्रक्रिया का उल्टा है?",
      options_en: ["Differentiation", "Multiplication", "Addition", "Division"],
      options_hi: ["डिफरेंशिएशन", "गुणा", "जोड़", "भाग"],
      answer: "Differentiation",
      attempted: false,
      selected: ""
    },
    {
      num: 38,
      question_en: "What is ∫tanx dx?",
      question_hi: "∫tanx dx का उत्तर क्या है?",
      options_en: ["-ln|cosx| + C", "ln|sinx| + C", "secx + C", "-secx + C"],
      options_hi: ["-ln|cosx| + C", "ln|sinx| + C", "secx + C", "-secx + C"],
      answer: "-ln|cosx| + C",
      attempted: false,
      selected: ""
    },
    {
      num: 39,
      question_en: "What is ∫cotx dx?",
      question_hi: "∫cotx dx का उत्तर क्या है?",
      options_en: ["ln|sinx| + C", "-ln|sinx| + C", "secx + C", "tanx + C"],
      options_hi: ["ln|sinx| + C", "-ln|sinx| + C", "secx + C", "tanx + C"],
      answer: "ln|sinx| + C",
      attempted: false,
      selected: ""
    },
    {
      num: 40,
      question_en: "What is ∫1/√(a² - x²) dx?",
      question_hi: "∫1/√(a² - x²) dx का उत्तर क्या है?",
      options_en: ["sin⁻¹(x/a) + C", "cos⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "ln|x| + C"],
      options_hi: ["sin⁻¹(x/a) + C", "cos⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "ln|x| + C"],
      answer: "sin⁻¹(x/a) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 41,
      question_en: "∫secx dx is equal to?",
      question_hi: "∫secx dx बराबर है?",
      options_en: ["ln|secx + tanx| + C", "ln|sinx| + C", "sec²x + C", "tanx + C"],
      options_hi: ["ln|secx + tanx| + C", "ln|sinx| + C", "sec²x + C", "tanx + C"],
      answer: "ln|secx + tanx| + C",
      attempted: false,
      selected: ""
    },
    {
      num: 42,
      question_en: "If F(x) is the integral of f(x), then F'(x) = ?",
      question_hi: "यदि F(x), f(x) का समाकलन है, तो F'(x) = ?",
      options_en: ["f(x)", "F(x)", "1/f(x)", "f'(x)"],
      options_hi: ["f(x)", "F(x)", "1/f(x)", "f'(x)"],
      answer: "f(x)",
      attempted: false,
      selected: ""
    },
    {
      num: 43,
      question_en: "What is ∫dx/(x√(x² - 1))?",
      question_hi: "∫dx/(x√(x² - 1)) का उत्तर क्या है?",
      options_en: ["sec⁻¹x + C", "tan⁻¹x + C", "ln|x| + C", "sin⁻¹x + C"],
      options_hi: ["sec⁻¹x + C", "tan⁻¹x + C", "ln|x| + C", "sin⁻¹x + C"],
      answer: "sec⁻¹x + C",
      attempted: false,
      selected: ""
    },
    {
      num: 44,
      question_en: "Integration of constant k is?",
      question_hi: "धनात्मक स्थिरांक k का समाकलन क्या है?",
      options_en: ["kx + C", "k + C", "k² + C", "ln|k| + C"],
      options_hi: ["kx + C", "k + C", "k² + C", "ln|k| + C"],
      answer: "kx + C",
      attempted: false,
      selected: ""
    },
    {
      num: 45,
      question_en: "∫x.dx is equal to?",
      question_hi: "∫x.dx का मान क्या है?",
      options_en: ["x²/2 + C", "2x + C", "ln|x| + C", "x + C"],
      options_hi: ["x²/2 + C", "2x + C", "ln|x| + C", "x + C"],
      answer: "x²/2 + C",
      attempted: false,
      selected: ""
    },
    {
      num: 46,
      question_en: "What is the value of ∫aˣ dx?",
      question_hi: "∫aˣ dx का मान क्या है?",
      options_en: ["aˣ/ln(a) + C", "ln(aˣ) + C", "x·aˣ + C", "ln(x) + C"],
      options_hi: ["aˣ/ln(a) + C", "ln(aˣ) + C", "x·aˣ + C", "ln(x) + C"],
      answer: "aˣ/ln(a) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 47,
      question_en: "∫dx/√(x² + a²) is equal to?",
      question_hi: "∫dx/√(x² + a²) बराबर है?",
      options_en: ["ln|x + √(x² + a²)| + C", "ln|x| + C", "sin⁻¹x + C", "tan⁻¹x + C"],
      options_hi: ["ln|x + √(x² + a²)| + C", "ln|x| + C", "sin⁻¹x + C", "tan⁻¹x + C"],
      answer: "ln|x + √(x² + a²)| + C",
      attempted: false,
      selected: ""
    },
    {
      num: 48,
      question_en: "∫cos²x dx equals?",
      question_hi: "∫cos²x dx बराबर होता है?",
      options_en: ["(x/2) + (sin2x/4) + C", "(x/2) - (sin2x/4) + C", "x² + C", "cosx + C"],
      options_hi: ["(x/2) + (sin2x/4) + C", "(x/2) - (sin2x/4) + C", "x² + C", "cosx + C"],
      answer: "(x/2) + (sin2x/4) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 49,
      question_en: "∫sin²x dx equals?",
      question_hi: "∫sin²x dx का मान क्या है?",
      options_en: ["(x/2) - (sin2x/4) + C", "(x/2) + (sin2x/4) + C", "sinx + C", "x + C"],
      options_hi: ["(x/2) - (sin2x/4) + C", "(x/2) + (sin2x/4) + C", "sinx + C", "x + C"],
      answer: "(x/2) - (sin2x/4) + C",
      attempted: false,
      selected: ""
    },
    {
      num: 50,
      question_en: "∫dx/(a² - x²) is equal to?",
      question_hi: "∫dx/(a² - x²) बराबर है?",
      options_en: ["(1/2a)ln|(a + x)/(a - x)| + C", "tan⁻¹x + C", "ln|x| + C", "sin⁻¹x + C"],
      options_hi: ["(1/2a)ln|(a + x)/(a - x)| + C", "tan⁻¹x + C", "ln|x| + C", "sin⁻¹x + C"],
      answer: "(1/2a)ln|(a + x)/(a - x)| + C",
      attempted: false,
      selected: ""
    }
  
    // Continue adding more questions up to 30
];

//

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
