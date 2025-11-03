const questions = [
    {
        "num": 1,
        "question_en": "Which of the following is a tertiary activity?",
        "question_hi": "निम्नलिखित में से कौन सी तृतीयक गतिविधि है?",
        "options_en": ["Agriculture", "Fishing", "Teacher", "Mining"],
        "options_hi": ["कृषि", "मछली पकड़ना", "शिक्षक", "खान खनन"],
        "answer": "Teacher",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which of the following is an example of a quaternary activity?",
        "question_hi": "निम्नलिखित में से कौन चतुर्थक गतिविधि का उदाहरण है?",
        "options_en": ["Teaching", "Research", "Transport", "Farming"],
        "options_hi": ["शिक्षण", "अनुसंधान", "परिवहन", "कृषि"],
        "answer": "Research",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Which country has the highest percentage of urban population?",
        "question_hi": "किस देश में शहरी जनसंख्या का प्रतिशत सबसे अधिक है?",
        "options_en": ["India", "USA", "Australia", "Japan"],
        "options_hi": ["भारत", "यूएसए", "ऑस्ट्रेलिया", "जापान"],
        "answer": "Australia",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which of the following is an example of a primary activity?",
        "question_hi": "निम्नलिखित में से कौन एक प्राथमिक गतिविधि का उदाहरण है?",
        "options_en": ["Mining", "Banking", "Teaching", "Transport"],
        "options_hi": ["खनन", "बैंकिंग", "शिक्षण", "परिवहन"],
        "answer": "Mining",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Which is the most important factor for the location of an industry?",
        "question_hi": "किसी उद्योग के स्थान के लिए सबसे महत्वपूर्ण कारक कौन सा है?",
        "options_en": ["Raw material", "Climate", "Labour", "Transport"],
        "options_hi": ["कच्चा माल", "जलवायु", "श्रम", "परिवहन"],
        "answer": "Raw material",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which type of farming is practiced in densely populated regions of the world?",
        "question_hi": "दुनिया के घनी आबादी वाले क्षेत्रों में कौन-सी खेती की जाती है?",
        "options_en": ["Commercial farming", "Shifting cultivation", "Subsistence farming", "Plantation farming"],
        "options_hi": ["व्यावसायिक कृषि", "स्थानांतरित खेती", "आत्मनिर्भर कृषि", "प्लांटेशन कृषि"],
        "answer": "Subsistence farming",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which one of the following is the most populated country in the world?",
        "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे अधिक जनसंख्या वाला देश है?",
        "options_en": ["India", "USA", "China", "Russia"],
        "options_hi": ["भारत", "यूएसए", "चीन", "रूस"],
        "answer": "China",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "What is the basis of human development index?",
        "question_hi": "मानव विकास सूचकांक का आधार क्या है?",
        "options_en": ["Income, Education and Health", "Only income", "Only education", "Only health"],
        "options_hi": ["आय, शिक्षा और स्वास्थ्य", "केवल आय", "केवल शिक्षा", "केवल स्वास्थ्य"],
        "answer": "Income, Education and Health",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Which is the largest country in the world by area?",
        "question_hi": "क्षेत्रफल के अनुसार दुनिया का सबसे बड़ा देश कौन सा है?",
        "options_en": ["USA", "Canada", "Russia", "China"],
        "options_hi": ["यूएसए", "कनाडा", "रूस", "चीन"],
        "answer": "Russia",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which one of the following is not a form of settlement?",
        "question_hi": "निम्नलिखित में से कौन-सा बस्तियों का प्रकार नहीं है?",
        "options_en": ["Linear", "Nucleated", "Scattered", "Circular"],
        "options_hi": ["रेखीय", "समूहीकृत", "विखंडित", "वृत्तीय"],
        "answer": "Circular",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which city is known as the 'Silicon Valley of India'?",
        "question_hi": "भारत का 'सिलिकॉन वैली' किस शहर को कहा जाता है?",
        "options_en": ["Hyderabad", "Mumbai", "Chennai", "Bangalore"],
        "options_hi": ["हैदराबाद", "मुंबई", "चेन्नई", "बेंगलुरु"],
        "answer": "Bangalore",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which river is the longest in India?",
        "question_hi": "भारत की सबसे लंबी नदी कौन-सी है?",
        "options_en": ["Ganga", "Brahmaputra", "Yamuna", "Godavari"],
        "options_hi": ["गंगा", "ब्रह्मपुत्र", "यमुना", "गोदावरी"],
        "answer": "Ganga",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which state has the highest literacy rate in India?",
        "question_hi": "भारत में सबसे अधिक साक्षरता दर किस राज्य की है?",
        "options_en": ["Kerala", "Tamil Nadu", "Maharashtra", "Delhi"],
        "options_hi": ["केरल", "तमिलनाडु", "महाराष्ट्र", "दिल्ली"],
        "answer": "Kerala",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which of the following is the capital of Uttarakhand?",
        "question_hi": "निम्नलिखित में से उत्तराखंड की राजधानी कौन-सी है?",
        "options_en": ["Nainital", "Dehradun", "Haridwar", "Rishikesh"],
        "options_hi": ["नैनीताल", "देहरादून", "हरिद्वार", "ऋषिकेश"],
        "answer": "Dehradun",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which of the following is an inland waterway?",
        "question_hi": "निम्नलिखित में से कौन एक अंतर्देशीय जलमार्ग है?",
        "options_en": ["National Waterway-1", "Arabian Sea", "Bay of Bengal", "Indian Ocean"],
        "options_hi": ["राष्ट्रीय जलमार्ग-1", "अरब सागर", "बंगाल की खाड़ी", "हिंद महासागर"],
        "answer": "National Waterway-1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What is the literacy rate of India as per 2011 census?",
        "question_hi": "2011 की जनगणना के अनुसार भारत की साक्षरता दर क्या थी?",
        "options_en": ["68.9%", "72.2%", "74.0%", "76.5%"],
        "options_hi": ["68.9%", "72.2%", "74.0%", "76.5%"],
        "answer": "74.0%",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which state of India has the highest population?",
        "question_hi": "भारत का सबसे अधिक जनसंख्या वाला राज्य कौन-सा है?",
        "options_en": ["Maharashtra", "Bihar", "Uttar Pradesh", "West Bengal"],
        "options_hi": ["महाराष्ट्र", "बिहार", "उत्तर प्रदेश", "पश्चिम बंगाल"],
        "answer": "Uttar Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which one of the following is not a cause of urbanisation?",
        "question_hi": "निम्नलिखित में से कौन शहरीकरण का कारण नहीं है?",
        "options_en": ["Industrialisation", "Infrastructure", "Agriculture", "Migration"],
        "options_hi": ["औद्योगीकरण", "बुनियादी ढांचा", "कृषि", "प्रवास"],
        "answer": "Agriculture",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which of the following states is landlocked?",
        "question_hi": "निम्नलिखित में से कौन-सा राज्य स्थलवेष्टित (landlocked) है?",
        "options_en": ["Odisha", "West Bengal", "Haryana", "Tamil Nadu"],
        "options_hi": ["ओडिशा", "पश्चिम बंगाल", "हरियाणा", "तमिलनाडु"],
        "answer": "Haryana",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which crop needs maximum water?",
        "question_hi": "कौन-सी फसल को सबसे अधिक जल की आवश्यकता होती है?",
        "options_en": ["Wheat", "Rice", "Maize", "Barley"],
        "options_hi": ["गेहूं", "धान", "मक्का", "जौ"],
        "answer": "Rice",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which sector includes trade and commerce?",
        "question_hi": "व्यापार और वाणिज्य किस क्षेत्र में आते हैं?",
        "options_en": ["Primary", "Secondary", "Tertiary", "Quaternary"],
        "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "चतुर्थक"],
        "answer": "Tertiary",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which is the highest urbanized state in India?",
        "question_hi": "भारत का सबसे अधिक शहरीकृत राज्य कौन-सा है?",
        "options_en": ["Kerala", "Goa", "Tamil Nadu", "Maharashtra"],
        "options_hi": ["केरल", "गोवा", "तमिलनाडु", "महाराष्ट्र"],
        "answer": "Goa",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which is the best indicator of economic development?",
        "question_hi": "आर्थिक विकास का सर्वोत्तम संकेतक कौन सा है?",
        "options_en": ["GDP", "Per Capita Income", "HDI", "Population Growth"],
        "options_hi": ["जीडीपी", "प्रति व्यक्ति आय", "एचडीआई", "जनसंख्या वृद्धि"],
        "answer": "HDI",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which state of India is known for tea plantations?",
        "question_hi": "भारत का कौन-सा राज्य चाय बागानों के लिए प्रसिद्ध है?",
        "options_en": ["Assam", "Madhya Pradesh", "Punjab", "Uttar Pradesh"],
        "options_hi": ["असम", "मध्य प्रदेश", "पंजाब", "उत्तर प्रदेश"],
        "answer": "Assam",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which of the following is not a nodal city of Golden Quadrilateral?",
        "question_hi": "निम्नलिखित में से कौन स्वर्णिम चतुर्भुज (Golden Quadrilateral) का नोडल शहर नहीं है?",
        "options_en": ["Delhi", "Kolkata", "Chennai", "Hyderabad"],
        "options_hi": ["दिल्ली", "कोलकाता", "चेन्नई", "हैदराबाद"],
        "answer": "Hyderabad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Which is the largest producer of bauxite in the world?",
        "question_hi": "दुनिया में बॉक्साइट का सबसे बड़ा उत्पादक कौन सा देश है?",
        "options_en": ["Australia", "India", "China", "Brazil"],
        "options_hi": ["ऑस्ट्रेलिया", "भारत", "चीन", "ब्राज़ील"],
        "answer": "Australia",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Which type of industry is cotton textile industry?",
        "question_hi": "कपास वस्त्र उद्योग किस प्रकार का उद्योग है?",
        "options_en": ["Agro-based", "Mineral-based", "Forest-based", "Marine-based"],
        "options_hi": ["कृषि आधारित", "खनिज आधारित", "वन आधारित", "समुद्री आधारित"],
        "answer": "Agro-based",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Which is the most urbanized state in India?",
        "question_hi": "भारत में सबसे अधिक शहरीकृत राज्य कौन सा है?",
        "options_en": ["Maharashtra", "Tamil Nadu", "Kerala", "Goa"],
        "options_hi": ["महाराष्ट्र", "तमिलनाडु", "केरल", "गोवा"],
        "answer": "Goa",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Which of the following is not a renewable resource?",
        "question_hi": "निम्नलिखित में से कौन सा अक्षय संसाधन नहीं है?",
        "options_en": ["Solar energy", "Wind energy", "Coal", "Hydropower"],
        "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "जलविद्युत"],
        "answer": "Coal",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which river is known as the 'Sorrow of Bengal'?",
        "question_hi": "कौन सी नदी 'बंगाल का शोक' के रूप में जानी जाती है?",
        "options_en": ["Damodar", "Hooghly", "Ganga", "Brahmaputra"],
        "options_hi": ["दामोदर", "हुगली", "गंगा", "ब्रह्मपुत्र"],
        "answer": "Damodar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which is the main occupation in rural areas of India?",
        "question_hi": "भारत के ग्रामीण क्षेत्रों में मुख्य व्यवसाय क्या है?",
        "options_en": ["Agriculture", "Trade", "Transport", "Manufacturing"],
        "options_hi": ["कृषि", "व्यापार", "परिवहन", "उत्पादन"],
        "answer": "Agriculture",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Which state in India has the largest forest area?",
        "question_hi": "भारत में सबसे बड़ा वन क्षेत्र किस राज्य में है?",
        "options_en": ["Madhya Pradesh", "Arunachal Pradesh", "Chhattisgarh", "Odisha"],
        "options_hi": ["मध्य प्रदेश", "अरुणाचल प्रदेश", "छत्तीसगढ़", "ओडिशा"],
        "answer": "Madhya Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "What is the term used for shifting agriculture in North-East India?",
        "question_hi": "पूर्वोत्तर भारत में स्थानांतरण कृषि के लिए प्रयुक्त शब्द क्या है?",
        "options_en": ["Jhum", "Milpa", "Ladang", "Ray"],
        "options_hi": ["झूम", "मिल्पा", "लडांग", "रे"],
        "answer": "Jhum",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Which dam is built on the Narmada river?",
        "question_hi": "नर्मदा नदी पर कौन सा बांध बनाया गया है?",
        "options_en": ["Sardar Sarovar", "Bhakra Nangal", "Tehri", "Hirakud"],
        "options_hi": ["सरदार सरोवर", "भाखड़ा नांगल", "टिहरी", "हीराकुंड"],
        "answer": "Sardar Sarovar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Which mineral is known as 'black gold'?",
        "question_hi": "किस खनिज को 'काला सोना' कहा जाता है?",
        "options_en": ["Coal", "Petroleum", "Graphite", "Natural Gas"],
        "options_hi": ["कोयला", "पेट्रोलियम", "ग्रेफाइट", "प्राकृतिक गैस"],
        "answer": "Petroleum",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Which of the following is a tertiary activity?",
        "question_hi": "निम्नलिखित में से कौन सी तृतीयक गतिविधि है?",
        "options_en": ["Fishing", "Manufacturing", "Banking", "Farming"],
        "options_hi": ["मछली पकड़ना", "उत्पादन", "बैंकिंग", "खेती"],
        "answer": "Banking",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Which is the major occupation in the Ganga plain?",
        "question_hi": "गंगा मैदान में प्रमुख व्यवसाय क्या है?",
        "options_en": ["Agriculture", "Mining", "Trade", "Fishing"],
        "options_hi": ["कृषि", "खान", "व्यापार", "मछली पकड़ना"],
        "answer": "Agriculture",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Which is the longest National Highway in India?",
        "question_hi": "भारत में सबसे लंबा राष्ट्रीय राजमार्ग कौन सा है?",
        "options_en": ["NH-44", "NH-2", "NH-7", "NH-27"],
        "options_hi": ["एनएच-44", "एनएच-2", "एनएच-7", "एनएच-27"],
        "answer": "NH-44",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which crop is known as the 'golden fibre'?",
        "question_hi": "किस फसल को 'स्वर्ण तंतु' कहा जाता है?",
        "options_en": ["Cotton", "Jute", "Wheat", "Paddy"],
        "options_hi": ["कपास", "जूट", "गेहूं", "धान"],
        "answer": "Jute",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which place in India receives the highest rainfall?",
        "question_hi": "भारत में सबसे अधिक वर्षा कहां होती है?",
        "options_en": ["Mawsynram", "Cherrapunji", "Agumbe", "Kochi"],
        "options_hi": ["मौसिनराम", "चेरापूंजी", "अगुम्बे", "कोच्चि"],
        "answer": "Mawsynram",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Which state has the highest population in India?",
        "question_hi": "भारत में किस राज्य की जनसंख्या सबसे अधिक है?",
        "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
        "answer": "Uttar Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which Indian city is known as the 'Silicon Valley of India'?",
        "question_hi": "भारत का कौन सा शहर 'भारत की सिलिकॉन वैली' कहलाता है?",
        "options_en": ["Bengaluru", "Hyderabad", "Chennai", "Pune"],
        "options_hi": ["बेंगलुरु", "हैदराबाद", "चेन्नई", "पुणे"],
        "answer": "Bengaluru",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which soil is ideal for growing cotton?",
        "question_hi": "कपास की खेती के लिए कौन सी मिट्टी उपयुक्त है?",
        "options_en": ["Black soil", "Red soil", "Laterite soil", "Alluvial soil"],
        "options_hi": ["काली मिट्टी", "लाल मिट्टी", "लेटराइट मिट्टी", "पलवार मिट्टी"],
        "answer": "Black soil",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Which river does not form a delta?",
        "question_hi": "निम्नलिखित में से कौन सी नदी डेल्टा नहीं बनाती है?",
        "options_en": ["Narmada", "Godavari", "Krishna", "Ganga"],
        "options_hi": ["नर्मदा", "गोदावरी", "कृष्णा", "गंगा"],
        "answer": "Narmada",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which is the smallest Union Territory of India?",
        "question_hi": "भारत का सबसे छोटा केंद्रशासित प्रदेश कौन सा है?",
        "options_en": ["Lakshadweep", "Daman and Diu", "Chandigarh", "Puducherry"],
        "options_hi": ["लक्षद्वीप", "दमन और दीव", "चंडीगढ़", "पुदुचेरी"],
        "answer": "Lakshadweep",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Which is the most populous metropolitan city in India?",
        "question_hi": "भारत का सबसे अधिक जनसंख्या वाला महानगर कौन सा है?",
        "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
        "answer": "Mumbai",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "What is the full form of GIS?",
        "question_hi": "GIS का पूरा नाम क्या है?",
        "options_en": ["Geographical Information System", "Geological Index System", "Global Index Software", "Geospatial Infrastructure Solution"],
        "options_hi": ["भौगोलिक सूचना प्रणाली", "भूगर्भीय सूचकांक प्रणाली", "ग्लोबल इंडेक्स सॉफ्टवेयर", "जियोस्पेशियल इन्फ्रास्ट्रक्चर सॉल्यूशन"],
        "answer": "Geographical Information System",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which type of settlement is found in river valleys?",
        "question_hi": "नदी घाटियों में किस प्रकार की बस्ती पाई जाती है?",
        "options_en": ["Linear", "Scattered", "Clustered", "Isolated"],
        "options_hi": ["रेखीय", "बिखरी हुई", "गुच्छित", "अलग-थलग"],
        "answer": "Linear",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Which of the following is a landlocked state?",
        "question_hi": "निम्नलिखित में से कौन सा राज्य स्थल-आवृत है?",
        "options_en": ["Chhattisgarh", "Odisha", "Tamil Nadu", "Gujarat"],
        "options_hi": ["छत्तीसगढ़", "ओडिशा", "तमिलनाडु", "गुजरात"],
        "answer": "Chhattisgarh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Which Indian state is the largest producer of tea?",
        "question_hi": "भारत का सबसे बड़ा चाय उत्पादक राज्य कौन सा है?",
        "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
        "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
        "answer": "Assam",
        "attempted": false,
        "selected": ""
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
