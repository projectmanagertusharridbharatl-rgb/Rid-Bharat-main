const questions = [
        
        {
          "num": 1,
          "question_en": "Identify the correct form of the verb: 'She ____ to the park every Sunday.'",
          "question_hi": "सही क्रिया रूप पहचानें: 'वह हर रविवार पार्क ____ जाती है।'",
          "options_en": ["go", "goes", "going", "gone"],
          "options_hi": ["जाती है", "जाती", "जाना", "गई"],
          "answer_en": "goes",
          "answer_hi": "जाती है",
          "attempted": false
        },
        {
          "num": 2,
          "question_en": "Choose the correct preposition: 'The cat is hiding ____ the bed.'",
          "question_hi": "सही पूर्वसर्ग चुनें: 'बिल्ली बिस्तर ____ छिपी हुई है।'",
          "options_en": ["under", "on", "in", "at"],
          "options_hi": ["के नीचे", "पर", "में", "पर"],
          "answer_en": "under",
          "answer_hi": "के नीचे",
          "attempted": false
        },
        {
          "num": 3,
          "question_en": "Choose the correct conjunction: 'I wanted to go out, ____ it was raining.'",
          "question_hi": "सही संयोजक चुनें: 'मैं बाहर जाना चाहता था, ____ बारिश हो रही थी।'",
          "options_en": ["but", "and", "or", "because"],
          "options_hi": ["लेकिन", "और", "या", "क्योंकि"],
          "answer_en": "but",
          "answer_hi": "लेकिन",
          "attempted": false
        },
        {
          "num": 4,
          "question_en": "Identify the noun clause: 'I don’t know where he went.'",
          "question_hi": "संज्ञा उपवाक्य पहचानें: 'मुझे नहीं पता वह कहाँ गया।'",
          "options_en": ["I don't know", "where he went", "he went", "where"],
          "options_hi": ["मुझे नहीं पता", "वह कहाँ गया", "वह गया", "कहाँ"],
          "answer_en": "where he went",
          "answer_hi": "वह कहाँ गया",
          "attempted": false
        },
        {
          "num": 5,
          "question_en": "Choose the correct sentence: 'She _____ an umbrella.'",
          "question_hi": "सही वाक्य चुनें: 'उसके पास _____ छाता है।'",
          "options_en": ["has", "have", "had", "having"],
          "options_hi": ["है", "हैं", "था", "रखा है"],
          "answer_en": "has",
          "answer_hi": "है",
          "attempted": false
        },
        {
          "num": 6,
          "question_en": "Convert the following into passive voice: 'They made a cake.'",
          "question_hi": "निम्नलिखित को पैसिव वॉयस में बदलें: 'उन्होंने एक केक बनाया।'",
          "options_en": ["A cake was made by them.", "A cake is made by them.", "A cake was made by them.", "A cake is being made by them."],
          "options_hi": ["एक केक उनके द्वारा बनाया गया था।", "एक केक उनके द्वारा बनाया जाता है।", "एक केक उनके द्वारा बनाया गया था।", "एक केक उनके द्वारा बन रहा है।"],
          "answer_en": "A cake was made by them.",
          "answer_hi": "एक केक उनके द्वारा बनाया गया था।",
          "attempted": false
        },
        {
          "num": 7,
          "question_en": "Choose the correct form of the verb: 'He ____ his homework every day.'",
          "question_hi": "सही क्रिया रूप चुनें: 'वह हर दिन अपना होमवर्क ____।'",
          "options_en": ["do", "does", "doing", "did"],
          "options_hi": ["करता है", "करता", "कर रहा है", "किया"],
          "answer_en": "does",
          "answer_hi": "करता है",
          "attempted": false
        },
        {
          "num": 8,
          "question_en": "Identify the adverb: 'She quickly finished her work.'",
          "question_hi": "क्रिया-विशेषण पहचानें: 'उसने जल्दी अपना काम पूरा किया।'",
          "options_en": ["quickly", "finished", "work", "her"],
          "options_hi": ["जल्दी", "पूरा किया", "काम", "उसका"],
          "answer_en": "quickly",
          "answer_hi": "जल्दी",
          "attempted": false
        },
        {
          "num": 9,
          "question_en": "Fill in the blank: 'She is ____ than I am.'",
          "question_hi": "रिक्त स्थान भरें: 'वह मुझसे ____ है।'",
          "options_en": ["more clever", "clever", "most clever", "cleverer"],
          "options_hi": ["अधिक समझदार", "समझदार", "सबसे समझदार", "समझदार है"],
          "answer_en": "more clever",
          "answer_hi": "अधिक समझदार",
          "attempted": false
        },
        {
          "num": 10,
          "question_en": "Choose the correct form of the adjective: 'This is the ____ book I have ever read.'",
          "question_hi": "सही विशेषण रूप चुनें: 'यह सबसे ____ किताब है जो मैंने कभी पढ़ी है।'",
          "options_en": ["more interesting", "most interesting", "interesting", "interestingly"],
          "options_hi": ["अधिक दिलचस्प", "सबसे दिलचस्प", "दिलचस्प", "दिलचस्पी से"],
          "answer_en": "most interesting",
          "answer_hi": "सबसे दिलचस्प",
          "attempted": false
        }
      ,
      
        {
          "num": 11,
          "question_en": "Identify the verb tense: 'She will have completed her homework by tomorrow.'",
          "question_hi": "क्रिया काल पहचानें: 'वह कल तक अपना होमवर्क पूरा कर लेगी।'",
          "options_en": ["Future perfect", "Present perfect", "Past perfect", "Future continuous"],
          "options_hi": ["भविष्य काल का पूर्ण", "वर्तमान काल का पूर्ण", "भूतकाल का पूर्ण", "भविष्य काल निरंतर"],
          "answer_en": "Future perfect",
          "answer_hi": "भविष्य काल का पूर्ण",
          "attempted": false
        },
        {
          "num": 12,
          "question_en": "Choose the correct sentence: 'He ____ the keys on the table.'",
          "question_hi": "सही वाक्य चुनें: 'उसने ____ चाबी टेबल पर रखी।'",
          "options_en": ["puts", "put", "putting", "putted"],
          "options_hi": ["रखता है", "रखा", "रख रहा है", "रखा था"],
          "answer_en": "put",
          "answer_hi": "रखा",
          "attempted": false
        },
        {
          "num": 13,
          "question_en": "Choose the correct form of the adjective: 'This is the ____ car I’ve ever driven.'",
          "question_hi": "सही विशेषण रूप चुनें: 'यह सबसे ____ कार है जिसे मैंने कभी चलाया।'",
          "options_en": ["fastest", "faster", "fast", "more fast"],
          "options_hi": ["सबसे तेज", "तेज", "तेजतम", "अधिक तेज"],
          "answer_en": "fastest",
          "answer_hi": "सबसे तेज",
          "attempted": false
        },
        {
          "num": 14,
          "question_en": "Fill in the blank: 'I haven’t seen him ____ yesterday.'",
          "question_hi": "रिक्त स्थान भरें: 'मैंने उसे ____ कल नहीं देखा।'",
          "options_en": ["since", "for", "from", "by"],
          "options_hi": ["से", "के लिए", "से", "तक"],
          "answer_en": "since",
          "answer_hi": "से",
          "attempted": false
        },
        {
          "num": 15,
          "question_en": "Convert into direct speech: 'He said he was tired.'",
          "question_hi": "डायरेक्ट स्पीच में बदलें: 'उसने कहा कि वह थका हुआ था।'",
          "options_en": ["He said, 'I am tired.'", "He said, 'I was tired.'", "He said, 'I am tiring.'", "He said, 'I will be tired.'"],
          "options_hi": ["उसने कहा, 'मैं थका हुआ हूँ।'", "उसने कहा, 'मैं थका हुआ था।'", "उसने कहा, 'मैं थक रहा हूँ।'", "उसने कहा, 'मैं थका हुआ रहूँगा।'"],
          "answer_en": "He said, 'I am tired.'",
          "answer_hi": "उसने कहा, 'मैं थका हुआ हूँ।'",
          "attempted": false
        },
        {
          "num": 16,
          "question_en": "Choose the correct article: 'He is ____ European.'",
          "question_hi": "सही आर्टिकल चुनें: 'वह ____ यूरोपीय है।'",
          "options_en": ["a", "an", "the", "no article"],
          "options_hi": ["ए", "ऐन", "द", "कोई आर्टिकल नहीं"],
          "answer_en": "a",
          "answer_hi": "ए",
          "attempted": false
        },
        {
          "num": 17,
          "question_en": "Choose the correct conjunction: 'I will go to the park ____ it stops raining.'",
          "question_hi": "सही संयोजक चुनें: 'मैं पार्क जाऊँगा ____ बारिश रुक जाएगी।'",
          "options_en": ["if", "and", "but", "so"],
          "options_hi": ["यदि", "और", "लेकिन", "इसलिए"],
          "answer_en": "if",
          "answer_hi": "यदि",
          "attempted": false
        },
        {
          "num": 18,
          "question_en": "Fill in the blank: 'The man ____ is standing there is my uncle.'",
          "question_hi": "रिक्त स्थान भरें: 'वह आदमी जो वहाँ खड़ा है, मेरा चाचा है।'",
          "options_en": ["who", "whom", "which", "whose"],
          "options_hi": ["जो", "जिसे", "जो", "जिसका"],
          "answer_en": "who",
          "answer_hi": "जो",
          "attempted": false
        },
        {
          "num": 19,
          "question_en": "Choose the correct verb form: 'She ____ already eaten lunch.'",
          "question_hi": "सही क्रिया रूप चुनें: 'उसने पहले ही लंच ____ लिया है।'",
          "options_en": ["has", "have", "had", "is"],
          "options_hi": ["है", "हैं", "था", "है"],
          "answer_en": "has",
          "answer_hi": "है",
          "attempted": false
        },
        {
          "num": 20,
          "question_en": "Identify the type of sentence: 'Close the door.'",
          "question_hi": "वाक्य का प्रकार पहचानें: 'दरवाजा बंद करो।'",
          "options_en": ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
          "options_hi": ["घोषणात्मक", "प्रश्नवाचक", "आज्ञार्थक", "विस्मयादिबोधक"],
          "answer_en": "Imperative",
          "answer_hi": "आज्ञार्थक",
          "attempted": false
        }
      ,
      
        {
          "num": 21,
          "question_en": "Choose the correct word: 'I am ____ to see you again.'",
          "question_hi": "सही शब्द चुनें: 'मैं आपको फिर से देखने के लिए ____ हूँ।'",
          "options_en": ["happy", "happily", "happiness", "happiest"],
          "options_hi": ["खुश", "खुशी से", "खुशी", "सबसे खुश"],
          "answer_en": "happy",
          "answer_hi": "खुश",
          "attempted": false
        },
        {
          "num": 22,
          "question_en": "Identify the subject in the sentence: 'The cat chased the mouse.'",
          "question_hi": "वाक्य में कर्ता पहचानें: 'बिल्ली ने चूहे का पीछा किया।'",
          "options_en": ["The cat", "the mouse", "chased", "the cat chased"],
          "options_hi": ["बिल्ली", "चूहा", "पीछा किया", "बिल्ली ने पीछा किया"],
          "answer_en": "The cat",
          "answer_hi": "बिल्ली",
          "attempted": false
        },
        {
          "num": 23,
          "question_en": "Choose the correct form of the verb: 'She ____ to the store every day.'",
          "question_hi": "सही क्रिया रूप चुनें: 'वह हर दिन दुकान पर ____ जाती है।'",
          "options_en": ["go", "goes", "going", "gone"],
          "options_hi": ["जाती है", "जाता है", "जा रही है", "गई है"],
          "answer_en": "goes",
          "answer_hi": "जाती है",
          "attempted": false
        },
        {
          "num": 24,
          "question_en": "Fill in the blank: 'If it rains, we ____ indoors.'",
          "question_hi": "रिक्त स्थान भरें: 'अगर बारिश होती है, तो हम ____ रहेंगे।'",
          "options_en": ["will stay", "stayed", "stay", "stays"],
          "options_hi": ["रहेंगे", "रह चुके हैं", "रहते हैं", "रहती है"],
          "answer_en": "will stay",
          "answer_hi": "रहेंगे",
          "attempted": false
        },
        {
          "num": 25,
          "question_en": "Choose the correct sentence: 'I ____ to the park yesterday.'",
          "question_hi": "सही वाक्य चुनें: 'मैं कल पार्क ____ था।'",
          "options_en": ["went", "go", "going", "gone"],
          "options_hi": ["गया", "जाता हूँ", "जा रहा था", "गया था"],
          "answer_en": "went",
          "answer_hi": "गया",
          "attempted": false
        },
        {
          "num": 26,
          "question_en": "Choose the correct option: 'She did not _____ to the party.'",
          "question_hi": "सही विकल्प चुनें: 'वह पार्टी में ____ नहीं गई।'",
          "options_en": ["go", "went", "going", "gone"],
          "options_hi": ["जाना", "गई", "जा रही", "गई थी"],
          "answer_en": "go",
          "answer_hi": "जाना",
          "attempted": false
        },
        {
          "num": 27,
          "question_en": "Identify the error: 'I have never been to Japan before.'",
          "question_hi": "त्रुटि पहचानें: 'मैं पहले कभी जापान नहीं गया हूँ।'",
          "options_en": ["'I' should be 'we'", "Incorrect use of 'have been'", "No error", "Incorrect tense usage"],
          "options_hi": ["'मैं' को 'हम' होना चाहिए", "'have been' का गलत उपयोग", "कोई त्रुटि नहीं", "काल का गलत प्रयोग"],
          "answer_en": "No error",
          "answer_hi": "कोई त्रुटि नहीं",
          "attempted": false
        },
        {
          "num": 28,
          "question_en": "Fill in the blank: 'The book is ____ the table.'",
          "question_hi": "रिक्त स्थान भरें: 'किताब ____ टेबल पर है।'",
          "options_en": ["on", "in", "at", "under"],
          "options_hi": ["पर", "में", "पर", "नीचे"],
          "answer_en": "on",
          "answer_hi": "पर",
          "attempted": false
        },
        {
          "num": 29,
          "question_en": "Choose the correct option: 'I have been living here ____ five years.'",
          "question_hi": "सही विकल्प चुनें: 'मैं यहाँ ____ पांच साल से रह रहा हूँ।'",
          "options_en": ["for", "since", "from", "by"],
          "options_hi": ["के लिए", "से", "से", "तक"],
          "answer_en": "for",
          "answer_hi": "के लिए",
          "attempted": false
        },
        {
          "num": 30,
          "question_en": "Choose the correct sentence: 'She ____ a song when I saw her.'",
          "question_hi": "सही वाक्य चुनें: 'जब मैंने उसे देखा, वह ____ गा रही थी।'",
          "options_en": ["was singing", "is singing", "sang", "sings"],
          "options_hi": ["गाती थी", "गाती है", "गाई", "गाती है"],
          "answer_en": "was singing",
          "answer_hi": "गाती थी",
          "attempted": false
        }
      ,
      
        {
          "num": 31,
          "question_en": "Choose the correct word: 'The movie was ____ than I expected.'",
          "question_hi": "सही शब्द चुनें: 'फिल्म मेरी अपेक्षा से ____ थी।'",
          "options_en": ["better", "good", "best", "more good"],
          "options_hi": ["बेहतर", "अच्छी", "सर्वश्रेष्ठ", "अधिक अच्छी"],
          "answer_en": "better",
          "answer_hi": "बेहतर",
          "attempted": false
        },
        {
          "num": 32,
          "question_en": "Fill in the blank: 'She sings ____ than her sister.'",
          "question_hi": "रिक्त स्थान भरें: 'वह अपनी बहन से ____ गाती है।'",
          "options_en": ["more beautifully", "most beautifully", "beautifully more", "more beautiful"],
          "options_hi": ["अधिक सुंदर", "सबसे सुंदर", "सुंदर रूप से अधिक", "अधिक सुंदर रूप से"],
          "answer_en": "more beautifully",
          "answer_hi": "अधिक सुंदर रूप से",
          "attempted": false
        },
        {
          "num": 33,
          "question_en": "Identify the error: 'I have already finished my homework when he arrived.'",
          "question_hi": "त्रुटि पहचानें: 'मैंने पहले ही अपना होमवर्क पूरा कर लिया था जब वह आया।'",
          "options_en": ["'finished' should be 'had finished'", "Incorrect use of 'when'", "No error", "Incorrect tense usage"],
          "options_hi": ["'पूरा किया' को 'पूरा कर लिया था' होना चाहिए", "'जब' का गलत उपयोग", "कोई त्रुटि नहीं", "काल का गलत प्रयोग"],
          "answer_en": "'finished' should be 'had finished'",
          "answer_hi": "'पूरा किया' को 'पूरा कर लिया था' होना चाहिए",
          "attempted": false
        },
        {
          "num": 34,
          "question_en": "Choose the correct sentence: 'The teacher _____ us to study hard.'",
          "question_hi": "सही वाक्य चुनें: 'शिक्षक ने हमें _____ कठिनाई से पढ़ने के लिए कहा।'",
          "options_en": ["tells", "told", "telling", "tell"],
          "options_hi": ["कहा", "कहते हैं", "कह रहे", "कहा है"],
          "answer_en": "told",
          "answer_hi": "कहा",
          "attempted": false
        },
        {
          "num": 35,
          "question_en": "Complete the sentence: 'If I ____ you, I would not do that.'",
          "question_hi": "वाक्य पूरा करें: 'अगर मैं तुम ____ होता, तो मैं वह नहीं करता।'",
          "options_en": ["am", "were", "was", "will be"],
          "options_hi": ["हूँ", "होता", "था", "होगा"],
          "answer_en": "were",
          "answer_hi": "होता",
          "attempted": false
        },
        {
          "num": 36,
          "question_en": "Choose the correct word: 'The cake tastes ____.'",
          "question_hi": "सही शब्द चुनें: 'केक का स्वाद ____ है।'",
          "options_en": ["delicious", "deliciously", "more delicious", "deliciousness"],
          "options_hi": ["स्वादिष्ट", "स्वादिष्ट रूप से", "अधिक स्वादिष्ट", "स्वादिष्टता"],
          "answer_en": "delicious",
          "answer_hi": "स्वादिष्ट",
          "attempted": false
        },
        {
          "num": 37,
          "question_en": "Choose the correct preposition: 'She is interested ____ music.'",
          "question_hi": "सही प्रीपोजिशन चुनें: 'वह संगीत में रुचि ____ है।'",
          "options_en": ["in", "on", "at", "for"],
          "options_hi": ["में", "पर", "पर", "के लिए"],
          "answer_en": "in",
          "answer_hi": "में",
          "attempted": false
        },
        {
          "num": 38,
          "question_en": "Identify the type of sentence: 'Can you help me?'",
          "question_hi": "वाक्य का प्रकार पहचानें: 'क्या आप मेरी मदद कर सकते हैं?'",
          "options_en": ["Interrogative", "Imperative", "Exclamatory", "Declarative"],
          "options_hi": ["प्रश्नवाचक", "आज्ञा वाचक", "विस्मयादिबोधक", "रचनात्मक"],
          "answer_en": "Interrogative",
          "answer_hi": "प्रश्नवाचक",
          "attempted": false
        },
        {
          "num": 39,
          "question_en": "Choose the correct option: 'I have not seen him ____ Monday.'",
          "question_hi": "सही विकल्प चुनें: 'मैंने उसे ____ सोमवार को नहीं देखा।'",
          "options_en": ["since", "for", "on", "at"],
          "options_hi": ["से", "के लिए", "पर", "पर"],
          "answer_en": "since",
          "answer_hi": "से",
          "attempted": false
        },
        {
          "num": 40,
          "question_en": "Choose the correct word: 'The children are playing ____ the garden.'",
          "question_hi": "सही शब्द चुनें: 'बच्चे ____ बगिया में खेल रहे हैं।'",
          "options_en": ["in", "on", "at", "for"],
          "options_hi": ["में", "पर", "पर", "के लिए"],
          "answer_en": "in",
          "answer_hi": "में",
          "attempted": false
        }
      ,
      
        {
          "num": 41,
          "question_en": "Choose the correct article: '____ Earth revolves around the Sun.'",
          "question_hi": "सही आर्टिकल चुनें: '____ पृथ्वी सूर्य के चारों ओर घूमती है।'",
          "options_en": ["A", "An", "The", "No article"],
          "options_hi": ["ए", "ऐन", "द", "कोई आर्टिकल नहीं"],
          "answer_en": "The",
          "answer_hi": "द",
          "attempted": false
        },
        {
          "num": 42,
          "question_en": "Choose the correct tense: 'She ____ to the store yesterday.'",
          "question_hi": "सही काल चुनें: 'वह कल दुकान पर ____ थी।'",
          "options_en": ["goes", "went", "will go", "is going"],
          "options_hi": ["जाती है", "गई थी", "जाएगी", "जा रही है"],
          "answer_en": "went",
          "answer_hi": "गई थी",
          "attempted": false
        },
        {
          "num": 43,
          "question_en": "Fill in the blank: 'They ____ playing cricket when it started raining.'",
          "question_hi": "रिक्त स्थान भरें: 'वे क्रिकेट ____ थे जब बारिश शुरू हो गई।'",
          "options_en": ["was", "were", "are", "have"],
          "options_hi": ["था", "थे", "हैं", "है"],
          "answer_en": "were",
          "answer_hi": "थे",
          "attempted": false
        },
        {
          "num": 44,
          "question_en": "Identify the subject of the sentence: 'The cat is sleeping on the mat.'",
          "question_hi": "वाक्य का विषय पहचानें: 'बिल्ली चटाई पर सो रही है।'",
          "options_en": ["The cat", "is sleeping", "on the mat", "the mat"],
          "options_hi": ["बिल्ली", "सो रही है", "चटाई पर", "चटाई"],
          "answer_en": "The cat",
          "answer_hi": "बिल्ली",
          "attempted": false
        },
        {
          "num": 45,
          "question_en": "Choose the correct conjunction: 'I will go to the market ____ it rains.'",
          "question_hi": "सही कंजंक्शन चुनें: 'मैं बाजार जाऊँगा ____ बारिश होगी।'",
          "options_en": ["if", "unless", "because", "so"],
          "options_hi": ["अगर", "जब तक", "क्योंकि", "इसलिए"],
          "answer_en": "if",
          "answer_hi": "अगर",
          "attempted": false
        },
        {
          "num": 46,
          "question_en": "Convert to direct speech: 'He said he would come tomorrow.'",
          "question_hi": "डायरेक्ट स्पीच में बदलें: 'उसने कहा कि वह कल आएगा।'",
          "options_en": ["He said, 'I will come tomorrow.'", "He said, 'He will come tomorrow.'", "He says, 'I will come tomorrow.'", "He said, 'He would come tomorrow.'"],
          "options_hi": ["उसने कहा, 'मैं कल आऊँगा।'", "उसने कहा, 'वह कल आएगा।'", "वह कहता है, 'मैं कल आऊँगा।'", "उसने कहा, 'वह कल आएगा।'"],
          "answer_en": "He said, 'I will come tomorrow.'",
          "answer_hi": "उसने कहा, 'मैं कल आऊँगा।'",
          "attempted": false
        },
        {
          "num": 47,
          "question_en": "Choose the correct option: 'She is the ____ student in the class.'",
          "question_hi": "सही विकल्प चुनें: 'वह कक्षा में ____ छात्रा है।'",
          "options_en": ["best", "better", "good", "more better"],
          "options_hi": ["सर्वश्रेष्ठ", "बेहतर", "अच्छी", "अधिक अच्छी"],
          "answer_en": "best",
          "answer_hi": "सर्वश्रेष्ठ",
          "attempted": false
        },
        {
          "num": 48,
          "question_en": "Identify the correct sentence: 'I ____ a book when you called me.'",
          "question_hi": "सही वाक्य पहचानें: 'जब तुमने मुझे कॉल किया, मैं ____ किताब पढ़ रहा था।'",
          "options_en": ["read", "reads", "was reading", "had read"],
          "options_hi": ["पढ़ता था", "पढ़ रही थी", "पढ़ रहा था", "पढ़ चुका था"],
          "answer_en": "was reading",
          "answer_hi": "पढ़ रहा था",
          "attempted": false
        },
        {
          "num": 49,
          "question_en": "Fill in the blank: 'The children are playing ____ the park.'",
          "question_hi": "रिक्त स्थान भरें: 'बच्चे ____ पार्क में खेल रहे हैं।'",
          "options_en": ["in", "on", "at", "by"],
          "options_hi": ["में", "पर", "पर", "के पास"],
          "answer_en": "in",
          "answer_hi": "में",
          "attempted": false
        },
        {
          "num": 50,
          "question_en": "Choose the correct word: 'She ____ finished her homework.'",
          "question_hi": "सही शब्द चुनें: 'वह ____ अपना होमवर्क पूरा कर चुकी है।'",
          "options_en": ["has", "have", "had", "is"],
          "options_hi": ["है", "हैं", "था", "है"],
          "answer_en": "has",
          "answer_hi": "है",
          "attempted": false
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