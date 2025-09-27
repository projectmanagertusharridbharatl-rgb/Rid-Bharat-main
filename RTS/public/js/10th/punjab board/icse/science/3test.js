
const questions = [

  {
    "num": 1,
    "question_en": "What is the SI unit of electric charge?",
    "question_hi": "विद्युत आवेश का SI मात्रक क्या है?",
    "options_en": ["Coulomb", "Ampere", "Volt", "Ohm"],
    "options_hi": ["कूलॉम", "एम्पीयर", "वोल्ट", "ओम"],
    "answer_en": "Coulomb",
    "answer_hi": "कूलॉम",
    "attempted": false
  },
  {
    "num": 2,
    "question_en": "Which element has the atomic number 1?",
    "question_hi": "किस तत्व की परमाणु संख्या 1 है?",
    "options_en": ["Hydrogen", "Helium", "Oxygen", "Carbon"],
    "options_hi": ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "कार्बन"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false
  },
  {
    "num": 3,
    "question_en": "Which part of the human eye controls the amount of light entering?",
    "question_hi": "मानव आँख का कौन-सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
    "options_en": ["Iris", "Retina", "Cornea", "Lens"],
    "options_hi": ["आइरिस", "रेटिना", "कॉर्निया", "लेंस"],
    "answer_en": "Iris",
    "answer_hi": "आइरिस",
    "attempted": false
  },
  {
    "num": 4,
    "question_en": "What is the chemical formula of sulfuric acid?",
    "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
    "options_en": ["H₂SO₄", "HCl", "HNO₃", "H₂CO₃"],
    "options_hi": ["H₂SO₄", "HCl", "HNO₃", "H₂CO₃"],
    "answer_en": "H₂SO₄",
    "answer_hi": "H₂SO₄",
    "attempted": false
  },
  {
    "num": 5,
    "question_en": "Which law states that 'every action has an equal and opposite reaction'?",
    "question_hi": "कौन-सा नियम कहता है कि 'प्रत्येक क्रिया की समान और विपरीत प्रतिक्रिया होती है'?",
    "options_en": ["Newton's Third Law", "Newton's First Law", "Newton's Second Law", "Ohm's Law"],
    "options_hi": ["न्यूटन का तीसरा नियम", "न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "ओम का नियम"],
    "answer_en": "Newton's Third Law",
    "answer_hi": "न्यूटन का तीसरा नियम",
    "attempted": false
  },
  {
    "num": 6,
    "question_en": "Which gas is produced during respiration?",
    "question_hi": "श्वसन के दौरान कौन-सी गैस उत्पन्न होती है?",
    "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false
  },
  {
    "num": 7,
    "question_en": "What is the pH range of acidic solutions?",
    "question_hi": "अम्लीय विलयनों का pH मान किस रेंज में होता है?",
    "options_en": ["0-7", "7", "7-14", "14"],
    "options_hi": ["0-7", "7", "7-14", "14"],
    "answer_en": "0-7",
    "answer_hi": "0-7",
    "attempted": false
  },
  {
    "num": 8,
    "question_en": "Which instrument measures electric current?",
    "question_hi": "विद्युत धारा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
    "options_hi": ["एमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "ओममीटर"],
    "answer_en": "Ammeter",
    "answer_hi": "एमीटर",
    "attempted": false
  },
  {
    "num": 9,
    "question_en": "Which vitamin is synthesized by the human body in sunlight?",
    "question_hi": "कौन-सा विटामिन मानव शरीर द्वारा सूर्य के प्रकाश में संश्लेषित होता है?",
    "options_en": ["Vitamin D", "Vitamin C", "Vitamin B12", "Vitamin K"],
    "options_hi": ["विटामिन D", "विटामिन C", "विटामिन B12", "विटामिन K"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false
  },
  {
    "num": 10,
    "question_en": "What is the main component of natural gas?",
    "question_hi": "प्राकृतिक गैस का मुख्य घटक क्या है?",
    "options_en": ["Methane", "Ethane", "Propane", "Butane"],
    "options_hi": ["मीथेन", "इथेन", "प्रोपेन", "ब्यूटेन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन",
    "attempted": false
  },
  {
    "num": 11,
    "question_en": "Which of the following is a conductor of electricity?",
    "question_hi": "निम्न में से कौन विद्युत का सुचालक है?",
    "options_en": ["Graphite", "Sulfur", "Phosphorus", "Oxygen"],
    "options_hi": ["ग्रेफाइट", "सल्फर", "फॉस्फोरस", "ऑक्सीजन"],
    "answer_en": "Graphite",
    "answer_hi": "ग्रेफाइट",
    "attempted": false
  },
  {
    "num": 12,
    "question_en": "Which gland secretes insulin?",
    "question_hi": "कौन-सी ग्रंथि इंसुलिन स्रावित करती है?",
    "options_en": ["Pancreas", "Thyroid", "Pituitary", "Adrenal"],
    "options_hi": ["अग्न्याशय", "थायरॉयड", "पिट्यूटरी", "अधिवृक्क"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false
  },
  {
    "num": 13,
    "question_en": "What is the unit of resistance?",
    "question_hi": "प्रतिरोध की इकाई क्या है?",
    "options_en": ["Ohm", "Volt", "Ampere", "Watt"],
    "options_hi": ["ओम", "वोल्ट", "एम्पीयर", "वाट"],
    "answer_en": "Ohm",
    "answer_hi": "ओम",
    "attempted": false
  },
  {
    "num": 14,
    "question_en": "Which of the following is a greenhouse gas?",
    "question_hi": "निम्न में से कौन एक ग्रीनहाउस गैस है?",
    "options_en": ["Chlorofluorocarbon (CFC)", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["क्लोरोफ्लोरोकार्बन (CFC)", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Chlorofluorocarbon (CFC)",
    "answer_hi": "क्लोरोफ्लोरोकार्बन (CFC)",
    "attempted": false
  },
  {
    "num": 15,
    "question_en": "Which process is used to separate salt from seawater?",
    "question_hi": "समुद्री जल से नमक को अलग करने के लिए किस प्रक्रिया का उपयोग किया जाता है?",
    "options_en": ["Evaporation", "Filtration", "Distillation", "Decantation"],
    "options_hi": ["वाष्पीकरण", "निस्पंदन", "आसवन", "अपकेंद्रण"],
    "answer_en": "Evaporation",
    "answer_hi": "वाष्पीकरण",
    "attempted": false
  },
  {
    "num": 16,
    "question_en": "Which of the following is a non-metal that is solid at room temperature?",
    "question_hi": "निम्न में से कौन एक अधातु है जो कमरे के तापमान पर ठोस होती है?",
    "options_en": ["Iodine", "Bromine", "Chlorine", "Fluorine"],
    "options_hi": ["आयोडीन", "ब्रोमीन", "क्लोरीन", "फ्लोरीन"],
    "answer_en": "Iodine",
    "answer_hi": "आयोडीन",
    "attempted": false
  },
  {
    "num": 17,
    "question_en": "What is the chemical symbol for potassium?",
    "question_hi": "पोटेशियम का रासायनिक प्रतीक क्या है?",
    "options_en": ["K", "P", "Pt", "Po"],
    "options_hi": ["K", "P", "Pt", "Po"],
    "answer_en": "K",
    "answer_hi": "K",
    "attempted": false
  },
  {
    "num": 18,
    "question_en": "Which organelle is called the 'powerhouse of the cell'?",
    "question_hi": "किस कोशिकांग को 'कोशिका का पावरहाउस' कहा जाता है?",
    "options_en": ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
    "options_hi": ["माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम", "गॉल्जी उपकरण"],
    "answer_en": "Mitochondria",
    "answer_hi": "माइटोकॉन्ड्रिया",
    "attempted": false
  },
  {
    "num": 19,
    "question_en": "Which gas is used in photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण में कौन-सी गैस प्रयोग की जाती है?",
    "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false
  },
  {
    "num": 20,
    "question_en": "What is the unit of frequency of sound?",
    "question_hi": "ध्वनि की आवृत्ति की इकाई क्या है?",
    "options_en": ["Hertz", "Decibel", "Watt", "Pascal"],
    "options_hi": ["हर्ट्ज", "डेसिबल", "वाट", "पास्कल"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज",
    "attempted": false
  },
  {
    "num": 21,
    "question_en": "Which of the following is a synthetic polymer?",
    "question_hi": "निम्न में से कौन एक संश्लिष्ट बहुलक है?",
    "options_en": ["Polythene", "Cotton", "Silk", "Wool"],
    "options_hi": ["पॉलीथीन", "कपास", "रेशम", "ऊन"],
    "answer_en": "Polythene",
    "answer_hi": "पॉलीथीन",
    "attempted": false
  },
  {
    "num": 22,
    "question_en": "Which metal is used in making electric wires?",
    "question_hi": "विद्युत तार बनाने में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Copper", "Iron", "Aluminium", "Silver"],
    "options_hi": ["तांबा", "लोहा", "एल्युमिनियम", "चांदी"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false
  },
  {
    "num": 23,
    "question_en": "What is the chemical formula of glucose?",
    "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
    "options_en": ["C₆H₁₂O₆", "C₂H₅OH", "CH₄", "H₂O"],
    "options_hi": ["C₆H₁₂O₆", "C₂H₅OH", "CH₄", "H₂O"],
    "answer_en": "C₆H₁₂O₆",
    "answer_hi": "C₆H₁₂O₆",
    "attempted": false
  },
  {
    "num": 24,
    "question_en": "Which of the following is a characteristic of acids?",
    "question_hi": "निम्न में से कौन अम्लों की विशेषता है?",
    "options_en": ["Sour taste", "Bitter taste", "Salty taste", "Sweet taste"],
    "options_hi": ["खट्टा स्वाद", "कड़वा स्वाद", "नमकीन स्वाद", "मीठा स्वाद"],
    "answer_en": "Sour taste",
    "answer_hi": "खट्टा स्वाद",
    "attempted": false
  },
  {
    "num": 25,
    "question_en": "Which gas is filled in electric bulbs?",
    "question_hi": "विद्युत बल्बों में कौन-सी गैस भरी जाती है?",
    "options_en": ["Argon", "Oxygen", "Hydrogen", "Nitrogen"],
    "options_hi": ["आर्गन", "ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false
  },
  {
    "num": 26,
    "question_en": "Which of the following is a function of the liver?",
    "question_hi": "निम्न में से कौन यकृत का कार्य है?",
    "options_en": ["Detoxification", "Pumping blood", "Producing insulin", "Digesting fats"],
    "options_hi": ["विषहरण", "रक्त पंप करना", "इंसुलिन उत्पन्न करना", "वसा पचाना"],
    "answer_en": "Detoxification",
    "answer_hi": "विषहरण",
    "attempted": false
  },
  {
    "num": 27,
    "question_en": "What is the chemical name of table salt?",
    "question_hi": "साधारण नमक का रासायनिक नाम क्या है?",
    "options_en": ["Sodium chloride", "Sodium carbonate", "Sodium hydroxide", "Sodium bicarbonate"],
    "options_hi": ["सोडियम क्लोराइड", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम बाइकार्बोनेट"],
    "answer_en": "Sodium chloride",
    "answer_hi": "सोडियम क्लोराइड",
    "attempted": false
  },
  {
    "num": 28,
    "question_en": "Which of the following is a renewable source of energy?",
    "question_hi": "निम्न में से कौन एक नवीकरणीय ऊर्जा स्रोत है?",
    "options_en": ["Wind energy", "Coal", "Petroleum", "Natural gas"],
    "options_hi": ["पवन ऊर्जा", "कोयला", "पेट्रोलियम", "प्राकृतिक गैस"],
    "answer_en": "Wind energy",
    "answer_hi": "पवन ऊर्जा",
    "attempted": false
  },
  {
    "num": 29,
    "question_en": "Which of the following is a function of the root in plants?",
    "question_hi": "निम्न में से कौन पौधों में जड़ का कार्य है?",
    "options_en": ["Absorption of water", "Photosynthesis", "Transpiration", "Reproduction"],
    "options_hi": ["पानी का अवशोषण", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "प्रजनन"],
    "answer_en": "Absorption of water",
    "answer_hi": "पानी का अवशोषण",
    "attempted": false
  },
  {
    "num": 30,
    "question_en": "Which of the following is a property of bases?",
    "question_hi": "निम्न में से कौन क्षारों का गुण है?",
    "options_en": ["Slippery feel", "Sour taste", "Turns blue litmus red", "Reacts with metals to produce H₂ gas"],
    "options_hi": ["फिसलन भरा महसूस होना", "खट्टा स्वाद", "नीले लिटमस को लाल करना", "H₂ गैस उत्पन्न करने के लिए धातुओं के साथ प्रतिक्रिया करता है"],
    "answer_en": "Slippery feel",
    "answer_hi": "फिसलन भरा महसूस होना",
    "attempted": false
  },
  {
    "num": 31,
    "question_en": "Which of the following is a function of white blood cells?",
    "question_hi": "निम्न में से कौन श्वेत रक्त कोशिकाओं का कार्य है?",
    "options_en": ["Fighting infections", "Carrying oxygen", "Clotting blood", "Producing hormones"],
    "options_hi": ["संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "रक्त का थक्का बनाना", "हार्मोन उत्पन्न करना"],
    "answer_en": "Fighting infections",
    "answer_hi": "संक्रमण से लड़ना",
    "attempted": false
  },
  {
    "num": 32,
    "question_en": "Which of the following is a function of the nervous system?",
    "question_hi": "निम्न में से कौन तंत्रिका तंत्र का कार्य है?",
    "options_en": ["Transmitting signals", "Producing hormones", "Digesting food", "Filtering blood"],
    "options_hi": ["संकेतों का संचार करना", "हार्मोन उत्पन्न करना", "भोजन पचाना", "रक्त छानना"],
    "answer_en": "Transmitting signals",
    "answer_hi": "संकेतों का संचार करना",
    "attempted": false
  },
  {
    "num": 33,
    "question_en": "Which of the following is a function of the respiratory system?",
    "question_hi": "निम्न में से कौन श्वसन तंत्र का कार्य है?",
    "options_en": ["Exchange of gases", "Pumping blood", "Digesting food", "Producing hormones"],
    "options_hi": ["गैसों का आदान-प्रदान", "रक्त पंप करना", "भोजन पचाना", "हार्मोन उत्पन्न करना"],
    "answer_en": "Exchange of gases",
    "answer_hi": "गैसों का आदान-प्रदान",
    "attempted": false
  },
  {
    "num": 34,
    "question_en": "Which of the following is a function of the skeletal system?",
    "question_hi": "निम्न में से कौन कंकाल तंत्र का कार्य है?",
    "options_en": ["Providing support", "Producing hormones", "Digesting food", "Filtering blood"],
    "options_hi": ["सहारा देना", "हार्मोन उत्पन्न करना", "भोजन पचाना", "रक्त छानना"],
    "answer_en": "Providing support",
    "answer_hi": "सहारा देना",
    "attempted": false
  },
  {
    "num": 35,
    "question_en": "Which of the following is a function of the kidney?",
    "question_hi": "निम्न में से कौन गुर्दे का कार्य है?",
    "options_en": ["Filtration of blood", "Pumping blood", "Producing bile", "Digesting food"],
    "options_hi": ["रक्त का छानना", "रक्त पंप करना", "पित्त का उत्पादन", "भोजन पचाना"],
    "answer_en": "Filtration of blood",
    "answer_hi": "रक्त का छानना",
    "attempted": false
  },
  {
    "num": 36,
    "question_en": "Which of the following is a non-biodegradable waste?",
    "question_hi": "निम्न में से कौन एक गैर-जैव निम्नीकरणीय अपशिष्ट है?",
    "options_en": ["Plastic", "Paper", "Vegetable waste", "Wood"],
    "options_hi": ["प्लास्टिक", "कागज", "सब्जी का कचरा", "लकड़ी"],
    "answer_en": "Plastic",
    "answer_hi": "प्लास्टिक",
    "attempted": false
  },
  {
    "num": 37,
    "question_en": "Which of the following is a function of white blood cells?",
    "question_hi": "निम्न में से कौन श्वेत रक्त कोशिकाओं का कार्य है?",
    "options_en": ["Fighting infections", "Carrying oxygen", "Clotting blood", "Producing hormones"],
    "options_hi": ["संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "रक्त का थक्का बनाना", "हार्मोन उत्पन्न करना"],
    "answer_en": "Fighting infections",
    "answer_hi": "संक्रमण से लड़ना",
    "attempted": false
  },
  {
    "num": 38,
    "question_en": "Which of the following is a function of the nervous system?",
    "question_hi": "निम्न में से कौन तंत्रिका तंत्र का कार्य है?",
    "options_en": ["Transmitting signals", "Producing hormones", "Digesting food", "Filtering blood"],
    "options_hi": ["संकेतों का संचार करना", "हार्मोन उत्पन्न करना", "भोजन पचाना", "रक्त छानना"],
    "answer_en": "Transmitting signals",
    "answer_hi": "संकेतों का संचार करना",
    "attempted": false
  },
  {
    "num": 39,
    "question_en": "Which of the following is a function of the respiratory system?",
    "question_hi": "निम्न में से कौन श्वसन तंत्र का कार्य है?",
    "options_en": ["Exchange of gases", "Pumping blood", "Digesting food", "Producing hormones"],
    "options_hi": ["गैसों का आदान-प्रदान", "रक्त पंप करना", "भोजन पचाना", "हार्मोन उत्पन्न करना"],
    "answer_en": "Exchange of gases",
    "answer_hi": "गैसों का आदान-प्रदान",
    "attempted": false
  },
  {
    "num": 40,
    "question_en": "Which of the following is a function of the skeletal system?",
    "question_hi": "निम्न में से कौन कंकाल तंत्र का कार्य है?",
    "options_en": ["Providing support", "Producing hormones", "Digesting food", "Filtering blood"],
    "options_hi": ["सहारा देना", "हार्मोन उत्पन्न करना", "भोजन पचाना", "रक्त छानना"],
    "answer_en": "Providing support",
    "answer_hi": "सहारा देना",
    "attempted": false
  },
  {
    "num": 41,
    "question_en": "Which of the following is a function of the kidney?",
    "question_hi": "निम्न में से कौन गुर्दे का कार्य है?",
    "options_en": ["Filtration of blood", "Pumping blood", "Producing bile", "Digesting food"],
    "options_hi": ["रक्त का छानना", "रक्त पंप करना", "पित्त का उत्पादन", "भोजन पचाना"],
    "answer_en": "Filtration of blood",
    "answer_hi": "रक्त का छानना",
    "attempted": false
  },
  {
    "num": 42,
    "question_en": "Which of the following is a non-biodegradable waste?",
    "question_hi": "निम्न में से कौन एक गैर-जैव निम्नीकरणीय अपशिष्ट है?",
    "options_en": ["Plastic", "Paper", "Vegetable waste", "Wood"],
    "options_hi": ["प्लास्टिक", "कागज", "सब्जी का कचरा", "लकड़ी"],
    "answer_en": "Plastic",
    "answer_hi": "प्लास्टिक",
    "attempted": false
  },
  {
    "num": 43,
    "question_en": "Which of the following is a function of white blood cells?",
    "question_hi": "निम्न में से कौन श्वेत रक्त कोशिकाओं का कार्य है?",
    "options_en": ["Fighting infections", "Carrying oxygen", "Clotting blood", "Producing hormones"],
    "options_hi": ["संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "रक्त का थक्का बनाना", "हार्मोन उत्पन्न करना"],
    "answer_en": "Fighting infections",
    "answer_hi": "संक्रमण से लड़ना",
    "attempted": false
  },
  {
    "num": 44,
    "question_en": "Which of the following is a function of the nervous system?",
    "question_hi": "निम्न में से कौन तंत्रिका तंत्र का कार्य है?",
    "options_en": ["Transmitting signals", "Producing hormones", "Digesting food", "Filtering blood"],
    "options_hi": ["संकेतों का संचार करना", "हार्मोन उत्पन्न करना", "भोजन पचाना", "रक्त छानना"],
    "answer_en": "Transmitting signals",
    "answer_hi": "संकेतों का संचार करना",
    "attempted": false
  },
  {
    "num": 45,
    "question_en": "Which of the following is a function of the respiratory system?",
    "question_hi": "निम्न में से कौन श्वसन तंत्र का कार्य है?",
    "options_en": ["Exchange of gases", "Pumping blood", "Digesting food", "Producing hormones"],
    "options_hi": ["गैसों का आदान-प्रदान", "रक्त पंप करना", "भोजन पचाना", "हार्मोन उत्पन्न करना"],
    "answer_en": "Exchange of gases",
    "answer_hi": "गैसों का आदान-प्रदान",
    "attempted": false
  },
  {
    "num": 46,
    "question_en": "Which of the following is a function of the skeletal system?",
    "question_hi": "निम्न में से कौन कंकाल तंत्र का कार्य है?",
    "options_en": ["Providing support", "Producing hormones", "Digesting food", "Filtering blood"],
    "options_hi": ["सहारा देना", "हार्मोन उत्पन्न करना", "भोजन पचाना", "रक्त छानना"],
    "answer_en": "Providing support",
    "answer_hi": "सहारा देना",
    "attempted": false
  },
  {
    "num": 47,
    "question_en": "Which of the following is a function of the kidney?",
    "question_hi": "निम्न में से कौन गुर्दे का कार्य है?",
    "options_en": ["Filtration of blood", "Pumping blood", "Producing bile", "Digesting food"],
    "options_hi": ["रक्त का छानना", "रक्त पंप करना", "पित्त का उत्पादन", "भोजन पचाना"],
    "answer_en": "Filtration of blood",
    "answer_hi": "रक्त का छानना",
    "attempted": false
  },
  {
    "num": 48,
    "question_en": "Which of the following is a non-biodegradable waste?",
    "question_hi": "निम्न में से कौन एक गैर-जैव निम्नीकरणीय अपशिष्ट है?",
    "options_en": ["Plastic", "Paper", "Vegetable waste", "Wood"],
    "options_hi": ["प्लास्टिक", "कागज", "सब्जी का कचरा", "लकड़ी"],
    "answer_en": "Plastic",
    "answer_hi": "प्लास्टिक",
    "attempted": false
  },
  {
    "num": 49,
    "question_en": "Which of the following is a function of white blood cells?",
    "question_hi": "निम्न में से कौन श्वेत रक्त कोशिकाओं का कार्य है?",
    "options_en": ["Fighting infections", "Carrying oxygen", "Clotting blood", "Producing hormones"],
    "options_hi": ["संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "रक्त का थक्का बनाना", "हार्मोन उत्पन्न करना"],
    "answer_en": "Fighting infections",
    "answer_hi": "संक्रमण से लड़ना",
    "attempted": false
  },
  {
    "num": 50,
    "question_en": "Which of the following is a function of the nervous system?",
    "question_hi": "निम्न में से कौन तंत्रिका तंत्र का कार्य है?",
    "options_en": ["Transmitting signals", "Producing hormones", "Digesting food", "Filtering blood"],
    "options_hi": ["संकेतों का संचार करना", "हार्मोन उत्पन्न करना", "भोजन पचाना", "रक्त छानना"],
    "answer_en": "Transmitting signals",
    "answer_hi": "संकेतों का संचार करना",
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