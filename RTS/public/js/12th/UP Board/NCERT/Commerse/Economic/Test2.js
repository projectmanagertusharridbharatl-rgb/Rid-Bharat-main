const questions = [
    {
        "num": 1,
        "question_en": "What is the basic economic problem?",
        "question_hi": "मूलभूत आर्थिक समस्या क्या है?",
        "options_en": ["Scarcity of resources", "Unemployment", "Inflation", "Deflation"],
        "options_hi": ["संसाधनों की कमी", "बेरोज़गारी", "मुद्रास्फीति", "मूल्यह्रास"],
        "answer": "Scarcity of resources",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which of the following is a factor of production?",
        "question_hi": "निम्नलिखित में से कौन सा उत्पादन का कारक है?",
        "options_en": ["Labour", "Money", "Machines", "All of the above"],
        "options_hi": ["श्रम", "पैसा", "यंत्र", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Which of the following is a non-renewable resource?",
        "question_hi": "निम्नलिखित में से कौन सा एक गैर-नवीकरणीय संसाधन है?",
        "options_en": ["Water", "Coal", "Solar energy", "Wind energy"],
        "options_hi": ["पानी", "कोयला", "सौर ऊर्जा", "हवा की ऊर्जा"],
        "answer": "Coal",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "What is the GDP of a country?",
        "question_hi": "किसी देश का GDP क्या है?",
        "options_en": ["Gross Domestic Product", "Gross Depreciation Product", "General Domestic Product", "Gross Development Product"],
        "options_hi": ["सकल घरेलू उत्पाद", "सकल मूल्यह्रास उत्पाद", "सामान्य घरेलू उत्पाद", "सकल विकास उत्पाद"],
        "answer": "Gross Domestic Product",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Which of the following is an example of a public good?",
        "question_hi": "निम्नलिखित में से कौन सा सार्वजनिक वस्तु का उदाहरण है?",
        "options_en": ["Street lighting", "Private cars", "Food items", "Clothing"],
        "options_hi": ["सड़क की रोशनी", "निजी कारें", "खाद्य पदार्थ", "कपड़े"],
        "answer": "Street lighting",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which of the following is a feature of a perfect competition market?",
        "question_hi": "निम्नलिखित में से कौन सा एक पूर्ण प्रतिस्पर्धा बाजार का लक्षण है?",
        "options_en": ["Homogeneous products", "Barriers to entry", "Limited number of firms", "Price makers"],
        "options_hi": ["समरूप उत्पाद", "प्रवेश में बाधाएं", "सीमित संख्या में फर्म", "मूल्य निर्धारक"],
        "answer": "Homogeneous products",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "What is inflation?",
        "question_hi": "मुद्रास्फीति क्या है?",
        "options_en": ["Increase in the general price level", "Decrease in the general price level", "Increase in the supply of money", "Decrease in money circulation"],
        "options_hi": ["सामान्य मूल्य स्तर में वृद्धि", "सामान्य मूल्य स्तर में कमी", "पैसे की आपूर्ति में वृद्धि", "पैसे के प्रवाह में कमी"],
        "answer": "Increase in the general price level",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which of the following is the main objective of monetary policy?",
        "question_hi": "निम्नलिखित में से मौद्रिक नीति का मुख्य उद्देश्य क्या है?",
        "options_en": ["Control inflation", "Reduce taxes", "Increase public expenditure", "Reduce imports"],
        "options_hi": ["मुद्रास्फीति को नियंत्रित करना", "करों को घटाना", "सार्वजनिक व्यय बढ़ाना", "आयात कम करना"],
        "answer": "Control inflation",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Which of the following is not a type of unemployment?",
        "question_hi": "निम्नलिखित में से कौन सा बेरोज़गारी का प्रकार नहीं है?",
        "options_en": ["Seasonal unemployment", "Frictional unemployment", "Cyclical unemployment", "Profit unemployment"],
        "options_hi": ["मौसमी बेरोज़गारी", "घर्षणीय बेरोज़गारी", "सांविधिक बेरोज़गारी", "लाभ बेरोज़गारी"],
        "answer": "Profit unemployment",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "What is the law of demand?",
        "question_hi": "मांग का नियम क्या है?",
        "options_en": ["When price rises, demand falls", "When price falls, demand falls", "When price rises, demand rises", "None of the above"],
        "options_hi": ["जब कीमत बढ़ती है, मांग घटती है", "जब कीमत घटती है, मांग घटती है", "जब कीमत बढ़ती है, मांग बढ़ती है", "इनमें से कोई नहीं"],
        "answer": "When price rises, demand falls",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "What is the primary function of the Reserve Bank of India?",
        "question_hi": "भारतीय रिजर्व बैंक का प्राथमिक कार्य क्या है?",
        "options_en": ["Issue currency", "Set interest rates", "Control inflation", "All of the above"],
        "options_hi": ["मुद्रा जारी करना", "ब्याज दरें निर्धारित करना", "मुद्रास्फीति को नियंत्रित करना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which of the following is an example of government expenditure?",
        "question_hi": "निम्नलिखित में से कौन सा सरकार का व्यय का उदाहरण है?",
        "options_en": ["Building schools", "Paying pensions", "Building highways", "All of the above"],
        "options_hi": ["विद्यालय बनवाना", "पेंशन देना", "राजमार्ग बनवाना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "What does GDP measure?",
        "question_hi": "GDP क्या मापता है?",
        "options_en": ["Total value of goods and services", "Total money supply", "Government spending", "Exports"],
        "options_hi": ["सामान और सेवाओं का कुल मूल्य", "कुल मुद्रा आपूर्ति", "सरकारी खर्च", "निर्यात"],
        "answer": "Total value of goods and services",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which of the following is not a type of tax?",
        "question_hi": "निम्नलिखित में से कौन सा एक कर का प्रकार नहीं है?",
        "options_en": ["Direct tax", "Indirect tax", "Progressive tax", "Flat tax"],
        "options_hi": ["प्रत्यक्ष कर", "परोक्ष कर", "प्रगतिशील कर", "समतल कर"],
        "answer": "Flat tax",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which of the following is an example of an indirect tax?",
        "question_hi": "निम्नलिखित में से कौन सा एक परोक्ष कर का उदाहरण है?",
        "options_en": ["Income tax", "Excise duty", "Wealth tax", "Corporate tax"],
        "options_hi": ["आयकर", "उत्पाद शुल्क", "संपत्ति कर", "कॉर्पोरेट कर"],
        "answer": "Excise duty",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What is the term for a country's total revenue?",
        "question_hi": "किसी देश की कुल आय के लिए क्या शब्द है?",
        "options_en": ["Gross income", "Gross revenue", "National income", "Personal income"],
        "options_hi": ["सकल आय", "सकल राजस्व", "राष्ट्रीय आय", "व्यक्तिगत आय"],
        "answer": "National income",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What is the main function of fiscal policy?",
        "question_hi": "मौद्रिक नीति का मुख्य कार्य क्या है?",
        "options_en": ["Manage government spending and taxation", "Control inflation", "Regulate money supply", "Increase exports"],
        "options_hi": ["सरकारी खर्च और कराधान का प्रबंधन करना", "मुद्रास्फीति को नियंत्रित करना", "मुद्रा आपूर्ति का विनियमन", "निर्यात बढ़ाना"],
        "answer": "Manage government spending and taxation",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "What is the main feature of a monopoly?",
        "question_hi": "एकाधिकार का मुख्य लक्षण क्या है?",
        "options_en": ["Single seller", "No barriers to entry", "Many sellers", "Perfect competition"],
        "options_hi": ["एक विक्रेता", "प्रवेश में कोई बाधा नहीं", "कई विक्रेता", "पूर्ण प्रतिस्पर्धा"],
        "answer": "Single seller",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which of the following is an example of capital formation?",
        "question_hi": "निम्नलिखित में से कौन सा पूंजी निर्माण का उदाहरण है?",
        "options_en": ["Investing in machinery", "Education", "Healthcare", "All of the above"],
        "options_hi": ["यंत्रों में निवेश करना", "शिक्षा", "स्वास्थ्य देखभाल", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "What does the term 'subsidy' refer to?",
        "question_hi": "'सबसिडी' शब्द से क्या तात्पर्य है?",
        "options_en": ["Government financial assistance", "Private donation", "Interest rate", "Taxes"],
        "options_hi": ["सरकारी वित्तीय सहायता", "निजी दान", "ब्याज दर", "कर"],
        "answer": "Government financial assistance",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which of the following is not included in GDP?",
        "question_hi": "निम्नलिखित में से कौन GDP में शामिल नहीं है?",
        "options_en": ["Government expenditure", "Household consumption", "Imports", "Investment"],
        "options_hi": ["सरकारी खर्च", "घरेलू उपभोग", "आयात", "निवेश"],
        "answer": "Imports",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "What is the relationship between inflation and unemployment known as?",
        "question_hi": "मुद्रास्फीति और बेरोज़गारी के बीच के संबंध को क्या कहा जाता है?",
        "options_en": ["Phillips curve", "Supply curve", "Demand curve", "Equilibrium curve"],
        "options_hi": ["फिलिप्स वक्र", "आपूर्ति वक्र", "मांग वक्र", "संतुलन वक्र"],
        "answer": "Phillips curve",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "What is the principle of the law of diminishing returns?",
        "question_hi": "घटती हुई प्रतिफलता के नियम का सिद्धांत क्या है?",
        "options_en": ["Increase in input leads to a smaller increase in output", "Decrease in input leads to an increase in output", "Constant input leads to constant output", "None of the above"],
        "options_hi": ["आवश्यकता में वृद्धि के साथ उत्पादन में कम वृद्धि", "आवश्यकता में कमी से उत्पादन में वृद्धि", "स्थिर आवश्यकता से स्थिर उत्पादन", "इनमें से कोई नहीं"],
        "answer": "Increase in input leads to a smaller increase in output",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "What is meant by 'opportunity cost'?",
        "question_hi": "'अवसर लागत' से क्या तात्पर्य है?",
        "options_en": ["Cost of the next best alternative", "Total cost of production", "Cost of resources", "None of the above"],
        "options_hi": ["अगले सर्वोत्तम विकल्प की लागत", "उत्पादन की कुल लागत", "संसाधनों की लागत", "इनमें से कोई नहीं"],
        "answer": "Cost of the next best alternative",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which of the following is a characteristic of a monopolistic competition market?",
        "question_hi": "मोनोपोलिस्टिक प्रतिस्पर्धा बाजार का कौन सा लक्षण है?",
        "options_en": ["Many firms selling differentiated products", "Single firm selling homogeneous products", "No entry barriers", "All of the above"],
        "options_hi": ["कई फर्में भिन्न उत्पाद बेचती हैं", "एक फर्म समरूप उत्पाद बेचती है", "प्रवेश में कोई बाधा नहीं", "इनमें से सभी"],
        "answer": "Many firms selling differentiated products",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "What is the principle of the law of demand?",
        "question_hi": "मांग के नियम का सिद्धांत क्या है?",
        "options_en": ["As price rises, demand falls", "As price rises, demand rises", "As price falls, demand falls", "As price falls, demand rises"],
        "options_hi": ["जब कीमत बढ़ती है, मांग घटती है", "जब कीमत बढ़ती है, मांग बढ़ती है", "जब कीमत घटती है, मांग घटती है", "जब कीमत घटती है, मांग बढ़ती है"],
        "answer": "As price rises, demand falls",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Which of the following is a type of market structure?",
        "question_hi": "निम्नलिखित में से कौन सा एक बाजार संरचना का प्रकार है?",
        "options_en": ["Perfect competition", "Monopoly", "Monopolistic competition", "All of the above"],
        "options_hi": ["पूर्ण प्रतिस्पर्धा", "एकाधिकार", "मोनोपोलिस्टिक प्रतिस्पर्धा", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "What does the term 'elasticity of demand' refer to?",
        "question_hi": "'मांग की लोच' शब्द का क्या अर्थ है?",
        "options_en": ["Responsiveness of quantity demanded to price changes", "Change in income", "Effect of taxes on demand", "All of the above"],
        "options_hi": ["मांग की मात्रा में मूल्य परिवर्तन पर प्रतिक्रिया", "आय में परिवर्तन", "मांग पर करों का प्रभाव", "इनमें से सभी"],
        "answer": "Responsiveness of quantity demanded to price changes",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "What is the major cause of inflation?",
        "question_hi": "मुद्रास्फीति का प्रमुख कारण क्या है?",
        "options_en": ["Demand-pull inflation", "Cost-push inflation", "Monetary expansion", "All of the above"],
        "options_hi": ["मांग-खींच मुद्रास्फीति", "लागत-धक्का मुद्रास्फीति", "मुद्रा विस्तार", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which of the following is an example of a public sector undertaking?",
        "question_hi": "निम्नलिखित में से कौन सा एक सार्वजनिक क्षेत्र का उपक्रम है?",
        "options_en": ["BHEL", "Reliance Industries", "Tata Motors", "Infosys"],
        "options_hi": ["BHEL", "रिलायंस इंडस्ट्रीज", "टाटा मोटर्स", "इन्फोसिस"],
        "answer": "BHEL",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "What does 'tax incidence' refer to?",
        "question_hi": "'कर भार' शब्द से क्या तात्पर्य है?",
        "options_en": ["The distribution of tax burden between consumers and producers", "The total tax collected by the government", "The effect of tax on government revenue", "None of the above"],
        "options_hi": ["उपभोक्ताओं और उत्पादकों के बीच कर भार का वितरण", "सरकार द्वारा एकत्रित कुल कर", "सरकारी राजस्व पर कर का प्रभाव", "इनमें से कोई नहीं"],
        "answer": "The distribution of tax burden between consumers and producers",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is the definition of National Income?",
        "question_hi": "राष्ट्रीय आय की परिभाषा क्या है?",
        "options_en": ["Total value of goods and services produced in a country", "Total expenditure in an economy", "Total income earned by individuals", "None of the above"],
        "options_hi": ["किसी देश में उत्पादित सामान और सेवाओं का कुल मूल्य", "एक अर्थव्यवस्था में कुल खर्च", "व्यक्तियों द्वारा अर्जित कुल आय", "इनमें से कोई नहीं"],
        "answer": "Total value of goods and services produced in a country",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "What is the main function of the fiscal policy?",
        "question_hi": "राजकोषीय नीति का मुख्य कार्य क्या है?",
        "options_en": ["Managing government spending and taxation", "Controlling inflation", "Regulating the money supply", "None of the above"],
        "options_hi": ["सरकारी खर्च और कराधान का प्रबंधन करना", "मुद्रास्फीति को नियंत्रित करना", "मुद्रा आपूर्ति का नियमन", "इनमें से कोई नहीं"],
        "answer": "Managing government spending and taxation",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Which of the following is an example of an indirect tax?",
        "question_hi": "निम्नलिखित में से कौन सा परोक्ष कर का उदाहरण है?",
        "options_en": ["Income tax", "Excise duty", "Wealth tax", "Corporate tax"],
        "options_hi": ["आयकर", "उत्पाद शुल्क", "संपत्ति कर", "कॉर्पोरेट कर"],
        "answer": "Excise duty",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What does GDP stand for?",
        "question_hi": "GDP का अर्थ क्या है?",
        "options_en": ["Gross Domestic Product", "General Domestic Product", "Gross Development Product", "General Development Product"],
        "options_hi": ["सकल घरेलू उत्पाद", "सामान्य घरेलू उत्पाद", "सकल विकास उत्पाद", "सामान्य विकास उत्पाद"],
        "answer": "Gross Domestic Product",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What is the primary purpose of monetary policy?",
        "question_hi": "मौद्रिक नीति का प्राथमिक उद्देश्य क्या है?",
        "options_en": ["Controlling inflation", "Reducing government expenditure", "Increasing taxes", "None of the above"],
        "options_hi": ["मुद्रास्फीति को नियंत्रित करना", "सरकारी खर्च को घटाना", "करों को बढ़ाना", "इनमें से कोई नहीं"],
        "answer": "Controlling inflation",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "What is meant by 'government debt'?",
        "question_hi": "'सरकारी ऋण' से क्या तात्पर्य है?",
        "options_en": ["The total borrowing of the government", "The total revenue collected by the government", "The amount spent by the government", "None of the above"],
        "options_hi": ["सरकार द्वारा कुल उधारी", "सरकार द्वारा एकत्रित कुल राजस्व", "सरकार द्वारा खर्च की गई राशि", "इनमें से कोई नहीं"],
        "answer": "The total borrowing of the government",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What is a key characteristic of a mixed economy?",
        "question_hi": "मिश्रित अर्थव्यवस्था की मुख्य विशेषता क्या है?",
        "options_en": ["Combination of public and private ownership", "Only public ownership", "Only private ownership", "None of the above"],
        "options_hi": ["सार्वजनिक और निजी स्वामित्व का संयोजन", "केवल सार्वजनिक स्वामित्व", "केवल निजी स्वामित्व", "इनमें से कोई नहीं"],
        "answer": "Combination of public and private ownership",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "What is a progressive tax?",
        "question_hi": "प्रगतिशील कर क्या है?",
        "options_en": ["A tax where the rate increases as income increases", "A tax on goods and services", "A tax that remains constant", "None of the above"],
        "options_hi": ["एक कर जिसमें दर आय के बढ़ने के साथ बढ़ती है", "सामान और सेवाओं पर कर", "एक कर जो स्थिर रहता है", "इनमें से कोई नहीं"],
        "answer": "A tax where the rate increases as income increases",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which of the following is an example of fiscal deficit?",
        "question_hi": "निम्नलिखित में से कौन सा राजकोषीय घाटे का उदाहरण है?",
        "options_en": ["Total government expenditure exceeds revenue", "Government borrowing", "Government savings", "None of the above"],
        "options_hi": ["कुल सरकारी खर्च राजस्व से अधिक होता है", "सरकारी उधारी", "सरकारी बचत", "इनमें से कोई नहीं"],
        "answer": "Total government expenditure exceeds revenue",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "What is meant by 'inflation rate'?",
        "question_hi": "'मुद्रास्फीति दर' से क्या तात्पर्य है?",
        "options_en": ["The rate at which prices of goods and services increase", "The rate at which money supply increases", "The rate at which government spending increases", "None of the above"],
        "options_hi": ["वस्त्रों और सेवाओं की कीमतों में वृद्धि की दर", "मुद्रा आपूर्ति में वृद्धि की दर", "सरकारी खर्च में वृद्धि की दर", "इनमें से कोई नहीं"],
        "answer": "The rate at which prices of goods and services increase",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which of the following is an example of an export subsidy?",
        "question_hi": "निम्नलिखित में से कौन सा निर्यात सब्सिडी का उदाहरण है?",
        "options_en": ["Government providing financial assistance to export firms", "Tax reduction for local businesses", "Government regulation on exports", "None of the above"],
        "options_hi": ["सरकार द्वारा निर्यात फर्मों को वित्तीय सहायता प्रदान करना", "स्थानीय व्यवसायों के लिए कर में कमी", "निर्यात पर सरकारी विनियमन", "इनमें से कोई नहीं"],
        "answer": "Government providing financial assistance to export firms",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which of the following is the main objective of poverty alleviation programs?",
        "question_hi": "गरीबी उन्मूलन कार्यक्रमों का मुख्य उद्देश्य क्या है?",
        "options_en": ["To reduce income inequality", "To increase government revenue", "To improve the quality of life", "None of the above"],
        "options_hi": ["आय असमानता को घटाना", "सरकारी राजस्व बढ़ाना", "जीवन स्तर में सुधार करना", "इनमें से कोई नहीं"],
        "answer": "To reduce income inequality",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "What does 'economic growth' refer to?",
        "question_hi": "'आर्थिक विकास' से क्या तात्पर्य है?",
        "options_en": ["Increase in the production of goods and services", "Increase in government revenue", "Increase in population", "None of the above"],
        "options_hi": ["सामान और सेवाओं के उत्पादन में वृद्धि", "सरकारी राजस्व में वृद्धि", "जनसंख्या में वृद्धि", "इनमें से कोई नहीं"],
        "answer": "Increase in the production of goods and services",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "What is the primary focus of microeconomics?",
        "question_hi": "सूक्ष्म अर्थशास्त्र का मुख्य ध्यान किस पर होता है?",
        "options_en": ["Individual markets and consumer behavior", "National income and GDP", "Monetary policy", "None of the above"],
        "options_hi": ["व्यक्तिगत बाजारों और उपभोक्ता व्यवहार", "राष्ट्रीय आय और GDP", "मौद्रिक नीति", "इनमें से कोई नहीं"],
        "answer": "Individual markets and consumer behavior",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Which of the following is an example of a merit good?",
        "question_hi": "निम्नलिखित में से कौन सा एक मेरिट वस्तु का उदाहरण है?",
        "options_en": ["Healthcare", "Tobacco", "Alcohol", "None of the above"],
        "options_hi": ["स्वास्थ्य देखभाल", "तंबाकू", "शराब", "इनमें से कोई नहीं"],
        "answer": "Healthcare",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "What is meant by the term 'externality'?",
        "question_hi": "'बाहरी प्रभाव' शब्द से क्या तात्पर्य है?",
        "options_en": ["A side effect of an economic activity that affects others", "A government regulation", "A type of tax", "None of the above"],
        "options_hi": ["एक आर्थिक गतिविधि का एक पार्श्व प्रभाव जो दूसरों को प्रभावित करता है", "एक सरकारी विनियमन", "कर का एक प्रकार", "इनमें से कोई नहीं"],
        "answer": "A side effect of an economic activity that affects others",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which of the following is a characteristic of monopolistic competition?",
        "question_hi": "मोनोपोलिस्टिक प्रतिस्पर्धा की कौन सी विशेषता है?",
        "options_en": ["Many firms selling similar but differentiated products", "A single seller in the market", "Perfect information", "None of the above"],
        "options_hi": ["कई फर्में समान लेकिन भिन्न उत्पाद बेच रही हैं", "बाजार में एक विक्रेता", "पूर्ण जानकारी", "इनमें से कोई नहीं"],
        "answer": "Many firms selling similar but differentiated products",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "What is the meaning of 'income distribution'?",
        "question_hi": "'आय वितरण' का क्या अर्थ है?",
        "options_en": ["The way income is distributed among individuals in an economy", "The total income in an economy", "The tax rate in an economy", "None of the above"],
        "options_hi": ["आय का वह तरीका जिससे यह अर्थव्यवस्था में व्यक्तियों के बीच वितरित होती है", "एक अर्थव्यवस्था में कुल आय", "एक अर्थव्यवस्था में कर दर", "इनमें से कोई नहीं"],
        "answer": "The way income is distributed among individuals in an economy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Which of the following is a factor that affects the supply of a good?",
        "question_hi": "निम्नलिखित में से कौन सा एक अच्छा की आपूर्ति को प्रभावित करने वाला तत्व है?",
        "options_en": ["Technology", "Price of inputs", "Government policies", "All of the above"],
        "options_hi": ["प्रौद्योगिकी", "इनपुट की कीमत", "सरकारी नीतियाँ", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      }
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
