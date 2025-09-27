const questions = [
    {
        "num": 1,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain", "Dr. Abdul Kalam"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. जाकिर हुसैन", "डॉ. अब्दुल कलाम"],
        "answer": "Dr. Rajendra Prasad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Who is known as the 'Father of the Nation' in India?",
        "question_hi": "भारत में 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार वल्लभभाई पटेल"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Who is the author of the book 'Discovery of India'?",
        "question_hi": "'भारत का आविष्कार' पुस्तक के लेखक कौन हैं?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Dr. B. R. Ambedkar"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "डॉ. बी. आर. अंबेडकर"],
        "answer": "Jawaharlal Nehru",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Rajkumari Amrit Kaur"],
        "options_hi": ["इंदिरा गांधी", "सारोजिनी नायडू", "प्रणब पाटिल", "राजकुमारी अमृत कौर"],
        "answer": "Indira Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "The Quit India Movement was launched in which year?",
        "question_hi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
        "options_en": ["1942", "1947", "1930", "1920"],
        "options_hi": ["1942", "1947", "1930", "1920"],
        "answer": "1942",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Who was the first person to lead the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस का नेतृत्व करने वाले पहले व्यक्ति कौन थे?",
        "options_en": ["Womesh Chunder Bonnerjee", "Surendranath Banerjee", "Bal Gangadhar Tilak", "Lal Lajpat Rai"],
        "options_hi": ["वोमेश चंदर बनर्जी", "सुरेन्द्रनाथ बनर्जी", "बाल गंगाधर तिलक", "लाल लाजपत राय"],
        "answer": "Womesh Chunder Bonnerjee",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "In which year did India gain independence?",
        "question_hi": "भारत ने स्वतंत्रता किस वर्ष प्राप्त की?",
        "options_en": ["1947", "1950", "1942", "1935"],
        "options_hi": ["1947", "1950", "1942", "1935"],
        "answer": "1947",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Who was the first Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
        "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Rajendra Prasad"],
        "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
        "answer": "C. Rajagopalachari",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Who was the first Indian to go to the UN?",
        "question_hi": "संयुक्त राष्ट्र में जाने वाला पहला भारतीय कौन था?",
        "options_en": ["V.K. Krishna Menon", "Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi"],
        "options_hi": ["वी. के. कृष्ण मेनन", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी"],
        "answer": "V.K. Krishna Menon",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Who is known as the 'Iron Man of India'?",
        "question_hi": "भारत के 'लौह पुरुष' के रूप में किसे जाना जाता है?",
        "options_en": ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose"],
        "options_hi": ["सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस"],
        "answer": "Sardar Vallabhbhai Patel",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Who was the first woman to become the President of India?",
        "question_hi": "भारत की पहली महिला राष्ट्रपति कौन थीं?",
        "options_en": ["Pratibha Patil", "Sarojini Naidu", "Indira Gandhi", "Kamla Devi"],
        "options_hi": ["प्रणब पाटिल", "सारोजिनी नायडू", "इंदिरा गांधी", "कमला देवी"],
        "answer": "Pratibha Patil",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Who introduced the 'First Round Table Conference'?",
        "question_hi": "किसने 'प्रथम गोलमेज सम्मेलन' का आयोजन किया?",
        "options_en": ["Lord Irwin", "Lord Mountbatten", "Mahatma Gandhi", "Jawaharlal Nehru"],
        "options_hi": ["लॉर्ड इरविन", "लॉर्ड माउंटबेटन", "महात्मा गांधी", "जवाहरलाल नेहरू"],
        "answer": "Lord Irwin",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which of these leaders was not a part of the Indian National Congress?",
        "question_hi": "इनमें से कौन नेता भारतीय राष्ट्रीय कांग्रेस का हिस्सा नहीं थे?",
        "options_en": ["Subhas Chandra Bose", "Lal Bahadur Shastri", "Sardar Vallabhbhai Patel", "Mahatma Gandhi"],
        "options_hi": ["सुभाष चंद्र बोस", "लाल बहादुर शास्त्री", "सरदार वल्लभभाई पटेल", "महात्मा गांधी"],
        "answer": "Lal Bahadur Shastri",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which event is considered the turning point of India's freedom struggle?",
        "question_hi": "भारत के स्वतंत्रता संग्राम में कौन सा घटना निर्णायक मोड़ माना जाता है?",
        "options_en": ["First War of Indian Independence", "Quit India Movement", "Jallianwala Bagh Massacre", "Salt March"],
        "options_hi": ["भारत के प्रथम स्वतंत्रता संग्राम", "भारत छोड़ो आंदोलन", "जलियांवाला बाग हत्याकांड", "नमक सत्याग्रह"],
        "answer": "Jallianwala Bagh Massacre",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Who coined the phrase 'Swaraj is my birthright'?",
        "question_hi": "'स्वराज मेरा जन्मसिद्ध अधिकार है' वाक्य किसने कहा?",
        "options_en": ["Bal Gangadhar Tilak", "Subhas Chandra Bose", "Lal Lajpat Rai", "Mahatma Gandhi"],
        "options_hi": ["बाल गंगाधर तिलक", "सुभाष चंद्र बोस", "लाल लाजपत राय", "महात्मा गांधी"],
        "answer": "Bal Gangadhar Tilak",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Which was the first state to join the Indian Union after independence?",
        "question_hi": "स्वतंत्रता के बाद भारतीय संघ में शामिल होने वाला पहला राज्य कौन था?",
        "options_en": ["Hyderabad", "Jammu and Kashmir", "Goa", "Sikkim"],
        "options_hi": ["हैदराबाद", "जम्मू और कश्मीर", "गोवा", "सिक्किम"],
        "answer": "Hyderabad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What is the name of the national anthem of India?",
        "question_hi": "भारत का राष्ट्रीय गीत क्या है?",
        "options_en": ["Jana Gana Mana", "Vande Mataram", "Sare Jahan Se Achha", "Vishal Bharat"],
        "options_hi": ["जन गण मन", "वन्दे मातरम्", "सारे जहां से अच्छा", "विशाल भारत"],
        "answer": "Jana Gana Mana",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Who was the first Vice-President of India?",
        "question_hi": "भारत के पहले उपराष्ट्रपति कौन थे?",
        "options_en": ["Dr. Sarvepalli Radhakrishnan", "Dr. Zakir Husain", "Dr. Rajendra Prasad", "Dr. B. R. Ambedkar"],
        "options_hi": ["डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. जाकिर हुसैन", "डॉ. राजेंद्र प्रसाद", "डॉ. बी. आर. अंबेडकर"],
        "answer": "Dr. Sarvepalli Radhakrishnan",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Who was the first woman to receive the Bharat Ratna?",
        "question_hi": "भारत रत्न प्राप्त करने वाली पहली महिला कौन थीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Mother Teresa", "Vikram Sarabhai"],
        "options_hi": ["इंदिरा गांधी", "सारोजिनी नायडू", "मदर टेरेसा", "विक्रम साराभाई"],
        "answer": "Indira Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Who gave the slogan 'Give me blood and I will give you freedom'?",
        "question_hi": "'मुझे खून दो, मैं तुम्हें स्वतंत्रता दूंगा' नारा किसने दिया?",
        "options_en": ["Subhas Chandra Bose", "Bhagat Singh", "Jawaharlal Nehru", "Mahatma Gandhi"],
        "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "जवाहरलाल नेहरू", "महात्मा गांधी"],
        "answer": "Subhas Chandra Bose",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Who was the first person to hoist the Indian flag at the Red Fort?",
        "question_hi": "लाल किले पर भारतीय ध्वज फहराने वाला पहला व्यक्ति कौन था?",
        "options_en": ["Bhagat Singh", "Subhas Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi"],
        "options_hi": ["भगत सिंह", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "महात्मा गांधी"],
        "answer": "Subhas Chandra Bose",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which was the first major national movement in India's history?",
        "question_hi": "भारत के इतिहास में पहला प्रमुख राष्ट्रीय आंदोलन कौन सा था?",
        "options_en": ["Sepoy Mutiny", "Quit India Movement", "Non-Cooperation Movement", "Civil Disobedience Movement"],
        "options_hi": ["सिपाही विद्रोह", "भारत छोड़ो आंदोलन", "नमक सत्याग्रह", "नमक सत्याग्रह"],
        "answer": "Sepoy Mutiny",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which act was passed by the British government to suppress the Indian rebellion of 1857?",
        "question_hi": "1857 के भारतीय विद्रोह को दबाने के लिए ब्रिटिश सरकार ने कौन सा कानून पारित किया था?",
        "options_en": ["Rowlatt Act", "Viceroy Act", "India Act", "Regulating Act"],
        "options_hi": ["रॉलेट एक्ट", "वाइसरॉय एक्ट", "भारत एक्ट", "रेगुलेटिंग एक्ट"],
        "answer": "Regulating Act",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Who founded the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना किसने की थी?",
        "options_en": ["Allan Octavian Hume", "Lal Bahadur Shastri", "Mahatma Gandhi", "Jawaharlal Nehru"],
        "options_hi": ["ऐलन ओक्टेवियन ह्यूम", "लाल बहादुर शास्त्री", "महात्मा गांधी", "जवाहरलाल नेहरू"],
        "answer": "Allan Octavian Hume",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Who was the first President of Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस के पहले अध्यक्ष कौन थे?",
        "options_en": ["Womesh Chunder Bonnerjee", "Surendranath Banerjee", "A.O. Hume", "Bal Gangadhar Tilak"],
        "options_hi": ["वोमेश चंदर बनर्जी", "सुरेन्द्रनाथ बनर्जी", "ए. ओ. ह्यूम", "बाल गंगाधर तिलक"],
        "answer": "Womesh Chunder Bonnerjee",
        "attempted": false,
        "selected": ""
      },
    {
        "num": 26,
        "question_en": "Who was the founder of the Maurya Empire?",
        "question_hi": "मौर्य साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Kautilya"],
        "options_hi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "कौटिल्य"],
        "answer": "Chandragupta Maurya",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Which Indian king embraced Buddhism after the Kalinga War?",
        "question_hi": "कौन से भारतीय राजा ने कलिंग युद्ध के बाद बौद्ध धर्म को अपनाया?",
        "options_en": ["Ashoka", "Chandragupta Maurya", "Samudragupta", "Harsha"],
        "options_hi": ["अशोक", "चंद्रगुप्त मौर्य", "समुद्रगुप्त", "हर्षा"],
        "answer": "Ashoka",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "The battle of Plassey was fought between which two forces?",
        "question_hi": "प्लासी की लड़ाई किस दो सेनाओं के बीच लड़ी गई थी?",
        "options_en": ["British and Siraj-ud-Daula", "Mughals and Marathas", "British and Marathas", "Mughal Empire and Rajputs"],
        "options_hi": ["ब्रिटिश और सिराज-उद-दौला", "मुगल और मराठा", "ब्रिटिश और मराठा", "मुगल साम्राज्य और राजपूत"],
        "answer": "British and Siraj-ud-Daula",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Who was the founder of the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस के संस्थापक कौन थे?",
        "options_en": ["Allan Octavian Hume", "Lal Lajpat Rai", "Subhas Chandra Bose", "Jawaharlal Nehru"],
        "options_hi": ["एलेन ऑक्टेवियन ह्यूम", "लाल लाजपत राय", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
        "answer": "Allan Octavian Hume",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which Indian freedom fighter is known as the 'Iron Man of India'?",
        "question_hi": "किस भारतीय स्वतंत्रता सेनानी को 'भारत के लौह पुरुष' के नाम से जाना जाता है?",
        "options_en": ["Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Bhagat Singh", "Lala Lajpat Rai"],
        "options_hi": ["सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस", "भगत सिंह", "लाला लाजपत राय"],
        "answer": "Sardar Vallabhbhai Patel",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "The Jallianwala Bagh massacre took place in which year?",
        "question_hi": "जलियांवाला बाग हत्याकांड किस वर्ष हुआ था?",
        "options_en": ["1919", "1925", "1930", "1942"],
        "options_hi": ["1919", "1925", "1930", "1942"],
        "answer": "1919",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Who was the first woman to become the Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन बनीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Vijayalakshmi Pandit", "Kiran Bedi"],
        "options_hi": ["इंदिरा गांधी", "सारोजिनी नायडू", "विजयलक्ष्मी पंडित", "किरण बेदी"],
        "answer": "Indira Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Which movement was launched by Mahatma Gandhi in 1919?",
        "question_hi": "महात्मा गांधी ने 1919 में कौन सा आंदोलन शुरू किया था?",
        "options_en": ["Non-Cooperation Movement", "Salt March", "Quit India Movement", "Champaran Satyagraha"],
        "options_hi": ["नमक सत्याग्रह", "असहमति आंदोलन", "भारत छोड़ो आंदोलन", "चम्पारण सत्याग्रह"],
        "answer": "Non-Cooperation Movement",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Who gave the slogan 'Do or Die' during the Quit India Movement?",
        "question_hi": "'भारत छोड़ो आंदोलन' के दौरान 'करो या मरो' का नारा किसने दिया था?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Who was the first President of India?",
        "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
        "options_en": ["Dr. Rajendra Prasad", "Dr. Zakir Husain", "Jawaharlal Nehru", "Dr. Radhakrishnan"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. जाकिर हुसैन", "जवाहरलाल नेहरू", "डॉ. राधाकृष्णन"],
        "answer": "Dr. Rajendra Prasad",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "The first war of Indian independence was fought in which year?",
        "question_hi": "भारत का पहला स्वतंत्रता संग्राम किस वर्ष लड़ा गया था?",
        "options_en": ["1857", "1942", "1919", "1905"],
        "options_hi": ["1857", "1942", "1919", "1905"],
        "answer": "1857",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Who is known as the 'Father of the Nation' in India?",
        "question_hi": "भारत में 'राष्ट्रपिता' के नाम से कौन प्रसिद्ध हैं?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस"],
        "answer": "Mahatma Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Who was the last Governor-General of independent India?",
        "question_hi": "स्वतंत्र भारत के अंतिम गवर्नर-जनरल कौन थे?",
        "options_en": ["C. Rajagopalachari", "Lord Mountbatten", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
        "options_hi": ["सी. राजगोपालाचारी", "लॉर्ड माउंटबेटन", "जवाहरलाल नेहरू", "डॉ. राजेंद्र प्रसाद"],
        "answer": "C. Rajagopalachari",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Who was the first woman to lead the Indian National Congress?",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की अध्यक्ष बनने वाली पहली महिला कौन थीं?",
        "options_en": ["Sarojini Naidu", "Indira Gandhi", "Aruna Asaf Ali", "Vijayalakshmi Pandit"],
        "options_hi": ["सारोजिनी नायडू", "इंदिरा गांधी", "अरुणा आसफ़ अली", "विजयलक्ष्मी पंडित"],
        "answer": "Sarojini Naidu",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "In which year did India gain independence?",
        "question_hi": "भारत को स्वतंत्रता कब प्राप्त हुई थी?",
        "options_en": ["1947", "1950", "1935", "1960"],
        "options_hi": ["1947", "1950", "1935", "1960"],
        "answer": "1947",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Who was the first Indian to win the Nobel Prize?",
        "question_hi": "भारत के पहले नोबेल पुरस्कार विजेता कौन थे?",
        "options_en": ["Rabindranath Tagore", "C. V. Raman", "Mother Teresa", "Har Gobind Khorana"],
        "options_hi": ["रवींद्रनाथ ठाकुर", "सी. वी. रमन", "मदर टेरेसा", "हार गोबिंद खोराना"],
        "answer": "Rabindranath Tagore",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which Indian ruler is known for his policy of Dhamma?",
        "question_hi": "कौन से भारतीय शासक को अपनी नीति 'धम्म' के लिए जाना जाता है?",
        "options_en": ["Ashoka", "Chandragupta Maurya", "Samudragupta", "Harsha"],
        "options_hi": ["अशोक", "चंद्रगुप्त मौर्य", "समुद्रगुप्त", "हर्षा"],
        "answer": "Ashoka",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Who was the first Vice-President of India?",
        "question_hi": "भारत के पहले उपराष्ट्रपति कौन थे?",
        "options_en": ["Dr. Sarvepalli Radhakrishnan", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Dr. Zakir Husain"],
        "options_hi": ["डॉ. सर्वपल्ली राधाकृष्णन", "डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "डॉ. जाकिर हुसैन"],
        "answer": "Dr. Sarvepalli Radhakrishnan",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Who was the first woman President of India?",
        "question_hi": "भारत की पहली महिला राष्ट्रपति कौन थीं?",
        "options_en": ["Pratibha Patil", "Indira Gandhi", "Sarojini Naidu", "Vijayalakshmi Pandit"],
        "options_hi": ["प्रतीक्षा पाटिल", "इंदिरा गांधी", "सारोजिनी नायडू", "विजयलक्ष्मी पंडित"],
        "answer": "Pratibha Patil",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which event marked the beginning of the British rule in India?",
        "question_hi": "भारत में ब्रिटिश शासन की शुरुआत किस घटना से हुई?",
        "options_en": ["Battle of Plassey", "Sepoy Mutiny", "Battle of Buxar", "First War of Independence"],
        "options_hi": ["प्लासी की लड़ाई", "सिपाही विद्रोह", "बक्सर की लड़ाई", "पहला स्वतंत्रता संग्राम"],
        "answer": "Battle of Plassey",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Who is regarded as the founder of the Indian National Army (INA)?",
        "question_hi": "भारतीय राष्ट्रीय सेना (INA) के संस्थापक के रूप में कौन जाने जाते हैं?",
        "options_en": ["Subhas Chandra Bose", "Bhagat Singh", "Jawaharlal Nehru", "Sardar Patel"],
        "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "जवाहरलाल नेहरू", "सरदार पटेल"],
        "answer": "Subhas Chandra Bose",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Who was the first Maratha ruler to establish an empire?",
        "question_hi": "पहला मराठा शासक कौन था जिसने साम्राज्य की नींव रखी?",
        "options_en": ["Shivaji Maharaj", "Balaji Baji Rao", "Shahu Maharaj", "Rajaram Maharaj"],
        "options_hi": ["शिवाजी महाराज", "बालाजी बाजीराव", "शाहू महाराज", "राजाराम महाराज"],
        "answer": "Shivaji Maharaj",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Who was the founder of the Sikh Empire?",
        "question_hi": "सिख साम्राज्य के संस्थापक कौन थे?",
        "options_en": ["Ranjit Singh", "Guru Nanak", "Hari Singh Nalwa", "Banda Singh Bahadur"],
        "options_hi": ["रणजीत सिंह", "गुरु नानक", "हरि सिंह नलवा", "बंदा सिंह बहादुर"],
        "answer": "Ranjit Singh",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Who was the first woman Prime Minister of India?",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन बनीं?",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Vijayalakshmi Pandit", "Sushma Swaraj"],
        "options_hi": ["इंदिरा गांधी", "सारोजिनी नायडू", "विजयलक्ष्मी पंडित", "सुषमा स्वराज"],
        "answer": "Indira Gandhi",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Who was the last Mughal emperor?",
        "question_hi": "अंतिम मुग़ल सम्राट कौन थे?",
        "options_en": ["Bahadur Shah Zafar", "Aurangzeb", "Shah Jahan", "Akbar"],
        "options_hi": ["बहादुर शाह जफर", "औरंगज़ेब", "शाहजहाँ", "अकबर"],
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
