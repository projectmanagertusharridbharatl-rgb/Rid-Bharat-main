const questions = [
    {
        "num": 1,
        "question_en": "Who was the first emperor of the Maurya dynasty?",
        "question_hi": "मौर्य वंश का पहला सम्राट कौन था?",
        "options_en": ["Chandragupta Maurya", "Ashoka the Great", "Bindusara", "Bimbisara"],
        "options_hi": ["चंद्रगुप्त मौर्य", "सम्राट अशोक", "बिंदुसार", "बिम्बिसार"],
        "answer": "Chandragupta Maurya",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Who was the founder of the Gupta Empire?",
        "question_hi": "गुप्त साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Chandragupta I", "Samudragupta", "Ashoka", "Raja Harsha"],
        "options_hi": ["चंद्रगुप्त I", "समुद्रगुप्त", "अशोक", "राजा हर्षा"],
        "answer": "Chandragupta I",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "The famous Battle of Panipat was fought in which year?",
        "question_hi": "प्रसिद्ध पानीपत की लड़ाई किस वर्ष लड़ी गई थी?",
        "options_en": ["1526", "1535", "1556", "1576"],
        "options_hi": ["1526", "1535", "1556", "1576"],
        "answer": "1526",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain", "Jawaharlal Nehru"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. जाकिर हुसैन", "जवाहरलाल नेहरू"],
        "answer": "Dr. Rajendra Prasad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Who led the revolt of 1857?",
        "question_hi": "1857 की विद्रोह का नेतृत्व किसने किया?",
        "options_en": ["Rani Lakshmibai", "Bahadur Shah Zafar", "Mangal Pandey", "Tatya Tope"],
        "options_hi": ["रानी लक्ष्मीबाई", "बहादुर शाह ज़फर", "मंगल पांडे", "ततैया तोपे"],
        "answer": "Mangal Pandey",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Who was the last Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत के अंतिम गवर्नर-जनरल कौन थे?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Rajendra Prasad"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
        "answer": "C. Rajagopalachari",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Who is known as the 'Father of the Nation'?",
        "question_hi": "'राष्ट्रपिता' के नाम से कौन जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhimrao Ambedkar"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भीमराव अंबेडकर"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "In which year did India gain independence?",
        "question_hi": "भारत ने स्वतंत्रता कब प्राप्त की?",
        "options_en": ["1947", "1950", "1942", "1930"],
        "options_hi": ["1947", "1950", "1942", "1930"],
        "answer": "1947",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Vijayalakshmi Pandit", "Kiran Bedi"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "विजयलक्ष्मी पंडित", "किरण बेदी"],
        "answer": "Indira Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Who was the leader of the Indian National Congress during the Quit India Movement?",
        "question_hi": "भारत छोड़ो आंदोलन के दौरान भारतीय राष्ट्रीय कांग्रेस के नेता कौन थे?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार पटेल"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Who was the last ruler of the Mughal Empire?",
        "question_hi": "मुगल साम्राज्य का अंतिम शासक कौन था?",
        "options_en": ["Bahadur Shah Zafar", "Aurangzeb", "Akbar", "Shah Jahan"],
        "options_hi": ["बहादुर शाह ज़फर", "औरंगज़ेब", "अकबर", "शाहजहाँ"],
        "answer": "Bahadur Shah Zafar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Who wrote the book 'The Discovery of India'?",
        "question_hi": "'द डिस्कवरी ऑफ इंडिया' किताब के लेखक कौन हैं?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Rabindranath Tagore", "Subhas Chandra Bose"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "रवींद्रनाथ ठाकुर", "सुभाष चंद्र बोस"],
        "answer": "Jawaharlal Nehru",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Who introduced the system of 'Diwani' in Bengal?",
        "question_hi": "बंगाल में 'दिवानी' प्रणाली को किसने पेश किया था?",
        "options_en": ["Robert Clive", "Warren Hastings", "Lord Cornwallis", "Sir Warren Hastings"],
        "options_hi": ["रॉबर्ट क्लाइव", "वॉरेन हेस्टिंग्स", "लॉर्ड कॉर्नवालिस", "सार वॉरेन हेस्टिंग्स"],
        "answer": "Robert Clive",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Who was the first President of the Indian Republic?",
        "question_hi": "भारतीय गणराज्य के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain", "Jawaharlal Nehru"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. जाकिर हुसैन", "जवाहरलाल नेहरू"],
        "answer": "Dr. Rajendra Prasad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Who led the Salt March to Dandi in 1930?",
        "question_hi": "1930 में दांडी के लिए नमक मार्च का नेतृत्व किसने किया था?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार पटेल"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Who was the founder of the Mughal Empire in India?",
        "question_hi": "भारत में मुग़ल साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
        "options_hi": ["बाबर", "अकबर", "शाहजहाँ", "औरंगज़ेब"],
        "answer": "Babur",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Who was the founder of the Maratha Empire?",
        "question_hi": "मराठा साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Shivaji", "Baji Rao I", "Sambhaji", "Rajaram"],
        "options_hi": ["शिवाजी", "बाजी राव I", "संभाजी", "राजाराम"],
        "answer": "Shivaji",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Who was the famous ruler of the Maurya dynasty after Chandragupta Maurya?",
        "question_hi": "चंद्रगुप्त मौर्य के बाद मौर्य वंश का प्रसिद्ध शासक कौन था?",
        "options_en": ["Ashoka", "Bindusara", "Bimbisara", "Chandragupta II"],
        "options_hi": ["अशोक", "बिंदुसार", "बिम्बिसार", "चंद्रगुप्त II"],
        "answer": "Ashoka",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "The first battle of Panipat was fought between which two powers?",
        "question_hi": "पानीपत की पहली लड़ाई किन दो शक्तियों के बीच लड़ी गई थी?",
        "options_en": ["Mughal and Lodi", "Maratha and Mughal", "British and Maratha", "Mughal and Rajput"],
        "options_hi": ["मुगल और लोदी", "मराठा और मुग़ल", "ब्रिटिश और मराठा", "मुगल और राजपूत"],
        "answer": "Mughal and Lodi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Who was the last ruler of the Maurya Empire?",
        "question_hi": "मौर्य साम्राज्य का अंतिम शासक कौन था?",
        "options_en": ["Brihadratha", "Ashoka", "Bindusara", "Chandragupta"],
        "options_hi": ["बृहत्रथ", "अशोक", "बिंदुसार", "चंद्रगुप्त"],
        "answer": "Brihadratha",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Who led the revolt of 1857 from Meerut?",
        "question_hi": "1857 की विद्रोह का नेतृत्व मेरठ से किसने किया?",
        "options_en": ["Mangal Pandey", "Begum Hazrat Mahal", "Rani Lakshmibai", "Tantia Tope"],
        "options_hi": ["मंगल पांडे", "बेगम हज़रत महल", "रानी लक्ष्मीबाई", "तांतिया तोपे"],
        "answer": "Mangal Pandey",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "The 'Jallianwala Bagh' massacre took place in which year?",
        "question_hi": "'जलियांवाला बाग' हत्याकांड किस वर्ष हुआ था?",
        "options_en": ["1919", "1920", "1930", "1942"],
        "options_hi": ["1919", "1920", "1930", "1942"],
        "answer": "1919",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Who is known as the 'Iron Man of India'?",
        "question_hi": "भारत के 'लौह पुरुष' के नाम से कौन जाना जाता है?",
        "options_en": ["Sardar Patel", "Subhas Chandra Bose", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
        "options_hi": ["सरदार पटेल", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
        "answer": "Sardar Patel",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Who was the leader of the Indian National Army (INA)?",
        "question_hi": "भारतीय राष्ट्रीय सेना (INA) के नेता कौन थे?",
        "options_en": ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
        "options_hi": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
        "answer": "Subhas Chandra Bose",
        "attempted": false,
        "selected": ""
      },
    {
        "num": 25,
        "question_en": "Who led the Salt March (Dandi March) in 1930?",
        "question_hi": "1930 में नमक सत्याग्रह (दांडी मार्च) का नेतृत्व किसने किया था?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "सुभाष चंद्र बोस"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Which was the first newspaper published in India?",
        "question_hi": "भारत में प्रकाशित होने वाला पहला समाचार पत्र कौन सा था?",
        "options_en": ["The Bengal Gazette", "The Times of India", "Hindu", "The Indian Express"],
        "options_hi": ["बंगाल गेजेट", "द टाइम्स ऑफ इंडिया", "हिंदू", "द इंडियन एक्सप्रेस"],
        "answer": "The Bengal Gazette",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Who was the first Indian to join the British Indian Civil Services?",
        "question_hi": "ब्रिटिश भारतीय सिविल सेवाओं में शामिल होने वाला पहला भारतीय कौन था?",
        "options_en": ["Satyendranath Tagore", "Lal Mohan Ghosh", "Rabindranath Tagore", "Swarnakumari Devi"],
        "options_hi": ["सत्येन्द्रनाथ ठाकुर", "लाल मोहन घोष", "रवींद्रनाथ ठाकुर", "स्वर्णकुमारी देवी"],
        "answer": "Satyendranath Tagore",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Which movement was launched by Mahatma Gandhi in 1919 against the Rowlatt Act?",
        "question_hi": "महात्मा गांधी ने 1919 में रौलेट एक्ट के खिलाफ कौन सा आंदोलन शुरू किया था?",
        "options_en": ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Champaran Movement"],
        "options_hi": ["असहमति आंदोलन", "नागरिक अवज्ञा आंदोलन", "भारत छोड़ो आंदोलन", "चंपारण आंदोलन"],
        "answer": "Non-Cooperation Movement",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "What was the main aim of the Quit India Movement of 1942?",
        "question_hi": "1942 के 'भारत छोड़ो आंदोलन' का मुख्य उद्देश्य क्या था?",
        "options_en": ["To seek complete independence from British rule", "To seek dominion status", "To fight for social justice", "To demand constitutional reforms"],
        "options_hi": ["ब्रिटिश शासन से पूर्ण स्वतंत्रता प्राप्त करना", "डोमिनियन स्थिति प्राप्त करना", "सामाजिक न्याय के लिए संघर्ष करना", "संवैधानिक सुधारों की मांग करना"],
        "answer": "To seek complete independence from British rule",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Who was the founder of the Arya Samaj?",
        "question_hi": "आर्य समाज के संस्थापक कौन थे?",
        "options_en": ["Swami Dayananda Saraswati", "Swami Vivekananda", "Raja Ram Mohan Roy", "Lala Lajpat Rai"],
        "options_hi": ["स्वामी दयानंद सरस्वती", "स्वामी विवेकानंद", "राजा राम मोहन रॉय", "लाला लाजपत राय"],
        "answer": "Swami Dayananda Saraswati",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Who was the first woman to become the President of the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की अध्यक्ष बनने वाली पहली महिला कौन थीं?",
        "options_en": ["Sarojini Naidu", "Annie Besant", "Kamini Roy", "Savitri Bai Phule"],
        "options_hi": ["सरोजिनी नायडू", "एनी बेसेंट", "कामिनी राय", "सावित्री बाई फुले"],
        "answer": "Sarojini Naidu",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "The first session of the Indian National Congress was held in which year?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस का पहला सत्र किस वर्ष हुआ था?",
        "options_en": ["1885", "1905", "1915", "1920"],
        "options_hi": ["1885", "1905", "1915", "1920"],
        "answer": "1885",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Who among the following was associated with the formation of the Aligarh Movement?",
        "question_hi": "निम्नलिखित में से कौन अलिगढ़ आंदोलन के निर्माण से जुड़ा हुआ था?",
        "options_en": ["Sir Syed Ahmed Khan", "Iqbal", "Jinnah", "Azad"],
        "options_hi": ["सिर सैयद अहमद खान", "इकबाल", "जिन्ना", "आज़ाद"],
        "answer": "Sir Syed Ahmed Khan",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "The Battle of Plassey was fought in which year?",
        "question_hi": "प्लासी की लड़ाई किस वर्ष लड़ी गई थी?",
        "options_en": ["1757", "1764", "1789", "1795"],
        "options_hi": ["1757", "1764", "1789", "1795"],
        "answer": "1757",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Who was the first Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Viceroy Lytton"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "वाइसरॉय लिटन"],
        "answer": "C. Rajagopalachari",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Who was the first woman to receive the Bharat Ratna?",
        "question_hi": "भारत रत्न प्राप्त करने वाली पहली महिला कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Mother Teresa", "Vijaya Lakshmi Pandit"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "मदर टेरेसा", "विजया लक्ष्मी पंडित"],
        "answer": "Indira Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Who among the following was the leader of the Revolt of 1857?",
        "question_hi": "1857 के विद्रोह के नेता निम्नलिखित में से कौन थे?",
        "options_en": ["Mangal Pandey", "Rani Lakshmi Bai", "Bahadur Shah Zafar", "Tatya Tope"],
        "options_hi": ["मंगल पांडे", "रानी लक्ष्मीबाई", "बहादुर शाह जफर", "तात्या टोपे"],
        "answer": "Bahadur Shah Zafar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "The Indian Rebellion of 1857 is also known as?",
        "question_hi": "1857 का भारतीय विद्रोह किस नाम से भी जाना जाता है?",
        "options_en": ["First War of Indian Independence", "Revolution of 1857", "Mutiny of 1857", "All of the above"],
        "options_hi": ["भारत की पहली स्वतंत्रता संग्राम", "1857 का क्रांति", "1857 का विद्रोह", "उपरोक्त सभी"],
        "answer": "First War of Indian Independence",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Who was the founder of the Indian National Army (INA)?",
        "question_hi": "भारतीय राष्ट्रीय सेना (INA) के संस्थापक कौन थे?",
        "options_en": ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
        "options_hi": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
        "answer": "Subhas Chandra Bose",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "In which year was the Jallianwala Bagh massacre carried out?",
        "question_hi": "जलियांवाला बाग हत्याकांड किस वर्ष हुआ था?",
        "options_en": ["1919", "1920", "1930", "1942"],
        "options_hi": ["1919", "1920", "1930", "1942"],
        "answer": "1919",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Who was the first President of the Indian Republic?",
        "question_hi": "भारतीय गणराज्य के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain", "Jawaharlal Nehru"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. जाकिर हुसैन", "जवाहरलाल नेहरू"],
        "answer": "Dr. Rajendra Prasad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Who introduced the system of 'Diwani' in Bengal?",
        "question_hi": "बंगाल में 'दिवानी' प्रणाली को किसने पेश किया था?",
        "options_en": ["Robert Clive", "Warren Hastings", "Lord Cornwallis", "Sir Warren Hastings"],
        "options_hi": ["रॉबर्ट क्लाइव", "वॉरेन हेस्टिंग्स", "लॉर्ड कॉर्नवालिस", "सार वॉरेन हेस्टिंग्स"],
        "answer": "Robert Clive",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "The first war of Indian independence was fought between?",
        "question_hi": "भारत की पहली स्वतंत्रता संग्राम किसके बीच लड़ा गया था?",
        "options_en": ["British and Indian rulers", "British and Indian soldiers", "Indian rulers and Indian soldiers", "Indian rulers and the British East India Company"],
        "options_hi": ["ब्रिटिश और भारतीय शासक", "ब्रिटिश और भारतीय सैनिक", "भारतीय शासक और भारतीय सैनिक", "भारतीय शासक और ब्रिटिश ईस्ट इंडिया कंपनी"],
        "answer": "British and Indian soldiers",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Who wrote the book 'The Discovery of India'?",
        "question_hi": "'द डिस्कवरी ऑफ इंडिया' किताब के लेखक कौन हैं?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Rabindranath Tagore", "Subhas Chandra Bose"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "रवींद्रनाथ ठाकुर", "सुभाष चंद्र बोस"],
        "answer": "Jawaharlal Nehru",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Who was the first Emperor of the Maurya dynasty?",
        "question_hi": "मौर्य वंश का पहला सम्राट कौन था?",
        "options_en": ["Chandragupta Maurya", "Ashoka the Great", "Bindusara", "Bimbisara"],
        "options_hi": ["चंद्रगुप्त मौर्य", "सम्राट अशोक", "बिंदुसार", "बिम्बिसार"],
        "answer": "Chandragupta Maurya",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "The famous Battle of Panipat was fought in which year?",
        "question_hi": "प्रसिद्ध पानीपत की लड़ाई किस वर्ष लड़ी गई थी?",
        "options_en": ["1526", "1535", "1556", "1576"],
        "options_hi": ["1526", "1535", "1556", "1576"],
        "answer": "1526",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Who was the founder of the Gupta Empire?",
        "question_hi": "गुप्त साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Chandragupta I", "Samudragupta", "Ashoka", "Raja Harsha"],
        "options_hi": ["चंद्रगुप्त I", "समुद्रगुप्त", "अशोक", "राजा हर्षा"],
        "answer": "Chandragupta I",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Who was the founder of the Mughal Empire in India?",
        "question_hi": "भारत में मुग़ल साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Babur", "Akbar", "Shah Jahan", "Aurangzeb"],
        "options_hi": ["बाबर", "अकबर", "शाहजहाँ", "औरंगज़ेब"],
        "answer": "Babur",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "The famous Chandragupta Maurya was the ruler of which empire?",
        "question_hi": "प्रसिद्ध चंद्रगुप्त मौर्य किस साम्राज्य के शासक थे?",
        "options_en": ["Maurya Empire", "Gupta Empire", "Delhi Sultanate", "Mughal Empire"],
        "options_hi": ["मौर्य साम्राज्य", "गुप्त साम्राज्य", "दिल्ली सल्तनत", "मुगल साम्राज्य"],
        "answer": "Maurya Empire",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "The famous Indian mathematician Aryabhata belonged to which dynasty?",
        "question_hi": "प्रसिद्ध भारतीय गणितज्ञ आर्यभट किस वंश से संबंधित थे?",
        "options_en": ["Gupta Dynasty", "Maurya Dynasty", "Mughal Dynasty", "Chola Dynasty"],
        "options_hi": ["गुप्त वंश", "मौर्य वंश", "मुगल वंश", "चोल वंश"],
        "answer": "Gupta Dynasty",
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
