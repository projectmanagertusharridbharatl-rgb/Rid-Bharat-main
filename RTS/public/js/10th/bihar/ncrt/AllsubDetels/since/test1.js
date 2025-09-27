
const questions = [
    
    {
        "num": 1,
        "question_en": "What is the SI unit of electric current?",
        "question_hi": "विद्युत धारा का SI मात्रक क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which gas is produced during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the chemical formula of Baking Soda?",
        "question_hi": "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "NaHCO₃", "NaOH", "Na₂CO₃"],
        "options_hi": ["NaCl", "NaHCO₃", "NaOH", "Na₂CO₃"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which mirror is used in headlights of vehicles?",
        "question_hi": "वाहनों के हेडलाइट्स में किस दर्पण का उपयोग होता है?",
        "options_en": ["Convex mirror", "Concave mirror", "Plane mirror", "Spherical mirror"],
        "options_hi": ["उत्तल दर्पण", "अवतल दर्पण", "समतल दर्पण", "गोलीय दर्पण"],
        "answer_en": "Concave mirror",
        "answer_hi": "अवतल दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the pH value of a neutral solution?",
        "question_hi": "उदासीन विलयन का pH मान क्या होता है?",
        "options_en": ["1", "7", "10", "14"],
        "options_hi": ["1", "7", "10", "14"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of the following is a greenhouse gas?",
        "question_hi": "निम्न में से कौन सी ग्रीनहाउस गैस है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the resistance of an ideal ammeter?",
        "question_hi": "एक आदर्श अमीटर का प्रतिरोध कितना होता है?",
        "options_en": ["Zero", "Infinite", "1 Ohm", "100 Ohms"],
        "options_hi": ["शून्य", "अनंत", "1 ओम", "100 ओम"],
        "answer_en": "Zero",
        "answer_hi": "शून्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which acid is present in vinegar?",
        "question_hi": "सिरका में कौन सा अम्ल होता है?",
        "options_en": ["Sulfuric acid", "Hydrochloric acid", "Acetic acid", "Citric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल", "सिट्रिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The refractive index of water is:",
        "question_hi": "पानी का अपवर्तनांक कितना होता है?",
        "options_en": ["1.33", "2.42", "1.00", "1.50"],
        "options_hi": ["1.33", "2.42", "1.00", "1.50"],
        "answer_en": "1.33",
        "answer_hi": "1.33",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Iron", "Mercury", "Gold", "Copper"],
        "options_hi": ["लोहा", "पारा", "सोना", "तांबा"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which of the following is NOT a renewable source of energy?",
        "question_hi": "निम्न में से कौन नवीकरणीय ऊर्जा स्रोत नहीं है?",
        "options_en": ["Solar energy", "Wind energy", "Coal", "Biogas"],
        "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "बायोगैस"],
        "answer_en": "Coal",
        "answer_hi": "कोयला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The chemical formula of Methane is:",
        "question_hi": "मीथेन का रासायनिक सूत्र है:",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "CO₂"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "CO₂"],
        "answer_en": "CH₄",
        "answer_hi": "CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which device converts chemical energy into electrical energy?",
        "question_hi": "कौन सा उपकरण रासायनिक ऊर्जा को विद्युत ऊर्जा में बदलता है?",
        "options_en": ["Generator", "Motor", "Battery", "Transformer"],
        "options_hi": ["जनरेटर", "मोटर", "बैटरी", "ट्रांसफॉर्मर"],
        "answer_en": "Battery",
        "answer_hi": "बैटरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The process of depositing a layer of zinc on iron is called:",
        "question_hi": "लोहे पर जिंक की परत जमाने की प्रक्रिया को कहते हैं:",
        "options_en": ["Galvanization", "Electroplating", "Alloying", "Reduction"],
        "options_hi": ["गैल्वेनीकरण", "विद्युत लेपन", "मिश्रधातु बनाना", "अपचयन"],
        "answer_en": "Galvanization",
        "answer_hi": "गैल्वेनीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which of the following is a good conductor of electricity?",
        "question_hi": "निम्न में से कौन विद्युत का सुचालक है?",
        "options_en": ["Rubber", "Copper", "Wood", "Plastic"],
        "options_hi": ["रबर", "तांबा", "लकड़ी", "प्लास्टिक"],
        "answer_en": "Copper",
        "answer_hi": "तांबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The color of phenolphthalein in acidic medium is:",
        "question_hi": "अम्लीय माध्यम में फिनॉल्फथेलिन का रंग होता है:",
        "options_en": ["Pink", "Colorless", "Blue", "Green"],
        "options_hi": ["गुलाबी", "रंगहीन", "नीला", "हरा"],
        "answer_en": "Colorless",
        "answer_hi": "रंगहीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The SI unit of resistance is:",
        "question_hi": "प्रतिरोध का SI मात्रक है:",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which gas is used in the process of photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण की प्रक्रिया में कौन सी गैस प्रयुक्त होती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The chemical formula of Sulfuric acid is:",
        "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"],
        "options_hi": ["HCl", "HNO₃", "H₂SO₄", "H₃PO₄"],
        "answer_en": "H₂SO₄",
        "answer_hi": "H₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The image formed by a plane mirror is:",
        "question_hi": "समतल दर्पण द्वारा बना प्रतिबिंब होता है:",
        "options_en": ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
        "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "आभासी और उल्टा"],
        "answer_en": "Virtual and erect",
        "answer_hi": "आभासी और सीधा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which of the following is a non-metal that is liquid at room temperature?",
        "question_hi": "निम्न में से कौन सा अधातु कमरे के तापमान पर तरल होता है?",
        "options_en": ["Bromine", "Chlorine", "Iodine", "Fluorine"],
        "options_hi": ["ब्रोमीन", "क्लोरीन", "आयोडीन", "फ्लोरीन"],
        "answer_en": "Bromine",
        "answer_hi": "ब्रोमीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The focal length of a convex lens is 20 cm. Its power is:",
        "question_hi": "एक उत्तल लेंस की फोकस दूरी 20 cm है। इसकी क्षमता है:",
        "options_en": ["+5 D", "+0.5 D", "-5 D", "-0.5 D"],
        "options_hi": ["+5 D", "+0.5 D", "-5 D", "-0.5 D"],
        "answer_en": "+5 D",
        "answer_hi": "+5 D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which gas is produced when metals react with acids?",
        "question_hi": "धातुओं के अम्ल से अभिक्रिया करने पर कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The chemical formula of Plaster of Paris is:",
        "question_hi": "प्लास्टर ऑफ पेरिस का रासायनिक सूत्र है:",
        "options_en": ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaCO₃", "Ca(OH)₂"],
        "options_hi": ["CaSO₄·2H₂O", "CaSO₄·½H₂O", "CaCO₃", "Ca(OH)₂"],
        "answer_en": "CaSO₄·½H₂O",
        "answer_hi": "CaSO₄·½H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "In the human eye, the image is formed on:",
        "question_hi": "मानव नेत्र में प्रतिबिंब बनता है:",
        "options_en": ["Cornea", "Iris", "Retina", "Pupil"],
        "options_hi": ["कॉर्निया", "आइरिस", "रेटिना", "पुतली"],
        "answer_en": "Retina",
        "answer_hi": "रेटिना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which of the following is an example of a decomposition reaction?",
        "question_hi": "निम्न में से कौन सा अपघटन अभिक्रिया का उदाहरण है?",
        "options_en": ["2H₂ + O₂ → 2H₂O", "CaO + H₂O → Ca(OH)₂", "2HgO → 2Hg + O₂", "NaOH + HCl → NaCl + H₂O"],
        "options_hi": ["2H₂ + O₂ → 2H₂O", "CaO + H₂O → Ca(OH)₂", "2HgO → 2Hg + O₂", "NaOH + HCl → NaCl + H₂O"],
        "answer_en": "2HgO → 2Hg + O₂",
        "answer_hi": "2HgO → 2Hg + O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The resistance of a conductor depends on:",
        "question_hi": "किसी चालक का प्रतिरोध निर्भर करता है:",
        "options_en": ["Length", "Area of cross-section", "Material", "All of the above"],
        "options_hi": ["लंबाई", "अनुप्रस्थ काट का क्षेत्रफल", "पदार्थ", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which of the following is NOT a fossil fuel?",
        "question_hi": "निम्न में से कौन सा जीवाश्म ईंधन नहीं है?",
        "options_en": ["Coal", "Petroleum", "Natural gas", "Biogas"],
        "options_hi": ["कोयला", "पेट्रोलियम", "प्राकृतिक गैस", "बायोगैस"],
        "answer_en": "Biogas",
        "answer_hi": "बायोगैस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The chemical formula of Washing Soda is:",
        "question_hi": "धोने का सोडा का रासायनिक सूत्र है:",
        "options_en": ["NaHCO₃", "Na₂CO₃·10H₂O", "NaOH", "NaCl"],
        "options_hi": ["NaHCO₃", "Na₂CO₃·10H₂O", "NaOH", "NaCl"],
        "answer_en": "Na₂CO₃·10H₂O",
        "answer_hi": "Na₂CO₃·10H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The phenomenon of splitting of white light into its constituent colors is called:",
        "question_hi": "सफेद प्रकाश का उसके घटक रंगों में विभक्त होने की घटना कहलाती है:",
        "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
        "answer_en": "Dispersion",
        "answer_hi": "विक्षेपण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which part of the human eye controls the amount of light entering?",
        "question_hi": "मानव नेत्र का कौन-सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
        "options_en": ["Retina", "Cornea", "Iris", "Lens"],
        "options_hi": ["रेटिना", "कॉर्निया", "आइरिस", "लेंस"],
        "answer_en": "Iris",
        "answer_hi": "आइरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The chemical formula of Quick Lime is:",
        "question_hi": "बिना बुझा चूना (क्विक लाइम) का रासायनिक सूत्र है:",
        "options_en": ["CaCO₃", "Ca(OH)₂", "CaO", "CaSO₄"],
        "options_hi": ["CaCO₃", "Ca(OH)₂", "CaO", "CaSO₄"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which of the following is used in making explosives?",
        "question_hi": "निम्न में से किसका उपयोग विस्फोटक बनाने में होता है?",
        "options_en": ["Ethanol", "Ethene", "Ethanoic acid", "Nitroglycerin"],
        "options_hi": ["एथेनॉल", "एथीन", "एथेनोइक अम्ल", "नाइट्रोग्लिसरीन"],
        "answer_en": "Nitroglycerin",
        "answer_hi": "नाइट्रोग्लिसरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The SI unit of power is:",
        "question_hi": "शक्ति का SI मात्रक है:",
        "options_en": ["Joule", "Watt", "Volt", "Ampere"],
        "options_hi": ["जूल", "वाट", "वोल्ट", "एम्पियर"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which of the following is a saturated hydrocarbon?",
        "question_hi": "निम्न में से कौन संतृप्त हाइड्रोकार्बन है?",
        "options_en": ["Ethene", "Ethyne", "Methane", "Benzene"],
        "options_hi": ["एथीन", "एथाइन", "मीथेन", "बेंजीन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The phenomenon of electromagnetic induction was discovered by:",
        "question_hi": "विद्युत चुम्बकीय प्रेरण की घटना की खोज किसने की थी?",
        "options_en": ["Ohm", "Faraday", "Newton", "Einstein"],
        "options_hi": ["ओम", "फैराडे", "न्यूटन", "आइंस्टीन"],
        "answer_en": "Faraday",
        "answer_hi": "फैराडे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which acid is present in ant sting?",
        "question_hi": "चींटी के डंक में कौन-सा अम्ल होता है?",
        "options_en": ["Acetic acid", "Formic acid", "Citric acid", "Lactic acid"],
        "options_hi": ["एसिटिक अम्ल", "फॉर्मिक अम्ल", "सिट्रिक अम्ल", "लैक्टिक अम्ल"],
        "answer_en": "Formic acid",
        "answer_hi": "फॉर्मिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The color of copper sulfate solution is:",
        "question_hi": "कॉपर सल्फेट विलयन का रंग होता है:",
        "options_en": ["Red", "Blue", "Green", "Colorless"],
        "options_hi": ["लाल", "नीला", "हरा", "रंगहीन"],
        "answer_en": "Blue",
        "answer_hi": "नीला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which mirror always forms a virtual image?",
        "question_hi": "कौन-सा दर्पण सदैव आभासी प्रतिबिंब बनाता है?",
        "options_en": ["Concave mirror", "Convex mirror", "Plane mirror", "Both (b) and (c)"],
        "options_hi": ["अवतल दर्पण", "उत्तल दर्पण", "समतल दर्पण", "(b) और (c) दोनों"],
        "answer_en": "Both (b) and (c)",
        "answer_hi": "(b) और (c) दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the SI unit of electric current?",
        "question_hi": "विद्युत धारा की SI इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Which instrument is used to measure electric current?",
        "question_hi": "विद्युत धारा मापने के लिए कौन-सा उपकरण प्रयोग किया जाता है?",
        "options_en": ["Voltmeter", "Galvanometer", "Ammeter", "Ohmmeter"],
        "options_hi": ["वोल्टमीटर", "गैल्वेनोमीटर", "एमीटर", "ओममीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "एमीटर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which part of the cell controls all its activities?",
        "question_hi": "कोशिका का कौन-सा भाग इसकी सभी गतिविधियों को नियंत्रित करता है?",
        "options_en": ["Nucleus", "Cytoplasm", "Mitochondria", "Cell membrane"],
        "options_hi": ["नाभिक", "कोशिकाद्रव्य", "माइटोकॉन्ड्रिया", "कोशिका झिल्ली"],
        "answer_en": "Nucleus",
        "answer_hi": "नाभिक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "What is the resistance if voltage is 12V and current is 3A?",
        "question_hi": "यदि वोल्टेज 12V और धारा 3A हो, तो प्रतिरोध क्या होगा?",
        "options_en": ["4 ohm", "36 ohm", "15 ohm", "0.25 ohm"],
        "options_hi": ["4 ओम", "36 ओम", "15 ओम", "0.25 ओम"],
        "answer_en": "4 ohm",
        "answer_hi": "4 ओम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Which of the following is a connective tissue?",
        "question_hi": "निम्नलिखित में से कौन-सा संयोजी ऊतक है?",
        "options_en": ["Blood", "Muscle", "Skin", "Nerve"],
        "options_hi": ["रक्त", "मांसपेशी", "त्वचा", "तंत्रिका"],
        "answer_en": "Blood",
        "answer_hi": "रक्त",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which chemical is used to make baking soda?",
        "question_hi": "बेकिंग सोडा बनाने में कौन-सा रासायनिक यौगिक प्रयुक्त होता है?",
        "options_en": ["NaOH", "Na₂CO₃", "NaHCO₃", "CaCO₃"],
        "options_hi": ["NaOH", "Na₂CO₃", "NaHCO₃", "CaCO₃"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Which is the powerhouse of the cell?",
        "question_hi": "कोशिका का शक्ति गृह किसे कहा जाता है?",
        "options_en": ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"],
        "options_hi": ["नाभिक", "राइबोसोम", "माइटोकॉन्ड्रिया", "गॉल्जी बॉडी"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which of these is a chemical change?",
        "question_hi": "निम्न में से कौन-सा एक रासायनिक परिवर्तन है?",
        "options_en": ["Melting of ice", "Rusting of iron", "Breaking of glass", "Boiling of water"],
        "options_hi": ["बर्फ का पिघलना", "लौह का जंग लगना", "काँच का टूटना", "पानी का उबालना"],
        "answer_en": "Rusting of iron",
        "answer_hi": "लौह का जंग लगना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which gas is released during respiration?",
        "question_hi": "श्वसन के दौरान कौन-सी गैस उत्सर्जित होती है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Which of these is a neutralization reaction?",
        "question_hi": "निम्न में से कौन-सी उदासीनीकरण अभिक्रिया है?",
        "options_en": ["Acid + Base → Salt + Water", "Acid + Metal → Salt + H₂", "Acid + Carbonate → Salt + CO₂", "Base + Ammonium salt → NH₃"],
        "options_hi": ["अम्ल + क्षार → लवण + जल", "अम्ल + धातु → लवण + H₂", "अम्ल + कार्बोनेट → लवण + CO₂", "क्षार + अमोनियम लवण → NH₃"],
        "answer_en": "Acid + Base → Salt + Water",
        "answer_hi": "अम्ल + क्षार → लवण + जल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Which organ in human body filters blood?",
        "question_hi": "मानव शरीर में कौन-सा अंग रक्त को छानता है?",
        "options_en": ["Lungs", "Liver", "Heart", "Kidney"],
        "options_hi": ["फेफड़े", "यकृत", "हृदय", "वृक्क"],
        "answer_en": "Kidney",
        "answer_hi": "वृक्क",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "Which component of blood helps in clotting?",
        "question_hi": "रक्त का कौन-सा घटक थक्का बनाने में सहायक होता है?",
        "options_en": ["RBC", "WBC", "Plasma", "Platelets"],
        "options_hi": ["लाल रक्त कोशिकाएँ", "श्वेत रक्त कोशिकाएँ", "प्लाज्मा", "प्लेटलेट्स"],
        "answer_en": "Platelets",
        "answer_hi": "प्लेटलेट्स",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "Which is the universal solvent?",
        "question_hi": "सार्वभौमिक विलायक कौन-सा है?",
        "options_en": ["Alcohol", "Oil", "Water", "Acid"],
        "options_hi": ["अल्कोहल", "तेल", "पानी", "अम्ल"],
        "answer_en": "Water",
        "answer_hi": "पानी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "Which acid is present in lemon?",
        "question_hi": "नींबू में कौन-सा अम्ल पाया जाता है?",
        "options_en": ["Acetic acid", "Formic acid", "Citric acid", "Oxalic acid"],
        "options_hi": ["एसिटिक अम्ल", "फॉर्मिक अम्ल", "सिट्रिक अम्ल", "ऑक्सालिक अम्ल"],
        "answer_en": "Citric acid",
        "answer_hi": "सिट्रिक अम्ल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "Which part of plant is responsible for photosynthesis?",
        "question_hi": "पौधे का कौन-सा भाग प्रकाश संश्लेषण के लिए उत्तरदायी है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
        "answer_en": "Leaf",
        "answer_hi": "पत्ती",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "Which gas is essential for photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के लिए कौन-सी गैस आवश्यक है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "Which hormone is responsible for growth in humans?",
        "question_hi": "मानवों में वृद्धि के लिए कौन-सा हार्मोन उत्तरदायी होता है?",
        "options_en": ["Adrenaline", "Insulin", "Growth hormone", "Thyroxine"],
        "options_hi": ["एड्रेनालिन", "इंसुलिन", "वृद्धि हार्मोन", "थायरॉक्सिन"],
        "answer_en": "Growth hormone",
        "answer_hi": "वृद्धि हार्मोन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "Which of these is a unicellular organism?",
        "question_hi": "निम्न में से कौन-सा एककोशिकीय जीव है?",
        "options_en": ["Frog", "Bacteria", "Earthworm", "Fish"],
        "options_hi": ["मेंढक", "बैक्टीरिया", "केंचुआ", "मछली"],
        "answer_en": "Bacteria",
        "answer_hi": "बैक्टीरिया",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "What is the function of xylem in plants?",
        "question_hi": "पौधों में ज़ाइलेम का क्या कार्य होता है?",
        "options_en": ["Transport of food", "Transport of water", "Photosynthesis", "Support"],
        "options_hi": ["भोजन का परिवहन", "जल का परिवहन", "प्रकाश संश्लेषण", "सहारा देना"],
        "answer_en": "Transport of water",
        "answer_hi": "जल का परिवहन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "What is the full form of DNA?",
        "question_hi": "DNA का पूरा नाम क्या है?",
        "options_en": ["Deoxyribonucleic Acid", "Dicarboxylic Nucleic Acid", "Deoxy Nitric Acid", "None of these"],
        "options_hi": ["डिऑक्सीराइबोन्यूक्लिक एसिड", "डाइकार्बोक्सिलिक न्यूक्लिक एसिड", "डिऑक्सी नाइट्रिक एसिड", "इनमें से कोई नहीं"],
        "answer_en": "Deoxyribonucleic Acid",
        "answer_hi": "डिऑक्सीराइबोन्यूक्लिक एसिड",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "Which metal is the best conductor of electricity?",
        "question_hi": "कौन-सी धातु विद्युत की सबसे अच्छी चालक है?",
        "options_en": ["Copper", "Aluminium", "Silver", "Gold"],
        "options_hi": ["ताँबा", "एल्युमिनियम", "चाँदी", "सोना"],
        "answer_en": "Silver",
        "answer_hi": "चाँदी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "Which gland secretes insulin?",
        "question_hi": "इंसुलिन हार्मोन किस ग्रंथि से स्रावित होता है?",
        "options_en": ["Thyroid", "Pituitary", "Pancreas", "Adrenal"],
        "options_hi": ["थायरॉयड", "पिट्यूटरी", "अग्न्याशय", "एड्रिनल"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "Which acid is present in vinegar?",
        "question_hi": "सिरके में कौन-सा अम्ल पाया जाता है?",
        "options_en": ["Formic acid", "Oxalic acid", "Citric acid", "Acetic acid"],
        "options_hi": ["फॉर्मिक अम्ल", "ऑक्सालिक अम्ल", "सिट्रिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "Which law is used to find the resistance in a circuit?",
        "question_hi": "सर्किट में प्रतिरोध ज्ञात करने के लिए किस नियम का उपयोग किया जाता है?",
        "options_en": ["Ohm's Law", "Newton's Law", "Faraday's Law", "Kepler's Law"],
        "options_hi": ["ओम का नियम", "न्यूटन का नियम", "फैराडे का नियम", "केपलर का नियम"],
        "answer_en": "Ohm's Law",
        "answer_hi": "ओम का नियम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "Which vitamin is produced in human skin by sunlight?",
        "question_hi": "मानव त्वचा में सूर्य के प्रकाश से कौन-सा विटामिन बनता है?",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन B"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "Which of these is not a renewable source of energy?",
        "question_hi": "निम्न में से कौन अक्षय ऊर्जा स्रोत नहीं है?",
        "options_en": ["Solar energy", "Wind energy", "Coal", "Hydropower"],
        "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "जलविद्युत"],
        "answer_en": "Coal",
        "answer_hi": "कोयला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "Which of the following is a sexually transmitted disease?",
        "question_hi": "निम्नलिखित में से कौन-सा यौन संचरित रोग है?",
        "options_en": ["Diabetes", "AIDS", "Malaria", "Tuberculosis"],
        "options_hi": ["मधुमेह", "एड्स", "मलेरिया", "तपेदिक"],
        "answer_en": "AIDS",
        "answer_hi": "एड्स",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "Which gas turns lime water milky?",
        "question_hi": "कौन-सी गैस चुने के पानी को दूधिया बनाती है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "Which part of the heart receives oxygen-rich blood?",
        "question_hi": "हृदय का कौन-सा भाग ऑक्सीजन युक्त रक्त प्राप्त करता है?",
        "options_en": ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
        "options_hi": ["दायाँ अलिंद", "बायाँ अलिंद", "दायाँ निलय", "बायाँ निलय"],
        "answer_en": "Left atrium",
        "answer_hi": "बायाँ अलिंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "What is the function of stomata?",
        "question_hi": "रंध्रों का क्या कार्य है?",
        "options_en": ["Photosynthesis", "Transpiration", "Respiration", "All of these"],
        "options_hi": ["प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "श्वसन", "इनमें से सभी"],
        "answer_en": "All of these",
        "answer_hi": "इनमें से सभी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "Which device converts chemical energy into electrical energy?",
        "question_hi": "कौन-सा यंत्र रासायनिक ऊर्जा को विद्युत ऊर्जा में बदलता है?",
        "options_en": ["Motor", "Battery", "Generator", "Inverter"],
        "options_hi": ["मोटर", "बैटरी", "जनरेटर", "इन्वर्टर"],
        "answer_en": "Battery",
        "answer_hi": "बैटरी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "Which of the following is a reflex action?",
        "question_hi": "निम्नलिखित में से कौन-सा परावर्त क्रिया है?",
        "options_en": ["Blinking eyes", "Breathing", "Walking", "Eating"],
        "options_hi": ["पलक झपकना", "साँस लेना", "चलना", "खाना"],
        "answer_en": "Blinking eyes",
        "answer_hi": "पलक झपकना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "Which metal is stored in kerosene?",
        "question_hi": "कौन-सी धातु मिट्टी के तेल में रखी जाती है?",
        "options_en": ["Sodium", "Iron", "Copper", "Calcium"],
        "options_hi": ["सोडियम", "लोहा", "तांबा", "कैल्शियम"],
        "answer_en": "Sodium",
        "answer_hi": "सोडियम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "Which disease is caused due to deficiency of iodine?",
        "question_hi": "आयोडीन की कमी से कौन-सा रोग होता है?",
        "options_en": ["Rickets", "Goitre", "Scurvy", "Anaemia"],
        "options_hi": ["रिकेट्स", "घेंघा", "स्कर्वी", "अनीमिया"],
        "answer_en": "Goitre",
        "answer_hi": "घेंघा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "Which process is used to separate salt from seawater?",
        "question_hi": "समुद्री जल से नमक अलग करने की विधि क्या है?",
        "options_en": ["Filtration", "Sedimentation", "Evaporation", "Distillation"],
        "options_hi": ["छानना", "अवसादन", "वाष्पीकरण", "आसवन"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "What is the function of phloem?",
        "question_hi": "फ्लोएम का क्या कार्य होता है?",
        "options_en": ["Transport of water", "Transport of food", "Support", "Photosynthesis"],
        "options_hi": ["जल का परिवहन", "भोजन का परिवहन", "सहारा", "प्रकाश संश्लेषण"],
        "answer_en": "Transport of food",
        "answer_hi": "भोजन का परिवहन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "Which gas is evolved during the reaction of acid with metal?",
        "question_hi": "धातु और अम्ल की अभिक्रिया में कौन-सी गैस निकलती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "Which part of the brain controls voluntary actions?",
        "question_hi": "मस्तिष्क का कौन-सा भाग स्वेच्छिक क्रियाओं को नियंत्रित करता है?",
        "options_en": ["Cerebellum", "Medulla", "Cerebrum", "Pons"],
        "options_hi": ["सेरिबेलम", "मेडुला", "सेरिब्रम", "पॉन्स"],
        "answer_en": "Cerebrum",
        "answer_hi": "सेरिब्रम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "Which of these is an indicator?",
        "question_hi": "इनमें से कौन एक सूचक है?",
        "options_en": ["Hydrochloric acid", "Sodium hydroxide", "Litmus", "Salt"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सोडियम हाइड्रॉक्साइड", "लिटमस", "लवण"],
        "answer_en": "Litmus",
        "answer_hi": "लिटमस",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "What is the basic unit of heredity?",
        "question_hi": "वंशागति की मूल इकाई क्या है?",
        "options_en": ["Chromosome", "DNA", "Gene", "Cell"],
        "options_hi": ["गुणसूत्र", "डीएनए", "जीन", "कोशिका"],
        "answer_en": "Gene",
        "answer_hi": "जीन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "What is the main function of the large intestine?",
        "question_hi": "बड़ी आंत का मुख्य कार्य क्या है?",
        "options_en": ["Digestion of food", "Absorption of water", "Absorption of nutrients", "Secretion of enzymes"],
        "options_hi": ["भोजन का पाचन", "जल का अवशोषण", "पोषक तत्वों का अवशोषण", "एंजाइम का स्राव"],
        "answer_en": "Absorption of water",
        "answer_hi": "जल का अवशोषण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "Which among the following is an alloy?",
        "question_hi": "निम्नलिखित में से कौन एक मिश्रधातु है?",
        "options_en": ["Copper", "Brass", "Aluminium", "Iron"],
        "options_hi": ["तांबा", "पीतल", "एल्युमिनियम", "लोहा"],
        "answer_en": "Brass",
        "answer_hi": "पीतल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "Which of the following is used as fuel in nuclear reactors?",
        "question_hi": "निम्नलिखित में से कौन परमाणु रिएक्टरों में ईंधन के रूप में उपयोग किया जाता है?",
        "options_en": ["Uranium", "Coal", "Petrol", "Methane"],
        "options_hi": ["यूरेनियम", "कोयला", "पेट्रोल", "मीथेन"],
        "answer_en": "Uranium",
        "answer_hi": "यूरेनियम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "The movement of molecules from higher concentration to lower concentration is called:",
        "question_hi": "अणुओं का उच्च सांद्रता से निम्न सांद्रता की ओर गति को क्या कहते हैं?",
        "options_en": ["Diffusion", "Osmosis", "Evaporation", "Condensation"],
        "options_hi": ["विसरण", "परासरण", "वाष्पीकरण", "संघनन"],
        "answer_en": "Diffusion",
        "answer_hi": "विसरण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "Which is the structural and functional unit of life?",
        "question_hi": "जीवन की संरचनात्मक और क्रियात्मक इकाई क्या है?",
        "options_en": ["Organ", "Tissue", "Cell", "Organism"],
        "options_hi": ["अंग", "ऊतक", "कोशिका", "जीव"],
        "answer_en": "Cell",
        "answer_hi": "कोशिका",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "What is the pH value of a neutral solution?",
        "question_hi": "तटस्थ विलयन का pH मान क्या होता है?",
        "options_en": ["0", "7", "14", "1"],
        "options_hi": ["0", "7", "14", "1"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "Which of the following is biodegradable?",
        "question_hi": "निम्न में से कौन जैविक अपघटनीय है?",
        "options_en": ["Plastic", "Polythene", "Vegetable peels", "Glass"],
        "options_hi": ["प्लास्टिक", "पॉलीथिन", "सब्जियों के छिलके", "काँच"],
        "answer_en": "Vegetable peels",
        "answer_hi": "सब्जियों के छिलके",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "Which part of the plant conducts water?",
        "question_hi": "पौधे का कौन-सा भाग जल का परिवहन करता है?",
        "options_en": ["Xylem", "Phloem", "Chloroplast", "Stomata"],
        "options_hi": ["जाइलम", "फ्लोएम", "क्लोरोप्लास्ट", "रंध्र"],
        "answer_en": "Xylem",
        "answer_hi": "जाइलम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "Which of the following is a physical change?",
        "question_hi": "निम्न में से कौन एक भौतिक परिवर्तन है?",
        "options_en": ["Burning of paper", "Rusting of iron", "Melting of ice", "Cooking of food"],
        "options_hi": ["कागज का जलना", "लोहा जंग लगना", "बर्फ का पिघलना", "भोजन पकाना"],
        "answer_en": "Melting of ice",
        "answer_hi": "बर्फ का पिघलना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "The SI unit of electric current is:",
        "question_hi": "विद्युत धारा की एसआई इकाई क्या है?",
        "options_en": ["Volt", "Ohm", "Ampere", "Watt"],
        "options_hi": ["वोल्ट", "ओम", "एम्पियर", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "Which hormone regulates blood sugar level?",
        "question_hi": "रक्त शर्करा स्तर को नियंत्रित करने वाला हार्मोन कौन-सा है?",
        "options_en": ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"],
        "options_hi": ["इंसुलिन", "एड्रिनलीन", "थाइरॉक्सिन", "एस्ट्रोजन"],
        "answer_en": "Insulin",
        "answer_hi": "इंसुलिन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "Which one is a chemical change?",
        "question_hi": "निम्न में से कौन एक रासायनिक परिवर्तन है?",
        "options_en": ["Breaking of glass", "Dissolving sugar", "Burning of candle", "Melting of wax"],
        "options_hi": ["काँच का टूटना", "चीनी घुलना", "मोमबत्ती जलना", "मोम का पिघलना"],
        "answer_en": "Burning of candle",
        "answer_hi": "मोमबत्ती जलना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "Which of the following is a communicable disease?",
        "question_hi": "निम्न में से कौन एक संक्रामक रोग है?",
        "options_en": ["Diabetes", "Cancer", "Tuberculosis", "Asthma"],
        "options_hi": ["मधुमेह", "कैंसर", "तपेदिक", "दमा"],
        "answer_en": "Tuberculosis",
        "answer_hi": "तपेदिक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "What is the function of the kidney?",
        "question_hi": "गुर्दे का कार्य क्या है?",
        "options_en": ["Digest food", "Filter blood", "Produce hormones", "Store urine"],
        "options_hi": ["भोजन पचाना", "रक्त छानना", "हार्मोन बनाना", "मूत्र संचित करना"],
        "answer_en": "Filter blood",
        "answer_hi": "रक्त छानना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "Which metal is the liquid at room temperature?",
        "question_hi": "कौन-सी धातु सामान्य ताप पर द्रव होती है?",
        "options_en": ["Mercury", "Iron", "Silver", "Copper"],
        "options_hi": ["पारा", "लोहा", "चाँदी", "ताँबा"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "Which blood cells help in clotting?",
        "question_hi": "कौन-सी रक्त कोशिकाएँ थक्का जमाने में सहायक होती हैं?",
        "options_en": ["RBC", "WBC", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएँ", "श्वेत रक्त कोशिकाएँ", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "Platelets",
        "answer_hi": "प्लेटलेट्स",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "What is the atomic number of oxygen?",
        "question_hi": "ऑक्सीजन का परमाणु क्रमांक क्या है?",
        "options_en": ["6", "7", "8", "9"],
        "options_hi": ["6", "7", "8", "9"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "Which organ controls all body functions?",
        "question_hi": "कौन-सा अंग शरीर के सभी कार्यों को नियंत्रित करता है?",
        "options_en": ["Heart", "Brain", "Liver", "Lungs"],
        "options_hi": ["हृदय", "मस्तिष्क", "यकृत", "फेफड़े"],
        "answer_en": "Brain",
        "answer_hi": "मस्तिष्क",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "What is the boiling point of water at sea level?",
        "question_hi": "समुद्र तल पर जल का क्वथनांक क्या होता है?",
        "options_en": ["90°C", "100°C", "110°C", "120°C"],
        "options_hi": ["90°C", "100°C", "110°C", "120°C"],
        "answer_en": "100°C",
        "answer_hi": "100°C",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "Which of the following is used to make fertilizers?",
        "question_hi": "निम्न में से किसका उपयोग उर्वरक बनाने में होता है?",
        "options_en": ["Nitrogen", "Oxygen", "Carbon dioxide", "Helium"],
        "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हीलियम"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "Which gas is responsible for global warming due to the greenhouse effect?",
        "question_hi": "ग्रीनहाउस प्रभाव के कारण वैश्विक ऊष्मीकरण के लिए कौन-सी गैस जिम्मेदार है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
      }
    

// Add more questions here...
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
window.location.href = "/Deshbord/category/test/submit-test.html";
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