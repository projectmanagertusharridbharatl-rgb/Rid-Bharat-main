const questions = [
  {
    num: 1,
    question_hi: "कविता 'तुम मुझे खून दो, मैं तुम्हें आज़ादी दूँगा' के लेखक कौन थे?",
    question_en: "Who is the author of the poem 'Tum Mujhe Khoon Do, Main Tumhe Azadi Dunga'?",
    options_hi: ["सुभाष चंद्र बोस", "भगत सिंह", "चंद्रशेखर आज़ाद", "लाला लाजपत राय"],
    options_en: ["Subhash Chandra Bose", "Bhagat Singh", "Chandrashekhar Azad", "Lala Lajpat Rai"],
    answer: "सुभाष चंद्र बोस",
    attempted: false,
    selected: ""
  },
    {
      num: 2,
      question_hi: "कविता 'वह तोड़ती है' की मुख्य विषयवस्तु क्या है?",
      question_en: "What is the central theme of the poem 'Woh Todti Hai'?",
      options_hi: ["प्रकृति", "समाज में महिलाओं की स्थिति", "शब्दों का महत्व", "राष्ट्रीय एकता"],
      options_en: ["Nature", "Status of women in society", "Importance of words", "National unity"],
      answer: "समाज में महिलाओं की स्थिति",
      attempted: false,
      selected: ""
    },
    {
      num: 3,
      question_hi: "कविता 'रूपकों' का क्या अर्थ है?",
      question_en: "What does the term 'Rupakon' in poetry mean?",
      options_hi: ["अलंकार", "संबंध", "व्यंग्य", "काव्यशास्त्र"],
      options_en: ["Figure of speech", "Relation", "Satire", "Poetics"],
      answer: "अलंकार",
      attempted: false,
      selected: ""
    },
    {
      num: 4,
      question_hi: "कविता 'हरियाली' में किसके जीवन को चित्रित किया गया है?",
      question_en: "Whose life is portrayed in the poem 'Hariyali'?",
      options_hi: ["नदी", "प्रकृति", "युवाओं", "समाज"],
      options_en: ["River", "Nature", "Youth", "Society"],
      answer: "प्रकृति",
      attempted: false,
      selected: ""
    },
    {
      num: 5,
      question_hi: "कविता 'भारतीय जनजीवन' का प्रमुख संदेश क्या है?",
      question_en: "What is the key message of the poem 'Bhartiya Janjeevan'?",
      options_hi: ["मानवाधिकार", "धर्मनिरपेक्षता", "समानता", "राष्ट्रीय एकता"],
      options_en: ["Human rights", "Secularism", "Equality", "National unity"],
      answer: "राष्ट्रीय एकता",
      attempted: false,
      selected: ""
    },
    {
      num: 6,
      question_hi: "'भारत की खोज' काव्य का लेखक कौन है?",
      question_en: "Who is the author of the poetic work 'Bharat Ki Khoj'?",
      options_hi: ["रामधारी सिंह दिनकर", "रवींद्रनाथ ठाकुर", "कृष्ण बलदेव वैद", "धीरेंद्र वर्मा"],
      options_en: ["Ramdhari Singh Dinkar", "Rabindranath Tagore", "Krishna Baldev Vaid", "Dhirendra Verma"],
      answer: "रवींद्रनाथ ठाकुर",
      attempted: false,
      selected: ""
    },
    {
      num: 7,
      question_hi: "कविता 'पानी' के बारे में क्या कहा गया है?",
      question_en: "What is said about water in the poem 'Pani'?",
      options_hi: ["जल का महत्व", "प्राकृतिक धरोहर", "जल संकट", "जल के प्रकार"],
      options_en: ["Importance of water", "Natural heritage", "Water crisis", "Types of water"],
      answer: "जल संकट",
      attempted: false,
      selected: ""
    },
    {
      num: 8,
      question_hi: "कविता 'भारत माता' के द्वारा क्या संदेश दिया गया है?",
      question_en: "What message is conveyed by the poem 'Bharat Mata'?",
      options_hi: ["राष्ट्रप्रेम", "धर्म", "शब्द की ताकत", "कविता का महत्व"],
      options_en: ["Patriotism", "Religion", "Power of words", "Importance of poetry"],
      answer: "राष्ट्रप्रेम",
      attempted: false,
      selected: ""
    },
    {
      num: 9,
      question_hi: "कविता 'तुम मुझे खून दो, मैं तुम्हें आज़ादी दूँगा' के लेखक कौन थे?",
      question_en: "Who is the author of the poem 'Tum Mujhe Khoon Do, Main Tumhe Azadi Dunga'?",
      options_hi: ["सुभाष चंद्र बोस", "भगत सिंह", "चंद्रशेखर आज़ाद", "लाला लाजपत राय"],
      options_en: ["Subhash Chandra Bose", "Bhagat Singh", "Chandrashekhar Azad", "Lala Lajpat Rai"],
      answer: "सुभाष चंद्र बोस",
      attempted: false,
      selected: ""
    },
    {
      num: 10,
      question_hi: "कविता 'अन्याय' के लेखक कौन हैं?",
      question_en: "Who is the author of the poem 'Anyay'?",
      options_hi: ["उमाशंकर श्रीवास्तव", "सुमित्रानंदन पंत", "रामधारी सिंह दिनकर", "विजय कुमार"],
      options_en: ["Umashankar Shrivastava", "Sumitranandan Pant", "Ramdhari Singh Dinkar", "Vijay Kumar"],
      answer: "रामधारी सिंह दिनकर",
      attempted: false,
      selected: ""
    },
    {
      num: 11,
      question_hi: "'नदी' कविता में नदी को किस रूप में चित्रित किया गया है?",
      question_en: "How is the river depicted in the poem 'Nadi'?",
      options_hi: ["माँ", "प्रकृति", "समाज की स्थिति", "सुरक्षा का प्रतीक"],
      options_en: ["Mother", "Nature", "State of society", "Symbol of safety"],
      answer: "माँ",
      attempted: false,
      selected: ""
    },
    {
      num: 12,
      question_hi: "कविता 'हमारे घर में' का मुख्य संदेश क्या है?",
      question_en: "What is the main message of the poem 'Hamare Ghar Mein'?",
      options_hi: ["परिवार की महिमा", "समाज में बदलाव", "सांस्कृतिक धरोहर", "प्राकृतिक सौंदर्य"],
      options_en: ["Glory of family", "Change in society", "Cultural heritage", "Natural beauty"],
      answer: "परिवार की महिमा",
      attempted: false,
      selected: ""
    },
    {
      num: 13,
      question_hi: "कविता 'शिक्षा' का संदेश क्या है?",
      question_en: "What is the message of the poem 'Shiksha'?",
      options_hi: ["शिक्षा का महत्व", "प्रकृति संरक्षण", "संस्कार", "स्वच्छता अभियान"],
      options_en: ["Importance of education", "Nature conservation", "Values", "Cleanliness campaign"],
      answer: "शिक्षा का महत्व",
      attempted: false,
      selected: ""
    },
    {
      num: 14,
      question_hi: "कविता 'रूप' में किस विषय का चित्रण है?",
      question_en: "What subject is depicted in the poem 'Roop'?",
      options_hi: ["प्राकृतिक सौंदर्य", "मानव जीवन", "प्रकृति की शक्ति", "समाज में बदलाव"],
      options_en: ["Natural beauty", "Human life", "Power of nature", "Change in society"],
      answer: "प्राकृतिक सौंदर्य",
      attempted: false,
      selected: ""
    },
    {
      num: 15,
      question_hi: "कविता 'सपने' का मुख्य विषय क्या है?",
      question_en: "What is the main theme of the poem 'Sapne'?",
      options_hi: ["आशा", "सपने का महत्व", "आत्मनिर्भरता", "समाज में समता"],
      options_en: ["Hope", "Importance of dreams", "Self-dependence", "Equality in society"],
      answer: "सपने का महत्व",
      attempted: false,
      selected: ""
    },
    {
      num: 16,
      question_hi: "'अग्नि परीक्षा' कविता का प्रमुख संदेश क्या है?",
      question_en: "What is the main message of the poem 'Agni Pariksha'?",
      options_hi: ["साहस", "मूल्य और आदर्श", "धर्म", "समानता"],
      options_en: ["Courage", "Values and ideals", "Religion", "Equality"],
      answer: "मूल्य और आदर्श",
      attempted: false,
      selected: ""
    },
    {
      num: 17,
      question_hi: "कविता 'शक्ति' का लेखक कौन है?",
      question_en: "Who is the author of the poem 'Shakti'?",
      options_hi: ["रामधारी सिंह दिनकर", "विनोबा भावे", "उमाशंकर श्रीवास्तव", "सुमित्रानंदन पंत"],
      options_en: ["Ramdhari Singh Dinkar", "Vinoba Bhave", "Umashankar Shrivastava", "Sumitranandan Pant"],
      answer: "रामधारी सिंह दिनकर",
      attempted: false,
      selected: ""
    },
    {
      num: 18,
      question_hi: "कविता 'भक्ति' में किसका चित्रण किया गया है?",
      question_en: "What is depicted in the poem 'Bhakti'?",
      options_hi: ["भगवान", "माँ", "देशभक्ति", "धर्म"],
      options_en: ["God", "Mother", "Patriotism", "Religion"],
      answer: "भगवान",
      attempted: false,
      selected: ""
    },
    {
      num: 19,
      question_hi: "कविता 'प्रेम' में किस प्रकार का प्रेम चित्रित किया गया है?",
      question_en: "What kind of love is depicted in the poem 'Prem'?",
      options_hi: ["स्वार्थी", "निस्वार्थ", "आध्यात्मिक", "स्वदेशी"],
      options_en: ["Selfish", "Selfless", "Spiritual", "Swadeshi"],
      answer: "निस्वार्थ",
      attempted: false,
      selected: ""
    },
    {
      num: 20,
      question_hi: "कविता 'धैर्य' का संदेश क्या है?",
      question_en: "What is the message of the poem 'Dhairya'?",
      options_hi: ["साहस से काम लेना", "समाज सेवा", "धैर्य का महत्व", "आत्मनिर्भरता"],
      options_en: ["Acting with courage", "Social service", "Importance of patience", "Self-reliance"],
      answer: "धैर्य का महत्व",
      attempted: false,
      selected: ""
    },
    {
      num: 21,
      question_hi: "कविता 'शांति' में किसका चित्रण किया गया है?",
      question_en: "What is depicted in the poem 'Shanti'?",
      options_hi: ["आध्यात्मिक शांति", "सांस्कृतिक विविधता", "प्राकृतिक सौंदर्य", "मानवाधिकार"],
      options_en: ["Spiritual peace", "Cultural diversity", "Natural beauty", "Human rights"],
      answer: "आध्यात्मिक शांति",
      attempted: false,
      selected: ""
    },
    {
      num: 22,
      question_hi: "कविता 'कृषि' में किसे महत्व दिया गया है?",
      question_en: "What is given importance in the poem 'Krishi'?",
      options_hi: ["किसान", "मृदा", "जल", "प्राकृतिक संसाधन"],
      options_en: ["Farmer", "Soil", "Water", "Natural resources"],
      answer: "किसान",
      attempted: false,
      selected: ""
    },
    {
      num: 23,
      question_hi: "कविता 'कला' का प्रमुख उद्देश्य क्या है?",
      question_en: "What is the main purpose of the poem 'Kala'?",
      options_hi: ["कला की महत्ता", "प्रकृति", "धर्म", "स्मृति"],
      options_en: ["Importance of art", "Nature", "Religion", "Memory"],
      answer: "कला की महत्ता",
      attempted: false,
      selected: ""
    },
    {
      num: 24,
      question_hi: "कविता 'मातृभूमि' में किसका चित्रण किया गया है?",
      question_en: "What is depicted in the poem 'Matribhumi'?",
      options_hi: ["भारत", "प्रकृति", "माँ", "देशभक्ति"],
      options_en: ["India", "Nature", "Mother", "Patriotism"],
      answer: "भारत",
      attempted: false,
      selected: ""
    },
    {
      num: 25,
      question_hi: "कविता 'नारी' का संदेश क्या है?",
      question_en: "What is the message of the poem 'Nari'?",
      options_hi: ["महिला अधिकार", "शक्ति", "समाज का सहयोग", "नारी का सम्मान"],
      options_en: ["Women's rights", "Power", "Societal support", "Respect for women"],
      answer: "नारी का सम्मान",
      attempted: false,
      selected: ""
    },
      {
        num: 26,
        question_hi: "कविता 'अज्ञान' के लेखक कौन हैं?",
        question_en: "Who is the author of the poem 'Agyan'?",
        options_hi: ["विनोबा भावे", "रामधारी सिंह दिनकर", "उमाशंकर श्रीवास्तव", "सुमित्रानंदन पंत"],
        options_en: ["Vinoba Bhave", "Ramdhari Singh Dinkar", "Umashankar Shrivastava", "Sumitranandan Pant"],
        answer: "सुमित्रानंदन पंत",
        attempted: false,
        selected: ""
      },
      {
        num: 27,
        question_hi: "कविता 'समाज' का क्या संदेश है?",
        question_en: "What is the message of the poem 'Samaj'?",
        options_hi: ["समाज में समानता", "अधिकार", "आध्यात्मिकता", "धर्मनिरपेक्षता"],
        options_en: ["Equality in society", "Rights", "Spirituality", "Secularism"],
        answer: "समाज में समानता",
        attempted: false,
        selected: ""
      },
      {
        num: 28,
        question_hi: "कविता 'आत्मविश्वास' में क्या संदेश दिया गया है?",
        question_en: "What message is conveyed in the poem 'Atmavishwas'?",
        options_hi: ["साहस", "प्रकृति प्रेम", "आत्मविश्वास का महत्व", "समाज का उत्थान"],
        options_en: ["Courage", "Love for nature", "Importance of self-confidence", "Societal upliftment"],
        answer: "आत्मविश्वास का महत्व",
        attempted: false,
        selected: ""
      },
      {
        num: 29,
        question_hi: "कविता 'परिवर्तन' में किस विषय पर चर्चा की गई है?",
        question_en: "What topic is discussed in the poem 'Parivartan'?",
        options_hi: ["समाज परिवर्तन", "प्राकृतिक आपदाएँ", "प्रकृति", "सांस्कृतिक विविधता"],
        options_en: ["Social change", "Natural disasters", "Nature", "Cultural diversity"],
        answer: "समाज परिवर्तन",
        attempted: false,
        selected: ""
      },
      {
        num: 30,
        question_hi: "कविता 'मूल्य' में कौन सी शिक्षा दी जाती है?",
        question_en: "What lesson is taught in the poem 'Mulya'?",
        options_hi: ["मानवीय मूल्यों का सम्मान", "आध्यात्मिक साधना", "प्रकृति का संरक्षण", "आत्मनिर्भरता"],
        options_en: ["Respect for human values", "Spiritual practice", "Nature conservation", "Self-reliance"],
        answer: "मानवीय मूल्यों का सम्मान",
        attempted: false,
        selected: ""
      },
      {
        num: 31,
        question_hi: "कविता 'श्रम' का मुख्य उद्देश्य क्या है?",
        question_en: "What is the main purpose of the poem 'Shram'?",
        options_hi: ["श्रम का महत्व", "समानता", "पर्यावरण सुरक्षा", "समाज का उत्थान"],
        options_en: ["Importance of labor", "Equality", "Environmental protection", "Societal upliftment"],
        answer: "श्रम का महत्व",
        attempted: false,
        selected: ""
      },
      {
        num: 32,
        question_hi: "कविता 'आत्मनिर्भरता' में किस विषय का वर्णन किया गया है?",
        question_en: "What topic is described in the poem 'Atmanirbharta'?",
        options_hi: ["आत्मनिर्भरता", "समानता", "स्वतंत्रता", "प्रकृति"],
        options_en: ["Self-reliance", "Equality", "Freedom", "Nature"],
        answer: "आत्मनिर्भरता",
        attempted: false,
        selected: ""
      },
      {
        num: 33,
        question_hi: "कविता 'हिम्मत' में किसकी महिमा का वर्णन है?",
        question_en: "Whose praise is described in the poem 'Himmat'?",
        options_hi: ["वह勇", "साहस और संघर्ष", "आध्यात्मिकता", "देशभक्ति"],
        options_en: ["Courage", "Bravery and struggle", "Spirituality", "Patriotism"],
        answer: "साहस और संघर्ष",
        attempted: false,
        selected: ""
      },
      {
        num: 34,
        question_hi: "कविता 'यात्रा' का संदेश क्या है?",
        question_en: "What is the message of the poem 'Yatra'?",
        options_hi: ["दूरी पर काबू पाना", "यात्रा का महत्व", "दृष्टिकोण", "साधना"],
        options_en: ["Overcoming distance", "Importance of journey", "Perspective", "Practice"],
        answer: "यात्रा का महत्व",
        attempted: false,
        selected: ""
      },
      {
        num: 35,
        question_hi: "कविता 'समाज सेवा' का मुख्य उद्देश्य क्या है?",
        question_en: "What is the main purpose of the poem 'Samaj Seva'?",
        options_hi: ["समाज की सेवा", "धर्म", "शक्ति", "समानता"],
        options_en: ["Service to society", "Religion", "Power", "Equality"],
        answer: "समाज की सेवा",
        attempted: false,
        selected: ""
      },
      {
        num: 36,
        question_hi: "कविता 'आत्मा' का संदेश क्या है?",
        question_en: "What is the message of the poem 'Atma'?",
        options_hi: ["आत्मा का महत्व", "आध्यात्मिकता", "स्वच्छता", "प्राकृतिक संसाधन"],
        options_en: ["Importance of soul", "Spirituality", "Cleanliness", "Natural resources"],
        answer: "आत्मा का महत्व",
        attempted: false,
        selected: ""
      },
      {
        num: 37,
        question_hi: "कविता 'हमें याद रखना' में किसका महत्व बताया गया है?",
        question_en: "What is emphasized in the poem 'Humein Yaad Rakhna'?",
        options_hi: ["समाज के लिए योगदान", "शक्ति", "प्राकृतिक सौंदर्य", "विजय"],
        options_en: ["Contribution to society", "Strength", "Natural beauty", "Victory"],
        answer: "समाज के लिए योगदान",
        attempted: false,
        selected: ""
      },
      {
        num: 38,
        question_hi: "कविता 'यादें' में क्या चित्रित किया गया है?",
        question_en: "What is depicted in the poem 'Yaadein'?",
        options_hi: ["बीते समय की यादें", "प्राकृतिक आपदाएं", "समाज का उत्थान", "शक्ति"],
        options_en: ["Memories of the past", "Natural disasters", "Societal upliftment", "Power"],
        answer: "बीते समय की यादें",
        attempted: false,
        selected: ""
      },
      {
        num: 39,
        question_hi: "कविता 'प्रेरणा' का संदेश क्या है?",
        question_en: "What is the message of the poem 'Prerna'?",
        options_hi: ["प्रेरणा का महत्व", "समाज सेवा", "धन का महत्व", "साधना"],
        options_en: ["Importance of inspiration", "Service to society", "Importance of wealth", "Practice"],
        answer: "प्रेरणा का महत्व",
        attempted: false,
        selected: ""
      },
      {
        num: 40,
        question_hi: "कविता 'स्वतंत्रता' का संदेश क्या है?",
        question_en: "What is the message of the poem 'Swatantrata'?",
        options_hi: ["स्वतंत्रता का महत्व", "प्राकृतिक संसाधन", "धन का महत्व", "समानता"],
        options_en: ["Importance of freedom", "Natural resources", "Importance of wealth", "Equality"],
        answer: "स्वतंत्रता का महत्व",
        attempted: false,
        selected: ""
      },
      {
        num: 41,
        question_hi: "कविता 'संघर्ष' में क्या बताया गया है?",
        question_en: "What is described in the poem 'Sangharsh'?",
        options_hi: ["संघर्ष का महत्व", "समानता", "सशक्तिकरण", "समाज सुधार"],
        options_en: ["Importance of struggle", "Equality", "Empowerment", "Social reform"],
        answer: "संघर्ष का महत्व",
        attempted: false,
        selected: ""
      },
      {
        num: 42,
        question_hi: "कविता 'सपने' में किसका चित्रण किया गया है?",
        question_en: "What is depicted in the poem 'Sapne'?",
        options_hi: ["सपनों की महत्ता", "प्राकृतिक सौंदर्य", "देशभक्ति", "आध्यात्मिकता"],
        options_en: ["Importance of dreams", "Natural beauty", "Patriotism", "Spirituality"],
        answer: "सपनों की महत्ता",
        attempted: false,
        selected: ""
      },
      {
        num: 43,
        question_hi: "कविता 'असफलता' का संदेश क्या है?",
        question_en: "What is the message of the poem 'Asafalta'?",
        options_hi: ["असफलता से सीखना", "आत्मविश्वास", "देशभक्ति", "समाज सुधार"],
        options_en: ["Learning from failure", "Self-confidence", "Patriotism", "Social reform"],
        answer: "असफलता से सीखना",
        attempted: false,
        selected: ""
      },
      {
        num: 44,
        question_hi: "कविता 'समाज' का मूल संदेश क्या है?",
        question_en: "What is the core message of the poem 'Samaj'?",
        options_hi: ["समाज में बदलाव", "धार्मिक एकता", "संस्कार", "विज्ञान"],
        options_en: ["Social change", "Religious unity", "Values", "Science"],
        answer: "समाज में बदलाव",
        attempted: false,
        selected: ""
      },
      {
        num: 45,
        question_hi: "कविता 'कृषि' में क्या चित्रित किया गया है?",
        question_en: "What is depicted in the poem 'Krishi'?",
        options_hi: ["कृषक की भूमिका", "प्राकृतिक संसाधन", "समानता", "मूल्य"],
        options_en: ["Role of farmers", "Natural resources", "Equality", "Values"],
        answer: "कृषक की भूमिका",
        attempted: false,
        selected: ""
      },
      {
        num: 46,
        question_hi: "कविता 'सच्चाई' का संदेश क्या है?",
        question_en: "What is the message of the poem 'Sachai'?",
        options_hi: ["सच्चाई का महत्व", "सामाजिक बदलाव", "धार्मिक एकता", "देशभक्ति"],
        options_en: ["Importance of truth", "Social change", "Religious unity", "Patriotism"],
        answer: "सच्चाई का महत्व",
        attempted: false,
        selected: ""
      },
      {
        num: 47,
        question_hi: "कविता 'महत्वपूर्ण' में क्या चित्रित किया गया है?",
        question_en: "What is depicted in the poem 'Mahattvapurn'?",
        options_hi: ["महत्वपूर्ण कार्य", "आध्यात्मिकता", "प्रकृति", "देशभक्ति"],
        options_en: ["Important work", "Spirituality", "Nature", "Patriotism"],
        answer: "महत्वपूर्ण कार्य",
        attempted: false,
        selected: ""
      },
      {
        num: 48,
        question_hi: "कविता 'संगठन' में क्या संदेश दिया गया है?",
        question_en: "What message is given in the poem 'Sangathan'?",
        options_hi: ["एकता का महत्व", "स्वतंत्रता", "प्राकृतिक सौंदर्य", "आध्यात्मिक साधना"],
        options_en: ["Importance of unity", "Freedom", "Natural beauty", "Spiritual practice"],
        answer: "एकता का महत्व",
        attempted: false,
        selected: ""
      },
      {
        num: 49,
        question_hi: "कविता 'अज्ञेय' का संदेश क्या है?",
        question_en: "What is the message of the poem 'Ajneya'?",
        options_hi: ["अज्ञेय का संघर्ष", "सामाजिक असमानता", "प्राकृतिक सौंदर्य", "समानता"],
        options_en: ["Struggle of the unknown", "Social inequality", "Natural beauty", "Equality"],
        answer: "अज्ञेय का संघर्ष",
        attempted: false,
        selected: ""
      },
      {
        num: 50,
        question_hi: "कविता 'नैतिकता' का संदेश क्या है?",
        question_en: "What is the message of the poem 'Naitikta'?",
        options_hi: ["नैतिकता का महत्व", "शक्ति", "आध्यात्मिकता", "समाज सुधार"],
        options_en: ["Importance of morality", "Strength", "Spirituality", "Social reform"],
        answer: "नैतिकता का महत्व",
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
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
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
