const questions = [
        
        
                {
                  "num": 1,
                  "question_en": "Which Sandhi occurs in 'तत् + अपि = तदपि'?",
                  "question_hi": "'तत् + अपि = तदपि' में कौन सी सन्धि होती है?",
                  "options_en": ["Guna", "Vriddhi", "Yan", "Savarna Deergha"],
                  "options_hi": ["गुण", "वृद्धि", "यण्", "सवर्ण दीर्घ"],
                  "answer_en": "Yan",
                  "answer_hi": "यण्"
                },
                {
                  "num": 2,
                  "question_en": "Which Sandhi is in 'देव + आलयः = देवालयः'?",
                  "question_hi": "'देव + आलयः = देवालयः' में कौन सी सन्धि है?",
                  "options_en": ["Guna", "Vriddhi", "Savarna Deergha", "Yan"],
                  "options_hi": ["गुण", "वृद्धि", "सवर्ण दीर्घ", "यण्"],
                  "answer_en": "Savarna Deergha",
                  "answer_hi": "सवर्ण दीर्घ"
                },
                {
                  "num": 3,
                  "question_en": "What is the Sandhi in 'हरि + ईश = हरीश'?",
                  "question_hi": "'हरि + ईश = हरीश' में कौन सी सन्धि है?",
                  "options_en": ["Guna", "Vriddhi", "Yan", "Ayadi"],
                  "options_hi": ["गुण", "वृद्धि", "यण्", "अयादि"],
                  "answer_en": "Yan",
                  "answer_hi": "यण्"
                },
                {
                  "num": 4,
                  "question_en": "Which Sandhi is in 'सदा + एव = सदैव'?",
                  "question_hi": "'सदा + एव = सदैव' में कौन सी सन्धि है?",
                  "options_en": ["Guna", "Vriddhi", "Yan", "Ayadi"],
                  "options_hi": ["गुण", "वृद्धि", "यण्", "अयादि"],
                  "answer_en": "Ayadi",
                  "answer_hi": "अयादि"
                },
                {
                  "num": 5,
                  "question_en": "What is the Sandhi in 'वाक् + ईशः = वागीशः'?",
                  "question_hi": "'वाक् + ईशः = वागीशः' में कौन सी सन्धि है?",
                  "options_en": ["Guna", "Vriddhi", "Yan", "Savarna Deergha"],
                  "options_hi": ["गुण", "वृद्धि", "यण्", "सवर्ण दीर्घ"],
                  "answer_en": "Yan",
                  "answer_hi": "यण्"
                },
                {
                  "num": 6,
                  "question_en": "Which Sandhi is in 'राम + उवाच = रामोवाच'?",
                  "question_hi": "'राम + उवाच = रामोवाच' में कौन सी सन्धि है?",
                  "options_en": ["Guna", "Vriddhi", "Yan", "Savarna Deergha"],
                  "options_hi": ["गुण", "वृद्धि", "यण्", "सवर्ण दीर्घ"],
                  "answer_en": "Guna",
                  "answer_hi": "गुण"
                },
                {
                  "num": 7,
                  "question_en": "What is the Sandhi in 'तत् + न = तन्न'?",
                  "question_hi": "'तत् + न = तन्न' में कौन सी सन्धि है?",
                  "options_en": ["Visarga Sandhi", "Yan Sandhi", "Guna Sandhi", "Vriddhi Sandhi"],
                  "options_hi": ["विसर्ग सन्धि", "यण् सन्धि", "गुण सन्धि", "वृद्धि सन्धि"],
                  "answer_en": "Visarga Sandhi",
                  "answer_hi": "विसर्ग सन्धि"
                },
                {
                  "num": 8,
                  "question_en": "Which Sandhi is in 'शिव + अर्पणम् = शिवार्पणम्'?",
                  "question_hi": "'शिव + अर्पणम् = शिवार्पणम्' में कौन सी सन्धि है?",
                  "options_en": ["Guna", "Vriddhi", "Yan", "Savarna Deergha"],
                  "options_hi": ["गुण", "वृद्धि", "यण्", "सवर्ण दीर्घ"],
                  "answer_en": "Guna",
                  "answer_hi": "गुण"
                },
                {
                  "num": 9,
                  "question_en": "What is the Sandhi in 'महत् + आनन्दः = महदानन्दः'?",
                  "question_hi": "'महत् + आनन्दः = महदानन्दः' में कौन सी सन्धि है?",
                  "options_en": ["Visarga Sandhi", "Yan Sandhi", "Guna Sandhi", "Vriddhi Sandhi"],
                  "options_hi": ["विसर्ग सन्धि", "यण् सन्धि", "गुण सन्धि", "वृद्धि सन्धि"],
                  "answer_en": "Visarga Sandhi",
                  "answer_hi": "विसर्ग सन्धि"
                },
                {
                  "num": 10,
                  "question_en": "Which Sandhi is in 'दिक् + अम्बरः = दिगम्बरः'?",
                  "question_hi": "'दिक् + अम्बरः = दिगम्बरः' में कौन सी सन्धि है?",
                  "options_en": ["Visarga Sandhi", "Yan Sandhi", "Guna Sandhi", "Vriddhi Sandhi"],
                  "options_hi": ["विसर्ग सन्धि", "यण् सन्धि", "गुण सन्धि", "वृद्धि सन्धि"],
                  "answer_en": "Visarga Sandhi",
                  "answer_hi": "विसर्ग सन्धि"
                },
                {
                  "num": 11,
                  "question_en": "What is the Samas in 'राजपुत्रः'?",
                  "question_hi": "'राजपुत्रः' में कौन सा समास है?",
                  "options_en": ["Tatpurusha", "Karmadharaya", "Dvandva", "Bahuvrihi"],
                  "options_hi": ["तत्पुरुष", "कर्मधारय", "द्वन्द्व", "बहुव्रीहि"],
                  "answer_en": "Tatpurusha",
                  "answer_hi": "तत्पुरुष"
                },
                {
                  "num": 12,
                  "question_en": "Which Samas is in 'पीताम्बरः'?",
                  "question_hi": "'पीताम्बरः' में कौन सा समास है?",
                  "options_en": ["Tatpurusha", "Karmadharaya", "Dvandva", "Bahuvrihi"],
                  "options_hi": ["तत्पुरुष", "कर्मधारय", "द्वन्द्व", "बहुव्रीहि"],
                  "answer_en": "Bahuvrihi",
                  "answer_hi": "बहुव्रीहि"
                },
                {
                  "num": 13,
                  "question_en": "What is the Samas in 'माता-पिता'?",
                  "question_hi": "'माता-पिता' में कौन सा समास है?",
                  "options_en": ["Tatpurusha", "Karmadharaya", "Dvandva", "Bahuvrihi"],
                  "options_hi": ["तत्पुरुष", "कर्मधारय", "द्वन्द्व", "बहुव्रीहि"],
                  "answer_en": "Dvandva",
                  "answer_hi": "द्वन्द्व"
                },
                {
                  "num": 14,
                  "question_en": "Which Samas is in 'चक्रपाणिः'?",
                  "question_hi": "'चक्रपाणिः' में कौन सा समास है?",
                  "options_en": ["Tatpurusha", "Karmadharaya", "Dvandva", "Bahuvrihi"],
                  "options_hi": ["तत्पुरुष", "कर्मधारय", "द्वन्द्व", "बहुव्रीहि"],
                  "answer_en": "Bahuvrihi",
                  "answer_hi": "बहुव्रीहि"
                },
                {
                  "num": 15,
                  "question_en": "What is the Samas in 'पंचवटी'?",
                  "question_hi": "'पंचवटी' में कौन सा समास है?",
                  "options_en": ["Tatpurusha", "Dvigu", "Dvandva", "Bahuvrihi"],
                  "options_hi": ["तत्पुरुष", "द्विगु", "द्वन्द्व", "बहुव्रीहि"],
                  "answer_en": "Dvigu",
                  "answer_hi": "द्विगु"
                },
                {
                  "num": 16,
                  "question_en": "Which Vibhakti is used in 'रामः वनम् गच्छति'?",
                  "question_hi": "'रामः वनम् गच्छति' में कौन सी विभक्ति है?",
                  "options_en": ["Prathma", "Dvitiya", "Tritiya", "Chaturthi"],
                  "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
                  "answer_en": "Dvitiya",
                  "answer_hi": "द्वितीया"
                },
                {
                  "num": 17,
                  "question_en": "What is the Pratyaya in 'गम्यते'?",
                  "question_hi": "'गम्यते' में कौन सा प्रत्यय है?",
                  "options_en": ["तुमुन्", "क्त्वा", "ल्यप्", "यक्"],
                  "options_hi": ["तुमुन्", "क्त्वा", "ल्यप्", "यक्"],
                  "answer_en": "यक्",
                  "answer_hi": "यक्"
                },
                {
                  "num": 18,
                  "question_en": "Which is the correct Sandhi of 'न + अस्ति'?",
                  "question_hi": "'न + अस्ति' का सन्धि युक्त रूप क्या है?",
                  "options_en": ["नस्ति", "नास्ति", "नयस्ति", "नाऽस्ति"],
                  "options_hi": ["नस्ति", "नास्ति", "नयस्ति", "नाऽस्ति"],
                  "answer_en": "नास्ति",
                  "answer_hi": "नास्ति"
                },
                {
                  "num": 19,
                  "question_en": "What is the Sandhi in 'गङ्गा + उदकम् = गङ्गोदकम्'?",
                  "question_hi": "'गङ्गा + उदकम् = गङ्गोदकम्' में कौन सी सन्धि है?",
                  "options_en": ["Guna", "Vriddhi", "Yan", "Savarna Deergha"],
                  "options_hi": ["गुण", "वृद्धि", "यण्", "सवर्ण दीर्घ"],
                  "answer_en": "Guna",
                  "answer_hi": "गुण"
                },
                {
                  "num": 20,
                  "question_en": "Which Sandhi is in 'सः + अपि = सोऽपि'?",
                  "question_hi": "'सः + अपि = सोऽपि' में कौन सी सन्धि है?",
                  "options_en": ["Visarga Sandhi", "Yan Sandhi", "Guna Sandhi", "Vriddhi Sandhi"],
                  "options_hi": ["विसर्ग सन्धि", "यण् सन्धि", "गुण सन्धि", "वृद्धि सन्धि"],
                  "answer_en": "Visarga Sandhi",
                  "answer_hi": "विसर्ग सन्धि"
                }
              ,
              
                {
                  "num": 21,
                  "question_en": "Which Sandhi occurs in 'वाक् + मयम् = वाङ्मयम्'?",
                  "question_hi": "'वाक् + मयम् = वाङ्मयम्' में कौन सी सन्धि होती है?",
                  "options_en": ["Guna", "Vriddhi", "Yan", "Visarga Sandhi"],
                  "options_hi": ["गुण", "वृद्धि", "यण्", "विसर्ग सन्धि"],
                  "answer_en": "Yan",
                  "answer_hi": "यण्"
                },
                {
                  "num": 22,
                  "question_en": "What is the Samas in 'नीलकण्ठः' (Neelkanth)?",
                  "question_hi": "'नीलकण्ठः' में कौन सा समास है?",
                  "options_en": ["Tatpurusha", "Karmadharaya", "Bahuvrihi", "Dvandva"],
                  "options_hi": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "द्वन्द्व"],
                  "answer_en": "Bahuvrihi",
                  "answer_hi": "बहुव्रीहि"
                },
                {
                  "num": 23,
                  "question_en": "Which Vibhakti is used in 'रामेण फलं खाद्यते'?",
                  "question_hi": "'रामेण फलं खाद्यते' में कौन सी विभक्ति है?",
                  "options_en": ["Prathma", "Dvitiya", "Tritiya", "Chaturthi"],
                  "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "चतुर्थी"],
                  "answer_en": "Tritiya",
                  "answer_hi": "तृतीया"
                },
                {
                  "num": 24,
                  "question_en": "What is the Sandhi in 'सः + एव = स एव'?",
                  "question_hi": "'सः + एव = स एव' में कौन सी सन्धि है?",
                  "options_en": ["No Sandhi", "Visarga Sandhi", "Yan Sandhi", "Guna Sandhi"],
                  "options_hi": ["सन्धि नहीं", "विसर्ग सन्धि", "यण् सन्धि", "गुण सन्धि"],
                  "answer_en": "No Sandhi",
                  "answer_hi": "सन्धि नहीं"
                },
                {
                  "num": 25,
                  "question_en": "Which Sandhi is in 'देव + इन्द्रः = देवेन्द्रः'?",
                  "question_hi": "'देव + इन्द्रः = देवेन्द्रः' में कौन सी सन्धि है?",
                  "options_en": ["Guna", "Vriddhi", "Yan", "Ayadi"],
                  "options_hi": ["गुण", "वृद्धि", "यण्", "अयादि"],
                  "answer_en": "Guna",
                  "answer_hi": "गुण"
                },
                {
                  "num": 26,
                  "question_en": "What is the Samas in 'त्रिभुवनम्' (Three Worlds)?",
                  "question_hi": "'त्रिभुवनम्' में कौन सा समास है?",
                  "options_en": ["Dvigu", "Tatpurusha", "Dvandva", "Bahuvrihi"],
                  "options_hi": ["द्विगु", "तत्पुरुष", "द्वन्द्व", "बहुव्रीहि"],
                  "answer_en": "Dvigu",
                  "answer_hi": "द्विगु"
                },
                {
                  "num": 27,
                  "question_en": "Which is the correct Sandhi of 'हरि + अयनम् = ?'",
                  "question_hi": "'हरि + अयनम्' का सन्धि युक्त रूप क्या है?",
                  "options_en": ["हरियनम्", "हरयनम्", "हर्ययनम्", "हरय्यनम्"],
                  "options_hi": ["हरियनम्", "हरयनम्", "हर्ययनम्", "हरय्यनम्"],
                  "answer_en": "हर्ययनम्",
                  "answer_hi": "हर्ययनम्"
                },
                {
                  "num": 28,
                  "question_en": "What is the Pratyaya in 'पठितुम्'?",
                  "question_hi": "'पठितुम्' में कौन सा प्रत्यय है?",
                  "options_en": ["क्त्वा", "तुमुन्", "ल्यप्", "शतृ"],
                  "options_hi": ["क्त्वा", "तुमुन्", "ल्यप्", "शतृ"],
                  "answer_en": "तुमुन्",
                  "answer_hi": "तुमुन्"
                },
                {
                  "num": 29,
                  "question_en": "Which Sandhi is in 'अति + अन्तः = अत्यन्तः'?",
                  "question_hi": "'अति + अन्तः = अत्यन्तः' में कौन सी सन्धि है?",
                  "options_en": ["Yan", "Guna", "Vriddhi", "Ayadi"],
                  "options_hi": ["यण्", "गुण", "वृद्धि", "अयादि"],
                  "answer_en": "Yan",
                  "answer_hi": "यण्"
                },
                {
                  "num": 30,
                  "question_en": "What is the Samas in 'राजदन्तः' (Elephant)?",
                  "question_hi": "'राजदन्तः' में कौन सा समास है?",
                  "options_en": ["Tatpurusha", "Karmadharaya", "Bahuvrihi", "Dvandva"],
                  "options_hi": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "द्वन्द्व"],
                  "answer_en": "Bahuvrihi",
                  "answer_hi": "बहुव्रीहि"
                },
                {
                  "num": 31,
                  "question_en": "Which Vibhakti is in 'फलानि पतन्ति'?",
                  "question_hi": "'फलानि पतन्ति' में कौन सी विभक्ति है?",
                  "options_en": ["Prathma", "Dvitiya", "Tritiya", "Saptami"],
                  "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "सप्तमी"],
                  "answer_en": "Prathma",
                  "answer_hi": "प्रथमा"
                },
                {
                  "num": 32,
                  "question_en": "What is the Sandhi in 'तत् + लयः = तल्लयः'?",
                  "question_hi": "'तत् + लयः = तल्लयः' में कौन सी सन्धि है?",
                  "options_en": ["Visarga Sandhi", "Yan Sandhi", "Guna Sandhi", "Vriddhi Sandhi"],
                  "options_hi": ["विसर्ग सन्धि", "यण् सन्धि", "गुण सन्धि", "वृद्धि सन्धि"],
                  "answer_en": "Visarga Sandhi",
                  "answer_hi": "विसर्ग सन्धि"
                },
                {
                  "num": 33,
                  "question_en": "Which is the correct Sandhi of 'गिरि + इन्द्रः = ?'",
                  "question_hi": "'गिरि + इन्द्रः' का सन्धि युक्त रूप क्या है?",
                  "options_en": ["गिरीन्द्रः", "गिर्यिन्द्रः", "गिरीन्द्रः", "गिरीन्द्रः"],
                  "options_hi": ["गिरीन्द्रः", "गिर्यिन्द्रः", "गिरीन्द्रः", "गिरीन्द्रः"],
                  "answer_en": "गिरीन्द्रः",
                  "answer_hi": "गिरीन्द्रः"
                },
                {
                  "num": 34,
                  "question_en": "What is the Pratyaya in 'गतः'?",
                  "question_hi": "'गतः' में कौन सा प्रत्यय है?",
                  "options_en": ["क्त", "क्तवतु", "शानच्", "ल्यप्"],
                  "options_hi": ["क्त", "क्तवतु", "शानच्", "ल्यप्"],
                  "answer_en": "क्त",
                  "answer_hi": "क्त"
                },
                {
                  "num": 35,
                  "question_en": "Which Sandhi is in 'अनु + एषणम् = अन्वेषणम्'?",
                  "question_hi": "'अनु + एषणम् = अन्वेषणम्' में कौन सी सन्धि है?",
                  "options_en": ["Yan", "Guna", "Vriddhi", "Ayadi"],
                  "options_hi": ["यण्", "गुण", "वृद्धि", "अयादि"],
                  "answer_en": "Yan",
                  "answer_hi": "यण्"
                },
                {
                  "num": 36,
                  "question_en": "What is the Samas in 'चन्द्रशेखरः' (Lord Shiva)?",
                  "question_hi": "'चन्द्रशेखरः' में कौन सा समास है?",
                  "options_en": ["Tatpurusha", "Karmadharaya", "Bahuvrihi", "Dvandva"],
                  "options_hi": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "द्वन्द्व"],
                  "answer_en": "Bahuvrihi",
                  "answer_hi": "बहुव्रीहि"
                },
                {
                  "num": 37,
                  "question_en": "Which Vibhakti is in 'वृक्षात् पत्रं पतति'?",
                  "question_hi": "'वृक्षात् पत्रं पतति' में कौन सी विभक्ति है?",
                  "options_en": ["Panchami", "Saptami", "Tritiya", "Chaturthi"],
                  "options_hi": ["पञ्चमी", "सप्तमी", "तृतीया", "चतुर्थी"],
                  "answer_en": "Panchami",
                  "answer_hi": "पञ्चमी"
                },
                {
                  "num": 38,
                  "question_en": "What is the Sandhi in 'शम्भु + ईशः = शम्भ्वीशः'?",
                  "question_hi": "'शम्भु + ईशः = शम्भ्वीशः' में कौन सी सन्धि है?",
                  "options_en": ["Yan", "Guna", "Vriddhi", "Ayadi"],
                  "options_hi": ["यण्", "गुण", "वृद्धि", "अयादि"],
                  "answer_en": "Yan",
                  "answer_hi": "यण्"
                },
                {
                  "num": 39,
                  "question_en": "Which is the correct Sandhi of 'सु + आगतम् = ?'",
                  "question_hi": "'सु + आगतम्' का सन्धि युक्त रूप क्या है?",
                  "options_en": ["स्वागतम्", "सुवागतम्", "सूआगतम्", "स्वागतम्"],
                  "options_hi": ["स्वागतम्", "सुवागतम्", "सूआगतम्", "स्वागतम्"],
                  "answer_en": "स्वागतम्",
                  "answer_hi": "स्वागतम्"
                },
                {
                  "num": 40,
                  "question_en": "What is the Pratyaya in 'कृत्वा'?",
                  "question_hi": "'कृत्वा' में कौन सा प्रत्यय है?",
                  "options_en": ["क्त्वा", "तुमुन्", "ल्यप्", "क्त"],
                  "options_hi": ["क्त्वा", "तुमुन्", "ल्यप्", "क्त"],
                  "answer_en": "क्त्वा",
                  "answer_hi": "क्त्वा"
                },
                {
                  "num": 41,
                  "question_en": "Which Sandhi is in 'अधि + इत्य = अधीत्य'?",
                  "question_hi": "'अधि + इत्य = अधीत्य' में कौन सी सन्धि है?",
                  "options_en": ["Yan", "Guna", "Vriddhi", "Ayadi"],
                  "options_hi": ["यण्", "गुण", "वृद्धि", "अयादि"],
                  "answer_en": "Yan",
                  "answer_hi": "यण्"
                },
                {
                  "num": 42,
                  "question_en": "What is the Samas in 'दशाननः' (Ravana)?",
                  "question_hi": "'दशाननः' में कौन सा समास है?",
                  "options_en": ["Tatpurusha", "Karmadharaya", "Bahuvrihi", "Dvandva"],
                  "options_hi": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "द्वन्द्व"],
                  "answer_en": "Bahuvrihi",
                  "answer_hi": "बहुव्रीहि"
                },
                {
                  "num": 43,
                  "question_en": "Which Vibhakti is in 'ग्रामं गच्छामि'?",
                  "question_hi": "'ग्रामं गच्छामि' में कौन सी विभक्ति है?",
                  "options_en": ["Prathma", "Dvitiya", "Tritiya", "Saptami"],
                  "options_hi": ["प्रथमा", "द्वितीया", "तृतीया", "सप्तमी"],
                  "answer_en": "Dvitiya",
                  "answer_hi": "द्वितीया"
                },
                {
                  "num": 44,
                  "question_en": "What is the Sandhi in 'विभु + ईशः = विभ्वीशः'?",
                  "question_hi": "'विभु + ईशः = विभ्वीशः' में कौन सी सन्धि है?",
                  "options_en": ["Yan", "Guna", "Vriddhi", "Ayadi"],
                  "options_hi": ["यण्", "गुण", "वृद्धि", "अयादि"],
                  "answer_en": "Yan",
                  "answer_hi": "यण्"
                },
                {
                  "num": 45,
                  "question_en": "Which is the correct Sandhi of 'नमः + अस्तु = ?'",
                  "question_hi": "'नमः + अस्तु' का सन्धि युक्त रूप क्या है?",
                  "options_en": ["नमोऽस्तु", "नमोस्तु", "नम अस्तु", "नमहस्तु"],
                  "options_hi": ["नमोऽस्तु", "नमोस्तु", "नम अस्तु", "नमहस्तु"],
                  "answer_en": "नमोऽस्तु",
                  "answer_hi": "नमोऽस्तु"
                },
                {
                  "num": 46,
                  "question_en": "What is the Pratyaya in 'दृष्ट्वा'?",
                  "question_hi": "'दृष्ट्वा' में कौन सा प्रत्यय है?",
                  "options_en": ["क्त्वा", "तुमुन्", "ल्यप्", "क्त"],
                  "options_hi": ["क्त्वा", "तुमुन्", "ल्यप्", "क्त"],
                  "answer_en": "क्त्वा",
                  "answer_hi": "क्त्वा"
                },
                {
                  "num": 47,
                  "question_en": "Which Sandhi is in 'पितृ + ऋणम् = पितॄणम्'?",
                  "question_hi": "'पितृ + ऋणम् = पितॄणम्' में कौन सी सन्धि है?",
                  "options_en": ["Guna", "Vriddhi", "Yan", "Savarna Deergha"],
                  "options_hi": ["गुण", "वृद्धि", "यण्", "सवर्ण दीर्घ"],
                  "answer_en": "Vriddhi",
                  "answer_hi": "वृद्धि"
                },
                {
                  "num": 48,
                  "question_en": "What is the Samas in 'यथाशक्ति'?",
                  "question_hi": "'यथाशक्ति' में कौन सा समास है?",
                  "options_en": ["Avyayibhava", "Tatpurusha", "Dvandva", "Bahuvrihi"],
                  "options_hi": ["अव्ययीभाव", "तत्पुरुष", "द्वन्द्व", "बहुव्रीहि"],
                  "answer_en": "Avyayibhava",
                  "answer_hi": "अव्ययीभाव"
                },
                {
                  "num": 49,
                  "question_en": "Which Vibhakti is in 'रामस्य पुस्तकम्'?",
                  "question_hi": "'रामस्य पुस्तकम्' में कौन सी विभक्ति है?",
                  "options_en": ["Shashthi", "Panchami", "Saptami", "Tritiya"],
                  "options_hi": ["षष्ठी", "पञ्चमी", "सप्तमी", "तृतीया"],
                  "answer_en": "Shashthi",
                  "answer_hi": "षष्ठी"
                },
                {
                  "num": 50,
                  "question_en": "What is the Sandhi in 'अग्नि + अर्चिः = अग्न्यर्चिः'?",
                  "question_hi": "'अग्नि + अर्चिः = अग्न्यर्चिः' में कौन सी सन्धि है?",
                  "options_en": ["Yan", "Guna", "Vriddhi", "Ayadi"],
                  "options_hi": ["यण्", "गुण", "वृद्धि", "अयादि"],
                  "answer_en": "Yan",
                  "answer_hi": "यण्"
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