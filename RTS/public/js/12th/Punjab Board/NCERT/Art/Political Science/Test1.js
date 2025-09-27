const questions = [
        {
          "num": 1,
          "question_en": "Who was the first Prime Minister of India?",
          "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
          "options_en": ["Jawaharlal Nehru", "Gulzarilal Nanda", "Indira Gandhi", "Rajendra Prasad"],
          "options_hi": ["जवाहरलाल नेहरू", "गुलज़ारीलाल नंदा", "इंदिरा गांधी", "राजेंद्र प्रसाद"],
          "answer": "Jawaharlal Nehru",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which article of the Indian Constitution deals with the Right to Equality?",
          "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद समानता के अधिकार से संबंधित है?",
          "options_en": ["Article 14", "Article 19", "Article 21", "Article 32"],
          "options_hi": ["अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32"],
          "answer": "Article 14",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Who was the first woman Prime Minister of India?",
          "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
          "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],
          "options_hi": ["इंदिरा गांधी", "सारोजिनी नायडू", "प्रदीप पटिल", "सुषमा स्वराज"],
          "answer": "Indira Gandhi",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "What is the maximum number of seats a state can have in the Rajya Sabha?",
          "question_hi": "राज्यसभा में एक राज्य के पास अधिकतम कितनी सीटें हो सकती हैं?",
          "options_en": ["31", "40", "50", "100"],
          "options_hi": ["31", "40", "50", "100"],
          "answer": "50",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Who is responsible for the impeachment of the President of India?",
          "question_hi": "भारत के राष्ट्रपति को पद से हटाने की जिम्मेदारी किसकी होती है?",
          "options_en": ["Parliament", "Supreme Court", "Lok Sabha", "Rajya Sabha"],
          "options_hi": ["संसद", "सुप्रीम कोर्ट", "लोकसभा", "राज्यसभा"],
          "answer": "Parliament",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which article of the Indian Constitution gives the President the power to dissolve the Lok Sabha?",
          "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद राष्ट्रपति को लोकसभा को भंग करने का अधिकार देता है?",
          "options_en": ["Article 75", "Article 83", "Article 72", "Article 368"],
          "options_hi": ["अनुच्छेद 75", "अनुच्छेद 83", "अनुच्छेद 72", "अनुच्छेद 368"],
          "answer": "Article 83",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which of the following is not a fundamental right under the Indian Constitution?",
          "question_hi": "निम्नलिखित में से कौन भारतीय संविधान के तहत मौलिक अधिकार नहीं है?",
          "options_en": ["Right to Equality", "Right to Freedom", "Right to Property", "Right to Constitutional Remedies"],
          "options_hi": ["समानता का अधिकार", "स्वतंत्रता का अधिकार", "मालिकाना हक का अधिकार", "संवैधानिक उपायों का अधिकार"],
          "answer": "Right to Property",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which of the following is a feature of the Indian federal system?",
          "question_hi": "निम्नलिखित में से कौन भारतीय संघीय प्रणाली की विशेषता है?",
          "options_en": ["Single Citizenship", "Dual Judiciary", "Dual Citizenship", "None of the above"],
          "options_hi": ["एकल नागरिकता", "द्वैतीय न्यायपालिका", "द्वैतीय नागरिकता", "उपरोक्त में से कोई नहीं"],
          "answer": "Single Citizenship",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is the term of office for the President of India?",
          "question_hi": "भारत के राष्ट्रपति का कार्यकाल कितने वर्षों का होता है?",
          "options_en": ["4 years", "5 years", "6 years", "7 years"],
          "options_hi": ["4 वर्ष", "5 वर्ष", "6 वर्ष", "7 वर्ष"],
          "answer": "5 years",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which of the following is not a member of the Union Executive?",
          "question_hi": "निम्नलिखित में से कौन केंद्रीय कार्यपालिका का सदस्य नहीं है?",
          "options_en": ["Prime Minister", "Governor", "President", "Chief Minister"],
          "options_hi": ["प्रधानमंत्री", "राज्यपाल", "राष्ट्रपति", "मुख्यमंत्री"],
          "answer": "Chief Minister",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Who is the author of the Indian Constitution?",
          "question_hi": "भारतीय संविधान के लेखक कौन हैं?",
          "options_en": ["Dr. B.R. Ambedkar", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Patel"],
          "options_hi": ["डॉ. बी. आर. अंबेडकर", "डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "सरदार पटेल"],
          "answer": "Dr. B.R. Ambedkar",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which is the highest judicial body in India?",
          "question_hi": "भारत में सर्वोच्च न्यायिक संस्था कौन सी है?",
          "options_en": ["Supreme Court", "High Court", "District Court", "Circuit Court"],
          "options_hi": ["सुप्रीम कोर्ट", "हाई कोर्ट", "जिला न्यायालय", "सर्किट कोर्ट"],
          "answer": "Supreme Court",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is the voting age in India?",
          "question_hi": "भारत में मतदान की आयु क्या है?",
          "options_en": ["18 years", "21 years", "16 years", "25 years"],
          "options_hi": ["18 वर्ष", "21 वर्ष", "16 वर्ष", "25 वर्ष"],
          "answer": "18 years",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "What is the minimum age required to be elected as the President of India?",
          "question_hi": "भारत के राष्ट्रपति के रूप में चुने जाने के लिए न्यूनतम आयु कितनी होनी चाहिए?",
          "options_en": ["25 years", "35 years", "40 years", "45 years"],
          "options_hi": ["25 वर्ष", "35 वर्ष", "40 वर्ष", "45 वर्ष"],
          "answer": "35 years",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which of the following is the main function of the Rajya Sabha?",
          "question_hi": "निम्नलिखित में से कौन सा राज्यसभा का मुख्य कार्य है?",
          "options_en": ["Legislative", "Judicial", "Executive", "Electoral"],
          "options_hi": ["विधानसभा", "न्यायिक", "कार्यपालिका", "निर्वाचक"],
          "answer": "Legislative",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Who was the first woman Chief Minister of an Indian state?",
          "question_hi": "भारत के किसी राज्य की पहली महिला मुख्यमंत्री कौन थीं?",
          "options_en": ["Sarojini Naidu", "Indira Gandhi", "Nandini Satpathy", "Vijayalakshmi Pandit"],
          "options_hi": ["सारोजिनी नायडू", "इंदिरा गांधी", "नंदिनी सतपथी", "विजयलक्ष्मी पंडित"],
          "answer": "Nandini Satpathy",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which of the following is not a part of the Directive Principles of State Policy?",
          "question_hi": "निम्नलिखित में से कौन राज्य नीति निर्देशक सिद्धांतों का हिस्सा नहीं है?",
          "options_en": ["Right to Education", "Protection of Children", "Promotion of International Peace", "Right to Property"],
          "options_hi": ["शिक्षा का अधिकार", "बच्चों का संरक्षण", "अंतर्राष्ट्रीय शांति का प्रचार", "मालिकाना हक का अधिकार"],
          "answer": "Right to Property",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which political party is known as the oldest political party in India?",
          "question_hi": "कौन सी राजनीतिक पार्टी भारत की सबसे पुरानी राजनीतिक पार्टी के रूप में जानी जाती है?",
          "options_en": ["Indian National Congress", "BJP", "Janata Party", "Communist Party of India"],
          "options_hi": ["भारतीय राष्ट्रीय कांग्रेस", "भा.ज.पा.", "जनता पार्टी", "भारतीय कम्युनिस्ट पार्टी"],
          "answer": "Indian National Congress",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which of the following is a type of direct democracy?",
          "question_hi": "निम्नलिखित में से कौन सा प्रत्यक्ष लोकतंत्र का प्रकार है?",
          "options_en": ["Referendum", "Election", "Legislation", "Appointments"],
          "options_hi": ["सर्वेक्षण", "चुनाव", "विधायन", "नियुक्तियाँ"],
          "answer": "Referendum",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Who was the first woman Speaker of the Lok Sabha?",
          "question_hi": "लोकसभा की पहली महिला अध्यक्ष कौन थीं?",
          "options_en": ["Meira Kumar", "Sushma Swaraj", "Pratibha Patil", "Vasundhara Raje"],
          "options_hi": ["मीरा कुमार", "सुषमा स्वराज", "प्रदीप पटिल", "वसुंधरा राजे"],
          "answer": "Meira Kumar",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Who appoints the Governor of a State in India?",
          "question_hi": "भारत में राज्य के राज्यपाल की नियुक्ति कौन करता है?",
          "options_en": ["Prime Minister", "President", "Chief Minister", "Governor of the State"],
          "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "मुख्यमंत्री", "राज्यपाल"],
          "answer": "President",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Which article of the Indian Constitution deals with the President's powers?",
          "question_hi": "भारतीय संविधान का कौन सा अनुच्छेद राष्ट्रपति के अधिकारों से संबंधित है?",
          "options_en": ["Article 53", "Article 74", "Article 75", "Article 80"],
          "options_hi": ["अनुच्छेद 53", "अनुच्छेद 74", "अनुच्छेद 75", "अनुच्छेद 80"],
          "answer": "Article 53",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "What is the main function of the Indian judiciary?",
          "question_hi": "भारतीय न्यायपालिका का मुख्य कार्य क्या है?",
          "options_en": ["Enforcing the Law", "Making Laws", "Amending Laws", "Administering Laws"],
          "options_hi": ["कानून लागू करना", "कानून बनाना", "कानून में संशोधन करना", "कानून का पालन करना"],
          "answer": "Enforcing the Law",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "Which of the following is the highest court of appeal in India?",
          "question_hi": "निम्नलिखित में से कौन सा भारत में उच्चतम अपील न्यायालय है?",
          "options_en": ["Supreme Court", "High Court", "District Court", "Session Court"],
          "options_hi": ["सुप्रीम कोर्ट", "हाई कोर्ट", "जिला न्यायालय", "सत्र न्यायालय"],
          "answer": "Supreme Court",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "What is the maximum age for a person to become the President of India?",
          "question_hi": "भारत के राष्ट्रपति बनने के लिए एक व्यक्ति की अधिकतम आयु कितनी होनी चाहिए?",
          "options_en": ["70 years", "65 years", "60 years", "75 years"],
          "options_hi": ["70 वर्ष", "65 वर्ष", "60 वर्ष", "75 वर्ष"],
          "answer": "No age limit",
          "attempted": false,
          "selected": ""
        },
        {
            "num": 26,
            "question_en": "Who appoints the judges of the Supreme Court of India?",
            "question_hi": "भारत के सर्वोच्च न्यायालय के न्यायाधीशों की नियुक्ति कौन करता है?",
            "options_en": ["Prime Minister", "President", "Chief Justice", "Parliament"],
            "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "मुख्य न्यायाधीश", "संसद"],
            "answer": "President",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 27,
            "question_en": "What is the term of office of the members of the Rajya Sabha?",
            "question_hi": "राज्यसभा के सदस्यों का कार्यकाल कितना होता है?",
            "options_en": ["4 years", "5 years", "6 years", "10 years"],
            "options_hi": ["4 वर्ष", "5 वर्ष", "6 वर्ष", "10 वर्ष"],
            "answer": "6 years",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 28,
            "question_en": "Which of the following is a part of the Union Legislature?",
            "question_hi": "निम्नलिखित में से कौन केंद्रीय विधानमंडल का हिस्सा है?",
            "options_en": ["Lok Sabha", "Rajya Sabha", "Both Lok Sabha and Rajya Sabha", "President"],
            "options_hi": ["लोकसभा", "राज्यसभा", "लोकसभा और राज्यसभा दोनों", "राष्ट्रपति"],
            "answer": "Both Lok Sabha and Rajya Sabha",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 29,
            "question_en": "Which is the highest court of appeal in India?",
            "question_hi": "भारत में सर्वोच्च अपील न्यायालय कौन सा है?",
            "options_en": ["Supreme Court", "High Court", "District Court", "Family Court"],
            "options_hi": ["सुप्रीम कोर्ट", "हाई कोर्ट", "जिला न्यायालय", "परिवार न्यायालय"],
            "answer": "Supreme Court",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 30,
            "question_en": "Who can dissolve the Lok Sabha in India?",
            "question_hi": "भारत में लोकसभा को कौन भंग कर सकता है?",
            "options_en": ["President", "Prime Minister", "Chief Justice", "Governor"],
            "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश", "राज्यपाल"],
            "answer": "President",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 31,
            "question_en": "What is the maximum strength of the Lok Sabha?",
            "question_hi": "लोकसभा की अधिकतम संख्या क्या है?",
            "options_en": ["545", "552", "500", "600"],
            "options_hi": ["545", "552", "500", "600"],
            "answer": "552",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 32,
            "question_en": "Which of the following is a fundamental duty of an Indian citizen?",
            "question_hi": "निम्नलिखित में से कौन भारतीय नागरिक का एक मौलिक कर्तव्य है?",
            "options_en": ["To pay taxes", "To promote harmony", "To obey the law", "All of the above"],
            "options_hi": ["करों का भुगतान करना", "सद्भावना को बढ़ावा देना", "कानून का पालन करना", "उपरोक्त सभी"],
            "answer": "All of the above",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 33,
            "question_en": "Which body is responsible for the conduct of elections in India?",
            "question_hi": "भारत में चुनावों के आयोजन के लिए कौन सी संस्था जिम्मेदार है?",
            "options_en": ["Election Commission", "Supreme Court", "Parliament", "Prime Minister's Office"],
            "options_hi": ["चुनाव आयोग", "सुप्रीम कोर्ट", "संसद", "प्रधानमंत्री कार्यालय"],
            "answer": "Election Commission",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 34,
            "question_en": "Which of the following is a feature of the Indian Constitution?",
            "question_hi": "निम्नलिखित में से कौन भारतीय संविधान की विशेषता है?",
            "options_en": ["Secularism", "Federalism", "Republic", "All of the above"],
            "options_hi": ["धर्मनिरपेक्षता", "संघीयता", "गणराज्य", "उपरोक्त सभी"],
            "answer": "All of the above",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 35,
            "question_en": "What is the highest post in the Indian Government?",
            "question_hi": "भारत सरकार में सबसे उच्च पद क्या है?",
            "options_en": ["President", "Prime Minister", "Governor", "Chief Justice"],
            "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "राज्यपाल", "मुख्य न्यायाधीश"],
            "answer": "President",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 36,
            "question_en": "Who was the first woman Speaker of the Lok Sabha?",
            "question_hi": "लोकसभा की पहली महिला अध्यक्ष कौन थीं?",
            "options_en": ["Meira Kumar", "Sushma Swaraj", "Indira Gandhi", "Sarojini Naidu"],
            "options_hi": ["मीरा कुमार", "सुषमा स्वराज", "इंदिरा गांधी", "सारोजिनी नायडू"],
            "answer": "Meira Kumar",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 37,
            "question_en": "What is the minimum age for becoming the Prime Minister of India?",
            "question_hi": "भारत के प्रधानमंत्री बनने के लिए न्यूनतम आयु क्या है?",
            "options_en": ["30 years", "35 years", "25 years", "40 years"],
            "options_hi": ["30 वर्ष", "35 वर्ष", "25 वर्ष", "40 वर्ष"],
            "answer": "25 years",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 38,
            "question_en": "Which of the following is not a member of the Union Executive?",
            "question_hi": "निम्नलिखित में से कौन केंद्रीय कार्यपालिका का सदस्य नहीं है?",
            "options_en": ["President", "Prime Minister", "Governor", "Attorney General"],
            "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "राज्यपाल", "महाधिवक्ता"],
            "answer": "Governor",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 39,
            "question_en": "Who is the head of the government in a parliamentary system?",
            "question_hi": "संसदीय प्रणाली में सरकार का प्रमुख कौन होता है?",
            "options_en": ["President", "Prime Minister", "Governor", "Speaker"],
            "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "राज्यपाल", "अध्यक्ष"],
            "answer": "Prime Minister",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 40,
            "question_en": "Which of the following is not a part of the Indian Parliament?",
            "question_hi": "निम्नलिखित में से कौन भारतीय संसद का हिस्सा नहीं है?",
            "options_en": ["Lok Sabha", "Rajya Sabha", "President", "Supreme Court"],
            "options_hi": ["लोकसभा", "राज्यसभा", "राष्ट्रपति", "सुप्रीम कोर्ट"],
            "answer": "Supreme Court",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 41,
            "question_en": "Which of the following is the first step in the law-making process in India?",
            "question_hi": "भारत में कानून बनाने की प्रक्रिया में पहला कदम क्या है?",
            "options_en": ["Introduction of Bill", "Approval of Bill", "Presidential Assent", "Debate on Bill"],
            "options_hi": ["बिल का परिचय", "बिल की स्वीकृति", "राष्ट्रपति की सहमति", "बिल पर बहस"],
            "answer": "Introduction of Bill",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 42,
            "question_en": "What is the maximum age for a person to become a Judge of the Supreme Court?",
            "question_hi": "भारत के सर्वोच्च न्यायालय के न्यायाधीश बनने के लिए एक व्यक्ति की अधिकतम आयु कितनी होनी चाहिए?",
            "options_en": ["65 years", "60 years", "70 years", "75 years"],
            "options_hi": ["65 वर्ष", "60 वर्ष", "70 वर्ष", "75 वर्ष"],
            "answer": "65 years",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 43,
            "question_en": "What is the maximum strength of the Rajya Sabha?",
            "question_hi": "राज्यसभा की अधिकतम संख्या क्या है?",
            "options_en": ["250", "245", "300", "500"],
            "options_hi": ["250", "245", "300", "500"],
            "answer": "250",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 44,
            "question_en": "Which of the following is responsible for maintaining law and order in India?",
            "question_hi": "भारत में कानून और व्यवस्था बनाए रखने के लिए कौन जिम्मेदार है?",
            "options_en": ["State Government", "Central Government", "Supreme Court", "Election Commission"],
            "options_hi": ["राज्य सरकार", "केंद्र सरकार", "सुप्रीम कोर्ट", "चुनाव आयोग"],
            "answer": "State Government",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 45,
            "question_en": "Who is the Chief Executive of a State in India?",
            "question_hi": "भारत में राज्य का प्रमुख कार्यकारी अधिकारी कौन है?",
            "options_en": ["Governor", "Chief Minister", "President", "Prime Minister"],
            "options_hi": ["राज्यपाल", "मुख्यमंत्री", "राष्ट्रपति", "प्रधानमंत्री"],
            "answer": "Governor",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 46,
            "question_en": "What is the maximum number of members in the Lok Sabha?",
            "question_hi": "लोकसभा में अधिकतम कितने सदस्य हो सकते हैं?",
            "options_en": ["545", "552", "500", "600"],
            "options_hi": ["545", "552", "500", "600"],
            "answer": "552",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 47,
            "question_en": "The impeachment of the President of India can be initiated by whom?",
            "question_hi": "भारत के राष्ट्रपति को बर्खास्त करने की प्रक्रिया किसके द्वारा शुरू की जा सकती है?",
            "options_en": ["Lok Sabha", "Rajya Sabha", "Supreme Court", "Any House of Parliament"],
            "options_hi": ["लोकसभा", "राज्यसभा", "सुप्रीम कोर्ट", "संसद का कोई भी सदन"],
            "answer": "Any House of Parliament",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 48,
            "question_en": "Which of the following is the first step to introduce a Bill in Parliament?",
            "question_hi": "संसद में एक बिल पेश करने के लिए पहला कदम क्या है?",
            "options_en": ["Introduction of Bill", "Approval of Bill", "Presidential Assent", "Debate on Bill"],
            "options_hi": ["बिल का परिचय", "बिल की स्वीकृति", "राष्ट्रपति की सहमति", "बिल पर बहस"],
            "answer": "Introduction of Bill",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 49,
            "question_en": "Who appoints the Chief Justice of India?",
            "question_hi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
            "options_en": ["President", "Prime Minister", "Parliament", "Supreme Court"],
            "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "संसद", "सुप्रीम कोर्ट"],
            "answer": "President",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 50,
            "question_en": "Which of the following is the ultimate authority for interpreting the Constitution of India?",
            "question_hi": "भारत के संविधान की व्याख्या करने का अंतिम अधिकार कौन सा है?",
            "options_en": ["Supreme Court", "President", "Parliament", "Attorney General"],
            "options_hi": ["सुप्रीम कोर्ट", "राष्ट्रपति", "संसद", "महाधिवक्ता"],
            "answer": "Supreme Court",
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
