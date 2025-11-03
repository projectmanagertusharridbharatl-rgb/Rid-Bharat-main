
const questions = [


  {
    "num": 1,
    "question_en": "What is the SI unit of force?",
    "question_hi": "बल का SI मात्रक क्या है?",
    "options_en": ["Newton", "Joule", "Watt", "Pascal"],
    "options_hi": ["न्यूटन", "जूल", "वाट", "पास्कल"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन",
    "attempted": false
  },
  {
    "num": 2,
    "question_en": "The power to do work is called?",
    "question_hi": "कार्य करने की शक्ति को क्या कहते हैं?",
    "options_en": ["Energy", "Force", "Motion", "Velocity"],
    "options_hi": ["ऊर्जा", "बल", "गति", "वेग"],
    "answer_en": "Energy",
    "answer_hi": "ऊर्जा",
    "attempted": false
  },
  {
    "num": 3,
    "question_en": "Which gas is released during photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण के दौरान कौन-सी गैस निकलती है?",
    "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false
  },
  {
    "num": 4,
    "question_en": "What is the chemical formula of water?",
    "question_hi": "पानी का रासायनिक सूत्र क्या है?",
    "options_en": ["H₂O", "CO₂", "NaCl", "CH₄"],
    "options_hi": ["H₂O", "CO₂", "NaCl", "CH₄"],
    "answer_en": "H₂O",
    "answer_hi": "H₂O",
    "attempted": false
  },
  {
    "num": 5,
    "question_en": "Which mirror is used in a shaving mirror?",
    "question_hi": "शेविंग मिरर में किस प्रकार का दर्पण प्रयोग किया जाता है?",
    "options_en": ["Concave", "Convex", "Plane", "Spherical"],
    "options_hi": ["अवतल", "उत्तल", "समतल", "गोलाकार"],
    "answer_en": "Concave",
    "answer_hi": "अवतल",
    "attempted": false
  },
  {
    "num": 6,
    "question_en": "Which of the following is a noble gas?",
    "question_hi": "निम्न में से कौन एक उत्कृष्ट गैस है?",
    "options_en": ["Helium", "Oxygen", "Nitrogen", "Chlorine"],
    "options_hi": ["हीलियम", "ऑक्सीजन", "नाइट्रोजन", "क्लोरीन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false
  },
  {
    "num": 7,
    "question_en": "The process of conversion of a solid directly into gas is called?",
    "question_hi": "ठोस का सीधे गैस में बदलने की प्रक्रिया को क्या कहते हैं?",
    "options_en": ["Sublimation", "Evaporation", "Condensation", "Melting"],
    "options_hi": ["उर्ध्वपातन", "वाष्पीकरण", "संघनन", "पिघलना"],
    "answer_en": "Sublimation",
    "answer_hi": "उर्ध्वपातन",
    "attempted": false
  },
  {
    "num": 8,
    "question_en": "Which part of the brain controls balance and posture?",
    "question_hi": "मस्तिष्क का कौन-सा भाग संतुलन और मुद्रा को नियंत्रित करता है?",
    "options_en": ["Cerebellum", "Cerebrum", "Medulla", "Spinal Cord"],
    "options_hi": ["सेरिबैलम", "सेरिब्रम", "मेडुला", "रीढ़ की हड्डी"],
    "answer_en": "Cerebellum",
    "answer_hi": "सेरिबैलम",
    "attempted": false
  },
  {
    "num": 9,
    "question_en": "What is the pH of a neutral solution?",
    "question_hi": "उदासीन विलयन का pH मान क्या होता है?",
    "options_en": ["7", "1", "14", "0"],
    "options_hi": ["7", "1", "14", "0"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false
  },
  {
    "num": 10,
    "question_en": "Which metal is present in chlorophyll?",
    "question_hi": "क्लोरोफिल में कौन-सी धातु होती है?",
    "options_en": ["Magnesium", "Iron", "Calcium", "Zinc"],
    "options_hi": ["मैग्नीशियम", "आयरन", "कैल्शियम", "जिंक"],
    "answer_en": "Magnesium",
    "answer_hi": "मैग्नीशियम",
    "attempted": false
  },
  {
    "num": 11,
    "question_en": "Which of the following is a non-metal that is liquid at room temperature?",
    "question_hi": "निम्न में से कौन एक अधातु है जो कमरे के तापमान पर द्रव होती है?",
    "options_en": ["Bromine", "Mercury", "Sodium", "Iron"],
    "options_hi": ["ब्रोमीन", "पारा", "सोडियम", "लोहा"],
    "answer_en": "Bromine",
    "answer_hi": "ब्रोमीन",
    "attempted": false
  },
  {
    "num": 12,
    "question_en": "What is the unit of electric current?",
    "question_hi": "विद्युत धारा की इकाई क्या है?",
    "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
    "options_hi": ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
    "answer_en": "Ampere",
    "answer_hi": "एम्पीयर",
    "attempted": false
  },
  {
    "num": 13,
    "question_en": "Which gland is known as the 'master gland'?",
    "question_hi": "किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
    "options_en": ["Pituitary", "Thyroid", "Adrenal", "Pancreas"],
    "options_hi": ["पिट्यूटरी", "थायरॉयड", "अधिवृक्क", "अग्न्याशय"],
    "answer_en": "Pituitary",
    "answer_hi": "पिट्यूटरी",
    "attempted": false
  },
  {
    "num": 14,
    "question_en": "What is the chemical name of baking soda?",
    "question_hi": "बेकिंग सोडा का रासायनिक नाम क्या है?",
    "options_en": ["Sodium bicarbonate", "Sodium chloride", "Sodium hydroxide", "Sodium carbonate"],
    "options_hi": ["सोडियम बाइकार्बोनेट", "सोडियम क्लोराइड", "सोडियम हाइड्रॉक्साइड", "सोडियम कार्बोनेट"],
    "answer_en": "Sodium bicarbonate",
    "answer_hi": "सोडियम बाइकार्बोनेट",
    "attempted": false
  },
  {
    "num": 15,
    "question_en": "Which gas is responsible for the greenhouse effect?",
    "question_hi": "ग्रीनहाउस प्रभाव के लिए कौन-सी गैस जिम्मेदार है?",
    "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false
  },
  {
    "num": 16,
    "question_en": "Which blood cells help in clotting?",
    "question_hi": "कौन-से रक्त कोशिकाएं थक्का बनाने में मदद करती हैं?",
    "options_en": ["Platelets", "Red blood cells", "White blood cells", "Plasma"],
    "options_hi": ["प्लेटलेट्स", "लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लाज्मा"],
    "answer_en": "Platelets",
    "answer_hi": "प्लेटलेट्स",
    "attempted": false
  },
  {
    "num": 17,
    "question_en": "What is the speed of light in a vacuum?",
    "question_hi": "निर्वात में प्रकाश की गति क्या है?",
    "options_en": ["3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10³ m/s", "3 × 10¹⁰ m/s"],
    "options_hi": ["3 × 10⁸ मी/से", "3 × 10⁵ मी/से", "3 × 10³ मी/से", "3 × 10¹⁰ मी/से"],
    "answer_en": "3 × 10⁸ m/s",
    "answer_hi": "3 × 10⁸ मी/से",
    "attempted": false
  },
  {
    "num": 18,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरका में कौन-सा अम्ल होता है?",
    "options_en": ["Acetic acid", "Citric acid", "Hydrochloric acid", "Sulphuric acid"],
    "options_hi": ["एसिटिक अम्ल", "सिट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल",
    "attempted": false
  },
  {
    "num": 19,
    "question_en": "Which of the following is a good conductor of electricity?",
    "question_hi": "निम्न में से कौन विद्युत का सुचालक है?",
    "options_en": ["Copper", "Rubber", "Wood", "Plastic"],
    "options_hi": ["तांबा", "रबर", "लकड़ी", "प्लास्टिक"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false
  },
  {
    "num": 20,
    "question_en": "Which process helps plants to absorb water from the soil?",
    "question_hi": "कौन-सी प्रक्रिया पौधों को मिट्टी से पानी अवशोषित करने में मदद करती है?",
    "options_en": ["Osmosis", "Photosynthesis", "Transpiration", "Respiration"],
    "options_hi": ["परासरण", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "श्वसन"],
    "answer_en": "Osmosis",
    "answer_hi": "परासरण",
    "attempted": false
  },
  {
    "num": 21,
    "question_en": "Which of the following is a vector quantity?",
    "question_hi": "निम्न में से कौन एक सदिश राशि है?",
    "options_en": ["Velocity", "Speed", "Mass", "Temperature"],
    "options_hi": ["वेग", "चाल", "द्रव्यमान", "तापमान"],
    "answer_en": "Velocity",
    "answer_hi": "वेग",
    "attempted": false
  },
  {
    "num": 22,
    "question_en": "Which gas is known as laughing gas?",
    "question_hi": "कौन-सी गैस हंसाने वाली गैस के नाम से जानी जाती है?",
    "options_en": ["Nitrous oxide", "Oxygen", "Carbon dioxide", "Hydrogen"],
    "options_hi": ["नाइट्रस ऑक्साइड", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Nitrous oxide",
    "answer_hi": "नाइट्रस ऑक्साइड",
    "attempted": false
  },
  {
    "num": 23,
    "question_en": "Which organ produces bile?",
    "question_hi": "कौन-सा अंग पित्त का उत्पादन करता है?",
    "options_en": ["Liver", "Pancreas", "Stomach", "Kidney"],
    "options_hi": ["यकृत", "अग्न्याशय", "आमाशय", "गुर्दा"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false
  },
  {
    "num": 24,
    "question_en": "What is the chemical symbol of gold?",
    "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
    "options_en": ["Au", "Ag", "Fe", "Cu"],
    "options_hi": ["Au", "Ag", "Fe", "Cu"],
    "answer_en": "Au",
    "answer_hi": "Au",
    "attempted": false
  },
  {
    "num": 25,
    "question_en": "Which of the following is a greenhouse gas?",
    "question_hi": "निम्न में से कौन एक ग्रीनहाउस गैस है?",
    "options_en": ["Methane", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["मीथेन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन",
    "attempted": false
  },
  {
    "num": 26,
    "question_en": "What is the main component of biogas?",
    "question_hi": "बायोगैस का मुख्य घटक क्या है?",
    "options_en": ["Methane", "Carbon dioxide", "Hydrogen", "Oxygen"],
    "options_hi": ["मीथेन", "कार्बन डाइऑक्साइड", "हाइड्रोजन", "ऑक्सीजन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन",
    "attempted": false
  },
  {
    "num": 27,
    "question_en": "Which of the following is a non-renewable resource?",
    "question_hi": "निम्न में से कौन एक अनवीकरणीय संसाधन है?",
    "options_en": ["Coal", "Solar energy", "Wind energy", "Hydropower"],
    "options_hi": ["कोयला", "सौर ऊर्जा", "पवन ऊर्जा", "जल विद्युत"],
    "answer_en": "Coal",
    "answer_hi": "कोयला",
    "attempted": false
  },
  {
    "num": 28,
    "question_en": "Which part of the plant is responsible for photosynthesis?",
    "question_hi": "पौधे का कौन-सा भाग प्रकाश संश्लेषण के लिए जिम्मेदार है?",
    "options_en": ["Leaf", "Root", "Stem", "Flower"],
    "options_hi": ["पत्ती", "जड़", "तना", "फूल"],
    "answer_en": "Leaf",
    "answer_hi": "पत्ती",
    "attempted": false
  },
  {
    "num": 29,
    "question_en": "What is the unit of frequency?",
    "question_hi": "आवृत्ति की इकाई क्या है?",
    "options_en": ["Hertz", "Watt", "Ohm", "Volt"],
    "options_hi": ["हर्ट्ज", "वाट", "ओम", "वोल्ट"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज",
    "attempted": false
  },
  {
    "num": 30,
    "question_en": "Which metal is used in thermometers?",
    "question_hi": "थर्मामीटर में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Mercury", "Iron", "Copper", "Aluminium"],
    "options_hi": ["पारा", "लोहा", "तांबा", "एल्युमिनियम"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false
  },
  {
    "num": 31,
    "question_en": "Which of the following is a synthetic fibre?",
    "question_hi": "निम्न में से कौन एक संश्लिष्ट रेशा है?",
    "options_en": ["Nylon", "Cotton", "Silk", "Wool"],
    "options_hi": ["नायलॉन", "कपास", "रेशम", "ऊन"],
    "answer_en": "Nylon",
    "answer_hi": "नायलॉन",
    "attempted": false
  },
  {
    "num": 32,
    "question_en": "What is the chemical formula of methane?",
    "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
    "options_en": ["CH₄", "CO₂", "H₂O", "NH₃"],
    "options_hi": ["CH₄", "CO₂", "H₂O", "NH₃"],
    "answer_en": "CH₄",
    "answer_hi": "CH₄",
    "attempted": false
  },
  {
    "num": 33,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "आग बुझाने वाले उपकरणों में कौन-सी गैस प्रयोग की जाती है?",
    "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false
  },
  {
    "num": 34,
    "question_en": "Which instrument is used to measure atmospheric pressure?",
    "question_hi": "वायुमंडलीय दाब मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false
  },
  {
    "num": 35,
    "question_en": "Which of the following is a biodegradable waste?",
    "question_hi": "निम्न में से कौन एक जैव निम्नीकरणीय अपशिष्ट है?",
    "options_en": ["Vegetable peels", "Plastic", "Glass", "Metal"],
    "options_hi": ["सब्जी के छिलके", "प्लास्टिक", "कांच", "धातु"],
    "answer_en": "Vegetable peels",
    "answer_hi": "सब्जी के छिलके",
    "attempted": false
  },
  {
    "num": 36,
    "question_en": "Which vitamin is essential for blood clotting?",
    "question_hi": "रक्त के थक्के बनाने के लिए कौन-सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin A"],
    "options_hi": ["विटामिन K", "विटामिन C", "विटामिन D", "विटामिन A"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false
  },
  {
    "num": 37,
    "question_en": "Which of the following is a scalar quantity?",
    "question_hi": "निम्न में से कौन एक अदिश राशि है?",
    "options_en": ["Mass", "Force", "Velocity", "Acceleration"],
    "options_hi": ["द्रव्यमान", "बल", "वेग", "त्वरण"],
    "answer_en": "Mass",
    "answer_hi": "द्रव्यमान",
    "attempted": false
  },
  {
    "num": 38,
    "question_en": "Which acid is present in lemons?",
    "question_hi": "नींबू में कौन-सा अम्ल होता है?",
    "options_en": ["Citric acid", "Acetic acid", "Hydrochloric acid", "Sulphuric acid"],
    "options_hi": ["सिट्रिक अम्ल", "एसिटिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल"],
    "answer_en": "Citric acid",
    "answer_hi": "सिट्रिक अम्ल",
    "attempted": false
  },
  {
    "num": 39,
    "question_en": "Which of the following is a non-metal?",
    "question_hi": "निम्न में से कौन एक अधातु है?",
    "options_en": ["Sulphur", "Iron", "Copper", "Aluminium"],
    "options_hi": ["सल्फर", "लोहा", "तांबा", "एल्युमिनियम"],
    "answer_en": "Sulphur",
    "answer_hi": "सल्फर",
    "attempted": false
  },
  {
    "num": 40,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "किस ग्रह को लाल ग्रह कहा जाता है?",
    "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
    "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false
  },
  {
    "num": 41,
    "question_en": "Which gas is most abundant in the Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन-सी गैस पाई जाती है?",
    "options_en": ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "आर्गन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false
  },
  {
    "num": 42,
    "question_en": "Which of the following is a greenhouse gas?",
    "question_hi": "निम्न में से कौन एक ग्रीनहाउस गैस है?",
    "options_en": ["Water vapour", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["जल वाष्प", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Water vapour",
    "answer_hi": "जल वाष्प",
    "attempted": false
  },
  {
    "num": 43,
    "question_en": "Which of the following is a good conductor of heat?",
    "question_hi": "निम्न में से कौन ऊष्मा का सुचालक है?",
    "options_en": ["Silver", "Wood", "Plastic", "Rubber"],
    "options_hi": ["चांदी", "लकड़ी", "प्लास्टिक", "रबर"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false
  },
  {
    "num": 44,
    "question_en": "Which of the following is a renewable source of energy?",
    "question_hi": "निम्न में से कौन एक नवीकरणीय ऊर्जा स्रोत है?",
    "options_en": ["Solar energy", "Coal", "Petroleum", "Natural gas"],
    "options_hi": ["सौर ऊर्जा", "कोयला", "पेट्रोलियम", "प्राकृतिक गैस"],
    "answer_en": "Solar energy",
    "answer_hi": "सौर ऊर्जा",
    "attempted": false
  },
  {
    "num": 45,
    "question_en": "Which of the following is a function of the kidney?",
    "question_hi": "निम्न में से कौन गुर्दे का कार्य है?",
    "options_en": ["Filtration of blood", "Pumping blood", "Producing bile", "Digesting food"],
    "options_hi": ["रक्त का छानना", "रक्त पंप करना", "पित्त का उत्पादन", "भोजन पचाना"],
    "answer_en": "Filtration of blood",
    "answer_hi": "रक्त का छानना",
    "attempted": false
  },
  {
    "num": 46,
    "question_en": "Which of the following is a non-biodegradable waste?",
    "question_hi": "निम्न में से कौन एक गैर-जैव निम्नीकरणीय अपशिष्ट है?",
    "options_en": ["Plastic", "Paper", "Vegetable waste", "Wood"],
    "options_hi": ["प्लास्टिक", "कागज", "सब्जी का कचरा", "लकड़ी"],
    "answer_en": "Plastic",
    "answer_hi": "प्लास्टिक",
    "attempted": false
  },
  {
    "num": 47,
    "question_en": "Which of the following is a function of white blood cells?",
    "question_hi": "निम्न में से कौन श्वेत रक्त कोशिकाओं का कार्य है?",
    "options_en": ["Fighting infections", "Carrying oxygen", "Clotting blood", "Producing hormones"],
    "options_hi": ["संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "रक्त का थक्का बनाना", "हार्मोन उत्पन्न करना"],
    "answer_en": "Fighting infections",
    "answer_hi": "संक्रमण से लड़ना",
    "attempted": false
  },
  {
    "num": 48,
    "question_en": "Which of the following is a function of the nervous system?",
    "question_hi": "निम्न में से कौन तंत्रिका तंत्र का कार्य है?",
    "options_en": ["Transmitting signals", "Producing hormones", "Digesting food", "Filtering blood"],
    "options_hi": ["संकेतों का संचार करना", "हार्मोन उत्पन्न करना", "भोजन पचाना", "रक्त छानना"],
    "answer_en": "Transmitting signals",
    "answer_hi": "संकेतों का संचार करना",
    "attempted": false
  },
  {
    "num": 49,
    "question_en": "Which of the following is a function of the respiratory system?",
    "question_hi": "निम्न में से कौन श्वसन तंत्र का कार्य है?",
    "options_en": ["Exchange of gases", "Pumping blood", "Digesting food", "Producing hormones"],
    "options_hi": ["गैसों का आदान-प्रदान", "रक्त पंप करना", "भोजन पचाना", "हार्मोन उत्पन्न करना"],
    "answer_en": "Exchange of gases",
    "answer_hi": "गैसों का आदान-प्रदान",
    "attempted": false
  },
  {
    "num": 50,
    "question_en": "Which of the following is a function of the skeletal system?",
    "question_hi": "निम्न में से कौन कंकाल तंत्र का कार्य है?",
    "options_en": ["Providing support", "Producing hormones", "Digesting food", "Filtering blood"],
    "options_hi": ["सहारा देना", "हार्मोन उत्पन्न करना", "भोजन पचाना", "रक्त छानना"],
    "answer_en": "Providing support",
    "answer_hi": "सहारा देना",
    "attempted": false
  }



  // Add 35 more MCQs following the same pattern...


];

let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes

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
