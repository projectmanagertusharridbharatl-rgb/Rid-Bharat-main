const questions = [
  {
    "num": 1,
    "question_en": "What is the minimum number of persons required to form a partnership?",
    "question_hi": "एक साझेदारी बनाने के लिए न्यूनतम कितने लोगों की आवश्यकता होती है?",
    "options_en": ["1", "2", "3", "5"],
    "options_hi": ["1", "2", "3", "5"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which document is essential for forming a partnership?",
    "question_hi": "साझेदारी बनाने के लिए कौन सा दस्तावेज आवश्यक है?",
    "options_en": ["Partnership deed", "Memorandum of Association", "Articles of Association", "None"],
    "options_hi": ["साझेदारी पत्र", "स्मृति पत्र", "संघ के नियम", "कोई नहीं"],
    "answer_en": "Partnership deed",
    "answer_hi": "साझेदारी पत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the maximum number of partners allowed in a partnership firm?",
    "question_hi": "साझेदारी फर्म में अधिकतम कितने साझेदार हो सकते हैं?",
    "options_en": ["10", "20", "50", "100"],
    "options_hi": ["10", "20", "50", "100"],
    "answer_en": "50",
    "answer_hi": "50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the liability of a partner in a partnership firm?",
    "question_hi": "साझेदारी फर्म में साझेदार की जिम्मेदारी क्या होती है?",
    "options_en": ["Limited liability", "Unlimited liability", "No liability", "None of these"],
    "options_hi": ["सीमित जिम्मेदारी", "असीमित जिम्मेदारी", "कोई जिम्मेदारी नहीं", "इनमें से कोई नहीं"],
    "answer_en": "Unlimited liability",
    "answer_hi": "असीमित जिम्मेदारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of the following is NOT a feature of partnership?",
    "question_hi": "निम्नलिखित में से कौन साझेदारी की विशेषता नहीं है?",
    "options_en": ["Mutual agency", "Limited number of partners", "Separate legal entity", "Sharing of profits"],
    "options_hi": ["पारस्परिक एजेंसी", "सीमित साझेदारों की संख्या", "अलग कानूनी इकाई", "लाभों का विभाजन"],
    "answer_en": "Separate legal entity",
    "answer_hi": "अलग कानूनी इकाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "In partnership, who has the authority to bind the firm in business?",
    "question_hi": "साझेदारी में, किसे फर्म को व्यापार में बांधने का अधिकार होता है?",
    "options_en": ["Any partner", "Only senior partner", "Only managing partner", "No one"],
    "options_hi": ["कोई भी साझेदार", "केवल वरिष्ठ साझेदार", "केवल प्रबंधक साझेदार", "कोई नहीं"],
    "answer_en": "Any partner",
    "answer_hi": "कोई भी साझेदार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the duration of a partnership firm?",
    "question_hi": "साझेदारी फर्म की अवधि क्या होती है?",
    "options_en": ["Fixed", "Perpetual", "Temporary", "Depends on agreement"],
    "options_hi": ["निश्चित", "अनंतकालीन", "अस्थायी", "समझौते पर निर्भर"],
    "answer_en": "Depends on agreement",
    "answer_hi": "समझौते पर निर्भर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which law governs partnership firms in India?",
    "question_hi": "भारत में साझेदारी फर्मों को कौन सा कानून नियंत्रित करता है?",
    "options_en": ["Companies Act", "Indian Partnership Act, 1932", "Contract Act", "Limited Liability Partnership Act"],
    "options_hi": ["कंपनी अधिनियम", "भारतीय साझेदारी अधिनियम, 1932", "अनुबंध अधिनियम", "सीमित जिम्मेदारी साझेदारी अधिनियम"],
    "answer_en": "Indian Partnership Act, 1932",
    "answer_hi": "भारतीय साझेदारी अधिनियम, 1932",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'Mutual Agency' in partnership?",
    "question_hi": "साझेदारी में 'पारस्परिक एजेंसी' क्या है?",
    "options_en": ["Each partner can act for the firm", "Only one partner can act", "Firm cannot act through partners", "None of these"],
    "options_hi": ["प्रत्येक साझेदार फर्म के लिए कार्य कर सकता है", "केवल एक साझेदार कार्य कर सकता है", "फर्म साझेदारों के माध्यम से कार्य नहीं कर सकती", "इनमें से कोई नहीं"],
    "answer_en": "Each partner can act for the firm",
    "answer_hi": "प्रत्येक साझेदार फर्म के लिए कार्य कर सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of the following is a disadvantage of partnership?",
    "question_hi": "निम्नलिखित में से साझेदारी की कौन सी कमी है?",
    "options_en": ["Easy formation", "Mutual agency", "Unlimited liability", "Pooling of resources"],
    "options_hi": ["आसान गठन", "पारस्परिक एजेंसी", "असीमित जिम्मेदारी", "संसाधनों का समेकन"],
    "answer_en": "Unlimited liability",
    "answer_hi": "असीमित जिम्मेदारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "In the absence of partnership deed, how are profits shared?",
    "question_hi": "साझेदारी पत्र न होने पर लाभ कैसे बांटे जाते हैं?",
    "options_en": ["Equally", "In proportion to capital", "According to services", "As decided by majority"],
    "options_hi": ["समान रूप से", "पूंजी के अनुपात में", "सेवाओं के अनुसार", "बहुमत के अनुसार"],
    "answer_en": "Equally",
    "answer_hi": "समान रूप से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the meaning of 'Implied Authority' in partnership?",
    "question_hi": "साझेदारी में 'निहित अधिकार' का क्या अर्थ है?",
    "options_en": ["Authority by conduct", "Written agreement", "Oral permission", "No authority"],
    "options_hi": ["आचरण द्वारा अधिकार", "लिखित समझौता", "मौखिक अनुमति", "कोई अधिकार नहीं"],
    "answer_en": "Authority by conduct",
    "answer_hi": "आचरण द्वारा अधिकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What happens if a partner acts outside the scope of partnership business?",
    "question_hi": "यदि कोई साझेदार साझेदारी व्यवसाय के दायरे से बाहर कार्य करता है तो क्या होता है?",
    "options_en": ["Firm is not bound", "Firm is bound", "Partner is not liable", "None of these"],
    "options_hi": ["फर्म बाध्य नहीं होती", "फर्म बाध्य होती है", "साझेदार जिम्मेदार नहीं है", "इनमें से कोई नहीं"],
    "answer_en": "Firm is not bound",
    "answer_hi": "फर्म बाध्य नहीं होती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Can a partnership firm sue or be sued in its own name?",
    "question_hi": "क्या साझेदारी फर्म अपने नाम पर मुकदमा कर सकती है या मुकदमा झेल सकती है?",
    "options_en": ["Yes", "No", "Only with permission", "Depends on number of partners"],
    "options_hi": ["हाँ", "नहीं", "केवल अनुमति से", "साझेदारों की संख्या पर निर्भर"],
    "answer_en": "No",
    "answer_hi": "नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'Dormant Partner' in a partnership?",
    "question_hi": "साझेदारी में 'गुप्त साझेदार' क्या होता है?",
    "options_en": ["Partner who invests capital but does not participate in management", "Active partner", "Partner liable for debts only", "None of these"],
    "options_hi": ["वह साझेदार जो पूंजी निवेश करता है पर प्रबंधन में हिस्सा नहीं लेता", "सक्रिय साझेदार", "केवल ऋण के लिए जिम्मेदार साझेदार", "इनमें से कोई नहीं"],
    "answer_en": "Partner who invests capital but does not participate in management",
    "answer_hi": "वह साझेदार जो पूंजी निवेश करता है पर प्रबंधन में हिस्सा नहीं लेता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which partner is liable for the acts of all other partners?",
    "question_hi": "कौन सा साझेदार सभी अन्य साझेदारों के कार्यों के लिए जिम्मेदार होता है?",
    "options_en": ["Active partner", "Sleeping partner", "All partners jointly", "None"],
    "options_hi": ["सक्रिय साझेदार", "निद्राशील साझेदार", "सभी साझेदार संयुक्त रूप से", "कोई नहीं"],
    "answer_en": "All partners jointly",
    "answer_hi": "सभी साझेदार संयुक्त रूप से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the effect of registration of a partnership firm?",
    "question_hi": "साझेदारी फर्म के पंजीकरण का क्या प्रभाव होता है?",
    "options_en": ["It is mandatory", "It gives legal benefits", "No effect", "None of these"],
    "options_hi": ["यह अनिवार्य है", "यह कानूनी लाभ देता है", "कोई प्रभाव नहीं", "इनमें से कोई नहीं"],
    "answer_en": "It gives legal benefits",
    "answer_hi": "यह कानूनी लाभ देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which partner is not personally liable for partnership debts?",
    "question_hi": "कौन सा साझेदार साझेदारी के ऋणों के लिए व्यक्तिगत रूप से जिम्मेदार नहीं होता?",
    "options_en": ["Active partner", "Dormant partner", "Limited partner", "All partners are liable"],
    "options_hi": ["सक्रिय साझेदार", "गुप्त साझेदार", "सीमित साझेदार", "सभी साझेदार जिम्मेदार हैं"],
    "answer_en": "Limited partner",
    "answer_hi": "सीमित साझेदार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "How is a partner's share transferred in a partnership firm?",
    "question_hi": "साझेदारी फर्म में साझेदार का हिस्सा कैसे स्थानांतरित किया जाता है?",
    "options_en": ["With consent of all partners", "Unilaterally", "Without consent", "By law"],
    "options_hi": ["सभी साझेदारों की सहमति से", "एकतरफा", "बिना सहमति के", "कानून द्वारा"],
    "answer_en": "With consent of all partners",
    "answer_hi": "सभी साझेदारों की सहमति से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which type of partnership exists for a fixed period of time?",
    "question_hi": "किस प्रकार की साझेदारी एक निश्चित समय के लिए होती है?",
    "options_en": ["Partnership at will", "Fixed partnership", "Limited partnership", "Registered partnership"],
    "options_hi": ["इच्छा से साझेदारी", "निश्चित साझेदारी", "सीमित साझेदारी", "पंजीकृत साझेदारी"],
    "answer_en": "Fixed partnership",
    "answer_hi": "निश्चित साझेदारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is a 'Secret Partner'?",
    "question_hi": "'गुप्त साझेदार' क्या होता है?",
    "options_en": ["Partner known to other partners but not to the public", "Partner unknown to other partners", "Partner active in management", "None"],
    "options_hi": ["ऐसा साझेदार जो अन्य साझेदारों को पता होता है लेकिन जनता को नहीं", "ऐसा साझेदार जो अन्य साझेदारों को पता नहीं होता", "प्रबंधन में सक्रिय साझेदार", "कोई नहीं"],
    "answer_en": "Partner known to other partners but not to the public",
    "answer_hi": "ऐसा साझेदार जो अन्य साझेदारों को पता होता है लेकिन जनता को नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Can a minor become a partner in a partnership firm?",
    "question_hi": "क्या नाबालिग साझेदारी फर्म में साझेदार बन सकता है?",
    "options_en": ["No", "Yes, with consent of other partners", "Yes, automatically", "Depends on the firm"],
    "options_hi": ["नहीं", "हाँ, अन्य साझेदारों की सहमति से", "हाँ, स्वचालित रूप से", "फर्म पर निर्भर करता है"],
    "answer_en": "Yes, with consent of other partners",
    "answer_hi": "हाँ, अन्य साझेदारों की सहमति से",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the term used for the amount contributed by partners?",
    "question_hi": "साझेदारों द्वारा दिया गया राशि को क्या कहते हैं?",
    "options_en": ["Capital", "Profit", "Revenue", "Liability"],
    "options_hi": ["पूंजी", "लाभ", "राजस्व", "जिम्मेदारी"],
    "answer_en": "Capital",
    "answer_hi": "पूंजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What happens to the partnership firm on the death of a partner?",
    "question_hi": "किसी साझेदार की मृत्यु पर साझेदारी फर्म का क्या होता है?",
    "options_en": ["Firm dissolves", "Firm continues automatically", "Only deceased partner's share dissolves", "No effect"],
    "options_hi": ["फर्म समाप्त हो जाती है", "फर्म स्वचालित रूप से जारी रहती है", "केवल मृत साझेदार का हिस्सा समाप्त होता है", "कोई प्रभाव नहीं"],
    "answer_en": "Firm dissolves",
    "answer_hi": "फर्म समाप्त हो जाती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of the following is NOT a type of partner?",
    "question_hi": "निम्नलिखित में से कौन साझेदार का प्रकार नहीं है?",
    "options_en": ["Active partner", "Sleeping partner", "Silent partner", "Public partner"],
    "options_hi": ["सक्रिय साझेदार", "निद्राशील साझेदार", "मौन साझेदार", "सार्वजनिक साझेदार"],
    "answer_en": "Public partner",
    "answer_hi": "सार्वजनिक साझेदार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the maximum number of partners allowed in a partnership firm according to the Indian Partnership Act?",
    "question_hi": "भारतीय साझेदारी अधिनियम के अनुसार साझेदारी फर्म में अधिकतम कितने साझेदार हो सकते हैं?",
    "options_en": ["10", "20", "50", "100"],
    "options_hi": ["10", "20", "50", "100"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which document defines the relationship between partners in a partnership firm?",
    "question_hi": "कौन सा दस्तावेज़ साझेदारी फर्म में साझेदारों के बीच संबंध को परिभाषित करता है?",
    "options_en": ["Partnership Deed", "Memorandum of Association", "Articles of Association", "Contract Agreement"],
    "options_hi": ["साझेदारी वसीयतनामा", "संस्था ज्ञापन", "संघ के नियम", "अनुबंध समझौता"],
    "answer_en": "Partnership Deed",
    "answer_hi": "साझेदारी वसीयतनामा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "In a partnership firm, what type of liability do partners generally have?",
    "question_hi": "साझेदारी फर्म में साझेदारों की सामान्यतः किस प्रकार की देयता होती है?",
    "options_en": ["Limited liability", "Unlimited liability", "No liability", "Partial liability"],
    "options_hi": ["सीमित देयता", "असीमित देयता", "कोई देयता नहीं", "आंशिक देयता"],
    "answer_en": "Unlimited liability",
    "answer_hi": "असीमित देयता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which partner has unlimited liability and also manages the partnership?",
    "question_hi": "कौन सा साझेदार असीमित देयता रखता है और साझेदारी का प्रबंधन भी करता है?",
    "options_en": ["Sleeping partner", "Active partner", "Nominal partner", "Limited partner"],
    "options_hi": ["सुप्त साझेदार", "सक्रिय साझेदार", "नाममात्र साझेदार", "सीमित साझेदार"],
    "answer_en": "Active partner",
    "answer_hi": "सक्रिय साझेदार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "A partner who invests capital but does not take part in management is called?",
    "question_hi": "ऐसा साझेदार जो पूंजी लगाता है लेकिन प्रबंधन में भाग नहीं लेता, उसे क्या कहा जाता है?",
    "options_en": ["Nominal partner", "Sleeping partner", "Active partner", "Minor partner"],
    "options_hi": ["नाममात्र साझेदार", "सुप्त साझेदार", "सक्रिय साझेदार", "अल्पवयस्क साझेदार"],
    "answer_en": "Sleeping partner",
    "answer_hi": "सुप्त साझेदार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What happens if a partner retires from the firm without any agreement?",
    "question_hi": "यदि कोई साझेदार बिना किसी समझौते के फर्म से सेवानिवृत्त हो जाता है तो क्या होता है?",
    "options_en": ["Firm is dissolved", "Firm continues", "Partner can sue the firm", "Partner loses capital"],
    "options_hi": ["फर्म समाप्त हो जाती है", "फर्म जारी रहती है", "साझेदार फर्म पर मुकदमा कर सकता है", "साझेदार पूंजी खो देता है"],
    "answer_en": "Firm is dissolved",
    "answer_hi": "फर्म समाप्त हो जाती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "In partnership, the capital contribution of partners is:",
    "question_hi": "साझेदारी में साझेदारों का पूंजी योगदान होता है:",
    "options_en": ["Equal for all partners", "Decided mutually", "Fixed by government", "Varies according to age"],
    "options_hi": ["सभी साझेदारों के लिए समान", "आपसी निर्णय द्वारा तय", "सरकार द्वारा निश्चित", "आयु के अनुसार भिन्न"],
    "answer_en": "Decided mutually",
    "answer_hi": "आपसी निर्णय द्वारा तय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Who is entitled to share the profits and losses of the firm?",
    "question_hi": "फर्म के लाभ और हानि में कौन हिस्सा लेने का अधिकारी होता है?",
    "options_en": ["Only active partners", "All partners", "Only sleeping partners", "Only minor partners"],
    "options_hi": ["केवल सक्रिय साझेदार", "सभी साझेदार", "केवल सुप्त साझेदार", "केवल अल्पवयस्क साझेदार"],
    "answer_en": "All partners",
    "answer_hi": "सभी साझेदार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the minimum age for a person to become a partner in a firm?",
    "question_hi": "फर्म में साझेदार बनने के लिए न्यूनतम आयु क्या है?",
    "options_en": ["18 years", "21 years", "16 years", "No minimum age"],
    "options_hi": ["18 वर्ष", "21 वर्ष", "16 वर्ष", "कोई न्यूनतम आयु नहीं"],
    "answer_en": "18 years",
    "answer_hi": "18 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "A partner who allows his name to be used but does not invest capital is called?",
    "question_hi": "ऐसा साझेदार जो अपना नाम उपयोग करने देता है लेकिन पूंजी निवेश नहीं करता, उसे क्या कहा जाता है?",
    "options_en": ["Nominal partner", "Active partner", "Sleeping partner", "Partner by estoppel"],
    "options_hi": ["नाममात्र साझेदार", "सक्रिय साझेदार", "सुप्त साझेदार", "एस्टोपेल द्वारा साझेदार"],
    "answer_en": "Nominal partner",
    "answer_hi": "नाममात्र साझेदार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which section of the Indian Partnership Act defines partnership?",
    "question_hi": "भारतीय साझेदारी अधिनियम की किस धारा में साझेदारी को परिभाषित किया गया है?",
    "options_en": ["Section 4", "Section 10", "Section 2", "Section 20"],
    "options_hi": ["धारा 4", "धारा 10", "धारा 2", "धारा 20"],
    "answer_en": "Section 4",
    "answer_hi": "धारा 4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The partnership deed is:",
    "question_hi": "साझेदारी वसीयतनामा होता है:",
    "options_en": ["Written agreement", "Verbal agreement", "Government certificate", "None of these"],
    "options_hi": ["लिखित समझौता", "मौखिक समझौता", "सरकारी प्रमाणपत्र", "इनमें से कोई नहीं"],
    "answer_en": "Written agreement",
    "answer_hi": "लिखित समझौता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which of the following is not a characteristic of partnership?",
    "question_hi": "निम्न में से कौन साझेदारी की विशेषता नहीं है?",
    "options_en": ["Mutual agency", "Limited liability", "Profit sharing", "Association of persons"],
    "options_hi": ["आपसी एजेंसी", "सीमित देयता", "लाभ साझा करना", "व्यक्तियों का संघ"],
    "answer_en": "Limited liability",
    "answer_hi": "सीमित देयता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "If a partner dies, the partnership:",
    "question_hi": "यदि कोई साझेदार मर जाता है, तो साझेदारी:",
    "options_en": ["Automatically dissolves", "Continues as before", "Transferred to legal heir", "Is taken over by government"],
    "options_hi": ["स्वतः समाप्त हो जाती है", "पहले की तरह जारी रहती है", "कानूनी उत्तराधिकारी को स्थानांतरित हो जाती है", "सरकार द्वारा ग्रहण की जाती है"],
    "answer_en": "Automatically dissolves",
    "answer_hi": "स्वतः समाप्त हो जाती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which partner is responsible for the day-to-day operations of the firm?",
    "question_hi": "कौन सा साझेदार फर्म के दैनिक संचालन के लिए जिम्मेदार होता है?",
    "options_en": ["Managing partner", "Sleeping partner", "Nominal partner", "Minor partner"],
    "options_hi": ["प्रबंध साझेदार", "सुप्त साझेदार", "नाममात्र साझेदार", "अल्पवयस्क साझेदार"],
    "answer_en": "Managing partner",
    "answer_hi": "प्रबंध साझेदार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "A partner who cannot bind the firm by his acts is called?",
    "question_hi": "ऐसा साझेदार जो अपने कार्यों द्वारा फर्म को बाध्य नहीं कर सकता, उसे क्या कहा जाता है?",
    "options_en": ["Nominal partner", "Active partner", "Partner by estoppel", "Sleeping partner"],
    "options_hi": ["नाममात्र साझेदार", "सक्रिय साझेदार", "एस्टोपेल द्वारा साझेदार", "सुप्त साझेदार"],
    "answer_en": "Nominal partner",
    "answer_hi": "नाममात्र साझेदार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "In absence of partnership deed, profits and losses are shared in the ratio of:",
    "question_hi": "साझेदारी वसीयतनामा के अभाव में, लाभ और हानि किस अनुपात में बांटी जाती है?",
    "options_en": ["Capital ratio", "Equal ratio", "Time ratio", "None of these"],
    "options_hi": ["पूंजी अनुपात", "समान अनुपात", "समय अनुपात", "इनमें से कोई नहीं"],
    "answer_en": "Equal ratio",
    "answer_hi": "समान अनुपात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which partner can be held responsible for the acts of other partners?",
    "question_hi": "कौन सा साझेदार अन्य साझेदारों के कार्यों के लिए जिम्मेदार ठहराया जा सकता है?",
    "options_en": ["Active partner", "Sleeping partner", "Nominal partner", "All partners"],
    "options_hi": ["सक्रिय साझेदार", "सुप्त साझेदार", "नाममात्र साझेदार", "सभी साझेदार"],
    "answer_en": "All partners",
    "answer_hi": "सभी साझेदार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which of the following is not dissolved by death of a partner?",
    "question_hi": "निम्न में से कौन साझेदार की मृत्यु से समाप्त नहीं होती?",
    "options_en": ["Partnership at will", "Partnership for fixed term", "Limited partnership", "Joint venture"],
    "options_hi": ["इच्छानुसार साझेदारी", "नियत अवधि वाली साझेदारी", "सीमित साझेदारी", "संयुक्त उद्यम"],
    "answer_en": "Limited partnership",
    "answer_hi": "सीमित साझेदारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Who appoints the managing partner in a partnership firm?",
    "question_hi": "साझेदारी फर्म में प्रबंध साझेदार किसे नियुक्त करता है?",
    "options_en": ["All partners jointly", "Government", "Active partner", "Sleeping partner"],
    "options_hi": ["सभी साझेदार मिलकर", "सरकार", "सक्रिय साझेदार", "सुप्त साझेदार"],
    "answer_en": "All partners jointly",
    "answer_hi": "सभी साझेदार मिलकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which is not a mode of dissolution of partnership firm?",
    "question_hi": "साझेदारी फर्म के विघटन का कौन सा तरीका नहीं है?",
    "options_en": ["Expiry of term", "By court order", "By government order", "Mutual agreement"],
    "options_hi": ["समय समाप्ति", "अदालत का आदेश", "सरकार का आदेश", "आपसी सहमति"],
    "answer_en": "By government order",
    "answer_hi": "सरकार का आदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "If a minor is admitted to the benefits of a partnership, he is called?",
    "question_hi": "यदि एक अल्पवयस्क को साझेदारी के लाभों में admitted किया जाता है, तो उसे क्या कहा जाता है?",
    "options_en": ["Partner", "Partner by estoppel", "Partner for benefits only", "Nominal partner"],
    "options_hi": ["साझेदार", "एस्टोपेल द्वारा साझेदार", "केवल लाभ के लिए साझेदार", "नाममात्र साझेदार"],
    "answer_en": "Partner for benefits only",
    "answer_hi": "केवल लाभ के लिए साझेदार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The maximum duration of a partnership firm, unless otherwise agreed, is:",
    "question_hi": "साझेदारी फर्म की अधिकतम अवधि, जब तक अन्यथा सहमति न हो, क्या होती है?",
    "options_en": ["99 years", "30 years", "50 years", "10 years"],
    "options_hi": ["99 वर्ष", "30 वर्ष", "50 वर्ष", "10 वर्ष"],
    "answer_en": "99 years",
    "answer_hi": "99 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which of the following is a form of partnership where partners have limited liability?",
    "question_hi": "निम्न में से कौन सी साझेदारी की वह रूप है जिसमें साझेदारों की देयता सीमित होती है?",
    "options_en": ["Limited liability partnership", "General partnership", "Joint venture", "Nominal partnership"],
    "options_hi": ["सीमित देयता साझेदारी", "सामान्य साझेदारी", "संयुक्त उद्यम", "नाममात्र साझेदारी"],
    "answer_en": "Limited liability partnership",
    "answer_hi": "सीमित देयता साझेदारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which document is essential for registration of a partnership firm?",
    "question_hi": "साझेदारी फर्म के पंजीकरण के लिए कौन सा दस्तावेज़ आवश्यक है?",
    "options_en": ["Partnership deed", "Memorandum of association", "Articles of association", "Certificate of incorporation"],
    "options_hi": ["साझेदारी वसीयतनामा", "संस्था ज्ञापन", "संघ के नियम", "स्थापना प्रमाणपत्र"],
    "answer_en": "Partnership deed",
    "answer_hi": "साझेदारी वसीयतनामा",
    "attempted": false,
    "selected": ""
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
