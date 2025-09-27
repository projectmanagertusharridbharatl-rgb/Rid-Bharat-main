const questions = [
    {
        "num": 1,
        "question_en": "What is the primary objective of human geography?",
        "question_hi": "मानव भूगोल का मुख्य उद्देश्य क्या है?",
        "options_en": ["Study of nature", "Study of earth’s crust", "Study of human and nature relationship", "Study of animals"],
        "options_hi": ["प्रकृति का अध्ययन", "पृथ्वी की परत का अध्ययन", "मानव और प्रकृति के संबंधों का अध्ययन", "जानवरों का अध्ययन"],
        "answer": "Study of human and nature relationship",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which approach studies geography from a regional perspective?",
        "question_hi": "कौन-सा दृष्टिकोण क्षेत्रीय दृष्टिकोण से भूगोल का अध्ययन करता है?",
        "options_en": ["Systematic approach", "Regional approach", "Quantitative approach", "Qualitative approach"],
        "options_hi": ["प्रणालीगत दृष्टिकोण", "क्षेत्रीय दृष्टिकोण", "मात्रात्मक दृष्टिकोण", "गुणात्मक दृष्टिकोण"],
        "answer": "Regional approach",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Which branch of geography deals with population studies?",
        "question_hi": "भूगोल की कौन-सी शाखा जनसंख्या अध्ययन से संबंधित है?",
        "options_en": ["Economic Geography", "Population Geography", "Urban Geography", "Cultural Geography"],
        "options_hi": ["आर्थिक भूगोल", "जनसंख्या भूगोल", "शहरी भूगोल", "सांस्कृतिक भूगोल"],
        "answer": "Population Geography",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Who is considered the father of human geography?",
        "question_hi": "मानव भूगोल के जनक किसे माना जाता है?",
        "options_en": ["Eratosthenes", "Humboldt", "Ratzel", "Ritter"],
        "options_hi": ["एराटोस्थनीस", "हम्बोल्ट", "रैट्ज़ल", "रिटर"],
        "answer": "Ratzel",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "What does GDP stand for?",
        "question_hi": "GDP का क्या अर्थ है?",
        "options_en": ["Gross Domestic Product", "General Development Plan", "Global Development Policy", "None of these"],
        "options_hi": ["सकल घरेलू उत्पाद", "सामान्य विकास योजना", "वैश्विक विकास नीति", "इनमें से कोई नहीं"],
        "answer": "Gross Domestic Product",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which factor is considered when measuring the Human Development Index (HDI)?",
        "question_hi": "मानव विकास सूचकांक (HDI) मापते समय किस कारक को ध्यान में रखा जाता है?",
        "options_en": ["Life expectancy", "Literacy rate", "Per capita income", "All of the above"],
        "options_hi": ["जीवन प्रत्याशा", "साक्षरता दर", "प्रति व्यक्ति आय", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which state has the highest population density in India?",
        "question_hi": "भारत में किस राज्य की जनसंख्या घनत्व सबसे अधिक है?",
        "options_en": ["Uttar Pradesh", "West Bengal", "Bihar", "Kerala"],
        "options_hi": ["उत्तर प्रदेश", "पश्चिम बंगाल", "बिहार", "केरल"],
        "answer": "Bihar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which sector is the largest employer in India?",
        "question_hi": "भारत में सबसे बड़ा नियोक्ता कौन सा क्षेत्र है?",
        "options_en": ["Primary", "Secondary", "Tertiary", "Quaternary"],
        "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "चतुर्थक"],
        "answer": "Primary",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Which of the following is a tertiary activity?",
        "question_hi": "निम्नलिखित में से कौन-सी तृतीयक गतिविधि है?",
        "options_en": ["Agriculture", "Manufacturing", "Banking", "Mining"],
        "options_hi": ["कृषि", "उत्पादन", "बैंकिंग", "खनन"],
        "answer": "Banking",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which one of the following is the most densely populated region of the world?",
        "question_hi": "निम्नलिखित में से कौन-सा विश्व का सबसे घनी आबादी वाला क्षेत्र है?",
        "options_en": ["Europe", "South America", "South-East Asia", "Africa"],
        "options_hi": ["यूरोप", "दक्षिण अमेरिका", "दक्षिण-पूर्व एशिया", "अफ्रीका"],
        "answer": "South-East Asia",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which activity is NOT included in the primary sector?",
        "question_hi": "कौन-सी गतिविधि प्राथमिक क्षेत्र में शामिल नहीं है?",
        "options_en": ["Fishing", "Forestry", "Construction", "Mining"],
        "options_hi": ["मछली पकड़ना", "वन उद्योग", "निर्माण", "खनन"],
        "answer": "Construction",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "What is migration?",
        "question_hi": "प्रवासन क्या है?",
        "options_en": ["Movement of people from one place to another", "Change of season", "Change of language", "None of the above"],
        "options_hi": ["लोगों का एक स्थान से दूसरे स्थान पर जाना", "मौसम का परिवर्तन", "भाषा का परिवर्तन", "इनमें से कोई नहीं"],
        "answer": "Movement of people from one place to another",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which state in India has the lowest literacy rate?",
        "question_hi": "भारत में किस राज्य की साक्षरता दर सबसे कम है?",
        "options_en": ["Bihar", "Rajasthan", "Andhra Pradesh", "Uttar Pradesh"],
        "options_hi": ["बिहार", "राजस्थान", "आंध्र प्रदेश", "उत्तर प्रदेश"],
        "answer": "Andhra Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "What type of farming is practiced in densely populated regions?",
        "question_hi": "घनी आबादी वाले क्षेत्रों में किस प्रकार की कृषि की जाती है?",
        "options_en": ["Commercial farming", "Shifting agriculture", "Intensive subsistence farming", "Extensive farming"],
        "options_hi": ["व्यावसायिक कृषि", "स्थानांतरण कृषि", "गहन निर्वाह कृषि", "व्यापक कृषि"],
        "answer": "Intensive subsistence farming",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which one of the following is a feature of urban settlements?",
        "question_hi": "निम्नलिखित में से कौन-सा शहरी बस्तियों की विशेषता है?",
        "options_en": ["Low population density", "Primary activities", "High population density", "Dependence on nature"],
        "options_hi": ["कम जनसंख्या घनत्व", "प्राथमिक गतिविधियाँ", "अधिक जनसंख्या घनत्व", "प्रकृति पर निर्भरता"],
        "answer": "High population density",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Which of the following is not a type of human settlement?",
        "question_hi": "निम्नलिखित में से कौन मानव बस्ती का प्रकार नहीं है?",
        "options_en": ["Compact", "Scattered", "Isolated", "Volcanic"],
        "options_hi": ["सघन", "बिखरी हुई", "पृथक", "ज्वालामुखीय"],
        "answer": "Volcanic",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which type of rural settlement is found in hilly areas?",
        "question_hi": "पहाड़ी क्षेत्रों में कौन-सी प्रकार की ग्रामीण बस्ती पाई जाती है?",
        "options_en": ["Linear", "Clustered", "Scattered", "Planned"],
        "options_hi": ["रेखीय", "संकुल", "बिखरी हुई", "नियोजित"],
        "answer": "Scattered",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which industry is known as a basic industry?",
        "question_hi": "कौन-सी उद्योग को मूल उद्योग कहा जाता है?",
        "options_en": ["Iron and steel", "Textile", "Sugar", "Cement"],
        "options_hi": ["लोहा और इस्पात", "कपड़ा", "चीनी", "सीमेंट"],
        "answer": "Iron and steel",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "What is the main source of energy in India?",
        "question_hi": "भारत में ऊर्जा का मुख्य स्रोत क्या है?",
        "options_en": ["Hydel", "Coal", "Nuclear", "Solar"],
        "options_hi": ["जल विद्युत", "कोयला", "नाभिकीय", "सौर"],
        "answer": "Coal",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which transport is most suitable for long-distance freight movement?",
        "question_hi": "लंबी दूरी के माल परिवहन के लिए कौन-सा परिवहन सबसे उपयुक्त है?",
        "options_en": ["Roadways", "Railways", "Airways", "Waterways"],
        "options_hi": ["सड़क मार्ग", "रेल मार्ग", "हवाई मार्ग", "जल मार्ग"],
        "answer": "Railways",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which river valley is the most densely populated in India?",
        "question_hi": "भारत में कौन-सी नदी घाटी सबसे अधिक घनी आबादी वाली है?",
        "options_en": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        "options_hi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
        "answer": "Ganga",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which state is the largest producer of sugarcane in India?",
        "question_hi": "भारत में गन्ने का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
        "options_en": ["Maharashtra", "Uttar Pradesh", "Punjab", "Gujarat"],
        "options_hi": ["महाराष्ट्र", "उत्तर प्रदेश", "पंजाब", "गुजरात"],
        "answer": "Uttar Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which is the most urbanized state in India?",
        "question_hi": "भारत का सबसे अधिक शहरीकृत राज्य कौन-सा है?",
        "options_en": ["Tamil Nadu", "Kerala", "Maharashtra", "Goa"],
        "options_hi": ["तमिलनाडु", "केरल", "महाराष्ट्र", "गोवा"],
        "answer": "Goa",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which city is known as the Silicon Valley of India?",
        "question_hi": "भारत का सिलिकॉन वैली किस शहर को कहा जाता है?",
        "options_en": ["Hyderabad", "Bangalore", "Chennai", "Pune"],
        "options_hi": ["हैदराबाद", "बैंगलोर", "चेन्नई", "पुणे"],
        "answer": "Bangalore",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which dam is built on the river Sutlej?",
        "question_hi": "सतलज नदी पर कौन-सा बांध बना है?",
        "options_en": ["Bhakra Nangal", "Tehri", "Hirakud", "Sardar Sarovar"],
        "options_hi": ["भाखड़ा नंगल", "टिहरी", "हीराकुंड", "सरदार सरोवर"],
        "answer": "Bhakra Nangal",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Which country has the largest rail network in the world?",
        "question_hi": "विश्व में सबसे बड़ा रेलवे नेटवर्क किस देश का है?",
        "options_en": ["India", "China", "Russia", "USA"],
        "options_hi": ["भारत", "चीन", "रूस", "यूएसए"],
        "answer": "USA",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Which crop is known as a kharif crop in India?",
        "question_hi": "भारत में किस फसल को खरीफ फसल कहा जाता है?",
        "options_en": ["Wheat", "Barley", "Rice", "Mustard"],
        "options_hi": ["गेहूं", "जौ", "धान", "सरसों"],
        "answer": "Rice",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Which of the following is a foot-loose industry?",
        "question_hi": "निम्नलिखित में से कौन-सा एक ‘फुट-लूज़’ उद्योग है?",
        "options_en": ["Iron and Steel", "Sugar", "Textile", "Software"],
        "options_hi": ["लोहा और इस्पात", "चीनी", "कपड़ा", "सॉफ्टवेयर"],
        "answer": "Software",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Which city is known as the Manchester of India?",
        "question_hi": "भारत का मैनचेस्टर किस शहर को कहा जाता है?",
        "options_en": ["Kanpur", "Ahmedabad", "Mumbai", "Surat"],
        "options_hi": ["कानपुर", "अहमदाबाद", "मुंबई", "सूरत"],
        "answer": "Ahmedabad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which one of the following is a major seaport in the eastern coast of India?",
        "question_hi": "भारत के पूर्वी तट पर निम्नलिखित में से कौन-सा प्रमुख बंदरगाह है?",
        "options_en": ["Mumbai", "Chennai", "Kandla", "Mangalore"],
        "options_hi": ["मुंबई", "चेन्नई", "कांडला", "मैंगलोर"],
        "answer": "Chennai",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which mineral is known as brown gold?",
        "question_hi": "कौन-सा खनिज भूरे सोने (ब्राउन गोल्ड) के नाम से जाना जाता है?",
        "options_en": ["Lignite", "Copper", "Bauxite", "Gypsum"],
        "options_hi": ["लिग्नाइट", "तांबा", "बॉक्साइट", "जिप्सम"],
        "answer": "Lignite",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Which sector contributes most to India’s GDP?",
        "question_hi": "भारत की जीडीपी में सबसे अधिक योगदान किस क्षेत्र का है?",
        "options_en": ["Primary", "Secondary", "Tertiary", "None"],
        "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "कोई नहीं"],
        "answer": "Tertiary",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Which is the leading cotton producing state in India?",
        "question_hi": "भारत का प्रमुख कपास उत्पादक राज्य कौन-सा है?",
        "options_en": ["Punjab", "Gujarat", "Haryana", "Tamil Nadu"],
        "options_hi": ["पंजाब", "गुजरात", "हरियाणा", "तमिलनाडु"],
        "answer": "Gujarat",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Which of the following is not a mode of transport?",
        "question_hi": "निम्नलिखित में से कौन-सा परिवहन का साधन नहीं है?",
        "options_en": ["Railways", "Airways", "Waterways", "Pipeline"],
        "options_hi": ["रेल मार्ग", "हवाई मार्ग", "जल मार्ग", "पाइपलाइन"],
        "answer": "Pipeline",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Which state is the leading producer of coffee in India?",
        "question_hi": "भारत में कॉफी का प्रमुख उत्पादक राज्य कौन-सा है?",
        "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
        "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
        "answer": "Karnataka",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Which of the following is a non-metallic mineral?",
        "question_hi": "निम्नलिखित में से कौन-सा एक अधात्विक खनिज है?",
        "options_en": ["Iron", "Copper", "Mica", "Zinc"],
        "options_hi": ["लोहा", "तांबा", "अभ्रक", "जस्ता"],
        "answer": "Mica",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Which state has the highest forest cover in India?",
        "question_hi": "भारत में सबसे अधिक वन क्षेत्र वाला राज्य कौन-सा है?",
        "options_en": ["Madhya Pradesh", "Arunachal Pradesh", "Chhattisgarh", "Odisha"],
        "options_hi": ["मध्य प्रदेश", "अरुणाचल प्रदेश", "छत्तीसगढ़", "ओडिशा"],
        "answer": "Madhya Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Which state is known for black soil?",
        "question_hi": "कौन-सा राज्य काली मिट्टी के लिए प्रसिद्ध है?",
        "options_en": ["Punjab", "Gujarat", "Tamil Nadu", "Rajasthan"],
        "options_hi": ["पंजाब", "गुजरात", "तमिलनाडु", "राजस्थान"],
        "answer": "Gujarat",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which place is the largest coal producer in India?",
        "question_hi": "भारत में सबसे बड़ा कोयला उत्पादक क्षेत्र कौन-सा है?",
        "options_en": ["Dhanbad", "Korba", "Raniganj", "Singrauli"],
        "options_hi": ["धनबाद", "कोरबा", "रानीगंज", "सिंगरौली"],
        "answer": "Dhanbad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which is the longest national highway in India?",
        "question_hi": "भारत का सबसे लंबा राष्ट्रीय राजमार्ग कौन-सा है?",
        "options_en": ["NH-44", "NH-7", "NH-27", "NH-19"],
        "options_hi": ["एनएच-44", "एनएच-7", "एनएच-27", "एनएच-19"],
        "answer": "NH-44",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Which crop is called the 'golden fiber' of India?",
        "question_hi": "भारत में किस फसल को 'स्वर्ण रेशा' कहा जाता है?",
        "options_en": ["Cotton", "Silk", "Hemp", "Jute"],
        "options_hi": ["कपास", "रेशम", "भांग", "जूट"],
        "answer": "Jute",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which is the main occupation in rural India?",
        "question_hi": "ग्रामीण भारत में मुख्य पेशा क्या है?",
        "options_en": ["Agriculture", "Business", "Construction", "Mining"],
        "options_hi": ["कृषि", "व्यवसाय", "निर्माण", "खनन"],
        "answer": "Agriculture",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which factor is responsible for uneven population distribution in India?",
        "question_hi": "भारत में असमान जनसंख्या वितरण के लिए कौन-सा कारण जिम्मेदार है?",
        "options_en": ["Climate", "Topography", "Water availability", "All of these"],
        "options_hi": ["जलवायु", "भू-आकृति", "जल की उपलब्धता", "इनमें से सभी"],
        "answer": "All of these",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Which state is the largest producer of petroleum in India?",
        "question_hi": "भारत में पेट्रोलियम का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
        "options_en": ["Rajasthan", "Gujarat", "Assam", "Maharashtra"],
        "options_hi": ["राजस्थान", "गुजरात", "असम", "महाराष्ट्र"],
        "answer": "Gujarat",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which city is known as the cotton polis of India?",
        "question_hi": "भारत में किस शहर को 'कॉटन पोलिस' कहा जाता है?",
        "options_en": ["Mumbai", "Nagpur", "Coimbatore", "Ahmedabad"],
        "options_hi": ["मुंबई", "नागपुर", "कोयंबटूर", "अहमदाबाद"],
        "answer": "Coimbatore",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Which state has the highest number of large dams in India?",
        "question_hi": "भारत में सबसे अधिक बड़े बांध किस राज्य में हैं?",
        "options_en": ["Andhra Pradesh", "Madhya Pradesh", "Maharashtra", "Gujarat"],
        "options_hi": ["आंध्र प्रदेश", "मध्य प्रदेश", "महाराष्ट्र", "गुजरात"],
        "answer": "Maharashtra",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which region in India receives the highest rainfall?",
        "question_hi": "भारत का कौन-सा क्षेत्र सबसे अधिक वर्षा प्राप्त करता है?",
        "options_en": ["Mawsynram", "Cherrapunji", "Kochi", "Mumbai"],
        "options_hi": ["मौसिनराम", "चेरापूंजी", "कोच्चि", "मुंबई"],
        "answer": "Mawsynram",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which one of the following ports is a riverine port?",
        "question_hi": "निम्नलिखित में से कौन-सा एक नदी बंदरगाह है?",
        "options_en": ["Mumbai", "Paradip", "Kolkata", "Chennai"],
        "options_hi": ["मुंबई", "पारादीप", "कोलकाता", "चेन्नई"],
        "answer": "Kolkata",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Which mineral is used in the production of aluminium?",
        "question_hi": "एल्यूमिनियम के उत्पादन में किस खनिज का उपयोग होता है?",
        "options_en": ["Limestone", "Bauxite", "Gypsum", "Mica"],
        "options_hi": ["चूना पत्थर", "बॉक्साइट", "जिप्सम", "अभ्रक"],
        "answer": "Bauxite",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Which is the deepest landlocked and protected port in India?",
        "question_hi": "भारत का सबसे गहरा स्थलरुद्ध और संरक्षित बंदरगाह कौन-सा है?",
        "options_en": ["Kandla", "Vishakhapatnam", "Chennai", "Paradip"],
        "options_hi": ["कांडला", "विशाखापत्तनम", "चेन्नई", "पारादीप"],
        "answer": "Vishakhapatnam",
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
