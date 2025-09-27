const questions = [
    {
        "num": 1,
        "question_en": "Who was the first emperor of the Maurya dynasty?",
        "question_hi": "मौर्य वंश के पहले सम्राट कौन थे?",
        "options_en": ["Ashoka", "Bindusara", "Chandragupta Maurya", "Bimbisara"],
        "options_hi": ["अशोक", "बिंदुसार", "चंद्रगुप्त मौर्य", "बिंबिसार"],
        "answer": "Chandragupta Maurya",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "The Indus Valley Civilization was primarily located in which modern-day countries?",
        "question_hi": "सिंधु घाटी सभ्यता मुख्य रूप से किन आधुनिक देशों में स्थित थी?",
        "options_en": ["India and Pakistan", "India and Bangladesh", "Pakistan and Afghanistan", "India, Pakistan, and Afghanistan"],
        "options_hi": ["भारत और पाकिस्तान", "भारत और बांगलादेश", "पाकिस्तान और अफगानिस्तान", "भारत, पाकिस्तान, और अफगानिस्तान"],
        "answer": "India and Pakistan",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Who was the founder of the Maurya Empire?",
        "question_hi": "मौर्य साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Bimbisara"],
        "options_hi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "बिंबिसार"],
        "answer": "Chandragupta Maurya",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Who among the following was the first ruler of the Gupta dynasty?",
        "question_hi": "निम्नलिखित में से कौन गुप्त वंश का पहला शासक था?",
        "options_en": ["Chandragupta I", "Samudragupta", "Chandragupta II", "Kumaragupta I"],
        "options_hi": ["चंद्रगुप्त I", "समुद्रगुप्त", "चंद्रगुप्त II", "कुमारगुप्त I"],
        "answer": "Chandragupta I",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Which battle led to the defeat of the Rajputs by Muhammad Ghori?",
        "question_hi": "कौन सी लड़ाई में मुहम्मद गोरी ने राजपूतों को पराजित किया था?",
        "options_en": ["Battle of Tarain", "Battle of Plassey", "Battle of Panipat", "Battle of Buxar"],
        "options_hi": ["तराइन की लड़ाई", "प्लासी की लड़ाई", "पानीपत की लड़ाई", "बक्सर की लड़ाई"],
        "answer": "Battle of Tarain",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Who among the following was the first Sultan of Delhi?",
        "question_hi": "निम्नलिखित में से कौन दिल्ली का पहला सुलतान था?",
        "options_en": ["Qutb-ud-din Aibak", "Iltutmish", "Alauddin Khilji", "Raziya Sultan"],
        "options_hi": ["कुतुबुद्दीन ऐबक", "इल्तुतमिश", "अलाउद्दीन खिलजी", "रजिया सुलतान"],
        "answer": "Qutb-ud-din Aibak",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which Mughal emperor is known for his policy of religious tolerance?",
        "question_hi": "किस मुग़ल सम्राट को धार्मिक सहिष्णुता की नीति के लिए जाना जाता है?",
        "options_en": ["Akbar", "Aurangzeb", "Shah Jahan", "Babur"],
        "options_hi": ["अकबर", "औरंगजेब", "शाहजहाँ", "बाबर"],
        "answer": "Akbar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Who was the last ruler of the Mughal Empire?",
        "question_hi": "मुगल साम्राज्य का अंतिम शासक कौन था?",
        "options_en": ["Bahadur Shah Zafar", "Aurangzeb", "Shah Jahan", "Akbar"],
        "options_hi": ["बहादुर शाह जफर", "औरंगजेब", "शाहजहाँ", "अकबर"],
        "answer": "Bahadur Shah Zafar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "In which year did India gain independence?",
        "question_hi": "भारत ने स्वतंत्रता कब प्राप्त की थी?",
        "options_en": ["1947", "1950", "1930", "1920"],
        "options_hi": ["1947", "1950", "1930", "1920"],
        "answer": "1947",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Vijaya Lakshmi Pandit"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतीभा पाटिल", "विजया लक्ष्मी पंडित"],
        "answer": "Indira Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "The first battle of Panipat was fought between which two powers?",
        "question_hi": "पानीपत की पहली लड़ाई किस दो शक्तियों के बीच लड़ी गई थी?",
        "options_en": ["Mughals and Rajputs", "Mughals and Marathas", "Mughals and Sikhs", "Mughals and Afghans"],
        "options_hi": ["मुगल और राजपूत", "मुगल और मराठा", "मुगल और सिख", "मुगल और अफ़ग़ान"],
        "answer": "Mughals and Rajputs",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which British Governor-General is credited with introducing the Permanent Settlement in Bengal?",
        "question_hi": "किस ब्रिटिश गवर्नर जनरल को बंगाल में स्थायी बंदोबस्त (Permanent Settlement) लागू करने का श्रेय दिया जाता है?",
        "options_en": ["Lord Cornwallis", "Lord Wellesley", "Lord Hastings", "Lord Dalhousie"],
        "options_hi": ["लॉर्ड कॉर्नवालिस", "लॉर्ड वेलेस्ली", "लॉर्ड हैस्टिंग्स", "लॉर्ड डलहौजी"],
        "answer": "Lord Cornwallis",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Who was the founder of the Gupta dynasty?",
        "question_hi": "गुप्त वंश के संस्थापक कौन थे?",
        "options_en": ["Chandragupta I", "Samudragupta", "Chandragupta II", "Kumaragupta I"],
        "options_hi": ["चंद्रगुप्त I", "समुद्रगुप्त", "चंद्रगुप्त II", "कुमारगुप्त I"],
        "answer": "Chandragupta I",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which dynasty is known for its contributions to art, culture, and literature during its reign?",
        "question_hi": "किस वंश को अपनी शासनकाल के दौरान कला, संस्कृति, और साहित्य में योगदान के लिए जाना जाता है?",
        "options_en": ["Gupta dynasty", "Mughal dynasty", "Maurya dynasty", "Chola dynasty"],
        "options_hi": ["गुप्त वंश", "मुगल वंश", "मौर्य वंश", "चोला वंश"],
        "answer": "Gupta dynasty",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Who was the first person to lead the Indian National Congress in 1885?",
        "question_hi": "कौन 1885 में भारतीय राष्ट्रीय कांग्रेस का पहला अध्यक्ष बना था?",
        "options_en": ["Womesh Chunder Bonnerjee", "A.O. Hume", "Bal Gangadhar Tilak", "Subhas Chandra Bose"],
        "options_hi": ["वोमेश चंद्र बनर्जी", "ए. ओ. ह्यूम", "बाल गंगाधर तिलक", "सुभाष चंद्र बोस"],
        "answer": "Womesh Chunder Bonnerjee",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Who was the leader of the Quit India Movement?",
        "question_hi": "भारत छोड़ो आंदोलन के नेता कौन थे?",
        "options_en": ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "सरदार पटेल"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which of the following was the first battle fought between the British and the Marathas?",
        "question_hi": "निम्नलिखित में से कौन सी पहली लड़ाई थी जो ब्रिटिश और मराठों के बीच लड़ी गई थी?",
        "options_en": ["Battle of Plassey", "Battle of Buxar", "Battle of Panipat", "Battle of Wandiwash"],
        "options_hi": ["प्लासी की लड़ाई", "बक्सर की लड़ाई", "पानीपत की लड़ाई", "वंडीवाश की लड़ाई"],
        "answer": "Battle of Wandiwash",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Who is considered the 'Father of the Indian Nation'?",
        "question_hi": "किसे 'भारतीय राष्ट्रपिता' के रूप में जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "सरदार पटेल"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Who was the first emperor of the Mughal dynasty?",
        "question_hi": "मुगल वंश का पहला सम्राट कौन था?",
        "options_en": ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
        "options_hi": ["बाबर", "अकबर", "शाहजहाँ", "औरंगजेब"],
        "answer": "Babur",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which Indian leader is associated with the philosophy of Non-Violence (Ahimsa)?",
        "question_hi": "कौन से भारतीय नेता अहिंसा (Non-Violence) के सिद्धांत से जुड़े हैं?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार पटेल"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Who founded the Indian National Army (INA)?",
        "question_hi": "भारतीय राष्ट्रीय सेना (INA) की स्थापना किसने की थी?",
        "options_en": ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
        "options_hi": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल"],
        "answer": "Subhas Chandra Bose",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which British Governor-General is known for introducing the Doctrine of Lapse?",
        "question_hi": "कौन से ब्रिटिश गवर्नर जनरल को 'लैप्स का सिद्धांत' लागू करने के लिए जाना जाता है?",
        "options_en": ["Lord Dalhousie", "Lord Cornwallis", "Lord Wellesley", "Lord Hastings"],
        "options_hi": ["लॉर्ड डलहौजी", "लॉर्ड कॉर्नवालिस", "लॉर्ड वेलेस्ली", "लॉर्ड हैस्टिंग्स"],
        "answer": "Lord Dalhousie",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Who is the author of 'Discovery of India'?",
        "question_hi": "'डिस्कवरी ऑफ इंडिया' के लेखक कौन हैं?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Rabindranath Tagore", "Subhas Chandra Bose"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "रवींद्रनाथ ठाकुर", "सुभाष चंद्र बोस"],
        "answer": "Jawaharlal Nehru",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which city was the capital of India before Delhi?",
        "question_hi": "दिल्ली से पहले भारत की राजधानी कौन सी थी?",
        "options_en": ["Calcutta", "Bombay", "Madras", "Lahore"],
        "options_hi": ["कोलकाता", "मुंबई", "मद्रास", "लाहौर"],
        "answer": "Calcutta",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "In which year was the Indian Independence Act passed?",
        "question_hi": "भारत स्वतंत्रता अधिनियम (Indian Independence Act) किस वर्ष पारित हुआ था?",
        "options_en": ["1947", "1935", "1940", "1950"],
        "options_hi": ["1947", "1935", "1940", "1950"],
        "answer": "1947",
        "attempted": false,
        "selected": ""
      },
    {
        "num": 26,
        "question_en": "Who was the founder of the Indian National Army (INA)?",
        "question_hi": "भारतीय राष्ट्रीय सेना (INA) के संस्थापक कौन थे?",
        "options_en": ["Subhas Chandra Bose", "Bhagat Singh", "Mahatma Gandhi", "Lala Lajpat Rai"],
        "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "महात्मा गांधी", "लाला लाजपत राय"],
        "answer": "Subhas Chandra Bose",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "In which year did the Salt March take place?",
        "question_hi": "नमक सत्याग्रह किस वर्ष हुआ था?",
        "options_en": ["1930", "1920", "1942", "1919"],
        "options_hi": ["1930", "1920", "1942", "1919"],
        "answer": "1930",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Who was the first female ruler of India?",
        "question_hi": "भारत की पहली महिला शासक कौन थीं?",
        "options_en": ["Rani Durgavati", "Queen Victoria", "Rani Laxmibai", "Indira Gandhi"],
        "options_hi": ["रानी दुर्गावती", "क्वीन विक्टोरिया", "रानी लक्ष्मीबाई", "इंदिरा गांधी"],
        "answer": "Rani Durgavati",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "The Battle of Panipat was fought in how many phases?",
        "question_hi": "पानीपत की लड़ाई कितने चरणों में लड़ी गई थी?",
        "options_en": ["Three", "Four", "Two", "Five"],
        "options_hi": ["तीन", "चार", "दो", "पाँच"],
        "answer": "Three",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Who was the first Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत के पहले गवर्नर जनरल कौन थे?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
        "answer": "Lord Mountbatten",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Who was the leader of the Khilafat Movement?",
        "question_hi": "खिलाफत आंदोलन के नेता कौन थे?",
        "options_en": ["Maulana Mohammad Ali", "Mahatma Gandhi", "Chandra Shekhar Azad", "Subhas Chandra Bose"],
        "options_hi": ["मौलाना मोहम्मद अली", "महात्मा गांधी", "चंद्रशेखर आजाद", "सुभाष चंद्र बोस"],
        "answer": "Maulana Mohammad Ali",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Who among the following was a prominent leader of the Civil Disobedience Movement?",
        "question_hi": "निम्नलिखित में से कौन नागरिक अवज्ञा आंदोलन के प्रमुख नेता थे?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Lal Bahadur Shastri"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Which of the following was the first fort built by the British in India?",
        "question_hi": "निम्नलिखित में से भारत में ब्रिटिशों द्वारा निर्मित पहला किला कौन सा था?",
        "options_en": ["Fort William", "Fort St. George", "Red Fort", "Golconda Fort"],
        "options_hi": ["फोर्ट विलियम", "फोर्ट सेंट जॉर्ज", "लाल किला", "गोलकोंडा किला"],
        "answer": "Fort St. George",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Who among the following was known as the 'Tiger of Mysore'?",
        "question_hi": "निम्नलिखित में से कौन 'मैसूर का शेर' के रूप में प्रसिद्ध थे?",
        "options_en": ["Tipu Sultan", "Raja Raja Chola", "Shivaji", "Maharana Pratap"],
        "options_hi": ["टीपू सुलतान", "राजा राजा चोला", "शिवाजी", "महाराणा प्रताप"],
        "answer": "Tipu Sultan",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Which Indian leader was awarded the Nobel Prize for Peace?",
        "question_hi": "कौन से भारतीय नेता को नोबेल शांति पुरस्कार से सम्मानित किया गया?",
        "options_en": ["Mother Teresa", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"],
        "options_hi": ["मदर टेरेसा", "महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
        "answer": "Mother Teresa",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Which freedom fighter founded the 'Indian Home Rule Society'?",
        "question_hi": "किस स्वतंत्रता सेनानी ने 'भारतीय होम रूल सोसाइटी' की स्थापना की थी?",
        "options_en": ["Bal Gangadhar Tilak", "Lala Lajpat Rai", "Subhas Chandra Bose", "Mahatma Gandhi"],
        "options_hi": ["बाल गंगाधर तिलक", "लाला लाजपत राय", "सुभाष चंद्र बोस", "महात्मा गांधी"],
        "answer": "Bal Gangadhar Tilak",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Who led the First War of Indian Independence in 1857?",
        "question_hi": "1857 में भारतीय स्वतंत्रता संग्राम का नेतृत्व किसने किया था?",
        "options_en": ["Mangal Pandey", "Rani Laxmibai", "Bahadur Shah Zafar", "Tantia Tope"],
        "options_hi": ["मंगल पांडे", "रानी लक्ष्मीबाई", "बहादुर शाह जफर", "तांतिया टोपे"],
        "answer": "Mangal Pandey",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Which of the following leaders was a key figure in the Non-Cooperation Movement?",
        "question_hi": "निम्नलिखित में से कौन नेता असहमति आंदोलन में प्रमुख व्यक्ति थे?",
        "options_en": ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "सरदार पटेल"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "In which year did the Indian Independence Act come into force?",
        "question_hi": "भारत स्वतंत्रता अधिनियम किस वर्ष प्रभावी हुआ?",
        "options_en": ["1947", "1950", "1942", "1930"],
        "options_hi": ["1947", "1950", "1942", "1930"],
        "answer": "1947",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which of the following leaders did not attend the Round Table Conference?",
        "question_hi": "निम्नलिखित में से कौन गोलमेज सम्मेलन में शामिल नहीं हुआ था?",
        "options_en": ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "C. Rajagopalachari"],
        "options_hi": ["महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "सी. राजगोपालाचारी"],
        "answer": "Subhas Chandra Bose",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "The Quit India Movement was launched in which year?",
        "question_hi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
        "options_en": ["1942", "1930", "1920", "1947"],
        "options_hi": ["1942", "1930", "1920", "1947"],
        "answer": "1942",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which of the following battles was fought between the Mughals and the Rajputs?",
        "question_hi": "निम्नलिखित में से कौन सी लड़ाई मुगलों और राजपूतों के बीच लड़ी गई थी?",
        "options_en": ["Battle of Haldighati", "Battle of Panipat", "Battle of Plassey", "Battle of Buxar"],
        "options_hi": ["हल्दीघाटी की लड़ाई", "पानीपत की लड़ाई", "प्लासी की लड़ाई", "बक्सर की लड़ाई"],
        "answer": "Battle of Haldighati",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Who is known as the 'Father of the Indian Constitution'?",
        "question_hi": "भारत के संविधान के 'पिता' के रूप में कौन प्रसिद्ध हैं?",
        "options_en": ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
        "options_hi": ["डॉ. भीमराव अंबेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल"],
        "answer": "Dr. B.R. Ambedkar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Who was the first Indian to win a Nobel Prize?",
        "question_hi": "पहला भारतीय नोबेल पुरस्कार विजेता कौन था?",
        "options_en": ["Rabindranath Tagore", "C.V. Raman", "Subhas Chandra Bose", "Jawaharlal Nehru"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "सी.वी. रमन", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
        "answer": "Rabindranath Tagore",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Who was the first President of the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस के पहले अध्यक्ष कौन थे?",
        "options_en": ["Womesh Chunder Bonnerjee", "A.O. Hume", "Bal Gangadhar Tilak", "Subhas Chandra Bose"],
        "options_hi": ["वोमेश चंद्र बनर्जी", "ए. ओ. ह्यूम", "बाल गंगाधर तिलक", "सुभाष चंद्र बोस"],
        "answer": "Womesh Chunder Bonnerjee",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Who is considered the 'Father of the Indian Nation'?",
        "question_hi": "किसे 'भारतीय राष्ट्रपिता' के रूप में जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "सरदार पटेल"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which was the first battle fought by the British East India Company in India?",
        "question_hi": "भारत में ब्रिटिश ईस्ट इंडिया कंपनी द्वारा लड़ी गई पहली लड़ाई कौन सी थी?",
        "options_en": ["Battle of Plassey", "Battle of Buxar", "Battle of Panipat", "Battle of Haldighati"],
        "options_hi": ["प्लासी की लड़ाई", "बक्सर की लड़ाई", "पानीपत की लड़ाई", "हल्दीघाटी की लड़ाई"],
        "answer": "Battle of Plassey",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Who was the leader of the Indian Renaissance?",
        "question_hi": "भारतीय पुनर्जागरण के नेता कौन थे?",
        "options_en": ["Raja Ram Mohan Roy", "Swami Vivekananda", "Bal Gangadhar Tilak", "Mahatma Gandhi"],
        "options_hi": ["राजा राममोहन राय", "स्वामी विवेकानंद", "बाल गंगाधर तिलक", "महात्मा गांधी"],
        "answer": "Raja Ram Mohan Roy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Who founded the 'Indian National Congress'?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना किसने की थी?",
        "options_en": ["A.O. Hume", "Mahatma Gandhi", "Jawaharlal Nehru", "Bal Gangadhar Tilak"],
        "options_hi": ["ए. ओ. ह्यूम", "महात्मा गांधी", "जवाहरलाल नेहरू", "बाल गंगाधर तिलक"],
        "answer": "A.O. Hume",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Who was the last Mughal emperor of India?",
        "question_hi": "भारत का अंतिम मुग़ल सम्राट कौन था?",
        "options_en": ["Bahadur Shah Zafar", "Akbar", "Shah Jahan", "Aurangzeb"],
        "options_hi": ["बहादुर शाह जफर", "अकबर", "शाहजहाँ", "औरंगजेब"],
        "answer": "Bahadur Shah Zafar",
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
