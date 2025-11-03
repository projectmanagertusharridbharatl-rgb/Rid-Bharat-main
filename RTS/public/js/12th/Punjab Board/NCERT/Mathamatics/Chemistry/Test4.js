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
