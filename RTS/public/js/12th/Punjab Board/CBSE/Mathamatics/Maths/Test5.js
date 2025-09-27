const questions = [
     {
    num: 1,
    question_en: "What is the integral of xⁿ dx?",
    question_hi: "xⁿ का समाकलन dx क्या होता है?",
    options_en: ["xⁿ⁺¹/(n+1) + C", "xⁿ/(n+1) + C", "nxⁿ⁻¹ + C", "1/xⁿ + C"],
    options_hi: ["xⁿ⁺¹/(n+1) + C", "xⁿ/(n+1) + C", "nxⁿ⁻¹ + C", "1/xⁿ + C"],
    answer_en: "xⁿ⁺¹/(n+1) + C",
    answer_hi: "xⁿ⁺¹/(n+1) + C",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the integral of 1/x dx?",
    question_hi: "1/x का समाकलन dx क्या होता है?",
    options_en: ["ln|x| + C", "1/(x²) + C", "x ln|x| - x + C", "e^x + C"],
    options_hi: ["ln|x| + C", "1/(x²) + C", "x ln|x| - x + C", "e^x + C"],
    answer_en: "ln|x| + C",
    answer_hi: "ln|x| + C",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the integral of e^x dx?",
    question_hi: "e^x का समाकलन dx क्या होता है?",
    options_en: ["e^x + C", "x e^x + C", "e^(x+1) + C", "1/e^x + C"],
    options_hi: ["e^x + C", "x e^x + C", "e^(x+1) + C", "1/e^x + C"],
    answer_en: "e^x + C",
    answer_hi: "e^x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Integral of cos x dx is?",
    question_hi: "cos x का समाकलन dx क्या है?",
    options_en: ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
    options_hi: ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
    answer_en: "sin x + C",
    answer_hi: "sin x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Integral of sin x dx is?",
    question_hi: "sin x का समाकलन dx क्या है?",
    options_en: ["-cos x + C", "cos x + C", "sin x + C", "-sin x + C"],
    options_hi: ["-cos x + C", "cos x + C", "sin x + C", "-sin x + C"],
    answer_en: "-cos x + C",
    answer_hi: "-cos x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Integral of sec² x dx is?",
    question_hi: "sec² x का समाकलन dx क्या है?",
    options_en: ["tan x + C", "-tan x + C", "cot x + C", "-cot x + C"],
    options_hi: ["tan x + C", "-tan x + C", "cot x + C", "-cot x + C"],
    answer_en: "tan x + C",
    answer_hi: "tan x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Integral of 1/(1+x²) dx is?",
    question_hi: "1/(1+x²) का समाकलन dx क्या है?",
    options_en: ["tan⁻¹ x + C", "sin⁻¹ x + C", "sec⁻¹ x + C", "-cot⁻¹ x + C"],
    options_hi: ["tan⁻¹ x + C", "sin⁻¹ x + C", "sec⁻¹ x + C", "-cot⁻¹ x + C"],
    answer_en: "tan⁻¹ x + C",
    answer_hi: "tan⁻¹ x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Integral of 1/√(1-x²) dx is?",
    question_hi: "1/√(1-x²) का समाकलन dx क्या है?",
    options_en: ["sin⁻¹ x + C", "cos⁻¹ x + C", "-sin⁻¹ x + C", "tan⁻¹ x + C"],
    options_hi: ["sin⁻¹ x + C", "cos⁻¹ x + C", "-sin⁻¹ x + C", "tan⁻¹ x + C"],
    answer_en: "sin⁻¹ x + C",
    answer_hi: "sin⁻¹ x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Integral of sec x tan x dx is?",
    question_hi: "sec x tan x का समाकलन dx क्या है?",
    options_en: ["sec x + C", "tan x + C", "-sec x + C", "-tan x + C"],
    options_hi: ["sec x + C", "tan x + C", "-sec x + C", "-tan x + C"],
    answer_en: "sec x + C",
    answer_hi: "sec x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Integral of csc x cot x dx is?",
    question_hi: "csc x cot x का समाकलन dx क्या है?",
    options_en: ["-csc x + C", "csc x + C", "-cot x + C", "cot x + C"],
    options_hi: ["-csc x + C", "csc x + C", "-cot x + C", "cot x + C"],
    answer_en: "-csc x + C",
    answer_hi: "-csc x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Integral of 0 dx is?",
    question_hi: "0 का समाकलन dx क्या है?",
    options_en: ["C", "0", "x + C", "None"],
    options_hi: ["C", "0", "x + C", "None"],
    answer_en: "C",
    answer_hi: "C",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Integral of dx is?",
    question_hi: "dx का समाकलन क्या है?",
    options_en: ["x + C", "1 + C", "0 + C", "C"],
    options_hi: ["x + C", "1 + C", "0 + C", "C"],
    answer_en: "x + C",
    answer_hi: "x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Integral of a^x dx is?",
    question_hi: "a^x का समाकलन dx क्या है?",
    options_en: ["(a^x)/ln a + C", "a^x + C", "x a^(x-1) + C", "ln(a^x) + C"],
    options_hi: ["(a^x)/ln a + C", "a^x + C", "x a^(x-1) + C", "ln(a^x) + C"],
    answer_en: "(a^x)/ln a + C",
    answer_hi: "(a^x)/ln a + C",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Integral of sinh x dx is?",
    question_hi: "sinh x का समाकलन dx क्या है?",
    options_en: ["cosh x + C", "-cosh x + C", "sinh x + C", "-sinh x + C"],
    options_hi: ["cosh x + C", "-cosh x + C", "sinh x + C", "-sinh x + C"],
    answer_en: "cosh x + C",
    answer_hi: "cosh x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Integral of cosh x dx is?",
    question_hi: "cosh x का समाकलन dx क्या है?",
    options_en: ["sinh x + C", "-sinh x + C", "cosh x + C", "-cosh x + C"],
    options_hi: ["sinh x + C", "-sinh x + C", "cosh x + C", "-cosh x + C"],
    answer_en: "sinh x + C",
    answer_hi: "sinh x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Integral of 1/cos² x dx is?",
    question_hi: "1/cos² x का समाकलन dx क्या है?",
    options_en: ["tan x + C", "-tan x + C", "cot x + C", "-cot x + C"],
    options_hi: ["tan x + C", "-tan x + C", "cot x + C", "-cot x + C"],
    answer_en: "tan x + C",
    answer_hi: "tan x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Integral of 1/sin² x dx is?",
    question_hi: "1/sin² x का समाकलन dx क्या है?",
    options_en: ["-cot x + C", "cot x + C", "tan x + C", "-tan x + C"],
    options_hi: ["-cot x + C", "cot x + C", "tan x + C", "-tan x + C"],
    answer_en: "-cot x + C",
    answer_hi: "-cot x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Integral of x e^x dx is?",
    question_hi: "x e^x का समाकलन dx क्या है?",
    options_en: ["(x-1)e^x + C", "(x+1)e^x + C", "e^x + C", "x e^(x+1) + C"],
    options_hi: ["(x-1)e^x + C", "(x+1)e^x + C", "e^x + C", "x e^(x+1) + C"],
    answer_en: "(x-1)e^x + C",
    answer_hi: "(x-1)e^x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Integral of ln x dx is?",
    question_hi: "ln x का समाकलन dx क्या है?",
    options_en: ["x ln x - x + C", "ln x + C", "x ln x + C", "1/x + C"],
    options_hi: ["x ln x - x + C", "ln x + C", "x ln x + C", "1/x + C"],
    answer_en: "x ln x - x + C",
    answer_hi: "x ln x - x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Integral of (2x+3) dx is?",
    question_hi: "(2x+3) का समाकलन dx क्या है?",
    options_en: ["x² + 3x + C", "2x + 3 + C", "x² + 6x + C", "x² + 3 + C"],
    options_hi: ["x² + 3x + C", "2x + 3 + C", "x² + 6x + C", "x² + 3 + C"],
    answer_en: "x² + 3x + C",
    answer_hi: "x² + 3x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Integral of cos 2x dx is?",
    question_hi: "cos 2x का समाकलन dx क्या है?",
    options_en: ["(1/2) sin 2x + C", "-(1/2) sin 2x + C", "sin 2x + C", "-sin 2x + C"],
    options_hi: ["(1/2) sin 2x + C", "-(1/2) sin 2x + C", "sin 2x + C", "-sin 2x + C"],
    answer_en: "(1/2) sin 2x + C",
    answer_hi: "(1/2) sin 2x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Integral of sin 3x dx is?",
    question_hi: "sin 3x का समाकलन dx क्या है?",
    options_en: ["-(1/3) cos 3x + C", "(1/3) cos 3x + C", "cos 3x + C", "-cos 3x + C"],
    options_hi: ["-(1/3) cos 3x + C", "(1/3) cos 3x + C", "cos 3x + C", "-cos 3x + C"],
    answer_en: "-(1/3) cos 3x + C",
    answer_hi: "-(1/3) cos 3x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Integral of tan x dx is?",
    question_hi: "tan x का समाकलन dx क्या है?",
    options_en: ["-ln|cos x| + C", "ln|cos x| + C", "ln|sin x| + C", "-ln|sin x| + C"],
    options_hi: ["-ln|cos x| + C", "ln|cos x| + C", "ln|sin x| + C", "-ln|sin x| + C"],
    answer_en: "-ln|cos x| + C",
    answer_hi: "-ln|cos x| + C",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Integral of cot x dx is?",
    question_hi: "cot x का समाकलन dx क्या है?",
    options_en: ["ln|sin x| + C", "-ln|sin x| + C", "ln|cos x| + C", "-ln|cos x| + C"],
    options_hi: ["ln|sin x| + C", "-ln|sin x| + C", "ln|cos x| + C", "-ln|cos x| + C"],
    answer_en: "ln|sin x| + C",
    answer_hi: "ln|sin x| + C",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Integral of sec x dx is?",
    question_hi: "sec x का समाकलन dx क्या है?",
    options_en: ["ln|sec x + tan x| + C", "-ln|sec x + tan x| + C", "ln|sec x - tan x| + C", "-ln|sec x - tan x| + C"],
    options_hi: ["ln|sec x + tan x| + C", "-ln|sec x + tan x| + C", "ln|sec x - tan x| + C", "-ln|sec x - tan x| + C"],
    answer_en: "ln|sec x + tan x| + C",
    answer_hi: "ln|sec x + tan x| + C",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "What is the integral of e^x dx?",
    question_hi: "e^x का समाकलन dx क्या होता है?",
    options_en: ["e^x + C", "e^(x+1) + C", "xe^x + C", "e^(x-1) + C"],
    options_hi: ["e^x + C", "e^(x+1) + C", "xe^x + C", "e^(x-1) + C"],
    answer_en: "e^x + C",
    answer_hi: "e^x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the integral of sin x dx?",
    question_hi: "sin x का समाकलन dx क्या होता है?",
    options_en: ["-cos x + C", "cos x + C", "sin x + C", "-sin x + C"],
    options_hi: ["-cos x + C", "cos x + C", "sin x + C", "-sin x + C"],
    answer_en: "-cos x + C",
    answer_hi: "-cos x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What is the integral of cos x dx?",
    question_hi: "cos x का समाकलन dx क्या होता है?",
    options_en: ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
    options_hi: ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"],
    answer_en: "sin x + C",
    answer_hi: "sin x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Integral of 1/x dx is:",
    question_hi: "1/x का समाकलन dx क्या होता है?",
    options_en: ["ln|x| + C", "1/x + C", "x + C", "e^x + C"],
    options_hi: ["ln|x| + C", "1/x + C", "x + C", "e^x + C"],
    answer_en: "ln|x| + C",
    answer_hi: "ln|x| + C",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Integral of sec² x dx is:",
    question_hi: "sec² x का समाकलन dx क्या होता है?",
    options_en: ["tan x + C", "-tan x + C", "sec x + C", "-sec x + C"],
    options_hi: ["tan x + C", "-tan x + C", "sec x + C", "-sec x + C"],
    answer_en: "tan x + C",
    answer_hi: "tan x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Integral of cosec² x dx is:",
    question_hi: "cosec² x का समाकलन dx क्या होता है?",
    options_en: ["-cot x + C", "cot x + C", "-cosec x + C", "cosec x + C"],
    options_hi: ["-cot x + C", "cot x + C", "-cosec x + C", "cosec x + C"],
    answer_en: "-cot x + C",
    answer_hi: "-cot x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Integral of sec x tan x dx is:",
    question_hi: "sec x tan x का समाकलन dx क्या होता है?",
    options_en: ["sec x + C", "-sec x + C", "tan x + C", "-tan x + C"],
    options_hi: ["sec x + C", "-sec x + C", "tan x + C", "-tan x + C"],
    answer_en: "sec x + C",
    answer_hi: "sec x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Integral of cosec x cot x dx is:",
    question_hi: "cosec x cot x का समाकलन dx क्या होता है?",
    options_en: ["-cosec x + C", "cosec x + C", "cot x + C", "-cot x + C"],
    options_hi: ["-cosec x + C", "cosec x + C", "cot x + C", "-cot x + C"],
    answer_en: "-cosec x + C",
    answer_hi: "-cosec x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Integral of e^(ax) dx is:",
    question_hi: "e^(ax) का समाकलन dx क्या होता है?",
    options_en: ["(1/a) e^(ax) + C", "a e^(ax) + C", "e^(ax) + C", "(a/x) e^(ax) + C"],
    options_hi: ["(1/a) e^(ax) + C", "a e^(ax) + C", "e^(ax) + C", "(a/x) e^(ax) + C"],
    answer_en: "(1/a) e^(ax) + C",
    answer_hi: "(1/a) e^(ax) + C",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Integral of sinh x dx is:",
    question_hi: "sinh x का समाकलन dx क्या होता है?",
    options_en: ["cosh x + C", "-cosh x + C", "sinh x + C", "-sinh x + C"],
    options_hi: ["cosh x + C", "-cosh x + C", "sinh x + C", "-sinh x + C"],
    answer_en: "cosh x + C",
    answer_hi: "cosh x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Integral of cosh x dx is:",
    question_hi: "cosh x का समाकलन dx क्या होता है?",
    options_en: ["sinh x + C", "-sinh x + C", "cosh x + C", "-cosh x + C"],
    options_hi: ["sinh x + C", "-sinh x + C", "cosh x + C", "-cosh x + C"],
    answer_en: "sinh x + C",
    answer_hi: "sinh x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Integral of 1/(1 + x²) dx is:",
    question_hi: "1/(1 + x²) का समाकलन dx क्या होता है?",
    options_en: ["tan⁻¹ x + C", "-tan⁻¹ x + C", "cot⁻¹ x + C", "-cot⁻¹ x + C"],
    options_hi: ["tan⁻¹ x + C", "-tan⁻¹ x + C", "cot⁻¹ x + C", "-cot⁻¹ x + C"],
    answer_en: "tan⁻¹ x + C",
    answer_hi: "tan⁻¹ x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Integral of 1/√(1 - x²) dx is:",
    question_hi: "1/√(1 - x²) का समाकलन dx क्या होता है?",
    options_en: ["sin⁻¹ x + C", "-sin⁻¹ x + C", "cos⁻¹ x + C", "-cos⁻¹ x + C"],
    options_hi: ["sin⁻¹ x + C", "-sin⁻¹ x + C", "cos⁻¹ x + C", "-cos⁻¹ x + C"],
    answer_en: "sin⁻¹ x + C",
    answer_hi: "sin⁻¹ x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Integral of 1/(x√(x² - 1)) dx is:",
    question_hi: "1/(x√(x² - 1)) का समाकलन dx क्या होता है?",
    options_en: ["sec⁻¹ |x| + C", "-sec⁻¹ |x| + C", "cosec⁻¹ |x| + C", "-cosec⁻¹ |x| + C"],
    options_hi: ["sec⁻¹ |x| + C", "-sec⁻¹ |x| + C", "cosec⁻¹ |x| + C", "-cosec⁻¹ |x| + C"],
    answer_en: "sec⁻¹ |x| + C",
    answer_hi: "sec⁻¹ |x| + C",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Integral of 1/(1 - x²) dx is:",
    question_hi: "1/(1 - x²) का समाकलन dx क्या होता है?",
    options_en: ["(1/2) ln|(1+x)/(1-x)| + C", "-(1/2) ln|(1+x)/(1-x)| + C", "ln|1-x²| + C", "-ln|1-x²| + C"],
    options_hi: ["(1/2) ln|(1+x)/(1-x)| + C", "-(1/2) ln|(1+x)/(1-x)| + C", "ln|1-x²| + C", "-ln|1-x²| + C"],
    answer_en: "(1/2) ln|(1+x)/(1-x)| + C",
    answer_hi: "(1/2) ln|(1+x)/(1-x)| + C",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Integral of tan x dx is:",
    question_hi: "tan x का समाकलन dx क्या होता है?",
    options_en: ["-ln|cos x| + C", "ln|cos x| + C", "ln|sin x| + C", "-ln|sin x| + C"],
    options_hi: ["-ln|cos x| + C", "ln|cos x| + C", "ln|sin x| + C", "-ln|sin x| + C"],
    answer_en: "-ln|cos x| + C",
    answer_hi: "-ln|cos x| + C",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Integral of cot x dx is:",
    question_hi: "cot x का समाकलन dx क्या होता है?",
    options_en: ["ln|sin x| + C", "-ln|sin x| + C", "ln|cos x| + C", "-ln|cos x| + C"],
    options_hi: ["ln|sin x| + C", "-ln|sin x| + C", "ln|cos x| + C", "-ln|cos x| + C"],
    answer_en: "ln|sin x| + C",
    answer_hi: "ln|sin x| + C",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Integral of sec x dx is:",
    question_hi: "sec x का समाकलन dx क्या होता है?",
    options_en: ["ln|sec x + tan x| + C", "-ln|sec x + tan x| + C", "ln|sec x - tan x| + C", "-ln|sec x - tan x| + C"],
    options_hi: ["ln|sec x + tan x| + C", "-ln|sec x + tan x| + C", "ln|sec x - tan x| + C", "-ln|sec x - tan x| + C"],
    answer_en: "ln|sec x + tan x| + C",
    answer_hi: "ln|sec x + tan x| + C",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Integral of cosec x dx is:",
    question_hi: "cosec x का समाकलन dx क्या होता है?",
    options_en: ["-ln|cosec x + cot x| + C", "ln|cosec x + cot x| + C", "ln|cosec x - cot x| + C", "-ln|cosec x - cot x| + C"],
    options_hi: ["-ln|cosec x + cot x| + C", "ln|cosec x + cot x| + C", "ln|cosec x - cot x| + C", "-ln|cosec x - cot x| + C"],
    answer_en: "-ln|cosec x + cot x| + C",
    answer_hi: "-ln|cosec x + cot x| + C",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Integral of x e^(x²) dx is:",
    question_hi: "x e^(x²) का समाकलन dx क्या होता है?",
    options_en: ["(1/2) e^(x²) + C", "e^(x²) + C", "(1/2) x e^(x²) + C", "x e^(x²) + C"],
    options_hi: ["(1/2) e^(x²) + C", "e^(x²) + C", "(1/2) x e^(x²) + C", "x e^(x²) + C"],
    answer_en: "(1/2) e^(x²) + C",
    answer_hi: "(1/2) e^(x²) + C",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Integral of ln x dx is:",
    question_hi: "ln x का समाकलन dx क्या होता है?",
    options_en: ["x ln x - x + C", "x ln x + x + C", "ln x + C", "x + C"],
    options_hi: ["x ln x - x + C", "x ln x + x + C", "ln x + C", "x + C"],
    answer_en: "x ln x - x + C",
    answer_hi: "x ln x - x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Integral of (1 + tan² x) dx is:",
    question_hi: "(1 + tan² x) का समाकलन dx क्या होता है?",
    options_en: ["tan x + C", "sec x + C", "sec² x + C", "-tan x + C"],
    options_hi: ["tan x + C", "sec x + C", "sec² x + C", "-tan x + C"],
    answer_en: "tan x + C",
    answer_hi: "tan x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Integral of (1 - cot² x) dx is:",
    question_hi: "(1 - cot² x) का समाकलन dx क्या होता है?",
    options_en: ["-cot x + C", "cosec x + C", "cosec² x + C", "cot x + C"],
    options_hi: ["-cot x + C", "cosec x + C", "cosec² x + C", "cot x + C"],
    answer_en: "-cot x + C",
    answer_hi: "-cot x + C",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Integral of 1/(x² + a²) dx is:",
    question_hi: "1/(x² + a²) का समाकलन dx क्या होता है?",
    options_en: ["(1/a) tan⁻¹ (x/a) + C", "-(1/a) tan⁻¹ (x/a) + C", "(1/a) cot⁻¹ (x/a) + C", "-(1/a) cot⁻¹ (x/a) + C"],
    options_hi: ["(1/a) tan⁻¹ (x/a) + C", "-(1/a) tan⁻¹ (x/a) + C", "(1/a) cot⁻¹ (x/a) + C", "-(1/a) cot⁻¹ (x/a) + C"],
    answer_en: "(1/a) tan⁻¹ (x/a) + C",
    answer_hi: "(1/a) tan⁻¹ (x/a) + C",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Integral of cos (ax + b) dx is:",
    question_hi: "cos (ax + b) का समाकलन dx क्या होता है?",
    options_en: ["(1/a) sin (ax + b) + C", "-(1/a) sin (ax + b) + C", "(1/a) cos (ax + b) + C", "-(1/a) cos (ax + b) + C"],
    options_hi: ["(1/a) sin (ax + b) + C", "-(1/a) sin (ax + b) + C", "(1/a) cos (ax + b) + C", "-(1/a) cos (ax + b) + C"],
    answer_en: "(1/a) sin (ax + b) + C",
    answer_hi: "(1/a) sin (ax + b) + C",
    attempted: false,
    selected: ""
  }
  
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