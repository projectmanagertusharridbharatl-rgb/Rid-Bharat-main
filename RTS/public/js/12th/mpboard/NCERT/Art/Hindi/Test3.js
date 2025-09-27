const questions = [
 {
    num: 1,
    question_hi: "कबीर के पदों में मुख्य रूप से किसे अभिव्यक्त किया गया है?",
    question_en: "What is mainly expressed in the verses of Kabir?",
    options_hi: ["भक्ति", "प्रकृति", "संगीत", "समाज सुधार"],
    options_en: ["Devotion", "Nature", "Music", "Social reform"],
    answer_hi: "भक्ति",
    answer_en: "Devotion",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_hi: "कबीर किस प्रकार की भाषा का प्रयोग करते हैं?",
    question_en: "What type of language does Kabir use?",
    options_hi: ["संस्कृत", "ब्रज", "खड़ी बोली", "साधुक्कड़ी"],
    options_en: ["Sanskrit", "Braj", "Khari Boli", "Sadhukkadi"],
    answer_hi: "साधुक्कड़ी",
    answer_en: "Sadhukkadi",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_hi: "कबीर के अनुसार सच्चा गुरु कौन होता है?",
    question_en: "According to Kabir, who is the true Guru?",
    options_hi: ["जो धन दे", "जो विद्या दे", "जो मोक्ष का मार्ग बताए", "जो राजा हो"],
    options_en: ["One who gives wealth", "One who gives knowledge", "One who shows the path to salvation", "One who is a king"],
    answer_hi: "जो मोक्ष का मार्ग बताए",
    answer_en: "One who shows the path to salvation",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_hi: "कबीर किस धार्मिक मत से जुड़े थे?",
    question_en: "To which religious sect was Kabir associated?",
    options_hi: ["इस्लाम", "हिंदू", "निर्गुण भक्ति", "सगुण भक्ति"],
    options_en: ["Islam", "Hindu", "Nirgun Bhakti", "Saguna Bhakti"],
    answer_hi: "निर्गुण भक्ति",
    answer_en: "Nirgun Bhakti",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_hi: "कबीर ने किस माध्यम से अपनी रचनाएँ प्रस्तुत कीं?",
    question_en: "Through which medium did Kabir present his compositions?",
    options_hi: ["कहानी", "नाटक", "पद", "उपन्यास"],
    options_en: ["Story", "Drama", "Verses", "Novel"],
    answer_hi: "पद",
    answer_en: "Verses",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_hi: "कबीर के पदों में किस तत्व पर अधिक बल है?",
    question_en: "Which element is emphasized more in Kabir’s verses?",
    options_hi: ["ज्ञान", "कर्म", "भक्ति", "धन"],
    options_en: ["Knowledge", "Action", "Devotion", "Wealth"],
    answer_hi: "भक्ति",
    answer_en: "Devotion",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_hi: "कबीर के अनुसार 'राम' का क्या तात्पर्य है?",
    question_en: "According to Kabir, what does 'Ram' signify?",
    options_hi: ["अयोध्या के राम", "ईश्वर का निराकार रूप", "राजा", "मनुष्य"],
    options_en: ["Ram of Ayodhya", "Formless God", "King", "Human"],
    answer_hi: "ईश्वर का निराकार रूप",
    answer_en: "Formless God",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_hi: "कबीर किस सामाजिक बुराई के खिलाफ बोलते हैं?",
    question_en: "Against which social evil does Kabir speak?",
    options_hi: ["बेरोजगारी", "छुआछूत", "पढ़ाई", "संगीत"],
    options_en: ["Unemployment", "Untouchability", "Education", "Music"],
    answer_hi: "छुआछूत",
    answer_en: "Untouchability",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_hi: "कबीर के पदों की भाषा को क्या कहा जाता है?",
    question_en: "What is the language of Kabir's verses called?",
    options_hi: ["तद्भव", "तत्सम", "संधुक्कड़ी", "उर्दू"],
    options_en: ["Tadbhav", "Tatsam", "Sadhukkadi", "Urdu"],
    answer_hi: "संधुक्कड़ी",
    answer_en: "Sadhukkadi",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_hi: "कबीर किस विचारधारा के प्रवर्तक माने जाते हैं?",
    question_en: "Kabir is considered a proponent of which ideology?",
    options_hi: ["वर्ण व्यवस्था", "सगुण भक्ति", "निर्गुण भक्ति", "राजतंत्र"],
    options_en: ["Caste system", "Saguna devotion", "Nirguna devotion", "Monarchy"],
    answer_hi: "निर्गुण भक्ति",
    answer_en: "Nirguna devotion",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_hi: "‘बुरा जो देखन मैं चला’ पद में कबीर किस संदेश को दे रहे हैं?",
    question_en: "What message is Kabir giving in the verse ‘Bura jo dekhan main chala’?",
    options_hi: ["दूसरों को दोष देना", "आत्मचिंतन करना", "भ्रष्टाचार", "क्रोध"],
    options_en: ["Blaming others", "Self-introspection", "Corruption", "Anger"],
    answer_hi: "आत्मचिंतन करना",
    answer_en: "Self-introspection",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_hi: "कबीर के पदों का प्रमुख लक्ष्य क्या है?",
    question_en: "What is the primary goal of Kabir’s verses?",
    options_hi: ["मनोरंजन", "प्रशंसा", "आध्यात्मिक ज्ञान", "धार्मिक विवाद"],
    options_en: ["Entertainment", "Praise", "Spiritual knowledge", "Religious debate"],
    answer_hi: "आध्यात्मिक ज्ञान",
    answer_en: "Spiritual knowledge",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_hi: "कबीर किसे सच्चा संत मानते हैं?",
    question_en: "Whom does Kabir consider a true saint?",
    options_hi: ["जो मंदिर जाए", "जो समाज सेवा करे", "जो प्रभु भक्ति में लीन हो", "जो उपदेश दे"],
    options_en: ["One who goes to temple", "One who serves society", "One immersed in God’s devotion", "One who preaches"],
    answer_hi: "जो प्रभु भक्ति में लीन हो",
    answer_en: "One immersed in God’s devotion",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_hi: "कबीर की रचनाओं का संग्रह किस नाम से प्रसिद्ध है?",
    question_en: "What is the collection of Kabir's works known as?",
    options_hi: ["साखी", "कबीर ग्रंथावली", "रामचरितमानस", "भक्तमाल"],
    options_en: ["Sakhi", "Kabir Granthavali", "Ramcharitmanas", "Bhaktamal"],
    answer_hi: "कबीर ग्रंथावली",
    answer_en: "Kabir Granthavali",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_hi: "‘पोथी पढ़-पढ़ जग मुआ’ पद में कबीर क्या कहना चाहते हैं?",
    question_en: "What does Kabir want to convey in the verse ‘Pothi padh-padh jag mua’?",
    options_hi: ["विद्या सर्वोत्तम है", "किताबें पढ़ना व्यर्थ है", "ज्ञान अनुभव से आता है", "सभी ज्ञानी होते हैं"],
    options_en: ["Education is supreme", "Reading books is useless", "Knowledge comes through experience", "All are knowledgeable"],
    answer_hi: "ज्ञान अनुभव से आता है",
    answer_en: "Knowledge comes through experience",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_hi: "कबीर किस प्रकार के ईश्वर में विश्वास करते हैं?",
    question_en: "What kind of God does Kabir believe in?",
    options_hi: ["साकार", "निराकार", "अवतारी", "राजसी"],
    options_en: ["With form", "Formless", "Incarnated", "Royal"],
    answer_hi: "निराकार",
    answer_en: "Formless",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_hi: "कबीर किसे सबसे बड़ा पाप मानते हैं?",
    question_en: "What does Kabir consider the greatest sin?",
    options_hi: ["धोखा देना", "लोभ", "अहंकार", "ईश्वर को न मानना"],
    options_en: ["Deceiving", "Greed", "Ego", "Not believing in God"],
    answer_hi: "अहंकार",
    answer_en: "Ego",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_hi: "कबीर किस रूप में उपदेश देते हैं?",
    question_en: "In what form does Kabir give his teachings?",
    options_hi: ["कविता", "निबंध", "श्लोक", "पद्य"],
    options_en: ["Poetry", "Essay", "Shloka", "Verse"],
    answer_hi: "पद्य",
    answer_en: "Verse",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_hi: "कबीर के अनुसार ज्ञान कहाँ से प्राप्त होता है?",
    question_en: "According to Kabir, where does knowledge come from?",
    options_hi: ["पुस्तक से", "अनुभव से", "मंदिर से", "गुरु से"],
    options_en: ["From books", "From experience", "From temple", "From guru"],
    answer_hi: "गुरु से",
    answer_en: "From guru",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_hi: "कबीर ने किस माध्यम से समाज सुधार का प्रयास किया?",
    question_en: "Through which medium did Kabir try to reform society?",
    options_hi: ["राजनीति", "संगीत", "कविता", "युद्ध"],
    options_en: ["Politics", "Music", "Poetry", "War"],
    answer_hi: "कविता",
    answer_en: "Poetry",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_hi: "कबीर किसके प्रति विशेष आकर्षण दिखाते हैं?",
    question_en: "Kabir shows special attraction towards whom?",
    options_hi: ["राजा", "प्रकृति", "गुरु", "धन"],
    options_en: ["King", "Nature", "Guru", "Wealth"],
    answer_hi: "गुरु",
    answer_en: "Guru",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_hi: "‘ज्योति से ज्योति जलाई’ पद का क्या तात्पर्य है?",
    question_en: "What is the meaning of the verse ‘Jyoti se jyoti jalai’?",
    options_hi: ["दीपक जलाना", "ज्ञान का प्रसार", "आग फैलाना", "शांति फैलाना"],
    options_en: ["Lighting a lamp", "Spreading knowledge", "Spreading fire", "Spreading peace"],
    answer_hi: "ज्ञान का प्रसार",
    answer_en: "Spreading knowledge",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_hi: "कबीर ने जीवन को किस रूप में देखा है?",
    question_en: "How does Kabir view life?",
    options_hi: ["खेल", "त्याग", "भ्रम", "साधना"],
    options_en: ["Game", "Renunciation", "Illusion", "Spiritual practice"],
    answer_hi: "साधना",
    answer_en: "Spiritual practice",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_hi: "कबीर किसे जीवन का लक्ष्य मानते हैं?",
    question_en: "What does Kabir consider the aim of life?",
    options_hi: ["धन अर्जन", "प्रसिद्धि", "मोक्ष प्राप्ति", "परिवार पालन"],
    options_en: ["Wealth acquisition", "Fame", "Attaining salvation", "Raising family"],
    answer_hi: "मोक्ष प्राप्ति",
    answer_en: "Attaining salvation",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_hi: "कबीर के पदों में कौन-सा भाव प्रमुख है?",
    question_en: "Which emotion is predominant in Kabir's verses?",
    options_hi: ["क्रोध", "भक्ति", "घृणा", "शंका"],
    options_en: ["Anger", "Devotion", "Hatred", "Doubt"],
    answer_hi: "भक्ति",
    answer_en: "Devotion",
    attempted: false,
    selected: ""
  },
  {
  num: 26,
  question_hi: "कबीर के अनुसार सच्चा साधु कौन होता है?",
  question_en: "According to Kabir, who is a true saint?",
  options_hi: ["जो माला जपता है", "जो दान करता है", "जो सत्य को जानता है", "जो मंदिर जाता है"],
  options_en: ["One who chants the rosary", "One who donates", "One who knows the truth", "One who goes to temple"],
  answer_hi: "जो सत्य को जानता है",
  answer_en: "One who knows the truth",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_hi: "कबीर के पदों में किस प्रकार की भाषा का प्रयोग हुआ है?",
  question_en: "What kind of language is used in Kabir's verses?",
  options_hi: ["संस्कृत", "ब्रज", "साधुक्कड़ी", "अवधी"],
  options_en: ["Sanskrit", "Braj", "Sadhukkadi", "Awadhi"],
  answer_hi: "साधुक्कड़ी",
  answer_en: "Sadhukkadi",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_hi: "कबीर किस प्रकार के कर्मकांड का विरोध करते हैं?",
  question_en: "What kind of rituals does Kabir oppose?",
  options_hi: ["नवविवाह", "प्राकृतिक पूजा", "अंधविश्वासपूर्ण", "सामाजिक"],
  options_en: ["Marriage", "Nature worship", "Superstitious", "Social"],
  answer_hi: "अंधविश्वासपूर्ण",
  answer_en: "Superstitious",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_hi: "कबीर के पदों का मुख्य उद्देश्य क्या है?",
  question_en: "What is the main purpose of Kabir's verses?",
  options_hi: ["मनोरंजन", "धन प्राप्ति", "आध्यात्मिक जागरण", "प्रसिद्धि प्राप्त करना"],
  options_en: ["Entertainment", "Gaining wealth", "Spiritual awakening", "Gaining fame"],
  answer_hi: "आध्यात्मिक जागरण",
  answer_en: "Spiritual awakening",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_hi: "कबीर किस ईश्वर में विश्वास रखते थे?",
  question_en: "In which God did Kabir believe?",
  options_hi: ["साकार ईश्वर", "निर्गुण ब्रह्म", "विष्णु", "शिव"],
  options_en: ["Personal God", "Formless Brahman", "Vishnu", "Shiva"],
  answer_hi: "निर्गुण ब्रह्म",
  answer_en: "Formless Brahman",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_hi: "कबीर के अनुसार सच्चा ज्ञान किससे प्राप्त होता है?",
  question_en: "According to Kabir, how is true knowledge attained?",
  options_hi: ["पुस्तकों से", "गुरु से", "यात्रा से", "मंदिर में"],
  options_en: ["From books", "From Guru", "From travel", "In temples"],
  answer_hi: "गुरु से",
  answer_en: "From Guru",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_hi: "कबीर की रचनाओं का संकलन किस ग्रंथ में मिलता है?",
  question_en: "In which scripture are Kabir’s works compiled?",
  options_hi: ["रामचरितमानस", "सूरसागर", "बीजक", "वेद"],
  options_en: ["Ramcharitmanas", "Sursagar", "Bijak", "Vedas"],
  answer_hi: "बीजक",
  answer_en: "Bijak",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_hi: "कबीर ने किस प्रकार के सामाजिक ढकोसलों पर प्रहार किया?",
  question_en: "What kind of social pretenses did Kabir attack?",
  options_hi: ["धार्मिक और जातिगत", "राजनीतिक", "शैक्षिक", "आर्थिक"],
  options_en: ["Religious and caste-based", "Political", "Educational", "Economic"],
  answer_hi: "धार्मिक और जातिगत",
  answer_en: "Religious and caste-based",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_hi: "कबीर किस युग के कवि माने जाते हैं?",
  question_en: "Kabir is considered a poet of which era?",
  options_hi: ["रीति काल", "आधुनिक काल", "भक्तिकाल", "वीरगाथा काल"],
  options_en: ["Riti period", "Modern period", "Bhakti period", "Heroic period"],
  answer_hi: "भक्तिकाल",
  answer_en: "Bhakti period",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_hi: "कबीर के पदों में किस प्रकार की भक्ति मिलती है?",
  question_en: "What type of devotion is found in Kabir's verses?",
  options_hi: ["सगुण भक्ति", "निर्गुण भक्ति", "मिलीजुली भक्ति", "कर्मकांड भक्ति"],
  options_en: ["Saguna devotion", "Nirguna devotion", "Mixed devotion", "Ritualistic devotion"],
  answer_hi: "निर्गुण भक्ति",
  answer_en: "Nirguna devotion",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_hi: "कबीर किस जाति में जन्मे थे?",
  question_en: "In which caste was Kabir born?",
  options_hi: ["ब्राह्मण", "जुलाहा", "राजपूत", "क्षत्रिय"],
  options_en: ["Brahmin", "Weaver", "Rajput", "Kshatriya"],
  answer_hi: "जुलाहा",
  answer_en: "Weaver",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_hi: "कबीर के अनुसार मनुष्य का सबसे बड़ा शत्रु कौन है?",
  question_en: "According to Kabir, who is the biggest enemy of man?",
  options_hi: ["धन", "माया", "काम", "अहंकार"],
  options_en: ["Wealth", "Illusion", "Desire", "Ego"],
  answer_hi: "अहंकार",
  answer_en: "Ego",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_hi: "कबीर किसे गुरु मानते थे?",
  question_en: "Whom did Kabir consider as a Guru?",
  options_hi: ["रामानंद", "तुलसीदास", "मीराबाई", "कृष्ण"],
  options_en: ["Ramananda", "Tulsidas", "Meerabai", "Krishna"],
  answer_hi: "रामानंद",
  answer_en: "Ramananda",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_hi: "कबीर के पदों में किस शैली का प्रयोग होता है?",
  question_en: "Which style is used in Kabir's verses?",
  options_hi: ["सवैया", "दोहा", "छंद", "गीत"],
  options_en: ["Savaiya", "Doha", "Chhand", "Geet"],
  answer_hi: "दोहा",
  answer_en: "Doha",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_hi: "कबीर के अनुसार किससे भगवान को पाया जा सकता है?",
  question_en: "According to Kabir, how can one attain God?",
  options_hi: ["यज्ञ से", "व्रत से", "सच्चे मन से", "तीर्थ यात्रा से"],
  options_en: ["Through rituals", "By fasting", "With a true heart", "Through pilgrimage"],
  answer_hi: "सच्चे मन से",
  answer_en: "With a true heart",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_hi: "कबीर के अनुसार कौन मूर्ख है?",
  question_en: "According to Kabir, who is a fool?",
  options_hi: ["जो पढ़ता नहीं", "जो गुरु की बात नहीं मानता", "जो मंदिर नहीं जाता", "जो भोजन नहीं करता"],
  options_en: ["One who doesn’t study", "One who doesn’t obey Guru", "One who doesn’t visit temple", "One who doesn’t eat"],
  answer_hi: "जो गुरु की बात नहीं मानता",
  answer_en: "One who doesn’t obey Guru",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_hi: "कबीर ने किस भाषा में दोहे रचे?",
  question_en: "In which language did Kabir compose his couplets?",
  options_hi: ["संस्कृत", "खड़ी बोली", "साधुक्कड़ी", "फारसी"],
  options_en: ["Sanskrit", "Khadi Boli", "Sadhukkadi", "Persian"],
  answer_hi: "साधुक्कड़ी",
  answer_en: "Sadhukkadi",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_hi: "कबीर किस धर्म के थे?",
  question_en: "Which religion did Kabir follow?",
  options_hi: ["हिंदू", "मुस्लिम", "ईसाई", "किसी एक का नहीं"],
  options_en: ["Hindu", "Muslim", "Christian", "None in particular"],
  answer_hi: "किसी एक का नहीं",
  answer_en: "None in particular",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_hi: "कबीर किस प्रकार की मूर्तिपूजा का विरोध करते हैं?",
  question_en: "What kind of idol worship does Kabir oppose?",
  options_hi: ["सच्चे मन से की गई", "आडंबरपूर्ण", "घर की", "पुरानी मूर्ति की"],
  options_en: ["With true heart", "Ostentatious", "Home worship", "Old idols"],
  answer_hi: "आडंबरपूर्ण",
  answer_en: "Ostentatious",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_hi: "कबीर के दोहों में किसका वर्णन होता है?",
  question_en: "What is described in Kabir’s couplets?",
  options_hi: ["ईश्वर की महिमा", "राजा का शासन", "प्रकृति सौंदर्य", "कला कौशल"],
  options_en: ["Glory of God", "Rule of kings", "Natural beauty", "Art and craft"],
  answer_hi: "ईश्वर की महिमा",
  answer_en: "Glory of God",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_hi: "कबीर किसे खोजने की बात करते हैं?",
  question_en: "Whom does Kabir urge us to seek?",
  options_hi: ["राजा", "पंडित", "गुरु", "स्वयं के भीतर परमात्मा"],
  options_en: ["King", "Scholar", "Guru", "God within oneself"],
  answer_hi: "स्वयं के भीतर परमात्मा",
  answer_en: "God within oneself",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_hi: "कबीर के अनुसार जीवन का सत्य क्या है?",
  question_en: "According to Kabir, what is the truth of life?",
  options_hi: ["सुख", "मृत्यु", "धन", "सम्मान"],
  options_en: ["Happiness", "Death", "Wealth", "Respect"],
  answer_hi: "मृत्यु",
  answer_en: "Death",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_hi: "कबीर का लेखन किस परंपरा से जुड़ा है?",
  question_en: "Kabir's writing is associated with which tradition?",
  options_hi: ["वीरगाथा", "सगुण भक्ति", "निर्गुण भक्ति", "रीति काल"],
  options_en: ["Heroic poetry", "Saguna devotion", "Nirguna devotion", "Riti period"],
  answer_hi: "निर्गुण भक्ति",
  answer_en: "Nirguna devotion",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_hi: "कबीर किस रूप में समाज को जागरूक करते हैं?",
  question_en: "In what way does Kabir awaken society?",
  options_hi: ["कवि", "संत", "नेता", "शिक्षक"],
  options_en: ["Poet", "Saint", "Leader", "Teacher"],
  answer_hi: "संत",
  answer_en: "Saint",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_hi: "कबीर के पदों में किस जीवनशैली की प्रशंसा की गई है?",
  question_en: "Which lifestyle is praised in Kabir’s verses?",
  options_hi: ["धार्मिक आडंबर", "सादगी और सच्चाई", "भौतिकता", "भ्रम"],
  options_en: ["Religious ostentation", "Simplicity and truth", "Materialism", "Illusion"],
  answer_hi: "सादगी और सच्चाई",
  answer_en: "Simplicity and truth",
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