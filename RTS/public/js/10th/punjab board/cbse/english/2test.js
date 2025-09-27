
const questions = [
        {
                "num": 1,
                "question_en": "Which tense is used in the sentence: 'She has been working here since 2010.'?",
                "question_hi": "'She has been working here since 2010.' वाक्य में कौन-सा टेंस प्रयुक्त हुआ है?",
                "options_en": ["Present Perfect", "Past Continuous", "Present Perfect Continuous", "Future Perfect"],
                "options_hi": ["प्रेजेंट परफेक्ट", "पास्ट कंटीन्यूअस", "प्रेजेंट परफेक्ट कंटीन्यूअस", "फ्यूचर परफेक्ट"],
                "answer_en": "Present Perfect Continuous",
                "answer_hi": "प्रेजेंट परफेक्ट कंटीन्यूअस",
                "attempted": false
              },
              {
                "num": 2,
                "question_en": "Choose the correct modal: 'You _____ obey the traffic rules.'",
                "question_hi": "सही मोडल चुनें: 'You _____ obey the traffic rules.'",
                "options_en": ["can", "may", "must", "might"],
                "options_hi": ["कर सकते हैं", "हो सकता है", "अवश्य", "शायद"],
                "answer_en": "must",
                "answer_hi": "अवश्य",
                "attempted": false
              },
              {
                "num": 3,
                "question_en": "Choose the correct verb: 'The team _____ playing well.'",
                "question_hi": "सही क्रिया चुनें: 'The team _____ playing well.'",
                "options_en": ["is", "are", "were", "have"],
                "options_hi": ["है", "हैं", "थे", "है"],
                "answer_en": "is",
                "answer_hi": "है",
                "attempted": false
              },
              {
                "num": 4,
                "question_en": "Convert to indirect speech: He said, 'I am tired.'",
                "question_hi": "इनडायरेक्ट स्पीच में बदलें: He said, 'I am tired.'",
                "options_en": ["He said he is tired.", "He said he was tired.", "He said he had been tired.", "He said he tired."],
                "options_hi": ["उसने कहा वह थक गया है।", "उसने कहा वह थक गया था।", "उसने कहा वह थक चुका था।", "उसने कहा वह थक गया।"],
                "answer_en": "He said he was tired.",
                "answer_hi": "उसने कहा वह थक गया था।",
                "attempted": false
              },
              {
                "num": 5,
                "question_en": "Passive voice of: 'The cat chased the mouse.'",
                "question_hi": "'The cat chased the mouse.' का पैसिव वॉइस क्या होगा?",
                "options_en": ["The mouse was chased by the cat.", "The mouse is chased by the cat.", "The mouse chased the cat.", "The mouse had been chased by the cat."],
                "options_hi": ["चूहे को बिल्ली ने पीछा किया।", "चूहे को बिल्ली पीछा करती है।", "चूहे ने बिल्ली का पीछा किया।", "चूहे को बिल्ली ने पीछा किया था।"],
                "answer_en": "The mouse was chased by the cat.",
                "answer_hi": "चूहे को बिल्ली ने पीछा किया।",
                "attempted": false
              },
              {
                "num": 6,
                "question_en": "Fill in the blank: 'She is fond _____ chocolates.'",
                "question_hi": "रिक्त स्थान भरें: 'She is fond _____ chocolates.'",
                "options_en": ["of", "at", "in", "on"],
                "options_hi": ["का", "पर", "में", "पर"],
                "answer_en": "of",
                "answer_hi": "का",
                "attempted": false
              },
              {
                "num": 7,
                "question_en": "Choose the correct determiner: 'I have _____ apples left.'",
                "question_hi": "सही डिटरमाइनर चुनें: 'I have _____ apples left.'",
                "options_en": ["any", "some", "much", "few"],
                "options_hi": ["कोई", "कुछ", "बहुत", "कुछ"],
                "answer_en": "some",
                "answer_hi": "कुछ",
                "attempted": false
              },
              {
                "num": 8,
                "question_en": "Choose the correct conjunction: 'He worked hard _____ he could pass.'",
                "question_hi": "सही कंजंक्शन चुनें: 'He worked hard _____ he could pass.'",
                "options_en": ["because", "so that", "although", "but"],
                "options_hi": ["क्योंकि", "ताकि", "हालांकि", "लेकिन"],
                "answer_en": "so that",
                "answer_hi": "ताकि",
                "attempted": false
              },
              {
                "num": 9,
                "question_en": "Identify the conditional: 'If it rains, we will cancel the trip.'",
                "question_hi": "कंडीशनल पहचानें: 'If it rains, we will cancel the trip.'",
                "options_en": ["Zero Conditional", "First Conditional", "Second Conditional", "Third Conditional"],
                "options_hi": ["जीरो कंडीशनल", "फर्स्ट कंडीशनल", "सेकंड कंडीशनल", "थर्ड कंडीशनल"],
                "answer_en": "First Conditional",
                "answer_hi": "फर्स्ट कंडीशनल",
                "attempted": false
              },
              {
                "num": 10,
                "question_en": "Arrange the words: 'never / she / late / is'",
                "question_hi": "शब्दों को सही क्रम में लगाएँ: 'never / she / late / is'",
                "options_en": ["She is never late.", "She never is late.", "Never she is late.", "Late she is never."],
                "options_hi": ["वह कभी देर से नहीं होती।", "वह नहीं होती कभी देर से।", "कभी नहीं वह देर से होती।", "देर से वह कभी नहीं होती।"],
                "answer_en": "She is never late.",
                "answer_hi": "वह कभी देर से नहीं होती।",
                "attempted": false
              },
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
              },
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
              },
              
                {
                  "num": 21,
                  "question_en": "Choose the correct preposition: 'He is afraid ___ the dark.'",
                  "question_hi": "सही प्रीपोज़ीशन चुनें: 'वह अंधेरे से डरता है।'",
                  "options_en": ["of", "from", "for", "with"],
                  "options_hi": ["का", "से", "के लिए", "के साथ"],
                  "answer_en": "of",
                  "answer_hi": "का",
                  "attempted": false
                },
                {
                  "num": 22,
                  "question_en": "Identify the type of sentence: 'Can you help me?'",
                  "question_hi": "वाक्य का प्रकार पहचानें: 'Can you help me?'",
                  "options_en": ["Declarative", "Imperative", "Interrogative", "Exclamatory"],
                  "options_hi": ["वर्णनात्मक", "आज्ञार्थक", "प्रश्नवाचक", "विस्मयादिबोधक"],
                  "answer_en": "Interrogative",
                  "answer_hi": "प्रश्नवाचक",
                  "attempted": false
                },
                {
                  "num": 23,
                  "question_en": "Choose the correct tense: 'I have lived here for ten years.'",
                  "question_hi": "सही काल चुनें: 'मैं दस सालों से यहाँ रह रहा हूँ।'",
                  "options_en": ["Present Perfect", "Present Continuous", "Past Perfect", "Simple Present"],
                  "options_hi": ["वर्तमान पूर्ण", "वर्तमान निरंतर", "भूतकाल पूर्ण", "साधारण वर्तमान"],
                  "answer_en": "Present Perfect",
                  "answer_hi": "वर्तमान पूर्ण",
                  "attempted": false
                },
                {
                  "num": 24,
                  "question_en": "Identify the adjective: 'She wore a beautiful dress.'",
                  "question_hi": "विशेषण पहचानें: 'उसने एक सुंदर ड्रेस पहनी।'",
                  "options_en": ["She", "wore", "beautiful", "dress"],
                  "options_hi": ["उसने", "पहनी", "सुंदर", "ड्रेस"],
                  "answer_en": "beautiful",
                  "answer_hi": "सुंदर",
                  "attempted": false
                },
                {
                  "num": 25,
                  "question_en": "Fill in the blank with correct form: 'He speaks English better than ___. '",
                  "question_hi": "सही रूप से रिक्त स्थान भरें: 'वह मुझसे बेहतर अंग्रेजी बोलता है।'",
                  "options_en": ["I", "me", "mine", "my"],
                  "options_hi": ["मैं", "मुझे", "मेरा", "मेरी"],
                  "answer_en": "me",
                  "answer_hi": "मुझे",
                  "attempted": false
                },
                {
                  "num": 26,
                  "question_en": "Which one is a correct plural noun?",
                  "question_hi": "इनमें से कौन-सा बहुवचन संज्ञा है?",
                  "options_en": ["Childs", "Childes", "Children", "Child"],
                  "options_hi": ["चाइल्ड्स", "चाइल्डेस", "चिल्ड्रन", "चाइल्ड"],
                  "answer_en": "Children",
                  "answer_hi": "चिल्ड्रन",
                  "attempted": false
                },
                {
                  "num": 27,
                  "question_en": "Choose the correct homophone: 'He knew the ____ answer.'",
                  "question_hi": "सही हमोफोन चुनें: 'उसे ____ उत्तर पता था।'",
                  "options_en": ["new", "knew", "know", "no"],
                  "options_hi": ["नया", "पता था", "जानना", "नहीं"],
                  "answer_en": "knew",
                  "answer_hi": "पता था",
                  "attempted": false
                },
                {
                  "num": 28,
                  "question_en": "Which of the following is an abstract noun?",
                  "question_hi": "इनमें से कौन एक अमूर्त संज्ञा है?",
                  "options_en": ["Love", "Table", "Apple", "Book"],
                  "options_hi": ["प्रेम", "मेज़", "सेब", "किताब"],
                  "answer_en": "Love",
                  "answer_hi": "प्रेम",
                  "attempted": false
                },
                {
                  "num": 29,
                  "question_en": "Identify the verb: 'Rohan plays cricket every Sunday.'",
                  "question_hi": "क्रिया पहचानें: 'रोहन हर रविवार क्रिकेट खेलता है।'",
                  "options_en": ["Rohan", "plays", "cricket", "Sunday"],
                  "options_hi": ["रोहन", "खेलता है", "क्रिकेट", "रविवार"],
                  "answer_en": "plays",
                  "answer_hi": "खेलता है",
                  "attempted": false
                },
                {
                  "num": 30,
                  "question_en": "Which sentence is in future tense?",
                  "question_hi": "इनमें से कौन-सा वाक्य भविष्य काल में है?",
                  "options_en": [
                    "I read a book.",
                    "I was reading a book.",
                    "I will read a book.",
                    "I am reading a book."
                  ],
                  "options_hi": [
                    "मैं किताब पढ़ता हूँ।",
                    "मैं किताब पढ़ रहा था।",
                    "मैं किताब पढ़ूँगा।",
                    "मैं किताब पढ़ रहा हूँ।"
                  ],
                  "answer_en": "I will read a book.",
                  "answer_hi": "मैं किताब पढ़ूँगा।",
                  "attempted": false
                }
              ,
              
                {
                  "num": 31,
                  "question_en": "Choose the correct pronoun: '_____ is my best friend.'",
                  "question_hi": "सही सर्वनाम चुनें: '_____ मेरा सबसे अच्छा दोस्त है।'",
                  "options_en": ["He", "Him", "His", "She"],
                  "options_hi": ["वह", "उसे", "उसका", "वह (लड़की)"],
                  "answer_en": "He",
                  "answer_hi": "वह",
                  "attempted": false
                },
                {
                  "num": 32,
                  "question_en": "Identify the subject: 'The children are playing in the park.'",
                  "question_hi": "कर्ता पहचानें: 'बच्चे पार्क में खेल रहे हैं।'",
                  "options_en": ["The children", "are", "playing", "in the park"],
                  "options_hi": ["बच्चे", "हैं", "खेल रहे हैं", "पार्क में"],
                  "answer_en": "The children",
                  "answer_hi": "बच्चे",
                  "attempted": false
                },
                {
                  "num": 33,
                  "question_en": "What kind of sentence is this: 'What a beautiful day!'",
                  "question_hi": "यह किस प्रकार का वाक्य है: 'क्या सुंदर दिन है!'",
                  "options_en": ["Declarative", "Imperative", "Exclamatory", "Interrogative"],
                  "options_hi": ["वर्णनात्मक", "आज्ञार्थक", "विस्मयादिबोधक", "प्रश्नवाचक"],
                  "answer_en": "Exclamatory",
                  "answer_hi": "विस्मयादिबोधक",
                  "attempted": false
                },
                {
                  "num": 34,
                  "question_en": "Choose the correct form: 'He has _____ a lot of money.'",
                  "question_hi": "सही रूप चुनें: 'उसने बहुत सारा पैसा ____ है।'",
                  "options_en": ["earn", "earning", "earned", "earns"],
                  "options_hi": ["कमाया", "कमा रहा", "कमाया है", "कमाता है"],
                  "answer_en": "earned",
                  "answer_hi": "कमाया है",
                  "attempted": false
                },
                {
                  "num": 35,
                  "question_en": "Find the synonym of 'happy':",
                  "question_hi": "'happy' का पर्यायवाची शब्द चुनें:",
                  "options_en": ["sad", "joyful", "angry", "upset"],
                  "options_hi": ["दुखी", "प्रसन्न", "गुस्सैल", "परेशान"],
                  "answer_en": "joyful",
                  "answer_hi": "प्रसन्न",
                  "attempted": false
                },
                {
                  "num": 36,
                  "question_en": "Which word is an antonym of 'strong'?",
                  "question_hi": "'strong' का विलोम शब्द कौन-सा है?",
                  "options_en": ["powerful", "mighty", "weak", "tough"],
                  "options_hi": ["शक्तिशाली", "बलवान", "कमज़ोर", "कठिन"],
                  "answer_en": "weak",
                  "answer_hi": "कमज़ोर",
                  "attempted": false
                },
                {
                  "num": 37,
                  "question_en": "Identify the correct sentence:",
                  "question_hi": "सही वाक्य पहचानें:",
                  "options_en": [
                    "She don't like coffee.",
                    "She doesn't likes coffee.",
                    "She doesn't like coffee.",
                    "She don't likes coffee."
                  ],
                  "options_hi": [
                    "वह कॉफ़ी नहीं पसंद करती।",
                    "वह कॉफ़ी पसंद नहीं करती है।",
                    "वह कॉफ़ी पसंद नहीं करती।",
                    "वह कॉफ़ी पसंद नहीं करती है।"
                  ],
                  "answer_en": "She doesn't like coffee.",
                  "answer_hi": "वह कॉफ़ी पसंद नहीं करती।",
                  "attempted": false
                },
                {
                  "num": 38,
                  "question_en": "Choose the correct spelling:",
                  "question_hi": "सही वर्तनी चुनें:",
                  "options_en": ["definately", "definitely", "definitly", "defineteley"],
                  "options_hi": ["डैफिनेटली", "डेफिनिटली", "डैफिनिटली", "डैफिनेटेले"],
                  "answer_en": "definitely",
                  "answer_hi": "डेफिनिटली",
                  "attempted": false
                },
                {
                  "num": 39,
                  "question_en": "What is the passive voice of 'She sings a song'?",
                  "question_hi": "'She sings a song' का पैसिव वॉइस क्या है?",
                  "options_en": [
                    "A song is sung by her.",
                    "A song was sung by her.",
                    "A song has been sung by her.",
                    "A song will be sung by her."
                  ],
                  "options_hi": [
                    "एक गीत उसके द्वारा गाया जाता है।",
                    "एक गीत उसके द्वारा गाया गया था।",
                    "एक गीत उसके द्वारा गाया गया है।",
                    "एक गीत उसके द्वारा गाया जाएगा।"
                  ],
                  "answer_en": "A song is sung by her.",
                  "answer_hi": "एक गीत उसके द्वारा गाया जाता है।",
                  "attempted": false
                },
                {
                  "num": 40,
                  "question_en": "Choose the correct question tag: 'You are coming, _____?'",
                  "question_hi": "सही प्रश्न टैग चुनें: 'तुम आ रहे हो, _____?'",
                  "options_en": ["aren’t you", "isn’t you", "don’t you", "won’t you"],
                  "options_hi": ["नहीं आ रहे?", "है ना?", "नहीं हो?", "क्या नहीं?"],
                  "answer_en": "aren’t you",
                  "answer_hi": "नहीं आ रहे?",
                  "attempted": false
                }
              ,
              
                {
                  "num": 41,
                  "question_en": "Identify the tense: 'He had eaten before I arrived.'",
                  "question_hi": "टेंस पहचानें: 'He had eaten before I arrived.'",
                  "options_en": ["Past Simple", "Present Perfect", "Past Perfect", "Future Perfect"],
                  "options_hi": ["साधारण भूतकाल", "वर्तमान पूर्ण", "पूर्व भूतकाल", "भविष्य पूर्ण"],
                  "answer_en": "Past Perfect",
                  "answer_hi": "पूर्व भूतकाल",
                  "attempted": false
                },
                {
                  "num": 42,
                  "question_en": "Choose the correct comparative form: 'This book is _____ than that one.'",
                  "question_hi": "सही तुलनात्मक रूप चुनें: 'यह किताब उस किताब से _____ है।'",
                  "options_en": ["good", "better", "best", "more good"],
                  "options_hi": ["अच्छा", "बेहतर", "सबसे अच्छा", "और अच्छा"],
                  "answer_en": "better",
                  "answer_hi": "बेहतर",
                  "attempted": false
                },
                {
                  "num": 43,
                  "question_en": "What is the noun in this sentence: 'Honesty is the best policy.'",
                  "question_hi": "इस वाक्य में संज्ञा क्या है: 'Honesty is the best policy.'",
                  "options_en": ["is", "the", "policy", "honesty"],
                  "options_hi": ["है", "द", "नीति", "ईमानदारी"],
                  "answer_en": "honesty",
                  "answer_hi": "ईमानदारी",
                  "attempted": false
                },
                {
                  "num": 44,
                  "question_en": "Select the correct preposition: 'He jumped _____ the wall.'",
                  "question_hi": "सही पूर्वसर्ग चुनें: 'He jumped _____ the wall.'",
                  "options_en": ["in", "into", "onto", "over"],
                  "options_hi": ["में", "के अंदर", "पर", "के ऊपर से"],
                  "answer_en": "over",
                  "answer_hi": "के ऊपर से",
                  "attempted": false
                },
                {
                  "num": 45,
                  "question_en": "Find the correct passive form: 'They are watching a movie.'",
                  "question_hi": "सही पैसिव वॉइस चुनें: 'They are watching a movie.'",
                  "options_en": [
                    "A movie is watched by them.",
                    "A movie is being watched by them.",
                    "A movie was watched by them.",
                    "A movie will be watched by them."
                  ],
                  "options_hi": [
                    "एक फिल्म उनके द्वारा देखी जाती है।",
                    "एक फिल्म उनके द्वारा देखी जा रही है।",
                    "एक फिल्म उनके द्वारा देखी गई थी।",
                    "एक फिल्म उनके द्वारा देखी जाएगी।"
                  ],
                  "answer_en": "A movie is being watched by them.",
                  "answer_hi": "एक फिल्म उनके द्वारा देखी जा रही है।",
                  "attempted": false
                },
                {
                  "num": 46,
                  "question_en": "Identify the adjective: 'The tall boy is my cousin.'",
                  "question_hi": "विशेषण पहचानें: 'The tall boy is my cousin.'",
                  "options_en": ["boy", "tall", "cousin", "my"],
                  "options_hi": ["लड़का", "लंबा", "चचेरा भाई", "मेरा"],
                  "answer_en": "tall",
                  "answer_hi": "लंबा",
                  "attempted": false
                },
                {
                  "num": 47,
                  "question_en": "Choose the correct reported speech: 'He said, “I am fine.”'",
                  "question_hi": "सही रिपोर्टेड स्पीच चुनें: 'He said, “I am fine.”'",
                  "options_en": [
                    "He said that he is fine.",
                    "He said that I was fine.",
                    "He said that he was fine.",
                    "He said he will be fine."
                  ],
                  "options_hi": [
                    "उसने कहा कि वह ठीक है।",
                    "उसने कहा कि मैं ठीक था।",
                    "उसने कहा कि वह ठीक था।",
                    "उसने कहा कि वह ठीक होगा।"
                  ],
                  "answer_en": "He said that he was fine.",
                  "answer_hi": "उसने कहा कि वह ठीक था।",
                  "attempted": false
                },
                {
                  "num": 48,
                  "question_en": "Choose the correct form of verb: 'She _____ to the gym every morning.'",
                  "question_hi": "क्रिया का सही रूप चुनें: 'वह हर सुबह जिम _____।'",
                  "options_en": ["go", "goes", "gone", "going"],
                  "options_hi": ["जाती", "जाती है", "गई", "जा रही"],
                  "answer_en": "goes",
                  "answer_hi": "जाती है",
                  "attempted": false
                },
                {
                  "num": 49,
                  "question_en": "Pick the correct synonym of 'difficult':",
                  "question_hi": "'difficult' का सही पर्यायवाची चुनें:",
                  "options_en": ["easy", "tough", "fun", "short"],
                  "options_hi": ["आसान", "कठिन", "मज़ेदार", "छोटा"],
                  "answer_en": "tough",
                  "answer_hi": "कठिन",
                  "attempted": false
                },
                {
                  "num": 50,
                  "question_en": "What part of speech is the word 'quickly'?",
                  "question_hi": "'quickly' शब्द कौन-सा पार्ट ऑफ स्पीच है?",
                  "options_en": ["Noun", "Adjective", "Verb", "Adverb"],
                  "options_hi": ["संज्ञा", "विशेषण", "क्रिया", "क्रिया विशेषण"],
                  "answer_en": "Adverb",
                  "answer_hi": "क्रिया विशेषण",
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