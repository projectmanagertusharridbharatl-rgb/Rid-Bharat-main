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




let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
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
