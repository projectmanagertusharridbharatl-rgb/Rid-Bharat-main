
const questions = [
        
  
    {
        "num": 1,
        "question_en": "Which of the following is a 'Sarvanaam' (Pronoun)?",
        "question_hi": "निम्नलिखित में से कौन सा 'सर्वनाम' है?",
        "options_en": ["राम (Ram)", "सुंदर (Beautiful)", "वह (He/She)", "तेज (Fast)"],
        "options_hi": ["राम", "सुंदर", "वह", "तेज"],
        "answer_en": "वह (He/She)",
        "answer_hi": "वह",
        "attempted": false
    },
    {
        "num": 2,
        "question_en": "What is the meaning of 'Muhavara' in English?",
        "question_hi": "'मुहावरा' का अंग्रेजी में क्या अर्थ है?",
        "options_en": ["Proverb", "Idiom", "Metaphor", "Simile"],
        "options_hi": ["कहावत", "मुहावरा", "रूपक", "उपमा"],
        "answer_en": "Idiom",
        "answer_hi": "मुहावरा",
        "attempted": false
    },
    {
        "num": 3,
        "question_en": "Which of these is an example of 'Alankar' (Figure of Speech)?",
        "question_hi": "निम्न में से कौन सा 'अलंकार' का उदाहरण है?",
        "options_en": ["राम ने खाना खाया (Ram ate food)", "चाँद सा मुख (Face like the moon)", "वह गया (He went)", "पानी बरसा (It rained)"],
        "options_hi": ["राम ने खाना खाया", "चाँद सा मुख", "वह गया", "पानी बरसा"],
        "answer_en": "चाँद सा मुख (Face like the moon)",
        "answer_hi": "चाँद सा मुख",
        "attempted": false
    },
    {
        "num": 4,
        "question_en": "Which punctuation mark is used at the end of a question?",
        "question_hi": "प्रश्नवाचक वाक्य के अंत में कौन सा विराम चिह्न लगता है?",
        "options_en": ["। (Full stop)", "! (Exclamation)", "? (Question mark)", ", (Comma)"],
        "options_hi": ["। (पूर्ण विराम)", "! (विस्मयादिबोधक)", "? (प्रश्नवाचक)", ", (अल्प विराम)"],
        "answer_en": "? (Question mark)",
        "answer_hi": "? (प्रश्नवाचक)",
        "attempted": false
    },
    {
        "num": 5,
        "question_en": "What is the correct 'Vachya' (Voice) in 'राम ने फल खाया'?",
        "question_hi": "'राम ने फल खाया' में कौन सा वाच्य है?",
        "options_en": ["Kartri Vachya (Active Voice)", "Karm Vachya (Passive Voice)", "Bhav Vachya (Impersonal Voice)", "None"],
        "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "कोई नहीं"],
        "answer_en": "Kartri Vachya (Active Voice)",
        "answer_hi": "कर्तृवाच्य",
        "attempted": false
    },
    {
        "num": 6,
        "question_en": "Which poet wrote 'साकेत'?",
        "question_hi": "'साकेत' किस कवि ने लिखा?",
        "options_en": ["Maithilisharan Gupt", "Harivansh Rai Bachchan", "Ramdhari Singh Dinkar", "Suryakant Tripathi 'Nirala'"],
        "options_hi": ["मैथिलीशरण गुप्त", "हरिवंश राय बच्चन", "रामधारी सिंह दिनकर", "सूर्यकांत त्रिपाठी 'निराला'"],
        "answer_en": "Maithilisharan Gupt",
        "answer_hi": "मैथिलीशरण गुप्त",
        "attempted": false
    },
    {
        "num": 7,
        "question_en": "What is the correct 'Samas' (Compound) in 'राजपुत्र'?",
        "question_hi": "'राजपुत्र' में कौन सा समास है?",
        "options_en": ["Tatpurush Samas", "Karmadharaya Samas", "Dvigu Samas", "Dvandva Samas"],
        "options_hi": ["तत्पुरुष समास", "कर्मधारय समास", "द्विगु समास", "द्वंद्व समास"],
        "answer_en": "Tatpurush Samas",
        "answer_hi": "तत्पुरुष समास",
        "attempted": false
    },
    {
        "num": 8,
        "question_en": "Which of these is a 'Lokokti' (Proverb)?",
        "question_hi": "निम्न में से कौन सी 'लोकोक्ति' है?",
        "options_en": ["अब पछताए होत क्या, जब चिड़िया चुग गई खेत", "आगे कुआँ पीछे खाई", "धोबी का कुत्ता, न घर का न घाट का", "All of the above"],
        "options_hi": ["अब पछताए होत क्या, जब चिड़िया चुग गई खेत", "आगे कुआँ पीछे खाई", "धोबी का कुत्ता, न घर का न घाट का", "सभी"],
        "answer_en": "All of the above",
        "answer_hi": "सभी",
        "attempted": false
    },
    {
        "num": 9,
        "question_en": "What is the correct 'Kaal' (Tense) in 'वह खेल रहा है'?",
        "question_hi": "'वह खेल रहा है' में कौन सा काल है?",
        "options_en": ["Past Tense", "Present Tense", "Future Tense", "None"],
        "options_hi": ["भूतकाल", "वर्तमान काल", "भविष्यत काल", "कोई नहीं"],
        "answer_en": "Present Tense",
        "answer_hi": "वर्तमान काल",
        "attempted": false
    },
    {
        "num": 10,
        "question_en": "Which of these is an 'Avyay' (Indeclinable)?",
        "question_hi": "निम्न में से कौन सा 'अव्यय' है?",
        "options_en": ["धीरे (Slowly)", "लड़का (Boy)", "खुश (Happy)", "पुस्तक (Book)"],
        "options_hi": ["धीरे", "लड़का", "खुश", "पुस्तक"],
        "answer_en": "धीरे (Slowly)",
        "answer_hi": "धीरे",
        "attempted": false
    },
    {
        "num": 11,
        "question_en": "Which of these is a 'Visheshan' (Adjective)?",
        "question_hi": "निम्न में से कौन सा 'विशेषण' है?",
        "options_en": ["तेज (Fast)", "दौड़ना (To run)", "वह (He)", "और (And)"],
        "options_hi": ["तेज", "दौड़ना", "वह", "और"],
        "answer_en": "तेज (Fast)",
        "answer_hi": "तेज",
        "attempted": false
    },
    {
        "num": 12,
        "question_en": "What is the correct 'Vakya Shuddhi' (Sentence Correction) for 'वह गाना गाती है'?",
        "question_hi": "'वह गाना गाती है' का शुद्ध रूप क्या है?",
        "options_en": ["वह गाना गाता है", "वह गाना गाती है (Correct)", "वह गाना गाएगी", "वह गाना गाएगा"],
        "options_hi": ["वह गाना गाता है", "वह गाना गाती है (सही)", "वह गाना गाएगी", "वह गाना गाएगा"],
        "answer_en": "वह गाना गाती है (Correct)",
        "answer_hi": "वह गाना गाती है (सही)",
        "attempted": false
    },
    {
        "num": 13,
        "question_en": "Which 'Ras' (Emotion) is dominant in 'करुण रस'?",
        "question_hi": "'करुण रस' में कौन सा भाव प्रधान है?",
        "options_en": ["Love", "Sorrow", "Anger", "Courage"],
        "options_hi": ["प्रेम", "दुःख", "क्रोध", "वीरता"],
        "answer_en": "Sorrow",
        "answer_hi": "दुःख",
        "attempted": false
    },
    {
        "num": 14,
        "question_en": "What is the 'Kriya' (Verb) in 'बच्चा खेल रहा है'?",
        "question_hi": "'बच्चा खेल रहा है' में 'क्रिया' क्या है?",
        "options_en": ["बच्चा (Child)", "खेल (Play)", "रहा है (Is)", "खेल रहा है (Is playing)"],
        "options_hi": ["बच्चा", "खेल", "रहा है", "खेल रहा है"],
        "answer_en": "खेल रहा है (Is playing)",
        "answer_hi": "खेल रहा है",
        "attempted": false
    },
    {
        "num": 15,
        "question_en": "Which 'Sandhi' (Combination) is correct in 'देव + आलय = देवालय'?",
        "question_hi": "'देव + आलय = देवालय' में कौन सी संधि है?",
        "options_en": ["Guna Sandhi", "Vriddhi Sandhi", "Yan Sandhi", "None"],
        "options_hi": ["गुण संधि", "वृद्धि संधि", "यण संधि", "कोई नहीं"],
        "answer_en": "Vriddhi Sandhi",
        "answer_hi": "वृद्धि संधि",
        "attempted": false
    },
    {
        "num": 16,
        "question_en": "Which of these is a 'Patra Lekhan' (Letter Writing) type?",
        "question_hi": "निम्न में से कौन सा 'पत्र लेखन' का प्रकार है?",
        "options_en": ["Formal Letter", "Informal Letter", "Both", "None"],
        "options_hi": ["औपचारिक पत्र", "अनौपचारिक पत्र", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false
    },
    {
        "num": 17,
        "question_en": "What is the correct 'Vilom Shabd' (Antonym) of 'सुख'?",
        "question_hi": "'सुख' का विलोम शब्द क्या है?",
        "options_en": ["दुःख", "आनंद", "खुशी", "शांति"],
        "options_hi": ["दुःख", "आनंद", "खुशी", "शांति"],
        "answer_en": "दुःख",
        "answer_hi": "दुःख",
        "attempted": false
    },
    {
        "num": 18,
        "question_en": "Which 'Chhand' (Poetic Meter) is used in 'दोहा'?",
        "question_hi": "'दोहा' में कौन सा छंद प्रयुक्त होता है?",
        "options_en": ["Anustup Chhand", "Doha Chhand", "Both", "None"],
        "options_hi": ["अनुष्टुप छंद", "दोहा छंद", "दोनों", "कोई नहीं"],
        "answer_en": "Doha Chhand",
        "answer_hi": "दोहा छंद",
        "attempted": false
    },
    {
        "num": 19,
        "question_en": "What is the correct 'Vakya Bhed' (Sentence Type) for 'वह पढ़ता है और खेलता है'?",
        "question_hi": "'वह पढ़ता है और खेलता है' का वाक्य भेद क्या है?",
        "options_en": ["Simple Sentence", "Compound Sentence", "Complex Sentence", "None"],
        "options_hi": ["सरल वाक्य", "संयुक्त वाक्य", "मिश्र वाक्य", "कोई नहीं"],
        "answer_en": "Compound Sentence",
        "answer_hi": "संयुक्त वाक्य",
        "attempted": false
    },
    {
        "num": 20,
        "question_en": "Which 'Alankar' is used in 'कमल सा मुख'?",
        "question_hi": "'कमल सा मुख' में कौन सा अलंकार है?",
        "options_en": ["Upma Alankar", "Rupak Alankar", "Atishayokti Alankar", "None"],
        "options_hi": ["उपमा अलंकार", "रूपक अलंकार", "अतिशयोक्ति अलंकार", "कोई नहीं"],
        "answer_en": "Upma Alankar",
        "answer_hi": "उपमा अलंकार",
        "attempted": false
    },
    {
        "num": 21,
        "question_en": "Who is the author of 'रश्मिरथी'?",
        "question_hi": "'रश्मिरथी' के लेखक कौन हैं?",
        "options_en": ["Ramdhari Singh Dinkar", "Maithilisharan Gupt", "Suryakant Tripathi 'Nirala'", "Harivansh Rai Bachchan"],
        "options_hi": ["रामधारी सिंह दिनकर", "मैथिलीशरण गुप्त", "सूर्यकांत त्रिपाठी 'निराला'", "हरिवंश राय बच्चन"],
        "answer_en": "Ramdhari Singh Dinkar",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false
    },
    {
        "num": 22,
        "question_en": "Which 'Ras' is depicted in heroic poems?",
        "question_hi": "वीरता के काव्य में कौन सा रस होता है?",
        "options_en": ["Shringar Ras", "Veer Ras", "Karun Ras", "Hasya Ras"],
        "options_hi": ["श्रृंगार रस", "वीर रस", "करुण रस", "हास्य रस"],
        "answer_en": "Veer Ras",
        "answer_hi": "वीर रस",
        "attempted": false
    },
    {
        "num": 23,
        "question_en": "What is the 'Samuchchay Bodhak' (Conjunction) in 'राम और श्याम'?",
        "question_hi": "'राम और श्याम' में समुच्चयबोधक क्या है?",
        "options_en": ["राम", "और", "श्याम", "None"],
        "options_hi": ["राम", "और", "श्याम", "कोई नहीं"],
        "answer_en": "और",
        "answer_hi": "और",
        "attempted": false
    },
    {
        "num": 24,
        "question_en": "Which 'Karak' (Case) is used in 'राम ने फल खाया'?",
        "question_hi": "'राम ने फल खाया' में कौन सा कारक है?",
        "options_en": ["Karta Karak", "Karam Karak", "Karan Karak", "None"],
        "options_hi": ["कर्ता कारक", "कर्म कारक", "करण कारक", "कोई नहीं"],
        "answer_en": "Karta Karak",
        "answer_hi": "कर्ता कारक",
        "attempted": false
    },
    {
        "num": 25,
        "question_en": "What is the correct 'Vachan' (Number) for 'लड़के'?",
        "question_hi": "'लड़के' का वचन क्या है?",
        "options_en": ["Singular", "Plural", "Both", "None"],
        "options_hi": ["एकवचन", "बहुवचन", "दोनों", "कोई नहीं"],
        "answer_en": "Plural",
        "answer_hi": "बहुवचन",
        "attempted": false
    },
    {
        "num": 26,
        "question_en": "Which 'Ling' (Gender) is 'पुस्तक'?",
        "question_hi": "'पुस्तक' का लिंग क्या है?",
        "options_en": ["Masculine", "Feminine", "Neuter", "None"],
        "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "कोई नहीं"],
        "answer_en": "Feminine",
        "answer_hi": "स्त्रीलिंग",
        "attempted": false
    },
    {
        "num": 27,
        "question_en": "What is the correct 'Paryayvachi' (Synonym) for 'सूर्य'?",
        "question_hi": "'सूर्य' का पर्यायवाची शब्द क्या है?",
        "options_en": ["चंद्र", "रवि", "तारा", "पृथ्वी"],
        "options_hi": ["चंद्र", "रवि", "तारा", "पृथ्वी"],
        "answer_en": "रवि",
        "answer_hi": "रवि",
        "attempted": false
    },
    {
        "num": 28,
        "question_en": "Which 'Visheshan' (Adjective) is used in 'सुंदर फूल'?",
        "question_hi": "'सुंदर फूल' में कौन सा विशेषण है?",
        "options_en": ["सुंदर", "फूल", "Both", "None"],
        "options_hi": ["सुंदर", "फूल", "दोनों", "कोई नहीं"],
        "answer_en": "सुंदर",
        "answer_hi": "सुंदर",
        "attempted": false
    },
    {
        "num": 29,
        "question_en": "What is the correct 'Kriya Visheshan' (Adverb) in 'वह धीरे चलता है'?",
        "question_hi": "'वह धीरे चलता है' में क्रिया विशेषण क्या है?",
        "options_en": ["वह", "धीरे", "चलता है", "None"],
        "options_hi": ["वह", "धीरे", "चलता है", "कोई नहीं"],
        "answer_en": "धीरे",
        "answer_hi": "धीरे",
        "attempted": false
    },
    {
        "num": 30,
        "question_en": "Which 'Samas' is in 'चौराहा'?",
        "question_hi": "'चौराहा' में कौन सा समास है?",
        "options_en": ["Tatpurush", "Dvigu", "Dvandva", "Bahuvrihi"],
        "options_hi": ["तत्पुरुष", "द्विगु", "द्वंद्व", "बहुव्रीहि"],
        "answer_en": "Dvigu",
        "answer_hi": "द्विगु",
        "attempted": false
    },
    {
        "num": 31,
        "question_en": "What is the 'Vibhakti' (Case Ending) in 'राम के लिए'?",
        "question_hi": "'राम के लिए' में कौन सी विभक्ति है?",
        "options_en": ["Prathama", "Chaturthi", "Saptami", "None"],
        "options_hi": ["प्रथमा", "चतुर्थी", "सप्तमी", "कोई नहीं"],
        "answer_en": "Chaturthi",
        "answer_hi": "चतुर्थी",
        "attempted": false
    },
    {
        "num": 32,
        "question_en": "Which 'Sandhi' is in 'हिम + आलय = हिमालय'?",
        "question_hi": "'हिम + आलय = हिमालय' में कौन सी संधि है?",
        "options_en": ["Guna", "Vriddhi", "Yan", "None"],
        "options_hi": ["गुण", "वृद्धि", "यण", "कोई नहीं"],
        "answer_en": "Vriddhi",
        "answer_hi": "वृद्धि",
        "attempted": false
    },
    {
        "num": 33,
        "question_en": "What is the correct 'Muhavara' for 'आँखों का तारा'?",
        "question_hi": "'आँखों का तारा' का सही मुहावरा क्या है?",
        "options_en": ["Beloved", "Angry", "Blind", "None"],
        "options_hi": ["प्यारा", "गुस्सा", "अंधा", "कोई नहीं"],
        "answer_en": "Beloved",
        "answer_hi": "प्यारा",
        "attempted": false
    },
    {
        "num": 34,
        "question_en": "Which 'Ras' is in humorous writing?",
        "question_hi": "हास्य लेखन में कौन सा रस होता है?",
        "options_en": ["Hasya Ras", "Shringar Ras", "Veer Ras", "Karun Ras"],
        "options_hi": ["हास्य रस", "श्रृंगार रस", "वीर रस", "करुण रस"],
        "answer_en": "Hasya Ras",
        "answer_hi": "हास्य रस",
        "attempted": false
    },
    {
        "num": 35,
        "question_en": "What is the correct 'Vakya Prakar' (Sentence Type) for 'जब वह आया, मैं सो रहा था'?",
        "question_hi": "'जब वह आया, मैं सो रहा था' का वाक्य प्रकार क्या है?",
        "options_en": ["Simple", "Compound", "Complex", "None"],
        "options_hi": ["सरल", "संयुक्त", "मिश्र", "कोई नहीं"],
        "answer_en": "Complex",
        "answer_hi": "मिश्र",
        "attempted": false
    },
    {
        "num": 36,
        "question_en": "Which 'Chhand' has 16 syllables per line?",
        "question_hi": "किस छंद में प्रति पंक्ति 16 मात्राएँ होती हैं?",
        "options_en": ["Doha", "Chaupai", "Soratha", "None"],
        "options_hi": ["दोहा", "चौपाई", "सोरठा", "कोई नहीं"],
        "answer_en": "Chaupai",
        "answer_hi": "चौपाई",
        "attempted": false
    },
    {
        "num": 37,
        "question_en": "What is the correct 'Samuchchay Bodhak' in 'वह पढ़ता है परंतु समझता नहीं'?",
        "question_hi": "'वह पढ़ता है परंतु समझता नहीं' में समुच्चयबोधक क्या है?",
        "options_en": ["वह", "परंतु", "समझता", "None"],
        "options_hi": ["वह", "परंतु", "समझता", "कोई नहीं"],
        "answer_en": "परंतु",
        "answer_hi": "परंतु",
        "attempted": false
    },
    {
        "num": 38,
        "question_en": "Which 'Alankar' is in 'गंगा की जलधारा'?",
        "question_hi": "'गंगा की जलधारा' में कौन सा अलंकार है?",
        "options_en": ["Upma", "Rupak", "Atishayokti", "None"],
        "options_hi": ["उपमा", "रूपक", "अतिशयोक्ति", "कोई नहीं"],
        "answer_en": "Rupak",
        "answer_hi": "रूपक",
        "attempted": false
    },
    {
        "num": 39,
        "question_en": "What is the correct 'Visheshya' (Qualified Noun) in 'लाल फूल'?",
        "question_hi": "'लाल फूल' में विशेष्य क्या है?",
        "options_en": ["लाल", "फूल", "Both", "None"],
        "options_hi": ["लाल", "फूल", "दोनों", "कोई नहीं"],
        "answer_en": "फूल",
        "answer_hi": "फूल",
        "attempted": false
    },
    {
        "num": 40,
        "question_en": "Which 'Karak' is in 'मैंने राम को पुस्तक दी'?",
        "question_hi": "'मैंने राम को पुस्तक दी' में कौन सा कारक है?",
        "options_en": ["Karta", "Karam", "Sampradan", "None"],
        "options_hi": ["कर्ता", "कर्म", "संप्रदान", "कोई नहीं"],
        "answer_en": "Sampradan",
        "answer_hi": "संप्रदान",
        "attempted": false
    },
    {
        "num": 41,
        "question_en": "What is the correct 'Vachan' for 'बच्चा'?",
        "question_hi": "'बच्चा' का वचन क्या है?",
        "options_en": ["Singular", "Plural", "Both", "None"],
        "options_hi": ["एकवचन", "बहुवचन", "दोनों", "कोई नहीं"],
        "answer_en": "Singular",
        "answer_hi": "एकवचन",
        "attempted": false
    },
    {
        "num": 42,
        "question_en": "Which 'Ling' is 'सूर्य'?",
        "question_hi": "'सूर्य' का लिंग क्या है?",
        "options_en": ["Masculine", "Feminine", "Neuter", "None"],
        "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "कोई नहीं"],
        "answer_en": "Masculine",
        "answer_hi": "पुल्लिंग",
        "attempted": false
    },
    {
        "num": 43,
        "question_en": "What is the correct 'Paryayvachi' for 'पृथ्वी'?",
        "question_hi": "'पृथ्वी' का पर्यायवाची शब्द क्या है?",
        "options_en": ["धरती", "आकाश", "सूर्य", "चंद्रमा"],
        "options_hi": ["धरती", "आकाश", "सूर्य", "चंद्रमा"],
        "answer_en": "धरती",
        "answer_hi": "धरती",
        "attempted": false
    },
    {
        "num": 44,
        "question_en": "Which 'Visheshan' is in 'बड़ा घर'?",
        "question_hi": "'बड़ा घर' में कौन सा विशेषण है?",
        "options_en": ["बड़ा", "घर", "Both", "None"],
        "options_hi": ["बड़ा", "घर", "दोनों", "कोई नहीं"],
        "answer_en": "बड़ा",
        "answer_hi": "बड़ा",
        "attempted": false
    },
    {
        "num": 45,
        "question_en": "What is the correct 'Kriya Visheshan' in 'वह जल्दी आया'?",
        "question_hi": "'वह जल्दी आया' में क्रिया विशेषण क्या है?",
        "options_en": ["वह", "जल्दी", "आया", "None"],
        "options_hi": ["वह", "जल्दी", "आया", "कोई नहीं"],
        "answer_en": "जल्दी",
        "answer_hi": "जल्दी",
        "attempted": false
    },
    {
        "num": 46,
        "question_en": "Which 'Samas' is in 'पंचतंत्र'?",
        "question_hi": "'पंचतंत्र' में कौन सा समास है?",
        "options_en": ["Tatpurush", "Dvigu", "Dvandva", "Bahuvrihi"],
        "options_hi": ["तत्पुरुष", "द्विगु", "द्वंद्व", "बहुव्रीहि"],
        "answer_en": "Dvandva",
        "answer_hi": "द्वंद्व",
        "attempted": false
    },
    {
        "num": 47,
        "question_en": "What is the 'Vibhakti' in 'गाँव में'?",
        "question_hi": "'गाँव में' में कौन सी विभक्ति है?",
        "options_en": ["Prathama", "Saptami", "Both", "None"],
        "options_hi": ["प्रथमा", "सप्तमी", "दोनों", "कोई नहीं"],
        "answer_en": "Saptami",
        "answer_hi": "सप्तमी",
        "attempted": false
    },
    {
        "num": 48,
        "question_en": "Which 'Sandhi' is in 'देव + इंद्र = देवेंद्र'?",
        "question_hi": "'देव + इंद्र = देवेंद्र' में कौन सी संधि है?",
        "options_en": ["Guna", "Vriddhi", "Yan", "None"],
        "options_hi": ["गुण", "वृद्धि", "यण", "कोई नहीं"],
        "answer_en": "Yan",
        "answer_hi": "यण",
        "attempted": false
    },
    {
        "num": 49,
        "question_en": "What is the correct 'Muhavara' for 'देने के लिए तैयार'?",
        "question_hi": "'देने के लिए तैयार' का सही मुहावरा क्या है?",
        "options_en": ["हाथ खोलना", "कमर कसना", "दिल खोलना", "None"],
        "options_hi": ["हाथ खोलना", "कमर कसना", "दिल खोलना", "कोई नहीं"],
        "answer_en": "हाथ खोलना",
        "answer_hi": "हाथ खोलना",
        "attempted": false
    },
    {
        "num": 50,
        "question_en": "Which 'Ras' is in devotional poetry?",
        "question_hi": "भक्ति काव्य में कौन सा रस होता है?",
        "options_en": ["Bhakti Ras", "Shringar Ras", "Veer Ras", "Karun Ras"],
        "options_hi": ["भक्ति रस", "श्रृंगार रस", "वीर रस", "करुण रस"],
        "answer_en": "Bhakti Ras",
        "answer_hi": "भक्ति रस",
        "attempted": false
    }


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
