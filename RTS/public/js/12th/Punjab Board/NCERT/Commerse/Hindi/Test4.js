const questions = [
  {
    num: 1,
    question_hi: "प्रेमचंद का जन्म किस वर्ष हुआ था?",
    question_en: "In which year was Premchand born?",
    options_hi: ["1880", "1885", "1887", "1890"],
    options_en: ["1880", "1885", "1887", "1890"],
    answer: "1880",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_hi: "प्रेमचंद का मूल नाम क्या था?",
    question_en: "What was Premchand's real name?",
    options_hi: ["धनपत राय", "रामकुमार", "सुरेश चंद्र", "गोपाल राय"],
    options_en: ["Dhanpat Rai", "Ramkumar", "Suresh Chandra", "Gopal Rai"],
    answer: "धनपत राय",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_hi: "प्रेमचंद को हिंदी साहित्य में किस उपाधि से सम्मानित किया गया?",
    question_en: "What title was Premchand honored with in Hindi literature?",
    options_hi: ["उपन्यास सम्राट", "कहानी सम्राट", "कविता सम्राट", "गद्य सम्राट"],
    options_en: ["Emperor of Novels", "Emperor of Stories", "Emperor of Poetry", "Emperor of Prose"],
    answer: "उपन्यास सम्राट",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_hi: "प्रेमचंद की पहली कहानी कौन सी थी?",
    question_en: "Which was Premchand's first story?",
    options_hi: ["पंच परमेश्वर", "सौत", "सोज़े वतन", "ईदगाह"],
    options_en: ["Panch Parmeshwar", "Saut", "Soz-e-Watan", "Eidgah"],
    answer: "सोज़े वतन",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_hi: "प्रेमचंद ने 'सोज़े वतन' को किस नाम से प्रकाशित किया था?",
    question_en: "Under what name did Premchand publish 'Soz-e-Watan'?",
    options_hi: ["प्रेमचंद", "नवाब राय", "धनपत राय", "रामप्रसाद"],
    options_en: ["Premchand", "Nawab Rai", "Dhanpat Rai", "Ramprasad"],
    answer: "नवाब राय",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_hi: "प्रेमचंद की प्रसिद्ध कहानी 'ईदगाह' का मुख्य पात्र कौन है?",
    question_en: "Who is the main character of Premchand's famous story 'Eidgah'?",
    options_hi: ["ग़फ़ूर", "हामिद", "अली", "रहमान"],
    options_en: ["Ghafoor", "Hamid", "Ali", "Rahman"],
    answer: "हामिद",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_hi: "प्रेमचंद की कहानियों में किस वर्ग के जीवन का चित्रण अधिक मिलता है?",
    question_en: "Which class of life is mostly depicted in Premchand's stories?",
    options_hi: ["अमीर वर्ग", "मध्यम वर्ग", "श्रमिक वर्ग", "ग्रामीण गरीब वर्ग"],
    options_en: ["Rich class", "Middle class", "Working class", "Rural poor class"],
    answer: "ग्रामीण गरीब वर्ग",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_hi: "प्रेमचंद ने किस पत्रिका का संपादन किया था?",
    question_en: "Which magazine did Premchand edit?",
    options_hi: ["सरस्वती", "माधुरी", "हंस", "नवजीवन"],
    options_en: ["Saraswati", "Madhuri", "Hans", "Navjeevan"],
    answer: "हंस",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_hi: "‘पूस की रात’ कहानी में मुख्य पात्र कौन है?",
    question_en: "Who is the main character in the story 'Poos Ki Raat'?",
    options_hi: ["होरी", "गोबर", "हल्कू", "समरथ"],
    options_en: ["Hori", "Gobbar", "Halku", "Samrath"],
    answer: "हल्कू",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_hi: "प्रेमचंद को क्या उपाधि दी गई थी?",
    question_en: "What title was given to Premchand?",
    options_hi: ["उपन्यास सम्राट", "कथा सम्राट", "कविता सम्राट", "कहानी राजा"],
    options_en: ["Emperor of Novels", "Emperor of Stories", "Emperor of Poetry", "Story King"],
    answer: "उपन्यास सम्राट",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_hi: "प्रेमचंद का असली नाम क्या था?",
    question_en: "What was Premchand's real name?",
    options_hi: ["धनपत राय", "रामचंद्र", "किशोरीलाल", "श्यामलाल"],
    options_en: ["Dhanpat Rai", "Ramchandra", "Kishorilal", "Shyamlal"],
    answer: "धनपत राय",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_hi: "'ईदगाह' कहानी में हामिद अपनी दादी के लिए क्या खरीदता है?",
    question_en: "What does Hamid buy for his grandmother in 'Eidgah'?",
    options_hi: ["खिलौना", "चिमटा", "मिठाई", "जूता"],
    options_en: ["Toy", "Tongs", "Sweets", "Shoes"],
    answer: "चिमटा",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_hi: "प्रेमचंद किस भाषा में पहले लिखते थे?",
    question_en: "Which language did Premchand initially write in?",
    options_hi: ["हिंदी", "उर्दू", "अवधी", "फारसी"],
    options_en: ["Hindi", "Urdu", "Awadhi", "Persian"],
    answer: "उर्दू",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_hi: "प्रेमचंद के उपन्यास 'गोदान' का मुख्य पात्र कौन है?",
    question_en: "Who is the main character in Premchand's novel 'Godaan'?",
    options_hi: ["धनिया", "होरी", "गोबर", "झुनिया"],
    options_en: ["Dhanya", "Hori", "Gobbar", "Jhunia"],
    answer: "होरी",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_hi: "प्रेमचंद के साहित्य में किस प्रकार की दृष्टि अधिक दिखती है?",
    question_en: "What kind of perspective is mostly seen in Premchand's literature?",
    options_hi: ["आध्यात्मिक", "यथार्थवादी", "रोमांटिक", "कल्पनात्मक"],
    options_en: ["Spiritual", "Realistic", "Romantic", "Imaginative"],
    answer: "यथार्थवादी",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_hi: "‘नमक का दारोगा’ कहानी में दारोगा कौन है?",
    question_en: "Who is the inspector in the story 'Namak Ka Daroga'?",
    options_hi: ["मुंशी वंशीधर", "गोपालदास", "गंगाधर", "श्यामलाल"],
    options_en: ["Munshi Vanshidhar", "Gopaldas", "Gangadhar", "Shyamlal"],
    answer: "मुंशी वंशीधर",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_hi: "प्रेमचंद की कहानियों का प्रमुख विषय क्या होता है?",
    question_en: "What is the main theme of Premchand's stories?",
    options_hi: ["प्रकृति", "भक्ति", "सामाजिक न्याय", "ऐतिहासिक घटनाएँ"],
    options_en: ["Nature", "Devotion", "Social justice", "Historical events"],
    answer: "सामाजिक न्याय",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_hi: "प्रेमचंद का साहित्य किस वर्ग को प्रमुखता देता है?",
    question_en: "Which class is prominently featured in Premchand’s literature?",
    options_hi: ["शहरी वर्ग", "अभिजात्य वर्ग", "ग्रामीण वर्ग", "विदेशी वर्ग"],
    options_en: ["Urban class", "Elite class", "Rural class", "Foreign class"],
    answer: "ग्रामीण वर्ग",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_hi: "‘कफन’ कहानी किस लेखक की है?",
    question_en: "Who is the author of the story 'Kafan'?",
    options_hi: ["जयशंकर प्रसाद", "महादेवी वर्मा", "प्रेमचंद", "हरिवंश राय बच्चन"],
    options_en: ["Jaishankar Prasad", "Mahadevi Verma", "Premchand", "Harivansh Rai Bachchan"],
    answer: "प्रेमचंद",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_hi: "'कफन' कहानी में बाप-बेटे का नाम क्या है?",
    question_en: "What are the names of father and son in 'Kafan'?",
    options_hi: ["होरी-गोबर", "घीसू-माधव", "हामिद-अली", "धनिया-गोबर"],
    options_en: ["Hori-Gobbar", "Ghasu-Madhav", "Hamid-Ali", "Dhanya-Gobbar"],
    answer: "घीसू-माधव",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_hi: "प्रेमचंद की कहानियों का प्रमुख उद्देश्य क्या था?",
    question_en: "What was the main purpose of Premchand’s stories?",
    options_hi: ["मनोरंजन", "नैतिक शिक्षा", "समाज सुधार", "इतिहास वर्णन"],
    options_en: ["Entertainment", "Moral education", "Social reform", "Historical narration"],
    answer: "समाज सुधार",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_hi: "प्रेमचंद ने अपनी कहानियों में किसकी पीड़ा को उजागर किया है?",
    question_en: "Whose suffering has Premchand highlighted in his stories?",
    options_hi: ["राजाओं की", "धर्मगुरुओं की", "गरीबों और किसानों की", "सैनिकों की"],
    options_en: ["Kings", "Religious leaders", "Poor and farmers", "Soldiers"],
    answer: "गरीबों और किसानों की",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_hi: "‘गोदान’ उपन्यास किस विषय पर आधारित है?",
    question_en: "What is the novel 'Godaan' based on?",
    options_hi: ["धार्मिक मुद्दे", "कृषक जीवन और सामाजिक विषमता", "प्रेम कहानी", "राजनीति"],
    options_en: ["Religious issues", "Farmer’s life and social inequality", "Love story", "Politics"],
    answer: "कृषक जीवन और सामाजिक विषमता",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_hi: "प्रेमचंद की प्रारंभिक रचनाएँ किस नाम से प्रकाशित होती थीं?",
    question_en: "Under what name were Premchand's early works published?",
    options_hi: ["नवजागरण", "धनपत राय", "नवाब राय", "सच्चा लेखक"],
    options_en: ["Navjagran", "Dhanpat Rai", "Nawab Rai", "True Writer"],
    answer: "नवाब राय",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_hi: "प्रेमचंद का निधन किस वर्ष हुआ?",
    question_en: "In which year did Premchand pass away?",
    options_hi: ["1930", "1936", "1940", "1945"],
    options_en: ["1930", "1936", "1940", "1945"],
    answer: "1936",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_hi: "'गोदान' उपन्यास का प्रकाशन वर्ष क्या है?",
    question_en: "In which year was the novel 'Godaan' published?",
    options_hi: ["1932", "1935", "1936", "1938"],
    options_en: ["1932", "1935", "1936", "1938"],
    answer: "1936",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_hi: "प्रेमचंद ने किस पेशे से अपनी नौकरी की शुरुआत की थी?",
    question_en: "What profession did Premchand begin his career in?",
    options_hi: ["वकील", "शिक्षक", "पत्रकार", "डाक्टर"],
    options_en: ["Lawyer", "Teacher", "Journalist", "Doctor"],
    answer: "शिक्षक",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_hi: "'सेवा सदन' उपन्यास का प्रमुख विषय क्या है?",
    question_en: "What is the main theme of the novel 'Sevasadan'?",
    options_hi: ["राजनीति", "धार्मिक संघर्ष", "नारी उत्थान", "विद्रोह"],
    options_en: ["Politics", "Religious conflict", "Women's upliftment", "Rebellion"],
    answer: "नारी उत्थान",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_hi: "प्रेमचंद की कहानियों में किस भाषा की सादगी दिखाई देती है?",
    question_en: "Which language's simplicity is reflected in Premchand's stories?",
    options_hi: ["संस्कृत", "फारसी", "हिंदी-उर्दू मिश्रित", "अवधी"],
    options_en: ["Sanskrit", "Persian", "Mixed Hindi-Urdu", "Awadhi"],
    answer: "हिंदी-उर्दू मिश्रित",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_hi: "प्रेमचंद ने ‘हंस’ पत्रिका का संपादन कब प्रारंभ किया?",
    question_en: "When did Premchand begin editing the 'Hans' magazine?",
    options_hi: ["1925", "1930", "1932", "1936"],
    options_en: ["1925", "1930", "1932", "1936"],
    answer: "1930",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_hi: "प्रेमचंद की कौन सी रचना एक नाटक है?",
    question_en: "Which of Premchand’s works is a play?",
    options_hi: ["सत्य हरिश्चंद्र", "कर्मभूमि", "गबन", "प्रेमाश्रम"],
    options_en: ["Satya Harishchandra", "Karmabhoomi", "Gaban", "Premashram"],
    answer: "सत्य हरिश्चंद्र",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_hi: "प्रेमचंद का कौन सा उपन्यास किसान जीवन पर आधारित नहीं है?",
    question_en: "Which of Premchand’s novels is *not* based on the life of farmers?",
    options_hi: ["गोदान", "प्रेमाश्रम", "गबन", "कर्मभूमि"],
    options_en: ["Godaan", "Premashram", "Gaban", "Karmabhoomi"],
    answer: "गबन",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_hi: "‘गबन’ उपन्यास का नायक कौन है?",
    question_en: "Who is the protagonist of the novel 'Gaban'?",
    options_hi: ["होरी", "रमेश", "रमाकांत", "शिवनारायण"],
    options_en: ["Hori", "Ramesh", "Ramakant", "Shivnarayan"],
    answer: "रमाकांत",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_hi: "'प्रेमाश्रम' उपन्यास किस पृष्ठभूमि पर आधारित है?",
    question_en: "What is the background of the novel 'Premashram'?",
    options_hi: ["स्वतंत्रता संग्राम", "किसान आंदोलन", "न्याय व्यवस्था", "बच्चों की शिक्षा"],
    options_en: ["Freedom struggle", "Farmer's movement", "Judicial system", "Children's education"],
    answer: "न्याय व्यवस्था",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_hi: "प्रेमचंद ने कितने से अधिक कहानियाँ लिखीं?",
    question_en: "How many stories did Premchand write?",
    options_hi: ["100+", "250+", "300+", "500+"],
    options_en: ["100+", "250+", "300+", "500+"],
    answer: "300+",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_hi: "'कफन' कहानी में किसकी मृत्यु हो जाती है?",
    question_en: "Who dies in the story 'Kafan'?",
    options_hi: ["माधव", "घीसू", "माधव की पत्नी", "दादी"],
    options_en: ["Madhav", "Ghasu", "Madhav’s wife", "Grandmother"],
    answer: "माधव की पत्नी",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_hi: "'ईदगाह' कहानी में हामिद के पास कुल कितने पैसे होते हैं?",
    question_en: "How much money does Hamid have in 'Eidgah'?",
    options_hi: ["दो पैसे", "तीन पैसे", "चार आने", "पांच पैसे"],
    options_en: ["Two paise", "Three paise", "Four annas", "Five paise"],
    answer: "तीन पैसे",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_hi: "‘नमक का दारोगा’ में मुंशी वंशीधर किस पर कार्यवाही करता है?",
    question_en: "On whom does Munshi Vanshidhar take action in 'Namak ka Daroga'?",
    options_hi: ["एक व्यापारी पर", "अपने पिता पर", "गबन करने वाले पर", "सरकारी अफसर पर"],
    options_en: ["A trader", "His father", "On a defaulter", "A government officer"],
    answer: "एक व्यापारी पर",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_hi: "प्रेमचंद किस सामाजिक मुद्दे के खिलाफ थे?",
    question_en: "Which social issue was Premchand against?",
    options_hi: ["नारी शिक्षा", "जातिवाद", "रोज़गार", "संस्कृति"],
    options_en: ["Women's education", "Casteism", "Employment", "Culture"],
    answer: "जातिवाद",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_hi: "प्रेमचंद का साहित्य किस युग से संबंधित है?",
    question_en: "To which era does Premchand's literature belong?",
    options_hi: ["रीतिकाल", "आधुनिक काल", "भक्ति काल", "अज्ञेयवाद"],
    options_en: ["Riti Era", "Modern Era", "Bhakti Era", "Experimentalism"],
    answer: "आधुनिक काल",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_hi: "प्रेमचंद की पहली प्रकाशित पुस्तक कौन सी थी?",
    question_en: "What was Premchand’s first published book?",
    options_hi: ["सेवा सदन", "सोज़े वतन", "गबन", "गोदान"],
    options_en: ["Sevasadan", "Soz-e-Watan", "Gaban", "Godaan"],
    answer: "सोज़े वतन",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_hi: "‘सेवासदन’ उपन्यास का पहला नाम क्या था?",
    question_en: "What was the initial name of the novel 'Sevasadan'?",
    options_hi: ["प्रेमाश्रम", "बाजारे-हुस्न", "गोदान", "नारी निकेतन"],
    options_en: ["Premashram", "Bazaar-e-Husn", "Godaan", "Nari Niketan"],
    answer: "बाजारे-हुस्न",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_hi: "‘कर्मभूमि’ उपन्यास किस विषय पर आधारित है?",
    question_en: "What is the novel 'Karmabhoomi' based on?",
    options_hi: ["नारी मुक्ति", "राजनीति और समाज", "देशभक्ति", "बाल साहित्य"],
    options_en: ["Women's liberation", "Politics and society", "Patriotism", "Children's literature"],
    answer: "राजनीति और समाज",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_hi: "‘गोदान’ में होरी का अंतिम सपना क्या था?",
    question_en: "What was Hori’s final dream in 'Godaan'?",
    options_hi: ["एक घर", "एक पुत्र", "एक गाय", "एक खेत"],
    options_en: ["A house", "A son", "A cow", "A field"],
    answer: "एक गाय",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_hi: "‘प्रेमचंद’ का लेखन किस परंपरा को आगे बढ़ाता है?",
    question_en: "Premchand’s writing continues which tradition?",
    options_hi: ["आध्यात्मिक", "संवेदनशील", "यथार्थवादी", "काल्पनिक"],
    options_en: ["Spiritual", "Sensitive", "Realistic", "Imaginary"],
    answer: "यथार्थवादी",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_hi: "प्रेमचंद की पत्नी का नाम क्या था?",
    question_en: "What was the name of Premchand’s wife?",
    options_hi: ["शिवरानी देवी", "सरस्वती देवी", "पार्वती देवी", "सावित्री देवी"],
    options_en: ["Shivrani Devi", "Saraswati Devi", "Parvati Devi", "Savitri Devi"],
    answer: "शिवरानी देवी",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_hi: "प्रेमचंद किस आंदोलन से जुड़े थे?",
    question_en: "Which movement was Premchand associated with?",
    options_hi: ["स्वदेशी आंदोलन", "सत्याग्रह आंदोलन", "साइमन गो बैक", "असहयोग आंदोलन"],
    options_en: ["Swadeshi movement", "Satyagraha movement", "Simon Go Back", "Non-Cooperation Movement"],
    answer: "असहयोग आंदोलन",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_hi: "प्रेमचंद की अंतिम कहानी कौन सी थी?",
    question_en: "What was Premchand's last story?",
    options_hi: ["ईदगाह", "कफन", "नमक का दारोगा", "गोदान"],
    options_en: ["Eidgah", "Kafan", "Namak ka Daroga", "Godaan"],
    answer: "कफन",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_hi: "प्रेमचंद की भाषा की सबसे बड़ी विशेषता क्या थी?",
    question_en: "What was the biggest feature of Premchand’s language?",
    options_hi: ["कठिन शब्द", "शास्त्रीयता", "सरलता और प्रभावशीलता", "अंग्रेजी प्रभाव"],
    options_en: ["Difficult words", "Classical style", "Simplicity and effectiveness", "English influence"],
    answer: "सरलता और प्रभावशीलता",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_hi: "प्रेमचंद की रचनाएँ किस यथार्थ को दर्शाती हैं?",
    question_en: "What kind of reality is depicted in Premchand's works?",
    options_hi: ["राजसी जीवन", "किसान और गरीबों की स्थिति", "यात्रा वर्णन", "प्रकृति सौंदर्य"],
    options_en: ["Royal life", "Condition of farmers and poor", "Travelogue", "Beauty of nature"],
    answer: "किसान और गरीबों की स्थिति",
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
