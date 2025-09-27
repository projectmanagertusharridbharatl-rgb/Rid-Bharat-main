const questions = [
 {
    num: 1,
    question_en: "What is the primary objective of human geography?",
    question_hi: "मानव भूगोल का प्राथमिक उद्देश्य क्या है?",
    options_en: [
      "To study physical features of the earth",
      "To study human activities and their relationship with the environment",
      "To study weather patterns",
      "To study celestial bodies"
    ],
    options_hi: [
      "पृथ्वी की भौतिक विशेषताओं का अध्ययन करना",
      "मानव गतिविधियों और उनके पर्यावरण के साथ संबंध का अध्ययन करना",
      "मौसम के पैटर्न का अध्ययन करना",
      "आकाशीय पिंडों का अध्ययन करना"
    ],
    answer_en: "To study human activities and their relationship with the environment",
    answer_hi: "मानव गतिविधियों और उनके पर्यावरण के साथ संबंध का अध्ययन करना",
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "Which of the following is a branch of human geography?",
    question_hi: "मानव भूगोल की निम्नलिखित में से कौन-सी शाखा है?",
    options_en: [
      "Geomorphology",
      "Climatology",
      "Economic Geography",
      "Hydrology"
    ],
    options_hi: [
      "जियोमॉर्फोलॉजी",
      "जलवायु विज्ञान",
      "आर्थिक भूगोल",
      "हाइड्रोलॉजी"
    ],
    answer_en: "Economic Geography",
    answer_hi: "आर्थिक भूगोल",
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "What does cultural geography study?",
    question_hi: "सांस्कृतिक भूगोल क्या अध्ययन करता है?",
    options_en: [
      "Natural resources",
      "Human languages, customs, and beliefs",
      "Earthquakes",
      "Atmospheric conditions"
    ],
    options_hi: [
      "प्राकृतिक संसाधन",
      "मानव भाषाएँ, रीति-रिवाज और विश्वास",
      "भूकंप",
      "वायुमंडलीय स्थितियाँ"
    ],
    answer_en: "Human languages, customs, and beliefs",
    answer_hi: "मानव भाषाएँ, रीति-रिवाज और विश्वास",
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "Population geography deals primarily with which aspect?",
    question_hi: "जनसंख्या भूगोल मुख्य रूप से किस पहलू से संबंधित है?",
    options_en: [
      "Distribution and density of population",
      "Mountain ranges",
      "Soil types",
      "River systems"
    ],
    options_hi: [
      "जनसंख्या का वितरण और घनत्व",
      "पहाड़ी श्रेणियाँ",
      "मिट्टी के प्रकार",
      "नदी तंत्र"
    ],
    answer_en: "Distribution and density of population",
    answer_hi: "जनसंख्या का वितरण और घनत्व",
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "Which term refers to the movement of people from rural to urban areas?",
    question_hi: "कौन-सा शब्द ग्रामीण से शहरी क्षेत्रों की ओर लोगों की आवाजाही को दर्शाता है?",
    options_en: [
      "Immigration",
      "Urbanization",
      "Migration",
      "Emigration"
    ],
    options_hi: [
      "आप्रवासन",
      "शहरीकरण",
      "प्रवासन",
      "प्रवास"
    ],
    answer_en: "Migration",
    answer_hi: "प्रवासन",
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "Which of these factors influences settlement patterns?",
    question_hi: "निवास पैटर्न को प्रभावित करने वाले कारकों में से कौन सा है?",
    options_en: [
      "Climate",
      "Soil fertility",
      "Availability of water",
      "All of the above"
    ],
    options_hi: [
      "जलवायु",
      "मिट्टी की उर्वरता",
      "पानी की उपलब्धता",
      "उपरोक्त सभी"
    ],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "What does economic geography focus on?",
    question_hi: "आर्थिक भूगोल किस पर केंद्रित है?",
    options_en: [
      "Earth’s physical features",
      "Production, distribution, and consumption of goods",
      "Weather forecasting",
      "Study of animals"
    ],
    options_hi: [
      "पृथ्वी की भौतिक विशेषताएं",
      "सामान का उत्पादन, वितरण और उपभोग",
      "मौसम पूर्वानुमान",
      "जानवरों का अध्ययन"
    ],
    answer_en: "Production, distribution, and consumption of goods",
    answer_hi: "सामान का उत्पादन, वितरण और उपभोग",
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "Which of the following is studied in political geography?",
    question_hi: "राजनीतिक भूगोल में निम्नलिखित में से क्या अध्ययन किया जाता है?",
    options_en: [
      "Government boundaries and territories",
      "Earthquakes",
      "Climate changes",
      "Soil erosion"
    ],
    options_hi: [
      "सरकारी सीमाएं और क्षेत्र",
      "भूकंप",
      "जलवायु परिवर्तन",
      "मृदा क्षरण"
    ],
    answer_en: "Government boundaries and territories",
    answer_hi: "सरकारी सीमाएं और क्षेत्र",
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "Which term describes the spread of cultural elements from one place to another?",
    question_hi: "किस शब्द से एक स्थान से दूसरे स्थान तक सांस्कृतिक तत्वों के प्रसार को दर्शाया जाता है?",
    options_en: [
      "Assimilation",
      "Cultural diffusion",
      "Migration",
      "Urbanization"
    ],
    options_hi: [
      "समायोजन",
      "सांस्कृतिक प्रसार",
      "प्रवासन",
      "शहरीकरण"
    ],
    answer_en: "Cultural diffusion",
    answer_hi: "सांस्कृतिक प्रसार",
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "What is urban geography concerned with?",
    question_hi: "शहरी भूगोल किससे संबंधित है?",
    options_en: [
      "Rural settlements",
      "Cities and towns and their spatial structure",
      "Forest areas",
      "Ocean currents"
    ],
    options_hi: [
      "ग्रामीण बस्तियाँ",
      "शहर और कस्बे तथा उनका स्थानिक ढांचा",
      "वन क्षेत्र",
      "समुद्री धाराएँ"
    ],
    answer_en: "Cities and towns and their spatial structure",
    answer_hi: "शहर और कस्बे तथा उनका स्थानिक ढांचा",
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "Which term refers to the total number of people living in an area?",
    question_hi: "किस शब्द से किसी क्षेत्र में रहने वाले लोगों की कुल संख्या को दर्शाया जाता है?",
    options_en: [
      "Population density",
      "Population size",
      "Migration rate",
      "Birth rate"
    ],
    options_hi: [
      "जनसंख्या घनत्व",
      "जनसंख्या आकार",
      "प्रवासन दर",
      "जन्म दर"
    ],
    answer_en: "Population size",
    answer_hi: "जनसंख्या आकार",
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "Which factor is NOT a natural determinant of population distribution?",
    question_hi: "जनसंख्या वितरण का कौन-सा कारक प्राकृतिक निर्धारक नहीं है?",
    options_en: [
      "Climate",
      "Soil type",
      "Government policy",
      "Topography"
    ],
    options_hi: [
      "जलवायु",
      "मिट्टी का प्रकार",
      "सरकारी नीति",
      "भूगोलिक आकृति"
    ],
    answer_en: "Government policy",
    answer_hi: "सरकारी नीति",
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "What is the term for the study of human populations' birth, death, and migration rates?",
    question_hi: "मानव जनसंख्या के जन्म, मृत्यु और प्रवासन दर के अध्ययन को क्या कहते हैं?",
    options_en: [
      "Demography",
      "Economics",
      "Sociology",
      "Political Science"
    ],
    options_hi: [
      "जनसांख्यिकी",
      "अर्थशास्त्र",
      "समाजशास्त्र",
      "राजनीति विज्ञान"
    ],
    answer_en: "Demography",
    answer_hi: "जनसांख्यिकी",
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "Which of the following best defines ‘rural settlement’?",
    question_hi: "‘ग्रामीण बस्ती’ की सबसे अच्छी परिभाषा कौन सी है?",
    options_en: [
      "A group of cities",
      "A small community living in villages",
      "An industrial area",
      "A metropolitan city"
    ],
    options_hi: [
      "शहरों का समूह",
      "गाँवों में रहने वाला छोटा समुदाय",
      "औद्योगिक क्षेत्र",
      "मेट्रोपॉलिटन शहर"
    ],
    answer_en: "A small community living in villages",
    answer_hi: "गाँवों में रहने वाला छोटा समुदाय",
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "Which geographic factor influences economic activities most?",
    question_hi: "कौन-सा भौगोलिक कारक आर्थिक गतिविधियों को सबसे अधिक प्रभावित करता है?",
    options_en: [
      "Climate",
      "Soil",
      "Availability of natural resources",
      "All of the above"
    ],
    options_hi: [
      "जलवायु",
      "मिट्टी",
      "प्राकृतिक संसाधनों की उपलब्धता",
      "उपरोक्त सभी"
    ],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "Which term means the process of becoming more city-like?",
    question_hi: "कौन-सा शब्द शहर जैसी बनने की प्रक्रिया को दर्शाता है?",
    options_en: [
      "Urbanization",
      "Industrialization",
      "Migration",
      "Globalization"
    ],
    options_hi: [
      "शहरीकरण",
      "औद्योगिकीकरण",
      "प्रवासन",
      "वैश्वीकरण"
    ],
    answer_en: "Urbanization",
    answer_hi: "शहरीकरण",
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "Which is NOT a type of rural settlement?",
    question_hi: "निम्नलिखित में से कौन-सी ग्रामीण बस्ती का प्रकार नहीं है?",
    options_en: [
      "Linear",
      "Clustered",
      "Scattered",
      "Metropolitan"
    ],
    options_hi: [
      "रेखीय",
      "संगठित",
      "विखरित",
      "मेट्रोपॉलिटन"
    ],
    answer_en: "Metropolitan",
    answer_hi: "मेट्रोपॉलिटन",
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "Which sector is most associated with rural economy?",
    question_hi: "ग्रामीण अर्थव्यवस्था से सबसे अधिक संबंधित कौन-सा क्षेत्र है?",
    options_en: [
      "Primary sector",
      "Secondary sector",
      "Tertiary sector",
      "Quaternary sector"
    ],
    options_hi: [
      "प्राथमिक क्षेत्र",
      "द्वितीयक क्षेत्र",
      "तृतीयक क्षेत्र",
      "चतुर्थक क्षेत्र"
    ],
    answer_en: "Primary sector",
    answer_hi: "प्राथमिक क्षेत्र",
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "What is the term for people moving into a country?",
    question_hi: "किस शब्द का अर्थ है किसी देश में आने वाले लोग?",
    options_en: [
      "Immigration",
      "Emigration",
      "Urbanization",
      "Migration"
    ],
    options_hi: [
      "आप्रवासन",
      "प्रवास",
      "शहरीकरण",
      "प्रवासन"
    ],
    answer_en: "Immigration",
    answer_hi: "आप्रवासन",
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "Which type of migration is seasonal and temporary?",
    question_hi: "कौन-सा प्रवासन मौसमी और अस्थायी होता है?",
    options_en: [
      "Permanent migration",
      "Seasonal migration",
      "International migration",
      "Urban migration"
    ],
    options_hi: [
      "स्थायी प्रवासन",
      "मौसमी प्रवासन",
      "अंतरराष्ट्रीय प्रवासन",
      "शहरी प्रवासन"
    ],
    answer_en: "Seasonal migration",
    answer_hi: "मौसमी प्रवासन",
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "Which type of geography studies the spatial aspects of human activities?",
    question_hi: "कौन-सी भूगोल मानव गतिविधियों के स्थानिक पहलुओं का अध्ययन करती है?",
    options_en: [
      "Physical geography",
      "Human geography",
      "Environmental geography",
      "Geomorphology"
    ],
    options_hi: [
      "भौतिक भूगोल",
      "मानव भूगोल",
      "पर्यावरण भूगोल",
      "जियोमॉर्फोलॉजी"
    ],
    answer_en: "Human geography",
    answer_hi: "मानव भूगोल",
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "Which of these is NOT an example of cultural traits?",
    question_hi: "निम्नलिखित में से कौन-सा सांस्कृतिक लक्षण नहीं है?",
    options_en: [
      "Language",
      "Religion",
      "Climate",
      "Cuisine"
    ],
    options_hi: [
      "भाषा",
      "धर्म",
      "जलवायु",
      "खाना"
    ],
    answer_en: "Climate",
    answer_hi: "जलवायु",
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "Which of the following best describes 'demographic transition'?",
    question_hi: "'जनसांख्यिकीय संक्रमण' को सबसे अच्छा कैसे वर्णित किया जाता है?",
    options_en: [
      "Change in population size over time",
      "Migration of people",
      "Urban growth",
      "Birth and death rates remain constant"
    ],
    options_hi: [
      "समय के साथ जनसंख्या आकार में परिवर्तन",
      "लोगों का प्रवासन",
      "शहरी विकास",
      "जन्म और मृत्यु दर स्थिर रहती है"
    ],
    answer_en: "Change in population size over time",
    answer_hi: "समय के साथ जनसंख्या आकार में परिवर्तन",
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "What is a major cause of urban growth?",
    question_hi: "शहरी विकास का एक मुख्य कारण क्या है?",
    options_en: [
      "Industrialization",
      "Rural to urban migration",
      "Natural population increase",
      "All of the above"
    ],
    options_hi: [
      "औद्योगिकीकरण",
      "ग्रामीण से शहरी प्रवासन",
      "प्राकृतिक जनसंख्या वृद्धि",
      "उपरोक्त सभी"
    ],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "Which geographic term means 'the study of population characteristics'?",
    question_hi: "कौन-सा भौगोलिक शब्द 'जनसंख्या विशेषताओं के अध्ययन' का अर्थ है?",
    options_en: [
      "Demography",
      "Ethnography",
      "Topography",
      "Cartography"
    ],
    options_hi: [
      "जनसांख्यिकी",
      "जातिविज्ञान",
      "स्थलाकृतिकी",
      "नक्शानवीसी"
    ],
    answer_en: "Demography",
    answer_hi: "जनसांख्यिकी",
    attempted: false,
    selected: null
  },
   {
    num: 26,
    question_en: "Which of the following is a characteristic of urban settlements?",
    question_hi: "शहरी बस्तियों की निम्नलिखित में से कौन-सी विशेषता है?",
    options_en: [
      "Low population density",
      "High population density",
      "Predominantly agricultural activities",
      "Scattered houses"
    ],
    options_hi: [
      "कम जनसंख्या घनत्व",
      "उच्च जनसंख्या घनत्व",
      "प्रमुख रूप से कृषि गतिविधियाँ",
      "विखरित मकान"
    ],
    answer_en: "High population density",
    answer_hi: "उच्च जनसंख्या घनत्व",
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "What does 'subsistence farming' mean?",
    question_hi: "'आजीविका खेती' का क्या अर्थ है?",
    options_en: [
      "Farming for profit",
      "Farming only to meet the needs of the farmer's family",
      "Commercial farming",
      "Industrial farming"
    ],
    options_hi: [
      "लाभ के लिए खेती",
      "केवल किसान के परिवार की जरूरतों के लिए खेती",
      "वाणिज्यिक खेती",
      "औद्योगिक खेती"
    ],
    answer_en: "Farming only to meet the needs of the farmer's family",
    answer_hi: "केवल किसान के परिवार की जरूरतों के लिए खेती",
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "Which factor is most responsible for urban growth?",
    question_hi: "शहरी विकास के लिए सबसे जिम्मेदार कारक कौन सा है?",
    options_en: [
      "Natural disasters",
      "Industrialization and employment opportunities",
      "Decline in population",
      "Rural-to-rural migration"
    ],
    options_hi: [
      "प्राकृतिक आपदाएं",
      "औद्योगिकीकरण और रोजगार के अवसर",
      "जनसंख्या में कमी",
      "ग्रामीण से ग्रामीण प्रवासन"
    ],
    answer_en: "Industrialization and employment opportunities",
    answer_hi: "औद्योगिकीकरण और रोजगार के अवसर",
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "What is the term for the study of the spatial distribution of languages?",
    question_hi: "भाषाओं के स्थानिक वितरण के अध्ययन के लिए किस शब्द का प्रयोग होता है?",
    options_en: [
      "Linguistics",
      "Language geography",
      "Political geography",
      "Cultural geography"
    ],
    options_hi: [
      "भाषाविज्ञान",
      "भाषा भूगोल",
      "राजनीतिक भूगोल",
      "सांस्कृतिक भूगोल"
    ],
    answer_en: "Language geography",
    answer_hi: "भाषा भूगोल",
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "Which of these is NOT a factor influencing human settlement?",
    question_hi: "मानव बस्ती को प्रभावित करने वाला कौन-सा कारक नहीं है?",
    options_en: [
      "Climate",
      "Availability of water",
      "Government policy",
      "Mineral wealth"
    ],
    options_hi: [
      "जलवायु",
      "पानी की उपलब्धता",
      "सरकारी नीति",
      "खनिज संपदा"
    ],
    answer_en: "Government policy",
    answer_hi: "सरकारी नीति",
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "What is the main reason for migration in search of employment?",
    question_hi: "रोजगार की खोज में प्रवासन का मुख्य कारण क्या है?",
    options_en: [
      "Natural disasters",
      "Economic opportunities",
      "Political conflicts",
      "Cultural festivals"
    ],
    options_hi: [
      "प्राकृतिक आपदाएं",
      "आर्थिक अवसर",
      "राजनीतिक संघर्ष",
      "सांस्कृतिक त्योहार"
    ],
    answer_en: "Economic opportunities",
    answer_hi: "आर्थिक अवसर",
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "Which of the following best describes a ‘megalopolis’?",
    question_hi: "‘मेगालोपोलिस’ को सबसे अच्छे ढंग से कौन परिभाषित करता है?",
    options_en: [
      "A small town",
      "A cluster of metropolitan areas",
      "A rural village",
      "A coastal area"
    ],
    options_hi: [
      "एक छोटा शहर",
      "मेट्रोपॉलिटन क्षेत्रों का समूह",
      "एक ग्रामीण गाँव",
      "एक तटीय क्षेत्र"
    ],
    answer_en: "A cluster of metropolitan areas",
    answer_hi: "मेट्रोपॉलिटन क्षेत्रों का समूह",
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "Which is NOT a characteristic of a traditional rural economy?",
    question_hi: "पारंपरिक ग्रामीण अर्थव्यवस्था की कौन-सी विशेषता नहीं है?",
    options_en: [
      "Dependence on agriculture",
      "Use of advanced machinery",
      "Limited market exchange",
      "Small-scale production"
    ],
    options_hi: [
      "कृषि पर निर्भरता",
      "उन्नत मशीनरी का उपयोग",
      "सीमित बाजार लेन-देन",
      "लघु पैमाने पर उत्पादन"
    ],
    answer_en: "Use of advanced machinery",
    answer_hi: "उन्नत मशीनरी का उपयोग",
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "Which of these best explains 'functional specialization' in urban areas?",
    question_hi: "शहरी क्षेत्रों में 'कार्यात्मक विशेषज्ञता' को सबसे अच्छा कौन समझाता है?",
    options_en: [
      "All activities happen everywhere",
      "Different parts of a city specialize in different activities",
      "Only residential areas exist",
      "No commercial activities"
    ],
    options_hi: [
      "सभी गतिविधियाँ हर जगह होती हैं",
      "शहर के अलग-अलग हिस्से अलग-अलग गतिविधियों में विशेषज्ञ होते हैं",
      "केवल आवासीय क्षेत्र होते हैं",
      "कोई व्यावसायिक गतिविधि नहीं"
    ],
    answer_en: "Different parts of a city specialize in different activities",
    answer_hi: "शहर के अलग-अलग हिस्से अलग-अलग गतिविधियों में विशेषज्ञ होते हैं",
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "What does ‘urban sprawl’ refer to?",
    question_hi: "‘शहरी फैलाव’ से क्या तात्पर्य है?",
    options_en: [
      "Rapid and unplanned expansion of urban areas",
      "Rural development",
      "Agricultural growth",
      "Population decrease"
    ],
    options_hi: [
      "शहरी क्षेत्रों का तेज और बिना योजना का विस्तार",
      "ग्रामीण विकास",
      "कृषि विकास",
      "जनसंख्या में कमी"
    ],
    answer_en: "Rapid and unplanned expansion of urban areas",
    answer_hi: "शहरी क्षेत्रों का तेज और बिना योजना का विस्तार",
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "Which sector of the economy is most important in urban areas?",
    question_hi: "अर्थव्यवस्था का कौन-सा क्षेत्र शहरी क्षेत्रों में सबसे महत्वपूर्ण है?",
    options_en: [
      "Primary sector",
      "Secondary sector",
      "Tertiary sector",
      "Quaternary sector"
    ],
    options_hi: [
      "प्राथमिक क्षेत्र",
      "द्वितीयक क्षेत्र",
      "तृतीयक क्षेत्र",
      "चतुर्थक क्षेत्र"
    ],
    answer_en: "Tertiary sector",
    answer_hi: "तृतीयक क्षेत्र",
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "Which is an effect of rural-urban migration?",
    question_hi: "ग्रामीण-शहरी प्रवासन का कौन-सा प्रभाव होता है?",
    options_en: [
      "Increase in rural population",
      "Growth of urban slums",
      "Decrease in urban unemployment",
      "Decrease in urban population"
    ],
    options_hi: [
      "ग्रामीण जनसंख्या में वृद्धि",
      "शहरी झुग्गियों का विकास",
      "शहरी बेरोजगारी में कमी",
      "शहरी जनसंख्या में कमी"
    ],
    answer_en: "Growth of urban slums",
    answer_hi: "शहरी झुग्गियों का विकास",
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "Which geographic feature often attracts settlements?",
    question_hi: "कौन-सी भौगोलिक विशेषता अक्सर बस्तियों को आकर्षित करती है?",
    options_en: [
      "Mountains",
      "Water bodies like rivers and lakes",
      "Deserts",
      "Tundra"
    ],
    options_hi: [
      "पर्वत",
      "नदी और झील जैसे जल स्रोत",
      "रेगिस्तान",
      "टुंड्रा"
    ],
    answer_en: "Water bodies like rivers and lakes",
    answer_hi: "नदी और झील जैसे जल स्रोत",
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "Which type of farming is common in urban areas?",
    question_hi: "शहरी क्षेत्रों में किस प्रकार की खेती आम है?",
    options_en: [
      "Subsistence farming",
      "Commercial farming",
      "Horticulture and kitchen gardening",
      "Nomadic herding"
    ],
    options_hi: [
      "आजीविका खेती",
      "वाणिज्यिक खेती",
      "बागवानी और रसोई बागवानी",
      "घुमंतू पशुपालन"
    ],
    answer_en: "Horticulture and kitchen gardening",
    answer_hi: "बागवानी और रसोई बागवानी",
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "What is the main purpose of ‘census’ in human geography?",
    question_hi: "मानव भूगोल में ‘जनगणना’ का मुख्य उद्देश्य क्या है?",
    options_en: [
      "To measure rainfall",
      "To collect data about population and demographics",
      "To analyze soil types",
      "To map rivers"
    ],
    options_hi: [
      "वर्षा मापन करना",
      "जनसंख्या और जनसांख्यिकी का डेटा एकत्र करना",
      "मृदा प्रकारों का विश्लेषण करना",
      "नदियों का नक्शा बनाना"
    ],
    answer_en: "To collect data about population and demographics",
    answer_hi: "जनसंख्या और जनसांख्यिकी का डेटा एकत्र करना",
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "Which is an example of ‘pull factor’ in migration?",
    question_hi: "प्रवास में ‘खींचने वाला कारक’ का उदाहरण क्या है?",
    options_en: [
      "Natural disasters",
      "Better employment opportunities",
      "War and conflict",
      "Famine"
    ],
    options_hi: [
      "प्राकृतिक आपदाएं",
      "बेहतर रोजगार के अवसर",
      "युद्ध और संघर्ष",
      "अकाल"
    ],
    answer_en: "Better employment opportunities",
    answer_hi: "बेहतर रोजगार के अवसर",
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "Which of the following is NOT a feature of a metropolitan city?",
    question_hi: "मेट्रोपॉलिटन शहर की निम्नलिखित में से कौन-सी विशेषता नहीं है?",
    options_en: [
      "Large population",
      "Multiple economic activities",
      "Primarily agricultural economy",
      "Advanced infrastructure"
    ],
    options_hi: [
      "बड़ी जनसंख्या",
      "विविध आर्थिक गतिविधियाँ",
      "मुख्य रूप से कृषि अर्थव्यवस्था",
      "उन्नत अवसंरचना"
    ],
    answer_en: "Primarily agricultural economy",
    answer_hi: "मुख्य रूप से कृषि अर्थव्यवस्था",
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "What type of migration occurs within the same country?",
    question_hi: "किस प्रकार का प्रवासन एक ही देश के भीतर होता है?",
    options_en: [
      "International migration",
      "Interstate migration",
      "Internal migration",
      "Forced migration"
    ],
    options_hi: [
      "अंतर्राष्ट्रीय प्रवासन",
      "राज्य के बीच प्रवासन",
      "आंतरिक प्रवासन",
      "बलपूर्वक प्रवासन"
    ],
    answer_en: "Internal migration",
    answer_hi: "आंतरिक प्रवासन",
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "Which of the following best defines 'population density'?",
    question_hi: "'जनसंख्या घनत्व' को सबसे अच्छे ढंग से कौन परिभाषित करता है?",
    options_en: [
      "Number of people per square kilometer",
      "Total population of a country",
      "Number of births per year",
      "Number of urban areas"
    ],
    options_hi: [
      "प्रति वर्ग किलोमीटर लोगों की संख्या",
      "देश की कुल जनसंख्या",
      "प्रति वर्ष जन्मों की संख्या",
      "शहरी क्षेत्रों की संख्या"
    ],
    answer_en: "Number of people per square kilometer",
    answer_hi: "प्रति वर्ग किलोमीटर लोगों की संख्या",
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "Which is an example of a 'push factor' in migration?",
    question_hi: "प्रवास में 'धकेलने वाला कारक' का उदाहरण क्या है?",
    options_en: [
      "Better living conditions",
      "Lack of employment opportunities",
      "Education facilities",
      "Political stability"
    ],
    options_hi: [
      "बेहतर जीवन स्तर",
      "रोजगार के अवसरों की कमी",
      "शिक्षा सुविधाएँ",
      "राजनीतिक स्थिरता"
    ],
    answer_en: "Lack of employment opportunities",
    answer_hi: "रोजगार के अवसरों की कमी",
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "What is the main characteristic of a ‘rural settlement’?",
    question_hi: "‘ग्रामीण बस्ती’ की मुख्य विशेषता क्या है?",
    options_en: [
      "High population density",
      "Scattered and small population",
      "Industrial activities",
      "Large urban centers"
    ],
    options_hi: [
      "उच्च जनसंख्या घनत्व",
      "विखरित और छोटी जनसंख्या",
      "औद्योगिक गतिविधियाँ",
      "बड़े शहरी केंद्र"
    ],
    answer_en: "Scattered and small population",
    answer_hi: "विखरित और छोटी जनसंख्या",
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "Which sector of economy primarily involves agriculture and fishing?",
    question_hi: "अर्थव्यवस्था का कौन-सा क्षेत्र मुख्य रूप से कृषि और मछली पकड़ने से संबंधित है?",
    options_en: [
      "Primary sector",
      "Secondary sector",
      "Tertiary sector",
      "Quaternary sector"
    ],
    options_hi: [
      "प्राथमिक क्षेत्र",
      "द्वितीयक क्षेत्र",
      "तृतीयक क्षेत्र",
      "चतुर्थक क्षेत्र"
    ],
    answer_en: "Primary sector",
    answer_hi: "प्राथमिक क्षेत्र",
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "Which of the following best explains ‘urban hierarchy’?",
    question_hi: "'शहरी पदक्रम' को सबसे अच्छा कौन समझाता है?",
    options_en: [
      "Cities ranked according to population size and functions",
      "All cities are equal",
      "Only rural areas have hierarchy",
      "Cities ranked by agricultural output"
    ],
    options_hi: [
      "जनसंख्या आकार और कार्यों के अनुसार शहरों की रैंकिंग",
      "सभी शहर समान हैं",
      "केवल ग्रामीण क्षेत्रों में पदक्रम होता है",
      "कृषि उत्पादन के अनुसार शहरों की रैंकिंग"
    ],
    answer_en: "Cities ranked according to population size and functions",
    answer_hi: "जनसंख्या आकार और कार्यों के अनुसार शहरों की रैंकिंग",
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "What is the primary reason for the growth of slums in cities?",
    question_hi: "शहरों में झुग्गियों के विकास का मुख्य कारण क्या है?",
    options_en: [
      "Availability of cheap housing",
      "Rural-urban migration and lack of affordable housing",
      "Planned urban development",
      "Decline in urban population"
    ],
    options_hi: [
      "सस्ते आवास की उपलब्धता",
      "ग्रामीण-शहरी प्रवासन और सस्ती आवास की कमी",
      "योजनाबद्ध शहरी विकास",
      "शहरी जनसंख्या में कमी"
    ],
    answer_en: "Rural-urban migration and lack of affordable housing",
    answer_hi: "ग्रामीण-शहरी प्रवासन और सस्ती आवास की कमी",
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "Which of the following is an example of a secondary economic activity?",
    question_hi: "निम्नलिखित में से कौन-सा द्वितीयक आर्थिक गतिविधि का उदाहरण है?",
    options_en: [
      "Fishing",
      "Manufacturing",
      "Teaching",
      "Mining"
    ],
    options_hi: [
      "मछली पकड़ना",
      "निर्माण",
      "शिक्षण",
      "खनन"
    ],
    answer_en: "Manufacturing",
    answer_hi: "निर्माण",
    attempted: false,
    selected: null
  }
    // Continue adding more questions up to 30
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