const questions = [
  {
    num: 1,
    question_en: "Which salt is used to treat acidity in the stomach?",
    question_hi: "पेट में अम्लता के इलाज में किस लवण का उपयोग किया जाता है?",
    options_en: ["Sodium bicarbonate", "Sodium chloride", "Potassium nitrate", "Ammonium chloride"],
    options_hi: ["सोडियम बाइकार्बोनेट", "सोडियम क्लोराइड", "पोटेशियम नाइट्रेट", "अमोनियम क्लोराइड"],
    answer_en: "Sodium bicarbonate",
    answer_hi: "सोडियम बाइकार्बोनेट",
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "What is the pH of pure water?",
    question_hi: "शुद्ध जल का pH क्या होता है?",
    options_en: ["7", "1", "14", "0"],
    options_hi: ["7", "1", "14", "0"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "Which acid is present in vinegar?",
    question_hi: "सिरके में कौन सा अम्ल पाया जाता है?",
    options_en: ["Acetic acid", "Citric acid", "Sulfuric acid", "Hydrochloric acid"],
    options_hi: ["एसिटिक अम्ल", "साइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
    answer_en: "Acetic acid",
    answer_hi: "एसिटिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "Which gas is evolved when an acid reacts with a metal?",
    question_hi: "जब अम्ल किसी धातु के साथ प्रतिक्रिया करता है तो कौन सी गैस निकलती है?",
    options_en: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon dioxide"],
    options_hi: ["हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
    answer_en: "Hydrogen",
    answer_hi: "हाइड्रोजन",
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "What is the chemical formula of baking soda?",
    question_hi: "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
    options_en: ["NaHCO₃", "NaCl", "KNO₃", "CaCO₃"],
    options_hi: ["NaHCO₃", "NaCl", "KNO₃", "CaCO₃"],
    answer_en: "NaHCO₃",
    answer_hi: "NaHCO₃",
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "Which acid is known as 'King of Chemicals'?",
    question_hi: "किस अम्ल को 'रसायनों का राजा' कहा जाता है?",
    options_en: ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"],
    options_hi: ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    answer_en: "Sulfuric acid",
    answer_hi: "सल्फ्यूरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "Which base is commonly known as 'caustic soda'?",
    question_hi: "कौन सी क्षार को सामान्यतः 'कॉस्टिक सोडा' कहा जाता है?",
    options_en: ["Sodium hydroxide", "Potassium hydroxide", "Calcium hydroxide", "Ammonium hydroxide"],
    options_hi: ["सोडियम हाइड्रॉक्साइड", "पोटैशियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड", "अमोनियम हाइड्रॉक्साइड"],
    answer_en: "Sodium hydroxide",
    answer_hi: "सोडियम हाइड्रॉक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "What is the chemical formula of washing soda?",
    question_hi: "वॉशिंग सोडा का रासायनिक सूत्र क्या है?",
    options_en: ["Na₂CO₃·10H₂O", "NaHCO₃", "CaCO₃", "K₂CO₃"],
    options_hi: ["Na₂CO₃·10H₂O", "NaHCO₃", "CaCO₃", "K₂CO₃"],
    answer_en: "Na₂CO₃·10H₂O",
    answer_hi: "Na₂CO₃·10H₂O",
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "Which metal is used in the extraction of aluminium?",
    question_hi: "एल्युमिनियम के निष्कर्षण में किस धातु का उपयोग होता है?",
    options_en: ["Aluminium", "Iron", "Copper", "Zinc"],
    options_hi: ["एल्युमिनियम", "लोहा", "तांबा", "जिंक"],
    answer_en: "Aluminium",
    answer_hi: "एल्युमिनियम",
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "Which salt is used in baking?",
    question_hi: "बेकिंग में किस लवण का उपयोग किया जाता है?",
    options_en: ["Sodium bicarbonate", "Sodium chloride", "Potassium nitrate", "Calcium carbonate"],
    options_hi: ["सोडियम बाइकार्बोनेट", "सोडियम क्लोराइड", "पोटेशियम नाइट्रेट", "कैल्शियम कार्बोनेट"],
    answer_en: "Sodium bicarbonate",
    answer_hi: "सोडियम बाइकार्बोनेट",
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "What is the nature of solutions with pH less than 7?",
    question_hi: "7 से कम pH वाले विलयन का स्वभाव क्या होता है?",
    options_en: ["Acidic", "Basic", "Neutral", "Salt solution"],
    options_hi: ["अम्लीय", "क्षारीय", "तटस्थ", "लवण विलयन"],
    answer_en: "Acidic",
    answer_hi: "अम्लीय",
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "Which acid is used in car batteries?",
    question_hi: "कार बैटरी में किस अम्ल का उपयोग होता है?",
    options_en: ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "Acetic acid"],
    options_hi: ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल"],
    answer_en: "Sulfuric acid",
    answer_hi: "सल्फ्यूरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "What is the main constituent of natural gas?",
    question_hi: "प्राकृतिक गैस का मुख्य घटक क्या है?",
    options_en: ["Methane", "Ethane", "Propane", "Butane"],
    options_hi: ["मीथेन", "एथेन", "प्रोपेन", "ब्यूटेन"],
    answer_en: "Methane",
    answer_hi: "मीथेन",
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "What is the chemical formula of ammonia?",
    question_hi: "अमोनिया का रासायनिक सूत्र क्या है?",
    options_en: ["NH₃", "NO₂", "N₂O", "HNO₃"],
    options_hi: ["NH₃", "NO₂", "N₂O", "HNO₃"],
    answer_en: "NH₃",
    answer_hi: "NH₃",
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "Which gas causes the greenhouse effect?",
    question_hi: "ग्रीनहाउस प्रभाव किस गैस के कारण होता है?",
    options_en: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कौन सी धातु कमरे के तापमान पर द्रव होती है?",
    options_en: ["Mercury", "Iron", "Copper", "Aluminium"],
    options_hi: ["पारा", "लोहा", "तांबा", "एल्युमिनियम"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "What is the common name of calcium carbonate?",
    question_hi: "कैल्शियम कार्बोनेट का सामान्य नाम क्या है?",
    options_en: ["Limestone", "Baking soda", "Washing soda", "Plaster of Paris"],
    options_hi: ["चूना पत्थर", "बेकिंग सोडा", "वॉशिंग सोडा", "प्लास्टर ऑफ पेरिस"],
    answer_en: "Limestone",
    answer_hi: "चूना पत्थर",
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "Which element is known as 'King of Chemicals'?",
    question_hi: "कौन सा तत्व 'रसायनों का राजा' कहलाता है?",
    options_en: ["Sulfur", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["सल्फर", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Sulfur",
    answer_hi: "सल्फर",
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "Which gas is used for sterilizing hospital equipment?",
    question_hi: "अस्पताल उपकरणों को स्टेरिलाइज करने के लिए किस गैस का उपयोग होता है?",
    options_en: ["Ethylene oxide", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["एथिलीन ऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Ethylene oxide",
    answer_hi: "एथिलीन ऑक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "What is the chemical formula of common salt?",
    question_hi: "सामान्य नमक का रासायनिक सूत्र क्या है?",
    options_en: ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
    options_hi: ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
    answer_en: "NaCl",
    answer_hi: "NaCl",
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "Which element is essential for hemoglobin?",
    question_hi: "हीमोग्लोबिन के लिए कौन सा तत्व आवश्यक है?",
    options_en: ["Iron", "Calcium", "Potassium", "Sodium"],
    options_hi: ["लोहा", "कैल्शियम", "पोटैशियम", "सोडियम"],
    answer_en: "Iron",
    answer_hi: "लोहा",
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "What is the boiling point of water?",
    question_hi: "जल का उबलने का तापमान क्या है?",
    options_en: ["100°C", "90°C", "80°C", "110°C"],
    options_hi: ["100°C", "90°C", "80°C", "110°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "Which of the following is a noble gas?",
    question_hi: "निम्नलिखित में से कौन गैसें नोबल गैस हैं?",
    options_en: ["Helium", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["हीलियम", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "Which acid is present in lemon juice?",
    question_hi: "नींबू के रस में कौन सा अम्ल पाया जाता है?",
    options_en: ["Citric acid", "Acetic acid", "Sulfuric acid", "Hydrochloric acid"],
    options_hi: ["साइट्रिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
    answer_en: "Citric acid",
    answer_hi: "साइट्रिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "Which metal is used in thermite reaction?",
    question_hi: "थर्माइट प्रतिक्रिया में कौन सी धातु का उपयोग होता है?",
    options_en: ["Aluminium", "Copper", "Iron", "Zinc"],
    options_hi: ["एल्युमिनियम", "तांबा", "लोहा", "जिंक"],
    answer_en: "Aluminium",
    answer_hi: "एल्युमिनियम",
    attempted: false,
    selected: null
  },
   {
    num: 26,
    question_en: "What is the chemical formula of baking soda?",
    question_hi: "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
    options_en: ["NaHCO₃", "Na₂CO₃", "NaCl", "KCl"],
    options_hi: ["NaHCO₃", "Na₂CO₃", "NaCl", "KCl"],
    answer_en: "NaHCO₃",
    answer_hi: "NaHCO₃",
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "Which acid is found in vinegar?",
    question_hi: "सिरके में कौन सा अम्ल पाया जाता है?",
    options_en: ["Acetic acid", "Citric acid", "Sulfuric acid", "Hydrochloric acid"],
    options_hi: ["एसिटिक अम्ल", "सिट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
    answer_en: "Acetic acid",
    answer_hi: "एसिटिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "What is the pH of pure water?",
    question_hi: "शुद्ध जल का pH क्या होता है?",
    options_en: ["7", "1", "14", "0"],
    options_hi: ["7", "1", "14", "0"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "Which gas is released when an acid reacts with a metal?",
    question_hi: "जब अम्ल किसी धातु के साथ प्रतिक्रिया करता है तो कौन सा गैस निकलता है?",
    options_en: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon dioxide"],
    options_hi: ["हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
    answer_en: "Hydrogen",
    answer_hi: "हाइड्रोजन",
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "Which salt is formed when hydrochloric acid reacts with sodium hydroxide?",
    question_hi: "जब हाइड्रोक्लोरिक अम्ल का प्रतिक्रिया सोडियम हाइड्रॉक्साइड से होती है तो कौन सा लवण बनता है?",
    options_en: ["Sodium chloride", "Sodium sulfate", "Potassium chloride", "Calcium chloride"],
    options_hi: ["सोडियम क्लोराइड", "सोडियम सल्फेट", "पोटैशियम क्लोराइड", "कैल्शियम क्लोराइड"],
    answer_en: "Sodium chloride",
    answer_hi: "सोडियम क्लोराइड",
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "Which of the following is an amphoteric oxide?",
    question_hi: "निम्नलिखित में से कौन सा ऐम्फोटेरिक ऑक्साइड है?",
    options_en: ["Aluminum oxide", "Carbon dioxide", "Sulfur trioxide", "Nitrogen dioxide"],
    options_hi: ["एल्युमिनियम ऑक्साइड", "कार्बन डाइऑक्साइड", "सल्फर ट्राइऑक्साइड", "नाइट्रोजन डाइऑक्साइड"],
    answer_en: "Aluminum oxide",
    answer_hi: "एल्युमिनियम ऑक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "Which of these is a strong acid?",
    question_hi: "इनमें से कौन सा मजबूत अम्ल है?",
    options_en: ["Hydrochloric acid", "Acetic acid", "Citric acid", "Formic acid"],
    options_hi: ["हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल", "सिट्रिक अम्ल", "फॉर्मिक अम्ल"],
    answer_en: "Hydrochloric acid",
    answer_hi: "हाइड्रोक्लोरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "What is the common name of calcium oxide?",
    question_hi: "कैल्शियम ऑक्साइड का सामान्य नाम क्या है?",
    options_en: ["Quick lime", "Baking soda", "Plaster of Paris", "Slaked lime"],
    options_hi: ["क्विक लाइम", "बेकिंग सोडा", "प्लास्टर ऑफ पेरिस", "स्लेक्ड लाइम"],
    answer_en: "Quick lime",
    answer_hi: "क्विक लाइम",
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "Which gas is commonly known as laughing gas?",
    question_hi: "कौन सा गैस सामान्यतः 'हंसने वाली गैस' के नाम से जाना जाता है?",
    options_en: ["Nitrous oxide", "Nitrogen", "Oxygen", "Carbon monoxide"],
    options_hi: ["नाइट्रस ऑक्साइड", "नाइट्रोजन", "ऑक्सीजन", "कार्बन मोनोऑक्साइड"],
    answer_en: "Nitrous oxide",
    answer_hi: "नाइट्रस ऑक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "What is the molar mass of water (H₂O)?",
    question_hi: "जल (H₂O) का मोलर द्रव्यमान क्या है?",
    options_en: ["18 g/mol", "16 g/mol", "17 g/mol", "20 g/mol"],
    options_hi: ["18 ग्राम/मोल", "16 ग्राम/मोल", "17 ग्राम/मोल", "20 ग्राम/मोल"],
    answer_en: "18 g/mol",
    answer_hi: "18 ग्राम/मोल",
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "Which element is a halogen?",
    question_hi: "कौन सा तत्व हैलोजन है?",
    options_en: ["Chlorine", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["क्लोरीन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Chlorine",
    answer_hi: "क्लोरीन",
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "Which compound is used in fertilizers to provide nitrogen?",
    question_hi: "फर्टिलाइजर में नाइट्रोजन देने के लिए कौन सा यौगिक उपयोग किया जाता है?",
    options_en: ["Ammonium nitrate", "Calcium carbonate", "Potassium chloride", "Sodium sulfate"],
    options_hi: ["अमोनियम नाइट्रेट", "कैल्शियम कार्बोनेट", "पोटैशियम क्लोराइड", "सोडियम सल्फेट"],
    answer_en: "Ammonium nitrate",
    answer_hi: "अमोनियम नाइट्रेट",
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "What type of bond is formed by sharing electrons?",
    question_hi: "इलेक्ट्रॉनों को साझा करके किस प्रकार का बंधन बनता है?",
    options_en: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
    options_hi: ["कोवैलेंट बंधन", "आयोनिक बंधन", "मेटालिक बंधन", "हाइड्रोजन बंधन"],
    answer_en: "Covalent bond",
    answer_hi: "कोवैलेंट बंधन",
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कौन सा धातु सामान्य तापमान पर द्रव अवस्था में होता है?",
    options_en: ["Mercury", "Iron", "Copper", "Silver"],
    options_hi: ["पारा", "लोहा", "तांबा", "चांदी"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "Which gas is responsible for acid rain?",
    question_hi: "एसिड बारिश के लिए कौन सा गैस जिम्मेदार होता है?",
    options_en: ["Sulfur dioxide", "Nitrogen", "Oxygen", "Carbon dioxide"],
    options_hi: ["सल्फर डाइऑक्साइड", "नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड"],
    answer_en: "Sulfur dioxide",
    answer_hi: "सल्फर डाइऑक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "What is the shape of a methane (CH₄) molecule?",
    question_hi: "मीथेन (CH₄) अणु का आकार क्या है?",
    options_en: ["Tetrahedral", "Linear", "Trigonal planar", "Bent"],
    options_hi: ["टेट्राहेड्रल", "रेखीय", "ट्राइगोनल प्लानर", "मोड़ वाला"],
    answer_en: "Tetrahedral",
    answer_hi: "टेट्राहेड्रल",
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "Which acid is responsible for sour taste in lemons?",
    question_hi: "नींबू के खट्टे स्वाद के लिए कौन सा अम्ल जिम्मेदार है?",
    options_en: ["Citric acid", "Acetic acid", "Sulfuric acid", "Lactic acid"],
    options_hi: ["सिट्रिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल", "लैक्टिक अम्ल"],
    answer_en: "Citric acid",
    answer_hi: "सिट्रिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "What is the catalyst used in the Haber process?",
    question_hi: "हैबर प्रक्रिया में उपयोग किया जाने वाला उत्प्रेरक क्या है?",
    options_en: ["Iron", "Copper", "Zinc", "Nickel"],
    options_hi: ["लोहा", "तांबा", "जिंक", "निकेल"],
    answer_en: "Iron",
    answer_hi: "लोहा",
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "Which of these is a noble gas?",
    question_hi: "इनमें से कौन सा नोबल गैस है?",
    options_en: ["Helium", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["हीलियम", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "What is the valency of oxygen?",
    question_hi: "ऑक्सीजन की संयोग संख्या (Valency) क्या है?",
    options_en: ["2", "1", "3", "4"],
    options_hi: ["2", "1", "3", "4"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "Which element has the highest electronegativity?",
    question_hi: "सबसे अधिक इलेक्ट्रोनघनत्व वाला तत्व कौन सा है?",
    options_en: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
    options_hi: ["फ्लोरीन", "ऑक्सीजन", "क्लोरीन", "नाइट्रोजन"],
    answer_en: "Fluorine",
    answer_hi: "फ्लोरीन",
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "Which process is used to extract iron from its ore?",
    question_hi: "लौह अयस्क से लोहा निकालने की प्रक्रिया क्या है?",
    options_en: ["Reduction", "Oxidation", "Distillation", "Electrolysis"],
    options_hi: ["अपचयन (Reduction)", "ऑक्सीकरण", "वाष्पीकरण", "विद्युत् अपघटन"],
    answer_en: "Reduction",
    answer_hi: "अपचयन (Reduction)",
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "What is the main component of natural gas?",
    question_hi: "प्राकृतिक गैस का मुख्य घटक क्या है?",
    options_en: ["Methane", "Ethane", "Propane", "Butane"],
    options_hi: ["मीथेन", "एथेन", "प्रोपेन", "ब्यूटेन"],
    answer_en: "Methane",
    answer_hi: "मीथेन",
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "Which of the following is an ionic compound?",
    question_hi: "निम्नलिखित में से कौन सा आयनिक यौगिक है?",
    options_en: ["Sodium chloride", "Methane", "Water", "Carbon dioxide"],
    options_hi: ["सोडियम क्लोराइड", "मीथेन", "जल", "कार्बन डाइऑक्साइड"],
    answer_en: "Sodium chloride",
    answer_hi: "सोडियम क्लोराइड",
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "Which type of chemical reaction absorbs heat?",
    question_hi: "किस प्रकार की रासायनिक प्रतिक्रिया में ऊष्मा अवशोषित होती है?",
    options_en: ["Endothermic", "Exothermic", "Combustion", "Neutralization"],
    options_hi: ["एंडोथर्मिक", "एक्सोथर्मिक", "दहन", "तटस्थकरण"],
    answer_en: "Endothermic",
    answer_hi: "एंडोथर्मिक",
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
