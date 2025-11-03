
const questions = [
  
    {
      "num": 1,
      "question_en": "Who is the head of the Union Executive in India?",
      "question_hi": "भारत में केंद्रीय कार्यपालिका का प्रमुख कौन है?",
      "options_en": ["Prime Minister", "President", "Chief Justice", "Speaker of Lok Sabha"],
      "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "मुख्य न्यायाधीश", "लोकसभा अध्यक्ष"],
      "answer_en": "President",
      "answer_hi": "राष्ट्रपति",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 2,
      "question_en": "The First War of Indian Independence took place in which year?",
      "question_hi": "भारत का प्रथम स्वतंत्रता संग्राम किस वर्ष हुआ था?",
      "options_en": ["1857", "1947", "1919", "1765"],
      "options_hi": ["1857", "1947", "1919", "1765"],
      "answer_en": "1857",
      "answer_hi": "1857",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 3,
      "question_en": "Which house of Parliament is directly elected by the people?",
      "question_hi": "संसद का कौन सा सदस्य सीधे जनता द्वारा चुना जाता है?",
      "options_en": ["Rajya Sabha", "Lok Sabha", "Both", "None"],
      "options_hi": ["राज्यसभा", "लोकसभा", "दोनों", "कोई नहीं"],
      "answer_en": "Lok Sabha",
      "answer_hi": "लोकसभा",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 4,
      "question_en": "Who was the founder of the Indian National Congress?",
      "question_hi": "भारतीय राष्ट्रीय कांग्रेस के संस्थापक कौन थे?",
      "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "A.O. Hume", "Bal Gangadhar Tilak"],
      "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "ए.ओ. ह्यूम", "बाल गंगाधर तिलक"],
      "answer_en": "A.O. Hume",
      "answer_hi": "ए.ओ. ह्यूम",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 5,
      "question_en": "The Supreme Court of India is located in:",
      "question_hi": "भारत का सर्वोच्च न्यायालय कहाँ स्थित है?",
      "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
      "answer_en": "Delhi",
      "answer_hi": "दिल्ली",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 6,
      "question_en": "The Non-Cooperation Movement was launched in:",
      "question_hi": "असहयोग आंदोलन किस वर्ष शुरू किया गया था?",
      "options_en": ["1920", "1930", "1942", "1919"],
      "options_hi": ["1920", "1930", "1942", "1919"],
      "answer_en": "1920",
      "answer_hi": "1920",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 7,
      "question_en": "Who appoints the Prime Minister of India?",
      "question_hi": "भारत के प्रधानमंत्री की नियुक्ति कौन करता है?",
      "options_en": ["President", "Chief Justice", "Lok Sabha Speaker", "Vice President"],
      "options_hi": ["राष्ट्रपति", "मुख्य न्यायाधीश", "लोकसभा अध्यक्ष", "उपराष्ट्रपति"],
      "answer_en": "President",
      "answer_hi": "राष्ट्रपति",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 8,
      "question_en": "The Quit India Movement was started in:",
      "question_hi": "भारत छोड़ो आंदोलन किस वर्ष शुरू किया गया था?",
      "options_en": ["1942", "1930", "1920", "1947"],
      "options_hi": ["1942", "1930", "1920", "1947"],
      "answer_en": "1942",
      "answer_hi": "1942",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 9,
      "question_en": "The maximum strength of Lok Sabha is:",
      "question_hi": "लोकसभा की अधिकतम सदस्य संख्या कितनी है?",
      "options_en": ["545", "552", "250", "543"],
      "options_hi": ["545", "552", "250", "543"],
      "answer_en": "552",
      "answer_hi": "552",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 10,
      "question_en": "The partition of Bengal took place in:",
      "question_hi": "बंगाल का विभाजन किस वर्ष हुआ था?",
      "options_en": ["1905", "1911", "1857", "1947"],
      "options_hi": ["1905", "1911", "1857", "1947"],
      "answer_en": "1905",
      "answer_hi": "1905",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 11,
      "question_en": "The President of India is elected by:",
      "question_hi": "भारत के राष्ट्रपति का चुनाव कौन करता है?",
      "options_en": ["Directly by people", "Members of Parliament", "Electoral College", "State Governors"],
      "options_hi": ["सीधे जनता द्वारा", "संसद सदस्यों द्वारा", "निर्वाचक मंडल द्वारा", "राज्यपालों द्वारा"],
      "answer_en": "Electoral College",
      "answer_hi": "निर्वाचक मंडल द्वारा",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 12,
      "question_en": "The Simon Commission came to India in:",
      "question_hi": "साइमन कमीशन भारत कब आया था?",
      "options_en": ["1927", "1935", "1919", "1942"],
      "options_hi": ["1927", "1935", "1919", "1942"],
      "answer_en": "1927",
      "answer_hi": "1927",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 13,
      "question_en": "The term of office of a Rajya Sabha member is:",
      "question_hi": "राज्यसभा सदस्य का कार्यकाल कितना होता है?",
      "options_en": ["2 years", "5 years", "6 years", "4 years"],
      "options_hi": ["2 वर्ष", "5 वर्ष", "6 वर्ष", "4 वर्ष"],
      "answer_en": "6 years",
      "answer_hi": "6 वर्ष",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 14,
      "question_en": "The Rowlatt Act was passed in:",
      "question_hi": "रॉलेट एक्ट किस वर्ष पारित किया गया था?",
      "options_en": ["1919", "1920", "1930", "1942"],
      "options_hi": ["1919", "1920", "1930", "1942"],
      "answer_en": "1919",
      "answer_hi": "1919",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 15,
      "question_en": "The Vice President of India is the ex-officio Chairman of:",
      "question_hi": "भारत के उपराष्ट्रपति पदेन अध्यक्ष होते हैं:",
      "options_en": ["Lok Sabha", "Rajya Sabha", "Supreme Court", "Planning Commission"],
      "options_hi": ["लोकसभा", "राज्यसभा", "सर्वोच्च न्यायालय", "योजना आयोग"],
      "answer_en": "Rajya Sabha",
      "answer_hi": "राज्यसभा",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 16,
      "question_en": "The Jallianwala Bagh massacre occurred in:",
      "question_hi": "जलियांवाला बाग हत्याकांड किस वर्ष हुआ था?",
      "options_en": ["1919", "1920", "1930", "1942"],
      "options_hi": ["1919", "1920", "1930", "1942"],
      "answer_en": "1919",
      "answer_hi": "1919",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 17,
      "question_en": "The minimum age to become a member of Lok Sabha is:",
      "question_hi": "लोकसभा सदस्य बनने के लिए न्यूनतम आयु कितनी होनी चाहिए?",
      "options_en": ["18 years", "21 years", "25 years", "30 years"],
      "options_hi": ["18 वर्ष", "21 वर्ष", "25 वर्ष", "30 वर्ष"],
      "answer_en": "25 years",
      "answer_hi": "25 वर्ष",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 18,
      "question_en": "The Civil Disobedience Movement was started by:",
      "question_hi": "सविनय अवज्ञा आंदोलन किसने शुरू किया था?",
      "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "Bhagat Singh"],
      "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
      "answer_en": "Mahatma Gandhi",
      "answer_hi": "महात्मा गांधी",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 19,
      "question_en": "The impeachment process of the President can be initiated in:",
      "question_hi": "राष्ट्रपति के महाभियोग की प्रक्रिया कहाँ शुरू की जा सकती है?",
      "options_en": ["Lok Sabha", "Rajya Sabha", "Supreme Court", "Either House of Parliament"],
      "options_hi": ["लोकसभा", "राज्यसभा", "सर्वोच्च न्यायालय", "संसद के किसी भी सदन में"],
      "answer_en": "Either House of Parliament",
      "answer_hi": "संसद के किसी भी सदन में",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 20,
      "question_en": "The Indian National Army (INA) was founded by:",
      "question_hi": "आज़ाद हिंद फौज (INA) की स्थापना किसने की थी?",
      "options_en": ["Mahatma Gandhi", "Subhash Chandra Bose", "Bhagat Singh", "Chandrashekhar Azad"],
      "options_hi": ["महात्मा गांधी", "सुभाष चंद्र बोस", "भगत सिंह", "चंद्रशेखर आजाद"],
      "answer_en": "Subhash Chandra Bose",
      "answer_hi": "सुभाष चंद्र बोस",
      "attempted": false,
      "subject": "History"
    },
    // (Add 30 more MCQs following the same format)
    {
      "num": 21,
      "question_en": "The 'Poorna Swaraj' resolution was adopted in which session of the INC?",
      "question_hi": "'पूर्ण स्वराज' प्रस्ताव कांग्रेस के किस अधिवेशन में पारित किया गया था?",
      "options_en": ["Lahore (1929)", "Karachi (1931)", "Bombay (1942)", "Calcutta (1928)"],
      "options_hi": ["लाहौर (1929)", "कराची (1931)", "बॉम्बे (1942)", "कलकत्ता (1928)"],
      "answer_en": "Lahore (1929)",
      "answer_hi": "लाहौर (1929)",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 22,
      "question_en": "The Chief Justice of India is appointed by:",
      "question_hi": "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
      "options_en": ["Prime Minister", "President", "Parliament", "Supreme Court Collegium"],
      "options_hi": ["प्रधानमंत्री", "राष्ट्रपति", "संसद", "सुप्रीम कोर्ट कॉलेजियम"],
      "answer_en": "President",
      "answer_hi": "राष्ट्रपति",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 23,
      "question_en": "The Champaran Satyagraha was related to:",
      "question_hi": "चंपारण सत्याग्रह किससे संबंधित था?",
      "options_en": ["Cotton farmers", "Indigo farmers", "Salt tax", "Mill workers"],
      "options_hi": ["कपास किसान", "नील किसान", "नमक कर", "मिल मजदूर"],
      "answer_en": "Indigo farmers",
      "answer_hi": "नील किसान",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 24,
      "question_en": "The 'Council of Ministers' is collectively responsible to:",
      "question_hi": "'मंत्रिपरिषद' सामूहिक रूप से किसके प्रति उत्तरदायी होती है?",
      "options_en": ["President", "Lok Sabha", "Supreme Court", "Prime Minister"],
      "options_hi": ["राष्ट्रपति", "लोकसभा", "सर्वोच्च न्यायालय", "प्रधानमंत्री"],
      "answer_en": "Lok Sabha",
      "answer_hi": "लोकसभा",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 25,
      "question_en": "The 'Dandi March' was associated with:",
      "question_hi": "'दांडी मार्च' किससे जुड़ा था?",
      "options_en": ["Quit India Movement", "Non-Cooperation Movement", "Civil Disobedience Movement", "Khilafat Movement"],
      "options_hi": ["भारत छोड़ो आंदोलन", "असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "खिलाफत आंदोलन"],
      "answer_en": "Civil Disobedience Movement",
      "answer_hi": "सविनय अवज्ञा आंदोलन",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 26,
      "question_en": "The President of India can declare emergency under:",
      "question_hi": "भारत का राष्ट्रपति किसके तहत आपातकाल घोषित कर सकता है?",
      "options_en": ["Article 352", "Article 370", "Article 21", "Article 44"],
      "options_hi": ["अनुच्छेद 352", "अनुच्छेद 370", "अनुच्छेद 21", "अनुच्छेद 44"],
      "answer_en": "Article 352",
      "answer_hi": "अनुच्छेद 352",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 27,
      "question_en": "The 'Simon Commission' was boycotted because:",
      "question_hi": "'साइमन कमीशन' का बहिष्कार क्यों किया गया था?",
      "options_en": ["It had no Indian member", "It supported British rule", "It recommended partition", "It was too late"],
      "options_hi": ["इसमें कोई भारतीय सदस्य नहीं था", "इसने ब्रिटिश शासन का समर्थन किया", "इसने विभाजन की सिफारिश की", "यह बहुत देर से आया"],
      "answer_en": "It had no Indian member",
      "answer_hi": "इसमें कोई भारतीय सदस्य नहीं था",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 28,
      "question_en": "The 'Question Hour' in Parliament is held:",
      "question_hi": "संसद में 'प्रश्नकाल' कब आयोजित किया जाता है?",
      "options_en": ["At the start of the day", "During lunch break", "At the end of the day", "Only on Fridays"],
      "options_hi": ["दिन की शुरुआत में", "दोपहर के भोजन के दौरान", "दिन के अंत में", "केवल शुक्रवार को"],
      "answer_en": "At the start of the day",
      "answer_hi": "दिन की शुरुआत में",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 29,
      "question_en": "The 'Lucknow Pact' was signed between INC and:",
      "question_hi": "'लखनऊ समझौता' कांग्रेस और किसके बीच हुआ था?",
      "options_en": ["Muslim League", "British Government", "Hindu Mahasabha", "Swaraj Party"],
      "options_hi": ["मुस्लिम लीग", "ब्रिटिश सरकार", "हिंदू महासभा", "स्वराज पार्टी"],
      "answer_en": "Muslim League",
      "answer_hi": "मुस्लिम लीग",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 30,
      "question_en": "The 'Zero Hour' in Parliament starts at:",
      "question_hi": "संसद में 'शून्यकाल' किस समय शुरू होता है?",
      "options_en": ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
      "options_hi": ["दोपहर 12:00 बजे", "दोपहर 1:00 बजे", "दोपहर 2:00 बजे", "दोपहर 3:00 बजे"],
      "answer_en": "12:00 PM",
      "answer_hi": "दोपहर 12:00 बजे",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 31,
      "question_en": "The 'August Offer' was made by the British in:",
      "question_hi": "'अगस्त प्रस्ताव' ब्रिटिश सरकार ने किस वर्ष दिया था?",
      "options_en": ["1940", "1942", "1935", "1929"],
      "options_hi": ["1940", "1942", "1935", "1929"],
      "answer_en": "1940",
      "answer_hi": "1940",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 32,
      "question_en": "The 'Judicial Review' power is vested in:",
      "question_hi": "'न्यायिक पुनर्विलोकन' की शक्ति किसमें निहित है?",
      "options_en": ["President", "Parliament", "Supreme Court", "Election Commission"],
      "options_hi": ["राष्ट्रपति", "संसद", "सर्वोच्च न्यायालय", "चुनाव आयोग"],
      "answer_en": "Supreme Court",
      "answer_hi": "सर्वोच्च न्यायालय",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 33,
      "question_en": "The 'Cripps Mission' came to India in:",
      "question_hi": "'क्रिप्स मिशन' भारत कब आया था?",
      "options_en": ["1942", "1945", "1939", "1947"],
      "options_hi": ["1942", "1945", "1939", "1947"],
      "answer_en": "1942",
      "answer_hi": "1942",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 34,
      "question_en": "The 'Speaker of Lok Sabha' is elected by:",
      "question_hi": "लोकसभा अध्यक्ष का चुनाव कौन करता है?",
      "options_en": ["President", "Prime Minister", "Members of Lok Sabha", "Chief Justice"],
      "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "लोकसभा के सदस्य", "मुख्य न्यायाधीश"],
      "answer_en": "Members of Lok Sabha",
      "answer_hi": "लोकसभा के सदस्य",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 35,
      "question_en": "The 'Gadar Party' was founded in:",
      "question_hi": "'गदर पार्टी' की स्थापना किस वर्ष हुई थी?",
      "options_en": ["1913", "1920", "1930", "1942"],
      "options_hi": ["1913", "1920", "1930", "1942"],
      "answer_en": "1913",
      "answer_hi": "1913",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 36,
      "question_en": "The 'Union Budget' is presented by:",
      "question_hi": "केंद्रीय बजट किसके द्वारा पेश किया जाता है?",
      "options_en": ["President", "Prime Minister", "Finance Minister", "RBI Governor"],
      "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "वित्त मंत्री", "आरबीआई गवर्नर"],
      "answer_en": "Finance Minister",
      "answer_hi": "वित्त मंत्री",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 37,
      "question_en": "The 'Poona Pact' was signed between Gandhi and:",
      "question_hi": "'पूना पैक्ट' गांधी और किसके बीच हुआ था?",
      "options_en": ["Jawaharlal Nehru", "B.R. Ambedkar", "Subhash Chandra Bose", "Muhammad Ali Jinnah"],
      "options_hi": ["जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सुभाष चंद्र बोस", "मोहम्मद अली जिन्ना"],
      "answer_en": "B.R. Ambedkar",
      "answer_hi": "बी.आर. अंबेडकर",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 38,
      "question_en": "The 'Veto Power' in the UN is enjoyed by:",
      "question_hi": "संयुक्त राष्ट्र में 'वीटो पावर' किसके पास है?",
      "options_en": ["All members", "Security Council permanent members", "General Assembly", "Secretary-General"],
      "options_hi": ["सभी सदस्य", "सुरक्षा परिषद के स्थायी सदस्य", "महासभा", "महासचिव"],
      "answer_en": "Security Council permanent members",
      "answer_hi": "सुरक्षा परिषद के स्थायी सदस्य",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 39,
      "question_en": "The 'Directive Principles of State Policy' are inspired by:",
      "question_hi": "'राज्य के नीति निर्देशक सिद्धांत' किससे प्रेरित हैं?",
      "options_en": ["US Constitution", "British Parliament", "Irish Constitution", "French Revolution"],
      "options_hi": ["अमेरिकी संविधान", "ब्रिटिश संसद", "आयरिश संविधान", "फ्रांसीसी क्रांति"],
      "answer_en": "Irish Constitution",
      "answer_hi": "आयरिश संविधान",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 40,
      "question_en": "The 'Cabinet Mission Plan' was proposed in:",
      "question_hi": "'कैबिनेट मिशन योजना' किस वर्ष प्रस्तावित की गई थी?",
      "options_en": ["1942", "1946", "1947", "1935"],
      "options_hi": ["1942", "1946", "1947", "1935"],
      "answer_en": "1946",
      "answer_hi": "1946",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 41,
      "question_en": "The 'Fundamental Rights' in the Indian Constitution are:",
      "question_hi": "भारतीय संविधान में 'मौलिक अधिकार' हैं:",
      "options_en": ["Absolute", "Sacrosanct", "Subject to reasonable restrictions", "Can be suspended anytime"],
      "options_hi": ["पूर्ण", "पवित्र", "युक्तियुक्त प्रतिबंधों के अधीन", "कभी भी निलंबित किए जा सकते हैं"],
      "answer_en": "Subject to reasonable restrictions",
      "answer_hi": "युक्तियुक्त प्रतिबंधों के अधीन",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 42,
      "question_en": "The 'Mountbatten Plan' led to:",
      "question_hi": "'माउंटबेटन योजना' का परिणाम क्या था?",
      "options_en": ["Independence", "Partition of India", "Quit India Movement", "Formation of INC"],
      "options_hi": ["स्वतंत्रता", "भारत का विभाजन", "भारत छोड़ो आंदोलन", "कांग्रेस का गठन"],
      "answer_en": "Partition of India",
      "answer_hi": "भारत का विभाजन",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 43,
      "question_en": "The 'Sarkaria Commission' was related to:",
      "question_hi": "'सरकारिया आयोग' किससे संबंधित था?",
      "options_en": ["Centre-State relations", "Electoral reforms", "Judicial reforms", "Education policy"],
      "options_hi": ["केंद्र-राज्य संबंध", "चुनाव सुधार", "न्यायिक सुधार", "शिक्षा नीति"],
      "answer_en": "Centre-State relations",
      "answer_hi": "केंद्र-राज्य संबंध",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 44,
      "question_en": "The 'Indian Independence Act' was passed in:",
      "question_hi": "'भारतीय स्वतंत्रता अधिनियम' किस वर्ष पारित किया गया था?",
      "options_en": ["1947", "1942", "1935", "1950"],
      "options_hi": ["1947", "1942", "1935", "1950"],
      "answer_en": "1947",
      "answer_hi": "1947",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 45,
      "question_en": "The 'Gram Sabha' consists of:",
      "question_hi": "'ग्राम सभा' में शामिल हैं:",
      "options_en": ["All village adults", "Only elected members", "Sarpanch and Panch", "State officials"],
      "options_hi": ["सभी गाँव के वयस्क", "केवल निर्वाचित सदस्य", "सरपंच और पंच", "राज्य अधिकारी"],
      "answer_en": "All village adults",
      "answer_hi": "सभी गाँव के वयस्क",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 46,
      "question_en": "The 'Azad Hind Fauj' was formed in:",
      "question_hi": "'आज़ाद हिंद फौज' का गठन किस वर्ष हुआ था?",
      "options_en": ["1942", "1943", "1945", "1947"],
      "options_hi": ["1942", "1943", "1945", "1947"],
      "answer_en": "1943",
      "answer_hi": "1943",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 47,
      "question_en": "The '73rd Constitutional Amendment' is related to:",
      "question_hi": "'73वां संविधान संशोधन' किससे संबंधित है?",
      "options_en": ["Panchayati Raj", "Judiciary", "Fundamental Rights", "President's powers"],
      "options_hi": ["पंचायती राज", "न्यायपालिका", "मौलिक अधिकार", "राष्ट्रपति की शक्तियाँ"],
      "answer_en": "Panchayati Raj",
      "answer_hi": "पंचायती राज",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 48,
      "question_en": "The 'Tebhaga Movement' was led by:",
      "question_hi": "'तेभागा आंदोलन' का नेतृत्व किसने किया था?",
      "options_en": ["Mahatma Gandhi", "Bhagat Singh", "Bengali peasants", "Tribals of Bihar"],
      "options_hi": ["महात्मा गांधी", "भगत सिंह", "बंगाल के किसान", "बिहार के आदिवासी"],
      "answer_en": "Bengali peasants",
      "answer_hi": "बंगाल के किसान",
      "attempted": false,
      "subject": "History"
    },
    {
      "num": 49,
      "question_en": "The 'National Human Rights Commission' was established in:",
      "question_hi": "'राष्ट्रीय मानवाधिकार आयोग' की स्थापना किस वर्ष हुई थी?",
      "options_en": ["1993", "1950", "1976", "2002"],
      "options_hi": ["1993", "1950", "1976", "2002"],
      "answer_en": "1993",
      "answer_hi": "1993",
      "attempted": false,
      "subject": "Civics"
    },
    {
      "num": 50,
      "question_en": "The 'Kakori Conspiracy Case' was associated with:",
      "question_hi": "'काकोरी षड्यंत्र केस' किससे जुड़ा था?",
      "options_en": ["Bhagat Singh", "Chandrashekhar Azad", "Subhash Chandra Bose", "Lala Lajpat Rai"],
      "options_hi": ["भगत सिंह", "चंद्रशेखर आजाद", "सुभाष चंद्र बोस", "लाला लाजपत राय"],
      "answer_en": "Chandrashekhar Azad",
      "answer_hi": "चंद्रशेखर आजाद",
      "attempted": false,
      "subject": "History"
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
