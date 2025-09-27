const questions = [
    {
        "num": 1,
        "question_en": "What is the full form of CPI?",
        "question_hi": "CPI का पूर्ण रूप क्या है?",
        "options_en": ["Communist Party of India", "Central Party of India", "Common People's Institution", "Constitutional Party of India"],
        "options_hi": ["कम्युनिस्ट पार्टी ऑफ इंडिया", "सेंट्रल पार्टी ऑफ इंडिया", "कॉमन पीपल्स इंस्टीट्यूशन", "कांस्टीट्यूशनल पार्टी ऑफ इंडिया"],
        "answer": "Communist Party of India",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "When was the Indian National Congress founded?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना कब हुई थी?",
        "options_en": ["1885", "1905", "1857", "1947"],
        "options_hi": ["1885", "1905", "1857", "1947"],
        "answer": "1885",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Which party led the NDA government at the Centre in 1999?",
        "question_hi": "1999 में केंद्र में एनडीए सरकार का नेतृत्व किस पार्टी ने किया?",
        "options_en": ["Congress", "BJP", "CPI", "SP"],
        "options_hi": ["कांग्रेस", "बीजेपी", "सीपीआई", "सपा"],
        "answer": "BJP",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "What is the minimum age to vote in India?",
        "question_hi": "भारत में मतदान की न्यूनतम आयु क्या है?",
        "options_en": ["18 years", "21 years", "25 years", "16 years"],
        "options_hi": ["18 वर्ष", "21 वर्ष", "25 वर्ष", "16 वर्ष"],
        "answer": "18 years",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Who is the head of the state government?",
        "question_hi": "राज्य सरकार का प्रमुख कौन होता है?",
        "options_en": ["President", "Governor", "Chief Minister", "Speaker"],
        "options_hi": ["राष्ट्रपति", "राज्यपाल", "मुख्यमंत्री", "विधानसभा अध्यक्ष"],
        "answer": "Chief Minister",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which body conducts elections in India?",
        "question_hi": "भारत में चुनाव कौन कराता है?",
        "options_en": ["Parliament", "Supreme Court", "Election Commission", "President"],
        "options_hi": ["संसद", "सुप्रीम कोर्ट", "चुनाव आयोग", "राष्ट्रपति"],
        "answer": "Election Commission",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which house of Parliament is more powerful in money matters?",
        "question_hi": "वित्त मामलों में संसद का कौन सा सदन अधिक शक्तिशाली होता है?",
        "options_en": ["Rajya Sabha", "Lok Sabha", "Both equal", "None"],
        "options_hi": ["राज्यसभा", "लोकसभा", "दोनों समान", "कोई नहीं"],
        "answer": "Lok Sabha",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which of the following is not a national party?",
        "question_hi": "निम्न में से कौन एक राष्ट्रीय पार्टी नहीं है?",
        "options_en": ["BJP", "Congress", "TMC", "CPI(M)"],
        "options_hi": ["बीजेपी", "कांग्रेस", "टीएमसी", "सीपीआई(एम)"],
        "answer": "TMC",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "What is the tenure of the President of India?",
        "question_hi": "भारत के राष्ट्रपति का कार्यकाल कितना होता है?",
        "options_en": ["5 years", "6 years", "4 years", "Until death"],
        "options_hi": ["5 वर्ष", "6 वर्ष", "4 वर्ष", "जीवन पर्यंत"],
        "answer": "5 years",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Who is the constitutional head of India?",
        "question_hi": "भारत का संवैधानिक प्रमुख कौन होता है?",
        "options_en": ["Prime Minister", "President", "Chief Justice", "Speaker"],
        "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "मुख्य न्यायाधीश", "लोकसभा अध्यक्ष"],
        "answer": "President",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which article deals with emergency provisions?",
        "question_hi": "आपातकालीन प्रावधानों से संबंधित अनुच्छेद कौन सा है?",
        "options_en": ["Article 352", "Article 14", "Article 370", "Article 356"],
        "options_hi": ["अनुच्छेद 352", "अनुच्छेद 14", "अनुच्छेद 370", "अनुच्छेद 356"],
        "answer": "Article 352",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Who appoints the Prime Minister of India?",
        "question_hi": "भारत के प्रधानमंत्री की नियुक्ति कौन करता है?",
        "options_en": ["President", "People", "Parliament", "Chief Justice"],
        "options_hi": ["राष्ट्रपति", "जनता", "संसद", "मुख्य न्यायाधीश"],
        "answer": "President",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which of the following is a feature of democracy?",
        "question_hi": "निम्नलिखित में से कौन लोकतंत्र की विशेषता है?",
        "options_en": ["Monarchy", "One-party rule", "Free elections", "Hereditary rule"],
        "options_hi": ["राजतंत्र", "एक दल का शासन", "स्वतंत्र चुनाव", "वंशानुगत शासन"],
        "answer": "Free elections",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "Jawaharlal Nehru"],
        "options_hi": ["राजेन्द्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन", "जवाहरलाल नेहरू"],
        "answer": "Rajendra Prasad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which house of Parliament is permanent?",
        "question_hi": "संसद का कौन सा सदन स्थायी होता है?",
        "options_en": ["Lok Sabha", "Rajya Sabha", "Both", "None"],
        "options_hi": ["लोकसभा", "राज्यसभा", "दोनों", "कोई नहीं"],
        "answer": "Rajya Sabha",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What is the minimum age to contest Lok Sabha elections?",
        "question_hi": "लोकसभा चुनाव लड़ने की न्यूनतम आयु क्या है?",
        "options_en": ["21 years", "25 years", "30 years", "35 years"],
        "options_hi": ["21 वर्ष", "25 वर्ष", "30 वर्ष", "35 वर्ष"],
        "answer": "25 years",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Who presides over the Rajya Sabha?",
        "question_hi": "राज्यसभा की अध्यक्षता कौन करता है?",
        "options_en": ["President", "Vice President", "Prime Minister", "Chief Justice"],
        "options_hi": ["राष्ट्रपति", "उप-राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश"],
        "answer": "Vice President",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which amendment is known as the Mini Constitution?",
        "question_hi": "कौन सा संशोधन 'लघु संविधान' के रूप में जाना जाता है?",
        "options_en": ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        "options_hi": ["42वां संशोधन", "44वां संशोधन", "61वां संशोधन", "73वां संशोधन"],
        "answer": "42nd Amendment",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which movement led to the formation of the BJP?",
        "question_hi": "कौन सा आंदोलन भाजपा के गठन का कारण बना?",
        "options_en": ["Chipko Movement", "Emergency Movement", "Ram Janmabhoomi Movement", "Quit India Movement"],
        "options_hi": ["चिपको आंदोलन", "आपातकाल आंदोलन", "राम जन्मभूमि आंदोलन", "भारत छोड़ो आंदोलन"],
        "answer": "Ram Janmabhoomi Movement",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Who is the leader of the ruling party in Lok Sabha?",
        "question_hi": "लोकसभा में सत्तारूढ़ पार्टी का नेता कौन होता है?",
        "options_en": ["President", "Prime Minister", "Speaker", "Chief Justice"],
        "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "लोकसभा अध्यक्ष", "मुख्य न्यायाधीश"],
        "answer": "Prime Minister",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which party gave the slogan 'Achhe Din Aane Wale Hain'?",
        "question_hi": "'अच्छे दिन आने वाले हैं' नारा किस पार्टी ने दिया था?",
        "options_en": ["Congress", "BJP", "AAP", "SP"],
        "options_hi": ["कांग्रेस", "बीजेपी", "आप", "सपा"],
        "answer": "BJP",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which part of the Constitution deals with Fundamental Rights?",
        "question_hi": "संविधान का कौन सा भाग मौलिक अधिकारों से संबंधित है?",
        "options_en": ["Part I", "Part III", "Part IV", "Part V"],
        "options_hi": ["भाग I", "भाग III", "भाग IV", "भाग V"],
        "answer": "Part III",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which state was created in 2000?",
        "question_hi": "कौन सा राज्य वर्ष 2000 में बना?",
        "options_en": ["Chhattisgarh", "Goa", "Sikkim", "Kerala"],
        "options_hi": ["छत्तीसगढ़", "गोवा", "सिक्किम", "केरल"],
        "answer": "Chhattisgarh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Who was the first female Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Pratibha Patil", "Sushma Swaraj", "Sarojini Naidu"],
        "options_hi": ["इंदिरा गांधी", "प्रतिभा पाटिल", "सुषमा स्वराज", "सरोजिनी नायडू"],
        "answer": "Indira Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which body settles disputes related to election?",
        "question_hi": "चुनाव से संबंधित विवादों का निपटारा कौन करता है?",
        "options_en": ["Election Commission", "Supreme Court", "High Court", "President"],
        "options_hi": ["चुनाव आयोग", "सुप्रीम कोर्ट", "हाई कोर्ट", "राष्ट्रपति"],
        "answer": "Supreme Court",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Which of these is a pressure group?",
        "question_hi": "इनमें से कौन एक दबाव समूह है?",
        "options_en": ["FICCI", "BJP", "Congress", "Parliament"],
        "options_hi": ["फिक्की", "बीजेपी", "कांग्रेस", "संसद"],
        "answer": "FICCI",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Who appoints the Governor of a state?",
        "question_hi": "राज्यपाल की नियुक्ति कौन करता है?",
        "options_en": ["Prime Minister", "Chief Minister", "President", "Home Minister"],
        "options_hi": ["प्रधानमंत्री", "मुख्यमंत्री", "राष्ट्रपति", "गृह मंत्री"],
        "answer": "President",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "The Planning Commission has been replaced by?",
        "question_hi": "योजना आयोग को किससे प्रतिस्थापित किया गया है?",
        "options_en": ["Finance Commission", "NITI Aayog", "Election Commission", "Cabinet Committee"],
        "options_hi": ["वित्त आयोग", "नीति आयोग", "चुनाव आयोग", "मंत्रिमंडल समिति"],
        "answer": "NITI Aayog",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Which institution is the guardian of the Constitution?",
        "question_hi": "संविधान का संरक्षक कौन है?",
        "options_en": ["President", "Parliament", "Supreme Court", "Prime Minister"],
        "options_hi": ["राष्ट्रपति", "संसद", "सुप्रीम कोर्ट", "प्रधानमंत्री"],
        "answer": "Supreme Court",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which article is related to the abolition of untouchability?",
        "question_hi": "अस्पृश्यता के उन्मूलन से संबंधित अनुच्छेद कौन सा है?",
        "options_en": ["Article 17", "Article 19", "Article 25", "Article 14"],
        "options_hi": ["अनुच्छेद 17", "अनुच्छेद 19", "अनुच्छेद 25", "अनुच्छेद 14"],
        "answer": "Article 17",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which leader was associated with the Bhoodan Movement?",
        "question_hi": "भूदान आंदोलन से किस नेता का संबंध था?",
        "options_en": ["Vinoba Bhave", "Mahatma Gandhi", "Jayaprakash Narayan", "Jawaharlal Nehru"],
        "options_hi": ["विनोबा भावे", "महात्मा गांधी", "जयप्रकाश नारायण", "जवाहरलाल नेहरू"],
        "answer": "Vinoba Bhave",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "The term 'Secular' was added to the Preamble by which amendment?",
        "question_hi": "'Secular' शब्द संविधान की प्रस्तावना में किस संशोधन द्वारा जोड़ा गया था?",
        "options_en": ["42nd", "44th", "73rd", "86th"],
        "options_hi": ["42वां", "44वां", "73वां", "86वां"],
        "answer": "42nd",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "What is the meaning of Universal Adult Franchise?",
        "question_hi": "सार्वभौमिक वयस्क मताधिकार का क्या अर्थ है?",
        "options_en": ["Only men can vote", "Only educated people can vote", "All adults can vote", "Only officials can vote"],
        "options_hi": ["केवल पुरुष वोट कर सकते हैं", "केवल शिक्षित लोग वोट कर सकते हैं", "सभी वयस्क वोट कर सकते हैं", "केवल अधिकारी वोट कर सकते हैं"],
        "answer": "All adults can vote",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Which of these is a feature of a federal government?",
        "question_hi": "इनमें से कौन एक संघीय सरकार की विशेषता है?",
        "options_en": ["Single level government", "Division of powers", "Unitary laws", "No written constitution"],
        "options_hi": ["एक स्तरीय सरकार", "शक्तियों का विभाजन", "एकात्मक कानून", "लिखित संविधान नहीं"],
        "answer": "Division of powers",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "When did India become a republic?",
        "question_hi": "भारत गणराज्य कब बना?",
        "options_en": ["15th August 1947", "26th January 1950", "2nd October 1949", "26th November 1949"],
        "options_hi": ["15 अगस्त 1947", "26 जनवरी 1950", "2 अक्टूबर 1949", "26 नवम्बर 1949"],
        "answer": "26th January 1950",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What is the meaning of 'Fraternity' in the Preamble?",
        "question_hi": "प्रस्तावना में 'Fraternity' का क्या अर्थ है?",
        "options_en": ["Brotherhood", "Freedom", "Justice", "Equality"],
        "options_hi": ["भाईचारा", "स्वतंत्रता", "न्याय", "समानता"],
        "answer": "Brotherhood",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Which party emerged from the Janata Dal?",
        "question_hi": "जनता दल से कौन सी पार्टी निकली?",
        "options_en": ["BJP", "RJD", "Congress", "CPI"],
        "options_hi": ["बीजेपी", "राजद", "कांग्रेस", "सीपीआई"],
        "answer": "RJD",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Who is known as the father of Indian Constitution?",
        "question_hi": "भारतीय संविधान के जनक किसे कहा जाता है?",
        "options_en": ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Rajendra Prasad"],
        "options_hi": ["डॉ. बी.आर. अंबेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "राजेन्द्र प्रसाद"],
        "answer": "Dr. B.R. Ambedkar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which state was created in 2000?",
        "question_hi": "कौन सा राज्य 2000 में बनाया गया था?",
        "options_en": ["Chhattisgarh", "Kerala", "Punjab", "Goa"],
        "options_hi": ["छत्तीसगढ़", "केरल", "पंजाब", "गोवा"],
        "answer": "Chhattisgarh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which Fundamental Right is known as the soul of the Constitution?",
        "question_hi": "कौन सा मौलिक अधिकार संविधान की आत्मा कहलाता है?",
        "options_en": ["Right to Equality", "Right to Freedom", "Right to Constitutional Remedies", "Right against Exploitation"],
        "options_hi": ["समानता का अधिकार", "स्वतंत्रता का अधिकार", "संवैधानिक उपचारों का अधिकार", "शोषण के विरुद्ध अधिकार"],
        "answer": "Right to Constitutional Remedies",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Which article guarantees the Right to Education?",
        "question_hi": "शिक्षा का अधिकार किस अनुच्छेद में है?",
        "options_en": ["Article 21A", "Article 45", "Article 19", "Article 15"],
        "options_hi": ["अनुच्छेद 21A", "अनुच्छेद 45", "अनुच्छेद 19", "अनुच्छेद 15"],
        "answer": "Article 21A",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which institution recommends the distribution of taxes?",
        "question_hi": "करों के वितरण की सिफारिश कौन करता है?",
        "options_en": ["Finance Commission", "Election Commission", "Planning Commission", "Cabinet"],
        "options_hi": ["वित्त आयोग", "चुनाव आयोग", "योजना आयोग", "मंत्रिमंडल"],
        "answer": "Finance Commission",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which of these is not a Union Territory?",
        "question_hi": "इनमें से कौन एक केंद्रशासित प्रदेश नहीं है?",
        "options_en": ["Delhi", "Chandigarh", "Haryana", "Lakshadweep"],
        "options_hi": ["दिल्ली", "चंडीगढ़", "हरियाणा", "लक्षद्वीप"],
        "answer": "Haryana",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Which Fundamental Right was removed during the Emergency in 1975?",
        "question_hi": "1975 की आपातकाल के दौरान कौन सा मौलिक अधिकार समाप्त कर दिया गया था?",
        "options_en": ["Right to Equality", "Right to Property", "Right to Freedom", "Right to Education"],
        "options_hi": ["समानता का अधिकार", "संपत्ति का अधिकार", "स्वतंत्रता का अधिकार", "शिक्षा का अधिकार"],
        "answer": "Right to Property",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which of the following is a regional party?",
        "question_hi": "निम्न में से कौन सी एक क्षेत्रीय पार्टी है?",
        "options_en": ["BSP", "AIADMK", "BJP", "Congress"],
        "options_hi": ["बीएसपी", "एआईएडीएमके", "बीजेपी", "कांग्रेस"],
        "answer": "AIADMK",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Which Prime Minister gave the slogan 'Garibi Hatao'?",
        "question_hi": "'गरीबी हटाओ' नारा किस प्रधानमंत्री ने दिया था?",
        "options_en": ["Lal Bahadur Shastri", "Jawaharlal Nehru", "Indira Gandhi", "Rajiv Gandhi"],
        "options_hi": ["लाल बहादुर शास्त्री", "जवाहरलाल नेहरू", "इंदिरा गांधी", "राजीव गांधी"],
        "answer": "Indira Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which court is the highest judicial body in India?",
        "question_hi": "भारत में सर्वोच्च न्यायिक संस्था कौन सी है?",
        "options_en": ["High Court", "District Court", "Supreme Court", "Gram Nyayalaya"],
        "options_hi": ["हाई कोर्ट", "जिला न्यायालय", "सुप्रीम कोर्ट", "ग्राम न्यायालय"],
        "answer": "Supreme Court",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "What is the minimum age to become the President of India?",
        "question_hi": "भारत का राष्ट्रपति बनने की न्यूनतम आयु क्या है?",
        "options_en": ["30 years", "35 years", "40 years", "25 years"],
        "options_hi": ["30 वर्ष", "35 वर्ष", "40 वर्ष", "25 वर्ष"],
        "answer": "35 years",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Which body is responsible for making laws in India?",
        "question_hi": "भारत में कानून बनाने की जिम्मेदारी किस संस्था की है?",
        "options_en": ["Judiciary", "Executive", "Legislature", "President"],
        "options_hi": ["न्यायपालिका", "कार्यपालिका", "विधायिका", "राष्ट्रपति"],
        "answer": "Legislature",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "The right to vote in India is a:",
        "question_hi": "भारत में मतदान का अधिकार एक है:",
        "options_en": ["Fundamental Right", "Legal Right", "Natural Right", "Religious Right"],
        "options_hi": ["मौलिक अधिकार", "कानूनी अधिकार", "प्राकृतिक अधिकार", "धार्मिक अधिकार"],
        "answer": "Legal Right",
        "attempted": false,
        "selected": ""
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
