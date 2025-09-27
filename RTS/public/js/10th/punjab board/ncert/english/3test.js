
const questions = [



        {
                "num": 1,
                "question_en": "Fill in the preposition: 'He is good _____ mathematics.'",
                "question_hi": "सही संबंधबोधक भरें: 'वह गणित _____ अच्छा है।'",
                "options_en": ["at", "in", "on", "for"],
                "options_hi": ["पर", "में", "पर", "के लिए"],
                "answer_en": "at",
                "answer_hi": "पर",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 2,
                "question_en": "Correct the sentence: 'Neither of the answers are correct.'",
                "question_hi": "वाक्य सही करें: 'कोई भी उत्तर सही नहीं हैं।'",
                "options_en": ["Neither of the answers is correct.", "Neither of the answers are correct.", "Neither answer are correct.", "Neither answer is correct."],
                "options_hi": ["कोई भी उत्तर सही नहीं है।", "कोई भी उत्तर सही नहीं हैं।", "कोई उत्तर सही नहीं हैं।", "कोई उत्तर सही नहीं है।"],
                "answer_en": "Neither of the answers is correct.",
                "answer_hi": "कोई भी उत्तर सही नहीं है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 3,
                "question_en": "Identify the conjunction: 'Although it was late, they continued working.'",
                "question_hi": "संयोजक पहचानें: 'हालांकि देर हो चुकी थी, _____ उन्होंने काम करना जारी रखा।'",
                "options_en": ["Although", "it", "was", "late"],
                "options_hi": ["हालांकि", "यह", "थी", "देर"],
                "answer_en": "Although",
                "answer_hi": "हालांकि",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 4,
                "question_en": "Choose the correct article: 'This is _____ interesting book.'",
                "question_hi": "सही उपपद चुनें: 'यह _____ दिलचस्प किताब है।'",
                "options_en": ["a", "an", "the", "no article"],
                "options_hi": ["एक", "एक (स्वर से पहले)", "विशिष्ट", "कोई उपपद नहीं"],
                "answer_en": "an",
                "answer_hi": "एक (स्वर से पहले)",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 5,
                "question_en": "Convert to passive voice: 'The dog chased the cat.'",
                "question_hi": "कर्मवाच्य में बदलें: 'कुत्ते ने बिल्ली का पीछा किया।'",
                "options_en": ["The cat chased the dog.", "The cat was chased by the dog.", "The dog was chased by the cat.", "The cat is chased by the dog."],
                "options_hi": ["बिल्ली ने कुत्ते का पीछा किया।", "बिल्ली का कुत्ते द्वारा पीछा किया गया।", "कुत्ते का बिल्ली द्वारा पीछा किया गया।", "बिल्ली का कुत्ते द्वारा पीछा किया जाता है।"],
                "answer_en": "The cat was chased by the dog.",
                "answer_hi": "बिल्ली का कुत्ते द्वारा पीछा किया गया।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 6,
                "question_en": "Identify the gerund: 'Reading helps you learn.'",
                "question_hi": "क्रियावाचक संज्ञा पहचानें: 'पढ़ना आपको सीखने में मदद करता है।'",
                "options_en": ["Reading", "helps", "you", "learn"],
                "options_hi": ["पढ़ना", "मदद करता है", "आपको", "सीखना"],
                "answer_en": "Reading",
                "answer_hi": "पढ़ना",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 7,
                "question_en": "Choose the correct pronoun: 'The decision is _____.' (belonging to them)",
                "question_hi": "सही सर्वनाम चुनें: 'यह निर्णय _____ है।' (उनका)",
                "options_en": ["they", "them", "their", "theirs"],
                "options_hi": ["वे", "उन्हें", "उनका", "उनका"],
                "answer_en": "theirs",
                "answer_hi": "उनका",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 8,
                "question_en": "Fill in the adverb: 'He speaks _____ English.'",
                "question_hi": "क्रिया-विशेषण भरें: 'वह _____ अंग्रेजी बोलता है।'",
                "options_en": ["good", "well", "better", "best"],
                "options_hi": ["अच्छा", "अच्छी तरह से", "बेहतर", "सबसे अच्छा"],
                "answer_en": "well",
                "answer_hi": "अच्छी तरह से",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 9,
                "question_en": "Correct the error: 'My family are very supportive.'",
                "question_hi": "त्रुटि सुधारें: 'मेरा परिवार बहुत सहायक हैं।'",
                "options_en": ["My family is very supportive.", "My family are very supportive.", "My families are very supportive.", "My family be very supportive."],
                "options_hi": ["मेरा परिवार बहुत सहायक है।", "मेरा परिवार बहुत सहायक हैं।", "मेरे परिवार बहुत सहायक हैं।", "मेरा परिवार बहुत सहायक हो।"],
                "answer_en": "My family is very supportive.",
                "answer_hi": "मेरा परिवार बहुत सहायक है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 10,
                "question_en": "Identify the clause: 'If it rains, we will stay home.'",
                "question_hi": "उपवाक्य पहचानें: 'अगर बारिश होती है, _____ हम घर पर रहेंगे।'",
                "options_en": ["If it rains", "we will stay home", "it rains", "we will stay"],
                "options_hi": ["अगर बारिश होती है", "हम घर पर रहेंगे", "बारिश होती है", "हम रहेंगे"],
                "answer_en": "If it rains",
                "answer_hi": "अगर बारिश होती है",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 11,
                "question_en": "Choose the synonym for 'brave':",
                "question_hi": "'बहादुर' का समानार्थी शब्द चुनें:",
                "options_en": ["timid", "cowardly", "courageous", "fearful"],
                "options_hi": ["डरपोक", "कायर", "साहसी", "भयभीत"],
                "answer_en": "courageous",
                "answer_hi": "साहसी",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 12,
                "question_en": "Fill in the blank with the correct form of the verb: 'She _____ (sing) beautifully.'",
                "question_hi": "क्रिया के सही रूप से रिक्त स्थान भरें: 'वह सुंदर _____ (गाना)।'",
                "options_en": ["sing", "sings", "sang", "singing"],
                "options_hi": ["गाना", "गाती है", "गाया", "गा रही है"],
                "answer_en": "sings",
                "answer_hi": "गाती है",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 13,
                "question_en": "Identify the adjective in the sentence: 'They live in a big house.'",
                "question_hi": "वाक्य में विशेषण पहचानें: 'वे एक बड़े घर में रहते हैं।'",
                "options_en": ["They", "live", "in", "big"],
                "options_hi": ["वे", "रहते हैं", "में", "बड़े"],
                "answer_en": "big",
                "answer_hi": "बड़े",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 14,
                "question_en": "Choose the antonym for 'easy':",
                "question_hi": "'आसान' का विलोम शब्द चुनें:",
                "options_en": ["simple", "difficult", "effortless", "smooth"],
                "options_hi": ["सरल", "कठिन", "आसान", "चिकना"],
                "answer_en": "difficult",
                "answer_hi": "कठिन",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 15,
                "question_en": "Combine the sentences using a suitable conjunction: 'It was raining. We stayed indoors.'",
                "question_hi": "उपयुक्त योजक का उपयोग करके वाक्यों को मिलाएं: 'बारिश हो रही थी। हम अंदर ही रहे।'",
                "options_en": ["It was raining and we stayed indoors.", "It was raining so we stayed indoors.", "It was raining but we stayed indoors.", "It was raining or we stayed indoors."],
                "options_hi": ["बारिश हो रही थी और हम अंदर ही रहे।", "बारिश हो रही थी इसलिए हम अंदर ही रहे।", "बारिश हो रही थी लेकिन हम अंदर ही रहे।", "बारिश हो रही थी या हम अंदर ही रहे।"],
                "answer_en": "It was raining so we stayed indoors.",
                "answer_hi": "बारिश हो रही थी इसलिए हम अंदर ही रहे।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 16,
                "question_en": "Fill in the correct preposition: 'The meeting is _____ 3 PM.'",
                "question_hi": "सही संबंधबोधक भरें: 'बैठक 3 बजे _____ है।'",
                "options_en": ["in", "on", "at", "by"],
                "options_hi": ["में", "पर", "पर (समय)", "तक"],
                "answer_en": "at",
                "answer_hi": "पर (समय)",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 17,
                "question_en": "Change to indirect speech: 'He said to me, \"Where are you going?\"'",
                "question_hi": "अप्रत्यक्ष कथन में बदलें: 'उसने मुझसे कहा, \"तुम कहाँ जा रहे हो?\"'",
                "options_en": ["He asked me where I am going.", "He asked me where I was going.", "He asked me where are you going.", "He told me where I was going."],
                "options_hi": ["उसने मुझसे पूछा कि मैं कहाँ जा रहा हूँ।", "उसने मुझसे पूछा कि मैं कहाँ जा रहा था।", "उसने मुझसे पूछा कि तुम कहाँ जा रहे हो।", "उसने मुझे बताया कि मैं कहाँ जा रहा था।"],
                "answer_en": "He asked me where I was going.",
                "answer_hi": "उसने मुझसे पूछा कि मैं कहाँ जा रहा था।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 18,
                "question_en": "Identify the type of sentence: 'Close the door.'",
                "question_hi": "वाक्य का प्रकार पहचानें: 'दरवाजा बंद करो।'",
                "options_en": ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
                "options_hi": ["घोषणात्मक", "प्रश्नवाचक", "आज्ञासूचक", "विस्मयादिबोधक"],
                "answer_en": "Imperative",
                "answer_hi": "आज्ञासूचक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 19,
                "question_en": "Choose the correctly spelt word:",
                "question_hi": "सही वर्तनी वाला शब्द चुनें:",
                "options_en": ["separate", "seperate", "separete", "separte"],
                "options_hi": ["सेपरेट", "सेपरेट", "सेपरेट", "सेपरेट"],
                "answer_en": "separate",
                "answer_hi": "सेपरेट",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 20,
                "question_en": "Form the plural of 'tooth':",
                "question_hi": "'दाँत' का बहुवचन रूप बनाइए:",
                "options_en": ["tooths", "teethes", "teeth", "tooth's"],
                "options_hi": ["टूथ्स", "टीथीज", "टीथ", "टूथ का"],
                "answer_en": "teeth",
                "answer_hi": "टीथ",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 21,
                "question_en": "Identify the subject in the sentence: 'The tall building collapsed.'",
                "question_hi": "वाक्य में कर्ता पहचानें: 'ऊँची इमारत ढह गई।'",
                "options_en": ["The", "tall", "building", "collapsed"],
                "options_hi": ["वह", "ऊँची", "इमारत", "ढह गई"],
                "answer_en": "The tall building",
                "answer_hi": "ऊँची इमारत",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 22,
                "question_en": "Fill in the correct verb form: 'They _____ (watch) a movie tonight.'",
                "question_hi": "क्रिया का सही रूप भरें: 'वे आज रात एक फिल्म _____ (देखना)।'",
                "options_en": ["watch", "watches", "watched", "are watching"],
                "options_hi": ["देखना", "देखता है", "देखा", "देख रहे हैं"],
                "answer_en": "are watching",
                "answer_hi": "देख रहे हैं",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 23,
                "question_en": "Choose the correct article: 'She is _____ only child.'",
                "question_hi": "सही उपपद चुनें: 'वह _____ इकलौती संतान है।'",
                "options_en": ["a", "an", "the", "no article"],
                "options_hi": ["एक", "एक (स्वर से पहले)", "विशिष्ट", "कोई उपपद नहीं"],
                "answer_en": "the",
                "answer_hi": "विशिष्ट",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 24,
                "question_en": "Identify the adverb in the sentence: 'She spoke softly.'",
                "question_hi": "वाक्य में क्रिया-विशेषण पहचानें: 'वह धीरे से बोली।'",
                "options_en": ["She", "spoke", "softly", "."],
                "options_hi": ["वह", "बोली", "धीरे से", "।"],
                "answer_en": "softly",
                "answer_hi": "धीरे से",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 25,
                "question_en": "Form the possessive case of 'children':",
                "question_hi": "'बच्चे' का संबंध कारक रूप बनाइए:",
                "options_en": ["childrens", "children's", "childrens'", "child's"],
                "options_hi": ["चिल्ड्रन्स", "चिल्ड्रन्स का", "चिल्ड्रन्स'", "बच्चे का"],
                "answer_en": "children's",
                "answer_hi": "चिल्ड्रन्स का",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 26,
                "question_en": "Fill in the blank with the correct preposition: 'The picture is hanging _____ the wall.'",
                "question_hi": "सही संबंधबोधक से रिक्त स्थान भरें: 'तस्वीर दीवार _____ लटकी हुई है।'",
                "options_en": ["in", "on", "at", "under"],
                "options_hi": ["में", "पर", "पर (स्थान)", "के नीचे"],
                "answer_en": "on",
                "answer_hi": "पर",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 27,
                "question_en": "Change to passive voice: 'They have built a new school.'",
                "question_hi": "कर्मवाच्य में बदलें: 'उन्होंने एक नया स्कूल बनाया है।'",
                "options_en": ["A new school has built by them.", "A new school was built by them.", "A new school has been built by them.", "They have been built a new school."],
                "options_hi": ["एक नया स्कूल उनके द्वारा बनाया गया है।", "एक नया स्कूल उनके द्वारा बनाया गया था।", "एक नया स्कूल उनके द्वारा बनाया जा चुका है।", "उन्होंने एक नया स्कूल बनाया जा रहा है।"],
                "answer_en": "A new school has been built by them.",
                "answer_hi": "एक नया स्कूल उनके द्वारा बनाया जा चुका है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 28,
                "question_en": "Identify the conjunction: 'He is clever and hardworking.'",
                "question_hi": "संयोजक पहचानें: 'वह चालाक और मेहनती है।'",
                "options_en": ["He", "is", "and", "hardworking"],
                "options_hi": ["वह", "है", "और", "मेहनती"],
                "answer_en": "and",
                "answer_hi": "और",
                "attempted": false,
                "selected": ""
        },

        {
                "num": 29,
                "question_en": "Choose the synonym for 'clever':",
                "question_hi": "'चालाक' का समानार्थी शब्द चुनें:",
                "options_en": ["dull", "stupid", "intelligent", "foolish"],
                "options_hi": ["सुस्त", "बेवकूफ", "बुद्धिमान", "मूर्ख"],
                "answer_en": "intelligent",
                "answer_hi": "बुद्धिमान",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 30,
                "question_en": "Correct the sentence: 'Each girl have a pen.'",
                "question_hi": "वाक्य सही करें: 'प्रत्येक लड़की _____ एक पेन है।'",
                "options_en": ["Each girl has a pen.", "Each girl have a pen.", "Each of the girl has a pen.", "Each of the girl have a pen."],
                "options_hi": ["प्रत्येक लड़की के पास एक पेन है।", "प्रत्येक लड़की के पास एक पेन हैं।", "प्रत्येक लड़की में से एक के पास एक पेन है।", "प्रत्येक लड़की में से एक के पास एक पेन हैं।"],
                "answer_en": "Each girl has a pen.",
                "answer_hi": "प्रत्येक लड़की के पास एक पेन है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 31,
                "question_en": "Identify the adjective in the sentence: 'He is a famous actor.'",
                "question_hi": "वाक्य में विशेषण पहचानें: 'वह एक प्रसिद्ध अभिनेता है।'",
                "options_en": ["He", "is", "a", "famous"],
                "options_hi": ["वह", "है", "एक", "प्रसिद्ध"],
                "answer_en": "famous",
                "answer_hi": "प्रसिद्ध",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 32,
                "question_en": "Choose the antonym for 'bright':",
                "question_hi": "'चमकदार' का विलोम शब्द चुनें:",
                "options_en": ["shiny", "glowing", "dull", "radiant"],
                "options_hi": ["चमकदार", "चमकता हुआ", "सुस्त", "तेजस्वी"],
                "answer_en": "dull",
                "answer_hi": "सुस्त",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 33,
                "question_en": "Combine the sentences using a suitable conjunction: 'She is tired. However, she continues to work.'",
                "question_hi": "उपयुक्त योजक का उपयोग करके वाक्यों को मिलाएं: 'वह थकी हुई है। हालाँकि, वह काम करना जारी रखती है।'",
                "options_en": ["She is tired and she continues to work.", "She is tired but she continues to work.", "She is tired so she continues to work.", "She is tired or she continues to work."],
                "options_hi": ["वह थकी हुई है और वह काम करना जारी रखती है।", "वह थकी हुई है लेकिन वह काम करना जारी रखती है।", "वह थकी हुई है इसलिए वह काम करना जारी रखती है।", "वह थकी हुई है या वह काम करना जारी रखती है।"],
                "answer_en": "She is tired but she continues to work.",
                "answer_hi": "वह थकी हुई है लेकिन वह काम करना जारी रखती है।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 34,
                "question_en": "Fill in the correct preposition: 'The cat jumped _____ the chair.'",
                "question_hi": "सही संबंधबोधक भरें: 'बिल्ली कुर्सी _____ कूद गई।'",
                "options_en": ["in", "on", "over", "at"],
                "options_hi": ["में", "पर", "ऊपर से", "पर (स्थान)"],
                "answer_en": "over",
                "answer_hi": "ऊपर से",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 35,
                "question_en": "Change to indirect speech: 'He exclaimed, \"What a surprise!\"'",
                "question_hi": "अप्रत्यक्ष कथन में बदलें: 'उसने विस्मय से कहा, \"कितना आश्चर्य!\"'",
                "options_en": ["He exclaimed that it was a surprise.", "He exclaimed what a surprise it was.", "He exclaimed that what a surprise it is.", "He exclaimed it was a surprise."],
                "options_hi": ["उसने कहा कि यह एक आश्चर्य था।", "उसने विस्मय से कहा कि यह कितना आश्चर्य था।", "उसने कहा कि यह कितना आश्चर्य है।", "उसने कहा कि यह एक आश्चर्य था।"],
                "answer_en": "He exclaimed that it was a surprise.",
                "answer_hi": "उसने कहा कि यह एक आश्चर्य था।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 36,
                "question_en": "Identify the type of sentence: 'Have you finished your work?'",
                "question_hi": "वाक्य का प्रकार पहचानें: 'क्या तुमने अपना काम पूरा कर लिया है?'",
                "options_en": ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
                "options_hi": ["घोषणात्मक", "प्रश्नवाचक", "आज्ञासूचक", "विस्मयादिबोधक"],
                "answer_en": "Interrogative",
                "answer_hi": "प्रश्नवाचक",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 37,
                "question_en": "Choose the correctly spelt word:",
                "question_hi": "सही वर्तनी वाला शब्द चुनें:",
                "options_en": ["neccessary", "necessary", "necesary", "necessery"],
                "options_hi": ["नेसेसरी", "नेसेसरी", "नेसेसरी", "नेसेसरी"],
                "answer_en": "necessary",
                "answer_hi": "नेसेसरी",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 38,
                "question_en": "Form the plural of 'foot':",
                "question_hi": "'पैर' का बहुवचन रूप बनाइए:",
                "options_en": ["foots", "feets", "feet", "foot's"],
                "options_hi": ["फूट्स", "फीट्स", "फीट", "फुट का"],
                "answer_en": "feet",
                "answer_hi": "फीट",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 39,
                "question_en": "Identify the subject in the sentence: 'The flowers in the vase are beautiful.'",
                "question_hi": "वाक्य में कर्ता पहचानें: 'फूल जो फूलदान में हैं, सुंदर हैं।'",
                "options_en": ["The flowers", "in the vase", "are beautiful", "The vase"],
                "options_hi": ["फूल", "फूलदान में", "सुंदर हैं", "फूलदान"],
                "answer_en": "The flowers",
                "answer_hi": "फूल",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 40,
                "question_en": "Fill in the correct verb form: 'She _____ (travel) abroad next month.'",
                "question_hi": "क्रिया का सही रूप भरें: 'वह अगले महीने विदेश _____ (यात्रा करना)।'",
                "options_en": ["travel", "travels", "traveled", "is traveling"],
                "options_hi": ["यात्रा करना", "यात्रा करती है", "यात्रा की", "यात्रा कर रही है"],
                "answer_en": "is traveling",
                "answer_hi": "यात्रा कर रही है",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 41,
                "question_en": "Choose the correct article: 'He is _____ engineer.'",
                "question_hi": "सही उपपद चुनें: 'वह _____ इंजीनियर है।'",
                "options_en": ["a", "an", "the", "no article"],
                "options_hi": ["एक", "एक (स्वर से पहले)", "विशिष्ट", "कोई उपपद नहीं"],
                "answer_en": "an",
                "answer_hi": "एक (स्वर से पहले)",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 42,
                "question_en": "Identify the adverb in the sentence: 'They played happily.'",
                "question_hi": "वाक्य में क्रिया-विशेषण पहचानें: 'वे खुशी से खेले।'",
                "options_en": ["They", "played", "happily", "."],
                "options_hi": ["वे", "खेले", "खुशी से", "।"],
                "answer_en": "happily",
                "answer_hi": "खुशी से",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 43,
                "question_en": "Form the possessive case of 'company':",
                "question_hi": "'कंपनी' का संबंध कारक रूप बनाइए:",
                "options_en": ["companies", "company's", "companies'", "companiess"],
                "options_hi": ["कंपनियां", "कंपनी का", "कंपनियों का", "कंपनीज़"],
                "answer_en": "company's",
                "answer_hi": "कंपनी का",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 44,
                "question_en": "Fill in the blank with the correct preposition: 'The keys are _____ my pocket.'",
                "question_hi": "सही संबंधबोधक से रिक्त स्थान भरें: 'चाबियाँ मेरी जेब _____ हैं।'",
                "options_en": ["on", "at", "in", "by"],
                "options_hi": ["पर", "पर (स्थान)", "में", "द्वारा"],
                "answer_en": "in",
                "answer_hi": "में",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 45,
                "question_en": "Change to passive voice: 'The wind blew the leaves.'",
                "question_hi": "कर्मवाच्य में बदलें: 'हवा ने पत्तों को उड़ा दिया।'",
                "options_en": ["The leaves blew the wind.", "The leaves were blown by the wind.", "The wind was blown by the leaves.", "The leaves are blown by the wind."],
                "options_hi": ["पत्ते ने हवा को उड़ा दिया।", "पत्ते हवा द्वारा उड़ा दिए गए।", "हवा पत्तों द्वारा उड़ाई गई।", "पत्ते हवा द्वारा उड़ाए जाते हैं।"],
                "answer_en": "The leaves were blown by the wind.",
                "answer_hi": "पत्ते हवा द्वारा उड़ा दिए गए।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 46,
                "question_en": "Identify the conjunction: 'He is neither rich nor famous.'",
                "question_hi": "संयोजक पहचानें: 'वह न तो अमीर है और न ही प्रसिद्ध।'",
                "options_en": ["He", "neither...nor", "rich", "famous"],
                "options_hi": ["वह", "न तो...न ही", "अमीर", "प्रसिद्ध"],
                "answer_en": "neither...nor",
                "answer_hi": "न तो...न ही",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 47,
                "question_en": "Choose the synonym for 'begin':",
                "question_hi": "'शुरू करना' का समानार्थी शब्द चुनें:",
                "options_en": ["end", "finish", "start", "conclude"],
                "options_hi": ["अंत", "समाप्त", "शुरू", "निष्कर्ष निकालना"],
                "answer_en": "start",
                "answer_hi": "शुरू",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 48,
                "question_en": "Correct the sentence: 'There is many books on the table.'",
                "question_hi": "वाक्य सही करें: 'मेज पर बहुत सारी किताबें हैं।'",
                "options_en": ["There are many books on the table.", "There is many books on the table.", "There are much books on the table.", "There is a many books on the table."],
                "options_hi": ["मेज पर बहुत सारी किताबें हैं।", "मेज पर बहुत सारी किताबें है।", "मेज पर बहुत सारी किताबें हैं।", "मेज पर एक बहुत सारी किताबें हैं।"],
                "answer_en": "There are many books on the table.",
                "answer_hi": "मेज पर बहुत सारी किताबें हैं।",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 49,
                "question_en": "Identify the adjective in the sentence: 'She has long hair.'",
                "question_hi": "वाक्य में विशेषण पहचानें: 'उसके लंबे बाल हैं।'",
                "options_en": ["She", "has", "long", "hair"],
                "options_hi": ["उसके", "हैं", "लंबे", "बाल"],
                "answer_en": "long",
                "answer_hi": "लंबे",
                "attempted": false,
                "selected": ""
        },
        {
                "num": 50,
                "question_en": "Choose the antonym for 'happy':",
                "question_hi": "'खुश' का विलोम शब्द चुनें:",
                "options_en": ["joyful", "cheerful", "sad", "merry"],
                "options_hi": ["आनंदित", "प्रसन्न", "दुखी", "हंसमुख"],
                "answer_en": "sad",
                "answer_hi": "दुखी",
                "attempted": false,
                "selected": ""
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
