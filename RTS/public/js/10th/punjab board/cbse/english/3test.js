const questions = [

        {
                "num": 1,
                "question_en": "Identify the subject in the sentence: 'Ravi plays football every evening.'",
                "question_hi": "वाक्य में कर्ता पहचानें: 'रवि हर शाम फुटबॉल खेलता है।'",
                "options_en": ["Ravi", "plays", "football", "every evening"],
                "options_hi": ["रवि", "खेलता है", "फुटबॉल", "हर शाम"],
                "answer_en": "Ravi",
                "answer_hi": "रवि",
                "attempted": false
        },
        {
                "num": 2,
                "question_en": "Choose the correct verb: 'They _____ going to the market.'",
                "question_hi": "सही क्रिया चुनें: 'वे बाजार _____ जा रहे हैं।'",
                "options_en": ["is", "are", "am", "was"],
                "options_hi": ["है", "हैं", "हूँ", "था"],
                "answer_en": "are",
                "answer_hi": "हैं",
                "attempted": false
        },
        {
                "num": 3,
                "question_en": "Fill in the blank with a suitable preposition: 'He sat _____ the chair.'",
                "question_hi": "रिक्त स्थान को उपयुक्त पूर्वसर्ग से भरें: 'वह कुर्सी _____ बैठा।'",
                "options_en": ["in", "at", "on", "over"],
                "options_hi": ["में", "पर", "पर", "ऊपर"],
                "answer_en": "on",
                "answer_hi": "पर",
                "attempted": false
        },
        {
                "num": 4,
                "question_en": "Identify the conjunction: 'She is poor but honest.'",
                "question_hi": "संयोजक शब्द पहचानें: 'वह गरीब है लेकिन ईमानदार है।'",
                "options_en": ["She", "is", "but", "honest"],
                "options_hi": ["वह", "है", "लेकिन", "ईमानदार"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false
        },
        {
                "num": 5,
                "question_en": "Choose the correct article: 'It is _____ apple.'",
                "question_hi": "सही आर्टिकल चुनें: 'यह _____ सेब है।'",
                "options_en": ["a", "an", "the", "no article"],
                "options_hi": ["ए", "ऐन", "द", "कोई आर्टिकल नहीं"],
                "answer_en": "an",
                "answer_hi": "ऐन",
                "attempted": false
        },


        {
                "num": 6,
                "question_en": "Identify the verb in the sentence: 'The dog barks loudly.'",
                "question_hi": "वाक्य में क्रिया पहचानें: 'कुत्ता जोर से भौंकता है।'",
                "options_en": ["dog", "barks", "loudly", "The"],
                "options_hi": ["कुत्ता", "भौंकता है", "जोर से", "वह"],
                "answer_en": "barks",
                "answer_hi": "भौंकता है",
                "attempted": false
        },
        {
                "num": 7,
                "question_en": "Choose the correct form of the verb: 'She _____ a book right now.'",
                "question_hi": "सही क्रिया रूप चुनें: 'वह अभी एक किताब _____ रही है।'",
                "options_en": ["read", "reads", "is reading", "reading"],
                "options_hi": ["पढ़ती है", "पढ़ रही है", "पढ़ रही है", "पढ़ने"],
                "answer_en": "is reading",
                "answer_hi": "पढ़ रही है",
                "attempted": false
        },
        {
                "num": 8,
                "question_en": "Fill in the blank with the correct preposition: 'She is sitting _____ the table.'",
                "question_hi": "रिक्त स्थान को सही पूर्वसर्ग से भरें: 'वह मेज़ _____ बैठी है।'",
                "options_en": ["on", "in", "under", "by"],
                "options_hi": ["पर", "में", "नीचे", "के पास"],
                "answer_en": "on",
                "answer_hi": "पर",
                "attempted": false
        },
        {
                "num": 9,
                "question_en": "Choose the correct tense: 'He _____ to the store yesterday.'",
                "question_hi": "सही काल चुनें: 'वह कल दुकान _____ था।'",
                "options_en": ["goes", "went", "has gone", "is going"],
                "options_hi": ["जाता है", "गया था", "जाता है", "जा रहा है"],
                "answer_en": "went",
                "answer_hi": "गया था",
                "attempted": false
        },
        {
                "num": 10,
                "question_en": "Choose the correct conjunction: 'I went to the park _____ it was raining.'",
                "question_hi": "सही संयोजक चुनें: 'मैं पार्क गया _____ बारिश हो रही थी।'",
                "options_en": ["but", "because", "although", "so"],
                "options_hi": ["लेकिन", "क्योंकि", "हालाँकि", "इसलिए"],
                "answer_en": "although",
                "answer_hi": "हालाँकि",
                "attempted": false
        }
        ,

        {
                "num": 11,
                "question_en": "Identify the adverb clause: 'She cried because she was hurt.'",
                "question_hi": "एडवर्ब क्लॉज पहचानें: 'She cried because she was hurt.'",
                "options_en": ["She cried", "because she was hurt", "she was hurt", "hurt"],
                "options_hi": ["वह रोई", "क्योंकि उसे चोट लगी थी", "उसे चोट लगी थी", "चोट"],
                "answer_en": "because she was hurt",
                "answer_hi": "क्योंकि उसे चोट लगी थी",
                "attempted": false
        },
        {
                "num": 12,
                "question_en": "Choose the correct sentence:",
                "question_hi": "सही वाक्य चुनें:",
                "options_en": ["He go to school daily.", "He goes to school daily.", "He going to school daily.", "He gone to school daily."],
                "options_hi": ["वह रोज स्कूल जाता।", "वह रोज स्कूल जाता है।", "वह रोज स्कूल जा रहा।", "वह रोज स्कूल गया।"],
                "answer_en": "He goes to school daily.",
                "answer_hi": "वह रोज स्कूल जाता है।",
                "attempted": false
        },
        {
                "num": 13,
                "question_en": "Identify the missing word: 'She ____ reading a book.'",
                "question_hi": "लुप्त शब्द पहचानें: 'She ____ reading a book.'",
                "options_en": ["is", "are", "was", "were"],
                "options_hi": ["है", "हैं", "था", "थे"],
                "answer_en": "is",
                "answer_hi": "है",
                "attempted": false
        },
        {
                "num": 14,
                "question_en": "Fill the blank: 'The book is _____ the table.'",
                "question_hi": "रिक्त स्थान भरें: 'The book is _____ the table.'",
                "options_en": ["in", "on", "at", "under"],
                "options_hi": ["में", "पर", "पर", "नीचे"],
                "answer_en": "on",
                "answer_hi": "पर",
                "attempted": false
        },
        {
                "num": 15,
                "question_en": "Convert to indirect speech: 'Teacher said, “Open your books.”'",
                "question_hi": "इनडायरेक्ट स्पीच में बदलें: 'Teacher said, “Open your books.”'",
                "options_en": ["Teacher said to open our books.", "Teacher told us to open our books.", "Teacher asked us open your books.", "Teacher ordered to open your books."],
                "options_hi": ["शिक्षक ने कहा हमारी किताबें खोलने को।", "शिक्षक ने हमें हमारी किताबें खोलने को कहा।", "शिक्षक ने पूछा आप किताबें खोलें।", "शिक्षक ने आदेश दिया किताबें खोलने का।"],
                "answer_en": "Teacher told us to open our books.",
                "answer_hi": "शिक्षक ने हमें हमारी किताबें खोलने को कहा।",
                "attempted": false
        }
        ,

        {
                "num": 16,
                "question_en": "Choose the correct article: 'She is ___ honest woman.'",
                "question_hi": "सही आर्टिकल चुनें: 'She is ___ honest woman.'",
                "options_en": ["a", "an", "the", "no article"],
                "options_hi": ["ए", "ऐन", "द", "कोई आर्टिकल नहीं"],
                "answer_en": "an",
                "answer_hi": "ऐन",
                "attempted": false
        },
        {
                "num": 17,
                "question_en": "Choose the correct modal: 'He _____ have missed the bus.' (past possibility)",
                "question_hi": "सही मोडल चुनें: 'He _____ have missed the bus.' (भूतकालीन संभावना)",
                "options_en": ["can", "may", "must", "might"],
                "options_hi": ["सकता है", "हो सकता है", "अवश्य", "शायद"],
                "answer_en": "might",
                "answer_hi": "शायद",
                "attempted": false
        },
        {
                "num": 18,
                "question_en": "Passive of: 'They will build a new hospital.'",
                "question_hi": "'They will build a new hospital.' का पैसिव वॉइस क्या होगा?",
                "options_en": ["A new hospital will be built by them.", "A new hospital is built by them.", "A new hospital was built by them.", "A new hospital built by them."],
                "options_hi": ["एक नया अस्पताल उनके द्वारा बनाया जाएगा।", "एक नया अस्पताल उनके द्वारा बनाया गया है।", "एक नया अस्पताल उनके द्वारा बनाया गया था।", "एक नया अस्पताल उनके द्वारा बनाया।"],
                "answer_en": "A new hospital will be built by them.",
                "answer_hi": "एक नया अस्पताल उनके द्वारा बनाया जाएगा।",
                "attempted": false
        },
        {
                "num": 19,
                "question_en": "Choose the correct conjunction: 'He is rich, _____ he is unhappy.'",
                "question_hi": "सही कंजंक्शन चुनें: 'He is rich, _____ he is unhappy.'",
                "options_en": ["and", "but", "because", "so"],
                "options_hi": ["और", "लेकिन", "क्योंकि", "इसलिए"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false
        },
        {
                "num": 20,
                "question_en": "Complete the sentence: 'If I _____ a bird, I would fly.'",
                "question_hi": "वाक्य पूरा करें: 'If I _____ a bird, I would fly.'",
                "options_en": ["am", "was", "were", "will be"],
                "options_hi": ["हूँ", "था", "होता", "होगा"],
                "answer_en": "were",
                "answer_hi": "होता",
                "attempted": false
        }
        ,

        {
                "num": 21,
                "question_en": "Identify the correct form of the verb: 'She ____ to the market every day.'",
                "question_hi": "सही क्रिया रूप पहचानें: 'She ____ to the market every day.'",
                "options_en": ["go", "goes", "going", "gone"],
                "options_hi": ["जाती है", "जाता है", "जा रही है", "गई है"],
                "answer_en": "goes",
                "answer_hi": "जाती है",
                "attempted": false
        },
        {
                "num": 22,
                "question_en": "Choose the correct form of the verb: 'They ____ playing football at the moment.'",
                "question_hi": "सही क्रिया रूप चुनें: 'They ____ playing football at the moment.'",
                "options_en": ["are", "is", "was", "were"],
                "options_hi": ["हैं", "है", "था", "थे"],
                "answer_en": "are",
                "answer_hi": "हैं",
                "attempted": false
        },
        {
                "num": 23,
                "question_en": "Choose the correct preposition: 'The cat is hiding ____ the table.'",
                "question_hi": "सही पूर्वसर्ग चुनें: 'The cat is hiding ____ the table.'",
                "options_en": ["on", "under", "in", "at"],
                "options_hi": ["पर", "नीचे", "में", "पर"],
                "answer_en": "under",
                "answer_hi": "नीचे",
                "attempted": false
        },
        {
                "num": 24,
                "question_en": "Change to passive voice: 'The teacher explains the lesson.'",
                "question_hi": "पैसिव वॉइस में बदलें: 'The teacher explains the lesson.'",
                "options_en": ["The lesson is explained by the teacher.", "The lesson was explained by the teacher.", "The lesson is explained by teacher.", "The lesson will be explained by the teacher."],
                "options_hi": ["पाठ शिक्षक द्वारा समझाया जाता है।", "पाठ शिक्षक द्वारा समझाया गया था।", "पाठ शिक्षक द्वारा समझाया जाता है।", "पाठ शिक्षक द्वारा समझाया जाएगा।"],
                "answer_en": "The lesson is explained by the teacher.",
                "answer_hi": "पाठ शिक्षक द्वारा समझाया जाता है।",
                "attempted": false
        },
        {
                "num": 25,
                "question_en": "Choose the correct sentence: 'She ____ a letter when I called her.'",
                "question_hi": "सही वाक्य चुनें: 'She ____ a letter when I called her.'",
                "options_en": ["was writing", "wrote", "has written", "is writing"],
                "options_hi": ["लिख रही थी", "लिखा", "लिखा है", "लिख रही है"],
                "answer_en": "was writing",
                "answer_hi": "लिख रही थी",
                "attempted": false
        }
        ,

        {
                "num": 26,
                "question_en": "Fill in the blank: 'I will call you ____ I arrive.'",
                "question_hi": "रिक्त स्थान भरें: 'I will call you ____ I arrive.'",
                "options_en": ["before", "after", "until", "when"],
                "options_hi": ["पहले", "बाद", "तक", "जब"],
                "answer_en": "when",
                "answer_hi": "जब",
                "attempted": false
        },
        {
                "num": 27,
                "question_en": "Identify the noun in the sentence: 'The cat sat on the mat.'",
                "question_hi": "वाक्य में संज्ञा पहचानें: 'The cat sat on the mat.'",
                "options_en": ["sat", "on", "mat", "cat"],
                "options_hi": ["बैठा", "पर", "चटाई", "बिल्ली"],
                "answer_en": "cat",
                "answer_hi": "बिल्ली",
                "attempted": false
        },
        {
                "num": 28,
                "question_en": "Choose the correct question tag: 'You are coming to the party, ____?'",
                "question_hi": "सही प्रश्न चिह्न चुनें: 'You are coming to the party, ____?'",
                "options_en": ["are you", "aren’t you", "do you", "don’t you"],
                "options_hi": ["हैं आप", "नहीं हैं आप", "क्या आप", "क्या आप नहीं"],
                "answer_en": "aren’t you",
                "answer_hi": "नहीं हैं आप",
                "attempted": false
        },
        {
                "num": 29,
                "question_en": "Choose the correct form of the verb: 'She ____ a book right now.'",
                "question_hi": "सही क्रिया रूप चुनें: 'She ____ a book right now.'",
                "options_en": ["reads", "read", "is reading", "was reading"],
                "options_hi": ["पढ़ती है", "पढ़ी", "पढ़ रही है", "पढ़ रही थी"],
                "answer_en": "is reading",
                "answer_hi": "पढ़ रही है",
                "attempted": false
        },
        {
                "num": 30,
                "question_en": "Convert the sentence to direct speech: 'He said that he was leaving for work.'",
                "question_hi": "वाक्य को प्रत्यक्ष वाक्य में बदलें: 'He said that he was leaving for work.'",
                "options_en": ["He said, 'I am leaving for work.'", "He said, 'I was leaving for work.'", "He said, 'I leave for work.'", "He said, 'I am leaving for work now.'"],
                "options_hi": ["उसने कहा, 'मैं काम के लिए जा रहा हूँ।'", "उसने कहा, 'मैं काम के लिए जा रहा था।'", "उसने कहा, 'मैं काम के लिए जाता हूँ।'", "उसने कहा, 'मैं काम के लिए जा रहा हूँ अब।'"],
                "answer_en": "He said, 'I am leaving for work.'",
                "answer_hi": "उसने कहा, 'मैं काम के लिए जा रहा हूँ।'",
                "attempted": false
        }
        ,

        {
                "num": 31,
                "question_en": "Choose the correct form of the verb: 'By the time you arrive, I ____ my homework.'",
                "question_hi": "सही क्रिया रूप चुनें: 'By the time you arrive, I ____ my homework.'",
                "options_en": ["will finish", "finish", "finished", "will have finished"],
                "options_hi": ["समाप्त कर दूँगा", "समाप्त करता हूँ", "समाप्त किया", "समाप्त कर चुका हूँ"],
                "answer_en": "will have finished",
                "answer_hi": "समाप्त कर चुका हूँ",
                "attempted": false
        },
        {
                "num": 32,
                "question_en": "Choose the correct preposition: 'She is sitting ___ the table.'",
                "question_hi": "सही पूर्वसर्ग चुनें: 'She is sitting ___ the table.'",
                "options_en": ["in", "on", "at", "under"],
                "options_hi": ["में", "पर", "पर", "नीचे"],
                "answer_en": "on",
                "answer_hi": "पर",
                "attempted": false
        },
        {
                "num": 33,
                "question_en": "Identify the subject in the sentence: 'The teacher is explaining the lesson.'",
                "question_hi": "वाक्य में कर्ता पहचानें: 'The teacher is explaining the lesson.'",
                "options_en": ["teacher", "lesson", "explaining", "is"],
                "options_hi": ["शिक्षक", "पाठ", "समझा रहे हैं", "है"],
                "answer_en": "teacher",
                "answer_hi": "शिक्षक",
                "attempted": false
        },
        {
                "num": 34,
                "question_en": "Which of the following is an example of an exclamatory sentence?",
                "question_hi": "निम्नलिखित में से कौन सा विस्मयादिबोधक वाक्य है?",
                "options_en": ["What a beautiful day!", "Where are you going?", "I am studying.", "She likes to read."],
                "options_hi": ["क्या सुंदर दिन है!", "तुम कहाँ जा रहे हो?", "मैं पढ़ाई कर रहा हूँ।", "वह पढ़ना पसंद करती है।"],
                "answer_en": "What a beautiful day!",
                "answer_hi": "क्या सुंदर दिन है!",
                "attempted": false
        },
        {
                "num": 35,
                "question_en": "Choose the correct conjunction: 'I like tea, ____ I don’t like coffee.'",
                "question_hi": "सही संयोजक चुनें: 'I like tea, ____ I don’t like coffee.'",
                "options_en": ["and", "but", "because", "so"],
                "options_hi": ["और", "लेकिन", "क्योंकि", "इसलिए"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false
        }
        ,

        {
                "num": 36,
                "question_en": "Choose the correct tense: 'By next month, they ____ their project.'",
                "question_hi": "सही काल चुनें: 'अगले महीने तक, वे ____ अपना प्रोजेक्ट पूरा कर लेंगे।'",
                "options_en": ["will complete", "will have completed", "have completed", "completed"],
                "options_hi": ["पूरा करेंगे", "पूरा कर चुके होंगे", "पूरा कर चुके हैं", "पूरा किया"],
                "answer_en": "will have completed",
                "answer_hi": "पूरा कर चुके होंगे",
                "attempted": false
        },
        {
                "num": 37,
                "question_en": "Correct the sentence: 'She don’t like ice cream.'",
                "question_hi": "वाक्य को सही करें: 'She don’t like ice cream.'",
                "options_en": ["She doesn't like ice cream.", "She don't likes ice cream.", "She doesn't likes ice cream.", "She don’t likes ice cream."],
                "options_hi": ["वह आइस क्रीम पसंद नहीं करती।", "वह आइस क्रीम पसंद नहीं करती है।", "वह आइस क्रीम पसंद नहीं करती हैं।", "वह आइस क्रीम नहीं पसंद करती।"],
                "answer_en": "She doesn't like ice cream.",
                "answer_hi": "वह आइस क्रीम पसंद नहीं करती है।",
                "attempted": false
        },
        {
                "num": 38,
                "question_en": "Choose the correct article: '___ book on the table is mine.'",
                "question_hi": "सही आर्टिकल चुनें: '___ book on the table is mine.'",
                "options_en": ["A", "An", "The", "No article"],
                "options_hi": ["एक", "ऐन", "द", "कोई आर्टिकल नहीं"],
                "answer_en": "The",
                "answer_hi": "द",
                "attempted": false
        },
        {
                "num": 39,
                "question_en": "Which of the following is a compound sentence?",
                "question_hi": "निम्नलिखित में से कौन सा संयुक्त वाक्य है?",
                "options_en": ["She went to the market.", "She went to the market and bought some fruits.", "She is studying.", "She went to the market, but forgot her wallet."],
                "options_hi": ["वह बाजार गई।", "वह बाजार गई और कुछ फल खरीदे।", "वह पढ़ाई कर रही है।", "वह बाजार गई, लेकिन अपना पर्स भूल गई।"],
                "answer_en": "She went to the market and bought some fruits.",
                "answer_hi": "वह बाजार गई और कुछ फल खरीदे।",
                "attempted": false
        },
        {
                "num": 40,
                "question_en": "Identify the object in the sentence: 'He gave her a gift.'",
                "question_hi": "वाक्य में कर्म पहचानें: 'He gave her a gift.'",
                "options_en": ["He", "gift", "her", "gave"],
                "options_hi": ["वह", "उपहार", "उसे", "दिया"],
                "answer_en": "gift",
                "answer_hi": "उपहार",
                "attempted": false
        },

        {
                "num": 41,
                "question_en": "Identify the subject of the sentence: 'The students are studying for the exam.'",
                "question_hi": "वाक्य में कर्ता पहचानें: 'The students are studying for the exam.'",
                "options_en": ["students", "are", "studying", "exam"],
                "options_hi": ["छात्र", "हैं", "पढ़ाई कर रहे हैं", "परीक्षा"],
                "answer_en": "students",
                "answer_hi": "छात्र",
                "attempted": false
        },
        {
                "num": 42,
                "question_en": "Choose the correct form of the verb: 'She ____ a new dress yesterday.'",
                "question_hi": "सही क्रिया रूप चुनें: 'She ____ a new dress yesterday.'",
                "options_en": ["buy", "bought", "buys", "buying"],
                "options_hi": ["खरीदी", "खरीदी थी", "खरीदती है", "खरीद रही है"],
                "answer_en": "bought",
                "answer_hi": "खरीदी थी",
                "attempted": false
        },
        {
                "num": 43,
                "question_en": "Which of the following is a complex sentence?",
                "question_hi": "निम्नलिखित में से कौन सा मिश्रित वाक्य है?",
                "options_en": ["She went to the market, and bought some fruits.", "She went to the market because she needed some fruits.", "He is my friend, and I trust him.", "I like music, but she likes painting."],
                "options_hi": ["वह बाजार गई, और कुछ फल खरीदे।", "वह बाजार गई क्योंकि उसे कुछ फल चाहिए थे।", "वह मेरा दोस्त है, और मुझे उस पर विश्वास है।", "मुझे संगीत पसंद है, लेकिन उसे पेंटिंग पसंद है।"],
                "answer_en": "She went to the market because she needed some fruits.",
                "answer_hi": "वह बाजार गई क्योंकि उसे कुछ फल चाहिए थे।",
                "attempted": false
        },
        {
                "num": 44,
                "question_en": "Choose the correct conjunction: 'I like tea, ____ I don't like coffee.'",
                "question_hi": "सही संयोजक चुनें: 'मुझे चाय पसंद है, ____ मुझे कॉफ़ी पसंद नहीं है।'",
                "options_en": ["and", "but", "because", "so"],
                "options_hi": ["और", "लेकिन", "क्योंकि", "इसलिए"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false
        },
        {
                "num": 45,
                "question_en": "Fill in the blank: 'She has been working here ____ 2010.'",
                "question_hi": "रिक्त स्थान भरें: 'She has been working here ____ 2010.'",
                "options_en": ["since", "for", "from", "during"],
                "options_hi": ["से", "के लिए", "से", "के दौरान"],
                "answer_en": "since",
                "answer_hi": "से",
                "attempted": false
        }
        ,

        {
                "num": 46,
                "question_en": "Choose the correct tense: 'By next month, I ____ the project.'",
                "question_hi": "सही काल चुनें: 'अगले महीने तक, मैंने प्रोजेक्ट ____।'",
                "options_en": ["completed", "will complete", "will have completed", "am completing"],
                "options_hi": ["पूरा किया", "पूरा करूंगा", "पूरा कर चुका होगा", "पूरा कर रहा हूँ"],
                "answer_en": "will have completed",
                "answer_hi": "पूरा कर चुका होगा",
                "attempted": false
        },
        {
                "num": 47,
                "question_en": "Which of the following is an example of a compound sentence?",
                "question_hi": "निम्नलिखित में से कौन सा संयुक्त वाक्य है?",
                "options_en": ["She went to the store and bought some milk.", "She went to the store because she needed milk.", "She went to the store to buy some milk.", "She went to the store after she finished her homework."],
                "options_hi": ["वह स्टोर गई और कुछ दूध खरीदी।", "वह स्टोर गई क्योंकि उसे दूध चाहिए था।", "वह स्टोर गई दूध खरीदने के लिए।", "वह स्टोर गई बाद में उसने अपना होमवर्क पूरा किया।"],
                "answer_en": "She went to the store and bought some milk.",
                "answer_hi": "वह स्टोर गई और कुछ दूध खरीदी।",
                "attempted": false
        },
        {
                "num": 48,
                "question_en": "Identify the error in the sentence: 'He can sings very well.'",
                "question_hi": "वाक्य में गलती पहचानें: 'He can sings very well.'",
                "options_en": ["He", "can", "sings", "very well"],
                "options_hi": ["वह", "सकता है", "गाता है", "बहुत अच्छा"],
                "answer_en": "sings",
                "answer_hi": "गाता है",
                "attempted": false
        },
        {
                "num": 49,
                "question_en": "Choose the correct form of the verb: 'If I ____ you, I would have done it.'",
                "question_hi": "सही क्रिया रूप चुनें: 'If I ____ you, I would have done it.'",
                "options_en": ["am", "were", "had been", "was"],
                "options_hi": ["हूँ", "था", "हो चुका था", "था"],
                "answer_en": "had been",
                "answer_hi": "हो चुका था",
                "attempted": false
        },
        {
                "num": 50,
                "question_en": "Complete the sentence: 'I would go to the party if I ____ time.'",
                "question_hi": "वाक्य पूरा करें: 'मैं पार्टी में जाता यदि मुझे ____ समय होता।'",
                "options_en": ["had", "have", "had had", "will have"],
                "options_hi": ["था", "है", "हो चुका था", "होगा"],
                "answer_en": "had",
                "answer_hi": "था",
                "attempted": false
        }
        ,







];



let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes

let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
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
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}

function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};
