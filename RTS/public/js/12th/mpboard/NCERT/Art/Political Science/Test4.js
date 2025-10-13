const questions = [
    {
    "num": 1,
    "question_en": "What is the full form of CPI?",
    "question_hi": "CPI का पूर्ण रूप क्या है?",
    "options_en": ["Communist Party of India", "Central Party of India", "Common People's Institution", "Constitutional Party of India"],
    "options_hi": ["कम्युनिस्ट पार्टी ऑफ इंडिया", "सेंट्रल पार्टी ऑफ इंडिया", "कॉमन पीपल्स इंस्टीट्यूशन", "कांस्टीट्यूशनल पार्टी ऑफ इंडिया"],
    "answer_en": "Communist Party of India",
    "answer_hi": "कम्युनिस्ट पार्टी ऑफ इंडिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Who was the first Prime Minister of independent India?",
    "question_hi": "स्वतंत्र भारत के पहले प्रधानमंत्री कौन थे?",
    "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Rajendra Prasad"],
    "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार पटेल", "राजेंद्र प्रसाद"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which Indian state is known as the 'Land of Five Rivers'?",
    "question_hi": "कौन सा भारतीय राज्य 'पांच नदियों की धरती' के नाम से जाना जाता है?",
    "options_en": ["Punjab", "Haryana", "Uttar Pradesh", "Rajasthan"],
    "options_hi": ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "राजस्थान"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the capital of Australia?",
    "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
    "options_en": ["Canberra", "Sydney", "Melbourne", "Perth"],
    "options_hi": ["कैनबरा", "सिडनी", "मेलबर्न", "पर्थ"],
    "answer_en": "Canberra",
    "answer_hi": "कैनबरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Who wrote the Indian national anthem?",
    "question_hi": "भारतीय राष्ट्रगान किसने लिखा था?",
    "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subhash Chandra Bose"],
    "options_hi": ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "सुभाष चंद्र बोस"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रवींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which is the largest planet in our solar system?",
    "question_hi": "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    "options_en": ["Jupiter", "Saturn", "Earth", "Mars"],
    "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "मंगल"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the currency of Japan?",
    "question_hi": "जापान की मुद्रा क्या है?",
    "options_en": ["Yen", "Won", "Dollar", "Rupee"],
    "options_hi": ["येन", "वॉन", "डॉलर", "रुपया"],
    "answer_en": "Yen",
    "answer_hi": "येन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Who is known as the 'Father of the Indian Constitution'?",
    "question_hi": "भारतीय संविधान के 'पिता' के रूप में किसे जाना जाता है?",
    "options_en": ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
    "options_hi": ["डॉ. बी.आर. अंबेडकर", "जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार पटेल"],
    "answer_en": "Dr. B.R. Ambedkar",
    "answer_hi": "डॉ. बी.आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which river is the longest in the world?",
    "question_hi": "दुनिया की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Nile", "Amazon", "Yangtze", "Mississippi"],
    "options_hi": ["नील", "अमेजन", "यांग्त्ज़े", "मिसिसिपी"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which language is the most spoken worldwide?",
    "question_hi": "दुनिया में सबसे अधिक बोली जाने वाली भाषा कौन सी है?",
    "options_en": ["Mandarin Chinese", "English", "Spanish", "Hindi"],
    "options_hi": ["मंदारिन चीनी", "अंग्रेज़ी", "स्पेनिश", "हिन्दी"],
    "answer_en": "Mandarin Chinese",
    "answer_hi": "मंदारिन चीनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Who discovered gravity?",
    "question_hi": "गुरुत्वाकर्षण की खोज किसने की?",
    "options_en": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    "options_hi": ["आईजैक न्यूटन", "आल्बर्ट आइंस्टीन", "गैलीलियो गैलीली", "निकोला टेस्ला"],
    "answer_en": "Isaac Newton",
    "answer_hi": "आईजैक न्यूटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which element has the chemical symbol 'O'?",
    "question_hi": "किस तत्व का रासायनिक चिन्ह 'O' है?",
    "options_en": ["Oxygen", "Gold", "Osmium", "Oganesson"],
    "options_hi": ["ऑक्सीजन", "सोना", "ओस्मियम", "ओगनेसन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which country is known as the 'Land of the Rising Sun'?",
    "question_hi": "कौन सा देश 'सूरज की पहली किरणों का देश' कहलाता है?",
    "options_en": ["Japan", "China", "Thailand", "South Korea"],
    "options_hi": ["जापान", "चीन", "थाईलैंड", "दक्षिण कोरिया"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the boiling point of water in Celsius?",
    "question_hi": "जल का क्वथनांक सेल्सियस में क्या है?",
    "options_en": ["100°C", "90°C", "80°C", "110°C"],
    "options_hi": ["100 डिग्री सेल्सियस", "90 डिग्री सेल्सियस", "80 डिग्री सेल्सियस", "110 डिग्री सेल्सियस"],
    "answer_en": "100°C",
    "answer_hi": "100 डिग्री सेल्सियस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which animal is known as the 'King of the Jungle'?",
    "question_hi": "कौन सा जानवर 'जंगल का राजा' कहलाता है?",
    "options_en": ["Lion", "Tiger", "Elephant", "Cheetah"],
    "options_hi": ["शेर", "बाघ", "हाथी", "चीतल"],
    "answer_en": "Lion",
    "answer_hi": "शेर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Who invented the telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    "options_hi": ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुग्लिएल्मो मार्कोनी"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्जेंडर ग्राहम बेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which planet is known as the 'Red Planet'?",
    "question_hi": "'लाल ग्रह' के रूप में कौन सा ग्रह जाना जाता है?",
    "options_en": ["Mars", "Venus", "Mercury", "Saturn"],
    "options_hi": ["मंगल", "शुक्र", "बुध", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the main ingredient of glass?",
    "question_hi": "कांच का मुख्य घटक क्या है?",
    "options_en": ["Silica", "Carbon", "Iron", "Aluminum"],
    "options_hi": ["सिलिका", "कार्बन", "लोहा", "एल्यूमीनियम"],
    "answer_en": "Silica",
    "answer_hi": "सिलिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Who wrote the play 'Romeo and Juliet'?",
    "question_hi": "'रोमियो और जूलियट' नाटक किसने लिखा?",
    "options_en": ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
    "options_hi": ["विलियम शेक्सपियर", "चार्ल्स डिकेंस", "लियो टॉलस्टॉय", "मार्क ट्वेन"],
    "answer_en": "William Shakespeare",
    "answer_hi": "विलियम शेक्सपियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which organ is responsible for pumping blood in the human body?",
    "question_hi": "मानव शरीर में रक्त पंप करने वाला अंग कौन सा है?",
    "options_en": ["Heart", "Lungs", "Kidney", "Liver"],
    "options_hi": ["हृदय", "फेफड़े", "गुर्दा", "यकृत"],
    "answer_en": "Heart",
    "answer_hi": "हृदय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the chemical formula of water?",
    "question_hi": "जल का रासायनिक सूत्र क्या है?",
    "options_en": ["H2O", "CO2", "O2", "NaCl"],
    "options_hi": ["एच2ओ", "सीओ2", "ओ2", "एनएसीएल"],
    "answer_en": "H2O",
    "answer_hi": "एच2ओ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Who is the author of the 'Harry Potter' series?",
    "question_hi": "'हैरी पॉटर' श्रृंखला के लेखक कौन हैं?",
    "options_en": ["J.K. Rowling", "Stephen King", "Agatha Christie", "J.R.R. Tolkien"],
    "options_hi": ["जे.के. रोलिंग", "स्टीफन किंग", "अगाथा क्रिस्टी", "जे.आर.आर. टॉल्किन"],
    "answer_en": "J.K. Rowling",
    "answer_hi": "जे.के. रोलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which continent is the Sahara Desert located in?",
    "question_hi": "सहारा रेगिस्तान किस महाद्वीप में स्थित है?",
    "options_en": ["Africa", "Asia", "Australia", "South America"],
    "options_hi": ["अफ्रीका", "एशिया", "ऑस्ट्रेलिया", "दक्षिण अमेरिका"],
    "answer_en": "Africa",
    "answer_hi": "अफ्रीका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the hardest natural substance on Earth?",
    "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    "options_en": ["Diamond", "Gold", "Iron", "Platinum"],
    "options_hi": ["हीरा", "सोना", "लोहा", "प्लैटिनम"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which country is famous for the Eiffel Tower?",
    "question_hi": "कौन सा देश एफिल टावर के लिए प्रसिद्ध है?",
    "options_en": ["France", "Italy", "Germany", "Spain"],
    "options_hi": ["फ्रांस", "इटली", "जर्मनी", "स्पेन"],
    "answer_en": "France",
    "answer_hi": "फ्रांस",
    "attempted": false,
    "selected": ""
  },
   {
    "num": 26,
    "question_en": "In which year was the Communist Party of India founded?",
    "question_hi": "भारतीय कम्युनिस्ट पार्टी कब बनी थी?",
    "options_en": ["1925", "1930", "1947", "1950"],
    "options_hi": ["1925", "1930", "1947", "1950"],
    "answer_en": "1925",
    "answer_hi": "1925",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Who was the first General Secretary of CPI?",
    "question_hi": "CPI के पहले महासचिव कौन थे?",
    "options_en": ["S.A. Dange", "P.C. Joshi", "E.M.S. Namboodiripad", "A.K. Gopalan"],
    "options_hi": ["एस.ए. डांगे", "पी.सी. जोशी", "ई.एम.एस. नामबूदीरिपाद", "ए.के. गोपालन"],
    "answer_en": "S.A. Dange",
    "answer_hi": "एस.ए. डांगे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What ideology does the CPI primarily follow?",
    "question_hi": "CPI मुख्यतः किस विचारधारा का पालन करता है?",
    "options_en": ["Communism", "Capitalism", "Socialism", "Liberalism"],
    "options_hi": ["कम्युनिज़्म", "पूंजीवाद", "समाजवाद", "उदारवाद"],
    "answer_en": "Communism",
    "answer_hi": "कम्युनिज़्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which international organization is CPI affiliated with?",
    "question_hi": "CPI किस अंतरराष्ट्रीय संगठन से जुड़ा है?",
    "options_en": ["Comintern", "Socialist International", "Communist International", "International Democratic Federation"],
    "options_hi": ["कोमिन्टर्न", "सोशलिस्ट इंटरनेशनल", "कम्युनिस्ट इंटरनेशनल", "इंटरनेशनल डेमोक्रेटिक फेडरेशन"],
    "answer_en": "Communist International",
    "answer_hi": "कम्युनिस्ट इंटरनेशनल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which event caused a split in the CPI in 1964?",
    "question_hi": "1964 में CPI में विभाजन का कारण कौन-सा घटना थी?",
    "options_en": ["Ideological Differences", "Economic Crisis", "Foreign Invasion", "Leadership Issues"],
    "options_hi": ["वैचारिक मतभेद", "आर्थिक संकट", "विदेशी आक्रमण", "नेतृत्व के मुद्दे"],
    "answer_en": "Ideological Differences",
    "answer_hi": "वैचारिक मतभेद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which party was formed after the 1964 split from CPI?",
    "question_hi": "1964 में CPI के विभाजन के बाद कौन-सी पार्टी बनी?",
    "options_en": ["CPI(M)", "BSP", "INC", "Janata Party"],
    "options_hi": ["CPI(M)", "BSP", "INC", "जनता पार्टी"],
    "answer_en": "CPI(M)",
    "answer_hi": "CPI(M)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the symbol of CPI?",
    "question_hi": "CPI का चुनाव चिन्ह क्या है?",
    "options_en": ["Sickle and Hammer", "Lotus", "Hand", "Elephant"],
    "options_hi": ["सिकल और हथौड़ा", "कमल", "हाथ", "हाथी"],
    "answer_en": "Sickle and Hammer",
    "answer_hi": "सिकल और हथौड़ा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "In which Indian state does CPI have a strong political presence?",
    "question_hi": "किस भारतीय राज्य में CPI की मजबूत राजनीतिक उपस्थिति है?",
    "options_en": ["Kerala", "Punjab", "Rajasthan", "Maharashtra"],
    "options_hi": ["केरल", "पंजाब", "राजस्थान", "महाराष्ट्र"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which political alliance is CPI generally a part of?",
    "question_hi": "CPI सामान्यतः किस राजनीतिक गठबंधन का हिस्सा होता है?",
    "options_en": ["Left Front", "National Democratic Alliance", "United Progressive Alliance", "BJP-led Alliance"],
    "options_hi": ["लेफ्ट फ्रंट", "राष्ट्रीय जनतांत्रिक गठबंधन", "संयुक्त प्रगतिशील गठबंधन", "बीजेपी नेतृत्व वाली गठबंधन"],
    "answer_en": "Left Front",
    "answer_hi": "लेफ्ट फ्रंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Who was the prominent leader of CPI during India's independence struggle?",
    "question_hi": "भारत की स्वतंत्रता संग्राम के दौरान CPI के प्रमुख नेता कौन थे?",
    "options_en": ["S.A. Dange", "Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi"],
    "options_hi": ["एस.ए. डांगे", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "महात्मा गांधी"],
    "answer_en": "S.A. Dange",
    "answer_hi": "एस.ए. डांगे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which document outlines the principles of CPI?",
    "question_hi": "CPI के सिद्धांतों को किस दस्तावेज़ में बताया गया है?",
    "options_en": ["Party Constitution", "Indian Constitution", "Directive Principles", "Manifesto"],
    "options_hi": ["पार्टी संविधान", "भारतीय संविधान", "निर्देशक सिद्धांत", "घोषणापत्र"],
    "answer_en": "Party Constitution",
    "answer_hi": "पार्टी संविधान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the stance of CPI on economic policies?",
    "question_hi": "आर्थिक नीतियों पर CPI का रुख क्या है?",
    "options_en": ["Pro-socialist", "Pro-capitalist", "Neutral", "Laissez-faire"],
    "options_hi": ["समाजवादी समर्थक", "पूंजीवादी समर्थक", "तटस्थ", "आर्थिक उदासीन"],
    "answer_en": "Pro-socialist",
    "answer_hi": "समाजवादी समर्थक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which color is prominently associated with CPI?",
    "question_hi": "CPI से कौन सा रंग प्रमुख रूप से जुड़ा है?",
    "options_en": ["Red", "Green", "Blue", "Yellow"],
    "options_hi": ["लाल", "हरा", "नीला", "पीला"],
    "answer_en": "Red",
    "answer_hi": "लाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which festival is significant for the CPI members?",
    "question_hi": "CPI सदस्यों के लिए कौन सा त्योहार महत्वपूर्ण है?",
    "options_en": ["May Day", "Diwali", "Holi", "Independence Day"],
    "options_hi": ["मई दिवस", "दिवाली", "होली", "स्वतंत्रता दिवस"],
    "answer_en": "May Day",
    "answer_hi": "मई दिवस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which magazine is published by the CPI?",
    "question_hi": "CPI कौन सा पत्रिका प्रकाशित करता है?",
    "options_en": ["People's Democracy", "Economic Times", "The Hindu", "Frontline"],
    "options_hi": ["पीपल्स डेमोक्रेसी", "इकनॉमिक टाइम्स", "द हिन्दू", "फ्रंटलाइन"],
    "answer_en": "People's Democracy",
    "answer_hi": "पीपल्स डेमोक्रेसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which struggle was CPI actively involved in post-independence?",
    "question_hi": "स्वतंत्रता के बाद CPI किस संघर्ष में सक्रिय था?",
    "options_en": ["Land reforms", "Industrialization", "Foreign policy", "Education reform"],
    "options_hi": ["भूमि सुधार", "औद्योगिकीकरण", "विदेश नीति", "शिक्षा सुधार"],
    "answer_en": "Land reforms",
    "answer_hi": "भूमि सुधार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which mass organization is affiliated with CPI?",
    "question_hi": "CPI से जुड़ा जन संगठन कौन सा है?",
    "options_en": ["All India Trade Union Congress", "Rashtriya Swayamsevak Sangh", "Bharatiya Janata Party", "Indian National Congress"],
    "options_hi": ["ऑल इंडिया ट्रेड यूनियन कांग्रेस", "राष्ट्रीय स्वयंसेवक संघ", "भारतीय जनता पार्टी", "भारतीय राष्ट्रीय कांग्रेस"],
    "answer_en": "All India Trade Union Congress",
    "answer_hi": "ऑल इंडिया ट्रेड यूनियन कांग्रेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which slogan is often associated with communist movements including CPI?",
    "question_hi": "कौन सा नारा कम्युनिस्ट आंदोलनों के साथ जुड़ा होता है, जिसमें CPI भी शामिल है?",
    "options_en": ["Workers of the world, unite!", "Jai Hind", "Vande Mataram", "Inquilab Zindabad"],
    "options_hi": ["विश्व के मजदूरों, एक हो जाओ!", "जय हिंद", "वंदे मातरम", "इंक़लाब ज़िंदाबाद"],
    "answer_en": "Workers of the world, unite!",
    "answer_hi": "विश्व के मजदूरों, एक हो जाओ!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What type of economy does CPI advocate for?",
    "question_hi": "CPI किस प्रकार की अर्थव्यवस्था का समर्थन करता है?",
    "options_en": ["Socialist economy", "Capitalist economy", "Mixed economy", "Free market economy"],
    "options_hi": ["समाजवादी अर्थव्यवस्था", "पूंजीवादी अर्थव्यवस्था", "मिश्रित अर्थव्यवस्था", "मुक्त बाजार अर्थव्यवस्था"],
    "answer_en": "Socialist economy",
    "answer_hi": "समाजवादी अर्थव्यवस्था",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which is the youth wing of the CPI?",
    "question_hi": "CPI की युवा शाखा कौन सी है?",
    "options_en": ["All India Youth Federation", "National Students' Union", "Bharatiya Yuva Morcha", "Youth Congress"],
    "options_hi": ["ऑल इंडिया यूथ फेडरेशन", "नेशनल स्टूडेंट्स यूनियन", "भारतीय युवा मोर्चा", "यूथ कांग्रेस"],
    "answer_en": "All India Youth Federation",
    "answer_hi": "ऑल इंडिया यूथ फेडरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "CPI is a part of which international communist organization?",
    "question_hi": "CPI किस अंतरराष्ट्रीय कम्युनिस्ट संगठन का हिस्सा है?",
    "options_en": ["International Meeting of Communist and Workers Parties", "United Nations", "World Trade Organization", "Non-Aligned Movement"],
    "options_hi": ["अंतरराष्ट्रीय कम्युनिस्ट और मजदूर पार्टियों की बैठक", "संयुक्त राष्ट्र", "विश्व व्यापार संगठन", "गैर-संरेखित आंदोलन"],
    "answer_en": "International Meeting of Communist and Workers Parties",
    "answer_hi": "अंतरराष्ट्रीय कम्युनिस्ट और मजदूर पार्टियों की बैठक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which major global event influenced the formation of CPI?",
    "question_hi": "किस वैश्विक घटना ने CPI के गठन को प्रभावित किया?",
    "options_en": ["Russian Revolution", "World War II", "Great Depression", "Cold War"],
    "options_hi": ["रूसी क्रांति", "विश्व युद्ध II", "महामंदी", "शीत युद्ध"],
    "answer_en": "Russian Revolution",
    "answer_hi": "रूसी क्रांति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Who among the following was a key leader in CPI's trade union movement?",
    "question_hi": "निम्नलिखित में से कौन CPI के ट्रेड यूनियन आंदोलन का प्रमुख नेता था?",
    "options_en": ["A.K. Gopalan", "Lal Bahadur Shastri", "Sardar Patel", "C. Rajagopalachari"],
    "options_hi": ["ए.के. गोपालन", "लाल बहादुर शास्त्री", "सरदार पटेल", "सी. राजगोपालाचारी"],
    "answer_en": "A.K. Gopalan",
    "answer_hi": "ए.के. गोपालन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which sector's workers did CPI focus on during the early years?",
    "question_hi": "प्रारंभिक वर्षों में CPI ने किस क्षेत्र के मजदूरों पर ध्यान दिया?",
    "options_en": ["Industrial workers", "Farmers", "Service sector", "Traders"],
    "options_hi": ["औद्योगिक मजदूर", "किसान", "सेवा क्षेत्र", "व्यापारी"],
    "answer_en": "Industrial workers",
    "answer_hi": "औद्योगिक मजदूर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which international event led to ideological differences within CPI?",
    "question_hi": "कौन सा अंतरराष्ट्रीय घटना ने CPI में वैचारिक मतभेद पैदा किया?",
    "options_en": ["Sino-Soviet Split", "World War I", "Korean War", "Vietnam War"],
    "options_hi": ["सिनो-सोवियत विभाजन", "विश्व युद्ध I", "कोरियाई युद्ध", "वियतनाम युद्ध"],
    "answer_en": "Sino-Soviet Split",
    "answer_hi": "सिनो-सोवियत विभाजन",
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
