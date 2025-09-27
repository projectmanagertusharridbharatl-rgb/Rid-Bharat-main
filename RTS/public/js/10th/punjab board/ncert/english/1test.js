
const questions = [



    {
        "num": 1,
        "question_en": "Who was the Happy Prince?",
        "question_hi": "'The Happy Prince' कौन था?",
        "options_en": ["A rich merchant", "A statue covered in gold", "A kind king", "A famous poet"],
        "options_hi": ["एक अमीर व्यापारी", "सोने से ढका एक मूर्ति", "एक दयालु राजा", "एक प्रसिद्ध कवि"],
        "answer_en": "A statue covered in gold",
        "answer_hi": "सोने से ढका एक मूर्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What was the statue of the Happy Prince made of?",
        "question_hi": "Happy Prince की मूर्ति किस सामग्री से बनी थी?",
        "options_en": ["Silver", "Gold", "Bronze", "Marble"],
        "options_hi": ["चांदी", "सोना", "कांस्य", "संगमरमर"],
        "answer_en": "Gold",
        "answer_hi": "सोना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What did the Happy Prince have on his sword?",
        "question_hi": "Happy Prince की तलवार पर क्या था?",
        "options_en": ["A ruby", "A diamond", "An emerald", "A sapphire"],
        "options_hi": ["एक माणिक", "हीरा", "पन्ना", "नीलम"],
        "answer_en": "A ruby",
        "answer_hi": "एक माणिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Who helped the Happy Prince?",
        "question_hi": "Happy Prince की मदद कौन करता है?",
        "options_en": ["A merchant", "A swallow", "A gardener", "A king"],
        "options_hi": ["एक व्यापारी", "एक गौरैया", "एक माली", "एक राजा"],
        "answer_en": "A swallow",
        "answer_hi": "एक गौरैया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What was the main theme of the story?",
        "question_hi": "कहानी का मुख्य विषय क्या था?",
        "options_en": ["Friendship", "Love and sacrifice", "Adventure", "Power and greed"],
        "options_hi": ["मित्रता", "प्रेम और बलिदान", "साहसिकता", "शक्ति और लालच"],
        "answer_en": "Love and sacrifice",
        "answer_hi": "प्रेम और बलिदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Why did the swallow decide to stay with the Happy Prince?",
        "question_hi": "गौरैया ने Happy Prince के साथ रहने का निर्णय क्यों लिया?",
        "options_en": ["He was tired of flying", "He was in love with the statue", "To help the prince with his mission", "He lost his way"],
        "options_hi": ["वह उड़ने से थक गया था", "वह मूर्ति से प्रेम करता था", "राजकुमार की मिशन में मदद करने के लिए", "वह अपना रास्ता खो बैठा था"],
        "answer_en": "To help the prince with his mission",
        "answer_hi": "राजकुमार की मिशन में मदद करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What did the Happy Prince ask the swallow to do?",
        "question_hi": "Happy Prince ने गौरैया से क्या करने को कहा?",
        "options_en": ["To sing a song", "To deliver his messages to the poor", "To find a treasure", "To guard the city"],
        "options_hi": ["एक गीत गाने के लिए", "गरीबों तक उसके संदेश पहुँचाने के लिए", "एक खजाना खोजने के लिए", "शहर की रक्षा करने के लिए"],
        "answer_en": "To deliver his messages to the poor",
        "answer_hi": "गरीबों तक उसके संदेश पहुँचाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What happened to the swallow at the end of the story?",
        "question_hi": "कहानी के अंत में गौरैया के साथ क्या हुआ?",
        "options_en": ["It flew away to a warmer place", "It died beside the Happy Prince", "It became a statue", "It found a new friend"],
        "options_hi": ["यह एक गर्म जगह पर उड़ गया", "यह Happy Prince के बगल में मर गया", "यह एक मूर्ति बन गया", "यह एक नया दोस्त ढूंढ लिया"],
        "answer_en": "It died beside the Happy Prince",
        "answer_hi": "यह Happy Prince के बगल में मर गया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What was the final act of the Happy Prince?",
        "question_hi": "Happy Prince का अंतिम कार्य क्या था?",
        "options_en": ["He gave his crown to the poor", "He melted away into gold", "He shared his wealth with the needy", "He flew away with the swallow"],
        "options_hi": ["उसने अपनी मुकुट गरीबों को दे दी", "वह सोने में बदल गया", "उसने अपनी संपत्ति जरूरतमंदों के साथ साझा की", "वह गौरैया के साथ उड़ गया"],
        "answer_en": "He shared his wealth with the needy",
        "answer_hi": "उसने अपनी संपत्ति जरूरतमंदों के साथ साझा की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What lesson does the story teach?",
        "question_hi": "कहानी हमें क्या सिखाती है?",
        "options_en": ["Never trust strangers", "True happiness comes from helping others", "Money is the key to happiness", "Always follow your dreams"],
        "options_hi": ["कभी अजनबियों पर भरोसा न करें", "सच्ची खुशी दूसरों की मदद करने से आती है", "पैसा ही खुशी की कुंजी है", "हमेशा अपने सपनों का पीछा करें"],
        "answer_en": "True happiness comes from helping others",
        "answer_hi": "सच्ची खुशी दूसरों की मदद करने से आती है",
        "attempted": false,
        "selected": ""
    },



    {
        "num": 11,
        "question_en": "Who is the author of 'Where Is Science Taking Us?'",
        "question_hi": "'Where Is Science Taking Us?' के लेखक कौन हैं?",
        "options_en": ["Stephen Hawking", "Carl Sagan", "Albert Einstein", "Isaac Newton"],
        "options_hi": ["स्टीफन हॉकिंग", "कार्ल सेगन", "अल्बर्ट आइंस्टीन", "आइजैक न्यूटन"],
        "answer_en": "Stephen Hawking",
        "answer_hi": "स्टीफन हॉकिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the main focus of the essay?",
        "question_hi": "निबंध का मुख्य ध्यान किस पर केंद्रित है?",
        "options_en": ["The beauty of nature", "Scientific advancements and their impact", "Historical events", "Cultural heritage"],
        "options_hi": ["प्रकृति की सुंदरता", "वैज्ञानिक प्रगति और उसका प्रभाव", "ऐतिहासिक घटनाएं", "सांस्कृतिक विरासत"],
        "answer_en": "Scientific advancements and their impact",
        "answer_hi": "वैज्ञानिक प्रगति और उसका प्रभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What does the author say about the future of science?",
        "question_hi": "लेखक विज्ञान के भविष्य के बारे में क्या कहते हैं?",
        "options_en": ["It will be less important", "It will lead to new discoveries and challenges", "It will stop progressing", "It will become a hobby"],
        "options_hi": ["यह कम महत्वपूर्ण होगा", "यह नए खोजों और चुनौतियों की ओर ले जाएगा", "यह प्रगति करना बंद कर देगा", "यह एक शौक बन जाएगा"],
        "answer_en": "It will lead to new discoveries and challenges",
        "answer_hi": "यह नए खोजों और चुनौतियों की ओर ले जाएगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What role does technology play according to the author?",
        "question_hi": "लेखक के अनुसार प्रौद्योगिकी की क्या भूमिका है?",
        "options_en": ["It makes life more difficult", "It has no real impact", "It helps in making life easier and faster", "It is harmful to humanity"],
        "options_hi": ["यह जीवन को अधिक कठिन बनाता है", "इसका कोई वास्तविक प्रभाव नहीं है", "यह जीवन को आसान और तेज़ बनाने में मदद करता है", "यह मानवता के लिए हानिकारक है"],
        "answer_en": "It helps in making life easier and faster",
        "answer_hi": "यह जीवन को आसान और तेज़ बनाने में मदद करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which of the following is a concern mentioned in the essay?",
        "question_hi": "निबंध में किस चिंता का उल्लेख किया गया है?",
        "options_en": ["Overpopulation", "Environmental degradation", "Scientific misuse", "All of the above"],
        "options_hi": ["अधिक जनसंख्या", "पर्यावरणीय गिरावट", "वैज्ञानिक दुरुपयोग", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What does the author suggest about the ethical use of science?",
        "question_hi": "लेखक विज्ञान के नैतिक उपयोग के बारे में क्या सुझाव देते हैं?",
        "options_en": ["Science should be used without any ethical considerations", "Ethical considerations are important to prevent misuse", "Ethics are not relevant to science", "Science should be used only for personal gain"],
        "options_hi": ["विज्ञान का उपयोग बिना किसी नैतिक विचार के किया जाना चाहिए", "दुरुपयोग को रोकने के लिए नैतिक विचार महत्वपूर्ण हैं", "नैतिकता विज्ञान के लिए प्रासंगिक नहीं है", "विज्ञान का उपयोग केवल व्यक्तिगत लाभ के लिए किया जाना चाहिए"],
        "answer_en": "Ethical considerations are important to prevent misuse",
        "answer_hi": "दुरुपयोग को रोकने के लिए नैतिक विचार महत्वपूर्ण हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which scientific advancement is highlighted in the essay?",
        "question_hi": "निबंध में कौन सी वैज्ञानिक प्रगति को उजागर किया गया है?",
        "options_en": ["The invention of the wheel", "Space exploration", "Development of the Internet", "All of the above"],
        "options_hi": ["पहिये का आविष्कार", "अंतरिक्ष अन्वेषण", "इंटरनेट का विकास", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the author’s attitude towards scientific progress?",
        "question_hi": "वैज्ञानिक प्रगति के प्रति लेखक का रुख क्या है?",
        "options_en": ["Negative and critical", "Indifferent", "Positive and optimistic", "Neutral"],
        "options_hi": ["नकारात्मक और आलोचनात्मक", "उदासीन", "सकारात्मक और आशावादी", "तटस्थ"],
        "answer_en": "Positive and optimistic",
        "answer_hi": "सकारात्मक और आशावादी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What does the essay suggest about the future of humanity?",
        "question_hi": "निबंध मानवता के भविष्य के बारे में क्या सुझाव देता है?",
        "options_en": ["It will be bleak and hopeless", "It will be bright and promising", "It will be stagnant", "It will be chaotic"],
        "options_hi": ["यह उदास और निराशाजनक होगा", "यह उज्जवल और आशाजनक होगा", "यह स्थिर रहेगा", "यह अराजक होगा"],
        "answer_en": "It will be bright and promising",
        "answer_hi": "यह उज्जवल और आशाजनक होगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "According to the author, what is the key to a better future?",
        "question_hi": "लेखक के अनुसार, बेहतर भविष्य की कुंजी क्या है?",
        "options_en": ["Avoiding scientific advancements", "Balancing technology with ethics", "Ignoring environmental issues", "Focusing only on economic growth"],
        "options_hi": ["वैज्ञानिक प्रगति से बचना", "प्रौद्योगिकी और नैतिकता का संतुलन बनाना", "पर्यावरणीय मुद्दों की अनदेखी करना", "केवल आर्थिक विकास पर ध्यान केंद्रित करना"],
        "answer_en": "Balancing technology with ethics",
        "answer_hi": "प्रौद्योगिकी और नैतिकता का संतुलन बनाना",
        "attempted": false,
        "selected": ""
    },



    {
        "num": 21,
        "question_en": "What is the main idea of 'Secret of Happiness'?",
        "question_hi": "'Secret of Happiness' का मुख्य विचार क्या है?",
        "options_en": ["Happiness comes from wealth", "Happiness comes from helping others", "Happiness is found in material possessions", "Happiness is about having a perfect life"],
        "options_hi": ["खुशी धन से आती है", "खुशी दूसरों की मदद करने से आती है", "खुशी भौतिक संपत्ति में पाई जाती है", "खुशी एक परिपूर्ण जीवन जीने के बारे में है"],
        "answer_en": "Happiness comes from helping others",
        "answer_hi": "खुशी दूसरों की मदद करने से आती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Who is the central character in the story?",
        "question_hi": "कहानी में मुख्य पात्र कौन है?",
        "options_en": ["A rich businessman", "A wise old man", "A young boy", "A famous artist"],
        "options_hi": ["एक अमीर व्यापारी", "एक बुद्धिमान बूढ़ा व्यक्ति", "एक युवा लड़का", "एक प्रसिद्ध कलाकार"],
        "answer_en": "A wise old man",
        "answer_hi": "एक बुद्धिमान बूढ़ा व्यक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What does the old man teach about happiness?",
        "question_hi": "बूढ़े व्यक्ति ने खुशी के बारे में क्या सिखाया?",
        "options_en": ["Happiness is found in material wealth", "Happiness comes from simple living and helping others", "Happiness is about traveling the world", "Happiness comes from fame and recognition"],
        "options_hi": ["खुशी भौतिक संपत्ति में पाई जाती है", "खुशी सरल जीवन जीने और दूसरों की मदद करने से आती है", "खुशी दुनिया की यात्रा करने के बारे में है", "खुशी प्रसिद्धि और पहचान से आती है"],
        "answer_en": "Happiness comes from simple living and helping others",
        "answer_hi": "खुशी सरल जीवन जीने और दूसरों की मदद करने से आती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What did the young boy learn from the old man?",
        "question_hi": "युवा लड़के ने बूढ़े व्यक्ति से क्या सीखा?",
        "options_en": ["How to earn money quickly", "How to live a simple and happy life", "How to become famous", "How to be the best in sports"],
        "options_hi": ["कैसे जल्दी पैसा कमाएं", "कैसे एक सरल और खुशहाल जीवन जीएं", "कैसे प्रसिद्ध बनें", "कैसे खेलों में सबसे अच्छा बनें"],
        "answer_en": "How to live a simple and happy life",
        "answer_hi": "कैसे एक सरल और खुशहाल जीवन जीएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the secret of true happiness according to the story?",
        "question_hi": "कहानी के अनुसार सच्ची खुशी का रहस्य क्या है?",
        "options_en": ["Material success", "Family and friends", "Helping others and living simply", "Luxury and comfort"],
        "options_hi": ["भौतिक सफलता", "परिवार और दोस्त", "दूसरों की मदद करना और सरल जीवन जीना", "आलीशान जीवन और आराम"],
        "answer_en": "Helping others and living simply",
        "answer_hi": "दूसरों की मदद करना और सरल जीवन जीना",
        "attempted": false,
        "selected": ""
    },



    {
        "num": 26,
        "question_en": "Who is the main character in 'A Gift for Christmas'?",
        "question_hi": "'A Gift for Christmas' में मुख्य पात्र कौन है?",
        "options_en": ["A young boy named Tom", "A little girl named Sarah", "A kind-hearted man named John", "A cheerful woman named Emily"],
        "options_hi": ["टोम नामक एक युवा लड़का", "सारा नामक एक छोटी लड़की", "जॉन नामक एक दयालु व्यक्ति", "एमिली नामक एक खुशमिजाज महिला"],
        "answer_en": "A young boy named Tom",
        "answer_hi": "टोम नामक एक युवा लड़का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What did Tom want for Christmas?",
        "question_hi": "टोम क्रिसमस के लिए क्या चाहता था?",
        "options_en": ["A new bicycle", "A toy car", "A puppy", "A warm coat"],
        "options_hi": ["एक नई साइकिल", "एक खिलौना कार", "एक पप्पी", "एक गरम कोट"],
        "answer_en": "A puppy",
        "answer_hi": "एक पप्पी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Why was Tom’s family unable to buy the gift he wanted?",
        "question_hi": "टोम का परिवार वह उपहार क्यों नहीं खरीद सका जो वह चाहता था?",
        "options_en": ["They didn’t have enough money", "They forgot about his wish", "They thought it was too expensive", "They already had a puppy"],
        "options_hi": ["उनके पास पर्याप्त पैसा नहीं था", "उन्होंने उसकी इच्छा को भूल गए", "उन्होंने सोचा कि यह बहुत महंगा है", "उनके पास पहले से ही एक पप्पी था"],
        "answer_en": "They didn’t have enough money",
        "answer_hi": "उनके पास पर्याप्त पैसा नहीं था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What did Tom decide to do to get the puppy?",
        "question_hi": "टोम ने पप्पी पाने के लिए क्या करने का फैसला किया?",
        "options_en": ["He decided to work and save money", "He asked his friends for help", "He decided to buy a cheaper gift", "He gave up on his wish"],
        "options_hi": ["उसने काम करने और पैसा बचाने का फैसला किया", "उसने अपने दोस्तों से मदद मांगी", "उसने एक सस्ता उपहार खरीदने का फैसला किया", "उसने अपनी इच्छा को छोड़ दिया"],
        "answer_en": "He decided to work and save money",
        "answer_hi": "उसने काम करने और पैसा बचाने का फैसला किया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What was the real gift that Tom received for Christmas?",
        "question_hi": "टोम को क्रिसमस के लिए असली उपहार क्या मिला?",
        "options_en": ["A puppy", "A beautiful sweater", "The love and care of his family", "A new bicycle"],
        "options_hi": ["एक पप्पी", "एक सुंदर स्वेटर", "अपने परिवार का प्यार और देखभाल", "एक नई साइकिल"],
        "answer_en": "The love and care of his family",
        "answer_hi": "अपने परिवार का प्यार और देखभाल",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 31,
        "question_en": "What was the main focus of ancient Indian thought?",
        "question_hi": "प्राचीन भारतीय विचार का मुख्य फोकस क्या था?",
        "options_en": ["Material wealth", "Spiritual growth", "Military conquest", "Technological advancement"],
        "options_hi": ["भौतिक संपत्ति", "आध्यात्मिक विकास", "सैन्य विजय", "तकनीकी प्रगति"],
        "answer_en": "Spiritual growth",
        "answer_hi": "आध्यात्मिक विकास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which scripture is considered the foundation of Indian philosophy?",
        "question_hi": "किस ग्रंथ को भारतीय दर्शन की नींव माना जाता है?",
        "options_en": ["Mahabharata", "Ramayana", "Vedas", "Puranas"],
        "options_hi": ["महाभारत", "रामायण", "वेद", "पुराण"],
        "answer_en": "Vedas",
        "answer_hi": "वेद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What does 'Dharma' signify in ancient Indian thought?",
        "question_hi": "प्राचीन भारतीय विचार में 'धर्म' क्या दर्शाता है?",
        "options_en": ["Religious rituals", "Duty and righteousness", "Wealth accumulation", "Political power"],
        "options_hi": ["धार्मिक अनुष्ठान", "कर्तव्य और धार्मिकता", "धन संचय", "राजनीतिक शक्ति"],
        "answer_en": "Duty and righteousness",
        "answer_hi": "कर्तव्य और धार्मिकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which ancient Indian practice emphasizes non-violence?",
        "question_hi": "कौन-सी प्राचीन भारतीय प्रथा अहिंसा पर जोर देती है?",
        "options_en": ["Yajna", "Ahimsa", "Dana", "Tapas"],
        "options_hi": ["यज्ञ", "अहिंसा", "दान", "तपस्या"],
        "answer_en": "Ahimsa",
        "answer_hi": "अहिंसा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What was the role of 'Gurukul' in ancient India?",
        "question_hi": "प्राचीन भारत में 'गुरुकुल' की क्या भूमिका थी?",
        "options_en": ["Military training center", "Center for trade", "Residential school for holistic education", "Place for entertainment"],
        "options_hi": ["सैन्य प्रशिक्षण केंद्र", "व्यापार का केंद्र", "समग्र शिक्षा के लिए आवासीय विद्यालय", "मनोरंजन का स्थान"],
        "answer_en": "Residential school for holistic education",
        "answer_hi": "समग्र शिक्षा के लिए आवासीय विद्यालय",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 36,
        "question_en": "Who is the protagonist of 'The Home-Coming'?",
        "question_hi": "'द होम-कमिंग' का नायक कौन है?",
        "options_en": ["A soldier", "A businessman", "A young boy named Phatik", "A teacher"],
        "options_hi": ["एक सैनिक", "एक व्यवसायी", "फटिक नाम का एक युवा लड़का", "एक शिक्षक"],
        "answer_en": "A young boy named Phatik",
        "answer_hi": "फटिक नाम का एक युवा लड़का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Why did Phatik want to leave his village?",
        "question_hi": "फटिक अपने गाँव को क्यों छोड़ना चाहता था?",
        "options_en": ["To find a job", "To escape punishment", "To live with his uncle in the city", "To study abroad"],
        "options_hi": ["नौकरी ढूंढने के लिए", "सजा से बचने के लिए", "शहर में अपने चाचा के साथ रहने के लिए", "विदेश में पढ़ने के लिए"],
        "answer_en": "To live with his uncle in the city",
        "answer_hi": "शहर में अपने चाचा के साथ रहने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "How does Phatik feel in his uncle's house?",
        "question_hi": "फटिक को अपने चाचा के घर में कैसा महसूस होता है?",
        "options_en": ["Happy and welcomed", "Neglected and homesick", "Excited and adventurous", "Angry and rebellious"],
        "options_hi": ["खुश और स्वागत योग्य", "उपेक्षित और गृहसिक", "उत्साहित और साहसिक", "गुस्से में और विद्रोही"],
        "answer_en": "Neglected and homesick",
        "answer_hi": "उपेक्षित और गृहसिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What happens to Phatik at the end of the story?",
        "question_hi": "कहानी के अंत में फटिक का क्या होता है?",
        "options_en": ["He becomes successful", "He returns to his village", "He falls ill and dies", "He runs away from home"],
        "options_hi": ["वह सफल हो जाता है", "वह अपने गाँव लौट जाता है", "वह बीमार पड़ जाता है और मर जाता है", "वह घर से भाग जाता है"],
        "answer_en": "He falls ill and dies",
        "answer_hi": "वह बीमार पड़ जाता है और मर जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the central theme of 'The Home-Coming'?",
        "question_hi": "'द होम-कमिंग' का केंद्रीय विषय क्या है?",
        "options_en": ["Adventure and exploration", "The pain of displacement and longing for home", "The importance of education", "The joy of city life"],
        "options_hi": ["साहसिक और अन्वेषण", "विस्थापन का दर्द और घर की लालसा", "शिक्षा का महत्व", "शहर के जीवन की खुशी"],
        "answer_en": "The pain of displacement and longing for home",
        "answer_hi": "विस्थापन का दर्द और घर की लालसा",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 41,
        "question_en": "What scientific theory explains the formation of Earth?",
        "question_hi": "पृथ्वी के निर्माण को कौन-सा वैज्ञानिक सिद्धांत समझाता है?",
        "options_en": ["Theory of Relativity", "Big Bang Theory", "Nebular Hypothesis", "Quantum Theory"],
        "options_hi": ["सापेक्षता का सिद्धांत", "बिग बैंग सिद्धांत", "निहारिका परिकल्पना", "क्वांटम सिद्धांत"],
        "answer_en": "Nebular Hypothesis",
        "answer_hi": "निहारिका परिकल्पना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "How old is the Earth estimated to be?",
        "question_hi": "पृथ्वी की आयु कितनी आंकी गई है?",
        "options_en": ["1 million years", "100 million years", "4.5 billion years", "10 billion years"],
        "options_hi": ["10 लाख वर्ष", "100 मिलियन वर्ष", "4.5 अरब वर्ष", "10 अरब वर्ष"],
        "answer_en": "4.5 billion years",
        "answer_hi": "4.5 अरब वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What was Earth's early atmosphere primarily composed of?",
        "question_hi": "पृथ्वी का प्रारंभिक वायुमंडल मुख्य रूप से किससे बना था?",
        "options_en": ["Oxygen and Nitrogen", "Hydrogen and Helium", "Carbon dioxide and Methane", "Ozone and Argon"],
        "options_hi": ["ऑक्सीजन और नाइट्रोजन", "हाइड्रोजन और हीलियम", "कार्बन डाइऑक्साइड और मीथेन", "ओजोन और आर्गन"],
        "answer_en": "Carbon dioxide and Methane",
        "answer_hi": "कार्बन डाइऑक्साइड और मीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What process created Earth's oceans?",
        "question_hi": "पृथ्वी के महासागर किस प्रक्रिया से बने?",
        "options_en": ["Volcanic outgassing", "Meteor impacts", "Photosynthesis", "Tectonic plate movement"],
        "options_hi": ["ज्वालामुखीय उत्सर्जन", "उल्का प्रभाव", "प्रकाश संश्लेषण", "टेक्टोनिक प्लेट गति"],
        "answer_en": "Volcanic outgassing",
        "answer_hi": "ज्वालामुखीय उत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What marked the beginning of life on Earth?",
        "question_hi": "पृथ्वी पर जीवन की शुरुआत किसने चिह्नित की?",
        "options_en": ["Formation of continents", "Appearance of water", "Development of ozone layer", "Emergence of single-celled organisms"],
        "options_hi": ["महाद्वीपों का निर्माण", "पानी की उपस्थिति", "ओजोन परत का विकास", "एककोशिकीय जीवों का उदय"],
        "answer_en": "Emergence of single-celled organisms",
        "answer_hi": "एककोशिकीय जीवों का उदय",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 46,
        "question_en": "What is the main message of 'The Rule of the Road'?",
        "question_hi": "'द रूल ऑफ द रोड' का मुख्य संदेश क्या है?",
        "options_en": ["Strict traffic laws are necessary", "Personal liberty must be balanced with social responsibility", "Driving fast is dangerous", "Pedestrians always have right of way"],
        "options_hi": ["सख्त यातायात नियम आवश्यक हैं", "व्यक्तिगत स्वतंत्रता को सामाजिक जिम्मेदारी के साथ संतुलित होना चाहिए", "तेज गाड़ी चलाना खतरनाक है", "पैदल यात्रियों को हमेशा रास्ते का अधिकार है"],
        "answer_en": "Personal liberty must be balanced with social responsibility",
        "answer_hi": "व्यक्तिगत स्वतंत्रता को सामाजिक जिम्मेदारी के साथ संतुलित होना चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What example does the author use to explain individual freedom?",
        "question_hi": "लेखक व्यक्तिगत स्वतंत्रता को समझाने के लिए किस उदाहरण का उपयोग करता है?",
        "options_en": ["A musician playing loudly at night", "A pedestrian crossing the road", "A driver obeying traffic signals", "A shopkeeper keeping his stall on footpath"],
        "options_hi": ["रात में जोर से संगीत बजाने वाला संगीतकार", "सड़क पार करता हुआ पैदल यात्री", "यातायात संकेतों का पालन करने वाला ड्राइवर", "फुटपाथ पर अपना स्टाल लगाए रखने वाला दुकानदार"],
        "answer_en": "A musician playing loudly at night",
        "answer_hi": "रात में जोर से संगीत बजाने वाला संगीतकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "According to the essay, what happens when everyone claims absolute liberty?",
        "question_hi": "निबंध के अनुसार, जब हर कोई पूर्ण स्वतंत्रता की मांग करता है तो क्या होता है?",
        "options_en": ["Society becomes more progressive", "Chaos and conflict arise", "Government becomes stronger", "Economic growth increases"],
        "options_hi": ["समाज अधिक प्रगतिशील हो जाता है", "अराजकता और संघर्ष पैदा होता है", "सरकार मजबूत हो जाती है", "आर्थिक विकास बढ़ता है"],
        "answer_en": "Chaos and conflict arise",
        "answer_hi": "अराजकता और संघर्ष पैदा होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What does the 'rule of the road' symbolize?",
        "question_hi": "'रूल ऑफ द रोड' किसका प्रतीक है?",
        "options_en": ["Traffic regulations", "Social contract", "Military discipline", "Economic policies"],
        "options_hi": ["यातायात नियम", "सामाजिक अनुबंध", "सैन्य अनुशासन", "आर्थिक नीतियाँ"],
        "answer_en": "Social contract",
        "answer_hi": "सामाजिक अनुबंध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "How does the author suggest we should exercise our rights?",
        "question_hi": "लेखक सुझाव देता है कि हमें अपने अधिकारों का प्रयोग कैसे करना चाहिए?",
        "options_en": ["Without considering others", "Only during emergencies", "Without any restrictions", "Without interfering with others' rights"],
        "options_hi": ["दूसरों को ध्यान में रखे बिना", "केवल आपात स्थितियों में", "बिना किसी प्रतिबंध के", "दूसरों के अधिकारों में हस्तक्षेप किए बिना"],
        "answer_en": "Without interfering with others' rights",
        "answer_hi": "दूसरों के अधिकारों में हस्तक्षेप किए बिना",
        "attempted": false,
        "selected": ""
    },


    {
        "num": 51,
        "question_en": "Who is the main character in 'Bed Number – 29'?",
        "question_hi": "'बेड नंबर – 29' का मुख्य पात्र कौन है?",
        "options_en": ["A doctor", "A nurse", "Naeem (a blind patient)", "A hospital administrator"],
        "options_hi": ["एक डॉक्टर", "एक नर्स", "नईम (एक अंधा मरीज)", "एक अस्पताल प्रशासक"],
        "answer_en": "Naeem (a blind patient)",
        "answer_hi": "नईम (एक अंधा मरीज)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What special talent does the patient in Bed 29 possess?",
        "question_hi": "बेड 29 के मरीज में क्या विशेष प्रतिभा है?",
        "options_en": ["Singing", "Painting", "Storytelling", "Medical knowledge"],
        "options_hi": ["गायन", "चित्रकारी", "कहानी सुनाना", "चिकित्सा ज्ञान"],
        "answer_en": "Storytelling",
        "answer_hi": "कहानी सुनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "How does the narrator discover Naeem's true identity?",
        "question_hi": "वर्णनकर्ता नईम की वास्तविक पहचान कैसे खोजता है?",
        "options_en": ["Through hospital records", "By seeing his photograph in newspaper", "Naeem confesses himself", "Another patient reveals it"],
        "options_hi": ["अस्पताल के रिकॉर्ड के माध्यम से", "अखबार में उसकी तस्वीर देखकर", "नईम स्वयं स्वीकार करता है", "एक अन्य मरीज इसे प्रकट करता है"],
        "answer_en": "By seeing his photograph in newspaper",
        "answer_hi": "अखबार में उसकी तस्वीर देखकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What tragic event made Naeem blind?",
        "question_hi": "किस दुखद घटना ने नईम को अंधा बना दिया?",
        "options_en": ["Car accident", "Chemical explosion", "Electric shock", "Sports injury"],
        "options_hi": ["कार दुर्घटना", "रासायनिक विस्फोट", "बिजली का झटका", "खेल की चोट"],
        "answer_en": "Chemical explosion",
        "answer_hi": "रासायनिक विस्फोट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What lesson does the story convey?",
        "question_hi": "कहानी क्या सबक देती है?",
        "options_en": ["Hospitals are depressing places", "Physical disability doesn't limit imagination", "Doctors should be more compassionate", "Newspapers often publish fake news"],
        "options_hi": ["अस्पताल उदास जगहें हैं", "शारीरिक अक्षमता कल्पना को सीमित नहीं करती", "डॉक्टरों को अधिक दयालु होना चाहिए", "अखबार अक्सर फर्जी खबरें छापते हैं"],
        "answer_en": "Physical disability doesn't limit imagination",
        "answer_hi": "शारीरिक अक्षमता कल्पना को सीमित नहीं करती",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 56,
        "question_en": "What is the main commodity in 'Half a Rupee Worth'?",
        "question_hi": "'हाफ अ रुपी वर्थ' में मुख्य वस्तु क्या है?",
        "options_en": ["Rice", "Wheat", "Sugar", "Salt"],
        "options_hi": ["चावल", "गेहूँ", "चीनी", "नमक"],
        "answer_en": "Rice",
        "answer_hi": "चावल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Why does the protagonist struggle to buy rice?",
        "question_hi": "नायक को चावल खरीदने में क्यों संघर्ष करना पड़ता है?",
        "options_en": ["High prices due to shortage", "His wife doesn't want rice", "He prefers wheat", "The shop is closed"],
        "options_hi": ["कमी के कारण ऊँची कीमतें", "उसकी पत्नी चावल नहीं चाहती", "वह गेहूँ पसंद करता है", "दुकान बंद है"],
        "answer_en": "High prices due to shortage",
        "answer_hi": "कमी के कारण ऊँची कीमतें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "How does the shopkeeper justify the high prices?",
        "question_hi": "दुकानदार ऊँची कीमतों को कैसे सही ठहराता है?",
        "options_en": ["Blames government policies", "Says transportation costs are high", "Claims it's international market rate", "Says he has limited stock"],
        "options_hi": ["सरकारी नीतियों को दोष देता है", "कहता है कि परिवहन लागत अधिक है", "दावा करता है कि यह अंतर्राष्ट्रीय बाजार दर है", "कहता है कि उसके पास सीमित स्टॉक है"],
        "answer_en": "Says transportation costs are high",
        "answer_hi": "कहता है कि परिवहन लागत अधिक है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What does the story highlight about human nature?",
        "question_hi": "कहानी मानव प्रकृति के बारे में क्या उजागर करती है?",
        "options_en": ["Generosity during crises", "Exploitation during shortages", "Indifference to others' suffering", "Trust in government systems"],
        "options_hi": ["संकट के दौरान उदारता", "कमी के दौरान शोषण", "दूसरों के दुख के प्रति उदासीनता", "सरकारी प्रणालियों में विश्वास"],
        "answer_en": "Exploitation during shortages",
        "answer_hi": "कमी के दौरान शोषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the climax of the story?",
        "question_hi": "कहानी का चरम बिंदु क्या है?",
        "options_en": ["The protagonist finds another shop", "The shopkeeper reduces prices", "A riot breaks out for food", "The protagonist accepts his fate"],
        "options_hi": ["नायक को एक और दुकान मिल जाती है", "दुकानदार कीमतें कम कर देता है", "भोजन के लिए दंगा भड़क जाता है", "नायक अपनी नियति को स्वीकार कर लेता है"],
        "answer_en": "A riot breaks out for food",
        "answer_hi": "भोजन के लिए दंगा भड़क जाता है",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 61,
        "question_en": "What is the condition for inheriting $1000 in the story?",
        "question_hi": "कहानी में $1000 विरासत में पाने की क्या शर्त है?",
        "options_en": ["Marry within a year", "Spend it all and account for expenses", "Invest it in business", "Donate to charity"],
        "options_hi": ["एक साल के भीतर शादी करो", "इसे सब खर्च करो और खर्चों का हिसाब दो", "इसे व्यवसाय में निवेश करो", "दान करो"],
        "answer_en": "Spend it all and account for expenses",
        "answer_hi": "इसे सब खर्च करो और खर्चों का हिसाब दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How does the protagonist initially plan to spend the money?",
        "question_hi": "नायक शुरू में पैसे खर्च करने की क्या योजना बनाता है?",
        "options_en": ["On luxury items", "Gambling", "Helping a struggling artist", "Starting a business"],
        "options_hi": ["लक्जरी आइटम्स पर", "जुआ", "एक संघर्षरत कलाकार की मदद करना", "व्यवसाय शुरू करना"],
        "answer_en": "Helping a struggling artist",
        "answer_hi": "एक संघर्षरत कलाकार की मदद करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is the twist at the end of the story?",
        "question_hi": "कहानी के अंत में मोड़ क्या है?",
        "options_en": ["He gets additional inheritance", "The money was counterfeit", "His expenses are rejected", "He falls in love with the artist"],
        "options_hi": ["उसे अतिरिक्त विरासत मिलती है", "पैसा नकली था", "उसके खर्चों को अस्वीकार कर दिया जाता है", "उसे कलाकार से प्यार हो जाता है"],
        "answer_en": "He gets additional inheritance",
        "answer_hi": "उसे अतिरिक्त विरासत मिलती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What character trait does the protagonist display?",
        "question_hi": "नायक किस चरित्र गुण को प्रदर्शित करता है?",
        "options_en": ["Greed", "Generosity", "Dishonesty", "Impulsiveness"],
        "options_hi": ["लालच", "उदारता", "बेईमानी", "आवेग"],
        "answer_en": "Generosity",
        "answer_hi": "उदारता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Who is the author of 'One Thousand Dollars'?",
        "question_hi": "'वन थाउजेंड डॉलर्स' के लेखक कौन हैं?",
        "options_en": ["Mark Twain", "O. Henry", "Leo Tolstoy", "Rabindranath Tagore"],
        "options_hi": ["मार्क ट्वेन", "ओ. हेनरी", "लियो टॉल्स्टॉय", "रबींद्रनाथ टैगोर"],
        "answer_en": "O. Henry",
        "answer_hi": "ओ. हेनरी",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 66,
        "question_en": "Who pretends to be seriously ill in the story?",
        "question_hi": "कहानी में कौन गंभीर रूप से बीमार होने का नाटक करता है?",
        "options_en": ["Dr. Watson", "Sherlock Holmes", "Mrs. Hudson", "The villain"],
        "options_hi": ["डॉ. वाटसन", "शरलॉक होम्स", "श्रीमती हडसन", "खलनायक"],
        "answer_en": "Sherlock Holmes",
        "answer_hi": "शरलॉक होम्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What disease does Holmes claim to have?",
        "question_hi": "होम्स किस बीमारी का दावा करता है?",
        "options_en": ["Malaria", "Cholera", "Black Formosa plague", "Tuberculosis"],
        "options_hi": ["मलेरिया", "हैजा", "ब्लैक फॉर्मोसा प्लेग", "तपेदिक"],
        "answer_en": "Black Formosa plague",
        "answer_hi": "ब्लैक फॉर्मोसा प्लेग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Why does Holmes pretend to be ill?",
        "question_hi": "होम्स बीमार होने का नाटक क्यों करता है?",
        "options_en": ["To test Watson's loyalty", "To catch the murderer", "To avoid a case", "To get sympathy"],
        "options_hi": ["वाटसन की वफादारी की जांच करने के लिए", "हत्यारे को पकड़ने के लिए", "एक मामले से बचने के लिए", "सहानुभूति पाने के लिए"],
        "answer_en": "To catch the murderer",
        "answer_hi": "हत्यारे को पकड़ने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What item plays a crucial role in solving the case?",
        "question_hi": "मामला सुलझाने में कौन सी वस्तु महत्वपूर्ण भूमिका निभाती है?",
        "options_en": ["A pocket watch", "A rare coin", "An ivory box", "A walking stick"],
        "options_hi": ["एक जेब घड़ी", "एक दुर्लभ सिक्का", "एक हाथीदांत का डिब्बा", "एक छड़ी"],
        "answer_en": "An ivory box",
        "answer_hi": "एक हाथीदांत का डिब्बा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What does this story showcase about Holmes' character?",
        "question_hi": "यह कहानी होम्स के चरित्र के बारे में क्या दर्शाती है?",
        "options_en": ["His acting skills", "His hypochondria", "His scientific knowledge", "His physical strength"],
        "options_hi": ["उसके अभिनय कौशल", "उसका रोगभ्रम", "उसका वैज्ञानिक ज्ञान", "उसकी शारीरिक शक्ति"],
        "answer_en": "His acting skills",
        "answer_hi": "उसके अभिनय कौशल",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 71,
        "question_en": "What is the protagonist's obsession in this story?",
        "question_hi": "इस कहानी में नायक का जुनून क्या है?",
        "options_en": ["Gold", "Land", "Horses", "Power"],
        "options_hi": ["सोना", "जमीन", "घोड़े", "शक्ति"],
        "answer_en": "Land",
        "answer_hi": "जमीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What deal does Pahom make with the Bashkirs?",
        "question_hi": "पाहोम बश्किरों के साथ क्या सौदा करता है?",
        "options_en": ["Buy land at fixed price", "Get all land he can walk around in a day", "Trade livestock for land", "Marry into their tribe for land"],
        "options_hi": ["निश्चित मूल्य पर जमीन खरीदें", "वह सारी जमीन ले लो जिसे वह एक दिन में घेर सके", "जमीन के लिए पशुधन का व्यापार करें", "जमीन के लिए उनकी जनजाति में शादी करो"],
        "answer_en": "Get all land he can walk around in a day",
        "answer_hi": "वह सारी जमीन ले लो जिसे वह एक दिन में घेर सके",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Why does Pahom fail in his challenge?",
        "question_hi": "पाहोम अपनी चुनौती में क्यों विफल हो जाता है?",
        "options_en": ["Gets lost", "Becomes greedy and tries to cover too much", "Falls ill", "Attacked by wild animals"],
        "options_hi": ["खो जाता है", "लालची हो जाता है और बहुत अधिक कवर करने की कोशिश करता है", "बीमार पड़ जाता है", "जंगली जानवरों द्वारा हमला"],
        "answer_en": "Becomes greedy and tries to cover too much",
        "answer_hi": "लालची हो जाता है और बहुत अधिक कवर करने की कोशिश करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the story's moral lesson?",
        "question_hi": "कहानी का नैतिक पाठ क्या है?",
        "options_en": ["Land is the best investment", "Greed leads to destruction", "Hard work always pays off", "Trust tribal people"],
        "options_hi": ["जमीन सबसे अच्छा निवेश है", "लालच विनाश की ओर ले जाती है", "कड़ी मेहनत हमेशा फल देती है", "आदिवासी लोगों पर भरोसा करो"],
        "answer_en": "Greed leads to destruction",
        "answer_hi": "लालच विनाश की ओर ले जाती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "How much land does Pahom ultimately need?",
        "question_hi": "पाहोम को अंततः कितनी जमीन की आवश्यकता होती है?",
        "options_en": ["100 acres", "As much as he can get", "Just 6 feet for his grave", "None as he becomes rich"],
        "options_hi": ["100 एकड़", "जितना वह प्राप्त कर सकता है", "बस उसकी कब्र के लिए 6 फीट", "कुछ नहीं क्योंकि वह अमीर हो जाता है"],
        "answer_en": "Just 6 feet for his grave",
        "answer_hi": "बस उसकी कब्र के लिए 6 फीट",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 76,
        "question_en": "What medical condition does the protagonist have in 'Return to Air'?",
        "question_hi": "'रिटर्न टू एयर' में नायक की क्या चिकित्सीय स्थिति है?",
        "options_en": ["Heart disease", "Tuberculosis", "Asthma", "Polio"],
        "options_hi": ["हृदय रोग", "तपेदिक", "दमा", "पोलियो"],
        "answer_en": "Tuberculosis",
        "answer_hi": "तपेदिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Where is the protagonist sent for treatment?",
        "question_hi": "नायक को इलाज के लिए कहाँ भेजा जाता है?",
        "options_en": ["Mountain sanatorium", "Seaside hospital", "City medical college", "Village clinic"],
        "options_hi": ["पहाड़ी स्वास्थ्य केंद्र", "समुद्र तटीय अस्पताल", "शहर का मेडिकल कॉलेज", "गाँव का क्लिनिक"],
        "answer_en": "Mountain sanatorium",
        "answer_hi": "पहाड़ी स्वास्थ्य केंद्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What symbolizes hope in the story?",
        "question_hi": "कहानी में आशा का प्रतीक क्या है?",
        "options_en": ["A medicine bottle", "A flying bird", "A blooming flower", "A sunrise"],
        "options_hi": ["एक दवा की बोतल", "एक उड़ता हुआ पक्षी", "एक खिलता हुआ फूल", "एक सूर्योदय"],
        "answer_en": "A flying bird",
        "answer_hi": "एक उड़ता हुआ पक्षी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What psychological change does the protagonist undergo?",
        "question_hi": "नायक किस मनोवैज्ञानिक परिवर्तन से गुजरता है?",
        "options_en": ["From hope to despair", "From despair to hope", "From anger to calmness", "From indifference to passion"],
        "options_hi": ["आशा से निराशा तक", "निराशा से आशा तक", "क्रोध से शांति तक", "उदासीनता से जुनून तक"],
        "answer_en": "From despair to hope",
        "answer_hi": "निराशा से आशा तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does 'return to air' metaphorically represent?",
        "question_hi": "'हवा में वापसी' रूपक रूप से क्या दर्शाता है?",
        "options_en": ["Recovery and freedom", "Learning to fly", "Breathing exercises", "Death"],
        "options_hi": ["स्वास्थ्यलाभ और स्वतंत्रता", "उड़ना सीखना", "श्वास व्यायाम", "मृत्यु"],
        "answer_en": "Recovery and freedom",
        "answer_hi": "स्वास्थ्यलाभ और स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 81,
        "question_en": "Which determiner best completes the sentence: 'There isn’t ___ sugar left in the jar.'?",
        "question_hi": "'There isn’t ___ sugar left in the jar.' वाक्य में कौन सा निर्धारक उचित होगा?",
        "options_en": ["some", "many", "any", "each"],
        "options_hi": ["कुछ", "कई", "कोई", "प्रत्येक"],
        "answer_en": "any",
        "answer_hi": "कोई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Identify the correct preposition: 'She has been waiting ___ the bus for half an hour.'",
        "question_hi": "'She has been waiting ___ the bus for half an hour.' में सही पूर्वसर्ग क्या है?",
        "options_en": ["for", "since", "in", "to"],
        "options_hi": ["के लिए", "तब से", "में", "को"],
        "answer_en": "for",
        "answer_hi": "के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which modal completes the sentence: 'You ___ not speak loudly in the library.'?",
        "question_hi": "'You ___ not speak loudly in the library.' वाक्य को पूरा करने वाला सहायक क्रिया कौन सा है?",
        "options_en": ["must", "should", "need", "must"],
        "options_hi": ["चाहिए", "चाहिए", "ज़रूरत", "चाहिए"],
        "answer_en": "must",
        "answer_hi": "चाहिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Choose the suitable connector: 'He was tired, ___ he went to bed early.'",
        "question_hi": "'He was tired, ___ he went to bed early.' वाक्य में उपयुक्त संयोजक चुनें।",
        "options_en": ["because", "although", "so", "if"],
        "options_hi": ["क्योंकि", "हालांकि", "इसलिए", "अगर"],
        "answer_en": "so",
        "answer_hi": "इसलिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which word is the non-finite verb: 'She enjoys reading books.'?",
        "question_hi": "'She enjoys reading books.' वाक्य में गैर-समाप्त क्रिया (Non-finite verb) कौन सी है?",
        "options_en": ["enjoys", "reading", "books", "she"],
        "options_hi": ["पसंद करती है", "पढ़ना", "किताबें", "वह"],
        "answer_en": "reading",
        "answer_hi": "पढ़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which of the following is a complex sentence?",
        "question_hi": "निम्नलिखित में से कौन सा वाक्य जटिल (complex) है?",
        "options_en": [
            "He ran fast and won the race.",
            "He ran fast.",
            "He ran fast because he was late.",
            "He ran fast but he got tired."
        ],
        "options_hi": [
            "वह तेज दौड़ा और दौड़ जीत गया।",
            "वह तेज दौड़ा।",
            "वह तेज दौड़ा क्योंकि वह देर से था।",
            "वह तेज दौड़ा लेकिन थक गया।"
        ],
        "answer_en": "He ran fast because he was late.",
        "answer_hi": "वह तेज दौड़ा क्योंकि वह देर से था।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Choose the correct passive voice: 'They wrote a letter.'",
        "question_hi": "'They wrote a letter.' का सही कृत कर्म वाच्य (Passive Voice) क्या होगा?",
        "options_en": [
            "A letter is written by them.",
            "A letter was written by them.",
            "A letter had written by them.",
            "A letter has been written by them."
        ],
        "options_hi": [
            "एक पत्र उनके द्वारा लिखा गया है।",
            "एक पत्र उनके द्वारा लिखा गया।",
            "एक पत्र उनके द्वारा लिखा गया था।",
            "एक पत्र उनके द्वारा लिखा गया है।"
        ],
        "answer_en": "A letter was written by them.",
        "answer_hi": "एक पत्र उनके द्वारा लिखा गया।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Choose the correct reported speech: She said, 'I am tired.'",
        "question_hi": "She said, 'I am tired.' का सही अप्रत्यक्ष वाक्य (Reported Speech) क्या होगा?",
        "options_en": [
            "She said that she is tired.",
            "She said that I was tired.",
            "She said that she was tired.",
            "She said she will be tired."
        ],
        "options_hi": [
            "उसने कहा कि वह थकी हुई है।",
            "उसने कहा कि मैं थका हुआ था।",
            "उसने कहा कि वह थकी हुई थी।",
            "उसने कहा कि वह थकी होगी।"
        ],
        "answer_en": "She said that she was tired.",
        "answer_hi": "उसने कहा कि वह थकी हुई थी।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Identify the tense: 'He has been working all day.'",
        "question_hi": "'He has been working all day.' वाक्य में कौन सा काल है?",
        "options_en": [
            "Present Simple",
            "Past Perfect",
            "Present Perfect Continuous",
            "Future Continuous"
        ],
        "options_hi": [
            "वर्तमान सामान्य",
            "भूत पूर्ण",
            "वर्तमान पूर्ण निरंतर",
            "भविष्य निरंतर"
        ],
        "answer_en": "Present Perfect Continuous",
        "answer_hi": "वर्तमान पूर्ण निरंतर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Choose the correctly punctuated sentence:",
        "question_hi": "सही विराम चिन्हों वाला वाक्य चुनें:",
        "options_en": [
            "he said “i will go now”",
            "He said, “I will go now.”",
            "He said “i will go now.”",
            "he said, I will go now."
        ],
        "options_hi": [
            "he said “i will go now”",
            "He said, “I will go now.”",
            "He said “i will go now.”",
            "he said, I will go now."
        ],
        "answer_en": "He said, “I will go now.”",
        "answer_hi": "He said, “I will go now.”",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 91,
        "question_en": "What is the main purpose of reading comprehension?",
        "question_hi": "रीडिंग कॉम्प्रिहेंशन (Reading Comprehension) का मुख्य उद्देश्य क्या है?",
        "options_en": ["Memorizing words", "Understanding the passage", "Writing an essay", "Learning grammar"],
        "options_hi": ["शब्द याद करना", "गद्यांश को समझना", "निबंध लिखना", "व्याकरण सीखना"],
        "answer_en": "Understanding the passage",
        "answer_hi": "गद्यांश को समझना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which of these is a pair of commonly confused words?",
        "question_hi": "इनमें से कौन सामान्यतः भ्रमित किए जाने वाले शब्दों की जोड़ी है?",
        "options_en": ["Accept – Except", "Then – Than", "All – Aloud", "All of the above"],
        "options_hi": ["स्वीकार करना – को छोड़कर", "तब – से", "सब – ज़ोर से", "ऊपर दिए गए सभी"],
        "answer_en": "All of the above",
        "answer_hi": "ऊपर दिए गए सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Choose the idiom that means 'to start a task':",
        "question_hi": "'किसी कार्य को शुरू करना' अर्थ वाली मुहावरा चुनें:",
        "options_en": ["Bite the bullet", "Break the ice", "Hit the books", "Get the ball rolling"],
        "options_hi": ["कठिन काम करना", "बातचीत शुरू करना", "पढ़ाई शुरू करना", "काम की शुरुआत करना"],
        "answer_en": "Get the ball rolling",
        "answer_hi": "काम की शुरुआत करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "One word substitution: A person who writes poems",
        "question_hi": "एक शब्द में: जो व्यक्ति कविताएँ लिखता है",
        "options_en": ["Novelist", "Painter", "Poet", "Editor"],
        "options_hi": ["उपन्यासकार", "चित्रकार", "कवि", "संपादक"],
        "answer_en": "Poet",
        "answer_hi": "कवि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which sentence contains a common grammatical error?",
        "question_hi": "इनमें से किस वाक्य में सामान्य व्याकरणीय गलती है?",
        "options_en": [
            "She did not went to school.",
            "He plays football every day.",
            "I am happy.",
            "They are waiting for us."
        ],
        "options_hi": [
            "वह स्कूल नहीं गई।",
            "वह रोज फुटबॉल खेलता है।",
            "मैं खुश हूं।",
            "वे हमारा इंतज़ार कर रहे हैं।"
        ],
        "answer_en": "She did not went to school.",
        "answer_hi": "वह स्कूल नहीं गई।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which proverb means 'Don’t waste time'?",
        "question_hi": "कौन सी कहावत 'समय बर्बाद मत करो' का अर्थ देती है?",
        "options_en": [
            "Time and tide wait for none.",
            "Look before you leap.",
            "All that glitters is not gold.",
            "A stitch in time saves nine."
        ],
        "options_hi": [
            "समय और ज्वार किसी के लिए नहीं रुकते।",
            "कूदने से पहले सोचें।",
            "जो चमकता है वह सोना नहीं होता।",
            "समय रहते सुधार बेहतर होता है।"
        ],
        "answer_en": "Time and tide wait for none.",
        "answer_hi": "समय और ज्वार किसी के लिए नहीं रुकते।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the purpose of a notice?",
        "question_hi": "नोटिस (सूचना) का उद्देश्य क्या होता है?",
        "options_en": [
            "To advertise a product",
            "To narrate a story",
            "To inform about an event",
            "To apply for leave"
        ],
        "options_hi": [
            "उत्पाद का विज्ञापन करना",
            "कहानी सुनाना",
            "किसी घटना के बारे में सूचित करना",
            "छुट्टी के लिए आवेदन करना"
        ],
        "answer_en": "To inform about an event",
        "answer_hi": "किसी घटना के बारे में सूचित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Note-making is used to:",
        "question_hi": "नोट बनाना किसके लिए किया जाता है?",
        "options_en": [
            "Make speeches",
            "Summarize important points",
            "Write letters",
            "Tell stories"
        ],
        "options_hi": [
            "भाषण देने के लिए",
            "महत्वपूर्ण बिंदुओं को संक्षेप में लिखने के लिए",
            "पत्र लिखने के लिए",
            "कहानियाँ सुनाने के लिए"
        ],
        "answer_en": "Summarize important points",
        "answer_hi": "महत्वपूर्ण बिंदुओं को संक्षेप में लिखने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which is the correct format for a message?",
        "question_hi": "संदेश लिखने का सही प्रारूप कौन सा है?",
        "options_en": [
            "Date, Time, Name, Message",
            "Heading, Body, Closing",
            "Greeting, Address, Signature",
            "Title, Story, Moral"
        ],
        "options_hi": [
            "तिथि, समय, नाम, संदेश",
            "शीर्षक, मुख्य भाग, समापन",
            "अभिवादन, पता, हस्ताक्षर",
            "शीर्षक, कहानी, नैतिक शिक्षा"
        ],
        "answer_en": "Date, Time, Name, Message",
        "answer_hi": "तिथि, समय, नाम, संदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What type of letter is used to apply for leave?",
        "question_hi": "छुट्टी के लिए किस प्रकार का पत्र लिखा जाता है?",
        "options_en": [
            "Personal letter",
            "Business letter",
            "Official letter",
            "Informal letter"
        ],
        "options_hi": [
            "व्यक्तिगत पत्र",
            "व्यवसायिक पत्र",
            "औपचारिक पत्र",
            "अनौपचारिक पत्र"
        ],
        "answer_en": "Official letter",
        "answer_hi": "औपचारिक पत्र",
        "attempted": false,
        "selected": ""
    }
















    // Add more questions here...
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
    localStorage.setItem("results",stringify(results));

    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {

        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
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
        