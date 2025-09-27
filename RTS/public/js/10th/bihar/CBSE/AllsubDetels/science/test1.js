
const questions = [
    {
        "num": 1,
        "question_en": "What is the SI unit of electric current?",
        "question_hi": "विद्युत धारा की SI इकाई क्या है?",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "subject": "Physics"
      },
      {
        "num": 2,
        "question_en": "Which of the following is a good conductor of electricity?",
        "question_hi": "निम्नलिखित में से कौन विद्युत का सुचालक है?",
        "options_en": ["Wood", "Glass", "Copper", "Plastic"],
        "options_hi": ["लकड़ी", "कांच", "तांबा", "प्लास्टिक"],
        "answer_en": "Copper",
        "answer_hi": "तांबा",
        "subject": "Physics"
      },
      {
        "num": 3,
        "question_en": "Which gas is used in the preparation of soda water?",
        "question_hi": "सोडा वाटर बनाने में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "subject": "Chemistry"
      },
      {
        "num": 4,
        "question_en": "Which acid is present in lemon?",
        "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Oxalic acid"],
        "options_hi": ["एसीटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "ऑक्सेलिक अम्ल"],
        "answer_en": "Citric acid",
        "answer_hi": "साइट्रिक अम्ल",
        "subject": "Chemistry"
      },
      {
        "num": 5,
        "question_en": "Which organ is responsible for pumping blood?",
        "question_hi": "कौन सा अंग रक्त पंप करने के लिए उत्तरदायी है?",
        "options_en": ["Lungs", "Brain", "Heart", "Liver"],
        "options_hi": ["फेफड़े", "मस्तिष्क", "हृदय", "यकृत"],
        "answer_en": "Heart",
        "answer_hi": "हृदय",
        "subject": "Biology"
      },
      {
        "num": 6,
        "question_en": "Which part of the plant conducts photosynthesis?",
        "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ता", "फूल"],
        "answer_en": "Leaf",
        "answer_hi": "पत्ता",
        "subject": "Biology"
      },
      {
        "num": 7,
        "question_en": "What is the unit of resistance?",
        "question_hi": "प्रतिरोध की इकाई क्या है?",
        "options_en": ["Ohm", "Volt", "Watt", "Ampere"],
        "options_hi": ["ओम", "वोल्ट", "वाट", "एम्पियर"],
        "answer_en": "Ohm",
        "answer_hi": "ओम",
        "subject": "Physics"
      },
      {
        "num": 8,
        "question_en": "Which metal is the best conductor of electricity?",
        "question_hi": "कौन सी धातु विद्युत की सबसे अच्छी चालक है?",
        "options_en": ["Iron", "Aluminium", "Silver", "Gold"],
        "options_hi": ["लोहा", "एल्युमिनियम", "चाँदी", "सोना"],
        "answer_en": "Silver",
        "answer_hi": "चाँदी",
        "subject": "Physics"
      },
      {
        "num": 9,
        "question_en": "Which of the following is a physical change?",
        "question_hi": "निम्नलिखित में से कौन एक भौतिक परिवर्तन है?",
        "options_en": ["Burning of paper", "Melting of ice", "Rusting of iron", "Cooking of food"],
        "options_hi": ["कागज का जलना", "बर्फ का पिघलना", "लोहे का जंग लगना", "खाना पकाना"],
        "answer_en": "Melting of ice",
        "answer_hi": "बर्फ का पिघलना",
        "subject": "Chemistry"
      },
      {
        "num": 10,
        "question_en": "Which of the following diseases is caused by a virus?",
        "question_hi": "निम्न में से कौन सा रोग वायरस से होता है?",
        "options_en": ["Tuberculosis", "Typhoid", "AIDS", "Cholera"],
        "options_hi": ["टीबी", "टाइफाइड", "एड्स", "हैजा"],
        "answer_en": "AIDS",
        "answer_hi": "एड्स",
        "subject": "Biology"
      },
      {
        "num": 11,
        "question_en": "Which element is essential for the formation of chlorophyll?",
        "question_hi": "क्लोरोफिल के निर्माण के लिए कौन सा तत्व आवश्यक है?",
        "options_en": ["Iron", "Magnesium", "Calcium", "Potassium"],
        "options_hi": ["लोहा", "मैग्नीशियम", "कैल्शियम", "पोटैशियम"],
        "answer_en": "Magnesium",
        "answer_hi": "मैग्नीशियम",
        "subject": "Biology"
      },
      {
        "num": 12,
        "question_en": "Which of the following has highest pH?",
        "question_hi": "निम्न में से किसका pH सबसे अधिक होता है?",
        "options_en": ["Lemon juice", "Vinegar", "Soap solution", "Milk"],
        "options_hi": ["नींबू का रस", "सिरका", "साबुन का घोल", "दूध"],
        "answer_en": "Soap solution",
        "answer_hi": "साबुन का घोल",
        "subject": "Chemistry"
      },
      {
        "num": 13,
        "question_en": "Which gas is produced during respiration?",
        "question_hi": "श्वसन के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "subject": "Biology"
      },
      {
        "num": 14,
        "question_en": "Which type of lens is used to correct myopia?",
        "question_hi": "मायोपिया को ठीक करने के लिए किस प्रकार का लेंस प्रयोग किया जाता है?",
        "options_en": ["Convex lens", "Concave lens", "Cylindrical lens", "None"],
        "options_hi": ["उत्तल लेंस", "अवतल लेंस", "बेलनाकार लेंस", "कोई नहीं"],
        "answer_en": "Concave lens",
        "answer_hi": "अवतल लेंस",
        "subject": "Physics"
      },
      {
        "num": 15,
        "question_en": "Which among these is a non-renewable resource?",
        "question_hi": "इनमें से कौन सा अक्षय संसाधन नहीं है?",
        "options_en": ["Wind energy", "Solar energy", "Coal", "Water"],
        "options_hi": ["पवन ऊर्जा", "सौर ऊर्जा", "कोयला", "पानी"],
        "answer_en": "Coal",
        "answer_hi": "कोयला",
        "subject": "Chemistry"
      },
      {
        "num": 16,
        "question_en": "Which of the following is a unicellular organism?",
        "question_hi": "निम्न में से कौन एक एककोशिकीय जीव है?",
        "options_en": ["Amoeba", "Earthworm", "Frog", "Human"],
        "options_hi": ["अमीबा", "केंचुआ", "मेंढक", "मनुष्य"],
        "answer_en": "Amoeba",
        "answer_hi": "अमीबा",
        "subject": "Biology"
      },
      {
        "num": 17,
        "question_en": "What is the chemical formula of water?",
        "question_hi": "पानी का रासायनिक सूत्र क्या है?",
        "options_en": ["H2O", "CO2", "O2", "NaCl"],
        "options_hi": ["H2O", "CO2", "O2", "NaCl"],
        "answer_en": "H2O",
        "answer_hi": "H2O",
        "subject": "Chemistry"
      },
      {
        "num": 18,
        "question_en": "Which mirror is used in vehicle rearview?",
        "question_hi": "वाहनों के पीछे देखने वाले दर्पण में कौन सा दर्पण प्रयोग होता है?",
        "options_en": ["Concave", "Convex", "Plane", "None"],
        "options_hi": ["अवतल", "उत्तल", "समतल", "कोई नहीं"],
        "answer_en": "Convex",
        "answer_hi": "उत्तल",
        "subject": "Physics"
      },
      {
        "num": 19,
        "question_en": "Which vitamin is obtained from sunlight?",
        "question_hi": "सूर्य की रोशनी से कौन सा विटामिन प्राप्त होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "subject": "Biology"
      },
      {
        "num": 20,
        "question_en": "Which of the following is a greenhouse gas?",
        "question_hi": "निम्नलिखित में से कौन सी एक ग्रीनहाउस गैस है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "subject": "Chemistry"
      },
      {
        "num": 21,
        "question_en": "Which part of the human brain controls voluntary actions?",
        "question_hi": "मानव मस्तिष्क का कौन सा भाग इच्छानुसार क्रियाओं को नियंत्रित करता है?",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
        "options_hi": ["सेरेब्रलम", "सेरेबेलम", "मेडुला", "पॉन्स"],
        "answer_en": "Cerebrum",
        "answer_hi": "सेरेब्रलम",
        "subject": "Biology"
      },
      {
        "num": 22,
        "question_en": "Which of the following metals is liquid at room temperature?",
        "question_hi": "निम्न में से कौन सी धातु कमरे के तापमान पर द्रव होती है?",
        "options_en": ["Mercury", "Gold", "Aluminum", "Silver"],
        "options_hi": ["पारा", "सोना", "एल्युमिनियम", "चांदी"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "subject": "Chemistry"
      },
      {
        "num": 23,
        "question_en": "Which phenomenon is responsible for the twinkling of stars?",
        "question_hi": "तारों के टिमटिमाने के लिए कौन सी घटना जिम्मेदार है?",
        "options_en": ["Reflection", "Refraction", "Dispersion", "Diffraction"],
        "options_hi": ["परावर्तन", "अपवर्तन", "प्रकीर्णन", "प्रसरण"],
        "answer_en": "Refraction",
        "answer_hi": "अपवर्तन",
        "subject": "Physics"
      },
      {
        "num": 24,
        "question_en": "Which hormone regulates the blood sugar level?",
        "question_hi": "कौन सा हार्मोन रक्त शर्करा स्तर को नियंत्रित करता है?",
        "options_en": ["Adrenaline", "Insulin", "Thyroxine", "Estrogen"],
        "options_hi": ["एड्रेनालाईन", "इंसुलिन", "थायरॉक्सिन", "एस्ट्रोजन"],
        "answer_en": "Insulin",
        "answer_hi": "इंसुलिन",
        "subject": "Biology"
      },
      {
        "num": 25,
        "question_en": "What is the pH value of pure water?",
        "question_hi": "शुद्ध जल का pH मान क्या होता है?",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "subject": "Chemistry"
      },
      {
        "num": 26,
        "question_en": "Which of the following is not a renewable source of energy?",
        "question_hi": "निम्न में से कौन अक्षय ऊर्जा स्रोत नहीं है?",
        "options_en": ["Sunlight", "Wind", "Coal", "Hydropower"],
        "options_hi": ["सूर्य की रोशनी", "पवन", "कोयला", "जल विद्युत"],
        "answer_en": "Coal",
        "answer_hi": "कोयला",
        "subject": "Chemistry"
      },
      {
        "num": 27,
        "question_en": "Which is the functional unit of the kidney?",
        "question_hi": "गुर्दे की कार्यात्मक इकाई कौन सी है?",
        "options_en": ["Neuron", "Nephron", "Alveoli", "Axon"],
        "options_hi": ["न्यूरॉन", "नेफ्रॉन", "एल्वियोली", "एक्सॉन"],
        "answer_en": "Nephron",
        "answer_hi": "नेफ्रॉन",
        "subject": "Biology"
      },
      {
        "num": 28,
        "question_en": "Which color of light is scattered the most in the atmosphere?",
        "question_hi": "वायुमंडल में सबसे अधिक बिखरने वाला रंग कौन सा है?",
        "options_en": ["Red", "Green", "Blue", "Yellow"],
        "options_hi": ["लाल", "हरा", "नीला", "पीला"],
        "answer_en": "Blue",
        "answer_hi": "नीला",
        "subject": "Physics"
      },
      {
        "num": 29,
        "question_en": "Which one of the following is used in the preparation of soap?",
        "question_hi": "निम्न में से किसका प्रयोग साबुन बनाने में किया जाता है?",
        "options_en": ["HCl", "NaOH", "HNO3", "K2SO4"],
        "options_hi": ["HCl", "NaOH", "HNO3", "K2SO4"],
        "answer_en": "NaOH",
        "answer_hi": "NaOH",
        "subject": "Chemistry"
      },
      {
        "num": 30,
        "question_en": "Which disease is caused due to the deficiency of iodine?",
        "question_hi": "आयोडीन की कमी से कौन सा रोग होता है?",
        "options_en": ["Scurvy", "Goitre", "Rickets", "Anaemia"],
        "options_hi": ["सकर्वी", "घेंघा", "रिकेट्स", "एनीमिया"],
        "answer_en": "Goitre",
        "answer_hi": "घेंघा",
        "subject": "Biology"
      },
      {
        "num": 31,
        "question_en": "Which mirror is used in solar furnaces?",
        "question_hi": "सौर भट्ठी में किस दर्पण का उपयोग किया जाता है?",
        "options_en": ["Concave mirror", "Convex mirror", "Plane mirror", "None of these"],
        "options_hi": ["अवतल दर्पण", "उत्तल दर्पण", "समतल दर्पण", "इनमें से कोई नहीं"],
        "answer_en": "Concave mirror",
        "answer_hi": "अवतल दर्पण",
        "subject": "Physics"
      },
      {
        "num": 32,
        "question_en": "Which gas is used for the ripening of fruits?",
        "question_hi": "फलों को पकाने के लिए कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Ethylene", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "एथिलीन", "नाइट्रोजन"],
        "answer_en": "Ethylene",
        "answer_hi": "एथिलीन",
        "subject": "Biology"
      },
      {
        "num": 33,
        "question_en": "Which gas is produced during photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "subject": "Biology"
      },
      {
        "num": 34,
        "question_en": "Which part of the eye controls the amount of light entering it?",
        "question_hi": "आंख का कौन सा भाग उसमें प्रवेश करने वाली रोशनी की मात्रा को नियंत्रित करता है?",
        "options_en": ["Retina", "Lens", "Cornea", "Iris"],
        "options_hi": ["रेटिना", "लेंस", "कॉर्निया", "आइरिस"],
        "answer_en": "Iris",
        "answer_hi": "आइरिस",
        "subject": "Physics"
      },
      {
        "num": 35,
        "question_en": "Which acid is present in vinegar?",
        "question_hi": "सिरके में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Formic acid", "Acetic acid", "Oxalic acid", "Citric acid"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "ऑक्सैलिक अम्ल", "सिट्रिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "subject": "Chemistry"
      },
      {
        "num": 36,
        "question_en": "What is the main excretory product in humans?",
        "question_hi": "मानवों में मुख्य उत्सर्जी उत्पाद क्या है?",
        "options_en": ["Uric acid", "Ammonia", "Urea", "CO2"],
        "options_hi": ["यूरिक अम्ल", "अमोनिया", "यूरिया", "CO2"],
        "answer_en": "Urea",
        "answer_hi": "यूरिया",
        "subject": "Biology"
      },
      {
        "num": 37,
        "question_en": "Which of the following is biodegradable?",
        "question_hi": "निम्न में से कौन जैविक अपघटनीय है?",
        "options_en": ["Plastic", "Aluminium foil", "Paper", "Polythene"],
        "options_hi": ["प्लास्टिक", "एल्युमिनियम फॉइल", "कागज", "पॉलीथिन"],
        "answer_en": "Paper",
        "answer_hi": "कागज",
        "subject": "Biology"
      },
      {
        "num": 38,
        "question_en": "Which of the following is responsible for acid rain?",
        "question_hi": "निम्न में से कौन अम्ल वर्षा के लिए जिम्मेदार है?",
        "options_en": ["CO", "CO2", "NO2", "O2"],
        "options_hi": ["CO", "CO2", "NO2", "O2"],
        "answer_en": "NO2",
        "answer_hi": "NO2",
        "subject": "Chemistry"
      },
      {
        "num": 39,
        "question_en": "Which component of blood helps in clotting?",
        "question_hi": "रक्त का कौन सा घटक थक्के बनाने में मदद करता है?",
        "options_en": ["RBC", "WBC", "Platelets", "Plasma"],
        "options_hi": ["RBC", "WBC", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "Platelets",
        "answer_hi": "प्लेटलेट्स",
        "subject": "Biology"
      },
      {
        "num": 40,
        "question_en": "What type of image is formed by a plane mirror?",
        "question_hi": "समतल दर्पण द्वारा किस प्रकार की छवि बनती है?",
        "options_en": ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
        "options_hi": ["वास्तविक और उलटी", "आभासी और सीधी", "वास्तविक और सीधी", "आभासी और उलटी"],
        "answer_en": "Virtual and erect",
        "answer_hi": "आभासी और सीधी",
        "subject": "Physics"
      },
      {
        "num": 41,
        "question_en": "Which metal is the best conductor of electricity?",
        "question_hi": "कौन सी धातु विद्युत की सबसे अच्छी चालक है?",
        "options_en": ["Aluminium", "Copper", "Silver", "Iron"],
        "options_hi": ["एल्युमिनियम", "तांबा", "चांदी", "लोहा"],
        "answer_en": "Silver",
        "answer_hi": "चांदी",
        "subject": "Physics"
      },
      {
        "num": 42,
        "question_en": "Which of the following has the highest refractive index?",
        "question_hi": "निम्न में से किसका अपवर्तनांक सबसे अधिक होता है?",
        "options_en": ["Water", "Glass", "Diamond", "Air"],
        "options_hi": ["पानी", "कांच", "हीरा", "वायु"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "subject": "Physics"
      },
      {
        "num": 43,
        "question_en": "What is the unit of electric current?",
        "question_hi": "विद्युत धारा की इकाई क्या है?",
        "options_en": ["Volt", "Ohm", "Ampere", "Watt"],
        "options_hi": ["वोल्ट", "ओम", "एम्पीयर", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पीयर",
        "subject": "Physics"
      },
      {
        "num": 44,
        "question_en": "Which of the following is a greenhouse gas?",
        "question_hi": "निम्न में से कौन एक हरितगृह गैस है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "subject": "Chemistry"
      },
      {
        "num": 45,
        "question_en": "Which organ is known as the ‘filter’ of the human body?",
        "question_hi": "मानव शरीर में किस अंग को 'फिल्टर' कहा जाता है?",
        "options_en": ["Heart", "Lungs", "Kidney", "Liver"],
        "options_hi": ["हृदय", "फेफड़े", "गुर्दा", "यकृत"],
        "answer_en": "Kidney",
        "answer_hi": "गुर्दा",
        "subject": "Biology"
      },
      {
        "num": 46,
        "question_en": "Which vitamin is synthesized in our body in the presence of sunlight?",
        "question_hi": "सूर्य के प्रकाश में हमारे शरीर में कौन सा विटामिन बनता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "subject": "Biology"
      },
      {
        "num": 47,
        "question_en": "Which non-metal is a good conductor of electricity?",
        "question_hi": "कौन सा अधातु विद्युत का अच्छा चालक है?",
        "options_en": ["Sulphur", "Phosphorus", "Graphite", "Chlorine"],
        "options_hi": ["सल्फर", "फॉस्फोरस", "ग्रेफाइट", "क्लोरीन"],
        "answer_en": "Graphite",
        "answer_hi": "ग्रेफाइट",
        "subject": "Chemistry"
      },
      {
        "num": 48,
        "question_en": "The process of conversion of gas into liquid is called?",
        "question_hi": "गैस को द्रव में बदलने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Evaporation", "Condensation", "Sublimation", "Boiling"],
        "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "उबालना"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "subject": "Chemistry"
      },
      {
        "num": 49,
        "question_en": "Which device is used to measure current?",
        "question_hi": "विद्युत धारा को मापने के लिए किस यंत्र का उपयोग किया जाता है?",
        "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Multimeter"],
        "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वानोमीटर", "मल्टीमीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "एमीटर",
        "subject": "Physics"
      },
      {
        "num": 50,
        "question_en": "What is the basic unit of heredity?",
        "question_hi": "अनुवांशिकता की मूल इकाई क्या है?",
        "options_en": ["Chromosome", "Gene", "DNA", "RNA"],
        "options_hi": ["गुणसूत्र", "जीन", "डीएनए", "आरएनए"],
        "answer_en": "Gene",
        "answer_hi": "जीन",
        "subject": "Biology"
      },
      {
        "num": 51,
        "question_en": "Which gas is evolved when zinc reacts with dilute sulphuric acid?",
        "question_hi": "जब जिंक को तनु सल्फ्यूरिक अम्ल से अभिक्रिया कराई जाती है, तो कौन सी गैस उत्पन्न होती है?",
        "options_en": ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
        "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "subject": "Chemistry"
      },
      {
        "num": 52,
        "question_en": "The human heart has how many chambers?",
        "question_hi": "मानव हृदय में कितने कक्ष होते हैं?",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "4",
        "answer_hi": "4",
        "subject": "Biology"
      },
      {
        "num": 53,
        "question_en": "Which type of image is formed by a convex lens if the object is placed between the focus and the lens?",
        "question_hi": "यदि उत्तल लेंस और फोकस के बीच वस्तु रखी जाती है, तो किस प्रकार की छवि बनती है?",
        "options_en": ["Real and inverted", "Virtual and erect", "Real and erect", "No image"],
        "options_hi": ["वास्तविक और उलटी", "आभासी और सीधी", "वास्तविक और सीधी", "कोई छवि नहीं"],
        "answer_en": "Virtual and erect",
        "answer_hi": "आभासी और सीधी",
        "subject": "Physics"
      },
      {
        "num": 54,
        "question_en": "Which is the largest gland in the human body?",
        "question_hi": "मानव शरीर में सबसे बड़ी ग्रंथि कौन सी है?",
        "options_en": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
        "options_hi": ["अग्न्याशय", "यकृत", "थाइरॉयड", "पिट्यूटरी"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "subject": "Biology"
      },
      {
        "num": 55,
        "question_en": "Which gas is used in fire extinguishers?",
        "question_hi": "अग्निशामकों में किस गैस का उपयोग किया जाता है?",
        "options_en": ["Oxygen", "Carbon monoxide", "Nitrogen", "Carbon dioxide"],
        "options_hi": ["ऑक्सीजन", "कार्बन मोनोऑक्साइड", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "subject": "Chemistry"
      },
      {
        "num": 56,
        "question_en": "Which of the following is a unicellular organism?",
        "question_hi": "निम्न में से कौन एक एककोशिकीय जीव है?",
        "options_en": ["Amoeba", "Earthworm", "Frog", "Fish"],
        "options_hi": ["अमीबा", "केंचुआ", "मेंढक", "मछली"],
        "answer_en": "Amoeba",
        "answer_hi": "अमीबा",
        "subject": "Biology"
      },
      {
        "num": 57,
        "question_en": "The SI unit of power is:",
        "question_hi": "शक्ति की SI इकाई क्या है?",
        "options_en": ["Joule", "Watt", "Newton", "Ampere"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "एम्पीयर"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "subject": "Physics"
      },
      {
        "num": 58,
        "question_en": "Which acid is present in lemon?",
        "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Acetic acid", "Formic acid", "Citric acid", "Lactic acid"],
        "options_hi": ["एसिटिक अम्ल", "फॉर्मिक अम्ल", "सिट्रिक अम्ल", "लैक्टिक अम्ल"],
        "answer_en": "Citric acid",
        "answer_hi": "सिट्रिक अम्ल",
        "subject": "Chemistry"
      },
      {
        "num": 59,
        "question_en": "Which of the following is a conductor?",
        "question_hi": "निम्न में से कौन चालक है?",
        "options_en": ["Rubber", "Plastic", "Glass", "Copper"],
        "options_hi": ["रबर", "प्लास्टिक", "कांच", "तांबा"],
        "answer_en": "Copper",
        "answer_hi": "तांबा",
        "subject": "Physics"
      },
      {
        "num": 60,
        "question_en": "In which organ does the digestion of protein begin?",
        "question_hi": "शरीर के किस अंग में प्रोटीन का पाचन प्रारंभ होता है?",
        "options_en": ["Mouth", "Stomach", "Small intestine", "Large intestine"],
        "options_hi": ["मुख", "आमाशय", "छोटी आंत", "बड़ी आंत"],
        "answer_en": "Stomach",
        "answer_hi": "आमाशय",
        "subject": "Biology"
      },
      {
        "num": 61,
        "question_en": "Which of the following is used in pencils?",
        "question_hi": "पेंसिल में निम्न में से किसका उपयोग होता है?",
        "options_en": ["Graphite", "Charcoal", "Coal", "Lead"],
        "options_hi": ["ग्रेफाइट", "चारकोल", "कोयला", "लेड"],
        "answer_en": "Graphite",
        "answer_hi": "ग्रेफाइट",
        "subject": "Chemistry"
      },
      {
        "num": 62,
        "question_en": "Which instrument is used to measure atmospheric pressure?",
        "question_hi": "वायुमंडलीय दाब को मापने के लिए किस यंत्र का उपयोग किया जाता है?",
        "options_en": ["Barometer", "Thermometer", "Hygrometer", "Ammeter"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एमीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "subject": "Physics"
      },
      {
        "num": 63,
        "question_en": "Which blood cells help in fighting infection?",
        "question_hi": "कौन सी रक्त कोशिकाएं संक्रमण से लड़ने में मदद करती हैं?",
        "options_en": ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        "options_hi": ["लाल रक्त कोशिकाएं", "सफेद रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
        "answer_en": "White blood cells",
        "answer_hi": "सफेद रक्त कोशिकाएं",
        "subject": "Biology"
      },
      {
        "num": 64,
        "question_en": "Which of the following is used to test acids and bases?",
        "question_hi": "अम्ल और क्षार की पहचान के लिए निम्न में से किसका उपयोग किया जाता है?",
        "options_en": ["Vinegar", "Salt", "Litmus", "Baking soda"],
        "options_hi": ["सिरका", "नमक", "लिटमस", "बेकिंग सोडा"],
        "answer_en": "Litmus",
        "answer_hi": "लिटमस",
        "subject": "Chemistry"
      },
      {
        "num": 65,
        "question_en": "Which device converts chemical energy into electrical energy?",
        "question_hi": "कौन सा यंत्र रासायनिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करता है?",
        "options_en": ["Dynamo", "Battery", "Transformer", "Generator"],
        "options_hi": ["डायनामो", "बैटरी", "ट्रांसफॉर्मर", "जनरेटर"],
        "answer_en": "Battery",
        "answer_hi": "बैटरी",
        "subject": "Physics"
      },
      {
        "num": 66,
        "question_en": "Which cell organelle is known as the powerhouse of the cell?",
        "question_hi": "कोशिका की कौन सी अंगक शक्ति गृह (powerhouse) कहलाती है?",
        "options_en": ["Ribosome", "Chloroplast", "Nucleus", "Mitochondria"],
        "options_hi": ["राइबोसोम", "क्लोरोप्लास्ट", "नाभिक", "माइटोकॉन्ड्रिया"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "subject": "Biology"
      },
      {
        "num": 67,
        "question_en": "Which phenomenon is involved in the formation of a rainbow?",
        "question_hi": "इंद्रधनुष बनने में कौन सी घटना शामिल है?",
        "options_en": ["Reflection", "Refraction", "Dispersion", "All of these"],
        "options_hi": ["परावर्तन", "अपवर्तन", "प्रकीर्णन", "इनमें सभी"],
        "answer_en": "All of these",
        "answer_hi": "इनमें सभी",
        "subject": "Physics"
      },
      {
        "num": 68,
        "question_en": "Which of the following is an insulator?",
        "question_hi": "निम्न में से कौन कुचालक है?",
        "options_en": ["Aluminum", "Iron", "Copper", "Plastic"],
        "options_hi": ["एल्युमिनियम", "लोहा", "तांबा", "प्लास्टिक"],
        "answer_en": "Plastic",
        "answer_hi": "प्लास्टिक",
        "subject": "Physics"
      },
      {
        "num": 69,
        "question_en": "Which part of the plant is mainly responsible for photosynthesis?",
        "question_hi": "पौधे का कौन सा भाग मुख्य रूप से प्रकाश संश्लेषण के लिए जिम्मेदार होता है?",
        "options_en": ["Root", "Stem", "Leaf", "Flower"],
        "options_hi": ["जड़", "तना", "पत्ता", "फूल"],
        "answer_en": "Leaf",
        "answer_hi": "पत्ता",
        "subject": "Biology"
      },
      {
        "num": 70,
        "question_en": "Which substance is used for whitewashing walls?",
        "question_hi": "दीवारों को सफेद करने के लिए किस पदार्थ का प्रयोग किया जाता है?",
        "options_en": ["Quick lime", "Bleaching powder", "Slaked lime", "Limestone"],
        "options_hi": ["क्विक लाइम", "ब्लीचिंग पाउडर", "स्लेक्ड लाइम", "लाइमस्टोन"],
        "answer_en": "Slaked lime",
        "answer_hi": "स्लेक्ड लाइम",
        "subject": "Chemistry"
      },
      {
        "num": 71,
        "question_en": "What is the unit of power?",
        "question_hi": "शक्ति की इकाई क्या है?",
        "options_en": ["Watt", "Newton", "Joule", "Pascal"],
        "options_hi": ["वाट", "न्यूटन", "जूल", "पास्कल"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "subject": "Physics"
      },
      {
        "num": 72,
        "question_en": "Which of the following is used for making vinegar?",
        "question_hi": "निम्न में से किसका उपयोग सिरका बनाने में किया जाता है?",
        "options_en": ["Formic acid", "Acetic acid", "Hydrochloric acid", "Sulphuric acid"],
        "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "subject": "Chemistry"
      },
      {
        "num": 73,
        "question_en": "The human heart has how many chambers?",
        "question_hi": "मानव हृदय में कितने कक्ष होते हैं?",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "4",
        "answer_hi": "4",
        "subject": "Biology"
      },
      {
        "num": 74,
        "question_en": "Which of the following lenses is used to correct myopia?",
        "question_hi": "निकट दृष्टि दोष को ठीक करने के लिए निम्न में से कौन सा लेंस प्रयोग किया जाता है?",
        "options_en": ["Convex lens", "Concave lens", "Cylindrical lens", "None of these"],
        "options_hi": ["उत्तल लेंस", "अवतल लेंस", " बेलनाकार लेंस", "इनमें से कोई नहीं"],
        "answer_en": "Concave lens",
        "answer_hi": "अवतल लेंस",
        "subject": "Physics"
      },
      {
        "num": 75,
        "question_en": "Which of the following is a renewable source of energy?",
        "question_hi": "निम्न में से कौन ऊर्जा का अक्षय स्रोत है?",
        "options_en": ["Coal", "Petroleum", "Wind", "Natural gas"],
        "options_hi": ["कोयला", "पेट्रोलियम", "पवन", "प्राकृतिक गैस"],
        "answer_en": "Wind",
        "answer_hi": "पवन",
        "subject": "Physics"
      },
      {
        "num": 76,
        "question_en": "Which hormone is responsible for the growth of plants?",
        "question_hi": "पौधों की वृद्धि के लिए कौन सा हार्मोन जिम्मेदार होता है?",
        "options_en": ["Auxin", "Insulin", "Adrenaline", "Thyroxine"],
        "options_hi": ["ऑक्सिन", "इंसुलिन", "एड्रेनालिन", "थायरॉक्सिन"],
        "answer_en": "Auxin",
        "answer_hi": "ऑक्सिन",
        "subject": "Biology"
      },
      {
        "num": 77,
        "question_en": "Which gas is evolved when zinc reacts with dilute HCl?",
        "question_hi": "जब जिंक को dilute HCl से अभिक्रिया कराई जाती है, तो कौन सी गैस निकलती है?",
        "options_en": ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"],
        "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "क्लोरीन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "subject": "Chemistry"
      },
      {
        "num": 78,
        "question_en": "Which part of the plant conducts food?",
        "question_hi": "पौधे का कौन सा भाग भोजन का परिवहन करता है?",
        "options_en": ["Xylem", "Phloem", "Root", "Leaf"],
        "options_hi": ["जाइलम", "फ्लोएम", "जड़", "पत्ता"],
        "answer_en": "Phloem",
        "answer_hi": "फ्लोएम",
        "subject": "Biology"
      },
      {
        "num": 79,
        "question_en": "Which law states that mass can neither be created nor destroyed?",
        "question_hi": "कौन सा नियम कहता है कि द्रव्यमान न तो उत्पन्न किया जा सकता है और न ही नष्ट?",
        "options_en": ["Law of constant proportion", "Law of conservation of mass", "Boyle’s law", "Dalton’s law"],
        "options_hi": ["सदा अनुपात का नियम", "द्रव्यमान संरक्षण का नियम", "बॉयल का नियम", "डाल्टन का नियम"],
        "answer_en": "Law of conservation of mass",
        "answer_hi": "द्रव्यमान संरक्षण का नियम",
        "subject": "Chemistry"
      },
      {
        "num": 80,
        "question_en": "Which device is used to measure current?",
        "question_hi": "विद्युत धारा मापने के लिए किस यंत्र का उपयोग किया जाता है?",
        "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
        "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "ओमीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "एमीटर",
        "subject": "Physics"
      },
      {
        "num": 81,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु सामान्य तापमान पर द्रव अवस्था में होती है?",
        "options_en": ["Iron", "Mercury", "Aluminium", "Copper"],
        "options_hi": ["लोहा", "पारा", "एल्युमिनियम", "तांबा"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "subject": "Chemistry"
      },
      {
        "num": 82,
        "question_en": "Which of the following organisms can do photosynthesis?",
        "question_hi": "निम्न में से कौन सा जीव प्रकाश संश्लेषण कर सकता है?",
        "options_en": ["Fungi", "Bacteria", "Virus", "Amoeba"],
        "options_hi": ["फफूंदी", "बैक्टीरिया", "वायरस", "अमीबा"],
        "answer_en": "Bacteria",
        "answer_hi": "बैक्टीरिया",
        "subject": "Biology"
      },
      {
        "num": 83,
        "question_en": "Which mirror is used by dentists to examine teeth?",
        "question_hi": "दाँतों की जाँच के लिए दंत चिकित्सक किस दर्पण का उपयोग करते हैं?",
        "options_en": ["Concave mirror", "Convex mirror", "Plane mirror", "None"],
        "options_hi": ["अवतल दर्पण", "उत्तल दर्पण", "समतल दर्पण", "कोई नहीं"],
        "answer_en": "Concave mirror",
        "answer_hi": "अवतल दर्पण",
        "subject": "Physics"
      },
      {
        "num": 84,
        "question_en": "Which of the following is a biodegradable substance?",
        "question_hi": "निम्न में से कौन सा पदार्थ जैव अपघटनीय है?",
        "options_en": ["Plastic", "Glass", "Paper", "Aluminium"],
        "options_hi": ["प्लास्टिक", "कांच", "कागज", "एल्युमिनियम"],
        "answer_en": "Paper",
        "answer_hi": "कागज",
        "subject": "Biology"
      },
      {
        "num": 85,
        "question_en": "Which acid is found in the stomach?",
        "question_hi": "पेट में कौन सा अम्ल पाया जाता है?",
        "options_en": ["Sulphuric acid", "Hydrochloric acid", "Nitric acid", "Citric acid"],
        "options_hi": ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "सिट्रिक अम्ल"],
        "answer_en": "Hydrochloric acid",
        "answer_hi": "हाइड्रोक्लोरिक अम्ल",
        "subject": "Chemistry"
      },
      {
        "num": 86,
        "question_en": "What is the main function of red blood cells?",
        "question_hi": "लाल रक्त कोशिकाओं का मुख्य कार्य क्या है?",
        "options_en": ["Fighting infection", "Clotting blood", "Carrying oxygen", "Producing antibodies"],
        "options_hi": ["संक्रमण से लड़ना", "रक्त का थक्का बनाना", "ऑक्सीजन ले जाना", "एंटीबॉडी बनाना"],
        "answer_en": "Carrying oxygen",
        "answer_hi": "ऑक्सीजन ले जाना",
        "subject": "Biology"
      },
      {
        "num": 87,
        "question_en": "Which of the following shows acidic nature?",
        "question_hi": "निम्न में से कौन अम्लीय प्रकृति को दर्शाता है?",
        "options_en": ["Blue litmus turning red", "Red litmus turning blue", "No color change", "All of these"],
        "options_hi": ["नीला लिटमस लाल हो जाना", "लाल लिटमस नीला हो जाना", "कोई रंग परिवर्तन नहीं", "इनमें सभी"],
        "answer_en": "Blue litmus turning red",
        "answer_hi": "नीला लिटमस लाल हो जाना",
        "subject": "Chemistry"
      },
      {
        "num": 88,
        "question_en": "Which part of the eye controls the amount of light entering it?",
        "question_hi": "आँख का कौन सा भाग उसमें प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
        "options_en": ["Cornea", "Lens", "Iris", "Retina"],
        "options_hi": ["कॉर्निया", "लेंस", "आईरिस", "रेटिना"],
        "answer_en": "Iris",
        "answer_hi": "आईरिस",
        "subject": "Biology"
      },
      {
        "num": 89,
        "question_en": "Which is the best conductor of electricity?",
        "question_hi": "निम्न में से कौन विद्युत का सर्वोत्तम चालक है?",
        "options_en": ["Aluminium", "Copper", "Silver", "Gold"],
        "options_hi": ["एल्युमिनियम", "तांबा", "चांदी", "सोना"],
        "answer_en": "Silver",
        "answer_hi": "चांदी",
        "subject": "Physics"
      },
      {
        "num": 90,
        "question_en": "Which metal reacts with water to form hydrogen gas?",
        "question_hi": "कौन सी धातु जल से अभिक्रिया करके हाइड्रोजन गैस बनाती है?",
        "options_en": ["Copper", "Gold", "Sodium", "Silver"],
        "options_hi": ["तांबा", "सोना", "सोडियम", "चांदी"],
        "answer_en": "Sodium",
        "answer_hi": "सोडियम",
        "subject": "Chemistry"
      },
      {
        "num": 91,
        "question_en": "The process of conversion of water into vapour is called:",
        "question_hi": "जल को वाष्प में बदलने की प्रक्रिया को क्या कहते हैं?",
        "options_en": ["Condensation", "Precipitation", "Evaporation", "Boiling"],
        "options_hi": ["संघनन", "वर्षा", "वाष्पीकरण", "उबालना"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "subject": "Physics"
      },
      {
        "num": 92,
        "question_en": "Which plant hormone is responsible for the growth of stem?",
        "question_hi": "कौन सा पौधा हार्मोन तने की वृद्धि के लिए जिम्मेदार होता है?",
        "options_en": ["Cytokinin", "Auxin", "Gibberellin", "Ethylene"],
        "options_hi": ["साइटोकाइनिन", "ऑक्सिन", "गिबरेलिन", "एथिलीन"],
        "answer_en": "Gibberellin",
        "answer_hi": "गिबरेलिन",
        "subject": "Biology"
      },
      {
        "num": 93,
        "question_en": "The chemical formula of baking soda is:",
        "question_hi": "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
        "options_en": ["NaCl", "NaHCO₃", "CaCO₃", "Na₂CO₃"],
        "options_hi": ["NaCl", "NaHCO₃", "CaCO₃", "Na₂CO₃"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "subject": "Chemistry"
      },
      {
        "num": 94,
        "question_en": "Which disease is caused by deficiency of iodine?",
        "question_hi": "आयोडीन की कमी से कौन सा रोग होता है?",
        "options_en": ["Anemia", "Goitre", "Diabetes", "Rickets"],
        "options_hi": ["एनीमिया", "गलगंड", "मधुमेह", "रिकेट्स"],
        "answer_en": "Goitre",
        "answer_hi": "गलगंड",
        "subject": "Biology"
      },
      {
        "num": 95,
        "question_en": "The unit of electric current is:",
        "question_hi": "विद्युत धारा की इकाई क्या है?",
        "options_en": ["Volt", "Watt", "Ampere", "Ohm"],
        "options_hi": ["वोल्ट", "वाट", "एम्पीयर", "ओम"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पीयर",
        "subject": "Physics"
      },
      {
        "num": 96,
        "question_en": "Which of these is a natural indicator?",
        "question_hi": "इनमें से कौन एक प्राकृतिक संकेतक है?",
        "options_en": ["Phenolphthalein", "Methyl orange", "Turmeric", "None"],
        "options_hi": ["फिनॉफ्थेलिन", "मीथाइल ऑरेंज", "हल्दी", "कोई नहीं"],
        "answer_en": "Turmeric",
        "answer_hi": "हल्दी",
        "subject": "Chemistry"
      },
      {
        "num": 97,
        "question_en": "Which gas is essential for respiration?",
        "question_hi": "श्वसन के लिए कौन सी गैस आवश्यक है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "subject": "Biology"
      },
      {
        "num": 98,
        "question_en": "Which of the following is a poor conductor of electricity?",
        "question_hi": "निम्न में से कौन विद्युत का खराब चालक है?",
        "options_en": ["Copper", "Aluminium", "Wood", "Silver"],
        "options_hi": ["तांबा", "एल्युमिनियम", "लकड़ी", "चांदी"],
        "answer_en": "Wood",
        "answer_hi": "लकड़ी",
        "subject": "Physics"
      },
      {
        "num": 99,
        "question_en": "The main function of platelets is:",
        "question_hi": "प्लेटलेट्स का मुख्य कार्य क्या है?",
        "options_en": ["Oxygen transport", "Immunity", "Blood clotting", "Energy storage"],
        "options_hi": ["ऑक्सीजन परिवहन", "प्रतिरक्षा", "रक्त का थक्का बनाना", "ऊर्जा संचय"],
        "answer_en": "Blood clotting",
        "answer_hi": "रक्त का थक्का बनाना",
        "subject": "Biology"
      },
      {
        "num": 100,
        "question_en": "Which of the following is a base?",
        "question_hi": "निम्न में से कौन एक क्षार है?",
        "options_en": ["NaOH", "HCl", "H₂SO₄", "CH₃COOH"],
        "options_hi": ["NaOH", "HCl", "H₂SO₄", "CH₃COOH"],
        "answer_en": "NaOH",
        "answer_hi": "NaOH",
        "subject": "Chemistry"
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