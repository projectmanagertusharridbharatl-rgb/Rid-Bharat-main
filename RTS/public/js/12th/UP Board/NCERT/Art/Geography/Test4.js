const questions = [
    {
        "num": 1,
        "question_en": "Which one of the following is the most densely populated country in the world?",
        "question_hi": "निम्नलिखित में से कौन सा देश विश्व में सबसे अधिक जनसंख्या घनत्व वाला है?",
        "options_en": ["Bangladesh", "India", "Japan", "China"],
        "options_hi": ["बांग्लादेश", "भारत", "जापान", "चीन"],
        "answer": "Bangladesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which state has the highest literacy rate in India?",
        "question_hi": "भारत में किस राज्य की साक्षरता दर सबसे अधिक है?",
        "options_en": ["Kerala", "Goa", "Mizoram", "Tamil Nadu"],
        "options_hi": ["केरल", "गोवा", "मिज़ोरम", "तमिलनाडु"],
        "answer": "Kerala",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "What is the main objective of human geography?",
        "question_hi": "मानव भूगोल का मुख्य उद्देश्य क्या है?",
        "options_en": ["Study of physical environment", "Study of human societies", "Study of rocks", "Study of water bodies"],
        "options_hi": ["भौतिक पर्यावरण का अध्ययन", "मानव समाजों का अध्ययन", "चट्टानों का अध्ययन", "जल निकायों का अध्ययन"],
        "answer": "Study of human societies",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which factor is responsible for uneven distribution of population in India?",
        "question_hi": "भारत में जनसंख्या के असमान वितरण के लिए कौन सा कारक जिम्मेदार है?",
        "options_en": ["Climate", "Government policy", "Language", "Festivals"],
        "options_hi": ["जलवायु", "सरकारी नीति", "भाषा", "त्योहार"],
        "answer": "Climate",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Which one of the following is a tertiary activity?",
        "question_hi": "निम्नलिखित में से कौन सी तृतीयक गतिविधि है?",
        "options_en": ["Fishing", "Mining", "Transport", "Farming"],
        "options_hi": ["मछली पकड़ना", "खनन", "परिवहन", "खेती"],
        "answer": "Transport",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which of the following is an example of a human-made resource?",
        "question_hi": "निम्नलिखित में से कौन मानव निर्मित संसाधन का उदाहरण है?",
        "options_en": ["Roads", "Water", "Air", "Mountains"],
        "options_hi": ["सड़कें", "पानी", "हवा", "पहाड़"],
        "answer": "Roads",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which region is known as the 'Granary of India'?",
        "question_hi": "भारत का 'अन्न भंडार' किस क्षेत्र को कहा जाता है?",
        "options_en": ["Punjab-Haryana", "Kerala", "Rajasthan", "Odisha"],
        "options_hi": ["पंजाब-हरियाणा", "केरल", "राजस्थान", "ओडिशा"],
        "answer": "Punjab-Haryana",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which is the most abundant natural resource on Earth?",
        "question_hi": "पृथ्वी पर सबसे प्रचुर मात्रा में उपलब्ध प्राकृतिक संसाधन कौन सा है?",
        "options_en": ["Water", "Air", "Soil", "Minerals"],
        "options_hi": ["पानी", "हवा", "मिट्टी", "खनिज"],
        "answer": "Air",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Which one of the following is a feature of urban settlement?",
        "question_hi": "निम्नलिखित में से कौन शहरी बस्ती की विशेषता है?",
        "options_en": ["Low population density", "Agricultural economy", "High population density", "Scattered houses"],
        "options_hi": ["कम जनसंख्या घनत्व", "कृषि अर्थव्यवस्था", "उच्च जनसंख्या घनत्व", "छितरी हुई बस्तियाँ"],
        "answer": "High population density",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which is the largest urban agglomeration in India?",
        "question_hi": "भारत में सबसे बड़ा शहरी समूह कौन सा है?",
        "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
        "answer": "Mumbai",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which river basin is the most densely populated in India?",
        "question_hi": "भारत में कौन सा नदी बेसिन सबसे अधिक घनत्व वाला है?",
        "options_en": ["Ganga", "Godavari", "Krishna", "Mahanadi"],
        "options_hi": ["गंगा", "गोदावरी", "कृष्णा", "महानदी"],
        "answer": "Ganga",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which of the following is a non-renewable resource?",
        "question_hi": "निम्नलिखित में से कौन सा अपुन:नवीकरणीय संसाधन है?",
        "options_en": ["Solar energy", "Coal", "Wind energy", "Biomass"],
        "options_hi": ["सौर ऊर्जा", "कोयला", "पवन ऊर्जा", "बायोमास"],
        "answer": "Coal",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which is the main source of irrigation in India?",
        "question_hi": "भारत में सिंचाई का मुख्य स्रोत क्या है?",
        "options_en": ["Canals", "Wells and Tube wells", "Tanks", "Rainwater harvesting"],
        "options_hi": ["नहरें", "कुएं और ट्यूबवेल", "टैंक", "वर्षा जल संचयन"],
        "answer": "Wells and Tube wells",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which country is the largest producer of rice in the world?",
        "question_hi": "दुनिया में चावल का सबसे बड़ा उत्पादक देश कौन सा है?",
        "options_en": ["India", "China", "Indonesia", "Bangladesh"],
        "options_hi": ["भारत", "चीन", "इंडोनेशिया", "बांग्लादेश"],
        "answer": "China",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which of the following is not a land-use category?",
        "question_hi": "निम्नलिखित में से कौन भूमि उपयोग की श्रेणी नहीं है?",
        "options_en": ["Forests", "Fallow land", "Industries", "Net sown area"],
        "options_hi": ["वन", "पड़ी भूमि", "उद्योग", "शुद्ध बोया गया क्षेत्र"],
        "answer": "Industries",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Which is the second most populous country in the world?",
        "question_hi": "विश्व का दूसरा सबसे अधिक जनसंख्या वाला देश कौन सा है?",
        "options_en": ["India", "USA", "Indonesia", "China"],
        "options_hi": ["भारत", "अमेरिका", "इंडोनेशिया", "चीन"],
        "answer": "India",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What type of economic activity is mining?",
        "question_hi": "खनन किस प्रकार की आर्थिक गतिविधि है?",
        "options_en": ["Primary", "Secondary", "Tertiary", "Quaternary"],
        "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "चतुर्थक"],
        "answer": "Primary",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which one of the following is the most developed sector of the economy?",
        "question_hi": "निम्नलिखित में से कौन सा आर्थिक क्षेत्र सबसे विकसित है?",
        "options_en": ["Primary", "Secondary", "Tertiary", "None of these"],
        "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "इनमें से कोई नहीं"],
        "answer": "Tertiary",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which of the following is not a function of settlement?",
        "question_hi": "निम्नलिखित में से कौन बस्ती का कार्य नहीं है?",
        "options_en": ["Agriculture", "Industry", "Residence", "Rainfall"],
        "options_hi": ["कृषि", "उद्योग", "आवास", "वर्षा"],
        "answer": "Rainfall",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which city is known as the 'Manchester of India'?",
        "question_hi": "भारत का 'मैनचेस्टर' किस शहर को कहा जाता है?",
        "options_en": ["Ahmedabad", "Mumbai", "Kolkata", "Surat"],
        "options_hi": ["अहमदाबाद", "मुंबई", "कोलकाता", "सूरत"],
        "answer": "Ahmedabad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which state has the largest area under forest cover?",
        "question_hi": "सबसे अधिक वन क्षेत्र किस राज्य में है?",
        "options_en": ["Madhya Pradesh", "Chhattisgarh", "Odisha", "Arunachal Pradesh"],
        "options_hi": ["मध्य प्रदेश", "छत्तीसगढ़", "ओडिशा", "अरुणाचल प्रदेश"],
        "answer": "Madhya Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which one of the following is an example of a smart city in India?",
        "question_hi": "निम्नलिखित में से कौन भारत में एक स्मार्ट सिटी का उदाहरण है?",
        "options_en": ["Bhopal", "Dhanbad", "Jaisalmer", "Siliguri"],
        "options_hi": ["भोपाल", "धनबाद", "जैसलमेर", "सिलीगुड़ी"],
        "answer": "Bhopal",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which of the following is the main source of energy in rural India?",
        "question_hi": "ग्रामीण भारत में ऊर्जा का मुख्य स्रोत कौन सा है?",
        "options_en": ["Firewood", "Electricity", "Coal", "LPG"],
        "options_hi": ["लकड़ी", "बिजली", "कोयला", "एलपीजी"],
        "answer": "Firewood",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which of the following transport is cheapest for long distances?",
        "question_hi": "लंबी दूरी के लिए निम्न में से कौन सा परिवहन सबसे सस्ता है?",
        "options_en": ["Railways", "Roadways", "Airways", "Waterways"],
        "options_hi": ["रेल मार्ग", "सड़क मार्ग", "हवाई मार्ग", "जल मार्ग"],
        "answer": "Waterways",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which of the following is a natural hazard?",
        "question_hi": "निम्नलिखित में से कौन एक प्राकृतिक आपदा है?",
        "options_en": ["Earthquake", "Terrorism", "War", "Accident"],
        "options_hi": ["भूकंप", "आतंकवाद", "युद्ध", "दुर्घटना"],
        "answer": "Earthquake",
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
        "question_en": "Which of the following is not a type of farming?",
        "question_hi": "निम्नलिखित में से कौन सा कृषि प्रकार नहीं है?",
        "options_en": ["Subsistence Farming", "Commercial Farming", "Industrial Farming", "Plantation Farming"],
        "options_hi": ["आधारित कृषि", "वाणिज्यिक कृषि", "औद्योगिक कृषि", "बागान कृषि"],
        "answer": "Industrial Farming",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Which state in India is the largest producer of tea?",
        "question_hi": "भारत में सबसे बड़ा चाय उत्पादक राज्य कौन सा है?",
        "options_en": ["West Bengal", "Assam", "Kerala", "Karnataka"],
        "options_hi": ["पश्चिम बंगाल", "असम", "केरल", "कर्नाटक"],
        "answer": "Assam",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Which of the following is a characteristic of tropical climate?",
        "question_hi": "निम्नलिखित में से कौन सा उष्णकटिबंधीय जलवायु का लक्षण है?",
        "options_en": ["High temperatures throughout the year", "Cold winters", "Heavy snowfall", "Seasonal droughts"],
        "options_hi": ["साल भर उच्च तापमान", "ठंडी सर्दियाँ", "भारी हिमपात", "मौसमी सूखा"],
        "answer": "High temperatures throughout the year",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which of the following is a landlocked country?",
        "question_hi": "निम्नलिखित में से कौन सा देश भूमि से घिरा हुआ है?",
        "options_en": ["Nepal", "Bangladesh", "Sri Lanka", "Maldives"],
        "options_hi": ["नेपाल", "बांग्लादेश", "श्री लंका", "मालदीव"],
        "answer": "Nepal",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which of the following is the main factor influencing the climate of a region?",
        "question_hi": "किसी क्षेत्र के जलवायु को प्रभावित करने वाला मुख्य कारक क्या है?",
        "options_en": ["Latitude", "Altitude", "Humidity", "Air pressure"],
        "options_hi": ["अक्षांश", "ऊँचाई", "नमी", "वायुदाब"],
        "answer": "Latitude",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Which river is known as the 'lifeline of the desert'?",
        "question_hi": "कौन सी नदी को 'रेगिस्तान की जीवनरेखा' कहा जाता है?",
        "options_en": ["Narmada", "Sarasvati", "Ravi", "Luni"],
        "options_hi": ["नर्मदा", "सारस्वती", "रावी", "लूनी"],
        "answer": "Luni",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Which of the following is the most populated state in India?",
        "question_hi": "भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
        "options_en": ["Uttar Pradesh", "Maharashtra", "West Bengal", "Bihar"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "पश्चिम बंगाल", "बिहार"],
        "answer": "Uttar Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Which is the largest desert in the world?",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Karakum", "Sahara", "Gobi", "Kalahari"],
        "options_hi": ["काराकुम", "साहारा", "गोबी", "कालाहारी"],
        "answer": "Sahara",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Which of the following is not a reason for the decline of the Indus Valley Civilization?",
        "question_hi": "निम्नलिखित में से कौन सा कारण सिंधु घाटी सभ्यता के पतन के लिए नहीं है?",
        "options_en": ["Climate change", "Flooding", "Invasion", "Overpopulation"],
        "options_hi": ["जलवायु परिवर्तन", "बाढ़", "आक्रमण", "अधिक जनसंख्या"],
        "answer": "Overpopulation",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What is the main reason for deforestation in tropical regions?",
        "question_hi": "उष्णकटिबंधीय क्षेत्रों में वनों की कटाई का मुख्य कारण क्या है?",
        "options_en": ["Agriculture", "Industrialization", "Urbanization", "Tourism"],
        "options_hi": ["कृषि", "औद्योगिकीकरण", "शहरीकरण", "पर्यटन"],
        "answer": "Agriculture",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Which of the following is a major factor that affects soil erosion?",
        "question_hi": "निम्नलिखित में से कौन सा एक मुख्य कारक है जो मृदा अपरदन को प्रभावित करता है?",
        "options_en": ["Rainfall", "Wind", "Temperature", "Topography"],
        "options_hi": ["वर्षा", "हवा", "तापमान", "भूभाग"],
        "answer": "Rainfall",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Which of the following is an example of a tropical rainforest?",
        "question_hi": "निम्नलिखित में से कौन सा उष्णकटिबंधीय वर्षावन का उदाहरण है?",
        "options_en": ["Amazon", "Sahara", "Gobi", "Kalahari"],
        "options_hi": ["अमेज़न", "साहारा", "गोबी", "कालाहारी"],
        "answer": "Amazon",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which state has the largest area under forests in India?",
        "question_hi": "भारत में सबसे अधिक वन क्षेत्र किस राज्य में है?",
        "options_en": ["Madhya Pradesh", "Maharashtra", "Uttarakhand", "Chhattisgarh"],
        "options_hi": ["मध्य प्रदेश", "महाराष्ट्र", "उत्तराखंड", "छत्तीसगढ़"],
        "answer": "Madhya Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which of the following is a primary sector activity?",
        "question_hi": "निम्नलिखित में से कौन सी प्राथमिक क्षेत्र की गतिविधि है?",
        "options_en": ["Manufacturing", "Mining", "Transport", "Banking"],
        "options_hi": ["निर्माण", "खनन", "परिवहन", "बैंकिंग"],
        "answer": "Mining",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Which of the following is a type of agriculture practiced in India?",
        "question_hi": "भारत में कौन सा कृषि प्रकार प्रचलित है?",
        "options_en": ["Commercial farming", "Intensive farming", "Subsistence farming", "All of the above"],
        "options_hi": ["वाणिज्यिक कृषि", "गहन कृषि", "आधारित कृषि", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which country is known for producing the highest quantity of coffee?",
        "question_hi": "कौन सा देश सबसे अधिक मात्रा में कॉफी का उत्पादन करता है?",
        "options_en": ["Brazil", "Colombia", "India", "Vietnam"],
        "options_hi": ["ब्राजील", "कोलंबिया", "भारत", "वियतनाम"],
        "answer": "Brazil",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "The primary sector in the economy includes which of the following?",
        "question_hi": "अर्थव्यवस्था में प्राथमिक क्षेत्र में निम्नलिखित में से क्या शामिल है?",
        "options_en": ["Agriculture", "Mining", "Fishing", "All of the above"],
        "options_hi": ["कृषि", "खनन", "मछली पकड़ना", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Which of the following states has the highest forest cover in India?",
        "question_hi": "भारत में सबसे अधिक वन क्षेत्र कौन से राज्य में है?",
        "options_en": ["Madhya Pradesh", "Mizoram", "Nagaland", "Uttarakhand"],
        "options_hi": ["मध्य प्रदेश", "मिजोरम", "नागालैंड", "उत्तराखंड"],
        "answer": "Mizoram",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which of the following is the capital of Maharashtra?",
        "question_hi": "महाराष्ट्र की राजधानी कौन सी है?",
        "options_en": ["Mumbai", "Pune", "Nagpur", "Thane"],
        "options_hi": ["मुंबई", "पुणे", "नागपुर", "ठाणे"],
        "answer": "Mumbai",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "What is the capital of Tamil Nadu?",
        "question_hi": "तमिलनाडु की राजधानी क्या है?",
        "options_en": ["Chennai", "Coimbatore", "Madurai", "Trichy"],
        "options_hi": ["चेन्नई", "कोयंबटूर", "मदुरै", "तिरुची"],
        "answer": "Chennai",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which of the following is the highest mountain peak in India?",
        "question_hi": "भारत में कौन सा पर्वत शिखर सबसे ऊँचा है?",
        "options_en": ["Kangchenjunga", "Mount Everest", "Nanda Devi", "Makalu"],
        "options_hi": ["कंचनजंगा", "माउंट एवरेस्ट", "नंदा देवी", "मकालू"],
        "answer": "Kangchenjunga",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "The Ganga-Brahmaputra delta is also known as:",
        "question_hi": "गंगा-ब्रह्मपुत्र डेल्टा को किस नाम से जाना जाता है?",
        "options_en": ["Sundarbans", "Deccan Plateau", "Thar Desert", "Chota Nagpur Plateau"],
        "options_hi": ["सुंदरबन", "दक्कन पठार", "थार रेगिस्तान", "छोटा नागपुर पठार"],
        "answer": "Sundarbans",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Which river is known as the 'Sorrow of Bengal'?",
        "question_hi": "कौन सी नदी को 'बंगाल का शोक' कहा जाता है?",
        "options_en": ["Ganga", "Brahmaputra", "Damodar", "Yamuna"],
        "options_hi": ["गंगा", "ब्रह्मपुत्र", "दामोदर", "यमुना"],
        "answer": "Damodar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Which of the following is not a river in India?",
        "question_hi": "निम्नलिखित में से कौन सी भारत में नदी नहीं है?",
        "options_en": ["Amazon", "Ganga", "Yamuna", "Godavari"],
        "options_hi": ["अमेज़न", "गंगा", "यमुना", "गोदावरी"],
        "answer": "Amazon",
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
