
const questions = [
    {
        "num": 1,
        "question_en": "Who was the writer of 'Hind Swaraj'?",
        "question_hi": "'हिंद स्वराज' के लेखक कौन थे?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Rabindranath Tagore"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "रवींद्रनाथ ठाकुर"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "subject": "Social Science"
      },
      {
        "num": 2,
        "question_en": "When was the Non-Cooperation Movement launched?",
        "question_hi": "असहयोग आंदोलन कब शुरू हुआ था?",
        "options_en": ["1920", "1919", "1930", "1942"],
        "options_hi": ["1920", "1919", "1930", "1942"],
        "answer_en": "1920",
        "answer_hi": "1920",
        "subject": "Social Science"
      },
      {
        "num": 3,
        "question_en": "Which Act gave India a federal structure?",
        "question_hi": "किस अधिनियम ने भारत को संघीय संरचना प्रदान की?",
        "options_en": ["Government of India Act 1935", "Indian Councils Act 1909", "Rowlatt Act", "Regulating Act"],
        "options_hi": ["भारत सरकार अधिनियम 1935", "भारतीय परिषद अधिनियम 1909", "रॉलेट अधिनियम", "नियामक अधिनियम"],
        "answer_en": "Government of India Act 1935",
        "answer_hi": "भारत सरकार अधिनियम 1935",
        "subject": "Social Science"
      },
      {
        "num": 4,
        "question_en": "Which one of the following is a renewable resource?",
        "question_hi": "निम्नलिखित में से कौन सा नवीकरणीय संसाधन है?",
        "options_en": ["Solar energy", "Coal", "Petroleum", "Natural gas"],
        "options_hi": ["सौर ऊर्जा", "कोयला", "पेट्रोलियम", "प्राकृतिक गैस"],
        "answer_en": "Solar energy",
        "answer_hi": "सौर ऊर्जा",
        "subject": "Social Science"
      },
      {
        "num": 5,
        "question_en": "Which country is the largest producer of rice?",
        "question_hi": "चावल का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["China", "India", "Indonesia", "Bangladesh"],
        "options_hi": ["चीन", "भारत", "इंडोनेशिया", "बांग्लादेश"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "subject": "Social Science"
      },
      {
        "num": 6,
        "question_en": "Which river is known as the 'Dakshin Ganga'?",
        "question_hi": "कौन सी नदी 'दक्षिण गंगा' के नाम से जानी जाती है?",
        "options_en": ["Godavari", "Krishna", "Narmada", "Kaveri"],
        "options_hi": ["गोदावरी", "कृष्णा", "नर्मदा", "कावेरी"],
        "answer_en": "Godavari",
        "answer_hi": "गोदावरी",
        "subject": "Social Science"
      },
      {
        "num": 7,
        "question_en": "What is the full form of GDP?",
        "question_hi": "GDP का पूरा नाम क्या है?",
        "options_en": ["Gross Domestic Product", "Global Domestic Product", "Gross Development Product", "Great Domestic Product"],
        "options_hi": ["ग्रॉस डोमेस्टिक प्रोडक्ट", "ग्लोबल डोमेस्टिक प्रोडक्ट", "ग्रॉस डेवलपमेंट प्रोडक्ट", "ग्रेट डोमेस्टिक प्रोडक्ट"],
        "answer_en": "Gross Domestic Product",
        "answer_hi": "ग्रॉस डोमेस्टिक प्रोडक्ट",
        "subject": "Social Science"
      },
      {
        "num": 8,
        "question_en": "Which industry is known as the backbone of modern industry?",
        "question_hi": "कौन सी उद्योग आधुनिक उद्योग की रीढ़ की हड्डी कहलाती है?",
        "options_en": ["Iron and Steel Industry", "Cotton Industry", "Jute Industry", "Sugar Industry"],
        "options_hi": ["लोहा और इस्पात उद्योग", "कपास उद्योग", "जूट उद्योग", "चीनी उद्योग"],
        "answer_en": "Iron and Steel Industry",
        "answer_hi": "लोहा और इस्पात उद्योग",
        "subject": "Social Science"
      },
      {
        "num": 9,
        "question_en": "Which system divides the powers between central and state governments?",
        "question_hi": "कौन सी प्रणाली केंद्र और राज्य सरकारों के बीच शक्तियों का विभाजन करती है?",
        "options_en": ["Federal system", "Unitary system", "Monarchy", "Parliamentary system"],
        "options_hi": ["संघीय प्रणाली", "एकात्मक प्रणाली", "राजशाही", "संसदीय प्रणाली"],
        "answer_en": "Federal system",
        "answer_hi": "संघीय प्रणाली",
        "subject": "Social Science"
      },
      {
        "num": 10,
        "question_en": "Which state has the highest literacy rate in India?",
        "question_hi": "भारत में सबसे अधिक साक्षरता दर वाला राज्य कौन सा है?",
        "options_en": ["Kerala", "Tamil Nadu", "Maharashtra", "Punjab"],
        "options_hi": ["केरल", "तमिलनाडु", "महाराष्ट्र", "पंजाब"],
        "answer_en": "Kerala",
        "answer_hi": "केरल",
        "subject": "Social Science"
      },
      {
        "num": 11,
        "question_en": "Which sector is also known as the service sector?",
        "question_hi": "कौन सा क्षेत्र सेवा क्षेत्र के रूप में जाना जाता है?",
        "options_en": ["Tertiary", "Primary", "Secondary", "Quaternary"],
        "options_hi": ["तृतीयक", "प्राथमिक", "द्वितीयक", "चतुर्थक"],
        "answer_en": "Tertiary",
        "answer_hi": "तृतीयक",
        "subject": "Social Science"
      },
      {
        "num": 12,
        "question_en": "Which is the highest peak in India?",
        "question_hi": "भारत में सबसे ऊँची चोटी कौन सी है?",
        "options_en": ["Kanchenjunga", "Mount Everest", "Nanda Devi", "Kamet"],
        "options_hi": ["कंचनजंगा", "माउंट एवरेस्ट", "नंदा देवी", "कामेत"],
        "answer_en": "Kanchenjunga",
        "answer_hi": "कंचनजंगा",
        "subject": "Social Science"
      },
      {
        "num": 13,
        "question_en": "Which dam is built on the Sutlej river?",
        "question_hi": "सतलुज नदी पर कौन सा बांध बना है?",
        "options_en": ["Bhakra Nangal", "Tehri", "Hirakud", "Sardar Sarovar"],
        "options_hi": ["भाखड़ा नांगल", "टिहरी", "हीराकुंड", "सरदार सरोवर"],
        "answer_en": "Bhakra Nangal",
        "answer_hi": "भाखड़ा नांगल",
        "subject": "Social Science"
      },
      {
        "num": 14,
        "question_en": "Which state is the leading producer of sugarcane in India?",
        "question_hi": "भारत में गन्ने का प्रमुख उत्पादक राज्य कौन सा है?",
        "options_en": ["Uttar Pradesh", "Punjab", "Bihar", "Maharashtra"],
        "options_hi": ["उत्तर प्रदेश", "पंजाब", "बिहार", "महाराष्ट्र"],
        "answer_en": "Uttar Pradesh",
        "answer_hi": "उत्तर प्रदेश",
        "subject": "Social Science"
      },
      {
        "num": 15,
        "question_en": "Which party led the freedom struggle in Vietnam?",
        "question_hi": "वियतनाम में स्वतंत्रता संग्राम का नेतृत्व किस पार्टी ने किया?",
        "options_en": ["Communist Party", "Nationalist Party", "Democratic Party", "Socialist Party"],
        "options_hi": ["कम्युनिस्ट पार्टी", "नेशनलिस्ट पार्टी", "डेमोक्रेटिक पार्टी", "सोशलिस्ट पार्टी"],
        "answer_en": "Communist Party",
        "answer_hi": "कम्युनिस्ट पार्टी",
        "subject": "Social Science"
      },
      {
        "num": 16,
        "question_en": "Who elects the President of India?",
        "question_hi": "भारत के राष्ट्रपति का निर्वाचन कौन करता है?",
        "options_en": ["Electoral College", "Prime Minister", "Lok Sabha", "Rajya Sabha"],
        "options_hi": ["निर्वाचक मंडल", "प्रधानमंत्री", "लोकसभा", "राज्यसभा"],
        "answer_en": "Electoral College",
        "answer_hi": "निर्वाचक मंडल",
        "subject": "Social Science"
      },
      {
        "num": 17,
        "question_en": "What type of government is there in India?",
        "question_hi": "भारत में किस प्रकार की सरकार है?",
        "options_en": ["Democratic Republic", "Monarchy", "Theocracy", "Aristocracy"],
        "options_hi": ["लोकतांत्रिक गणराज्य", "राजशाही", "धर्मतंत्र", "अभिजात वर्ग तंत्र"],
        "answer_en": "Democratic Republic",
        "answer_hi": "लोकतांत्रिक गणराज्य",
        "subject": "Social Science"
      },
      {
        "num": 18,
        "question_en": "Which continent has the highest population density?",
        "question_hi": "किस महाद्वीप में जनसंख्या घनत्व सबसे अधिक है?",
        "options_en": ["Asia", "Europe", "Africa", "South America"],
        "options_hi": ["एशिया", "यूरोप", "अफ्रीका", "दक्षिण अमेरिका"],
        "answer_en": "Asia",
        "answer_hi": "एशिया",
        "subject": "Social Science"
      },
      {
        "num": 19,
        "question_en": "Which revolution is related to food production?",
        "question_hi": "कौन सा क्रांति खाद्य उत्पादन से संबंधित है?",
        "options_en": ["Green Revolution", "White Revolution", "Blue Revolution", "Yellow Revolution"],
        "options_hi": ["हरित क्रांति", "श्वेत क्रांति", "नीली क्रांति", "पीली क्रांति"],
        "answer_en": "Green Revolution",
        "answer_hi": "हरित क्रांति",
        "subject": "Social Science"
      },
      {
        "num": 20,
        "question_en": "Which gas is responsible for global warming?",
        "question_hi": "वैश्विक तापमान वृद्धि के लिए कौन सी गैस उत्तरदायी है?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "subject": "Social Science"
      },
      {
        "num": 21,
        "question_en": "Which organization is responsible for conducting elections in India?",
        "question_hi": "भारत में चुनाव कराने की जिम्मेदार संस्था कौन सी है?",
        "options_en": ["Election Commission", "Supreme Court", "Parliament", "President"],
        "options_hi": ["चुनाव आयोग", "सुप्रीम कोर्ट", "संसद", "राष्ट्रपति"],
        "answer_en": "Election Commission",
        "answer_hi": "चुनाव आयोग",
        "subject": "Social Science"
      },
      {
        "num": 22,
        "question_en": "What is the tenure of the Lok Sabha?",
        "question_hi": "लोकसभा का कार्यकाल कितना होता है?",
        "options_en": ["5 years", "6 years", "4 years", "7 years"],
        "options_hi": ["5 वर्ष", "6 वर्ष", "4 वर्ष", "7 वर्ष"],
        "answer_en": "5 years",
        "answer_hi": "5 वर्ष",
        "subject": "Social Science"
      },
      {
        "num": 23,
        "question_en": "Which of the following is a major metallic mineral?",
        "question_hi": "निम्नलिखित में से कौन सा एक प्रमुख धात्विक खनिज है?",
        "options_en": ["Iron ore", "Limestone", "Gypsum", "Coal"],
        "options_hi": ["लौह अयस्क", "चूना पत्थर", "जिप्सम", "कोयला"],
        "answer_en": "Iron ore",
        "answer_hi": "लौह अयस्क",
        "subject": "Social Science"
      },
      {
        "num": 24,
        "question_en": "Which of the following is a fossil fuel?",
        "question_hi": "निम्नलिखित में से कौन एक जीवाश्म ईंधन है?",
        "options_en": ["Petroleum", "Solar energy", "Wind energy", "Hydel power"],
        "options_hi": ["पेट्रोलियम", "सौर ऊर्जा", "पवन ऊर्जा", "जल विद्युत"],
        "answer_en": "Petroleum",
        "answer_hi": "पेट्रोलियम",
        "subject": "Social Science"
      },
      {
        "num": 25,
        "question_en": "Who is the head of the state government?",
        "question_hi": "राज्य सरकार का प्रमुख कौन होता है?",
        "options_en": ["Chief Minister", "Governor", "President", "Speaker"],
        "options_hi": ["मुख्यमंत्री", "राज्यपाल", "राष्ट्रपति", "विधानसभा अध्यक्ष"],
        "answer_en": "Chief Minister",
        "answer_hi": "मुख्यमंत्री",
        "subject": "Social Science"
      },
      {
        "num": 26,
        "question_en": "Which one of the following is not a function of the government?",
        "question_hi": "निम्नलिखित में से कौन सरकार का कार्य नहीं है?",
        "options_en": ["Organizing festivals", "Making laws", "Maintaining law and order", "Providing education"],
        "options_hi": ["त्योहारों का आयोजन", "कानून बनाना", "कानून और व्यवस्था बनाए रखना", "शिक्षा प्रदान करना"],
        "answer_en": "Organizing festivals",
        "answer_hi": "त्योहारों का आयोजन",
        "subject": "Social Science"
      },
      {
        "num": 27,
        "question_en": "Which city is known as the Manchester of India?",
        "question_hi": "भारत का मैनचेस्टर किस शहर को कहा जाता है?",
        "options_en": ["Ahmedabad", "Mumbai", "Delhi", "Kolkata"],
        "options_hi": ["अहमदाबाद", "मुंबई", "दिल्ली", "कोलकाता"],
        "answer_en": "Ahmedabad",
        "answer_hi": "अहमदाबाद",
        "subject": "Social Science"
      },
      {
        "num": 28,
        "question_en": "Which one of the following is a biodegradable waste?",
        "question_hi": "निम्नलिखित में से कौन सा जैविक अपशिष्ट है?",
        "options_en": ["Vegetable peels", "Plastic", "Glass", "Iron"],
        "options_hi": ["सब्जियों के छिलके", "प्लास्टिक", "काँच", "लोहा"],
        "answer_en": "Vegetable peels",
        "answer_hi": "सब्जियों के छिलके",
        "subject": "Social Science"
      },
      {
        "num": 29,
        "question_en": "Which revolution is related to milk production?",
        "question_hi": "कौन सी क्रांति दूध उत्पादन से संबंधित है?",
        "options_en": ["White Revolution", "Green Revolution", "Blue Revolution", "Yellow Revolution"],
        "options_hi": ["श्वेत क्रांति", "हरित क्रांति", "नीली क्रांति", "पीली क्रांति"],
        "answer_en": "White Revolution",
        "answer_hi": "श्वेत क्रांति",
        "subject": "Social Science"
      },
      {
        "num": 30,
        "question_en": "Which sector includes farming and fishing?",
        "question_hi": "कृषि और मछली पालन किस क्षेत्र में आते हैं?",
        "options_en": ["Primary sector", "Secondary sector", "Tertiary sector", "Informal sector"],
        "options_hi": ["प्राथमिक क्षेत्र", "द्वितीयक क्षेत्र", "तृतीयक क्षेत्र", "अनौपचारिक क्षेत्र"],
        "answer_en": "Primary sector",
        "answer_hi": "प्राथमिक क्षेत्र",
        "subject": "Social Science"
      },
      {
        "num": 31,
        "question_en": "Which country is the largest democracy in the world?",
        "question_hi": "विश्व का सबसे बड़ा लोकतंत्र कौन सा देश है?",
        "options_en": ["India", "USA", "UK", "China"],
        "options_hi": ["भारत", "अमेरिका", "ब्रिटेन", "चीन"],
        "answer_en": "India",
        "answer_hi": "भारत",
        "subject": "Social Science"
      },
      {
        "num": 32,
        "question_en": "Which Indian leader is known as the Iron Man of India?",
        "question_hi": "भारत के लौह पुरुष किसे कहा जाता है?",
        "options_en": ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Mahatma Gandhi", "Rajendra Prasad"],
        "options_hi": ["सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "महात्मा गांधी", "राजेंद्र प्रसाद"],
        "answer_en": "Sardar Vallabhbhai Patel",
        "answer_hi": "सरदार वल्लभभाई पटेल",
        "subject": "Social Science"
      },
      {
        "num": 33,
        "question_en": "What is the minimum age to vote in India?",
        "question_hi": "भारत में मतदान करने की न्यूनतम आयु क्या है?",
        "options_en": ["18 years", "21 years", "16 years", "25 years"],
        "options_hi": ["18 वर्ष", "21 वर्ष", "16 वर्ष", "25 वर्ष"],
        "answer_en": "18 years",
        "answer_hi": "18 वर्ष",
        "subject": "Social Science"
      },
      {
        "num": 34,
        "question_en": "Which is the longest river in India?",
        "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
        "options_hi": ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "subject": "Social Science"
      },
      {
        "num": 35,
        "question_en": "Which soil is best for cotton cultivation?",
        "question_hi": "कपास की खेती के लिए कौन सी मिट्टी उपयुक्त है?",
        "options_en": ["Black soil", "Red soil", "Alluvial soil", "Laterite soil"],
        "options_hi": ["काली मिट्टी", "लाल मिट्टी", "जलोढ़ मिट्टी", "लेटराइट मिट्टी"],
        "answer_en": "Black soil",
        "answer_hi": "काली मिट्टी",
        "subject": "Social Science"
      },
      {
        "num": 36,
        "question_en": "What does RTI stand for?",
        "question_hi": "RTI का पूर्ण रूप क्या है?",
        "options_en": ["Right to Information", "Right to Income", "Right to Investment", "Right to Insurance"],
        "options_hi": ["सूचना का अधिकार", "आय का अधिकार", "निवेश का अधिकार", "बीमा का अधिकार"],
        "answer_en": "Right to Information",
        "answer_hi": "सूचना का अधिकार",
        "subject": "Social Science"
      },
      {
        "num": 37,
        "question_en": "In which year did India become a republic?",
        "question_hi": "भारत कब गणराज्य बना?",
        "options_en": ["1950", "1947", "1949", "1952"],
        "options_hi": ["1950", "1947", "1949", "1952"],
        "answer_en": "1950",
        "answer_hi": "1950",
        "subject": "Social Science"
      },
      {
        "num": 38,
        "question_en": "Which is the apex court of India?",
        "question_hi": "भारत की सर्वोच्च न्यायालय कौन सी है?",
        "options_en": ["Supreme Court", "High Court", "District Court", "Civil Court"],
        "options_hi": ["सुप्रीम कोर्ट", "हाई कोर्ट", "जिला न्यायालय", "सिविल कोर्ट"],
        "answer_en": "Supreme Court",
        "answer_hi": "सुप्रीम कोर्ट",
        "subject": "Social Science"
      },
      {
        "num": 39,
        "question_en": "Which of the following is a Union Territory of India?",
        "question_hi": "निम्न में से कौन भारत का एक केंद्रशासित प्रदेश है?",
        "options_en": ["Delhi", "Uttar Pradesh", "Bihar", "Rajasthan"],
        "options_hi": ["दिल्ली", "उत्तर प्रदेश", "बिहार", "राजस्थान"],
        "answer_en": "Delhi",
        "answer_hi": "दिल्ली",
        "subject": "Social Science"
      },
      {
        "num": 40,
        "question_en": "What is the capital of Jharkhand?",
        "question_hi": "झारखंड की राजधानी क्या है?",
        "options_en": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
        "options_hi": ["रांची", "जमशेदपुर", "धनबाद", "बोकारो"],
        "answer_en": "Ranchi",
        "answer_hi": "रांची",
        "subject": "Social Science"
      },
      {
        "num": 41,
        "question_en": "Who was the founder of the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस के संस्थापक कौन थे?",
        "options_en": ["A.O. Hume", "Mahatma Gandhi", "Dadabhai Naoroji", "Sardar Patel"],
        "options_hi": ["ए. ओ. ह्यूम", "महात्मा गांधी", "दादाभाई नौरोजी", "सरदार पटेल"],
        "answer_en": "A.O. Hume",
        "answer_hi": "ए. ओ. ह्यूम",
        "subject": "Social Science"
      },
      {
        "num": 42,
        "question_en": "What was the main objective of the Non-Cooperation Movement?",
        "question_hi": "असहयोग आंदोलन का मुख्य उद्देश्य क्या था?",
        "options_en": ["To gain independence", "To get Dominion Status", "To support British rule", "To increase taxes"],
        "options_hi": ["स्वतंत्रता प्राप्त करना", "डोमिनियन स्टेटस प्राप्त करना", "ब्रिटिश शासन का समर्थन करना", "कर बढ़ाना"],
        "answer_en": "To gain independence",
        "answer_hi": "स्वतंत्रता प्राप्त करना",
        "subject": "Social Science"
      },
      {
        "num": 43,
        "question_en": "Which soil is best for cotton cultivation?",
        "question_hi": "कपास की खेती के लिए कौन सी मिट्टी सबसे उपयुक्त है?",
        "options_en": ["Black soil", "Red soil", "Alluvial soil", "Laterite soil"],
        "options_hi": ["काली मिट्टी", "लाल मिट्टी", "जलोढ़ मिट्टी", "लेटराइट मिट्टी"],
        "answer_en": "Black soil",
        "answer_hi": "काली मिट्टी",
        "subject": "Social Science"
      },
      {
        "num": 44,
        "question_en": "Which is the oldest form of currency?",
        "question_hi": "मुद्रा का सबसे पुराना रूप कौन सा है?",
        "options_en": ["Barter system", "Coins", "Paper money", "Plastic money"],
        "options_hi": ["विनिमय प्रणाली", "सिक्के", "कागजी मुद्रा", "प्लास्टिक मनी"],
        "answer_en": "Barter system",
        "answer_hi": "विनिमय प्रणाली",
        "subject": "Social Science"
      },
      {
        "num": 45,
        "question_en": "What is the full form of GDP?",
        "question_hi": "GDP का पूरा नाम क्या है?",
        "options_en": ["Gross Domestic Product", "Gross District Product", "General Domestic Product", "Global Domestic Product"],
        "options_hi": ["सकल घरेलू उत्पाद", "सकल जिला उत्पाद", "सामान्य घरेलू उत्पाद", "वैश्विक घरेलू उत्पाद"],
        "answer_en": "Gross Domestic Product",
        "answer_hi": "सकल घरेलू उत्पाद",
        "subject": "Social Science"
      },
      {
        "num": 46,
        "question_en": "Which movement was launched after the failure of the Simon Commission?",
        "question_hi": "साइमन कमीशन की असफलता के बाद कौन सा आंदोलन शुरू किया गया था?",
        "options_en": ["Civil Disobedience Movement", "Quit India Movement", "Non-Cooperation Movement", "Swadeshi Movement"],
        "options_hi": ["सविनय अवज्ञा आंदोलन", "भारत छोड़ो आंदोलन", "असहयोग आंदोलन", "स्वदेशी आंदोलन"],
        "answer_en": "Civil Disobedience Movement",
        "answer_hi": "सविनय अवज्ञा आंदोलन",
        "subject": "Social Science"
      },
      {
        "num": 47,
        "question_en": "Which state is the leading producer of sugarcane in India?",
        "question_hi": "भारत में गन्ने का प्रमुख उत्पादक राज्य कौन सा है?",
        "options_en": ["Uttar Pradesh", "Punjab", "Maharashtra", "Bihar"],
        "options_hi": ["उत्तर प्रदेश", "पंजाब", "महाराष्ट्र", "बिहार"],
        "answer_en": "Uttar Pradesh",
        "answer_hi": "उत्तर प्रदेश",
        "subject": "Social Science"
      },
      {
        "num": 48,
        "question_en": "What is the meaning of the term 'Federation'?",
        "question_hi": "'संघवाद' शब्द का क्या अर्थ है?",
        "options_en": ["Division of powers", "Monarchy", "Unitary Government", "Military rule"],
        "options_hi": ["शक्तियों का विभाजन", "राजशाही", "एकात्मक सरकार", "सैन्य शासन"],
        "answer_en": "Division of powers",
        "answer_hi": "शक्तियों का विभाजन",
        "subject": "Social Science"
      },
      {
        "num": 49,
        "question_en": "Which is the apex body in the Panchayati Raj system?",
        "question_hi": "पंचायती राज प्रणाली में सर्वोच्च निकाय कौन सा है?",
        "options_en": ["Zila Parishad", "Gram Sabha", "Panchayat Samiti", "Village Panchayat"],
        "options_hi": ["जिला परिषद", "ग्राम सभा", "पंचायत समिति", "ग्राम पंचायत"],
        "answer_en": "Zila Parishad",
        "answer_hi": "जिला परिषद",
        "subject": "Social Science"
      },
      {
        "num": 50,
        "question_en": "Which is the main cause of soil erosion?",
        "question_hi": "मृदा अपरदन का मुख्य कारण क्या है?",
        "options_en": ["Deforestation", "Afforestation", "Terrace farming", "Contour ploughing"],
        "options_hi": ["वनों की कटाई", "पुनर्वनीकरण", "सीढ़ी खेती", "कॉन्टूर हल चलाना"],
        "answer_en": "Deforestation",
        "answer_hi": "वनों की कटाई",
        "subject": "Social Science"
      },
      {
        "num": 51,
        "question_en": "What does 'Democracy' mean?",
        "question_hi": "'लोकतंत्र' का क्या अर्थ है?",
        "options_en": ["Rule by the people", "Rule by one", "Rule by army", "Rule by king"],
        "options_hi": ["जनता का शासन", "एक व्यक्ति का शासन", "सेना का शासन", "राजा का शासन"],
        "answer_en": "Rule by the people",
        "answer_hi": "जनता का शासन",
        "subject": "Social Science"
      },
      {
        "num": 52,
        "question_en": "Which river is called the 'Sorrow of Bengal'?",
        "question_hi": "किस नदी को 'बंगाल का शोक' कहा जाता है?",
        "options_en": ["Damodar", "Ganga", "Brahmaputra", "Hooghly"],
        "options_hi": ["दामोदर", "गंगा", "ब्रह्मपुत्र", "हुगली"],
        "answer_en": "Damodar",
        "answer_hi": "दामोदर",
        "subject": "Social Science"
      },
      {
        "num": 53,
        "question_en": "Which mineral is used for generating nuclear energy?",
        "question_hi": "नाभिकीय ऊर्जा उत्पन्न करने के लिए कौन सा खनिज प्रयोग किया जाता है?",
        "options_en": ["Uranium", "Coal", "Iron", "Copper"],
        "options_hi": ["यूरेनियम", "कोयला", "लोहा", "तांबा"],
        "answer_en": "Uranium",
        "answer_hi": "यूरेनियम",
        "subject": "Social Science"
      },
      {
        "num": 54,
        "question_en": "Which city is known as the 'Manchester of India'?",
        "question_hi": "भारत का 'मैनचेस्टर' किसे कहा जाता है?",
        "options_en": ["Ahmedabad", "Mumbai", "Kolkata", "Delhi"],
        "options_hi": ["अहमदाबाद", "मुंबई", "कोलकाता", "दिल्ली"],
        "answer_en": "Ahmedabad",
        "answer_hi": "अहमदाबाद",
        "subject": "Social Science"
      },
      {
        "num": 55,
        "question_en": "Which is a biodegradable waste?",
        "question_hi": "कौन सा अपशिष्ट बायोडिग्रेडेबल है?",
        "options_en": ["Vegetable peels", "Plastic", "Glass", "Metal"],
        "options_hi": ["सब्जियों के छिलके", "प्लास्टिक", "कांच", "धातु"],
        "answer_en": "Vegetable peels",
        "answer_hi": "सब्जियों के छिलके",
        "subject": "Social Science"
      },
      {
        "num": 56,
        "question_en": "Which Indian leader gave the slogan 'Do or Die'?",
        "question_hi": "‘करो या मरो’ का नारा किस भारतीय नेता ने दिया?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "subject": "Social Science"
      },
      {
        "num": 57,
        "question_en": "What is the main occupation in India?",
        "question_hi": "भारत में मुख्य व्यवसाय क्या है?",
        "options_en": ["Agriculture", "Industry", "Trade", "Services"],
        "options_hi": ["कृषि", "उद्योग", "व्यापार", "सेवाएँ"],
        "answer_en": "Agriculture",
        "answer_hi": "कृषि",
        "subject": "Social Science"
      },
      {
        "num": 58,
        "question_en": "Which state in India has the highest literacy rate?",
        "question_hi": "भारत में साक्षरता दर सबसे अधिक किस राज्य में है?",
        "options_en": ["Kerala", "Bihar", "Tamil Nadu", "Punjab"],
        "options_hi": ["केरल", "बिहार", "तमिलनाडु", "पंजाब"],
        "answer_en": "Kerala",
        "answer_hi": "केरल",
        "subject": "Social Science"
      },
      {
        "num": 59,
        "question_en": "Which industry uses limestone as a raw material?",
        "question_hi": "कौन सी उद्योग चूना पत्थर को कच्चे माल के रूप में उपयोग करती है?",
        "options_en": ["Cement", "Textile", "Sugar", "Paper"],
        "options_hi": ["सीमेंट", "वस्त्र", "चीनी", "कागज"],
        "answer_en": "Cement",
        "answer_hi": "सीमेंट",
        "subject": "Social Science"
      },
      {
        "num": 60,
        "question_en": "Which sector includes services like banking and transport?",
        "question_hi": "कौन सा क्षेत्र बैंकिंग और परिवहन जैसी सेवाओं को शामिल करता है?",
        "options_en": ["Tertiary sector", "Primary sector", "Secondary sector", "Quaternary sector"],
        "options_hi": ["तृतीयक क्षेत्र", "प्राथमिक क्षेत्र", "द्वितीयक क्षेत्र", "चतुर्थक क्षेत्र"],
        "answer_en": "Tertiary sector",
        "answer_hi": "तृतीयक क्षेत्र",
        "subject": "Social Science"
      },
      {
        "num": 61,
        "question_en": "When was the Constitution of India adopted?",
        "question_hi": "भारत का संविधान कब अपनाया गया?",
        "options_en": ["26 January 1950", "15 August 1947", "26 November 1949", "2 October 1947"],
        "options_hi": ["26 जनवरी 1950", "15 अगस्त 1947", "26 नवंबर 1949", "2 अक्टूबर 1947"],
        "answer_en": "26 November 1949",
        "answer_hi": "26 नवंबर 1949",
        "subject": "Social Science"
      },
      {
        "num": 62,
        "question_en": "Which organ of the government is responsible for making laws?",
        "question_hi": "सरकार का कौन सा अंग कानून बनाता है?",
        "options_en": ["Legislature", "Executive", "Judiciary", "Bureaucracy"],
        "options_hi": ["विधायिका", "कार्यपालिका", "न्यायपालिका", "नौकरशाही"],
        "answer_en": "Legislature",
        "answer_hi": "विधायिका",
        "subject": "Social Science"
      },
      {
        "num": 63,
        "question_en": "Who is the head of the state government?",
        "question_hi": "राज्य सरकार का प्रमुख कौन होता है?",
        "options_en": ["Chief Minister", "Governor", "President", "Prime Minister"],
        "options_hi": ["मुख्यमंत्री", "राज्यपाल", "राष्ट्रपति", "प्रधानमंत्री"],
        "answer_en": "Chief Minister",
        "answer_hi": "मुख्यमंत्री",
        "subject": "Social Science"
      },
      {
        "num": 64,
        "question_en": "Which body conducts elections in India?",
        "question_hi": "भारत में चुनाव कौन कराता है?",
        "options_en": ["Election Commission", "Parliament", "Supreme Court", "President"],
        "options_hi": ["निर्वाचन आयोग", "संसद", "सुप्रीम कोर्ट", "राष्ट्रपति"],
        "answer_en": "Election Commission",
        "answer_hi": "निर्वाचन आयोग",
        "subject": "Social Science"
      },
      {
        "num": 65,
        "question_en": "Which natural resource is non-renewable?",
        "question_hi": "कौन सा प्राकृतिक संसाधन नवीकरणीय नहीं है?",
        "options_en": ["Coal", "Sunlight", "Wind", "Water"],
        "options_hi": ["कोयला", "सूर्य का प्रकाश", "पवन", "जल"],
        "answer_en": "Coal",
        "answer_hi": "कोयला",
        "subject": "Social Science"
      },
      {
        "num": 66,
        "question_en": "What is the main reason for unemployment in India?",
        "question_hi": "भारत में बेरोजगारी का मुख्य कारण क्या है?",
        "options_en": ["Overpopulation", "Foreign rule", "Lack of roads", "Less rain"],
        "options_hi": ["जनसंख्या वृद्धि", "विदेशी शासन", "सड़क की कमी", "कम वर्षा"],
        "answer_en": "Overpopulation",
        "answer_hi": "जनसंख्या वृद्धि",
        "subject": "Social Science"
      },
      {
        "num": 67,
        "question_en": "Which type of farming is practiced in areas with less rainfall?",
        "question_hi": "कम वर्षा वाले क्षेत्रों में किस प्रकार की खेती की जाती है?",
        "options_en": ["Dry farming", "Wet farming", "Shifting agriculture", "Plantation farming"],
        "options_hi": ["शुष्क खेती", "सिंचित खेती", "झूम खेती", "बागान खेती"],
        "answer_en": "Dry farming",
        "answer_hi": "शुष्क खेती",
        "subject": "Social Science"
      },
      {
        "num": 68,
        "question_en": "What is the capital of Jharkhand?",
        "question_hi": "झारखंड की राजधानी क्या है?",
        "options_en": ["Ranchi", "Patna", "Jamshedpur", "Dhanbad"],
        "options_hi": ["रांची", "पटना", "जमशेदपुर", "धनबाद"],
        "answer_en": "Ranchi",
        "answer_hi": "रांची",
        "subject": "Social Science"
      },
      {
        "num": 69,
        "question_en": "Which river is known as the 'Dakshin Ganga'?",
        "question_hi": "'दक्षिण गंगा' किस नदी को कहा जाता है?",
        "options_en": ["Godavari", "Krishna", "Narmada", "Cauvery"],
        "options_hi": ["गोदावरी", "कृष्णा", "नर्मदा", "कावेरी"],
        "answer_en": "Godavari",
        "answer_hi": "गोदावरी",
        "subject": "Social Science"
      },
      {
        "num": 70,
        "question_en": "Who was the first Prime Minister of independent India?",
        "question_hi": "स्वतंत्र भारत के पहले प्रधानमंत्री कौन थे?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Rajendra Prasad"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार पटेल", "राजेन्द्र प्रसाद"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "subject": "Social Science"
      },
      {
        "num": 71,
        "question_en": "Which Indian state has the largest area?",
        "question_hi": "भारत का सबसे बड़ा राज्य क्षेत्रफल की दृष्टि से कौन सा है?",
        "options_en": ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
        "options_hi": ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "subject": "Social Science"
      },
      {
        "num": 72,
        "question_en": "Which organization publishes the Human Development Report?",
        "question_hi": "मानव विकास रिपोर्ट किस संस्था द्वारा प्रकाशित की जाती है?",
        "options_en": ["UNDP", "WHO", "WTO", "IMF"],
        "options_hi": ["यूएनडीपी", "डब्ल्यूएचओ", "डब्ल्यूटीओ", "आईएमएफ"],
        "answer_en": "UNDP",
        "answer_hi": "यूएनडीपी",
        "subject": "Social Science"
      },
      {
        "num": 73,
        "question_en": "Which sector is also known as the service sector?",
        "question_hi": "कौन सा क्षेत्र सेवा क्षेत्र के नाम से जाना जाता है?",
        "options_en": ["Tertiary", "Primary", "Secondary", "Quaternary"],
        "options_hi": ["तृतीयक", "प्राथमिक", "द्वितीयक", "चतुर्थक"],
        "answer_en": "Tertiary",
        "answer_hi": "तृतीयक",
        "subject": "Social Science"
      },
      {
        "num": 74,
        "question_en": "Which is the most populated country in the world?",
        "question_hi": "दुनिया का सबसे अधिक जनसंख्या वाला देश कौन सा है?",
        "options_en": ["India", "China", "USA", "Indonesia"],
        "options_hi": ["भारत", "चीन", "अमेरिका", "इंडोनेशिया"],
        "answer_en": "India",
        "answer_hi": "भारत",
        "subject": "Social Science"
      },
      {
        "num": 75,
        "question_en": "Which of the following is a feature of democracy?",
        "question_hi": "निम्नलिखित में से कौन लोकतंत्र की विशेषता है?",
        "options_en": ["Universal adult franchise", "Monarchy", "One-party rule", "Unelected government"],
        "options_hi": ["सार्वभौमिक वयस्क मताधिकार", "राजशाही", "एकदलीय शासन", "निर्वाचित सरकार नहीं"],
        "answer_en": "Universal adult franchise",
        "answer_hi": "सार्वभौमिक वयस्क मताधिकार",
        "subject": "Social Science"
      },
      {
        "num": 76,
        "question_en": "Which metal is found in bauxite ore?",
        "question_hi": "बॉक्साइट अयस्क में कौन सी धातु पाई जाती है?",
        "options_en": ["Aluminium", "Iron", "Copper", "Zinc"],
        "options_hi": ["एल्युमिनियम", "लोहा", "तांबा", "जिंक"],
        "answer_en": "Aluminium",
        "answer_hi": "एल्युमिनियम",
        "subject": "Social Science"
      },
      {
        "num": 77,
        "question_en": "What does GDP stand for?",
        "question_hi": "GDP का पूरा नाम क्या है?",
        "options_en": ["Gross Domestic Product", "Global Domestic Product", "Gross Development Programme", "General Domestic Production"],
        "options_hi": ["ग्रॉस डोमेस्टिक प्रोडक्ट", "ग्लोबल डोमेस्टिक प्रोडक्ट", "ग्रॉस डेवलपमेंट प्रोग्राम", "जनरल डोमेस्टिक प्रोडक्शन"],
        "answer_en": "Gross Domestic Product",
        "answer_hi": "ग्रॉस डोमेस्टिक प्रोडक्ट",
        "subject": "Social Science"
      },
      {
        "num": 78,
        "question_en": "Who presides over the Lok Sabha?",
        "question_hi": "लोकसभा की अध्यक्षता कौन करता है?",
        "options_en": ["Speaker", "Prime Minister", "President", "Vice President"],
        "options_hi": ["अध्यक्ष", "प्रधानमंत्री", "राष्ट्रपति", "उपराष्ट्रपति"],
        "answer_en": "Speaker",
        "answer_hi": "अध्यक्ष",
        "subject": "Social Science"
      },
      {
        "num": 79,
        "question_en": "Which of the following is a Kharif crop?",
        "question_hi": "निम्नलिखित में से कौन सी खरीफ फसल है?",
        "options_en": ["Rice", "Wheat", "Mustard", "Gram"],
        "options_hi": ["धान", "गेहूं", "सरसों", "चना"],
        "answer_en": "Rice",
        "answer_hi": "धान",
        "subject": "Social Science"
      },
      {
        "num": 80,
        "question_en": "Who appoints the Chief Minister?",
        "question_hi": "मुख्यमंत्री की नियुक्ति कौन करता है?",
        "options_en": ["Governor", "President", "Prime Minister", "Chief Justice"],
        "options_hi": ["राज्यपाल", "राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश"],
        "answer_en": "Governor",
        "answer_hi": "राज्यपाल",
        "subject": "Social Science"
      },
      {
        "num": 81,
        "question_en": "What is the capital of Arunachal Pradesh?",
        "question_hi": "अरुणाचल प्रदेश की राजधानी क्या है?",
        "options_en": ["Itanagar", "Dispur", "Aizawl", "Agartala"],
        "options_hi": ["ईटानगर", "दिसपुर", "आइजोल", "अगरतला"],
        "answer_en": "Itanagar",
        "answer_hi": "ईटानगर",
        "subject": "Social Science"
      },
      {
        "num": 82,
        "question_en": "Which system divides power between central and state governments?",
        "question_hi": "कौन सी प्रणाली केंद्र और राज्य सरकारों के बीच शक्तियों का विभाजन करती है?",
        "options_en": ["Federalism", "Communism", "Monarchy", "Unitary"],
        "options_hi": ["संघवाद", "साम्यवाद", "राजतंत्र", "एकात्मक"],
        "answer_en": "Federalism",
        "answer_hi": "संघवाद",
        "subject": "Social Science"
      },
      {
        "num": 83,
        "question_en": "Which one is not a renewable resource?",
        "question_hi": "निम्नलिखित में से कौन नवीकरणीय संसाधन नहीं है?",
        "options_en": ["Coal", "Solar Energy", "Wind", "Water"],
        "options_hi": ["कोयला", "सौर ऊर्जा", "पवन", "जल"],
        "answer_en": "Coal",
        "answer_hi": "कोयला",
        "subject": "Social Science"
      },
      {
        "num": 84,
        "question_en": "Which of the following is an example of direct tax?",
        "question_hi": "निम्नलिखित में से कौन प्रत्यक्ष कर का उदाहरण है?",
        "options_en": ["Income Tax", "GST", "Sales Tax", "Excise Duty"],
        "options_hi": ["आयकर", "जीएसटी", "बिक्री कर", "उत्पाद शुल्क"],
        "answer_en": "Income Tax",
        "answer_hi": "आयकर",
        "subject": "Social Science"
      },
      {
        "num": 85,
        "question_en": "Which form of government is found in India?",
        "question_hi": "भारत में कौन सा शासन प्रणाली है?",
        "options_en": ["Parliamentary", "Presidential", "Monarchy", "Dictatorship"],
        "options_hi": ["संसदीय", "राष्ट्रपति", "राजशाही", "तानाशाही"],
        "answer_en": "Parliamentary",
        "answer_hi": "संसदीय",
        "subject": "Social Science"
      },
      {
        "num": 86,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Radhakrishnan", "Jawaharlal Nehru", "B. R. Ambedkar"],
        "options_hi": ["डॉ. राजेन्द्र प्रसाद", "डॉ. राधाकृष्णन", "जवाहरलाल नेहरू", "डॉ. भीमराव अंबेडकर"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेन्द्र प्रसाद",
        "subject": "Social Science"
      },
      {
        "num": 87,
        "question_en": "Which is the highest court in India?",
        "question_hi": "भारत की सर्वोच्च अदालत कौन सी है?",
        "options_en": ["Supreme Court", "High Court", "District Court", "Lok Adalat"],
        "options_hi": ["सुप्रीम कोर्ट", "उच्च न्यायालय", "जिला न्यायालय", "लोक अदालत"],
        "answer_en": "Supreme Court",
        "answer_hi": "सुप्रीम कोर्ट",
        "subject": "Social Science"
      },
      {
        "num": 88,
        "question_en": "Which is the main occupation of rural India?",
        "question_hi": "ग्रामीण भारत का मुख्य व्यवसाय क्या है?",
        "options_en": ["Agriculture", "Industry", "Business", "Service"],
        "options_hi": ["कृषि", "उद्योग", "व्यापार", "सेवा"],
        "answer_en": "Agriculture",
        "answer_hi": "कृषि",
        "subject": "Social Science"
      },
      {
        "num": 89,
        "question_en": "When do we celebrate Republic Day?",
        "question_hi": "हम गणतंत्र दिवस कब मनाते हैं?",
        "options_en": ["26 January", "15 August", "2 October", "1 May"],
        "options_hi": ["26 जनवरी", "15 अगस्त", "2 अक्टूबर", "1 मई"],
        "answer_en": "26 January",
        "answer_hi": "26 जनवरी",
        "subject": "Social Science"
      },
      {
        "num": 90,
        "question_en": "Who is known as the Father of the Indian Constitution?",
        "question_hi": "भारतीय संविधान के निर्माता किसे कहा जाता है?",
        "options_en": ["Dr. B. R. Ambedkar", "Mahatma Gandhi", "Nehru", "Rajendra Prasad"],
        "options_hi": ["डॉ. भीमराव अंबेडकर", "महात्मा गांधी", "नेहरू", "राजेन्द्र प्रसाद"],
        "answer_en": "Dr. B. R. Ambedkar",
        "answer_hi": "डॉ. भीमराव अंबेडकर",
        "subject": "Social Science"
      },
      {
        "num": 91,
        "question_en": "Which state is the largest producer of tea in India?",
        "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
        "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
        "answer_en": "Assam",
        "answer_hi": "असम",
        "subject": "Social Science"
      },
      {
        "num": 92,
        "question_en": "In which year was the Right to Information Act passed?",
        "question_hi": "सूचना का अधिकार अधिनियम किस वर्ष पारित हुआ?",
        "options_en": ["2005", "2002", "2000", "2010"],
        "options_hi": ["2005", "2002", "2000", "2010"],
        "answer_en": "2005",
        "answer_hi": "2005",
        "subject": "Social Science"
      },
      {
        "num": 93,
        "question_en": "Which country shares the longest border with India?",
        "question_hi": "भारत की सबसे लंबी सीमा किस देश के साथ लगती है?",
        "options_en": ["Bangladesh", "China", "Pakistan", "Nepal"],
        "options_hi": ["बांग्लादेश", "चीन", "पाकिस्तान", "नेपाल"],
        "answer_en": "Bangladesh",
        "answer_hi": "बांग्लादेश",
        "subject": "Social Science"
      },
      {
        "num": 94,
        "question_en": "What type of government is there in Nepal?",
        "question_hi": "नेपाल में किस प्रकार की सरकार है?",
        "options_en": ["Republic", "Monarchy", "Dictatorship", "Communist"],
        "options_hi": ["गणराज्य", "राजशाही", "तानाशाही", "साम्यवादी"],
        "answer_en": "Republic",
        "answer_hi": "गणराज्य",
        "subject": "Social Science"
      },
      {
        "num": 95,
        "question_en": "Which sector includes manufacturing activities?",
        "question_hi": "कौन सा क्षेत्र निर्माण गतिविधियों को शामिल करता है?",
        "options_en": ["Secondary sector", "Primary sector", "Tertiary sector", "Quinary sector"],
        "options_hi": ["द्वितीयक क्षेत्र", "प्राथमिक क्षेत्र", "तृतीयक क्षेत्र", "पंचम क्षेत्र"],
        "answer_en": "Secondary sector",
        "answer_hi": "द्वितीयक क्षेत्र",
        "subject": "Social Science"
      },
      {
        "num": 96,
        "question_en": "Which of the following is not a pressure group?",
        "question_hi": "निम्नलिखित में से कौन दबाव समूह नहीं है?",
        "options_en": ["BJP", "Trade Union", "Farmers' Association", "Teachers' Union"],
        "options_hi": ["बीजेपी", "श्रम संघ", "किसान संघ", "शिक्षक संघ"],
        "answer_en": "BJP",
        "answer_hi": "बीजेपी",
        "subject": "Social Science"
      },
      {
        "num": 97,
        "question_en": "What is the currency of Japan?",
        "question_hi": "जापान की मुद्रा क्या है?",
        "options_en": ["Yen", "Rupee", "Dollar", "Euro"],
        "options_hi": ["येन", "रुपया", "डॉलर", "यूरो"],
        "answer_en": "Yen",
        "answer_hi": "येन",
        "subject": "Social Science"
      },
      {
        "num": 98,
        "question_en": "Where is the headquarters of the United Nations?",
        "question_hi": "संयुक्त राष्ट्र का मुख्यालय कहाँ है?",
        "options_en": ["New York", "Geneva", "Paris", "London"],
        "options_hi": ["न्यूयॉर्क", "जिनेवा", "पेरिस", "लंदन"],
        "answer_en": "New York",
        "answer_hi": "न्यूयॉर्क",
        "subject": "Social Science"
      },
      {
        "num": 99,
        "question_en": "Which ocean is to the south of India?",
        "question_hi": "भारत के दक्षिण में कौन सा महासागर है?",
        "options_en": ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
        "options_hi": ["हिंद महासागर", "अटलांटिक महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
        "answer_en": "Indian Ocean",
        "answer_hi": "हिंद महासागर",
        "subject": "Social Science"
      },
      {
        "num": 100,
        "question_en": "What is the full form of RTI?",
        "question_hi": "RTI का पूर्ण रूप क्या है?",
        "options_en": ["Right to Information", "Right to Income", "Right to Independence", "Right to Insurance"],
        "options_hi": ["सूचना का अधिकार", "आय का अधिकार", "स्वतंत्रता का अधिकार", "बीमा का अधिकार"],
        "answer_en": "Right to Information",
        "answer_hi": "सूचना का अधिकार",
        "subject": "Social Science"
      }
  
    // Add more questions here...
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
        window.location.href = "/Deshbord/category/test/submit-test.html";
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