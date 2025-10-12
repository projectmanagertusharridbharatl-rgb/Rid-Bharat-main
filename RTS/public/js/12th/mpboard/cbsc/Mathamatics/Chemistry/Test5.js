const questions = [
    {
    num: 1,
    question_en: "Which of the following is a strong acid?",
    question_hi: "निम्नलिखित में से कौन एक प्रबल अम्ल है?",
    options_en: ["Acetic acid", "Citric acid", "Hydrochloric acid", "Carbonic acid"],
    options_hi: ["एसिटिक अम्ल", "सिट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "कार्बोनिक अम्ल"],
    answer_en: "Hydrochloric acid",
    answer_hi: "हाइड्रोक्लोरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "What is the pH value of pure water?",
    question_hi: "शुद्ध जल का pH मान क्या है?",
    options_en: ["7", "1", "14", "0"],
    options_hi: ["7", "1", "14", "0"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "Which of the following is a weak base?",
    question_hi: "निम्नलिखित में से कौन एक कमजोर क्षार है?",
    options_en: ["Sodium hydroxide", "Ammonia", "Potassium hydroxide", "Calcium hydroxide"],
    options_hi: ["सोडियम हाइड्रॉक्साइड", "अमोनिया", "पोटैशियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड"],
    answer_en: "Ammonia",
    answer_hi: "अमोनिया",
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "Which gas is released when acids react with metals?",
    question_hi: "जब अम्ल धातुओं से प्रतिक्रिया करते हैं तो कौन सा गैस निकलती है?",
    options_en: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
    options_hi: ["ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
    answer_en: "Hydrogen",
    answer_hi: "हाइड्रोजन",
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "What is the chemical formula of baking soda?",
    question_hi: "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
    options_en: ["NaCl", "NaHCO3", "NaOH", "KCl"],
    options_hi: ["NaCl", "NaHCO3", "NaOH", "KCl"],
    answer_en: "NaHCO3",
    answer_hi: "NaHCO3",
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "Which of these salts is formed when hydrochloric acid reacts with sodium hydroxide?",
    question_hi: "हाइड्रोक्लोरिक अम्ल और सोडियम हाइड्रॉक्साइड की प्रतिक्रिया से कौन सा लवण बनता है?",
    options_en: ["Sodium chloride", "Potassium chloride", "Calcium chloride", "Magnesium chloride"],
    options_hi: ["सोडियम क्लोराइड", "पोटैशियम क्लोराइड", "कैल्शियम क्लोराइड", "मैग्नीशियम क्लोराइड"],
    answer_en: "Sodium chloride",
    answer_hi: "सोडियम क्लोराइड",
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "What color does litmus paper turn in a basic solution?",
    question_hi: "क्षारीय घोल में लिटमस कागज का रंग क्या होता है?",
    options_en: ["Red", "Blue", "Green", "Yellow"],
    options_hi: ["लाल", "नीला", "हरा", "पीला"],
    answer_en: "Blue",
    answer_hi: "नीला",
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "Which of the following is used to neutralize stomach acidity?",
    question_hi: "निम्नलिखित में से कौन पेट की अम्लता को शांत करने के लिए प्रयोग किया जाता है?",
    options_en: ["Sodium bicarbonate", "Calcium carbonate", "Both A and B", "None of these"],
    options_hi: ["सोडियम बाइकार्बोनेट", "कैल्शियम कार्बोनेट", "दोनों A और B", "इनमें से कोई नहीं"],
    answer_en: "Both A and B",
    answer_hi: "दोनों A और B",
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "What is the nature of vinegar?",
    question_hi: "सिरके का स्वभाव कैसा होता है?",
    options_en: ["Acidic", "Basic", "Neutral", "Salty"],
    options_hi: ["अम्लीय", "क्षारीय", "तटस्थ", "नमकीन"],
    answer_en: "Acidic",
    answer_hi: "अम्लीय",
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "Which acid is commonly found in lemons?",
    question_hi: "नींबू में आमतौर पर कौन सा अम्ल पाया जाता है?",
    options_en: ["Citric acid", "Tartaric acid", "Lactic acid", "Sulfuric acid"],
    options_hi: ["सिट्रिक अम्ल", "टारटारिक अम्ल", "लैक्टिक अम्ल", "सल्फ्यूरिक अम्ल"],
    answer_en: "Citric acid",
    answer_hi: "सिट्रिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "Which of the following bases is commonly used in soap making?",
    question_hi: "निम्नलिखित में से कौन सा क्षार साबुन बनाने में सामान्यतः उपयोग होता है?",
    options_en: ["Sodium hydroxide", "Potassium hydroxide", "Calcium hydroxide", "Ammonia"],
    options_hi: ["सोडियम हाइड्रॉक्साइड", "पोटैशियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड", "अमोनिया"],
    answer_en: "Sodium hydroxide",
    answer_hi: "सोडियम हाइड्रॉक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "What is the pH range of acidic solutions?",
    question_hi: "अम्लीय घोलों का pH मान किस सीमा में होता है?",
    options_en: ["0-7", "7-14", "7 only", "14 only"],
    options_hi: ["0-7", "7-14", "7 केवल", "14 केवल"],
    answer_en: "0-7",
    answer_hi: "0-7",
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "Which acid is present in ant sting venom?",
    question_hi: "चींटी के डंक में कौन सा अम्ल होता है?",
    options_en: ["Formic acid", "Acetic acid", "Citric acid", "Sulfuric acid"],
    options_hi: ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "सिट्रिक अम्ल", "सल्फ्यूरिक अम्ल"],
    answer_en: "Formic acid",
    answer_hi: "फॉर्मिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "Which salt is used in baking powder?",
    question_hi: "बेकिंग पाउडर में कौन सा लवण प्रयोग होता है?",
    options_en: ["Sodium bicarbonate", "Sodium chloride", "Potassium chloride", "Calcium chloride"],
    options_hi: ["सोडियम बाइकार्बोनेट", "सोडियम क्लोराइड", "पोटैशियम क्लोराइड", "कैल्शियम क्लोराइड"],
    answer_en: "Sodium bicarbonate",
    answer_hi: "सोडियम बाइकार्बोनेट",
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "What is the characteristic taste of acids?",
    question_hi: "अम्लों का विशेष स्वाद कैसा होता है?",
    options_en: ["Sour", "Sweet", "Bitter", "Salty"],
    options_hi: ["खट्टा", "मिठा", "कड़वा", "नमकीन"],
    answer_en: "Sour",
    answer_hi: "खट्टा",
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "Which indicator turns red in acidic medium?",
    question_hi: "कौन सा संकेतक अम्लीय माध्यम में लाल रंग दिखाता है?",
    options_en: ["Methyl orange", "Phenolphthalein", "Litmus", "Both A and C"],
    options_hi: ["मेथाइल ऑरेंज", "फेनोल्फ्थलीन", "लिटमस", "दोनों A और C"],
    answer_en: "Both A and C",
    answer_hi: "दोनों A और C",
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "Which of the following is an organic acid?",
    question_hi: "निम्नलिखित में से कौन सा जैविक अम्ल है?",
    options_en: ["Acetic acid", "Hydrochloric acid", "Sulfuric acid", "Nitric acid"],
    options_hi: ["एसिटिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल"],
    answer_en: "Acetic acid",
    answer_hi: "एसिटिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "What is the product when acid reacts with carbonate?",
    question_hi: "अम्ल और कार्बोनेट की प्रतिक्रिया से क्या उत्पन्न होता है?",
    options_en: ["Salt, water, and carbon dioxide", "Salt only", "Water only", "Carbon dioxide only"],
    options_hi: ["लवण, जल और कार्बन डाइऑक्साइड", "केवल लवण", "केवल जल", "केवल कार्बन डाइऑक्साइड"],
    answer_en: "Salt, water, and carbon dioxide",
    answer_hi: "लवण, जल और कार्बन डाइऑक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "Which base is commonly used in antacids?",
    question_hi: "एंटासिड्स में सामान्यतः कौन सा क्षार उपयोग होता है?",
    options_en: ["Magnesium hydroxide", "Sodium hydroxide", "Calcium hydroxide", "Potassium hydroxide"],
    options_hi: ["मैग्नीशियम हाइड्रॉक्साइड", "सोडियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड", "पोटैशियम हाइड्रॉक्साइड"],
    answer_en: "Magnesium hydroxide",
    answer_hi: "मैग्नीशियम हाइड्रॉक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "Which acid is used in car batteries?",
    question_hi: "कार बैटरी में कौन सा अम्ल उपयोग किया जाता है?",
    options_en: ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"],
    options_hi: ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    answer_en: "Sulfuric acid",
    answer_hi: "सल्फ्यूरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "Which salt is commonly known as 'rock salt'?",
    question_hi: "निम्नलिखित में से कौन सा लवण 'सेंधा नमक' के नाम से जाना जाता है?",
    options_en: ["Sodium chloride", "Potassium chloride", "Calcium chloride", "Magnesium chloride"],
    options_hi: ["सोडियम क्लोराइड", "पोटैशियम क्लोराइड", "कैल्शियम क्लोराइड", "मैग्नीशियम क्लोराइड"],
    answer_en: "Sodium chloride",
    answer_hi: "सोडियम क्लोराइड",
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "Which of the following acids is used in pickling and cleaning metals?",
    question_hi: "निम्नलिखित में से कौन सा अम्ल धातुओं की सफाई और अचार बनाने में उपयोग होता है?",
    options_en: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
    options_hi: ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    answer_en: "Hydrochloric acid",
    answer_hi: "हाइड्रोक्लोरिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "What is the chemical name of 'milk of magnesia'?",
    question_hi: "'मिल्क ऑफ मैग्नेशिया' का रासायनिक नाम क्या है?",
    options_en: ["Magnesium hydroxide", "Magnesium chloride", "Calcium hydroxide", "Sodium bicarbonate"],
    options_hi: ["मैग्नीशियम हाइड्रॉक्साइड", "मैग्नीशियम क्लोराइड", "कैल्शियम हाइड्रॉक्साइड", "सोडियम बाइकार्बोनेट"],
    answer_en: "Magnesium hydroxide",
    answer_hi: "मैग्नीशियम हाइड्रॉक्साइड",
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "Which acid is used in making fertilizers and explosives?",
    question_hi: "खाद और विस्फोटक बनाने में कौन सा अम्ल उपयोग होता है?",
    options_en: ["Nitric acid", "Hydrochloric acid", "Sulfuric acid", "Acetic acid"],
    options_hi: ["नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "एसिटिक अम्ल"],
    answer_en: "Nitric acid",
    answer_hi: "नाइट्रिक अम्ल",
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "Which salt is used to prepare washing soda?",
    question_hi: "धुलाई सोडा बनाने में कौन सा लवण उपयोग होता है?",
    options_en: ["Sodium carbonate", "Sodium chloride", "Sodium bicarbonate", "Potassium carbonate"],
    options_hi: ["सोडियम कार्बोनेट", "सोडियम क्लोराइड", "सोडियम बाइकार्बोनेट", "पोटैशियम कार्बोनेट"],
    answer_en: "Sodium carbonate",
    answer_hi: "सोडियम कार्बोनेट",
    attempted: false,
    selected: null
  },
{
  num: 26,
  question_en: "What is the pH of a neutral solution at 25°C?",
  question_hi: "25°C पर तटस्थ घोल का pH क्या होता है?",
  options_en: ["0", "7", "14", "1"],
  options_hi: ["0", "7", "14", "1"],
  answer_en: "7",
  answer_hi: "7",
  attempted: false,
  selected: null
},
{
  num: 27,
  question_en: "Which element is present in all organic compounds?",
  question_hi: "सभी कार्बनिक यौगिकों में कौन सा तत्व होता है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन", "हाइड्रोजन"],
  answer_en: "Carbon",
  answer_hi: "कार्बन",
  attempted: false,
  selected: null
},
{
  num: 28,
  question_en: "Which gas is liberated when an acid reacts with a metal?",
  question_hi: "जब अम्ल किसी धातु से प्रतिक्रिया करता है तो कौन सा गैस निकलती है?",
  options_en: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
  options_hi: ["ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
  answer_en: "Hydrogen",
  answer_hi: "हाइड्रोजन",
  attempted: false,
  selected: null
},
{
  num: 29,
  question_en: "Which type of bond is present in a water molecule?",
  question_hi: "जल अणु में कौन सा बंध होता है?",
  options_en: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
  options_hi: ["आयनिक बंध", "कोवैलेंट बंध", "मेटालिक बंध", "हाइड्रोजन बंध"],
  answer_en: "Covalent bond",
  answer_hi: "कोवैलेंट बंध",
  attempted: false,
  selected: null
},
{
  num: 30,
  question_en: "Which of the following is an alkaline earth metal?",
  question_hi: "निम्नलिखित में से कौन सा क्षारीय पृथ्वी धातु है?",
  options_en: ["Sodium", "Magnesium", "Potassium", "Iron"],
  options_hi: ["सोडियम", "मैग्नीशियम", "पोटैशियम", "लोहा"],
  answer_en: "Magnesium",
  answer_hi: "मैग्नीशियम",
  attempted: false,
  selected: null
},
{
  num: 31,
  question_en: "What is the shape of the methane (CH4) molecule?",
  question_hi: "मीथेन (CH4) अणु का आकार क्या है?",
  options_en: ["Linear", "Trigonal planar", "Tetrahedral", "Bent"],
  options_hi: ["रेखीय", "त्रिकोणीय समतलीय", "टेट्राहेड्रल", "मड़ा हुआ"],
  answer_en: "Tetrahedral",
  answer_hi: "टेट्राहेड्रल",
  attempted: false,
  selected: null
},
{
  num: 32,
  question_en: "Which gas is responsible for the greenhouse effect?",
  question_hi: "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
  options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: null
},
{
  num: 33,
  question_en: "What is the valency of sulfur in H2SO4?",
  question_hi: "H2SO4 में सल्फर की वैलेंसी क्या है?",
  options_en: ["2", "4", "6", "8"],
  options_hi: ["2", "4", "6", "8"],
  answer_en: "6",
  answer_hi: "6",
  attempted: false,
  selected: null
},
{
  num: 34,
  question_en: "Which is the hardest natural substance?",
  question_hi: "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
  options_en: ["Gold", "Diamond", "Graphite", "Quartz"],
  options_hi: ["सोना", "हीरा", "ग्रेफाइट", "क्वार्ट्ज"],
  answer_en: "Diamond",
  answer_hi: "हीरा",
  attempted: false,
  selected: null
},
{
  num: 35,
  question_en: "Which is a noble gas?",
  question_hi: "निम्नलिखित में से कौन सी एक नोबल गैस है?",
  options_en: ["Nitrogen", "Helium", "Oxygen", "Chlorine"],
  options_hi: ["नाइट्रोजन", "हीलियम", "ऑक्सीजन", "क्लोरीन"],
  answer_en: "Helium",
  answer_hi: "हीलियम",
  attempted: false,
  selected: null
},
{
  num: 36,
  question_en: "What is the formula of baking soda?",
  question_hi: "बेकिंग सोडा का सूत्र क्या है?",
  options_en: ["NaCl", "NaHCO3", "Na2CO3", "NaOH"],
  options_hi: ["NaCl", "NaHCO3", "Na2CO3", "NaOH"],
  answer_en: "NaHCO3",
  answer_hi: "NaHCO3",
  attempted: false,
  selected: null
},
{
  num: 37,
  question_en: "Which acid is found in vinegar?",
  question_hi: "सिरके में कौन सा अम्ल पाया जाता है?",
  options_en: ["Acetic acid", "Citric acid", "Sulfuric acid", "Nitric acid"],
  options_hi: ["एसिटिक अम्ल", "सिट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल"],
  answer_en: "Acetic acid",
  answer_hi: "एसिटिक अम्ल",
  attempted: false,
  selected: null
},
{
  num: 38,
  question_en: "What is the molar mass of water (H2O)?",
  question_hi: "जल (H2O) का मोलर द्रव्यमान क्या है?",
  options_en: ["18 g/mol", "16 g/mol", "20 g/mol", "22 g/mol"],
  options_hi: ["18 ग्राम/मोल", "16 ग्राम/मोल", "20 ग्राम/मोल", "22 ग्राम/मोल"],
  answer_en: "18 g/mol",
  answer_hi: "18 ग्राम/मोल",
  attempted: false,
  selected: null
},
{
  num: 39,
  question_en: "Which of the following is an allotrope of carbon?",
  question_hi: "निम्नलिखित में से कौन कार्बन का एलॉट्रोप है?",
  options_en: ["Diamond", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["हीरा", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Diamond",
  answer_hi: "हीरा",
  attempted: false,
  selected: null
},
{
  num: 40,
  question_en: "Which element has the highest electronegativity?",
  question_hi: "किस तत्व की विद्युतऋणता सबसे अधिक होती है?",
  options_en: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
  options_hi: ["फ्लोरीन", "ऑक्सीजन", "क्लोरीन", "नाइट्रोजन"],
  answer_en: "Fluorine",
  answer_hi: "फ्लोरीन",
  attempted: false,
  selected: null
},
{
  num: 41,
  question_en: "What is the oxidation state of chlorine in NaCl?",
  question_hi: "NaCl में क्लोरीन की ऑक्सीकृत अवस्था क्या है?",
  options_en: ["0", "-1", "+1", "+2"],
  options_hi: ["0", "-1", "+1", "+2"],
  answer_en: "-1",
  answer_hi: "-1",
  attempted: false,
  selected: null
},
{
  num: 42,
  question_en: "Which compound is commonly used as table salt?",
  question_hi: "कौन सा यौगिक आमतौर पर खाने के नमक के रूप में प्रयोग होता है?",
  options_en: ["NaCl", "KCl", "CaCl2", "MgCl2"],
  options_hi: ["NaCl", "KCl", "CaCl2", "MgCl2"],
  answer_en: "NaCl",
  answer_hi: "NaCl",
  attempted: false,
  selected: null
},
{
  num: 43,
  question_en: "What is the chemical formula of ammonia?",
  question_hi: "अमोनिया का रासायनिक सूत्र क्या है?",
  options_en: ["NH3", "NO2", "N2H4", "N2O"],
  options_hi: ["NH3", "NO2", "N2H4", "N2O"],
  answer_en: "NH3",
  answer_hi: "NH3",
  attempted: false,
  selected: null
},
{
  num: 44,
  question_en: "Which of the following is an example of a base?",
  question_hi: "निम्नलिखित में से कौन सा एक क्षार है?",
  options_en: ["HCl", "NaOH", "H2SO4", "CH4"],
  options_hi: ["HCl", "NaOH", "H2SO4", "CH4"],
  answer_en: "NaOH",
  answer_hi: "NaOH",
  attempted: false,
  selected: null
},
{
  num: 45,
  question_en: "What type of reaction occurs when an acid reacts with a base?",
  question_hi: "जब अम्ल क्षार से प्रतिक्रिया करता है तो किस प्रकार की अभिक्रिया होती है?",
  options_en: ["Redox", "Neutralization", "Precipitation", "Decomposition"],
  options_hi: ["ऑक्सीकृत-अपचय", "तटस्थकरण", "निष्कर्षण", "अपघटन"],
  answer_en: "Neutralization",
  answer_hi: "तटस्थकरण",
  attempted: false,
  selected: null
},
{
  num: 46,
  question_en: "Which is the most reactive metal?",
  question_hi: "सबसे अधिक प्रतिक्रियाशील धातु कौन सी है?",
  options_en: ["Gold", "Sodium", "Copper", "Iron"],
  options_hi: ["सोना", "सोडियम", "तांबा", "लोहा"],
  answer_en: "Sodium",
  answer_hi: "सोडियम",
  attempted: false,
  selected: null
},
{
  num: 47,
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
  num: 48,
  question_en: "Which element is liquid at room temperature?",
  question_hi: "कौन सा तत्व सामान्य तापमान पर द्रव होता है?",
  options_en: ["Mercury", "Bromine", "Both Mercury and Bromine", "None"],
  options_hi: ["पारा", "ब्रोमीन", "पारा और ब्रोमीन दोनों", "कोई नहीं"],
  answer_en: "Both Mercury and Bromine",
  answer_hi: "पारा और ब्रोमीन दोनों",
  attempted: false,
  selected: null
},
{
  num: 49,
  question_en: "What is the catalyst used in the Haber process?",
  question_hi: "हेबर प्रक्रिया में प्रयुक्त उत्प्रेरक क्या है?",
  options_en: ["Iron", "Platinum", "Nickel", "Copper"],
  options_hi: ["लौह", "प्लैटिनम", "निकेल", "तांबा"],
  answer_en: "Iron",
  answer_hi: "लौह",
  attempted: false,
  selected: null
},
{
  num: 50,
  question_en: "Which is an example of an exothermic reaction?",
  question_hi: "निम्नलिखित में से कौन सी अभिक्रिया उष्मा मुक्त करती है?",
  options_en: ["Photosynthesis", "Respiration", "Evaporation", "Melting of ice"],
  options_hi: ["प्रकाश संश्लेषण", "श्वसन", "वाष्पीकरण", "बर्फ का पिघलना"],
  answer_en: "Respiration",
  answer_hi: "श्वसन",
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
