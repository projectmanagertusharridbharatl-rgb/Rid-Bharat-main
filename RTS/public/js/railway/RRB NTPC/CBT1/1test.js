const questions = [
  {
    num: 1,
    question_en: "Who is known as the 'Father of the Nation' in India?",
    question_hi: "भारत में 'राष्ट्रपिता' के रूप में कौन जाने जाते हैं?",
    options_en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh"],
    options_hi: ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह"],
    answer_en: "Mahatma Gandhi",
    answer_hi: "महात्मा गांधी",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the capital of India?",
    question_hi: "भारत की राजधानी क्या है?",
    options_en: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    options_hi: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"],
    answer_en: "New Delhi",
    answer_hi: "नई दिल्ली",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which of the following is the largest continent in the world?",
    question_hi: "निम्नलिखित में से कौन सा महाद्वीप विश्व का सबसे बड़ा महाद्वीप है?",
    options_en: ["Asia", "Africa", "Europe", "North America"],
    options_hi: ["एशिया", "अफ्रीका", "यूरोप", "उत्तरी अमेरिका"],
    answer_en: "Asia",
    answer_hi: "एशिया",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which of the following is the national animal of India?",
    question_hi: "निम्नलिखित में से भारत का राष्ट्रीय पशु कौन सा है?",
    options_en: ["Lion", "Elephant", "Tiger", "Peacock"],
    options_hi: ["सिंह", "हाथी", "बाघ", "मोर"],
    answer_en: "Tiger",
    answer_hi: "बाघ",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "In which year did India gain independence?",
    question_hi: "भारत ने स्वतंत्रता कब प्राप्त की?",
    options_en: ["1942", "1947", "1950", "1962"],
    options_hi: ["1942", "1947", "1950", "1962"],
    answer_en: "1947",
    answer_hi: "1947",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Who was the first President of India?",
    question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
    options_en: ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain", "Dr. Abdul Kalam"],
    options_hi: ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. जाकिर हुसैन", "डॉ. अब्दुल कलाम"],
    answer_en: "Dr. Rajendra Prasad",
    answer_hi: "डॉ. राजेंद्र प्रसाद",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which of the following is the longest river in the world?",
    question_hi: "निम्नलिखित में से कौन सी नदी विश्व की सबसे लंबी नदी है?",
    options_en: ["Amazon", "Nile", "Ganges", "Mississippi"],
    options_hi: ["अमेजन", "नाइल", "गंगा", "मिसिसिपी"],
    answer_en: "Nile",
    answer_hi: "नाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Who was the first woman Prime Minister of India?",
    question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    options_en: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Mamata Banerjee"],
    options_hi: ["इंदिरा गांधी", "सोनिया गांधी", "प्रतिभा पाटिल", "ममता बनर्जी"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which country is known as the 'Land of the Rising Sun'?",
    question_hi: "कौन सा देश 'उगते सूरज की भूमि' के नाम से जाना जाता है?",
    options_en: ["China", "Japan", "India", "South Korea"],
    options_hi: ["चीन", "जापान", "भारत", "दक्षिण कोरिया"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the currency of the United States?",
    question_hi: "संयुक्त राज्य अमेरिका की मुद्रा क्या है?",
    options_en: ["Dollar", "Pound", "Euro", "Yen"],
    options_hi: ["डॉलर", "पाउंड", "यूरो", "येन"],
    answer_en: "Dollar",
    answer_hi: "डॉलर",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which of the following is the chemical symbol for water?",
    question_hi: "निम्नलिखित में से जल का रासायनिक प्रतीक कौन सा है?",
    options_en: ["H2O", "CO2", "O2", "H2O2"],
    options_hi: ["H2O", "CO2", "O2", "H2O2"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Who invented the light bulb?",
    question_hi: "दीपक का आविष्कार किसने किया?",
    options_en: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "James Watt"],
    options_hi: ["निकोला टेस्ला", "थॉमस एडिसन", "अल्बर्ट आइंस्टीन", "जेम्स वाट"],
    answer_en: "Thomas Edison",
    answer_hi: "थॉमस एडिसन",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which of the following is the national flower of India?",
    question_hi: "निम्नलिखित में से भारत का राष्ट्रीय फूल कौन सा है?",
    options_en: ["Rose", "Lotus", "Sunflower", "Jasmine"],
    options_hi: ["गुलाब", "कमल", "सूरजमुखी", "चमेली"],
    answer_en: "Lotus",
    answer_hi: "कमल",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What is the smallest state in India by area?",
    question_hi: "क्षेत्रफल के हिसाब से भारत का सबसे छोटा राज्य कौन सा है?",
    options_en: ["Goa", "Sikkim", "Delhi", "Tripura"],
    options_hi: ["गोवा", "सिक्किम", "दिल्ली", "त्रिपुरा"],
    answer_en: "Goa",
    answer_hi: "गोवा",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Who wrote the book 'Pride and Prejudice'?",
    question_hi: "'प्राइड एंड प्रिजूडिस' पुस्तक के लेखक कौन हैं?",
    options_en: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
    options_hi: ["विलियम शेक्सपियर", "जेन ऑस्टेन", "चार्ल्स डिकेन्स", "मार्क ट्वेन"],
    answer_en: "Jane Austen",
    answer_hi: "जेन ऑस्टेन",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which is the longest river in India?",
    question_hi: "भारत में सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Yamuna", "Godavari", "Narmada"],
    options_hi: ["गंगा", "यमुना", "गोदावरी", "नर्मदा"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which is the largest ocean in the world?",
    question_hi: "विश्व का सबसे बड़ा महासागर कौन सा है?",
    options_en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    options_hi: ["अटलांटिक महासागर", "भारतीय महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
  },
  {
  num: 18,
  question_en: "What is the full form of RRB NTPC?",
  question_hi: "RRB NTPC का पूर्ण रूप क्या है?",
  options_en: [
    "Railway Recruitment Board Non-Technical Popular Categories",
    "Railway Resource Bureau National Technical Promotion Council",
    "Regional Recruitment Board Non-Technical Popular Categories",
    "Railway Recruitment Board National Training and Placement Committee"
  ],
  options_hi: [
    "रेलवे भर्ती बोर्ड गैर-तकनीकी लोकप्रिय श्रेणियाँ",
    "रेलवे संसाधन ब्यूरो राष्ट्रीय तकनीकी पदोन्नति परिषद",
    "क्षेत्रीय भर्ती बोर्ड गैर-तकनीकी लोकप्रिय श्रेणियाँ",
    "रेलवे भर्ती बोर्ड राष्ट्रीय प्रशिक्षण और प्लेसमेंट समिति"
  ],
  answer_en: "Railway Recruitment Board Non-Technical Popular Categories",
  answer_hi: "रेलवे भर्ती बोर्ड गैर-तकनीकी लोकप्रिय श्रेणियाँ",
  attempted: false,
  selected: ""
},

  {
  num: 19,
  question_en: "Which of the following is the currency of Japan?",
  question_hi: "निम्नलिखित में से जापान की मुद्रा क्या है?",
  options_en: ["Yuan", "Won", "Yen", "Ringgit"],
  options_hi: ["युआन", "वोन", "येन", "रिंगित"],
  answer_en: "Yen",
  answer_hi: "येन",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which is the largest country in the world by area?",
  question_hi: "क्षेत्रफल के हिसाब से दुनिया का सबसे बड़ा देश कौन सा है?",
  options_en: ["Russia", "United States", "Canada", "China"],
  options_hi: ["रूस", "संयुक्त राज्य", "कनाडा", "चीन"],
  answer_en: "Russia",
  answer_hi: "रूस",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Who invented the telephone?",
  question_hi: "टेलीफोन का आविष्कार किसने किया?",
  options_en: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
  options_hi: ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुग्लिएल्मो मारकोनी"],
  answer_en: "Alexander Graham Bell",
  answer_hi: "अलेक्जेंडर ग्राहम बेल",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which is the national bird of India?",
  question_hi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
  options_en: ["Peacock", "Eagle", "Sparrow", "Crow"],
  options_hi: ["मोर", "गरुड़", "चिड़िया", "कौआ"],
  answer_en: "Peacock",
  answer_hi: "मोर",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which is the first manned mission to the moon?",
  question_hi: "चंद्रमा पर जाने वाला पहला मानव मिशन कौन सा था?",
  options_en: ["Apollo 11", "Apollo 13", "Gemini 8", "Mercury 7"],
  options_hi: ["एपोलो 11", "एपोलो 13", "जेमिनी 8", "मर्करी 7"],
  answer_en: "Apollo 11",
  answer_hi: "एपोलो 11",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which is the tallest mountain in the world?",
  question_hi: "दुनिया का सबसे ऊँचा पर्वत कौन सा है?",
  options_en: ["K2", "Mount Everest", "Kanchenjunga", "Mount Kilimanjaro"],
  options_hi: ["K2", "माउंट एवरेस्ट", "कंचनजंगा", "माउंट किलिमंजारो"],
  answer_en: "Mount Everest",
  answer_hi: "माउंट एवरेस्ट",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which of the following is the chemical symbol for carbon dioxide?",
  question_hi: "निम्नलिखित में से कार्बन डाइऑक्साइड का रासायनिक प्रतीक क्या है?",
  options_en: ["CO", "CO2", "C2O", "O2C"],
  options_hi: ["CO", "CO2", "C2O", "O2C"],
  answer_en: "CO2",
  answer_hi: "CO2",
  attempted: false,
  selected: ""
},


      
      
  {
      num: 26,
      question_en: "Which device is used to convert AC to DC?",
      question_hi: "AC को DC में बदलने के लिए कौन सा उपकरण उपयोग किया जाता है?",
      options_en: ["Transformer", "Rectifier", "Amplifier", "Regulator"],
      options_hi: ["ट्रांसफॉर्मर", "रेक्टिफायर", "एंपलीफायर", "रेगुलेटर"],
      answer_en: "Rectifier",
      answer_hi: "रेक्टिफायर",
      attempted: false,
      selected: ""
  },
  {
      num: 27,
      question_en: "What is the speed of sound in air at room temperature?",
      question_hi: "कमरे के तापमान पर हवा में ध्वनि की गति क्या है?",
      options_en: ["330 m/s", "1500 m/s", "3x10^8 m/s", "100 m/s"],
      options_hi: ["330 मी/से", "1500 मी/से", "3x10^8 मी/से", "100 मी/से"],
      answer_en: "330 m/s",
      answer_hi: "330 मी/से",
      attempted: false,
      selected: ""
  },
  {
      num: 28,
      question_en: "Which part of the brain controls heartbeat and breathing?",
      question_hi: "मस्तिष्क का कौन सा भाग दिल की धड़कन और श्वास को नियंत्रित करता है?",
      options_en: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"],
      options_hi: ["सेरेब्रम", "सेरेबेलम", "मेडुला", "थैलेमस"],
      answer_en: "Medulla",
      answer_hi: "मेडुला",
      attempted: false,
      selected: ""
  },
  {
      num: 29,
      question_en: "Which component is used to store charge?",
      question_hi: "कौन सा घटक चार्ज स्टोर करने के लिए उपयोग किया जाता है?",
      options_en: ["Resistor", "Capacitor", "Inductor", "Transistor"],
      options_hi: ["रेज़िस्टर", "कैपेसिटर", "इंडक्टर", "ट्रांजिस्टर"],
      answer_en: "Capacitor",
      answer_hi: "कैपेसिटर",
      attempted: false,
      selected: ""
  },
  {
      num: 30,
      question_en: "Which of the following is a conductor of electricity?",
      question_hi: "निम्नलिखित में से कौन विद्युत का चालक है?",
      options_en: ["Rubber", "Wood", "Copper", "Plastic"],
      options_hi: ["रबर", "लकड़ी", "तांबा", "प्लास्टिक"],
      answer_en: "Copper",
      answer_hi: "तांबा",
      attempted: false,
      selected: ""
  },
  {
      num: 31,
      question_en: "How many bits are there in a byte?",
      question_hi: "एक बाइट में कितने बिट्स होते हैं?",
      options_en: ["4", "8", "10", "16"],
      options_hi: ["4", "8", "10", "16"],
      answer_en: "8",
      answer_hi: "8",
      attempted: false,
      selected: ""
  },
  {
      num: 32,
      question_en: "Which fuel is used in nuclear reactors?",
      question_hi: "न्यूक्लियर रिएक्टरों में कौन सा ईंधन उपयोग किया जाता है?",
      options_en: ["Uranium", "Coal", "Diesel", "Petrol"],
      options_hi: ["यूरेनियम", "कोयला", "डीजल", "पेट्रोल"],
      answer_en: "Uranium",
      answer_hi: "यूरेनियम",
      attempted: false,
      selected: ""
  },
  {
      num: 33,
      question_en: "What does ATM stand for?",
      question_hi: "ATM का क्या मतलब है?",
      options_en: ["Automatic Time Machine", "Automatic Teller Machine", "Any Time Money", "Automatic Transfer Machine"],
      options_hi: ["ऑटोमेटिक टाइम मशीन", "ऑटोमेटिक टेलर मशीन", "एनी टाइम मनी", "ऑटोमेटिक ट्रांसफर मशीन"],
      answer_en: "Automatic Teller Machine",
      answer_hi: "ऑटोमेटिक टेलर मशीन",
      attempted: false,
      selected: ""
  },
  {
      num: 34,
      question_en: "Which one is a vector quantity?",
      question_hi: "इनमें से कौन सा एक वेक्टर राशि है?",
      options_en: ["Speed", "Distance", "Mass", "Velocity"],
      options_hi: ["गति", "दूरी", "द्रव्यमान", "वेग"],
      answer_en: "Velocity",
      answer_hi: "वेग",
      attempted: false,
      selected: ""
  },
  {
      num: 35,
      question_en: "Which gas is used in electric bulbs?",
      question_hi: "इलेक्ट्रिक बल्बों में कौन सा गैस उपयोग किया जाता है?",
      options_en: ["Nitrogen", "Oxygen", "Argon", "Hydrogen"],
      options_hi: ["नाइट्रोजन", "ऑक्सीजन", "आर्गन", "हाइड्रोजन"],
      answer_en: "Argon",
      answer_hi: "आर्गन",
      attempted: false,
      selected: ""
  },
  {
      num: 36,
      question_en: "What is used to measure atmospheric pressure?",
      question_hi: "वायुमंडलीय दबाव को मापने के लिए कौन सा यंत्र उपयोग किया जाता है?",
      options_en: ["Manometer", "Barometer", "Thermometer", "Anemometer"],
      options_hi: ["मैनोमीटर", "बारोमीटर", "थर्मामीटर", "एनीमोमीटर"],
      answer_en: "Barometer",
      answer_hi: "बारोमीटर",
      attempted: false,
      selected: ""
  },
  {
      num: 37,
      question_en: "Which acid is found in vinegar?",
      question_hi: "विनेगर में कौन सा अम्ल पाया जाता है?",
      options_en: ["Citric acid", "Acetic acid", "Sulphuric acid", "Hydrochloric acid"],
      options_hi: ["साइट्रिक अम्ल", "एसीटिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
      answer_en: "Acetic acid",
      answer_hi: "एसीटिक अम्ल",
      attempted: false,
      selected: ""
  },
  {
      num: 38,
      question_en: "Which material is attracted by a magnet?",
      question_hi: "कौन सा पदार्थ चुंबक द्वारा आकर्षित होता है?",
      options_en: ["Wood", "Glass", "Iron", "Plastic"],
      options_hi: ["लकड़ी", "कांच", "लोहा", "प्लास्टिक"],
      answer_en: "Iron",
      answer_hi: "लोहा",
      attempted: false,
      selected: ""
  },
  {
      num: 39,
      question_en: "Which one of these is a non-metal?",
      question_hi: "इनमें से कौन सा गैर-धातु है?",
      options_en: ["Gold", "Iron", "Copper", "Sulfur"],
      options_hi: ["सोना", "लोहा", "तांबा", "गंधक"],
      answer_en: "Sulfur",
      answer_hi: "गंधक",
      attempted: false,
      selected: ""
  },
  {
      num: 40,
      question_en: "Who discovered gravity?",
      question_hi: "गुरुत्वाकर्षण की खोज किसने की?",
      options_en: ["Newton", "Einstein", "Galileo", "Edison"],
      options_hi: ["न्यूटन", "आइंस्टीन", "गैलीलियो", "एडिसन"],
      answer_en: "Newton",
      answer_hi: "न्यूटन",
      attempted: false,
      selected: ""
  },
  {
      num: 41,
      question_en: "Which of the following is used in pencils?",
      question_hi: "निम्नलिखित में से कौन सा पेंसिलों में उपयोग किया जाता है?",
      options_en: ["Graphite", "Lead", "Charcoal", "Carbon"],
      options_hi: ["ग्रेफाइट", "सीसा", "कोयला", "कार्बन"],
      answer_en: "Graphite",
      answer_hi: "ग्रेफाइट",
      attempted: false,
      selected: ""
  },
  {
      num: 42,
      question_en: "What is the currency of Japan?",
      question_hi: "जापान की मुद्रा क्या है?",
      options_en: ["Yuan", "Won", "Yen", "Dollar"],
      options_hi: ["युआन", "वॉन", "येन्", "डॉलर"],
      answer_en: "Yen",
      answer_hi: "येन्",
      attempted: false,
      selected: ""
  },
  {
      num: 43,
      question_en: "Which is the smallest prime number?",
      question_hi: "सबसे छोटा अभाज्य संख्या कौन सी है?",
      options_en: ["1", "2", "3", "5"],
      options_hi: ["1", "2", "3", "5"],
      answer_en: "2",
      answer_hi: "2",
      attempted: false,
      selected: ""
  },
  {
      num: 44,
      question_en: "What is the freezing point of water?",
      question_hi: "पानी का जमाव बिंदु क्या है?",
      options_en: ["0°C", "100°C", "50°C", "10°C"],
      options_hi: ["0°C", "100°C", "50°C", "10°C"],
      answer_en: "0°C",
      answer_hi: "0°C",
      attempted: false,
      selected: ""
  },
  {
      num: 45,
      question_en: "Which of the following is NOT a programming language?",
      question_hi: "निम्नलिखित में से कौन सी प्रोग्रामिंग भाषा नहीं है?",
      options_en: ["Java", "Python", "HTML", "C++"],
      options_hi: ["जावा", "पाइथन", "HTML", "C++"],
      answer_en: "HTML",
      answer_hi: "HTML",
      attempted: false,
      selected: ""
  },
  {
      num: 46,
      question_en: "What is the function of RAM in a computer?",
      question_hi: "कंप्यूटर में RAM का कार्य क्या है?",
      options_en: ["Storage", "Display", "Temporary memory", "Power supply"],
      options_hi: ["स्टोरेज", "डिस्प्ले", "अस्थायी मेमोरी", "पावर सप्लाई"],
      answer_en: "Temporary memory",
      answer_hi: "अस्थायी मेमोरी",
      attempted: false,
      selected: ""
  },
  {
      num: 47,
      question_en: "Which vitamin is known as ascorbic acid?",
      question_hi: "कौन सा विटामिन एस्कॉर्बिक अम्ल के नाम से जाना जाता है?",
      options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
      options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन B12"],
      answer_en: "Vitamin C",
      answer_hi: "विटामिन C",
      attempted: false,
      selected: ""
  },
  {
      num: 48,
      question_en: "Which part of the eye controls the amount of light entering?",
      question_hi: "आंख का कौन सा भाग प्रकाश की मात्रा को नियंत्रित करता है?",
      options_en: ["Cornea", "Iris", "Retina", "Lens"],
      options_hi: ["कॉर्निया", "आईरिस", "रेटिना", "लेन्स"],
      answer_en: "Iris",
      answer_hi: "आईरिस",
      attempted: false,
      selected: ""
  },
  {
      num: 49,
      question_en: "Which is the largest gland in the human body?",
      question_hi: "मानव शरीर का सबसे बड़ा ग्रंथि कौन सा है?",
      options_en: ["Pancreas", "Liver", "Thyroid", "Adrenal"],
      options_hi: ["पैंक्रियास", "यकृत", "थायरॉयड", "एड्रिनल"],
      answer_en: "Liver",
      answer_hi: "यकृत",
      attempted: false,
      selected: ""
  },
  {
      num: 50,
      question_en: "Which energy conversion takes place in a battery?",
      question_hi: "बैटरी में कौन सा ऊर्जा रूपांतरण होता है?",
      options_en: ["Mechanical to electrical", "Electrical to chemical", "Chemical to electrical", "Heat to electrical"],
      options_hi: ["मैकेनिकल से इलेक्ट्रिकल", "इलेक्ट्रिकल से रासायनिक", "रासायनिक से इलेक्ट्रिकल", "ताप से इलेक्ट्रिकल"],
      answer_en: "Chemical to electrical",
      answer_hi: "रासायनिक से इलेक्ट्रिकल",
      attempted: false,
      selected: ""
},
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