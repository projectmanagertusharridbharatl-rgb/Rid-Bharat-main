const questions = [
  {
    num: 1,
    question_en: "Which gland is known as the master gland?",
    question_hi: "किस ग्रंथि को मास्टर ग्रंथि कहा जाता है?",
    options_en: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
    options_hi: ["थायरॉइड", "पिट्यूटरी", "एड्रिनल", "अग्न्याशय"],
    answer_en: "Pituitary",
    answer_hi: "पिट्यूटरी",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which is the largest organ in the human body?",
    question_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Heart", "Lungs"],
    options_hi: ["यकृत", "त्वचा", "हृदय", "फेफड़े"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which Indian state has the longest coastline?",
    question_hi: "भारत में सबसे लंबा समुद्री तट किस राज्य का है?",
    options_en: ["Kerala", "Tamil Nadu", "Gujarat", "Odisha"],
    options_hi: ["केरल", "तमिलनाडु", "गुजरात", "ओडिशा"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which gas is used for respiration by humans?",
    question_hi: "मानव श्वसन के लिए कौन सी गैस आवश्यक है?",
    options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Who was the first President of independent India?",
    question_hi: "स्वतंत्र भारत के पहले राष्ट्रपति कौन थे?",
    options_en: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
    options_hi: ["डॉ. राजेन्द्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
    answer_en: "Dr. Rajendra Prasad",
    answer_hi: "डॉ. राजेन्द्र प्रसाद",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the capital of Himachal Pradesh?",
    question_hi: "हिमाचल प्रदेश की राजधानी क्या है?",
    options_en: ["Dharamshala", "Shimla", "Kullu", "Manali"],
    options_hi: ["धर्मशाला", "शिमला", "कुल्लू", "मनाली"],
    answer_en: "Shimla",
    answer_hi: "शिमला",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which mineral is essential for the formation of bones?",
    question_hi: "हड्डियों के निर्माण के लिए कौन सा खनिज आवश्यक है?",
    options_en: ["Iron", "Zinc", "Calcium", "Phosphorus"],
    options_hi: ["लोहा", "जिंक", "कैल्शियम", "फॉस्फोरस"],
    answer_en: "Calcium",
    answer_hi: "कैल्शियम",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which Indian state is famous for 'Bihu' festival?",
    question_hi: "'बीहू' त्योहार किस भारतीय राज्य से संबंधित है?",
    options_en: ["West Bengal", "Odisha", "Assam", "Manipur"],
    options_hi: ["पश्चिम बंगाल", "ओडिशा", "असम", "मणिपुर"],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the chemical formula of water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["CO2", "H2O", "O2", "NaCl"],
    options_hi: ["CO2", "H2O", "O2", "NaCl"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the currency of Japan?",
    question_hi: "जापान की मुद्रा क्या है?",
    options_en: ["Won", "Yen", "Dollar", "Euro"],
    options_hi: ["वॉन", "येन", "डॉलर", "यूरो"],
    answer_en: "Yen",
    answer_hi: "येन",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which part of the body filters blood?",
    question_hi: "शरीर का कौन सा अंग रक्त को छानता है?",
    options_en: ["Heart", "Liver", "Kidney", "Lungs"],
    options_hi: ["हृदय", "यकृत", "गुर्दा", "फेफड़े"],
    answer_en: "Kidney",
    answer_hi: "गुर्दा",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which Indian state is known as the 'Land of Five Rivers'?",
    question_hi: "भारत का 'पाँच नदियों की भूमि' कौन सा राज्य है?",
    options_en: ["Punjab", "Haryana", "Rajasthan", "Gujarat"],
    options_hi: ["पंजाब", "हरियाणा", "राजस्थान", "गुजरात"],
    answer_en: "Punjab",
    answer_hi: "पंजाब",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the pH value of neutral water?",
    question_hi: "न्यूट्रल पानी का pH मान कितना होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which Indian scientist discovered the Raman Effect?",
    question_hi: "रामन प्रभाव की खोज किस भारतीय वैज्ञानिक ने की थी?",
    options_en: ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "A.P.J. Abdul Kalam"],
    options_hi: ["सी. वी. रामन", "होमी भाभा", "विक्रम साराभाई", "ए. पी. जे. अब्दुल कलाम"],
    answer_en: "C.V. Raman",
    answer_hi: "सी. वी. रामन",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which planet is known as the Red Planet?",
    question_hi: "कौन सा ग्रह 'लाल ग्रह' कहलाता है?",
    options_en: ["Earth", "Mars", "Venus", "Jupiter"],
    options_hi: ["पृथ्वी", "मंगल", "शुक्र", "बृहस्पति"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
  },

   
  {
    num: 16,
    question_en: "Which gas is essential for photosynthesis?",
    question_hi: "प्रकाश संश्लेषण के लिए कौन सी गैस आवश्यक होती है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the boiling point of water at sea level?",
    question_hi: "समुद्र तल पर पानी का क्वथनांक कितना होता है?",
    options_en: ["90°C", "95°C", "100°C", "105°C"],
    options_hi: ["90°C", "95°C", "100°C", "105°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Who discovered gravity?",
    question_hi: "गुरुत्वाकर्षण की खोज किसने की थी?",
    options_en: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    options_hi: ["आल्बर्ट आइंस्टीन", "आइज़ैक न्यूटन", "गैलीलियो गैलीली", "निकोला टेस्ला"],
    answer_en: "Isaac Newton",
    answer_hi: "आइज़ैक न्यूटन",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which vitamin is obtained from sunlight?",
    question_hi: "सूर्य की रोशनी से कौन सा विटामिन प्राप्त होता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Who was the first woman Governor of an Indian state?",
    question_hi: "भारत के किसी राज्य की पहली महिला राज्यपाल कौन थीं?",
    options_en: ["Sarojini Naidu", "Indira Gandhi", "Vijaya Lakshmi Pandit", "Sucheta Kriplani"],
    options_hi: ["सरोजिनी नायडू", "इंदिरा गांधी", "विजया लक्ष्मी पंडित", "सुचेता कृपलानी"],
    answer_en: "Sarojini Naidu",
    answer_hi: "सरोजिनी नायडू",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which organ pumps blood throughout the body?",
    question_hi: "कौन सा अंग पूरे शरीर में रक्त को पंप करता है?",
    options_en: ["Liver", "Kidney", "Heart", "Lungs"],
    options_hi: ["यकृत", "गुर्दा", "हृदय", "फेफड़े"],
    answer_en: "Heart",
    answer_hi: "हृदय",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which Indian freedom fighter founded the INA?",
    question_hi: "किस भारतीय स्वतंत्रता सेनानी ने आज़ाद हिन्द फौज की स्थापना की थी?",
    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Lala Lajpat Rai"],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "लाला लाजपत राय"],
    answer_en: "Subhas Chandra Bose",
    answer_hi: "सुभाष चंद्र बोस",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the main component of natural gas?",
    question_hi: "प्राकृतिक गैस का मुख्य घटक क्या है?",
    options_en: ["Ethane", "Methane", "Propane", "Butane"],
    options_hi: ["एथेन", "मीथेन", "प्रोपेन", "ब्यूटेन"],
    answer_en: "Methane",
    answer_hi: "मीथेन",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Where is the Parliament of India located?",
    question_hi: "भारत की संसद कहाँ स्थित है?",
    options_en: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
    options_hi: ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
    answer_en: "New Delhi",
    answer_hi: "नई दिल्ली",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What does DNA stand for?",
    question_hi: "DNA का पूर्ण रूप क्या है?",
    options_en: ["Deoxyribonucleic Acid", "Dioxyribonucleic Acid", "Deoxyriboprotein Acid", "Double Helix Acid"],
    options_hi: ["डिऑक्सीराइबोन्यूक्लिक एसिड", "डायॉक्सीराइबोन्यूक्लिक एसिड", "डिऑक्सीराइबोप्रोटीन एसिड", "डबल हेलिक्स एसिड"],
    answer_en: "Deoxyribonucleic Acid",
    answer_hi: "डिऑक्सीराइबोन्यूक्लिक एसिड",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which gland is known as the master gland?",
    question_hi: "किस ग्रंथि को मास्टर ग्रंथि कहा जाता है?",
    options_en: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
    options_hi: ["थायरॉइड", "पिट्यूटरी", "एड्रिनल", "अग्न्याशय"],
    answer_en: "Pituitary",
    answer_hi: "पिट्यूटरी",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which is the largest organ in the human body?",
    question_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Heart", "Lungs"],
    options_hi: ["यकृत", "त्वचा", "हृदय", "फेफड़े"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
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
    question_en: "What is meant by 'depreciation' in economics?",
    question_hi: "अर्थशास्त्र में 'मूल्यह्रास' का क्या अर्थ है?",
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
    question_en: "Which sector has the largest contribution to India's GDP?",
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
    selected: ""
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
    question_en: "The term 'Laissez-faire' is associated with which type of economy?",
    question_hi: "'लेसे फेयर' शब्द किस प्रकार की अर्थव्यवस्था से जुड़ा है?",
    options_en: ["Socialist", "Capitalist", "Mixed", "Command"],
    options_hi: ["समाजवादी", "पूंजीवादी", "मिश्रित", "आदेश आधारित"],
    answer_en: "Capitalist",
    answer_hi: "पूंजीवादी",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which is the largest component of the money supply in India?",
    question_hi: "भारत में मुद्रा आपूर्ति का सबसे बड़ा घटक कौन सा है?",
    options_en: ["Currency with public", "Demand deposits with banks", "Time deposits", "RBI reserves"],
    options_hi: ["जनता के पास नकद", "बैंकों में मांग जमा", "समय जमा", "RBI का भंडार"],
    answer_en: "Time deposits",
    answer_hi: "समय जमा",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which of the following is not an objective of economic planning?",
    question_hi: "निम्नलिखित में से कौन आर्थिक योजना का उद्देश्य नहीं है?",
    options_en: ["Increase in national income", "Full employment", "Price stability", "Military expansion"],
    options_hi: ["राष्ट्रीय आय में वृद्धि", "पूर्ण रोजगार", "मूल्य स्थिरता", "सैन्य विस्तार"],
    answer_en: "Military expansion",
    answer_hi: "सैन्य विस्तार",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which term describes a period of negative economic growth?",
    question_hi: "नकारात्मक आर्थिक विकास की अवधि को क्या कहा जाता है?",
    options_en: ["Boom", "Recession", "Inflation", "Recovery"],
    options_hi: ["बूम", "मंदी", "मुद्रास्फीति", "पुनर्प्राप्ति"],
    answer_en: "Recession",
    answer_hi: "मंदी",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "When was the Goods and Services Tax (GST) implemented in India?",
    question_hi: "भारत में वस्तु एवं सेवा कर (GST) कब लागू किया गया?",
    options_en: ["1st July 2016", "1st July 2017", "1st April 2016", "1st January 2018"],
    options_hi: ["1 जुलाई 2016", "1 जुलाई 2017", "1 अप्रैल 2016", "1 जनवरी 2018"],
    answer_en: "1st July 2017",
    answer_hi: "1 जुलाई 2017",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the full form of FDI?",
    question_hi: "FDI का पूरा नाम क्या है?",
    options_en: ["Foreign Deposit Investment", "Foreign Direct Investment", "Foreign Demand Investment", "Foreign Development Investment"],
    options_hi: ["फॉरेन डिपॉजिट इन्वेस्टमेंट", "फॉरेन डायरेक्ट इन्वेस्टमेंट", "फॉरेन डिमांड इन्वेस्टमेंट", "फॉरेन डेवलपमेंट इन्वेस्टमेंट"],
    answer_en: "Foreign Direct Investment",
    answer_hi: "फॉरेन डायरेक्ट इन्वेस्टमेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which indicator shows the average income of a country?",
    question_hi: "देश की औसत आय को कौन सा सूचकांक दर्शाता है?",
    options_en: ["GDP", "GNP", "Per capita income", "Net National Product"],
    options_hi: ["GDP", "GNP", "प्रति व्यक्ति आय", "शुद्ध राष्ट्रीय उत्पाद"],
    answer_en: "Per capita income",
    answer_hi: "प्रति व्यक्ति आय",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "In economics, utility means:",
    question_hi: "अर्थशास्त्र में उपयोगिता का अर्थ है:",
    options_en: ["Usefulness", "Pleasure or satisfaction", "Profit", "Value in exchange"],
    options_hi: ["उपयोगिता", "आनंद या संतोष", "लाभ", "विनिमय मूल्य"],
    answer_en: "Pleasure or satisfaction",
    answer_hi: "आनंद या संतोष",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which Five-Year Plan in India was based on the 'Gadgil formula'?",
    question_hi: "भारत में किस पंचवर्षीय योजना में 'गाडगिल फॉर्मूला' अपनाया गया था?",
    options_en: ["Second", "Third", "Fourth", "Fifth"],
    options_hi: ["द्वितीय", "तृतीय", "चतुर्थ", "पंचम"],
    answer_en: "Fourth",
    answer_hi: "चतुर्थ",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which bank is known as the banker's bank?",
    question_hi: "कौन सा बैंक बैंकों का बैंक कहलाता है?",
    options_en: ["SBI", "RBI", "ICICI", "PNB"],
    options_hi: ["एसबीआई", "आरबीआई", "आईसीआईसीआई", "पीएनबी"],
    answer_en: "RBI",
    answer_hi: "आरबीआई",
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