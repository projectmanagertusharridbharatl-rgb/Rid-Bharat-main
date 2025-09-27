
const questions = [
    
        {
            "num": 1,
            "question_en": "Who was the first President of independent India?",
            "question_hi": "स्वतंत्र भारत के पहले राष्ट्रपति कौन थे?",
            "options_en": ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Mahatma Gandhi", "Sardar Patel"],
            "options_hi": ["जवाहरलाल नेहरू", "डॉ. राजेन्द्र प्रसाद", "महात्मा गांधी", "सरदार पटेल"],
            "answer_en": "Dr. Rajendra Prasad",
            "answer_hi": "डॉ. राजेन्द्र प्रसाद",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "Which movement was started by Mahatma Gandhi in 1942?",
            "question_hi": "महात्मा गांधी ने 1942 में कौन सा आंदोलन शुरू किया था?",
            "options_en": ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
            "options_hi": ["असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "भारत छोड़ो आंदोलन", "स्वदेशी आंदोलन"],
            "answer_en": "Quit India Movement",
            "answer_hi": "भारत छोड़ो आंदोलन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "Which is the longest river in India?",
            "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
            "options_en": ["Yamuna", "Godavari", "Ganga", "Brahmaputra"],
            "options_hi": ["यमुना", "गोदावरी", "गंगा", "ब्रह्मपुत्र"],
            "answer_en": "Ganga",
            "answer_hi": "गंगा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "When did India get its independence?",
            "question_hi": "भारत को स्वतंत्रता कब मिली?",
            "options_en": ["15 August 1945", "15 August 1946", "15 August 1947", "15 August 1948"],
            "options_hi": ["15 अगस्त 1945", "15 अगस्त 1946", "15 अगस्त 1947", "15 अगस्त 1948"],
            "answer_en": "15 August 1947",
            "answer_hi": "15 अगस्त 1947",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "Which revolution is associated with agriculture?",
            "question_hi": "कृषि से संबंधित कौन सी क्रांति है?",
            "options_en": ["White Revolution", "Green Revolution", "Blue Revolution", "Pink Revolution"],
            "options_hi": ["श्वेत क्रांति", "हरित क्रांति", "नीली क्रांति", "गुलाबी क्रांति"],
            "answer_en": "Green Revolution",
            "answer_hi": "हरित क्रांति",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "What type of government is India?",
            "question_hi": "भारत किस प्रकार की सरकार है?",
            "options_en": ["Monarchy", "Democracy", "Dictatorship", "Communism"],
            "options_hi": ["राजतंत्र", "लोकतंत्र", "तानाशाही", "साम्यवाद"],
            "answer_en": "Democracy",
            "answer_hi": "लोकतंत्र",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "Which state is the largest by area in India?",
            "question_hi": "भारत का क्षेत्रफल की दृष्टि से सबसे बड़ा राज्य कौन सा है?",
            "options_en": ["Maharashtra", "Madhya Pradesh", "Uttar Pradesh", "Rajasthan"],
            "options_hi": ["महाराष्ट्र", "मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान"],
            "answer_en": "Rajasthan",
            "answer_hi": "राजस्थान",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "Which planet is known as the Blue Planet?",
            "question_hi": "नीला ग्रह किसे कहा जाता है?",
            "options_en": ["Mars", "Venus", "Earth", "Jupiter"],
            "options_hi": ["मंगल", "शुक्र", "पृथ्वी", "बृहस्पति"],
            "answer_en": "Earth",
            "answer_hi": "पृथ्वी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "Who was the leader of the Revolt of 1857 in Kanpur?",
            "question_hi": "1857 की क्रांति के समय कानपुर में नेता कौन थे?",
            "options_en": ["Tantia Tope", "Nana Saheb", "Rani Lakshmi Bai", "Bahadur Shah Zafar"],
            "options_hi": ["तात्या टोपे", "नाना साहेब", "रानी लक्ष्मी बाई", "बहादुर शाह जफर"],
            "answer_en": "Nana Saheb",
            "answer_hi": "नाना साहेब",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "Which gas is mainly responsible for global warming?",
            "question_hi": "वैश्विक ऊष्मीकरण के लिए मुख्य रूप से कौन सी गैस जिम्मेदार है?",
            "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
            "answer_en": "Carbon Dioxide",
            "answer_hi": "कार्बन डाइऑक्साइड",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "Who wrote the book 'Discovery of India'?",
            "question_hi": "'डिस्कवरी ऑफ इंडिया' पुस्तक किसने लिखी?",
            "options_en": ["Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru", "Subhash Chandra Bose"],
            "options_hi": ["महात्मा गांधी", "सरदार पटेल", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
            "answer_en": "Jawaharlal Nehru",
            "answer_hi": "जवाहरलाल नेहरू",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "Which of the following is a renewable resource?",
            "question_hi": "निम्नलिखित में से कौन एक नवीकरणीय संसाधन है?",
            "options_en": ["Coal", "Petroleum", "Wind", "Natural Gas"],
            "options_hi": ["कोयला", "पेट्रोलियम", "पवन", "प्राकृतिक गैस"],
            "answer_en": "Wind",
            "answer_hi": "पवन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
            "question_en": "What is the capital of Bihar?",
            "question_hi": "बिहार की राजधानी क्या है?",
            "options_en": ["Ranchi", "Patna", "Gaya", "Bhagalpur"],
            "options_hi": ["रांची", "पटना", "गया", "भागलपुर"],
            "answer_en": "Patna",
            "answer_hi": "पटना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 14,
            "question_en": "When was the Constitution of India adopted?",
            "question_hi": "भारतीय संविधान कब अंगीकृत किया गया था?",
            "options_en": ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1948"],
            "options_hi": ["15 अगस्त 1947", "26 जनवरी 1950", "26 नवंबर 1949", "2 अक्टूबर 1948"],
            "answer_en": "26 November 1949",
            "answer_hi": "26 नवंबर 1949",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "Which of these rivers flows from west to east?",
            "question_hi": "इनमें से कौन सी नदी पश्चिम से पूर्व की ओर बहती है?",
            "options_en": ["Mahanadi", "Tapi", "Narmada", "Sabarmati"],
            "options_hi": ["महानदी", "तापी", "नर्मदा", "साबरमती"],
            "answer_en": "Mahanadi",
            "answer_hi": "महानदी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 16,
            "question_en": "Who appoints the Prime Minister of India?",
            "question_hi": "भारत के प्रधानमंत्री की नियुक्ति कौन करता है?",
            "options_en": ["President", "Chief Justice", "Governor", "Speaker"],
            "options_hi": ["राष्ट्रपति", "मुख्य न्यायाधीश", "राज्यपाल", "लोकसभा अध्यक्ष"],
            "answer_en": "President",
            "answer_hi": "राष्ट्रपति",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "Which one is a Union Territory of India?",
            "question_hi": "इनमें से कौन भारत का एक केंद्रशासित प्रदेश है?",
            "options_en": ["Himachal Pradesh", "Jharkhand", "Ladakh", "Chhattisgarh"],
            "options_hi": ["हिमाचल प्रदेश", "झारखंड", "लद्दाख", "छत्तीसगढ़"],
            "answer_en": "Ladakh",
            "answer_hi": "लद्दाख",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "Which right is called the heart and soul of the Indian Constitution?",
            "question_hi": "भारतीय संविधान की आत्मा और हृदय किस अधिकार को कहा जाता है?",
            "options_en": ["Right to Equality", "Right to Education", "Right to Freedom", "Right to Constitutional Remedies"],
            "options_hi": ["समानता का अधिकार", "शिक्षा का अधिकार", "स्वतंत्रता का अधिकार", "संवैधानिक उपचार का अधिकार"],
            "answer_en": "Right to Constitutional Remedies",
            "answer_hi": "संवैधानिक उपचार का अधिकार",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "Which of the following is a metallic mineral?",
            "question_hi": "निम्नलिखित में से कौन एक धात्विक खनिज है?",
            "options_en": ["Coal", "Bauxite", "Limestone", "Gypsum"],
            "options_hi": ["कोयला", "बॉक्साइट", "चूना पत्थर", "जिप्सम"],
            "answer_en": "Bauxite",
            "answer_hi": "बॉक्साइट",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "Who was the first Governor-General of independent India?",
            "question_hi": "स्वतंत्र भारत के पहले गवर्नर जनरल कौन थे?",
            "options_en": ["C. Rajagopalachari", "Lord Mountbatten", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
            "options_hi": ["सी. राजगोपालाचारी", "लॉर्ड माउंटबेटन", "जवाहरलाल नेहरू", "डॉ. राजेन्द्र प्रसाद"],
            "answer_en": "Lord Mountbatten",
            "answer_hi": "लॉर्ड माउंटबेटन",
            "attempted": false,
            "selected": ""
        }
    ,
    {
        "num": 21,
        "question_en": "Which country shares the longest border with India?",
        "question_hi": "भारत की सबसे लंबी सीमा किस देश के साथ है?",
        "options_en": ["Pakistan", "China", "Bangladesh", "Nepal"],
        "options_hi": ["पाकिस्तान", "चीन", "बांग्लादेश", "नेपाल"],
        "answer_en": "Bangladesh",
        "answer_hi": "बांग्लादेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the full form of GDP?",
        "question_hi": "GDP का पूरा नाम क्या है?",
        "options_en": ["Gross Domestic Product", "General Domestic Production", "Global Development Plan", "Gross Development Product"],
        "options_hi": ["ग्रॉस डोमेस्टिक प्रोडक्ट", "जनरल डोमेस्टिक प्रोडक्शन", "ग्लोबल डेवलपमेंट प्लान", "ग्रॉस डेवलपमेंट प्रोडक्ट"],
        "answer_en": "Gross Domestic Product",
        "answer_hi": "ग्रॉस डोमेस्टिक प्रोडक्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which is the highest peak in India?",
        "question_hi": "भारत की सबसे ऊँची चोटी कौन सी है?",
        "options_en": ["K2", "Kanchenjunga", "Mount Everest", "Nanda Devi"],
        "options_hi": ["K2", "कंचनजंघा", "माउंट एवरेस्ट", "नंदा देवी"],
        "answer_en": "Kanchenjunga",
        "answer_hi": "कंचनजंघा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which mineral is known as 'Black Gold'?",
        "question_hi": "किस खनिज को 'ब्लैक गोल्ड' कहा जाता है?",
        "options_en": ["Gold", "Coal", "Petroleum", "Iron"],
        "options_hi": ["सोना", "कोयला", "पेट्रोलियम", "लोहा"],
        "answer_en": "Petroleum",
        "answer_hi": "पेट्रोलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which fundamental right was removed from the Constitution?",
        "question_hi": "संविधान से कौन सा मूल अधिकार हटाया गया था?",
        "options_en": ["Right to Property", "Right to Religion", "Right to Freedom", "Right to Equality"],
        "options_hi": ["संपत्ति का अधिकार", "धर्म की स्वतंत्रता का अधिकार", "स्वतंत्रता का अधिकार", "समानता का अधिकार"],
        "answer_en": "Right to Property",
        "answer_hi": "संपत्ति का अधिकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Which Indian state has the highest literacy rate?",
        "question_hi": "भारत का सबसे अधिक साक्षरता दर वाला राज्य कौन सा है?",
        "options_en": ["Kerala", "Bihar", "Maharashtra", "Tamil Nadu"],
        "options_hi": ["केरल", "बिहार", "महाराष्ट्र", "तमिलनाडु"],
        "answer_en": "Kerala",
        "answer_hi": "केरल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Who is known as the Iron Man of India?",
        "question_hi": "भारत के लौह पुरुष किसे कहा जाता है?",
        "options_en": ["Subhash Chandra Bose", "Dr. B.R. Ambedkar", "Sardar Vallabhbhai Patel", "Lal Bahadur Shastri"],
        "options_hi": ["सुभाष चंद्र बोस", "डॉ. बी.आर. अंबेडकर", "सरदार वल्लभभाई पटेल", "लाल बहादुर शास्त्री"],
        "answer_en": "Sardar Vallabhbhai Patel",
        "answer_hi": "सरदार वल्लभभाई पटेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which is the major occupation of the Indian population?",
        "question_hi": "भारतीय जनसंख्या का प्रमुख व्यवसाय क्या है?",
        "options_en": ["Industry", "Trade", "Agriculture", "Service"],
        "options_hi": ["उद्योग", "व्यापार", "कृषि", "सेवा"],
        "answer_en": "Agriculture",
        "answer_hi": "कृषि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which is the main source of revenue for the government?",
        "question_hi": "सरकार के राजस्व का मुख्य स्रोत क्या है?",
        "options_en": ["Loans", "Taxes", "Donations", "Fines"],
        "options_hi": ["ऋण", "कर", "दान", "जुर्माना"],
        "answer_en": "Taxes",
        "answer_hi": "कर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which river is known as the 'Sorrow of Bihar'?",
        "question_hi": "'बिहार का शोक' किस नदी को कहा जाता है?",
        "options_en": ["Ganga", "Kosi", "Son", "Gandak"],
        "options_hi": ["गंगा", "कोसी", "सोन", "गंडक"],
        "answer_en": "Kosi",
        "answer_hi": "कोसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which Indian leader gave the slogan 'Do or Die'?",
        "question_hi": "‘करो या मरो’ का नारा किसने दिया था?",
        "options_en": ["Bhagat Singh", "Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi"],
        "options_hi": ["भगत सिंह", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "महात्मा गांधी"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the minimum age for voting in India?",
        "question_hi": "भारत में मतदान करने की न्यूनतम आयु कितनी है?",
        "options_en": ["16", "18", "21", "25"],
        "options_hi": ["16", "18", "21", "25"],
        "answer_en": "18",
        "answer_hi": "18",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Who was the founder of Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना किसने की थी?",
        "options_en": ["Dadabhai Naoroji", "A.O. Hume", "Bal Gangadhar Tilak", "Bipin Chandra Pal"],
        "options_hi": ["दादाभाई नौरोजी", "ए. ओ. ह्यूम", "बाल गंगाधर तिलक", "बिपिन चंद्र पाल"],
        "answer_en": "A.O. Hume",
        "answer_hi": "ए. ओ. ह्यूम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which gas is essential for photosynthesis?",
        "question_hi": "प्रकाश-संश्लेषण के लिए कौन सी गैस आवश्यक है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which movement led to the formation of Muslim League?",
        "question_hi": "कौन से आंदोलन के बाद मुस्लिम लीग का गठन हुआ?",
        "options_en": ["Swadeshi Movement", "Partition of Bengal", "Civil Disobedience", "Non-Cooperation Movement"],
        "options_hi": ["स्वदेशी आंदोलन", "बंगाल विभाजन", "सविनय अवज्ञा", "असहयोग आंदोलन"],
        "answer_en": "Partition of Bengal",
        "answer_hi": "बंगाल विभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which state is called the 'Sugar Bowl' of India?",
        "question_hi": "भारत का ‘शुगर बाउल’ किस राज्य को कहा जाता है?",
        "options_en": ["Bihar", "Punjab", "Uttar Pradesh", "Maharashtra"],
        "options_hi": ["बिहार", "पंजाब", "उत्तर प्रदेश", "महाराष्ट्र"],
        "answer_en": "Uttar Pradesh",
        "answer_hi": "उत्तर प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which sector does the IT industry belong to?",
        "question_hi": "आईटी उद्योग किस क्षेत्र से संबंधित है?",
        "options_en": ["Primary", "Secondary", "Tertiary", "Quaternary"],
        "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "चतुर्थक"],
        "answer_en": "Tertiary",
        "answer_hi": "तृतीयक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which is the national animal of India?",
        "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
        "options_en": ["Elephant", "Tiger", "Lion", "Leopard"],
        "options_hi": ["हाथी", "बाघ", "शेर", "तेंदुआ"],
        "answer_en": "Tiger",
        "answer_hi": "बाघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which city is called the 'Silicon Valley of India'?",
        "question_hi": "भारत की 'सिलिकॉन वैली' किसे कहा जाता है?",
        "options_en": ["Hyderabad", "Chennai", "Bangalore", "Pune"],
        "options_hi": ["हैदराबाद", "चेन्नई", "बेंगलुरु", "पुणे"],
        "answer_en": "Bangalore",
        "answer_hi": "बेंगलुरु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which one of these is not a fundamental right?",
        "question_hi": "इनमें से कौन एक मौलिक अधिकार नहीं है?",
        "options_en": ["Right to Equality", "Right to Property", "Right to Education", "Right to Freedom"],
        "options_hi": ["समानता का अधिकार", "संपत्ति का अधिकार", "शिक्षा का अधिकार", "स्वतंत्रता का अधिकार"],
        "answer_en": "Right to Property",
        "answer_hi": "संपत्ति का अधिकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which type of government is elected by the people?",
        "question_hi": "किस प्रकार की सरकार जनता द्वारा चुनी जाती है?",
        "options_en": ["Monarchy", "Dictatorship", "Democracy", "Aristocracy"],
        "options_hi": ["राजतंत्र", "तानाशाही", "लोकतंत्र", "अभिजात्तंत्र"],
        "answer_en": "Democracy",
        "answer_hi": "लोकतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the tenure of the Lok Sabha?",
        "question_hi": "लोकसभा का कार्यकाल कितने वर्षों का होता है?",
        "options_en": ["3 years", "4 years", "5 years", "6 years"],
        "options_hi": ["3 वर्ष", "4 वर्ष", "5 वर्ष", "6 वर्ष"],
        "answer_en": "5 years",
        "answer_hi": "5 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Who appoints the Chief Minister?",
        "question_hi": "मुख्यमंत्री की नियुक्ति कौन करता है?",
        "options_en": ["Prime Minister", "President", "Governor", "Chief Justice"],
        "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "राज्यपाल", "मुख्य न्यायाधीश"],
        "answer_en": "Governor",
        "answer_hi": "राज्यपाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which river is a tributary of the Ganga?",
        "question_hi": "गंगा की सहायक नदी कौन सी है?",
        "options_en": ["Kaveri", "Godavari", "Yamuna", "Narmada"],
        "options_hi": ["कावेरी", "गोदावरी", "यमुना", "नर्मदा"],
        "answer_en": "Yamuna",
        "answer_hi": "यमुना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "When was the Constitution of India adopted?",
        "question_hi": "भारतीय संविधान कब अंगीकृत किया गया?",
        "options_en": ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1948"],
        "options_hi": ["15 अगस्त 1947", "26 जनवरी 1950", "26 नवंबर 1949", "2 अक्टूबर 1948"],
        "answer_en": "26 November 1949",
        "answer_hi": "26 नवंबर 1949",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sarvepalli Radhakrishnan"],
        "options_hi": ["डॉ. राजेन्द्र प्रसाद", "डॉ. बी.आर. अंबेडकर", "जवाहरलाल नेहरू", "सर्वपल्ली राधाकृष्णन"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेन्द्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which movement is associated with Dandi March?",
        "question_hi": "डांडी मार्च किस आंदोलन से जुड़ा है?",
        "options_en": ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
        "options_hi": ["असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "भारत छोड़ो आंदोलन", "स्वदेशी आंदोलन"],
        "answer_en": "Civil Disobedience Movement",
        "answer_hi": "सविनय अवज्ञा आंदोलन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which state is the largest producer of tea in India?",
        "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Kerala", "Assam", "West Bengal", "Tamil Nadu"],
        "options_hi": ["केरल", "असम", "पश्चिम बंगाल", "तमिलनाडु"],
        "answer_en": "Assam",
        "answer_hi": "असम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the capital of Jharkhand?",
        "question_hi": "झारखंड की राजधानी क्या है?",
        "options_en": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
        "options_hi": ["रांची", "जमशेदपुर", "धनबाद", "बोकारो"],
        "answer_en": "Ranchi",
        "answer_hi": "रांची",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which party led the Indian independence movement?",
        "question_hi": "भारतीय स्वतंत्रता आंदोलन का नेतृत्व किस पार्टी ने किया?",
        "options_en": ["BJP", "CPI", "Congress", "AIML"],
        "options_hi": ["बीजेपी", "सीपीआई", "कांग्रेस", "एआईएमएल"],
        "answer_en": "Congress",
        "answer_hi": "कांग्रेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which day is celebrated as Republic Day in India?",
        "question_hi": "भारत में गणतंत्र दिवस किस दिन मनाया जाता है?",
        "options_en": ["15 August", "26 January", "2 October", "26 November"],
        "options_hi": ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "26 नवंबर"],
        "answer_en": "26 January",
        "answer_hi": "26 जनवरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "In which year did India become independent?",
        "question_hi": "भारत किस वर्ष स्वतंत्र हुआ?",
        "options_en": ["1945", "1946", "1947", "1948"],
        "options_hi": ["1945", "1946", "1947", "1948"],
        "answer_en": "1947",
        "answer_hi": "1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "Who is known as 'Bapu' in India?",
        "question_hi": "भारत में 'बापू' किसे कहा जाता है?",
        "options_en": ["Subhash Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
        "options_hi": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "डॉ. राजेन्द्र प्रसाद"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What does secularism mean?",
        "question_hi": "धर्मनिरपेक्षता का क्या अर्थ है?",
        "options_en": ["State religion is Hinduism", "State supports only one religion", "Equal treatment of all religions", "No religion allowed"],
        "options_hi": ["राज्य धर्म हिंदू धर्म है", "राज्य केवल एक धर्म का समर्थन करता है", "सभी धर्मों के साथ समान व्यवहार", "कोई धर्म नहीं माना जाएगा"],
        "answer_en": "Equal treatment of all religions",
        "answer_hi": "सभी धर्मों के साथ समान व्यवहार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "What is the primary function of Parliament?",
        "question_hi": "संसद का मुख्य कार्य क्या है?",
        "options_en": ["Judicial decisions", "Law making", "Conducting exams", "Implementing laws"],
        "options_hi": ["न्यायिक निर्णय", "कानून बनाना", "परीक्षा आयोजित करना", "कानूनों को लागू करना"],
        "answer_en": "Law making",
        "answer_hi": "कानून बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the full form of MGNREGA?",
        "question_hi": "MGNREGA का पूरा नाम क्या है?",
        "options_en": [
            "Mahatma Gandhi National Rural Employment Guarantee Act",
            "Mahatma Gandhi National Road Employment Generation Act",
            "Mahatma Gandhi National Relief Employment Generation Authority",
            "Mahatma Gandhi National Renewable Energy Guarantee Act"
        ],
        "options_hi": [
            "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम",
            "महात्मा गांधी राष्ट्रीय सड़क रोजगार सृजन अधिनियम",
            "महात्मा गांधी राष्ट्रीय राहत रोजगार सृजन प्राधिकरण",
            "महात्मा गांधी राष्ट्रीय अक्षय ऊर्जा गारंटी अधिनियम"
        ],
        "answer_en": "Mahatma Gandhi National Rural Employment Guarantee Act",
        "answer_hi": "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which body conducts elections in India?",
        "question_hi": "भारत में चुनाव कौन कराता है?",
        "options_en": ["Supreme Court", "Election Commission", "Parliament", "Prime Minister"],
        "options_hi": ["सुप्रीम कोर्ट", "चुनाव आयोग", "संसद", "प्रधानमंत्री"],
        "answer_en": "Election Commission",
        "answer_hi": "चुनाव आयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Which of the following is a renewable resource?",
        "question_hi": "निम्न में से कौन सा अक्षय संसाधन है?",
        "options_en": ["Coal", "Petroleum", "Solar Energy", "Natural Gas"],
        "options_hi": ["कोयला", "पेट्रोलियम", "सौर ऊर्जा", "प्राकृतिक गैस"],
        "answer_en": "Solar Energy",
        "answer_hi": "सौर ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which Indian state has the longest coastline?",
        "question_hi": "भारत का सबसे लंबा तटीय क्षेत्र किस राज्य में है?",
        "options_en": ["Tamil Nadu", "Gujarat", "Maharashtra", "Kerala"],
        "options_hi": ["तमिलनाडु", "गुजरात", "महाराष्ट्र", "केरल"],
        "answer_en": "Gujarat",
        "answer_hi": "गुजरात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the main reason for unemployment in India?",
        "question_hi": "भारत में बेरोजगारी का मुख्य कारण क्या है?",
        "options_en": ["Less population", "Rapid industrialization", "Lack of skills", "More jobs than people"],
        "options_hi": ["कम जनसंख्या", "तेजी से औद्योगीकरण", "कौशल की कमी", "लोगों से अधिक नौकरियाँ"],
        "answer_en": "Lack of skills",
        "answer_hi": "कौशल की कमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which is the highest mountain peak in India?",
        "question_hi": "भारत की सबसे ऊँची पर्वत चोटी कौन सी है?",
        "options_en": ["Mount Everest", "K2", "Kanchenjunga", "Nanda Devi"],
        "options_hi": ["माउंट एवरेस्ट", "के2", "कंचनजंगा", "नंदा देवी"],
        "answer_en": "Kanchenjunga",
        "answer_hi": "कंचनजंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "In which year was the Quit India Movement launched?",
        "question_hi": "भारत छोड़ो आंदोलन किस वर्ष शुरू किया गया था?",
        "options_en": ["1940", "1941", "1942", "1943"],
        "options_hi": ["1940", "1941", "1942", "1943"],
        "answer_en": "1942",
        "answer_hi": "1942",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which Indian leader gave the slogan 'Do or Die'?",
        "question_hi": "'करो या मरो' का नारा किस भारतीय नेता ने दिया?",
        "options_en": ["Bhagat Singh", "Subhash Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi"],
        "options_hi": ["भगत सिंह", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "महात्मा गांधी"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which industry is known as the backbone of modern industry?",
        "question_hi": "कौन-सी उद्योग आधुनिक उद्योग की रीढ़ की हड्डी मानी जाती है?",
        "options_en": ["Cotton Industry", "Steel Industry", "Petroleum Industry", "Sugar Industry"],
        "options_hi": ["कपड़ा उद्योग", "इस्पात उद्योग", "पेट्रोलियम उद्योग", "चीनी उद्योग"],
        "answer_en": "Steel Industry",
        "answer_hi": "इस्पात उद्योग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the main source of irrigation in India?",
        "question_hi": "भारत में सिंचाई का मुख्य स्रोत क्या है?",
        "options_en": ["Rainwater", "Tanks", "Wells", "Canals"],
        "options_hi": ["वर्षा जल", "तालाब", "कुएं", "नहरें"],
        "answer_en": "Canals",
        "answer_hi": "नहरें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which dam is built on the Sutlej River?",
        "question_hi": "सतलुज नदी पर कौन-सा बांध बना है?",
        "options_en": ["Bhakra Nangal", "Tehri", "Hirakud", "Sardar Sarovar"],
        "options_hi": ["भाखड़ा नांगल", "टिहरी", "हीराकुंड", "सरदार सरोवर"],
        "answer_en": "Bhakra Nangal",
        "answer_hi": "भाखड़ा नांगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which crop is called a 'Kharif' crop?",
        "question_hi": "कौन-सी फसल 'खरीफ' फसल कहलाती है?",
        "options_en": ["Wheat", "Mustard", "Rice", "Pea"],
        "options_hi": ["गेहूं", "सरसों", "धान", "मटर"],
        "answer_en": "Rice",
        "answer_hi": "धान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Who among the following is associated with the discovery of India?",
        "question_hi": "निम्नलिखित में से कौन 'डिस्कवरी ऑफ इंडिया' से जुड़े हैं?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "B.R. Ambedkar"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "बी. आर. अंबेडकर"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Which one of the following minerals is found in large quantities in Bihar?",
        "question_hi": "बिहार में निम्नलिखित में से कौन-सा खनिज प्रचुर मात्रा में पाया जाता है?",
        "options_en": ["Iron", "Gold", "Copper", "Mica"],
        "options_hi": ["लोहा", "सोना", "तांबा", "सिसा"],
        "answer_en": "Mica",
        "answer_hi": "सिसा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "Which state is the largest producer of sugarcane in India?",
        "question_hi": "भारत में गन्ने का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Maharashtra", "Uttar Pradesh", "Bihar", "Punjab"],
        "options_hi": ["महाराष्ट्र", "उत्तर प्रदेश", "बिहार", "पंजाब"],
        "answer_en": "Uttar Pradesh",
        "answer_hi": "उत्तर प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which gas is responsible for global warming?",
        "question_hi": "ग्लोबल वार्मिंग के लिए कौन सी गैस जिम्मेदार है?",
        "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon Dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which Indian state has the highest literacy rate?",
        "question_hi": "भारत का सर्वाधिक साक्षरता दर वाला राज्य कौन-सा है?",
        "options_en": ["Kerala", "Bihar", "Maharashtra", "Tamil Nadu"],
        "options_hi": ["केरल", "बिहार", "महाराष्ट्र", "तमिलनाडु"],
        "answer_en": "Kerala",
        "answer_hi": "केरल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "In which sector does the maximum population of India work?",
        "question_hi": "भारत की अधिकतम जनसंख्या किस क्षेत्र में कार्यरत है?",
        "options_en": ["Industrial", "Service", "Agricultural", "Mining"],
        "options_hi": ["औद्योगिक", "सेवा", "कृषि", "खनन"],
        "answer_en": "Agricultural",
        "answer_hi": "कृषि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which is the main occupation in villages?",
        "question_hi": "गांवों में मुख्य पेशा क्या है?",
        "options_en": ["Business", "Service", "Agriculture", "Factory work"],
        "options_hi": ["व्यवसाय", "सेवा", "कृषि", "कारखाना कार्य"],
        "answer_en": "Agriculture",
        "answer_hi": "कृषि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which city is known as the Silicon Valley of India?",
        "question_hi": "भारत का सिलिकॉन वैली किस शहर को कहा जाता है?",
        "options_en": ["Hyderabad", "Bengaluru", "Delhi", "Pune"],
        "options_hi": ["हैदराबाद", "बेंगलुरु", "दिल्ली", "पुणे"],
        "answer_en": "Bengaluru",
        "answer_hi": "बेंगलुरु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the full form of GDP?",
        "question_hi": "GDP का पूरा नाम क्या है?",
        "options_en": ["Gross Domestic Product", "Great Domestic Price", "Gross Development Process", "Government Development Plan"],
        "options_hi": ["ग्रॉस डोमेस्टिक प्रोडक्ट", "ग्रेट डोमेस्टिक प्राइस", "ग्रॉस डेवलपमेंट प्रोसेस", "गवर्नमेंट डेवलपमेंट प्लान"],
        "answer_en": "Gross Domestic Product",
        "answer_hi": "ग्रॉस डोमेस्टिक प्रोडक्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which Indian leader formed the Forward Bloc?",
        "question_hi": "किस भारतीय नेता ने फॉरवर्ड ब्लॉक की स्थापना की थी?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Lal Bahadur Shastri"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "answer_en": "Subhash Chandra Bose",
        "answer_hi": "सुभाष चंद्र बोस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which body is known as the guardian of the Constitution?",
        "question_hi": "संविधान का संरक्षक किसे कहा जाता है?",
        "options_en": ["President", "Parliament", "Supreme Court", "Prime Minister"],
        "options_hi": ["राष्ट्रपति", "संसद", "सुप्रीम कोर्ट", "प्रधानमंत्री"],
        "answer_en": "Supreme Court",
        "answer_hi": "सुप्रीम कोर्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which revolution is related to milk production?",
        "question_hi": "दूध उत्पादन से संबंधित क्रांति कौन सी है?",
        "options_en": ["Green Revolution", "White Revolution", "Blue Revolution", "Yellow Revolution"],
        "options_hi": ["हरित क्रांति", "श्वेत क्रांति", "नीली क्रांति", "पीली क्रांति"],
        "answer_en": "White Revolution",
        "answer_hi": "श्वेत क्रांति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which system is followed in India to distribute powers?",
        "question_hi": "भारत में शक्तियों के वितरण के लिए कौन-सी व्यवस्था अपनाई गई है?",
        "options_en": ["Federal", "Unitary", "Monarchy", "Aristocracy"],
        "options_hi": ["संघात्मक", "एकात्मक", "राजतंत्र", "अभिजात्तंत्र"],
        "answer_en": "Federal",
        "answer_hi": "संघात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Who presides over the joint sitting of Parliament?",
        "question_hi": "संसद के संयुक्त अधिवेशन की अध्यक्षता कौन करता है?",
        "options_en": ["President", "Prime Minister", "Lok Sabha Speaker", "Vice President"],
        "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "लोकसभा अध्यक्ष", "उपराष्ट्रपति"],
        "answer_en": "Lok Sabha Speaker",
        "answer_hi": "लोकसभा अध्यक्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Which article of the Indian Constitution provides Right to Education?",
        "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार को प्रदान करता है?",
        "options_en": ["Article 14", "Article 19", "Article 21A", "Article 25"],
        "options_hi": ["अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21A", "अनुच्छेद 25"],
        "answer_en": "Article 21A",
        "answer_hi": "अनुच्छेद 21A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which country shares the longest border with India?",
        "question_hi": "भारत की सबसे लंबी सीमा किस देश के साथ लगती है?",
        "options_en": ["China", "Pakistan", "Bangladesh", "Nepal"],
        "options_hi": ["चीन", "पाकिस्तान", "बांग्लादेश", "नेपाल"],
        "answer_en": "Bangladesh",
        "answer_hi": "बांग्लादेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Which was the first Indian satellite launched in 1975?",
        "question_hi": "1975 में प्रक्षेपित पहला भारतीय उपग्रह कौन सा था?",
        "options_en": ["INSAT", "Aryabhata", "Bhaskara", "Rohini"],
        "options_hi": ["इनसैट", "आर्यभट्ट", "भास्कर", "रोहिणी"],
        "answer_en": "Aryabhata",
        "answer_hi": "आर्यभट्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which soil is suitable for cotton cultivation?",
        "question_hi": "कपास की खेती के लिए कौन सी मिट्टी उपयुक्त है?",
        "options_en": ["Alluvial Soil", "Black Soil", "Red Soil", "Laterite Soil"],
        "options_hi": ["प्लावन मिट्टी", "काली मिट्टी", "लाल मिट्टी", "लेटराइट मिट्टी"],
        "answer_en": "Black Soil",
        "answer_hi": "काली मिट्टी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the minimum age to vote in India?",
        "question_hi": "भारत में मतदान करने की न्यूनतम आयु क्या है?",
        "options_en": ["21 years", "20 years", "18 years", "16 years"],
        "options_hi": ["21 वर्ष", "20 वर्ष", "18 वर्ष", "16 वर्ष"],
        "answer_en": "18 years",
        "answer_hi": "18 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "In which year was the Indian Constitution adopted?",
        "question_hi": "भारतीय संविधान को किस वर्ष अपनाया गया था?",
        "options_en": ["1947", "1950", "1949", "1952"],
        "options_hi": ["1947", "1950", "1949", "1952"],
        "answer_en": "1949",
        "answer_hi": "1949",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which among the following is a public sector industry?",
        "question_hi": "निम्नलिखित में से कौन-सा एक सार्वजनिक क्षेत्र का उद्योग है?",
        "options_en": ["Tata Steel", "Reliance", "NTPC", "Infosys"],
        "options_hi": ["टाटा स्टील", "रिलायंस", "एनटीपीसी", "इन्फोसिस"],
        "answer_en": "NTPC",
        "answer_hi": "एनटीपीसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The planning commission of India was replaced by which body?",
        "question_hi": "भारत के योजना आयोग का स्थान किस संस्था ने लिया?",
        "options_en": ["NITI Aayog", "Finance Commission", "Election Commission", "CAG"],
        "options_hi": ["नीति आयोग", "वित्त आयोग", "निर्वाचन आयोग", "सीएजी"],
        "answer_en": "NITI Aayog",
        "answer_hi": "नीति आयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Which of the following is not a renewable resource?",
        "question_hi": "निम्नलिखित में से कौन सा अक्षय संसाधन नहीं है?",
        "options_en": ["Solar energy", "Wind energy", "Petroleum", "Hydropower"],
        "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "पेट्रोलियम", "जल विद्युत"],
        "answer_en": "Petroleum",
        "answer_hi": "पेट्रोलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which Indian state is the largest producer of coal?",
        "question_hi": "भारत में कोयले का सबसे बड़ा उत्पादक राज्य कौन सा है?",
        "options_en": ["Jharkhand", "Chhattisgarh", "Odisha", "West Bengal"],
        "options_hi": ["झारखंड", "छत्तीसगढ़", "ओडिशा", "पश्चिम बंगाल"],
        "answer_en": "Jharkhand",
        "answer_hi": "झारखंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which movement was launched by Mahatma Gandhi in 1930?",
        "question_hi": "महात्मा गांधी द्वारा 1930 में कौन-सा आंदोलन शुरू किया गया था?",
        "options_en": ["Non-Cooperation", "Salt March", "Quit India", "Swadeshi"],
        "options_hi": ["असहयोग आंदोलन", "नमक यात्रा", "भारत छोड़ो आंदोलन", "स्वदेशी आंदोलन"],
        "answer_en": "Salt March",
        "answer_hi": "नमक यात्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which river is called the 'Sorrow of Bihar'?",
        "question_hi": "किस नदी को 'बिहार का शोक' कहा जाता है?",
        "options_en": ["Ganga", "Kosi", "Son", "Gandak"],
        "options_hi": ["गंगा", "कोसी", "सोन", "गंडक"],
        "answer_en": "Kosi",
        "answer_hi": "कोसी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which festival is celebrated as a harvest festival in South India?",
        "question_hi": "दक्षिण भारत में कौन सा त्यौहार फसल उत्सव के रूप में मनाया जाता है?",
        "options_en": ["Pongal", "Onam", "Lohri", "Bihu"],
        "options_hi": ["पोंगल", "ओणम", "लोहड़ी", "बीहू"],
        "answer_en": "Pongal",
        "answer_hi": "पोंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which one is not a function of the Election Commission?",
        "question_hi": "निम्नलिखित में से कौन चुनाव आयोग का कार्य नहीं है?",
        "options_en": ["Conducting elections", "Advising the President", "Counting votes", "Maintaining voter list"],
        "options_hi": ["चुनाव कराना", "राष्ट्रपति को सलाह देना", "वोटों की गिनती", "मतदाता सूची बनाना"],
        "answer_en": "Advising the President",
        "answer_hi": "राष्ट्रपति को सलाह देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Which one of these is not a Fundamental Right?",
        "question_hi": "निम्न में से कौन एक मौलिक अधिकार नहीं है?",
        "options_en": ["Right to Equality", "Right to Property", "Right to Freedom", "Right to Education"],
        "options_hi": ["समानता का अधिकार", "संपत्ति का अधिकार", "स्वतंत्रता का अधिकार", "शिक्षा का अधिकार"],
        "answer_en": "Right to Property",
        "answer_hi": "संपत्ति का अधिकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which level of government can make laws on subjects in the Concurrent List?",
        "question_hi": "संविधान की समवर्ती सूची में कौन-कौन सरकारें कानून बना सकती हैं?",
        "options_en": ["Central only", "State only", "Both Central and State", "Local Government"],
        "options_hi": ["केवल केंद्र", "केवल राज्य", "केंद्र और राज्य दोनों", "स्थानीय सरकार"],
        "answer_en": "Both Central and State",
        "answer_hi": "केंद्र और राज्य दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which Indian state is famous for tea gardens?",
        "question_hi": "कौन-सा भारतीय राज्य चाय बागानों के लिए प्रसिद्ध है?",
        "options_en": ["Punjab", "Assam", "Rajasthan", "Kerala"],
        "options_hi": ["पंजाब", "असम", "राजस्थान", "केरल"],
        "answer_en": "Assam",
        "answer_hi": "असम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "When is Independence Day celebrated in India?",
        "question_hi": "भारत में स्वतंत्रता दिवस कब मनाया जाता है?",
        "options_en": ["15th August", "26th January", "2nd October", "14th November"],
        "options_hi": ["15 अगस्त", "26 जनवरी", "2 अक्टूबर", "14 नवम्बर"],
        "answer_en": "15th August",
        "answer_hi": "15 अगस्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which revolution is associated with fish production?",
        "question_hi": "मछली उत्पादन से संबंधित क्रांति कौन सी है?",
        "options_en": ["Green Revolution", "Blue Revolution", "White Revolution", "Yellow Revolution"],
        "options_hi": ["हरित क्रांति", "नीली क्रांति", "श्वेत क्रांति", "पीली क्रांति"],
        "answer_en": "Blue Revolution",
        "answer_hi": "नीली क्रांति",
        "attempted": false,
        "selected": ""
    }
    
   

// Add more questions here...
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
window.location.href = "/Deshbord/category/test/submit-test.html";
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