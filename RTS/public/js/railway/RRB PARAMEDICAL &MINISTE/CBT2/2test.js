const questions = [
  {
    num: 1,
    question_en: "What is the normal temperature of the human body?",
    question_hi: "मानव शरीर का सामान्य तापमान कितना होता है?",
    options_en: ["36°C", "37°C", "38°C", "39°C"],
    options_hi: ["36°C", "37°C", "38°C", "39°C"],
    answer_en: "37°C",
    answer_hi: "37°C",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which vitamin is known as the sunshine vitamin?",
    question_hi: "कौन सा विटामिन 'सूरज की रोशनी वाला विटामिन' के रूप में जाना जाता है?",
    options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
    options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन E"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the largest gland in the human body?",
    question_hi: "मानव शरीर का सबसे बड़ा ग्रंथि कौन सा है?",
    options_en: ["Liver", "Pancreas", "Thyroid", "Pituitary"],
    options_hi: ["यकृत", "अग्न्याशय", "थायरॉयड", "पिट्यूटरी"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which part of the brain controls basic body functions like heart rate and breathing?",
    question_hi: "मस्तिष्क का कौन सा हिस्सा शरीर के बुनियादी कार्य जैसे हृदय गति और श्वसन को नियंत्रित करता है?",
    options_en: ["Cerebellum", "Cerebrum", "Medulla Oblongata", "Hypothalamus"],
    options_hi: ["सिरिबेलम", "सिरिब्रम", "मेडुला ऑब्लोंगाटा", "हाइपोथैलमस"],
    answer_en: "Medulla Oblongata",
    answer_hi: "मेडुला ऑब्लोंगाटा",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which of these is the largest organ of the human body?",
    question_hi: "इनमें से कौन सा मानव शरीर का सबसे बड़ा अंग है?",
    options_en: ["Skin", "Heart", "Liver", "Brain"],
    options_hi: ["त्वचा", "हृदय", "यकृत", "मस्तिष्क"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which blood group is known as the universal donor?",
    question_hi: "किस रक्त समूह को सार्वभौमिक दाता कहा जाता है?",
    options_en: ["A", "B", "O", "AB"],
    options_hi: ["A", "B", "O", "AB"],
    answer_en: "O",
    answer_hi: "O",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which gas is most commonly used in medical treatments?",
    question_hi: "कौन सी गैस चिकित्सीय उपचारों में सबसे अधिक उपयोग की जाती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which of the following is a type of muscle tissue?",
    question_hi: "निम्नलिखित में से कौन सा मांसपेशी ऊतक का प्रकार है?",
    options_en: ["Epithelial Tissue", "Connective Tissue", "Muscle Tissue", "Nerve Tissue"],
    options_hi: ["एपिथीलियल ऊतक", "जोड़ने वाला ऊतक", "मांसपेशी ऊतक", "तंत्रिका ऊतक"],
    answer_en: "Muscle Tissue",
    answer_hi: "मांसपेशी ऊतक",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the function of red blood cells?",
    question_hi: "लाल रक्त कोशिकाओं का कार्य क्या है?",
    options_en: ["Fight infection", "Carry oxygen", "Clot the blood", "Regulate body temperature"],
    options_hi: ["संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "रक्त का थक्का बनाना", "शरीर का तापमान नियंत्रित करना"],
    answer_en: "Carry oxygen",
    answer_hi: "ऑक्सीजन ले जाना",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which organ in the human body produces insulin?",
    question_hi: "मानव शरीर में कौन सा अंग इंसुलिन का उत्पादन करता है?",
    options_en: ["Pancreas", "Liver", "Kidneys", "Stomach"],
    options_hi: ["अग्न्याशय", "यकृत", "गुर्दे", "पेट"],
    answer_en: "Pancreas",
    answer_hi: "अग्न्याशय",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which organ is responsible for detoxifying the body?",
    question_hi: "शरीर को विषमुक्त करने का कार्य कौन सा अंग करता है?",
    options_en: ["Liver", "Kidneys", "Lungs", "Heart"],
    options_hi: ["यकृत", "गुर्दे", "फेफड़े", "हृदय"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which of the following is a function of the nervous system?",
    question_hi: "निम्नलिखित में से कौन सा तंत्रिका तंत्र का कार्य है?",
    options_en: ["Regulate metabolism", "Control heart rate", "Transmit signals", "Digest food"],
    options_hi: ["मेटाबोलिज़्म को नियंत्रित करना", "हृदय गति को नियंत्रित करना", "संकेतों को संचारित करना", "खाद्य पचाना"],
    answer_en: "Transmit signals",
    answer_hi: "संकेतों को संचारित करना",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which bone is the longest in the human body?",
    question_hi: "मानव शरीर में कौन सी हड्डी सबसे लंबी होती है?",
    options_en: ["Femur", "Tibia", "Humerus", "Radius"],
    options_hi: ["फीमर", "तिबिया", "ह्यूमरस", "रेडियस"],
    answer_en: "Femur",
    answer_hi: "फीमर",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which of the following organs is part of the respiratory system?",
    question_hi: "निम्नलिखित में से कौन सा अंग श्वसन तंत्र का हिस्सा है?",
    options_en: ["Liver", "Stomach", "Lungs", "Kidneys"],
    options_hi: ["यकृत", "पेट", "फेफड़े", "गुर्दे"],
    answer_en: "Lungs",
    answer_hi: "फेफड़े",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the largest artery in the human body?",
    question_hi: "मानव शरीर की सबसे बड़ी धमनी कौन सी है?",
    options_en: ["Pulmonary Artery", "Carotid Artery", "Aorta", "Femoral Artery"],
    options_hi: ["पल्मोनरी आर्टरी", "कैरोटिड आर्टरी", "आर्टा", "फेमोरल आर्टरी"],
    answer_en: "Aorta",
    answer_hi: "आर्टा",
    attempted: false,
    selected: ""
  },
 
  {
    num: 16,
    question_en: "What is the process of converting glucose into energy in the body called?",
    question_hi: "शरीर में ग्लूकोज को ऊर्जा में परिवर्तित करने की प्रक्रिया को क्या कहा जाता है?",
    options_en: ["Glycolysis", "Fermentation", "Respiration", "Digestion"],
    options_hi: ["ग्लाइकोलिसिस", "किण्वन", "श्वसन", "पाचन"],
    answer_en: "Glycolysis",
    answer_hi: "ग्लाइकोलिसिस",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which of the following is responsible for carrying oxygen in the blood?",
    question_hi: "निम्नलिखित में से कौन रक्त में ऑक्सीजन का परिवहन करने के लिए जिम्मेदार है?",
    options_en: ["Hemoglobin", "Plasma", "Platelets", "Leukocytes"],
    options_hi: ["हीमोग्लोबिन", "प्लाज्मा", "प्लेटलेट्स", "ल्यूकोसाइट्स"],
    answer_en: "Hemoglobin",
    answer_hi: "हीमोग्लोबिन",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What part of the brain is responsible for memory and learning?",
    question_hi: "मस्तिष्क का कौन सा हिस्सा याददाश्त और सीखने के लिए जिम्मेदार है?",
    options_en: ["Cerebellum", "Cerebrum", "Hippocampus", "Medulla Oblongata"],
    options_hi: ["सिरिबेलम", "सिरिब्रम", "हिप्पोकैम्पस", "मेडुला ऑब्लोंगाटा"],
    answer_en: "Hippocampus",
    answer_hi: "हिप्पोकैम्पस",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What type of blood cell helps in immune defense?",
    question_hi: "कौन सा रक्त कणिका इम्यून रक्षा में मदद करती है?",
    options_en: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma Cells"],
    options_hi: ["लाल रक्त कणिकाएँ", "सफेद रक्त कणिकाएँ", "प्लेटलेट्स", "प्लाज्मा कणिकाएँ"],
    answer_en: "White Blood Cells",
    answer_hi: "सफेद रक्त कणिकाएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which of the following is the most common cause of anemia?",
    question_hi: "निम्नलिखित में से एनीमिया का सबसे सामान्य कारण क्या है?",
    options_en: ["Vitamin D Deficiency", "Iron Deficiency", "Blood Loss", "Kidney Failure"],
    options_hi: ["विटामिन D की कमी", "लोहा की कमी", "रक्त की हानि", "गुर्दे की विफलता"],
    answer_en: "Iron Deficiency",
    answer_hi: "लोहा की कमी",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which of the following is the main function of platelets?",
    question_hi: "निम्नलिखित में से प्लेटलेट्स का मुख्य कार्य क्या है?",
    options_en: ["Carry oxygen", "Fight infection", "Clot blood", "Regulate body temperature"],
    options_hi: ["ऑक्सीजन ले जाना", "संक्रमण से लड़ना", "रक्त का थक्का बनाना", "शरीर का तापमान नियंत्रित करना"],
    answer_en: "Clot blood",
    answer_hi: "रक्त का थक्का बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which part of the human body is affected by Parkinson's disease?",
    question_hi: "मानव शरीर के किस हिस्से को पार्किंसन रोग प्रभावित करता है?",
    options_en: ["Liver", "Brain", "Lungs", "Heart"],
    options_hi: ["यकृत", "मस्तिष्क", "फेफड़े", "हृदय"],
    answer_en: "Brain",
    answer_hi: "मस्तिष्क",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the average pH level of human blood?",
    question_hi: "मानव रक्त का औसत pH स्तर क्या होता है?",
    options_en: ["7.0", "7.4", "8.0", "8.4"],
    options_hi: ["7.0", "7.4", "8.0", "8.4"],
    answer_en: "7.4",
    answer_hi: "7.4",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What part of the body regulates the body's metabolism?",
    question_hi: "शरीर का कौन सा हिस्सा शरीर के मेटाबोलिज़्म को नियंत्रित करता है?",
    options_en: ["Liver", "Thyroid Gland", "Adrenal Gland", "Pituitary Gland"],
    options_hi: ["यकृत", "थायरॉयड ग्रंथि", "एड्रेनल ग्रंथि", "पिट्यूटरी ग्रंथि"],
    answer_en: "Thyroid Gland",
    answer_hi: "थायरॉयड ग्रंथि",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which of the following hormones is secreted by the pancreas?",
    question_hi: "निम्नलिखित में से कौन सा हार्मोन अग्न्याशय द्वारा स्रावित होता है?",
    options_en: ["Insulin", "Adrenaline", "Thyroxine", "Cortisol"],
    options_hi: ["इंसुलिन", "एड्रेनलिन", "थायरोक्सिन", "कोर्टिसोल"],
    answer_en: "Insulin",
    answer_hi: "इंसुलिन",
    attempted: false,
    selected: ""
  },
     
  {
    num: 26,
    question_en: "Which part of the brain controls voluntary movement?",
    question_hi: "मस्तिष्क का कौन सा हिस्सा स्वैच्छिक गति को नियंत्रित करता है?",
    options_en: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Spinal Cord"],
    options_hi: ["सिरिब्रम", "सिरिबेलम", "मेडुला ऑब्लोंगाटा", "रीढ़ की हड्डी"],
    answer_en: "Cerebrum",
    answer_hi: "सिरिब्रम",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which organ is responsible for producing bile?",
    question_hi: "कौन सा अंग पित्त का उत्पादन करने के लिए जिम्मेदार है?",
    options_en: ["Liver", "Stomach", "Small Intestine", "Pancreas"],
    options_hi: ["यकृत", "पेट", "सूक्ष्म आंत", "अग्न्याशय"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which type of muscle is found in the heart?",
    question_hi: "हृदय में किस प्रकार की मांसपेशी पाई जाती है?",
    options_en: ["Skeletal Muscle", "Smooth Muscle", "Cardiac Muscle", "Voluntary Muscle"],
    options_hi: ["कंकाली मांसपेशी", "मुलायम मांसपेशी", "हृदय मांसपेशी", "स्वैच्छिक मांसपेशी"],
    answer_en: "Cardiac Muscle",
    answer_hi: "हृदय मांसपेशी",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the main function of the white blood cells?",
    question_hi: "सफेद रक्त कोशिकाओं का मुख्य कार्य क्या है?",
    options_en: ["Clot blood", "Fight infection", "Carry oxygen", "Regulate temperature"],
    options_hi: ["रक्त का थक्का बनाना", "संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "तापमान नियंत्रित करना"],
    answer_en: "Fight infection",
    answer_hi: "संक्रमण से लड़ना",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which hormone regulates the body's metabolism?",
    question_hi: "कौन सा हार्मोन शरीर के मेटाबोलिज़्म को नियंत्रित करता है?",
    options_en: ["Insulin", "Thyroxine", "Cortisol", "Adrenaline"],
    options_hi: ["इंसुलिन", "थायरोक्सिन", "कोर्टिसोल", "एड्रेनलिन"],
    answer_en: "Thyroxine",
    answer_hi: "थायरोक्सिन",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What part of the human eye controls the amount of light that enters?",
    question_hi: "मानव नेत्र का कौन सा हिस्सा उस प्रकाश की मात्रा को नियंत्रित करता है जो अंदर आता है?",
    options_en: ["Cornea", "Lens", "Pupil", "Retina"],
    options_hi: ["कॉर्निया", "लेंस", "प्यूपिल", "रेटिना"],
    answer_en: "Pupil",
    answer_hi: "प्यूपिल",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "What is the function of the small intestine?",
    question_hi: "सूक्ष्म आंत का कार्य क्या है?",
    options_en: ["Absorb nutrients", "Digest proteins", "Store bile", "Filter blood"],
    options_hi: ["पोषक तत्वों को अवशोषित करना", "प्रोटीनों का पाचन करना", "पित्त को संग्रहित करना", "रक्त को छानना"],
    answer_en: "Absorb nutrients",
    answer_hi: "पोषक तत्वों को अवशोषित करना",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which blood type is considered the universal recipient?",
    question_hi: "किस रक्त समूह को सार्वभौमिक प्राप्तकर्ता माना जाता है?",
    options_en: ["A", "B", "AB", "O"],
    options_hi: ["A", "B", "AB", "O"],
    answer_en: "AB",
    answer_hi: "AB",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which organ is primarily responsible for regulating water balance in the body?",
    question_hi: "शरीर में पानी का संतुलन नियंत्रित करने के लिए कौन सा अंग मुख्य रूप से जिम्मेदार है?",
    options_en: ["Kidneys", "Liver", "Pancreas", "Heart"],
    options_hi: ["गुर्दे", "यकृत", "अग्न्याशय", "हृदय"],
    answer_en: "Kidneys",
    answer_hi: "गुर्दे",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which disease is caused by a deficiency of vitamin C?",
    question_hi: "विटामिन C की कमी से कौन सी बीमारी होती है?",
    options_en: ["Scurvy", "Rickets", "Pellagra", "Beriberi"],
    options_hi: ["स्कर्वी", "रिकेट्स", "पेलाग्रा", "बेरिबेरी"],
    answer_en: "Scurvy",
    answer_hi: "स्कर्वी",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which of the following is a function of the kidneys?",
    question_hi: "निम्नलिखित में से कौन सा कार्य गुर्दे का है?",
    options_en: ["Filter blood", "Produce insulin", "Regulate metabolism", "Absorb nutrients"],
    options_hi: ["रक्त को छानना", "इंसुलिन का उत्पादन करना", "मेटाबोलिज़्म को नियंत्रित करना", "पोषक तत्वों को अवशोषित करना"],
    answer_en: "Filter blood",
    answer_hi: "रक्त को छानना",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the main function of the liver?",
    question_hi: "यकृत का मुख्य कार्य क्या है?",
    options_en: ["Store bile", "Filter toxins", "Produce insulin", "Store glycogen"],
    options_hi: ["पित्त संग्रहित करना", "विषाक्त पदार्थों को छानना", "इंसुलिन का उत्पादन करना", "ग्लाइकोजन संग्रहित करना"],
    answer_en: "Filter toxins",
    answer_hi: "विषाक्त पदार्थों को छानना",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which type of muscle is responsible for moving food through the digestive system?",
    question_hi: "किस प्रकार की मांसपेशी पाचन तंत्र के माध्यम से भोजन को चलाने के लिए जिम्मेदार है?",
    options_en: ["Skeletal Muscle", "Smooth Muscle", "Cardiac Muscle", "Voluntary Muscle"],
    options_hi: ["कंकाली मांसपेशी", "मुलायम मांसपेशी", "हृदय मांसपेशी", "स्वैच्छिक मांसपेशी"],
    answer_en: "Smooth Muscle",
    answer_hi: "मुलायम मांसपेशी",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which of the following is the most common cause of high blood pressure?",
    question_hi: "उच्च रक्तचाप का सबसे सामान्य कारण निम्नलिखित में से कौन सा है?",
    options_en: ["Obesity", "Lack of exercise", "Stress", "All of the above"],
    options_hi: ["मोटापा", "व्यायाम की कमी", "तनाव", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
  num: 40,
  question_en: "What is the normal range of blood pH in the human body?",
  question_hi: "मानव शरीर में रक्त का सामान्य pH सीमा क्या होती है?",
  options_en: ["7.0-7.2", "7.35-7.45", "7.8-8.0", "6.8-7.0"],
  options_hi: ["7.0-7.2", "7.35-7.45", "7.8-8.0", "6.8-7.0"],
  answer_en: "7.35-7.45",
  answer_hi: "7.35-7.45",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "What is the primary function of the respiratory system?",
  question_hi: "श्वसन तंत्र का प्राथमिक कार्य क्या है?",
  options_en: ["Oxygenating the blood", "Digestion of food", "Production of hormones", "Excretion of waste"],
  options_hi: ["रक्त में ऑक्सीजन प्रदान करना", "खाद्य का पाचन", "हार्मोन का उत्पादन", "अपशिष्ट का उत्सर्जन"],
  answer_en: "Oxygenating the blood",
  answer_hi: "रक्त में ऑक्सीजन प्रदान करना",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which of the following is a part of the large intestine?",
  question_hi: "निम्नलिखित में से कौन सा बड़ा आंत का हिस्सा है?",
  options_en: ["Cecum", "Jejunum", "Ileum", "Duodenum"],
  options_hi: ["सीकम", "जेजुनम", "इलियम", "डुओडेनम"],
  answer_en: "Cecum",
  answer_hi: "सीकम",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "What is the largest organ in the human body?",
  question_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
  options_en: ["Heart", "Brain", "Liver", "Skin"],
  options_hi: ["हृदय", "मस्तिष्क", "यकृत", "त्वचा"],
  answer_en: "Skin",
  answer_hi: "त्वचा",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which vitamin is essential for the proper clotting of blood?",
  question_hi: "रक्त के सही थक्के के लिए कौन सा विटामिन आवश्यक है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन K"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन K",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which part of the brain controls balance and coordination?",
  question_hi: "मस्तिष्क का कौन सा हिस्सा संतुलन और समन्वय को नियंत्रित करता है?",
  options_en: ["Cerebellum", "Cerebrum", "Medulla Oblongata", "Pons"],
  options_hi: ["सिरिबेलम", "सिरिब्रम", "मेडुला ऑब्लोंगाटा", "पोंस"],
  answer_en: "Cerebellum",
  answer_hi: "सिरिबेलम",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which of the following is a major component of the human blood?",
  question_hi: "निम्नलिखित में से मानव रक्त का एक प्रमुख घटक क्या है?",
  options_en: ["Plasma", "Bile", "Chyme", "Semen"],
  options_hi: ["प्लाज्मा", "पित्त", "चाइम", "वीर्य"],
  answer_en: "Plasma",
  answer_hi: "प्लाज्मा",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which organ helps in regulating blood sugar levels?",
  question_hi: "कौन सा अंग रक्त शर्करा स्तर को नियंत्रित करने में मदद करता है?",
  options_en: ["Liver", "Pancreas", "Kidneys", "Lungs"],
  options_hi: ["यकृत", "अग्न्याशय", "गुर्दे", "फेफड़े"],
  answer_en: "Pancreas",
  answer_hi: "अग्न्याशय",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "What is the primary role of the white blood cells?",
  question_hi: "सफेद रक्त कोशिकाओं का मुख्य कार्य क्या है?",
  options_en: ["Carry oxygen", "Fight infection", "Form clots", "Regulate body temperature"],
  options_hi: ["ऑक्सीजन ले जाना", "संक्रमण से लड़ना", "थक्का बनाना", "शरीर का तापमान नियंत्रित करना"],
  answer_en: "Fight infection",
  answer_hi: "संक्रमण से लड़ना",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which of the following is a disease caused by a deficiency of vitamin D?",
  question_hi: "विटामिन D की कमी से कौन सा रोग होता है?",
  options_en: ["Scurvy", "Rickets", "Anemia", "Beriberi"],
  options_hi: ["स्कर्वी", "रिकेट्स", "एनीमिया", "बेरिबेरी"],
  answer_en: "Rickets",
  answer_hi: "रिकेट्स",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which vitamin is important for the absorption of calcium?",
  question_hi: "कौन सा विटामिन कैल्शियम के अवशोषण के लिए महत्वपूर्ण है?",
  options_en: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
  options_hi: ["विटामिन A", "विटामिन D", "विटामिन E", "विटामिन K"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
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