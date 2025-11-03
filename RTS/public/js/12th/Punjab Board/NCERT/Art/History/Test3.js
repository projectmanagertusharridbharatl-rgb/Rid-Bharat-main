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
