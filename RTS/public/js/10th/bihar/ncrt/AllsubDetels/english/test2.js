
const questions = [
    {
        "num": 1,
        "question_en": "What figure of speech is used in the line: 'The moon smiled down at us'?",
        "question_hi": "'The moon smiled down at us' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
        "options_en": ["Simile", "Metaphor", "Personification", "Alliteration"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अनुप्रास"],
        "answer_en": "Personification",
        "answer_hi": "मानवीकरण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Identify the tense used in the sentence: 'She has been writing for two hours.'",
        "question_hi": "वाक्य 'She has been writing for two hours.' में प्रयुक्त काल क्या है?",
        "options_en": ["Present Perfect", "Present Perfect Continuous", "Past Perfect", "Future Continuous"],
        "options_hi": ["वर्तमान पूर्ण", "वर्तमान पूर्ण निरंतर", "भूतकाल पूर्ण", "भविष्य काल निरंतर"],
        "answer_en": "Present Perfect Continuous",
        "answer_hi": "वर्तमान पूर्ण निरंतर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Which type of sentence is this: 'Please pass me the salt.'?",
        "question_hi": "'Please pass me the salt.' यह किस प्रकार का वाक्य है?",
        "options_en": ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
        "options_hi": ["वर्णनात्मक", "प्रश्नवाचक", "आज्ञार्थक", "विस्मयादिबोधक"],
        "answer_en": "Imperative",
        "answer_hi": "आज्ञार्थक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Choose the correct passive voice of: 'They will complete the work tomorrow.'",
        "question_hi": "'They will complete the work tomorrow.' का सही कर्तृवाच्य रूप चुनें।",
        "options_en": [
          "The work will be completed by them tomorrow.",
          "The work is completed by them tomorrow.",
          "They will be completing the work tomorrow.",
          "The work will completed by them tomorrow."
        ],
        "options_hi": [
          "काम कल उनके द्वारा पूरा किया जाएगा।",
          "काम कल उनके द्वारा पूरा किया जाता है।",
          "वे कल काम पूरा कर रहे होंगे।",
          "काम कल उनके द्वारा पूरा किया गया।"
        ],
        "answer_en": "The work will be completed by them tomorrow.",
        "answer_hi": "काम कल उनके द्वारा पूरा किया जाएगा।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Which of the following is a synonym of 'benevolent'?",
        "question_hi": "'benevolent' का पर्यायवाची शब्द क्या है?",
        "options_en": ["Cruel", "Kind", "Lazy", "Harsh"],
        "options_hi": ["क्रूर", "दयालु", "आलसी", "कठोर"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Select the correctly punctuated sentence.",
        "question_hi": "सही विराम चिह्नों के साथ लिखा गया वाक्य चुनें।",
        "options_en": [
          "wow that is amazing!",
          "Wow! That is amazing.",
          "Wow that is amazing.",
          "Wow, that is amazing?"
        ],
        "options_hi": [
          "wow that is amazing!",
          "वाह! वह अद्भुत है।",
          "वाह वह अद्भुत है।",
          "वाह, वह अद्भुत है?"
        ],
        "answer_en": "Wow! That is amazing.",
        "answer_hi": "वाह! वह अद्भुत है।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "What is the antonym of 'optimistic'?",
        "question_hi": "'optimistic' का विलोम शब्द क्या है?",
        "options_en": ["Hopeful", "Cheerful", "Pessimistic", "Joyful"],
        "options_hi": ["आशावान", "प्रसन्न", "निराशावादी", "आनंदी"],
        "answer_en": "Pessimistic",
        "answer_hi": "निराशावादी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which part of speech is the word 'quickly'?",
        "question_hi": "'quickly' शब्द किस प्रकार का शब्द है?",
        "options_en": ["Noun", "Adjective", "Adverb", "Verb"],
        "options_hi": ["संज्ञा", "विशेषण", "क्रिया विशेषण", "क्रिया"],
        "answer_en": "Adverb",
        "answer_hi": "क्रिया विशेषण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Identify the correct reported speech: He said, \"I am tired.\"",
        "question_hi": "सही रिपोर्टेड स्पीच चुनें: He said, \"I am tired.\"",
        "options_en": [
          "He said that he is tired.",
          "He said that I was tired.",
          "He said that he was tired.",
          "He told that he is tired."
        ],
        "options_hi": [
          "उसने कहा कि वह थका हुआ है।",
          "उसने कहा कि मैं थका हुआ था।",
          "उसने कहा कि वह थका हुआ था।",
          "उसने बताया कि वह थका हुआ है।"
        ],
        "answer_en": "He said that he was tired.",
        "answer_hi": "उसने कहा कि वह थका हुआ था।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which suffix is used to form a noun from the verb 'act'?",
        "question_hi": "'act' क्रिया से संज्ञा बनाने के लिए कौन-सा प्रत्यय प्रयोग होता है?",
        "options_en": ["-ing", "-ion", "-ly", "-ed"],
        "options_hi": ["-ing", "-ion", "-ly", "-ed"],
        "answer_en": "-ion",
        "answer_hi": "-ion",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Choose the word that best fits: 'She is very _____ in painting.'",
        "question_hi": "रिक्त स्थान भरें: 'She is very _____ in painting.'",
        "options_en": ["interest", "interested", "interesting", "interests"],
        "options_hi": ["रुचि", "रुचिकर", "रुचिपूर्ण", "रुचियाँ"],
        "answer_en": "interested",
        "answer_hi": "रुचिकर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which one is an example of a complex sentence?",
        "question_hi": "निम्न में से कौन-सा एक जटिल वाक्य का उदाहरण है?",
        "options_en": [
          "He ran fast.",
          "He ran fast and won.",
          "He ran fast because he was late.",
          "Run fast!"
        ],
        "options_hi": [
          "वह तेज दौड़ा।",
          "वह तेज दौड़ा और जीत गया।",
          "वह तेज दौड़ा क्योंकि वह देर से था।",
          "तेज़ दौड़ो!"
        ],
        "answer_en": "He ran fast because he was late.",
        "answer_hi": "वह तेज दौड़ा क्योंकि वह देर से था।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which sentence uses the correct form of the verb?",
        "question_hi": "कौन-सा वाक्य क्रिया का सही रूप प्रयोग करता है?",
        "options_en": [
          "He go to school daily.",
          "He goes to school daily.",
          "He going to school daily.",
          "He gone to school daily."
        ],
        "options_hi": [
          "वह रोज़ स्कूल जाते हैं।",
          "वह रोज़ स्कूल जाता है।",
          "वह रोज़ स्कूल जा रहा है।",
          "वह रोज़ स्कूल गया।"
        ],
        "answer_en": "He goes to school daily.",
        "answer_hi": "वह रोज़ स्कूल जाता है।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which of these is an interrogative pronoun?",
        "question_hi": "निम्न में से कौन-सा प्रश्नवाचक सर्वनाम है?",
        "options_en": ["He", "Who", "This", "My"],
        "options_hi": ["वह", "कौन", "यह", "मेरा"],
        "answer_en": "Who",
        "answer_hi": "कौन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which is the correct spelling?",
        "question_hi": "सही वर्तनी क्या है?",
        "options_en": ["Definately", "Definitely", "Defanitely", "Definetly"],
        "options_hi": ["डेफिनेटली", "डेफिनिटली", "डेफनिटली", "डेफिनैटली"],
        "answer_en": "Definitely",
        "answer_hi": "Definitely",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Identify the type of clause: 'Although he was tired, he kept working.'",
        "question_hi": "'Although he was tired, he kept working.' में प्रयुक्त उपवाक्य का प्रकार क्या है?",
        "options_en": ["Noun Clause", "Adverb Clause", "Relative Clause", "Principal Clause"],
        "options_hi": ["संज्ञा उपवाक्य", "क्रिया विशेषण उपवाक्य", "सम्बंधवाचक उपवाक्य", "मुख्य वाक्य"],
        "answer_en": "Adverb Clause",
        "answer_hi": "क्रिया विशेषण उपवाक्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which sentence is in passive voice?",
        "question_hi": "निम्न में से कौन-सा वाक्य कर्तृवाच्य है?",
        "options_en": [
          "He wrote a letter.",
          "A letter was written by him.",
          "He is writing a letter.",
          "He will write a letter."
        ],
        "options_hi": [
          "उसने पत्र लिखा।",
          "उसके द्वारा पत्र लिखा गया।",
          "वह पत्र लिख रहा है।",
          "वह पत्र लिखेगा।"
        ],
        "answer_en": "A letter was written by him.",
        "answer_hi": "उसके द्वारा पत्र लिखा गया।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Choose the correct article: 'He is _____ honest man.'",
        "question_hi": "'He is _____ honest man.' के लिए सही आर्टिकल चुनें।",
        "options_en": ["a", "an", "the", "no article"],
        "options_hi": ["a", "an", "the", "कोई नहीं"],
        "answer_en": "an",
        "answer_hi": "an",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which one is a homophone of 'pair'?",
        "question_hi": "'pair' का समध्वनि शब्द कौन-सा है?",
        "options_en": ["Pare", "Pear", "Peer", "Par"],
        "options_hi": ["Pare", "Pear", "Peer", "Par"],
        "answer_en": "Pear",
        "answer_hi": "Pear",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which of the following is a conjunction?",
        "question_hi": "निम्न में से कौन-सा एक संयोजक है?",
        "options_en": ["And", "Run", "Quickly", "Beautiful"],
        "options_hi": ["और", "दौड़ना", "तेजी से", "सुंदर"],
        "answer_en": "And",
        "answer_hi": "और",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which one of the following is a correct complex sentence?",
        "question_hi": "निम्न में से कौन-सा वाक्य एक सही जटिल वाक्य है?",
        "options_en": ["He eats and sleeps.", "He went home after he finished work.", "Please bring me a glass of water.", "What a beautiful painting!"],
        "options_hi": ["वह खाता है और सोता है।", "काम खत्म करने के बाद वह घर गया।", "कृपया मुझे एक गिलास पानी दीजिए।", "क्या सुंदर चित्र है!"],
        "answer_en": "He went home after he finished work.",
        "answer_hi": "काम खत्म करने के बाद वह घर गया।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which part of the sentence is the predicate: 'The boy kicked the ball'?",
        "question_hi": "'The boy kicked the ball' वाक्य में कर्ता के बाद का भाग क्या है?",
        "options_en": ["The boy", "kicked the ball", "kicked", "the ball"],
        "options_hi": ["The boy", "kicked the ball", "kicked", "the ball"],
        "answer_en": "kicked the ball",
        "answer_hi": "kicked the ball",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Choose the correct reported speech: She said, \"I can dance.\"",
        "question_hi": "She said, \"I can dance.\" का सही अप्रत्यक्ष वाक्य चुनें।",
        "options_en": ["She said that she could dance.", "She said that I can dance.", "She said she can dance.", "She said that she can dances."],
        "options_hi": ["उसने कहा कि वह नृत्य कर सकती है।", "उसने कहा कि मैं नृत्य कर सकती हूँ।", "उसने कहा वह नृत्य कर सकती है।", "उसने कहा कि वह नृत्य करती है।"],
        "answer_en": "She said that she could dance.",
        "answer_hi": "उसने कहा कि वह नृत्य कर सकती है।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which of the following is an interrogative sentence?",
        "question_hi": "निम्न में से कौन-सा एक प्रश्नवाचक वाक्य है?",
        "options_en": ["He is a good singer.", "What are you doing?", "She was dancing gracefully.", "It is raining heavily."],
        "options_hi": ["वह एक अच्छा गायक है।", "तुम क्या कर रहे हो?", "वह सुंदरता से नृत्य कर रही थी।", "तेज़ बारिश हो रही है।"],
        "answer_en": "What are you doing?",
        "answer_hi": "तुम क्या कर रहे हो?",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which of the following words is an antonym of 'generous'?",
        "question_hi": "'generous' (उदार) शब्द का विलोम क्या है?",
        "options_en": ["Kind", "Selfish", "Helpful", "Gentle"],
        "options_hi": ["दयालु", "स्वार्थी", "सहायक", "कोमल"],
        "answer_en": "Selfish",
        "answer_hi": "स्वार्थी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Which sentence is in the past perfect tense?",
        "question_hi": "निम्न में से कौन-सा वाक्य past perfect tense में है?",
        "options_en": ["She had eaten before they arrived.", "She eats quickly.", "They were eating.", "I am going home."],
        "options_hi": ["उनके आने से पहले वह खा चुकी थी।", "वह जल्दी खाती है।", "वे खा रहे थे।", "मैं घर जा रहा हूँ।"],
        "answer_en": "She had eaten before they arrived.",
        "answer_hi": "उनके आने से पहले वह खा चुकी थी।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Identify the correct passive voice: 'He writes a letter.'",
        "question_hi": "'He writes a letter.' का सही passive voice चुनें।",
        "options_en": ["A letter is written by him.", "A letter was written by him.", "A letter has written by him.", "A letter is being written by him."],
        "options_hi": ["एक पत्र उसके द्वारा लिखा जाता है।", "एक पत्र उसके द्वारा लिखा गया।", "एक पत्र उसके द्वारा लिखा गया है।", "एक पत्र उसके द्वारा लिखा जा रहा है।"],
        "answer_en": "A letter is written by him.",
        "answer_hi": "एक पत्र उसके द्वारा लिखा जाता है।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Select the correct spelling:",
        "question_hi": "सही वर्तनी चुनें:",
        "options_en": ["Accomodation", "Accommodation", "Acommodation", "Acommadation"],
        "options_hi": ["Accomodation", "Accommodation", "Acommodation", "Acommadation"],
        "answer_en": "Accommodation",
        "answer_hi": "Accommodation",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Which of these is a synonym of 'brave'?",
        "question_hi": "'brave' का पर्यायवाची शब्द कौन-सा है?",
        "options_en": ["Coward", "Timid", "Courageous", "Afraid"],
        "options_hi": ["कायर", "डरपोक", "साहसी", "डरा हुआ"],
        "answer_en": "Courageous",
        "answer_hi": "साहसी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "What is the noun form of the verb 'decide'?",
        "question_hi": "'decide' क्रिया का संज्ञा रूप क्या है?",
        "options_en": ["Deciding", "Decision", "Decided", "Decisive"],
        "options_hi": ["निर्णय लेना", "निर्णय", "निर्णीत", "निर्णायक"],
        "answer_en": "Decision",
        "answer_hi": "निर्णय",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which one of the following is a declarative sentence?",
        "question_hi": "निम्न में से कौन-सा वाक्य विधानवाचक है?",
        "options_en": ["What a beautiful garden!", "Are you coming with me?", "He is reading a book.", "Close the door."],
        "options_hi": ["क्या सुंदर बगीचा है!", "क्या तुम मेरे साथ आ रहे हो?", "वह एक किताब पढ़ रहा है।", "दरवाज़ा बंद करो।"],
        "answer_en": "He is reading a book.",
        "answer_hi": "वह एक किताब पढ़ रहा है।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Choose the correct indirect speech: He said, \"I am busy now.\"",
        "question_hi": "He said, \"I am busy now.\" का सही अप्रत्यक्ष वाक्य चुनें।",
        "options_en": ["He said that he is busy now.", "He said that he was busy then.", "He said he was busy now.", "He said that I am busy now."],
        "options_hi": ["उसने कहा कि वह अब व्यस्त है।", "उसने कहा कि वह तब व्यस्त था।", "उसने कहा वह अब व्यस्त था।", "उसने कहा कि मैं अब व्यस्त हूँ।"],
        "answer_en": "He said that he was busy then.",
        "answer_hi": "उसने कहा कि वह तब व्यस्त था।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Which of the following is a preposition?",
        "question_hi": "निम्न में से कौन-सा एक पूर्वसर्ग (preposition) है?",
        "options_en": ["Quickly", "Under", "Happy", "Run"],
        "options_hi": ["तेज़ी से", "नीचे", "खुश", "दौड़ना"],
        "answer_en": "Under",
        "answer_hi": "नीचे",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Which of these is a correct interrogative sentence?",
        "question_hi": "इनमें से कौन-सा एक सही प्रश्नवाचक वाक्य है?",
        "options_en": ["Do you know the answer?", "He knows the answer.", "Please tell the answer.", "The answer is known."],
        "options_hi": ["क्या तुम उत्तर जानते हो?", "वह उत्तर जानता है।", "कृपया उत्तर बताओ।", "उत्तर ज्ञात है।"],
        "answer_en": "Do you know the answer?",
        "answer_hi": "क्या तुम उत्तर जानते हो?",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Identify the type of sentence: 'Please be quiet.'",
        "question_hi": "'Please be quiet.' वाक्य का प्रकार बताइए।",
        "options_en": ["Interrogative", "Declarative", "Imperative", "Exclamatory"],
        "options_hi": ["प्रश्नवाचक", "विधानवाचक", "आज्ञावाचक", "विस्मयादिबोधक"],
        "answer_en": "Imperative",
        "answer_hi": "आज्ञावाचक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What is the synonym of 'honest'?",
        "question_hi": "'honest' (ईमानदार) का पर्यायवाची शब्द क्या है?",
        "options_en": ["Truthful", "Dishonest", "Greedy", "Lazy"],
        "options_hi": ["सत्यवादी", "बेईमान", "लोभी", "आलसी"],
        "answer_en": "Truthful",
        "answer_hi": "सत्यवादी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Choose the correct passive voice: 'They are cleaning the room.'",
        "question_hi": "'They are cleaning the room.' का सही passive voice क्या है?",
        "options_en": ["The room is cleaned by them.", "The room was being cleaned by them.", "The room is being cleaned by them.", "The room has been cleaned by them."],
        "options_hi": ["कमरा उनके द्वारा साफ़ किया जाता है।", "कमरा उनके द्वारा साफ़ किया जा रहा था।", "कमरा उनके द्वारा साफ़ किया जा रहा है।", "कमरा उनके द्वारा साफ़ किया गया है।"],
        "answer_en": "The room is being cleaned by them.",
        "answer_hi": "कमरा उनके द्वारा साफ़ किया जा रहा है।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What is the antonym of 'ancient'?",
        "question_hi": "'ancient' (प्राचीन) का विलोम शब्द क्या है?",
        "options_en": ["Old", "Modern", "Antique", "Past"],
        "options_hi": ["पुराना", "आधुनिक", "प्राचीन वस्तु", "भूतकाल"],
        "answer_en": "Modern",
        "answer_hi": "आधुनिक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which one is a compound sentence?",
        "question_hi": "इनमें से कौन-सा एक संयुक्त वाक्य है?",
        "options_en": ["She is poor but honest.", "Because she was tired, she slept.", "She sings.", "Sit down."],
        "options_hi": ["वह गरीब है लेकिन ईमानदार है।", "क्योंकि वह थकी हुई थी, वह सो गई।", "वह गाती है।", "बैठ जाओ।"],
        "answer_en": "She is poor but honest.",
        "answer_hi": "वह गरीब है लेकिन ईमानदार है।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which of the following is a correct exclamatory sentence?",
        "question_hi": "निम्न में से कौन-सा एक सही विस्मयादिबोधक वाक्य है?",
        "options_en": ["What a nice day it is!", "It is a sunny day.", "Please open the window.", "Is it raining?"],
        "options_hi": ["कितना अच्छा दिन है!", "यह एक धूप वाला दिन है।", "कृपया खिड़की खोलो।", "क्या बारिश हो रही है?"],
        "answer_en": "What a nice day it is!",
        "answer_hi": "कितना अच्छा दिन है!",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Choose the correct synonym of 'brave'.",
        "question_hi": "'brave' (बहादुर) का सही पर्यायवाची शब्द चुनें।",
        "options_en": ["Coward", "Timid", "Courageous", "Weak"],
        "options_hi": ["कायर", "डरपोक", "साहसी", "कमज़ोर"],
        "answer_en": "Courageous",
        "answer_hi": "साहसी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Identify the type of noun in the word 'truth'.",
        "question_hi": "'truth' शब्द में संज्ञा का कौन-सा प्रकार है?",
        "options_en": ["Proper noun", "Common noun", "Abstract noun", "Collective noun"],
        "options_hi": ["व्यक्तिवाचक संज्ञा", "जातिवाचक संज्ञा", "भाववाचक संज्ञा", "समूहवाचक संज्ञा"],
        "answer_en": "Abstract noun",
        "answer_hi": "भाववाचक संज्ञा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which of the following is a conjunction?",
        "question_hi": "निम्न में से कौन-सा एक संयोजक (conjunction) है?",
        "options_en": ["However", "Slowly", "He", "Kind"],
        "options_hi": ["हालाँकि", "धीरे", "वह", "दयालु"],
        "answer_en": "However",
        "answer_hi": "हालाँकि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Select the sentence with correct punctuation.",
        "question_hi": "सही विराम चिह्न वाले वाक्य का चयन करें।",
        "options_en": ["what are you doing", "What are you doing.", "What are you doing!", "What are you doing?"],
        "options_hi": ["what are you doing", "What are you doing.", "What are you doing!", "What are you doing?"],
        "answer_en": "What are you doing?",
        "answer_hi": "What are you doing?",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "What is the antonym of 'generous'?",
        "question_hi": "'generous' (उदार) का विलोम शब्द क्या है?",
        "options_en": ["Kind", "Stingy", "Helpful", "Loyal"],
        "options_hi": ["दयालु", "कंजूस", "सहायक", "वफ़ादार"],
        "answer_en": "Stingy",
        "answer_hi": "कंजूस",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Identify the correct passive form: 'She writes a letter.'",
        "question_hi": "'She writes a letter.' का सही passive form क्या है?",
        "options_en": ["A letter is written by her.", "A letter was written by her.", "A letter is being written by her.", "A letter has been written by her."],
        "options_hi": ["एक पत्र उसके द्वारा लिखा गया है।", "एक पत्र उसके द्वारा लिखा गया था।", "एक पत्र उसके द्वारा लिखा जा रहा है।", "एक पत्र उसके द्वारा लिखा गया है।"],
        "answer_en": "A letter is written by her.",
        "answer_hi": "एक पत्र उसके द्वारा लिखा गया है।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Find the adjective in the sentence: 'He is a clever boy.'",
        "question_hi": "'He is a clever boy.' वाक्य में विशेषण (adjective) शब्द कौन-सा है?",
        "options_en": ["He", "Is", "Clever", "Boy"],
        "options_hi": ["He", "Is", "Clever", "Boy"],
        "answer_en": "Clever",
        "answer_hi": "Clever",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which is the correct reported speech: He said, \"I will go there.\"",
        "question_hi": "He said, \"I will go there.\" का सही reported speech क्या है?",
        "options_en": ["He said he would go there.", "He said I would go there.", "He said he will go there.", "He says he would go there."],
        "options_hi": ["उसने कहा कि वह वहाँ जाएगा।", "उसने कहा कि मैं वहाँ जाऊँगा।", "उसने कहा कि वह जाएगा।", "वह कहता है कि वह वहाँ जाएगा।"],
        "answer_en": "He said he would go there.",
        "answer_hi": "उसने कहा कि वह वहाँ जाएगा।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Pick the correct spelling:",
        "question_hi": "सही वर्तनी चुनें:",
        "options_en": ["Comittee", "Commitee", "Committee", "Commetee"],
        "options_hi": ["Comittee", "Commitee", "Committee", "Commetee"],
        "answer_en": "Committee",
        "answer_hi": "Committee",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Choose the correct tense: 'She has been singing for an hour.'",
        "question_hi": "'She has been singing for an hour.' किस काल में है?",
        "options_en": ["Past Continuous", "Present Perfect", "Present Perfect Continuous", "Future Continuous"],
        "options_hi": ["भूतकालीन अपूर्ण", "वर्तमान पूर्ण", "वर्तमान पूर्ण अपूर्ण", "भविष्यत अपूर्ण"],
        "answer_en": "Present Perfect Continuous",
        "answer_hi": "वर्तमान पूर्ण अपूर्ण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "Which one is an example of interjection?",
        "question_hi": "निम्न में से कौन-सा एक विस्मयादिबोधक शब्द है?",
        "options_en": ["Wow!", "Dog", "Run", "Soft"],
        "options_hi": ["वाह!", "कुत्ता", "दौड़", "मुलायम"],
        "answer_en": "Wow!",
        "answer_hi": "वाह!",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "Choose the correct form: He ________ to school every day.",
        "question_hi": "सही रूप चुनें: He ________ to school every day.",
        "options_en": ["go", "goes", "gone", "going"],
        "options_hi": ["go", "goes", "gone", "going"],
        "answer_en": "goes",
        "answer_hi": "goes",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "What is the comparative form of 'good'?",
        "question_hi": "'good' का तुलनात्मक (comparative) रूप क्या है?",
        "options_en": ["Gooder", "Better", "Best", "More good"],
        "options_hi": ["गुड़र", "बेटर", "बेस्ट", "मोर गुड"],
        "answer_en": "Better",
        "answer_hi": "Better",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "Choose the plural form of 'mouse'.",
        "question_hi": "'mouse' का बहुवचन रूप क्या है?",
        "options_en": ["Mouses", "Mices", "Mouse", "Mice"],
        "options_hi": ["Mouses", "Mices", "Mouse", "Mice"],
        "answer_en": "Mice",
        "answer_hi": "Mice",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "Select the correct article: He is ______ honest man.",
        "question_hi": "सही article चुनें: He is ______ honest man.",
        "options_en": ["a", "an", "the", "no article"],
        "options_hi": ["a", "an", "the", "कोई नहीं"],
        "answer_en": "an",
        "answer_hi": "an",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "Identify the tense: They were playing football.",
        "question_hi": "'They were playing football.' किस काल में है?",
        "options_en": ["Present Continuous", "Past Continuous", "Future Continuous", "Present Perfect"],
        "options_hi": ["वर्तमान अपूर्ण", "भूतकालीन अपूर्ण", "भविष्यत अपूर्ण", "वर्तमान पूर्ण"],
        "answer_en": "Past Continuous",
        "answer_hi": "भूतकालीन अपूर्ण",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "Find the adverb: She speaks politely.",
        "question_hi": "'She speaks politely.' में क्रिया विशेषण (adverb) शब्द बताएं।",
        "options_en": ["She", "Speaks", "Politely", "None"],
        "options_hi": ["She", "Speaks", "Politely", "कोई नहीं"],
        "answer_en": "Politely",
        "answer_hi": "Politely",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "Choose the correct one word substitution: A person who travels on foot.",
        "question_hi": "एक पदयात्री के लिए एक शब्द का विकल्प चुनें।",
        "options_en": ["Driver", "Pilot", "Pedestrian", "Passenger"],
        "options_hi": ["चालक", "पायलट", "पैदल यात्री", "यात्री"],
        "answer_en": "Pedestrian",
        "answer_hi": "पैदल यात्री",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "Which sentence is in future tense?",
        "question_hi": "कौन-सा वाक्य भविष्यत काल में है?",
        "options_en": ["I go to school.", "I went to school.", "I will go to school.", "I am going to school."],
        "options_hi": ["मैं स्कूल जाता हूँ।", "मैं स्कूल गया।", "मैं स्कूल जाऊँगा।", "मैं स्कूल जा रहा हूँ।"],
        "answer_en": "I will go to school.",
        "answer_hi": "मैं स्कूल जाऊँगा।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "Which of these is a modal verb?",
        "question_hi": "इनमें से कौन-सा एक modal verb है?",
        "options_en": ["Can", "Doing", "Go", "Quick"],
        "options_hi": ["सकना", "करना", "जाना", "तेज़"],
        "answer_en": "Can",
        "answer_hi": "सकना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "Choose the correct synonym of 'angry'.",
        "question_hi": "'angry' का सही पर्यायवाची शब्द चुनें।",
        "options_en": ["Happy", "Furious", "Calm", "Kind"],
        "options_hi": ["खुश", "क्रोधित", "शांत", "दयालु"],
        "answer_en": "Furious",
        "answer_hi": "क्रोधित",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "Identify the type of sentence: 'Please close the door.'",
        "question_hi": "'Please close the door.' किस प्रकार का वाक्य है?",
        "options_en": ["Interrogative", "Declarative", "Imperative", "Exclamatory"],
        "options_hi": ["प्रश्नवाचक", "वर्णनात्मक", "आज्ञा वाचक", "विस्मयादिबोधक"],
        "answer_en": "Imperative",
        "answer_hi": "आज्ञा वाचक",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "Which one is a preposition?",
        "question_hi": "निम्न में से कौन-सा एक संबंध सूचक अव्यय (preposition) है?",
        "options_en": ["On", "Run", "Fast", "Smile"],
        "options_hi": ["पर", "दौड़", "तेज़", "मुस्कान"],
        "answer_en": "On",
        "answer_hi": "पर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "Choose the correct form: I have ______ a story.",
        "question_hi": "सही रूप चुनें: I have ______ a story.",
        "options_en": ["wrote", "written", "write", "writes"],
        "options_hi": ["लिखा", "लिखी", "लिखना", "लिखता"],
        "answer_en": "written",
        "answer_hi": "लिखी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "Find the correct plural form of 'child'.",
        "question_hi": "'child' का सही बहुवचन रूप क्या है?",
        "options_en": ["Childs", "Children", "Childes", "Childer"],
        "options_hi": ["चाइल्ड्स", "चिल्ड्रन", "चाइल्डेस", "चिल्डर"],
        "answer_en": "Children",
        "answer_hi": "चिल्ड्रन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "Identify the verb in the sentence: 'Birds fly in the sky.'",
        "question_hi": "'Birds fly in the sky.' वाक्य में क्रिया (verb) कौन-सी है?",
        "options_en": ["Birds", "Fly", "Sky", "In"],
        "options_hi": ["पक्षी", "उड़ना", "आकाश", "में"],
        "answer_en": "Fly",
        "answer_hi": "उड़ना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "Choose the correct spelling:",
        "question_hi": "सही वर्तनी चुनें:",
        "options_en": ["Accomodation", "Acommodation", "Accommodation", "Acomodation"],
        "options_hi": ["Accomodation", "Acommodation", "Accommodation", "Acomodation"],
        "answer_en": "Accommodation",
        "answer_hi": "Accommodation",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "Select the correct reported speech: He said, \"I am working.\"",
        "question_hi": "He said, \"I am working.\" का सही reported speech क्या है?",
        "options_en": ["He said that he is working.", "He said that he was working.", "He said that I was working.", "He said he worked."],
        "options_hi": ["उसने कहा कि वह काम कर रहा है।", "उसने कहा कि वह काम कर रहा था।", "उसने कहा कि मैं काम कर रहा था।", "उसने कहा कि वह काम किया।"],
        "answer_en": "He said that he was working.",
        "answer_hi": "उसने कहा कि वह काम कर रहा था।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "What is the antonym of 'accept'?",
        "question_hi": "'accept' का विलोम शब्द क्या है?",
        "options_en": ["Agree", "Take", "Receive", "Reject"],
        "options_hi": ["सहमत", "लेना", "स्वीकार", "अस्वीकार"],
        "answer_en": "Reject",
        "answer_hi": "अस्वीकार",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "Choose the correct article: He bought ______ umbrella.",
        "question_hi": "सही article चुनें: He bought ______ umbrella.",
        "options_en": ["a", "an", "the", "no article"],
        "options_hi": ["a", "an", "the", "कोई नहीं"],
        "answer_en": "an",
        "answer_hi": "an",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "Which of these is an exclamatory sentence?",
        "question_hi": "इनमें से कौन-सा वाक्य विस्मयादिबोधक है?",
        "options_en": ["How are you?", "What a beautiful day!", "I am tired.", "Please help me."],
        "options_hi": ["तुम कैसे हो?", "कितना सुंदर दिन है!", "मैं थक गया हूँ।", "कृपया मेरी मदद करो।"],
        "answer_en": "What a beautiful day!",
        "answer_hi": "कितना सुंदर दिन है!",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "Pick the correct form: She ______ already left.",
        "question_hi": "सही रूप चुनें: She ______ already left.",
        "options_en": ["has", "have", "is", "was"],
        "options_hi": ["has", "have", "is", "was"],
        "answer_en": "has",
        "answer_hi": "has",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "Identify the adverb in: He runs very fast.",
        "question_hi": "'He runs very fast.' में क्रिया विशेषण (adverb) शब्द बताएं।",
        "options_en": ["He", "Runs", "Fast", "Very"],
        "options_hi": ["He", "Runs", "Fast", "Very"],
        "answer_en": "Fast",
        "answer_hi": "Fast",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "What is the feminine form of 'actor'?",
        "question_hi": "'actor' का स्त्रीलिंग रूप क्या है?",
        "options_en": ["Actress", "Actorin", "Lady actor", "Actoress"],
        "options_hi": ["अभिनेत्री", "अभिनोरिन", "लेडी एक्टर", "एक्ट्रेस"],
        "answer_en": "Actress",
        "answer_hi": "अभिनेत्री",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "Which word is a conjunction?",
        "question_hi": "निम्न में से कौन-सा शब्द संयोजक है?",
        "options_en": ["And", "Running", "Book", "Blue"],
        "options_hi": ["और", "दौड़ना", "पुस्तक", "नीला"],
        "answer_en": "And",
        "answer_hi": "और",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "Choose the correct preposition: He sat ______ the chair.",
        "question_hi": "सही preposition चुनें: He sat ______ the chair.",
        "options_en": ["on", "in", "at", "under"],
        "options_hi": ["पर", "में", "पर", "नीचे"],
        "answer_en": "on",
        "answer_hi": "पर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "Select the proper noun from the sentence: 'Ravi plays cricket.'",
        "question_hi": "'Ravi plays cricket.' वाक्य में व्यक्तिवाचक संज्ञा (Proper Noun) बताएं।",
        "options_en": ["Plays", "Cricket", "Ravi", "None"],
        "options_hi": ["खेलता", "क्रिकेट", "रवि", "कोई नहीं"],
        "answer_en": "Ravi",
        "answer_hi": "रवि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "Find the odd one out:",
        "question_hi": "असंगत शब्द चुनें:",
        "options_en": ["Cat", "Dog", "Cow", "Table"],
        "options_hi": ["बिल्ली", "कुत्ता", "गाय", "मेज"],
        "answer_en": "Table",
        "answer_hi": "मेज",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "Which of these is used to show possession?",
        "question_hi": "इनमें से कौन-सा शब्द स्वामित्व (possession) दर्शाता है?",
        "options_en": ["Is", "Are", "Has", "Go"],
        "options_hi": ["है", "हैं", "है (स्वामित्व)", "जाना"],
        "answer_en": "Has",
        "answer_hi": "है (स्वामित्व)",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "What is the superlative form of 'beautiful'?",
        "question_hi": "'beautiful' का पराक्रमी (superlative) रूप क्या है?",
        "options_en": ["More beautiful", "Most beautiful", "Beautifuller", "Beauty"],
        "options_hi": ["अधिक सुंदर", "सबसे सुंदर", "सुन्‍दरतर", "सुंदरता"],
        "answer_en": "Most beautiful",
        "answer_hi": "सबसे सुंदर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "Choose the correct passive voice: They completed the work.",
        "question_hi": "सही passive voice चुनें: They completed the work.",
        "options_en": [
          "The work is completed by them.",
          "The work has been completed by them.",
          "The work was completed by them.",
          "The work was being completed by them."
        ],
        "options_hi": [
          "काम उनके द्वारा पूरा किया गया है।",
          "काम उनके द्वारा पूरा किया जा चुका है।",
          "काम उनके द्वारा पूरा किया गया था।",
          "काम उनके द्वारा पूरा किया जा रहा था।"
        ],
        "answer_en": "The work was completed by them.",
        "answer_hi": "काम उनके द्वारा पूरा किया गया था।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "Which sentence is in the future tense?",
        "question_hi": "निम्न में से कौन-सा वाक्य भविष्य काल में है?",
        "options_en": [
          "He eats an apple.",
          "He was eating an apple.",
          "He will eat an apple.",
          "He is eating an apple."
        ],
        "options_hi": [
          "वह सेब खाता है।",
          "वह सेब खा रहा था।",
          "वह सेब खाएगा।",
          "वह सेब खा रहा है।"
        ],
        "answer_en": "He will eat an apple.",
        "answer_hi": "वह सेब खाएगा।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "What is the antonym of 'brave'?",
        "question_hi": "'brave' का विलोम शब्द क्या है?",
        "options_en": ["Strong", "Coward", "Hero", "Fearless"],
        "options_hi": ["मजबूत", "कायर", "वीर", "निर्भीक"],
        "answer_en": "Coward",
        "answer_hi": "कायर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "Identify the conjunction: She is poor but honest.",
        "question_hi": "'She is poor but honest.' वाक्य में conjunction (संयोजक) शब्द कौन-सा है?",
        "options_en": ["She", "Is", "But", "Honest"],
        "options_hi": ["वह", "है", "लेकिन", "ईमानदार"],
        "answer_en": "But",
        "answer_hi": "लेकिन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "Select the correct indirect speech: He said, \"I can do it.\"",
        "question_hi": "सही indirect speech चुनें: He said, \"I can do it.\"",
        "options_en": [
          "He said that he could do it.",
          "He said that I could do it.",
          "He says that he can do it.",
          "He told that he can do it."
        ],
        "options_hi": [
          "उसने कहा कि वह इसे कर सकता है।",
          "उसने कहा कि मैं इसे कर सकता हूँ।",
          "वह कहता है कि वह इसे कर सकता है।",
          "उसने बताया कि वह इसे कर सकता है।"
        ],
        "answer_en": "He said that he could do it.",
        "answer_hi": "उसने कहा कि वह इसे कर सकता है।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "Which word is the synonym of 'tiny'?",
        "question_hi": "'tiny' का पर्यायवाची शब्द कौन-सा है?",
        "options_en": ["Big", "Large", "Small", "Huge"],
        "options_hi": ["बड़ा", "विशाल", "छोटा", "बहुत बड़ा"],
        "answer_en": "Small",
        "answer_hi": "छोटा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "Choose the correct verb form: He ______ to school every day.",
        "question_hi": "सही verb form चुनें: He ______ to school every day.",
        "options_en": ["go", "goes", "gone", "going"],
        "options_hi": ["जाता", "जाता है", "गया", "जा रहा"],
        "answer_en": "goes",
        "answer_hi": "जाता है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "What is the opposite of 'dark'?",
        "question_hi": "'dark' का विलोम शब्द क्या है?",
        "options_en": ["Black", "Night", "Bright", "Deep"],
        "options_hi": ["काला", "रात", "उज्ज्वल", "गहरा"],
        "answer_en": "Bright",
        "answer_hi": "उज्ज्वल",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "Select the correct preposition: She is fond ______ music.",
        "question_hi": "सही preposition चुनें: She is fond ______ music.",
        "options_en": ["in", "of", "for", "on"],
        "options_hi": ["में", "का", "के लिए", "पर"],
        "answer_en": "of",
        "answer_hi": "का",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "Which is the correct question tag: He is a teacher, ______?",
        "question_hi": "सही question tag चुनें: He is a teacher, ______?",
        "options_en": ["is he?", "isn't he?", "was he?", "does he?"],
        "options_hi": ["क्या वह है?", "है ना?", "क्या वह था?", "क्या वह करता है?"],
        "answer_en": "isn't he?",
        "answer_hi": "है ना?",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "Identify the adjective in the sentence: She wore a beautiful dress.",
        "question_hi": "'She wore a beautiful dress.' वाक्य में विशेषण (adjective) कौन-सा है?",
        "options_en": ["She", "Wore", "Beautiful", "Dress"],
        "options_hi": ["वह", "पहनना", "सुंदर", "पोशाक"],
        "answer_en": "Beautiful",
        "answer_hi": "सुंदर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "Which one is a noun?",
        "question_hi": "इनमें से कौन-सा शब्द संज्ञा (noun) है?",
        "options_en": ["Run", "Play", "Honesty", "Quick"],
        "options_hi": ["दौड़", "खेल", "ईमानदारी", "तेज़"],
        "answer_en": "Honesty",
        "answer_hi": "ईमानदारी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "What is the past tense of 'run'?",
        "question_hi": "'run' का भूतकाल क्या है?",
        "options_en": ["Run", "Running", "Runned", "Ran"],
        "options_hi": ["दौड़", "दौड़ना", "रन्ड", "दौड़ा"],
        "answer_en": "Ran",
        "answer_hi": "दौड़ा",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "Choose the correct article: I saw ______ elephant.",
        "question_hi": "सही article चुनें: I saw ______ elephant.",
        "options_en": ["a", "an", "the", "no article"],
        "options_hi": ["a", "an", "the", "कोई नहीं"],
        "answer_en": "an",
        "answer_hi": "an",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "Which sentence is grammatically correct?",
        "question_hi": "इनमें से कौन-सा वाक्य व्याकरण की दृष्टि से सही है?",
        "options_en": [
          "He go to market.",
          "She plays piano.",
          "I am go home.",
          "They is happy."
        ],
        "options_hi": [
          "वह बाजार जाता है।",
          "वह पियानो बजाती है।",
          "मैं घर जा रहा हूँ।",
          "वे खुश है।"
        ],
        "answer_en": "She plays piano.",
        "answer_hi": "वह पियानो बजाती है।",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "Choose the correct spelling:",
        "question_hi": "सही वर्तनी चुनें:",
        "options_en": ["Definate", "Defenate", "Definite", "Defanit"],
        "options_hi": ["Definate", "Defenate", "Definite", "Defanit"],
        "answer_en": "Definite",
        "answer_hi": "Definite",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "Which of the following is an interrogative sentence?",
        "question_hi": "निम्न में से कौन-सा वाक्य प्रश्नवाचक है?",
        "options_en": [
          "He is dancing.",
          "Are you coming?",
          "She sings well.",
          "It is raining."
        ],
        "options_hi": [
          "वह नाच रहा है।",
          "क्या तुम आ रहे हो?",
          "वह अच्छा गाती है।",
          "बारिश हो रही है।"
        ],
        "answer_en": "Are you coming?",
        "answer_hi": "क्या तुम आ रहे हो?",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "Select the correct synonym of 'quick'.",
        "question_hi": "'quick' का सही समानार्थी शब्द चुनें।",
        "options_en": ["Slow", "Fast", "Late", "Heavy"],
        "options_hi": ["धीमा", "तेज़", "देर", "भारी"],
        "answer_en": "Fast",
        "answer_hi": "तेज़",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "Which is a verb?",
        "question_hi": "निम्न में से कौन-सा क्रिया (verb) है?",
        "options_en": ["Apple", "Sing", "Blue", "Beautiful"],
        "options_hi": ["सेब", "गाना", "नीला", "सुंदर"],
        "answer_en": "Sing",
        "answer_hi": "गाना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "Choose the correct form: They ______ watching a movie.",
        "question_hi": "सही रूप चुनें: They ______ watching a movie.",
        "options_en": ["is", "are", "was", "be"],
        "options_hi": ["है", "हैं", "था", "होना"],
        "answer_en": "are",
        "answer_hi": "हैं",
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