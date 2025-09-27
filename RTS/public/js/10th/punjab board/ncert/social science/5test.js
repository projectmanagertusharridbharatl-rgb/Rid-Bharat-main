const questions = [
        {
          "num": 1,
          "question_en": "Which of these is NOT a feature of Indian federalism?",
          "question_hi": "भारतीय संघवाद की कौन सी विशेषता नहीं है?",
          "options_en": ["Dual citizenship", "Three-tier government", "Independent judiciary", "Division of powers"],
          "options_hi": ["दोहरी नागरिकता", "तीन-स्तरीय सरकार", "स्वतंत्र न्यायपालिका", "शक्तियों का विभाजन"],
          "answer_en": "Dual citizenship",
          "answer_hi": "दोहरी नागरिकता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "The 'Right to Education Act' was implemented in:",
          "question_hi": "'शिक्षा का अधिकार अधिनियम' कब लागू हुआ?",
          "options_en": ["2002", "2005", "2009", "2010"],
          "options_hi": ["2002", "2005", "2009", "2010"],
          "answer_en": "2010",
          "answer_hi": "2010",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which sector is the largest employer in India?",
          "question_hi": "भारत में सबसे बड़ा रोजगार प्रदाता कौन सा क्षेत्र है?",
          "options_en": ["Primary", "Secondary", "Tertiary", "Quaternary"],
          "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "चतुर्थ"],
          "answer_en": "Primary",
          "answer_hi": "प्राथमिक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "The 'Chauri Chaura incident' led to the withdrawal of which movement?",
          "question_hi": "'चौरी चौरा घटना' ने किस आंदोलन की वापसी का कारण बनी?",
          "options_en": ["Non-Cooperation", "Civil Disobedience", "Quit India", "Swadeshi"],
          "options_hi": ["असहयोग", "सविनय अवज्ञा", "भारत छोड़ो", "स्वदेशी"],
          "answer_en": "Non-Cooperation",
          "answer_hi": "असहयोग",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which soil is most suitable for growing wheat?",
          "question_hi": "गेहूं की खेती के लिए कौन सी मिट्टी सबसे उपयुक्त है?",
          "options_en": ["Alluvial", "Black", "Red", "Laterite"],
          "options_hi": ["जलोढ़", "काली", "लाल", "लेटराइट"],
          "answer_en": "Alluvial",
          "answer_hi": "जलोढ़",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which is the highest peak in the Eastern Ghats?",
          "question_hi": "पूर्वी घाट की सबसे ऊँची चोटी कौन सी है?",
          "options_en": ["Anamudi", "Mahendragiri", "Dodabetta", "Kalsubai"],
          "options_hi": ["अनामुडी", "महेंद्रगिरि", "डोडाबेट्टा", "कालसुबाई"],
          "answer_en": "Mahendragiri",
          "answer_hi": "महेंद्रगिरि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Who founded the 'Hindustan Socialist Republican Association'?",
          "question_hi": "'हिंदुस्तान सोशलिस्ट रिपब्लिकन एसोसिएशन' की स्थापना किसने की?",
          "options_en": ["Bhagat Singh", "Chandrashekhar Azad", "Subhash Bose", "Lala Lajpat Rai"],
          "options_hi": ["भगत सिंह", "चंद्रशेखर आज़ाद", "सुभाष बोस", "लाला लाजपत राय"],
          "answer_en": "Chandrashekhar Azad",
          "answer_hi": "चंद्रशेखर आज़ाद",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which river is called 'Dakshin Ganga'?",
          "question_hi": "किस नदी को 'दक्षिण गंगा' कहा जाता है?",
          "options_en": ["Krishna", "Godavari", "Kaveri", "Tungabhadra"],
          "options_hi": ["कृष्णा", "गोदावरी", "कावेरी", "तुंगभद्रा"],
          "answer_en": "Godavari",
          "answer_hi": "गोदावरी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "The 'Poona Pact' was signed between:",
          "question_hi": "'पूना पैक्ट' किनके बीच हस्ताक्षरित हुआ?",
          "options_en": ["Gandhi-Ambedkar", "Gandhi-Jinnah", "Nehru-Patel", "Bose-Gandhi"],
          "options_hi": ["गांधी-अंबेडकर", "गांधी-जिन्ना", "नेहरू-पटेल", "बोस-गांधी"],
          "answer_en": "Gandhi-Ambedkar",
          "answer_hi": "गांधी-अंबेडकर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which state is the largest producer of rubber in India?",
          "question_hi": "भारत में रबर का सबसे बड़ा उत्पादक राज्य कौन सा है?",
          "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
          "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
          "answer_en": "Kerala",
          "answer_hi": "केरल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "The 'Tropic of Cancer' passes through how many Indian states?",
          "question_hi": "कर्क रेखा कितने भारतीय राज्यों से गुजरती है?",
          "options_en": ["6", "7", "8", "9"],
          "options_hi": ["6", "7", "8", "9"],
          "answer_en": "8",
          "answer_hi": "8",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which is the longest national highway in India?",
          "question_hi": "भारत का सबसे लंबा राष्ट्रीय राजमार्ग कौन सा है?",
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
          "question_hi": "भारत में मसालों का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत में आम का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
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
          "question_hi": "भारत में सोयाबीन का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत में मूंगफली का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "'प्लासी का युद्ध' किनके बीच लड़ा गया?",
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
          "question_hi": "भारत में रेशम का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत में प्याज का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत में आलू का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत में केले का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत में नारियल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "'पानीपत का पहला युद्ध' किनके बीच लड़ा गया?",
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
          "question_hi": "भारत में जूट का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत में गेहूं का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत में चावल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत में कपास का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत की सबसे बड़ी हीरे की खान कौन सी है?",
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
          "question_hi": "भारत में जूट का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
          "question_hi": "भारत में गेहूं का सबसे बड़ा उत्पादक राज्य कौन सा है?",
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
      ]
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