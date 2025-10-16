const questions = [
{
    num: 1,
    question_en: "Which of the following is a tertiary activity?",
    question_hi: "निम्नलिखित में से कौन-सा तृतीयक गतिविधि है?",
    options_en: [
      "Farming",
      "Manufacturing",
      "Teaching",
      "Mining"
    ],
    options_hi: [
      "खेती",
      "निर्माण",
      "शिक्षण",
      "खनन"
    ],
    answer_en: "Teaching",
    answer_hi: "शिक्षण",
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "Which sector includes services like banking and insurance?",
    question_hi: "कौन-सा क्षेत्र बैंकिंग और बीमा जैसी सेवाओं को शामिल करता है?",
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
    num: 3,
    question_en: "Which of these is NOT a tertiary activity?",
    question_hi: "इनमें से कौन-सा तृतीयक गतिविधि नहीं है?",
    options_en: [
      "Transportation",
      "Education",
      "Fishing",
      "Healthcare"
    ],
    options_hi: [
      "परिवहन",
      "शिक्षा",
      "मछली पकड़ना",
      "स्वास्थ्य सेवा"
    ],
    answer_en: "Fishing",
    answer_hi: "मछली पकड़ना",
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "Which economic activity involves selling goods in the market?",
    question_hi: "कौन-सी आर्थिक गतिविधि बाजार में वस्तुओं को बेचने से संबंधित है?",
    options_en: [
      "Primary activity",
      "Secondary activity",
      "Tertiary activity",
      "Quaternary activity"
    ],
    options_hi: [
      "प्राथमिक गतिविधि",
      "द्वितीयक गतिविधि",
      "तृतीयक गतिविधि",
      "चतुर्थक गतिविधि"
    ],
    answer_en: "Tertiary activity",
    answer_hi: "तृतीयक गतिविधि",
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "Which activity is involved in providing healthcare services?",
    question_hi: "स्वास्थ्य सेवा प्रदान करने वाली गतिविधि कौन-सी है?",
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
    num: 6,
    question_en: "Which of the following is a quaternary activity?",
    question_hi: "निम्नलिखित में से कौन-सा चतुर्थक गतिविधि है?",
    options_en: [
      "Research and development",
      "Fishing",
      "Manufacturing",
      "Mining"
    ],
    options_hi: [
      "अनुसंधान और विकास",
      "मछली पकड़ना",
      "निर्माण",
      "खनन"
    ],
    answer_en: "Research and development",
    answer_hi: "अनुसंधान और विकास",
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "Which of these is an example of tertiary activity in transport?",
    question_hi: "परिवहन में तृतीयक गतिविधि का उदाहरण क्या है?",
    options_en: [
      "Fishing",
      "Bus driver",
      "Car manufacturing",
      "Farming"
    ],
    options_hi: [
      "मछली पकड़ना",
      "बस चालक",
      "कार निर्माण",
      "खेती"
    ],
    answer_en: "Bus driver",
    answer_hi: "बस चालक",
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "Which sector deals with construction and factories?",
    question_hi: "कौन-सा क्षेत्र निर्माण और फैक्ट्रियों से संबंधित है?",
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
    answer_en: "Secondary sector",
    answer_hi: "द्वितीयक क्षेत्र",
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "Which of these activities would a teacher be involved in?",
    question_hi: "इनमें से कौन-सी गतिविधि में एक शिक्षक शामिल होगा?",
    options_en: [
      "Primary activity",
      "Secondary activity",
      "Tertiary activity",
      "Quaternary activity"
    ],
    options_hi: [
      "प्राथमिक गतिविधि",
      "द्वितीयक गतिविधि",
      "तृतीयक गतिविधि",
      "चतुर्थक गतिविधि"
    ],
    answer_en: "Tertiary activity",
    answer_hi: "तृतीयक गतिविधि",
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "Which sector includes activities like fishing and forestry?",
    question_hi: "कौन-सा क्षेत्र मछली पकड़ने और वानिकी जैसी गतिविधियों को शामिल करता है?",
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
    num: 11,
    question_en: "Which activity is NOT a part of the tertiary sector?",
    question_hi: "कौन-सी गतिविधि तृतीयक क्षेत्र का हिस्सा नहीं है?",
    options_en: [
      "Hospital services",
      "Banking",
      "Fishing",
      "Education"
    ],
    options_hi: [
      "अस्पताल सेवाएं",
      "बैंकिंग",
      "मछली पकड़ना",
      "शिक्षा"
    ],
    answer_en: "Fishing",
    answer_hi: "मछली पकड़ना",
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "Which sector involves making goods from raw materials?",
    question_hi: "कौन-सा क्षेत्र कच्चे माल से वस्तुएं बनाने में शामिल है?",
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
    answer_en: "Secondary sector",
    answer_hi: "द्वितीयक क्षेत्र",
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "Which sector includes activities like retail trade and hospitality?",
    question_hi: "कौन-सा क्षेत्र खुदरा व्यापार और आतिथ्य जैसी गतिविधियों को शामिल करता है?",
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
    num: 14,
    question_en: "Which activity is involved in gathering natural resources?",
    question_hi: "कौन-सी गतिविधि प्राकृतिक संसाधनों को इकट्ठा करने में शामिल है?",
    options_en: [
      "Primary activity",
      "Secondary activity",
      "Tertiary activity",
      "Quaternary activity"
    ],
    options_hi: [
      "प्राथमिक गतिविधि",
      "द्वितीयक गतिविधि",
      "तृतीयक गतिविधि",
      "चतुर्थक गतिविधि"
    ],
    answer_en: "Primary activity",
    answer_hi: "प्राथमिक गतिविधि",
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "Which of the following is a service industry?",
    question_hi: "निम्नलिखित में से कौन-सा सेवा उद्योग है?",
    options_en: [
      "Fishing",
      "Car manufacturing",
      "Hotel management",
      "Mining"
    ],
    options_hi: [
      "मछली पकड़ना",
      "कार निर्माण",
      "होटल प्रबंधन",
      "खनन"
    ],
    answer_en: "Hotel management",
    answer_hi: "होटल प्रबंधन",
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "Which sector includes research, development, and IT services?",
    question_hi: "कौन-सा क्षेत्र अनुसंधान, विकास और आईटी सेवाओं को शामिल करता है?",
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
    answer_en: "Quaternary sector",
    answer_hi: "चतुर्थक क्षेत्र",
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "Which of the following professions belongs to the tertiary sector?",
    question_hi: "निम्नलिखित में से कौन-सा पेशा तृतीयक क्षेत्र से संबंधित है?",
    options_en: [
      "Teacher",
      "Miner",
      "Farmer",
      "Factory worker"
    ],
    options_hi: [
      "शिक्षक",
      "खनिक",
      "किसान",
      "फैक्ट्री मजदूर"
    ],
    answer_en: "Teacher",
    answer_hi: "शिक्षक",
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "Which activity includes selling, repairing, and transportation?",
    question_hi: "कौन-सी गतिविधि बिक्री, मरम्मत और परिवहन को शामिल करती है?",
    options_en: [
      "Primary activity",
      "Secondary activity",
      "Tertiary activity",
      "Quaternary activity"
    ],
    options_hi: [
      "प्राथमिक गतिविधि",
      "द्वितीयक गतिविधि",
      "तृतीयक गतिविधि",
      "चतुर्थक गतिविधि"
    ],
    answer_en: "Tertiary activity",
    answer_hi: "तृतीयक गतिविधि",
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "Which sector is associated with the extraction of raw materials?",
    question_hi: "कौन-सा क्षेत्र कच्चे माल के निष्कर्षण से जुड़ा है?",
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
    num: 20,
    question_en: "Which of the following is a characteristic of tertiary sector?",
    question_hi: "तृतीयक क्षेत्र की क्या विशेषता है?",
    options_en: [
      "Involves production of goods",
      "Involves extraction of resources",
      "Involves provision of services",
      "Involves farming"
    ],
    options_hi: [
      "वस्तुओं का उत्पादन शामिल है",
      "संसाधनों का निष्कर्षण शामिल है",
      "सेवाओं की प्रदानगी शामिल है",
      "खेती शामिल है"
    ],
    answer_en: "Involves provision of services",
    answer_hi: "सेवाओं की प्रदानगी शामिल है",
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "Which activity includes software development and IT support?",
    question_hi: "कौन-सी गतिविधि सॉफ्टवेयर विकास और आईटी सहायता को शामिल करती है?",
    options_en: [
      "Primary activity",
      "Secondary activity",
      "Tertiary activity",
      "Quaternary activity"
    ],
    options_hi: [
      "प्राथमिक गतिविधि",
      "द्वितीयक गतिविधि",
      "तृतीयक गतिविधि",
      "चतुर्थक गतिविधि"
    ],
    answer_en: "Quaternary activity",
    answer_hi: "चतुर्थक गतिविधि",
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "Which activity includes tourism and entertainment?",
    question_hi: "कौन-सी गतिविधि पर्यटन और मनोरंजन को शामिल करती है?",
    options_en: [
      "Primary activity",
      "Secondary activity",
      "Tertiary activity",
      "Quaternary activity"
    ],
    options_hi: [
      "प्राथमिक गतिविधि",
      "द्वितीयक गतिविधि",
      "तृतीयक गतिविधि",
      "चतुर्थक गतिविधि"
    ],
    answer_en: "Tertiary activity",
    answer_hi: "तृतीयक गतिविधि",
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "Which of the following is an example of primary activity?",
    question_hi: "निम्नलिखित में से कौन-सा प्राथमिक गतिविधि का उदाहरण है?",
    options_en: [
      "Fishing",
      "Teaching",
      "Transport",
      "Banking"
    ],
    options_hi: [
      "मछली पकड़ना",
      "शिक्षण",
      "परिवहन",
      "बैंकिंग"
    ],
    answer_en: "Fishing",
    answer_hi: "मछली पकड़ना",
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "Which sector mainly provides services to individuals and businesses?",
    question_hi: "कौन-सा क्षेत्र मुख्य रूप से व्यक्तियों और व्यवसायों को सेवाएं प्रदान करता है?",
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
    num: 25,
    question_en: "Which sector involves industries like steel, textile, and automobile?",
    question_hi: "कौन-सा क्षेत्र इस्पात, वस्त्र, और ऑटोमोबाइल जैसी उद्योगों से संबंधित है?",
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
    answer_en: "Secondary sector",
    answer_hi: "द्वितीयक क्षेत्र",
    attempted: false,
    selected: null
  },
  {
    num: 26,
    question_en: "Which of the following is an example of a quaternary activity?",
    question_hi: "निम्नलिखित में से कौन-सा चतुर्थक गतिविधि का उदाहरण है?",
    options_en: [
      "Research and development",
      "Farming",
      "Manufacturing",
      "Retail trade"
    ],
    options_hi: [
      "अनुसंधान और विकास",
      "खेती",
      "उत्पादन",
      "खुदरा व्यापार"
    ],
    answer_en: "Research and development",
    answer_hi: "अनुसंधान और विकास",
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "Which type of farming is practiced in areas with heavy rainfall and humid climate?",
    question_hi: "गहन वर्षा और आर्द्र जलवायु वाले क्षेत्रों में किस प्रकार की खेती की जाती है?",
    options_en: [
      "Shifting cultivation",
      "Subsistence farming",
      "Commercial farming",
      "Terrace farming"
    ],
    options_hi: [
      "स्थानांतरण कृषि",
      "आजीविका खेती",
      "व्यावसायिक खेती",
      "सीढ़ीदार खेती"
    ],
    answer_en: "Shifting cultivation",
    answer_hi: "स्थानांतरण कृषि",
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "Which mineral is commonly found in the state of Jharkhand?",
    question_hi: "झारखंड राज्य में सामान्यतः कौन-सा खनिज पाया जाता है?",
    options_en: [
      "Coal",
      "Copper",
      "Gold",
      "Diamond"
    ],
    options_hi: [
      "कोयला",
      "तांबा",
      "सोना",
      "हीरा"
    ],
    answer_en: "Coal",
    answer_hi: "कोयला",
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "Which river is known as the 'Sorrow of Bihar' due to its frequent floods?",
    question_hi: "कौन-सी नदी अपने बार-बार के बाढ़ के कारण 'बिहार का दुःख' कहलाती है?",
    options_en: [
      "Kosi",
      "Ganga",
      "Yamuna",
      "Sutlej"
    ],
    options_hi: [
      "कोसी",
      "गंगा",
      "यमुना",
      "सतलज"
    ],
    answer_en: "Kosi",
    answer_hi: "कोसी",
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "Which state is the largest producer of tea in India?",
    question_hi: "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    options_en: [
      "Assam",
      "West Bengal",
      "Kerala",
      "Tamil Nadu"
    ],
    options_hi: [
      "असम",
      "पश्चिम बंगाल",
      "केरल",
      "तमिलनाडु"
    ],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "Which crop is known as the 'King of cereals'?",
    question_hi: "कौन-सी फसल 'अनाजों का राजा' कहलाती है?",
    options_en: [
      "Rice",
      "Wheat",
      "Maize",
      "Barley"
    ],
    options_hi: [
      "चावल",
      "गेहूं",
      "मक्का",
      "जौ"
    ],
    answer_en: "Rice",
    answer_hi: "चावल",
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "Which of the following is a commercial crop?",
    question_hi: "निम्नलिखित में से कौन-सी फसल व्यावसायिक फसल है?",
    options_en: [
      "Cotton",
      "Rice",
      "Wheat",
      "Millets"
    ],
    options_hi: [
      "कपास",
      "चावल",
      "गेहूं",
      "मोटे अनाज"
    ],
    answer_en: "Cotton",
    answer_hi: "कपास",
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "Which is the longest river in India?",
    question_hi: "भारत की सबसे लंबी नदी कौन-सी है?",
    options_en: [
      "Ganga",
      "Yamuna",
      "Godavari",
      "Brahmaputra"
    ],
    options_hi: [
      "गंगा",
      "यमुना",
      "गोदावरी",
      "ब्रह्मपुत्र"
    ],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "Which mountain range is called the 'Water Divide' of India?",
    question_hi: "भारत की कौन-सी पर्वत श्रृंखला को 'जल विभाजन' कहा जाता है?",
    options_en: [
      "Aravalli",
      "Vindhya",
      "Satpura",
      "Himalayas"
    ],
    options_hi: [
      "अरावली",
      "विंध्य",
      "सतपुड़ा",
      "हिमालय"
    ],
    answer_en: "Vindhya",
    answer_hi: "विंध्य",
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "Which state has the largest forest cover in India?",
    question_hi: "भारत में सबसे बड़ा वन क्षेत्र किस राज्य में है?",
    options_en: [
      "Madhya Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Maharashtra"
    ],
    options_hi: [
      "मध्य प्रदेश",
      "अरुणाचल प्रदेश",
      "असम",
      "महाराष्ट्र"
    ],
    answer_en: "Madhya Pradesh",
    answer_hi: "मध्य प्रदेश",
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "Which is the main crop of Punjab and Haryana?",
    question_hi: "पंजाब और हरियाणा की मुख्य फसल कौन-सी है?",
    options_en: [
      "Wheat",
      "Rice",
      "Sugarcane",
      "Cotton"
    ],
    options_hi: [
      "गेहूं",
      "चावल",
      "गन्ना",
      "कपास"
    ],
    answer_en: "Wheat",
    answer_hi: "गेहूं",
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "Which of the following is NOT a type of soil found in India?",
    question_hi: "निम्नलिखित में से कौन-सा भारत में पाया जाने वाला मिट्टी का प्रकार नहीं है?",
    options_en: [
      "Alluvial soil",
      "Black soil",
      "Sandy soil",
      "Permafrost soil"
    ],
    options_hi: [
      "अलुवियल मिट्टी",
      "काली मिट्टी",
      "रेतीली मिट्टी",
      "परमेफ्रॉस्ट मिट्टी"
    ],
    answer_en: "Permafrost soil",
    answer_hi: "परमेफ्रॉस्ट मिट्टी",
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "Which Indian state is famous for sandalwood production?",
    question_hi: "कौन-सा भारतीय राज्य चंदन के उत्पादन के लिए प्रसिद्ध है?",
    options_en: [
      "Karnataka",
      "Tamil Nadu",
      "Kerala",
      "Andhra Pradesh"
    ],
    options_hi: [
      "कर्नाटक",
      "तमिलनाडु",
      "केरल",
      "आंध्र प्रदेश"
    ],
    answer_en: "Karnataka",
    answer_hi: "कर्नाटक",
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "Which is the largest saltwater lake in India?",
    question_hi: "भारत की सबसे बड़ी खारा जल वाली झील कौन-सी है?",
    options_en: [
      "Chilka Lake",
      "Wular Lake",
      "Pulicat Lake",
      "Vembanad Lake"
    ],
    options_hi: [
      "चिल्का झील",
      "वूलर झील",
      "पुलिकट झील",
      "वेम्बनाड झील"
    ],
    answer_en: "Chilka Lake",
    answer_hi: "चिल्का झील",
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "Which of these rivers does NOT originate from the Himalayas?",
    question_hi: "इनमें से कौन-सी नदी हिमालय से नहीं निकलती है?",
    options_en: [
      "Ganga",
      "Yamuna",
      "Narmada",
      "Saraswati"
    ],
    options_hi: [
      "गंगा",
      "यमुना",
      "नर्मदा",
      "सरस्वती"
    ],
    answer_en: "Narmada",
    answer_hi: "नर्मदा",
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "Which of the following is a renewable resource?",
    question_hi: "निम्नलिखित में से कौन-सा स्रोत नवीनीकरणीय संसाधन है?",
    options_en: [
      "Coal",
      "Petroleum",
      "Wind energy",
      "Natural gas"
    ],
    options_hi: [
      "कोयला",
      "पेट्रोलियम",
      "पवन ऊर्जा",
      "प्राकृतिक गैस"
    ],
    answer_en: "Wind energy",
    answer_hi: "पवन ऊर्जा",
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "Which industry is mainly found in Jamshedpur?",
    question_hi: "जमशेदपुर में मुख्य रूप से कौन-सा उद्योग पाया जाता है?",
    options_en: [
      "Steel industry",
      "Textile industry",
      "Automobile industry",
      "Chemical industry"
    ],
    options_hi: [
      "इस्पात उद्योग",
      "कपड़ा उद्योग",
      "ऑटोमोबाइल उद्योग",
      "रासायनिक उद्योग"
    ],
    answer_en: "Steel industry",
    answer_hi: "इस्पात उद्योग",
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "Which state is the largest producer of wheat in India?",
    question_hi: "भारत में गेहूं का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    options_en: [
      "Punjab",
      "Uttar Pradesh",
      "Haryana",
      "Madhya Pradesh"
    ],
    options_hi: [
      "पंजाब",
      "उत्तर प्रदेश",
      "हरियाणा",
      "मध्य प्रदेश"
    ],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "Which of these is NOT a major port in India?",
    question_hi: "इनमें से कौन-सा भारत में एक प्रमुख बंदरगाह नहीं है?",
    options_en: [
      "Mumbai",
      "Kolkata",
      "Chennai",
      "Hyderabad"
    ],
    options_hi: [
      "मुंबई",
      "कोलकाता",
      "चेन्नई",
      "हैदराबाद"
    ],
    answer_en: "Hyderabad",
    answer_hi: "हैदराबाद",
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "Which Indian state is famous for the production of spices?",
    question_hi: "कौन-सा भारतीय राज्य मसालों के उत्पादन के लिए प्रसिद्ध है?",
    options_en: [
      "Kerala",
      "Punjab",
      "Rajasthan",
      "Bihar"
    ],
    options_hi: [
      "केरल",
      "पंजाब",
      "राजस्थान",
      "बिहार"
    ],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "Which soil type is known as 'black cotton soil'?",
    question_hi: "कौन-सा मिट्टी का प्रकार 'काली कपास मिट्टी' के नाम से जाना जाता है?",
    options_en: [
      "Alluvial soil",
      "Black soil",
      "Red soil",
      "Laterite soil"
    ],
    options_hi: [
      "अलुवियल मिट्टी",
      "काली मिट्टी",
      "लाल मिट्टी",
      "लेटेराइट मिट्टी"
    ],
    answer_en: "Black soil",
    answer_hi: "काली मिट्टी",
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "Which of the following is NOT an example of a tertiary activity?",
    question_hi: "निम्नलिखित में से कौन-सा तृतीयक गतिविधि का उदाहरण नहीं है?",
    options_en: [
      "Banking",
      "Teaching",
      "Fishing",
      "Tourism"
    ],
    options_hi: [
      "बैंकिंग",
      "शिक्षण",
      "मछली पकड़ना",
      "पर्यटन"
    ],
    answer_en: "Fishing",
    answer_hi: "मछली पकड़ना",
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "Which of the following rivers flows into the Arabian Sea?",
    question_hi: "निम्नलिखित में से कौन-सी नदी अरब सागर में मिलती है?",
    options_en: [
      "Godavari",
      "Narmada",
      "Ganga",
      "Brahmaputra"
    ],
    options_hi: [
      "गोदावरी",
      "नर्मदा",
      "गंगा",
      "ब्रह्मपुत्र"
    ],
    answer_en: "Narmada",
    answer_hi: "नर्मदा",
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "Which of the following is a major oil-producing state in India?",
    question_hi: "भारत में निम्नलिखित में से कौन-सा राज्य प्रमुख तेल उत्पादक है?",
    options_en: [
      "Assam",
      "Punjab",
      "Kerala",
      "Rajasthan"
    ],
    options_hi: [
      "असम",
      "पंजाब",
      "केरल",
      "राजस्थान"
    ],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "Which city is known as the 'Manchester of India'?",
    question_hi: "भारत का कौन-सा शहर 'भारत का मैनचेस्टर' के नाम से जाना जाता है?",
    options_en: [
      "Mumbai",
      "Ahmedabad",
      "Kolkata",
      "Chennai"
    ],
    options_hi: [
      "मुंबई",
      "अहमदाबाद",
      "कोलकाता",
      "चेन्नई"
    ],
    answer_en: "Ahmedabad",
    answer_hi: "अहमदाबाद",
    attempted: false,
    selected: null
  }

    // Continue adding more questions up to 30
];





let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
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
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}

function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};
