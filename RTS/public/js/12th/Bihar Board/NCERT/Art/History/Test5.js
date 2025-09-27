const questions = [
    {
        "num": 1,
        "question_en": "Who was the founder of the Maurya Empire?",
        "question_hi": "मौर्य साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Kautilya"],
        "options_hi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "कौटिल्य"],
        "answer": "Chandragupta Maurya",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which Indian king embraced Buddhism after the Kalinga War?",
        "question_hi": "कौन से भारतीय राजा ने कलिंग युद्ध के बाद बौद्ध धर्म को अपनाया?",
        "options_en": ["Ashoka", "Chandragupta Maurya", "Samudragupta", "Harsha"],
        "options_hi": ["अशोक", "चंद्रगुप्त मौर्य", "समुद्रगुप्त", "हर्षा"],
        "answer": "Ashoka",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "The battle of Plassey was fought between which two forces?",
        "question_hi": "प्लासी की लड़ाई किस दो सेनाओं के बीच लड़ी गई थी?",
        "options_en": ["British and Siraj-ud-Daula", "Mughals and Marathas", "British and Marathas", "Mughal Empire and Rajputs"],
        "options_hi": ["ब्रिटिश और सिराज-उद-दौला", "मुगल और मराठा", "ब्रिटिश और मराठा", "मुगल साम्राज्य और राजपूत"],
        "answer": "British and Siraj-ud-Daula",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Who was the founder of the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस के संस्थापक कौन थे?",
        "options_en": ["Allan Octavian Hume", "Lal Lajpat Rai", "Subhas Chandra Bose", "Jawaharlal Nehru"],
        "options_hi": ["एलेन ऑक्टेवियन ह्यूम", "लाल लाजपत राय", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
        "answer": "Allan Octavian Hume",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Which Indian freedom fighter is known as the 'Iron Man of India'?",
        "question_hi": "किस भारतीय स्वतंत्रता सेनानी को 'भारत के लौह पुरुष' के नाम से जाना जाता है?",
        "options_en": ["Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Bhagat Singh", "Lala Lajpat Rai"],
        "options_hi": ["सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस", "भगत सिंह", "लाला लाजपत राय"],
        "answer": "Sardar Vallabhbhai Patel",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "The Jallianwala Bagh massacre took place in which year?",
        "question_hi": "जलियांवाला बाग हत्याकांड किस वर्ष हुआ था?",
        "options_en": ["1919", "1925", "1930", "1942"],
        "options_hi": ["1919", "1925", "1930", "1942"],
        "answer": "1919",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Who was the first woman to become the Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन बनीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Vijayalakshmi Pandit", "Kiran Bedi"],
        "options_hi": ["इंदिरा गांधी", "सारोजिनी नायडू", "विजयलक्ष्मी पंडित", "किरण बेदी"],
        "answer": "Indira Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which movement was launched by Mahatma Gandhi in 1919?",
        "question_hi": "महात्मा गांधी ने 1919 में कौन सा आंदोलन शुरू किया था?",
        "options_en": ["Non-Cooperation Movement", "Salt March", "Quit India Movement", "Champaran Satyagraha"],
        "options_hi": ["नमक सत्याग्रह", "असहमति आंदोलन", "भारत छोड़ो आंदोलन", "चम्पारण सत्याग्रह"],
        "answer": "Non-Cooperation Movement",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Who gave the slogan 'Do or Die' during the Quit India Movement?",
        "question_hi": "'भारत छोड़ो आंदोलन' के दौरान 'करो या मरो' का नारा किसने दिया था?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Zakir Husain", "Jawaharlal Nehru", "Dr. Radhakrishnan"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. जाकिर हुसैन", "जवाहरलाल नेहरू", "डॉ. राधाकृष्णन"],
        "answer": "Dr. Rajendra Prasad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "The first war of Indian independence was fought in which year?",
        "question_hi": "भारत का पहला स्वतंत्रता संग्राम किस वर्ष लड़ा गया था?",
        "options_en": ["1857", "1942", "1919", "1905"],
        "options_hi": ["1857", "1942", "1919", "1905"],
        "answer": "1857",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Who is known as the 'Father of the Nation' in India?",
        "question_hi": "भारत में 'राष्ट्रपिता' के नाम से कौन प्रसिद्ध हैं?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Who was the last Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत के अंतिम गवर्नर-जनरल कौन थे?",
        "options_en": ["C. Rajagopalachari", "Lord Mountbatten", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
        "options_hi": ["सी. राजगोपालाचारी", "लॉर्ड माउंटबेटन", "जवाहरलाल नेहरू", "डॉ. राजेंद्र प्रसाद"],
        "answer": "C. Rajagopalachari",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Who was the first woman to lead the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की अध्यक्ष बनने वाली पहली महिला कौन थीं?",
        "options_en": ["Sarojini Naidu", "Indira Gandhi", "Aruna Asaf Ali", "Vijayalakshmi Pandit"],
        "options_hi": ["सारोजिनी नायडू", "इंदिरा गांधी", "अरुणा आसफ़ अली", "विजयलक्ष्मी पंडित"],
        "answer": "Sarojini Naidu",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "In which year did India gain independence?",
        "question_hi": "भारत को स्वतंत्रता कब प्राप्त हुई थी?",
        "options_en": ["1947", "1950", "1930", "1942"],
        "options_hi": ["1947", "1950", "1930", "1942"],
        "answer": "1947",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Who wrote the book 'India of My Dreams'?",
        "question_hi": "'इंडिया ऑफ माय ड्रीम्स' पुस्तक किसने लिखी?",
        "options_en": ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Lal Nehru"],
        "options_hi": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "लाल नेहरू"],
        "answer": "Subhas Chandra Bose",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Who was the founder of the Khilafat Movement?",
        "question_hi": "खिलाफत आंदोलन के संस्थापक कौन थे?",
        "options_en": ["Maulana Abul Kalam Azad", "Mahatma Gandhi", "Shaukat Ali", "Ali Brothers"],
        "options_hi": ["मौलाना अबुल कलाम आज़ाद", "महात्मा गांधी", "शौकत अली", "अली भाई"],
        "answer": "Ali Brothers",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Who led the Salt March in 1930?",
        "question_hi": "1930 में नमक सत्याग्रह का नेतृत्व किसने किया?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार वल्लभभाई पटेल"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "The Indian National Congress was founded in which year?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई थी?",
        "options_en": ["1885", "1900", "1857", "1920"],
        "options_hi": ["1885", "1900", "1857", "1920"],
        "answer": "1885",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Who was the first Emperor of the Mughal Empire?",
        "question_hi": "मुगल साम्राज्य के पहले सम्राट कौन थे?",
        "options_en": ["Babur", "Akbar", "Humayun", "Shah Jahan"],
        "options_hi": ["बाबर", "अकबर", "हुमायूँ", "शाहजहाँ"],
        "answer": "Babur",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which was the first successful movement in India's fight for independence?",
        "question_hi": "भारत की स्वतंत्रता की लड़ाई में पहली सफल आंदोलन कौन सा था?",
        "options_en": ["Swadeshi Movement", "Quit India Movement", "Non-Cooperation Movement", "Salt March"],
        "options_hi": ["स्वदेशी आंदोलन", "भारत छोड़ो आंदोलन", "असहमति आंदोलन", "नमक सत्याग्रह"],
        "answer": "Swadeshi Movement",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Who was the leader of the revolt of 1857?",
        "question_hi": "1857 के विद्रोह के नेता कौन थे?",
        "options_en": ["Mangal Pandey", "Rani Lakshmibai", "Bahadur Shah Zafar", "Tantia Tope"],
        "options_hi": ["मंगल पांडे", "रानी लक्ष्मीबाई", "बहादुर शाह जफर", "तांतिया टोपे"],
        "answer": "Mangal Pandey",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Who coined the term 'Swaraj'?",
        "question_hi": "'स्वराज' शब्द का सर्वप्रथम प्रयोग किसने किया था?",
        "options_en": ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Lala Lajpat Rai", "Subhas Chandra Bose"],
        "options_hi": ["बाल गंगाधर तिलक", "महात्मा गांधी", "लाला लाजपत राय", "सुभाष चंद्र बोस"],
        "answer": "Bal Gangadhar Tilak",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Who was the first woman to join the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस में शामिल होने वाली पहली महिला कौन थीं?",
        "options_en": ["Sarojini Naidu", "Kasturba Gandhi", "Annie Besant", "Kamini Roy"],
        "options_hi": ["सारोजिनी नायडू", "कस्तूरबा गांधी", "एनी बेसेंट", "कामिनी राय"],
        "answer": "Annie Besant",
        "attempted": false,
        "selected": ""
      },
   
      {
        "num": 25,
        "question_en": "Who was the first Prime Minister of independent India?",
        "question_hi": "स्वतंत्र भारत के पहले प्रधानमंत्री कौन थे?",
        "options_en": ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Gulzarilal Nanda", "Indira Gandhi"],
        "options_hi": ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "गुलजारिलाल नंदा", "इंदिरा गांधी"],
        "answer": "Jawaharlal Nehru",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Who was the last Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत के अंतिम गवर्नर-जनरल कौन थे?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Rajendra Prasad"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "राजेन्द्र प्रसाद"],
        "answer": "C. Rajagopalachari",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Who was the first woman to become the President of the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की अध्यक्ष बनने वाली पहली महिला कौन थीं?",
        "options_en": ["Sarojini Naidu", "Annie Besant", "Indira Gandhi", "Kasturba Gandhi"],
        "options_hi": ["सारोजिनी नायडू", "एनी बेसेंट", "इंदिरा गांधी", "कस्तूरबा गांधी"],
        "answer": "Annie Besant",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "The Rowlatt Act was passed in which year?",
        "question_hi": "रौलट एक्ट किस वर्ष पारित हुआ था?",
        "options_en": ["1919", "1900", "1930", "1920"],
        "options_hi": ["1919", "1900", "1930", "1920"],
        "answer": "1919",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Who was the leader of the Revolt of 1857 in Kanpur?",
        "question_hi": "1857 के विद्रोह में कानपुर के नेता कौन थे?",
        "options_en": ["Rani Lakshmibai", "Nana Sahib", "Tantia Tope", "Mangal Pandey"],
        "options_hi": ["रानी लक्ष्मीबाई", "नाना साहिब", "तांतिया टोपे", "मंगल पांडे"],
        "answer": "Nana Sahib",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Who was the first to propose the idea of Swaraj (self-rule)?",
        "question_hi": "स्वराज (स्व-शासन) का विचार सबसे पहले किसने प्रस्तावित किया था?",
        "options_en": ["Mahatma Gandhi", "Bal Gangadhar Tilak", "Subhas Chandra Bose", "Jawaharlal Nehru"],
        "options_hi": ["महात्मा गांधी", "बाल गंगाधर तिलक", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
        "answer": "Bal Gangadhar Tilak",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which movement was launched in 1942 by the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस द्वारा 1942 में कौन सा आंदोलन शुरू किया गया था?",
        "options_en": ["Quit India Movement", "Non-Cooperation Movement", "Salt March", "Swadeshi Movement"],
        "options_hi": ["भारत छोड़ो आंदोलन", "असहमति आंदोलन", "नमक सत्याग्रह", "स्वदेशी आंदोलन"],
        "answer": "Quit India Movement",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Who led the non-cooperation movement in 1920?",
        "question_hi": "1920 में असहमति आंदोलन का नेतृत्व किसने किया?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार वल्लभभाई पटेल"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Which event is considered the turning point in the struggle for India's independence?",
        "question_hi": "भारत की स्वतंत्रता संग्राम में किस घटना को निर्णायक मोड़ माना जाता है?",
        "options_en": ["Jallianwala Bagh Massacre", "First War of Indian Independence", "Quit India Movement", "Salt March"],
        "options_hi": ["जलियांवाला बाग हत्याकांड", "भारत के प्रथम स्वतंत्रता संग्राम", "भारत छोड़ो आंदोलन", "नमक सत्याग्रह"],
        "answer": "Jallianwala Bagh Massacre",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Who was the last ruler of the Mughal dynasty?",
        "question_hi": "मुगल वंश के अंतिम शासक कौन थे?",
        "options_en": ["Bahadur Shah Zafar", "Aurangzeb", "Shah Jahan", "Akbar"],
        "options_hi": ["बहादुर शाह जफर", "औरंगजेब", "शाहजहाँ", "अकबर"],
        "answer": "Bahadur Shah Zafar",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Who was the first female ruler of India?",
        "question_hi": "भारत की पहली महिला शासक कौन थीं?",
        "options_en": ["Rani Lakshmibai", "Nur Jahan", "Begum Hazrat Mahal", "Indira Gandhi"],
        "options_hi": ["रानी लक्ष्मीबाई", "नूरजहां", "बेगम हजरत महल", "इंदिरा गांधी"],
        "answer": "Nur Jahan",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Which of the following was NOT a part of the Congress session held in 1906?",
        "question_hi": "1906 में आयोजित कांग्रेस सत्र का हिस्सा निम्नलिखित में से कौन सा नहीं था?",
        "options_en": ["Calcutta Session", "Partition of Bengal", "Demand for Self-Government", "Swadeshi Movement"],
        "options_hi": ["कलकत्ता सत्र", "बंगाल का विभाजन", "स्व-शासन की मांग", "स्वदेशी आंदोलन"],
        "answer": "Partition of Bengal",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Who gave the slogan 'Do or Die' during the Quit India Movement?",
        "question_hi": "भारत छोड़ो आंदोलन के दौरान 'करो या मरो' का नारा किसने दिया?",
        "options_en": ["Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel"],
        "options_hi": ["महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Who was the leader of the Revolt of 1857 in Meerut?",
        "question_hi": "1857 के विद्रोह में मेरठ के नेता कौन थे?",
        "options_en": ["Mangal Pandey", "Bahadur Shah Zafar", "Nana Sahib", "Rani Lakshmibai"],
        "options_hi": ["मंगल पांडे", "बहादुर शाह जफर", "नाना साहिब", "रानी लक्ष्मीबाई"],
        "answer": "Mangal Pandey",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Who was the first to call for 'Purna Swaraj' (Complete Independence)?",
        "question_hi": "'पूर्ण स्वराज' (पूर्ण स्वतंत्रता) की पहली बार मांग किसने की थी?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Lala Lajpat Rai"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "लाला लाजपत राय"],
        "answer": "Jawaharlal Nehru",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which of the following leaders was associated with the formation of the 'Azad Hind Fauj'?",
        "question_hi": "निम्नलिखित नेताओं में से कौन 'आजाद हिंद फौज' के गठन से जुड़ा था?",
        "options_en": ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Lal Bahadur Shastri"],
        "options_hi": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री"],
        "answer": "Subhas Chandra Bose",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Which act was passed in 1935 to extend the legislative powers of the Indian government?",
        "question_hi": "1935 में भारतीय सरकार की विधायी शक्तियों को विस्तार देने के लिए कौन सा एक्ट पारित हुआ था?",
        "options_en": ["Government of India Act", "Indian Independence Act", "Montagu-Chelmsford Reforms", "Regulating Act"],
        "options_hi": ["भारत सरकार अधिनियम", "भारत स्वतंत्रता अधिनियम", "मॉन्टेगू-चेल्म्सफोर्ड सुधार", "नियामक अधिनियम"],
        "answer": "Government of India Act",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Who was the first to make a demand for self-government in India?",
        "question_hi": "भारत में स्व-शासन की पहली मांग किसने की थी?",
        "options_en": ["Dadabhai Naoroji", "Bal Gangadhar Tilak", "Mahatma Gandhi", "Subhas Chandra Bose"],
        "options_hi": ["दादाभाई नौरोजी", "बाल गंगाधर तिलक", "महात्मा गांधी", "सुभाष चंद्र बोस"],
        "answer": "Dadabhai Naoroji",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Who was the first to propose the idea of 'Two Nation Theory'?",
        "question_hi": "'दो राष्ट्र सिद्धांत' का विचार सबसे पहले किसने प्रस्तावित किया था?",
        "options_en": ["Muhammad Ali Jinnah", "Iqbal", "Ghulam Mohammad", "Liaquat Ali Khan"],
        "options_hi": ["मुहम्मद अली जिन्ना", "इकबाल", "गुलाम मोहम्मद", "लियाकत अली खान"],
        "answer": "Muhammad Ali Jinnah",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Who was the first President of the Indian Republic?",
        "question_hi": "भारतीय गणराज्य के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain", "Dr. Abdul Kalam"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. जाकिर हुसैन", "डॉ. अब्दुल कलाम"],
        "answer": "Dr. Rajendra Prasad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Who was the first person to call for complete independence?",
        "question_hi": "पूर्ण स्वतंत्रता की मांग सबसे पहले किसने की थी?",
        "options_en": ["Lala Lajpat Rai", "Bal Gangadhar Tilak", "Mahatma Gandhi", "Jawaharlal Nehru"],
        "options_hi": ["लाला लाजपत राय", "बाल गंगाधर तिलक", "महात्मा गांधी", "जवाहरलाल नेहरू"],
        "answer": "Lala Lajpat Rai",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Who was the first to advocate for the removal of untouchability in India?",
        "question_hi": "भारत में अस्पृश्यता की समाप्ति की बात सबसे पहले किसने की थी?",
        "options_en": ["Mahatma Gandhi", "Dr. B. R. Ambedkar", "Sardar Patel", "Subhas Chandra Bose"],
        "options_hi": ["महात्मा गांधी", "डॉ. बी. आर. अम्बेडकर", "सरदार पटेल", "सुभाष चंद्र बोस"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Who coined the phrase 'Unity in Diversity'?",
        "question_hi": "'विविधता में एकता' वाक्य किसने कहा था?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस"],
        "answer": "Jawaharlal Nehru",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Who was the first to give the slogan 'Inquilab Zindabad'?",
        "question_hi": "'इंकलाब जिंदाबाद' का नारा सबसे पहले किसने दिया?",
        "options_en": ["Subhas Chandra Bose", "Bhagat Singh", "Mahatma Gandhi", "Jawaharlal Nehru"],
        "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "महात्मा गांधी", "जवाहरलाल नेहरू"],
        "answer": "Bhagat Singh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Who founded the All India Muslim League?",
        "question_hi": "ऑल इंडिया मुस्लिम लीग की स्थापना किसने की थी?",
        "options_en": ["Muhammad Ali Jinnah", "Syed Ahmed Khan", "Liaquat Ali Khan", "Iqbal"],
        "options_hi": ["मुहम्मद अली जिन्ना", "सैयद अहमद खान", "लियाकत अली खान", "इकबाल"],
        "answer": "Syed Ahmed Khan",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Who was the first to hold the office of the President of the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस के अध्यक्ष पद की जिम्मेदारी सबसे पहले किसने संभाली थी?",
        "options_en": ["Womesh Chunder Bonnerjee", "Dadabhai Naoroji", "Bal Gangadhar Tilak", "Mahatma Gandhi"],
        "options_hi": ["वोमेश चंदर बोन्नर्जी", "दादाभाई नौरोजी", "बाल गंगाधर तिलक", "महात्मा गांधी"],
        "answer": "Womesh Chunder Bonnerjee",
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
