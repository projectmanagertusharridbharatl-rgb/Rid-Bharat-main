const questions = [
    
  
    {
        "num": 1,
        "question_en": "Where was \"Surdas\" born?",
        "question_hi": "\"सूरदास\" का जन्म कहाँ हुआ था?",
        "options_en": ["Runakta", "Kashi", "Mathura", "Delhi"],
        "options_hi": ["रुनकता", "काशी", "मथुरा", "दिल्ली"],
        "answer": "Runakta",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Who was the guru of \"Tulsidas\"?",
        "question_hi": "\"तुलसीदास\" के गुरु कौन थे?",
        "options_en": ["Naraharidas", "Vallabhacharya", "Ramanand", "Agradas"],
        "options_hi": ["नरहरिदास", "वल्लभाचार्य", "रामानंद", "अग्रदास"],
        "answer": "Naraharidas",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Whom did \"Mirabai\" worship?",
        "question_hi": "\"मीराबाई\" किसकी भक्त थीं?",
        "options_en": ["Ram", "Krishna", "Shiv", "Durga"],
        "options_hi": ["राम", "कृष्ण", "शिव", "दुर्गा"],
        "answer": "Krishna",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Where was \"Jaishankar Prasad\" born?",
        "question_hi": "\"जयशंकर प्रसाद\" का जन्म कहाँ हुआ था?",
        "options_en": ["Varanasi", "Allahabad", "Lucknow", "Patna"],
        "options_hi": ["वाराणसी", "इलाहाबाद", "लखनऊ", "पटना"],
        "answer": "Varanasi",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the main poetic form of \"Suryakant Tripathi 'Nirala'\"?",
        "question_hi": "\"सूर्यकांत त्रिपाठी 'निराला'\" का मुख्य काव्य रूप क्या है?",
        "options_en": ["Devotional poetry", "Chhayavadi poetry", "Riti poetry", "Modern poetry"],
        "options_hi": ["भक्ति काव्य", "छायावादी काव्य", "रीति काव्य", "आधुनिक काव्य"],
        "answer": "Chhayavadi poetry",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the main creative field of \"Mahadevi Verma\"?",
        "question_hi": "\"महादेवी वर्मा\" का मुख्य रचना क्षेत्र क्या है?",
        "options_en": ["Social novel", "Historical drama", "Mystical poetry", "Scientific article"],
        "options_hi": ["सामाजिक उपन्यास", "ऐतिहासिक नाटक", "रहस्यवादी कविता", "वैज्ञानिक लेख"],
        "answer": "Mystical poetry",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "For which work did \"Sumitranandan Pant\" receive the Jnanpith Award?",
        "question_hi": "\"सुमित्रानंदन पंत\" को किस रचना पर ज्ञानपीठ पुरस्कार मिला?",
        "options_en": ["Pallav", "Chidambara", "Yugant", "Swarnakiran"],
        "options_hi": ["पल्लव", "चिदंबरा", "युगांत", "स्वर्णकिरण"],
        "answer": "Chidambara",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Where was \"Ramvriksh Benipuri\" born?",
        "question_hi": "\"रामवृक्ष बेनीपुरी\" का जन्म कहाँ हुआ था?",
        "options_en": ["Muzaffarpur", "Patna", "Gaya", "Bhagalpur"],
        "options_hi": ["मुजफ्फरपुर", "पटना", "गया", "भागलपुर"],
        "answer": "Muzaffarpur",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which is the major novel of \"Yashpal\"?",
        "question_hi": "\"यशपाल\" का प्रमुख उपन्यास कौन सा है?",
        "options_en": ["Godan", "Raag Darbari", "Jhootha Sach", "Gunahon Ka Devta"],
        "options_hi": ["गोदान", "राग दरबारी", "झूठा सच", "गुनाहों का देवता"],
        "answer": "Jhootha Sach",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Where was \"Mannu Bhandari\" born?",
        "question_hi": "\"मन्नू भंडारी\" का जन्म कहाँ हुआ था?",
        "options_en": ["Indore", "Mandsaur", "Gwalior", "Bhopal"],
        "options_hi": ["इंदौर", "मंदसौर", "ग्वालियर", "भोपाल"],
        "answer": "Mandsaur",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "On which class's life are \"Swam Prakash's\" stories based?",
        "question_hi": "\"स्वयं प्रकाश\" की कहानियाँ किस वर्ग के जीवन पर आधारित हैं?",
        "options_en": ["Upper class", "Middle class", "Lower class", "Rural class"],
        "options_hi": ["उच्च वर्ग", "मध्यम वर्ग", "निम्न वर्ग", "ग्रामीण वर्ग"],
        "answer": "Middle class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the literary contribution of \"Sarveshwar Dayal Saxena\"?",
        "question_hi": "\"सर्वेश्वर दयाल सक्सेना\" का साहित्यिक योगदान क्या है?",
        "options_en": ["Poetry and drama", "Novel and story", "Travelogue", "Criticism"],
        "options_hi": ["कविता और नाटक", "उपन्यास और कहानी", "यात्रा वृत्तांत", "आलोचना"],
        "answer": "Poetry and drama",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which is the famous novel of \"Shivpujan Sahay\"?",
        "question_hi": "\"शिवपूजन सहाय\" का प्रसिद्ध उपन्यास कौन सा है?",
        "options_en": ["Dehati Duniya", "Maila Anchal", "Raag Darbari", "Tamas"],
        "options_hi": ["देहाती दुनिया", "मैला आँचल", "राग दरबारी", "तमस"],
        "answer": "Dehati Duniya",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What was the real name of \"Nagarjun\"?",
        "question_hi": "\"नागार्जुन\" का वास्तविक नाम क्या था?",
        "options_en": ["Vaidyanath Mishra", "Dhanpat Rai", "Agyeya", "Shivprasad Singh"],
        "options_hi": ["वैद्यनाथ मिश्र", "धनपत राय", "अज्ञेय", "शिवप्रसाद सिंह"],
        "answer": "Vaidyanath Mishra",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "To which era does \"Hazari Prasad Dwivedi\" belong?",
        "question_hi": "\"हजारी प्रसाद द्विवेदी\" किस युग के लेखक हैं?",
        "options_en": ["Bharatendu era", "Dwivedi era", "Chhayavadi era", "Modern era"],
        "options_hi": ["भारतेन्दु युग", "द्विवेदी युग", "छायावादी युग", "आधुनिक युग"],
        "answer": "Dwivedi era",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which magazine was edited by \"Mahavir Prasad Dwivedi\"?",
        "question_hi": "\"महावीर प्रसाद द्विवेदी\" किस पत्रिका के संपादक थे?",
        "options_en": ["Saraswati", "Chand", "Karmaveer", "Pratap"],
        "options_hi": ["सरस्वती", "चाँद", "कर्मवीर", "प्रताप"],
        "answer": "Saraswati",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What was the original name of \"Premchand\"?",
        "question_hi": "\"प्रेमचंद\" का मूल नाम क्या था?",
        "options_en": ["Dhanpat Rai Shrivastav", "Amrit Rai", "Shivrani Devi", "Premchand Shrivastav"],
        "options_hi": ["धनपत राय श्रीवास्तव", "अमृतराय", "शिवरानी देवी", "प्रेमचंद श्रीवास्तव"],
        "answer": "Dhanpat Rai Shrivastav",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Where was \"Bharatendu Harishchandra\" born?",
        "question_hi": "\"भारतेन्दु हरिश्चंद्र\" का जन्म कहाँ हुआ था?",
        "options_en": ["Allahabad", "Kanpur", "Varanasi", "Lucknow"],
        "options_hi": ["इलाहाबाद", "कानपुर", "वाराणसी", "लखनऊ"],
        "answer": "Varanasi",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What was the literary style of \"Pratap Narayan Mishra\"?",
        "question_hi": "\"प्रतापनारायण मिश्र\" का साहित्यिक शैली क्या थी?",
        "options_en": ["Satire and humor", "Serious philosophy", "Love and romance", "War and valor"],
        "options_hi": ["व्यंग्य और हास्य", "गंभीर दर्शन", "प्रेम और श्रृंगार", "युद्ध और वीरता"],
        "answer": "Satire and humor",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What was the full name of \"Agyeya\"?",
        "question_hi": "\"अज्ञेय\" का पूरा नाम क्या था?",
        "options_en": ["Sachchidanand Hiranand Vatsyayan Agyeya", "Gajanan Madhav Muktibodh", "Dharmveer Bharati", "Vidyaniwas Mishra"],
        "options_hi": ["सच्चिदानंद हीरानंद वात्स्यायन अज्ञेय", "गजानन माधव मुक्तिबोध", "धर्मवीर भारती", "विद्यानिवास मिश्र"],
        "answer": "Sachchidanand Hiranand Vatsyayan Agyeya",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which is the major novel of \"Krishna Sobti\"?",
        "question_hi": "\"कृष्णा सोबती\" का प्रमुख उपन्यास कौन सा है?",
        "options_en": ["Rahi Masoom Raza", "Zindaginama", "Tamas", "Agnishikha"],
        "options_hi": ["राही मासूम रज़ा", "जिंदगीनामा", "तमस", "अग्निशिखा"],
        "answer": "Zindaginama",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What was the original name of \"Shivani\"?",
        "question_hi": "\"शिवानी\" का मूल नाम क्या था?",
        "options_en": ["Gaura Pant", "Shivani Devi", "Gauri Devi", "Shivani Pant"],
        "options_hi": ["गौरा पंत", "शिवानी देवी", "गौरी देवी", "शिवानी पंत"],
        "answer": "Gaura Pant",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Where was \"Rahi Masoom Raza\" born?",
        "question_hi": "\"राही मासूम रज़ा\" का जन्म कहाँ हुआ था?",
        "options_en": ["Ghazipur", "Allahabad", "Lucknow", "Gorakhpur"],
        "options_hi": ["गाजीपुर", "इलाहाबाद", "लखनऊ", "गोरखपुर"],
        "answer": "Ghazipur",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which is the famous play of \"Bhishma Sahni\"?",
        "question_hi": "\"भीष्म साहनी\" का प्रसिद्ध नाटक कौन सा है?",
        "options_en": ["Andha Yug", "Tamas", "Madhavi", "Kabira Khada Bazaar Mein"],
        "options_hi": ["अंधा युग", "तमस", "माधवी", "कबीरा खड़ा बाज़ार में"],
        "answer": "Kabira Khada Bazaar Mein",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which is the poetic play of \"Dharamvir Bharati\"?",
        "question_hi": "\"धर्मवीर भारती\" का काव्य नाटक कौन सा है?",
        "options_en": ["Andha Yug", "Andher Nagari", "Skandgupta", "Surya Ki Antim Kiran Se Surya Ki Pehli Kiran Tak"],
        "options_hi": ["अंधा युग", "अंधेर नगरी", "स्कंदगुप्त", "सूर्य की अंतिम किरण से सूर्य की पहली किरण तक"],
        "answer": "Andha Yug",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which is the essay collection of \"Vidyaniwas Mishra\"?",
        "question_hi": "\"विद्यानिवास मिश्र\" का निबंध संग्रह कौन सा है?",
        "options_en": ["Tum Chandan Hum Paani", "Burger", "Nirala Rachnavali", "Ashok Ke Phool"],
        "options_hi": ["तुम चंदन हम पानी", "बर्गर", "निराला रचनावली", "अशोक के फूल"],
        "answer": "Tum Chandan Hum Paani",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which is the famous poetry of \"Ramdhari Singh 'Dinkar'\"?",
        "question_hi": "\"रामधारी सिंह 'दिनकर'\" का प्रसिद्ध काव्य कौन सा है?",
        "options_en": ["Urvashi", "Kamayani", "Saket", "Priyapravas"],
        "options_hi": ["उर्वशी", "कामायनी", "साकेत", "प्रियप्रवास"],
        "answer": "Urvashi",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which is the national poetry of \"Maithilisharan Gupt\"?",
        "question_hi": "\"मैथिलीशरण गुप्त\" का राष्ट्रीय काव्य कौन सा है?",
        "options_en": ["Panchavati", "Bharat-Bharati", "Yashodhara", "Dwapar"],
        "options_hi": ["पंचवटी", "भारत-भारती", "यशोधरा", "द्वापर"],
        "answer": "Bharat-Bharati",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which is the famous play of \"Jagdish Chandra Mathur\"?",
        "question_hi": "\"जगदीश चंद्र माथुर\" का प्रसिद्ध नाटक कौन सा है?",
        "options_en": ["Konark", "Andher Nagari", "Ashadh Ka Ek Din", "Lehron Ke Rajhans"],
        "options_hi": ["कोणार्क", "अंधेर नगरी", "आषाढ़ का एक दिन", "लहरों के राजहंस"],
        "answer": "Konark",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which is the famous play of \"Bhishma Sahni\"?",
        "question_hi": "\"भीष्म साहनी\" का प्रसिद्ध नाटक कौन सा है?",
        "options_en": ["Andha Yug", "Tamas", "Madhavi", "Kabira Khada Bazaar Mein"],
        "options_hi": ["अंधा युग", "तमस", "माधवी", "कबीरा खड़ा बाज़ार में"],
        "answer": "Kabira Khada Bazaar Mein",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which is the famous novel of \"Amritlal Nagar\"?",
        "question_hi": "\"अमृतलाल नागर\" का प्रसिद्ध उपन्यास कौन सा है?",
        "options_en": ["Mans Ka Hans", "Godan", "Rangbhoomi", "Premashram"],
        "options_hi": ["मानस का हंस", "गोदान", "रंगभूमि", "प्रेमाश्रम"],
        "answer": "Mans Ka Hans",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which is the regional novel of \"Phanishwarnath Renu\"?",
        "question_hi": "\"फणीश्वरनाथ रेणु\" का आंचलिक उपन्यास कौन सा है?",
        "options_en": ["Gunahon Ka Devta", "Maila Anchal", "Divya", "Nadi Ke Dweep"],
        "options_hi": ["गुनाहों का देवता", "मैला आँचल", "दिव्या", "नदी के द्वीप"],
        "answer": "Maila Anchal",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What type of poet is \"Kedarnath Agrawal\"?",
        "question_hi": "\"केदारनाथ अग्रवाल\" किस प्रकार के कवि हैं?",
        "options_en": ["Chhayavadi", "Progressive", "Experimentalist", "New Poetry"],
        "options_hi": ["छायावादी", "प्रगतिवादी", "प्रयोगवादी", "नई कविता"],
        "answer": "Progressive",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What was the real name of \"Trilochana\"?",
        "question_hi": "\"त्रिलोचन\" का वास्तविक नाम क्या था?",
        "options_en": ["Vasudev Singh", "Kedarnath Singh", "Shivmangal Singh Suman", "Nagarjun"],
        "options_hi": ["वासुदेव सिंह", "केदारनाथ सिंह", "शिवमंगल सिंह सुमन", "नागार्जुन"],
        "answer": "Vasudev Singh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which rasa is \"Shivmangal Singh 'Suman'\" known for?",
        "question_hi": "\"शिवमंगल सिंह 'सुमन'\" किस रस के कवि माने जाते हैं?",
        "options_en": ["Shringar Rasa", "Veer Rasa", "Hasya Rasa", "Shant Rasa"],
        "options_hi": ["शृंगार रस", "वीर रस", "हास्य रस", "शांत रस"],
        "answer": "Veer Rasa",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What was the full name of \"Muktibodh\"?",
        "question_hi": "\"मुक्तिबोध\" का पूरा नाम क्या था?",
        "options_en": ["Gajanan Madhav Muktibodh", "Sachchidanand Hiranand Vatsyayan", "Dharamveer Bharati", "Vidyaniwas Mishra"],
        "options_hi": ["गजानन माधव मुक्तिबोध", "सच्चिदानंद हीरानंद वात्स्यायन", "धर्मवीर भारती", "विद्यानिवास मिश्र"],
        "answer": "Gajanan Madhav Muktibodh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which poetic stream does \"Raghuvir Sahay\" belong to?",
        "question_hi": "\"रघुवीर सहाय\" किस काव्य धारा के कवि हैं?",
        "options_en": ["Chhayavad", "Progressive", "Experimentalist", "New Poetry"],
        "options_hi": ["छायावाद", "प्रगतिवाद", "प्रयोगवाद", "नई कविता"],
        "answer": "New Poetry",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which is the major work of \"Kunwar Narayan\"?",
        "question_hi": "\"कुँवर नारायण\" की प्रमुख रचना कौन सी है?",
        "options_en": ["Atmajayi", "Pallav", "Yugant", "Gramya"],
        "options_hi": ["आत्मजयी", "पल्लव", "युगांत", "ग्राम्या"],
        "answer": "Atmajayi",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which saptak does \"Kedarnath Singh\" belong to?",
        "question_hi": "\"केदारनाथ सिंह\" किस सप्तक के कवि हैं?",
        "options_en": ["First Saptak", "Second Saptak", "Third Saptak", "Fourth Saptak"],
        "options_hi": ["पहला सप्तक", "दूसरा सप्तक", "तीसरा सप्तक", "चौथा सप्तक"],
        "answer": "Third Saptak",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which is the famous poem of \"Sarveshwar Dayal Saxena\"?",
        "question_hi": "\"सर्वेश्वर दयाल सक्सेना\" की प्रसिद्ध कविता कौन सी है?",
        "options_en": ["Megh Aaye", "Gram Shri", "Sandhya Sundari", "Veena"],
        "options_hi": ["मेघ आए", "ग्राम श्री", "संध्या सुंदरी", "वीणा"],
        "answer": "Megh Aaye",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which saptak is \"Agyeya\" considered the pioneer of?",
        "question_hi": "\"अज्ञेय\" किस सप्तक के प्रवर्तक माने जाते हैं?",
        "options_en": ["First Saptak", "Second Saptak", "Third Saptak", "Fourth Saptak"],
        "options_hi": ["पहला सप्तक", "दूसरा सप्तक", "तीसरा सप्तक", "चौथा सप्तक"],
        "answer": "First Saptak",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What type of poet was \"Bhavani Prasad Mishra\"?",
        "question_hi": "\"भवानी प्रसाद मिश्र\" किस प्रकार के कवि थे?",
        "options_en": ["Poet of simple poetry", "Revolutionary poet", "Poet of love", "Poet of nature"],
        "options_hi": ["सहज कविता के कवि", "क्रांतिकारी कवि", "प्रेम के कवि", "प्रकृति के कवि"],
        "answer": "Poet of simple poetry",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What type of poetry is \"Dushyant Kumar\" known for?",
        "question_hi": "\"दुष्यंत कुमार\" किस प्रकार की कविता के लिए जाने जाते हैं?",
        "options_en": ["Ghazal", "Muktaka", "Sonnet", "Kundaliya"],
        "options_hi": ["ग़ज़ल", "मुक्तक", "सॉनेट", "कुंडलिया"],
        "answer": "Ghazal",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which literary magazine was edited by \"Rajendra Yadav\"?",
        "question_hi": "\"राजेंद्र यादव\" किस साहित्यिक पत्रिका के संपादक थे?",
        "options_en": ["Hans", "Dharmayug", "Sarika", "Dinman"],
        "options_hi": ["हंस", "धर्मयुग", "सारिका", "दिनमान"],
        "answer": "Hans",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which is the famous novel of \"Kamleshwar\"?",
        "question_hi": "\"कमलेश्वर\" का प्रसिद्ध उपन्यास कौन सा है?",
        "options_en": ["Kitne Pakistan", "Raag Darbari", "Andhere Band Kamre", "Aapka Bunty"],
        "options_hi": ["कितने पाकिस्तान", "राग दरबारी", "अंधेरे बंद कमरे", "आपका बंटी"],
        "answer": "Kitne Pakistan",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which is the famous novel of \"Bhishma Sahni\"?",
        "question_hi": "\"भीष्म साहनी\" का प्रसिद्ध उपन्यास कौन सा है?",
        "options_en": ["Tamas", "Godan", "Sevasadan", "Nirmala"],
        "options_hi": ["तमस", "गोदान", "सेवासदन", "निर्मला"],
        "answer": "Tamas",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "For which work did \"Krishna Sobti\" receive the Sahitya Akademi Award?",
        "question_hi": "\"कृष्णा सोबती\" को किस रचना के लिए साहित्य अकादमी पुरस्कार मिला?",
        "options_en": ["Mitro Marjani", "Surajmukhi Andhere Ke", "Zindaginama", "Daar Se Bichhudi"],
        "options_hi": ["मित्रो मरजानी", "सूरजमुखी अँधेरे के", "जिंदगीनामा", "डार से बिछुड़ी"],
        "answer": "Zindaginama",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which is the famous novel of \"Mannu Bhandari\"?",
        "question_hi": "\"मन्नू भंडारी\" का प्रसिद्ध उपन्यास कौन सा है?",
        "options_en": ["Aapka Bunty", "Shekhar Ek Jivani", "Nadi Ke Dweep", "Baanbhatt Ki Atmakatha"],
        "options_hi": ["आपका बंटी", "शेखर एक जीवनी", "नदी के द्वीप", "बाणभट्ट की आत्मकथा"],
        "answer": "Aapka Bunty",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What type of stories does \"Uday Prakash\" write?",
        "question_hi": "\"उदय प्रकाश\" की कहानियाँ किस प्रकार की हैं?",
        "options_en": ["Realistic", "Magical Realism", "Psychological", "Social"],
        "options_hi": ["यथार्थवादी", "जादुई यथार्थवादी", "मनोवैज्ञानिक", "सामाजिक"],
        "answer": "Magical Realism",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which is the famous story of \"Swam Prakash\"?",
        "question_hi": "\"स्वयं प्रकाश\" की प्रसिद्ध कहानी कौन सी है?",
        "options_en": ["Netaji Ka Chashma", "Gaura", "Eidgah", "Panch Parmeshwar"],
        "options_hi": ["नेताजी का चश्मा", "गौरा", "ईदगाह", "पंच परमेश्वर"],
        "answer": "Netaji Ka Chashma",
        "attempted": false,
        "selected": ""
    }

          




    
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
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
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