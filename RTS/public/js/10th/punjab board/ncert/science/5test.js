const questions = [
        {
            "num": 1,
            "question_en": "Which of the following is the correct electronic configuration of sodium (Na)?",
            "question_hi": "सोडियम (Na) का सही इलेक्ट्रॉनिक विन्यास कौन सा है?",
            "options_en": ["2,8,1", "2,8,2", "2,8,8", "2,8,7"],
            "options_hi": ["2,8,1", "2,8,2", "2,8,8", "2,8,7"],
            "answer_en": "2,8,1",
            "answer_hi": "2,8,1",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "The phenomenon of scattering of light by colloidal particles is called:",
            "question_hi": "कोलाइडल कणों द्वारा प्रकाश के प्रकीर्णन की घटना को कहते हैं:",
            "options_en": ["Reflection", "Refraction", "Tyndall effect", "Dispersion"],
            "options_hi": ["परावर्तन", "अपवर्तन", "टिंडल प्रभाव", "विक्षेपण"],
            "answer_en": "Tyndall effect",
            "answer_hi": "टिंडल प्रभाव",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "Which part of the human brain controls body temperature?",
            "question_hi": "मानव मस्तिष्क का कौन सा भाग शरीर के तापमान को नियंत्रित करता है?",
            "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
            "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
            "answer_en": "Hypothalamus",
            "answer_hi": "हाइपोथैलेमस",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "The chemical reaction in which heat is absorbed is called:",
            "question_hi": "वह रासायनिक अभिक्रिया जिसमें ऊष्मा अवशोषित होती है, कहलाती है:",
            "options_en": ["Exothermic", "Endothermic", "Combustion", "Neutralization"],
            "options_hi": ["उष्माक्षेपी", "उष्माशोषी", "दहन", "उदासीनीकरण"],
            "answer_en": "Endothermic",
            "answer_hi": "उष्माशोषी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "Which of the following is NOT a function of the liver?",
            "question_hi": "निम्नलिखित में से कौन सा यकृत का कार्य नहीं है?",
            "options_en": ["Production of bile", "Storage of glycogen", "Detoxification", "Production of insulin"],
            "options_hi": ["पित्त का उत्पादन", "ग्लाइकोजन का भंडारण", "विषहरण", "इंसुलिन का उत्पादन"],
            "answer_en": "Production of insulin",
            "answer_hi": "इंसुलिन का उत्पादन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "The process of depositing a layer of zinc on iron is called:",
            "question_hi": "लोहे पर जस्ते की परत जमाने की प्रक्रिया को कहते हैं:",
            "options_en": ["Galvanization", "Alloying", "Electroplating", "Anodization"],
            "options_hi": ["गैल्वेनीकरण", "मिश्रधातु बनाना", "विद्युत लेपन", "एनोडीकरण"],
            "answer_en": "Galvanization",
            "answer_hi": "गैल्वेनीकरण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "Which of the following is NOT a characteristic of metals?",
            "question_hi": "निम्नलिखित में से कौन सी धातुओं की विशेषता नहीं है?",
            "options_en": ["Good conductor of electricity", "Malleable", "Brittle", "Sonorous"],
            "options_hi": ["विद्युत का सुचालक", "आघातवर्ध्य", "भंगुर", "ध्वनिक"],
            "answer_en": "Brittle",
            "answer_hi": "भंगुर",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "The image formed by a convex mirror is always:",
            "question_hi": "उत्तल दर्पण द्वारा बना प्रतिबिंब हमेशा होता है:",
            "options_en": ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
            "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "आभासी और उल्टा"],
            "answer_en": "Virtual and erect",
            "answer_hi": "आभासी और सीधा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "Which of the following is NOT a part of the nephron?",
            "question_hi": "निम्नलिखित में से कौन सा नेफ्रॉन का भाग नहीं है?",
            "options_en": ["Glomerulus", "Bowman's capsule", "Renal tubule", "Ureter"],
            "options_hi": ["ग्लोमेरुलस", "बोमन सम्पुट", "वृक्क नलिका", "मूत्रवाहिनी"],
            "answer_en": "Ureter",
            "answer_hi": "मूत्रवाहिनी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "The chemical formula of Plaster of Paris is:",
            "question_hi": "प्लास्टर ऑफ पेरिस का रासायनिक सूत्र है:",
            "options_en": ["CaSO4·2H2O", "CaSO4·½H2O", "CaCO3", "Ca(OH)2"],
            "options_hi": ["CaSO4·2H2O", "CaSO4·½H2O", "CaCO3", "Ca(OH)2"],
            "answer_en": "CaSO4·½H2O",
            "answer_hi": "CaSO4·½H2O",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "Which of the following is NOT a function of the skeletal system?",
            "question_hi": "निम्नलिखित में से कौन सा कंकाल तंत्र का कार्य नहीं है?",
            "options_en": ["Support", "Movement", "Production of blood cells", "Production of hormones"],
            "options_hi": ["सहारा", "गति", "रक्त कोशिकाओं का उत्पादन", "हार्मोन का उत्पादन"],
            "answer_en": "Production of hormones",
            "answer_hi": "हार्मोन का उत्पादन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "The process of conversion of ammonia into nitrates is called:",
            "question_hi": "अमोनिया को नाइट्रेट में बदलने की प्रक्रिया को कहते हैं:",
            "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
            "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
            "answer_en": "Nitrification",
            "answer_hi": "नाइट्रीकरण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
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
            "num": 14,
            "question_en": "The chemical formula of Washing soda is:",
            "question_hi": "धावन सोडा का रासायनिक सूत्र है:",
            "options_en": ["Na2CO3·10H2O", "NaHCO3", "NaOH", "NaCl"],
            "options_hi": ["Na2CO3·10H2O", "NaHCO3", "NaOH", "NaCl"],
            "answer_en": "Na2CO3·10H2O",
            "answer_hi": "Na2CO3·10H2O",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "Which of the following is NOT a part of the alimentary canal?",
            "question_hi": "निम्नलिखित में से कौन सा आहार नाल का भाग नहीं है?",
            "options_en": ["Mouth", "Stomach", "Liver", "Small intestine"],
            "options_hi": ["मुख", "आमाशय", "यकृत", "छोटी आंत"],
            "answer_en": "Liver",
            "answer_hi": "यकृत",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 16,
            "question_en": "The process by which plants lose water vapor is called:",
            "question_hi": "पौधों द्वारा जलवाष्प खोने की प्रक्रिया को कहते हैं:",
            "options_en": ["Transpiration", "Photosynthesis", "Respiration", "Evaporation"],
            "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "वाष्पीकरण"],
            "answer_en": "Transpiration",
            "answer_hi": "वाष्पोत्सर्जन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "Which of the following is NOT a component of blood?",
            "question_hi": "निम्नलिखित में से कौन सा रक्त का घटक नहीं है?",
            "options_en": ["Plasma", "Red blood cells", "White blood cells", "Neurons"],
            "options_hi": ["प्लाज्मा", "लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "तंत्रिका कोशिकाएं"],
            "answer_en": "Neurons",
            "answer_hi": "तंत्रिका कोशिकाएं",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "The chemical formula of Quick lime is:",
            "question_hi": "बिना बुझा चूना का रासायनिक सूत्र है:",
            "options_en": ["CaO", "Ca(OH)2", "CaCO3", "CaSO4"],
            "options_hi": ["CaO", "Ca(OH)2", "CaCO3", "CaSO4"],
            "answer_en": "CaO",
            "answer_hi": "CaO",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "Which of the following is NOT a function of the kidney?",
            "question_hi": "निम्नलिखित में से कौन सा वृक्क का कार्य नहीं है?",
            "options_en": ["Filtration of blood", "Regulation of water balance", "Production of urine", "Production of bile"],
            "options_hi": ["रक्त का निस्यंदन", "जल संतुलन का नियमन", "मूत्र का उत्पादन", "पित्त का उत्पादन"],
            "answer_en": "Production of bile",
            "answer_hi": "पित्त का उत्पादन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "The process of conversion of light energy into chemical energy is called:",
            "question_hi": "प्रकाश ऊर्जा को रासायनिक ऊर्जा में बदलने की प्रक्रिया को कहते हैं:",
            "options_en": ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
            "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "किण्वन"],
            "answer_en": "Photosynthesis",
            "answer_hi": "प्रकाश संश्लेषण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 21,
            "question_en": "Which of the following is NOT a type of asexual reproduction in plants?",
            "question_hi": "निम्नलिखित में से कौन सा पौधों में अलैंगिक प्रजनन का प्रकार नहीं है?",
            "options_en": ["Budding", "Fragmentation", "Spore formation", "Pollination"],
            "options_hi": ["कलिकायन", "खंडन", "बीजाणु निर्माण", "परागण"],
            "answer_en": "Pollination",
            "answer_hi": "परागण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 22,
            "question_en": "The chemical formula of Baking powder is:",
            "question_hi": "बेकिंग पाउडर का रासायनिक सूत्र है:",
            "options_en": ["NaHCO3", "NaHCO3 + Tartaric acid", "Na2CO3", "NaOH"],
            "options_hi": ["NaHCO3", "NaHCO3 + टार्टरिक अम्ल", "Na2CO3", "NaOH"],
            "answer_en": "NaHCO3 + Tartaric acid",
            "answer_hi": "NaHCO3 + टार्टरिक अम्ल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 23,
            "question_en": "Which of the following is NOT a part of the nervous system?",
            "question_hi": "निम्नलिखित में से कौन सा तंत्रिका तंत्र का भाग नहीं है?",
            "options_en": ["Brain", "Spinal cord", "Nerves", "Lymph nodes"],
            "options_hi": ["मस्तिष्क", "मेरुरज्जु", "तंत्रिकाएं", "लसीका ग्रंथियां"],
            "answer_en": "Lymph nodes",
            "answer_hi": "लसीका ग्रंथियां",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 24,
            "question_en": "The process of conversion of solid directly into gas is called:",
            "question_hi": "ठोस का सीधे गैस में परिवर्तन की प्रक्रिया को कहते हैं:",
            "options_en": ["Sublimation", "Evaporation", "Condensation", "Melting"],
            "options_hi": ["उर्ध्वपातन", "वाष्पीकरण", "संघनन", "पिघलना"],
            "answer_en": "Sublimation",
            "answer_hi": "उर्ध्वपातन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 25,
            "question_en": "Which of the following is NOT a function of the endocrine system?",
            "question_hi": "निम्नलिखित में से कौन सा अंतःस्रावी तंत्र का कार्य नहीं है?",
            "options_en": ["Regulation of metabolism", "Control of growth", "Production of hormones", "Production of enzymes"],
            "options_hi": ["चयापचय का नियमन", "वृद्धि का नियंत्रण", "हार्मोन का उत्पादन", "एंजाइम का उत्पादन"],
            "answer_en": "Production of enzymes",
            "answer_hi": "एंजाइम का उत्पादन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 26,
            "question_en": "The chemical formula of Bleaching powder is:",
            "question_hi": "विरंजक चूर्ण का रासायनिक सूत्र है:",
            "options_en": ["CaOCl2", "CaCO3", "Ca(OH)2", "CaSO4"],
            "options_hi": ["CaOCl2", "CaCO3", "Ca(OH)2", "CaSO4"],
            "answer_en": "CaOCl2",
            "answer_hi": "CaOCl2",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 27,
            "question_en": "Which of the following is NOT a part of the respiratory system?",
            "question_hi": "निम्नलिखित में से कौन सा श्वसन तंत्र का भाग नहीं है?",
            "options_en": ["Nose", "Trachea", "Lungs", "Esophagus"],
            "options_hi": ["नाक", "श्वासनली", "फेफड़े", "ग्रासनली"],
            "answer_en": "Esophagus",
            "answer_hi": "ग्रासनली",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 28,
            "question_en": "The process of conversion of gas into liquid is called:",
            "question_hi": "गैस का द्रव में परिवर्तन की प्रक्रिया को कहते हैं:",
            "options_en": ["Condensation", "Evaporation", "Sublimation", "Freezing"],
            "options_hi": ["संघनन", "वाष्पीकरण", "उर्ध्वपातन", "हिमीकरण"],
            "answer_en": "Condensation",
            "answer_hi": "संघनन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 29,
            "question_en": "Which of the following is NOT a function of the circulatory system?",
            "question_hi": "निम्नलिखित में से कौन सा परिसंचरण तंत्र का कार्य नहीं है?",
            "options_en": ["Transport of oxygen", "Transport of nutrients", "Removal of waste", "Production of hormones"],
            "options_hi": ["ऑक्सीजन का परिवहन", "पोषक तत्वों का परिवहन", "विषाक्त पदार्थों का निष्कासन", "हार्मोन का उत्पादन"],
            "answer_en": "Production of hormones",
            "answer_hi": "हार्मोन का उत्पादन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 30,
            "question_en": "The chemical formula of Gypsum is:",
            "question_hi": "जिप्सम का रासायनिक सूत्र है:",
            "options_en": ["CaSO4·2H2O", "CaSO4·½H2O", "CaCO3", "Ca(OH)2"],
            "options_hi": ["CaSO4·2H2O", "CaSO4·½H2O", "CaCO3", "Ca(OH)2"],
            "answer_en": "CaSO4·2H2O",
            "answer_hi": "CaSO4·2H2O",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 31,
            "question_en": "Which of the following is NOT a part of the excretory system?",
            "question_hi": "निम्नलिखित में से कौन सा उत्सर्जन तंत्र का भाग नहीं है?",
            "options_en": ["Kidneys", "Ureters", "Urinary bladder", "Gall bladder"],
            "options_hi": ["वृक्क", "मूत्रवाहिनी", "मूत्राशय", "पित्ताशय"],
            "answer_en": "Gall bladder",
            "answer_hi": "पित्ताशय",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 32,
            "question_en": "The process of conversion of ammonia into urea occurs in:",
            "question_hi": "अमोनिया को यूरिया में बदलने की प्रक्रिया होती है:",
            "options_en": ["Liver", "Kidneys", "Lungs", "Pancreas"],
            "options_hi": ["यकृत", "वृक्क", "फेफड़े", "अग्न्याशय"],
            "answer_en": "Liver",
            "answer_hi": "यकृत",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 33,
            "question_en": "Which of the following is NOT a function of the skin?",
            "question_hi": "निम्नलिखित में से कौन सा त्वचा का कार्य नहीं है?",
            "options_en": ["Protection", "Sensation", "Temperature regulation", "Production of bile"],
            "options_hi": ["सुरक्षा", "संवेदना", "तापमान नियमन", "पित्त का उत्पादन"],
            "answer_en": "Production of bile",
            "answer_hi": "पित्त का उत्पादन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 34,
            "question_en": "The chemical formula of Epsom salt is:",
            "question_hi": "एप्सम साल्ट का रासायनिक सूत्र है:",
            "options_en": ["MgSO4·7H2O", "CaSO4·2H2O", "Na2CO3·10H2O", "NaCl"],
            "options_hi": ["MgSO4·7H2O", "CaSO4·2H2O", "Na2CO3·10H2O", "NaCl"],
            "answer_en": "MgSO4·7H2O",
            "answer_hi": "MgSO4·7H2O",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 35,
            "question_en": "Which of the following is NOT a function of the lymphatic system?",
            "question_hi": "निम्नलिखित में से कौन सा लसीका तंत्र का कार्य नहीं है?",
            "options_en": ["Transport of fats", "Immunity", "Fluid balance", "Production of red blood cells"],
            "options_hi": ["वसा का परिवहन", "प्रतिरक्षा", "तरल संतुलन", "लाल रक्त कोशिकाओं का उत्पादन"],
            "answer_en": "Production of red blood cells",
            "answer_hi": "लाल रक्त कोशिकाओं का उत्पादन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 36,
            "question_en": "The process of conversion of glucose into pyruvate is called:",
            "question_hi": "ग्लूकोज को पाइरुवेट में बदलने की प्रक्रिया को कहते हैं:",
            "options_en": ["Glycolysis", "Krebs cycle", "Electron transport chain", "Fermentation"],
            "options_hi": ["ग्लाइकोलिसिस", "क्रेब्स चक्र", "इलेक्ट्रॉन परिवहन श्रृंखला", "किण्वन"],
            "answer_en": "Glycolysis",
            "answer_hi": "ग्लाइकोलिसिस",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 37,
            "question_en": "Which of the following is NOT a function of the skeletal muscles?",
            "question_hi": "निम्नलिखित में से कौन सा कंकालीय पेशियों का कार्य नहीं है?",
            "options_en": ["Movement", "Posture maintenance", "Heat production", "Production of hormones"],
            "options_hi": ["गति", "मुद्रा बनाए रखना", "ऊष्मा उत्पादन", "हार्मोन का उत्पादन"],
            "answer_en": "Production of hormones",
            "answer_hi": "हार्मोन का उत्पादन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 38,
            "question_en": "The chemical formula of Slaked lime is:",
            "question_hi": "बुझा हुआ चूना का रासायनिक सूत्र है:",
            "options_en": ["Ca(OH)2", "CaO", "CaCO3", "CaSO4"],
            "options_hi": ["Ca(OH)2", "CaO", "CaCO3", "CaSO4"],
            "answer_en": "Ca(OH)2",
            "answer_hi": "Ca(OH)2",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 39,
            "question_en": "Which of the following is NOT a function of the reproductive system?",
            "question_hi": "निम्नलिखित में से कौन सा प्रजनन तंत्र का कार्य नहीं है?",
            "options_en": ["Production of gametes", "Fertilization", "Development of embryo", "Production of digestive enzymes"],
            "options_hi": ["युग्मकों का उत्पादन", "निषेचन", "भ्रूण का विकास", "पाचक एंजाइमों का उत्पादन"],
            "answer_en": "Production of digestive enzymes",
            "answer_hi": "पाचक एंजाइमों का उत्पादन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 40,
            "question_en": "The process of conversion of atmospheric nitrogen into ammonia is called:",
            "question_hi": "वायुमंडलीय नाइट्रोजन को अमोनिया में बदलने की प्रक्रिया को कहते हैं:",
            "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
            "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
            "answer_en": "Nitrogen fixation",
            "answer_hi": "नाइट्रोजन स्थिरीकरण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 41,
            "question_en": "Which of the following is NOT a function of the hypothalamus?",
            "question_hi": "निम्नलिखित में से कौन सा हाइपोथैलेमस का कार्य नहीं है?",
            "options_en": ["Regulation of body temperature", "Control of hunger and thirst", "Production of growth hormone", "Control of sleep cycles"],
            "options_hi": ["शरीर के तापमान का नियमन", "भूख और प्यास का नियंत्रण", "वृद्धि हार्मोन का उत्पादन", "नींद चक्रों का नियंत्रण"],
            "answer_en": "Production of growth hormone",
            "answer_hi": "वृद्धि हार्मोन का उत्पादन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 42,
            "question_en": "The chemical formula of Blue vitriol is:",
            "question_hi": "नीला थोथा का रासायनिक सूत्र है:",
            "options_en": ["CuSO4·5H2O", "FeSO4·7H2O", "ZnSO4·7H2O", "MgSO4·7H2O"],
            "options_hi": ["CuSO4·5H2O", "FeSO4·7H2O", "ZnSO4·7H2O", "MgSO4·7H2O"],
            "answer_en": "CuSO4·5H2O",
            "answer_hi": "CuSO4·5H2O",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 43,
            "question_en": "Which of the following is NOT a function of the cerebellum?",
            "question_hi": "निम्नलिखित में से कौन सा सेरेबेलम का कार्य नहीं है?",
            "options_en": ["Maintenance of balance", "Coordination of voluntary movements", "Regulation of muscle tone", "Control of emotions"],
            "options_hi": ["संतुलन बनाए रखना", "ऐच्छिक गतियों का समन्वय", "पेशीय तनाव का नियमन", "भावनाओं का नियंत्रण"],
            "answer_en": "Control of emotions",
            "answer_hi": "भावनाओं का नियंत्रण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 44,
            "question_en": "The process of conversion of pyruvate into lactic acid is called:",
            "question_hi": "पाइरुवेट को लैक्टिक अम्ल में बदलने की प्रक्रिया को कहते हैं:",
            "options_en": ["Lactic acid fermentation", "Alcoholic fermentation", "Aerobic respiration", "Krebs cycle"],
            "options_hi": ["लैक्टिक अम्ल किण्वन", "अल्कोहल किण्वन", "वायवीय श्वसन", "क्रेब्स चक्र"],
            "answer_en": "Lactic acid fermentation",
            "answer_hi": "लैक्टिक अम्ल किण्वन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 45,
            "question_en": "Which of the following is NOT a function of the medulla oblongata?",
            "question_hi": "निम्नलिखित में से कौन सा मेडुला ऑब्लोंगाटा का कार्य नहीं है?",
            "options_en": ["Control of heartbeat", "Control of breathing", "Control of blood pressure", "Control of body temperature"],
            "options_hi": ["हृदय गति का नियंत्रण", "श्वसन का नियंत्रण", "रक्तचाप का नियंत्रण", "शरीर के तापमान का नियंत्रण"],
            "answer_en": "Control of body temperature",
            "answer_hi": "शरीर के तापमान का नियंत्रण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 46,
            "question_en": "The chemical formula of Green vitriol is:",
            "question_hi": "हरा कसीस का रासायनिक सूत्र है:",
            "options_en": ["FeSO4·7H2O", "CuSO4·5H2O", "ZnSO4·7H2O", "MgSO4·7H2O"],
            "options_hi": ["FeSO4·7H2O", "CuSO4·5H2O", "ZnSO4·7H2O", "MgSO4·7H2O"],
            "answer_en": "FeSO4·7H2O",
            "answer_hi": "FeSO4·7H2O",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 47,
            "question_en": "Which of the following is NOT a function of the cerebrum?",
            "question_hi": "निम्नलिखित में से कौन सा सेरेब्रम का कार्य नहीं है?",
            "options_en": ["Thinking", "Reasoning", "Memory", "Control of heartbeat"],
            "options_hi": ["सोच", "तर्क", "स्मृति", "हृदय गति का नियंत्रण"],
            "answer_en": "Control of heartbeat",
            "answer_hi": "हृदय गति का नियंत्रण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 48,
            "question_en": "The process of conversion of pyruvate into ethanol and carbon dioxide is called:",
            "question_hi": "पाइरुवेट को एथेनॉल और कार्बन डाइऑक्साइड में बदलने की प्रक्रिया को कहते हैं:",
            "options_en": ["Alcoholic fermentation", "Lactic acid fermentation", "Aerobic respiration", "Glycolysis"],
            "options_hi": ["अल्कोहल किण्वन", "लैक्टिक अम्ल किण्वन", "वायवीय श्वसन", "ग्लाइकोलिसिस"],
            "answer_en": "Alcoholic fermentation",
            "answer_hi": "अल्कोहल किण्वन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 49,
            "question_en": "Which of the following is NOT a function of the spinal cord?",
            "question_hi": "निम्नलिखित में से कौन सा मेरुरज्जु का कार्य नहीं है?",
            "options_en": ["Conduction of nerve impulses", "Reflex actions", "Production of cerebrospinal fluid", "Control of voluntary movements"],
            "options_hi": ["तंत्रिका आवेगों का संचालन", "प्रतिवर्ती क्रियाएं", "सेरेब्रोस्पाइनल द्रव का उत्पादन", "ऐच्छिक गतियों का नियंत्रण"],
            "answer_en": "Control of voluntary movements",
            "answer_hi": "ऐच्छिक गतियों का नियंत्रण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 50,
            "question_en": "The chemical formula of White vitriol is:",
            "question_hi": "सफेद कसीस का रासायनिक सूत्र है:",
            "options_en": ["ZnSO4·7H2O", "FeSO4·7H2O", "CuSO4·5H2O", "MgSO4·7H2O"],
            "options_hi": ["ZnSO4·7H2O", "FeSO4·7H2O", "CuSO4·5H2O", "MgSO4·7H2O"],
            "answer_en": "ZnSO4·7H2O",
            "answer_hi": "ZnSO4·7H2O",
            "attempted": false,
            "selected": ""
        }
    ]


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
