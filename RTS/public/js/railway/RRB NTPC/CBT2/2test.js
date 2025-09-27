const questions = [
  {
    num: 1,
    question_en: "Which is the longest river in the world?",
    question_hi: "दुनिया की सबसे लंबी नदी कौन सी है?",
    options_en: ["Amazon", "Nile", "Yangtze", "Ganges"],
    options_hi: ["अमेज़न", "नाइल", "यांग्त्ज़ी", "गंगा"],
    answer_en: "Nile",
    answer_hi: "नाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which element is represented by the symbol 'O'?",
    question_hi: "'O' प्रतीक से कौन सा तत्व प्रदर्शित होता है?",
    options_en: ["Oxygen", "Osmium", "Ozone", "Opium"],
    options_hi: ["ऑक्सीजन", "ओस्मियम", "ओजोन", "ओपियम"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the boiling point of water in Fahrenheit?",
    question_hi: "पानी का उबालने का बिंदु फारेनहाइट में कितना होता है?",
    options_en: ["212°F", "100°F", "32°F", "50°F"],
    options_hi: ["212°F", "100°F", "32°F", "50°F"],
    answer_en: "212°F",
    answer_hi: "212°F",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Who was the first woman to fly solo across the Atlantic?",
    question_hi: "अटलांटिक महासागर के पार अकेले उड़ान भरने वाली पहली महिला कौन थीं?",
    options_en: ["Amelia Earhart", "Valentina Tereshkova", "Sally Ride", "Bessie Coleman"],
    options_hi: ["अमेलिया एअरहार्ट", "वेलेंटिना टेरेश्कोवा", "सैली राइड", "बैसी कोलमैन"],
    answer_en: "Amelia Earhart",
    answer_hi: "अमेलिया एअरहार्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which of the following is the hardest known natural substance?",
    question_hi: "निम्नलिखित में से सबसे कठिन प्राकृतिक पदार्थ कौन सा है?",
    options_en: ["Iron", "Diamond", "Gold", "Platinum"],
    options_hi: ["लोहा", "हीरा", "सोना", "प्लैटिनम"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which of the following is the smallest bone in the human body?",
    question_hi: "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
    options_en: ["Stapes", "Femur", "Radius", "Tibia"],
    options_hi: ["स्टेप्स", "फीमर", "रेडियस", "टिबिया"],
    answer_en: "Stapes",
    answer_hi: "स्टेप्स",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the largest planet in our solar system?",
    question_hi: "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    options_en: ["Earth", "Jupiter", "Saturn", "Mars"],
    options_hi: ["पृथ्वी", "बृहस्पति", "शनि", "मंगल"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Who developed the theory of relativity?",
    question_hi: "सापेक्षता का सिद्धांत किसने विकसित किया?",
    options_en: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Max Planck"],
    options_hi: ["आइज़ैक न्यूटन", "निकोला टेस्ला", "अल्बर्ट आइंस्टीन", "मैक्स प्लांक"],
    answer_en: "Albert Einstein",
    answer_hi: "अल्बर्ट आइंस्टीन",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which gas is most abundant in Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस पाई जाती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the longest bone in the human body?",
    question_hi: "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
    options_en: ["Femur", "Humerus", "Tibia", "Fibula"],
    options_hi: ["फीमर", "ह्यूमरस", "टिबिया", "फिबुला"],
    answer_en: "Femur",
    answer_hi: "फीमर",
    attempted: false,
    selected: ""
  },
  {
  num: 11,
  question_en: "Which country is known as the 'Land of the Rising Sun'?",
  question_hi: "कौन सा देश 'उदयमान सूर्य की भूमि' के नाम से जाना जाता है?",
  options_en: ["China", "Japan", "South Korea", "Thailand"],
  options_hi: ["चीन", "जापान", "दक्षिण कोरिया", "थाईलैंड"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which of the following is the capital city of France?",
  question_hi: "निम्नलिखित में से कौन सा फ्रांस की राजधानी शहर है?",
  options_en: ["Paris", "Berlin", "Rome", "Madrid"],
  options_hi: ["पेरिस", "बर्लिन", "रोम", "मैड्रिड"],
  answer_en: "Paris",
  answer_hi: "पेरिस",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Which animal is known as the 'Ship of the Desert'?",
  question_hi: "कौन सा जानवर 'रेगिस्तान का जहाज' के रूप में जाना जाता है?",
  options_en: ["Camel", "Horse", "Elephant", "Donkey"],
  options_hi: ["ऊँट", "घोड़ा", "हाथी", "गधा"],
  answer_en: "Camel",
  answer_hi: "ऊँट",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which of the following is not a primary color?",
  question_hi: "निम्नलिखित में से कौन सा प्राथमिक रंग नहीं है?",
  options_en: ["Red", "Blue", "Green", "Yellow"],
  options_hi: ["लाल", "नीला", "हरा", "पीला"],
  answer_en: "Green",
  answer_hi: "हरा",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Who was the first man to walk on the moon?",
  question_hi: "चाँद पर चलने वाला पहला व्यक्ति कौन था?",
  options_en: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
  options_hi: ["बज़ एल्ड्रिन", "नील आर्मस्ट्रांग", "यूरी गगारिन", "जॉन ग्लेन"],
  answer_en: "Neil Armstrong",
  answer_hi: "नील आर्मस्ट्रांग",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "What is the smallest country in the world?",
  question_hi: "दुनिया का सबसे छोटा देश कौन सा है?",
  options_en: ["Vatican City", "Monaco", "Nauru", "San Marino"],
  options_hi: ["वेटिकन सिटी", "मोनाको", "नौरू", "सैन मरीनो"],
  answer_en: "Vatican City",
  answer_hi: "वेटिकन सिटी",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Which of the following is a noble gas?",
  question_hi: "निम्नलिखित में से कौन सा एक शुभ्र गैस है?",
  options_en: ["Oxygen", "Nitrogen", "Argon", "Carbon dioxide"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "कार्बन डाइऑक्साइड"],
  answer_en: "Argon",
  answer_hi: "आर्गन",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which planet is closest to the Sun?",
  question_hi: "सूरज के सबसे निकट कौन सा ग्रह है?",
  options_en: ["Mercury", "Venus", "Earth", "Mars"],
  options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
  answer_en: "Mercury",
  answer_hi: "बुध",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which is the largest island in the world?",
  question_hi: "दुनिया का सबसे बड़ा द्वीप कौन सा है?",
  options_en: ["Australia", "Greenland", "New Guinea", "Borneo"],
  options_hi: ["ऑस्ट्रेलिया", "ग्रीनलैंड", "न्यू गिनी", "बोर्नियो"],
  answer_en: "Greenland",
  answer_hi: "ग्रीनलैंड",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which element has the chemical symbol 'Na'?",
  question_hi: "'Na' रासायनिक प्रतीक वाला तत्व कौन सा है?",
  options_en: ["Sodium", "Nickel", "Nitrogen", "Neon"],
  options_hi: ["सोडियम", "निकेल", "नाइट्रोजन", "नियॉन"],
  answer_en: "Sodium",
  answer_hi: "सोडियम",
  attempted: false,
  selected: ""
},
  {
      num: 21,
      question_en: "Which one is a renewable source of energy?",
      question_hi: "इनमें से कौन सा ऊर्जा का नवीकरणीय स्रोत है?",
      options_en: ["Coal", "Petroleum", "Solar energy", "Natural gas"],
      options_hi: ["कोयला", "पेट्रोलियम", "सौर ऊर्जा", "प्राकृतिक गैस"],
      answer_en: "Solar energy",
      answer_hi: "सौर ऊर्जा",
      attempted: false,
      selected: ""
  },
  {
      num: 22,
      question_en: "The sun rises in which direction?",
      question_hi: "सूर्य किस दिशा में उगता है?",
      options_en: ["North", "South", "East", "West"],
      options_hi: ["उत्तर", "दक्षिण", "पूर्व", "पश्चिम"],
      answer_en: "East",
      answer_hi: "पूर्व",
      attempted: false,
      selected: ""
  },
  {
      num: 23,
      question_en: "What does CPU stand for?",
      question_hi: "CPU का क्या मतलब है?",
      options_en: ["Central Power Unit", "Central Processing Unit", "Control Processing Unit", "Computer Power Unit"],
      options_hi: ["सेंट्रल पावर यूनिट", "सेंट्रल प्रोसेसिंग यूनिट", "कंट्रोल प्रोसेसिंग यूनिट", "कंप्यूटर पावर यूनिट"],
      answer_en: "Central Processing Unit",
      answer_hi: "सेंट्रल प्रोसेसिंग यूनिट",
      attempted: false,
      selected: ""
  },
  {
      num: 24,
      question_en: "Which of the following is not a programming language?",
      question_hi: "निम्नलिखित में से कौन सी प्रोग्रामिंग भाषा नहीं है?",
      options_en: ["Python", "HTML", "Java", "C++"],
      options_hi: ["पाइथन", "HTML", "जावा", "C++"],
      answer_en: "HTML",
      answer_hi: "HTML",
      attempted: false,
      selected: ""
  },
  {
      num: 25,
      question_en: "What is the value of Pi (approximately)?",
      question_hi: "पाई का मान (लगभग) क्या है?",
      options_en: ["2.14", "3.14", "4.13", "1.34"],
      options_hi: ["2.14", "3.14", "4.13", "1.34"],
      answer_en: "3.14",
      answer_hi: "3.14",
      attempted: false,
      selected: ""
    },

 {
  num: 26,
  question_en: "What is the SI unit of electric current?",
  question_hi: "विद्युत धारा की एसआई इकाई क्या है?",
  options_en: ["Ampere", "Volt", "Ohm", "Coulomb"],
  options_hi: ["एंपियर", "वोल्ट", "ओम", "कूलॉम्ब"],
  answer_en: "Ampere",
  answer_hi: "एंपियर",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which gas is most abundant in Earth's atmosphere?",
  question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस पाई जाती है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Nitrogen",
  answer_hi: "नाइट्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Who developed the theory of general relativity?",
  question_hi: "सामान्य सापेक्षता का सिद्धांत किसने विकसित किया?",
  options_en: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
  options_hi: ["आइज़ैक न्यूटन", "अल्बर्ट आइंस्टीन", "निकोल टेस्ला", "गैलीलियो गैलीली"],
  answer_en: "Albert Einstein",
  answer_hi: "अल्बर्ट आइंस्टीन",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is the chemical formula of methane?",
  question_hi: "मीथेन का रासायनिक सूत्र क्या है?",
  options_en: ["CH₄", "CO₂", "H₂O", "O₂"],
  options_hi: ["CH₄", "CO₂", "H₂O", "O₂"],
  answer_en: "CH₄",
  answer_hi: "CH₄",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which vitamin is produced when the skin is exposed to sunlight?",
  question_hi: "सूर्य के प्रकाश के संपर्क में आने पर कौन सा विटामिन बनता है?",
  options_en: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B12", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "What is the boiling point of water at sea level?",
  question_hi: "समुद्र तल पर पानी का क्वथनांक कितना होता है?",
  options_en: ["90°C", "100°C", "110°C", "120°C"],
  options_hi: ["90°C", "100°C", "110°C", "120°C"],
  answer_en: "100°C",
  answer_hi: "100°C",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which organ in the human body produces insulin?",
  question_hi: "मानव शरीर में कौन सा अंग इंसुलिन का निर्माण करता है?",
  options_en: ["Liver", "Kidney", "Pancreas", "Heart"],
  options_hi: ["यकृत", "गुर्दा", "अग्न्याशय", "हृदय"],
  answer_en: "Pancreas",
  answer_hi: "अग्न्याशय",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the primary function of red blood cells?",
  question_hi: "लाल रक्त कोशिकाओं का मुख्य कार्य क्या है?",
  options_en: ["Fight infections", "Carry oxygen", "Clot blood", "Produce hormones"],
  options_hi: ["संक्रमण से लड़ना", "ऑक्सीजन पहुंचाना", "रक्त को जमाना", "हार्मोन बनाना"],
  answer_en: "Carry oxygen",
  answer_hi: "ऑक्सीजन पहुंचाना",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which planet is known as the 'Red Planet'?",
  question_hi: "कौन सा ग्रह 'लाल ग्रह' के रूप में जाना जाता है?",
  options_en: ["Venus", "Mars", "Jupiter", "Saturn"],
  options_hi: ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
  answer_en: "Mars",
  answer_hi: "मंगल",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is the chemical symbol for gold?",
  question_hi: "सोने का रासायनिक प्रतीक क्या है?",
  options_en: ["Au", "Ag", "Pb", "Fe"],
  options_hi: ["Au", "Ag", "Pb", "Fe"],
  answer_en: "Au",
  answer_hi: "Au",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which gas is used in the preparation of soda water?",
  question_hi: "सोडा वॉटर बनाने में किस गैस का उपयोग किया जाता है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which instrument is used to measure temperature?",
  question_hi: "तापमान मापने के लिए किस यंत्र का उपयोग किया जाता है?",
  options_en: ["Barometer", "Thermometer", "Hygrometer", "Altimeter"],
  options_hi: ["बारोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एल्टीमीटर"],
  answer_en: "Thermometer",
  answer_hi: "थर्मामीटर",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which planet is known for its rings?",
  question_hi: "कौन सा ग्रह अपनी वलयों के लिए जाना जाता है?",
  options_en: ["Mars", "Jupiter", "Uranus", "Saturn"],
  options_hi: ["मंगल", "बृहस्पति", "यूरेनस", "शनि"],
  answer_en: "Saturn",
  answer_hi: "शनि",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which blood group is called the universal donor?",
  question_hi: "कौन सा रक्त समूह सार्वभौमिक दाता कहलाता है?",
  options_en: ["A", "B", "O", "AB"],
  options_hi: ["A", "B", "O", "AB"],
  answer_en: "O",
  answer_hi: "O",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Who invented the telephone?",
  question_hi: "टेलीफोन का आविष्कार किसने किया?",
  options_en: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "James Watt"],
  options_hi: ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोल टेस्ला", "जेम्स वॉट"],
  answer_en: "Alexander Graham Bell",
  answer_hi: "अलेक्जेंडर ग्राहम बेल",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "What is the currency of the United Kingdom?",
  question_hi: "यूनाइटेड किंगडम की मुद्रा क्या है?",
  options_en: ["Dollar", "Euro", "Pound", "Franc"],
  options_hi: ["डॉलर", "यूरो", "पाउंड", "फ्रैंक"],
  answer_en: "Pound",
  answer_hi: "पाउंड",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which is the longest bone in the human body?",
  question_hi: "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
  options_en: ["Tibia", "Femur", "Humerus", "Fibula"],
  options_hi: ["टिबिया", "फीमर", "ह्यूमरस", "फिबुला"],
  answer_en: "Femur",
  answer_hi: "फीमर",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "What is the main component of natural gas?",
  question_hi: "प्राकृतिक गैस का मुख्य घटक क्या है?",
  options_en: ["Ethane", "Propane", "Butane", "Methane"],
  options_hi: ["एथेन", "प्रोपेन", "ब्यूटेन", "मीथेन"],
  answer_en: "Methane",
  answer_hi: "मीथेन",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which is the largest internal organ in the human body?",
  question_hi: "मानव शरीर का सबसे बड़ा आंतरिक अंग कौन सा है?",
  options_en: ["Liver", "Heart", "Lungs", "Kidney"],
  options_hi: ["यकृत", "हृदय", "फेफड़े", "गुर्दा"],
  answer_en: "Liver",
  answer_hi: "यकृत",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which device is used to measure blood pressure?",
  question_hi: "रक्तचाप मापने के लिए कौन सा उपकरण उपयोग किया जाता है?",
  options_en: ["Stethoscope", "Thermometer", "Sphygmomanometer", "Barometer"],
  options_hi: ["स्टीथोस्कोप", "थर्मामीटर", "स्फिग्मोमनोमीटर", "बारोमीटर"],
  answer_en: "Sphygmomanometer",
  answer_hi: "स्फिग्मोमनोमीटर",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कमरे के तापमान पर कौन सी धातु तरल होती है?",
  options_en: ["Iron", "Mercury", "Aluminium", "Copper"],
  options_hi: ["लोहा", "पारा", "एल्युमिनियम", "तांबा"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is the square root of 144?",
  question_hi: "144 का वर्गमूल क्या है?",
  options_en: ["10", "11", "12", "13"],
  options_hi: ["10", "11", "12", "13"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which is the smallest bone in the human body?",
  question_hi: "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
  options_en: ["Stapes", "Ulna", "Radius", "Tibia"],
  options_hi: ["स्टेप्स", "अल्ना", "रेडियस", "टिबिया"],
  answer_en: "Stapes",
  answer_hi: "स्टेप्स",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which country gifted the Statue of Liberty to the USA?",
  question_hi: "स्टैच्यू ऑफ लिबर्टी अमेरिका को किस देश ने उपहार में दी थी?",
  options_en: ["Germany", "France", "Italy", "Spain"],
  options_hi: ["जर्मनी", "फ्रांस", "इटली", "स्पेन"],
  answer_en: "France",
  answer_hi: "फ्रांस",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which planet is closest to the Sun?",
  question_hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
  options_en: ["Mercury", "Venus", "Earth", "Mars"],
  options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
  answer_en: "Mercury",
  answer_hi: "बुध",
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