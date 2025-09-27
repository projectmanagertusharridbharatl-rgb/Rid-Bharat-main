const questions = [
  {
    num: 1,
    question_en: "Which of the following is an example of an acid?",
    question_hi: "निम्नलिखित में से कौन सा एक अम्ल का उदाहरण है?",
    options_en: ["Hydrochloric acid", "Sodium hydroxide", "Calcium carbonate", "Magnesium hydroxide"],
    options_hi: ["हाइड्रोक्लोरिक अम्ल", "सोडियम हाइड्रॉक्साइड", "कैल्शियम कार्बोनेट", "मैग्नीशियम हाइड्रॉक्साइड"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "Which gas is released when an acid reacts with a metal?",
    question_hi: "जब अम्ल धातु के साथ प्रतिक्रिया करता है तो कौन सी गैस निकलती है?",
    options_en: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "What is the pH value of a neutral solution?",
    question_hi: "तटस्थ विलयन का pH मान क्या होता है?",
    options_en: ["0", "7", "14", "1"],
    options_hi: ["0", "7", "14", "1"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "Which of the following is a strong base?",
    question_hi: "निम्नलिखित में से कौन एक मजबूत क्षार है?",
    options_en: ["Ammonia", "Sodium hydroxide", "Calcium hydroxide", "Magnesium hydroxide"],
    options_hi: ["अमोनिया", "सोडियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड", "मैग्नीशियम हाइड्रॉक्साइड"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "Which of the following does not affect the rate of reaction?",
    question_hi: "निम्नलिखित में से कौन अभिक्रिया की गति को प्रभावित नहीं करता?",
    options_en: ["Temperature", "Concentration", "Pressure", "Color"],
    options_hi: ["तापमान", "एकाग्रता", "दाब", "रंग"],
    answer: 4,
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "What type of reaction is the combination of hydrogen and oxygen to form water?",
    question_hi: "हाइड्रोजन और ऑक्सीजन के संयोजन से जल बनने की प्रतिक्रिया किस प्रकार की होती है?",
    options_en: ["Decomposition", "Combination", "Displacement", "Double displacement"],
    options_hi: ["अपघटन", "संयोजन", "विस्थापन", "द्वि-विस्थापन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "Which metal is the most reactive?",
    question_hi: "निम्नलिखित में से कौन सा धातु सबसे अधिक अभिक्रियाशील है?",
    options_en: ["Gold", "Iron", "Sodium", "Copper"],
    options_hi: ["सोना", "लोहा", "सोडियम", "तांबा"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "Which of the following is a double displacement reaction?",
    question_hi: "निम्नलिखित में से कौन सी एक द्वि-विस्थापन प्रतिक्रिया है?",
    options_en: [
      "NaOH + HCl → NaCl + H₂O",
      "2Mg + O₂ → 2MgO",
      "Zn + H₂SO₄ → ZnSO₄ + H₂",
      "CaCO₃ → CaO + CO₂"
    ],
    options_hi: [
      "NaOH + HCl → NaCl + H₂O",
      "2Mg + O₂ → 2MgO",
      "Zn + H₂SO₄ → ZnSO₄ + H₂",
      "CaCO₃ → CaO + CO₂"
    ],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "Which acid is present in vinegar?",
    question_hi: "सिरके में कौन सा अम्ल पाया जाता है?",
    options_en: ["Acetic acid", "Sulfuric acid", "Nitric acid", "Citric acid"],
    options_hi: ["एसीटिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "साइट्रिक अम्ल"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "Which of the following is a salt?",
    question_hi: "निम्नलिखित में से कौन एक लवण है?",
    options_en: ["HCl", "NaOH", "NaCl", "CH₃COOH"],
    options_hi: ["HCl", "NaOH", "NaCl", "CH₃COOH"],
    answer: 3,
    attempted: false,
    selected: null
  },
    {
      num: 11,
      question_en: "Which of the following is not a property of bases?",
      question_hi: "निम्नलिखित में से कौन सा क्षार की विशेषता नहीं है?",
      options_en: ["Bitter taste", "Slippery touch", "Turns red litmus blue", "Reacts with metals to produce hydrogen"],
      options_hi: ["कड़वा स्वाद", "चिकना स्पर्श", "लाल लिटमस को नीला करता है", "धातुओं से अभिक्रिया कर हाइड्रोजन उत्पन्न करता है"],
      answer: 4,
      attempted: false,
      selected: null
    },
    {
      num: 12,
      question_en: "Which gas is usually liberated when an acid reacts with a metal?",
      question_hi: "जब अम्ल किसी धातु से अभिक्रिया करता है तो सामान्यतः कौन सी गैस निकलती है?",
      options_en: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
      options_hi: ["ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
      answer: 2,
      attempted: false,
      selected: null
    },
    {
      num: 13,
      question_en: "What is the pH value of a neutral solution?",
      question_hi: "तटस्थ विलयन का pH मान क्या होता है?",
      options_en: ["0", "7", "14", "10"],
      options_hi: ["0", "7", "14", "10"],
      answer: 2,
      attempted: false,
      selected: null
    },
    {
      num: 14,
      question_en: "Which ion is released by acids in aqueous solution?",
      question_hi: "जलीय विलयन में अम्ल कौन सा आयन मुक्त करते हैं?",
      options_en: ["OH⁻", "H⁺", "Na⁺", "Cl⁻"],
      options_hi: ["OH⁻", "H⁺", "Na⁺", "Cl⁻"],
      answer: 2,
      attempted: false,
      selected: null
    },
    {
      num: 15,
      question_en: "Which indicator is used to test acids and bases?",
      question_hi: "अम्ल और क्षार की पहचान के लिए कौन सा संकेतक प्रयोग किया जाता है?",
      options_en: ["Water", "Salt", "Litmus", "Alcohol"],
      options_hi: ["पानी", "लवण", "लिटमस", "एल्कोहल"],
      answer: 3,
      attempted: false,
      selected: null
    },
    {
      num: 16,
      question_en: "Which of the following is a strong base?",
      question_hi: "निम्नलिखित में से कौन एक मजबूत क्षार है?",
      options_en: ["Ammonium hydroxide", "Calcium hydroxide", "Sodium hydroxide", "Magnesium hydroxide"],
      options_hi: ["अमोनियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड", "सोडियम हाइड्रॉक्साइड", "मैग्नीशियम हाइड्रॉक्साइड"],
      answer: 3,
      attempted: false,
      selected: null
    },
    {
      num: 17,
      question_en: "Which salt is formed when hydrochloric acid reacts with sodium hydroxide?",
      question_hi: "जब हाइड्रोक्लोरिक अम्ल सोडियम हाइड्रॉक्साइड से अभिक्रिया करता है तो कौन सा लवण बनता है?",
      options_en: ["Sodium chloride", "Sodium carbonate", "Sodium bicarbonate", "Sodium nitrate"],
      options_hi: ["सोडियम क्लोराइड", "सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम नाइट्रेट"],
      answer: 1,
      attempted: false,
      selected: null
    },
    {
      num: 18,
      question_en: "Which acid is present in vinegar?",
      question_hi: "सिरके में कौन सा अम्ल पाया जाता है?",
      options_en: ["Citric acid", "Lactic acid", "Acetic acid", "Formic acid"],
      options_hi: ["साइट्रिक अम्ल", "लैक्टिक अम्ल", "एसिटिक अम्ल", "फॉर्मिक अम्ल"],
      answer: 3,
      attempted: false,
      selected: null
    },
    {
      num: 19,
      question_en: "Which base is present in milk of magnesia?",
      question_hi: "मिल्क ऑफ मैग्नीशिया में कौन सा क्षार उपस्थित होता है?",
      options_en: ["Sodium hydroxide", "Magnesium hydroxide", "Potassium hydroxide", "Calcium hydroxide"],
      options_hi: ["सोडियम हाइड्रॉक्साइड", "मैग्नीशियम हाइड्रॉक्साइड", "पोटेशियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड"],
      answer: 2,
      attempted: false,
      selected: null
    },
    {
      num: 20,
      question_en: "Which compound gives both H⁺ and OH⁻ ions in water?",
      question_hi: "कौन सा यौगिक जल में H⁺ और OH⁻ दोनों आयन देता है?",
      options_en: ["Salt", "Alcohol", "Water", "Acid"],
      options_hi: ["लवण", "एल्कोहल", "जल", "अम्ल"],
      answer: 3,
      attempted: false,
      selected: null
    },
      {
        num: 21,
        question_en: "Which of the following turns blue litmus red?",
        question_hi: "निम्नलिखित में से कौन नीले लिटमस को लाल करता है?",
        options_en: ["Base", "Salt", "Water", "Acid"],
        options_hi: ["क्षार", "लवण", "जल", "अम्ल"],
        answer: 4,
        attempted: false,
        selected: null
      },
      {
        num: 22,
        question_en: "Which of the following turns red litmus blue?",
        question_hi: "निम्नलिखित में से कौन लाल लिटमस को नीला करता है?",
        options_en: ["Acid", "Salt", "Base", "Sugar"],
        options_hi: ["अम्ल", "लवण", "क्षार", "शक्कर"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 23,
        question_en: "Which acid is present in lemon?",
        question_hi: "नींबू में कौन सा अम्ल होता है?",
        options_en: ["Oxalic acid", "Formic acid", "Citric acid", "Acetic acid"],
        options_hi: ["ऑक्सेलिक अम्ल", "फॉर्मिक अम्ल", "साइट्रिक अम्ल", "एसिटिक अम्ल"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 24,
        question_en: "What is the chemical formula of hydrochloric acid?",
        question_hi: "हाइड्रोक्लोरिक अम्ल का रासायनिक सूत्र क्या है?",
        options_en: ["H₂SO₄", "HNO₃", "HCl", "CH₃COOH"],
        options_hi: ["H₂SO₄", "HNO₃", "HCl", "CH₃COOH"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 25,
        question_en: "Which of the following is a neutral salt?",
        question_hi: "निम्नलिखित में से कौन एक तटस्थ लवण है?",
        options_en: ["Sodium chloride", "Sodium acetate", "Ammonium chloride", "Sodium carbonate"],
        options_hi: ["सोडियम क्लोराइड", "सोडियम एसीटेट", "अमोनियम क्लोराइड", "सोडियम कार्बोनेट"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 26,
        question_en: "What happens to the pH of a solution when an acid is added?",
        question_hi: "जब किसी विलयन में अम्ल मिलाया जाता है तो उसका pH मान क्या होता है?",
        options_en: ["Increases", "Decreases", "Remains same", "Becomes neutral"],
        options_hi: ["बढ़ता है", "घटता है", "समान रहता है", "तटस्थ हो जाता है"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 27,
        question_en: "Which acid is used in car batteries?",
        question_hi: "कार की बैटरियों में कौन सा अम्ल उपयोग किया जाता है?",
        options_en: ["Sulphuric acid", "Nitric acid", "Hydrochloric acid", "Acetic acid"],
        options_hi: ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 28,
        question_en: "What is the pH range of acidic solutions?",
        question_hi: "अम्लीय विलयनों का pH मान किस सीमा में होता है?",
        options_en: ["0–7", "7–14", "Only 7", "Above 14"],
        options_hi: ["0–7", "7–14", "केवल 7", "14 से अधिक"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 29,
        question_en: "Which base is commonly found in soap?",
        question_hi: "साबुन में सामान्यतः कौन सा क्षार पाया जाता है?",
        options_en: ["Potassium hydroxide", "Ammonium hydroxide", "Sodium hydroxide", "Calcium hydroxide"],
        options_hi: ["पोटेशियम हाइड्रॉक्साइड", "अमोनियम हाइड्रॉक्साइड", "सोडियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 30,
        question_en: "Which substance is used to treat acidity in stomach?",
        question_hi: "पेट की अम्लता को दूर करने के लिए किस पदार्थ का प्रयोग होता है?",
        options_en: ["Base", "Acid", "Salt", "Water"],
        options_hi: ["क्षार", "अम्ल", "लवण", "जल"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 31,
        question_en: "Which gas is produced when metal reacts with acid?",
        question_hi: "धातु और अम्ल की अभिक्रिया से कौन सी गैस बनती है?",
        options_en: ["Carbon dioxide", "Oxygen", "Hydrogen", "Chlorine"],
        options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "हाइड्रोजन", "क्लोरीन"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 32,
        question_en: "What does universal indicator show for acidic solution?",
        question_hi: "यूनिवर्सल संकेतक अम्लीय विलयन के लिए क्या दर्शाता है?",
        options_en: ["Blue", "Green", "Red", "Purple"],
        options_hi: ["नीला", "हरा", "लाल", "बैंगनी"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 33,
        question_en: "Which substance is used to neutralize bee sting?",
        question_hi: "मधुमक्खी के डंक को निष्क्रिय करने के लिए किसका उपयोग किया जाता है?",
        options_en: ["Lemon juice", "Baking soda", "Vinegar", "Salt water"],
        options_hi: ["नींबू का रस", "बेकिंग सोडा", "सिरका", "नमक का पानी"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 34,
        question_en: "What is the chemical name of baking soda?",
        question_hi: "बेकिंग सोडा का रासायनिक नाम क्या है?",
        options_en: ["Sodium carbonate", "Sodium bicarbonate", "Calcium carbonate", "Magnesium carbonate"],
        options_hi: ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "कैल्शियम कार्बोनेट", "मैग्नीशियम कार्बोनेट"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 35,
        question_en: "Which one of the following is a weak acid?",
        question_hi: "निम्नलिखित में से कौन एक कमजोर अम्ल है?",
        options_en: ["Sulphuric acid", "Hydrochloric acid", "Acetic acid", "Nitric acid"],
        options_hi: ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल", "नाइट्रिक अम्ल"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 36,
        question_en: "What is the nature of metal oxides?",
        question_hi: "धात्विक ऑक्साइड का स्वभाव कैसा होता है?",
        options_en: ["Acidic", "Basic", "Neutral", "Amphoteric"],
        options_hi: ["अम्लीय", "क्षारीय", "तटस्थ", "उभयधर्मी"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 37,
        question_en: "What is the effect of acids on litmus paper?",
        question_hi: "लिटमस पेपर पर अम्ल का प्रभाव क्या होता है?",
        options_en: ["Turns blue", "Turns red", "Remains unchanged", "Turns green"],
        options_hi: ["नीला करता है", "लाल करता है", "कोई परिवर्तन नहीं", "हरा करता है"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 38,
        question_en: "Which of the following is used to neutralize acid in soil?",
        question_hi: "मिट्टी की अम्लता को निष्क्रिय करने के लिए निम्नलिखित में से किसका प्रयोग किया जाता है?",
        options_en: ["Quick lime", "Vinegar", "Sulphuric acid", "Sodium chloride"],
        options_hi: ["चूना (क्विक लाइम)", "सिरका", "सल्फ्यूरिक अम्ल", "सोडियम क्लोराइड"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 39,
        question_en: "Which oxide is formed when carbon is burnt in excess air?",
        question_hi: "जब कार्बन को अधिक वायु में जलाया जाता है तो कौन सा ऑक्साइड बनता है?",
        options_en: ["CO", "CO₂", "C₂O", "C₂O₃"],
        options_hi: ["CO", "CO₂", "C₂O", "C₂O₃"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 40,
        question_en: "Which acid is present in curd?",
        question_hi: "दही में कौन सा अम्ल पाया जाता है?",
        options_en: ["Acetic acid", "Citric acid", "Lactic acid", "Formic acid"],
        options_hi: ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 41,
        question_en: "Which of the following is a basic oxide?",
        question_hi: "निम्नलिखित में से कौन एक क्षारीय ऑक्साइड है?",
        options_en: ["CO₂", "SO₂", "Na₂O", "NO₂"],
        options_hi: ["CO₂", "SO₂", "Na₂O", "NO₂"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 42,
        question_en: "Which of these is an example of an amphoteric oxide?",
        question_hi: "इनमें से कौन एक उदासीन ऑक्साइड का उदाहरण है?",
        options_en: ["Na₂O", "Al₂O₃", "MgO", "CO₂"],
        options_hi: ["Na₂O", "Al₂O₃", "MgO", "CO₂"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 43,
        question_en: "Which of the following is a property of acids?",
        question_hi: "निम्नलिखित में से कौन अम्लों की एक विशेषता है?",
        options_en: ["They are bitter", "They turn red litmus blue", "They produce OH⁻ ions", "They have a sour taste"],
        options_hi: ["वे कड़वे होते हैं", "वे लाल लिटमस को नीला करते हैं", "वे OH⁻ आयन उत्पन्न करते हैं", "उनका स्वाद खट्टा होता है"],
        answer: 4,
        attempted: false,
        selected: null
      },
      {
        num: 44,
        question_en: "Which of the following is not a use of salts?",
        question_hi: "निम्नलिखित में से कौन लवणों का उपयोग नहीं है?",
        options_en: ["Preserving food", "Improving soil fertility", "As refrigerants", "In explosives"],
        options_hi: ["खाद्य संरक्षण", "मृदा उर्वरता बढ़ाने", "शीतलक के रूप में", "विस्फोटकों में"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 45,
        question_en: "Which salt is used for making washing soda?",
        question_hi: "धोने का सोडा बनाने के लिए किस लवण का उपयोग किया जाता है?",
        options_en: ["Sodium chloride", "Sodium carbonate", "Sodium bicarbonate", "Sodium sulphate"],
        options_hi: ["सोडियम क्लोराइड", "सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम सल्फेट"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 46,
        question_en: "What is the pH range of acidic substances?",
        question_hi: "अम्लीय पदार्थों की pH सीमा क्या होती है?",
        options_en: ["0 to 6", "7 to 14", "8 to 14", "6 to 14"],
        options_hi: ["0 से 6", "7 से 14", "8 से 14", "6 से 14"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 47,
        question_en: "Which of the following salts gives a neutral solution in water?",
        question_hi: "निम्नलिखित में से कौन सा लवण जल में तटस्थ विलयन बनाता है?",
        options_en: ["NaCl", "NH₄Cl", "CH₃COONa", "Na₂CO₃"],
        options_hi: ["NaCl", "NH₄Cl", "CH₃COONa", "Na₂CO₃"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 48,
        question_en: "Which acid is present in ant sting?",
        question_hi: "चींटी के डंक में कौन सा अम्ल होता है?",
        options_en: ["Acetic acid", "Formic acid", "Citric acid", "Lactic acid"],
        options_hi: ["एसिटिक अम्ल", "फॉर्मिक अम्ल", "सिट्रिक अम्ल", "लैक्टिक अम्ल"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 49,
        question_en: "Which of these substances can be used to neutralize soil acidity?",
        question_hi: "मृदा की अम्लता को निष्क्रिय करने के लिए इनमें से किस पदार्थ का उपयोग किया जा सकता है?",
        options_en: ["Lime", "Ammonium nitrate", "Urea", "Sulfur"],
        options_hi: ["चूना", "अमोनियम नाइट्रेट", "यूरिया", "गंधक"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 50,
        question_en: "Which salt is used to treat acidity in the stomach?",
        question_hi: "पेट में अम्लता के इलाज में किस लवण का उपयोग किया जाता है?",
        options_en: ["Sodium bicarbonate", "Sodium chloride", "Potassium nitrate", "Ammonium chloride"],
        options_hi: ["सोडियम बाइकार्बोनेट", "सोडियम क्लोराइड", "पोटेशियम नाइट्रेट", "अमोनियम क्लोराइड"],
        answer: 1,
        attempted: false,
        selected: null
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
