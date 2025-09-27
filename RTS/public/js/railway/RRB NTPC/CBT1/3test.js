const questions = [
  {
    num: 1,
    question_en: "Which of the following is the capital of India?",
    question_hi: "निम्नलिखित में से भारत की राजधानी कौन सी है?",
    options_en: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
    options_hi: ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
    answer_en: "New Delhi",
    answer_hi: "नई दिल्ली",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Who wrote the famous novel '1984'?",
    question_hi: "'1984' उपन्यास के प्रसिद्ध लेखक कौन हैं?",
    options_en: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Mark Twain"],
    options_hi: ["जॉर्ज ऑरवेल", "एल्डस हक्सले", "जे.के. रोलिंग", "मार्क ट्वेन"],
    answer_en: "George Orwell",
    answer_hi: "जॉर्ज ऑरवेल",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which planet is closest to the Sun?",
    question_hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
    options_en: ["Mercury", "Venus", "Earth", "Mars"],
    options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "In which year did India gain independence?",
    question_hi: "भारत ने किस वर्ष स्वतंत्रता प्राप्त की?",
    options_en: ["1942", "1947", "1950", "1965"],
    options_hi: ["1942", "1947", "1950", "1965"],
    answer_en: "1947",
    answer_hi: "1947",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which of the following is the largest continent by area?",
    question_hi: "निम्नलिखित में से सबसे बड़ा महाद्वीप क्षेत्रफल के हिसाब से कौन सा है?",
    options_en: ["Africa", "Asia", "Europe", "North America"],
    options_hi: ["अफ्रीका", "एशिया", "यूरोप", "उत्तर अमेरिका"],
    answer_en: "Asia",
    answer_hi: "एशिया",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Who was the first President of India?",
    question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
    options_en: [
      "Dr. Rajendra Prasad",
      "Dr. Sarvepalli Radhakrishnan",
      "Dr. Zakir Husain",
      "Dr. Abdul Kalam",
    ],
    options_hi: [
      "डॉ. राजेंद्र प्रसाद",
      "डॉ. सर्वपल्ली राधाकृष्णन",
      "डॉ. जाकिर हुसैन",
      "डॉ. अब्दुल कलाम",
    ],
    answer_en: "Dr. Rajendra Prasad",
    answer_hi: "डॉ. राजेंद्र प्रसाद",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the largest mammal on Earth?",
    question_hi: "पृथ्वी पर सबसे बड़ा स्तनधारी कौन सा है?",
    options_en: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    options_hi: ["हाथी", "ब्लू व्हेल", "जिराफ", "शार्क"],
    answer_en: "Blue Whale",
    answer_hi: "ब्लू व्हेल",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the currency of the United States?",
    question_hi: "संयुक्त राज्य की मुद्रा क्या है?",
    options_en: ["Dollar", "Pound", "Euro", "Yen"],
    options_hi: ["डॉलर", "पाउंड", "यूरो", "येन"],
    answer_en: "Dollar",
    answer_hi: "डॉलर",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which country is known as the 'Land of the Rising Sun'?",
    question_hi: "किसे 'उगते सूरज की भूमि' के नाम से जाना जाता है?",
    options_en: ["China", "India", "Japan", "South Korea"],
    options_hi: ["चीन", "भारत", "जापान", "दक्षिण कोरिया"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Who is the current President of the United States? (As of 2025)",
    question_hi: "संयुक्त राज्य के वर्तमान राष्ट्रपति कौन हैं? (2025 के अनुसार)",
    options_en: ["Donald Trump", "Joe Biden", "Barack Obama", "George W. Bush"],
    options_hi: ["डोनाल्ड ट्रम्प", "जो बिडेन", "बराक ओबामा", "जॉर्ज डब्ल्यू. बुश"],
    answer_en: "Joe Biden",
    answer_hi: "जो बिडेन",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which country is known for the Eiffel Tower?",
    question_hi: "किस देश को एफिल टॉवर के लिए जाना जाता है?",
    options_en: ["Italy", "France", "Spain", "Germany"],
    options_hi: ["इटली", "फ्रांस", "स्पेन", "जर्मनी"],
    answer_en: "France",
    answer_hi: "फ्रांस",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Who is known as the 'Father of the Nation' in India?",
    question_hi: "भारत में 'राष्ट्रपिता' के रूप में कौन जाने जाते हैं?",
    options_en: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Subhas Chandra Bose",
      "Sardar Patel",
    ],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार पटेल"],
    answer_en: "Mahatma Gandhi",
    answer_hi: "महात्मा गांधी",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which element has the chemical symbol 'O'?",
    question_hi: "किस तत्व का रासायनिक प्रतीक 'O' है?",
    options_en: ["Oxygen", "Ozone", "Osmium", "Opium"],
    options_hi: ["ऑक्सीजन", "ओजोन", "ऑस्मियम", "अफीम"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
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
    num: 15,
    question_en: "Which is the longest river in the world?",
    question_hi: "दुनिया की सबसे लंबी नदी कौन सी है?",
    options_en: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    options_hi: ["नाइल", "अमेजन", "यांग्त्ज़ी", "मिसीसिपी"],
    answer_en: "Nile",
    answer_hi: "नाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "What is the boiling point of water in Celsius?",
    question_hi: "पानी का उबालने का तापमान सेल्सियस में क्या है?",
    options_en: ["90°C", "100°C", "110°C", "120°C"],
    options_hi: ["90°C", "100°C", "110°C", "120°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कौन सा धातु कमरे के तापमान पर तरल अवस्था में होता है?",
    options_en: ["Mercury", "Iron", "Lead", "Silver"],
    options_hi: ["पारा", "लोहा", "सीसा", "चांदी"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which country invented the first airplane?",
    question_hi: "कौन सा देश पहला विमान बनाने वाला था?",
    options_en: ["Germany", "United States", "France", "Russia"],
    options_hi: ["जर्मनी", "संयुक्त राज्य", "फ्रांस", "रूस"],
    answer_en: "United States",
    answer_hi: "संयुक्त राज्य",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Who invented the light bulb?",
    question_hi: "लाइट बल्ब का आविष्कार किसने किया?",
    options_en: [
      "Nikola Tesla",
      "Thomas Edison",
      "Alexander Graham Bell",
      "James Watt",
    ],
    options_hi: [
      "निकोला टेस्ला",
      "थॉमस एडिसन",
      "अलेक्जेंडर ग्राहम बेल",
      "जेम्स वाट",
    ],
    answer_en: "Thomas Edison",
    answer_hi: "थॉमस एडिसन",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Who was the first woman in space?",
    question_hi: "अंतरिक्ष में जाने वाली पहली महिला कौन थीं?",
    options_en: [
      "Valentina Tereshkova",
      "Sally Ride",
      "Mae Jemison",
      "Yuri Gagarin",
    ],
    options_hi: [
      "वलेन्टिना टेरेश्कोवा",
      "सैली राइड",
      "मै जेमिसन",
      "यूरी गागरीन",
    ],
    answer_en: "Valentina Tereshkova",
    answer_hi: "वलेन्टिना टेरेश्कोवा",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which of the following is the chemical symbol for Gold?",
    question_hi: "निम्नलिखित में से सोने का रासायनिक प्रतीक क्या है?",
    options_en: ["Au", "Ag", "Fe", "Pb"],
    options_hi: ["Au", "Ag", "Fe", "Pb"],
    answer_en: "Au",
    answer_hi: "Au",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which of the following is the largest organ inside the human body?",
    question_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Heart", "Brain", "Liver", "Lungs"],
    options_hi: ["हृदय", "मस्तिष्क", "यकृत", "फेफड़े"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the most common gas in Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे सामान्य गैस कौन सी है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Who is the author of the book 'The Odyssey'?",
    question_hi: "'द ओडिसी' पुस्तक के लेखक कौन हैं?",
    options_en: ["Homer", "Virgil", "Shakespeare", "Hemingway"],
    options_hi: ["होमर", "वर्जिल", "शेक्सपियर", "हेमिंग्वे"],
    answer_en: "Homer",
    answer_hi: "होमर",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which of the following is the smallest unit of life?",
    question_hi: "निम्नलिखित में से जीवन की सबसे छोटी इकाई कौन सी है?",
    options_en: ["Cell", "Molecule", "Atom", "Organ"],
    options_hi: ["कोशिका", "अणु", "परमाणु", "अंग"],
    answer_en: "Cell",
    answer_hi: "कोशिका",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which gas is commonly known as laughing gas?",
    question_hi: "कौन सी गैस को सामान्य रूप से हंसी गैस के रूप में जाना जाता है?",
    options_en: ["Nitrous oxide", "Carbon monoxide", "Methane", "Oxygen"],
    options_hi: ["नाइट्रस ऑक्साइड", "कार्बन मोनोऑक्साइड", "मीथेन", "ऑक्सीजन"],
    answer_en: "Nitrous oxide",
    answer_hi: "नाइट्रस ऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which device is used to amplify electrical signals?",
    question_hi: "विद्युत संकेतों को बढ़ाने के लिए कौन सा उपकरण उपयोग किया जाता है?",
    options_en: ["Transformer", "Rectifier", "Amplifier", "Regulator"],
    options_hi: ["ट्रांसफॉर्मर", "रेक्टिफायर", "एम्पलीफायर", "रेगुलेटर"],
    answer_en: "Amplifier",
    answer_hi: "एम्पलीफायर",
    attempted: false,
    selected: ""
},
{
    num: 27,
    question_en: "What is the unit of electrical resistance?",
    question_hi: "विद्युत प्रतिरोध की इकाई क्या है?",
    options_en: ["Ohm", "Volt", "Ampere", "Watt"],
    options_hi: ["ओम", "वोल्ट", "एम्पीयर", "वाट"],
    answer_en: "Ohm",
    answer_hi: "ओम",
    attempted: false,
    selected: ""
},
{
    num: 28,
    question_en: "Which gas is most abundant in Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस पाई जाती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
},
{
    num: 29,
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
    num: 30,
    question_en: "Which planet is known as the Red Planet?",
    question_hi: "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
    options_en: ["Venus", "Mars", "Jupiter", "Saturn"],
    options_hi: ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
},
{
    num: 31,
    question_en: "What is the main source of energy for the Earth?",
    question_hi: "पृथ्वी के लिए ऊर्जा का मुख्य स्रोत क्या है?",
    options_en: ["Sun", "Moon", "Stars", "Wind"],
    options_hi: ["सूर्य", "चंद्रमा", "तारे", "हवा"],
    answer_en: "Sun",
    answer_hi: "सूर्य",
    attempted: false,
    selected: ""
},
{
    num: 32,
    question_en: "Which organ is responsible for pumping blood in the human body?",
    question_hi: "मानव शरीर में रक्त पंप करने का कार्य कौन सा अंग करता है?",
    options_en: ["Brain", "Liver", "Heart", "Lungs"],
    options_hi: ["मस्तिष्क", "यकृत", "हृदय", "फेफड़े"],
    answer_en: "Heart",
    answer_hi: "हृदय",
    attempted: false,
    selected: ""
},
{
    num: 33,
    question_en: "What does CPU stand for in computers?",
    question_hi: "कंप्यूटर में CPU का क्या अर्थ है?",
    options_en: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Power Unit"],
    options_hi: ["सेंट्रल प्रोसेस यूनिट", "सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर पर्सनल यूनिट", "सेंट्रल पावर यूनिट"],
    answer_en: "Central Processing Unit",
    answer_hi: "सेंट्रल प्रोसेसिंग यूनिट",
    attempted: false,
    selected: ""
},
{
    num: 34,
    question_en: "Which is the hardest natural substance on Earth?",
    question_hi: "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    options_en: ["Gold", "Diamond", "Iron", "Silver"],
    options_hi: ["सोना", "हीरा", "लोहा", "चांदी"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
},
{
    num: 35,
    question_en: "What is the boiling point of water at sea level?",
    question_hi: "सागर तल पर पानी का उबलने का तापमान क्या है?",
    options_en: ["100°C", "90°C", "80°C", "110°C"],
    options_hi: ["100°C", "90°C", "80°C", "110°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
},
{
    num: 36,
    question_en: "Which planet is the largest in our solar system?",
    question_hi: "हमारे सौर मंडल में सबसे बड़ा ग्रह कौन सा है?",
    options_en: ["Earth", "Saturn", "Jupiter", "Neptune"],
    options_hi: ["पृथ्वी", "शनि", "बृहस्पति", "वरुण"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
},
{
    num: 37,
    question_en: "Which vitamin is essential for blood clotting?",
    question_hi: "रक्त जमाव के लिए कौन सा विटामिन आवश्यक है?",
    options_en: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin A"],
    options_hi: ["विटामिन K", "विटामिन C", "विटामिन D", "विटामिन A"],
    answer_en: "Vitamin K",
    answer_hi: "विटामिन K",
    attempted: false,
    selected: ""
},
{
    num: 38,
    question_en: "Which gas do plants absorb from the atmosphere for photosynthesis?",
    question_hi: "फोटोसिंथेसिस के लिए पौधे वायुमंडल से कौन सी गैस अवशोषित करते हैं?",
    options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
},
{
    num: 39,
    question_en: "What is the chemical symbol for gold?",
    question_hi: "सोने का रासायनिक प्रतीक क्या है?",
    options_en: ["Au", "Ag", "Gd", "Ga"],
    options_hi: ["Au", "Ag", "Gd", "Ga"],
    answer_en: "Au",
    answer_hi: "Au",
    attempted: false,
    selected: ""
},
{
    num: 40,
    question_en: "Who developed the theory of relativity?",
    question_hi: "सापेक्षता के सिद्धांत का विकास किसने किया?",
    options_en: ["Newton", "Einstein", "Galileo", "Tesla"],
    options_hi: ["न्यूटन", "आइंस्टीन", "गैलीलियो", "टेस्ला"],
    answer_en: "Einstein",
    answer_hi: "आइंस्टीन",
    attempted: false,
    selected: ""
},
{
    num: 41,
    question_en: "Which device is used to measure temperature?",
    question_hi: "तापमान मापने के लिए कौन सा यंत्र उपयोग किया जाता है?",
    options_en: ["Barometer", "Thermometer", "Hygrometer", "Manometer"],
    options_hi: ["बारोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "मैनोमीटर"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
},
{
    num: 42,
    question_en: "Which country is famous for the Great Wall?",
    question_hi: "महान दीवार के लिए कौन सा देश प्रसिद्ध है?",
    options_en: ["India", "China", "Japan", "Russia"],
    options_hi: ["भारत", "चीन", "जापान", "रूस"],
    answer_en: "China",
    answer_hi: "चीन",
    attempted: false,
    selected: ""
},
{
    num: 43,
    question_en: "Which number is called the 'natural number'?",
    question_hi: "कौन सी संख्या को 'प्राकृतिक संख्या' कहा जाता है?",
    options_en: ["0", "1", "2", "3"],
    options_hi: ["0", "1", "2", "3"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
},
{
    num: 44,
    question_en: "What is the pH value of pure water?",
    question_hi: "शुद्ध पानी का pH मान क्या होता है?",
    options_en: ["7", "0", "14", "1"],
    options_hi: ["7", "0", "14", "1"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: ""
},
{
    num: 45,
    question_en: "Which of the following is a markup language?",
    question_hi: "निम्नलिखित में से कौन सी मार्कअप भाषा है?",
    options_en: ["Python", "HTML", "Java", "C++"],
    options_hi: ["पाइथन", "HTML", "जावा", "C++"],
    answer_en: "HTML",
    answer_hi: "HTML",
    attempted: false,
    selected: ""
},
{
    num: 46,
    question_en: "What is the main function of the CPU?",
    question_hi: "CPU का मुख्य कार्य क्या है?",
    options_en: ["Process data", "Store data", "Display data", "Power supply"],
    options_hi: ["डेटा संसाधित करना", "डेटा संग्रहीत करना", "डेटा प्रदर्शित करना", "पावर सप्लाई"],
    answer_en: "Process data",
    answer_hi: "डेटा संसाधित करना",
    attempted: false,
    selected: ""
},
{
    num: 47,
    question_en: "Which vitamin helps in vision?",
    question_hi: "कौन सा विटामिन दृष्टि में सहायता करता है?",
    options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B12"],
    options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन B12"],
    answer_en: "Vitamin A",
    answer_hi: "विटामिन A",
    attempted: false,
    selected: ""
},
{
    num: 48,
    question_en: "Which part of the eye is responsible for focusing light?",
    question_hi: "आंख का कौन सा भाग प्रकाश को केंद्रित करने के लिए जिम्मेदार होता है?",
    options_en: ["Lens", "Iris", "Retina", "Cornea"],
    options_hi: ["लेन्स", "आईरिस", "रेटिना", "कॉर्निया"],
    answer_en: "Lens",
    answer_hi: "लेन्स",
    attempted: false,
    selected: ""
},
{
    num: 49,
    question_en: "Which blood group is known as the universal donor?",
    question_hi: "कौन सा रक्त समूह सार्वभौमिक दाता के रूप में जाना जाता है?",
    options_en: ["A", "B", "O", "AB"],
    options_hi: ["A", "B", "O", "AB"],
    answer_en: "O",
    answer_hi: "O",
    attempted: false,
    selected: ""
},
{
    num: 50,
    question_en: "Which form of energy is stored in food?",
    question_hi: "खाद्य पदार्थों में कौन सी ऊर्जा संग्रहीत होती है?",
    options_en: ["Mechanical", "Chemical", "Electrical", "Thermal"],
    options_hi: ["मैकेनिकल", "रासायनिक", "इलेक्ट्रिकल", "तापीय"],
    answer_en: "Chemical",
    answer_hi: "रासायनिक",
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