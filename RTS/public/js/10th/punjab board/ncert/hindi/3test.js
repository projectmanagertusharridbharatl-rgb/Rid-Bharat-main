const questions = [


        
                {
                  "num": 1,
                  "question_en": "Which type of Sandhi is in 'राम + ईश = रमेश'?",
                  "question_hi": "'राम + ईश = रमेश' में कौन-सी संधि है?",
                  "options_en": ["Swar Sandhi", "Vyanjan Sandhi", "Visarga Sandhi", "None"],
                  "options_hi": ["स्वर संधि", "व्यंजन संधि", "विसर्ग संधि", "कोई नहीं"],
                  "answer_en": "Swar Sandhi",
                  "answer_hi": "स्वर संधि",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 2,
                  "question_en": "Which of the following is a 'Tatsam' word?",
                  "question_hi": "निम्न में से कौन-सा 'तत्सम' शब्द है?",
                  "options_en": ["पुस्तक", "अग्नि", "किताब", "खिड़की"],
                  "options_hi": ["पुस्तक", "अग्नि", "किताब", "खिड़की"],
                  "answer_en": "अग्नि",
                  "answer_hi": "अग्नि",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 3,
                  "question_en": "What is the 'Vachya' in 'राम ने रावण को मारा'?",
                  "question_hi": "'राम ने रावण को मारा' में कौन-सा वाच्य है?",
                  "options_en": ["Kartrivachya", "Karmvachya", "Bhavvachya", "None"],
                  "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "कोई नहीं"],
                  "answer_en": "Kartrivachya",
                  "answer_hi": "कर्तृवाच्य",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 4,
                  "question_en": "Which punctuation mark is used at the end of a question?",
                  "question_hi": "प्रश्न के अंत में कौन-सा विराम चिह्न प्रयोग होता है?",
                  "options_en": ["Full stop", "Comma", "Question mark", "Exclamation"],
                  "options_hi": ["पूर्ण विराम", "अल्प विराम", "प्रश्नवाचक चिह्न", "विस्मयादिबोधक"],
                  "answer_en": "Question mark",
                  "answer_hi": "प्रश्नवाचक चिह्न",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 5,
                  "question_en": "Which of the following is a 'Samas' compound word?",
                  "question_hi": "निम्न में से कौन-सा 'समास' युक्त शब्द है?",
                  "options_en": ["विद्यालय", "पाठशाला", "रसोईघर", "All of these"],
                  "options_hi": ["विद्यालय", "पाठशाला", "रसोईघर", "सभी"],
                  "answer_en": "All of these",
                  "answer_hi": "सभी",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 6,
                  "question_en": "Which 'Alankar' is in 'कमल के समान मुख'?",
                  "question_hi": "'कमल के समान मुख' में कौन-सा अलंकार है?",
                  "options_en": ["Upma", "Rupak", "Anupras", "Yamak"],
                  "options_hi": ["उपमा", "रूपक", "अनुप्रास", "यमक"],
                  "answer_en": "Upma",
                  "answer_hi": "उपमा",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 7,
                  "question_en": "Which 'Ras' is dominant in heroic poetry?",
                  "question_hi": "वीरता के काव्य में प्रमुख रस कौन-सा होता है?",
                  "options_en": ["Shringar", "Veer", "Karun", "Hasya"],
                  "options_hi": ["शृंगार", "वीर", "करुण", "हास्य"],
                  "answer_en": "Veer",
                  "answer_hi": "वीर",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 8,
                  "question_en": "What is the meaning of the idiom 'आँख का तारा'?",
                  "question_hi": "'आँख का तारा' मुहावरे का अर्थ क्या है?",
                  "options_en": ["Star in the eye", "Very dear", "Blind", "Angry"],
                  "options_hi": ["आँख में तारा", "बहुत प्यारा", "अंधा", "गुस्सा"],
                  "answer_en": "Very dear",
                  "answer_hi": "बहुत प्यारा",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 9,
                  "question_en": "Which 'Vibhakti' is used in 'राम के लिए'?",
                  "question_hi": "'राम के लिए' में कौन-सी विभक्ति है?",
                  "options_en": ["Prathma", "Dvitiya", "Saptami", "Chaturthi"],
                  "options_hi": ["प्रथमा", "द्वितीया", "सप्तमी", "चतुर्थी"],
                  "answer_en": "Chaturthi",
                  "answer_hi": "चतुर्थी",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 10,
                  "question_en": "What is the 'Visheshan' in 'सुंदर फूल'?",
                  "question_hi": "'सुंदर फूल' में विशेषण क्या है?",
                  "options_en": ["फूल", "सुंदर", "Both", "None"],
                  "options_hi": ["फूल", "सुंदर", "दोनों", "कोई नहीं"],
                  "answer_en": "सुंदर",
                  "answer_hi": "सुंदर",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 11,
                  "question_en": "Which type of 'Samas' is 'राजपुत्र'?",
                  "question_hi": "'राजपुत्र' किस समास का उदाहरण है?",
                  "options_en": ["Tatpurush", "Karmadharay", "Dvandva", "Bahuvrihi"],
                  "options_hi": ["तत्पुरुष", "कर्मधारय", "द्वंद्व", "बहुव्रीहि"],
                  "answer_en": "Tatpurush",
                  "answer_hi": "तत्पुरुष",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 12,
                  "question_en": "Which 'Kaal' is in 'वह खेल रहा है'?",
                  "question_hi": "'वह खेल रहा है' में कौन-सा काल है?",
                  "options_en": ["Past", "Present", "Future", "None"],
                  "options_hi": ["भूतकाल", "वर्तमान काल", "भविष्यत काल", "कोई नहीं"],
                  "answer_en": "Present",
                  "answer_hi": "वर्तमान काल",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 13,
                  "question_en": "What is the 'Kriya' in 'बच्चा दौड़ता है'?",
                  "question_hi": "'बच्चा दौड़ता है' में क्रिया क्या है?",
                  "options_en": ["बच्चा", "दौड़ता", "है", "None"],
                  "options_hi": ["बच्चा", "दौड़ता", "है", "कोई नहीं"],
                  "answer_en": "दौड़ता",
                  "answer_hi": "दौड़ता",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 14,
                  "question_en": "Which 'Sarvanam' is in 'यह मेरी किताब है'?",
                  "question_hi": "'यह मेरी किताब है' में सर्वनाम क्या है?",
                  "options_en": ["यह", "मेरी", "किताब", "है"],
                  "options_hi": ["यह", "मेरी", "किताब", "है"],
                  "answer_en": "यह",
                  "answer_hi": "यह",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 15,
                  "question_en": "Which 'Vachya' is in 'पत्र लिखा जाता है'?",
                  "question_hi": "'पत्र लिखा जाता है' में कौन-सा वाच्य है?",
                  "options_en": ["Kartrivachya", "Karmvachya", "Bhavvachya", "None"],
                  "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "कोई नहीं"],
                  "answer_en": "Karmvachya",
                  "answer_hi": "कर्मवाच्य",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 16,
                  "question_en": "What is the 'Visheshya' in 'लाल गुलाब'?",
                  "question_hi": "'लाल गुलाब' में विशेष्य क्या है?",
                  "options_en": ["लाल", "गुलाब", "Both", "None"],
                  "options_hi": ["लाल", "गुलाब", "दोनों", "कोई नहीं"],
                  "answer_en": "गुलाब",
                  "answer_hi": "गुलाब",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 17,
                  "question_en": "Which 'Sandhi' is in 'सदा + एव = सदैव'?",
                  "question_hi": "'सदा + एव = सदैव' में कौन-सी संधि है?",
                  "options_en": ["Swar Sandhi", "Vyanjan Sandhi", "Visarga Sandhi", "None"],
                  "options_hi": ["स्वर संधि", "व्यंजन संधि", "विसर्ग संधि", "कोई नहीं"],
                  "answer_en": "Swar Sandhi",
                  "answer_hi": "स्वर संधि",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 18,
                  "question_en": "Which 'Ling' is 'सुन्दरता'?",
                  "question_hi": "'सुन्दरता' किस लिंग का शब्द है?",
                  "options_en": ["Pulling", "Striling", "Both", "None"],
                  "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "दोनों", "कोई नहीं"],
                  "answer_en": "Striling",
                  "answer_hi": "स्त्रीलिंग",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 19,
                  "question_en": "Which 'Vachan' is 'लड़के'?",
                  "question_hi": "'लड़के' किस वचन का शब्द है?",
                  "options_en": ["Singular", "Plural", "Both", "None"],
                  "options_hi": ["एकवचन", "बहुवचन", "दोनों", "कोई नहीं"],
                  "answer_en": "Plural",
                  "answer_hi": "बहुवचन",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 20,
                  "question_en": "Which 'Alankar' is in 'चंद्र खिलखिलाया'?",
                  "question_hi": "'चंद्र खिलखिलाया' में कौन-सा अलंकार है?",
                  "options_en": ["Upma", "Rupak", "Anupras", "Yamak"],
                  "options_hi": ["उपमा", "रूपक", "अनुप्रास", "यमक"],
                  "answer_en": "Rupak",
                  "answer_hi": "रूपक",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 21,
                  "question_en": "What is the 'Samas' in 'चौराहा'?",
                  "question_hi": "'चौराहा' में कौन-सा समास है?",
                  "options_en": ["Tatpurush", "Dvigu", "Dvandva", "Bahuvrihi"],
                  "options_hi": ["तत्पुरुष", "द्विगु", "द्वंद्व", "बहुव्रीहि"],
                  "answer_en": "Dvigu",
                  "answer_hi": "द्विगु",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 22,
                  "question_en": "Which 'Vachya' is in 'मैं पढ़ता हूँ'?",
                  "question_hi": "'मैं पढ़ता हूँ' में कौन-सा वाच्य है?",
                  "options_en": ["Kartrivachya", "Karmvachya", "Bhavvachya", "None"],
                  "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "कोई नहीं"],
                  "answer_en": "Kartrivachya",
                  "answer_hi": "कर्तृवाच्य",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 23,
                  "question_en": "Which 'Sandhi' is in 'देव + आलय = देवालय'?",
                  "question_hi": "'देव + आलय = देवालय' में कौन-सी संधि है?",
                  "options_en": ["Swar Sandhi", "Vyanjan Sandhi", "Visarga Sandhi", "None"],
                  "options_hi": ["स्वर संधि", "व्यंजन संधि", "विसर्ग संधि", "कोई नहीं"],
                  "answer_en": "Swar Sandhi",
                  "answer_hi": "स्वर संधि",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 24,
                  "question_en": "Which 'Ras' is in 'हाय! मेरा बेटा मर गया'?",
                  "question_hi": "'हाय! मेरा बेटा मर गया' में कौन-सा रस है?",
                  "options_en": ["Shringar", "Veer", "Karun", "Hasya"],
                  "options_hi": ["शृंगार", "वीर", "करुण", "हास्य"],
                  "answer_en": "Karun",
                  "answer_hi": "करुण",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 25,
                  "question_en": "What is the 'Muhavara' meaning of 'अंधे के हाथ बटेर लगना'?",
                  "question_hi": "'अंधे के हाथ बटेर लगना' मुहावरे का अर्थ क्या है?",
                  "options_en": ["To get lucky", "To lose something", "To work hard", "None"],
                  "options_hi": ["भाग्यवान होना", "खो देना", "मेहनत करना", "कोई नहीं"],
                  "answer_en": "To get lucky",
                  "answer_hi": "भाग्यवान होना",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 26,
                  "question_en": "Which 'Alankar' is in 'मुख चंद्रमा सा'?",
                  "question_hi": "'मुख चंद्रमा सा' में कौन-सा अलंकार है?",
                  "options_en": ["Upma", "Rupak", "Anupras", "Yamak"],
                  "options_hi": ["उपमा", "रूपक", "अनुप्रास", "यमक"],
                  "answer_en": "Upma",
                  "answer_hi": "उपमा",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 27,
                  "question_en": "Which 'Vibhakti' is in 'गंगा में'?",
                  "question_hi": "'गंगा में' में कौन-सी विभक्ति है?",
                  "options_en": ["Prathma", "Dvitiya", "Saptami", "None"],
                  "options_hi": ["प्रथमा", "द्वितीया", "सप्तमी", "कोई नहीं"],
                  "answer_en": "Saptami",
                  "answer_hi": "सप्तमी",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 28,
                  "question_en": "What is the 'Visheshan' in 'तेज धूप'?",
                  "question_hi": "'तेज धूप' में विशेषण क्या है?",
                  "options_en": ["तेज", "धूप", "Both", "None"],
                  "options_hi": ["तेज", "धूप", "दोनों", "कोई नहीं"],
                  "answer_en": "तेज",
                  "answer_hi": "तेज",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 29,
                  "question_en": "Which 'Kaal' is in 'वह खेलेगा'?",
                  "question_hi": "'वह खेलेगा' में कौन-सा काल है?",
                  "options_en": ["Past", "Present", "Future", "None"],
                  "options_hi": ["भूतकाल", "वर्तमान काल", "भविष्यत काल", "कोई नहीं"],
                  "answer_en": "Future",
                  "answer_hi": "भविष्यत काल",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 30,
                  "question_en": "What is the 'Kriya' in 'वह गाना गाती है'?",
                  "question_hi": "'वह गाना गाती है' में क्रिया क्या है?",
                  "options_en": ["वह", "गाना", "गाती", "है"],
                  "options_hi": ["वह", "गाना", "गाती", "है"],
                  "answer_en": "गाती",
                  "answer_hi": "गाती",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 31,
                  "question_en": "Which 'Sarvanam' is in 'वह बाजार गया'?",
                  "question_hi": "'वह बाजार गया' में सर्वनाम क्या है?",
                  "options_en": ["वह", "बाजार", "गया", "None"],
                  "options_hi": ["वह", "बाजार", "गया", "कोई नहीं"],
                  "answer_en": "वह",
                  "answer_hi": "वह",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 32,
                  "question_en": "Which 'Vachya' is in 'मैंने फल खाया'?",
                  "question_hi": "'मैंने फल खाया' में कौन-सा वाच्य है?",
                  "options_en": ["Kartrivachya", "Karmvachya", "Bhavvachya", "None"],
                  "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "कोई नहीं"],
                  "answer_en": "Kartrivachya",
                  "answer_hi": "कर्तृवाच्य",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 33,
                  "question_en": "What is the 'Visheshya' in 'नीला आकाश'?",
                  "question_hi": "'नीला आकाश' में विशेष्य क्या है?",
                  "options_en": ["नीला", "आकाश", "Both", "None"],
                  "options_hi": ["नीला", "आकाश", "दोनों", "कोई नहीं"],
                  "answer_en": "आकाश",
                  "answer_hi": "आकाश",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 34,
                  "question_en": "Which 'Sandhi' is in 'हिम + आलय = हिमालय'?",
                  "question_hi": "'हिम + आलय = हिमालय' में कौन-सी संधि है?",
                  "options_en": ["Swar Sandhi", "Vyanjan Sandhi", "Visarga Sandhi", "None"],
                  "options_hi": ["स्वर संधि", "व्यंजन संधि", "विसर्ग संधि", "कोई नहीं"],
                  "answer_en": "Swar Sandhi",
                  "answer_hi": "स्वर संधि",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 35,
                  "question_en": "Which 'Ling' is 'पुस्तक'?",
                  "question_hi": "'पुस्तक' किस लिंग का शब्द है?",
                  "options_en": ["Pulling", "Striling", "Both", "None"],
                  "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "दोनों", "कोई नहीं"],
                  "answer_en": "Striling",
                  "answer_hi": "स्त्रीलिंग",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 36,
                  "question_en": "Which 'Vachan' is 'किताबें'?",
                  "question_hi": "'किताबें' किस वचन का शब्द है?",
                  "options_en": ["Singular", "Plural", "Both", "None"],
                  "options_hi": ["एकवचन", "बहुवचन", "दोनों", "कोई नहीं"],
                  "answer_en": "Plural",
                  "answer_hi": "बहुवचन",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 37,
                  "question_en": "Which 'Alankar' is in 'काली घटा का घमंड घटा'?",
                  "question_hi": "'काली घटा का घमंड घटा' में कौन-सा अलंकार है?",
                  "options_en": ["Upma", "Rupak", "Anupras", "Yamak"],
                  "options_hi": ["उपमा", "रूपक", "अनुप्रास", "यमक"],
                  "answer_en": "Anupras",
                  "answer_hi": "अनुप्रास",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 38,
                  "question_en": "What is the 'Samas' in 'पंचतंत्र'?",
                  "question_hi": "'पंचतंत्र' में कौन-सा समास है?",
                  "options_en": ["Tatpurush", "Dvigu", "Dvandva", "Bahuvrihi"],
                  "options_hi": ["तत्पुरुष", "द्विगु", "द्वंद्व", "बहुव्रीहि"],
                  "answer_en": "Dvigu",
                  "answer_hi": "द्विगु",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 39,
                  "question_en": "Which 'Vachya' is in 'यहाँ गीत गाया जाता है'?",
                  "question_hi": "'यहाँ गीत गाया जाता है' में कौन-सा वाच्य है?",
                  "options_en": ["Kartrivachya", "Karmvachya", "Bhavvachya", "None"],
                  "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "कोई नहीं"],
                  "answer_en": "Karmvachya",
                  "answer_hi": "कर्मवाच्य",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 40,
                  "question_en": "Which 'Sandhi' is in 'ति + अंत = तियंत'?",
                  "question_hi": "'ति + अंत = तियंत' में कौन-सी संधि है?",
                  "options_en": ["Swar Sandhi", "Vyanjan Sandhi", "Visarga Sandhi", "None"],
                  "options_hi": ["स्वर संधि", "व्यंजन संधि", "विसर्ग संधि", "कोई नहीं"],
                  "answer_en": "Vyanjan Sandhi",
                  "answer_hi": "व्यंजन संधि",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 41,
                  "question_en": "Which 'Ras' is in 'हा हा हा! यह बहुत मजेदार है'?",
                  "question_hi": "'हा हा हा! यह बहुत मजेदार है' में कौन-सा रस है?",
                  "options_en": ["Shringar", "Veer", "Karun", "Hasya"],
                  "options_hi": ["शृंगार", "वीर", "करुण", "हास्य"],
                  "answer_en": "Hasya",
                  "answer_hi": "हास्य",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 42,
                  "question_en": "What is the 'Muhavara' meaning of 'ऊँट के मुँह में जीरा'?",
                  "question_hi": "'ऊँट के मुँह में जीरा' मुहावरे का अर्थ क्या है?",
                  "options_en": ["Very little", "Too much", "Useless", "None"],
                  "options_hi": ["बहुत कम", "बहुत ज्यादा", "बेकार", "कोई नहीं"],
                  "answer_en": "Very little",
                  "answer_hi": "बहुत कम",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 43,
                  "question_en": "Which 'Alankar' is in 'चरण कमल बंदौ हरि राई'?",
                  "question_hi": "'चरण कमल बंदौ हरि राई' में कौन-सा अलंकार है?",
                  "options_en": ["Upma", "Rupak", "Anupras", "Yamak"],
                  "options_hi": ["उपमा", "रूपक", "अनुप्रास", "यमक"],
                  "answer_en": "Rupak",
                  "answer_hi": "रूपक",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 44,
                  "question_en": "Which 'Vibhakti' is in 'राम से'?",
                  "question_hi": "'राम से' में कौन-सी विभक्ति है?",
                  "options_en": ["Tritiya", "Panchami", "Saptami", "None"],
                  "options_hi": ["तृतीया", "पंचमी", "सप्तमी", "कोई नहीं"],
                  "answer_en": "Tritiya",
                  "answer_hi": "तृतीया",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 45,
                  "question_en": "What is the 'Visheshan' in 'बड़ा घर'?",
                  "question_hi": "'बड़ा घर' में विशेषण क्या है?",
                  "options_en": ["बड़ा", "घर", "Both", "None"],
                  "options_hi": ["बड़ा", "घर", "दोनों", "कोई नहीं"],
                  "answer_en": "बड़ा",
                  "answer_hi": "बड़ा",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 46,
                  "question_en": "Which 'Kaal' is in 'वह पढ़ता था'?",
                  "question_hi": "'वह पढ़ता था' में कौन-सा काल है?",
                  "options_en": ["Past", "Present", "Future", "None"],
                  "options_hi": ["भूतकाल", "वर्तमान काल", "भविष्यत काल", "कोई नहीं"],
                  "answer_en": "Past",
                  "answer_hi": "भूतकाल",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 47,
                  "question_en": "What is the 'Kriya' in 'माँ खाना बनाती है'?",
                  "question_hi": "'माँ खाना बनाती है' में क्रिया क्या है?",
                  "options_en": ["माँ", "खाना", "बनाती", "है"],
                  "options_hi": ["माँ", "खाना", "बनाती", "है"],
                  "answer_en": "बनाती",
                  "answer_hi": "बनाती",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 48,
                  "question_en": "Which 'Sarvanam' is in 'यह उसकी गाड़ी है'?",
                  "question_hi": "'यह उसकी गाड़ी है' में सर्वनाम क्या है?",
                  "options_en": ["यह", "उसकी", "गाड़ी", "है"],
                  "options_hi": ["यह", "उसकी", "गाड़ी", "है"],
                  "answer_en": "उसकी",
                  "answer_hi": "उसकी",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 49,
                  "question_en": "Which 'Vachya' is in 'मुझसे पढ़ा नहीं जाता'?",
                  "question_hi": "'मुझसे पढ़ा नहीं जाता' में कौन-सा वाच्य है?",
                  "options_en": ["Kartrivachya", "Karmvachya", "Bhavvachya", "None"],
                  "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "कोई नहीं"],
                  "answer_en": "Bhavvachya",
                  "answer_hi": "भाववाच्य",
                  "attempted": false,
                  "selected": ""
                },
                {
                  "num": 50,
                  "question_en": "What is the 'Visheshya' in 'ऊँचा पहाड़'?",
                  "question_hi": "'ऊँचा पहाड़' में विशेष्य क्या है?",
                  "options_en": ["ऊँचा", "पहाड़", "Both", "None"],
                  "options_hi": ["ऊँचा", "पहाड़", "दोनों", "कोई नहीं"],
                  "answer_en": "पहाड़",
                  "answer_hi": "पहाड़",
                  "attempted": false,
                  "selected": ""
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
