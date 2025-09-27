
const questions = [

        
  
    {
      "num": 1,
      "question_en": "What is the unit of electric current?",
      "question_hi": "विद्युत धारा की इकाई क्या है?",
      "options_en": ["Volt", "Ampere", "Ohm", "Coulomb"],
      "options_hi": ["वोल्ट", "ऐम्पियर", "ओम", "कूलंब"],
      "answer_en": "Ampere",
      "answer_hi": "ऐम्पियर",
      "attempted": false
    },
    {
      "num": 2,
      "question_en": "Which of the following is a non-renewable source of energy?",
      "question_hi": "निम्नलिखित में से कौन सा एक अपार्य ऊर्जा स्रोत है?",
      "options_en": ["Solar energy", "Wind energy", "Coal", "Tidal energy"],
      "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "ज्वारीय ऊर्जा"],
      "answer_en": "Coal",
      "answer_hi": "कोयला",
      "attempted": false
    },
    {
      "num": 3,
      "question_en": "Which of these is a conductor of electricity?",
      "question_hi": "इनमें से कौन विद्युत का चालक है?",
      "options_en": ["Wood", "Plastic", "Copper", "Rubber"],
      "options_hi": ["लकड़ी", "प्लास्टिक", "ताम्बा", "रबर"],
      "answer_en": "Copper",
      "answer_hi": "ताम्बा",
      "attempted": false
    },
    {
      "num": 4,
      "question_en": "Which of these is a property of acids?",
      "question_hi": "इनमें से कौन सी अम्लों की विशेषता है?",
      "options_en": ["Bitter taste", "Soapy touch", "Sour taste", "Slippery"],
      "options_hi": ["कड़वा स्वाद", "साबुन जैसा स्पर्श", "खट्टा स्वाद", "फिसलन"],
      "answer_en": "Sour taste",
      "answer_hi": "खट्टा स्वाद",
      "attempted": false
    },
    {
      "num": 5,
      "question_en": "What is the pH value of water?",
      "question_hi": "पानी का pH मान क्या है?",
      "options_en": ["7", "1", "14", "0"],
      "options_hi": ["7", "1", "14", "0"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false
    },
    {
      "num": 6,
      "question_en": "Which of the following is a non-metal?",
      "question_hi": "निम्नलिखित में से कौन सा एक अधातु है?",
      "options_en": ["Iron", "Copper", "Sulfur", "Lead"],
      "options_hi": ["लोहा", "ताम्बा", "गंधक", "सीसा"],
      "answer_en": "Sulfur",
      "answer_hi": "गंधक",
      "attempted": false
    },
    {
      "num": 7,
      "question_en": "Which gas is produced during photosynthesis?",
      "question_hi": "प्रकाशसंश्लेषण के दौरान कौन सा गैस उत्पन्न होता है?",
      "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
      "answer_en": "Oxygen",
      "answer_hi": "ऑक्सीजन",
      "attempted": false
    },
    {
      "num": 8,
      "question_en": "In which part of the plant does photosynthesis occur?",
      "question_hi": "पौधे के किस भाग में प्रकाशसंश्लेषण होता है?",
      "options_en": ["Roots", "Stem", "Flowers", "Leaves"],
      "options_hi": ["मूल", "तना", "फूल", "पत्तियाँ"],
      "answer_en": "Leaves",
      "answer_hi": "पत्तियाँ",
      "attempted": false
    },
    {
      "num": 9,
      "question_en": "Which one of these is a fossil fuel?",
      "question_hi": "इनमें से कौन सा जीवाश्म ईंधन है?",
      "options_en": ["Wind", "Solar", "Coal", "Geothermal"],
      "options_hi": ["पवन", "सौर", "कोयला", "भूतापीय"],
      "answer_en": "Coal",
      "answer_hi": "कोयला",
      "attempted": false
    },
    {
      "num": 10,
      "question_en": "Which of the following is a characteristic of metals?",
      "question_hi": "निम्नलिखित में से कौन सी धातुओं की विशेषता है?",
      "options_en": ["Non-malleable", "Non-conductive", "Ductile", "Brittle"],
      "options_hi": ["अलवणीय", "अचालक", "लचीलापन", "पटकने योग्य"],
      "answer_en": "Ductile",
      "answer_hi": "लचीलापन",
      "attempted": false
    },
    {
      "num": 11,
      "question_en": "Which chemical element has the symbol 'O'?",
      "question_hi": "कौन सा रासायनिक तत्व 'O' प्रतीक द्वारा व्यक्त किया जाता है?",
      "options_en": ["Oxygen", "Osmium", "Ozone", "Opium"],
      "options_hi": ["ऑक्सीजन", "ऑस्मियम", "ओजोन", "अफीम"],
      "answer_en": "Oxygen",
      "answer_hi": "ऑक्सीजन",
      "attempted": false
    },
    {
      "num": 12,
      "question_en": "What is the main component of natural gas?",
      "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
      "options_en": ["Methane", "Ethane", "Butane", "Propane"],
      "options_hi": ["मीथेन", "एथेन", "ब्युटेन", "प्रोपेन"],
      "answer_en": "Methane",
      "answer_hi": "मीथेन",
      "attempted": false
    },
    {
      "num": 13,
      "question_en": "What is the formula for water?",
      "question_hi": "पानी का सूत्र क्या है?",
      "options_en": ["H2O", "CO2", "O2", "H2SO4"],
      "options_hi": ["H2O", "CO2", "O2", "H2SO4"],
      "answer_en": "H2O",
      "answer_hi": "H2O",
      "attempted": false
    },
    {
      "num": 14,
      "question_en": "What is the SI unit of force?",
      "question_hi": "बल की एस.आई. इकाई क्या है?",
      "options_en": ["Newton", "Joule", "Watt", "Pascal"],
      "options_hi": ["न्यूटन", "जूल", "वाट", "पैस्कल"],
      "answer_en": "Newton",
      "answer_hi": "न्यूटन",
      "attempted": false
    },
    {
      "num": 15,
      "question_en": "What type of lens is used to correct hypermetropia?",
      "question_hi": "हाइपरमेट्रोपिया को ठीक करने के लिए कौन सा लेंस उपयोग किया जाता है?",
      "options_en": ["Concave lens", "Convex lens", "Plano-convex lens", "Biconvex lens"],
      "options_hi": ["उतल लेंस", "उभरा लेंस", "प्लानो-उभरा लेंस", "दोहरी उभरी लेंस"],
      "answer_en": "Convex lens",
      "answer_hi": "उभरा लेंस",
      "attempted": false
    },
    {
      "num": 16,
      "question_en": "What is the unit of resistance?",
      "question_hi": "प्रतिरोध की इकाई क्या है?",
      "options_en": ["Ohm", "Ampere", "Volt", "Watt"],
      "options_hi": ["ओम", "ऐम्पियर", "वोल्ट", "वाट"],
      "answer_en": "Ohm",
      "answer_hi": "ओम",
      "attempted": false
    },
    {
      "num": 17,
      "question_en": "Which of the following is a renewable source of energy?",
      "question_hi": "निम्नलिखित में से कौन सा ऊर्जा का नवीनीकरणीय स्रोत है?",
      "options_en": ["Coal", "Natural Gas", "Wind", "Nuclear Energy"],
      "options_hi": ["कोयला", "प्राकृतिक गैस", "पवन", "न्यूक्लियर ऊर्जा"],
      "answer_en": "Wind",
      "answer_hi": "पवन",
      "attempted": false
    },
    {
      "num": 18,
      "question_en": "Which type of reproduction occurs in yeast?",
      "question_hi": "यीस्ट में किस प्रकार का प्रजनन होता है?",
      "options_en": ["Binary fission", "Budding", "Fragmentation", "Spore formation"],
      "options_hi": ["द्विभाजन", "बुडिंग", "विभाजन", "स्पोर निर्माण"],
      "answer_en": "Budding",
      "answer_hi": "बुडिंग",
      "attempted": false
    },
    {
      "num": 19,
      "question_en": "Which part of the plant is responsible for transpiration?",
      "question_hi": "पौधे का कौन सा भाग परिवहन के लिए जिम्मेदार है?",
      "options_en": ["Roots", "Stem", "Flowers", "Leaves"],
      "options_hi": ["मूल", "तना", "फूल", "पत्तियाँ"],
      "answer_en": "Leaves",
      "answer_hi": "पत्तियाँ",
      "attempted": false
    },
    {
      "num": 20,
      "question_en": "What is the primary function of the human digestive system?",
      "question_hi": "मानव पाचन तंत्र का मुख्य कार्य क्या है?",
      "options_en": ["Absorption of nutrients", "Excretion of waste", "Circulation of blood", "Respiration"],
      "options_hi": ["पोषक तत्वों का अवशोषण", "अपशिष्ट का उत्सर्जन", "रक्त का संचार", "श्वसन"],
      "answer_en": "Absorption of nutrients",
      "answer_hi": "पोषक तत्वों का अवशोषण",
      "attempted": false
    }
  ,
  
    {
      "num": 21,
      "question_en": "Which of the following is a greenhouse gas?",
      "question_hi": "निम्नलिखित में से कौन सा ग्रीनहाउस गैस है?",
      "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
      "answer_en": "Carbon Dioxide",
      "answer_hi": "कार्बन डाइऑक्साइड",
      "attempted": false
    },
    {
      "num": 22,
      "question_en": "Which of the following is an example of a non-metal?",
      "question_hi": "निम्नलिखित में से कौन सा एक अधातु का उदाहरण है?",
      "options_en": ["Copper", "Iron", "Sulphur", "Aluminum"],
      "options_hi": ["ताम्बा", "लोहा", "गंधक", "एल्युमिनियम"],
      "answer_en": "Sulphur",
      "answer_hi": "गंधक",
      "attempted": false
    },
    {
      "num": 23,
      "question_en": "Which of the following is a physical change?",
      "question_hi": "निम्नलिखित में से कौन सा एक भौतिक परिवर्तन है?",
      "options_en": ["Burning of wood", "Melting of ice", "Rusting of iron", "Cooking of food"],
      "options_hi": ["लकड़ी का जलना", "बर्फ का पिघलना", "लोहा का जंग लगना", "खाने का पकाना"],
      "answer_en": "Melting of ice",
      "answer_hi": "बर्फ का पिघलना",
      "attempted": false
    },
    {
      "num": 24,
      "question_en": "Which of the following is a chemical reaction?",
      "question_hi": "निम्नलिखित में से कौन सा एक रासायनिक प्रतिक्रिया है?",
      "options_en": ["Boiling of water", "Melting of wax", "Burning of paper", "Dissolving of salt in water"],
      "options_hi": ["पानी का उबालना", "मोम का पिघलना", "कागज का जलना", "पानी में नमक का घुलना"],
      "answer_en": "Burning of paper",
      "answer_hi": "कागज का जलना",
      "attempted": false
    },
    {
      "num": 25,
      "question_en": "What is the main function of white blood cells?",
      "question_hi": "सफेद रक्त कणिकाओं का मुख्य कार्य क्या है?",
      "options_en": ["Transport oxygen", "Fight infection", "Clot the blood", "Carry nutrients"],
      "options_hi": ["ऑक्सीजन का परिवहन", "संक्रमण से लड़ना", "रक्त का थक्का बनाना", "पोषक तत्वों का परिवहन"],
      "answer_en": "Fight infection",
      "answer_hi": "संक्रमण से लड़ना",
      "attempted": false
    },
    {
      "num": 26,
      "question_en": "Which gas is essential for respiration?",
      "question_hi": "श्वसन के लिए कौन सा गैस आवश्यक है?",
      "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
      "answer_en": "Oxygen",
      "answer_hi": "ऑक्सीजन",
      "attempted": false
    },
    {
      "num": 27,
      "question_en": "What is the main function of the root system in plants?",
      "question_hi": "पौधों में मूल तंत्र का मुख्य कार्य क्या है?",
      "options_en": ["Absorption of water", "Reproduction", "Photosynthesis", "Support"],
      "options_hi": ["पानी का अवशोषण", "प्रजनन", "प्रकाशसंश्लेषण", "समर्थन"],
      "answer_en": "Absorption of water",
      "answer_hi": "पानी का अवशोषण",
      "attempted": false
    },
    {
      "num": 28,
      "question_en": "Which of the following is the SI unit of work?",
      "question_hi": "कार्य की एस.आई. इकाई क्या है?",
      "options_en": ["Joule", "Newton", "Watt", "Pascal"],
      "options_hi": ["जूल", "न्यूटन", "वाट", "पैस्कल"],
      "answer_en": "Joule",
      "answer_hi": "जूल",
      "attempted": false
    },
    {
      "num": 29,
      "question_en": "Which part of the eye helps us to focus on objects?",
      "question_hi": "आँख का कौन सा भाग हमें वस्तुओं पर ध्यान केंद्रित करने में मदद करता है?",
      "options_en": ["Cornea", "Pupil", "Lens", "Retina"],
      "options_hi": ["कॉर्निया", "प्यूपिल", "लेंस", "रेटिना"],
      "answer_en": "Lens",
      "answer_hi": "लेंस",
      "attempted": false
    },
    {
      "num": 30,
      "question_en": "Which of the following is a method of asexual reproduction?",
      "question_hi": "निम्नलिखित में से कौन सा यौन प्रजनन का तरीका है?",
      "options_en": ["Budding", "Fertilization", "Pollination", "Gamete fusion"],
      "options_hi": ["बुडिंग", "फर्टिलाइजेशन", "परागण", "गैमेट संलयन"],
      "answer_en": "Budding",
      "answer_hi": "बुडिंग",
      "attempted": false
    },
    {
      "num": 31,
      "question_en": "Which of these is a characteristic of metals?",
      "question_hi": "इनमें से कौन सी धातु की विशेषता है?",
      "options_en": ["Brittle", "Ductile", "Non-conductive", "Non-malleable"],
      "options_hi": ["पटकने योग्य", "लचीलापन", "अचालक", "अलवणीय"],
      "answer_en": "Ductile",
      "answer_hi": "लचीलापन",
      "attempted": false
    },
    {
      "num": 32,
      "question_en": "Which is the most abundant gas in the Earth's atmosphere?",
      "question_hi": "पृथ्वी के वायुमंडल में सबसे प्रचुर गैस कौन सी है?",
      "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
      "answer_en": "Nitrogen",
      "answer_hi": "नाइट्रोजन",
      "attempted": false
    },
    {
      "num": 33,
      "question_en": "Which of the following is an example of a simple machine?",
      "question_hi": "निम्नलिखित में से कौन सा सरल यंत्र का उदाहरण है?",
      "options_en": ["Lever", "Washing machine", "Bicycle", "Car"],
      "options_hi": ["लीवर", "वॉशिंग मशीन", "साइकिल", "कार"],
      "answer_en": "Lever",
      "answer_hi": "लीवर",
      "attempted": false
    },
    {
      "num": 34,
      "question_en": "Which of the following is not a part of the digestive system?",
      "question_hi": "निम्नलिखित में से कौन सा पाचन तंत्र का हिस्सा नहीं है?",
      "options_en": ["Mouth", "Stomach", "Liver", "Lungs"],
      "options_hi": ["मुंह", "पेट", "यकृत", "फेफड़े"],
      "answer_en": "Lungs",
      "answer_hi": "फेफड़े",
      "attempted": false
    },
    {
      "num": 35,
      "question_en": "Which part of the plant helps in the movement of water and minerals?",
      "question_hi": "पौधे का कौन सा भाग पानी और खनिजों के संचार में मदद करता है?",
      "options_en": ["Roots", "Stem", "Leaves", "Flowers"],
      "options_hi": ["मूल", "तना", "पत्तियाँ", "फूल"],
      "answer_en": "Roots",
      "answer_hi": "मूल",
      "attempted": false
    },
    {
      "num": 36,
      "question_en": "Which of the following is an example of a reversible change?",
      "question_hi": "निम्नलिखित में से कौन सा एक प्रत्यावर्ती परिवर्तन का उदाहरण है?",
      "options_en": ["Burning of paper", "Melting of wax", "Cooking of food", "Rusting of iron"],
      "options_hi": ["कागज का जलना", "मोम का पिघलना", "खाने का पकाना", "लोहा का जंग लगना"],
      "answer_en": "Melting of wax",
      "answer_hi": "मोम का पिघलना",
      "attempted": false
    },
    {
      "num": 37,
      "question_en": "What is the term for the process of a liquid turning into a gas?",
      "question_hi": "तरल का गैस में बदलने की प्रक्रिया को क्या कहते हैं?",
      "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
      "options_hi": ["वाष्पीकरण", "संवेदन", "उपलीकरण", "जमना"],
      "answer_en": "Evaporation",
      "answer_hi": "वाष्पीकरण",
      "attempted": false
    },
    {
      "num": 38,
      "question_en": "Which of the following is a chemical symbol for Iron?",
      "question_hi": "लोहा का रासायनिक प्रतीक क्या है?",
      "options_en": ["Fe", "Ir", "I", "In"],
      "options_hi": ["Fe", "Ir", "I", "In"],
      "answer_en": "Fe",
      "answer_hi": "Fe",
      "attempted": false
    },
    {
      "num": 39,
      "question_en": "What is the chemical formula of carbon dioxide?",
      "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
      "options_en": ["CO", "CO2", "C2O", "C3O2"],
      "options_hi": ["CO", "CO2", "C2O", "C3O2"],
      "answer_en": "CO2",
      "answer_hi": "CO2",
      "attempted": false
    },
    {
      "num": 40,
      "question_en": "Which of the following is a type of joint in the human body?",
      "question_hi": "मानव शरीर में किस प्रकार का जोड़ होता है?",
      "options_en": ["Ball and socket", "Hinge", "Pivot", "All of the above"],
      "options_hi": ["गेंद और घेर", "हिंगे", "पिवट", "उपरोक्त सभी"],
      "answer_en": "All of the above",
      "answer_hi": "उपरोक्त सभी",
      "attempted": false
    }
  ,
  
    {
      "num": 41,
      "question_en": "Which of the following is a non-renewable resource?",
      "question_hi": "निम्नलिखित में से कौन सा गैर-नवीकरणीय संसाधन है?",
      "options_en": ["Solar energy", "Wind energy", "Coal", "Geothermal energy"],
      "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "भूतापीय ऊर्जा"],
      "answer_en": "Coal",
      "answer_hi": "कोयला",
      "attempted": false
    },
    {
      "num": 42,
      "question_en": "What is the SI unit of power?",
      "question_hi": "शक्ति की एस.आई. इकाई क्या है?",
      "options_en": ["Joule", "Newton", "Watt", "Pascal"],
      "options_hi": ["जूल", "न्यूटन", "वाट", "पैस्कल"],
      "answer_en": "Watt",
      "answer_hi": "वाट",
      "attempted": false
    },
    {
      "num": 43,
      "question_en": "What is the pH value of pure water?",
      "question_hi": "शुद्ध पानी का pH मान क्या है?",
      "options_en": ["7", "0", "14", "10"],
      "options_hi": ["7", "0", "14", "10"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false
    },
    {
      "num": 44,
      "question_en": "Which gas is released during photosynthesis?",
      "question_hi": "प्रकाशसंश्लेषण के दौरान कौन सा गैस रिलीज़ होता है?",
      "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
      "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "मीथेन"],
      "answer_en": "Oxygen",
      "answer_hi": "ऑक्सीजन",
      "attempted": false
    },
    {
      "num": 45,
      "question_en": "What is the chemical formula of methane?",
      "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
      "options_en": ["CH4", "C2H6", "C3H8", "C4H10"],
      "options_hi": ["CH4", "C2H6", "C3H8", "C4H10"],
      "answer_en": "CH4",
      "answer_hi": "CH4",
      "attempted": false
    },
    {
      "num": 46,
      "question_en": "Which of the following is an example of a metallic mineral?",
      "question_hi": "निम्नलिखित में से कौन सा एक धात्विक खनिज का उदाहरण है?",
      "options_en": ["Limestone", "Iron ore", "Salt", "Coal"],
      "options_hi": ["चूना पत्थर", "लोहा अयस्क", "नमक", "कोयला"],
      "answer_en": "Iron ore",
      "answer_hi": "लोहा अयस्क",
      "attempted": false
    },
    {
      "num": 47,
      "question_en": "Which of the following is used in making glass?",
      "question_hi": "काँच बनाने के लिए निम्नलिखित में से कौन सी चीज़ का उपयोग किया जाता है?",
      "options_en": ["Sand", "Coal", "Salt", "Limestone"],
      "options_hi": ["रेत", "कोयला", "नमक", "चूना पत्थर"],
      "answer_en": "Sand",
      "answer_hi": "रेत",
      "attempted": false
    },
    {
      "num": 48,
      "question_en": "Which part of the brain controls voluntary actions?",
      "question_hi": "मस्तिष्क का कौन सा हिस्सा स्वैच्छिक क्रियाओं को नियंत्रित करता है?",
      "options_en": ["Cerebellum", "Medulla", "Cerebrum", "Spinal Cord"],
      "options_hi": ["मस्तिष्ककला", "मेडुला", "मस्तिष्क", "रीढ़ की हड्डी"],
      "answer_en": "Cerebrum",
      "answer_hi": "मस्तिष्क",
      "attempted": false
    },
    {
      "num": 49,
      "question_en": "Which of the following is responsible for oxygen transport in blood?",
      "question_hi": "रक्त में ऑक्सीजन परिवहन के लिए निम्नलिखित में से कौन जिम्मेदार है?",
      "options_en": ["Red blood cells", "White blood cells", "Plasma", "Platelets"],
      "options_hi": ["लाल रक्त कणिकाएँ", "सफेद रक्त कणिकाएँ", "प्लाज्मा", "प्लेटलेट्स"],
      "answer_en": "Red blood cells",
      "answer_hi": "लाल रक्त कणिकाएँ",
      "attempted": false
    },
    {
      "num": 50,
      "question_en": "What is the primary function of the human respiratory system?",
      "question_hi": "मानव श्वसन तंत्र का मुख्य कार्य क्या है?",
      "options_en": ["Oxygen transport", "Digestion", "Respiration", "Circulation"],
      "options_hi": ["ऑक्सीजन परिवहन", "पाचन", "श्वसन", "संचरण"],
      "answer_en": "Respiration",
      "answer_hi": "श्वसन",
      "attempted": false
    },
    {
      "num": 51,
      "question_en": "Which of the following is an example of a reversible reaction?",
      "question_hi": "निम्नलिखित में से कौन सा प्रत्यावर्ती प्रतिक्रिया का उदाहरण है?",
      "options_en": ["Burning of wood", "Melting of ice", "Rusting of iron", "Boiling of water"],
      "options_hi": ["लकड़ी का जलना", "बर्फ का पिघलना", "लोहा का जंग लगना", "पानी का उबालना"],
      "answer_en": "Melting of ice",
      "answer_hi": "बर्फ का पिघलना",
      "attempted": false
    },
    {
      "num": 52,
      "question_en": "Which of the following is a synthetic polymer?",
      "question_hi": "निम्नलिखित में से कौन सा सिंथेटिक पॉलिमर है?",
      "options_en": ["Rubber", "Wool", "Silk", "Nylon"],
      "options_hi": ["रबर", "ऊन", "रेशम", "नायलॉन"],
      "answer_en": "Nylon",
      "answer_hi": "नायलॉन",
      "attempted": false
    },
    {
      "num": 53,
      "question_en": "Which element is essential for the formation of hemoglobin?",
      "question_hi": "हीमोग्लोबिन के निर्माण के लिए कौन सा तत्व आवश्यक है?",
      "options_en": ["Iron", "Calcium", "Magnesium", "Sodium"],
      "options_hi": ["लोहा", "कैल्शियम", "मैग्नीशियम", "सोडियम"],
      "answer_en": "Iron",
      "answer_hi": "लोहा",
      "attempted": false
    },
    {
      "num": 54,
      "question_en": "Which of the following is an example of an exothermic reaction?",
      "question_hi": "निम्नलिखित में से कौन सा एक उत्कृष्ठ प्रतिक्रियाओं का उदाहरण है?",
      "options_en": ["Dissolution of salt in water", "Burning of wood", "Melting of ice", "Boiling of water"],
      "options_hi": ["नमक का पानी में घुलना", "लकड़ी का जलना", "बर्फ का पिघलना", "पानी का उबालना"],
      "answer_en": "Burning of wood",
      "answer_hi": "लकड़ी का जलना",
      "attempted": false
    },
    {
      "num": 55,
      "question_en": "Which type of mirror is used in rearview mirrors of cars?",
      "question_hi": "कारों के रियरव्यू मिररों में किस प्रकार का दर्पण उपयोग किया जाता है?",
      "options_en": ["Concave mirror", "Convex mirror", "Plane mirror", "Concave lens"],
      "options_hi": ["उतल दर्पण", "उत्तल दर्पण", "समतल दर्पण", "उतल लेंस"],
      "answer_en": "Convex mirror",
      "answer_hi": "उत्तल दर्पण",
      "attempted": false
    },
    {
      "num": 56,
      "question_en": "What is the most common form of energy in our daily life?",
      "question_hi": "हमारे दैनिक जीवन में सबसे सामान्य ऊर्जा का रूप क्या है?",
      "options_en": ["Kinetic energy", "Thermal energy", "Electrical energy", "Chemical energy"],
      "options_hi": ["गतिक ऊर्जा", "तापीय ऊर्जा", "विद्युत ऊर्जा", "रासायनिक ऊर्जा"],
      "answer_en": "Electrical energy",
      "answer_hi": "विद्युत ऊर्जा",
      "attempted": false
    },
    {
      "num": 57,
      "question_en": "Which of the following is a method of separation of mixtures?",
      "question_hi": "निम्नलिखित में से कौन सा मिश्रणों के पृथक्करण का तरीका है?",
      "options_en": ["Sublimation", "Boiling", "Filling", "All of the above"],
      "options_hi": ["उपलीकरण", "उबालना", "भरना", "उपरोक्त सभी"],
      "answer_en": "All of the above",
      "answer_hi": "उपरोक्त सभी",
      "attempted": false
    },
    {
      "num": 58,
      "question_en": "What is the main role of chlorophyll in plants?",
      "question_hi": "पौधों में क्लोरोफिल की मुख्य भूमिका क्या है?",
      "options_en": ["To absorb sunlight", "To store food", "To carry water", "To form seeds"],
      "options_hi": ["सूर्य की रोशनी को अवशोषित करना", "खाद्य को संचित करना", "पानी को ले जाना", "बीज बनाना"],
      "answer_en": "To absorb sunlight",
      "answer_hi": "सूर्य की रोशनी को अवशोषित करना",
      "attempted": false
    },
    {
      "num": 59,
      "question_en": "Which of the following is a characteristic of acids?",
      "question_hi": "निम्नलिखित में से कौन सी अम्लों की विशेषता है?",
      "options_en": ["Bitter taste", "Sour taste", "Slippery feel", "Non-corrosive"],
      "options_hi": ["कड़वा स्वाद", "खट्टा स्वाद", "फिसलन महसूस", "गैर-कॉरोसिव"],
      "answer_en": "Sour taste",
      "answer_hi": "खट्टा स्वाद",
      "attempted": false
    },
    {
      "num": 60,
      "question_en": "Which of the following is an example of a noble gas?",
      "question_hi": "निम्नलिखित में से कौन सा एक महान गैस का उदाहरण है?",
      "options_en": ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
      "answer_en": "Helium",
      "answer_hi": "हीलियम",
      "attempted": false
    }
  ,
  
  
    {
      "num": 61,
      "question_en": "Which of the following is a renewable resource?",
      "question_hi": "निम्नलिखित में से कौन सा नवीकरणीय संसाधन है?",
      "options_en": ["Coal", "Petroleum", "Solar energy", "Natural gas"],
      "options_hi": ["कोयला", "पेट्रोलियम", "सौर ऊर्जा", "प्राकृतिक गैस"],
      "answer_en": "Solar energy",
      "answer_hi": "सौर ऊर्जा",
      "attempted": false
    },
    {
      "num": 62,
      "question_en": "What is the formula of sodium chloride?",
      "question_hi": "सोडियम क्लोराइड का सूत्र क्या है?",
      "options_en": ["NaCl", "Na2CO3", "NaOH", "NaHCO3"],
      "options_hi": ["NaCl", "Na2CO3", "NaOH", "NaHCO3"],
      "answer_en": "NaCl",
      "answer_hi": "NaCl",
      "attempted": false
    },
    {
      "num": 63,
      "question_en": "Which is the most abundant gas in Earth's atmosphere?",
      "question_hi": "पृथ्वी के वायुमंडल में सबसे प्रचुर गैस कौन सी है?",
      "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
      "answer_en": "Nitrogen",
      "answer_hi": "नाइट्रोजन",
      "attempted": false
    },
    {
      "num": 64,
      "question_en": "What is the SI unit of pressure?",
      "question_hi": "दबाव की एस.आई. इकाई क्या है?",
      "options_en": ["Pascal", "Newton", "Joule", "Watt"],
      "options_hi": ["पैस्कल", "न्यूटन", "जूल", "वाट"],
      "answer_en": "Pascal",
      "answer_hi": "पैस्कल",
      "attempted": false
    },
    {
      "num": 65,
      "question_en": "Which of the following is not a form of energy?",
      "question_hi": "निम्नलिखित में से कौन ऊर्जा का रूप नहीं है?",
      "options_en": ["Kinetic energy", "Potential energy", "Mass", "Thermal energy"],
      "options_hi": ["गतिक ऊर्जा", "संचित ऊर्जा", "द्रव्यमान", "तापीय ऊर्जा"],
      "answer_en": "Mass",
      "answer_hi": "द्रव्यमान",
      "attempted": false
    },
    {
      "num": 66,
      "question_en": "Which element is most commonly used in the production of computer chips?",
      "question_hi": "कंप्यूटर चिप्स के निर्माण में सबसे सामान्य तत्व कौन सा है?",
      "options_en": ["Silicon", "Gold", "Iron", "Copper"],
      "options_hi": ["सिलिकॉन", "सोना", "लोहा", "तांबा"],
      "answer_en": "Silicon",
      "answer_hi": "सिलिकॉन",
      "attempted": false
    },
    {
      "num": 67,
      "question_en": "Which of the following is a greenhouse gas?",
      "question_hi": "निम्नलिखित में से कौन सा ग्रीनहाउस गैस है?",
      "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
      "answer_en": "Carbon dioxide",
      "answer_hi": "कार्बन डाइऑक्साइड",
      "attempted": false
    },
    {
      "num": 68,
      "question_en": "What is the name of the process in which a solid turns into a gas?",
      "question_hi": "वह प्रक्रिया क्या कहलाती है जिसमें एक ठोस गैस में बदल जाता है?",
      "options_en": ["Sublimation", "Evaporation", "Condensation", "Freezing"],
      "options_hi": ["उपलीकरण", "वाष्पीकरण", "संघनन", "जमना"],
      "answer_en": "Sublimation",
      "answer_hi": "उपलीकरण",
      "attempted": false
    },
    {
      "num": 69,
      "question_en": "Which of the following elements is a non-metal?",
      "question_hi": "निम्नलिखित में से कौन सा तत्व एक गैर-धातु है?",
      "options_en": ["Iron", "Copper", "Sulfur", "Zinc"],
      "options_hi": ["लोहा", "तांबा", "गंधक", "जस्ता"],
      "answer_en": "Sulfur",
      "answer_hi": "गंधक",
      "attempted": false
    },
    {
      "num": 70,
      "question_en": "What is the process by which plants make their own food?",
      "question_hi": "वह प्रक्रिया क्या है जिसके द्वारा पौधे अपना खाना बनाते हैं?",
      "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Germination"],
      "options_hi": ["श्वसन", "प्रकाशसंश्लेषण", "पानी की वाष्पीकरण", "अंकुरण"],
      "answer_en": "Photosynthesis",
      "answer_hi": "प्रकाशसंश्लेषण",
      "attempted": false
    },
    {
      "num": 71,
      "question_en": "Which gas is used in fire extinguishers?",
      "question_hi": "आग बुझाने वाले यंत्रों में कौन सा गैस इस्तेमाल होता है?",
      "options_en": ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"],
      "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हीलियम"],
      "answer_en": "Carbon dioxide",
      "answer_hi": "कार्बन डाइऑक्साइड",
      "attempted": false
    },
    {
      "num": 72,
      "question_en": "Which of the following diseases is caused by a virus?",
      "question_hi": "निम्नलिखित में से कौन सी बीमारी वायरस से उत्पन्न होती है?",
      "options_en": ["Malaria", "Typhoid", "Dengue", "Chickenpox"],
      "options_hi": ["मलेरिया", "टाइफाइड", "डेंगू", "चिकनपॉक्स"],
      "answer_en": "Chickenpox",
      "answer_hi": "चिकनपॉक्स",
      "attempted": false
    },
    {
      "num": 73,
      "question_en": "What is the function of white blood cells?",
      "question_hi": "सफेद रक्त कणिकाओं का कार्य क्या है?",
      "options_en": ["Oxygen transport", "Digestion", "Immune response", "Blood clotting"],
      "options_hi": ["ऑक्सीजन परिवहन", "पाचन", "रोग प्रतिकारक प्रतिक्रिया", "रक्त का थक्का बनाना"],
      "answer_en": "Immune response",
      "answer_hi": "रोग प्रतिकारक प्रतिक्रिया",
      "attempted": false
    },
    {
      "num": 74,
      "question_en": "Which of the following is a characteristic of acids?",
      "question_hi": "अम्लों की निम्नलिखित में से कौन सी विशेषता है?",
      "options_en": ["Bitter taste", "Sour taste", "Slippery feel", "Caustic"],
      "options_hi": ["कड़वा स्वाद", "खट्टा स्वाद", "फिसलन महसूस", "क्षारी"],
      "answer_en": "Sour taste",
      "answer_hi": "खट्टा स्वाद",
      "attempted": false
    },
    {
      "num": 75,
      "question_en": "What is the pH value of an acidic solution?",
      "question_hi": "एक अम्लीय घोल का pH मान क्या होता है?",
      "options_en": ["Greater than 7", "Less than 7", "Equal to 7", "None of the above"],
      "options_hi": ["7 से अधिक", "7 से कम", "7 के बराबर", "उपरोक्त में से कोई नहीं"],
      "answer_en": "Less than 7",
      "answer_hi": "7 से कम",
      "attempted": false
    },
    {
      "num": 76,
      "question_en": "Which of the following is a chemical change?",
      "question_hi": "निम्नलिखित में से कौन सी रासायनिक परिवर्तन है?",
      "options_en": ["Melting of ice", "Boiling of water", "Burning of paper", "Dissolution of sugar in water"],
      "options_hi": ["बर्फ का पिघलना", "पानी का उबालना", "कागज का जलना", "पानी में चीनी का घुलना"],
      "answer_en": "Burning of paper",
      "answer_hi": "कागज का जलना",
      "attempted": false
    },
    {
      "num": 77,
      "question_en": "Which of the following is used as a lubricant?",
      "question_hi": "निम्नलिखित में से कौन सा एक स्नेहक के रूप में उपयोग किया जाता है?",
      "options_en": ["Water", "Oil", "Salt", "Sugar"],
      "options_hi": ["पानी", "तेल", "नमक", "चीनी"],
      "answer_en": "Oil",
      "answer_hi": "तेल",
      "attempted": false
    },
    {
      "num": 78,
      "question_en": "What is the main component of natural gas?",
      "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
      "options_en": ["Methane", "Ethane", "Propane", "Butane"],
      "options_hi": ["मीथेन", "एथेन", "प्रोफेन", "ब्यूटेन"],
      "answer_en": "Methane",
      "answer_hi": "मीथेन",
      "attempted": false
    },
    {
      "num": 79,
      "question_en": "Which of the following is not a greenhouse gas?",
      "question_hi": "निम्नलिखित में से कौन सा ग्रीनहाउस गैस नहीं है?",
      "options_en": ["Carbon dioxide", "Methane", "Oxygen", "Nitrous oxide"],
      "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "ऑक्सीजन", "नाइट्रस ऑक्साइड"],
      "answer_en": "Oxygen",
      "answer_hi": "ऑक्सीजन",
      "attempted": false
    },
    {
      "num": 80,
      "question_en": "Which of the following is the strongest acid?",
      "question_hi": "निम्नलिखित में से कौन सा सबसे मजबूत अम्ल है?",
      "options_en": ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
      "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसीटिक अम्ल"],
      "answer_en": "Sulfuric acid",
      "answer_hi": "सल्फ्यूरिक अम्ल",
      "attempted": false
    }
  ,
  
    {
      "num": 81,
      "question_en": "Which of the following is a non-renewable resource?",
      "question_hi": "निम्नलिखित में से कौन सा गैर-नवीकरणीय संसाधन है?",
      "options_en": ["Wind energy", "Solar energy", "Coal", "Hydropower"],
      "options_hi": ["पवन ऊर्जा", "सौर ऊर्जा", "कोयला", "जलविद्युत"],
      "answer_en": "Coal",
      "answer_hi": "कोयला",
      "attempted": false
    },
    {
      "num": 82,
      "question_en": "What is the main function of the respiratory system?",
      "question_hi": "श्वसन तंत्र का मुख्य कार्य क्या है?",
      "options_en": ["Circulation of blood", "Absorption of nutrients", "Exchange of gases", "Production of hormones"],
      "options_hi": ["रक्त का संचार", "पोषक तत्वों का अवशोषण", "गैसों का आदान-प्रदान", "हार्मोन का उत्पादन"],
      "answer_en": "Exchange of gases",
      "answer_hi": "गैसों का आदान-प्रदान",
      "attempted": false
    },
    {
      "num": 83,
      "question_en": "Which of the following is the longest bone in the human body?",
      "question_hi": "मानव शरीर में सबसे लंबी हड्डी कौन सी है?",
      "options_en": ["Femur", "Humerus", "Tibia", "Radius"],
      "options_hi": ["जांघ की हड्डी", "ह्यूमरस", "मोटे पैर की हड्डी", "रेडियस"],
      "answer_en": "Femur",
      "answer_hi": "जांघ की हड्डी",
      "attempted": false
    },
    {
      "num": 84,
      "question_en": "What is the SI unit of work?",
      "question_hi": "कार्य की एस.आई. इकाई क्या है?",
      "options_en": ["Joule", "Newton", "Watt", "Ampere"],
      "options_hi": ["जूल", "न्यूटन", "वाट", "एम्पियर"],
      "answer_en": "Joule",
      "answer_hi": "जूल",
      "attempted": false
    },
    {
      "num": 85,
      "question_en": "Which of the following is the chemical formula for water?",
      "question_hi": "पानी का रासायनिक सूत्र क्या है?",
      "options_en": ["H2O", "CO2", "NaCl", "HCl"],
      "options_hi": ["H2O", "CO2", "NaCl", "HCl"],
      "answer_en": "H2O",
      "answer_hi": "H2O",
      "attempted": false
    },
    {
      "num": 86,
      "question_en": "What is the primary cause of global warming?",
      "question_hi": "वैश्विक तापन का मुख्य कारण क्या है?",
      "options_en": ["Deforestation", "Carbon dioxide emissions", "Water pollution", "Ozone depletion"],
      "options_hi": ["वृक्षों की अन्धाधुंध कटाई", "कार्बन डाइऑक्साइड उत्सर्जन", "जल प्रदूषण", "ओजोन का क्षय"],
      "answer_en": "Carbon dioxide emissions",
      "answer_hi": "कार्बन डाइऑक्साइड उत्सर्जन",
      "attempted": false
    },
    {
      "num": 87,
      "question_en": "Which of the following is not a type of cell?",
      "question_hi": "निम्नलिखित में से कौन सा कोशिका का प्रकार नहीं है?",
      "options_en": ["Prokaryotic cell", "Eukaryotic cell", "Mitochondrial cell", "Stem cell"],
      "options_hi": ["प्रोकैरियोटिक कोशिका", "यूकेरियोटिक कोशिका", "माइटोकॉन्ड्रियल कोशिका", "स्टेम कोशिका"],
      "answer_en": "Mitochondrial cell",
      "answer_hi": "माइटोकॉन्ड्रियल कोशिका",
      "attempted": false
    },
    {
      "num": 88,
      "question_en": "Which of the following is a feature of a convex lens?",
      "question_hi": "निम्नलिखित में से कौन सी विशेषता एक उत्तल लेंस की है?",
      "options_en": ["It diverges light", "It converges light", "It forms real images only", "It cannot focus light"],
      "options_hi": ["यह प्रकाश को विसरित करता है", "यह प्रकाश को संकेंद्रित करता है", "यह केवल वास्तविक चित्र बनाता है", "यह प्रकाश को संकेंद्रित नहीं कर सकता"],
      "answer_en": "It converges light",
      "answer_hi": "यह प्रकाश को संकेंद्रित करता है",
      "attempted": false
    },
    {
      "num": 89,
      "question_en": "Which of the following is a basic unit of heredity?",
      "question_hi": "निम्नलिखित में से कौन सा वंशानुगतता का मूलभूत इकाई है?",
      "options_en": ["Gene", "Chromosome", "DNA", "RNA"],
      "options_hi": ["जीव", "क्रोमोसोम", "डीएनए", "आरएनए"],
      "answer_en": "Gene",
      "answer_hi": "जीव",
      "attempted": false
    },
    {
      "num": 90,
      "question_en": "Which type of energy is stored in food?",
      "question_hi": "खाने में किस प्रकार की ऊर्जा संचित होती है?",
      "options_en": ["Chemical energy", "Mechanical energy", "Electrical energy", "Thermal energy"],
      "options_hi": ["रासायनिक ऊर्जा", "यांत्रिक ऊर्जा", "विद्युत ऊर्जा", "तापीय ऊर्जा"],
      "answer_en": "Chemical energy",
      "answer_hi": "रासायनिक ऊर्जा",
      "attempted": false
    },
    {
      "num": 91,
      "question_en": "What is the pH value of neutral substances?",
      "question_hi": "तटस्थ पदार्थों का pH मान क्या होता है?",
      "options_en": ["7", "0", "14", "1-6"],
      "options_hi": ["7", "0", "14", "1-6"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false
    },
    {
      "num": 92,
      "question_en": "Which of the following is an example of a physical change?",
      "question_hi": "निम्नलिखित में से कौन सा भौतिक परिवर्तन का उदाहरण है?",
      "options_en": ["Melting of ice", "Burning of wood", "Rusting of iron", "Baking of a cake"],
      "options_hi": ["बर्फ का पिघलना", "लकड़ी का जलना", "लोहा का जंग लगना", "केक का बेकिंग होना"],
      "answer_en": "Melting of ice",
      "answer_hi": "बर्फ का पिघलना",
      "attempted": false
    },
    {
      "num": 93,
      "question_en": "Which of the following is not a noble gas?",
      "question_hi": "निम्नलिखित में से कौन सा उदासीन गैस नहीं है?",
      "options_en": ["Argon", "Neon", "Helium", "Nitrogen"],
      "options_hi": ["आर्गन", "निऑन", "हीलियम", "नाइट्रोजन"],
      "answer_en": "Nitrogen",
      "answer_hi": "नाइट्रोजन",
      "attempted": false
    },
    {
      "num": 94,
      "question_en": "What is the basic unit of electric current?",
      "question_hi": "विधुत धारा की मूल इकाई क्या है?",
      "options_en": ["Volt", "Ampere", "Ohm", "Joule"],
      "options_hi": ["वोल्ट", "एम्पियर", "ओम", "जूल"],
      "answer_en": "Ampere",
      "answer_hi": "एम्पियर",
      "attempted": false
    },
    {
      "num": 95,
      "question_en": "Which of the following is a conductor of electricity?",
      "question_hi": "निम्नलिखित में से कौन विद्युत का चालक है?",
      "options_en": ["Wood", "Plastic", "Copper", "Rubber"],
      "options_hi": ["लकड़ी", "प्लास्टिक", "तांबा", "रबर"],
      "answer_en": "Copper",
      "answer_hi": "तांबा",
      "attempted": false
    },
    {
      "num": 96,
      "question_en": "Which of the following is not a part of the human digestive system?",
      "question_hi": "निम्नलिखित में से कौन मानव पाचन तंत्र का हिस्सा नहीं है?",
      "options_en": ["Liver", "Kidney", "Stomach", "Pancreas"],
      "options_hi": ["जिगर", "गुर्दा", "पेट", "अग्न्याशय"],
      "answer_en": "Kidney",
      "answer_hi": "गुर्दा",
      "attempted": false
    },
    {
      "num": 97,
      "question_en": "What is the main source of energy for the human body?",
      "question_hi": "मानव शरीर के लिए ऊर्जा का मुख्य स्रोत क्या है?",
      "options_en": ["Proteins", "Carbohydrates", "Fats", "Vitamins"],
      "options_hi": ["प्रोटीन", "कार्बोहाइड्रेट", "वसा", "विटामिन"],
      "answer_en": "Carbohydrates",
      "answer_hi": "कार्बोहाइड्रेट",
      "attempted": false
    },
    {
      "num": 98,
      "question_en": "Which of the following is a product of photosynthesis?",
      "question_hi": "निम्नलिखित में से कौन प्रकाश संश्लेषण का उत्पाद है?",
      "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
      "answer_en": "Oxygen",
      "answer_hi": "ऑक्सीजन",
      "attempted": false
    },
    {
      "num": 99,
      "question_en": "What is the force that opposes motion called?",
      "question_hi": "वह बल जो गति का विरोध करता है, क्या कहलाता है?",
      "options_en": ["Friction", "Gravity", "Inertia", "Momentum"],
      "options_hi": ["घर्षण", "गुरुत्वाकर्षण", "जड़ता", "संवेग"],
      "answer_en": "Friction",
      "answer_hi": "घर्षण",
      "attempted": false
    },
    {
      "num": 100,
      "question_en": "Which of the following is the most abundant element in the Earth's crust?",
      "question_hi": "पृथ्वी की पपड़ी में सबसे प्रचुर तत्व कौन सा है?",
      "options_en": ["Oxygen", "Silicon", "Aluminum", "Iron"],
      "options_hi": ["ऑक्सीजन", "सिलिकॉन", "एल्यूमिनियम", "लोहा"],
      "answer_en": "Oxygen",
      "answer_hi": "ऑक्सीजन",
      "attempted": false
    }
  ,
                
                      
                      
              
              


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