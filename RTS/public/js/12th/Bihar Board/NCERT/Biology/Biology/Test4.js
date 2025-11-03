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

let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
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
