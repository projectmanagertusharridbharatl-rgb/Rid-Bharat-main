const questions = [


        {
                "num": 1,
                "question_en": "Choose the correct tense: 'She _____ (read) a book when I called her.'",
                "question_hi": "सही काल चुनें: 'जब मैंने उसे फोन किया, वह एक किताब _____ (पढ़ रही थी)।'",
                "options_en": ["reads", "read", "was reading", "has read"],
                "options_hi": ["पढ़ती है", "पढ़ी", "पढ़ रही थी", "पढ़ चुकी है"],
                "answer_en": "was reading",
                "answer_hi": "पढ़ रही थी",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 2,
                "question_en": "Identify the modal verb: 'You _____ wear a helmet while riding a bike.'",
                "question_hi": "मोडल क्रिया पहचानें: 'आपको बाइक चलाते समय हेलमेट _____ पहनना चाहिए।'",
                "options_en": ["can", "might", "must", "could"],
                "options_hi": ["सकते हैं", "शायद", "अवश्य", "सकता था"],
                "answer_en": "must",
                "answer_hi": "अवश्य",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 3,
                "question_en": "Convert to reported speech: 'He said, \"I am tired.\"'",
                "question_hi": "प्रत्यक्ष भाषण को अप्रत्यक्ष भाषण में बदलें: 'उसने कहा, \"मैं थक गया हूँ।\"'",
                "options_en": ["He said he is tired.", "He said he was tired.", "He said he had been tired.", "He says he was tired."],
                "options_hi": ["उसने कहा कि वह थक गया है।", "उसने कहा कि वह थक गया था।", "उसने कहा कि वह थक चुका था।", "वह कहता है कि वह थक गया था।"],
                "answer_en": "He said he was tired.",
                "answer_hi": "उसने कहा कि वह थक गया था।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 4,
                "question_en": "Choose the correct determiner: 'There are _____ apples in the basket.'",
                "question_hi": "सही निर्धारक चुनें: 'टोकरी में _____ सेब हैं।'",
                "options_en": ["much", "a little", "many", "few"],
                "options_hi": ["बहुत (अगणनीय)", "थोड़ा (अगणनीय)", "कई (गणनीय)", "कुछ (नकारात्मक)"],
                "answer_en": "many",
                "answer_hi": "कई (गणनीय)",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 5,
                "question_en": "Identify the passive voice: 'The cake was baked by my mother.'",
                "question_hi": "कर्मवाच्य पहचानें: 'केक मेरी माँ द्वारा बेक किया गया था।'",
                "options_en": ["The cake baked my mother.", "My mother baked the cake.", "The cake was baked by my mother.", "My mother was baking the cake."],
                "options_hi": ["केक ने मेरी माँ को बेक किया।", "मेरी माँ ने केक बेक किया।", "केक मेरी माँ द्वारा बेक किया गया था।", "मेरी माँ केक बेक कर रही थी।"],
                "answer_en": "The cake was baked by my mother.",
                "answer_hi": "केक मेरी माँ द्वारा बेक किया गया था।",
                "attempted": false,
                "selected": ""
        },
        // Continues up to num50...


        {
                "num": 6,
                "question_en": "Fill in the preposition: 'She is allergic _____ cats.'",
                "question_hi": "सही संबंधबोधक भरें: 'उसे बिल्लियों _____ एलर्जी है।'",
                "options_en": ["for", "to", "with", "on"],
                "options_hi": ["के लिए", "को", "से", "पर"],
                "answer_en": "to",
                "answer_hi": "को",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 7,
                "question_en": "Correct the sentence: 'Each of the boys have a bicycle.'",
                "question_hi": "वाक्य सही करें: 'प्रत्येक लड़के _____ एक साइकिल है।'",
                "options_en": ["Each of the boys has a bicycle.", "Each of the boys have a bicycle.", "Each boys has a bicycle.", "Each boys have a bicycle."],
                "options_hi": ["प्रत्येक लड़के के पास एक साइकिल है।", "प्रत्येक लड़के के पास एक साइकिल हैं।", "प्रत्येक लड़का के पास एक साइकिल है।", "प्रत्येक लड़का के पास एक साइकिल हैं।"],
                "answer_en": "Each of the boys has a bicycle.",
                "answer_hi": "प्रत्येक लड़के के पास एक साइकिल है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 8,
                "question_en": "Identify the conjunction: 'I wanted to go, but it was raining.'",
                "question_hi": "संयोजक पहचानें: 'मैं जाना चाहता था, _____ बारिश हो रही थी।'",
                "options_en": ["I", "wanted", "but", "raining"],
                "options_hi": ["मैं", "चाहता था", "लेकिन", "बारिश"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 9,
                "question_en": "Choose the correct article: 'She is _____ honest person.'",
                "question_hi": "सही उपपद चुनें: 'वह _____ ईमानदार व्यक्ति है।'",
                "options_en": ["a", "an", "the", "no article"],
                "options_hi": ["एक", "एक (स्वर से पहले)", "विशिष्ट", "कोई उपपद नहीं"],
                "answer_en": "an",
                "answer_hi": "एक (स्वर से पहले)",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 10,
                "question_en": "Convert to passive voice: 'The teacher praised the students.'",
                "question_hi": "कर्मवाच्य में बदलें: 'शिक्षक ने छात्रों की प्रशंसा की।'",
                "options_en": ["The students praised the teacher.", "The students were praised by the teacher.", "The teacher was praised by the students.", "The students are praised by the teacher."],
                "options_hi": ["छात्रों ने शिक्षक की प्रशंसा की।", "छात्रों की शिक्षक द्वारा प्रशंसा की गई।", "शिक्षक की छात्रों द्वारा प्रशंसा की गई।", "छात्रों की शिक्षक द्वारा प्रशंसा की जाती है।"],
                "answer_en": "The students were praised by the teacher.",
                "answer_hi": "छात्रों की शिक्षक द्वारा प्रशंसा की गई।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 11,
                "question_en": "Identify the gerund: 'Swimming is good for health.'",
                "question_hi": "क्रियावाचक संज्ञा पहचानें: 'तैरना स्वास्थ्य के लिए अच्छा है।'",
                "options_en": ["Swimming", "is", "good", "health"],
                "options_hi": ["तैरना", "है", "अच्छा", "स्वास्थ्य"],
                "answer_en": "Swimming",
                "answer_hi": "तैरना",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 12,
                "question_en": "Choose the correct pronoun: 'This book is _____.' (pointing to Riya)",
                "question_hi": "सही सर्वनाम चुनें: 'यह किताब _____ है।' (रिया की ओर इशारा करते हुए)",
                "options_en": ["me", "my", "mine", "her"],
                "options_hi": ["मुझे", "मेरा", "मेरी", "उसकी"],
                "answer_en": "hers",
                "answer_hi": "उसकी",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 13,
                "question_en": "Fill in the adverb: 'She sings _____.'",
                "question_hi": "क्रिया-विशेषण भरें: 'वह _____ गाती है।'",
                "options_en": ["beautiful", "beauty", "beautifully", "beautify"],
                "options_hi": ["सुंदर", "सुंदरता", "सुंदर ढंग से", "सजाना"],
                "answer_en": "beautifully",
                "answer_hi": "सुंदर ढंग से",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 14,
                "question_en": "Correct the error: 'The news are shocking.'",
                "question_hi": "त्रुटि सुधारें: 'समाचार चौंकाने वाला हैं।'",
                "options_en": ["The news is shocking.", "The news were shocking.", "The news are shock.", "The news be shocking."],
                "options_hi": ["समाचार चौंकाने वाला है।", "समाचार चौंकाने वाले थे।", "समाचार चौंकाता हैं।", "समाचार चौंकाने वाला हो।"],
                "answer_en": "The news is shocking.",
                "answer_hi": "समाचार चौंकाने वाला है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 15,
                "question_en": "Identify the clause: 'I know that he is honest.'",
                "question_hi": "उपवाक्य पहचानें: 'मुझे पता है कि वह ईमानदार है।'",
                "options_en": ["I know", "that he is honest", "is honest", "I know that"],
                "options_hi": ["मुझे पता है", "कि वह ईमानदार है", "ईमानदार है", "मुझे पता है कि"],
                "answer_en": "that he is honest",
                "answer_hi": "कि वह ईमानदार है",
                "attempted": false,
                "selected": ""
        },

        {
                "num": 16,
                "question_en": "Choose the synonym for 'fragile':",
                "question_hi": "'नाजुक' का समानार्थी शब्द चुनें:",
                "options_en": ["strong", "delicate", "sturdy", "firm"],
                "options_hi": ["मज़बूत", "नाजुक", "टिकाऊ", "दृढ़"],
                "answer_en": "delicate",
                "answer_hi": "नाजुक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 17,
                "question_en": "Fill in the blank with the correct form of the verb: 'They _____ (play) football yesterday.'",
                "question_hi": "क्रिया के सही रूप से रिक्त स्थान भरें: 'उन्होंने कल फुटबॉल _____ (खेलना)।'",
                "options_en": ["play", "plays", "played", "playing"],
                "options_hi": ["खेल", "खेलता है", "खेला", "खेल रहा है"],
                "answer_en": "played",
                "answer_hi": "खेला",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 18,
                "question_en": "Identify the adjective in the sentence: 'She wore a beautiful dress.'",
                "question_hi": "वाक्य में विशेषण पहचानें: 'उसने एक सुंदर पोशाक पहनी थी।'",
                "options_en": ["She", "wore", "a", "beautiful"],
                "options_hi": ["उसने", "पहनी थी", "एक", "सुंदर"],
                "answer_en": "beautiful",
                "answer_hi": "सुंदर",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 19,
                "question_en": "Choose the antonym for 'generous':",
                "question_hi": "'उदार' का विलोम शब्द चुनें:",
                "options_en": ["kind", "selfish", "benevolent", "charitable"],
                "options_hi": ["दयालु", "स्वार्थी", "परोपकारी", "दानशील"],
                "answer_en": "selfish",
                "answer_hi": "स्वार्थी",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 20,
                "question_en": "Combine the sentences using a suitable conjunction: 'He is intelligent. He is also hardworking.'",
                "question_hi": "उपयुक्त योजक का उपयोग करके वाक्यों को मिलाएं: 'वह बुद्धिमान है। वह मेहनती भी है।'",
                "options_en": ["He is intelligent so he is hardworking.", "He is intelligent but he is hardworking.", "He is intelligent and he is hardworking.", "He is intelligent or he is hardworking."],
                "options_hi": ["वह बुद्धिमान है इसलिए वह मेहनती है।", "वह बुद्धिमान है लेकिन वह मेहनती है।", "वह बुद्धिमान है और वह मेहनती है।", "वह बुद्धिमान है या वह मेहनती है।"],
                "answer_en": "He is intelligent and he is hardworking.",
                "answer_hi": "वह बुद्धिमान है और वह मेहनती है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 21,
                "question_en": "Fill in the correct preposition: 'The book is _____ the table.'",
                "question_hi": "सही संबंधबोधक भरें: 'किताब मेज _____ है।'",
                "options_en": ["in", "on", "at", "under"],
                "options_hi": ["में", "पर", "पर (स्थान)", "के नीचे"],
                "answer_en": "on",
                "answer_hi": "पर",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 22,
                "question_en": "Change to indirect speech: 'He said, \"I am busy.\"'",
                "question_hi": "अप्रत्यक्ष कथन में बदलें: 'उसने कहा, \"मैं व्यस्त हूँ।\"'",
                "options_en": ["He said that I am busy.", "He said that he is busy.", "He said that he was busy.", "He says that he was busy."],
                "options_hi": ["उसने कहा कि मैं व्यस्त हूँ।", "उसने कहा कि वह व्यस्त है।", "उसने कहा कि वह व्यस्त था।", "वह कहता है कि वह व्यस्त था।"],
                "answer_en": "He said that he was busy.",
                "answer_hi": "उसने कहा कि वह व्यस्त था।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 23,
                "question_en": "Identify the type of sentence: 'What a beautiful flower!'",
                "question_hi": "वाक्य का प्रकार पहचानें: 'कितना सुंदर फूल है!'",
                "options_en": ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
                "options_hi": ["घोषणात्मक", "प्रश्नवाचक", "आज्ञासूचक", "विस्मयादिबोधक"],
                "answer_en": "Exclamatory",
                "answer_hi": "विस्मयादिबोधक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 24,
                "question_en": "Choose the correctly spelt word:",
                "question_hi": "सही वर्तनी वाला शब्द चुनें:",
                "options_en": ["accomodate", "accommodate", "acommodate", "accomdate"],
                "options_hi": ["अकोमोडेट", "अकोमोडेट", "अकोमोडेट", "अकोमोडेट"],
                "answer_en": "accommodate",
                "answer_hi": "अकोमोडेट",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 25,
                "question_en": "Form the plural of 'child':",
                "question_hi": "'बच्चा' का बहुवचन रूप बनाइए:",
                "options_en": ["childs", "childes", "children", "childrens"],
                "options_hi": ["चाइल्ड्स", "चाइल्डीज", "चिल्ड्रन", "चिल्ड्रन्स"],
                "answer_en": "children",
                "answer_hi": "चिल्ड्रन",
                "attempted": false,
                "selected": ""
        }
        ,

        {
                "num": 26,
                "question_en": "Identify the subject in the sentence: 'The dog barked loudly.'",
                "question_hi": "वाक्य में कर्ता पहचानें: 'कुत्ता जोर से भौंका।'",
                "options_en": ["The dog", "barked", "loudly", "."],
                "options_hi": ["कुत्ता", "भौंका", "जोर से", "।"],
                "answer_en": "The dog",
                "answer_hi": "कुत्ता",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 27,
                "question_en": "Fill in the correct verb form: 'She _____ (go) to the market every day.'",
                "question_hi": "क्रिया का सही रूप भरें: 'वह हर दिन बाजार _____ (जाना)।'",
                "options_en": ["go", "goes", "went", "going"],
                "options_hi": ["जाओ", "जाती है", "गया", "जा रही है"],
                "answer_en": "goes",
                "answer_hi": "जाती है",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 28,
                "question_en": "Choose the correct article: 'I saw _____ elephant in the zoo.'",
                "question_hi": "सही उपपद चुनें: 'मैंने चिड़ियाघर में _____ हाथी देखा।'",
                "options_en": ["a", "an", "the", "no article"],
                "options_hi": ["एक", "एक (स्वर से पहले)", "विशिष्ट", "कोई उपपद नहीं"],
                "answer_en": "an",
                "answer_hi": "एक (स्वर से पहले)",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 29,
                "question_en": "Identify the adverb in the sentence: 'He ran quickly.'",
                "question_hi": "वाक्य में क्रिया-विशेषण पहचानें: 'वह जल्दी भागा।'",
                "options_en": ["He", "ran", "quickly", "."],
                "options_hi": ["वह", "भागा", "जल्दी", "।"],
                "answer_en": "quickly",
                "answer_hi": "जल्दी",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 30,
                "question_en": "Form the possessive case of 'boy':",
                "question_hi": "'लड़का' का संबंध कारक रूप बनाइए:",
                "options_en": ["boys", "boy's", "boys'", "boyes"],
                "options_hi": ["लड़कों", "लड़के का", "लड़कों का", "लड़केज़"],
                "answer_en": "boy's",
                "answer_hi": "लड़के का",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 31,
                "question_en": "Fill in the blank with the correct preposition: 'They live _____ a small village.'",
                "question_hi": "सही संबंधबोधक से रिक्त स्थान भरें: 'वे एक छोटे से गाँव _____ रहते हैं।'",
                "options_en": ["in", "on", "at", "by"],
                "options_hi": ["में", "पर", "पर (स्थान)", "द्वारा"],
                "answer_en": "in",
                "answer_hi": "में",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 32,
                "question_en": "Change to passive voice: 'She is writing a letter.'",
                "question_hi": "कर्मवाच्य में बदलें: 'वह एक पत्र लिख रही है।'",
                "options_en": ["A letter is writing by her.", "A letter was written by her.", "A letter is being written by her.", "She is written a letter."],
                "options_hi": ["एक पत्र उसके द्वारा लिखा जा रहा है।", "एक पत्र उसके द्वारा लिखा गया था।", "एक पत्र उसके द्वारा लिखा जा रहा है।", "वह एक पत्र लिखती है।"],
                "answer_en": "A letter is being written by her.",
                "answer_hi": "एक पत्र उसके द्वारा लिखा जा रहा है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 33,
                "question_en": "Identify the conjunction: 'You can have tea or coffee.'",
                "question_hi": "संयोजक पहचानें: 'आप चाय या कॉफी ले सकते हैं।'",
                "options_en": ["You", "can have", "or", "coffee"],
                "options_hi": ["आप", "ले सकते हैं", "या", "कॉफी"],
                "answer_en": "or",
                "answer_hi": "या",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 34,
                "question_en": "Choose the synonym for 'happy':",
                "question_hi": "'खुश' का समानार्थी शब्द चुनें:",
                "options_en": ["sad", "joyful", "angry", "upset"],
                "options_hi": ["दुखी", "आनंदित", "गुस्सा", "परेशान"],
                "answer_en": "joyful",
                "answer_hi": "आनंदित",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 35,
                "question_en": "Correct the sentence: 'One of my friend are a doctor.'",
                "question_hi": "वाक्य सही करें: 'मेरा एक दोस्त डॉक्टर हैं।'",
                "options_en": ["One of my friend is a doctor.", "One of my friends are a doctor.", "One of my friends is a doctor.", "One of my friend are doctors."],
                "options_hi": ["मेरा एक दोस्त एक डॉक्टर है।", "मेरे एक दोस्त एक डॉक्टर हैं।", "मेरे एक दोस्त एक डॉक्टर है।", "मेरे एक दोस्त डॉक्टर हैं।"],
                "answer_en": "One of my friends is a doctor.",
                "answer_hi": "मेरे एक दोस्त एक डॉक्टर है।",
                "attempted": false,
                "selected": ""
        }
        ,

        {
                "num": 36,
                "question_en": "Identify the predicate in the sentence: 'The cat slept on the rug.'",
                "question_hi": "वाक्य में विधेय पहचानें: 'बिल्ली गलीचे पर सो गई।'",
                "options_en": ["The cat", "slept", "on the rug", "."],
                "options_hi": ["बिल्ली", "सो गई", "गलीचे पर", "।"],
                "answer_en": "slept on the rug",
                "answer_hi": "गलीचे पर सो गई",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 37,
                "question_en": "Fill in the correct tense: 'If I _____ (be) a bird, I would fly.'",
                "question_hi": "सही काल भरें: 'अगर मैं एक पक्षी _____ (होना), तो मैं उड़ता।'",
                "options_en": ["am", "is", "was", "were"],
                "options_hi": ["हूँ", "है", "था", "होता"],
                "answer_en": "were",
                "answer_hi": "होता",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 38,
                "question_en": "Choose the correct pronoun: '_____ went to the park.' (referring to a group including yourself)",
                "question_hi": "सही सर्वनाम चुनें: '_____ पार्क गए।' (अपने सहित एक समूह का जिक्र करते हुए)",
                "options_en": ["I", "He", "She", "We"],
                "options_hi": ["मैं", "वह (पुरुष)", "वह (स्त्री)", "हम"],
                "answer_en": "We",
                "answer_hi": "हम",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 39,
                "question_en": "Identify the prepositional phrase: 'The book on the shelf is mine.'",
                "question_hi": "संबंधवाचक वाक्यांश पहचानें: 'शेल्फ पर रखी किताब मेरी है।'",
                "options_en": ["The book", "on the shelf", "is mine", "The shelf is mine"],
                "options_hi": ["किताब", "शेल्फ पर", "मेरी है", "शेल्फ मेरी है"],
                "answer_en": "on the shelf",
                "answer_hi": "शेल्फ पर",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 40,
                "question_en": "Form the comparative adjective of 'good':",
                "question_hi": "'अच्छा' का तुलनात्मक विशेषण बनाइए:",
                "options_en": ["gooder", "goodest", "better", "best"],
                "options_hi": ["गुडर", "गुड्डेस्ट", "बेटर", "बेस्ट"],
                "answer_en": "better",
                "answer_hi": "बेटर",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 41,
                "question_en": "Fill in the blank with the correct adverb: 'He spoke _____ to the crowd.'",
                "question_hi": "सही क्रिया-विशेषण से रिक्त स्थान भरें: 'उन्होंने भीड़ से _____ बात की।'",
                "options_en": ["loud", "loudly", "loudness", "louder"],
                "options_hi": ["तेज", "तेजी से", "तेजी", "तेजतर्रार"],
                "answer_en": "loudly",
                "answer_hi": "तेजी से",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 42,
                "question_en": "Change to indirect speech: 'She asked, \"Are you coming?\"'",
                "question_hi": "अप्रत्यक्ष कथन में बदलें: 'उसने पूछा, \"क्या तुम आ रहे हो?\"'",
                "options_en": ["She asked if I am coming.", "She asked if I was coming.", "She asked if you are coming.", "She asked if you were coming."],
                "options_hi": ["उसने पूछा कि क्या मैं आ रहा हूँ।", "उसने पूछा कि क्या मैं आ रहा था।", "उसने पूछा कि क्या तुम आ रहे हो।", "उसने पूछा कि क्या तुम आ रहे थे।"],
                "answer_en": "She asked if I was coming.",
                "answer_hi": "उसने पूछा कि क्या मैं आ रहा था।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 43,
                "question_en": "Identify the type of clause: 'He left after the movie ended.'",
                "question_hi": "उपवाक्य का प्रकार पहचानें: 'फिल्म खत्म होने के बाद वह चला गया।'",
                "options_en": ["Main clause", "Noun clause", "Adjective clause", "Adverb clause"],
                "options_hi": ["मुख्य उपवाक्य", "संज्ञा उपवाक्य", "विशेषण उपवाक्य", "क्रियाविशेषण उपवाक्य"],
                "answer_en": "Adverb clause",
                "answer_hi": "क्रियाविशेषण उपवाक्य",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 44,
                "question_en": "Choose the correctly spelt word:",
                "question_hi": "सही वर्तनी वाला शब्द चुनें:",
                "options_en": ["beleive", "beleive", "believe", "belive"],
                "options_hi": ["बिलीव", "बिलीव", "बिलीव", "बिलीव"],
                "answer_en": "believe",
                "answer_hi": "बिलीव",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 45,
                "question_en": "Form the plural of 'mouse':",
                "question_hi": "'चूहा' का बहुवचन रूप बनाइए:",
                "options_en": ["mouses", "mice", "mices", "mouse's"],
                "options_hi": ["माउसेस", "माइस", "माइसेस", "माउस का"],
                "answer_en": "mice",
                "answer_hi": "माइस",
                "attempted": false,
                "selected": ""
        }
        ,

        {
                "num": 46,
                "question_en": "Identify the object in the sentence: 'She reads a book.'",
                "question_hi": "वाक्य में कर्म पहचानें: 'वह एक किताब पढ़ती है।'",
                "options_en": ["She", "reads", "a book", "."],
                "options_hi": ["वह", "पढ़ती है", "एक किताब", "।"],
                "answer_en": "a book",
                "answer_hi": "एक किताब",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 47,
                "question_en": "Fill in the blank with the correct verb form: 'They _____ (arrive) late last night.'",
                "question_hi": "क्रिया का सही रूप भरें: 'वे पिछली रात देर से _____ (पहुंचना)।'",
                "options_en": ["arrive", "arrives", "arrived", "arriving"],
                "options_hi": ["पहुंचना", "पहुंचता है", "पहुंचा", "पहुंच रहा है"],
                "answer_en": "arrived",
                "answer_hi": "पहुंचा",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 48,
                "question_en": "Choose the correct article: 'He is _____ university student.'",
                "question_hi": "सही उपपद चुनें: 'वह _____ विश्वविद्यालय का छात्र है।'",
                "options_en": ["a", "an", "the", "no article"],
                "options_hi": ["एक", "एक (स्वर से पहले)", "विशिष्ट", "कोई उपपद नहीं"],
                "answer_en": "a",
                "answer_hi": "एक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 49,
                "question_en": "Identify the adjective in the sentence: 'The old house is for sale.'",
                "question_hi": "वाक्य में विशेषण पहचानें: 'पुराना घर बिक्री के लिए है।'",
                "options_en": ["The", "old", "house", "for"],
                "options_hi": ["वह", "पुराना", "घर", "के लिए"],
                "answer_en": "old",
                "answer_hi": "पुराना",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 50,
                "question_en": "Form the possessive case of 'woman':",
                "question_hi": "'महिला' का संबंध कारक रूप बनाइए:",
                "options_en": ["womans", "woman's", "womens'", "womenses"],
                "options_hi": ["महिलाओं", "महिला का", "महिलाओं का", "महिलाएँ"],
                "answer_en": "woman's",
                "answer_hi": "महिला का",
                "attempted": false,
                "selected": ""
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
