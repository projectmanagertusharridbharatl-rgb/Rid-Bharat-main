
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
                  "question_en": "Which gas is evolved when metals react with acids?",
                  "question_hi": "अम्लों के साथ धातुओं की अभिक्रिया में कौन-सी गैस निकलती है?",
                  "options_en": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
                  "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
                  "answer_en": "Hydrogen",
                  "answer_hi": "हाइड्रोजन",
                  "attempted": false
                },
                {
                  "num": 3,
                  "question_en": "The chemical formula of baking soda is:",
                  "question_hi": "बेकिंग सोडा का रासायनिक सूत्र है:",
                  "options_en": ["NaCl", "NaHCO₃", "NaOH", "Na₂CO₃"],
                  "options_hi": ["NaCl", "NaHCO₃", "NaOH", "Na₂CO₃"],
                  "answer_en": "NaHCO₃",
                  "answer_hi": "NaHCO₃",
                  "attempted": false
                },
                {
                  "num": 4,
                  "question_en": "Which part of the plant is responsible for photosynthesis?",
                  "question_hi": "पौधे का कौन-सा भाग प्रकाश संश्लेषण के लिए उत्तरदायी है?",
                  "options_en": ["Root", "Stem", "Leaf", "Flower"],
                  "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
                  "answer_en": "Leaf",
                  "answer_hi": "पत्ती",
                  "attempted": false
                },
                {
                  "num": 5,
                  "question_en": "The SI unit of resistance is:",
                  "question_hi": "प्रतिरोध की SI इकाई है:",
                  "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
                  "options_hi": ["वोल्ट", "ऐम्पियर", "ओम", "वॉट"],
                  "answer_en": "Ohm",
                  "answer_hi": "ओम",
                  "attempted": false
                },
                {
                  "num": 6,
                  "question_en": "Which of the following is a greenhouse gas?",
                  "question_hi": "निम्नलिखित में से कौन-सी ग्रीनहाउस गैस है?",
                  "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                  "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
                  "answer_en": "Carbon dioxide",
                  "answer_hi": "कार्बन डाइऑक्साइड",
                  "attempted": false
                },
                {
                  "num": 7,
                  "question_en": "The image formed by a convex mirror is always:",
                  "question_hi": "उत्तल दर्पण द्वारा बना प्रतिबिंब हमेशा होता है:",
                  "options_en": ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
                  "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "आभासी और उल्टा"],
                  "answer_en": "Virtual and erect",
                  "answer_hi": "आभासी और सीधा",
                  "attempted": false
                },
                {
                  "num": 8,
                  "question_en": "Which gland secretes insulin?",
                  "question_hi": "इंसुलिन कौन-सी ग्रंथि स्रावित करती है?",
                  "options_en": ["Thyroid", "Pituitary", "Pancreas", "Adrenal"],
                  "options_hi": ["थायरॉयड", "पिट्यूटरी", "अग्न्याशय", "एड्रिनल"],
                  "answer_en": "Pancreas",
                  "answer_hi": "अग्न्याशय",
                  "attempted": false
                },
                {
                  "num": 9,
                  "question_en": "The process of depositing a layer of zinc on iron is called:",
                  "question_hi": "लोहे पर जिंक की परत जमाने की प्रक्रिया को कहते हैं:",
                  "options_en": ["Galvanization", "Alloying", "Roasting", "Reduction"],
                  "options_hi": ["गैल्वनीकरण", "मिश्रधातु बनाना", "भर्जन", "अपचयन"],
                  "answer_en": "Galvanization",
                  "answer_hi": "गैल्वनीकरण",
                  "attempted": false
                },
                {
                  "num": 10,
                  "question_en": "Which of the following is a non-metal that is liquid at room temperature?",
                  "question_hi": "निम्न में से कौन-सा अधातु कमरे के तापमान पर द्रव है?",
                  "options_en": ["Sodium", "Mercury", "Bromine", "Iron"],
                  "options_hi": ["सोडियम", "पारा", "ब्रोमीन", "लोहा"],
                  "answer_en": "Bromine",
                  "answer_hi": "ब्रोमीन",
                  "attempted": false
                },
                {
                  "num": 11,
                  "question_en": "What is the chemical formula of methane?",
                  "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
                  "options_en": ["CH₄", "C₂H₆", "C₃H₈", "CO₂"],
                  "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "CO₂"],
                  "answer_en": "CH₄",
                  "answer_hi": "CH₄",
                  "attempted": false
                },
                {
                  "num": 12,
                  "question_en": "Which of the following is NOT a part of the human brain?",
                  "question_hi": "निम्नलिखित में से कौन मानव मस्तिष्क का भाग नहीं है?",
                  "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Alveoli"],
                  "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "एल्वियोली"],
                  "answer_en": "Alveoli",
                  "answer_hi": "एल्वियोली",
                  "attempted": false
                },
                {
                  "num": 13,
                  "question_en": "What is the pH value of a neutral solution?",
                  "question_hi": "उदासीन विलयन का pH मान क्या होता है?",
                  "options_en": ["0", "7", "14", "10"],
                  "options_hi": ["0", "7", "14", "10"],
                  "answer_en": "7",
                  "answer_hi": "7",
                  "attempted": false
                },
                {
                  "num": 14,
                  "question_en": "Which of the following is a good conductor of electricity?",
                  "question_hi": "निम्न में से कौन विद्युत का सुचालक है?",
                  "options_en": ["Rubber", "Plastic", "Copper", "Wood"],
                  "options_hi": ["रबर", "प्लास्टिक", "तांबा", "लकड़ी"],
                  "answer_en": "Copper",
                  "answer_hi": "तांबा",
                  "attempted": false
                },
                {
                  "num": 15,
                  "question_en": "What is the main component of biogas?",
                  "question_hi": "बायोगैस का मुख्य घटक क्या है?",
                  "options_en": ["Methane", "Ethane", "Propane", "Butane"],
                  "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
                  "answer_en": "Methane",
                  "answer_hi": "मीथेन",
                  "attempted": false
                },
                {
                  "num": 16,
                  "question_en": "Which of the following is a renewable source of energy?",
                  "question_hi": "निम्न में से कौन-सा ऊर्जा का नवीकरणीय स्रोत है?",
                  "options_en": ["Coal", "Petroleum", "Solar energy", "Natural gas"],
                  "options_hi": ["कोयला", "पेट्रोलियम", "सौर ऊर्जा", "प्राकृतिक गैस"],
                  "answer_en": "Solar energy",
                  "answer_hi": "सौर ऊर्जा",
                  "attempted": false
                },
                {
                  "num": 17,
                  "question_en": "Which lens is used to correct myopia?",
                  "question_hi": "मायोपिया को ठीक करने के लिए किस लेंस का उपयोग किया जाता है?",
                  "options_en": ["Convex lens", "Concave lens", "Bifocal lens", "Cylindrical lens"],
                  "options_hi": ["उत्तल लेंस", "अवतल लेंस", "द्विफोकसी लेंस", "बेलनाकार लेंस"],
                  "answer_en": "Concave lens",
                  "answer_hi": "अवतल लेंस",
                  "attempted": false
                },
                {
                  "num": 18,
                  "question_en": "What is the process of conversion of vapor into liquid called?",
                  "question_hi": "वाष्प को द्रव में बदलने की प्रक्रिया को क्या कहते हैं?",
                  "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
                  "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "जमना"],
                  "answer_en": "Condensation",
                  "answer_hi": "संघनन",
                  "attempted": false
                },
                {
                  "num": 19,
                  "question_en": "Which of the following is NOT a noble gas?",
                  "question_hi": "निम्न में से कौन-सी एक अक्रिय गैस नहीं है?",
                  "options_en": ["Helium", "Neon", "Chlorine", "Argon"],
                  "options_hi": ["हीलियम", "नियॉन", "क्लोरीन", "आर्गन"],
                  "answer_en": "Chlorine",
                  "answer_hi": "क्लोरीन",
                  "attempted": false
                },
                {
                  "num": 20,
                  "question_en": "What is the chemical name of common salt?",
                  "question_hi": "साधारण नमक का रासायनिक नाम क्या है?",
                  "options_en": ["Sodium chloride", "Sodium carbonate", "Sodium hydroxide", "Sodium bicarbonate"],
                  "options_hi": ["सोडियम क्लोराइड", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम बाइकार्बोनेट"],
                  "answer_en": "Sodium chloride",
                  "answer_hi": "सोडियम क्लोराइड",
                  "attempted": false
                },
                {
                  "num": 21,
                  "question_en": "Which blood cells are responsible for fighting infections?",
                  "question_hi": "कौन-सी रक्त कोशिकाएँ संक्रमण से लड़ने के लिए जिम्मेदार हैं?",
                  "options_en": ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
                  "options_hi": ["लाल रक्त कोशिकाएँ", "श्वेत रक्त कोशिकाएँ", "प्लेटलेट्स", "प्लाज्मा"],
                  "answer_en": "White blood cells",
                  "answer_hi": "श्वेत रक्त कोशिकाएँ",
                  "attempted": false
                },
                {
                  "num": 22,
                  "question_en": "What is the SI unit of force?",
                  "question_hi": "बल की SI इकाई क्या है?",
                  "options_en": ["Joule", "Newton", "Watt", "Pascal"],
                  "options_hi": ["जूल", "न्यूटन", "वॉट", "पास्कल"],
                  "answer_en": "Newton",
                  "answer_hi": "न्यूटन",
                  "attempted": false
                },
                {
                  "num": 23,
                  "question_en": "Which of the following is an example of a decomposition reaction?",
                  "question_hi": "निम्न में से कौन-सा अपघटन अभिक्रिया का उदाहरण है?",
                  "options_en": ["2H₂ + O₂ → 2H₂O", "CaO + H₂O → Ca(OH)₂", "2HgO → 2Hg + O₂", "Zn + H₂SO₄ → ZnSO₄ + H₂"],
                  "options_hi": ["2H₂ + O₂ → 2H₂O", "CaO + H₂O → Ca(OH)₂", "2HgO → 2Hg + O₂", "Zn + H₂SO₄ → ZnSO₄ + H₂"],
                  "answer_en": "2HgO → 2Hg + O₂",
                  "answer_hi": "2HgO → 2Hg + O₂",
                  "attempted": false
                },
                {
                  "num": 24,
                  "question_en": "Which part of the flower develops into a fruit?",
                  "question_hi": "फूल का कौन-सा भाग फल में विकसित होता है?",
                  "options_en": ["Petal", "Sepal", "Ovary", "Stamen"],
                  "options_hi": ["पंखुड़ी", "बाह्यदल", "अंडाशय", "पुंकेसर"],
                  "answer_en": "Ovary",
                  "answer_hi": "अंडाशय",
                  "attempted": false
                },
                {
                  "num": 25,
                  "question_en": "What is the nature of the image formed on the retina of the human eye?",
                  "question_hi": "मानव आँख के रेटिना पर बनने वाले प्रतिबिंब की प्रकृति क्या है?",
                  "options_en": ["Virtual and erect", "Real and inverted", "Virtual and inverted", "Real and erect"],
                  "options_hi": ["आभासी और सीधा", "वास्तविक और उल्टा", "आभासी और उल्टा", "वास्तविक और सीधा"],
                  "answer_en": "Real and inverted",
                  "answer_hi": "वास्तविक और उल्टा",
                  "attempted": false
                },
                {
                  "num": 26,
                  "question_en": "Which of the following is NOT a property of acids?",
                  "question_hi": "निम्न में से कौन-सा अम्लों का गुण नहीं है?",
                  "options_en": ["Sour taste", "Turn blue litmus red", "Release H⁺ ions", "Feel soapy"],
                  "options_hi": ["खट्टा स्वाद", "नीले लिटमस को लाल करना", "H⁺ आयन मुक्त करना", "साबुन जैसा महसूस होना"],
                  "answer_en": "Feel soapy",
                  "answer_hi": "साबुन जैसा महसूस होना",
                  "attempted": false
                },
                {
                  "num": 27,
                  "question_en": "What is the chemical formula of sulfuric acid?",
                  "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
                  "options_en": ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"],
                  "options_hi": ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"],
                  "answer_en": "H₂SO₄",
                  "answer_hi": "H₂SO₄",
                  "attempted": false
                },
                {
                  "num": 28,
                  "question_en": "Which of the following is a non-biodegradable waste?",
                  "question_hi": "निम्न में से कौन-सा एक अजैव निम्नीकरणीय अपशिष्ट है?",
                  "options_en": ["Paper", "Vegetable peels", "Plastic bags", "Cotton cloth"],
                  "options_hi": ["कागज", "सब्जी के छिलके", "प्लास्टिक की थैलियाँ", "सूती कपड़ा"],
                  "answer_en": "Plastic bags",
                  "answer_hi": "प्लास्टिक की थैलियाँ",
                  "attempted": false
                },
                {
                  "num": 29,
                  "question_en": "What is the main function of white blood cells?",
                  "question_hi": "श्वेत रक्त कोशिकाओं का मुख्य कार्य क्या है?",
                  "options_en": ["Transport oxygen", "Fight infections", "Clot blood", "Produce hormones"],
                  "options_hi": ["ऑक्सीजन का परिवहन", "संक्रमण से लड़ना", "रक्त का थक्का बनाना", "हार्मोन उत्पन्न करना"],
                  "answer_en": "Fight infections",
                  "answer_hi": "संक्रमण से लड़ना",
                  "attempted": false
                },
                {
                  "num": 30,
                  "question_en": "Which of the following metals is stored in kerosene?",
                  "question_hi": "निम्न में से कौन-सी धातु को केरोसिन में संग्रहित किया जाता है?",
                  "options_en": ["Iron", "Copper", "Sodium", "Gold"],
                  "options_hi": ["लोहा", "तांबा", "सोडियम", "सोना"],
                  "answer_en": "Sodium",
                  "answer_hi": "सोडियम",
                  "attempted": false
                },
                {
                  "num": 31,
                  "question_en": "What is the chemical formula of water?",
                  "question_hi": "पानी का रासायनिक सूत्र क्या है?",
                  "options_en": ["H₂O", "CO₂", "NH₃", "CH₄"],
                  "options_hi": ["H₂O", "CO₂", "NH₃", "CH₄"],
                  "answer_en": "H₂O",
                  "answer_hi": "H₂O",
                  "attempted": false
                },
                {
                  "num": 32,
                  "question_en": "Which of the following is NOT a part of the female reproductive system?",
                  "question_hi": "निम्न में से कौन मादा प्रजनन तंत्र का भाग नहीं है?",
                  "options_en": ["Ovary", "Testis", "Uterus", "Fallopian tube"],
                  "options_hi": ["अंडाशय", "वृषण", "गर्भाशय", "अंडवाहिनी नली"],
                  "answer_en": "Testis",
                  "answer_hi": "वृषण",
                  "attempted": false
                },
                {
                  "num": 33,
                  "question_en": "What is the process of conversion of sugar into alcohol called?",
                  "question_hi": "चीनी को अल्कोहल में बदलने की प्रक्रिया को क्या कहते हैं?",
                  "options_en": ["Fermentation", "Distillation", "Evaporation", "Oxidation"],
                  "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "ऑक्सीकरण"],
                  "answer_en": "Fermentation",
                  "answer_hi": "किण्वन",
                  "attempted": false
                },
                {
                  "num": 34,
                  "question_en": "Which of the following is NOT a component of the phloem?",
                  "question_hi": "निम्न में से कौन फ्लोएम का घटक नहीं है?",
                  "options_en": ["Sieve tubes", "Companion cells", "Tracheids", "Phloem fibers"],
                  "options_hi": ["चालनी नलिकाएँ", "सहचर कोशिकाएँ", "ट्रैकीड्स", "फ्लोएम तंतु"],
                  "answer_en": "Tracheids",
                  "answer_hi": "ट्रैकीड्स",
                  "attempted": false
                },
                {
                  "num": 35,
                  "question_en": "What is the chemical formula of glucose?",
                  "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
                  "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
                  "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
                  "answer_en": "C₆H₁₂O₆",
                  "answer_hi": "C₆H₁₂O₆",
                  "attempted": false
                },
                {
                  "num": 36,
                  "question_en": "Which of the following is NOT a type of asexual reproduction?",
                  "question_hi": "निम्न में से कौन-सा अलैंगिक प्रजनन का प्रकार नहीं है?",
                  "options_en": ["Binary fission", "Budding", "Fertilization", "Spore formation"],
                  "options_hi": ["द्विखंडन", "कलिकोत्पादन", "निषेचन", "बीजाणु निर्माण"],
                  "answer_en": "Fertilization",
                  "answer_hi": "निषेचन",
                  "attempted": false
                },
                {
                  "num": 37,
                  "question_en": "What is the chemical formula of ammonia?",
                  "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
                  "options_en": ["NH₃", "NH₄", "NO₂", "N₂O"],
                  "options_hi": ["NH₃", "NH₄", "NO₂", "N₂O"],
                  "answer_en": "NH₃",
                  "answer_hi": "NH₃",
                  "attempted": false
                },
                {
                  "num": 38,
                  "question_en": "Which of the following is NOT a function of the liver?",
                  "question_hi": "निम्न में से कौन यकृत का कार्य नहीं है?",
                  "options_en": ["Production of bile", "Storage of glycogen", "Detoxification", "Production of insulin"],
                  "options_hi": ["पित्त का उत्पादन", "ग्लाइकोजन का भंडारण", "विषहरण", "इंसुलिन का उत्पादन"],
                  "answer_en": "Production of insulin",
                  "answer_hi": "इंसुलिन का उत्पादन",
                  "attempted": false
                },
                {
                  "num": 39,
                  "question_en": "What is the chemical formula of carbon dioxide?",
                  "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
                  "options_en": ["CO", "CO₂", "C₂O", "C₃O₂"],
                  "options_hi": ["CO", "CO₂", "C₂O", "C₃O₂"],
                  "answer_en": "CO₂",
                  "answer_hi": "CO₂",
                  "attempted": false
                },
                {
                  "num": 40,
                  "question_en": "Which of the following is NOT a greenhouse gas?",
                  "question_hi": "निम्न में से कौन-सी ग्रीनहाउस गैस नहीं है?",
                  "options_en": ["Carbon dioxide", "Methane", "Oxygen", "Nitrous oxide"],
                  "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "ऑक्सीजन", "नाइट्रस ऑक्साइड"],
                  "answer_en": "Oxygen",
                  "answer_hi": "ऑक्सीजन",
                  "attempted": false
                },
                {
                  "num": 41,
                  "question_en": "What is the chemical formula of hydrochloric acid?",
                  "question_hi": "हाइड्रोक्लोरिक अम्ल का रासायनिक सूत्र क्या है?",
                  "options_en": ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"],
                  "options_hi": ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"],
                  "answer_en": "HCl",
                  "answer_hi": "HCl",
                  "attempted": false
                },
                {
                  "num": 42,
                  "question_en": "Which of the following is NOT a type of blood vessel?",
                  "question_hi": "निम्न में से कौन-सा रक्त वाहिका का प्रकार नहीं है?",
                  "options_en": ["Artery", "Vein", "Capillary", "Nephron"],
                  "options_hi": ["धमनी", "शिरा", "केशिका", "नेफ्रॉन"],
                  "answer_en": "Nephron",
                  "answer_hi": "नेफ्रॉन",
                  "attempted": false
                },
                {
                  "num": 43,
                  "question_en": "What is the chemical formula of methane?",
                  "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
                  "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
                  "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
                  "answer_en": "CH₄",
                  "answer_hi": "CH₄",
                  "attempted": false
                },
                {
                  "num": 44,
                  "question_en": "Which of the following is NOT a part of the male reproductive system?",
                  "question_hi": "निम्न में से कौन नर प्रजनन तंत्र का भाग नहीं है?",
                  "options_en": ["Testis", "Ovary", "Vas deferens", "Prostate gland"],
                  "options_hi": ["वृषण", "अंडाशय", "वास डिफेरेंस", "प्रोस्टेट ग्रंथि"],
                  "answer_en": "Ovary",
                  "answer_hi": "अंडाशय",
                  "attempted": false
                },
                {
                  "num": 45,
                  "question_en": "What is the chemical formula of ethanol?",
                  "question_hi": "एथेनॉल का रासायनिक सूत्र क्या है?",
                  "options_en": ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"],
                  "options_hi": ["CH₃OH", "C₂H₅OH", "C₃H₇OH", "C₄H₉OH"],
                  "answer_en": "C₂H₅OH",
                  "answer_hi": "C₂H₅OH",
                  "attempted": false
                },
                {
                  "num": 46,
                  "question_en": "Which of the following is NOT a function of the kidney?",
                  "question_hi": "निम्न में से कौन वृक्क का कार्य नहीं है?",
                  "options_en": ["Filtration of blood", "Production of urine", "Regulation of blood pressure", "Production of bile"],
                  "options_hi": ["रक्त का निस्यंदन", "मूत्र का उत्पादन", "रक्तचाप का नियमन", "पित्त का उत्पादन"],
                  "answer_en": "Production of bile",
                  "answer_hi": "पित्त का उत्पादन",
                  "attempted": false
                },
                {
                  "num": 47,
                  "question_en": "What is the chemical formula of sulfur dioxide?",
                  "question_hi": "सल्फर डाइऑक्साइड का रासायनिक सूत्र क्या है?",
                  "options_en": ["SO", "SO₂", "SO₃", "S₂O"],
                  "options_hi": ["SO", "SO₂", "SO₃", "S₂O"],
                  "answer_en": "SO₂",
                  "answer_hi": "SO₂",
                  "attempted": false
                },
                {
                  "num": 48,
                  "question_en": "Which of the following is NOT a type of neuron?",
                  "question_hi": "निम्न में से कौन-सा न्यूरॉन का प्रकार नहीं है?",
                  "options_en": ["Sensory neuron", "Motor neuron", "Interneuron", "Erythrocyte"],
                  "options_hi": ["संवेदी न्यूरॉन", "चालक न्यूरॉन", "अंतर्ग्रथनी न्यूरॉन", "एरिथ्रोसाइट"],
                  "answer_en": "Erythrocyte",
                  "answer_hi": "एरिथ्रोसाइट",
                  "attempted": false
                },
                {
                  "num": 49,
                  "question_en": "What is the chemical formula of nitrogen gas?",
                  "question_hi": "नाइट्रोजन गैस का रासायनिक सूत्र क्या है?",
                  "options_en": ["N", "N₂", "NO", "NO₂"],
                  "options_hi": ["N", "N₂", "NO", "NO₂"],
                  "answer_en": "N₂",
                  "answer_hi": "N₂",
                  "attempted": false
                },
                {
                  "num": 50,
                  "question_en": "Which of the following is NOT a function of the skin?",
                  "question_hi": "निम्न में से कौन त्वचा का कार्य नहीं है?",
                  "options_en": ["Protection", "Sensation", "Temperature regulation", "Production of insulin"],
                  "options_hi": ["सुरक्षा", "संवेदना", "तापमान नियमन", "इंसुलिन का उत्पादन"],
                  "answer_en": "Production of insulin",
                  "answer_hi": "इंसुलिन का उत्पादन",
                  "attempted": false
                }
              
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
