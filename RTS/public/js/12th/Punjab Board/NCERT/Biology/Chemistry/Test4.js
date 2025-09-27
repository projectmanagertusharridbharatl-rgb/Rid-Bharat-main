const questions = [
  {
    num: 1,
    question_en: "Which salt is used to treat acidity in the stomach?",
    question_hi: "पेट में अम्लता के इलाज में किस लवण का उपयोग किया जाता है?",
    options_en: ["Sodium bicarbonate", "Sodium chloride", "Potassium nitrate", "Ammonium chloride"],
    options_hi: ["सोडियम बाइकार्बोनेट", "सोडियम क्लोराइड", "पोटेशियम नाइट्रेट", "अमोनियम क्लोराइड"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "What is the chemical name of baking soda?",
    question_hi: "बेकिंग सोडा का रासायनिक नाम क्या है?",
    options_en: ["Sodium carbonate", "Sodium bicarbonate", "Calcium carbonate", "Ammonium chloride"],
    options_hi: ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "कैल्शियम कार्बोनेट", "अमोनियम क्लोराइड"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "Which acid is present in vinegar?",
    question_hi: "सिरके में कौन सा अम्ल पाया जाता है?",
    options_en: ["Citric acid", "Lactic acid", "Acetic acid", "Formic acid"],
    options_hi: ["सिट्रिक अम्ल", "लैक्टिक अम्ल", "एसिटिक अम्ल", "फॉर्मिक अम्ल"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "What is the pH of a neutral solution?",
    question_hi: "तटस्थ विलयन का pH कितना होता है?",
    options_en: ["0", "7", "14", "1"],
    options_hi: ["0", "7", "14", "1"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "Which of the following is a strong base?",
    question_hi: "निम्नलिखित में से कौन एक शक्तिशाली क्षार है?",
    options_en: ["Ammonia", "Sodium hydroxide", "Calcium hydroxide", "Magnesium hydroxide"],
    options_hi: ["अमोनिया", "सोडियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड", "मैग्नीशियम हाइड्रॉक्साइड"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "Which of these indicators is used to identify acids and bases?",
    question_hi: "अम्लों और क्षारों की पहचान के लिए इनमें से कौन सा संकेतक प्रयोग किया जाता है?",
    options_en: ["Litmus", "Phenolphthalein", "Methyl orange", "All of these"],
    options_hi: ["लिटमस", "फिनोल्फ्थेलेन", "मीथाइल ऑरेंज", "इनमें से सभी"],
    answer: 4,
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "Which acid is present in lemon?",
    question_hi: "नींबू में कौन सा अम्ल पाया जाता है?",
    options_en: ["Acetic acid", "Citric acid", "Formic acid", "Lactic acid"],
    options_hi: ["एसिटिक अम्ल", "सिट्रिक अम्ल", "फॉर्मिक अम्ल", "लैक्टिक अम्ल"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "Which of the following salts is used in toothpaste to prevent cavities?",
    question_hi: "दांतों की सड़न को रोकने के लिए टूथपेस्ट में कौन सा लवण उपयोग किया जाता है?",
    options_en: ["Sodium chloride", "Calcium carbonate", "Sodium fluoride", "Ammonium nitrate"],
    options_hi: ["सोडियम क्लोराइड", "कैल्शियम कार्बोनेट", "सोडियम फ्लोराइड", "अमोनियम नाइट्रेट"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "Which base is used in the manufacture of soap?",
    question_hi: "साबुन बनाने में किस क्षार का उपयोग होता है?",
    options_en: ["Calcium hydroxide", "Sodium hydroxide", "Potassium nitrate", "Ammonium hydroxide"],
    options_hi: ["कैल्शियम हाइड्रॉक्साइड", "सोडियम हाइड्रॉक्साइड", "पोटेशियम नाइट्रेट", "अमोनियम हाइड्रॉक्साइड"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "Which salt is used for making bleaching powder?",
    question_hi: "ब्लीचिंग पाउडर बनाने के लिए किस लवण का उपयोग होता है?",
    options_en: ["Calcium carbonate", "Calcium hydroxide", "Calcium chloride", "Calcium oxide"],
    options_hi: ["कैल्शियम कार्बोनेट", "कैल्शियम हाइड्रॉक्साइड", "कैल्शियम क्लोराइड", "कैल्शियम ऑक्साइड"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "What is the chemical formula of hydrochloric acid?",
    question_hi: "हाइड्रोक्लोरिक अम्ल का रासायनिक सूत्र क्या है?",
    options_en: ["H₂SO₄", "HNO₃", "HCl", "CH₃COOH"],
    options_hi: ["H₂SO₄", "HNO₃", "HCl", "CH₃COOH"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "Which of the following is a weak acid?",
    question_hi: "निम्नलिखित में से कौन एक कमजोर अम्ल है?",
    options_en: ["HCl", "HNO₃", "CH₃COOH", "H₂SO₄"],
    options_hi: ["HCl", "HNO₃", "CH₃COOH", "H₂SO₄"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "What is formed when an acid reacts with a base?",
    question_hi: "जब अम्ल क्षार के साथ प्रतिक्रिया करता है तो क्या बनता है?",
    options_en: ["Salt and water", "Gas and salt", "Salt and acid", "Water and base"],
    options_hi: ["लवण और जल", "गैस और लवण", "लवण और अम्ल", "जल और क्षार"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "Which gas is released when an acid reacts with a metal carbonate?",
    question_hi: "जब अम्ल धातु के कार्बोनेट से प्रतिक्रिया करता है तो कौन सी गैस निकलती है?",
    options_en: ["CO₂", "H₂", "O₂", "Cl₂"],
    options_hi: ["CO₂", "H₂", "O₂", "Cl₂"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "Which of the following is an alkali?",
    question_hi: "निम्नलिखित में से कौन एक क्षार है?",
    options_en: ["NaOH", "HCl", "CH₃COOH", "NH₄Cl"],
    options_hi: ["NaOH", "HCl", "CH₃COOH", "NH₄Cl"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "Which of these is used in antacid tablets?",
    question_hi: "इनमें से कौन एंटासिड गोली में उपयोग किया जाता है?",
    options_en: ["NaCl", "NaHCO₃", "Na₂CO₃", "NaOH"],
    options_hi: ["NaCl", "NaHCO₃", "Na₂CO₃", "NaOH"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "What is the pH range of bases?",
    question_hi: "क्षारों की pH सीमा क्या होती है?",
    options_en: ["0 to 7", "7 to 14", "4 to 7", "1 to 7"],
    options_hi: ["0 से 7", "7 से 14", "4 से 7", "1 से 7"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "What is the taste of acids?",
    question_hi: "अम्लों का स्वाद कैसा होता है?",
    options_en: ["Sweet", "Sour", "Bitter", "Salty"],
    options_hi: ["मीठा", "खट्टा", "कड़वा", "नमकीन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "Which of the following substances turns red litmus blue?",
    question_hi: "निम्नलिखित में से कौन पदार्थ लाल लिटमस को नीला करता है?",
    options_en: ["HCl", "NaOH", "CH₃COOH", "H₂SO₄"],
    options_hi: ["HCl", "NaOH", "CH₃COOH", "H₂SO₄"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "Which acid is found in curd?",
    question_hi: "दही में कौन सा अम्ल पाया जाता है?",
    options_en: ["Formic acid", "Acetic acid", "Lactic acid", "Citric acid"],
    options_hi: ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "लैक्टिक अम्ल", "सिट्रिक अम्ल"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "Which of these can neutralize a base?",
    question_hi: "इनमें से कौन क्षार को निष्क्रिय कर सकता है?",
    options_en: ["Salt", "Acid", "Water", "Oxide"],
    options_hi: ["लवण", "अम्ल", "जल", "ऑक्साइड"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "Which acid is present in ant sting?",
    question_hi: "चींटी के डंक में कौन सा अम्ल पाया जाता है?",
    options_en: ["Formic acid", "Acetic acid", "Citric acid", "Hydrochloric acid"],
    options_hi: ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "सिट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "What is the nature of metal oxides?",
    question_hi: "धात्विक ऑक्साइड का स्वभाव कैसा होता है?",
    options_en: ["Acidic", "Neutral", "Basic", "Amphoteric"],
    options_hi: ["अम्लीय", "उदासीन", "क्षारीय", "उभयधर्मी"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "Which of the following salts is neutral in nature?",
    question_hi: "निम्नलिखित में से कौन सा लवण तटस्थ प्रकृति का होता है?",
    options_en: ["NaCl", "NH₄Cl", "CH₃COONa", "Na₂CO₃"],
    options_hi: ["NaCl", "NH₄Cl", "CH₃COONa", "Na₂CO₃"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "Which of the following is an example of a basic salt?",
    question_hi: "निम्नलिखित में से कौन एक क्षारीय लवण का उदाहरण है?",
    options_en: ["Sodium acetate", "Ammonium chloride", "Sodium carbonate", "Potassium chloride"],
    options_hi: ["सोडियम एसीटेट", "अमोनियम क्लोराइड", "सोडियम कार्बोनेट", "पोटेशियम क्लोराइड"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 26,
    question_en: "Which salt is used in cold packs?",
    question_hi: "ठंडी पट्टियों में कौन सा लवण उपयोग होता है?",
    options_en: ["Ammonium nitrate", "Sodium chloride", "Potassium iodide", "Sodium carbonate"],
    options_hi: ["अमोनियम नाइट्रेट", "सोडियम क्लोराइड", "पोटेशियम आयोडाइड", "सोडियम कार्बोनेट"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "Which of the following is not a mineral acid?",
    question_hi: "निम्नलिखित में से कौन एक खनिज अम्ल नहीं है?",
    options_en: ["Hydrochloric acid", "Sulphuric acid", "Nitric acid", "Acetic acid"],
    options_hi: ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    answer: 4,
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "What happens to blue litmus paper in acid?",
    question_hi: "अम्ल में नीला लिटमस पेपर क्या रंग बदलता है?",
    options_en: ["Turns red", "Turns green", "Turns blue", "No change"],
    options_hi: ["लाल हो जाता है", "हरा हो जाता है", "नीला ही रहता है", "कोई परिवर्तन नहीं"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "Which of the following is a property of bases?",
    question_hi: "निम्नलिखित में से कौन क्षार की विशेषता है?",
    options_en: ["Sour taste", "Turn red litmus blue", "Release H⁺ ions", "Corrode metals"],
    options_hi: ["खट्टा स्वाद", "लाल लिटमस को नीला करना", "H⁺ आयन छोड़ना", "धातुओं को गलाना"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "Which of these substances has a pH less than 7?",
    question_hi: "इनमें से किस पदार्थ का pH 7 से कम होता है?",
    options_en: ["Lime water", "Toothpaste", "Vinegar", "Soap solution"],
    options_hi: ["चूना पानी", "टूथपेस्ट", "सिरका", "साबुन घोल"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "What is the chemical name of table salt?",
    question_hi: "साधारण नमक का रासायनिक नाम क्या है?",
    options_en: ["Sodium nitrate", "Sodium chloride", "Potassium chloride", "Calcium chloride"],
    options_hi: ["सोडियम नाइट्रेट", "सोडियम क्लोराइड", "पोटेशियम क्लोराइड", "कैल्शियम क्लोराइड"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "Which acid is produced in the stomach for digestion?",
    question_hi: "पाचन के लिए पेट में कौन सा अम्ल बनता है?",
    options_en: ["Sulphuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"],
    options_hi: ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "Which of the following is not a use of baking soda?",
    question_hi: "निम्नलिखित में से कौन बेकिंग सोडा का उपयोग नहीं है?",
    options_en: ["Fire extinguisher", "Making cake fluffy", "Antacid", "Welding metal"],
    options_hi: ["अग्निशामक", "केक को फूलाने में", "एंटासिड", "धातु को वेल्डिंग करने में"],
    answer: 4,
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "Which salt is responsible for hardness of water?",
    question_hi: "पानी की कठोरता के लिए कौन सा लवण जिम्मेदार है?",
    options_en: ["Calcium chloride", "Sodium chloride", "Ammonium nitrate", "Potassium iodide"],
    options_hi: ["कैल्शियम क्लोराइड", "सोडियम क्लोराइड", "अमोनियम नाइट्रेट", "पोटेशियम आयोडाइड"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "Which indicator gives pink color in basic medium?",
    question_hi: "क्षारीय माध्यम में कौन सा संकेतक गुलाबी रंग देता है?",
    options_en: ["Litmus", "Methyl orange", "Phenolphthalein", "Turmeric"],
    options_hi: ["लिटमस", "मीथाइल ऑरेंज", "फिनोल्फ्थेलेन", "हल्दी"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "What is formed when acid reacts with metal?",
    question_hi: "जब अम्ल धातु से प्रतिक्रिया करता है तो क्या बनता है?",
    options_en: ["Salt and hydrogen gas", "Salt and water", "Only hydrogen gas", "Only salt"],
    options_hi: ["लवण और हाइड्रोजन गैस", "लवण और जल", "केवल हाइड्रोजन गैस", "केवल लवण"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "Which acid is used to clean toilet tiles?",
    question_hi: "शौचालय की टाइल्स को साफ करने में कौन सा अम्ल उपयोग किया जाता है?",
    options_en: ["Acetic acid", "Oxalic acid", "Hydrochloric acid", "Sulphuric acid"],
    options_hi: ["एसिटिक अम्ल", "ऑक्सालिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "Which of the following is a neutral oxide?",
    question_hi: "निम्नलिखित में से कौन एक उदासीन ऑक्साइड है?",
    options_en: ["NO", "CO₂", "Na₂O", "SO₂"],
    options_hi: ["NO", "CO₂", "Na₂O", "SO₂"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "Which acid is used in car batteries?",
    question_hi: "कार बैटरी में कौन सा अम्ल उपयोग होता है?",
    options_en: ["Hydrochloric acid", "Sulphuric acid", "Nitric acid", "Acetic acid"],
    options_hi: ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "Which salt is used in preserving food?",
    question_hi: "भोजन को संरक्षित करने में कौन सा लवण उपयोग होता है?",
    options_en: ["Potassium nitrate", "Sodium chloride", "Sodium carbonate", "Calcium carbonate"],
    options_hi: ["पोटेशियम नाइट्रेट", "सोडियम क्लोराइड", "सोडियम कार्बोनेट", "कैल्शियम कार्बोनेट"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "Which of these salts is acidic in nature?",
    question_hi: "इनमें से कौन सा लवण अम्लीय प्रकृति का होता है?",
    options_en: ["Ammonium chloride", "Sodium chloride", "Potassium nitrate", "Calcium sulphate"],
    options_hi: ["अमोनियम क्लोराइड", "सोडियम क्लोराइड", "पोटेशियम नाइट्रेट", "कैल्शियम सल्फेट"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "Which base is used in manufacture of paper?",
    question_hi: "कागज़ निर्माण में कौन सा क्षार प्रयोग होता है?",
    options_en: ["NaOH", "NH₄OH", "Ca(OH)₂", "KOH"],
    options_hi: ["NaOH", "NH₄OH", "Ca(OH)₂", "KOH"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "What is the color of phenolphthalein in acidic solution?",
    question_hi: "अम्लीय विलयन में फिनोल्फ्थेलेन का रंग क्या होता है?",
    options_en: ["Colorless", "Pink", "Red", "Blue"],
    options_hi: ["बेरंग", "गुलाबी", "लाल", "नीला"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "Which chemical is used to neutralize soil acidity?",
    question_hi: "मिट्टी की अम्लता को निष्क्रिय करने के लिए कौन सा रसायन उपयोग होता है?",
    options_en: ["Ammonium nitrate", "Calcium hydroxide", "Sodium bicarbonate", "Potassium chloride"],
    options_hi: ["अमोनियम नाइट्रेट", "कैल्शियम हाइड्रॉक्साइड", "सोडियम बाइकार्बोनेट", "पोटेशियम क्लोराइड"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "Which of the following is an amphoteric oxide?",
    question_hi: "निम्नलिखित में से कौन सा एक उभयधर्मी ऑक्साइड है?",
    options_en: ["ZnO", "Na₂O", "SO₂", "CO₂"],
    options_hi: ["ZnO", "Na₂O", "SO₂", "CO₂"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "What is the nature of lime water?",
    question_hi: "चूना पानी का स्वभाव कैसा होता है?",
    options_en: ["Acidic", "Neutral", "Basic", "Oxidic"],
    options_hi: ["अम्लीय", "तटस्थ", "क्षारीय", "ऑक्साइडिक"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "Which gas is released when acid reacts with metal?",
    question_hi: "जब अम्ल धातु से प्रतिक्रिया करता है तो कौन सी गैस निकलती है?",
    options_en: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
    options_hi: ["ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "Which acid is used to remove rust?",
    question_hi: "जंग हटाने के लिए कौन सा अम्ल प्रयोग होता है?",
    options_en: ["Nitric acid", "Phosphoric acid", "Acetic acid", "Sulphuric acid"],
    options_hi: ["नाइट्रिक अम्ल", "फॉस्फोरिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "Which salt is used in fertilizers?",
    question_hi: "उर्वरकों में कौन सा लवण उपयोग होता है?",
    options_en: ["Sodium chloride", "Ammonium nitrate", "Calcium sulphate", "Magnesium oxide"],
    options_hi: ["सोडियम क्लोराइड", "अमोनियम नाइट्रेट", "कैल्शियम सल्फेट", "मैग्नीशियम ऑक्साइड"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "What is the chemical formula of washing soda?",
    question_hi: "वॉशिंग सोडा का रासायनिक सूत्र क्या है?",
    options_en: ["NaHCO₃", "NaCl", "Na₂CO₃", "CaCO₃"],
    options_hi: ["NaHCO₃", "NaCl", "Na₂CO₃", "CaCO₃"],
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
