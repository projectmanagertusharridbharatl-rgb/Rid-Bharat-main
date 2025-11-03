const questions = [
    {
        "num": 1,
        "question_en": "Which one of the following is the most important factor in the location of an industry?",
        "question_hi": "निम्नलिखित में से कौन सा उद्योग की स्थिति का सबसे महत्वपूर्ण कारक है?",
        "options_en": ["Raw material", "Market", "Transport", "All of the above"],
        "options_hi": ["कच्चा माल", "बाजार", "परिवहन", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "What is the main objective of the Human Development Index?",
        "question_hi": "मानव विकास सूचकांक का मुख्य उद्देश्य क्या है?",
        "options_en": ["Economic growth", "Measuring human well-being", "Environmental conservation", "Technological advancement"],
        "options_hi": ["आर्थिक वृद्धि", "मानव कल्याण को मापना", "पर्यावरण संरक्षण", "तकनीकी उन्नति"],
        "answer": "Measuring human well-being",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Which country is the largest producer of rice in the world?",
        "question_hi": "दुनिया में चावल का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["India", "China", "Indonesia", "Vietnam"],
        "options_hi": ["भारत", "चीन", "इंडोनेशिया", "वियतनाम"],
        "answer": "China",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which of the following is a non-renewable resource?",
        "question_hi": "निम्नलिखित में से कौन सा एक अपुनर्नवीकरणीय संसाधन है?",
        "options_en": ["Water", "Solar energy", "Coal", "Wind energy"],
        "options_hi": ["पानी", "सौर ऊर्जा", "कोयला", "पवन ऊर्जा"],
        "answer": "Coal",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Which Indian state is the largest producer of cotton?",
        "question_hi": "भारत का कौन सा राज्य कपास का सबसे बड़ा उत्पादक है?",
        "options_en": ["Punjab", "Gujarat", "Maharashtra", "Tamil Nadu"],
        "options_hi": ["पंजाब", "गुजरात", "महाराष्ट्र", "तमिलनाडु"],
        "answer": "Gujarat",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which of the following is a tertiary activity?",
        "question_hi": "निम्नलिखित में से कौन सी तृतीयक गतिविधि है?",
        "options_en": ["Farming", "Fishing", "Teaching", "Mining"],
        "options_hi": ["कृषि", "मछली पकड़ना", "शिक्षण", "खनन"],
        "answer": "Teaching",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which city is known as the 'Manchester of India'?",
        "question_hi": "भारत का 'मैनचेस्टर' किस शहर को कहा जाता है?",
        "options_en": ["Kanpur", "Mumbai", "Surat", "Ahmedabad"],
        "options_hi": ["कानपुर", "मुंबई", "सूरत", "अहमदाबाद"],
        "answer": "Ahmedabad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which one of the following is an inland waterway?",
        "question_hi": "निम्नलिखित में से कौन एक अंतर्देशीय जलमार्ग है?",
        "options_en": ["National Waterway 1", "Suez Canal", "Panama Canal", "Mediterranean Sea"],
        "options_hi": ["नेशनल वॉटरवे 1", "स्वेज नहर", "पनामा नहर", "भूमध्य सागर"],
        "answer": "National Waterway 1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "What does 'population density' refer to?",
        "question_hi": "'जनसंख्या घनत्व' किसे दर्शाता है?",
        "options_en": ["Birth rate", "Number of people per square kilometer", "Migration", "Death rate"],
        "options_hi": ["जन्म दर", "प्रति वर्ग किलोमीटर लोगों की संख्या", "प्रवास", "मृत्यु दर"],
        "answer": "Number of people per square kilometer",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which of the following is a factor of population change?",
        "question_hi": "निम्नलिखित में से कौन जनसंख्या परिवर्तन का कारक है?",
        "options_en": ["Birth", "Death", "Migration", "All of the above"],
        "options_hi": ["जन्म", "मृत्यु", "प्रवास", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which of the following is an urban settlement?",
        "question_hi": "निम्नलिखित में से कौन एक शहरी बस्ती है?",
        "options_en": ["Village", "Town", "Hamlet", "Tribal area"],
        "options_hi": ["गाँव", "कस्बा", "हमलेट", "जनजातीय क्षेत्र"],
        "answer": "Town",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which state has the highest population density in India as per Census 2011?",
        "question_hi": "जनगणना 2011 के अनुसार भारत में किस राज्य की जनसंख्या घनता सबसे अधिक है?",
        "options_en": ["Uttar Pradesh", "West Bengal", "Bihar", "Kerala"],
        "options_hi": ["उत्तर प्रदेश", "पश्चिम बंगाल", "बिहार", "केरल"],
        "answer": "Bihar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which one of the following types of agriculture is practiced in densely populated regions of the world?",
        "question_hi": "दुनिया के घनी आबादी वाले क्षेत्रों में कौन सा कृषि प्रकार प्रचलित है?",
        "options_en": ["Commercial farming", "Extensive farming", "Intensive subsistence farming", "Shifting cultivation"],
        "options_hi": ["व्यावसायिक खेती", "व्यापक खेती", "गहन आत्मनिर्भर खेती", "झूम खेती"],
        "answer": "Intensive subsistence farming",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which river is called the 'Sorrow of Bengal'?",
        "question_hi": "कौन सी नदी 'बंगाल का शोक' कहलाती है?",
        "options_en": ["Ganga", "Kosi", "Damodar", "Brahmaputra"],
        "options_hi": ["गंगा", "कोसी", "दामोदर", "ब्रह्मपुत्र"],
        "answer": "Damodar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which mineral is known as 'Brown Gold'?",
        "question_hi": "'ब्राउन गोल्ड' के नाम से कौन सा खनिज जाना जाता है?",
        "options_en": ["Iron", "Lignite", "Mica", "Bauxite"],
        "options_hi": ["लौह", "लिग्नाइट", "अभ्रक", "बॉक्साइट"],
        "answer": "Lignite",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What is the literacy rate of India according to the 2011 census?",
        "question_hi": "2011 की जनगणना के अनुसार भारत की साक्षरता दर क्या थी?",
        "options_en": ["64.8%", "74.04%", "82.1%", "61.3%"],
        "options_hi": ["64.8%", "74.04%", "82.1%", "61.3%"],
        "answer": "74.04%",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which is the main occupation in rural areas of India?",
        "question_hi": "भारत के ग्रामीण क्षेत्रों में मुख्य आजीविका क्या है?",
        "options_en": ["Manufacturing", "Services", "Agriculture", "Trading"],
        "options_hi": ["उद्योग", "सेवाएं", "कृषि", "व्यापार"],
        "answer": "Agriculture",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which of the following is the longest National Waterway in India?",
        "question_hi": "भारत में निम्नलिखित में से कौन सबसे लंबा राष्ट्रीय जलमार्ग है?",
        "options_en": ["NW-1", "NW-2", "NW-3", "NW-4"],
        "options_hi": ["एनडब्ल्यू-1", "एनडब्ल्यू-2", "एनडब्ल्यू-3", "एनडब्ल्यू-4"],
        "answer": "NW-1",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which of the following industries is known as a basic industry?",
        "question_hi": "निम्नलिखित में से कौन सी उद्योग को एक मूलभूत उद्योग माना जाता है?",
        "options_en": ["Cotton textile", "Iron and steel", "Sugar", "Petrochemical"],
        "options_hi": ["कपास वस्त्र", "लौह और इस्पात", "चीनी", "पेट्रोरसायन"],
        "answer": "Iron and steel",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which port is known as the 'Jawaharlal Nehru Port'?",
        "question_hi": "‘जवाहरलाल नेहरू पोर्ट’ किस बंदरगाह को कहा जाता है?",
        "options_en": ["Kandla", "Mumbai", "Nhava Sheva", "Cochin"],
        "options_hi": ["कांडला", "मुंबई", "न्हावा शेवा", "कोचीन"],
        "answer": "Nhava Sheva",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which of the following is a nodal city for roadways in India?",
        "question_hi": "भारत में निम्नलिखित में से कौन सा शहर सड़कों का केंद्र बिंदु है?",
        "options_en": ["Kolkata", "Nagpur", "Delhi", "Bangalore"],
        "options_hi": ["कोलकाता", "नागपुर", "दिल्ली", "बेंगलुरु"],
        "answer": "Nagpur",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which river valley is most densely populated in India?",
        "question_hi": "भारत में सबसे घनी आबादी वाला नदी घाटी क्षेत्र कौन सा है?",
        "options_en": ["Yamuna", "Krishna", "Ganga", "Brahmaputra"],
        "options_hi": ["यमुना", "कृष्णा", "गंगा", "ब्रह्मपुत्र"],
        "answer": "Ganga",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which crop requires alluvial soil and a hot, humid climate?",
        "question_hi": "कौन सी फसल जलोढ़ मिट्टी और गर्म, आर्द्र जलवायु की आवश्यकता रखती है?",
        "options_en": ["Wheat", "Rice", "Cotton", "Millets"],
        "options_hi": ["गेहूं", "चावल", "कपास", "बाजरा"],
        "answer": "Rice",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which of the following towns is known for its ship-breaking industry?",
        "question_hi": "निम्नलिखित में से कौन सा शहर अपने जहाज तोड़ उद्योग के लिए जाना जाता है?",
        "options_en": ["Surat", "Alang", "Mumbai", "Vishakhapatnam"],
        "options_hi": ["सूरत", "आलंग", "मुंबई", "विशाखापत्तनम"],
        "answer": "Alang",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which of the following regions is rich in iron ore in India?",
        "question_hi": "भारत में निम्नलिखित में से कौन सा क्षेत्र लौह अयस्क में समृद्ध है?",
        "options_en": ["Chota Nagpur Plateau", "Thar Desert", "Malwa Plateau", "Gangetic Plain"],
        "options_hi": ["छोटा नागपुर पठार", "थार मरुस्थल", "मालवा पठार", "गंगा मैदान"],
        "answer": "Chota Nagpur Plateau",
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
