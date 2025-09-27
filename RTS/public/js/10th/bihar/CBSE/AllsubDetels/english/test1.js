
const questions = [
  
    {
        "num": 1,
        "question_en": "Who is the author of the story 'The Hack Driver'?",
        "question_hi": "'द हैक ड्राइवर' कहानी के लेखक कौन हैं?",
        "options_en": ["Sinclair Lewis", "Douglas James", "Victor Hugo", "Leo Tolstoy"],
        "options_hi": ["सिंक्लेयर लुईस", "डगलस जेम्स", "विक्टर ह्यूगो", "लियो टॉल्स्टॉय"],
        "answer_en": "Sinclair Lewis",
        "answer_hi": "सिंक्लेयर लुईस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What message does the poem 'The Ball Poem' convey?",
        "question_hi": "'द बॉल पोएम' कविता क्या संदेश देती है?",
        "options_en": ["Be careful", "Learn to take losses", "Love nature", "Obey parents"],
        "options_hi": ["सावधान रहें", "हानियों को सहना सीखें", "प्रकृति से प्रेम करें", "माता-पिता की बात मानें"],
        "answer_en": "Learn to take losses",
        "answer_hi": "हानियों को सहना सीखें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What kind of person was Bholi before going to school?",
        "question_hi": "स्कूल जाने से पहले भोली कैसी थी?",
        "options_en": ["Smart and confident", "Shy and backward", "Rich and proud", "Bold and rude"],
        "options_hi": ["स्मार्ट और आत्मविश्वासी", "शर्मीली और पिछड़ी", "अमीर और घमंडी", "निडर और रूखी"],
        "answer_en": "Shy and backward",
        "answer_hi": "शर्मीली और पिछड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What change did education bring in Bholi's life?",
        "question_hi": "शिक्षा ने भोली के जीवन में क्या बदलाव लाया?",
        "options_en": ["She became arrogant", "She refused to marry a greedy man", "She ran away", "She became a teacher"],
        "options_hi": ["वह घमंडी बन गई", "उसने लोभी व्यक्ति से शादी करने से इनकार कर दिया", "वह भाग गई", "वह शिक्षिका बन गई"],
        "answer_en": "She refused to marry a greedy man",
        "answer_hi": "उसने लोभी व्यक्ति से शादी करने से इनकार कर दिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What did the seagull's family do to make him fly?",
        "question_hi": "सीगल के परिवार ने उसे उड़ने के लिए क्या किया?",
        "options_en": ["Fed him food", "Left him alone", "Mocked and tempted him", "Held his wings"],
        "options_hi": ["उसे खाना खिलाया", "उसे अकेला छोड़ दिया", "उसका मज़ाक उड़ाया और ललचाया", "उसके पंख पकड़े"],
        "answer_en": "Mocked and tempted him",
        "answer_hi": "उसका मज़ाक उड़ाया और ललचाया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Who wrote the poem 'Amanda'?",
        "question_hi": "'अमांडा' कविता किसने लिखी है?",
        "options_en": ["Carolyn Wells", "Robin Klein", "William Blake", "Sylvia Plath"],
        "options_hi": ["कैरोलीन वेल्स", "रॉबिन क्लेन", "विलियम ब्लेक", "सिल्विया प्लाथ"],
        "answer_en": "Robin Klein",
        "answer_hi": "रॉबिन क्लेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What does Amanda long for in the poem?",
        "question_hi": "कविता में अमांडा किस चीज की चाह रखती है?",
        "options_en": ["Fame", "Freedom", "Friends", "Food"],
        "options_hi": ["प्रसिद्धि", "स्वतंत्रता", "दोस्त", "खाना"],
        "answer_en": "Freedom",
        "answer_hi": "स्वतंत्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What was Matilda’s husband’s job in 'The Necklace'?",
        "question_hi": "'द नेकलेस' में मटिल्डा के पति की नौकरी क्या थी?",
        "options_en": ["Doctor", "Clerk", "Teacher", "Lawyer"],
        "options_hi": ["डॉक्टर", "क्लर्क", "शिक्षक", "वकील"],
        "answer_en": "Clerk",
        "answer_hi": "क्लर्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the irony in 'The Necklace'?",
        "question_hi": "'द नेकलेस' में विडंबना क्या है?",
        "options_en": ["She found the necklace later", "The necklace was fake", "She never wore the necklace", "Her friend became rich"],
        "options_hi": ["उसे बाद में हार मिल गया", "हार नकली था", "उसने कभी हार नहीं पहना", "उसकी दोस्त अमीर बन गई"],
        "answer_en": "The necklace was fake",
        "answer_hi": "हार नकली था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Who is the author of 'A Letter to God'?",
        "question_hi": "'अ लेटर टू गॉड' के लेखक कौन हैं?",
        "options_en": ["G.L. Fuentes", "Leo Tolstoy", "Guy de Maupassant", "Hector Hugh Munro"],
        "options_hi": ["जी.एल. फुएंतेस", "लियो टॉल्स्टॉय", "गाय द मोपासां", "हेक्टर ह्यू मुनरो"],
        "answer_en": "G.L. Fuentes",
        "answer_hi": "जी.एल. फुएंतेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What did Lencho hope for in 'A Letter to God'?",
        "question_hi": "'अ लेटर टू गॉड' में लेनचो को किसकी आशा थी?",
        "options_en": ["A job", "A good harvest", "A rain shower", "A letter"],
        "options_hi": ["एक नौकरी", "अच्छी फसल", "बारिश", "एक पत्र"],
        "answer_en": "A rain shower",
        "answer_hi": "बारिश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What destroyed Lencho’s crops?",
        "question_hi": "लेनचो की फसल को किसने नष्ट किया?",
        "options_en": ["Locusts", "Drought", "Hailstorm", "Flood"],
        "options_hi": ["टिड्डियाँ", "सूखा", "ओलावृष्टि", "बाढ़"],
        "answer_en": "Hailstorm",
        "answer_hi": "ओलावृष्टि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Who wrote the poem 'Fire and Ice'?",
        "question_hi": "'फायर एंड आइस' कविता किसने लिखी?",
        "options_en": ["Robert Frost", "John Keats", "William Blake", "Walt Whitman"],
        "options_hi": ["रॉबर्ट फॉस्ट", "जॉन कीट्स", "विलियम ब्लेक", "वाल्ट व्हिटमैन"],
        "answer_en": "Robert Frost",
        "answer_hi": "रॉबर्ट फॉस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does 'Fire' represent in the poem 'Fire and Ice'?",
        "question_hi": "'फायर एंड आइस' कविता में 'फायर' किसका प्रतीक है?",
        "options_en": ["Love", "Hatred", "Desire", "Peace"],
        "options_hi": ["प्रेम", "घृणा", "इच्छा", "शांति"],
        "answer_en": "Desire",
        "answer_hi": "इच्छा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "In 'The Black Aeroplane', what happened to the compass and radio?",
        "question_hi": "'द ब्लैक एरोप्लेन' में कंपास और रेडियो का क्या हुआ?",
        "options_en": ["They stopped working", "They caught fire", "They gave wrong direction", "They worked perfectly"],
        "options_hi": ["उन्होंने काम करना बंद कर दिया", "वे जल गए", "उन्होंने गलत दिशा दी", "वे सही से काम कर रहे थे"],
        "answer_en": "They stopped working",
        "answer_hi": "उन्होंने काम करना बंद कर दिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Who helped the narrator in 'The Black Aeroplane'?",
        "question_hi": "'द ब्लैक एरोप्लेन' में किसने लेखक की मदद की?",
        "options_en": ["The co-pilot", "The radio officer", "Another pilot", "A stranger on ground"],
        "options_hi": ["सह-पायलट", "रेडियो अधिकारी", "एक और पायलट", "जमीन पर एक अजनबी"],
        "answer_en": "Another pilot",
        "answer_hi": "एक और पायलट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is the central idea of 'Dust of Snow'?",
        "question_hi": "'डस्ट ऑफ़ स्नो' की मुख्य भावना क्या है?",
        "options_en": ["Anger", "Change in mood", "Fear", "Hatred"],
        "options_hi": ["गुस्सा", "मूड में बदलाव", "डर", "नफरत"],
        "answer_en": "Change in mood",
        "answer_hi": "मूड में बदलाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What does the crow symbolize in 'Dust of Snow'?",
        "question_hi": "'डस्ट ऑफ़ स्नो' में कौवा किसका प्रतीक है?",
        "options_en": ["Joy", "Omen of change", "Sorrow", "Winter"],
        "options_hi": ["खुशी", "बदलाव का संकेत", "दुख", "सर्दी"],
        "answer_en": "Omen of change",
        "answer_hi": "बदलाव का संकेत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Who is the author of 'From the Diary of Anne Frank'?",
        "question_hi": "'फ्रॉम द डायरी ऑफ ऐनी फ्रैंक' की लेखिका कौन हैं?",
        "options_en": ["Anne Frank", "Helen Keller", "Emily Dickinson", "Jane Austen"],
        "options_hi": ["ऐनी फ्रैंक", "हेलेन केलर", "एमिली डिकिंसन", "जेन ऑस्टेन"],
        "answer_en": "Anne Frank",
        "answer_hi": "ऐनी फ्रैंक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Why did Anne Frank decide to write a diary?",
        "question_hi": "ऐनी फ्रैंक ने डायरी लिखने का निर्णय क्यों लिया?",
        "options_en": ["She loved writing", "She was bored", "She had no real friend", "She wanted fame"],
        "options_hi": ["उसे लिखना पसंद था", "वह बोर थी", "उसका कोई सच्चा दोस्त नहीं था", "वह प्रसिद्ध होना चाहती थी"],
        "answer_en": "She had no real friend",
        "answer_hi": "उसका कोई सच्चा दोस्त नहीं था",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What was Anne’s father’s name?",
        "question_hi": "ऐनी के पिता का नाम क्या था?",
        "options_en": ["Peter Frank", "Otto Frank", "Mr. Keesing", "Albert Frank"],
        "options_hi": ["पीटर फ्रैंक", "ओट्टो फ्रैंक", "मिस्टर कीसिंग", "अल्बर्ट फ्रैंक"],
        "answer_en": "Otto Frank",
        "answer_hi": "ओट्टो फ्रैंक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Why did the teacher punish Anne Frank?",
        "question_hi": "शिक्षक ने ऐनी फ्रैंक को सज़ा क्यों दी?",
        "options_en": ["For coming late", "For not doing homework", "For talking too much", "For lying"],
        "options_hi": ["देर से आने पर", "होमवर्क नहीं करने पर", "बहुत बात करने पर", "झूठ बोलने पर"],
        "answer_en": "For talking too much",
        "answer_hi": "बहुत बात करने पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What subject did Mr. Keesing teach?",
        "question_hi": "मिस्टर कीसिंग कौन सा विषय पढ़ाते थे?",
        "options_en": ["History", "Math", "Science", "English"],
        "options_hi": ["इतिहास", "गणित", "विज्ञान", "अंग्रेज़ी"],
        "answer_en": "Math",
        "answer_hi": "गणित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What does 'animals in cages' symbolize in 'A Tiger in the Zoo'?",
        "question_hi": "'अ टाइगर इन द ज़ू' में पिंजरे में बंद जानवर किसका प्रतीक हैं?",
        "options_en": ["Anger", "Power", "Helplessness", "Kindness"],
        "options_hi": ["गुस्सा", "शक्ति", "लाचारी", "दया"],
        "answer_en": "Helplessness",
        "answer_hi": "लाचारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Who wrote 'A Tiger in the Zoo'?",
        "question_hi": "'अ टाइगर इन द ज़ू' कविता किसने लिखी है?",
        "options_en": ["George Orwell", "Leslie Norris", "John Keats", "Ted Hughes"],
        "options_hi": ["जॉर्ज ऑरवेल", "लेस्ली नॉरिस", "जॉन कीट्स", "टेड ह्यूजेस"],
        "answer_en": "Leslie Norris",
        "answer_hi": "लेस्ली नॉरिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "In 'A Tiger in the Zoo', where should the tiger be ideally?",
        "question_hi": "'अ टाइगर इन द ज़ू' में बाघ को आदर्श रूप से कहाँ होना चाहिए?",
        "options_en": ["In zoo", "In forest", "In cage", "In circus"],
        "options_hi": ["चिड़ियाघर में", "जंगल में", "पिंजरे में", "सर्कस में"],
        "answer_en": "In forest",
        "answer_hi": "जंगल में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What did Griffin discover in 'Footprints Without Feet'?",
        "question_hi": "'फुटप्रिंट्स विदआउट फीट' में ग्रिफिन ने क्या खोज की?",
        "options_en": ["Flying machine", "Cure for cancer", "Invisibility", "Teleportation"],
        "options_hi": ["उड़ने वाली मशीन", "कैंसर का इलाज", "अदृश्यता", "स्थानांतरण"],
        "answer_en": "Invisibility",
        "answer_hi": "अदृश्यता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "How did Griffin behave after becoming invisible?",
        "question_hi": "अदृश्य होने के बाद ग्रिफिन का व्यवहार कैसा था?",
        "options_en": ["Kind", "Helpful", "Wicked", "Friendly"],
        "options_hi": ["दयालु", "सहायक", "दुष्ट", "मिलनसार"],
        "answer_en": "Wicked",
        "answer_hi": "दुष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the theme of 'Footprints Without Feet'?",
        "question_hi": "'फुटप्रिंट्स विदआउट फीट' की थीम क्या है?",
        "options_en": ["Power of science", "Adventure", "Kindness", "Poverty"],
        "options_hi": ["विज्ञान की शक्ति", "साहसिकता", "दयालुता", "गरीबी"],
        "answer_en": "Power of science",
        "answer_hi": "विज्ञान की शक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Who wrote 'Footprints Without Feet'?",
        "question_hi": "'फुटप्रिंट्स विदआउट फीट' किसने लिखा है?",
        "options_en": ["H.G. Wells", "Herbert George", "Robert Arthur", "Jack Finney"],
        "options_hi": ["एच.जी. वेल्स", "हर्बर्ट जॉर्ज", "रॉबर्ट आर्थर", "जैक फिनी"],
        "answer_en": "H.G. Wells",
        "answer_hi": "एच.जी. वेल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Who was Mrs. Pumphrey in 'A Triumph of Surgery'?",
        "question_hi": "'अ ट्रायम्फ ऑफ सर्जरी' में मिसेज पम्फ्री कौन थीं?",
        "options_en": ["A nurse", "A doctor", "A rich lady", "A maid"],
        "options_hi": ["एक नर्स", "एक डॉक्टर", "एक अमीर महिला", "एक नौकरानी"],
        "answer_en": "A rich lady",
        "answer_hi": "एक अमीर महिला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What was the name of Mrs. Pumphrey’s dog?",
        "question_hi": "मिसेज पम्फ्री के कुत्ते का नाम क्या था?",
        "options_en": ["Tiger", "Tommy", "Tricki", "Tuffy"],
        "options_hi": ["टाइगर", "टॉमी", "ट्रिक्की", "टफी"],
        "answer_en": "Tricki",
        "answer_hi": "ट्रिक्की",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What was Tricki suffering from?",
        "question_hi": "ट्रिक्की किस समस्या से पीड़ित था?",
        "options_en": ["Injury", "Fever", "Overeating and obesity", "Wound"],
        "options_hi": ["चोट", "बुखार", "अत्यधिक भोजन और मोटापा", "घाव"],
        "answer_en": "Overeating and obesity",
        "answer_hi": "अत्यधिक भोजन और मोटापा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What treatment was given to Tricki at the surgery?",
        "question_hi": "ट्रिक्की को सर्जरी में क्या इलाज दिया गया?",
        "options_en": ["Injections", "Medicine", "Diet and exercise", "Operation"],
        "options_hi": ["इंजेक्शन", "दवा", "आहार और व्यायाम", "ऑपरेशन"],
        "answer_en": "Diet and exercise",
        "answer_hi": "आहार और व्यायाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Who is the narrator in 'A Triumph of Surgery'?",
        "question_hi": "'अ ट्रायम्फ ऑफ सर्जरी' में कथावाचक कौन है?",
        "options_en": ["Mrs. Pumphrey", "Dr. Harriot", "Tricki", "A friend"],
        "options_hi": ["मिसेज पम्फ्री", "डॉ. हैरियट", "ट्रिक्की", "एक मित्र"],
        "answer_en": "Dr. Harriot",
        "answer_hi": "डॉ. हैरियट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What was Nelson Mandela's view on courage?",
        "question_hi": "नेल्सन मंडेला का साहस के बारे में क्या विचार था?",
        "options_en": ["Not to feel fear", "Absence of fear", "Overcoming fear", "Avoiding fear"],
        "options_hi": ["डर महसूस न करना", "डर का अभाव", "डर पर काबू पाना", "डर से बचना"],
        "answer_en": "Overcoming fear",
        "answer_hi": "डर पर काबू पाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which country is associated with Nelson Mandela?",
        "question_hi": "नेल्सन मंडेला किस देश से संबंधित हैं?",
        "options_en": ["India", "USA", "South Africa", "Kenya"],
        "options_hi": ["भारत", "अमेरिका", "दक्षिण अफ्रीका", "केन्या"],
        "answer_en": "South Africa",
        "answer_hi": "दक्षिण अफ्रीका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does Mandela thank the international leaders for?",
        "question_hi": "मंडेला अंतर्राष्ट्रीय नेताओं को किसके लिए धन्यवाद देते हैं?",
        "options_en": ["For visiting his country", "For supporting sports", "For fighting apartheid", "For celebrating democracy"],
        "options_hi": ["उनके देश का दौरा करने के लिए", "खेलों का समर्थन करने के लिए", "अपार्थेड से लड़ने के लिए", "लोकतंत्र का जश्न मनाने के लिए"],
        "answer_en": "For celebrating democracy",
        "answer_hi": "लोकतंत्र का जश्न मनाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is apartheid?",
        "question_hi": "अपार्थेड क्या है?",
        "options_en": ["Religious harmony", "Racial discrimination", "Economic growth", "Political equality"],
        "options_hi": ["धार्मिक सद्भाव", "नस्लीय भेदभाव", "आर्थिक विकास", "राजनीतिक समानता"],
        "answer_en": "Racial discrimination",
        "answer_hi": "नस्लीय भेदभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What was the occasion on which Mandela gave his speech?",
        "question_hi": "मंडेला ने यह भाषण किस अवसर पर दिया?",
        "options_en": ["His birthday", "Independence Day", "Inauguration as President", "Freedom March"],
        "options_hi": ["उनके जन्मदिन पर", "स्वतंत्रता दिवस पर", "राष्ट्रपति के रूप में शपथ ग्रहण पर", "स्वतंत्रता मार्च पर"],
        "answer_en": "Inauguration as President",
        "answer_hi": "राष्ट्रपति के रूप में शपथ ग्रहण पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Where was Mandela imprisoned for many years?",
        "question_hi": "मंडेला कई वर्षों तक कहाँ कैद थे?",
        "options_en": ["Cape Town", "Robben Island", "Durban", "Pretoria"],
        "options_hi": ["केप टाउन", "रॉबेन द्वीप", "डरबन", "प्रिटोरिया"],
        "answer_en": "Robben Island",
        "answer_hi": "रॉबेन द्वीप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What values did Mandela cherish most?",
        "question_hi": "मंडेला किन मूल्यों को सबसे अधिक महत्व देते थे?",
        "options_en": ["Freedom and equality", "Money and fame", "Power and control", "Law and order"],
        "options_hi": ["स्वतंत्रता और समानता", "धन और प्रसिद्धि", "शक्ति और नियंत्रण", "कानून और व्यवस्था"],
        "answer_en": "Freedom and equality",
        "answer_hi": "स्वतंत्रता और समानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What did Mandela realize about courage?",
        "question_hi": "मंडेला ने साहस के बारे में क्या महसूस किया?",
        "options_en": ["It is natural", "It is inherited", "It means triumph over fear", "It means shouting"],
        "options_hi": ["यह स्वाभाविक है", "यह विरासत में मिला है", "यह डर पर विजय है", "यह चिल्लाने का नाम है"],
        "answer_en": "It means triumph over fear",
        "answer_hi": "यह डर पर विजय है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Who was Lushkoff in 'The Beggar'?",
        "question_hi": "'द बेगर' में लुश्कॉफ कौन था?",
        "options_en": ["A beggar", "A teacher", "A writer", "A carpenter"],
        "options_hi": ["एक भिखारी", "एक शिक्षक", "एक लेखक", "एक बढ़ई"],
        "answer_en": "A beggar",
        "answer_hi": "एक भिखारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Who helped Lushkoff change his life?",
        "question_hi": "लुश्कॉफ को जीवन बदलने में किसने मदद की?",
        "options_en": ["Sergei", "Olga", "Both Sergei and Olga", "His family"],
        "options_hi": ["सर्गेई", "ओल्गा", "सर्गेई और ओल्गा दोनों", "उसका परिवार"],
        "answer_en": "Both Sergei and Olga",
        "answer_hi": "सर्गेई और ओल्गा दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What was Olga's role in Lushkoff's transformation?",
        "question_hi": "लुश्कॉफ के परिवर्तन में ओल्गा की क्या भूमिका थी?",
        "options_en": ["She gave money", "She scolded him", "She inspired and worked for him", "She ignored him"],
        "options_hi": ["उसने पैसे दिए", "उसने उसे डांटा", "उसने प्रेरित किया और उसके लिए काम किया", "उसने उसे अनदेखा किया"],
        "answer_en": "She inspired and worked for him",
        "answer_hi": "उसने प्रेरित किया और उसके लिए काम किया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Who was the real helper of Lushkoff?",
        "question_hi": "लुश्कॉफ की असली मददगार कौन थी?",
        "options_en": ["Sergei", "Olga", "His mother", "God"],
        "options_hi": ["सर्गेई", "ओल्गा", "उसकी माँ", "ईश्वर"],
        "answer_en": "Olga",
        "answer_hi": "ओल्गा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the message of 'The Beggar'?",
        "question_hi": "'द बेगर' का संदेश क्या है?",
        "options_en": ["Work is worship", "Education is power", "Compassion transforms", "Honesty is the best policy"],
        "options_hi": ["काम पूजा है", "शिक्षा शक्ति है", "दया से परिवर्तन होता है", "ईमानदारी सबसे अच्छी नीति है"],
        "answer_en": "Compassion transforms",
        "answer_hi": "दया से परिवर्तन होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Where did Sergei first meet Lushkoff?",
        "question_hi": "सर्गेई ने लुश्कॉफ से पहली बार कहाँ मुलाकात की?",
        "options_en": ["In a tea stall", "At the theatre gate", "In the park", "At his house"],
        "options_hi": ["एक चाय की दुकान पर", "थिएटर के गेट पर", "पार्क में", "अपने घर पर"],
        "answer_en": "At the theatre gate",
        "answer_hi": "थिएटर के गेट पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What job did Sergei give to Lushkoff?",
        "question_hi": "सर्गेई ने लुश्कॉफ को कौन सा काम दिया?",
        "options_en": ["Sewing", "Wood chopping", "Sweeping", "Typing"],
        "options_hi": ["सिलाई", "लकड़ी काटना", "झाड़ू लगाना", "टाइपिंग"],
        "answer_en": "Wood chopping",
        "answer_hi": "लकड़ी काटना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is the theme of the poem 'A Tiger in the Zoo'?",
        "question_hi": "'अ टाइगर इन द जू' कविता का मुख्य विषय क्या है?",
        "options_en": ["Wildlife", "Freedom vs Captivity", "Nature", "Zoo Management"],
        "options_hi": ["वन्यजीव", "स्वतंत्रता बनाम कैद", "प्रकृति", "चिड़ियाघर प्रबंधन"],
        "answer_en": "Freedom vs Captivity",
        "answer_hi": "स्वतंत्रता बनाम कैद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "In the poem 'A Tiger in the Zoo', where is the tiger?",
        "question_hi": "'अ टाइगर इन द जू' कविता में बाघ कहाँ है?",
        "options_en": ["In the jungle", "In the zoo cage", "In the field", "In a forest reserve"],
        "options_hi": ["जंगल में", "चिड़ियाघर के पिंजरे में", "खेत में", "वन्यजीव अभ्यारण्य में"],
        "answer_en": "In the zoo cage",
        "answer_hi": "चिड़ियाघर के पिंजरे में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Who is the author of 'From the Diary of Anne Frank'?",
        "question_hi": "'फ्रॉम द डायरी ऑफ ऐनी फ्रैंक' की लेखिका कौन हैं?",
        "options_en": ["Helen Keller", "Anne Frank", "Nelson Mandela", "Isaac Newton"],
        "options_hi": ["हेलेन केलर", "ऐनी फ्रैंक", "नेल्सन मंडेला", "आइज़ैक न्यूटन"],
        "answer_en": "Anne Frank",
        "answer_hi": "ऐनी फ्रैंक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What was Anne Frank’s diary named?",
        "question_hi": "ऐनी फ्रैंक की डायरी का नाम क्या था?",
        "options_en": ["Dora", "Kitty", "Mira", "Elsa"],
        "options_hi": ["डोरा", "किटी", "मीरा", "एल्सा"],
        "answer_en": "Kitty",
        "answer_hi": "किटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What does Anne call her diary?",
        "question_hi": "ऐनी अपनी डायरी को क्या कहती है?",
        "options_en": ["Friend", "Sister", "Mother", "Teacher"],
        "options_hi": ["मित्र", "बहन", "माँ", "शिक्षिका"],
        "answer_en": "Friend",
        "answer_hi": "मित्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What made Anne Frank write a diary?",
        "question_hi": "ऐनी फ्रैंक ने डायरी क्यों लिखी?",
        "options_en": ["To express feelings", "To be famous", "As homework", "To publish a book"],
        "options_hi": ["भावनाओं को व्यक्त करने के लिए", "प्रसिद्ध होने के लिए", "गृहकार्य के रूप में", "एक किताब प्रकाशित करने के लिए"],
        "answer_en": "To express feelings",
        "answer_hi": "भावनाओं को व्यक्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How old was Anne Frank when she started writing her diary?",
        "question_hi": "जब ऐनी फ्रैंक ने अपनी डायरी लिखनी शुरू की, तब उसकी उम्र क्या थी?",
        "options_en": ["11", "13", "15", "17"],
        "options_hi": ["11", "13", "15", "17"],
        "answer_en": "13",
        "answer_hi": "13",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What did Anne Frank fear the most?",
        "question_hi": "ऐनी फ्रैंक को सबसे अधिक किस बात का डर था?",
        "options_en": ["Darkness", "Loneliness", "Exams", "Getting caught"],
        "options_hi": ["अंधेरे", "अकेलेपन", "परीक्षाओं", "पकड़े जाने का"],
        "answer_en": "Loneliness",
        "answer_hi": "अकेलेपन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What does Anne want to become?",
        "question_hi": "ऐनी क्या बनना चाहती थी?",
        "options_en": ["Teacher", "Doctor", "Journalist", "Scientist"],
        "options_hi": ["शिक्षिका", "डॉक्टर", "पत्रकार", "वैज्ञानिक"],
        "answer_en": "Journalist",
        "answer_hi": "पत्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What language was Anne Frank’s diary originally written in?",
        "question_hi": "ऐनी फ्रैंक की डायरी मूल रूप से किस भाषा में लिखी गई थी?",
        "options_en": ["English", "German", "Dutch", "French"],
        "options_hi": ["अंग्रेज़ी", "जर्मन", "डच", "फ्रेंच"],
        "answer_en": "Dutch",
        "answer_hi": "डच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Why did Sergei want to help Lushkoff?",
        "question_hi": "सर्गेई लुश्कॉफ की मदद क्यों करना चाहता था?",
        "options_en": ["He pitied him", "He needed a worker", "He wanted to show off", "He was afraid of him"],
        "options_hi": ["उसे उस पर दया आई", "उसे एक मजदूर की जरूरत थी", "वह दिखावा करना चाहता था", "वह उससे डर गया था"],
        "answer_en": "He pitied him",
        "answer_hi": "उसे उस पर दया आई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Who is the poet of 'Fire and Ice'?",
        "question_hi": "'फायर एंड आइस' के कवि कौन हैं?",
        "options_en": ["Robert Frost", "John Keats", "W.B. Yeats", "P.B. Shelley"],
        "options_hi": ["रॉबर्ट फ्रॉस्ट", "जॉन कीट्स", "डब्ल्यू.बी. यीट्स", "पी.बी. शेली"],
        "answer_en": "Robert Frost",
        "answer_hi": "रॉबर्ट फ्रॉस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What does ‘fire’ symbolize in the poem 'Fire and Ice'?",
        "question_hi": "'फायर एंड आइस' कविता में 'आग' किसका प्रतीक है?",
        "options_en": ["Love", "Hatred", "Desire", "Peace"],
        "options_hi": ["प्रेम", "घृणा", "इच्छा", "शांति"],
        "answer_en": "Desire",
        "answer_hi": "इच्छा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What does ‘ice’ symbolize in the poem?",
        "question_hi": "कविता में 'बर्फ' किसका प्रतीक है?",
        "options_en": ["Kindness", "Hatred", "Coolness", "Calmness"],
        "options_hi": ["दयालुता", "घृणा", "ठंडापन", "शांति"],
        "answer_en": "Hatred",
        "answer_hi": "घृणा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "According to the poet, what can end the world?",
        "question_hi": "कवि के अनुसार, दुनिया का अंत किससे हो सकता है?",
        "options_en": ["Love and care", "Peace and harmony", "Fire and ice", "Rain and wind"],
        "options_hi": ["प्रेम और देखभाल", "शांति और सौहार्द", "आग और बर्फ", "बारिश और हवा"],
        "answer_en": "Fire and ice",
        "answer_hi": "आग और बर्फ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the tone of the poem 'Fire and Ice'?",
        "question_hi": "'फायर एंड आइस' कविता की शैली क्या है?",
        "options_en": ["Humorous", "Sarcastic", "Serious and philosophical", "Romantic"],
        "options_hi": ["हास्यपूर्ण", "व्यंग्यात्मक", "गंभीर और दार्शनिक", "प्रेममय"],
        "answer_en": "Serious and philosophical",
        "answer_hi": "गंभीर और दार्शनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is the rhyme scheme of the poem 'Fire and Ice'?",
        "question_hi": "'फायर एंड आइस' कविता की तुकबंदी योजना क्या है?",
        "options_en": ["abba", "abcb", "aba abc bcb", "aaa bbb ccc"],
        "options_hi": ["अब्बा", "एबीसीबी", "एबीए एबीसी बीसीबी", "एएए बीबीबी सीसीसी"],
        "answer_en": "aba abc bcb",
        "answer_hi": "एबीए एबीसी बीसीबी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is the central idea of 'Fire and Ice'?",
        "question_hi": "'फायर एंड आइस' की मुख्य भावना क्या है?",
        "options_en": ["Importance of nature", "Beauty of fire and ice", "End of the world due to emotions", "Science of temperature"],
        "options_hi": ["प्रकृति का महत्व", "आग और बर्फ की सुंदरता", "भावनाओं के कारण दुनिया का अंत", "तापमान का विज्ञान"],
        "answer_en": "End of the world due to emotions",
        "answer_hi": "भावनाओं के कारण दुनिया का अंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What does the poet mean by ‘some say the world will end in fire’?",
        "question_hi": "कवि के अनुसार 'कुछ कहते हैं कि दुनिया आग से समाप्त होगी' का क्या अर्थ है?",
        "options_en": ["Due to love", "Due to desire", "Due to heat", "Due to lava"],
        "options_hi": ["प्रेम के कारण", "इच्छा के कारण", "गर्मी के कारण", "लावा के कारण"],
        "answer_en": "Due to desire",
        "answer_hi": "इच्छा के कारण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "How many lines are there in 'Fire and Ice'?",
        "question_hi": "'फायर एंड आइस' में कितनी पंक्तियाँ हैं?",
        "options_en": ["7", "9", "10", "12"],
        "options_hi": ["7", "9", "10", "12"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which emotion does the poet believe is equally destructive as desire?",
        "question_hi": "कवि के अनुसार कौन-सी भावना इच्छा के समान ही विनाशकारी है?",
        "options_en": ["Kindness", "Joy", "Hatred", "Anger"],
        "options_hi": ["दयालुता", "खुशी", "घृणा", "क्रोध"],
        "answer_en": "Hatred",
        "answer_hi": "घृणा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "In 'Fire and Ice', which element does the poet mention second?",
        "question_hi": "'फायर एंड आइस' में कवि कौन सा तत्व दूसरे स्थान पर उल्लेख करता है?",
        "options_en": ["Fire", "Water", "Ice", "Snow"],
        "options_hi": ["आग", "पानी", "बर्फ", "बर्फबारी"],
        "answer_en": "Ice",
        "answer_hi": "बर्फ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Who is the author of the story 'The Midnight Visitor'?",
        "question_hi": "'द मिडनाइट विजिटर' कहानी के लेखक कौन हैं?",
        "options_en": ["Robert Arthur", "James Herriot", "Douglas James", "Gavin Maxwell"],
        "options_hi": ["रॉबर्ट आर्थर", "जेम्स हैरियट", "डगलस जेम्स", "गैविन मैक्सवेल"],
        "answer_en": "Robert Arthur",
        "answer_hi": "रॉबर्ट आर्थर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Who is the main character in 'The Midnight Visitor'?",
        "question_hi": "'द मिडनाइट विजिटर' का मुख्य पात्र कौन है?",
        "options_en": ["Max", "Fowler", "Ausable", "Julian"],
        "options_hi": ["मैक्स", "फाउलर", "ऑसेबल", "जूलियन"],
        "answer_en": "Ausable",
        "answer_hi": "ऑसेबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is Ausable’s profession?",
        "question_hi": "ऑसेबल का पेशा क्या है?",
        "options_en": ["Writer", "Scientist", "Secret agent", "Doctor"],
        "options_hi": ["लेखक", "वैज्ञानिक", "गुप्तचर", "डॉक्टर"],
        "answer_en": "Secret agent",
        "answer_hi": "गुप्तचर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Who is Fowler in the story?",
        "question_hi": "कहानी में फाउलर कौन है?",
        "options_en": ["A spy", "A police officer", "A writer", "A journalist"],
        "options_hi": ["एक जासूस", "एक पुलिस अधिकारी", "एक लेखक", "एक पत्रकार"],
        "answer_en": "A writer",
        "answer_hi": "एक लेखक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What surprised Fowler about Ausable?",
        "question_hi": "फाउलर ऑसेबल के बारे में किस बात से चकित था?",
        "options_en": ["His looks", "His bravery", "His cleverness", "His fear"],
        "options_hi": ["उसका रूप", "उसकी बहादुरी", "उसकी चतुराई", "उसका डर"],
        "answer_en": "His cleverness",
        "answer_hi": "उसकी चतुराई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What was Max trying to steal?",
        "question_hi": "मैक्स क्या चुराने की कोशिश कर रहा था?",
        "options_en": ["Money", "Documents", "Jewels", "Weapons"],
        "options_hi": ["पैसे", "दस्तावेज़", "गहने", "हथियार"],
        "answer_en": "Documents",
        "answer_hi": "दस्तावेज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "How did Ausable trick Max?",
        "question_hi": "ऑसेबल ने मैक्स को कैसे बेवकूफ बनाया?",
        "options_en": ["By calling police", "By creating a fake story", "By attacking him", "By giving him money"],
        "options_hi": ["पुलिस को बुला कर", "एक झूठी कहानी बनाकर", "उस पर हमला करके", "उसे पैसे देकर"],
        "answer_en": "By creating a fake story",
        "answer_hi": "एक झूठी कहानी बनाकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What does 'The Ball Poem' teach us?",
        "question_hi": "'The Ball Poem' हमें क्या सिखाती है?",
        "options_en": ["Importance of play", "Value of money", "Sense of loss and responsibility", "Joy of childhood"],
        "options_hi": ["खेल का महत्व", "पैसे का मूल्य", "हानि और जिम्मेदारी की भावना", "बचपन की खुशी"],
        "answer_en": "Sense of loss and responsibility",
        "answer_hi": "हानि और जिम्मेदारी की भावना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "What is the real name of the character 'Valli' in 'Madam Rides the Bus'?",
        "question_hi": "'Madam Rides the Bus' में 'वल्ली' का असली नाम क्या है?",
        "options_en": ["Valliammai", "Vallikannu", "Vasanthi", "Vaidehi"],
        "options_hi": ["वल्लियम्मै", "वल्लीकन्नु", "वासंती", "वैदेही"],
        "answer_en": "Valliammai",
        "answer_hi": "वल्लियम्मै",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "Why did Matilda borrow a necklace?",
        "question_hi": "मैटिल्डा ने हार क्यों उधार लिया?",
        "options_en": ["To show off", "To attend a ball", "To gift someone", "To impress her husband"],
        "options_hi": ["शेखी बघारने के लिए", "एक बॉल में जाने के लिए", "किसी को उपहार देने के लिए", "अपने पति को प्रभावित करने के लिए"],
        "answer_en": "To attend a ball",
        "answer_hi": "एक बॉल में जाने के लिए",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "What was the profession of Bholi’s father?",
        "question_hi": "भोली के पिता का पेशा क्या था?",
        "options_en": ["Landlord", "Clerk", "Teacher", "Revenue officer"],
        "options_hi": ["जमींदार", "क्लर्क", "शिक्षक", "राजस्व अधिकारी"],
        "answer_en": "Revenue officer",
        "answer_hi": "राजस्व अधिकारी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "What is the moral of the story 'The Necklace'?",
        "question_hi": "'The Necklace' कहानी की नैतिक शिक्षा क्या है?",
        "options_en": ["Always save money", "Live within your means", "Be ambitious", "Lend jewelry carefully"],
        "options_hi": ["हमेशा पैसे बचाएं", "अपने साधनों में रहें", "महत्वाकांक्षी बनें", "गहने सावधानी से उधार दें"],
        "answer_en": "Live within your means",
        "answer_hi": "अपने साधनों में रहें",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "Who is the poet of the poem 'A Tiger in the Zoo'?",
        "question_hi": "'A Tiger in the Zoo' कविता के कवि कौन हैं?",
        "options_en": ["Leslie Norris", "Walt Whitman", "Robert Frost", "Carolyn Wells"],
        "options_hi": ["लेस्ली नॉरिस", "वॉल्ट व्हिटमैन", "रॉबर्ट फॉ्रस्ट", "कैरोलीन वेल्स"],
        "answer_en": "Leslie Norris",
        "answer_hi": "लेस्ली नॉरिस",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "What does the tiger in the poem do in his cage?",
        "question_hi": "कविता में बाघ अपने पिंजरे में क्या करता है?",
        "options_en": ["Roars loudly", "Sleeps all day", "Walks silently", "Tries to escape"],
        "options_hi": ["जोर से दहाड़ता है", "सारा दिन सोता है", "चुपचाप चलता है", "भागने की कोशिश करता है"],
        "answer_en": "Walks silently",
        "answer_hi": "चुपचाप चलता है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "In 'The Sermon at Benares', what does Kisa Gotami learn?",
        "question_hi": "'The Sermon at Benares' में किसा गौतमी क्या सीखती है?",
        "options_en": ["Death is universal", "Magic cures exist", "Sorrow can be avoided", "Medicine can cure all"],
        "options_hi": ["मृत्यु सार्वभौमिक है", "जादू की औषधियाँ होती हैं", "दुख से बचा जा सकता है", "दवाएं सब ठीक कर सकती हैं"],
        "answer_en": "Death is universal",
        "answer_hi": "मृत्यु सार्वभौमिक है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "Who wrote 'From the Diary of Anne Frank'?",
        "question_hi": "'From the Diary of Anne Frank' किसने लिखी?",
        "options_en": ["Anne Frank", "Otto Frank", "Helen Keller", "Nelson Mandela"],
        "options_hi": ["ऐनी फ्रैंक", "ओटो फ्रैंक", "हेलेन केलर", "नेल्सन मंडेला"],
        "answer_en": "Anne Frank",
        "answer_hi": "ऐनी फ्रैंक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "What is the central theme of 'Fire and Ice'?",
        "question_hi": "'Fire and Ice' का मुख्य विषय क्या है?",
        "options_en": ["Peace and Harmony", "Love and Hatred", "Destruction by desires and hatred", "Human evolution"],
        "options_hi": ["शांति और सामंजस्य", "प्रेम और घृणा", "इच्छाओं और घृणा से विनाश", "मानव विकास"],
        "answer_en": "Destruction by desires and hatred",
        "answer_hi": "इच्छाओं और घृणा से विनाश",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "What was the occupation of the author’s father in 'The Tale of the Melon City'?",
        "question_hi": "'The Tale of the Melon City' में लेखक के पिता का पेशा क्या था?",
        "options_en": ["King", "Merchant", "Farmer", "Architect"],
        "options_hi": ["राजा", "व्यापारी", "किसान", "वास्तुकार"],
        "answer_en": "King",
        "answer_hi": "राजा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "Who is the narrator in 'The Lost Child'?",
        "question_hi": "'The Lost Child' में कथाकार कौन है?",
        "options_en": ["A child", "A stranger", "The child’s parents", "A man passing by"],
        "options_hi": ["एक बच्चा", "एक अजनबी", "बच्चे के माता-पिता", "एक आदमी जो गुजर रहा था"],
        "answer_en": "A child",
        "answer_hi": "एक बच्चा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "Why did the little boy stop and turn back in 'The Lost Child'?",
        "question_hi": "'The Lost Child' में बच्चा क्यों रुककर पीछे मुड़ गया?",
        "options_en": ["To find his parents", "To buy a toy", "To see the fair", "To meet his friend"],
        "options_hi": ["अपने माता-पिता को ढूंढने के लिए", "खिलौना खरीदने के लिए", "मेले को देखने के लिए", "अपने दोस्त से मिलने के लिए"],
        "answer_en": "To find his parents",
        "answer_hi": "अपने माता-पिता को ढूंढने के लिए",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "What was the special characteristic of the tiger in the poem 'A Tiger in the Zoo'?",
        "question_hi": "'A Tiger in the Zoo' कविता में बाघ की विशेष विशेषता क्या थी?",
        "options_en": ["Majestic", "Lonely", "Angry", "Tame"],
        "options_hi": ["रॉयल", "अकेला", "गुस्से में", "पालतू"],
        "answer_en": "Majestic",
        "answer_hi": "रॉयल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "Who is the poet of the poem 'The Road Not Taken'?",
        "question_hi": "'The Road Not Taken' कविता के कवि कौन हैं?",
        "options_en": ["Robert Frost", "Walt Whitman", "William Shakespeare", "John Keats"],
        "options_hi": ["रॉबर्ट फॉस्ट", "वॉल्ट व्हिटमैन", "विलियम शेक्सपियर", "जॉन कीट्स"],
        "answer_en": "Robert Frost",
        "answer_hi": "रॉबर्ट फॉस्ट",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "What does the poet express in 'The Road Not Taken'?",
        "question_hi": "'The Road Not Taken' कविता में कवि क्या व्यक्त करते हैं?",
        "options_en": ["The importance of making decisions", "Love and loss", "The beauty of nature", "The meaning of life"],
        "options_hi": ["निर्णय लेने के महत्व को", "प्रेम और हानि", "प्रकृति की सुंदरता", "जीवन का अर्थ"],
        "answer_en": "The importance of making decisions",
        "answer_hi": "निर्णय लेने के महत्व को",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "What is the central theme of the poem 'A Tiger in the Zoo'?",
        "question_hi": "'A Tiger in the Zoo' कविता का मुख्य विषय क्या है?",
        "options_en": ["Animal cruelty", "Freedom", "Nature", "Human impact on animals"],
        "options_hi": ["पशु क्रूरता", "स्वतंत्रता", "प्रकृति", "मानव का पशुओं पर प्रभाव"],
        "answer_en": "Human impact on animals",
        "answer_hi": "मानव का पशुओं पर प्रभाव",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "In 'The Sermon at Benares', who teaches the lesson to Kisa Gotami?",
        "question_hi": "'The Sermon at Benares' में किसा गौतमी को कौन शिक्षा देता है?",
        "options_en": ["Lord Buddha", "Her father", "The monk", "The king"],
        "options_hi": ["भगवान बुद्ध", "उसके पिता", "भिक्षु", "राजा"],
        "answer_en": "Lord Buddha",
        "answer_hi": "भगवान बुद्ध",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "What was the reaction of the people to the death of Kisa Gotami’s son?",
        "question_hi": "किसा गौतमी के बेटे की मृत्यु पर लोगों की प्रतिक्रिया क्या थी?",
        "options_en": ["They were sympathetic", "They laughed", "They ignored it", "They were shocked"],
        "options_hi": ["वे सहानुभूतिपूर्वक थे", "वे हंसे", "उन्होंने इसे नजरअंदाज किया", "वे चकित थे"],
        "answer_en": "They were sympathetic",
        "answer_hi": "वे सहानुभूतिपूर्वक थे",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "What does the phrase 'The world is too much with us' mean in the poem?",
        "question_hi": "'The world is too much with us' वाक्यांश का कविता में क्या अर्थ है?",
        "options_en": ["We are overwhelmed by worldly matters", "We love nature", "We live in harmony", "We ignore reality"],
        "options_hi": ["हम भौतिक मामलों से अभिभूत हैं", "हम प्रकृति से प्रेम करते हैं", "हम सामंजस्य में रहते हैं", "हम वास्तविकता की उपेक्षा करते हैं"],
        "answer_en": "We are overwhelmed by worldly matters",
        "answer_hi": "हम भौतिक मामलों से अभिभूत हैं",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "Who wrote the poem 'The Solitary Reaper'?",
        "question_hi": "'The Solitary Reaper' कविता के लेखक कौन हैं?",
        "options_en": ["William Wordsworth", "John Keats", "Robert Frost", "Walt Whitman"],
        "options_hi": ["विलियम वर्डस्वर्थ", "जॉन कीट्स", "रॉबर्ट फॉस्ट", "वॉल्ट व्हिटमैन"],
        "answer_en": "William Wordsworth",
        "answer_hi": "विलियम वर्डस्वर्थ",
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