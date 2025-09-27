const questions = [
  {
    num: 1,
    question_en: "What is the normal blood pressure range for a healthy adult?",
    question_hi: "स्वस्थ वयस्क के लिए सामान्य रक्तचाप सीमा क्या होती है?",
    options_en: ["90/60 mmHg to 120/80 mmHg", "120/80 mmHg to 140/90 mmHg", "140/90 mmHg to 160/100 mmHg", "160/100 mmHg to 180/110 mmHg"],
    options_hi: ["90/60 मिमीएचजी से 120/80 मिमीएचजी", "120/80 मिमीएचजी से 140/90 मिमीएचजी", "140/90 मिमीएचजी से 160/100 मिमीएचजी", "160/100 मिमीएचजी से 180/110 मिमीएचजी"],
    answer_en: "90/60 mmHg to 120/80 mmHg",
    answer_hi: "90/60 मिमीएचजी से 120/80 मिमीएचजी",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which of the following is a primary function of the skeletal system?",
    question_hi: "निम्नलिखित में से हड्डियों के तंत्र का प्राथमिक कार्य क्या है?",
    options_en: ["Produce red blood cells", "Regulate body temperature", "Aid in digestion", "Control movements"],
    options_hi: ["लाल रक्त कोशिकाएँ उत्पन्न करना", "शरीर का तापमान नियंत्रित करना", "पाचन में सहायता करना", "गति को नियंत्रित करना"],
    answer_en: "Produce red blood cells",
    answer_hi: "लाल रक्त कोशिकाएँ उत्पन्न करना",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which of the following is responsible for carrying oxygen to body tissues?",
    question_hi: "निम्नलिखित में से शरीर के ऊतकों तक ऑक्सीजन पहुंचाने के लिए कौन जिम्मेदार है?",
    options_en: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    options_hi: ["लाल रक्त कोशिकाएँ", "सफेद रक्त कोशिकाएँ", "प्लेटलेट्स", "प्लाज्मा"],
    answer_en: "Red blood cells",
    answer_hi: "लाल रक्त कोशिकाएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What is the function of the kidneys?",
    question_hi: "गुर्दों का कार्य क्या है?",
    options_en: ["Filter waste products from blood", "Regulate heart rate", "Produce insulin", "Aid in digestion"],
    options_hi: ["रक्त से अपशिष्ट पदार्थों को छानना", "हृदय गति को नियंत्रित करना", "इंसुलिन का उत्पादन करना", "पाचन में सहायता करना"],
    answer_en: "Filter waste products from blood",
    answer_hi: "रक्त से अपशिष्ट पदार्थों को छानना",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the main function of the digestive system?",
    question_hi: "पाचन तंत्र का मुख्य कार्य क्या है?",
    options_en: ["Absorption of nutrients", "Production of digestive enzymes", "Regulation of blood sugar", "Pumping of blood"],
    options_hi: ["पोषक तत्वों का अवशोषण", "पाचक एंजाइमों का उत्पादन", "रक्त शर्करा का नियमन", "रक्त पंप करना"],
    answer_en: "Absorption of nutrients",
    answer_hi: "पोषक तत्वों का अवशोषण",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the largest gland in the human body?",
    question_hi: "मानव शरीर में सबसे बड़ा ग्रंथि कौन सी है?",
    options_en: ["Liver", "Pancreas", "Thyroid", "Pituitary"],
    options_hi: ["यकृत", "अग्न्याशय", "थायरॉयड", "पिट्यूटरी"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which hormone is responsible for regulating metabolism?",
    question_hi: "कौन सा हार्मोन मेटाबोलिज़्म को नियंत्रित करने के लिए जिम्मेदार है?",
    options_en: ["Insulin", "Thyroxine", "Adrenaline", "Cortisol"],
    options_hi: ["इंसुलिन", "थायरोक्सिन", "एड्रेनलिन", "कोर्टिसोल"],
    answer_en: "Thyroxine",
    answer_hi: "थायरोक्सिन",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which organ is primarily responsible for the production of insulin?",
    question_hi: "कौन सा अंग मुख्य रूप से इंसुलिन का उत्पादन करता है?",
    options_en: ["Liver", "Pancreas", "Thyroid", "Kidneys"],
    options_hi: ["यकृत", "अग्न्याशय", "थायरॉयड", "गुर्दे"],
    answer_en: "Pancreas",
    answer_hi: "अग्न्याशय",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which blood type is considered the universal donor?",
    question_hi: "किस रक्त समूह को सार्वभौमिक दाता माना जाता है?",
    options_en: ["A", "B", "AB", "O"],
    options_hi: ["A", "B", "AB", "O"],
    answer_en: "O",
    answer_hi: "O",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which of the following is responsible for carrying oxygen in the blood?",
    question_hi: "निम्नलिखित में से कौन रक्त में ऑक्सीजन को परिवहन करने के लिए जिम्मेदार है?",
    options_en: ["Hemoglobin", "Plasma", "Leukocytes", "Platelets"],
    options_hi: ["हीमोग्लोबिन", "प्लाज्मा", "ल्यूकोसाइट्स", "प्लेटलेट्स"],
    answer_en: "Hemoglobin",
    answer_hi: "हीमोग्लोबिन",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which vitamin is essential for blood clotting?",
    question_hi: "रक्त के थक्के के लिए कौन सा विटामिन आवश्यक है?",
    options_en: ["Vitamin K", "Vitamin D", "Vitamin A", "Vitamin E"],
    options_hi: ["विटामिन K", "विटामिन D", "विटामिन A", "विटामिन E"],
    answer_en: "Vitamin K",
    answer_hi: "विटामिन K",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which organ filters toxins from the blood?",
    question_hi: "कौन सा अंग रक्त से विषाक्त पदार्थों को छानता है?",
    options_en: ["Liver", "Kidneys", "Lungs", "Heart"],
    options_hi: ["यकृत", "गुर्दे", "फेफड़े", "हृदय"],
    answer_en: "Kidneys",
    answer_hi: "गुर्दे",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which of the following is responsible for protecting the body from infection?",
    question_hi: "निम्नलिखित में से कौन शरीर को संक्रमण से बचाने के लिए जिम्मेदार है?",
    options_en: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
    options_hi: ["सफेद रक्त कोशिकाएँ", "लाल रक्त कोशिकाएँ", "प्लेटलेट्स", "प्लाज्मा"],
    answer_en: "White blood cells",
    answer_hi: "सफेद रक्त कोशिकाएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which organ regulates blood sugar levels?",
    question_hi: "कौन सा अंग रक्त शर्करा स्तर को नियंत्रित करता है?",
    options_en: ["Pancreas", "Liver", "Stomach", "Small intestine"],
    options_hi: ["अग्न्याशय", "यकृत", "पेट", "सूक्ष्म आंत"],
    answer_en: "Pancreas",
    answer_hi: "अग्न्याशय",
    attempted: false,
    selected: ""
  },
  {
  num: 15,
  question_en: "What is the primary function of red blood cells?",
  question_hi: "लाल रक्त कोशिकाओं का मुख्य कार्य क्या है?",
  options_en: ["Carry oxygen", "Fight infection", "Clot blood", "Produce hormones"],
  options_hi: ["ऑक्सीजन ले जाना", "संक्रमण से लड़ना", "रक्त थक्का बनाना", "हार्मोन बनाना"],
  answer_en: "Carry oxygen",
  answer_hi: "ऑक्सीजन ले जाना",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which vitamin is mainly obtained from sunlight?",
  question_hi: "कौन सा विटामिन मुख्य रूप से सूरज की रोशनी से प्राप्त होता है?",
  options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
  options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन B12"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
num: 17,
question_en: "What is the primary function of red blood cells?",
question_hi: "लाल रक्त कोशिकाओं का प्राथमिक कार्य क्या है?",
options_en: ["Carry oxygen", "Fight infections", "Clot blood", "Produce hormones"],
options_hi: ["ऑक्सीजन ले जाना", "संक्रमण से लड़ना", "रक्त थक्का बनाना", "हार्मोन बनाना"],
answer_en: "Carry oxygen",
answer_hi: "ऑक्सीजन ले जाना",
attempted: false,
selected: ""
},
{
num: 18,
question_en: "Which part of the eye controls the amount of light that enters?",
question_hi: "आँख का कौन सा हिस्सा प्रवेश करने वाली रोशनी की मात्रा को नियंत्रित करता है?",
options_en: ["Iris", "Cornea", "Retina", "Lens"],
options_hi: ["आयरिस", "कॉर्निया", "रेटिना", "लेंस"],
answer_en: "Iris",
answer_hi: "आयरिस",
attempted: false,
selected: ""
},
{
num: 19,
question_en: "What type of joint is the knee?",
question_hi: "घुटने का जोड़ किस प्रकार का होता है?",
options_en: ["Hinge joint", "Ball and socket joint", "Pivot joint", "Gliding joint"],
options_hi: ["हिंज जोड़", "बॉल और सॉकेट जोड़", "पिवट जोड़", "ग्लाइडिंग जोड़"],
answer_en: "Hinge joint",
answer_hi: "हिंज जोड़",
attempted: false,
selected: ""
},
{
num: 20,
question_en: "Which vitamin is mainly produced when the skin is exposed to sunlight?",
question_hi: "जब त्वचा सूरज की रोशनी के संपर्क में आती है तो कौन सा विटामिन मुख्य रूप से उत्पन्न होता है?",
options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B12"],
options_hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन B12"],
answer_en: "Vitamin D",
answer_hi: "विटामिन D",
attempted: false,
selected: ""
},
{
num: 21,
question_en: "Which organ is responsible for hearing and balance?",
question_hi: "कौन सा अंग सुनने और संतुलन के लिए जिम्मेदार है?",
options_en: ["Ear", "Eye", "Nose", "Tongue"],
options_hi: ["कान", "आंख", "नाक", "जीभ"],
answer_en: "Ear",
answer_hi: "कान",
attempted: false,
selected: ""
},
{
num: 22,
question_en: "Which mineral is important for strong bones?",
question_hi: "मजबूत हड्डियों के लिए कौन सा खनिज महत्वपूर्ण है?",
options_en: ["Calcium", "Iron", "Potassium", "Sodium"],
options_hi: ["कैल्शियम", "लोहा", "पोटैशियम", "सोडियम"],
answer_en: "Calcium",
answer_hi: "कैल्शियम",
attempted: false,
selected: ""
},
{
num: 23,
question_en: "Which blood vessels carry blood away from the heart?",
question_hi: "कौन सी रक्त वाहिकाएं हृदय से रक्त लेकर जाती हैं?",
options_en: ["Arteries", "Veins", "Capillaries", "Venules"],
options_hi: ["धमनी", "शिराएं", "केशिकाएं", "शिरापुट"],
answer_en: "Arteries",
answer_hi: "धमनी",
attempted: false,
selected: ""
},
{


num: 24,
question_en: "What is the basic unit of the nervous system?",
question_hi: "तंत्रिका तंत्र की मूल इकाई क्या है?",
options_en: ["Neuron", "Axon", "Dendrite", "Synapse"],
options_hi: ["तंत्रिका कोशिका", "ऐक्सॉन", "डेंड्राइट", "सिनैप्स"],
answer_en: "Neuron",
answer_hi: "तंत्रिका कोशिका",
attempted: false,
selected: ""
},

{
  num: 25,
  question_en: "Which of the following is a function of white blood cells?",
  question_hi: "निम्नलिखित में से सफेद रक्त कोशिकाओं का कार्य क्या है?",
  options_en: ["Fight infection", "Carry oxygen", "Clot blood", "Store energy"],
  options_hi: ["संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "रक्त थक्का बनाना", "ऊर्जा संग्रहित करना"],
  answer_en: "Fight infection",
  answer_hi: "संक्रमण से लड़ना",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which of the following is a part of the human circulatory system?",
  question_hi: "निम्नलिखित में से कौन सा मानव परिसंचरण तंत्र का हिस्सा है?",
  options_en: ["Heart", "Liver", "Kidneys", "Lungs"],
  options_hi: ["हृदय", "यकृत", "गुर्दे", "फेफड़े"],
  answer_en: "Heart",
  answer_hi: "हृदय",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which of the following is the largest artery in the human body?",
  question_hi: "मानव शरीर में सबसे बड़ी धमनि कौन सी है?",
  options_en: ["Pulmonary artery", "Carotid artery", "Aorta", "Femoral artery"],
  options_hi: ["फेफड़े की धमनि", "गला धमनि", "आओर्टा", "जांघ धमनि"],
  answer_en: "Aorta",
  answer_hi: "आओर्टा",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which of the following organs produces insulin?",
  question_hi: "निम्नलिखित में से कौन सा अंग इंसुलिन का उत्पादन करता है?",
  options_en: ["Pancreas", "Liver", "Stomach", "Small intestine"],
  options_hi: ["अग्न्याशय", "यकृत", "पेट", "सूक्ष्म आंत"],
  answer_en: "Pancreas",
  answer_hi: "अग्न्याशय",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which of the following bones is part of the human skeleton?",
  question_hi: "निम्नलिखित में से कौन सी हड्डी मानव कंकाल का हिस्सा है?",
  options_en: ["Femur", "Radius", "Ulna", "All of the above"],
  options_hi: ["फीमर", "रेडियस", "उल्ना", "उपरोक्त सभी"],
  answer_en: "All of the above",
  answer_hi: "उपरोक्त सभी",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which of the following is responsible for breaking down food in the stomach?",
  question_hi: "निम्नलिखित में से कौन भोजन को पेट में तोड़ने के लिए जिम्मेदार है?",
  options_en: ["Hydrochloric acid", "Pepsin", "Bile", "Pancreatic enzymes"],
  options_hi: ["हाइड्रोक्लोरिक अम्ल", "पेप्सिन", "पित्त", "अग्न्याशय एंजाइम"],
  answer_en: "Pepsin",
  answer_hi: "पेप्सिन",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Which of the following is a primary function of the lymphatic system?",
  question_hi: "निम्नलिखित में से कौन सा लसीका तंत्र का प्राथमिक कार्य है?",
  options_en: ["To transport oxygen", "To fight infection", "To absorb nutrients", "To digest food"],
  options_hi: ["ऑक्सीजन परिवहन करना", "संक्रमण से लड़ना", "पोषक तत्वों को अवशोषित करना", "खाद्य पचाना"],
  answer_en: "To fight infection",
  answer_hi: "संक्रमण से लड़ना",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which of the following is responsible for producing red blood cells?",
  question_hi: "निम्नलिखित में से कौन लाल रक्त कोशिकाओं का उत्पादन करने के लिए जिम्मेदार है?",
  options_en: ["Liver", "Bone marrow", "Kidneys", "Lungs"],
  options_hi: ["यकृत", "हड्डी का मज्जा", "गुर्दे", "फेफड़े"],
  answer_en: "Bone marrow",
  answer_hi: "हड्डी का मज्जा",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which of the following is a function of the digestive system?",
  question_hi: "निम्नलिखित में से कौन पाचन तंत्र का कार्य है?",
  options_en: ["Absorption of nutrients", "Filtering toxins", "Regulating blood pressure", "Producing hormones"],
  options_hi: ["पोषक तत्वों का अवशोषण", "विषाक्त पदार्थों को छानना", "रक्तचाप का नियंत्रण", "हार्मोन का उत्पादन"],
  answer_en: "Absorption of nutrients",
  answer_hi: "पोषक तत्वों का अवशोषण",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which part of the body controls voluntary movements?",
  question_hi: "शरीर का कौन सा हिस्सा स्वैच्छिक आंदोलनों को नियंत्रित करता है?",
  options_en: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Pons"],
  options_hi: ["सिरिब्रम", "सिरिबेलम", "मेडुला ऑब्लोंगाटा", "पोंस"],
  answer_en: "Cerebrum",
  answer_hi: "सिरिब्रम",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which of the following glands is responsible for the production of thyroid hormones?",
  question_hi: "निम्नलिखित में से कौन सी ग्रंथि थायरॉयड हार्मोन के उत्पादन के लिए जिम्मेदार है?",
  options_en: ["Pituitary gland", "Thyroid gland", "Adrenal glands", "Pancreas"],
  options_hi: ["पिट्यूटरी ग्रंथि", "थायरॉयड ग्रंथि", "एड्रेनल ग्रंथियाँ", "अग्न्याशय"],
  answer_en: "Thyroid gland",
  answer_hi: "थायरॉयड ग्रंथि",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which part of the body is primarily responsible for filtering blood?",
  question_hi: "शरीर का कौन सा हिस्सा मुख्य रूप से रक्त को छानने के लिए जिम्मेदार है?",
  options_en: ["Kidneys", "Liver", "Lungs", "Spleen"],
  options_hi: ["गुर्दे", "यकृत", "फेफड़े", "प्लीहा"],
  answer_en: "Kidneys",
  answer_hi: "गुर्दे",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which of the following organs is part of the excretory system?",
  question_hi: "निम्नलिखित में से कौन सा अंग उत्सर्जन तंत्र का हिस्सा है?",
  options_en: ["Kidneys", "Liver", "Heart", "Lungs"],
  options_hi: ["गुर्दे", "यकृत", "हृदय", "फेफड़े"],
  answer_en: "Kidneys",
  answer_hi: "गुर्दे",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which of the following is responsible for the sense of smell?",
  question_hi: "निम्नलिखित में से कौन गंध की भावना के लिए जिम्मेदार है?",
  options_en: ["Nose", "Tongue", "Ear", "Eyes"],
  options_hi: ["नाक", "जीभ", "कान", "आँखें"],
  answer_en: "Nose",
  answer_hi: "नाक",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which of the following is a part of the central nervous system?",
  question_hi: "निम्नलिखित में से कौन सा केंद्रीय तंत्रिका तंत्र का हिस्सा है?",
  options_en: ["Brain", "Heart", "Liver", "Lungs"],
  options_hi: ["मस्तिष्क", "हृदय", "यकृत", "फेफड़े"],
  answer_en: "Brain",
  answer_hi: "मस्तिष्क",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which of the following organs is involved in the process of respiration?",
  question_hi: "निम्नलिखित में से कौन सा अंग श्वसन प्रक्रिया में शामिल है?",
  options_en: ["Lungs", "Stomach", "Liver", "Heart"],
  options_hi: ["फेफड़े", "पेट", "यकृत", "हृदय"],
  answer_en: "Lungs",
  answer_hi: "फेफड़े",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which part of the human body is responsible for regulating body temperature?",
  question_hi: "मानव शरीर का कौन सा हिस्सा शरीर के तापमान को नियंत्रित करने के लिए जिम्मेदार है?",
  options_en: ["Hypothalamus", "Pituitary gland", "Liver", "Kidneys"],
  options_hi: ["हाइपोथैलेमस", "पिट्यूटरी ग्रंथि", "यकृत", "गुर्दे"],
  answer_en: "Hypothalamus",
  answer_hi: "हाइपोथैलेमस",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which of the following is a function of the spleen?",
  question_hi: "निम्नलिखित में से प्लीहा का कौन सा कार्य है?",
  options_en: ["Filters blood", "Produces insulin", "Stores bile", "Regulates blood pressure"],
  options_hi: ["रक्त को छानना", "इंसुलिन का उत्पादन", "पित्त का भंडारण", "रक्तचाप नियंत्रित करना"],
  answer_en: "Filters blood",
  answer_hi: "रक्त को छानना",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which of the following types of blood vessels carry blood away from the heart?",
  question_hi: "निम्नलिखित में से कौन सी रक्त वाहिकाएँ हृदय से रक्त को बाहर की ओर ले जाती हैं?",
  options_en: ["Arteries", "Veins", "Capillaries", "Lymphatic vessels"],
  options_hi: ["धमिनियाँ", "शिराएँ", "सूक्ष्म रक्त वाहिकाएँ", "लसीका वाहिकाएँ"],
  answer_en: "Arteries",
  answer_hi: "धमिनियाँ",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which vitamin is produced when the skin is exposed to sunlight?",
  question_hi: "जब त्वचा सूर्य की रोशनी में आती है तो कौन सा विटामिन बनता है?",
  options_en: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B12", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which of the following is a part of the respiratory system?",
  question_hi: "निम्नलिखित में से कौन सा श्वसन तंत्र का हिस्सा है?",
  options_en: ["Trachea", "Esophagus", "Kidneys", "Heart"],
  options_hi: ["श्वासनली", "ग्रासनली", "गुर्दे", "हृदय"],
  answer_en: "Trachea",
  answer_hi: "श्वासनली",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "What is the main function of platelets in the blood?",
  question_hi: "रक्त में प्लेटलेट्स का मुख्य कार्य क्या है?",
  options_en: ["Carry oxygen", "Help blood clot", "Fight infection", "Produce hormones"],
  options_hi: ["ऑक्सीजन ले जाना", "रक्त का थक्का बनाना", "संक्रमण से लड़ना", "हार्मोन बनाना"],
  answer_en: "Help blood clot",
  answer_hi: "रक्त का थक्का बनाना",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which part of the brain controls balance and coordination?",
  question_hi: "मस्तिष्क का कौन सा हिस्सा संतुलन और समन्वय को नियंत्रित करता है?",
  options_en: ["Cerebellum", "Cerebrum", "Medulla", "Pons"],
  options_hi: ["सिरिबेलम", "सिरिब्रम", "मेडुला", "पोंस"],
  answer_en: "Cerebellum",
  answer_hi: "सिरिबेलम",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which blood type is known as the universal donor?",
  question_hi: "कौन सा रक्त प्रकार यूनिवर्सल डोनर के रूप में जाना जाता है?",
  options_en: ["A", "B", "AB", "O"],
  options_hi: ["A", "B", "AB", "O"],
  answer_en: "O",
  answer_hi: "O",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which organ is responsible for detoxifying chemicals and metabolizing drugs?",
  question_hi: "कौन सा अंग रसायनों को डिटॉक्सिफाई करने और दवाओं के मेटाबोलिज़्म के लिए जिम्मेदार है?",
  options_en: ["Liver", "Kidneys", "Lungs", "Heart"],
  options_hi: ["यकृत", "गुर्दे", "फेफड़े", "हृदय"],
  answer_en: "Liver",
  answer_hi: "यकृत",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which system in the human body is responsible for producing hormones?",
  question_hi: "मानव शरीर का कौन सा तंत्र हार्मोन का उत्पादन करता है?",
  options_en: ["Nervous system", "Endocrine system", "Circulatory system", "Digestive system"],
  options_hi: ["तंत्रिका तंत्र", "एंडोक्राइन तंत्र", "परिसंचरण तंत्र", "पाचन तंत्र"],
  answer_en: "Endocrine system",
  answer_hi: "एंडोक्राइन तंत्र",
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