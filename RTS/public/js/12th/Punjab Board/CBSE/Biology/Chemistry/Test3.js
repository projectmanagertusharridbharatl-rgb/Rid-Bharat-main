const questions = [
 {
    num: 1,
    question_en: "Which of the following is an example of an acid?",
    question_hi: "निम्नलिखित में से कौन सा एक अम्ल का उदाहरण है?",
    options_en: ["Hydrochloric acid", "Sodium hydroxide", "Calcium carbonate", "Magnesium hydroxide"],
    options_hi: ["हाइड्रोक्लोरिक अम्ल", "सोडियम हाइड्रॉक्साइड", "कैल्शियम कार्बोनेट", "मैग्नीशियम हाइड्रॉक्साइड"],
    answer_en: "Hydrochloric acid",
    answer_hi: "हाइड्रोक्लोरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "What is the chemical formula of sodium hydroxide?",
    question_hi: "सोडियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
    options_en: ["NaOH", "HCl", "NaCl", "H2SO4"],
    options_hi: ["NaOH", "HCl", "NaCl", "H2SO4"],
    answer_en: "NaOH",
    answer_hi: "NaOH",
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "Which of these is a base?",
    question_hi: "इनमें से कौन सा क्षार है?",
    options_en: ["Sodium hydroxide", "Hydrochloric acid", "Carbon dioxide", "Sulfuric acid"],
    options_hi: ["सोडियम हाइड्रॉक्साइड", "हाइड्रोक्लोरिक अम्ल", "कार्बन डाइऑक्साइड", "सल्फ्यूरिक अम्ल"],
    answer_en: "Sodium hydroxide",
    answer_hi: "सोडियम हाइड्रॉक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "Which gas is released when an acid reacts with a carbonate?",
    question_hi: "जब अम्ल कार्बोनेट से प्रतिक्रिया करता है तो कौन-सा गैस निकलती है?",
    options_en: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
    options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन"],
    answer_en: "Carbon dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "What is the pH value of a neutral solution?",
    question_hi: "तटस्थ घोल का pH मान क्या होता है?",
    options_en: ["7", "0", "14", "1"],
    options_hi: ["7", "0", "14", "1"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "Which indicator turns red in acidic solution?",
    question_hi: "कौन-सा सूचक अम्लीय घोल में लाल हो जाता है?",
    options_en: ["Litmus paper", "Phenolphthalein", "Methyl orange", "Bromothymol blue"],
    options_hi: ["लिटमस पेपर", "फेनॉल्फ्थेलीन", "मेथिल ऑरेंज", "ब्रोमोथाइमोल ब्लू"],
    answer_en: "Litmus paper",
    answer_hi: "लिटमस पेपर",
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "What is the formula of common salt?",
    question_hi: "सामान्य नमक का सूत्र क्या है?",
    options_en: ["NaCl", "KCl", "NaOH", "CaCO3"],
    options_hi: ["NaCl", "KCl", "NaOH", "CaCO3"],
    answer_en: "NaCl",
    answer_hi: "NaCl",
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "Which of the following is formed when an acid reacts with a base?",
    question_hi: "जब अम्ल क्षार से प्रतिक्रिया करता है तो क्या बनता है?",
    options_en: ["Salt and water", "Water and carbon dioxide", "Salt and hydrogen", "Oxygen and salt"],
    options_hi: ["नमक और जल", "जल और कार्बन डाइऑक्साइड", "नमक और हाइड्रोजन", "ऑक्सीजन और नमक"],
    answer_en: "Salt and water",
    answer_hi: "नमक और जल",
    attempted: false,
    selected: null
  },
  {
    num: 9,
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
    num: 10,
    question_en: "What is the nature of a solution with pH less than 7?",
    question_hi: "pH 7 से कम वाले घोल का स्वभाव क्या होता है?",
    options_en: ["Acidic", "Basic", "Neutral", "Alkaline"],
    options_hi: ["अम्लीय", "क्षारीय", "तटस्थ", "क्षारयुक्त"],
    answer_en: "Acidic",
    answer_hi: "अम्लीय",
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "Which of the following is a salt?",
    question_hi: "निम्नलिखित में से कौन सा एक लवण है?",
    options_en: ["Sodium chloride", "Hydrochloric acid", "Sodium hydroxide", "Calcium carbonate"],
    options_hi: ["सोडियम क्लोराइड", "हाइड्रोक्लोरिक अम्ल", "सोडियम हाइड्रॉक्साइड", "कैल्शियम कार्बोनेट"],
    answer_en: "Sodium chloride",
    answer_hi: "सोडियम क्लोराइड",
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "Which of these is a strong acid?",
    question_hi: "इनमें से कौन सा एक मजबूत अम्ल है?",
    options_en: ["Hydrochloric acid", "Acetic acid", "Citric acid", "Carbonic acid"],
    options_hi: ["हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "कार्बोनिक अम्ल"],
    answer_en: "Hydrochloric acid",
    answer_hi: "हाइड्रोक्लोरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "Which of the following bases is commonly used in soap making?",
    question_hi: "निम्नलिखित में से कौन सा क्षार साबुन बनाने में उपयोग होता है?",
    options_en: ["Sodium hydroxide", "Calcium hydroxide", "Magnesium hydroxide", "Potassium hydroxide"],
    options_hi: ["सोडियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड", "मैग्नीशियम हाइड्रॉक्साइड", "पोटैशियम हाइड्रॉक्साइड"],
    answer_en: "Sodium hydroxide",
    answer_hi: "सोडियम हाइड्रॉक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "Which salt is formed when hydrochloric acid reacts with sodium hydroxide?",
    question_hi: "जब हाइड्रोक्लोरिक अम्ल सोडियम हाइड्रॉक्साइड से प्रतिक्रिया करता है तो कौन सा लवण बनता है?",
    options_en: ["Sodium chloride", "Potassium chloride", "Calcium chloride", "Magnesium chloride"],
    options_hi: ["सोडियम क्लोराइड", "पोटैशियम क्लोराइड", "कैल्शियम क्लोराइड", "मैग्नीशियम क्लोराइड"],
    answer_en: "Sodium chloride",
    answer_hi: "सोडियम क्लोराइड",
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "Which acid is found in vinegar?",
    question_hi: "सिरके में कौन सा अम्ल पाया जाता है?",
    options_en: ["Acetic acid", "Citric acid", "Hydrochloric acid", "Sulfuric acid"],
    options_hi: ["एसिटिक अम्ल", "साइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल"],
    answer_en: "Acetic acid",
    answer_hi: "एसिटिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "What type of salt is formed when a strong acid reacts with a strong base?",
    question_hi: "जब एक मजबूत अम्ल कमजोर क्षार से प्रतिक्रिया करता है तो किस प्रकार का लवण बनता है?",
    options_en: ["Neutral salt", "Acidic salt", "Basic salt", "No salt"],
    options_hi: ["तटस्थ लवण", "अम्लीय लवण", "क्षारीय लवण", "कोई लवण नहीं"],
    answer_en: "Neutral salt",
    answer_hi: "तटस्थ लवण",
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "Which of the following is an amphoteric oxide?",
    question_hi: "निम्नलिखित में से कौन सा एक ऐम्फोटेरिक ऑक्साइड है?",
    options_en: ["Aluminium oxide", "Carbon dioxide", "Sulfur dioxide", "Calcium oxide"],
    options_hi: ["एल्युमिनियम ऑक्साइड", "कार्बन डाइऑक्साइड", "सल्फर डाइऑक्साइड", "कैल्शियम ऑक्साइड"],
    answer_en: "Aluminium oxide",
    answer_hi: "एल्युमिनियम ऑक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "What is the chemical formula of baking soda?",
    question_hi: "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
    options_en: ["NaHCO3", "NaOH", "NaCl", "KOH"],
    options_hi: ["NaHCO3", "NaOH", "NaCl", "KOH"],
    answer_en: "NaHCO3",
    answer_hi: "NaHCO3",
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "Which of the following is a weak base?",
    question_hi: "निम्नलिखित में से कौन सा एक कमजोर क्षार है?",
    options_en: ["Ammonia", "Sodium hydroxide", "Potassium hydroxide", "Calcium hydroxide"],
    options_hi: ["अमोनिया", "सोडियम हाइड्रॉक्साइड", "पोटैशियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड"],
    answer_en: "Ammonia",
    answer_hi: "अमोनिया",
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "Which gas is released when acids react with metals?",
    question_hi: "जब अम्ल धातुओं से प्रतिक्रिया करते हैं तो कौन-सी गैस निकलती है?",
    options_en: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon dioxide"],
    options_hi: ["हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
    answer_en: "Hydrogen",
    answer_hi: "हाइड्रोजन",
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "Which of the following is used as an antacid?",
    question_hi: "निम्नलिखित में से कौन सा एक एंटासिड के रूप में उपयोग होता है?",
    options_en: ["Magnesium hydroxide", "Hydrochloric acid", "Sodium chloride", "Calcium carbonate"],
    options_hi: ["मैग्नीशियम हाइड्रॉक्साइड", "हाइड्रोक्लोरिक अम्ल", "सोडियम क्लोराइड", "कैल्शियम कार्बोनेट"],
    answer_en: "Magnesium hydroxide",
    answer_hi: "मैग्नीशियम हाइड्रॉक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "Which salt is formed when sulfuric acid reacts with sodium hydroxide?",
    question_hi: "जब सल्फ्यूरिक अम्ल सोडियम हाइड्रॉक्साइड से प्रतिक्रिया करता है तो कौन सा लवण बनता है?",
    options_en: ["Sodium sulfate", "Sodium chloride", "Potassium chloride", "Calcium chloride"],
    options_hi: ["सोडियम सल्फेट", "सोडियम क्लोराइड", "पोटैशियम क्लोराइड", "कैल्शियम क्लोराइड"],
    answer_en: "Sodium sulfate",
    answer_hi: "सोडियम सल्फेट",
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "Which acid is used in car batteries?",
    question_hi: "कार बैटरी में कौन सा अम्ल उपयोग होता है?",
    options_en: ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"],
    options_hi: ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    answer_en: "Sulfuric acid",
    answer_hi: "सल्फ्यूरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "What is the pH value of a basic solution?",
    question_hi: "क्षारीय घोल का pH मान क्या होता है?",
    options_en: ["More than 7", "Less than 7", "Equal to 7", "Zero"],
    options_hi: ["7 से अधिक", "7 से कम", "7 के बराबर", "शून्य"],
    answer_en: "More than 7",
    answer_hi: "7 से अधिक",
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "Which of the following is a neutral salt?",
    question_hi: "निम्नलिखित में से कौन सा एक तटस्थ लवण है?",
    options_en: ["Sodium chloride", "Sodium carbonate", "Sodium bicarbonate", "Sodium hydroxide"],
    options_hi: ["सोडियम क्लोराइड", "सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड"],
    answer_en: "Sodium chloride",
    answer_hi: "सोडियम क्लोराइड",
    attempted: false,
    selected: null
  },
    {
    num: 26,
    question_en: "What is the pH value of a neutral solution?",
    question_hi: "तटस्थ घोल का pH मान क्या होता है?",
    options_en: ["7", "0", "14", "1"],
    options_hi: ["7", "0", "14", "1"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "Which of the following is a base?",
    question_hi: "निम्नलिखित में से कौन सा क्षार है?",
    options_en: ["Sodium hydroxide", "Hydrochloric acid", "Sulfuric acid", "Nitric acid"],
    options_hi: ["सोडियम हाइड्रॉक्साइड", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल"],
    answer_en: "Sodium hydroxide",
    answer_hi: "सोडियम हाइड्रॉक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "Which indicator turns red in acidic solution?",
    question_hi: "कौन सा सूचक अम्लीय घोल में लाल हो जाता है?",
    options_en: ["Litmus paper", "Phenolphthalein", "Methyl orange", "Bromothymol blue"],
    options_hi: ["लिटमस पेपर", "फेनॉल्फ्थलीन", "मेथिल ऑरेंज", "ब्रूमोथाइमोल ब्लू"],
    answer_en: "Litmus paper",
    answer_hi: "लिटमस पेपर",
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "What is the product of neutralization reaction?",
    question_hi: "तटस्थता प्रतिक्रिया का उत्पाद क्या होता है?",
    options_en: ["Salt and water", "Acid and base", "Salt and acid", "Water and base"],
    options_hi: ["नमक और पानी", "अम्ल और क्षार", "नमक और अम्ल", "पानी और क्षार"],
    answer_en: "Salt and water",
    answer_hi: "नमक और पानी",
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "Which acid is present in vinegar?",
    question_hi: "सिरके में कौन सा अम्ल होता है?",
    options_en: ["Acetic acid", "Citric acid", "Sulfuric acid", "Hydrochloric acid"],
    options_hi: ["एसिटिक अम्ल", "सिट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
    answer_en: "Acetic acid",
    answer_hi: "एसिटिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "What is the formula of hydrochloric acid?",
    question_hi: "हाइड्रोक्लोरिक अम्ल का सूत्र क्या है?",
    options_en: ["HCl", "H2SO4", "HNO3", "CH3COOH"],
    options_hi: ["HCl", "H2SO4", "HNO3", "CH3COOH"],
    answer_en: "HCl",
    answer_hi: "HCl",
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "Which acid is known as the 'King of Chemicals'?",
    question_hi: "कौन सा अम्ल 'रसायनों का राजा' कहा जाता है?",
    options_en: ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "Acetic acid"],
    options_hi: ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल"],
    answer_en: "Sulfuric acid",
    answer_hi: "सल्फ्यूरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "Which base is commonly used in soap making?",
    question_hi: "कौन सा क्षार साबुन बनाने में सामान्यतः उपयोग होता है?",
    options_en: ["Sodium hydroxide", "Potassium hydroxide", "Calcium hydroxide", "Magnesium hydroxide"],
    options_hi: ["सोडियम हाइड्रॉक्साइड", "पोटैशियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड", "मैग्नीशियम हाइड्रॉक्साइड"],
    answer_en: "Sodium hydroxide",
    answer_hi: "सोडियम हाइड्रॉक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "Which of the following is amphoteric?",
    question_hi: "निम्नलिखित में से कौन अम्फोटेरिक है?",
    options_en: ["Aluminum hydroxide", "Sodium hydroxide", "Hydrochloric acid", "Sulfuric acid"],
    options_hi: ["एलुमीनियम हाइड्रॉक्साइड", "सोडियम हाइड्रॉक्साइड", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल"],
    answer_en: "Aluminum hydroxide",
    answer_hi: "एलुमीनियम हाइड्रॉक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "What happens when an acid reacts with a metal?",
    question_hi: "जब अम्ल किसी धातु के साथ प्रतिक्रिया करता है तो क्या होता है?",
    options_en: ["Hydrogen gas is released", "Oxygen gas is released", "Water is formed", "Salt is decomposed"],
    options_hi: ["हाइड्रोजन गैस निकलती है", "ऑक्सीजन गैस निकलती है", "पानी बनता है", "नमक टूटता है"],
    answer_en: "Hydrogen gas is released",
    answer_hi: "हाइड्रोजन गैस निकलती है",
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "Which of the following is a strong acid?",
    question_hi: "निम्नलिखित में से कौन सा एक मजबूत अम्ल है?",
    options_en: ["Hydrochloric acid", "Acetic acid", "Citric acid", "Carbonic acid"],
    options_hi: ["हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल", "सिट्रिक अम्ल", "कार्बोनिक अम्ल"],
    answer_en: "Hydrochloric acid",
    answer_hi: "हाइड्रोक्लोरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "Which acid is used in car batteries?",
    question_hi: "कार बैटरी में कौन सा अम्ल उपयोग होता है?",
    options_en: ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "Acetic acid"],
    options_hi: ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल"],
    answer_en: "Sulfuric acid",
    answer_hi: "सल्फ्यूरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "What is the nature of a solution with pH 13?",
    question_hi: "pH 13 वाले घोल की प्रकृति क्या है?",
    options_en: ["Strongly basic", "Strongly acidic", "Neutral", "Weakly acidic"],
    options_hi: ["मजबूत क्षारीय", "मजबूत अम्लीय", "तटस्थ", "कमजोर अम्लीय"],
    answer_en: "Strongly basic",
    answer_hi: "मजबूत क्षारीय",
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "Which of the following is a weak base?",
    question_hi: "निम्नलिखित में से कौन सा कमजोर क्षार है?",
    options_en: ["Ammonia", "Sodium hydroxide", "Potassium hydroxide", "Calcium hydroxide"],
    options_hi: ["अमोनिया", "सोडियम हाइड्रॉक्साइड", "पोटैशियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड"],
    answer_en: "Ammonia",
    answer_hi: "अमोनिया",
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "What gas is liberated when acids react with carbonates?",
    question_hi: "जब अम्ल कार्बोनेट से प्रतिक्रिया करते हैं तो कौन सी गैस निकलती है?",
    options_en: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen"],
    options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन"],
    answer_en: "Carbon dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "Which of the following acids is organic?",
    question_hi: "निम्नलिखित में से कौन सा अम्ल जैविक है?",
    options_en: ["Acetic acid", "Hydrochloric acid", "Sulfuric acid", "Nitric acid"],
    options_hi: ["एसिटिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल"],
    answer_en: "Acetic acid",
    answer_hi: "एसिटिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "Which base is commonly known as 'slaked lime'?",
    question_hi: "कौन सा क्षार 'चूना पानी' के नाम से जाना जाता है?",
    options_en: ["Calcium hydroxide", "Sodium hydroxide", "Potassium hydroxide", "Magnesium hydroxide"],
    options_hi: ["कैल्शियम हाइड्रॉक्साइड", "सोडियम हाइड्रॉक्साइड", "पोटैशियम हाइड्रॉक्साइड", "मैग्नीशियम हाइड्रॉक्साइड"],
    answer_en: "Calcium hydroxide",
    answer_hi: "कैल्शियम हाइड्रॉक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "Which acid is responsible for the sour taste in citrus fruits?",
    question_hi: "साइट्रस फलों में खट्टा स्वाद किस अम्ल के कारण होता है?",
    options_en: ["Citric acid", "Acetic acid", "Hydrochloric acid", "Sulfuric acid"],
    options_hi: ["सिट्रिक अम्ल", "एसिटिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल"],
    answer_en: "Citric acid",
    answer_hi: "सिट्रिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "What is the color of phenolphthalein in basic solution?",
    question_hi: "क्षारीय घोल में फेनॉल्फ्थलीन का रंग क्या होता है?",
    options_en: ["Pink", "Colorless", "Yellow", "Blue"],
    options_hi: ["गुलाबी", "रंगहीन", "पीला", "नीला"],
    answer_en: "Pink",
    answer_hi: "गुलाबी",
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "Which acid is used in the preparation of fertilizers?",
    question_hi: "उर्वरकों के निर्माण में कौन सा अम्ल उपयोग होता है?",
    options_en: ["Nitric acid", "Acetic acid", "Citric acid", "Hydrochloric acid"],
    options_hi: ["नाइट्रिक अम्ल", "एसिटिक अम्ल", "सिट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
    answer_en: "Nitric acid",
    answer_hi: "नाइट्रिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "What is the conjugate base of HCl?",
    question_hi: "HCl का संयुग्म क्षार कौन सा है?",
    options_en: ["Cl⁻", "H₂O", "OH⁻", "H₃O⁺"],
    options_hi: ["Cl⁻", "H₂O", "OH⁻", "H₃O⁺"],
    answer_en: "Cl⁻",
    answer_hi: "Cl⁻",
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "Which gas causes acid rain?",
    question_hi: "कौन सी गैस अम्लीय वर्षा का कारण बनती है?",
    options_en: ["Sulfur dioxide", "Oxygen", "Nitrogen", "Carbon dioxide"],
    options_hi: ["सल्फर डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
    answer_en: "Sulfur dioxide",
    answer_hi: "सल्फर डाइऑक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "Which acid is found in the human stomach?",
    question_hi: "मानव पेट में कौन सा अम्ल पाया जाता है?",
    options_en: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
    options_hi: ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    answer_en: "Hydrochloric acid",
    answer_hi: "हाइड्रोक्लोरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "What is the chemical formula of baking soda?",
    question_hi: "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
    options_en: ["NaHCO₃", "NaOH", "NaCl", "Na₂CO₃"],
    options_hi: ["NaHCO₃", "NaOH", "NaCl", "Na₂CO₃"],
    answer_en: "NaHCO₃",
    answer_hi: "NaHCO₃",
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "Which is the acid present in ant sting?",
    question_hi: "चींटी के डंक में कौन सा अम्ल होता है?",
    options_en: ["Formic acid", "Acetic acid", "Sulfuric acid", "Nitric acid"],
    options_hi: ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल"],
    answer_en: "Formic acid",
    answer_hi: "फॉर्मिक अम्ल",
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