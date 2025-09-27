
const questions = [
        {
                "num": 1,
                "question_en": "Which is a proper noun?",
                "question_hi": "कौन-सी व्यक्तिवाचक संज्ञा है?",
                "options_en": ["City", "Delhi", "River", "Mountain"],
                "options_hi": ["शहर", "दिल्ली", "नदी", "पहाड़"],
                "answer_en": "Delhi",
                "answer_hi": "दिल्ली"
        },
        {
                "num": 2,
                "question_en": "Replace the noun with pronoun: 'राम पढ़ता है।'",
                "question_hi": "'राम पढ़ता है।' में संज्ञा के लिए सर्वनाम चुनें",
                "options_en": ["वह", "यह", "हम", "तुम"],
                "options_hi": ["वह", "यह", "हम", "तुम"],
                "answer_en": "वह",
                "answer_hi": "वह"
        },
        {
                "num": 3,
                "question_en": "Identify adjective: 'वह लाल गुलाब सुंदर है।'",
                "question_hi": "'वह लाल गुलाब सुंदर है।' में विशेषण कौन-सा है?",
                "options_en": ["वह", "लाल", "गुलाब", "सुंदर"],
                "options_hi": ["वह", "लाल", "गुलाब", "सुंदर"],
                "answer_en": "लाल",
                "answer_hi": "लाल"
        },
        {
                "num": 4,
                "question_en": "Verb in 'बच्चा खेल रहा है।'",
                "question_hi": "'बच्चा खेल रहा है।' में क्रिया क्या है?",
                "options_en": ["बच्चा", "खेल", "रहा", "है"],
                "options_hi": ["बच्चा", "खेल", "रहा", "है"],
                "answer_en": "खेल",
                "answer_hi": "खेल"
        },
        {
                "num": 5,
                "question_en": "Present tense of 'खाया'?",
                "question_hi": "'खाया' का वर्तमान काल क्या है?",
                "options_en": ["खाता है", "खाएगा", "खाया था", "खाऊँगा"],
                "options_hi": ["खाता है", "खाएगा", "खाया था", "खाऊँगा"],
                "answer_en": "खाता है",
                "answer_hi": "खाता है"
        },
        {
                "num": 6,
                "question_en": "Active voice of 'पत्र लिखा जाता है।'",
                "question_hi": "'पत्र लिखा जाता है।' का कर्तृवाच्य रूप क्या है?",
                "options_en": ["पत्र लिखता है", "वह पत्र लिखता है", "मैं पत्र लिखता हूँ", "पत्र लिखो"],
                "options_hi": ["पत्र लिखता है", "वह पत्र लिखता है", "मैं पत्र लिखता हूँ", "पत्र लिखो"],
                "answer_en": "वह पत्र लिखता है",
                "answer_hi": "वह पत्र लिखता है"
        },
        {
                "num": 7,
                "question_en": "Correct punctuation: 'वह बाजार गया_ फल खरीदा_'",
                "question_hi": "'वह बाजार गया_ फल खरीदा_' में सही विराम चिह्न क्या है?",
                "options_en": ["।, ।", "!, ?", ",, ।", "?, !"],
                "options_hi": ["।, ।", "!, ?", ",, ।", "?, !"],
                "answer_en": "।, ।",
                "answer_hi": "।, ।"
        },
        {
                "num": 8,
                "question_en": "Type of समास in 'राजपुत्र'?",
                "question_hi": "'राजपुत्र' में कौन-सा समास है?",
                "options_en": ["तत्पुरुष", "कर्मधारय", "द्विगु", "अव्ययीभाव"],
                "options_hi": ["तत्पुरुष", "कर्मधारय", "द्विगु", "अव्ययीभाव"],
                "answer_en": "तत्पुरुष",
                "answer_hi": "तत्पुरुष"
        },
        {
                "num": 9,
                "question_en": "Meaning of 'आँखों का तारा'?",
                "question_hi": "'आँखों का तारा' का अर्थ क्या है?",
                "options_en": ["Star", "Favorite person", "Eye problem", "Bright light"],
                "options_hi": ["तारा", "प्रिय व्यक्ति", "आँख की समस्या", "तेज रोशनी"],
                "answer_en": "Favorite person",
                "answer_hi": "प्रिय व्यक्ति"
        },
        {
                "num": 10,
                "question_en": "Complete the proverb: 'अंधों में काना ___'",
                "question_hi": "लोकोक्ति पूरी करें: 'अंधों में काना ___'",
                "options_en": ["राजा", "सिपाही", "मंत्री", "सेनापति"],
                "options_hi": ["राजा", "सिपाही", "मंत्री", "सेनापति"],
                "answer_en": "राजा",
                "answer_hi": "राजा"
        },

        {
                "num": 11,
                "question_en": "Identify the suffix in 'पढ़ाई'?",
                "question_hi": "'पढ़ाई' में प्रत्यय क्या है?",
                "options_en": ["पढ़", "आई", "ई", "आह"],
                "options_hi": ["पढ़", "आई", "ई", "आह"],
                "answer_en": "आई",
                "answer_hi": "आई"
        },
        {
                "num": 12,
                "question_en": "Gender of 'गाय'?",
                "question_hi": "'गाय' का लिंग क्या है?",
                "options_en": ["Masculine", "Feminine", "Neuter", "Both"],
                "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "दोनों"],
                "answer_en": "Feminine",
                "answer_hi": "स्त्रीलिंग"
        }
        ,

        {
                "num": 11,
                "question_en": "What is the purpose of a 'subject line' in formal letters?",
                "question_hi": "औपचारिक पत्र में 'विषय पंक्ति' का क्या उद्देश्य है?",
                "options_en": ["Decoration", "Indicates main purpose", "Shows sender's name", "Not necessary"],
                "options_hi": ["सजावट", "मुख्य उद्देश्य बताता है", "प्रेषक का नाम दिखाता है", "आवश्यक नहीं"],
                "answer_en": "Indicates main purpose",
                "answer_hi": "मुख्य उद्देश्य बताता है",
                "attempted": false
        },
        {
                "num": 12,
                "question_en": "Which salutation is appropriate for unknown recipients?",
                "question_hi": "अज्ञात प्राप्तकर्ता के लिए कौनसा अभिवादन उचित है?",
                "options_en": ["Dear Friend", "Respected Sir/Madam", "Hello", "Hey there"],
                "options_hi": ["प्रिय मित्र", "आदरणीय महोदय/महोदया", "नमस्ते", "अरे वहाँ"],
                "answer_en": "Respected Sir/Madam",
                "answer_hi": "आदरणीय महोदय/महोदया",
                "attempted": false
        },

        {
                "num": 13,
                "question_en": "Identify the prefix in 'सहपाठी'",
                "question_hi": "'सहपाठी' में उपसर्ग क्या है?",
                "options_en": ["सह", "पाठी", "पाठ", "ई"],
                "options_hi": ["सह", "पाठी", "पाठ", "ई"],
                "answer_en": "सह",
                "answer_hi": "सह"
        },
        {
                "num": 14,
                "question_en": "Gender of 'पुस्तक'",
                "question_hi": "'पुस्तक' का लिंग क्या है?",
                "options_en": ["Masculine", "Feminine", "Neuter", "Both"],
                "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "नपुंसकलिंग", "दोनों"],
                "answer_en": "Feminine",
                "answer_hi": "स्त्रीलिंग"
        },
        {
                "num": 15,
                "question_en": "Compound word type in 'चायपत्ती'",
                "question_hi": "'चायपत्ती' में कौन-सा समास है?",
                "options_en": ["तत्पुरुष", "द्वंद्व", "कर्मधारय", "बहुव्रीहि"],
                "options_hi": ["तत्पुरुष", "द्वंद्व", "कर्मधारय", "बहुव्रीहि"],
                "answer_en": "तत्पुरुष",
                "answer_hi": "तत्पुरुष"
        }
        ,
        {
                "num": 16,
                "question_en": "Which poetic device is used in the line 'मेरे तो गिरधर गोपाल, दूसरो न कोई'?",
                "question_hi": "'मेरे तो गिरधर गोपाल, दूसरो न कोई' में कौन-सा अलंकार है?",
                "options_en": ["Anupras", "Rupak", "Shlesh", "Atishayokti"],
                "options_hi": ["अनुप्रास", "रूपक", "श्लेष", "अतिशयोक्ति"],
                "answer_en": "Rupak",
                "answer_hi": "रूपक"
        }
        ,
        {
                "num": 17,
                "question_en": "What is the correct form of the verb in 'वह रोज स्कूल ____ है'?",
                "question_hi": "'वह रोज स्कूल ____ है' में सही क्रिया रूप क्या है?",
                "options_en": ["जाता", "जाती", "जाते", "जाएगा"],
                "options_hi": ["जाता", "जाती", "जाते", "जाएगा"],
                "answer_en": "जाता",
                "answer_hi": "जाता"
        }
        ,
        {
                "num": 18,
                "question_en": "Which punctuation mark is used at the end of an interrogative sentence?",
                "question_hi": "प्रश्नवाचक वाक्य के अंत में कौन-सा विराम चिह्न लगता है?",
                "options_en": ["Full stop (।)", "Comma (,)", "Question mark (?)", "Exclamation mark (!)"],
                "options_hi": ["पूर्ण विराम (।)", "अल्प विराम (,)", "प्रश्नवाचक चिह्न (?)", "विस्मयादिबोधक चिह्न (!)"],
                "answer_en": "Question mark (?)",
                "answer_hi": "प्रश्नवाचक चिह्न (?)"
        }
        ,
        {
                "num": 19,
                "question_en": "What is the meaning of the idiom 'आँख का तारा'?",
                "question_hi": "'आँख का तारा' मुहावरे का अर्थ क्या है?",
                "options_en": ["Very bright", "Favourite person", "Blindness", "Tears in eyes"],
                "options_hi": ["बहुत चमकीला", "प्रिय व्यक्ति", "अंधापन", "आँखों में आँसू"],
                "answer_en": "Favourite person",
                "answer_hi": "प्रिय व्यक्ति"
        }
        ,
        {
                "num": 20,
                "question_en": "Which type of essay is 'मोबाइल फोन का दुरुपयोग'?",
                "question_hi": "'मोबाइल फोन का दुरुपयोग' किस प्रकार का निबंध है?",
                "options_en": ["Descriptive", "Narrative", "Argumentative", "Reflective"],
                "options_hi": ["वर्णनात्मक", "कथात्मक", "तर्कपूर्ण", "विचारात्मक"],
                "answer_en": "Argumentative",
                "answer_hi": "तर्कपूर्ण"
        },

        {
                "num": 21,
                "question_en": "Which voice is used in the sentence: 'काम किया गया'?",
                "question_hi": "'काम किया गया' वाक्य में कौन-सा वाच्य है? ",
                "options_en": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "नहीं कह सकते"],
                "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "नहीं कह सकते"],
                "answer_en": "भाववाच्य",
                "answer_hi": "भाववाच्य"
        },
        {
                "num": 22,
                "question_en": "Which of the following is a synonym (पर्यायवाची) of 'अग्नि'?",
                "question_hi": "'अग्नि' का पर्यायवाची शब्द कौन-सा है?",
                "options_en": ["वायु", "जल", "अनल", "आकाश"],
                "options_hi": ["वायु", "जल", "अनल", "आकाश"],
                "answer_en": "अनल",
                "answer_hi": "अनल"
        },
        {
                "num": 23,
                "question_en": "Which figure of speech is used in the line: 'सूरज मुस्कुरा रहा था'?",
                "question_hi": "'सूरज मुस्कुरा रहा था' पंक्ति में कौन-सा अलंकार है?",
                "options_en": ["रूपक", "मानवकरण", "उपमा", "अनुप्रास"],
                "options_hi": ["रूपक", "मानवकरण", "उपमा", "अनुप्रास"],
                "answer_en": "मानवकरण",
                "answer_hi": "मानवकरण"
        },
        {
                "num": 24,
                "question_en": "Which of the following is an example of कर्मवाच्य?",
                "question_hi": "निम्न में से कौन-सा वाक्य कर्मवाच्य है?",
                "options_en": [
                        "राम ने पुस्तक पढ़ी।",
                        "पुस्तक राम द्वारा पढ़ी गई।",
                        "पुस्तकें बहुत हैं।",
                        "पढ़ाई ज़रूरी है।"
                ],
                "options_hi": [
                        "राम ने पुस्तक पढ़ी।",
                        "पुस्तक राम द्वारा पढ़ी गई।",
                        "पुस्तकें बहुत हैं।",
                        "पढ़ाई ज़रूरी है।"
                ],
                "answer_en": "पुस्तक राम द्वारा पढ़ी गई।",
                "answer_hi": "पुस्तक राम द्वारा पढ़ी गई।"
        },
        {
                "num": 25,
                "question_en": "Identify the poetic device in the line: 'जल्दी में जलजला सा गया वह लड़का।'",
                "question_hi": "'जल्दी में जलजला सा गया वह लड़का।' पंक्ति में कौन-सा अलंकार है?",
                "options_en": ["रूपक", "मानवकरण", "अनुप्रास", "यमक"],
                "options_hi": ["रूपक", "मानवकरण", "अनुप्रास", "यमक"],
                "answer_en": "अनुप्रास",
                "answer_hi": "अनुप्रास"
        },

        {
                "num": 26,
                "question_en": "Which tense is used in the sentence: 'वह स्कूल जा रहा है'?",
                "question_hi": "'वह स्कूल जा रहा है' वाक्य में कौन-सा काल है?",
                "options_en": ["भूतकाल", "वर्तमानकाल", "भविष्यत्काल", "परिपूर्ण काल"],
                "options_hi": ["भूतकाल", "वर्तमानकाल", "भविष्यत्काल", "परिपूर्ण काल"],
                "answer_en": "वर्तमानकाल",
                "answer_hi": "वर्तमानकाल"
        },
        {
                "num": 27,
                "question_en": "Select the correct antonym (विलोम शब्द) of 'शांत'",
                "question_hi": "'शांत' का विलोम शब्द क्या है?",
                "options_en": ["सक्रिय", "उग्र", "कोमल", "निर्जन"],
                "options_hi": ["सक्रिय", "उग्र", "कोमल", "निर्जन"],
                "answer_en": "उग्र",
                "answer_hi": "उग्र"
        },
        {
                "num": 28,
                "question_en": "Which poet is associated with 'नीलकंठ' from Sahitya Sagar?",
                "question_hi": "'नीलकंठ' कविता के कवि कौन हैं? (साहित्य सागर से)",
                "options_en": ["हरिवंश राय बच्चन", "मैथिलीशरण गुप्त", "जयशंकर प्रसाद", "सूरदास"],
                "options_hi": ["हरिवंश राय बच्चन", "मैथिलीशरण गुप्त", "जयशंकर प्रसाद", "सूरदास"],
                "answer_en": "मैथिलीशरण गुप्त",
                "answer_hi": "मैथिलीशरण गुप्त"
        },
        {
                "num": 29,
                "question_en": "Which type of letter is written to the Principal regarding leave?",
                "question_hi": "प्राचार्य को अवकाश हेतु लिखा गया पत्र किस प्रकार का पत्र है?",
                "options_en": ["अनौपचारिक पत्र", "औपचारिक पत्र", "सामाजिक पत्र", "प्रेम पत्र"],
                "options_hi": ["अनौपचारिक पत्र", "औपचारिक पत्र", "सामाजिक पत्र", "प्रेम पत्र"],
                "answer_en": "औपचारिक पत्र",
                "answer_hi": "औपचारिक पत्र"
        },
        {
                "num": 30,
                "question_en": "Which idiom (मुहावरा) means 'to become arrogant'?",
                "question_hi": "'घमंडी होना' दर्शाने वाला सही मुहावरा क्या है?",
                "options_en": ["नाक में दम करना", "नाक चढ़ना", "नाक काटना", "नाक रगड़ना"],
                "options_hi": ["नाक में दम करना", "नाक चढ़ना", "नाक काटना", "नाक रगड़ना"],
                "answer_en": "नाक चढ़ना",
                "answer_hi": "नाक चढ़ना"
        },

        {
                "num": 31,
                "question_en": "Which poetic device is used in the line: 'गिरा अम्बर से तारा'? ",
                "question_hi": "'गिरा अम्बर से तारा' पंक्ति में कौन-सा अलंकार है?",
                "options_en": ["रूपक", "उपमा", "अनुप्रास", "चित्र अलंकार"],
                "options_hi": ["रूपक", "उपमा", "अनुप्रास", "चित्र अलंकार"],
                "answer_en": "चित्र अलंकार",
                "answer_hi": "चित्र अलंकार"
        },
        {
                "num": 32,
                "question_en": "Which compound word type is found in 'राजपथ'?",
                "question_hi": "'राजपथ' में कौन-सा समास है?",
                "options_en": ["तत्पुरुष", "द्वंद्व", "बहुव्रीहि", "कर्मधारय"],
                "options_hi": ["तत्पुरुष", "द्वंद्व", "बहुव्रीहि", "कर्मधारय"],
                "answer_en": "कर्मधारय",
                "answer_hi": "कर्मधारय"
        },
        {
                "num": 33,
                "question_en": "Who is the poet of the poem 'कविता के प्रति' in Sahitya Sagar?",
                "question_hi": "'कविता के प्रति' (साहित्य सागर) कविता के कवि कौन हैं?",
                "options_en": ["हरिवंश राय बच्चन", "रामधारी सिंह 'दिनकर'", "महादेवी वर्मा", "सूरदास"],
                "options_hi": ["हरिवंश राय बच्चन", "रामधारी सिंह 'दिनकर'", "महादेवी वर्मा", "सूरदास"],
                "answer_en": "हरिवंश राय बच्चन",
                "answer_hi": "हरिवंश राय बच्चन"
        },
        {
                "num": 34,
                "question_en": "Which of the following is the correct synonym of 'जल'?",
                "question_hi": "'जल' का पर्यायवाची शब्द कौन-सा है?",
                "options_en": ["नदी", "पानी", "नीर", "बूंद"],
                "options_hi": ["नदी", "पानी", "नीर", "बूंद"],
                "answer_en": "नीर",
                "answer_hi": "नीर"
        },
        {
                "num": 35,
                "question_en": "What is the correct punctuation for the sentence: 'राम स्कूल गया मोहन घर गया'?",
                "question_hi": "'राम स्कूल गया मोहन घर गया' वाक्य में उचित विराम चिह्न क्या होगा?",
                "options_en": [
                        "राम स्कूल गया। मोहन घर गया।",
                        "राम स्कूल गया, मोहन घर गया।",
                        "राम स्कूल गया - मोहन घर गया।",
                        "राम स्कूल गया: मोहन घर गया।"
                ],
                "options_hi": [
                        "राम स्कूल गया। मोहन घर गया।",
                        "राम स्कूल गया, मोहन घर गया।",
                        "राम स्कूल गया - मोहन घर गया।",
                        "राम स्कूल गया: मोहन घर गया।"
                ],
                "answer_en": "राम स्कूल गया। मोहन घर गया।",
                "answer_hi": "राम स्कूल गया। मोहन घर गया।"
        }
        ,

        {
                "num": 36,
                "question_en": "Which sentence is in future tense?",
                "question_hi": "निम्न में से कौन-सा वाक्य भविष्यत् काल में है?",
                "options_en": [
                        "मैं बाजार जा रहा हूँ।",
                        "मैंने खाना खाया।",
                        "मैं कल स्कूल जाऊँगा।",
                        "वह सो रहा है।"
                ],
                "options_hi": [
                        "मैं बाजार जा रहा हूँ।",
                        "मैंने खाना खाया।",
                        "मैं कल स्कूल जाऊँगा।",
                        "वह सो रहा है।"
                ],
                "answer_en": "मैं कल स्कूल जाऊँगा।",
                "answer_hi": "मैं कल स्कूल जाऊँगा।"
        },
        {
                "num": 37,
                "question_en": "Who is the writer of the one-act play 'बड़ी बात' in Ekanki Sanchay?",
                "question_hi": "'बड़ी बात' (एकांकी संचय) एकांकी के लेखक कौन हैं?",
                "options_en": [
                        "रामवृक्ष बेनीपुरी",
                        "जैनेन्द्र कुमार",
                        "मुल्कराज आनंद",
                        "यशपाल"
                ],
                "options_hi": [
                        "रामवृक्ष बेनीपुरी",
                        "जैनेन्द्र कुमार",
                        "मुल्कराज आनंद",
                        "यशपाल"
                ],
                "answer_en": "रामवृक्ष बेनीपुरी",
                "answer_hi": "रामवृक्ष बेनीपुरी"
        },
        {
                "num": 38,
                "question_en": "Which word is a homonym (अनेकार्थी शब्द)?",
                "question_hi": "निम्न में से कौन-सा शब्द अनेकार्थी है?",
                "options_en": ["कल", "सूरज", "पवन", "शक्ति"],
                "options_hi": ["कल", "सूरज", "पवन", "शक्ति"],
                "answer_en": "कल",
                "answer_hi": "कल"
        },
        {
                "num": 39,
                "question_en": "Which is a formal letter topic?",
                "question_hi": "निम्न में से कौन-सा विषय औपचारिक पत्र लेखन के लिए उपयुक्त है?",
                "options_en": [
                        "मित्र को जन्मदिन की बधाई",
                        "छात्रवृत्ति के लिए आवेदन",
                        "माँ को परीक्षा के बारे में पत्र",
                        "दोस्त को छुट्टी की योजना"
                ],
                "options_hi": [
                        "मित्र को जन्मदिन की बधाई",
                        "छात्रवृत्ति के लिए आवेदन",
                        "माँ को परीक्षा के बारे में पत्र",
                        "दोस्त को छुट्टी की योजना"
                ],
                "answer_en": "छात्रवृत्ति के लिए आवेदन",
                "answer_hi": "छात्रवृत्ति के लिए आवेदन"
        },
        {
                "num": 40,
                "question_en": "Which idiom (मुहावरा) means 'to be disappointed'?",
                "question_hi": "'निराश होना' दर्शाने वाला मुहावरा कौन-सा है?",
                "options_en": [
                        "हाथ मलना",
                        "हाथ पाँव फूलना",
                        "हाथ धो बैठना",
                        "हाथ खड़े कर देना"
                ],
                "options_hi": [
                        "हाथ मलना",
                        "हाथ पाँव फूलना",
                        "हाथ धो बैठना",
                        "हाथ खड़े कर देना"
                ],
                "answer_en": "हाथ मलना",
                "answer_hi": "हाथ मलना"
        }
        ,

        {
                "num": 41,
                "question_en": "Which is the correct compound type in 'राजमहल'?",
                "question_hi": "'राजमहल' में कौन-सा समास है?",
                "options_en": ["तत्पुरुष", "कर्मधारय", "द्वंद्व", "बहुव्रीहि"],
                "options_hi": ["तत्पुरुष", "कर्मधारय", "द्वंद्व", "बहुव्रीहि"],
                "answer_en": "कर्मधारय",
                "answer_hi": "कर्मधारय"
        },
        {
                "num": 42,
                "question_en": "Who wrote the story 'दो सखियाँ' in Sahitya Sagar?",
                "question_hi": "'दो सखियाँ' कहानी (साहित्य सागर) के लेखक कौन हैं?",
                "options_en": ["जयशंकर प्रसाद", "सुभद्राकुमारी चौहान", "मन्नू भंडारी", "राहुल सांकृत्यायन"],
                "options_hi": ["जयशंकर प्रसाद", "सुभद्राकुमारी चौहान", "मन्नू भंडारी", "राहुल सांकृत्यायन"],
                "answer_en": "मन्नू भंडारी",
                "answer_hi": "मन्नू भंडारी"
        },
        {
                "num": 43,
                "question_en": "What is the voice of the sentence 'पुस्तक पढ़ी जा रही है'?",
                "question_hi": "'पुस्तक पढ़ी जा रही है' वाक्य में कौन-सा वाच्य है?",
                "options_en": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "निश्चित नहीं"],
                "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "निश्चित नहीं"],
                "answer_en": "कर्मवाच्य",
                "answer_hi": "कर्मवाच्य"
        },
        {
                "num": 44,
                "question_en": "Select the antonym of 'साहसी'",
                "question_hi": "'साहसी' का विलोम शब्द क्या है?",
                "options_en": ["डरपोक", "वीर", "मजबूत", "बुद्धिमान"],
                "options_hi": ["डरपोक", "वीर", "मजबूत", "बुद्धिमान"],
                "answer_en": "डरपोक",
                "answer_hi": "डरपोक"
        },
        {
                "num": 45,
                "question_en": "Which poet wrote the poem 'वह टूटता तारा'?",
                "question_hi": "'वह टूटता तारा' कविता के कवि कौन हैं?",
                "options_en": ["हरिवंश राय बच्चन", "रामधारी सिंह 'दिनकर'", "महादेवी वर्मा", "मैथिलीशरण गुप्त"],
                "options_hi": ["हरिवंश राय बच्चन", "रामधारी सिंह 'दिनकर'", "महादेवी वर्मा", "मैथिलीशरण गुप्त"],
                "answer_en": "रामधारी सिंह 'दिनकर'",
                "answer_hi": "रामधारी सिंह 'दिनकर'"
        },
        {
                "num": 46,
                "question_en": "Which sentence shows error in subject-verb agreement?",
                "question_hi": "निम्न में से किस वाक्य में कर्ता-क्रिया में अशुद्धि है?",
                "options_en": [
                        "राम खेल रहा है।",
                        "बच्चे पार्क में खेलते हैं।",
                        "लड़की नाच रहे हैं।",
                        "हम बाजार जा रहे हैं।"
                ],
                "options_hi": [
                        "राम खेल रहा है।",
                        "बच्चे पार्क में खेलते हैं।",
                        "लड़की नाच रहे हैं।",
                        "हम बाजार जा रहे हैं।"
                ],
                "answer_en": "लड़की नाच रहे हैं।",
                "answer_hi": "लड़की नाच रहे हैं।"
        },
        {
                "num": 47,
                "question_en": "Which one is not a poetic device (अलंकार)?",
                "question_hi": "निम्न में से कौन-सा अलंकार नहीं है?",
                "options_en": ["रूपक", "मानवकरण", "समास", "उपमा"],
                "options_hi": ["रूपक", "मानवकरण", "समास", "उपमा"],
                "answer_en": "समास",
                "answer_hi": "समास"
        },
        {
                "num": 48,
                "question_en": "Which idiom means 'to get very angry'?",
                "question_hi": "'बहुत गुस्सा होना' दर्शाने वाला मुहावरा कौन-सा है?",
                "options_en": ["आँखें दिखाना", "नाक काटना", "पाँव उखाड़ना", "हाथ मलना"],
                "options_hi": ["आँखें दिखाना", "नाक काटना", "पाँव उखाड़ना", "हाथ मलना"],
                "answer_en": "आँखें दिखाना",
                "answer_hi": "आँखें दिखाना"
        },
        {
                "num": 49,
                "question_en": "Which word is synonymous with 'सुंदर'?",
                "question_hi": "'सुंदर' का पर्यायवाची शब्द कौन-सा है?",
                "options_en": ["भयानक", "मनोहर", "कठिन", "भारी"],
                "options_hi": ["भयानक", "मनोहर", "कठिन", "भारी"],
                "answer_en": "मनोहर",
                "answer_hi": "मनोहर"
        },
        {
                "num": 50,
                "question_en": "In which poem is the image of nature glorified?",
                "question_hi": "कौन-सी कविता में प्रकृति का सौंदर्य चित्रित किया गया है?",
                "options_en": ["नीलकंठ", "कविता के प्रति", "दो सखियाँ", "बड़ी बात"],
                "options_hi": ["नीलकंठ", "कविता के प्रति", "दो सखियाँ", "बड़ी बात"],
                "answer_en": "नीलकंठ",
                "answer_hi": "नीलकंठ"
        },
        {
                "num": 51,
                "question_en": "Which tense is used in 'वह जा चुका है'?",
                "question_hi": "'वह जा चुका है' वाक्य में कौन-सा काल है?",
                "options_en": ["वर्तमान", "भूतकाल", "परिपूर्ण वर्तमान", "भविष्यत"],
                "options_hi": ["वर्तमान", "भूतकाल", "परिपूर्ण वर्तमान", "भविष्यत"],
                "answer_en": "परिपूर्ण वर्तमान",
                "answer_hi": "परिपूर्ण वर्तमान"
        },
        {
                "num": 52,
                "question_en": "What kind of letter is written to a friend inviting for Diwali?",
                "question_hi": "मित्र को दिवाली पर आमंत्रण देने हेतु लिखा गया पत्र किस प्रकार का होता है?",
                "options_en": ["औपचारिक", "अनौपचारिक", "आधिकारिक", "प्रशासनिक"],
                "options_hi": ["औपचारिक", "अनौपचारिक", "आधिकारिक", "प्रशासनिक"],
                "answer_en": "अनौपचारिक",
                "answer_hi": "अनौपचारिक"
        },
        {
                "num": 53,
                "question_en": "Choose the correct synonym of 'गुरु'",
                "question_hi": "'गुरु' का पर्यायवाची शब्द क्या है?",
                "options_en": ["छात्र", "विद्यार्थी", "आचार्य", "सैनिक"],
                "options_hi": ["छात्र", "विद्यार्थी", "आचार्य", "सैनिक"],
                "answer_en": "आचार्य",
                "answer_hi": "आचार्य"
        },
        {
                "num": 54,
                "question_en": "What kind of compound is in 'अंधकारमय'?",
                "question_hi": "'अंधकारमय' में कौन-सा समास है?",
                "options_en": ["कर्मधारय", "तत्पुरुष", "द्वंद्व", "बहुव्रीहि"],
                "options_hi": ["कर्मधारय", "तत्पुरुष", "द्वंद्व", "बहुव्रीहि"],
                "answer_en": "कर्मधारय",
                "answer_hi": "कर्मधारय"
        },
        {
                "num": 55,
                "question_en": "Which line contains a metaphor (रूपक अलंकार)?",
                "question_hi": "निम्न में से किस पंक्ति में रूपक अलंकार है?",
                "options_en": [
                        "जीवन एक संग्राम है।",
                        "वह फूल सा मुस्काया।",
                        "जैसे जल में बर्फ।",
                        "वह धीरे-धीरे चला।"
                ],
                "options_hi": [
                        "जीवन एक संग्राम है।",
                        "वह फूल सा मुस्काया।",
                        "जैसे जल में बर्फ।",
                        "वह धीरे-धीरे चला।"
                ],
                "answer_en": "जीवन एक संग्राम है।",
                "answer_hi": "जीवन एक संग्राम है।"
        },
        {
                "num": 56,
                "question_en": "Which figure of speech is in 'नभ मुस्काया'?",
                "question_hi": "'नभ मुस्काया' पंक्ति में कौन-सा अलंकार है?",
                "options_en": ["मानवकरण", "रूपक", "उपमा", "यमक"],
                "options_hi": ["मानवकरण", "रूपक", "उपमा", "यमक"],
                "answer_en": "मानवकरण",
                "answer_hi": "मानवकरण"
        },
        {
                "num": 57,
                "question_en": "Choose the correct voice for: 'पत्र लिखा जा रहा है।'",
                "question_hi": "'पत्र लिखा जा रहा है।' वाक्य किस वाच्य में है?",
                "options_en": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "निश्चित नहीं"],
                "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "निश्चित नहीं"],
                "answer_en": "कर्मवाच्य",
                "answer_hi": "कर्मवाच्य"
        },
        {
                "num": 58,
                "question_en": "Which is an example of बहुव्रीहि समास?",
                "question_hi": "निम्न में से कौन-सा बहुव्रीहि समास है?",
                "options_en": ["नीलकंठ", "राजकुमार", "दशरथ", "चक्रपाणि"],
                "options_hi": ["नीलकंठ", "राजकुमार", "दशरथ", "चक्रपाणि"],
                "answer_en": "नीलकंठ",
                "answer_hi": "नीलकंठ"
        },
        {
                "num": 59,
                "question_en": "Which is a moral essay topic?",
                "question_hi": "निम्न में से कौन-सा निबंध नैतिक विषय पर है?",
                "options_en": ["स्वच्छता का महत्व", "परीक्षा प्रणाली", "पर्यावरण प्रदूषण", "आत्मनिर्भर भारत"],
                "options_hi": ["स्वच्छता का महत्व", "परीक्षा प्रणाली", "पर्यावरण प्रदूषण", "आत्मनिर्भर भारत"],
                "answer_en": "स्वच्छता का महत्व",
                "answer_hi": "स्वच्छता का महत्व"
        },
        {
                "num": 60,
                "question_en": "Choose the correct spelling:",
                "question_hi": "सही वर्तनी चुनें:",
                "options_en": ["उद्योग", "उधोग", "उद्यौग", "उधयोग"],
                "options_hi": ["उद्योग", "उधोग", "उद्यौग", "उधयोग"],
                "answer_en": "उद्योग",
                "answer_hi": "उद्योग"
        }
        ,

        {
                "num": 61,
                "question_en": "Which part of speech is 'सुंदर'?",
                "question_hi": "'सुंदर' कौन-सा शब्द भेद है?",
                "options_en": ["संज्ञा", "क्रिया", "विशेषण", "सर्वनाम"],
                "options_hi": ["संज्ञा", "क्रिया", "विशेषण", "सर्वनाम"],
                "answer_en": "विशेषण",
                "answer_hi": "विशेषण"
        },
        {
                "num": 62,
                "question_en": "Who is the author of 'त्याग' in Ekanki Sanchay?",
                "question_hi": "'त्याग' (एकांकी संचय) एकांकी के लेखक कौन हैं?",
                "options_en": ["प्रेमचंद", "जयशंकर प्रसाद", "यशपाल", "मुल्कराज आनंद"],
                "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "यशपाल", "मुल्कराज आनंद"],
                "answer_en": "यशपाल",
                "answer_hi": "यशपाल"
        },
        {
                "num": 63,
                "question_en": "Identify the correct use of punctuation:",
                "question_hi": "सही विराम चिह्न वाला वाक्य कौन-सा है?",
                "options_en": [
                        "क्या तुम स्कूल जा रहे हो।",
                        "वह पढ़ता है, लिखता है और खेलता है।",
                        "मुझे फल चाहिए: सेब, केला आम।",
                        "आज बहुत ठंड है!"
                ],
                "options_hi": [
                        "क्या तुम स्कूल जा रहे हो।",
                        "वह पढ़ता है, लिखता है और खेलता है।",
                        "मुझे फल चाहिए: सेब, केला आम।",
                        "आज बहुत ठंड है!"
                ],
                "answer_en": "वह पढ़ता है, लिखता है और खेलता है।",
                "answer_hi": "वह पढ़ता है, लिखता है और खेलता है।"
        },
        {
                "num": 64,
                "question_en": "Which is the synonym of 'सूर्य'?",
                "question_hi": "'सूर्य' का पर्यायवाची शब्द क्या है?",
                "options_en": ["चंद्र", "रवि", "नभ", "आकाश"],
                "options_hi": ["चंद्र", "रवि", "नभ", "आकाश"],
                "answer_en": "रवि",
                "answer_hi": "रवि"
        },
        {
                "num": 65,
                "question_en": "What is the tense of: 'मैंने खाना खा लिया'?",
                "question_hi": "'मैंने खाना खा लिया' वाक्य का काल क्या है?",
                "options_en": ["वर्तमान", "भविष्य", "परिपूर्ण भूत", "रूपक"],
                "options_hi": ["वर्तमान", "भविष्य", "परिपूर्ण भूत", "रूपक"],
                "answer_en": "परिपूर्ण भूत",
                "answer_hi": "परिपूर्ण भूत"
        },
        {
                "num": 66,
                "question_en": "Which poem in Sahitya Sagar is written by Surdas?",
                "question_hi": "साहित्य सागर में सूरदास द्वारा रचित कविता कौन-सी है?",
                "options_en": ["वह टूटता तारा", "कविता के प्रति", "मुझे मेरे मित्रों के बच्चे दे दो", "मैया मोरी मैं नहीं माखन खायो"],
                "options_hi": ["वह टूटता तारा", "कविता के प्रति", "मुझे मेरे मित्रों के बच्चे दे दो", "मैया मोरी मैं नहीं माखन खायो"],
                "answer_en": "मैया मोरी मैं नहीं माखन खायो",
                "answer_hi": "मैया मोरी मैं नहीं माखन खायो"
        },
        {
                "num": 67,
                "question_en": "Choose the correct idiom for 'बहुत जल्दी में होना'",
                "question_hi": "'बहुत जल्दी में होना' दर्शाने वाला मुहावरा कौन-सा है?",
                "options_en": ["पाँवों तले ज़मीन खिसकना", "नौ दो ग्यारह होना", "तेज़ी में उड़ना", "भागे जा रहे होना"],
                "options_hi": ["पाँवों तले ज़मीन खिसकना", "नौ दो ग्यारह होना", "तेज़ी में उड़ना", "भागे जा रहे होना"],
                "answer_en": "नौ दो ग्यारह होना",
                "answer_hi": "नौ दो ग्यारह होना"
        },
        {
                "num": 68,
                "question_en": "What is the gender (लिंग) of 'पुस्तक'?",
                "question_hi": "'पुस्तक' शब्द का लिंग क्या है?",
                "options_en": ["पुल्लिंग", "स्त्रीलिंग", "उभयलिंग", "नपुंसकलिंग"],
                "options_hi": ["पुल्लिंग", "स्त्रीलिंग", "उभयलिंग", "नपुंसकलिंग"],
                "answer_en": "स्त्रीलिंग",
                "answer_hi": "स्त्रीलिंग"
        },
        {
                "num": 69,
                "question_en": "Which line uses Personification (मानवकरण अलंकार)?",
                "question_hi": "निम्न में से किस पंक्ति में मानवकरण अलंकार है?",
                "options_en": [
                        "नदी गा रही थी।",
                        "सूरज एक आग का गोला है।",
                        "वह फूल सा खिल गया।",
                        "नींद ने आंखों को छू लिया।"
                ],
                "options_hi": [
                        "नदी गा रही थी।",
                        "सूरज एक आग का गोला है।",
                        "वह फूल सा खिल गया।",
                        "नींद ने आंखों को छू लिया।"
                ],
                "answer_en": "नदी गा रही थी।",
                "answer_hi": "नदी गा रही थी।"
        },
        {
                "num": 70,
                "question_en": "What kind of Samas is 'राष्ट्रभाषा'?",
                "question_hi": "'राष्ट्रभाषा' में कौन-सा समास है?",
                "options_en": ["कर्मधारय", "तत्पुरुष", "द्वंद्व", "बहुव्रीहि"],
                "options_hi": ["कर्मधारय", "तत्पुरुष", "द्वंद्व", "बहुव्रीहि"],
                "answer_en": "तत्पुरुष",
                "answer_hi": "तत्पुरुष"
        },
        {
                "num": 71,
                "question_en": "Which one is a reflective essay topic?",
                "question_hi": "निम्न में से कौन-सा निबंध आत्मपरक (reflective) है?",
                "options_en": ["भारत की संस्कृति", "मेरा प्रिय मित्र", "कोविड-19 का प्रभाव", "विद्यालय का वातावरण"],
                "options_hi": ["भारत की संस्कृति", "मेरा प्रिय मित्र", "कोविड-19 का प्रभाव", "विद्यालय का वातावरण"],
                "answer_en": "मेरा प्रिय मित्र",
                "answer_hi": "मेरा प्रिय मित्र"
        },
        {
                "num": 72,
                "question_en": "Which of the following is an informal letter?",
                "question_hi": "निम्न में से कौन-सा पत्र अनौपचारिक पत्र है?",
                "options_en": [
                        "प्रधानाचार्य को आवेदन",
                        "संपादक को पत्र",
                        "मित्र को जन्मदिन की शुभकामना",
                        "नगर निगम को शिकायत"
                ],
                "options_hi": [
                        "प्रधानाचार्य को आवेदन",
                        "संपादक को पत्र",
                        "मित्र को जन्मदिन की शुभकामना",
                        "नगर निगम को शिकायत"
                ],
                "answer_en": "मित्र को जन्मदिन की शुभकामना",
                "answer_hi": "मित्र को जन्मदिन की शुभकामना"
        },
        {
                "num": 73,
                "question_en": "What is the plural form of 'लड़का'?",
                "question_hi": "'लड़का' शब्द का बहुवचन रूप क्या है?",
                "options_en": ["लड़क", "लड़की", "लड़कों", "लड़के"],
                "options_hi": ["लड़क", "लड़की", "लड़कों", "लड़के"],
                "answer_en": "लड़के",
                "answer_hi": "लड़के"
        },
        {
                "num": 74,
                "question_en": "Which one is not a part of sentence structure?",
                "question_hi": "निम्न में से कौन वाक्य संरचना का भाग नहीं है?",
                "options_en": ["कर्ता", "क्रिया", "संज्ञा", "कर्म"],
                "options_hi": ["कर्ता", "क्रिया", "संज्ञा", "कर्म"],
                "answer_en": "संज्ञा",
                "answer_hi": "संज्ञा"
        },
        {
                "num": 75,
                "question_en": "Which is an example of अपठित गद्यांश question?",
                "question_hi": "निम्न में से कौन-सा अपठित गद्यांश से संबंधित प्रश्न है?",
                "options_en": [
                        "लेखक का नाम बताइए।",
                        "गद्यांश का मुख्य विचार क्या है?",
                        "इस कविता का नाम बताइए।",
                        "इस कहानी का पात्र कौन है?"
                ],
                "options_hi": [
                        "लेखक का नाम बताइए।",
                        "गद्यांश का मुख्य विचार क्या है?",
                        "इस कविता का नाम बताइए।",
                        "इस कहानी का पात्र कौन है?"
                ],
                "answer_en": "गद्यांश का मुख्य विचार क्या है?",
                "answer_hi": "गद्यांश का मुख्य विचार क्या है?"
        },
        {
                "num": 76,
                "question_en": "Which is a correct form of a Dialogue Writing topic?",
                "question_hi": "संवाद लेखन का उपयुक्त विषय कौन-सा है?",
                "options_en": [
                        "मित्र से परीक्षा की तैयारी पर बातचीत",
                        "कोरोना महामारी पर निबंध",
                        "पत्रकारिता का महत्व",
                        "विद्यालय की वार्षिक पत्रिका"
                ],
                "options_hi": [
                        "मित्र से परीक्षा की तैयारी पर बातचीत",
                        "कोरोना महामारी पर निबंध",
                        "पत्रकारिता का महत्व",
                        "विद्यालय की वार्षिक पत्रिका"
                ],
                "answer_en": "मित्र से परीक्षा की तैयारी पर बातचीत",
                "answer_hi": "मित्र से परीक्षा की तैयारी पर बातचीत"
        },
        {
                "num": 77,
                "question_en": "Choose the correct antonym of 'अंधकार'",
                "question_hi": "'अंधकार' का विलोम शब्द क्या है?",
                "options_en": ["प्रकाश", "छाया", "चमक", "प्रभा"],
                "options_hi": ["प्रकाश", "छाया", "चमक", "प्रभा"],
                "answer_en": "प्रकाश",
                "answer_hi": "प्रकाश"
        },
        {
                "num": 78,
                "question_en": "Who wrote 'कविता के प्रति'?",
                "question_hi": "'कविता के प्रति' के लेखक कौन हैं?",
                "options_en": ["हरिवंश राय बच्चन", "मैथिलीशरण गुप्त", "महादेवी वर्मा", "जयशंकर प्रसाद"],
                "options_hi": ["हरिवंश राय बच्चन", "मैथिलीशरण गुप्त", "महादेवी वर्मा", "जयशंकर प्रसाद"],
                "answer_en": "हरिवंश राय बच्चन",
                "answer_hi": "हरिवंश राय बच्चन"
        },
        {
                "num": 79,
                "question_en": "What is the meaning of idiom 'नाक में दम करना'?",
                "question_hi": "'नाक में दम करना' मुहावरे का अर्थ क्या है?",
                "options_en": [
                        "बहुत परेशान करना",
                        "आदर करना",
                        "गर्व करना",
                        "समझाना"
                ],
                "options_hi": [
                        "बहुत परेशान करना",
                        "आदर करना",
                        "गर्व करना",
                        "समझाना"
                ],
                "answer_en": "बहुत परेशान करना",
                "answer_hi": "बहुत परेशान करना"
        },
        {
                "num": 80,
                "question_en": "What is the correct classification of 'राम ने रोटी खाई'?",
                "question_hi": "'राम ने रोटी खाई' किस प्रकार का वाक्य है?",
                "options_en": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "निषेध वाच्य"],
                "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "निषेध वाच्य"],
                "answer_en": "कर्तृवाच्य",
                "answer_hi": "कर्तृवाच्य"
        }
        ,
        {
                "num": 81,
                "question_en": "Who is the poet of the line 'कुछ भी बन, परंतु ऐसा बन कि समय तुझ पर निखर सके'?",
                "question_hi": "'कुछ भी बन, परंतु ऐसा बन कि समय तुझ पर निखर सके' यह पंक्ति किस कवि की है?",
                "options_en": ["Maithili Sharan Gupt", "Ramdhari Singh 'Dinkar'", "Harivansh Rai Bachchan", "Suryakant Tripathi 'Nirala'"],
                "options_hi": ["मैथिलीशरण गुप्त", "रामधारी सिंह 'दिनकर'", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी 'निराला'"],
                "answer_en": "Harivansh Rai Bachchan",
                "answer_hi": "हरिवंश राय बच्चन"
        }
        ,
        {
                "num": 82,
                "question_en": "Which of these is a 'द्वंद्व समास' example?",
                "question_hi": "निम्न में से कौन 'द्वंद्व समास' का उदाहरण है?",
                "options_en": ["राजपुत्र", "माता-पिता", "पंचतंत्र", "देशभक्त"],
                "options_hi": ["राजपुत्र", "माता-पिता", "पंचतंत्र", "देशभक्त"],
                "answer_en": "माता-पिता",
                "answer_hi": "माता-पिता"
        }
        ,
        {
                "num": 83,
                "question_en": "What is the correct विशेषण for 'गंगा'?",
                "question_hi": "'गंगा' का सही विशेषण क्या है?",
                "options_en": ["गंगीय", "गांगेय", "गंगावत", "गंगानदी"],
                "options_hi": ["गंगीय", "गांगेय", "गंगावत", "गंगानदी"],
                "answer_en": "गांगेय",
                "answer_hi": "गांगेय"
        }
        ,
        {
                "num": 84,
                "question_en": "Which of these is a 'कर्मधारय समास'?",
                "question_hi": "निम्न में से कौन 'कर्मधारय समास' है?",
                "options_en": ["नीलकंठ", "चौराहा", "आजन्म", "तिरंगा"],
                "options_hi": ["नीलकंठ", "चौराहा", "आजन्म", "तिरंगा"],
                "answer_en": "नीलकंठ",
                "answer_hi": "नीलकंठ"
        }
        ,
        {
                "num": 85,
                "question_en": "Which punctuation mark is missing in: 'क्या तुम आ रहे हो__'?",
                "question_hi": "'क्या तुम आ रहे हो__' में कौन-सा विराम चिह्न छूट गया है?",
                "options_en": ["। (पूर्ण विराम)", "? (प्रश्नवाचक)", ", (अल्प विराम)", "! (विस्मयादिबोधक)"],
                "options_hi": ["। (पूर्ण विराम)", "? (प्रश्नवाचक)", ", (अल्प विराम)", "! (विस्मयादिबोधक)"],
                "answer_en": "? (प्रश्नवाचक)",
                "answer_hi": "? (प्रश्नवाचक)"
        }
        ,
        {
                "num": 86,
                "question_en": "What is the meaning of the idiom 'ऊँट के मुँह में जीरा'?",
                "question_hi": "'ऊँट के मुँह में जीरा' मुहावरे का अर्थ क्या है?",
                "options_en": ["Very tasty", "Too little for a big need", "Waste of time", "Extremely spicy"],
                "options_hi": ["बहुत स्वादिष्ट", "बड़ी आवश्यकता के लिए बहुत कम", "समय की बर्बादी", "अत्यंत तीखा"],
                "answer_en": "Too little for a big need",
                "answer_hi": "बड़ी आवश्यकता के लिए बहुत कम"
        }
        ,
        {
                "num": 87,
                "question_en": "Which of these is an example of 'अपठित गद्यांश'?",
                "question_hi": "निम्न में से कौन 'अपठित गद्यांश' का उदाहरण है?",
                "options_en": ["Unseen passage for comprehension", "Memorized poem", "Grammar exercise", "Letter writing"],
                "options_hi": ["बोधगम्यता के लिए अनदेखा अंश", "याद की हुई कविता", "व्याकरण अभ्यास", "पत्र लेखन"],
                "answer_en": "Unseen passage for comprehension",
                "answer_hi": "बोधगम्यता के लिए अनदेखा अंश"
        }
        ,
        {
                "num": 88,
                "question_en": "Which tense is used in 'वह खेल रहा है'?",
                "question_hi": "'वह खेल रहा है' में कौन-सा काल प्रयुक्त हुआ है?",
                "options_en": ["Past", "Present Continuous", "Future", "Past Perfect"],
                "options_hi": ["भूतकाल", "वर्तमान अपूर्ण काल", "भविष्यत काल", "पूर्ण भूतकाल"],
                "answer_en": "Present Continuous",
                "answer_hi": "वर्तमान अपूर्ण काल"
        }
        ,
        {
                "num": 89,
                "question_en": "What is the synonym of 'सुंदर'?",
                "question_hi": "'सुंदर' का पर्यायवाची क्या है?",
                "options_en": ["कुरूप", "असभ्य", "खूबसूरत", "भद्दा"],
                "options_hi": ["कुरूप", "असभ्य", "खूबसूरत", "भद्दा"],
                "answer_en": "खूबसूरत",
                "answer_hi": "खूबसूरत"
        }
        ,
        {
                "num": 90,
                "question_en": "Which of these is a formal letter topic?",
                "question_hi": "निम्न में से कौन-सा औपचारिक पत्र का विषय है?",
                "options_en": ["Inviting a friend to a party", "Complaint about poor bus service", "Congratulating a cousin", "Sharing holiday plans"],
                "options_hi": ["दोस्त को पार्टी में आमंत्रित करना", "खराब बस सेवा के बारे में शिकायत", "चचेरे भाई को बधाई देना", "छुट्टियों की योजनाएँ साझा करना"],
                "answer_en": "Complaint about poor bus service",
                "answer_hi": "खराब बस सेवा के बारे में शिकायत"
        }
        ,
        {
                "num": 91,
                "question_en": "Which figure of speech is used in 'मेघ आए, बड़े बन ठन के'?",
                "question_hi": "'मेघ आए, बड़े बन ठन के' में कौन-सा अलंकार है?",
                "options_en": ["Anupras", "Utpreksha", "Rupak", "Atishayokti"],
                "options_hi": ["अनुप्रास", "उत्प्रेक्षा", "रूपक", "अतिशयोक्ति"],
                "answer_en": "Utpreksha",
                "answer_hi": "उत्प्रेक्षा"
        }
        ,
        {
                "num": 92,
                "question_en": "What is the correct plural of 'किताब'?",
                "question_hi": "'किताब' का बहुवचन क्या है?",
                "options_en": ["किताबें", "किताबों", "किताबे", "किताबाएँ"],
                "options_hi": ["किताबें", "किताबों", "किताबे", "किताबाएँ"],
                "answer_en": "किताबें",
                "answer_hi": "किताबें"
        }
        ,
        {
                "num": 93,
                "question_en": "Which of these is a 'विधानार्थक वाक्य'?",
                "question_hi": "निम्न में से कौन 'विधानार्थक वाक्य' है?",
                "options_en": ["क्या तुम जाओगे?", "वह पढ़ता है।", "धीरे बोलो!", "हाय, दर्द हो रहा है!"],
                "options_hi": ["क्या तुम जाओगे?", "वह पढ़ता है।", "धीरे बोलो!", "हाय, दर्द हो रहा है!"],
                "answer_en": "वह पढ़ता है।",
                "answer_hi": "वह पढ़ता है।"
        }
        ,
        {
                "num": 94,
                "question_en": "What is the antonym of 'सफल'?",
                "question_hi": "'सफल' का विलोम शब्द क्या है?",
                "options_en": ["असफल", "सुखद", "कठिन", "लाभदायक"],
                "options_hi": ["असफल", "सुखद", "कठिन", "लाभदायक"],
                "answer_en": "असफल",
                "answer_hi": "असफल"
        }
        ,
        {
                "num": 95,
                "question_en": "Which essay type is 'मेरा प्रिय खेल'?",
                "question_hi": "'मेरा प्रिय खेल' किस प्रकार का निबंध है?",
                "options_en": ["Descriptive", "Argumentative", "Narrative", "Reflective"],
                "options_hi": ["वर्णनात्मक", "तर्कपूर्ण", "कथात्मक", "विचारात्मक"],
                "answer_en": "Descriptive",
                "answer_hi": "वर्णनात्मक"
        }
        ,
        {
                "num": 96,
                "question_en": "Which of these is a 'भाववाच्य' example?",
                "question_hi": "निम्न में से कौन 'भाववाच्य' का उदाहरण है?",
                "options_en": ["राम खेलता है।", "मुझसे पढ़ा नहीं जाता।", "वह पुस्तक पढ़ेगा।", "तुमने काम किया।"],
                "options_hi": ["राम खेलता है।", "मुझसे पढ़ा नहीं जाता।", "वह पुस्तक पढ़ेगा।", "तुमने काम किया।"],
                "answer_en": "मुझसे पढ़ा नहीं जाता।",
                "answer_hi": "मुझसे पढ़ा नहीं जाता।"
        }
        ,
        {
                "num": 97,
                "question_en": "What is the correct spelling?",
                "question_hi": "कौन-सी वर्तनी सही है?",
                "options_en": ["व्याकरण", "व्याकरन", "व्याकर्रण", "वयाकरण"],
                "options_hi": ["व्याकरण", "व्याकरन", "व्याकर्रण", "वयाकरण"],
                "answer_en": "व्याकरण",
                "answer_hi": "व्याकरण"
        }
        ,
        {
                "num": 98,
                "question_en": "Which of these is a play (एकांकी) in ICSE Hindi?",
                "question_hi": "निम्न में से कौन ICSE हिंदी की एकांकी है?",
                "options_en": ["Bade Ghar Ki Beti", "Dohe", "Jhansi Ki Rani", "Premchand Ki Kahaniyan"],
                "options_hi": ["बड़े घर की बेटी", "दोहे", "झाँसी की रानी", "प्रेमचंद की कहानियाँ"],
                "answer_en": "Bade Ghar Ki Beti",
                "answer_hi": "बड़े घर की बेटी"
        }
        ,
        {
                "num": 99,
                "question_en": "What is the correct order in a formal letter?",
                "question_hi": "औपचारिक पत्र में कौन-सा क्रम सही है?",
                "options_en": ["Date → Sender’s Address → Subject", "Subject → Salutation → Body", "Receiver’s Address → Date → Subject", "Salutation → Body → Signature"],
                "options_hi": ["तिथि → प्रेषक का पता → विषय", "विषय → संबोधन → मुख्य भाग", "प्राप्तकर्ता का पता → तिथि → विषय", "संबोधन → मुख्य भाग → हस्ताक्षर"],
                "answer_en": "Receiver’s Address → Date → Subject",
                "answer_hi": "प्राप्तकर्ता का पता → तिथि → विषय"
        }
        ,
        {
                "num": 100,
                "question_en": "Which poet wrote 'हरिहर काका'?",
                "question_hi": "'हरिहर काका' किस कवि की रचना है?",
                "options_en": ["Premchand", "Mahadevi Verma", "Nagarjun", "Bhishma Sahni"],
                "options_hi": ["प्रेमचंद", "महादेवी वर्मा", "नागार्जुन", "भीष्म साहनी"],
                "answer_en": "Nagarjun",
                "answer_hi": "नागार्जुन"
        },









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