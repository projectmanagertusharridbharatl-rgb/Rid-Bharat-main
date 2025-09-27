
const questions = [

  {
    "num": 1,
    "question_en": "Which is the highest law-making body in India?",
    "question_hi": "भारत में सर्वोच्च विधि-निर्मात्री संस्था कौन सी है?",
    "options_en": ["Supreme Court", "Parliament", "President", "Prime Minister"],
    "options_hi": ["सुप्रीम कोर्ट", "संसद", "राष्ट्रपति", "प्रधानमंत्री"],
    "answer_en": "Parliament",
    "answer_hi": "संसद",
    "attempted": false
  },
  {
    "num": 2,
    "question_en": "Who wrote the book 'Hind Swaraj'?",
    "question_hi": "'हिंद स्वराज' किताब किसने लिखी थी?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Lala Lajpat Rai"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "लाला लाजपत राय"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
    "attempted": false
  },
  {
    "num": 3,
    "question_en": "The First War of Indian Independence took place in which year?",
    "question_hi": "भारत का प्रथम स्वतंत्रता संग्राम किस वर्ष हुआ था?",
    "options_en": ["1857", "1947", "1919", "1920"],
    "options_hi": ["1857", "1947", "1919", "1920"],
    "answer_en": "1857",
    "answer_hi": "1857",
    "attempted": false
  },
  {
    "num": 4,
    "question_en": "Which of these is NOT a Fundamental Right in the Indian Constitution?",
    "question_hi": "भारतीय संविधान में निम्नलिखित में से कौन-सा मौलिक अधिकार नहीं है?",
    "options_en": ["Right to Equality", "Right to Property", "Right to Freedom of Religion", "Right to Education"],
    "options_hi": ["समानता का अधिकार", "संपत्ति का अधिकार", "धर्म की स्वतंत्रता का अधिकार", "शिक्षा का अधिकार"],
    "answer_en": "Right to Property",
    "answer_hi": "संपत्ति का अधिकार",
    "attempted": false
  },
  {
    "num": 5,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के प्रथम राष्ट्रपति कौन थे?",
    "options_en": ["Jawaharlal Nehru", "Rajendra Prasad", "Sardar Patel", "Dr. B.R. Ambedkar"],
    "options_hi": ["जवाहरलाल नेहरू", "राजेंद्र प्रसाद", "सरदार पटेल", "डॉ. बी.आर. अंबेडकर"],
    "answer_en": "Rajendra Prasad",
    "answer_hi": "राजेंद्र प्रसाद",
    "attempted": false
  },
  {
    "num": 6,
    "question_en": "The Non-Cooperation Movement was launched in which year?",
    "question_hi": "असहयोग आंदोलन किस वर्ष शुरू किया गया था?",
    "options_en": ["1919", "1920", "1930", "1942"],
    "options_hi": ["1919", "1920", "1930", "1942"],
    "answer_en": "1920",
    "answer_hi": "1920",
    "attempted": false
  },
  {
    "num": 7,
    "question_en": "Which is the highest judicial body in India?",
    "question_hi": "भारत का सर्वोच्च न्यायिक निकाय कौन-सा है?",
    "options_en": ["High Court", "Supreme Court", "District Court", "Lok Adalat"],
    "options_hi": ["उच्च न्यायालय", "सुप्रीम कोर्ट", "जिला न्यायालय", "लोक अदालत"],
    "answer_en": "Supreme Court",
    "answer_hi": "सुप्रीम कोर्ट",
    "attempted": false
  },
  {
    "num": 8,
    "question_en": "The Quit India Movement was started in which year?",
    "question_hi": "भारत छोड़ो आंदोलन किस वर्ष शुरू हुआ था?",
    "options_en": ["1942", "1930", "1920", "1919"],
    "options_hi": ["1942", "1930", "1920", "1919"],
    "answer_en": "1942",
    "answer_hi": "1942",
    "attempted": false
  },
  {
    "num": 9,
    "question_en": "Which river is known as the 'Sorrow of Bihar'?",
    "question_hi": "किस नदी को 'बिहार का शोक' कहा जाता है?",
    "options_en": ["Ganga", "Yamuna", "Kosi", "Brahmaputra"],
    "options_hi": ["गंगा", "यमुना", "कोसी", "ब्रह्मपुत्र"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false
  },
  {
    "num": 10,
    "question_en": "Which is the main source of irrigation in India?",
    "question_hi": "भारत में सिंचाई का मुख्य स्रोत क्या है?",
    "options_en": ["Canals", "Wells & Tube Wells", "Tanks", "Rainwater Harvesting"],
    "options_hi": ["नहरें", "कुएँ व नलकूप", "तालाब", "वर्षा जल संचयन"],
    "answer_en": "Wells & Tube Wells",
    "answer_hi": "कुएँ व नलकूप",
    "attempted": false
  },
  {
    "num": 11,
    "question_en": "Which state is the largest producer of tea in India?",
    "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
    "options_en": ["Kerala", "Assam", "Tamil Nadu", "Karnataka"],
    "options_hi": ["केरल", "असम", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false
  },
  {
    "num": 12,
    "question_en": "Which of these is a Rabi crop?",
    "question_hi": "निम्नलिखित में से कौन-सी रबी फसल है?",
    "options_en": ["Rice", "Wheat", "Cotton", "Sugarcane"],
    "options_hi": ["चावल", "गेहूँ", "कपास", "गन्ना"],
    "answer_en": "Wheat",
    "answer_hi": "गेहूँ",
    "attempted": false
  },
  {
    "num": 13,
    "question_en": "The Tropic of Cancer passes through which Indian state?",
    "question_hi": "कर्क रेखा किस भारतीय राज्य से होकर गुजरती है?",
    "options_en": ["Rajasthan", "Madhya Pradesh", "Maharashtra", "All of these"],
    "options_hi": ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false
  },
  {
    "num": 14,
    "question_en": "Which is the longest river in India?",
    "question_hi": "भारत की सबसे लंबी नदी कौन-सी है?",
    "options_en": ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
    "options_hi": ["यमुना", "गंगा", "ब्रह्मपुत्र", "गोदावरी"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false
  },
  {
    "num": 15,
    "question_en": "Which city is known as the 'Manchester of India'?",
    "question_hi": "किस शहर को 'भारत का मैनचेस्टर' कहा जाता है?",
    "options_en": ["Mumbai", "Ahmedabad", "Chennai", "Kolkata"],
    "options_hi": ["मुंबई", "अहमदाबाद", "चेन्नई", "कोलकाता"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false
  },
  {
    "num": 16,
    "question_en": "Who was the first woman Prime Minister of India?",
    "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    "options_en": ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Sarojini Naidu"],
    "options_hi": ["सोनिया गांधी", "इंदिरा गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी",
    "attempted": false
  },
  {
    "num": 17,
    "question_en": "The Indian National Congress was founded in which year?",
    "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई थी?",
    "options_en": ["1885", "1905", "1920", "1947"],
    "options_hi": ["1885", "1905", "1920", "1947"],
    "answer_en": "1885",
    "answer_hi": "1885",
    "attempted": false
  },
  {
    "num": 18,
    "question_en": "Which of these is a Kharif crop?",
    "question_hi": "निम्नलिखित में से कौन-सी खरीफ फसल है?",
    "options_en": ["Wheat", "Barley", "Rice", "Mustard"],
    "options_hi": ["गेहूँ", "जौ", "चावल", "सरसों"],
    "answer_en": "Rice",
    "answer_hi": "चावल",
    "attempted": false
  },
  {
    "num": 19,
    "question_en": "Which is the largest state in India by area?",
    "question_hi": "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन-सा है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false
  },
  {
    "num": 20,
    "question_en": "The 'Dandi March' was associated with which movement?",
    "question_hi": "'दांडी मार्च' किस आंदोलन से जुड़ा था?",
    "options_en": ["Non-Cooperation", "Civil Disobedience", "Quit India", "Swadeshi"],
    "options_hi": ["असहयोग", "सविनय अवज्ञा", "भारत छोड़ो", "स्वदेशी"],
    "answer_en": "Civil Disobedience",
    "answer_hi": "सविनय अवज्ञा",
    "attempted": false
  },
  {
    "num": 21,
    "question_en": "Which is the southernmost point of India?",
    "question_hi": "भारत का सबसे दक्षिणी बिंदु कौन-सा है?",
    "options_en": ["Kanyakumari", "Indira Point", "Rameswaram", "Goa"],
    "options_hi": ["कन्याकुमारी", "इंदिरा प्वाइंट", "रामेश्वरम", "गोवा"],
    "answer_en": "Indira Point",
    "answer_hi": "इंदिरा प्वाइंट",
    "attempted": false
  },
  {
    "num": 22,
    "question_en": "Who is known as the 'Father of the Indian Constitution'?",
    "question_hi": "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Patel"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "डॉ. बी.आर. अंबेडकर", "सरदार पटेल"],
    "answer_en": "Dr. B.R. Ambedkar",
    "answer_hi": "डॉ. बी.आर. अंबेडकर",
    "attempted": false
  },
  {
    "num": 23,
    "question_en": "Which of these is a renewable resource?",
    "question_hi": "निम्नलिखित में से कौन-सा नवीकरणीय संसाधन है?",
    "options_en": ["Coal", "Petroleum", "Solar Energy", "Natural Gas"],
    "options_hi": ["कोयला", "पेट्रोलियम", "सौर ऊर्जा", "प्राकृतिक गैस"],
    "answer_en": "Solar Energy",
    "answer_hi": "सौर ऊर्जा",
    "attempted": false
  },
  {
    "num": 24,
    "question_en": "The 'Charkha' was used by Mahatma Gandhi as a symbol of:",
    "question_hi": "महात्मा गांधी द्वारा 'चरखा' किसका प्रतीक था?",
    "options_en": ["Industrialization", "Self-reliance", "Violence", "British Rule"],
    "options_hi": ["औद्योगीकरण", "आत्मनिर्भरता", "हिंसा", "ब्रिटिश शासन"],
    "answer_en": "Self-reliance",
    "answer_hi": "आत्मनिर्भरता",
    "attempted": false
  },
  {
    "num": 25,
    "question_en": "Which is the largest desert in India?",
    "question_hi": "भारत का सबसे बड़ा रेगिस्तान कौन-सा है?",
    "options_en": ["Thar", "Sahara", "Kalahari", "Gobi"],
    "options_hi": ["थार", "सहारा", "कालाहारी", "गोबी"],
    "answer_en": "Thar",
    "answer_hi": "थार",
    "attempted": false
  },
  {
    "num": 26,
    "question_en": "The 'Simon Commission' was boycotted because:",
    "question_hi": "'साइमन कमीशन' का बहिष्कार क्यों किया गया था?",
    "options_en": ["It was all-British", "It supported Partition", "It was too late", "It had no agenda"],
    "options_hi": ["यह पूर्णतः ब्रिटिश था", "इसने विभाजन का समर्थन किया", "यह बहुत देर से आया", "इसका कोई एजेंडा नहीं था"],
    "answer_en": "It was all-British",
    "answer_hi": "यह पूर्णतः ब्रिटिश था",
    "attempted": false
  },
  {
    "num": 27,
    "question_en": "Which soil is best suited for cotton cultivation?",
    "question_hi": "कपास की खेती के लिए कौन-सी मिट्टी सबसे उपयुक्त है?",
    "options_en": ["Alluvial", "Black", "Red", "Laterite"],
    "options_hi": ["जलोढ़", "काली", "लाल", "लेटराइट"],
    "answer_en": "Black",
    "answer_hi": "काली",
    "attempted": false
  },
  {
    "num": 28,
    "question_en": "The 'Jallianwala Bagh Massacre' took place in which city?",
    "question_hi": "'जलियांवाला बाग हत्याकांड' किस शहर में हुआ था?",
    "options_en": ["Delhi", "Amritsar", "Lahore", "Kanpur"],
    "options_hi": ["दिल्ली", "अमृतसर", "लाहौर", "कानपुर"],
    "answer_en": "Amritsar",
    "answer_hi": "अमृतसर",
    "attempted": false
  },
  {
    "num": 29,
    "question_en": "Which is the largest coffee-producing state in India?",
    "question_hi": "भारत में कॉफी का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Assam"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "असम"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false
  },
  {
    "num": 30,
    "question_en": "The 'Poona Pact' was signed between Mahatma Gandhi and:",
    "question_hi": "'पूना पैक्ट' महात्मा गांधी और किसके बीच हुआ था?",
    "options_en": ["Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Subhas Chandra Bose", "Sardar Patel"],
    "options_hi": ["जवाहरलाल नेहरू", "डॉ. बी.आर. अंबेडकर", "सुभाष चंद्र बोस", "सरदार पटेल"],
    "answer_en": "Dr. B.R. Ambedkar",
    "answer_hi": "डॉ. बी.आर. अंबेडकर",
    "attempted": false
  },
  {
    "num": 31,
    "question_en": "Which of these is a major port on the east coast of India?",
    "question_hi": "निम्नलिखित में से कौन-सा भारत के पूर्वी तट पर एक प्रमुख बंदरगाह है?",
    "options_en": ["Mumbai", "Chennai", "Kochi", "Goa"],
    "options_hi": ["मुंबई", "चेन्नई", "कोच्चि", "गोवा"],
    "answer_en": "Chennai",
    "answer_hi": "चेन्नई",
    "attempted": false
  },
  {
    "num": 32,
    "question_en": "The 'Green Revolution' in India was mainly related to:",
    "question_hi": "भारत में 'हरित क्रांति' मुख्य रूप से किससे संबंधित थी?",
    "options_en": ["Industrial Growth", "Agricultural Production", "Forest Conservation", "Water Management"],
    "options_hi": ["औद्योगिक विकास", "कृषि उत्पादन", "वन संरक्षण", "जल प्रबंधन"],
    "answer_en": "Agricultural Production",
    "answer_hi": "कृषि उत्पादन",
    "attempted": false
  },
  {
    "num": 33,
    "question_en": "Which mountain range separates India from Central Asia?",
    "question_hi": "कौन-सा पर्वत श्रृंखला भारत को मध्य एशिया से अलग करती है?",
    "options_en": ["Himalayas", "Hindukush", "Vindhyas", "Aravallis"],
    "options_hi": ["हिमालय", "हिंदूकुश", "विंध्य", "अरावली"],
    "answer_en": "Himalayas",
    "answer_hi": "हिमालय",
    "attempted": false
  },
  {
    "num": 34,
    "question_en": "The 'Rowlatt Act' was passed in which year?",
    "question_hi": "'रॉलेट एक्ट' किस वर्ष पारित किया गया था?",
    "options_en": ["1917", "1919", "1921", "1923"],
    "options_hi": ["1917", "1919", "1921", "1923"],
    "answer_en": "1919",
    "answer_hi": "1919",
    "attempted": false
  },
  {
    "num": 35,
    "question_en": "Which is the largest mangrove forest in the world?",
    "question_hi": "दुनिया का सबसे बड़ा मैंग्रोव वन कौन-सा है?",
    "options_en": ["Amazon", "Sundarbans", "Congo", "Daintree"],
    "options_hi": ["अमेज़न", "सुंदरबन", "कांगो", "डेंट्री"],
    "answer_en": "Sundarbans",
    "answer_hi": "सुंदरबन",
    "attempted": false
  },
  {
    "num": 36,
    "question_en": "The 'Cabinet Mission Plan' was sent to India in which year?",
    "question_hi": "'कैबिनेट मिशन योजना' भारत किस वर्ष भेजी गई थी?",
    "options_en": ["1942", "1945", "1946", "1947"],
    "options_hi": ["1942", "1945", "1946", "1947"],
    "answer_en": "1946",
    "answer_hi": "1946",
    "attempted": false
  },
  {
    "num": 37,
    "question_en": "Which is the largest lake in India?",
    "question_hi": "भारत की सबसे बड़ी झील कौन-सी है?",
    "options_en": ["Dal Lake", "Wular Lake", "Chilika Lake", "Sambhar Lake"],
    "options_hi": ["डल झील", "वुलर झील", "चिल्का झील", "सांभर झील"],
    "answer_en": "Wular Lake",
    "answer_hi": "वुलर झील",
    "attempted": false
  },
  {
    "num": 38,
    "question_en": "The 'Doctrine of Lapse' was introduced by:",
    "question_hi": "'हड़प नीति' किसने लागू की थी?",
    "options_en": ["Lord Dalhousie", "Lord Curzon", "Lord Mountbatten", "Lord Wellesley"],
    "options_hi": ["लॉर्ड डलहौजी", "लॉर्ड कर्जन", "लॉर्ड माउंटबेटन", "लॉर्ड वेलेजली"],
    "answer_en": "Lord Dalhousie",
    "answer_hi": "लॉर्ड डलहौजी",
    "attempted": false
  },
  {
    "num": 39,
    "question_en": "Which is the largest delta in the world?",
    "question_hi": "दुनिया का सबसे बड़ा डेल्टा कौन-सा है?",
    "options_en": ["Nile Delta", "Ganges-Brahmaputra Delta", "Mississippi Delta", "Amazon Delta"],
    "options_hi": ["नाइल डेल्टा", "गंगा-ब्रह्मपुत्र डेल्टा", "मिसिसिपी डेल्टा", "अमेज़न डेल्टा"],
    "answer_en": "Ganges-Brahmaputra Delta",
    "answer_hi": "गंगा-ब्रह्मपुत्र डेल्टा",
    "attempted": false
  },
  {
    "num": 40,
    "question_en": "The 'Drain of Wealth' theory was propounded by:",
    "question_hi": "'धन का निष्कासन' सिद्धांत किसने प्रतिपादित किया था?",
    "options_en": ["Dadabhai Naoroji", "Bal Gangadhar Tilak", "Gopal Krishna Gokhale", "Lala Lajpat Rai"],
    "options_hi": ["दादाभाई नौरोजी", "बाल गंगाधर तिलक", "गोपाल कृष्ण गोखले", "लाला लाजपत राय"],
    "answer_en": "Dadabhai Naoroji",
    "answer_hi": "दादाभाई नौरोजी",
    "attempted": false
  },
  {
    "num": 41,
    "question_en": "Which is the largest river island in the world?",
    "question_hi": "दुनिया का सबसे बड़ा नदी द्वीप कौन-सा है?",
    "options_en": ["Majuli", "Srirangam", "Umananda", "Diu"],
    "options_hi": ["माजुली", "श्रीरंगम", "उमानंद", "दीव"],
    "answer_en": "Majuli",
    "answer_hi": "माजुली",
    "attempted": false
  },
  {
    "num": 42,
    "question_en": "The 'Champaran Satyagraha' was related to:",
    "question_hi": "'चंपारण सत्याग्रह' किससे संबंधित था?",
    "options_en": ["Cotton farmers", "Indigo farmers", "Tea plantation workers", "Salt tax"],
    "options_hi": ["कपास किसान", "नील किसान", "चाय बागान मजदूर", "नमक कर"],
    "answer_en": "Indigo farmers",
    "answer_hi": "नील किसान",
    "attempted": false
  },
  {
    "num": 43,
    "question_en": "Which is the largest producer of sugarcane in India?",
    "question_hi": "भारत में गन्ने का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
    "options_en": ["Punjab", "Uttar Pradesh", "Maharashtra", "Karnataka"],
    "options_hi": ["पंजाब", "उत्तर प्रदेश", "महाराष्ट्र", "कर्नाटक"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false
  },
  {
    "num": 44,
    "question_en": "The 'Permanent Settlement' was introduced by:",
    "question_hi": "'स्थायी बंदोबस्त' किसने लागू किया था?",
    "options_en": ["Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie", "Lord Ripon"],
    "options_hi": ["लॉर्ड कॉर्नवालिस", "लॉर्ड वेलेजली", "लॉर्ड डलहौजी", "लॉर्ड रिपन"],
    "answer_en": "Lord Cornwallis",
    "answer_hi": "लॉर्ड कॉर्नवालिस",
    "attempted": false
  },
  {
    "num": 45,
    "question_en": "Which is the largest saltwater lake in India?",
    "question_hi": "भारत की सबसे बड़ी खारे पानी की झील कौन-सी है?",
    "options_en": ["Dal Lake", "Chilika Lake", "Sambhar Lake", "Pulicat Lake"],
    "options_hi": ["डल झील", "चिल्का झील", "सांभर झील", "पुलिकट झील"],
    "answer_en": "Chilika Lake",
    "answer_hi": "चिल्का झील",
    "attempted": false
  },
  {
    "num": 46,
    "question_en": "The 'Partition of Bengal' was annulled in which year?",
    "question_hi": "'बंगाल का विभाजन' किस वर्ष रद्द किया गया था?",
    "options_en": ["1905", "1911", "1919", "1947"],
    "options_hi": ["1905", "1911", "1919", "1947"],
    "answer_en": "1911",
    "answer_hi": "1911",
    "attempted": false
  },
  {
    "num": 47,
    "question_en": "Which is the largest coal-producing state in India?",
    "question_hi": "भारत में कोयले का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
    "options_en": ["Jharkhand", "Odisha", "Chhattisgarh", "West Bengal"],
    "options_hi": ["झारखंड", "ओडिशा", "छत्तीसगढ़", "पश्चिम बंगाल"],
    "answer_en": "Jharkhand",
    "answer_hi": "झारखंड",
    "attempted": false
  },
  {
    "num": 48,
    "question_en": "The 'Battle of Plassey' was fought in which year?",
    "question_hi": "'प्लासी का युद्ध' किस वर्ष लड़ा गया था?",
    "options_en": ["1757", "1764", "1857", "1947"],
    "options_hi": ["1757", "1764", "1857", "1947"],
    "answer_en": "1757",
    "answer_hi": "1757",
    "attempted": false
  },
  {
    "num": 49,
    "question_en": "Which is the largest producer of manganese in India?",
    "question_hi": "भारत में मैंगनीज का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
    "options_en": ["Odisha", "Karnataka", "Madhya Pradesh", "Maharashtra"],
    "options_hi": ["ओडिशा", "कर्नाटक", "मध्य प्रदेश", "महाराष्ट्र"],
    "answer_en": "Odisha",
    "answer_hi": "ओडिशा",
    "attempted": false
  },
  {
    "num": 50,
    "question_en": "The 'Montagu-Chelmsford Reforms' were introduced in which year?",
    "question_hi": "'मोंटेग्यू-चेम्सफोर्ड सुधार' किस वर्ष लागू किए गए थे?",
    "options_en": ["1909", "1919", "1935", "1947"],
    "options_hi": ["1909", "1919", "1935", "1947"],
    "answer_en": "1919",
    "answer_hi": "1919",
    "attempted": false
  }

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
                window.location.href = "/RTS/Public/Deshbord/category/test/submit-test.html";
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