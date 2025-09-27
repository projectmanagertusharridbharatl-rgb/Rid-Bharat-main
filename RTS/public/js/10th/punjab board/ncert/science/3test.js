const questions = [

    {
        "num": 1,
        "question_en": "What is the chemical formula of Water?",
        "question_hi": "पानी का रासायनिक सूत्र क्या है?",
        "options_en": ["H2O", "CO2", "NaCl", "CH4"],
        "options_hi": ["H2O", "CO2", "NaCl", "CH4"],
        "answer_en": "H2O",
        "answer_hi": "H2O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which gas is released during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the SI unit of electric current?",
        "question_hi": "विद्युत धारा का SI मात्रक क्या है?",
        "options_en": ["Volt", "Watt", "Ampere", "Ohm"],
        "options_hi": ["वोल्ट", "वाट", "एम्पियर", "ओम"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which mirror is used in vehicles as a rear-view mirror?",
        "question_hi": "वाहनों में रियर-व्यू मिरर के रूप में किस दर्पण का उपयोग होता है?",
        "options_en": ["Concave", "Convex", "Plane", "Spherical"],
        "options_hi": ["अवतल", "उत्तल", "समतल", "गोलीय"],
        "answer_en": "Convex",
        "answer_hi": "उत्तल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which acid is present in vinegar?",
        "question_hi": "सिरके में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Citric acid", "Acetic acid", "Hydrochloric acid", "Sulfuric acid"],
        "options_hi": ["साइट्रिक अम्ल", "एसिटिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the chemical name of baking soda?",
        "question_hi": "बेकिंग सोडा का रासायनिक नाम क्या है?",
        "options_en": ["Sodium carbonate", "Sodium bicarbonate", "Sodium chloride", "Sodium hydroxide"],
        "options_hi": ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम क्लोराइड", "सोडियम हाइड्रॉक्साइड"],
        "answer_en": "Sodium bicarbonate",
        "answer_hi": "सोडियम बाइकार्बोनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which part of the plant is responsible for photosynthesis?",
        "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण के लिए जिम्मेदार है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Leaf",
        "answer_hi": "पत्ती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the chemical formula of Methane?",
        "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
        "options_en": ["CH4", "C2H6", "CO2", "H2O"],
        "options_hi": ["CH4", "C2H6", "CO2", "H2O"],
        "answer_en": "CH4",
        "answer_hi": "CH4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which of the following is a greenhouse gas?",
        "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the SI unit of force?",
        "question_hi": "बल का SI मात्रक क्या है?",
        "options_en": ["Joule", "Newton", "Watt", "Pascal"],
        "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Iron", "Mercury", "Gold", "Silver"],
        "options_hi": ["लोहा", "पारा", "सोना", "चांदी"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the chemical formula of Common Salt?",
        "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "NaOH", "Na2CO3", "NaHCO3"],
        "options_hi": ["NaCl", "NaOH", "Na2CO3", "NaHCO3"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which gland is known as the master gland?",
        "question_hi": "किस ग्रंथि को मास्टर ग्रंथि कहा जाता है?",
        "options_en": ["Thyroid", "Pituitary", "Pancreas", "Adrenal"],
        "options_hi": ["थायरॉयड", "पिट्यूटरी", "अग्न्याशय", "अधिवृक्क"],
        "answer_en": "Pituitary",
        "answer_hi": "पिट्यूटरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the process of water turning into vapor called?",
        "question_hi": "पानी के वाष्प में बदलने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Condensation", "Evaporation", "Sublimation", "Freezing"],
        "options_hi": ["संघनन", "वाष्पीकरण", "उर्ध्वपातन", "हिमीकरण"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which of the following is NOT a part of the human digestive system?",
        "question_hi": "निम्नलिखित में से कौन मानव पाचन तंत्र का हिस्सा नहीं है?",
        "options_en": ["Stomach", "Liver", "Kidney", "Small intestine"],
        "options_hi": ["आमाशय", "यकृत", "गुर्दा", "छोटी आंत"],
        "answer_en": "Kidney",
        "answer_hi": "गुर्दा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the chemical formula of Glucose?",
        "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
        "options_en": ["C6H12O6", "C12H22O11", "CH4", "CO2"],
        "options_hi": ["C6H12O6", "C12H22O11", "CH4", "CO2"],
        "answer_en": "C6H12O6",
        "answer_hi": "C6H12O6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which of the following is a non-renewable resource?",
        "question_hi": "निम्नलिखित में से कौन सा अनवीकरणीय संसाधन है?",
        "options_en": ["Solar energy", "Wind energy", "Coal", "Hydropower"],
        "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "जल विद्युत"],
        "answer_en": "Coal",
        "answer_hi": "कोयला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the SI unit of pressure?",
        "question_hi": "दाब का SI मात्रक क्या है?",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which of the following is a synthetic fiber?",
        "question_hi": "निम्नलिखित में से कौन सा संश्लेषित रेशा है?",
        "options_en": ["Cotton", "Wool", "Silk", "Nylon"],
        "options_hi": ["कपास", "ऊन", "रेशम", "नायलॉन"],
        "answer_en": "Nylon",
        "answer_hi": "नायलॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the process of conversion of sugar into alcohol called?",
        "question_hi": "चीनी को अल्कोहल में बदलने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Fermentation", "Distillation", "Oxidation", "Reduction"],
        "options_hi": ["किण्वन", "आसवन", "ऑक्सीकरण", "अपचयन"],
        "answer_en": "Fermentation",
        "answer_hi": "किण्वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which of the following is NOT a type of lens?",
        "question_hi": "निम्नलिखित में से कौन सा लेंस का प्रकार नहीं है?",
        "options_en": ["Convex", "Concave", "Plane", "Cylindrical"],
        "options_hi": ["उत्तल", "अवतल", "समतल", "बेलनाकार"],
        "answer_en": "Plane",
        "answer_hi": "समतल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the chemical formula of Carbon dioxide?",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["CO", "CO2", "C2O", "C2O2"],
        "options_hi": ["CO", "CO2", "C2O", "C2O2"],
        "answer_en": "CO2",
        "answer_hi": "CO2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which of the following is NOT a type of blood cell?",
        "question_hi": "निम्नलिखित में से कौन सा रक्त कोशिका का प्रकार नहीं है?",
        "options_en": ["Red blood cell", "White blood cell", "Platelet", "Neuron"],
        "options_hi": ["लाल रक्त कोशिका", "श्वेत रक्त कोशिका", "प्लेटलेट", "तंत्रिका कोशिका"],
        "answer_en": "Neuron",
        "answer_hi": "तंत्रिका कोशिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the chemical formula of Ammonia?",
        "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
        "options_en": ["NH3", "NH4", "NO2", "NO3"],
        "options_hi": ["NH3", "NH4", "NO2", "NO3"],
        "answer_en": "NH3",
        "answer_hi": "NH3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which of the following is NOT a part of the female reproductive system?",
        "question_hi": "निम्नलिखित में से कौन सा मादा प्रजनन तंत्र का हिस्सा नहीं है?",
        "options_en": ["Ovary", "Uterus", "Testis", "Fallopian tube"],
        "options_hi": ["अंडाशय", "गर्भाशय", "वृषण", "अंडवाहिनी"],
        "answer_en": "Testis",
        "answer_hi": "वृषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the process of conversion of solid directly into gas called?",
        "question_hi": "ठोस का सीधे गैस में परिवर्तन की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "हिमीकरण"],
        "answer_en": "Sublimation",
        "answer_hi": "उर्ध्वपातन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which of the following is NOT a part of the neuron?",
        "question_hi": "निम्नलिखित में से कौन सा तंत्रिका कोशिका का हिस्सा नहीं है?",
        "options_en": ["Dendrite", "Axon", "Nucleus", "Alveoli"],
        "options_hi": ["डेंड्राइट", "एक्सॉन", "केंद्रक", "वायुकोष्ठ"],
        "answer_en": "Alveoli",
        "answer_hi": "वायुकोष्ठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the process of formation of gametes called?",
        "question_hi": "युग्मकों के निर्माण की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Fertilization", "Germination", "Gametogenesis", "Pollination"],
        "options_hi": ["निषेचन", "अंकुरण", "युग्मकजनन", "परागण"],
        "answer_en": "Gametogenesis",
        "answer_hi": "युग्मकजनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which of the following is NOT a type of asexual reproduction?",
        "question_hi": "निम्नलिखित में से कौन सा अलैंगिक प्रजनन का प्रकार नहीं है?",
        "options_en": ["Binary fission", "Budding", "Fertilization", "Fragmentation"],
        "options_hi": ["द्विखंडन", "मुकुलन", "निषेचन", "खंडन"],
        "answer_en": "Fertilization",
        "answer_hi": "निषेचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the process of conversion of gas into liquid called?",
        "question_hi": "गैस का द्रव में परिवर्तन की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "हिमीकरण"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which of the following is NOT a part of the excretory system?",
        "question_hi": "निम्नलिखित में से कौन सा उत्सर्जन तंत्र का हिस्सा नहीं है?",
        "options_en": ["Kidney", "Liver", "Lung", "Heart"],
        "options_hi": ["गुर्दा", "यकृत", "फेफड़ा", "हृदय"],
        "answer_en": "Heart",
        "answer_hi": "हृदय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the chemical formula of Sulfuric acid?",
        "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["H2SO3", "H2SO4", "HCl", "HNO3"],
        "options_hi": ["H2SO3", "H2SO4", "HCl", "HNO3"],
        "answer_en": "H2SO4",
        "answer_hi": "H2SO4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which of the following is NOT a metal?",
        "question_hi": "निम्नलिखित में से कौन सी धातु नहीं है?",
        "options_en": ["Gold", "Silver", "Sulfur", "Copper"],
        "options_hi": ["सोना", "चांदी", "सल्फर", "तांबा"],
        "answer_en": "Sulfur",
        "answer_hi": "सल्फर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the process of transfer of heat in solids called?",
        "question_hi": "ठोसों में ऊष्मा के स्थानांतरण की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Conduction", "Convection", "Radiation", "Evaporation"],
        "options_hi": ["चालन", "संवहन", "विकिरण", "वाष्पीकरण"],
        "answer_en": "Conduction",
        "answer_hi": "चालन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which of the following is NOT a part of the male reproductive system?",
        "question_hi": "निम्नलिखित में से कौन सा नर प्रजनन तंत्र का हिस्सा नहीं है?",
        "options_en": ["Testis", "Penis", "Ovary", "Vas deferens"],
        "options_hi": ["वृषण", "शिश्न", "अंडाशय", "शुक्रवाहिनी"],
        "answer_en": "Ovary",
        "answer_hi": "अंडाशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the chemical formula of Hydrochloric acid?",
        "question_hi": "हाइड्रोक्लोरिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["HCl", "H2SO4", "HNO3", "CH3COOH"],
        "options_hi": ["HCl", "H2SO4", "HNO3", "CH3COOH"],
        "answer_en": "HCl",
        "answer_hi": "HCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which of the following is a scalar quantity?",
        "question_hi": "निम्नलिखित में से कौन सी अदिश राशि है?",
        "options_en": ["Force", "Velocity", "Speed", "Acceleration"],
        "options_hi": ["बल", "वेग", "चाल", "त्वरण"],
        "answer_en": "Speed",
        "answer_hi": "चाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the process of removing salt from seawater called?",
        "question_hi": "समुद्री जल से नमक हटाने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Filtration", "Distillation", "Sedimentation", "Decantation"],
        "options_hi": ["निस्पंदन", "आसवन", "अवसादन", "विसंन्यास"],
        "answer_en": "Distillation",
        "answer_hi": "आसवन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which of the following is NOT a greenhouse gas?",
        "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस नहीं है?",
        "options_en": ["Carbon dioxide", "Methane", "Oxygen", "Nitrous oxide"],
        "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "ऑक्सीजन", "नाइट्रस ऑक्साइड"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the chemical formula of Nitric acid?",
        "question_hi": "नाइट्रिक अम्ल का रासायनिक सूत्र क्या है?",
        "options_en": ["HNO3", "H2SO4", "HCl", "CH3COOH"],
        "options_hi": ["HNO3", "H2SO4", "HCl", "CH3COOH"],
        "answer_en": "HNO3",
        "answer_hi": "HNO3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which of the following is NOT a type of blood group?",
        "question_hi": "निम्नलिखित में से कौन सा रक्त समूह का प्रकार नहीं है?",
        "options_en": ["A", "B", "AB", "AO"],
        "options_hi": ["A", "B", "AB", "AO"],
        "answer_en": "AO",
        "answer_hi": "AO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the chemical formula of Calcium carbonate?",
        "question_hi": "कैल्शियम कार्बोनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["CaCO3", "CaCl2", "CaO", "Ca(OH)2"],
        "options_hi": ["CaCO3", "CaCl2", "CaO", "Ca(OH)2"],
        "answer_en": "CaCO3",
        "answer_hi": "CaCO3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which of the following is NOT a part of the brain?",
        "question_hi": "निम्नलिखित में से कौन सा मस्तिष्क का हिस्सा नहीं है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Alveoli"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "वायुकोष्ठ"],
        "answer_en": "Alveoli",
        "answer_hi": "वायुकोष्ठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the chemical formula of Sodium hydroxide?",
        "question_hi": "सोडियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["NaOH", "NaCl", "Na2CO3", "NaHCO3"],
        "options_hi": ["NaOH", "NaCl", "Na2CO3", "NaHCO3"],
        "answer_en": "NaOH",
        "answer_hi": "NaOH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which of the following is NOT a type of pollution?",
        "question_hi": "निम्नलिखित में से कौन सा प्रदूषण का प्रकार नहीं है?",
        "options_en": ["Air pollution", "Water pollution", "Noise pollution", "Light pollution"],
        "options_hi": ["वायु प्रदूषण", "जल प्रदूषण", "ध्वनि प्रदूषण", "प्रकाश प्रदूषण"],
        "answer_en": "Light pollution",
        "answer_hi": "प्रकाश प्रदूषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the chemical formula of Potassium permanganate?",
        "question_hi": "पोटैशियम परमैंगनेट का रासायनिक सूत्र क्या है?",
        "options_en": ["KMnO4", "K2Cr2O7", "KCl", "KOH"],
        "options_hi": ["KMnO4", "K2Cr2O7", "KCl", "KOH"],
        "answer_en": "KMnO4",
        "answer_hi": "KMnO4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which of the following is NOT a type of energy?",
        "question_hi": "निम्नलिखित में से कौन सी ऊर्जा का प्रकार नहीं है?",
        "options_en": ["Kinetic energy", "Potential energy", "Thermal energy", "Magnetic energy"],
        "options_hi": ["गतिज ऊर्जा", "स्थितिज ऊर्जा", "तापीय ऊर्जा", "चुंबकीय ऊर्जा"],
        "answer_en": "Magnetic energy",
        "answer_hi": "चुंबकीय ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the chemical formula of Magnesium oxide?",
        "question_hi": "मैग्नीशियम ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["MgO", "MgCl2", "MgCO3", "Mg(OH)2"],
        "options_hi": ["MgO", "MgCl2", "MgCO3", "Mg(OH)2"],
        "answer_en": "MgO",
        "answer_hi": "MgO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which of the following is NOT a type of plant tissue?",
        "question_hi": "निम्नलिखित में से कौन सा पौधे का ऊतक नहीं है?",
        "options_en": ["Meristematic tissue", "Permanent tissue", "Epithelial tissue", "Vascular tissue"],
        "options_hi": ["विभाज्योतक", "स्थायी ऊतक", "उपकला ऊतक", "संवहनी ऊतक"],
        "answer_en": "Epithelial tissue",
        "answer_hi": "उपकला ऊतक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the chemical formula of Aluminum oxide?",
        "question_hi": "एल्युमीनियम ऑक्साइड का रासायनिक सूत्र क्या है?",
        "options_en": ["Al2O3", "AlCl3", "Al(OH)3", "Al2(SO4)3"],
        "options_hi": ["Al2O3", "AlCl3", "Al(OH)3", "Al2(SO4)3"],
        "answer_en": "Al2O3",
        "answer_hi": "Al2O3",
        "attempted": false,
        "selected": ""
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