
const questions = [
        
                {
                  "num": 1,
                  "question_en": "Who was the leader of the Bolshevik Revolution in Russia?",
                  "question_hi": "रूस में बोल्शेविक क्रांति का नेता कौन था?",
                  "options_en": ["Vladimir Lenin", "Joseph Stalin", "Karl Marx", "Leon Trotsky"],
                  "options_hi": ["व्लादिमीर लेनिन", "जोसेफ स्टालिन", "कार्ल मार्क्स", "लियोन ट्रोट्स्की"],
                  "answer_en": "Vladimir Lenin",
                  "answer_hi": "व्लादिमीर लेनिन",
                  "attempted": false
                },
                {
                  "num": 2,
                  "question_en": "Which is the most abundantly available fossil fuel in India?",
                  "question_hi": "भारत में सबसे अधिक उपलब्ध जीवाश्म ईंधन कौन सा है?",
                  "options_en": ["Petroleum", "Natural Gas", "Coal", "Lignite"],
                  "options_hi": ["पेट्रोलियम", "प्राकृतिक गैस", "कोयला", "लिग्नाइट"],
                  "answer_en": "Coal",
                  "answer_hi": "कोयला",
                  "attempted": false
                },
                {
                  "num": 3,
                  "question_en": "Which Indian state is the largest producer of coffee?",
                  "question_hi": "कौन सा भारतीय राज्य कॉफी का सबसे बड़ा उत्पादक है?",
                  "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
                  "options_hi": ["केरल", "कर्नाटक", "तमिल नाडु", "आंध्र प्रदेश"],
                  "answer_en": "Karnataka",
                  "answer_hi": "कर्नाटक",
                  "attempted": false
                },
                {
                  "num": 4,
                  "question_en": "Who appoints the Chief Minister of a state?",
                  "question_hi": "राज्य के मुख्यमंत्री की नियुक्ति कौन करता है?",
                  "options_en": ["President", "Prime Minister", "Governor", "Chief Justice"],
                  "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "राज्यपाल", "मुख्य न्यायाधीश"],
                  "answer_en": "Governor",
                  "answer_hi": "राज्यपाल",
                  "attempted": false
                },
                {
                  "num": 5,
                  "question_en": "Which sector contributes the most to India's GDP?",
                  "question_hi": "भारत के सकल घरेलू उत्पाद (GDP) में कौन सा क्षेत्र सबसे अधिक योगदान देता है?",
                  "options_en": ["Agriculture", "Industry", "Services", "Mining"],
                  "options_hi": ["कृषि", "उद्योग", "सेवाएँ", "खनन"],
                  "answer_en": "Services",
                  "answer_hi": "सेवाएँ",
                  "attempted": false
                },
                {
                  "num": 6,
                  "question_en": "The Rowlatt Act was passed in which year?",
                  "question_hi": "रॉलेट एक्ट किस वर्ष पारित किया गया था?",
                  "options_en": ["1917", "1918", "1919", "1920"],
                  "options_hi": ["1917", "1918", "1919", "1920"],
                  "answer_en": "1919",
                  "answer_hi": "1919",
                  "attempted": false
                },
                {
                  "num": 7,
                  "question_en": "Which river is known as the 'Dakshin Ganga'?",
                  "question_hi": "किस नदी को 'दक्षिण गंगा' कहा जाता है?",
                  "options_en": ["Godavari", "Krishna", "Kaveri", "Narmada"],
                  "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
                  "answer_en": "Godavari",
                  "answer_hi": "गोदावरी",
                  "attempted": false
                },
                {
                  "num": 8,
                  "question_en": "Who was the first woman President of India?",
                  "question_hi": "भारत की पहली महिला राष्ट्रपति कौन थीं?",
                  "options_en": ["Indira Gandhi", "Pratibha Patil", "Sonia Gandhi", "Sarojini Naidu"],
                  "options_hi": ["इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी", "सरोजिनी नायडू"],
                  "answer_en": "Pratibha Patil",
                  "answer_hi": "प्रतिभा पाटिल",
                  "attempted": false
                },
                {
                  "num": 9,
                  "question_en": "Which of these is a Rabi crop?",
                  "question_hi": "निम्नलिखित में से कौन सी रबी की फसल है?",
                  "options_en": ["Rice", "Wheat", "Cotton", "Maize"],
                  "options_hi": ["चावल", "गेहूँ", "कपास", "मक्का"],
                  "answer_en": "Wheat",
                  "answer_hi": "गेहूँ",
                  "attempted": false
                },
                {
                  "num": 10,
                  "question_en": "The Indian Constitution was adopted on:",
                  "question_hi": "भारतीय संविधान को कब अपनाया गया था?",
                  "options_en": ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1949"],
                  "options_hi": ["15 अगस्त 1947", "26 जनवरी 1950", "26 नवंबर 1949", "2 अक्टूबर 1949"],
                  "answer_en": "26 November 1949",
                  "answer_hi": "26 नवंबर 1949",
                  "attempted": false
                },
                {
                  "num": 11,
                  "question_en": "Which organization regulates the credit system in India?",
                  "question_hi": "भारत में क्रेडिट प्रणाली को कौन सा संगठन नियंत्रित करता है?",
                  "options_en": ["SEBI", "RBI", "NABARD", "SIDBI"],
                  "options_hi": ["सेबी", "आरबीआई", "नाबार्ड", "सिडबी"],
                  "answer_en": "RBI",
                  "answer_hi": "आरबीआई",
                  "attempted": false
                },
                {
                  "num": 12,
                  "question_en": "The Champaran Satyagraha was led by:",
                  "question_hi": "चंपारण सत्याग्रह का नेतृत्व किसने किया था?",
                  "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"],
                  "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "सुभाष चंद्र बोस"],
                  "answer_en": "Mahatma Gandhi",
                  "answer_hi": "महात्मा गांधी",
                  "attempted": false
                },
                {
                  "num": 13,
                  "question_en": "Which state has the longest coastline in India?",
                  "question_hi": "भारत में सबसे लंबी तटरेखा किस राज्य की है?",
                  "options_en": ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Gujarat"],
                  "options_hi": ["केरल", "तमिल नाडु", "आंध्र प्रदेश", "गुजरात"],
                  "answer_en": "Gujarat",
                  "answer_hi": "गुजरात",
                  "attempted": false
                },
                {
                  "num": 14,
                  "question_en": "The 'Right to Information' Act was passed in:",
                  "question_hi": "सूचना का अधिकार अधिनियम किस वर्ष पारित किया गया था?",
                  "options_en": ["2002", "2005", "2010", "1995"],
                  "options_hi": ["2002", "2005", "2010", "1995"],
                  "answer_en": "2005",
                  "answer_hi": "2005",
                  "attempted": false
                },
                {
                  "num": 15,
                  "question_en": "Which of these is a Kharif crop?",
                  "question_hi": "निम्नलिखित में से कौन सी खरीफ की फसल है?",
                  "options_en": ["Mustard", "Barley", "Soybean", "Peas"],
                  "options_hi": ["सरसों", "जौ", "सोयाबीन", "मटर"],
                  "answer_en": "Soybean",
                  "answer_hi": "सोयाबीन",
                  "attempted": false
                },
                {
                        "num": 16,
                        "question_en": "Which of these is NOT a feature of federalism?",
                        "question_hi": "निम्नलिखित में से कौन सी संघवाद की विशेषता नहीं है?",
                        "options_en": ["Two tiers of government", "Written constitution", "Single citizenship", "Independent judiciary"],
                        "options_hi": ["सरकार के दो स्तर", "लिखित संविधान", "एकल नागरिकता", "स्वतंत्र न्यायपालिका"],
                        "answer_en": "Single citizenship",
                        "answer_hi": "एकल नागरिकता",
                        "attempted": false
                      },
                      {
                        "num": 17,
                        "question_en": "The 'Dandi March' was associated with:",
                        "question_hi": "'दांडी मार्च' किससे संबंधित था?",
                        "options_en": ["Quit India Movement", "Non-Cooperation Movement", "Civil Disobedience Movement", "Khilafat Movement"],
                        "options_hi": ["भारत छोड़ो आंदोलन", "असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "खिलाफत आंदोलन"],
                        "answer_en": "Civil Disobedience Movement",
                        "answer_hi": "सविनय अवज्ञा आंदोलन",
                        "attempted": false
                      },
                      {
                        "num": 18,
                        "question_en": "Which soil is best for cotton cultivation?",
                        "question_hi": "कपास की खेती के लिए कौन सी मिट्टी सबसे उपयुक्त है?",
                        "options_en": ["Alluvial", "Black", "Red", "Laterite"],
                        "options_hi": ["जलोढ़", "काली", "लाल", "लेटराइट"],
                        "answer_en": "Black",
                        "answer_hi": "काली",
                        "attempted": false
                      },
                      {
                        "num": 19,
                        "question_en": "The minimum age for voting in India is:",
                        "question_hi": "भारत में मतदान की न्यूनतम आयु क्या है?",
                        "options_en": ["16 years", "18 years", "21 years", "25 years"],
                        "options_hi": ["16 वर्ष", "18 वर्ष", "21 वर्ष", "25 वर्ष"],
                        "answer_en": "18 years",
                        "answer_hi": "18 वर्ष",
                        "attempted": false
                      },
                      {
                        "num": 20,
                        "question_en": "Which is the largest solar park in India?",
                        "question_hi": "भारत का सबसे बड़ा सोलर पार्क कौन सा है?",
                        "options_en": ["Bhadla Solar Park", "Pavagada Solar Park", "Kamuthi Solar Park", "Rewa Solar Park"],
                        "options_hi": ["भाड़ला सोलर पार्क", "पावागड़ा सोलर पार्क", "कामुथी सोलर पार्क", "रीवा सोलर पार्क"],
                        "answer_en": "Bhadla Solar Park",
                        "answer_hi": "भाड़ला सोलर पार्क",
                        "attempted": false
                      },
                      {
                        "num": 21,
                        "question_en": "The 'Green Revolution' was primarily related to:",
                        "question_hi": "'हरित क्रांति' मुख्य रूप से किससे संबंधित थी?",
                        "options_en": ["Industrial growth", "Agricultural productivity", "Forest conservation", "Water management"],
                        "options_hi": ["औद्योगिक विकास", "कृषि उत्पादकता", "वन संरक्षण", "जल प्रबंधन"],
                        "answer_en": "Agricultural productivity",
                        "answer_hi": "कृषि उत्पादकता",
                        "attempted": false
                      },
                      {
                        "num": 22,
                        "question_en": "Who wrote 'Hind Swaraj'?",
                        "question_hi": "'हिंद स्वराज' किसने लिखा था?",
                        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Bal Gangadhar Tilak", "Subhas Chandra Bose"],
                        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "बाल गंगाधर तिलक", "सुभाष चंद्र बोस"],
                        "answer_en": "Mahatma Gandhi",
                        "answer_hi": "महात्मा गांधी",
                        "attempted": false
                      },
                      {
                        "num": 23,
                        "question_en": "Which river forms the Sundarbans Delta?",
                        "question_hi": "कौन सी नदी सुंदरबन डेल्टा बनाती है?",
                        "options_en": ["Ganga", "Brahmaputra", "Meghna", "All of the above"],
                        "options_hi": ["गंगा", "ब्रह्मपुत्र", "मेघना", "उपरोक्त सभी"],
                        "answer_en": "All of the above",
                        "answer_hi": "उपरोक्त सभी",
                        "attempted": false
                      },
                      {
                        "num": 24,
                        "question_en": "The Indian Parliament consists of:",
                        "question_hi": "भारतीय संसद में शामिल हैं:",
                        "options_en": ["Lok Sabha only", "Rajya Sabha only", "Lok Sabha and Rajya Sabha", "Lok Sabha, Rajya Sabha and President"],
                        "options_hi": ["केवल लोकसभा", "केवल राज्यसभा", "लोकसभा और राज्यसभा", "लोकसभा, राज्यसभा और राष्ट्रपति"],
                        "answer_en": "Lok Sabha, Rajya Sabha and President",
                        "answer_hi": "लोकसभा, राज्यसभा और राष्ट्रपति",
                        "attempted": false
                      },
                      {
                        "num": 25,
                        "question_en": "Which of these is a secondary sector activity?",
                        "question_hi": "निम्नलिखित में से कौन सा द्वितीयक क्षेत्र का कार्य है?",
                        "options_en": ["Farming", "Manufacturing", "Banking", "Mining"],
                        "options_hi": ["खेती", "विनिर्माण", "बैंकिंग", "खनन"],
                        "answer_en": "Manufacturing",
                        "answer_hi": "विनिर्माण",
                        "attempted": false
                      },
                      {
                        "num": 26,
                        "question_en": "The Simon Commission was boycotted because:",
                        "question_hi": "साइमन कमीशन का बहिष्कार क्यों किया गया था?",
                        "options_en": ["It was all-British", "It supported partition", "It ignored farmers", "It promoted violence"],
                        "options_hi": ["यह पूर्णतः ब्रिटिश था", "इसने विभाजन का समर्थन किया", "इसने किसानों को नजरअंदाज किया", "इसने हिंसा को बढ़ावा दिया"],
                        "answer_en": "It was all-British",
                        "answer_hi": "यह पूर्णतः ब्रिटिश था",
                        "attempted": false
                      },
                      {
                        "num": 27,
                        "question_en": "Which state is the largest producer of jute in India?",
                        "question_hi": "भारत में जूट का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                        "options_en": ["Bihar", "West Bengal", "Assam", "Odisha"],
                        "options_hi": ["बिहार", "पश्चिम बंगाल", "असम", "ओडिशा"],
                        "answer_en": "West Bengal",
                        "answer_hi": "पश्चिम बंगाल",
                        "attempted": false
                      },
                      {
                        "num": 28,
                        "question_en": "The 'Right to Education' was added to the Constitution under:",
                        "question_hi": "'शिक्षा का अधिकार' संविधान में किसके अंतर्गत जोड़ा गया था?",
                        "options_en": ["Article 21", "Article 19", "Article 21A", "Article 14"],
                        "options_hi": ["अनुच्छेद 21", "अनुच्छेद 19", "अनुच्छेद 21A", "अनुच्छेद 14"],
                        "answer_en": "Article 21A",
                        "answer_hi": "अनुच्छेद 21A",
                        "attempted": false
                      },
                      {
                        "num": 29,
                        "question_en": "GDP stands for:",
                        "question_hi": "GDP का पूरा नाम है:",
                        "options_en": ["Gross Domestic Product", "General Development Plan", "Government Development Project", "Gross Demand Production"],
                        "options_hi": ["सकल घरेलू उत्पाद", "सामान्य विकास योजना", "सरकारी विकास परियोजना", "सकल मांग उत्पादन"],
                        "answer_en": "Gross Domestic Product",
                        "answer_hi": "सकल घरेलू उत्पाद",
                        "attempted": false
                      },
                      {
                        "num": 30,
                        "question_en": "The Jallianwala Bagh massacre occurred in:",
                        "question_hi": "जलियांवाला बाग हत्याकांड किस वर्ष हुआ था?",
                        "options_en": ["1917", "1918", "1919", "1920"],
                        "options_hi": ["1917", "1918", "1919", "1920"],
                        "answer_en": "1919",
                        "answer_hi": "1919",
                        "attempted": false
                      },
                      {
                        "num": 31,
                        "question_en": "Which is the oldest mountain range in India?",
                        "question_hi": "भारत का सबसे पुराना पर्वत श्रृंखला कौन सी है?",
                        "options_en": ["Himalayas", "Aravalli", "Vindhyas", "Satpura"],
                        "options_hi": ["हिमालय", "अरावली", "विंध्य", "सतपुड़ा"],
                        "answer_en": "Aravalli",
                        "answer_hi": "अरावली",
                        "attempted": false
                      },
                      {
                        "num": 32,
                        "question_en": "The President of India is elected by:",
                        "question_hi": "भारत के राष्ट्रपति का चुनाव कौन करता है?",
                        "options_en": ["Direct public voting", "Members of Parliament", "Members of Lok Sabha", "Electoral College"],
                        "options_hi": ["सीधे जनता द्वारा", "संसद के सदस्य", "लोकसभा के सदस्य", "निर्वाचक मंडल"],
                        "answer_en": "Electoral College",
                        "answer_hi": "निर्वाचक मंडल",
                        "attempted": false
                      },
                      {
                        "num": 33,
                        "question_en": "Which of these is a formal source of credit?",
                        "question_hi": "निम्नलिखित में से कौन सा ऋण का औपचारिक स्रोत है?",
                        "options_en": ["Money lender", "Relative", "Commercial Bank", "Landlord"],
                        "options_hi": ["साहूकार", "रिश्तेदार", "वाणिज्यिक बैंक", "जमींदार"],
                        "answer_en": "Commercial Bank",
                        "answer_hi": "वाणिज्यिक बैंक",
                        "attempted": false
                      },
                      {
                        "num": 34,
                        "question_en": "The 'Poona Pact' was signed between:",
                        "question_hi": "'पूना पैक्ट' किसके बीच हस्ताक्षरित हुआ था?",
                        "options_en": ["Gandhi and Ambedkar", "Gandhi and Jinnah", "Nehru and Patel", "Bose and Gandhi"],
                        "options_hi": ["गांधी और अंबेडकर", "गांधी और जिन्ना", "नेहरू और पटेल", "बोस और गांधी"],
                        "answer_en": "Gandhi and Ambedkar",
                        "answer_hi": "गांधी और अंबेडकर",
                        "attempted": false
                      },
                      {
                        "num": 35,
                        "question_en": "Which is the largest coffee-producing state in India?",
                        "question_hi": "भारत में कॉफी का सबसे बड़ा उत्पादक राज्य कौन सा है?",
                        "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
                        "options_hi": ["केरल", "कर्नाटक", "तमिल नाडु", "आंध्र प्रदेश"],
                        "answer_en": "Karnataka",
                        "answer_hi": "कर्नाटक",
                        "attempted": false
                      },
                      {
                        "num": 36,
                        "question_en": "The 'Question Hour' in Parliament is related to:",
                        "question_hi": "संसद में 'प्रश्नकाल' किससे संबंधित है?",
                        "options_en": ["Debates", "Asking questions to ministers", "Budget discussion", "Passing bills"],
                        "options_hi": ["बहस", "मंत्रियों से प्रश्न पूछना", "बजट चर्चा", "विधेयक पारित करना"],
                        "answer_en": "Asking questions to ministers",
                        "answer_hi": "मंत्रियों से प्रश्न पूछना",
                        "attempted": false
                      },
                      {
                        "num": 37,
                        "question_en": "Globalization has led to:",
                        "question_hi": "वैश्वीकरण के कारण:",
                        "options_en": ["Only positive effects", "Only negative effects", "Both positive and negative effects", "No effect"],
                        "options_hi": ["केवल सकारात्मक प्रभाव", "केवल नकारात्मक प्रभाव", "सकारात्मक और नकारात्मक दोनों प्रभाव", "कोई प्रभाव नहीं"],
                        "answer_en": "Both positive and negative effects",
                        "answer_hi": "सकारात्मक और नकारात्मक दोनों प्रभाव",
                        "attempted": false
                      },
                      {
                        "num": 38,
                        "question_en": "The 'Salt March' ended at:",
                        "question_hi": "'नमक मार्च' कहाँ समाप्त हुआ था?",
                        "options_en": ["Ahmedabad", "Surat", "Dandi", "Mumbai"],
                        "options_hi": ["अहमदाबाद", "सूरत", "दांडी", "मुंबई"],
                        "answer_en": "Dandi",
                        "answer_hi": "दांडी",
                        "attempted": false
                      },
                      {
                        "num": 39,
                        "question_en": "Which soil is ideal for growing cashew nuts?",
                        "question_hi": "काजू की खेती के लिए कौन सी मिट्टी आदर्श है?",
                        "options_en": ["Alluvial", "Black", "Red laterite", "Mountain"],
                        "options_hi": ["जलोढ़", "काली", "लाल लेटराइट", "पर्वतीय"],
                        "answer_en": "Red laterite",
                        "answer_hi": "लाल लेटराइट",
                        "attempted": false
                      },
                      {
                        "num": 40,
                        "question_en": "The 'Election Commission' is responsible for:",
                        "question_hi": "'चुनाव आयोग' किसके लिए जिम्मेदार है?",
                        "options_en": ["Conducting elections", "Making laws", "Appointing judges", "Managing taxes"],
                        "options_hi": ["चुनाव कराना", "कानून बनाना", "न्यायाधीशों की नियुक्ति", "करों का प्रबंधन"],
                        "answer_en": "Conducting elections",
                        "answer_hi": "चुनाव कराना",
                        "attempted": false
                      },
                      {
                        "num": 41,
                        "question_en": "Which sector is the largest employer in India?",
                        "question_hi": "भारत में सबसे बड़ा रोजगार प्रदाता कौन सा क्षेत्र है?",
                        "options_en": ["Primary", "Secondary", "Tertiary", "Quaternary"],
                        "options_hi": ["प्राथमिक", "द्वितीयक", "तृतीयक", "चतुर्थ"],
                        "answer_en": "Primary",
                        "answer_hi": "प्राथमिक",
                        "attempted": false
                      },
                      {
                        "num": 42,
                        "question_en": "The 'Quit India Movement' was launched in:",
                        "question_hi": "'भारत छोड़ो आंदोलन' किस वर्ष शुरू किया गया था?",
                        "options_en": ["1940", "1941", "1942", "1945"],
                        "options_hi": ["1940", "1941", "1942", "1945"],
                        "answer_en": "1942",
                        "answer_hi": "1942",
                        "attempted": false
                      },
                      {
                        "num": 43,
                        "question_en": "Which is the largest natural port in India?",
                        "question_hi": "भारत का सबसे बड़ा प्राकृतिक बंदरगाह कौन सा है?",
                        "options_en": ["Mumbai", "Chennai", "Kochi", "Visakhapatnam"],
                        "options_hi": ["मुंबई", "चेन्नई", "कोच्चि", "विशाखापत्तनम"],
                        "answer_en": "Mumbai",
                        "answer_hi": "मुंबई",
                        "attempted": false
                      },
                      {
                        "num": 44,
                        "question_en": "The 'Right to Constitutional Remedies' is under:",
                        "question_hi": "'संवैधानिक उपचारों का अधिकार' किसके अंतर्गत आता है?",
                        "options_en": ["Article 19", "Article 21", "Article 32", "Article 14"],
                        "options_hi": ["अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32", "अनुच्छेद 14"],
                        "answer_en": "Article 32",
                        "answer_hi": "अनुच्छेद 32",
                        "attempted": false
                      },
                      {
                        "num": 45,
                        "question_en": "Which of these is NOT a part of MGNREGA?",
                        "question_hi": "निम्नलिखित में से क्या MGNREGA का हिस्सा नहीं है?",
                        "options_en": ["100 days employment", "Wage payment in cash", "Only urban areas", "Unskilled work"],
                        "options_hi": ["100 दिन रोजगार", "नकद मजदूरी", "केवल शहरी क्षेत्र", "अकुशल कार्य"],
                        "answer_en": "Only urban areas",
                        "answer_hi": "केवल शहरी क्षेत्र",
                        "attempted": false
                      },
                      {
                        "num": 46,
                        "question_en": "The 'Non-Aligned Movement' was initiated by:",
                        "question_hi": "'गुटनिरपेक्ष आंदोलन' की शुरुआत किसने की थी?",
                        "options_en": ["Nehru, Nasser, Tito", "Gandhi, Mandela, Sukarno", "Patel, Bhutto, Mao", "Bose, Aung San, Ho Chi Minh"],
                        "options_hi": ["नेहरू, नासिर, टीटो", "गांधी, मंडेला, सुकर्णो", "पटेल, भुट्टो, माओ", "बोस, आंग सान, हो ची मिन्ह"],
                        "answer_en": "Nehru, Nasser, Tito",
                        "answer_hi": "नेहरू, नासिर, टीटो",
                        "attempted": false
                      },
                      {
                        "num": 47,
                        "question_en": "Which is the largest mangrove forest in the world?",
                        "question_hi": "दुनिया का सबसे बड़ा मैंग्रोव वन कौन सा है?",
                        "options_en": ["Amazon", "Sundarbans", "Congo", "Daintree"],
                        "options_hi": ["अमेज़न", "सुंदरबन", "कांगो", "डेनट्री"],
                        "answer_en": "Sundarbans",
                        "answer_hi": "सुंदरबन",
                        "attempted": false
                      },
                      {
                        "num": 48,
                        "question_en": "The 'Lok Sabha' is also known as:",
                        "question_hi": "'लोकसभा' को किस नाम से भी जाना जाता है?",
                        "options_en": ["Upper House", "House of States", "House of the People", "Council of States"],
                        "options_hi": ["उच्च सदन", "राज्यों का सदन", "जनता का सदन", "राज्यों की परिषद"],
                        "answer_en": "House of the People",
                        "answer_hi": "जनता का सदन",
                        "attempted": false
                      },
                      {
                        "num": 49,
                        "question_en": "Which of these is a Rabi crop?",
                        "question_hi": "निम्नलिखित में से कौन सी रबी की फसल है?",
                        "options_en": ["Rice", "Wheat", "Maize", "Cotton"],
                        "options_hi": ["चावल", "गेहूँ", "मक्का", "कपास"],
                        "answer_en": "Wheat",
                        "answer_hi": "गेहूँ",
                        "attempted": false
                      },
                      {
                        "num": 50,
                        "question_en": "The 'Consumer Protection Act' was enacted in:",
                        "question_hi": "'उपभोक्ता संरक्षण अधिनियम' किस वर्ष पारित किया गया था?",
                        "options_en": ["1986", "1991", "2000", "2005"],
                        "options_hi": ["1986", "1991", "2000", "2005"],
                        "answer_en": "1986",
                        "answer_hi": "1986",
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