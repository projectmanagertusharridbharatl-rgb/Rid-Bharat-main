const questions = [
   {
    "num": 1,
    "question_en": "Which hormone is responsible for the development of secondary sexual characters in males?",
    "question_hi": "पुरुषों में द्वितीयक यौन लक्षणों के विकास के लिए कौन सा हार्मोन जिम्मेदार होता है?",
    "options_en": ["Estrogen", "Progesterone", "Testosterone", "LH"],
    "options_hi": ["एस्ट्रोजन", "प्रोजेस्टेरोन", "टेस्टोस्टेरोन", "एलएच"],
    "answer_en": "Testosterone",
    "answer_hi": "टेस्टोस्टेरोन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Where does fertilization take place in human females?",
    "question_hi": "मानव स्त्रियों में निषेचन कहाँ होता है?",
    "options_en": ["Ovary", "Uterus", "Fallopian Tube", "Vagina"],
    "options_hi": ["अंडाशय", "गर्भाशय", "फलोपियन ट्यूब", "योनि"],
    "answer_en": "Fallopian Tube",
    "answer_hi": "फलोपियन ट्यूब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the functional unit of the kidney?",
    "question_hi": "गुर्दे की कार्यात्मक इकाई क्या है?",
    "options_en": ["Nephron", "Alveoli", "Neuron", "Neucleus"],
    "options_hi": ["नेफ्रॉन", "एल्वियोली", "न्यूरॉन", "न्यूक्लियस"],
    "answer_en": "Nephron",
    "answer_hi": "नेफ्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which blood group is known as the universal donor?",
    "question_hi": "कौन सा रक्त समूह सार्वभौमिक दाता के रूप में जाना जाता है?",
    "options_en": ["A", "B", "AB", "O"],
    "options_hi": ["ए", "बी", "एबी", "ओ"],
    "answer_en": "O",
    "answer_hi": "ओ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which vitamin is essential for blood clotting?",
    "question_hi": "रक्त के थक्के बनने के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin B12", "Vitamin K", "Vitamin D"],
    "options_hi": ["विटामिन ए", "विटामिन बी12", "विटामिन के", "विटामिन डी"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन के",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which organ produces insulin?",
    "question_hi": "कौन सा अंग इंसुलिन बनाता है?",
    "options_en": ["Liver", "Pancreas", "Kidney", "Spleen"],
    "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "प्लीहा"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which of the following is not a part of the human respiratory system?",
    "question_hi": "मानव श्वसन तंत्र का कौन सा भाग नहीं है?",
    "options_en": ["Trachea", "Bronchi", "Alveoli", "Esophagus"],
    "options_hi": ["ट्रेकिया", "ब्रोंकी", "एल्वियोली", "इसोफैगस"],
    "answer_en": "Esophagus",
    "answer_hi": "इसोफैगस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What type of blood cells fight against infections?",
    "question_hi": "संक्रमण से लड़ने वाले रक्त कोशिकाओं को क्या कहते हैं?",
    "options_en": ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
    "options_hi": ["लाल रक्त कोशिकाएँ", "सफेद रक्त कोशिकाएँ", "प्लेटलेट्स", "प्लाज़्मा"],
    "answer_en": "White Blood Cells",
    "answer_hi": "सफेद रक्त कोशिकाएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which hormone regulates blood sugar level?",
    "question_hi": "कौन सा हार्मोन रक्त शर्करा के स्तर को नियंत्रित करता है?",
    "options_en": ["Insulin", "Adrenaline", "Thyroxine", "Glucagon"],
    "options_hi": ["इंसुलिन", "एड्रेनालिन", "थाइरोक्सिन", "ग्लूकागन"],
    "answer_en": "Insulin",
    "answer_hi": "इंसुलिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the site of photosynthesis in plants?",
    "question_hi": "पौधों में प्रकाश संश्लेषण का स्थल क्या है?",
    "options_en": ["Root", "Stem", "Leaf", "Flower"],
    "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
    "answer_en": "Leaf",
    "answer_hi": "पत्ती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which blood vessels carry oxygenated blood from the lungs to the heart?",
    "question_hi": "कौन सी रक्त वाहिकाएँ फेफड़ों से हृदय तक ऑक्सीजन युक्त रक्त ले जाती हैं?",
    "options_en": ["Pulmonary Veins", "Pulmonary Arteries", "Aorta", "Vena Cava"],
    "options_hi": ["फुफ्फुसीय शिराएँ", "फुफ्फुसीय धमनी", "ऐओर्टा", "वीना कावा"],
    "answer_en": "Pulmonary Veins",
    "answer_hi": "फुफ्फुसीय शिराएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the basic structural and functional unit of life?",
    "question_hi": "जीवन की मूल संरचनात्मक और कार्यात्मक इकाई क्या है?",
    "options_en": ["Cell", "Tissue", "Organ", "Organism"],
    "options_hi": ["कोशिका", "ऊतक", "अंग", "जीव"],
    "answer_en": "Cell",
    "answer_hi": "कोशिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which organ is responsible for detoxification in the human body?",
    "question_hi": "मानव शरीर में विषाक्त पदार्थों को निष्क्रिय करने का कार्य कौन सा अंग करता है?",
    "options_en": ["Kidney", "Liver", "Lungs", "Pancreas"],
    "options_hi": ["गुर्दा", "यकृत", "फेफड़े", "अग्न्याशय"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the process of cell division called?",
    "question_hi": "कोशिका विभाजन की प्रक्रिया को क्या कहते हैं?",
    "options_en": ["Meiosis", "Mitosis", "Fertilization", "Photosynthesis"],
    "options_hi": ["मायोसिस", "माइटोसिस", "निषेचन", "प्रकाश संश्लेषण"],
    "answer_en": "Mitosis",
    "answer_hi": "माइटोसिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which part of the brain controls balance and coordination?",
    "question_hi": "मस्तिष्क का कौन सा भाग संतुलन और समन्वय को नियंत्रित करता है?",
    "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
    "answer_en": "Cerebellum",
    "answer_hi": "सेरेबेलम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the main component of the human nervous system?",
    "question_hi": "मानव तंत्रिका तंत्र का मुख्य घटक क्या है?",
    "options_en": ["Neurons", "Blood Vessels", "Muscles", "Bones"],
    "options_hi": ["न्यूरॉन", "रक्त वाहिकाएँ", "मांसपेशियाँ", "हड्डियाँ"],
    "answer_en": "Neurons",
    "answer_hi": "न्यूरॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which blood component helps in clotting?",
    "question_hi": "रक्त का कौन सा घटक थक्के बनने में मदद करता है?",
    "options_en": ["Plasma", "Platelets", "Red Blood Cells", "White Blood Cells"],
    "options_hi": ["प्लाज़्मा", "प्लेटलेट्स", "लाल रक्त कोशिकाएं", "सफेद रक्त कोशिकाएं"],
    "answer_en": "Platelets",
    "answer_hi": "प्लेटलेट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which hormone is secreted by the adrenal glands?",
    "question_hi": "एड्रिनल ग्रंथियों द्वारा कौन सा हार्मोन स्रावित होता है?",
    "options_en": ["Adrenaline", "Insulin", "Thyroxine", "Glucagon"],
    "options_hi": ["एड्रेनालिन", "इंसुलिन", "थाइरोक्सिन", "ग्लूकागन"],
    "answer_en": "Adrenaline",
    "answer_hi": "एड्रेनालिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the largest organ in the human body?",
    "question_hi": "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    "options_en": ["Liver", "Skin", "Heart", "Lungs"],
    "options_hi": ["यकृत", "त्वचा", "हृदय", "फेफड़े"],
    "answer_en": "Skin",
    "answer_hi": "त्वचा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which vitamin helps in the absorption of calcium?",
    "question_hi": "कौन सा विटामिन कैल्शियम के अवशोषण में मदद करता है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन के"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन डी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which part of the eye controls the amount of light entering it?",
    "question_hi": "आँख का कौन सा भाग उसमें प्रवेश करने वाली रोशनी की मात्रा को नियंत्रित करता है?",
    "options_en": ["Cornea", "Iris", "Lens", "Retina"],
    "options_hi": ["कॉर्निया", "आयरिस", "लेंस", "रेटिना"],
    "answer_en": "Iris",
    "answer_hi": "आयरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which blood group is called the universal recipient?",
    "question_hi": "कौन सा रक्त समूह सार्वभौमिक प्राप्तकर्ता कहा जाता है?",
    "options_en": ["A", "B", "AB", "O"],
    "options_hi": ["ए", "बी", "एबी", "ओ"],
    "answer_en": "AB",
    "answer_hi": "एबी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which part of the brain regulates body temperature?",
    "question_hi": "मस्तिष्क का कौन सा भाग शरीर के तापमान को नियंत्रित करता है?",
    "options_en": ["Medulla", "Hypothalamus", "Cerebrum", "Cerebellum"],
    "options_hi": ["मेडुला", "हाइपोथैलेमस", "सेरेब्रम", "सेरेबेलम"],
    "answer_en": "Hypothalamus",
    "answer_hi": "हाइपोथैलेमस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which hormone controls the fight or flight response?",
    "question_hi": "कौन सा हार्मोन लड़ाई या उड़ान प्रतिक्रिया को नियंत्रित करता है?",
    "options_en": ["Cortisol", "Adrenaline", "Insulin", "Glucagon"],
    "options_hi": ["कॉर्टिसोल", "एड्रेनालिन", "इंसुलिन", "ग्लूकागन"],
    "answer_en": "Adrenaline",
    "answer_hi": "एड्रेनालिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the main function of hemoglobin?",
    "question_hi": "हीमोग्लोबिन का मुख्य कार्य क्या है?",
    "options_en": ["Transport oxygen", "Blood clotting", "Fight infections", "Produce hormones"],
    "options_hi": ["ऑक्सीजन परिवहन करना", "रक्त का थक्का बनाना", "संक्रमण से लड़ना", "हार्मोन बनाना"],
    "answer_en": "Transport oxygen",
    "answer_hi": "ऑक्सीजन परिवहन करना",
    "attempted": false,
    "selected": ""
  },
   {
    "num": 26,
    "question_en": "What is the primary function of the large intestine?",
    "question_hi": "बड़ी आंत का मुख्य कार्य क्या है?",
    "options_en": ["Absorption of nutrients", "Absorption of water", "Digestion of proteins", "Production of enzymes"],
    "options_hi": ["पोषक तत्वों का अवशोषण", "पानी का अवशोषण", "प्रोटीन का पाचन", "एंजाइम का निर्माण"],
    "answer_en": "Absorption of water",
    "answer_hi": "पानी का अवशोषण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which part of the brain controls voluntary movements?",
    "question_hi": "मस्तिष्क का कौन सा भाग स्वैच्छिक आंदोलनों को नियंत्रित करता है?",
    "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
    "answer_en": "Cerebrum",
    "answer_hi": "सेरेब्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which vitamin is synthesized in the human skin upon exposure to sunlight?",
    "question_hi": "मानव त्वचा में कौन सा विटामिन सूरज की रोशनी के संपर्क में आने पर संश्लेषित होता है?",
    "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन डी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the basic structural unit of the kidney?",
    "question_hi": "किडनी की मूलभूत संरचनात्मक इकाई क्या है?",
    "options_en": ["Nephron", "Neuron", "Alveolus", "Lobule"],
    "options_hi": ["नेफ्रॉन", "न्यूरॉन", "एल्विओलस", "लोब्यूल"],
    "answer_en": "Nephron",
    "answer_hi": "नेफ्रॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which blood group is known as the universal donor?",
    "question_hi": "कौन सा रक्त समूह सार्वभौमिक दाता के रूप में जाना जाता है?",
    "options_en": ["A", "B", "AB", "O"],
    "options_hi": ["ए", "बी", "एबी", "ओ"],
    "answer_en": "O",
    "answer_hi": "ओ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the function of hemoglobin?",
    "question_hi": "हीमोग्लोबिन का कार्य क्या है?",
    "options_en": ["Transport oxygen", "Transport carbon dioxide", "Blood clotting", "Fight infections"],
    "options_hi": ["ऑक्सीजन का परिवहन", "कार्बन डाइऑक्साइड का परिवहन", "रक्त का थक्का बनना", "संक्रमण से लड़ना"],
    "answer_en": "Transport oxygen",
    "answer_hi": "ऑक्सीजन का परिवहन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which gland is known as the master gland?",
    "question_hi": "कौन सी ग्रंथि को मास्टर ग्रंथि कहा जाता है?",
    "options_en": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
    "options_hi": ["थायराइड", "पिट्यूटरी", "एड्रिनल", "पैंक्रियास"],
    "answer_en": "Pituitary",
    "answer_hi": "पिट्यूटरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which part of the neuron receives signals from other neurons?",
    "question_hi": "न्यूरॉन का कौन सा भाग अन्य न्यूरॉनों से संकेत प्राप्त करता है?",
    "options_en": ["Axon", "Dendrite", "Cell body", "Synapse"],
    "options_hi": ["एक्सोन", "डेंड्राइट", "सेल बॉडी", "सिनैप्स"],
    "answer_en": "Dendrite",
    "answer_hi": "डेंड्राइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the main function of white blood cells?",
    "question_hi": "श्वेत रक्त कणिकाओं का मुख्य कार्य क्या है?",
    "options_en": ["Transport oxygen", "Clot blood", "Fight infections", "Carry nutrients"],
    "options_hi": ["ऑक्सीजन का परिवहन", "रक्त का थक्का बनाना", "संक्रमण से लड़ना", "पोषक तत्वों का वहन करना"],
    "answer_en": "Fight infections",
    "answer_hi": "संक्रमण से लड़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which hormone regulates blood sugar levels?",
    "question_hi": "कौन सा हार्मोन रक्त में शर्करा के स्तर को नियंत्रित करता है?",
    "options_en": ["Insulin", "Glucagon", "Adrenaline", "Thyroxine"],
    "options_hi": ["इंसुलिन", "ग्लुकागोन", "एड्रेनालिन", "थाइरॉक्सिन"],
    "answer_en": "Insulin",
    "answer_hi": "इंसुलिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which organ produces bile?",
    "question_hi": "कौन सा अंग पित्त (बाइल) का उत्पादन करता है?",
    "options_en": ["Pancreas", "Liver", "Gallbladder", "Small intestine"],
    "options_hi": ["पैंक्रियास", "जिगर", "पित्ताशय", "छोटी आंत"],
    "answer_en": "Liver",
    "answer_hi": "जिगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What type of blood cells are involved in clotting?",
    "question_hi": "रक्त के किस प्रकार के कणिकाएं रक्त के थक्के बनाने में सहायक होती हैं?",
    "options_en": ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    "options_hi": ["लाल रक्त कणिकाएं", "श्वेत रक्त कणिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
    "answer_en": "Platelets",
    "answer_hi": "प्लेटलेट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which organ is responsible for filtering blood in the human body?",
    "question_hi": "मानव शरीर में रक्त को छानने का कार्य कौन सा अंग करता है?",
    "options_en": ["Kidneys", "Liver", "Lungs", "Heart"],
    "options_hi": ["किडनी", "जिगर", "फेफड़े", "हृदय"],
    "answer_en": "Kidneys",
    "answer_hi": "किडनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the site of fertilization in humans?",
    "question_hi": "मानव में निषेचन का स्थान क्या है?",
    "options_en": ["Ovary", "Uterus", "Fallopian tube", "Vagina"],
    "options_hi": ["अंडाशय", "गर्भाशय", "फैलोपियन ट्यूब", "योनि"],
    "answer_en": "Fallopian tube",
    "answer_hi": "फैलोपियन ट्यूब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which blood vessel carries oxygenated blood from lungs to the heart?",
    "question_hi": "कौन सा रक्त वाहिका फेफड़ों से हृदय तक ऑक्सीजन युक्त रक्त ले जाती है?",
    "options_en": ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"],
    "options_hi": ["पल्मोनरी धमनी", "पल्मोनरी शिरा", "एओर्टा", "वीना कावा"],
    "answer_en": "Pulmonary vein",
    "answer_hi": "पल्मोनरी शिरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which hormone triggers labor contractions in humans?",
    "question_hi": "मानव में प्रसव संकुचन कौन सा हार्मोन प्रेरित करता है?",
    "options_en": ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"],
    "options_hi": ["ऑक्सीटोसिन", "प्रोलैक्टिन", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
    "answer_en": "Oxytocin",
    "answer_hi": "ऑक्सीटोसिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which part of the eye controls the amount of light entering it?",
    "question_hi": "आंख का कौन सा भाग प्रवेश करने वाली रोशनी की मात्रा को नियंत्रित करता है?",
    "options_en": ["Cornea", "Iris", "Retina", "Lens"],
    "options_hi": ["कॉर्निया", "आईरिस", "रेटिना", "लेंस"],
    "answer_en": "Iris",
    "answer_hi": "आईरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which gas is primarily responsible for photosynthesis in plants?",
    "question_hi": "पौधों में प्रकाश संश्लेषण के लिए मुख्य रूप से कौन सी गैस जिम्मेदार होती है?",
    "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the main pigment involved in photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण में मुख्य वर्णक कौन सा है?",
    "options_en": ["Chlorophyll", "Carotene", "Xanthophyll", "Anthocyanin"],
    "options_hi": ["क्लोरोफिल", "कैरोटीन", "जैंथोफिल", "एंथोसाइनिन"],
    "answer_en": "Chlorophyll",
    "answer_hi": "क्लोरोफिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which enzyme breaks down starch into maltose?",
    "question_hi": "कौन सा एंजाइम स्टार्च को माल्टोज में तोड़ता है?",
    "options_en": ["Amylase", "Protease", "Lipase", "Maltase"],
    "options_hi": ["एमाइलेज", "प्रोटीएज", "लिपेज", "माल्टेज"],
    "answer_en": "Amylase",
    "answer_hi": "एमाइलेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which hormone is secreted by the adrenal gland in response to stress?",
    "question_hi": "तनाव के प्रति प्रतिक्रिया में अधिवृक्क ग्रंथि कौन सा हार्मोन स्रावित करती है?",
    "options_en": ["Adrenaline", "Cortisol", "Thyroxine", "Insulin"],
    "options_hi": ["एड्रेनालिन", "कॉर्टिसोल", "थाइरॉक्सिन", "इंसुलिन"],
    "answer_en": "Adrenaline",
    "answer_hi": "एड्रेनालिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the normal resting heart rate in a healthy adult?",
    "question_hi": "स्वस्थ वयस्क में सामान्य आराम की स्थिति में हृदय की धड़कन की गति क्या होती है?",
    "options_en": ["40-60 beats per minute", "60-100 beats per minute", "100-120 beats per minute", "120-140 beats per minute"],
    "options_hi": ["40-60 प्रति मिनट धड़कन", "60-100 प्रति मिनट धड़कन", "100-120 प्रति मिनट धड़कन", "120-140 प्रति मिनट धड़कन"],
    "answer_en": "60-100 beats per minute",
    "answer_hi": "60-100 प्रति मिनट धड़कन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the name of the female reproductive cell?",
    "question_hi": "महिला प्रजनन कोशिका का नाम क्या है?",
    "options_en": ["Sperm", "Ovum", "Zygote", "Embryo"],
    "options_hi": ["वीर्य", "अंडाणु", "जाइगोट", "भ्रूण"],
    "answer_en": "Ovum",
    "answer_hi": "अंडाणु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which part of the respiratory system is known as the voice box?",
    "question_hi": "श्वसन तंत्र के किस भाग को स्वर यंत्र कहा जाता है?",
    "options_en": ["Pharynx", "Larynx", "Trachea", "Bronchi"],
    "options_hi": ["फैरिंक्स", "लैरिंक्स", "ट्रेकेया", "ब्रोंची"],
    "answer_en": "Larynx",
    "answer_hi": "लैरिंक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which blood component is responsible for immunity?",
    "question_hi": "रक्त के किस घटक के लिए प्रतिरक्षा जिम्मेदार होती है?",
    "options_en": ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    "options_hi": ["लाल रक्त कणिकाएं", "श्वेत रक्त कणिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
    "answer_en": "White blood cells",
    "answer_hi": "श्वेत रक्त कणिकाएं",
    "attempted": false,
    "selected": ""
  }
          
];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
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

  updateCircles();
}

function markAttempted(index, selectedAnswer) {
  questions[index].attempted = true;
  questions[index].selected = selectedAnswer;
  updateCircles();
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

function updateCircles() {
  const circleContainer = document.getElementById("circleContainer");
  circleContainer.innerHTML = "";
  const start = currentCirclePage * circlesPerPage;
  const end = Math.min(start + circlesPerPage, questions.length);

  for (let i = start; i < end; i++) {
    const q = questions[i];
    let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
    circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
  }
}

function jumpToQuestion(index) {
  currentQuestion = index;
  loadQuestion(index);
}

function prevCirclePage() {
  if (currentCirclePage > 0) {
    currentCirclePage--;
    updateCircles();
  }
}

function nextCirclePage() {
  if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
    currentCirclePage++;
    updateCircles();
  }
}

function changeLanguage() {
  language = document.getElementById("languageSelect").value;
  loadQuestion(currentQuestion);
}

function submitQuiz() {
  let confirmation = confirm("Are you sure you want to submit the test?");
  if (!confirmation) return;

  let attempted = 0, notAttempted = 0, score = 0;
  const results = [];

  questions.forEach(q => {
      const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
      if (q.attempted) {
          attempted++;
          if (q.selected === correctAnswer) score++;
      } else {
          notAttempted++;
      }
      results.push({ 
          question: language === "en" ? q.question_en : q.question_hi,
          selected: q.selected || "Not Answered", 
          correct: correctAnswer 
      });
  });

  localStorage.setItem("attempted", attempted);
  localStorage.setItem("notAttempted", notAttempted);
  localStorage.setItem("score", score);
  localStorage.setItem("results", JSON.stringify(results));

  let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
  if (viewResult) {
      window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
  }
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! Submitting the quiz automatically.");
      submitQuiz();
    } else {
      timerElement.textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

window.onload = function () {
  startTimer();
  loadQuestion(currentQuestion);
};