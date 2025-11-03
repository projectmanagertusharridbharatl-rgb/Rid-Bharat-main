const questions = [
    {
        "num": 1,
        "question_en": "What is biodiversity?",
        "question_hi": "जैव विविधता क्या है?",
        "options_en": ["Variety of species", "Variety of ecosystems", "Variety of genes", "All of the above"],
        "options_hi": ["प्रजातियों की विविधता", "पारिस्थितिकी तंत्र की विविधता", "जीनों की विविधता", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "What is the importance of biodiversity?",
        "question_hi": "जैव विविधता का क्या महत्व है?",
        "options_en": ["Maintains ecological balance", "Supports food chain", "Helps in maintaining soil fertility", "All of the above"],
        "options_hi": ["पारिस्थितिकी संतुलन बनाए रखता है", "खाद्य श्रृंखला का समर्थन करता है", "मृदा की उर्वरता बनाए रखने में मदद करता है", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "What is meant by in situ conservation?",
        "question_hi": "साइटू संरक्षण का क्या अर्थ है?",
        "options_en": ["Conservation in natural habitats", "Conservation in protected areas", "Conservation in zoos", "None of the above"],
        "options_hi": ["प्राकृतिक आवासों में संरक्षण", "संरक्षित क्षेत्रों में संरक्षण", "चिड़ियाघरों में संरक्षण", "इनमें से कोई नहीं"],
        "answer": "Conservation in natural habitats",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which of the following is an example of ex situ conservation?",
        "question_hi": "निम्नलिखित में से कौन सा एक्स सिटू संरक्षण का उदाहरण है?",
        "options_en": ["Biosphere reserves", "Wildlife sanctuaries", "Zoos", "Sacred groves"],
        "options_hi": ["जैवमंडल आरक्षित क्षेत्र", "वन्यजीव अभयारण्यों", "चिड़ियाघर", "पवित्र वन"],
        "answer": "Zoos",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "What is the major cause of biodiversity loss?",
        "question_hi": "जैव विविधता की हानि का प्रमुख कारण क्या है?",
        "options_en": ["Habitat destruction", "Climate change", "Overexploitation", "All of the above"],
        "options_hi": ["आवास का विनाश", "जलवायु परिवर्तन", "अत्यधिक शोषण", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "What is the main objective of biodiversity conservation?",
        "question_hi": "जैव विविधता संरक्षण का मुख्य उद्देश्य क्या है?",
        "options_en": ["Preservation of species", "Maintenance of ecosystem functions", "Sustainable use of resources", "All of the above"],
        "options_hi": ["प्रजातियों का संरक्षण", "पारिस्थितिकी तंत्र के कार्यों का रखरखाव", "संसाधनों का सतत उपयोग", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "What is the term 'hotspot' in relation to biodiversity?",
        "question_hi": "जैव विविधता के संदर्भ में 'हॉटस्पॉट' शब्द क्या है?",
        "options_en": ["Area with high species richness", "Area with high human population", "Area with low biodiversity", "Area with high deforestation"],
        "options_hi": ["प्रजाति समृद्धि वाला क्षेत्र", "उच्च मानव जनसंख्या वाला क्षेत्र", "कम जैव विविधता वाला क्षेत्र", "अत्यधिक वनों की कटाई वाला क्षेत्र"],
        "answer": "Area with high species richness",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "What is the Red Data Book?",
        "question_hi": "रेड डेटा बुक क्या है?",
        "options_en": ["A book for endangered species", "A book for rare species", "A book for extinct species", "None of the above"],
        "options_hi": ["एक पुस्तक संकटग्रस्त प्रजातियों के लिए", "एक पुस्तक दुर्लभ प्रजातियों के लिए", "एक पुस्तक विलुप्त प्रजातियों के लिए", "इनमें से कोई नहीं"],
        "answer": "A book for endangered species",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Which of the following is a biodiversity hotspot in India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत में जैव विविधता हॉटस्पॉट है?",
        "options_en": ["Sundarbans", "Western Ghats", "Thar Desert", "None of the above"],
        "options_hi": ["सुंदरबन", "पश्चिमी घाट", "थार मरुस्थल", "इनमें से कोई नहीं"],
        "answer": "Western Ghats",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "What does the term 'endangered species' refer to?",
        "question_hi": "'संकटग्रस्त प्रजाति' शब्द का क्या अर्थ है?",
        "options_en": ["Species with a very small population", "Species in danger of extinction", "Species with low reproduction rates", "All of the above"],
        "options_hi": ["प्रजातियाँ जिनकी जनसंख्या बहुत छोटी है", "प्रजातियाँ जो विलुप्त होने के खतरे में हैं", "प्रजातियाँ जिनकी प्रजनन दर कम है", "इनमें से सभी"],
        "answer": "Species in danger of extinction",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which of the following is a major cause of habitat destruction?",
        "question_hi": "निम्नलिखित में से कौन सा आवास के विनाश का प्रमुख कारण है?",
        "options_en": ["Deforestation", "Pollution", "Urbanization", "All of the above"],
        "options_hi": ["वनों की कटाई", "प्रदूषण", "शहरीकरण", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "What is the term used for the process of replacing natural habitats with human-made environments?",
        "question_hi": "प्राकृतिक आवासों को मानव निर्मित पर्यावरणों से बदलने की प्रक्रिया के लिए कौन सा शब्द प्रयोग किया जाता है?",
        "options_en": ["Urbanization", "Deforestation", "Pollution", "All of the above"],
        "options_hi": ["शहरीकरण", "वनों की कटाई", "प्रदूषण", "इनमें से सभी"],
        "answer": "Urbanization",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "What is the main goal of the National Biodiversity Action Plan?",
        "question_hi": "राष्ट्रीय जैव विविधता क्रियावली योजना का मुख्य उद्देश्य क्या है?",
        "options_en": ["Conservation of biodiversity", "Promotion of sustainable development", "Prevention of invasive species", "All of the above"],
        "options_hi": ["जैव विविधता का संरक्षण", "सतत विकास को बढ़ावा देना", "आक्रामक प्रजातियों की रोकथाम", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "What is the purpose of the Wildlife Protection Act, 1972?",
        "question_hi": "वन्यजीव संरक्षण अधिनियम, 1972 का उद्देश्य क्या है?",
        "options_en": ["To protect endangered species", "To regulate hunting", "To prevent poaching", "All of the above"],
        "options_hi": ["संकटग्रस्त प्रजातियों की रक्षा करना", "शिकार को नियंत्रित करना", "शिकारियों को रोकना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "What is the significance of biosphere reserves?",
        "question_hi": "जैवमंडल आरक्षित क्षेत्रों का महत्व क्या है?",
        "options_en": ["Conservation of biodiversity", "Sustainable use of resources", "Promotion of research", "All of the above"],
        "options_hi": ["जैव विविधता का संरक्षण", "संसाधनों का सतत उपयोग", "शोध को बढ़ावा देना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What is an example of a protected area under the Wildlife Protection Act?",
        "question_hi": "वन्यजीव संरक्षण अधिनियम के तहत एक संरक्षित क्षेत्र का उदाहरण क्या है?",
        "options_en": ["National Parks", "Wildlife Sanctuaries", "Biosphere Reserves", "All of the above"],
        "options_hi": ["राष्ट्रीय उद्यान", "वन्यजीव अभयारण्य", "जैवमंडल आरक्षित क्षेत्र", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which of the following is a threat to biodiversity?",
        "question_hi": "निम्नलिखित में से कौन जैव विविधता के लिए एक खतरा है?",
        "options_en": ["Climate change", "Pollution", "Overexploitation", "All of the above"],
        "options_hi": ["जलवायु परिवर्तन", "प्रदूषण", "अत्यधिक शोषण", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which of the following is the largest threat to biodiversity today?",
        "question_hi": "आज के समय में जैव विविधता के लिए सबसे बड़ा खतरा क्या है?",
        "options_en": ["Habitat destruction", "Pollution", "Climate change", "Overexploitation"],
        "options_hi": ["आवास का विनाश", "प्रदूषण", "जलवायु परिवर्तन", "अत्यधिक शोषण"],
        "answer": "Habitat destruction",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which organization is responsible for promoting the conservation of biodiversity globally?",
        "question_hi": "वैश्विक स्तर पर जैव विविधता के संरक्षण को बढ़ावा देने के लिए कौन सा संगठन जिम्मेदार है?",
        "options_en": ["World Wildlife Fund (WWF)", "United Nations Environment Programme (UNEP)", "International Union for Conservation of Nature (IUCN)", "All of the above"],
        "options_hi": ["वर्ल्ड वाइल्डलाइफ फंड (WWF)", "संयुक्त राष्ट्र पर्यावरण कार्यक्रम (UNEP)", "प्राकृतिक संसाधन संरक्षण के लिए अंतर्राष्ट्रीय संघ (IUCN)", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which of the following is a biodiversity conservation method?",
        "question_hi": "निम्नलिखित में से कौन सा जैव विविधता संरक्षण का तरीका है?",
        "options_en": ["Creating protected areas", "Preventing deforestation", "Sustainable use of resources", "All of the above"],
        "options_hi": ["संरक्षित क्षेत्र बनाना", "वनों की कटाई को रोकना", "संसाधनों का सतत उपयोग", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "What is the main focus of the Convention on Biological Diversity (CBD)?",
        "question_hi": "जैव विविधता पर कन्वेंशन (CBD) का मुख्य फोकस क्या है?",
        "options_en": ["Conservation of biodiversity", "Sustainable use of biodiversity", "Fair distribution of biodiversity benefits", "All of the above"],
        "options_hi": ["जैव विविधता का संरक्षण", "जैव विविधता का सतत उपयोग", "जैव विविधता के लाभों का न्यायसंगत वितरण", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which of the following is NOT a characteristic of a biodiversity hotspot?",
        "question_hi": "निम्नलिखित में से कौन सा जैव विविधता हॉटस्पॉट की विशेषता नहीं है?",
        "options_en": ["High species richness", "High endemism", "Large human population", "Threatened species"],
        "options_hi": ["उच्च प्रजाति समृद्धि", "उच्च स्थानीकरण", "उच्च मानव जनसंख्या", "संकटग्रस्त प्रजातियाँ"],
        "answer": "Large human population",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which is the first national park in India?",
        "question_hi": "भारत का पहला राष्ट्रीय उद्यान कौन सा है?",
        "options_en": ["Jim Corbett National Park", "Kaziranga National Park", "Sundarbans National Park", "Gir National Park"],
        "options_hi": ["जिम कॉर्बेट राष्ट्रीय उद्यान", "काजीरंगा राष्ट्रीय उद्यान", "सुंदरबन राष्ट्रीय उद्यान", "गिर राष्ट्रीय उद्यान"],
        "answer": "Jim Corbett National Park",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which of the following is the main goal of the Red Data Book?",
        "question_hi": "रेड डेटा बुक का मुख्य उद्देश्य क्या है?",
        "options_en": ["To document endangered species", "To create awareness about biodiversity", "To promote conservation of wildlife", "All of the above"],
        "options_hi": ["संकटग्रस्त प्रजातियों का दस्तावेजीकरण करना", "जैव विविधता के बारे में जागरूकता फैलाना", "वन्यजीवों के संरक्षण को बढ़ावा देना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "What is the main cause of habitat fragmentation?",
        "question_hi": "आवास खंडन का मुख्य कारण क्या है?",
        "options_en": ["Urbanization", "Deforestation", "Agriculture", "All of the above"],
        "options_hi": ["शहरीकरण", "वनों की कटाई", "कृषि", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Which of the following ecosystems is most affected by global warming?",
        "question_hi": "निम्नलिखित में से कौन सा पारिस्थितिकी तंत्र वैश्विक तापन से सबसे अधिक प्रभावित है?",
        "options_en": ["Coral reefs", "Tropical forests", "Deserts", "Grasslands"],
        "options_hi": ["कोरल रीफ", "उष्णकटिबंधीय वन", "रेगिस्तान", "घास के मैदान"],
        "answer": "Coral reefs",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "What is the main source of ozone depletion?",
        "question_hi": "ओजोन परत के अपक्षय का मुख्य स्रोत क्या है?",
        "options_en": ["CFCs", "Carbon dioxide", "Methane", "Oxygen"],
        "options_hi": ["CFCs", "कार्बन डाइऑक्साइड", "मीथेन", "ऑक्सीजन"],
        "answer": "CFCs",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Which of the following is an invasive species in India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत में एक आक्रामक प्रजाति है?",
        "options_en": ["Lantana camara", "Salvia", "Wheat", "Rice"],
        "options_hi": ["लांटाना कैमरा", "सल्विया", "गेहूं", "चावल"],
        "answer": "Lantana camara",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Which of the following is the largest biodiversity hotspot in India?",
        "question_hi": "भारत में सबसे बड़ा जैव विविधता हॉटस्पॉट कौन सा है?",
        "options_en": ["Eastern Himalayas", "Western Ghats", "Sundarbans", "Indo-Burma"],
        "options_hi": ["पूर्वी हिमालय", "पश्चिमी घाट", "सुंदरबन", "इंडो-बर्मा"],
        "answer": "Western Ghats",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "What is the main goal of the National Biodiversity Act, 2002?",
        "question_hi": "राष्ट्रीय जैव विविधता अधिनियम, 2002 का मुख्य उद्देश्य क्या है?",
        "options_en": ["Conservation of biodiversity", "Sustainable use of biodiversity", "Equitable sharing of benefits of biodiversity", "All of the above"],
        "options_hi": ["जैव विविधता का संरक्षण", "जैव विविधता का सतत उपयोग", "जैव विविधता के लाभों का न्यायसंगत वितरण", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which of the following is an example of a species recovery program?",
        "question_hi": "निम्नलिखित में से कौन सा प्रजाति पुनर्प्राप्ति कार्यक्रम का उदाहरण है?",
        "options_en": ["Project Tiger", "Project Elephant", "Project Crocodile", "All of the above"],
        "options_hi": ["प्रोजेक्ट टाइगर", "प्रोजेक्ट हाथी", "प्रोजेक्ट मगरमच्छ", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What does the term 'endemic species' refer to?",
        "question_hi": "'स्थानीय प्रजाति' शब्द का क्या अर्थ है?",
        "options_en": ["Species found only in a particular region", "Species that are extinct", "Species found all over the world", "None of the above"],
        "options_hi": ["प्रजातियाँ जो केवल एक विशिष्ट क्षेत्र में पाई जाती हैं", "जो प्रजातियाँ विलुप्त हो चुकी हैं", "जो प्रजातियाँ पूरी दुनिया में पाई जाती हैं", "इनमें से कोई नहीं"],
        "answer": "Species found only in a particular region",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "What is the major role of biodiversity in ecosystem functioning?",
        "question_hi": "पारिस्थितिकी तंत्र के कार्य में जैव विविधता की प्रमुख भूमिका क्या है?",
        "options_en": ["Maintains ecosystem stability", "Supports nutrient cycling", "Regulates climate", "All of the above"],
        "options_hi": ["पारिस्थितिकी तंत्र की स्थिरता बनाए रखना", "पोषक तत्वों के चक्र का समर्थन करना", "जलवायु का नियमन करना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Which of the following is NOT a characteristic of a protected area?",
        "question_hi": "संरक्षित क्षेत्र की विशेषता निम्नलिखित में से कौन सी नहीं है?",
        "options_en": ["Strictly regulated human activity", "Human habitation allowed", "Wildlife protection", "Limited human access"],
        "options_hi": ["कड़ाई से नियंत्रित मानव गतिविधियाँ", "मानव निवास की अनुमति", "वन्यजीव संरक्षण", "सीमित मानव पहुंच"],
        "answer": "Human habitation allowed",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What is the main objective of conservation education?",
        "question_hi": "संरक्षण शिक्षा का मुख्य उद्देश्य क्या है?",
        "options_en": ["Raise awareness about biodiversity", "Promote sustainable development", "Encourage the protection of natural resources", "All of the above"],
        "options_hi": ["जैव विविधता के बारे में जागरूकता बढ़ाना", "सतत विकास को बढ़ावा देना", "प्राकृतिक संसाधनों के संरक्षण को प्रोत्साहित करना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Which of the following is a key principle of sustainable development?",
        "question_hi": "निम्नलिखित में से कौन सा सतत विकास का एक प्रमुख सिद्धांत है?",
        "options_en": ["Reducing pollution", "Conserving resources for future generations", "Equitable distribution of resources", "All of the above"],
        "options_hi": ["प्रदूषण को कम करना", "भविष्य पीढ़ियों के लिए संसाधनों का संरक्षण", "संसाधनों का न्यायसंगत वितरण", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "What does 'sustainable use' of biodiversity refer to?",
        "question_hi": "'जैव विविधता का सतत उपयोग' से क्या तात्पर्य है?",
        "options_en": ["Using resources without depleting them", "Using resources at a faster rate", "Using resources for short-term benefits", "None of the above"],
        "options_hi": ["संसाधनों का उपयोग बिना उन्हें समाप्त किए", "संसाधनों का तेज़ी से उपयोग", "संवेदनशील लाभ के लिए संसाधनों का उपयोग", "इनमें से कोई नहीं"],
        "answer": "Using resources without depleting them",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What does the term 'biodiversity loss' refer to?",
        "question_hi": "'जैव विविधता हानि' शब्द का क्या अर्थ है?",
        "options_en": ["Decrease in the number of species", "Destruction of habitats", "Extinction of species", "All of the above"],
        "options_hi": ["प्रजातियों की संख्या में कमी", "आवासों का विनाश", "प्रजातियों का विलुप्त होना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which of the following is a non-renewable resource?",
        "question_hi": "निम्नलिखित में से कौन सा एक गैर-नवीकरणीय संसाधन है?",
        "options_en": ["Solar energy", "Wind energy", "Coal", "Water"],
        "options_hi": ["सौर ऊर्जा", "हवा की ऊर्जा", "कोयला", "पानी"],
        "answer": "Coal",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "What is the main reason for species extinction?",
        "question_hi": "प्रजातियों के विलुप्त होने का मुख्य कारण क्या है?",
        "options_en": ["Habitat destruction", "Overhunting", "Climate change", "All of the above"],
        "options_hi": ["आवास का विनाश", "अत्यधिक शिकार", "जलवायु परिवर्तन", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "What is a key factor in the success of conservation programs?",
        "question_hi": "संरक्षण कार्यक्रमों की सफलता में एक प्रमुख कारक क्या है?",
        "options_en": ["Community involvement", "Government policies", "Public awareness", "All of the above"],
        "options_hi": ["सामुदायिक सहभागिता", "सरकारी नीतियाँ", "सार्वजनिक जागरूकता", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "What does the term 'greenhouse effect' refer to?",
        "question_hi": "'ग्रीनहाउस प्रभाव' शब्द का क्या अर्थ है?",
        "options_en": ["Heating of the Earth's atmosphere", "Cooling of the Earth's atmosphere", "Increase in ozone layer", "None of the above"],
        "options_hi": ["पृथ्वी के वातावरण का गर्म होना", "पृथ्वी के वातावरण का ठंडा होना", "ओजोन परत का बढ़ना", "इनमें से कोई नहीं"],
        "answer": "Heating of the Earth's atmosphere",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which of the following is an example of ecosystem restoration?",
        "question_hi": "निम्नलिखित में से कौन सा पारिस्थितिकी तंत्र बहाली का उदाहरण है?",
        "options_en": ["Reforestation", "Wetland restoration", "Coral reef restoration", "All of the above"],
        "options_hi": ["पुनः वनरोपण", "दलदली भूमि की बहाली", "कोरल रीफ की बहाली", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "What is the main threat to species conservation?",
        "question_hi": "प्रजाति संरक्षण के लिए मुख्य खतरा क्या है?",
        "options_en": ["Habitat loss", "Climate change", "Overexploitation", "All of the above"],
        "options_hi": ["आवास की हानि", "जलवायु परिवर्तन", "अत्यधिक शोषण", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which of the following is a consequence of overexploitation?",
        "question_hi": "अत्यधिक शोषण का परिणाम क्या है?",
        "options_en": ["Species extinction", "Loss of biodiversity", "Depletion of resources", "All of the above"],
        "options_hi": ["प्रजातियों का विलुप्त होना", "जैव विविधता की हानि", "संसाधनों की कमी", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Which of the following ecosystems is known for its high biodiversity?",
        "question_hi": "निम्नलिखित में से कौन सा पारिस्थितिकी तंत्र अपनी उच्च जैव विविधता के लिए जाना जाता है?",
        "options_en": ["Tropical rainforest", "Desert", "Tundra", "Savanna"],
        "options_hi": ["उष्णकटिबंधीय वर्षावन", "रेगिस्तान", "टुंड्रा", "सवाना"],
        "answer": "Tropical rainforest",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "What is the significance of the IUCN Red List?",
        "question_hi": "IUCN रेड लिस्ट का क्या महत्व है?",
        "options_en": ["It lists endangered species", "It promotes conservation of wildlife", "It provides guidelines for species protection", "All of the above"],
        "options_hi": ["यह संकटग्रस्त प्रजातियों की सूची बनाता है", "यह वन्यजीवों के संरक्षण को बढ़ावा देता है", "यह प्रजाति संरक्षण के लिए दिशा-निर्देश प्रदान करता है", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "What is the impact of invasive species on native ecosystems?",
        "question_hi": "आक्रामक प्रजातियों का स्थानीय पारिस्थितिकी तंत्र पर क्या प्रभाव पड़ता है?",
        "options_en": ["They outcompete native species", "They disrupt food chains", "They cause habitat destruction", "All of the above"],
        "options_hi": ["वे स्थानीय प्रजातियों को पराजित करते हैं", "वे खाद्य श्रृंखलाओं को बाधित करते हैं", "वे आवासों का विनाश करते हैं", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "What is the goal of wildlife corridors?",
        "question_hi": "वन्यजीव गलियारों का उद्देश्य क्या है?",
        "options_en": ["To connect isolated populations", "To increase biodiversity", "To reduce human-wildlife conflicts", "All of the above"],
        "options_hi": ["एकाकी जनसंख्याओं को जोड़ना", "जैव विविधता बढ़ाना", "मानव-वन्यजीव संघर्षों को कम करना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Which of the following is an example of sustainable agriculture?",
        "question_hi": "निम्नलिखित में से कौन सा सतत कृषि का उदाहरण है?",
        "options_en": ["Organic farming", "Crop rotation", "Agroforestry", "All of the above"],
        "options_hi": ["जैविक कृषि", "फसल चक्रीकरण", "कृषि वानिकी", "इनमें से सभी"],
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
