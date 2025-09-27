const questions = [
 {
    num: 1,
    question_hi: "कबीर के पदों में मुख्य रूप से किसे अभिव्यक्त किया गया है?",
    question_en: "What is mainly expressed in the verses of Kabir?",
    options_hi: ["भक्ति", "प्रकृति", "संगीत", "समाज सुधार"],
    options_en: ["Devotion", "Nature", "Music", "Social reform"],
    answer_hi: "भक्ति",
    answer_en: "Devotion",
    answer: "Devotion",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_hi: "कबीर किस प्रकार के संत माने जाते हैं?",
    question_en: "What type of saint is Kabir considered?",
    options_hi: ["सूफ़ी", "भक्ति आंदोलन के संत", "योगी", "तांत्रिक"],
    options_en: ["Sufi", "Bhakti movement saint", "Yogi", "Tantric"],
    answer_hi: "भक्ति आंदोलन के संत",
    answer_en: "Bhakti movement saint",
    answer: "Bhakti movement saint",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_hi: "कबीर के अनुसार सच्चा गुरु कौन होता है?",
    question_en: "According to Kabir, who is a true Guru?",
    options_hi: ["जो धन दे", "जो मोक्ष का मार्ग दिखाए", "जो मंत्र दे", "जो संगीत सिखाए"],
    options_en: ["Who gives wealth", "Who shows the path to salvation", "Who gives mantra", "Who teaches music"],
    answer_hi: "जो मोक्ष का मार्ग दिखाए",
    answer_en: "Who shows the path to salvation",
    answer: "Who shows the path to salvation",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_hi: "कबीर की भाषा किसका मिश्रण थी?",
    question_en: "Kabir's language was a mixture of which languages?",
    options_hi: ["संस्कृत और हिंदी", "फारसी और हिंदी", "खड़ीबोली और ब्रज", "अवधी, ब्रज और लोक भाषा"],
    options_en: ["Sanskrit and Hindi", "Persian and Hindi", "Khariboli and Braj", "Awadhi, Braj, and folk language"],
    answer_hi: "अवधी, ब्रज और लोक भाषा",
    answer_en: "Awadhi, Braj, and folk language",
    answer: "Awadhi, Braj, and folk language",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_hi: "कबीर के पदों में किस बात की आलोचना की गई है?",
    question_en: "What is criticized in Kabir's verses?",
    options_hi: ["भक्ति", "धार्मिक पाखंड", "संगीत", "शिक्षा"],
    options_en: ["Devotion", "Religious hypocrisy", "Music", "Education"],
    answer_hi: "धार्मिक पाखंड",
    answer_en: "Religious hypocrisy",
    answer: "Religious hypocrisy",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_hi: "कबीर का जन्म कहाँ हुआ था?",
    question_en: "Where was Kabir born?",
    options_hi: ["काशी", "दिल्ली", "लखनऊ", "इलाहाबाद"],
    options_en: ["Kashi", "Delhi", "Lucknow", "Allahabad"],
    answer_hi: "काशी",
    answer_en: "Kashi",
    answer: "Kashi",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_hi: "कबीर किस समुदाय से संबंधित थे?",
    question_en: "To which community did Kabir belong?",
    options_hi: ["जुलाहा", "ब्राह्मण", "राजपूत", "कायस्थ"],
    options_en: ["Weaver", "Brahmin", "Rajput", "Kayastha"],
    answer_hi: "जुलाहा",
    answer_en: "Weaver",
    answer: "Weaver",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_hi: "कबीर के अनुसार सच्चा धर्म कौन सा है?",
    question_en: "According to Kabir, what is the true religion?",
    options_hi: ["हिंदू धर्म", "इस्लाम", "मानवता", "बौद्ध धर्म"],
    options_en: ["Hinduism", "Islam", "Humanity", "Buddhism"],
    answer_hi: "मानवता",
    answer_en: "Humanity",
    answer: "Humanity",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_hi: "कबीर के पदों की विशेषता क्या है?",
    question_en: "What is the main feature of Kabir's verses?",
    options_hi: ["प्राकृतिक सौंदर्य", "भावनात्मकता", "सीधा और सरल भाषा", "संगीतमयता"],
    options_en: ["Natural beauty", "Emotionality", "Simple and direct language", "Musicality"],
    answer_hi: "सीधा और सरल भाषा",
    answer_en: "Simple and direct language",
    answer: "Simple and direct language",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_hi: "कबीर के अनुसार ईश्वर की प्राप्ति कैसे होती है?",
    question_en: "According to Kabir, how can one attain God?",
    options_hi: ["पूजा से", "ध्यान से", "सच्ची भक्ति और प्रेम से", "दान से"],
    options_en: ["By worship", "By meditation", "By true devotion and love", "By charity"],
    answer_hi: "सच्ची भक्ति और प्रेम से",
    answer_en: "By true devotion and love",
    answer: "By true devotion and love",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_hi: "कबीर के अनुसार सबसे बड़ा धर्म कौन सा है?",
    question_en: "According to Kabir, what is the greatest religion?",
    options_hi: ["करुणा", "परोपकार", "प्रेम", "भक्ति"],
    options_en: ["Compassion", "Charity", "Love", "Devotion"],
    answer_hi: "प्रेम",
    answer_en: "Love",
    answer: "Love",
    attempted: false,
    selected: ""
  },
  {
  num: 12,
  question_hi: "कबीर के समय की प्रमुख सामाजिक बुराई क्या थी?",
  question_en: "What was the major social evil during Kabir's time?",
  options_hi: ["भ्रष्टाचार", "छुआछूत", "नारी शिक्षा का अभाव", "भिक्षावृत्ति"],
  options_en: ["Corruption", "Untouchability", "Lack of women's education", "Begging"],
  answer_hi: "छुआछूत",
  answer_en: "Untouchability",
  answer: "Untouchability",
  attempted: false,
  selected: ""
},
  {
    num: 13,
    question_hi: "कबीर की कौन सी रचना सामाजिक एकता का संदेश देती है?",
    question_en: "Which work of Kabir conveys the message of social unity?",
    options_hi: ["साखी", "बीजक", "रामायण", "महाभारत"],
    options_en: ["Sakhi", "Bijak", "Ramayana", "Mahabharata"],
    answer_hi: "बीजक",
    answer_en: "Bijak",
    answer: "Bijak",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_hi: "कबीर ने किसके विरुद्ध अपने भजनों में आवाज़ उठाई?",
    question_en: "Against whom did Kabir raise his voice in his hymns?",
    options_hi: ["पंडितों और मौलवियों", "राजाओं", "सामाजिक विद्वानों", "व्यापारियों"],
    options_en: ["Pandits and Maulvis", "Kings", "Social Scholars", "Traders"],
    answer_hi: "पंडितों और मौलवियों",
    answer_en: "Pandits and Maulvis",
    answer: "Pandits and Maulvis",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_hi: "कबीर का भक्ति आंदोलन किस धर्म पर आधारित था?",
    question_en: "Kabir's Bhakti movement was based on which religion?",
    options_hi: ["हिंदू धर्म", "इस्लाम", "सिख धर्म", "बौद्ध धर्म"],
    options_en: ["Hinduism", "Islam", "Sikhism", "Buddhism"],
    answer_hi: "हिंदू धर्म और इस्लाम दोनों का समावेश",
    answer_en: "Inclusion of both Hinduism and Islam",
    answer: "Inclusion of both Hinduism and Islam",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_hi: "कबीर की भाषा किस क्षेत्र की थी?",
    question_en: "Kabir's language belonged to which region?",
    options_hi: ["अवध", "बरेली", "उत्तर प्रदेश", "मध्य प्रदेश"],
    options_en: ["Awadh", "Bareilly", "Uttar Pradesh", "Madhya Pradesh"],
    answer_hi: "बरेली",
    answer_en: "Bareilly",
    answer: "Bareilly",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_hi: "कबीर की शिक्षाओं का मुख्य उद्देश्य क्या था?",
    question_en: "What was the main purpose of Kabir’s teachings?",
    options_hi: ["धर्म में भेदभाव खत्म करना", "राजनीति सुधारना", "व्यापार बढ़ाना", "शिक्षा फैलाना"],
    options_en: ["End religious discrimination", "Improve politics", "Increase trade", "Spread education"],
    answer_hi: "धर्म में भेदभाव खत्म करना",
    answer_en: "End religious discrimination",
    answer: "End religious discrimination",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_hi: "कबीर के भजनों में किसकी आलोचना सबसे अधिक की गई?",
    question_en: "Whose criticism is most prominent in Kabir’s hymns?",
    options_hi: ["धर्मगुरुओं की", "राजाओं की", "सैनिकों की", "शिक्षकों की"],
    options_en: ["Religious priests", "Kings", "Soldiers", "Teachers"],
    answer_hi: "धर्मगुरुओं की",
    answer_en: "Religious priests",
    answer: "Religious priests",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_hi: "कबीर के अनुसार सच्चा धर्म क्या है?",
    question_en: "According to Kabir, what is true religion?",
    options_hi: ["भक्ति और सेवा", "धन-संपदा", "शास्त्रों का पालन", "उच्च शिक्षा"],
    options_en: ["Devotion and service", "Wealth", "Following scriptures", "Higher education"],
    answer_hi: "भक्ति और सेवा",
    answer_en: "Devotion and service",
    answer: "Devotion and service",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_hi: "कबीर ने किस आधार पर धर्म को स्वीकार या अस्वीकार किया?",
    question_en: "On what basis did Kabir accept or reject religion?",
    options_hi: ["आत्मा की शुद्धि", "जाति", "वर्ण", "धर्मशास्त्र"],
    options_en: ["Purity of soul", "Caste", "Varna", "Religious texts"],
    answer_hi: "आत्मा की शुद्धि",
    answer_en: "Purity of soul",
    answer: "Purity of soul",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_hi: "कबीर के भजनों में 'माया' का क्या अर्थ है?",
    question_en: "What does 'Maya' mean in Kabir's hymns?",
    options_hi: ["भ्रम", "धन", "शक्ति", "प्यार"],
    options_en: ["Illusion", "Wealth", "Power", "Love"],
    answer_hi: "भ्रम",
    answer_en: "Illusion",
    answer: "Illusion",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_hi: "कबीर की कौन सी कृति 'बीजक' कहलाती है?",
    question_en: "Which of Kabir’s works is called 'Bijak'?",
    options_hi: ["साखी संग्रह", "गीतावली", "रामचरितमानस", "महाभारत"],
    options_en: ["Collection of Sakhi", "Gitavali", "Ramcharitmanas", "Mahabharata"],
    answer_hi: "साखी संग्रह",
    answer_en: "Collection of Sakhi",
    answer: "Collection of Sakhi",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_hi: "कबीर का जीवनकाल किस सदी में था?",
    question_en: "In which century did Kabir live?",
    options_hi: ["15वीं सदी", "16वीं सदी", "14वीं सदी", "17वीं सदी"],
    options_en: ["15th century", "16th century", "14th century", "17th century"],
    answer_hi: "15वीं सदी",
    answer_en: "15th century",
    answer: "15th century",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_hi: "कबीर ने भक्ति और सूफ़ी धर्म की समानता किस प्रकार दर्शाई?",
    question_en: "How did Kabir portray the similarity between Bhakti and Sufi traditions?",
    options_hi: ["एकेश्वरवाद", "बहुवाद", "अनेकार्थकता", "विवेकवाद"],
    options_en: ["Monotheism", "Polytheism", "Ambiguity", "Rationalism"],
    answer_hi: "एकेश्वरवाद",
    answer_en: "Monotheism",
    answer: "Monotheism",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_hi: "कबीर के अनुसार मानव जीवन का मुख्य उद्देश्य क्या है?",
    question_en: "According to Kabir, what is the main purpose of human life?",
    options_hi: ["ईश्वर की भक्ति", "धन संचय", "सामाजिक प्रतिष्ठा", "राजनीति"],
    options_en: ["Devotion to God", "Accumulation of wealth", "Social status", "Politics"],
    answer_hi: "ईश्वर की भक्ति",
    answer_en: "Devotion to God",
    answer: "Devotion to God",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_hi: "कबीर की शिक्षाएं किस भाषा में लिखी गईं थीं?",
    question_en: "In which language were Kabir's teachings written?",
    options_hi: ["मगही", "हिंदी", "पंजाबी", "बंगाली"],
    options_en: ["Magahi", "Hindi", "Punjabi", "Bengali"],
    answer_hi: "हिंदी",
    answer_en: "Hindi",
    answer: "Hindi",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_hi: "कबीर ने किन दो धर्मों को एकसाथ जोड़ा?",
    question_en: "Which two religions did Kabir unite?",
    options_hi: ["हिंदू और इस्लाम", "सिख और बौद्ध", "जैन और इस्लाम", "हिंदू और जैन"],
    options_en: ["Hinduism and Islam", "Sikhism and Buddhism", "Jainism and Islam", "Hinduism and Jainism"],
    answer_hi: "हिंदू और इस्लाम",
    answer_en: "Hinduism and Islam",
    answer: "Hinduism and Islam",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_hi: "कबीर के अनुसार सच्चा संत कौन होता है?",
    question_en: "According to Kabir, who is a true saint?",
    options_hi: ["जो नितांत भक्ति करता है", "जो समाज की सेवा करता है", "जो ज्ञान देता है", "जो दान करता है"],
    options_en: ["One who truly worships", "One who serves society", "One who imparts knowledge", "One who donates"],
    answer_hi: "जो समाज की सेवा करता है",
    answer_en: "One who serves society",
    answer: "One who serves society",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_hi: "कबीर ने कौन सी सामाजिक प्रथा की कड़ी निंदा की?",
    question_en: "Which social practice did Kabir strongly criticize?",
    options_hi: ["जाति प्रथा", "शिक्षा का अभाव", "महिलाओं का उत्पीड़न", "दहेज प्रथा"],
    options_en: ["Caste system", "Lack of education", "Oppression of women", "Dowry system"],
    answer_hi: "जाति प्रथा",
    answer_en: "Caste system",
    answer: "Caste system",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_hi: "कबीर के भजनों में किस तत्व को प्रमुखता दी गई है?",
    question_en: "Which element is emphasized in Kabir’s hymns?",
    options_hi: ["साधना", "ध्यान", "भक्ति", "विज्ञान"],
    options_en: ["Practice", "Meditation", "Devotion", "Science"],
    answer_hi: "भक्ति",
    answer_en: "Devotion",
    answer: "Devotion",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_hi: "कबीर ने भक्ति को किस प्रकार समझाया?",
    question_en: "How did Kabir explain devotion (Bhakti)?",
    options_hi: ["आत्मिक अनुभव", "पैसा देना", "पूजा करना", "त्याग करना"],
    options_en: ["Inner experience", "Giving money", "Worship rituals", "Sacrifice"],
    answer_hi: "आत्मिक अनुभव",
    answer_en: "Inner experience",
    answer: "Inner experience",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_hi: "कबीर ने किसका विरोध किया जो दिखावा करते थे?",
    question_en: "Whom did Kabir oppose who were hypocritical?",
    options_hi: ["पंडितों", "राजाओं", "सैनिकों", "व्यापारियों"],
    options_en: ["Pandits", "Kings", "Soldiers", "Merchants"],
    answer_hi: "पंडितों",
    answer_en: "Pandits",
    answer: "Pandits",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_hi: "कबीर की कौन सी विशेषता उनकी शिक्षाओं में प्रमुख है?",
    question_en: "What is a prominent feature of Kabir’s teachings?",
    options_hi: ["सरल भाषा", "शास्त्रीय भाषा", "संस्कृत", "फारसी"],
    options_en: ["Simple language", "Classical language", "Sanskrit", "Persian"],
    answer_hi: "सरल भाषा",
    answer_en: "Simple language",
    answer: "Simple language",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_hi: "कबीर के भजनों में किस तत्व का समावेश है?",
    question_en: "What element is included in Kabir's hymns?",
    options_hi: ["सामाजिक सुधार", "राजनीति", "विज्ञान", "व्यापार"],
    options_en: ["Social reform", "Politics", "Science", "Trade"],
    answer_hi: "सामाजिक सुधार",
    answer_en: "Social reform",
    answer: "Social reform",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_hi: "कबीर की शिक्षाओं में किसका महत्व नहीं था?",
    question_en: "What was not important in Kabir's teachings?",
    options_hi: ["जाति व्यवस्था", "ईश्वर की भक्ति", "सत्य", "समानता"],
    options_en: ["Caste system", "Devotion to God", "Truth", "Equality"],
    answer_hi: "जाति व्यवस्था",
    answer_en: "Caste system",
    answer: "Caste system",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_hi: "कबीर का कौन सा ग्रंथ उनके विचारों का संग्रह है?",
    question_en: "Which book is a collection of Kabir's thoughts?",
    options_hi: ["बीजक", "गीता", "रामचरितमानस", "भागवत"],
    options_en: ["Bijak", "Gita", "Ramcharitmanas", "Bhagavat"],
    answer_hi: "बीजक",
    answer_en: "Bijak",
    answer: "Bijak",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_hi: "कबीर की भक्ति किस पर आधारित थी?",
    question_en: "Kabir's devotion was based on what?",
    options_hi: ["ईश्वर की एकता", "अनेकों देवता", "धार्मिक अनुष्ठान", "पुण्य कर्म"],
    options_en: ["Unity of God", "Many gods", "Religious rituals", "Good deeds"],
    answer_hi: "ईश्वर की एकता",
    answer_en: "Unity of God",
    answer: "Unity of God",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_hi: "कबीर ने किस जाति व्यवस्था का विरोध किया?",
    question_en: "Which caste system did Kabir oppose?",
    options_hi: ["ब्राह्मणवाद", "क्षत्रियवाद", "वैश्यवाद", "शूद्रवाद"],
    options_en: ["Brahminism", "Kshatriyavada", "Vaishnavism", "Shudravada"],
    answer_hi: "ब्राह्मणवाद",
    answer_en: "Brahminism",
    answer: "Brahminism",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_hi: "कबीर के अनुसार 'सच्चा भक्त' कौन होता है?",
    question_en: "According to Kabir, who is a 'true devotee'?",
    options_hi: ["जो सभी के प्रति दयालु हो", "जो मंदिर जाता हो", "जो रोज पूजा करता हो", "जो ऋतुओं का पालन करता हो"],
    options_en: ["One who is kind to all", "One who goes to temple", "One who prays daily", "One who follows seasons"],
    answer_hi: "जो सभी के प्रति दयालु हो",
    answer_en: "One who is kind to all",
    answer: "One who is kind to all",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_hi: "कबीर के भजनों में किस विषय पर अधिक जोर दिया गया है?",
    question_en: "Which theme is emphasized more in Kabir's hymns?",
    options_hi: ["भक्ति", "धर्मशास्त्र", "राजनीति", "अर्थव्यवस्था"],
    options_en: ["Devotion", "Religious scriptures", "Politics", "Economy"],
    answer_hi: "भक्ति",
    answer_en: "Devotion",
    answer: "Devotion",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_hi: "कबीर के भजनों में 'संसार' का अर्थ क्या है?",
    question_en: "What does 'world' mean in Kabir's hymns?",
    options_hi: ["माया", "स्वर्ग", "धन", "प्रेम"],
    options_en: ["Illusion", "Heaven", "Wealth", "Love"],
    answer_hi: "माया",
    answer_en: "Illusion",
    answer: "Illusion",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_hi: "कबीर ने किस आधार पर भेदभाव को खत्म करने की बात कही?",
    question_en: "On what basis did Kabir advocate ending discrimination?",
    options_hi: ["मानवता", "धर्म", "जाति", "वर्ण"],
    options_en: ["Humanity", "Religion", "Caste", "Varna"],
    answer_hi: "मानवता",
    answer_en: "Humanity",
    answer: "Humanity",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_hi: "कबीर की कौन सी कृति उनकी शिक्षाओं का स्रोत है?",
    question_en: "Which work is a source of Kabir's teachings?",
    options_hi: ["बीजक", "रामायण", "गीता", "महाभारत"],
    options_en: ["Bijak", "Ramayana", "Gita", "Mahabharata"],
    answer_hi: "बीजक",
    answer_en: "Bijak",
    answer: "Bijak",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_hi: "कबीर के भजनों में कौन सा संदेश सबसे प्रमुख है?",
    question_en: "What is the main message in Kabir’s hymns?",
    options_hi: ["समानता और भक्ति", "धन कमाना", "राजनीति", "शिक्षा"],
    options_en: ["Equality and devotion", "Wealth accumulation", "Politics", "Education"],
    answer_hi: "समानता और भक्ति",
    answer_en: "Equality and devotion",
    answer: "Equality and devotion",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_hi: "कबीर ने किस प्रकार के सामाजिक बदलाव की वकालत की?",
    question_en: "What kind of social change did Kabir advocate?",
    options_hi: ["जाति भेद का अंत", "राजतंत्र", "व्यापार विकास", "शिक्षा प्रणाली"],
    options_en: ["End of caste discrimination", "Monarchy", "Trade development", "Education system"],
    answer_hi: "जाति भेद का अंत",
    answer_en: "End of caste discrimination",
    answer: "End of caste discrimination",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_hi: "कबीर की भक्ति में किसका महत्व है?",
    question_en: "What is important in Kabir’s devotion?",
    options_hi: ["ईश्वर का स्मरण", "पूजा विधि", "मंदिर जाना", "उपवास"],
    options_en: ["Remembrance of God", "Rituals", "Going to temple", "Fasting"],
    answer_hi: "ईश्वर का स्मरण",
    answer_en: "Remembrance of God",
    answer: "Remembrance of God",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_hi: "कबीर का भक्ति संदेश किसके लिए था?",
    question_en: "Kabir's message of devotion was for whom?",
    options_hi: ["सभी मानव", "केवल ब्राह्मण", "केवल राजा", "केवल साधु"],
    options_en: ["All humans", "Only Brahmins", "Only kings", "Only saints"],
    answer_hi: "सभी मानव",
    answer_en: "All humans",
    answer: "All humans",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_hi: "कबीर ने किस धर्म के पाखंड की निंदा की?",
    question_en: "Which religion's hypocrisy did Kabir criticize?",
    options_hi: ["हिंदू और मुस्लिम", "सिख", "ईसाई", "जैन"],
    options_en: ["Hindu and Muslim", "Sikh", "Christian", "Jain"],
    answer_hi: "हिंदू और मुस्लिम",
    answer_en: "Hindu and Muslim",
    answer: "Hindu and Muslim",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_hi: "कबीर के अनुसार जीवन का उद्देश्य क्या है?",
    question_en: "According to Kabir, what is the purpose of life?",
    options_hi: ["ईश्वर की प्राप्ति", "धन संग्रह", "परिवार निर्माण", "राजनीति"],
    options_en: ["Attaining God", "Accumulating wealth", "Building family", "Politics"],
    answer_hi: "ईश्वर की प्राप्ति",
    answer_en: "Attaining God",
    answer: "Attaining God",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_hi: "कबीर की भक्ति परंपरा में क्या महत्वपूर्ण है?",
    question_en: "What is important in Kabir's tradition of devotion?",
    options_hi: ["अहंकार त्याग", "पूजा अर्चना", "मंदिर जाना", "तिलक लगाना"],
    options_en: ["Renunciation of ego", "Worship rituals", "Going to temple", "Applying tilak"],
    answer_hi: "अहंकार त्याग",
    answer_en: "Renunciation of ego",
    answer: "Renunciation of ego",
    attempted: false,
    selected: ""
  }

        
    // Continue adding more questions up to 30
];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
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

  updateCircles();
}

function markAttempted(index, selectedAnswer) {
  questions[index].attempted = true;
  questions[index].selected = selectedAnswer;
  updateCircles();
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

function updateCircles() {
  const circleContainer = document.getElementById("circleContainer");
  circleContainer.innerHTML = "";
  const start = currentCirclePage * circlesPerPage;
  const end = Math.min(start + circlesPerPage, questions.length);

  for (let i = start; i < end; i++) {
    const q = questions[i];
    let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
    circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
  }
}

function jumpToQuestion(index) {
  currentQuestion = index;
  loadQuestion(index);
}

function prevCirclePage() {
  if (currentCirclePage > 0) {
    currentCirclePage--;
    updateCircles();
  }
}

function nextCirclePage() {
  if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
    currentCirclePage++;
    updateCircles();
  }
}

function changeLanguage() {
  language = document.getElementById("languageSelect").value;
  loadQuestion(currentQuestion);
}

function submitQuiz() {
  let confirmation = confirm("Are you sure you want to submit the test?");
  if (!confirmation) return;

  let attempted = 0, notAttempted = 0, score = 0;
  const results = [];

  questions.forEach(q => {
      const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
      if (q.attempted) {
          attempted++;
          if (q.selected === correctAnswer) score++;
      } else {
          notAttempted++;
      }
      results.push({ 
          question: language === "en" ? q.question_en : q.question_hi,
          selected: q.selected || "Not Answered", 
          correct: correctAnswer 
      });
  });

  localStorage.setItem("attempted", attempted);
  localStorage.setItem("notAttempted", notAttempted);
  localStorage.setItem("score", score);
  localStorage.setItem("results", JSON.stringify(results));

  let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
  if (viewResult) {
      window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
  }
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! Submitting the quiz automatically.");
      submitQuiz();
    } else {
      timerElement.textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

window.onload = function () {
  startTimer();
  loadQuestion(currentQuestion);
};