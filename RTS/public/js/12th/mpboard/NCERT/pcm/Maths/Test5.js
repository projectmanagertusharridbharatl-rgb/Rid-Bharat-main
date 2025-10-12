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




// ========================== GLOBAL VARIABLES ==========================
let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
let timerInterval;

// ========================== QUIZ LOGIC ==========================
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

// ========================== QUESTION ATTEMPT LOGIC ==========================
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ========================== NAVIGATION CONTROLS ==========================
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

// ========================== SUBMIT & SCORE ==========================
function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0, notAttempted = 0, score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(`Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`);
}

// ========================== TIMER FUNCTION ==========================
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

// ========================== QUESTION NAVIGATION UI ==========================
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color};' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ========================== CAMERA & MOVEMENT LOGIC ==========================
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
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

    // ========================== RESIZE HANDLE ==========================
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

    // ========================== DRAG LOGIC ==========================
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

    // ========================== RESIZE LOGIC ==========================
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

    // ========================== CAMERA STREAM ==========================
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

// ========================== MOVEMENT DETECTION ==========================
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
                    alert("⚠️ Alert 1: Face not moving");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head not moving");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

// ========================== RESTART TEST ==========================
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

// ========================== PAGE LOAD ==========================
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); 
};
