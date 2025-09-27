const questions = [
    {
        "num": 1,
        "question_en": "What is reproductive health?",
        "question_hi": "प्रजनन स्वास्थ्य क्या है?",
        "options_en": ["Healthy reproduction", "Free from reproductive diseases", "Access to family planning", "All of the above"],
        "options_hi": ["स्वस्थ प्रजनन", "प्रजनन रोगों से मुक्त", "परिवार नियोजन तक पहुँच", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which organization works for family planning in India?",
        "question_hi": "भारत में परिवार नियोजन के लिए कौन सा संगठन काम करता है?",
        "options_en": ["WHO", "UNICEF", "Family Planning Association of India", "ICMR"],
        "options_hi": ["WHO", "UNICEF", "भारत परिवार नियोजन संघ", "ICMR"],
        "answer": "Family Planning Association of India",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "What is the full form of IUD?",
        "question_hi": "IUD का पूरा नाम क्या है?",
        "options_en": ["Intra-Uterine Device", "International Utility Device", "Intra-Uterus Dilation", "None of the above"],
        "options_hi": ["इंट्रा-यूटरिन डिवाइस", "इंटरनेशनल यूटिलिटी डिवाइस", "इंट्रा-यूटेरस डाइलेशन", "इनमें से कोई नहीं"],
        "answer": "Intra-Uterine Device",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which method of contraception is based on the use of hormones?",
        "question_hi": "कौन सा गर्भ निरोधन तरीका हार्मोन के उपयोग पर आधारित है?",
        "options_en": ["Condoms", "Oral contraceptives", "IUD", "Sterilization"],
        "options_hi": ["कंडोम", "ओरल गर्भ निरोधन गोलियां", "IUD", "स्थिरीकरण"],
        "answer": "Oral contraceptives",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "What is the permanent method of contraception?",
        "question_hi": "गर्भ निरोधन का स्थायी तरीका क्या है?",
        "options_en": ["Vasectomy", "IUD", "Oral contraceptives", "Condoms"],
        "options_hi": ["वेसेक्टॉमी", "IUD", "ओरल गर्भ निरोधन गोलियां", "कंडोम"],
        "answer": "Vasectomy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which of the following is a barrier method of contraception?",
        "question_hi": "निम्नलिखित में से कौन सा गर्भ निरोधन का बैरियर तरीका है?",
        "options_en": ["Condom", "Oral contraceptives", "IUD", "Sterilization"],
        "options_hi": ["कंडोम", "ओरल गर्भ निरोधन गोलियां", "IUD", "स्थिरीकरण"],
        "answer": "Condom",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "What is the process of sterilization?",
        "question_hi": "स्थिरीकरण की प्रक्रिया क्या है?",
        "options_en": ["Permanent birth control", "Temporary birth control", "Both A and B", "None of the above"],
        "options_hi": ["स्थायी जन्म नियंत्रण", "अस्थायी जन्म नियंत्रण", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer": "Permanent birth control",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which of the following is a surgical method of contraception?",
        "question_hi": "निम्नलिखित में से कौन सा गर्भ निरोधन का शल्य चिकित्सा तरीका है?",
        "options_en": ["Vasectomy", "Oral contraceptives", "IUD", "Condom"],
        "options_hi": ["वेसेक्टॉमी", "ओरल गर्भ निरोधन गोलियां", "IUD", "कंडोम"],
        "answer": "Vasectomy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "What is the ideal time for the insertion of an IUD?",
        "question_hi": "IUD लगाने का आदर्श समय क्या है?",
        "options_en": ["After menstruation", "Before menstruation", "During menstruation", "After pregnancy"],
        "options_hi": ["मासिक धर्म के बाद", "मासिक धर्म से पहले", "मासिक धर्म के दौरान", "गर्भावस्था के बाद"],
        "answer": "After menstruation",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "What does the term 'Family Planning' refer to?",
        "question_hi": "'परिवार नियोजन' शब्द किसे संदर्भित करता है?",
        "options_en": ["Spacing of children", "Regulation of birth", "Limitation of children", "All of the above"],
        "options_hi": ["बच्चों का अंतराल", "जन्म का नियंत्रण", "बच्चों की संख्या का सीमित करना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which contraceptive method does not involve any medical intervention?",
        "question_hi": "कौन सा गर्भ निरोधन तरीका किसी भी चिकित्सा हस्तक्षेप के बिना है?",
        "options_en": ["Condom", "Vasectomy", "Oral contraceptives", "IUD"],
        "options_hi": ["कंडोम", "वेसेक्टॉमी", "ओरल गर्भ निरोधन गोलियां", "IUD"],
        "answer": "Condom",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "What is the main reason for infertility in males?",
        "question_hi": "पुरुषों में बांझपन का मुख्य कारण क्या है?",
        "options_en": ["Low sperm count", "Imbalance of hormones", "Obstruction in the vas deferens", "All of the above"],
        "options_hi": ["कम शुक्राणु संख्या", "हार्मोन का असंतुलन", "वीर्य वाहिनी में अवरोध", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "What is the main cause of infertility in females?",
        "question_hi": "महिलाओं में बांझपन का मुख्य कारण क्या है?",
        "options_en": ["Ovulation disorder", "Fallopian tube blockage", "Hormonal imbalance", "All of the above"],
        "options_hi": ["अंडोत्सर्जन विकार", "फैलोपियन ट्यूब में रुकावट", "हार्मोनल असंतुलन", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which of the following is a common contraceptive method?",
        "question_hi": "निम्नलिखित में से कौन सा सामान्य गर्भ निरोधन तरीका है?",
        "options_en": ["IUD", "Sterilization", "Condom", "All of the above"],
        "options_hi": ["IUD", "स्थिरीकरण", "कंडोम", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "What is the most effective contraceptive method?",
        "question_hi": "सबसे प्रभावी गर्भ निरोधन तरीका कौन सा है?",
        "options_en": ["Sterilization", "Oral contraceptives", "Condom", "IUD"],
        "options_hi": ["स्थिरीकरण", "ओरल गर्भ निरोधन गोलियां", "कंडोम", "IUD"],
        "answer": "Sterilization",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What is the function of the contraceptive pill?",
        "question_hi": "गर्भ निरोधन गोली का क्या कार्य है?",
        "options_en": ["Inhibits ovulation", "Inhibits fertilization", "Thickens cervical mucus", "All of the above"],
        "options_hi": ["अंडोत्सर्जन को रोकता है", "निषेचन को रोकता है", "गर्भाशय की श्लेष्मा को गाढ़ा करता है", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What is the primary objective of family planning?",
        "question_hi": "परिवार नियोजन का मुख्य उद्देश्य क्या है?",
        "options_en": ["Control population", "Prevent unwanted pregnancies", "Promote reproductive health", "All of the above"],
        "options_hi": ["जनसंख्या को नियंत्रित करना", "अनचाही गर्भधारण को रोकना", "प्रजनन स्वास्थ्य को बढ़ावा देना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "What is the most common method of contraception used worldwide?",
        "question_hi": "दुनिया भर में सबसे सामान्य गर्भ निरोधन तरीका कौन सा है?",
        "options_en": ["Condom", "Oral contraceptives", "Sterilization", "IUD"],
        "options_hi": ["कंडोम", "ओरल गर्भ निरोधन गोलियां", "स्थिरीकरण", "IUD"],
        "answer": "Condom",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which of the following methods requires medical intervention?",
        "question_hi": "निम्नलिखित में से कौन सा तरीका चिकित्सा हस्तक्षेप की आवश्यकता होती है?",
        "options_en": ["Vasectomy", "Condom", "Natural family planning", "All of the above"],
        "options_hi": ["वेसेक्टॉमी", "कंडोम", "प्राकृतिक परिवार नियोजन", "इनमें से सभी"],
        "answer": "Vasectomy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "What is the role of progesterone in contraceptive pills?",
        "question_hi": "गर्भ निरोधन गोलियों में प्रोजेस्टेरोन की क्या भूमिका है?",
        "options_en": ["Prevent ovulation", "Thicken cervical mucus", "Inhibit sperm entry", "All of the above"],
        "options_hi": ["अंडोत्सर्जन को रोकना", "गर्भाशय की श्लेष्मा को गाढ़ा करना", "वीर्य प्रवेश को रोकना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "What is the effect of the oral contraceptive pill on ovulation?",
        "question_hi": "ओरल गर्भ निरोधन गोली का अंडोत्सर्जन पर क्या प्रभाव पड़ता है?",
        "options_en": ["It prevents ovulation", "It enhances ovulation", "It has no effect on ovulation", "None of the above"],
        "options_hi": ["यह अंडोत्सर्जन को रोकता है", "यह अंडोत्सर्जन को बढ़ाता है", "यह अंडोत्सर्जन पर कोई प्रभाव नहीं डालता", "इनमें से कोई नहीं"],
        "answer": "It prevents ovulation",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which of the following is NOT a method of contraception?",
        "question_hi": "निम्नलिखित में से कौन सा गर्भ निरोधन का तरीका नहीं है?",
        "options_en": ["Sterilization", "Vasectomy", "Oral contraceptives", "Pregnancy"],
        "options_hi": ["स्थिरीकरण", "वेसेक्टॉमी", "ओरल गर्भ निरोधन गोलियां", "गर्भावस्था"],
        "answer": "Pregnancy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "What is the main advantage of using condoms?",
        "question_hi": "कंडोम का उपयोग करने का मुख्य लाभ क्या है?",
        "options_en": ["Prevents sexually transmitted infections", "Prevents pregnancy", "Both A and B", "None of the above"],
        "options_hi": ["यौन संचारित संक्रमणों को रोकता है", "गर्भावस्था को रोकता है", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer": "Both A and B",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which of the following is a natural method of contraception?",
        "question_hi": "निम्नलिखित में से कौन सा प्राकृतिक गर्भ निरोधन तरीका है?",
        "options_en": ["Condom", "Periodic abstinence", "Sterilization", "IUD"],
        "options_hi": ["कंडोम", "अवधिक संयम", "स्थिरीकरण", "IUD"],
        "answer": "Periodic abstinence",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "What is the main advantage of using IUD?",
        "question_hi": "IUD का उपयोग करने का मुख्य लाभ क्या है?",
        "options_en": ["Long-term protection", "Non-hormonal", "Reversible", "All of the above"],
        "options_hi": ["दीर्घकालिक सुरक्षा", "गैर-हार्मोनल", "विपरीत होने योग्य", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "What is the full form of MTP?",
        "question_hi": "MTP का पूरा नाम क्या है?",
        "options_en": ["Medical Termination of Pregnancy", "Menstrual Termination Process", "Moral Termination of Pregnancy", "None of the above"],
        "options_hi": ["गर्भावस्था का चिकित्सा समाप्ति", "मासिक धर्म समाप्ति प्रक्रिया", "गर्भावस्था का नैतिक समाप्ति", "इनमें से कोई नहीं"],
        "answer": "Medical Termination of Pregnancy",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "What is the major cause of unsafe abortion?",
        "question_hi": "असुरक्षित गर्भपात का प्रमुख कारण क्या है?",
        "options_en": ["Lack of proper medical facilities", "Lack of awareness", "Untrained personnel", "All of the above"],
        "options_hi": ["उचित चिकित्सा सुविधाओं की कमी", "जागरूकता की कमी", "अप्रशिक्षित कर्मी", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "What is the main reason for increasing cases of sexually transmitted diseases?",
        "question_hi": "यौन संचारित रोगों के बढ़ते मामलों का मुख्य कारण क्या है?",
        "options_en": ["Unprotected sex", "Lack of awareness", "Multiple sexual partners", "All of the above"],
        "options_hi": ["असुरक्षित यौन संबंध", "जागरूकता की कमी", "कई यौन साथी", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "What is the role of FSH in female reproductive system?",
        "question_hi": "महिला प्रजनन तंत्र में FSH की क्या भूमिका है?",
        "options_en": ["Stimulates ovulation", "Stimulates production of estrogen", "Stimulates follicle growth", "All of the above"],
        "options_hi": ["अंडोत्सर्जन को उत्तेजित करता है", "एस्ट्रोजेन के उत्पादन को उत्तेजित करता है", "फॉलिकल वृद्धि को उत्तेजित करता है", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "What does the term 'artificial insemination' refer to?",
        "question_hi": "'कृत्रिम गर्भाधान' शब्द किसे संदर्भित करता है?",
        "options_en": ["Introducing sperm into the female reproductive system", "Introducing egg into the female reproductive system", "Both A and B", "None of the above"],
        "options_hi": ["शुक्राणु को महिला प्रजनन तंत्र में पेश करना", "अंडाणु को महिला प्रजनन तंत्र में पेश करना", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer": "Introducing sperm into the female reproductive system",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "What is the technique of cloning?",
        "question_hi": "क्लोनिंग की तकनीक क्या है?",
        "options_en": ["Reproductive cloning", "Therapeutic cloning", "Gene cloning", "All of the above"],
        "options_hi": ["प्रजनन क्लोनिंग", "चिकित्सीय क्लोनिंग", "जीन क्लोनिंग", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is the primary goal of pre-natal care?",
        "question_hi": "पूर्व-प्रसूति देखभाल का मुख्य उद्देश्य क्या है?",
        "options_en": ["Ensure a healthy pregnancy", "Prevent complications", "Monitor fetal development", "All of the above"],
        "options_hi": ["स्वस्थ गर्भावस्था सुनिश्चित करना", "जटिलताओं को रोकना", "भ्रूण के विकास की निगरानी करना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "What is the main benefit of breastfeeding?",
        "question_hi": "स्तनपान का मुख्य लाभ क्या है?",
        "options_en": ["Provides essential nutrients", "Boosts immunity", "Strengthens emotional bond", "All of the above"],
        "options_hi": ["आवश्यक पोषक तत्व प्रदान करता है", "प्रतिरक्षा को बढ़ाता है", "भावनात्मक संबंध को मजबूत करता है", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "What is the full form of ART in reproductive health?",
        "question_hi": "प्रजनन स्वास्थ्य में ART का पूरा नाम क्या है?",
        "options_en": ["Assisted Reproductive Technology", "Artificial Reproductive Treatment", "Artificial Reproductive Technology", "Assisted Reproductive Treatment"],
        "options_hi": ["सहायता प्राप्त प्रजनन तकनीकी", "कृत्रिम प्रजनन उपचार", "कृत्रिम प्रजनन तकनीकी", "सहायता प्राप्त प्रजनन उपचार"],
        "answer": "Assisted Reproductive Technology",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What is in vitro fertilization (IVF)?",
        "question_hi": "इन विट्रो निषेचन (IVF) क्या है?",
        "options_en": ["Fertilization outside the body", "Fertilization inside the body", "Fertilization in the uterus", "None of the above"],
        "options_hi": ["शरीर के बाहर निषेचन", "शरीर के अंदर निषेचन", "गर्भाशय में निषेचन", "इनमें से कोई नहीं"],
        "answer": "Fertilization outside the body",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What is the main aim of genetic counseling?",
        "question_hi": "जैविक परामर्श का मुख्य उद्देश्य क्या है?",
        "options_en": ["Prevent genetic disorders", "Detect inherited diseases", "Guide family planning", "All of the above"],
        "options_hi": ["जैविक विकारों को रोकना", "विरासत में मिली बीमारियों का पता लगाना", "परिवार नियोजन में मार्गदर्शन करना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Which of the following is a sign of good reproductive health?",
        "question_hi": "निम्नलिखित में से कौन सा अच्छा प्रजनन स्वास्थ्य का संकेत है?",
        "options_en": ["Regular menstrual cycles", "Good nutrition", "Physical fitness", "All of the above"],
        "options_hi": ["नियमित मासिक धर्म चक्र", "अच्छी पोषण", "शारीरिक फिटनेस", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What is the role of human chorionic gonadotropin (hCG) in pregnancy?",
        "question_hi": "गर्भावस्था में मानव कोरियोनिक गोनाडोट्रॉपिन (hCG) की क्या भूमिका है?",
        "options_en": ["Maintain corpus luteum", "Stimulate ovulation", "Promote lactation", "None of the above"],
        "options_hi": ["कॉर्पस ल्यूटियम को बनाए रखना", "अंडोत्सर्जन को उत्तेजित करना", "दूध उत्पादन को बढ़ावा देना", "इनमें से कोई नहीं"],
        "answer": "Maintain corpus luteum",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "What is the most common sexually transmitted infection (STI)?",
        "question_hi": "सबसे सामान्य यौन संचारित संक्रमण (STI) क्या है?",
        "options_en": ["Chlamydia", "HIV", "Syphilis", "Gonorrhea"],
        "options_hi": ["क्लैमिडिया", "HIV", "सिफिलिस", "गोनोरिया"],
        "answer": "Chlamydia",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "What is the key function of estrogen during the menstrual cycle?",
        "question_hi": "मासिक धर्म चक्र के दौरान एस्ट्रोजेन का प्रमुख कार्य क्या है?",
        "options_en": ["Stimulate the development of secondary sexual characteristics", "Inhibit ovulation", "Thicken the endometrial lining", "All of the above"],
        "options_hi": ["द्वितीयक यौन लक्षणों के विकास को उत्तेजित करना", "अंडोत्सर्जन को रोकना", "एंडोमेट्रियल परत को गाढ़ा करना", "इनमें से सभी"],
        "answer": "Thicken the endometrial lining",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "What is the function of the luteal phase in the menstrual cycle?",
        "question_hi": "मासिक धर्म चक्र में ल्यूटियल चरण का कार्य क्या है?",
        "options_en": ["To prepare the uterus for implantation", "To initiate ovulation", "To thicken cervical mucus", "None of the above"],
        "options_hi": ["गर्भाशय को प्रत्यारोपण के लिए तैयार करना", "अंडोत्सर्जन की शुरुआत करना", "गर्भाशय ग्रीवा की श्लेष्मा को गाढ़ा करना", "इनमें से कोई नहीं"],
        "answer": "To prepare the uterus for implantation",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which of the following contraceptive methods does not involve any surgery?",
        "question_hi": "निम्नलिखित में से कौन सा गर्भ निरोधन तरीका किसी भी शल्य चिकित्सा में शामिल नहीं है?",
        "options_en": ["Condoms", "Vasectomy", "Tubectomy", "Sterilization"],
        "options_hi": ["कंडोम", "वेसेक्टॉमी", "ट्यूबेक्टॉमी", "स्थिरीकरण"],
        "answer": "Condoms",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which hormone is responsible for the development of male secondary sexual characteristics?",
        "question_hi": "कौन सा हार्मोन पुरुषों में द्वितीयक यौन लक्षणों के विकास के लिए जिम्मेदार है?",
        "options_en": ["Testosterone", "Estrogen", "Progesterone", "FSH"],
        "options_hi": ["टेस्टोस्टेरोन", "एस्ट्रोजेन", "प्रोजेस्टेरोन", "FSH"],
        "answer": "Testosterone",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "What is the main goal of in vitro fertilization (IVF)?",
        "question_hi": "इन विट्रो निषेचन (IVF) का मुख्य उद्देश्य क्या है?",
        "options_en": ["To help infertile couples", "To study human genetics", "To prevent genetic disorders", "All of the above"],
        "options_hi": ["बांझ जोड़ों की मदद करना", "मानव आनुवंशिकी का अध्ययन करना", "जैविक विकारों को रोकना", "इनमें से सभी"],
        "answer": "To help infertile couples",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "What is the main cause of infertility in females?",
        "question_hi": "महिलाओं में बांझपन का मुख्य कारण क्या है?",
        "options_en": ["Polycystic ovarian syndrome", "Low sperm count", "Hormonal imbalance", "All of the above"],
        "options_hi": ["पॉलीसिस्टिक अंडाशय सिंड्रोम", "कम शुक्राणु की संख्या", "हार्मोनल असंतुलन", "इनमें से सभी"],
        "answer": "Polycystic ovarian syndrome",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Which of the following is a method of artificial insemination?",
        "question_hi": "निम्नलिखित में से कौन सा कृत्रिम गर्भाधान का तरीका है?",
        "options_en": ["Intrauterine insemination (IUI)", "In vitro fertilization (IVF)", "Gamete intrafallopian transfer (GIFT)", "All of the above"],
        "options_hi": ["गर्भाशय के अंदर शुक्राणु का प्रवेश (IUI)", "इन विट्रो निषेचन (IVF)", "गैमेट इंट्राफेलोपियन ट्रांसफर (GIFT)", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "What is the function of oxytocin during childbirth?",
        "question_hi": "प्रसव के दौरान ऑक्सीटोसिन का कार्य क्या है?",
        "options_en": ["Stimulate uterine contractions", "Inhibit ovulation", "Stimulate milk production", "All of the above"],
        "options_hi": ["गर्भाशय के संकुचन को उत्तेजित करना", "अंडोत्सर्जन को रोकना", "दूध उत्पादन को उत्तेजित करना", "इनमें से सभी"],
        "answer": "Stimulate uterine contractions",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which of the following is an example of a sexually transmitted infection (STI)?",
        "question_hi": "निम्नलिखित में से कौन सा यौन संचारित संक्रमण (STI) का उदाहरण है?",
        "options_en": ["HIV", "Malaria", "Tuberculosis", "All of the above"],
        "options_hi": ["HIV", "मलेरिया", "तपेदिक", "इनमें से सभी"],
        "answer": "HIV",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "What is the main function of the placenta during pregnancy?",
        "question_hi": "गर्भावस्था के दौरान प्लेसेंटा का मुख्य कार्य क्या है?",
        "options_en": ["Provide nutrients to the fetus", "Remove waste from the fetus", "Produce hormones to maintain pregnancy", "All of the above"],
        "options_hi": ["भ्रूण को पोषक तत्व प्रदान करना", "भ्रूण से अपशिष्ट को निकालना", "गर्भावस्था बनाए रखने के लिए हार्मोन का उत्पादन करना", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What is the purpose of amniocentesis?",
        "question_hi": "एम्नियोटेसिस का उद्देश्य क्या है?",
        "options_en": ["To detect genetic disorders", "To determine the sex of the baby", "To check fetal health", "All of the above"],
        "options_hi": ["जैविक विकारों का पता लगाने के लिए", "शिशु का लिंग निर्धारित करने के लिए", "भ्रूण के स्वास्थ्य की जांच करने के लिए", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      }
    // Continue adding more questions up to 30
];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
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

    updateCircles();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateCircles();
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

function updateCircles() {
    const circleContainer = document.getElementById("circleContainer");
    circleContainer.innerHTML = "";
    const start = currentCirclePage * circlesPerPage;
    const end = Math.min(start + circlesPerPage, questions.length);

    for (let i = start; i < end; i++) {
        const q = questions[i];
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

function prevCirclePage() {
    if (currentCirclePage > 0) {
        currentCirclePage--;
        updateCircles();
    }
}

function nextCirclePage() {
    if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
        currentCirclePage++;
        updateCircles();
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0, notAttempted = 0, score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting the quiz automatically.");
            submitQuiz();
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

window.onload = function () {
    startTimer();
    loadQuestion(currentQuestion);
};
