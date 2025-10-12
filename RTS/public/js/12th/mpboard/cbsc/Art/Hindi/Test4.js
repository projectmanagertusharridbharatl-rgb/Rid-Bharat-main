const questions = [
   {
    num: 1,
    question_hi: "प्रेमचंद का जन्म किस वर्ष हुआ था?",
    question_en: "In which year was Premchand born?",
    options_hi: ["1880", "1885", "1887", "1890"],
    options_en: ["1880", "1885", "1887", "1890"],
    answer_hi: "1880",
    answer_en: "1880",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_hi: "प्रेमचंद का असली नाम क्या था?",
    question_en: "What was Premchand's real name?",
    options_hi: ["ध्यान सिंह", "मुंशी धनपत राय", "गोपाल राय", "रामकृष्ण"],
    options_en: ["Dhyan Singh", "Munshi Dhanpat Rai", "Gopal Rai", "Ramkrishna"],
    answer_hi: "मुंशी धनपत राय",
    answer_en: "Munshi Dhanpat Rai",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_hi: "प्रेमचंद ने मुख्य रूप से कौन-सी भाषा में लिखा?",
    question_en: "In which language did Premchand primarily write?",
    options_hi: ["हिंदी", "उर्दू", "बंगाली", "मराठी"],
    options_en: ["Hindi", "Urdu", "Bengali", "Marathi"],
    answer_hi: "हिंदी",
    answer_en: "Hindi",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_hi: "प्रेमचंद की प्रसिद्ध कहानी 'गोदान' किस विषय पर आधारित है?",
    question_en: "What is the famous story 'Godaan' by Premchand about?",
    options_hi: ["किसान जीवन", "शहरी जीवन", "राजनीति", "धर्म"],
    options_en: ["Farmer's life", "Urban life", "Politics", "Religion"],
    answer_hi: "किसान जीवन",
    answer_en: "Farmer's life",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_hi: "'गोदान' प्रेमचंद का कौन-सा साहित्यिक प्रकार है?",
    question_en: "'Godaan' by Premchand is which literary form?",
    options_hi: ["उपन्यास", "कविता", "नाटक", "निबंध"],
    options_en: ["Novel", "Poem", "Play", "Essay"],
    answer_hi: "उपन्यास",
    answer_en: "Novel",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_hi: "प्रेमचंद ने अपनी कहानियों में मुख्य रूप से किस वर्ग के जीवन को दर्शाया?",
    question_en: "Which class of people did Premchand primarily depict in his stories?",
    options_hi: ["किसान और मजदूर", "शिक्षक", "व्यापारी", "राजनीतिज्ञ"],
    options_en: ["Farmers and laborers", "Teachers", "Merchants", "Politicians"],
    answer_hi: "किसान और मजदूर",
    answer_en: "Farmers and laborers",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_hi: "प्रेमचंद की पहली प्रकाशित कहानी कौन-सी थी?",
    question_en: "Which was Premchand's first published story?",
    options_hi: ["सेवासदन", "बुढ़िया की बेटियाँ", "पूस की रात", "दूसरी जाति"],
    options_en: ["Sevasadan", "Budhiya Ki Betiyan", "Poos Ki Raat", "Doosri Jati"],
    answer_hi: "सेवासदन",
    answer_en: "Sevasadan",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_hi: "प्रेमचंद ने कितनी भाषाओं में लिखा?",
    question_en: "In how many languages did Premchand write?",
    options_hi: ["दो", "तीन", "चार", "एक"],
    options_en: ["Two", "Three", "Four", "One"],
    answer_hi: "दो",
    answer_en: "Two",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_hi: "प्रेमचंद का उपन्यास 'गबन' किस विषय पर आधारित है?",
    question_en: "What is the novel 'Gaban' by Premchand about?",
    options_hi: ["लोभ और नैतिकता", "प्रेम कहानी", "राजनीति", "धर्म"],
    options_en: ["Greed and morality", "Love story", "Politics", "Religion"],
    answer_hi: "लोभ और नैतिकता",
    answer_en: "Greed and morality",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_hi: "प्रेमचंद का 'निर्मला' उपन्यास किस विषय पर आधारित है?",
    question_en: "What is Premchand's novel 'Nirmala' about?",
    options_hi: ["समाज में महिलाओं की स्थिति", "किसान जीवन", "धार्मिक कट्टरता", "शिक्षा"],
    options_en: ["Status of women in society", "Farmer life", "Religious fanaticism", "Education"],
    answer_hi: "समाज में महिलाओं की स्थिति",
    answer_en: "Status of women in society",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_hi: "प्रेमचंद का कौन-सा उपन्यास उनकी मृत्यु के बाद प्रकाशित हुआ?",
    question_en: "Which novel of Premchand was published after his death?",
    options_hi: ["गोदान", "निर्मला", "गबन", "रंगभूमि"],
    options_en: ["Godaan", "Nirmala", "Gaban", "Rangbhoomi"],
    answer_hi: "गोदान",
    answer_en: "Godaan",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_hi: "प्रेमचंद का प्रसिद्ध नाटक कौन-सा है?",
    question_en: "What is Premchand's famous play?",
    options_hi: ["रंगभूमि", "सेवासदन", "गोदान", "गबन"],
    options_en: ["Rangbhoomi", "Sevasadan", "Godaan", "Gaban"],
    answer_hi: "रंगभूमि",
    answer_en: "Rangbhoomi",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_hi: "प्रेमचंद की कहानियों में मुख्य विषय क्या हैं?",
    question_en: "What are the main themes of Premchand's stories?",
    options_hi: ["सामाजिक अन्याय", "प्रेम", "यात्रा", "धर्म"],
    options_en: ["Social injustice", "Love", "Travel", "Religion"],
    answer_hi: "सामाजिक अन्याय",
    answer_en: "Social injustice",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_hi: "प्रेमचंद ने अपने लेखन में किस समाज की आलोचना की?",
    question_en: "Premchand criticized which society in his writings?",
    options_hi: ["फीसदारी समाज", "जमींदार समाज", "शहरी समाज", "मजदूर समाज"],
    options_en: ["Feudal society", "Landlord society", "Urban society", "Labor society"],
    answer_hi: "जमींदार समाज",
    answer_en: "Landlord society",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_hi: "प्रेमचंद की कहानी 'पूस की रात' किस मौसम पर आधारित है?",
    question_en: "The story 'Poos Ki Raat' by Premchand is based on which season?",
    options_hi: ["सर्दी", "गर्मी", "बरसात", "वसंत"],
    options_en: ["Winter", "Summer", "Monsoon", "Spring"],
    answer_hi: "सर्दी",
    answer_en: "Winter",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_hi: "प्रेमचंद ने अपने लेखन में किसका पक्ष लिया?",
    question_en: "Whose side did Premchand take in his writings?",
    options_hi: ["गरीबों और दलितों", "जमींदारों", "सरकार", "धार्मिक नेता"],
    options_en: ["Poor and oppressed", "Landlords", "Government", "Religious leaders"],
    answer_hi: "गरीबों और दलितों",
    answer_en: "Poor and oppressed",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_hi: "प्रेमचंद का लेखन किस युग से संबंधित है?",
    question_en: "Premchand's writing belongs to which era?",
    options_hi: ["आधुनिक युग", "मध्य युग", "ब्रिटिश काल", "प्राचीन काल"],
    options_en: ["Modern era", "Medieval era", "British period", "Ancient period"],
    answer_hi: "ब्रिटिश काल",
    answer_en: "British period",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_hi: "प्रेमचंद की कहानी 'ईदगाह' किस विषय पर आधारित है?",
    question_en: "What is Premchand's story 'Eidgah' about?",
    options_hi: ["बच्चों की मासूमियत", "शिक्षा", "धर्म", "युद्ध"],
    options_en: ["Innocence of children", "Education", "Religion", "War"],
    answer_hi: "बच्चों की मासूमियत",
    answer_en: "Innocence of children",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_hi: "प्रेमचंद ने किस संस्था के लिए काम किया था?",
    question_en: "For which organization did Premchand work?",
    options_hi: ["अखबार", "शिक्षा विभाग", "सरकारी दफ्तर", "पुस्तकालय"],
    options_en: ["Newspaper", "Education department", "Government office", "Library"],
    answer_hi: "अखबार",
    answer_en: "Newspaper",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_hi: "प्रेमचंद की कहानियों में मुख्य रूप से कौन से सामाजिक मुद्दे उठाए गए?",
    question_en: "Which social issues are mainly raised in Premchand's stories?",
    options_hi: ["गरीबी और अन्याय", "धार्मिक पर्व", "शिक्षा", "यात्रा"],
    options_en: ["Poverty and injustice", "Religious festivals", "Education", "Travel"],
    answer_hi: "गरीबी और अन्याय",
    answer_en: "Poverty and injustice",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_hi: "प्रेमचंद की प्रसिद्ध कहानी 'कफन' किस विषय पर आधारित है?",
    question_en: "What is Premchand's famous story 'Kafan' about?",
    options_hi: ["गरीबी और मनुष्य का संघर्ष", "प्रेम", "धर्म", "परिवार"],
    options_en: ["Poverty and human struggle", "Love", "Religion", "Family"],
    answer_hi: "गरीबी और मनुष्य का संघर्ष",
    answer_en: "Poverty and human struggle",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_hi: "प्रेमचंद का साहित्यिक योगदान किस क्षेत्र में था?",
    question_en: "In which field was Premchand's literary contribution?",
    options_hi: ["हिंदी और उर्दू साहित्य", "अंग्रेजी साहित्य", "मराठी साहित्य", "बंगाली साहित्य"],
    options_en: ["Hindi and Urdu literature", "English literature", "Marathi literature", "Bengali literature"],
    answer_hi: "हिंदी और उर्दू साहित्य",
    answer_en: "Hindi and Urdu literature",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_hi: "प्रेमचंद ने अपने लेखन में किस विधा को प्रमुखता दी?",
    question_en: "Which genre did Premchand emphasize in his writings?",
    options_hi: ["कहानी और उपन्यास", "कविता", "नाटक", "निबंध"],
    options_en: ["Stories and novels", "Poetry", "Drama", "Essays"],
    answer_hi: "कहानी और उपन्यास",
    answer_en: "Stories and novels",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_hi: "प्रेमचंद का जन्म स्थान कहाँ था?",
    question_en: "Where was Premchand born?",
    options_hi: ["लमही, उत्तर प्रदेश", "लखनऊ", "प्रयागराज", "दिल्ली"],
    options_en: ["Lamhi, Uttar Pradesh", "Lucknow", "Prayagraj", "Delhi"],
    answer_hi: "लमही, उत्तर प्रदेश",
    answer_en: "Lamhi, Uttar Pradesh",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_hi: "प्रेमचंद के पिता का नाम क्या था?",
    question_en: "What was the name of Premchand's father?",
    options_hi: ["अधीर प्रसाद", "ध्यान सिंह", "रामकृष्ण", "गोपाल राय"],
    options_en: ["Adheer Prasad", "Dhyan Singh", "Ramkrishna", "Gopal Rai"],
    answer_hi: "अधीर प्रसाद",
    answer_en: "Adheer Prasad",
    attempted: false,
    selected: ""
  },
    {
    num: 26,
    question_hi: "प्रेमचंद का पहला उपन्यास कौन-सा था?",
    question_en: "What was Premchand's first novel?",
    options_hi: ["सेवासदन", "गोदान", "गबन", "निर्मला"],
    options_en: ["Sevasadan", "Godaan", "Gaban", "Nirmala"],
    answer_hi: "सेवासदन",
    answer_en: "Sevasadan",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_hi: "प्रेमचंद ने अपनी कहानियों में किस शैली का प्रयोग किया?",
    question_en: "Which style did Premchand use in his stories?",
    options_hi: ["यथार्थवाद", "काल्पनिक", "रोमांटिक", "अलंकारिक"],
    options_en: ["Realism", "Fictional", "Romantic", "Figurative"],
    answer_hi: "यथार्थवाद",
    answer_en: "Realism",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_hi: "प्रेमचंद के किस उपन्यास में गरीबी और सामाजिक अन्याय दिखाया गया है?",
    question_en: "In which novel of Premchand are poverty and social injustice depicted?",
    options_hi: ["गोदान", "निर्मला", "सेवासदन", "गबन"],
    options_en: ["Godaan", "Nirmala", "Sevasadan", "Gaban"],
    answer_hi: "गोदान",
    answer_en: "Godaan",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_hi: "प्रेमचंद के किस नाटक में किसानों के संघर्ष को दर्शाया गया है?",
    question_en: "Which play of Premchand depicts the struggle of farmers?",
    options_hi: ["रंगभूमि", "सेवासदन", "गोदान", "गबन"],
    options_en: ["Rangbhoomi", "Sevasadan", "Godaan", "Gaban"],
    answer_hi: "रंगभूमि",
    answer_en: "Rangbhoomi",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_hi: "प्रेमचंद के कितने उपन्यास प्रकाशित हुए?",
    question_en: "How many novels did Premchand publish?",
    options_hi: ["लगभग 14", "10", "5", "20"],
    options_en: ["About 14", "10", "5", "20"],
    answer_hi: "लगभग 14",
    answer_en: "About 14",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_hi: "प्रेमचंद की भाषा शैली कैसी थी?",
    question_en: "What was Premchand's language style?",
    options_hi: ["सरल और प्रभावशाली", "कठिन और जटिल", "शैलीहीन", "अत्यधिक अलंकारिक"],
    options_en: ["Simple and effective", "Difficult and complex", "Style-less", "Highly figurative"],
    answer_hi: "सरल और प्रभावशाली",
    answer_en: "Simple and effective",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_hi: "प्रेमचंद की कहानी 'बूढ़िया की बेटियां' का मुख्य विषय क्या है?",
    question_en: "What is the main theme of Premchand's story 'Budhiya Ki Betiyan'?",
    options_hi: ["गरीबी और संघर्ष", "प्रेम कहानी", "यात्रा", "शिक्षा"],
    options_en: ["Poverty and struggle", "Love story", "Travel", "Education"],
    answer_hi: "गरीबी और संघर्ष",
    answer_en: "Poverty and struggle",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_hi: "प्रेमचंद की कहानी 'पूस की रात' किस क्षेत्र की पृष्ठभूमि पर आधारित है?",
    question_en: "The story 'Poos Ki Raat' by Premchand is based on the background of which region?",
    options_hi: ["उत्तर भारत", "दक्षिण भारत", "पूर्वी भारत", "पश्चिम भारत"],
    options_en: ["North India", "South India", "East India", "West India"],
    answer_hi: "उत्तर भारत",
    answer_en: "North India",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_hi: "प्रेमचंद ने अपने लेखन में किसका विशेष ध्यान रखा?",
    question_en: "What did Premchand particularly focus on in his writings?",
    options_hi: ["सामाजिक मुद्दे", "प्रेम कहानी", "इतिहास", "धार्मिक ग्रंथ"],
    options_en: ["Social issues", "Love stories", "History", "Religious texts"],
    answer_hi: "सामाजिक मुद्दे",
    answer_en: "Social issues",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_hi: "प्रेमचंद ने अपने उपन्यासों में किस समाज की समस्याओं को दर्शाया?",
    question_en: "Premchand depicted problems of which society in his novels?",
    options_hi: ["ग्रामीण समाज", "शहरी समाज", "धार्मिक समाज", "व्यापारी समाज"],
    options_en: ["Rural society", "Urban society", "Religious society", "Merchant society"],
    answer_hi: "ग्रामीण समाज",
    answer_en: "Rural society",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_hi: "प्रेमचंद का निधन किस वर्ष हुआ था?",
    question_en: "In which year did Premchand pass away?",
    options_hi: ["1936", "1940", "1925", "1950"],
    options_en: ["1936", "1940", "1925", "1950"],
    answer_hi: "1936",
    answer_en: "1936",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_hi: "प्रेमचंद के किस कहानी में एक गरीब आदमी की शादी का चित्रण है?",
    question_en: "In which story of Premchand is the depiction of a poor man's marriage?",
    options_hi: ["दो बीघा जमीन", "कफन", "पूस की रात", "ईदगाह"],
    options_en: ["Do Bigha Zameen", "Kafan", "Poos Ki Raat", "Eidgah"],
    answer_hi: "दो बीघा जमीन",
    answer_en: "Do Bigha Zameen",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_hi: "प्रेमचंद ने किस राजनीतिक आंदोलन का समर्थन किया?",
    question_en: "Which political movement did Premchand support?",
    options_hi: ["स्वतंत्रता संग्राम", "पार्टिशन", "राजतंत्र", "ब्रिटिश शासन"],
    options_en: ["Freedom movement", "Partition", "Monarchy", "British rule"],
    answer_hi: "स्वतंत्रता संग्राम",
    answer_en: "Freedom movement",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_hi: "प्रेमचंद की कहानी 'दो बीघा जमीन' का विषय क्या है?",
    question_en: "What is the subject of Premchand's story 'Do Bigha Zameen'?",
    options_hi: ["जमीन और किसान का संघर्ष", "प्रेम", "शहर का जीवन", "धर्म"],
    options_en: ["Land and farmer's struggle", "Love", "City life", "Religion"],
    answer_hi: "जमीन और किसान का संघर्ष",
    answer_en: "Land and farmer's struggle",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_hi: "प्रेमचंद की लेखनी में सबसे प्रमुख विषय क्या था?",
    question_en: "What was the most prominent theme in Premchand's writing?",
    options_hi: ["सामाजिक असमानता", "प्रेम", "युद्ध", "परिवार"],
    options_en: ["Social inequality", "Love", "War", "Family"],
    answer_hi: "सामाजिक असमानता",
    answer_en: "Social inequality",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_hi: "प्रेमचंद की कहानी 'कफन' में मुख्य पात्र कौन हैं?",
    question_en: "Who are the main characters in Premchand's story 'Kafan'?",
    options_hi: ["बाबू और धीपू", "रामा और श्याम", "मोहन और सीता", "राम और लक्ष्मण"],
    options_en: ["Babu and Dhipu", "Rama and Shyam", "Mohan and Sita", "Ram and Lakshman"],
    answer_hi: "बाबू और धीपू",
    answer_en: "Babu and Dhipu",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_hi: "प्रेमचंद का असली नाम क्या था?",
    question_en: "What was Premchand's real name?",
    options_hi: ["दीनदयाल शर्मा", "मोहम्मद रफी", "मुंशी प्रेमचंद", "जयशंकर प्रसाद"],
    options_en: ["Dinandayal Sharma", "Mohammad Rafi", "Munshi Premchand", "Jaishankar Prasad"],
    answer_hi: "दीनदयाल शर्मा",
    answer_en: "Dinandayal Sharma",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_hi: "प्रेमचंद की कहानी 'ईदगाह' का मुख्य पात्र कौन है?",
    question_en: "Who is the main character in Premchand's story 'Eidgah'?",
    options_hi: ["हामिद", "रफी", "अली", "मोहसिन"],
    options_en: ["Hamid", "Rafi", "Ali", "Mohsin"],
    answer_hi: "हामिद",
    answer_en: "Hamid",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_hi: "प्रेमचंद का 'गोदान' उपन्यास किस विषय पर आधारित है?",
    question_en: "What is the novel 'Godaan' by Premchand based on?",
    options_hi: ["किसानों का जीवन", "शहरी जीवन", "युद्ध", "धार्मिक अनुष्ठान"],
    options_en: ["Life of farmers", "Urban life", "War", "Religious rituals"],
    answer_hi: "किसानों का जीवन",
    answer_en: "Life of farmers",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_hi: "प्रेमचंद की कहानियों में किस प्रकार के पात्र अधिक पाए जाते हैं?",
    question_en: "What kind of characters are mostly found in Premchand's stories?",
    options_hi: ["सामान्य गाँव के लोग", "राजा-महाराज", "विद्यार्थी", "व्यापारी"],
    options_en: ["Common villagers", "Kings and princes", "Students", "Merchants"],
    answer_hi: "सामान्य गाँव के लोग",
    answer_en: "Common villagers",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_hi: "प्रेमचंद की कहानी 'पूस की रात' का क्या मुख्य संदेश है?",
    question_en: "What is the main message of Premchand's story 'Poos Ki Raat'?",
    options_hi: ["जीवन की कठिनाइयाँ", "प्रेम और सौंदर्य", "शिक्षा का महत्व", "धार्मिक विश्वास"],
    options_en: ["Difficulties of life", "Love and beauty", "Importance of education", "Religious faith"],
    answer_hi: "जीवन की कठिनाइयाँ",
    answer_en: "Difficulties of life",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_hi: "प्रेमचंद की लेखनी में किस सामाजिक बुराई की आलोचना की गई है?",
    question_en: "Which social evil is criticized in Premchand's writings?",
    options_hi: ["दलित उत्पीड़न", "शिक्षा", "स्वच्छता", "पर्यावरण"],
    options_en: ["Dalit oppression", "Education", "Cleanliness", "Environment"],
    answer_hi: "दलित उत्पीड़न",
    answer_en: "Dalit oppression",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_hi: "प्रेमचंद ने किस भाषा में अधिकतर लेखन किया?",
    question_en: "In which language did Premchand mostly write?",
    options_hi: ["हिंदी", "उर्दू", "अंग्रेजी", "बंगाली"],
    options_en: ["Hindi", "Urdu", "English", "Bengali"],
    answer_hi: "हिंदी",
    answer_en: "Hindi",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_hi: "प्रेमचंद की कहानी 'कफन' किस विषय पर आधारित है?",
    question_en: "What is the story 'Kafan' by Premchand about?",
    options_hi: ["गरीबी और मानवीय स्वभाव", "प्रेम कहानी", "युद्ध", "परिवार"],
    options_en: ["Poverty and human nature", "Love story", "War", "Family"],
    answer_hi: "गरीबी और मानवीय स्वभाव",
    answer_en: "Poverty and human nature",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_hi: "प्रेमचंद के उपन्यास 'निर्मला' का विषय क्या है?",
    question_en: "What is the theme of Premchand's novel 'Nirmala'?",
    options_hi: ["बाल विवाह और महिला उत्पीड़न", "युद्ध", "प्रेम कहानी", "शहर का जीवन"],
    options_en: ["Child marriage and oppression of women", "War", "Love story", "City life"],
    answer_hi: "बाल विवाह और महिला उत्पीड़न",
    answer_en: "Child marriage and oppression of women",
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
