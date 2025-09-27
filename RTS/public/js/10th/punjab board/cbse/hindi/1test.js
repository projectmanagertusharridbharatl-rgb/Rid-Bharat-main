
const questions = [


  {
    "num": 1,
    "question_en": "What is the main purpose of a factual passage?",
    "question_hi": "तथ्यात्मक गद्यांश का मुख्य उद्देश्य क्या है?",
    "options_en": ["Entertain", "Inform", "Persuade", "Criticize"],
    "options_hi": ["मनोरंजन", "सूचना देना", "मनाना", "आलोचना"],
    "answer_en": "Inform",
    "answer_hi": "सूचना देना",
    "attempted": false
  },
  {
    "num": 2,
    "question_en": "Who is the author of 'माता का आँचल'?",
    "question_hi": "'माता का आँचल' के लेखक कौन हैं?",
    "options_en": ["Premchand", "Mannu Bhandari", "Yashpal", "Suryakant Tripathi Nirala"],
    "options_hi": ["प्रेमचंद", "मन्नू भंडारी", "यशपाल", "सूर्यकांत त्रिपाठी 'निराला'"],
    "answer_en": "Premchand",
    "answer_hi": "प्रेमचंद",
    "attempted": false
  },
  {
    "num": 3,
    "question_en": "What is the theme of 'साना-साना हाथ जोड़ि'?",
    "question_hi": "'साना-साना हाथ जोड़ि' का केंद्रीय विषय क्या है?",
    "options_en": ["Unity", "Love", "Nature", "Faith"],
    "options_hi": ["एकता", "प्रेम", "प्रकृति", "विश्वास"],
    "answer_en": "Unity",
    "answer_hi": "एकता",
    "attempted": false
  },
  {
    "num": 4,
    "question_en": "Who wrote 'राम-लक्ष्मण-परशुराम संवाद'?",
    "question_hi": "'राम-लक्ष्मण-परशुराम संवाद' किस कवि द्वारा लिखा गया है?",
    "options_en": ["Tulsidas", "Kabir", "Surdas", "Bihari"],
    "options_hi": ["तुलसीदास", "कबीर", "सूरदास", "बिहारी"],
    "answer_en": "Tulsidas",
    "answer_hi": "तुलसीदास",
    "attempted": false
  },
  {
    "num": 5,
    "question_en": "Who is the author of 'तताँरा-वामीरो कथा'?",
    "question_hi": "'तताँरा-वामीरो कथा' के लेखक कौन हैं?",
    "options_en": ["Mannu Bhandari", "Premchand", "Yashpal", "Surya Kant Tripathi Nirala"],
    "options_hi": ["मन्नू भंडारी", "प्रेमचंद", "यशपाल", "सूर्यकांत त्रिपाठी 'निराला'"],
    "answer_en": "Mannu Bhandari",
    "answer_hi": "मन्नू भंडारी",
    "attempted": false
  },
  {
    "num": 6,
    "question_en": "What is the central theme of 'मैं क्यों लिखता हूँ'?",
    "question_hi": "'मैं क्यों लिखता हूँ' का विषय क्या है?",
    "options_en": ["Importance of Writing", "Nature", "Education", "History"],
    "options_hi": ["लेखन का महत्व", "प्रकृति", "शिक्षा", "इतिहास"],
    "answer_en": "Importance of Writing",
    "answer_hi": "लेखन का महत्व",
    "attempted": false
  },
  {
    "num": 7,
    "question_en": "Who wrote the poem 'उत्साह'?",
    "question_hi": "'उत्साह' कविता किसने लिखी है?",
    "options_en": ["Suryakant Tripathi Nirala", "Jaishankar Prasad", "Tulsidas", "Kabir"],
    "options_hi": ["सूर्यकांत त्रिपाठी 'निराला'", "जयशंकर प्रसाद", "तुलसीदास", "कबीर"],
    "answer_en": "Suryakant Tripathi Nirala",
    "answer_hi": "सूर्यकांत त्रिपाठी 'निराला'",
    "attempted": false
  },
  {
    "num": 8,
    "question_en": "Which poem is written by Jaishankar Prasad?",
    "question_hi": "जयशंकर प्रसाद द्वारा कौन-सी कविता लिखी गई है?",
    "options_en": ["आत्मकथ्य", "राम-लक्ष्मण-परशुराम संवाद", "कवित्त", "साखियाँ"],
    "options_hi": ["आत्मकथ्य", "राम-लक्ष्मण-परशुराम संवाद", "कवित्त", "साखियाँ"],
    "answer_en": "आत्मकथ्य",
    "answer_hi": "आत्मकथ्य",
    "attempted": false
  },
  {
    "num": 9,
    "question_en": "What is 'अपठित गद्यांश'?",
    "question_hi": "'अपठित गद्यांश' का क्या अर्थ है?",
    "options_en": ["Unseen Passage", "Essay", "Poem", "Letter"],
    "options_hi": ["अज्ञात गद्यांश", "निबंध", "कविता", "पत्र"],
    "answer_en": "Unseen Passage",
    "answer_hi": "अज्ञात गद्यांश",
    "attempted": false
  },
  {
    "num": 10,
    "question_en": "Who is the author of the story 'बड़े भाई साहब'?",
    "question_hi": "'बड़े भाई साहब' कहानी के लेखक कौन हैं?",
    "options_en": ["Premchand", "Sitaram Seksariya", "Mannu Bhandari", "Bhishma Sahni"],
    "options_hi": ["प्रेमचंद", "सीताराम सेकसरिया", "मन्नू भंडारी", "भीष्म साहनी"],
    "answer_en": "Premchand",
    "answer_hi": "प्रेमचंद",
    "attempted": false
  },
  {
    "num": 11,
    "question_en": "Who is the author of 'टोपी शुक्ला'?",
    "question_hi": "'टोपी शुक्ला' कहानी के लेखक कौन हैं?",
    "options_en": ["Premchand", "Sitaram Seksariya", "Leeladhar Mandloi", "Bhishma Sahni"],
    "options_hi": ["प्रेमचंद", "सीताराम सेकसरिया", "लीलाधर मंडलोई", "भीष्म साहनी"],
    "answer_en": "Leeladhar Mandloi",
    "answer_hi": "लीलाधर मंडलोई",
    "attempted": false
  },
  {
    "num": 12,
    "question_en": "Which poet is known for writing 'साखियाँ' and 'सबद'?",
    "question_hi": "किस कवि को 'साखियाँ' और 'सबद' लिखने के लिए जाना जाता है?",
    "options_en": ["Kabir", "Meera", "Bihari", "Surdas"],
    "options_hi": ["कबीर", "मीरा", "बिहारी", "सूरदास"],
    "answer_en": "Kabir",
    "answer_hi": "कबीर",
    "attempted": false
  },
  {
    "num": 13,
    "question_en": "Which poet is known for his 'दोहों'?",
    "question_hi": "किस कवि को उनके 'दोहों' के लिए जाना जाता है?",
    "options_en": ["Bihari", "Meera", "Kabir", "Surdas"],
    "options_hi": ["बिहारी", "मीरा", "कबीर", "सूरदास"],
    "answer_en": "Bihari",
    "answer_hi": "बिहारी",
    "attempted": false
  },
  {
    "num": 14,
    "question_en": "What is 'वाच्य' in Hindi grammar?",
    "question_hi": "हिंदी व्याकरण में 'वाच्य' का क्या अर्थ है?",
    "options_en": ["Voice", "Tense", "Mood", "Noun"],
    "options_hi": ["वाच्य", "काल", "भाव", "संज्ञा"],
    "answer_en": "Voice",
    "answer_hi": "वाच्य",
    "attempted": false
  },
  {
    "num": 15,
    "question_en": "Who wrote the poem 'मनुष्यता'?",
    "question_hi": "'मनुष्यता' कविता किसने लिखी है?",
    "options_en": ["Maithili Sharan Gupt", "Bihari", "Jaishankar Prasad", "Kabir"],
    "options_hi": ["मैथिलीशरण गुप्त", "बिहारी", "जयशंकर प्रसाद", "कबीर"],
    "answer_en": "Maithili Sharan Gupt",
    "answer_hi": "मैथिलीशरण गुप्त",
    "attempted": false
  },
  {
    "num": 16,
    "question_en": "Which of the following is a part of 'कृतिका' supplementary reader?",
    "question_hi": "निम्नलिखित में से कौन 'कृतिका' पुस्तक का भाग है?",
    "options_en": ["सना-सना हाथ जोड़ि", "हरिहर काका", "टोपी शुक्ला", "नेताजी का चश्मा"],
    "options_hi": ["सना-सना हाथ जोड़ि", "हरिहर काका", "टोपी शुक्ला", "नेताजी का चश्मा"],
    "answer_en": "सना-सना हाथ जोड़ि",
    "answer_hi": "सना-सना हाथ जोड़ि",
    "attempted": false
  },
  {
    "num": 17,
    "question_en": "Which of the following is an important poem from the 'क्षितिज' textbook?",
    "question_hi": "'क्षितिज' पाठ्यपुस्तक में से कौन-सी कविता महत्वपूर्ण है?",
    "options_en": ["उत्साह", "साखियाँ", "मनुष्यता", "दीप की रौशनी"],
    "options_hi": ["उत्साह", "साखियाँ", "मनुष्यता", "दीप की रौशनी"],
    "answer_en": "उत्साह",
    "answer_hi": "उत्साह",
    "attempted": false
  },
  {
    "num": 18,
    "question_en": "What is 'निबंध लेखन' in Hindi?",
    "question_hi": "हिंदी में 'निबंध लेखन' का क्या अर्थ है?",
    "options_en": ["Essay Writing", "Letter Writing", "Poem Writing", "Story Writing"],
    "options_hi": ["निबंध लेखन", "पत्र लेखन", "कविता लेखन", "कहानी लेखन"],
    "answer_en": "Essay Writing",
    "answer_hi": "निबंध लेखन",
    "attempted": false
  },
  {
    "num": 19,
    "question_en": "Who wrote 'बड़े भाई साहब'?",
    "question_hi": "'बड़े भाई साहब' कहानी के लेखक कौन हैं?",
    "options_en": ["Premchand", "Mannu Bhandari", "Yashpal", "Leeladhar Mandloi"],
    "options_hi": ["प्रेमचंद", "मन्नू भंडारी", "यशपाल", "लीलाधर मंडलोई"],
    "answer_en": "Premchand",
    "answer_hi": "प्रेमचंद",
    "attempted": false
  },
  {
    "num": 20,
    "question_en": "Who wrote the story 'डायरी का एक पन्ना'?",
    "question_hi": "'डायरी का एक पन्ना' कहानी के लेखक कौन हैं?",
    "options_en": ["Sitaram Seksariya", "Mannu Bhandari", "Premchand", "Leeladhar Mandloi"],
    "options_hi": ["सीताराम सेकसरिया", "मन्नू भंडारी", "प्रेमचंद", "लीलाधर मंडलोई"],
    "answer_en": "Sitaram Seksariya",
    "answer_hi": "सीताराम सेकसरिया",
    "attempted": false
  }
  ,

  {
    "num": 21,
    "question_en": "Who wrote the poem 'सबद'?",
    "question_hi": "'सबद' कविता किसने लिखी है?",
    "options_en": ["Kabir", "Bihari", "Surdas", "Meera"],
    "options_hi": ["कबीर", "बिहारी", "सूरदास", "मीरा"],
    "answer_en": "Kabir",
    "answer_hi": "कबीर",
    "attempted": false
  },
  {
    "num": 22,
    "question_en": "Who is the author of 'सपनों के-से दिन'?",
    "question_hi": "'सपनों के-से दिन' के लेखक कौन हैं?",
    "options_en": ["Yashpal", "Leeladhar Mandloi", "Sitaram Seksariya", "Premchand"],
    "options_hi": ["यशपाल", "लीलाधर मंडलोई", "सीताराम सेकसरिया", "प्रेमचंद"],
    "answer_en": "Yashpal",
    "answer_hi": "यशपाल",
    "attempted": false
  },
  {
    "num": 23,
    "question_en": "Which chapter in 'स्पर्श' is written by Premchand?",
    "question_hi": "'स्पर्श' में कौन-सी कहानी प्रेमचंद द्वारा लिखी गई है?",
    "options_en": ["बड़े भाई साहब", "सपनों के-से दिन", "टोपी शुक्ला", "हरिहर काका"],
    "options_hi": ["बड़े भाई साहब", "सपनों के-से दिन", "टोपी शुक्ला", "हरिहर काका"],
    "answer_en": "बड़े भाई साहब",
    "answer_hi": "बड़े भाई साहब",
    "attempted": false
  },
  {
    "num": 24,
    "question_en": "Who is the author of 'हरिहर काका'?",
    "question_hi": "'हरिहर काका' के लेखक कौन हैं?",
    "options_en": ["Nagarjun", "Mannu Bhandari", "Bhishma Sahni", "Premchand"],
    "options_hi": ["नागार्जुन", "मन्नू भंडारी", "भीष्म साहनी", "प्रेमचंद"],
    "answer_en": "Nagarjun",
    "answer_hi": "नागार्जुन",
    "attempted": false
  },
  {
    "num": 25,
    "question_en": "Which poet wrote 'मनुष्यता'?",
    "question_hi": "'मनुष्यता' कविता किसने लिखी है?",
    "options_en": ["Maithili Sharan Gupt", "Bihari", "Surdas", "Meera"],
    "options_hi": ["मैथिलीशरण गुप्त", "बिहारी", "सूरदास", "मीरा"],
    "answer_en": "Maithili Sharan Gupt",
    "answer_hi": "मैथिलीशरण गुप्त",
    "attempted": false
  },
  {
    "num": 26,
    "question_en": "Who is known for writing the poem 'दीप की रौशनी'?",
    "question_hi": "'दीप की रौशनी' कविता किसने लिखी है?",
    "options_en": ["Suryakant Tripathi Nirala", "Kabir", "Surdas", "Bihari"],
    "options_hi": ["सूर्यकांत त्रिपाठी 'निराला'", "कबीर", "सूरदास", "बिहारी"],
    "answer_en": "Suryakant Tripathi Nirala",
    "answer_hi": "सूर्यकांत त्रिपाठी 'निराला'",
    "attempted": false
  },
  {
    "num": 27,
    "question_en": "Which poet is famous for 'कवित्त'?",
    "question_hi": "कौन-सा कवि 'कवित्त' के लिए प्रसिद्ध है?",
    "options_en": ["Jaishankar Prasad", "Tulsidas", "Surdas", "Kabir"],
    "options_hi": ["जयशंकर प्रसाद", "तुलसीदास", "सूरदास", "कबीर"],
    "answer_en": "Jaishankar Prasad",
    "answer_hi": "जयशंकर प्रसाद",
    "attempted": false
  },
  {
    "num": 28,
    "question_en": "What is the theme of 'नेताजी का चश्मा'?",
    "question_hi": "'नेताजी का चश्मा' का मुख्य विषय क्या है?",
    "options_en": ["Poverty", "Social Issues", "Politics", "Courage"],
    "options_hi": ["गरीबी", "सामाजिक समस्याएँ", "राजनीति", "साहस"],
    "answer_en": "Social Issues",
    "answer_hi": "सामाजिक समस्याएँ",
    "attempted": false
  },
  {
    "num": 29,
    "question_en": "What is the central idea of 'लखनवी अंदाज़'?",
    "question_hi": "'लखनवी अंदाज़' का केंद्रीय विचार क्या है?",
    "options_en": ["Traditional Life", "Cultural Heritage", "Modern Life", "Political Struggle"],
    "options_hi": ["परंपरागत जीवन", "संस्कृतिक धरोहर", "आधुनिक जीवन", "राजनीतिक संघर्ष"],
    "answer_en": "Cultural Heritage",
    "answer_hi": "संस्कृतिक धरोहर",
    "attempted": false
  },
  {
    "num": 30,
    "question_en": "Who wrote the poem 'आत्मकथ्य'?",
    "question_hi": "'आत्मकथ्य' कविता किसने लिखी है?",
    "options_en": ["Jaishankar Prasad", "Kabir", "Maithili Sharan Gupt", "Bihari"],
    "options_hi": ["जयशंकर प्रसाद", "कबीर", "मैथिलीशरण गुप्त", "बिहारी"],
    "answer_en": "Jaishankar Prasad",
    "answer_hi": "जयशंकर प्रसाद",
    "attempted": false
  },
  {
    "num": 31,
    "question_en": "Which poet is known for writing 'राम-लक्ष्मण-परशुराम संवाद'?",
    "question_hi": "'राम-लक्ष्मण-परशुराम संवाद' कविता किस कवि द्वारा लिखी गई है?",
    "options_en": ["Tulsidas", "Kabir", "Surdas", "Bihari"],
    "options_hi": ["तुलसीदास", "कबीर", "सूरदास", "बिहारी"],
    "answer_en": "Tulsidas",
    "answer_hi": "तुलसीदास",
    "attempted": false
  },
  {
    "num": 32,
    "question_en": "What is 'रचना के आधार पर वाक्य भेद' in Hindi grammar?",
    "question_hi": "हिंदी व्याकरण में 'रचना के आधार पर वाक्य भेद' का क्या अर्थ है?",
    "options_en": ["Sentence Types", "Voice", "Tenses", "Mood"],
    "options_hi": ["वाक्य प्रकार", "वाच्य", "काल", "भाव"],
    "answer_en": "Sentence Types",
    "answer_hi": "वाक्य प्रकार",
    "attempted": false
  },
  {
    "num": 33,
    "question_en": "Who is the author of 'तताँरा-वामीरो कथा'?",
    "question_hi": "'तताँरा-वामीरो कथा' के लेखक कौन हैं?",
    "options_en": ["Mannu Bhandari", "Premchand", "Yashpal", "Leeladhar Mandloi"],
    "options_hi": ["मन्नू भंडारी", "प्रेमचंद", "यशपाल", "लीलाधर मंडलोई"],
    "answer_en": "Mannu Bhandari",
    "answer_hi": "मन्नू भंडारी",
    "attempted": false
  },
  {
    "num": 34,
    "question_en": "What is 'विज्ञापन लेखन' in Hindi?",
    "question_hi": "हिंदी में 'विज्ञापन लेखन' का क्या अर्थ है?",
    "options_en": ["Advertisement Writing", "Story Writing", "Poem Writing", "Essay Writing"],
    "options_hi": ["विज्ञापन लेखन", "कहानी लेखन", "कविता लेखन", "निबंध लेखन"],
    "answer_en": "Advertisement Writing",
    "answer_hi": "विज्ञापन लेखन",
    "attempted": false
  },
  {
    "num": 35,
    "question_en": "What is the main focus of 'हिंदी अ (Course A)'?",
    "question_hi": "'हिंदी अ (Course A)' का मुख्य ध्यान किस पर है?",
    "options_en": ["Literature", "Grammar", "Applied Hindi", "Writing"],
    "options_hi": ["साहित्य", "व्याकरण", "व्यावहारिक हिंदी", "लेखन"],
    "answer_en": "Literature",
    "answer_hi": "साहित्य",
    "attempted": false
  },
  {
    "num": 36,
    "question_en": "Who wrote 'तोप'?",
    "question_hi": "'तोप' कहानी किसने लिखी है?",
    "options_en": ["Leeladhar Mandloi", "Premchand", "Yashpal", "Mannu Bhandari"],
    "options_hi": ["लीलाधर मंडलोई", "प्रेमचंद", "यशपाल", "मन्नू भंडारी"],
    "answer_en": "Leeladhar Mandloi",
    "answer_hi": "लीलाधर मंडलोई",
    "attempted": false
  },
  {
    "num": 37,
    "question_en": "Who is the author of 'कबीर की साखियाँ'?",
    "question_hi": "'कबीर की साखियाँ' के लेखक कौन हैं?",
    "options_en": ["Kabir", "Surdas", "Meera", "Bihari"],
    "options_hi": ["कबीर", "सूरदास", "मीरा", "बिहारी"],
    "answer_en": "Kabir",
    "answer_hi": "कबीर",
    "attempted": false
  },
  {
    "num": 38,
    "question_en": "What is the theme of 'जॉर्ज पंचम की नाक'?",
    "question_hi": "'जॉर्ज पंचम की नाक' का मुख्य विषय क्या है?",
    "options_en": ["Satire on British", "Love", "Nature", "Politics"],
    "options_hi": ["ब्रिटिश पर व्यंग्य", "प्रेम", "प्रकृति", "राजनीति"],
    "answer_en": "Satire on British",
    "answer_hi": "ब्रिटिश पर व्यंग्य",
    "attempted": false
  }
  ,




  {
    "num": 39,
    "question_en": "Who wrote 'एही ठैयाँ झुलनी हेरानी हो रामा!'?",
    "question_hi": "'एही ठैयाँ झुलनी हेरानी हो रामा!' कविता किसने लिखी है?",
    "options_en": ["Surdas", "Meera", "Kabir", "Bihari"],
    "options_hi": ["सूरदास", "मीरा", "कबीर", "बिहारी"],
    "answer_en": "Meera",
    "answer_hi": "मीरा",
    "attempted": false
  },
  {
    "num": 40,
    "question_en": "Which poet wrote 'उत्साह'?",
    "question_hi": "'उत्साह' कविता किसने लिखी है?",
    "options_en": ["Suryakant Tripathi Nirala", "Kabir", "Tulsidas", "Surdas"],
    "options_hi": ["सूर्यकांत त्रिपाठी 'निराला'", "कबीर", "तुलसीदास", "सूरदास"],
    "answer_en": "Suryakant Tripathi Nirala",
    "answer_hi": "सूर्यकांत त्रिपाठी 'निराला'",
    "attempted": false
  },
  {
    "num": 41,
    "question_en": "What is 'समास' in Hindi grammar?",
    "question_hi": "हिंदी व्याकरण में 'समास' का क्या अर्थ है?",
    "options_en": ["Compound Words", "Conjunction", "Preposition", "Noun"],
    "options_hi": ["समास", "संयोग", "पूर्वसर्ग", "संज्ञा"],
    "answer_en": "Compound Words",
    "answer_hi": "समास",
    "attempted": false
  },
  {
    "num": 42,
    "question_en": "Who is the author of 'मैं क्यों लिखता हूँ?'?",
    "question_hi": "'मैं क्यों लिखता हूँ?' के लेखक कौन हैं?",
    "options_en": ["Shivani", "Premchand", "Yashpal", "Mannu Bhandari"],
    "options_hi": ["शिवानी", "प्रेमचंद", "यशपाल", "मन्नू भंडारी"],
    "answer_en": "Shivani",
    "answer_hi": "शिवानी",
    "attempted": false
  },
  {
    "num": 43,
    "question_en": "Which poet is known for writing 'रामचरितमानस'?",
    "question_hi": "कौन कवि 'रामचरितमानस' लिखने के लिए प्रसिद्ध हैं?",
    "options_en": ["Tulsidas", "Kabir", "Surdas", "Bihari"],
    "options_hi": ["तुलसीदास", "कबीर", "सूरदास", "बिहारी"],
    "answer_en": "Tulsidas",
    "answer_hi": "तुलसीदास",
    "attempted": false
  },
  {
    "num": 44,
    "question_en": "Who wrote the poem 'तोप'?",
    "question_hi": "'तोप' कविता किसने लिखी है?",
    "options_en": ["Leeladhar Mandloi", "Yashpal", "Premchand", "Mannu Bhandari"],
    "options_hi": ["लीलाधर मंडलोई", "यशपाल", "प्रेमचंद", "मन्नू भंडारी"],
    "answer_en": "Leeladhar Mandloi",
    "answer_hi": "लीलाधर मंडलोई",
    "attempted": false
  },
  {
    "num": 45,
    "question_en": "What is 'निबंध लेखन' in Hindi?",
    "question_hi": "हिंदी में 'निबंध लेखन' का क्या अर्थ है?",
    "options_en": ["Essay Writing", "Poetry Writing", "Story Writing", "Advertisement Writing"],
    "options_hi": ["निबंध लेखन", "कविता लेखन", "कहानी लेखन", "विज्ञापन लेखन"],
    "answer_en": "Essay Writing",
    "answer_hi": "निबंध लेखन",
    "attempted": false
  },
  {
    "num": 46,
    "question_en": "Who is known for writing 'नेताजी का चश्मा'?",
    "question_hi": "'नेताजी का चश्मा' कहानी किसने लिखी है?",
    "options_en": ["Premchand", "Mannu Bhandari", "Yashpal", "Leeladhar Mandloi"],
    "options_hi": ["प्रेमचंद", "मन्नू भंडारी", "यशपाल", "लीलाधर मंडलोई"],
    "answer_en": "Premchand",
    "answer_hi": "प्रेमचंद",
    "attempted": false
  },
  {
    "num": 47,
    "question_en": "What is the central theme of 'साना-साना हाथ जोड़ि'?",
    "question_hi": "'साना-साना हाथ जोड़ि' का केंद्रीय विचार क्या है?",
    "options_en": ["Surrender", "Peace", "Courage", "Devotion"],
    "options_hi": ["समर्पण", "शांति", "साहस", "भक्ति"],
    "answer_en": "Peace",
    "answer_hi": "शांति",
    "attempted": false
  },
  {
    "num": 48,
    "question_en": "Which poet is associated with 'वृत्त'?",
    "question_hi": "कौन कवि 'वृत्त' से संबंधित है?",
    "options_en": ["Tulsidas", "Surdas", "Meera", "Kabir"],
    "options_hi": ["तुलसीदास", "सूरदास", "मीरा", "कबीर"],
    "answer_en": "Surdas",
    "answer_hi": "सूरदास",
    "attempted": false
  },
  {
    "num": 49,
    "question_en": "Who wrote 'बालगोबिन भगत'?",
    "question_hi": "'बालगोबिन भगत' कहानी किसने लिखी है?",
    "options_en": ["Sureshwar Dyal Saxena", "Mannu Bhandari", "Premchand", "Yashpal"],
    "options_hi": ["सर्वेश्वर दयाल सक्सेना", "मन्नू भंडारी", "प्रेमचंद", "यशपाल"],
    "answer_en": "Sureshwar Dyal Saxena",
    "answer_hi": "सर्वेश्वर दयाल सक्सेना",
    "attempted": false
  },
  {
    "num": 50,
    "question_en": "Which poet is known for writing 'कविता'?",
    "question_hi": "कौन कवि 'कविता' लिखने के लिए प्रसिद्ध है?",
    "options_en": ["Jaishankar Prasad", "Surdas", "Tulsidas", "Meera"],
    "options_hi": ["जयशंकर प्रसाद", "सूरदास", "तुलसीदास", "मीरा"],
    "answer_en": "Jaishankar Prasad",
    "answer_hi": "जयशंकर प्रसाद",
    "attempted": false
  },
  {
    "num": 51,
    "question_en": "What is 'पत्र लेखन' in Hindi?",
    "question_hi": "हिंदी में 'पत्र लेखन' का क्या अर्थ है?",
    "options_en": ["Letter Writing", "Essay Writing", "Poetry Writing", "Story Writing"],
    "options_hi": ["पत्र लेखन", "निबंध लेखन", "कविता लेखन", "कहानी लेखन"],
    "answer_en": "Letter Writing",
    "answer_hi": "पत्र लेखन",
    "attempted": false
  },
  {
    "num": 52,
    "question_en": "Who wrote 'माता का आँचल'?",
    "question_hi": "'माता का आँचल' कहानी किसने लिखी है?",
    "options_en": ["Premchand", "Mannu Bhandari", "Yashpal", "Leeladhar Mandloi"],
    "options_hi": ["प्रेमचंद", "मन्नू भंडारी", "यशपाल", "लीलाधर मंडलोई"],
    "answer_en": "Premchand",
    "answer_hi": "प्रेमचंद",
    "attempted": false
  },
  {
    "num": 53,
    "question_en": "What is 'रचनात्मक लेखन' in Hindi?",
    "question_hi": "हिंदी में 'रचनात्मक लेखन' का क्या अर्थ है?",
    "options_en": ["Creative Writing", "Descriptive Writing", "Poetry Writing", "Expository Writing"],
    "options_hi": ["रचनात्मक लेखन", "वर्णनात्मक लेखन", "कविता लेखन", "स्पष्टीकरणात्मक लेखन"],
    "answer_en": "Creative Writing",
    "answer_hi": "रचनात्मक लेखन",
    "attempted": false
  }
  ,
  {
    "num": 54,
    "question_en": "Which poet wrote 'तताँरा-वामीरो कथा'?",
    "question_hi": "'तताँरा-वामीरो कथा' कहानी किसने लिखी है?",
    "options_en": ["Mannu Bhandari", "Yashpal", "Premchand", "Leeladhar Mandloi"],
    "options_hi": ["मन्नू भंडारी", "यशपाल", "प्रेमचंद", "लीलाधर मंडलोई"],
    "answer_en": "Mannu Bhandari",
    "answer_hi": "मन्नू भंडारी",
    "attempted": false
  },
  {
    "num": 55,
    "question_en": "What is the main purpose of 'अपठित गद्यांश' in exams?",
    "question_hi": "परीक्षाओं में 'अपठित गद्यांश' का मुख्य उद्देश्य क्या है?",
    "options_en": ["Testing Comprehension", "Testing Writing Skills", "Testing Grammar", "Testing Vocabulary"],
    "options_hi": ["समझने की क्षमता का परीक्षण", "लेखन कौशल का परीक्षण", "व्याकरण का परीक्षण", "शब्दावली का परीक्षण"],
    "answer_en": "Testing Comprehension",
    "answer_hi": "समझने की क्षमता का परीक्षण",
    "attempted": false
  },
  {
    "num": 56,
    "question_en": "Which is the correct meaning of 'विज्ञापन लेखन'?",
    "question_hi": "'विज्ञापन लेखन' का सही अर्थ क्या है?",
    "options_en": ["Advertisement Writing", "Story Writing", "Poetry Writing", "Essay Writing"],
    "options_hi": ["विज्ञापन लेखन", "कहानी लेखन", "कविता लेखन", "निबंध लेखन"],
    "answer_en": "Advertisement Writing",
    "answer_hi": "विज्ञापन लेखन",
    "attempted": false
  },
  {
    "num": 57,
    "question_en": "What type of writing is emphasized in 'निबंध लेखन'?",
    "question_hi": "'निबंध लेखन' में किस प्रकार का लेखन मुख्य रूप से होता है?",
    "options_en": ["Descriptive Writing", "Narrative Writing", "Expository Writing", "Poetry Writing"],
    "options_hi": ["वर्णनात्मक लेखन", "कहानी लेखन", "स्पष्टीकरणात्मक लेखन", "कविता लेखन"],
    "answer_en": "Expository Writing",
    "answer_hi": "स्पष्टीकरणात्मक लेखन",
    "attempted": false
  },
  {
    "num": 58,
    "question_en": "Who wrote 'सपनों के-से दिन'?",
    "question_hi": "'सपनों के-से दिन' कहानी किसने लिखी है?",
    "options_en": ["Mannu Bhandari", "Leeladhar Mandloi", "Yashpal", "Premchand"],
    "options_hi": ["मन्नू भंडारी", "लीलाधर मंडलोई", "यशपाल", "प्रेमचंद"],
    "answer_en": "Mannu Bhandari",
    "answer_hi": "मन्नू भंडारी",
    "attempted": false
  },
  {
    "num": 59,
    "question_en": "Who is the author of 'संचयन'?",
    "question_hi": "'संचयन' का लेखक कौन है?",
    "options_en": ["Sureshwar Dyal Saxena", "Yashpal", "Mannu Bhandari", "Leeladhar Mandloi"],
    "options_hi": ["सर्वेश्वर दयाल सक्सेना", "यशपाल", "मन्नू भंडारी", "लीलाधर मंडलोई"],
    "answer_en": "Sureshwar Dyal Saxena",
    "answer_hi": "सर्वेश्वर दयाल सक्सेना",
    "attempted": false
  },
  {
    "num": 60,
    "question_en": "What is the theme of the poem 'मनुष्यता'?",
    "question_hi": "'मनुष्यता' कविता का मुख्य विचार क्या है?",
    "options_en": ["Humanity", "Love", "Peace", "Unity"],
    "options_hi": ["मानवता", "प्रेम", "शांति", "एकता"],
    "answer_en": "Humanity",
    "answer_hi": "मानवता",
    "attempted": false
  },
  {
    "num": 61,
    "question_en": "Who wrote 'नेताजी का चश्मा'?",
    "question_hi": "'नेताजी का चश्मा' कहानी किसने लिखी है?",
    "options_en": ["Premchand", "Leeladhar Mandloi", "Mannu Bhandari", "Yashpal"],
    "options_hi": ["प्रेमचंद", "लीलाधर मंडलोई", "मन्नू भंडारी", "यशपाल"],
    "answer_en": "Premchand",
    "answer_hi": "प्रेमचंद",
    "attempted": false
  },
  {
    "num": 62,
    "question_en": "What does 'वाच्य' mean in Hindi grammar?",
    "question_hi": "हिंदी व्याकरण में 'वाच्य' का क्या अर्थ है?",
    "options_en": ["Voice", "Tense", "Mood", "Noun"],
    "options_hi": ["वाच्य", "काल", "भाव", "संज्ञा"],
    "answer_en": "Voice",
    "answer_hi": "वाच्य",
    "attempted": false
  },
  {
    "num": 63,
    "question_en": "What is the meaning of 'मुहावरे' in Hindi grammar?",
    "question_hi": "हिंदी व्याकरण में 'मुहावरे' का क्या अर्थ है?",
    "options_en": ["Idioms", "Phrases", "Proverbs", "Verbs"],
    "options_hi": ["मुहावरे", "वाक्यांश", "लोकोक्तियाँ", "क्रिया"],
    "answer_en": "Idioms",
    "answer_hi": "मुहावरे",
    "attempted": false
  },
  {
    "num": 64,
    "question_en": "Who wrote 'हरिहर काका'?",
    "question_hi": "'हरिहर काका' कहानी किसने लिखी है?",
    "options_en": ["Nagarjun", "Premchand", "Mannu Bhandari", "Leeladhar Mandloi"],
    "options_hi": ["नागार्जुन", "प्रेमचंद", "मन्नू भंडारी", "लीलाधर मंडलोई"],
    "answer_en": "Nagarjun",
    "answer_hi": "नागार्जुन",
    "attempted": false
  },
  {
    "num": 65,
    "question_en": "What is the main theme of 'नेताजी का चश्मा'?",
    "question_hi": "'नेताजी का चश्मा' का मुख्य विषय क्या है?",
    "options_en": ["Leadership", "Old Age", "Social Change", "Politics"],
    "options_hi": ["नेतृत्व", "बुजुर्गावस्था", "सामाजिक परिवर्तन", "राजनीति"],
    "answer_en": "Old Age",
    "answer_hi": "बुजुर्गावस्था",
    "attempted": false
  },
  {
    "num": 66,
    "question_en": "What is the meaning of 'लोकोक्तियाँ' in Hindi grammar?",
    "question_hi": "हिंदी व्याकरण में 'लोकोक्तियाँ' का क्या अर्थ है?",
    "options_en": ["Proverbs", "Idioms", "Sentences", "Verbs"],
    "options_hi": ["लोकोक्तियाँ", "मुहावरे", "वाक्य", "क्रिया"],
    "answer_en": "Proverbs",
    "answer_hi": "लोकोक्तियाँ",
    "attempted": false
  },
  {
    "num": 67,
    "question_en": "Who wrote 'माँ'?",
    "question_hi": "'माँ' कविता किसने लिखी है?",
    "options_en": ["Shivani", "Suryakant Tripathi Nirala", "Mannu Bhandari", "Yashpal"],
    "options_hi": ["शिवानी", "सूर्यकांत त्रिपाठी 'निराला'", "मन्नू भंडारी", "यशपाल"],
    "answer_en": "Shivani",
    "answer_hi": "शिवानी",
    "attempted": false
  },
  {
    "num": 68,
    "question_en": "What is the central theme of 'तताँरा-वामीरो कथा'?",
    "question_hi": "'तताँरा-वामीरो कथा' का केंद्रीय विचार क्या है?",
    "options_en": ["Sacrifice", "Humanism", "Tradition", "Folk Story"],
    "options_hi": ["बलिदान", "मानवता", "परंपरा", "लोककथा"],
    "answer_en": "Humanism",
    "answer_hi": "मानवता",
    "attempted": false
  },
  {
    "num": 69,
    "question_en": "Which poet is associated with 'कवित्त'?",
    "question_hi": "कौन कवि 'कवित्त' से संबंधित है?",
    "options_en": ["Dev", "Bihari", "Nirala", "Surdas"],
    "options_hi": ["देव", "बिहारी", "निराला", "सूरदास"],
    "answer_en": "Dev",
    "answer_hi": "देव",
    "attempted": false
  },
  {
    "num": 70,
    "question_en": "Who is the author of 'टोपी शुक्ला'?",
    "question_hi": "'टोपी शुक्ला' कहानी किसने लिखी है?",
    "options_en": ["Premchand", "Mannu Bhandari", "Leeladhar Mandloi", "Yashpal"],
    "options_hi": ["प्रेमचंद", "मन्नू भंडारी", "लीलाधर मंडलोई", "यशपाल"],
    "answer_en": "Premchand",
    "answer_hi": "प्रेमचंद",
    "attempted": false
  }
  ,

  {
    "num": 71,
    "question_en": "What is the main message of the poem 'उत्साह' by Nirala?",
    "question_hi": "'उत्साह' कविता का मुख्य संदेश क्या है?",
    "options_en": ["Hope", "Courage", "Despair", "Peace"],
    "options_hi": ["आशा", "साहस", "निराशा", "शांति"],
    "answer_en": "Courage",
    "answer_hi": "साहस",
    "attempted": false
  },
  {
    "num": 72,
    "question_en": "Who wrote the poem 'राम-लक्ष्मण-परशुराम संवाद'?",
    "question_hi": "'राम-लक्ष्मण-परशुराम संवाद' कविता किसने लिखी है?",
    "options_en": ["Tulsidas", "Surdas", "Nirala", "Jaishankar Prasad"],
    "options_hi": ["तुलसीदास", "सूरदास", "निराला", "जयशंकर प्रसाद"],
    "answer_en": "Tulsidas",
    "answer_hi": "तुलसीदास",
    "attempted": false
  },
  {
    "num": 73,
    "question_en": "Which of the following is a poem written by Surdas?",
    "question_hi": "निम्नलिखित में से कौन सी कविता सूरदास ने लिखी है?",
    "options_en": ["पद", "आत्मकथ्य", "कवित्त", "राम-लक्ष्मण-परशुराम संवाद"],
    "options_hi": ["पद", "आत्मकथ्य", "कवित्त", "राम-लक्ष्मण-परशुराम संवाद"],
    "answer_en": "पद",
    "answer_hi": "पद",
    "attempted": false
  },
  {
    "num": 74,
    "question_en": "What is the theme of 'आत्मकथ्य' by Jaishankar Prasad?",
    "question_hi": "जयशंकर प्रसाद की 'आत्मकथ्य' का मुख्य विचार क्या है?",
    "options_en": ["Self-realization", "Humanism", "Nationalism", "Love"],
    "options_hi": ["आत्म-साक्षात्कार", "मानवता", "राष्ट्रवाद", "प्रेम"],
    "answer_en": "Self-realization",
    "answer_hi": "आत्म-साक्षात्कार",
    "attempted": false
  },
  {
    "num": 75,
    "question_en": "Who wrote 'कविता'?",
    "question_hi": "'कविता' कविता किसने लिखी है?",
    "options_en": ["Jaishankar Prasad", "Nirala", "Surdas", "Dev"],
    "options_hi": ["जयशंकर प्रसाद", "निराला", "सूरदास", "देव"],
    "answer_en": "Jaishankar Prasad",
    "answer_hi": "जयशंकर प्रसाद",
    "attempted": false
  },
  {
    "num": 76,
    "question_en": "Which poet wrote 'मैं क्यों लिखता हूँ?'",
    "question_hi": "'मैं क्यों लिखता हूँ?' कविता किसने लिखी है?",
    "options_en": ["Jaishankar Prasad", "Yashpal", "Mannu Bhandari", "Nirala"],
    "options_hi": ["जयशंकर प्रसाद", "यशपाल", "मन्नू भंडारी", "निराला"],
    "answer_en": "Nirala",
    "answer_hi": "निराला",
    "attempted": false
  },
  {
    "num": 77,
    "question_en": "What is the central theme of the story 'सपनों के-से दिन'?",
    "question_hi": "'सपनों के-से दिन' कहानी का केंद्रीय विचार क्या है?",
    "options_en": ["Dreams", "Hardship", "Love", "Friendship"],
    "options_hi": ["सपने", "कठिनाई", "प्रेम", "दोस्ती"],
    "answer_en": "Dreams",
    "answer_hi": "सपने",
    "attempted": false
  },
  {
    "num": 78,
    "question_en": "Who is the author of 'तोप'?",
    "question_hi": "'तोप' कहानी का लेखक कौन है?",
    "options_en": ["Leeladhar Mandloi", "Premchand", "Yashpal", "Mannu Bhandari"],
    "options_hi": ["लीलाधर मंडलोई", "प्रेमचंद", "यशपाल", "मन्नू भंडारी"],
    "answer_en": "Leeladhar Mandloi",
    "answer_hi": "लीलाधर मंडलोई",
    "attempted": false
  },
  {
    "num": 79,
    "question_en": "What is the main focus of 'अपठित गद्यांश' in Hindi exams?",
    "question_hi": "हिंदी परीक्षाओं में 'अपठित गद्यांश' का मुख्य उद्देश्य क्या है?",
    "options_en": ["Testing Reading Comprehension", "Testing Writing Skills", "Testing Grammar", "Testing Vocabulary"],
    "options_hi": ["पढ़ाई की समझ का परीक्षण", "लेखन कौशल का परीक्षण", "व्याकरण का परीक्षण", "शब्दावली का परीक्षण"],
    "answer_en": "Testing Reading Comprehension",
    "answer_hi": "पढ़ाई की समझ का परीक्षण",
    "attempted": false
  },
  {
    "num": 80,
    "question_en": "Who wrote 'बड़े भाई साहब'?",
    "question_hi": "'बड़े भाई साहब' कहानी किसने लिखी है?",
    "options_en": ["Premchand", "Yashpal", "Leeladhar Mandloi", "Mannu Bhandari"],
    "options_hi": ["प्रेमचंद", "यशपाल", "लीलाधर मंडलोई", "मन्नू भंडारी"],
    "answer_en": "Premchand",
    "answer_hi": "प्रेमचंद",
    "attempted": false
  },
  {
    "num": 81,
    "question_en": "What is the theme of 'बड़े भाई साहब' by Premchand?",
    "question_hi": "प्रेमचंद की 'बड़े भाई साहब' का मुख्य विषय क्या है?",
    "options_en": ["Family", "Childhood", "Old Age", "Leadership"],
    "options_hi": ["परिवार", "बचपन", "बुजुर्गावस्था", "नेतृत्व"],
    "answer_en": "Family",
    "answer_hi": "परिवार",
    "attempted": false
  },
  {
    "num": 82,
    "question_en": "Which poet wrote 'राम-लक्ष्मण-परशुराम संवाद'?",
    "question_hi": "'राम-लक्ष्मण-परशुराम संवाद' कविता किसने लिखी है?",
    "options_en": ["Tulsidas", "Jaishankar Prasad", "Nirala", "Surdas"],
    "options_hi": ["तुलसीदास", "जयशंकर प्रसाद", "निराला", "सूरदास"],
    "answer_en": "Tulsidas",
    "answer_hi": "तुलसीदास",
    "attempted": false
  },
  {
    "num": 83,
    "question_en": "What is the message of the poem 'उत्साह' by Nirala?",
    "question_hi": "निराला की कविता 'उत्साह' का संदेश क्या है?",
    "options_en": ["Joy of Life", "Struggle", "Hope", "Courage"],
    "options_hi": ["जीवन का आनंद", "संघर्ष", "आशा", "साहस"],
    "answer_en": "Hope",
    "answer_hi": "आशा",
    "attempted": false
  },
  {
    "num": 84,
    "question_en": "Who wrote 'नेताजी का चश्मा'?",
    "question_hi": "'नेताजी का चश्मा' कहानी किसने लिखी है?",
    "options_en": ["Premchand", "Yashpal", "Leeladhar Mandloi", "Mannu Bhandari"],
    "options_hi": ["प्रेमचंद", "यशपाल", "लीलाधर मंडलोई", "मन्नू भंडारी"],
    "answer_en": "Premchand",
    "answer_hi": "प्रेमचंद",
    "attempted": false
  },
  {
    "num": 85,
    "question_en": "Which author wrote 'टोपी शुक्ला'?",
    "question_hi": "'टोपी शुक्ला' कहानी किसने लिखी है?",
    "options_en": ["Premchand", "Yashpal", "Leeladhar Mandloi", "Mannu Bhandari"],
    "options_hi": ["प्रेमचंद", "यशपाल", "लीलाधर मंडलोई", "मन्नू भंडारी"],
    "answer_en": "Premchand",
    "answer_hi": "प्रेमचंद",
    "attempted": false
  },
  {
    "num": 86,
    "question_en": "What does 'समास' mean in Hindi grammar?",
    "question_hi": "हिंदी व्याकरण में 'समास' का क्या अर्थ है?",
    "options_en": ["Compound Words", "Tense", "Voice", "Sentences"],
    "options_hi": ["संयुग्म शब्द", "काल", "वाच्य", "वाक्य"],
    "answer_en": "Compound Words",
    "answer_hi": "संयुग्म शब्द",
    "attempted": false
  },
  {
    "num": 87,
    "question_en": "Who wrote the poem 'कविता'?",
    "question_hi": "'कविता' कविता किसने लिखी है?",
    "options_en": ["Jaishankar Prasad", "Nirala", "Surdas", "Dev"],
    "options_hi": ["जयशंकर प्रसाद", "निराला", "सूरदास", "देव"],
    "answer_en": "Jaishankar Prasad",
    "answer_hi": "जयशंकर प्रसाद",
    "attempted": false
  }
  ,

  {
    "num": 88,
    "question_en": "Which literary device is used in the poem 'उत्साह' by Nirala?",
    "question_hi": "निराला की कविता 'उत्साह' में कौन सा साहित्यिक उपकरण प्रयोग किया गया है?",
    "options_en": ["Metaphor", "Simile", "Alliteration", "Personification"],
    "options_hi": ["रूपक", "उपमेय", "अनुप्रास", "यमक"],
    "answer_en": "Alliteration",
    "answer_hi": "अनुप्रास",
    "attempted": false
  },
  {
    "num": 89,
    "question_en": "What does the word 'संपूर्णता' mean in Hindi?",
    "question_hi": "हिंदी में 'संपूर्णता' शब्द का क्या अर्थ है?",
    "options_en": ["Completeness", "Incompleteness", "Difficulty", "Simplicity"],
    "options_hi": ["पूर्णता", "अपूर्णता", "कठिनाई", "सरलता"],
    "answer_en": "Completeness",
    "answer_hi": "पूर्णता",
    "attempted": false
  },
  {
    "num": 90,
    "question_en": "In which of the following texts is the theme of 'self-awareness' explored?",
    "question_hi": "निम्नलिखित में से किस पाठ में 'आत्म-जागरूकता' का विषय किया गया है?",
    "options_en": ["आत्मकथ्य", "नेताजी का चश्मा", "तोप", "बड़े भाई साहब"],
    "options_hi": ["आत्मकथ्य", "नेताजी का चश्मा", "तोप", "बड़े भाई साहब"],
    "answer_en": "आत्मकथ्य",
    "answer_hi": "आत्मकथ्य",
    "attempted": false
  },
  {
    "num": 91,
    "question_en": "Who is the protagonist in the story 'टोपी शुक्ला'?",
    "question_hi": "'टोपी शुक्ला' कहानी का नायक कौन है?",
    "options_en": ["Topi Shukla", "Premchand", "Mannu Bhandari", "Yashpal"],
    "options_hi": ["टोपी शुक्ला", "प्रेमचंद", "मन्नू भंडारी", "यशपाल"],
    "answer_en": "Topi Shukla",
    "answer_hi": "टोपी शुक्ला",
    "attempted": false
  },
  {
    "num": 92,
    "question_en": "What does the story 'सपनों के-से दिन' depict?",
    "question_hi": "'सपनों के-से दिन' कहानी क्या दर्शाती है?",
    "options_en": ["Dreams and Aspirations", "Reality and Struggles", "Friendship", "Family Ties"],
    "options_hi": ["सपने और आकांक्षाएँ", "वास्तविकता और संघर्ष", "दोस्ती", "परिवार संबंध"],
    "answer_en": "Dreams and Aspirations",
    "answer_hi": "सपने और आकांक्षाएँ",
    "attempted": false
  },
  {
    "num": 93,
    "question_en": "Which poet wrote the famous work 'रामचरितमानस'?",
    "question_hi": "किस कवि ने प्रसिद्ध काव्य 'रामचरितमानस' लिखा?",
    "options_en": ["Tulsidas", "Nirala", "Dev", "Surdas"],
    "options_hi": ["तुलसीदास", "निराला", "देव", "सूरदास"],
    "answer_en": "Tulsidas",
    "answer_hi": "तुलसीदास",
    "attempted": false
  },
  {
    "num": 94,
    "question_en": "In 'नेताजी का चश्मा' by Premchand, what is the primary theme?",
    "question_hi": "प्रेमचंद की 'नेताजी का चश्मा' में मुख्य विषय क्या है?",
    "options_en": ["Fictional Leadership", "Family Issues", "Ego and Pride", "Class Differences"],
    "options_hi": ["काल्पनिक नेतृत्व", "परिवारिक समस्याएँ", "अहंकार और गर्व", "वर्ग भेद"],
    "answer_en": "Ego and Pride",
    "answer_hi": "अहंकार और गर्व",
    "attempted": false
  },
  {
    "num": 95,
    "question_en": "What does the story 'हरिहर काका' primarily deal with?",
    "question_hi": "कहानी 'हरिहर काका' मुख्य रूप से किस बारे में है?",
    "options_en": ["Life of a Poor Man", "Freedom Struggle", "Childhood Memories", "Old Age and Death"],
    "options_hi": ["एक गरीब व्यक्ति का जीवन", "स्वतंत्रता संग्राम", "बचपन की यादें", "बुढ़ापा और मृत्यु"],
    "answer_en": "Old Age and Death",
    "answer_hi": "बुढ़ापा और मृत्यु",
    "attempted": false
  },
  {
    "num": 96,
    "question_en": "Which of the following works is written by Yashpal?",
    "question_hi": "निम्नलिखित में से कौन सा कार्य यशपाल ने लिखा है?",
    "options_en": ["लखनवी अंदाज़", "नेताजी का चश्मा", "सपनों के-से दिन", "टोपी शुक्ला"],
    "options_hi": ["लखनवी अंदाज़", "नेताजी का चश्मा", "सपनों के-से दिन", "टोपी शुक्ला"],
    "answer_en": "लखनवी अंदाज़",
    "answer_hi": "लखनवी अंदाज़",
    "attempted": false
  },
  {
    "num": 97,
    "question_en": "What is the meaning of 'वाच्य' in Hindi grammar?",
    "question_hi": "हिंदी व्याकरण में 'वाच्य' का क्या अर्थ है?",
    "options_en": ["Voice", "Tense", "Sentence", "Parts of Speech"],
    "options_hi": ["वाच्य", "काल", "वाक्य", "वाक्यांश"],
    "answer_en": "Voice",
    "answer_hi": "वाच्य",
    "attempted": false
  },
  {
    "num": 98,
    "question_en": "In which of the following texts is the theme of 'Leadership' explored?",
    "question_hi": "निम्नलिखित में से किस पाठ में 'नेतृत्व' का विषय किया गया है?",
    "options_en": ["नेताजी का चश्मा", "टोपी शुक्ला", "सपनों के-से दिन", "तोप"],
    "options_hi": ["नेताजी का चश्मा", "टोपी शुक्ला", "सपनों के-से दिन", "तोप"],
    "answer_en": "नेताजी का चश्मा",
    "answer_hi": "नेताजी का चश्मा",
    "attempted": false
  },
  {
    "num": 99,
    "question_en": "What does the term 'पद' refer to in Hindi poetry?",
    "question_hi": "हिंदी कविता में 'पद' शब्द किसे संदर्भित करता है?",
    "options_en": ["Poetry", "Verse", "Poem", "Lyrics"],
    "options_hi": ["कविता", "छंद", "कविता का गीत", "गीत"],
    "answer_en": "Poetry",
    "answer_hi": "कविता",
    "attempted": false
  },
  {
    "num": 100,
    "question_en": "Who wrote 'तताँरा-वामीरो कथा'?",
    "question_hi": "'तताँरा-वामीरो कथा' कहानी किसने लिखी है?",
    "options_en": ["Mannu Bhandari", "Yashpal", "Leeladhar Mandloi", "Premchand"],
    "options_hi": ["मन्नू भंडारी", "यशपाल", "लीलाधर मंडलोई", "प्रेमचंद"],
    "answer_en": "Mannu Bhandari",
    "answer_hi": "मन्नू भंडारी",
    "attempted": false
  }
  ,







];
let currentQuestion = 0;
let language = "en"; // Default English
let timeLeft = 10800; // 5-minute timer
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
        let confirmation = confirm("Are you sure you want to submit the test?");
        if (!confirmation) return;

        clearInterval(timerInterval);

        let attempted = 0, notAttempted = 0, score = 0;
        const results = [];

        questions.forEach(q => {
                if (q.attempted) {
                        attempted++;
                        if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                                score++;
                        }
                } else {
                        notAttempted++;
                }
                results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
        });

        localStorage.setItem("attempted", attempted);
        localStorage.setItem("notAttempted", notAttempted);
        localStorage.setItem("score", score);
        localStorage.setItem("results", JSON.stringify(results));

        let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
        if (viewResult) {
                window.location.href = "/RTS/Public/Deshbord/category/test/submit-test.html";
        }
}

function startTimer() {
        const timerElement = document.getElementById("timer");
        timeLeft = 180 * 60; // Convert 180 minutes to seconds (180 × 60)

        timerInterval = setInterval(() => {
                if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        alert("Time's up! Submitting the quiz automatically.");
                        submitQuiz();
                } else {
                        const hours = Math.floor(timeLeft / 3600);
                        const minutes = Math.floor((timeLeft % 3600) / 60);
                        const seconds = timeLeft % 60;

                        // Format as HH:MM:SS with leading zeros
                        timerElement.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                        timeLeft--;
                }
        }, 1000);
}
function updateNavigation() {
        const navElement = document.getElementById("circleContainer");
        navElement.innerHTML = "";

        questions.forEach((q, index) => {
                let color = "gray"; // Default not visited
                if (q.attempted) {
                        color = "green"; // Answered
                }
                if (q.selected === "") {
                        color = "gray"; // Not answered
                }
                if (index === currentQuestion) {
                        color = "blue"; // Current question
                }
                navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
        });
}

window.onload = function () {
        loadQuestion(currentQuestion);
        startTimer();
};