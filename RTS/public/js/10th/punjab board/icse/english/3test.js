const questions = [
        
  
    {
      "num": 1,
      "question_en": "Choose the correct word: 'She ____ finished her homework.'",
      "question_hi": "सही शब्द चुनें: 'वह ____ अपना होमवर्क पूरा कर चुकी है।'",
      "options_en": ["has", "have", "had", "is"],
      "options_hi": ["है", "हैं", "था", "है"],
      "answer_en": "has",
      "answer_hi": "है",
      "attempted": false
    },
    {
      "num": 2,
      "question_en": "Identify the part of speech: 'He quickly ran home.' - What is 'quickly'?",
      "question_hi": "'He quickly ran home.' में 'quickly' किस प्रकार का शब्द है?",
      "options_en": ["Adverb", "Verb", "Adjective", "Noun"],
      "options_hi": ["क्रिया विशेषण", "क्रिया", "विशेषण", "संज्ञा"],
      "answer_en": "Adverb",
      "answer_hi": "क्रिया विशेषण",
      "attempted": false
    },
    {
      "num": 3,
      "question_en": "Choose the correct tense: 'They ____ to school every day.'",
      "question_hi": "सही काल चुनें: 'वे हर दिन स्कूल ____ ।'",
      "options_en": ["go", "went", "going", "gone"],
      "options_hi": ["जाते हैं", "गए", "जा रहे हैं", "गए हुए"],
      "answer_en": "go",
      "answer_hi": "जाते हैं",
      "attempted": false
    },
    {
      "num": 4,
      "question_en": "Select the correct article: 'He bought ____ umbrella.'",
      "question_hi": "सही आर्टिकल चुनें: 'उसने ____ छाता खरीदा।'",
      "options_en": ["an", "a", "the", "no article"],
      "options_hi": ["एक (an)", "एक (a)", "वह (the)", "कोई नहीं"],
      "answer_en": "an",
      "answer_hi": "एक (an)",
      "attempted": false
    },
    {
      "num": 5,
      "question_en": "Change the voice: 'The cat chased the mouse.'",
      "question_hi": "वॉइस बदलें: 'The cat chased the mouse.'",
      "options_en": [
        "The mouse was chased by the cat.",
        "The cat was chased by the mouse.",
        "The cat chased by the mouse.",
        "The mouse chased the cat."
      ],
      "options_hi": [
        "चूहे को बिल्ली ने दौड़ाया।",
        "बिल्ली को चूहे ने दौड़ाया।",
        "बिल्ली को चूहे ने दौड़ा दिया।",
        "चूहे ने बिल्ली को दौड़ाया।"
      ],
      "answer_en": "The mouse was chased by the cat.",
      "answer_hi": "चूहे को बिल्ली ने दौड़ाया।",
      "attempted": false
    }
    // Continue this pattern up to num 50...
  ,
  
  
    {
      "num": 6,
      "question_en": "Choose the correct form: 'She ____ a book right now.'",
      "question_hi": "सही रूप चुनें: 'वह अभी एक किताब ____ है।'",
      "options_en": ["is reading", "reads", "read", "has read"],
      "options_hi": ["पढ़ रही है", "पढ़ती है", "पढ़ी है", "पढ़ चुकी है"],
      "answer_en": "is reading",
      "answer_hi": "पढ़ रही है",
      "attempted": false
    },
    {
      "num": 7,
      "question_en": "Which sentence is in passive voice?",
      "question_hi": "कौन सा वाक्य पासिव वॉयस में है?",
      "options_en": [
        "The dog bit the man.",
        "The man was bitten by the dog.",
        "The man bit the dog.",
        "The dog was biting the man."
      ],
      "options_hi": [
        "कुत्ते ने आदमी को काटा।",
        "आदमी को कुत्ते ने काट लिया।",
        "आदमी ने कुत्ते को काटा।",
        "कुत्ता आदमी को काट रहा था।"
      ],
      "answer_en": "The man was bitten by the dog.",
      "answer_hi": "आदमी को कुत्ते ने काट लिया।",
      "attempted": false
    },
    {
      "num": 8,
      "question_en": "Choose the correct option: 'I ____ a book when you called me.'",
      "question_hi": "सही विकल्प चुनें: 'जब तुमने मुझे कॉल किया, मैं ____ एक किताब पढ़ रहा था।'",
      "options_en": ["was reading", "am reading", "had read", "read"],
      "options_hi": ["पढ़ रहा था", "पढ़ रहा हूँ", "पढ़ चुका था", "पढ़ लिया"],
      "answer_en": "was reading",
      "answer_hi": "पढ़ रहा था",
      "attempted": false
    },
    {
      "num": 9,
      "question_en": "Which word is an adverb in the sentence: 'She sings beautifully.'?",
      "question_hi": "वह वाक्य में कौन सा शब्द क्रिया विशेषण है: 'वह खूबसूरती से गाती है।'?",
      "options_en": ["sings", "beautifully", "She", "none of the above"],
      "options_hi": ["गाती है", "खूबसूरती से", "वह", "उपरोक्त में से कोई नहीं"],
      "answer_en": "beautifully",
      "answer_hi": "खूबसूरती से",
      "attempted": false
    },
    {
      "num": 10,
      "question_en": "Identify the error in the sentence: 'She don't like ice cream.'",
      "question_hi": "वाक्य में गलती पहचानें: 'वह आइसक्रीम नहीं पसंद करती है।'",
      "options_en": ["She", "don't", "like", "ice cream"],
      "options_hi": ["वह", "नहीं", "पसंद करती है", "आइसक्रीम"],
      "answer_en": "don't",
      "answer_hi": "नहीं",
      "attempted": false
    },
    {
      "num": 11,
      "question_en": "Choose the correct preposition: 'She is fond ____ painting.'",
      "question_hi": "सही पूर्वसर्ग चुनें: 'वह पेंटिंग की शौकीन है।'",
      "options_en": ["of", "in", "on", "at"],
      "options_hi": ["का", "में", "पर", "को"],
      "answer_en": "of",
      "answer_hi": "का",
      "attempted": false
    },
    {
      "num": 12,
      "question_en": "Fill in the blank: 'The book ____ the table is mine.'",
      "question_hi": "रिक्त स्थान भरें: 'टेबल ____ किताब मेरी है।'",
      "options_en": ["on", "in", "under", "by"],
      "options_hi": ["पर", "में", "के नीचे", "के पास"],
      "answer_en": "on",
      "answer_hi": "पर",
      "attempted": false
    },
    {
      "num": 13,
      "question_en": "Choose the correct modal verb: 'You ____ go to the doctor if you're feeling unwell.'",
      "question_hi": "सही मॉडल वर्ब चुनें: 'अगर आप अस्वस्थ महसूस कर रहे हैं, तो आपको डॉक्टर के पास ____ जाना चाहिए।'",
      "options_en": ["should", "can", "will", "may"],
      "options_hi": ["चाहिए", "सकते हैं", "जाना होगा", "हो सकता है"],
      "answer_en": "should",
      "answer_hi": "चाहिए",
      "attempted": false
    },
    {
      "num": 14,
      "question_en": "Which word is a conjunction in the sentence: 'She likes both tea and coffee.'?",
      "question_hi": "'वह चाय और कॉफी दोनों पसंद करती है।' में कौन सा शब्द संयोजक है?",
      "options_en": ["likes", "both", "tea", "and"],
      "options_hi": ["पसंद करती है", "दोनों", "चाय", "और"],
      "answer_en": "and",
      "answer_hi": "और",
      "attempted": false
    },
    {
      "num": 15,
      "question_en": "Choose the correct form: 'I ____ to the park yesterday.'",
      "question_hi": "सही रूप चुनें: 'मैं कल पार्क ____ था।'",
      "options_en": ["went", "going", "go", "goes"],
      "options_hi": ["गया", "जा रहा था", "जाता हूँ", "जाता है"],
      "answer_en": "went",
      "answer_hi": "गया",
      "attempted": false
    },
    {
      "num": 16,
      "question_en": "Which is the correct indirect speech: 'She said, 'I am going to the market.''",
      "question_hi": "सही अप्रत्यक्ष भाषण चुनें: 'उसने कहा, 'मैं बाजार जा रही हूँ।''",
      "options_en": [
        "She said that she is going to the market.",
        "She said that she was going to the market.",
        "She said that she goes to the market.",
        "She said that she had gone to the market."
      ],
      "options_hi": [
        "उसने कहा कि वह बाजार जा रही है।",
        "उसने कहा कि वह बाजार जा रही थी।",
        "उसने कहा कि वह बाजार जाती है।",
        "उसने कहा कि वह बाजार जा चुकी थी।"
      ],
      "answer_en": "She said that she was going to the market.",
      "answer_hi": "उसने कहा कि वह बाजार जा रही थी।",
      "attempted": false
    },
    {
      "num": 17,
      "question_en": "Choose the correct form: 'She ____ not like the movie.'",
      "question_hi": "सही रूप चुनें: 'उसे वह फिल्म ____ पसंद नहीं आई।'",
      "options_en": ["does", "do", "did", "is"],
      "options_hi": ["है", "हैं", "था", "नहीं"],
      "answer_en": "does",
      "answer_hi": "नहीं",
      "attempted": false
    },
  
  
    
      {
        "num": 18,
        "question_en": "Choose the correct relative pronoun: 'The girl ____ sings is my sister.'",
        "question_hi": "सही संबंधवाचक सर्वनाम चुनें: 'वह लड़की ____ गाती है मेरी बहन है।'",
        "options_en": ["who", "which", "whom", "that"],
        "options_hi": ["जो", "जिसे", "जिसका", "वह"],
        "answer_en": "who",
        "answer_hi": "जो",
        "attempted": false
      },
      {
        "num": 19,
        "question_en": "Which of these is a correct question tag: 'She is coming, ____?'",
        "question_hi": "इनमें से कौन सा सही प्रश्न चिह्न है: 'वह आ रही है, ____?'",
        "options_en": ["isn't she?", "is she?", "wasn't she?", "was she?"],
        "options_hi": ["क्या वह नहीं?", "क्या वह?", "क्या वह नहीं थी?", "क्या वह थी?"],
        "answer_en": "isn't she?",
        "answer_hi": "क्या वह नहीं?",
        "attempted": false
      },
      {
        "num": 20,
        "question_en": "Fill in the blank: 'I have known him ____ 2010.'",
        "question_hi": "रिक्त स्थान भरें: 'मैं उसे ____ 2010 से जानता हूँ।'",
        "options_en": ["since", "for", "from", "by"],
        "options_hi": ["से", "के लिए", "से", "द्वारा"],
        "answer_en": "since",
        "answer_hi": "से",
        "attempted": false
      },
      {
        "num": 21,
        "question_en": "Which sentence uses a comparative adjective?",
        "question_hi": "कौन सा वाक्य एक तुलनात्मक विशेषण का उपयोग करता है?",
        "options_en": [
          "This is a good book.",
          "She is taller than her brother.",
          "He is the best player.",
          "I like chocolate."
        ],
        "options_hi": [
          "यह एक अच्छा किताब है।",
          "वह अपने भाई से लंबी है।",
          "वह सबसे अच्छा खिलाड़ी है।",
          "मुझे चॉकलेट पसंद है।"
        ],
        "answer_en": "She is taller than her brother.",
        "answer_hi": "वह अपने भाई से लंबी है।",
        "attempted": false
      },
      {
        "num": 22,
        "question_en": "Choose the correct word: 'The cake ____ delicious.'",
        "question_hi": "सही शब्द चुनें: 'केक ____ स्वादिष्ट है।'",
        "options_en": ["is", "are", "was", "were"],
        "options_hi": ["है", "हैं", "था", "थे"],
        "answer_en": "is",
        "answer_hi": "है",
        "attempted": false
      },
      {
        "num": 23,
        "question_en": "Identify the noun in the sentence: 'The dog barked loudly.'",
        "question_hi": "वाक्य में संज्ञा पहचानें: 'कुत्ता जोर से भौंका।'",
        "options_en": ["dog", "barked", "loudly", "none of the above"],
        "options_hi": ["कुत्ता", "भौंका", "जोर से", "उपरोक्त में से कोई नहीं"],
        "answer_en": "dog",
        "answer_hi": "कुत्ता",
        "attempted": false
      },
      {
        "num": 24,
        "question_en": "Fill in the blank: 'She ____ a book when I called her.'",
        "question_hi": "रिक्त स्थान भरें: 'जब मैंने उसे कॉल किया, वह ____ एक किताब पढ़ रही थी।'",
        "options_en": ["was reading", "read", "reads", "is reading"],
        "options_hi": ["पढ़ रही थी", "पढ़ी", "पढ़ती है", "पढ़ रही है"],
        "answer_en": "was reading",
        "answer_hi": "पढ़ रही थी",
        "attempted": false
      },
      {
        "num": 25,
        "question_en": "Choose the correct preposition: 'I will arrive ____ 7 PM.'",
        "question_hi": "सही पूर्वसर्ग चुनें: 'मैं 7 बजे ____ पहुँचूँगा।'",
        "options_en": ["at", "in", "on", "by"],
        "options_hi": ["पर", "में", "पर", "तक"],
        "answer_en": "at",
        "answer_hi": "पर",
        "attempted": false
      },
      {
        "num": 26,
        "question_en": "Choose the correct form of the verb: 'She ____ the book tomorrow.'",
        "question_hi": "क्रिया का सही रूप चुनें: 'वह कल किताब ____ ।'",
        "options_en": ["will read", "reads", "is reading", "read"],
        "options_hi": ["पढ़ेगी", "पढ़ती है", "पढ़ रही है", "पढ़ी"],
        "answer_en": "will read",
        "answer_hi": "पढ़ेगी",
        "attempted": false
      },
      {
        "num": 27,
        "question_en": "Which sentence is in the future tense?",
        "question_hi": "कौन सा वाक्य भविष्य काल में है?",
        "options_en": [
          "She goes to school every day.",
          "She went to school yesterday.",
          "She will go to school tomorrow.",
          "She is going to school now."
        ],
        "options_hi": [
          "वह हर दिन स्कूल जाती है।",
          "वह कल स्कूल गई थी।",
          "वह कल स्कूल जाएगी।",
          "वह अभी स्कूल जा रही है।"
        ],
        "answer_en": "She will go to school tomorrow.",
        "answer_hi": "वह कल स्कूल जाएगी।",
        "attempted": false
      },
      {
        "num": 28,
        "question_en": "Choose the correct option: 'I ____ never been to France.'",
        "question_hi": "सही विकल्प चुनें: 'मैं कभी ____ फ्रांस नहीं गया हूँ।'",
        "options_en": ["have", "had", "has", "am"],
        "options_hi": ["हूँ", "था", "है", "हूँ"],
        "answer_en": "have",
        "answer_hi": "हूँ",
        "attempted": false
      },
      {
        "num": 29,
        "question_en": "Fill in the blank: 'She ____ to the gym every morning.'",
        "question_hi": "रिक्त स्थान भरें: 'वह हर सुबह जिम ____ जाती है।'",
        "options_en": ["goes", "go", "going", "went"],
        "options_hi": ["जाती है", "जाती हूँ", "जा रही है", "गई थी"],
        "answer_en": "goes",
        "answer_hi": "जाती है",
        "attempted": false
      },
      {
        "num": 30,
        "question_en": "Choose the correct form: 'They ____ in the park when it started raining.'",
        "question_hi": "सही रूप चुनें: 'जब बारिश शुरू हुई, वे ____ पार्क में थे।'",
        "options_en": ["were walking", "are walking", "walked", "walk"],
        "options_hi": ["चल रहे थे", "चल रहे हैं", "चले थे", "चलते हैं"],
        "answer_en": "were walking",
        "answer_hi": "चल रहे थे",
        "attempted": false
      },
    
        {
          "num": 31,
          "question_en": "Choose the correct conjunction: 'I will go to the party ____ I finish my homework.'",
          "question_hi": "सही संयोजक चुनें: 'मैं पार्टी में जाऊँगा ____ मैं अपना होमवर्क खत्म कर लूँ।'",
          "options_en": ["after", "before", "until", "while"],
          "options_hi": ["बाद", "पहले", "तक", "जब"],
          "answer_en": "after",
          "answer_hi": "बाद",
          "attempted": false
        },
        {
          "num": 32,
          "question_en": "Which of these is a superlative adjective?",
          "question_hi": "इनमें से कौन सा सबसे उत्कृष्ट विशेषण है?",
          "options_en": [
            "tallest",
            "taller",
            "tall",
            "more tall"
          ],
          "options_hi": [
            "सबसे लंबा",
            "लंबा",
            "लंबा",
            "ज्यादा लंबा"
          ],
          "answer_en": "tallest",
          "answer_hi": "सबसे लंबा",
          "attempted": false
        },
        {
          "num": 33,
          "question_en": "Fill in the blank: 'I ____ going to the market.'",
          "question_hi": "रिक्त स्थान भरें: 'मैं ____ बाजार जा रहा हूँ।'",
          "options_en": ["am", "is", "are", "were"],
          "options_hi": ["हूँ", "है", "हैं", "था"],
          "answer_en": "am",
          "answer_hi": "हूँ",
          "attempted": false
        },
        {
          "num": 34,
          "question_en": "Which of these sentences is in the passive voice?",
          "question_hi": "इनमें से कौन सा वाक्य पासिव वॉयस में है?",
          "options_en": [
            "She wrote a letter.",
            "A letter was written by her.",
            "She is writing a letter.",
            "She has written a letter."
          ],
          "options_hi": [
            "उसने एक पत्र लिखा।",
            "एक पत्र उसके द्वारा लिखा गया।",
            "वह एक पत्र लिख रही है।",
            "उसने एक पत्र लिखा है।"
          ],
          "answer_en": "A letter was written by her.",
          "answer_hi": "एक पत्र उसके द्वारा लिखा गया।",
          "attempted": false
        },
        {
          "num": 35,
          "question_en": "Fill in the blank: 'We ____ to the beach last weekend.'",
          "question_hi": "रिक्त स्थान भरें: 'हम पिछले सप्ताहांत ____ समुद्र तट पर गए थे।'",
          "options_en": ["went", "go", "will go", "are going"],
          "options_hi": ["गए थे", "जाते हैं", "जाएँगे", "जा रहे हैं"],
          "answer_en": "went",
          "answer_hi": "गए थे",
          "attempted": false
        },
        {
          "num": 36,
          "question_en": "Choose the correct form of the verb: 'He ____ to the store every day.'",
          "question_hi": "क्रिया का सही रूप चुनें: 'वह हर दिन ____ दुकान पर जाता है।'",
          "options_en": ["goes", "go", "went", "going"],
          "options_hi": ["जाता है", "जाता हूँ", "गया था", "जा रहा है"],
          "answer_en": "goes",
          "answer_hi": "जाता है",
          "attempted": false
        },
        {
          "num": 37,
          "question_en": "Choose the correct question tag: 'You are coming, ____?'",
          "question_hi": "सही प्रश्न चिह्न चुनें: 'तुम आ रहे हो, ____?'",
          "options_en": ["aren't you?", "are you?", "will you?", "won't you?"],
          "options_hi": ["क्या नहीं?", "क्या?", "क्या तुम?", "क्या तुम नहीं?"],
          "answer_en": "aren't you?",
          "answer_hi": "क्या नहीं?",
          "attempted": false
        },
        {
          "num": 38,
          "question_en": "Which of these is a possessive pronoun?",
          "question_hi": "इनमें से कौन सा स्वामित्व सूचक सर्वनाम है?",
          "options_en": ["mine", "my", "I", "me"],
          "options_hi": ["मेरा", "मेरे", "मैं", "मैंने"],
          "answer_en": "mine",
          "answer_hi": "मेरा",
          "attempted": false
        },
        {
          "num": 39,
          "question_en": "Fill in the blank: 'I ____ never been to that restaurant.'",
          "question_hi": "रिक्त स्थान भरें: 'मैं कभी ____ उस रेस्टोरेंट में नहीं गया हूँ।'",
          "options_en": ["have", "had", "has", "am"],
          "options_hi": ["हूँ", "था", "है", "हूँ"],
          "answer_en": "have",
          "answer_hi": "हूँ",
          "attempted": false
        },
        {
          "num": 40,
          "question_en": "Choose the correct option: 'She has ____ finished her homework.'",
          "question_hi": "सही विकल्प चुनें: 'उसने ____ अपना होमवर्क पूरा किया है।'",
          "options_en": ["already", "yet", "never", "still"],
          "options_hi": ["पहले ही", "अब तक", "कभी नहीं", "अभी भी"],
          "answer_en": "already",
          "answer_hi": "पहले ही",
          "attempted": false
        },
        {
          "num": 41,
          "question_en": "Choose the correct sentence: 'The teacher told me ____ go to the library.'",
          "question_hi": "सही वाक्य चुनें: 'अध्यापक ने मुझे ____ पुस्तकालय जाने को कहा।'",
          "options_en": ["to", "that", "for", "and"],
          "options_hi": ["जाने", "कि", "के लिए", "और"],
          "answer_en": "to",
          "answer_hi": "जाने",
          "attempted": false
        },
        {
          "num": 42,
          "question_en": "Fill in the blank: 'She ____ her homework before the teacher arrived.'",
          "question_hi": "रिक्त स्थान भरें: 'वह अपने होमवर्क ____ शिक्षक के आने से पहले पूरा कर चुकी थी।'",
          "options_en": ["had finished", "finished", "finishes", "is finishing"],
          "options_hi": ["पूरा कर चुकी थी", "पूरा किया", "पूरा करती है", "पूरा कर रही है"],
          "answer_en": "had finished",
          "answer_hi": "पूरा कर चुकी थी",
          "attempted": false
        },
        {
          "num": 43,
          "question_en": "Which of these is a conjunction?",
          "question_hi": "इनमें से कौन सा संयोजक है?",
          "options_en": ["and", "book", "beautiful", "run"],
          "options_hi": ["और", "किताब", "सुंदर", "दौड़ना"],
          "answer_en": "and",
          "answer_hi": "और",
          "attempted": false
        },
        {
          "num": 44,
          "question_en": "Choose the correct form: 'We ____ to the park when it started raining.'",
          "question_hi": "सही रूप चुनें: 'जब बारिश शुरू हुई, हम ____ पार्क में थे।'",
          "options_en": ["were walking", "walked", "are walking", "will walk"],
          "options_hi": ["चल रहे थे", "चले थे", "जा रहे हैं", "चलेंगे"],
          "answer_en": "were walking",
          "answer_hi": "चल रहे थे",
          "attempted": false
        },
        {
          "num": 45,
          "question_en": "Choose the correct sentence: '____ a good movie!'",
          "question_hi": "सही वाक्य चुनें: '____ एक अच्छी फिल्म!'",
          "options_en": ["It is", "This is", "That is", "There is"],
          "options_hi": ["यह है", "यह है", "वह है", "वहाँ है"],
          "answer_en": "It is",
          "answer_hi": "यह है",
          "attempted": false
        },
      
        
          {
            "num": 46,
            "question_en": "Which of these is an example of a collective noun?",
            "question_hi": "इनमें से कौन सा एक सामूहिक संज्ञा का उदाहरण है?",
            "options_en": ["team", "dog", "city", "book"],
            "options_hi": ["टीम", "कुत्ता", "शहर", "किताब"],
            "answer_en": "team",
            "answer_hi": "टीम",
            "attempted": false
          },
          {
            "num": 47,
            "question_en": "Fill in the blank: 'She ____ to the gym every morning.'",
            "question_hi": "रिक्त स्थान भरें: 'वह हर सुबह जिम ____ जाती है।'",
            "options_en": ["goes", "went", "going", "go"],
            "options_hi": ["जाती है", "गई थी", "जा रही है", "जाती हूँ"],
            "answer_en": "goes",
            "answer_hi": "जाती है",
            "attempted": false
          },
          {
            "num": 48,
            "question_en": "Choose the correct option: 'By the time we arrived, they ____ finished the meeting.'",
            "question_hi": "सही विकल्प चुनें: 'जब तक हम पहुँचे, वे ____ बैठक समाप्त कर चुके थे।'",
            "options_en": ["had", "have", "will have", "were"],
            "options_hi": ["थे", "है", "होने वाले थे", "थे"],
            "answer_en": "had",
            "answer_hi": "थे",
            "attempted": false
          },
          {
            "num": 49,
            "question_en": "Which of these sentences is in the past perfect tense?",
            "question_hi": "इनमें से कौन सा वाक्य भूतकाल पूर्णकाल में है?",
            "options_en": [
              "She was writing a letter.",
              "She writes a letter.",
              "She had written a letter.",
              "She will write a letter."
            ],
            "options_hi": [
              "वह एक पत्र लिख रही थी।",
              "वह एक पत्र लिखती है।",
              "वह एक पत्र लिख चुकी थी।",
              "वह एक पत्र लिखेगी।"
            ],
            "answer_en": "She had written a letter.",
            "answer_hi": "वह एक पत्र लिख चुकी थी।",
            "attempted": false
          },
          {
            "num": 50,
            "question_en": "Choose the correct word: 'They ____ playing football at 5 PM yesterday.'",
            "question_hi": "सही शब्द चुनें: 'वे कल शाम 5 बजे ____ फुटबॉल खेल रहे थे।'",
            "options_en": ["were", "was", "is", "are"],
            "options_hi": ["थे", "था", "है", "हैं"],
            "answer_en": "were",
            "answer_hi": "थे",
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