const questions = [
        
                {
                  "num": 1,
                  "question_en": "Who wrote the poem 'माटी की महिमा'?",
                  "question_hi": "'माटी की महिमा' कविता के लेखक कौन हैं?",
                  "options_en": ["Makhanlal Chaturvedi", "Harivansh Rai Bachchan", "Nirala", "Dinkar"],
                  "options_hi": ["माखनलाल चतुर्वेदी", "हरिवंश राय बच्चन", "निराला", "दिनकर"],
                  "answer_en": "Makhanlal Chaturvedi",
                  "answer_hi": "माखनलाल चतुर्वेदी",
                  "attempted": false
                },
                {
                  "num": 2,
                  "question_en": "What is the theme of the poem 'उत्साह' by Nirala?",
                  "question_hi": "निराला की 'उत्साह' कविता का मुख्य विषय क्या है?",
                  "options_en": ["Patriotism", "Optimism", "Love", "Nature"],
                  "options_hi": ["देशभक्ति", "आशावाद", "प्रेम", "प्रकृति"],
                  "answer_en": "Optimism",
                  "answer_hi": "आशावाद",
                  "attempted": false
                },
                {
                  "num": 3,
                  "question_en": "Who wrote the poem 'सपने'?",
                  "question_hi": "'सपने' कविता के लेखक कौन हैं?",
                  "options_en": ["Dinkar", "Nirala", "Harivansh Rai Bachchan", "Makhanlal Chaturvedi"],
                  "options_hi": ["दिनकर", "निराला", "हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Harivansh Rai Bachchan",
                  "answer_hi": "हरिवंश राय बच्चन",
                  "attempted": false
                },
                {
                  "num": 4,
                  "question_en": "What is the poetic device used in 'तू एक तारा है आसमान में'?",
                  "question_hi": "'तू एक तारा है आसमान में' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Simile", "Metaphor", "Personification", "Alliteration"],
                  "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अनुप्रास"],
                  "answer_en": "Metaphor",
                  "answer_hi": "रूपक",
                  "attempted": false
                },
                {
                  "num": 5,
                  "question_en": "Who is the author of 'माँ'?",
                  "question_hi": "'माँ' कविता के लेखक कौन हैं?",
                  "options_en": ["Makhanlal Chaturvedi", "Dinkar", "Harivansh Rai Bachchan", "Nirala"],
                  "options_hi": ["माखनलाल चतुर्वेदी", "दिनकर", "हरिवंश राय बच्चन", "निराला"],
                  "answer_en": "Makhanlal Chaturvedi",
                  "answer_hi": "माखनलाल चतुर्वेदी",
                  "attempted": false
                },
                {
                  "num": 6,
                  "question_en": "What is the theme of 'गांधी' by Dinkar?",
                  "question_hi": "दिनकर की 'गांधी' कविता का मुख्य विषय क्या है?",
                  "options_en": ["Leadership", "Patriotism", "Peace", "Non-violence"],
                  "options_hi": ["नेतृत्व", "देशभक्ति", "शांति", "अहिंसा"],
                  "answer_en": "Non-violence",
                  "answer_hi": "अहिंसा",
                  "attempted": false
                },
                {
                  "num": 7,
                  "question_en": "Who wrote 'प्रकृति'?",
                  "question_hi": "'प्रकृति' कविता के लेखक कौन हैं?",
                  "options_en": ["Nirala", "Dinkar", "Harivansh Rai Bachchan", "Makhanlal Chaturvedi"],
                  "options_hi": ["निराला", "दिनकर", "हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Harivansh Rai Bachchan",
                  "answer_hi": "हरिवंश राय बच्चन",
                  "attempted": false
                },
                {
                  "num": 8,
                  "question_en": "What poetic device is used in 'सुरों का संगम'?",
                  "question_hi": "'सुरों का संगम' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Alliteration", "Metaphor", "Simile", "Personification"],
                  "options_hi": ["अनुप्रास", "रूपक", "उपमा", "मानवीकरण"],
                  "answer_en": "Metaphor",
                  "answer_hi": "रूपक",
                  "attempted": false
                },
                {
                  "num": 9,
                  "question_en": "Who wrote 'चाहत'?",
                  "question_hi": "'चाहत' कविता के लेखक कौन हैं?",
                  "options_en": ["Nirala", "Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi"],
                  "options_hi": ["निराला", "हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Nirala",
                  "answer_hi": "निराला",
                  "attempted": false
                },
                {
                  "num": 10,
                  "question_en": "What is the central theme of 'नारी' by Makhanlal Chaturvedi?",
                  "question_hi": "माखनलाल चतुर्वेदी की 'नारी' कविता का मुख्य विषय क्या है?",
                  "options_en": ["Empowerment", "Love", "Patriotism", "Sacrifice"],
                  "options_hi": ["सशक्तिकरण", "प्रेम", "देशभक्ति", "बलिदान"],
                  "answer_en": "Sacrifice",
                  "answer_hi": "बलिदान",
                  "attempted": false
                },
                {
                  "num": 11,
                  "question_en": "Who is the poet of 'वह देखो'? ",
                  "question_hi": "'वह देखो' कविता के लेखक कौन हैं?",
                  "options_en": ["Nirala", "Harivansh Rai Bachchan", "Makhanlal Chaturvedi", "Dinkar"],
                  "options_hi": ["निराला", "हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी", "दिनकर"],
                  "answer_en": "Harivansh Rai Bachchan",
                  "answer_hi": "हरिवंश राय बच्चन",
                  "attempted": false
                },
                {
                  "num": 12,
                  "question_en": "What poetic device is used in 'यह सब तुम्हारे बिना'?",
                  "question_hi": "'यह सब तुम्हारे बिना' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Personification", "Simile", "Metaphor", "Alliteration"],
                  "options_hi": ["मानवीकरण", "उपमा", "रूपक", "अनुप्रास"],
                  "answer_en": "Personification",
                  "answer_hi": "मानवीकरण",
                  "attempted": false
                },
                {
                  "num": 13,
                  "question_en": "Who is the author of 'रचनाकार'?",
                  "question_hi": "'रचनाकार' कविता के लेखक कौन हैं?",
                  "options_en": ["Makhanlal Chaturvedi", "Harivansh Rai Bachchan", "Nirala", "Dinkar"],
                  "options_hi": ["माखनलाल चतुर्वेदी", "हरिवंश राय बच्चन", "निराला", "दिनकर"],
                  "answer_en": "Dinkar",
                  "answer_hi": "दिनकर",
                  "attempted": false
                },
                {
                  "num": 14,
                  "question_en": "What is the theme of the poem 'भारतीयता' by Dinkar?",
                  "question_hi": "दिनकर की 'भारतीयता' कविता का मुख्य विषय क्या है?",
                  "options_en": ["Patriotism", "Socialism", "Unity", "Nationalism"],
                  "options_hi": ["देशभक्ति", "समाजवाद", "एकता", "राष्ट्रवाद"],
                  "answer_en": "Nationalism",
                  "answer_hi": "राष्ट्रवाद",
                  "attempted": false
                },
                {
                  "num": 15,
                  "question_en": "Who wrote the poem 'कसौटी'?",
                  "question_hi": "'कसौटी' कविता के लेखक कौन हैं?",
                  "options_en": ["Harivansh Rai Bachchan", "Nirala", "Dinkar", "Makhanlal Chaturvedi"],
                  "options_hi": ["हरिवंश राय बच्चन", "निराला", "दिनकर", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Nirala",
                  "answer_hi": "निराला",
                  "attempted": false
                },
                {
                  "num": 16,
                  "question_en": "What poetic device is used in 'आशीर्वाद'?",
                  "question_hi": "'आशीर्वाद' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Alliteration", "Personification", "Metaphor", "Simile"],
                  "options_hi": ["अनुप्रास", "मानवीकरण", "रूपक", "उपमा"],
                  "answer_en": "Personification",
                  "answer_hi": "मानवीकरण",
                  "attempted": false
                },
                {
                  "num": 17,
                  "question_en": "Who is the author of the poem 'मनुष्य'?",
                  "question_hi": "'मनुष्य' कविता के लेखक कौन हैं?",
                  "options_en": ["Makhanlal Chaturvedi", "Dinkar", "Harivansh Rai Bachchan", "Nirala"],
                  "options_hi": ["माखनलाल चतुर्वेदी", "दिनकर", "हरिवंश राय बच्चन", "निराला"],
                  "answer_en": "Makhanlal Chaturvedi",
                  "answer_hi": "माखनलाल चतुर्वेदी",
                  "attempted": false
                },
                {
                  "num": 18,
                  "question_en": "What is the theme of the poem 'नदी' by Harivansh Rai Bachchan?",
                  "question_hi": "हरिवंश राय बच्चन की 'नदी' कविता का मुख्य विषय क्या है?",
                  "options_en": ["Nature", "Life", "Flow of time", "Human Emotions"],
                  "options_hi": ["प्रकृति", "जीवन", "समय की धारा", "मानव भावनाएँ"],
                  "answer_en": "Flow of time",
                  "answer_hi": "समय की धारा",
                  "attempted": false
                },
                {
                  "num": 19,
                  "question_en": "Who wrote 'आत्मा की तलाश'?",
                  "question_hi": "'आत्मा की तलाश' कविता के लेखक कौन हैं?",
                  "options_en": ["Dinkar", "Nirala", "Harivansh Rai Bachchan", "Makhanlal Chaturvedi"],
                  "options_hi": ["दिनकर", "निराला", "हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी"],
                  "answer_en": "Nirala",
                  "answer_hi": "निराला",
                  "attempted": false
                },
                {
                  "num": 20,
                  "question_en": "What is the poetic device used in 'सपनों की रंगीन दुनिया'?",
                  "question_hi": "'सपनों की रंगीन दुनिया' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                  "options_en": ["Metaphor", "Simile", "Personification", "Alliteration"],
                  "options_hi": ["रूपक", "उपमा", "मानवीकरण", "अनुप्रास"],
                  "answer_en": "Metaphor",
                  "answer_hi": "रूपक",
                  "attempted": false
                },
                
                        {
                          "num": 21,
                          "question_en": "Who wrote 'प्यारे भारत'?",
                          "question_hi": "'प्यारे भारत' कविता के लेखक कौन हैं?",
                          "options_en": ["Makhanlal Chaturvedi", "Dinkar", "Nirala", "Harivansh Rai Bachchan"],
                          "options_hi": ["माखनलाल चतुर्वेदी", "दिनकर", "निराला", "हरिवंश राय बच्चन"],
                          "answer_en": "Dinkar",
                          "answer_hi": "दिनकर",
                          "attempted": false
                        },
                        {
                          "num": 22,
                          "question_en": "What is the theme of the poem 'हमारी धरती'?",
                          "question_hi": "'हमारी धरती' कविता का मुख्य विषय क्या है?",
                          "options_en": ["Nature", "Love", "Humanity", "Patriotism"],
                          "options_hi": ["प्रकृति", "प्रेम", "मानवता", "देशभक्ति"],
                          "answer_en": "Nature",
                          "answer_hi": "प्रकृति",
                          "attempted": false
                        },
                        {
                          "num": 23,
                          "question_en": "Who is the author of the poem 'अग्नि'?",
                          "question_hi": "'अग्नि' कविता के लेखक कौन हैं?",
                          "options_en": ["Nirala", "Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi"],
                          "options_hi": ["निराला", "हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी"],
                          "answer_en": "Dinkar",
                          "answer_hi": "दिनकर",
                          "attempted": false
                        },
                        {
                          "num": 24,
                          "question_en": "Which poetic device is used in 'रात्रि का अंधेरा'?",
                          "question_hi": "'रात्रि का अंधेरा' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                          "options_en": ["Alliteration", "Metaphor", "Simile", "Personification"],
                          "options_hi": ["अनुप्रास", "रूपक", "उपमा", "मानवीकरण"],
                          "answer_en": "Personification",
                          "answer_hi": "मानवीकरण",
                          "attempted": false
                        },
                        {
                          "num": 25,
                          "question_en": "What is the theme of 'माँ' by Makhanlal Chaturvedi?",
                          "question_hi": "माखनलाल चतुर्वेदी की 'माँ' कविता का मुख्य विषय क्या है?",
                          "options_en": ["Love", "Nature", "Patriotism", "Sacrifice"],
                          "options_hi": ["प्रेम", "प्रकृति", "देशभक्ति", "बलिदान"],
                          "answer_en": "Sacrifice",
                          "answer_hi": "बलिदान",
                          "attempted": false
                        },
                        {
                          "num": 26,
                          "question_en": "Who wrote the poem 'आत्मनिर्भरता'?",
                          "question_hi": "'आत्मनिर्भरता' कविता के लेखक कौन हैं?",
                          "options_en": ["Harivansh Rai Bachchan", "Nirala", "Makhanlal Chaturvedi", "Dinkar"],
                          "options_hi": ["हरिवंश राय बच्चन", "निराला", "माखनलाल चतुर्वेदी", "दिनकर"],
                          "answer_en": "Nirala",
                          "answer_hi": "निराला",
                          "attempted": false
                        },
                        {
                          "num": 27,
                          "question_en": "Who wrote 'कविता'?",
                          "question_hi": "'कविता' कविता के लेखक कौन हैं?",
                          "options_en": ["Dinkar", "Makhanlal Chaturvedi", "Harivansh Rai Bachchan", "Nirala"],
                          "options_hi": ["दिनकर", "माखनलाल चतुर्वेदी", "हरिवंश राय बच्चन", "निराला"],
                          "answer_en": "Harivansh Rai Bachchan",
                          "answer_hi": "हरिवंश राय बच्चन",
                          "attempted": false
                        },
                        {
                          "num": 28,
                          "question_en": "What poetic device is used in 'मुक्त काव्य'?",
                          "question_hi": "'मुक्त काव्य' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                          "options_en": ["Metaphor", "Alliteration", "Simile", "Personification"],
                          "options_hi": ["रूपक", "अनुप्रास", "उपमा", "मानवीकरण"],
                          "answer_en": "Metaphor",
                          "answer_hi": "रूपक",
                          "attempted": false
                        },
                        {
                          "num": 29,
                          "question_en": "Who is the poet of 'भारत माता'?",
                          "question_hi": "'भारत माता' कविता के लेखक कौन हैं?",
                          "options_en": ["Dinkar", "Makhanlal Chaturvedi", "Nirala", "Harivansh Rai Bachchan"],
                          "options_hi": ["दिनकर", "माखनलाल चतुर्वेदी", "निराला", "हरिवंश राय बच्चन"],
                          "answer_en": "Makhanlal Chaturvedi",
                          "answer_hi": "माखनलाल चतुर्वेदी",
                          "attempted": false
                        },
                        {
                          "num": 30,
                          "question_en": "What is the central theme of 'मनुष्य' by Dinkar?",
                          "question_hi": "दिनकर की 'मनुष्य' कविता का मुख्य विषय क्या है?",
                          "options_en": ["Human Struggle", "Nature", "Love", "Freedom"],
                          "options_hi": ["मानव संघर्ष", "प्रकृति", "प्रेम", "स्वतंत्रता"],
                          "answer_en": "Human Struggle",
                          "answer_hi": "मानव संघर्ष",
                          "attempted": false
                        },
                        {
                          "num": 31,
                          "question_en": "Who wrote the poem 'सपने'?",
                          "question_hi": "'सपने' कविता के लेखक कौन हैं?",
                          "options_en": ["Nirala", "Dinkar", "Harivansh Rai Bachchan", "Makhanlal Chaturvedi"],
                          "options_hi": ["निराला", "दिनकर", "हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी"],
                          "answer_en": "Harivansh Rai Bachchan",
                          "answer_hi": "हरिवंश राय बच्चन",
                          "attempted": false
                        },
                        {
                          "num": 32,
                          "question_en": "What poetic device is used in 'झील का शांत जल'?",
                          "question_hi": "'झील का शांत जल' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                          "options_en": ["Simile", "Metaphor", "Alliteration", "Personification"],
                          "options_hi": ["उपमा", "रूपक", "अनुप्रास", "मानवीकरण"],
                          "answer_en": "Metaphor",
                          "answer_hi": "रूपक",
                          "attempted": false
                        },
                        {
                          "num": 33,
                          "question_en": "Who is the author of 'झरना'?",
                          "question_hi": "'झरना' कविता के लेखक कौन हैं?",
                          "options_en": ["Dinkar", "Makhanlal Chaturvedi", "Harivansh Rai Bachchan", "Nirala"],
                          "options_hi": ["दिनकर", "माखनलाल चतुर्वेदी", "हरिवंश राय बच्चन", "निराला"],
                          "answer_en": "Nirala",
                          "answer_hi": "निराला",
                          "attempted": false
                        },
                        {
                          "num": 34,
                          "question_en": "What is the theme of the poem 'स्वराज'?",
                          "question_hi": "'स्वराज' कविता का मुख्य विषय क्या है?",
                          "options_en": ["Freedom", "Nationalism", "Equality", "Patriotism"],
                          "options_hi": ["स्वतंत्रता", "राष्ट्रवाद", "समानता", "देशभक्ति"],
                          "answer_en": "Freedom",
                          "answer_hi": "स्वतंत्रता",
                          "attempted": false
                        },
                        {
                          "num": 35,
                          "question_en": "Who wrote 'कल्याणी'?",
                          "question_hi": "'कल्याणी' कविता के लेखक कौन हैं?",
                          "options_en": ["Harivansh Rai Bachchan", "Makhanlal Chaturvedi", "Nirala", "Dinkar"],
                          "options_hi": ["हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी", "निराला", "दिनकर"],
                          "answer_en": "Makhanlal Chaturvedi",
                          "answer_hi": "माखनलाल चतुर्वेदी",
                          "attempted": false
                        },
                        {
                          "num": 36,
                          "question_en": "What poetic device is used in 'ध्रुव तारा'?",
                          "question_hi": "'ध्रुव तारा' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                          "options_en": ["Personification", "Simile", "Metaphor", "Alliteration"],
                          "options_hi": ["मानवीकरण", "उपमा", "रूपक", "अनुप्रास"],
                          "answer_en": "Metaphor",
                          "answer_hi": "रूपक",
                          "attempted": false
                        },
                        {
                          "num": 37,
                          "question_en": "Who is the author of 'सपनों का संसार'?",
                          "question_hi": "'सपनों का संसार' कविता के लेखक कौन हैं?",
                          "options_en": ["Nirala", "Dinkar", "Harivansh Rai Bachchan", "Makhanlal Chaturvedi"],
                          "options_hi": ["निराला", "दिनकर", "हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी"],
                          "answer_en": "Harivansh Rai Bachchan",
                          "answer_hi": "हरिवंश राय बच्चन",
                          "attempted": false
                        },
                        {
                          "num": 38,
                          "question_en": "What is the theme of 'नारी' by Dinkar?",
                          "question_hi": "दिनकर की 'नारी' कविता का मुख्य विषय क्या है?",
                          "options_en": ["Women Empowerment", "Social Equality", "Struggle", "Love"],
                          "options_hi": ["महिला सशक्तिकरण", "सामाजिक समानता", "संघर्ष", "प्रेम"],
                          "answer_en": "Women Empowerment",
                          "answer_hi": "महिला सशक्तिकरण",
                          "attempted": false
                        },
                        {
                          "num": 39,
                          "question_en": "Who wrote 'कितनी नावों के तूफान'?",
                          "question_hi": "'कितनी नावों के तूफान' कविता के लेखक कौन हैं?",
                          "options_en": ["Harivansh Rai Bachchan", "Nirala", "Dinkar", "Makhanlal Chaturvedi"],
                          "options_hi": ["हरिवंश राय बच्चन", "निराला", "दिनकर", "माखनलाल चतुर्वेदी"],
                          "answer_en": "Makhanlal Chaturvedi",
                          "answer_hi": "माखनलाल चतुर्वेदी",
                          "attempted": false
                        },
                        {
                          "num": 40,
                          "question_en": "What poetic device is used in 'आदर्श'?",
                          "question_hi": "'आदर्श' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                          "options_en": ["Metaphor", "Simile", "Personification", "Alliteration"],
                          "options_hi": ["रूपक", "उपमा", "मानवीकरण", "अनुप्रास"],
                          "answer_en": "Metaphor",
                          "answer_hi": "रूपक",
                          "attempted": false
                        }
                      ,
                      
                        {
                          "num": 41,
                          "question_en": "Who is the author of 'पथ का साथी'?",
                          "question_hi": "'पथ का साथी' कविता के लेखक कौन हैं?",
                          "options_en": ["Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi", "Nirala"],
                          "options_hi": ["हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी", "निराला"],
                          "answer_en": "Nirala",
                          "answer_hi": "निराला",
                          "attempted": false
                        },
                        {
                          "num": 42,
                          "question_en": "What is the theme of the poem 'विजय'?",
                          "question_hi": "'विजय' कविता का मुख्य विषय क्या है?",
                          "options_en": ["Victory", "Defeat", "Patriotism", "Sacrifice"],
                          "options_hi": ["विजय", "पराजय", "देशभक्ति", "बलिदान"],
                          "answer_en": "Victory",
                          "answer_hi": "विजय",
                          "attempted": false
                        },
                        {
                          "num": 43,
                          "question_en": "Who wrote the poem 'पुष्प की अभिलाषा'?",
                          "question_hi": "'पुष्प की अभिलाषा' कविता के लेखक कौन हैं?",
                          "options_en": ["Makhanlal Chaturvedi", "Dinkar", "Harivansh Rai Bachchan", "Nirala"],
                          "options_hi": ["माखनलाल चतुर्वेदी", "दिनकर", "हरिवंश राय बच्चन", "निराला"],
                          "answer_en": "Makhanlal Chaturvedi",
                          "answer_hi": "माखनलाल चतुर्वेदी",
                          "attempted": false
                        },
                        {
                          "num": 44,
                          "question_en": "Which poetic device is used in 'सपनों की दुनिया'?",
                          "question_hi": "'सपनों की दुनिया' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                          "options_en": ["Personification", "Simile", "Metaphor", "Alliteration"],
                          "options_hi": ["मानवीकरण", "उपमा", "रूपक", "अनुप्रास"],
                          "answer_en": "Metaphor",
                          "answer_hi": "रूपक",
                          "attempted": false
                        },
                        {
                          "num": 45,
                          "question_en": "Who wrote 'आत्मकथा'?",
                          "question_hi": "'आत्मकथा' कविता के लेखक कौन हैं?",
                          "options_en": ["Harivansh Rai Bachchan", "Dinkar", "Makhanlal Chaturvedi", "Nirala"],
                          "options_hi": ["हरिवंश राय बच्चन", "दिनकर", "माखनलाल चतुर्वेदी", "निराला"],
                          "answer_en": "Nirala",
                          "answer_hi": "निराला",
                          "attempted": false
                        },
                        {
                          "num": 46,
                          "question_en": "What is the main theme of the poem 'मुक्ति'?",
                          "question_hi": "'मुक्ति' कविता का मुख्य विषय क्या है?",
                          "options_en": ["Freedom", "Patriotism", "Humanity", "Nature"],
                          "options_hi": ["स्वतंत्रता", "देशभक्ति", "मानवता", "प्रकृति"],
                          "answer_en": "Freedom",
                          "answer_hi": "स्वतंत्रता",
                          "attempted": false
                        },
                        {
                          "num": 47,
                          "question_en": "Who is the poet of 'नारी शक्ति'?",
                          "question_hi": "'नारी शक्ति' कविता के लेखक कौन हैं?",
                          "options_en": ["Harivansh Rai Bachchan", "Makhanlal Chaturvedi", "Nirala", "Dinkar"],
                          "options_hi": ["हरिवंश राय बच्चन", "माखनलाल चतुर्वेदी", "निराला", "दिनकर"],
                          "answer_en": "Makhanlal Chaturvedi",
                          "answer_hi": "माखनलाल चतुर्वेदी",
                          "attempted": false
                        },
                        {
                          "num": 48,
                          "question_en": "What poetic device is used in 'आदर्श जीवन'?",
                          "question_hi": "'आदर्श जीवन' पंक्ति में कौन-सा अलंकार प्रयुक्त हुआ है?",
                          "options_en": ["Personification", "Simile", "Metaphor", "Alliteration"],
                          "options_hi": ["मानवीकरण", "उपमा", "रूपक", "अनुप्रास"],
                          "answer_en": "Metaphor",
                          "answer_hi": "रूपक",
                          "attempted": false
                        },
                        {
                          "num": 49,
                          "question_en": "Who is the author of 'मेरे देश की धरती'?",
                          "question_hi": "'मेरे देश की धरती' कविता के लेखक कौन हैं?",
                          "options_en": ["Makhanlal Chaturvedi", "Harivansh Rai Bachchan", "Nirala", "Dinkar"],
                          "options_hi": ["माखनलाल चतुर्वेदी", "हरिवंश राय बच्चन", "निराला", "दिनकर"],
                          "answer_en": "Makhanlal Chaturvedi",
                          "answer_hi": "माखनलाल चतुर्वेदी",
                          "attempted": false
                        },
                        {
                          "num": 50,
                          "question_en": "What is the theme of 'कृषि' by Dinkar?",
                          "question_hi": "दिनकर की 'कृषि' कविता का मुख्य विषय क्या है?",
                          "options_en": ["Farming", "Humanity", "Freedom", "Struggle"],
                          "options_hi": ["कृषि", "मानवता", "स्वतंत्रता", "संघर्ष"],
                          "answer_en": "Farming",
                          "answer_hi": "कृषि",
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