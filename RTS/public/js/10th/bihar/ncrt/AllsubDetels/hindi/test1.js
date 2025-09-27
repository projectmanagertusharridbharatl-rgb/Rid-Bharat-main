
const questions = [
    
        {
          "num": 1,
          "question_en": "Who is the author of 'Mata Ka Aanchal'?",
          "question_hi": "'माता का आँचल' के लेखक कौन हैं?",
          "options_en": ["Premchand", "Shivpujan Sahay", "Phanishwar Nath Renu", "Ramdhari Singh Dinkar"],
          "options_hi": ["प्रेमचंद", "शिवपूजन सहाय", "फणीश्वर नाथ रेणु", "रामधारी सिंह दिनकर"],
          "answer_en": "Shivpujan Sahay",
          "answer_hi": "शिवपूजन सहाय",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What is satirized in 'George Pancham Ki Naak'?",
          "question_hi": "'जॉर्ज पंचम की नाक' में किस पर व्यंग्य किया गया है?",
          "options_en": ["British rule", "Indian bureaucracy", "Blind western imitation", "Religious rituals"],
          "options_hi": ["अंग्रेजी शासन", "भारतीय नौकरशाही", "अंधा पश्चिमी अनुकरण", "धार्मिक रीति-रिवाज"],
          "answer_en": "Blind western imitation",
          "answer_hi": "अंधा पश्चिमी अनुकरण",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Who wrote 'Utsah' poem?",
          "question_hi": "'उत्साह' कविता के रचयिता कौन हैं?",
          "options_en": ["Nirala", "Mahadevi Verma", "Sumitranandan Pant", "Maithili Sharan Gupt"],
          "options_hi": ["निराला", "महादेवी वर्मा", "सुमित्रानंदन पंत", "मैथिलीशरण गुप्त"],
          "answer_en": "Nirala",
          "answer_hi": "निराला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which season is described in 'At Nahi Rahi Hai'?",
          "question_hi": "'अट नहीं रही है' में किस ऋतु का वर्णन है?",
          "options_en": ["Spring", "Summer", "Monsoon", "Winter"],
          "options_hi": ["वसंत", "ग्रीष्म", "वर्षा", "शीत"],
          "answer_en": "Spring",
          "answer_hi": "वसंत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What is the sandhi-vicched of 'Vidhyarthi'?",
          "question_hi": "'विद्यार्थी' का संधि विच्छेद क्या है?",
          "options_en": ["Vidya + Arthi", "Vid + Yarthi", "Vidya + Rthi", "Vid + Arthi"],
          "options_hi": ["विद्या + अर्थी", "विद् + यर्थी", "विद्या + ऋथी", "विद् + अर्थी"],
          "answer_en": "Vidya + Arthi",
          "answer_hi": "विद्या + अर्थी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which Alankar is in 'Kamal Kamal Kamal'?",
          "question_hi": "'कमल कमल कमल' में कौन-सा अलंकार है?",
          "options_en": ["Anupras", "Yamak", "Upma", "Rupak"],
          "options_hi": ["अनुप्रास", "यमक", "उपमा", "रूपक"],
          "answer_en": "Anupras",
          "answer_hi": "अनुप्रास",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Who is the author of 'Sana Sana Hath Jodi'?",
          "question_hi": "'साना-साना हाथ जोड़ि' के लेखक कौन हैं?",
          "options_en": ["Madhu Kankaria", "Mahadevi Verma", "Shivani", "Mannu Bhandari"],
          "options_hi": ["मधु कांकरिया", "महादेवी वर्मा", "शिवानी", "मन्नू भंडारी"],
          "answer_en": "Madhu Kankaria",
          "answer_hi": "मधु कांकरिया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What is the central theme of 'Manushyata'?",
          "question_hi": "'मनुष्यता' का केंद्रीय विषय क्या है?",
          "options_en": ["Patriotism", "Humanity", "Nature", "Devotion"],
          "options_hi": ["देशभक्ति", "मानवता", "प्रकृति", "भक्ति"],
          "answer_en": "Humanity",
          "answer_hi": "मानवता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which is the Tatsam form of 'Nadi'?",
          "question_hi": "'नदी' का तत्सम रूप क्या है?",
          "options_en": ["Nandini", "Nadi", "Nadika", "Nad"],
          "options_hi": ["नंदिनी", "नाडी", "नदिका", "नाद"],
          "answer_en": "Nadi",
          "answer_hi": "नदी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the Kriya in 'Ram khata hai'?",
          "question_hi": "'राम खाता है' में क्रिया क्या है?",
          "options_en": ["Ram", "Khata", "Hai", "Khata hai"],
          "options_hi": ["राम", "खाता", "है", "खाता है"],
          "answer_en": "Khata hai",
          "answer_hi": "खाता है",
          "attempted": false,
          "selected": ""
        },
        // Continuing up to 100 questions...
        {
          "num": 100,
          "question_en": "Which Rasa is predominant in 'Yeh Danturit Muskan'?",
          "question_hi": "'यह दंतुरित मुस्कान' में प्रधान रस कौन-सा है?",
          "options_en": ["Shringar", "Hasya", "Vatsalya", "Karuna"],
          "options_hi": ["शृंगार", "हास्य", "वात्सल्य", "करुण"],
          "answer_en": "Vatsalya",
          "answer_hi": "वात्सल्य",
          "attempted": false,
          "selected": ""
        }
      ,
    
  {
    "num": 11,
    "question_en": "Who wrote 'Ram Lakshman Parshuram Samvad'?",
    "question_hi": "'राम-लक्ष्मण-परशुराम संवाद' किसने लिखा?",
    "options_en": ["Tulsidas", "Surdas", "Rahim", "Kabir"],
    "options_hi": ["तुलसीदास", "सूरदास", "रहीम", "कबीर"],
    "answer_en": "Tulsidas",
    "answer_hi": "तुलसीदास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the main theme of 'Kartoos' story?",
    "question_hi": "'कर्तूस' कहानी का मुख्य विषय क्या है?",
    "options_en": ["Freedom struggle", "Love story", "Social reform", "Comedy"],
    "options_hi": ["स्वतंत्रता संग्राम", "प्रेम कहानी", "सामाजिक सुधार", "हास्य"],
    "answer_en": "Freedom struggle",
    "answer_hi": "स्वतंत्रता संग्राम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which chapter describes the life of a soldier?",
    "question_hi": "कौन-सा पाठ एक सैनिक के जीवन का वर्णन करता है?",
    "options_en": ["Harihar Kaka", "Kartoos", "Sana Sana Hath Jodi", "Teesri Kasam"],
    "options_hi": ["हरिहर काका", "कर्तूस", "साना-साना हाथ जोड़ि", "तीसरी कसम"],
    "answer_en": "Kartoos",
    "answer_hi": "कर्तूस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the correct Samas for 'राजपुत्र'?",
    "question_hi": "'राजपुत्र' का सही समास विग्रह क्या है?",
    "options_en": ["राजा का पुत्र", "राज और पुत्र", "राज के लिए पुत्र", "राज से पुत्र"],
    "options_hi": ["राजा का पुत्र", "राज और पुत्र", "राज के लिए पुत्र", "राज से पुत्र"],
    "answer_en": "राजा का पुत्र",
    "answer_hi": "राजा का पुत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which poet is known as 'Rashtrakavi'?",
    "question_hi": "किस कवि को 'राष्ट्रकवि' कहा जाता है?",
    "options_en": ["Maithili Sharan Gupt", "Ramdhari Singh Dinkar", "Suryakant Tripathi Nirala", "Mahadevi Verma"],
    "options_hi": ["मैथिलीशरण गुप्त", "रामधारी सिंह दिनकर", "सूर्यकांत त्रिपाठी निराला", "महादेवी वर्मा"],
    "answer_en": "Ramdhari Singh Dinkar",
    "answer_hi": "रामधारी सिंह दिनकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the meaning of 'अभिनव'?",
    "question_hi": "'अभिनव' का अर्थ क्या है?",
    "options_en": ["Old", "New", "Ancient", "Modern"],
    "options_hi": ["पुराना", "नया", "प्राचीन", "आधुनिक"],
    "answer_en": "New",
    "answer_hi": "नया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which chapter discusses rural life?",
    "question_hi": "कौन-सा पाठ ग्रामीण जीवन पर चर्चा करता है?",
    "options_en": ["Harihar Kaka", "George Pancham Ki Naak", "Sana Sana Hath Jodi", "Mata Ka Aanchal"],
    "options_hi": ["हरिहर काका", "जॉर्ज पंचम की नाक", "साना-साना हाथ जोड़ि", "माता का आँचल"],
    "answer_en": "Harihar Kaka",
    "answer_hi": "हरिहर काका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the correct Muhavara for 'to be very happy'?",
    "question_hi": "'बहुत खुश होना' के लिए सही मुहावरा क्या है?",
    "options_en": ["आसमान से बातें करना", "फूला न समाना", "सिर पर चढ़ना", "पर लगना"],
    "options_hi": ["आसमान से बातें करना", "फूला न समाना", "सिर पर चढ़ना", "पर लगना"],
    "answer_en": "फूला न समाना",
    "answer_hi": "फूला न समाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which chapter is based on a folk story?",
    "question_hi": "कौन-सा पाठ एक लोक कथा पर आधारित है?",
    "options_en": ["Teesri Kasam", "Netaji Ka Chashma", "Bade Bhai Sahab", "Kartoos"],
    "options_hi": ["तीसरी कसम", "नेताजी का चश्मा", "बड़े भाई साहब", "कर्तूस"],
    "answer_en": "Teesri Kasam",
    "answer_hi": "तीसरी कसम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the correct Vilom Shabd for 'आदर'?",
    "question_hi": "'आदर' का सही विलोम शब्द क्या है?",
    "options_en": ["सम्मान", "अपमान", "प्रेम", "घृणा"],
    "options_hi": ["सम्मान", "अपमान", "प्रेम", "घृणा"],
    "answer_en": "अपमान",
    "answer_hi": "अपमान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which poet wrote 'Madhur Madhur Mere Deepak Jal'?",
    "question_hi": "'मधुर-मधुर मेरे दीपक जल' कविता किसने लिखी?",
    "options_en": ["Mahadevi Verma", "Subhadra Kumari Chauhan", "Sumitranandan Pant", "Suryakant Tripathi Nirala"],
    "options_hi": ["महादेवी वर्मा", "सुभद्रा कुमारी चौहान", "सुमित्रानंदन पंत", "सूर्यकांत त्रिपाठी निराला"],
    "answer_en": "Mahadevi Verma",
    "answer_hi": "महादेवी वर्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the correct Samas for 'चौराहा'?",
    "question_hi": "'चौराहा' का सही समास विग्रह क्या है?",
    "options_en": ["चार राहों का समूह", "चार और राह", "चार राहें", "चार से राह"],
    "options_hi": ["चार राहों का समूह", "चार और राह", "चार राहें", "चार से राह"],
    "answer_en": "चार राहों का समूह",
    "answer_hi": "चार राहों का समूह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which chapter discusses the importance of education?",
    "question_hi": "कौन-सा पाठ शिक्षा के महत्व पर चर्चा करता है?",
    "options_en": ["Bade Bhai Sahab", "Harihar Kaka", "Kartoos", "Teesri Kasam"],
    "options_hi": ["बड़े भाई साहब", "हरिहर काका", "कर्तूस", "तीसरी कसम"],
    "answer_en": "Bade Bhai Sahab",
    "answer_hi": "बड़े भाई साहब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the correct Paryayvachi for 'अग्नि'?",
    "question_hi": "'अग्नि' का सही पर्यायवाची क्या है?",
    "options_en": ["पवन", "जल", "पृथ्वी", "वह्नि"],
    "options_hi": ["पवन", "जल", "पृथ्वी", "वह्नि"],
    "answer_en": "वह्नि",
    "answer_hi": "वह्नि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which chapter is written by Harishankar Parsai?",
    "question_hi": "कौन-सा पाठ हरिशंकर परसाई द्वारा लिखा गया है?",
    "options_en": ["Bade Bhai Sahab", "George Pancham Ki Naak", "Netaji Ka Chashma", "Teesri Kasam"],
    "options_hi": ["बड़े भाई साहब", "जॉर्ज पंचम की नाक", "नेताजी का चश्मा", "तीसरी कसम"],
    "answer_en": "George Pancham Ki Naak",
    "answer_hi": "जॉर्ज पंचम की नाक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the correct sandhi for 'सदा + एव'?",
    "question_hi": "'सदा + एव' की सही संधि क्या है?",
    "options_en": ["सदैव", "सदाएव", "सदा एव", "सदायेव"],
    "options_hi": ["सदैव", "सदाएव", "सदा एव", "सदायेव"],
    "answer_en": "सदैव",
    "answer_hi": "सदैव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which chapter discusses the relationship between two brothers?",
    "question_hi": "कौन-सा पाठ दो भाइयों के संबंध पर चर्चा करता है?",
    "options_en": ["Bade Bhai Sahab", "Harihar Kaka", "Kartoos", "Mata Ka Aanchal"],
    "options_hi": ["बड़े भाई साहब", "हरिहर काका", "कर्तूस", "माता का आँचल"],
    "answer_en": "Bade Bhai Sahab",
    "answer_hi": "बड़े भाई साहब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the correct Ras in 'Karun Ras'?",
    "question_hi": "'करुण रस' में सही स्थायी भाव क्या है?",
    "options_en": ["रति", "शोक", "उत्साह", "क्रोध"],
    "options_hi": ["रति", "शोक", "उत्साह", "क्रोध"],
    "answer_en": "शोक",
    "answer_hi": "शोक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which chapter is about a pair of oxen?",
    "question_hi": "कौन-सा पाठ दो बैलों के बारे में है?",
    "options_en": ["Do Bailon Ki Katha", "Harihar Kaka", "Teesri Kasam", "Mata Ka Aanchal"],
    "options_hi": ["दो बैलों की कथा", "हरिहर काका", "तीसरी कसम", "माता का आँचल"],
    "answer_en": "Do Bailon Ki Katha",
    "answer_hi": "दो बैलों की कथा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the correct Samas for 'गंगाजल'?",
    "question_hi": "'गंगाजल' का सही समास विग्रह क्या है?",
    "options_en": ["गंगा का जल", "गंगा और जल", "गंगा से जल", "गंगा के लिए जल"],
    "options_hi": ["गंगा का जल", "गंगा और जल", "गंगा से जल", "गंगा के लिए जल"],
    "answer_en": "गंगा का जल",
    "answer_hi": "गंगा का जल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which chapter discusses the importance of culture?",
    "question_hi": "कौन-सा पाठ संस्कृति के महत्व पर चर्चा करता है?",
    "options_en": ["Sanskriti", "Manushyata", "Utsah", "At Nahi Rahi Hai"],
    "options_hi": ["संस्कृति", "मनुष्यता", "उत्साह", "अट नहीं रही है"],
    "answer_en": "Sanskriti",
    "answer_hi": "संस्कृति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the correct Muhavara for 'to be very angry'?",
    "question_hi": "'बहुत क्रोधित होना' के लिए सही मुहावरा क्या है?",
    "options_en": ["आग बबूला होना", "पर लगना", "फूला न समाना", "आसमान सिर पर उठाना"],
    "options_hi": ["आग बबूला होना", "पर लगना", "फूला न समाना", "आसमान सिर पर उठाना"],
    "answer_en": "आग बबूला होना",
    "answer_hi": "आग बबूला होना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which chapter is about a village uncle?",
    "question_hi": "कौन-सा पाठ एक गाँव के काका के बारे में है?",
    "options_en": ["Harihar Kaka", "Bade Bhai Sahab", "Teesri Kasam", "Do Bailon Ki Katha"],
    "options_hi": ["हरिहर काका", "बड़े भाई साहब", "तीसरी कसम", "दो बैलों की कथा"],
    "answer_en": "Harihar Kaka",
    "answer_hi": "हरिहर काका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the correct Vilom Shabd for 'सुख'?",
    "question_hi": "'सुख' का सही विलोम शब्द क्या है?",
    "options_en": ["आनंद", "दुख", "हर्ष", "प्रसन्नता"],
    "options_hi": ["आनंद", "दुख", "हर्ष", "प्रसन्नता"],
    "answer_en": "दुख",
    "answer_hi": "दुख",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which chapter discusses the Himalayas?",
    "question_hi": "कौन-सा पाठ हिमालय पर चर्चा करता है?",
    "options_en": ["Sana Sana Hath Jodi", "Mata Ka Aanchal", "George Pancham Ki Naak", "Netaji Ka Chashma"],
    "options_hi": ["साना-साना हाथ जोड़ि", "माता का आँचल", "जॉर्ज पंचम की नाक", "नेताजी का चश्मा"],
    "answer_en": "Sana Sana Hath Jodi",
    "answer_hi": "साना-साना हाथ जोड़ि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the correct Paryayvachi for 'सूर्य'?",
    "question_hi": "'सूर्य' का सही पर्यायवाची क्या है?",
    "options_en": ["चंद्र", "दिवाकर", "तारा", "अग्नि"],
    "options_hi": ["चंद्र", "दिवाकर", "तारा", "अग्नि"],
    "answer_en": "दिवाकर",
    "answer_hi": "दिवाकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which chapter is about spectacles?",
    "question_hi": "कौन-सा पाठ चश्मे के बारे में है?",
    "options_en": ["Netaji Ka Chashma", "Bade Bhai Sahab", "Harihar Kaka", "Do Bailon Ki Katha"],
    "options_hi": ["नेताजी का चश्मा", "बड़े भाई साहब", "हरिहर काका", "दो बैलों की कथा"],
    "answer_en": "Netaji Ka Chashma",
    "answer_hi": "नेताजी का चश्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the correct sandhi for 'महा + ईश'?",
    "question_hi": "'महा + ईश' की सही संधि क्या है?",
    "options_en": ["महेश", "महीश", "महाइश", "महा ईश"],
    "options_hi": ["महेश", "महीश", "महाइश", "महा ईश"],
    "answer_en": "महेश",
    "answer_hi": "महेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which chapter discusses the third vow?",
    "question_hi": "कौन-सा पाठ तीसरी कसम पर चर्चा करता है?",
    "options_en": ["Teesri Kasam", "Do Bailon Ki Katha", "Harihar Kaka", "Bade Bhai Sahab"],
    "options_hi": ["तीसरी कसम", "दो बैलों की कथा", "हरिहर काका", "बड़े भाई साहब"],
    "answer_en": "Teesri Kasam",
    "answer_hi": "तीसरी कसम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the correct Alankar in 'चंद्र चकोर चाह'?",
    "question_hi": "'चंद्र चकोर चाह' में कौन-सा अलंकार है?",
    "options_en": ["Anupras", "Upma", "Yamak", "Rupak"],
    "options_hi": ["अनुप्रास", "उपमा", "यमक", "रूपक"],
    "answer_en": "Anupras",
    "answer_hi": "अनुप्रास",
    "attempted": false,
    "selected": ""
  }
,
    {
        "num": 41,
        "question_en": "Which of the following is a metalloid?",
        "question_hi": "निम्नलिखित में से कौन सा एक उपधातु है?",
        "options_en": ["Sodium", "Silicon", "Chlorine", "Aluminum"],
        "options_hi": ["सोडियम", "सिलिकॉन", "क्लोरीन", "एल्युमिनियम"],
        "answer_en": "Silicon",
        "answer_hi": "सिलिकॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Who is the author of 'Mata Ka Aanchal'?",
        "question_hi": "'माता का आँचल' के लेखक कौन हैं?",
        "options_en": ["Shivpujan Sahay", "Mahadevi Verma", "Premchand", "Harivansh Rai Bachchan"],
        "options_hi": ["शिवपूजन सहाय", "महादेवी वर्मा", "प्रेमचंद", "हरिवंश राय बच्चन"],
        "answer_en": "Shivpujan Sahay",
        "answer_hi": "शिवपूजन सहाय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "What is the main message of 'Manushyata'?",
        "question_hi": "'मनुष्यता' पाठ का मुख्य संदेश क्या है?",
        "options_en": ["Compassion and humanity", "Science and progress", "Religious devotion", "War and peace"],
        "options_hi": ["करुणा और मनुष्यता", "विज्ञान और प्रगति", "धार्मिक भक्ति", "युद्ध और शांति"],
        "answer_en": "Compassion and humanity",
        "answer_hi": "करुणा और मनुष्यता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "What is the correct Muhavara for 'to boast a lot'?",
        "question_hi": "'बहुत शेखी बघारना' के लिए सही मुहावरा क्या है?",
        "options_en": ["नाक में दम करना", "मूँछें ऐंठना", "अंगारे उगलना", "आसमान पर चढ़ना"],
        "options_hi": ["नाक में दम करना", "मूँछें ऐंठना", "अंगारे उगलना", "आसमान पर चढ़ना"],
        "answer_en": "मूँछें ऐंठना",
        "answer_hi": "मूँछें ऐंठना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which poet's writing includes deep emotional expressions?",
        "question_hi": "किस कवि की रचनाओं में गहन भावनात्मक अभिव्यक्ति होती है?",
        "options_en": ["Mahadevi Verma", "Kabir", "Rahim", "Tulsidas"],
        "options_hi": ["महादेवी वर्मा", "कबीर", "रहीम", "तुलसीदास"],
        "answer_en": "Mahadevi Verma",
        "answer_hi": "महादेवी वर्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "What is the correct Vilom Shabd for 'प्रेम'?",
        "question_hi": "'प्रेम' का सही विलोम शब्द क्या है?",
        "options_en": ["घृणा", "स्नेह", "करुणा", "सम्मान"],
        "options_hi": ["घृणा", "स्नेह", "करुणा", "सम्मान"],
        "answer_en": "घृणा",
        "answer_hi": "घृणा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which chapter highlights patriotism?",
        "question_hi": "कौन-सा पाठ देशभक्ति को उजागर करता है?",
        "options_en": ["Kartoos", "Harihar Kaka", "Sanskriti", "Bade Bhai Sahab"],
        "options_hi": ["कर्तूस", "हरिहर काका", "संस्कृति", "बड़े भाई साहब"],
        "answer_en": "Kartoos",
        "answer_hi": "कर्तूस",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which of these is an Upma Alankar?",
        "question_hi": "इनमें से कौन-सा उपमा अलंकार है?",
        "options_en": ["तुला सम तेज", "चंद्र सा मुख", "रवि सम तेज", "कवि कर्ण कंठक"],
        "options_hi": ["तुला सम तेज", "चंद्र सा मुख", "रवि सम तेज", "कवि कर्ण कंठक"],
        "answer_en": "चंद्र सा मुख",
        "answer_hi": "चंद्र सा मुख",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "What is the Paryayvachi of 'नदी'?",
        "question_hi": "'नदी' का पर्यायवाची शब्द क्या है?",
        "options_en": ["सरिता", "वन", "गिरि", "सागर"],
        "options_hi": ["सरिता", "वन", "गिरि", "सागर"],
        "answer_en": "सरिता",
        "answer_hi": "सरिता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Which chapter describes a mother’s love?",
        "question_hi": "कौन-सा पाठ माँ के प्यार को दर्शाता है?",
        "options_en": ["Mata Ka Aanchal", "Harihar Kaka", "Teesri Kasam", "Sanskriti"],
        "options_hi": ["माता का आँचल", "हरिहर काका", "तीसरी कसम", "संस्कृति"],
        "answer_en": "Mata Ka Aanchal",
        "answer_hi": "माता का आँचल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "What is the correct Samas Vigrah for 'रक्तदान'?",
        "question_hi": "'रक्तदान' का सही समास विग्रह क्या है?",
        "options_en": ["रक्त का दान", "दान का रक्त", "रक्त के लिए दान", "रक्त और दान"],
        "options_hi": ["रक्त का दान", "दान का रक्त", "रक्त के लिए दान", "रक्त और दान"],
        "answer_en": "रक्त का दान",
        "answer_hi": "रक्त का दान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "Which lesson is written by Phanishwar Nath Renu?",
        "question_hi": "फणीश्वर नाथ रेणु द्वारा लिखित पाठ कौन-सा है?",
        "options_en": ["Teesri Kasam Ke Shilpkaar", "Harihar Kaka", "Bade Bhai Sahab", "Mata Ka Aanchal"],
        "options_hi": ["तीसरी कसम के शिल्पकार", "हरिहर काका", "बड़े भाई साहब", "माता का आँचल"],
        "answer_en": "Harihar Kaka",
        "answer_hi": "हरिहर काका",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "What does 'Harihar Kaka' mainly protest against?",
        "question_hi": "'हरिहर काका' मुख्य रूप से किसके विरुद्ध विरोध करते हैं?",
        "options_en": ["Religious hypocrisy", "Illiteracy", "Casteism", "Violence"],
        "options_hi": ["धार्मिक पाखंड", "अशिक्षा", "जातिवाद", "हिंसा"],
        "answer_en": "Religious hypocrisy",
        "answer_hi": "धार्मिक पाखंड",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "Choose the correct meaning of 'संवेदनशीलता':",
        "question_hi": "'संवेदनशीलता' का सही अर्थ चुनिए:",
        "options_en": ["Sensitivity", "Cruelty", "Fear", "Excitement"],
        "options_hi": ["संवेदनशीलता", "क्रूरता", "डर", "उत्साह"],
        "answer_en": "Sensitivity",
        "answer_hi": "संवेदनशीलता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "Which one is a Samas word?",
        "question_hi": "इनमें से कौन-सा समास है?",
        "options_en": ["राजमार्ग", "रंग", "पढ़ाई", "सज्जन"],
        "options_hi": ["राजमार्ग", "रंग", "पढ़ाई", "सज्जन"],
        "answer_en": "राजमार्ग",
        "answer_hi": "राजमार्ग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "Who wrote 'Sanskriti ke Char Adhyay'?",
        "question_hi": "'संस्कृति के चार अध्याय' किसने लिखी?",
        "options_en": ["Ramdhari Singh Dinkar", "Premchand", "Bhartendu Harishchandra", "Harivansh Rai Bachchan"],
        "options_hi": ["रामधारी सिंह दिनकर", "प्रेमचंद", "भारतेंदु हरिश्चंद्र", "हरिवंश राय बच्चन"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "Which word is the synonym (Paryayvachi) of 'अग्नि'?",
        "question_hi": "'अग्नि' का पर्यायवाची शब्द क्या है?",
        "options_en": ["पावक", "शीतल", "जल", "नील"],
        "options_hi": ["पावक", "शीतल", "जल", "नील"],
        "answer_en": "पावक",
        "answer_hi": "पावक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "Which of the following is a Nibandh (essay)?",
        "question_hi": "इनमें से कौन-सा निबंध है?",
        "options_en": ["Manushyata", "Mata Ka Aanchal", "Harihar Kaka", "Teesri Kasam Ke Shilpkaar"],
        "options_hi": ["मनुष्यता", "माता का आँचल", "हरिहर काका", "तीसरी कसम के शिल्पकार"],
        "answer_en": "Manushyata",
        "answer_hi": "मनुष्यता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "What does the idiom 'नाक कटना' mean?",
        "question_hi": "'नाक कटना' मुहावरे का क्या अर्थ है?",
        "options_en": ["Loss of respect", "Bleeding nose", "Injury", "Pride"],
        "options_hi": ["अपमान होना", "नाक से खून आना", "चोट लगना", "गर्व होना"],
        "answer_en": "Loss of respect",
        "answer_hi": "अपमान होना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "Who is known as the ‘Rashtrakavi’?",
        "question_hi": "'राष्ट्रीय कवि' किसे कहा जाता है?",
        "options_en": ["Ramdhari Singh Dinkar", "Premchand", "Mahadevi Verma", "Harivansh Rai Bachchan"],
        "options_hi": ["रामधारी सिंह दिनकर", "प्रेमचंद", "महादेवी वर्मा", "हरिवंश राय बच्चन"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "Identify the correct verb form: 'वह स्कूल _____ गया।'",
        "question_hi": "सही क्रिया रूप पहचानिए: 'वह स्कूल _____ गया।'",
        "options_en": ["जाता", "जाते", "गया", "जाती"],
        "options_hi": ["जाता", "जाते", "गया", "जाती"],
        "answer_en": "गया",
        "answer_hi": "गया",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "Which word is a Tadbhav of 'वृक्ष'?",
        "question_hi": "'वृक्ष' का तद्भव शब्द क्या है?",
        "options_en": ["पेड़", "पत्ता", "जंगल", "वन"],
        "options_hi": ["पेड़", "पत्ता", "जंगल", "वन"],
        "answer_en": "पेड़",
        "answer_hi": "पेड़",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "Which chapter deals with India's cultural heritage?",
        "question_hi": "कौन-सा पाठ भारत की सांस्कृतिक विरासत से संबंधित है?",
        "options_en": ["Sanskriti Ke Char Adhyay", "Harihar Kaka", "Bade Bhai Sahab", "Manushyata"],
        "options_hi": ["संस्कृति के चार अध्याय", "हरिहर काका", "बड़े भाई साहब", "मनुष्यता"],
        "answer_en": "Sanskriti Ke Char Adhyay",
        "answer_hi": "संस्कृति के चार अध्याय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "What is the meaning of 'मुँह की खाना' idiom?",
        "question_hi": "'मुँह की खाना' मुहावरे का अर्थ क्या है?",
        "options_en": ["To be insulted", "To eat quickly", "To speak unnecessarily", "To eat with mouth open"],
        "options_hi": ["हार मानना", "जल्दी खाना", "अनावश्यक बोलना", "मुँह खोलकर खाना"],
        "answer_en": "To be insulted",
        "answer_hi": "हार मानना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "Which of the following is a Bhakti era poet?",
        "question_hi": "निम्नलिखित में से कौन-से भक्तिकाल के कवि हैं?",
        "options_en": ["Tulsidas", "Ramdhari Singh Dinkar", "Mahadevi Verma", "Phanishwar Nath Renu"],
        "options_hi": ["तुलसीदास", "रामधारी सिंह दिनकर", "महादेवी वर्मा", "फणीश्वर नाथ रेणु"],
        "answer_en": "Tulsidas",
        "answer_hi": "तुलसीदास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "Choose the correct Sandhi for 'राजपुत्र':",
        "question_hi": "'राजपुत्र' का सही संधि-विच्छेद चुनिए:",
        "options_en": ["राजा + पुत्र", "राज + पुत्र", "राजा + पुत्रा", "रज + पुत्र"],
        "options_hi": ["राजा + पुत्र", "राज + पुत्र", "राजा + पुत्रा", "रज + पुत्र"],
        "answer_en": "राज + पुत्र",
        "answer_hi": "राज + पुत्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "Which lesson is based on social satire?",
        "question_hi": "कौन-सा पाठ सामाजिक व्यंग्य पर आधारित है?",
        "options_en": ["Harihar Kaka", "Mata Ka Aanchal", "Manushyata", "Kartoos"],
        "options_hi": ["हरिहर काका", "माता का आँचल", "मनुष्यता", "कर्तूस"],
        "answer_en": "Harihar Kaka",
        "answer_hi": "हरिहर काका",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "What is the plural of 'कुत्ता'?",
        "question_hi": "'कुत्ता' का बहुवचन क्या है?",
        "options_en": ["कुत्तों", "कुत्ते", "कुत्ता लोग", "कुत्तियाँ"],
        "options_hi": ["कुत्तों", "कुत्ते", "कुत्ता लोग", "कुत्तियाँ"],
        "answer_en": "कुत्ते",
        "answer_hi": "कुत्ते",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "Who is the writer of 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' के लेखक कौन हैं?",
        "options_en": ["Premchand", "Mahadevi Verma", "Shivpujan Sahay", "Dinkar"],
        "options_hi": ["प्रेमचंद", "महादेवी वर्मा", "शिवपूजन सहाय", "दिनकर"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "Which of these is a Riti era poet?",
        "question_hi": "इनमें से कौन रीतिकाल के कवि हैं?",
        "options_en": ["Bihari", "Kabir", "Tulsidas", "Rahim"],
        "options_hi": ["बिहारी", "कबीर", "तुलसीदास", "रहीम"],
        "answer_en": "Bihari",
        "answer_hi": "बिहारी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "What is the antonym (Vilom) of 'सत्य'?",
        "question_hi": "'सत्य' का विलोम शब्द क्या है?",
        "options_en": ["झूठ", "असत्य", "गलत", "बुरा"],
        "options_hi": ["झूठ", "असत्य", "गलत", "बुरा"],
        "answer_en": "असत्य",
        "answer_hi": "असत्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "Which of the following is not a Mahadevi Verma composition?",
        "question_hi": "निम्नलिखित में से कौन महादेवी वर्मा की रचना नहीं है?",
        "options_en": ["Mera Parivaar", "Madhur Madhur Mere Deepak Jal", "Gillu", "Harihar Kaka"],
        "options_hi": ["मेरा परिवार", "मधुर मधुर मेरे दीपक जल", "गिल्लू", "हरिहर काका"],
        "answer_en": "Harihar Kaka",
        "answer_hi": "हरिहर काका",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "Which word is the feminine form of 'राजा'?",
        "question_hi": "'राजा' का स्त्रीलिंग रूप क्या है?",
        "options_en": ["राजी", "रानी", "राजकुमारी", "राज"],
        "options_hi": ["राजी", "रानी", "राजकुमारी", "राज"],
        "answer_en": "रानी",
        "answer_hi": "रानी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "Choose the correct meaning of 'गागर में सागर भरना':",
        "question_hi": "'गागर में सागर भरना' का सही अर्थ चुनिए:",
        "options_en": ["Small pot with water", "To express much in few words", "To fill ocean", "To bathe in ocean"],
        "options_hi": ["छोटे बर्तन में पानी", "कम शब्दों में बहुत कुछ कहना", "सागर को भरना", "सागर में स्नान करना"],
        "answer_en": "To express much in few words",
        "answer_hi": "कम शब्दों में बहुत कुछ कहना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "What is the synonym of 'सूर्य'?",
        "question_hi": "'सूर्य' का पर्यायवाची शब्द क्या है?",
        "options_en": ["चन्द्र", "रवि", "तारा", "अग्नि"],
        "options_hi": ["चन्द्र", "रवि", "तारा", "अग्नि"],
        "answer_en": "रवि",
        "answer_hi": "रवि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "Who wrote the story 'Gillu'?",
        "question_hi": "'गिल्लू' कहानी किसने लिखी है?",
        "options_en": ["Mahadevi Verma", "Premchand", "Phanishwar Nath Renu", "Dinkar"],
        "options_hi": ["महादेवी वर्मा", "प्रेमचंद", "फणीश्वर नाथ रेणु", "दिनकर"],
        "answer_en": "Mahadevi Verma",
        "answer_hi": "महादेवी वर्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "Which one of the following is a 'Visheshan' (adjective)?",
        "question_hi": "निम्नलिखित में से कौन 'विशेषण' है?",
        "options_en": ["लाल", "दौड़", "खाना", "नींद"],
        "options_hi": ["लाल", "दौड़", "खाना", "नींद"],
        "answer_en": "लाल",
        "answer_hi": "लाल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "What is the meaning of the idiom 'कान में तेल डालकर सोना'?",
        "question_hi": "'कान में तेल डालकर सोना' का अर्थ क्या है?",
        "options_en": ["To apply oil", "To sleep ignoring everything", "To be tired", "To rest properly"],
        "options_hi": ["तेल लगाना", "सब कुछ अनसुना कर सो जाना", "थक जाना", "अच्छी तरह आराम करना"],
        "answer_en": "To sleep ignoring everything",
        "answer_hi": "सब कुछ अनसुना कर सो जाना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "Which is the correct passive voice sentence: 'राम आम खा रहा है'?",
        "question_hi": "'राम आम खा रहा है' का सही कर्तृवाच्य वाक्य क्या होगा?",
        "options_en": ["राम से आम खाया जा रहा है", "राम आम खाता है", "राम आम खाता था", "राम आम खा चुका है"],
        "options_hi": ["राम से आम खाया जा रहा है", "राम आम खाता है", "राम आम खाता था", "राम आम खा चुका है"],
        "answer_en": "राम से आम खाया जा रहा है",
        "answer_hi": "राम से आम खाया जा रहा है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "Who is the author of the essay 'Manushyata'?",
        "question_hi": "'मनुष्यता' निबंध के लेखक कौन हैं?",
        "options_en": ["Premchand", "Mahadevi Verma", "Harivansh Rai Bachchan", "Mannu Bhandari"],
        "options_hi": ["प्रेमचंद", "महादेवी वर्मा", "हरिवंश राय बच्चन", "मन्नू भंडारी"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "Which of these is not a pronoun (sarvanam)?",
        "question_hi": "इनमें से कौन सर्वनाम नहीं है?",
        "options_en": ["मैं", "वह", "तू", "दौड़"],
        "options_hi": ["मैं", "वह", "तू", "दौड़"],
        "answer_en": "दौड़",
        "answer_hi": "दौड़",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "Which chapter describes the bond between human and animal?",
        "question_hi": "कौन-सा पाठ मानव और पशु के बीच के संबंध को दर्शाता है?",
        "options_en": ["Gillu", "Harihar Kaka", "Bade Bhai Sahab", "Manushyata"],
        "options_hi": ["गिल्लू", "हरिहर काका", "बड़े भाई साहब", "मनुष्यता"],
        "answer_en": "Gillu",
        "answer_hi": "गिल्लू",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "What is the gender of the word 'नदी'?",
        "question_hi": "'नदी' शब्द का लिंग क्या है?",
        "options_en": ["Masculine", "Feminine", "Neutral", "None"],
        "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "कोई नहीं"],
        "answer_en": "Feminine",
        "answer_hi": "स्त्रीलिंग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "Which is a 'Samas' word?",
        "question_hi": "निम्न में से कौन-सा शब्द समास है?",
        "options_en": ["राजपुत्र", "पढ़ाई", "सोचना", "भोजन"],
        "options_hi": ["राजपुत्र", "पढ़ाई", "सोचना", "भोजन"],
        "answer_en": "राजपुत्र",
        "answer_hi": "राजपुत्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "Which of these words is derived from Sanskrit (Tatsam)?",
        "question_hi": "इनमें से कौन-सा शब्द तत्सम है?",
        "options_en": ["दीपक", "दीया", "बत्ती", "चिराग"],
        "options_hi": ["दीपक", "दीया", "बत्ती", "चिराग"],
        "answer_en": "दीपक",
        "answer_hi": "दीपक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "What does 'अंतरात्मा' mean?",
        "question_hi": "'अंतरात्मा' का अर्थ क्या है?",
        "options_en": ["Inner soul", "Mind", "Thought", "Imagination"],
        "options_hi": ["भीतर की आत्मा", "मन", "विचार", "कल्पना"],
        "answer_en": "Inner soul",
        "answer_hi": "भीतर की आत्मा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "Which is the correct Sandhi-viched of 'सूर्यास्त'?",
        "question_hi": "'सूर्यास्त' का सही संधि विच्छेद क्या है?",
        "options_en": ["सूर्य + अस्त", "सूर + अस्त", "सूर्य + अस्ति", "सूर्य + आस्त"],
        "options_hi": ["सूर्य + अस्त", "सूर + अस्त", "सूर्य + अस्ति", "सूर्य + आस्त"],
        "answer_en": "सूर्य + अस्त",
        "answer_hi": "सूर्य + अस्त",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "Which of these is not a 'Kriya' (verb)?",
        "question_hi": "इनमें से कौन क्रिया नहीं है?",
        "options_en": ["सोना", "जाना", "खेलना", "लाल"],
        "options_hi": ["सोना", "जाना", "खेलना", "लाल"],
        "answer_en": "लाल",
        "answer_hi": "लाल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "Which of these is the plural form of 'कुर्सी'?",
        "question_hi": "'कुर्सी' का बहुवचन क्या है?",
        "options_en": ["कुर्सियों", "कुर्सियाँ", "कुर्सी लोग", "कुर्सीवाले"],
        "options_hi": ["कुर्सियों", "कुर्सियाँ", "कुर्सी लोग", "कुर्सीवाले"],
        "answer_en": "कुर्सियाँ",
        "answer_hi": "कुर्सियाँ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "What is the root word of 'पढ़ाई'?",
        "question_hi": "'पढ़ाई' का मूल शब्द क्या है?",
        "options_en": ["पढ़", "पढ़ना", "पढ़ाई करना", "पाठ"],
        "options_hi": ["पढ़", "पढ़ना", "पढ़ाई करना", "पाठ"],
        "answer_en": "पढ़",
        "answer_hi": "पढ़",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "What is the correct pronoun in the sentence '_____ स्कूल गया।'?",
        "question_hi": "वाक्य '_____ स्कूल गया।' में सही सर्वनाम क्या होगा?",
        "options_en": ["मैं", "वह", "हम", "तुम"],
        "options_hi": ["मैं", "वह", "हम", "तुम"],
        "answer_en": "वह",
        "answer_hi": "वह",
        "attempted": false,
        "selected": ""
      },
  
      {
        "num": 92,
        "question_en": "Which of the following is a synonym of 'जल'?",
        "question_hi": "'जल' का पर्यायवाची शब्द कौन-सा है?",
        "options_en": ["अग्नि", "नदी", "वायु", "नीर"],
        "options_hi": ["अग्नि", "नदी", "वायु", "नीर"],
        "answer_en": "नीर",
        "answer_hi": "नीर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "Which is the opposite of 'अंधकार'?",
        "question_hi": "'अंधकार' का विलोम शब्द क्या है?",
        "options_en": ["धुंध", "अंधा", "प्रकाश", "रात्रि"],
        "options_hi": ["धुंध", "अंधा", "प्रकाश", "रात्रि"],
        "answer_en": "प्रकाश",
        "answer_hi": "प्रकाश",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "Which is the correct spelling?",
        "question_hi": "सही वर्तनी कौन-सी है?",
        "options_en": ["संचय", "सञ्चय", "संच्य", "सञ्च्य"],
        "options_hi": ["संचय", "सञ्चय", "संच्य", "सञ्च्य"],
        "answer_en": "संचय",
        "answer_hi": "संचय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "What is the meaning of the idiom 'नाक में दम करना'?",
        "question_hi": "'नाक में दम करना' मुहावरे का क्या अर्थ है?",
        "options_en": ["नाक बंद करना", "बहुत परेशान करना", "गुस्सा करना", "शर्म करना"],
        "options_hi": ["नाक बंद करना", "बहुत परेशान करना", "गुस्सा करना", "शर्म करना"],
        "answer_en": "बहुत परेशान करना",
        "answer_hi": "बहुत परेशान करना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "Which of these is a 'Tatbhav' word of 'अग्नि'?",
        "question_hi": "'अग्नि' का तद्भव शब्द कौन-सा है?",
        "options_en": ["आग", "अग", "इंधन", "जल"],
        "options_hi": ["आग", "अग", "इंधन", "जल"],
        "answer_en": "आग",
        "answer_hi": "आग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "Which type of sentence is 'तुम स्कूल क्यों नहीं गए?'",
        "question_hi": "'तुम स्कूल क्यों नहीं गए?' वाक्य का प्रकार क्या है?",
        "options_en": ["विधिवाचक", "प्रश्नवाचक", "आज्ञावाचक", "विनयवाचक"],
        "options_hi": ["विधिवाचक", "प्रश्नवाचक", "आज्ञावाचक", "विनयवाचक"],
        "answer_en": "प्रश्नवाचक",
        "answer_hi": "प्रश्नवाचक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "Which chapter’s theme is respect for elders?",
        "question_hi": "कौन-से पाठ का मुख्य विषय बड़ों का सम्मान है?",
        "options_en": ["बड़े भाई साहब", "गिल्लू", "मनुष्यता", "हरिहर काका"],
        "options_hi": ["बड़े भाई साहब", "गिल्लू", "मनुष्यता", "हरिहर काका"],
        "answer_en": "बड़े भाई साहब",
        "answer_hi": "बड़े भाई साहब",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "What is the 'Kaal' (tense) in 'वह पढ़ रहा है'?",
        "question_hi": "'वह पढ़ रहा है' में कौन-सा काल है?",
        "options_en": ["भूतकाल", "वर्तमानकाल", "भविष्यत्काल", "आदेशकाल"],
        "options_hi": ["भूतकाल", "वर्तमानकाल", "भविष्यत्काल", "आदेशकाल"],
        "answer_en": "वर्तमानकाल",
        "answer_hi": "वर्तमानकाल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "What is the gender of the word 'बालक'?",
        "question_hi": "'बालक' शब्द का लिंग क्या है?",
        "options_en": ["स्त्रीलिंग", "पुल्लिंग", "नपुंसकलिंग", "संयुक्त लिंग"],
        "options_hi": ["स्त्रीलिंग", "पुल्लिंग", "नपुंसकलिंग", "संयुक्त लिंग"],
        "answer_en": "पुल्लिंग",
        "answer_hi": "पुल्लिंग",
        "attempted": false,
        "selected": ""
      }

// Add more questions here...
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
    window.location.href = "/Deshbord/category/test/submit-test.html";
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