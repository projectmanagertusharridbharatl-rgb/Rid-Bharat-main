const questions = [

  {
    "num": 1,
    "question_en": "What is the Sanskrit word for 'mother'?",
    "question_hi": "'माता' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["मातृ", "पितृ", "भ्रातृ", "स्वसृ"],
    "options_hi": ["मातृ", "पितृ", "भ्रातृ", "स्वसृ"],
    "answer_en": "मातृ",
    "answer_hi": "मातृ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which sandhi joins 'गङ्गा + उदकम्'?",
    "question_hi": "'गङ्गा + उदकम्' में कौन-सी सन्धि होती है?",
    "options_en": ["सवर्ण दीर्घ", "गुण", "वृद्धि", "यण"],
    "options_hi": ["सवर्ण दीर्घ", "गुण", "वृद्धि", "यण"],
    "answer_en": "सवर्ण दीर्घ",
    "answer_hi": "सवर्ण दीर्घ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the feminine form of 'गुरु'?",
    "question_hi": "'गुरु' का स्त्रीलिंग रूप क्या है?",
    "options_en": ["गुर्वी", "गुरुणी", "गुरुपत्नी", "आचार्या"],
    "options_hi": ["गुर्वी", "गुरुणी", "गुरुपत्नी", "आचार्या"],
    "answer_en": "गुर्वी",
    "answer_hi": "गुर्वी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which chapter in Class 10 NCERT discusses 'अपठित-अवबोधनम्'?",
    "question_hi": "कक्षा 10 NCERT में कौन-सा अध्याय 'अपठित-अवबोधनम्' पर चर्चा करता है?",
    "options_en": ["Chapter 1", "Chapter 5", "Chapter 8", "Chapter 10"],
    "options_hi": ["अध्याय 1", "अध्याय 5", "अध्याय 8", "अध्याय 10"],
    "answer_en": "Chapter 8",
    "answer_hi": "अध्याय 8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the meaning of 'विद्याधनं सर्वधनप्रधानम्'?",
    "question_hi": "'विद्याधनं सर्वधनप्रधानम्' का अर्थ क्या है?",
    "options_en": ["Knowledge is supreme wealth", "Money is power", "Health is wealth", "God is great"],
    "options_hi": ["ज्ञान सर्वश्रेष्ठ धन है", "धन ही शक्ति है", "स्वास्थ्य ही धन है", "ईश्वर महान है"],
    "answer_en": "Knowledge is supreme wealth",
    "answer_hi": "ज्ञान सर्वश्रेष्ठ धन है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of these is a 'तिङन्त' (finite verb)?",
    "question_hi": "इनमें से कौन 'तिङन्त' (फाइनाइट क्रिया) है?",
    "options_en": ["पठति", "पठन्", "पठितुम्", "पाठकः"],
    "options_hi": ["पठति", "पठन्", "पठितुम्", "पाठकः"],
    "answer_en": "पठति",
    "answer_hi": "पठति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the Sanskrit word for 'sun'?",
    "question_hi": "'सूर्य' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["सूर्यः", "आदित्यः", "रविः", "All of these"],
    "options_hi": ["सूर्यः", "आदित्यः", "रविः", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which vibhakti is used in 'वनात्'?",
    "question_hi": "'वनात्' में कौन-सी विभक्ति प्रयुक्त हुई है?",
    "options_en": ["पञ्चमी", "षष्ठी", "तृतीया", "चतुर्थी"],
    "options_hi": ["पञ्चमी", "षष्ठी", "तृतीया", "चतुर्थी"],
    "answer_en": "पञ्चमी",
    "answer_hi": "पञ्चमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the plural form of 'नदी' (river)?",
    "question_hi": "'नदी' (नदी) का बहुवचन रूप क्या है?",
    "options_en": ["नद्यः", "नदीषु", "नदीनाम्", "नदीभिः"],
    "options_hi": ["नद्यः", "नदीषु", "नदीनाम्", "नदीभिः"],
    "answer_en": "नद्यः",
    "answer_hi": "नद्यः",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which chapter discusses 'वैश्विकं बन्धुत्वम्' in NCERT?",
    "question_hi": "NCERT में कौन-सा अध्याय 'वैश्विकं बन्धुत्वम्' पर चर्चा करता है?",
    "options_en": ["Chapter 3", "Chapter 6", "Chapter 9", "Chapter 12"],
    "options_hi": ["अध्याय 3", "अध्याय 6", "अध्याय 9", "अध्याय 12"],
    "answer_en": "Chapter 6",
    "answer_hi": "अध्याय 6",
    "attempted": false,
    "selected": ""
  },


  {
    "num": 11,
    "question_en": "What is the meaning of 'योगः कर्मसु कौशलम्'?",
    "question_hi": "'योगः कर्मसु कौशलम्' का अर्थ क्या है?",
    "options_en": ["Yoga is skill in action", "Work is worship", "Knowledge is power", "Unity is strength"],
    "options_hi": ["कर्म में कुशलता ही योग है", "कर्म ही पूजा है", "ज्ञान ही शक्ति है", "एकता में बल है"],
    "answer_en": "Yoga is skill in action",
    "answer_hi": "कर्म में कुशलता ही योग है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which of these is an 'अव्यय' (indeclinable)?",
    "question_hi": "इनमें से कौन 'अव्यय' (अव्यय) है?",
    "options_en": ["इव", "पुस्तकम्", "फलानि", "गच्छति"],
    "options_hi": ["इव", "पुस्तकम्", "फलानि", "गच्छति"],
    "answer_en": "इव",
    "answer_hi": "इव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the Sanskrit word for 'peace'?",
    "question_hi": "'शांति' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["शान्तिः", "प्रशान्तिः", "सान्त्वनम्", "All of these"],
    "options_hi": ["शान्तिः", "प्रशान्तिः", "सान्त्वनम्", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which sandhi is in 'तत् + एव = तदेव'?",
    "question_hi": "'तत् + एव = तदेव' में कौन-सी सन्धि है?",
    "options_en": ["व्यंजन सन्धि", "स्वर सन्धि", "विसर्ग सन्धि", "None"],
    "options_hi": ["व्यंजन सन्धि", "स्वर सन्धि", "विसर्ग सन्धि", "कोई नहीं"],
    "answer_en": "व्यंजन सन्धि",
    "answer_hi": "व्यंजन सन्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the meaning of 'अहं भारतदेशस्य नागरिकः अस्मि'?",
    "question_hi": "'अहं भारतदेशस्य नागरिकः अस्मि' का अर्थ क्या है?",
    "options_en": ["I am a citizen of India", "I love India", "India is great", "I live in India"],
    "options_hi": ["मैं भारत का नागरिक हूँ", "मुझे भारत से प्यार है", "भारत महान है", "मैं भारत में रहता हूँ"],
    "answer_en": "I am a citizen of India",
    "answer_hi": "मैं भारत का नागरिक हूँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which chapter discusses 'संस्कृतसाहित्ये महिलाः' in NCERT?",
    "question_hi": "NCERT में कौन-सा अध्याय 'संस्कृतसाहित्ये महिलाः' पर चर्चा करता है?",
    "options_en": ["Chapter 4", "Chapter 7", "Chapter 11", "Chapter 14"],
    "options_hi": ["अध्याय 4", "अध्याय 7", "अध्याय 11", "अध्याय 14"],
    "answer_en": "Chapter 7",
    "answer_hi": "अध्याय 7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the Sanskrit word for 'computer'?",
    "question_hi": "'कंप्यूटर' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["संगणकः", "अभिकलकः", "Both", "Neither"],
    "options_hi": ["संगणकः", "अभिकलकः", "दोनों", "कोई नहीं"],
    "answer_en": "Both",
    "answer_hi": "दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which of these is a 'कर्मधारय समास'?",
    "question_hi": "इनमें से कौन 'कर्मधारय समास' है?",
    "options_en": ["नीलकमलम्", "राजपुरुषः", "पञ्चवटी", "None"],
    "options_hi": ["नीलकमलम्", "राजपुरुषः", "पञ्चवटी", "कोई नहीं"],
    "answer_en": "नीलकमलम्",
    "answer_hi": "नीलकमलम्",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the meaning of 'विद्यां ददाति विनयम्'?",
    "question_hi": "'विद्यां ददाति विनयम्' का अर्थ क्या है?",
    "options_en": ["Knowledge gives humility", "Education is power", "Learn with discipline", "Wisdom is eternal"],
    "options_hi": ["ज्ञान विनय देता है", "शिक्षा शक्ति है", "अनुशासन से सीखो", "ज्ञान शाश्वत है"],
    "answer_en": "Knowledge gives humility",
    "answer_hi": "ज्ञान विनय देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which vibhakti is used in 'ग्रामाय'?",
    "question_hi": "'ग्रामाय' में कौन-सी विभक्ति है?",
    "options_en": ["चतुर्थी", "षष्ठी", "सप्तमी", "तृतीया"],
    "options_hi": ["चतुर्थी", "षष्ठी", "सप्तमी", "तृतीया"],
    "answer_en": "चतुर्थी",
    "answer_hi": "चतुर्थी",
    "attempted": false,
    "selected": ""
  },



  {
    "num": 21,
    "question_en": "What is the Sanskrit word for 'environment'?",
    "question_hi": "'पर्यावरण' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["पर्यावरणम्", "वातावरणम्", "परिसरः", "All of these"],
    "options_hi": ["पर्यावरणम्", "वातावरणम्", "परिसरः", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which chapter discusses 'भारतमहिमा' in NCERT?",
    "question_hi": "NCERT में कौन-सा अध्याय 'भारतमहिमा' पर चर्चा करता है?",
    "options_en": ["Chapter 2", "Chapter 5", "Chapter 8", "Chapter 10"],
    "options_hi": ["अध्याय 2", "अध्याय 5", "अध्याय 8", "अध्याय 10"],
    "answer_en": "Chapter 5",
    "answer_hi": "अध्याय 5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the meaning of 'धर्मो रक्षति रक्षितः'?",
    "question_hi": "'धर्मो रक्षति रक्षितः' का अर्थ क्या है?",
    "options_en": ["Dharma protects those who protect it", "Truth is God", "Help the needy", "Work is worship"],
    "options_hi": ["धर्म उसकी रक्षा करता है जो उसकी रक्षा करता है", "सत्य ही ईश्वर है", "जरूरतमंदों की मदद करो", "कर्म ही पूजा है"],
    "answer_en": "Dharma protects those who protect it",
    "answer_hi": "धर्म उसकी रक्षा करता है जो उसकी रक्षा करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which of these is a 'द्वन्द्व समास'?",
    "question_hi": "इनमें से कौन 'द्वन्द्व समास' है?",
    "options_en": ["मातापितरौ", "राजपुरुषः", "यथाशक्ति", "None"],
    "options_hi": ["मातापितरौ", "राजपुरुषः", "यथाशक्ति", "कोई नहीं"],
    "answer_en": "मातापितरौ",
    "answer_hi": "मातापितरौ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the Sanskrit word for 'teacher'?",
    "question_hi": "'शिक्षक' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["गुरुः", "आचार्यः", "अध्यापकः", "All of these"],
    "options_hi": ["गुरुः", "आचार्यः", "अध्यापकः", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which of these is the correct sandhi of 'देव + इच्छा'?",
    "question_hi": "'देव + इच्छा' की सन्धि क्या होगी?",
    "options_en": ["देवेच्छा", "देवच्छा", "देवैच्छा", "देव्यच्छा"],
    "options_hi": ["देवेच्छा", "देवच्छा", "देवैच्छा", "देव्यच्छा"],
    "answer_en": "देवेच्छा",
    "answer_hi": "देवेच्छा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the Sanskrit word for 'patience'?",
    "question_hi": "'धैर्य' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["धृतिः", "क्षमा", "सहनशीलता", "All of these"],
    "options_hi": ["धृतिः", "क्षमा", "सहनशीलता", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which chapter discusses 'विदुरनीति' in NCERT?",
    "question_hi": "NCERT में कौन-सा अध्याय 'विदुरनीति' पर चर्चा करता है?",
    "options_en": ["Chapter 6", "Chapter 9", "Chapter 12", "Chapter 15"],
    "options_hi": ["अध्याय 6", "अध्याय 9", "अध्याय 12", "अध्याय 15"],
    "answer_en": "Chapter 12",
    "answer_hi": "अध्या 12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the meaning of 'उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः'?",
    "question_hi": "'उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः' का अर्थ क्या है?",
    "options_en": ["Work succeeds through effort, not wishes", "Time is precious", "Knowledge is power", "Unity is strength"],
    "options_hi": ["कार्य परिश्रम से सिद्ध होते हैं, इच्छाओं से नहीं", "समय बहुमूल्य है", "ज्ञान ही शक्ति है", "एकता में बल है"],
    "answer_en": "Work succeeds through effort, not wishes",
    "answer_hi": "कार्य परिश्रम से सिद्ध होते हैं, इच्छाओं से नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which of these is a 'तद्धित' formation?",
    "question_hi": "इनमें से कौन 'तद्धित' रूप है?",
    "options_en": ["लौहित्यम्", "पाठकः", "गम्यम्", "All of these"],
    "options_hi": ["लौहित्यम्", "पाठकः", "गम्यम्", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },



  {
    "num": 31,
    "question_en": "What is the Sanskrit word for 'internet'?",
    "question_hi": "'इंटरनेट' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["अन्तर्जालम्", "जालम्", "विश्वजालम्", "All of these"],
    "options_hi": ["अन्तर्जालम्", "जालम्", "विश्वजालम्", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which vibhakti is used in 'फलैः'?",
    "question_hi": "'फलैः' में कौन-सी विभक्ति है?",
    "options_en": ["तृतीया", "चतुर्थी", "पञ्चमी", "षष्ठी"],
    "options_hi": ["तृतीया", "चतुर्थी", "पञ्चमी", "षष्ठी"],
    "answer_en": "तृतीया",
    "answer_hi": "तृतीया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the meaning of 'अन्नदाता सुखी भव'?",
    "question_hi": "'अन्नदाता सुखी भव' का अर्थ क्या है?",
    "options_en": ["May the food-giver be happy", "Food is life", "Share your food", "Health is wealth"],
    "options_hi": ["अन्न देने वाला सुखी हो", "अन्न ही जीवन है", "अपना भोजन बाँटो", "स्वास्थ्य ही धन है"],
    "answer_en": "May the food-giver be happy",
    "answer_hi": "अन्न देने वाला सुखी हो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which chapter discusses 'कीर्तिः ते सा भविष्यति' in NCERT?",
    "question_hi": "NCERT में कौन-सा अध्याय 'कीर्तिः ते सा भविष्यति' पर चर्चा करता है?",
    "options_en": ["Chapter 7", "Chapter 10", "Chapter 13", "Chapter 16"],
    "options_hi": ["अध्याय 7", "अध्याय 10", "अध्याय 13", "अध्याय 16"],
    "answer_en": "Chapter 10",
    "answer_hi": "अध्याय 10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the Sanskrit word for 'democracy'?",
    "question_hi": "'लोकतंत्र' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["प्रजातन्त्रम्", "लोकतन्त्रम्", "गणतन्त्रम्", "All of these"],
    "options_hi": ["प्रजातन्त्रम्", "लोकतन्त्रम्", "गणतन्त्रम्", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which of these is a 'भाववाच्य' (passive voice) example?",
    "question_hi": "इनमें से कौन 'भाववाच्य' (कर्मवाच्य) का उदाहरण है?",
    "options_en": ["मया पठ्यते", "अहं पठामि", "त्वं पठसि", "सः पठति"],
    "options_hi": ["मया पठ्यते", "अहं पठामि", "त्वं पठसि", "सः पठति"],
    "answer_en": "मया पठ्यते",
    "answer_hi": "मया पठ्यते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the meaning of 'स्वस्तिप्रजाभ्यः परिपालयंताम्'?",
    "question_hi": "'स्वस्तिप्रजाभ्यः परिपालयंताम्' का अर्थ क्या है?",
    "options_en": ["May the people be protected and prosper", "God bless all", "Truth prevails", "Knowledge is light"],
    "options_hi": ["प्रजाओं का कल्याण और रक्षा हो", "ईश्वर सबका भला करे", "सत्य की जीत होती है", "ज्ञान प्रकाश है"],
    "answer_en": "May the people be protected and prosper",
    "answer_hi": "प्रजाओं का कल्याण और रक्षा हो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which sandhi is in 'हरिः + अयम् = हरिरयम्'?",
    "question_hi": "'हरिः + अयम् = हरिरयम्' में कौन-सी सन्धि है?",
    "options_en": ["विसर्ग सन्धि", "स्वर सन्धि", "व्यंजन सन्धि", "None"],
    "options_hi": ["विसर्ग सन्धि", "स्वर सन्धि", "व्यंजन सन्धि", "कोई नहीं"],
    "answer_en": "विसर्ग सन्धि",
    "answer_hi": "विसर्ग सन्धि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the Sanskrit word for 'mobile phone'?",
    "question_hi": "'मोबाइल फोन' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["चलदूरभाषः", "करयन्त्रम्", "भ्रमरः", "1 and 2"],
    "options_hi": ["चलदूरभाषः", "करयन्त्रम्", "भ्रमरः", "1 और 2"],
    "answer_en": "1 and 2",
    "answer_hi": "1 और 2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which chapter discusses 'सौरभम्' in NCERT?",
    "question_hi": "NCERT में कौन-सा अध्याय 'सौरभम्' पर चर्चा करता है?",
    "options_en": ["Chapter 8", "Chapter 11", "Chapter 14", "Chapter 17"],
    "options_hi": ["अध्याय 8", "अध्याय 11", "अध्याय 14", "अध्याय 17"],
    "answer_en": "Chapter 14",
    "answer_hi": "अध्या 14",
    "attempted": false,
    "selected": ""
  },


  {
    "num": 41,
    "question_en": "What is the meaning of 'तमसो मा ज्योतिर्गमय'?",
    "question_hi": "'तमसो मा ज्योतिर्गमय' का अर्थ क्या है?",
    "options_en": ["Lead me from darkness to light", "God is light", "Knowledge removes darkness", "Light the lamp"],
    "options_hi": ["अंधकार से प्रकाश की ओर ले चलो", "ईश्वर प्रकाश है", "ज्ञान अंधकार मिटाता है", "दीप जलाओ"],
    "answer": "Lead me from darkness to light",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which of these is a 'नपुंसकलिंग' (neuter gender) word?",
    "question_hi": "इनमें से कौन 'नपुंसकलिंग' शब्द है?",
    "options_en": ["फलम्", "विद्यालयः", "नदी", "गुरुः"],
    "options_hi": ["फलम्", "विद्यालयः", "नदी", "गुरुः"],
    "answer": "फलम्",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the Sanskrit word for 'hospital'?",
    "question_hi": "'अस्पताल' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["चिकित्सालयः", "आरोग्यभवनम्", "रुग्णालयः", "All of these"],
    "options_hi": ["चिकित्सालयः", "आरोग्यभवनम्", "रुग्णालयः", "ये सभी"],
    "answer": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which vibhakti is used in 'ग्रामस्य'?",
    "question_hi": "'ग्रामस्य' में कौन-सी विभक्ति है?",
    "options_en": ["षष्ठी", "चतुर्थी", "तृतीया", "द्वितीया"],
    "options_hi": ["षष्ठी", "चतुर्थी", "तृतीया", "द्वितीया"],
    "answer": "षष्ठी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the meaning of 'विद्यार्थी'?",
    "question_hi": "'विद्यार्थी' का अर्थ क्या है?",
    "options_en": ["Student (seeker of knowledge)", "Teacher", "Scholar", "Wise person"],
    "options_hi": ["छात्र (ज्ञान का चाहने वाला)", "शिक्षक", "विद्वान", "बुद्धिमान व्यक्ति"],
    "answer": "Student (seeker of knowledge)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which chapter discusses 'भूकम्पविभीषिका' in NCERT?",
    "question_hi": "NCERT में कौन-सा अध्याय 'भूकम्पविभीषिका' पर चर्चा करता है?",
    "options_en": ["Chapter 9", "Chapter 12", "Chapter 15", "Chapter 18"],
    "options_hi": ["अध्याय 9", "अध्याय 12", "अध्याय 15", "अध्याय 18"],
    "answer": "Chapter 15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the Sanskrit word for 'science'?",
    "question_hi": "'विज्ञान' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["विज्ञानम्", "शास्त्रम्", "वैज्ञानिकी", "All of these"],
    "options_hi": ["विज्ञानम्", "शास्त्रम्", "वैज्ञानिकी", "ये सभी"],
    "answer": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which of these is a 'कृदन्त' (verbal derivative)?",
    "question_hi": "इनमें से कौन 'कृदन्त' (कृदंत) है?",
    "options_en": ["गम्यम्", "पाठकः", "कर्तव्यम्", "All of these"],
    "options_hi": ["गम्यम्", "पाठकः", "कर्तव्यम्", "ये सभी"],
    "answer": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the meaning of 'सर्वे भवन्तु सुखिनः'?",
    "question_hi": "'सर्वे भवन्तु सुखिनः' का अर्थ क्या है?",
    "options_en": ["May all be happy", "Unity in diversity", "Peace for all", "Knowledge for all"],
    "options_hi": ["सभी सुखी हों", "विविधता में एकता", "सभी के लिए शांति", "सभी के लिए ज्ञान"],
    "answer": "May all be happy",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which chapter discusses 'मणिकर्णिका' in NCERT?",
    "question_hi": "NCERT में कौन-सा अध्याय 'मणिकर्णिका' पर चर्चा करता है?",
    "options_en": ["Chapter 10", "Chapter 13", "Chapter 16", "Chapter 19"],
    "options_hi": ["अध्याय 10", "अध्याय 13", "अध्याय 16", "अध्याय 19"],
    "answer": "Chapter 13",
    "attempted": false,
    "selected": ""
  },


  {
    "num": 41,
    "question_en": "What is the meaning of 'तमसो मा ज्योतिर्गमय'?",
    "question_hi": "'तमसो मा ज्योतिर्गमय' का अर्थ क्या है?",
    "options_en": ["Lead me from darkness to light", "God is light", "Knowledge removes darkness", "Light the lamp"],
    "options_hi": ["अंधकार से प्रकाश की ओर ले चलो", "ईश्वर प्रकाश है", "ज्ञान अंधकार मिटाता है", "दीप जलाओ"],
    "answer_en": "Lead me from darkness to light",
    "answer_hi": "अंधकार से प्रकाश की ओर ले चलो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which of these is a 'नपुंसकलिंग' (neuter gender) word?",
    "question_hi": "इनमें से कौन 'नपुंसकलिंग' शब्द है?",
    "options_en": ["फलम्", "विद्यालयः", "नदी", "गुरुः"],
    "options_hi": ["फलम्", "विद्यालयः", "नदी", "गुरुः"],
    "answer_en": "फलम्",
    "answer_hi": "फलम्",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the Sanskrit word for 'hospital'?",
    "question_hi": "'अस्पताल' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["चिकित्सालयः", "आरोग्यभवनम्", "रुग्णालयः", "All of these"],
    "options_hi": ["चिकित्सालयः", "आरोग्यभवनम्", "रुग्णालयः", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which vibhakti is used in 'ग्रामस्य'?",
    "question_hi": "'ग्रामस्य' में कौन-सी विभक्ति है?",
    "options_en": ["षष्ठी", "चतुर्थी", "तृतीया", "द्वितीया"],
    "options_hi": ["षष्ठी", "चतुर्थी", "तृतीया", "द्वितीया"],
    "answer_en": "षष्ठी",
    "answer_hi": "षष्ठी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the meaning of 'विद्यार्थी'?",
    "question_hi": "'विद्यार्थी' का अर्थ क्या है?",
    "options_en": ["Student (seeker of knowledge)", "Teacher", "Scholar", "Wise person"],
    "options_hi": ["छात्र (ज्ञान का चाहने वाला)", "शिक्षक", "विद्वान", "बुद्धिमान व्यक्ति"],
    "answer_en": "Student (seeker of knowledge)",
    "answer_hi": "छात्र (ज्ञान का चाहने वाला)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which chapter discusses 'भूकम्पविभीषिका' in NCERT?",
    "question_hi": "NCERT में कौन-सा अध्याय 'भूकम्पविभीषिका' पर चर्चा करता है?",
    "options_en": ["Chapter 9", "Chapter 12", "Chapter 15", "Chapter 18"],
    "options_hi": ["अध्या 9", "अध्या 12", "अध्या 15", "अध्या 18"],
    "answer_en": "Chapter 15",
    "answer_hi": "अध्या 15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the Sanskrit word for 'science'?",
    "question_hi": "'विज्ञान' के लिए संस्कृत शब्द क्या है?",
    "options_en": ["विज्ञानम्", "शास्त्रम्", "वैज्ञानिकी", "All of these"],
    "options_hi": ["विज्ञानम्", "शास्त्रम्", "वैज्ञानिकी", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which of these is a 'कृदन्त' (verbal derivative)?",
    "question_hi": "इनमें से कौन 'कृदन्त' (कृदंत) है?",
    "options_en": ["गम्यम्", "पाठकः", "कर्तव्यम्", "All of these"],
    "options_hi": ["गम्यम्", "पाठकः", "कर्तव्यम्", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the meaning of 'सर्वे भवन्तु सुखिनः'?",
    "question_hi": "'सर्वे भवन्तु सुखिनः' का अर्थ क्या है?",
    "options_en": ["May all be happy", "Unity in diversity", "Peace for all", "Knowledge for all"],
    "options_hi": ["सभी सुखी हों", "विविधता में एकता", "सभी के लिए शांति", "सभी के लिए ज्ञान"],
    "answer_en": "May all be happy",
    "answer_hi": "सभी सुखी हों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which chapter discusses 'मणिकर्णिका' in NCERT?",
    "question_hi": "NCERT में कौन-सा अध्याय 'मणिकर्णिका' पर चर्चा करता है?",
    "options_en": ["Chapter 10", "Chapter 13", "Chapter 16", "Chapter 19"],
    "options_hi": ["अध्या 10", "अध्या 13", "अध्या 16", "अध्या 19"],
    "answer_en": "Chapter 13",
    "answer_hi": "अध्या 13",
    "attempted": false,
    "selected": ""
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
