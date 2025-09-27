const questions = [
    
  
        
                {
                  "num": 1,
                  "question_en": "Who is the author of the poem 'नवजीवन'?",
                  "question_hi": "'नवजीवन' कविता के लेखक कौन हैं?",
                  "options_en": ["Harivansh Rai Bachchan", "Nirala", "Makhanlal Chaturvedi", "Dinkar"],
                  "options_hi": ["हरिवंश राय बच्चन", "निराला", "माखनलाल चतुर्वेदी", "दिनकर"],
                  "answer_en": "Nirala",
                  "answer_hi": "निराला",
                  "attempted": false
                },
                {
                  "num": 2,
                  "question_en": "Which poetic device is used in 'सपने में रंगीनियाँ'?",
                  "question_hi": "'सपने में रंगीनियाँ' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Metaphor", "Simile", "Personification", "Alliteration"],
                  "options_hi": ["रूपक", "उपमा", "मानवीकरण", "अनुप्रास"],
                  "answer_en": "Metaphor",
                  "answer_hi": "रूपक",
                  "attempted": false
                },
                {
                  "num": 3,
                  "question_en": "What is the central theme of 'भारत का गौरव'?",
                  "question_hi": "'भारत का गौरव' कविता का मुख्य विषय क्या है?",
                  "options_en": ["Patriotism", "Courage", "Spirituality", "Love for nature"],
                  "options_hi": ["देशभक्ति", "साहस", "आध्यात्मिकता", "प्रकृति प्रेम"],
                  "answer_en": "Patriotism",
                  "answer_hi": "देशभक्ति",
                  "attempted": false
                },
                {
                  "num": 4,
                  "question_en": "Which poet is known for the poem 'सपनों के गीत'?",
                  "question_hi": "'सपनों के गीत' कविता के लेखक कौन हैं?",
                  "options_en": ["Nirala", "Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi"],
                  "options_hi": ["निराला", "हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Harivansh Rai Bachchan",
                  "answer_hi": "हरिवंश राय बच्चन",
                  "attempted": false
                },
                {
                  "num": 5,
                  "question_en": "What is the poetic device used in 'आसमां के नजारे'?",
                  "question_hi": "'आसमां के नजारे' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
                  "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
                  "answer_en": "Personification",
                  "answer_hi": "मानवीकरण",
                  "attempted": false
                },
                {
                  "num": 6,
                  "question_en": "Who is the author of the poem 'वो लौटे हैं'?",
                  "question_hi": "'वो लौटे हैं' कविता के लेखक कौन हैं?",
                  "options_en": ["Dinkar", "Nirala", "Harivansh Rai Bachchan", "Makhanlal Chaturvedi"],
                  "options_hi": ["दिनकर", "निराला", "हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Dinkar",
                  "answer_hi": "दिनकर",
                  "attempted": false
                },
                {
                  "num": 7,
                  "question_en": "What is the central theme of 'जीवन और मृत्यु'?",
                  "question_hi": "'जीवन और मृत्यु' का मुख्य विषय क्या है?",
                  "options_en": ["Life and death", "Courage and sacrifice", "Love", "Fate and destiny"],
                  "options_hi": ["जीवन और मृत्यु", "साहस और बलिदान", "प्रेम", "कर्म और भाग्य"],
                  "answer_en": "Life and death",
                  "answer_hi": "जीवन और मृत्यु",
                  "attempted": false
                },
                {
                  "num": 8,
                  "question_en": "Who wrote the poem 'माँ'?",
                  "question_hi": "'माँ' कविता के लेखक कौन हैं?",
                  "options_en": ["Harivansh Rai Bachchan", "Makhanlal Chaturvedi", "Nirala", "Dinkar"],
                  "options_hi": ["हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी", "निराला", "दिनकर"],
                  "answer_en": "Harivansh Rai Bachchan",
                  "answer_hi": "हरिवंश राय बच्चन",
                  "attempted": false
                },
                {
                  "num": 9,
                  "question_en": "What is the main poetic device in 'स्वप्न' by Nirala?",
                  "question_hi": "निराला की 'स्वप्न' में कौन-सा मुख्य अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Simile", "Metaphor", "Personification", "Alliteration"],
                  "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अनुप्रास"],
                  "answer_en": "Metaphor",
                  "answer_hi": "रूपक",
                  "attempted": false
                },
                {
                  "num": 10,
                  "question_en": "Who wrote 'गजल'?",
                  "question_hi": "'गजल' कविता के लेखक कौन हैं?",
                  "options_en": ["Mirza Ghalib", "Faiz Ahmed Faiz", "Nirala", "Harivansh Rai Bachchan"],
                  "options_hi": ["मिर्जा गालिब", "फैज़ अहमद फैज़", "निराला", "हरिवंश राय बच्चन"],
                  "answer_en": "Faiz Ahmed Faiz",
                  "answer_hi": "फैज़ अहमद फैज़",
                  "attempted": false
                }
              ,
              
                {
                  "num": 11,
                  "question_en": "Who wrote the poem 'अरण्य का नायक'?",
                  "question_hi": "'अरण्य का नायक' कविता के लेखक कौन हैं?",
                  "options_en": ["Nirala", "Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi"],
                  "options_hi": ["निराला", "हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Dinkar",
                  "answer_hi": "दिनकर",
                  "attempted": false
                },
                {
                  "num": 12,
                  "question_en": "What is the theme of 'नायक और नायिका'?",
                  "question_hi": "'नायक और नायिका' कविता का विषय क्या है?",
                  "options_en": ["Love", "Bravery", "Sacrifice", "Nature"],
                  "options_hi": ["प्रेम", "वीरता", "बलिदान", "प्रकृति"],
                  "answer_en": "Love",
                  "answer_hi": "प्रेम",
                  "attempted": false
                },
                {
                  "num": 13,
                  "question_en": "Who wrote 'प्रकृति और संस्कृति'?",
                  "question_hi": "'प्रकृति और संस्कृति' कविता के लेखक कौन हैं?",
                  "options_en": ["Makhanlal Chaturvedi", "Harivansh Rai Bachchan", "Dinkar", "Nirala"],
                  "options_hi": ["माखनलाल चतुर्वेदी", "हरिवंश राय बच्चन", "दिनकर", "निराला"],
                  "answer_en": "Makhanlal Chaturvedi",
                  "answer_hi": "माखनलाल चतुर्वेदी",
                  "attempted": false
                },
                {
                  "num": 14,
                  "question_en": "What is the poetic device used in the phrase 'धरती की गहनों जैसी आँखें'?",
                  "question_hi": "'धरती की गहनों जैसी आँखें' में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Simile", "Metaphor", "Alliteration", "Personification"],
                  "options_hi": ["उपमा", "रूपक", "अनुप्रास", "मानवीकरण"],
                  "answer_en": "Simile",
                  "answer_hi": "उपमा",
                  "attempted": false
                },
                {
                  "num": 15,
                  "question_en": "Who wrote the poem 'ख़ुदी'?",
                  "question_hi": "'ख़ुदी' कविता के लेखक कौन हैं?",
                  "options_en": ["Allama Iqbal", "Harivansh Rai Bachchan", "Dinkar", "Nirala"],
                  "options_hi": ["अल्लामा इकबाल", "हरिवंश राय बच्चन", "दिनकर", "निराला"],
                  "answer_en": "Allama Iqbal",
                  "answer_hi": "अल्लामा इकबाल",
                  "attempted": false
                },
                {
                  "num": 16,
                  "question_en": "What is the theme of 'मनुष्य' by Dinkar?",
                  "question_hi": "दिनकर की 'मनुष्य' कविता का विषय क्या है?",
                  "options_en": ["Humanism", "Nature", "Love", "Patriotism"],
                  "options_hi": ["मानवता", "प्रकृति", "प्रेम", "देशभक्ति"],
                  "answer_en": "Humanism",
                  "answer_hi": "मानवता",
                  "attempted": false
                },
                {
                  "num": 17,
                  "question_en": "Which poet wrote 'मुझे तोड़ लेने दो'?",
                  "question_hi": "'मुझे तोड़ लेने दो' कविता के लेखक कौन हैं?",
                  "options_en": ["Harivansh Rai Bachchan", "Makhanlal Chaturvedi", "Nirala", "Dinkar"],
                  "options_hi": ["हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी", "निराला", "दिनकर"],
                  "answer_en": "Harivansh Rai Bachchan",
                  "answer_hi": "हरिवंश राय बच्चन",
                  "attempted": false
                },
                {
                  "num": 18,
                  "question_en": "Who wrote 'साँसों की आवाज़'?",
                  "question_hi": "'साँसों की आवाज़' कविता के लेखक कौन हैं?",
                  "options_en": ["Nirala", "Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi"],
                  "options_hi": ["निराला", "हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Nirala",
                  "answer_hi": "निराला",
                  "attempted": false
                },
                {
                  "num": 19,
                  "question_en": "What poetic device is used in the phrase 'झूमते हुए पेड़'?",
                  "question_hi": "'झूमते हुए पेड़' में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Simile", "Metaphor", "Personification", "Alliteration"],
                  "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अनुप्रास"],
                  "answer_en": "Personification",
                  "answer_hi": "मानवीकरण",
                  "attempted": false
                },
                {
                  "num": 20,
                  "question_en": "Which poet is known for the poem 'प्रकृति का रंग'?",
                  "question_hi": "'प्रकृति का रंग' कविता के लेखक कौन हैं?",
                  "options_en": ["Nirala", "Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi"],
                  "options_hi": ["निराला", "हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Makhanlal Chaturvedi",
                  "answer_hi": "माखनलाल चतुर्वेदी",
                  "attempted": false
                }
              ,
              
                {
                  "num": 21,
                  "question_en": "What is the main theme of the poem 'अग्रदूत' by Makhanlal Chaturvedi?",
                  "question_hi": "माखनलाल चतुर्वेदी की 'अग्रदूत' कविता का मुख्य विषय क्या है?",
                  "options_en": ["Patriotism", "Nature", "Love", "Humanism"],
                  "options_hi": ["देशभक्ति", "प्रकृति", "प्रेम", "मानवता"],
                  "answer_en": "Patriotism",
                  "answer_hi": "देशभक्ति",
                  "attempted": false
                },
                {
                  "num": 22,
                  "question_en": "Who is the author of the poem 'शहीद'?",
                  "question_hi": "'शहीद' कविता के लेखक कौन हैं?",
                  "options_en": ["Nirala", "Dinkar", "Harivansh Rai Bachchan", "Makhanlal Chaturvedi"],
                  "options_hi": ["निराला", "दिनकर", "हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Dinkar",
                  "answer_hi": "दिनकर",
                  "attempted": false
                },
                {
                  "num": 23,
                  "question_en": "What is the poetic device used in the line 'आवाज़ें सुनती हैं हवा'?",
                  "question_hi": "'आवाज़ें सुनती हैं हवा' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Personification", "Simile", "Metaphor", "Alliteration"],
                  "options_hi": ["मानवीकरण", "उपमा", "रूपक", "अनुप्रास"],
                  "answer_en": "Personification",
                  "answer_hi": "मानवीकरण",
                  "attempted": false
                },
                {
                  "num": 24,
                  "question_en": "Who wrote the poem 'साहित्य का उद्देश्य'?",
                  "question_hi": "'साहित्य का उद्देश्य' कविता के लेखक कौन हैं?",
                  "options_en": ["Harivansh Rai Bachchan", "Makhanlal Chaturvedi", "Nirala", "Dinkar"],
                  "options_hi": ["हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी", "निराला", "दिनकर"],
                  "answer_en": "Harivansh Rai Bachchan",
                  "answer_hi": "हरिवंश राय बच्चन",
                  "attempted": false
                },
                {
                  "num": 25,
                  "question_en": "What is the central theme of 'जीवन के उद्देश्य'?",
                  "question_hi": "'जीवन के उद्देश्य' कविता का मुख्य विषय क्या है?",
                  "options_en": ["Purpose of life", "Patriotism", "Love", "Courage"],
                  "options_hi": ["जीवन का उद्देश्य", "देशभक्ति", "प्रेम", "साहस"],
                  "answer_en": "Purpose of life",
                  "answer_hi": "जीवन का उद्देश्य",
                  "attempted": false
                },
                {
                  "num": 26,
                  "question_en": "Who wrote 'विजय का गीत'?",
                  "question_hi": "'विजय का गीत' कविता के लेखक कौन हैं?",
                  "options_en": ["Dinkar", "Makhanlal Chaturvedi", "Nirala", "Harivansh Rai Bachchan"],
                  "options_hi": ["दिनकर", "माखनलाल चतुर्वेदी", "निराला", "हरिवंश राय बच्चन"],
                  "answer_en": "Dinkar",
                  "answer_hi": "दिनकर",
                  "attempted": false
                },
                {
                  "num": 27,
                  "question_en": "What is the central theme of 'आत्मगौरव'?",
                  "question_hi": "'आत्मगौरव' कविता का मुख्य विषय क्या है?",
                  "options_en": ["Self-respect", "Patriotism", "Nature", "Love"],
                  "options_hi": ["आत्मसम्मान", "देशभक्ति", "प्रकृति", "प्रेम"],
                  "answer_en": "Self-respect",
                  "answer_hi": "आत्मसम्मान",
                  "attempted": false
                },
                {
                  "num": 28,
                  "question_en": "Who wrote the poem 'धरती माता'?",
                  "question_hi": "'धरती माता' कविता के लेखक कौन हैं?",
                  "options_en": ["Nirala", "Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi"],
                  "options_hi": ["निराला", "हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Makhanlal Chaturvedi",
                  "answer_hi": "माखनलाल चतुर्वेदी",
                  "attempted": false
                },
                {
                  "num": 29,
                  "question_en": "What poetic device is used in the line 'चाँद की चाँदनी जुल्फों में'?",
                  "question_hi": "'चाँद की चाँदनी जुल्फों में' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Metaphor", "Simile", "Personification", "Alliteration"],
                  "options_hi": ["रूपक", "उपमा", "मानवीकरण", "अनुप्रास"],
                  "answer_en": "Metaphor",
                  "answer_hi": "रूपक",
                  "attempted": false
                },
                {
                  "num": 30,
                  "question_en": "Who is the author of 'सावन की बयार'?",
                  "question_hi": "'सावन की बयार' कविता के लेखक कौन हैं?",
                  "options_en": ["Harivansh Rai Bachchan", "Makhanlal Chaturvedi", "Nirala", "Dinkar"],
                  "options_hi": ["हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी", "निराला", "दिनकर"],
                  "answer_en": "Harivansh Rai Bachchan",
                  "answer_hi": "हरिवंश राय बच्चन",
                  "attempted": false
                }
              ,
              
                {
                  "num": 31,
                  "question_en": "What is the theme of 'कर्मभूमि' by Makhanlal Chaturvedi?",
                  "question_hi": "माखनलाल चतुर्वेदी की 'कर्मभूमि' कविता का विषय क्या है?",
                  "options_en": ["Patriotism", "Humanity", "Love", "Nature"],
                  "options_hi": ["देशभक्ति", "मानवता", "प्रेम", "प्रकृति"],
                  "answer_en": "Patriotism",
                  "answer_hi": "देशभक्ति",
                  "attempted": false
                },
                {
                  "num": 32,
                  "question_en": "Who wrote 'निराशा'?",
                  "question_hi": "'निराशा' कविता के लेखक कौन हैं?",
                  "options_en": ["Dinkar", "Harivansh Rai Bachchan", "Nirala", "Makhanlal Chaturvedi"],
                  "options_hi": ["दिनकर", "हरिवंश राय बच्चन", "निराला", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Nirala",
                  "answer_hi": "निराला",
                  "attempted": false
                },
                {
                  "num": 33,
                  "question_en": "What is the poetic device used in the phrase 'सपनों में रंग'?",
                  "question_hi": "'सपनों में रंग' में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Metaphor", "Simile", "Personification", "Alliteration"],
                  "options_hi": ["रूपक", "उपमा", "मानवीकरण", "अनुप्रास"],
                  "answer_en": "Metaphor",
                  "answer_hi": "रूपक",
                  "attempted": false
                },
                {
                  "num": 34,
                  "question_en": "Who wrote 'धूप छाँव'?",
                  "question_hi": "'धूप छाँव' कविता के लेखक कौन हैं?",
                  "options_en": ["Harivansh Rai Bachchan", "Nirala", "Dinkar", "Makhanlal Chaturvedi"],
                  "options_hi": ["हरिवंश राय बच्चन", "निराला", "दिनकर", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Harivansh Rai Bachchan",
                  "answer_hi": "हरिवंश राय बच्चन",
                  "attempted": false
                },
                {
                  "num": 35,
                  "question_en": "What is the central theme of 'दृष्टिकोन' by Dinkar?",
                  "question_hi": "दिनकर की 'दृष्टिकोन' कविता का मुख्य विषय क्या है?",
                  "options_en": ["Humanism", "Patriotism", "Nature", "Love"],
                  "options_hi": ["मानवता", "देशभक्ति", "प्रकृति", "प्रेम"],
                  "answer_en": "Humanism",
                  "answer_hi": "मानवता",
                  "attempted": false
                },
                {
                  "num": 36,
                  "question_en": "Who is the poet of 'अधर'?",
                  "question_hi": "'अधर' कविता के लेखक कौन हैं?",
                  "options_en": ["Nirala", "Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi"],
                  "options_hi": ["निराला", "हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Nirala",
                  "answer_hi": "निराला",
                  "attempted": false
                },
                {
                  "num": 37,
                  "question_en": "What poetic device is used in the line 'संग-साथ में खुशियाँ बढ़ती हैं'?",
                  "question_hi": "'संग-साथ में खुशियाँ बढ़ती हैं' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Alliteration", "Metaphor", "Simile", "Personification"],
                  "options_hi": ["अनुप्रास", "रूपक", "उपमा", "मानवीकरण"],
                  "answer_en": "Alliteration",
                  "answer_hi": "अनुप्रास",
                  "attempted": false
                },
                {
                  "num": 38,
                  "question_en": "Who is the author of the poem 'हिमालय'?",
                  "question_hi": "'हिमालय' कविता के लेखक कौन हैं?",
                  "options_en": ["Makhanlal Chaturvedi", "Nirala", "Harivansh Rai Bachchan", "Dinkar"],
                  "options_hi": ["माखनलाल चतुर्वेदी", "निराला", "हरिवंश राय बच्चन", "दिनकर"],
                  "answer_en": "Makhanlal Chaturvedi",
                  "answer_hi": "माखनलाल चतुर्वेदी",
                  "attempted": false
                },
                {
                  "num": 39,
                  "question_en": "What is the theme of the poem 'संग्राम'?",
                  "question_hi": "'संग्राम' कविता का विषय क्या है?",
                  "options_en": ["War", "Love", "Humanism", "Nature"],
                  "options_hi": ["युद्ध", "प्रेम", "मानवता", "प्रकृति"],
                  "answer_en": "War",
                  "answer_hi": "युद्ध",
                  "attempted": false
                },
                {
                        "num": 40,
                        "question_en": "Who wrote 'अरण्य का नायक'?",
                        "question_hi": "'अरण्य का नायक' कविता के लेखक कौन हैं?",
                        "options_en": ["Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi", "Nirala"],
                        "options_hi": ["हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी", "निराला"],
                        "answer_en": "Dinkar",
                        "answer_hi": "दिनकर",
                        "attempted": false
                },
                
                        {
                          "num": 41,
                          "question_en": "What is the central theme of the poem 'माँ' by Makhanlal Chaturvedi?",
                          "question_hi": "माखनलाल चतुर्वेदी की 'माँ' कविता का मुख्य विषय क्या है?",
                          "options_en": ["Love", "Patriotism", "Motherhood", "Nature"],
                          "options_hi": ["प्रेम", "देशभक्ति", "मातृत्व", "प्रकृति"],
                          "answer_en": "Motherhood",
                          "answer_hi": "मातृत्व",
                          "attempted": false
                        },
                        {
                          "num": 42,
                          "question_en": "Who wrote the poem 'वृद्ध'?",
                          "question_hi": "'वृद्ध' कविता के लेखक कौन हैं?",
                          "options_en": ["Nirala", "Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi"],
                          "options_hi": ["निराला", "हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी"],
                          "answer_en": "Nirala",
                          "answer_hi": "निराला",
                          "attempted": false
                        },
                        {
                          "num": 43,
                          "question_en": "What poetic device is used in the line 'वक्ष पर बसते हैं सपने'?",
                          "question_hi": "'वक्ष पर बसते हैं सपने' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                          "options_en": ["Personification", "Metaphor", "Simile", "Alliteration"],
                          "options_hi": ["मानवीकरण", "रूपक", "उपमा", "अनुप्रास"],
                          "answer_en": "Metaphor",
                          "answer_hi": "रूपक",
                          "attempted": false
                        },
                        {
                          "num": 44,
                          "question_en": "Who is the author of the poem 'लहरें'?",
                          "question_hi": "'लहरें' कविता के लेखक कौन हैं?",
                          "options_en": ["Harivansh Rai Bachchan", "Nirala", "Makhanlal Chaturvedi", "Dinkar"],
                          "options_hi": ["हरिवंश राय बच्चन", "निराला", "माखनलाल चतुर्वेदी", "दिनकर"],
                          "answer_en": "Harivansh Rai Bachchan",
                          "answer_hi": "हरिवंश राय बच्चन",
                          "attempted": false
                        },
                        {
                          "num": 45,
                          "question_en": "What is the main theme of the poem 'कवि' by Dinkar?",
                          "question_hi": "दिनकर की 'कवि' कविता का मुख्य विषय क्या है?",
                          "options_en": ["Poetry", "Patriotism", "Courage", "Humanism"],
                          "options_hi": ["कविता", "देशभक्ति", "साहस", "मानवता"],
                          "answer_en": "Poetry",
                          "answer_hi": "कविता",
                          "attempted": false
                        },
                        {
                          "num": 46,
                          "question_en": "Who wrote the poem 'नया भारत'?",
                          "question_hi": "'नया भारत' कविता के लेखक कौन हैं?",
                          "options_en": ["Makhanlal Chaturvedi", "Dinkar", "Nirala", "Harivansh Rai Bachchan"],
                          "options_hi": ["माखनलाल चतुर्वेदी", "दिनकर", "निराला", "हरिवंश राय बच्चन"],
                          "answer_en": "Dinkar",
                          "answer_hi": "दिनकर",
                          "attempted": false
                        },
                        {
                          "num": 47,
                          "question_en": "What poetic device is used in the phrase 'चाँद के रास्ते'?",
                          "question_hi": "'चाँद के रास्ते' में कौन-सा अलंकार प्रयुक्त हुआ है?",
                          "options_en": ["Personification", "Metaphor", "Simile", "Alliteration"],
                          "options_hi": ["मानवीकरण", "रूपक", "उपमा", "अनुप्रास"],
                          "answer_en": "Metaphor",
                          "answer_hi": "रूपक",
                          "attempted": false
                        },
                        {
                          "num": 48,
                          "question_en": "Who wrote 'सपने'?",
                          "question_hi": "'सपने' कविता के लेखक कौन हैं?",
                          "options_en": ["Harivansh Rai Bachchan", "Dinkar", "Nirala", "Makhanlal Chaturvedi"],
                          "options_hi": ["हरिवंश राय बच्चन", "दिनकर", "निराला", "माखनलाल चतुर्वेदी"],
                          "answer_en": "Harivansh Rai Bachchan",
                          "answer_hi": "हरिवंश राय बच्चन",
                          "attempted": false
                        },
                        {
                          "num": 49,
                          "question_en": "What is the theme of 'कृष्ण' by Makhanlal Chaturvedi?",
                          "question_hi": "माखनलाल चतुर्वेदी की 'कृष्ण' कविता का विषय क्या है?",
                          "options_en": ["Krishna's divine play", "Patriotism", "Nature", "Humanism"],
                          "options_hi": ["कृष्ण का दिव्य खेल", "देशभक्ति", "प्रकृति", "मानवता"],
                          "answer_en": "Krishna's divine play",
                          "answer_hi": "कृष्ण का दिव्य खेल",
                          "attempted": false
                        },
                        {
                          "num": 50,
                          "question_en": "Who is the poet of 'अच्छा जीवन'?",
                          "question_hi": "'अच्छा जीवन' कविता के लेखक कौन हैं?",
                          "options_en": ["Nirala", "Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi"],
                          "options_hi": ["निराला", "हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी"],
                          "answer_en": "Nirala",
                          "answer_hi": "निराला",
                          "attempted": false
                        }
                      ,
                      
              
                         
    
    
    
    
        
    ];
        
    
    // Add more questions as needed...
    
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