
const questions = [

    {
        "num": 1,
        "question_en": "What is the meaning of 'Saroj' in 'Shri Guru Charan Saroj Raj'?",
        "question_hi": "‘श्री गुरु चरन सरोज रज’ में ‘सरोज’ शब्द का अर्थ क्या है?",
        "options_en": [
            "Rose",
            "Lotus",
            "Lake",
            "Dust"
        ],
        "options_hi": [
            "गुलाब",
            "कमल",
            "सरोवर",
            "धूल"
        ],
        "answer_en": "Lotus",
        "answer_hi": "कमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What are the four fruits of singing the pure glory of Lord Rama?",
        "question_hi": "राम जी के निर्मल यश का गान करने से कौन-से चार फल मिलते हैं?",
        "options_en": [
            "Dharma, Artha, Kama, Moksha",
            "Happiness, Wealth, Honor, Fame",
            "Knowledge, Renunciation, Power, Equanimity",
            "Love, Devotion, Faith, Trust"
        ],
        "options_hi": [
            "धर्म, अर्थ, काम, मोक्ष",
            "सुख, समृद्धि, मान, यश",
            "ज्ञान, वैराग्य, शक्ति, समता",
            "प्रेम, भक्ति, श्रद्धा, विश्वास"
        ],
        "answer_en": "Dharma, Artha, Kama, Moksha",
        "answer_hi": "धर्म, अर्थ, काम, मोक्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What does the word 'Mukur' mean in 'Nij Man Mukuru Sudhari'?",
        "question_hi": "‘निज मन मुकुरु सुधारि’ में ‘मुकुरु’ शब्द का क्या अर्थ है?",
        "options_en": [
            "Season",
            "To Refuse",
            "Mirror",
            "To Improve"
        ],
        "options_hi": [
            "मौसम",
            "मुकरना",
            "शीशा",
            "सुधरना"
        ],
        "answer_en": "Mirror",
        "answer_hi": "शीशा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "How can one cross the ocean of worldly existence according to Tulsidas?",
        "question_hi": "तुलसीदास के अनुसार भवसागर को कैसे पार किया जा सकता है?",
        "options_en": [
            "By chanting the name of Lord Rama",
            "By associating with saints",
            "Through purity of heart",
            "All of the above"
        ],
        "options_hi": [
            "श्रीराम जी का नाम जपकर",
            "संतों की संगति करके",
            "हृदय की पवित्रता से",
            "उपरोक्त सभी"
        ],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What do saints discriminate like in the context of good and bad?",
        "question_hi": "संत किसकी भाँति नीर-क्षीर विवेक करते हैं?",
        "options_en": [
            "Cuckoo",
            "Swan",
            "Bird",
            "Falcon"
        ],
        "options_hi": [
            "कोयल",
            "हंस",
            "चिड़िया",
            "बाज़"
        ],
        "answer_en": "Swan",
        "answer_hi": "हंस",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 6,
        "question_en": "What does Meera Bai compare her love for Krishna to?",
        "question_hi": "मीरा बाई अपने कृष्ण प्रेम की तुलना किससे करती हैं?",
        "options_en": ["A river's flow", "A mother's love", "A fish's need for water", "A flower's fragrance"],
        "options_hi": ["नदी के प्रवाह", "माँ के प्रेम", "मछली की जल-आवश्यकता", "फूल की खुशबू"],
        "answer_en": "A fish's need for water",
        "answer_hi": "मछली की जल-आवश्यकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "How does Meera Bai express her separation from Krishna?",
        "question_hi": "मीरा बाई श्रीकृष्ण से वियोग को कैसे व्यक्त करती हैं?",
        "options_en": ["Through anger", "Through sarcasm", "Through tears and longing", "Through silence"],
        "options_hi": ["क्रोध के माध्यम से", "व्यंग्य के माध्यम से", "आँसुओं और तड़प के माध्यम से", "मौन के माध्यम से"],
        "answer_en": "Through tears and longing",
        "answer_hi": "आँसुओं और तड़प के माध्यम से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which element in Meera's poems shows her rebellion against societal norms?",
        "question_hi": "मीरा की कविताओं में कौन-सा तत्व सामाजिक नियमों के विरुद्ध उनके विद्रोह को दर्शाता है?",
        "options_en": ["Wearing royal clothes", "Leaving her palace", "Singing bhajans in streets", "Obeying her husband"],
        "options_hi": ["राजसी वस्त्र पहनना", "महल छोड़ना", "सड़कों पर भजन गाना", "पति की आज्ञा का पालन करना"],
        "answer_en": "Singing bhajans in streets",
        "answer_hi": "सड़कों पर भजन गाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What spiritual concept is deeply reflected in Meera Bai’s poetry?",
        "question_hi": "मीरा बाई की कविता में कौन-सी आध्यात्मिक अवधारणा गहराई से परिलक्षित होती है?",
        "options_en": ["Karma Yoga", "Bhakti Yoga", "Raja Yoga", "Jnana Yoga"],
        "options_hi": ["कर्म योग", "भक्ति योग", "राज योग", "ज्ञान योग"],
        "answer_en": "Bhakti Yoga",
        "answer_hi": "भक्ति योग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which poetic device is frequently used in Meera Bai’s padawali?",
        "question_hi": "मीरा बाई की पदावली में कौन-से काव्य अलंकार का प्रयोग बार-बार होता है?",
        "options_en": ["Simile", "Metaphor", "Alliteration", "Personification"],
        "options_hi": ["उपमा", "रूपक", "अनुप्रास", "मानवीकरण"],
        "answer_en": "Simile",
        "answer_hi": "उपमा",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 11,
        "question_en": "What is emphasized in the doha 'रहिमन पानी राखिए, बिन पानी सब सून'?",
        "question_hi": "‘रहिमन पानी राखिए, बिन पानी सब सून’ दोहे में किस बात पर ज़ोर दिया गया है?",
        "options_en": ["Importance of water", "Importance of wealth", "Importance of respect and humility", "Importance of food"],
        "options_hi": ["जल का महत्व", "धन का महत्व", "सम्मान और विनम्रता का महत्व", "भोजन का महत्व"],
        "answer_en": "Importance of respect and humility",
        "answer_hi": "सम्मान और विनम्रता का महत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "According to Rahim, what happens when the thread of love is broken?",
        "question_hi": "रहीम के अनुसार प्रेम का धागा टूटने पर क्या होता है?",
        "options_en": ["It gets stronger", "It breaks forever", "It joins with a knot", "It becomes colorful"],
        "options_hi": ["यह और मजबूत हो जाता है", "यह सदा के लिए टूट जाता है", "यह गाँठ लगकर जुड़ता है", "यह रंगीन हो जाता है"],
        "answer_en": "It joins with a knot",
        "answer_hi": "यह गाँठ लगकर जुड़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "In the doha with chandan and snake, what is being conveyed?",
        "question_hi": "चंदन और साँप वाले दोहे में क्या संदेश दिया गया है?",
        "options_en": ["Snakes love sandalwood", "Sandalwood is poisonous", "Good nature remains unaffected by bad company", "Snakes live in good places"],
        "options_hi": ["साँपों को चंदन पसंद होता है", "चंदन विषैला होता है", "अच्छा स्वभाव बुरी संगति से नहीं बदलता", "साँप अच्छे स्थानों में रहते हैं"],
        "answer_en": "Good nature remains unaffected by bad company",
        "answer_hi": "अच्छा स्वभाव बुरी संगति से नहीं बदलता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Why does Rahim suggest keeping sorrow in one’s heart?",
        "question_hi": "रहीम दुख को मन में ही रखने की सलाह क्यों देते हैं?",
        "options_en": ["Because sharing is a sin", "Because others will laugh and not help", "Because it disappears with time", "Because it makes you strong"],
        "options_hi": ["क्योंकि साझा करना पाप है", "क्योंकि लोग हँसेंगे और मदद नहीं करेंगे", "क्योंकि समय के साथ गायब हो जाता है", "क्योंकि यह आपको मजबूत बनाता है"],
        "answer_en": "Because others will laugh and not help",
        "answer_hi": "क्योंकि लोग हँसेंगे और मदद नहीं करेंगे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "In 'रहिमन बड़ेन को न मिलै...', what does Rahim compare the Sun and Moon to?",
        "question_hi": "‘रहिमन बड़ेन को न मिलै...’ दोहे में रहीम सूर्य और चंद्रमा की तुलना किससे करते हैं?",
        "options_en": ["Pride and humility", "Light and darkness", "True greatness and superficial praise", "Day and night"],
        "options_hi": ["घमंड और विनम्रता", "प्रकाश और अंधकार", "सच्ची महानता और दिखावटी प्रशंसा", "दिन और रात"],
        "answer_en": "True greatness and superficial praise",
        "answer_hi": "सच्ची महानता और दिखावटी प्रशंसा",
        "attempted": false,
        "selected": ""
    },
    
        {
            "num": 16,
            "question_en": "Who is the speaker in the poem 'हम राज्य के लिए मरते हैं'?",
            "question_hi": "'हम राज्य के लिए मरते हैं' कविता में वक्ता कौन है?",
            "options_en": ["Lord Rama", "Bharat", "Lakshman", "Maithili Sharan Gupt"],
            "options_hi": ["भगवान राम", "भरत", "लक्ष्मण", "मैथिली शरण गुप्त"],
            "answer_en": "Lakshman",
            "answer_hi": "लक्ष्मण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "What does the poet emphasize through the poem?",
            "question_hi": "कवि इस कविता के माध्यम से किस बात पर बल देते हैं?",
            "options_en": ["Desire for war", "Love for power", "Sacrifice for nation", "Hatred for enemies"],
            "options_hi": ["युद्ध की इच्छा", "सत्ता का प्रेम", "राष्ट्र के लिए बलिदान", "शत्रुओं से घृणा"],
            "answer_en": "Sacrifice for nation",
            "answer_hi": "राष्ट्र के लिए बलिदान",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "What kind of people does the speaker refer to as brave?",
            "question_hi": "वक्ता किन लोगों को वीर कहते हैं?",
            "options_en": ["Those who enjoy power", "Those who die for love", "Those who die for duty", "Those who live in exile"],
            "options_hi": ["जो सत्ता का आनंद लेते हैं", "जो प्रेम के लिए मरते हैं", "जो कर्तव्य के लिए मरते हैं", "जो वनवास में रहते हैं"],
            "answer_en": "Those who die for duty",
            "answer_hi": "जो कर्तव्य के लिए मरते हैं",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "Which value is **not** promoted in the poem?",
            "question_hi": "कविता में निम्न में से कौन-सी भावना **प्रोत्साहित नहीं** की गई है?",
            "options_en": ["Duty", "Sacrifice", "Cowardice", "Patriotism"],
            "options_hi": ["कर्तव्य", "बलिदान", "कायरता", "देशभक्ति"],
            "answer_en": "Cowardice",
            "answer_hi": "कायरता",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "What is the tone of the poem 'हम राज्य के लिए मरते हैं'?",
            "question_hi": "'हम राज्य के लिए मरते हैं' कविता की भाषा-शैली कैसी है?",
            "options_en": ["Romantic", "Inspirational", "Comedic", "Fearful"],
            "options_hi": ["प्रेममयी", "प्रेरणादायक", "हास्यपूर्ण", "डरावनी"],
            "answer_en": "Inspirational",
            "answer_hi": "प्रेरणादायक",
            "attempted": false,
            "selected": ""
        },

        {
            "num": 21,
            "question_en": "What does 'Gat Khag' refer to in the poem?",
            "question_hi": "कविता 'गत्यात्मक खग' में 'खग' का क्या अर्थ है?",
            "options_en": ["Tree", "Wind", "Bird", "Cloud"],
            "options_hi": ["वृक्ष", "पवन", "पक्षी", "बादल"],
            "answer_en": "Bird",
            "answer_hi": "पक्षी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 22,
            "question_en": "Which quality of the bird is highlighted in the poem?",
            "question_hi": "कविता में पक्षी की कौन-सी विशेषता को प्रमुखता दी गई है?",
            "options_en": ["Its song", "Its speed and movement", "Its sleep", "Its nest"],
            "options_hi": ["उसका गान", "उसकी गति और चाल", "उसकी नींद", "उसका घोंसला"],
            "answer_en": "Its speed and movement",
            "answer_hi": "उसकी गति और चाल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 23,
            "question_en": "What natural element is **not** directly mentioned in the poem?",
            "question_hi": "निम्न में से कौन-सा प्राकृतिक तत्व कविता में **सीधे** नहीं आया है?",
            "options_en": ["Sky", "Wind", "Stars", "Bird"],
            "options_hi": ["आकाश", "पवन", "तारे", "पक्षी"],
            "answer_en": "Stars",
            "answer_hi": "तारे",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 24,
            "question_en": "What theme is central in 'Gat Khag'?",
            "question_hi": "'गत्यात्मक खग' कविता का मुख्य विषय क्या है?",
            "options_en": ["Struggle of life", "Freedom and motion in nature", "Love and separation", "City life"],
            "options_hi": ["जीवन का संघर्ष", "प्रकृति में गति और स्वतंत्रता", "प्रेम और वियोग", "शहरी जीवन"],
            "answer_en": "Freedom and motion in nature",
            "answer_hi": "प्रकृति में गति और स्वतंत्रता",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 25,
            "question_en": "What is the tone of the poem 'Gat Khag'?",
            "question_hi": "'गत्यात्मक खग' कविता की भाषा-शैली कैसी है?",
            "options_en": ["Fearful", "Energetic and imaginative", "Sad and slow", "Religious"],
            "options_hi": ["भयभीत", "ऊर्जावान और कल्पनाशील", "दुखद और धीमी", "धार्मिक"],
            "answer_en": "Energetic and imaginative",
            "answer_hi": "ऊर्जावान और कल्पनाशील",
            "attempted": false,
            "selected": ""
        },

        {
            "num": 26,
            "question_en": "What does 'Jad ki Muskaan' refer to?",
            "question_hi": "'जड़ की मुस्कान' से कवि का क्या तात्पर्य है?",
            "options_en": ["Artificial smile", "The smile of nature", "The inner peace of the silent", "The smile of a child"],
            "options_hi": ["कृत्रिम मुस्कान", "प्रकृति की मुस्कान", "मौन व्यक्तियों की आंतरिक शांति", "बच्चे की मुस्कान"],
            "answer_en": "The inner peace of the silent",
            "answer_hi": "मौन व्यक्तियों की आंतरिक शांति",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 27,
            "question_en": "What does the poem mainly focus on?",
            "question_hi": "कविता का मुख्य फोकस किस पर है?",
            "options_en": ["Beauty of flowers", "External appearance", "Inner spiritual strength", "Laughter of people"],
            "options_hi": ["फूलों की सुंदरता", "बाहरी रूप", "आंतरिक आध्यात्मिक शक्ति", "लोगों की हँसी"],
            "answer_en": "Inner spiritual strength",
            "answer_hi": "आंतरिक आध्यात्मिक शक्ति",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 28,
            "question_en": "What does 'Jad' symbolically represent in the poem?",
            "question_hi": "कविता में 'जड़' प्रतीक रूप में किसे दर्शाता है?",
            "options_en": ["Living beings", "Emotionless things", "Still yet wise personalities", "Animals"],
            "options_hi": ["जीवित प्राणी", "निर्जीव वस्तुएँ", "स्थिर लेकिन ज्ञानी व्यक्ति", "पशु"],
            "answer_en": "Still yet wise personalities",
            "answer_hi": "स्थिर लेकिन ज्ञानी व्यक्ति",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 29,
            "question_en": "Which emotion is NOT shown in the poem?",
            "question_hi": "कविता में निम्न में से कौन-सी भावना नहीं दर्शाई गई है?",
            "options_en": ["Peace", "Silence", "Anger", "Wisdom"],
            "options_hi": ["शांति", "मौन", "क्रोध", "बुद्धि"],
            "answer_en": "Anger",
            "answer_hi": "क्रोध",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 30,
            "question_en": "Which poetic device is most used in the poem?",
            "question_hi": "कविता में सबसे अधिक प्रयोग की गई अलंकार कौन-सी है?",
            "options_en": ["Simile", "Metaphor", "Personification", "Alliteration"],
            "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अनुप्रास"],
            "answer_en": "Personification",
            "answer_hi": "मानवीकरण",
            "attempted": false,
            "selected": ""
        },

        {
            "num": 31,
            "question_en": "What is the central theme of the poem 'Mamta'?",
            "question_hi": "'ममता' कविता का केंद्रीय भाव क्या है?",
            "options_en": ["Patriotism", "Mother's love", "Friendship", "War"],
            "options_hi": ["देशभक्ति", "माँ का प्यार", "मित्रता", "युद्ध"],
            "answer_en": "Mother's love",
            "answer_hi": "माँ का प्यार",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 32,
            "question_en": "How is a mother’s love described in the poem?",
            "question_hi": "कविता में माँ के प्यार को कैसे वर्णित किया गया है?",
            "options_en": ["Strict and harsh", "Calm and nurturing", "Distant and formal", "Unkind and fearful"],
            "options_hi": ["कठोर और सख्त", "शांत और पोषण देने वाला", "औपचारिक और दूर", "निर्दयी और डरावना"],
            "answer_en": "Calm and nurturing",
            "answer_hi": "शांत और पोषण देने वाला",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 33,
            "question_en": "Which natural element is **used as a symbol** of motherly love?",
            "question_hi": "माँ के प्यार के प्रतीक रूप में किस प्राकृतिक तत्व का प्रयोग हुआ है?",
            "options_en": ["Thunder", "Sunlight", "Moonlight", "Storm"],
            "options_hi": ["गर्जना", "सूरज की रोशनी", "चाँदनी", "आंधी"],
            "answer_en": "Moonlight",
            "answer_hi": "चाँदनी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 34,
            "question_en": "What kind of emotion is **not** found in the poem?",
            "question_hi": "कविता में निम्न में से कौन-सी भावना **नहीं** पाई जाती है?",
            "options_en": ["Care", "Selflessness", "Anger", "Affection"],
            "options_hi": ["देखभाल", "निःस्वार्थता", "क्रोध", "स्नेह"],
            "answer_en": "Anger",
            "answer_hi": "क्रोध",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 35,
            "question_en": "What poetic device is mainly used in 'Mamta'?",
            "question_hi": "'ममता' कविता में मुख्यतः कौन-सा अलंकार प्रयुक्त हुआ है?",
            "options_en": ["Alliteration", "Personification", "Metaphor", "Pun"],
            "options_hi": ["अनुप्रास", "मानवीकरण", "रूपक", "यमक"],
            "answer_en": "Metaphor",
            "answer_hi": "रूपक",
            "attempted": false,
            "selected": ""
        },

        {
            "num": 36,
            "question_en": "Who is the central character in 'Ashikshit ka Hriday'?",
            "question_hi": "'अशिक्षित का हृदय' कहानी का मुख्य पात्र कौन है?",
            "options_en": ["A rich businessman", "A poor uneducated man", "A teacher", "A doctor"],
            "options_hi": ["एक अमीर व्यापारी", "एक गरीब अशिक्षित व्यक्ति", "एक शिक्षक", "एक डॉक्टर"],
            "answer_en": "A poor uneducated man",
            "answer_hi": "एक गरीब अशिक्षित व्यक्ति",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 37,
            "question_en": "What is the main message of the story?",
            "question_hi": "कहानी का मुख्य संदेश क्या है?",
            "options_en": ["Education is unnecessary", "Uneducated people are weak", "Humanity is more important than education", "Money brings respect"],
            "options_hi": ["शिक्षा आवश्यक नहीं है", "अशिक्षित लोग कमजोर होते हैं", "मानवता शिक्षा से अधिक महत्वपूर्ण है", "पैसा ही सम्मान दिलाता है"],
            "answer_en": "Humanity is more important than education",
            "answer_hi": "मानवता शिक्षा से अधिक महत्वपूर्ण है",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 38,
            "question_en": "How does the uneducated man show his kindness?",
            "question_hi": "अशिक्षित व्यक्ति अपनी दयालुता कैसे दर्शाता है?",
            "options_en": ["By donating money", "By helping a sick man", "By feeding the poor", "By ignoring others"],
            "options_hi": ["पैसे दान करके", "बीमार व्यक्ति की मदद करके", "गरीबों को खाना देकर", "दूसरों की अनदेखी करके"],
            "answer_en": "By helping a sick man",
            "answer_hi": "बीमार व्यक्ति की मदद करके",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 39,
            "question_en": "Which quality is highlighted in the uneducated character?",
            "question_hi": "अशिक्षित पात्र में कौन-सी विशेषता प्रमुख रूप से दिखाई गई है?",
            "options_en": ["Selfishness", "Pride", "Compassion", "Laziness"],
            "options_hi": ["स्वार्थ", "घमंड", "करुणा", "आलस्य"],
            "answer_en": "Compassion",
            "answer_hi": "करुणा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 40,
            "question_en": "What does the story 'Ashikshit ka Hriday' teach us?",
            "question_hi": "'अशिक्षित का हृदय' कहानी हमें क्या सिखाती है?",
            "options_en": ["To judge people by their education", "To ignore poor people", "To value inner goodness", "To become rich"],
            "options_hi": ["लोगों को उनकी शिक्षा से आँकना", "गरीबों की उपेक्षा करना", "आंतरिक अच्छाई को महत्व देना", "अमीर बनना"],
            "answer_en": "To value inner goodness",
            "answer_hi": "आंतरिक अच्छाई को महत्व देना",
            "attempted": false,
            "selected": ""
        },

        {
            "num": 41,
            "question_en": "Who are the two main characters in the story 'Do Kalakar'?",
            "question_hi": "'दो कलाकार' कहानी के दो मुख्य पात्र कौन हैं?",
            "options_en": ["Mangal and Manglu", "Ram and Shyam", "Raju and Munna", "Bharat and Arjun"],
            "options_hi": ["मंगल और मंगू", "राम और श्याम", "राजू और मुन्ना", "भारत और अर्जुन"],
            "answer_en": "Mangal and Manglu",
            "answer_hi": "मंगल और मंगू",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 42,
            "question_en": "What is the profession of the two characters?",
            "question_hi": "दोनों पात्रों का पेशा क्या है?",
            "options_en": ["Singers", "Teachers", "Puppeteers", "Painters"],
            "options_hi": ["गायक", "शिक्षक", "कठपुतली कलाकार", "चित्रकार"],
            "answer_en": "Puppeteers",
            "answer_hi": "कठपुतली कलाकार",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 43,
            "question_en": "What emotion does the story mainly portray?",
            "question_hi": "कहानी में मुख्य रूप से कौन-सी भावना दिखाई गई है?",
            "options_en": ["Jealousy", "Greed", "Artistic struggle and simplicity", "Pride"],
            "options_hi": ["ईर्ष्या", "लोभ", "कलात्मक संघर्ष और सरलता", "अहंकार"],
            "answer_en": "Artistic struggle and simplicity",
            "answer_hi": "कलात्मक संघर्ष और सरलता",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 44,
            "question_en": "What challenge do the two artists face?",
            "question_hi": "दोनों कलाकारों को किस प्रकार की चुनौती का सामना करना पड़ता है?",
            "options_en": ["Lack of food", "Lack of education", "Neglect of traditional art", "Family problems"],
            "options_hi": ["भोजन की कमी", "शिक्षा की कमी", "परंपरागत कला की उपेक्षा", "पारिवारिक समस्याएँ"],
            "answer_en": "Neglect of traditional art",
            "answer_hi": "परंपरागत कला की उपेक्षा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 45,
            "question_en": "What is the tone of the story?",
            "question_hi": "कहानी की भाषा-शैली कैसी है?",
            "options_en": ["Tragic", "Satirical and emotional", "Religious", "Mystery-based"],
            "options_hi": ["दुखद", "व्यंग्यात्मक और भावनात्मक", "धार्मिक", "रहस्यात्मक"],
            "answer_en": "Satirical and emotional",
            "answer_hi": "व्यंग्यात्मक और भावनात्मक",
            "attempted": false,
            "selected": ""
        },

        {
            "num": 46,
            "question_en": "Who is the main character of the story 'Nurse Clara Prakash'?",
            "question_hi": "'नर्स क्लारा प्रकाश' कहानी की मुख्य पात्र कौन है?",
            "options_en": ["Mother Teresa", "Florence Nightingale", "Clara Barton", "Kiran Bedi"],
            "options_hi": ["मदर टेरेसा", "फ्लोरेंस नाइटिंगेल", "क्लारा बार्टन", "किरण बेदी"],
            "answer_en": "Clara Barton",
            "answer_hi": "क्लारा बार्टन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 47,
            "question_en": "What was Clara Barton known for?",
            "question_hi": "क्लारा बार्टन किस कार्य के लिए प्रसिद्ध थीं?",
            "options_en": ["Fighting in wars", "Establishing a hospital", "Serving wounded soldiers", "Becoming a police officer"],
            "options_hi": ["युद्ध में लड़ने के लिए", "अस्पताल स्थापित करने के लिए", "घायलों की सेवा करने के लिए", "पुलिस अधिकारी बनने के लिए"],
            "answer_en": "Serving wounded soldiers",
            "answer_hi": "घायलों की सेवा करने के लिए",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 48,
            "question_en": "Which organization did Clara Barton found?",
            "question_hi": "क्लारा बार्टन ने कौन-सी संस्था की स्थापना की थी?",
            "options_en": ["UNESCO", "World Health Organization", "American Red Cross", "Greenpeace"],
            "options_hi": ["यूनेस्को", "विश्व स्वास्थ्य संगठन", "अमेरिकन रेड क्रॉस", "ग्रीनपीस"],
            "answer_en": "American Red Cross",
            "answer_hi": "अमेरिकन रेड क्रॉस",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 49,
            "question_en": "What quality of Clara is most highlighted in the story?",
            "question_hi": "कहानी में क्लारा की कौन-सी विशेषता प्रमुख रूप से दिखाई गई है?",
            "options_en": ["Fear", "Anger", "Bravery and compassion", "Laziness"],
            "options_hi": ["डर", "गुस्सा", "साहस और करुणा", "आलस्य"],
            "answer_en": "Bravery and compassion",
            "answer_hi": "साहस और करुणा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 50,
            "question_en": "What is the message of the story 'Nurse Clara Prakash'?",
            "question_hi": "'नर्स क्लारा प्रकाश' कहानी का संदेश क्या है?",
            "options_en": ["Education is power", "Art is life", "Human service is the highest duty", "Revenge is justice"],
            "options_hi": ["शिक्षा ही शक्ति है", "कला ही जीवन है", "मानव सेवा ही सर्वोच्च कर्तव्य है", "बदला ही न्याय है"],
            "answer_en": "Human service is the highest duty",
            "answer_hi": "मानव सेवा ही सर्वोच्च कर्तव्य है",
            "attempted": false,
            "selected": ""
        },

        {
            "num": 51,
            "question_en": "What does the 'mother's room' symbolize in the story?",
            "question_hi": "'माँ का कमरा' कहानी में माँ का कमरा किसका प्रतीक है?",
            "options_en": ["A storage space", "A place of fear", "A symbol of love and memory", "A guest room"],
            "options_hi": ["एक भंडारण स्थान", "डर का स्थान", "प्रेम और स्मृति का प्रतीक", "अतिथि कक्ष"],
            "answer_en": "A symbol of love and memory",
            "answer_hi": "प्रेम और स्मृति का प्रतीक",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 52,
            "question_en": "How do the family members feel after the mother’s death?",
            "question_hi": "माँ की मृत्यु के बाद परिवार के सदस्य कैसा महसूस करते हैं?",
            "options_en": ["Free and relaxed", "Emotionally empty and lost", "Excited", "Angry"],
            "options_hi": ["स्वतंत्र और शांत", "भावनात्मक रूप से खाली और खोया हुआ", "उत्साहित", "क्रोधित"],
            "answer_en": "Emotionally empty and lost",
            "answer_hi": "भावनात्मक रूप से खाली और खोया हुआ",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 53,
            "question_en": "Which emotion is deeply connected with the mother’s room?",
            "question_hi": "माँ के कमरे से कौन-सी भावना गहराई से जुड़ी है?",
            "options_en": ["Jealousy", "Affection and respect", "Boredom", "Pride"],
            "options_hi": ["ईर्ष्या", "स्नेह और सम्मान", "उबाऊपन", "अहंकार"],
            "answer_en": "Affection and respect",
            "answer_hi": "स्नेह और सम्मान",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 54,
            "question_en": "What literary style is used in the story?",
            "question_hi": "इस कहानी में किस प्रकार की साहित्यिक शैली का प्रयोग हुआ है?",
            "options_en": ["Satirical", "Humorous", "Emotional and reflective", "Mystery"],
            "options_hi": ["व्यंग्यात्मक", "हास्यपूर्ण", "भावनात्मक और चिंतनशील", "रहस्यपूर्ण"],
            "answer_en": "Emotional and reflective",
            "answer_hi": "भावनात्मक और चिंतनशील",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 55,
            "question_en": "What does the story teach us about mothers?",
            "question_hi": "यह कहानी हमें माँ के बारे में क्या सिखाती है?",
            "options_en": [
                "They are strict and unemotional",
                "They only do housework",
                "Their love and presence are irreplaceable",
                "They should be ignored"
            ],
            "options_hi": [
                "वे सख्त और भावहीन होती हैं",
                "वे केवल घरेलू कार्य करती हैं",
                "उनका प्यार और उपस्थिति अपूरणीय होती है",
                "उन्हें अनदेखा करना चाहिए"
            ],
            "answer_en": "Their love and presence are irreplaceable",
            "answer_hi": "उनका प्यार और उपस्थिति अपूरणीय होती है",
            "attempted": false,
            "selected": ""
        },

        {
            "num": 56,
            "question_en": "Who is the central character in the story 'Ehsaas'?",
            "question_hi": "'एहसास' कहानी की मुख्य पात्र कौन है?",
            "options_en": ["An old woman", "Rekha, a visually impaired girl", "A nurse", "A school teacher"],
            "options_hi": ["एक वृद्ध महिला", "रेखा, एक दृष्टिहीन लड़की", "एक नर्स", "एक स्कूल शिक्षिका"],
            "answer_en": "Rekha, a visually impaired girl",
            "answer_hi": "रेखा, एक दृष्टिहीन लड़की",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 57,
            "question_en": "What is the main theme of the story?",
            "question_hi": "कहानी का मुख्य विषय क्या है?",
            "options_en": ["Romance", "Patriotism", "Empowerment and self-realization", "War"],
            "options_hi": ["प्रेमकथा", "देशभक्ति", "सशक्तिकरण और आत्मबोध", "युद्ध"],
            "answer_en": "Empowerment and self-realization",
            "answer_hi": "सशक्तिकरण और आत्मबोध",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 58,
            "question_en": "What kind of challenges does Rekha face?",
            "question_hi": "रेखा को किस प्रकार की चुनौतियों का सामना करना पड़ता है?",
            "options_en": ["Financial problems", "Blindness and societal neglect", "Language barrier", "Lack of interest in studies"],
            "options_hi": ["आर्थिक समस्याएँ", "नेत्रहीनता और सामाजिक उपेक्षा", "भाषा की बाधा", "पढ़ाई में रुचि की कमी"],
            "answer_en": "Blindness and societal neglect",
            "answer_hi": "नेत्रहीनता और सामाजिक उपेक्षा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 59,
            "question_en": "What does Rekha finally realize?",
            "question_hi": "अंत में रेखा को क्या एहसास होता है?",
            "options_en": ["She can never be independent", "People pity her", "She is capable and valuable", "She must hide her weakness"],
            "options_hi": ["वह कभी आत्मनिर्भर नहीं हो सकती", "लोग उसे दया की दृष्टि से देखते हैं", "वह सक्षम और मूल्यवान है", "उसे अपनी कमजोरी छुपानी चाहिए"],
            "answer_en": "She is capable and valuable",
            "answer_hi": "वह सक्षम और मूल्यवान है",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 60,
            "question_en": "What emotion does the story 'Ehsaas' mainly reflect?",
            "question_hi": "'एहसास' कहानी मुख्य रूप से किस भावना को दर्शाती है?",
            "options_en": ["Jealousy", "Sympathy", "Inner strength and hope", "Fear"],
            "options_hi": ["ईर्ष्या", "सहानुभूति", "आंतरिक शक्ति और आशा", "डर"],
            "answer_en": "Inner strength and hope",
            "answer_hi": "आंतरिक शक्ति और आशा",
            "attempted": false,
            "selected": ""
        },

        
            {
                "num": 61,
                "question_en": "Which quality is considered most essential for friendship in the essay 'Mitrata'?",
                "question_hi": "‘मित्रता’ निबंध में किस गुण को मित्रता के लिए सबसे ज़रूरी बताया गया है?",
                "options_en": ["Wealth", "Compassion", "Truthfulness", "Power"],
                "options_hi": ["धन", "दया", "सच्चाई", "शक्ति"],
                "answer_en": "Truthfulness",
                "answer_hi": "सच्चाई",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 62,
                "question_en": "In the essay 'Main aur Mera Desh', how does the author perceive their country?",
                "question_hi": "‘मैं और मेरा देश’ निबंध में लेखक अपने देश को क्या मानता है?",
                "options_en": ["Home", "Mother", "World", "Teacher"],
                "options_hi": ["घर", "माता", "दुनिया", "शिक्षक"],
                "answer_en": "Mother",
                "answer_hi": "माता",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 63,
                "question_en": "Which state is Dr. Rajendra Prasad associated with?",
                "question_hi": "डॉ. राजेन्द्र प्रसाद किस राज्य से संबंधित थे?",
                "options_en": ["Uttar Pradesh", "Bihar", "Punjab", "Gujarat"],
                "options_hi": ["उत्तर प्रदेश", "बिहार", "पंजाब", "गुजरात"],
                "answer_en": "Bihar",
                "answer_hi": "बिहार",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 64,
                "question_en": "Who gives the 'Taweez of Sadachar' to the author in the essay?",
                "question_hi": "‘सदाचार का तावीज़’ में लेखक को यह तावीज़ कौन देता है?",
                "options_en": ["Uncle", "Mother", "Father", "Friend"],
                "options_hi": ["चाचा", "माता", "पिता", "दोस्त"],
                "answer_en": "Father",
                "answer_hi": "पिता",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 65,
                "question_en": "In 'Thele ka Himalaya', who inspires the author?",
                "question_hi": "‘ठेले का हिमालय’ में लेखक किससे प्रेरित होता है?",
                "options_en": ["Himalayas", "Cart-puller", "Bus driver", "Writer friend"],
                "options_hi": ["हिमालय पर्वत", "ठेले वाला", "बस ड्राइवर", "लेखक मित्र"],
                "answer_en": "Cart-puller",
                "answer_hi": "ठेले वाला",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 66,
                "question_en": "What did Guru Nanak Dev Ji oppose?",
                "question_hi": "गुरु नानक देव जी ने किस बात का विरोध किया?",
                "options_en": ["Sports", "Studies", "Superstitions and hypocrisy", "Music"],
                "options_hi": ["खेल", "पढ़ाई", "अंधविश्वास और पाखंड", "संगीत"],
                "answer_en": "Superstitions and hypocrisy",
                "answer_hi": "अंधविश्वास और पाखंड",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 67,
                "question_en": "How is a true friend identified?",
                "question_hi": "सच्चे मित्र की पहचान कैसे होती है?",
                "options_en": ["By supporting in sorrow", "By giving gifts", "By helping in studies", "By taking on trips"],
                "options_hi": ["दुख में साथ देने से", "उपहार देने से", "पढ़ाई में मदद से", "सैर कराने से"],
                "answer_en": "By supporting in sorrow",
                "answer_hi": "दुख में साथ देने से",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 68,
                "question_en": "In 'Main aur Mera Desh', how does the author feel connected to their country?",
                "question_hi": "‘मैं और मेरा देश’ में लेखक अपने देश से कैसा संबंध महसूस करता है?",
                "options_en": ["Distance", "Affection and belonging", "Anger", "Fear"],
                "options_hi": ["दूरी", "ममता और अपनापन", "गुस्सा", "डर"],
                "answer_en": "Affection and belonging",
                "answer_hi": "ममता और अपनापन",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 69,
                "question_en": "Which title was given to Rajendra Babu?",
                "question_hi": "राजेन्द्र बाबू को कौन-सी उपाधि दी गई थी?",
                "options_en": ["Bharat Ratna", "Padma Shri", "Gyanpeeth", "Nobel"],
                "options_hi": ["भारत रत्न", "पद्मश्री", "ज्ञानपीठ", "नोबेल"],
                "answer_en": "Bharat Ratna",
                "answer_hi": "भारत रत्न",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 70,
                "question_en": "What is the main purpose of 'Sadachar ka Taweez'?",
                "question_hi": "‘सदाचार का तावीज़’ का मुख्य उद्देश्य क्या है?",
                "options_en": ["To show miracles", "To earn money", "To teach morality", "To describe travel"],
                "options_hi": ["चमत्कार दिखाना", "धन कमाना", "सदाचार की शिक्षा देना", "यात्रा का वर्णन"],
                "answer_en": "To teach morality",
                "answer_hi": "सदाचार की शिक्षा देना",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 71,
                "question_en": "In 'Thele ka Himalaya', what does the cart-puller's struggle symbolize?",
                "question_hi": "‘ठेले का हिमालय’ में ठेले वाले का संघर्ष किसका प्रतीक है?",
                "options_en": ["Comfort", "Human labor", "Student life", "Military life"],
                "options_hi": ["आराम का", "मानव श्रम का", "छात्र जीवन का", "सैन्य जीवन का"],
                "answer_en": "Human labor",
                "answer_hi": "मानव श्रम का",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 72,
                "question_en": "What kind of life did Guru Nanak Dev Ji inspire to live?",
                "question_hi": "गुरु नानक देव जी ने किस प्रकार का जीवन जीने की प्रेरणा दी?",
                "options_en": ["Royal life", "Life of sacrifice and service", "Wealth accumulation", "Solitude"],
                "options_hi": ["राजसी जीवन", "त्यागमय और सेवा का जीवन", "धन संचय", "एकांतवास"],
                "answer_en": "Life of sacrifice and service",
                "answer_hi": "त्यागमय और सेवा का जीवन",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 73,
                "question_en": "Who is the main character in the one-act play 'Sookhi Daali'?",
                "question_hi": "‘सूखी डाली’ एकांकी में मुख्य पात्र कौन है?",
                "options_en": ["Shyam", "Raju", "Grandmother", "Gulabo"],
                "options_hi": ["श्याम", "राजू", "दादी", "गुलाबो"],
                "answer_en": "Grandmother",
                "answer_hi": "दादी",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 74,
                "question_en": "What is the symbolic meaning of 'Sookhi Daali'?",
                "question_hi": "‘सूखी डाली’ का प्रतीकात्मक अर्थ क्या है?",
                "options_en": ["Tree", "End of life", "Old age and neglect", "River"],
                "options_hi": ["पेड़", "जीवन का अंत", "बुढ़ापा और उपेक्षा", "नदी"],
                "answer_en": "Old age and neglect",
                "answer_hi": "बुढ़ापा और उपेक्षा",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 75,
                "question_en": "In 'Desh ke Dushman', who are referred to as enemies?",
                "question_hi": "‘देश के दुश्मन’ एकांकी में दुश्मनों से तात्पर्य किससे है?",
                "options_en": ["Foreigners", "Terrorists", "Corrupt people", "Those harming the nation"],
                "options_hi": ["विदेशी लोग", "आतंकी", "भ्रष्ट लोग", "देश को नुकसान पहुँचाने वाले लोग"],
                "answer_en": "Those harming the nation",
                "answer_hi": "देश को नुकसान पहुँचाने वाले लोग",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 76,
                "question_en": "How is the grandmother's condition depicted in 'Sookhi Daali'?",
                "question_hi": "सूखी डाली में दादी की हालत कैसी दिखाई गई है?",
                "options_en": ["Healthy", "Quick in speech", "Helpless and neglected", "Wealthy"],
                "options_hi": ["स्वस्थ", "बोलचाल में तेज़", "लाचार और उपेक्षित", "धनवान"],
                "answer_en": "Helpless and neglected",
                "answer_hi": "लाचार और उपेक्षित",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 77,
                "question_en": "What emotion does 'Desh ke Dushman' aim to awaken?",
                "question_hi": "देश के दुश्मन में लेखक ने किस भाव को जगाने का प्रयास किया है?",
                "options_en": ["Anger", "Love", "Patriotism", "Hatred"],
                "options_hi": ["क्रोध", "प्रेम", "देशभक्ति", "घृणा"],
                "answer_en": "Patriotism",
                "answer_hi": "देशभक्ति",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 78,
                "question_en": "What is the main message of 'Sookhi Daali'?",
                "question_hi": "सूखी डाली एकांकी का मुख्य संदेश क्या है?",
                "options_en": ["Importance of childhood", "Love for nature", "Care for elders", "Cleanliness"],
                "options_hi": ["बचपन का महत्व", "प्रकृति प्रेम", "बुजुर्गों की देखभाल", "स्वच्छता"],
                "answer_en": "Care for elders",
                "answer_hi": "बुजुर्गों की देखभाल",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 79,
                "question_en": "In 'Desh ke Dushman', whom does the author warn against?",
                "question_hi": "देश के दुश्मन में लेखक किन दुश्मनों से सावधान करता है?",
                "options_en": ["External enemies", "Enemies within", "Politicians", "Officials"],
                "options_hi": ["सीमा पार के दुश्मन", "भीतर के शत्रु", "राजनेता", "अफसर"],
                "answer_en": "Enemies within",
                "answer_hi": "भीतर के शत्रु",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 80,
                "question_en": "In 'Sookhi Daali', what does the grandmother compare herself to?",
                "question_hi": "‘सूखी डाली’ में दादी किस चीज़ से तुलना करती है?",
                "options_en": ["Computer", "Dry tree", "Paper", "Dreams"],
                "options_hi": ["कंप्यूटर", "सूखे पेड़ से", "कागज से", "सपनों से"],
                "answer_en": "Dry tree",
                "answer_hi": "सूखे पेड़ से",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 81,
                "question_en": "What message does 'Desh ke Dushman' convey?",
                "question_hi": "देश के दुश्मन एकांकी का लेखक क्या संदेश देता है?",
                "options_en": ["Spread hatred", "Leave the country", "Love the nation", "Join external forces"],
                "options_hi": ["घृणा फैलाओ", "देश छोड़ दो", "देश से प्रेम करो", "बाहरी ताकतों से मिलो"],
                "answer_en": "Love the nation",
                "answer_hi": "देश से प्रेम करो",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 82,
                "question_en": "Which emotion is prominent in 'Sookhi Daali'?",
                "question_hi": "सूखी डाली में कौन-सा भाव प्रमुख रूप से उभरता है?",
                "options_en": ["Humor", "Compassion", "Thrill", "Anger"],
                "options_hi": ["हास्य", "करुणा", "रोमांच", "रोष"],
                "answer_en": "Compassion",
                "answer_hi": "करुणा",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 83,
                "question_en": "What is the antonym of 'Sukh' (Happiness)?",
                "question_hi": "‘सुख’ का विलोम शब्द क्या है?",
                "options_en": ["Joy", "Sorrow", "Pleased", "Peace"],
                "options_hi": ["खुशी", "दुख", "प्रसन्न", "शांति"],
                "answer_en": "Sorrow",
                "answer_hi": "दुख",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 84,
                "question_en": "What societal behavior towards elders is shown in 'Sookhi Daali'?",
                "question_hi": "‘सूखी डाली’ का लेखक बुजुर्गों के प्रति समाज के किस व्यवहार को दिखाता है?",
                "options_en": ["Respect", "Neglect", "Honor", "Sympathy"],
                "options_hi": ["सम्मान", "उपेक्षा", "आदर", "सहानुभूति"],
                "answer_en": "Neglect",
                "answer_hi": "उपेक्षा",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 85,
                "question_en": "What does 'Desh ke Dushman' inspire?",
                "question_hi": "देश के दुश्मन एकांकी हमें किससे प्रेरित करता है?",
                "options_en": ["Selfishness", "Patriotism", "Defeat", "Luxury"],
                "options_hi": ["स्वार्थ", "देशभक्ति", "पराजय", "विलास"],
                "answer_en": "Patriotism",
                "answer_hi": "देशभक्ति",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 86,
                "question_en": "Which relationship is sensitively portrayed in 'Sookhi Daali'?",
                "question_hi": "‘सूखी डाली’ में किस रिश्ते को संवेदनशील रूप में दर्शाया गया है?",
                "options_en": ["Friendship", "Grandmother-grandson", "Siblings", "Mother-son"],
                "options_hi": ["मित्रता", "दादी-पोते", "भाई-बहन", "माँ-बेटा"],
                "answer_en": "Grandmother-grandson",
                "answer_hi": "दादी-पोते",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 87,
                "question_en": "Who is the author of 'Desh ke Dushman'?",
                "question_hi": "देश के दुश्मन में लेखक कौन है?",
                "options_en": ["Ramanand", "Anonymous", "Subhash Chandra", "Balakrishna Rao"],
                "options_hi": ["रामानंद", "अज्ञात", "सुभाष चंद्र", "बालकृष्ण राव"],
                "answer_en": "Balakrishna Rao",
                "answer_hi": "बालकृष्ण राव",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 88,
                "question_en": "What was the grandmother's emotion in 'Sookhi Daali'?",
                "question_hi": "सूखी डाली एकांकी में दादी की भावना क्या थी?",
                "options_en": ["Hatred", "Love", "Loneliness", "Fun"],
                "options_hi": ["घृणा", "प्यार", "अकेलापन", "मस्ती"],
                "answer_en": "Loneliness",
                "answer_hi": "अकेलापन",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 89,
                "question_en": "How are corrupt people described in 'Desh ke Dushman'?",
                "question_hi": "देश के दुश्मन में भ्रष्ट लोगों को क्या कहा गया है?",
                "options_en": ["Patriots", "Protectors", "Enemies of the nation", "Gentlemen"],
                "options_hi": ["देशभक्त", "रक्षक", "देश के दुश्मन", "सज्जन"],
                "answer_en": "Enemies of the nation",
                "answer_hi": "देश के दुश्मन",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 90,
                "question_en": "How did other family members treat the grandmother in 'Sookhi Daali'?",
                "question_hi": "सूखी डाली में परिवार के अन्य सदस्य दादी के प्रति कैसे थे?",
                "options_en": ["Affectionate", "Careless", "Loving", "Respectful"],
                "options_hi": ["स्नेही", "लापरवाह", "प्रेमपूर्ण", "सम्मानित"],
                "answer_en": "Careless",
                "answer_hi": "लापरवाह",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 91,
                "question_en": "What does the author of 'Desh ke Dushman' urge us to do?",
                "question_hi": "देश के दुश्मन में लेखक हमें क्या करने को कहता है?",
                "options_en": ["Tolerate corruption", "Be insensitive", "Become aware citizens", "Just talk"],
                "options_hi": ["भ्रष्टाचार को सहना", "संवेदनहीन बनना", "जागरूक नागरिक बनना", "सिर्फ बात करना"],
                "answer_en": "Become aware citizens",
                "answer_hi": "जागरूक नागरिक बनना",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 92,
                "question_en": "How does 'Sookhi Daali' end?",
                "question_hi": "सूखी डाली का अंत किस भावना के साथ होता है?",
                "options_en": ["With humor", "With love", "With reflection", "With compassion and guilt"],
                "options_hi": ["हास्य", "प्रेम", "विचार", "करुणा और आत्मग्लानि"],
                "answer_en": "With compassion and guilt",
                "answer_hi": "करुणा और आत्मग्लानि",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 93,
                "question_en": "Which sandhi is in 'Surya + Uday'?",
                "question_hi": "‘सूर्य + उदय’ में कौन-सी संधि है?",
                "options_en": ["Swar Sandhi", "Vyanjan Sandhi", "Visarga Sandhi", "None"],
                "options_hi": ["स्वर संधि", "व्यंजन संधि", "विसर्ग संधि", "इनमें से कोई नहीं"],
                "answer_en": "Swar Sandhi",
                "answer_hi": "स्वर संधि",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 94,
                "question_en": "Which samas is in 'Rajpath'?",
                "question_hi": "‘राजपथ’ शब्द में कौन-सा समास है?",
                "options_en": ["Dvandva", "Tatpurush", "Bahuvrihi", "Karmadharay"],
                "options_hi": ["द्वंद्व", "तत्पुरुष", "बहुव्रीहि", "कर्मधारय"],
                "answer_en": "Tatpurush",
                "answer_hi": "तत्पुरुष",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 95,
                "question_en": "Which prefix is in 'Apoorv'?",
                "question_hi": "‘अपूर्व’ शब्द में कौन-सा उपसर्ग है?",
                "options_en": ["A", "Poorv", "Ap", "None"],
                "options_hi": ["अ", "पूर्व", "अप", "इनमें से कोई नहीं"],
                "answer_en": "A",
                "answer_hi": "अ",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 96,
                "question_en": "Which suffix is added to 'Balak' to form 'Balakpan'?",
                "question_hi": "‘बालक’ से ‘बालकपन’ शब्द बनने में कौन-सा प्रत्यय जुड़ा है?",
                "options_en": ["Ka", "Pan", "Ta", "Ee"],
                "options_hi": ["क", "पन", "ता", "ई"],
                "answer_en": "Pan",
                "answer_hi": "पन",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 97,
                "question_en": "What is the tense in 'Ram ne khana khaya'?",
                "question_hi": "‘राम ने खाना खाया’ — इस वाक्य का काल है?",
                "options_en": ["Present", "Future", "Past", "Imperative"],
                "options_hi": ["वर्तमान काल", "भविष्यत् काल", "भूतकाल", "आदेशात्मक"],
                "answer_en": "Past",
                "answer_hi": "भूतकाल",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 98,
                "question_en": "What is the gender of 'Pustak'?",
                "question_hi": "‘पुस्तक’ शब्द का लिंग क्या है?",
                "options_en": ["Masculine", "Feminine", "Neuter", "None"],
                "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "उभयलिंग", "इनमें से कोई नहीं"],
                "answer_en": "Feminine",
                "answer_hi": "स्त्रीलिंग",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 99,
                "question_en": "What is the plural of 'Balak'?",
                "question_hi": "‘बालक’ शब्द का बहुवचन क्या होगा?",
                "options_en": ["Balak", "Balaken", "Balakon", "Balak log"],
                "options_hi": ["बालक", "बालकें", "बालकों", "बालक लोग"],
                "answer_en": "Balak",
                "answer_hi": "बालक",
                "attempted": false,
                "selected": ""
            },
        
            {
                "num": 100,
                "question_hi": "‘अंधकार’ का पर्यायवाची शब्द क्या है?",
                "question_en": "What is the synonym of 'darkness'?",
                "options_hi": ["प्रकाश", "अग्नि", "तम", "दीप"],
                "options_en": ["Light", "Fire", "Darkness", "Lamp"],
                "answer_hi": "तम",
                "answer_en": "Darkness",
                "attempted": false,
                "selected": ""
            }
        ]; // Removed the nested array structure
        

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
