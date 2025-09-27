
const questions = [
    
    {
        "num": 1,
        "question_en": "What is the meaning of the word 'विद्या'?",
        "question_hi": "'विद्या' शब्द का अर्थ क्या है?",
        "options_en": ["Food", "Clothing", "Knowledge", "Wealth"],
        "options_hi": ["भोजन", "वस्त्र", "ज्ञान", "धन"],
        "answer_en": "Knowledge",
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the synonym of 'गुरु'?",
        "question_hi": "'गुरु' का पर्यायवाची शब्द क्या है?",
        "options_en": ["शिष्य", "आचार्य", "मित्र", "पुत्र"],
        "options_hi": ["शिष्य", "आचार्य", "मित्र", "पुत्र"],
        "answer_en": "आचार्य",
        "answer_hi": "आचार्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "'सत्यं वद' means?",
        "question_hi": "'सत्यं वद' का अर्थ क्या है?",
        "options_en": ["Speak truth", "Speak lie", "Speak sweetly", "Speak slowly"],
        "options_hi": ["सत्य बोलो", "झूठ बोलो", "मिठास से बोलो", "धीरे बोलो"],
        "answer_en": "Speak truth",
        "answer_hi": "सत्य बोलो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which is the correct plural form of 'फलम्'?",
        "question_hi": "'फलम्' का सही बहुवचन रूप क्या है?",
        "options_en": ["फल", "फले", "फलानि", "फलाः"],
        "options_hi": ["फल", "फले", "फलानि", "फलाः"],
        "answer_en": "फलानि",
        "answer_hi": "फलानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which one is a neuter gender noun?",
        "question_hi": "निम्नलिखित में से कौन-सा एक नपुंसकलिंग संज्ञा है?",
        "options_en": ["गजः", "पुस्तकम्", "नदी", "रामः"],
        "options_hi": ["गजः", "पुस्तकम्", "नदी", "रामः"],
        "answer_en": "पुस्तकम्",
        "answer_hi": "पुस्तकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "'पठति' is used for which person?",
        "question_hi": "'पठति' किस पुरुष के लिए प्रयोग होता है?",
        "options_en": ["First person", "Second person", "Third person", "None"],
        "options_hi": ["प्रथम पुरुष", "मध्यम पुरुष", "उत्तम पुरुष", "इनमें से कोई नहीं"],
        "answer_en": "Third person",
        "answer_hi": "उत्तम पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which one is a verb?",
        "question_hi": "निम्नलिखित में से कौन क्रिया है?",
        "options_en": ["गच्छ", "फलम्", "गजः", "नदी"],
        "options_hi": ["गच्छ", "फलम्", "गजः", "नदी"],
        "answer_en": "गच्छ",
        "answer_hi": "गच्छ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the meaning of 'शुभम्'?",
        "question_hi": "'शुभम्' का अर्थ क्या है?",
        "options_en": ["Bad", "Good", "Fast", "Slow"],
        "options_hi": ["बुरा", "अच्छा", "तेज़", "धीमा"],
        "answer_en": "Good",
        "answer_hi": "अच्छा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the feminine form of 'गुरु'?",
        "question_hi": "'गुरु' का स्त्रीलिंग रूप क्या है?",
        "options_en": ["गुरु", "गुरुः", "गुरवी", "गुरुम्"],
        "options_hi": ["गुरु", "गुरुः", "गुरवी", "गुरुम्"],
        "answer_en": "गुरवी",
        "answer_hi": "गुरवी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "'रामः पठति' means?",
        "question_hi": "'रामः पठति' का अर्थ क्या है?",
        "options_en": ["Ram eats", "Ram sleeps", "Ram goes", "Ram reads"],
        "options_hi": ["राम खाता है", "राम सोता है", "राम जाता है", "राम पढ़ता है"],
        "answer_en": "Ram reads",
        "answer_hi": "राम पढ़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the meaning of 'माता'?",
        "question_hi": "'माता' का अर्थ क्या है?",
        "options_en": ["Sister", "Daughter", "Mother", "Aunt"],
        "options_hi": ["बहन", "बेटी", "माँ", "चाची"],
        "answer_en": "Mother",
        "answer_hi": "माँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which is a pronoun in Sanskrit?",
        "question_hi": "संस्कृत में निम्न में से कौन सर्वनाम है?",
        "options_en": ["सः", "फलम्", "गजः", "पठति"],
        "options_hi": ["सः", "फलम्", "गजः", "पठति"],
        "answer_en": "सः",
        "answer_hi": "सः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the correct meaning of 'शिवः नमः'?",
        "question_hi": "'शिवः नमः' का सही अर्थ क्या है?",
        "options_en": ["Shiva goes", "Salutations to Shiva", "Shiva speaks", "Shiva is sleeping"],
        "options_hi": ["शिव जाता है", "शिव को नमस्कार", "शिव बोलता है", "शिव सो रहा है"],
        "answer_en": "Salutations to Shiva",
        "answer_hi": "शिव को नमस्कार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which is a masculine gender word?",
        "question_hi": "निम्न में से कौन पुल्लिंग शब्द है?",
        "options_en": ["लता", "पुस्तकम्", "गजः", "नदी"],
        "options_hi": ["लता", "पुस्तकम्", "गजः", "नदी"],
        "answer_en": "गजः",
        "answer_hi": "गजः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the opposite of 'दिनम्'?",
        "question_hi": "'दिनम्' का विलोम शब्द क्या है?",
        "options_en": ["रात्रिः", "प्रभातः", "सन्ध्या", "कालः"],
        "options_hi": ["रात्रिः", "प्रभातः", "सन्ध्या", "कालः"],
        "answer_en": "रात्रिः",
        "answer_hi": "रात्रिः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "'गच्छामि' is used for?",
        "question_hi": "'गच्छामि' किसके लिए प्रयोग होता है?",
        "options_en": ["I go", "You go", "He goes", "They go"],
        "options_hi": ["मैं जाता हूँ", "तुम जाते हो", "वह जाता है", "वे जाते हैं"],
        "answer_en": "I go",
        "answer_hi": "मैं जाता हूँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which is the locative case form of 'ग्राम'?",
        "question_hi": "'ग्राम' का सप्तमी विभक्ति रूप क्या है?",
        "options_en": ["ग्रामम्", "ग्रामे", "ग्रामः", "ग्रामात्"],
        "options_hi": ["ग्रामम्", "ग्रामे", "ग्रामः", "ग्रामात्"],
        "answer_en": "ग्रामे",
        "answer_hi": "ग्रामे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the Sanskrit word for 'water'?",
        "question_hi": "'पानी' का संस्कृत शब्द क्या है?",
        "options_en": ["अग्निः", "वृक्षः", "जलम्", "भूमिः"],
        "options_hi": ["अग्निः", "वृक्षः", "जलम्", "भूमिः"],
        "answer_en": "जलम्",
        "answer_hi": "जलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "'सा' refers to which gender?",
        "question_hi": "'सा' किस लिंग को दर्शाता है?",
        "options_en": ["Masculine", "Feminine", "Neuter", "None"],
        "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "इनमें से कोई नहीं"],
        "answer_en": "Feminine",
        "answer_hi": "स्त्रीलिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the meaning of 'शान्तिः'?",
        "question_hi": "'शान्तिः' का अर्थ क्या है?",
        "options_en": ["Noise", "Peace", "Victory", "Power"],
        "options_hi": ["शोर", "शांति", "विजय", "शक्ति"],
        "answer_en": "Peace",
        "answer_hi": "शांति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which is the correct dual form of 'बालकः'?",
        "question_hi": "'बालकः' का द्विवचन रूप क्या है?",
        "options_en": ["बालकौ", "बालकः", "बालकाः", "बालकम्"],
        "options_hi": ["बालकौ", "बालकः", "बालकाः", "बालकम्"],
        "answer_en": "बालकौ",
        "answer_hi": "बालकौ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "'गच्छामः' is used for which person?",
        "question_hi": "'गच्छामः' किस पुरुष के लिए प्रयोग होता है?",
        "options_en": ["First person", "Second person", "Third person", "None"],
        "options_hi": ["प्रथम पुरुष", "मध्यम पुरुष", "उत्तम पुरुष", "इनमें से कोई नहीं"],
        "answer_en": "First person",
        "answer_hi": "प्रथम पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which word means 'sky' in Sanskrit?",
        "question_hi": "संस्कृत में 'आकाश' के लिए कौन-सा शब्द है?",
        "options_en": ["जलम्", "गगनम्", "वृक्षः", "भुवनम्"],
        "options_hi": ["जलम्", "गगनम्", "वृक्षः", "भुवनम्"],
        "answer_en": "गगनम्",
        "answer_hi": "गगनम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the meaning of 'पुस्तकम् पठामि'?",
        "question_hi": "'पुस्तकम् पठामि' का अर्थ क्या है?",
        "options_en": ["I eat the book", "I write the book", "I read the book", "I throw the book"],
        "options_hi": ["मैं किताब खाता हूँ", "मैं किताब लिखता हूँ", "मैं किताब पढ़ता हूँ", "मैं किताब फेंकता हूँ"],
        "answer_en": "I read the book",
        "answer_hi": "मैं किताब पढ़ता हूँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which is the correct form of 'कृषकः' in accusative case singular?",
        "question_hi": "'कृषकः' का कर्मकारक एकवचन रूप क्या है?",
        "options_en": ["कृषकम्", "कृषके", "कृषकः", "कृषकात्"],
        "options_hi": ["कृषकम्", "कृषके", "कृषकः", "कृषकात्"],
        "answer_en": "कृषकम्",
        "answer_hi": "कृषकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the verb root in 'पठति'?",
        "question_hi": "'पठति' में क्रियाधातु क्या है?",
        "options_en": ["पठ", "ति", "प", "पठति"],
        "options_hi": ["पठ", "ति", "प", "पठति"],
        "answer_en": "पठ",
        "answer_hi": "पठ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is the meaning of 'नमः'? ",
        "question_hi": "'नमः' का अर्थ क्या है?",
        "options_en": ["Respect", "Wealth", "Light", "God"],
        "options_hi": ["नम्रता", "धन", "प्रकाश", "ईश्वर"],
        "answer_en": "Respect",
        "answer_hi": "नम्रता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the feminine form of 'राजा'?",
        "question_hi": "'राजा' का स्त्रीलिंग रूप क्या है?",
        "options_en": ["राजी", "राजीव", "रानी", "राज"],
        "options_hi": ["राजी", "राजीव", "रानी", "राज"],
        "answer_en": "रानी",
        "answer_hi": "रानी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "'सा गच्छति' means?",
        "question_hi": "'सा गच्छति' का अर्थ क्या है?",
        "options_en": ["She comes", "She goes", "She reads", "She sits"],
        "options_hi": ["वह आती है", "वह जाती है", "वह पढ़ती है", "वह बैठती है"],
        "answer_en": "She goes",
        "answer_hi": "वह जाती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which is a proper noun?",
        "question_hi": "निम्नलिखित में से कौन एक व्यक्तिवाचक संज्ञा है?",
        "options_en": ["पुस्तक", "राम", "गजः", "नदी"],
        "options_hi": ["पुस्तक", "राम", "गजः", "नदी"],
        "answer_en": "राम",
        "answer_hi": "राम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which word means 'forest'?",
        "question_hi": "'वन' का समानार्थी शब्द कौन-सा है?",
        "options_en": ["अरण्यम्", "जलम्", "गगनम्", "गृहः"],
        "options_hi": ["अरण्यम्", "जलम्", "गगनम्", "गृहः"],
        "answer_en": "अरण्यम्",
        "answer_hi": "अरण्यम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Choose the word which is not a noun.",
        "question_hi": "निम्न में से कौन-सा शब्द संज्ञा नहीं है?",
        "options_en": ["फलम्", "पठति", "गजः", "नदी"],
        "options_hi": ["फलम्", "पठति", "गजः", "नदी"],
        "answer_en": "पठति",
        "answer_hi": "पठति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the meaning of 'क्रीडति'?",
        "question_hi": "'क्रीडति' का अर्थ क्या है?",
        "options_en": ["Sleeps", "Eats", "Plays", "Walks"],
        "options_hi": ["सोता है", "खाता है", "खेलता है", "चलता है"],
        "answer_en": "Plays",
        "answer_hi": "खेलता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which is a neuter noun?",
        "question_hi": "निम्न में से कौन-सा शब्द नपुंसकलिंग संज्ञा है?",
        "options_en": ["पुस्तकम्", "गजः", "लता", "गृहिणी"],
        "options_hi": ["पुस्तकम्", "गजः", "लता", "गृहिणी"],
        "answer_en": "पुस्तकम्",
        "answer_hi": "पुस्तकम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the opposite of 'शुभम्'?",
        "question_hi": "'शुभम्' का विलोम शब्द क्या है?",
        "options_en": ["मंगलम्", "शिवम्", "अशुभम्", "कल्याणम्"],
        "options_hi": ["मंगलम्", "शिवम्", "अशुभम्", "कल्याणम्"],
        "answer_en": "अशुभम्",
        "answer_hi": "अशुभम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "'सुखम्' means?",
        "question_hi": "'सुखम्' का अर्थ क्या है?",
        "options_en": ["Pain", "Joy", "Food", "Fear"],
        "options_hi": ["दुख", "आनंद", "भोजन", "भय"],
        "answer_en": "Joy",
        "answer_hi": "आनंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Identify the verb in the sentence 'बालकः पठति'.",
        "question_hi": "'बालकः पठति' वाक्य में क्रिया पहचानिए।",
        "options_en": ["बालकः", "पठति", "पुस्तकम्", "रामः"],
        "options_hi": ["बालकः", "पठति", "पुस्तकम्", "रामः"],
        "answer_en": "पठति",
        "answer_hi": "पठति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which one is not a Sanskrit verb?",
        "question_hi": "निम्नलिखित में से कौन संस्कृत क्रिया नहीं है?",
        "options_en": ["पठ", "गम्", "स्ना", "फल"],
        "options_hi": ["पठ", "गम्", "स्ना", "फल"],
        "answer_en": "फल",
        "answer_hi": "फल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "'त्वम्' refers to?",
        "question_hi": "'त्वम्' किसे सूचित करता है?",
        "options_en": ["He", "They", "You", "I"],
        "options_hi": ["वह", "वे", "तुम", "मैं"],
        "answer_en": "You",
        "answer_hi": "तुम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the root of the verb 'खादति'?",
        "question_hi": "'खादति' क्रिया का धातु क्या है?",
        "options_en": ["ख", "खाद", "ति", "खा"],
        "options_hi": ["ख", "खाद", "ति", "खा"],
        "answer_en": "खाद",
        "answer_hi": "खाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the meaning of 'धन्यः'?",
        "question_hi": "'धन्यः' का अर्थ क्या है?",
        "options_en": ["Sad", "Grateful", "Angry", "Tired"],
        "options_hi": ["दुखी", "कृतज्ञ", "क्रोधित", "थका हुआ"],
        "answer_en": "Grateful",
        "answer_hi": "कृतज्ञ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the plural form of 'फलम्'?",
        "question_hi": "'फलम्' का बहुवचन रूप क्या है?",
        "options_en": ["फले", "फलानि", "फलाः", "फलौ"],
        "options_hi": ["फले", "फलानि", "फलाः", "फलौ"],
        "answer_en": "फलानि",
        "answer_hi": "फलानि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "'मम' means?",
        "question_hi": "'मम' का अर्थ क्या है?",
        "options_en": ["His", "Your", "My", "Our"],
        "options_hi": ["उसका", "तुम्हारा", "मेरा", "हमारा"],
        "answer_en": "My",
        "answer_hi": "मेरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Choose the correct pronoun for 'we'.",
        "question_hi": "'हम' के लिए सही सर्वनाम क्या है?",
        "options_en": ["अहम्", "त्वम्", "वयम्", "ते"],
        "options_hi": ["अहम्", "त्वम्", "वयम्", "ते"],
        "answer_en": "वयम्",
        "answer_hi": "वयम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the opposite of 'सत्य'?",
        "question_hi": "'सत्य' का विलोम शब्द क्या है?",
        "options_en": ["धैर्य", "मिथ्या", "सौम्य", "नवीन"],
        "options_hi": ["धैर्य", "मिथ्या", "सौम्य", "नवीन"],
        "answer_en": "मिथ्या",
        "answer_hi": "मिथ्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which is a feminine gender word?",
        "question_hi": "निम्न में से कौन-सा शब्द स्त्रीलिंग है?",
        "options_en": ["लता", "पुत्रः", "गजः", "फलम्"],
        "options_hi": ["लता", "पुत्रः", "गजः", "फलम्"],
        "answer_en": "लता",
        "answer_hi": "लता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Choose the word which means 'sun'.",
        "question_hi": "'सूर्य' का समानार्थी शब्द क्या है?",
        "options_en": ["चन्द्रः", "रवि", "दिवसः", "प्रकाशः"],
        "options_hi": ["चन्द्रः", "रवि", "दिवसः", "प्रकाशः"],
        "answer_en": "रवि",
        "answer_hi": "रवि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "'त्वं कुत्र गच्छसि?' means?",
        "question_hi": "'त्वं कुत्र गच्छसि?' का अर्थ क्या है?",
        "options_en": ["Where do you go?", "What do you eat?", "Why are you late?", "Who are you?"],
        "options_hi": ["तुम कहाँ जाते हो?", "तुम क्या खाते हो?", "तुम देर क्यों हुए?", "तुम कौन हो?"],
        "answer_en": "Where do you go?",
        "answer_hi": "तुम कहाँ जाते हो?",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which is not a case (vibhakti)?",
        "question_hi": "निम्न में से कौन एक विभक्ति नहीं है?",
        "options_en": ["प्रथमा", "द्वितीया", "चतुर्थी", "दशमी"],
        "options_hi": ["प्रथमा", "द्वितीया", "चतुर्थी", "दशमी"],
        "answer_en": "दशमी",
        "answer_hi": "दशमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the correct vocative form of 'रामः'?",
        "question_hi": "'रामः' का सम्बोधन एकवचन रूप क्या है?",
        "options_en": ["राम", "रामौ", "रामः", "रामम्"],
        "options_hi": ["राम", "रामौ", "रामः", "रामम्"],
        "answer_en": "राम",
        "answer_hi": "राम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which verb means 'to go'?",
        "question_hi": "कौन-सी क्रिया 'जाना' के लिए है?",
        "options_en": ["गम्", "पठ", "खाद", "नृत्य"],
        "options_hi": ["गम्", "पठ", "खाद", "नृत्य"],
        "answer_en": "गम्",
        "answer_hi": "गम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "'गच्छामि' is in which tense?",
        "question_hi": "'गच्छामि' किस काल में है?",
        "options_en": ["Present", "Past", "Future", "Imperative"],
        "options_hi": ["वर्तमान", "भूत", "भविष्य", "आज्ञार्थक"],
        "answer_en": "Present",
        "answer_hi": "वर्तमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is the plural form of 'गजः'?",
        "question_hi": "'गजः' का बहुवचन रूप क्या है?",
        "options_en": ["गज", "गजौ", "गजाः", "गजानि"],
        "options_hi": ["गज", "गजौ", "गजाः", "गजानि"],
        "answer_en": "गजाः",
        "answer_hi": "गजाः",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Choose the correct translation of 'The boy plays'.",
        "question_hi": "'The boy plays' का सही संस्कृत अनुवाद चुनें।",
        "options_en": ["बालकः क्रीडति", "बालकः पठति", "बालकः गच्छति", "बालकः खादति"],
        "options_hi": ["बालकः क्रीडति", "बालकः पठति", "बालकः गच्छति", "बालकः खादति"],
        "answer_en": "बालकः क्रीडति",
        "answer_hi": "बालकः क्रीडति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Identify the neuter gender noun.",
        "question_hi": "निम्न में से नपुंसकलिंग संज्ञा पहचानिए।",
        "options_en": ["फलम्", "रामः", "सीता", "गजः"],
        "options_hi": ["फलम्", "रामः", "सीता", "गजः"],
        "answer_en": "फलम्",
        "answer_hi": "फलम्",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "'सा' is used for?",
        "question_hi": "'सा' का प्रयोग किसके लिए होता है?",
        "options_en": ["He", "She", "It", "You"],
        "options_hi": ["वह (पु)", "वह (स्त्री)", "यह", "तुम"],
        "answer_en": "She",
        "answer_hi": "वह (स्त्री)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "'विद्या' means?",
        "question_hi": "'विद्या' का अर्थ क्या है?",
        "options_en": ["War", "Light", "Knowledge", "Money"],
        "options_hi": ["युद्ध", "प्रकाश", "ज्ञान", "धन"],
        "answer_en": "Knowledge",
        "answer_hi": "ज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "'अहम् पठामि' means?",
        "question_hi": "'अहम् पठामि' का अर्थ क्या है?",
        "options_en": ["I read", "He reads", "You read", "They read"],
        "options_hi": ["मैं पढ़ता हूँ", "वह पढ़ता है", "तुम पढ़ते हो", "वे पढ़ते हैं"],
        "answer_en": "I read",
        "answer_hi": "मैं पढ़ता हूँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which is not a number (वचन)?",
        "question_hi": "निम्नलिखित में से कौन-सा 'वचन' नहीं है?",
        "options_en": ["एकवचन", "द्विवचन", "बहुवचन", "सप्तवचन"],
        "options_hi": ["एकवचन", "द्विवचन", "बहुवचन", "सप्तवचन"],
        "answer_en": "सप्तवचन",
        "answer_hi": "सप्तवचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "'गृहिणी' means?",
        "question_hi": "'गृहिणी' का अर्थ क्या है?",
        "options_en": ["House", "Owner", "Housewife", "Girl"],
        "options_hi": ["घर", "मालिक", "गृहिणी", "लड़की"],
        "answer_en": "Housewife",
        "answer_hi": "गृहिणी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "What is the meaning of 'पठति'?",
        "question_hi": "'पठति' का अर्थ क्या है?",
        "options_en": ["Writes", "Reads", "Goes", "Speaks"],
        "options_hi": ["लिखता है", "पढ़ता है", "जाता है", "बोलता है"],
        "answer_en": "Reads",
        "answer_hi": "पढ़ता है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "Choose the correct masculine noun.",
        "question_hi": "सही पुल्लिंग संज्ञा शब्द चुनिए।",
        "options_en": ["फलं", "गजः", "लता", "विद्या"],
        "options_hi": ["फलं", "गजः", "लता", "विद्या"],
        "answer_en": "गजः",
        "answer_hi": "गजः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "'माता' means?",
        "question_hi": "'माता' का अर्थ क्या है?",
        "options_en": ["Father", "Mother", "Sister", "Aunt"],
        "options_hi": ["पिता", "माता", "बहन", "चाची"],
        "answer_en": "Mother",
        "answer_hi": "माता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "What is the past tense of 'गम्'?",
        "question_hi": "'गम्' का भूतकाल रूप क्या है?",
        "options_en": ["गच्छामि", "अगच्छत्", "गच्छति", "गमिष्यति"],
        "options_hi": ["गच्छामि", "अगच्छत्", "गच्छति", "गमिष्यति"],
        "answer_en": "अगच्छत्",
        "answer_hi": "अगच्छत्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "'बालकः पुस्तकम् पठति।' — Find the verb.",
        "question_hi": "'बालकः पुस्तकम् पठति।' — क्रिया पहचानिए।",
        "options_en": ["बालकः", "पठति", "पुस्तकम्", "None"],
        "options_hi": ["बालकः", "पठति", "पुस्तकम्", "कोई नहीं"],
        "answer_en": "पठति",
        "answer_hi": "पठति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 66,
        "question_en": "What is the dual form of 'फलम्'?",
        "question_hi": "'फलम्' का द्विवचन रूप क्या है?",
        "options_en": ["फल", "फलानि", "फले", "फलाः"],
        "options_hi": ["फल", "फलानि", "फले", "फलाः"],
        "answer_en": "फले",
        "answer_hi": "फले",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 67,
        "question_en": "'पुत्री' is of which gender?",
        "question_hi": "'पुत्री' किस लिंग की संज्ञा है?",
        "options_en": ["Masculine", "Feminine", "Neuter", "None"],
        "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "इनमें से कोई नहीं"],
        "answer_en": "Feminine",
        "answer_hi": "स्त्रीलिंग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 68,
        "question_en": "Which word means 'teacher'?",
        "question_hi": "निम्न में से 'शिक्षक' का अर्थ कौन-सा शब्द है?",
        "options_en": ["विद्या", "गुरुः", "छात्रः", "पुस्तकम्"],
        "options_hi": ["विद्या", "गुरुः", "छात्रः", "पुस्तकम्"],
        "answer_en": "गुरुः",
        "answer_hi": "गुरुः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 69,
        "question_en": "'रामः वनम् गच्छति।' — What is 'वनम्' here?",
        "question_hi": "'रामः वनम् गच्छति।' — यहाँ 'वनम्' क्या है?",
        "options_en": ["Subject", "Object", "Verb", "None"],
        "options_hi": ["कर्ता", "कर्म", "क्रिया", "कोई नहीं"],
        "answer_en": "Object",
        "answer_hi": "कर्म",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 70,
        "question_en": "Select the correct pronoun for 'I'.",
        "question_hi": "'मैं' के लिए सही सर्वनाम चुनिए।",
        "options_en": ["अहम्", "त्वम्", "सः", "वयम्"],
        "options_hi": ["अहम्", "त्वम्", "सः", "वयम्"],
        "answer_en": "अहम्",
        "answer_hi": "अहम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 71,
        "question_en": "What is the opposite of 'शुभम्'?",
        "question_hi": "'शुभम्' का विलोम क्या है?",
        "options_en": ["मङ्गलम्", "अशुभम्", "सुखम्", "हितम्"],
        "options_hi": ["मङ्गलम्", "अशुभम्", "सुखम्", "हितम्"],
        "answer_en": "अशुभम्",
        "answer_hi": "अशुभम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 72,
        "question_en": "Which is a neuter noun?",
        "question_hi": "निम्न में से कौन-सी नपुंसकलिंग संज्ञा है?",
        "options_en": ["गजः", "लता", "फलम्", "रामः"],
        "options_hi": ["गजः", "लता", "फलम्", "रामः"],
        "answer_en": "फलम्",
        "answer_hi": "फलम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 73,
        "question_en": "'सीता गायति' — What is she doing?",
        "question_hi": "'सीता गायति' — वह क्या कर रही है?",
        "options_en": ["Singing", "Reading", "Dancing", "Crying"],
        "options_hi": ["गाना", "पढ़ना", "नृत्य करना", "रोना"],
        "answer_en": "Singing",
        "answer_hi": "गाना",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 74,
        "question_en": "Correct dual form of 'बालकः'?",
        "question_hi": "'बालकः' का सही द्विवचन रूप क्या है?",
        "options_en": ["बालकौ", "बालकाः", "बालकम्", "बालकः"],
        "options_hi": ["बालकौ", "बालकाः", "बालकम्", "बालकः"],
        "answer_en": "बालकौ",
        "answer_hi": "बालकौ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 75,
        "question_en": "Choose the meaning of 'नदी'.",
        "question_hi": "'नदी' का अर्थ चुनिए।",
        "options_en": ["Tree", "River", "Mountain", "Path"],
        "options_hi": ["वृक्ष", "नदी", "पर्वत", "पथ"],
        "answer_en": "River",
        "answer_hi": "नदी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 76,
        "question_en": "'एषः' is used for?",
        "question_hi": "'एषः' का प्रयोग किसके लिए होता है?",
        "options_en": ["He", "This (masculine)", "She", "That"],
        "options_hi": ["वह (पु)", "यह (पु)", "वह (स्त्री)", "वह"],
        "answer_en": "This (masculine)",
        "answer_hi": "यह (पु)",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 77,
        "question_en": "'सा पठति' — Translate.",
        "question_hi": "'सा पठति' — अनुवाद करें।",
        "options_en": ["She sings", "She eats", "She reads", "She writes"],
        "options_hi": ["वह गाती है", "वह खाती है", "वह पढ़ती है", "वह लिखती है"],
        "answer_en": "She reads",
        "answer_hi": "वह पढ़ती है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 78,
        "question_en": "Select the object in 'बालकः पुस्तकम् पठति।'",
        "question_hi": "'बालकः पुस्तकम् पठति।' में कर्म चुनिए।",
        "options_en": ["बालकः", "पठति", "पुस्तकम्", "None"],
        "options_hi": ["बालकः", "पठति", "पुस्तकम्", "कोई नहीं"],
        "answer_en": "पुस्तकम्",
        "answer_hi": "पुस्तकम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 79,
        "question_en": "What is 'शब्द'?",
        "question_hi": "'शब्द' क्या है?",
        "options_en": ["Sound", "Book", "Wind", "Man"],
        "options_hi": ["ध्वनि", "पुस्तक", "वायु", "मनुष्य"],
        "answer_en": "Sound",
        "answer_hi": "ध्वनि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 80,
        "question_en": "'गजः' का स्त्रीलिंग रूप क्या है?",
        "question_hi": "'गजः' का स्त्रीलिंग रूप क्या है?",
        "options_en": ["गजा", "गजिनी", "गजः", "गजःणी"],
        "options_hi": ["गजा", "गजिनी", "गजः", "गजःणी"],
        "answer_en": "गजिनी",
        "answer_hi": "गजिनी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 81,
        "question_en": "Select the correct translation of 'विद्या ददाति विनयम्।'",
        "question_hi": "'विद्या ददाति विनयम्।' का सही अनुवाद चुनिए।",
        "options_en": ["Education gives money", "Education gives knowledge", "Education gives respect", "Education gives humility"],
        "options_hi": ["शिक्षा धन देती है", "शिक्षा ज्ञान देती है", "शिक्षा सम्मान देती है", "शिक्षा विनय देती है"],
        "answer_en": "Education gives humility",
        "answer_hi": "शिक्षा विनय देती है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 82,
        "question_en": "Which is a feminine noun?",
        "question_hi": "निम्न में से कौन-सी स्त्रीलिंग संज्ञा है?",
        "options_en": ["गजः", "फलम्", "लता", "पुस्तकः"],
        "options_hi": ["गजः", "फलम्", "लता", "पुस्तकः"],
        "answer_en": "लता",
        "answer_hi": "लता",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 83,
        "question_en": "What is the plural form of 'फलं'?",
        "question_hi": "'फलं' का बहुवचन रूप क्या है?",
        "options_en": ["फल", "फलानि", "फले", "फलं"],
        "options_hi": ["फल", "फलानि", "फले", "फलं"],
        "answer_en": "फलानि",
        "answer_hi": "फलानि",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 84,
        "question_en": "What is the present tense of 'गम्' for 'He'?",
        "question_hi": "'गम्' का वर्तमानकाल रूप (वह के लिए) क्या है?",
        "options_en": ["गच्छति", "गच्छामि", "गच्छसि", "गच्छतः"],
        "options_hi": ["गच्छति", "गच्छामि", "गच्छसि", "गच्छतः"],
        "answer_en": "गच्छति",
        "answer_hi": "गच्छति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 85,
        "question_en": "Choose the synonym of 'पुस्तकम्'.",
        "question_hi": "'पुस्तकम्' का पर्यायवाची चुनिए।",
        "options_en": ["ग्रन्थः", "गृहः", "गजः", "फलम्"],
        "options_hi": ["ग्रन्थः", "गृहः", "गजः", "फलम्"],
        "answer_en": "ग्रन्थः",
        "answer_hi": "ग्रन्थः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 86,
        "question_en": "What is the meaning of 'शिष्यः'?",
        "question_hi": "'शिष्यः' का अर्थ क्या है?",
        "options_en": ["Teacher", "Student", "Father", "Mother"],
        "options_hi": ["शिक्षक", "छात्र", "पिता", "माता"],
        "answer_en": "Student",
        "answer_hi": "छात्र",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 87,
        "question_en": "'कृषकः कृषि कर्षति।' — Identify the verb.",
        "question_hi": "'कृषकः कृषि कर्षति।' — क्रिया पहचानिए।",
        "options_en": ["कृषकः", "कर्षति", "कृषि", "None"],
        "options_hi": ["कृषकः", "कर्षति", "कृषि", "कोई नहीं"],
        "answer_en": "कर्षति",
        "answer_hi": "कर्षति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 88,
        "question_en": "Which is the correct verb form for 'We go'?",
        "question_hi": "'हम जाते हैं' के लिए सही क्रिया रूप क्या है?",
        "options_en": ["गच्छसि", "गच्छति", "गच्छामि", "गच्छामः"],
        "options_hi": ["गच्छसि", "गच्छति", "गच्छामि", "गच्छामः"],
        "answer_en": "गच्छामः",
        "answer_hi": "गच्छामः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 89,
        "question_en": "Choose the correct preposition meaning 'in'.",
        "question_hi": "'में' के लिए सही उपसर्ग चुनिए।",
        "options_en": ["सम्", "प्रति", "अन्तः", "मध्ये"],
        "options_hi": ["सम्", "प्रति", "अन्तः", "मध्ये"],
        "answer_en": "मध्ये",
        "answer_hi": "मध्ये",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 90,
        "question_en": "Which pronoun is used for 'you' (singular)?",
        "question_hi": "'तुम' (एकवचन) के लिए कौन-सा सर्वनाम प्रयोग होता है?",
        "options_en": ["अहम्", "त्वम्", "युवाम्", "यूयम्"],
        "options_hi": ["अहम्", "त्वम्", "युवाम्", "यूयम्"],
        "answer_en": "त्वम्",
        "answer_hi": "त्वम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 91,
        "question_en": "What is the Sanskrit word for 'Sun'?",
        "question_hi": "'सूर्य' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["चन्द्रः", "सूर्यः", "तारा", "दीपः"],
        "options_hi": ["चन्द्रः", "सूर्यः", "तारा", "दीपः"],
        "answer_en": "सूर्यः",
        "answer_hi": "सूर्यः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 92,
        "question_en": "Choose the antonym of 'सत्य'.",
        "question_hi": "'सत्य' का विलोम चुनिए।",
        "options_en": ["असत्य", "मिथ्या", "तृष्णा", "सत्यता"],
        "options_hi": ["असत्य", "मिथ्या", "तृष्णा", "सत्यता"],
        "answer_en": "असत्य",
        "answer_hi": "असत्य",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 93,
        "question_en": "What is the plural form of 'नदी'?",
        "question_hi": "'नदी' का बहुवचन रूप क्या है?",
        "options_en": ["नद्यः", "नदिः", "नदी", "नद्या"],
        "options_hi": ["नद्यः", "नदिः", "नदी", "नद्या"],
        "answer_en": "नद्यः",
        "answer_hi": "नद्यः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 94,
        "question_en": "Which one is the root verb?",
        "question_hi": "निम्न में से कौन धातु है?",
        "options_en": ["गच्छति", "गम्", "गच्छामि", "गच्छतः"],
        "options_hi": ["गच्छति", "गम्", "गच्छामि", "गच्छतः"],
        "answer_en": "गम्",
        "answer_hi": "गम्",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 95,
        "question_en": "'रामः' is of which gender?",
        "question_hi": "'रामः' किस लिंग का शब्द है?",
        "options_en": ["Masculine", "Feminine", "Neuter", "Common"],
        "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "सामान्यलिंग"],
        "answer_en": "Masculine",
        "answer_hi": "पुल्लिंग",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 96,
        "question_en": "Translate 'She goes'.",
        "question_hi": "'She goes' का संस्कृत अनुवाद करें।",
        "options_en": ["सा गच्छति", "सः गच्छति", "ते गच्छन्ति", "त्वम् गच्छसि"],
        "options_hi": ["सा गच्छति", "सः गच्छति", "ते गच्छन्ति", "त्वम् गच्छसि"],
        "answer_en": "सा गच्छति",
        "answer_hi": "सा गच्छति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 97,
        "question_en": "What is the correct sandhi in 'सत्य + अर्थ'? ",
        "question_hi": "'सत्य + अर्थ' में सही संधि कौन-सी है?",
        "options_en": ["सत्यर्थ", "सत्यअर्थ", "सत्-अर्थ", "सत्यार्थ"],
        "options_hi": ["सत्यर्थ", "सत्यअर्थ", "सत्-अर्थ", "सत्यार्थ"],
        "answer_en": "सत्यार्थ",
        "answer_hi": "सत्यार्थ",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 98,
        "question_en": "Which is not a case (vibhakti)?",
        "question_hi": "निम्न में से कौन एक विभक्ति नहीं है?",
        "options_en": ["प्रथमा", "द्वितीया", "तृतीया", "पंचमी"],
        "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "पंचमी"],
        "answer_en": "पंचमी",
        "answer_hi": "पंचमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 99,
        "question_en": "Correct word for 'friend' (masculine) in Sanskrit.",
        "question_hi": "'मित्र' (पुल्लिंग) के लिए संस्कृत शब्द क्या है?",
        "options_en": ["मित्रम्", "मित्रः", "मित्रा", "मित्रे"],
        "options_hi": ["मित्रम्", "मित्रः", "मित्रा", "मित्रे"],
        "answer_en": "मित्रः",
        "answer_hi": "मित्रः",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 100,
        "question_en": "'त्वम् पठसि' means?",
        "question_hi": "'त्वम् पठसि' का अर्थ है?",
        "options_en": ["You write", "You go", "You speak", "You read"],
        "options_hi": ["तुम लिखते हो", "तुम जाते हो", "तुम बोलते हो", "तुम पढ़ते हो"],
        "answer_en": "You read",
        "answer_hi": "तुम पढ़ते हो",
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