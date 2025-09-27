const questions = [

    
        {
            "num": 1,
            "question_en": "What is the synonym of the word \"Kamal\"?",
            "question_hi": "\"कमल\" शब्द का पर्यायवाची शब्द है:",
            "options_en": ["Jalaj", "Pankaj", "Saroj", "All of the above"],
            "options_hi": ["जलज", "पंकज", "सरोज", "उपरोक्त सभी"],
            "answer": "All of the above",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "What is the permanent emotion (sthayi bhava) of \"Veer Ras\"?",
            "question_hi": "\"वीर रस\" का स्थायी भाव क्या है?",
            "options_en": ["Sorrow", "Enthusiasm", "Anger", "Surprise"],
            "options_hi": ["शोक", "उत्साह", "क्रोध", "विस्मय"],
            "answer": "Enthusiasm",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "Who was the guru of \"Surdas\"?",
            "question_hi": "\"सूरदास\" के गुरु कौन थे?",
            "options_en": ["Tulsidas", "Kabirdas", "Vallabhacharya", "Ramanand"],
            "options_hi": ["तुलसीदास", "कबीरदास", "वल्लभाचार्य", "रामानंद"],
            "answer": "Vallabhacharya",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "Which type of compound (samas) is \"Yathashakti\"?",
            "question_hi": "\"यथाशक्ति\" में कौन सा समास है?",
            "options_en": ["Dvandva Samas", "Karmadharaya Samas", "Avyayibhav Samas", "Tatpurusha Samas"],
            "options_hi": ["द्वंद्व समास", "कर्मधारय समास", "अव्ययीभाव समास", "तत्पुरुष समास"],
            "answer": "Avyayibhav Samas",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "What does the idiom \"Aankhen khulna\" mean?",
            "question_hi": "\"आँखें खुलना\" मुहावरे का अर्थ है:",
            "options_en": ["To fall asleep", "To realize the truth", "To get angry", "To be surprised"],
            "options_hi": ["सो जाना", "वास्तविकता का ज्ञान होना", "गुस्सा आना", "आश्चर्यचकित होना"],
            "answer": "To realize the truth",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "Who is the author of \"Ramcharitmanas\"?",
            "question_hi": "\"रामचरितमानस\" के रचयिता कौन हैं?",
            "options_en": ["Surdas", "Tulsidas", "Kabirdas", "Mirabai"],
            "options_hi": ["सूरदास", "तुलसीदास", "कबीरदास", "मीराबाई"],
            "answer": "Tulsidas",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "What is the antonym of the word \"Anurag\"?",
            "question_hi": "\"अनुराग\" शब्द का विलोम शब्द है:",
            "options_en": ["Love", "Detachment", "Hatred", "Attachment"],
            "options_hi": ["प्रेम", "विरक्ति", "द्वेष", "राग"],
            "answer": "Detachment",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "What is the single word for \"one who has no money\"?",
            "question_hi": "\"जिसके पास धन न हो\" वाक्यांश के लिए एक शब्द है:",
            "options_en": ["Nirdhan", "Dhani", "Ameer", "Gareeb"],
            "options_hi": ["निर्धन", "धनी", "अमीर", "गरीब"],
            "answer": "Nirdhan",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "Which is NOT a synonym of the word \"Parvat\"?",
            "question_hi": "\"पर्वत\" शब्द का पर्यायवाची नहीं है:",
            "options_en": ["Achal", "Giri", "Shail", "Sagar"],
            "options_hi": ["अचल", "गिरी", "शैल", "सागर"],
            "answer": "Sagar",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "What is the sandhi-vicched (splitting) of the word \"Vidyalaya\"?",
            "question_hi": "\"विद्यालय\" शब्द का संधि विच्छेद है:",
            "options_en": ["Vidya + Lay", "Vid + Yalay", "Vidya + Aalay", "Vidy + Lay"],
            "options_hi": ["विद्या + लय", "विद् + यालय", "विद्या + आलय", "विद्य + लय"],
            "answer": "Vidya + Aalay",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "Who is the poet of the poem \"Utsah\"?",
            "question_hi": "\"उत्साह\" कविता के कवि कौन हैं?",
            "options_en": ["Suryakant Tripathi 'Nirala'", "Jaishankar Prasad", "Mahadevi Verma", "Sumitranandan Pant"],
            "options_hi": ["सूर्यकांत त्रिपाठी 'निराला'", "जयशंकर प्रसाद", "महादेवी वर्मा", "सुमित्रानंदन पंत"],
            "answer": "Suryakant Tripathi 'Nirala'",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "Who is the author of the lesson \"Netaji Ka Chashma\"?",
            "question_hi": "\"नेताजी का चश्मा\" पाठ के लेखक कौन हैं?",
            "options_en": ["Swam Prakash", "Ramvriksh Benipuri", "Yashpal", "Mannu Bhandari"],
            "options_hi": ["स्वयं प्रकाश", "रामवृक्ष बेनीपुरी", "यशपाल", "मन्नू भंडारी"],
            "answer": "Swam Prakash",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
            "question_en": "Which rasa is predominant in \"Surdas Ke Pad\"?",
            "question_hi": "\"सूरदास के पद\" में किस रस की प्रधानता है?",
            "options_en": ["Shringar Ras", "Veer Ras", "Shant Ras", "Hasya Ras"],
            "options_hi": ["शृंगार रस", "वीर रस", "शांत रस", "हास्य रस"],
            "answer": "Shringar Ras",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 14,
            "question_en": "What type of lesson is \"Balgobin Bhagat\"?",
            "question_hi": "\"बालगोबिन भगत\" किस प्रकार का पाठ है?",
            "options_en": ["Story", "Poem", "Sketch", "Essay"],
            "options_hi": ["कहानी", "कविता", "रेखाचित्र", "निबंध"],
            "answer": "Sketch",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "Who is the author of \"Ek Kahani Yeh Bhi\"?",
            "question_hi": "\"एक कहानी यह भी\" किसकी रचना है?",
            "options_en": ["Krishna Sobti", "Mannu Bhandari", "Shivani", "Agyeya"],
            "options_hi": ["कृष्णा सोबती", "मन्नू भंडारी", "शिवानी", "अज्ञेय"],
            "answer": "Mannu Bhandari",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 16,
            "question_en": "What is the permanent emotion (sthayi bhava) of \"Karun Ras\"?",
            "question_hi": "\"करुण रस\" का स्थायी भाव है:",
            "options_en": ["Enthusiasm", "Sorrow", "Disgust", "Detachment"],
            "options_hi": ["उत्साह", "शोक", "जुगुप्सा", "निर्वेद"],
            "answer": "Sorrow",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "How many main types of \"Sandhi\" are there?",
            "question_hi": "\"संधि\" के कितने मुख्य भेद होते हैं?",
            "options_en": ["Two", "Three", "Four", "Five"],
            "options_hi": ["दो", "तीन", "चार", "पाँच"],
            "answer": "Three",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "What is the Tadbhav form of the word \"Agni\"?",
            "question_hi": "\"अग्नि\" शब्द का तद्भव रूप है:",
            "options_en": ["Agni", "Aag", "Anal", "Jwala"],
            "options_hi": ["अग्नि", "आग", "अनल", "ज्वाला"],
            "answer": "Aag",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "What is the single word for \"one who has no enemies\"?",
            "question_hi": "\"जिसका कोई शत्रु न हो\" के लिए एक शब्द है:",
            "options_en": ["Shatruheen", "Ajaatshatru", "Mitraheen", "Nihshatru"],
            "options_hi": ["शत्रुहीन", "अजातशत्रु", "मित्रहीन", "निःशत्रु"],
            "answer": "Ajaatshatru",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "What is the synonym of the word \"Pani\"?",
            "question_hi": "\"पानी\" शब्द का पर्यायवाची है:",
            "options_en": ["Fire", "Air", "Water", "Earth"],
            "options_hi": ["आग", "हवा", "जल", "धरती"],
            "answer": "Water",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 21,
            "question_en": "Which season is described in the poem \"At Nahi Rahi Hai\"?",
            "question_hi": "\"अट नहीं रही है\" कविता में किस ऋतु का वर्णन है?",
            "options_en": ["Summer", "Rainy", "Autumn", "Spring"],
            "options_hi": ["ग्रीष्म", "वर्षा", "शरद", "वसंत"],
            "answer": "Spring",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 22,
            "question_en": "From which chapter of \"Ramcharitmanas\" is \"Ram-Lakshman-Parshuram Samvad\" taken?",
            "question_hi": "\"राम-लक्ष्मण-परशुराम संवाद\" रामचरितमानस के किस कांड से लिया गया है?",
            "options_en": ["Balkand", "Ayodhyakand", "Aranyakand", "Uttarkand"],
            "options_hi": ["बालकांड", "अयोध्याकांड", "अरण्यकांड", "उत्तरकांड"],
            "answer": "Balkand",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 23,
            "question_en": "On whom did the author satirize in the lesson \"Lakhnavi Andaaz\"?",
            "question_hi": "\"लखनवी अंदाज़\" पाठ में लेखक ने किस पर व्यंग्य किया है?",
            "options_en": ["Rural life", "Urban life", "Declining feudal class", "Middle class"],
            "options_hi": ["ग्रामीण जीवन पर", "शहरी जीवन पर", "पतनशील सामंती वर्ग पर", "मध्यम वर्ग पर"],
            "answer": "Declining feudal class",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 24,
            "question_en": "Who is the author of \"Manviya Karuna Ki Divya Chamak\"?",
            "question_hi": "\"मानवीय करुणा की दिव्या चमक\" के लेखक कौन हैं?",
            "options_en": ["Sarveshwar Dayal Saxena", "Shivpujan Sahay", "Nagarjun", "Hajari Prasad Dwivedi"],
            "options_hi": ["सर्वेश्वर दयाल सक्सेना", "शिवपूजन सहाय", "नागार्जुन", "हजारी प्रसाद द्विवेदी"],
            "answer": "Sarveshwar Dayal Saxena",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 25,
            "question_en": "Who is the author of \"Stri Shiksha Ke Virodhi Kutarko Ka Khandan\"?",
            "question_hi": "\"स्त्री शिक्षा के विरोधी कुतर्कों का खंडन\" पाठ के लेखक हैं:",
            "options_en": ["Mahavir Prasad Dwivedi", "Premchand", "Bharatendu Harishchandra", "Pratap Narayan Mishra"],
            "options_hi": ["महावीर प्रसाद द्विवेदी", "प्रेमचंद", "भारतेन्दु हरिश्चंद्र", "प्रतापनारायण मिश्र"],
            "answer": "Mahavir Prasad Dwivedi",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 26,
            "question_en": "Which musical instrument is mentioned in the lesson \"Naubatkhane Mein Ibadat\"?",
            "question_hi": "\"नौबतखाने में इबादत\" पाठ में किस वाद्य यंत्र का उल्लेख है?",
            "options_en": ["Sitar", "Tabla", "Shehnai", "Flute"],
            "options_hi": ["सितार", "तबला", "शहनाई", "बांसुरी"],
            "answer": "Shehnai",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 27,
            "question_en": "Which is NOT a major genre of \"Prose\"?",
            "question_hi": "\"गद्य\" की प्रमुख विधा नहीं है:",
            "options_en": ["Story", "Novel", "Poetry", "Essay"],
            "options_hi": ["कहानी", "उपन्यास", "कविता", "निबंध"],
            "answer": "Poetry",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 28,
            "question_en": "How many parts does \"Rasa\" have?",
            "question_hi": "\"रस\" के कितने अंग होते हैं?",
            "options_en": ["Two", "Three", "Four", "Five"],
            "options_hi": ["दो", "तीन", "चार", "पाँच"],
            "answer": "Four",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 29,
            "question_en": "Where is \"Upsarg\" (prefix) added in a word?",
            "question_hi": "\"उपसर्ग\" शब्द के कहाँ लगते हैं?",
            "options_en": ["At the end", "In the middle", "At the beginning", "Anywhere"],
            "options_hi": ["अंत में", "मध्य में", "प्रारंभ में", "कहीं भी"],
            "answer": "At the beginning",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 30,
            "question_en": "Where is \"Pratyay\" (suffix) added in a word?",
            "question_hi": "\"प्रत्यय\" शब्द के कहाँ लगते हैं?",
            "options_en": ["At the beginning", "In the middle", "At the end", "Anywhere"],
            "options_hi": ["प्रारंभ में", "मध्य में", "अंत में", "कहीं भी"],
            "answer": "At the end",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 31,
            "question_en": "How many main types of \"Samas\" (compound) are there?",
            "question_hi": "\"समास\" के मुख्य भेद कितने होते हैं?",
            "options_en": ["Four", "Five", "Six", "Seven"],
            "options_hi": ["चार", "पाँच", "छह", "सात"],
            "answer": "Six",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 32,
            "question_en": "How many main types of \"Alankar\" (figures of speech) are there?",
            "question_hi": "\"अलंकार\" के मुख्य भेद कितने माने जाते हैं?",
            "options_en": ["Two", "Three", "Four", "Five"],
            "options_hi": ["दो", "तीन", "चार", "पाँच"],
            "answer": "Three",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 33,
            "question_en": "What are the main types of \"Chhand\" (meter)?",
            "question_hi": "\"छंद\" के मुख्य प्रकार हैं:",
            "options_en": ["Matrik and Varnik", "Muktak", "Amuktak", "All of the above"],
            "options_hi": ["मात्रिक और वर्णिक", "मुक्तक", "अमुक्तक", "उपरोक्त सभी"],
            "answer": "Matrik and Varnik",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 34,
            "question_en": "Which is the \"Exclamation\" mark?",
            "question_hi": "\"विस्मयादिबोधक\" चिह्न कौन सा है?",
            "options_en": [",", ".", "!", "?"],
            "options_hi": [",", ".", "!", "?"],
            "answer": "!",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 35,
            "question_en": "Which is the \"Question\" mark?",
            "question_hi": "\"प्रश्नवाचक\" चिह्न कौन सा है?",
            "options_en": [",", ".", "!", "?"],
            "options_hi": [",", ".", "!", "?"],
            "answer": "?",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 36,
            "question_en": "What does the proverb \"Andhon mein kana raja\" mean?",
            "question_hi": "\"अंधों में काना राजा\" लोकोक्ति का अर्थ है:",
            "options_en": ["Everyone is blind", "One-eyed king", "A slightly capable person among incapable people", "Leader of fools"],
            "options_hi": ["सब अंधे हों", "एक आँख वाला राजा", "अयोग्यों के बीच थोड़ा योग्य व्यक्ति", "मूर्खों का सरदार"],
            "answer": "A slightly capable person among incapable people",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 37,
            "question_en": "What does the proverb \"Ek aur ek gyarah\" mean?",
            "question_hi": "\"एक और एक ग्यारह\" लोकोक्ति का अर्थ है:",
            "options_en": ["Knowledge of math", "Strength in unity", "Internal conflict", "To become weak"],
            "options_hi": ["गणित का ज्ञान", "एकता में शक्ति", "आपसी झगड़ा", "कमजोर होना"],
            "answer": "Strength in unity",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 38,
            "question_en": "What is the meaning of \"Nibandh\" (essay)?",
            "question_hi": "\"निबंध\" का अर्थ है:",
            "options_en": ["Well-bound", "Badly-bound", "Ordinary writing", "Brief writing"],
            "options_hi": ["अच्छी तरह बंधा हुआ", "बुरी तरह बंधा हुआ", "सामान्य लेखन", "संक्षिप्त लेखन"],
            "answer": "Well-bound",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 39,
            "question_en": "How many types of \"Patra\" (letters) are there?",
            "question_hi": "\"पत्र\" कितने प्रकार के होते हैं?",
            "options_en": ["Two", "Three", "Four", "Five"],
            "options_hi": ["दो", "तीन", "चार", "पाँच"],
            "answer": "Two",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 40,
            "question_en": "To whom are \"Formal Letters\" written?",
            "question_hi": "\"औपचारिक पत्र\" किसे लिखे जाते हैं?",
            "options_en": ["Friends", "Relatives", "Officials", "Family members"],
            "options_hi": ["मित्रों को", "संबंधियों को", "अधिकारियों को", "परिवार के सदस्यों को"],
            "answer": "Officials",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 41,
            "question_en": "To whom are \"Informal Letters\" written?",
            "question_hi": "\"अनौपचारिक पत्र\" किसे लिखे जाते हैं?",
            "options_en": ["Officials", "Principals", "Friends and relatives", "Editors"],
            "options_hi": ["अधिकारियों को", "प्राचार्यों को", "मित्रों और संबंधियों को", "संपादकों को"],
            "answer": "Friends and relatives",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 42,
            "question_en": "What is the main purpose of an \"Advertisement\"?",
            "question_hi": "\"विज्ञापन\" का मुख्य उद्देश्य क्या है?",
            "options_en": ["To entertain", "To inform", "To promote a product or service", "To increase knowledge"],
            "options_hi": ["मनोरंजन करना", "सूचना देना", "उत्पाद या सेवा को बढ़ावा देना", "ज्ञान बढ़ाना"],
            "answer": "To promote a product or service",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 43,
            "question_en": "What is the meaning of \"Samvad\" (dialogue)?",
            "question_hi": "\"संवाद\" का अर्थ है:",
            "options_en": ["A single person's speech", "Conversation between two or more people", "Monologue", "Group discussion"],
            "options_hi": ["एक व्यक्ति का भाषण", "दो या दो से अधिक लोगों की बातचीत", "एकल कथन", "समूह चर्चा"],
            "answer": "Conversation between two or more people",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 44,
            "question_en": "Which is NOT a main element of a \"Story\"?",
            "question_hi": "\"कहानी\" का मुख्य तत्व नहीं है:",
            "options_en": ["Plot", "Character", "Dialogue", "Meter"],
            "options_hi": ["कथानक", "चरित्र", "संवाद", "छंद"],
            "answer": "Meter",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 45,
            "question_en": "What is the meaning of \"Upanyas\" (novel)?",
            "question_hi": "\"उपन्यास\" का अर्थ है:",
            "options_en": ["Short story", "Long story or tale", "Poetry collection", "Collection of articles"],
            "options_hi": ["छोटी कहानी", "बड़ी कहानी या कथा", "कविता संग्रह", "लेखों का संग्रह"],
            "answer": "Long story or tale",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 46,
            "question_en": "What is the meaning of \"Atmakatha\" (autobiography)?",
            "question_hi": "\"आत्मकथा\" का अर्थ है:",
            "options_en": ["Story of another", "Story of oneself", "Fictional story", "Story of gods"],
            "options_hi": ["दूसरे की कथा", "अपनी कथा", "काल्पनिक कथा", "देवताओं की कथा"],
            "answer": "Story of oneself",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 47,
            "question_en": "What is the meaning of \"Jeevani\" (biography)?",
            "question_hi": "\"जीवनी\" का अर्थ है:",
            "options_en": ["Story of one's own life", "Story of another's life", "Story of animals", "Story of birds"],
            "options_hi": ["अपनी जीवन कहानी", "दूसरे के जीवन की कहानी", "पशुओं की कहानी", "पक्षियों की कहानी"],
            "answer": "Story of another's life",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 48,
            "question_en": "What is the meaning of \"Yatra Vritant\" (travelogue)?",
            "question_hi": "\"यात्रा वृत्तांत\" का अर्थ है:",
            "options_en": ["Story of home", "Description of a journey", "Story of dreams", "Description of food"],
            "options_hi": ["घर की कहानी", "यात्रा का वर्णन", "सपने की कहानी", "भोजन का वर्णन"],
            "answer": "Description of a journey",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 49,
            "question_en": "What is the meaning of \"Diary\"?",
            "question_hi": "\"डायरी\" का अर्थ है:",
            "options_en": ["Daily account of events", "Weekly account of events", "Monthly account of events", "Yearly account of events"],
            "options_hi": ["रोजाना की घटनाओं का लेखा-जोखा", "सप्ताह की घटनाओं का लेखा-जोखा", "महीने की घटनाओं का लेखा-जोखा", "वर्ष की घटनाओं का लेखा-जोखा"],
            "answer": "Daily account of events",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 50,
            "question_en": "What is the meaning of \"Sansmaran\" (memoir)?",
            "question_hi": "\"संस्मरण\" का अर्थ है:",
            "options_en": ["To remember forgotten things", "To write by remembering past events", "To write about present events", "To imagine the future"],
            "options_hi": ["भूली हुई बातें याद करना", "बीती हुई घटनाओं को याद करके लिखना", "वर्तमान की घटनाओं को लिखना", "भविष्य की कल्पना करना"],
            "answer": "To write by remembering past events",
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