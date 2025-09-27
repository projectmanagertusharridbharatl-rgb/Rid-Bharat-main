const questions = [
    {
    num: 1,
    question_en: "What is the synonym of the word 'benevolent'?",
    question_hi: "'benevolent' शब्द का समानार्थक क्या है?",
    options_en: [
      "Kind",
      "Cruel",
      "Greedy",
      "Lazy"
    ],
    options_hi: [
      "दयालु",
      "निर्दयी",
      "लालची",
      "आलसी"
    ],
    answer_en: "Kind",
    answer_hi: "दयालु",
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "What is the synonym of the word 'happy'?",
    question_hi: "'happy' शब्द का समानार्थक क्या है?",
    options_en: [
      "Joyful",
      "Sad",
      "Angry",
      "Tired"
    ],
    options_hi: [
      "खुश",
      "उदास",
      "गुस्सा",
      "थका हुआ"
    ],
    answer_en: "Joyful",
    answer_hi: "खुश",
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "What is the synonym of the word 'courageous'?",
    question_hi: "'courageous' शब्द का समानार्थक क्या है?",
    options_en: [
      "Brave",
      "Cowardly",
      "Weak",
      "Shy"
    ],
    options_hi: [
      "बहादुर",
      "कायर",
      "कमजोर",
      "शर्मीला"
    ],
    answer_en: "Brave",
    answer_hi: "बहादुर",
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "What is the synonym of the word 'quick'?",
    question_hi: "'quick' शब्द का समानार्थक क्या है?",
    options_en: [
      "Fast",
      "Slow",
      "Lazy",
      "Weak"
    ],
    options_hi: [
      "तेज़",
      "धीमा",
      "आलसी",
      "कमजोर"
    ],
    answer_en: "Fast",
    answer_hi: "तेज़",
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "What is the synonym of the word 'honest'?",
    question_hi: "'honest' शब्द का समानार्थक क्या है?",
    options_en: [
      "Truthful",
      "Dishonest",
      "Lazy",
      "Greedy"
    ],
    options_hi: [
      "ईमानदार",
      "बेईमान",
      "आलसी",
      "लालची"
    ],
    answer_en: "Truthful",
    answer_hi: "ईमानदार",
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "What is the synonym of the word 'silent'?",
    question_hi: "'silent' शब्द का समानार्थक क्या है?",
    options_en: [
      "Quiet",
      "Noisy",
      "Talkative",
      "Loud"
    ],
    options_hi: [
      "चुप",
      "शोर",
      "बोलने वाला",
      "तेज़ आवाज़"
    ],
    answer_en: "Quiet",
    answer_hi: "चुप",
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "What is the synonym of the word 'angry'?",
    question_hi: "'angry' शब्द का समानार्थक क्या है?",
    options_en: [
      "Furious",
      "Happy",
      "Calm",
      "Tired"
    ],
    options_hi: [
      "क्रोधित",
      "खुश",
      "शांत",
      "थका हुआ"
    ],
    answer_en: "Furious",
    answer_hi: "क्रोधित",
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "What is the synonym of the word 'beautiful'?",
    question_hi: "'beautiful' शब्द का समानार्थक क्या है?",
    options_en: [
      "Attractive",
      "Ugly",
      "Plain",
      "Dark"
    ],
    options_hi: [
      "सुंदर",
      "कुरूप",
      "साधारण",
      "अंधेरा"
    ],
    answer_en: "Attractive",
    answer_hi: "सुंदर",
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "What is the synonym of the word 'friendly'?",
    question_hi: "'friendly' शब्द का समानार्थक क्या है?",
    options_en: [
      "Kind",
      "Rude",
      "Angry",
      "Mean"
    ],
    options_hi: [
      "मित्रवत",
      "असभ्य",
      "क्रोधित",
      "कठोर"
    ],
    answer_en: "Kind",
    answer_hi: "मित्रवत",
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "What is the synonym of the word 'strong'?",
    question_hi: "'strong' शब्द का समानार्थक क्या है?",
    options_en: [
      "Powerful",
      "Weak",
      "Fragile",
      "Soft"
    ],
    options_hi: [
      "मज़बूत",
      "कमज़ोर",
      "नाज़ुक",
      "नरम"
    ],
    answer_en: "Powerful",
    answer_hi: "मज़बूत",
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "What is the synonym of the word 'lazy'?",
    question_hi: "'lazy' शब्द का समानार्थक क्या है?",
    options_en: [
      "Idle",
      "Active",
      "Energetic",
      "Hardworking"
    ],
    options_hi: [
      "आलसी",
      "सक्रिय",
      "ऊर्जावान",
      "मेहनती"
    ],
    answer_en: "Idle",
    answer_hi: "आलसी",
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "What is the synonym of the word 'polite'?",
    question_hi: "'polite' शब्द का समानार्थक क्या है?",
    options_en: [
      "Courteous",
      "Rude",
      "Impolite",
      "Mean"
    ],
    options_hi: [
      "शिष्ट",
      "असभ्य",
      "अशिष्ट",
      "कठोर"
    ],
    answer_en: "Courteous",
    answer_hi: "शिष्ट",
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "What is the synonym of the word 'bright'?",
    question_hi: "'bright' शब्द का समानार्थक क्या है?",
    options_en: [
      "Shining",
      "Dark",
      "Dull",
      "Cloudy"
    ],
    options_hi: [
      "चमकीला",
      "अंधेरा",
      "सुस्त",
      "धुंधला"
    ],
    answer_en: "Shining",
    answer_hi: "चमकीला",
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "What is the synonym of the word 'dangerous'?",
    question_hi: "'dangerous' शब्द का समानार्थक क्या है?",
    options_en: [
      "Hazardous",
      "Safe",
      "Harmless",
      "Secure"
    ],
    options_hi: [
      "खतरनाक",
      "सुरक्षित",
      "निर्दोष",
      "सुरक्षित"
    ],
    answer_en: "Hazardous",
    answer_hi: "खतरनाक",
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "What is the synonym of the word 'difficult'?",
    question_hi: "'difficult' शब्द का समानार्थक क्या है?",
    options_en: [
      "Hard",
      "Easy",
      "Simple",
      "Clear"
    ],
    options_hi: [
      "मुश्किल",
      "आसान",
      "सरल",
      "स्पष्ट"
    ],
    answer_en: "Hard",
    answer_hi: "मुश्किल",
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "What is the synonym of the word 'fast'?",
    question_hi: "'fast' शब्द का समानार्थक क्या है?",
    options_en: [
      "Quick",
      "Slow",
      "Late",
      "Tired"
    ],
    options_hi: [
      "तेज़",
      "धीमा",
      "देर से",
      "थका हुआ"
    ],
    answer_en: "Quick",
    answer_hi: "तेज़",
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "What is the synonym of the word 'big'?",
    question_hi: "'big' शब्द का समानार्थक क्या है?",
    options_en: [
      "Large",
      "Small",
      "Tiny",
      "Short"
    ],
    options_hi: [
      "बड़ा",
      "छोटा",
      "नन्हा",
      "छोटा"
    ],
    answer_en: "Large",
    answer_hi: "बड़ा",
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "What is the synonym of the word 'small'?",
    question_hi: "'small' शब्द का समानार्थक क्या है?",
    options_en: [
      "Tiny",
      "Big",
      "Large",
      "Huge"
    ],
    options_hi: [
      "छोटा",
      "बड़ा",
      "बड़ा",
      "विशाल"
    ],
    answer_en: "Tiny",
    answer_hi: "छोटा",
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "What is the synonym of the word 'cold'?",
    question_hi: "'cold' शब्द का समानार्थक क्या है?",
    options_en: [
      "Chilly",
      "Hot",
      "Warm",
      "Boiling"
    ],
    options_hi: [
      "ठंडा",
      "गर्म",
      "गरमाहट",
      "उबलता"
    ],
    answer_en: "Chilly",
    answer_hi: "ठंडा",
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "What is the synonym of the word 'clean'?",
    question_hi: "'clean' शब्द का समानार्थक क्या है?",
    options_en: [
      "Neat",
      "Dirty",
      "Messy",
      "Stained"
    ],
    options_hi: [
      "साफ़",
      "गंदा",
      "अव्यवस्थित",
      "दाग़दार"
    ],
    answer_en: "Neat",
    answer_hi: "साफ़",
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "What is the synonym of the word 'strong'?",
    question_hi: "'strong' शब्द का समानार्थक क्या है?",
    options_en: [
      "Powerful",
      "Weak",
      "Fragile",
      "Soft"
    ],
    options_hi: [
      "मज़बूत",
      "कमज़ोर",
      "नाज़ुक",
      "नरम"
    ],
    answer_en: "Powerful",
    answer_hi: "मज़बूत",
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "What is the synonym of the word 'smart'?",
    question_hi: "'smart' शब्द का समानार्थक क्या है?",
    options_en: [
      "Intelligent",
      "Dumb",
      "Slow",
      "Lazy"
    ],
    options_hi: [
      "चतुर",
      "मूर्ख",
      "धीमा",
      "आलसी"
    ],
    answer_en: "Intelligent",
    answer_hi: "चतुर",
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "What is the synonym of the word 'rich'?",
    question_hi: "'rich' शब्द का समानार्थक क्या है?",
    options_en: [
      "Wealthy",
      "Poor",
      "Broke",
      "Needy"
    ],
    options_hi: [
      "धनी",
      "गरीब",
      "ख़ाली",
      "जरूरतमंद"
    ],
    answer_en: "Wealthy",
    answer_hi: "धनी",
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "What is the synonym of the word 'brave'?",
    question_hi: "'brave' शब्द का समानार्थक क्या है?",
    options_en: [
      "Courageous",
      "Cowardly",
      "Fearful",
      "Weak"
    ],
    options_hi: [
      "बहादुर",
      "कायर",
      "डरपोक",
      "कमज़ोर"
    ],
    answer_en: "Courageous",
    answer_hi: "बहादुर",
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "What is the synonym of the word 'generous'?",
    question_hi: "'generous' शब्द का समानार्थक क्या है?",
    options_en: [
      "Kind",
      "Selfish",
      "Greedy",
      "Mean"
    ],
    options_hi: [
      "उदार",
      "स्वार्थी",
      "लालची",
      "कठोर"
    ],
    answer_en: "Kind",
    answer_hi: "उदार",
    attempted: false,
    selected: null
  },
   {
    num: 26,
    question_en: "What is the synonym of the word 'happy'?",
    question_hi: "'happy' शब्द का समानार्थक क्या है?",
    options_en: ["Joyful", "Sad", "Angry", "Tired"],
    options_hi: ["खुश", "दुखी", "गुस्सा", "थका हुआ"],
    answer_en: "Joyful",
    answer_hi: "खुश",
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "What is the synonym of the word 'fast'?",
    question_hi: "'fast' शब्द का समानार्थक क्या है?",
    options_en: ["Quick", "Slow", "Late", "Weak"],
    options_hi: ["तेज़", "धीमा", "देर से", "कमज़ोर"],
    answer_en: "Quick",
    answer_hi: "तेज़",
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "What is the synonym of the word 'beautiful'?",
    question_hi: "'beautiful' शब्द का समानार्थक क्या है?",
    options_en: ["Attractive", "Ugly", "Plain", "Bad"],
    options_hi: ["सुंदर", "कुरूप", "साधारण", "खराब"],
    answer_en: "Attractive",
    answer_hi: "सुंदर",
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "What is the synonym of the word 'lazy'?",
    question_hi: "'lazy' शब्द का समानार्थक क्या है?",
    options_en: ["Idle", "Active", "Energetic", "Busy"],
    options_hi: ["आलसी", "सक्रिय", "ऊर्जावान", "व्यस्त"],
    answer_en: "Idle",
    answer_hi: "आलसी",
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "What is the synonym of the word 'noisy'?",
    question_hi: "'noisy' शब्द का समानार्थक क्या है?",
    options_en: ["Loud", "Silent", "Quiet", "Calm"],
    options_hi: ["शोरगुल वाला", "मौन", "चुप", "शांत"],
    answer_en: "Loud",
    answer_hi: "शोरगुल वाला",
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "What is the synonym of the word 'angry'?",
    question_hi: "'angry' शब्द का समानार्थक क्या है?",
    options_en: ["Furious", "Happy", "Calm", "Kind"],
    options_hi: ["क्रोधित", "खुश", "शांत", "दयालु"],
    answer_en: "Furious",
    answer_hi: "क्रोधित",
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "What is the synonym of the word 'tall'?",
    question_hi: "'tall' शब्द का समानार्थक क्या है?",
    options_en: ["High", "Short", "Low", "Small"],
    options_hi: ["ऊँचा", "छोटा", "नीचा", "छोटा"],
    answer_en: "High",
    answer_hi: "ऊँचा",
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "What is the synonym of the word 'bright'?",
    question_hi: "'bright' शब्द का समानार्थक क्या है?",
    options_en: ["Shining", "Dull", "Dark", "Dim"],
    options_hi: ["चमकीला", "मंद", "अंधेरा", "धुंधला"],
    answer_en: "Shining",
    answer_hi: "चमकीला",
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "What is the synonym of the word 'hard'?",
    question_hi: "'hard' शब्द का समानार्थक क्या है?",
    options_en: ["Difficult", "Easy", "Soft", "Simple"],
    options_hi: ["कठिन", "आसान", "नरम", "सरल"],
    answer_en: "Difficult",
    answer_hi: "कठिन",
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "What is the synonym of the word 'help'?",
    question_hi: "'help' शब्द का समानार्थक क्या है?",
    options_en: ["Assist", "Harm", "Ignore", "Refuse"],
    options_hi: ["मदद करना", "हानि पहुँचाना", "नज़रअंदाज़ करना", "इंकार करना"],
    answer_en: "Assist",
    answer_hi: "मदद करना",
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "What is the synonym of the word 'clean'?",
    question_hi: "'clean' शब्द का समानार्थक क्या है?",
    options_en: ["Pure", "Dirty", "Messy", "Dusty"],
    options_hi: ["स्वच्छ", "गंदा", "अव्यवस्थित", "धूल भरा"],
    answer_en: "Pure",
    answer_hi: "स्वच्छ",
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "What is the synonym of the word 'strong'?",
    question_hi: "'strong' शब्द का समानार्थक क्या है?",
    options_en: ["Powerful", "Weak", "Fragile", "Soft"],
    options_hi: ["मजबूत", "कमज़ोर", "नाज़ुक", "नरम"],
    answer_en: "Powerful",
    answer_hi: "मजबूत",
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "What is the synonym of the word 'fast'?",
    question_hi: "'fast' शब्द का समानार्थक क्या है?",
    options_en: ["Rapid", "Slow", "Late", "Delayed"],
    options_hi: ["तेज़", "धीमा", "देर से", "विलंबित"],
    answer_en: "Rapid",
    answer_hi: "तेज़",
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "What is the synonym of the word 'quiet'?",
    question_hi: "'quiet' शब्द का समानार्थक क्या है?",
    options_en: ["Silent", "Loud", "Noisy", "Shouting"],
    options_hi: ["मौन", "तेज़", "शोरगुल वाला", "चिल्लाना"],
    answer_en: "Silent",
    answer_hi: "मौन",
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "What is the synonym of the word 'bright'?",
    question_hi: "'bright' शब्द का समानार्थक क्या है?",
    options_en: ["Brilliant", "Dark", "Dull", "Dim"],
    options_hi: ["चमकीला", "अंधेरा", "मंद", "धुंधला"],
    answer_en: "Brilliant",
    answer_hi: "चमकीला",
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "What is the synonym of the word 'kind'?",
    question_hi: "'kind' शब्द का समानार्थक क्या है?",
    options_en: ["Caring", "Cruel", "Mean", "Rude"],
    options_hi: ["दयालु", "निर्दयी", "कठोर", "असभ्य"],
    answer_en: "Caring",
    answer_hi: "दयालु",
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "What is the synonym of the word 'difficult'?",
    question_hi: "'difficult' शब्द का समानार्थक क्या है?",
    options_en: ["Hard", "Easy", "Simple", "Smooth"],
    options_hi: ["कठिन", "आसान", "सरल", "सुगम"],
    answer_en: "Hard",
    answer_hi: "कठिन",
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "What is the synonym of the word 'bright'?",
    question_hi: "'bright' शब्द का समानार्थक क्या है?",
    options_en: ["Luminous", "Dark", "Gloomy", "Dull"],
    options_hi: ["प्रकाशमान", "अंधेरा", "उदास", "मंद"],
    answer_en: "Luminous",
    answer_hi: "प्रकाशमान",
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "What is the synonym of the word 'easy'?",
    question_hi: "'easy' शब्द का समानार्थक क्या है?",
    options_en: ["Simple", "Hard", "Difficult", "Tough"],
    options_hi: ["सरल", "कठिन", "मुश्किल", "कठोर"],
    answer_en: "Simple",
    answer_hi: "सरल",
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "What is the synonym of the word 'safe'?",
    question_hi: "'safe' शब्द का समानार्थक क्या है?",
    options_en: ["Secure", "Dangerous", "Risky", "Unsafe"],
    options_hi: ["सुरक्षित", "खतरनाक", "जोखिम भरा", "असुरक्षित"],
    answer_en: "Secure",
    answer_hi: "सुरक्षित",
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "What is the synonym of the word 'old'?",
    question_hi: "'old' शब्द का समानार्थक क्या है?",
    options_en: ["Ancient", "Young", "New", "Modern"],
    options_hi: ["प्राचीन", "युवा", "नया", "आधुनिक"],
    answer_en: "Ancient",
    answer_hi: "प्राचीन",
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "What is the synonym of the word 'cheap'?",
    question_hi: "'cheap' शब्द का समानार्थक क्या है?",
    options_en: ["Inexpensive", "Expensive", "Costly", "Pricey"],
    options_hi: ["सस्ता", "महंगा", "कीमती", "मूल्यवान"],
    answer_en: "Inexpensive",
    answer_hi: "सस्ता",
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "What is the synonym of the word 'strong'?",
    question_hi: "'strong' शब्द का समानार्थक क्या है?",
    options_en: ["Sturdy", "Weak", "Fragile", "Feeble"],
    options_hi: ["मजबूत", "कमज़ोर", "नाज़ुक", "कमज़ोर"],
    answer_en: "Sturdy",
    answer_hi: "मजबूत",
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "What is the synonym of the word 'bright'?",
    question_hi: "'bright' शब्द का समानार्थक क्या है?",
    options_en: ["Radiant", "Dull", "Dark", "Shadowy"],
    options_hi: ["उज्जवल", "मंद", "अंधेरा", "छायादार"],
    answer_en: "Radiant",
    answer_hi: "उज्जवल",
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "What is the synonym of the word 'important'?",
    question_hi: "'important' शब्द का समानार्थक क्या है?",
    options_en: ["Significant", "Minor", "Trivial", "Insignificant"],
    options_hi: ["महत्वपूर्ण", "छोटा", "तुच्छ", "अमहत्वपूर्ण"],
    answer_en: "Significant",
    answer_hi: "महत्वपूर्ण",
    attempted: false,
    selected: null
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