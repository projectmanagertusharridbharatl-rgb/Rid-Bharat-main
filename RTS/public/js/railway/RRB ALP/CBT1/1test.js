const questions = [
  {
    "num": 1,
    "question_en": "Which one of the following is an example of a regressive tax?",
    "question_hi": "निम्नलिखित में से कौन प्रतिगामी कर का उदाहरण है?",
    "options_en": ["Income tax", "Property tax", "Sales tax", "Corporate tax"],
    "options_hi": ["आयकर", "संपत्ति कर", "विक्री कर", "कॉरपोरेट कर"],
    "answer_en": "Sales tax",
    "answer_hi": "बिक्री कर",
    "attempted": false,
    "selected": ""
  },
{
    num: 2,
    question_en: "Which gas is most abundant in the Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में कौन सा गैस सबसे प्रचुर मात्रा में है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
},
{
    num: 3,
    question_en: "Which of the following is not a primary color?",
    question_hi: "निम्नलिखित में से कौन सा प्राथमिक रंग नहीं है?",
    options_en: ["Red", "Blue", "Green", "Yellow"],
    options_hi: ["लाल", "नीला", "हरा", "पीला"],
    answer_en: "Yellow",
    answer_hi: "पीला",
    attempted: false,
    selected: ""
},
{
    num: 4,
    question_en: "What is the unit of electric current?",
    question_hi: "विधुत धारा की इकाई क्या है?",
    options_en: ["Volt", "Ohm", "Watt", "Ampere"],
    options_hi: ["वोल्ट", "ओम", "वाट", "एम्पियर"],
    answer_en: "Ampere",
    answer_hi: "एम्पियर",
    attempted: false,
    selected: ""
},
{
    num: 5,
    question_en: "Which instrument is used to measure temperature?",
    question_hi: "तापमान मापने के लिए किस यंत्र का उपयोग किया जाता है?",
    options_en: ["Barometer", "Thermometer", "Ammeter", "Hygrometer"],
    options_hi: ["बारोमीटर", "थर्मामीटर", "ऐममीटर", "हाइग्रोमीटर"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
},
{
    num: 6,
    question_en: "What is the boiling point of water at sea level?",
    question_hi: "समुद्र तल पर पानी का उबालने का तापमान क्या है?",
    options_en: ["90°C", "100°C", "110°C", "120°C"],
    options_hi: ["90°C", "100°C", "110°C", "120°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
},
{
    num: 7,
    question_en: "Which planet is known as the Red Planet?",
    question_hi: "कौन सा ग्रह लाल ग्रह के रूप में जाना जाता है?",
    options_en: ["Earth", "Mars", "Jupiter", "Venus"],
    options_hi: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
},
{
    num: 8,
    question_en: "Sound travels fastest in which medium?",
    question_hi: "ध्वनि किस माध्यम में सबसे तेज यात्रा करती है?",
    options_en: ["Air", "Water", "Steel", "Vacuum"],
    options_hi: ["हवा", "पानी", "इस्पात", "शून्य"],
    answer_en: "Steel",
    answer_hi: "इस्पात",
    attempted: false,
    selected: ""
},
{
    num: 9,
    question_en: "What is the chemical formula of water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "O2", "NaCl"],
    options_hi: ["H2O", "CO2", "O2", "NaCl"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
},
{
    num: 10,
    question_en: "Which organ pumps blood throughout the human body?",
    question_hi: "मानव शरीर में खून को पूरे शरीर में पंप करने वाला अंग कौन सा है?",
    options_en: ["Lungs", "Liver", "Heart", "Kidneys"],
    options_hi: ["फेफड़े", "जिगर", "दिल", "गुर्दे"],
    answer_en: "Heart",
    answer_hi: "दिल",
    attempted: false,
    selected: ""
},
{
    num: 11,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कौन सा धातु कमरे के तापमान पर तरल होता है?",
    options_en: ["Iron", "Mercury", "Aluminium", "Copper"],
    options_hi: ["लोहा", "पारा", "एल्युमिनियम", "तांबा"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
},
{
    num: 12,
    question_en: "What is the SI unit of force?",
    question_hi: "बल की एसआई इकाई क्या है?",
    options_en: ["Watt", "Newton", "Joule", "Pascal"],
    options_hi: ["वाट", "न्यूटन", "जूल", "पास्कल"],
    answer_en: "Newton",
    answer_hi: "न्यूटन",
    attempted: false,
    selected: ""
},
{
    num: 13,
    question_en: "What type of mirror is used in rear-view mirrors of vehicles?",
    question_hi: "वाहनों के रियर व्यू मिरर में किस प्रकार का आईना उपयोग होता है?",
    options_en: ["Concave", "Convex", "Plane", "None"],
    options_hi: ["कंकाव", "उत्तल", "समतल", "कोई नहीं"],
    answer_en: "Convex",
    answer_hi: "उत्तल",
    attempted: false,
    selected: ""
},
{
    num: 14,
    question_en: "What is the main function of the CPU in a computer?",
    question_hi: "कंप्यूटर में सीपीयू का मुख्य कार्य क्या है?",
    options_en: ["Store data", "Process data", "Print data", "Display data"],
    options_hi: ["डेटा संग्रहित करें", "डेटा संसाधित करें", "डेटा प्रिंट करें", "डेटा प्रदर्शित करें"],
    answer_en: "Process data",
    answer_hi: "डेटा संसाधित करें",
    attempted: false,
    selected: ""
},
{
    num: 15,
    question_en: "Which part of the plant conducts photosynthesis?",
    question_hi: "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
    options_en: ["Root", "Stem", "Leaf", "Flower"],
    options_hi: ["मूल", "तना", "पत्ता", "फूल"],
    answer_en: "Leaf",
    answer_hi: "पत्ता",
    attempted: false,
    selected: ""
},
{
    num: 16,
    question_en: "How many bones are there in an adult human body?",
    question_hi: "वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
    options_en: ["206", "208", "201", "212"],
    options_hi: ["206", "208", "201", "212"],
    answer_en: "206",
    answer_hi: "206",
    attempted: false,
    selected: ""
},
{
    num: 17,
    question_en: "Which vitamin is produced in the human body when exposed to sunlight?",
    question_hi: "कौन सा विटामिन मानव शरीर में सूर्य की रोशनी से उत्पन्न होता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
},
{
    num: 18,
    question_en: "Which planet is closest to the Sun?",
    question_hi: "कौन सा ग्रह सूर्य के सबसे पास है?",
    options_en: ["Venus", "Earth", "Mercury", "Mars"],
    options_hi: ["शुक्र", "पृथ्वी", "बुध", "मंगल"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
},
{
    num: 19,
    question_en: "Who invented the light bulb?",
    question_hi: "विद्युत बल्ब का आविष्कार किसने किया था?",
    options_en: ["Alexander Graham Bell", "Isaac Newton", "Thomas Edison", "Nikola Tesla"],
    options_hi: ["अलेक्जेंडर ग्राहम बेल", "आइज़क न्यूटन", "थॉमस एडीसन", "निकोला टेस्ला"],
    answer_en: "Thomas Edison",
    answer_hi: "थॉमस एडीसन",
    attempted: false,
    selected: ""
},
{
    num: 20,
    question_en: "Which gas is used in fire extinguishers?",
    question_hi: "आग बुझाने वाले यंत्रों में कौन सा गैस उपयोग किया जाता है?",
    options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
},
{
    num: 21,
    question_en: "Which one is a renewable source of energy?",
    question_hi: "इनमें से कौन सा ऊर्जा का नवीकरणीय स्रोत है?",
    options_en: ["Coal", "Petroleum", "Solar energy", "Natural gas"],
    options_hi: ["कोयला", "पेट्रोलियम", "सौर ऊर्जा", "प्राकृतिक गैस"],
    answer_en: "Solar energy",
    answer_hi: "सौर ऊर्जा",
    attempted: false,
    selected: ""
},
{
    num: 22,
    question_en: "The sun rises in which direction?",
    question_hi: "सूर्य किस दिशा में उगता है?",
    options_en: ["North", "South", "East", "West"],
    options_hi: ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम"],
    answer_en: "East",
    answer_hi: "पूर्व",
    attempted: false,
    selected: ""
},
{
    num: 23,
    question_en: "What does CPU stand for?",
    question_hi: "CPU का क्या मतलब है?",
    options_en: ["Central Power Unit", "Central Processing Unit", "Control Processing Unit", "Computer Power Unit"],
    options_hi: ["सेंट्रल पावर यूनिट", "सेंट्रल प्रोसेसिंग यूनिट", "कंट्रोल प्रोसेसिंग यूनिट", "कंप्यूटर पावर यूनिट"],
    answer_en: "Central Processing Unit",
    answer_hi: "सेंट्रल प्रोसेसिंग यूनिट",
    attempted: false,
    selected: ""
},
{
    num: 24,
    question_en: "Which of the following is not a programming language?",
    question_hi: "निम्नलिखित में से कौन सी प्रोग्रामिंग भाषा नहीं है?",
    options_en: ["Python", "HTML", "Java", "C++"],
    options_hi: ["पाइथन", "HTML", "जावा", "C++"],
    answer_en: "HTML",
    answer_hi: "HTML",
    attempted: false,
    selected: ""
},
{
    num: 25,
    question_en: "What is the value of Pi (approximately)?",
    question_hi: "पाई का मान (लगभग) क्या है?",
    options_en: ["2.14", "3.14", "4.13", "1.34"],
    options_hi: ["2.14", "3.14", "4.13", "1.34"],
    answer_en: "3.14",
    answer_hi: "3.14",
    attempted: false,
    selected: ""
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
    options_en: [
      "Total expenditure exceeds total revenue",
      "Total income exceeds total expenditure",
      "Revenue is equal to expenditure",
      "Only revenue deficit exists"
    ],
    options_hi: [
      "कुल व्यय कुल राजस्व से अधिक होता है",
      "कुल आय कुल व्यय से अधिक होती है",
      "राजस्व और व्यय समान होते हैं",
      "केवल राजस्व घाटा होता है"
    ],
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
    options_en: [
      "Decrease in value of currency",
      "Decrease in value of capital assets",
      "Increase in production",
      "Decrease in GDP"
    ],
    options_hi: [
      "मुद्रा के मूल्य में कमी",
      "पूंजी संपत्तियों के मूल्य में कमी",
      "उत्पादन में वृद्धि",
      "GDP में कमी"
    ],
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
    options_en: [
      "Foreign Deposit Investment",
      "Foreign Direct Investment",
      "Foreign Demand Investment",
      "Foreign Development Investment"
    ],
    options_hi: [
      "फॉरेन डिपॉजिट इन्वेस्टमेंट",
      "फॉरेन डायरेक्ट इन्वेस्टमेंट",
      "फॉरेन डिमांड इन्वेस्टमेंट",
      "फॉरेन डेवलपमेंट इन्वेस्टमेंट"
    ],
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
    question_en: "Which bank is known as the banker’s bank?",
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
