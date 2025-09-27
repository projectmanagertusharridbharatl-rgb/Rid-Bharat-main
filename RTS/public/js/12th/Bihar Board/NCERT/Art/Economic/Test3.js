const questions = [
    {
        "num": 1,
        "question_en": "What is the basic concept of Economics?",
        "question_hi": "अर्थशास्त्र की मूल अवधारणा क्या है?",
        "options_en": ["Study of money and finance", "Study of human behavior in relation to scarce resources", "Study of government policies", "None of the above"],
        "options_hi": ["पैसे और वित्त का अध्ययन", "संसाधनों की कमी के संदर्भ में मानव व्यवहार का अध्ययन", "सरकारी नीतियों का अध्ययन", "इनमें से कोई नहीं"],
        "answer": "Study of human behavior in relation to scarce resources",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "What does the term 'scarcity' refer to in Economics?",
        "question_hi": "अर्थशास्त्र में 'संकट' शब्द का क्या अर्थ है?",
        "options_en": ["Unlimited resources", "Unlimited wants", "Limited resources", "None of the above"],
        "options_hi": ["असीमित संसाधन", "असीमित इच्छाएँ", "सीमित संसाधन", "इनमें से कोई नहीं"],
        "answer": "Limited resources",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Which of the following is a factor of production?",
        "question_hi": "निम्नलिखित में से कौन उत्पादन का एक कारक है?",
        "options_en": ["Land", "Money", "Government", "None of the above"],
        "options_hi": ["भूमि", "पैसा", "सरकार", "इनमें से कोई नहीं"],
        "answer": "Land",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "What is the definition of 'opportunity cost'?",
        "question_hi": "'अवसर लागत' की परिभाषा क्या है?",
        "options_en": ["The cost of the next best alternative forgone", "The total cost of production", "The cost of raw materials", "None of the above"],
        "options_hi": ["अगले सर्वोत्तम विकल्प का त्याग करने की लागत", "निर्माण की कुल लागत", "कच्चे माल की लागत", "इनमें से कोई नहीं"],
        "answer": "The cost of the next best alternative forgone",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "What is meant by 'demand' in Economics?",
        "question_hi": "अर्थशास्त्र में 'मांग' से क्या तात्पर्य है?",
        "options_en": ["The quantity of goods consumers are willing to buy at different prices", "The total amount of goods produced", "The price of goods", "None of the above"],
        "options_hi": ["वस्तुओं की मात्रा जिसे उपभोक्ता विभिन्न कीमतों पर खरीदने के लिए तैयार होते हैं", "निर्मित वस्तुओं की कुल मात्रा", "वस्तुओं की कीमत", "इनमें से कोई नहीं"],
        "answer": "The quantity of goods consumers are willing to buy at different prices",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "What is the law of demand?",
        "question_hi": "मांग का सिद्धांत क्या है?",
        "options_en": ["As the price of a good increases, the quantity demanded increases", "As the price of a good increases, the quantity demanded decreases", "Price and quantity demanded are unrelated", "None of the above"],
        "options_hi": ["जैसे-जैसे एक वस्तु की कीमत बढ़ती है, मांग की मात्रा बढ़ती है", "जैसे-जैसे एक वस्तु की कीमत बढ़ती है, मांग की मात्रा घटती है", "कीमत और मांग की मात्रा का कोई संबंध नहीं है", "इनमें से कोई नहीं"],
        "answer": "As the price of a good increases, the quantity demanded decreases",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "What is meant by 'supply' in Economics?",
        "question_hi": "अर्थशास्त्र में 'आपूर्ति' से क्या तात्पर्य है?",
        "options_en": ["The quantity of goods producers are willing to sell at different prices", "The total number of goods available", "The price of goods", "None of the above"],
        "options_hi": ["वस्तुओं की मात्रा जिसे उत्पादक विभिन्न कीमतों पर बेचने के लिए तैयार होते हैं", "उपलब्ध वस्तुओं की कुल संख्या", "वस्तुओं की कीमत", "इनमें से कोई नहीं"],
        "answer": "The quantity of goods producers are willing to sell at different prices",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "What is the law of supply?",
        "question_hi": "आपूर्ति का सिद्धांत क्या है?",
        "options_en": ["As the price of a good increases, the quantity supplied decreases", "As the price of a good increases, the quantity supplied increases", "Price and quantity supplied are unrelated", "None of the above"],
        "options_hi": ["जैसे-जैसे एक वस्तु की कीमत बढ़ती है, आपूर्ति की मात्रा घटती है", "जैसे-जैसे एक वस्तु की कीमत बढ़ती है, आपूर्ति की मात्रा बढ़ती है", "कीमत और आपूर्ति की मात्रा का कोई संबंध नहीं है", "इनमें से कोई नहीं"],
        "answer": "As the price of a good increases, the quantity supplied increases",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "What is 'equilibrium price'?",
        "question_hi": "'संतुलन कीमत' क्या है?",
        "options_en": ["The price at which demand equals supply", "The highest price a consumer is willing to pay", "The lowest price a producer is willing to accept", "None of the above"],
        "options_hi": ["वह कीमत जिस पर मांग और आपूर्ति समान होती हैं", "वह सबसे ऊंची कीमत जिसे उपभोक्ता भुगतान करने के लिए तैयार होता है", "वह सबसे कम कीमत जिसे उत्पादक स्वीकार करने के लिए तैयार होता है", "इनमें से कोई नहीं"],
        "answer": "The price at which demand equals supply",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "What is 'elasticity of demand'?",
        "question_hi": "'मांग की लोच' क्या है?",
        "options_en": ["The responsiveness of quantity demanded to changes in price", "The responsiveness of quantity supplied to changes in price", "The total demand in an economy", "None of the above"],
        "options_hi": ["कीमत में बदलाव के प्रति मांग की मात्रा की प्रतिक्रिया", "कीमत में बदलाव के प्रति आपूर्ति की मात्रा की प्रतिक्रिया", "एक अर्थव्यवस्था में कुल मांग", "इनमें से कोई नहीं"],
        "answer": "The responsiveness of quantity demanded to changes in price",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "What is 'inelastic demand'?",
        "question_hi": "'अलचनीय मांग' क्या है?",
        "options_en": ["When quantity demanded changes significantly with a change in price", "When quantity demanded does not change much with a change in price", "When price changes with demand", "None of the above"],
        "options_hi": ["जब कीमत में बदलाव के साथ मांग की मात्रा में महत्वपूर्ण बदलाव होता है", "जब कीमत में बदलाव के साथ मांग की मात्रा में ज्यादा बदलाव नहीं होता है", "जब कीमत मांग के साथ बदलती है", "इनमें से कोई नहीं"],
        "answer": "When quantity demanded does not change much with a change in price",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "What is meant by 'producer surplus'?",
        "question_hi": "'उत्पादक अधिशेष' से क्या तात्पर्य है?",
        "options_en": ["The difference between the price at which a producer is willing to sell and the price received", "The total revenue earned by a producer", "The cost of production", "None of the above"],
        "options_hi": ["वह अंतर जो उत्पादक को बेचनें के लिए तैयार कीमत और प्राप्त कीमत के बीच होता है", "उत्पादक द्वारा अर्जित कुल राजस्व", "निर्माण लागत", "इनमें से कोई नहीं"],
        "answer": "The difference between the price at which a producer is willing to sell and the price received",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "What is 'consumer surplus'?",
        "question_hi": "'उपभोक्ता अधिशेष' क्या है?",
        "options_en": ["The difference between the price a consumer is willing to pay and the price paid", "The total quantity of goods consumed", "The total expenditure of consumers", "None of the above"],
        "options_hi": ["वह अंतर जो उपभोक्ता द्वारा भुगतान करने के लिए तैयार कीमत और भुगतान की गई कीमत के बीच होता है", "उपभोक्ता द्वारा खपत की गई वस्तुओं की कुल मात्रा", "उपभोक्ताओं का कुल व्यय", "इनमें से कोई नहीं"],
        "answer": "The difference between the price a consumer is willing to pay and the price paid",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "What is 'market failure'?",
        "question_hi": "'बाजार विफलता' क्या है?",
        "options_en": ["When the allocation of resources is not efficient", "When the demand exceeds the supply", "When the supply exceeds the demand", "None of the above"],
        "options_hi": ["जब संसाधनों का आवंटन प्रभावी नहीं होता है", "जब मांग आपूर्ति से अधिक होती है", "जब आपूर्ति मांग से अधिक होती है", "इनमें से कोई नहीं"],
        "answer": "When the allocation of resources is not efficient",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "What does 'GDP' stand for?",
        "question_hi": "'GDP' का पूरा नाम क्या है?",
        "options_en": ["Gross Domestic Product", "Gross Domestic Purchase", "General Domestic Product", "None of the above"],
        "options_hi": ["सकल घरेलू उत्पाद", "सकल घरेलू खरीद", "सामान्य घरेलू उत्पाद", "इनमें से कोई नहीं"],
        "answer": "Gross Domestic Product",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What is 'gross national product' (GNP)?",
        "question_hi": "'सकल राष्ट्रीय उत्पाद' (GNP) क्या है?",
        "options_en": ["The total value of goods and services produced by a country in a year", "The total income earned by residents of a country, including income from abroad", "The total amount of money circulating in an economy", "None of the above"],
        "options_hi": ["एक वर्ष में किसी देश द्वारा उत्पादित वस्त्रों और सेवाओं का कुल मूल्य", "एक देश के निवासियों द्वारा अर्जित कुल आय, जिसमें विदेश से अर्जित आय भी शामिल है", "एक अर्थव्यवस्था में परिसंचारित कुल राशि", "इनमें से कोई नहीं"],
        "answer": "The total income earned by residents of a country, including income from abroad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What is 'inflation'?",
        "question_hi": "'मुद्रास्फीति' क्या है?",
        "options_en": ["A rise in the general price level of goods and services", "A rise in the money supply", "A decrease in demand", "None of the above"],
        "options_hi": ["वस्त्रों और सेवाओं की सामान्य कीमतों में वृद्धि", "मुद्रा आपूर्ति में वृद्धि", "मांग में कमी", "इनमें से कोई नहीं"],
        "answer": "A rise in the general price level of goods and services",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "What is 'deflation'?",
        "question_hi": "'मूल्य कमी' क्या है?",
        "options_en": ["A decrease in the general price level of goods and services", "A rise in the money supply", "A decrease in the money supply", "None of the above"],
        "options_hi": ["वस्त्रों और सेवाओं की सामान्य कीमतों में कमी", "मुद्रा आपूर्ति में वृद्धि", "मुद्रा आपूर्ति में कमी", "इनमें से कोई नहीं"],
        "answer": "A decrease in the general price level of goods and services",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "What is 'unemployment'?",
        "question_hi": "'बेरोज़गारी' क्या है?",
        "options_en": ["The state of being without a job but actively seeking work", "The total number of people employed", "The number of people working in a country", "None of the above"],
        "options_hi": ["रोज़गार के बिना होना लेकिन सक्रिय रूप से काम ढूंढ़ना", "रोज़गार प्राप्त लोगों की कुल संख्या", "एक देश में काम कर रहे लोगों की संख्या", "इनमें से कोई नहीं"],
        "answer": "The state of being without a job but actively seeking work",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "What does 'monetary policy' involve?",
        "question_hi": "'मौद्रिक नीति' में क्या शामिल है?",
        "options_en": ["Regulation of money supply and interest rates", "Setting tax rates", "Government spending decisions", "None of the above"],
        "options_hi": ["मुद्रा आपूर्ति और ब्याज दरों का नियमन", "कर दरों का निर्धारण", "सरकारी खर्च निर्णय", "इनमें से कोई नहीं"],
        "answer": "Regulation of money supply and interest rates",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "What does 'fiscal policy' involve?",
        "question_hi": "'राजकोषीय नीति' में क्या शामिल है?",
        "options_en": ["Government spending and taxation decisions", "Regulation of money supply", "Regulation of foreign exchange", "None of the above"],
        "options_hi": ["सरकारी खर्च और कर निर्धारण निर्णय", "मुद्रा आपूर्ति का नियमन", "विदेशी मुद्रा का नियमन", "इनमें से कोई नहीं"],
        "answer": "Government spending and taxation decisions",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "What is 'capitalism'?",
        "question_hi": "'पूंजीवाद' क्या है?",
        "options_en": ["An economic system where trade and industry are controlled by private owners", "An economic system where the government controls everything", "An economic system based on barter", "None of the above"],
        "options_hi": ["एक आर्थिक व्यवस्था जहाँ व्यापार और उद्योग निजी मालिकों द्वारा नियंत्रित होते हैं", "एक आर्थिक व्यवस्था जिसमें सरकार सब कुछ नियंत्रित करती है", "एक आर्थिक व्यवस्था जो आदान-प्रदान पर आधारित है", "इनमें से कोई नहीं"],
        "answer": "An economic system where trade and industry are controlled by private owners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "What is 'socialism'?",
        "question_hi": "'समाजवाद' क्या है?",
        "options_en": ["An economic system where the government controls the means of production", "An economic system based on private ownership", "An economic system with no government regulation", "None of the above"],
        "options_hi": ["एक आर्थिक व्यवस्था जिसमें सरकार उत्पादन के साधनों को नियंत्रित करती है", "एक आर्थिक व्यवस्था जो निजी स्वामित्व पर आधारित है", "एक आर्थिक व्यवस्था जिसमें कोई सरकारी नियमन नहीं होता", "इनमें से कोई नहीं"],
        "answer": "An economic system where the government controls the means of production",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "What is 'mixed economy'?",
        "question_hi": "'मिश्रित अर्थव्यवस्था' क्या है?",
        "options_en": ["An economic system combining private and public sector ownership", "An economic system based on private ownership", "An economic system controlled entirely by the government", "None of the above"],
        "options_hi": ["एक आर्थिक प्रणाली जिसमें निजी और सार्वजनिक क्षेत्र के स्वामित्व का मिश्रण होता है", "एक आर्थिक प्रणाली जो निजी स्वामित्व पर आधारित है", "एक आर्थिक प्रणाली जिसे पूरी तरह से सरकार नियंत्रित करती है", "इनमें से कोई नहीं"],
        "answer": "An economic system combining private and public sector ownership",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "What is 'capital formation'?",
        "question_hi": "'पूंजी निर्माण' क्या है?",
        "options_en": ["The process of increasing the stock of real capital", "The accumulation of money in a country", "The increase in the total population", "None of the above"],
        "options_hi": ["वास्तविक पूंजी के स्टॉक को बढ़ाने की प्रक्रिया", "एक देश में पैसे का संचय", "कुल जनसंख्या में वृद्धि", "इनमें से कोई नहीं"],
        "answer": "The process of increasing the stock of real capital",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "What is 'money supply'?",
        "question_hi": "'मुद्रा आपूर्ति' क्या है?",
        "options_en": ["The total amount of money in circulation within an economy", "The amount of money printed by the government", "The money held by banks only", "None of the above"],
        "options_hi": ["एक अर्थव्यवस्था में परिसंचरण में कुल राशि", "सरकार द्वारा मुद्रित पैसे की मात्रा", "केवल बैंकों के पास मौजूद पैसा", "इनमें से कोई नहीं"],
        "answer": "The total amount of money in circulation within an economy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "What is 'inflation rate'?",
        "question_hi": "'मुद्रास्फीति दर' क्या है?",
        "options_en": ["The rate at which the general price level of goods and services rises", "The rate at which GDP grows", "The rate at which unemployment decreases", "None of the above"],
        "options_hi": ["वह दर जिस पर वस्त्रों और सेवाओं की सामान्य कीमतें बढ़ती हैं", "वह दर जिस पर GDP बढ़ता है", "वह दर जिस पर बेरोज़गारी घटती है", "इनमें से कोई नहीं"],
        "answer": "The rate at which the general price level of goods and services rises",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "What is the 'balance of payments'?",
        "question_hi": "'भुगतान संतुलन' क्या है?",
        "options_en": ["A record of all economic transactions between the residents of a country and the rest of the world", "A balance between supply and demand", "The difference between exports and imports", "None of the above"],
        "options_hi": ["एक देश के निवासियों और बाकी दुनिया के बीच सभी आर्थिक लेन-देन का रिकॉर्ड", "आपूर्ति और मांग के बीच संतुलन", "निर्यात और आयात के बीच अंतर", "इनमें से कोई नहीं"],
        "answer": "A record of all economic transactions between the residents of a country and the rest of the world",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "What is 'trade deficit'?",
        "question_hi": "'वाणिज्यिक घाटा' क्या है?",
        "options_en": ["When a country imports more than it exports", "When a country exports more than it imports", "When a country has no trade relations", "None of the above"],
        "options_hi": ["जब एक देश अपने निर्यात से अधिक आयात करता है", "जब एक देश अपने आयात से अधिक निर्यात करता है", "जब एक देश के कोई व्यापारिक संबंध नहीं होते", "इनमें से कोई नहीं"],
        "answer": "When a country imports more than it exports",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "What is 'foreign exchange rate'?",
        "question_hi": "'विदेशी मुद्रा दर' क्या है?",
        "options_en": ["The price of one currency in terms of another currency", "The rate at which goods are exchanged internationally", "The rate of interest charged by banks", "None of the above"],
        "options_hi": ["एक मुद्रा की कीमत दूसरे मुद्रा के संदर्भ में", "अंतरराष्ट्रीय स्तर पर वस्त्रों का विनिमय दर", "बैंकों द्वारा चार्ज की जाने वाली ब्याज दर", "इनमें से कोई नहीं"],
        "answer": "The price of one currency in terms of another currency",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "What is the 'consumer price index' (CPI)?",
        "question_hi": "'उपभोक्ता मूल्य सूचकांक' (CPI) क्या है?",
        "options_en": ["A measure of the average change in prices paid by consumers for goods and services", "A measure of the total income of consumers", "A measure of government spending", "None of the above"],
        "options_hi": ["वस्त्रों और सेवाओं के लिए उपभोक्ताओं द्वारा भुगतान की गई कीमतों में औसत परिवर्तन का माप", "उपभोक्ताओं की कुल आय का माप", "सरकारी खर्च का माप", "इनमें से कोई नहीं"],
        "answer": "A measure of the average change in prices paid by consumers for goods and services",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is 'monetary policy'? ",
        "question_hi": "'मौद्रिक नीति' क्या है?",
        "options_en": ["The process by which the central bank controls the money supply and interest rates", "The policies related to taxation", "The policies related to government expenditure", "None of the above"],
        "options_hi": ["वह प्रक्रिया जिसके द्वारा केंद्रीय बैंक मुद्रा आपूर्ति और ब्याज दरों को नियंत्रित करता है", "कराधान से संबंधित नीतियाँ", "सरकारी खर्च से संबंधित नीतियाँ", "इनमें से कोई नहीं"],
        "answer": "The process by which the central bank controls the money supply and interest rates",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "What is 'monopoly'?",
        "question_hi": "'एकाधिकार' क्या है?",
        "options_en": ["When a single producer or seller controls the entire market", "When a market has many producers", "When government controls the market", "None of the above"],
        "options_hi": ["जब एकल उत्पादक या विक्रेता समग्र बाजार को नियंत्रित करता है", "जब बाजार में कई उत्पादक होते हैं", "जब सरकार बाजार को नियंत्रित करती है", "इनमें से कोई नहीं"],
        "answer": "When a single producer or seller controls the entire market",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "What is 'oligopoly'?",
        "question_hi": "'अलिगोपॉली' क्या है?",
        "options_en": ["A market dominated by a small number of firms", "A market with only one producer", "A market with many producers", "None of the above"],
        "options_hi": ["एक बाजार जो कुछ कंपनियों द्वारा नियंत्रित होता है", "एक बाजार जिसमें केवल एक उत्पादक होता है", "एक बाजार जिसमें कई उत्पादक होते हैं", "इनमें से कोई नहीं"],
        "answer": "A market dominated by a small number of firms",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What is 'perfect competition'?",
        "question_hi": "'पूर्ण प्रतिस्पर्धा' क्या है?",
        "options_en": ["A market structure where many firms sell identical products and no firm has market power", "A market with one producer", "A market where government sets prices", "None of the above"],
        "options_hi": ["एक बाजार संरचना जहाँ कई कंपनियाँ समान उत्पाद बेचती हैं और कोई भी कंपनी बाजार शक्ति नहीं रखती", "एक बाजार जिसमें केवल एक उत्पादक होता है", "एक बाजार जहाँ सरकार कीमतें निर्धारित करती है", "इनमें से कोई नहीं"],
        "answer": "A market structure where many firms sell identical products and no firm has market power",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What is 'monetary system'?",
        "question_hi": "'मौद्रिक प्रणाली' क्या है?",
        "options_en": ["A system of money supply and monetary institutions used in a country", "A system of government taxes", "A system of government expenditure", "None of the above"],
        "options_hi": ["एक देश में मुद्रा आपूर्ति और मौद्रिक संस्थानों की प्रणाली", "सरकारी करों की प्रणाली", "सरकारी खर्च की प्रणाली", "इनमें से कोई नहीं"],
        "answer": "A system of money supply and monetary institutions used in a country",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "What is 'aggregate demand'?",
        "question_hi": "'कुल मांग' क्या है?",
        "options_en": ["The total demand for goods and services in an economy", "The demand for a single product", "The supply of goods and services", "None of the above"],
        "options_hi": ["एक अर्थव्यवस्था में वस्त्रों और सेवाओं के लिए कुल मांग", "एक उत्पाद की मांग", "वस्त्रों और सेवाओं की आपूर्ति", "इनमें से कोई नहीं"],
        "answer": "The total demand for goods and services in an economy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What is 'aggregate supply'?",
        "question_hi": "'कुल आपूर्ति' क्या है?",
        "options_en": ["The total supply of goods and services in an economy", "The supply of one product", "The total demand for goods and services", "None of the above"],
        "options_hi": ["एक अर्थव्यवस्था में वस्त्रों और सेवाओं की कुल आपूर्ति", "एक उत्पाद की आपूर्ति", "वस्त्रों और सेवाओं के लिए कुल मांग", "इनमें से कोई नहीं"],
        "answer": "The total supply of goods and services in an economy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "What is 'economic growth'?",
        "question_hi": "'आर्थिक विकास' क्या है?",
        "options_en": ["An increase in the output of goods and services in an economy", "An increase in the supply of money", "An increase in government spending", "None of the above"],
        "options_hi": ["एक अर्थव्यवस्था में वस्त्रों और सेवाओं के उत्पादन में वृद्धि", "मुद्रा की आपूर्ति में वृद्धि", "सरकारी खर्च में वृद्धि", "इनमें से कोई नहीं"],
        "answer": "An increase in the output of goods and services in an economy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "What is 'GDP'?",
        "question_hi": "'GDP' क्या है?",
        "options_en": ["Gross Domestic Product", "Gross Domestic Price", "Gross Debt Payment", "None of the above"],
        "options_hi": ["सकल घरेलू उत्पाद", "सकल घरेलू मूल्य", "सकल ऋण भुगतान", "इनमें से कोई नहीं"],
        "answer": "Gross Domestic Product",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "What is 'inflation'?",
        "question_hi": "'मुद्रास्फीति' क्या है?",
        "options_en": ["A general increase in prices and fall in the purchasing value of money", "A decrease in the supply of money", "An increase in government spending", "None of the above"],
        "options_hi": ["कीमतों में सामान्य वृद्धि और पैसे की क्रय शक्ति में गिरावट", "मुद्रा की आपूर्ति में कमी", "सरकारी खर्च में वृद्धि", "इनमें से कोई नहीं"],
        "answer": "A general increase in prices and fall in the purchasing value of money",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "What is 'deflation'?",
        "question_hi": "'मूल्य कमी' क्या है?",
        "options_en": ["A general decrease in prices and rise in the purchasing value of money", "A rise in the supply of money", "A decrease in government spending", "None of the above"],
        "options_hi": ["कीमतों में सामान्य कमी और पैसे की क्रय शक्ति में वृद्धि", "मुद्रा की आपूर्ति में वृद्धि", "सरकारी खर्च में कमी", "इनमें से कोई नहीं"],
        "answer": "A general decrease in prices and rise in the purchasing value of money",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "What is 'unemployment'?",
        "question_hi": "'बेरोज़गारी' क्या है?",
        "options_en": ["The condition in which people who are able and willing to work cannot find a job", "The condition where there is too much work", "The condition where everyone is employed", "None of the above"],
        "options_hi": ["वह स्थिति जिसमें लोग जो काम करने में सक्षम और इच्छुक होते हैं, वे नौकरी नहीं पा सकते", "वह स्थिति जिसमें बहुत अधिक काम होता है", "वह स्थिति जिसमें सभी लोग काम पर होते हैं", "इनमें से कोई नहीं"],
        "answer": "The condition in which people who are able and willing to work cannot find a job",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "What is 'fiscal policy'?",
        "question_hi": "'राजकोषीय नीति' क्या है?",
        "options_en": ["The use of government spending and taxation to influence the economy", "The use of interest rates by the central bank", "The use of foreign trade policies", "None of the above"],
        "options_hi": ["सरकारी खर्च और कराधान का उपयोग करके अर्थव्यवस्था पर प्रभाव डालना", "केंद्रीय बैंक द्वारा ब्याज दरों का उपयोग", "विदेशी व्यापार नीतियों का उपयोग", "इनमें से कोई नहीं"],
        "answer": "The use of government spending and taxation to influence the economy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "What is 'monetary policy'?",
        "question_hi": "'मौद्रिक नीति' क्या है?",
        "options_en": ["The use of interest rates and money supply to influence the economy", "The use of government expenditure to control inflation", "The regulation of international trade", "None of the above"],
        "options_hi": ["ब्याज दरों और मुद्रा आपूर्ति का उपयोग करके अर्थव्यवस्था पर प्रभाव डालना", "मुद्रास्फीति को नियंत्रित करने के लिए सरकारी खर्च का उपयोग", "अंतरराष्ट्रीय व्यापार का नियमन", "इनमें से कोई नहीं"],
        "answer": "The use of interest rates and money supply to influence the economy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "What is 'interest rate'?",
        "question_hi": "'ब्याज दर' क्या है?",
        "options_en": ["The percentage at which interest is charged on loans or deposits", "The percentage of tax imposed on income", "The amount of money in circulation", "None of the above"],
        "options_hi": ["वह प्रतिशत जिस पर ऋण या जमा पर ब्याज लिया जाता है", "आय पर लगाए गए कर का प्रतिशत", "परिसंचरण में धन की राशि", "इनमें से कोई नहीं"],
        "answer": "The percentage at which interest is charged on loans or deposits",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "What is 'balance of trade'?",
        "question_hi": "'व्यापार संतुलन' क्या है?",
        "options_en": ["The difference between a country's exports and imports", "The total value of a country's exports", "The total value of a country's imports", "None of the above"],
        "options_hi": ["एक देश के निर्यात और आयात के बीच अंतर", "एक देश के निर्यात का कुल मूल्य", "एक देश के आयात का कुल मूल्य", "इनमें से कोई नहीं"],
        "answer": "The difference between a country's exports and imports",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "What is 'import substitution'?",
        "question_hi": "'आयात प्रतिस्थापन' क्या है?",
        "options_en": ["A policy to reduce reliance on imports by increasing domestic production", "A policy to increase imports", "A policy to decrease exports", "None of the above"],
        "options_hi": ["एक नीति जो घरेलू उत्पादन को बढ़ाकर आयात पर निर्भरता को कम करने के लिए है", "एक नीति जो आयात बढ़ाने के लिए है", "एक नीति जो निर्यात घटाने के लिए है", "इनमें से कोई नहीं"],
        "answer": "A policy to reduce reliance on imports by increasing domestic production",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "What is 'free trade'?",
        "question_hi": "'मुक्त व्यापार' क्या है?",
        "options_en": ["Trade without tariffs or restrictions", "Trade with heavy tariffs", "Trade with heavy government control", "None of the above"],
        "options_hi": ["वह व्यापार जिसमें कोई शुल्क या प्रतिबंध नहीं होते", "वह व्यापार जिसमें भारी शुल्क होते हैं", "वह व्यापार जिसमें भारी सरकारी नियंत्रण होता है", "इनमें से कोई नहीं"],
        "answer": "Trade without tariffs or restrictions",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What is 'economic development'?",
        "question_hi": "'आर्थिक विकास' क्या है?",
        "options_en": ["Improvement in the standard of living, health, education, and infrastructure", "The growth in the total income of a country", "The increase in the number of industries", "None of the above"],
        "options_hi": ["जीवन स्तर, स्वास्थ्य, शिक्षा और बुनियादी ढांचे में सुधार", "एक देश की कुल आय में वृद्धि", "उद्योगों की संख्या में वृद्धि", "इनमें से कोई नहीं"],
        "answer": "Improvement in the standard of living, health, education, and infrastructure",
        "attempted": false,
        "selected": ""
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
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
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
