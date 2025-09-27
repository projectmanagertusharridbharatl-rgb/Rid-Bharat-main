
const questions = [
    {
        "num": 1,
        "question_en": "What is the meaning of 'विद्या'?",
        "question_hi": "'विद्या' का अर्थ क्या है?",
        "options_en": ["Money", "Education", "Weapon", "Water"],
        "options_hi": ["धन", "शिक्षा", "हथियार", "जल"],
        "answer_en": "Education",
        "answer_hi": "शिक्षा",
        "subject": "Sanskrit"
      },
      {
        "num": 2,
        "question_en": "Who is called 'गुरु' in Sanskrit?",
        "question_hi": "संस्कृत में 'गुरु' किसे कहा गया है?",
        "options_en": ["Friend", "Teacher", "King", "Servant"],
        "options_hi": ["मित्र", "शिक्षक", "राजा", "सेवक"],
        "answer_en": "Teacher",
        "answer_hi": "शिक्षक",
        "subject": "Sanskrit"
      },
      {
        "num": 3,
        "question_en": "What is the Sanskrit word for 'Sun'?",
        "question_hi": "'सूर्य' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Chandra", "Ravi", "Gagan", "Nabh"],
        "options_hi": ["चन्द्र", "रवि", "गगन", "नभ"],
        "answer_en": "Ravi",
        "answer_hi": "रवि",
        "subject": "Sanskrit"
      },
      {
        "num": 4,
        "question_en": "What is the meaning of 'जलम्'?",
        "question_hi": "'जलम्' का अर्थ क्या है?",
        "options_en": ["Fire", "Air", "Water", "Sky"],
        "options_hi": ["अग्नि", "वायु", "जल", "आकाश"],
        "answer_en": "Water",
        "answer_hi": "जल",
        "subject": "Sanskrit"
      },
      {
        "num": 5,
        "question_en": "What is the opposite of 'सत्यं'?",
        "question_hi": "'सत्यं' का विलोम शब्द क्या है?",
        "options_en": ["Truth", "Lie", "Kindness", "Peace"],
        "options_hi": ["सत्य", "झूठ", "दया", "शांति"],
        "answer_en": "Lie",
        "answer_hi": "झूठ",
        "subject": "Sanskrit"
      },
      {
        "num": 6,
        "question_en": "Which is the correct meaning of 'शांतिः'?",
        "question_hi": "'शांतिः' का सही अर्थ क्या है?",
        "options_en": ["War", "Peace", "Sound", "Light"],
        "options_hi": ["युद्ध", "शांति", "ध्वनि", "प्रकाश"],
        "answer_en": "Peace",
        "answer_hi": "शांति",
        "subject": "Sanskrit"
      },
      {
        "num": 7,
        "question_en": "'गृहम्' means?",
        "question_hi": "'गृहम्' का अर्थ क्या है?",
        "options_en": ["Forest", "Temple", "House", "School"],
        "options_hi": ["वन", "मंदिर", "घर", "विद्यालय"],
        "answer_en": "House",
        "answer_hi": "घर",
        "subject": "Sanskrit"
      },
      {
        "num": 8,
        "question_en": "'नदी' refers to?",
        "question_hi": "'नदी' किसे कहते हैं?",
        "options_en": ["River", "Mountain", "Field", "Garden"],
        "options_hi": ["नदी", "पहाड़", "खेत", "बग़ीचा"],
        "answer_en": "River",
        "answer_hi": "नदी",
        "subject": "Sanskrit"
      },
      {
        "num": 9,
        "question_en": "Select the correct form of verb for 'रामः पठति'?",
        "question_hi": "'रामः पठति' के लिए क्रिया का सही रूप क्या है?",
        "options_en": ["is reading", "are reading", "was reading", "read"],
        "options_hi": ["पढ़ रहा है", "पढ़ रहे हैं", "पढ़ रहा था", "पढ़ा"],
        "answer_en": "is reading",
        "answer_hi": "पढ़ रहा है",
        "subject": "Sanskrit"
      },
      {
        "num": 10,
        "question_en": "What is the gender of 'फलम्'?",
        "question_hi": "'फलम्' का लिंग क्या है?",
        "options_en": ["Masculine", "Feminine", "Neuter", "Common"],
        "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "उभयलिंग"],
        "answer_en": "Neuter",
        "answer_hi": "नपुंसकलिंग",
        "subject": "Sanskrit"
      },
      {
        "num": 11,
        "question_en": "Which of the following means 'book' in Sanskrit?",
        "question_hi": "संस्कृत में 'पुस्तक' के लिए कौन-सा शब्द है?",
        "options_en": ["कथा", "पुस्तकम्", "लेखः", "वाक्यम्"],
        "options_hi": ["कथा", "पुस्तकम्", "लेखः", "वाक्यम्"],
        "answer_en": "पुस्तकम्",
        "answer_hi": "पुस्तकम्",
        "subject": "Sanskrit"
      },
      {
        "num": 12,
        "question_en": "What is the Sanskrit word for 'Boy'?",
        "question_hi": "'Boy' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["बालकः", "कन्या", "नरः", "शिष्यः"],
        "options_hi": ["बालकः", "कन्या", "नरः", "शिष्यः"],
        "answer_en": "बालकः",
        "answer_hi": "बालकः",
        "subject": "Sanskrit"
      },
      {
        "num": 13,
        "question_en": "Choose the correct plural of 'फलम्'",
        "question_hi": "'फलम्' का सही बहुवचन क्या है?",
        "options_en": ["फलं", "फलानि", "फला", "फलाः"],
        "options_hi": ["फलं", "फलानि", "फला", "फलाः"],
        "answer_en": "फलानि",
        "answer_hi": "फलानि",
        "subject": "Sanskrit"
      },
      {
        "num": 14,
        "question_en": "'सा' refers to?",
        "question_hi": "'सा' किसे सूचित करता है?",
        "options_en": ["He", "They", "She", "It"],
        "options_hi": ["वह (पुरुष)", "वे", "वह (स्त्री)", "यह"],
        "answer_en": "She",
        "answer_hi": "वह (स्त्री)",
        "subject": "Sanskrit"
      },
      {
        "num": 15,
        "question_en": "What is the correct form of 'write' in Sanskrit?",
        "question_hi": "'लिखना' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["पठ", "लिख", "गच्छ", "पिब"],
        "options_hi": ["पठ", "लिख", "गच्छ", "पिब"],
        "answer_en": "लिख",
        "answer_hi": "लिख",
        "subject": "Sanskrit"
      },
      {
        "num": 16,
        "question_en": "What is 'आकाशः'?",
        "question_hi": "'आकाशः' क्या है?",
        "options_en": ["Earth", "Sky", "Star", "Moon"],
        "options_hi": ["पृथ्वी", "आकाश", "तारा", "चन्द्रमा"],
        "answer_en": "Sky",
        "answer_hi": "आकाश",
        "subject": "Sanskrit"
      },
      {
        "num": 17,
        "question_en": "Meaning of 'नवः' is?",
        "question_hi": "'नवः' का अर्थ क्या है?",
        "options_en": ["Old", "New", "Blue", "Sky"],
        "options_hi": ["पुराना", "नया", "नीला", "आकाश"],
        "answer_en": "New",
        "answer_hi": "नया",
        "subject": "Sanskrit"
      },
      {
        "num": 18,
        "question_en": "What is the meaning of 'मित्रम्'?",
        "question_hi": "'मित्रम्' का अर्थ क्या है?",
        "options_en": ["Enemy", "Friend", "Teacher", "Student"],
        "options_hi": ["शत्रु", "मित्र", "शिक्षक", "विद्यार्थी"],
        "answer_en": "Friend",
        "answer_hi": "मित्र",
        "subject": "Sanskrit"
      },
      {
        "num": 19,
        "question_en": "Which word means 'teacher' in Sanskrit?",
        "question_hi": "संस्कृत में 'teacher' के लिए कौन-सा शब्द है?",
        "options_en": ["शिष्यः", "गुरुः", "मित्रम्", "राजा"],
        "options_hi": ["शिष्यः", "गुरुः", "मित्रम्", "राजा"],
        "answer_en": "गुरुः",
        "answer_hi": "गुरुः",
        "subject": "Sanskrit"
      },
      {
        "num": 20,
        "question_en": "What is the plural of 'बालकः'?",
        "question_hi": "'बालकः' का बहुवचन क्या है?",
        "options_en": ["बालका", "बालकाः", "बालकान्", "बालके"],
        "options_hi": ["बालका", "बालकाः", "बालकान्", "बालके"],
        "answer_en": "बालकाः",
        "answer_hi": "बालकाः",
        "subject": "Sanskrit"
      },
      {
        "num": 21,
        "question_en": "What is the Sanskrit word for 'Moon'?",
        "question_hi": "'चन्द्रमा' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["Ravi", "Chandra", "Surya", "Soma"],
        "options_hi": ["रवि", "चन्द्र", "सूर्य", "सोम"],
        "answer_en": "Chandra",
        "answer_hi": "चन्द्र",
        "subject": "Sanskrit"
      },
      {
        "num": 22,
        "question_en": "Which is the plural of 'नदी'?",
        "question_hi": "'नदी' का बहुवचन क्या है?",
        "options_en": ["नदीः", "नद्या", "नदी", "नदियाँ"],
        "options_hi": ["नदीः", "नद्या", "नदी", "नदियाँ"],
        "answer_en": "नदियाँ",
        "answer_hi": "नदियाँ",
        "subject": "Sanskrit"
      },
      {
        "num": 23,
        "question_en": "What is the opposite of 'दुर्लभ'?",
        "question_hi": "'दुर्लभ' का विलोम शब्द क्या है?",
        "options_en": ["Rare", "Common", "Expensive", "Easy"],
        "options_hi": ["दुर्लभ", "सामान्य", "महंगा", "आसान"],
        "answer_en": "Common",
        "answer_hi": "सामान्य",
        "subject": "Sanskrit"
      },
      {
        "num": 24,
        "question_en": "Which word means 'Father' in Sanskrit?",
        "question_hi": "संस्कृत में 'पिता' के लिए कौन-सा शब्द है?",
        "options_en": ["पितरः", "पिता", "बाबा", "पितर"],
        "options_hi": ["पितरः", "पिता", "बाबा", "पितर"],
        "answer_en": "पितरः",
        "answer_hi": "पितरः",
        "subject": "Sanskrit"
      },
      {
        "num": 25,
        "question_en": "What is the meaning of 'विद्वान'?",
        "question_hi": "'विद्वान' का अर्थ क्या है?",
        "options_en": ["Fool", "Scholar", "Student", "Teacher"],
        "options_hi": ["मूर्ख", "विद्वान", "विद्यार्थी", "शिक्षक"],
        "answer_en": "Scholar",
        "answer_hi": "विद्वान",
        "subject": "Sanskrit"
      },
      {
        "num": 26,
        "question_en": "What is the plural of 'कवि'?",
        "question_hi": "'कवि' का बहुवचन क्या है?",
        "options_en": ["कविः", "कवी", "कवयः", "कवीन"],
        "options_hi": ["कवि:", "कवी", "कवयः", "कवीन"],
        "answer_en": "कवयः",
        "answer_hi": "कवयः",
        "subject": "Sanskrit"
      },
      {
        "num": 27,
        "question_en": "What does 'साधु' mean?",
        "question_hi": "'साधु' का अर्थ क्या है?",
        "options_en": ["Good", "Saint", "Man", "Wise"],
        "options_hi": ["अच्छा", "साधु", "पुरुष", "बुद्धिमान"],
        "answer_en": "Saint",
        "answer_hi": "साधु",
        "subject": "Sanskrit"
      },
      {
        "num": 28,
        "question_en": "Which of these words is used for 'Water' in Sanskrit?",
        "question_hi": "संस्कृत में 'जल' के लिए कौन-सा शब्द है?",
        "options_en": ["पानी", "जल", "नदी", "स्रोत"],
        "options_hi": ["पानी", "जल", "नदी", "स्रोत"],
        "answer_en": "जल",
        "answer_hi": "जल",
        "subject": "Sanskrit"
      },
      {
        "num": 29,
        "question_en": "Which of the following is the Sanskrit word for 'King'?",
        "question_hi": "निम्नलिखित में से 'राजा' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["रजनि", "राजा", "नरेश", "किंग"],
        "options_hi": ["रजनि", "राजा", "नरेश", "किंग"],
        "answer_en": "राजा",
        "answer_hi": "राजा",
        "subject": "Sanskrit"
      },
      {
        "num": 30,
        "question_en": "What is the Sanskrit word for 'River'?",
        "question_hi": "'नदी' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["नदी", "स्रोत", "सरिता", "ताल"],
        "options_hi": ["नदी", "स्रोत", "सरिता", "ताल"],
        "answer_en": "सरिता",
        "answer_hi": "सरिता",
        "subject": "Sanskrit"
      },
      {
        "num": 31,
        "question_en": "What is the Sanskrit word for 'Friend'?",
        "question_hi": "'मित्र' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["सखा", "मित्र", "बंधु", "संगी"],
        "options_hi": ["सखा", "मित्र", "बंधु", "संगी"],
        "answer_en": "सखा",
        "answer_hi": "सखा",
        "subject": "Sanskrit"
      },
      {
        "num": 32,
        "question_en": "What is the plural of 'राजा'?",
        "question_hi": "'राजा' का बहुवचन क्या है?",
        "options_en": ["राजाः", "राजे", "राजन", "राज"],
        "options_hi": ["राजा:", "राजे", "राजन", "राज"],
        "answer_en": "राजाः",
        "answer_hi": "राजा:",
        "subject": "Sanskrit"
      },
      {
        "num": 33,
        "question_en": "Which is the opposite of 'सुख'?",
        "question_hi": "'सुख' का विलोम शब्द क्या है?",
        "options_en": ["Happiness", "Pleasure", "Pain", "Peace"],
        "options_hi": ["खुशी", "आनंद", "दुख", "शांति"],
        "answer_en": "Pain",
        "answer_hi": "दुख",
        "subject": "Sanskrit"
      },
      {
        "num": 34,
        "question_en": "What does 'शरीर' mean?",
        "question_hi": "'शरीर' का अर्थ क्या है?",
        "options_en": ["Mind", "Body", "Soul", "Heart"],
        "options_hi": ["मनो", "शरीर", "आत्मा", "हृदय"],
        "answer_en": "Body",
        "answer_hi": "शरीर",
        "subject": "Sanskrit"
      },
      {
        "num": 35,
        "question_en": "What is the meaning of 'आनंद'?",
        "question_hi": "'आनंद' का अर्थ क्या है?",
        "options_en": ["Peace", "Joy", "Knowledge", "Beauty"],
        "options_hi": ["शांति", "आनंद", "ज्ञान", "सौंदर्य"],
        "answer_en": "Joy",
        "answer_hi": "आनंद",
        "subject": "Sanskrit"
      },
      {
        "num": 36,
        "question_en": "Which word means 'Teacher' in Sanskrit?",
        "question_hi": "संस्कृत में 'शिक्षक' के लिए कौन-सा शब्द है?",
        "options_en": ["गुरु", "आचार्य", "शिक्षक", "वाचक"],
        "options_hi": ["गुरु", "आचार्य", "शिक्षक", "वाचक"],
        "answer_en": "गुरु",
        "answer_hi": "गुरु",
        "subject": "Sanskrit"
      },
      {
        "num": 37,
        "question_en": "What is the Sanskrit word for 'Knowledge'?",
        "question_hi": "'ज्ञान' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["ज्ञान", "विद्या", "स्मृति", "सिद्धि"],
        "options_hi": ["ज्ञान", "विद्या", "स्मृति", "सिद्धि"],
        "answer_en": "विद्या",
        "answer_hi": "विद्या",
        "subject": "Sanskrit"
      },
      {
        "num": 38,
        "question_en": "What is the plural of 'स्त्री'?",
        "question_hi": "'स्त्री' का बहुवचन क्या है?",
        "options_en": ["स्त्रीणि", "स्त्रियां", "स्त्री", "स्त्रियः"],
        "options_hi": ["स्त्रीणि", "स्त्रियां", "स्त्री", "स्त्रियः"],
        "answer_en": "स्त्रीणि",
        "answer_hi": "स्त्रीणि",
        "subject": "Sanskrit"
      },
      {
        "num": 39,
        "question_en": "What does 'पतंजलि' mean?",
        "question_hi": "'पतंजलि' का क्या अर्थ है?",
        "options_en": ["A type of flower", "A great scholar", "A saint", "A river"],
        "options_hi": ["एक प्रकार का फूल", "एक महान विद्वान", "एक संत", "एक नदी"],
        "answer_en": "A great scholar",
        "answer_hi": "एक महान विद्वान",
        "subject": "Sanskrit"
      },
      {
        "num": 40,
        "question_en": "What is the Sanskrit word for 'Student'?",
        "question_hi": "'विद्यार्थी' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["विद्यार्थी", "शिष्य", "पात्र", "चात्र"],
        "options_hi": ["विद्यार्थी", "शिष्य", "पात्र", "चात्र"],
        "answer_en": "शिष्य",
        "answer_hi": "शिष्य",
        "subject": "Sanskrit"
      },
      {
        "num": 41,
        "question_en": "What is the opposite of 'दीन'?",
        "question_hi": "'दीन' का विलोम शब्द क्या है?",
        "options_en": ["Poor", "Rich", "Happy", "Good"],
        "options_hi": ["गरीब", "अमीर", "खुश", "अच्छा"],
        "answer_en": "Rich",
        "answer_hi": "अमीर",
        "subject": "Sanskrit"
      },
      {
        "num": 42,
        "question_en": "What is the Sanskrit word for 'Sky'?",
        "question_hi": "'आसमान' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["आकाश", "वायू", "सूर्य", "चन्द्र"],
        "options_hi": ["आकाश", "वायू", "सूर्य", "चन्द्र"],
        "answer_en": "आकाश",
        "answer_hi": "आकाश",
        "subject": "Sanskrit"
      },
      {
        "num": 43,
        "question_en": "Which of the following is the Sanskrit word for 'Love'?",
        "question_hi": "निम्नलिखित में से 'प्रेम' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["माया", "प्रेम", "राग", "प्यार"],
        "options_hi": ["माया", "प्रेम", "राग", "प्यार"],
        "answer_en": "प्रेम",
        "answer_hi": "प्रेम",
        "subject": "Sanskrit"
      },
      {
        "num": 44,
        "question_en": "What is the plural of 'पुस्तक'?",
        "question_hi": "'पुस्तक' का बहुवचन क्या है?",
        "options_en": ["पुस्तकाः", "पुस्तकानि", "पुस्तक", "पुस्तकम्"],
        "options_hi": ["पुस्तक:", "पुस्तकानि", "पुस्तक", "पुस्तकम्"],
        "answer_en": "पुस्तकानि",
        "answer_hi": "पुस्तकानि",
        "subject": "Sanskrit"
      },
      {
        "num": 45,
        "question_en": "Which is the opposite of 'मृत'?",
        "question_hi": "'मृत' का विलोम शब्द क्या है?",
        "options_en": ["Alive", "Dead", "Happy", "Cold"],
        "options_hi": ["जीवित", "मृत", "खुश", "ठंडा"],
        "answer_en": "Alive",
        "answer_hi": "जीवित",
        "subject": "Sanskrit"
      },
      {
        "num": 46,
        "question_en": "What is the meaning of 'शान्ति'?",
        "question_hi": "'शान्ति' का अर्थ क्या है?",
        "options_en": ["Noise", "Peace", "War", "Confusion"],
        "options_hi": ["कोलाहल", "शांति", "युद्ध", "उलझन"],
        "answer_en": "Peace",
        "answer_hi": "शांति",
        "subject": "Sanskrit"
      },
      {
        "num": 47,
        "question_en": "What is the Sanskrit word for 'Fire'?",
        "question_hi": "'आग' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["अग्नि", "वायु", "जल", "पृथ्वी"],
        "options_hi": ["अग्नि", "वायु", "जल", "पृथ्वी"],
        "answer_en": "अग्नि",
        "answer_hi": "अग्नि",
        "subject": "Sanskrit"
      },
      {
        "num": 48,
        "question_en": "What does 'दक्षिण' mean?",
        "question_hi": "'दक्षिण' का अर्थ क्या है?",
        "options_en": ["West", "North", "South", "East"],
        "options_hi": ["पश्चिम", "उत्तर", "दक्षिण", "पूर्व"],
        "answer_en": "South",
        "answer_hi": "दक्षिण",
        "subject": "Sanskrit"
      },
      {
        "num": 49,
        "question_en": "What is the plural of 'धन'?",
        "question_hi": "'धन' का बहुवचन क्या है?",
        "options_en": ["धन्य", "धनाः", "धन", "धनानि"],
        "options_hi": ["धन्य", "धन:", "धन", "धनानि"],
        "answer_en": "धनानि",
        "answer_hi": "धनानि",
        "subject": "Sanskrit"
      },
      {
        "num": 50,
        "question_en": "What does 'यात्रा' mean?",
        "question_hi": "'यात्रा' का अर्थ क्या है?",
        "options_en": ["Journey", "Rest", "Travel", "Work"],
        "options_hi": ["यात्रा", "विश्राम", "यात्रा", "कार्य"],
        "answer_en": "Journey",
        "answer_hi": "यात्रा",
        "subject": "Sanskrit"
      },
      {
        "num": 51,
        "question_en": "What is the Sanskrit word for 'Teacher'?",
        "question_hi": "'शिक्षक' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["गुरु", "आचार्य", "शिक्षक", "उपदेशक"],
        "options_hi": ["गुरु", "आचार्य", "शिक्षक", "उपदेशक"],
        "answer_en": "गुरु",
        "answer_hi": "गुरु",
        "subject": "Sanskrit"
      },
      {
        "num": 52,
        "question_en": "What is the plural of 'बालक'?",
        "question_hi": "'बालक' का बहुवचन क्या है?",
        "options_en": ["बालकाः", "बालका", "बालक", "बालकानि"],
        "options_hi": ["बालक:", "बालका", "बालक", "बालकानि"],
        "answer_en": "बालकाः",
        "answer_hi": "बालक:",
        "subject": "Sanskrit"
      },
      {
        "num": 53,
        "question_en": "Which of these means 'Mother' in Sanskrit?",
        "question_hi": "संस्कृत में 'माता' के लिए कौन-सा शब्द है?",
        "options_en": ["मातृ", "जननी", "माँ", "सुत"],
        "options_hi": ["मातृ", "जननी", "माँ", "सुत"],
        "answer_en": "मातृ",
        "answer_hi": "मातृ",
        "subject": "Sanskrit"
      },
      {
        "num": 54,
        "question_en": "What is the meaning of 'धन्य'?",
        "question_hi": "'धन्य' का अर्थ क्या है?",
        "options_en": ["Poor", "Rich", "Lucky", "Unfortunate"],
        "options_hi": ["गरीब", "अमीर", "भाग्यशाली", "दुर्भाग्यशाली"],
        "answer_en": "Lucky",
        "answer_hi": "भाग्यशाली",
        "subject": "Sanskrit"
      },
      {
        "num": 55,
        "question_en": "What is the Sanskrit word for 'Sun'?",
        "question_hi": "'सूर्य' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["सूर्य", "चन्द्र", "अग्नि", "पृथ्वी"],
        "options_hi": ["सूर्य", "चन्द्र", "अग्नि", "पृथ्वी"],
        "answer_en": "सूर्य",
        "answer_hi": "सूर्य",
        "subject": "Sanskrit"
      },
      {
        "num": 56,
        "question_en": "What is the opposite of 'पाप'?",
        "question_hi": "'पाप' का विलोम शब्द क्या है?",
        "options_en": ["Sin", "Virtue", "Evil", "Good"],
        "options_hi": ["पाप", "पुण्य", "दुष्टता", "अच्छा"],
        "answer_en": "Virtue",
        "answer_hi": "पुण्य",
        "subject": "Sanskrit"
      },
      {
        "num": 57,
        "question_en": "Which word means 'Horse' in Sanskrit?",
        "question_hi": "संस्कृत में 'घोड़ा' के लिए कौन-सा शब्द है?",
        "options_en": ["अश्व", "गज", "वृषभ", "हस्ति"],
        "options_hi": ["अश्व", "गज", "वृषभ", "हस्ति"],
        "answer_en": "अश्व",
        "answer_hi": "अश्व",
        "subject": "Sanskrit"
      },
      {
        "num": 58,
        "question_en": "What is the plural of 'देव'?",
        "question_hi": "'देव' का बहुवचन क्या है?",
        "options_en": ["देवः", "देवाः", "देवों", "देवा"],
        "options_hi": ["देव:", "देव:", "देवों", "देवा"],
        "answer_en": "देवाः",
        "answer_hi": "देवा:",
        "subject": "Sanskrit"
      },
      {
        "num": 59,
        "question_en": "What is the Sanskrit word for 'Victory'?",
        "question_hi": "'विजय' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["विजय", "जय", "सफलता", "प्रभु"],
        "options_hi": ["विजय", "जय", "सफलता", "प्रभु"],
        "answer_en": "विजय",
        "answer_hi": "विजय",
        "subject": "Sanskrit"
      },
      {
        "num": 60,
        "question_en": "What is the opposite of 'न्याय'?",
        "question_hi": "'न्याय' का विलोम शब्द क्या है?",
        "options_en": ["Justice", "Law", "Injustice", "Order"],
        "options_hi": ["न्याय", "कानून", "अधिकार", "विरोध"],
        "answer_en": "Injustice",
        "answer_hi": "अधिकार",
        "subject": "Sanskrit"
      },
      {
        "num": 61,
        "question_en": "What is the Sanskrit word for 'Ocean'?",
        "question_hi": "'सागर' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["सागर", "नदी", "समुद्र", "जल"],
        "options_hi": ["सागर", "नदी", "समुद्र", "जल"],
        "answer_en": "सागर",
        "answer_hi": "सागर",
        "subject": "Sanskrit"
      },
      {
        "num": 62,
        "question_en": "What does 'साधु' mean?",
        "question_hi": "'साधु' का अर्थ क्या है?",
        "options_en": ["Saint", "Sinner", "King", "Soldier"],
        "options_hi": ["संत", "पापी", "राजा", "सैनिक"],
        "answer_en": "Saint",
        "answer_hi": "संत",
        "subject": "Sanskrit"
      },
      {
        "num": 63,
        "question_en": "Which of these means 'King' in Sanskrit?",
        "question_hi": "संस्कृत में 'राजा' के लिए कौन-सा शब्द है?",
        "options_en": ["राजा", "महाराज", "शासक", "किंग"],
        "options_hi": ["राजा", "महाराज", "शासक", "किंग"],
        "answer_en": "राजा",
        "answer_hi": "राजा",
        "subject": "Sanskrit"
      },
      {
        "num": 64,
        "question_en": "What is the plural of 'धन'?",
        "question_hi": "'धन' का बहुवचन क्या है?",
        "options_en": ["धन्य", "धनाः", "धन", "धनानि"],
        "options_hi": ["धन्य", "धन:", "धन", "धनानि"],
        "answer_en": "धनानि",
        "answer_hi": "धनानि",
        "subject": "Sanskrit"
      },
      {
        "num": 65,
        "question_en": "Which word means 'Friend' in Sanskrit?",
        "question_hi": "संस्कृत में 'मित्र' के लिए कौन-सा शब्द है?",
        "options_en": ["सखा", "मित्र", "बंधु", "संगी"],
        "options_hi": ["सखा", "मित्र", "बंधु", "संगी"],
        "answer_en": "मित्र",
        "answer_hi": "मित्र",
        "subject": "Sanskrit"
      },
      {
        "num": 66,
        "question_en": "What is the meaning of 'साहस'?",
        "question_hi": "'साहस' का अर्थ क्या है?",
        "options_en": ["Courage", "Fear", "Strength", "Power"],
        "options_hi": ["साहस", "डर", "शक्ति", "बल"],
        "answer_en": "Courage",
        "answer_hi": "साहस",
        "subject": "Sanskrit"
      },
      {
        "num": 67,
        "question_en": "What is the Sanskrit word for 'Moon'?",
        "question_hi": "'चन्द्रमा' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["चन्द्र", "सूर्य", "जल", "पृथ्वी"],
        "options_hi": ["चन्द्र", "सूर्य", "जल", "पृथ्वी"],
        "answer_en": "चन्द्र",
        "answer_hi": "चन्द्र",
        "subject": "Sanskrit"
      },
      {
        "num": 68,
        "question_en": "What is the opposite of 'शिव'?",
        "question_hi": "'शिव' का विलोम शब्द क्या है?",
        "options_en": ["God", "Demon", "Good", "Evil"],
        "options_hi": ["ईश्वर", "राक्षस", "अच्छा", "दुष्ट"],
        "answer_en": "Demon",
        "answer_hi": "राक्षस",
        "subject": "Sanskrit"
      },
      {
        "num": 69,
        "question_en": "Which word means 'Victory' in Sanskrit?",
        "question_hi": "संस्कृत में 'विजय' के लिए कौन-सा शब्द है?",
        "options_en": ["विजय", "सफलता", "जय", "सिद्धि"],
        "options_hi": ["विजय", "सफलता", "जय", "सिद्धि"],
        "answer_en": "विजय",
        "answer_hi": "विजय",
        "subject": "Sanskrit"
      },
      {
        "num": 70,
        "question_en": "What is the meaning of 'धर्म'?",
        "question_hi": "'धर्म' का अर्थ क्या है?",
        "options_en": ["Law", "Truth", "Virtue", "Religion"],
        "options_hi": ["कानून", "सत्य", "पुण्य", "धर्म"],
        "answer_en": "Religion",
        "answer_hi": "धर्म",
        "subject": "Sanskrit"
      },
      {
        "num": 71,
        "question_en": "What is the Sanskrit word for 'River'?",
        "question_hi": "'नदी' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["नदी", "सरोवर", "तल", "जल"],
        "options_hi": ["नदी", "सरोवर", "तल", "जल"],
        "answer_en": "नदी",
        "answer_hi": "नदी",
        "subject": "Sanskrit"
      },
      {
        "num": 72,
        "question_en": "What is the meaning of 'ज्ञान'?",
        "question_hi": "'ज्ञान' का अर्थ क्या है?",
        "options_en": ["Wisdom", "Strength", "Health", "Power"],
        "options_hi": ["बुद्धि", "शक्ति", "स्वास्थ्य", "बल"],
        "answer_en": "Wisdom",
        "answer_hi": "बुद्धि",
        "subject": "Sanskrit"
      },
      {
        "num": 73,
        "question_en": "What is the plural of 'राजा'?",
        "question_hi": "'राजा' का बहुवचन क्या है?",
        "options_en": ["राजः", "राजाः", "राजा", "राजे"],
        "options_hi": ["राज:", "राजा:", "राजा", "राजे"],
        "answer_en": "राजाः",
        "answer_hi": "राजा:",
        "subject": "Sanskrit"
      },
      {
        "num": 74,
        "question_en": "Which of these means 'Soldier' in Sanskrit?",
        "question_hi": "संस्कृत में 'सैनिक' के लिए कौन-सा शब्द है?",
        "options_en": ["योधा", "वीर", "सैनिक", "भृत्य"],
        "options_hi": ["योधा", "वीर", "सैनिक", "भृत्य"],
        "answer_en": "सैनिक",
        "answer_hi": "सैनिक",
        "subject": "Sanskrit"
      },
      {
        "num": 75,
        "question_en": "What is the opposite of 'दीन'?",
        "question_hi": "'दीन' का विलोम शब्द क्या है?",
        "options_en": ["Poor", "Rich", "Sad", "Happy"],
        "options_hi": ["गरीब", "अमीर", "दुःखी", "खुश"],
        "answer_en": "Rich",
        "answer_hi": "अमीर",
        "subject": "Sanskrit"
      },
      {
        "num": 76,
        "question_en": "What is the Sanskrit word for 'Tree'?",
        "question_hi": "'वृक्ष' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["वृक्ष", "पादप", "वन", "लता"],
        "options_hi": ["वृक्ष", "पादप", "वन", "लता"],
        "answer_en": "वृक्ष",
        "answer_hi": "वृक्ष",
        "subject": "Sanskrit"
      },
      {
        "num": 77,
        "question_en": "Which of these means 'Fire' in Sanskrit?",
        "question_hi": "संस्कृत में 'आग' के लिए कौन-सा शब्द है?",
        "options_en": ["आग्नि", "प्रकाश", "तेज", "वह्नि"],
        "options_hi": ["आग्नि", "प्रकाश", "तेज", "वह्नि"],
        "answer_en": "आग्नि",
        "answer_hi": "आग्नि",
        "subject": "Sanskrit"
      },
      {
        "num": 78,
        "question_en": "What is the meaning of 'सत्य'?",
        "question_hi": "'सत्य' का अर्थ क्या है?",
        "options_en": ["Truth", "False", "Happiness", "Victory"],
        "options_hi": ["सत्य", "झूठ", "खुशी", "विजय"],
        "answer_en": "Truth",
        "answer_hi": "सत्य",
        "subject": "Sanskrit"
      },
      {
        "num": 79,
        "question_en": "What is the plural of 'पतंग'?",
        "question_hi": "'पतंग' का बहुवचन क्या है?",
        "options_en": ["पतंगा", "पतंगाः", "पतंगों", "पतंगे"],
        "options_hi": ["पतंगा", "पतंग:", "पतंगों", "पतंगे"],
        "answer_en": "पतंगाः",
        "answer_hi": "पतंग:",
        "subject": "Sanskrit"
      },
      {
        "num": 80,
        "question_en": "What is the Sanskrit word for 'Friend'?",
        "question_hi": "'मित्र' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["मित्र", "सखा", "संगी", "बंधु"],
        "options_hi": ["मित्र", "सखा", "संगी", "बंधु"],
        "answer_en": "मित्र",
        "answer_hi": "मित्र",
        "subject": "Sanskrit"
      },
      {
        "num": 81,
        "question_en": "What is the meaning of 'कान्त'?",
        "question_hi": "'कान्त' का अर्थ क्या है?",
        "options_en": ["Loved", "Friend", "Enemy", "Teacher"],
        "options_hi": ["प्रिय", "मित्र", "दुश्मन", "शिक्षक"],
        "answer_en": "Loved",
        "answer_hi": "प्रिय",
        "subject": "Sanskrit"
      },
      {
        "num": 82,
        "question_en": "What is the opposite of 'सुख'?",
        "question_hi": "'सुख' का विलोम शब्द क्या है?",
        "options_en": ["Happiness", "Sorrow", "Peace", "Comfort"],
        "options_hi": ["सुख", "दुःख", "शांति", "आराम"],
        "answer_en": "Sorrow",
        "answer_hi": "दुःख",
        "subject": "Sanskrit"
      },
      {
        "num": 83,
        "question_en": "Which of these means 'Victory' in Sanskrit?",
        "question_hi": "संस्कृत में 'विजय' के लिए कौन-सा शब्द है?",
        "options_en": ["विजय", "सिद्धि", "जय", "सफलता"],
        "options_hi": ["विजय", "सिद्धि", "जय", "सफलता"],
        "answer_en": "विजय",
        "answer_hi": "विजय",
        "subject": "Sanskrit"
      },
      {
        "num": 84,
        "question_en": "What is the Sanskrit word for 'Night'?",
        "question_hi": "'रात्रि' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["रात्रि", "दिन", "संध्या", "प्रभात"],
        "options_hi": ["रात्रि", "दिन", "संध्या", "प्रभात"],
        "answer_en": "रात्रि",
        "answer_hi": "रात्रि",
        "subject": "Sanskrit"
      },
      {
        "num": 85,
        "question_en": "What is the meaning of 'धैर्य'?",
        "question_hi": "'धैर्य' का अर्थ क्या है?",
        "options_en": ["Courage", "Patience", "Strength", "Virtue"],
        "options_hi": ["साहस", "धैर्य", "शक्ति", "पुण्य"],
        "answer_en": "Patience",
        "answer_hi": "धैर्य",
        "subject": "Sanskrit"
      },
      {
        "num": 86,
        "question_en": "Which of these means 'Water' in Sanskrit?",
        "question_hi": "संस्कृत में 'जल' के लिए कौन-सा शब्द है?",
        "options_en": ["जल", "वह्नि", "पानी", "स्नान"],
        "options_hi": ["जल", "वह्नि", "पानी", "स्नान"],
        "answer_en": "जल",
        "answer_hi": "जल",
        "subject": "Sanskrit"
      },
      {
        "num": 87,
        "question_en": "What is the Sanskrit word for 'Bird'?",
        "question_hi": "'पक्षी' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["पक्षी", "शेर", "सिंह", "गज"],
        "options_hi": ["पक्षी", "शेर", "सिंह", "गज"],
        "answer_en": "पक्षी",
        "answer_hi": "पक्षी",
        "subject": "Sanskrit"
      },
      {
        "num": 88,
        "question_en": "What is the opposite of 'शान्ति'?",
        "question_hi": "'शान्ति' का विलोम शब्द क्या है?",
        "options_en": ["Peace", "War", "Disturbance", "Calm"],
        "options_hi": ["शांति", "युद्ध", "विघटन", "उथल-पुथल"],
        "answer_en": "War",
        "answer_hi": "युद्ध",
        "subject": "Sanskrit"
      },
      {
        "num": 89,
        "question_en": "Which of these means 'Tree' in Sanskrit?",
        "question_hi": "संस्कृत में 'वृक्ष' के लिए कौन-सा शब्द है?",
        "options_en": ["वृक्ष", "पादप", "वन", "लता"],
        "options_hi": ["वृक्ष", "पादप", "वन", "लता"],
        "answer_en": "वृक्ष",
        "answer_hi": "वृक्ष",
        "subject": "Sanskrit"
      },
      {
        "num": 90,
        "question_en": "What is the meaning of 'शक्ति'?",
        "question_hi": "'शक्ति' का अर्थ क्या है?",
        "options_en": ["Power", "Strength", "Knowledge", "Health"],
        "options_hi": ["शक्ति", "बल", "ज्ञान", "स्वास्थ्य"],
        "answer_en": "Power",
        "answer_hi": "शक्ति",
        "subject": "Sanskrit"
      },
      {
        "num": 91,
        "question_en": "What is the Sanskrit word for 'Flower'?",
        "question_hi": "'फूल' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["पुष्प", "कुसुम", "दल", "संपत्ति"],
        "options_hi": ["पुष्प", "कुसुम", "दल", "संपत्ति"],
        "answer_en": "पुष्प",
        "answer_hi": "पुष्प",
        "subject": "Sanskrit"
      },
      {
        "num": 92,
        "question_en": "What is the opposite of 'धन'?",
        "question_hi": "'धन' का विलोम शब्द क्या है?",
        "options_en": ["Wealth", "Poverty", "Power", "Happiness"],
        "options_hi": ["धन", "दीन", "शक्ति", "सुख"],
        "answer_en": "Poverty",
        "answer_hi": "दीन",
        "subject": "Sanskrit"
      },
      {
        "num": 93,
        "question_en": "Which of these means 'King' in Sanskrit?",
        "question_hi": "संस्कृत में 'राजा' के लिए कौन-सा शब्द है?",
        "options_en": ["राजा", "महाराज", "धर्मराज", "सैनिक"],
        "options_hi": ["राजा", "महाराज", "धर्मराज", "सैनिक"],
        "answer_en": "राजा",
        "answer_hi": "राजा",
        "subject": "Sanskrit"
      },
      {
        "num": 94,
        "question_en": "What is the meaning of 'दया'?",
        "question_hi": "'दया' का अर्थ क्या है?",
        "options_en": ["Mercy", "Strength", "Truth", "Knowledge"],
        "options_hi": ["दया", "शक्ति", "सत्य", "ज्ञान"],
        "answer_en": "Mercy",
        "answer_hi": "दया",
        "subject": "Sanskrit"
      },
      {
        "num": 95,
        "question_en": "What is the Sanskrit word for 'Moon'?",
        "question_hi": "'चंद्रमा' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["चंद्रमा", "सूर्य", "तारा", "नक्षत्र"],
        "options_hi": ["चंद्रमा", "सूर्य", "तारा", "नक्षत्र"],
        "answer_en": "चंद्रमा",
        "answer_hi": "चंद्रमा",
        "subject": "Sanskrit"
      },
      {
        "num": 96,
        "question_en": "What is the opposite of 'नास्तिक'?",
        "question_hi": "'नास्तिक' का विलोम शब्द क्या है?",
        "options_en": ["Atheist", "Theist", "Believer", "God"],
        "options_hi": ["नास्तिक", "आस्तिक", "विश्वासी", "ईश्वर"],
        "answer_en": "Theist",
        "answer_hi": "आस्तिक",
        "subject": "Sanskrit"
      },
      {
        "num": 97,
        "question_en": "Which of these means 'Food' in Sanskrit?",
        "question_hi": "संस्कृत में 'भोजन' के लिए कौन-सा शब्द है?",
        "options_en": ["अन्न", "पानी", "भोजन", "जल"],
        "options_hi": ["अन्न", "पानी", "भोजन", "जल"],
        "answer_en": "अन्न",
        "answer_hi": "अन्न",
        "subject": "Sanskrit"
      },
      {
        "num": 98,
        "question_en": "What is the Sanskrit word for 'Knowledge'?",
        "question_hi": "'ज्ञान' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["ज्ञान", "बुद्धि", "विद्या", "साधना"],
        "options_hi": ["ज्ञान", "बुद्धि", "विद्या", "साधना"],
        "answer_en": "ज्ञान",
        "answer_hi": "ज्ञान",
        "subject": "Sanskrit"
      },
      {
        "num": 99,
        "question_en": "What is the opposite of 'अंधकार'?",
        "question_hi": "'अंधकार' का विलोम शब्द क्या है?",
        "options_en": ["Darkness", "Light", "Night", "Shadow"],
        "options_hi": ["अंधकार", "प्रकाश", "रात्रि", "छाया"],
        "answer_en": "Light",
        "answer_hi": "प्रकाश",
        "subject": "Sanskrit"
      },
      {
        "num": 100,
        "question_en": "What is the Sanskrit word for 'Victory'?",
        "question_hi": "'विजय' के लिए संस्कृत शब्द क्या है?",
        "options_en": ["विजय", "सिद्धि", "जय", "सफलता"],
        "options_hi": ["विजय", "सिद्धि", "जय", "सफलता"],
        "answer_en": "विजय",
        "answer_hi": "विजय",
        "subject": "Sanskrit"
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