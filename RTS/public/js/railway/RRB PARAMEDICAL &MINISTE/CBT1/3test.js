const questions = [
  {
    num: 1,
    question_en: "Which vitamin is essential for vision?",
    question_hi: "दृष्टि के लिए कौन सा विटामिन आवश्यक है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin A",
    answer_hi: "विटामिन A",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Who was the first woman Prime Minister of India?",
    question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    options_en: ["Indira Gandhi", "Sarojini Naidu", "Sonia Gandhi", "Meira Kumar"],
    options_hi: ["इंदिरा गांधी", "सरोजिनी नायडू", "सोनिया गांधी", "मीरा कुमार"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which of the following is a communicable disease?",
    question_hi: "निम्नलिखित में से कौन सा संक्रामक रोग है?",
    options_en: ["Cancer", "Diabetes", "Tuberculosis", "Asthma"],
    options_hi: ["कैंसर", "मधुमेह", "टीबी", "दमा"],
    answer_en: "Tuberculosis",
    answer_hi: "टीबी",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which Indian river flows westward?",
    question_hi: "कौन सी भारतीय नदी पश्चिम दिशा में बहती है?",
    options_en: ["Ganga", "Yamuna", "Narmada", "Godavari"],
    options_hi: ["गंगा", "यमुना", "नर्मदा", "गोदावरी"],
    answer_en: "Narmada",
    answer_hi: "नर्मदा",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the normal pH of human blood?",
    question_hi: "मानव रक्त का सामान्य pH मान क्या होता है?",
    options_en: ["6.5", "7.0", "7.4", "8.0"],
    options_hi: ["6.5", "7.0", "7.4", "8.0"],
    answer_en: "7.4",
    answer_hi: "7.4",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which part of the plant absorbs water and minerals?",
    question_hi: "पौधे का कौन सा भाग जल और खनिजों को अवशोषित करता है?",
    options_en: ["Leaf", "Stem", "Root", "Flower"],
    options_hi: ["पत्ता", "तना", "जड़", "फूल"],
    answer_en: "Root",
    answer_hi: "जड़",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Who is the Supreme Commander of the Indian Armed Forces?",
    question_hi: "भारतीय सशस्त्र बलों का सर्वोच्च कमांडर कौन होता है?",
    options_en: ["Prime Minister", "Chief of Defence Staff", "President", "Home Minister"],
    options_hi: ["प्रधानमंत्री", "चीफ ऑफ डिफेंस स्टाफ", "राष्ट्रपति", "गृह मंत्री"],
    answer_en: "President",
    answer_hi: "राष्ट्रपति",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which is the smallest bone in the human body?",
    question_hi: "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
    options_en: ["Stapes", "Femur", "Tibia", "Ulna"],
    options_hi: ["स्टेप्स", "फीमर", "टिबिया", "अलना"],
    answer_en: "Stapes",
    answer_hi: "स्टेप्स",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which is the national aquatic animal of India?",
    question_hi: "भारत का राष्ट्रीय जलीय प्राणी कौन है?",
    options_en: ["Blue Whale", "Ganges River Dolphin", "Shark", "Turtle"],
    options_hi: ["ब्लू व्हेल", "गंगा डॉल्फिन", "शार्क", "कछुआ"],
    answer_en: "Ganges River Dolphin",
    answer_hi: "गंगा डॉल्फिन",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Where is the Taj Mahal located?",
    question_hi: "ताजमहल कहाँ स्थित है?",
    options_en: ["Delhi", "Agra", "Lucknow", "Jaipur"],
    options_hi: ["दिल्ली", "आगरा", "लखनऊ", "जयपुर"],
    answer_en: "Agra",
    answer_hi: "आगरा",
    attempted: false,
    selected: ""
  },


    
  
  {
    num: 11,
    question_en: "Which element is used in the treatment of goiter?",
    question_hi: "घेंघा रोग के इलाज में किस तत्व का उपयोग होता है?",
    options_en: ["Iron", "Iodine", "Calcium", "Zinc"],
    options_hi: ["लोहा", "आयोडीन", "कैल्शियम", "जिंक"],
    answer_en: "Iodine",
    answer_hi: "आयोडीन",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which of the following is not a primary color?",
    question_hi: "निम्नलिखित में से कौन सा प्राथमिक रंग नहीं है?",
    options_en: ["Red", "Green", "Blue", "Yellow"],
    options_hi: ["लाल", "हरा", "नीला", "पीला"],
    answer_en: "Green",
    answer_hi: "हरा",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Who wrote the Indian national anthem?",
    question_hi: "भारतीय राष्ट्रगान किसने लिखा?",
    options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhash Chandra Bose"],
    options_hi: ["बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ टैगोर", "सरोजिनी नायडू", "सुभाष चंद्र बोस"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which is the largest desert in the world?",
    question_hi: "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
    options_en: ["Sahara", "Gobi", "Kalahari", "Arctic"],
    options_hi: ["सहारा", "गोबी", "कालाहारी", "आर्कटिक"],
    answer_en: "Sahara",
    answer_hi: "सहारा",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which planet is known for its rings?",
    question_hi: "कौन सा ग्रह अपनी वलयों के लिए प्रसिद्ध है?",
    options_en: ["Mars", "Jupiter", "Saturn", "Neptune"],
    options_hi: ["मंगल", "बृहस्पति", "शनि", "नेप्च्यून"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "What is the main function of red blood cells?",
    question_hi: "लाल रक्त कोशिकाओं का मुख्य कार्य क्या है?",
    options_en: ["Fight infections", "Clot blood", "Carry oxygen", "Produce hormones"],
    options_hi: ["संक्रमण से लड़ना", "रक्त का थक्का बनाना", "ऑक्सीजन ले जाना", "हार्मोन उत्पन्न करना"],
    answer_en: "Carry oxygen",
    answer_hi: "ऑक्सीजन ले जाना",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which of the following is a renewable source of energy?",
    question_hi: "निम्नलिखित में से कौन सा ऊर्जा का अक्षय स्रोत है?",
    options_en: ["Coal", "Petroleum", "Wind", "Natural gas"],
    options_hi: ["कोयला", "पेट्रोलियम", "पवन", "प्राकृतिक गैस"],
    answer_en: "Wind",
    answer_hi: "पवन",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which instrument is used to measure blood pressure?",
    question_hi: "रक्तचाप मापने के लिए कौन सा उपकरण उपयोग होता है?",
    options_en: ["Stethoscope", "Thermometer", "Sphygmomanometer", "Barometer"],
    options_hi: ["स्टेथोस्कोप", "थर्मामीटर", "स्फिग्मोमैनोमीटर", "बैरोमीटर"],
    answer_en: "Sphygmomanometer",
    answer_hi: "स्फिग्मोमैनोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the full form of ECG?",
    question_hi: "ECG का पूर्ण रूप क्या है?",
    options_en: ["Electrocardiogram", "Electrocardiograph", "Electrocardiometry", "Electrocardiology"],
    options_hi: ["इलेक्ट्रोकार्डियोग्राम", "इलेक्ट्रोकार्डियोग्राफ", "इलेक्ट्रोकार्डियोमेट्री", "इलेक्ट्रोकार्डियोलॉजी"],
    answer_en: "Electrocardiogram",
    answer_hi: "इलेक्ट्रोकार्डियोग्राम",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which blood group is known as the universal donor?",
    question_hi: "कौन सा रक्त समूह सार्वत्रिक दाता कहलाता है?",
    options_en: ["A", "B", "AB", "O negative"],
    options_hi: ["A", "B", "AB", "O नकारात्मक"],
    answer_en: "O negative",
    answer_hi: "O नकारात्मक",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which language is used to write computer programs?",
    question_hi: "कंप्यूटर प्रोग्राम लिखने के लिए कौन सी भाषा उपयोग की जाती है?",
    options_en: ["HTML", "Python", "MS Word", "Photoshop"],
    options_hi: ["एचटीएमएल", "पाइथन", "एमएस वर्ड", "फोटोशॉप"],
    answer_en: "Python",
    answer_hi: "पाइथन",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which body part continues to grow throughout life?",
    question_hi: "कौन सा शरीर का हिस्सा जीवन भर बढ़ता रहता है?",
    options_en: ["Eyes", "Heart", "Nose", "Liver"],
    options_hi: ["आंखें", "हृदय", "नाक", "यकृत"],
    answer_en: "Nose",
    answer_hi: "नाक",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Where is the headquarters of the Indian Railways?",
    question_hi: "भारतीय रेलवे का मुख्यालय कहाँ है?",
    options_en: ["Delhi", "Mumbai", "Kolkata", "New Delhi"],
    options_hi: ["दिल्ली", "मुंबई", "कोलकाता", "नई दिल्ली"],
    answer_en: "New Delhi",
    answer_hi: "नई दिल्ली",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which is the hardest substance in the human body?",
    question_hi: "मानव शरीर में सबसे कठोर पदार्थ कौन सा है?",
    options_en: ["Bones", "Tooth enamel", "Nails", "Hair"],
    options_hi: ["हड्डियाँ", "दांत की एनामेल", "नाखून", "बाल"],
    answer_en: "Tooth enamel",
    answer_hi: "दांत की एनामेल",
    attempted: false,
    selected: ""
  },
  
  {
    num: 25,
    question_en: "Which Indian city is known as the Pink City?",
    question_hi: "भारत का कौन सा शहर 'गुलाबी शहर' कहलाता है?",
    options_en: ["Udaipur", "Jaipur", "Jodhpur", "Bikaner"],
    options_hi: ["उदयपुर", "जयपुर", "जोधपुर", "बीकानेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which of the following is an example of a public good?",
    question_hi: "निम्नलिखित में से कौन एक सार्वजनिक वस्तु का उदाहरण है?",
    options_en: ["Electricity", "National defense", "Mobile service", "Food grains"],
    options_hi: ["बिजली", "राष्ट्रीय रक्षा", "मोबाइल सेवा", "अनाज"],
    answer_en: "National defense",
    answer_hi: "राष्ट्रीय रक्षा",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What does fiscal deficit mean?",
    question_hi: "राजकोषीय घाटे का क्या अर्थ है?",
    options_en: ["Total expenditure exceeds total revenue", "Total income exceeds total expenditure", "Revenue is equal to expenditure", "Only revenue deficit exists"],
    options_hi: ["कुल व्यय कुल राजस्व से अधिक होता है", "कुल आय कुल व्यय से अधिक होती है", "राजस्व और व्यय समान होते हैं", "केवल राजस्व घाटा होता है"],
    answer_en: "Total expenditure exceeds total revenue",
    answer_hi: "कुल व्यय कुल राजस्व से अधिक होता है",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which among the following is considered the most liquid asset?",
    question_hi: "निम्नलिखित में से किसे सबसे तरल संपत्ति माना जाता है?",
    options_en: ["Real estate", "Gold", "Cash", "Stock"],
    options_hi: ["अचल संपत्ति", "सोना", "नकद", "शेयर"],
    answer_en: "Cash",
    answer_hi: "नकद",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which type of unemployment occurs due to mismatch of skills?",
    question_hi: "कौशल की असमानता के कारण कौन सी बेरोज़गारी होती है?",
    options_en: ["Structural", "Frictional", "Seasonal", "Cyclical"],
    options_hi: ["संरचनात्मक", "घर्षणात्मक", "मौसमी", "चक्रीय"],
    answer_en: "Structural",
    answer_hi: "संरचनात्मक",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which of the following is not included in the calculation of GDP?",
    question_hi: "निम्नलिखित में से कौन GDP की गणना में शामिल नहीं होता?",
    options_en: ["Value of production", "Illegal activities", "Government spending", "Exports"],
    options_hi: ["उत्पादन का मूल्य", "अवैध गतिविधियाँ", "सरकारी खर्च", "निर्यात"],
    answer_en: "Illegal activities",
    answer_hi: "अवैध गतिविधियाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is meant by ‘depreciation’ in economics?",
    question_hi: "अर्थशास्त्र में ‘मूल्यह्रास’ का क्या अर्थ है?",
    options_en: ["Decrease in value of currency", "Decrease in value of capital assets", "Increase in production", "Decrease in GDP"],
    options_hi: ["मुद्रा के मूल्य में कमी", "पूंजी संपत्तियों के मूल्य में कमी", "उत्पादन में वृद्धि", "GDP में कमी"],
    answer_en: "Decrease in value of capital assets",
    answer_hi: "पूंजी संपत्तियों के मूल्य में कमी",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which institution releases the Consumer Price Index in India?",
    question_hi: "भारत में उपभोक्ता मूल्य सूचकांक कौन जारी करता है?",
    options_en: ["RBI", "Finance Ministry", "CSO", "Labour Bureau"],
    options_hi: ["RBI", "वित्त मंत्रालय", "सीएसओ", "श्रम ब्यूरो"],
    answer_en: "Labour Bureau",
    answer_hi: "श्रम ब्यूरो",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Monopoly is a market structure characterized by:",
    question_hi: "एकाधिकार वह बाजार संरचना है जिसमें होता है:",
    options_en: ["Many sellers", "One seller", "Few buyers", "Free entry and exit"],
    options_hi: ["कई विक्रेता", "एक विक्रेता", "कुछ खरीदार", "मुक्त प्रवेश और निकास"],
    answer_en: "One seller",
    answer_hi: "एक विक्रेता",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which sector has the largest contribution to India’s GDP?",
    question_hi: "भारत की GDP में सबसे अधिक योगदान किस क्षेत्र का है?",
    options_en: ["Agriculture", "Industry", "Services", "Mining"],
    options_hi: ["कृषि", "उद्योग", "सेवाएं", "खनन"],
    answer_en: "Services",
    answer_hi: "सेवाएं",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which one of the following is an example of a regressive tax?",
    question_hi: "निम्नलिखित में से कौन प्रतिगामी कर का उदाहरण है?",
    options_en: ["Income tax", "Property tax", "Sales tax", "Corporate tax"],
    options_hi: ["आयकर", "संपत्ति कर", "विक्री कर", "कॉरपोरेट कर"],
    answer_en: "Sales tax",
    answer_hi: "विक्री कर",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which of the following is used to control inflation?",
    question_hi: "मुद्रास्फीति को नियंत्रित करने के लिए निम्न में से क्या उपयोग किया जाता है?",
    options_en: ["Lowering interest rates", "Reducing money supply", "Increasing subsidies", "Increasing public spending"],
    options_hi: ["ब्याज दरों को कम करना", "मुद्रा आपूर्ति को घटाना", "सब्सिडी बढ़ाना", "सरकारी खर्च बढ़ाना"],
    answer_en: "Reducing money supply",
    answer_hi: "मुद्रा आपूर्ति को घटाना",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Dumping in economics refers to:",
    question_hi: "अर्थशास्त्र में डंपिंग का तात्पर्य है:",
    options_en: ["Importing low-quality goods", "Exporting goods at a price lower than home market", "Illegal trade", "Selling fake goods"],
    options_hi: ["निम्न गुणवत्ता वाली वस्तुओं का आयात", "वस्तुओं का निर्यात घरेलू बाजार से कम कीमत पर", "अवैध व्यापार", "नकली वस्तुओं की बिक्री"],
    answer_en: "Exporting goods at a price lower than home market",
    answer_hi: "वस्तुओं का निर्यात घरेलू बाजार से कम कीमत पर",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which is not a function of the Reserve Bank of India?",
    question_hi: "निम्नलिखित में से कौन भारतीय रिजर्व बैंक का कार्य नहीं है?",
    options_en: ["Monetary policy implementation", "Issuing currency", "Lending to public", "Regulating banks"],
    options_hi: ["मौद्रिक नीति लागू करना", "मुद्रा जारी करना", "जनता को ऋण देना", "बैंकों को विनियमित करना"],
    answer_en: "Lending to public",
    answer_hi: "जनता को ऋण देना",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which Indian economist is associated with the Green Revolution?",
    question_hi: "ग्रीन रेवोल्यूशन से संबंधित भारतीय अर्थशास्त्री कौन हैं?",
    options_en: ["Amartya Sen", "C. Rangarajan", "M.S. Swaminathan", "Montek Singh Ahluwalia"],
    options_hi: ["अमर्त्य सेन", "सी. रंगराजन", "एम. एस. स्वामीनाथन", "मोंटेक सिंह अहलूवालिया"],
    answer_en: "M.S. Swaminathan",
    answer_hi: "एम. एस. स्वामीनाथन",
    attempted: false,
    selected : ""
  },
{
    num: 40,
    question_en: "Which term is used for the buying and selling of government securities in the open market?",
    question_hi: "सरकारी प्रतिभूतियों की खुले बाजार में खरीद और बिक्री को क्या कहते हैं?",
    options_en: ["Bank Rate", "Open Market Operations", "Repo Rate", "CRR"],
    options_hi: ["बैंक दर", "ओपन मार्केट ऑपरेशंस", "रेपो रेट", "सीआरआर"],
    answer_en: "Open Market Operations",
    answer_hi: "ओपन मार्केट ऑपरेशंस",
    attempted: false,
    selected: ""
  },
  
  {
    num: 41,
    question_en: "What does 'GDP deflator' measure?",
    question_hi: "GDP डेफ़्लेटर’ क्या मापता है?",
    options_en: [
      "Change in nominal GDP",
      "Change in real GDP",
      "Change in price level",
      "Change in employment"
    ],
    options_hi: [
      "नाममात्र GDP में बदलाव",
      "वास्तविक GDP में बदलाव",
      "मूल्य स्तर में बदलाव",
      "रोजगार में बदलाव"
    ],
    answer_en: "Change in price level",
    answer_hi: "मूल्य स्तर में बदलाव",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which of the following is a direct tax?",
    question_hi: "निम्नलिखित में से कौन सी कर प्रत्यक्ष कर है?",
    options_en: [
      "Excise duty",
      "Customs duty",
      "Income tax",
      "Sales tax"
    ],
    options_hi: [
      "उत्पाद शुल्क",
      "सीमा शुल्क",
      "आयकर",
      "विक्रय कर"
    ],
    answer_en: "Income tax",
    answer_hi: "आयकर",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which financial institution primarily regulates the stock market in India?",
    question_hi: "भारत में मुख्य रूप से कौन सा वित्तीय संस्थान शेयर बाजार को नियंत्रित करता है?",
    options_en: [
      "RBI",
      "SEBI",
      "IRDA",
      "PFRDA"
    ],
    options_hi: [
      "आरबीआई",
      "सेबी",
      "आईआरडीए",
      "पीएफआरडीए"
    ],
    answer_en: "SEBI",
    answer_hi: "सेबी",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What is 'monetary policy' primarily concerned with?",
    question_hi: "‘मौद्रिक नीति’ मुख्य रूप से किससे संबंधित होती है?",
    options_en: [
      "Government spending",
      "Taxation",
      "Control of money supply",
      "Foreign trade"
    ],
    options_hi: [
      "सरकारी खर्च",
      "कराधान",
      "मुद्रा आपूर्ति नियंत्रण",
      "विदेशी व्यापार"
    ],
    answer_en: "Control of money supply",
    answer_hi: "मुद्रा आपूर्ति नियंत्रण",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which of the following is a characteristic of a perfectly competitive market?",
    question_hi: "निम्नलिखित में से पूर्णत: प्रतिस्पर्धी बाजार की विशेषता क्या है?",
    options_en: [
      "Few sellers",
      "Product differentiation",
      "Free entry and exit",
      "Single seller"
    ],
    options_hi: [
      "कुछ विक्रेता",
      "उत्पाद भेदभाव",
      "मुक्त प्रवेश और निकास",
      "एक विक्रेता"
    ],
    answer_en: "Free entry and exit",
    answer_hi: "मुक्त प्रवेश और निकास",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the main purpose of the Goods and Services Tax (GST) in India?",
    question_hi: "भारत में वस्तु एवं सेवा कर (GST) का मुख्य उद्देश्य क्या है?",
    options_en: [
      "To increase government revenue",
      "To replace multiple indirect taxes",
      "To promote exports",
      "To tax agricultural products"
    ],
    options_hi: [
      "सरकारी राजस्व बढ़ाना",
      "कई अप्रत्यक्ष करों को बदलना",
      "निर्यात को बढ़ावा देना",
      "कृषि उत्पादों पर कर लगाना"
    ],
    answer_en: "To replace multiple indirect taxes",
    answer_hi: "कई अप्रत्यक्ष करों को बदलना",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which sector employs the largest portion of India’s workforce?",
    question_hi: "भारत की कार्यबल का सबसे बड़ा हिस्सा किस क्षेत्र में कार्यरत है?",
    options_en: [
      "Agriculture",
      "Manufacturing",
      "Services",
      "Mining"
    ],
    options_hi: [
      "कृषि",
      "उद्योग",
      "सेवाएं",
      "खनन"
    ],
    answer_en: "Agriculture",
    answer_hi: "कृषि",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "What is meant by 'Repo Rate'?",
    question_hi: "‘रेपो रेट’ का क्या अर्थ है?",
    options_en: [
      "Rate at which RBI lends to commercial banks",
      "Rate at which banks lend to public",
      "Interest rate on government bonds",
      "Tax rate on income"
    ],
    options_hi: [
      "जिस दर पर RBI वाणिज्यिक बैंकों को उधार देता है",
      "जिस दर पर बैंक जनता को उधार देते हैं",
      "सरकारी बॉन्ड पर ब्याज दर",
      "आय पर कर दर"
    ],
    answer_en: "Rate at which RBI lends to commercial banks",
    answer_hi: "जिस दर पर RBI वाणिज्यिक बैंकों को उधार देता है",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which is the largest source of revenue for the Government of India?",
    question_hi: "भारत सरकार के लिए सबसे बड़ा राजस्व स्रोत क्या है?",
    options_en: [
      "Income tax",
      "Customs duty",
      "Corporate tax",
      "Goods and Services Tax (GST)"
    ],
    options_hi: [
      "आयकर",
      "सीमा शुल्क",
      "कॉर्पोरेट टैक्स",
      "वस्तु एवं सेवा कर (GST)"
    ],
    answer_en: "Goods and Services Tax (GST)",
    answer_hi: "वस्तु एवं सेवा कर (GST)",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What is meant by 'Fiscal Policy'?",
    question_hi: "‘राजकोषीय नीति’ का क्या अर्थ है?",
    options_en: [
      "Policy relating to government revenue and expenditure",
      "Policy relating to money supply",
      "Policy for controlling inflation",
      "Policy for international trade"
    ],
    options_hi: [
      "सरकारी राजस्व और व्यय से संबंधित नीति",
      "मुद्रा आपूर्ति से संबंधित नीति",
      "मुद्रास्फीति को नियंत्रित करने की नीति",
      "अंतरराष्ट्रीय व्यापार के लिए नीति"
    ],
    answer_en: "Policy relating to government revenue and expenditure",
    answer_hi: "सरकारी राजस्व और व्यय से संबंधित नीति",
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