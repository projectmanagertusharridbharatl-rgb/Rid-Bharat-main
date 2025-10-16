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
