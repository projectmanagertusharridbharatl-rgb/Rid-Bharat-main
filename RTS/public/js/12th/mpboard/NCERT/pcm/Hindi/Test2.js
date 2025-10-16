const questions = [
{
    num: 1,
    question_hi: "कविता 'अग्नि परीक्षा' के लेखक कौन हैं?",
    question_en: "Who is the author of the poem 'Agni Pariksha'?",
    options_hi: ["हरिवंश राय बच्चन", "रामधारी सिंह दिनकर", "मैथिलीशरण गुप्त", "सूर्यकांत त्रिपाठी निराला"],
    options_en: ["Harivansh Rai Bachchan", "Ramdhari Singh Dinkar", "Maithili Sharan Gupt", "Suryakant Tripathi Nirala"],
    answer_hi: "रामधारी सिंह दिनकर",
    answer_en: "Ramdhari Singh Dinkar",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_hi: "'अग्नि परीक्षा' कविता का मुख्य विषय क्या है?",
    question_en: "What is the main theme of the poem 'Agni Pariksha'?",
    options_hi: ["राजनीति", "नारी गरिमा और आत्मसम्मान", "प्रकृति का चित्रण", "देशभक्ति"],
    options_en: ["Politics", "Women's dignity and self-respect", "Description of nature", "Patriotism"],
    answer_hi: "नारी गरिमा और आत्मसम्मान",
    answer_en: "Women's dignity and self-respect",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_hi: "‘अग्नि परीक्षा’ किस पात्र से संबंधित है?",
    question_en: "Which character is related to 'Agni Pariksha'?",
    options_hi: ["द्रौपदी", "सीता", "कुंती", "सावित्री"],
    options_en: ["Draupadi", "Sita", "Kunti", "Savitri"],
    answer_hi: "सीता",
    answer_en: "Sita",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_hi: "सीता को अग्नि परीक्षा क्यों देनी पड़ी?",
    question_en: "Why did Sita have to undergo the fire ordeal?",
    options_hi: ["राम का आदेश", "लक्ष्मण का निर्णय", "रावण की इच्छा", "हनुमान की सलाह"],
    options_en: ["Rama's command", "Lakshman's decision", "Ravana's wish", "Hanuman's advice"],
    answer_hi: "राम का आदेश",
    answer_en: "Rama's command",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_hi: "‘अग्नि परीक्षा’ कविता किस ग्रंथ की घटना पर आधारित है?",
    question_en: "‘Agni Pariksha’ is based on an event from which epic?",
    options_hi: ["रामायण", "महाभारत", "वेद", "उपनिषद"],
    options_en: ["Ramayana", "Mahabharata", "Vedas", "Upanishads"],
    answer_hi: "रामायण",
    answer_en: "Ramayana",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_hi: "रामधारी सिंह दिनकर को किस शैली के लिए जाना जाता है?",
    question_en: "Ramdhari Singh Dinkar is known for which style of writing?",
    options_hi: ["प्रेम कविता", "भक्ति कविता", "क्रांतिकारी कविता", "प्राकृतिक चित्रण"],
    options_en: ["Love poetry", "Devotional poetry", "Revolutionary poetry", "Nature depiction"],
    answer_hi: "क्रांतिकारी कविता",
    answer_en: "Revolutionary poetry",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_hi: "कविता में सीता का स्वर कैसा है?",
    question_en: "What is the tone of Sita in the poem?",
    options_hi: ["मौन", "क्रोधित", "संवेदनशील", "आत्मविश्वासी"],
    options_en: ["Silent", "Angry", "Sensitive", "Confident"],
    answer_hi: "आत्मविश्वासी",
    answer_en: "Confident",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_hi: "कविता में अग्नि किसका प्रतीक है?",
    question_en: "What does fire symbolize in the poem?",
    options_hi: ["भय", "शुद्धि", "प्रेम", "घृणा"],
    options_en: ["Fear", "Purification", "Love", "Hatred"],
    answer_hi: "शुद्धि",
    answer_en: "Purification",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_hi: "सीता ने राम के आदेश पर अग्नि परीक्षा क्यों दी?",
    question_en: "Why did Sita agree to the fire ordeal at Rama's command?",
    options_hi: ["स्वयं की शुद्धता सिद्ध करने", "राम से भय", "जनता के दबाव में", "दोषी होने के कारण"],
    options_en: ["To prove her purity", "Fear of Rama", "Public pressure", "Because she was guilty"],
    answer_hi: "स्वयं की शुद्धता सिद्ध करने",
    answer_en: "To prove her purity",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_hi: "कविता का उद्देश्य क्या है?",
    question_en: "What is the purpose of the poem?",
    options_hi: ["नारी की शक्ति को उजागर करना", "राम की निंदा करना", "पौराणिक कथा का वर्णन", "नाटक रचना करना"],
    options_en: ["To highlight women's power", "To criticize Rama", "To narrate a mythological tale", "To write a play"],
    answer_hi: "नारी की शक्ति को उजागर करना",
    answer_en: "To highlight women's power",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_hi: "‘अग्नि परीक्षा’ में कवि का दृष्टिकोण क्या है?",
    question_en: "What is the poet's perspective in 'Agni Pariksha'?",
    options_hi: ["नारी के प्रति सहानुभूति", "राम की निंदा", "सीता की आलोचना", "लक्ष्मण की प्रशंसा"],
    options_en: ["Sympathy for women", "Criticism of Rama", "Criticism of Sita", "Praise for Lakshman"],
    answer_hi: "नारी के प्रति सहानुभूति",
    answer_en: "Sympathy for women",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_hi: "कविता में सीता किसका प्रतीक है?",
    question_en: "Sita is a symbol of what in the poem?",
    options_hi: ["त्याग", "नारी शक्ति", "क्रोध", "भ्रम"],
    options_en: ["Sacrifice", "Women's power", "Anger", "Illusion"],
    answer_hi: "नारी शक्ति",
    answer_en: "Women's power",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_hi: "राम का सीता से अग्नि परीक्षा की माँग करना किस बात का द्योतक है?",
    question_en: "What does Rama's demand for Sita's trial by fire signify?",
    options_hi: ["विश्वास", "न्याय", "संदेह", "प्रेम"],
    options_en: ["Trust", "Justice", "Doubt", "Love"],
    answer_hi: "संदेह",
    answer_en: "Doubt",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_hi: "‘अग्नि परीक्षा’ किस धार्मिक ग्रंथ की घटना पर आधारित है?",
    question_en: "‘Agni Pariksha’ is based on an episode from which religious epic?",
    options_hi: ["रामायण", "महाभारत", "वेद", "भागवत पुराण"],
    options_en: ["Ramayana", "Mahabharata", "Vedas", "Bhagavata Purana"],
    answer_hi: "रामायण",
    answer_en: "Ramayana",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_hi: "कविता में किसके द्वारा सीता की परीक्षा ली जाती है?",
    question_en: "Who conducts Sita's trial in the poem?",
    options_hi: ["लक्ष्मण", "राम", "अग्निदेव", "जनता"],
    options_en: ["Lakshman", "Rama", "Agni Dev", "Public"],
    answer_hi: "अग्निदेव",
    answer_en: "Agni Dev",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_hi: "राम का कौन-सा गुण कविता में आलोचना का विषय बनता है?",
    question_en: "Which quality of Rama becomes a subject of criticism in the poem?",
    options_hi: ["करुणा", "संशय", "धैर्य", "बलिदान"],
    options_en: ["Compassion", "Doubt", "Patience", "Sacrifice"],
    answer_hi: "संशय",
    answer_en: "Doubt",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_hi: "दिनकर किस प्रकार की कविता लिखने के लिए प्रसिद्ध थे?",
    question_en: "For what type of poetry is Dinkar known?",
    options_hi: ["प्रेम कविता", "क्रांतिकारी कविता", "प्रकृति कविता", "भक्ति कविता"],
    options_en: ["Love poetry", "Revolutionary poetry", "Nature poetry", "Devotional poetry"],
    answer_hi: "क्रांतिकारी कविता",
    answer_en: "Revolutionary poetry",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_hi: "‘अग्नि परीक्षा’ कविता में कौन-सी भावना प्रमुख है?",
    question_en: "Which emotion dominates the poem 'Agni Pariksha'?",
    options_hi: ["क्रोध", "सहानुभूति", "प्रेम", "घृणा"],
    options_en: ["Anger", "Sympathy", "Love", "Hatred"],
    answer_hi: "सहानुभूति",
    answer_en: "Sympathy",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_hi: "‘अग्नि परीक्षा’ कविता किस संग्रह में संकलित है?",
    question_en: "In which collection is the poem 'Agni Pariksha' included?",
    options_hi: ["रश्मिरथी", "परशुराम की प्रतीक्षा", "संस्कृति के चार अध्याय", "उर्वशी"],
    options_en: ["Rashmirathi", "Parshuram Ki Pratiksha", "Sanskriti Ke Char Adhyay", "Urvashi"],
    answer_hi: "परशुराम की प्रतीक्षा",
    answer_en: "Parshuram Ki Pratiksha",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_hi: "‘अग्नि परीक्षा’ कविता में सीता किन शब्दों में उत्तर देती हैं?",
    question_en: "How does Sita respond in the poem 'Agni Pariksha'?",
    options_hi: ["क्रोध में", "विनम्रता से", "मौन रहकर", "तर्क और दृढ़ता से"],
    options_en: ["With anger", "With humility", "Silently", "With reason and firmness"],
    answer_hi: "तर्क और दृढ़ता से",
    answer_en: "With reason and firmness",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_hi: "कविता में कौन सा प्रतीक नारी शक्ति को दर्शाता है?",
    question_en: "Which symbol in the poem represents woman power?",
    options_hi: ["अग्नि", "जल", "वायु", "पृथ्वी"],
    options_en: ["Fire", "Water", "Air", "Earth"],
    answer_hi: "अग्नि",
    answer_en: "Fire",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_hi: "दिनकर का साहित्य किस युग से संबंधित है?",
    question_en: "To which era does Dinkar's literature belong?",
    options_hi: ["आधुनिक युग", "रीतिकाल", "भक्तिकाल", "प्राचीन युग"],
    options_en: ["Modern era", "Riti Kaal", "Bhakti Kaal", "Ancient era"],
    answer_hi: "आधुनिक युग",
    answer_en: "Modern era",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_hi: "कविता का शीर्षक 'अग्नि परीक्षा' किसका प्रतीक है?",
    question_en: "What does the title 'Agni Pariksha' symbolize?",
    options_hi: ["संघर्ष", "त्याग", "परीक्षा", "प्रेम"],
    options_en: ["Struggle", "Sacrifice", "Trial", "Love"],
    answer_hi: "परीक्षा",
    answer_en: "Trial",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_hi: "राम द्वारा सीता पर संदेह करना किस सामाजिक समस्या को दर्शाता है?",
    question_en: "Rama's doubt on Sita reflects which social issue?",
    options_hi: ["नारी अविश्वास", "शोषण", "जातिवाद", "अशिक्षा"],
    options_en: ["Distrust on women", "Exploitation", "Casteism", "Illiteracy"],
    answer_hi: "नारी अविश्वास",
    answer_en: "Distrust on women",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_hi: "‘अग्नि परीक्षा’ कविता का स्वर कैसा है?",
    question_en: "What is the tone of the poem 'Agni Pariksha'?",
    options_hi: ["आक्रोशपूर्ण", "विनोदी", "करुणामय", "उदासीन"],
    options_en: ["Indignant", "Humorous", "Compassionate", "Apathetic"],
    answer_hi: "आक्रोशपूर्ण",
    answer_en: "Indignant",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_hi: "कविता में सीता की आत्मगौरव की भावना किस पंक्ति में स्पष्ट होती है?",
    question_en: "In which line of the poem is Sita's sense of self-respect clearly expressed?",
    options_hi: ["मैं अबला नहीं हूँ", "किंचित भी नहीं दया माँगी", "मैं राम की दासी नहीं", "मुझे अग्नि से डर नहीं"],
    options_en: ["I am not helpless", "I begged no mercy", "I am not Rama's servant", "I do not fear fire"],
    answer_hi: "किंचित भी नहीं दया माँगी",
    answer_en: "I begged no mercy",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_hi: "सीता के मन में किसके प्रति विरोध की भावना है?",
    question_en: "Against whom does Sita feel rebellious in the poem?",
    options_hi: ["रावण", "राम", "लक्ष्मण", "अग्निदेव"],
    options_en: ["Ravana", "Rama", "Lakshman", "Agni Dev"],
    answer_hi: "राम",
    answer_en: "Rama",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_hi: "‘अग्नि परीक्षा’ कविता किस साहित्यिक काल से संबंधित है?",
    question_en: "Which literary period does the poem 'Agni Pariksha' belong to?",
    options_hi: ["आधुनिक", "रीतिकाल", "भक्ति काल", "छायावाद"],
    options_en: ["Modern", "Riti Kaal", "Bhakti Kaal", "Chhayavaad"],
    answer_hi: "आधुनिक",
    answer_en: "Modern",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_hi: "सीता की अग्नि परीक्षा किस प्रकार की सामाजिक मानसिकता पर प्रश्न उठाती है?",
    question_en: "Sita's fire ordeal questions which type of social mindset?",
    options_hi: ["पितृसत्तात्मक समाज", "लोकतांत्रिक समाज", "समाजवाद", "आर्थिक असमानता"],
    options_en: ["Patriarchal society", "Democratic society", "Socialism", "Economic inequality"],
    answer_hi: "पितृसत्तात्मक समाज",
    answer_en: "Patriarchal society",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_hi: "‘अग्नि परीक्षा’ कविता किस शैली में लिखी गई है?",
    question_en: "In which style is the poem 'Agni Pariksha' written?",
    options_hi: ["प्रबोधनात्मक", "हास्यात्मक", "आलेखात्मक", "वर्णनात्मक"],
    options_en: ["Didactic", "Humorous", "Descriptive essay", "Narrative"],
    answer_hi: "प्रबोधनात्मक",
    answer_en: "Didactic",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_hi: "कविता में अग्नि को किसका प्रतीक माना गया है?",
    question_en: "What does fire symbolize in the poem?",
    options_hi: ["दण्ड", "शुद्धि", "मरण", "प्रेम"],
    options_en: ["Punishment", "Purity", "Death", "Love"],
    answer_hi: "शुद्धि",
    answer_en: "Purity",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_hi: "कविता में राम के प्रति सीता का स्वर कैसा है?",
    question_en: "What is Sita's tone toward Rama in the poem?",
    options_hi: ["विनम्र", "आक्रोशित", "संकोचयुक्त", "सम्मानपूर्ण"],
    options_en: ["Humble", "Angry", "Hesitant", "Respectful"],
    answer_hi: "आक्रोशित",
    answer_en: "Angry",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_hi: "‘अग्नि परीक्षा’ कविता में किसने अपने आत्मबल का परिचय दिया है?",
    question_en: "Who has demonstrated self-power in the poem 'Agni Pariksha'?",
    options_hi: ["राम", "लक्ष्मण", "सीता", "रावण"],
    options_en: ["Rama", "Lakshman", "Sita", "Ravana"],
    answer_hi: "सीता",
    answer_en: "Sita",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_hi: "‘अग्नि परीक्षा’ कविता में कौन-सा भाव प्रमुख है?",
    question_en: "Which emotion dominates the poem 'Agni Pariksha'?",
    options_hi: ["करुणा", "क्रोध", "विरोध", "प्रेम"],
    options_en: ["Compassion", "Anger", "Rebellion", "Love"],
    answer_hi: "विरोध",
    answer_en: "Rebellion",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_hi: "रामधारी सिंह दिनकर को किस उपाधि से नवाजा गया था?",
    question_en: "What title was given to Ramdhari Singh Dinkar?",
    options_hi: ["कविराज", "राष्ट्रकवि", "साहित्यश्री", "कविसम्राट"],
    options_en: ["Kaviraj", "Rashtrakavi", "Sahityashri", "Kavisamrat"],
    answer_hi: "राष्ट्रकवि",
    answer_en: "Rashtrakavi",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_hi: "सीता का अग्नि में प्रवेश क्या दर्शाता है?",
    question_en: "What does Sita's entry into the fire represent?",
    options_hi: ["भय", "त्याग", "आत्मविश्वास", "न्याय की मांग"],
    options_en: ["Fear", "Sacrifice", "Self-confidence", "Demand for justice"],
    answer_hi: "आत्मविश्वास",
    answer_en: "Self-confidence",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_hi: "‘अग्नि परीक्षा’ में किस सामाजिक विसंगति की आलोचना की गई है?",
    question_en: "Which social flaw is criticized in 'Agni Pariksha'?",
    options_hi: ["अशिक्षा", "नारी पर अत्याचार", "भ्रष्टाचार", "आलस्य"],
    options_en: ["Illiteracy", "Oppression of women", "Corruption", "Laziness"],
    answer_hi: "नारी पर अत्याचार",
    answer_en: "Oppression of women",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_hi: "सीता की कौन-सी बात कविता में प्रेरणादायक है?",
    question_en: "Which aspect of Sita's character is inspiring in the poem?",
    options_hi: ["नम्रता", "त्याग", "सहनशीलता", "आत्मसम्मान"],
    options_en: ["Humility", "Sacrifice", "Tolerance", "Self-respect"],
    answer_hi: "आत्मसम्मान",
    answer_en: "Self-respect",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_hi: "‘अग्नि परीक्षा’ कविता में किसकी न्यायप्रियता पर प्रश्नचिह्न है?",
    question_en: "Whose sense of justice is questioned in the poem 'Agni Pariksha'?",
    options_hi: ["लक्ष्मण", "हनुमान", "राम", "रावण"],
    options_en: ["Lakshman", "Hanuman", "Rama", "Ravana"],
    answer_hi: "राम",
    answer_en: "Rama",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_hi: "‘अग्नि परीक्षा’ कविता का स्वर है—",
    question_en: "The tone of the poem 'Agni Pariksha' is—",
    options_hi: ["आक्रोशपूर्ण", "विनोदी", "दुखद", "उपेक्षात्मक"],
    options_en: ["Angry", "Humorous", "Tragic", "Neglectful"],
    answer_hi: "आक्रोशपूर्ण",
    answer_en: "Angry",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_hi: "राम द्वारा अग्नि परीक्षा की माँग किस भावना को दर्शाती है?",
    question_en: "What emotion is reflected in Rama's demand for the fire ordeal?",
    options_hi: ["प्रेम", "द्वेष", "अविश्वास", "आस्था"],
    options_en: ["Love", "Hatred", "Distrust", "Faith"],
    answer_hi: "अविश्वास",
    answer_en: "Distrust",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_hi: "‘अग्नि परीक्षा’ कविता किस रूप में एक उदाहरण है?",
    question_en: "What kind of example is the poem 'Agni Pariksha'?",
    options_hi: ["पौराणिक नारी विरोध", "नारी सम्मान की रक्षा", "अंधविश्वास का समर्थन", "राजनीतिक विचार"],
    options_en: ["Mythological misogyny", "Protection of women's dignity", "Support of superstition", "Political thought"],
    answer_hi: "नारी सम्मान की रक्षा",
    answer_en: "Protection of women's dignity",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_hi: "रामधारी सिंह दिनकर किस राज्य से संबंधित थे?",
    question_en: "Ramdhari Singh Dinkar belonged to which state?",
    options_hi: ["उत्तर प्रदेश", "मध्य प्रदेश", "बिहार", "राजस्थान"],
    options_en: ["Uttar Pradesh", "Madhya Pradesh", "Bihar", "Rajasthan"],
    answer_hi: "बिहार",
    answer_en: "Bihar",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_hi: "सीता का चरित्र किस प्रकार प्रस्तुत हुआ है?",
    question_en: "How is Sita's character portrayed in the poem?",
    options_hi: ["कमज़ोर", "निर्भर", "शक्तिशाली", "चंचल"],
    options_en: ["Weak", "Dependent", "Powerful", "Fickle"],
    answer_hi: "शक्तिशाली",
    answer_en: "Powerful",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_hi: "कविता में कौन-सी पंक्ति नारी गरिमा को दर्शाती है?",
    question_en: "Which line in the poem reflects women's dignity?",
    options_hi: ["मैं पवित्रता की अग्नि हूँ", "मैं एक नारी हूँ", "मैं चुप रहूँगी", "मैं राम की प्रतीक्षा करूँगी"],
    options_en: ["I am the fire of purity", "I am a woman", "I will stay silent", "I will wait for Rama"],
    answer_hi: "मैं पवित्रता की अग्नि हूँ",
    answer_en: "I am the fire of purity",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_hi: "कविता किस प्रकार की प्रेरणा देती है?",
    question_en: "What kind of inspiration does the poem provide?",
    options_hi: ["साहस की", "समर्पण की", "त्याग की", "आक्रोश की"],
    options_en: ["Courage", "Devotion", "Sacrifice", "Anger"],
    answer_hi: "साहस की",
    answer_en: "Courage",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_hi: "‘अग्नि परीक्षा’ कविता किसके दृष्टिकोण से है?",
    question_en: "From whose perspective is the poem 'Agni Pariksha' written?",
    options_hi: ["राम", "रावण", "सीता", "लक्ष्मण"],
    options_en: ["Rama", "Ravana", "Sita", "Lakshman"],
    answer_hi: "सीता",
    answer_en: "Sita",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_hi: "रामधारी सिंह दिनकर की कविता में कौन-सा तत्व प्रमुख होता है?",
    question_en: "Which element is dominant in Dinkar’s poetry?",
    options_hi: ["क्रांति", "प्रेम", "भक्ति", "विरह"],
    options_en: ["Revolution", "Love", "Devotion", "Separation"],
    answer_hi: "क्रांति",
    answer_en: "Revolution",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_hi: "कविता किस सामाजिक सुधार की प्रेरणा देती है?",
    question_en: "What social reform does the poem inspire?",
    options_hi: ["शिक्षा", "नारी सशक्तिकरण", "आर्थिक विकास", "धार्मिक सुधार"],
    options_en: ["Education", "Women empowerment", "Economic development", "Religious reform"],
    answer_hi: "नारी सशक्तिकरण",
    answer_en: "Women empowerment",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_hi: "‘अग्नि परीक्षा’ कविता में किस रूप में विरोध व्यक्त किया गया है?",
    question_en: "In what form is protest expressed in the poem 'Agni Pariksha'?",
    options_hi: ["शब्दों के माध्यम से", "हिंसा के माध्यम से", "तर्क के माध्यम से", "प्रार्थना के माध्यम से"],
    options_en: ["Through words", "Through violence", "Through reasoning", "Through prayer"],
    answer_hi: "शब्दों के माध्यम से",
    answer_en: "Through words",
    attempted: false,
    selected: ""
  }
      
 // Continue adding more questions up to 30
];




// ========================== GLOBAL VARIABLES ==========================
let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
let timerInterval;

// ========================== QUIZ LOGIC ==========================
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

// ========================== QUESTION ATTEMPT LOGIC ==========================
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ========================== NAVIGATION CONTROLS ==========================
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

// ========================== SUBMIT & SCORE ==========================
function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0, notAttempted = 0, score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(`Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`);
}

// ========================== TIMER FUNCTION ==========================
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

// ========================== QUESTION NAVIGATION UI ==========================
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color};' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ========================== CAMERA & MOVEMENT LOGIC ==========================
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
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

    // ========================== RESIZE HANDLE ==========================
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

    // ========================== DRAG LOGIC ==========================
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

    // ========================== RESIZE LOGIC ==========================
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

    // ========================== CAMERA STREAM ==========================
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

// ========================== MOVEMENT DETECTION ==========================
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
                    alert("⚠️ Alert 1: Face not moving");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head not moving");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

// ========================== RESTART TEST ==========================
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

// ========================== PAGE LOAD ==========================
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); 
};
