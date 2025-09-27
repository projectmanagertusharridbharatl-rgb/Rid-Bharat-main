const questions = [
   {
            num: 1,
            question_en: "Which is the largest state of India by area?",
            question_hi: "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?",
            options_en: ["Madhya Pradesh", "Rajasthan", "Maharashtra", "Uttar Pradesh"],
            options_hi: ["मध्य प्रदेश", "राजस्थान", "महाराष्ट्र", "उत्तर प्रदेश"],
            answer_en: "Rajasthan",
            answer_hi: "राजस्थान",
            attempted: false,
            selected: ""
          },
          {
            num: 2,
            question_en: "Who was the first President of India?",
            question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
            options_en: ["Rajendra Prasad", "Jawaharlal Nehru", "S. Radhakrishnan", "APJ Abdul Kalam"],
            options_hi: ["राजेन्द्र प्रसाद", "जवाहरलाल नेहरू", "एस. राधाकृष्णन", "एपीजे अब्दुल कलाम"],
            answer_en: "Rajendra Prasad",
            answer_hi: "राजेन्द्र प्रसाद",
            attempted: false,
            selected: ""
          },
           {
        num: 3,
        question_en: "What is the national animal of India?",
        question_hi: "भारत का राष्ट्रीय पशु कौन सा है?",
        options_en: ["Lion", "Elephant", "Tiger", "Leopard"],
        options_hi: ["शेर", "हाथी", "बाघ", "तेंदुआ"],
        answer_en: "Tiger",
        answer_hi: "बाघ",
        attempted: false,
        selected: ""
      },
      {
        num: 4,
        question_en: "Who wrote the Indian National Anthem?",
        question_hi: "भारतीय राष्ट्रगान किसने लिखा था?",
        options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhash Chandra Bose"],
        options_hi: ["बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ ठाकुर", "सरोजिनी नायडू", "सुभाष चंद्र बोस"],
        answer_en: "Rabindranath Tagore",
        answer_hi: "रवींद्रनाथ ठाकुर",
        attempted: false,
        selected: ""
      },
      {
        num: 5,
        question_en: "Which planet is known as the Red Planet?",
        question_hi: "कौन सा ग्रह 'लाल ग्रह' के रूप में जाना जाता है?",
        options_en: ["Earth", "Mars", "Jupiter", "Venus"],
        options_hi: ["पृथ्वी", "मंगल", "बृहस्पति", "शुक्र"],
        answer_en: "Mars",
        answer_hi: "मंगल",
        attempted: false,
        selected: ""
      },
      {
        num: 6,
        question_en: "What is the full form of ATM?",
        question_hi: "ATM का पूरा नाम क्या है?",
        options_en: ["Automatic Teller Machine", "Any Time Money", "Auto Transaction Machine", "All Time Machine"],
        options_hi: ["ऑटोमैटिक टेलर मशीन", "एनी टाइम मनी", "ऑटो ट्रांजेक्शन मशीन", "ऑल टाइम मशीन"],
        answer_en: "Automatic Teller Machine",
        answer_hi: "ऑटोमैटिक टेलर मशीन",
        attempted: false,
        selected: ""
      },
      {
        num: 7,
        question_en: "Who is known as the Father of the Nation in India?",
        question_hi: "भारत में राष्ट्रपिता किसे कहा जाता है?",
        options_en: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi", "B. R. Ambedkar"],
        options_hi: ["जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "महात्मा गांधी", "भीमराव अंबेडकर"],
        answer_en: "Mahatma Gandhi",
        answer_hi: "महात्मा गांधी",
        attempted: false,
        selected: ""
      },
      {
        num: 8,
        question_en: "Which is the largest ocean in the world?",
        question_hi: "विश्व का सबसे बड़ा महासागर कौन सा है?",
        options_en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        options_hi: ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
        answer_en: "Pacific Ocean",
        answer_hi: "प्रशांत महासागर",
        attempted: false,
        selected: ""
      },
      {
        num: 9,
        question_en: "Which gas do plants use for photosynthesis?",
        question_hi: "पौधे प्रकाश संश्लेषण के लिए किस गैस का उपयोग करते हैं?",
        options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        answer_en: "Carbon Dioxide",
        answer_hi: "कार्बन डाइऑक्साइड",
        attempted: false,
        selected: ""
      },
      {
        num: 10,
        question_en: "Who invented the light bulb?",
        question_hi: "बल्ब का आविष्कार किसने किया था?",
        options_en: ["Albert Einstein", "Isaac Newton", "Thomas Edison", "Nikola Tesla"],
        options_hi: ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "थॉमस एडिसन", "निकोला टेस्ला"],
        answer_en: "Thomas Edison",
        answer_hi: "थॉमस एडिसन",
        attempted: false,
        selected: ""
      },
      {
        num: 11,
        question_en: "Which is the smallest state in India by area?",
        question_hi: "भारत का सबसे छोटा राज्य क्षेत्रफल के अनुसार कौन सा है?",
        options_en: ["Goa", "Sikkim", "Tripura", "Manipur"],
        options_hi: ["गोवा", "सिक्किम", "त्रिपुरा", "मणिपुर"],
        answer_en: "Goa",
        answer_hi: "गोवा",
        attempted: false,
        selected: ""
      },
      {
        num: 12,
        question_en: "Which festival is known as the Festival of Lights?",
        question_hi: "कौन सा त्योहार 'रोशनी का त्योहार' कहलाता है?",
        options_en: ["Holi", "Diwali", "Eid", "Christmas"],
        options_hi: ["होली", "दीवाली", "ईद", "क्रिसमस"],
        answer_en: "Diwali",
        answer_hi: "दीवाली",
        attempted: false,
        selected: ""
      },
      {
        num: 13,
        question_en: "Which instrument is used to measure temperature?",
        question_hi: "तापमान मापने के लिए किस उपकरण का उपयोग किया जाता है?",
        options_en: ["Thermometer", "Barometer", "Hygrometer", "Odometer"],
        options_hi: ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "ओडोमीटर"],
        answer_en: "Thermometer",
        answer_hi: "थर्मामीटर",
        attempted: false,
        selected: ""
      },
      {
        num: 14,
        question_en: "Which bird is the national bird of India?",
        question_hi: "भारत का राष्ट्रीय पक्षी कौन है?",
        options_en: ["Swan", "Eagle", "Peacock", "Parrot"],
        options_hi: ["हंस", "गरुड़", "मोर", "तोता"],
        answer_en: "Peacock",
        answer_hi: "मोर",
        attempted: false,
        selected: ""
      },
      {
        num: 15,
        question_en: "Which is the longest river in India?",
        question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
        options_en: ["Yamuna", "Narmada", "Brahmaputra", "Ganga"],
        options_hi: ["यमुना", "नर्मदा", "ब्रह्मपुत्र", "गंगा"],
        answer_en: "Ganga",
        answer_hi: "गंगा",
        attempted: false,
        selected: ""
      },
      {
        num: 16,
        question_en: "What is the currency of India?",
        question_hi: "भारत की मुद्रा क्या है?",
        options_en: ["Dollar", "Rupee", "Yen", "Pound"],
        options_hi: ["डॉलर", "रुपया", "येन", "पाउंड"],
        answer_en: "Rupee",
        answer_hi: "रुपया",
        attempted: false,
        selected: ""
      },
      {
        num: 17,
        question_en: "Which of the following is used to measure speed?",
        question_hi: "निम्नलिखित में से किसका उपयोग गति मापने के लिए किया जाता है?",
        options_en: ["Odometer", "Thermometer", "Speedometer", "Altimeter"],
        options_hi: ["ओडोमीटर", "थर्मामीटर", "स्पीडोमीटर", "एल्टीमीटर"],
        answer_en: "Speedometer",
        answer_hi: "स्पीडोमीटर",
        attempted: false,
        selected: ""
      },
      {
        num: 18,
        question_en: "Which is the capital of India?",
        question_hi: "भारत की राजधानी कौन सी है?",
        options_en: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        options_hi: ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
        answer_en: "Delhi",
        answer_hi: "दिल्ली",
        attempted: false,
        selected: ""
      },
      {
        num: 19,
        question_en: "What is water called in its solid form?",
        question_hi: "जल के ठोस रूप को क्या कहा जाता है?",
        options_en: ["Steam", "Snow", "Ice", "Mist"],
        options_hi: ["भाप", "हिम", "बर्फ", "कोहरा"],
        answer_en: "Ice",
        answer_hi: "बर्फ",
        attempted: false,
        selected: ""
      },
      {
        num: 20,
        question_en: "Who was the first President of India?",
        question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
        options_en: ["Dr. Rajendra Prasad", "Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
        options_hi: ["डॉ. राजेंद्र प्रसाद", "डॉ. भीमराव अंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल"],
        answer_en: "Dr. Rajendra Prasad",
        answer_hi: "डॉ. राजेंद्र प्रसाद",
        attempted: false,
        selected: ""
      },
      {
    num: 21,
    question_en: "Which day is celebrated as Independence Day in India?",
    question_hi: "भारत में स्वतंत्रता दिवस कब मनाया जाता है?",
    options_en: ["15th August", "26th January", "2nd October", "5th September"],
    options_hi: ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "5 सितंबर"],
    answer_en: "15th August",
    answer_hi: "15 अगस्त",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which animal is known as the 'Ship of the Desert'?",
    question_hi: "रेगिस्तान का जहाज किसे कहा जाता है?",
    options_en: ["Horse", "Camel", "Elephant", "Donkey"],
    options_hi: ["घोड़ा", "ऊंट", "हाथी", "गधा"],
    answer_en: "Camel",
    answer_hi: "ऊंट",
    attempted: false,
    selected: ""
  },
   {
            num: 23,
            question_en: "Which city is known as the Cleanest City of India (as per Swachh Survekshan)?",
            question_hi: "स्वच्छ सर्वेक्षण के अनुसार भारत का सबसे स्वच्छ शहर कौन सा है?",
            options_en: ["Indore", "Bhopal", "Surat", "Chandigarh"],
            options_hi: ["इंदौर", "भोपाल", "सूरत", "चंडीगढ़"],
            answer_en: "Indore",
            answer_hi: "इंदौर",
            attempted: false,
            selected: ""
          },
          {
            num: 24,
            question_en: "In which year did Madhya Pradesh come into existence?",
            question_hi: "मध्य प्रदेश की स्थापना किस वर्ष हुई थी?",
            options_en: ["1947", "1950", "1956", "1960"],
            options_hi: ["1947", "1950", "1956", "1960"],
            answer_en: "1956",
            answer_hi: "1956",
            attempted: false,
            selected: ""
          },
          {
            num: 25,
            question_en: "Who is known as the 'Iron Man of India'?",
            question_hi: "भारत के 'लौह पुरुष' किसे कहा जाता है?",
            options_en: ["Subhash Chandra Bose", "Sardar Vallabhbhai Patel", "Bhagat Singh", "Jawaharlal Nehru"],
            options_hi: ["सुभाष चंद्र बोस", "सरदार वल्लभभाई पटेल", "भगत सिंह", "जवाहरलाल नेहरू"],
            answer_en: "Sardar Vallabhbhai Patel",
            answer_hi: "सरदार वल्लभभाई पटेल",
            attempted: false,
            selected: ""
          },
          {
            num: 26,
            question_en: "Which river flows through Madhya Pradesh?",
            question_hi: "मध्य प्रदेश से होकर बहने वाली नदी कौन सी है?",
            options_en: ["Ganga", "Godavari", "Narmada", "Yamuna"],
            options_hi: ["गंगा", "गोदावरी", "नर्मदा", "यमुना"],
            answer_en: "Narmada",
            answer_hi: "नर्मदा",
            attempted: false,
            selected: ""
          },
          {
            num: 27,
            question_en: "Who was the first Chief Minister of Madhya Pradesh?",
            question_hi: "मध्य प्रदेश के पहले मुख्यमंत्री कौन थे?",
            options_en: ["Digvijay Singh", "Ravishankar Shukla", "Shivraj Singh Chauhan", "Kailash Joshi"],
            options_hi: ["दिग्विजय सिंह", "रविशंकर शुक्ल", "शिवराज सिंह चौहान", "कैलाश जोशी"],
            answer_en: "Ravishankar Shukla",
            answer_hi: "रविशंकर शुक्ल",
            attempted: false,
            selected: ""
          },
          {
            num: 28,
            question_en: "Which of the following is the capital of Madhya Pradesh?",
            question_hi: "निम्नलिखित में से मध्य प्रदेश की राजधानी कौन सी है?",
            options_en: ["Indore", "Jabalpur", "Gwalior", "Bhopal"],
            options_hi: ["इंदौर", "जबलपुर", "ग्वालियर", "भोपाल"],
            answer_en: "Bhopal",
            answer_hi: "भोपाल",
            attempted: false,
            selected: ""
          },
          {
            num: 29,
            question_en: "Which Indian freedom fighter was born in Madhya Pradesh?",
            question_hi: "मध्य प्रदेश में जन्मे भारतीय स्वतंत्रता सेनानी कौन थे?",
            options_en: ["Chandrashekhar Azad", "Bhagat Singh", "Bal Gangadhar Tilak", "Lala Lajpat Rai"],
            options_hi: ["चंद्रशेखर आज़ाद", "भगत सिंह", "बाल गंगाधर तिलक", "लाला लाजपत राय"],
            answer_en: "Chandrashekhar Azad",
            answer_hi: "चंद्रशेखर आज़ाद",
            attempted: false,
            selected: ""
          },
          {
            num: 30,
            question_en: "Which state shares the longest border with Madhya Pradesh?",
            question_hi: "मध्य प्रदेश की सबसे लंबी सीमा किस राज्य से लगती है?",
            options_en: ["Maharashtra", "Uttar Pradesh", "Chhattisgarh", "Rajasthan"],
            options_hi: ["महाराष्ट्र", "उत्तर प्रदेश", "छत्तीसगढ़", "राजस्थान"],
            answer_en: "Uttar Pradesh",
            answer_hi: "उत्तर प्रदेश",
            attempted: false,
            selected: ""
          },
          {
            num: 31,
            question_en: "Who wrote the National Anthem of India?",
            question_hi: "भारत का राष्ट्रगान किसने लिखा?",
            options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subhash Chandra Bose", "Sarojini Naidu"],
            options_hi: ["बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ टैगोर", "सुभाष चंद्र बोस", "सरोजिनी नायडू"],
            answer_en: "Rabindranath Tagore",
            answer_hi: "रवींद्रनाथ टैगोर",
            attempted: false,
            selected: ""
          },
          {
            num: 32,
            question_en: "Which is the national flower of India?",
            question_hi: "भारत का राष्ट्रीय फूल कौन सा है?",
            options_en: ["Rose", "Lotus", "Sunflower", "Marigold"],
            options_hi: ["गुलाब", "कमल", "सूरजमुखी", "गेंदा"],
            answer_en: "Lotus",
            answer_hi: "कमल",
            attempted: false,
            selected: ""
          },
          {
            num: 33,
            question_en: "Which wildlife sanctuary is located in Madhya Pradesh?",
            question_hi: "मध्य प्रदेश में स्थित वन्यजीव अभयारण्य कौन सा है?",
            options_en: ["Jim Corbett", "Kanha", "Sundarbans", "Kaziranga"],
            options_hi: ["जिम कॉर्बेट", "कन्हा", "सुंदरबन", "काज़ीरंगा"],
            answer_en: "Kanha",
            answer_hi: "कन्हा",
            attempted: false,
            selected: ""
          },
          {
            num: 34,
            question_en: "Which festival is celebrated as the harvest festival in India?",
            question_hi: "भारत में कौन सा त्योहार फसल कटाई का पर्व माना जाता है?",
            options_en: ["Diwali", "Holi", "Pongal", "Raksha Bandhan"],
            options_hi: ["दिवाली", "होली", "पोंगल", "रक्षाबंधन"],
            answer_en: "Pongal",
            answer_hi: "पोंगल",
            attempted: false,
            selected: ""
          },
          {
            num: 35,
            question_en: "Which state is called the 'Heart of India'?",
            question_hi: "किस राज्य को 'भारत का हृदय' कहा जाता है?",
            options_en: ["Uttar Pradesh", "Madhya Pradesh", "Delhi", "Bihar"],
            options_hi: ["उत्तर प्रदेश", "मध्य प्रदेश", "दिल्ली", "बिहार"],
            answer_en: "Madhya Pradesh",
            answer_hi: "मध्य प्रदेश",
            attempted: false,
            selected: ""
          },
          {
            num: 36,
            question_en: "Which Indian state has the maximum number of Lok Sabha seats?",
            question_hi: "किस भारतीय राज्य में लोकसभा की सबसे अधिक सीटें हैं?",
            options_en: ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
            options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
            answer_en: "Uttar Pradesh",
            answer_hi: "उत्तर प्रदेश",
            attempted: false,
            selected: ""
          },
          {
            num: 37,
            question_en: "Which dam is built on the Narmada River?",
            question_hi: "नर्मदा नदी पर कौन-सा बांध बना है?",
            options_en: ["Bhakra Nangal", "Sardar Sarovar", "Hirakud", "Tehri"],
            options_hi: ["भाखड़ा नांगल", "सरदार सरोवर", "हीराकुंड", "टिहरी"],
            answer_en: "Sardar Sarovar",
            answer_hi: "सरदार सरोवर",
            attempted: false,
            selected: ""
          },
          {
            num: 38,
            question_en: "Which is the highest civilian award in India?",
            question_hi: "भारत का सर्वोच्च नागरिक सम्मान कौन सा है?",
            options_en: ["Padma Shri", "Padma Bhushan", "Padma Vibhushan", "Bharat Ratna"],
            options_hi: ["पद्मश्री", "पद्म भूषण", "पद्म विभूषण", "भारत रत्न"],
            answer_en: "Bharat Ratna",
            answer_hi: "भारत रत्न",
            attempted: false,
            selected: ""
          },
          {
            num: 39,
            question_en: "Which temple in MP is a UNESCO World Heritage Site?",
            question_hi: "मध्य प्रदेश का कौन सा मंदिर यूनेस्को विश्व धरोहर स्थल है?",
            options_en: ["Khajuraho Temples", "Omkareshwar", "Mahakaleshwar", "Chausath Yogini"],
            options_hi: ["खजुराहो मंदिर", "ओंकारेश्वर", "महाकालेश्वर", "चौंसठ योगिनी"],
            answer_en: "Khajuraho Temples",
            answer_hi: "खजुराहो मंदिर",
            attempted: false,
            selected: ""
          },
          {
            num: 40,
            question_en: "Which Indian state has the longest coastline?",
            question_hi: "किस भारतीय राज्य की समुद्री तटरेखा सबसे लंबी है?",
            options_en: ["Kerala", "Gujarat", "Tamil Nadu", "Andhra Pradesh"],
            options_hi: ["केरल", "गुजरात", "तमिलनाडु", "आंध्र प्रदेश"],
            answer_en: "Gujarat",
            answer_en:  "गुजरात",
            attempted: false,
            selected: ""
          },
          {
            num: 41,
            question_en: "What is the value of (2 + 3)²?",
            question_hi: "(2 + 3)² का मान क्या है?",
            options_en: ["10", "25", "15", "30"],
            options_hi: ["10", "25", "15", "30"],
            answer_en: "25",
            answer_hi:"25",
            attempted: false,
            selected: ""
          },
          {
            num: 42,
            question_en: "If x = 3, then the value of x² - 2x + 1 is?",
            question_hi: "यदि x = 3 है, तो x² - 2x + 1 का मान क्या होगा?",
            options_en: ["4", "6", "7", "16"],
            options_hi: ["4", "6", "7", "16"],
            answer_en: "4",
            answer_hi: "4",
            attempted: false,
            selected: ""
          },
          {
            num: 43,
            question_en: "A train runs 120 km in 2 hours. What is its speed?",
            question_hi: "एक ट्रेन 2 घंटे में 120 किमी तय करती है। उसकी गति क्या है?",
            options_en: ["60 km/h", "50 km/h", "70 km/h", "80 km/h"],
            options_hi: ["60 किमी/घंटा", "50 किमी/घंटा", "70 किमी/घंटा", "80 किमी/घंटा"],
            answer_en: "60 km/h",
            answer_hi:"60 किमी/घंटा",
            attempted: false,
            selected: ""
          },
  {
    num: 44,
    question_en: "If the perimeter of a square is 40 cm, what is its area?",
    question_hi: "यदि एक वर्ग की परिमिति 40 सेमी है, तो उसका क्षेत्रफल कितना होगा?",
    options_en: ["100 cm²", "121 cm²", "81 cm²", "144 cm²"],
    options_hi: ["100 सेमी²", "121 सेमी²", "81 सेमी²", "144 सेमी²"],
    answer_en: "100 cm²",
    answer_hi: "100 सेमी²",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "A man buys an article for ₹500 and sells it for ₹600. What is the profit percent?",
    question_hi: "एक आदमी ₹500 में एक वस्तु खरीदता है और ₹600 में बेचता है। लाभ प्रतिशत क्या है?",
    options_en: ["10%", "15%", "20%", "25%"],
    options_hi: ["10%", "15%", "20%", "25%"],
    answer_en: "20%",
    answer_hi: "20%",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Find the HCF of 36 and 48.",
    question_hi: "36 और 48 का महत्तम समापवर्तक (HCF) ज्ञात कीजिए।",
    options_en: ["12", "6", "24", "18"],
    options_hi: ["12", "6", "24", "18"],
    answer_en: "12",
    answer_hi: "12",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the square root of 625?",
    question_hi: "625 का वर्गमूल क्या है?",
    options_en: ["15", "20", "25", "30"],
    options_hi: ["15", "20", "25", "30"],
    answer_en: "25",
    answer_hi: "25",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "If A:B = 2:3 and B:C = 4:5, then A:C = ?",
    question_hi: "यदि A:B = 2:3 और B:C = 4:5, तो A:C = ?",
    options_en: ["8:15", "2:5", "3:10", "4:9"],
    options_hi: ["8:15", "2:5", "3:10", "4:9"],
    answer_en: "8:15",
    answer_hi: "8:15",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "How many prime numbers are there between 1 and 20?",
    question_hi: "1 और 20 के बीच कितने अभाज्य संख्याएँ हैं?",
    options_en: ["6", "7", "8", "9"],
    options_hi: ["6", "7", "8", "9"],
    answer_en: "8",
    answer_hi: "8",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What is the average of first five natural numbers?",
    question_hi: "प्रथम पाँच प्राकृतिक संख्याओं का औसत क्या है?",
    options_en: ["2", "2.5", "3", "3.5"],
    options_hi: ["2", "2.5", "3", "3.5"],
    answer_en: "3",
    answer_hi: "3",
    attempted: false,
    selected: ""
  },
  {
    num: 51,
    question_en: "What comes next in the series: 2, 4, 8, 16, ___?",
    question_hi: "श्रृंखला में अगली संख्या क्या होगी: 2, 4, 8, 16, ___?",
    options_en: ["20", "24", "32", "64"],
    options_hi: ["20", "24", "32", "64"],
    answer_en: "32",
    answer_hi: "32",
    attempted: false,
    selected: ""
  },
  {
    num: 52,
    question_en: "If the selling price is ₹750 and the profit is 25%, what is the cost price?",
    question_hi: "यदि विक्रय मूल्य ₹750 है और लाभ 25% है, तो क्रय मूल्य क्या है?",
    options_en: ["₹700", "₹600", "₹650", "₹720"],
    options_hi: ["₹700", "₹600", "₹650", "₹720"],
    answer_en: "₹600",
    answer_hi: "₹600",
    attempted: false,
    selected: ""
  },
  {
    num: 53,
    question_en: "If 5x = 20, what is the value of x?",
    question_hi: "यदि 5x = 20, तो x का मान क्या है?",
    options_en: ["2", "3", "4", "5"],
    options_hi: ["2", "3", "4", "5"],
    answer_en: "4",
    answer_hi: "4",
    attempted: false,
    selected: ""
  },
  {
    num: 54,
    question_en: "If the radius of a circle is 7 cm, what is its area? (π = 22/7)",
    question_hi: "यदि एक वृत्त की त्रिज्या 7 सेमी है, तो उसका क्षेत्रफल क्या होगा? (π = 22/7)",
    options_en: ["154 cm²", "144 cm²", "164 cm²", "134 cm²"],
    options_hi: ["154 सेमी²", "144 सेमी²", "164 सेमी²", "134 सेमी²"],
    answer_en: "154 cm²",
    answer_hi: "154 सेमी²",
    attempted: false,
    selected: ""
  },
  {
    num: 55,
    question_en: "Which of the following is not a prime number?",
    question_hi: "निम्न में से कौन सी संख्या अभाज्य नहीं है?",
    options_en: ["11", "13", "15", "17"],
    options_hi: ["11", "13", "15", "17"],
    answer_en: "15",
    answer_hi: "15",
    attempted: false,
    selected: ""
  },
  {
    num: 56,
    question_en: "What is the least common multiple (LCM) of 4 and 6?",
    question_hi: "4 और 6 का लघुत्तम समापवर्त्य (LCM) क्या है?",
    options_en: ["12", "8", "6", "24"],
    options_hi: ["12", "8", "6", "24"],
    answer_en: "12",
    answer_hi: "12",
    attempted: false,
    selected: ""
  },
  {
    num: 57,
    question_en: "A shopkeeper sells an item for ₹960 with a loss of 4%. What was the cost price?",
    question_hi: "एक दुकानदार ₹960 में एक वस्तु 4% की हानि पर बेचता है। क्रय मूल्य क्या था?",
    options_en: ["₹950", "₹980", "₹1000", "₹960"],
    options_hi: ["₹950", "₹980", "₹1000", "₹960"],
    answer_en: "₹1000",
    answer_hi: "₹1000",
    attempted: false,
    selected: ""
  },
  {
    num: 58,
    question_en: "Find the next number: 121, 144, 169, ___?",
    question_hi: "अगली संख्या ज्ञात कीजिए: 121, 144, 169, ___?",
    options_en: ["196", "225", "256", "289"],
    options_hi: ["196", "225", "256", "289"],
    answer_en: "196",
    answer_hi: "196",
    attempted: false,
    selected: ""
  },
  {
    num: 59,
    question_en: "If 2x + 3 = 11, what is x?",
    question_hi: "यदि 2x + 3 = 11, तो x का मान क्या है?",
    options_en: ["3", "4", "5", "6"],
    options_hi: ["3", "4", "5", "6"],
    answer_en: "4",
    answer_hi: "4",
    attempted: false,
    selected: ""
  },
  {
    num: 60,
    question_en: "What is the simple interest on ₹1000 at 5% per annum for 2 years?",
    question_hi: "₹1000 पर 5% वार्षिक ब्याज दर से 2 वर्षों के लिए साधारण ब्याज कितना होगा?",
    options_en: ["₹100", "₹110", "₹90", "₹120"],
    options_hi: ["₹100", "₹110", "₹90", "₹120"],
    answer_en: "₹100",
    answer_hi: "₹100",
    attempted: false,
    selected: ""
  },
          {
            num: 61,
            question_en: "What does CPU stand for?",
            question_hi: "CPU का पूरा नाम क्या है?",
            options_en: ["Central Processing Unit", "Central Power Unit", "Control Processing Unit", "Computer Program Unit"],
            options_hi: ["सेंट्रल प्रोसेसिंग यूनिट", "सेंट्रल पावर यूनिट", "कंट्रोल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
            answer_en: "Central Processing Unit",
            answer_hi:"सेंट्रल प्रोसेसिंग यूनिट",
            attempted: false,
            selected: ""
          },
          {
  num: 62,
  question_en: "Which of the following is not an input device?",
  question_hi: "निम्नलिखित में से कौन इनपुट डिवाइस नहीं है?",
  options_en: ["Keyboard", "Mouse", "Monitor", "Scanner"],
  options_hi: ["कीबोर्ड", "माउस", "मॉनिटर", "स्कैनर"],
  answer_en: "Monitor",
  answer_hi: "मॉनिटर",
  attempted: false,
  selected: ""
},
{
  num: 63,
  question_en: "Which part of the computer is considered the brain?",
  question_hi: "कंप्यूटर का कौन सा भाग मस्तिष्क माना जाता है?",
  options_en: ["Monitor", "CPU", "RAM", "Hard Drive"],
  options_hi: ["मॉनिटर", "सीपीयू", "रैम", "हार्ड ड्राइव"],
  answer_en: "CPU",
  answer_hi: "सीपीयू",
  attempted: false,
  selected: ""
},
{
  num: 64,
  question_en: "Which of these is an example of software?",
  question_hi: "इनमें से कौन एक सॉफ्टवेयर का उदाहरण है?",
  options_en: ["MS Word", "Keyboard", "Mouse", "Monitor"],
  options_hi: ["एमएस वर्ड", "कीबोर्ड", "माउस", "मॉनिटर"],
  answer_en: "MS Word",
  answer_hi: "एमएस वर्ड",
  attempted: false,
  selected: ""
},
{
  num: 65,
  question_en: "What does RAM stand for?",
  question_hi: "RAM का पूरा नाम क्या है?",
  options_en: ["Random Access Memory", "Read Access Memory", "Rapid Action Machine", "Random Addition Memory"],
  options_hi: ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैपिड एक्शन मशीन", "रैंडम एडिशन मेमोरी"],
  answer_en: "Random Access Memory",
  answer_hi: "रैंडम एक्सेस मेमोरी",
  attempted: false,
  selected: ""
},
{
  num: 66,
  question_en: "Which one of these is a storage device?",
  question_hi: "इनमें से कौन एक संग्रहण उपकरण है?",
  options_en: ["Printer", "Mouse", "Hard Disk", "Keyboard"],
  options_hi: ["प्रिंटर", "माउस", "हार्ड डिस्क", "कीबोर्ड"],
  answer_en: "Hard Disk",
  answer_hi: "हार्ड डिस्क",
  attempted: false,
  selected: ""
},
{
  num: 67,
  question_en: "What is the full form of USB?",
  question_hi: "USB का पूरा नाम क्या है?",
  options_en: ["Universal Serial Bus", "Uniform Service Bus", "Universal System Board", "United Serial Bus"],
  options_hi: ["यूनिवर्सल सीरियल बस", "यूनिफॉर्म सर्विस बस", "यूनिवर्सल सिस्टम बोर्ड", "यूनाइटेड सीरियल बस"],
  answer_en: "Universal Serial Bus",
  answer_hi: "यूनिवर्सल सीरियल बस",
  attempted: false,
  selected: ""
},
{
  num: 68,
  question_en: "What kind of device is a printer?",
  question_hi: "प्रिंटर किस प्रकार का डिवाइस है?",
  options_en: ["Input", "Output", "Storage", "Processing"],
  options_hi: ["इनपुट", "आउटपुट", "संग्रहण", "प्रोसेसिंग"],
  answer_en: "Output",
  answer_hi: "आउटपुट",
  attempted: false,
  selected: ""
},
{
  num: 69,
  question_en: "Which device is used to enter data into a computer?",
  question_hi: "कंप्यूटर में डेटा दर्ज करने के लिए कौन सा उपकरण उपयोग किया जाता है?",
  options_en: ["Monitor", "Keyboard", "Speaker", "Projector"],
  options_hi: ["मॉनिटर", "कीबोर्ड", "स्पीकर", "प्रोजेक्टर"],
  answer_en: "Keyboard",
  answer_hi: "कीबोर्ड",
  attempted: false,
  selected: ""
},
{
  num: 70,
  question_en: "What is the permanent memory of a computer called?",
  question_hi: "कंप्यूटर की स्थायी मेमोरी को क्या कहा जाता है?",
  options_en: ["RAM", "ROM", "Cache", "Hard Disk"],
  options_hi: ["रैम", "रोम", "कैश", "हार्ड डिस्क"],
  answer_en: "ROM",
  answer_hi: "रोम",
  attempted: false,
  selected: ""
},
{
  num: 71,
  question_en: "Which key is used to refresh a webpage?",
  question_hi: "वेबपेज को रीफ्रेश करने के लिए कौन सी कुंजी उपयोग की जाती है?",
  options_en: ["F5", "F2", "F1", "F12"],
  options_hi: ["F5", "F2", "F1", "F12"],
  answer_en: "F5",
  answer_hi: "F5",
  attempted: false,
  selected: ""
},
{
  num: 72,
  question_en: "What is the shortcut key to copy selected text?",
  question_hi: "चयनित पाठ को कॉपी करने की शॉर्टकट कुंजी क्या है?",
  options_en: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
  options_hi: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
  answer_en: "Ctrl + C",
  answer_hi: "Ctrl + C",
  attempted: false,
  selected: ""
},
{
  num: 73,
  question_en: "Which application is used for creating spreadsheets?",
  question_hi: "स्प्रेडशीट बनाने के लिए किस एप्लिकेशन का उपयोग किया जाता है?",
  options_en: ["MS Word", "MS Excel", "MS PowerPoint", "MS Access"],
  options_hi: ["एमएस वर्ड", "एमएस एक्सेल", "एमएस पावरपॉइंट", "एमएस एक्सेस"],
  answer_en: "MS Excel",
  answer_hi: "एमएस एक्सेल",
  attempted: false,
  selected: ""
},
{
  num: 74,
  question_en: "Which one is a web browser?",
  question_hi: "इनमें से कौन एक वेब ब्राउज़र है?",
  options_en: ["Google Chrome", "MS Excel", "Windows", "Linux"],
  options_hi: ["गूगल क्रोम", "एमएस एक्सेल", "विंडोज़", "लिनक्स"],
  answer_en: "Google Chrome",
  answer_hi: "गूगल क्रोम",
  attempted: false,
  selected: ""
},
{
  num: 75,
  question_en: "Which protocol is used to transfer files over the Internet?",
  question_hi: "इंटरनेट पर फाइल ट्रांसफर करने के लिए कौन सा प्रोटोकॉल उपयोग किया जाता है?",
  options_en: ["FTP", "HTTP", "IP", "TCP"],
  options_hi: ["एफटीपी", "एचटीटीपी", "आईपी", "टीसीपी"],
  answer_en: "FTP",
  answer_hi: "एफटीपी",
  attempted: false,
  selected: ""
},
{
  num: 76,
  question_en: "Which device is used to connect a computer to the internet?",
  question_hi: "कंप्यूटर को इंटरनेट से जोड़ने के लिए किस डिवाइस का उपयोग किया जाता है?",
  options_en: ["Scanner", "Printer", "Modem", "Plotter"],
  options_hi: ["स्कैनर", "प्रिंटर", "मोडेम", "प्लॉटर"],
  answer_en: "Modem",
  answer_hi: "मोडेम",
  attempted: false,
  selected: ""
},
{
  num: 77,
  question_en: "What is phishing?",
  question_hi: "फिशिंग क्या है?",
  options_en: ["Data entry", "Hacking attempt", "Email scam to steal data", "File download"],
  options_hi: ["डेटा एंट्री", "हैकिंग प्रयास", "डेटा चुराने के लिए ईमेल घोटाला", "फाइल डाउनलोड"],
  answer_en: "Email scam to steal data",
  answer_hi: "डेटा चुराने के लिए ईमेल घोटाला",
  attempted: false,
  selected: ""
},
{
  num: 78,
  question_en: "Which of the following is an operating system?",
  question_hi: "निम्नलिखित में से कौन एक ऑपरेटिंग सिस्टम है?",
  options_en: ["Windows", "Google", "Chrome", "Intel"],
  options_hi: ["विंडोज़", "गूगल", "क्रोम", "इंटेल"],
  answer_en: "Windows",
  answer_hi: "विंडोज़",
  attempted: false,
  selected: ""
},
{
  num: 79,
  question_en: "Which command is used to save a file in most programs?",
  question_hi: "अधिकांश प्रोग्राम में फाइल को सेव करने के लिए किस कमांड का उपयोग होता है?",
  options_en: ["Ctrl + S", "Ctrl + P", "Ctrl + X", "Ctrl + A"],
  options_hi: ["Ctrl + S", "Ctrl + P", "Ctrl + X", "Ctrl + A"],
  answer_en: "Ctrl + S",
  answer_hi: "Ctrl + S",
  attempted: false,
  selected: ""
},
{
  num: 80,
  question_en: "Which company developed the Windows operating system?",
  question_hi: "विंडोज ऑपरेटिंग सिस्टम किस कंपनी ने विकसित किया था?",
  options_en: ["Apple", "IBM", "Microsoft", "Intel"],
  options_hi: ["एप्पल", "आईबीएम", "माइक्रोसॉफ्ट", "इंटेल"],
  answer_en: "Microsoft",
  answer_hi: "माइक्रोसॉफ्ट",
  attempted: false,
  selected: ""
},
          {
            num: 81,
            question_en: "Which number should come next in the series: 2, 4, 8, 16, ?",
            question_hi: "श्रृंखला में अगली संख्या क्या होगी: 2, 4, 8, 16, ?",
            options_en: ["18", "24", "32", "20"],
            options_hi: ["18", "24", "32", "20"],
            answer_en: "32",
            answer_hi: "32",
            attempted: false,
            selected: ""
          },
          {
            num: 82,
            question_en: "If A = 1, B = 2, ..., Z = 26, what is the value of 'CAT'?",
            question_hi: "यदि A = 1, B = 2, ..., Z = 26 हो, तो 'CAT' का मान क्या होगा?",
            options_en: ["24", "27", "48", "41"],
            options_hi: ["24", "27", "48", "41"],
            answer_en: "48",
            answer_hi: "48",
            attempted: false,
            selected: ""
          },
          {
            num: 83,
            question_en: "Find the odd one out: Apple, Banana, Carrot, Mango",
            question_hi: "असंगत शब्द चुनें: Apple, Banana, Carrot, Mango",
            options_en: ["Apple", "Banana", "Carrot", "Mango"],
            options_hi: ["सेब", "केला", "गाजर", "आम"],
            answer_en: "Carrot",
            answer_hi:"गाजर",
            attempted: false,
            selected: ""
          },
          {
            num: 84,
            question_en: "Which is the missing number? 3, 6, 11, 18, ?",
            question_hi: "अनुपस्थित संख्या ज्ञात करें: 3, 6, 11, 18, ?",
            options_en: ["25", "26", "27", "28"],
            options_hi: ["25", "26", "27", "28"],
            answer_en: "27",
            answer_hi: "27",
            attempted: false,
            selected: ""
          },
          {
            num: 85,
            question_en: "Which word does not belong to the group: Rose, Lily, Lotus, Apple?",
            question_hi: "कौन-सा शब्द समूह से संबंधित नहीं है: गुलाब, कुमुदिनी, कमल, सेब?",
            options_en: ["Rose", "Lily", "Lotus", "Apple"],
            options_hi: ["गुलाब", "कुमुदिनी", "कमल", "सेब"],
            answer_en: "Apple",
            answer_hi: "सेब",
            attempted: false,
            selected: ""
          },
          {
    num: 86,
    question_en: "What comes next in the series: 2, 4, 8, 16, ?",
    question_hi: "शृंखला में अगला क्या आएगा: 2, 4, 8, 16, ?",
    options_en: ["20", "24", "32", "30"],
    options_hi: ["20", "24", "32", "30"],
    answer_en: "32",
    answer_hi: "32",
    attempted: false,
    selected: ""
  },
  {
    num: 87,
    question_en: "Which number is a prime number?",
    question_hi: "इनमें से कौन सी संख्या अभाज्य संख्या है?",
    options_en: ["4", "9", "13", "15"],
    options_hi: ["4", "9", "13", "15"],
    answer_en: "13",
    answer_hi: "13",
    attempted: false,
    selected: ""
  },
  {
    num: 88,
    question_en: "Which is the national aquatic animal of India?",
    question_hi: "भारत का राष्ट्रीय जलीय प्राणी कौन सा है?",
    options_en: ["Dolphin", "Shark", "Whale", "Crocodile"],
    options_hi: ["डॉल्फिन", "शार्क", "व्हेल", "मगरमच्छ"],
    answer_en: "Dolphin",
    answer_hi: "डॉल्फिन",
    attempted: false,
    selected: ""
  },
  {
    num: 89,
    question_en: "Which planet is known as the Red Planet?",
    question_hi: "किस ग्रह को लाल ग्रह कहा जाता है?",
    options_en: ["Earth", "Mars", "Venus", "Jupiter"],
    options_hi: ["पृथ्वी", "मंगल", "शुक्र", "बृहस्पति"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
  },
  {
    num: 90,
    question_en: "Which gas is most abundant in Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस होती है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },
  {
    num: 91,
    question_en: "Which Mughal emperor built the Taj Mahal?",
    question_hi: "ताज महल किस मुगल सम्राट ने बनवाया था?",
    options_en: ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
    options_hi: ["बाबर", "अकबर", "शाहजहाँ", "औरंगज़ेब"],
    answer_en: "Shah Jahan",
    answer_hi: "शाहजहाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 92,
    question_en: "Which day is celebrated as World Environment Day?",
    question_hi: "विश्व पर्यावरण दिवस किस दिन मनाया जाता है?",
    options_en: ["5 June", "22 April", "10 May", "15 August"],
    options_hi: ["5 जून", "22 अप्रैल", "10 मई", "15 अगस्त"],
    answer_en: "5 June",
    answer_hi: "5 जून",
    attempted: false,
    selected: ""
  },
  {
    num: 93,
    question_en: "Which instrument is used to measure temperature?",
    question_hi: "तापमान मापने के लिए कौन सा यंत्र प्रयोग किया जाता है?",
    options_en: ["Barometer", "Thermometer", "Hygrometer", "Altimeter"],
    options_hi: ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एल्टीमीटर"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 94,
    question_en: "Who wrote the Indian National Anthem?",
    question_hi: "भारतीय राष्ट्रगान किसने लिखा था?",
    options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhash Chandra Bose"],
    options_hi: ["बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ टैगोर", "सरोजिनी नायडू", "सुभाष चंद्र बोस"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
  },
  {
    num: 95,
    question_en: "Which is the smallest continent?",
    question_hi: "सबसे छोटा महाद्वीप कौन सा है?",
    options_en: ["Asia", "Europe", "Australia", "Antarctica"],
    options_hi: ["एशिया", "यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका"],
    answer_en: "Australia",
    answer_hi: "ऑस्ट्रेलिया",
    attempted: false,
    selected: ""
  },
  {
    num: 96,
    question_en: "Who invented the light bulb?",
    question_hi: "बल्ब का आविष्कार किसने किया?",
    options_en: ["Thomas Edison", "Albert Einstein", "Isaac Newton", "Nikola Tesla"],
    options_hi: ["थॉमस एडिसन", "आल्बर्ट आइंस्टीन", "आइज़ैक न्यूटन", "निकोला टेस्ला"],
    answer_en: "Thomas Edison",
    answer_hi: "थॉमस एडिसन",
    attempted: false,
    selected: ""
  },
  {
    num: 97,
    question_en: "Which is the longest river in the world?",
    question_hi: "विश्व की सबसे लंबी नदी कौन सी है?",
    options_en: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    options_hi: ["नील", "अमेज़न", "यांग्त्ज़े", "मिसिसिपी"],
    answer_en: "Nile",
    answer_hi: "नील",
    attempted: false,
    selected: ""
  },
  {
    num: 98,
    question_en: "Which country is known as the Land of Rising Sun?",
    question_hi: "किस देश को उगते सूरज की भूमि कहा जाता है?",
    options_en: ["China", "South Korea", "Japan", "Thailand"],
    options_hi: ["चीन", "दक्षिण कोरिया", "जापान", "थाईलैंड"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 99,
    question_en: "What is the capital of Madhya Pradesh?",
    question_hi: "मध्य प्रदेश की राजधानी क्या है?",
    options_en: ["Indore", "Gwalior", "Jabalpur", "Bhopal"],
    options_hi: ["इंदौर", "ग्वालियर", "जबलपुर", "भोपाल"],
    answer_en: "Bhopal",
    answer_hi: "भोपाल",
    attempted: false,
    selected: ""
  },
     {
    num: 100,
    question_en: "Which gas is most abundant in Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस होती है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  }
    // Continue adding more questions up to 30
];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
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

  updateCircles();
}

function markAttempted(index, selectedAnswer) {
  questions[index].attempted = true;
  questions[index].selected = selectedAnswer;
  updateCircles();
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

function updateCircles() {
  const circleContainer = document.getElementById("circleContainer");
  circleContainer.innerHTML = "";
  const start = currentCirclePage * circlesPerPage;
  const end = Math.min(start + circlesPerPage, questions.length);

  for (let i = start; i < end; i++) {
    const q = questions[i];
    let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
    circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
  }
}

function jumpToQuestion(index) {
  currentQuestion = index;
  loadQuestion(index);
}

function prevCirclePage() {
  if (currentCirclePage > 0) {
    currentCirclePage--;
    updateCircles();
  }
}

function nextCirclePage() {
  if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
    currentCirclePage++;
    updateCircles();
  }
}

function changeLanguage() {
  language = document.getElementById("languageSelect").value;
  loadQuestion(currentQuestion);
}

function submitQuiz() {
  let confirmation = confirm("Are you sure you want to submit the test?");
  if (!confirmation) return;

  let attempted = 0, notAttempted = 0, score = 0;
  const results = [];

  questions.forEach(q => {
      const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
      if (q.attempted) {
          attempted++;
          if (q.selected === correctAnswer) score++;
      } else {
          notAttempted++;
      }
      results.push({ 
          question: language === "en" ? q.question_en : q.question_hi,
          selected: q.selected || "Not Answered", 
          correct: correctAnswer 
      });
  });

  localStorage.setItem("attempted", attempted);
  localStorage.setItem("notAttempted", notAttempted);
  localStorage.setItem("score", score);
  localStorage.setItem("results", JSON.stringify(results));

  let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
  if (viewResult) {
      window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
  }
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! Submitting the quiz automatically.");
      submitQuiz();
    } else {
      timerElement.textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

window.onload = function () {
  startTimer();
  loadQuestion(currentQuestion);
};