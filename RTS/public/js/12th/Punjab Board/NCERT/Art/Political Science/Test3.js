const questions = [
        {
          "num": 1,
          "question_en": "Which of the following is the most appropriate meaning of 'Politics'?",
          "question_hi": "‘राजनीति’ का सबसे उपयुक्त अर्थ निम्न में से कौन सा है?",
          "options_en": ["Study of war", "Study of power and governance", "Study of art", "Study of business"],
          "options_hi": ["युद्ध का अध्ययन", "शक्ति और शासन का अध्ययन", "कला का अध्ययन", "व्यापार का अध्ययन"],
          "answer": "Study of power and governance",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which of the following is an example of a democratic government?",
          "question_hi": "निम्नलिखित में से कौन लोकतांत्रिक सरकार का उदाहरण है?",
          "options_en": ["Monarchy", "Military Rule", "Dictatorship", "Parliamentary system"],
          "options_hi": ["राजशाही", "सैन्य शासन", "तानाशाही", "संसदीय प्रणाली"],
          "answer": "Parliamentary system",
          "attempted": false,
          "selected": ""
        },
        {
           
          "num": 3,
          "question_en": "When did India become a Republic?",
          "question_hi": "भारत गणराज्य कब बना?",
          "options_en": ["15 August 1947", "26 January 1950", "2 October 1948", "30 January 1949"],
          "options_hi": ["15 अगस्त 1947", "26 जनवरी 1950", "2 अक्टूबर 1948", "30 जनवरी 1949"],
          "answer": "26 January 1950",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which of the following bodies is responsible for making laws in India?",
          "question_hi": "भारत में कानून बनाने की जिम्मेदारी किस संस्था की है?",
          "options_en": ["Judiciary", "Executive", "Legislature", "Election Commission"],
          "options_hi": ["न्यायपालिका", "कार्यपालिका", "विधायिका", "चुनाव आयोग"],
          "answer": "Legislature",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which one of the following is not a feature of democracy?",
          "question_hi": "निम्नलिखित में से कौन लोकतंत्र की विशेषता नहीं है?",
          "options_en": ["Free and fair elections", "Rule of law", "One-party rule", "Citizen participation"],
          "options_hi": ["स्वतंत्र और निष्पक्ष चुनाव", "कानून का शासन", "एकदलीय शासन", "नागरिकों की भागीदारी"],
          "answer": "One-party rule",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "What does 'sovereignty' mean?",
          "question_hi": "'संप्रभुता' का क्या अर्थ है?",
          "options_en": ["Rule of religion", "Rule by army", "Supreme power of the state", "Control by foreign country"],
          "options_hi": ["धर्म का शासन", "सेना का शासन", "राज्य की सर्वोच्च शक्ति", "विदेशी देश का नियंत्रण"],
          "answer": "Supreme power of the state",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which article of the Indian Constitution deals with Fundamental Rights?",
          "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद मौलिक अधिकारों से संबंधित है?",
          "options_en": ["Article 12 to 35", "Article 36 to 51", "Article 51A", "Article 1 to 11"],
          "options_hi": ["अनुच्छेद 12 से 35", "अनुच्छेद 36 से 51", "अनुच्छेद 51A", "अनुच्छेद 1 से 11"],
          "answer": "Article 12 to 35",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which of the following is the guardian of the Constitution?",
          "question_hi": "निम्नलिखित में से संविधान का संरक्षक कौन है?",
          "options_en": ["Parliament", "President", "Supreme Court", "Prime Minister"],
          "options_hi": ["संसद", "राष्ट्रपति", "सुप्रीम कोर्ट", "प्रधानमंत्री"],
          "answer": "Supreme Court",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which of the following is not a Union Territory of India?",
          "question_hi": "निम्नलिखित में से कौन भारत का केंद्र शासित प्रदेश नहीं है?",
          "options_en": ["Ladakh", "Delhi", "Puducherry", "Sikkim"],
          "options_hi": ["लद्दाख", "दिल्ली", "पुडुचेरी", "सिक्किम"],
          "answer": "Sikkim",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Who appoints the Chief Election Commissioner of India?",
          "question_hi": "भारत के मुख्य चुनाव आयुक्त की नियुक्ति कौन करता है?",
          "options_en": ["President", "Prime Minister", "Chief Justice", "Parliament"],
          "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश", "संसद"],
          "answer": "President",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which of the following is not a Fundamental Duty?",
          "question_hi": "निम्नलिखित में से कौन एक मौलिक कर्तव्य नहीं है?",
          "options_en": ["Respect for the Constitution", "Promotion of education", "Protecting national heritage", "Paying taxes"],
          "options_hi": ["संविधान का सम्मान", "शिक्षा का प्रचार", "राष्ट्रीय धरोहर की रक्षा", "करों का भुगतान"],
          "answer": "Paying taxes",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "How many states are there in India currently (as of 2024)?",
          "question_hi": "वर्तमान में भारत में कितने राज्य हैं (2024 तक)?",
          "options_en": ["28", "29", "30", "27"],
          "options_hi": ["28", "29", "30", "27"],
          "answer": "28",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which party led India’s first government after independence?",
          "question_hi": "भारत की स्वतंत्रता के बाद पहली सरकार किस पार्टी ने बनाई?",
          "options_en": ["BJP", "Congress", "CPI", "SP"],
          "options_hi": ["भाजपा", "कांग्रेस", "सीपीआई", "सपा"],
          "answer": "Congress",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Who is the head of the government in a Parliamentary system?",
          "question_hi": "संसदीय प्रणाली में सरकार का प्रमुख कौन होता है?",
          "options_en": ["President", "Prime Minister", "Speaker", "Governor"],
          "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "सभापति", "राज्यपाल"],
          "answer": "Prime Minister",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which of these is the highest law-making body in India?",
          "question_hi": "भारत में सबसे उच्च कानून बनाने वाली संस्था कौन सी है?",
          "options_en": ["Supreme Court", "Parliament", "President", "Cabinet"],
          "options_hi": ["सुप्रीम कोर्ट", "संसद", "राष्ट्रपति", "मंत्रिमंडल"],
          "answer": "Parliament",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "How many houses are there in the Indian Parliament?",
          "question_hi": "भारतीय संसद में कितने सदन होते हैं?",
          "options_en": ["1", "2", "3", "4"],
          "options_hi": ["1", "2", "3", "4"],
          "answer": "2",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which article of the Constitution mentions the Emergency provisions?",
          "question_hi": "संविधान का कौन सा अनुच्छेद आपातकालीन प्रावधानों का उल्लेख करता है?",
          "options_en": ["Article 370", "Article 356", "Article 352", "Article 324"],
          "options_hi": ["अनुच्छेद 370", "अनुच्छेद 356", "अनुच्छेद 352", "अनुच्छेद 324"],
          "answer": "Article 352",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which state was created in 2000?",
          "question_hi": "2000 में किस राज्य का निर्माण हुआ?",
          "options_en": ["Goa", "Jharkhand", "Kerala", "Punjab"],
          "options_hi": ["गोवा", "झारखंड", "केरल", "पंजाब"],
          "answer": "Jharkhand",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which of these is a federal feature of the Indian Constitution?",
          "question_hi": "भारतीय संविधान की निम्नलिखित में से कौन सी संघीय विशेषता है?",
          "options_en": ["Single citizenship", "Independent judiciary", "Unitary system", "All powers to center"],
          "options_hi": ["एकल नागरिकता", "स्वतंत्र न्यायपालिका", "एकात्मक प्रणाली", "सभी शक्तियाँ केंद्र को"],
          "answer": "Independent judiciary",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which one of the following is the largest democracy in the world?",
          "question_hi": "निम्नलिखित में से कौन विश्व का सबसे बड़ा लोकतंत्र है?",
          "options_en": ["USA", "UK", "India", "China"],
          "options_hi": ["अमेरिका", "यूके", "भारत", "चीन"],
          "answer": "India",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Which house of Parliament is called the Upper House?",
          "question_hi": "संसद का कौन सा सदन उच्च सदन कहलाता है?",
          "options_en": ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "None"],
          "options_hi": ["लोकसभा", "राज्यसभा", "विधानसभा", "कोई नहीं"],
          "answer": "Rajya Sabha",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Who can dissolve the Lok Sabha?",
          "question_hi": "लोकसभा को भंग कौन कर सकता है?",
          "options_en": ["Prime Minister", "President", "Speaker", "Chief Justice"],
          "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "सभापति", "मुख्य न्यायाधीश"],
          "answer": "President",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Which of the following is a pressure group?",
          "question_hi": "निम्नलिखित में से कौन एक दबाव समूह है?",
          "options_en": ["BJP", "Congress", "Farmers Union", "Lok Sabha"],
          "options_hi": ["भाजपा", "कांग्रेस", "किसान यूनियन", "लोकसभा"],
          "answer": "Farmers Union",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "Which body conducts elections in India?",
          "question_hi": "भारत में चुनाव कौन कराता है?",
          "options_en": ["President", "Election Commission", "Prime Minister", "Supreme Court"],
          "options_hi": ["राष्ट्रपति", "चुनाव आयोग", "प्रधानमंत्री", "सुप्रीम कोर्ट"],
          "answer": "Election Commission",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "Which is the highest judicial authority in India?",
          "question_hi": "भारत में सर्वोच्च न्यायिक संस्था कौन सी है?",
          "options_en": ["High Court", "District Court", "Supreme Court", "Lok Adalat"],
          "options_hi": ["उच्च न्यायालय", "जिला न्यायालय", "सुप्रीम कोर्ट", "लोक अदालत"],
          "answer": "Supreme Court",
          "attempted": false,
          "selected": ""
        },
    {
        "num": 26,
        "question_en": "What is the maximum strength of the Lok Sabha?",
        "question_hi": "लोकसभा की अधिकतम सदस्य संख्या क्या है?",
        "options_en": ["545", "550", "552", "560"],
        "options_hi": ["545", "550", "552", "560"],
        "answer": "552",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Which state has the largest number of Lok Sabha constituencies?",
        "question_hi": "किस राज्य में लोकसभा निर्वाचन क्षेत्रों की संख्या सबसे अधिक है?",
        "options_en": ["Maharashtra", "West Bengal", "Uttar Pradesh", "Bihar"],
        "options_hi": ["महाराष्ट्र", "पश्चिम बंगाल", "उत्तर प्रदेश", "बिहार"],
        "answer": "Uttar Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Who is known as the 'Father of the Indian Constitution'?",
        "question_hi": "भारतीय संविधान के जनक के रूप में किसे जाना जाता है?",
        "options_en": ["Jawaharlal Nehru", "B.R. Ambedkar", "Mahatma Gandhi", "Rajendra Prasad"],
        "options_hi": ["जवाहरलाल नेहरू", "भीमराव अंबेडकर", "महात्मा गांधी", "राजेन्द्र प्रसाद"],
        "answer": "B.R. Ambedkar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Which political party was founded by Subhas Chandra Bose?",
        "question_hi": "सुभाष चंद्र बोस द्वारा किस राजनीतिक पार्टी की स्थापना की गई थी?",
        "options_en": ["Forward Bloc", "Congress", "Swaraj Party", "Socialist Party"],
        "options_hi": ["फॉरवर्ड ब्लॉक", "कांग्रेस", "स्वराज पार्टी", "समाजवादी पार्टी"],
        "answer": "Forward Bloc",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "In which year was the first general election held in India?",
        "question_hi": "भारत में पहला आम चुनाव किस वर्ष हुआ था?",
        "options_en": ["1947", "1950", "1951-52", "1956"],
        "options_hi": ["1947", "1950", "1951-52", "1956"],
        "answer": "1951-52",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which commission is responsible for delimiting constituencies in India?",
        "question_hi": "भारत में निर्वाचन क्षेत्रों के परिसीमन के लिए कौन सा आयोग उत्तरदायी है?",
        "options_en": ["Election Commission", "Planning Commission", "Finance Commission", "Delimitation Commission"],
        "options_hi": ["चुनाव आयोग", "योजना आयोग", "वित्त आयोग", "परिसीमन आयोग"],
        "answer": "Delimitation Commission",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is the tenure of a Rajya Sabha member?",
        "question_hi": "राज्यसभा सदस्य का कार्यकाल कितने वर्षों का होता है?",
        "options_en": ["3 years", "4 years", "5 years", "6 years"],
        "options_hi": ["3 वर्ष", "4 वर्ष", "5 वर्ष", "6 वर्ष"],
        "answer": "6 years",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Who is the presiding officer of the Lok Sabha?",
        "question_hi": "लोकसभा के सभापति कौन होते हैं?",
        "options_en": ["President", "Vice President", "Speaker", "Prime Minister"],
        "options_hi": ["राष्ट्रपति", "उप-राष्ट्रपति", "लोकसभा अध्यक्ष", "प्रधानमंत्री"],
        "answer": "Speaker",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "What is the minimum age to become a member of the Lok Sabha?",
        "question_hi": "लोकसभा का सदस्य बनने के लिए न्यूनतम आयु कितनी होनी चाहिए?",
        "options_en": ["18 years", "21 years", "25 years", "30 years"],
        "options_hi": ["18 वर्ष", "21 वर्ष", "25 वर्ष", "30 वर्ष"],
        "answer": "25 years",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Which body elects the President of India?",
        "question_hi": "भारत के राष्ट्रपति का निर्वाचन कौन करता है?",
        "options_en": ["Lok Sabha", "Rajya Sabha", "People of India", "Electoral College"],
        "options_hi": ["लोकसभा", "राज्यसभा", "भारत की जनता", "निर्वाचक मंडल"],
        "answer": "Electoral College",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Which party is known for the slogan 'Garibi Hatao'?",
        "question_hi": "'गरीबी हटाओ' नारे के लिए कौन सी पार्टी जानी जाती है?",
        "options_en": ["BJP", "CPI", "Congress", "SP"],
        "options_hi": ["भाजपा", "सीपीआई", "कांग्रेस", "सपा"],
        "answer": "Congress",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Which state was formed on linguistic basis first in India?",
        "question_hi": "भारत में भाषाई आधार पर पहला राज्य कौन सा बना?",
        "options_en": ["Andhra Pradesh", "Karnataka", "Punjab", "Tamil Nadu"],
        "options_hi": ["आंध्र प्रदेश", "कर्नाटक", "पंजाब", "तमिलनाडु"],
        "answer": "Andhra Pradesh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What does the term 'Bicameral Legislature' mean?",
        "question_hi": "'द्विसदनीय विधायिका' का क्या अर्थ है?",
        "options_en": ["One house", "Two houses", "Three houses", "None"],
        "options_hi": ["एक सदन", "दो सदन", "तीन सदन", "कोई नहीं"],
        "answer": "Two houses",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Who appoints the Governor of a state?",
        "question_hi": "राज्यपाल की नियुक्ति कौन करता है?",
        "options_en": ["Chief Minister", "President", "Prime Minister", "Speaker"],
        "options_hi": ["मुख्यमंत्री", "राष्ट्रपति", "प्रधानमंत्री", "अध्यक्ष"],
        "answer": "President",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which article of the Constitution provides for the Election Commission?",
        "question_hi": "संविधान का कौन सा अनुच्छेद चुनाव आयोग से संबंधित है?",
        "options_en": ["Article 324", "Article 326", "Article 356", "Article 370"],
        "options_hi": ["अनुच्छेद 324", "अनुच्छेद 326", "अनुच्छेद 356", "अनुच्छेद 370"],
        "answer": "Article 324",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Which amendment lowered the voting age from 21 to 18 years?",
        "question_hi": "किस संशोधन द्वारा मतदान की आयु 21 से 18 वर्ष कर दी गई?",
        "options_en": ["42nd Amendment", "44th Amendment", "61st Amendment", "73rd Amendment"],
        "options_hi": ["42वां संशोधन", "44वां संशोधन", "61वां संशोधन", "73वां संशोधन"],
        "answer": "61st Amendment",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "What is the full form of UPA?",
        "question_hi": "UPA का पूर्ण रूप क्या है?",
        "options_en": ["United Political Alliance", "Union Progressive Alliance", "United Progressive Alliance", "Union Public Association"],
        "options_hi": ["यूनाइटेड पॉलिटिकल अलायंस", "यूनियन प्रोग्रेसिव अलायंस", "यूनाइटेड प्रोग्रेसिव अलायंस", "यूनियन पब्लिक एसोसिएशन"],
        "answer": "United Progressive Alliance",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which Prime Minister gave the slogan 'Jai Jawan Jai Kisan'?",
        "question_hi": "‘जय जवान जय किसान’ का नारा किस प्रधानमंत्री ने दिया था?",
        "options_en": ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Rajiv Gandhi"],
        "options_hi": ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी", "राजीव गांधी"],
        "answer": "Lal Bahadur Shastri",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Which is the highest court of appeal in India?",
        "question_hi": "भारत में सबसे उच्च अपीलीय न्यायालय कौन सा है?",
        "options_en": ["High Court", "Supreme Court", "District Court", "Session Court"],
        "options_hi": ["हाई कोर्ट", "सुप्रीम कोर्ट", "जिला न्यायालय", "सेशन कोर्ट"],
        "answer": "Supreme Court",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which article ensures freedom of speech in India?",
        "question_hi": "भारत में अभिव्यक्ति की स्वतंत्रता किस अनुच्छेद द्वारा सुनिश्चित की गई है?",
        "options_en": ["Article 14", "Article 15", "Article 19", "Article 21"],
        "options_hi": ["अनुच्छेद 14", "अनुच्छेद 15", "अनुच्छेद 19", "अनुच्छेद 21"],
        "answer": "Article 19",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Which fundamental right was removed during the Emergency (1975)?",
        "question_hi": "आपातकाल (1975) के दौरान कौन सा मौलिक अधिकार निलंबित किया गया था?",
        "options_en": ["Right to Equality", "Right to Property", "Right to Education", "Right to Freedom"],
        "options_hi": ["समानता का अधिकार", "संपत्ति का अधिकार", "शिक्षा का अधिकार", "स्वतंत्रता का अधिकार"],
        "answer": "Right to Property",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which institution publishes the Economic Survey of India?",
        "question_hi": "भारत का आर्थिक सर्वेक्षण कौन सा संस्थान प्रकाशित करता है?",
        "options_en": ["NITI Aayog", "Finance Ministry", "RBI", "Planning Commission"],
        "options_hi": ["नीति आयोग", "वित्त मंत्रालय", "भारतीय रिज़र्व बैंक", "योजना आयोग"],
        "answer": "Finance Ministry",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which party emerged as the main opposition after the 1977 elections?",
        "question_hi": "1977 के चुनावों के बाद कौन सी पार्टी मुख्य विपक्ष के रूप में उभरी?",
        "options_en": ["BJP", "Congress", "Janata Party", "CPI"],
        "options_hi": ["भाजपा", "कांग्रेस", "जनता पार्टी", "सीपीआई"],
        "answer": "Congress",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Which is not a feature of a secular state?",
        "question_hi": "निम्नलिखित में से कौन धर्मनिरपेक्ष राज्य की विशेषता नहीं है?",
        "options_en": ["Equal treatment to all religions", "Religious freedom", "State religion", "No religious bias"],
        "options_hi": ["सभी धर्मों के साथ समान व्यवहार", "धार्मिक स्वतंत्रता", "राज्य धर्म", "कोई धार्मिक पक्षपात नहीं"],
        "answer": "State religion",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What is the minimum age to contest for the post of President in India?",
        "question_hi": "भारत में राष्ट्रपति पद के लिए न्यूनतम आयु कितनी है?",
        "options_en": ["25 years", "30 years", "35 years", "40 years"],
        "options_hi": ["25 वर्ष", "30 वर्ष", "35 वर्ष", "40 वर्ष"],
        "answer": "35 years",
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
