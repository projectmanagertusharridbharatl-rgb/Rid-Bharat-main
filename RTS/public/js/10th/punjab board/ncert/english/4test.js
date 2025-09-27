
const questions = [




        {
                "num": 1,
                "question_en": "Identify the tense: 'She has finished her work.'",
                "question_hi": "काल पहचानें: 'उसने अपना काम पूरा कर लिया है।'",
                "options_en": ["Present Perfect", "Past Perfect", "Simple Past"],
                "options_hi": ["पूर्ण वर्तमान काल", "पूर्ण भूतकाल", "सामान्य भूतकाल"],
                "answer_en": "Present Perfect",
                "answer_hi": "पूर्ण वर्तमान काल",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 2,
                "question_en": "Choose the correct modal: 'You ___ obey traffic rules.'",
                "question_hi": "सही मोडल चुनें: 'आपको यातायात नियमों का ___ पालन करना चाहिए।'",
                "options_en": ["can", "must", "may"],
                "options_hi": ["सकता है", "अवश्य", "शायद"],
                "answer_en": "must",
                "answer_hi": "अवश्य",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 3,
                "question_en": "Passive voice of: 'The dog bit the boy.'",
                "question_hi": "कर्तृवाच्य से कर्मवाच्य: 'कुत्ते ने लड़के को काटा।'",
                "options_en": ["The boy bit the dog.", "The boy was bitten by the dog.", "The boy is bitten by the dog."],
                "options_hi": ["लड़के ने कुत्ते को काटा।", "लड़के को कुत्ते द्वारा काटा गया।", "लड़के को कुत्ते द्वारा काटा जाता है।"],
                "answer_en": "The boy was bitten by the dog.",
                "answer_hi": "लड़के को कुत्ते द्वारा काटा गया।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 4,
                "question_en": "Convert to indirect speech: 'He said, \"I am tired.\"'",
                "question_hi": "प्रत्यक्ष से अप्रत्यक्ष कथन: 'उसने कहा, \"मैं थक गया हूँ।\"'",
                "options_en": ["He said that he is tired.", "He said that he was tired.", "He said that he had been tired."],
                "options_hi": ["उसने कहा कि वह थक गया है।", "उसने कहा कि वह थक गया था।", "उसने कहा कि वह थक चुका था।"],
                "answer_en": "He said that he was tired.",
                "answer_hi": "उसने कहा कि वह थक गया था।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 5,
                "question_en": "Correct preposition: 'She is good ___ Mathematics.'",
                "question_hi": "सही पूर्वसर्ग: 'वह गणित में ___ अच्छी है।'",
                "options_en": ["at", "in", "on"],
                "options_hi": ["पर", "में", "को"],
                "answer_en": "at",
                "answer_hi": "पर",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 6,
                "question_en": "Identify the conjunction: 'We waited because it was raining.'",
                "question_hi": "संयोजक पहचानें: 'हमने इंतजार किया क्योंकि बारिश हो रही थी।'",
                "options_en": ["We waited", "because", "it was raining"],
                "options_hi": ["हमने इंतजार किया", "क्योंकि", "बारिश हो रही थी"],
                "answer_en": "because",
                "answer_hi": "क्योंकि",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 7,
                "question_en": "Correct article: '___ Ganga is a holy river.'",
                "question_hi": "सही उपपद: '___ गंगा एक पवित्र नदी है।'",
                "options_en": ["A", "An", "The"],
                "options_hi": ["एक", "एक", "द"],
                "answer_en": "The",
                "answer_hi": "द",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 8,
                "question_en": "Subject-verb agreement: 'Neither Ram nor his friends ___ coming.'",
                "question_hi": "क्रिया-विषय समझौता: 'न तो राम और न ही उसके दोस्त ___ आ रहे हैं।'",
                "options_en": ["is", "are", "was"],
                "options_hi": ["है", "हैं", "था"],
                "answer_en": "are",
                "answer_hi": "हैं",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 9,
                "question_en": "Punctuation: 'What is your name_'",
                "question_hi": "विराम चिह्न: 'तुम्हारा नाम क्या है_'",
                "options_en": [".", "?", "!"],
                "options_hi": ["।", "?", "!"],
                "answer_en": "?",
                "answer_hi": "?",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 10,
                "question_en": "Identify the clause: 'If it rains, we will stay home.'",
                "question_hi": "उपवाक्य पहचानें: 'अगर बारिश होती है, _____ हम घर पर रहेंगे।'",
                "options_en": ["If it rains", "we will stay home", "it rains", "we will stay"],
                "options_hi": ["अगर बारिश होती है", "हम घर पर रहेंगे", "बारिश होती है", "हम रहेंगे"],
                "answer_en": "If it rains",
                "answer_hi": "अगर बारिश होती है",
                "attempted": false,
                "selected": ""
        }
        // Continue similarly for MCQs 11-50...
        ,
        // ... (Previous MCQs 1-10 here) ...

        {
                "num": 11,
                "question_en": "Identify the type of sentence: 'How beautiful the rainbow is!'",
                "question_hi": "वाक्य का प्रकार पहचानें: 'इंद्रधनुष कितना सुंदर है!'",
                "options_en": ["Declarative", "Interrogative", "Exclamatory"],
                "options_hi": ["विवरणात्मक", "प्रश्नवाचक", "विस्मयादिबोधक"],
                "answer_en": "Exclamatory",
                "answer_hi": "विस्मयादिबोधक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 12,
                "question_en": "Choose the correct preposition: 'The cat jumped ___ the wall.'",
                "question_hi": "सही पूर्वसर्ग चुनें: 'बिल्ली दीवार ___ कूद गई।'",
                "options_en": ["on", "over", "at"],
                "options_hi": ["पर", "के ऊपर से", "पर"],
                "answer_en": "over",
                "answer_hi": "के ऊपर से",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 13,
                "question_en": "Active to passive: 'They built this house in 2020.'",
                "question_hi": "कर्तृवाच्य से कर्मवाच्य: 'उन्होंने यह घर 2020 में बनाया।'",
                "options_en": ["This house was built in 2020.", "This house is built in 2020.", "This house built in 2020."],
                "options_hi": ["यह घर 2020 में बनाया गया था।", "यह घर 2020 में बनाया गया है।", "यह घर 2020 में बनाया।"],
                "answer_en": "This house was built in 2020.",
                "answer_hi": "यह घर 2020 में बनाया गया था।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 14,
                "question_en": "Identify the adverb: 'She sings beautifully.'",
                "question_hi": "क्रिया-विशेषण पहचानें: 'वह खूबसूरती से गाती है।'",
                "options_en": ["She", "sings", "beautifully"],
                "options_hi": ["वह", "गाती है", "खूबसूरती से"],
                "answer_en": "beautifully",
                "answer_hi": "खूबसूरती से",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 15,
                "question_en": "Correct conjunction: 'He ran fast ___ he missed the bus.'",
                "question_hi": "सही संयोजक: 'वह तेज दौड़ा ___ वह बस छूट गई।'",
                "options_en": ["but", "because", "so"],
                "options_hi": ["लेकिन", "क्योंकि", "इसलिए"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 16,
                "question_en": "Choose the correct tense: 'By next year, I ___ my studies.'",
                "question_hi": "सही काल चुनें: 'अगले साल तक, मैं ___ अपनी पढ़ाई पूरी कर लूँगा।'",
                "options_en": ["completed", "will have completed", "have completed"],
                "options_hi": ["पूरी कर चुका था", "पूरी कर चुका हूँगा", "पूरी कर चुका हूँ"],
                "answer_en": "will have completed",
                "answer_hi": "पूरी कर चुका हूँगा",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 17,
                "question_en": "Identify the noun clause: 'I know what you did.'",
                "question_hi": "संज्ञा उपवाक्य पहचानें: 'मुझे पता है कि तुमने क्या किया।'",
                "options_en": ["I know", "what you did", "you did"],
                "options_hi": ["मुझे पता है", "तुमने क्या किया", "तुमने किया"],
                "answer_en": "what you did",
                "answer_hi": "तुमने क्या किया",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 18,
                "question_en": "Correct modal for advice: 'You ___ take rest when you’re sick.'",
                "question_hi": "सलाह के लिए सही मोडल: 'बीमार होने पर आपको आराम ___ करना चाहिए।'",
                "options_en": ["can", "must", "might"],
                "options_hi": ["सकते हैं", "अवश्य", "शायद"],
                "answer_en": "must",
                "answer_hi": "अवश्य",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 19,
                "question_en": "Direct to indirect speech: 'She said, \"I will call you tomorrow.\"'",
                "question_hi": "प्रत्यक्ष से अप्रत्यक्ष: 'उसने कहा, \"मैं तुम्हें कल फोन करूँगी।\"'",
                "options_en": ["She said she would call me tomorrow.", "She said she will call me tomorrow.", "She said she would call me the next day."],
                "options_hi": ["उसने कहा कि वह मुझे कल फोन करेगी।", "उसने कहा कि वह मुझे कल फोन करेगी।", "उसने कहा कि वह मुझे अगले दिन फोन करेगी।"],
                "answer_en": "She said she would call me the next day.",
                "answer_hi": "उसने कहा कि वह मुझे अगले दिन फोन करेगी।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 20,
                "question_en": "Correct preposition: 'He is jealous ___ his brother.'",
                "question_hi": "सही पूर्वसर्ग: 'वह अपने भाई ___ ईर्ष्या करता है।'",
                "options_en": ["of", "with", "for"],
                "options_hi": ["का", "के साथ", "के लिए"],
                "answer_en": "of",
                "answer_hi": "का",
                "attempted": false,
                "selected": ""
        },
        // ... (Continue similarly for MCQs 21-50) ...

        {
                "num": 21,
                "question_en": "Identify the verb: 'The baby sleeps peacefully.'",
                "question_hi": "क्रिया पहचानें: 'बच्चा शांति से सोता है।'",
                "options_en": ["baby", "sleeps", "peacefully"],
                "options_hi": ["बच्चा", "सोता है", "शांति से"],
                "answer_en": "sleeps",
                "answer_hi": "सोता है",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 22,
                "question_en": "Choose the correct conjunction: 'She is poor ___ honest.'",
                "question_hi": "सही संयोजक चुनें: 'वह गरीब ___ ईमानदार है।'",
                "options_en": ["but", "and", "or"],
                "options_hi": ["लेकिन", "और", "या"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 23,
                "question_en": "Find the adjective: 'He has a red bicycle.'",
                "question_hi": "विशेषण पहचानें: 'उसके पास एक लाल साइकिल है।'",
                "options_en": ["has", "bicycle", "red"],
                "options_hi": ["है", "साइकिल", "लाल"],
                "answer_en": "red",
                "answer_hi": "लाल",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 24,
                "question_en": "Change to interrogative: 'She was crying.'",
                "question_hi": "प्रश्नवाचक में बदलें: 'वह रो रही थी।'",
                "options_en": ["Was she crying?", "Is she crying?", "Did she cry?"],
                "options_hi": ["क्या वह रो रही थी?", "क्या वह रो रही है?", "क्या वह रोई?"],
                "answer_en": "Was she crying?",
                "answer_hi": "क्या वह रो रही थी?",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 25,
                "question_en": "Identify the main clause: 'Although it was raining, we went out.'",
                "question_hi": "मुख्य उपवाक्य पहचानें: 'हालाँकि बारिश हो रही थी, हम बाहर गए।'",
                "options_en": ["Although it was raining", "we went out", "raining", "Although"],
                "options_hi": ["हालाँकि बारिश हो रही थी", "हम बाहर गए", "बारिश", "हालाँकि"],
                "answer_en": "we went out",
                "answer_hi": "हम बाहर गए",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 26,
                "question_en": "Choose the correct article: 'She bought ___ umbrella.'",
                "question_hi": "सही लेख चुनें: 'उसने ___ छाता खरीदा।'",
                "options_en": ["a", "an", "the"],
                "options_hi": ["एक", "एक", "वह"],
                "answer_en": "an",
                "answer_hi": "एक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 27,
                "question_en": "Convert into negative: 'He plays cricket.'",
                "question_hi": "नकारात्मक वाक्य बनाएं: 'वह क्रिकेट खेलता है।'",
                "options_en": ["He don't play cricket.", "He didn't play cricket.", "He does not play cricket."],
                "options_hi": ["वह क्रिकेट नहीं खेलता।", "वह क्रिकेट नहीं खेला।", "वह क्रिकेट नहीं खेलेगा।"],
                "answer_en": "He does not play cricket.",
                "answer_hi": "वह क्रिकेट नहीं खेलता।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 28,
                "question_en": "Identify the pronoun: 'Ravi gave her a gift.'",
                "question_hi": "सर्वनाम पहचानें: 'रवि ने उसे एक तोहफा दिया।'",
                "options_en": ["Ravi", "gave", "her"],
                "options_hi": ["रवि", "दिया", "उसे"],
                "answer_en": "her",
                "answer_hi": "उसे",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 29,
                "question_en": "Choose correct verb form: 'Neither he nor I ___ guilty.'",
                "question_hi": "सही क्रिया-रूप चुनें: 'न तो वह और न ही मैं ___ दोषी हूँ।'",
                "options_en": ["are", "am", "is"],
                "options_hi": ["हैं", "हूँ", "है"],
                "answer_en": "am",
                "answer_hi": "हूँ",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 30,
                "question_en": "Identify the tense: 'I have finished my work.'",
                "question_hi": "काल पहचानें: 'मैंने अपना काम खत्म कर लिया है।'",
                "options_en": ["Present Perfect", "Past Perfect", "Present Continuous"],
                "options_hi": ["वर्तमान पूर्ण", "भूतकाल पूर्ण", "वर्तमान काल चल रहा"],
                "answer_en": "Present Perfect",
                "answer_hi": "वर्तमान पूर्ण",
                "attempted": false,
                "selected": ""
        }
        // You can ask for MCQs 31–50 next
        ,

        {
                "num": 31,
                "question_en": "Choose the correct verb form: 'The news ___ true.'",
                "question_hi": "सही क्रिया-रूप चुनें: 'खबर ___ सही है।'",
                "options_en": ["are", "is", "were"],
                "options_hi": ["हैं", "है", "थे"],
                "answer_en": "is",
                "answer_hi": "है",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 32,
                "question_en": "Identify the object: 'Rina made a cake.'",
                "question_hi": "कर्म पहचानें: 'रीना ने एक केक बनाया।'",
                "options_en": ["Rina", "made", "a cake"],
                "options_hi": ["रीना", "बनाया", "एक केक"],
                "answer_en": "a cake",
                "answer_hi": "एक केक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 33,
                "question_en": "Fill in the blank: 'He is good ___ mathematics.'",
                "question_hi": "रिक्त स्थान भरें: 'वह गणित में ___ है।'",
                "options_en": ["at", "in", "on"],
                "options_hi": ["में", "के अंदर", "पर"],
                "answer_en": "at",
                "answer_hi": "में",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 34,
                "question_en": "Identify the part of speech: 'Quickly'",
                "question_hi": "शब्द भेद पहचानें: 'Quickly'",
                "options_en": ["Adjective", "Adverb", "Verb"],
                "options_hi": ["विशेषण", "क्रिया-विशेषण", "क्रिया"],
                "answer_en": "Adverb",
                "answer_hi": "क्रिया-विशेषण",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 35,
                "question_en": "Change to passive voice: 'He is reading a book.'",
                "question_hi": "कर्मवाच्य में बदलें: 'वह एक किताब पढ़ रहा है।'",
                "options_en": ["A book is read by him.", "A book was being read by him.", "A book is being read by him."],
                "options_hi": ["एक किताब उसके द्वारा पढ़ी जा रही है।", "एक किताब उसके द्वारा पढ़ी गई थी।", "एक किताब उसके द्वारा पढ़ी जा रही थी।"],
                "answer_en": "A book is being read by him.",
                "answer_hi": "एक किताब उसके द्वारा पढ़ी जा रही है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 36,
                "question_en": "Choose the correct option: 'This is the boy ___ won the race.'",
                "question_hi": "सही विकल्प चुनें: 'यह वही लड़का है ___ दौड़ जीती।'",
                "options_en": ["whom", "who", "which"],
                "options_hi": ["जिसे", "जिसने", "जो"],
                "answer_en": "who",
                "answer_hi": "जिसने",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 37,
                "question_en": "Identify the correct prefix: '___happy' (meaning: not happy)",
                "question_hi": "सही उपसर्ग पहचानें: '___happy' (अर्थ: खुश नहीं)",
                "options_en": ["un", "dis", "in"],
                "options_hi": ["अन", "दिस", "इन"],
                "answer_en": "un",
                "answer_hi": "अन",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 38,
                "question_en": "Change into exclamatory: 'It is a very beautiful painting.'",
                "question_hi": "विस्मयादिबोधक में बदलें: 'यह बहुत सुंदर चित्र है।'",
                "options_en": ["How a beautiful painting!", "What a beautiful painting!", "Very beautiful painting!"],
                "options_hi": ["कैसा सुंदर चित्र!", "क्या सुंदर चित्र है!", "बहुत सुंदर चित्र!"],
                "answer_en": "What a beautiful painting!",
                "answer_hi": "क्या सुंदर चित्र है!",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 39,
                "question_en": "Pick the correct reported speech: 'He said, \"I am busy.\"'",
                "question_hi": "सही प्रतिवेदित वाक्य चुनें: 'उसने कहा, \"मैं व्यस्त हूँ।\"'",
                "options_en": ["He said he is busy.", "He said he was busy.", "He says he is busy."],
                "options_hi": ["उसने कहा कि वह व्यस्त है।", "उसने कहा कि वह व्यस्त था।", "वह कहता है कि वह व्यस्त है।"],
                "answer_en": "He said he was busy.",
                "answer_hi": "उसने कहा कि वह व्यस्त था।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 40,
                "question_en": "Choose correct tag: 'She sings well, ___?'",
                "question_hi": "सही प्रश्नवाचक टैग चुनें: 'वह अच्छा गाती है, ___?'",
                "options_en": ["isn't she", "doesn't she", "didn't she"],
                "options_hi": ["क्या नहीं?", "क्या वह नहीं?", "क्या उसने नहीं?"],
                "answer_en": "doesn't she",
                "answer_hi": "क्या वह नहीं?",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 41,
                "question_en": "Identify the kind of sentence: 'Do your homework.'",
                "question_hi": "वाक्य का प्रकार पहचानें: 'अपना होमवर्क करो।'",
                "options_en": ["Exclamatory", "Interrogative", "Imperative"],
                "options_hi": ["विस्मयादिबोधक", "प्रश्नवाचक", "आदेशवाचक"],
                "answer_en": "Imperative",
                "answer_hi": "आदेशवाचक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 42,
                "question_en": "Find the antonym of 'honest'.",
                "question_hi": "'honest' का विलोम शब्द चुनें।",
                "options_en": ["truthful", "brave", "dishonest"],
                "options_hi": ["सत्यवादी", "बहादुर", "बेईमान"],
                "answer_en": "dishonest",
                "answer_hi": "बेईमान",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 43,
                "question_en": "Identify the part of speech: 'Wow! That’s amazing.'",
                "question_hi": "शब्द भेद पहचानें: 'वाह! यह अद्भुत है।'",
                "options_en": ["Verb", "Interjection", "Adjective"],
                "options_hi": ["क्रिया", "विस्मयादिबोधक", "विशेषण"],
                "answer_en": "Interjection",
                "answer_hi": "विस्मयादिबोधक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 44,
                "question_en": "Correct comparative form: 'This book is ___ than that.'",
                "question_hi": "सही तुलनात्मक रूप चुनें: 'यह किताब उस किताब से ___ है।'",
                "options_en": ["good", "better", "best"],
                "options_hi": ["अच्छा", "बेहतर", "सबसे अच्छा"],
                "answer_en": "better",
                "answer_hi": "बेहतर",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 45,
                "question_en": "Identify the helping verb: 'They are going to school.'",
                "question_hi": "सहायक क्रिया पहचानें: 'वे स्कूल जा रहे हैं।'",
                "options_en": ["going", "are", "school"],
                "options_hi": ["जा रहे", "हैं", "स्कूल"],
                "answer_en": "are",
                "answer_hi": "हैं",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 46,
                "question_en": "Change to past tense: 'She writes a letter.'",
                "question_hi": "भूतकाल में बदलें: 'वह एक पत्र लिखती है।'",
                "options_en": ["She wrote a letter.", "She writes a letter.", "She was writing a letter."],
                "options_hi": ["उसने पत्र लिखा।", "वह पत्र लिखती है।", "वह पत्र लिख रही थी।"],
                "answer_en": "She wrote a letter.",
                "answer_hi": "उसने पत्र लिखा।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 47,
                "question_en": "Choose correct conjunction: 'He is not only tall ___ also strong.'",
                "question_hi": "सही संयोजक चुनें: 'वह न केवल लंबा है ___ मजबूत भी है।'",
                "options_en": ["and", "but", "but also"],
                "options_hi": ["और", "लेकिन", "बल्कि"],
                "answer_en": "but also",
                "answer_hi": "बल्कि",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 48,
                "question_en": "Fill in the blank: 'She has been working here ___ 2018.'",
                "question_hi": "रिक्त स्थान भरें: 'वह 2018 ___ यहाँ काम कर रही है।'",
                "options_en": ["since", "for", "from"],
                "options_hi": ["से", "के लिए", "से"],
                "answer_en": "since",
                "answer_hi": "से",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 49,
                "question_en": "Identify the type of clause: 'Because he was late, he missed the train.'",
                "question_hi": "उपवाक्य का प्रकार पहचानें: 'क्योंकि वह देर से आया, वह ट्रेन चूक गया।'",
                "options_en": ["Noun clause", "Adverb clause", "Adjective clause"],
                "options_hi": ["संज्ञा उपवाक्य", "क्रिया-विशेषण उपवाक्य", "विशेषण उपवाक्य"],
                "answer_en": "Adverb clause",
                "answer_hi": "क्रिया-विशेषण उपवाक्य",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 50,
                "question_en": "Choose the correct synonym of 'intelligent'.",
                "question_hi": "'intelligent' का समानार्थी शब्द चुनें।",
                "options_en": ["dull", "clever", "lazy"],
                "options_hi": ["सुस्त", "चतुर", "आलसी"],
                "answer_en": "clever",
                "answer_hi": "चतुर",
                "attempted": false,
                "selected": ""
        },



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
