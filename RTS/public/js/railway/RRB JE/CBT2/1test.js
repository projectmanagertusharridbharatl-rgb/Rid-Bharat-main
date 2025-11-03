const questions = [
  {
    num: 1,
    question_en: "Who is the current President of India (as of 2025)?",
    question_hi: "भारत के वर्तमान राष्ट्रपति (2025 में) कौन हैं?",
    options_en: ["Droupadi Murmu", "Ram Nath Kovind", "Pratibha Patil", "Venkaiah Naidu"],
    options_hi: ["द्रौपदी मुर्मू", "राम नाथ कोविंद", "प्रतिभा पाटिल", "वेंकैया नायडू"],
    answer_en: "Droupadi Murmu",
    answer_hi: "द्रौपदी मुर्मू",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which country will host the 2032 Olympic Games?",
    question_hi: "2032 ओलंपिक खेलों की मेजबानी कौन सा देश करेगा?",
    options_en: ["India", "USA", "Australia", "Germany"],
    options_hi: ["भारत", "अमेरिका", "ऑस्ट्रेलिया", "जर्मनी"],
    answer_en: "Australia",
    answer_hi: "ऑस्ट्रेलिया",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which Indian state is known as the 'Spice Garden of India'?",
    question_hi: "भारत का 'मसालों का बाग' किस राज्य को कहा जाता है?",
    options_en: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    options_hi: ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which is the smallest state in India by area?",
    question_hi: "क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन सा है?",
    options_en: ["Goa", "Sikkim", "Tripura", "Mizoram"],
    options_hi: ["गोवा", "सिक्किम", "त्रिपुरा", "मिजोरम"],
    answer_en: "Goa",
    answer_hi: "गोवा",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which river is also called 'Dakshina Ganga'?",
    question_hi: "कौन सी नदी 'दक्षिण गंगा' कहलाती है?",
    options_en: ["Krishna", "Cauvery", "Godavari", "Narmada"],
    options_hi: ["कृष्णा", "कावेरी", "गोदावरी", "नर्मदा"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
  },
{
    num: 6,
    question_en: "When is National Voters Day celebrated?",
    question_hi: "राष्ट्रीय मतदाता दिवस कब मनाया जाता है?",
    options_en: ["15 August", "26 January", "25 January", "2 October"],
    options_hi: ["15 अगस्त", "26 जनवरी", "25 जनवरी", "2 अक्टूबर"],
    answer_en: "25 January",
    answer_hi: "25 जनवरी",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which Indian won the Nobel Prize for Peace in 2014?",
    question_hi: "2014 में शांति के लिए नोबेल पुरस्कार जीतने वाले भारतीय कौन थे?",
    options_en: ["Kailash Satyarthi", "Amartya Sen", "C.V. Raman", "Mother Teresa"],
    options_hi: ["कैलाश सत्यार्थी", "अमर्त्य सेन", "सी. वी. रमन", "मदर टेरेसा"],
    answer_en: "Kailash Satyarthi",
    answer_hi: "कैलाश सत्यार्थी",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Who is known as the 'Father of the Nation' in India?",
    question_hi: "भारत में 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
    options_en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh"],
    options_hi: ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह"],
    answer_en: "Mahatma Gandhi",
    answer_hi: "महात्मा गांधी",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "In which year did India gain independence?",
    question_hi: "भारत ने स्वतंत्रता कब प्राप्त की थी?",
    options_en: ["1942", "1947", "1950", "1962"],
    options_hi: ["1942", "1947", "1950", "1962"],
    answer_en: "1947",
    answer_hi: "1947",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Who was the first President of India?",
    question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
    options_en: ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain", "Dr. A.P.J. Abdul Kalam"],
    options_hi: ["डॉ. राजेन्द्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. जाकिर हुसैन", "डॉ. ए. पी. जे. अब्दुल कलाम"],
    answer_en: "Dr. Rajendra Prasad",
    answer_hi: "डॉ. राजेन्द्र प्रसाद",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which is the national flower of India?",
    question_hi: "भारत का राष्ट्रीय पुष्प कौन सा है?",
    options_en: ["Rose", "Lotus", "Sunflower", "Tulip"],
    options_hi: ["गुलाब", "कमल", "सूरजमुखी", "ट्यूलिप"],
    answer_en: "Lotus",
    answer_hi: "कमल",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Who was the first woman Prime Minister of India?",
    question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    options_en: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"],
    options_hi: ["इंदिरा गांधी", "सोणिया गांधी", "प्रणब पटेल", "सरोजिनी नायडू"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which is the national animal of India?",
    question_hi: "भारत का राष्ट्रीय पशु कौन सा है?",
    options_en: ["Lion", "Elephant", "Tiger", "Peacock"],
    options_hi: ["सिंह", "हाथी", "बाघ", "मोर"],
    answer_en: "Tiger",
    answer_hi: "बाघ",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Who is known as the 'Missile Man of India'?",
    question_hi: "भारत के 'मिसाइल मैन' के रूप में किसे जाना जाता है?",
    options_en: ["Dr. A.P.J. Abdul Kalam", "Dr. Vikram Sarabhai", "Dr. Homi J. Bhabha", "Dr. Satish Dhawan"],
    options_hi: ["डॉ. ए. पी. जे. अब्दुल कलाम", "डॉ. विक्रम साराभाई", "डॉ. होमी जे. भाभा", "डॉ. सतीश धवन"],
    answer_en: "Dr. A.P.J. Abdul Kalam",
    answer_hi: "डॉ. ए. पी. जे. अब्दुल कलाम",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which is the national bird of India?",
    question_hi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
    options_en: ["Peacock", "Eagle", "Sparrow", "Pigeon"],
    options_hi: ["मोर", "गरुड़", "गौरैया", "कबूतर"],
    answer_en: "Peacock",
    answer_hi: "मोर",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Who was the first woman President of India?",
    question_hi: "भारत की पहली महिला राष्ट्रपति कौन थीं?",
    options_en: ["Pratibha Patil", "Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu"],
    options_hi: ["प्रणब पटेल", "इंदिरा गांधी", "सोणिया गांधी", "सरोजिनी नायडू"],
    answer_en: "Pratibha Patil",
    answer_hi: "प्रणब पटेल",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which is the national tree of India?",
    question_hi: "भारत का राष्ट्रीय वृक्ष कौन सा है?",
    options_en: ["Peepal", "Bamboo", "Neem", "Bodhi"],
    options_hi: ["पीपल", "बाँस", "नीम", "बोधि"],
    answer_en: "Bodhi",
    answer_hi: "बोधि",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Who is known as the 'Iron Man of India'?",
    question_hi: "भारत के 'लौह पुरुष' के रूप में किसे जाना जाता है?",
    options_en: ["Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Bhagat Singh", "Jawaharlal Nehru"],
    options_hi: ["सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस", "भगत सिंह", "जवाहरलाल नेहरू"],
    answer_en: "Sardar Vallabhbhai Patel",
    answer_hi: "सरदार वल्लभभाई पटेल",
    attempted: false,
    selected: ""
  },
 
  {
    num: 19,
    question_en: "Which Indian state is known as the 'Land of Five Rivers'?",
    question_hi: "कौन सा भारतीय राज्य 'पाँच नदियों की भूमि' के रूप में जाना जाता है?",
    options_en: ["Punjab", "Haryana", "Uttarakhand", "Himachal Pradesh"],
    options_hi: ["पंजाब", "हरियाणा", "उत्तराखंड", "हिमाचल प्रदेश"],
    answer_en: "Punjab",
    answer_hi: "पंजाब",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "In which year did India conduct its first nuclear test?",
    question_hi: "भारत ने अपना पहला परमाणु परीक्षण किस वर्ष किया था?",
    options_en: ["1965", "1974", "1984", "1998"],
    options_hi: ["1965", "1974", "1984", "1998"],
    answer_en: "1974",
    answer_hi: "1974",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which Indian state has the largest number of national parks?",
    question_hi: "कौन से भारतीय राज्य में राष्ट्रीय उद्यानों की सबसे बड़ी संख्या है?",
    options_en: ["Madhya Pradesh", "Uttarakhand", "Assam", "Maharashtra"],
    options_hi: ["मध्य प्रदेश", "उत्तराखंड", "असम", "महाराष्ट्र"],
    answer_en: "Madhya Pradesh",
    answer_hi: "मध्य प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Who was the first Governor-General of independent India?",
    question_hi: "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
    options_en: ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Rajendra Prasad"],
    options_hi: ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "राजेन्द्र प्रसाद"],
    answer_en: "Lord Mountbatten",
    answer_hi: "लॉर्ड माउंटबेटन",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which Indian city is known as the 'City of Joy'?",
    question_hi: "कौन सा भारतीय शहर 'सुख का शहर' के रूप में जाना जाता है?",
    options_en: ["Kolkata", "Mumbai", "Chennai", "Delhi"],
    options_hi: ["कोलकाता", "मुंबई", "चेन्नई", "दिल्ली"],
    answer_en: "Kolkata",
    answer_hi: "कोलकाता",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What is the name of India's first indigenous satellite launch vehicle?",
    question_hi: "भारत के पहले स्वदेशी उपग्रह प्रक्षेपण यान का नाम क्या है?",
    options_en: ["PSLV", "GSLV", "SLV", "ASLV"],
    options_hi: ["पीएसएलवी", "जीएसएलवी", "एसएलवी", "एएसएलवी"],
    answer_en: "SLV",
    answer_hi: "एसएलवी",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which Indian state has the highest sex ratio?",
    question_hi: "कौन से भारतीय राज्य में लिंगानुपात सबसे अधिक है?",
    options_en: ["Kerala", "Uttar Pradesh", "Bihar", "Madhya Pradesh"],
    options_hi: ["केरल", "उत्तर प्रदेश", "बिहार", "मध्य प्रदेश"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Who was the first woman to become the Prime Minister of India?",
    question_hi: "भारत की पहली महिला प्रधानमंत्री कौन बनीं?",
    options_en: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],
    options_hi: ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रणब पाटिल", "सुषमा स्वराज"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which Indian city is known as the 'Silicon Valley of India'?",
    question_hi: "कौन सा भारतीय शहर 'भारत की सिलिकॉन वैली' के रूप में जाना जाता है?",
    options_en: ["Bengaluru", "Hyderabad", "Chennai", "Pune"],
    options_hi: ["बेंगलुरु", "हैदराबाद", "चेन्नई", "पुणे"],
    answer_en: "Bengaluru",
    answer_hi: "बेंगलुरु",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What is the name of India's first indigenous nuclear submarine?",
    question_hi: "भारत की पहली स्वदेशी परमाणु पनडुब्बी का नाम क्या है?",
    options_en: ["INS Vikramaditya", "INS Arihant", "INS Chakra", "INS Kalvari"],
    options_hi: ["आईएनएस विक्रमादित्य", "आईएनएस अरिहंत", "आईएनएस चक्र", "आईएनएस कलवरी"],
    answer_en: "INS Arihant",
    answer_hi: "आईएनएस अरिहंत",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which Indian state has the highest forest cover?",
    question_hi: "कौन से भारतीय राज्य में वन आवरण सबसे अधिक है?",
    options_en: ["Arunachal Pradesh", "Madhya Pradesh", "Uttarakhand", "Chhattisgarh"],
    options_hi: ["अरुणाचल प्रदेश", "मध्य प्रदेश", "उत्तराखंड", "छत्तीसगढ़"],
    answer_en: "Arunachal Pradesh",
    answer_hi: "अरुणाचल प्रदेश",
    attempted: false,
    selected: ""
  },
 
  {
    num: 30,
    question_en: "Who was the first woman to win an Olympic medal for India?",
    question_hi: "भारत के लिए ओलंपिक पदक जीतने वाली पहली महिला कौन थीं?",
    options_en: ["Karnam Malleswari", "P.V. Sindhu", "Saina Nehwal", "Mary Kom"],
    options_hi: ["कर्णम मल्लेश्वरी", "पी.वी. सिंधु", "साइना नेहवाल", "मैरी कॉम"],
    answer_en: "Karnam Malleswari",
    answer_hi: "कर्णम मल्लेश्वरी",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which Indian state is known as the 'Land of Five Rivers'?",
    question_hi: "कौन सा भारतीय राज्य 'पाँच नदियों की भूमि' के रूप में जाना जाता है?",
    options_en: ["Punjab", "Haryana", "Uttarakhand", "Himachal Pradesh"],
    options_hi: ["पंजाब", "हरियाणा", "उत्तराखंड", "हिमाचल प्रदेश"],
    answer_en: "Punjab",
    answer_hi: "पंजाब",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Who was the first Indian to win the Booker Prize?",
    question_hi: "बुक्कर पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
    options_en: ["Arundhati Roy", "Vikram Seth", "Salman Rushdie", "Kiran Desai"],
    options_hi: ["अरुंधति रॉय", "विक्रम सेठ", "सलमान रुशदी", "किरण देसाई"],
    answer_en: "Arundhati Roy",
    answer_hi: "अरुंधति रॉय",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which Indian state is known as the 'Spice Garden of India'?",
    question_hi: "कौन सा भारतीय राज्य 'भारत का मसाला बाग' के रूप में जाना जाता है?",
    options_en: ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    options_hi: ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which Indian city is known as the 'Pink City'?",
    question_hi: "कौन सा भारतीय शहर 'गुलाबी शहर' के रूप में जाना जाता है?",
    options_en: ["Jaipur", "Delhi", "Mumbai", "Kolkata"],
    options_hi: ["जयपुर", "दिल्ली", "मुंबई", "कोलकाता"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which Indian river is known as the 'Dakshin Ganga'?",
    question_hi: "कौन सी भारतीय नदी 'दक्षिण गंगा' के रूप में जानी जाती है?",
    options_en: ["Godavari", "Krishna", "Kaveri", "Yamuna"],
    options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "यमुन"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which Indian state has the largest number of districts?",
    question_hi: "कौन से भारतीय राज्य में जिलों की सबसे बड़ी संख्या है?",
    options_en: ["Uttar Pradesh", "Madhya Pradesh", "Maharashtra", "Bihar"],
    options_hi: ["उत्तर प्रदेश", "मध्य प्रदेश", "महाराष्ट्र", "बिहार"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which Indian state is known as the 'Land of the Rising Sun'?",
    question_hi: "कौन सा भारतीय राज्य 'उगते सूरज की भूमि' के रूप में जाना जाता है?",
    options_en: ["Arunachal Pradesh", "Assam", "Nagaland", "Meghalaya"],
    options_hi: ["अरुणाचल प्रदेश", "असम", "नागालैंड", "मेघालय"],
    answer_en: "Arunachal Pradesh",
    answer_hi: "अरुणाचल प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which Indian state has the highest literacy rate?",
    question_hi: "कौन से भारतीय राज्य में साक्षरता दर सबसे अधिक है?",
    options_en: ["Kerala", "Maharashtra", "Tamil Nadu", "Punjab"],
    options_hi: ["केरल", "महाराष्ट्र", "तमिलनाडु", "पंजाब"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which Indian river is known as the 'Sorrow of Bihar'?",
    question_hi: "कौन सी भारतीय नदी 'बिहार का शोक' के रूप में जानी जाती है?",
    options_en: ["Kosi", "Yamuna", "Ganga", "Brahmaputra"],
    options_hi: ["कोसी", "यमुन", "गंगा", "ब्रह्मपुत्र"],
    answer_en: "Kosi",
    answer_hi: "कोसी",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which Indian city is known as the 'City of Joy'?",
    question_hi: "कौन सा भारतीय शहर 'आनंद का शहर' के रूप में जाना जाता है?",
    options_en: ["Kolkata", "Mumbai", "Chennai", "Delhi"],
    options_hi: ["कोलकाता", "मुंबई", "चेन्नई", "दिल्ली"],
    answer_en: "Kolkata",
    answer_hi: "कोलकाता",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which Indian state has the highest population density?",
    question_hi: "कौन से भारतीय राज्य में जनसंख्या घनत्व सबसे अधिक है?",
    options_en: ["Bihar", "West Bengal", "Kerala", "Uttar Pradesh"],
    options_hi: ["बिहार", "पश्चिम बंगाल", "केरल", "उत्तर प्रदेश"],
    answer_en: "Bihar",
    answer_hi: "बिहार",
    attempted: false
  },

  {
    num: 42,
    question_en: "Which Indian city is known as the 'Pink City'?",
    question_hi: "कौन सा भारतीय शहर 'गुलाबी शहर' के रूप में जाना जाता है?",
    options_en: ["Jaipur", "Delhi", "Mumbai", "Kolkata"],
    options_hi: ["जयपुर", "दिल्ली", "मुंबई", "कोलकाता"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the name of India's first indigenous aircraft carrier with nuclear propulsion?",
    question_hi: "भारत के पहले स्वदेशी परमाणु संचालित विमानवाहक पोत का नाम क्या है?",
    options_en: ["INS Vikramaditya", "INS Vikrant", "INS Chakra", "INS Arihant"],
    options_hi: ["आईएनएस विक्रमादित्य", "आईएनएस विक्रांत", "आईएनएस चक्र", "आईएनएस अरिहंत"],
    answer_en: "INS Vikrant",
    answer_hi: "आईएनएस विक्रांत",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which Indian state is known for the famous wildlife sanctuary, Ranthambore National Park?",
    question_hi: "कौन सा भारतीय राज्य प्रसिद्ध वन्यजीव अभयारण्य, रणथंभौर राष्ट्रीय उद्यान के लिए जाना जाता है?",
    options_en: ["Maharashtra", "Rajasthan", "Uttarakhand", "Kerala"],
    options_hi: ["महाराष्ट्र", "राजस्थान", "उत्तराखंड", "केरल"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the name of the Indian organization that helps in disaster management and humanitarian relief?",
    question_hi: "भारत की वह संस्था जिसका उद्देश्य आपदा प्रबंधन और मानवीय राहत कार्य करना है, उसका नाम क्या है?",
    options_en: ["Indian Air Force", "Indian Navy", "National Disaster Management Authority (NDMA)", "Indian Army"],
    options_hi: ["भारतीय वायु सेना", "भारतीय नौसेना", "राष्ट्रीय आपदा प्रबंधन प्राधिकरण (एनडीएमए)", "भारतीय सेना"],
    answer_en: "National Disaster Management Authority (NDMA)",
    answer_hi: "राष्ट्रीय आपदा प्रबंधन प्राधिकरण (एनडीएमए)",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the Indian dance form performed with colorful masks and drums, popular in the state of Manipur?",
    question_hi: "कौन सा भारतीय नृत्य रूप है जो रंगीन मुखौटे और ढोल के साथ प्रस्तुत किया जाता है, और मणिपुर राज्य में प्रसिद्ध है?",
    options_en: ["Kathakali", "Manipuri", "Odissi", "Mohiniyattam"],
    options_hi: ["कत्थकली", "मणिपुरी", "ओडिसी", "मोहिनीयट्टम"],
    answer_en: "Manipuri",
    answer_hi: "मणिपुरी",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which Indian river is the longest among the major rivers in India?",
    question_hi: "भारत की प्रमुख नदियों में से कौन सी नदी सबसे लंबी है?",
    options_en: ["Ganges", "Yamuna", "Godavari", "Brahmaputra"],
    options_hi: ["गंगा", "यमुन", "गोदावरी", "ब्रह्मपुत्र"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which Indian Biosphere Reserve is famous for being a habitat of the Royal Bengal Tiger?",
    question_hi: "कौन सा भारतीय जैवमंडल आरक्षित क्षेत्र रॉयल बंगाल टाइगर का आवास होने के लिए प्रसिद्ध है?",
    options_en: ["Sunderbans Biosphere Reserve", "Nilgiri Biosphere Reserve", "Nanda Devi Biosphere Reserve", "Manas Biosphere Reserve"],
    options_hi: ["सुंदरबन जैवमंडल आरक्षित क्षेत्र", "निलगिरी जैवमंडल आरक्षित क्षेत्र", "नंदा देवी जैवमंडल आरक्षित क्षेत्र", "मानस जैवमंडल आरक्षित क्षेत्र"],
    answer_en: "Sunderbans Biosphere Reserve",
    answer_hi: "सुंदरबन जैवमंडल आरक्षित क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which Indian state is known as the 'Spice Garden of India'?",
    question_hi: "कौन सा भारतीय राज्य 'भारत के मसाले के बाग' के रूप में जाना जाता है?",
    options_en: ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    options_hi: ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which Indian state has the highest literacy rate?",
    question_hi: "कौन से भारतीय राज्य में साक्षरता दर सबसे अधिक है?",
    options_en: ["Kerala", "Maharashtra", "Tamil Nadu", "Punjab"],
    options_hi: ["केरल", "महाराष्ट्र", "तमिलनाडु", "पंजाब"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  }
];


 
 


  
let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes

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
