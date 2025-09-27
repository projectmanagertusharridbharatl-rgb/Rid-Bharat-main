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
      "question_en": "Choose the correct form of the verb: 'He ____ to the gym every morning.'",
      "question_hi": "क्रिया का सही रूप चुनें: 'वह हर सुबह ____ जिम जाता है।'",
      "options_en": ["go", "goes", "going", "gone"],
      "options_hi": ["जाता है", "जाता हूँ", "जा रहा है", "गया"],
      "answer_en": "goes",
      "answer_hi": "जाता है",
      "attempted": false
    },
    {
      "num": 3,
      "question_en": "Which of these is a possessive pronoun?",
      "question_hi": "इनमें से कौन सा स्वामित्व सूचक सर्वनाम है?",
      "options_en": ["mine", "my", "I", "me"],
      "options_hi": ["मेरा", "मेरे", "मैं", "मैंने"],
      "answer_en": "mine",
      "answer_hi": "मेरा",
      "attempted": false
    },
    {
      "num": 4,
      "question_en": "Fill in the blank: 'We ____ to the park every Sunday.'",
      "question_hi": "रिक्त स्थान भरें: 'हम हर रविवार ____ पार्क जाते हैं।'",
      "options_en": ["go", "goes", "going", "gone"],
      "options_hi": ["जाते हैं", "जाती है", "जा रहे हैं", "गए थे"],
      "answer_en": "go",
      "answer_hi": "जाते हैं",
      "attempted": false
    },
    {
      "num": 5,
      "question_en": "Choose the correct conjunction: 'I will go to the market ____ it rains.'",
      "question_hi": "सही संयोजक चुनें: 'मैं बाजार जाऊँगा ____ अगर बारिश होगी।'",
      "options_en": ["if", "unless", "because", "although"],
      "options_hi": ["अगर", "जब तक", "क्योंकि", "हालाँकि"],
      "answer_en": "if",
      "answer_hi": "अगर",
      "attempted": false
    },
    {
      "num": 6,
      "question_en": "Which of these sentences is in the future tense?",
      "question_hi": "इनमें से कौन सा वाक्य भविष्य काल में है?",
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
      "num": 7,
      "question_en": "Fill in the blank: 'He ____ been to that restaurant before.'",
      "question_hi": "रिक्त स्थान भरें: 'वह पहले ____ उस रेस्टोरेंट में गया है।'",
      "options_en": ["has", "have", "had", "is"],
      "options_hi": ["है", "हूँ", "था", "है"],
      "answer_en": "has",
      "answer_hi": "है",
      "attempted": false
    },
    {
      "num": 8,
      "question_en": "Which of these sentences uses a comparative adjective?",
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
      "num": 9,
      "question_en": "Choose the correct form: 'I ____ finished my homework.'",
      "question_hi": "सही रूप चुनें: 'मैं ____ अपना होमवर्क पूरा कर चुका हूँ।'",
      "options_en": ["have", "has", "had", "am"],
      "options_hi": ["हूँ", "है", "था", "हूँ"],
      "answer_en": "have",
      "answer_hi": "हूँ",
      "attempted": false
    },
    {
      "num": 10,
      "question_en": "Fill in the blank: 'I ____ reading a book when you called me.'",
      "question_hi": "रिक्त स्थान भरें: 'जब तुमने मुझे कॉल किया, मैं ____ किताब पढ़ रहा था।'",
      "options_en": ["was", "were", "am", "is"],
      "options_hi": ["था", "थे", "हूँ", "है"],
      "answer_en": "was",
      "answer_hi": "था",
      "attempted": false
    }
  ,
  
      
  
    {
      "num": 11,
      "question_en": "Which of these sentences uses an indefinite pronoun?",
      "question_hi": "इनमें से कौन सा वाक्य एक अनिश्चित सर्वनाम का उपयोग करता है?",
      "options_en": [
        "Everyone is here.",
        "She went to the store.",
        "I like my book.",
        "He is playing soccer."
      ],
      "options_hi": [
        "सभी यहाँ हैं।",
        "वह स्टोर गई थी।",
        "मुझे मेरी किताब पसंद है।",
        "वह फुटबॉल खेल रहा है।"
      ],
      "answer_en": "Everyone is here.",
      "answer_hi": "सभी यहाँ हैं।",
      "attempted": false
    },
    {
      "num": 12,
      "question_en": "Choose the correct option: 'He ____ a great job.'",
      "question_hi": "सही विकल्प चुनें: 'उसने ____ अच्छा काम किया।'",
      "options_en": ["did", "does", "is doing", "was doing"],
      "options_hi": ["किया", "करता है", "कर रहा है", "कर रहा था"],
      "answer_en": "did",
      "answer_hi": "किया",
      "attempted": false
    },
    {
      "num": 13,
      "question_en": "Fill in the blank: 'I ____ waiting for the bus right now.'",
      "question_hi": "रिक्त स्थान भरें: 'मैं अब ____ बस का इंतजार कर रहा हूँ।'",
      "options_en": ["am", "is", "are", "was"],
      "options_hi": ["हूँ", "है", "हैं", "था"],
      "answer_en": "am",
      "answer_hi": "हूँ",
      "attempted": false
    },
    {
      "num": 14,
      "question_en": "Which of these sentences is in the past continuous tense?",
      "question_hi": "इनमें से कौन सा वाक्य भूतकाल में निरंतर काल में है?",
      "options_en": [
        "She was reading a book.",
        "She read a book.",
        "She is reading a book.",
        "She will read a book."
      ],
      "options_hi": [
        "वह एक किताब पढ़ रही थी।",
        "वह एक किताब पढ़ी।",
        "वह एक किताब पढ़ रही है।",
        "वह एक किताब पढ़ेगी।"
      ],
      "answer_en": "She was reading a book.",
      "answer_hi": "वह एक किताब पढ़ रही थी।",
      "attempted": false
    },
    {
      "num": 15,
      "question_en": "Fill in the blank: 'We ____ to the park every weekend.'",
      "question_hi": "रिक्त स्थान भरें: 'हम हर सप्ताहांत ____ पार्क जाते हैं।'",
      "options_en": ["go", "goes", "going", "went"],
      "options_hi": ["जाते हैं", "जाती है", "जा रहे हैं", "गए थे"],
      "answer_en": "go",
      "answer_hi": "जाते हैं",
      "attempted": false
    },
    {
      "num": 16,
      "question_en": "Which of these sentences is in the future perfect tense?",
      "question_hi": "इनमें से कौन सा वाक्य भविष्य पूर्णकाल में है?",
      "options_en": [
        "She will have finished her homework by 5 PM.",
        "She will finish her homework by 5 PM.",
        "She finishes her homework at 5 PM.",
        "She finished her homework by 5 PM."
      ],
      "options_hi": [
        "वह 5 बजे तक अपना होमवर्क पूरा कर चुकी होगी।",
        "वह 5 बजे तक अपना होमवर्क पूरा कर लेगी।",
        "वह 5 बजे अपना होमवर्क करती है।",
        "वह 5 बजे तक अपना होमवर्क पूरा कर चुकी थी।"
      ],
      "answer_en": "She will have finished her homework by 5 PM.",
      "answer_hi": "वह 5 बजे तक अपना होमवर्क पूरा कर चुकी होगी।",
      "attempted": false
    },
    {
      "num": 17,
      "question_en": "Choose the correct form of the verb: 'They ____ already left.'",
      "question_hi": "क्रिया का सही रूप चुनें: 'वे पहले ही ____ जा चुके हैं।'",
      "options_en": ["have", "had", "will have", "is"],
      "options_hi": ["हैं", "थे", "हो चुके होंगे", "है"],
      "answer_en": "have",
      "answer_hi": "हैं",
      "attempted": false
    },
    {
      "num": 18,
      "question_en": "Which of these is a preposition?",
      "question_hi": "इनमें से कौन सा पूर्वसर्ग है?",
      "options_en": ["on", "run", "quick", "beautiful"],
      "options_hi": ["पर", "दौड़ना", "तेज़", "सुंदर"],
      "answer_en": "on",
      "answer_hi": "पर",
      "attempted": false
    },
    {
      "num": 19,
      "question_en": "Choose the correct option: 'She ____ a new car next year.'",
      "question_hi": "सही विकल्प चुनें: 'वह अगले साल ____ एक नई कार खरीदेगी।'",
      "options_en": ["will buy", "buys", "buying", "bought"],
      "options_hi": ["खरीदेगी", "खरीदती है", "खरीद रही है", "खरीदी थी"],
      "answer_en": "will buy",
      "answer_hi": "खरीदेगी",
      "attempted": false
    },
    {
      "num": 20,
      "question_en": "Fill in the blank: 'They ____ always play football on Sundays.'",
      "question_hi": "रिक्त स्थान भरें: 'वे हमेशा ____ रविवार को फुटबॉल खेलते हैं।'",
      "options_en": ["do", "does", "are", "is"],
      "options_hi": ["करते हैं", "करती है", "कर रहे हैं", "है"],
      "answer_en": "do",
      "answer_hi": "करते हैं",
      "attempted": false
    }
  ,
  
      
  
    {
      "num": 21,
      "question_en": "Choose the correct article: 'He is ____ honest man.'",
      "question_hi": "सही आर्टिकल चुनें: 'वह ____ ईमानदार आदमी है।'",
      "options_en": ["an", "a", "the", "none"],
      "options_hi": ["एक", "एक", "वह", "कोई नहीं"],
      "answer_en": "an",
      "answer_hi": "एक",
      "attempted": false
    },
    {
      "num": 22,
      "question_en": "Which of these is an example of an abstract noun?",
      "question_hi": "इनमें से कौन एक अमूर्त संज्ञा का उदाहरण है?",
      "options_en": ["happiness", "dog", "car", "house"],
      "options_hi": ["खुशी", "कुत्ता", "गाड़ी", "घर"],
      "answer_en": "happiness",
      "answer_hi": "खुशी",
      "attempted": false
    },
    {
      "num": 23,
      "question_en": "Fill in the blank: 'I ____ a song when the phone rang.'",
      "question_hi": "रिक्त स्थान भरें: 'मैं एक गाना ____ रहा था जब फोन बजा।'",
      "options_en": ["was singing", "am singing", "sings", "will sing"],
      "options_hi": ["गा रहा था", "गा रहा हूँ", "गाता है", "गाएगा"],
      "answer_en": "was singing",
      "answer_hi": "गा रहा था",
      "attempted": false
    },
    {
      "num": 24,
      "question_en": "Which sentence contains an adverb?",
      "question_hi": "किस वाक्य में क्रिया विशेषण है?",
      "options_en": [
        "She sings beautifully.",
        "She is a singer.",
        "She sang a song.",
        "She was singing."
      ],
      "options_hi": [
        "वह सुंदरता से गाती है।",
        "वह एक गायिका है।",
        "उसने एक गाना गाया।",
        "वह गा रही थी।"
      ],
      "answer_en": "She sings beautifully.",
      "answer_hi": "वह सुंदरता से गाती है।",
      "attempted": false
    },
    {
      "num": 25,
      "question_en": "Choose the correct option: 'There ____ many apples on the tree.'",
      "question_hi": "सही विकल्प चुनें: 'पेड़ पर ____ बहुत सारे सेब हैं।'",
      "options_en": ["are", "is", "was", "has"],
      "options_hi": ["हैं", "है", "था", "है"],
      "answer_en": "are",
      "answer_hi": "हैं",
      "attempted": false
    },
    {
      "num": 26,
      "question_en": "Choose the correct verb form: 'She ____ not want to go.'",
      "question_hi": "सही क्रिया रूप चुनें: 'वह जाना नहीं ____।'",
      "options_en": ["does", "do", "did", "is"],
      "options_hi": ["चाहती", "चाहते", "चाहती थी", "है"],
      "answer_en": "does",
      "answer_hi": "चाहती",
      "attempted": false
    },
    {
      "num": 27,
      "question_en": "Fill in the blank: 'The sun ____ in the east.'",
      "question_hi": "रिक्त स्थान भरें: 'सूरज ____ से उगता है।'",
      "options_en": ["rises", "rise", "rose", "rising"],
      "options_hi": ["उगता है", "उगते हैं", "उगा", "उग रहा है"],
      "answer_en": "rises",
      "answer_hi": "उगता है",
      "attempted": false
    },
    {
      "num": 28,
      "question_en": "Which of these is a correct plural noun?",
      "question_hi": "इनमें से कौन सा सही बहुवचन संज्ञा है?",
      "options_en": ["children", "childs", "childes", "childen"],
      "options_hi": ["बच्चे", "बच्चों", "बच्चियों", "बच्चीयों"],
      "answer_en": "children",
      "answer_hi": "बच्चे",
      "attempted": false
    },
    {
      "num": 29,
      "question_en": "Choose the correct pronoun: '____ is my best friend.'",
      "question_hi": "सही सर्वनाम चुनें: '____ मेरा सबसे अच्छा दोस्त है।'",
      "options_en": ["He", "Him", "His", "He's"],
      "options_hi": ["वह", "उसे", "उसका", "वह है"],
      "answer_en": "He",
      "answer_hi": "वह",
      "attempted": false
    },
    {
      "num": 30,
      "question_en": "Choose the correct word order: 'book / a / reading / I / am'",
      "question_hi": "सही शब्द क्रम चुनें: 'book / a / reading / I / am'",
      "options_en": [
        "I am reading a book.",
        "I reading a book am.",
        "Am I reading a book.",
        "Reading a book I am."
      ],
      "options_hi": [
        "मैं एक किताब पढ़ रहा हूँ।",
        "मैं पढ़ रहा किताब एक हूँ।",
        "क्या मैं एक किताब पढ़ रहा हूँ?",
        "एक किताब पढ़ रहा हूँ मैं।"
      ],
      "answer_en": "I am reading a book.",
      "answer_hi": "मैं एक किताब पढ़ रहा हूँ।",
      "attempted": false
    }
  ,
  
  
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
      "options_en": ["tallest", "taller", "tall", "more tall"],
      "options_hi": ["सबसे लंबा", "लंबा", "लंबा", "ज्यादा लंबा"],
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
      "question_hi": "इनमें से कौन सा वाक्य passive voice में है?",
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
    }
  ,
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