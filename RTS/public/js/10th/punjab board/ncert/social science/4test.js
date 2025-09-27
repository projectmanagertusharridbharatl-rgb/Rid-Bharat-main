const questions = [
        {
          "num": 1,
          "question_en": "Which of the following is NOT a feature of federalism?",
          "question_hi": "निम्नलिखित में से कौन सी संघवाद की विशेषता नहीं है?",
          "options_en": ["Two or more levels of government", "Independent judiciary", "Single citizenship", "Written constitution"],
          "options_hi": ["सरकार के दो या अधिक स्तर", "स्वतंत्र न्यायपालिका", "एकल नागरिकता", "लिखित संविधान"],
          "answer_en": "Single citizenship",
          "answer_hi": "एकल नागरिकता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "The 'Right to Information Act' was passed in:",
          "question_hi": "'सूचना का अधिकार अधिनियम' किस वर्ष पारित हुआ?",
          "options_en": ["2002", "2005", "2010", "1995"],
          "options_hi": ["2002", "2005", "2010", "1995"],
          "answer_en": "2005",
          "answer_hi": "2005",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which sector contributes the most to India's GDP?",
          "question_hi": "भारत के सकल घरेलू उत्पाद (GDP) में सबसे अधिक योगदान किस क्षेत्र का है?",
          "options_en": ["Primary", "Secondary", "Tertiary", "Quaternary"],
          "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "चतुर्थ"],
          "answer_en": "Tertiary",
          "answer_hi": "तृतीयक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "The 'Dandi March' was associated with which movement?",
          "question_hi": "'दांडी मार्च' किस आंदोलन से जुड़ा था?",
          "options_en": ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
          "options_hi": ["असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "भारत छोड़ो आंदोलन", "स्वदेशी आंदोलन"],
          "answer_en": "Civil Disobedience Movement",
          "answer_hi": "सविनय अवज्ञा आंदोलन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which soil type is ideal for cotton cultivation?",
          "question_hi": "कपास की खेती के लिए कौन-सी मिट्टी आदर्श है?",
          "options_en": ["Alluvial Soil", "Black Soil", "Red Soil", "Laterite Soil"],
          "options_hi": ["जलोढ़ मिट्टी", "काली मिट्टी", "लाल मिट्टी", "लेटराइट मिट्टी"],
          "answer_en": "Black Soil",
          "answer_hi": "काली मिट्टी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which is the highest peak in the Western Ghats?",
          "question_hi": "पश्चिमी घाट की सबसे ऊँची चोटी कौन-सी है?",
          "options_en": ["Anamudi", "Kanchenjunga", "Nanda Devi", "Mount Everest"],
          "options_hi": ["अनामुडी", "कंचनजंगा", "नंदा देवी", "माउंट एवरेस्ट"],
          "answer_en": "Anamudi",
          "answer_hi": "अनामुडी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Who was the founder of the Indian National Congress?",
          "question_hi": "भारतीय राष्ट्रीय कांग्रेस के संस्थापक कौन थे?",
          "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "A.O. Hume", "Bal Gangadhar Tilak"],
          "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "ए.ओ. ह्यूम", "बाल गंगाधर तिलक"],
          "answer_en": "A.O. Hume",
          "answer_hi": "ए.ओ. ह्यूम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which river is known as the 'Sorrow of Bihar'?",
          "question_hi": "किस नदी को 'बिहार का शोक' कहा जाता है?",
          "options_en": ["Ganga", "Yamuna", "Kosi", "Brahmaputra"],
          "options_hi": ["गंगा", "यमुना", "कोसी", "ब्रह्मपुत्र"],
          "answer_en": "Kosi",
          "answer_hi": "कोसी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "The 'Champaran Satyagraha' was related to:",
          "question_hi": "'चंपारण सत्याग्रह' किससे संबंधित था?",
          "options_en": ["Cotton farmers", "Indigo farmers", "Tea plantation workers", "Salt tax"],
          "options_hi": ["कपास किसान", "नील किसान", "चाय बागान मजदूर", "नमक कर"],
          "answer_en": "Indigo farmers",
          "answer_hi": "नील किसान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which is the largest coffee-producing state in India?",
          "question_hi": "भारत में सबसे अधिक कॉफी का उत्पादन करने वाला राज्य कौन-सा है?",
          "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
          "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
          "answer_en": "Karnataka",
          "answer_hi": "कर्नाटक",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which is the longest river in India?",
          "question_hi": "भारत की सबसे लंबी नदी कौन-सी है?",
          "options_en": ["Yamuna", "Godavari", "Ganga", "Brahmaputra"],
          "options_hi": ["यमुना", "गोदावरी", "गंगा", "ब्रह्मपुत्र"],
          "answer_en": "Ganga",
          "answer_hi": "गंगा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Who is known as the 'Father of the Indian Constitution'?",
          "question_hi": "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
          "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
          "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
          "answer_en": "B.R. Ambedkar",
          "answer_hi": "बी.आर. अंबेडकर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which state is the largest producer of iron ore in India?",
          "question_hi": "भारत में लौह अयस्क का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Jharkhand", "Odisha", "Chhattisgarh", "Karnataka"],
          "options_hi": ["झारखंड", "ओडिशा", "छत्तीसगढ़", "कर्नाटक"],
          "answer_en": "Odisha",
          "answer_hi": "ओडिशा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "The 'Green Revolution' in India was mainly focused on:",
          "question_hi": "भारत में 'हरित क्रांति' मुख्य रूप से किस पर केंद्रित थी?",
          "options_en": ["Industrial growth", "Agricultural productivity", "Forest conservation", "Urban development"],
          "options_hi": ["औद्योगिक विकास", "कृषि उत्पादकता", "वन संरक्षण", "शहरी विकास"],
          "answer_en": "Agricultural productivity",
          "answer_hi": "कृषि उत्पादकता",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which is the oldest mountain range in India?",
          "question_hi": "भारत की सबसे पुरानी पर्वत श्रृंखला कौन-सी है?",
          "options_en": ["Himalayas", "Aravalli", "Western Ghats", "Eastern Ghats"],
          "options_hi": ["हिमालय", "अरावली", "पश्चिमी घाट", "पूर्वी घाट"],
          "answer_en": "Aravalli",
          "answer_hi": "अरावली",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "The Indian Constitution came into effect on:",
          "question_hi": "भारतीय संविधान कब लागू हुआ?",
          "options_en": ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1952"],
          "options_hi": ["15 अगस्त 1947", "26 जनवरी 1950", "26 नवंबर 1949", "2 अक्टूबर 1952"],
          "answer_en": "26 January 1950",
          "answer_hi": "26 जनवरी 1950",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which is the largest mangrove forest in the world?",
          "question_hi": "दुनिया का सबसे बड़ा मैंग्रोव वन कौन-सा है?",
          "options_en": ["Amazon Rainforest", "Sundarbans", "Congo Basin", "Western Ghats"],
          "options_hi": ["अमेज़न वर्षावन", "सुंदरबन", "कांगो बेसिन", "पश्चिमी घाट"],
          "answer_en": "Sundarbans",
          "answer_hi": "सुंदरबन",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Who appoints the Chief Minister of a state?",
          "question_hi": "राज्य के मुख्यमंत्री की नियुक्ति कौन करता है?",
          "options_en": ["President", "Prime Minister", "Governor", "Chief Justice"],
          "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "राज्यपाल", "मुख्य न्यायाधीश"],
          "answer_en": "Governor",
          "answer_hi": "राज्यपाल",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which is the largest desert in India?",
          "question_hi": "भारत का सबसे बड़ा रेगिस्तान कौन-सा है?",
          "options_en": ["Thar Desert", "Kutch Desert", "Ladakh Desert", "Deccan Desert"],
          "options_hi": ["थार रेगिस्तान", "कच्छ रेगिस्तान", "लद्दाख रेगिस्तान", "दक्कन रेगिस्तान"],
          "answer_en": "Thar Desert",
          "answer_hi": "थार रेगिस्तान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "The 'Quit India Movement' was launched in:",
          "question_hi": "'भारत छोड़ो आंदोलन' कब शुरू किया गया था?",
          "options_en": ["1942", "1930", "1920", "1947"],
          "options_hi": ["1942", "1930", "1920", "1947"],
          "answer_en": "1942",
          "answer_hi": "1942",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Which is the largest state in India by area?",
          "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन-सा है?",
          "options_en": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
          "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
          "answer_en": "Rajasthan",
          "answer_hi": "राजस्थान",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "The 'Reserve Bank of India' was established in:",
          "question_hi": "'भारतीय रिजर्व बैंक' की स्थापना कब हुई थी?",
          "options_en": ["1935", "1947", "1951", "1921"],
          "options_hi": ["1935", "1947", "1951", "1921"],
          "answer_en": "1935",
          "answer_hi": "1935",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Which is the smallest state in India by area?",
          "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन-सा है?",
          "options_en": ["Goa", "Sikkim", "Tripura", "Mizoram"],
          "options_hi": ["गोवा", "सिक्किम", "त्रिपुरा", "मिजोरम"],
          "answer_en": "Goa",
          "answer_hi": "गोवा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "The 'Jallianwala Bagh Massacre' took place in which year?",
          "question_hi": "'जलियांवाला बाग हत्याकांड' किस वर्ष हुआ था?",
          "options_en": ["1919", "1921", "1930", "1942"],
          "options_hi": ["1919", "1921", "1930", "1942"],
          "answer_en": "1919",
          "answer_hi": "1919",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "Which is the national currency of India?",
          "question_hi": "भारत की राष्ट्रीय मुद्रा कौन-सी है?",
          "options_en": ["Dollar", "Rupee", "Yen", "Euro"],
          "options_hi": ["डॉलर", "रुपया", "येन", "यूरो"],
          "answer_en": "Rupee",
          "answer_hi": "रुपया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 26,
          "question_en": "The 'Non-Cooperation Movement' was launched in:",
          "question_hi": "'असहयोग आंदोलन' कब शुरू किया गया था?",
          "options_en": ["1920", "1930", "1942", "1919"],
          "options_hi": ["1920", "1930", "1942", "1919"],
          "answer_en": "1920",
          "answer_hi": "1920",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 27,
          "question_en": "Which is the largest river island in the world?",
          "question_hi": "दुनिया का सबसे बड़ा नदी द्वीप कौन-सा है?",
          "options_en": ["Majuli", "Srirangam", "Diu", "Andaman"],
          "options_hi": ["माजुली", "श्रीरंगम", "दीव", "अंडमान"],
          "answer_en": "Majuli",
          "answer_hi": "माजुली",
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
          "question_en": "Which is the largest lake in India?",
          "question_hi": "भारत की सबसे बड़ी झील कौन-सी है?",
          "options_en": ["Dal Lake", "Wular Lake", "Chilika Lake", "Sambhar Lake"],
          "options_hi": ["डल झील", "वुलर झील", "चिल्का झील", "सांभर झील"],
          "answer_en": "Wular Lake",
          "answer_hi": "वुलर झील",
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
          "question_en": "Which is the largest delta in the world?",
          "question_hi": "दुनिया का सबसे बड़ा डेल्टा कौन-सा है?",
          "options_en": ["Ganges-Brahmaputra Delta", "Nile Delta", "Amazon Delta", "Mississippi Delta"],
          "options_hi": ["गंगा-ब्रह्मपुत्र डेल्टा", "नाइल डेल्टा", "अमेज़न डेल्टा", "मिसिसिपी डेल्टा"],
          "answer_en": "Ganges-Brahmaputra Delta",
          "answer_hi": "गंगा-ब्रह्मपुत्र डेल्टा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 32,
          "question_en": "The 'Poona Pact' was signed between:",
          "question_hi": "'पूना पैक्ट' किसके बीच हस्ताक्षरित हुआ?",
          "options_en": ["Gandhi and Jinnah", "Gandhi and Ambedkar", "Nehru and Patel", "Bose and Gandhi"],
          "options_hi": ["गांधी और जिन्ना", "गांधी और अंबेडकर", "नेहरू और पटेल", "बोस और गांधी"],
          "answer_en": "Gandhi and Ambedkar",
          "answer_hi": "गांधी और अंबेडकर",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 33,
          "question_en": "Which is the largest producer of sugarcane in India?",
          "question_hi": "भारत में गन्ने का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Punjab", "Uttar Pradesh", "Maharashtra", "Karnataka"],
          "options_hi": ["पंजाब", "उत्तर प्रदेश", "महाराष्ट्र", "कर्नाटक"],
          "answer_en": "Uttar Pradesh",
          "answer_hi": "उत्तर प्रदेश",
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
          "question_en": "Which is the largest coal-producing state in India?",
          "question_hi": "भारत में कोयले का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Jharkhand", "Odisha", "Chhattisgarh", "West Bengal"],
          "options_hi": ["झारखंड", "ओडिशा", "छत्तीसगढ़", "पश्चिम बंगाल"],
          "answer_en": "Jharkhand",
          "answer_hi": "झारखंड",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 36,
          "question_en": "The 'First Battle of Panipat' was fought in:",
          "question_hi": "'पानीपत का पहला युद्ध' कब लड़ा गया?",
          "options_en": ["1526", "1556", "1761", "1857"],
          "options_hi": ["1526", "1556", "1761", "1857"],
          "answer_en": "1526",
          "answer_hi": "1526",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 37,
          "question_en": "Which is the largest tea-producing state in India?",
          "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
          "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
          "answer_en": "Assam",
          "answer_hi": "असम",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 38,
          "question_en": "The 'Battle of Plassey' was fought in:",
          "question_hi": "'प्लासी का युद्ध' कब लड़ा गया?",
          "options_en": ["1757", "1764", "1857", "1947"],
          "options_hi": ["1757", "1764", "1857", "1947"],
          "answer_en": "1757",
          "answer_hi": "1757",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 39,
          "question_en": "Which is the largest producer of bauxite in India?",
          "question_hi": "भारत में बॉक्साइट का सबसे बड़ा उत्पादक राज्य कौन-सा है?",
          "options_en": ["Jharkhand", "Odisha", "Gujarat", "Madhya Pradesh"],
          "options_hi": ["झारखंड", "ओडिशा", "गुजरात", "मध्य प्रदेश"],
          "answer_en": "Odisha",
          "answer_hi": "ओडिशा",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 40,
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
          "num": 41,
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
          "num": 42,
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
          "num": 43,
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
          "num": 44,
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
          "num": 45,
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
          "num": 46,
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
          "num": 47,
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
          "num": 48,
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
          "num": 49,
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
          "num": 50,
          "question_en": "The 'Government of India Act, 1935' introduced:",
          "question_hi": "'भारत सरकार अधिनियम, 1935' ने क्या शुरू किया?",
          "options_en": ["Complete independence", "Provincial autonomy", "Partition of India", "Direct British rule"],
          "options_hi": ["पूर्ण स्वतंत्रता", "प्रांतीय स्वायत्तता", "भारत का विभाजन", "सीधा ब्रिटिश शासन"],
          "answer_en": "Provincial autonomy",
          "answer_hi": "प्रांतीय स्वायत्तता",
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