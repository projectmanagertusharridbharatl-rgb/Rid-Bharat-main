
const questions = [

        {
                "num": 1,
                "question_en": "What is the main purpose of a factual passage?",
                "question_hi": "तथ्यात्मक गद्यांश का मुख्य उद्देश्य क्या है?",
                "options_en": ["Entertain", "Inform", "Persuade", "Criticize"],
                "options_hi": ["मनोरंजन", "सूचना देना", "मनाना", "आलोचना"],
                "answer_en": "Inform",
                "answer_hi": "सूचना देना",
                "attempted": false
        },
        {
                "num": 2,
                "question_en": "Which word means 'to make shorter' in summarization?",
                "question_hi": "सारांश में 'छोटा करना' किस शब्द का अर्थ है?",
                "options_en": ["Elaborate", "Condense", "Expand", "Interpret"],
                "options_hi": ["विस्तार", "संक्षिप्त", "फैलाना", "व्याख्या"],
                "answer_en": "Condense",
                "answer_hi": "संक्षिप्त",
                "attempted": false
        },
        {
                "num": 3,
                "question_en": "What type of passage presents multiple viewpoints?",
                "question_hi": "कौनसा गद्यांश कई दृष्टिकोण प्रस्तुत करता है?",
                "options_en": ["Factual", "Discursive", "Literary", "Narrative"],
                "options_hi": ["तथ्यात्मक", "विवेचनात्मक", "साहित्यिक", "कथात्मक"],
                "answer_en": "Discursive",
                "answer_hi": "विवेचनात्मक",
                "attempted": false
        },
        {
                "num": 4,
                "question_en": "Which is NOT a reading comprehension strategy?",
                "question_hi": "कौनसी पठन समझ रणनीति नहीं है?",
                "options_en": ["Skimming", "Scanning", "Guessing randomly", "Making inferences"],
                "options_hi": ["स्किमिंग", "स्कैनिंग", "बिना सोचे अनुमान", "अनुमान लगाना"],
                "answer_en": "Guessing randomly",
                "answer_hi": "बिना सोचे अनुमान",
                "attempted": false
        },
        {
                "num": 5,
                "question_en": "What should notes primarily include?",
                "question_hi": "नोट्स में मुख्यतः क्या शामिल होना चाहिए?",
                "options_en": ["Every single word", "Key points only", "Personal opinions", "Irrelevant details"],
                "options_hi": ["हर शब्द", "मुख्य बिंदु", "व्यक्तिगत राय", "अप्रासंगिक विवरण"],
                "answer_en": "Key points only",
                "answer_hi": "मुख्य बिंदु",
                "attempted": false
        },
        {
                "num": 6,
                "question_en": "Which is a synonym of 'benevolent'?",
                "question_hi": "'Benevolent' का समानार्थी क्या है?",
                "options_en": ["Cruel", "Kind", "Selfish", "Angry"],
                "options_hi": ["क्रूर", "दयालु", "स्वार्थी", "गुस्सैल"],
                "answer_en": "Kind",
                "answer_hi": "दयालु",
                "attempted": false
        },
        {
                "num": 7,
                "question_en": "What does the prefix 'un-' mean?",
                "question_hi": "उपसर्ग 'un-' का क्या अर्थ है?",
                "options_en": ["Again", "Not", "Before", "After"],
                "options_hi": ["फिर", "नहीं", "पहले", "बाद"],
                "answer_en": "Not",
                "answer_hi": "नहीं",
                "attempted": false
        },
        {
                "num": 8,
                "question_en": "Which is the antonym of 'expand'?",
                "question_hi": "'Expand' का विलोम क्या है?",
                "options_en": ["Grow", "Contract", "Extend", "Increase"],
                "options_hi": ["बढ़ना", "सिकुड़ना", "फैलाना", "बढ़ाना"],
                "answer_en": "Contract",
                "answer_hi": "सिकुड़ना",
                "attempted": false
        },
        {
                "num": 9,
                "question_en": "What is the correct format for formal letter date?",
                "question_hi": "औपचारिक पत्र की तिथि का सही प्रारूप क्या है?",
                "options_en": ["MM/DD/YYYY", "DD/MM/YYYY", "YYYY-MM-DD", "Day Month Year"],
                "options_hi": ["महीना/दिन/साल", "दिन/महीना/साल", "साल-महीना-दिन", "दिन महीना साल"],
                "answer_en": "DD/MM/YYYY",
                "answer_hi": "दिन/महीना/साल",
                "attempted": false
        },
        {
                "num": 10,
                "question_en": "Where does the sender's address go in a formal letter?",
                "question_hi": "औपचारिक पत्र में प्रेषक का पता कहाँ जाता है?",
                "options_en": ["Bottom left", "Top right", "After signature", "Not included"],
                "options_hi": ["नीचे बाएँ", "ऊपर दाएँ", "हस्ताक्षर के बाद", "शामिल नहीं"],
                "answer_en": "Top right",
                "answer_hi": "ऊपर दाएँ",
                "attempted": false
        },
        {
                "num": 11,
                "question_en": "What is the purpose of a 'subject line' in formal letters?",
                "question_hi": "औपचारिक पत्र में 'विषय पंक्ति' का क्या उद्देश्य है?",
                "options_en": ["Decoration", "Indicates main purpose", "Shows sender's name", "Not necessary"],
                "options_hi": ["सजावट", "मुख्य उद्देश्य बताता है", "प्रेषक का नाम दिखाता है", "आवश्यक नहीं"],
                "answer_en": "Indicates main purpose",
                "answer_hi": "मुख्य उद्देश्य बताता है",
                "attempted": false
        },
        {
                "num": 12,
                "question_en": "Which salutation is appropriate for unknown recipients?",
                "question_hi": "अज्ञात प्राप्तकर्ता के लिए कौनसा अभिवादन उचित है?",
                "options_en": ["Dear Friend", "Respected Sir/Madam", "Hello", "Hey there"],
                "options_hi": ["प्रिय मित्र", "आदरणीय महोदय/महोदया", "नमस्ते", "अरे वहाँ"],
                "answer_en": "Respected Sir/Madam",
                "answer_hi": "आदरणीय महोदय/महोदया",
                "attempted": false
        },
        {
                "num": 13,
                "question_en": "What should an article introduction contain?",
                "question_hi": "लेख की भूमिका में क्या होना चाहिए?",
                "options_en": ["Only facts", "Thesis statement", "Personal address", "Conclusion"],
                "options_hi": ["केवल तथ्य", "मुख्य विचार", "व्यक्तिगत संबोधन", "निष्कर्ष"],
                "answer_en": "Thesis statement",
                "answer_hi": "मुख्य विचार",
                "attempted": false
        },
        {
                "num": 14,
                "question_en": "Which tense is used in story writing?",
                "question_hi": "कहानी लेखन में कौनसा काल प्रयुक्त होता है?",
                "options_en": ["Present", "Past", "Future", "All of these"],
                "options_hi": ["वर्तमान", "भूत", "भविष्य", "ये सभी"],
                "answer_en": "Past",
                "answer_hi": "भूत",
                "attempted": false
        },
        {
                "num": 15,
                "question_en": "What makes a speech effective?",
                "question_hi": "भाषण को प्रभावी क्या बनाता है?",
                "options_en": ["Long duration", "Clear structure", "Complex words", "Soft voice"],
                "options_hi": ["लंबी अवधि", "स्पष्ट संरचना", "जटिल शब्द", "मधुर आवाज"],
                "answer_en": "Clear structure",
                "answer_hi": "स्पष्ट संरचना",
                "attempted": false
        },
        {
                "num": 16,
                "question_en": "Which element is crucial in debate writing?",
                "question_hi": "वाद-विवाद लेखन में कौनसा तत्व महत्वपूर्ण है?",
                "options_en": ["Rhyme", "Counter-arguments", "Fictional characters", "Song lyrics"],
                "options_hi": ["तुक", "प्रतिवाद", "काल्पनिक पात्र", "गीत के बोल"],
                "answer_en": "Counter-arguments",
                "answer_hi": "प्रतिवाद",
                "attempted": false
        },
        {
                "num": 17,
                "question_en": "What does an analytical paragraph analyze?",
                "question_hi": "विश्लेषणात्मक अनुच्छेद क्या विश्लेषण करता है?",
                "options_en": ["Data/Information", "Poems only", "Personal diary", "Fictional stories"],
                "options_hi": ["डेटा/जानकारी", "केवल कविताएँ", "व्यक्तिगत डायरी", "काल्पनिक कहानियाँ"],
                "answer_en": "Data/Information",
                "answer_hi": "डेटा/जानकारी",
                "attempted": false
        },
        {
                "num": 18,
                "question_en": "Which is NOT a component of report writing?",
                "question_hi": "रिपोर्ट लेखन का कौनसा घटक नहीं है?",
                "options_en": ["Heading", "Signature", "Fictional plot", "Findings"],
                "options_hi": ["शीर्षक", "हस्ताक्षर", "काल्पनिक कथानक", "निष्कर्ष"],
                "answer_en": "Fictional plot",
                "answer_hi": "काल्पनिक कथानक",
                "attempted": false
        },
        {
                "num": 19,
                "question_en": "What tense is used in newspaper reports?",
                "question_hi": "समाचार रिपोर्ट्स में कौनसा काल प्रयुक्त होता है?",
                "options_en": ["Present perfect", "Past", "Future continuous", "Present continuous"],
                "options_hi": ["पूर्ण वर्तमान", "भूत", "अपूर्ण भविष्य", "वर्तमान अपूर्ण"],
                "answer_en": "Past",
                "answer_hi": "भूत",
                "attempted": false
        },
        {
                "num": 20,
                "question_en": "Which is a feature of informal letters?",
                "question_hi": "अनौपचारिक पत्रों की कौनसी विशेषता है?",
                "options_en": ["Strict format", "Casual language", "No salutation", "Only typed"],
                "options_hi": ["कठोर प्रारूप", "आरामदायक भाषा", "कोई अभिवादन नहीं", "केवल टाइप किया"],
                "answer_en": "Casual language",
                "answer_hi": "आरामदायक भाषा",
                "attempted": false
        },
        {
                "num": 21,
                "question_en": "Identify the tense: 'She writes poems.'",
                "question_hi": "काल पहचानें: 'She writes poems.'",
                "options_en": ["Present continuous", "Simple present", "Past perfect", "Future"],
                "options_hi": ["वर्तमान अपूर्ण", "सरल वर्तमान", "पूर्ण भूत", "भविष्य"],
                "answer_en": "Simple present",
                "answer_hi": "सरल वर्तमान",
                "attempted": false
        },
        {
                "num": 22,
                "question_en": "Convert to indirect speech: He said, 'I am tired.'",
                "question_hi": "अप्रत्यक्ष कथन में बदलें: He said, 'I am tired.'",
                "options_en": ["He said he is tired", "He said he was tired", "He said he had been tired", "He said he will be tired"],
                "options_hi": ["उसने कहा वह थक गया है", "उसने कहा वह थक गया था", "उसने कहा वह थक चुका था", "उसने कहा वह थक जाएगा"],
                "answer_en": "He said he was tired",
                "answer_hi": "उसने कहा वह थक गया था",
                "attempted": false
        },
        {
                "num": 23,
                "question_en": "Which sentence is grammatically correct?",
                "question_hi": "कौनसा वाक्य व्याकरणिक रूप से सही है?",
                "options_en": ["She don't like apples", "She doesn't likes apples", "She doesn't like apples", "She not like apples"],
                "options_hi": ["She don't like apples", "She doesn't likes apples", "She doesn't like apples", "She not like apples"],
                "answer_en": "She doesn't like apples",
                "answer_hi": "She doesn't like apples",
                "attempted": false
        },
        {
                "num": 24,
                "question_en": "Identify the adverb: 'He ran quickly.'",
                "question_hi": "क्रिया विशेषण पहचानें: 'He ran quickly.'",
                "options_en": ["He", "Ran", "Quickly", "All of these"],
                "options_hi": ["वह", "दौड़ा", "तेजी से", "ये सभी"],
                "answer_en": "Quickly",
                "answer_hi": "तेजी से",
                "attempted": false
        },
        {
                "num": 25,
                "question_en": "Which is a compound sentence?",
                "question_hi": "कौनसा संयुक्त वाक्य है?",
                "options_en": ["I like tea", "I like tea but she prefers coffee", "Drinking hot tea", "The tea was hot"],
                "options_hi": ["मुझे चाय पसंद है", "मुझे चाय पसंद है लेकिन उसे कॉफी पसंद है", "गर्म चाय पीना", "चाय गर्म थी"],
                "answer_en": "I like tea but she prefers coffee",
                "answer_hi": "मुझे चाय पसंद है लेकिन उसे कॉफी पसंद है",
                "attempted": false
        },
        {
                "num": 26,
                "question_en": "What is the passive voice of: 'The cat chased the mouse'?",
                "question_hi": "'The cat chased the mouse' का कर्मवाच्य रूप क्या है?",
                "options_en": ["The mouse was chased by the cat", "The mouse is chased by the cat", "The mouse chased the cat", "The cat was chased by the mouse"],
                "options_hi": ["चूहे का बिल्ली द्वारा पीछा किया गया", "चूहे का बिल्ली द्वारा पीछा किया जाता है", "चूहे ने बिल्ली का पीछा किया", "बिल्ली का चूहे द्वारा पीछा किया गया"],
                "answer_en": "The mouse was chased by the cat",
                "answer_hi": "चूहे का बिल्ली द्वारा पीछा किया गया",
                "attempted": false
        },
        {
                "num": 27,
                "question_en": "Which modal verb shows ability?",
                "question_hi": "कौनसी मोडल क्रिया क्षमता दर्शाती है?",
                "options_en": ["Must", "Should", "Can", "May"],
                "options_hi": ["अवश्य", "चाहिए", "सकना", "सकते हैं"],
                "answer_en": "Can",
                "answer_hi": "सकना",
                "attempted": false
        },
        {
                "num": 28,
                "question_en": "Identify the preposition: 'The book is on the table.'",
                "question_hi": "सम्बन्ध सूचक शब्द पहचानें: 'The book is on the table.'",
                "options_en": ["Book", "Is", "On", "Table"],
                "options_hi": ["किताब", "है", "पर", "मेज"],
                "answer_en": "On",
                "answer_hi": "पर",
                "attempted": false
        },
        {
                "num": 29,
                "question_en": "Which is an example of present perfect tense?",
                "question_hi": "पूर्ण वर्तमान काल का उदाहरण कौनसा है?",
                "options_en": ["She sings", "She sang", "She has sung", "She will sing"],
                "options_hi": ["वह गाती है", "वह गाई", "वह गा चुकी है", "वह गाएगी"],
                "answer_en": "She has sung",
                "answer_hi": "वह गा चुकी है",
                "attempted": false
        },
        {
                "num": 30,
                "question_en": "What is the plural of 'child'?",
                "question_hi": "'Child' का बहुवचन क्या है?",
                "options_en": ["Childs", "Children", "Childes", "Child"],
                "options_hi": ["चाइल्ड्स", "चिल्ड्रेन", "चाइल्डेस", "चाइल्ड"],
                "answer_en": "Children",
                "answer_hi": "चिल्ड्रेन",
                "attempted": false
        },
        {
                "num": 31,
                "question_en": "In 'A Letter to God', what does Lencho compare raindrops to?",
                "question_hi": "'A Letter to God' में लेंचो बारिश की बूंदों की तुलना किससे करता है?",
                "options_en": ["Silver coins", "New coins", "Diamonds", "Pearls"],
                "options_hi": ["चांदी के सिक्के", "नए सिक्के", "हीरे", "मोती"],
                "answer_en": "New coins",
                "answer_hi": "नए सिक्के",
                "attempted": false
        },
        {
                "num": 32,
                "question_en": "What destroyed Lencho's crops in 'A Letter to God'?",
                "question_hi": "'A Letter to God' में लेंचो की फसल किसने नष्ट की?",
                "options_en": ["Locusts", "Hailstorm", "Flood", "Drought"],
                "options_hi": ["टिड्डी दल", "ओलावृष्टि", "बाढ़", "सूखा"],
                "answer_en": "Hailstorm",
                "answer_hi": "ओलावृष्टि",
                "attempted": false
        },
        {
                "num": 33,
                "question_en": "What does Lencho request from God?",
                "question_hi": "लेंचो भगवान से क्या माँगता है?",
                "options_en": ["New house", "Money", "Food", "Pony"],
                "options_hi": ["नया घर", "पैसा", "भोजन", "टट्टू"],
                "answer_en": "Money",
                "answer_hi": "पैसा",
                "attempted": false
        },
        {
                "num": 34,
                "question_en": "Who helps Lencho in 'A Letter to God'?",
                "question_hi": "'A Letter to God' में लेंचो की मदद कौन करता है?",
                "options_en": ["Village head", "Postmaster", "Priest", "Teacher"],
                "options_hi": ["गाँव का मुखिया", "डाकमास्टर", "पुजारी", "शिक्षक"],
                "answer_en": "Postmaster",
                "answer_hi": "डाकमास्टर",
                "attempted": false
        },
        {
                "num": 35,
                "question_en": "What is Lencho's reaction to receiving less money?",
                "question_hi": "कम पैसा मिलने पर लेंचो की क्या प्रतिक्रिया है?",
                "options_en": ["Grateful", "Angry", "Indifferent", "Happy"],
                "options_hi": ["आभारी", "गुस्सा", "उदासीन", "खुश"],
                "answer_en": "Angry",
                "answer_hi": "गुस्सा",
                "attempted": false
        },
        {
                "num": 36,
                "question_en": "In 'Nelson Mandela: Long Walk to Freedom', what does Mandela mean by 'twin obligations'?",
                "question_hi": "'Nelson Mandela: Long Walk to Freedom' में मंडेला का 'जुड़वाँ दायित्व' से क्या अभिप्राय है?",
                "options_en": ["Family and friends", "Work and leisure", "Family and country", "Money and power"],
                "options_hi": ["परिवार और दोस्त", "काम और अवकाश", "परिवार और देश", "पैसा और शक्ति"],
                "answer_en": "Family and country",
                "answer_hi": "परिवार और देश",
                "attempted": false
        },
        {
                "num": 37,
                "question_en": "What was Mandela's birth name?",
                "question_hi": "मंडेला का जन्म का नाम क्या था?",
                "options_en": ["Nelson", "Rolihlahla", "Madiba", "Tata"],
                "options_hi": ["नेल्सन", "रोलीह्लाहला", "मदीबा", "टाटा"],
                "answer_en": "Rolihlahla",
                "answer_hi": "रोलीह्लाहला",
                "attempted": false
        },
        {
                "num": 38,
                "question_en": "How many years was Mandela imprisoned?",
                "question_hi": "मंडेला कितने वर्षों तक जेल में रहे?",
                "options_en": ["10", "18", "27", "35"],
                "options_hi": ["10", "18", "27", "35"],
                "answer_en": "27",
                "answer_hi": "27",
                "attempted": false
        },
        {
                "num": 39,
                "question_en": "What does Mandela say about courage?",
                "question_hi": "मंडेला साहस के बारे में क्या कहते हैं?",
                "options_en": ["Absence of fear", "Triumph over fear", "Ignoring fear", "Born with courage"],
                "options_hi": ["डर की अनुपस्थिति", "डर पर विजय", "डर को नजरअंदाज करना", "साहस के साथ जन्म"],
                "answer_en": "Triumph over fear",
                "answer_hi": "डर पर विजय",
                "attempted": false
        },
        {
                "num": 40,
                "question_en": "What is the central theme of Mandela's autobiography?",
                "question_hi": "मंडेला की आत्मकथा का केंद्रीय विषय क्या है?",
                "options_en": ["Wealth creation", "Racial equality", "Technological advancement", "Religious conversion"],
                "options_hi": ["धन सृजन", "नस्लीय समानता", "तकनीकी प्रगति", "धार्मिक परिवर्तन"],
                "answer_en": "Racial equality",
                "answer_hi": "नस्लीय समानता",
                "attempted": false
        },
        {
                "num": 41,
                "question_en": "In 'Two Stories About Flying', what prevents the young seagull from flying?",
                "question_hi": "'Two Stories About Flying' में युवा सीगल को उड़ने से क्या रोकता है?",
                "options_en": ["Broken wing", "Fear", "Lack of food", "Storm"],
                "options_hi": ["टूटा पंख", "डर", "भोजन की कमी", "तूफान"],
                "answer_en": "Fear",
                "answer_hi": "डर",
                "attempted": false
        },
        {
                "num": 42,
                "question_en": "What motivates the young seagull to finally fly?",
                "question_hi": "युवा सीगल को अंततः उड़ने के लिए क्या प्रेरित करता है?",
                "options_en": ["Threat", "Hunger", "Curiosity", "Parent's example"],
                "options_hi": ["धमकी", "भूख", "जिज्ञासा", "माता-पिता का उदाहरण"],
                "answer_en": "Hunger",
                "answer_hi": "भूख",
                "attempted": false
        },
        {
                "num": 43,
                "question_en": "In the Black Aeroplane story, what helps the pilot?",
                "question_hi": "ब्लैक एरोप्लेन कहानी में पायलट की मदद क्या करता है?",
                "options_en": ["Radar", "Another pilot", "Mysterious plane", "Birds"],
                "options_hi": ["रडार", "एक अन्य पायलट", "रहस्यमय विमान", "पक्षी"],
                "answer_en": "Mysterious plane",
                "answer_hi": "रहस्यमय विमान",
                "attempted": false
        },
        {
                "num": 44,
                "question_en": "What weather condition challenges the pilot?",
                "question_hi": "कौनसी मौसम स्थिति पायलट के लिए चुनौती बनती है?",
                "options_en": ["Fog", "Rain", "Storm", "Heat"],
                "options_hi": ["कोहरा", "बारिश", "तूफान", "गर्मी"],
                "answer_en": "Fog",
                "answer_hi": "कोहरा",
                "attempted": false
        },
        {
                "num": 45,
                "question_en": "What lesson do both flying stories share?",
                "question_hi": "दोनों उड़ान कहानियाँ कौनसा सबक साझा करती हैं?",
                "options_en": ["Technology is vital", "Courage overcomes fear", "Luck matters most", "Never trust others"],
                "options_hi": ["प्रौद्योगिकी महत्वपूर्ण है", "साहस डर पर काबू पाता है", "भाग्य सबसे मायने रखता है", "कभी दूसरों पर भरोसा न करें"],
                "answer_en": "Courage overcomes fear",
                "answer_hi": "साहस डर पर काबू पाता है",
                "attempted": false
        },
        {
                "num": 46,
                "question_en": "In 'From the Diary of Anne Frank', what is Anne's diary named?",
                "question_hi": "'From the Diary of Anne Frank' में ऐन की डायरी का क्या नाम है?",
                "options_en": ["Betty", "Kitty", "Dolly", "Molly"],
                "options_hi": ["बेट्टी", "किट्टी", "डॉली", "मॉली"],
                "answer_en": "Kitty",
                "answer_hi": "किट्टी",
                "attempted": false
        },
        {
                "num": 47,
                "question_en": "Why does Anne start writing a diary?",
                "question_hi": "ऐन डायरी लिखना क्यों शुरू करती है?",
                "options_en": ["School assignment", "No friends", "Parents' order", "For publication"],
                "options_hi": ["स्कूल का कार्य", "कोई दोस्त नहीं", "माता-पिता का आदेश", "प्रकाशन के लिए"],
                "answer_en": "No friends",
                "answer_hi": "कोई दोस्त नहीं",
                "attempted": false
        },
        {
                "num": 48,
                "question_en": "What does Anne call her diary?",
                "question_hi": "ऐन अपनी डायरी को क्या कहती है?",
                "options_en": ["Best friend", "Teacher", "Sister", "Mother"],
                "options_hi": ["सबसे अच्छा दोस्त", "शिक्षक", "बहन", "माँ"],
                "answer_en": "Best friend",
                "answer_hi": "सबसे अच्छा दोस्त",
                "attempted": false
        },
        {
                "num": 49,
                "question_en": "Where is Anne's family hiding?",
                "question_hi": "ऐन का परिवार कहाँ छिपा हुआ है?",
                "options_en": ["School basement", "Secret annex", "Forest cabin", "Church attic"],
                "options_hi": ["स्कूल का तहखाना", "गुप्त अनुभाग", "जंगल की झोपड़ी", "चर्च की अटारी"],
                "answer_en": "Secret annex",
                "answer_hi": "गुप्त अनुभाग",
                "attempted": false
        },
        {
                "num": 50,
                "question_en": "What historical context surrounds Anne's diary?",
                "question_hi": "ऐन की डायरी के आसपास कौनसा ऐतिहासिक संदर्भ है?",
                "options_en": ["World War I", "Holocaust", "French Revolution", "Cold War"],
                "options_hi": ["प्रथम विश्व युद्ध", "होलोकॉस्ट", "फ्रांसीसी क्रांति", "शीत युद्ध"],
                "answer_en": "Holocaust",
                "answer_hi": "होलोकॉस्ट",
                "attempted": false
        },
        {
                "num": 51,
                "question_en": "In 'The Hundred Dresses', why does Maddie feel guilty?",
                "question_hi": "'The Hundred Dresses' में मैडी को अपराधबोध क्यों होता है?",
                "options_en": ["For stealing", "For bullying Wanda", "For lying", "For cheating"],
                "options_hi": ["चोरी के लिए", "वांडा को परेशान करने के लिए", "झूठ बोलने के लिए", "धोखा देने के लिए"],
                "answer_en": "For bullying Wanda",
                "answer_hi": "वांडा को परेशान करने के लिए",
                "attempted": false
        },
        {
                "num": 52,
                "question_en": "What does Wanda claim to have?",
                "question_hi": "वांडा क्या होने का दावा करती है?",
                "options_en": ["Hundred dresses", "Magic powers", "Famous parents", "Royal blood"],
                "options_hi": ["सौ पोशाकें", "जादुई शक्तियाँ", "प्रसिद्ध माता-पिता", "शाही खून"],
                "answer_en": "Hundred dresses",
                "answer_hi": "सौ पोशाकें",
                "attempted": false
        },
        {
                "num": 53,
                "question_en": "Where does Wanda sit in class?",
                "question_hi": "वांडा कक्षा में कहाँ बैठती है?",
                "options_en": ["Front row", "Middle", "Back corner", "Teacher's desk"],
                "options_hi": ["सामने की पंक्ति", "बीच में", "पिछले कोने में", "शिक्षक की मेज"],
                "answer_en": "Back corner",
                "answer_hi": "पिछले कोने में",
                "attempted": false
        },
        {
                "num": 54,
                "question_en": "Which poetic device is used in 'The trees are moving out into the forest'?",
                "question_hi": "'The trees are moving out into the forest' में कौन सा काव्यात्मक उपकरण प्रयुक्त हुआ है?",
                "options_en": ["Simile", "Metaphor", "Personification", "Alliteration"],
                "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अनुप्रास"],
                "answer_en": "Personification",
                "answer_hi": "मानवीकरण",
                "attempted": false
        },
        {
                "num": 55,
                "question_en": "What does the ball symbolize in 'The Ball Poem'?",
                "question_hi": "'The Ball Poem' में गेंद किसका प्रतीक है?",
                "options_en": ["Childhood", "Loss", "Money", "Game"],
                "options_hi": ["बचपन", "हानि", "पैसा", "खेल"],
                "answer_en": "Loss",
                "answer_hi": "हानि",
                "attempted": false
        },
        {
                "num": 56,
                "question_en": "Who is Amanda constantly scolded by?",
                "question_hi": "अमांडा को किसके द्वारा लगातार डांट मिलती है?",
                "options_en": ["Teacher", "Mother", "Father", "Friends"],
                "options_hi": ["शिक्षक", "माँ", "पिता", "दोस्त"],
                "answer_en": "Mother",
                "answer_hi": "माँ",
                "attempted": false
        },
        {
                "num": 57,
                "question_en": "What does Walt Whitman compare animals to in 'Animals'?",
                "question_hi": "वॉल्ट व्हिटमैन 'Animals' में जानवरों की तुलना किससे करते हैं?",
                "options_en": ["Gods", "Humans", "Plants", "Machines"],
                "options_hi": ["देवताओं", "मनुष्यों", "पौधों", "मशीनों"],
                "answer_en": "Humans",
                "answer_hi": "मनुष्यों",
                "attempted": false
        },
        {
                "num": 58,
                "question_en": "What is Custard the Dragon's real nature?",
                "question_hi": "कस्टर्ड ड्रैगन का वास्तविक स्वभाव क्या है?",
                "options_en": ["Brave", "Cowardly", "Angry", "Funny"],
                "options_hi": ["बहादुर", "डरपोक", "गुस्सैल", "मजाकिया"],
                "answer_en": "Brave",
                "answer_hi": "बहादुर",
                "attempted": false
        },
        {
                "num": 59,
                "question_en": "What literary form is 'The Proposal'?",
                "question_hi": "'The Proposal' किस साहित्यिक रूप में है?",
                "options_en": ["Poem", "Short Story", "One-act Play", "Essay"],
                "options_hi": ["कविता", "लघु कथा", "एकांकी", "निबंध"],
                "answer_en": "One-act Play",
                "answer_hi": "एकांकी",
                "attempted": false
        },
        {
                "num": 60,
                "question_en": "What is the main conflict in 'The Proposal'?",
                "question_hi": "'The Proposal' में मुख्य संघर्ष क्या है?",
                "options_en": ["Land dispute", "Love triangle", "Family honor", "Money problems"],
                "options_hi": ["जमीन विवाद", "प्रेम त्रिकोण", "परिवार की इज्जत", "पैसे की समस्या"],
                "answer_en": "Land dispute",
                "answer_hi": "जमीन विवाद",
                "attempted": false
        },
        {
                "num": 61,
                "question_en": "How does Griffin become invisible in 'Footprints Without Feet'?",
                "question_hi": "'Footprints Without Feet' में ग्रिफिन कैसे अदृश्य होता है?",
                "options_en": ["Magic spell", "Scientific discovery", "Superpower", "Divine intervention"],
                "options_hi": ["जादू", "वैज्ञानिक खोज", "सुपरपावर", "दैवीय हस्तक्षेप"],
                "answer_en": "Scientific discovery",
                "answer_hi": "वैज्ञानिक खोज",
                "attempted": false
        },
        {
                "num": 62,
                "question_en": "What is the moral of 'The Midnight Visitor'?",
                "question_hi": "'The Midnight Visitor' की नैतिक शिक्षा क्या है?",
                "options_en": ["Appearances can be deceptive", "Crime doesn't pay", "Friendship is important", "Honesty is best"],
                "options_hi": ["दिखावा धोखा दे सकता है", "अपराध का कोई फायदा नहीं", "दोस्ती महत्वपूर्ण है", "ईमानदारी सर्वोत्तम"],
                "answer_en": "Appearances can be deceptive",
                "answer_hi": "दिखावा धोखा दे सकता है",
                "attempted": false
        },
        {
                "num": 63,
                "question_en": "What type of story is 'A Question of Trust'?",
                "question_hi": "'A Question of Trust' किस प्रकार की कहानी है?",
                "options_en": ["Mystery", "Romance", "Horror", "Biography"],
                "options_hi": ["रहस्य", "रोमांस", "डरावनी", "जीवनी"],
                "answer_en": "Mystery",
                "answer_hi": "रहस्य",
                "attempted": false
        },
        {
                "num": 64,
                "question_en": "What lesson does 'The Necklace' teach?",
                "question_hi": "'The Necklace' क्या सिखाती है?",
                "options_en": ["Honesty is best", "Be content with what you have", "Money buys happiness", "Appearances matter"],
                "options_hi": ["ईमानदारी सर्वोत्तम", "जो है उसी में संतुष्ट रहो", "पैसा खुशी खरीदता है", "दिखावा महत्वपूर्ण है"],
                "answer_en": "Be content with what you have",
                "answer_hi": "जो है उसी में संतुष्ट रहो",
                "attempted": false
        },
        {
                "num": 65,
                "question_en": "What transforms Bholi's life?",
                "question_hi": "भोली का जीवन किससे बदलता है?",
                "options_en": ["Marriage", "Education", "Money", "Travel"],
                "options_hi": ["शादी", "शिक्षा", "पैसा", "यात्रा"],
                "answer_en": "Education",
                "answer_hi": "शिक्षा",
                "attempted": false
        },
        {
                "num": 66,
                "question_en": "What literary device is 'as brave as a lion'?",
                "question_hi": "'as brave as a lion' कौन सा साहित्यिक उपकरण है?",
                "options_en": ["Metaphor", "Simile", "Personification", "Alliteration"],
                "options_hi": ["रूपक", "उपमा", "मानवीकरण", "अनुप्रास"],
                "answer_en": "Simile",
                "answer_hi": "उपमा",
                "attempted": false
        },
        {
                "num": 67,
                "question_en": "Which sentence is in passive voice?",
                "question_hi": "कौन सा वाक्य कर्मवाच्य में है?",
                "options_en": ["The cat chased the mouse", "The mouse was chased by the cat", "She sings beautifully", "They play football"],
                "options_hi": ["बिल्ली ने चूहे का पीछा किया", "चूहे का बिल्ली द्वारा पीछा किया गया", "वह खूबसूरत गाती है", "वे फुटबॉल खेलते हैं"],
                "answer_en": "The mouse was chased by the cat",
                "answer_hi": "चूहे का बिल्ली द्वारा पीछा किया गया",
                "attempted": false
        },
        {
                "num": 68,
                "question_en": "What does 'break the ice' mean?",
                "question_hi": "'break the ice' का क्या अर्थ है?",
                "options_en": ["To fall down", "To start a conversation", "To melt something", "To be cold"],
                "options_hi": ["गिरना", "बातचीत शुरू करना", "कुछ पिघलाना", "ठंडा होना"],
                "answer_en": "To start a conversation",
                "answer_hi": "बातचीत शुरू करना",
                "attempted": false
        },
        {
                "num": 69,
                "question_en": "Which part of speech is 'quickly'?",
                "question_hi": "'quickly' कौन सा शब्द भेद है?",
                "options_en": ["Noun", "Verb", "Adjective", "Adverb"],
                "options_hi": ["संज्ञा", "क्रिया", "विशेषण", "क्रिया विशेषण"],
                "answer_en": "Adverb",
                "answer_hi": "क्रिया विशेषण",
                "attempted": false
        },
        {
                "num": 70,
                "question_en": "What should an article conclusion include?",
                "question_hi": "लेख के निष्कर्ष में क्या शामिल होना चाहिए?",
                "options_en": ["New questions", "Summary of main points", "Author's address", "Unrelated facts"],
                "options_hi": ["नए प्रश्न", "मुख्य बिंदुओं का सारांश", "लेखक का पता", "असंबंधित तथ्य"],
                "answer_en": "Summary of main points",
                "answer_hi": "मुख्य बिंदुओं का सारांश",
                "attempted": false
        },
        {
                "num": 71,
                "question_en": "Which is the correct reported speech of 'I am happy'?",
                "question_hi": "'I am happy' का सही अप्रत्यक्ष कथन क्या है?",
                "options_en": ["He said he is happy", "He said he was happy", "He said he has been happy", "He said he will be happy"],
                "options_hi": ["उसने कहा वह खुश है", "उसने कहा वह खुश था", "उसने कहा वह खुश रहा है", "उसने कहा वह खुश होगा"],
                "answer_en": "He said he was happy",
                "answer_hi": "उसने कहा वह खुश था",
                "attempted": false
        },
        {
                "num": 72,
                "question_en": "What is the central theme of 'The Hundred Dresses'?",
                "question_hi": "'The Hundred Dresses' का केंद्रीय विषय क्या है?",
                "options_en": ["Fashion", "Bullying", "Friendship", "Poverty"],
                "options_hi": ["फैशन", "धौंस जमाना", "दोस्ती", "गरीबी"],
                "answer_en": "Bullying",
                "answer_hi": "धौंस जमाना",
                "attempted": false
        },
        {
                "num": 73,
                "question_en": "What does Coorg specialize in?",
                "question_hi": "कूर्ग किसके लिए विशेष है?",
                "options_en": ["Tea plantations", "Coffee plantations", "Rice fields", "Wheat fields"],
                "options_hi": ["चाय के बागान", "कॉफी के बागान", "चावल के खेत", "गेहूं के खेत"],
                "answer_en": "Coffee plantations",
                "answer_hi": "कॉफी के बागान",
                "attempted": false
        },
        {
                "num": 74,
                "question_en": "What is unique about Mijbil the otter?",
                "question_hi": "मिजबिल ऊदबिलाव के बारे में क्या खास है?",
                "options_en": ["His intelligence", "His playfulness", "His appearance", "His origin"],
                "options_hi": ["उसकी बुद्धिमत्ता", "उसका चंचल स्वभाव", "उसका रूप", "उसका मूल स्थान"],
                "answer_en": "His playfulness",
                "answer_hi": "उसका चंचल स्वभाव",
                "attempted": false
        },
        {
                "num": 75,
                "question_en": "What does the Buddha teach in 'The Sermon at Benares'?",
                "question_hi": "'The Sermon at Benares' में बुद्ध क्या सिखाते हैं?",
                "options_en": ["Wealth is important", "Death is inevitable", "Power brings happiness", "Anger is good"],
                "options_hi": ["धन महत्वपूर्ण है", "मृत्यु अटल है", "शक्ति खुशी लाती है", "गुस्सा अच्छा है"],
                "answer_en": "Death is inevitable",
                "answer_hi": "मृत्यु अटल है",
                "attempted": false
        },
        {
                "num": 76,
                "question_en": "What poetic device is 'the fog comes on little cat feet'?",
                "question_hi": "'the fog comes on little cat feet' कौन सा काव्यात्मक उपकरण है?",
                "options_en": ["Metaphor", "Simile", "Personification", "Hyperbole"],
                "options_hi": ["रूपक", "उपमा", "मानवीकरण", "अतिशयोक्ति"],
                "answer_en": "Personification",
                "answer_hi": "मानवीकरण",
                "attempted": false
        },
        {
                "num": 77,
                "question_en": "What does the poet compare fire with in 'Fire and Ice'?",
                "question_hi": "'Fire and Ice' में कवि आग की तुलना किससे करता है?",
                "options_en": ["Hate", "Desire", "Love", "Anger"],
                "options_hi": ["नफरत", "इच्छा", "प्यार", "गुस्सा"],
                "answer_en": "Desire",
                "answer_hi": "इच्छा",
                "attempted": false
        },
        {
                "num": 78,
                "question_en": "What does the tiger stare at in 'A Tiger in the Zoo'?",
                "question_hi": "'A Tiger in the Zoo' में बाघ किसे घूरता है?",
                "options_en": ["Visitors", "Stars", "Moon", "Trees"],
                "options_hi": ["आगंतुक", "तारे", "चाँद", "पेड़"],
                "answer_en": "Stars",
                "answer_hi": "तारे",
                "attempted": false
        },
        {
                "num": 79,
                "question_en": "What does the ball represent in 'The Ball Poem'?",
                "question_hi": "'The Ball Poem' में गेंद किसका प्रतिनिधित्व करती है?",
                "options_en": ["Childhood", "Loss", "Money", "Game"],
                "options_hi": ["बचपन", "हानि", "पैसा", "खेल"],
                "answer_en": "Loss",
                "answer_hi": "हानि",
                "attempted": false
        },
        {
                "num": 80,
                "question_en": "Who is Amanda constantly nagged by?",
                "question_hi": "अमांडा को कौन लगातार डांटता है?",
                "options_en": ["Teacher", "Mother", "Father", "Friend"],
                "options_hi": ["शिक्षक", "माँ", "पिता", "दोस्त"],
                "answer_en": "Mother",
                "answer_hi": "माँ",
                "attempted": false
        },
        {
                "num": 81,
                "question_en": "What does Whitman admire in animals?",
                "question_hi": "व्हिटमैन जानवरों में क्या प्रशंसा करते हैं?",
                "options_en": ["Their strength", "Their simplicity", "Their size", "Their speed"],
                "options_hi": ["उनकी ताकत", "उनकी सरलता", "उनका आकार", "उनकी गति"],
                "answer_en": "Their simplicity",
                "answer_hi": "उनकी सरलता",
                "attempted": false
        },
        {
                "num": 82,
                "question_en": "What is Custard's reaction to danger?",
                "question_hi": "खतरे के प्रति कस्टर्ड की क्या प्रतिक्रिया है?",
                "options_en": ["Runs away", "Fights bravely", "Cries", "Laughs"],
                "options_hi": ["भाग जाता है", "बहादुरी से लड़ता है", "रोता है", "हंसता है"],
                "answer_en": "Fights bravely",
                "answer_hi": "बहादुरी से लड़ता है",
                "attempted": false
        },
        {
                "num": 83,
                "question_en": "What is the main conflict in 'The Proposal'?",
                "question_hi": "'The Proposal' में मुख्य संघर्ष क्या है?",
                "options_en": ["Land dispute", "Love triangle", "Money problems", "Family honor"],
                "options_hi": ["जमीन विवाद", "प्रेम त्रिकोण", "पैसे की समस्या", "परिवार की इज्जत"],
                "answer_en": "Land dispute",
                "answer_hi": "जमीन विवाद",
                "attempted": false
        },
        {
                "num": 84,
                "question_en": "How does Griffin become invisible?",
                "question_hi": "ग्रिफिन कैसे अदृश्य होता है?",
                "options_en": ["Magic spell", "Scientific formula", "Superpower", "Divine help"],
                "options_hi": ["जादू", "वैज्ञानिक फॉर्मूला", "सुपरपावर", "दैवीय सहायता"],
                "answer_en": "Scientific formula",
                "answer_hi": "वैज्ञानिक फॉर्मूला",
                "attempted": false
        },
        {
                "num": 85,
                "question_en": "What is the moral of 'The Midnight Visitor'?",
                "question_hi": "'The Midnight Visitor' की नैतिक शिक्षा क्या है?",
                "options_en": ["Appearances can deceive", "Crime doesn't pay", "Friendship matters", "Honesty is best"],
                "options_hi": ["दिखावा धोखा दे सकता है", "अपराध का कोई फायदा नहीं", "दोस्ती मायने रखती है", "ईमानदारी सर्वोत्तम"],
                "answer_en": "Appearances can deceive",
                "answer_hi": "दिखावा धोखा दे सकता है",
                "attempted": false
        },
        {
                "num": 86,
                "question_en": "What is the twist in 'A Question of Trust'?",
                "question_hi": "'A Question of Trust' में मोड़ क्या है?",
                "options_en": ["Thief robs a thief", "Police help the thief", "Victim forgives thief", "Thief becomes honest"],
                "options_hi": ["चोर चोर को लूटता है", "पुलिस चोर की मदद करती है", "पीड़ित चोर को माफ कर देता है", "चोर ईमानदार बन जाता है"],
                "answer_en": "Thief robs a thief",
                "answer_hi": "चोर चोर को लूटता है",
                "attempted": false
        },
        {
                "num": 87,
                "question_en": "What is Matilda's tragedy in 'The Necklace'?",
                "question_hi": "'The Necklace' में मैथिल्डा का दुर्भाग्य क्या है?",
                "options_en": ["Losing beauty", "Losing wealth", "Losing borrowed necklace", "Losing husband"],
                "options_hi": ["सुंदरता खोना", "धन खोना", "उधार की हार खोना", "पति को खोना"],
                "answer_en": "Losing borrowed necklace",
                "answer_hi": "उधार की हार खोना",
                "attempted": false
        },
        {
                "num": 88,
                "question_en": "What transforms Bholi's personality?",
                "question_hi": "भोली के व्यक्तित्व को क्या बदलता है?",
                "options_en": ["Marriage", "Education", "Money", "New clothes"],
                "options_hi": ["शादी", "शिक्षा", "पैसा", "नए कपड़े"],
                "answer_en": "Education",
                "answer_hi": "शिक्षा",
                "attempted": false
        },
        {
                "num": 89,
                "question_en": "What saves Earth in 'The Book That Saved the Earth'?",
                "question_hi": "'The Book That Saved the Earth' में पृथ्वी को क्या बचाता है?",
                "options_en": ["Science book", "Nursery rhymes", "Dictionary", "Comic book"],
                "options_hi": ["विज्ञान पुस्तक", "नर्सरी कविताएँ", "शब्दकोश", "कॉमिक बुक"],
                "answer_en": "Nursery rhymes",
                "answer_hi": "नर्सरी कविताएँ",
                "attempted": false
        },
        {
                "num": 90,
                "question_en": "Which figure of speech is 'time is a thief'?",
                "question_hi": "'time is a thief' कौन सा अलंकार है?",
                "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
                "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
                "answer_en": "Metaphor",
                "answer_hi": "रूपक",
                "attempted": false
        },
        {
                "num": 91,
                "question_en": "What should a formal letter avoid?",
                "question_hi": "औपचारिक पत्र में क्या टालना चाहिए?",
                "options_en": ["Proper format", "Polite tone", "Slang words", "Clear purpose"],
                "options_hi": ["उचित प्रारूप", "विनम्र स्वर", "अशिष्ट शब्द", "स्पष्ट उद्देश्य"],
                "answer_en": "Slang words",
                "answer_hi": "अशिष्ट शब्द",
                "attempted": false
        },
        {
                "num": 92,
                "question_en": "Which tense shows completed action with present result?",
                "question_hi": "कौन सा काल वर्तमान परिणाम के साथ पूर्ण क्रिया दिखाता है?",
                "options_en": ["Simple Past", "Present Perfect", "Past Perfect", "Future Perfect"],
                "options_hi": ["सामान्य भूत", "पूर्ण वर्तमान", "पूर्ण भूत", "पूर्ण भविष्य"],
                "answer_en": "Present Perfect",
                "answer_hi": "पूर्ण वर्तमान",
                "attempted": false
        },
        {
                "num": 93,
                "question_en": "What does 'hit the books' mean?",
                "question_hi": "'hit the books' का क्या अर्थ है?",
                "options_en": ["Destroy books", "Study hard", "Sell books", "Organize books"],
                "options_hi": ["किताबें नष्ट करना", "कठिन अध्ययन करना", "किताबें बेचना", "किताबें व्यवस्थित करना"],
                "answer_en": "Study hard",
                "answer_hi": "कठिन अध्ययन करना",
                "attempted": false
        },
        {
                "num": 94,
                "question_en": "Which is NOT a type of pronoun?",
                "question_hi": "कौन सा सर्वनाम का प्रकार नहीं है?",
                "options_en": ["Personal", "Relative", "Adverbial", "Demonstrative"],
                "options_hi": ["व्यक्तिवाचक", "संबंधवाचक", "क्रिया विशेषणात्मक", "संकेतवाचक"],
                "answer_en": "Adverbial",
                "answer_hi": "क्रिया विशेषणात्मक",
                "attempted": false
        },
        {
                "num": 95,
                "question_en": "What does Anne Frank name her diary?",
                "question_hi": "ऐन फ्रैंक अपनी डायरी को क्या नाम देती है?",
                "options_en": ["Betty", "Kitty", "Dolly", "Molly"],
                "options_hi": ["बेट्टी", "किट्टी", "डॉली", "मॉली"],
                "answer_en": "Kitty",
                "answer_hi": "किट्टी",
                "attempted": false
        },
        {
                "num": 96,
                "question_en": "What literary device is 'the stars danced'?",
                "question_hi": "'the stars danced' कौन सा साहित्यिक उपकरण है?",
                "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
                "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
                "answer_en": "Personification",
                "answer_hi": "मानवीकरण",
                "attempted": false
        },
        {
                "num": 97,
                "question_en": "Which modal shows necessity?",
                "question_hi": "कौन सा मोडल आवश्यकता दर्शाता है?",
                "options_en": ["Can", "May", "Must", "Could"],
                "options_hi": ["सकना", "सकते हैं", "अवश्य", "सका"],
                "answer_en": "Must",
                "answer_hi": "अवश्य",
                "attempted": false
        },
        {
                "num": 98,
                "question_en": "What does Lencho call the post office employees?",
                "question_hi": "लेंचो डाकघर कर्मचारियों को क्या कहता है?",
                "options_en": ["Angels", "Crooks", "Friends", "Strangers"],
                "options_hi": ["देवदूत", "बेईमान", "दोस्त", "अजनबी"],
                "answer_en": "Crooks",
                "answer_hi": "बेईमान",
                "attempted": false
        },
        {
                "num": 99,
                "question_en": "What poetic form is 'Dust of Snow'?",
                "question_hi": "'Dust of Snow' किस काव्य रूप में है?",
                "options_en": ["Sonnet", "Limerick", "Free verse", "Lyric"],
                "options_hi": ["सॉनेट", "लिमरिक", "मुक्त छंद", "गीत"],
                "answer_en": "Lyric",
                "answer_hi": "गीत",
                "attempted": false
        },
        {
                "num": 100,
                "question_en": "Who is the protagonist of 'The Thief's Story'?",
                "question_hi": "'The Thief's Story' का नायक कौन है?",
                "options_en": ["Anil", "Hari Singh", "A policeman", "A shopkeeper"],
                "options_hi": ["अनिल", "हरि सिंह", "एक पुलिसकर्मी", "एक दुकानदार"],
                "answer_en": "Hari Singh",
                "answer_hi": "हरि सिंह",
                "attempted": false
        }
        ,


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