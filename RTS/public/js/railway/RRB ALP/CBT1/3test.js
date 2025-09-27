const questions = [
  {
    num: 1,
    question_en: "Which of the following is the longest river in India?",
    question_hi: "निम्नलिखित में से भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
    options_hi: ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Who is known as the 'Father of the Indian Constitution'?",
    question_hi: "भारतीय संविधान के जनक के रूप में किसे जाना जाता है?",
    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
    answer_en: "B.R. Ambedkar",
    answer_hi: "बी.आर. अंबेडकर",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the chemical symbol for Gold?",
    question_hi: "सोने का रासायनिक प्रतीक क्या है?",
    options_en: ["Au", "Ag", "Gd", "Go"],
    options_hi: ["Au", "Ag", "Gd", "Go"],
    answer_en: "Au",
    answer_hi: "Au",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which planet is known as the 'Red Planet'?",
    question_hi: "किस ग्रह को 'लाल ग्रह' के नाम से जाना जाता है?",
    options_en: ["Venus", "Mars", "Jupiter", "Saturn"],
    options_hi: ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "The sum of angles in a triangle is:",
    question_hi: "त्रिभुज में कोणों का योग होता है:",
    options_en: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"],
    options_hi: ["90 डिग्री", "180 डिग्री", "270 डिग्री", "360 डिग्री"],
    answer_en: "180 degrees",
    answer_hi: "180 डिग्री",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which gas is most abundant in the Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस पाई जाती है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "The largest ocean in the world is:",
    question_hi: "दुनिया का सबसे बड़ा महासागर है:",
    options_en: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    options_hi: ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which of the following is not a primary color?",
    question_hi: "निम्नलिखित में से कौन सा प्राथमिक रंग नहीं है?",
    options_en: ["Red", "Blue", "Green", "Yellow"],
    options_hi: ["लाल", "नीला", "हरा", "पीला"],
    answer_en: "Yellow",
    answer_hi: "पीला",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "The capital of Australia is:",
    question_hi: "ऑस्ट्रेलिया की राजधानी है:",
    options_en: ["Sydney", "Melbourne", "Canberra", "Perth"],
    options_hi: ["सिडनी", "मेलबोर्न", "कैनबरा", "पर्थ"],
    answer_en: "Canberra",
    answer_hi: "कैनबरा",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which device is used to measure electric current?",
    question_hi: "विद्युत धारा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    options_en: ["Voltmeter", "Ammeter", "Ohmmeter", "Barometer"],
    options_hi: ["वोल्टमीटर", "एमीटर", "ओममीटर", "बैरोमीटर"],
    answer_en: "Ammeter",
    answer_hi: "एमीटर",
    attempted: false,
    selected: ""
  },
  // Continue with more questions...
  {
    num: 11,
    question_en: "What is the square root of 144?",
    question_hi: "144 का वर्गमूल क्या है?",
    options_en: ["10", "12", "14", "16"],
    options_hi: ["10", "12", "14", "16"],
    answer_en: "12",
    answer_hi: "12",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which of the following is not a metal?",
    question_hi: "निम्नलिखित में से कौन सी धातु नहीं है?",
    options_en: ["Gold", "Silver", "Sulfur", "Iron"],
    options_hi: ["सोना", "चांदी", "सल्फर", "लोहा"],
    answer_en: "Sulfur",
    answer_hi: "सल्फर",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "The first woman Prime Minister of India was:",
    question_hi: "भारत की पहली महिला प्रधानमंत्री थीं:",
    options_en: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"],
    options_hi: ["इंदिरा गांधी", "सोनिया गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which is the largest mammal in the world?",
    question_hi: "दुनिया का सबसे बड़ा स्तनपायी कौन सा है?",
    options_en: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    options_hi: ["हाथी", "नीली व्हेल", "जिराफ", "ध्रुवीय भालू"],
    answer_en: "Blue Whale",
    answer_hi: "नीली व्हेल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "The study of earthquakes is called:",
    question_hi: "भूकंप का अध्ययन कहलाता है:",
    options_en: ["Geology", "Seismology", "Meteorology", "Volcanology"],
    options_hi: ["भूविज्ञान", "भूकंप विज्ञान", "मौसम विज्ञान", "ज्वालामुखी विज्ञान"],
    answer_en: "Seismology",
    answer_hi: "भूकंप विज्ञान",
    attempted: false,
    selected: ""
  },
  
  
  {
    num: 16,
    question_en: "Which of the following is NOT a programming language?",
    question_hi: "निम्नलिखित में से कौन सी प्रोग्रामिंग भाषा नहीं है?",
    options_en: ["Python", "Java", "HTML", "Photoshop"],
    options_hi: ["पायथन", "जावा", "HTML", "फोटोशॉप"],
    answer_en: "Photoshop",
    answer_hi: "फोटोशॉप",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "The largest desert in the world is:",
    question_hi: "दुनिया का सबसे बड़ा रेगिस्तान है:",
    options_en: ["Sahara", "Gobi", "Arabian", "Antarctica"],
    options_hi: ["सहारा", "गोबी", "अरब", "अंटार्कटिका"],
    answer_en: "Antarctica",
    answer_hi: "अंटार्कटिका",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the value of π (pi) approximately?",
    question_hi: "π (पाई) का मान लगभग कितना होता है?",
    options_en: ["3.14", "2.71", "1.62", "4.13"],
    options_hi: ["3.14", "2.71", "1.62", "4.13"],
    answer_en: "3.14",
    answer_hi: "3.14",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Who invented the telephone?",
    question_hi: "टेलीफोन का आविष्कार किसने किया?",
    options_en: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"],
    options_hi: ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "अल्बर्ट आइंस्टीन"],
    answer_en: "Alexander Graham Bell",
    answer_hi: "अलेक्जेंडर ग्राहम बेल",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which gas is responsible for the greenhouse effect?",
    question_hi: "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "The chemical formula of water is:",
    question_hi: "पानी का रासायनिक सूत्र है:",
    options_en: ["H2O", "CO2", "NaCl", "O2"],
    options_hi: ["H2O", "CO2", "NaCl", "O2"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which of the following is a prime number?",
    question_hi: "निम्नलिखित में से कौन सी अभाज्य संख्या है?",
    options_en: ["9", "15", "17", "21"],
    options_hi: ["9", "15", "17", "21"],
    answer_en: "17",
    answer_hi: "17",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "The currency of Japan is:",
    question_hi: "जापान की मुद्रा है:",
    options_en: ["Yen", "Dollar", "Euro", "Pound"],
    options_hi: ["येन", "डॉलर", "यूरो", "पाउंड"],
    answer_en: "Yen",
    answer_hi: "येन",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which organ purifies blood in the human body?",
    question_hi: "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
    options_en: ["Heart", "Liver", "Kidney", "Lungs"],
    options_hi: ["हृदय", "यकृत", "गुर्दा", "फेफड़े"],
    answer_en: "Kidney",
    answer_hi: "गुर्दा",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "The largest bone in the human body is:",
    question_hi: "मानव शरीर की सबसे बड़ी हड्डी है:",
    options_en: ["Femur", "Tibia", "Humerus", "Skull"],
    options_hi: ["फीमर", "टिबिया", "ह्यूमरस", "खोपड़ी"],
    answer_en: "Femur",
    answer_hi: "फीमर",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which of the following is a non-renewable energy source?",
    question_hi: "निम्नलिखित में से कौन सा गैर-नवीकरणीय ऊर्जा स्रोत है?",
    options_en: ["Solar", "Wind", "Coal", "Hydro"],
    options_hi: ["सौर", "पवन", "कोयला", "जल"],
    answer_en: "Coal",
    answer_hi: "कोयला",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "The smallest planet in the solar system is:",
    question_hi: "सौरमंडल का सबसे छोटा ग्रह है:",
    options_en: ["Earth", "Mars", "Mercury", "Venus"],
    options_hi: ["पृथ्वी", "मंगल", "बुध", "शुक्र"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which country is known as the 'Land of the Rising Sun'?",
    question_hi: "किस देश को 'उगते सूरज की भूमि' के नाम से जाना जाता है?",
    options_en: ["China", "Japan", "India", "Thailand"],
    options_hi: ["चीन", "जापान", "भारत", "थाईलैंड"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "The first Indian to win a Nobel Prize was:",
    question_hi: "नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    options_en: ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Amartya Sen"],
    options_hi: ["रबींद्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "अमर्त्य सेन"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रबींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "The SI unit of electric current is:",
    question_hi: "विद्युत धारा की SI इकाई है:",
    options_en: ["Volt", "Ampere", "Ohm", "Watt"],
    options_hi: ["वोल्ट", "एम्पीयर", "ओम", "वॉट"],
    answer_en: "Ampere",
    answer_hi: "एम्पीयर",
    attempted: false,
    selected: ""
  },
 
  {
    num: 31,
    question_en: "Which of the following is NOT a natural satellite?",
    question_hi: "निम्नलिखित में से कौन सा प्राकृतिक उपग्रह नहीं है?",
    options_en: ["Moon", "Phobos", "ISS (International Space Station)", "Europa"],
    options_hi: ["चंद्रमा", "फोबोस", "ISS (अंतर्राष्ट्रीय अंतरिक्ष स्टेशन)", "यूरोपा"],
    answer_en: "ISS (International Space Station)",
    answer_hi: "ISS (अंतर्राष्ट्रीय अंतरिक्ष स्टेशन)",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "The largest state in India by area is:",
    question_hi: "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य है:",
    options_en: ["Maharashtra", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh"],
    options_hi: ["महाराष्ट्र", "उत्तर प्रदेश", "राजस्थान", "मध्य प्रदेश"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "When was the first passenger train run in India?",
    question_hi: "भारत में पहली यात्री ट्रेन कब चली थी?",
    options_en: ["1851", "1853", "1855", "1857"],
    options_hi: ["1851", "1853", "1855", "1857"],
    answer_en: "1853",
    answer_hi: "1853",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which is the fastest train in India as of 2023?",
    question_hi: "2023 तक भारत की सबसे तेज़ ट्रेन कौन सी है?",
    options_en: ["Rajdhani Express", "Shatabdi Express", "Gatimaan Express", "Vande Bharat Express"],
    options_hi: ["राजधानी एक्सप्रेस", "शताब्दी एक्सप्रेस", "गतिमान एक्सप्रेस", "वंदे भारत एक्सप्रेस"],
    answer_en: "Vande Bharat Express",
    answer_hi: "वंदे भारत एक्सप्रेस",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the color of the Indian Railways logo?",
    question_hi: "भारतीय रेलवे के लोगो का रंग क्या है?",
    options_en: ["Blue and White", "Red and White", "Blue and Yellow", "Red and Yellow"],
    options_hi: ["नीला और सफेद", "लाल और सफेद", "नीला और पीला", "लाल और पीला"],
    answer_en: "Blue and White",
    answer_hi: "नीला और सफेद",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which zone is the largest in Indian Railways?",
    question_hi: "भारतीय रेलवे में सबसे बड़ा जोन कौन सा है?",
    options_en: ["Northern Railway", "Western Railway", "Southern Railway", "Central Railway"],
    options_hi: ["उत्तरी रेलवे", "पश्चिमी रेलवे", "दक्षिणी रेलवे", "मध्य रेलवे"],
    answer_en: "Northern Railway",
    answer_hi: "उत्तरी रेलवे",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Complete the series: 2, 6, 12, 20, __",
    question_hi: "श्रृंखला पूरी करें: 2, 6, 12, 20, __",
    options_en: ["28", "30", "32", "36"],
    options_hi: ["28", "30", "32", "36"],
    answer_en: "30",
    answer_hi: "30",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "If all cats are dogs and some dogs are tigers, then:",
    question_hi: "यदि सभी बिल्लियाँ कुत्ते हैं और कुछ कुत्ते बाघ हैं, तो:",
    options_en: ["All cats are tigers", "Some cats are tigers", "No conclusion", "All tigers are cats"],
    options_hi: ["सभी बिल्लियाँ बाघ हैं", "कुछ बिल्लियाँ बाघ हैं", "कोई निष्कर्ष नहीं", "सभी बाघ बिल्लियाँ हैं"],
    answer_en: "Some cats are tigers",
    answer_hi: "कुछ बिल्लियाँ बाघ हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which number is opposite to 3 in a standard dice?",
    question_hi: "एक सामान्य पासे में 3 के विपरीत कौन सी संख्या होती है?",
    options_en: ["1", "2", "4", "6"],
    options_hi: ["1", "2", "4", "6"],
    answer_en: "4",
    answer_hi: "4",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "The headquarters of Indian Railways is located at:",
    question_hi: "भारतीय रेलवे का मुख्यालय स्थित है:",
    options_en: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
    options_hi: ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
    answer_en: "New Delhi",
    answer_hi: "नई दिल्ली",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which of these is NOT a type of passenger train in India?",
    question_hi: "यह में से कौन सी भारत में यात्री ट्रेन का प्रकार नहीं है?",
    options_en: ["Duronto", "Garib Rath", "Vanikaran", "Rajdhani"],
    options_hi: ["दुरंतो", "गरीब रथ", "वणिकरण", "राजधानी"],
    answer_en: "Vanikaran",
    answer_hi: "वणिकरण",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "The longest railway platform in India is at:",
    question_hi: "भारत में सबसे लंबा रेलवे प्लेटफॉर्म कहाँ है?",
    options_en: ["Howrah", "Ghaziabad", "Gorakhpur", "Kharagpur"],
    options_hi: ["हावड़ा", "गाज़ियाबाद", "गोरखपुर", "खड़गपुर"],
    answer_en: "Gorakhpur",
    answer_hi: "गोरखपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which city is known as the 'Manchester of India'?",
    question_hi: "किस शहर को 'भारत का मैनचेस्टर' कहा जाता है?",
    options_en: ["Mumbai", "Ahmedabad", "Surat", "Kanpur"],
    options_hi: ["मुंबई", "अहमदाबाद", "सूरत", "कानपुर"],
    answer_en: "Ahmedabad",
    answer_hi: "अहमदाबाद",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "The first metro rail in India was started in:",
    question_hi: "भारत में पहली मेट्रो रेल कहाँ शुरू हुई थी?",
    options_en: ["Delhi", "Kolkata", "Mumbai", "Chennai"],
    options_hi: ["दिल्ली", "कोलकाता", "मुंबई", "चेन्नई"],
    answer_en: "Kolkata",
    answer_hi: "कोलकाता",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which state has the highest railway route length?",
    question_hi: "किस राज्य में रेलवे मार्ग की लंबाई सबसे अधिक है?",
    options_en: ["Maharashtra", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh"],
    options_hi: ["महाराष्ट्र", "उत्तर प्रदेश", "राजस्थान", "मध्य प्रदेश"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "The train that connects North East India to the rest of the country is:",
    question_hi: "वह ट्रेन जो उत्तर पूर्व भारत को देश के बाकी हिस्सों से जोड़ती है:",
    options_en: ["Rajdhani Express", "Sampark Kranti", "Dibrugarh Rajdhani", "Shatabdi Express"],
    options_hi: ["राजधानी एक्सप्रेस", "संपर्क क्रांति", "डिब्रूगढ़ राजधानी", "शताब्दी एक्सप्रेस"],
    answer_en: "Dibrugarh Rajdhani",
    answer_hi: "डिब्रूगढ़ राजधानी",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which of these is a mountain railway in India?",
    question_hi: "यह में से कौन सी भारत में एक पर्वतीय रेलवे है?",
    options_en: ["Konkan Railway", "Nilgiri Mountain Railway", "Kalka-Shimla Railway", "Both B and C"],
    options_hi: ["कोंकण रेलवे", "नीलगिरि पर्वतीय रेलवे", "कालका-शिमला रेलवे", "B और C दोनों"],
    answer_en: "Both B and C",
    answer_hi: "B और C दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "The first electric train in India ran between:",
    question_hi: "भारत में पहली इलेक्ट्रिक ट्रेन कहाँ चली थी?",
    options_en: ["Delhi to Kolkata", "Mumbai to Pune", "Bombay VT to Kurla", "Chennai to Bangalore"],
    options_hi: ["दिल्ली से कोलकाता", "मुंबई से पुणे", "बॉम्बे VT से कुर्ला", "चेन्नई से बैंगलोर"],
    answer_en: "Bombay VT to Kurla",
    answer_hi: "बॉम्बे VT से कुर्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "The railway budget was merged with general budget in:",
    question_hi: "रेल बजट को सामान्य बजट में कब मिला दिया गया था?",
    options_en: ["2014", "2016", "2017", "2018"],
    options_hi: ["2014", "2016", "2017", "2018"],
    answer_en: "2017",
    answer_hi: "2017",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which of these is a luxury tourist train in India?",
    question_hi: "यह में से कौन सी भारत में एक लग्जरी टूरिस्ट ट्रेन है?",
    options_en: ["Deccan Odyssey", "Garib Rath", "Jan Shatabdi", "Duronto Express"],
    options_hi: ["डेक्कन ओडिसी", "गरीब रथ", "जन शताब्दी", "दुरंतो एक्सप्रेस"],
    answer_en: "Deccan Odyssey",
    answer_hi: "डेक्कन ओडिसी",
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
 



  



