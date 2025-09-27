
const questions = [
    {
        "num": 1,
        "question_en": "Who is the author of 'The Pace for Living'?",
        "question_hi": "'The Pace for Living' के लेखक कौन हैं?",
        "options_en": ["A.G. Gardiner", "R.K. Narayan", "Ruskin Bond", "M.K. Gandhi"],
        "options_hi": ["ए.जी. गार्डिनर", "आर.के. नारायण", "रस्किन बॉन्ड", "एम.के. गांधी"],
        "answer_en": "A.G. Gardiner",
        "answer_hi": "ए.जी. गार्डिनर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "In 'Gillu', what kind of animal is Gillu?",
        "question_hi": "'गिल्लू' में, गिल्लू किस प्रकार का जानवर है?",
        "options_en": ["Squirrel", "Parrot", "Rabbit", "Cat"],
        "options_hi": ["गिलहरी", "तोता", "खरगोश", "बिल्ली"],
        "answer_en": "Squirrel",
        "answer_hi": "गिलहरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the central theme of 'Me and the Ecology Bit'?",
        "question_hi": "'मी एंड द इकोलॉजी बिट' का मुख्य विषय क्या है?",
        "options_en": ["Environmental awareness", "Personal health", "Technological advancement", "Historical events"],
        "options_hi": ["पर्यावरणीय जागरूकता", "व्यक्तिगत स्वास्थ्य", "प्रौद्योगिकी उन्नति", "ऐतिहासिक घटनाएँ"],
        "answer_en": "Environmental awareness",
        "answer_hi": "पर्यावरणीय जागरूकता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In 'The Unity of Indian Culture', what does the author emphasize?",
        "question_hi": "'द यूनिटी ऑफ इंडियन कल्चर' में, लेखक किस पर जोर देते हैं?",
        "options_en": ["Diversity in unity", "Economic growth", "Political stability", "Technological progress"],
        "options_hi": ["एकता में विविधता", "आर्थिक विकास", "राजनीतिक स्थिरता", "प्रौद्योगिकी प्रगति"],
        "answer_en": "Diversity in unity",
        "answer_hi": "एकता में विविधता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Who gave the 'Acceptance Speech' included in the syllabus?",
        "question_hi": "पाठ्यक्रम में शामिल 'एक्सेप्टेंस स्पीच' किसने दी?",
        "options_en": ["Mother Teresa", "Nelson Mandela", "Barack Obama", "Malala Yousafzai"],
        "options_hi": ["मदर टेरेसा", "नेल्सन मंडेला", "बराक ओबामा", "मलाला यूसुफ़ज़ई"],
        "answer_en": "Mother Teresa",
        "answer_hi": "मदर टेरेसा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "In 'Once Upon A Time', what does the poet regret?",
        "question_hi": "'वन्स अपॉन ए टाइम' में, कवि किस बात का अफसोस करता है?",
        "options_en": ["Loss of innocence", "Passing of time", "Lost friendships", "Changing traditions"],
        "options_hi": ["मासूमियत का खोना", "समय का बीतना", "खोई हुई दोस्ती", "बदलती परंपराएँ"],
        "answer_en": "Loss of innocence",
        "answer_hi": "मासूमियत का खोना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the main idea of 'Little Girl Wiser Than Men'?",
        "question_hi": "'लिटिल गर्ल वाइज़र दैन मेन' का मुख्य विचार क्या है?",
        "options_en": ["Children's innocence", "Wisdom of elders", "Gender equality", "Power of knowledge"],
        "options_hi": ["बच्चों की मासूमियत", "बुजुर्गों की बुद्धिमत्ता", "लैंगिक समानता", "ज्ञान की शक्ति"],
        "answer_en": "Children's innocence",
        "answer_hi": "बच्चों की मासूमियत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "In 'God Made The Country', what does the poet contrast?",
        "question_hi": "'गॉड मेड द कंट्री' में, कवि किसका विरोधाभास प्रस्तुत करता है?",
        "options_en": ["Country life and city life", "Nature and technology", "Past and present", "Rich and poor"],
        "options_hi": ["गांव का जीवन और शहर का जीवन", "प्रकृति और प्रौद्योगिकी", "अतीत और वर्तमान", "अमीर और गरीब"],
        "answer_en": "Country life and city life",
        "answer_hi": "गांव का जीवन और शहर का जीवन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Who wrote 'Ode On Solitude'?",
        "question_hi": "'ओड ऑन सॉलिट्यूड' किसने लिखा?",
        "options_en": ["Alexander Pope", "William Wordsworth", "John Keats", "Percy Bysshe Shelley"],
        "options_hi": ["अलेक्जेंडर पोप", "विलियम वर्ड्सवर्थ", "जॉन कीट्स", "पर्सी बिशे शेली"],
        "answer_en": "Alexander Pope",
        "answer_hi": "अलेक्जेंडर पोप",
        "attempted": false,
        "selected": ""
    },
        {
            "num": 10,
            "question_en": "Which word is an adverb in: 'He ran quickly.'?",
            "question_hi": "'He ran quickly.' में क्रिया विशेषण क्या है?",
            "options_en": ["He", "Ran", "Quickly", "None"],
            "options_hi": ["वह", "दौड़ा", "तेजी से", "कोई नहीं"],
            "answer_en": "Quickly",
            "answer_hi": "तेजी से",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "What is the tone of the poem 'Polythene Bag'?",
            "question_hi": "'पॉलीथीन बैग' कविता का स्वर कैसा है?",
            "options_en": ["Sarcastic", "Romantic", "Patriotic", "Fearful"],
            "options_hi": ["व्यंग्यात्मक", "रोमांटिक", "देशभक्ति से भरपूर", "भयभीत"],
            "answer_en": "Sarcastic",
            "answer_hi": "व्यंग्यात्मक",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "What is the message of 'The Empty Heart'?",
            "question_hi": "'द एम्प्टी हार्ट' का संदेश क्या है?",
            "options_en": ["Selfishness leads to emptiness", "Greed is good", "Love is unnecessary", "Happiness is external"],
            "options_hi": ["स्वार्थ खालीपन की ओर ले जाता है", "लोभ अच्छा है", "प्रेम अनावश्यक है", "खुशी बाहरी चीज है"],
            "answer_en": "Selfishness leads to emptiness",
            "answer_hi": "स्वार्थ खालीपन की ओर ले जाता है",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
            "question_en": "Which character adopts Gillu in the story 'Gillu'?",
            "question_hi": "'गिल्लू' कहानी में गिल्लू को कौन अपनाता है?",
            "options_en": ["The narrator", "The gardener", "A child", "The teacher"],
            "options_hi": ["कथावाचक", "माली", "एक बच्चा", "शिक्षक"],
            "answer_en": "The narrator",
            "answer_hi": "कथावाचक",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 14,
            "question_en": "What does the poet in 'Once Upon A Time' wish to relearn?",
            "question_hi": "'Once Upon A Time' कविता में कवि क्या दोबारा सीखना चाहता है?",
            "options_en": ["Sincerity", "Acting", "Lies", "Greed"],
            "options_hi": ["ईमानदारी", "अभिनय", "झूठ", "लोभ"],
            "answer_en": "Sincerity",
            "answer_hi": "ईमानदारी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "Who has written 'Me and the Ecology Bit'?",
            "question_hi": "'मी एंड द इकोलॉजी बिट' किसने लिखा है?",
            "options_en": ["Jane Boulton", "Pearl S. Buck", "Leo Tolstoy", "T.S. Eliot"],
            "options_hi": ["जेन बोल्टन", "पर्ल एस. बक", "लियो टॉलस्टॉय", "टी.एस. एलियट"],
            "answer_en": "Jane Boulton",
            "answer_hi": "जेन बोल्टन",
            "attempted": false,
            "selected": ""
        },
   
        {
            "num": 16,
            "question_en": "In 'Acceptance Speech', what does Mother Teresa emphasize the most?",
            "question_hi": "'स्वीकृति भाषण' में मदर टेरेसा किस बात पर सबसे अधिक ज़ोर देती हैं?",
            "options_en": ["Love and compassion", "Wealth and power", "Education and science", "Technology and progress"],
            "options_hi": ["प्रेम और करुणा", "धन और शक्ति", "शिक्षा और विज्ञान", "प्रौद्योगिकी और प्रगति"],
            "answer_en": "Love and compassion",
            "answer_hi": "प्रेम और करुणा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "What is the main idea of 'The Unity of Indian Culture'?",
            "question_hi": "'भारतीय संस्कृति की एकता' का मुख्य विचार क्या है?",
            "options_en": ["Spiritual unity in diversity", "Westernization of India", "Economic progress", "Scientific development"],
            "options_hi": ["विविधता में आध्यात्मिक एकता", "भारत का पश्चिमीकरण", "आर्थिक प्रगति", "वैज्ञानिक विकास"],
            "answer_en": "Spiritual unity in diversity",
            "answer_hi": "विविधता में आध्यात्मिक एकता",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "Who is the poet of 'Once Upon a Time'?",
            "question_hi": "'वन्स अपॉन ए टाइम' कविता के कवि कौन हैं?",
            "options_en": ["Gabriel Okara", "John Donne", "Robert Frost", "Walt Whitman"],
            "options_hi": ["गेब्रियल ओकारा", "जॉन डन", "रॉबर्ट फ्रॉस्ट", "वॉल्ट व्हिटमैन"],
            "answer_en": "Gabriel Okara",
            "answer_hi": "गेब्रियल ओकारा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "In the poem 'God Made the Country', what does the poet prefer?",
            "question_hi": "'गॉड मेड द कंट्री' कविता में कवि क्या पसंद करता है?",
            "options_en": ["Life in the countryside", "Modern city life", "Foreign lifestyle", "Urban rush"],
            "options_hi": ["गांव का जीवन", "आधुनिक शहर का जीवन", "विदेशी जीवनशैली", "शहरी भीड़"],
            "answer_en": "Life in the countryside",
            "answer_hi": "गांव का जीवन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "What is the theme of the story 'The Empty Heart'?",
            "question_hi": "'द एम्प्टी हार्ट' कहानी का विषय क्या है?",
            "options_en": ["The emptiness caused by selfishness", "The joy of giving", "Love between parents and children", "The struggle of poverty"],
            "options_hi": ["स्वार्थ से उत्पन्न खालीपन", "देने की खुशी", "माता-पिता और बच्चों के बीच का प्रेम", "गरीबी का संघर्ष"],
            "answer_en": "The emptiness caused by selfishness",
            "answer_hi": "स्वार्थ से उत्पन्न खालीपन",
            "attempted": false,
            "selected": ""
        }
,        
{
    "num": 21,
    "question_en": "Who is the author of 'The Pace for Living'?",
    "question_hi": "'The Pace for Living' के लेखक कौन हैं?",
    "options_en": ["A.G. Gardiner", "R.K. Narayan", "Ruskin Bond", "M.K. Gandhi"],
    "options_hi": ["ए.जी. गार्डिनर", "आर.के. नारायण", "रस्किन बॉन्ड", "एम.के. गांधी"],
    "answer_en": "A.G. Gardiner",
    "answer_hi": "ए.जी. गार्डिनर",
    "attempted": false,
    "selected": ""
},
{
    "num": 22,
    "question_en": "In the story 'Gillu', what kind of animal is Gillu?",
    "question_hi": "'गिल्लू' कहानी में, गिल्लू किस प्रकार का जानवर है?",
    "options_en": ["Squirrel", "Parrot", "Rabbit", "Cat"],
    "options_hi": ["गिलहरी", "तोता", "खरगोश", "बिल्ली"],
    "answer_en": "Squirrel",
    "answer_hi": "गिलहरी",
    "attempted": false,
    "selected": ""
},
{
    "num": 23,
    "question_en": "What is the central theme of 'Me and the Ecology Bit'?",
    "question_hi": "'Me and the Ecology Bit' का केंद्रीय विषय क्या है?",
    "options_en": ["Environmental awareness", "Personal health", "Technological advancement", "Historical events"],
    "options_hi": ["पर्यावरणीय जागरूकता", "व्यक्तिगत स्वास्थ्य", "प्रौद्योगिकी उन्नति", "ऐतिहासिक घटनाएँ"],
    "answer_en": "Environmental awareness",
    "answer_hi": "पर्यावरणीय जागरूकता",
    "attempted": false,
    "selected": ""
},
{
    "num": 24,
    "question_en": "In 'The Unity of Indian Culture', what does the author emphasize?",
    "question_hi": "'The Unity of Indian Culture' में, लेखक किस पर जोर देते हैं?",
    "options_en": ["Diversity in unity", "Economic growth", "Political stability", "Technological progress"],
    "options_hi": ["एकता में विविधता", "आर्थिक विकास", "राजनीतिक स्थिरता", "प्रौद्योगिकी प्रगति"],
    "answer_en": "Diversity in unity",
    "answer_hi": "एकता में विविधता",
    "attempted": false,
    "selected": ""
},
{
    "num": 25,
    "question_en": "Who delivered the 'Acceptance Speech' included in the syllabus?",
    "question_hi": "पाठ्यक्रम में शामिल 'Acceptance Speech' किसने दी?",
    "options_en": ["Mother Teresa", "Nelson Mandela", "Barack Obama", "Malala Yousafzai"],
    "options_hi": ["मदर टेरेसा", "नेल्सन मंडेला", "बराक ओबामा", "मलाला यूसुफ़ज़ई"],
    "answer_en": "Mother Teresa",
    "answer_hi": "मदर टेरेसा",
    "attempted": false,
    "selected": ""
},
{
    "num": 26,
    "question_en": "In 'Once Upon A Time', what does the poet regret?",
    "question_hi": "'Once Upon A Time' में, कवि किस बात का अफसोस करता है?",
    "options_en": ["Loss of innocence", "Passing of time", "Lost friendships", "Changing traditions"],
    "options_hi": ["मासूमियत का खोना", "समय का बीतना", "खोई हुई दोस्ती", "बदलती परंपराएँ"],
    "answer_en": "Loss of innocence",
    "answer_hi": "मासूमियत का खोना",
    "attempted": false,
    "selected": ""
},
{
    "num": 27,
    "question_en": "What is the main idea of 'Little Girl Wiser Than Men'?",
    "question_hi": "'Little Girl Wiser Than Men' का मुख्य विचार क्या है?",
    "options_en": ["Children's innocence", "Wisdom of elders", "Gender equality", "Power of knowledge"],
    "options_hi": ["बच्चों की मासूमियत", "बुजुर्गों की बुद्धिमत्ता", "लैंगिक समानता", "ज्ञान की शक्ति"],
    "answer_en": "Children's innocence",
    "answer_hi": "बच्चों की मासूमियत",
    "attempted": false,
    "selected": ""
},
{
    "num": 28,
    "question_en": "In 'God Made The Country', what does the poet contrast?",
    "question_hi": "'God Made The Country' में, कवि किसका विरोधाभास प्रस्तुत करता है?",
    "options_en": ["Country life and city life", "Nature and technology", "Past and present", "Rich and poor"],
    "options_hi": ["गांव का जीवन और शहर का जीवन", "प्रकृति और प्रौद्योगिकी", "अतीत और वर्तमान", "अमीर और गरीब"],
    "answer_en": "Country life and city life",
    "answer_hi": "गांव का जीवन और शहर का जीवन",
    "attempted": false,
    "selected": ""
},
{
    "num": 29,
    "question_en": "Who wrote 'Ode On Solitude'?",
    "question_hi": "'Ode On Solitude' किसने लिखा?",
    "options_en": ["Alexander Pope", "William Wordsworth", "John Keats", "Percy Bysshe Shelley"],
    "options_hi": ["अलेक्जेंडर पोप", "विलियम वर्ड्सवर्थ", "जॉन कीट्स", "पर्सी बिशे शेली"],
    "answer_en": "Alexander Pope",
    "answer_hi": "अलेक्जेंडर पोप",
    "attempted": false,
    "selected": ""
},
{
    "num": 30,
    "question_en": "What does the 'Polythene Bag' symbolize in the poem?",
    "question_hi": "कविता में 'Polythene Bag' किसका प्रतीक है?",
    "options_en": ["Environmental pollution", "Convenience", "Modernization", "Wastefulness"],
    "options_hi": ["पर्यावरण प्रदूषण", "सुविधा", "आधुनिकीकरण", "अपव्यय"],
    "answer_en": "Environmental pollution",
    "answer_hi": "पर्यावरण प्रदूषण",
    "attempted": false,
    "selected": ""
},
{
    "num": 31,
    "question_en": "What is the moral of the story 'The Empty Heart'?",
    "question_hi": "'द एम्प्टी हार्ट' कहानी की शिक्षा क्या है?",
    "options_en": ["Selflessness brings joy", "Love is pain", "Anger leads to peace", "Greed is good"],
    "options_hi": ["निःस्वार्थता आनंद लाती है", "प्रेम दुख है", "क्रोध शांति लाता है", "लोभ अच्छा है"],
    "answer_en": "Selflessness brings joy",
    "answer_hi": "निःस्वार्थता आनंद लाती है",
    "attempted": false,
    "selected": ""
},
{
    "num": 32,
    "question_en": "Who is the speaker in 'Once Upon A Time'?",
    "question_hi": "'Once Upon A Time' में वक्ता कौन है?",
    "options_en": ["A father", "A teacher", "A friend", "A mother"],
    "options_hi": ["एक पिता", "एक शिक्षक", "एक मित्र", "एक माँ"],
    "answer_en": "A father",
    "answer_hi": "एक पिता",
    "attempted": false,
    "selected": ""
},
{
    "num": 33,
    "question_en": "In which story does a child teach a lesson to elders?",
    "question_hi": "किस कहानी में एक बच्चा बड़ों को शिक्षा देता है?",
    "options_en": ["Little Girl Wiser Than Men", "The Pace for Living", "Gillu", "The Empty Heart"],
    "options_hi": ["Little Girl Wiser Than Men", "The Pace for Living", "गिल्लू", "द एम्प्टी हार्ट"],
    "answer_en": "Little Girl Wiser Than Men",
    "answer_hi": "Little Girl Wiser Than Men",
    "attempted": false,
    "selected": ""
},
{
    "num": 34,
    "question_en": "Which poem shows contrast between past and present behavior?",
    "question_hi": "कौन सी कविता अतीत और वर्तमान के व्यवहार का विरोधाभास दिखाती है?",
    "options_en": ["Once Upon A Time", "Ode On Solitude", "God Made The Country", "Polythene Bag"],
    "options_hi": ["Once Upon A Time", "Ode On Solitude", "God Made The Country", "Polythene Bag"],
    "answer_en": "Once Upon A Time",
    "answer_hi": "Once Upon A Time",
    "attempted": false,
    "selected": ""
},
{
    "num": 35,
    "question_en": "What does 'Gillu' symbolize in the story?",
    "question_hi": "कहानी में 'गिल्लू' किसका प्रतीक है?",
    "options_en": ["Compassion and care", "Loneliness", "Fear", "Freedom"],
    "options_hi": ["दया और देखभाल", "एकाकीपन", "डर", "स्वतंत्रता"],
    "answer_en": "Compassion and care",
    "answer_hi": "दया और देखभाल",
    "attempted": false,
    "selected": ""
},
{
    "num": 36,
    "question_en": "What is the message of 'Polythene Bag'?",
    "question_hi": "'पॉलीथीन बैग' का संदेश क्या है?",
    "options_en": ["Avoid plastic usage", "Use more plastic", "Save animals", "Save trees"],
    "options_hi": ["प्लास्टिक का उपयोग न करें", "अधिक प्लास्टिक का उपयोग करें", "जानवरों को बचाओ", "पेड़ों को बचाओ"],
    "answer_en": "Avoid plastic usage",
    "answer_hi": "प्लास्टिक का उपयोग न करें",
    "attempted": false,
    "selected": ""
},
{
    "num": 37,
    "question_en": "Who is the author of 'Little Girl Wiser Than Men'?",
    "question_hi": "'Little Girl Wiser Than Men' के लेखक कौन हैं?",
    "options_en": ["Leo Tolstoy", "Alexander Pope", "Jane Boulton", "Pearl S. Buck"],
    "options_hi": ["लियो टॉलस्टॉय", "अलेक्जेंडर पोप", "जेन बोल्टन", "पर्ल एस. बक"],
    "answer_en": "Leo Tolstoy",
    "answer_hi": "लियो टॉलस्टॉय",
    "attempted": false,
    "selected": ""
},
{
    "num": 38,
    "question_en": "Which of the following is a prose lesson?",
    "question_hi": "निम्नलिखित में से कौन एक गद्य पाठ है?",
    "options_en": ["The Pace for Living", "God Made The Country", "Ode On Solitude", "Polythene Bag"],
    "options_hi": ["The Pace for Living", "God Made The Country", "Ode On Solitude", "Polythene Bag"],
    "answer_en": "The Pace for Living",
    "answer_hi": "The Pace for Living",
    "attempted": false,
    "selected": ""
},
{
    "num": 39,
    "question_en": "What does the poet wish to regain in 'Once Upon A Time'?",
    "question_hi": "'Once Upon A Time' में कवि क्या पुनः पाना चाहता है?",
    "options_en": ["Childhood innocence", "Money", "Knowledge", "Time"],
    "options_hi": ["बचपन की मासूमियत", "धन", "ज्ञान", "समय"],
    "answer_en": "Childhood innocence",
    "answer_hi": "बचपन की मासूमियत",
    "attempted": false,
    "selected": ""
},
{
    "num": 40,
    "question_en": "Which quality is highlighted in 'The Empty Heart'?",
    "question_hi": "'द एम्प्टी हार्ट' में किस गुण को उजागर किया गया है?",
    "options_en": ["Compassion", "Anger", "Selfishness", "Bravery"],
    "options_hi": ["दया", "क्रोध", "स्वार्थ", "बहादुरी"],
    "answer_en": "Compassion",
    "answer_hi": "दया",
    "attempted": false,
    "selected": ""
},
  
{
    "num": 41,
    "question_en": "Who is the author of 'The Pace for Living'?",
    "question_hi": "'The Pace for Living' के लेखक कौन हैं?",
    "options_en": ["R.C. Hutchinson", "Leo Tolstoy", "Khushwant Singh", "Nissim Ezekiel"],
    "options_hi": ["आर.सी. हचिन्सन", "लियो टॉल्स्टॉय", "खुशवंत सिंह", "निस्सिम एजेकिल"],
    "answer_en": "R.C. Hutchinson",
    "answer_hi": "आर.सी. हचिन्सन",
    "attempted": false,
    "selected": ""
},
{
    "num": 42,
    "question_en": "What is the main theme of 'The Empty Heart'?",
    "question_hi": "'The Empty Heart' का मुख्य विषय क्या है?",
    "options_en": ["Loneliness", "Poverty", "Violence", "Hope"],
    "options_hi": ["एकाकीपन", "गरीबी", "हिंसा", "आशा"],
    "answer_en": "Loneliness",
    "answer_hi": "एकाकीपन",
    "attempted": false,
    "selected": ""
},
{
    "num": 43,
    "question_en": "Which poem reflects nostalgia and regret?",
    "question_hi": "कौन सी कविता स्मृति और पछतावे को दर्शाती है?",
    "options_en": ["Once Upon A Time", "Ode On Solitude", "God Made The Country", "Polythene Bag"],
    "options_hi": ["Once Upon A Time", "Ode On Solitude", "God Made The Country", "Polythene Bag"],
    "answer_en": "Once Upon A Time",
    "answer_hi": "Once Upon A Time",
    "attempted": false,
    "selected": ""
},
{
    "num": 44,
    "question_en": "What did the narrator feed Gillu?",
    "question_hi": "कथावाचक गिल्लू को क्या खिलाती थी?",
    "options_en": ["Kaju and fruits", "Milk and bread", "Biscuits", "Water only"],
    "options_hi": ["काजू और फल", "दूध और ब्रेड", "बिस्किट", "सिर्फ पानी"],
    "answer_en": "Kaju and fruits",
    "answer_hi": "काजू और फल",
    "attempted": false,
    "selected": ""
},
{
    "num": 45,
    "question_en": "'Ode On Solitude' is a poem about:",
    "question_hi": "'Ode On Solitude' किस विषय पर कविता है?",
    "options_en": ["Peace in simple life", "Urban chaos", "Family problems", "Politics"],
    "options_hi": ["साधारण जीवन में शांति", "शहरी अव्यवस्था", "पारिवारिक समस्याएँ", "राजनीति"],
    "answer_en": "Peace in simple life",
    "answer_hi": "साधारण जीवन में शांति",
    "attempted": false,
    "selected": ""
},
{
    "num": 46,
    "question_en": "What did the girl do in 'Little Girl Wiser Than Men' when she was hurt?",
    "question_hi": "'Little Girl Wiser Than Men' में जब लड़की को चोट लगी तो उसने क्या किया?",
    "options_en": ["Forgave her friend", "Complained", "Started crying", "Ran away"],
    "options_hi": ["अपने दोस्त को माफ़ किया", "शिकायत की", "रोने लगी", "भाग गई"],
    "answer_en": "Forgave her friend",
    "answer_hi": "अपने दोस्त को माफ़ किया",
    "attempted": false,
    "selected": ""
},
{
    "num": 47,
    "question_en": "What literary device is used in 'Once Upon A Time'?",
    "question_hi": "'Once Upon A Time' में कौन सी काव्य युक्ति का प्रयोग हुआ है?",
    "options_en": ["Irony", "Hyperbole", "Pun", "Alliteration"],
    "options_hi": ["विडंबना", "अतिशयोक्ति", "श्लेष", "अनुप्रास"],
    "answer_en": "Irony",
    "answer_hi": "विडंबना",
    "attempted": false,
    "selected": ""
},
{
    "num": 48,
    "question_en": "What is the main message of the lesson 'Me and the Ecology Bit'?",
    "question_hi": "'मी एंड द इकोलॉजी बिट' पाठ का मुख्य संदेश क्या है?",
    "options_en": ["Environmental awareness", "Global politics", "Family bonding", "Scientific inventions"],
    "options_hi": ["पर्यावरण के प्रति जागरूकता", "वैश्विक राजनीति", "पारिवारिक संबंध", "वैज्ञानिक आविष्कार"],
    "answer_en": "Environmental awareness",
    "answer_hi": "पर्यावरण के प्रति जागरूकता",
    "attempted": false,
    "selected": ""
},
{
    "num": 49,
    "question_en": "What does the poem 'Polythene Bag' criticize?",
    "question_hi": "'पॉलीथीन बैग' कविता किसकी आलोचना करती है?",
    "options_en": ["Pollution and environmental neglect", "Recycling", "Government policies", "Scientific use"],
    "options_hi": ["प्रदूषण और पर्यावरण की उपेक्षा", "पुनर्चक्रण", "सरकारी नीतियाँ", "वैज्ञानिक उपयोग"],
    "answer_en": "Pollution and environmental neglect",
    "answer_hi": "प्रदूषण और पर्यावरण की उपेक्षा",
    "attempted": false,
    "selected": ""
},
{
    "num": 50,
    "question_en": "Who wrote the poem 'Once Upon A Time'?",
    "question_hi": "'Once Upon A Time' कविता किसने लिखी है?",
    "options_en": ["Gabriel Okara", "Alexander Pope", "John Milton", "Nissim Ezekiel"],
    "options_hi": ["गेब्रियल ओकारा", "अलेक्जेंडर पोप", "जॉन मिल्टन", "निस्सिम एजेकिल"],
    "answer_en": "Gabriel Okara",
    "answer_hi": "गेब्रियल ओकारा",
    "attempted": false,
    "selected": ""
},
{
    "num": 51,
    "question_en": "What is the tone of the poem 'Polythene Bag'?",
    "question_hi": "'पॉलीथीन बैग' कविता की शैली कैसी है?",
    "options_en": ["Satirical", "Humorous", "Romantic", "Optimistic"],
    "options_hi": ["व्यंग्यात्मक", "हास्यपूर्ण", "रोमांटिक", "आशावादी"],
    "answer_en": "Satirical",
    "answer_hi": "व्यंग्यात्मक",
    "attempted": false,
    "selected": ""
},
{
    "num": 52,
    "question_en": "Which poem describes the poet’s desire for a peaceful rural life?",
    "question_hi": "कौन सी कविता कवि की शांतिपूर्ण ग्रामीण जीवन की इच्छा को दर्शाती है?",
    "options_en": ["Ode On Solitude", "Once Upon A Time", "The Empty Heart", "Polythene Bag"],
    "options_hi": ["Ode On Solitude", "Once Upon A Time", "The Empty Heart", "Polythene Bag"],
    "answer_en": "Ode On Solitude",
    "answer_hi": "Ode On Solitude",
    "attempted": false,
    "selected": ""
},
{
    "num": 53,
    "question_en": "Which story involves a squirrel?",
    "question_hi": "किस कहानी में एक गिलहरी शामिल है?",
    "options_en": ["Gillu", "The Empty Heart", "The Pace for Living", "Me and the Ecology Bit"],
    "options_hi": ["गिल्लू", "द एम्प्टी हार्ट", "द पेस फॉर लिविंग", "मी एंड द इकोलॉजी बिट"],
    "answer_en": "Gillu",
    "answer_hi": "गिल्लू",
    "attempted": false,
    "selected": ""
},
{
    "num": 54,
    "question_en": "Who is the writer of 'Gillu'?",
    "question_hi": "'गिल्लू' की लेखिका कौन हैं?",
    "options_en": ["Mahadevi Verma", "Sarojini Naidu", "Indira Gandhi", "Rassundari Devi"],
    "options_hi": ["महादेवी वर्मा", "सरोजिनी नायडू", "इंदिरा गांधी", "रस्सुंदरी देवी"],
    "answer_en": "Mahadevi Verma",
    "answer_hi": "महादेवी वर्मा",
    "attempted": false,
    "selected": ""
},
{
    "num": 55,
    "question_en": "In 'Little Girl Wiser Than Men', what is the moral of the story?",
    "question_hi": "'Little Girl Wiser Than Men' कहानी की नैतिक शिक्षा क्या है?",
    "options_en": ["Forgiveness is divine", "Children should be scolded", "Fight for your rights", "Nature is beautiful"],
    "options_hi": ["क्षमा ईश्वरतुल्य है", "बच्चों को डांटना चाहिए", "अपने अधिकारों के लिए लड़ो", "प्रकृति सुंदर है"],
    "answer_en": "Forgiveness is divine",
    "answer_hi": "क्षमा ईश्वरतुल्य है",
    "attempted": false,
    "selected": ""
},
{
    "num": 56,
    "question_en": "What does the poem 'Ode on Solitude' praise?",
    "question_hi": "'Ode on Solitude' कविता किसकी प्रशंसा करती है?",
    "options_en": ["Simple rural life", "Urban success", "Youth", "Technology"],
    "options_hi": ["सरल ग्रामीण जीवन", "शहरी सफलता", "युवा", "प्रौद्योगिकी"],
    "answer_en": "Simple rural life",
    "answer_hi": "सरल ग्रामीण जीवन",
    "attempted": false,
    "selected": ""
},
{
    "num": 57,
    "question_en": "What kind of creature was Gillu?",
    "question_hi": "गिल्लू किस प्रकार का प्राणी था?",
    "options_en": ["Squirrel", "Bird", "Rabbit", "Dog"],
    "options_hi": ["गिलहरी", "पक्षी", "खरगोश", "कुत्ता"],
    "answer_en": "Squirrel",
    "answer_hi": "गिलहरी",
    "attempted": false,
    "selected": ""
},
{
    "num": 58,
    "question_en": "Who is the author of 'The Accidental Tourist'?",
    "question_hi": "'The Accidental Tourist' के लेखक कौन हैं?",
    "options_en": ["Bill Bryson", "Ruskin Bond", "Mark Twain", "R.C. Hutchinson"],
    "options_hi": ["बिल ब्रायसन", "रस्किन बॉन्ड", "मार्क ट्वेन", "आर. सी. हचिन्सन"],
    "answer_en": "Bill Bryson",
    "answer_hi": "बिल ब्रायसन",
    "attempted": false,
    "selected": ""
},
{
    "num": 59,
    "question_en": "What was the main problem faced by the narrator in 'The Accidental Tourist'?",
    "question_hi": "'The Accidental Tourist' में कथावाचक को मुख्य रूप से किस समस्या का सामना करना पड़ा?",
    "options_en": ["Clumsiness while traveling", "Losing money", "Forgetting passport", "Missed flights"],
    "options_hi": ["यात्रा के दौरान असावधानी", "पैसे खो देना", "पासपोर्ट भूल जाना", "उड़ान छूट जाना"],
    "answer_en": "Clumsiness while traveling",
    "answer_hi": "यात्रा के दौरान असावधानी",
    "attempted": false,
    "selected": ""
},
{
    "num": 60,
    "question_en": "Which story highlights a humorous travel experience?",
    "question_hi": "कौन सी कहानी एक हास्यपूर्ण यात्रा अनुभव को दर्शाती है?",
    "options_en": ["The Accidental Tourist", "Gillu", "Me and the Ecology Bit", "The Empty Heart"],
    "options_hi": ["The Accidental Tourist", "गिल्लू", "मी एंड द इकोलॉजी बिट", "द एम्प्टी हार्ट"],
    "answer_en": "The Accidental Tourist",
    "answer_hi": "The Accidental Tourist",
    "attempted": false,
    "selected": ""
},
{
    "num": 61,
    "question_en": "In 'Me and the Ecology Bit', what did the narrator want to change?",
    "question_hi": "'Me and the Ecology Bit' में कथावाचक क्या बदलना चाहता था?",
    "options_en": ["Environmental behavior of people", "His school", "His career", "His family"],
    "options_hi": ["लोगों का पर्यावरणीय व्यवहार", "अपना स्कूल", "अपना करियर", "अपना परिवार"],
    "answer_en": "Environmental behavior of people",
    "answer_hi": "लोगों का पर्यावरणीय व्यवहार",
    "attempted": false,
    "selected": ""
},
{
    "num": 62,
    "question_en": "What does 'The Empty Heart' focus on?",
    "question_hi": "'The Empty Heart' किस पर केंद्रित है?",
    "options_en": ["Emotional emptiness", "Joy of love", "Power of friendship", "Success in life"],
    "options_hi": ["भावनात्मक खालीपन", "प्रेम की खुशी", "मित्रता की शक्ति", "जीवन में सफलता"],
    "answer_en": "Emotional emptiness",
    "answer_hi": "भावनात्मक खालीपन",
    "attempted": false,
    "selected": ""
},
{
    "num": 63,
    "question_en": "What is the central theme of 'Once Upon A Time'?",
    "question_hi": "'Once Upon A Time' की केंद्रीय विषयवस्तु क्या है?",
    "options_en": ["Loss of innocence", "Love and betrayal", "Political unrest", "Nature's beauty"],
    "options_hi": ["मासूमियत की हानि", "प्रेम और विश्वासघात", "राजनीतिक अशांति", "प्रकृति की सुंदरता"],
    "answer_en": "Loss of innocence",
    "answer_hi": "मासूमियत की हानि",
    "attempted": false,
    "selected": ""
},
{
    "num": 64,
    "question_en": "What does the poem 'The Empty Heart' explore?",
    "question_hi": "'द एम्प्टी हार्ट' कविता किस विषय की पड़ताल करती है?",
    "options_en": ["Loneliness", "Joy", "Friendship", "Success"],
    "options_hi": ["अकेलापन", "खुशी", "मित्रता", "सफलता"],
    "answer_en": "Loneliness",
    "answer_hi": "अकेलापन",
    "attempted": false,
    "selected": ""
},
{
    "num": 65,
    "question_en": "What does the poet wish for in 'Ode on Solitude'?",
    "question_hi": "'Ode on Solitude' में कवि किसकी कामना करता है?",
    "options_en": ["A quiet, happy life", "Fame and riches", "Traveling the world", "Becoming a soldier"],
    "options_hi": ["एक शांत, सुखी जीवन", "यश और धन", "दुनिया की यात्रा", "एक सैनिक बनना"],
    "answer_en": "A quiet, happy life",
    "answer_hi": "एक शांत, सुखी जीवन",
    "attempted": false,
    "selected": ""
},
{
    "num": 66,
    "question_en": "What does the narrator collect in 'Me and the Ecology Bit'?",
    "question_hi": "'Me and the Ecology Bit' में कथावाचक क्या एकत्र करता है?",
    "options_en": ["Garbage for recycling", "Old books", "Bird feathers", "Rainwater"],
    "options_hi": ["पुनर्चक्रण के लिए कचरा", "पुरानी किताबें", "पक्षियों के पंख", "वर्षा जल"],
    "answer_en": "Garbage for recycling",
    "answer_hi": "पुनर्चक्रण के लिए कचरा",
    "attempted": false,
    "selected": ""
},
{
    "num": 67,
    "question_en": "Who is the central character in the story 'Gillu'?",
    "question_hi": "'गिल्लू' कहानी में केंद्रीय पात्र कौन है?",
    "options_en": ["A squirrel", "A girl", "A dog", "A cat"],
    "options_hi": ["एक गिलहरी", "एक लड़की", "एक कुत्ता", "एक बिल्ली"],
    "answer_en": "A squirrel",
    "answer_hi": "एक गिलहरी",
    "attempted": false,
    "selected": ""
},
{
    "num": 68,
    "question_en": "What is the poet's attitude in 'Once Upon A Time'?",
    "question_hi": "'Once Upon A Time' में कवि का दृष्टिकोण क्या है?",
    "options_en": ["Nostalgic and critical", "Angry and violent", "Joyful and excited", "Fearful and anxious"],
    "options_hi": ["स्मृतिमय और आलोचनात्मक", "क्रोधित और हिंसक", "आनंदित और उत्साहित", "भयभीत और चिंतित"],
    "answer_en": "Nostalgic and critical",
    "answer_hi": "स्मृतिमय और आलोचनात्मक",
    "attempted": false,
    "selected": ""
},
{
    "num": 69,
    "question_en": "In 'Little Girl Wiser Than Men', how do the elders react to the girls?",
    "question_hi": "'Little Girl Wiser Than Men' में बूढ़े लोग लड़कियों की प्रतिक्रिया पर कैसे प्रतिक्रिया देते हैं?",
    "options_en": ["They feel ashamed", "They laugh", "They ignore", "They punish them"],
    "options_hi": ["वे शर्मिंदा होते हैं", "वे हँसते हैं", "वे अनदेखा करते हैं", "वे उन्हें दंडित करते हैं"],
    "answer_en": "They feel ashamed",
    "answer_hi": "वे शर्मिंदा होते हैं",
    "attempted": false,
    "selected": ""
},
{
    "num": 70,
    "question_en": "What is the poet’s tone in the poem 'Polythene Bag'?",
    "question_hi": "'Polythene Bag' कविता में कवि की शैली कैसी है?",
    "options_en": ["Critical and satirical", "Happy and hopeful", "Angry and violent", "Sad and nostalgic"],
    "options_hi": ["आलोचनात्मक और व्यंग्यात्मक", "खुश और आशावादी", "क्रोधित और हिंसक", "दुखी और स्मृतिमय"],
    "answer_en": "Critical and satirical",
    "answer_hi": "आलोचनात्मक और व्यंग्यात्मक",
    "attempted": false,
    "selected": ""
},
{
    "num": 71,
    "question_en": "Who is the poet of 'Ode on Solitude'?",
    "question_hi": "'Ode on Solitude' के कवि कौन हैं?",
    "options_en": ["Alexander Pope", "William Wordsworth", "John Keats", "Walt Whitman"],
    "options_hi": ["अलेक्जेंडर पोप", "विलियम वर्ड्सवर्थ", "जॉन कीट्स", "वॉल्ट व्हिटमैन"],
    "answer_en": "Alexander Pope",
    "answer_hi": "अलेक्जेंडर पोप",
    "attempted": false,
    "selected": ""
},
{
    "num": 72,
    "question_en": "In the poem 'The Empty Heart', what does the heart symbolize?",
    "question_hi": "कविता 'द एम्प्टी हार्ट' में हृदय किसका प्रतीक है?",
    "options_en": ["Lack of emotions", "Love", "Joy", "Power"],
    "options_hi": ["भावनाओं की कमी", "प्रेम", "आनंद", "शक्ति"],
    "answer_en": "Lack of emotions",
    "answer_hi": "भावनाओं की कमी",
    "attempted": false,
    "selected": ""
},
{
    "num": 73,
    "question_en": "Which season is described in 'Ode on Solitude'?",
    "question_hi": "'Ode on Solitude' में कौन सा ऋतु वर्णित है?",
    "options_en": ["Spring", "Winter", "Summer", "Autumn"],
    "options_hi": ["वसंत", "शीत", "गर्मी", "पतझड़"],
    "answer_en": "Summer",
    "answer_hi": "गर्मी",
    "attempted": false,
    "selected": ""
},
{
    "num": 74,
    "question_en": "What is the main theme of 'Me and the Ecology Bit'?",
    "question_hi": "'Me and the Ecology Bit' का मुख्य विषय क्या है?",
    "options_en": ["Environmental awareness", "Friendship", "Fear", "Joy of nature"],
    "options_hi": ["पर्यावरणीय जागरूकता", "मित्रता", "भय", "प्रकृति की खुशी"],
    "answer_en": "Environmental awareness",
    "answer_hi": "पर्यावरणीय जागरूकता",
    "attempted": false,
    "selected": ""
},
{
    "num": 75,
    "question_en": "What kind of relationship does the narrator have with Gillu?",
    "question_hi": "कथावाचक का गिल्लू के साथ कैसा संबंध है?",
    "options_en": ["Affectionate", "Formal", "Distant", "Hostile"],
    "options_hi": ["स्नेहपूर्ण", "औपचारिक", "दूरीभरा", "विरोधी"],
    "answer_en": "Affectionate",
    "answer_hi": "स्नेहपूर्ण",
    "attempted": false,
    "selected": ""
},
{
    "num": 76,
    "question_en": "What is the message of the poem 'Once Upon A Time'?",
    "question_hi": "'Once Upon A Time' कविता का संदेश क्या है?",
    "options_en": ["Return to sincerity", "Gain wealth", "Pursue education", "Forget past"],
    "options_hi": ["ईमानदारी की ओर लौटना", "धन प्राप्त करना", "शिक्षा प्राप्त करना", "अतीत को भूलना"],
    "answer_en": "Return to sincerity",
    "answer_hi": "ईमानदारी की ओर लौटना",
    "attempted": false,
    "selected": ""
},
{
    "num": 77,
    "question_en": "Who are the two girls in 'Little Girl Wiser Than Men'?",
    "question_hi": "'Little Girl Wiser Than Men' में दो लड़कियाँ कौन हैं?",
    "options_en": ["Akoulya and Malasha", "Anna and Maria", "Rita and Gita", "Sita and Meena"],
    "options_hi": ["अकोल्या और मलाशा", "अन्ना और मारिया", "रीता और गीता", "सीता और मीना"],
    "answer_en": "Akoulya and Malasha",
    "answer_hi": "अकोल्या और मलाशा",
    "attempted": false,
    "selected": ""
},
{
    "num": 78,
    "question_en": "What does the 'Polythene Bag' represent in the poem?",
    "question_hi": "कविता में 'पॉलीथिन बैग' किसका प्रतिनिधित्व करता है?",
    "options_en": ["Pollution", "Strength", "Growth", "Cleanliness"],
    "options_hi": ["प्रदूषण", "शक्ति", "विकास", "स्वच्छता"],
    "answer_en": "Pollution",
    "answer_hi": "प्रदूषण",
    "attempted": false,
    "selected": ""
},
{
    "num": 79,
    "question_en": "Why does the poet prefer solitude in 'Ode on Solitude'?",
    "question_hi": "'Ode on Solitude' में कवि एकांत को क्यों पसंद करता है?",
    "options_en": ["For peace and self-contentment", "To avoid people", "To study", "To travel alone"],
    "options_hi": ["शांति और आत्म-संतोष के लिए", "लोगों से बचने के लिए", "पढ़ाई के लिए", "अकेले यात्रा करने के लिए"],
    "answer_en": "For peace and self-contentment",
    "answer_hi": "शांति और आत्म-संतोष के लिए",
    "attempted": false,
    "selected": ""
},
{
    "num": 80,
    "question_en": "Who is the author of 'Gillu'?",
    "question_hi": "'गिल्लू' के लेखक कौन हैं?",
    "options_en": ["Mahadevi Verma", "Premchand", "R.N. Tagore", "Sarojini Naidu"],
    "options_hi": ["महादेवी वर्मा", "प्रेमचंद", "रवीन्द्रनाथ टैगोर", "सरोजिनी नायडू"],
    "answer_en": "Mahadevi Verma",
    "answer_hi": "महादेवी वर्मा",
    "attempted": false,
    "selected": ""
},
{
    "num": 81,
    "question_en": "What is the central idea of the poem 'The Empty Heart'?",
    "question_hi": "'द एम्प्टी हार्ट' कविता का केंद्रीय विचार क्या है?",
    "options_en": ["Emotional emptiness", "Celebration", "Tradition", "Freedom"],
    "options_hi": ["भावनात्मक खालीपन", "उत्सव", "परंपरा", "स्वतंत्रता"],
    "answer_en": "Emotional emptiness",
    "answer_hi": "भावनात्मक खालीपन",
    "attempted": false,
    "selected": ""
},
{
    "num": 82,
    "question_en": "In 'Me and the Ecology Bit', the narrator’s family reaction was?",
    "question_hi": "'Me and the Ecology Bit' में कथावाचक के परिवार की प्रतिक्रिया क्या थी?",
    "options_en": ["Supportive", "Angry", "Indifferent", "Confused"],
    "options_hi": ["सहयोगी", "क्रोधित", "उदासीन", "भ्रमित"],
    "answer_en": "Supportive",
    "answer_hi": "सहयोगी",
    "attempted": false,
    "selected": ""
},
{
    "num": 83,
    "question_en": "What lesson does the story 'Little Girl Wiser Than Men' convey?",
    "question_hi": "'Little Girl Wiser Than Men' कहानी से क्या सीख मिलती है?",
    "options_en": ["Children can teach elders", "Anger is necessary", "Girls are inferior", "Men are always right"],
    "options_hi": ["बच्चे बड़ों को सिखा सकते हैं", "क्रोध आवश्यक है", "लड़कियाँ हीन होती हैं", "पुरुष हमेशा सही होते हैं"],
    "answer_en": "Children can teach elders",
    "answer_hi": "बच्चे बड़ों को सिखा सकते हैं",
    "attempted": false,
    "selected": ""
},
{
    "num": 84,
    "question_en": "What does the poet regret in 'Once Upon A Time'?",
    "question_hi": "'Once Upon A Time' में कवि किस बात का पछतावा करता है?",
    "options_en": ["Loss of genuine human emotion", "Not becoming rich", "Traveling less", "Not studying"],
    "options_hi": ["सच्ची मानवीय भावना की कमी", "धनी न बनने का", "कम यात्रा करने का", "पढ़ाई न करने का"],
    "answer_en": "Loss of genuine human emotion",
    "answer_hi": "सच्ची मानवीय भावना की कमी",
    "attempted": false,
    "selected": ""
},
{
    "num": 85,
    "question_en": "What does the poem 'Polythene Bag' criticize?",
    "question_hi": "'Polythene Bag' कविता किसकी आलोचना करती है?",
    "options_en": ["Environmental neglect", "Technological growth", "Modern fashion", "Urban culture"],
    "options_hi": ["पर्यावरण की उपेक्षा", "प्रौद्योगिकी विकास", "आधुनिक फैशन", "शहरी संस्कृति"],
    "answer_en": "Environmental neglect",
    "answer_hi": "पर्यावरण की उपेक्षा",
    "attempted": false,
    "selected": ""
},
{
    "num": 86,
    "question_en": "What kind of life does the poet praise in 'Ode on Solitude'?",
    "question_hi": "'Ode on Solitude' में कवि किस प्रकार के जीवन की प्रशंसा करता है?",
    "options_en": ["Simple and peaceful", "Busy and wealthy", "Adventurous", "Royal"],
    "options_hi": ["सरल और शांतिपूर्ण", "व्यस्त और धनी", "रोमांचक", "राजसी"],
    "answer_en": "Simple and peaceful",
    "answer_hi": "सरल और शांतिपूर्ण",
    "attempted": false,
    "selected": ""
},
{
    "num": 87,
    "question_en": "What makes Gillu special to the narrator?",
    "question_hi": "गिल्लू को कथावाचक के लिए विशेष क्या बनाता है?",
    "options_en": ["His intelligence and bonding", "His speed", "His tricks", "His color"],
    "options_hi": ["उसकी बुद्धिमत्ता और संबंध", "उसकी गति", "उसकी चालाकियाँ", "उसका रंग"],
    "answer_en": "His intelligence and bonding",
    "answer_hi": "उसकी बुद्धिमत्ता और संबंध",
    "attempted": false,
    "selected": ""
},
{
    "num": 88,
    "question_en": "What lesson do we learn from 'Me and the Ecology Bit'?",
    "question_hi": "'Me and the Ecology Bit' से हमें क्या सीख मिलती है?",
    "options_en": ["Even small efforts help environment", "Recycling is costly", "Nature is dangerous", "We should not change"],
    "options_hi": ["छोटे प्रयास भी पर्यावरण की मदद करते हैं", "पुनर्चक्रण महंगा है", "प्रकृति खतरनाक है", "हमें नहीं बदलना चाहिए"],
    "answer_en": "Even small efforts help environment",
    "answer_hi": "छोटे प्रयास भी पर्यावरण की मदद करते हैं",
    "attempted": false,
    "selected": ""
},
{
    "num": 89,
    "question_en": "In 'Once Upon A Time', who is the poet speaking to?",
    "question_hi": "'Once Upon A Time' में कवि किससे बात कर रहा है?",
    "options_en": ["His son", "His father", "His friend", "The reader"],
    "options_hi": ["अपने बेटे से", "अपने पिता से", "अपने मित्र से", "पाठक से"],
    "answer_en": "His son",
    "answer_hi": "अपने बेटे से",
    "attempted": false,
    "selected": ""
},
{
    "num": 90,
    "question_en": "What does the poem 'The Empty Heart' indirectly criticize?",
    "question_hi": "'द एम्प्टी हार्ट' कविता परोक्ष रूप से किसकी आलोचना करती है?",
    "options_en": ["Modern materialism", "Traditional customs", "Social media", "Government policies"],
    "options_hi": ["आधुनिक भौतिकवाद", "परंपरागत रीति-रिवाज", "सोशल मीडिया", "सरकारी नीतियाँ"],
    "answer_en": "Modern materialism",
    "answer_hi": "आधुनिक भौतिकवाद",
    "attempted": false,
    "selected": ""
},
{
    "num": 91,
    "question_en": "What does the narrator do to help Gillu recover?",
    "question_hi": "गिल्लू को ठीक करने के लिए कथावाचक क्या करता है?",
    "options_en": ["Gives him water and medicine", "Takes him to a vet", "Leaves him alone", "Puts him in a cage"],
    "options_hi": ["उसे पानी और दवा देता है", "उसे पशु चिकित्सक के पास ले जाता है", "उसे अकेला छोड़ देता है", "उसे पिंजरे में डाल देता है"],
    "answer_en": "Gives him water and medicine",
    "answer_hi": "उसे पानी और दवा देता है",
    "attempted": false,
    "selected": ""
},
{
    "num": 92,
    "question_en": "In 'The Empty Heart', what does the poet long for?",
    "question_hi": "'द एम्प्टी हार्ट' में कवि किसकी चाह करता है?",
    "options_en": ["True emotions", "Money", "Fame", "Education"],
    "options_hi": ["सच्ची भावनाएँ", "धन", "प्रसिद्धि", "शिक्षा"],
    "answer_en": "True emotions",
    "answer_hi": "सच्ची भावनाएँ",
    "attempted": false,
    "selected": ""
},
{
    "num": 93,
    "question_en": "What is the tone of the poem 'Once Upon A Time'?",
    "question_hi": "'Once Upon A Time' कविता का स्वर क्या है?",
    "options_en": ["Nostalgic", "Joyful", "Humorous", "Angry"],
    "options_hi": ["स्मरणात्मक", "आनंदित", "हास्यपूर्ण", "क्रोधित"],
    "answer_en": "Nostalgic",
    "answer_hi": "स्मरणात्मक",
    "attempted": false,
    "selected": ""
},
{
    "num": 94,
    "question_en": "What does Malasha do to end the quarrel in 'Little Girl Wiser Than Men'?",
    "question_hi": "'Little Girl Wiser Than Men' में मलाशा झगड़े को समाप्त करने के लिए क्या करती है?",
    "options_en": ["Starts playing with Akoulya", "Cries", "Goes home", "Complains to elders"],
    "options_hi": ["अकोल्या के साथ खेलने लगती है", "रोने लगती है", "घर चली जाती है", "बड़ों से शिकायत करती है"],
    "answer_en": "Starts playing with Akoulya",
    "answer_hi": "अकोल्या के साथ खेलने लगती है",
    "attempted": false,
    "selected": ""
},
{
    "num": 95,
    "question_en": "What is the main emotion expressed in 'The Polythene Bag' poem?",
    "question_hi": "'The Polythene Bag' कविता में मुख्य भावना कौन सी है?",
    "options_en": ["Concern", "Happiness", "Excitement", "Pride"],
    "options_hi": ["चिंता", "खुशी", "उत्साह", "गर्व"],
    "answer_en": "Concern",
    "answer_hi": "चिंता",
    "attempted": false,
    "selected": ""
},
{
    "num": 96,
    "question_en": "Why does the narrator feel close to Gillu?",
    "question_hi": "कथावाचक गिल्लू के करीब क्यों महसूस करता है?",
    "options_en": ["They share an emotional bond", "He found him in the garden", "He likes animals", "He was forced to keep him"],
    "options_hi": ["उनके बीच भावनात्मक बंधन है", "उसे बगीचे में मिला था", "उसे जानवर पसंद हैं", "उसे मजबूरी में रखना पड़ा"],
    "answer_en": "They share an emotional bond",
    "answer_hi": "उनके बीच भावनात्मक बंधन है",
    "attempted": false,
    "selected": ""
},
{
    "num": 97,
    "question_en": "What change does the poet want in 'Once Upon A Time'?",
    "question_hi": "'Once Upon A Time' में कवि क्या बदलाव चाहता है?",
    "options_en": ["Return to true self", "Become wealthy", "Travel more", "Become famous"],
    "options_hi": ["अपने सच्चे रूप में लौटना", "धनी बनना", "अधिक यात्रा करना", "प्रसिद्ध बनना"],
    "answer_en": "Return to true self",
    "answer_hi": "अपने सच्चे रूप में लौटना",
    "attempted": false,
    "selected": ""
},
{
    "num": 98,
    "question_en": "What does 'Me and the Ecology Bit' highlight?",
    "question_hi": "'Me and the Ecology Bit' किस पर प्रकाश डालता है?",
    "options_en": ["Youth environmental responsibility", "Childhood memories", "Family relations", "School pressure"],
    "options_hi": ["युवाओं की पर्यावरणीय ज़िम्मेदारी", "बचपन की यादें", "पारिवारिक संबंध", "स्कूल का दबाव"],
    "answer_en": "Youth environmental responsibility",
    "answer_hi": "युवाओं की पर्यावरणीय ज़िम्मेदारी",
    "attempted": false,
    "selected": ""
},
{
    "num": 99,
    "question_en": "What makes Akoulya wise in the story?",
    "question_hi": "कहानी में अकोल्या को समझदार क्या बनाता है?",
    "options_en": ["She forgives and forgets easily", "She runs away", "She argues with adults", "She writes poems"],
    "options_hi": ["वह आसानी से माफ़ और भूल जाती है", "वह भाग जाती है", "वह बड़ों से बहस करती है", "वह कविताएँ लिखती है"],
    "answer_en": "She forgives and forgets easily",
    "answer_hi": "वह आसानी से माफ़ और भूल जाती है",
    "attempted": false,
    "selected": ""
},
{
    "num": 100,
    "question_en": "What is a key literary device used in 'The Empty Heart'?",
    "question_hi": "'The Empty Heart' में एक प्रमुख साहित्यिक उपकरण क्या है?",
    "options_en": ["Symbolism", "Alliteration", "Irony", "Metaphor"],
    "options_hi": ["प्रतीकवाद", "अनुप्रास", "विडंबना", "रूपक"],
    "answer_en": "Symbolism",
    "answer_hi": "प्रतीकवाद",
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
localStorage.setItem("results", JSON.stringify(results));

let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
if (viewResult) {
    window.location.href = "/Deshbord/category/test/submit-test.html";
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