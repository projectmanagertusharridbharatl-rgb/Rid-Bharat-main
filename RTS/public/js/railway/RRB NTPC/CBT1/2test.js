const questions = [
  {
    num: 1,
    question_en: "Who is the author of the book 'The Discovery of India'?",
    question_hi: "'The Discovery of India' पुस्तक के लेखक कौन हैं?",
    options_en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Ravindra Nath Tagore", "B.R. Ambedkar"],
    options_hi: ["जवाहरलाल नेहरू", "महात्मा गांधी", "रवींद्रनाथ ठाकुर", "बी.आर. अंबेडकर"],
    answer_en: "Jawaharlal Nehru",
    answer_hi: "जवाहरलाल नेहरू",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the chemical symbol for sodium?",
    question_hi: "सोडियम का रासायनिक प्रतीक क्या है?",
    options_en: ["Na", "S", "O", "N"],
    options_hi: ["Na", "S", "O", "N"],
    answer_en: "Na",
    answer_hi: "Na",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which country is the largest producer of coffee in the world?",
    question_hi: "दुनिया में कॉफी का सबसे बड़ा उत्पादक देश कौन सा है?",
    options_en: ["Brazil", "India", "China", "Colombia"],
    options_hi: ["ब्राजील", "भारत", "चीन", "कोलंबिया"],
    answer_en: "Brazil",
    answer_hi: "ब्राजील",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What is the main ingredient of the Indian dish 'Samosa'?",
    question_hi: "भारतीय व्यंजन 'समोसा' का मुख्य घटक क्या है?",
    options_en: ["Potato", "Rice", "Lentils", "Spinach"],
    options_hi: ["आलू", "चावल", "दाल", "पालक"],
    answer_en: "Potato",
    answer_hi: "आलू",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "In which year did the first man land on the Moon?",
    question_hi: "किस वर्ष में पहले व्यक्ति ने चंद्रमा पर कदम रखा?",
    options_en: ["1961", "1965", "1969", "1972"],
    options_hi: ["1961", "1965", "1969", "1972"],
    answer_en: "1969",
    answer_hi: "1969",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the smallest planet in our solar system?",
    question_hi: "हमारे सौरमंडल में सबसे छोटा ग्रह कौन सा है?",
    options_en: ["Mercury", "Mars", "Venus", "Earth"],
    options_hi: ["बुध", "मंगल", "शुक्र", "पृथ्वी"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which city is known as the 'City of Joy'?",
    question_hi: "कौन सा शहर 'सिटी ऑफ जॉय' के नाम से जाना जाता है?",
    options_en: ["Kolkata", "Mumbai", "Delhi", "Chennai"],
    options_hi: ["कोलकाता", "मुंबई", "दिल्ली", "चेन्नई"],
    answer_en: "Kolkata",
    answer_hi: "कोलकाता",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which gas do plants absorb from the air for photosynthesis?",
    question_hi: "पौधे प्रकाश संश्लेषण के लिए वायुमंडल से कौन सी गैस अवशोषित करते हैं?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the main function of the human heart?",
    question_hi: "मानव हृदय का मुख्य कार्य क्या है?",
    options_en: ["Pumping blood", "Producing hormones", "Digestion", "Breathing"],
    options_hi: ["रक्त पंप करना", "हार्मोन का उत्पादन", "पाचन", "श्वसन"],
    answer_en: "Pumping blood",
    answer_hi: "रक्त पंप करना",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
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
    num: 11,
    question_en: "What is the capital city of France?",
    question_hi: "फ्रांस की राजधानी शहर कौन सा है?",
    options_en: ["Berlin", "Paris", "London", "Madrid"],
    options_hi: ["बर्लिन", "पेरिस", "लंदन", "मेड्रिड"],
    answer_en: "Paris",
    answer_hi: "पेरिस",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which organ in the human body produces insulin?",
    question_hi: "मानव शरीर में कौन सा अंग इंसुलिन का उत्पादन करता है?",
    options_en: ["Liver", "Pancreas", "Kidney", "Heart"],
    options_hi: ["यकृत", "अग्न्याशय", "गुर्दे", "हृदय"],
    answer_en: "Pancreas",
    answer_hi: "अग्न्याशय",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is the hardest natural substance on Earth?",
    question_hi: "पृथ्वी पर सबसे कठिन प्राकृतिक पदार्थ कौन सा है?",
    options_en: ["Gold", "Diamond", "Iron", "Platinum"],
    options_hi: ["सोना", "हीरा", "लोहा", "प्लैटिनम"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which is the largest animal on Earth?",
    question_hi: "पृथ्वी पर सबसे बड़ा जानवर कौन सा है?",
    options_en: ["Elephant", "Blue Whale", "Shark", "Giraffe"],
    options_hi: ["हाथी", "ब्लू व्हेल", "शार्क", "जिराफ"],
    answer_en: "Blue Whale",
    answer_hi: "ब्लू व्हेल",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which is the longest river in India?",
    question_hi: "भारत में सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Yamuna", "Godavari", "Narmada"],
    options_hi: ["गंगा", "यमुन", "गोदावरी", "नर्मदा"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "In which year was the Indian Independence Act passed?",
    question_hi: "भारतीय स्वतंत्रता अधिनियम कब पारित हुआ था?",
    options_en: ["1945", "1946", "1947", "1948"],
    options_hi: ["1945", "1946", "1947", "1948"],
    answer_en: "1947",
    answer_hi: "1947",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which of the following is a primary color?",
    question_hi: "निम्नलिखित में से कौन सा प्राथमिक रंग है?",
    options_en: ["Green", "Purple", "Blue", "Orange"],
    options_hi: ["हरा", "बैंगनी", "नीला", "संतरी"],
    answer_en: "Blue",
    answer_hi: "नीला",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which gas is responsible for global warming?",
    question_hi: "वैश्विक उष्मीकरण के लिए कौन सी गैस जिम्मेदार है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which part of the brain controls voluntary actions?",
    question_hi: "मस्तिष्क का कौन सा भाग स्वैच्छिक क्रियाओं को नियंत्रित करता है?",
    options_en: ["Cerebellum", "Medulla", "Cerebrum", "Spinal Cord"],
    options_hi: ["सिरिबेलम", "मेडुला", "सिरिब्रम", "रीढ़ की हड्डी"],
    answer_en: "Cerebrum",
    answer_hi: "सिरिब्रम",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Who was the first woman Prime Minister of India?",
    question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    options_en: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Sarojini Naidu"],
    options_hi: ["इंदिरा गांधी", "सोनीया गांधी", "प्रतीभा पाटिल", "सरोजिनी नायडू"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which Indian state has the largest population?",
    question_hi: "भारत का कौन सा राज्य सबसे अधिक जनसंख्या वाला है?",
    options_en: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Who discovered the theory of relativity?",
    question_hi: "सापेक्षता के सिद्धांत की खोज किसने की?",
    options_en: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
    options_hi: ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो गैलीली", "निकोला टेस्ला"],
    answer_en: "Albert Einstein",
    answer_hi: "अल्बर्ट आइंस्टीन",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which is the national animal of India?",
    question_hi: "भारत का राष्ट्रीय जानवर कौन सा है?",
    options_en: ["Lion", "Elephant", "Tiger", "Horse"],
    options_hi: ["शेर", "हाथी", "बाघ", "घोड़ा"],
    answer_en: "Tiger",
    answer_hi: "बाघ",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which of the following is the largest ocean on Earth?",
    question_hi: "पृथ्वी का सबसे बड़ा महासागर निम्नलिखित में से कौन सा है?",
    options_en: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    options_hi: ["अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the process by which plants make their own food?",
    question_hi: "वह प्रक्रिया क्या है जिसके द्वारा पौधे अपनी भोजन की आवश्यकता पूरी करते हैं?",
    options_en: ["Transpiration", "Photosynthesis", "Respiration", "Germination"],
    options_hi: ["पानी का वाष्पीकरण", "प्रकाश संश्लेषण", "श्वसन", "अंकुरण"],
    answer_en: "Photosynthesis",
    answer_hi: "प्रकाश संश्लेषण",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "Which device is used to amplify sound signals?",
    question_hi: "ध्वनि संकेतों को बढ़ाने के लिए कौन सा उपकरण उपयोग किया जाता है?",
    options_en: ["Microphone", "Amplifier", "Speaker", "Oscillator"],
    options_hi: ["माइक्रोफोन", "एंपलीफायर", "स्पीकर", "ऑस्सीलेटर"],
    answer_en: "Amplifier",
    answer_hi: "एंपलीफायर",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the unit of electric current?",
    question_hi: "विद्युत धारा की इकाई क्या है?",
    options_en: ["Volt", "Ampere", "Ohm", "Watt"],
    options_hi: ["वोल्ट", "एम्पियर", "ओम", "वाट"],
    answer_en: "Ampere",
    answer_hi: "एम्पियर",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which organ is responsible for filtering blood?",
    question_hi: "रक्त को छानने के लिए कौन सा अंग जिम्मेदार है?",
    options_en: ["Liver", "Kidney", "Heart", "Lungs"],
    options_hi: ["यकृत", "गुर्दा", "हृदय", "फेफड़े"],
    answer_en: "Kidney",
    answer_hi: "गुर्दा",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which component increases current in a circuit?",
    question_hi: "सर्किट में धारा बढ़ाने वाला घटक कौन सा है?",
    options_en: ["Resistor", "Capacitor", "Inductor", "Transformer"],
    options_hi: ["रेज़िस्टर", "कैपेसिटर", "इंडक्टर", "ट्रांसफॉर्मर"],
    answer_en: "Transformer",
    answer_hi: "ट्रांसफॉर्मर",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which material is an insulator?",
    question_hi: "कौन सा पदार्थ इंसुलेटर है?",
    options_en: ["Copper", "Aluminum", "Rubber", "Silver"],
    options_hi: ["तांबा", "एल्यूमीनियम", "रबर", "चांदी"],
    answer_en: "Rubber",
    answer_hi: "रबर",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "How many bits are there in a nibble?",
    question_hi: "एक निबल में कितने बिट होते हैं?",
    options_en: ["2", "4", "8", "16"],
    options_hi: ["2", "4", "8", "16"],
    answer_en: "4",
    answer_hi: "4",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which gas is primarily used for welding?",
    question_hi: "वेल्डिंग के लिए मुख्य रूप से कौन सी गैस उपयोग होती है?",
    options_en: ["Oxygen", "Argon", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "आर्गन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Argon",
    answer_hi: "आर्गन",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What does USB stand for?",
    question_hi: "USB का पूर्ण रूप क्या है?",
    options_en: ["Universal Serial Bus", "Unified System Bus", "Universal System Backup", "Uniform Serial Bus"],
    options_hi: ["यूनिवर्सल सीरियल बस", "यूनिफाइड सिस्टम बस", "यूनिवर्सल सिस्टम बैकअप", "यूनिफॉर्म सीरियल बस"],
    answer_en: "Universal Serial Bus",
    answer_hi: "यूनिवर्सल सीरियल बस",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which one is a scalar quantity?",
    question_hi: "इनमें से कौन सा स्केलर राशि है?",
    options_en: ["Velocity", "Force", "Mass", "Acceleration"],
    options_hi: ["वेग", "बल", "द्रव्यमान", "त्वरण"],
    answer_en: "Mass",
    answer_hi: "द्रव्यमान",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which gas is used in fire extinguishers?",
    question_hi: "अग्निशामक में कौन सी गैस उपयोग होती है?",
    options_en: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which instrument is used to measure temperature?",
    question_hi: "तापमान मापने के लिए कौन सा यंत्र उपयोग किया जाता है?",
    options_en: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    options_hi: ["बारोमीटर", "थर्मामीटर", "हायग्रोमीटर", "एनीमोमीटर"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which acid is found in lemon?",
    question_hi: "नींबू में कौन सा अम्ल पाया जाता है?",
    options_en: ["Citric acid", "Acetic acid", "Sulfuric acid", "Hydrochloric acid"],
    options_hi: ["साइट्रिक अम्ल", "एसीटिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल"],
    answer_en: "Citric acid",
    answer_hi: "साइट्रिक अम्ल",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which metal is magnetic?",
    question_hi: "कौन सी धातु चुंबकीय होती है?",
    options_en: ["Aluminum", "Copper", "Iron", "Lead"],
    options_hi: ["एल्यूमीनियम", "तांबा", "लोहा", "सीसा"],
    answer_en: "Iron",
    answer_hi: "लोहा",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which of these is a noble gas?",
    question_hi: "इनमें से कौन सी नोबल गैस है?",
    options_en: ["Helium", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["हीलियम", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Who invented the telephone?",
    question_hi: "टेलीफोन का आविष्कार किसने किया?",
    options_en: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    options_hi: ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोल टेस्ला", "गुइलील्मो मार्कोनी"],
    answer_en: "Alexander Graham Bell",
    answer_hi: "अलेक्जेंडर ग्राहम बेल",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which material is used to make pencil leads?",
    question_hi: "पेंसिल की निब बनाने के लिए कौन सा पदार्थ उपयोग किया जाता है?",
    options_en: ["Graphite", "Charcoal", "Lead", "Coal"],
    options_hi: ["ग्रेफाइट", "कोयला", "सीसा", "कोयला"],
    answer_en: "Graphite",
    answer_hi: "ग्रेफाइट",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "What is the currency of the USA?",
    question_hi: "अमेरिका की मुद्रा क्या है?",
    options_en: ["Dollar", "Euro", "Pound", "Yen"],
    options_hi: ["डॉलर", "यूरो", "पाउंड", "येन्"],
    answer_en: "Dollar",
    answer_hi: "डॉलर",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which is the largest prime number among these?",
    question_hi: "इनमें से सबसे बड़ा अभाज्य संख्या कौन सा है?",
    options_en: ["29", "31", "37", "41"],
    options_hi: ["29", "31", "37", "41"],
    answer_en: "41",
    answer_hi: "41",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What is the boiling point of water?",
    question_hi: "पानी का उबलने का तापमान क्या है?",
    options_en: ["100°C", "0°C", "50°C", "90°C"],
    options_hi: ["100°C", "0°C", "50°C", "90°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which of the following is a markup language?",
    question_hi: "निम्नलिखित में से कौन सी मार्कअप भाषा है?",
    options_en: ["Python", "HTML", "C++", "Java"],
    options_hi: ["पाइथन", "HTML", "C++", "जावा"],
    answer_en: "HTML",
    answer_hi: "HTML",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the primary function of CPU in a computer?",
    question_hi: "कंप्यूटर में CPU का मुख्य कार्य क्या है?",
    options_en: ["Storage", "Processing data", "Display", "Power supply"],
    options_hi: ["स्टोरेज", "डेटा प्रोसेसिंग", "डिस्प्ले", "पावर सप्लाई"],
    answer_en: "Processing data",
    answer_hi: "डेटा प्रोसेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which vitamin helps in blood clotting?",
    question_hi: "कौन सा विटामिन रक्त जमने में मदद करता है?",
    options_en: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन K", "विटामिन A", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin K",
    answer_hi: "विटामिन K",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which part of the eye focuses light onto the retina?",
    question_hi: "आंख का कौन सा भाग रेटिना पर प्रकाश केंद्रित करता है?",
    options_en: ["Lens", "Cornea", "Iris", "Pupil"],
    options_hi: ["लेन्स", "कॉर्निया", "आईरिस", "प्यूपिल"],
    answer_en: "Lens",
    answer_hi: "लेन्स",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which organ produces insulin?",
    question_hi: "कौन सा अंग इंसुलिन बनाता है?",
    options_en: ["Pancreas", "Liver", "Kidney", "Spleen"],
    options_hi: ["पैंक्रियास", "यकृत", "गुर्दा", "प्लीहा"],
    answer_en: "Pancreas",
    answer_hi: "पैंक्रियास",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What type of energy is stored in food?",
    question_hi: "खाद्य पदार्थ में कौन सी ऊर्जा संग्रहीत होती है?",
    options_en: ["Mechanical energy", "Chemical energy", "Electrical energy", "Nuclear energy"],
    options_hi: ["मैकेनिकल ऊर्जा", "रासायनिक ऊर्जा", "इलेक्ट्रिकल ऊर्जा", "नाभिकीय ऊर्जा"],
    answer_en: "Chemical energy",
    answer_hi: "रासायनिक ऊर्जा",
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