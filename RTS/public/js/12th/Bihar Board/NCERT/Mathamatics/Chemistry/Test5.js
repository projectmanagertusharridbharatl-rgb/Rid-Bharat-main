const questions = [
    {
      num: 1,
      question_en: "Which of the following is a strong acid?",
      question_hi: "निम्नलिखित में से कौन एक प्रबल अम्ल है?",
      options_en: ["Acetic acid", "Citric acid", "Hydrochloric acid", "Carbonic acid"],
      options_hi: ["एसिटिक अम्ल", "सिट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "कार्बोनिक अम्ल"],
      answer: 3,
      attempted: false,
      selected: null
    },
    {
      num: 2,
      question_en: "What is the pH of a neutral solution?",
      question_hi: "तटस्थ विलयन का pH क्या होता है?",
      options_en: ["0", "7", "14", "1"],
      options_hi: ["0", "7", "14", "1"],
      answer: 2,
      attempted: false,
      selected: null
    },
    {
      num: 3,
      question_en: "Which of the following is a weak base?",
      question_hi: "निम्नलिखित में से कौन एक मंद क्षार है?",
      options_en: ["NaOH", "KOH", "NH₄OH", "Ca(OH)₂"],
      options_hi: ["NaOH", "KOH", "NH₄OH", "Ca(OH)₂"],
      answer: 3,
      attempted: false,
      selected: null
    },
    {
      num: 4,
      question_en: "Which indicator turns red in acidic solution?",
      question_hi: "कौन सा संकेतक अम्लीय विलयन में लाल रंग में बदलता है?",
      options_en: ["Blue litmus", "Phenolphthalein", "Methyl orange", "Turmeric"],
      options_hi: ["नीला लिटमस", "फिनोल्फ्थेलेन", "मीथाइल ऑरेंज", "हल्दी"],
      answer: 1,
      attempted: false,
      selected: null
    },
    {
      num: 5,
      question_en: "Which of the following is used to neutralize bee sting?",
      question_hi: "मधुमक्खी के डंक को निष्क्रिय करने के लिए किसका उपयोग किया जाता है?",
      options_en: ["Baking soda", "Vinegar", "Lemon juice", "Salt"],
      options_hi: ["बेकिंग सोडा", "सिरका", "नींबू का रस", "नमक"],
      answer: 1,
      attempted: false,
      selected: null
    },
    {
      num: 6,
      question_en: "What is the chemical name of baking soda?",
      question_hi: "बेकिंग सोडा का रासायनिक नाम क्या है?",
      options_en: ["Sodium bicarbonate", "Sodium carbonate", "Sodium chloride", "Sodium hydroxide"],
      options_hi: ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "सोडियम क्लोराइड", "सोडियम हाइड्रॉक्साइड"],
      answer: 1,
      attempted: false,
      selected: null
    },
    {
      num: 7,
      question_en: "Which gas is evolved when an acid reacts with a metal carbonate?",
      question_hi: "जब अम्ल धातु कार्बोनेट से प्रतिक्रिया करता है, तो कौन सी गैस निकलती है?",
      options_en: ["Hydrogen", "Oxygen", "Carbon dioxide", "Nitrogen"],
      options_hi: ["हाइड्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
      answer: 3,
      attempted: false,
      selected: null
    },
    {
      num: 8,
      question_en: "Which of the following is used to neutralize ant bite?",
      question_hi: "चींटी के काटने को निष्क्रिय करने के लिए निम्नलिखित में से क्या उपयोग किया जाता है?",
      options_en: ["Lime", "Soap", "Baking soda", "Vinegar"],
      options_hi: ["चूना", "साबुन", "बेकिंग सोडा", "सिरका"],
      answer: 4,
      attempted: false,
      selected: null
    },
    {
      num: 9,
      question_en: "What is the nature of HCl solution?",
      question_hi: "HCl विलयन का स्वभाव कैसा होता है?",
      options_en: ["Neutral", "Acidic", "Basic", "Salty"],
      options_hi: ["तटस्थ", "अम्लीय", "क्षारीय", "नमकीन"],
      answer: 2,
      attempted: false,
      selected: null
    },
    {
      num: 10,
      question_en: "Which of the following is not an acid?",
      question_hi: "निम्नलिखित में से कौन अम्ल नहीं है?",
      options_en: ["Hydrochloric acid", "Acetic acid", "Sulphuric acid", "Sodium hydroxide"],
      options_hi: ["हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल", "सोडियम हाइड्रॉक्साइड"],
      answer: 4,
      attempted: false,
      selected: null
    },
    {
      num: 11,
      question_en: "Which acid is found in lemon?",
      question_hi: "नींबू में कौन सा अम्ल पाया जाता है?",
      options_en: ["Acetic acid", "Citric acid", "Tartaric acid", "Oxalic acid"],
      options_hi: ["एसिटिक अम्ल", "सिट्रिक अम्ल", "टार्टरिक अम्ल", "ऑक्सालिक अम्ल"],
      answer: 2,
      attempted: false,
      selected: null
    },
    {
      num: 12,
      question_en: "Which acid is present in vinegar?",
      question_hi: "सिरके में कौन सा अम्ल पाया जाता है?",
      options_en: ["Formic acid", "Acetic acid", "Citric acid", "Tartaric acid"],
      options_hi: ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "सिट्रिक अम्ल", "टार्टरिक अम्ल"],
      answer: 2,
      attempted: false,
      selected: null
    },
    {
      num: 13,
      question_en: "Which one of the following is a basic oxide?",
      question_hi: "निम्नलिखित में से कौन एक क्षारीय ऑक्साइड है?",
      options_en: ["CO₂", "SO₂", "Na₂O", "NO₂"],
      options_hi: ["CO₂", "SO₂", "Na₂O", "NO₂"],
      answer: 3,
      attempted: false,
      selected: null
    },
    {
      num: 14,
      question_en: "Which one of the following turns turmeric red?",
      question_hi: "निम्नलिखित में से कौन हल्दी को लाल करता है?",
      options_en: ["Base", "Acid", "Salt", "Water"],
      options_hi: ["क्षार", "अम्ल", "लवण", "जल"],
      answer: 1,
      attempted: false,
      selected: null
    },
    {
      num: 15,
      question_en: "Which acid is used in soft drinks?",
      question_hi: "सॉफ्ट ड्रिंक्स में कौन सा अम्ल उपयोग किया जाता है?",
      options_en: ["Citric acid", "Carbonic acid", "Acetic acid", "Tartaric acid"],
      options_hi: ["सिट्रिक अम्ल", "कार्बोनिक अम्ल", "एसिटिक अम्ल", "टार्टरिक अम्ल"],
      answer: 2,
      attempted: false,
      selected: null
    },
    {
      num: 16,
      question_en: "What is the nature of NaOH?",
      question_hi: "NaOH का स्वभाव कैसा होता है?",
      options_en: ["Acidic", "Basic", "Neutral", "Salt"],
      options_hi: ["अम्लीय", "क्षारीय", "तटस्थ", "लवण"],
      answer: 2,
      attempted: false,
      selected: null
    },
    {
      num: 17,
      question_en: "Which acid is present in curd?",
      question_hi: "दही में कौन सा अम्ल पाया जाता है?",
      options_en: ["Acetic acid", "Citric acid", "Lactic acid", "Tartaric acid"],
      options_hi: ["एसिटिक अम्ल", "सिट्रिक अम्ल", "लेक्टिक अम्ल", "टार्टरिक अम्ल"],
      answer: 3,
      attempted: false,
      selected: null
    },
    {
      num: 18,
      question_en: "Which base is used in antacids?",
      question_hi: "एंटासिड में कौन सा क्षार प्रयोग होता है?",
      options_en: ["NaOH", "Ca(OH)₂", "Mg(OH)₂", "NH₄OH"],
      options_hi: ["NaOH", "Ca(OH)₂", "Mg(OH)₂", "NH₄OH"],
      answer: 3,
      attempted: false,
      selected: null
    },
    {
      num: 19,
      question_en: "Which of the following is used to test for acid?",
      question_hi: "अम्ल की पहचान के लिए इनमें से क्या प्रयोग किया जाता है?",
      options_en: ["Phenolphthalein", "Blue litmus", "Red litmus", "Methyl orange"],
      options_hi: ["फिनोल्फ्थेलेन", "नीला लिटमस", "लाल लिटमस", "मीथाइल ऑरेंज"],
      answer: 2,
      attempted: false,
      selected: null
    },
    {
      num: 20,
      question_en: "What is formed when an acid reacts with a base?",
      question_hi: "जब अम्ल क्षार से प्रतिक्रिया करता है तो क्या बनता है?",
      options_en: ["Salt and acid", "Salt and base", "Salt and water", "Water only"],
      options_hi: ["लवण और अम्ल", "लवण और क्षार", "लवण और जल", "केवल जल"],
      answer: 3,
      attempted: false,
      selected: null
    },
    {
      num: 21,
      question_en: "Which compound is called caustic soda?",
      question_hi: "कौस्टिक सोडा किस यौगिक को कहते हैं?",
      options_en: ["Sodium carbonate", "Sodium bicarbonate", "Sodium hydroxide", "Calcium hydroxide"],
      options_hi: ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड"],
      answer: 3,
      attempted: false,
      selected: null
    },
    {
      num: 22,
      question_en: "Which base is known as milk of magnesia?",
      question_hi: "कौन सा क्षार 'मिल्क ऑफ मैग्नेशिया' कहलाता है?",
      options_en: ["Mg(OH)₂", "Ca(OH)₂", "NaOH", "NH₄OH"],
      options_hi: ["Mg(OH)₂", "Ca(OH)₂", "NaOH", "NH₄OH"],
      answer: 1,
      attempted: false,
      selected: null
    },
    {
      num: 23,
      question_en: "Which acid is found in tomato?",
      question_hi: "टमाटर में कौन सा अम्ल पाया जाता है?",
      options_en: ["Acetic acid", "Citric acid", "Oxalic acid", "Tartaric acid"],
      options_hi: ["एसिटिक अम्ल", "सिट्रिक अम्ल", "ऑक्सालिक अम्ल", "टार्टरिक अम्ल"],
      answer: 3,
      attempted: false,
      selected: null
    },
    {
      num: 24,
      question_en: "What is the pH range of acidic substances?",
      question_hi: "अम्लीय पदार्थों का pH मान किस सीमा में होता है?",
      options_en: ["0 to 7", "7 to 14", "Above 7", "Exactly 7"],
      options_hi: ["0 से 7", "7 से 14", "7 से अधिक", "ठीक 7"],
      answer: 1,
      attempted: false,
      selected: null
    },
    {
      num: 25,
      question_en: "Which of the following is a basic salt?",
      question_hi: "निम्नलिखित में से कौन एक क्षारीय लवण है?",
      options_en: ["Sodium acetate", "Ammonium chloride", "Potassium chloride", "Calcium sulphate"],
      options_hi: ["सोडियम एसीटेट", "अमोनियम क्लोराइड", "पोटेशियम क्लोराइड", "कैल्शियम सल्फेट"],
      answer: 1,
      attempted: false,
      selected: null
    },
      {
        num: 26,
        question_en: "Which compound is known as slaked lime?",
        question_hi: "किस यौगिक को बुझा हुआ चूना कहते हैं?",
        options_en: ["CaO", "Ca(OH)₂", "NaOH", "Mg(OH)₂"],
        options_hi: ["CaO", "Ca(OH)₂", "NaOH", "Mg(OH)₂"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 27,
        question_en: "Which acid is present in ant sting?",
        question_hi: "चींटी के डंक में कौन सा अम्ल पाया जाता है?",
        options_en: ["Acetic acid", "Formic acid", "Citric acid", "Tartaric acid"],
        options_hi: ["एसिटिक अम्ल", "फॉर्मिक अम्ल", "सिट्रिक अम्ल", "टार्टरिक अम्ल"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 28,
        question_en: "Which base is used in making soap?",
        question_hi: "साबुन बनाने में कौन सा क्षार प्रयोग किया जाता है?",
        options_en: ["NaOH", "Ca(OH)₂", "Mg(OH)₂", "NH₄OH"],
        options_hi: ["NaOH", "Ca(OH)₂", "Mg(OH)₂", "NH₄OH"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 29,
        question_en: "Which is the correct formula of gypsum?",
        question_hi: "जिप्सम का सही सूत्र क्या है?",
        options_en: ["CaSO₄·2H₂O", "CaCO₃", "Ca(OH)₂", "CaSO₄"],
        options_hi: ["CaSO₄·2H₂O", "CaCO₃", "Ca(OH)₂", "CaSO₄"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 30,
        question_en: "Which of the following has a sour taste?",
        question_hi: "निम्नलिखित में से किसका स्वाद खट्टा होता है?",
        options_en: ["Acids", "Bases", "Salts", "Water"],
        options_hi: ["अम्ल", "क्षार", "लवण", "जल"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 31,
        question_en: "Which of the following is used to manufacture bleaching powder?",
        question_hi: "निम्नलिखित में से किसका उपयोग ब्लीचिंग पाउडर बनाने में किया जाता है?",
        options_en: ["Ca(OH)₂", "NaCl", "HCl", "Na₂CO₃"],
        options_hi: ["Ca(OH)₂", "NaCl", "HCl", "Na₂CO₃"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 32,
        question_en: "What is the nature of salt formed by strong acid and strong base?",
        question_hi: "प्रबल अम्ल और प्रबल क्षार से बने लवण का स्वभाव कैसा होता है?",
        options_en: ["Acidic", "Basic", "Neutral", "Salty"],
        options_hi: ["अम्लीय", "क्षारीय", "तटस्थ", "नमकीन"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 33,
        question_en: "Which acid is used in car batteries?",
        question_hi: "कार की बैटरी में कौन सा अम्ल प्रयोग किया जाता है?",
        options_en: ["Nitric acid", "Sulphuric acid", "Hydrochloric acid", "Phosphoric acid"],
        options_hi: ["नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "फॉस्फोरिक अम्ल"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 34,
        question_en: "Which of the following turns red litmus blue?",
        question_hi: "निम्नलिखित में से कौन लाल लिटमस को नीला करता है?",
        options_en: ["Acid", "Base", "Salt", "Water"],
        options_hi: ["अम्ल", "क्षार", "लवण", "जल"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 35,
        question_en: "What is the pH range of basic substances?",
        question_hi: "क्षारीय पदार्थों का pH मान किस सीमा में होता है?",
        options_en: ["0 to 7", "7 to 14", "7 only", "Below 7"],
        options_hi: ["0 से 7", "7 से 14", "केवल 7", "7 से कम"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 36,
        question_en: "Which compound is known as washing soda?",
        question_hi: "किस यौगिक को वाशिंग सोडा कहते हैं?",
        options_en: ["Na₂CO₃·10H₂O", "NaHCO₃", "NaCl", "NaOH"],
        options_hi: ["Na₂CO₃·10H₂O", "NaHCO₃", "NaCl", "NaOH"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 37,
        question_en: "Which of the following is acidic in nature?",
        question_hi: "निम्नलिखित में से कौन अम्लीय प्रकृति का है?",
        options_en: ["Milk of magnesia", "Lime water", "Soap", "Lemon juice"],
        options_hi: ["मिल्क ऑफ मैग्नेशिया", "चूने का पानी", "साबुन", "नींबू का रस"],
        answer: 4,
        attempted: false,
        selected: null
      },
      {
        num: 38,
        question_en: "Which of the following is not a property of bases?",
        question_hi: "निम्नलिखित में से कौन क्षारों का गुण नहीं है?",
        options_en: ["Bitter taste", "Soapy touch", "Turns blue litmus red", "Reacts with acids"],
        options_hi: ["कड़वा स्वाद", "साबुन जैसा स्पर्श", "नीला लिटमस लाल करता है", "अम्लों से प्रतिक्रिया करता है"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 39,
        question_en: "What is the common name of sodium bicarbonate?",
        question_hi: "सोडियम बाइकार्बोनेट का सामान्य नाम क्या है?",
        options_en: ["Washing soda", "Baking soda", "Bleaching powder", "Lime"],
        options_hi: ["वाशिंग सोडा", "बेकिंग सोडा", "ब्लीचिंग पाउडर", "चूना"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 40,
        question_en: "Which salt is used in cooking and food preservation?",
        question_hi: "खाना पकाने और खाद्य संरक्षण में किस लवण का प्रयोग किया जाता है?",
        options_en: ["Sodium bicarbonate", "Potassium nitrate", "Sodium chloride", "Calcium carbonate"],
        options_hi: ["सोडियम बाइकार्बोनेट", "पोटेशियम नाइट्रेट", "सोडियम क्लोराइड", "कैल्शियम कार्बोनेट"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 41,
        question_en: "Which salt is used in the treatment of acidity?",
        question_hi: "अम्लता के उपचार में किस लवण का प्रयोग किया जाता है?",
        options_en: ["Sodium bicarbonate", "Sodium chloride", "Potassium sulphate", "Ammonium chloride"],
        options_hi: ["सोडियम बाइकार्बोनेट", "सोडियम क्लोराइड", "पोटेशियम सल्फेट", "अमोनियम क्लोराइड"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 42,
        question_en: "What is the nature of ammonium chloride solution?",
        question_hi: "अमोनियम क्लोराइड विलयन का स्वभाव कैसा होता है?",
        options_en: ["Acidic", "Basic", "Neutral", "Amphoteric"],
        options_hi: ["अम्लीय", "क्षारीय", "तटस्थ", "उभयधर्मी"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 43,
        question_en: "Which of the following is an amphoteric oxide?",
        question_hi: "निम्नलिखित में से कौन उभयधर्मी ऑक्साइड है?",
        options_en: ["Al₂O₃", "Na₂O", "CO₂", "MgO"],
        options_hi: ["Al₂O₃", "Na₂O", "CO₂", "MgO"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 44,
        question_en: "What is the effect of acid rain on marble?",
        question_hi: "अम्ल वर्षा का संगमरमर पर क्या प्रभाव पड़ता है?",
        options_en: ["No effect", "Polishes it", "Corrodes it", "Strengthens it"],
        options_hi: ["कोई प्रभाव नहीं", "चमकाता है", "क्षरण करता है", "मजबूत बनाता है"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 45,
        question_en: "Which of these is a natural indicator?",
        question_hi: "इनमें से कौन एक प्राकृतिक संकेतक है?",
        options_en: ["Phenolphthalein", "Methyl orange", "Litmus", "All of the above"],
        options_hi: ["फिनोल्फ्थेलेन", "मीथाइल ऑरेंज", "लिटमस", "उपरोक्त सभी"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 46,
        question_en: "Which of the following acids is not found in food?",
        question_hi: "निम्नलिखित में से कौन सा अम्ल भोजन में नहीं पाया जाता?",
        options_en: ["Citric acid", "Oxalic acid", "Formic acid", "Sulphuric acid"],
        options_hi: ["सिट्रिक अम्ल", "ऑक्सालिक अम्ल", "फॉर्मिक अम्ल", "सल्फ्यूरिक अम्ल"],
        answer: 4,
        attempted: false,
        selected: null
      },
      {
        num: 47,
        question_en: "Which of the following is not a salt?",
        question_hi: "निम्नलिखित में से कौन लवण नहीं है?",
        options_en: ["NaCl", "KNO₃", "NH₄OH", "Na₂CO₃"],
        options_hi: ["NaCl", "KNO₃", "NH₄OH", "Na₂CO₃"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 48,
        question_en: "Which base is used in drain cleaners?",
        question_hi: "ड्रेन क्लीनर में कौन सा क्षार प्रयोग किया जाता है?",
        options_en: ["Ca(OH)₂", "NaOH", "NH₄OH", "KOH"],
        options_hi: ["Ca(OH)₂", "NaOH", "NH₄OH", "KOH"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 49,
        question_en: "Which of the following shows pH less than 7?",
        question_hi: "निम्नलिखित में से किसका pH 7 से कम होता है?",
        options_en: ["Soap solution", "Lemon juice", "Lime water", "Milk of magnesia"],
        options_hi: ["साबुन विलयन", "नींबू का रस", "चूने का पानी", "मिल्क ऑफ मैग्नेशिया"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 50,
        question_en: "What is the chemical formula of bleaching powder?",
        question_hi: "ब्लीचिंग पाउडर का रासायनिक सूत्र क्या है?",
        options_en: ["CaCl₂", "Ca(ClO)₂", "CaOCl₂", "CaCO₃"],
        options_hi: ["CaCl₂", "Ca(ClO)₂", "CaOCl₂", "CaCO₃"],
        answer: 3,
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
