const questions = [
  {
    num: 1,
    question_hi: "कबीर के पदों में मुख्य रूप से किसे अभिव्यक्त किया गया है?",
    question_en: "What is mainly expressed in the verses of Kabir?",
    options_hi: ["भक्ति", "प्रकृति", "संगीत", "समाज सुधार"],
    options_en: ["Devotion", "Nature", "Music", "Social reform"],
    answer: "भक्ति",
    attempted: false,
    selected: ""
},
{
    num: 2,
    question_hi: "कबीर का दृष्टिकोण किसे लेकर स्पष्ट है?",
    question_en: "Kabir's perspective is clear on what?",
    options_hi: ["धर्म", "समाज", "राजनीति", "व्यक्ति"],
    options_en: ["Religion", "Society", "Politics", "Individual"],
    answer: "धर्म",
    attempted: false,
    selected: ""
},
{
    num: 3,
    question_hi: "कबीर के अनुसार क्या सबसे महत्वपूर्ण है?",
    question_en: "According to Kabir, what is the most important?",
    options_hi: ["सच्चाई", "धन", "समाज", "विद्या"],
    options_en: ["Truth", "Wealth", "Society", "Knowledge"],
    answer: "सच्चाई",
    attempted: false,
    selected: ""
},
{
    num: 4,
    question_hi: "कबीर के पदों में कौनसी प्रमुख विचारधारा दिखाई देती है?",
    question_en: "Which major ideology is reflected in Kabir's verses?",
    options_hi: ["एकेश्वरवाद", "बहुदेववाद", "धर्मनिरपेक्षता", "आध्यात्मिकता"],
    options_en: ["Monotheism", "Polytheism", "Secularism", "Spirituality"],
    answer: "एकेश्वरवाद",
    attempted: false,
    selected: ""
},
{
    num: 5,
    question_hi: "कबीर ने किसे 'प्यारा' और 'प्रेम' के रूप में देखा?",
    question_en: "Kabir saw whom as 'dear' and 'love'?",
    options_hi: ["ईश्वर", "व्यक्ति", "प्रकृति", "समाज"],
    options_en: ["God", "Individual", "Nature", "Society"],
    answer: "ईश्वर",
    attempted: false,
    selected: ""
},
{
    num: 6,
    question_hi: "कबीर ने किसे 'सच्चा गुरु' माना है?",
    question_en: "Kabir considered whom as the 'true guru'?",
    options_hi: ["ईश्वर", "गुरु", "स्वयं", "समाज"],
    options_en: ["God", "Teacher", "Self", "Society"],
    answer: "ईश्वर",
    attempted: false,
    selected: ""
},
{
    num: 7,
    question_hi: "कबीर के अनुसार साधना का मुख्य उद्देश्य क्या है?",
    question_en: "According to Kabir, what is the main purpose of spiritual practice?",
    options_hi: ["मुक्ति", "धन अर्जन", "समाज सुधार", "ज्ञान प्राप्ति"],
    options_en: ["Liberation", "Wealth accumulation", "Social reform", "Knowledge acquisition"],
    answer: "मुक्ति",
    attempted: false,
    selected: ""
},
{
    num: 8,
    question_hi: "कबीर के पदों में कौन सी भावनाएँ प्रकट होती हैं?",
    question_en: "What emotions are expressed in Kabir's verses?",
    options_hi: ["प्रेम और भक्ति", "क्रोध और घृणा", "दुख और कष्ट", "आलस्य और नीरसता"],
    options_en: ["Love and devotion", "Anger and hatred", "Sorrow and pain", "Laziness and dullness"],
    answer: "प्रेम और भक्ति",
    attempted: false,
    selected: ""
},
{
    num: 9,
    question_hi: "कबीर ने समाज में किस चीज़ को सबसे बड़ा माना है?",
    question_en: "What did Kabir consider the greatest thing in society?",
    options_hi: ["सच्चाई", "धन", "समानता", "धर्म"],
    options_en: ["Truth", "Wealth", "Equality", "Religion"],
    answer: "सच्चाई",
    attempted: false,
    selected: ""
},
{
    num: 10,
    question_hi: "कबीर के अनुसार व्यक्ति को किससे बचना चाहिए?",
    question_en: "According to Kabir, what should a person avoid?",
    options_hi: ["आलस्य", "द्वेष", "धन का लोभ", "सभी"],
    options_en: ["Laziness", "Enmity", "Greed for wealth", "All of the above"],
    answer: "सभी",
    attempted: false,
    selected: ""
},
{
    num: 11,
    question_hi: "कबीर के पदों में कौन सी प्रमुख चेतावनी दी गई है?",
    question_en: "What major warning is given in Kabir's verses?",
    options_hi: ["सत्य से भटकने पर परिणाम", "धन की महिमा", "कभी झूठ न बोलने की सलाह", "समाज सुधार"],
    options_en: ["Consequences of deviating from truth", "Glory of wealth", "Advice to never lie", "Social reform"],
    answer: "सत्य से भटकने पर परिणाम",
    attempted: false,
    selected: ""
},
{
    num: 12,
    question_hi: "कबीर का आदर्श जीवन कैसा होना चाहिए?",
    question_en: "What should be the ideal life according to Kabir?",
    options_hi: ["साधारण और सच्चा", "आध्यात्मिक और रहन-सहन से दूर", "धन और ऐश्वर्य से भरपूर", "कर्म और सेवा में"],
    options_en: ["Simple and true", "Spiritual and detached from worldly life", "Full of wealth and luxury", "In work and service"],
    answer: "साधारण और सच्चा",
    attempted: false,
    selected: ""
},
{
    num: 13,
    question_hi: "कबीर के अनुसार क्या सबसे बड़ी शिक्षा है?",
    question_en: "According to Kabir, what is the greatest lesson?",
    options_hi: ["सत्य बोलना", "ईश्वर का ध्यान करना", "जीवन को सरल रखना", "सभी का आदर करना"],
    options_en: ["Speaking truth", "Meditating on God", "Keeping life simple", "Respecting everyone"],
    answer: "सत्य बोलना",
    attempted: false,
    selected: ""
},
{
    num: 14,
    question_hi: "कबीर के पदों में किसकी आलोचना की जाती है?",
    question_en: "Whom does Kabir criticize in his verses?",
    options_hi: ["पाखंड", "धन कमाने वाले लोग", "धर्म गुरू", "समाज"],
    options_en: ["Hypocrisy", "People who accumulate wealth", "Religious teachers", "Society"],
    answer: "पाखंड",
    attempted: false,
    selected: ""
},
{
    num: 15,
    question_hi: "कबीर के अनुसार शांति प्राप्त करने का मार्ग क्या है?",
    question_en: "According to Kabir, what is the path to attain peace?",
    options_hi: ["आध्यात्मिक साधना", "समाज सेवा", "धन का संग्रह", "विरक्त जीवन"],
    options_en: ["Spiritual practice", "Social service", "Accumulation of wealth", "Renounced life"],
    answer: "आध्यात्मिक साधना",
    attempted: false,
    selected: ""
},
{
    num: 16,
    question_hi: "कबीर के अनुसार ईश्वर के अस्तित्व का प्रमाण क्या है?",
    question_en: "According to Kabir, what is the proof of God's existence?",
    options_hi: ["मनुष्य का आंतरिक अनुभव", "धर्म शास्त्र", "प्रकृति", "समाज"],
    options_en: ["Inner experience of a person", "Religious scriptures", "Nature", "Society"],
    answer: "मनुष्य का आंतरिक अनुभव",
    attempted: false,
    selected: ""
},
{
    num: 17,
    question_hi: "कबीर के अनुसार व्यक्ति को क्या मानना चाहिए?",
    question_en: "According to Kabir, what should a person consider?",
    options_hi: ["सच का पालन", "धन का महत्व", "आत्मसमर्पण", "परिवार का सम्मान"],
    options_en: ["Following the truth", "Importance of wealth", "Self-surrender", "Respect for family"],
    answer: "सच का पालन",
    attempted: false,
    selected: ""
},
{
    num: 18,
    question_hi: "कबीर के पदों में कौन से जीवन के कष्टों का वर्णन किया गया है?",
    question_en: "Which life hardships are described in Kabir's verses?",
    options_hi: ["गरीबी और संघर्ष", "स्वास्थ्य संबंधी समस्याएँ", "दीन-दुनिया का भ्रम", "धर्म का पालन"],
    options_en: ["Poverty and struggle", "Health issues", "Confusion between the material world", "Following religion"],
    answer: "गरीबी और संघर्ष",
    attempted: false,
    selected: ""
},
{
    num: 19,
    question_hi: "कबीर का दृष्टिकोण जीवन में किसे सर्वोत्तम मानता है?",
    question_en: "What does Kabir's perspective consider the best in life?",
    options_hi: ["सच्चाई और प्रेम", "धन और ऐश्वर्य", "धर्म और पूजा", "समाज और परिवार"],
    options_en: ["Truth and love", "Wealth and luxury", "Religion and worship", "Society and family"],
    answer: "सच्चाई और प्रेम",
    attempted: false,
    selected: ""
},
{
    num: 20,
    question_hi: "कबीर के पदों में सत्य के बारे में क्या कहा गया है?",
    question_en: "What is said about truth in Kabir's verses?",
    options_hi: ["सत्य सबसे शक्तिशाली है", "सत्य से जीवन कठिन हो जाता है", "सत्य के बिना जीवन संभव नहीं है", "सत्य का कोई महत्व नहीं है"],
    options_en: ["Truth is the most powerful", "Life becomes hard without truth", "Life is impossible without truth", "Truth has no value"],
    answer: "सत्य सबसे शक्तिशाली है",
    attempted: false,
    selected: ""
},
{
    num: 21,
    question_hi: "कबीर के अनुसार क्या सही और गलत का निर्णय करता है?",
    question_en: "According to Kabir, what decides what is right and wrong?",
    options_hi: ["सच्चाई", "समाज", "धर्म", "स्वयं का अनुभव"],
    options_en: ["Truth", "Society", "Religion", "Personal experience"],
    answer: "सच्चाई",
    attempted: false,
    selected: ""
},
{
    num: 22,
    question_hi: "कबीर के पदों में कौन सी प्राकृतिक चीज़ों का उल्लेख किया गया है?",
    question_en: "Which natural elements are mentioned in Kabir's verses?",
    options_hi: ["पानी और हवा", "पेड़ और फूल", "आकाश और पृथ्वी", "सभी"],
    options_en: ["Water and air", "Trees and flowers", "Sky and Earth", "All of the above"],
    answer: "सभी",
    attempted: false,
    selected: ""
},
{
    num: 23,
    question_hi: "कबीर के अनुसार क्या सबसे महत्वपूर्ण है?",
    question_en: "According to Kabir, what is the most important?",
    options_hi: ["धर्म", "सत्य", "शक्ति", "दया"],
    options_en: ["Religion", "Truth", "Power", "Compassion"],
    answer: "सत्य",
    attempted: false,
    selected: ""
},
{
    num: 24,
    question_hi: "कबीर के पदों में आत्मनिर्भरता की भावना किस रूप में मिलती है?",
    question_en: "In Kabir's verses, how is the sense of self-reliance portrayed?",
    options_hi: ["खुद पर विश्वास", "समाज से मुक्ति", "धन कमाना", "सत्य का पालन"],
    options_en: ["Self-belief", "Freedom from society", "Earning wealth", "Following truth"],
    answer: "खुद पर विश्वास",
    attempted: false,
    selected: ""
},
{
    num: 25,
    question_hi: "कबीर के अनुसार जीवन का सच्चा अर्थ क्या है?",
    question_en: "According to Kabir, what is the true meaning of life?",
    options_hi: ["सत्य का पालन करना", "समाज सुधारना", "धन कमाना", "पारिवारिक जिम्मेदारी निभाना"],
    options_en: ["Following truth", "Reforming society", "Earning wealth", "Fulfilling family responsibilities"],
    answer: "सत्य का पालन करना",
    attempted: false,
    selected: ""
},
{
  num: 26,
  question_hi: "कबीर के अनुसार जीवन का सबसे बड़ा शिक्षक क्या है?",
  question_en: "According to Kabir, what is the greatest teacher in life?",
  options_hi: ["समाज", "स्वयं का अनुभव", "धर्म", "कर्म"],
  options_en: ["Society", "Personal experience", "Religion", "Actions"],
  answer: "स्वयं का अनुभव",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_hi: "कबीर के अनुसार 'माया' से क्या तात्पर्य है?",
  question_en: "What does Kabir mean by 'Maya'?",
  options_hi: ["धन और भौतिक वस्तुएं", "आध्यात्मिक ज्ञान", "समाज सुधार", "सत्य और प्रेम"],
  options_en: ["Wealth and material objects", "Spiritual knowledge", "Social reform", "Truth and love"],
  answer: "धन और भौतिक वस्तुएं",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_hi: "कबीर के अनुसार 'सत्य' क्या है?",
  question_en: "According to Kabir, what is 'Truth'?",
  options_hi: ["ईश्वर का रूप", "आध्यात्मिक ज्ञान", "सार्वभौमिक सत्य", "अंतरात्मा की आवाज"],
  options_en: ["Form of God", "Spiritual knowledge", "Universal truth", "Voice of the soul"],
  answer: "सार्वभौमिक सत्य",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_hi: "कबीर के अनुसार जीवन में सबसे बड़ी मूर्खता क्या है?",
  question_en: "According to Kabir, what is the greatest foolishness in life?",
  options_hi: ["आत्मसम्मान खोना", "धन का संचय", "माया में फंसना", "धर्म का पालन न करना"],
  options_en: ["Losing self-respect", "Accumulating wealth", "Getting trapped in illusion", "Not following religion"],
  answer: "माया में फंसना",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_hi: "कबीर के अनुसार मनुष्य को किसकी तलाश करनी चाहिए?",
  question_en: "According to Kabir, what should a person seek?",
  options_hi: ["ईश्वर का दर्शन", "सत्य और प्रेम", "धन और ऐश्वर्य", "प्रकृति का ज्ञान"],
  options_en: ["Vision of God", "Truth and love", "Wealth and luxury", "Knowledge of nature"],
  answer: "सत्य और प्रेम",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_hi: "कबीर का मानना है कि धर्म का पालन क्या करना चाहिए?",
  question_en: "Kabir believes that following religion should involve what?",
  options_hi: ["आध्यात्मिक साधना", "समाज सेवा", "सत्य बोलना", "सभी का सम्मान"],
  options_en: ["Spiritual practice", "Social service", "Speaking truth", "Respecting everyone"],
  answer: "सत्य बोलना",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_hi: "कबीर के अनुसार आत्मज्ञान प्राप्त करने के लिए क्या करना चाहिए?",
  question_en: "According to Kabir, what should one do to attain self-knowledge?",
  options_hi: ["सच्चाई का पालन करना", "ध्यान और साधना", "धर्म का पालन करना", "कर्मयोग में विश्वास रखना"],
  options_en: ["Follow the truth", "Meditation and spiritual practice", "Follow religion", "Believe in the path of action"],
  answer: "सच्चाई का पालन करना",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_hi: "कबीर के अनुसार मनुष्य का जीवन उद्देश्य क्या होना चाहिए?",
  question_en: "According to Kabir, what should be the purpose of human life?",
  options_hi: ["ईश्वर का भजन", "धन कमाना", "सत्य का पालन", "समाज सुधार"],
  options_en: ["Worship of God", "Earn wealth", "Follow the truth", "Social reform"],
  answer: "सत्य का पालन",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_hi: "कबीर के अनुसार कर्म का क्या महत्व है?",
  question_en: "According to Kabir, what is the importance of action?",
  options_hi: ["कर्म ही जीवन का उद्देश्य है", "कर्म से ही पुण्य मिलता है", "कर्म से ही ईश्वर की प्राप्ति होती है", "कर्म से संसार में सुख मिलता है"],
  options_en: ["Action is the purpose of life", "Action leads to virtue", "Action leads to the attainment of God", "Action brings happiness in the world"],
  answer: "कर्म ही जीवन का उद्देश्य है",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_hi: "कबीर के अनुसार दुखों से मुक्ति का मार्ग क्या है?",
  question_en: "According to Kabir, what is the path to liberation from suffering?",
  options_hi: ["सच्चाई का पालन", "ध्यान और साधना", "समाज सेवा", "कर्मयोग"],
  options_en: ["Following the truth", "Meditation and spiritual practice", "Social service", "Path of action"],
  answer: "सच्चाई का पालन",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_hi: "कबीर के अनुसार जीवन में सबसे बड़ी सम्पत्ति क्या है?",
  question_en: "According to Kabir, what is the greatest wealth in life?",
  options_hi: ["सत्य", "धन", "प्यारी मित्रता", "समानता"],
  options_en: ["Truth", "Wealth", "Dear friendship", "Equality"],
  answer: "सत्य",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_hi: "कबीर के अनुसार जीवन में संतुलन कैसे प्राप्त किया जा सकता है?",
  question_en: "According to Kabir, how can balance be achieved in life?",
  options_hi: ["साधना और ज्ञान से", "ध्यान और सेवा से", "सत्य और प्रेम से", "धर्म और कर्म से"],
  options_en: ["Through practice and knowledge", "Through meditation and service", "Through truth and love", "Through religion and action"],
  answer: "सत्य और प्रेम से",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_hi: "कबीर के अनुसार आत्मा का वास्तविक स्वरूप क्या है?",
  question_en: "According to Kabir, what is the true nature of the soul?",
  options_hi: ["निराकार और अविनाशी", "दृष्टि और शक्ति", "धर्म और कर्म", "समान और निर्विकार"],
  options_en: ["Formless and indestructible", "Vision and power", "Religion and action", "Equal and unaffected"],
  answer: "निराकार और अविनाशी",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_hi: "कबीर के अनुसार संसार की सबसे बड़ी मूर्खता क्या है?",
  question_en: "According to Kabir, what is the greatest foolishness in the world?",
  options_hi: ["सत्य को न समझना", "धन को महत्व देना", "धर्म का पालन न करना", "कर्म से बचना"],
  options_en: ["Not understanding the truth", "Valuing wealth", "Not following religion", "Avoiding actions"],
  answer: "सत्य को न समझना",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_hi: "कबीर के अनुसार सबसे महत्वपूर्ण कार्य क्या है?",
  question_en: "According to Kabir, what is the most important task?",
  options_hi: ["सत्य का पालन", "ईश्वर की पूजा", "समाज सेवा", "ज्ञान प्राप्ति"],
  options_en: ["Following the truth", "Worshiping God", "Social service", "Acquiring knowledge"],
  answer: "सत्य का पालन",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_hi: "कबीर के अनुसार ज्ञान प्राप्त करने के लिए क्या चाहिए?",
  question_en: "According to Kabir, what is needed to acquire knowledge?",
  options_hi: ["साधना और तप", "ध्यान और मनन", "ईश्वर की कृपा", "सत्य और प्रेम"],
  options_en: ["Spiritual practice and penance", "Meditation and contemplation", "God's grace", "Truth and love"],
  answer: "साधना और तप",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_hi: "कबीर के अनुसार व्यक्ति का सर्वोत्तम मार्ग कौन सा है?",
  question_en: "According to Kabir, what is the best path for an individual?",
  options_hi: ["कर्मयोग", "भक्ति", "ज्ञान", "साधना"],
  options_en: ["Karma yoga", "Devotion", "Knowledge", "Spiritual practice"],
  answer: "कर्मयोग",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_hi: "कबीर के अनुसार सुख की प्राप्ति का क्या तरीका है?",
  question_en: "According to Kabir, what is the way to attain happiness?",
  options_hi: ["सत्य और प्रेम से", "समाज सेवा से", "कर्मयोग से", "आध्यात्मिक साधना से"],
  options_en: ["Through truth and love", "Through social service", "Through karma yoga", "Through spiritual practice"],
  answer: "सत्य और प्रेम से",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_hi: "कबीर के अनुसार माया और सत्य में क्या अंतर है?",
  question_en: "According to Kabir, what is the difference between illusion (Maya) and truth?",
  options_hi: ["माया अस्थायी है, सत्य शाश्वत है", "माया शाश्वत है, सत्य अस्थायी है", "माया और सत्य में कोई अंतर नहीं है", "सत्य केवल माया से परे है"],
  options_en: ["Maya is temporary, truth is eternal", "Maya is eternal, truth is temporary", "There is no difference between Maya and truth", "Truth is beyond Maya"],
  answer: "माया अस्थायी है, सत्य शाश्वत है",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_hi: "कबीर के अनुसार 'राम' किसे कहा जाता है?",
  question_en: "According to Kabir, who is referred to as 'Ram'?",
  options_hi: ["ईश्वर", "प्राकृतिक शक्ति", "सत्य", "प्रेम"],
  options_en: ["God", "Natural force", "Truth", "Love"],
  answer: "सत्य",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_hi: "कबीर के अनुसार जीवन में संतुलन प्राप्त करने के लिए क्या आवश्यक है?",
  question_en: "According to Kabir, what is necessary to achieve balance in life?",
  options_hi: ["सच्चाई का पालन", "ध्यान और साधना", "धर्म का पालन", "सभी"],
  options_en: ["Following the truth", "Meditation and spiritual practice", "Following religion", "All of the above"],
  answer: "सभी",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_hi: "कबीर के अनुसार इंसान को किससे बचना चाहिए?",
  question_en: "According to Kabir, what should a person avoid?",
  options_hi: ["आलस्य", "माया", "धन की लालसा", "सभी"],
  options_en: ["Laziness", "Illusion", "Greed for wealth", "All of the above"],
  answer: "सभी",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_hi: "कबीर के अनुसार आत्मा का उद्धार कैसे होता है?",
  question_en: "According to Kabir, how is the soul redeemed?",
  options_hi: ["सत्य का पालन करके", "कर्म से", "ध्यान और साधना से", "ईश्वर की भक्ति से"],
  options_en: ["By following the truth", "Through action", "Through meditation and spiritual practice", "Through devotion to God"],
  answer: "सत्य का पालन करके",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_hi: "कबीर के अनुसार सबसे बड़ा गुरु कौन है?",
  question_en: "According to Kabir, who is the greatest teacher?",
  options_hi: ["स्वयं का अनुभव", "ईश्वर", "कर्म", "संत"],
  options_en: ["Personal experience", "God", "Action", "Saints"],
  answer: "स्वयं का अनुभव",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_hi: "कबीर के अनुसार मनुष्य को कौन सा मार्ग अपनाना चाहिए?",
  question_en: "According to Kabir, which path should a person follow?",
  options_hi: ["कर्मयोग", "भक्ति मार्ग", "ज्ञान मार्ग", "सत्य और प्रेम का मार्ग"],
  options_en: ["Karma yoga", "Path of devotion", "Path of knowledge", "Path of truth and love"],
  answer: "सत्य और प्रेम का मार्ग",
  attempted: false,
  selected: ""
}
        
    // Continue adding more questions up to 30
];

// Add more questions as needed...

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
