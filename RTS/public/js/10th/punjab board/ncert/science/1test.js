

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
        "question_en": "The resistance of a wire depends on:",
        "question_hi": "तार का प्रतिरोध किस पर निर्भर करता है?",
        "options_en": ["Length", "Area of cross-section", "Material", "All of these"],
        "options_hi": ["लंबाई", "अनुप्रस्थ काट का क्षेत्रफल", "पदार्थ", "ये सभी"],
        "answer_en": "All of these",
        "answer_hi": "ये सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The device used to measure current is called:",
        "question_hi": "धारा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
        "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "ओममीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "एमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which material has the least resistivity?",
        "question_hi": "किस पदार्थ की प्रतिरोधकता सबसे कम होती है?",
        "options_en": ["Silver", "Copper", "Aluminum", "Iron"],
        "options_hi": ["चाँदी", "ताँबा", "एल्युमीनियम", "लोहा"],
        "answer_en": "Silver",
        "answer_hi": "चाँदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The commercial unit of electrical energy is:",
        "question_hi": "विद्युत ऊर्जा का व्यावसायिक मात्रक है:",
        "options_en": ["Joule", "Kilowatt-hour", "Watt", "Ampere-hour"],
        "options_hi": ["जूल", "किलोवाट-घंटा", "वाट", "एम्पियर-घंटा"],
        "answer_en": "Kilowatt-hour",
        "answer_hi": "किलोवाट-घंटा",
        "attempted": false,
        "selected": ""
    }
    ,

    {
        "num": 7,
        "question_en": "In a series circuit, the current is:",
        "question_hi": "श्रेणीक्रम परिपथ में धारा:",
        "options_en": ["Different across each resistor", "Same across all resistors", "Zero", "None"],
        "options_hi": ["प्रत्येक प्रतिरोध में भिन्न", "सभी प्रतिरोधों में समान", "शून्य", "कोई नहीं"],
        "answer_en": "Same across all resistors",
        "answer_hi": "सभी प्रतिरोधों में समान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Total resistance in a parallel circuit is:",
        "question_hi": "समानांतर परिपथ में कुल प्रतिरोध:",
        "options_en": ["Sum of all resistances", "Less than the smallest resistance", "Equal to the largest resistance", "None"],
        "options_hi": ["सभी प्रतिरोधों का योग", "सबसे छोटे प्रतिरोध से कम", "सबसे बड़े प्रतिरोध के बराबर", "कोई नहीं"],
        "answer_en": "Less than the smallest resistance",
        "answer_hi": "सबसे छोटे प्रतिरोध से कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "If three resistors (2Ω, 3Ω, 5Ω) are in series, total resistance is:",
        "question_hi": "यदि तीन प्रतिरोध (2Ω, 3Ω, 5Ω) श्रेणीक्रम में हैं, कुल प्रतिरोध है:",
        "options_en": ["10Ω", "1Ω", "0.97Ω", "30Ω"],
        "options_hi": ["10Ω", "1Ω", "0.97Ω", "30Ω"],
        "answer_en": "10Ω",
        "answer_hi": "10Ω",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "In a parallel circuit, voltage across each resistor is:",
        "question_hi": "समानांतर परिपथ में प्रत्येक प्रतिरोध के सिरों पर विभवांतर:",
        "options_en": ["Different", "Same", "Zero", "None"],
        "options_hi": ["भिन्न", "समान", "शून्य", "कोई नहीं"],
        "answer_en": "Same",
        "answer_hi": "समान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Household appliances are connected in:",
        "question_hi": "घरेलू उपकरण किस प्रकार जुड़े होते हैं?",
        "options_en": ["Series", "Parallel", "Both", "None"],
        "options_hi": ["श्रेणीक्रम", "समानांतर", "दोनों", "कोई नहीं"],
        "answer_en": "Parallel",
        "answer_hi": "समानांतर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which circuit is used to divide current?",
        "question_hi": "धारा को विभाजित करने के लिए किस परिपथ का उपयोग होता है?",
        "options_en": ["Series", "Parallel", "Both", "None"],
        "options_hi": ["श्रेणीक्रम", "समानांतर", "दोनों", "कोई नहीं"],
        "answer_en": "Parallel",
        "answer_hi": "समानांतर",
        "attempted": false,
        "selected": ""
    }
    ,

    {
        "num": 13,
        "question_en": "The heating effect of current is due to:",
        "question_hi": "विद्युत धारा का तापन प्रभाव किसके कारण होता है?",
        "options_en": ["Resistance", "Voltage", "Power", "None"],
        "options_hi": ["प्रतिरोध", "वोल्टेज", "शक्ति", "कोई नहीं"],
        "answer_en": "Resistance",
        "answer_hi": "प्रतिरोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The formula for heat produced (H) is:",
        "question_hi": "उत्पन्न ऊष्मा (H) का सूत्र है:",
        "options_en": ["H = I²Rt", "H = VIt", "H = IR²t", "Both (a) and (b)"],
        "options_hi": ["H = I²Rt", "H = VIt", "H = IR²t", "(a) और (b) दोनों"],
        "answer_en": "Both (a) and (b)",
        "answer_hi": "(a) और (b) दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which device uses the heating effect of current?",
        "question_hi": "कौन-सा उपकरण धारा के तापन प्रभाव का उपयोग करता है?",
        "options_en": ["Electric bulb", "Electric iron", "Both", "None"],
        "options_hi": ["विद्युत बल्ब", "विद्युत इस्तरी", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The filament of an electric bulb is made of:",
        "question_hi": "विद्युत बल्ब का फिलामेंट किससे बना होता है?",
        "options_en": ["Copper", "Tungsten", "Aluminum", "Iron"],
        "options_hi": ["ताँबा", "टंगस्टन", "एल्युमीनियम", "लोहा"],
        "answer_en": "Tungsten",
        "answer_hi": "टंगस्टन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Fuse wire is made of:",
        "question_hi": "फ्यूज तार किससे बना होता है?",
        "options_en": ["High resistance, low melting point", "Low resistance, high melting point", "Copper", "Silver"],
        "options_hi": ["उच्च प्रतिरोध, निम्न गलनांक", "निम्न प्रतिरोध, उच्च गलनांक", "ताँबा", "चाँदी"],
        "answer_en": "High resistance, low melting point",
        "answer_hi": "उच्च प्रतिरोध, निम्न गलनांक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The power of an electric heater is 1000W. It operates at 220V. Its resistance is:",
        "question_hi": "एक विद्युत हीटर की शक्ति 1000W है। यह 220V पर कार्य करता है। इसका प्रतिरोध है:",
        "options_en": ["48.4Ω", "484Ω", "0.48Ω", "4.84Ω"],
        "options_hi": ["48.4Ω", "484Ω", "0.48Ω", "4.84Ω"],
        "answer_en": "48.4Ω",
        "answer_hi": "48.4Ω",
        "attempted": false,
        "selected": ""
    }
    ,

    {
        "num": 19,
        "question_en": "A current-carrying conductor produces:",
        "question_hi": "धारावाही चालक उत्पन्न करता है:",
        "options_en": ["Electric field", "Magnetic field", "Gravitational field", "None"],
        "options_hi": ["विद्युत क्षेत्र", "चुंबकीय क्षेत्र", "गुरुत्वाकर्षण क्षेत्र", "कोई नहीं"],
        "answer_en": "Magnetic field",
        "answer_hi": "चुंबकीय क्षेत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Fleming's Left-Hand Rule gives the direction of:",
        "question_hi": "फ्लेमिंग का बायाँ हाथ नियम देता है:",
        "options_en": ["Current", "Magnetic field", "Force", "Induced emf"],
        "options_hi": ["धारा", "चुंबकीय क्षेत्र", "बल", "प्रेरित विद्युत वाहक बल"],
        "answer_en": "Force",
        "answer_hi": "बल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "The field lines around a current-carrying straight conductor are:",
        "question_hi": "धारावाही सीधे चालक के चारों ओर क्षेत्र रेखाएँ होती हैं:",
        "options_en": ["Straight lines", "Concentric circles", "Elliptical", "None"],
        "options_hi": ["सीधी रेखाएँ", "संकेंद्रित वृत्त", "दीर्घवृत्ताकार", "कोई नहीं"],
        "answer_en": "Concentric circles",
        "answer_hi": "संकेंद्रित वृत्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The strength of magnetic field depends on:",
        "question_hi": "चुंबकीय क्षेत्र की सामर्थ्य निर्भर करती है:",
        "options_en": ["Amount of current", "Number of turns", "Both (a) and (b)", "None"],
        "options_hi": ["धारा की मात्रा", "फेरों की संख्या", "(a) और (b) दोनों", "कोई नहीं"],
        "answer_en": "Both (a) and (b)",
        "answer_hi": "(a) और (b) दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Fleming's Right-Hand Rule is used for:",
        "question_hi": "फ्लेमिंग का दायाँ हाथ नियम प्रयुक्त होता है:",
        "options_en": ["Motor", "Generator", "Transformer", "None"],
        "options_hi": ["मोटर", "जनरेटर", "ट्रांसफॉर्मर", "कोई नहीं"],
        "answer_en": "Generator",
        "answer_hi": "जनरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The direction of magnetic field lines inside a solenoid is:",
        "question_hi": "परिनालिका के अंदर चुंबकीय क्षेत्र रेखाओं की दिशा होती है:",
        "options_en": ["North to South", "South to North", "Circular", "None"],
        "options_hi": ["उत्तर से दक्षिण", "दक्षिण से उत्तर", "वृत्ताकार", "कोई नहीं"],
        "answer_en": "South to North",
        "answer_hi": "दक्षिण से उत्तर",
        "attempted": false,
        "selected": ""
    }
    ,

    {
        "num": 25,
        "question_en": "The device that converts electrical energy to mechanical energy is:",
        "question_hi": "वह उपकरण जो विद्युत ऊर्जा को यांत्रिक ऊर्जा में बदलता है:",
        "options_en": ["Generator", "Motor", "Transformer", "None"],
        "options_hi": ["जनरेटर", "मोटर", "ट्रांसफॉर्मर", "कोई नहीं"],
        "answer_en": "Motor",
        "answer_hi": "मोटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The principle of electric generator is based on:",
        "question_hi": "विद्युत जनरेटर का सिद्धांत आधारित है:",
        "options_en": ["Heating effect", "Electromagnetic induction", "Chemical effect", "None"],
        "options_hi": ["तापन प्रभाव", "विद्युत चुंबकीय प्रेरण", "रासायनिक प्रभाव", "कोई नहीं"],
        "answer_en": "Electromagnetic induction",
        "answer_hi": "विद्युत चुंबकीय प्रेरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "In an AC generator, the current changes direction after every:",
        "question_hi": "AC जनरेटर में, धारा प्रत्येक के बाद दिशा बदलती है:",
        "options_en": ["1/4 revolution", "1/2 revolution", "Full revolution", "None"],
        "options_hi": ["1/4 चक्कर", "1/2 चक्कर", "पूरा चक्कर", "कोई नहीं"],
        "answer_en": "1/2 revolution",
        "answer_hi": "1/2 चक्कर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The part of motor that reverses current direction is:",
        "question_hi": "मोटर का वह भाग जो धारा की दिशा उत्क्रमित करता है:",
        "options_en": ["Armature", "Brushes", "Commutator", "Field magnet"],
        "options_hi": ["आर्मेचर", "ब्रश", "कम्यूटेटर", "क्षेत्र चुंबक"],
        "answer_en": "Commutator",
        "answer_hi": "कम्यूटेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The frequency of AC in India is:",
        "question_hi": "भारत में AC की आवृत्ति है:",
        "options_en": ["50 Hz", "60 Hz", "100 Hz", "120 Hz"],
        "options_hi": ["50 हर्ट्ज", "60 हर्ट्ज", "100 हर्ट्ज", "120 हर्ट्ज"],
        "answer_en": "50 Hz",
        "answer_hi": "50 हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which device uses slip rings instead of commutator?",
        "question_hi": "कौन-सा उपकरण कम्यूटेटर के स्थान पर स्लिप रिंग्स का उपयोग करता है?",
        "options_en": ["DC motor", "AC generator", "Both", "None"],
        "options_hi": ["DC मोटर", "AC जनरेटर", "दोनों", "कोई नहीं"],
        "answer_en": "AC generator",
        "answer_hi": "AC जनरेटर",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 31,
        "question_en": "Electromagnetic induction was discovered by:",
        "question_hi": "विद्युत चुंबकीय प्रेरण की खोज की थी:",
        "options_en": ["Ohm", "Faraday", "Fleming", "Maxwell"],
        "options_hi": ["ओम", "फैराडे", "फ्लेमिंग", "मैक्सवेल"],
        "answer_en": "Faraday",
        "answer_hi": "फैराडे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The induced current can be increased by:",
        "question_hi": "प्रेरित धारा को बढ़ाया जा सकता है:",
        "options_en": ["Increasing speed of magnet", "Increasing coil turns", "Both (a) and (b)", "None"],
        "options_hi": ["चुंबक की गति बढ़ाकर", "कुंडली के फेरे बढ़ाकर", "(a) और (b) दोनों", "कोई नहीं"],
        "answer_en": "Both (a) and (b)",
        "answer_hi": "(a) और (b) दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The direction of induced current is given by:",
        "question_hi": "प्रेरित धारा की दिशा दी जाती है:",
        "options_en": ["Fleming's Left-Hand Rule", "Fleming's Right-Hand Rule", "Ohm's Law", "None"],
        "options_hi": ["फ्लेमिंग का बायाँ हाथ नियम", "फ्लेमिंग का दायाँ हाथ नियम", "ओम का नियम", "कोई नहीं"],
        "answer_en": "Fleming's Right-Hand Rule",
        "answer_hi": "फ्लेमिंग का दायाँ हाथ नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "A transformer works on the principle of:",
        "question_hi": "ट्रांसफॉर्मर कार्य करता है:",
        "options_en": ["Heating effect", "Electromagnetic induction", "Chemical effect", "None"],
        "options_hi": ["तापन प्रभाव", "विद्युत चुंबकीय प्रेरण", "रासायनिक प्रभाव", "कोई नहीं"],
        "answer_en": "Electromagnetic induction",
        "answer_hi": "विद्युत चुंबकीय प्रेरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "In a step-up transformer:",
        "question_hi": "स्टेप-अप ट्रांसफॉर्मर में:",
        "options_en": ["Voltage increases", "Current increases", "Both increase", "None"],
        "options_hi": ["वोल्टेज बढ़ता है", "धारा बढ़ती है", "दोनों बढ़ते हैं", "कोई नहीं"],
        "answer_en": "Voltage increases",
        "answer_hi": "वोल्टेज बढ़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The core of transformer is made of:",
        "question_hi": "ट्रांसफॉर्मर का कोर बना होता है:",
        "options_en": ["Soft iron", "Steel", "Copper", "Aluminum"],
        "options_hi": ["नर्म लोहा", "इस्पात", "ताँबा", "एल्युमीनियम"],
        "answer_en": "Soft iron",
        "answer_hi": "नर्म लोहा",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 37,
        "question_en": "Which is a non-renewable source of energy?",
        "question_hi": "ऊर्जा का कौन-सा अनवीकरणीय स्रोत है?",
        "options_en": ["Solar", "Wind", "Coal", "Biomass"],
        "options_hi": ["सौर", "पवन", "कोयला", "बायोमास"],
        "answer_en": "Coal",
        "answer_hi": "कोयला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The main component of biogas is:",
        "question_hi": "बायोगैस का मुख्य घटक है:",
        "options_en": ["Methane", "Ethane", "Propane", "Butane"],
        "options_hi": ["मीथेन", "इथेन", "प्रोपेन", "ब्यूटेन"],
        "answer_en": "Methane",
        "answer_hi": "मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Solar panels convert sunlight into:",
        "question_hi": "सौर पैनल सूर्य के प्रकाश को बदलते हैं:",
        "options_en": ["Heat energy", "Electrical energy", "Chemical energy", "None"],
        "options_hi": ["ताप ऊर्जा", "विद्युत ऊर्जा", "रासायनिक ऊर्जा", "कोई नहीं"],
        "answer_en": "Electrical energy",
        "answer_hi": "विद्युत ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which energy source does not produce pollution?",
        "question_hi": "कौन-सा ऊर्जा स्रोत प्रदूषण उत्पन्न नहीं करता?",
        "options_en": ["Coal", "Petroleum", "Solar", "Natural gas"],
        "options_hi": ["कोयला", "पेट्रोलियम", "सौर", "प्राकृतिक गैस"],
        "answer_en": "Solar",
        "answer_hi": "सौर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The energy obtained from flowing water is called:",
        "question_hi": "बहते पानी से प्राप्त ऊर्जा कहलाती है:",
        "options_en": ["Tidal energy", "Hydro energy", "Geothermal energy", "None"],
        "options_hi": ["ज्वारीय ऊर्जा", "जल विद्युत ऊर्जा", "भूतापीय ऊर्जा", "कोई नहीं"],
        "answer_en": "Hydro energy",
        "answer_hi": "जल विद्युत ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Wind energy is harnessed using:",
        "question_hi": "पवन ऊर्जा का उपयोग किया जाता है:",
        "options_en": ["Solar cells", "Wind turbines", "Biogas plants", "None"],
        "options_hi": ["सौर सेल", "पवन टरबाइन", "बायोगैस संयंत्र", "कोई नहीं"],
        "answer_en": "Wind turbines",
        "answer_hi": "पवन टरबाइन",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 43,
        "question_en": "The part of eye that controls the amount of light entering is:",
        "question_hi": "नेत्र का वह भाग जो प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है:",
        "options_en": ["Retina", "Iris", "Cornea", "Lens"],
        "options_hi": ["रेटिना", "आइरिस", "कार्निया", "लेंस"],
        "answer_en": "Iris",
        "answer_hi": "आइरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The light-sensitive screen in the eye is:",
        "question_hi": "नेत्र में प्रकाश-संवेदी परत होती है:",
        "options_en": ["Cornea", "Retina", "Iris", "Pupil"],
        "options_hi": ["कार्निया", "रेटिना", "आइरिस", "पुतली"],
        "answer_en": "Retina",
        "answer_hi": "रेटिना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The eye lens is a:",
        "question_hi": "नेत्र लेंस होता है:",
        "options_en": ["Convex lens", "Concave lens", "Plano-convex lens", "None"],
        "options_hi": ["उत्तल लेंस", "अवतल लेंस", "समतल-उत्तल लेंस", "कोई नहीं"],
        "answer_en": "Convex lens",
        "answer_hi": "उत्तल लेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The ability of eye lens to adjust its focal length is called:",
        "question_hi": "नेत्र लेंस की अपनी फोकस दूरी समायोजित करने की क्षमता कहलाती है:",
        "options_en": ["Accommodation", "Persistence of vision", "Myopia", "Hypermetropia"],
        "options_hi": ["समंजन", "दृष्टि की निरंतरता", "मायोपिया", "हाइपरमेट्रोपिया"],
        "answer_en": "Accommodation",
        "answer_hi": "समंजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The black opening between aqueous humor and lens is:",
        "question_hi": "एक्वियस ह्यूमर और लेंस के बीच का काला छिद्र है:",
        "options_en": ["Iris", "Pupil", "Cornea", "Retina"],
        "options_hi": ["आइरिस", "पुतली", "कार्निया", "रेटिना"],
        "answer_en": "Pupil",
        "answer_hi": "पुतली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The defect due to elongation of eyeball is:",
        "question_hi": "नेत्र गोलक के लंबे होने के कारण होने वाला दोष है:",
        "options_en": ["Myopia", "Hypermetropia", "Presbyopia", "Astigmatism"],
        "options_hi": ["मायोपिया", "हाइपरमेट्रोपिया", "प्रेस्बायोपिया", "दृष्टिवैषम्य"],
        "answer_en": "Myopia",
        "answer_hi": "मायोपिया",
        "attempted": false,
        "selected": ""
    }
    ,

    {
        "num": 49,
        "question_en": "The splitting of white light into its constituent colors is called:",
        "question_hi": "सफेद प्रकाश का अपने घटक रंगों में विभाजन कहलाता है:",
        "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
        "answer_en": "Dispersion",
        "answer_hi": "विक्षेपण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The phenomenon responsible for the blue color of sky is:",
        "question_hi": "आकाश के नीले रंग के लिए उत्तरदायी घटना है:",
        "options_en": ["Refraction", "Scattering", "Dispersion", "Reflection"],
        "options_hi": ["अपवर्तन", "प्रकीर्णन", "विक्षेपण", "परावर्तन"],
        "answer_en": "Scattering",
        "answer_hi": "प्रकीर्णन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "In rainbow, which color deviates the most?",
        "question_hi": "इंद्रधनुष में कौन-सा रंग सर्वाधिक विचलित होता है?",
        "options_en": ["Red", "Violet", "Green", "Yellow"],
        "options_hi": ["लाल", "बैंगनी", "हरा", "पीला"],
        "answer_en": "Violet",
        "answer_hi": "बैंगनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The bending of light when it passes from one medium to another is called:",
        "question_hi": "प्रकाश का मुड़ना जब यह एक माध्यम से दूसरे में जाता है, कहलाता है:",
        "options_en": ["Reflection", "Refraction", "Dispersion", "Scattering"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "प्रकीर्णन"],
        "answer_en": "Refraction",
        "answer_hi": "अपवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "At noon, the sun appears white because:",
        "question_hi": "दोपहर में सूर्य सफेद दिखाई देता है क्योंकि:",
        "options_en": ["All colors scatter equally", "No scattering occurs", "Only blue scatters", "None"],
        "options_hi": ["सभी रंग समान रूप से प्रकीर्णित होते हैं", "कोई प्रकीर्णन नहीं होता", "केवल नीला प्रकीर्णित होता है", "कोई नहीं"],
        "answer_en": "No scattering occurs",
        "answer_hi": "कोई प्रकीर्णन नहीं होता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "The danger signal is red because:",
        "question_hi": "खतरे का संकेत लाल होता है क्योंकि:",
        "options_en": ["It scatters least", "It is most visible", "It scatters most", "None"],
        "options_hi": ["यह सबसे कम प्रकीर्णित होता है", "यह सबसे अधिक दिखाई देता है", "यह सबसे अधिक प्रकीर्णित होता है", "कोई नहीं"],
        "answer_en": "It scatters least",
        "answer_hi": "यह सबसे कम प्रकीर्णित होता है",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 55,
        "question_en": "Which of the following is a combination reaction?",
        "question_hi": "निम्नलिखित में से कौन एक संयोजन अभिक्रिया है?",
        "options_en": ["CaO + H2O → Ca(OH)2", "Zn + HCl → ZnCl2 + H2", "AgNO3 + NaCl → AgCl + NaNO3", "2KClO3 → 2KCl + 3O2"],
        "options_hi": ["CaO + H2O → Ca(OH)2", "Zn + HCl → ZnCl2 + H2", "AgNO3 + NaCl → AgCl + NaNO3", "2KClO3 → 2KCl + 3O2"],
        "answer_en": "CaO + H2O → Ca(OH)2",
        "answer_hi": "CaO + H2O → Ca(OH)2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which of the following is a displacement reaction?",
        "question_hi": "निम्नलिखित में से कौन विस्थापन अभिक्रिया है?",
        "options_en": ["Zn + CuSO4 → ZnSO4 + Cu", "NaOH + HCl → NaCl + H2O", "AgNO3 + NaCl → AgCl + NaNO3", "CaCO3 → CaO + CO2"],
        "options_hi": ["Zn + CuSO4 → ZnSO4 + Cu", "NaOH + HCl → NaCl + H2O", "AgNO3 + NaCl → AgCl + NaNO3", "CaCO3 → CaO + CO2"],
        "answer_en": "Zn + CuSO4 → ZnSO4 + Cu",
        "answer_hi": "Zn + CuSO4 → ZnSO4 + Cu",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Decomposition reactions require:",
        "question_hi": "अपघटन अभिक्रियाओं के लिए आवश्यक है:",
        "options_en": ["Electricity", "Heat", "Light", "All of these"],
        "options_hi": ["बिजली", "गर्मी", "प्रकाश", "इनमें से सभी"],
        "answer_en": "All of these",
        "answer_hi": "इनमें से सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which is a double displacement reaction?",
        "question_hi": "कौन सी एक द्वितीयक विस्थापन अभिक्रिया है?",
        "options_en": ["AgNO3 + NaCl → AgCl + NaNO3", "Zn + HCl → ZnCl2 + H2", "C + O2 → CO2", "CaCO3 → CaO + CO2"],
        "options_hi": ["AgNO3 + NaCl → AgCl + NaNO3", "Zn + HCl → ZnCl2 + H2", "C + O2 → CO2", "CaCO3 → CaO + CO2"],
        "answer_en": "AgNO3 + NaCl → AgCl + NaNO3",
        "answer_hi": "AgNO3 + NaCl → AgCl + NaNO3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which of the following is an example of a redox reaction?",
        "question_hi": "निम्नलिखित में से कौन एक रिडॉक्स अभिक्रिया का उदाहरण है?",
        "options_en": ["Zn + CuSO4 → ZnSO4 + Cu", "NaCl → Na+ + Cl−", "NaOH + HCl → NaCl + H2O", "AgNO3 + NaCl → AgCl + NaNO3"],
        "options_hi": ["Zn + CuSO4 → ZnSO4 + Cu", "NaCl → Na+ + Cl−", "NaOH + HCl → NaCl + H2O", "AgNO3 + NaCl → AgCl + NaNO3"],
        "answer_en": "Zn + CuSO4 → ZnSO4 + Cu",
        "answer_hi": "Zn + CuSO4 → ZnSO4 + Cu",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 60,
        "question_en": "Which of the following is the balanced form of the reaction: H2 + O2 → H2O?",
        "question_hi": "निम्नलिखित में से कौन H2 + O2 → H2O अभिक्रिया का संतुलित रूप है?",
        "options_en": ["2H2 + O2 → 2H2O", "H2 + O2 → H2O2", "H2 + 2O2 → H2O", "2H2 + 2O2 → 2H2O"],
        "options_hi": ["2H2 + O2 → 2H2O", "H2 + O2 → H2O2", "H2 + 2O2 → H2O", "2H2 + 2O2 → 2H2O"],
        "answer_en": "2H2 + O2 → 2H2O",
        "answer_hi": "2H2 + O2 → 2H2O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the balanced equation for the reaction: Fe + O2 → Fe2O3?",
        "question_hi": "Fe + O2 → Fe2O3 अभिक्रिया का संतुलित समीकरण क्या है?",
        "options_en": ["4Fe + 3O2 → 2Fe2O3", "2Fe + O2 → Fe2O3", "Fe + O2 → Fe2O3", "3Fe + 2O2 → Fe2O3"],
        "options_hi": ["4Fe + 3O2 → 2Fe2O3", "2Fe + O2 → Fe2O3", "Fe + O2 → Fe2O3", "3Fe + 2O2 → Fe2O3"],
        "answer_en": "4Fe + 3O2 → 2Fe2O3",
        "answer_hi": "4Fe + 3O2 → 2Fe2O3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Balance the equation: Na + H2O → NaOH + H2",
        "question_hi": "समीकरण संतुलित करें: Na + H2O → NaOH + H2",
        "options_en": ["2Na + 2H2O → 2NaOH + H2", "Na + H2O → NaOH + H2", "2Na + H2O → NaOH + H2", "Na + 2H2O → NaOH + H2"],
        "options_hi": ["2Na + 2H2O → 2NaOH + H2", "Na + H2O → NaOH + H2", "2Na + H2O → NaOH + H2", "Na + 2H2O → NaOH + H2"],
        "answer_en": "2Na + 2H2O → 2NaOH + H2",
        "answer_hi": "2Na + 2H2O → 2NaOH + H2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "In the equation: C3H8 + O2 → CO2 + H2O, what is the balanced form?",
        "question_hi": "समीकरण: C3H8 + O2 → CO2 + H2O का संतुलित रूप क्या है?",
        "options_en": ["C3H8 + 5O2 → 3CO2 + 4H2O", "C3H8 + 4O2 → 3CO2 + 4H2O", "C3H8 + 5O2 → 3CO2 + 3H2O", "C3H8 + 3O2 → 3CO2 + 4H2O"],
        "options_hi": ["C3H8 + 5O2 → 3CO2 + 4H2O", "C3H8 + 4O2 → 3CO2 + 4H2O", "C3H8 + 5O2 → 3CO2 + 3H2O", "C3H8 + 3O2 → 3CO2 + 4H2O"],
        "answer_en": "C3H8 + 5O2 → 3CO2 + 4H2O",
        "answer_hi": "C3H8 + 5O2 → 3CO2 + 4H2O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Balanced form of the reaction: Al + O2 → Al2O3 is:",
        "question_hi": "Abhikriya: Al + O2 → Al2O3 का संतुलित रूप है:",
        "options_en": ["4Al + 3O2 → 2Al2O3", "2Al + O2 → Al2O3", "3Al + 2O2 → 2Al2O3", "Al + O2 → Al2O3"],
        "options_hi": ["4Al + 3O2 → 2Al2O3", "2Al + O2 → Al2O3", "3Al + 2O2 → 2Al2O3", "Al + O2 → Al2O3"],
        "answer_en": "4Al + 3O2 → 2Al2O3",
        "answer_hi": "4Al + 3O2 → 2Al2O3",
        "attempted": false,
        "selected": ""
    },


    {
        "num": 65,
        "question_en": "Which of the following is an example of oxidation?",
        "question_hi": "निम्नलिखित में से कौन ऑक्सीकरण का उदाहरण है?",
        "options_en": ["Iron rusting", "Milk curdling", "Water boiling", "Salt dissolving"],
        "options_hi": ["लौह का जंग लगना", "दूध का फटना", "पानी का उबालना", "नमक का घुलना"],
        "answer_en": "Iron rusting",
        "answer_hi": "लौह का जंग लगना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "In a redox reaction, the substance that loses electrons is said to be:",
        "question_hi": "एक रेडॉक्स अभिक्रिया में, जो पदार्थ इलेक्ट्रॉन खोता है उसे क्या कहा जाता है?",
        "options_en": ["Oxidized", "Reduced", "Neutralized", "Hydrolyzed"],
        "options_hi": ["ऑक्सीकृत", "अपचयित", "उदासीन", "जल अपघटित"],
        "answer_en": "Oxidized",
        "answer_hi": "ऑक्सीकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What happens to the oxidizing agent in a redox reaction?",
        "question_hi": "एक रेडॉक्स अभिक्रिया में ऑक्सीकरण कारक के साथ क्या होता है?",
        "options_en": ["It gets reduced", "It gets oxidized", "It remains unchanged", "It evaporates"],
        "options_hi": ["यह अपचयित हो जाता है", "यह ऑक्सीकृत हो जाता है", "यह अपरिवर्तित रहता है", "यह वाष्पित हो जाता है"],
        "answer_en": "It gets reduced",
        "answer_hi": "यह अपचयित हो जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Which is a redox reaction?",
        "question_hi": "निम्नलिखित में से कौन सी रेडॉक्स अभिक्रिया है?",
        "options_en": ["Zn + CuSO4 → ZnSO4 + Cu", "NaOH + HCl → NaCl + H2O", "CaCO3 → CaO + CO2", "AgNO3 + NaCl → AgCl + NaNO3"],
        "options_hi": ["Zn + CuSO4 → ZnSO4 + Cu", "NaOH + HCl → NaCl + H2O", "CaCO3 → CaO + CO2", "AgNO3 + NaCl → AgCl + NaNO3"],
        "answer_en": "Zn + CuSO4 → ZnSO4 + Cu",
        "answer_hi": "Zn + CuSO4 → ZnSO4 + Cu",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Reduction involves:",
        "question_hi": "अपचयन में क्या होता है?",
        "options_en": ["Gain of electrons", "Loss of electrons", "Gain of oxygen", "None of these"],
        "options_hi": ["इलेक्ट्रॉनों की प्राप्ति", "इलेक्ट्रॉनों की हानि", "ऑक्सीजन की प्राप्ति", "इनमें से कोई नहीं"],
        "answer_en": "Gain of electrons",
        "answer_hi": "इलेक्ट्रॉनों की प्राप्ति",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 70,
        "question_en": "Which of the following is a strong acid?",
        "question_hi": "निम्नलिखित में से कौन सा एक प्रबल अम्ल है?",
        "options_en": ["Hydrochloric acid", "Acetic acid", "Citric acid", "Carbonic acid"],
        "options_hi": ["हाइड्रोक्लोरिक अम्ल", "एसीटिक अम्ल", "साइट्रिक अम्ल", "कार्बोनिक अम्ल"],
        "answer_en": "Hydrochloric acid",
        "answer_hi": "हाइड्रोक्लोरिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which of the following is a property of bases?",
        "question_hi": "निम्नलिखित में से कौन क्षार की एक विशेषता है?",
        "options_en": ["Bitter taste", "Sour taste", "Turns red litmus blue", "Both A and C"],
        "options_hi": ["कड़वा स्वाद", "खट्टा स्वाद", "लाल लिटमस को नीला करता है", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which acid is present in lemon?",
        "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Acetic acid", "Citric acid", "Sulfuric acid", "Formic acid"],
        "options_hi": ["एसीटिक अम्ल", "साइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Citric acid",
        "answer_hi": "साइट्रिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is formed when an acid reacts with a metal?",
        "question_hi": "जब अम्ल धातु के साथ अभिक्रिया करता है तो क्या बनता है?",
        "options_en": ["Salt and hydrogen gas", "Salt and water", "Only salt", "Only hydrogen gas"],
        "options_hi": ["नमक और हाइड्रोजन गैस", "नमक और जल", "केवल नमक", "केवल हाइड्रोजन गैस"],
        "answer_en": "Salt and hydrogen gas",
        "answer_hi": "नमक और हाइड्रोजन गैस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which base is used in the manufacture of soap?",
        "question_hi": "साबुन बनाने में कौन सा क्षार उपयोग किया जाता है?",
        "options_en": ["Sodium hydroxide", "Calcium hydroxide", "Magnesium hydroxide", "Ammonium hydroxide"],
        "options_hi": ["सोडियम हाइड्रॉक्साइड", "कैल्शियम हाइड्रॉक्साइड", "मैग्नीशियम हाइड्रॉक्साइड", "अमोनियम हाइड्रॉक्साइड"],
        "answer_en": "Sodium hydroxide",
        "answer_hi": "सोडियम हाइड्रॉक्साइड",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 75,
        "question_en": "Which of the following is a function of the digestive system?",
        "question_hi": "निम्नलिखित में से कौन पाचन तंत्र का कार्य है?",
        "options_en": ["Absorption of nutrients", "Transport of oxygen", "Excretion of waste", "Regulation of body temperature"],
        "options_hi": ["पोषक तत्वों का अवशोषण", "ऑक्सीजन का परिवहन", "अपशिष्ट का उत्सर्जन", "शरीर के तापमान का नियंत्रण"],
        "answer_en": "Absorption of nutrients",
        "answer_hi": "पोषक तत्वों का अवशोषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Where does the process of photosynthesis occur in plants?",
        "question_hi": "पौधों में प्रकाश संश्लेषण की प्रक्रिया कहाँ होती है?",
        "options_en": ["Chloroplast", "Mitochondria", "Nucleus", "Cytoplasm"],
        "options_hi": ["क्लोरोप्लास्ट", "माइटोकॉन्ड्रिया", "न्यूक्लियस", "साइटोप्लाज्म"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the primary function of red blood cells?",
        "question_hi": "लाल रक्त कोशिकाओं का मुख्य कार्य क्या है?",
        "options_en": ["Transport of oxygen", "Fight infections", "Clot blood", "Digest food"],
        "options_hi": ["ऑक्सीजन का परिवहन", "संक्रमण से लड़ना", "रक्त का थक्का बनाना", "खाना पचाना"],
        "answer_en": "Transport of oxygen",
        "answer_hi": "ऑक्सीजन का परिवहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which of the following is a characteristic of living organisms?",
        "question_hi": "निम्नलिखित में से क्या जीवित जीवों की विशेषता है?",
        "options_en": ["Ability to reproduce", "Ability to produce light", "Ability to fly", "Ability to swim"],
        "options_hi": ["प्रजनन करने की क्षमता", "प्रकाश उत्पन्न करने की क्षमता", "उड़ने की क्षमता", "तैरने की क्षमता"],
        "answer_en": "Ability to reproduce",
        "answer_hi": "प्रजनन करने की क्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What type of nutrition occurs in plants?",
        "question_hi": "पौधों में किस प्रकार का पोषण होता है?",
        "options_en": ["Autotrophic", "Heterotrophic", "Saprotrophic", "Parasitic"],
        "options_hi": ["स्वपोषी", "परपोषी", "सैप्रोट्रोफिक", "परजीवी"],
        "answer_en": "Autotrophic",
        "answer_hi": "स्वपोषी",
        "attempted": false,
        "selected": ""
    }
    ,

    {
        "num": 80,
        "question_en": "What is the end product of aerobic respiration?",
        "question_hi": "एरोबिक श्वसन का अंतिम उत्पाद क्या है?",
        "options_en": ["Glucose", "Oxygen", "Carbon dioxide and water", "Alcohol"],
        "options_hi": ["ग्लूकोज", "ऑक्सीजन", "कार्बन डाइऑक्साइड और जल", "शराब"],
        "answer_en": "Carbon dioxide and water",
        "answer_hi": "कार्बन डाइऑक्साइड और जल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the main function of the human circulatory system?",
        "question_hi": "मानव परिसंचरण तंत्र का मुख्य कार्य क्या है?",
        "options_en": ["Transport of oxygen and nutrients", "Protection from infections", "Regulation of body temperature", "Removal of waste products"],
        "options_hi": ["ऑक्सीजन और पोषक तत्वों का परिवहन", "संक्रमण से सुरक्षा", "शरीर के तापमान का नियंत्रण", "अपशिष्ट उत्पादों को हटाना"],
        "answer_en": "Transport of oxygen and nutrients",
        "answer_hi": "ऑक्सीजन और पोषक तत्वों का परिवहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which part of the plant absorbs water and minerals from the soil?",
        "question_hi": "पौधे का कौन सा भाग मिट्टी से पानी और खनिजों को अवशोषित करता है?",
        "options_en": ["Roots", "Stem", "Leaves", "Flowers"],
        "options_hi": ["मूल", "तना", "पत्तियाँ", "फूल"],
        "answer_en": "Roots",
        "answer_hi": "मूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which of the following is a waste product of cellular respiration?",
        "question_hi": "निम्नलिखित में से क्या कोशिकीय श्वसन का अपशिष्ट उत्पाद है?",
        "options_en": ["Oxygen", "Glucose", "Carbon dioxide", "Water"],
        "options_hi": ["ऑक्सीजन", "ग्लूकोज", "कार्बन डाइऑक्साइड", "जल"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Where does the exchange of gases take place in the human body?",
        "question_hi": "मानव शरीर में गैसों का आदान-प्रदान कहाँ होता है?",
        "options_en": ["Lungs", "Stomach", "Intestines", "Kidneys"],
        "options_hi": ["फेफड़े", "पेट", "आंतें", "गुर्दे"],
        "answer_en": "Lungs",
        "answer_hi": "फेफड़े",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 85,
        "question_en": "Which part of the brain controls balance and coordination?",
        "question_hi": "मस्तिष्क का कौन सा हिस्सा संतुलन और समन्वय को नियंत्रित करता है?",
        "options_en": ["Cerebellum", "Cerebrum", "Medulla", "Thalamus"],
        "options_hi": ["कैरिबेलम", "सिरिब्रम", "मेडुला", "थैलेमस"],
        "answer_en": "Cerebellum",
        "answer_hi": "कैरिबेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which hormone is responsible for the fight or flight response?",
        "question_hi": "लड़ाई या उड़ान प्रतिक्रिया के लिए कौन सा हार्मोन जिम्मेदार है?",
        "options_en": ["Adrenaline", "Insulin", "Thyroxine", "Estrogen"],
        "options_hi": ["एड्रेनलिन", "इंसुलिन", "थाइरॉक्सिन", "एस्त्रोजन"],
        "answer_en": "Adrenaline",
        "answer_hi": "एड्रेनलिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the function of phloem in plants?",
        "question_hi": "पौधों में फ्लोएम का कार्य क्या है?",
        "options_en": ["Transport of water", "Transport of food", "Transport of minerals", "Photosynthesis"],
        "options_hi": ["पानी का परिवहन", "खाद्य का परिवहन", "खनिजों का परिवहन", "प्रकाश संश्लेषण"],
        "answer_en": "Transport of food",
        "answer_hi": "खाद्य का परिवहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which process involves the division of a single cell into two identical cells?",
        "question_hi": "कौन सी प्रक्रिया में एकल कोशिका का दो समान कोशिकाओं में विभाजन होता है?",
        "options_en": ["Mitosis", "Meiosis", "Fertilization", "Binary Fission"],
        "options_hi": ["माइटोसिस", "मीओसिस", "अंडाणु मिलन", "बाइनरी फिशन"],
        "answer_en": "Mitosis",
        "answer_hi": "माइटोसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which of the following is an example of asexual reproduction?",
        "question_hi": "निम्नलिखित में से कौन सा यौन प्रजनन का उदाहरण है?",
        "options_en": ["Budding in yeast", "Pollination in flowers", "Fertilization in humans", "Spore formation in fungi"],
        "options_hi": ["यीस्ट में कलिका", "फूलों में परागण", "मनुष्यों में निषेचन", "फंगस में बीजाणु निर्माण"],
        "answer_en": "Budding in yeast",
        "answer_hi": "यीस्ट में कलिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the primary function of red blood cells?",
        "question_hi": "लाल रक्त कणिकाओं का मुख्य कार्य क्या है?",
        "options_en": ["Carrying oxygen", "Carrying nutrients", "Fighting infection", "Clotting of blood"],
        "options_hi": ["ऑक्सीजन का परिवहन", "पोषक तत्वों का परिवहन", "संक्रमण से लड़ना", "रक्त का थक्का बनाना"],
        "answer_en": "Carrying oxygen",
        "answer_hi": "ऑक्सीजन का परिवहन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which law states that traits are inherited independently from each other?",
        "question_hi": "कौन सा नियम कहता है कि लक्षण एक दूसरे से स्वतंत्र रूप से विरासत में मिलते हैं?",
        "options_en": ["Mendel's Second Law", "Mendel's First Law", "Newton's Law", "Law of Evolution"],
        "options_hi": ["मेंडेल का दूसरा नियम", "मेंडेल का पहला नियम", "न्यूटन का नियम", "विकास का नियम"],
        "answer_en": "Mendel's Second Law",
        "answer_hi": "मेंडेल का दूसरा नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "In human reproduction, where does fertilization take place?",
        "question_hi": "मानव प्रजनन में निषेचन कहाँ होता है?",
        "options_en": ["Fallopian tube", "Ovary", "Uterus", "Vagina"],
        "options_hi": ["फैलोपियन ट्यूब", "अंडाशय", "गर्भाशय", "योनि"],
        "answer_en": "Fallopian tube",
        "answer_hi": "फैलोपियन ट्यूब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the genetic material found in all living organisms?",
        "question_hi": "सभी जीवित जीवों में पाए जाने वाला आनुवंशिक पदार्थ क्या है?",
        "options_en": ["DNA", "RNA", "Proteins", "Lipids"],
        "options_hi": ["डीएनए", "आरएनए", "प्रोटीन", "लिपिड"],
        "answer_en": "DNA",
        "answer_hi": "डीएनए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the name of the process where plants respond to light?",
        "question_hi": "पौधों के द्वारा प्रकाश पर प्रतिक्रिया देने की प्रक्रिया का नाम क्या है?",
        "options_en": ["Phototropism", "Geotropism", "Hydrotropism", "Thigmotropism"],
        "options_hi": ["प्रकाश समग्रण", "भू-प्रेरणा", "जल-प्रेरणा", "स्पर्श-प्रेरणा"],
        "answer_en": "Phototropism",
        "answer_hi": "प्रकाश समग्रण",
        "attempted": false,
        "selected": ""
    }
    ,
    {
        "num": 95,
        "question_en": "What is the main function of the nervous system?",
        "question_hi": "तंत्रिका तंत्र का मुख्य कार्य क्या है?",
        "options_en": ["Control body movements", "Produce hormones", "Break down food", "Transport oxygen"],
        "options_hi": ["शरीर की गति को नियंत्रित करना", "हार्मोन का निर्माण करना", "खाद्य का पाचन करना", "ऑक्सीजन का परिवहन करना"],
        "answer_en": "Control body movements",
        "answer_hi": "शरीर की गति को नियंत्रित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which organ in the human body produces insulin?",
        "question_hi": "मानव शरीर में कौन सा अंग इंसुलिन का उत्पादन करता है?",
        "options_en": ["Pancreas", "Liver", "Kidneys", "Lungs"],
        "options_hi": ["अग्न्याशय", "यकृत", "गुर्दे", "फेफड़े"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which part of the brain controls involuntary actions such as heartbeat?",
        "question_hi": "मस्तिष्क का कौन सा हिस्सा अनैच्छिक क्रियाओं जैसे दिल की धड़कन को नियंत्रित करता है?",
        "options_en": ["Medulla", "Cerebrum", "Cerebellum", "Pons"],
        "options_hi": ["मेडुला", "सिरिब्रम", "कैरिबेलम", "पॉन्स"],
        "answer_en": "Medulla",
        "answer_hi": "मेडुला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the function of auxins in plants?",
        "question_hi": "पौधों में ऑक्सिन का कार्य क्या है?",
        "options_en": ["Promote growth", "Transport water", "Prevent wilting", "Help in photosynthesis"],
        "options_hi": ["विकास को बढ़ावा देना", "पानी का परिवहन करना", "सूखने से रोकना", "प्रकाश संश्लेषण में मदद करना"],
        "answer_en": "Promote growth",
        "answer_hi": "विकास को बढ़ावा देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which type of reproduction involves the union of male and female gametes?",
        "question_hi": "किस प्रकार की प्रजनन प्रक्रिया में पुरुष और महिला जनन कोशिकाओं का मिलन होता है?",
        "options_en": ["Sexual reproduction", "Asexual reproduction", "Binary fission", "Budding"],
        "options_hi": ["यौन प्रजनन", "अयौन प्रजनन", "बाइनरी फिशन", "कलिका"],
        "answer_en": "Sexual reproduction",
        "answer_hi": "यौन प्रजनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the term for the process by which offspring inherit traits from their parents?",
        "question_hi": "वह प्रक्रिया जिसे द्वारा संतान अपने माता-पिता से गुण प्राप्त करते हैं, उसे क्या कहा जाता है?",
        "options_en": ["Heredity", "Evolution", "Mitosis", "Mutation"],
        "options_hi": ["विरासत", "विकास", "माइटोसिस", "परिवर्तन"],
        "answer_en": "Heredity",
        "answer_hi": "विरासत",
        "attempted": false,
        "selected": ""
    },





















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