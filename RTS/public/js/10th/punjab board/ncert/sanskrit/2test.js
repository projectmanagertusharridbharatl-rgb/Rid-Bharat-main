const questions = [
        
        
                {
                    "num": 1,
                    "question_en": "Subhashitani belongs to which part of Sanskrit literature?",
                    "question_hi": "सुभाषितानि संस्कृत साहित्य के किस भाग में आते हैं?",
                    "options_en": ["Prose", "Poetry", "Drama", "Grammar"],
                    "options_hi": ["गद्य", "पद्य", "नाटक", "व्याकरण"],
                    "answer_en": "Prose",
                    "answer_hi": "गद्य",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 2,
                    "question_en": "Which chapter discusses environmental cleanliness?",
                    "question_hi": "कौन सा अध्याय पर्यावरणीय स्वच्छता पर चर्चा करता है?",
                    "options_en": ["Buddhirbalavati Sada", "Shuchiparyavaranam", "Janani Tulyavatsala", "Subhashitani"],
                    "options_hi": ["बुद्धिर्बलवती सदा", "शुचिपर्यावरणम्", "जननी तुल्यवत्सला", "सुभाषितानि"],
                    "answer_en": "Shuchiparyavaranam",
                    "answer_hi": "शुचिपर्यावरणम्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 3,
                    "question_en": "What is the meaning of 'बुद्धिर्बलवती सदा'?",
                    "question_hi": "'बुद्धिर्बलवती सदा' का क्या अर्थ है?",
                    "options_en": ["Might is right", "Intelligence is always powerful", "Mother is loving", "Nature is beautiful"],
                    "options_hi": ["बल ही सत्य है", "बुद्धि सदा बलवती होती है", "माता स्नेहमयी होती है", "प्रकृति सुंदर है"],
                    "answer_en": "Intelligence is always powerful",
                    "answer_hi": "बुद्धि सदा बलवती होती है",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 4,
                    "question_en": "Which of these is a type of Sandhi?",
                    "question_hi": "निम्नलिखित में से कौन सन्धि का प्रकार है?",
                    "options_en": ["Tatpurusha", "Dvandva", "Swar Sandhi", "Bahuvrihi"],
                    "options_hi": ["तत्पुरुष", "द्वन्द्व", "स्वर सन्धि", "बहुव्रीहि"],
                    "answer_en": "Swar Sandhi",
                    "answer_hi": "स्वर सन्धि",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 5,
                    "question_en": "What is the compound form of 'राज्ञः पुरुषः'?",
                    "question_hi": "'राज्ञः पुरुषः' का समास रूप क्या है?",
                    "options_en": ["राजपुरुषः", "राजपुरुष", "राज्ञपुरुषः", "राजपुरुषम्"],
                    "options_hi": ["राजपुरुषः", "राजपुरुष", "राज्ञपुरुषः", "राजपुरुषम्"],
                    "answer_en": "राजपुरुषः",
                    "answer_hi": "राजपुरुषः",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 6,
                    "question_en": "Which vibhakti is used in 'रामः फलं खादति'?",
                    "question_hi": "'रामः फलं खादति' में कौन सी विभक्ति प्रयुक्त हुई है?",
                    "options_en": ["Prathama", "Dvitiya", "Trutiya", "Chaturthi"],
                    "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
                    "answer_en": "Dvitiya",
                    "answer_hi": "द्वितीया",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 7,
                    "question_en": "What is the Sanskrit word for 'mother' in chapter 'Janani Tulyavatsala'?",
                    "question_hi": "'जननी तुल्यवत्सला' अध्याय में 'माँ' के लिए संस्कृत शब्द क्या है?",
                    "options_en": ["माता", "जननी", "अम्बा", "सर्वे उपर्युक्त"],
                    "options_hi": ["माता", "जननी", "अम्बा", "सभी उपर्युक्त"],
                    "answer_en": "सर्वे उपर्युक्त",
                    "answer_hi": "सभी उपर्युक्त",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 8,
                    "question_en": "Which lakara is used in 'गच्छति'?",
                    "question_hi": "'गच्छति' में कौन सा लकार प्रयुक्त हुआ है?",
                    "options_en": ["Lat", "Lit", "Lut", "Lrt"],
                    "options_hi": ["लट्", "लिट्", "लुट्", "लृट्"],
                    "answer_en": "Lat",
                    "answer_hi": "लट्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 9,
                    "question_en": "What is the meaning of 'वीरवनिता'?",
                    "question_hi": "'वीरवनिता' का क्या अर्थ है?",
                    "options_en": ["Brave woman", "Beautiful nature", "Intelligent man", "Divine power"],
                    "options_hi": ["वीर स्त्री", "सुंदर प्रकृति", "बुद्धिमान पुरुष", "दैवीय शक्ति"],
                    "answer_en": "Brave woman",
                    "answer_hi": "वीर स्त्री",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 10,
                    "question_en": "Which chapter contains philosophical thoughts about nature as witness?",
                    "question_hi": "कौन सा अध्याय प्रकृति को साक्षी रूप में दर्शाता है?",
                    "options_en": ["Sharanagatih", "Vichitrah Sakshi", "Sauhardam Prakriteh Shobha", "Veeravanita"],
                    "options_hi": ["शरणागतिः", "विचित्रः साक्षी", "सौहार्दं प्रकृतेः शोभा", "वीरवनिता"],
                    "answer_en": "Vichitrah Sakshi",
                    "answer_hi": "विचित्रः साक्षी",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 11,
                    "question_en": "What is the Sanskrit term for 'harmony' in chapter 'Sauhardam Prakriteh Shobha'?",
                    "question_hi": "'सौहार्दं प्रकृतेः शोभा' अध्याय में 'सद्भाव' के लिए संस्कृत शब्द क्या है?",
                    "options_en": ["शोभा", "सौहार्दम्", "प्रकृतिः", "विचित्रः"],
                    "options_hi": ["शोभा", "सौहार्दम्", "प्रकृतिः", "विचित्रः"],
                    "answer_en": "सौहार्दम्",
                    "answer_hi": "सौहार्दम्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 12,
                    "question_en": "Which of these is a Dhatu?",
                    "question_hi": "निम्नलिखित में से कौन धातु है?",
                    "options_en": ["पठ्", "पुस्तकम्", "विद्यालयः", "शिक्षकः"],
                    "options_hi": ["पठ्", "पुस्तकम्", "विद्यालयः", "शिक्षकः"],
                    "answer_en": "पठ्",
                    "answer_hi": "पठ्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 13,
                    "question_en": "What is the Pratyaya in 'गन्तव्यम्'?",
                    "question_hi": "'गन्तव्यम्' में प्रत्यय कौन सा है?",
                    "options_en": ["क्त", "क्तवतु", "तव्यत्", "अनीयर्"],
                    "options_hi": ["क्त", "क्तवतु", "तव्यत्", "अनीयर्"],
                    "answer_en": "तव्यत्",
                    "answer_hi": "तव्यत्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 14,
                    "question_en": "Which Samas is 'चक्रधरः' an example of?",
                    "question_hi": "'चक्रधरः' किस समास का उदाहरण है?",
                    "options_en": ["Tatpurusha", "Bahuvrihi", "Dvandva", "Karmadharaya"],
                    "options_hi": ["तत्पुरुष", "बहुव्रीहि", "द्वन्द्व", "कर्मधारय"],
                    "answer_en": "Bahuvrihi",
                    "answer_hi": "बहुव्रीहि",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 15,
                    "question_en": "What is the Sandhi in 'न + अस्ति = नास्ति'?",
                    "question_hi": "'न + अस्ति = नास्ति' में कौन सी सन्धि है?",
                    "options_en": ["Guna", "Vriddhi", "Yan", "Aadesh"],
                    "options_hi": ["गुण", "वृद्धि", "यण्", "आदेश"],
                    "answer_en": "Aadesh",
                    "answer_hi": "आदेश",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 16,
                    "question_en": "Which chapter emphasizes surrender to God?",
                    "question_hi": "कौन सा अध्याय ईश्वर के प्रति समर्पण पर जोर देता है?",
                    "options_en": ["Sharanagatih", "Vichitrah Sakshi", "Veeravanita", "Subhashitani"],
                    "options_hi": ["शरणागतिः", "विचित्रः साक्षी", "वीरवनिता", "सुभाषितानि"],
                    "answer_en": "Sharanagatih",
                    "answer_hi": "शरणागतिः",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 17,
                    "question_en": "What is the Sanskrit term for 'environment'?",
                    "question_hi": "'पर्यावरण' के लिए संस्कृत शब्द क्या है?",
                    "options_en": ["प्रकृतिः", "पर्यावरणम्", "वातावरणम्", "उभयम्"],
                    "options_hi": ["प्रकृतिः", "पर्यावरणम्", "वातावरणम्", "दोनों"],
                    "answer_en": "पर्यावरणम्",
                    "answer_hi": "पर्यावरणम्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 18,
                    "question_en": "Which Lakar is used to express future tense?",
                    "question_hi": "भविष्यत् काल व्यक्त करने के लिए कौन सा लकार प्रयुक्त होता है?",
                    "options_en": ["Lat", "Lrt", "Lot", "Lang"],
                    "options_hi": ["लट्", "लृट्", "लोट्", "लङ्"],
                    "answer_en": "Lrt",
                    "answer_hi": "लृट्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 19,
                    "question_en": "What is the Pratyaya in 'कर्तुम्'?",
                    "question_hi": "'कर्तुम्' में प्रत्यय कौन सा है?",
                    "options_en": ["तुमुन्", "क्त्वा", "ल्यप्", "शतृ"],
                    "options_hi": ["तुमुन्", "क्त्वा", "ल्यप्", "शतृ"],
                    "answer_en": "तुमुन्",
                    "answer_hi": "तुमुन्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 20,
                    "question_en": "Which chapter discusses the beauty of nature?",
                    "question_hi": "कौन सा अध्याय प्रकृति की सुंदरता पर चर्चा करता है?",
                    "options_en": ["Shuchiparyavaranam", "Sauhardam Prakriteh Shobha", "Vichitrah Sakshi", "Veeravanita"],
                    "options_hi": ["शुचिपर्यावरणम्", "सौहार्दं प्रकृतेः शोभा", "विचित्रः साक्षी", "वीरवनिता"],
                    "answer_en": "Sauhardam Prakriteh Shobha",
                    "answer_hi": "सौहार्दं प्रकृतेः शोभा",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 21,
                    "question_en": "What is the meaning of 'शरणागतिः'?",
                    "question_hi": "'शरणागतिः' का क्या अर्थ है?",
                    "options_en": ["Surrender", "Nature", "Bravery", "Intelligence"],
                    "options_hi": ["शरणागति", "प्रकृति", "वीरता", "बुद्धि"],
                    "answer_en": "Surrender",
                    "answer_hi": "शरणागति",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 22,
                    "question_en": "Which of these is an Avyaya?",
                    "question_hi": "निम्नलिखित में से कौन अव्यय है?",
                    "options_en": ["च", "रामः", "पुस्तकम्", "गच्छति"],
                    "options_hi": ["च", "रामः", "पुस्तकम्", "गच्छति"],
                    "answer_en": "च",
                    "answer_hi": "च",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 23,
                    "question_en": "What is the Sandhi in 'ते + अपि = तेऽपि'?",
                    "question_hi": "'ते + अपि = तेऽपि' में कौन सी सन्धि है?",
                    "options_en": ["Guna", "Vriddhi", "Savarna Deergha", "Ayadi"],
                    "options_hi": ["गुण", "वृद्धि", "सवर्ण दीर्घ", "अयादि"],
                    "answer_en": "Savarna Deergha",
                    "answer_hi": "सवर्ण दीर्घ",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 24,
                    "question_en": "Which Samas is 'राजपुरुषः' an example of?",
                    "question_hi": "'राजपुरुषः' किस समास का उदाहरण है?",
                    "options_en": ["Tatpurusha", "Bahuvrihi", "Dvandva", "Karmadharaya"],
                    "options_hi": ["तत्पुरुष", "बहुव्रीहि", "द्वन्द्व", "कर्मधारय"],
                    "answer_en": "Tatpurusha",
                    "answer_hi": "तत्पुरुष",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 25,
                    "question_en": "What is the Sanskrit term for 'student life'?",
                    "question_hi": "'विद्यार्थी जीवन' के लिए संस्कृत शब्द क्या है?",
                    "options_en": ["विद्यार्थी जीवनम्", "छात्र जीवनम्", "शिष्य जीवनम्", "सर्वे उपर्युक्त"],
                    "options_hi": ["विद्यार्थी जीवनम्", "छात्र जीवनम्", "शिष्य जीवनम्", "सभी उपर्युक्त"],
                    "answer_en": "विद्यार्थी जीवनम्",
                    "answer_hi": "विद्यार्थी जीवनम्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 26,
                    "question_en": "Which chapter contains moral sayings?",
                    "question_hi": "कौन सा अध्याय नैतिक कहावतें शामिल करता है?",
                    "options_en": ["Subhashitani", "Shuchiparyavaranam", "Buddhirbalavati Sada", "Janani Tulyavatsala"],
                    "options_hi": ["सुभाषितानि", "शुचिपर्यावरणम्", "बुद्धिर्बलवती सदा", "जननी तुल्यवत्सला"],
                    "answer_en": "Subhashitani",
                    "answer_hi": "सुभाषितानि",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 27,
                    "question_en": "What is the meaning of 'विचित्रः साक्षी'?",
                    "question_hi": "'विचित्रः साक्षी' का क्या अर्थ है?",
                    "options_en": ["Strange witness", "Beautiful nature", "Brave woman", "Divine power"],
                    "options_hi": ["विचित्र साक्षी", "सुंदर प्रकृति", "वीर स्त्री", "दैवीय शक्ति"],
                    "answer_en": "Strange witness",
                    "answer_hi": "विचित्र साक्षी",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 28,
                    "question_en": "Which of these is a Kriya?",
                    "question_hi": "निम्नलिखित में से कौन क्रिया है?",
                    "options_en": ["पठति", "पुस्तकम्", "विद्यालयः", "शिक्षकः"],
                    "options_hi": ["पठति", "पुस्तकम्", "विद्यालयः", "शिक्षकः"],
                    "answer_en": "पठति",
                    "answer_hi": "पठति",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 29,
                    "question_en": "What is the Pratyaya in 'गन्तव्यम्'?",
                    "question_hi": "'गन्तव्यम्' में प्रत्यय कौन सा है?",
                    "options_en": ["क्त", "क्तवतु", "तव्यत्", "अनीयर्"],
                    "options_hi": ["क्त", "क्तवतु", "तव्यत्", "अनीयर्"],
                    "answer_en": "तव्यत्",
                    "answer_hi": "तव्यत्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 30,
                    "question_en": "Which Samas is 'चक्रधरः' an example of?",
                    "question_hi": "'चक्रधरः' किस समास का उदाहरण है?",
                    "options_en": ["Tatpurusha", "Bahuvrihi", "Dvandva", "Karmadharaya"],
                    "options_hi": ["तत्पुरुष", "बहुव्रीहि", "द्वन्द्व", "कर्मधारय"],
                    "answer_en": "Bahuvrihi",
                    "answer_hi": "बहुव्रीहि",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 31,
                    "question_en": "What is the Sandhi in 'न + अस्ति = नास्ति'?",
                    "question_hi": "'न + अस्ति = नास्ति' में कौन सी सन्धि है?",
                    "options_en": ["Guna", "Vriddhi", "Yan", "Aadesh"],
                    "options_hi": ["गुण", "वृद्धि", "यण्", "आदेश"],
                    "answer_en": "Aadesh",
                    "answer_hi": "आदेश",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 32,
                    "question_en": "Which chapter emphasizes surrender to God?",
                    "question_hi": "कौन सा अध्याय ईश्वर के प्रति समर्पण पर जोर देता है?",
                    "options_en": ["Sharanagatih", "Vichitrah Sakshi", "Veeravanita", "Subhashitani"],
                    "options_hi": ["शरणागतिः", "विचित्रः साक्षी", "वीरवनिता", "सुभाषितानि"],
                    "answer_en": "Sharanagatih",
                    "answer_hi": "शरणागतिः",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 33,
                    "question_en": "What is the Sanskrit term for 'environment'?",
                    "question_hi": "'पर्यावरण' के लिए संस्कृत शब्द क्या है?",
                    "options_en": ["प्रकृतिः", "पर्यावरणम्", "वातावरणम्", "उभयम्"],
                    "options_hi": ["प्रकृतिः", "पर्यावरणम्", "वातावरणम्", "दोनों"],
                    "answer_en": "पर्यावरणम्",
                    "answer_hi": "पर्यावरणम्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 34,
                    "question_en": "Which Lakar is used to express future tense?",
                    "question_hi": "भविष्यत् काल व्यक्त करने के लिए कौन सा लकार प्रयुक्त होता है?",
                    "options_en": ["Lat", "Lrt", "Lot", "Lang"],
                    "options_hi": ["लट्", "लृट्", "लोट्", "लङ्"],
                    "answer_en": "Lrt",
                    "answer_hi": "लृट्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 35,
                    "question_en": "What is the Pratyaya in 'कर्तुम्'?",
                    "question_hi": "'कर्तुम्' में प्रत्यय कौन सा है?",
                    "options_en": ["तुमुन्", "क्त्वा", "ल्यप्", "शतृ"],
                    "options_hi": ["तुमुन्", "क्त्वा", "ल्यप्", "शतृ"],
                    "answer_en": "तुमुन्",
                    "answer_hi": "तुमुन्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 36,
                    "question_en": "Which chapter discusses the beauty of nature?",
                    "question_hi": "कौन सा अध्याय प्रकृति की सुंदरता पर चर्चा करता है?",
                    "options_en": ["Shuchiparyavaranam", "Sauhardam Prakriteh Shobha", "Vichitrah Sakshi", "Veeravanita"],
                    "options_hi": ["शुचिपर्यावरणम्", "सौहार्दं प्रकृतेः शोभा", "विचित्रः साक्षी", "वीरवनिता"],
                    "answer_en": "Sauhardam Prakriteh Shobha",
                    "answer_hi": "सौहार्दं प्रकृतेः शोभा",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 37,
                    "question_en": "What is the meaning of 'शरणागतिः'?",
                    "question_hi": "'शरणागतिः' का क्या अर्थ है?",
                    "options_en": ["Surrender", "Nature", "Bravery", "Intelligence"],
                    "options_hi": ["शरणागति", "प्रकृति", "वीरता", "बुद्धि"],
                    "answer_en": "Surrender",
                    "answer_hi": "शरणागति",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 38,
                    "question_en": "Which of these is an Avyaya?",
                    "question_hi": "निम्नलिखित में से कौन अव्यय है?",
                    "options_en": ["च", "रामः", "पुस्तकम्", "गच्छति"],
                    "options_hi": ["च", "रामः", "पुस्तकम्", "गच्छति"],
                    "answer_en": "च",
                    "answer_hi": "च",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 39,
                    "question_en": "What is the Sandhi in 'ते + अपि = तेऽपि'?",
                    "question_hi": "'ते + अपि = तेऽपि' में कौन सी सन्धि है?",
                    "options_en": ["Guna", "Vriddhi", "Savarna Deergha", "Ayadi"],
                    "options_hi": ["गुण", "वृद्धि", "सवर्ण दीर्घ", "अयादि"],
                    "answer_en": "Savarna Deergha",
                    "answer_hi": "सवर्ण दीर्घ",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 40,
                    "question_en": "Which Samas is 'राजपुरुषः' an example of?",
                    "question_hi": "'राजपुरुषः' किस समास का उदाहरण है?",
                    "options_en": ["Tatpurusha", "Bahuvrihi", "Dvandva", "Karmadharaya"],
                    "options_hi": ["तत्पुरुष", "बहुव्रीहि", "द्वन्द्व", "कर्मधारय"],
                    "answer_en": "Tatpurusha",
                    "answer_hi": "तत्पुरुष",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 41,
                    "question_en": "What is the Sanskrit term for 'student life'?",
                    "question_hi": "'विद्यार्थी जीवन' के लिए संस्कृत शब्द क्या है?",
                    "options_en": ["विद्यार्थी जीवनम्", "छात्र जीवनम्", "शिष्य जीवनम्", "सर्वे उपर्युक्त"],
                    "options_hi": ["विद्यार्थी जीवनम्", "छात्र जीवनम्", "शिष्य जीवनम्", "सभी उपर्युक्त"],
                    "answer_en": "विद्यार्थी जीवनम्",
                    "answer_hi": "विद्यार्थी जीवनम्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 42,
                    "question_en": "Which chapter contains moral sayings?",
                    "question_hi": "कौन सा अध्याय नैतिक कहावतें शामिल करता है?",
                    "options_en": ["Subhashitani", "Shuchiparyavaranam", "Buddhirbalavati Sada", "Janani Tulyavatsala"],
                    "options_hi": ["सुभाषितानि", "शुचिपर्यावरणम्", "बुद्धिर्बलवती सदा", "जननी तुल्यवत्सला"],
                    "answer_en": "Subhashitani",
                    "answer_hi": "सुभाषितानि",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 43,
                    "question_en": "What is the meaning of 'विचित्रः साक्षी'?",
                    "question_hi": "'विचित्रः साक्षी' का क्या अर्थ है?",
                    "options_en": ["Strange witness", "Beautiful nature", "Brave woman", "Divine power"],
                    "options_hi": ["विचित्र साक्षी", "सुंदर प्रकृति", "वीर स्त्री", "दैवीय शक्ति"],
                    "answer_en": "Strange witness",
                    "answer_hi": "विचित्र साक्षी",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 44,
                    "question_en": "Which of these is a Kriya?",
                    "question_hi": "निम्नलिखित में से कौन क्रिया है?",
                    "options_en": ["पठति", "पुस्तकम्", "विद्यालयः", "शिक्षकः"],
                    "options_hi": ["पठति", "पुस्तकम्", "विद्यालयः", "शिक्षकः"],
                    "answer_en": "पठति",
                    "answer_hi": "पठति",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 45,
                    "question_en": "What is the Pratyaya in 'गन्तव्यम्'?",
                    "question_hi": "'गन्तव्यम्' में प्रत्यय कौन सा है?",
                    "options_en": ["क्त", "क्तवतु", "तव्यत्", "अनीयर्"],
                    "options_hi": ["क्त", "क्तवतु", "तव्यत्", "अनीयर्"],
                    "answer_en": "तव्यत्",
                    "answer_hi": "तव्यत्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 46,
                    "question_en": "Which Samas is 'चक्रधरः' an example of?",
                    "question_hi": "'चक्रधरः' किस समास का उदाहरण है?",
                    "options_en": ["Tatpurusha", "Bahuvrihi", "Dvandva", "Karmadharaya"],
                    "options_hi": ["तत्पुरुष", "बहुव्रीहि", "द्वन्द्व", "कर्मधारय"],
                    "answer_en": "Bahuvrihi",
                    "answer_hi": "बहुव्रीहि",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 47,
                    "question_en": "What is the Sandhi in 'न + अस्ति = नास्ति'?",
                    "question_hi": "'न + अस्ति = नास्ति' में कौन सी सन्धि है?",
                    "options_en": ["Guna", "Vriddhi", "Yan", "Aadesh"],
                    "options_hi": ["गुण", "वृद्धि", "यण्", "आदेश"],
                    "answer_en": "Aadesh",
                    "answer_hi": "आदेश",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 48,
                    "question_en": "Which chapter emphasizes surrender to God?",
                    "question_hi": "कौन सा अध्याय ईश्वर के प्रति समर्पण पर जोर देता है?",
                    "options_en": ["Sharanagatih", "Vichitrah Sakshi", "Veeravanita", "Subhashitani"],
                    "options_hi": ["शरणागतिः", "विचित्रः साक्षी", "वीरवनिता", "सुभाषितानि"],
                    "answer_en": "Sharanagatih",
                    "answer_hi": "शरणागतिः",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 49,
                    "question_en": "What is the Sanskrit term for 'environment'?",
                    "question_hi": "'पर्यावरण' के लिए संस्कृत शब्द क्या है?",
                    "options_en": ["प्रकृतिः", "पर्यावरणम्", "वातावरणम्", "उभयम्"],
                    "options_hi": ["प्रकृतिः", "पर्यावरणम्", "वातावरणम्", "दोनों"],
                    "answer_en": "पर्यावरणम्",
                    "answer_hi": "पर्यावरणम्",
                    "attempted": false,
                    "selected": ""
                },
                {
                    "num": 50,
                    "question_en": "Which Lakar is used to express future tense?",
                    "question_hi": "भविष्यत् काल व्यक्त करने के लिए कौन सा लकार प्रयुक्त होता है?",
                    "options_en": ["Lat", "Lrt", "Lot", "Lang"],
                    "options_hi": ["लट्", "लृट्", "लोट्", "लङ्"],
                    "answer_en": "Lrt",
                    "answer_hi": "लृट्",
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
