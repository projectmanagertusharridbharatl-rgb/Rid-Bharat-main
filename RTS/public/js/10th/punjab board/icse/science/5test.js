
const questions = [
  
    {
      "num": 1,
      "question_en": "Which of the following is a function of the nervous system?",
      "question_hi": "निम्न में से कौन तंत्रिका तंत्र का कार्य है?",
      "options_en": ["Transmitting signals", "Producing hormones", "Digesting food", "Filtering blood"],
      "options_hi": ["संकेतों का संचार करना", "हार्मोन उत्पन्न करना", "भोजन पचाना", "रक्त छानना"],
      "answer_en": "Transmitting signals",
      "answer_hi": "संकेतों का संचार करना",
      "attempted": false
    },
    {
      "num": 2,
      "question_en": "What is the SI unit of electric current?",
      "question_hi": "विद्युत धारा का SI मात्रक क्या है?",
      "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
      "options_hi": ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
      "answer_en": "Ampere",
      "answer_hi": "एम्पीयर",
      "attempted": false
    },
    {
      "num": 3,
      "question_en": "Which gas is released during photosynthesis?",
      "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
      "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
      "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
      "answer_en": "Oxygen",
      "answer_hi": "ऑक्सीजन",
      "attempted": false
    },
    {
      "num": 4,
      "question_en": "What is the chemical formula of sulfuric acid?",
      "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
      "options_en": ["HCl", "H₂SO₄", "HNO₃", "H₂CO₃"],
      "options_hi": ["HCl", "H₂SO₄", "HNO₃", "H₂CO₃"],
      "answer_en": "H₂SO₄",
      "answer_hi": "H₂SO₄",
      "attempted": false
    },
    {
      "num": 5,
      "question_en": "Which of the following is a greenhouse gas?",
      "question_hi": "निम्न में से कौन सी ग्रीनहाउस गैस है?",
      "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
      "answer_en": "Carbon dioxide",
      "answer_hi": "कार्बन डाइऑक्साइड",
      "attempted": false
    },
    {
      "num": 6,
      "question_en": "What is the unit of power?",
      "question_hi": "शक्ति का मात्रक क्या है?",
      "options_en": ["Joule", "Watt", "Newton", "Pascal"],
      "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
      "answer_en": "Watt",
      "answer_hi": "वाट",
      "attempted": false
    },
    {
      "num": 7,
      "question_en": "Which part of the plant helps in absorption of water?",
      "question_hi": "पौधे का कौन सा भाग पानी के अवशोषण में मदद करता है?",
      "options_en": ["Leaves", "Stem", "Roots", "Flowers"],
      "options_hi": ["पत्तियाँ", "तना", "जड़ें", "फूल"],
      "answer_en": "Roots",
      "answer_hi": "जड़ें",
      "attempted": false
    },
    {
      "num": 8,
      "question_en": "What is the pH value of a neutral solution?",
      "question_hi": "उदासीन विलयन का pH मान क्या होता है?",
      "options_en": ["0", "7", "14", "1"],
      "options_hi": ["0", "7", "14", "1"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false
    },
    {
      "num": 9,
      "question_en": "Which mirror is used in a dentist's mirror?",
      "question_hi": "दंत चिकित्सक के दर्पण में कौन सा दर्पण प्रयोग किया जाता है?",
      "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
      "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलाकार दर्पण"],
      "answer_en": "Concave mirror",
      "answer_hi": "अवतल दर्पण",
      "attempted": false
    },
    {
      "num": 10,
      "question_en": "Which metal is present in hemoglobin?",
      "question_hi": "हीमोग्लोबिन में कौन सी धातु होती है?",
      "options_en": ["Iron", "Copper", "Zinc", "Magnesium"],
      "options_hi": ["आयरन", "कॉपर", "जिंक", "मैग्नीशियम"],
      "answer_en": "Iron",
      "answer_hi": "आयरन",
      "attempted": false
    },
    {
      "num": 11,
      "question_en": "What is the process of conversion of a solid directly into gas called?",
      "question_hi": "ठोस का सीधे गैस में परिवर्तन की प्रक्रिया को क्या कहते हैं?",
      "options_en": ["Sublimation", "Evaporation", "Condensation", "Melting"],
      "options_hi": ["उर्ध्वपातन", "वाष्पीकरण", "संघनन", "पिघलना"],
      "answer_en": "Sublimation",
      "answer_hi": "उर्ध्वपातन",
      "attempted": false
    },
    {
      "num": 12,
      "question_en": "Which of the following is a non-metal that is liquid at room temperature?",
      "question_hi": "निम्न में से कौन सा अधातु है जो कमरे के तापमान पर द्रव होता है?",
      "options_en": ["Mercury", "Bromine", "Sodium", "Iron"],
      "options_hi": ["पारा", "ब्रोमीन", "सोडियम", "लोहा"],
      "answer_en": "Bromine",
      "answer_hi": "ब्रोमीन",
      "attempted": false
    },
    {
      "num": 13,
      "question_en": "Which gland is known as the 'master gland'?",
      "question_hi": "किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
      "options_en": ["Thyroid", "Pituitary", "Pancreas", "Adrenal"],
      "options_hi": ["थायरॉयड", "पिट्यूटरी", "अग्न्याशय", "एड्रिनल"],
      "answer_en": "Pituitary",
      "answer_hi": "पिट्यूटरी",
      "attempted": false
    },
    {
      "num": 14,
      "question_en": "What is the chemical name of baking soda?",
      "question_hi": "बेकिंग सोडा का रासायनिक नाम क्या है?",
      "options_en": ["Sodium chloride", "Sodium bicarbonate", "Sodium hydroxide", "Sodium carbonate"],
      "options_hi": ["सोडियम क्लोराइड", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम कार्बोनेट"],
      "answer_en": "Sodium bicarbonate",
      "answer_hi": "सोडियम बाइकार्बोनेट",
      "attempted": false
    },
    {
      "num": 15,
      "question_en": "Which of the following is a vector quantity?",
      "question_hi": "निम्न में से कौन सी सदिश राशि है?",
      "options_en": ["Speed", "Mass", "Force", "Time"],
      "options_hi": ["गति", "द्रव्यमान", "बल", "समय"],
      "answer_en": "Force",
      "answer_hi": "बल",
      "attempted": false
    },
    {
      "num": 16,
      "question_en": "Which gas is responsible for the greenhouse effect?",
      "question_hi": "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
      "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
      "answer_en": "Carbon dioxide",
      "answer_hi": "कार्बन डाइऑक्साइड",
      "attempted": false
    },
    {
      "num": 17,
      "question_en": "Which of the following is a good conductor of electricity?",
      "question_hi": "निम्न में से कौन विद्युत का सुचालक है?",
      "options_en": ["Rubber", "Wood", "Copper", "Plastic"],
      "options_hi": ["रबर", "लकड़ी", "तांबा", "प्लास्टिक"],
      "answer_en": "Copper",
      "answer_hi": "तांबा",
      "attempted": false
    },
    {
      "num": 18,
      "question_en": "What is the main function of white blood cells?",
      "question_hi": "श्वेत रक्त कोशिकाओं का मुख्य कार्य क्या है?",
      "options_en": ["Carry oxygen", "Fight infections", "Clot blood", "Digest food"],
      "options_hi": ["ऑक्सीजन ले जाना", "संक्रमण से लड़ना", "रक्त का थक्का बनाना", "भोजन पचाना"],
      "answer_en": "Fight infections",
      "answer_hi": "संक्रमण से लड़ना",
      "attempted": false
    },
    {
      "num": 19,
      "question_en": "Which of the following is a non-renewable resource?",
      "question_hi": "निम्न में से कौन सा अनवीकरणीय संसाधन है?",
      "options_en": ["Solar energy", "Wind energy", "Coal", "Hydropower"],
      "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "जल विद्युत"],
      "answer_en": "Coal",
      "answer_hi": "कोयला",
      "attempted": false
    },
    {
      "num": 20,
      "question_en": "Which of the following is a balanced chemical equation?",
      "question_hi": "निम्न में से कौन सा संतुलित रासायनिक समीकरण है?",
      "options_en": ["H₂ + O₂ → H₂O", "2H₂ + O₂ → 2H₂O", "H₂ + 2O₂ → H₂O", "2H₂ + 2O₂ → 2H₂O"],
      "options_hi": ["H₂ + O₂ → H₂O", "2H₂ + O₂ → 2H₂O", "H₂ + 2O₂ → H₂O", "2H₂ + 2O₂ → 2H₂O"],
      "answer_en": "2H₂ + O₂ → 2H₂O",
      "answer_hi": "2H₂ + O₂ → 2H₂O",
      "attempted": false
    },
    {
      "num": 21,
      "question_en": "What is the SI unit of pressure?",
      "question_hi": "दाब का SI मात्रक क्या है?",
      "options_en": ["Newton", "Pascal", "Joule", "Watt"],
      "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
      "answer_en": "Pascal",
      "answer_hi": "पास्कल",
      "attempted": false
    },
    {
      "num": 22,
      "question_en": "Which organ produces bile?",
      "question_hi": "कौन सा अंग पित्त का उत्पादन करता है?",
      "options_en": ["Stomach", "Liver", "Pancreas", "Kidney"],
      "options_hi": ["आमाशय", "यकृत", "अग्न्याशय", "गुर्दा"],
      "answer_en": "Liver",
      "answer_hi": "यकृत",
      "attempted": false
    },
    {
      "num": 23,
      "question_en": "Which of the following is a noble gas?",
      "question_hi": "निम्न में से कौन सी एक उत्कृष्ट गैस है?",
      "options_en": ["Hydrogen", "Oxygen", "Helium", "Nitrogen"],
      "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "हीलियम", "नाइट्रोजन"],
      "answer_en": "Helium",
      "answer_hi": "हीलियम",
      "attempted": false
    },
    {
      "num": 24,
      "question_en": "What is the process of conversion of water vapor into liquid called?",
      "question_hi": "जलवाष्प का द्रव में परिवर्तन की प्रक्रिया को क्या कहते हैं?",
      "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
      "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "जमना"],
      "answer_en": "Condensation",
      "answer_hi": "संघनन",
      "attempted": false
    },
    {
      "num": 25,
      "question_en": "Which of the following is a biodegradable waste?",
      "question_hi": "निम्न में से कौन सा जैव निम्नीकरणीय अपशिष्ट है?",
      "options_en": ["Plastic", "Glass", "Paper", "Metal"],
      "options_hi": ["प्लास्टिक", "कांच", "कागज", "धातु"],
      "answer_en": "Paper",
      "answer_hi": "कागज",
      "attempted": false
    },
    {
      "num": 26,
      "question_en": "What is the chemical symbol for gold?",
      "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
      "options_en": ["Go", "Gd", "Au", "Ag"],
      "options_hi": ["Go", "Gd", "Au", "Ag"],
      "answer_en": "Au",
      "answer_hi": "Au",
      "attempted": false
    },
    {
      "num": 27,
      "question_en": "Which part of the human brain controls balance?",
      "question_hi": "मानव मस्तिष्क का कौन सा भाग संतुलन को नियंत्रित करता है?",
      "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
      "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
      "answer_en": "Cerebellum",
      "answer_hi": "सेरेबेलम",
      "attempted": false
    },
    {
      "num": 28,
      "question_en": "What is the main component of biogas?",
      "question_hi": "बायोगैस का मुख्य घटक क्या है?",
      "options_en": ["Methane", "Ethane", "Propane", "Butane"],
      "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
      "answer_en": "Methane",
      "answer_hi": "मीथेन",
      "attempted": false
    },
    {
      "num": 29,
      "question_en": "Which of the following is a synthetic fiber?",
      "question_hi": "निम्न में से कौन सा एक संश्लेषित रेशा है?",
      "options_en": ["Cotton", "Wool", "Silk", "Nylon"],
      "options_hi": ["कपास", "ऊन", "रेशम", "नायलॉन"],
      "answer_en": "Nylon",
      "answer_hi": "नायलॉन",
      "attempted": false
    },
    {
      "num": 30,
      "question_en": "Which gas is used in fire extinguishers?",
      "question_hi": "आग बुझाने के यंत्र में कौन सी गैस प्रयोग की जाती है?",
      "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
      "answer_en": "Carbon dioxide",
      "answer_hi": "कार्बन डाइऑक्साइड",
      "attempted": false
    },
    {
      "num": 31,
      "question_en": "What is the unit of frequency?",
      "question_hi": "आवृत्ति का मात्रक क्या है?",
      "options_en": ["Hertz", "Decibel", "Ohm", "Watt"],
      "options_hi": ["हर्ट्ज", "डेसिबल", "ओम", "वाट"],
      "answer_en": "Hertz",
      "answer_hi": "हर्ट्ज",
      "attempted": false
    },
    {
      "num": 32,
      "question_en": "Which of the following is a greenhouse gas?",
      "question_hi": "निम्न में से कौन सी ग्रीनहाउस गैस है?",
      "options_en": ["Oxygen", "Nitrogen", "Methane", "Hydrogen"],
      "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "मीथेन", "हाइड्रोजन"],
      "answer_en": "Methane",
      "answer_hi": "मीथेन",
      "attempted": false
    },
    {
      "num": 33,
      "question_en": "Which of the following is a non-metal that conducts electricity?",
      "question_hi": "निम्न में से कौन सा अधातु है जो विद्युत का संचालन करता है?",
      "options_en": ["Sulfur", "Graphite", "Phosphorus", "Iodine"],
      "options_hi": ["सल्फर", "ग्रेफाइट", "फॉस्फोरस", "आयोडीन"],
      "answer_en": "Graphite",
      "answer_hi": "ग्रेफाइट",
      "attempted": false
    },
    {
      "num": 34,
      "question_en": "What is the chemical formula of common salt?",
      "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
      "options_en": ["NaCl", "NaOH", "Na₂CO₃", "NaHCO₃"],
      "options_hi": ["NaCl", "NaOH", "Na₂CO₃", "NaHCO₃"],
      "answer_en": "NaCl",
      "answer_hi": "NaCl",
      "attempted": false
    },
    {
      "num": 35,
      "question_en": "Which of the following is a function of the kidney?",
      "question_hi": "निम्न में से कौन सा गुर्दे का कार्य है?",
      "options_en": ["Pumping blood", "Filtering waste", "Producing bile", "Digesting food"],
      "options_hi": ["रक्त पंप करना", "अपशिष्ट छानना", "पित्त उत्पन्न करना", "भोजन पचाना"],
      "answer_en": "Filtering waste",
      "answer_hi": "अपशिष्ट छानना",
      "attempted": false
    },
    {
      "num": 36,
      "question_en": "Which of the following is a renewable source of energy?",
      "question_hi": "निम्न में से कौन सा ऊर्जा का नवीकरणीय स्रोत है?",
      "options_en": ["Coal", "Petroleum", "Solar energy", "Natural gas"],
      "options_hi": ["कोयला", "पेट्रोलियम", "सौर ऊर्जा", "प्राकृतिक गैस"],
      "answer_en": "Solar energy",
      "answer_hi": "सौर ऊर्जा",
      "attempted": false
    },
    {
      "num": 37,
      "question_en": "What is the process of loss of water from leaves called?",
      "question_hi": "पत्तियों से पानी की हानि की प्रक्रिया को क्या कहते हैं?",
      "options_en": ["Transpiration", "Photosynthesis", "Respiration", "Evaporation"],
      "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "वाष्पीकरण"],
      "answer_en": "Transpiration",
      "answer_hi": "वाष्पोत्सर्जन",
      "attempted": false
    },
    {
      "num": 38,
      "question_en": "Which of the following is a characteristic of acids?",
      "question_hi": "निम्न में से कौन सा अम्लों की विशेषता है?",
      "options_en": ["Bitter taste", "Sour taste", "Salty taste", "Sweet taste"],
      "options_hi": ["कड़वा स्वाद", "खट्टा स्वाद", "नमकीन स्वाद", "मीठा स्वाद"],
      "answer_en": "Sour taste",
      "answer_hi": "खट्टा स्वाद",
      "attempted": false
    },
    {
      "num": 39,
      "question_en": "Which of the following is a function of the skeletal system?",
      "question_hi": "निम्न में से कौन सा कंकाल तंत्र का कार्य है?",
      "options_en": ["Producing hormones", "Generating heat", "Providing support", "Digesting food"],
      "options_hi": ["हार्मोन उत्पन्न करना", "ऊष्मा उत्पन्न करना", "सहारा प्रदान करना", "भोजन पचाना"],
      "answer_en": "Providing support",
      "answer_hi": "सहारा प्रदान करना",
      "attempted": false
    },
    {
      "num": 40,
      "question_en": "What is the chemical formula of methane?",
      "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
      "options_en": ["CH₄", "CO₂", "H₂O", "NH₃"],
      "options_hi": ["CH₄", "CO₂", "H₂O", "NH₃"],
      "answer_en": "CH₄",
      "answer_hi": "CH₄",
      "attempted": false
    },
    {
      "num": 41,
      "question_en": "Which of the following is a function of the respiratory system?",
      "question_hi": "निम्न में से कौन सा श्वसन तंत्र का कार्य है?",
      "options_en": ["Pumping blood", "Exchanging gases", "Digesting food", "Filtering blood"],
      "options_hi": ["रक्त पंप करना", "गैसों का आदान-प्रदान करना", "भोजन पचाना", "रक्त छानना"],
      "answer_en": "Exchanging gases",
      "answer_hi": "गैसों का आदान-प्रदान करना",
      "attempted": false
    },
    {
      "num": 42,
      "question_en": "Which of the following is a property of bases?",
      "question_hi": "निम्न में से कौन सा क्षारों का गुण है?",
      "options_en": ["Sour taste", "Bitter taste", "Turns blue litmus red", "Reacts with metals to produce H₂ gas"],
      "options_hi": ["खट्टा स्वाद", "कड़वा स्वाद", "नीले लिटमस को लाल करता है", "धातुओं के साथ प्रतिक्रिया कर H₂ गैस उत्पन्न करता है"],
      "answer_en": "Bitter taste",
      "answer_hi": "कड़वा स्वाद",
      "attempted": false
    },
    {
      "num": 43,
      "question_en": "Which of the following is a function of the circulatory system?",
      "question_hi": "निम्न में से कौन सा परिसंचरण तंत्र का कार्य है?",
      "options_en": ["Producing hormones", "Transporting nutrients", "Filtering waste", "Digesting food"],
      "options_hi": ["हार्मोन उत्पन्न करना", "पोषक तत्वों का परिवहन करना", "अपशिष्ट छानना", "भोजन पचाना"],
      "answer_en": "Transporting nutrients",
      "answer_hi": "पोषक तत्वों का परिवहन करना",
      "attempted": false
    },
    {
      "num": 44,
      "question_en": "What is the chemical name of table salt?",
      "question_hi": "टेबल सॉल्ट का रासायनिक नाम क्या है?",
      "options_en": ["Sodium chloride", "Sodium bicarbonate", "Sodium hydroxide", "Sodium carbonate"],
      "options_hi": ["सोडियम क्लोराइड", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम कार्बोनेट"],
      "answer_en": "Sodium chloride",
      "answer_hi": "सोडियम क्लोराइड",
      "attempted": false
    },
    {
      "num": 45,
      "question_en": "Which of the following is a function of the digestive system?",
      "question_hi": "निम्न में से कौन सा पाचन तंत्र का कार्य है?",
      "options_en": ["Producing hormones", "Transporting oxygen", "Breaking down food", "Filtering blood"],
      "options_hi": ["हार्मोन उत्पन्न करना", "ऑक्सीजन का परिवहन करना", "भोजन को तोड़ना", "रक्त छानना"],
      "answer_en": "Breaking down food",
      "answer_hi": "भोजन को तोड़ना",
      "attempted": false
    },
    {
      "num": 46,
      "question_en": "Which of the following is a function of the excretory system?",
      "question_hi": "निम्न में से कौन सा उत्सर्जन तंत्र का कार्य है?",
      "options_en": ["Producing hormones", "Removing waste", "Transporting oxygen", "Digesting food"],
      "options_hi": ["हार्मोन उत्पन्न करना", "अपशिष्ट हटाना", "ऑक्सीजन का परिवहन करना", "भोजन पचाना"],
      "answer_en": "Removing waste",
      "answer_hi": "अपशिष्ट हटाना",
      "attempted": false
    },
    {
      "num": 47,
      "question_en": "What is the chemical formula of water?",
      "question_hi": "पानी का रासायनिक सूत्र क्या है?",
      "options_en": ["H₂O", "CO₂", "NH₃", "CH₄"],
      "options_hi": ["H₂O", "CO₂", "NH₃", "CH₄"],
      "answer_en": "H₂O",
      "answer_hi": "H₂O",
      "attempted": false
    },
    {
      "num": 48,
      "question_en": "Which of the following is a function of the endocrine system?",
      "question_hi": "निम्न में से कौन सा अंतःस्रावी तंत्र का कार्य है?",
      "options_en": ["Producing hormones", "Transporting oxygen", "Digesting food", "Filtering blood"],
      "options_hi": ["हार्मोन उत्पन्न करना", "ऑक्सीजन का परिवहन करना", "भोजन पचाना", "रक्त छानना"],
      "answer_en": "Producing hormones",
      "answer_hi": "हार्मोन उत्पन्न करना",
      "attempted": false
    },
    {
      "num": 49,
      "question_en": "Which of the following is a function of the muscular system?",
      "question_hi": "निम्न में से कौन सा पेशी तंत्र का कार्य है?",
      "options_en": ["Producing hormones", "Generating movement", "Filtering blood", "Digesting food"],
      "options_hi": ["हार्मोन उत्पन्न करना", "गति उत्पन्न करना", "रक्त छानना", "भोजन पचाना"],
      "answer_en": "Generating movement",
      "answer_hi": "गति उत्पन्न करना",
      "attempted": false
    },
    {
      "num": 50,
      "question_en": "What is the chemical formula of carbon dioxide?",
      "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
      "options_en": ["CO", "CO₂", "C₂O", "C₃O₂"],
      "options_hi": ["CO", "CO₂", "C₂O", "C₃O₂"],
      "answer_en": "CO₂",
      "answer_hi": "CO₂",
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