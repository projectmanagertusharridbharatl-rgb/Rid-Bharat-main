
const questions = [

        {
                "num": 1,
                "question_en": "The 'First Battle of Panipat' was fought between:",
                "question_hi": "पहला पानीपत युद्ध किसके बीच लड़ा गया था?",
                "options_en": ["Babur and Ibrahim Lodi", "Akbar and Hemu", "Sher Shah and Humayun", "Aurangzeb and Shivaji"],
                "options_hi": ["बाबर और इब्राहिम लोदी", "अकबर और हेमू", "शेर शाह और हुमायूँ", "औरंगजेब और शिवाजी"],
                "answer_en": "Babur and Ibrahim Lodi",
                "answer_hi": "बाबर और इब्राहिम लोदी",
                "attempted": false
        },
        {
                "num": 2,
                "question_en": "Who wrote 'The Communist Manifesto'?",
                "question_hi": "'कम्युनिस्ट मेनिफेस्टो' किसने लिखा था?",
                "options_en": ["Karl Marx and Friedrich Engels", "Vladimir Lenin", "Mahatma Gandhi", "Adam Smith"],
                "options_hi": ["कार्ल मार्क्स और फ्रेडरिक एंगेल्स", "व्लादिमीर लेनिन", "महात्मा गांधी", "एडम स्मिथ"],
                "answer_en": "Karl Marx and Friedrich Engels",
                "answer_hi": "कार्ल मार्क्स और फ्रेडरिक एंगेल्स",
                "attempted": false
        },
        {
                "num": 3,
                "question_en": "Which is the most abundantly available fossil fuel in India?",
                "question_hi": "भारत में सबसे अधिक उपलब्ध जीवाश्म ईंधन कौन-सा है?",
                "options_en": ["Coal", "Petroleum", "Natural Gas", "Nuclear Energy"],
                "options_hi": ["कोयला", "पेट्रोलियम", "प्राकृतिक गैस", "परमाणु ऊर्जा"],
                "answer_en": "Coal",
                "answer_hi": "कोयला",
                "attempted": false
        },
        {
                "num": 4,
                "question_en": "Which sector contributes the most to India's GDP?",
                "question_hi": "भारत के सकल घरेलू उत्पाद (GDP) में कौन-सा क्षेत्र सबसे अधिक योगदान देता है?",
                "options_en": ["Primary", "Secondary", "Tertiary", "Quaternary"],
                "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "चतुर्थक"],
                "answer_en": "Tertiary",
                "answer_hi": "तृतीयक",
                "attempted": false
        },
        {
                "num": 5,
                "question_en": "Who was the leader of the Civil Disobedience Movement?",
                "question_hi": "सविनय अवज्ञा आंदोलन के नेता कौन थे?",
                "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
                "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
                "answer_en": "Mahatma Gandhi",
                "answer_hi": "महात्मा गांधी",
                "attempted": false
        },
        {
                "num": 6,
                "question_en": "Which state in India has the highest literacy rate?",
                "question_hi": "भारत में किस राज्य में साक्षरता दर सबसे अधिक है?",
                "options_en": ["Kerala", "Tamil Nadu", "Maharashtra", "Punjab"],
                "options_hi": ["केरल", "तमिलनाडु", "महाराष्ट्र", "पंजाब"],
                "answer_en": "Kerala",
                "answer_hi": "केरल",
                "attempted": false
        },
        {
                "num": 7,
                "question_en": "Which is the oldest printed book in the world?",
                "question_hi": "दुनिया की सबसे पुरानी मुद्रित पुस्तक कौन-सी है?",
                "options_en": ["Diamond Sutra", "Gutenberg Bible", "Mahabharata", "Ramayana"],
                "options_hi": ["डायमंड सूत्र", "गुटेनबर्ग बाइबिल", "महाभारत", "रामायण"],
                "answer_en": "Diamond Sutra",
                "answer_hi": "डायमंड सूत्र",
                "attempted": false
        },
        {
                "num": 8,
                "question_en": "Which river is known as the 'Sorrow of Bihar'?",
                "question_hi": "किस नदी को 'बिहार का शोक' कहा जाता है?",
                "options_en": ["Kosi", "Ganga", "Yamuna", "Brahmaputra"],
                "options_hi": ["कोसी", "गंगा", "यमुना", "ब्रह्मपुत्र"],
                "answer_en": "Kosi",
                "answer_hi": "कोसी",
                "attempted": false
        },
        {
                "num": 9,
                "question_en": "Who appoints the Chief Minister of a state?",
                "question_hi": "राज्य के मुख्यमंत्री की नियुक्ति कौन करता है?",
                "options_en": ["Governor", "President", "Prime Minister", "Chief Justice"],
                "options_hi": ["राज्यपाल", "राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश"],
                "answer_en": "Governor",
                "answer_hi": "राज्यपाल",
                "attempted": false
        },
        {
                "num": 10,
                "question_en": "Which organization regulates the credit system in India?",
                "question_hi": "भारत में क्रेडिट प्रणाली को कौन-सा संगठन नियंत्रित करता है?",
                "options_en": ["RBI (Reserve Bank of India)", "SEBI", "NABARD", "SBI"],
                "options_hi": ["आरबीआई (भारतीय रिजर्व बैंक)", "सेबी", "नाबार्ड", "एसबीआई"],
                "answer_en": "RBI (Reserve Bank of India)",
                "answer_hi": "आरबीआई (भारतीय रिजर्व बैंक)",
                "attempted": false
        },
        {
                "num": 11,
                "question_en": "Which country was ruled by the 'Jacobins' during the French Revolution?",
                "question_hi": "फ्रांसीसी क्रांति के दौरान 'जैकोबिन्स' द्वारा किस देश पर शासन किया गया था?",
                "options_en": ["France", "Britain", "Germany", "Russia"],
                "options_hi": ["फ्रांस", "ब्रिटेन", "जर्मनी", "रूस"],
                "answer_en": "France",
                "answer_hi": "फ्रांस",
                "attempted": false
        },
        {
                "num": 12,
                "question_en": "Which is the largest coffee-producing state in India?",
                "question_hi": "भारत में सबसे अधिक कॉफी का उत्पादन करने वाला राज्य कौन-सा है?",
                "options_en": ["Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh"],
                "options_hi": ["कर्नाटक", "केरल", "तमिलनाडु", "आंध्र प्रदेश"],
                "answer_en": "Karnataka",
                "answer_hi": "कर्नाटक",
                "attempted": false
        },
        {
                "num": 13,
                "question_en": "Who was the first woman President of India?",
                "question_hi": "भारत की पहली महिला राष्ट्रपति कौन थीं?",
                "options_en": ["Pratibha Patil", "Indira Gandhi", "Sarojini Naidu", "Sonia Gandhi"],
                "options_hi": ["प्रतिभा पाटिल", "इंदिरा गांधी", "सरोजिनी नायडू", "सोनिया गांधी"],
                "answer_en": "Pratibha Patil",
                "answer_hi": "प्रतिभा पाटिल",
                "attempted": false
        },
        {
                "num": 14,
                "question_en": "Which is the main source of irrigation in India?",
                "question_hi": "भारत में सिंचाई का मुख्य स्रोत क्या है?",
                "options_en": ["Canals", "Wells and Tubewells", "Tanks", "Rainwater Harvesting"],
                "options_hi": ["नहरें", "कुएँ और नलकूप", "तालाब", "वर्षा जल संचयन"],
                "answer_en": "Wells and Tubewells",
                "answer_hi": "कुएँ और नलकूप",
                "attempted": false
        },
        {
                "num": 15,
                "question_en": "Which act introduced the idea of 'Double Government' in India?",
                "question_hi": "किस अधिनियम ने भारत में 'द्वैध शासन' की व्यवस्था शुरू की?",
                "options_en": ["Government of India Act 1858", "Indian Councils Act 1861", "Government of India Act 1919", "Government of India Act 1935"],
                "options_hi": ["भारत सरकार अधिनियम 1858", "भारतीय परिषद अधिनियम 1861", "भारत सरकार अधिनियम 1919", "भारत सरकार अधिनियम 1935"],
                "answer_en": "Government of India Act 1919",
                "answer_hi": "भारत सरकार अधिनियम 1919",
                "attempted": false
        },
        // Add 35 more questions in the same format...

        {
                "num": 16,
                "question_en": "Which country was unified by Otto von Bismarck?",
                "question_hi": "ऑटो वॉन बिस्मार्क ने किस देश का एकीकरण किया था?",
                "options_en": ["Germany", "Italy", "France", "Britain"],
                "options_hi": ["जर्मनी", "इटली", "फ्रांस", "ब्रिटेन"],
                "answer_en": "Germany",
                "answer_hi": "जर्मनी",
                "attempted": false
        },
        {
                "num": 17,
                "question_en": "Which soil type is ideal for growing cotton?",
                "question_hi": "कपास की खेती के लिए किस प्रकार की मिट्टी आदर्श है?",
                "options_en": ["Black Soil", "Alluvial Soil", "Red Soil", "Laterite Soil"],
                "options_hi": ["काली मिट्टी", "जलोढ़ मिट्टी", "लाल मिट्टी", "लेटराइट मिट्टी"],
                "answer_en": "Black Soil",
                "answer_hi": "काली मिट्टी",
                "attempted": false
        },
        {
                "num": 18,
                "question_en": "Who was the founder of the Indian National Congress?",
                "question_hi": "भारतीय राष्ट्रीय कांग्रेस के संस्थापक कौन थे?",
                "options_en": ["A.O. Hume", "Dadabhai Naoroji", "W.C. Banerjee", "Mahatma Gandhi"],
                "options_hi": ["ए.ओ. ह्यूम", "दादाभाई नौरोजी", "डब्ल्यू.सी. बनर्जी", "महात्मा गांधी"],
                "answer_en": "A.O. Hume",
                "answer_hi": "ए.ओ. ह्यूम",
                "attempted": false
        },
        {
                "num": 19,
                "question_en": "Which is the largest solar park in India?",
                "question_hi": "भारत का सबसे बड़ा सोलर पार्क कौन-सा है?",
                "options_en": ["Bhadla Solar Park (Rajasthan)", "Pavagada Solar Park (Karnataka)", "Kamuthi Solar Plant (Tamil Nadu)", "Rewa Solar Plant (MP)"],
                "options_hi": ["भाड़ला सोलर पार्क (राजस्थान)", "पवनगड्डा सोलर पार्क (कर्नाटक)", "कामुथी सोलर प्लांट (तमिलनाडु)", "रीवा सोलर प्लांट (मध्य प्रदेश)"],
                "answer_en": "Bhadla Solar Park (Rajasthan)",
                "answer_hi": "भाड़ला सोलर पार्क (राजस्थान)",
                "attempted": false
        },
        {
                "num": 20,
                "question_en": "What is the main objective of the 'Right to Information Act'?",
                "question_hi": "सूचना का अधिकार अधिनियम' का मुख्य उद्देश्य क्या है?",
                "options_en": ["Transparency in government", "Free education", "Employment guarantee", "Healthcare for all"],
                "options_hi": ["सरकार में पारदर्शिता", "मुफ्त शिक्षा", "रोजगार गारंटी", "सभी के लिए स्वास्थ्य सेवा"],
                "answer_en": "Transparency in government",
                "answer_hi": "सरकार में पारदर्शिता",
                "attempted": false
        },
        {
                "num": 21,
                "question_en": "Which movement was started against the 'Rowlatt Act'?",
                "question_hi": "'रॉलेट एक्ट' के खिलाफ कौन-सा आंदोलन शुरू किया गया था?",
                "options_en": ["Non-Cooperation Movement", "Quit India Movement", "Rowlatt Satyagraha", "Civil Disobedience Movement"],
                "options_hi": ["असहयोग आंदोलन", "भारत छोड़ो आंदोलन", "रॉलेट सत्याग्रह", "सविनय अवज्ञा आंदोलन"],
                "answer_en": "Rowlatt Satyagraha",
                "answer_hi": "रॉलेट सत्याग्रह",
                "attempted": false
        },
        {
                "num": 22,
                "question_en": "Which state is the largest producer of jute in India?",
                "question_hi": "भारत में जूट का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
                "options_en": ["West Bengal", "Bihar", "Assam", "Odisha"],
                "options_hi": ["पश्चिम बंगाल", "बिहार", "असम", "ओडिशा"],
                "answer_en": "West Bengal",
                "answer_hi": "पश्चिम बंगाल",
                "attempted": false
        },
        {
                "num": 23,
                "question_en": "Who was the first Governor-General of independent India?",
                "question_hi": "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
                "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Rajendra Prasad"],
                "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
                "answer_en": "Lord Mountbatten",
                "answer_hi": "लॉर्ड माउंटबेटन",
                "attempted": false
        },
        {
                "num": 24,
                "question_en": "Which river is called the 'Dakshin Ganga'?",
                "question_hi": "किस नदी को 'दक्षिण की गंगा' कहा जाता है?",
                "options_en": ["Godavari", "Krishna", "Kaveri", "Mahanadi"],
                "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
                "answer_en": "Godavari",
                "answer_hi": "गोदावरी",
                "attempted": false
        },
        {
                "num": 25,
                "question_en": "What is the full form of 'MGNREGA'?",
                "question_hi": "'मनरेगा' का पूरा नाम क्या है?",
                "options_en": ["Mahatma Gandhi National Rural Employment Guarantee Act", "Ministry of Rural Employment Guarantee Act", "Mahatma Gandhi Rural Employment Act", "National Rural Employment Guarantee Act"],
                "options_hi": ["महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम", "ग्रामीण रोजगार गारंटी मंत्रालय अधिनियम", "महात्मा गांधी ग्रामीण रोजगार अधिनियम", "राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम"],
                "answer_en": "Mahatma Gandhi National Rural Employment Guarantee Act",
                "answer_hi": "महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम",
                "attempted": false
        },
        {
                "num": 26,
                "question_en": "Which battle marked the beginning of British rule in India?",
                "question_hi": "किस युद्ध ने भारत में ब्रिटिश शासन की शुरुआत को चिह्नित किया?",
                "options_en": ["Battle of Plassey (1757)", "Battle of Buxar (1764)", "Battle of Panipat (1761)", "Battle of Wandiwash (1760)"],
                "options_hi": ["प्लासी का युद्ध (1757)", "बक्सर का युद्ध (1764)", "पानीपत का युद्ध (1761)", "वांडीवाश का युद्ध (1760)"],
                "answer_en": "Battle of Plassey (1757)",
                "answer_hi": "प्लासी का युद्ध (1757)",
                "attempted": false
        },
        {
                "num": 27,
                "question_en": "Which is the largest mangrove forest in the world?",
                "question_hi": "दुनिया का सबसे बड़ा मैंग्रोव वन कौन-सा है?",
                "options_en": ["Sundarbans", "Amazon Rainforest", "Congo Basin", "Daintree Forest"],
                "options_hi": ["सुंदरबन", "अमेज़न वर्षावन", "कांगो बेसिन", "डेंट्री वन"],
                "answer_en": "Sundarbans",
                "answer_hi": "सुंदरबन",
                "attempted": false
        },
        {
                "num": 28,
                "question_en": "Who is known as the 'Father of Indian Economics'?",
                "question_hi": "'भारतीय अर्थशास्त्र के पिता' के रूप में किसे जाना जाता है?",
                "options_en": ["Dr. B.R. Ambedkar", "Dadabhai Naoroji", "Jawaharlal Nehru", "Dr. Manmohan Singh"],
                "options_hi": ["डॉ. बी.आर. अंबेडकर", "दादाभाई नौरोजी", "जवाहरलाल नेहरू", "डॉ. मनमोहन सिंह"],
                "answer_en": "Dadabhai Naoroji",
                "answer_hi": "दादाभाई नौरोजी",
                "attempted": false
        },
        {
                "num": 29,
                "question_en": "Which is the oldest stock exchange in Asia?",
                "question_hi": "एशिया का सबसे पुराना स्टॉक एक्सचेंज कौन-सा है?",
                "options_en": ["Bombay Stock Exchange (BSE)", "National Stock Exchange (NSE)", "Shanghai Stock Exchange", "Tokyo Stock Exchange"],
                "options_hi": ["बॉम्बे स्टॉक एक्सचेंज (BSE)", "नेशनल स्टॉक एक्सचेंज (NSE)", "शंघाई स्टॉक एक्सचेंज", "टोक्यो स्टॉक एक्सचेंज"],
                "answer_en": "Bombay Stock Exchange (BSE)",
                "answer_hi": "बॉम्बे स्टॉक एक्सचेंज (BSE)",
                "attempted": false
        },
        {
                "num": 30,
                "question_en": "Which country followed the 'Dual Monarchy' system?",
                "question_hi": "किस देश ने 'द्वैध राजतंत्र' प्रणाली को अपनाया था?",
                "options_en": ["Austria-Hungary", "France", "Russia", "Britain"],
                "options_hi": ["ऑस्ट्रिया-हंगरी", "फ्रांस", "रूस", "ब्रिटेन"],
                "answer_en": "Austria-Hungary",
                "answer_hi": "ऑस्ट्रिया-हंगरी",
                "attempted": false
        },
        // Add 20 more questions to complete 50...
        {
                "num": 31,
                "question_en": "Which is the largest coal-producing state in India?",
                "question_hi": "भारत का सबसे बड़ा कोयला उत्पादक राज्य कौन-सा है?",
                "options_en": ["Jharkhand", "Odisha", "Chhattisgarh", "West Bengal"],
                "options_hi": ["झारखंड", "ओडिशा", "छत्तीसगढ़", "पश्चिम बंगाल"],
                "answer_en": "Jharkhand",
                "answer_hi": "झारखंड",
                "attempted": false
        },
        {
                "num": 32,
                "question_en": "Which is NOT a function of the Reserve Bank of India (RBI)?",
                "question_hi": "भारतीय रिजर्व बैंक (RBI) का कार्य कौन-सा नहीं है?",
                "options_en": ["Issuing currency", "Regulating credit", "Fiscal policy", "Banker to the government"],
                "options_hi": ["मुद्रा जारी करना", "क्रेडिट नियंत्रित करना", "राजकोषीय नीति", "सरकार का बैंकर"],
                "answer_en": "Fiscal policy",
                "answer_hi": "राजकोषीय नीति",
                "attempted": false
        },
        {
                "num": 33,
                "question_en": "Which is the highest judicial body in India?",
                "question_hi": "भारत का सर्वोच्च न्यायिक निकाय कौन-सा है?",
                "options_en": ["High Court", "District Court", "Supreme Court", "Lok Adalat"],
                "options_hi": ["उच्च न्यायालय", "जिला न्यायालय", "सर्वोच्च न्यायालय", "लोक अदालत"],
                "answer_en": "Supreme Court",
                "answer_hi": "सर्वोच्च न्यायालय",
                "attempted": false
        },
        {
                "num": 34,
                "question_en": "The 'Quit India Movement' was launched in which year?",
                "question_hi": "'भारत छोड़ो आंदोलन' किस वर्ष शुरू किया गया था?",
                "options_en": ["1940", "1942", "1945", "1939"],
                "options_hi": ["1940", "1942", "1945", "1939"],
                "answer_en": "1942",
                "answer_hi": "1942",
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
                "question_en": "Which is NOT a feature of the 'Right to Equality'?",
                "question_hi": "'समानता का अधिकार' की विशेषता कौन-सी नहीं है?",
                "options_en": ["Abolition of untouchability", "Equal pay for equal work", "Reservation for SC/ST", "No discrimination based on religion"],
                "options_hi": ["अस्पृश्यता का उन्मूलन", "समान कार्य के लिए समान वेतन", "एससी/एसटी के लिए आरक्षण", "धर्म के आधार पर कोई भेदभाव नहीं"],
                "answer_en": "Reservation for SC/ST",
                "answer_hi": "एससी/एसटी के लिए आरक्षण",
                "attempted": false
        },
        {
                "num": 37,
                "question_en": "Which is the largest producer of sugarcane in India?",
                "question_hi": "भारत में गन्ने का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
                "options_en": ["Punjab", "Uttar Pradesh", "Maharashtra", "Karnataka"],
                "options_hi": ["पंजाब", "उत्तर प्रदेश", "महाराष्ट्र", "कर्नाटक"],
                "answer_en": "Uttar Pradesh",
                "answer_hi": "उत्तर प्रदेश",
                "attempted": false
        },
        {
                "num": 38,
                "question_en": "The 'Great Depression' occurred in which decade?",
                "question_hi": "'महामंदी' किस दशक में हुई?",
                "options_en": ["1910s", "1920s", "1930s", "1940s"],
                "options_hi": ["1910", "1920", "1930", "1940"],
                "answer_en": "1930s",
                "answer_hi": "1930",
                "attempted": false
        },
        {
                "num": 39,
                "question_en": "Which is NOT a type of political party system?",
                "question_hi": "राजनीतिक दलीय प्रणाली का प्रकार कौन-सा नहीं है?",
                "options_en": ["One-party", "Two-party", "Multi-party", "No-party"],
                "options_hi": ["एक-दलीय", "द्वि-दलीय", "बहु-दलीय", "दल-विहीन"],
                "answer_en": "No-party",
                "answer_hi": "दल-विहीन",
                "attempted": false
        },
        {
                "num": 40,
                "question_en": "Which is the largest solar park in India?",
                "question_hi": "भारत का सबसे बड़ा सोलर पार्क कौन-सा है?",
                "options_en": ["Bhadla", "Pavagada", "Kamuthi", "Rewa"],
                "options_hi": ["भाड़ला", "पवगड़ा", "कामुथी", "रीवा"],
                "answer_en": "Bhadla",
                "answer_hi": "भाड़ला",
                "attempted": false
        },
        {
                "num": 41,
                "question_en": "The 'Simon Commission' was boycotted because:",
                "question_hi": "'साइमन कमीशन' का बहिष्कार क्यों किया गया?",
                "options_en": ["It had no Indian member", "It supported British rule", "It opposed Gandhiji", "It was too slow"],
                "options_hi": ["इसमें कोई भारतीय सदस्य नहीं था", "इसने ब्रिटिश शासन का समर्थन किया", "इसने गांधीजी का विरोध किया", "यह बहुत धीमा था"],
                "answer_en": "It had no Indian member",
                "answer_hi": "इसमें कोई भारतीय सदस्य नहीं था",
                "attempted": false
        },
        {
                "num": 42,
                "question_en": "Which is the largest producer of tea in India?",
                "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
                "options_en": ["Kerala", "Tamil Nadu", "Assam", "Karnataka"],
                "options_hi": ["केरल", "तमिल नाडु", "असम", "कर्नाटक"],
                "answer_en": "Assam",
                "answer_hi": "असम",
                "attempted": false
        },
        {
                "num": 43,
                "question_en": "Which is NOT a feature of money?",
                "question_hi": "पैसे की विशेषता कौन-सी नहीं है?",
                "options_en": ["Portability", "Divisibility", "Inflammability", "Durability"],
                "options_hi": ["वहनीयता", "विभाज्यता", "ज्वलनशीलता", "टिकाऊपन"],
                "answer_en": "Inflammability",
                "answer_hi": "ज्वलनशीलता",
                "attempted": false
        },
        {
                "num": 44,
                "question_en": "Which is the largest democracy in the world?",
                "question_hi": "दुनिया का सबसे बड़ा लोकतंत्र कौन-सा है?",
                "options_en": ["USA", "India", "UK", "Canada"],
                "options_hi": ["अमेरिका", "भारत", "ब्रिटेन", "कनाडा"],
                "answer_en": "India",
                "answer_hi": "भारत",
                "attempted": false
        },
        {
                "num": 45,
                "question_en": "Which is the largest iron ore-producing state in India?",
                "question_hi": "भारत का सबसे बड़ा लौह अयस्क उत्पादक राज्य कौन-सा है?",
                "options_en": ["Jharkhand", "Odisha", "Chhattisgarh", "Karnataka"],
                "options_hi": ["झारखंड", "ओडिशा", "छत्तीसगढ़", "कर्नाटक"],
                "answer_en": "Odisha",
                "answer_hi": "ओडिशा",
                "attempted": false
        },
        {
                "num": 46,
                "question_en": "The 'First Battle of Panipat' was fought between:",
                "question_hi": "पहला पानीपत युद्ध किसके बीच लड़ा गया था?",
                "options_en": ["Babur and Ibrahim Lodi", "Akbar and Hemu", "Sher Shah and Humayun", "Aurangzeb and Shivaji"],
                "options_hi": ["बाबर और इब्राहिम लोदी", "अकबर और हेमू", "शेर शाह और हुमायूँ", "औरंगजेब और शिवाजी"],
                "answer_en": "Babur and Ibrahim Lodi",
                "answer_hi": "बाबर और इब्राहिम लोदी",
                "attempted": false
        },
        {
                "num": 47,
                "question_en": "Which is NOT a function of the Parliament?",
                "question_hi": "संसद का कार्य कौन-सा नहीं है?",
                "options_en": ["Law-making", "Controlling executive", "Judging cases", "Financial control"],
                "options_hi": ["कानून बनाना", "कार्यपालिका को नियंत्रित करना", "मामलों का निर्णय करना", "वित्तीय नियंत्रण"],
                "answer_en": "Judging cases",
                "answer_hi": "मामलों का निर्णय करना",
                "attempted": false
        },
        {
                "num": 48,
                "question_en": "Which is the largest producer of bauxite in India?",
                "question_hi": "भारत में बॉक्साइट का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
                "options_en": ["Jharkhand", "Odisha", "Gujarat", "Madhya Pradesh"],
                "options_hi": ["झारखंड", "ओडिशा", "गुजरात", "मध्य प्रदेश"],
                "answer_en": "Odisha",
                "answer_hi": "ओडिशा",
                "attempted": false
        },
        {
                "num": 49,
                "question_en": "The 'Dandi March' started from which place?",
                "question_hi": "'दांडी मार्च' किस स्थान से शुरू हुआ?",
                "options_en": ["Delhi", "Ahmedabad", "Sabarmati", "Mumbai"],
                "options_hi": ["दिल्ली", "अहमदाबाद", "साबरमती", "मुंबई"],
                "answer_en": "Sabarmati",
                "answer_hi": "साबरमती",
                "attempted": false
        },
        {
                "num": 50,
                "question_en": "Which is NOT a type of resource?",
                "question_hi": "संसाधन का प्रकार कौन-सा नहीं है?",
                "options_en": ["Natural", "Human-made", "Human", "Imaginary"],
                "options_hi": ["प्राकृतिक", "मानव निर्मित", "मानव", "काल्पनिक"],
                "answer_en": "Imaginary",
                "answer_hi": "काल्पनिक",
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