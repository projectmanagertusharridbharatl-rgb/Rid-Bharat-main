const questions = [
  {
    "num": 1,
    "question_en": "What is the basic economic problem?",
    "question_hi": "मूलभूत आर्थिक समस्या क्या है?",
    "options_en": ["Scarcity of resources", "Unemployment", "Inflation", "Deflation"],
    "options_hi": ["संसाधनों की कमी", "बेरोज़गारी", "मुद्रास्फीति", "मूल्यह्रास"],
    "answer_en": "Scarcity of resources",
    "answer_hi": "संसाधनों की कमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which of the following is not a central problem of an economy?",
    "question_hi": "निम्नलिखित में से कौन अर्थव्यवस्था की केंद्रीय समस्या नहीं है?",
    "options_en": ["What to produce?", "How to produce?", "For whom to produce?", "Where to produce?"],
    "options_hi": ["क्या उत्पादन करें?", "कैसे उत्पादन करें?", "किसके लिए उत्पादन करें?", "कहाँ उत्पादन करें?"],
    "answer_en": "Where to produce?",
    "answer_hi": "कहाँ उत्पादन करें?",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which problem is related to the technique of production?",
    "question_hi": "कौन सी समस्या उत्पादन की तकनीक से संबंधित है?",
    "options_en": ["What to produce", "How to produce", "For whom to produce", "Why to produce"],
    "options_hi": ["क्या उत्पादन करें", "कैसे उत्पादन करें", "किसके लिए उत्पादन करें", "क्यों उत्पादन करें"],
    "answer_en": "How to produce",
    "answer_hi": "कैसे उत्पादन करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The problem of 'for whom to produce' is a problem of:",
    "question_hi": "'किसके लिए उत्पादन करें' की समस्या किस प्रकार की समस्या है?",
    "options_en": ["Distribution", "Production", "Consumption", "Exchange"],
    "options_hi": ["वितरण", "उत्पादन", "उपभोग", "विनिमय"],
    "answer_en": "Distribution",
    "answer_hi": "वितरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "The basic problems of an economy arise due to:",
    "question_hi": "एक अर्थव्यवस्था की मूलभूत समस्याएं किस कारण उत्पन्न होती हैं?",
    "options_en": ["Unlimited wants and limited resources", "Inflation", "High population", "Unemployment"],
    "options_hi": ["असीमित इच्छाएँ और सीमित संसाधन", "मुद्रास्फीति", "अधिक जनसंख्या", "बेरोज़गारी"],
    "answer_en": "Unlimited wants and limited resources",
    "answer_hi": "असीमित इच्छाएँ और सीमित संसाधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which economic system solves the central problems through government planning?",
    "question_hi": "कौन सी आर्थिक प्रणाली सरकारी योजना द्वारा केंद्रीय समस्याओं का समाधान करती है?",
    "options_en": ["Capitalism", "Socialism", "Mixed economy", "Traditional economy"],
    "options_hi": ["पूंजीवाद", "समाजवाद", "मिश्रित अर्थव्यवस्था", "परंपरागत अर्थव्यवस्था"],
    "answer_en": "Socialism",
    "answer_hi": "समाजवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "In which economic system does the market play a major role in decision making?",
    "question_hi": "कौन सी आर्थिक प्रणाली में निर्णय लेने में बाज़ार की प्रमुख भूमिका होती है?",
    "options_en": ["Capitalist economy", "Socialist economy", "Mixed economy", "Command economy"],
    "options_hi": ["पूंजीवादी अर्थव्यवस्था", "समाजवादी अर्थव्यवस्था", "मिश्रित अर्थव्यवस्था", "आदेश आधारित अर्थव्यवस्था"],
    "answer_en": "Capitalist economy",
    "answer_hi": "पूंजीवादी अर्थव्यवस्था",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Who takes all the decisions in a centrally planned economy?",
    "question_hi": "एक केंद्रीकृत योजना आधारित अर्थव्यवस्था में सभी निर्णय कौन लेता है?",
    "options_en": ["Private firms", "Consumers", "Government", "Entrepreneurs"],
    "options_hi": ["निजी कंपनियाँ", "उपभोक्ता", "सरकार", "उद्यमी"],
    "answer_en": "Government",
    "answer_hi": "सरकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the main objective of a socialist economy?",
    "question_hi": "समाजवादी अर्थव्यवस्था का मुख्य उद्देश्य क्या है?",
    "options_en": ["Profit maximization", "Social welfare", "Consumer satisfaction", "Wealth accumulation"],
    "options_hi": ["लाभ अधिकतमकरण", "सामाजिक कल्याण", "उपभोक्ता संतुष्टि", "संपत्ति संचय"],
    "answer_en": "Social welfare",
    "answer_hi": "सामाजिक कल्याण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "In which economy does the public and private sector co-exist?",
    "question_hi": "किस अर्थव्यवस्था में सार्वजनिक और निजी क्षेत्र दोनों सह-अस्तित्व में होते हैं?",
    "options_en": ["Capitalist", "Socialist", "Mixed", "Traditional"],
    "options_hi": ["पूंजीवादी", "समाजवादी", "मिश्रित", "परंपरागत"],
    "answer_en": "Mixed",
    "answer_hi": "मिश्रित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is a feature of capitalism?",
    "question_hi": "निम्नलिखित में से कौन पूंजीवाद की विशेषता है?",
    "options_en": ["Profit motive", "Government planning", "No competition", "Public ownership"],
    "options_hi": ["लाभ प्रेरणा", "सरकारी योजना", "कोई प्रतिस्पर्धा नहीं", "सार्वजनिक स्वामित्व"],
    "answer_en": "Profit motive",
    "answer_hi": "लाभ प्रेरणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The central problem of 'What to produce' arises due to:",
    "question_hi": "'क्या उत्पादन करें' की केंद्रीय समस्या किस कारण उत्पन्न होती है?",
    "options_en": ["Scarcity of resources", "Large population", "Inflation", "Technology"],
    "options_hi": ["संसाधनों की कमी", "बड़ी जनसंख्या", "मुद्रास्फीति", "प्रौद्योगिकी"],
    "answer_en": "Scarcity of resources",
    "answer_hi": "संसाधनों की कमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The aim of a producer in a capitalist economy is:",
    "question_hi": "पूंजीवादी अर्थव्यवस्था में उत्पादक का उद्देश्य क्या होता है?",
    "options_en": ["Welfare", "Profit", "Social service", "Charity"],
    "options_hi": ["कल्याण", "लाभ", "सामाजिक सेवा", "दान"],
    "answer_en": "Profit",
    "answer_hi": "लाभ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Who determines the allocation of resources in a market economy?",
    "question_hi": "बाज़ार अर्थव्यवस्था में संसाधनों का आवंटन कौन तय करता है?",
    "options_en": ["Government", "Market forces", "NGOs", "Banks"],
    "options_hi": ["सरकार", "बाज़ार शक्तियाँ", "गैर-सरकारी संगठन", "बैंक"],
    "answer_en": "Market forces",
    "answer_hi": "बाज़ार शक्तियाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which of the following is not a feature of mixed economy?",
    "question_hi": "निम्नलिखित में से कौन मिश्रित अर्थव्यवस्था की विशेषता नहीं है?",
    "options_en": ["Co-existence of public and private sector", "Profit motive only", "Economic planning", "Consumer sovereignty"],
    "options_hi": ["सार्वजनिक और निजी क्षेत्र का सह-अस्तित्व", "केवल लाभ प्रेरणा", "आर्थिक योजना", "उपभोक्ता संप्रभुता"],
    "answer_en": "Profit motive only",
    "answer_hi": "केवल लाभ प्रेरणा",
    "attempted": false,
    "selected": ""
  },
      {
    "num": 16,
    "question_en": "Which type of economy is India following?",
    "question_hi": "भारत किस प्रकार की अर्थव्यवस्था का अनुसरण कर रहा है?",
    "options_en": ["Capitalist", "Socialist", "Mixed", "Traditional"],
    "options_hi": ["पूंजीवादी", "समाजवादी", "मिश्रित", "परंपरागत"],
    "answer_en": "Mixed",
    "answer_hi": "मिश्रित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What guides resource allocation in a socialist economy?",
    "question_hi": "समाजवादी अर्थव्यवस्था में संसाधनों का आवंटन किसके द्वारा निर्देशित होता है?",
    "options_en": ["Market demand", "Profit motive", "Government planning", "Consumer preferences"],
    "options_hi": ["बाज़ार मांग", "लाभ प्रेरणा", "सरकारी योजना", "उपभोक्ता प्राथमिकताएँ"],
    "answer_en": "Government planning",
    "answer_hi": "सरकारी योजना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which economy has complete government control over resources?",
    "question_hi": "किस अर्थव्यवस्था में संसाधनों पर पूर्ण सरकारी नियंत्रण होता है?",
    "options_en": ["Mixed", "Capitalist", "Socialist", "Traditional"],
    "options_hi": ["मिश्रित", "पूंजीवादी", "समाजवादी", "परंपरागत"],
    "answer_en": "Socialist",
    "answer_hi": "समाजवादी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which of the following is a demerit of a capitalist economy?",
    "question_hi": "निम्नलिखित में से कौन पूंजीवादी अर्थव्यवस्था की एक हानि है?",
    "options_en": ["Efficient allocation", "Consumer sovereignty", "Income inequality", "Innovation"],
    "options_hi": ["कुशल आवंटन", "उपभोक्ता संप्रभुता", "आय असमानता", "नवाचार"],
    "answer_en": "Income inequality",
    "answer_hi": "आय असमानता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What determines ‘how to produce’ in a market economy?",
    "question_hi": "बाज़ार अर्थव्यवस्था में 'कैसे उत्पादन करें' किससे निर्धारित होता है?",
    "options_en": ["Availability of labour", "Production technique cost", "Consumer demand", "Government orders"],
    "options_hi": ["श्रम की उपलब्धता", "उत्पादन तकनीक की लागत", "उपभोक्ता की मांग", "सरकारी आदेश"],
    "answer_en": "Production technique cost",
    "answer_hi": "उत्पादन तकनीक की लागत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "In which economy is the consumer called the ‘king’?",
    "question_hi": "किस अर्थव्यवस्था में उपभोक्ता को 'राजा' कहा जाता है?",
    "options_en": ["Capitalist", "Mixed", "Socialist", "Command"],
    "options_hi": ["पूंजीवादी", "मिश्रित", "समाजवादी", "आदेश आधारित"],
    "answer_en": "Capitalist",
    "answer_hi": "पूंजीवादी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which of the following is a feature of mixed economy?",
    "question_hi": "निम्नलिखित में से कौन मिश्रित अर्थव्यवस्था की विशेषता है?",
    "options_en": ["Only private ownership", "Only government planning", "Co-existence of private and public sector", "No competition"],
    "options_hi": ["केवल निजी स्वामित्व", "केवल सरकारी योजना", "निजी और सार्वजनिक क्षेत्र का सह-अस्तित्व", "कोई प्रतिस्पर्धा नहीं"],
    "answer_en": "Co-existence of private and public sector",
    "answer_hi": "निजी और सार्वजनिक क्षेत्र का सह-अस्तित्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of the following helps in solving ‘what to produce’ problem?",
    "question_hi": "निम्नलिखित में से कौन 'क्या उत्पादन करें' की समस्या को हल करने में मदद करता है?",
    "options_en": ["Consumer preference", "Government policy", "Profit motive", "Availability of land"],
    "options_hi": ["उपभोक्ता प्राथमिकता", "सरकारी नीति", "लाभ प्रेरणा", "भूमि की उपलब्धता"],
    "answer_en": "Consumer preference",
    "answer_hi": "उपभोक्ता प्राथमिकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which economy uses both market and planning mechanism?",
    "question_hi": "कौन सी अर्थव्यवस्था बाज़ार और योजना दोनों तंत्र का उपयोग करती है?",
    "options_en": ["Mixed economy", "Command economy", "Capitalist economy", "Traditional economy"],
    "options_hi": ["मिश्रित अर्थव्यवस्था", "आदेश आधारित अर्थव्यवस्था", "पूंजीवादी अर्थव्यवस्था", "परंपरागत अर्थव्यवस्था"],
    "answer_en": "Mixed economy",
    "answer_hi": "मिश्रित अर्थव्यवस्था",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Central problems are common to:",
    "question_hi": "केंद्रीय समस्याएं किसके लिए सामान्य होती हैं?",
    "options_en": ["Only rich countries", "Only poor countries", "Only developing countries", "All economies"],
    "options_hi": ["केवल अमीर देशों के लिए", "केवल गरीब देशों के लिए", "केवल विकासशील देशों के लिए", "सभी अर्थव्यवस्थाओं के लिए"],
    "answer_en": "All economies",
    "answer_hi": "सभी अर्थव्यवस्थाओं के लिए",
    "attempted": false,
    "selected": ""
  },
      {
    "num": 26,
    "question_en": "Which of the following best defines opportunity cost?",
    "question_hi": "निम्नलिखित में से कौन अवसर लागत को सबसे अच्छे तरीके से परिभाषित करता है?",
    "options_en": ["Cost of all options", "Cost of best alternative forgone", "Fixed cost", "Sunk cost"],
    "options_hi": ["सभी विकल्पों की लागत", "सबसे अच्छे त्यागे गए विकल्प की लागत", "निर्धारित लागत", "अवसादित लागत"],
    "answer_en": "Cost of best alternative forgone",
    "answer_hi": "सबसे अच्छे त्यागे गए विकल्प की लागत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which economy solves central problems through price mechanism?",
    "question_hi": "कौन सी अर्थव्यवस्था मूल्य तंत्र के माध्यम से केंद्रीय समस्याओं को हल करती है?",
    "options_en": ["Command economy", "Capitalist economy", "Mixed economy", "Traditional economy"],
    "options_hi": ["आदेश आधारित अर्थव्यवस्था", "पूंजीवादी अर्थव्यवस्था", "मिश्रित अर्थव्यवस्था", "परंपरागत अर्थव्यवस्था"],
    "answer_en": "Capitalist economy",
    "answer_hi": "पूंजीवादी अर्थव्यवस्था",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which of the following is not a central problem of the economy?",
    "question_hi": "निम्नलिखित में से कौन अर्थव्यवस्था की केंद्रीय समस्या नहीं है?",
    "options_en": ["What to produce", "How to produce", "Where to produce", "For whom to produce"],
    "options_hi": ["क्या उत्पादन करें", "कैसे उत्पादन करें", "कहाँ उत्पादन करें", "किसके लिए उत्पादन करें"],
    "answer_en": "Where to produce",
    "answer_hi": "कहाँ उत्पादन करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The problem of 'how to produce' is related to:",
    "question_hi": "'कैसे उत्पादन करें' की समस्या किससे संबंधित है?",
    "options_en": ["Type of goods", "Level of income", "Method of production", "Distribution of goods"],
    "options_hi": ["वस्तुओं के प्रकार", "आय का स्तर", "उत्पादन की विधि", "वस्तुओं का वितरण"],
    "answer_en": "Method of production",
    "answer_hi": "उत्पादन की विधि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Resources are scarce because:",
    "question_hi": "संसाधन दुर्लभ होते हैं क्योंकि:",
    "options_en": ["They are unlimited", "They are not useful", "They have multiple uses", "They are free"],
    "options_hi": ["वे असीमित हैं", "वे उपयोगी नहीं हैं", "उनके अनेक उपयोग हैं", "वे मुफ्त हैं"],
    "answer_en": "They have multiple uses",
    "answer_hi": "उनके अनेक उपयोग हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which system uses planning authority to solve central problems?",
    "question_hi": "कौन-सा तंत्र केंद्रीय समस्याओं को हल करने के लिए योजना प्राधिकरण का उपयोग करता है?",
    "options_en": ["Capitalist", "Socialist", "Traditional", "Market"],
    "options_hi": ["पूंजीवादी", "समाजवादी", "परंपरागत", "बाज़ार"],
    "answer_en": "Socialist",
    "answer_hi": "समाजवादी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "For whom to produce problem is related to:",
    "question_hi": "'किसके लिए उत्पादन करें' की समस्या किससे संबंधित है?",
    "options_en": ["Distribution of income", "Production technology", "Resource availability", "National income"],
    "options_hi": ["आय का वितरण", "उत्पादन तकनीक", "संसाधनों की उपलब्धता", "राष्ट्रीय आय"],
    "answer_en": "Distribution of income",
    "answer_hi": "आय का वितरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which of the following is not a characteristic of scarcity?",
    "question_hi": "निम्नलिखित में से कौन दुर्लभता की विशेषता नहीं है?",
    "options_en": ["Limited in supply", "Unlimited wants", "Free availability", "Alternative uses"],
    "options_hi": ["आपूर्ति में सीमित", "असीम इच्छाएँ", "मुफ्त उपलब्धता", "वैकल्पिक उपयोग"],
    "answer_en": "Free availability",
    "answer_hi": "मुफ्त उपलब्धता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which is an example of capital good?",
    "question_hi": "पूंजीगत वस्तु का उदाहरण कौन सा है?",
    "options_en": ["Bread", "Laptop used by student", "Machine", "Cycle for child"],
    "options_hi": ["ब्रेड", "छात्र द्वारा उपयोग किया गया लैपटॉप", "मशीन", "बच्चे की साइकिल"],
    "answer_en": "Machine",
    "answer_hi": "मशीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is a free good?",
    "question_hi": "मुफ्त वस्तु क्या होती है?",
    "options_en": ["Scarce and priced", "Limited in supply", "Available in abundance without cost", "High opportunity cost"],
    "options_hi": ["दुर्लभ और मूल्ययुक्त", "आपूर्ति में सीमित", "बिना मूल्य के प्रचुर उपलब्ध", "अधिक अवसर लागत"],
    "answer_en": "Available in abundance without cost",
    "answer_hi": "बिना मूल्य के प्रचुर उपलब्ध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The central problem arises due to:",
    "question_hi": "केंद्रीय समस्या उत्पन्न होती है:",
    "options_en": ["Excess of resources", "Full employment", "Scarcity of resources", "Equal distribution"],
    "options_hi": ["संसाधनों की अधिकता", "पूर्ण रोजगार", "संसाधनों की कमी", "समान वितरण"],
    "answer_en": "Scarcity of resources",
    "answer_hi": "संसाधनों की कमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Land, labour, capital and enterprise are known as:",
    "question_hi": "भूमि, श्रम, पूंजी और उद्यमिता को क्या कहा जाता है?",
    "options_en": ["Outputs", "Wants", "Factors of production", "Commodities"],
    "options_hi": ["उत्पादन", "इच्छाएँ", "उत्पादन के साधन", "वस्तुएँ"],
    "answer_en": "Factors of production",
    "answer_hi": "उत्पादन के साधन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "In which economy are decisions taken by both government and individuals?",
    "question_hi": "किस अर्थव्यवस्था में निर्णय सरकार और व्यक्ति दोनों द्वारा लिए जाते हैं?",
    "options_en": ["Capitalist", "Mixed", "Socialist", "Traditional"],
    "options_hi": ["पूंजीवादी", "मिश्रित", "समाजवादी", "परंपरागत"],
    "answer_en": "Mixed",
    "answer_hi": "मिश्रित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which one of the following goods has zero opportunity cost?",
    "question_hi": "निम्नलिखित में से किस वस्तु की अवसर लागत शून्य होती है?",
    "options_en": ["Air", "Land", "Labour", "Capital"],
    "options_hi": ["वायु", "भूमि", "श्रम", "पूंजी"],
    "answer_en": "Air",
    "answer_hi": "वायु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "In economics, choice arises due to:",
    "question_hi": "अर्थशास्त्र में चयन उत्पन्न होता है:",
    "options_en": ["Abundance of goods", "Government policy", "Scarcity of resources", "Fixed income"],
    "options_hi": ["वस्तुओं की प्रचुरता", "सरकारी नीति", "संसाधनों की कमी", "निर्धारित आय"],
    "answer_en": "Scarcity of resources",
    "answer_hi": "संसाधनों की कमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which economy faces the central problem of 'choice'?",
    "question_hi": "कौन सी अर्थव्यवस्था 'चयन' की केंद्रीय समस्या का सामना करती है?",
    "options_en": ["Only underdeveloped", "Only developed", "All economies", "Traditional only"],
    "options_hi": ["केवल अविकसित", "केवल विकसित", "सभी अर्थव्यवस्थाएँ", "केवल पारंपरिक"],
    "answer_en": "All economies",
    "answer_hi": "सभी अर्थव्यवस्थाएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "In a free market economy, central problems are solved through:",
    "question_hi": "मुक्त बाजार अर्थव्यवस्था में केंद्रीय समस्याएं किसके माध्यम से हल होती हैं?",
    "options_en": ["Planning", "Central authority", "Price mechanism", "Random choice"],
    "options_hi": ["योजना", "केंद्रीय प्राधिकरण", "मूल्य तंत्र", "यादृच्छिक चयन"],
    "answer_en": "Price mechanism",
    "answer_hi": "मूल्य तंत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which is a fundamental feature of economic resources?",
    "question_hi": "आर्थिक संसाधनों की एक मौलिक विशेषता क्या है?",
    "options_en": ["Unlimited", "Free", "Scarce", "Always abundant"],
    "options_hi": ["असीमित", "मुफ्त", "दुर्लभ", "हमेशा प्रचुर"],
    "answer_en": "Scarce",
    "answer_hi": "दुर्लभ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does the problem of 'what to produce' relate to?",
    "question_hi": "'क्या उत्पादन करें' की समस्या किससे संबंधित है?",
    "options_en": ["Resource allocation", "Distribution", "Consumption", "Storage"],
    "options_hi": ["संसाधन आवंटन", "वितरण", "उपभोग", "भंडारण"],
    "answer_en": "Resource allocation",
    "answer_hi": "संसाधन आवंटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which problem deals with technique of production?",
    "question_hi": "कौन सी समस्या उत्पादन की तकनीक से संबंधित है?",
    "options_en": ["What to produce", "How to produce", "For whom to produce", "Where to produce"],
    "options_hi": ["क्या उत्पादन करें", "कैसे उत्पादन करें", "किसके लिए उत्पादन करें", "कहाँ उत्पादन करें"],
    "answer_en": "How to produce",
    "answer_hi": "कैसे उत्पादन करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which economy has profit as main motive?",
    "question_hi": "किस अर्थव्यवस्था में लाभ मुख्य उद्देश्य होता है?",
    "options_en": ["Socialist", "Mixed", "Capitalist", "Command"],
    "options_hi": ["समाजवादी", "मिश्रित", "पूंजीवादी", "आदेश आधारित"],
    "answer_en": "Capitalist",
    "answer_hi": "पूंजीवादी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which economy ensures social welfare as the goal?",
    "question_hi": "किस अर्थव्यवस्था में सामाजिक कल्याण को लक्ष्य माना जाता है?",
    "options_en": ["Capitalist", "Mixed", "Socialist", "Traditional"],
    "options_hi": ["पूंजीवादी", "मिश्रित", "समाजवादी", "परंपरागत"],
    "answer_en": "Socialist",
    "answer_hi": "समाजवादी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Who takes economic decisions in a capitalist economy?",
    "question_hi": "पूंजीवादी अर्थव्यवस्था में आर्थिक निर्णय कौन लेता है?",
    "options_en": ["Government", "Consumers and producers", "Planning Commission", "NGOs"],
    "options_hi": ["सरकार", "उपभोक्ता और उत्पादक", "योजना आयोग", "गैर-सरकारी संगठन"],
    "answer_en": "Consumers and producers",
    "answer_hi": "उपभोक्ता और उत्पादक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which one is a central problem in all economies?",
    "question_hi": "सभी अर्थव्यवस्थाओं में एक केंद्रीय समस्या कौन सी है?",
    "options_en": ["Unemployment", "Inflation", "Scarcity", "Taxation"],
    "options_hi": ["बेरोज़गारी", "मुद्रास्फीति", "दुर्लभता", "कराधान"],
    "answer_en": "Scarcity",
    "answer_hi": "दुर्लभता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does economic problem arise from?",
    "question_hi": "आर्थिक समस्या किससे उत्पन्न होती है?",
    "options_en": ["Limited wants", "Limited means", "Unlimited resources", "Equal income"],
    "options_hi": ["सीमित इच्छाएँ", "सीमित साधन", "असीमित संसाधन", "समान आय"],
    "answer_en": "Limited means",
    "answer_hi": "सीमित साधन",
    "attempted": false,
    "selected": ""
  }
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