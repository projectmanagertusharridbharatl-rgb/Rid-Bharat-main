const questions = [
        
        
                {
                    "num": 1,
                    "question_en": "Which chapter in Shemushi Part-2 focuses on environmental cleanliness?",
                    "question_hi": "शेमुषी भाग-2 में कौन सा अध्याय पर्यावरणीय स्वच्छता पर केंद्रित है?",
                    "options_en": ["Buddhirbalavati Sada", "Shuchiparyavaranam", "Janani Tulyavatsala", "Subhashitani"],
                    "options_hi": ["बुद्धिर्बलवती सदा", "शुचिपर्यावरणम्", "जननी तुल्यवत्सला", "सुभाषितानि"],
                    "answer_en": "Shuchiparyavaranam",
                    "answer_hi": "शुचिपर्यावरणम्"
                },
                {
                    "num": 2,
                    "question_en": "What is the correct Sandhi combination for 'गङ्गा + उदकम्'?",
                    "question_hi": "'गङ्गा + उदकम्' का सही सन्धि युग्म क्या है?",
                    "options_en": ["गङ्गोदकम्", "गङ्गौदकम्", "गङ्गादकम्", "गङ्गाउदकम्"],
                    "options_hi": ["गङ्गोदकम्", "गङ्गौदकम्", "गङ्गादकम्", "गङ्गाउदकम्"],
                    "answer_en": "गङ्गोदकम्",
                    "answer_hi": "गङ्गोदकम्"
                },
                {
                    "num": 3,
                    "question_en": "Which Lakar is used in the word 'अपठत्'?",
                    "question_hi": "'अपठत्' शब्द में कौन सा लकार प्रयुक्त हुआ है?",
                    "options_en": ["Lat", "Lit", "Lut", "Lang"],
                    "options_hi": ["लट्", "लिट्", "लुट्", "लङ्"],
                    "answer_en": "Lang",
                    "answer_hi": "लङ्"
                },
                {
                    "num": 4,
                    "question_en": "What type of Samas is 'पीताम्बरः'?",
                    "question_hi": "'पीताम्बरः' किस प्रकार का समास है?",
                    "options_en": ["Tatpurusha", "Bahuvrihi", "Dvandva", "Karmadharaya"],
                    "options_hi": ["तत्पुरुष", "बहुव्रीहि", "द्वन्द्व", "कर्मधारय"],
                    "answer_en": "Bahuvrihi",
                    "answer_hi": "बहुव्रीहि"
                },
                {
                    "num": 5,
                    "question_en": "Which chapter contains the story highlighting intelligence over physical strength?",
                    "question_hi": "कौन सा अध्याय शारीरिक शक्ति से अधिक बुद्धि की श्रेष्ठता को दर्शाता है?",
                    "options_en": ["Shuchiparyavaranam", "Buddhirbalavati Sada", "Veeravanita", "Vichitrah Sakshi"],
                    "options_hi": ["शुचिपर्यावरणम्", "बुद्धिर्बलवती सदा", "वीरवनिता", "विचित्रः साक्षी"],
                    "answer_en": "Buddhirbalavati Sada",
                    "answer_hi": "बुद्धिर्बलवती सदा"
                },
                {
                    "num": 6,
                    "question_en": "What is the correct Pratyaya to form 'कर्तुम्' from 'कृ'?",
                    "question_hi": "'कृ' धातु से 'कर्तुम्' बनाने के लिए कौन सा प्रत्यय सही है?",
                    "options_en": ["तुमुन्", "क्त", "क्तवतु", "शतृ"],
                    "options_hi": ["तुमुन्", "क्त", "क्तवतु", "शतृ"],
                    "answer_en": "तुमुन्",
                    "answer_hi": "तुमुन्"
                },
                {
                    "num": 7,
                    "question_en": "Which vibhakti is used in 'रामेण'?",
                    "question_hi": "'रामेण' में कौन सी विभक्ति प्रयुक्त हुई है?",
                    "options_en": ["Prathama", "Dvitiya", "Trutiya", "Chaturthi"],
                    "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
                    "answer_en": "Trutiya",
                    "answer_hi": "तृतीया"
                },
                {
                    "num": 8,
                    "question_en": "What is the meaning of 'सौहार्दं प्रकृतेः शोभा'?",
                    "question_hi": "'सौहार्दं प्रकृतेः शोभा' का क्या अर्थ है?",
                    "options_en": ["Power of nature", "Beauty of nature's harmony", "Strange witness", "Mother's love"],
                    "options_hi": ["प्रकृति की शक्ति", "प्रकृति के सौहार्द की सुंदरता", "विचित्र साक्षी", "मातृप्रेम"],
                    "answer_en": "Beauty of nature's harmony",
                    "answer_hi": "प्रकृति के सौहार्द की सुंदरता"
                },
                {
                    "num": 9,
                    "question_en": "Which Sandhi occurs in 'तत् + अपि = तदपि'?",
                    "question_hi": "'तत् + अपि = तदपि' में कौन सी सन्धि होती है?",
                    "options_en": ["Guna", "Vriddhi", "Yan", "Savarna Deergha"],
                    "options_hi": ["गुण", "वृद्धि", "यण्", "सवर्ण दीर्घ"],
                    "answer_en": "Yan",
                    "answer_hi": "यण्"
                },
                {
                    "num": 10,
                    "question_en": "What is the correct Sanskrit translation for 'school'?",
                    "question_hi": "'विद्यालय' का सही संस्कृत अनुवाद क्या है?",
                    "options_en": ["विद्यालयः", "पाठशाला", "शिक्षणालयः", "सर्वे उपर्युक्त"],
                    "options_hi": ["विद्यालयः", "पाठशाला", "शिक्षणालयः", "सभी उपर्युक्त"],
                    "answer_en": "सर्वे उपर्युक्त",
                    "answer_hi": "सभी उपर्युक्त"
                },
                {
                    "num": 11,
                    "question_en": "Which chapter describes a mother's unconditional love?",
                    "question_hi": "कौन सा अध्याय माँ के निस्वार्थ प्रेम का वर्णन करता है?",
                    "options_en": ["Janani Tulyavatsala", "Shuchiparyavaranam", "Subhashitani", "Veeravanita"],
                    "options_hi": ["जननी तुल्यवत्सला", "शुचिपर्यावरणम्", "सुभाषितानि", "वीरवनिता"],
                    "answer_en": "Janani Tulyavatsala",
                    "answer_hi": "जननी तुल्यवत्सला"
                },
                {
                    "num": 12,
                    "question_en": "What is the correct Samas vigraha for 'राजपुरुषः'?",
                    "question_hi": "'राजपुरुषः' का सही समास विग्रह क्या है?",
                    "options_en": ["राज्ञः पुरुषः", "राज्ञा पुरुषः", "राज्ञे पुरुषः", "राज्ञि पुरुषः"],
                    "options_hi": ["राज्ञः पुरुषः", "राज्ञा पुरुषः", "राज्ञे पुरुषः", "राज्ञि पुरुषः"],
                    "answer_en": "राज्ञः पुरुषः",
                    "answer_hi": "राज्ञः पुरुषः"
                },
                {
                    "num": 13,
                    "question_en": "Which of these is an Avyaya?",
                    "question_hi": "निम्नलिखित में से कौन अव्यय है?",
                    "options_en": ["च", "रामः", "पठति", "पुस्तकम्"],
                    "options_hi": ["च", "रामः", "पठति", "पुस्तकम्"],
                    "answer_en": "च",
                    "answer_hi": "च"
                },
                {
                    "num": 14,
                    "question_en": "What is the correct Pratyaya to form 'गन्तव्यम्' from 'गम्'?",
                    "question_hi": "'गम्' धातु से 'गन्तव्यम्' बनाने के लिए कौन सा प्रत्यय सही है?",
                    "options_en": ["क्त", "तव्यत्", "अनीयर्", "यत्"],
                    "options_hi": ["क्त", "तव्यत्", "अनीयर्", "यत्"],
                    "answer_en": "तव्यत्",
                    "answer_hi": "तव्यत्"
                },
                {
                    "num": 15,
                    "question_en": "Which chapter contains the subhashita 'अहिंसा परमो धर्मः'?",
                    "question_hi": "कौन सा अध्याय 'अहिंसा परमो धर्मः' सुभाषित समाहित करता है?",
                    "options_en": ["Subhashitani", "Shuchiparyavaranam", "Buddhirbalavati Sada", "Janani Tulyavatsala"],
                    "options_hi": ["सुभाषितानि", "शुचिपर्यावरणम्", "बुद्धिर्बलवती सदा", "जननी तुल्यवत्सला"],
                    "answer_en": "Subhashitani",
                    "answer_hi": "सुभाषितानि"
                },
                {
                    "num": 16,
                    "question_en": "What is the correct Sandhi for 'देव + इन्द्र = देवेन्द्र'?",
                    "question_hi": "'देव + इन्द्र = देवेन्द्र' में कौन सी सन्धि है?",
                    "options_en": ["Guna", "Vriddhi", "Yan", "Ayadi"],
                    "options_hi": ["गुण", "वृद्धि", "यण्", "अयादि"],
                    "answer_en": "Yan",
                    "answer_hi": "यण्"
                },
                {
                    "num": 17,
                    "question_en": "Which vibhakti is used in 'वृक्षात्'?",
                    "question_hi": "'वृक्षात्' में कौन सी विभक्ति प्रयुक्त हुई है?",
                    "options_en": ["Panchami", "Saptami", "Shashthi", "Trutiya"],
                    "options_hi": ["पञ्चमी", "सप्तमी", "षष्ठी", "तृतीया"],
                    "answer_en": "Panchami",
                    "answer_hi": "पञ्चमी"
                },
                {
                    "num": 18,
                    "question_en": "What is the correct Sanskrit translation for 'teacher'?",
                    "question_hi": "'शिक्षक' का सही संस्कृत अनुवाद क्या है?",
                    "options_en": ["शिक्षकः", "आचार्यः", "गुरुः", "सर्वे उपर्युक्त"],
                    "options_hi": ["शिक्षकः", "आचार्यः", "गुरुः", "सभी उपर्युक्त"],
                    "answer_en": "सर्वे उपर्युक्त",
                    "answer_hi": "सभी उपर्युक्त"
                },
                {
                    "num": 19,
                    "question_en": "Which chapter portrays nature as a witness to human actions?",
                    "question_hi": "कौन सा अध्याय प्रकृति को मानव क्रियाओं का साक्षी चित्रित करता है?",
                    "options_en": ["Vichitrah Sakshi", "Sharanagatih", "Sauhardam Prakriteh Shobha", "Veeravanita"],
                    "options_hi": ["विचित्रः साक्षी", "शरणागतिः", "सौहार्दं प्रकृतेः शोभा", "वीरवनिता"],
                    "answer_en": "Vichitrah Sakshi",
                    "answer_hi": "विचित्रः साक्षी"
                },
                {
                    "num": 20,
                    "question_en": "What type of Samas is 'महाराजः'?",
                    "question_hi": "'महाराजः' किस प्रकार का समास है?",
                    "options_en": ["Tatpurusha", "Bahuvrihi", "Dvandva", "Karmadharaya"],
                    "options_hi": ["तत्पुरुष", "बहुव्रीहि", "द्वन्द्व", "कर्मधारय"],
                    "answer_en": "Karmadharaya",
                    "answer_hi": "कर्मधारय"
                },
                {
                    "num": 21,
                    "question_en": "Which Lakar is used in 'गमिष्यति'?",
                    "question_hi": "'गमिष्यति' में कौन सा लकार प्रयुक्त हुआ है?",
                    "options_en": ["Lat", "Lrt", "Lot", "Lang"],
                    "options_hi": ["लट्", "लृट्", "लोट्", "लङ्"],
                    "answer_en": "Lrt",
                    "answer_hi": "लृट्"
                },
                {
                    "num": 22,
                    "question_en": "What is the correct Pratyaya to form 'पठित्वा' from 'पठ्'?",
                    "question_hi": "'पठ्' धातु से 'पठित्वा' बनाने के लिए कौन सा प्रत्यय सही है?",
                    "options_en": ["क्त्वा", "तुमुन्", "क्त", "ल्यप्"],
                    "options_hi": ["क्त्वा", "तुमुन्", "क्त", "ल्यप्"],
                    "answer_en": "क्त्वा",
                    "answer_hi": "क्त्वा"
                },
                {
                    "num": 23,
                    "question_en": "Which chapter describes the qualities of a brave woman?",
                    "question_hi": "कौन सा अध्याय एक वीर स्त्री के गुणों का वर्णन करता है?",
                    "options_en": ["Veeravanita", "Janani Tulyavatsala", "Buddhirbalavati Sada", "Sharanagatih"],
                    "options_hi": ["वीरवनिता", "जननी तुल्यवत्सला", "बुद्धिर्बलवती सदा", "शरणागतिः"],
                    "answer_en": "Veeravanita",
                    "answer_hi": "वीरवनिता"
                },
                {
                    "num": 24,
                    "question_en": "What is the correct Sandhi for 'सदा + एव = सदैव'?",
                    "question_hi": "'सदा + एव = सदैव' में कौन सी सन्धि है?",
                    "options_en": ["Guna", "Vriddhi", "Yan", "Ayadi"],
                    "options_hi": ["गुण", "वृद्धि", "यण्", "अयादि"],
                    "answer_en": "Ayadi",
                    "answer_hi": "अयादि"
                },
                {
                    "num": 25,
                    "question_en": "Which vibhakti is used in 'फलेभ्यः'?",
                    "question_hi": "'फलेभ्यः' में कौन सी विभक्ति प्रयुक्त हुई है?",
                    "options_en": ["Chaturthi", "Panchami", "Shashthi", "Saptami"],
                    "options_hi": ["चतुर्थी", "पञ्चमी", "षष्ठी", "सप्तमी"],
                    "answer_en": "Chaturthi",
                    "answer_hi": "चतुर्थी"
                },
                {
                    "num": 26,
                    "question_en": "What is the correct Sanskrit translation for 'water'?",
                    "question_hi": "'जल' का सही संस्कृत अनुवाद क्या है?",
                    "options_en": ["जलम्", "अम्बु", "उदकम्", "सर्वे उपर्युक्त"],
                    "options_hi": ["जलम्", "अम्बु", "उदकम्", "सभी उपर्युक्त"],
                    "answer_en": "सर्वे उपर्युक्त",
                    "answer_hi": "सभी उपर्युक्त"
                },
                {
                    "num": 27,
                    "question_en": "Which chapter emphasizes devotion and surrender to God?",
                    "question_hi": "कौन सा अध्याय ईश्वर के प्रति भक्ति और समर्पण पर बल देता है?",
                    "options_en": ["Sharanagatih", "Vichitrah Sakshi", "Subhashitani", "Shuchiparyavaranam"],
                    "options_hi": ["शरणागतिः", "विचित्रः साक्षी", "सुभाषितानि", "शुचिपर्यावरणम्"],
                    "answer_en": "Sharanagatih",
                    "answer_hi": "शरणागतिः"
                },
                {
                    "num": 28,
                    "question_en": "What type of Samas is 'चतुरङ्गम्'?",
                    "question_hi": "'चतुरङ्गम्' किस प्रकार का समास है?",
                    "options_en": ["Tatpurusha", "Bahuvrihi", "Dvandva", "Karmadharaya"],
                    "options_hi": ["तत्पुरुष", "बहुव्रीहि", "द्वन्द्व", "कर्मधारय"],
                    "answer_en": "Dvandva",
                    "answer_hi": "द्वन्द्व"
                },
                {
                    "num": 29,
                    "question_en": "Which Lakar is used in 'पठतु'?",
                    "question_hi": "'पठतु' में कौन सा लकार प्रयुक्त हुआ है?",
                    "options_en": ["Lat", "Lrt", "Lot", "Lang"],
                    "options_hi": ["लट्", "लृट्", "लोट्", "लङ्"],
                    "answer_en": "Lot",
                    "answer_hi": "लोट्"
                },
                {
                    "num": 30,
                    "question_en": "What is the correct Pratyaya to form 'गच्छन्' from 'गम्'?",
                    "question_hi": "'गम्' धातु से 'गच्छन्' बनाने के लिए कौन सा प्रत्यय सही है?",
                    "options_en": ["क्त", "शतृ", "क्तवतु", "अनीयर्"],
                    "options_hi": ["क्त", "शतृ", "क्तवतु", "अनीयर्"],
                    "answer_en": "शतृ",
                    "answer_hi": "शतृ"
                },
                {
                    "num": 31,
                    "question_en": "Which chapter contains the subhashita 'विद्या ददाति विनयम्'?",
                    "question_hi": "कौन सा अध्याय 'विद्या ददाति विनयम्' सुभाषित समाहित करता है?",
                    "options_en": ["Subhashitani", "Buddhirbalavati Sada", "Shuchiparyavaranam", "Janani Tulyavatsala"],
                    "options_hi": ["सुभाषितानि", "बुद्धिर्बलवती सदा", "शुचिपर्यावरणम्", "जननी तुल्यवत्सला"],
                    "answer_en": "Subhashitani",
                    "answer_hi": "सुभाषितानि"
                },
                {
                    "num": 32,
                    "question_en": "What is the correct Sandhi for 'तत् + ते = तत्ते'?",
                    "question_hi": "'तत् + ते = तत्ते' में कौन सी सन्धि है?",
                    "options_en": ["Guna", "Vriddhi", "Yan", "Ayadi"],
                    "options_hi": ["गुण", "वृद्धि", "यण्", "अयादि"],
                    "answer_en": "Ayadi",
                    "answer_hi": "अयादि"
                },
                {
                    "num": 33,
                    "question_en": "Which vibhakti is used in 'गुरोः'?",
                    "question_hi": "'गुरोः' में कौन सी विभक्ति प्रयुक्त हुई है?",
                    "options_en": ["Shashthi", "Saptami", "Panchami", "Chaturthi"],
                    "options_hi": ["षष्ठी", "सप्तमी", "पञ्चमी", "चतुर्थी"],
                    "answer_en": "Shashthi",
                    "answer_hi": "षष्ठी"
                },
                {
                    "num": 34,
                    "question_en": "What is the correct Sanskrit translation for 'book'?",
                    "question_hi": "'पुस्तक' का सही संस्कृत अनुवाद क्या है?",
                    "options_en": ["पुस्तकम्", "ग्रन्थः", "पुस्तिका", "सर्वे उपर्युक्त"],
                    "options_hi": ["पुस्तकम्", "ग्रन्थः", "पुस्तिका", "सभी उपर्युक्त"],
                    "answer_en": "सर्वे उपर्युक्त",
                    "answer_hi": "सभी उपर्युक्त"
                },
                {
                    "num": 35,
                    "question_en": "Which chapter describes the beauty of harmonious nature?",
                    "question_hi": "कौन सा अध्याय सामंजस्यपूर्ण प्रकृति की सुंदरता का वर्णन करता है?",
                    "options_en": ["Sauhardam Prakriteh Shobha", "Vichitrah Sakshi", "Sharanagatih", "Veeravanita"],
                    "options_hi": ["सौहार्दं प्रकृतेः शोभा", "विचित्रः साक्षी", "शरणागतिः", "वीरवनिता"],
                    "answer_en": "Sauhardam Prakriteh Shobha",
                    "answer_hi": "सौहार्दं प्रकृतेः शोभा"
                },
                {
                    "num": 36,
                    "question_en": "What type of Samas is 'दशाननः'?",
                    "question_hi": "'दशाननः' किस प्रकार का समास है?",
                    "options_en": ["Tatpurusha", "Bahuvrihi", "Dvandva", "Karmadharaya"],
                    "options_hi": ["तत्पुरुष", "बहुव्रीहि", "द्वन्द्व", "कर्मधारय"],
                    "answer_en": "Bahuvrihi",
                    "answer_hi": "बहुव्रीहि"
                },
                {
                    "num": 37,
                    "question_en": "Which Lakar is used in 'अपठत्'?",
                    "question_hi": "'अपठत्' में कौन सा लकार प्रयुक्त हुआ है?",
                    "options_en": ["Lat", "Lit", "Lut", "Lang"],
                    "options_hi": ["लट्", "लिट्", "लुट्", "लङ्"],
                    "answer_en": "Lang",
                    "answer_hi": "लङ्"
                },
                {
                    "num": 38,
                    "question_en": "What is the correct Pratyaya to form 'पठितः' from 'पठ्'?",
                    "question_hi": "'पठ्' धातु से 'पठितः' बनाने के लिए कौन सा प्रत्यय सही है?",
                    "options_en": ["क्त", "क्तवतु", "तव्यत्", "अनीयर्"],
                    "options_hi": ["क्त", "क्तवतु", "तव्यत्", "अनीयर्"],
                    "answer_en": "क्त",
                    "answer_hi": "क्त"
                },
                {
                    "num": 39,
                    "question_en": "Which chapter contains the subhashita 'सत्यमेव जयते'?",
                    "question_hi": "कौन सा अध्याय 'सत्यमेव जयते' सुभाषित समाहित करता है?",
                    "options_en": ["Subhashitani", "Buddhirbalavati Sada", "Shuchiparyavaranam", "Janani Tulyavatsala"],
                    "options_hi": ["सुभाषितानि", "बुद्धिर्बलवती सदा", "शुचिपर्यावरणम्", "जननी तुल्यवत्सला"],
                    "answer_en": "Subhashitani",
                    "answer_hi": "सुभाषितानि"
                },
                {
                    "num": 40,
                    "question_en": "What is the correct Sandhi for 'न + अस्ति = नास्ति'?",
                    "question_hi": "'न + अस्ति = नास्ति' में कौन सी सन्धि है?",
                    "options_en": ["Guna", "Vriddhi", "Yan", "Ayadi"],
                    "options_hi": ["गुण", "वृद्धि", "यण्", "अयादि"],
                    "answer_en": "Ayadi",
                    "answer_hi": "अयादि"
                },
                {
                    "num": 41,
                    "question_en": "Which vibhakti is used in 'विद्यालये'?",
                    "question_hi": "'विद्यालये' में कौन सी विभक्ति प्रयुक्त हुई है?",
                    "options_en": ["Saptami", "Shashthi", "Panchami", "Chaturthi"],
                    "options_hi": ["सप्तमी", "षष्ठी", "पञ्चमी", "चतुर्थी"],
                    "answer_en": "Saptami",
                    "answer_hi": "सप्तमी"
                },
                {
                    "num": 42,
                    "question_en": "What is the correct Sanskrit translation for 'student'?",
                    "question_hi": "'विद्यार्थी' का सही संस्कृत अनुवाद क्या है?",
                    "options_en": ["विद्यार्थी", "छात्रः", "शिष्यः", "सर्वे उपर्युक्त"],
                    "options_hi": ["विद्यार्थी", "छात्रः", "शिष्यः", "सभी उपर्युक्त"],
                    "answer_en": "सर्वे उपर्युक्त",
                    "answer_hi": "सभी उपर्युक्त"
                },
                {
                    "num": 43,
                    "question_en": "Which chapter describes the concept of surrender to the divine?",
                    "question_hi": "कौन सा अध्याय दैवीय शक्ति के प्रति समर्पण की अवधारणा का वर्णन करता है?",
                    "options_en": ["Sharanagatih", "Vichitrah Sakshi", "Sauhardam Prakriteh Shobha", "Veeravanita"],
                    "options_hi": ["शरणागतिः", "विचित्रः साक्षी", "सौहार्दं प्रकृतेः शोभा", "वीरवनिता"],
                    "answer_en": "Sharanagatih",
                    "answer_hi": "शरणागतिः"
                },
                {
                    "num": 44,
                    "question_en": "What type of Samas is 'यथाशक्ति'?",
                    "question_hi": "'यथाशक्ति' किस प्रकार का समास है?",
                    "options_en": ["Avyayibhava", "Bahuvrihi", "Dvandva", "Karmadharaya"],
                    "options_hi": ["अव्ययीभाव", "बहुव्रीहि", "द्वन्द्व", "कर्मधारय"],
                    "answer_en": "Avyayibhava",
                    "answer_hi": "अव्ययीभाव"
                },
                {
                    "num": 45,
                    "question_en": "Which Lakar is used in 'अपठः'?",
                    "question_hi": "'अपठः' में कौन सा लकार प्रयुक्त हुआ है?",
                    "options_en": ["Lat", "Lit", "Lut", "Lang"],
                    "options_hi": ["लट्", "लिट्", "लुट्", "लङ्"],
                    "answer_en": "Lang",
                    "answer_hi": "लङ्"
                },
                {
                    "num": 46,
                    "question_en": "What is the correct Pratyaya to form 'पठनीयम्' from 'पठ्'?",
                    "question_hi": "'पठ्' धातु से 'पठनीयम्' बनाने के लिए कौन सा प्रत्यय सही है?",
                    "options_en": ["क्त", "तव्यत्", "अनीयर्", "यत्"],
                    "options_hi": ["क्त", "तव्यत्", "अनीयर्", "यत्"],
                    "answer_en": "अनीयर्",
                    "answer_hi": "अनीयर्"
                },
                {
                    "num": 47,
                    "question_en": "Which chapter contains the subhashita 'अतिथि देवो भव'?",
                    "question_hi": "कौन सा अध्याय 'अतिथि देवो भव' सुभाषित समाहित करता है?",
                    "options_en": ["Subhashitani", "Buddhirbalavati Sada", "Shuchiparyavaranam", "Janani Tulyavatsala"],
                    "options_hi": ["सुभाषितानि", "बुद्धिर्बलवती सदा", "शुचिपर्यावरणम्", "जननी तुल्यवत्सला"],
                    "answer_en": "Subhashitani",
                    "answer_hi": "सुभाषितानि"
                },
                {
                    "num": 48,
                    "question_en": "What is the correct Sandhi for 'सः + अपि = सोऽपि'?",
                    "question_hi": "'सः + अपि = सोऽपि' में कौन सी सन्धि है?",
                    "options_en": ["Guna", "Vriddhi", "Savarna Deergha", "Ayadi"],
                    "options_hi": ["गुण", "वृद्धि", "सवर्ण दीर्घ", "अयादि"],
                    "answer_en": "Savarna Deergha",
                    "answer_hi": "सवर्ण दीर्घ"
                },
                {
                    "num": 49,
                    "question_en": "Which vibhakti is used in 'रामाय'?",
                    "question_hi": "'रामाय' में कौन सी विभक्ति प्रयुक्त हुई है?",
                    "options_en": ["Chaturthi", "Panchami", "Shashthi", "Saptami"],
                    "options_hi": ["चतुर्थी", "पञ्चमी", "षष्ठी", "सप्तमी"],
                    "answer_en": "Chaturthi",
                    "answer_hi": "चतुर्थी"
                },
                {
                    "num": 50,
                    "question_en": "What is the correct Sanskrit translation for 'knowledge'?",
                    "question_hi": "'ज्ञान' का सही संस्कृत अनुवाद क्या है?",
                    "options_en": ["ज्ञानम्", "विद्या", "बुद्धिः", "सर्वे उपर्युक्त"],
                    "options_hi": ["ज्ञानम्", "विद्या", "बुद्धिः", "सभी उपर्युक्त"],
                    "answer_en": "सर्वे उपर्युक्त",
                    "answer_hi": "सभी उपर्युक्त"
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