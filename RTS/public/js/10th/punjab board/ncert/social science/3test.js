const questions = [
        {
          "num": 1,
          "question_en": "Which is the southernmost point of India?",
          "question_hi": "भारत का सबसे दक्षिणी बिंदु कौन-सा है?",
          "options_en": ["Kanyakumari", "Indira Point", "Rameswaram", "Kochi"],
          "options_hi": ["कन्याकुमारी", "इंदिरा पॉइंट", "रामेश्वरम", "कोच्चि"],
          "answer_en": "Indira Point",
          "answer_hi": "इंदिरा पॉइंट",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "The 'Drain of Wealth' theory was propounded by:",
          "question_hi": "'धन का निष्कासन' सिद्धांत किसने प्रतिपादित किया?",
          "options_en": ["Dadabhai Naoroji", "Mahatma Gandhi", "Jawaharlal Nehru", "Bal Gangadhar Tilak"],
          "options_hi": ["दादाभाई नौरोजी", "महात्मा गांधी", "जवाहरलाल नेहरू", "बाल गंगाधर तिलक"],
          "answer_en": "Dadabhai Naoroji",
          "answer_hi": "दादाभाई नौरोजी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which river is also known as the 'Dakshin Ganga'?",
          "question_hi": "किस नदी को 'दक्षिण गंगा' भी कहा जाता है?",
          "options_en": ["Krishna", "Godavari", "Kaveri", "Tungabhadra"],
          "options_hi": ["कृष्णा", "गोदावरी", "कावेरी", "तुंगभद्रा"],
          "answer_en": "Godavari",
          "answer_hi": "गोदावरी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "The 'First War of Indian Independence' took place in:",
          "question_hi": "'भारत का प्रथम स्वतंत्रता संग्राम' कब हुआ?",
          "options_en": ["1857", "1942", "1920", "1919"],
          "options_hi": ["1857", "1942", "1920", "1919"],
          "answer_en": "1857",
          "answer_hi": "1857",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which state is the largest producer of rubber in India?",
          "question_hi": "भारत में रबर का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
          "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
          "answer_en": "Kerala",
          "answer_hi": "केरल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "The 'Pradhan Mantri Jan Dhan Yojana' aims to:",
          "question_hi": "'प्रधानमंत्री जन धन योजना' का उद्देश्य है:",
          "options_en": ["Provide housing", "Ensure bank accounts for all", "Give free education", "Distribute free food"],
          "options_hi": ["आवास प्रदान करना", "सभी को बैंक खाते सुनिश्चित करना", "मुफ्त शिक्षा देना", "मुफ्त भोजन वितरित करना"],
          "answer_en": "Ensure bank accounts for all",
          "answer_hi": "सभी को बैंक खाते सुनिश्चित करना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "The 'Bhakhra Nangal Dam' is built on which river?",
          "question_hi": "'भाखड़ा नंगल बांध' किस नदी पर बना है?",
          "options_en": ["Yamuna", "Chenab", "Sutlej", "Beas"],
          "options_hi": ["यमुना", "चेनाब", "सतलज", "ब्यास"],
          "answer_en": "Sutlej",
          "answer_hi": "सतलज",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Who was the first Governor-General of independent India?",
          "question_hi": "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
          "options_en": ["Jawaharlal Nehru", "Lord Mountbatten", "C. Rajagopalachari", "Rajendra Prasad"],
          "options_hi": ["जवाहरलाल नेहरू", "लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "राजेंद्र प्रसाद"],
          "answer_en": "Lord Mountbatten",
          "answer_hi": "लॉर्ड माउंटबेटन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which is the largest desert in the world?",
          "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन-सा है?",
          "options_en": ["Thar", "Sahara", "Gobi", "Kalahari"],
          "options_hi": ["थार", "सहारा", "गोबी", "कालाहारी"],
          "answer_en": "Sahara",
          "answer_hi": "सहारा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "The 'Tropic of Cancer' passes through how many Indian states?",
          "question_hi": "'कर्क रेखा' कितने भारतीय राज्यों से गुजरती है?",
          "options_en": ["6", "8", "7", "5"],
          "options_hi": ["6", "8", "7", "5"],
          "answer_en": "8",
          "answer_hi": "8",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "The 'Green Revolution' was primarily related to:",
          "question_hi": "'हरित क्रांति' मुख्य रूप से किससे संबंधित थी?",
          "options_en": ["Industrial growth", "Agricultural productivity", "Forest conservation", "Urban development"],
          "options_hi": ["औद्योगिक विकास", "कृषि उत्पादकता", "वन संरक्षण", "शहरी विकास"],
          "answer_en": "Agricultural productivity",
          "answer_hi": "कृषि उत्पादकता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which is the longest national highway in India?",
          "question_hi": "भारत का सबसे लंबा राष्ट्रीय राजमार्ग कौन-सा है?",
          "options_en": ["NH-44", "NH-27", "NH-19", "NH-48"],
          "options_hi": ["एनएच-44", "एनएच-27", "एनएच-19", "एनएच-48"],
          "answer_en": "NH-44",
          "answer_hi": "एनएच-44",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "The 'Vijayanagara Empire' was founded in:",
          "question_hi": "'विजयनगर साम्राज्य' की स्थापना कब हुई?",
          "options_en": ["1336", "1526", "1206", "1857"],
          "options_hi": ["1336", "1526", "1206", "1857"],
          "answer_en": "1336",
          "answer_hi": "1336",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which is the largest producer of spices in India?",
          "question_hi": "भारत में मसालों का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
          "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
          "answer_en": "Kerala",
          "answer_hi": "केरल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "The 'Indian Standard Time' is based on:",
          "question_hi": "'भारतीय मानक समय' किस पर आधारित है?",
          "options_en": ["82.5°E longitude", "23.5°N latitude", "Delhi time", "Greenwich Mean Time"],
          "options_hi": ["82.5°E देशांतर", "23.5°N अक्षांश", "दिल्ली का समय", "ग्रीनविच मीन टाइम"],
          "answer_en": "82.5°E longitude",
          "answer_hi": "82.5°E देशांतर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "The 'Battle of Buxar' was fought in:",
          "question_hi": "'बक्सर का युद्ध' कब लड़ा गया?",
          "options_en": ["1764", "1757", "1857", "1947"],
          "options_hi": ["1764", "1757", "1857", "1947"],
          "answer_en": "1764",
          "answer_hi": "1764",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which is the largest producer of mangoes in India?",
          "question_hi": "भारत में आम का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Uttar Pradesh", "Andhra Pradesh", "Maharashtra", "Karnataka"],
          "options_hi": ["उत्तर प्रदेश", "आंध्र प्रदेश", "महाराष्ट्र", "कर्नाटक"],
          "answer_en": "Uttar Pradesh",
          "answer_hi": "उत्तर प्रदेश",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "The 'Mughal Empire' was founded by:",
          "question_hi": "'मुगल साम्राज्य' की स्थापना किसने की?",
          "options_en": ["Akbar", "Babur", "Aurangzeb", "Shah Jahan"],
          "options_hi": ["अकबर", "बाबर", "औरंगजेब", "शाहजहाँ"],
          "answer_en": "Babur",
          "answer_hi": "बाबर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which is the largest freshwater lake in India?",
          "question_hi": "भारत की सबसे बड़ी मीठे पानी की झील कौन-सी है?",
          "options_en": ["Wular Lake", "Dal Lake", "Chilika Lake", "Sambhar Lake"],
          "options_hi": ["वुलर झील", "डल झील", "चिल्का झील", "सांभर झील"],
          "answer_en": "Wular Lake",
          "answer_hi": "वुलर झील",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "The 'Quit India Movement' was also known as:",
          "question_hi": "'भारत छोड़ो आंदोलन' को किस नाम से भी जाना जाता है?",
          "options_en": ["August Kranti", "Dandi March", "Non-Cooperation", "Swadeshi"],
          "options_hi": ["अगस्त क्रांति", "दांडी मार्च", "असहयोग", "स्वदेशी"],
          "answer_en": "August Kranti",
          "answer_hi": "अगस्त क्रांति",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Which is the largest producer of soyabean in India?",
          "question_hi": "भारत में सोयाबीन का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Punjab"],
          "options_hi": ["मध्य प्रदेश", "महाराष्ट्र", "राजस्थान", "पंजाब"],
          "answer_en": "Madhya Pradesh",
          "answer_hi": "मध्य प्रदेश",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "The 'Indian Constitution' was adopted on:",
          "question_hi": "'भारतीय संविधान' कब अपनाया गया?",
          "options_en": ["26 January 1950", "15 August 1947", "26 November 1949", "2 October 1952"],
          "options_hi": ["26 जनवरी 1950", "15 अगस्त 1947", "26 नवंबर 1949", "2 अक्टूबर 1952"],
          "answer_en": "26 November 1949",
          "answer_hi": "26 नवंबर 1949",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Which is the largest producer of groundnut in India?",
          "question_hi": "भारत में मूंगफली का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Karnataka"],
          "options_hi": ["गुजरात", "आंध्र प्रदेश", "तमिलनाडु", "कर्नाटक"],
          "answer_en": "Gujarat",
          "answer_hi": "गुजरात",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "The 'Battle of Plassey' was fought between:",
          "question_hi": "'प्लासी का युद्ध' किसके बीच लड़ा गया?",
          "options_en": ["British and French", "British and Siraj-ud-Daulah", "British and Tipu Sultan", "British and Marathas"],
          "options_hi": ["अंग्रेज और फ्रांसीसी", "अंग्रेज और सिराज-उद-दौला", "अंग्रेज और टीपू सुल्तान", "अंग्रेज और मराठा"],
          "answer_en": "British and Siraj-ud-Daulah",
          "answer_hi": "अंग्रेज और सिराज-उद-दौला",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "Which is the largest producer of silk in India?",
          "question_hi": "भारत में रेशम का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Karnataka", "West Bengal", "Jammu & Kashmir", "Assam"],
          "options_hi": ["कर्नाटक", "पश्चिम बंगाल", "जम्मू-कश्मीर", "असम"],
          "answer_en": "Karnataka",
          "answer_hi": "कर्नाटक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 26,
          "question_en": "The 'Poona Pact' was signed in:",
          "question_hi": "'पूना पैक्ट' कब हस्ताक्षरित हुआ?",
          "options_en": ["1932", "1942", "1920", "1919"],
          "options_hi": ["1932", "1942", "1920", "1919"],
          "answer_en": "1932",
          "answer_hi": "1932",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 27,
          "question_en": "Which is the largest producer of onions in India?",
          "question_hi": "भारत में प्याज का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Maharashtra", "Gujarat", "Karnataka", "Uttar Pradesh"],
          "options_hi": ["महाराष्ट्र", "गुजरात", "कर्नाटक", "उत्तर प्रदेश"],
          "answer_en": "Maharashtra",
          "answer_hi": "महाराष्ट्र",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 28,
          "question_en": "The 'Rowlatt Act' was passed in:",
          "question_hi": "'रॉलेट एक्ट' कब पारित हुआ?",
          "options_en": ["1919", "1920", "1930", "1942"],
          "options_hi": ["1919", "1920", "1930", "1942"],
          "answer_en": "1919",
          "answer_hi": "1919",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 29,
          "question_en": "Which is the largest producer of potatoes in India?",
          "question_hi": "भारत में आलू का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Uttar Pradesh", "West Bengal", "Punjab", "Bihar"],
          "options_hi": ["उत्तर प्रदेश", "पश्चिम बंगाल", "पंजाब", "बिहार"],
          "answer_en": "Uttar Pradesh",
          "answer_hi": "उत्तर प्रदेश",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 30,
          "question_en": "The 'Simon Commission' was boycotted because:",
          "question_hi": "'साइमन कमीशन' का बहिष्कार क्यों किया गया?",
          "options_en": ["It had no Indian members", "It supported British rule", "It was too slow", "It favored partition"],
          "options_hi": ["इसमें कोई भारतीय सदस्य नहीं थे", "इसने ब्रिटिश शासन का समर्थन किया", "यह बहुत धीमा था", "इसने विभाजन का समर्थन किया"],
          "answer_en": "It had no Indian members",
          "answer_hi": "इसमें कोई भारतीय सदस्य नहीं थे",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 31,
          "question_en": "Which is the largest producer of bananas in India?",
          "question_hi": "भारत में केले का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Tamil Nadu", "Maharashtra", "Gujarat", "Andhra Pradesh"],
          "options_hi": ["तमिलनाडु", "महाराष्ट्र", "गुजरात", "आंध्र प्रदेश"],
          "answer_en": "Tamil Nadu",
          "answer_hi": "तमिलनाडु",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 32,
          "question_en": "The 'Government of India Act, 1935' introduced:",
          "question_hi": "'भारत सरकार अधिनियम, 1935' ने क्या शुरू किया?",
          "options_en": ["Complete independence", "Provincial autonomy", "Partition of India", "Direct British rule"],
          "options_hi": ["पूर्ण स्वतंत्रता", "प्रांतीय स्वायत्तता", "भारत का विभाजन", "सीधा ब्रिटिश शासन"],
          "answer_en": "Provincial autonomy",
          "answer_hi": "प्रांतीय स्वायत्तता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 33,
          "question_en": "Which is the largest producer of coconuts in India?",
          "question_hi": "भारत में नारियल का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
          "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
          "answer_en": "Kerala",
          "answer_hi": "केरल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 34,
          "question_en": "The 'Indian National Army (INA)' was founded by:",
          "question_hi": "'आज़ाद हिंद फौज (INA)' की स्थापना किसने की?",
          "options_en": ["Subhash Chandra Bose", "Bhagat Singh", "Chandrashekhar Azad", "Mahatma Gandhi"],
          "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "चंद्रशेखर आज़ाद", "महात्मा गांधी"],
          "answer_en": "Subhash Chandra Bose",
          "answer_hi": "सुभाष चंद्र बोस",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 35,
          "question_en": "Which is the largest producer of tea in India?",
          "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
          "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
          "answer_en": "Assam",
          "answer_hi": "असम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 36,
          "question_en": "The 'First Battle of Panipat' was fought between:",
          "question_hi": "'पानीपत का पहला युद्ध' किसके बीच लड़ा गया?",
          "options_en": ["Babur and Ibrahim Lodi", "Akbar and Hemu", "Sher Shah and Humayun", "Aurangzeb and Shivaji"],
          "options_hi": ["बाबर और इब्राहिम लोदी", "अकबर और हेमू", "शेर शाह और हुमायूँ", "औरंगजेब और शिवाजी"],
          "answer_en": "Babur and Ibrahim Lodi",
          "answer_hi": "बाबर और इब्राहिम लोदी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 37,
          "question_en": "Which is the largest producer of jute in India?",
          "question_hi": "भारत में जूट का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["West Bengal", "Bihar", "Assam", "Odisha"],
          "options_hi": ["पश्चिम बंगाल", "बिहार", "असम", "ओडिशा"],
          "answer_en": "West Bengal",
          "answer_hi": "पश्चिम बंगाल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 38,
          "question_en": "The 'Swadeshi Movement' started after the partition of:",
          "question_hi": "'स्वदेशी आंदोलन' किसके विभाजन के बाद शुरू हुआ?",
          "options_en": ["Bengal", "Punjab", "Bombay", "Madras"],
          "options_hi": ["बंगाल", "पंजाब", "बॉम्बे", "मद्रास"],
          "answer_en": "Bengal",
          "answer_hi": "बंगाल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 39,
          "question_en": "Which is the largest producer of wheat in India?",
          "question_hi": "भारत में गेहूं का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Punjab", "Uttar Pradesh", "Haryana", "Madhya Pradesh"],
          "options_hi": ["पंजाब", "उत्तर प्रदेश", "हरियाणा", "मध्य प्रदेश"],
          "answer_en": "Uttar Pradesh",
          "answer_hi": "उत्तर प्रदेश",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 40,
          "question_en": "The 'Salt Satyagraha' started from:",
          "question_hi": "'नमक सत्याग्रह' कहाँ से शुरू हुआ?",
          "options_en": ["Delhi", "Ahmedabad", "Dandi", "Sabarmati"],
          "options_hi": ["दिल्ली", "अहमदाबाद", "दांडी", "साबरमती"],
          "answer_en": "Sabarmati",
          "answer_hi": "साबरमती",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 41,
          "question_en": "Which is the largest producer of rice in India?",
          "question_hi": "भारत में चावल का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Punjab", "West Bengal", "Uttar Pradesh", "Andhra Pradesh"],
          "options_hi": ["पंजाब", "पश्चिम बंगाल", "उत्तर प्रदेश", "आंध्र प्रदेश"],
          "answer_en": "West Bengal",
          "answer_hi": "पश्चिम बंगाल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 42,
          "question_en": "The 'Montagu-Chelmsford Reforms' were introduced in:",
          "question_hi": "'मोंटेग्यू-चेम्सफोर्ड सुधार' कब लागू किए गए?",
          "options_en": ["1909", "1919", "1935", "1947"],
          "options_hi": ["1909", "1919", "1935", "1947"],
          "answer_en": "1919",
          "answer_hi": "1919",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 43,
          "question_en": "Which is the largest producer of cotton in India?",
          "question_hi": "भारत में कपास का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Punjab", "Gujarat", "Maharashtra", "Haryana"],
          "options_hi": ["पंजाब", "गुजरात", "महाराष्ट्र", "हरियाणा"],
          "answer_en": "Gujarat",
          "answer_hi": "गुजरात",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 44,
          "question_en": "The 'Tebhaga Movement' was related to:",
          "question_hi": "'तेंभागा आंदोलन' किससे संबंधित था?",
          "options_en": ["Land reforms", "Labor rights", "Tribal rights", "Women's education"],
          "options_hi": ["भूमि सुधार", "श्रमिक अधिकार", "आदिवासी अधिकार", "महिला शिक्षा"],
          "answer_en": "Land reforms",
          "answer_hi": "भूमि सुधार",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 45,
          "question_en": "Which is the largest diamond mine in India?",
          "question_hi": "भारत की सबसे बड़ी हीरे की खान कौन-सी है?",
          "options_en": ["Panna", "Golconda", "Kollur", "Majhgawan"],
          "options_hi": ["पन्ना", "गोलकोंडा", "कोल्लूर", "मझगवां"],
          "answer_en": "Panna",
          "answer_hi": "पन्ना",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 46,
          "question_en": "The 'Khilafat Movement' was launched to support:",
          "question_hi": "'खिलाफत आंदोलन' किसके समर्थन में शुरू किया गया था?",
          "options_en": ["British rule", "Ottoman Caliphate", "Indian independence", "Hindu-Muslim unity"],
          "options_hi": ["ब्रिटिश शासन", "ऑटोमन खिलाफत", "भारतीय स्वतंत्रता", "हिंदू-मुस्लिम एकता"],
          "answer_en": "Ottoman Caliphate",
          "answer_hi": "ऑटोमन खिलाफत",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 47,
          "question_en": "Which is the largest producer of jute in India?",
          "question_hi": "भारत में जूट का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["West Bengal", "Bihar", "Assam", "Odisha"],
          "options_hi": ["पश्चिम बंगाल", "बिहार", "असम", "ओडिशा"],
          "answer_en": "West Bengal",
          "answer_hi": "पश्चिम बंगाल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 48,
          "question_en": "The 'Swadeshi Movement' started after the partition of:",
          "question_hi": "'स्वदेशी आंदोलन' किसके विभाजन के बाद शुरू हुआ?",
          "options_en": ["Bengal", "Punjab", "Bombay", "Madras"],
          "options_hi": ["बंगाल", "पंजाब", "बॉम्बे", "मद्रास"],
          "answer_en": "Bengal",
          "answer_hi": "बंगाल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 49,
          "question_en": "Which is the largest producer of wheat in India?",
          "question_hi": "भारत में गेहूं का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Punjab", "Uttar Pradesh", "Haryana", "Madhya Pradesh"],
          "options_hi": ["पंजाब", "उत्तर प्रदेश", "हरियाणा", "मध्य प्रदेश"],
          "answer_en": "Uttar Pradesh",
          "answer_hi": "उत्तर प्रदेश",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 50,
          "question_en": "The 'Salt Satyagraha' started from:",
          "question_hi": "'नमक सत्याग्रह' कहाँ से शुरू हुआ?",
          "options_en": ["Delhi", "Ahmedabad", "Dandi", "Sabarmati"],
          "options_hi": ["दिल्ली", "अहमदाबाद", "दांडी", "साबरमती"],
          "answer_en": "Sabarmati",
          "answer_hi": "साबरमती",
          "attempted": false,
          "selected": ""
        }
      ];

   
let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes

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
