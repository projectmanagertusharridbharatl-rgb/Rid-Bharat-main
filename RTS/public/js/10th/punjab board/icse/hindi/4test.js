
const questions = [
        
  
    {
        "num": 1,
        "question_en": "Which of these is a 'Kriya Visheshan' (Adverb)?",
        "question_hi": "निम्न में से कौन सा 'क्रिया विशेषण' है?",
        "options_en": ["तेज (Fast)", "धीरे (Slowly)", "सुंदर (Beautiful)", "बुद्धिमान (Intelligent)"],
        "options_hi": ["तेज", "धीरे", "सुंदर", "बुद्धिमान"],
        "answer_en": "धीरे (Slowly)",
        "answer_hi": "धीरे",
        "attempted": false
    },
    {
        "num": 2,
        "question_en": "What is the 'Vachya' (Voice) in 'पत्र लिखा जाता है'?",
        "question_hi": "'पत्र लिखा जाता है' में कौन सा वाच्य है?",
        "options_en": ["Kartri Vachya (Active)", "Karm Vachya (Passive)", "Bhav Vachya (Impersonal)", "None"],
        "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "कोई नहीं"],
        "answer_en": "Karm Vachya (Passive)",
        "answer_hi": "कर्मवाच्य",
        "attempted": false
    },
    {
        "num": 3,
        "question_en": "Which 'Alankar' is in 'कामिनी कमलिनी सी'?",
        "question_hi": "'कामिनी कमलिनी सी' में कौन सा अलंकार है?",
        "options_en": ["Upma (Simile)", "Rupak (Metaphor)", "Atishayokti (Hyperbole)", "None"],
        "options_hi": ["उपमा", "रूपक", "अतिशयोक्ति", "कोई नहीं"],
        "answer_en": "Upma (Simile)",
        "answer_hi": "उपमा",
        "attempted": false
    },
    {
        "num": 4,
        "question_en": "What is the correct 'Vilom Shabd' (Antonym) of 'अंधकार'?",
        "question_hi": "'अंधकार' का विलोम शब्द क्या है?",
        "options_en": ["प्रकाश (Light)", "अँधेरा (Darkness)", "रात (Night)", "दिन (Day)"],
        "options_hi": ["प्रकाश", "अँधेरा", "रात", "दिन"],
        "answer_en": "प्रकाश (Light)",
        "answer_hi": "प्रकाश",
        "attempted": false
    },
    {
        "num": 5,
        "question_en": "Which 'Sandhi' is in 'सदा + एव = सदैव'?",
        "question_hi": "'सदा + एव = सदैव' में कौन सी संधि है?",
        "options_en": ["Guna Sandhi", "Vriddhi Sandhi", "Dvandva Sandhi", "None"],
        "options_hi": ["गुण संधि", "वृद्धि संधि", "द्वंद्व संधि", "कोई नहीं"],
        "answer_en": "Vriddhi Sandhi",
        "answer_hi": "वृद्धि संधि",
        "attempted": false
    },
    {
        "num": 6,
        "question_en": "What is the 'Karak' in 'मैंने राम को पुस्तक दी' for 'राम'?",
        "question_hi": "'मैंने राम को पुस्तक दी' में 'राम' का कारक क्या है?",
        "options_en": ["Karta (Nominative)", "Karam (Accusative)", "Sampradan (Dative)", "None"],
        "options_hi": ["कर्ता", "कर्म", "संप्रदान", "कोई नहीं"],
        "answer_en": "Sampradan (Dative)",
        "answer_hi": "संप्रदान",
        "attempted": false
    },
    {
        "num": 7,
        "question_en": "Which 'Ras' is in 'हँसोड़' stories?",
        "question_hi": "'हँसोड़' कहानियों में कौन सा रस होता है?",
        "options_en": ["Hasya Ras (Humor)", "Veer Ras (Heroic)", "Karun Ras (Pathos)", "None"],
        "options_hi": ["हास्य रस", "वीर रस", "करुण रस", "कोई नहीं"],
        "answer_en": "Hasya Ras (Humor)",
        "answer_hi": "हास्य रस",
        "attempted": false
    },
    {
        "num": 8,
        "question_en": "What is the correct 'Vakya Shuddhi' for 'वह गीत गाती है'?",
        "question_hi": "'वह गीत गाती है' का शुद्ध रूप क्या है?",
        "options_en": ["वह गीत गाता है", "वह गीत गाती है (Correct)", "वह गीत गाएगी", "None"],
        "options_hi": ["वह गीत गाता है", "वह गीत गाती है (सही)", "वह गीत गाएगी", "कोई नहीं"],
        "answer_en": "वह गीत गाती है (Correct)",
        "answer_hi": "वह गीत गाती है (सही)",
        "attempted": false
    },
    {
        "num": 9,
        "question_en": "Which 'Chhand' has 24 syllables?",
        "question_hi": "किस छंद में 24 मात्राएँ होती हैं?",
        "options_en": ["Doha", "Chaupai", "Soratha", "None"],
        "options_hi": ["दोहा", "चौपाई", "सोरठा", "कोई नहीं"],
        "answer_en": "Doha",
        "answer_hi": "दोहा",
        "attempted": false
    },
    {
        "num": 10,
        "question_en": "What is the 'Samuchchay Bodhak' in 'वह आया और चला गया'?",
        "question_hi": "'वह आया और चला गया' में समुच्चयबोधक क्या है?",
        "options_en": ["वह", "और", "चला गया", "None"],
        "options_hi": ["वह", "और", "चला गया", "कोई नहीं"],
        "answer_en": "और",
        "answer_hi": "और",
        "attempted": false
    },
    {
        "num": 11,
        "question_en": "Which 'Alankar' is in 'पायो जी मैंने राम रतन धन पायो'?",
        "question_hi": "'पायो जी मैंने राम रतन धन पायो' में कौन सा अलंकार है?",
        "options_en": ["Anupras (Alliteration)", "Yamak (Homonym)", "Shlesh (Pun)", "None"],
        "options_hi": ["अनुप्रास", "यमक", "श्लेष", "कोई नहीं"],
        "answer_en": "Anupras (Alliteration)",
        "answer_hi": "अनुप्रास",
        "attempted": false
    },
    {
        "num": 12,
        "question_en": "What is the correct 'Paryayvachi' for 'अग्नि'?",
        "question_hi": "'अग्नि' का पर्यायवाची शब्द क्या है?",
        "options_en": ["पानी", "आग", "हवा", "पृथ्वी"],
        "options_hi": ["पानी", "आग", "हवा", "पृथ्वी"],
        "answer_en": "आग",
        "answer_hi": "आग",
        "attempted": false
    },
    {
        "num": 13,
        "question_en": "Which 'Samas' is in 'महाराजा'?",
        "question_hi": "'महाराजा' में कौन सा समास है?",
        "options_en": ["Tatpurush", "Karmadharaya", "Dvigu", "None"],
        "options_hi": ["तत्पुरुष", "कर्मधारय", "द्विगु", "कोई नहीं"],
        "answer_en": "Karmadharaya",
        "answer_hi": "कर्मधारय",
        "attempted": false
    },
    {
        "num": 14,
        "question_en": "What is the 'Vibhakti' in 'फल के लिए'?",
        "question_hi": "'फल के लिए' में कौन सी विभक्ति है?",
        "options_en": ["Dvitiya", "Chaturthi", "Panchami", "None"],
        "options_hi": ["द्वितीया", "चतुर्थी", "पंचमी", "कोई नहीं"],
        "answer_en": "Chaturthi",
        "answer_hi": "चतुर्थी",
        "attempted": false
    },
    {
        "num": 15,
        "question_en": "Which 'Muhavara' means 'to be very happy'?",
        "question_hi": "किस मुहावरे का अर्थ 'बहुत खुश होना' है?",
        "options_en": ["आसमान से बातें करना", "फूला न समाना", "परेशान होना", "None"],
        "options_hi": ["आसमान से बातें करना", "फूला न समाना", "परेशान होना", "कोई नहीं"],
        "answer_en": "फूला न समाना",
        "answer_hi": "फूला न समाना",
        "attempted": false
    },
    {
        "num": 16,
        "question_en": "What is the correct 'Visheshya' in 'नीला आकाश'?",
        "question_hi": "'नीला आकाश' में विशेष्य क्या है?",
        "options_en": ["नीला", "आकाश", "Both", "None"],
        "options_hi": ["नीला", "आकाश", "दोनों", "कोई नहीं"],
        "answer_en": "आकाश",
        "answer_hi": "आकाश",
        "attempted": false
    },
    {
        "num": 17,
        "question_en": "Which 'Karak' is in 'वह घर से आया' for 'घर'?",
        "question_hi": "'वह घर से आया' में 'घर' का कारक क्या है?",
        "options_en": ["Karta", "Karam", "Apadan", "None"],
        "options_hi": ["कर्ता", "कर्म", "अपादान", "कोई नहीं"],
        "answer_en": "Apadan",
        "answer_hi": "अपादान",
        "attempted": false
    },
    {
        "num": 18,
        "question_en": "What is the correct 'Vachan' for 'लताएँ'?",
        "question_hi": "'लताएँ' का वचन क्या है?",
        "options_en": ["Singular", "Plural", "Both", "None"],
        "options_hi": ["एकवचन", "बहुवचन", "दोनों", "कोई नहीं"],
        "answer_en": "Plural",
        "answer_hi": "बहुवचन",
        "attempted": false
    },
    {
        "num": 19,
        "question_en": "Which 'Ling' is 'नदी'?",
        "question_hi": "'नदी' का लिंग क्या है?",
        "options_en": ["Masculine", "Feminine", "Neuter", "None"],
        "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "कोई नहीं"],
        "answer_en": "Feminine",
        "answer_hi": "स्त्रीलिंग",
        "attempted": false
    },
    {
        "num": 20,
        "question_en": "What is the correct 'Paryayvachi' for 'वायु'?",
        "question_hi": "'वायु' का पर्यायवाची शब्द क्या है?",
        "options_en": ["पानी", "हवा", "अग्नि", "पृथ्वी"],
        "options_hi": ["पानी", "हवा", "अग्नि", "पृथ्वी"],
        "answer_en": "हवा",
        "answer_hi": "हवा",
        "attempted": false
    },
    {
        "num": 21,
        "question_en": "Which 'Visheshan' is in 'ऊँचा पहाड़'?",
        "question_hi": "'ऊँचा पहाड़' में कौन सा विशेषण है?",
        "options_en": ["ऊँचा", "पहाड़", "Both", "None"],
        "options_hi": ["ऊँचा", "पहाड़", "दोनों", "कोई नहीं"],
        "answer_en": "ऊँचा",
        "answer_hi": "ऊँचा",
        "attempted": false
    },
    {
        "num": 22,
        "question_en": "What is the correct 'Kriya Visheshan' in 'वह धीरे-धीरे चलता है'?",
        "question_hi": "'वह धीरे-धीरे चलता है' में क्रिया विशेषण क्या है?",
        "options_en": ["वह", "धीरे-धीरे", "चलता है", "None"],
        "options_hi": ["वह", "धीरे-धीरे", "चलता है", "कोई नहीं"],
        "answer_en": "धीरे-धीरे",
        "answer_hi": "धीरे-धीरे",
        "attempted": false
    },
    {
        "num": 23,
        "question_en": "Which 'Samas' is in 'राजकुमार'?",
        "question_hi": "'राजकुमार' में कौन सा समास है?",
        "options_en": ["Tatpurush", "Karmadharaya", "Dvandva", "None"],
        "options_hi": ["तत्पुरुष", "कर्मधारय", "द्वंद्व", "कोई नहीं"],
        "answer_en": "Tatpurush",
        "answer_hi": "तत्पुरुष",
        "attempted": false
    },
    {
        "num": 24,
        "question_en": "What is the 'Vibhakti' in 'गुरु के लिए'?",
        "question_hi": "'गुरु के लिए' में कौन सी विभक्ति है?",
        "options_en": ["Dvitiya", "Chaturthi", "Saptami", "None"],
        "options_hi": ["द्वितीया", "चतुर्थी", "सप्तमी", "कोई नहीं"],
        "answer_en": "Chaturthi",
        "answer_hi": "चतुर्थी",
        "attempted": false
    },
    {
        "num": 25,
        "question_en": "Which 'Sandhi' is in 'गण + ईश = गणेश'?",
        "question_hi": "'गण + ईश = गणेश' में कौन सी संधि है?",
        "options_en": ["Guna", "Vriddhi", "Yan", "None"],
        "options_hi": ["गुण", "वृद्धि", "यण", "कोई नहीं"],
        "answer_en": "Yan",
        "answer_hi": "यण",
        "attempted": false
    },
    {
        "num": 26,
        "question_en": "What is the correct 'Muhavara' for 'to be very angry'?",
        "question_hi": "'बहुत गुस्सा होना' के लिए कौन सा मुहावरा है?",
        "options_en": ["आग बबूला होना", "फूला न समाना", "परेशान होना", "None"],
        "options_hi": ["आग बबूला होना", "फूला न समाना", "परेशान होना", "कोई नहीं"],
        "answer_en": "आग बबूला होना",
        "answer_hi": "आग बबूला होना",
        "attempted": false
    },
    {
        "num": 27,
        "question_en": "Which 'Ras' is in 'भक्ति काव्य'?",
        "question_hi": "'भक्ति काव्य' में कौन सा रस होता है?",
        "options_en": ["Shringar Ras", "Bhakti Ras", "Veer Ras", "None"],
        "options_hi": ["श्रृंगार रस", "भक्ति रस", "वीर रस", "कोई नहीं"],
        "answer_en": "Bhakti Ras",
        "answer_hi": "भक्ति रस",
        "attempted": false
    },
    {
        "num": 28,
        "question_en": "What is the correct 'Vakya Prakar' for 'जब वह आया, मैं सो रहा था'?",
        "question_hi": "'जब वह आया, मैं सो रहा था' का वाक्य प्रकार क्या है?",
        "options_en": ["Simple", "Compound", "Complex", "None"],
        "options_hi": ["सरल", "संयुक्त", "मिश्र", "कोई नहीं"],
        "answer_en": "Complex",
        "answer_hi": "मिश्र",
        "attempted": false
    },
    {
        "num": 29,
        "question_en": "Which 'Chhand' has 11 syllables per line?",
        "question_hi": "किस छंद में प्रति पंक्ति 11 मात्राएँ होती हैं?",
        "options_en": ["Doha", "Chaupai", "Soratha", "None"],
        "options_hi": ["दोहा", "चौपाई", "सोरठा", "कोई नहीं"],
        "answer_en": "Soratha",
        "answer_hi": "सोरठा",
        "attempted": false
    },
    {
        "num": 30,
        "question_en": "What is the correct 'Samuchchay Bodhak' in 'वह पढ़ता है परंतु समझता नहीं'?",
        "question_hi": "'वह पढ़ता है परंतु समझता नहीं' में समुच्चयबोधक क्या है?",
        "options_en": ["वह", "परंतु", "समझता", "None"],
        "options_hi": ["वह", "परंतु", "समझता", "कोई नहीं"],
        "answer_en": "परंतु",
        "answer_hi": "परंतु",
        "attempted": false
    },
    {
        "num": 31,
        "question_en": "Which 'Alankar' is in 'चरण कमल बंदौ हरि राई'?",
        "question_hi": "'चरण कमल बंदौ हरि राई' में कौन सा अलंकार है?",
        "options_en": ["Upma", "Rupak", "Atishayokti", "None"],
        "options_hi": ["उपमा", "रूपक", "अतिशयोक्ति", "कोई नहीं"],
        "answer_en": "Rupak",
        "answer_hi": "रूपक",
        "attempted": false
    },
    {
        "num": 32,
        "question_en": "What is the correct 'Visheshya' in 'पीला केला'?",
        "question_hi": "'पीला केला' में विशेष्य क्या है?",
        "options_en": ["पीला", "केला", "Both", "None"],
        "options_hi": ["पीला", "केला", "दोनों", "कोई नहीं"],
        "answer_en": "केला",
        "answer_hi": "केला",
        "attempted": false
    },
    {
        "num": 33,
        "question_en": "Which 'Karak' is in 'मैंने फल खाया' for 'फल'?",
        "question_hi": "'मैंने फल खाया' में 'फल' का कारक क्या है?",
        "options_en": ["Karta", "Karam", "Sampradan", "None"],
        "options_hi": ["कर्ता", "कर्म", "संप्रदान", "कोई नहीं"],
        "answer_en": "Karam",
        "answer_hi": "कर्म",
        "attempted": false
    },
    {
        "num": 34,
        "question_en": "What is the correct 'Vachan' for 'किताबें'?",
        "question_hi": "'किताबें' का वचन क्या है?",
        "options_en": ["Singular", "Plural", "Both", "None"],
        "options_hi": ["एकवचन", "बहुवचन", "दोनों", "कोई नहीं"],
        "answer_en": "Plural",
        "answer_hi": "बहुवचन",
        "attempted": false
    },
    {
        "num": 35,
        "question_en": "Which 'Ling' is 'सभा'?",
        "question_hi": "'सभा' का लिंग क्या है?",
        "options_en": ["Masculine", "Feminine", "Neuter", "None"],
        "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "कोई नहीं"],
        "answer_en": "Feminine",
        "answer_hi": "स्त्रीलिंग",
        "attempted": false
    },
    {
        "num": 36,
        "question_en": "What is the correct 'Paryayvachi' for 'चंद्रमा'?",
        "question_hi": "'चंद्रमा' का पर्यायवाची शब्द क्या है?",
        "options_en": ["सूर्य", "चाँद", "तारा", "पृथ्वी"],
        "options_hi": ["सूर्य", "चाँद", "तारा", "पृथ्वी"],
        "answer_en": "चाँद",
        "answer_hi": "चाँद",
        "attempted": false
    },
    {
        "num": 37,
        "question_en": "Which 'Visheshan' is in 'बड़ा पेड़'?",
        "question_hi": "'बड़ा पेड़' में कौन सा विशेषण है?",
        "options_en": ["बड़ा", "पेड़", "Both", "None"],
        "options_hi": ["बड़ा", "पेड़", "दोनों", "कोई नहीं"],
        "answer_en": "बड़ा",
        "answer_hi": "बड़ा",
        "attempted": false
    },
    {
        "num": 38,
        "question_en": "What is the correct 'Kriya Visheshan' in 'वह जोर से हँसा'?",
        "question_hi": "'वह जोर से हँसा' में क्रिया विशेषण क्या है?",
        "options_en": ["वह", "जोर से", "हँसा", "None"],
        "options_hi": ["वह", "जोर से", "हँसा", "कोई नहीं"],
        "answer_en": "जोर से",
        "answer_hi": "जोर से",
        "attempted": false
    },
    {
        "num": 39,
        "question_en": "Which 'Samas' is in 'पंचवटी'?",
        "question_hi": "'पंचवटी' में कौन सा समास है?",
        "options_en": ["Tatpurush", "Dvigu", "Dvandva", "None"],
        "options_hi": ["तत्पुरुष", "द्विगु", "द्वंद्व", "कोई नहीं"],
        "answer_en": "Dvigu",
        "answer_hi": "द्विगु",
        "attempted": false
    },
    {
        "num": 40,
        "question_en": "What is the 'Vibhakti' in 'गाँव में'?",
        "question_hi": "'गाँव में' में कौन सी विभक्ति है?",
        "options_en": ["Prathama", "Saptami", "Both", "None"],
        "options_hi": ["प्रथमा", "सप्तमी", "दोनों", "कोई नहीं"],
        "answer_en": "Saptami",
        "answer_hi": "सप्तमी",
        "attempted": false
    },
    {
        "num": 41,
        "question_en": "Which 'Sandhi' is in 'देव + इंद्र = देवेंद्र'?",
        "question_hi": "'देव + इंद्र = देवेंद्र' में कौन सी संधि है?",
        "options_en": ["Guna", "Vriddhi", "Yan", "None"],
        "options_hi": ["गुण", "वृद्धि", "यण", "कोई नहीं"],
        "answer_en": "Yan",
        "answer_hi": "यण",
        "attempted": false
    },
    {
        "num": 42,
        "question_en": "What is the correct 'Muhavara' for 'to be ready to give'?",
        "question_hi": "'देने के लिए तैयार' के लिए कौन सा मुहावरा है?",
        "options_en": ["हाथ खोलना", "कमर कसना", "दिल खोलना", "None"],
        "options_hi": ["हाथ खोलना", "कमर कसना", "दिल खोलना", "कोई नहीं"],
        "answer_en": "हाथ खोलना",
        "answer_hi": "हाथ खोलना",
        "attempted": false
    },
    {
        "num": 43,
        "question_en": "Which 'Ras' is in 'भक्ति काव्य'?",
        "question_hi": "'भक्ति काव्य' में कौन सा रस होता है?",
        "options_en": ["Bhakti Ras", "Shringar Ras", "Veer Ras", "Karun Ras"],
        "options_hi": ["भक्ति रस", "श्रृंगार रस", "वीर रस", "करुण रस"],
        "answer_en": "Bhakti Ras",
        "answer_hi": "भक्ति रस",
        "attempted": false
    },
    {
        "num": 44,
        "question_en": "What is the correct 'Vakya Prakar' for 'जब वह आया, मैं सो रहा था'?",
        "question_hi": "'जब वह आया, मैं सो रहा था' का वाक्य प्रकार क्या है?",
        "options_en": ["Simple", "Compound", "Complex", "None"],
        "options_hi": ["सरल", "संयुक्त", "मिश्र", "कोई नहीं"],
        "answer_en": "Complex",
        "answer_hi": "मिश्र",
        "attempted": false
    },
    {
        "num": 45,
        "question_en": "Which 'Chhand' has 16 syllables per line?",
        "question_hi": "किस छंद में प्रति पंक्ति 16 मात्राएँ होती हैं?",
        "options_en": ["Doha", "Chaupai", "Soratha", "None"],
        "options_hi": ["दोहा", "चौपाई", "सोरठा", "कोई नहीं"],
        "answer_en": "Chaupai",
        "answer_hi": "चौपाई",
        "attempted": false
    },
    {
        "num": 46,
        "question_en": "What is the correct 'Samuchchay Bodhak' in 'वह पढ़ता है परंतु समझता नहीं'?",
        "question_hi": "'वह पढ़ता है परंतु समझता नहीं' में समुच्चयबोधक क्या है?",
        "options_en": ["वह", "परंतु", "समझता", "None"],
        "options_hi": ["वह", "परंतु", "समझता", "कोई नहीं"],
        "answer_en": "परंतु",
        "answer_hi": "परंतु",
        "attempted": false
    },
    {
        "num": 47,
        "question_en": "Which 'Alankar' is in 'गंगा की जलधारा'?",
        "question_hi": "'गंगा की जलधारा' में कौन सा अलंकार है?",
        "options_en": ["Upma", "Rupak", "Atishayokti", "None"],
        "options_hi": ["उपमा", "रूपक", "अतिशयोक्ति", "कोई नहीं"],
        "answer_en": "Rupak",
        "answer_hi": "रूपक",
        "attempted": false
    },
    {
        "num": 48,
        "question_en": "What is the correct 'Visheshya' in 'लाल फूल'?",
        "question_hi": "'लाल फूल' में विशेष्य क्या है?",
        "options_en": ["लाल", "फूल", "Both", "None"],
        "options_hi": ["लाल", "फूल", "दोनों", "कोई नहीं"],
        "answer_en": "फूल",
        "answer_hi": "फूल",
        "attempted": false
    },
    {
        "num": 49,
        "question_en": "Which 'Karak' is in 'मैंने राम को पुस्तक दी'?",
        "question_hi": "'मैंने राम को पुस्तक दी' में कौन सा कारक है?",
        "options_en": ["Karta", "Karam", "Sampradan", "None"],
        "options_hi": ["कर्ता", "कर्म", "संप्रदान", "कोई नहीं"],
        "answer_en": "Sampradan",
        "answer_hi": "संप्रदान",
        "attempted": false
    },
    {
        "num": 50,
        "question_en": "What is the correct 'Vachan' for 'बच्चा'?",
        "question_hi": "'बच्चा' का वचन क्या है?",
        "options_en": ["Singular", "Plural", "Both", "None"],
        "options_hi": ["एकवचन", "बहुवचन", "दोनों", "कोई नहीं"],
        "answer_en": "Singular",
        "answer_hi": "एकवचन",
        "attempted": false
    }

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