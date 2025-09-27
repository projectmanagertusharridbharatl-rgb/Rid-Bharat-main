
const questions = [
    {
        "num": 1,
        "question_en": "Who is the author of 'गुलीवर की यात्रा'?",
        "question_hi": "'गुलीवर की यात्रा' के लेखक कौन हैं?",
        "options_en": ["जोनाथन स्विफ्ट", "चार्ल्स डिकेंस", "रस्किन बॉन्ड", "विलियम शेक्सपियर"],
        "options_hi": ["जोनाथन स्विफ्ट", "चार्ल्स डिकेंस", "रस्किन बॉन्ड", "विलियम शेक्सपियर"],
        "answer_en": "जोनाथन स्विफ्ट",
        "answer_hi": "जोनाथन स्विफ्ट",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "In the poem 'Auld Lang Syne', what is the main theme?",
        "question_hi": "'Auld Lang Syne' कविता का मुख्य विषय क्या है?",
        "options_en": ["Old friendship", "Love", "Nature", "Remembrance of the past"],
        "options_hi": ["पुरानी दोस्ती", "प्रेम", "प्रकृति", "भूतकाल की याद"],
        "answer_en": "Old friendship",
        "answer_hi": "पुरानी दोस्ती",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Who wrote the poem 'Do not ask of me'?",
        "question_hi": "'मुझसे मत पूछो' कविता के लेखक कौन हैं?",
        "options_en": ["हबीब तनवीर", "सुमित्रानंदन पंत", "निराला", "हरिवंश राय बच्चन"],
        "options_hi": ["हबीब तनवीर", "सुमित्रानंदन पंत", "निराला", "हरिवंश राय बच्चन"],
        "answer_en": "निराला",
        "answer_hi": "निराला",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Who is the poet of the poem 'The Ball Poem'?",
        "question_hi": "'The Ball Poem' कविता के कवि कौन हैं?",
        "options_en": ["John Berryman", "Leslie Norris", "William Blake", "James Kirkup"],
        "options_hi": ["जॉन बेर्रीमन", "लेस्ली नॉरिस", "विलियम ब्लेक", "जेम्स किर्कअप"],
        "answer_en": "Leslie Norris",
        "answer_hi": "लेस्ली नॉरिस",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "In 'The Last Lesson', what lesson is taught to the students?",
        "question_hi": "'The Last Lesson' में छात्रों को कौन सा पाठ पढ़ाया जाता है?",
        "options_en": ["French", "German", "English", "Mathematics"],
        "options_hi": ["फ्रेंच", "जर्मन", "अंग्रेजी", "गणित"],
        "answer_en": "French",
        "answer_hi": "फ्रेंच",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "What was the reason for the closure of the school in 'The Last Lesson'?",
        "question_hi": "'The Last Lesson' में स्कूल बंद होने का कारण क्या था?",
        "options_en": ["Revolution", "War", "French language ban", "Teacher's retirement"],
        "options_hi": ["क्रांति", "युद्ध", "फ्रेंच भाषा पर प्रतिबंध", "शिक्षक की सेवानिवृत्ति"],
        "answer_en": "French language ban",
        "answer_hi": "फ्रेंच भाषा पर प्रतिबंध",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Who was the author of 'The Blue Umbrella'?",
        "question_hi": "'The Blue Umbrella' के लेखक कौन थे?",
        "options_en": ["Ruskin Bond", "R.K. Narayan", "Mark Twain", "Walt Whitman"],
        "options_hi": ["रस्किन बॉन्ड", "आर.के. नारायण", "मार्क ट्वेन", "वॉल्ट व्हिटमैन"],
        "answer_en": "Ruskin Bond",
        "answer_hi": "रस्किन बॉन्ड",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "What does the poet mean by 'The dark ages' in 'The Ball Poem'?",
        "question_hi": "'The Ball Poem' में कवि 'अंधेरे युग' से क्या समझाते हैं?",
        "options_en": ["Childhood", "Life's struggles", "Injustice", "Loss"],
        "options_hi": ["बचपन", "जीवन की कठिनाइयाँ", "असमानता", "हानि"],
        "answer_en": "Loss",
        "answer_hi": "हानि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "In 'The Last Lesson', who was the teacher?",
        "question_hi": "'The Last Lesson' में शिक्षक कौन थे?",
        "options_en": ["M. Hamel", "Mr. Durand", "Mr. Brown", "Mr. Green"],
        "options_hi": ["एम. हैमल", "मि. ड्यूरंड", "मि. ब्राउन", "मि. ग्रीन"],
        "answer_en": "M. Hamel",
        "answer_hi": "एम. हैमल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Who wrote the poem 'A Thing of Beauty'?",
        "question_hi": "'A Thing of Beauty' कविता के लेखक कौन हैं?",
        "options_en": ["John Keats", "William Wordsworth", "Lord Byron", "Samuel Taylor Coleridge"],
        "options_hi": ["जॉन कीट्स", "विलियम वर्डस्वर्थ", "लॉर्ड बायरन", "सैम्युअल टेलर कॉलरिज"],
        "answer_en": "John Keats",
        "answer_hi": "जॉन कीट्स",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "In 'A Thing of Beauty', what does the poet say about beauty?",
        "question_hi": "'A Thing of Beauty' में कवि ने सुंदरता के बारे में क्या कहा है?",
        "options_en": ["It is eternal", "It is a gift of God", "It is fleeting", "It is a form of love"],
        "options_hi": ["यह शाश्वत है", "यह भगवान का उपहार है", "यह क्षणिक है", "यह प्रेम का रूप है"],
        "answer_en": "It is eternal",
        "answer_hi": "यह शाश्वत है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "What is the message of the poem 'The Road Not Taken'?",
        "question_hi": "'The Road Not Taken' कविता का संदेश क्या है?",
        "options_en": ["Take the road less traveled", "Choose wisely", "Do not regret your choices", "All of the above"],
        "options_hi": ["कम यात्रा की गई सड़क को चुनें", "समझदारी से चयन करें", "अपने चुनावों पर पछतावा न करें", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Who wrote 'The Ball Poem'?",
        "question_hi": "'The Ball Poem' के लेखक कौन हैं?",
        "options_en": ["John Berryman", "Leslie Norris", "William Blake", "Robert Frost"],
        "options_hi": ["जॉन बेर्रीमन", "लेस्ली नॉरिस", "विलियम ब्लेक", "रॉबर्ट फॉस्ट"],
        "answer_en": "Leslie Norris",
        "answer_hi": "लेस्ली नॉरिस",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "What does the poet want to convey in 'A Thing of Beauty'?",
        "question_hi": "'A Thing of Beauty' कविता में कवि क्या संदेश देना चाहते हैं?",
        "options_en": ["Beauty is fleeting", "Beauty brings happiness", "Beauty is a source of pleasure", "Beauty is a form of love"],
        "options_hi": ["सुंदरता क्षणिक है", "सुंदरता खुशी लाती है", "सुंदरता आनंद का स्रोत है", "सुंदरता प्रेम का रूप है"],
        "answer_en": "Beauty is a source of pleasure",
        "answer_hi": "सुंदरता आनंद का स्रोत है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Who is the poet of the poem 'Geet Onchal Mein'?",
        "question_hi": "'गीत आँचल में' कविता के कवि कौन हैं?",
        "options_en": ["Ramdhari Singh 'Dinkar'", "Nagarjun", "Harivansh Rai Bachchan", "Maithili Sharan Gupt"],
        "options_hi": ["रामधारी सिंह 'दिनकर'", "नागार्जुन", "हरिवंश राय बच्चन", "मैथिलीशरण गुप्त"],
        "answer_en": "Nagarjun",
        "answer_hi": "नागार्जुन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Who is the author of the lesson 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' पाठ के लेखक कौन हैं?",
        "options_en": ["Sachin Tendulkar", "Munshi Premchand", "Subhash Chandra Bose", "Jaishankar Prasad"],
        "options_hi": ["सचिन तेंदुलकर", "मुंशी प्रेमचंद", "सुभाष चंद्र बोस", "जयशंकर प्रसाद"],
        "answer_en": "Munshi Premchand",
        "answer_hi": "मुंशी प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What is the moral of the story 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' कहानी की शिक्षा क्या है?",
        "options_en": ["Respect elders", "Playing is important", "Discipline is important", "Both knowledge and experience are necessary"],
        "options_hi": ["बड़ों की इज्जत करें", "खेलना जरूरी है", "अनुशासन जरूरी है", "ज्ञान और अनुभव दोनों जरूरी हैं"],
        "answer_en": "Both knowledge and experience are necessary",
        "answer_hi": "ज्ञान और अनुभव दोनों जरूरी हैं",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Who is the writer of the lesson 'Yeh Danton Ka Mamla Hai'?",
        "question_hi": "'ये दाँतों का मामला है' पाठ के लेखक कौन हैं?",
        "options_en": ["Harishankar Parsai", "Rahul Sankrityayan", "Naresh Mehta", "Ramvriksha Benipuri"],
        "options_hi": ["हरिशंकर परसाई", "राहुल सांकृत्यायन", "नरेश मेहता", "रामवृक्ष बेनीपुरी"],
        "answer_en": "Harishankar Parsai",
        "answer_hi": "हरिशंकर परसाई",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "What is 'Yeh Danton Ka Mamla Hai' mainly about?",
        "question_hi": "'ये दाँतों का मामला है' मुख्य रूप से किस बारे में है?",
        "options_en": ["Dental health", "Political satire", "Family issues", "Exam preparation"],
        "options_hi": ["दंत चिकित्सा", "राजनीतिक व्यंग्य", "पारिवारिक समस्या", "परीक्षा की तैयारी"],
        "answer_en": "Political satire",
        "answer_hi": "राजनीतिक व्यंग्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which figure of speech is used in the line 'Dharti sone si damak rahi hai'?",
        "question_hi": "'धरती सोने सी दमक रही है' पंक्ति में कौन सा अलंकार है?",
        "options_en": ["Metaphor", "Simile", "Alliteration", "Pun"],
        "options_hi": ["रूपक", "उपमा", "अनुप्रास", "यमक"],
        "answer_en": "Simile",
        "answer_hi": "उपमा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Who is the author of the poem 'Veer Tum Badhe Chalo'?",
        "question_hi": "'वीर तुम बढ़े चलो' कविता के लेखक कौन हैं?",
        "options_en": ["Dinkar", "Bachchan", "Naresh Mehta", "Shivmangal Singh 'Suman'"],
        "options_hi": ["दिनकर", "बच्चन", "नरेश मेहता", "शिवमंगल सिंह 'सुमन'"],
        "answer_en": "Shivmangal Singh 'Suman'",
        "answer_hi": "शिवमंगल सिंह 'सुमन'",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "What is the central theme of the poem 'Veer Tum Badhe Chalo'?",
        "question_hi": "'वीर तुम बढ़े चलो' कविता का मुख्य भाव क्या है?",
        "options_en": ["Love", "Bravery", "Patriotism", "Sacrifice"],
        "options_hi": ["प्रेम", "वीरता", "देशभक्ति", "त्याग"],
        "answer_en": "Patriotism",
        "answer_hi": "देशभक्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which festival is described in 'Sadachar Ka Mahatva'?",
        "question_hi": "'सदाचार का महत्व' में किस त्योहार का उल्लेख है?",
        "options_en": ["Holi", "Diwali", "Raksha Bandhan", "None"],
        "options_hi": ["होली", "दीवाली", "रक्षा बंधन", "कोई नहीं"],
        "answer_en": "None",
        "answer_hi": "कोई नहीं",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "What is 'Sadachar' according to the lesson?",
        "question_hi": "पाठ के अनुसार 'सदाचार' क्या है?",
        "options_en": ["Cleanliness", "Discipline", "Good conduct", "Education"],
        "options_hi": ["स्वच्छता", "अनुशासन", "अच्छा आचरण", "शिक्षा"],
        "answer_en": "Good conduct",
        "answer_hi": "अच्छा आचरण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Who wrote the poem 'Pushp Ki Abhilasha'?",
        "question_hi": "'पुष्प की अभिलाषा' कविता किसने लिखी?",
        "options_en": ["Ramdhari Singh 'Dinkar'", "Makhanlal Chaturvedi", "Sumitranandan Pant", "Jaishankar Prasad"],
        "options_hi": ["रामधारी सिंह 'दिनकर'", "माखनलाल चतुर्वेदी", "सुमित्रानंदन पंत", "जयशंकर प्रसाद"],
        "answer_en": "Makhanlal Chaturvedi",
        "answer_hi": "माखनलाल चतुर्वेदी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Who is the author of 'Bharat Mata'?",
        "question_hi": "'भारत माता' के लेखक कौन हैं?",
        "options_en": ["Maithili Sharan Gupt", "Subhash Chandra Bose", "Premchand", "Mahadevi Verma"],
        "options_hi": ["मैथिलीशरण गुप्त", "सुभाष चंद्र बोस", "प्रेमचंद", "महादेवी वर्मा"],
        "answer_en": "Subhash Chandra Bose",
        "answer_hi": "सुभाष चंद्र बोस",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "What is the central idea of the poem 'Pushp Ki Abhilasha'?",
        "question_hi": "'पुष्प की अभिलाषा' कविता का मुख्य भाव क्या है?",
        "options_en": ["Love", "Devotion", "Sacrifice", "Prayer"],
        "options_hi": ["प्रेम", "भक्ति", "बलिदान", "प्रार्थना"],
        "answer_en": "Sacrifice",
        "answer_hi": "बलिदान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Who is the author of 'Saudagar'?",
        "question_hi": "'सौदागर' कहानी के लेखक कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Premchand", "Harishankar Parsai", "Jay Shankar Prasad"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "प्रेमचंद", "हरिशंकर परसाई", "जयशंकर प्रसाद"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "In 'Bharat Mata', Bharat Mata is compared to?",
        "question_hi": "'भारत माता' में भारत माता की तुलना किससे की गई है?",
        "options_en": ["A teacher", "A soldier", "A goddess", "A mother"],
        "options_hi": ["एक अध्यापक", "एक सैनिक", "एक देवी", "एक माँ"],
        "answer_en": "A goddess",
        "answer_hi": "एक देवी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "What does 'Sadachar' mean?",
        "question_hi": "'सदाचार' का क्या अर्थ है?",
        "options_en": ["Good conduct", "Hard work", "Cleanliness", "Study"],
        "options_hi": ["सदाचार", "परिश्रम", "स्वच्छता", "अध्ययन"],
        "answer_en": "Good conduct",
        "answer_hi": "सदाचार",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which poetic device is used in 'Veer tum badhe chalo'?",
        "question_hi": "'वीर तुम बढ़े चलो' में कौन सा अलंकार है?",
        "options_en": ["Simile", "Repetition", "Metaphor", "Alliteration"],
        "options_hi": ["उपमा", "अनुप्रास", "रूपक", "यमक"],
        "answer_en": "Alliteration",
        "answer_hi": "अनुप्रास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Who wrote 'Sadachar Ka Mahatva'?",
        "question_hi": "'सदाचार का महत्व' किसने लिखा है?",
        "options_en": ["Mahatma Gandhi", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Premchand"],
        "options_hi": ["महात्मा गांधी", "डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "प्रेमचंद"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "In 'Bade Bhai Sahab', what does the elder brother emphasize?",
        "question_hi": "'बड़े भाई साहब' में बड़े भाई किस पर जोर देते हैं?",
        "options_en": ["Games", "Studies and discipline", "Cooking", "Music"],
        "options_hi": ["खेल", "पढ़ाई और अनुशासन", "खाना बनाना", "संगीत"],
        "answer_en": "Studies and discipline",
        "answer_hi": "पढ़ाई और अनुशासन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "The poem 'Pushp Ki Abhilasha' expresses the desire to?",
        "question_hi": "'पुष्प की अभिलाषा' कविता किस इच्छा को व्यक्त करती है?",
        "options_en": ["Live long", "Be fragrant", "Serve the nation", "Fly in sky"],
        "options_hi": ["लंबा जीवन जीना", "सुगंधित होना", "देश की सेवा करना", "आसमान में उड़ना"],
        "answer_en": "Serve the nation",
        "answer_hi": "देश की सेवा करना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Which quality is praised in 'Sadachar Ka Mahatva'?",
        "question_hi": "'सदाचार का महत्व' में किस गुण की प्रशंसा की गई है?",
        "options_en": ["Anger", "Politeness", "Greed", "Dishonesty"],
        "options_hi": ["क्रोध", "विनम्रता", "लोभ", "बेईमानी"],
        "answer_en": "Politeness",
        "answer_hi": "विनम्रता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Who is described as 'Jeevan Ka Yatharth' in the Hindi textbook?",
        "question_hi": "हिंदी पाठ्यपुस्तक में किसे 'जीवन का यथार्थ' कहा गया है?",
        "options_en": ["Student", "Farmer", "Soldier", "Merchant"],
        "options_hi": ["विद्यार्थी", "किसान", "सैनिक", "सौदागर"],
        "answer_en": "Farmer",
        "answer_hi": "किसान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "The story 'Yeh Danton Ka Mamla Hai' is a type of?",
        "question_hi": "'ये दाँतों का मामला है' एक प्रकार की कौन सी रचना है?",
        "options_en": ["Satire", "Poem", "Biography", "Letter"],
        "options_hi": ["व्यंग्य", "कविता", "जीवनी", "पत्र"],
        "answer_en": "Satire",
        "answer_hi": "व्यंग्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "In which poem is the message of continuous effort given?",
        "question_hi": "किस कविता में निरंतर प्रयास का संदेश दिया गया है?",
        "options_en": ["Pushp Ki Abhilasha", "Geet Aanchal Mein", "Veer Tum Badhe Chalo", "Sadachar Ka Mahatva"],
        "options_hi": ["पुष्प की अभिलाषा", "गीत आँचल में", "वीर तुम बढ़े चलो", "सदाचार का महत्व"],
        "answer_en": "Veer Tum Badhe Chalo",
        "answer_hi": "वीर तुम बढ़े चलो",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Who is the writer of 'Pariksha Ka Samay'?",
        "question_hi": "'परीक्षा का समय' पाठ के लेखक कौन हैं?",
        "options_en": ["Munshi Premchand", "Nagarjun", "Mahadevi Verma", "Harishankar Parsai"],
        "options_hi": ["मुंशी प्रेमचंद", "नागार्जुन", "महादेवी वर्मा", "हरिशंकर परसाई"],
        "answer_en": "Harishankar Parsai",
        "answer_hi": "हरिशंकर परसाई",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "What is the tone of 'Geet Aanchal Mein' poem?",
        "question_hi": "'गीत आँचल में' कविता का भाव क्या है?",
        "options_en": ["Devotion", "Motherly affection", "Sarcasm", "Anger"],
        "options_hi": ["भक्ति", "मातृत्व स्नेह", "विडंबना", "क्रोध"],
        "answer_en": "Motherly affection",
        "answer_hi": "मातृत्व स्नेह",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "What does 'Aanchal' symbolize in the poem 'Geet Aanchal Mein'?",
        "question_hi": "'गीत आँचल में' कविता में 'आँचल' किसका प्रतीक है?",
        "options_en": ["Power", "Wealth", "Motherhood", "Freedom"],
        "options_hi": ["शक्ति", "धन", "मातृत्व", "स्वतंत्रता"],
        "answer_en": "Motherhood",
        "answer_hi": "मातृत्व",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "What type of text is 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' किस प्रकार की रचना है?",
        "options_en": ["Satire", "Poetry", "Essay", "Short story"],
        "options_hi": ["व्यंग्य", "कविता", "निबंध", "कहानी"],
        "answer_en": "Short story",
        "answer_hi": "कहानी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "What does 'Abhilasha' mean?",
        "question_hi": "'अभिलाषा' शब्द का क्या अर्थ है?",
        "options_en": ["Fear", "Desire", "Respect", "Gift"],
        "options_hi": ["डर", "इच्छा", "सम्मान", "उपहार"],
        "answer_en": "Desire",
        "answer_hi": "इच्छा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "In which lesson is the value of time emphasized?",
        "question_hi": "किस पाठ में समय के महत्व को बताया गया है?",
        "options_en": ["Bade Bhai Sahab", "Sadachar Ka Mahatva", "Pariksha Ka Samay", "Yeh Danton Ka Mamla Hai"],
        "options_hi": ["बड़े भाई साहब", "सदाचार का महत्व", "परीक्षा का समय", "ये दाँतों का मामला है"],
        "answer_en": "Pariksha Ka Samay",
        "answer_hi": "परीक्षा का समय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Who wrote the story 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' कहानी किसने लिखी है?",
        "options_en": ["Premchand", "Harivansh Rai Bachchan", "Bhisham Sahni", "Mahadevi Verma"],
        "options_hi": ["प्रेमचंद", "हरिवंश राय बच्चन", "भीष्म साहनी", "महादेवी वर्मा"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "What is the central theme of 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' का मुख्य विषय क्या है?",
        "options_en": ["Discipline and love between brothers", "Freedom struggle", "Social inequality", "Religious faith"],
        "options_hi": ["भाइयों के बीच अनुशासन और प्रेम", "स्वतंत्रता संग्राम", "सामाजिक असमानता", "धार्मिक आस्था"],
        "answer_en": "Discipline and love between brothers",
        "answer_hi": "भाइयों के बीच अनुशासन और प्रेम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Who is the poet of 'Pushp Ki Abhilasha'?",
        "question_hi": "'पुष्प की अभिलाषा' कविता के कवि कौन हैं?",
        "options_en": ["Makhanlal Chaturvedi", "Ramdhari Singh Dinkar", "Harivansh Rai Bachchan", "Subhadra Kumari Chauhan"],
        "options_hi": ["माखनलाल चतुर्वेदी", "रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "सुभद्राकुमारी चौहान"],
        "answer_en": "Makhanlal Chaturvedi",
        "answer_hi": "माखनलाल चतुर्वेदी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which literary form does 'Yeh Daanton Ka Mamla Hai' belong to?",
        "question_hi": "'ये दाँतों का मामला है' किस साहित्यिक विधा की रचना है?",
        "options_en": ["Satirical prose", "Poem", "Drama", "Essay"],
        "options_hi": ["व्यंग्य गद्य", "कविता", "नाटक", "निबंध"],
        "answer_en": "Satirical prose",
        "answer_hi": "व्यंग्य गद्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Who wrote 'Yeh Daanton Ka Mamla Hai'?",
        "question_hi": "'ये दाँतों का मामला है' किसके द्वारा लिखा गया है?",
        "options_en": ["Harishankar Parsai", "Premchand", "Shrilal Shukla", "Ramdhari Singh Dinkar"],
        "options_hi": ["हरिशंकर परसाई", "प्रेमचंद", "श्रीलाल शुक्ल", "रामधारी सिंह दिनकर"],
        "answer_en": "Harishankar Parsai",
        "answer_hi": "हरिशंकर परसाई",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What does the poem 'Veer Tum Badhe Chalo' promote?",
        "question_hi": "'वीर तुम बढ़े चलो' कविता किस बात को बढ़ावा देती है?",
        "options_en": ["Bravery and perseverance", "Love and friendship", "Peace and harmony", "Nature and beauty"],
        "options_hi": ["वीरता और दृढ़ता", "प्रेम और मित्रता", "शांति और सौहार्द", "प्रकृति और सुंदरता"],
        "answer_en": "Bravery and perseverance",
        "answer_hi": "वीरता और दृढ़ता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "'Sadachar Ka Mahatva' is written in which form?",
        "question_hi": "'सदाचार का महत्व' किस विधा में लिखा गया है?",
        "options_en": ["Essay", "Story", "Satire", "Poem"],
        "options_hi": ["निबंध", "कहानी", "व्यंग्य", "कविता"],
        "answer_en": "Essay",
        "answer_hi": "निबंध",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "What does the author emphasize in 'Sadachar Ka Mahatva'?",
        "question_hi": "'सदाचार का महत्व' में लेखक किस बात पर बल देता है?",
        "options_en": ["Good conduct", "Anger control", "Intelligence", "Hard work"],
        "options_hi": ["सदाचरण", "क्रोध पर नियंत्रण", "बुद्धिमत्ता", "कड़ी मेहनत"],
        "answer_en": "Good conduct",
        "answer_hi": "सदाचरण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "Which character type is shown in 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' में किस प्रकार का चरित्र चित्रित किया गया है?",
        "options_en": ["Strict elder brother", "Carefree younger brother", "Wise teacher", "Angry parent"],
        "options_hi": ["कठोर बड़े भाई", "बेबाक छोटा भाई", "बुद्धिमान शिक्षक", "क्रोधित माता-पिता"],
        "answer_en": "Strict elder brother",
        "answer_hi": "कठोर बड़े भाई",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "What does 'Pushp Ki Abhilasha' symbolize?",
        "question_hi": "'पुष्प की अभिलाषा' किस बात का प्रतीक है?",
        "options_en": ["Desire for sacrifice", "Desire for pleasure", "Desire for freedom", "Desire for love"],
        "options_hi": ["बलिदान की इच्छा", "सुख की इच्छा", "स्वतंत्रता की इच्छा", "प्रेम की इच्छा"],
        "answer_en": "Desire for sacrifice",
        "answer_hi": "बलिदान की इच्छा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "What is the tone of 'Yeh Daanton Ka Mamla Hai'?",
        "question_hi": "'ये दाँतों का मामला है' की शैली कैसी है?",
        "options_en": ["Humorous", "Sad", "Romantic", "Aggressive"],
        "options_hi": ["हास्यात्मक", "दुखद", "प्रेमपूर्ण", "आक्रामक"],
        "answer_en": "Humorous",
        "answer_hi": "हास्यात्मक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "What is the wish of the flower in 'Pushp Ki Abhilasha'?",
        "question_hi": "'पुष्प की अभिलाषा' में पुष्प की क्या इच्छा है?",
        "options_en": ["To be offered to the brave", "To decorate temples", "To stay on the tree", "To be used in perfume"],
        "options_hi": ["वीरों को अर्पित होने की", "मंदिरों की सजावट की", "वृक्ष पर बने रहने की", "इत्र बनाने की"],
        "answer_en": "To be offered to the brave",
        "answer_hi": "वीरों को अर्पित होने की",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "What is the nature of the younger brother in 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' में छोटे भाई का स्वभाव कैसा है?",
        "options_en": ["Playful and carefree", "Strict and serious", "Lazy and dull", "Fearful and shy"],
        "options_hi": ["खिलाड़ी और बेफिक्र", "कठोर और गंभीर", "आलसी और सुस्त", "डरपोक और शर्मीला"],
        "answer_en": "Playful and carefree",
        "answer_hi": "खिलाड़ी और बेफिक्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "What is the purpose of satire in 'Yeh Daanton Ka Mamla Hai'?",
        "question_hi": "'ये दाँतों का मामला है' में व्यंग्य का उद्देश्य क्या है?",
        "options_en": ["To criticize superstitions", "To glorify emotions", "To describe nature", "To explain poetry"],
        "options_hi": ["अंधविश्वासों की आलोचना करना", "भावनाओं की महिमा करना", "प्रकृति का वर्णन करना", "कविता समझाना"],
        "answer_en": "To criticize superstitions",
        "answer_hi": "अंधविश्वासों की आलोचना करना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "Which value is promoted in 'Sadachar Ka Mahatva'?",
        "question_hi": "'सदाचार का महत्व' में कौन-सी मूल्य की बात की गई है?",
        "options_en": ["Morality", "Wealth", "Beauty", "Strength"],
        "options_hi": ["नैतिकता", "धन", "सौंदर्य", "शक्ति"],
        "answer_en": "Morality",
        "answer_hi": "नैतिकता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "Who wrote 'Sadachar Ka Mahatva'?",
        "question_hi": "'सदाचार का महत्व' किसने लिखा है?",
        "options_en": ["Mahatma Gandhi", "Rabindranath Tagore", "Dr. Rajendra Prasad", "Jawaharlal Nehru"],
        "options_hi": ["महात्मा गांधी", "रवींद्रनाथ टैगोर", "डॉ. राजेन्द्र प्रसाद", "जवाहरलाल नेहरू"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "What does the elder brother advise repeatedly in 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' में बड़े भाई बार-बार क्या सलाह देते हैं?",
        "options_en": ["Study sincerely", "Play more", "Go for walk", "Sleep more"],
        "options_hi": ["ईमानदारी से पढ़ाई करो", "ज्यादा खेलो", "टहलने जाओ", "ज्यादा सोओ"],
        "answer_en": "Study sincerely",
        "answer_hi": "ईमानदारी से पढ़ाई करो",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "Which poem reflects patriotism?",
        "question_hi": "कौन-सी कविता देशभक्ति की भावना को दर्शाती है?",
        "options_en": ["Pushp Ki Abhilasha", "Bade Bhai Sahab", "Yeh Daanton Ka Mamla Hai", "Sadachar Ka Mahatva"],
        "options_hi": ["पुष्प की अभिलाषा", "बड़े भाई साहब", "ये दाँतों का मामला है", "सदाचार का महत्व"],
        "answer_en": "Pushp Ki Abhilasha",
        "answer_hi": "पुष्प की अभिलाषा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "In which form is 'Pushp Ki Abhilasha' written?",
        "question_hi": "'पुष्प की अभिलाषा' किस रूप में लिखी गई है?",
        "options_en": ["Poetry", "Prose", "Drama", "Essay"],
        "options_hi": ["कविता", "गद्य", "नाटक", "निबंध"],
        "answer_en": "Poetry",
        "answer_hi": "कविता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "Which emotion dominates in 'Veer Tum Badhe Chalo'?",
        "question_hi": "'वीर तुम बढ़े चलो' में कौन-सी भावना प्रमुख है?",
        "options_en": ["Bravery", "Sorrow", "Love", "Humor"],
        "options_hi": ["वीरता", "शोक", "प्रेम", "हास्य"],
        "answer_en": "Bravery",
        "answer_hi": "वीरता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "What is the effect of 'Sadachar' on society according to Gandhi ji?",
        "question_hi": "गांधी जी के अनुसार समाज पर 'सदाचार' का क्या प्रभाव पड़ता है?",
        "options_en": ["Creates good society", "Spreads hatred", "Causes fear", "Leads to war"],
        "options_hi": ["अच्छा समाज बनता है", "घृणा फैलती है", "डर फैलता है", "युद्ध होता है"],
        "answer_en": "Creates good society",
        "answer_hi": "अच्छा समाज बनता है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "Who was elder in 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' में कौन बड़ा था?",
        "options_en": ["Narrator", "His brother", "Teacher", "Father"],
        "options_hi": ["कथावाचक", "उसका भाई", "शिक्षक", "पिता"],
        "answer_en": "His brother",
        "answer_hi": "उसका भाई",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "What is ridiculed in 'Yeh Daanton Ka Mamla Hai'?",
        "question_hi": "'ये दाँतों का मामला है' में किस बात का उपहास किया गया है?",
        "options_en": ["Superstition", "Patriotism", "Bravery", "Love"],
        "options_hi": ["अंधविश्वास", "देशभक्ति", "वीरता", "प्रेम"],
        "answer_en": "Superstition",
        "answer_hi": "अंधविश्वास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "'Sadachar' means?",
        "question_hi": "'सदाचार' का अर्थ क्या होता है?",
        "options_en": ["Good behavior", "Wealth", "Strength", "Freedom"],
        "options_hi": ["अच्छा व्यवहार", "धन", "शक्ति", "स्वतंत्रता"],
        "answer_en": "Good behavior",
        "answer_hi": "अच्छा व्यवहार",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "'Pushp Ki Abhilasha' ends with what desire?",
        "question_hi": "'पुष्प की अभिलाषा' का अंत किस इच्छा के साथ होता है?",
        "options_en": ["To be used in martyr's crown", "To fly in sky", "To become perfume", "To be buried"],
        "options_hi": ["शहीद के सिर की शोभा बनने की", "आसमान में उड़ने की", "इत्र बनने की", "दफन होने की"],
        "answer_en": "To be used in martyr's crown",
        "answer_hi": "शहीद के सिर की शोभा बनने की",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "Which lesson is written by Harishankar Parsai?",
        "question_hi": "हरिशंकर परसाई द्वारा लिखित पाठ कौन-सा है?",
        "options_en": ["Yeh Daanton Ka Mamla Hai", "Pushp Ki Abhilasha", "Sadachar Ka Mahatva", "Bade Bhai Sahab"],
        "options_hi": ["ये दाँतों का मामला है", "पुष्प की अभिलाषा", "सदाचार का महत्व", "बड़े भाई साहब"],
        "answer_en": "Yeh Daanton Ka Mamla Hai",
        "answer_hi": "ये दाँतों का मामला है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "Which topic is NOT found in 'Sadachar Ka Mahatva'?",
        "question_hi": "'सदाचार का महत्व' में निम्न में से कौन-सा विषय नहीं है?",
        "options_en": ["Truth", "Non-violence", "Patriotism", "Morality"],
        "options_hi": ["सत्य", "अहिंसा", "देशभक्ति", "नैतिकता"],
        "answer_en": "Patriotism",
        "answer_hi": "देशभक्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "Which topic is NOT found in 'Sadachar Ka Mahatva'?",
        "question_hi": "'सदाचार का महत्व' में कौन-सा विषय नहीं है?",
        "options_en": ["Truthfulness", "Non-violence", "Superstition", "Good behavior"],
        "options_hi": ["सत्यवादिता", "अहिंसा", "अंधविश्वास", "अच्छा आचरण"],
        "answer_en": "Superstition",
        "answer_hi": "अंधविश्वास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "'Pushp Ki Abhilasha' inspires us for?",
        "question_hi": "'पुष्प की अभिलाषा' हमें किसके लिए प्रेरित करती है?",
        "options_en": ["Sacrifice", "Entertainment", "Luxury", "Fear"],
        "options_hi": ["बलिदान", "मनोरंजन", "भोग-विलास", "भय"],
        "answer_en": "Sacrifice",
        "answer_hi": "बलिदान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "Which quality is admired in 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' में किस गुण की प्रशंसा की गई है?",
        "options_en": ["Discipline", "Greed", "Pride", "Anger"],
        "options_hi": ["अनुशासन", "लोभ", "अहंकार", "क्रोध"],
        "answer_en": "Discipline",
        "answer_hi": "अनुशासन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "In 'Yeh Daanton Ka Mamla Hai', which issue is humorously criticized?",
        "question_hi": "'ये दाँतों का मामला है' में किस समस्या की हास्य रूप में आलोचना की गई है?",
        "options_en": ["Belief in magic", "Superstition related to teeth", "Poverty", "Corruption"],
        "options_hi": ["जादू में विश्वास", "दाँतों से जुड़ा अंधविश्वास", "गरीबी", "भ्रष्टाचार"],
        "answer_en": "Superstition related to teeth",
        "answer_hi": "दाँतों से जुड़ा अंधविश्वास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "'Sadachar Ka Mahatva' is taken from which speech or essay of Gandhi Ji?",
        "question_hi": "'सदाचार का महत्व' गांधी जी के किस भाषण या निबंध से लिया गया है?",
        "options_en": ["Hind Swaraj", "My Experiments with Truth", "Young India", "Ethical Conduct"],
        "options_hi": ["हिंद स्वराज", "सत्य के प्रयोग", "यंग इंडिया", "नैतिक आचरण"],
        "answer_en": "Hind Swaraj",
        "answer_hi": "हिंद स्वराज",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "The elder brother in 'Bade Bhai Sahab' is how many years senior?",
        "question_hi": "'बड़े भाई साहब' अपने छोटे भाई से कितने वर्ष बड़े हैं?",
        "options_en": ["Five years", "Three years", "Two years", "Four years"],
        "options_hi": ["पाँच वर्ष", "तीन वर्ष", "दो वर्ष", "चार वर्ष"],
        "answer_en": "Five years",
        "answer_hi": "पाँच वर्ष",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "What lesson do we learn from 'Pushp Ki Abhilasha'?",
        "question_hi": "'पुष्प की अभिलाषा' से हमें क्या सीख मिलती है?",
        "options_en": ["To serve the nation", "To enjoy life", "To be rich", "To fear death"],
        "options_hi": ["राष्ट्र की सेवा करना", "जीवन का आनंद लेना", "धनवान बनना", "मृत्यु से डरना"],
        "answer_en": "To serve the nation",
        "answer_hi": "राष्ट्र की सेवा करना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "Which element is mainly used in 'Yeh Daanton Ka Mamla Hai'?",
        "question_hi": "'ये दाँतों का मामला है' में मुख्य रूप से कौन-सा तत्व उपयोग किया गया है?",
        "options_en": ["Satire", "Romance", "Drama", "Mystery"],
        "options_hi": ["व्यंग्य", "प्रेम", "नाटक", "रहस्य"],
        "answer_en": "Satire",
        "answer_hi": "व्यंग्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "In 'Sadachar Ka Mahatva', Gandhi Ji emphasizes on?",
        "question_hi": "'सदाचार का महत्व' में गांधी जी किस पर जोर देते हैं?",
        "options_en": ["Moral values", "Materialism", "Power", "Politics"],
        "options_hi": ["नैतिक मूल्य", "भौतिकवाद", "शक्ति", "राजनीति"],
        "answer_en": "Moral values",
        "answer_hi": "नैतिक मूल्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "'Bade Bhai Sahab' story ends with?",
        "question_hi": "'बड़े भाई साहब' कहानी का अंत कैसे होता है?",
        "options_en": ["Realization of love", "Examination result", "Departure", "Quarrel"],
        "options_hi": ["प्रेम की अनुभूति", "परीक्षा का परिणाम", "प्रस्थान", "झगड़ा"],
        "answer_en": "Realization of love",
        "answer_hi": "प्रेम की अनुभूति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "What is the tone of 'Pushp Ki Abhilasha'?",
        "question_hi": "'पुष्प की अभिलाषा' की भाव-भूमि क्या है?",
        "options_en": ["Patriotic", "Tragic", "Satirical", "Comical"],
        "options_hi": ["देशभक्ति", "दुखद", "व्यंग्यात्मक", "हास्यपूर्ण"],
        "answer_en": "Patriotic",
        "answer_hi": "देशभक्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "'Yeh Daanton Ka Mamla Hai' exposes what?",
        "question_hi": "'ये दाँतों का मामला है' किस बात को उजागर करता है?",
        "options_en": ["Social superstitions", "Political unrest", "Love affairs", "Economic policies"],
        "options_hi": ["सामाजिक अंधविश्वास", "राजनीतिक अस्थिरता", "प्रेम प्रसंग", "आर्थिक नीतियाँ"],
        "answer_en": "Social superstitions",
        "answer_hi": "सामाजिक अंधविश्वास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "What kind of personality is seen in Gandhi Ji in 'Sadachar Ka Mahatva'?",
        "question_hi": "'सदाचार का महत्व' में गांधी जी की कैसी व्यक्तित्व झलकती है?",
        "options_en": ["Moral and disciplined", "Aggressive", "Indifferent", "Sarcastic"],
        "options_hi": ["नैतिक और अनुशासित", "आक्रामक", "उदासीन", "तंज़ कसने वाला"],
        "answer_en": "Moral and disciplined",
        "answer_hi": "नैतिक और अनुशासित",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "The poem 'Pushp Ki Abhilasha' uses which symbol?",
        "question_hi": "'पुष्प की अभिलाषा' में किस प्रतीक का प्रयोग किया गया है?",
        "options_en": ["Flower", "Sword", "Book", "River"],
        "options_hi": ["पुष्प", "तलवार", "पुस्तक", "नदी"],
        "answer_en": "Flower",
        "answer_hi": "पुष्प",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "In 'Bade Bhai Sahab', what is the younger brother fond of?",
        "question_hi": "'बड़े भाई साहब' में छोटा भाई किसका शौकीन है?",
        "options_en": ["Playing", "Studying", "Sleeping", "Cooking"],
        "options_hi": ["खेलने का", "पढ़ाई का", "सोने का", "पकाने का"],
        "answer_en": "Playing",
        "answer_hi": "खेलने का",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "What does the elder brother expect from his younger brother in 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' में बड़े भाई अपने छोटे भाई से क्या अपेक्षा रखते हैं?",
        "options_en": ["Obedience and discipline", "Rebellion", "Laziness", "Carelessness"],
        "options_hi": ["आज्ञाकारिता और अनुशासन", "विद्रोह", "आलस्य", "लापरवाही"],
        "answer_en": "Obedience and discipline",
        "answer_hi": "आज्ञाकारिता और अनुशासन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "The poem 'Pushp Ki Abhilasha' is written in which form?",
        "question_hi": "'पुष्प की अभिलाषा' कविता किस छंद में लिखी गई है?",
        "options_en": ["Free verse", "Doha", "Chaupai", "Rhymed couplet"],
        "options_hi": ["मुक्त छंद", "दोहा", "चौपाई", "तुकांत युग्म"],
        "answer_en": "Rhymed couplet",
        "answer_hi": "तुकांत युग्म",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "In 'Yeh Daanton Ka Mamla Hai', the character blindly believes in?",
        "question_hi": "'ये दाँतों का मामला है' में पात्र किस पर अंधविश्वास करता है?",
        "options_en": ["Village doctor", "Barber", "Quack", "Astrologer"],
        "options_hi": ["गाँव के डॉक्टर", "नाई", "झोलाछाप", "ज्योतिषी"],
        "answer_en": "Barber",
        "answer_hi": "नाई",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "What is emphasized in 'Sadachar Ka Mahatva' by Gandhi Ji?",
        "question_hi": "'सदाचार का महत्व' में गांधी जी किस पर बल देते हैं?",
        "options_en": ["Self-purification", "Wealth accumulation", "War strategy", "Political alliance"],
        "options_hi": ["आत्मशुद्धि", "धन संचय", "युद्ध नीति", "राजनीतिक गठबंधन"],
        "answer_en": "Self-purification",
        "answer_hi": "आत्मशुद्धि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "What tone does 'Bade Bhai Sahab' carry?",
        "question_hi": "'बड़े भाई साहब' की शैली कैसी है?",
        "options_en": ["Humorous and emotional", "Angry and violent", "Romantic", "Tragic"],
        "options_hi": ["हास्यपूर्ण और भावुक", "क्रोधित और हिंसक", "प्रेमपूर्ण", "दुखद"],
        "answer_en": "Humorous and emotional",
        "answer_hi": "हास्यपूर्ण और भावुक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "What does the flower want in 'Pushp Ki Abhilasha'?",
        "question_hi": "'पुष्प की अभिलाषा' में पुष्प क्या चाहता है?",
        "options_en": ["To fall on a soldier's grave", "To be part of a garland", "To be kept in temple", "To be gifted to a lover"],
        "options_hi": ["सैनिक की समाधि पर गिरना", "माला का हिस्सा बनना", "मंदिर में रखा जाना", "प्रेमी को भेंट देना"],
        "answer_en": "To fall on a soldier's grave",
        "answer_hi": "सैनिक की समाधि पर गिरना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "What is the main subject of 'Yeh Daanton Ka Mamla Hai'?",
        "question_hi": "'ये दाँतों का मामला है' का मुख्य विषय क्या है?",
        "options_en": ["Ignorance and superstition", "Heroism", "Science and discovery", "Romantic love"],
        "options_hi": ["अज्ञानता और अंधविश्वास", "वीरता", "विज्ञान और खोज", "प्रेम प्रसंग"],
        "answer_en": "Ignorance and superstition",
        "answer_hi": "अज्ञानता और अंधविश्वास",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "Which value is promoted in 'Sadachar Ka Mahatva'?",
        "question_hi": "'सदाचार का महत्व' में किस मूल्य को बढ़ावा दिया गया है?",
        "options_en": ["Character", "Power", "Money", "Technology"],
        "options_hi": ["चरित्र", "शक्ति", "धन", "प्रौद्योगिकी"],
        "answer_en": "Character",
        "answer_hi": "चरित्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "Who is the author of 'Bade Bhai Sahab'?",
        "question_hi": "'बड़े भाई साहब' के लेखक कौन हैं?",
        "options_en": ["Munshi Premchand", "Harivansh Rai Bachchan", "Jaishankar Prasad", "Mahadevi Verma"],
        "options_hi": ["मुंशी प्रेमचंद", "हरिवंश राय बच्चन", "जयशंकर प्रसाद", "महादेवी वर्मा"],
        "answer_en": "Munshi Premchand",
        "answer_hi": "मुंशी प्रेमचंद",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "'Pushp Ki Abhilasha' is a poem of which poet?",
        "question_hi": "'पुष्प की अभिलाषा' किस कवि की कविता है?",
        "options_en": ["Makhanlal Chaturvedi", "Subhadra Kumari Chauhan", "Maithili Sharan Gupt", "Sumitranandan Pant"],
        "options_hi": ["माखनलाल चतुर्वेदी", "सुभद्राकुमारी चौहान", "मैथिलीशरण गुप्त", "सुमित्रानंदन पंत"],
        "answer_en": "Makhanlal Chaturvedi",
        "answer_hi": "माखनलाल चतुर्वेदी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "The tone of 'Yeh Daanton Ka Mamla Hai' is?",
        "question_hi": "'ये दाँतों का मामला है' की शैली कैसी है?",
        "options_en": ["Satirical and humorous", "Angry", "Tragic", "Narrative"],
        "options_hi": ["व्यंग्यात्मक और हास्यपूर्ण", "क्रोधित", "दुखद", "कथात्मक"],
        "answer_en": "Satirical and humorous",
        "answer_hi": "व्यंग्यात्मक और हास्यपूर्ण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "Which value is discussed in Gandhi Ji’s writings?",
        "question_hi": "गांधी जी की रचनाओं में किस मूल्य की चर्चा होती है?",
        "options_en": ["Truth and ethics", "War and violence", "Science and logic", "Trade and commerce"],
        "options_hi": ["सत्य और नैतिकता", "युद्ध और हिंसा", "विज्ञान और तर्क", "व्यापार और वाणिज्य"],
        "answer_en": "Truth and ethics",
        "answer_hi": "सत्य और नैतिकता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "'Bade Bhai Sahab' promotes which theme?",
        "question_hi": "'बड़े भाई साहब' किस विषयवस्तु को बढ़ावा देती है?",
        "options_en": ["Love between siblings", "Enmity", "Fame", "Revenge"],
        "options_hi": ["भाइयों के बीच प्रेम", "दुश्मनी", "यश", "बदला"],
        "answer_en": "Love between siblings",
        "answer_hi": "भाइयों के बीच प्रेम",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "Which aspect is highlighted in 'Pushp Ki Abhilasha'?",
        "question_hi": "'पुष्प की अभिलाषा' में किस पक्ष को उजागर किया गया है?",
        "options_en": ["Devotion to country", "Family bonding", "Religious practice", "Economic struggle"],
        "options_hi": ["देशभक्ति", "पारिवारिक संबंध", "धार्मिक आचरण", "आर्थिक संघर्ष"],
        "answer_en": "Devotion to country",
        "answer_hi": "देशभक्ति",
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