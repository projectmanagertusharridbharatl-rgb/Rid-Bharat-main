const questions = [
        
                {
                    "num": 1,
                    "question_en": "What is the chemical formula of Sulfuric Acid?",
                    "question_hi": "सल्फ्यूरिक एसिड का रासायनिक सूत्र क्या है?",
                    "options_en": ["H2SO3", "H2SO4", "HCl", "HNO3"],
                    "options_hi": ["H2SO3", "H2SO4", "HCl", "HNO3"],
                    "answer_en": "H2SO4",
                    "answer_hi": "H2SO4",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 2,
                    "question_en": "Ohm’s Law is expressed as:",
                    "question_hi": "ओम का नियम किस रूप में व्यक्त किया जाता है?",
                    "options_en": ["V = IR", "I = VR", "R = VI", "P = VI"],
                    "options_hi": ["V = IR", "I = VR", "R = VI", "P = VI"],
                    "answer_en": "V = IR",
                    "answer_hi": "V = IR",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 3,
                    "question_en": "Which gland secretes insulin?",
                    "question_hi": "इंसुलिन कौन सी ग्रंथि स्रावित करती है?",
                    "options_en": ["Pituitary", "Thyroid", "Pancreas", "Adrenal"],
                    "options_hi": ["पिट्यूटरी", "थायरॉयड", "अग्न्याशय", "अधिवृक्क"],
                    "answer_en": "Pancreas",
                    "answer_hi": "अग्न्याशय",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 4,
                    "question_en": "The SI unit of electric power is:",
                    "question_hi": "विद्युत शक्ति का SI मात्रक है:",
                    "options_en": ["Joule", "Watt", "Volt", "Ampere"],
                    "options_hi": ["जूल", "वाट", "वोल्ट", "एम्पियर"],
                    "answer_en": "Watt",
                    "answer_hi": "वाट",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 5,
                    "question_en": "Which gas is released during photosynthesis?",
                    "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
                    "options_en": ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
                    "options_hi": ["कार्बन डाइऑक्साइड", "नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन"],
                    "answer_en": "Oxygen",
                    "answer_hi": "ऑक्सीजन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 6,
                    "question_en": "The chemical name of baking soda is:",
                    "question_hi": "बेकिंग सोडा का रासायनिक नाम है:",
                    "options_en": ["Sodium carbonate", "Sodium chloride", "Sodium bicarbonate", "Sodium hydroxide"],
                    "options_hi": ["सोडियम कार्बोनेट", "सोडियम क्लोराइड", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड"],
                    "answer_en": "Sodium bicarbonate",
                    "answer_hi": "सोडियम बाइकार्बोनेट",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 7,
                    "question_en": "Which mirror is used as a rear-view mirror in vehicles?",
                    "question_hi": "वाहनों में रियर-व्यू मिरर के रूप में कौन सा दर्पण प्रयोग किया जाता है?",
                    "options_en": ["Concave mirror", "Convex mirror", "Plane mirror", "Spherical mirror"],
                    "options_hi": ["अवतल दर्पण", "उत्तल दर्पण", "समतल दर्पण", "गोलीय दर्पण"],
                    "answer_en": "Convex mirror",
                    "answer_hi": "उत्तल दर्पण",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 8,
                    "question_en": "The process of depositing a layer of zinc on iron is called:",
                    "question_hi": "लोहे पर जिंक की परत जमाने की प्रक्रिया को कहते हैं:",
                    "options_en": ["Galvanization", "Crystallization", "Sedimentation", "Distillation"],
                    "options_hi": ["गैल्वनाइजेशन", "क्रिस्टलीकरण", "अवसादन", "आसवन"],
                    "answer_en": "Galvanization",
                    "answer_hi": "गैल्वनाइजेशन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 9,
                    "question_en": "Which of the following is a non-metal that remains liquid at room temperature?",
                    "question_hi": "निम्नलिखित में से कौन सा अधातु कमरे के तापमान पर द्रव रहता है?",
                    "options_en": ["Phosphorus", "Bromine", "Chlorine", "Helium"],
                    "options_hi": ["फॉस्फोरस", "ब्रोमीन", "क्लोरीन", "हीलियम"],
                    "answer_en": "Bromine",
                    "answer_hi": "ब्रोमीन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 10,
                    "question_en": "The smallest unit of life is:",
                    "question_hi": "जीवन की सबसे छोटी इकाई है:",
                    "options_en": ["Cell", "Tissue", "Organ", "Molecule"],
                    "options_hi": ["कोशिका", "ऊतक", "अंग", "अणु"],
                    "answer_en": "Cell",
                    "answer_hi": "कोशिका",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 11,
                    "question_en": "Which acid is present in vinegar?",
                    "question_hi": "सिरका में कौन सा अम्ल पाया जाता है?",
                    "options_en": ["Citric acid", "Acetic acid", "Lactic acid", "Formic acid"],
                    "options_hi": ["साइट्रिक अम्ल", "एसिटिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
                    "answer_en": "Acetic acid",
                    "answer_hi": "एसिटिक अम्ल",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 12,
                    "question_en": "The phenomenon of light bending when it passes from one medium to another is called:",
                    "question_hi": "प्रकाश का एक माध्यम से दूसरे माध्यम में जाने पर मुड़ने की घटना को कहते हैं:",
                    "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
                    "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
                    "answer_en": "Refraction",
                    "answer_hi": "अपवर्तन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 13,
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
                    "num": 14,
                    "question_en": "The process by which plants lose water vapor is called:",
                    "question_hi": "पौधों द्वारा जलवाष्प छोड़ने की प्रक्रिया को कहते हैं:",
                    "options_en": ["Photosynthesis", "Transpiration", "Respiration", "Evaporation"],
                    "options_hi": ["प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "श्वसन", "वाष्पीकरण"],
                    "answer_en": "Transpiration",
                    "answer_hi": "वाष्पोत्सर्जन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 15,
                    "question_en": "Which of the following is NOT a part of the human digestive system?",
                    "question_hi": "निम्नलिखित में से कौन मानव पाचन तंत्र का भाग नहीं है?",
                    "options_en": ["Liver", "Kidney", "Stomach", "Small intestine"],
                    "options_hi": ["यकृत", "गुर्दा", "आमाशय", "छोटी आंत"],
                    "answer_en": "Kidney",
                    "answer_hi": "गुर्दा",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 16,
                    "question_en": "The chemical formula of Methane is:",
                    "question_hi": "मीथेन का रासायनिक सूत्र है:",
                    "options_en": ["CH3", "C2H6", "CH4", "C3H8"],
                    "options_hi": ["CH3", "C2H6", "CH4", "C3H8"],
                    "answer_en": "CH4",
                    "answer_hi": "CH4",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 17,
                    "question_en": "Which of the following is a good conductor of electricity?",
                    "question_hi": "निम्नलिखित में से कौन विद्युत का सुचालक है?",
                    "options_en": ["Rubber", "Copper", "Plastic", "Wood"],
                    "options_hi": ["रबर", "तांबा", "प्लास्टिक", "लकड़ी"],
                    "answer_en": "Copper",
                    "answer_hi": "तांबा",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 18,
                    "question_en": "The red pigment in blood is called:",
                    "question_hi": "रक्त में लाल वर्णक को कहते हैं:",
                    "options_en": ["Hemoglobin", "Chlorophyll", "Melanin", "Insulin"],
                    "options_hi": ["हीमोग्लोबिन", "क्लोरोफिल", "मेलेनिन", "इंसुलिन"],
                    "answer_en": "Hemoglobin",
                    "answer_hi": "हीमोग्लोबिन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 19,
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
                    "num": 20,
                    "question_en": "The SI unit of force is:",
                    "question_hi": "बल का SI मात्रक है:",
                    "options_en": ["Joule", "Watt", "Newton", "Pascal"],
                    "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
                    "answer_en": "Newton",
                    "answer_hi": "न्यूटन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 21,
                    "question_en": "Which of the following is a decomposition reaction?",
                    "question_hi": "निम्नलिखित में से कौन सा अपघटन अभिक्रिया है?",
                    "options_en": ["2H2 + O2 → 2H2O", "CaO + H2O → Ca(OH)2", "2HgO → 2Hg + O2", "Zn + H2SO4 → ZnSO4 + H2"],
                    "options_hi": ["2H2 + O2 → 2H2O", "CaO + H2O → Ca(OH)2", "2HgO → 2Hg + O2", "Zn + H2SO4 → ZnSO4 + H2"],
                    "answer_en": "2HgO → 2Hg + O2",
                    "answer_hi": "2HgO → 2Hg + O2",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 22,
                    "question_en": "The part of the brain responsible for maintaining body balance is:",
                    "question_hi": "मस्तिष्क का वह भाग जो शरीर का संतुलन बनाए रखता है:",
                    "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
                    "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
                    "answer_en": "Cerebellum",
                    "answer_hi": "सेरेबेलम",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 23,
                    "question_en": "Which of the following is NOT a noble gas?",
                    "question_hi": "निम्नलिखित में से कौन सी अक्रिय गैस नहीं है?",
                    "options_en": ["Helium", "Neon", "Argon", "Chlorine"],
                    "options_hi": ["हीलियम", "नियॉन", "आर्गन", "क्लोरीन"],
                    "answer_en": "Chlorine",
                    "answer_hi": "क्लोरीन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 24,
                    "question_en": "The process of conversion of vapor into liquid is called:",
                    "question_hi": "वाष्प का द्रव में परिवर्तन की प्रक्रिया को कहते हैं:",
                    "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
                    "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "हिमीकरण"],
                    "answer_en": "Condensation",
                    "answer_hi": "संघनन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 25,
                    "question_en": "Which of the following is NOT a part of the female reproductive system?",
                    "question_hi": "निम्नलिखित में से कौन सा मादा प्रजनन तंत्र का भाग नहीं है?",
                    "options_en": ["Ovary", "Uterus", "Testis", "Fallopian tube"],
                    "options_hi": ["अंडाशय", "गर्भाशय", "वृषण", "अंडवाहिनी"],
                    "answer_en": "Testis",
                    "answer_hi": "वृषण",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 26,
                    "question_en": "The chemical formula of common salt is:",
                    "question_hi": "सामान्य नमक का रासायनिक सूत्र है:",
                    "options_en": ["Na2CO3", "NaCl", "NaOH", "NaHCO3"],
                    "options_hi": ["Na2CO3", "NaCl", "NaOH", "NaHCO3"],
                    "answer_en": "NaCl",
                    "answer_hi": "NaCl",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 27,
                    "question_en": "Which of the following is a vector quantity?",
                    "question_hi": "निम्नलिखित में से कौन सी सदिश राशि है?",
                    "options_en": ["Mass", "Time", "Speed", "Force"],
                    "options_hi": ["द्रव्यमान", "समय", "चाल", "बल"],
                    "answer_en": "Force",
                    "answer_hi": "बल",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 28,
                    "question_en": "The process of conversion of sugar into alcohol is called:",
                    "question_hi": "चीनी का अल्कोहल में परिवर्तन की प्रक्रिया को कहते हैं:",
                    "options_en": ["Fermentation", "Distillation", "Oxidation", "Reduction"],
                    "options_hi": ["किण्वन", "आसवन", "ऑक्सीकरण", "अपचयन"],
                    "answer_en": "Fermentation",
                    "answer_hi": "किण्वन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 29,
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
                    "num": 30,
                    "question_en": "The process of removing salt from seawater is called:",
                    "question_hi": "समुद्री जल से नमक हटाने की प्रक्रिया को कहते हैं:",
                    "options_en": ["Filtration", "Distillation", "Sedimentation", "Decantation"],
                    "options_hi": ["निस्पंदन", "आसवन", "अवसादन", "विसंन्यास"],
                    "answer_en": "Distillation",
                    "answer_hi": "आसवन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 31,
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
                    "num": 32,
                    "question_en": "The SI unit of pressure is:",
                    "question_hi": "दाब का SI मात्रक है:",
                    "options_en": ["Newton", "Joule", "Pascal", "Watt"],
                    "options_hi": ["न्यूटन", "जूल", "पास्कल", "वाट"],
                    "answer_en": "Pascal",
                    "answer_hi": "पास्कल",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 33,
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
                    "num": 34,
                    "question_en": "The process of formation of gametes is called:",
                    "question_hi": "युग्मकों के निर्माण की प्रक्रिया को कहते हैं:",
                    "options_en": ["Fertilization", "Germination", "Gametogenesis", "Pollination"],
                    "options_hi": ["निषेचन", "अंकुरण", "युग्मकजनन", "परागण"],
                    "answer_en": "Gametogenesis",
                    "answer_hi": "युग्मकजनन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 35,
                    "question_en": "Which of the following is NOT a part of the neuron?",
                    "question_hi": "निम्नलिखित में से कौन सा तंत्रिका कोशिका का भाग नहीं है?",
                    "options_en": ["Dendrite", "Axon", "Nucleus", "Alveoli"],
                    "options_hi": ["डेंड्राइट", "एक्सॉन", "केंद्रक", "वायुकोष्ठ"],
                    "answer_en": "Alveoli",
                    "answer_hi": "वायुकोष्ठ",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 36,
                    "question_en": "The chemical formula of Glucose is:",
                    "question_hi": "ग्लूकोज का रासायनिक सूत्र है:",
                    "options_en": ["C6H12O6", "C12H22O11", "CH4", "CO2"],
                    "options_hi": ["C6H12O6", "C12H22O11", "CH4", "CO2"],
                    "answer_en": "C6H12O6",
                    "answer_hi": "C6H12O6",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 37,
                    "question_en": "Which of the following is NOT a renewable source of energy?",
                    "question_hi": "निम्नलिखित में से कौन सा ऊर्जा का नवीकरणीय स्रोत नहीं है?",
                    "options_en": ["Solar energy", "Wind energy", "Natural gas", "Hydropower"],
                    "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "प्राकृतिक गैस", "जल विद्युत"],
                    "answer_en": "Natural gas",
                    "answer_hi": "प्राकृतिक गैस",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 38,
                    "question_en": "The process of conversion of light energy into chemical energy is called:",
                    "question_hi": "प्रकाश ऊर्जा का रासायनिक ऊर्जा में परिवर्तन की प्रक्रिया को कहते हैं:",
                    "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
                    "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "किण्वन"],
                    "answer_en": "Photosynthesis",
                    "answer_hi": "प्रकाश संश्लेषण",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 39,
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
                    "num": 40,
                    "question_en": "The process of transfer of heat in solids is called:",
                    "question_hi": "ठोसों में ऊष्मा के स्थानांतरण की प्रक्रिया को कहते हैं:",
                    "options_en": ["Conduction", "Convection", "Radiation", "Evaporation"],
                    "options_hi": ["चालन", "संवहन", "विकिरण", "वाष्पीकरण"],
                    "answer_en": "Conduction",
                    "answer_hi": "चालन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 41,
                    "question_en": "Which of the following is NOT a part of the male reproductive system?",
                    "question_hi": "निम्नलिखित में से कौन सा नर प्रजनन तंत्र का भाग नहीं है?",
                    "options_en": ["Testis", "Penis", "Ovary", "Vas deferens"],
                    "options_hi": ["वृषण", "शिश्न", "अंडाशय", "शुक्रवाहिनी"],
                    "answer_en": "Ovary",
                    "answer_hi": "अंडाशय",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 42,
                    "question_en": "The chemical formula of Water is:",
                    "question_hi": "पानी का रासायनिक सूत्र है:",
                    "options_en": ["H2O", "CO2", "NH3", "CH4"],
                    "options_hi": ["H2O", "CO2", "NH3", "CH4"],
                    "answer_en": "H2O",
                    "answer_hi": "H2O",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 43,
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
                    "num": 44,
                    "question_en": "The process of conversion of solid directly into gas is called:",
                    "question_hi": "ठोस का सीधे गैस में परिवर्तन की प्रक्रिया को कहते हैं:",
                    "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
                    "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "हिमीकरण"],
                    "answer_en": "Sublimation",
                    "answer_hi": "उर्ध्वपातन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 45,
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
                    "num": 46,
                    "question_en": "The chemical formula of Carbon dioxide is:",
                    "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र है:",
                    "options_en": ["CO", "CO2", "C2O", "C2O2"],
                    "options_hi": ["CO", "CO2", "C2O", "C2O2"],
                    "answer_en": "CO2",
                    "answer_hi": "CO2",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 47,
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
                    "num": 48,
                    "question_en": "The process of conversion of gas into liquid is called:",
                    "question_hi": "गैस का द्रव में परिवर्तन की प्रक्रिया को कहते हैं:",
                    "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
                    "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "हिमीकरण"],
                    "answer_en": "Condensation",
                    "answer_hi": "संघनन",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 49,
                    "question_en": "Which of the following is NOT a part of the excretory system?",
                    "question_hi": "निम्नलिखित में से कौन सा उत्सर्जन तंत्र का भाग नहीं है?",
                    "options_en": ["Kidney", "Liver", "Lung", "Heart"],
                    "options_hi": ["गुर्दा", "यकृत", "फेफड़ा", "हृदय"],
                    "answer_en": "Heart",
                    "answer_hi": "हृदय",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 50,
                    "question_en": "The chemical formula of Ammonia is:",
                    "question_hi": "अमोनिया का रासायनिक सूत्र है:",
                    "options_en": ["NH3", "NH4", "NO2", "NO3"],
                    "options_hi": ["NH3", "NH4", "NO2", "NO3"],
                    "answer_en": "NH3",
                    "answer_hi": "NH3",
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