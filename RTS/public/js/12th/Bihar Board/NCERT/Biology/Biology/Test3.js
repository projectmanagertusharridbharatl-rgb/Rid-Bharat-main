const questions = [
    {
        "num": 1,
        "question_en": "Which hormone is responsible for the development of secondary sexual characters in males?",
        "question_hi": "पुरुषों में द्वितीयक यौन लक्षणों के विकास के लिए कौन सा हार्मोन जिम्मेदार होता है?",
        "options_en": ["Estrogen", "Progesterone", "Testosterone", "LH"],
        "options_hi": ["एस्ट्रोजन", "प्रोजेस्टेरोन", "टेस्टोस्टेरोन", "एलएच"],
        "answer": "Testosterone",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "What is the function of Sertoli cells?",
        "question_hi": "सेरटोली कोशिकाओं का कार्य क्या है?",
        "options_en": ["Secrete testosterone", "Provide nutrition to sperms", "Secrete estrogen", "Form ovum"],
        "options_hi": ["टेस्टोस्टेरोन स्रावित करना", "शुक्राणुओं को पोषण देना", "एस्ट्रोजन स्रावित करना", "अंडाणु बनाना"],
        "answer": "Provide nutrition to sperms",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Where does fertilization occur in humans?",
        "question_hi": "मानवों में निषेचन कहाँ होता है?",
        "options_en": ["Uterus", "Vagina", "Fallopian tube", "Ovary"],
        "options_hi": ["गर्भाशय", "योनि", "फैलोपियन ट्यूब", "अंडाशय"],
        "answer": "Fallopian tube",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "What is the function of the acrosome in sperm?",
        "question_hi": "शुक्राणु में एक्रोसोम का कार्य क्या है?",
        "options_en": ["Energy production", "Genetic material storage", "Ovum penetration", "Movement"],
        "options_hi": ["ऊर्जा उत्पादन", "आनुवंशिक सामग्री का संग्रह", "अंडाणु में प्रवेश", "गति"],
        "answer": "Ovum penetration",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Which hormone triggers ovulation?",
        "question_hi": "कौन सा हार्मोन अंडोत्सर्ग को प्रेरित करता है?",
        "options_en": ["FSH", "Estrogen", "LH", "Progesterone"],
        "options_hi": ["एफएसएच", "एस्ट्रोजन", "एलएच", "प्रोजेस्टेरोन"],
        "answer": "LH",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "What is the first menstrual flow called?",
        "question_hi": "प्रथम मासिक स्राव को क्या कहा जाता है?",
        "options_en": ["Menopause", "Menarche", "Ovulation", "Puberty"],
        "options_hi": ["रजोनिवृत्ति", "रजोदर्शन", "अंडोत्सर्ग", "किशोरावस्था"],
        "answer": "Menarche",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which structure in testes produces sperm?",
        "question_hi": "वृषण की कौन सी संरचना शुक्राणु बनाती है?",
        "options_en": ["Epididymis", "Vas deferens", "Seminiferous tubules", "Prostate gland"],
        "options_hi": ["अंडग्रंथि", "वास डिफरेंस", "सेमिनीफेरस ट्यूब्यूल्स", "प्रोस्टेट ग्रंथि"],
        "answer": "Seminiferous tubules",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "What is the chromosomal composition of a zygote?",
        "question_hi": "ज़ाइगोट की गुणसूत्र संरचना क्या होती है?",
        "options_en": ["23", "46", "22", "44"],
        "options_hi": ["23", "46", "22", "44"],
        "answer": "46",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "What is the function of corpus luteum?",
        "question_hi": "कॉर्पस ल्यूटियम का कार्य क्या है?",
        "options_en": ["Forms placenta", "Produces estrogen", "Secretes progesterone", "Causes menstruation"],
        "options_hi": ["प्लेसेंटा बनाता है", "एस्ट्रोजन बनाता है", "प्रोजेस्टेरोन स्रावित करता है", "मासिक धर्म कराता है"],
        "answer": "Secretes progesterone",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which hormone is responsible for milk production?",
        "question_hi": "दूध उत्पादन के लिए कौन सा हार्मोन जिम्मेदार होता है?",
        "options_en": ["Oxytocin", "Estrogen", "Prolactin", "hCG"],
        "options_hi": ["ऑक्सीटोसिन", "एस्ट्रोजन", "प्रोलैक्टिन", "hCG"],
        "answer": "Prolactin",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which part of sperm contains mitochondria?",
        "question_hi": "शुक्राणु का कौन सा भाग माइटोकॉन्ड्रिया से युक्त होता है?",
        "options_en": ["Head", "Tail", "Middle piece", "Acrosome"],
        "options_hi": ["सिर", "पूंछ", "मध्य भाग", "एक्रोसोम"],
        "answer": "Middle piece",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which layer of uterus is shed during menstruation?",
        "question_hi": "मासिक धर्म के दौरान गर्भाशय की कौन सी परत झड़ती है?",
        "options_en": ["Myometrium", "Perimetrium", "Endometrium", "Epithelium"],
        "options_hi": ["मायोमेट्रियम", "पेरिमीट्रियम", "एंडोमेट्रियम", "एपिथीलियम"],
        "answer": "Endometrium",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "What is the name of the hormone detected in pregnancy tests?",
        "question_hi": "गर्भावस्था परीक्षण में पहचाना जाने वाला हार्मोन कौन सा है?",
        "options_en": ["LH", "FSH", "hCG", "Progesterone"],
        "options_hi": ["LH", "FSH", "hCG", "प्रोजेस्टेरोन"],
        "answer": "hCG",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which of the following is not part of the male reproductive system?",
        "question_hi": "निम्नलिखित में से कौन पुरुष प्रजनन तंत्र का हिस्सा नहीं है?",
        "options_en": ["Vas deferens", "Seminal vesicle", "Ovary", "Penis"],
        "options_hi": ["वास डिफरेंस", "सेमिनल वेसीकल", "अंडाशय", "लिंग"],
        "answer": "Ovary",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Semen is a mixture of secretions from which glands?",
        "question_hi": "वीर्य किन ग्रंथियों के स्रावों का मिश्रण होता है?",
        "options_en": ["Seminal vesicle", "Prostate gland", "Bulbourethral gland", "All of these"],
        "options_hi": ["सेमिनल वेसीकल", "प्रोस्टेट ग्रंथि", "बल्बोयूरेथ्रल ग्रंथि", "इनमें सभी"],
        "answer": "All of these",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What is the full form of IVF?",
        "question_hi": "IVF का पूरा नाम क्या है?",
        "options_en": ["In Vivo Fertilization", "In Vitro Fertilization", "Internal Vaginal Fertilization", "None"],
        "options_hi": ["इन विवो फर्टिलाइजेशन", "इन विट्रो फर्टिलाइजेशन", "इंटरनल वैजाइनल फर्टिलाइजेशन", "इनमें से कोई नहीं"],
        "answer": "In Vitro Fertilization",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What prevents multiple sperms from entering the ovum?",
        "question_hi": "एक से अधिक शुक्राणु के अंडाणु में प्रवेश को क्या रोकता है?",
        "options_en": ["Zona pellucida", "Acrosome", "Corona radiata", "Centrosome"],
        "options_hi": ["जोना पेल्यूसिडा", "एक्रोसोम", "कोरोना रेडियाटा", "सेंट्रोसोम"],
        "answer": "Zona pellucida",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "What type of cell division occurs during gametogenesis?",
        "question_hi": "गैमेटोजेनेसिस के दौरान किस प्रकार का कोशिका विभाजन होता है?",
        "options_en": ["Mitosis", "Meiosis", "Amitosis", "Binary fission"],
        "options_hi": ["माइटोसिस", "मीओसिस", "अमाइटोसिस", "बाइनरी फिशन"],
        "answer": "Meiosis",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which organelle helps in sperm motility?",
        "question_hi": "शुक्राणु की गति में कौन सा कोशिकांग सहायता करता है?",
        "options_en": ["Mitochondria", "Lysosome", "Golgi apparatus", "Ribosome"],
        "options_hi": ["माइटोकॉन्ड्रिया", "लाइसोसोम", "गोल्जी उपकरण", "राइबोसोम"],
        "answer": "Mitochondria",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which hormone maintains pregnancy?",
        "question_hi": "गर्भावस्था को बनाए रखने के लिए कौन सा हार्मोन जिम्मेदार है?",
        "options_en": ["Estrogen", "hCG", "Progesterone", "FSH"],
        "options_hi": ["एस्ट्रोजन", "hCG", "प्रोजेस्टेरोन", "एफएसएच"],
        "answer": "Progesterone",
        "attempted": false,
        "selected": ""
      },
        {
          "num": 21,
          "question_en": "What is the primary function of the testes?",
          "question_hi": "वृषण का प्राथमिक कार्य क्या है?",
          "options_en": ["Secrete estrogen", "Secrete testosterone", "Produce sperm", "Both B and C"],
          "options_hi": ["एस्ट्रोजन स्रावित करना", "टेस्टोस्टेरोन स्रावित करना", "शुक्राणु का निर्माण करना", "B और C दोनों"],
          "answer": "Both B and C",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "At what stage of meiosis does crossing over occur?",
          "question_hi": "मीओसिस के किस चरण में क्रॉसिंग ओवर होता है?",
          "options_en": ["Prophase I", "Metaphase I", "Anaphase I", "Telophase II"],
          "options_hi": ["प्रोफेज I", "मेटाफेज I", "एनाफेज I", "टेलोफेज II"],
          "answer": "Prophase I",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Which part of the female reproductive system receives the sperm during copulation?",
          "question_hi": "स्त्री प्रजनन तंत्र का कौन सा भाग संलयन के दौरान शुक्राणु प्राप्त करता है?",
          "options_en": ["Ovary", "Uterus", "Cervix", "Vagina"],
          "options_hi": ["अंडाशय", "गर्भाशय", "गर्भाशय ग्रीवा", "योनि"],
          "answer": "Vagina",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "What is the function of the epididymis?",
          "question_hi": "एपिडिडाइमिस का कार्य क्या है?",
          "options_en": ["Sperm production", "Sperm maturation", "Sperm transport", "Sperm secretion"],
          "options_hi": ["शुक्राणु उत्पादन", "शुक्राणु परिपक्वता", "शुक्राणु परिवहन", "शुक्राणु स्राव"],
          "answer": "Sperm maturation",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "What is the function of oxytocin during childbirth?",
          "question_hi": "प्रसव के दौरान ऑक्सीटोसिन का कार्य क्या है?",
          "options_en": ["Stimulates uterine contractions", "Inhibits uterine contractions", "Stimulates milk production", "Prevents lactation"],
          "options_hi": ["गर्भाशय में संकुचन को उत्तेजित करता है", "गर्भाशय में संकुचन को रोकता है", "दूध उत्पादन को उत्तेजित करता है", "दूध उत्पादन को रोकता है"],
          "answer": "Stimulates uterine contractions",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 26,
          "question_en": "What is the function of the placenta?",
          "question_hi": "प्लेसेंटा का कार्य क्या है?",
          "options_en": ["Nutrition exchange between mother and fetus", "Gas exchange", "Removal of waste products", "All of these"],
          "options_hi": ["माँ और भ्रूण के बीच पोषण का आदान-प्रदान", "गैसों का आदान-प्रदान", "अपशिष्ट पदार्थों की निकासी", "इनमें से सभी"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 27,
          "question_en": "What is the process of fertilization?",
          "question_hi": "निषेचन की प्रक्रिया क्या है?",
          "options_en": ["Fusion of sperm and egg", "Formation of zygote", "Both A and B", "None of these"],
          "options_hi": ["शुक्राणु और अंडाणु का मिलन", "ज़ाइगोट का निर्माण", "A और B दोनों", "इनमें से कोई नहीं"],
          "answer": "Both A and B",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 28,
          "question_en": "What is the name of the structure that connects the fetus to the placenta?",
          "question_hi": "वह संरचना जिसका नाम है जो भ्रूण को प्लेसेंटा से जोड़ती है, क्या है?",
          "options_en": ["Amniotic sac", "Umbilical cord", "Fallopian tube", "Vagina"],
          "options_hi": ["एम्नियोटिक थैली", "नाभि रस्सी", "फैलोपियन ट्यूब", "योनि"],
          "answer": "Umbilical cord",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 29,
          "question_en": "Which of the following is a female gonad?",
          "question_hi": "निम्नलिखित में से कौन सा स्त्री गोनाड है?",
          "options_en": ["Testes", "Ovary", "Penis", "Vagina"],
          "options_hi": ["वृषण", "अंडाशय", "लिंग", "योनि"],
          "answer": "Ovary",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 30,
          "question_en": "What is the name of the sac that protects the developing embryo in humans?",
          "question_hi": "मानवों में भ्रूण के विकास को सुरक्षा देने वाली थैली का नाम क्या है?",
          "options_en": ["Amniotic sac", "Placenta", "Endometrium", "Ovum"],
          "options_hi": ["एम्नियोटिक थैली", "प्लेसेंटा", "एंडोमेट्रियम", "अंडाणु"],
          "answer": "Amniotic sac",
          "attempted": false,
          "selected": ""
        },
            {
              "num": 31,
              "question_en": "What is the site of fertilization in humans?",
              "question_hi": "मानवों में निषेचन का स्थान क्या है?",
              "options_en": ["Ovary", "Uterus", "Fallopian tube", "Vagina"],
              "options_hi": ["अंडाशय", "गर्भाशय", "फैलोपियन ट्यूब", "योनि"],
              "answer": "Fallopian tube",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 32,
              "question_en": "Which hormone is responsible for ovulation?",
              "question_hi": "अंडोत्सर्जन के लिए कौन सा हार्मोन जिम्मेदार है?",
              "options_en": ["Estrogen", "Progesterone", "Luteinizing hormone", "Testosterone"],
              "options_hi": ["एस्ट्रोजन", "प्रोस्टेरोन", "ल्यूटिनाइजिंग हार्मोन", "टेस्टोस्टेरोन"],
              "answer": "Luteinizing hormone",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 33,
              "question_en": "What is the function of the corpus luteum?",
              "question_hi": "कॉर्पस ल्यूटियम का कार्य क्या है?",
              "options_en": ["Secrete estrogen", "Secrete progesterone", "Secrete testosterone", "All of the above"],
              "options_hi": ["एस्ट्रोजन स्रावित करना", "प्रोस्टेरोन स्रावित करना", "टेस्टोस्टेरोन स्रावित करना", "इनमें से सभी"],
              "answer": "Secrete progesterone",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 34,
              "question_en": "What is the role of FSH in the female reproductive system?",
              "question_hi": "स्त्री प्रजनन तंत्र में FSH का क्या कार्य है?",
              "options_en": ["Stimulates egg production", "Stimulates ovulation", "Stimulates progesterone secretion", "Stimulates estrogen secretion"],
              "options_hi": ["अंडाणु उत्पादन को उत्तेजित करता है", "अंडोत्सर्जन को उत्तेजित करता है", "प्रोस्टेरोन स्राव को उत्तेजित करता है", "एस्ट्रोजन स्राव को उत्तेजित करता है"],
              "answer": "Stimulates egg production",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 35,
              "question_en": "What is the role of estrogen during the menstrual cycle?",
              "question_hi": "मासिक धर्म चक्र के दौरान एस्ट्रोजन का क्या कार्य है?",
              "options_en": ["Stimulates thickening of the endometrium", "Inhibits ovulation", "Stimulates corpus luteum formation", "Inhibits progesterone secretion"],
              "options_hi": ["एंडोमेट्रियम के मोटा होने को उत्तेजित करता है", "अंडोत्सर्जन को रोकता है", "कॉर्पस ल्यूटियम निर्माण को उत्तेजित करता है", "प्रोस्टेरोन स्राव को रोकता है"],
              "answer": "Stimulates thickening of the endometrium",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 36,
              "question_en": "Where does the sperm maturation take place?",
              "question_hi": "शुक्राणु परिपक्वता कहाँ होती है?",
              "options_en": ["Seminal vesicle", "Vas deferens", "Epididymis", "Urethra"],
              "options_hi": ["वीर्याशय", "वीर्य वाहिनी", "एपिडिडाइमिस", "युरेथ्रा"],
              "answer": "Epididymis",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 37,
              "question_en": "What is the process of implantation?",
              "question_hi": "इम्प्लांटेशन की प्रक्रिया क्या है?",
              "options_en": ["Entry of sperm into egg", "Development of the embryo", "Attachment of the blastocyst to the endometrium", "Formation of zygote"],
              "options_hi": ["शुक्राणु का अंडाणु में प्रवेश", "भ्रूण का विकास", "ब्लास्टोसिस्ट का एंडोमेट्रियम से जुड़ना", "ज़ाइगोट का निर्माण"],
              "answer": "Attachment of the blastocyst to the endometrium",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 38,
              "question_en": "What is the role of prolactin?",
              "question_hi": "प्रोलैक्टिन का क्या कार्य है?",
              "options_en": ["Stimulate milk production", "Stimulate uterine contractions", "Inhibit milk production", "Regulate menstrual cycle"],
              "options_hi": ["दूध उत्पादन को उत्तेजित करना", "गर्भाशय में संकुचन को उत्तेजित करना", "दूध उत्पादन को रोकना", "मासिक धर्म चक्र को नियंत्रित करना"],
              "answer": "Stimulate milk production",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 39,
              "question_en": "What is the duration of the menstrual cycle?",
              "question_hi": "मासिक धर्म चक्र की अवधि कितनी होती है?",
              "options_en": ["21-28 days", "28-35 days", "35-42 days", "42-50 days"],
              "options_hi": ["21-28 दिन", "28-35 दिन", "35-42 दिन", "42-50 दिन"],
              "answer": "21-28 days",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 40,
              "question_en": "Which hormone is secreted by the placenta during pregnancy?",
              "question_hi": "गर्भावस्था के दौरान प्लेसेंटा कौन सा हार्मोन स्रावित करता है?",
              "options_en": ["Estrogen", "Progesterone", "Human chorionic gonadotropin", "Testosterone"],
              "options_hi": ["एस्ट्रोजन", "प्रोस्टेरोन", "ह्यूमन कोरियोनिक गोनाडोट्रॉपिन", "टेस्टोस्टेरोन"],
              "answer": "Human chorionic gonadotropin",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 41,
              "question_en": "Which of the following is the male reproductive organ?",
              "question_hi": "निम्नलिखित में से कौन सा पुरुष प्रजनन अंग है?",
              "options_en": ["Ovary", "Testes", "Uterus", "Vagina"],
              "options_hi": ["अंडाशय", "वृषण", "गर्भाशय", "योनि"],
              "answer": "Testes",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 42,
              "question_en": "What is the function of the seminal vesicles?",
              "question_hi": "वीर्याशय का कार्य क्या है?",
              "options_en": ["Secrete semen", "Secrete testosterone", "Secrete mucus", "Secrete insulin"],
              "options_hi": ["वीर्य स्रावित करते हैं", "टेस्टोस्टेरोन स्रावित करते हैं", "म्यूकस स्रावित करते हैं", "इंसुलिन स्रावित करते हैं"],
              "answer": "Secrete semen",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 43,
              "question_en": "How many chromosomes are present in human gametes?",
              "question_hi": "मानव गुणसूत्रों में कितने गुणसूत्र होते हैं?",
              "options_en": ["46", "23", "22", "44"],
              "options_hi": ["46", "23", "22", "44"],
              "answer": "23",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 44,
              "question_en": "The process of sperm formation is known as?",
              "question_hi": "शुक्राणु निर्माण की प्रक्रिया को क्या कहा जाता है?",
              "options_en": ["Spermatogenesis", "Oogenesis", "Fertilization", "Cytokinesis"],
              "options_hi": ["स्पर्मेटोजेनेसिस", "अंडोजेनेसिस", "निषेचन", "साइटोकाइनसिस"],
              "answer": "Spermatogenesis",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 45,
              "question_en": "What is the name of the male reproductive duct?",
              "question_hi": "पुरुष प्रजनन नलिका का नाम क्या है?",
              "options_en": ["Vas deferens", "Urethra", "Vagina", "Fallopian tube"],
              "options_hi": ["वीर्य वाहिनी", "युरेथ्रा", "योनि", "फैलोपियन ट्यूब"],
              "answer": "Vas deferens",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 46,
              "question_en": "How many sperm are produced in a single ejaculation?",
              "question_hi": "एकल स्खलन में कितने शुक्राणु बनाए जाते हैं?",
              "options_en": ["100 million", "50 million", "200 million", "500 million"],
              "options_hi": ["100 मिलियन", "50 मिलियन", "200 मिलियन", "500 मिलियन"],
              "answer": "100 million",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 47,
              "question_en": "What is the role of the acrosome in sperm?",
              "question_hi": "शुक्राणु में एक्रोसोम का क्या कार्य है?",
              "options_en": ["Secretes enzymes to penetrate the egg", "Stores sperm", "Helps in sperm movement", "Stimulates ovulation"],
              "options_hi": ["अंडाणु में प्रवेश के लिए एंजाइम स्रावित करता है", "शुक्राणु का भंडारण करता है", "शुक्राणु की गति में सहायता करता है", "अंडोत्सर्जन को उत्तेजित करता है"],
              "answer": "Secretes enzymes to penetrate the egg",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 48,
              "question_en": "What is the process of oogenesis?",
              "question_hi": "अंडोजेनेसिस की प्रक्रिया क्या है?",
              "options_en": ["Formation of eggs", "Sperm production", "Fertilization of the egg", "Formation of zygote"],
              "options_hi": ["अंडाणु का निर्माण", "शुक्राणु का निर्माण", "अंडाणु का निषेचन", "ज़ाइगोट का निर्माण"],
              "answer": "Formation of eggs",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 49,
              "question_en": "Which hormone is responsible for the development of secondary sexual characteristics in males?",
              "question_hi": "पुरुषों में द्वितीयक यौन लक्षणों के विकास के लिए कौन सा हार्मोन जिम्मेदार है?",
              "options_en": ["Testosterone", "Estrogen", "Progesterone", "Luteinizing hormone"],
              "options_hi": ["टेस्टोस्टेरोन", "एस्ट्रोजन", "प्रोस्टेरोन", "ल्यूटिनाइजिंग हार्मोन"],
              "answer": "Testosterone",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 50,
              "question_en": "What is the role of the amniotic fluid?",
              "question_hi": "एम्नियोटिक द्रव का क्या कार्य है?",
              "options_en": ["Provides nutrients to the fetus", "Protects the fetus", "Regulates temperature", "All of these"],
              "options_hi": ["भ्रूण को पोषक तत्व प्रदान करता है", "भ्रूण की सुरक्षा करता है", "तापमान को नियंत्रित करता है", "इनमें से सभी"],
              "answer": "All of these",
              "attempted": false,
              "selected": ""
            }
          
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
