const questions = [

        {
                "num": 1,
                "question_en": "What is the central theme of 'Meri Bachpan Ke Din'?",
                "question_hi": "मेरे बचपन के दिन में मुख्य विषय क्या है?",
                "options_en": ["Childhood memories", "Nature", "Love", "Patriotism"],
                "options_hi": ["बचपन की यादें", "प्रकृति", "प्रेम", "देशभक्ति"],
                "answer_en": "Childhood memories",
                "answer_hi": "बचपन की यादें",
                "attempted": false
        },
        {
                "num": 2,
                "question_en": "Which poetic device is used in 'उत्साह' by Nirala?",
                "question_hi": "निराला की 'उत्साह' में कौन-सा अलंकार प्रयुक्त हुआ है?",
                "options_en": ["Simile", "Metaphor", "Alliteration", "Personification"],
                "options_hi": ["उपमा", "रूपक", "अनुप्रास", "मानवीकरण"],
                "answer_en": "Personification",
                "answer_hi": "मानवीकरण",
                "attempted": false
        },
        {
                "num": 3,
                "question_en": "Who wrote the poem 'नारी को जाग्रत करो'?",
                "question_hi": "कविता 'नारी को जाग्रत करो' के लेखक कौन हैं?",
                "options_en": ["Suryakant Tripathi Nirala", "Makhanlal Chaturvedi", "Harivansh Rai Bachchan", "Premchand"],
                "options_hi": ["सूर्यकांत त्रिपाठी निराला", "माखनलाल चतुर्वेदी", "हरिवंश राय बच्चन", "प्रेमचंद"],
                "answer_en": "Suryakant Tripathi Nirala",
                "answer_hi": "सूर्यकांत त्रिपाठी निराला",
                "attempted": false
        },
        {
                "num": 4,
                "question_en": "Which poet is known for the poem 'बीती की यादें'?",
                "question_hi": "कविता 'बीती की यादें' के लेखक कौन हैं?",
                "options_en": ["Harivansh Rai Bachchan", "Nirala", "Makhanlal Chaturvedi", "Dinkar"],
                "options_hi": ["हरिवंश राय बच्चन", "निराला", "माखनलाल चतुर्वेदी", "दिनकर"],
                "answer_en": "Harivansh Rai Bachchan",
                "answer_hi": "हरिवंश राय बच्चन",
                "attempted": false
        },
        {
                "num": 5,
                "question_en": "What does the poem 'सपनों का संसार' reflect?",
                "question_hi": "कविता 'सपनों का संसार' क्या दर्शाती है?",
                "options_en": ["Hope", "Despair", "Reality", "Fantasies"],
                "options_hi": ["आशा", "निराशा", "वास्तविकता", "काल्पनिकता"],
                "answer_en": "Fantasies",
                "answer_hi": "काल्पनिकता",
                "attempted": false
        },
        {
                "num": 6,
                "question_en": "In which poem does the poet express the feeling of unity?",
                "question_hi": "किस कविता में कवि एकता की भावना व्यक्त करता है?",
                "options_en": ["मोरत्रता", "मैं और मेरा देश", "दूसरी क़िस्मत", "यात्रा का उद्देश्य"],
                "options_hi": ["मोरत्रता", "मैं और मेरा देश", "दूसरी क़िस्मत", "यात्रा का उद्देश्य"],
                "answer_en": "मैं और मेरा देश",
                "answer_hi": "मैं और मेरा देश",
                "attempted": false
        },
        {
                "num": 7,
                "question_en": "What is the main theme of 'वसंत ऋतु'?",
                "question_hi": "वसंत ऋतु का मुख्य विषय क्या है?",
                "options_en": ["Spring season", "Love", "Change of seasons", "Youth"],
                "options_hi": ["वसंत ऋतु", "प्रेम", "ऋतुओं का परिवर्तन", "युवावस्था"],
                "answer_en": "Spring season",
                "answer_hi": "वसंत ऋतु",
                "attempted": false
        },
        {
                "num": 8,
                "question_en": "Which poem reflects patriotism?",
                "question_hi": "किस कविता में देशभक्ति की भावना है?",
                "options_en": ["यात्रा का उद्देश्य", "सपनों का संसार", "नारी को जाग्रत करो", "मैं और मेरा देश"],
                "options_hi": ["यात्रा का उद्देश्य", "सपनों का संसार", "नारी को जाग्रत करो", "मैं और मेरा देश"],
                "answer_en": "मैं और मेरा देश",
                "answer_hi": "मैं और मेरा देश",
                "attempted": false
        },
        {
                "num": 9,
                "question_en": "What is the poetic form of 'ग़ज़ल'?",
                "question_hi": "ग़ज़ल की काव्य विधा क्या है?",
                "options_en": ["Couplet", "Ode", "Sonnet", "Lyric"],
                "options_hi": ["दोहा", "ओड", "सॉनेट", "गीत"],
                "answer_en": "Couplet",
                "answer_hi": "दोहा",
                "attempted": false
        },
        {
                "num": 10,
                "question_en": "Who wrote 'बच्चों की फ़ितरत'?",
                "question_hi": "'बच्चों की फ़ितरत' कविता के लेखक कौन हैं?",
                "options_en": ["Balkrishna Sharma", "Makhanlal Chaturvedi", "Nirala", "Dinkar"],
                "options_hi": ["बालकृष्ण शर्मा", "माखनलाल चतुर्वेदी", "निराला", "दिनकर"],
                "answer_en": "Balkrishna Sharma",
                "answer_hi": "बालकृष्ण शर्मा",
                "attempted": false
        },
        {
                "num": 11,
                "question_en": "What does the poem 'जोश का रंग' symbolize?",
                "question_hi": "कविता 'जोश का रंग' का प्रतीक क्या है?",
                "options_en": ["Patriotism", "Revolution", "Frenzy", "Happiness"],
                "options_hi": ["देशभक्ति", "क्रांति", "उत्साह", "खुशी"],
                "answer_en": "Revolution",
                "answer_hi": "क्रांति",
                "attempted": false
        },
        {
                "num": 12,
                "question_en": "Who wrote 'साहसिक क़दम'?",
                "question_hi": "'साहसिक क़दम' कविता के लेखक कौन हैं?",
                "options_en": ["Nirala", "Harivansh Rai Bachchan", "Biharilal Roy", "Ravindra Nath Tagore"],
                "options_hi": ["निराला", "हरिवंश राय बच्चन", "बिहारीलाल राय", "रवींद्रनाथ ठाकुर"],
                "answer_en": "Harivansh Rai Bachchan",
                "answer_hi": "हरिवंश राय बच्चन",
                "attempted": false
        },
        {
                "num": 13,
                "question_en": "In which poem does the poet describe the beauty of nature?",
                "question_hi": "किस कविता में कवि ने प्रकृति की सुंदरता का वर्णन किया है?",
                "options_en": ["वसंत ऋतु", "बीती की यादें", "नारी को जाग्रत करो", "सपनों का संसार"],
                "options_hi": ["वसंत ऋतु", "बीती की यादें", "नारी को जाग्रत करो", "सपनों का संसार"],
                "answer_en": "वसंत ऋतु",
                "answer_hi": "वसंत ऋतु",
                "attempted": false
        },
        {
                "num": 14,
                "question_en": "What is the meaning of the poem 'सपनों का संसार'?",
                "question_hi": "'सपनों का संसार' कविता का क्या अर्थ है?",
                "options_en": ["Hope and aspirations", "Fantasies and illusions", "Realism", "Dreams of love"],
                "options_hi": ["आशा और आकांक्षाएँ", "काल्पनिकता और भ्रांतियाँ", "वास्तविकता", "प्रेम के सपने"],
                "answer_en": "Fantasies and illusions",
                "answer_hi": "काल्पनिकता और भ्रांतियाँ",
                "attempted": false
        },
        {
                "num": 15,
                "question_en": "Which poetic device is used in the line 'सपनों के बादल'?",
                "question_hi": "'सपनों के बादल' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                "options_en": ["Metaphor", "Simile", "Alliteration", "Personification"],
                "options_hi": ["रूपक", "उपमा", "अनुप्रास", "मानवीकरण"],
                "answer_en": "Metaphor",
                "answer_hi": "रूपक",
                "attempted": false
        },
        {
                "num": 16,
                "question_en": "What is the significance of 'आत्मा का गीत' by Nirala?",
                "question_hi": "निराला की 'आत्मा का गीत' का महत्व क्या है?",
                "options_en": ["Spiritual awakening", "Love", "Nature", "Patriotism"],
                "options_hi": ["आध्यात्मिक जागरूकता", "प्रेम", "प्रकृति", "देशभक्ति"],
                "answer_en": "Spiritual awakening",
                "answer_hi": "आध्यात्मिक जागरूकता",
                "attempted": false
        },
        {
                "num": 17,
                "question_en": "Who wrote 'मोरत्रता'?",
                "question_hi": "'मोरत्रता' कविता के लेखक कौन हैं?",
                "options_en": ["Makhanlal Chaturvedi", "Nirala", "Dinkar", "Harivansh Rai Bachchan"],
                "options_hi": ["माखनलाल चतुर्वेदी", "निराला", "दिनकर", "हरिवंश राय बच्चन"],
                "answer_en": "Makhanlal Chaturvedi",
                "answer_hi": "माखनलाल चतुर्वेदी",
                "attempted": false
        },
        {
                "num": 18,
                "question_en": "What does the poem 'राजेंद्र बाबू' focus on?",
                "question_hi": "कविता 'राजेंद्र बाबू' का क्या फोकस है?",
                "options_en": ["Revolution", "Leadership", "Love", "Selflessness"],
                "options_hi": ["क्रांति", "नेतृत्व", "प्रेम", "निस्वार्थता"],
                "answer_en": "Leadership",
                "answer_hi": "नेतृत्व",
                "attempted": false
        },
        {
                "num": 19,
                "question_en": "What is the theme of 'ठेले का हिमालय'?",
                "question_hi": "'ठेले का हिमालय' कविता का विषय क्या है?",
                "options_en": ["Hard work", "Despair", "Patriotism", "Humanity"],
                "options_hi": ["मेहनत", "निराशा", "देशभक्ति", "मानवता"],
                "answer_en": "Hard work",
                "answer_hi": "मेहनत",
                "attempted": false
        },
        {
                "num": 20,
                "question_en": "Who wrote 'श्री गुरु नानक देव'?",
                "question_hi": "'श्री गुरु नानक देव' के लेखक कौन हैं?",
                "options_en": ["Bhai Gurdas", "Shah Hussain", "Guru Nanak", "Sheikh Farid"],
                "options_hi": ["भाई गुरदास", "शाह हुसैन", "गुरु नानक", "शेख फरिद"],
                "answer_en": "Bhai Gurdas",
                "answer_hi": "भाई गुरदास",
                "attempted": false
        },

        {
                "num": 21,
                "question_en": "What is the main theme of 'आत्मा का गीत'?",
                "question_hi": "'आत्मा का गीत' का मुख्य विषय क्या है?",
                "options_en": ["Spiritual awakening", "Love", "Patriotism", "Human suffering"],
                "options_hi": ["आध्यात्मिक जागरूकता", "प्रेम", "देशभक्ति", "मानव दुख"],
                "answer_en": "Spiritual awakening",
                "answer_hi": "आध्यात्मिक जागरूकता",
                "attempted": false
        },
        {
                "num": 22,
                "question_en": "Who wrote the poem 'यात्रा का उद्देश्य'?",
                "question_hi": "'यात्रा का उद्देश्य' कविता के लेखक कौन हैं?",
                "options_en": ["Harivansh Rai Bachchan", "Nirala", "Dinkar", "Makhanlal Chaturvedi"],
                "options_hi": ["हरिवंश राय बच्चन", "निराला", "दिनकर", "माखनलाल चतुर्वेदी"],
                "answer_en": "Dinkar",
                "answer_hi": "दिनकर",
                "attempted": false
        },
        {
                "num": 23,
                "question_en": "What poetic device is used in the poem 'मोरत्रता'?",
                "question_hi": "'मोरत्रता' कविता में कौन-सा अलंकार प्रयुक्त हुआ है?",
                "options_en": ["Simile", "Metaphor", "Alliteration", "Onomatopoeia"],
                "options_hi": ["उपमा", "रूपक", "अनुप्रास", "ध्वन्यात्मकता"],
                "answer_en": "Metaphor",
                "answer_hi": "रूपक",
                "attempted": false
        },
        {
                "num": 24,
                "question_en": "What does 'मैं और मेरा देश' symbolize?",
                "question_hi": "'मैं और मेरा देश' कविता का प्रतीक क्या है?",
                "options_en": ["Self-identity", "Patriotism", "Hope", "Despair"],
                "options_hi": ["स्वयं की पहचान", "देशभक्ति", "आशा", "निराशा"],
                "answer_en": "Patriotism",
                "answer_hi": "देशभक्ति",
                "attempted": false
        },
        {
                "num": 25,
                "question_en": "Who is the author of the poem 'वसंत ऋतु'?",
                "question_hi": "'वसंत ऋतु' कविता के लेखक कौन हैं?",
                "options_en": ["Makhanlal Chaturvedi", "Nirala", "Biharilal Roy", "Harivansh Rai Bachchan"],
                "options_hi": ["माखनलाल चतुर्वेदी", "निराला", "बिहारिलाल राय", "हरिवंश राय बच्चन"],
                "answer_en": "Makhanlal Chaturvedi",
                "answer_hi": "माखनलाल चतुर्वेदी",
                "attempted": false
        },
        {
                "num": 26,
                "question_en": "What is the main focus of the poem 'सपनों का संसार'?",
                "question_hi": "'सपनों का संसार' कविता का मुख्य उद्देश्य क्या है?",
                "options_en": ["Dreams and desires", "Love and emotions", "Nature", "Political thoughts"],
                "options_hi": ["सपने और इच्छाएँ", "प्रेम और भावनाएँ", "प्रकृति", "राजनीतिक विचार"],
                "answer_en": "Dreams and desires",
                "answer_hi": "सपने और इच्छाएँ",
                "attempted": false
        },
        {
                "num": 27,
                "question_en": "Which poetic device is used in the line 'हवा के संग बहे'?",
                "question_hi": "'हवा के संग बहे' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                "options_en": ["Personification", "Metaphor", "Simile", "Alliteration"],
                "options_hi": ["मानवीकरण", "रूपक", "उपमा", "अनुप्रास"],
                "answer_en": "Personification",
                "answer_hi": "मानवीकरण",
                "attempted": false
        },
        {
                "num": 28,
                "question_en": "Who wrote the poem 'श्री गुरु नानक देव'?",
                "question_hi": "'श्री गुरु नानक देव' कविता के लेखक कौन हैं?",
                "options_en": ["Bhai Gurdas", "Guru Nanak", "Sheikh Farid", "Bulleh Shah"],
                "options_hi": ["भाई गुरदास", "गुरु नानक", "शेख फरिद", "बुल्ला शाह"],
                "answer_en": "Bhai Gurdas",
                "answer_hi": "भाई गुरदास",
                "attempted": false
        },
        {
                "num": 29,
                "question_en": "What does the poem 'ठेले का हिमालय' convey?",
                "question_hi": "'ठेले का हिमालय' कविता क्या व्यक्त करती है?",
                "options_en": ["The burden of hard work", "The beauty of nature", "The pain of love", "The need for social justice"],
                "options_hi": ["मेहनत का बोझ", "प्रकृति की सुंदरता", "प्रेम का दुख", "सामाजिक न्याय की आवश्यकता"],
                "answer_en": "The burden of hard work",
                "answer_hi": "मेहनत का बोझ",
                "attempted": false
        },
        {
                "num": 30,
                "question_en": "What is the primary message of the poem 'राजेंद्र बाबू'?",
                "question_hi": "'राजेंद्र बाबू' कविता का प्रमुख संदेश क्या है?",
                "options_en": ["Leadership and vision", "Love and compassion", "Bravery in war", "Knowledge and wisdom"],
                "options_hi": ["नेतृत्व और दृष्टिकोण", "प्रेम और करुणा", "युद्ध में साहस", "ज्ञान और बुद्धिमत्ता"],
                "answer_en": "Leadership and vision",
                "answer_hi": "नेतृत्व और दृष्टिकोण",
                "attempted": false
        },
        {
                "num": 31,
                "question_en": "Who wrote 'पाकिस्तानी कवि'?",
                "question_hi": "'पाकिस्तानी कवि' कविता के लेखक कौन हैं?",
                "options_en": ["Faiz Ahmad Faiz", "Gulzar", "Allama Iqbal", "Ahmed Faraz"],
                "options_hi": ["फैज़ अहमद फैज़", "गुलजार", "अल्लामा इकबाल", "अहमद फराज़"],
                "answer_en": "Faiz Ahmad Faiz",
                "answer_hi": "फैज़ अहमद फैज़",
                "attempted": false
        },
        {
                "num": 32,
                "question_en": "Which poetic device is used in the line 'सागर के गहरे पानी में'?",
                "question_hi": "'सागर के गहरे पानी में' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                "options_en": ["Simile", "Metaphor", "Personification", "Alliteration"],
                "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अनुप्रास"],
                "answer_en": "Metaphor",
                "answer_hi": "रूपक",
                "attempted": false
        },
        {
                "num": 33,
                "question_en": "What is the focus of the poem 'आत्मा का गीत' by Nirala?",
                "question_hi": "निराला की 'आत्मा का गीत' कविता का फोकस क्या है?",
                "options_en": ["Soul's awakening", "Destruction", "Life's struggles", "Death"],
                "options_hi": ["आत्मा का जागरण", "विनाश", "जीवन के संघर्ष", "मृत्यु"],
                "answer_en": "Soul's awakening",
                "answer_hi": "आत्मा का जागरण",
                "attempted": false
        },
        {
                "num": 34,
                "question_en": "Who is the poet of the famous poem 'काव्य काव्य है'?",
                "question_hi": "'काव्य काव्य है' कविता के लेखक कौन हैं?",
                "options_en": ["Nirala", "Harivansh Rai Bachchan", "Premchand", "Makhanlal Chaturvedi"],
                "options_hi": ["निराला", "हरिवंश राय बच्चन", "प्रेमचंद", "माखनलाल चतुर्वेदी"],
                "answer_en": "Nirala",
                "answer_hi": "निराला",
                "attempted": false
        },
        {
                "num": 35,
                "question_en": "What poetic device is used in the line 'चाँद की चाँदनी में'?",
                "question_hi": "'चाँद की चाँदनी में' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                "options_en": ["Simile", "Metaphor", "Personification", "Alliteration"],
                "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अनुप्रास"],
                "answer_en": "Personification",
                "answer_hi": "मानवीकरण",
                "attempted": false
        },
        {
                "num": 36,
                "question_en": "Who wrote the poem 'हरिवंश राय बच्चन'?",
                "question_hi": "'हरिवंश राय बच्चन' कविता के लेखक कौन हैं?",
                "options_en": ["Harivansh Rai Bachchan", "Nirala", "Biharilal Roy", "Dinkar"],
                "options_hi": ["हरिवंश राय बच्चन", "निराला", "बिहारिलाल राय", "दिनकर"],
                "answer_en": "Harivansh Rai Bachchan",
                "answer_hi": "हरिवंश राय बच्चन",
                "attempted": false
        },
        {
                "num": 37,
                "question_en": "What is the main message of the poem 'सपनों का संसार'?",
                "question_hi": "'सपनों का संसार' कविता का मुख्य संदेश क्या है?",
                "options_en": ["Dreams and hopes", "Illusion and reality", "Love and longing", "Life and death"],
                "options_hi": ["सपने और आकांक्षाएँ", "भ्रांति और वास्तविकता", "प्रेम और इच्छा", "जीवन और मृत्यु"],
                "answer_en": "Dreams and hopes",
                "answer_hi": "सपने और आकांक्षाएँ",
                "attempted": false
        },
        {
                "num": 38,
                "question_en": "Who wrote the poem 'वो लौटे हैं'?",
                "question_hi": "'वो लौटे हैं' कविता के लेखक कौन हैं?",
                "options_en": ["Nirala", "Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi"],
                "options_hi": ["निराला", "हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी"],
                "answer_en": "Dinkar",
                "answer_hi": "दिनकर",
                "attempted": false
        },
        {
                "num": 39,
                "question_en": "What poetic device is used in the line 'पंखों से खुला आसमान'?",
                "question_hi": "'पंखों से खुला आसमान' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                "options_en": ["Simile", "Metaphor", "Personification", "Alliteration"],
                "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अनुप्रास"],
                "answer_en": "Personification",
                "answer_hi": "मानवीकरण",
                "attempted": false
        },

        {
                "num": 40,
                "question_en": "What is the main theme of 'मोरत्रता' by Nirala?",
                "question_hi": "निराला की 'मोरत्रता' का मुख्य विषय क्या है?",
                "options_en": ["Nature", "Courage", "Life's struggles", "Patriotism"],
                "options_hi": ["प्रकृति", "साहस", "जीवन के संघर्ष", "देशभक्ति"],
                "answer_en": "Life's struggles",
                "answer_hi": "जीवन के संघर्ष",
                "attempted": false
        },
        {
                "num": 41,
                "question_en": "Who wrote the poem 'देश के दुष्मन'?",
                "question_hi": "'देश के दुष्मन' कविता के लेखक कौन हैं?",
                "options_en": ["Bulleh Shah", "Shah Hussain", "Warish Shah", "Bhai Gurdas"],
                "options_hi": ["बुल्ला शाह", "शाह हुसैन", "वारिश शाह", "भाई गुरदास"],
                "answer_en": "Warish Shah",
                "answer_hi": "वारिश शाह",
                "attempted": false
        },
        {
                "num": 42,
                "question_en": "What does 'वसंत ऋतु' symbolize?",
                "question_hi": "'वसंत ऋतु' का प्रतीक क्या है?",
                "options_en": ["Spring", "Love", "Renewal", "Peace"],
                "options_hi": ["वसंत", "प्रेम", "नवजीवन", "शांति"],
                "answer_en": "Renewal",
                "answer_hi": "नवजीवन",
                "attempted": false
        },
        {
                "num": 43,
                "question_en": "Which poet is known for the poem 'माँ'?",
                "question_hi": "'माँ' कविता के लेखक कौन हैं?",
                "options_en": ["Makhanlal Chaturvedi", "Harivansh Rai Bachchan", "Nirala", "Dinkar"],
                "options_hi": ["माखनलाल चतुर्वेदी", "हरिवंश राय बच्चन", "निराला", "दिनकर"],
                "answer_en": "Harivansh Rai Bachchan",
                "answer_hi": "हरिवंश राय बच्चन",
                "attempted": false
        },
        {
                "num": 44,
                "question_en": "What is the theme of 'सपनों का संसार'?",
                "question_hi": "'सपनों का संसार' कविता का विषय क्या है?",
                "options_en": ["Dreams and hopes", "Illusion and reality", "Life's struggles", "Patriotism"],
                "options_hi": ["सपने और आकांक्षाएँ", "भ्रांति और वास्तविकता", "जीवन के संघर्ष", "देशभक्ति"],
                "answer_en": "Illusion and reality",
                "answer_hi": "भ्रांति और वास्तविकता",
                "attempted": false
        },
        {
                "num": 45,
                "question_en": "What poetic device is used in 'सागर के गहरे पानी में'?",
                "question_hi": "'सागर के गहरे पानी में' में कौन-सा अलंकार प्रयुक्त हुआ है?",
                "options_en": ["Simile", "Metaphor", "Alliteration", "Onomatopoeia"],
                "options_hi": ["उपमा", "रूपक", "अनुप्रास", "ध्वन्यात्मकता"],
                "answer_en": "Metaphor",
                "answer_hi": "रूपक",
                "attempted": false
        },
        {
                "num": 46,
                "question_en": "Who wrote the poem 'देश के दुष्मन'?",
                "question_hi": "'देश के दुष्मन' कविता के लेखक कौन हैं?",
                "options_en": ["Bhai Gurdas", "Shah Hussain", "Bulleh Shah", "Warish Shah"],
                "options_hi": ["भाई गुरदास", "शाह हुसैन", "बुल्ला शाह", "वारिश शाह"],
                "answer_en": "Bhai Gurdas",
                "answer_hi": "भाई गुरदास",
                "attempted": false
        },
        {
                "num": 47,
                "question_en": "Which poet wrote 'काव्य काव्य है'?",
                "question_hi": "'काव्य काव्य है' कविता के लेखक कौन हैं?",
                "options_en": ["Nirala", "Makhanlal Chaturvedi", "Dinkar", "Harivansh Rai Bachchan"],
                "options_hi": ["निराला", "माखनलाल चतुर्वेदी", "दिनकर", "हरिवंश राय बच्चन"],
                "answer_en": "Nirala",
                "answer_hi": "निराला",
                "attempted": false
        },
        {
                "num": 48,
                "question_en": "What is the focus of 'यात्रा का उद्देश्य'?",
                "question_hi": "'यात्रा का उद्देश्य' कविता का फोकस क्या है?",
                "options_en": ["Exploration", "Spiritual journey", "Love", "Political thoughts"],
                "options_hi": ["अन्वेषण", "आध्यात्मिक यात्रा", "प्रेम", "राजनीतिक विचार"],
                "answer_en": "Spiritual journey",
                "answer_hi": "आध्यात्मिक यात्रा",
                "attempted": false
        },
        {
                "num": 49,
                "question_en": "Who wrote the poem 'आत्मा का गीत'?",
                "question_hi": "'आत्मा का गीत' कविता के लेखक कौन हैं?",
                "options_en": ["Nirala", "Harivansh Rai Bachchan", "Makhanlal Chaturvedi", "Dinkar"],
                "options_hi": ["निराला", "हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी", "दिनकर"],
                "answer_en": "Nirala",
                "answer_hi": "निराला",
                "attempted": false
        },
        {
                "num": 50,
                "question_en": "What poetic device is used in the line 'नदी के किनारे बहे'?",
                "question_hi": "'नदी के किनारे बहे' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                "options_en": ["Simile", "Personification", "Metaphor", "Alliteration"],
                "options_hi": ["उपमा", "मानवीकरण", "रूपक", "अनुप्रास"],
                "answer_en": "Personification",
                "answer_hi": "मानवीकरण",
                "attempted": false
        },









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
