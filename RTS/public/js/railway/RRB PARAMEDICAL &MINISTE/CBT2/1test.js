const questions = [
  {
    num: 1,
    question_en: "Which vitamin helps in calcium absorption?",
    question_hi: "कौन सा विटामिन कैल्शियम के अवशोषण में मदद करता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Who invented the light bulb?",
    question_hi: "लाइट बल्ब की खोज किसने की थी?",
    options_en: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"],
    options_hi: ["निकोला टेस्ला", "थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "बेंजामिन फ्रैंकलिन"],
    answer_en: "Thomas Edison",
    answer_hi: "थॉमस एडिसन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the largest planet in our solar system?",
    question_hi: "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    options_en: ["Earth", "Saturn", "Jupiter", "Mars"],
    options_hi: ["पृथ्वी", "शनि", "बृहस्पति", "मंगल"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which organ is primarily responsible for detoxification in the body?",
    question_hi: "शरीर में विषाक्त पदार्थों को निकालने के लिए कौन सा अंग मुख्य रूप से जिम्मेदार है?",
    options_en: ["Heart", "Lungs", "Kidneys", "Liver"],
    options_hi: ["हृदय", "फेफड़े", "गुर्दे", "यकृत"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the capital of Japan?",
    question_hi: "जापान की राजधानी कौन सी है?",
    options_en: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    options_hi: ["सियोल", "बीजिंग", "टोक्यो", "बैंकॉक"],
    answer_en: "Tokyo",
    answer_hi: "टोक्यो",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which element has the chemical symbol 'O'?",
    question_hi: "किस तत्व का रासायनिक प्रतीक 'O' है?",
    options_en: ["Oxygen", "Osmium", "Ozone", "Opium"],
    options_hi: ["ऑक्सीजन", "ऑस्मियम", "ओजोन", "अफीम"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which of the following is not a type of blood cell?",
    question_hi: "निम्नलिखित में से कौन रक्त कोशिका का प्रकार नहीं है?",
    options_en: ["Red Blood Cell", "White Blood Cell", "Platelet", "Erythrocyte"],
    options_hi: ["लाल रक्त कोशिका", "सफेद रक्त कोशिका", "प्लेटलेट", "एरिथ्रोसाइट"],
    answer_en: "Erythrocyte",
    answer_hi: "एरिथ्रोसाइट",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which is the smallest planet in the solar system?",
    question_hi: "सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
    options_en: ["Venus", "Mars", "Mercury", "Earth"],
    options_hi: ["शुक्र", "मंगल", "पृथ्वी", "बुध"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "In which country is the Great Barrier Reef located?",
    question_hi: "ग्रेट बैरियर रीफ किस देश में स्थित है?",
    options_en: ["Australia", "USA", "India", "South Africa"],
    options_hi: ["ऑस्ट्रेलिया", "यूएसए", "भारत", "दक्षिण अफ्रीका"],
    answer_en: "Australia",
    answer_hi: "ऑस्ट्रेलिया",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the boiling point of water in Celsius?",
    question_hi: "पानी का क्वथनांक सेल्सियस में क्या होता है?",
    options_en: ["90°C", "100°C", "110°C", "120°C"],
    options_hi: ["90°C", "100°C", "110°C", "120°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which of the following diseases is caused by a virus?",
    question_hi: "निम्नलिखित में से कौन सा रोग वायरस के कारण होता है?",
    options_en: ["Tuberculosis", "Malaria", "Chickenpox", "Dengue"],
    options_hi: ["क्षय रोग", "मलेरिया", "चेचक", "डेंगू"],
    answer_en: "Chickenpox",
    answer_hi: "चेचक",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which gas is most abundant in Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे प्रचुर गैस कौन सी है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the currency of the United Kingdom?",
    question_hi: "यूनाइटेड किंगडम की मुद्रा क्या है?",
    options_en: ["Euro", "Pound", "Dollar", "Yen"],
    options_hi: ["यूरो", "पाउंड", "डॉलर", "येन्"],
    answer_en: "Pound",
    answer_hi: "पाउंड",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What is the hardest natural substance on Earth?",
    question_hi: "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    options_en: ["Gold", "Diamond", "Platinum", "Iron"],
    options_hi: ["सोना", "हीरा", "प्लैटिनम", "लोहा"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which animal is known as the 'King of the Jungle'?",
    question_hi: "कौन सा जानवर 'जंगल का राजा' कहलाता है?",
    options_en: ["Tiger", "Elephant", "Lion", "Bear"],
    options_hi: ["बाघ", "हाथी", "सिंह", "भालू"],
    answer_en: "Lion",
    answer_hi: "सिंह",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which element is represented by the chemical symbol 'Na'?",
    question_hi: "किस तत्व का रासायनिक प्रतीक 'Na' है?",
    options_en: ["Nitrogen", "Sodium", "Nickel", "Neon"],
    options_hi: ["नाइट्रोजन", "सोडियम", "निकेल", "नियॉन"],
    answer_en: "Sodium",
    answer_hi: "सोडियम",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which disease is caused by a lack of insulin in the body?",
    question_hi: "शरीर में इंसुलिन की कमी के कारण कौन सा रोग होता है?",
    options_en: ["Diabetes", "Asthma", "HIV", "Cancer"],
    options_hi: ["मधुमेह", "दमा", "एचआईवी", "कैंसर"],
    answer_en: "Diabetes",
    answer_hi: "मधुमेह",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Who was the first President of the United States?",
    question_hi: "संयुक्त राज्य अमेरिका के पहले राष्ट्रपति कौन थे?",
    options_en: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
    options_hi: ["अब्राहम लिंकन", "जॉर्ज वॉशिंगटन", "थॉमस जेफरसन", "जॉन एडम्स"],
    answer_en: "George Washington",
    answer_hi: "जॉर्ज वॉशिंगटन",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which is the longest river in the world?",
    question_hi: "दुनिया की सबसे लंबी नदी कौन सी है?",
    options_en: ["Amazon", "Nile", "Ganges", "Yangtze"],
    options_hi: ["अमेज़न", "नाइल", "गंगा", "यांग्त्से"],
    answer_en: "Nile",
    answer_hi: "नाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which country is known as the Land of the Rising Sun?",
    question_hi: "कौन सा देश 'उगते सूरज की भूमि' के नाम से जाना जाता है?",
    options_en: ["China", "Japan", "South Korea", "India"],
    options_hi: ["चीन", "जापान", "दक्षिण कोरिया", "भारत"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the main function of the kidneys?",
    question_hi: "गुर्दों का मुख्य कार्य क्या है?",
    options_en: [
      "Filter waste from blood",
      "Pump blood",
      "Regulate body temperature",
      "Produce insulin"
    ],
    options_hi: [
      "रक्त से अपशिष्ट को छानना",
      "रक्त पंप करना",
      "शरीर का तापमान नियंत्रित करना",
      "इंसुलिन का उत्पादन करना"
    ],
    answer_en: "Filter waste from blood",
    answer_hi: "रक्त से अपशिष्ट को छानना",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which organ in the human body produces insulin?",
    question_hi: "मानव शरीर में कौन सा अंग इंसुलिन का उत्पादन करता है?",
    options_en: ["Pancreas", "Liver", "Heart", "Lungs"],
    options_hi: ["अग्न्याशय", "यकृत", "हृदय", "फेफड़े"],
    answer_en: "Pancreas",
    answer_hi: "अग्न्याशय",
    attempted: false,
    selected: ""
  },
  {
  num: 23,
  question_en: "What is the largest continent by area?",
  question_hi: "क्षेत्रफल के हिसाब से सबसे बड़ा महाद्वीप कौन सा है?",
  options_en: ["Africa", "Asia", "Europe", "Australia"],
  options_hi: ["अफ्रीका", "एशिया", "यूरोप", "ऑस्ट्रेलिया"],
  answer_en: "Asia",
  answer_hi: "एशिया",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which planet is known as the Red Planet?",
  question_hi: "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
  options_en: ["Earth", "Venus", "Mars", "Jupiter"],
  options_hi: ["पृथ्वी", "शुक्र", "मंगल", "बृहस्पति"],
  answer_en: "Mars",
  answer_hi: "मंगल",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which disease is caused by a lack of vitamin C?",
  question_hi: "विटामिन C की कमी से कौन सा रोग होता है?",
  options_en: ["Rickets", "Scurvy", "Beriberi", "Goiter"],
  options_hi: ["रिकेट्स", "स्कर्वी", "बेरीबेरी", "घेंघा"],
  answer_en: "Scurvy",
  answer_hi: "स्कर्वी",
  attempted: false,
  selected: ""
},

    
  {
    num: 26,
    question_en: "What is the chemical formula of water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "O2", "NaCl"],
    options_hi: ["H2O", "CO2", "O2", "NaCl"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which planet is closest to the Sun?",
    question_hi: "सूरज के सबसे करीब कौन सा ग्रह है?",
    options_en: ["Mercury", "Venus", "Earth", "Mars"],
    options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Who wrote the play 'Romeo and Juliet'?",
    question_hi: "'रोमियो और जूलियट' नाटक किसने लिखा?",
    options_en: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    options_hi: ["विलियम शेक्सपियर", "चार्ल्स डिकेंस", "जेन ऑस्टेन", "मार्क ट्वेन"],
    answer_en: "William Shakespeare",
    answer_hi: "विलियम शेक्सपियर",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What gas do plants absorb from the atmosphere for photosynthesis?",
    question_hi: "पौधे प्रकाश संश्लेषण के लिए वायुमंडल से कौन सी गैस अवशोषित करते हैं?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कौन सा धातु कमरे के तापमान पर द्रव (तरल) होती है?",
    options_en: ["Mercury", "Iron", "Gold", "Silver"],
    options_hi: ["पारा", "लोहा", "सोना", "चांदी"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "What is the primary function of white blood cells?",
    question_hi: "सफेद रक्त कोशिकाओं का प्राथमिक कार्य क्या है?",
    options_en: ["Carry oxygen", "Fight infection", "Form blood clots", "Produce hormones"],
    options_hi: ["ऑक्सीजन ले जाना", "संक्रमण से लड़ना", "रक्त का थक्का बनाना", "हार्मोन का उत्पादन करना"],
    answer_en: "Fight infection",
    answer_hi: "संक्रमण से लड़ना",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "What is the capital of Canada?",
    question_hi: "कनाडा की राजधानी कौन सी है?",
    options_en: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    options_hi: ["टोरंटो", "वैंकूवर", "ओटावा", "मॉन्ट्रियल"],
    answer_en: "Ottawa",
    answer_hi: "ओटावा",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which vitamin is responsible for blood clotting?",
    question_hi: "कौन सा विटामिन रक्त के थक्के बनने के लिए जिम्मेदार है?",
    options_en: ["Vitamin A", "Vitamin K", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन K", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin K",
    answer_hi: "विटामिन K",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which ocean is the largest by surface area?",
    question_hi: "कौन सा महासागर सतह क्षेत्र के हिसाब से सबसे बड़ा है?",
    options_en: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    options_hi: ["अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the chemical formula for water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "O2", "H2SO4"],
    options_hi: ["H2O", "CO2", "O2", "H2SO4"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which planet has the most moons?",
    question_hi: "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
    options_en: ["Jupiter", "Saturn", "Mars", "Earth"],
    options_hi: ["बृहस्पति", "शनि", "मंगल", "पृथ्वी"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which gas do plants absorb for photosynthesis?",
    question_hi: "पौधे प्रकाश संश्लेषण के लिए कौन सी गैस अवशोषित करते हैं?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which part of the human brain controls memory?",
    question_hi: "मानव मस्तिष्क का कौन सा हिस्सा याददाश्त को नियंत्रित करता है?",
    options_en: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    options_hi: ["सिरिब्रम", "सिरिबेलम", "मेडुला", "हाइपोथैलमस"],
    answer_en: "Cerebrum",
    answer_hi: "सिरिब्रम",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which instrument is used to measure temperature?",
    question_hi: "तापमान मापने के लिए कौन सा यंत्र उपयोग किया जाता है?",
    options_en: ["Thermometer", "Barometer", "Hygrometer", "Odometer"],
    options_hi: ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "ओडोमीटर"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which is the largest internal organ in the human body?",
    question_hi: "मानव शरीर का सबसे बड़ा आंतरिक अंग कौन सा है?",
    options_en: ["Liver", "Heart", "Lungs", "Brain"],
    options_hi: ["यकृत", "हृदय", "फेफड़े", "मस्तिष्क"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
  },
  
  {
    num: 41,
    question_en: "Which instrument is used to measure humidity?",
    question_hi: "आर्द्रता मापने के लिए कौन सा यंत्र उपयोग किया जाता है?",
    options_en: ["Barometer", "Hygrometer", "Anemometer", "Altimeter"],
    options_hi: ["बैरोमीटर", "हाइग्रोमीटर", "एनीमामीटर", "एल्टीमीटर"],
    answer_en: "Hygrometer",
    answer_hi: "हाइग्रोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Who is known as the father of modern physics?",
    question_hi: "आधुनिक भौतिकी का पिता किसे कहा जाता है?",
    options_en: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"],
    options_hi: ["आईजक न्यूटन", "अल्बर्ट आइंस्टीन", "नील्स बोहर", "मैक्स प्लांक"],
    answer_en: "Albert Einstein",
    answer_hi: "अल्बर्ट आइंस्टीन",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which element is the most abundant in the Earth's crust?",
    question_hi: "पृथ्वी की क्रस्ट में सबसे प्रचुर तत्व कौन सा है?",
    options_en: ["Iron", "Oxygen", "Silicon", "Calcium"],
    options_hi: ["लोहा", "ऑक्सीजन", "सिलिकॉन", "कैल्शियम"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What is the currency of Japan?",
    question_hi: "जापान की मुद्रा क्या है?",
    options_en: ["Yuan", "Won", "Yen", "Ringgit"],
    options_hi: ["युआन", "वोन", "येन्", "रिंगगिट"],
    answer_en: "Yen",
    answer_hi: "येन्",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which country has the most official languages?",
    question_hi: "कौन से देश में सबसे अधिक आधिकारिक भाषाएँ हैं?",
    options_en: ["India", "South Africa", "Switzerland", "Canada"],
    options_hi: ["भारत", "दक्षिण अफ्रीका", "स्विट्जरलैंड", "कनाडा"],
    answer_en: "South Africa",
    answer_hi: "दक्षिण अफ्रीका",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the chemical formula for methane?",
    question_hi: "मीथेन का रासायनिक सूत्र क्या है?",
    options_en: ["CH4", "C2H6", "CO2", "C6H12O6"],
    options_hi: ["CH4", "C2H6", "CO2", "C6H12O6"],
    answer_en: "CH4",
    answer_hi: "CH4",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which planet is known as the morning star?",
    question_hi: "कौन सा ग्रह 'सुबह का तारा' के नाम से जाना जाता है?",
    options_en: ["Venus", "Mars", "Jupiter", "Saturn"],
    options_hi: ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    answer_en: "Venus",
    answer_hi: "शुक्र",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which vitamin is needed for the absorption of calcium?",
    question_hi: "कैल्शियम के अवशोषण के लिए किस विटामिन की आवश्यकता होती है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin D", "Vitamin C"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन D", "विटामिन C"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which of the following is a type of muscle in the human body?",
    question_hi: "निम्नलिखित में से कौन सा मानव शरीर में मांसपेशी का प्रकार है?",
    options_en: ["Smooth Muscle", "Elastic Muscle", "Hydraulic Muscle", "Skeletal Muscle"],
    options_hi: ["मुलायम मांसपेशी", "लचीलापन मांसपेशी", "हाइड्रॉलिक मांसपेशी", "कंकाली मांसपेशी"],
    answer_en: "Smooth Muscle",
    answer_hi: "मुलायम मांसपेशी",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which vitamin is primarily responsible for skin health?",
    question_hi: "कौन सा विटामिन मुख्य रूप से त्वचा की सेहत के लिए जिम्मेदार है?",
    options_en: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin E"],
    options_hi: ["विटामिन A", "विटामिन B12", "विटामिन C", "विटामिन E"],
    answer_en: "Vitamin E",
    answer_hi: "विटामिन E",
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