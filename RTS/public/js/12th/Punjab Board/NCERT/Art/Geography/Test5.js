const questions = [
    {
        "num": 1,
        "question_en": "What is the capital of India?",
        "question_hi": "भारत की राजधानी क्या है?",
        "options_en": ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        "options_hi": ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
        "answer": "New Delhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which of the following is the longest river in India?",
        "question_hi": "निम्नलिखित में से भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
        "options_hi": ["गंगा", "यमुन", "गोदावरी", "ब्रह्मपुत्र"],
        "answer": "Ganga",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Which country shares the longest border with India?",
        "question_hi": "कौन सा देश भारत के साथ सबसे लंबी सीमा साझा करता है?",
        "options_en": ["China", "Pakistan", "Bangladesh", "Nepal"],
        "options_hi": ["चीन", "पाकिस्तान", "बांग्लादेश", "नेपाल"],
        "answer": "Bangladesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which state is known as the 'Land of Five Rivers'?",
        "question_hi": "किस राज्य को 'पाँच नदियों की भूमि' के नाम से जाना जाता है?",
        "options_en": ["Punjab", "Uttar Pradesh", "Haryana", "Rajasthan"],
        "options_hi": ["पंजाब", "उत्तर प्रदेश", "हरियाणा", "राजस्थान"],
        "answer": "Punjab",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Which of the following is the smallest state in India by area?",
        "question_hi": "निम्नलिखित में से भारत का सबसे छोटा राज्य कौन सा है?",
        "options_en": ["Goa", "Sikkim", "Tripura", "Nagaland"],
        "options_hi": ["गोवा", "सिक्किम", "त्रिपुरा", "नगालैंड"],
        "answer": "Goa",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which state in India has the highest population?",
        "question_hi": "भारत में सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
        "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
        "answer": "Uttar Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which river is known as the 'lifeline of the desert'?",
        "question_hi": "कौन सी नदी को 'रेगिस्तान की जीवनरेखा' कहा जाता है?",
        "options_en": ["Narmada", "Sarasvati", "Ravi", "Luni"],
        "options_hi": ["नर्मदा", "सारस्वती", "रावी", "लूनी"],
        "answer": "Luni",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which of the following is the largest desert in the world?",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Sahara", "Karakum", "Kalahari", "Gobi"],
        "options_hi": ["साहारा", "काराकुम", "कालाहारी", "गोबी"],
        "answer": "Sahara",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Which of the following is a landlocked country?",
        "question_hi": "निम्नलिखित में से कौन सा देश भूमि से घिरा हुआ है?",
        "options_en": ["Nepal", "Bangladesh", "Sri Lanka", "Maldives"],
        "options_hi": ["नेपाल", "बांग्लादेश", "श्री लंका", "मालदीव"],
        "answer": "Nepal",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which state in India is the largest producer of tea?",
        "question_hi": "भारत में सबसे बड़ा चाय उत्पादक राज्य कौन सा है?",
        "options_en": ["Assam", "West Bengal", "Kerala", "Karnataka"],
        "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "कर्नाटक"],
        "answer": "Assam",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which of the following is not a type of farming?",
        "question_hi": "निम्नलिखित में से कौन सा कृषि प्रकार नहीं है?",
        "options_en": ["Subsistence Farming", "Commercial Farming", "Industrial Farming", "Plantation Farming"],
        "options_hi": ["आधारित कृषि", "वाणिज्यिक कृषि", "औद्योगिक कृषि", "बागान कृषि"],
        "answer": "Industrial Farming",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which is the largest river basin in India?",
        "question_hi": "भारत में सबसे बड़ा नदी बेसिन कौन सा है?",
        "options_en": ["Ganga", "Brahmaputra", "Godavari", "Indus"],
        "options_hi": ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "सिंधु"],
        "answer": "Ganga",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which of the following is a characteristic of tropical climate?",
        "question_hi": "निम्नलिखित में से कौन सा उष्णकटिबंधीय जलवायु का लक्षण है?",
        "options_en": ["High temperatures throughout the year", "Cold winters", "Heavy snowfall", "Seasonal droughts"],
        "options_hi": ["साल भर उच्च तापमान", "ठंडी सर्दियाँ", "भारी हिमपात", "मौसमी सूखा"],
        "answer": "High temperatures throughout the year",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which of the following is a primary sector activity?",
        "question_hi": "निम्नलिखित में से कौन सी प्राथमिक क्षेत्र की गतिविधि है?",
        "options_en": ["Mining", "Banking", "Manufacturing", "Services"],
        "options_hi": ["खनन", "बैंकिंग", "निर्माण", "सेवाएँ"],
        "answer": "Mining",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which of the following states has the highest forest cover in India?",
        "question_hi": "भारत में सबसे अधिक वन क्षेत्र किस राज्य में है?",
        "options_en": ["Madhya Pradesh", "Mizoram", "Nagaland", "Uttarakhand"],
        "options_hi": ["मध्य प्रदेश", "मिजोरम", "नागालैंड", "उत्तराखंड"],
        "answer": "Mizoram",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Which of the following is a type of agriculture practiced in India?",
        "question_hi": "भारत में कौन सा कृषि प्रकार प्रचलित है?",
        "options_en": ["Commercial farming", "Intensive farming", "Subsistence farming", "All of the above"],
        "options_hi": ["वाणिज्यिक कृषि", "गहन कृषि", "आधारित कृषि", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which state is known as the 'Land of Rising Sun'?",
        "question_hi": "किस राज्य को 'उदयमान सूर्य की भूमि' के नाम से जाना जाता है?",
        "options_en": ["Arunachal Pradesh", "Sikkim", "Nagaland", "Assam"],
        "options_hi": ["अरुणाचल प्रदेश", "सिक्किम", "नागालैंड", "असम"],
        "answer": "Arunachal Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which of the following is the smallest state in India by population?",
        "question_hi": "भारत का सबसे छोटा राज्य कौन सा है जनसंख्या के हिसाब से?",
        "options_en": ["Sikkim", "Goa", "Nagaland", "Tripura"],
        "options_hi": ["सिक्किम", "गोवा", "नगालैंड", "त्रिपुरा"],
        "answer": "Sikkim",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which of the following is not a part of the Indian Ocean?",
        "question_hi": "निम्नलिखित में से कौन सा भारतीय महासागर का हिस्सा नहीं है?",
        "options_en": ["Arabian Sea", "Bay of Bengal", "Andaman Sea", "Coral Sea"],
        "options_hi": ["अरब सागर", "बंगाल की खाड़ी", "अंडमान सागर", "कोरल सागर"],
        "answer": "Coral Sea",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which of the following countries is not landlocked?",
        "question_hi": "निम्नलिखित में से कौन सा देश भूमि से घिरा हुआ नहीं है?",
        "options_en": ["Nepal", "Sri Lanka", "Bangladesh", "Mongolia"],
        "options_hi": ["नेपाल", "श्री लंका", "बांग्लादेश", "मंगोलिया"],
        "answer": "Sri Lanka",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which of the following is the second largest country in the world by land area?",
        "question_hi": "निम्नलिखित में से कौन सा देश दुनिया में भूमि क्षेत्रफल के हिसाब से दूसरा सबसे बड़ा है?",
        "options_en": ["United States", "China", "Canada", "India"],
        "options_hi": ["संयुक्त राज्य अमेरिका", "चीन", "कनाडा", "भारत"],
        "answer": "Canada",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which of the following is the longest mountain range in the world?",
        "question_hi": "दुनिया का सबसे लंबा पर्वत श्रृंखला कौन सा है?",
        "options_en": ["Himalayas", "Andes", "Rockies", "Alps"],
        "options_hi": ["हिमालय", "आंडीज", "रॉकीज", "आल्प्स"],
        "answer": "Andes",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which of the following is not an ocean?",
        "question_hi": "निम्नलिखित में से कौन सा महासागर नहीं है?",
        "options_en": ["Atlantic", "Pacific", "Indian", "Mediterranean"],
        "options_hi": ["अटलांटिक", "प्रशांत", "भारतीय", "भूमध्यसागर"],
        "answer": "Mediterranean",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which of the following rivers does not flow into the Bay of Bengal?",
        "question_hi": "निम्नलिखित में से कौन सी नदी बंगाल की खाड़ी में नहीं बहती?",
        "options_en": ["Godavari", "Mahanadi", "Krishna", "Narmada"],
        "options_hi": ["गोदावरी", "महानदी", "कृष्णा", "नर्मदा"],
        "answer": "Narmada",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which of the following is the largest state in India by area?",
        "question_hi": "भारत का सबसे बड़ा राज्य कौन सा है क्षेत्रफल के हिसाब से?",
        "options_en": ["Rajasthan", "Uttar Pradesh", "Madhya Pradesh", "Maharashtra"],
        "options_hi": ["राजस्थान", "उत्तर प्रदेश", "मध्य प्रदेश", "महाराष्ट्र"],
        "answer": "Rajasthan",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Which of the following countries is the largest producer of petroleum?",
        "question_hi": "निम्नलिखित में से कौन सा देश सबसे बड़ा पेट्रोलियम उत्पादक है?",
        "options_en": ["USA", "Russia", "Saudi Arabia", "China"],
        "options_hi": ["अमेरिका", "रूस", "सऊदी अरब", "चीन"],
        "answer": "USA",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Which river is known as the 'Sorrow of Bengal'?",
        "question_hi": "कौन सी नदी को 'बंगाल का शोक' कहा जाता है?",
        "options_en": ["Mahanadi", "Kosi", "Yamuna", "Ganga"],
        "options_hi": ["महानदी", "कोसी", "यमुन", "गंगा"],
        "answer": "Kosi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Which of the following is the largest freshwater lake in India?",
        "question_hi": "निम्नलिखित में से भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
        "options_en": ["Wular Lake", "Dal Lake", "Vembanad Lake", "Kolleru Lake"],
        "options_hi": ["वूलर झील", "डल झील", "वेम्बनाड झील", "कोल्लेरु झील"],
        "answer": "Vembanad Lake",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Which of the following is the largest peninsula in the world?",
        "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा प्रायद्वीप है?",
        "options_en": ["Indian Peninsula", "Arabian Peninsula", "Iberian Peninsula", "Scandinavian Peninsula"],
        "options_hi": ["भारतीय प्रायद्वीप", "अरब प्रायद्वीप", "आइबेरियन प्रायद्वीप", "स्कैंडिनेवियाई प्रायद्वीप"],
        "answer": "Indian Peninsula",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which state is known as the 'Spice Garden of India'?",
        "question_hi": "किस राज्य को 'भारत का मसाले का बग़ीचा' कहा जाता है?",
        "options_en": ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Karnataka"],
        "options_hi": ["केरल", "तमिलनाडु", "आंध्र प्रदेश", "कर्नाटका"],
        "answer": "Kerala",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which of the following is the longest river of the peninsular India?",
        "question_hi": "निम्नलिखित में से कौन सी नदी प्रायद्वीपीय भारत की सबसे लंबी नदी है?",
        "options_en": ["Mahanadi", "Krishna", "Godavari", "Narmada"],
        "options_hi": ["महानदी", "कृष्णा", "गोदावरी", "नर्मदा"],
        "answer": "Godavari",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Which of the following is the highest waterfall in India?",
        "question_hi": "निम्नलिखित में से भारत का सबसे ऊंचा जलप्रपात कौन सा है?",
        "options_en": ["Dudhsagar Falls", "Jog Falls", "Nohkalikai Falls", "Kunchikal Falls"],
        "options_hi": ["दूधसागर जलप्रपात", "जोग जलप्रपात", "नोहकालिकाई जलप्रपात", "कुंचिकल जलप्रपात"],
        "answer": "Kunchikal Falls",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Which state has the highest literacy rate in India?",
        "question_hi": "भारत में सबसे उच्च साक्षरता दर वाला राज्य कौन सा है?",
        "options_en": ["Kerala", "Goa", "Mizoram", "Sikkim"],
        "options_hi": ["केरल", "गोवा", "मिजोरम", "सिक्किम"],
        "answer": "Kerala",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Which of the following is not an island group of India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत का द्वीप समूह नहीं है?",
        "options_en": ["Andaman and Nicobar Islands", "Lakshadweep", "Maldives", "Diu and Daman"],
        "options_hi": ["अंडमान और निकोबार द्वीप समूह", "लक्षद्वीप", "मालदीव", "दीव और दमन"],
        "answer": "Maldives",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Which of the following is not a type of climate found in India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत में पाया जाने वाला जलवायु प्रकार नहीं है?",
        "options_en": ["Tropical Rainforest Climate", "Desert Climate", "Mediterranean Climate", "Mountain Climate"],
        "options_hi": ["उष्णकटिबंधीय वर्षावन जलवायु", "रेगिस्तानी जलवायु", "भूमध्यसागरीय जलवायु", "पर्वतीय जलवायु"],
        "answer": "Mediterranean Climate",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Which of the following is the longest coast in India?",
        "question_hi": "निम्नलिखित में से भारत की सबसे लंबी तटरेखा कौन सी है?",
        "options_en": ["Gujarat", "Maharashtra", "Kerala", "Tamil Nadu"],
        "options_hi": ["गुजरात", "महाराष्ट्र", "केरल", "तमिलनाडु"],
        "answer": "Gujarat",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Which of the following is a major seaport of India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत का प्रमुख समुद्री बंदरगाह है?",
        "options_en": ["Mumbai", "Kochi", "Chennai", "All of the above"],
        "options_hi": ["मुंबई", "कोच्चि", "चेन्नई", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Which of the following states is the largest producer of cotton in India?",
        "question_hi": "निम्नलिखित में से भारत में सबसे बड़ा कपास उत्पादक राज्य कौन सा है?",
        "options_en": ["Maharashtra", "Gujarat", "Rajasthan", "Punjab"],
        "options_hi": ["महाराष्ट्र", "गुजरात", "राजस्थान", "पंजाब"],
        "answer": "Gujarat",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which of the following is the largest river basin in the world?",
        "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा नदी बेसिन है?",
        "options_en": ["Amazon", "Ganga", "Mississippi", "Yangtze"],
        "options_hi": ["अमेज़न", "गंगा", "मिसीसिपी", "यांगत्से"],
        "answer": "Amazon",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which of the following is the smallest continent by area?",
        "question_hi": "निम्नलिखित में से कौन सा महाद्वीप क्षेत्रफल के हिसाब से सबसे छोटा है?",
        "options_en": ["Australia", "Antarctica", "Europe", "South America"],
        "options_hi": ["ऑस्ट्रेलिया", "अंटार्कटिका", "यूरोप", "दक्षिण अमेरिका"],
        "answer": "Australia",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Which country is the largest in South America?",
        "question_hi": "दक्षिण अमेरिका में कौन सा देश सबसे बड़ा है?",
        "options_en": ["Brazil", "Argentina", "Peru", "Colombia"],
        "options_hi": ["ब्राज़ील", "अर्जेंटीना", "पेरू", "कोलंबिया"],
        "answer": "Brazil",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which of the following is a tropical grassland?",
        "question_hi": "निम्नलिखित में से कौन सा उष्णकटिबंधीय घास का मैदान है?",
        "options_en": ["Savannah", "Prairie", "Steppe", "Tundra"],
        "options_hi": ["सवाना", "प्रेयरी", "स्तेप्प", "टुंड्रा"],
        "answer": "Savannah",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which of the following is the most populous state in India?",
        "question_hi": "निम्नलिखित में से भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
        "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
        "answer": "Uttar Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Which of the following is the world's highest battlefield?",
        "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे ऊँचा युद्धक्षेत्र है?",
        "options_en": ["Siachen Glacier", "Kashmir Valley", "Kargil", "Ladakh"],
        "options_hi": ["सियाचिन ग्लेशियर", "कश्मीर घाटी", "कारगिल", "लद्दाख"],
        "answer": "Siachen Glacier",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which is the largest saltwater lake in India?",
        "question_hi": "भारत की सबसे बड़ी खारे पानी की झील कौन सी है?",
        "options_en": ["Rann of Kutch", "Vembanad Lake", "Chilika Lake", "Sambhar Lake"],
        "options_hi": ["रन ऑफ कच्छ", "वेम्बनाड झील", "चिलिका झील", "सांभर झील"],
        "answer": "Sambhar Lake",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Which state is the leading producer of tea in India?",
        "question_hi": "भारत में चाय का प्रमुख उत्पादक राज्य कौन सा है?",
        "options_en": ["Assam", "Darjeeling", "Kerala", "Tamil Nadu"],
        "options_hi": ["असम", "दार्जिलिंग", "केरल", "तमिलनाडु"],
        "answer": "Assam",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which of the following is the largest river of India?",
        "question_hi": "निम्नलिखित में से भारत की सबसे बड़ी नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        "options_hi": ["गंगा", "यमुन", "ब्रह्मपुत्र", "गोदावरी"],
        "answer": "Ganga",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which of the following is the world's second-largest ocean?",
        "question_hi": "निम्नलिखित में से कौन सा दुनिया का दूसरा सबसे बड़ा महासागर है?",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        "options_hi": ["अटलांटिक महासागर", "भारतीय महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
        "answer": "Atlantic Ocean",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Which of the following is not a desert?",
        "question_hi": "निम्नलिखित में से कौन सा रेगिस्तान नहीं है?",
        "options_en": ["Sahara", "Karakum", "Thar", "Congo"],
        "options_hi": ["सहारा", "कराकुम", "थार", "कोंगो"],
        "answer": "Congo",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Which of the following is the largest desert in India?",
        "question_hi": "निम्नलिखित में से भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Rann of Kutch", "Thar Desert", "Ladakh", "Karakum"],
        "options_hi": ["रन ऑफ कच्छ", "थार रेगिस्तान", "लद्दाख", "कराकुम"],
        "answer": "Thar Desert",
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
