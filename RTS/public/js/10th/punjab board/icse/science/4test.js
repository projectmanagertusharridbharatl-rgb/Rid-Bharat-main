
const questions = [


  {
    "num": 1,
    "question_en": "What is the SI unit of force?",
    "question_hi": "बल का SI मात्रक क्या है?",
    "options_en": ["Joule", "Newton", "Watt", "Pascal"],
    "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन",
    "attempted": false
  },
  {
    "num": 2,
    "question_en": "Which mirror is used as a rear-view mirror in vehicles?",
    "question_hi": "वाहनों में रियर-व्यू मिरर के रूप में किस दर्पण का उपयोग किया जाता है?",
    "options_en": ["Concave mirror", "Convex mirror", "Plane mirror", "Spherical mirror"],
    "options_hi": ["अवतल दर्पण", "उत्तल दर्पण", "समतल दर्पण", "गोलीय दर्पण"],
    "answer_en": "Convex mirror",
    "answer_hi": "उत्तल दर्पण",
    "attempted": false
  },
  {
    "num": 3,
    "question_en": "Ohm's Law relates voltage (V), current (I), and ___.",
    "question_hi": "ओम का नियम वोल्टेज (V), धारा (I), और ___ से संबंधित है।",
    "options_en": ["Power", "Resistance", "Energy", "Charge"],
    "options_hi": ["शक्ति", "प्रतिरोध", "ऊर्जा", "आवेश"],
    "answer_en": "Resistance",
    "answer_hi": "प्रतिरोध",
    "attempted": false
  },
  {
    "num": 4,
    "question_en": "Which of the following is a greenhouse gas?",
    "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false
  },
  {
    "num": 5,
    "question_en": "The process by which plants make food is called:",
    "question_hi": "पौधों द्वारा भोजन बनाने की प्रक्रिया को कहते हैं:",
    "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
    "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
    "answer_en": "Photosynthesis",
    "answer_hi": "प्रकाश संश्लेषण",
    "attempted": false
  },
  {
    "num": 6,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
    "options_en": ["Iron", "Mercury", "Gold", "Silver"],
    "options_hi": ["लोहा", "पारा", "सोना", "चांदी"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false
  },
  {
    "num": 7,
    "question_en": "The functional unit of the kidney is:",
    "question_hi": "किडनी की कार्यात्मक इकाई है:",
    "options_en": ["Neuron", "Nephron", "Alveoli", "Axon"],
    "options_hi": ["न्यूरॉन", "नेफ्रॉन", "एल्वियोली", "एक्सॉन"],
    "answer_en": "Nephron",
    "answer_hi": "नेफ्रॉन",
    "attempted": false
  },
  {
    "num": 8,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरका में कौन सा अम्ल होता है?",
    "options_en": ["Hydrochloric acid", "Sulfuric acid", "Acetic acid", "Nitric acid"],
    "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "एसिटिक अम्ल", "नाइट्रिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल",
    "attempted": false
  },
  {
    "num": 9,
    "question_en": "The speed of light in vacuum is:",
    "question_hi": "निर्वात में प्रकाश की गति है:",
    "options_en": ["3 × 10^6 m/s", "3 × 10^8 m/s", "3 × 10^5 m/s", "3 × 10^10 m/s"],
    "options_hi": ["3 × 10^6 मीटर/सेकंड", "3 × 10^8 मीटर/सेकंड", "3 × 10^5 मीटर/सेकंड", "3 × 10^10 मीटर/सेकंड"],
    "answer_en": "3 × 10^8 m/s",
    "answer_hi": "3 × 10^8 मीटर/सेकंड",
    "attempted": false
  },
  {
    "num": 10,
    "question_en": "Which gland is called the 'master gland'?",
    "question_hi": "किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
    "options_en": ["Thyroid", "Pituitary", "Pancreas", "Adrenal"],
    "options_hi": ["थायरॉयड", "पिट्यूटरी", "अग्न्याशय", "एड्रेनल"],
    "answer_en": "Pituitary",
    "answer_hi": "पिट्यूटरी",
    "attempted": false
  },
  {
    "num": 11,
    "question_en": "The chemical formula of water is:",
    "question_hi": "पानी का रासायनिक सूत्र है:",
    "options_en": ["H2O2", "CO2", "H2O", "NaCl"],
    "options_hi": ["H2O2", "CO2", "H2O", "NaCl"],
    "answer_en": "H2O",
    "answer_hi": "H2O",
    "attempted": false
  },
  {
    "num": 12,
    "question_en": "Which gas is responsible for the ozone layer depletion?",
    "question_hi": "ओजोन परत के क्षरण के लिए कौन सी गैस जिम्मेदार है?",
    "options_en": ["Oxygen", "Carbon dioxide", "Chlorofluorocarbons (CFCs)", "Nitrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "क्लोरोफ्लोरोकार्बन (CFCs)", "नाइट्रोजन"],
    "answer_en": "Chlorofluorocarbons (CFCs)",
    "answer_hi": "क्लोरोफ्लोरोकार्बन (CFCs)",
    "attempted": false
  },
  {
    "num": 13,
    "question_en": "The smallest bone in the human body is:",
    "question_hi": "मानव शरीर की सबसे छोटी हड्डी है:",
    "options_en": ["Femur", "Stapes", "Tibia", "Humerus"],
    "options_hi": ["फीमर", "स्टेप्स", "टिबिया", "ह्यूमरस"],
    "answer_en": "Stapes",
    "answer_hi": "स्टेप्स",
    "attempted": false
  },
  {
    "num": 14,
    "question_en": "Which of the following is a non-metal?",
    "question_hi": "निम्नलिखित में से कौन एक अधातु है?",
    "options_en": ["Iron", "Copper", "Sulfur", "Aluminium"],
    "options_hi": ["लोहा", "तांबा", "सल्फर", "एल्युमीनियम"],
    "answer_en": "Sulfur",
    "answer_hi": "सल्फर",
    "attempted": false
  },
  {
    "num": 15,
    "question_en": "The process of conversion of water vapor into water is called:",
    "question_hi": "जल वाष्प को जल में बदलने की प्रक्रिया को कहते हैं:",
    "options_en": ["Evaporation", "Condensation", "Sublimation", "Precipitation"],
    "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "वर्षा"],
    "answer_en": "Condensation",
    "answer_hi": "संघनन",
    "attempted": false
  },
  {
    "num": 16,
    "question_en": "Which part of the plant is responsible for photosynthesis?",
    "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण के लिए जिम्मेदार है?",
    "options_en": ["Root", "Stem", "Leaf", "Flower"],
    "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
    "answer_en": "Leaf",
    "answer_hi": "पत्ती",
    "attempted": false
  },
  {
    "num": 17,
    "question_en": "The hardest natural substance on Earth is:",
    "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ है:",
    "options_en": ["Gold", "Iron", "Diamond", "Graphite"],
    "options_hi": ["सोना", "लोहा", "हीरा", "ग्रेफाइट"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false
  },
  {
    "num": 18,
    "question_en": "Which blood group is known as the universal donor?",
    "question_hi": "किस रक्त समूह को सार्वभौमिक दाता के रूप में जाना जाता है?",
    "options_en": ["A", "B", "AB", "O"],
    "options_hi": ["A", "B", "AB", "O"],
    "answer_en": "O",
    "answer_hi": "O",
    "attempted": false
  },
  {
    "num": 19,
    "question_en": "The SI unit of electric current is:",
    "question_hi": "विद्युत धारा का SI मात्रक है:",
    "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
    "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
    "answer_en": "Ampere",
    "answer_hi": "एम्पियर",
    "attempted": false
  },
  {
    "num": 20,
    "question_en": "Which gas is most abundant in Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?",
    "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false
  },
  {
    "num": 21,
    "question_en": "Which organelle is responsible for protein synthesis?",
    "question_hi": "प्रोटीन संश्लेषण के लिए कौन सा कोशिकांग जिम्मेदार है?",
    "options_en": ["Mitochondria", "Ribosome", "Golgi apparatus", "Nucleus"],
    "options_hi": ["माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण", "केंद्रक"],
    "answer_en": "Ribosome",
    "answer_hi": "राइबोसोम",
    "attempted": false
  },
  {
    "num": 22,
    "question_en": "The chemical symbol for gold is:",
    "question_hi": "सोने का रासायनिक प्रतीक है:",
    "options_en": ["Go", "Au", "Ag", "Gd"],
    "options_hi": ["Go", "Au", "Ag", "Gd"],
    "answer_en": "Au",
    "answer_hi": "Au",
    "attempted": false
  },
  {
    "num": 23,
    "question_en": "Which of the following is a vector quantity?",
    "question_hi": "निम्नलिखित में से कौन सी सदिश राशि है?",
    "options_en": ["Mass", "Time", "Speed", "Force"],
    "options_hi": ["द्रव्यमान", "समय", "गति", "बल"],
    "answer_en": "Force",
    "answer_hi": "बल",
    "attempted": false
  },
  {
    "num": 24,
    "question_en": "The process of cell division is called:",
    "question_hi": "कोशिका विभाजन की प्रक्रिया को कहते हैं:",
    "options_en": ["Respiration", "Photosynthesis", "Mitosis", "Digestion"],
    "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "समसूत्री विभाजन", "पाचन"],
    "answer_en": "Mitosis",
    "answer_hi": "समसूत्री विभाजन",
    "attempted": false
  },
  {
    "num": 25,
    "question_en": "Which of the following is not a greenhouse gas?",
    "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस नहीं है?",
    "options_en": ["Carbon dioxide", "Methane", "Oxygen", "Water vapor"],
    "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "ऑक्सीजन", "जल वाष्प"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false
  },
  {
    "num": 26,
    "question_en": "The largest gland in the human body is:",
    "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि है:",
    "options_en": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
    "options_hi": ["अग्न्याशय", "यकृत", "थायरॉयड", "पिट्यूटरी"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false
  },
  {
    "num": 27,
    "question_en": "Which of the following is a noble gas?",
    "question_hi": "निम्नलिखित में से कौन सी एक अक्रिय गैस है?",
    "options_en": ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false
  },
  {
    "num": 28,
    "question_en": "The unit of frequency is:",
    "question_hi": "आवृत्ति की इकाई है:",
    "options_en": ["Hertz", "Decibel", "Ohm", "Watt"],
    "options_hi": ["हर्ट्ज", "डेसिबल", "ओम", "वाट"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज",
    "attempted": false
  },
  {
    "num": 29,
    "question_en": "Which vitamin is produced by the human body when exposed to sunlight?",
    "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर द्वारा कौन सा विटामिन उत्पन्न होता है?",
    "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B12", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false
  },
  {
    "num": 30,
    "question_en": "The chemical formula of common salt is:",
    "question_hi": "साधारण नमक का रासायनिक सूत्र है:",
    "options_en": ["NaCl", "H2O", "CO2", "CaCO3"],
    "options_hi": ["NaCl", "H2O", "CO2", "CaCO3"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false
  },
  {
    "num": 31,
    "question_en": "Which of the following is not a part of the human digestive system?",
    "question_hi": "निम्नलिखित में से कौन सा मानव पाचन तंत्र का हिस्सा नहीं है?",
    "options_en": ["Stomach", "Liver", "Kidney", "Small intestine"],
    "options_hi": ["आमाशय", "यकृत", "गुर्दा", "छोटी आंत"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false
  },
  {
    "num": 32,
    "question_en": "The process of loss of water from plants is called:",
    "question_hi": "पौधों से पानी की हानि की प्रक्रिया को कहते हैं:",
    "options_en": ["Photosynthesis", "Transpiration", "Respiration", "Digestion"],
    "options_hi": ["प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "श्वसन", "पाचन"],
    "answer_en": "Transpiration",
    "answer_hi": "वाष्पोत्सर्जन",
    "attempted": false
  },
  {
    "num": 33,
    "question_en": "Which of the following is a non-renewable source of energy?",
    "question_hi": "निम्नलिखित में से कौन सा ऊर्जा का अनवीकरणीय स्रोत है?",
    "options_en": ["Solar energy", "Wind energy", "Coal", "Hydropower"],
    "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "जल विद्युत"],
    "answer_en": "Coal",
    "answer_hi": "कोयला",
    "attempted": false
  },
  {
    "num": 34,
    "question_en": "The metal used in making electric wires is:",
    "question_hi": "विद्युत तार बनाने में प्रयुक्त धातु है:",
    "options_en": ["Iron", "Copper", "Aluminium", "Silver"],
    "options_hi": ["लोहा", "तांबा", "एल्युमीनियम", "चांदी"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false
  },
  {
    "num": 35,
    "question_en": "Which of the following is a function of the nervous system?",
    "question_hi": "निम्न में से कौन तंत्रिका तंत्र का कार्य है?",
    "options_en": ["Transmitting signals", "Producing hormones", "Digesting food", "Filtering blood"],
    "options_hi": ["संकेतों का संचार करना", "हार्मोन उत्पन्न करना", "भोजन पचाना", "रक्त छानना"],
    "answer_en": "Transmitting signals",
    "answer_hi": "संकेतों का संचार करना",
    "attempted": false
  },
  {
    "num": 36,
    "question_en": "The process of conversion of sugar into alcohol is called:",
    "question_hi": "चीनी को अल्कोहल में बदलने की प्रक्रिया को कहते हैं:",
    "options_en": ["Fermentation", "Distillation", "Evaporation", "Oxidation"],
    "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "ऑक्सीकरण"],
    "answer_en": "Fermentation",
    "answer_hi": "किण्वन",
    "attempted": false
  },
  {
    "num": 37,
    "question_en": "Which of the following is not a type of rock?",
    "question_hi": "निम्नलिखित में से कौन सा चट्टान का प्रकार नहीं है?",
    "options_en": ["Igneous", "Sedimentary", "Metamorphic", "Liquid"],
    "options_hi": ["आग्नेय", "अवसादी", "कायांतरित", "तरल"],
    "answer_en": "Liquid",
    "answer_hi": "तरल",
    "attempted": false
  },
  {
    "num": 38,
    "question_en": "The gas used in photosynthesis is:",
    "question_hi": "प्रकाश संश्लेषण में प्रयुक्त गैस है:",
    "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false
  },
  {
    "num": 39,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "किस ग्रह को लाल ग्रह के रूप में जाना जाता है?",
    "options_en": ["Earth", "Mars", "Jupiter", "Venus"],
    "options_hi": ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false
  },
  {
    "num": 40,
    "question_en": "The main constituent of biogas is:",
    "question_hi": "बायोगैस का मुख्य घटक है:",
    "options_en": ["Methane", "Ethane", "Propane", "Butane"],
    "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन",
    "attempted": false
  },
  {
    "num": 41,
    "question_en": "Which of the following is a function of the skeletal system?",
    "question_hi": "निम्नलिखित में से कौन सा कंकाल तंत्र का कार्य है?",
    "options_en": ["Producing blood cells", "Digesting food", "Filtering blood", "Producing hormones"],
    "options_hi": ["रक्त कोशिकाओं का उत्पादन", "भोजन पचाना", "रक्त छानना", "हार्मोन उत्पन्न करना"],
    "answer_en": "Producing blood cells",
    "answer_hi": "रक्त कोशिकाओं का उत्पादन",
    "attempted": false
  },
  {
    "num": 42,
    "question_en": "The chemical formula of methane is:",
    "question_hi": "मीथेन का रासायनिक सूत्र है:",
    "options_en": ["CH4", "CO2", "H2O", "NH3"],
    "options_hi": ["CH4", "CO2", "H2O", "NH3"],
    "answer_en": "CH4",
    "answer_hi": "CH4",
    "attempted": false
  },
  {
    "num": 43,
    "question_en": "Which of the following is a function of white blood cells?",
    "question_hi": "निम्नलिखित में से कौन सा श्वेत रक्त कोशिकाओं का कार्य है?",
    "options_en": ["Transporting oxygen", "Fighting infections", "Clotting blood", "Producing hormones"],
    "options_hi": ["ऑक्सीजन का परिवहन", "संक्रमण से लड़ना", "रक्त का थक्का बनाना", "हार्मोन उत्पन्न करना"],
    "answer_en": "Fighting infections",
    "answer_hi": "संक्रमण से लड़ना",
    "attempted": false
  },
  {
    "num": 44,
    "question_en": "The process of conversion of a solid directly into gas is called:",
    "question_hi": "ठोस को सीधे गैस में बदलने की प्रक्रिया को कहते हैं:",
    "options_en": ["Evaporation", "Sublimation", "Condensation", "Melting"],
    "options_hi": ["वाष्पीकरण", "उर्ध्वपातन", "संघनन", "पिघलना"],
    "answer_en": "Sublimation",
    "answer_hi": "उर्ध्वपातन",
    "attempted": false
  },
  {
    "num": 45,
    "question_en": "Which of the following is not a type of muscle tissue?",
    "question_hi": "निम्नलिखित में से कौन सा मांसपेशी ऊतक का प्रकार नहीं है?",
    "options_en": ["Skeletal", "Cardiac", "Smooth", "Nervous"],
    "options_hi": ["कंकालीय", "हृदय", "चिकनी", "तंत्रिका"],
    "answer_en": "Nervous",
    "answer_hi": "तंत्रिका",
    "attempted": false
  },
  {
    "num": 46,
    "question_en": "The chemical symbol for sodium is:",
    "question_hi": "सोडियम का रासायनिक प्रतीक है:",
    "options_en": ["So", "Na", "Sd", "Nm"],
    "options_hi": ["So", "Na", "Sd", "Nm"],
    "answer_en": "Na",
    "answer_hi": "Na",
    "attempted": false
  },
  {
    "num": 47,
    "question_en": "Which of the following is a function of the respiratory system?",
    "question_hi": "निम्नलिखित में से कौन सा श्वसन तंत्र का कार्य है?",
    "options_en": ["Pumping blood", "Exchanging gases", "Digesting food", "Producing hormones"],
    "options_hi": ["रक्त पंप करना", "गैसों का आदान-प्रदान", "भोजन पचाना", "हार्मोन उत्पन्न करना"],
    "answer_en": "Exchanging gases",
    "answer_hi": "गैसों का आदान-प्रदान",
    "attempted": false
  },
  {
    "num": 48,
    "question_en": "The process of conversion of light energy into chemical energy is called:",
    "question_hi": "प्रकाश ऊर्जा को रासायनिक ऊर्जा में बदलने की प्रक्रिया को कहते हैं:",
    "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
    "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "किण्वन"],
    "answer_en": "Photosynthesis",
    "answer_hi": "प्रकाश संश्लेषण",
    "attempted": false
  },
  {
    "num": 49,
    "question_en": "Which of the following is not a part of the female reproductive system?",
    "question_hi": "निम्नलिखित में से कौन सा महिला प्रजनन तंत्र का हिस्सा नहीं है?",
    "options_en": ["Ovary", "Uterus", "Testis", "Fallopian tube"],
    "options_hi": ["अंडाशय", "गर्भाशय", "वृषण", "फैलोपियन ट्यूब"],
    "answer_en": "Testis",
    "answer_hi": "वृषण",
    "attempted": false
  },
  {
    "num": 50,
    "question_en": "The process of conversion of a liquid into vapor is called:",
    "question_hi": "तरल को वाष्प में बदलने की प्रक्रिया को कहते हैं:",
    "options_en": ["Condensation", "Evaporation", "Sublimation", "Freezing"],
    "options_hi": ["संघनन", "वाष्पीकरण", "उर्ध्वपातन", "जमना"],
    "answer_en": "Evaporation",
    "answer_hi": "वाष्पीकरण",
    "attempted": false
  }



];

let currentQuestion = 0;
let language = "en"; // Default English
let timeLeft = 10800; // 5-minute timer
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
        let confirmation = confirm("Are you sure you want to submit the test?");
        if (!confirmation) return;

        clearInterval(timerInterval);

        let attempted = 0, notAttempted = 0, score = 0;
        const results = [];

        questions.forEach(q => {
                if (q.attempted) {
                        attempted++;
                        if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                                score++;
                        }
                } else {
                        notAttempted++;
                }
                results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
        });

        localStorage.setItem("attempted", attempted);
        localStorage.setItem("notAttempted", notAttempted);
        localStorage.setItem("score", score);
        localStorage.setItem("results", JSON.stringify(results));

        let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
        if (viewResult) {
                window.location.href = "/RTS/Public/Deshbord/category/test/submit-test.html";
        }
}

function startTimer() {
        const timerElement = document.getElementById("timer");
        timeLeft = 180 * 60; // Convert 180 minutes to seconds (180 × 60)

        timerInterval = setInterval(() => {
                if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        alert("Time's up! Submitting the quiz automatically.");
                        submitQuiz();
                } else {
                        const hours = Math.floor(timeLeft / 3600);
                        const minutes = Math.floor((timeLeft % 3600) / 60);
                        const seconds = timeLeft % 60;

                        // Format as HH:MM:SS with leading zeros
                        timerElement.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                        timeLeft--;
                }
        }, 1000);
}
function updateNavigation() {
        const navElement = document.getElementById("circleContainer");
        navElement.innerHTML = "";

        questions.forEach((q, index) => {
                let color = "gray"; // Default not visited
                if (q.attempted) {
                        color = "green"; // Answered
                }
                if (q.selected === "") {
                        color = "gray"; // Not answered
                }
                if (index === currentQuestion) {
                        color = "blue"; // Current question
                }
                navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
        });
}

window.onload = function () {
        loadQuestion(currentQuestion);
        startTimer();
};