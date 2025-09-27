const questions = [
  {
    num: 1,
    question_en: "Which of the following is the largest continent?",
    question_hi: "निम्नलिखित में से कौन सा सबसे बड़ा महाद्वीप है?",
    options_en: ["Africa", "Asia", "Europe", "Australia"],
    options_hi: ["अफ्रीका", "एशिया", "यूरोप", "ऑस्ट्रेलिया"],
    answer_en: "Asia",
    answer_hi: "एशिया",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Who discovered the law of gravity?",
    question_hi: "गुरुत्वाकर्षण का नियम किसने खोजा?",
    options_en: ["Albert Einstein", "Isaac Newton", "Galileo", "Nikola Tesla"],
    options_hi: ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो", "निकोला टेस्ला"],
    answer_en: "Isaac Newton",
    answer_hi: "आइजैक न्यूटन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Who was the first woman to win a Nobel Prize?",
    question_hi: "पहली महिला कौन थीं जिन्होंने नोबेल पुरस्कार जीता?",
    options_en: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Ada Lovelace"],
    options_hi: ["मैरी क्यूरी", "रोसलिंड फ्रैंकलिन", "डॉरोथी होजकिन", "एडा लोवलेस"],
    answer_en: "Marie Curie",
    answer_hi: "मैरी क्यूरी",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which planet is known as the 'Red Planet'?",
    question_hi: "किस ग्रह को 'लाल ग्रह' के नाम से जाना जाता है?",
    options_en: ["Mars", "Venus", "Jupiter", "Saturn"],
    options_hi: ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the freezing point of water in Celsius?",
    question_hi: "पानी का जमने का बिंदु सेल्सियस में कितना होता है?",
    options_en: ["0°C", "100°C", "-32°C", "212°C"],
    options_hi: ["0°C", "100°C", "-32°C", "212°C"],
    answer_en: "0°C",
    answer_hi: "0°C",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Who invented the light bulb?",
    question_hi: "बत्तियां किसने आविष्कार की?",
    options_en: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Albert Einstein"],
    options_hi: ["निकोला टेस्ला", "थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "अल्बर्ट आइंस्टीन"],
    answer_en: "Thomas Edison",
    answer_hi: "थॉमस एडिसन",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which gas do plants absorb for photosynthesis?",
    question_hi: "फोटोसिंथेसिस के लिए पौधे किस गैस को अवशोषित करते हैं?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which animal is known as the 'King of the Jungle'?",
    question_hi: "कौन सा जानवर 'जंगल का राजा' के रूप में जाना जाता है?",
    options_en: ["Elephant", "Lion", "Tiger", "Bear"],
    options_hi: ["हाथी", "सिंह", "बाघ", "भालू"],
    answer_en: "Lion",
    answer_hi: "सिंह",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which is the largest mammal?",
    question_hi: "सबसे बड़ा स्तनपायी जानवर कौन सा है?",
    options_en: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    options_hi: ["हाथी", "ब्लू व्हेल", "जिराफ", "शार्क"],
    answer_en: "Blue Whale",
    answer_hi: "ब्लू व्हेल",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the capital of India?",
    question_hi: "भारत की राजधानी क्या है?",
    options_en: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    options_hi: ["मुंबई", "दिल्ली", "चेन्नई", "कोलकाता"],
    answer_en: "Delhi",
    answer_hi: "दिल्ली",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which instrument is used to measure temperature?",
    question_hi: "तापमान मापने के लिए किस यंत्र का उपयोग किया जाता है?",
    options_en: ["Barometer", "Thermometer", "Hygrometer", "Altimeter"],
    options_hi: ["वायुमापी", "थर्मामीटर", "आर्द्रता मापी", "उचाई मापी"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Who was the first President of the United States?",
    question_hi: "संयुक्त राज्य अमेरिका के पहले राष्ट्रपति कौन थे?",
    options_en: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
    options_hi: ["अब्राहम लिंकन", "थॉमस जेफरसन", "जॉर्ज वाशिंगटन", "जॉन एडम्स"],
    answer_en: "George Washington",
    answer_hi: "जॉर्ज वाशिंगटन",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which country is the largest producer of tea?",
    question_hi: "चाय का सबसे बड़ा उत्पादक देश कौन सा है?",
    options_en: ["India", "China", "Sri Lanka", "Japan"],
    options_hi: ["भारत", "चीन", "श्रीलंका", "जापान"],
    answer_en: "China",
    answer_hi: "चीन",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What is the hardest known natural substance?",
    question_hi: "अब तक ज्ञात सबसे कठिन प्राकृतिक पदार्थ कौन सा है?",
    options_en: ["Gold", "Diamond", "Iron", "Platinum"],
    options_hi: ["सोना", "हीरा", "लोहा", "प्लैटिनम"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the capital of Japan?",
    question_hi: "जापान की राजधानी क्या है?",
    options_en: ["Kyoto", "Osaka", "Tokyo", "Nagoya"],
    options_hi: ["क्योटो", "ओसाका", "टोक्यो", "नागोया"],
    answer_en: "Tokyo",
    answer_hi: "टोक्यो",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which of the following is the largest ocean on Earth?",
    question_hi: "निम्नलिखित में से पृथ्वी का सबसे बड़ा महासागर कौन सा है?",
    options_en: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    options_hi: ["अटलांटिक महासागर", "हिन्द महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which is the largest continent by area?",
    question_hi: "क्षेत्रफल के हिसाब से सबसे बड़ा महाद्वीप कौन सा है?",
    options_en: ["Asia", "Africa", "North America", "Europe"],
    options_hi: ["एशिया", "अफ्रीका", "उत्तर अमेरिका", "यूरोप"],
    answer_en: "Asia",
    answer_hi: "एशिया",
    attempted: false,
     selected: ""
  },
   {
  num: 18,
  question_en: "Which is the tallest mountain in the world?",
  question_hi: "दुनिया का सबसे ऊँचा पर्वत कौन सा है?",
  options_en: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
  options_hi: ["माउंट एवरेस्ट", "के2", "कंचनजंगा", "मकालू"],
  answer_en: "Mount Everest",
  answer_hi: "माउंट एवरेस्ट",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Who is known as the father of the Indian nation?",
  question_hi: "भारत के राष्ट्रपिता के रूप में किसे जाना जाता है?",
  options_en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel"],
  options_hi: ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "सरदार वल्लभभाई पटेल"],
  answer_en: "Mahatma Gandhi",
  answer_hi: "महात्मा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which is the largest continent by population?",
  question_hi: "जनसंख्या के हिसाब से सबसे बड़ा महाद्वीप कौन सा है?",
  options_en: ["Asia", "Africa", "Europe", "North America"],
  options_hi: ["एशिया", "अफ्रीका", "यूरोप", "उत्तर अमेरिका"],
  answer_en: "Asia",
  answer_hi: "एशिया",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Who is known as the 'Father of the Nation' in India?",
  question_hi: "भारत में 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
  options_en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
  options_hi: ["जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस"],
  answer_en: "Mahatma Gandhi",
  answer_hi: "महात्मा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which of the following is a chemical element?",
  question_hi: "निम्नलिखित में से कौन सा एक रासायनिक तत्व है?",
  options_en: ["Water", "Oxygen", "Carbon dioxide", "Sugar"],
  options_hi: ["पानी", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "चीनी"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "What is the currency of Japan?",
  question_hi: "जापान की मुद्रा क्या है?",
  options_en: ["Yuan", "Won", "Yen", "Ringgit"],
  options_hi: ["युआन", "वोन", "येन", "रिंगगिट"],
  answer_en: "Yen",
  answer_hi: "येन",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Who is the author of 'Romeo and Juliet'?",
  question_hi: "'रोमियो और जूलियट' के लेखक कौन हैं?",
  options_en: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
  options_hi: ["विलियम शेक्सपियर", "चार्ल्स डिकेंस", "लियो टॉलस्टॉय", "मार्क ट्वेन"],
  answer_en: "William Shakespeare",
  answer_hi: "विलियम शेक्सपियर",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is the capital of Canada?",
  question_hi: "कनाडा की राजधानी क्या है?",
  options_en: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
  options_hi: ["टोरंटो", "वैंकूवर", "ओटावा", "मॉन्ट्रियल"],
  answer_en: "Ottawa",
  answer_hi: "ओटावा",
  attempted: false,
  selected: ""
},



  {
      num: 26,
      question_en: "Which railway zone has its headquarters in Mumbai?",
      question_hi: "किस रेलवे जोन का मुख्यालय मुंबई में है?",
      options_en: ["Central Railway", "Eastern Railway", "Northern Railway", "Southern Railway"],
      options_hi: ["सेंट्रल रेलवे", "ईस्टर्न रेलवे", "नॉर्दर्न रेलवे", "साउथर्न रेलवे"],
      answer_en: "Central Railway",
      answer_hi: "सेंट्रल रेलवे",
      attempted: false,
      selected: ""
  },
  {
      num: 27,
      question_en: "What is the full form of RRB?",
      question_hi: "RRB का पूरा नाम क्या है?",
      options_en: ["Railway Recruitment Board", "Railway Research Bureau", "Railway Regulation Body", "Railway Reservation Branch"],
      options_hi: ["रेलवे भर्ती बोर्ड", "रेलवे रिसर्च ब्यूरो", "रेलवे रेगुलेशन बॉडी", "रेलवे रिजर्वेशन शाखा"],
      answer_en: "Railway Recruitment Board",
      answer_hi: "रेलवे भर्ती बोर्ड",
      attempted: false,
      selected: ""
  },
  {
      num: 28,
      question_en: "Which gauge is used in most of the Indian Railways?",
      question_hi: "भारतीय रेलवे में सबसे अधिक कौन सा गेज उपयोग होता है?",
      options_en: ["Broad Gauge", "Meter Gauge", "Narrow Gauge", "Standard Gauge"],
      options_hi: ["ब्रॉड गेज", "मीटर गेज", "नैरो गेज", "स्टैंडर्ड गेज"],
      answer_en: "Broad Gauge",
      answer_hi: "ब्रॉड गेज",
      attempted: false,
      selected: ""
  },
  {
      num: 29,
      question_en: "What is the function of a railway signal?",
      question_hi: "रेलवे सिग्नल का कार्य क्या है?",
      options_en: ["Control train movement", "Provide electricity", "Maintain tracks", "Clean stations"],
      options_hi: ["ट्रेन की गति नियंत्रित करना", "बिजली प्रदान करना", "पटरियों का रखरखाव", "स्टेशन साफ करना"],
      answer_en: "Control train movement",
      answer_hi: "ट्रेन की गति नियंत्रित करना",
      attempted: false,
      selected: ""
  },
  {
      num: 30,
      question_en: "What is the maximum speed of a Shatabdi Express train?",
      question_hi: "शताब्दी एक्सप्रेस ट्रेन की अधिकतम गति क्या है?",
      options_en: ["150 km/h", "200 km/h", "130 km/h", "110 km/h"],
      options_hi: ["150 किमी/घंटा", "200 किमी/घंटा", "130 किमी/घंटा", "110 किमी/घंटा"],
      answer_en: "150 km/h",
      answer_hi: "150 किमी/घंटा",
      attempted: false,
      selected: ""
  },
  {
      num: 31,
      question_en: "Which document is mandatory for traveling by train?",
      question_hi: "ट्रेन में यात्रा करने के लिए कौन सा दस्तावेज़ अनिवार्य है?",
      options_en: ["Ticket", "ID Proof", "Passport", "Driving License"],
      options_hi: ["टिकट", "पहचान पत्र", "पासपोर्ट", "ड्राइविंग लाइसेंस"],
      answer_en: "Ticket",
      answer_hi: "टिकट",
      attempted: false,
      selected: ""
  },
  {
      num: 32,
      question_en: "What is the name of the Indian Railways catering service?",
      question_hi: "भारतीय रेलवे की खानपान सेवा का नाम क्या है?",
      options_en: ["IRCTC", "CRIS", "CONCOR", "RITES"],
      options_hi: ["IRCTC", "CRIS", "CONCOR", "RITES"],
      answer_en: "IRCTC",
      answer_hi: "IRCTC",
      attempted: false,
      selected: ""
  },
  {
      num: 33,
      question_en: "Which city is known as the headquarters of the Western Railway?",
      question_hi: "कौन सा शहर पश्चिम रेलवे का मुख्यालय है?",
      options_en: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      options_hi: ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
      answer_en: "Mumbai",
      answer_hi: "मुंबई",
      attempted: false,
      selected: ""
  },
  {
      num: 34,
      question_en: "Which Indian Railway station has the largest number of platforms?",
      question_hi: "किस भारतीय रेलवे स्टेशन पर सबसे अधिक प्लेटफॉर्म हैं?",
      options_en: ["Gorakhpur", "Howrah", "Mumbai CST", "New Delhi"],
      options_hi: ["गोरखपुर", "हावड़ा", "मुंबई CST", "नई दिल्ली"],
      answer_en: "Gorakhpur",
      answer_hi: "गोरखपुर",
      attempted: false,
      selected: ""
  },
  {
      num: 35,
      question_en: "What is the name of the train connecting Mumbai and Chennai?",
      question_hi: "मुंबई और चेन्नई को जोड़ने वाली ट्रेन का नाम क्या है?",
      options_en: ["Chennai Express", "Mumbai Express", "Rajdhani Express", "Konkan Kanya Express"],
      options_hi: ["चेन्नई एक्सप्रेस", "मुंबई एक्सप्रेस", "राजधानी एक्सप्रेस", "कोनकन कन्या एक्सप्रेस"],
      answer_en: "Chennai Express",
      answer_hi: "चेन्नई एक्सप्रेस",
      attempted: false,
      selected: ""
  },

  {
      num: 36,
      question_en: "Which railway station is known as the busiest in India?",
      question_hi: "भारत का सबसे व्यस्त रेलवे स्टेशन कौन सा है?",
      options_en: ["Howrah", "Mumbai CST", "New Delhi", "Sealdah"],
      options_hi: ["हावड़ा", "मुंबई CST", "नई दिल्ली", "सीलदाह"],
      answer_en: "Howrah",
      answer_hi: "हावड़ा",
      attempted: false,
      selected: ""
  },
  {
      num: 37,
      question_en: "What is the primary function of the Railway Protection Force (RPF)?",
      question_hi: "रेलवे सुरक्षा बल (RPF) का मुख्य कार्य क्या है?",
      options_en: ["Maintain law and order", "Ticket checking", "Train operations", "Track maintenance"],
      options_hi: ["कानून व्यवस्था बनाए रखना", "टिकट जांच", "ट्रेन संचालन", "पटरियों की देखभाल"],
      answer_en: "Maintain law and order",
      answer_hi: "कानून व्यवस्था बनाए रखना",
      attempted: false,
      selected: ""
  },
  {
      num: 38,
      question_en: "Which year was Indian Railways nationalized?",
      question_hi: "भारतीय रेलवे कब राष्ट्रीयकृत हुआ था?",
      options_en: ["1951", "1947", "1930", "1960"],
      options_hi: ["1951", "1947", "1930", "1960"],
      answer_en: "1951",
      answer_hi: "1951",
      attempted: false,
      selected: ""
  },
  {
      num: 39,
      question_en: "Which of the following is a high-speed train in India?",
      question_hi: "निम्नलिखित में से कौन सी भारत की हाई-स्पीड ट्रेन है?",
      options_en: ["Vande Bharat Express", "Rajdhani Express", "Shatabdi Express", "Garib Rath Express"],
      options_hi: ["वंदे भारत एक्सप्रेस", "राजधानी एक्सप्रेस", "शताब्दी एक्सप्रेस", "गरीब रथ एक्सप्रेस"],
      answer_en: "Vande Bharat Express",
      answer_hi: "वंदे भारत एक्सप्रेस",
      attempted: false,
      selected: ""
  },
  {
      num: 40,
      question_en: "What is the name of the railway line connecting Kashmir to the rest of India?",
      question_hi: "कश्मीर को भारत के बाकी हिस्सों से जोड़ने वाली रेलवे लाइन का नाम क्या है?",
      options_en: ["Banihal Railway Line", "Katra Railway Line", "Jammu–Baramulla Line", "Pathankot–Jammu Line"],
      options_hi: ["बनीहाल रेलवे लाइन", "कटरा रेलवे लाइन", "जम्मू-बारामूला लाइन", "पठानकोट-जम्मू लाइन"],
      answer_en: "Jammu–Baramulla Line",
      answer_hi: "जम्मू-बारामूला लाइन",
      attempted: false,
      selected: ""
  },
  {
      num: 41,
      question_en: "Which Indian Railway zone is the largest in terms of route kilometers?",
      question_hi: "मार्ग किलोमीटर के हिसाब से सबसे बड़ा भारतीय रेलवे जोन कौन सा है?",
      options_en: ["Northern Railway", "Southern Railway", "Western Railway", "Eastern Railway"],
      options_hi: ["नॉर्दर्न रेलवे", "साउथर्न रेलवे", "वेस्टर्न रेलवे", "ईस्टर्न रेलवे"],
      answer_en: "Northern Railway",
      answer_hi: "नॉर्दर्न रेलवे",
      attempted: false,
      selected: ""
  },
  {
      num: 42,
      question_en: "What is the meaning of ‘Footplate’ in railway terminology?",
      question_hi: "रेलवे शब्दावली में ‘फुटप्लेट’ का क्या मतलब होता है?",
      options_en: ["Locomotive driver's cabin", "Train platform", "Rail track", "Signal post"],
      options_hi: ["लोकमोटिव ड्राइवर का केबिन", "ट्रेन प्लेटफॉर्म", "रेल ट्रैक", "सिग्नल पोस्ट"],
      answer_en: "Locomotive driver's cabin",
      answer_hi: "लोकमोटिव ड्राइवर का केबिन",
      attempted: false,
      selected: ""
  },
  {
      num: 43,
      question_en: "Which Indian Railway train was the first to be electrified?",
      question_hi: "भारत की पहली विद्युतीकृत ट्रेन कौन सी थी?",
      options_en: ["Chhatrapati Shivaji Terminus to Kurla", "Mumbai CST to Pune", "Delhi to Agra", "Howrah to Burdwan"],
      options_hi: ["छत्रपति शिवाजी टर्मिनस से कुर्ला", "मुंबई CST से पुणे", "दिल्ली से आगरा", "हावड़ा से बर्दवान"],
      answer_en: "Chhatrapati Shivaji Terminus to Kurla",
      answer_hi: "छत्रपति शिवाजी टर्मिनस से कुर्ला",
      attempted: false,
      selected: ""
  },
  {
      num: 44,
      question_en: "What is the full form of IRCTC?",
      question_hi: "IRCTC का पूरा नाम क्या है?",
      options_en: ["Indian Railway Catering and Tourism Corporation", "Indian Railways Control and Transport Committee", "Indian Railway Communication and Training Centre", "Indian Railways Cargo Transport Corporation"],
      options_hi: ["इंडियन रेलवे कैटरिंग एंड टूरिज्म कॉरपोरेशन", "इंडियन रेलवे कंट्रोल एंड ट्रांसपोर्ट कमेटी", "इंडियन रेलवे कम्युनिकेशन एंड ट्रेनिंग सेंटर", "इंडियन रेलवे कार्गो ट्रांसपोर्ट कॉरपोरेशन"],
      answer_en: "Indian Railway Catering and Tourism Corporation",
      answer_hi: "इंडियन रेलवे कैटरिंग एंड टूरिज्म कॉरपोरेशन",
      attempted: false,
      selected: ""
  },
  {
      num: 45,
      question_en: "Which one of the following is not a class of travel in Indian Railways?",
      question_hi: "निम्नलिखित में से कौन भारतीय रेलवे की यात्रा श्रेणी नहीं है?",
      options_en: ["First Class", "Sleeper Class", "Executive Class", "Economy Class"],
      options_hi: ["फर्स्ट क्लास", "स्लीपर क्लास", "एक्जीक्यूटिव क्लास", "इकोनॉमी क्लास"],
      answer_en: "Economy Class",
      answer_hi: "इकोनॉमी क्लास",
      attempted: false,
      selected: ""
  },
  {
      num: 46,
      question_en: "Who was the first woman to become a locomotive driver in India?",
      question_hi: "भारत में पहली महिला लोकमोटिव ड्राइवर कौन थीं?",
      options_en: ["Surekha Yadav", "Kalpana Chawla", "Indira Gandhi", "Kiran Bedi"],
      options_hi: ["सुरेखा यादव", "कल्पना चावला", "इंदिरा गांधी", "किरण बेदी"],
      answer_en: "Surekha Yadav",
      answer_hi: "सुरेखा यादव",
      attempted: false,
      selected: ""
  },
  {
      num: 47,
      question_en: "What is the main purpose of the ‘Signal’ in railways?",
      question_hi: "रेलवे में ‘सिग्नल’ का मुख्य उद्देश्य क्या है?",
      options_en: ["To control train traffic", "To show platform number", "To announce train arrival", "To operate train doors"],
      options_hi: ["ट्रेन यातायात को नियंत्रित करना", "प्लेटफॉर्म नंबर दिखाना", "ट्रेन आगमन की घोषणा करना", "ट्रेन के दरवाजे खोलना"],
      answer_en: "To control train traffic",
      answer_hi: "ट्रेन यातायात को नियंत्रित करना",
      attempted: false,
      selected: ""
  },
  {
      num: 48,
      question_en: "Which Indian Railway zone covers the maximum area in the north-eastern region?",
      question_hi: "उत्तर-पूर्वी क्षेत्र में सबसे अधिक क्षेत्रफल किस भारतीय रेलवे जोन का है?",
      options_en: ["Northeast Frontier Railway", "Eastern Railway", "Northern Railway", "South Eastern Railway"],
      options_hi: ["नॉर्थईस्ट फ्रंटियर रेलवे", "ईस्टर्न रेलवे", "नॉर्दर्न रेलवे", "साउथ ईस्टर्न रेलवे"],
      answer_en: "Northeast Frontier Railway",
      answer_hi: "नॉर्थईस्ट फ्रंटियर रेलवे",
      attempted: false,
      selected: ""
  },
  {
      num: 49,
      question_en: "What is the distance between two consecutive sleepers on a railway track called?",
      question_hi: "रेलवे पटरी पर दो लगातार स्लीपर के बीच की दूरी को क्या कहते हैं?",
      options_en: ["Gauge", "Sleeper spacing", "Pitch", "Cross tie spacing"],
      options_hi: ["गेज", "स्लीपर स्पेसिंग", "पिच", "क्रॉस टाई स्पेसिंग"],
      answer_en: "Pitch",
      answer_hi: "पिच",
      attempted: false,
      selected: ""
  },
  {
      num: 50,
      question_en: "Which Indian Railway train is known as the fastest passenger train?",
      question_hi: "भारत की सबसे तेज यात्री ट्रेन कौन सी है?",
      options_en: ["Gatimaan Express", "Rajdhani Express", "Shatabdi Express", "Duronto Express"],
      options_hi: ["गतिमान एक्सप्रेस", "राजधानी एक्सप्रेस", "शताब्दी एक्सप्रेस", "दुरंतो एक्सप्रेस"],
      answer_en: "Gatimaan Express",
      answer_hi: "गतिमान एक्सप्रेस",
      attempted: false,
      selected: ""
  }
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
                window.location.href = "/RTS/Public/Deshbord/category/test/submit-test.html";
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