const questions = [
{
    num: 1,
    question_en: "Which of the following is the most appropriate meaning of 'Politics'?",
    question_hi: "'राजनीति' का सबसे उपयुक्त अर्थ कौन सा है?",
    options_en: [
      "The art of government",
      "The study of plants",
      "A type of sport",
      "A religious ritual"
    ],
    options_hi: [
      "शासन की कला",
      "पौधों का अध्ययन",
      "एक प्रकार का खेल",
      "एक धार्मिक अनुष्ठान"
    ],
    answer_en: "The art of government",
    answer_hi: "शासन की कला",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Politics primarily deals with:",
    question_hi: "राजनीति मुख्य रूप से किससे संबंधित है?",
    options_en: [
      "Power and governance",
      "Economic theories",
      "Biological processes",
      "Physical exercises"
    ],
    options_hi: [
      "शक्ति और शासन",
      "आर्थिक सिद्धांत",
      "जीव विज्ञान प्रक्रियाएं",
      "शारीरिक व्यायाम"
    ],
    answer_en: "Power and governance",
    answer_hi: "शक्ति और शासन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which of the following is a characteristic of democracy?",
    question_hi: "लोकतंत्र की कौन सी विशेषता है?",
    options_en: [
      "Rule by the people",
      "Rule by a king",
      "Rule by military",
      "Rule by a dictator"
    ],
    options_hi: [
      "जनता द्वारा शासन",
      "राजा द्वारा शासन",
      "सैन्य द्वारा शासन",
      "तानाशाह द्वारा शासन"
    ],
    answer_en: "Rule by the people",
    answer_hi: "जनता द्वारा शासन",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "The Constitution of India was adopted in the year:",
    question_hi: "भारत का संविधान किस वर्ष अपनाया गया था?",
    options_en: ["1947", "1950", "1952", "1949"],
    options_hi: ["1947", "1950", "1952", "1949"],
    answer_en: "1950",
    answer_hi: "1950",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Who is called the 'Father of the Indian Constitution'?",
    question_hi: "भारत के संविधान के 'पिता' को कौन कहा जाता है?",
    options_en: [
      "Dr. B.R. Ambedkar",
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Sardar Patel"
    ],
    options_hi: [
      "डॉ. बी. आर. अम्बेडकर",
      "महात्मा गांधी",
      "जवाहरलाल नेहरू",
      "सरदार पटेल"
    ],
    answer_en: "Dr. B.R. Ambedkar",
    answer_hi: "डॉ. बी. आर. अम्बेडकर",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which part of the Constitution deals with Fundamental Rights?",
    question_hi: "संविधान का कौन सा भाग मौलिक अधिकारों से संबंधित है?",
    options_en: ["Part III", "Part IV", "Part II", "Part V"],
    options_hi: ["भाग III", "भाग IV", "भाग II", "भाग V"],
    answer_en: "Part III",
    answer_hi: "भाग III",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "The political system of India is:",
    question_hi: "भारत की राजनीतिक प्रणाली क्या है?",
    options_en: [
      "Federal Parliamentary Democratic Republic",
      "Absolute Monarchy",
      "Military Dictatorship",
      "Unitary Presidential System"
    ],
    options_hi: [
      "संघीय संसदीय लोकतांत्रिक गणराज्य",
      "पूर्ण राजशाही",
      "सैन्य तानाशाही",
      "एकात्मक राष्ट्रपति प्रणाली"
    ],
    answer_en: "Federal Parliamentary Democratic Republic",
    answer_hi: "संघीय संसदीय लोकतांत्रिक गणराज्य",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Who appoints the Prime Minister of India?",
    question_hi: "भारत के प्रधानमंत्री को कौन नियुक्त करता है?",
    options_en: [
      "President",
      "Chief Justice",
      "Parliament",
      "Supreme Court"
    ],
    options_hi: [
      "राष्ट्रपति",
      "मुख्य न्यायाधीश",
      "संसद",
      "सर्वोच्च न्यायालय"
    ],
    answer_en: "President",
    answer_hi: "राष्ट्रपति",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which of the following is NOT a function of the Parliament?",
    question_hi: "निम्नलिखित में से कौन संसद का कार्य नहीं है?",
    options_en: [
      "Making laws",
      "Approving budget",
      "Judging legal disputes",
      "Discussing public issues"
    ],
    options_hi: [
      "कानून बनाना",
      "बजट को मंजूरी देना",
      "कानूनी विवादों का निपटारा",
      "सार्वजनिक मुद्दों पर चर्चा करना"
    ],
    answer_en: "Judging legal disputes",
    answer_hi: "कानूनी विवादों का निपटारा",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "The term of the Lok Sabha is:",
    question_hi: "लोक सभा की अवधि होती है:",
    options_en: ["5 years", "6 years", "4 years", "3 years"],
    options_hi: ["5 वर्ष", "6 वर्ष", "4 वर्ष", "3 वर्ष"],
    answer_en: "5 years",
    answer_hi: "5 वर्ष",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "The power to amend the Constitution lies with:",
    question_hi: "संविधान में संशोधन करने का अधिकार किसके पास है?",
    options_en: [
      "Parliament",
      "Supreme Court",
      "President",
      "Election Commission"
    ],
    options_hi: [
      "संसद",
      "सर्वोच्च न्यायालय",
      "राष्ट्रपति",
      "चुनाव आयोग"
    ],
    answer_en: "Parliament",
    answer_hi: "संसद",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "The leader of the ruling party in Lok Sabha is called:",
    question_hi: "लोक सभा में शासक दल के नेता को क्या कहा जाता है?",
    options_en: [
      "Prime Minister",
      "Speaker",
      "President",
      "Chief Minister"
    ],
    options_hi: [
      "प्रधानमंत्री",
      "सभापति",
      "राष्ट्रपति",
      "मुख्यमंत्री"
    ],
    answer_en: "Prime Minister",
    answer_hi: "प्रधानमंत्री",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which of the following is a Union Territory of India?",
    question_hi: "निम्नलिखित में से कौन सा भारत का केंद्र शासित प्रदेश है?",
    options_en: [
      "Puducherry",
      "Punjab",
      "Rajasthan",
      "Maharashtra"
    ],
    options_hi: [
      "पुदुच्चेरी",
      "पंजाब",
      "राजस्थान",
      "महाराष्ट्र"
    ],
    answer_en: "Puducherry",
    answer_hi: "पुदुच्चेरी",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which Article in the Constitution provides for Fundamental Duties?",
    question_hi: "संविधान का कौन सा अनुच्छेद मौलिक कर्तव्यों का प्रावधान करता है?",
    options_en: ["Article 51A", "Article 21", "Article 19", "Article 370"],
    options_hi: ["अनुच्छेद 51A", "अनुच्छेद 21", "अनुच्छेद 19", "अनुच्छेद 370"],
    answer_en: "Article 51A",
    answer_hi: "अनुच्छेद 51A",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which body conducts elections in India?",
    question_hi: "भारत में चुनाव कौन आयोजित करता है?",
    options_en: [
      "Election Commission",
      "Supreme Court",
      "Parliament",
      "President"
    ],
    options_hi: [
      "चुनाव आयोग",
      "सर्वोच्च न्यायालय",
      "संसद",
      "राष्ट्रपति"
    ],
    answer_en: "Election Commission",
    answer_hi: "चुनाव आयोग",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which one is a feature of Indian federalism?",
    question_hi: "भारतीय संघवाद की कौन सी विशेषता है?",
    options_en: [
      "Division of powers between Centre and States",
      "Single central government",
      "No state governments",
      "Military rule"
    ],
    options_hi: [
      "केंद्र और राज्यों के बीच शक्तियों का विभाजन",
      "एकल केंद्रीय सरकार",
      "कोई राज्य सरकार नहीं",
      "सैन्य शासन"
    ],
    answer_en: "Division of powers between Centre and States",
    answer_hi: "केंद्र और राज्यों के बीच शक्तियों का विभाजन",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "The President of India is elected by:",
    question_hi: "भारत के राष्ट्रपति का चुनाव किसके द्वारा किया जाता है?",
    options_en: [
      "Electoral college consisting of MPs and MLAs",
      "Direct public vote",
      "Supreme Court",
      "Prime Minister"
    ],
    options_hi: [
      "संसद और विधान सभा के सदस्यों का निर्वाचन मंडल",
      "प्रत्यक्ष जनता का मतदान",
      "सर्वोच्च न्यायालय",
      "प्रधानमंत्री"
    ],
    answer_en: "Electoral college consisting of MPs and MLAs",
    answer_hi: "संसद और विधान सभा के सदस्यों का निर्वाचन मंडल",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which of the following is a fundamental right under the Indian Constitution?",
    question_hi: "भारत के संविधान के तहत निम्नलिखित में से कौन सा मौलिक अधिकार है?",
    options_en: [
      "Right to Equality",
      "Right to Property",
      "Right to Vote",
      "Right to Work"
    ],
    options_hi: [
      "समानता का अधिकार",
      "संपत्ति का अधिकार",
      "मतदान का अधिकार",
      "काम करने का अधिकार"
    ],
    answer_en: "Right to Equality",
    answer_hi: "समानता का अधिकार",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Who presides over the Rajya Sabha sessions?",
    question_hi: "राज्य सभा की बैठकों की अध्यक्षता कौन करता है?",
    options_en: [
      "Vice President of India",
      "Prime Minister",
      "President",
      "Chief Justice"
    ],
    options_hi: [
      "भारत के उपराष्ट्रपति",
      "प्रधानमंत्री",
      "राष्ट्रपति",
      "मुख्य न्यायाधीश"
    ],
    answer_en: "Vice President of India",
    answer_hi: "भारत के उपराष्ट्रपति",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "The Directive Principles of State Policy are:",
    question_hi: "राज्य नीति के निर्देशात्मक सिद्धांत क्या हैं?",
    options_en: [
      "Guidelines to the government",
      "Fundamental rights",
      "Laws made by the Parliament",
      "Judgments of Supreme Court"
    ],
    options_hi: [
      "सरकार के लिए मार्गदर्शक सिद्धांत",
      "मौलिक अधिकार",
      "संसद द्वारा बनाए गए कानून",
      "सर्वोच्च न्यायालय के फैसले"
    ],
    answer_en: "Guidelines to the government",
    answer_hi: "सरकार के लिए मार्गदर्शक सिद्धांत",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "The Indian National Congress was founded in the year:",
    question_hi: "भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई थी?",
    options_en: ["1885", "1905", "1947", "1920"],
    options_hi: ["1885", "1905", "1947", "1920"],
    answer_en: "1885",
    answer_hi: "1885",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Who was the first Prime Minister of India?",
    question_hi: "भारत के पहले प्रधानमंत्री कौन थे?",
    options_en: [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Sardar Patel",
      "Rajendra Prasad"
    ],
    options_hi: [
      "जवाहरलाल नेहरू",
      "महात्मा गांधी",
      "सरदार पटेल",
      "राजेंद्र प्रसाद"
    ],
    answer_en: "Jawaharlal Nehru",
    answer_hi: "जवाहरलाल नेहरू",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "The Supreme Law of India is:",
    question_hi: "भारत का सर्वोच्च कानून क्या है?",
    options_en: [
      "The Constitution",
      "Parliamentary Acts",
      "Judicial Orders",
      "President’s Directives"
    ],
    options_hi: [
      "संविधान",
      "संसदीय अधिनियम",
      "न्यायिक आदेश",
      "राष्ट्रपति के निर्देश"
    ],
    answer_en: "The Constitution",
    answer_hi: "संविधान",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which of the following is NOT a feature of the Indian Constitution?",
    question_hi: "निम्नलिखित में से कौन सा भारतीय संविधान की विशेषता नहीं है?",
    options_en: [
      "Secularism",
      "Federalism",
      "Monarchy",
      "Democracy"
    ],
    options_hi: [
      "धर्मनिरपेक्षता",
      "संघवाद",
      "राजशाही",
      "लोकतंत्र"
    ],
    answer_en: "Monarchy",
    answer_hi: "राजशाही",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which institution settles disputes between the Centre and the States?",
    question_hi: "केंद्र और राज्यों के बीच विवादों का निपटारा कौन करता है?",
    options_en: [
      "Supreme Court",
      "Parliament",
      "President",
      "Election Commission"
    ],
    options_hi: [
      "सर्वोच्च न्यायालय",
      "संसद",
      "राष्ट्रपति",
      "चुनाव आयोग"
    ],
    answer_en: "Supreme Court",
    answer_hi: "सर्वोच्च न्यायालय",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which political system is characterized by the rule of a single individual?",
    question_hi: "कौन सा राजनीतिक तंत्र एक व्यक्ति के शासन द्वारा परिचालित होता है?",
    options_en: ["Democracy", "Monarchy", "Oligarchy", "Anarchy"],
    options_hi: ["लोकतंत्र", "राजतंत्र", "संघर्षात्मक शासन", "अराजकता"],
    answer: "Monarchy",
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "What does 'sovereignty' primarily refer to in political science?",
    question_hi: "राजनीति शास्त्र में 'सार्वभौमिकता' का क्या अर्थ है?",
    options_en: ["Power of the people", "Supreme authority", "Economic control", "Legal system"],
    options_hi: ["जनता की शक्ति", "सर्वोच्च अधिकार", "आर्थिक नियंत्रण", "कानूनी प्रणाली"],
    answer: "Supreme authority",
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "Which of the following is a feature of a democratic political system?",
    question_hi: "निम्नलिखित में से कौन सा लोकतांत्रिक राजनीतिक तंत्र की विशेषता है?",
    options_en: ["Rule by the elite", "Majority rule", "Absolute monarchy", "Military dictatorship"],
    options_hi: ["शासित वर्ग द्वारा शासन", "बहुमत का शासन", "पूर्ण राजतंत्र", "सैन्य तानाशाही"],
    answer: "Majority rule",
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "What is the term used for a system where power is shared between the central and regional governments?",
    question_hi: "ऐसे तंत्र के लिए कौन सा शब्द प्रयोग किया जाता है जहाँ शक्ति केंद्र और क्षेत्रीय सरकारों के बीच साझा होती है?",
    options_en: ["Unitary system", "Federal system", "Confederation", "Dictatorship"],
    options_hi: ["एकात्मक तंत्र", "संघीय तंत्र", "संघ", "तानाशाही"],
    answer: "Federal system",
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "Which philosopher is known for the idea of 'Social Contract'?",
    question_hi: "कौन सा दार्शनिक 'सामाजिक अनुबंध' के विचार के लिए जाना जाता है?",
    options_en: ["Plato", "Thomas Hobbes", "Karl Marx", "Aristotle"],
    options_hi: ["प्लेटो", "थॉमस हॉब्स", "कार्ल मार्क्स", "अरस्तू"],
    answer: "Thomas Hobbes",
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "The term 'civil society' refers to:",
    question_hi: "'नागरिक समाज' शब्द का क्या अर्थ है?",
    options_en: ["Government institutions", "Private individuals and organizations", "Political parties", "Military forces"],
    options_hi: ["सरकारी संस्थान", "निजी व्यक्ति और संगठन", "राजनीतिक दल", "सैन्य बल"],
    answer: "Private individuals and organizations",
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "What is the primary function of the legislature?",
    question_hi: "विधानपालिका का मुख्य कार्य क्या है?",
    options_en: ["Make laws", "Enforce laws", "Interpret laws", "Execute laws"],
    options_hi: ["कानून बनाना", "कानून लागू करना", "कानूनों की व्याख्या करना", "कानून लागू करना"],
    answer: "Make laws",
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "Which of the following is NOT a characteristic of a dictatorship?",
    question_hi: "निम्नलिखित में से कौन तानाशाही की विशेषता नहीं है?",
    options_en: ["Centralized power", "Free elections", "Limited political freedom", "No opposition"],
    options_hi: ["केन्द्रित शक्ति", "स्वतंत्र चुनाव", "सीमित राजनीतिक स्वतंत्रता", "कोई विपक्ष नहीं"],
    answer: "Free elections",
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "The term 'bicameral legislature' means:",
    question_hi: "'द्विसदनीय विधानपालिका' का क्या अर्थ है?",
    options_en: ["One house legislature", "Two house legislature", "Three house legislature", "No legislature"],
    options_hi: ["एक सदन वाली विधानसभा", "दो सदन वाली विधानसभा", "तीन सदन वाली विधानसभा", "कोई विधानसभा नहीं"],
    answer: "Two house legislature",
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "Which political ideology advocates for state ownership of resources?",
    question_hi: "कौन सी राजनीतिक विचारधारा संसाधनों के राज्य स्वामित्व की वकालत करती है?",
    options_en: ["Capitalism", "Socialism", "Liberalism", "Conservatism"],
    options_hi: ["पूंजीवाद", "समाजवाद", "उदारवाद", "संरक्षणवाद"],
    answer: "Socialism",
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "The idea of separation of powers was advocated by which thinker?",
    question_hi: "शक्तियों के पृथक्करण का विचार किस विचारक ने दिया?",
    options_en: ["John Locke", "Montesquieu", "Jean-Jacques Rousseau", "Immanuel Kant"],
    options_hi: ["जॉन लॉक", "मोंटेस्क्यू", "जीन-जैक्स रूसो", "इमैनुएल कांट"],
    answer: "Montesquieu",
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "What does 'civil liberties' mean?",
    question_hi: "'नागरिक स्वतंत्रताएँ' का क्या अर्थ है?",
    options_en: ["Government powers", "Individual freedoms", "Judicial decisions", "Military control"],
    options_hi: ["सरकारी शक्तियाँ", "व्यक्तिगत स्वतंत्रताएँ", "न्यायिक निर्णय", "सैन्य नियंत्रण"],
    answer: "Individual freedoms",
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "Which of the following is a direct form of democracy?",
    question_hi: "निम्नलिखित में से कौन-सा प्रत्यक्ष लोकतंत्र का रूप है?",
    options_en: ["Parliamentary democracy", "Presidential democracy", "Referendum", "Representative democracy"],
    options_hi: ["संसदीय लोकतंत्र", "राष्ट्रपति प्रणाली लोकतंत्र", "जनमत संग्रह", "प्रतिनिधि लोकतंत्र"],
    answer: "Referendum",
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "The term 'majoritarianism' refers to:",
    question_hi: "'बहुमतवाद' का क्या अर्थ है?",
    options_en: ["Rule of majority", "Protection of minorities", "Power of the judiciary", "Constitutional supremacy"],
    options_hi: ["बहुमत का शासन", "अल्पसंख्यकों का संरक्षण", "न्यायपालिका की शक्ति", "संविधान की सर्वोच्चता"],
    answer: "Rule of majority",
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "Which of the following rights is a fundamental right in India?",
    question_hi: "भारत में निम्नलिखित में से कौन सा अधिकार मूलभूत अधिकार है?",
    options_en: ["Right to education", "Right to property", "Right to freedom of speech", "Right to work"],
    options_hi: ["शिक्षा का अधिकार", "संपत्ति का अधिकार", "स्वतंत्रता का अधिकार", "काम करने का अधिकार"],
    answer: "Right to freedom of speech",
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "The term 'Rule of Law' means:",
    question_hi: "'कानून का शासन' का क्या अर्थ है?",
    options_en: ["Law governs all", "Law governs only rulers", "Law is arbitrary", "Law is flexible"],
    options_hi: ["कानून सभी पर लागू होता है", "कानून केवल शासकों पर लागू होता है", "कानून मनमाना है", "कानून लचीला है"],
    answer: "Law governs all",
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "What is 'judicial review'?",
    question_hi: "'न्यायिक समीक्षा' क्या है?",
    options_en: ["Legislature reviews laws", "Courts check constitutionality of laws", "Executive reviews judiciary", "Public reviews government"],
    options_hi: ["विधायिका कानूनों की समीक्षा करती है", "अदालतें कानूनों की संवैधानिकता जांचती हैं", "कार्यपालिका न्यायपालिका की समीक्षा करती है", "जनता सरकार की समीक्षा करती है"],
    answer: "Courts check constitutionality of laws",
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "Which of the following is NOT a function of political parties?",
    question_hi: "निम्नलिखित में से कौन राजनीतिक दलों का कार्य नहीं है?",
    options_en: ["Contest elections", "Form government", "Make laws", "Manage the judiciary"],
    options_hi: ["चुनाव लड़ना", "सरकार बनाना", "कानून बनाना", "न्यायपालिका का प्रबंधन करना"],
    answer: "Manage the judiciary",
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "What is 'pluralism' in politics?",
    question_hi: "राजनीति में 'बहुलवाद' का क्या अर्थ है?",
    options_en: ["One party rule", "Multiple groups coexist", "Military rule", "No political parties"],
    options_hi: ["एक पार्टी का शासन", "अनेक समूहों का सह-अस्तित्व", "सैन्य शासन", "कोई राजनीतिक दल नहीं"],
    answer: "Multiple groups coexist",
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "Which of the following is an example of a political ideology?",
    question_hi: "निम्नलिखित में से कौन राजनीतिक विचारधारा का उदाहरण है?",
    options_en: ["Democracy", "Capitalism", "Judiciary", "Civil society"],
    options_hi: ["लोकतंत्र", "पूंजीवाद", "न्यायपालिका", "नागरिक समाज"],
    answer: "Capitalism",
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "The power to make foreign policy lies with the:",
    question_hi: "विदेश नीति बनाने का अधिकार किसके पास होता है?",
    options_en: ["Judiciary", "Executive", "Legislature", "Media"],
    options_hi: ["न्यायपालिका", "कार्यपालिका", "विधानपालिका", "मीडिया"],
    answer: "Executive",
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "What is the term for a political system where people elect representatives?",
    question_hi: "ऐसे राजनीतिक तंत्र के लिए क्या शब्द है जहाँ लोग प्रतिनिधि चुनते हैं?",
    options_en: ["Direct democracy", "Representative democracy", "Monarchy", "Dictatorship"],
    options_hi: ["प्रत्यक्ष लोकतंत्र", "प्रतिनिधि लोकतंत्र", "राजतंत्र", "तानाशाही"],
    answer: "Representative democracy",
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "Which of these is a characteristic of a constitutional monarchy?",
    question_hi: "संवैधानिक राजतंत्र की कौन सी विशेषता है?",
    options_en: ["King has absolute power", "Power limited by constitution", "No parliament", "Military controls government"],
    options_hi: ["राजा के पास पूर्ण शक्ति है", "शक्ति संविधान द्वारा सीमित है", "कोई संसद नहीं", "सैन्य सरकार नियंत्रित करता है"],
    answer: "Power limited by constitution",
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "Which political thinker wrote 'The Prince'?",
    question_hi: "किस राजनीतिक विचारक ने 'द प्रिंस' लिखा?",
    options_en: ["Niccolò Machiavelli", "John Locke", "Plato", "Karl Marx"],
    options_hi: ["निकोलो माकियावेली", "जॉन लॉक", "प्लेटो", "कार्ल मार्क्स"],
    answer: "Niccolò Machiavelli",
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "What is meant by the term 'political culture'?",
    question_hi: "'राजनीतिक संस्कृति' का क्या अर्थ है?",
    options_en: ["Shared attitudes and beliefs about politics", "Government structure", "Political parties", "Election process"],
    options_hi: ["राजनीति के प्रति साझा दृष्टिकोण और विश्वास", "सरकारी संरचना", "राजनीतिक दल", "चुनाव प्रक्रिया"],
    answer: "Shared attitudes and beliefs about politics",
    attempted: false,
    selected: null
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
