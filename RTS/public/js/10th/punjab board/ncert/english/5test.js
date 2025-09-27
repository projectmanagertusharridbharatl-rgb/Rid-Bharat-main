
const questions = [




        {
                "num": 1,
                "question_en": "Identify the subject in the sentence: 'The birds are flying in the sky.'",
                "question_hi": "वाक्य में कर्ता पहचानें: 'पक्षी आकाश में उड़ रहे हैं।'",
                "options_en": ["The birds", "are flying", "in the sky"],
                "options_hi": ["पक्षी", "उड़ रहे हैं", "आकाश में"],
                "answer_en": "The birds",
                "answer_hi": "पक्षी",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 2,
                "question_en": "Choose the correct article: 'She adopted ___ dog from the shelter.'",
                "question_hi": "सही उपपद चुनें: 'उसने आश्रय से ___ कुत्ता गोद लिया।'",
                "options_en": ["a", "an", "the"],
                "options_hi": ["एक", "एक", "वह"],
                "answer_en": "a",
                "answer_hi": "एक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 3,
                "question_en": "Which is a conjunction? 'I wanted to go, but it was raining.'",
                "question_hi": "संयोजक शब्द चुनें: 'मैं जाना चाहता था, लेकिन बारिश हो रही थी।'",
                "options_en": ["go", "but", "raining"],
                "options_hi": ["जाना", "लेकिन", "बारिश"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 4,
                "question_en": "Identify the tense: 'She has been studying for two hours.'",
                "question_hi": "काल पहचानें: 'वह दो घंटे से पढ़ रही है।'",
                "options_en": ["Present Perfect", "Present Continuous", "Present Perfect Continuous"],
                "options_hi": ["वर्तमान पूर्ण", "वर्तमान जारी", "वर्तमान पूर्ण जारी"],
                "answer_en": "Present Perfect Continuous",
                "answer_hi": "वर्तमान पूर्ण जारी",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 5,
                "question_en": "Change to negative: 'He plays football.'",
                "question_hi": "नकारात्मक वाक्य बनाएं: 'वह फुटबॉल खेलता है।'",
                "options_en": ["He is not playing football.", "He did not play football.", "He does not play football."],
                "options_hi": ["वह फुटबॉल नहीं खेल रहा है।", "उसने फुटबॉल नहीं खेला।", "वह फुटबॉल नहीं खेलता है।"],
                "answer_en": "He does not play football.",
                "answer_hi": "वह फुटबॉल नहीं खेलता है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 6,
                "question_en": "Find the correct synonym for 'happy'.",
                "question_hi": "'happy' का समानार्थी शब्द चुनें।",
                "options_en": ["sad", "joyful", "angry"],
                "options_hi": ["उदास", "प्रसन्न", "गुस्सैल"],
                "answer_en": "joyful",
                "answer_hi": "प्रसन्न",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 7,
                "question_en": "What type of sentence is this: 'Please sit down.'",
                "question_hi": "यह किस प्रकार का वाक्य है: 'कृपया बैठ जाएं।'",
                "options_en": ["Interrogative", "Imperative", "Exclamatory"],
                "options_hi": ["प्रश्नवाचक", "आज्ञार्थक", "विस्मयादिबोधक"],
                "answer_en": "Imperative",
                "answer_hi": "आज्ञार्थक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 8,
                "question_en": "Identify the correct spelling.",
                "question_hi": "सही वर्तनी पहचानें।",
                "options_en": ["enviroment", "environment", "environmant"],
                "options_hi": ["एनवायरोमेंट", "एनवायरनमेंट", "एनवायर्नमंट"],
                "answer_en": "environment",
                "answer_hi": "एनवायरनमेंट",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 9,
                "question_en": "Pick the correct pronoun: '___ is my best friend.'",
                "question_hi": "सही सर्वनाम चुनें: '___ मेरा सबसे अच्छा दोस्त है।'",
                "options_en": ["He", "Him", "His"],
                "options_hi": ["वह", "उसे", "उसका"],
                "answer_en": "He",
                "answer_hi": "वह",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 10,
                "question_en": "Identify the clause: 'If it rains, we will stay home.'",
                "question_hi": "उपवाक्य पहचानें: 'अगर बारिश होती है, तो हम घर पर रहेंगे।'",
                "options_en": ["If it rains", "we will stay home", "it rains", "we will stay"],
                "options_hi": ["अगर बारिश होती है", "हम घर पर रहेंगे", "बारिश होती है", "हम रहेंगे"],
                "answer_en": "If it rains",
                "answer_hi": "अगर बारिश होती है",
                "attempted": false,
                "selected": ""
        }
        ,

        {
                "num": 11,
                "question_en": "Identify the adjective: 'He bought a red car.'",
                "question_hi": "विशेषण पहचानें: 'उसने एक लाल कार खरीदी।'",
                "options_en": ["bought", "car", "red"],
                "options_hi": ["खरीदी", "कार", "लाल"],
                "answer_en": "red",
                "answer_hi": "लाल",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 12,
                "question_en": "Choose the correct reported speech: 'She said, \"I am tired.\"'",
                "question_hi": "सही अप्रत्यक्ष वाक्य चुनें: 'उसने कहा, \"मैं थकी हुई हूँ।\"'",
                "options_en": [
                        "She said she was tired.",
                        "She said she is tired.",
                        "She says she was tired."
                ],
                "options_hi": [
                        "उसने कहा कि वह थकी हुई थी।",
                        "उसने कहा कि वह थकी हुई है।",
                        "वह कहती है कि वह थकी हुई थी।"
                ],
                "answer_en": "She said she was tired.",
                "answer_hi": "उसने कहा कि वह थकी हुई थी।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 13,
                "question_en": "Select the correct form: 'He ___ to school every day.'",
                "question_hi": "सही रूप चुनें: 'वह हर दिन स्कूल ___ है।'",
                "options_en": ["go", "goes", "gone"],
                "options_hi": ["जाता", "जाता है", "गया"],
                "answer_en": "goes",
                "answer_hi": "जाता है",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 14,
                "question_en": "What is the passive voice of: 'The teacher explains the lesson'?",
                "question_hi": "'The teacher explains the lesson' का कर्मवाच्य रूप क्या होगा?",
                "options_en": [
                        "The lesson is explained by the teacher.",
                        "The lesson explained by the teacher.",
                        "The lesson was explained by the teacher."
                ],
                "options_hi": [
                        "पाठ को शिक्षक द्वारा समझाया जाता है।",
                        "पाठ शिक्षक द्वारा समझाया।",
                        "पाठ शिक्षक द्वारा समझाया गया था।"
                ],
                "answer_en": "The lesson is explained by the teacher.",
                "answer_hi": "पाठ को शिक्षक द्वारा समझाया जाता है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 15,
                "question_en": "Pick the correct homophone for 'pair'.",
                "question_hi": "'pair' का सही समध्वनि शब्द चुनें।",
                "options_en": ["pare", "peer", "pier"],
                "options_hi": ["काटना", "साथी", "घाट"],
                "answer_en": "pare",
                "answer_hi": "काटना",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 16,
                "question_en": "Identify the type of sentence: 'Do your homework now.'",
                "question_hi": "वाक्य का प्रकार बताएं: 'अब अपना होमवर्क करो।'",
                "options_en": ["Exclamatory", "Imperative", "Interrogative"],
                "options_hi": ["विस्मयादिबोधक", "आज्ञार्थक", "प्रश्नवाचक"],
                "answer_en": "Imperative",
                "answer_hi": "आज्ञार्थक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 17,
                "question_en": "Choose the correct verb form: 'She ___ watching TV when I arrived.'",
                "question_hi": "सही क्रिया रूप चुनें: 'जब मैं पहुंचा, वह टीवी ___ रही थी।'",
                "options_en": ["is", "was", "has been"],
                "options_hi": ["है", "थी", "रही है"],
                "answer_en": "was",
                "answer_hi": "थी",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 18,
                "question_en": "Fill in the blank with correct preposition: 'He was born ___ July.'",
                "question_hi": "रिक्त स्थान भरें: 'वह ___ जुलाई में पैदा हुआ था।'",
                "options_en": ["on", "in", "at"],
                "options_hi": ["को", "में", "पर"],
                "answer_en": "in",
                "answer_hi": "में",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 19,
                "question_en": "Pick the correct conjunction: 'I will go ___ it doesn’t rain.'",
                "question_hi": "सही संयोजक चुनें: 'मैं जाऊँगा ___ बारिश नहीं हुई।'",
                "options_en": ["if", "and", "because"],
                "options_hi": ["अगर", "और", "क्योंकि"],
                "answer_en": "if",
                "answer_hi": "अगर",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 20,
                "question_en": "What part of speech is 'quickly' in the sentence: 'He quickly ran away'?",
                "question_hi": "'He quickly ran away' वाक्य में 'quickly' कौन सा शब्द भेद है?",
                "options_en": ["Verb", "Adjective", "Adverb"],
                "options_hi": ["क्रिया", "विशेषण", "क्रिया विशेषण"],
                "answer_en": "Adverb",
                "answer_hi": "क्रिया विशेषण",
                "attempted": false,
                "selected": ""
        }
        ,

        {
                "num": 21,
                "question_en": "Identify the correct question tag: 'She is coming, ___?'",
                "question_hi": "सही प्रश्न टैग पहचानें: 'वह आ रही है, ___?'",
                "options_en": ["is she", "isn't she", "wasn't she"],
                "options_hi": ["क्या वह", "है ना", "थी ना"],
                "answer_en": "isn't she",
                "answer_hi": "है ना",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 22,
                "question_en": "Choose the correct article: '___ apple a day keeps the doctor away.'",
                "question_hi": "सही उपपद चुनें: '___ सेब रोज खाने से डॉक्टर दूर रहता है।'",
                "options_en": ["A", "An", "The"],
                "options_hi": ["एक", "एक (स्वर)", "वह"],
                "answer_en": "An",
                "answer_hi": "एक (स्वर)",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 23,
                "question_en": "Pick the correct synonym of 'Happy'.",
                "question_hi": "'Happy' का सही पर्यायवाची शब्द चुनें।",
                "options_en": ["Sad", "Glad", "Angry"],
                "options_hi": ["दुखी", "प्रसन्न", "गुस्सैल"],
                "answer_en": "Glad",
                "answer_hi": "प्रसन्न",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 24,
                "question_en": "What is the correct tense: 'She had finished her homework before dinner.'",
                "question_hi": "सही काल चुनें: 'डिनर से पहले उसने अपना होमवर्क पूरा कर लिया था।'",
                "options_en": ["Past Perfect", "Present Perfect", "Past Continuous"],
                "options_hi": ["भूतपूर्व पूर्ण", "वर्तमान पूर्ण", "भूतकालिक अपूर्ण"],
                "answer_en": "Past Perfect",
                "answer_hi": "भूतपूर्व पूर्ण",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 25,
                "question_en": "Identify the kind of noun: 'Honesty is the best policy.'",
                "question_hi": "संज्ञा का प्रकार पहचानें: 'ईमानदारी सबसे अच्छी नीति है।'",
                "options_en": ["Common Noun", "Abstract Noun", "Proper Noun"],
                "options_hi": ["सामान्य संज्ञा", "भाववाचक संज्ञा", "व्यक्तिवाचक संज्ञा"],
                "answer_en": "Abstract Noun",
                "answer_hi": "भाववाचक संज्ञा",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 26,
                "question_en": "Choose the correct spelling:",
                "question_hi": "सही वर्तनी चुनें:",
                "options_en": ["Enviroment", "Environment", "Enviornment"],
                "options_hi": ["इनवायरोमेंट", "एनवायर्नमेंट", "एन्वॉयरमेंट"],
                "answer_en": "Environment",
                "answer_hi": "एनवायर्नमेंट",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 27,
                "question_en": "Identify the pronoun: 'They are playing cricket.'",
                "question_hi": "सर्वनाम पहचानें: 'वे क्रिकेट खेल रहे हैं।'",
                "options_en": ["They", "are", "playing"],
                "options_hi": ["वे", "हैं", "खेल रहे हैं"],
                "answer_en": "They",
                "answer_hi": "वे",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 28,
                "question_en": "Choose the correct passive voice: 'He writes a letter.'",
                "question_hi": "'He writes a letter.' का सही कर्मवाच्य चुनें।",
                "options_en": [
                        "A letter was written by him.",
                        "A letter is written by him.",
                        "A letter wrote by him."
                ],
                "options_hi": [
                        "एक पत्र उसके द्वारा लिखा गया था।",
                        "एक पत्र उसके द्वारा लिखा जाता है।",
                        "एक पत्र उसके द्वारा लिखा।"
                ],
                "answer_en": "A letter is written by him.",
                "answer_hi": "एक पत्र उसके द्वारा लिखा जाता है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 29,
                "question_en": "Pick the correct antonym of 'Strong'.",
                "question_hi": "'Strong' का विलोम शब्द चुनें।",
                "options_en": ["Weak", "Heavy", "Tough"],
                "options_hi": ["कमज़ोर", "भारी", "मजबूत"],
                "answer_en": "Weak",
                "answer_hi": "कमज़ोर",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 30,
                "question_en": "Choose the correct connector: 'He studied hard ___ he failed.'",
                "question_hi": "सही संयोजक चुनें: 'उसने कड़ी मेहनत की ___ वह असफल हो गया।'",
                "options_en": ["but", "because", "so"],
                "options_hi": ["लेकिन", "क्योंकि", "इसलिए"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false,
                "selected": ""
        },

        {
                "num": 31,
                "question_en": "Identify the adjective: 'The tall boy won the race.'",
                "question_hi": "विशेषण पहचानें: 'लंबा लड़का दौड़ जीत गया।'",
                "options_en": ["tall", "boy", "race"],
                "options_hi": ["लंबा", "लड़का", "दौड़"],
                "answer_en": "tall",
                "answer_hi": "लंबा",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 32,
                "question_en": "Fill in the blank with correct conjunction: 'She is poor ___ honest.'",
                "question_hi": "रिक्त स्थान भरो सही संयोजक से: 'वह गरीब है ___ ईमानदार है।'",
                "options_en": ["but", "so", "and"],
                "options_hi": ["लेकिन", "इसलिए", "और"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 33,
                "question_en": "Choose the correct reported speech: He said, 'I am tired.'",
                "question_hi": "सही अप्रत्यक्ष कथन चुनें: He said, 'I am tired.'",
                "options_en": [
                        "He said he is tired.",
                        "He said he was tired.",
                        "He said he had been tired."
                ],
                "options_hi": [
                        "उसने कहा कि वह थका हुआ है।",
                        "उसने कहा कि वह थका हुआ था।",
                        "उसने कहा कि वह थका हुआ था चुका था।"
                ],
                "answer_en": "He said he was tired.",
                "answer_hi": "उसने कहा कि वह थका हुआ था।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 34,
                "question_en": "Choose the correct form of verb: 'He ___ to school every day.'",
                "question_hi": "क्रिया का सही रूप चुनें: 'वह रोज स्कूल ___ है।'",
                "options_en": ["go", "goes", "going"],
                "options_hi": ["जाता", "जाता है", "जा रहा"],
                "answer_en": "goes",
                "answer_hi": "जाता है",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 35,
                "question_en": "Choose the correct tense: 'He has been working here for two years.'",
                "question_hi": "सही काल चुनें: 'वह दो साल से यहां काम कर रहा है।'",
                "options_en": [
                        "Present Perfect",
                        "Present Continuous",
                        "Present Perfect Continuous"
                ],
                "options_hi": [
                        "वर्तमान पूर्ण",
                        "वर्तमान अपूर्ण",
                        "वर्तमान पूर्ण अपूर्ण"
                ],
                "answer_en": "Present Perfect Continuous",
                "answer_hi": "वर्तमान पूर्ण अपूर्ण",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 36,
                "question_en": "Identify the verb: 'Birds fly in the sky.'",
                "question_hi": "क्रिया पहचानें: 'पंछी आकाश में उड़ते हैं।'",
                "options_en": ["Birds", "fly", "sky"],
                "options_hi": ["पंछी", "उड़ते हैं", "आकाश"],
                "answer_en": "fly",
                "answer_hi": "उड़ते हैं",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 37,
                "question_en": "Choose the correct antonym of 'Brave'.",
                "question_hi": "'Brave' का सही विलोम शब्द चुनें।",
                "options_en": ["Coward", "Clever", "Angry"],
                "options_hi": ["कायर", "चालाक", "गुस्सैल"],
                "answer_en": "Coward",
                "answer_hi": "कायर",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 38,
                "question_en": "Identify the prepositional phrase: 'The cat is under the table.'",
                "question_hi": "पूर्वसर्ग वाक्यांश पहचानें: 'बिल्ली मेज के नीचे है।'",
                "options_en": ["The cat", "under the table", "is under"],
                "options_hi": ["बिल्ली", "मेज के नीचे", "है नीचे"],
                "answer_en": "under the table",
                "answer_hi": "मेज के नीचे",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 39,
                "question_en": "Choose the correct punctuation: 'wheres your bag'?",
                "question_hi": "सही विराम चिह्न चुनें: 'wheres your bag'?",
                "options_en": [
                        "Where's your bag?",
                        "Wheres your bag.",
                        "Where's your bag!"
                ],
                "options_hi": [
                        "Where's your bag?",
                        "Wheres your bag.",
                        "Where's your bag!"
                ],
                "answer_en": "Where's your bag?",
                "answer_hi": "Where's your bag?",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 40,
                "question_en": "Select the correct comparative form: 'This book is ___ than that one.'",
                "question_hi": "सही तुलनात्मक रूप चुनें: 'यह किताब उस किताब से ___ है।'",
                "options_en": ["good", "better", "best"],
                "options_hi": ["अच्छी", "बेहतर", "सबसे अच्छी"],
                "answer_en": "better",
                "answer_hi": "बेहतर",
                "attempted": false,
                "selected": ""
        },

        {
                "num": 41,
                "question_en": "Choose the correct article: 'She bought ___ umbrella.'",
                "question_hi": "सही आर्टिकल चुनें: 'उसने ___ छाता खरीदा।'",
                "options_en": ["a", "an", "the"],
                "options_hi": ["a", "an", "the"],
                "answer_en": "an",
                "answer_hi": "an",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 42,
                "question_en": "Identify the subject in the sentence: 'My father reads the newspaper every morning.'",
                "question_hi": "वाक्य में कर्ता पहचानें: 'मेरे पापा हर सुबह अखबार पढ़ते हैं।'",
                "options_en": ["reads", "the newspaper", "My father"],
                "options_hi": ["पढ़ते हैं", "अखबार", "मेरे पापा"],
                "answer_en": "My father",
                "answer_hi": "मेरे पापा",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 43,
                "question_en": "Choose the correct passive form: 'He is writing a letter.'",
                "question_hi": "सही कर्मवाच्य चुनें: 'वह एक पत्र लिख रहा है।'",
                "options_en": [
                        "A letter is being written by him.",
                        "A letter is written by him.",
                        "A letter has been written by him."
                ],
                "options_hi": [
                        "एक पत्र उसके द्वारा लिखा जा रहा है।",
                        "एक पत्र उसके द्वारा लिखा गया।",
                        "एक पत्र उसके द्वारा लिखा जा चुका है।"
                ],
                "answer_en": "A letter is being written by him.",
                "answer_hi": "एक पत्र उसके द्वारा लिखा जा रहा है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 44,
                "question_en": "Fill in the blank with correct tense: 'They ___ in Delhi since 2018.'",
                "question_hi": "सही काल से रिक्त स्थान भरें: 'वे 2018 से दिल्ली में ___ हैं।'",
                "options_en": ["lived", "have lived", "have been living"],
                "options_hi": ["रहे", "रह चुके हैं", "रह रहे हैं"],
                "answer_en": "have been living",
                "answer_hi": "रह रहे हैं",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 45,
                "question_en": "Choose the correct synonym of 'Happy'.",
                "question_hi": "'Happy' का सही पर्यायवाची शब्द चुनें।",
                "options_en": ["Angry", "Glad", "Sad"],
                "options_hi": ["गुस्सैल", "प्रसन्न", "दुखी"],
                "answer_en": "Glad",
                "answer_hi": "प्रसन्न",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 46,
                "question_en": "Identify the interjection: 'Wow! That’s amazing.'",
                "question_hi": "विस्मयादिबोधक शब्द पहचानें: 'वाह! वह अद्भुत है।'",
                "options_en": ["Wow", "That’s", "amazing"],
                "options_hi": ["वाह", "वह", "अद्भुत"],
                "answer_en": "Wow",
                "answer_hi": "वाह",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 47,
                "question_en": "Pick the correctly punctuated sentence.",
                "question_hi": "सही विराम चिह्न वाला वाक्य चुनें।",
                "options_en": [
                        "Its raining outside.",
                        "It's raining outside.",
                        "Its raining, outside"
                ],
                "options_hi": [
                        "Its raining outside.",
                        "It's raining outside.",
                        "Its raining, outside"
                ],
                "answer_en": "It's raining outside.",
                "answer_hi": "It's raining outside.",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 48,
                "question_en": "Choose the correct conjunction: 'We missed the train ___ we left late.'",
                "question_hi": "सही संयोजक चुनें: 'हम ट्रेन चूक गए ___ हम देर से निकले।'",
                "options_en": ["because", "but", "so"],
                "options_hi": ["क्योंकि", "लेकिन", "इसलिए"],
                "answer_en": "because",
                "answer_hi": "क्योंकि",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 49,
                "question_en": "Choose the correct form of the verb: 'She ___ not like mangoes.'",
                "question_hi": "सही क्रिया रूप चुनें: 'वह आम ___ पसंद नहीं करती।'",
                "options_en": ["do", "does", "is"],
                "options_hi": ["करती", "करती है", "है"],
                "answer_en": "does",
                "answer_hi": "करती है",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 50,
                "question_en": "Change to indirect: He said, 'We are watching a movie.'",
                "question_hi": "अप्रत्यक्ष वाक्य बनाएं: He said, 'We are watching a movie.'",
                "options_en": [
                        "He said they are watching a movie.",
                        "He said they were watching a movie.",
                        "He said they had watched a movie."
                ],
                "options_hi": [
                        "उसने कहा कि वे एक फिल्म देख रहे हैं।",
                        "उसने कहा कि वे एक फिल्म देख रहे थे।",
                        "उसने कहा कि वे एक फिल्म देख चुके थे।"
                ],
                "answer_en": "He said they were watching a movie.",
                "answer_hi": "उसने कहा कि वे एक फिल्म देख रहे थे।",
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
