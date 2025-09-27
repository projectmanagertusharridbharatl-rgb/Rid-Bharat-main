
const questions = [

        
                {
                  "num": 1,
                  "question_en": "Which of the following is the correct electronic configuration of sodium (Na)?",
                  "question_hi": "सोडियम (Na) का सही इलेक्ट्रॉनिक विन्यास कौन-सा है?",
                  "options_en": ["2,8,1", "2,8,2", "2,8,8", "2,8,7"],
                  "options_hi": ["2,8,1", "2,8,2", "2,8,8", "2,8,7"],
                  "answer_en": "2,8,1",
                  "answer_hi": "2,8,1",
                  "attempted": false
                },
                {
                  "num": 2,
                  "question_en": "The process of loss of water in the form of water vapor from plant leaves is called:",
                  "question_hi": "पौधों की पत्तियों से जलवाष्प के रूप में पानी की हानि की प्रक्रिया को कहते हैं:",
                  "options_en": ["Transpiration", "Photosynthesis", "Respiration", "Guttation"],
                  "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "बिंदु स्राव"],
                  "answer_en": "Transpiration",
                  "answer_hi": "वाष्पोत्सर्जन",
                  "attempted": false
                },
                {
                  "num": 3,
                  "question_en": "Which of the following is NOT a characteristic of living organisms?",
                  "question_hi": "निम्नलिखित में से कौन-सा जीवों की विशेषता नहीं है?",
                  "options_en": ["Growth", "Reproduction", "Metabolism", "Luminosity"],
                  "options_hi": ["वृद्धि", "प्रजनन", "चयापचय", "प्रदीप्ति"],
                  "answer_en": "Luminosity",
                  "answer_hi": "प्रदीप्ति",
                  "attempted": false
                },
                {
                  "num": 4,
                  "question_en": "The phenomenon of scattering of light by colloidal particles is called:",
                  "question_hi": "कोलाइडल कणों द्वारा प्रकाश के प्रकीर्णन की घटना को कहते हैं:",
                  "options_en": ["Tyndall effect", "Rayleigh scattering", "Refraction", "Dispersion"],
                  "options_hi": ["टिंडल प्रभाव", "रेले प्रकीर्णन", "अपवर्तन", "विक्षेपण"],
                  "answer_en": "Tyndall effect",
                  "answer_hi": "टिंडल प्रभाव",
                  "attempted": false
                },
                {
                  "num": 5,
                  "question_en": "Which of the following is NOT a function of the skeletal system?",
                  "question_hi": "निम्नलिखित में से कौन-सा कंकाल तंत्र का कार्य नहीं है?",
                  "options_en": ["Protection of organs", "Production of blood cells", "Storage of minerals", "Production of hormones"],
                  "options_hi": ["अंगों की सुरक्षा", "रक्त कोशिकाओं का उत्पादन", "खनिजों का भंडारण", "हार्मोन का उत्पादन"],
                  "answer_en": "Production of hormones",
                  "answer_hi": "हार्मोन का उत्पादन",
                  "attempted": false
                },
                {
                  "num": 6,
                  "question_en": "The chemical reaction in which heat is absorbed is called:",
                  "question_hi": "वह रासायनिक अभिक्रिया जिसमें ऊष्मा अवशोषित होती है, कहलाती है:",
                  "options_en": ["Exothermic reaction", "Endothermic reaction", "Combustion reaction", "Neutralization reaction"],
                  "options_hi": ["उष्माक्षेपी अभिक्रिया", "उष्माशोषी अभिक्रिया", "दहन अभिक्रिया", "उदासीनीकरण अभिक्रिया"],
                  "answer_en": "Endothermic reaction",
                  "answer_hi": "उष्माशोषी अभिक्रिया",
                  "attempted": false
                },
                {
                  "num": 7,
                  "question_en": "Which of the following is NOT a part of the alimentary canal?",
                  "question_hi": "निम्नलिखित में से कौन-सा आहार नाल का भाग नहीं है?",
                  "options_en": ["Mouth", "Stomach", "Liver", "Small intestine"],
                  "options_hi": ["मुख", "आमाशय", "यकृत", "छोटी आंत"],
                  "answer_en": "Liver",
                  "answer_hi": "यकृत",
                  "attempted": false
                },
                {
                  "num": 8,
                  "question_en": "The process by which plants prepare their food is called:",
                  "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे अपना भोजन तैयार करते हैं, कहलाती है:",
                  "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
                  "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
                  "answer_en": "Photosynthesis",
                  "answer_hi": "प्रकाश संश्लेषण",
                  "attempted": false
                },
                {
                  "num": 9,
                  "question_en": "Which of the following is NOT a type of asexual reproduction in plants?",
                  "question_hi": "निम्नलिखित में से कौन-सा पौधों में अलैंगिक प्रजनन का प्रकार नहीं है?",
                  "options_en": ["Budding", "Fragmentation", "Pollination", "Spore formation"],
                  "options_hi": ["कलिकायन", "खंडन", "परागण", "बीजाणु निर्माण"],
                  "answer_en": "Pollination",
                  "answer_hi": "परागण",
                  "attempted": false
                },
                {
                  "num": 10,
                  "question_en": "The device used to measure electric current is called:",
                  "question_hi": "विद्युत धारा मापने के लिए प्रयुक्त यंत्र को कहते हैं:",
                  "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
                  "options_hi": ["वोल्टमीटर", "ऐमीटर", "गैल्वेनोमीटर", "ओममीटर"],
                  "answer_en": "Ammeter",
                  "answer_hi": "ऐमीटर",
                  "attempted": false
                },
                {
                  "num": 11,
                  "question_en": "Which of the following is NOT a function of roots?",
                  "question_hi": "निम्नलिखित में से कौन-सा जड़ों का कार्य नहीं है?",
                  "options_en": ["Absorption of water", "Anchoring the plant", "Photosynthesis", "Storage of food"],
                  "options_hi": ["जल का अवशोषण", "पौधे को स्थिर करना", "प्रकाश संश्लेषण", "भोजन का संग्रह"],
                  "answer_en": "Photosynthesis",
                  "answer_hi": "प्रकाश संश्लेषण",
                  "attempted": false
                },
                {
                  "num": 12,
                  "question_en": "The process of conversion of ammonia into nitrates is called:",
                  "question_hi": "अमोनिया को नाइट्रेट में बदलने की प्रक्रिया को कहते हैं:",
                  "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
                  "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
                  "answer_en": "Nitrification",
                  "answer_hi": "नाइट्रीकरण",
                  "attempted": false
                },
                {
                  "num": 13,
                  "question_en": "Which of the following is NOT a component of blood?",
                  "question_hi": "निम्नलिखित में से कौन-सा रक्त का घटक नहीं है?",
                  "options_en": ["Plasma", "Platelets", "Red blood cells", "Neurons"],
                  "options_hi": ["प्लाज्मा", "प्लेटलेट्स", "लाल रक्त कोशिकाएँ", "न्यूरॉन्स"],
                  "answer_en": "Neurons",
                  "answer_hi": "न्यूरॉन्स",
                  "attempted": false
                },
                {
                  "num": 14,
                  "question_en": "The phenomenon due to which the sun appears red during sunrise and sunset is called:",
                  "question_hi": "वह घटना जिसके कारण सूर्योदय और सूर्यास्त के समय सूर्य लाल दिखाई देता है, कहलाती है:",
                  "options_en": ["Dispersion", "Scattering", "Reflection", "Refraction"],
                  "options_hi": ["विक्षेपण", "प्रकीर्णन", "परावर्तन", "अपवर्तन"],
                  "answer_en": "Scattering",
                  "answer_hi": "प्रकीर्णन",
                  "attempted": false
                },
                {
                  "num": 15,
                  "question_en": "Which of the following is NOT a part of the excretory system?",
                  "question_hi": "निम्नलिखित में से कौन-सा उत्सर्जन तंत्र का भाग नहीं है?",
                  "options_en": ["Kidneys", "Ureters", "Lungs", "Pancreas"],
                  "options_hi": ["वृक्क", "मूत्रवाहिनी", "फेफड़े", "अग्न्याशय"],
                  "answer_en": "Pancreas",
                  "answer_hi": "अग्न्याशय",
                  "attempted": false
                },
                {
                  "num": 16,
                  "question_en": "The process of conversion of fats into soap is called:",
                  "question_hi": "वसा को साबुन में बदलने की प्रक्रिया को कहते हैं:",
                  "options_en": ["Esterification", "Saponification", "Fermentation", "Hydrogenation"],
                  "options_hi": ["एस्टरीकरण", "साबुनीकरण", "किण्वन", "हाइड्रोजनीकरण"],
                  "answer_en": "Saponification",
                  "answer_hi": "साबुनीकरण",
                  "attempted": false
                },
                {
                  "num": 17,
                  "question_en": "Which of the following is NOT a function of the nervous system?",
                  "question_hi": "निम्नलिखित में से कौन-सा तंत्रिका तंत्र का कार्य नहीं है?",
                  "options_en": ["Control and coordination", "Response to stimuli", "Transport of nutrients", "Memory and learning"],
                  "options_hi": ["नियंत्रण और समन्वय", "उद्दीपनों के प्रति प्रतिक्रिया", "पोषक तत्वों का परिवहन", "स्मृति और सीखना"],
                  "answer_en": "Transport of nutrients",
                  "answer_hi": "पोषक तत्वों का परिवहन",
                  "attempted": false
                },
                {
                  "num": 18,
                  "question_en": "The process of conversion of solid directly into vapor is called:",
                  "question_hi": "ठोस का सीधे वाष्प में परिवर्तन की प्रक्रिया को कहते हैं:",
                  "options_en": ["Evaporation", "Condensation", "Sublimation", "Melting"],
                  "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "पिघलना"],
                  "answer_en": "Sublimation",
                  "answer_hi": "उर्ध्वपातन",
                  "attempted": false
                },
                {
                  "num": 19,
                  "question_en": "Which of the following is NOT a function of the stomata?",
                  "question_hi": "निम्नलिखित में से कौन-सा रंध्रों का कार्य नहीं है?",
                  "options_en": ["Exchange of gases", "Transpiration", "Photosynthesis", "Regulation of water loss"],
                  "options_hi": ["गैसों का विनिमय", "वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "जल हानि का नियमन"],
                  "answer_en": "Photosynthesis",
                  "answer_hi": "प्रकाश संश्लेषण",
                  "attempted": false
                },
                {
                  "num": 20,
                  "question_en": "The phenomenon due to which a pencil appears bent when dipped in water is called:",
                  "question_hi": "वह घटना जिसके कारण पानी में डूबी हुई पेंसिल मुड़ी हुई दिखाई देती है, कहलाती है:",
                  "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
                  "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
                  "answer_en": "Refraction",
                  "answer_hi": "अपवर्तन",
                  "attempted": false
                },
                {
                  "num": 21,
                  "question_en": "Which of the following is NOT a function of the endocrine system?",
                  "question_hi": "निम्नलिखित में से कौन-सा अंतःस्रावी तंत्र का कार्य नहीं है?",
                  "options_en": ["Regulation of metabolism", "Control of growth", "Coordination of body activities", "Production of blood cells"],
                  "options_hi": ["चयापचय का नियमन", "वृद्धि का नियंत्रण", "शारीरिक गतिविधियों का समन्वय", "रक्त कोशिकाओं का उत्पादन"],
                  "answer_en": "Production of blood cells",
                  "answer_hi": "रक्त कोशिकाओं का उत्पादन",
                  "attempted": false
                },
                {
                  "num": 22,
                  "question_en": "The process of conversion of glucose into pyruvate is called:",
                  "question_hi": "ग्लूकोज को पाइरुवेट में बदलने की प्रक्रिया को कहते हैं:",
                  "options_en": ["Glycolysis", "Krebs cycle", "Electron transport chain", "Fermentation"],
                  "options_hi": ["ग्लाइकोलाइसिस", "क्रेब्स चक्र", "इलेक्ट्रॉन परिवहन श्रृंखला", "किण्वन"],
                  "answer_en": "Glycolysis",
                  "answer_hi": "ग्लाइकोलाइसिस",
                  "attempted": false
                },
                {
                  "num": 23,
                  "question_en": "Which of the following is NOT a function of the lymphatic system?",
                  "question_hi": "निम्नलिखित में से कौन-सा लसीका तंत्र का कार्य नहीं है?",
                  "options_en": ["Transport of fats", "Immune response", "Removal of waste", "Production of hormones"],
                  "options_hi": ["वसा का परिवहन", "प्रतिरक्षा प्रतिक्रिया", "अपशिष्ट पदार्थों का निष्कासन", "हार्मोन का उत्पादन"],
                  "answer_en": "Production of hormones",
                  "answer_hi": "हार्मोन का उत्पादन",
                  "attempted": false
                },
                {
                  "num": 24,
                  "question_en": "The phenomenon due to which stars twinkle is called:",
                  "question_hi": "वह घटना जिसके कारण तारे टिमटिमाते हैं, कहलाती है:",
                  "options_en": ["Reflection", "Refraction", "Atmospheric refraction", "Scattering"],
                  "options_hi": ["परावर्तन", "अपवर्तन", "वायुमंडलीय अपवर्तन", "प्रकीर्णन"],
                  "answer_en": "Atmospheric refraction",
                  "answer_hi": "वायुमंडलीय अपवर्तन",
                  "attempted": false
                },
                {
                  "num": 25,
                  "question_en": "Which of the following is NOT a function of the respiratory system?",
                  "question_hi": "निम्नलिखित में से कौन-सा श्वसन तंत्र का कार्य नहीं है?",
                  "options_en": ["Exchange of gases", "Production of sound", "Regulation of pH", "Transport of nutrients"],
                  "options_hi": ["गैसों का विनिमय", "ध्वनि उत्पादन", "pH का नियमन", "पोषक तत्वों का परिवहन"],
                  "answer_en": "Transport of nutrients",
                  "answer_hi": "पोषक तत्वों का परिवहन",
                  "attempted": false
                },
                {
                  "num": 26,
                  "question_en": "The process of conversion of light energy into chemical energy is called:",
                  "question_hi": "प्रकाश ऊर्जा को रासायनिक ऊर्जा में बदलने की प्रक्रिया को कहते हैं:",
                  "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
                  "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "किण्वन"],
                  "answer_en": "Photosynthesis",
                  "answer_hi": "प्रकाश संश्लेषण",
                  "attempted": false
                },
                {
                  "num": 27,
                  "question_en": "Which of the following is NOT a function of the digestive system?",
                  "question_hi": "निम्नलिखित में से कौन-सा पाचन तंत्र का कार्य नहीं है?",
                  "options_en": ["Ingestion", "Digestion", "Absorption", "Excretion"],
                  "options_hi": ["अंतर्ग्रहण", "पाचन", "अवशोषण", "उत्सर्जन"],
                  "answer_en": "Excretion",
                  "answer_hi": "उत्सर्जन",
                  "attempted": false
                },
                {
                  "num": 28,
                  "question_en": "The phenomenon due to which a rainbow is formed is called:",
                  "question_hi": "वह घटना जिसके कारण इंद्रधनुष बनता है, कहलाती है:",
                  "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
                  "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
                  "answer_en": "Dispersion",
                  "answer_hi": "विक्षेपण",
                  "attempted": false
                },
                {
                  "num": 29,
                  "question_en": "Which of the following is NOT a function of the circulatory system?",
                  "question_hi": "निम्नलिखित में से कौन-सा परिसंचरण तंत्र का कार्य नहीं है?",
                  "options_en": ["Transport of oxygen", "Transport of nutrients", "Removal of waste", "Production of enzymes"],
                  "options_hi": ["ऑक्सीजन का परिवहन", "पोषक तत्वों का परिवहन", "अपशिष्ट पदार्थों का निष्कासन", "एंजाइमों का उत्पादन"],
                  "answer_en": "Production of enzymes",
                  "answer_hi": "एंजाइमों का उत्पादन",
                  "attempted": false
                },
                {
                  "num": 30,
                  "question_en": "The process of conversion of nitrogen gas into ammonia is called:",
                  "question_hi": "नाइट्रोजन गैस को अमोनिया में बदलने की प्रक्रिया को कहते हैं:",
                  "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
                  "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
                  "answer_en": "Nitrogen fixation",
                  "answer_hi": "नाइट्रोजन स्थिरीकरण",
                  "attempted": false
                },
                {
                  "num": 31,
                  "question_en": "Which of the following is NOT a function of the muscular system?",
                  "question_hi": "निम्नलिखित में से कौन-सा पेशी तंत्र का कार्य नहीं है?",
                  "options_en": ["Movement", "Posture maintenance", "Heat production", "Production of hormones"],
                  "options_hi": ["गति", "मुद्रा बनाए रखना", "ऊष्मा उत्पादन", "हार्मोन का उत्पादन"],
                  "answer_en": "Production of hormones",
                  "answer_hi": "हार्मोन का उत्पादन",
                  "attempted": false
                },
                {
                  "num": 32,
                  "question_en": "The phenomenon due to which light splits into its constituent colors is called:",
                  "question_hi": "वह घटना जिसके कारण प्रकाश अपने घटक रंगों में विभक्त हो जाता है, कहलाती है:",
                  "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
                  "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
                  "answer_en": "Dispersion",
                  "answer_hi": "विक्षेपण",
                  "attempted": false
                },
                {
                  "num": 33,
                  "question_en": "Which of the following is NOT a function of the reproductive system?",
                  "question_hi": "निम्नलिखित में से कौन-सा प्रजनन तंत्र का कार्य नहीं है?",
                  "options_en": ["Production of gametes", "Fertilization", "Development of embryo", "Transport of oxygen"],
                  "options_hi": ["युग्मकों का उत्पादन", "निषेचन", "भ्रूण का विकास", "ऑक्सीजन का परिवहन"],
                  "answer_en": "Transport of oxygen",
                  "answer_hi": "ऑक्सीजन का परिवहन",
                  "attempted": false
                },
                {
                  "num": 34,
                  "question_en": "The process of conversion of atmospheric nitrogen into nitrogen compounds is called:",
                  "question_hi": "वायुमंडलीय नाइट्रोजन को नाइट्रोजन यौगिकों में बदलने की प्रक्रिया को कहते हैं:",
                  "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
                  "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
                  "answer_en": "Nitrogen fixation",
                  "answer_hi": "नाइट्रोजन स्थिरीकरण",
                  "attempted": false
                },
                {
                  "num": 35,
                  "question_en": "Which of the following is NOT a function of the integumentary system?",
                  "question_hi": "निम्नलिखित में से कौन-सा आवरणी तंत्र का कार्य नहीं है?",
                  "options_en": ["Protection", "Temperature regulation", "Sensation", "Production of blood cells"],
                  "options_hi": ["सुरक्षा", "तापमान नियमन", "संवेदना", "रक्त कोशिकाओं का उत्पादन"],
                  "answer_en": "Production of blood cells",
                  "answer_hi": "रक्त कोशिकाओं का उत्पादन",
                  "attempted": false
                },
                {
                  "num": 36,
                  "question_en": "The phenomenon due to which light changes its path when it passes from one medium to another is called:",
                  "question_hi": "वह घटना जिसके कारण प्रकाश एक माध्यम से दूसरे माध्यम में जाने पर अपना मार्ग बदल लेता है, कहलाती है:",
                  "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
                  "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
                  "answer_en": "Refraction",
                  "answer_hi": "अपवर्तन",
                  "attempted": false
                },
                {
                  "num": 37,
                  "question_en": "Which of the following is NOT a function of the urinary system?",
                  "question_hi": "निम्नलिखित में से कौन-सा मूत्र तंत्र का कार्य नहीं है?",
                  "options_en": ["Removal of waste", "Regulation of blood pressure", "Regulation of pH", "Production of enzymes"],
                  "options_hi": ["अपशिष्ट पदार्थों का निष्कासन", "रक्तचाप का नियमन", "pH का नियमन", "एंजाइमों का उत्पादन"],
                  "answer_en": "Production of enzymes",
                  "answer_hi": "एंजाइमों का उत्पादन",
                  "attempted": false
                },
                {
                  "num": 38,
                  "question_en": "The process of conversion of nitrates into nitrogen gas is called:",
                  "question_hi": "नाइट्रेट को नाइट्रोजन गैस में बदलने की प्रक्रिया को कहते हैं:",
                  "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
                  "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
                  "answer_en": "Denitrification",
                  "answer_hi": "विनाइट्रीकरण",
                  "attempted": false
                },
                {
                  "num": 39,
                  "question_en": "Which of the following is NOT a function of the immune system?",
                  "question_hi": "निम्नलिखित में से कौन-सा प्रतिरक्षा तंत्र का कार्य नहीं है?",
                  "options_en": ["Defense against pathogens", "Removal of dead cells", "Production of antibodies", "Transport of oxygen"],
                  "options_hi": ["रोगजनकों के विरुद्ध सुरक्षा", "मृत कोशिकाओं का निष्कासन", "प्रतिपिंडों का उत्पादन", "ऑक्सीजन का परिवहन"],
                  "answer_en": "Transport of oxygen",
                  "answer_hi": "ऑक्सीजन का परिवहन",
                  "attempted": false
                },
                {
                  "num": 40,
                  "question_en": "The phenomenon due to which light returns back in the same medium after striking a surface is called:",
                  "question_hi": "वह घटना जिसके कारण प्रकाश किसी सतह से टकराने के बाद उसी माध्यम में वापस लौट आता है, कहलाती है:",
                  "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
                  "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
                  "answer_en": "Reflection",
                  "answer_hi": "परावर्तन",
                  "attempted": false
                },
                {
                  "num": 41,
                  "question_en": "Which of the following is NOT a function of the skeletal muscles?",
                  "question_hi": "निम्नलिखित में से कौन-सा कंकाल पेशियों का कार्य नहीं है?",
                  "options_en": ["Movement", "Posture maintenance", "Heat production", "Production of hormones"],
                  "options_hi": ["गति", "मुद्रा बनाए रखना", "ऊष्मा उत्पादन", "हार्मोन का उत्पादन"],
                  "answer_en": "Production of hormones",
                  "answer_hi": "हार्मोन का उत्पादन",
                  "attempted": false
                },
                {
                  "num": 42,
                  "question_en": "The process of conversion of light energy into electrical signals in the eye is called:",
                  "question_hi": "नेत्र में प्रकाश ऊर्जा को विद्युत संकेतों में बदलने की प्रक्रिया को कहते हैं:",
                  "options_en": ["Refraction", "Accommodation", "Phototransduction", "Adaptation"],
                  "options_hi": ["अपवर्तन", "समंजन", "प्रकाश-परिवर्तन", "अनुकूलन"],
                  "answer_en": "Phototransduction",
                  "answer_hi": "प्रकाश-परिवर्तन",
                  "attempted": false
                },
                {
                  "num": 43,
                  "question_en": "Which of the following is NOT a function of the smooth muscles?",
                  "question_hi": "निम्नलिखित में से कौन-सा अरेखित पेशियों का कार्य नहीं है?",
                  "options_en": ["Movement of food in digestive tract", "Constriction of blood vessels", "Beating of heart", "Contraction of urinary bladder"],
                  "options_hi": ["पाचन तंत्र में भोजन की गति", "रक्त वाहिकाओं का संकुचन", "हृदय की धड़कन", "मूत्राशय का संकुचन"],
                  "answer_en": "Beating of heart",
                  "answer_hi": "हृदय की धड़कन",
                  "attempted": false
                },
                {
                  "num": 44,
                  "question_en": "The phenomenon due to which the sky appears blue is called:",
                  "question_hi": "वह घटना जिसके कारण आकाश नीला दिखाई देता है, कहलाती है:",
                  "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
                  "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
                  "answer_en": "Scattering",
                  "answer_hi": "प्रकीर्णन",
                  "attempted": false
                },
                {
                  "num": 45,
                  "question_en": "Which of the following is NOT a function of the cardiac muscles?",
                  "question_hi": "निम्नलिखित में से कौन-सा हृदय पेशियों का कार्य नहीं है?",
                  "options_en": ["Pumping of blood", "Regulation of heart rate", "Production of hormones", "Maintenance of blood circulation"],
                  "options_hi": ["रक्त का पंप करना", "हृदय गति का नियमन", "हार्मोन का उत्पादन", "रक्त परिसंचरण का नियमन"],
                  "answer_en": "Production of hormones",
                  "answer_hi": "हार्मोन का उत्पादन",
                  "attempted": false
                },
                {
                  "num": 46,
                  "question_en": "The process of adjustment of the eye to see objects at different distances is called:",
                  "question_hi": "नेत्र द्वारा विभिन्न दूरियों पर स्थित वस्तुओं को देखने के लिए किए गए समायोजन की प्रक्रिया को कहते हैं:",
                  "options_en": ["Refraction", "Accommodation", "Phototransduction", "Adaptation"],
                  "options_hi": ["अपवर्तन", "समंजन", "प्रकाश-परिवर्तन", "अनुकूलन"],
                  "answer_en": "Accommodation",
                  "answer_hi": "समंजन",
                  "attempted": false
                },
                {
                  "num": 47,
                  "question_en": "Which of the following is NOT a function of the nervous tissue?",
                  "question_hi": "निम्नलिखित में से कौन-सा तंत्रिका ऊतक का कार्य नहीं है?",
                  "options_en": ["Transmission of impulses", "Processing of information", "Response to stimuli", "Production of hormones"],
                  "options_hi": ["आवेगों का संचरण", "सूचना का प्रसंस्करण", "उद्दीपनों के प्रति प्रतिक्रिया", "हार्मोन का उत्पादन"],
                  "answer_en": "Production of hormones",
                  "answer_hi": "हार्मोन का उत्पादन",
                  "attempted": false
                },
                {
                  "num": 48,
                  "question_en": "The phenomenon due to which light bends around obstacles is called:",
                  "question_hi": "वह घटना जिसके कारण प्रकाश बाधाओं के चारों ओर मुड़ जाता है, कहलाती है:",
                  "options_en": ["Reflection", "Refraction", "Diffraction", "Scattering"],
                  "options_hi": ["परावर्तन", "अपवर्तन", "विवर्तन", "प्रकीर्णन"],
                  "answer_en": "Diffraction",
                  "answer_hi": "विवर्तन",
                  "attempted": false
                },
                {
                  "num": 49,
                  "question_en": "Which of the following is NOT a function of the epithelial tissue?",
                  "question_hi": "निम्नलिखित में से कौन-सा उपकला ऊतक का कार्य नहीं है?",
                  "options_en": ["Protection", "Secretion", "Absorption", "Contraction"],
                  "options_hi": ["सुरक्षा", "स्राव", "अवशोषण", "संकुचन"],
                  "answer_en": "Contraction",
                  "answer_hi": "संकुचन",
                  "attempted": false
                },
                {
                  "num": 50,
                  "question_en": "The process of conversion of sound waves into electrical signals in the ear is called:",
                  "question_hi": "कान में ध्वनि तरंगों को विद्युत संकेतों में बदलने की प्रक्रिया को कहते हैं:",
                  "options_en": ["Amplification", "Transduction", "Transmission", "Perception"],
                  "options_hi": ["प्रवर्धन", "परिवर्तन", "संचरण", "अनुभूति"],
                  "answer_en": "Transduction",
                  "answer_hi": "परिवर्तन",
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