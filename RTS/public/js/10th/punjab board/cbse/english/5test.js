const questions = [

        {
                "num": 1,
                "question_en": "Identify the subject of the sentence: 'The cat is sleeping on the mat.'",
                "question_hi": "वाक्य का विषय पहचानें: 'बिल्ली चटाई पर सो रही है।'",
                "options_en": ["The cat", "is sleeping", "on the mat", "the mat"],
                "options_hi": ["बिल्ली", "सो रही है", "चटाई पर", "चटाई"],
                "answer_en": "The cat",
                "answer_hi": "बिल्ली",
                "attempted": false
        },
        {
                "num": 2,
                "question_en": "Choose the correct verb: 'She ____ to the store every day.'",
                "question_hi": "सही क्रिया चुनें: 'वह हर दिन दुकान पर ____ जाती है।'",
                "options_en": ["go", "goes", "going", "gone"],
                "options_hi": ["जाती है", "जाता है", "जा रही है", "गया है"],
                "answer_en": "goes",
                "answer_hi": "जाती है",
                "attempted": false
        },
        {
                "num": 3,
                "question_en": "Fill in the blank: 'I ____ my homework before dinner.'",
                "question_hi": "रिक्त स्थान भरें: 'मैं डिनर से पहले अपना होमवर्क ____।'",
                "options_en": ["do", "did", "doing", "done"],
                "options_hi": ["करता हूँ", "किया था", "कर रहा हूँ", "किया है"],
                "answer_en": "did",
                "answer_hi": "किया था",
                "attempted": false
        },
        {
                "num": 4,
                "question_en": "Choose the correct preposition: 'The cat is hiding ____ the bed.'",
                "question_hi": "सही प्रेपोजीशन चुनें: 'बिल्ली बिस्तर ____ छिप रही है।'",
                "options_en": ["on", "under", "in", "over"],
                "options_hi": ["पर", "नीचे", "में", "ऊपर"],
                "answer_en": "under",
                "answer_hi": "नीचे",
                "attempted": false
        },
        {
                "num": 5,
                "question_en": "Identify the adverb: 'He runs very fast.'",
                "question_hi": "एडवर्ब पहचानें: 'वह बहुत तेज दौड़ता है।'",
                "options_en": ["He", "runs", "very", "fast"],
                "options_hi": ["वह", "दौड़ता है", "बहुत", "तेज"],
                "answer_en": "very",
                "answer_hi": "बहुत",
                "attempted": false
        },
        {
                "num": 6,
                "question_en": "Choose the correct article: 'She is ____ honest person.'",
                "question_hi": "सही आर्टिकल चुनें: 'वह ____ ईमानदार व्यक्ति है।'",
                "options_en": ["a", "an", "the", "no article"],
                "options_hi": ["ए", "ऐन", "द", "कोई आर्टिकल नहीं"],
                "answer_en": "an",
                "answer_hi": "ऐन",
                "attempted": false
        },
        {
                "num": 7,
                "question_en": "Choose the correct conjunction: 'I want to go to the party, ____ I have a lot of work to do.'",
                "question_hi": "सही कंजंक्शन चुनें: 'मैं पार्टी में जाना चाहता हूँ, ____ मुझे बहुत काम करना है।'",
                "options_en": ["but", "and", "because", "so"],
                "options_hi": ["लेकिन", "और", "क्योंकि", "इसलिए"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false
        },
        {
                "num": 8,
                "question_en": "Choose the correct verb tense: 'He ____ a book right now.'",
                "question_hi": "सही क्रिया काल चुनें: 'वह अभी एक किताब ____ है।'",
                "options_en": ["is reading", "reads", "has read", "read"],
                "options_hi": ["पढ़ रहा है", "पढ़ता है", "पढ़ चुका है", "पढ़ी थी"],
                "answer_en": "is reading",
                "answer_hi": "पढ़ रहा है",
                "attempted": false
        },
        {
                "num": 9,
                "question_en": "Identify the object of the sentence: 'She gave him a gift.'",
                "question_hi": "वाक्य का ऑब्जेक्ट पहचानें: 'उसने उसे एक उपहार दिया।'",
                "options_en": ["She", "gave", "him", "gift"],
                "options_hi": ["वह", "दिया", "उसे", "उपहार"],
                "answer_en": "gift",
                "answer_hi": "उपहार",
                "attempted": false
        },
        {
                "num": 10,
                "question_en": "Choose the correct modal verb: 'He ____ be at home now.'",
                "question_hi": "सही मोडल क्रिया चुनें: 'वह अब घर पर ____ होगा।'",
                "options_en": ["can", "may", "must", "should"],
                "options_hi": ["सकता है", "हो सकता है", "अवश्य", "चाहिए"],
                "answer_en": "must",
                "answer_hi": "अवश्य",
                "attempted": false
        }
        ,

        {
                "num": 11,
                "question_en": "Choose the correct verb form: 'By the time we arrive, they ____ the work.'",
                "question_hi": "सही क्रिया रूप चुनें: 'जब तक हम पहुँचें, वे ____ काम कर चुके होंगे।'",
                "options_en": ["will finish", "finished", "have finished", "will have finished"],
                "options_hi": ["पूरा करेंगे", "पूरा किया", "पूरा किया है", "पूरा कर चुके होंगे"],
                "answer_en": "will have finished",
                "answer_hi": "पूरा कर चुके होंगे",
                "attempted": false
        },
        {
                "num": 12,
                "question_en": "Choose the correct form of the adjective: 'This book is ____ than that one.'",
                "question_hi": "सही विशेषण रूप चुनें: 'यह किताब उस किताब से ____ है।'",
                "options_en": ["good", "better", "best", "well"],
                "options_hi": ["अच्छा", "बेहतर", "सर्वश्रेष्ठ", "अच्छी तरह से"],
                "answer_en": "better",
                "answer_hi": "बेहतर",
                "attempted": false
        },
        {
                "num": 13,
                "question_en": "Identify the type of sentence: 'Do you like coffee?'",
                "question_hi": "वाक्य का प्रकार पहचानें: 'क्या आपको कॉफी पसंद है?'",
                "options_en": ["Statement", "Question", "Exclamation", "Command"],
                "options_hi": ["वाक्य", "प्रश्न", "विस्मयादिबोधक", "आदेश"],
                "answer_en": "Question",
                "answer_hi": "प्रश्न",
                "attempted": false
        },
        {
                "num": 14,
                "question_en": "Choose the correct word: 'She is ____ of the news.'",
                "question_hi": "सही शब्द चुनें: 'वह खबर के ____ है।'",
                "options_en": ["aware", "awareness", "aware of", "awareness of"],
                "options_hi": ["जागरूक", "जागरूकता", "खबर के बारे में जागरूक", "जागरूकता के बारे में"],
                "answer_en": "aware of",
                "answer_hi": "खबर के बारे में जागरूक",
                "attempted": false
        },
        {
                "num": 15,
                "question_en": "Fill in the blank: 'She ____ a book when I saw her.'",
                "question_hi": "रिक्त स्थान भरें: 'वह एक किताब ____ थी जब मैंने उसे देखा।'",
                "options_en": ["read", "reads", "was reading", "had read"],
                "options_hi": ["पढ़ रही थी", "पढ़ती थी", "पढ़ रही है", "पढ़ी थी"],
                "answer_en": "was reading",
                "answer_hi": "पढ़ रही थी",
                "attempted": false
        },
        {
                "num": 16,
                "question_en": "Choose the correct preposition: 'I am going to the store ____ Monday.'",
                "question_hi": "सही प्रेपोजीशन चुनें: 'मैं सोमवार को दुकान ____ जा रहा हूँ।'",
                "options_en": ["on", "in", "at", "by"],
                "options_hi": ["पर", "में", "को", "तक"],
                "answer_en": "on",
                "answer_hi": "पर",
                "attempted": false
        },
        {
                "num": 17,
                "question_en": "Choose the correct conjunction: 'I will go to the party ____ I finish my homework.'",
                "question_hi": "सही कंजंक्शन चुनें: 'मैं पार्टी में जाऊँगा ____ मैं अपना होमवर्क खत्म कर लूँ।'",
                "options_en": ["and", "but", "if", "or"],
                "options_hi": ["और", "लेकिन", "अगर", "या"],
                "answer_en": "if",
                "answer_hi": "अगर",
                "attempted": false
        },
        {
                "num": 18,
                "question_en": "Identify the adverb: 'She speaks very clearly.'",
                "question_hi": "एडवर्ब पहचानें: 'वह बहुत स्पष्ट रूप से बोलती है।'",
                "options_en": ["She", "speaks", "very", "clearly"],
                "options_hi": ["वह", "बोलती है", "बहुत", "स्पष्ट रूप से"],
                "answer_en": "clearly",
                "answer_hi": "स्पष्ट रूप से",
                "attempted": false
        },
        {
                "num": 19,
                "question_en": "Convert to indirect speech: 'He said, “I am going to the market.”'",
                "question_hi": "इनडायरेक्ट स्पीच में बदलें: 'उसने कहा, “मैं बाजार जा रहा हूँ।”'",
                "options_en": ["He said that he was going to the market.", "He said that I am going to the market.", "He said he going to the market.", "He said he will go to the market."],
                "options_hi": ["उसने कहा कि वह बाजार जा रहा था।", "उसने कहा कि मैं बाजार जा रहा हूँ।", "उसने कहा वह बाजार जा रहा है।", "उसने कहा वह बाजार जाएगा।"],
                "answer_en": "He said that he was going to the market.",
                "answer_hi": "उसने कहा कि वह बाजार जा रहा था।",
                "attempted": false
        },
        {
                "num": 20,
                "question_en": "Choose the correct modal verb: 'You ____ eat too much sugar.'",
                "question_hi": "सही मोडल क्रिया चुनें: 'तुम्हें बहुत अधिक चीनी ____ नहीं खानी चाहिए।'",
                "options_en": ["must", "should", "can", "might"],
                "options_hi": ["अवश्य", "चाहिए", "सकते हो", "शायद"],
                "answer_en": "should",
                "answer_hi": "चाहिए",
                "attempted": false
        }
        ,

        {
                "num": 21,
                "question_en": "Identify the error in the sentence: 'She can sings well.'",
                "question_hi": "वाक्य में त्रुटि पहचानें: 'वह अच्छे से गाती है।'",
                "options_en": ["She", "can", "sings", "well"],
                "options_hi": ["वह", "सकती है", "गाती है", "अच्छे से"],
                "answer_en": "sings",
                "answer_hi": "गाती है",
                "attempted": false
        },
        {
                "num": 22,
                "question_en": "Fill in the blank: 'She ____ a letter when I arrived.'",
                "question_hi": "रिक्त स्थान भरें: 'वह एक पत्र ____ थी जब मैं पहुँचा।'",
                "options_en": ["writes", "wrote", "was writing", "had written"],
                "options_hi": ["लिख रही थी", "लिख चुकी थी", "लिख चुकी थी", "लिखी थी"],
                "answer_en": "was writing",
                "answer_hi": "लिख रही थी",
                "attempted": false
        },
        {
                "num": 23,
                "question_en": "Choose the correct verb: 'She ____ a book every evening.'",
                "question_hi": "सही क्रिया चुनें: 'वह हर शाम एक किताब ____ है।'",
                "options_en": ["reads", "read", "is reading", "will read"],
                "options_hi": ["पढ़ती है", "पढ़ी", "पढ़ रही है", "पढ़ेगी"],
                "answer_en": "reads",
                "answer_hi": "पढ़ती है",
                "attempted": false
        },
        {
                "num": 24,
                "question_en": "Choose the correct preposition: 'The cat is hiding ____ the table.'",
                "question_hi": "सही प्रेपोजीशन चुनें: 'बिल्ली मेज ____ छिपी हुई है।'",
                "options_en": ["under", "on", "in", "at"],
                "options_hi": ["के नीचे", "पर", "में", "को"],
                "answer_en": "under",
                "answer_hi": "के नीचे",
                "attempted": false
        },
        {
                "num": 25,
                "question_en": "Choose the correct conjunction: 'I wanted to go to the park, ____ it was raining.'",
                "question_hi": "सही कंजंक्शन चुनें: 'मैं पार्क जाना चाहता था, ____ बारिश हो रही थी।'",
                "options_en": ["and", "but", "or", "so"],
                "options_hi": ["और", "लेकिन", "या", "इसलिए"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false
        },
        {
                "num": 26,
                "question_en": "Identify the error in the sentence: 'She doesn't like to swim and run.'",
                "question_hi": "वाक्य में त्रुटि पहचानें: 'उसे तैरना और दौड़ना पसंद नहीं है।'",
                "options_en": ["She", "doesn't", "like", "swim and run"],
                "options_hi": ["वह", "नहीं", "पसंद", "तैरना और दौड़ना"],
                "answer_en": "swim and run",
                "answer_hi": "तैरना और दौड़ना",
                "attempted": false
        },
        {
                "num": 27,
                "question_en": "Choose the correct form of the verb: 'She ____ to the store yesterday.'",
                "question_hi": "सही क्रिया रूप चुनें: 'वह कल दुकान ____ थी।'",
                "options_en": ["go", "goes", "gone", "went"],
                "options_hi": ["गई", "जाती है", "गई थी", "गई थी"],
                "answer_en": "went",
                "answer_hi": "गई थी",
                "attempted": false
        },
        {
                "num": 28,
                "question_en": "Choose the correct word: 'I don't have ____ money left.'",
                "question_hi": "सही शब्द चुनें: 'मेरे पास ____ पैसा बचा है।'",
                "options_en": ["some", "any", "many", "few"],
                "options_hi": ["कुछ", "कोई", "कई", "थोड़े"],
                "answer_en": "any",
                "answer_hi": "कोई",
                "attempted": false
        },
        {
                "num": 29,
                "question_en": "Fill in the blank: 'He ____ to the gym every morning.'",
                "question_hi": "रिक्त स्थान भरें: 'वह हर सुबह जिम ____ जाता है।'",
                "options_en": ["go", "goes", "is going", "went"],
                "options_hi": ["जाता है", "जाता", "जा रहा है", "गया"],
                "answer_en": "goes",
                "answer_hi": "जाता है",
                "attempted": false
        },
        {
                "num": 30,
                "question_en": "Choose the correct article: 'This is ____ interesting book.'",
                "question_hi": "सही आर्टिकल चुनें: 'यह ____ दिलचस्प किताब है।'",
                "options_en": ["a", "an", "the", "no article"],
                "options_hi": ["ए", "ऐन", "द", "कोई आर्टिकल नहीं"],
                "answer_en": "an",
                "answer_hi": "ऐन",
                "attempted": false
        }
        ,

        {
                "num": 31,
                "question_en": "Identify the correct sentence: 'He enjoy playing soccer.'",
                "question_hi": "सही वाक्य पहचानें: 'वह सॉकर खेलना पसंद करता है।'",
                "options_en": ["He enjoys playing soccer.", "He enjoy playing soccer.", "He is enjoy playing soccer.", "He played soccer enjoy."],
                "options_hi": ["वह सॉकर खेलना पसंद करता है।", "वह सॉकर खेलना पसंद करता है।", "वह सॉकर खेलने का आनंद ले रहा है।", "वह सॉकर खेलता आनंद है।"],
                "answer_en": "He enjoys playing soccer.",
                "answer_hi": "वह सॉकर खेलना पसंद करता है।",
                "attempted": false
        },
        {
                "num": 32,
                "question_en": "Fill in the blank: 'I will go to the market ____ I finish my homework.'",
                "question_hi": "रिक्त स्थान भरें: 'मैं बाजार जाऊँगा ____ मैं अपना होमवर्क खत्म करूंगा।'",
                "options_en": ["after", "before", "while", "until"],
                "options_hi": ["बाद", "पहले", "जब", "जब तक"],
                "answer_en": "after",
                "answer_hi": "बाद",
                "attempted": false
        },
        {
                "num": 33,
                "question_en": "Choose the correct form of the verb: 'She ____ in the garden right now.'",
                "question_hi": "सही क्रिया रूप चुनें: 'वह अभी बगिया में ____ है।'",
                "options_en": ["is working", "works", "worked", "was working"],
                "options_hi": ["काम कर रही है", "काम करती है", "काम किया", "काम कर रही थी"],
                "answer_en": "is working",
                "answer_hi": "काम कर रही है",
                "attempted": false
        },
        {
                "num": 34,
                "question_en": "Choose the correct sentence: 'She didn't finished her homework.'",
                "question_hi": "सही वाक्य चुनें: 'वह अपना होमवर्क पूरा नहीं किया।'",
                "options_en": ["She didn't finish her homework.", "She didn't finished her homework.", "She don't finish her homework.", "She hasn't finished her homework."],
                "options_hi": ["वह अपना होमवर्क पूरा नहीं किया।", "वह अपना होमवर्क पूरा नहीं किया।", "वह अपना होमवर्क पूरा नहीं करती।", "वह अपना होमवर्क पूरा नहीं किया है।"],
                "answer_en": "She didn't finish her homework.",
                "answer_hi": "वह अपना होमवर्क पूरा नहीं किया।",
                "attempted": false
        },
        {
                "num": 35,
                "question_en": "Fill in the blank: 'The children ____ playing in the park.'",
                "question_hi": "रिक्त स्थान भरें: 'बच्चे पार्क में ____ खेल रहे हैं।'",
                "options_en": ["is", "are", "was", "were"],
                "options_hi": ["है", "हैं", "था", "थे"],
                "answer_en": "are",
                "answer_hi": "हैं",
                "attempted": false
        },
        {
                "num": 36,
                "question_en": "Choose the correct form of the verb: 'By the time we arrive, they ____ already left.'",
                "question_hi": "सही क्रिया रूप चुनें: 'जब तक हम पहुँचेंगे, वे ____ पहले ही चले गए होंगे।'",
                "options_en": ["will have", "will have been", "have", "had"],
                "options_hi": ["होंगे", "होगी", "हैं", "हो गए थे"],
                "answer_en": "will have",
                "answer_hi": "होंगे",
                "attempted": false
        },
        {
                "num": 37,
                "question_en": "Choose the correct word: 'She is ____ intelligent student.'",
                "question_hi": "सही शब्द चुनें: 'वह ____ बुद्धिमान छात्रा है।'",
                "options_en": ["an", "a", "the", "no article"],
                "options_hi": ["एक", "ऐन", "द", "कोई आर्टिकल नहीं"],
                "answer_en": "an",
                "answer_hi": "ऐन",
                "attempted": false
        },
        {
                "num": 38,
                "question_en": "Identify the adverb: 'He ran quickly to the station.'",
                "question_hi": "एडवर्ब पहचानें: 'वह स्टेशन तक जल्दी दौड़ा।'",
                "options_en": ["He", "ran", "quickly", "station"],
                "options_hi": ["वह", "दौड़ा", "जल्दी", "स्टेशन"],
                "answer_en": "quickly",
                "answer_hi": "जल्दी",
                "attempted": false
        },
        {
                "num": 39,
                "question_en": "Choose the correct sentence: 'The book is on the table.'",
                "question_hi": "सही वाक्य चुनें: 'किताब मेज पर है।'",
                "options_en": ["The book on the table is.", "On the table is the book.", "The book is on the table.", "The table is on the book."],
                "options_hi": ["किताब मेज पर है।", "मेज पर किताब है।", "किताब पर मेज है।", "किताब मेज पर रखा है।"],
                "answer_en": "The book is on the table.",
                "answer_hi": "किताब मेज पर है।",
                "attempted": false
        },
        {
                "num": 40,
                "question_en": "Identify the subject in the sentence: 'The dog barked loudly.'",
                "question_hi": "वाक्य में कर्ता पहचानें: 'कुत्ता जोर से भौंका।'",
                "options_en": ["dog", "barked", "loudly", "the"],
                "options_hi": ["कुत्ता", "भौंका", "जोर से", "वह"],
                "answer_en": "dog",
                "answer_hi": "कुत्ता",
                "attempted": false
        }
        ,


        {
                "num": 41,
                "question_en": "Fill in the blank: 'I ____ been to that restaurant before.'",
                "question_hi": "रिक्त स्थान भरें: 'मैं ____ पहले उस रेस्तरां में गया हूँ।'",
                "options_en": ["have", "has", "had", "am"],
                "options_hi": ["हूँ", "है", "था", "है"],
                "answer_en": "have",
                "answer_hi": "हूँ",
                "attempted": false
        },
        {
                "num": 42,
                "question_en": "Choose the correct sentence: 'She don't like coffee.'",
                "question_hi": "सही वाक्य चुनें: 'वह कॉफी पसंद नहीं करती है।'",
                "options_en": ["She don't like coffee.", "She doesn't like coffee.", "She not like coffee.", "She don't likes coffee."],
                "options_hi": ["वह कॉफी पसंद नहीं करती है।", "वह कॉफी पसंद नहीं करती है।", "वह कॉफी नहीं पसंद करती है।", "वह कॉफी नहीं पसंद करती है।"],
                "answer_en": "She doesn't like coffee.",
                "answer_hi": "वह कॉफी पसंद नहीं करती है।",
                "attempted": false
        },
        {
                "num": 43,
                "question_en": "Identify the direct object in the sentence: 'She ate the apple.'",
                "question_hi": "वाक्य में प्रत्यक्ष वस्तु पहचानें: 'उसने सेब खाया।'",
                "options_en": ["She", "ate", "apple", "the"],
                "options_hi": ["वह", "खाया", "सेब", "को"],
                "answer_en": "apple",
                "answer_hi": "सेब",
                "attempted": false
        },
        {
                "num": 44,
                "question_en": "Choose the correct form of the verb: 'He ____ to the park every day.'",
                "question_hi": "सही क्रिया रूप चुनें: 'वह हर दिन पार्क जाता है।'",
                "options_en": ["go", "goes", "going", "gone"],
                "options_hi": ["जाता है", "जाता", "जा रहा है", "गया है"],
                "answer_en": "goes",
                "answer_hi": "जाता है",
                "attempted": false
        },
        {
                "num": 45,
                "question_en": "Fill in the blank: 'She _____ a letter when I called her.'",
                "question_hi": "रिक्त स्थान भरें: 'वह एक पत्र _____ जब मैंने उसे कॉल किया।'",
                "options_en": ["wrote", "was writing", "writes", "had written"],
                "options_hi": ["लिखा", "लिख रही थी", "लिखती है", "लिख चुकी थी"],
                "answer_en": "was writing",
                "answer_hi": "लिख रही थी",
                "attempted": false
        },
        {
                "num": 46,
                "question_en": "Choose the correct sentence: 'I can runs fast.'",
                "question_hi": "सही वाक्य चुनें: 'मैं तेज़ दौड़ सकता हूँ।'",
                "options_en": ["I can runs fast.", "I can run fast.", "I can running fast.", "I run fast can."],
                "options_hi": ["मैं तेज़ दौड़ सकता हूँ।", "मैं दौड़ सकता हूँ।", "मैं तेज़ दौड़ रहा हूँ।", "मैं दौड़ सकता हूँ तेज़।"],
                "answer_en": "I can run fast.",
                "answer_hi": "मैं तेज़ दौड़ सकता हूँ।",
                "attempted": false
        },
        {
                "num": 47,
                "question_en": "Choose the correct conjunction: 'I want to go to the party, ____ I am feeling sick.'",
                "question_hi": "सही कंजंक्शन चुनें: 'मैं पार्टी में जाना चाहता हूँ, ____ मुझे बीमारी लग रही है।'",
                "options_en": ["but", "and", "so", "because"],
                "options_hi": ["लेकिन", "और", "इसलिए", "क्योंकि"],
                "answer_en": "but",
                "answer_hi": "लेकिन",
                "attempted": false
        },
        {
                "num": 48,
                "question_en": "Choose the correct form of the verb: 'We ____ finished our homework.'",
                "question_hi": "सही क्रिया रूप चुनें: 'हमने अपना होमवर्क ____।'",
                "options_en": ["have", "had", "has", "are"],
                "options_hi": ["है", "था", "हैं", "होगा"],
                "answer_en": "have",
                "answer_hi": "है",
                "attempted": false
        },
        {
                "num": 49,
                "question_en": "Choose the correct preposition: 'The cat is hiding ____ the sofa.'",
                "question_hi": "सही प्रेपोजीशन चुनें: 'बिल्ली सोफे के ____ छिपी है।'",
                "options_en": ["under", "on", "in", "behind"],
                "options_hi": ["नीचे", "पर", "में", "के पीछे"],
                "answer_en": "under",
                "answer_hi": "नीचे",
                "attempted": false
        },
        {
                "num": 50,
                "question_en": "Fill in the blank: 'They ____ to the cinema if they have time.'",
                "question_hi": "रिक्त स्थान भरें: 'वे सिनेमा ____ अगर उनके पास समय होगा।'",
                "options_en": ["go", "will go", "went", "would go"],
                "options_hi": ["जाते हैं", "जाएंगे", "गए थे", "जाएँगे"],
                "answer_en": "will go",
                "answer_hi": "जाएंगे",
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