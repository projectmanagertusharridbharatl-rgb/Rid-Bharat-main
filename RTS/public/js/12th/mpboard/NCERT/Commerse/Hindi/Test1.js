const questions = [
   {
    num: 1,
    question_hi: "कबीर कौन थे?",
    question_en: "Who was Kabir?",
    options_hi: ["भक्त कवि", "राजा", "वैज्ञानिक", "सैनिक"],
    options_en: ["Devotional poet", "King", "Scientist", "Soldier"],
    answer_hi: "भक्त कवि",
    answer_en: "Devotional poet",
    answer: "Devotional poet",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_hi: "कबीर की भक्ति किस धर्म से संबंधित थी?",
    question_en: "Kabir’s devotion was related to which religion?",
    options_hi: ["साधुता", "हिंदू और इस्लाम", "ईसाई धर्म", "बौद्ध धर्म"],
    options_en: ["Asceticism", "Hinduism and Islam", "Christianity", "Buddhism"],
    answer_hi: "हिंदू और इस्लाम",
    answer_en: "Hinduism and Islam",
    answer: "Hinduism and Islam",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_hi: "कबीर का जन्म कहाँ हुआ था?",
    question_en: "Where was Kabir born?",
    options_hi: ["वाराणसी", "दिल्ली", "अगरा", "पटना"],
    options_en: ["Varanasi", "Delhi", "Agra", "Patna"],
    answer_hi: "वाराणसी",
    answer_en: "Varanasi",
    answer: "Varanasi",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_hi: "कबीर की प्रमुख भाषा क्या थी?",
    question_en: "What was Kabir’s main language?",
    options_hi: ["हिंदी", "संस्कृत", "फारसी", "उर्दू"],
    options_en: ["Hindi", "Sanskrit", "Persian", "Urdu"],
    answer_hi: "हिंदी",
    answer_en: "Hindi",
    answer: "Hindi",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_hi: "कबीर की रचनाएँ किसमें संग्रहित हैं?",
    question_en: "In which are Kabir’s works compiled?",
    options_hi: ["बीजक", "गीता", "रामायण", "महाभारत"],
    options_en: ["Bijak", "Gita", "Ramayana", "Mahabharata"],
    answer_hi: "बीजक",
    answer_en: "Bijak",
    answer: "Bijak",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_hi: "कबीर के भजनों का मुख्य विषय क्या था?",
    question_en: "What was the main theme of Kabir’s hymns?",
    options_hi: ["भक्ति", "राजनीति", "धर्मशास्त्र", "इतिहास"],
    options_en: ["Devotion", "Politics", "Religious scriptures", "History"],
    answer_hi: "भक्ति",
    answer_en: "Devotion",
    answer: "Devotion",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_hi: "कबीर ने किस सामाजिक बुराई का विरोध किया?",
    question_en: "Which social evil did Kabir oppose?",
    options_hi: ["छुआछूत", "शिक्षा", "स्वास्थ्य", "व्यापार"],
    options_en: ["Untouchability", "Education", "Health", "Trade"],
    answer_hi: "छुआछूत",
    answer_en: "Untouchability",
    answer: "Untouchability",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_hi: "कबीर की भक्ति किसका विरोध करती थी?",
    question_en: "Kabir’s devotion opposed what?",
    options_hi: ["पाखंड", "सत्य", "ध्यान", "प्रेम"],
    options_en: ["Hypocrisy", "Truth", "Meditation", "Love"],
    answer_hi: "पाखंड",
    answer_en: "Hypocrisy",
    answer: "Hypocrisy",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_hi: "कबीर के अनुसार सच्ची भक्ति किसमें है?",
    question_en: "According to Kabir, true devotion lies in what?",
    options_hi: ["ईश्वर की एकता", "धार्मिक कर्मकांड", "मंदिर जाना", "त्याग"],
    options_en: ["Unity of God", "Religious rituals", "Going to temple", "Sacrifice"],
    answer_hi: "ईश्वर की एकता",
    answer_en: "Unity of God",
    answer: "Unity of God",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_hi: "कबीर के भजनों में किस प्रकार की भाषा प्रयोग होती है?",
    question_en: "What type of language is used in Kabir’s hymns?",
    options_hi: ["सरल", "संस्कृत", "फ़ारसी", "अंग्रेज़ी"],
    options_en: ["Simple", "Sanskrit", "Persian", "English"],
    answer_hi: "सरल",
    answer_en: "Simple",
    answer: "Simple",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_hi: "कबीर ने किस प्रकार की सोच का प्रचार किया?",
    question_en: "What kind of thinking did Kabir promote?",
    options_hi: ["सामाजिक समानता", "राजनीतिक सत्ता", "धार्मिक जटिलता", "व्यापारिक वृद्धि"],
    options_en: ["Social equality", "Political power", "Religious complexity", "Trade growth"],
    answer_hi: "सामाजिक समानता",
    answer_en: "Social equality",
    answer: "Social equality",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_hi: "कबीर के समय की प्रमुख सामाजिक बुराई क्या थी?",
    question_en: "What was the major social evil during Kabir's time?",
    options_hi: ["भ्रष्टाचार", "छुआछूत", "नारी शिक्षा का अभाव", "भिक्षावृत्ति"],
    options_en: ["Corruption", "Untouchability", "Lack of women's education", "Begging"],
    answer_hi: "छुआछूत",
    answer_en: "Untouchability",
    answer: "Untouchability",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_hi: "कबीर ने किस धर्म के पाखंड की आलोचना की?",
    question_en: "Which religion’s hypocrisy did Kabir criticize?",
    options_hi: ["हिंदू और मुस्लिम", "सिख", "ईसाई", "जैन"],
    options_en: ["Hindu and Muslim", "Sikh", "Christian", "Jain"],
    answer_hi: "हिंदू और मुस्लिम",
    answer_en: "Hindu and Muslim",
    answer: "Hindu and Muslim",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_hi: "कबीर की भक्ति पर किसका जोर था?",
    question_en: "Kabir's devotion emphasized what?",
    options_hi: ["सत्य और सरलता", "धार्मिक अनुष्ठान", "पूजा विधि", "आयुर्वेद"],
    options_en: ["Truth and simplicity", "Religious rituals", "Worship methods", "Ayurveda"],
    answer_hi: "सत्य और सरलता",
    answer_en: "Truth and simplicity",
    answer: "Truth and simplicity",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_hi: "कबीर ने किसके विरुद्ध आवाज उठाई?",
    question_en: "Against whom did Kabir raise his voice?",
    options_hi: ["पाखंडियों", "किसानों", "शिक्षकों", "सैनिकों"],
    options_en: ["Hypocrites", "Farmers", "Teachers", "Soldiers"],
    answer_hi: "पाखंडियों",
    answer_en: "Hypocrites",
    answer: "Hypocrites",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_hi: "कबीर ने मानव जीवन का उद्देश्य क्या बताया?",
    question_en: "What did Kabir say is the purpose of human life?",
    options_hi: ["ईश्वर की भक्ति", "धन कमाना", "शिक्षा प्राप्त करना", "परिवार बनाना"],
    options_en: ["Devotion to God", "Earning money", "Getting education", "Building family"],
    answer_hi: "ईश्वर की भक्ति",
    answer_en: "Devotion to God",
    answer: "Devotion to God",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_hi: "कबीर ने किस सामाजिक प्रथा का विरोध किया?",
    question_en: "Which social practice did Kabir oppose?",
    options_hi: ["जाति व्यवस्था", "शिक्षा", "स्वास्थ्य", "व्यापार"],
    options_en: ["Caste system", "Education", "Health", "Trade"],
    answer_hi: "जाति व्यवस्था",
    answer_en: "Caste system",
    answer: "Caste system",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_hi: "कबीर के भजन किस रूप में प्रचलित हैं?",
    question_en: "In what form are Kabir’s hymns prevalent?",
    options_hi: ["कविता", "नाटक", "कथा", "गीत"],
    options_en: ["Poetry", "Drama", "Story", "Song"],
    answer_hi: "कविता",
    answer_en: "Poetry",
    answer: "Poetry",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_hi: "कबीर का क्या संदेश था?",
    question_en: "What was Kabir’s message?",
    options_hi: ["सत्य, प्रेम और भक्ति", "राजनीति", "धर्मशास्त्र", "युद्ध"],
    options_en: ["Truth, love, and devotion", "Politics", "Religious scriptures", "War"],
    answer_hi: "सत्य, प्रेम और भक्ति",
    answer_en: "Truth, love, and devotion",
    answer: "Truth, love, and devotion",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_hi: "कबीर की रचनाएँ किस भाषा में हैं?",
    question_en: "In which language are Kabir’s compositions?",
    options_hi: ["अवधी", "हिंदी", "बंगाली", "तमिल"],
    options_en: ["Awadhi", "Hindi", "Bengali", "Tamil"],
    answer_hi: "हिंदी",
    answer_en: "Hindi",
    answer: "Hindi",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_hi: "कबीर के अनुसार ईश्वर कैसे हैं?",
    question_en: "According to Kabir, God is?",
    options_hi: ["सर्वव्यापी", "मूर्तिपूजक", "निर्दयी", "निष्क्रिय"],
    options_en: ["Omnipresent", "Idol worshiped", "Cruel", "Inactive"],
    answer_hi: "सर्वव्यापी",
    answer_en: "Omnipresent",
    answer: "Omnipresent",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_hi: "कबीर का कौन सा सिखावन आज भी प्रचलित है?",
    question_en: "Which teaching of Kabir is still prevalent?",
    options_hi: ["सत्य बोलो", "धार्मिक अनुष्ठान", "युद्ध", "धन संग्रह"],
    options_en: ["Speak the truth", "Religious rituals", "War", "Accumulating wealth"],
    answer_hi: "सत्य बोलो",
    answer_en: "Speak the truth",
    answer: "Speak the truth",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_hi: "कबीर के भजनों का प्रभाव किस पर पड़ा?",
    question_en: "Kabir’s hymns influenced whom?",
    options_hi: ["भक्तों", "राजाओं", "सैनिकों", "व्यापारियों"],
    options_en: ["Devotees", "Kings", "Soldiers", "Traders"],
    answer_hi: "भक्तों",
    answer_en: "Devotees",
    answer: "Devotees",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_hi: "कबीर की शिक्षाएँ किस पर आधारित थीं?",
    question_en: "Kabir’s teachings were based on what?",
    options_hi: ["सादगी और ईश्वर भक्ति", "शासन व्यवस्था", "व्यापार", "धार्मिक अनुष्ठान"],
    options_en: ["Simplicity and devotion to God", "Governance", "Trade", "Religious rituals"],
    answer_hi: "सादगी और ईश्वर भक्ति",
    answer_en: "Simplicity and devotion to God",
    answer: "Simplicity and devotion to God",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_hi: "कबीर की भक्ति किस तरह की थी?",
    question_en: "What kind of devotion was Kabir’s?",
    options_hi: ["सर्वधर्म समन्वय", "केवल हिंदू", "केवल इस्लाम", "केवल सिख"],
    options_en: ["Universal religious harmony", "Only Hindu", "Only Islam", "Only Sikh"],
    answer_hi: "सर्वधर्म समन्वय",
    answer_en: "Universal religious harmony",
    answer: "Universal religious harmony",
    attempted: false,
    selected: ""
  },
  {
    "num": 26,
    "question_hi": "'तमस' उपन्यास के लेखक कौन हैं?",
    "question_en": "Who is the author of the novel 'Tamas'?",
    "options_hi": ["भीष्म साहनी", "रामधारी सिंह दिनकर", "माखनलाल चतुर्वेदी", "सुमित्रानंदन पंत"],
    "options_en": ["Bhisham Sahni", "Ramdhari Singh Dinkar", "Makhanlal Chaturvedi", "Sumitranandan Pant"],
    "answer_hi": "भीष्म साहनी",
    "answer_en": "Bhisham Sahni",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_hi": "'गांधीजी का असली नाम क्या था?'",
    "question_en": "What was Gandhi ji's real name?",
    "options_hi": ["मोहनदास करमचंद गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "भगत सिंह"],
    "options_en": ["Mohandas Karamchand Gandhi", "Subhash Chandra Bose", "Jawaharlal Nehru", "Bhagat Singh"],
    "answer_hi": "मोहनदास करमचंद गांधी",
    "answer_en": "Mohandas Karamchand Gandhi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_hi": "'भारत छोड़ो आंदोलन' कब शुरू हुआ था?",
    "question_en": "When did the 'Quit India Movement' start?",
    "options_hi": ["1942", "1930", "1919", "1920"],
    "options_en": ["1942", "1930", "1919", "1920"],
    "answer_hi": "1942",
    "answer_en": "1942",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_hi": "'चंपारण सत्याग्रह' का नेतृत्व किसने किया था?",
    "question_en": "Who led the 'Champaran Satyagraha'?",
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "बाल गंगाधर तिलक"],
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Bal Gangadhar Tilak"],
    "answer_hi": "महात्मा गांधी",
    "answer_en": "Mahatma Gandhi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_hi": "'नमक सत्याग्रह' कहाँ हुआ था?",
    "question_en": "Where did the 'Salt Satyagraha' take place?",
    "options_hi": ["दांडी", "चंपारण", "अहमदाबाद", "काकोरी"],
    "options_en": ["Dandi", "Champaran", "Ahmedabad", "Kakori"],
    "answer_hi": "दांडी",
    "answer_en": "Dandi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_hi": "'अहमदाबाद', किस आंदोलन के लिए प्रसिद्ध है?",
    "question_en": "Ahmedabad is famous for which movement?",
    "options_hi": ["खादी आंदोलन", "स्वराज आंदोलन", "नमक सत्याग्रह", "भारतीय राष्ट्रीय कांग्रेस"],
    "options_en": ["Khadi Movement", "Swaraj Movement", "Salt Satyagraha", "Indian National Congress"],
    "answer_hi": "नमक सत्याग्रह",
    "answer_en": "Salt Satyagraha",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_hi": "'रविंद्रनाथ टैगोर' ने किस गीत को भारत का राष्ट्रीय गान बनाया?",
    "question_en": "Which song by Rabindranath Tagore was adopted as India's national anthem?",
    "options_hi": ["जन गण मन", "वन्दे मातरम्", "सारे जहाँ से अच्छा", "रघुपति राघव"],
    "options_en": ["Jana Gana Mana", "Vande Mataram", "Sare Jahan Se Achha", "Raghupati Raghav"],
    "answer_hi": "जन गण मन",
    "answer_en": "Jana Gana Mana",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_hi": "'भारत छोड़ो' आंदोलन का मुख्य नारा क्या था?",
    "question_en": "What was the main slogan of the 'Quit India' movement?",
    "options_hi": ["करो या मरो", "वंदे मातरम्", "स्वराज हमारा जन्मसिद्ध अधिकार है", "भारत छोड़ो"],
    "options_en": ["Do or Die", "Vande Mataram", "Swaraj is our birthright", "Quit India"],
    "answer_hi": "करो या मरो",
    "answer_en": "Do or Die",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_hi": "'सुभाष चंद्र बोस' ने किस सेना का गठन किया था?",
    "question_en": "Which army did Subhash Chandra Bose form?",
    "options_hi": ["आजाद हिन्द फौज", "भारतीय राष्ट्रीय सेना", "इंडियन आर्मी", "ब्रिगेड"],
    "options_en": ["Azad Hind Fauj", "Indian National Army", "Indian Army", "Brigade"],
    "answer_hi": "भारतीय राष्ट्रीय सेना",
    "answer_en": "Indian National Army",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_hi": "'भगत सिंह' को किसने फांसी दी थी?",
    "question_en": "Who sentenced Bhagat Singh to death?",
    "options_hi": ["ब्रिटिश सरकार", "भारतीय सरकार", "मुस्लिम लीग", "भारतीय राष्ट्रीय कांग्रेस"],
    "options_en": ["British Government", "Indian Government", "Muslim League", "Indian National Congress"],
    "answer_hi": "ब्रिटिश सरकार",
    "answer_en": "British Government",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_hi": "'हिंदुस्तान सोशलिस्ट रिपब्लिकन एसोसिएशन' का उद्देश्य क्या था?",
    "question_en": "What was the objective of the Hindustan Socialist Republican Association?",
    "options_hi": ["स्वतंत्रता प्राप्त करना", "सामाजिक सुधार", "धार्मिक सुधार", "शिक्षा का प्रसार"],
    "options_en": ["To achieve freedom", "Social reform", "Religious reform", "Spread of education"],
    "answer_hi": "स्वतंत्रता प्राप्त करना",
    "answer_en": "To achieve freedom",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_hi": "'महात्मा गांधी' ने किस आंदोलन की शुरुआत 'असहयोग आंदोलन' के रूप में की थी?",
    "question_en": "Which movement did Mahatma Gandhi start as 'Non-Cooperation Movement'?",
    "options_hi": ["असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "नमक सत्याग्रह", "भारत छोड़ो आंदोलन"],
    "options_en": ["Non-Cooperation Movement", "Civil Disobedience Movement", "Salt Satyagraha", "Quit India Movement"],
    "answer_hi": "असहयोग आंदोलन",
    "answer_en": "Non-Cooperation Movement",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_hi": "'सविनय अवज्ञा आंदोलन' कब शुरू हुआ था?",
    "question_en": "When did the Civil Disobedience Movement start?",
    "options_hi": ["1930", "1920", "1942", "1919"],
    "options_en": ["1930", "1920", "1942", "1919"],
    "answer_hi": "1930",
    "answer_en": "1930",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_hi": "'रवींद्रनाथ टैगोर' ने किस वर्ष 'जन गण मन' लिखा था?",
    "question_en": "In which year did Rabindranath Tagore write 'Jana Gana Mana'?",
    "options_hi": ["1911", "1920", "1947", "1905"],
    "options_en": ["1911", "1920", "1947", "1905"],
    "answer_hi": "1911",
    "answer_en": "1911",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_hi": "'महात्मा गांधी' का जन्म कहाँ हुआ था?",
    "question_en": "Where was Mahatma Gandhi born?",
    "options_hi": ["पोरबंदर", "नई दिल्ली", "वाराणसी", "अहमदाबाद"],
    "options_en": ["Porbandar", "New Delhi", "Varanasi", "Ahmedabad"],
    "answer_hi": "पोरबंदर",
    "answer_en": "Porbandar",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_hi": "'भारतीय राष्ट्रीय कांग्रेस' की स्थापना कब हुई थी?",
    "question_en": "When was the Indian National Congress founded?",
    "options_hi": ["1885", "1905", "1919", "1920"],
    "options_en": ["1885", "1905", "1919", "1920"],
    "answer_hi": "1885",
    "answer_en": "1885",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_hi": "'लाला लाजपत राय' को क्या कहा जाता था?",
    "question_en": "What was Lala Lajpat Rai called?",
    "options_hi": ["पंजाब के शेर", "देशभक्त", "क्रांतिकारी", "साहित्यकार"],
    "options_en": ["Sher of Punjab", "Patriot", "Revolutionary", "Writer"],
    "answer_hi": "पंजाब के शेर",
    "answer_en": "Sher of Punjab",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_hi": "'खादी आंदोलन' का नेतृत्व किसने किया था?",
    "question_en": "Who led the Khadi Movement?",
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Bhagat Singh"],
    "answer_hi": "महात्मा गांधी",
    "answer_en": "Mahatma Gandhi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_hi": "'भारत छोड़ो आंदोलन' का प्रमुख उद्देश्य क्या था?",
    "question_en": "What was the main objective of the Quit India Movement?",
    "options_hi": ["ब्रिटिश शासन समाप्त करना", "सामाजिक सुधार", "शिक्षा का प्रसार", "धार्मिक स्वतंत्रता"],
    "options_en": ["End British rule", "Social reform", "Spread of education", "Religious freedom"],
    "answer_hi": "ब्रिटिश शासन समाप्त करना",
    "answer_en": "End British rule",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_hi": "'स्वराज' का अर्थ क्या है?",
    "question_en": "What is the meaning of 'Swaraj'?",
    "options_hi": ["स्वयं का शासन", "देशभक्ति", "शिक्षा", "धर्म"],
    "options_en": ["Self-rule", "Patriotism", "Education", "Religion"],
    "answer_hi": "स्वयं का शासन",
    "answer_en": "Self-rule",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_hi": "'महात्मा गांधी' ने किस देश में असहयोग आंदोलन शुरू किया था?",
    "question_en": "In which country did Mahatma Gandhi start the Non-Cooperation Movement?",
    "options_hi": ["भारत", "दक्षिण अफ्रीका", "अंग्रेज़", "अमेरिका"],
    "options_en": ["India", "South Africa", "England", "America"],
    "answer_hi": "भारत",
    "answer_en": "India",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_hi": "'भगत सिंह' का जन्म कहाँ हुआ था?",
    "question_en": "Where was Bhagat Singh born?",
    "options_hi": ["लायलपुर", "अमृतसर", "दिल्ली", "मुम्बई"],
    "options_en": ["Lyallpur", "Amritsar", "Delhi", "Mumbai"],
    "answer_hi": "लायलपुर",
    "answer_en": "Lyallpur",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_hi": "'सुभाष चंद्र बोस' ने किस वर्ष 'आजाद हिन्द फौज' का गठन किया?",
    "question_en": "In which year did Subhash Chandra Bose form the 'Azad Hind Fauj'?",
    "options_hi": ["1942", "1941", "1940", "1939"],
    "options_en": ["1942", "1941", "1940", "1939"],
    "answer_hi": "1942",
    "answer_en": "1942",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_hi": "'भारत छोड़ो आंदोलन' कब समाप्त हुआ था?",
    "question_en": "When did the 'Quit India Movement' end?",
    "options_hi": ["1945", "1944", "1943", "1946"],
    "options_en": ["1945", "1944", "1943", "1946"],
    "answer_hi": "1945",
    "answer_en": "1945",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_hi": "'स्वराज मेरा जन्मसिद्ध अधिकार है' किसने कहा था?",
    "question_en": "Who said, 'Swaraj is my birthright'?",
    "options_hi": ["बाल गंगाधर तिलक", "महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
    "options_en": ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose"],
    "answer_hi": "बाल गंगाधर तिलक",
    "answer_en": "Bal Gangadhar Tilak",
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
