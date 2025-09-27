const questions = [
    {
  num: 1,
  question_en: "What is the main function of white blood cells?",
  question_hi: "सफेद रक्त कणिकाओं का मुख्य कार्य क्या है?",
  options_en: ["Transport oxygen", "Fight infection", "Regulate blood pressure", "Carry nutrients"],
  options_hi: ["ऑक्सीजन का परिवहन", "संक्रमण से लड़ना", "रक्त दाब को नियंत्रित करना", "पोषक तत्वों का परिवहन"],
  answer_en: "Fight infection",
  answer_hi: "संक्रमण से लड़ना",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which country is the largest producer of coffee?",
  question_hi: "कॉफी का सबसे बड़ा उत्पादक देश कौन सा है?",
  options_en: ["Brazil", "India", "Vietnam", "Colombia"],
  options_hi: ["ब्राजील", "भारत", "वियतनाम", "कोलंबिया"],
  answer_en: "Brazil",
  answer_hi: "ब्राजील",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Which of the following is a mammal?",
  question_hi: "निम्नलिखित में से कौन एक स्तनधारी है?",
  options_en: ["Shark", "Frog", "Bat", "Snake"],
  options_hi: ["शार्क", "मेंढक", "वदंर", "सांप"],
  answer_en: "Bat",
  answer_hi: "वदंर",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is the chemical symbol of Gold?",
  question_hi: "सोने का रासायनिक प्रतीक क्या है?",
  options_en: ["Au", "Ag", "Fe", "Pb"],
  options_hi: ["Au", "Ag", "Fe", "Pb"],
  answer_en: "Au",
  answer_hi: "Au",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which is the smallest continent?",
  question_hi: "सबसे छोटा महाद्वीप कौन सा है?",
  options_en: ["Africa", "Australia", "Asia", "Europe"],
  options_hi: ["अफ्रीका", "ऑस्ट्रेलिया", "एशिया", "यूरोप"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is the capital of Australia?",
  question_hi: "ऑस्ट्रेलिया की राजधानी क्या है?",
  options_en: ["Sydney", "Melbourne", "Canberra", "Perth"],
  options_hi: ["सिडनी", "मेलबर्न", "कैनबरा", "पर्थ"],
  answer_en: "Canberra",
  answer_hi: "कैनबरा",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which of the following is the national flower of India?",
  question_hi: "निम्नलिखित में से भारत का राष्ट्रीय फूल कौन सा है?",
  options_en: ["Rose", "Lotus", "Tulip", "Sunflower"],
  options_hi: ["गुलाब", "कमल", "ट्यूलिप", "सूरजमुखी"],
  answer_en: "Lotus",
  answer_hi: "कमल",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Who was the first woman Prime Minister of India?",
  question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
  options_en: ["Indira Gandhi", "Sarojini Naidu", "Sushma Swaraj", "Pratibha Patil"],
  options_hi: ["इंदिरा गांधी", "सरोजिनी नायडू", "सुषमा स्वराज", "प्रतीभा पाटिल"],
  answer_en: "Indira Gandhi",
  answer_hi: "इंदिरा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Which element has the atomic number 1?",
  question_hi: "किस तत्व का परमाणु संख्या 1 है?",
  options_en: ["Hydrogen", "Oxygen", "Nitrogen", "Helium"],
  options_hi: ["हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
  answer_en: "Hydrogen",
  answer_hi: "हाइड्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which of the following is the largest desert in the world?",
  question_hi: "निम्नलिखित में से दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
  options_en: ["Sahara Desert", "Kalahari Desert", "Gobi Desert", "Antarctic Desert"],
  options_hi: ["सहारा रेगिस्तान", "कालाहारी रेगिस्तान", "गोबी रेगिस्तान", "अंटार्कटिक रेगिस्तान"],
  answer_en: "Antarctic Desert",
  answer_hi: "अंटार्कटिक रेगिस्तान",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Who wrote the book 'The Origin of Species'?",
  question_hi: "'द ऑरिजिन ऑफ स्पीशीज' पुस्तक किसने लिखी थी?",
  options_en: ["Albert Einstein", "Isaac Newton", "Charles Darwin", "Galileo Galilei"],
  options_hi: ["अल्बर्ट आइंस्टीन", "आइज़ैक न्यूटन", "चार्ल्स डार्विन", "गैलीलियो गैलीली"],
  answer_en: "Charles Darwin",
  answer_hi: "चार्ल्स डार्विन",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which is the largest organ in the human body?",
  question_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
  options_en: ["Heart", "Liver", "Brain", "Skin"],
  options_hi: ["हृदय", "यकृत", "मस्तिष्क", "त्वचा"],
  answer_en: "Skin",
  answer_hi: "त्वचा",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Which planet is known as the Red Planet?",
  question_hi: "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
  options_en: ["Mars", "Earth", "Saturn", "Jupiter"],
  options_hi: ["मंगल", "पृथ्वी", "शनि", "बृहस्पति"],
  answer_en: "Mars",
  answer_hi: "मंगल",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Who is known as the 'Iron Man of India'?",
  question_hi: "भारत के 'लोह पुरुष' के रूप में किसे जाना जाता है?",
  options_en: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Mahatma Gandhi", "Subhas Chandra Bose"],
  options_hi: ["जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल", "महात्मा गांधी", "सुभाष चंद्र बोस"],
  answer_en: "Sardar Vallabhbhai Patel",
  answer_hi: "सरदार वल्लभभाई पटेल",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which of the following is the longest river in India?",
  question_hi: "निम्नलिखित में से भारत की सबसे लंबी नदी कौन सी है?",
  options_en: ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
  options_hi: ["गंगा", "यमुन", "गोदावरी", "ब्रह्मपुत्र"],
  answer_en: "Ganga",
  answer_hi: "गंगा",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Who is known as the 'Missile Man of India'?",
  question_hi: "भारत के 'मिसाइल मैन' के रूप में किसे जाना जाता है?",
  options_en: ["APJ Abdul Kalam", "Vikram Sarabhai", "Homi J. Bhabha", "R. N. Agarwal"],
  options_hi: ["एपीजे अब्दुल कलाम", "विक्रम साराभाई", "होमी जे. भाभा", "आर. एन. अग्रवाल"],
  answer_en: "APJ Abdul Kalam",
  answer_hi: "एपीजे अब्दुल कलाम",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is the chemical formula for water?",
  question_hi: "पानी का रासायनिक सूत्र क्या है?",
  options_en: ["H2O", "CO2", "NaCl", "O2"],
  options_hi: ["H2O", "CO2", "NaCl", "O2"],
  answer_en: "H2O",
  answer_hi: "H2O",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Who invented the telephone?",
  question_hi: "टेलीफोन का आविष्कार किसने किया?",
  options_en: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Michael Faraday"],
  options_hi: ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "माइकल फैराडे"],
  answer_en: "Alexander Graham Bell",
  answer_hi: "अलेक्जेंडर ग्राहम बेल",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which gas do plants absorb from the atmosphere for photosynthesis?",
  question_hi: "पौधे प्रकाश संश्लेषण के लिए वायुमंडल से कौन सी गैस अवशोषित करते हैं?",
  options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which of the following is the largest animal on Earth?",
  question_hi: "निम्नलिखित में से पृथ्वी का सबसे बड़ा जानवर कौन सा है?",
  options_en: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
  options_hi: ["हाथी", "नील व्हेल", "जिराफ", "शार्क"],
  answer_en: "Blue Whale",
  answer_hi: "नील व्हेल",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "What is the capital of France?",
  question_hi: "फ्रांस की राजधानी क्या है?",
  options_en: ["London", "Berlin", "Paris", "Rome"],
  options_hi: ["लंदन", "बर्लिन", "पेरिस", "रोम"],
  answer_en: "Paris",
  answer_hi: "पेरिस",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which of the following is a primary color?",
  question_hi: "निम्नलिखित में से कौन सा एक प्राथमिक रंग है?",
  options_en: ["Purple", "Orange", "Green", "Blue"],
  options_hi: ["बैंगनी", "नारंगी", "हरा", "नीला"],
  answer_en: "Blue",
  answer_hi: "नीला",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Who is the founder of Microsoft?",
  question_hi: "माइक्रोसॉफ्ट के संस्थापक कौन हैं?",
  options_en: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Larry Page"],
  options_hi: ["स्टीव जॉब्स", "मार्क जुकरबर्ग", "बिल गेट्स", "लैरी पेज"],
  answer_en: "Bill Gates",
  answer_hi: "बिल गेट्स",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "What is the largest continent in the world?",
  question_hi: "दुनिया का सबसे बड़ा महाद्वीप कौन सा है?",
  options_en: ["Asia", "Africa", "Europe", "North America"],
  options_hi: ["एशिया", "अफ्रीका", "यूरोप", "उत्तर अमेरिका"],
  answer_en: "Asia",
  answer_hi: "एशिया",
  attempted: false,
  selected: ""
},
{
  num: 25,
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
  num: 26,
  question_en: "Which planet is the hottest in the solar system?",
  question_hi: "सौर मंडल में सबसे गर्म ग्रह कौन सा है?",
  options_en: ["Venus", "Mercury", "Mars", "Jupiter"],
  options_hi: ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
  answer_en: "Venus",
  answer_hi: "शुक्र",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Who painted the Mona Lisa?",
  question_hi: "मोनालिसा चित्र किसने बनाया?",
  options_en: ["Leonardo da Vinci", "Pablo Picasso", "Vincent Van Gogh", "Claude Monet"],
  options_hi: ["लियोनार्डो दा विंची", "पाब्लो पिकासो", "विन्सेंट वैन गॉग", "क्लॉड मоне"],
  answer_en: "Leonardo da Vinci",
  answer_hi: "लियोनार्डो दा विंची",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "What is the hardest natural substance on Earth?",
  question_hi: "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
  options_en: ["Diamond", "Gold", "Iron", "Quartz"],
  options_hi: ["हीरा", "सोना", "लोहा", "क्वार्ट्ज"],
  answer_en: "Diamond",
  answer_hi: "हीरा",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which is the largest ocean on Earth?",
  question_hi: "पृथ्वी का सबसे बड़ा महासागर कौन सा है?",
  options_en: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  options_hi: ["प्रशांत महासागर", "अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
  answer_en: "Pacific Ocean",
  answer_hi: "प्रशांत महासागर",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which country is known as the Land of Rising Sun?",
  question_hi: "कौन सा देश 'उगते सूरज की भूमि' के रूप में जाना जाता है?",
  options_en: ["Japan", "China", "Thailand", "South Korea"],
  options_hi: ["जापान", "चीन", "थाईलैंड", "दक्षिण कोरिया"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Who discovered penicillin?",
  question_hi: "पेनिसिलिन की खोज किसने की थी?",
  options_en: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Isaac Newton"],
  options_hi: ["अलेक्जेंडर फ्लेमिंग", "मैरी क्यूरी", "लुई पाश्चर", "आइज़ैक न्यूटन"],
  answer_en: "Alexander Fleming",
  answer_hi: "अलेक्जेंडर फ्लेमिंग",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which gas is most abundant in the Earth's atmosphere?",
  question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस होती है?",
  options_en: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
  options_hi: ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Nitrogen",
  answer_hi: "नाइट्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the boiling point of water?",
  question_hi: "पानी का उबालने का तापमान क्या है?",
  options_en: ["100°C", "90°C", "80°C", "110°C"],
  options_hi: ["100°C", "90°C", "80°C", "110°C"],
  answer_en: "100°C",
  answer_hi: "100°C",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Who is known as the Father of the Nation in India?",
  question_hi: "भारत में 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
  answer_en: "Mahatma Gandhi",
  answer_hi: "महात्मा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which is the tallest mountain in the world?",
  question_hi: "दुनिया का सबसे ऊँचा पर्वत कौन सा है?",
  options_en: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
  options_hi: ["माउंट एवरेस्ट", "के2", "कंचनजंगा", "ल्होत्से"],
  answer_en: "Mount Everest",
  answer_hi: "माउंट एवरेस्ट",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which organ in the human body pumps blood?",
  question_hi: "मानव शरीर में कौन सा अंग रक्त पंप करता है?",
  options_en: ["Heart", "Liver", "Kidney", "Lungs"],
  options_hi: ["हृदय", "यकृत", "गुर्दा", "फेफड़े"],
  answer_en: "Heart",
  answer_hi: "हृदय",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which language is the most spoken worldwide?",
  question_hi: "दुनिया में सबसे अधिक बोली जाने वाली भाषा कौन सी है?",
  options_en: ["English", "Mandarin", "Spanish", "Hindi"],
  options_hi: ["अंग्रेज़ी", "मंदारिन", "स्पेनिश", "हिंदी"],
  answer_en: "Mandarin",
  answer_hi: "मंदारिन",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which country invented paper?",
  question_hi: "किस देश ने कागज का आविष्कार किया?",
  options_en: ["China", "Egypt", "Greece", "India"],
  options_hi: ["चीन", "मिस्र", "ग्रीस", "भारत"],
  answer_en: "China",
  answer_hi: "चीन",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कौन सा धातु कमरे के तापमान पर द्रव है?",
  options_en: ["Mercury", "Gold", "Silver", "Copper"],
  options_hi: ["पारा", "सोना", "चांदी", "तांबा"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which is the largest planet in our solar system?",
  question_hi: "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
  options_en: ["Jupiter", "Saturn", "Neptune", "Earth"],
  options_hi: ["बृहस्पति", "शनि", "वरुण", "पृथ्वी"],
  answer_en: "Jupiter",
  answer_hi: "बृहस्पति",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Who invented the light bulb?",
  question_hi: "बल्ब का आविष्कार किसने किया?",
  options_en: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Benjamin Franklin"],
  options_hi: ["थॉमस एडिसन", "निकोला टेस्ला", "अलेक्जेंडर ग्राहम बेल", "बेंजामिन फ्रैंकलिन"],
  answer_en: "Thomas Edison",
  answer_hi: "थॉमस एडिसन",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is the main source of energy for the Earth?",
  question_hi: "पृथ्वी के लिए ऊर्जा का मुख्य स्रोत क्या है?",
  options_en: ["The Sun", "The Moon", "The Stars", "The Earth’s Core"],
  options_hi: ["सूरज", "चाँद", "तारे", "पृथ्वी का केंद्र"],
  answer_en: "The Sun",
  answer_hi: "सूरज",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which animal is known as the King of the Jungle?",
  question_hi: "कौन सा जानवर 'जंगल का राजा' कहलाता है?",
  options_en: ["Lion", "Tiger", "Elephant", "Leopard"],
  options_hi: ["सिंह", "बाघ", "हाथी", "चित्ता"],
  answer_en: "Lion",
  answer_hi: "सिंह",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "What is the freezing point of water?",
  question_hi: "पानी का जमने का तापमान क्या है?",
  options_en: ["0°C", "100°C", "32°C", "50°C"],
  options_hi: ["0°C", "100°C", "32°C", "50°C"],
  answer_en: "0°C",
  answer_hi: "0°C",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Who wrote the play 'Romeo and Juliet'?",
  question_hi: "'रोमियो और जूलियट' नाटक किसने लिखा?",
  options_en: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
  options_hi: ["विलियम शेक्सपियर", "चार्ल्स डिकेंस", "मार्क ट्वेन", "जेन ऑस्टेन"],
  answer_en: "William Shakespeare",
  answer_hi: "विलियम शेक्सपियर",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "What is the largest bone in the human body?",
  question_hi: "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
  options_en: ["Femur", "Tibia", "Humerus", "Skull"],
  options_hi: ["जांघ की हड्डी", "पिंडली की हड्डी", "बांह की हड्डी", "खोपड़ी"],
  answer_en: "Femur",
  answer_hi: "जांघ की हड्डी",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which vitamin is produced when the human body is exposed to sunlight?",
  question_hi: "सूरज की रोशनी में रहने से मानव शरीर किस विटामिन का उत्पादन करता है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B12"],
  options_hi: ["विटामिन डी", "विटामिन ए", "विटामिन सी", "विटामिन बी12"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन डी",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which is the smallest unit of life?",
  question_hi: "जीवन की सबसे छोटी इकाई कौन सी है?",
  options_en: ["Cell", "Atom", "Molecule", "Organ"],
  options_hi: ["कोशिका", "परमाणु", "अणु", "अंग"],
  answer_en: "Cell",
  answer_hi: "कोशिका",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which organ is responsible for digestion in the human body?",
  question_hi: "मानव शरीर में पाचन के लिए कौन सा अंग जिम्मेदार है?",
  options_en: ["Stomach", "Liver", "Heart", "Lungs"],
  options_hi: ["पेट", "यकृत", "हृदय", "फेफड़े"],
  answer_en: "Stomach",
  answer_hi: "पेट",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which is the longest bone in the human body?",
  question_hi: "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
  options_en: ["Femur", "Tibia", "Humerus", "Fibula"],
  options_hi: ["जांघ की हड्डी", "पिंडली की हड्डी", "बांह की हड्डी", "फिबुला"],
  answer_en: "Femur",
  answer_hi: "जांघ की हड्डी",
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