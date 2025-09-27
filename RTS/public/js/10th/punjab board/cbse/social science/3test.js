
const questions = [
        
                {
                  "num": 1,
                  "question_en": "The 'Battle of Plassey' was fought in which year?",
                  "question_hi": "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
                  "options_en": ["1757", "1764", "1857", "1947"],
                  "options_hi": ["1757", "1764", "1857", "1947"],
                  "answer_en": "1757",
                  "answer_hi": "1757",
                  "attempted": false
                },
                {
                  "num": 2,
                  "question_en": "Which state is the largest producer of rubber in India?",
                  "question_hi": "भारत में रबर का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
                  "options_hi": ["केरल", "तमिल नाडु", "कर्नाटक", "आंध्र प्रदेश"],
                  "answer_en": "Kerala",
                  "answer_hi": "केरल",
                  "attempted": false
                },
                {
                  "num": 3,
                  "question_en": "The 'Right to Freedom of Religion' is under which Article?",
                  "question_hi": "'धर्म की स्वतंत्रता का अधिकार' किस अनुच्छेद के अंतर्गत आता है?",
                  "options_en": ["Article 19", "Article 25", "Article 32", "Article 14"],
                  "options_hi": ["अनुच्छेद 19", "अनुच्छेद 25", "अनुच्छेद 32", "अनुच्छेद 14"],
                  "answer_en": "Article 25",
                  "answer_hi": "अनुच्छेद 25",
                  "attempted": false
                },
                {
                  "num": 4,
                  "question_en": "Which is the primary source of credit for rural households in India?",
                  "question_hi": "भारत में ग्रामीण परिवारों के लिए ऋण का प्राथमिक स्रोत कौन सा है?",
                  "options_en": ["Commercial Banks", "Cooperative Societies", "Money Lenders", "Relatives"],
                  "options_hi": ["वाणिज्यिक बैंक", "सहकारी समितियाँ", "साहूकार", "रिश्तेदार"],
                  "answer_en": "Money Lenders",
                  "answer_hi": "साहूकार",
                  "attempted": false
                },
                {
                  "num": 5,
                  "question_en": "The 'Chauri Chaura incident' led to the withdrawal of which movement?",
                  "question_hi": "'चौरी चौरा घटना' के कारण किस आंदोलन को वापस लिया गया था?",
                  "options_en": ["Non-Cooperation", "Civil Disobedience", "Quit India", "Swadeshi"],
                  "options_hi": ["असहयोग", "सविनय अवज्ञा", "भारत छोड़ो", "स्वदेशी"],
                  "answer_en": "Non-Cooperation",
                  "answer_hi": "असहयोग",
                  "attempted": false
                },
                {
                  "num": 6,
                  "question_en": "Which soil type is most suitable for growing tea?",
                  "question_hi": "चाय की खेती के लिए कौन सी मिट्टी सबसे उपयुक्त है?",
                  "options_en": ["Alluvial", "Black", "Laterite", "Red"],
                  "options_hi": ["जलोढ़", "काली", "लेटराइट", "लाल"],
                  "answer_en": "Laterite",
                  "answer_hi": "लेटराइट",
                  "attempted": false
                },
                {
                  "num": 7,
                  "question_en": "The minimum number of members required to form a political party in India is:",
                  "question_hi": "भारत में एक राजनीतिक दल बनाने के लिए आवश्यक न्यूनतम सदस्य संख्या कितनी है?",
                  "options_en": ["100", "500", "1000", "No fixed number"],
                  "options_hi": ["100", "500", "1000", "कोई निश्चित संख्या नहीं"],
                  "answer_en": "No fixed number",
                  "answer_hi": "कोई निश्चित संख्या नहीं",
                  "attempted": false
                },
                {
                  "num": 8,
                  "question_en": "Which sector includes IT and communication services?",
                  "question_hi": "कौन सा क्षेत्र आईटी और संचार सेवाओं को शामिल करता है?",
                  "options_en": ["Primary", "Secondary", "Tertiary", "Quaternary"],
                  "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "चतुर्थ"],
                  "answer_en": "Tertiary",
                  "answer_hi": "तृतीयक",
                  "attempted": false
                },
                {
                  "num": 9,
                  "question_en": "The 'Drain of Wealth' theory was propounded by:",
                  "question_hi": "'धन का निष्कासन' सिद्धांत किसने प्रतिपादित किया था?",
                  "options_en": ["Dadabhai Naoroji", "R.C. Dutt", "Mahatma Gandhi", "Jawaharlal Nehru"],
                  "options_hi": ["दादाभाई नौरोजी", "आर.सी. दत्त", "महात्मा गांधी", "जवाहरलाल नेहरू"],
                  "answer_en": "Dadabhai Naoroji",
                  "answer_hi": "दादाभाई नौरोजी",
                  "attempted": false
                },
                {
                  "num": 10,
                  "question_en": "Which is the longest river in Peninsular India?",
                  "question_hi": "प्रायद्वीपीय भारत की सबसे लंबी नदी कौन सी है?",
                  "options_en": ["Godavari", "Krishna", "Narmada", "Mahanadi"],
                  "options_hi": ["गोदावरी", "कृष्णा", "नर्मदा", "महानदी"],
                  "answer_en": "Godavari",
                  "answer_hi": "गोदावरी",
                  "attempted": false
                },
                {
                  "num": 11,
                  "question_en": "The 'Question Hour' in Parliament begins at:",
                  "question_hi": "संसद में 'प्रश्नकाल' किस समय शुरू होता है?",
                  "options_en": ["8 AM", "11 AM", "2 PM", "4 PM"],
                  "options_hi": ["सुबह 8 बजे", "सुबह 11 बजे", "दोपहर 2 बजे", "शाम 4 बजे"],
                  "answer_en": "11 AM",
                  "answer_hi": "सुबह 11 बजे",
                  "attempted": false
                },
                {
                  "num": 12,
                  "question_en": "Which organization provides the 'Hallmark' on gold jewelry?",
                  "question_hi": "सोने के आभूषणों पर 'हॉलमार्क' कौन सा संगठन प्रदान करता है?",
                  "options_en": ["RBI", "BIS", "SEBI", "NABARD"],
                  "options_hi": ["आरबीआई", "बीआईएस", "सेबी", "नाबार्ड"],
                  "answer_en": "BIS",
                  "answer_hi": "बीआईएस",
                  "attempted": false
                },
                {
                  "num": 13,
                  "question_en": "The 'Permanent Settlement' was introduced by:",
                  "question_hi": "'स्थायी बंदोबस्त' किसने लागू किया था?",
                  "options_en": ["Lord Cornwallis", "Lord Dalhousie", "Lord Wellesley", "Lord Curzon"],
                  "options_hi": ["लॉर्ड कॉर्नवालिस", "लॉर्ड डलहौजी", "लॉर्ड वेलेजली", "लॉर्ड कर्जन"],
                  "answer_en": "Lord Cornwallis",
                  "answer_hi": "लॉर्ड कॉर्नवालिस",
                  "attempted": false
                },
                {
                  "num": 14,
                  "question_en": "Which state has the highest literacy rate in India?",
                  "question_hi": "भारत में सबसे अधिक साक्षरता दर किस राज्य की है?",
                  "options_en": ["Kerala", "Tamil Nadu", "Maharashtra", "Goa"],
                  "options_hi": ["केरल", "तमिल नाडु", "महाराष्ट्र", "गोवा"],
                  "answer_en": "Kerala",
                  "answer_hi": "केरल",
                  "attempted": false
                },
                {
                  "num": 15,
                  "question_en": "The 'National Development Council' is chaired by:",
                  "question_hi": "'राष्ट्रीय विकास परिषद' की अध्यक्षता कौन करता है?",
                  "options_en": ["President", "Prime Minister", "Finance Minister", "Planning Commission Head"],
                  "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "वित्त मंत्री", "योजना आयोग प्रमुख"],
                  "answer_en": "Prime Minister",
                  "answer_hi": "प्रधानमंत्री",
                  "attempted": false
                },
                {
                  "num": 16,
                  "question_en": "The 'Battle of Buxar' was fought in:",
                  "question_hi": "बक्सर का युद्ध किस वर्ष लड़ा गया था?",
                  "options_en": ["1764", "1757", "1857", "1947"],
                  "options_hi": ["1764", "1757", "1857", "1947"],
                  "answer_en": "1764",
                  "answer_hi": "1764",
                  "attempted": false
                },
                {
                  "num": 17,
                  "question_en": "Which is the largest solar power plant in India?",
                  "question_hi": "भारत का सबसे बड़ा सौर ऊर्जा संयंत्र कौन सा है?",
                  "options_en": ["Bhadla Solar Park", "Pavagada Solar Park", "Kamuthi Solar Plant", "Rewa Solar Plant"],
                  "options_hi": ["भाड़ला सोलर पार्क", "पावागड़ा सोलर पार्क", "कामुथी सोलर प्लांट", "रीवा सोलर प्लांट"],
                  "answer_en": "Bhadla Solar Park",
                  "answer_hi": "भाड़ला सोलर पार्क",
                  "attempted": false
                },
                {
                  "num": 18,
                  "question_en": "The 'Right Against Exploitation' prohibits:",
                  "question_hi": "'शोषण के विरुद्ध अधिकार' किसे प्रतिबंधित करता है?",
                  "options_en": ["Child labor", "Freedom of speech", "Right to property", "Religious conversion"],
                  "options_hi": ["बाल श्रम", "भाषण की स्वतंत्रता", "संपत्ति का अधिकार", "धर्म परिवर्तन"],
                  "answer_en": "Child labor",
                  "answer_hi": "बाल श्रम",
                  "attempted": false
                },
                {
                  "num": 19,
                  "question_en": "Which is the largest producer of manganese in India?",
                  "question_hi": "भारत में मैंगनीज का सबसे बड़ा उत्पादक कौन सा है?",
                  "options_en": ["Odisha", "Madhya Pradesh", "Maharashtra", "Karnataka"],
                  "options_hi": ["ओडिशा", "मध्य प्रदेश", "महाराष्ट्र", "कर्नाटक"],
                  "answer_en": "Odisha",
                  "answer_hi": "ओडिशा",
                  "attempted": false
                },
                {
                  "num": 20,
                  "question_en": "The 'Subsidiary Alliance' system was introduced by:",
                  "question_hi": "'सहायक संधि' प्रणाली किसने लागू की थी?",
                  "options_en": ["Lord Wellesley", "Lord Dalhousie", "Lord Cornwallis", "Lord Hastings"],
                  "options_hi": ["लॉर्ड वेलेजली", "लॉर्ड डलहौजी", "लॉर्ड कॉर्नवालिस", "लॉर्ड हेस्टिंग्स"],
                  "answer_en": "Lord Wellesley",
                  "answer_hi": "लॉर्ड वेलेजली",
                  "attempted": false
                },
                {
                  "num": 21,
                  "question_en": "Which is the largest jute-producing state in India?",
                  "question_hi": "भारत में जूट का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["West Bengal", "Bihar", "Assam", "Andhra Pradesh"],
                  "options_hi": ["पश्चिम बंगाल", "बिहार", "असम", "आंध्र प्रदेश"],
                  "answer_en": "West Bengal",
                  "answer_hi": "पश्चिम बंगाल",
                  "attempted": false
                },
                {
                  "num": 22,
                  "question_en": "The 'Directive Principles of State Policy' are inspired by:",
                  "question_hi": "'राज्य के नीति निर्देशक सिद्धांत' किससे प्रेरित हैं?",
                  "options_en": ["US Constitution", "British Constitution", "Irish Constitution", "French Constitution"],
                  "options_hi": ["अमेरिकी संविधान", "ब्रिटिश संविधान", "आयरिश संविधान", "फ्रांसीसी संविधान"],
                  "answer_en": "Irish Constitution",
                  "answer_hi": "आयरिश संविधान",
                  "attempted": false
                },
                {
                  "num": 23,
                  "question_en": "Which is the largest coal-producing state in India?",
                  "question_hi": "भारत में कोयला उत्पादन में सबसे बड़ा राज्य कौन सा है?",
                  "options_en": ["Jharkhand", "Odisha", "Chhattisgarh", "West Bengal"],
                  "options_hi": ["झारखंड", "ओडिशा", "छत्तीसगढ़", "पश्चिम बंगाल"],
                  "answer_en": "Jharkhand",
                  "answer_hi": "झारखंड",
                  "attempted": false
                },
                {
                  "num": 24,
                  "question_en": "The 'Doctrine of Lapse' was introduced by:",
                  "question_hi": "'व्यपगत सिद्धांत' किसने लागू किया था?",
                  "options_en": ["Lord Dalhousie", "Lord Wellesley", "Lord Cornwallis", "Lord Curzon"],
                  "options_hi": ["लॉर्ड डलहौजी", "लॉर्ड वेलेजली", "लॉर्ड कॉर्नवालिस", "लॉर्ड कर्जन"],
                  "answer_en": "Lord Dalhousie",
                  "answer_hi": "लॉर्ड डलहौजी",
                  "attempted": false
                },
                {
                  "num": 25,
                  "question_en": "Which is the largest producer of tea in India?",
                  "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
                  "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिल नाडु"],
                  "answer_en": "Assam",
                  "answer_hi": "असम",
                  "attempted": false
                },
                {
                  "num": 26,
                  "question_en": "The 'Residuary Powers' in the Indian Constitution are vested with:",
                  "question_hi": "भारतीय संविधान में 'अवशिष्ट शक्तियाँ' किसके पास निहित हैं?",
                  "options_en": ["State Governments", "Central Government", "Both Centre and States", "Local Governments"],
                  "options_hi": ["राज्य सरकारें", "केंद्र सरकार", "केंद्र और राज्य दोनों", "स्थानीय सरकारें"],
                  "answer_en": "Central Government",
                  "answer_hi": "केंद्र सरकार",
                  "attempted": false
                },
                {
                  "num": 27,
                  "question_en": "Which is the largest producer of sugarcane in India?",
                  "question_hi": "भारत में गन्ने का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Uttar Pradesh", "Maharashtra", "Karnataka", "Tamil Nadu"],
                  "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "कर्नाटक", "तमिल नाडु"],
                  "answer_en": "Uttar Pradesh",
                  "answer_hi": "उत्तर प्रदेश",
                  "attempted": false
                },
                {
                  "num": 28,
                  "question_en": "The 'Veto Power' in the UN Security Council is with:",
                  "question_hi": "संयुक्त राष्ट्र सुरक्षा परिषद में 'वीटो पावर' किसके पास है?",
                  "options_en": ["5 permanent members", "10 non-permanent members", "All members", "Secretary-General"],
                  "options_hi": ["5 स्थायी सदस्य", "10 अस्थायी सदस्य", "सभी सदस्य", "महासचिव"],
                  "answer_en": "5 permanent members",
                  "answer_hi": "5 स्थायी सदस्य",
                  "attempted": false
                },
                {
                  "num": 29,
                  "question_en": "Which is the largest producer of bauxite in India?",
                  "question_hi": "भारत में बॉक्साइट का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Odisha", "Jharkhand", "Gujarat", "Madhya Pradesh"],
                  "options_hi": ["ओडिशा", "झारखंड", "गुजरात", "मध्य प्रदेश"],
                  "answer_en": "Odisha",
                  "answer_hi": "ओडिशा",
                  "attempted": false
                },
                {
                  "num": 30,
                  "question_en": "The 'First Five-Year Plan' focused on:",
                  "question_hi": "'पहली पंचवर्षीय योजना' किस पर केंद्रित थी?",
                  "options_en": ["Industrialization", "Agriculture", "Education", "Defense"],
                  "options_hi": ["औद्योगीकरण", "कृषि", "शिक्षा", "रक्षा"],
                  "answer_en": "Agriculture",
                  "answer_hi": "कृषि",
                  "attempted": false
                },
                {
                  "num": 31,
                  "question_en": "Which is the largest producer of cotton in India?",
                  "question_hi": "भारत में कपास का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Gujarat", "Maharashtra", "Telangana", "Punjab"],
                  "options_hi": ["गुजरात", "महाराष्ट्र", "तेलंगाना", "पंजाब"],
                  "answer_en": "Gujarat",
                  "answer_hi": "गुजरात",
                  "attempted": false
                },
                {
                  "num": 32,
                  "question_en": "The 'Montagu-Chelmsford Reforms' introduced:",
                  "question_hi": "'मोंटेग्यू-चेम्सफोर्ड सुधार' ने क्या शुरू किया?",
                  "options_en": ["Dyarchy", "Federalism", "Republic", "Partition"],
                  "options_hi": ["द्वैध शासन", "संघवाद", "गणतंत्र", "विभाजन"],
                  "answer_en": "Dyarchy",
                  "answer_hi": "द्वैध शासन",
                  "attempted": false
                },
                {
                  "num": 33,
                  "question_en": "Which is the largest producer of spices in India?",
                  "question_hi": "भारत में मसालों का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
                  "options_hi": ["केरल", "कर्नाटक", "तमिल नाडु", "आंध्र प्रदेश"],
                  "answer_en": "Kerala",
                  "answer_hi": "केरल",
                  "attempted": false
                },
                {
                  "num": 34,
                  "question_en": "The 'Indian Councils Act of 1909' is also known as:",
                  "question_hi": "'भारतीय परिषद अधिनियम 1909' को किस नाम से भी जाना जाता है?",
                  "options_en": ["Morley-Minto Reforms", "Montagu-Chelmsford Reforms", "Government of India Act", "Indian Independence Act"],
                  "options_hi": ["मॉर्ले-मिंटो सुधार", "मोंटेग्यू-चेम्सफोर्ड सुधार", "भारत सरकार अधिनियम", "भारतीय स्वतंत्रता अधिनियम"],
                  "answer_en": "Morley-Minto Reforms",
                  "answer_hi": "मॉर्ले-मिंटो सुधार",
                  "attempted": false
                },
                {
                  "num": 35,
                  "question_en": "Which is the largest producer of silk in India?",
                  "question_hi": "भारत में रेशम का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Karnataka", "West Bengal", "Jammu & Kashmir", "Assam"],
                  "options_hi": ["कर्नाटक", "पश्चिम बंगाल", "जम्मू और कश्मीर", "असम"],
                  "answer_en": "Karnataka",
                  "answer_hi": "कर्नाटक",
                  "attempted": false
                },
                {
                  "num": 36,
                  "question_en": "The 'Rowlatt Act' allowed the British to:",
                  "question_hi": "'रॉलेट एक्ट' ने अंग्रेजों को क्या करने की अनुमति दी?",
                  "options_en": ["Arrest without trial", "Impose heavy taxes", "Ban political parties", "Control trade"],
                  "options_hi": ["बिना मुकदमे के गिरफ्तारी", "भारी कर लगाना", "राजनीतिक दलों पर प्रतिबंध", "व्यापार पर नियंत्रण"],
                  "answer_en": "Arrest without trial",
                  "answer_hi": "बिना मुकदमे के गिरफ्तारी",
                  "attempted": false
                },
                {
                  "num": 37,
                  "question_en": "Which is the largest producer of wheat in India?",
                  "question_hi": "भारत में गेहूँ का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Uttar Pradesh", "Punjab", "Haryana", "Madhya Pradesh"],
                  "options_hi": ["उत्तर प्रदेश", "पंजाब", "हरियाणा", "मध्य प्रदेश"],
                  "answer_en": "Uttar Pradesh",
                  "answer_hi": "उत्तर प्रदेश",
                  "attempted": false
                },
                {
                  "num": 38,
                  "question_en": "The 'Simon Commission' was boycotted because it had:",
                  "question_hi": "'साइमन कमीशन' का बहिष्कार क्यों किया गया था?",
                  "options_en": ["No Indian members", "Supported partition", "Ignored farmers", "Promoted violence"],
                  "options_hi": ["कोई भारतीय सदस्य नहीं", "विभाजन का समर्थन किया", "किसानों को नजरअंदाज किया", "हिंसा को बढ़ावा दिया"],
                  "answer_en": "No Indian members",
                  "answer_hi": "कोई भारतीय सदस्य नहीं",
                  "attempted": false
                },
                {
                  "num": 39,
                  "question_en": "Which is the largest producer of rice in India?",
                  "question_hi": "भारत में चावल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["West Bengal", "Punjab", "Uttar Pradesh", "Andhra Pradesh"],
                  "options_hi": ["पश्चिम बंगाल", "पंजाब", "उत्तर प्रदेश", "आंध्र प्रदेश"],
                  "answer_en": "West Bengal",
                  "answer_hi": "पश्चिम बंगाल",
                  "attempted": false
                },
                {
                  "num": 40,
                  "question_en": "The 'Government of India Act, 1935' introduced:",
                  "question_hi": "'भारत सरकार अधिनियम, 1935' ने क्या शुरू किया?",
                  "options_en": ["Provincial Autonomy", "Dyarchy", "Republic", "Partition"],
                  "options_hi": ["प्रांतीय स्वायत्तता", "द्वैध शासन", "गणतंत्र", "विभाजन"],
                  "answer_en": "Provincial Autonomy",
                  "answer_hi": "प्रांतीय स्वायत्तता",
                  "attempted": false
                },
                {
                  "num": 41,
                  "question_en": "Which is the largest producer of milk in India?",
                  "question_hi": "भारत में दूध का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Uttar Pradesh", "Rajasthan", "Gujarat", "Punjab"],
                  "options_hi": ["उत्तर प्रदेश", "राजस्थान", "गुजरात", "पंजाब"],
                  "answer_en": "Uttar Pradesh",
                  "answer_hi": "उत्तर प्रदेश",
                  "attempted": false
                },
                {
                  "num": 42,
                  "question_en": "The 'Quit India Movement' was launched in the year:",
                  "question_hi": "'भारत छोड़ो आंदोलन' किस वर्ष शुरू किया गया था?",
                  "options_en": ["1940", "1941", "1942", "1945"],
                  "options_hi": ["1940", "1941", "1942", "1945"],
                  "answer_en": "1942",
                  "answer_hi": "1942",
                  "attempted": false
                },
                {
                  "num": 43,
                  "question_en": "Which is the largest producer of groundnut in India?",
                  "question_hi": "भारत में मूंगफली का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Karnataka"],
                  "options_hi": ["गुजरात", "आंध्र प्रदेश", "तमिल नाडु", "कर्नाटक"],
                  "answer_en": "Gujarat",
                  "answer_hi": "गुजरात",
                  "attempted": false
                },
                {
                  "num": 44,
                  "question_en": "The 'Indian National Army' was founded by:",
                  "question_hi": "'आजाद हिंद फौज' की स्थापना किसने की थी?",
                  "options_en": ["Subhas Chandra Bose", "Bhagat Singh", "Chandrashekhar Azad", "Lala Lajpat Rai"],
                  "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "चंद्रशेखर आजाद", "लाला लाजपत राय"],
                  "answer_en": "Subhas Chandra Bose",
                  "answer_hi": "सुभाष चंद्र बोस",
                  "attempted": false
                },
                {
                  "num": 45,
                  "question_en": "Which is the largest producer of soyabean in India?",
                  "question_hi": "भारत में सोयाबीन का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Karnataka"],
                  "options_hi": ["मध्य प्रदेश", "महाराष्ट्र", "राजस्थान", "कर्नाटक"],
                  "answer_en": "Madhya Pradesh",
                  "answer_hi": "मध्य प्रदेश",
                  "attempted": false
                },
                {
                  "num": 46,
                  "question_en": "The 'Cabinet Mission Plan' was proposed in:",
                  "question_hi": "'कैबिनेट मिशन योजना' किस वर्ष प्रस्तावित की गई थी?",
                  "options_en": ["1942", "1945", "1946", "1947"],
                  "options_hi": ["1942", "1945", "1946", "1947"],
                  "answer_en": "1946",
                  "answer_hi": "1946",
                  "attempted": false
                },
                {
                  "num": 47,
                  "question_en": "Which is the largest producer of pulses in India?",
                  "question_hi": "भारत में दालों का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Madhya Pradesh", "Rajasthan", "Maharashtra", "Uttar Pradesh"],
                  "options_hi": ["मध्य प्रदेश", "राजस्थान", "महाराष्ट्र", "उत्तर प्रदेश"],
                  "answer_en": "Madhya Pradesh",
                  "answer_hi": "मध्य प्रदेश",
                  "attempted": false
                },
                {
                  "num": 48,
                  "question_en": "The 'Partition of Bengal' was annulled in:",
                  "question_hi": "'बंगाल का विभाजन' किस वर्ष रद्द किया गया था?",
                  "options_en": ["1905", "1911", "1947", "1950"],
                  "options_hi": ["1905", "1911", "1947", "1950"],
                  "answer_en": "1911",
                  "answer_hi": "1911",
                  "attempted": false
                },
                {
                  "num": 49,
                  "question_en": "Which is the largest producer of tobacco in India?",
                  "question_hi": "भारत में तंबाकू का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                  "options_en": ["Andhra Pradesh", "Gujarat", "Karnataka", "West Bengal"],
                  "options_hi": ["आंध्र प्रदेश", "गुजरात", "कर्नाटक", "पश्चिम बंगाल"],
                  "answer_en": "Andhra Pradesh",
                  "answer_hi": "आंध्र प्रदेश",
                  "attempted": false
                },
                {
                  "num": 50,
                  "question_en": "The 'Indian Constitution' came into effect on:",
                  "question_hi": "'भारतीय संविधान' किस तिथि को लागू हुआ था?",
                  "options_en": ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1949"],
                  "options_hi": ["15 अगस्त 1947", "26 जनवरी 1950", "26 नवंबर 1949", "2 अक्टूबर 1949"],
                  "answer_en": "26 January 1950",
                  "answer_hi": "26 जनवरी 1950",
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