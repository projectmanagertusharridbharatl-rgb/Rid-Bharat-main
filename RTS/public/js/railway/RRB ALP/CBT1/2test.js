const questions = [
  {
    num: 1,
    question_en: "What is the basic economic problem?",
    question_hi: "मूलभूत आर्थिक समस्या क्या है?",
    options_en: ["Scarcity of resources", "Unemployment", "Inflation", "Deflation"],
    options_hi: ["संसाधनों की कमी", "बेरोज़गारी", "मुद्रास्फीति", "मूल्यह्रास"],
    answer_en: "Scarcity of resources",
    answer_hi: "संसाधनों की कमी",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Stagflation is a period of:",
    question_hi: "स्टैगफ्लेशन एक समयावधि है:",
    options_en: ["High growth & inflation", "High unemployment & inflation", "Low growth & low prices", "High income & growth"],
    options_hi: ["उच्च विकास और मुद्रास्फीति", "उच्च बेरोज़गारी और मुद्रास्फीति", "कम विकास और कम कीमतें", "उच्च आय और विकास"],
    answer_en: "High unemployment & inflation",
    answer_hi: "उच्च बेरोज़गारी और मुद्रास्फीति",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "The production function shows:",
    question_hi: "उत्पादन फलन क्या दर्शाता है?",
    options_en: ["Relationship between input and output", "Relationship between wages and labor", "Investment and savings", "Demand and supply"],
    options_hi: ["इनपुट और आउटपुट के बीच संबंध", "वेतन और श्रम के बीच संबंध", "निवेश और बचत", "मांग और आपूर्ति"],
    answer_en: "Relationship between input and output",
    answer_hi: "इनपुट और आउटपुट के बीच संबंध",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Who bears the burden of indirect tax?",
    question_hi: "अप्रत्यक्ष कर का बोझ कौन उठाता है?",
    options_en: ["Producer", "Government", "Consumer", "Investor"],
    options_hi: ["उत्पादक", "सरकार", "उपभोक्ता", "निवेशक"],
    answer_en: "Consumer",
    answer_hi: "उपभोक्ता",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Main aim of devaluation is:",
    question_hi: "मुद्राप्रतिक्षेप का मुख्य उद्देश्य है:",
    options_en: ["Reduce imports", "Encourage exports", "Reduce inflation", "Increase FDI"],
    options_hi: ["आयात को कम करना", "निर्यात को बढ़ावा देना", "मुद्रास्फीति को कम करना", "प्रत्यक्ष विदेशी निवेश को बढ़ाना"],
    answer_en: "Encourage exports",
    answer_hi: "निर्यात को बढ़ावा देना",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Goods whose demand increases with income are called:",
    question_hi: "जिन वस्तुओं की मांग आय के साथ बढ़ती है उन्हें क्या कहा जाता है?",
    options_en: ["Inferior goods", "Luxury goods", "Normal goods", "Giffen goods"],
    options_hi: ["अवमूल्य वस्तुएं", "ऐश्वर्य वस्तुएं", "सामान्य वस्तुएं", "गिफेन वस्तुएं"],
    answer_en: "Normal goods",
    answer_hi: "सामान्य वस्तुएं",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Price increase leads to:",
    question_hi: "कीमत में वृद्धि से क्या होता है?",
    options_en: ["Rise in supply", "Fall in consumer surplus", "Fall in production", "Rise in wages"],
    options_hi: ["आपूर्ति में वृद्धि", "उपभोक्ता अधिशेष में कमी", "उत्पादन में कमी", "वेतन में वृद्धि"],
    answer_en: "Fall in consumer surplus",
    answer_hi: "उपभोक्ता अधिशेष में कमी",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Long-term fiscal policy stabilizes:",
    question_hi: "दीर्घकालिक राजकोषीय नीति क्या स्थिर करती है?",
    options_en: ["Employment", "Exports", "Tax revenue to national income ratio", "Imports"],
    options_hi: ["रोज़गार", "निर्यात", "कर राजस्व और राष्ट्रीय आय का अनुपात", "आयात"],
    answer_en: "Tax revenue to national income ratio",
    answer_hi: "कर राजस्व और राष्ट्रीय आय का अनुपात",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Inflation occurs when:",
    question_hi: "मुद्रास्फीति कब होती है?",
    options_en: ["Prices fall continuously", "Money value increases", "Prices increase over time", "Supply exceeds demand"],
    options_hi: ["कीमतें लगातार गिरती हैं", "मुद्रा का मूल्य बढ़ता है", "कीमतें समय के साथ बढ़ती हैं", "आपूर्ति मांग से अधिक होती है"],
    answer_en: "Prices increase over time",
    answer_hi: "कीमतें समय के साथ बढ़ती हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which organization regulates mutual funds in India?",
    question_hi: "भारत में म्यूचुअल फंड को कौन नियंत्रित करता है?",
    options_en: ["RBI", "IRDA", "SEBI", "NABARD"],
    options_hi: ["भारतीय रिज़र्व बैंक", "बीमा नियामक", "सेबी", "नाबार्ड"],
    answer_en: "SEBI",
    answer_hi: "सेबी",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which curve shows the relationship between inflation and unemployment?",
    question_hi: "कौन सा वक्र मुद्रास्फीति और बेरोजगारी के बीच संबंध को दर्शाता है?",
    options_en: ["Laffer Curve", "Phillips Curve", "IS Curve", "LM Curve"],
    options_hi: ["लाफर वक्र", "फिलिप्स वक्र", "आईएस वक्र", "एलएम वक्र"],
    answer_en: "Phillips Curve",
    answer_hi: "फिलिप्स वक्र",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "GDP at factor cost is equal to:",
    question_hi: "कारक लागत पर GDP बराबर होता है:",
    options_en: [
      "GDP at market prices - Indirect taxes + Subsidies",
      "GDP at market prices + Indirect taxes",
      "GNP - Net exports",
      "GNP + Indirect taxes"
    ],
    options_hi: [
      "बाजार मूल्य पर GDP - अप्रत्यक्ष कर + सब्सिडी",
      "बाजार मूल्य पर GDP + अप्रत्यक्ष कर",
      "GNP - शुद्ध निर्यात",
      "GNP + अप्रत्यक्ष कर"
    ],
    answer_en: "GDP at market prices - Indirect taxes + Subsidies",
    answer_hi: "बाजार मूल्य पर GDP - अप्रत्यक्ष कर + सब्सिडी",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which sector is called the 'tertiary sector'?",
    question_hi: "कौन सा क्षेत्र 'तृतीयक क्षेत्र' कहलाता है?",
    options_en: ["Agriculture", "Manufacturing", "Services", "Mining"],
    options_hi: ["कृषि", "उत्पादन", "सेवाएँ", "खनन"],
    answer_en: "Services",
    answer_hi: "सेवाएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Disguised unemployment mostly occurs in:",
    question_hi: "प्रच्छन्न बेरोज़गारी मुख्यतः किस क्षेत्र में होती है?",
    options_en: ["Industrial sector", "Service sector", "Agricultural sector", "Private sector"],
    options_hi: ["औद्योगिक क्षेत्र", "सेवा क्षेत्र", "कृषि क्षेत्र", "निजी क्षेत्र"],
    answer_en: "Agricultural sector",
    answer_hi: "कृषि क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "The economic planning in India is based on which model?",
    question_hi: "भारत में आर्थिक योजना किस मॉडल पर आधारित है?",
    options_en: ["Capitalist model", "Socialist model", "Mixed economy model", "Laissez-faire model"],
    options_hi: ["पूंजीवादी मॉडल", "समाजवादी मॉडल", "मिश्रित अर्थव्यवस्था मॉडल", "नियंत्रण मुक्त मॉडल"],
    answer_en: "Mixed economy model",
    answer_hi: "मिश्रित अर्थव्यवस्था मॉडल",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which tax is levied on the income of individuals?",
    question_hi: "व्यक्तियों की आय पर कौन सा कर लगाया जाता है?",
    options_en: ["Excise duty", "Income tax", "Customs duty", "Wealth tax"],
    options_hi: ["उत्पाद शुल्क", "आयकर", "सीमा शुल्क", "संपत्ति कर"],
    answer_en: "Income tax",
    answer_hi: "आयकर",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Bank rate is the rate at which:",
    question_hi: "बैंक दर वह दर है जिस पर:",
    options_en: ["RBI lends to public", "Commercial banks lend to RBI", "RBI lends to commercial banks", "Banks lend to public"],
    options_hi: ["RBI जनता को उधार देता है", "वाणिज्यिक बैंक RBI को उधार देते हैं", "RBI वाणिज्यिक बैंकों को उधार देता है", "बैंक जनता को उधार देते हैं"],
    answer_en: "RBI lends to commercial banks",
    answer_hi: "RBI वाणिज्यिक बैंकों को उधार देता है",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Who prepares the National Income estimates in India?",
    question_hi: "भारत में राष्ट्रीय आय का अनुमान कौन तैयार करता है?",
    options_en: ["RBI", "Finance Ministry", "CSO", "NITI Aayog"],
    options_hi: ["RBI", "वित्त मंत्रालय", "CSO", "नीति आयोग"],
    answer_en: "CSO",
    answer_hi: "CSO",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which of the following is not a direct tax?",
    question_hi: "निम्नलिखित में से कौन-सा प्रत्यक्ष कर नहीं है?",
    options_en: ["Wealth Tax", "Corporate Tax", "Income Tax", "Excise Duty"],
    options_hi: ["संपत्ति कर", "कॉरपोरेट कर", "आय कर", "उत्पाद शुल्क"],
    answer_en: "Excise Duty",
    answer_hi: "उत्पाद शुल्क",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Main source of revenue for Government of India is:",
    question_hi: "भारत सरकार का मुख्य राजस्व स्रोत है:",
    options_en: ["Excise duty", "Corporation tax", "GST", "Income tax"],
    options_hi: ["उत्पाद शुल्क", "कॉरपोरेट कर", "जीएसटी", "आयकर"],
    answer_en: "GST",
    answer_hi: "जीएसटी",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Inflation is measured by:",
    question_hi: "भारत में मुद्रास्फीति किससे मापी जाती है?",
    options_en: ["WPI", "CPI", "National Income", "GNP"],
    options_hi: ["डब्ल्यूपीआई", "सीपीआई", "राष्ट्रीय आय", "सकल राष्ट्रीय उत्पाद"],
    answer_en: "CPI",
    answer_hi: "सीपीआई",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Narasimham Committee is related to:",
    question_hi: "नरसिंहम समिति किससे संबंधित है?",
    options_en: ["Industrial reforms", "Financial sector reforms", "Tax reforms", "Public sector"],
    options_hi: ["औद्योगिक सुधार", "वित्तीय क्षेत्र सुधार", "कर सुधार", "सार्वजनिक क्षेत्र"],
    answer_en: "Financial sector reforms",
    answer_hi: "वित्तीय क्षेत्र सुधार",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which of the following is a capital expenditure?",
    question_hi: "निम्नलिखित में से कौन-सा पूंजीगत व्यय है?",
    options_en: ["Wages", "Interest payments", "Purchase of defense equipment", "Pensions"],
    options_hi: ["वेतन", "ब्याज भुगतान", "रक्षा उपकरणों की खरीद", "पेंशन"],
    answer_en: "Purchase of defense equipment",
    answer_hi: "रक्षा उपकरणों की खरीद",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Balance of Trade means:",
    question_hi: "व्यापार संतुलन का अर्थ है:",
    options_en: ["Export - Import", "Import - Export", "FDI", "Remittances"],
    options_hi: ["निर्यात - आयात", "आयात - निर्यात", "एफडीआई", "विदेशी प्रेषण"],
    answer_en: "Export - Import",
    answer_hi: "निर्यात - आयात",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Who publishes Human Development Index?",
    question_hi: "मानव विकास सूचकांक कौन प्रकाशित करता है?",
    options_en: ["World Bank", "UNICEF", "UNDP", "IMF"],
    options_hi: ["विश्व बैंक", "यूनिसेफ", "यूएनडीपी", "आईएमएफ"],
    answer_en: "UNDP",
    answer_hi: "यूएनडीपी",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "What is the main objective of the Second Five-Year Plan in India?",
    question_hi: "भारत की दूसरी पंचवर्षीय योजना का मुख्य उद्देश्य क्या था?",
    options_en: ["Industrialization", "Agricultural development", "Infrastructure development", "None of the above"],
    options_hi: ["औद्योगिकीकरण", "कृषि विकास", "बुनियादी ढांचा विकास", "उपरोक्त में से कोई नहीं"],
    answer_en: "Industrialization",
    answer_hi: "औद्योगिकीकरण",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which tax is levied on the income of individuals?",
    question_hi: "व्यक्तियों की आय पर कौन सा कर लगाया जाता है?",
    options_en: ["Income Tax", "Sales Tax", "Excise Duty", "Wealth Tax"],
    options_hi: ["आयकर", "विक्रय कर", "उत्पाद शुल्क", "संपत्ति कर"],
    answer_en: "Income Tax",
    answer_hi: "आयकर",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What is the primary function of the Reserve Bank of India (RBI)?",
    question_hi: "भारतीय रिज़र्व बैंक (RBI) का मुख्य कार्य क्या है?",
    options_en: ["Monetary policy regulation", "Fiscal policy formulation", "Tax collection", "Public welfare schemes"],
    options_hi: ["मुद्रास्फीति नीति का नियमन", "राजकोषीय नीति का निर्माण", "कर संग्रहण", "सार्वजनिक कल्याण योजनाएं"],
    answer_en: "Monetary policy regulation",
    answer_hi: "मुद्रास्फीति नीति का नियमन",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which of the following is a direct tax?",
    question_hi: "निम्नलिखित में से कौन सा प्रत्यक्ष कर है?",
    options_en: ["Income Tax", "Sales Tax", "Excise Duty", "Customs Duty"],
    options_hi: ["आयकर", "विक्रय कर", "उत्पाद शुल्क", "सीमा शुल्क"],
    answer_en: "Income Tax",
    answer_hi: "आयकर",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What does GDP stand for?",
    question_hi: "GDP का पूरा नाम क्या है?",
    options_en: ["Gross Domestic Product", "Gross Development Product", "General Domestic Product", "Gross Direct Product"],
    options_hi: ["सकल घरेलू उत्पाद", "सकल विकास उत्पाद", "सामान्य घरेलू उत्पाद", "सकल प्रत्यक्ष उत्पाद"],
    answer_en: "Gross Domestic Product",
    answer_hi: "सकल घरेलू उत्पाद",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which committee recommended the introduction of Goods and Services Tax (GST) in India?",
    question_hi: "भारत में वस्तु और सेवा कर (GST) की शुरुआत की सिफारिश किस समिति ने की थी?",
    options_en: ["Kelkar Committee", "Shome Committee", "Rangarajan Committee", "Narasimham Committee"],
    options_hi: ["केलकर समिति", "शोम समिति", "रंगराजन समिति", "नरसिंह समिति"],
    answer_en: "Kelkar Committee",
    answer_hi: "केलकर समिति",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "What is the main objective of the National Rural Employment Guarantee Act (NREGA)?",
    question_hi: "राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम (NREGA) का मुख्य उद्देश्य क्या है?",
    options_en: ["Providing employment to rural households", "Promoting industrial growth", "Enhancing agricultural productivity", "None of the above"],
    options_hi: ["ग्रामीण परिवारों को रोजगार प्रदान करना", "औद्योगिक विकास को बढ़ावा देना", "कृषि उत्पादकता को बढ़ाना", "उपरोक्त में से कोई नहीं"],
    answer_en: "Providing employment to rural households",
    answer_hi: "ग्रामीण परिवारों को रोजगार प्रदान करना",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which of the following is a tool of monetary policy?",
    question_hi: "निम्नलिखित में से कौन सा मौद्रिक नीति का उपकरण है?",
    options_en: ["Open Market Operations", "Income Tax", "Excise Duty", "Customs Duty"],
    options_hi: ["खुली बाजार संचालन", "आयकर", "उत्पाद शुल्क", "सीमा शुल्क"],
    answer_en: "Open Market Operations",
    answer_hi: "खुली बाजार संचालन",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "What is the main objective of the Pradhan Mantri Jan Dhan Yojana?",
    question_hi: "प्रधानमंत्री जन धन योजना का मुख्य उद्देश्य क्या है?",
    options_en: ["Financial inclusion", "Promoting digital payments", "Providing loans to farmers", "None of the above"],
    options_hi: ["वित्तीय समावेशन", "डिजिटल भुगतान को बढ़ावा देना", "किसानों को ऋण प्रदान करना", "उपरोक्त में से कोई नहीं"],
    answer_en: "Financial inclusion",
    answer_hi: "वित्तीय समावेशन",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which of the following is a feature of a mixed economy?",
    question_hi: "निम्नलिखित में से कौन सा मिश्रित अर्थव्यवस्था की विशेषता है?",
    options_en: ["Coexistence of public and private sectors", "Government controls all industries", "Private sector dominates the economy", "None of the above"],
    options_hi: ["सार्वजनिक और निजी क्षेत्रों का सह-अस्तित्व", "सरकार सभी उद्योगों को नियंत्रित करती है", "निजी क्षेत्र अर्थव्यवस्था पर हावी है", "उपरोक्त में से कोई नहीं"],
    answer_en: "Coexistence of public and private sectors",
    answer_hi: "सार्वजनिक और निजी क्षेत्रों का सह-अस्तित्व",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "What is the primary objective of the National Bank for Agriculture and Rural Development (NABARD)?",
    question_hi: "राष्ट्रीय कृषि और ग्रामीण विकास बैंक (NABARD) का मुख्य उद्देश्य क्या है?",
    options_en: ["Promoting rural development", "Regulating financial markets", "Providing loans to industries", "None of the above"],
    options_hi: ["ग्रामीण विकास को बढ़ावा देना", "वित्तीय बाजारों को नियंत्रित करना", "उद्योगों को ऋण प्रदान करना", "उपरोक्त में से कोई नहीं"],
    answer_en: "Promoting rural development",
    answer_hi: "ग्रामीण विकास को बढ़ावा देना",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which of the following is a component of fiscal policy?",
    question_hi: "निम्नलिखित में से कौन सा राजकोषीय नीति का घटक है?",
    options_en: ["Government spending", "Interest rates", "Money supply", "All of the above"],
    options_hi: ["सरकारी खर्च", "ब्याज दरें", "मुद्रा आपूर्ति", "उपरोक्त सभी"],
    answer_en: "Government spending",
    answer_hi: "सरकारी खर्च",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What is the unit of electric potential?",
    question_hi: "विद्युत पोटेंशियल की इकाई क्या है?",
    options_en: ["Volt", "Ampere", "Ohm", "Watt"],
    options_hi: ["वोल्ट", "एंपियर", "ओम", "वाट"],
    answer_en: "Volt",
    answer_hi: "वोल्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "In an electrical circuit, what does the resistor do?",
    question_hi: "एक विद्युत सर्किट में रेज़िस्टर क्या करता है?",
    options_en: ["Resists the flow of current", "Stores energy", "Amplifies signals", "None of the above"],
    options_hi: ["धारा के प्रवाह का विरोध करता है", "ऊर्जा संचित करता है", "सिग्नल्स को बढ़ाता है", "इनमें से कोई नहीं"],
    answer_en: "Resists the flow of current",
    answer_hi: "धारा के प्रवाह का विरोध करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "The efficiency of a motor is given by which formula?",
    question_hi: "मोटर की दक्षता कौन से सूत्र द्वारा दी जाती है?",
    options_en: ["(Output Power/Input Power) x 100", "Output Power x Input Power", "Input Power / Output Power", "None of the above"],
    options_hi: ["(आउटपुट पावर/इनपुट पावर) x 100", "आउटपुट पावर x इनपुट पावर", "इनपुट पावर / आउटपुट पावर", "इनमें से कोई नहीं"],
    answer_en: "(Output Power/Input Power) x 100",
    answer_hi: "(आउटपुट पावर/इनपुट पावर) x 100",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which of the following is a characteristic of a parallel circuit?",
    question_hi: "निम्नलिखित में से कौन सा परवलय सर्किट की विशेषता है?",
    options_en: ["All components share the same voltage", "All components share the same current", "The voltage is divided between components", "None of the above"],
    options_hi: ["सभी घटक एक ही वोल्टेज साझा करते हैं", "सभी घटक एक ही धारा साझा करते हैं", "वोल्टेज घटकों के बीच विभाजित होता है", "इनमें से कोई नहीं"],
    answer_en: "All components share the same voltage",
    answer_hi: "सभी घटक एक ही वोल्टेज साझा करते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "In the context of fluid mechanics, Bernoulli's principle is based on which conservation law?",
    question_hi: "तरल यांत्रिकी के संदर्भ में, बर्नौली का सिद्धांत किस संरक्षण नियम पर आधारित है?",
    options_en: ["Conservation of Energy", "Conservation of Mass", "Conservation of Momentum", "Conservation of Charge"],
    options_hi: ["ऊर्जा का संरक्षण", "द्रव्यमान का संरक्षण", "संवेग का संरक्षण", "आवेश का संरक्षण"],
    answer_en: "Conservation of Energy",
    answer_hi: "ऊर्जा का संरक्षण",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which is the best conductor of electricity?",
    question_hi: "विद्युत का सर्वोत्तम चालक कौन सा है?",
    options_en: ["Copper", "Aluminum", "Iron", "Gold"],
    options_hi: ["तांबा", "एल्युमिनियम", "लोहा", "सोना"],
    answer_en: "Copper",
    answer_hi: "तांबा",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What is the principle of a transformer based on?",
    question_hi: "ट्रांसफार्मर का सिद्धांत किस पर आधारित है?",
    options_en: ["Faraday's Law of Induction", "Ohm's Law", "Newton's Law", "None of the above"],
    options_hi: ["फैरेडे का प्रेरण सिद्धांत", "ओहम का नियम", "न्यूटन का नियम", "इनमें से कोई नहीं"],
    answer_en: "Faraday's Law of Induction",
    answer_hi: "फैरेडे का प्रेरण सिद्धांत",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the unit of electrical power?",
    question_hi: "विद्युत शक्ति की इकाई क्या है?",
    options_en: ["Watt", "Volt", "Ampere", "Ohm"],
    options_hi: ["वाट", "वोल्ट", "एंपियर", "ओम"],
    answer_en: "Watt",
    answer_hi: "वाट",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the working principle of a hydraulic brake?",
    question_hi: "हाइड्रोलिक ब्रेक का कार्य सिद्धांत क्या है?",
    options_en: ["Pascal's Law", "Bernoulli's Law", "Ohm's Law", "Newton's Law"],
    options_hi: ["पैसकल का सिद्धांत", "बर्नौली का सिद्धांत", "ओहम का नियम", "न्यूटन का नियम"],
    answer_en: "Pascal's Law",
    answer_hi: "पैसकल का सिद्धांत",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the main advantage of using AC over DC?",
    question_hi: "एसी का उपयोग डीसी पर करने का मुख्य लाभ क्या है?",
    options_en: ["Easier to transmit over long distances", "More efficient for low power consumption", "Better for energy storage", "None of the above"],
    options_hi: ["लंबी दूरी पर प्रसारित करना आसान", "न्यूनतम ऊर्जा खपत के लिए अधिक प्रभावी", "ऊर्जा भंडारण के लिए बेहतर", "इनमें से कोई नहीं"],
    answer_en: "Easier to transmit over long distances",
    answer_hi: "लंबी दूरी पर प्रसारित करना आसान",
    attempted: false,
    selected: ""
  },
  {
  num: 48,
  question_en: "What is the SI unit of force?",
  question_hi: "बल की SI इकाई क्या है?",
  options_en: ["Newton", "Joule", "Watt", "Pascal"],
  options_hi: ["न्यूटन", "जूल", "वाट", "पास्कल"],
  answer_en: "Newton",
  answer_hi: "न्यूटन",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which law states that every action has an equal and opposite reaction?",
  question_hi: "कौन सा नियम कहता है कि प्रत्येक क्रिया की एक समान और विपरीत प्रतिक्रिया होती है?",
  options_en: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
  options_hi: ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "गुरुत्वाकर्षण का नियम"],
  answer_en: "Newton's Third Law",
  answer_hi: "न्यूटन का तीसरा नियम",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is the chemical symbol for gold?",
  question_hi: "सोने का रासायनिक प्रतीक क्या है?",
  options_en: ["Au", "Ag", "Fe", "Hg"],
  options_hi: ["Au", "Ag", "Fe", "Hg"],
  answer_en: "Au",
  answer_hi: "Au",
  attempted: false,
  selected: ""
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
