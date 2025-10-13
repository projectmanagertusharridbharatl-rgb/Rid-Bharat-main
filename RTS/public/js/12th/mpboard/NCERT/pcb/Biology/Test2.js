const questions = [
     {
    num: 1,
    question_en: "Which of the following is not a part of the female reproductive system?",
    question_hi: "निम्नलिखित में से कौन महिला प्रजनन प्रणाली का हिस्सा नहीं है?",
    options_en: ["Ovary", "Uterus", "Vas deferens", "Fallopian tube"],
    options_hi: ["अंडाशय", "गर्भाशय", "वास डिफरेंस", "फैलोपियन ट्यूब"],
    answer_en: "Vas deferens",
    answer_hi: "वास डिफरेंस",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the function of the testes in humans?",
    question_hi: "मानवों में वृषण का कार्य क्या है?",
    options_en: ["Production of urine", "Production of sperm and testosterone", "Digestion", "Respiration"],
    options_hi: ["मूत्र का निर्माण", "शुक्राणु और टेस्टोस्टेरोन का निर्माण", "पाचन", "श्वसन"],
    answer_en: "Production of sperm and testosterone",
    answer_hi: "शुक्राणु और टेस्टोस्टेरोन का निर्माण",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which hormone is essential for ovulation?",
    question_hi: "अंडोत्सर्जन के लिए कौन सा हार्मोन आवश्यक है?",
    options_en: ["FSH", "LH", "TSH", "ACTH"],
    options_hi: ["एफएसएच", "एलएच", "टीएसएच", "एसीटीएच"],
    answer_en: "LH",
    answer_hi: "एलएच",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What is the site of fertilization in human females?",
    question_hi: "मानव महिलाओं में निषेचन का स्थान क्या है?",
    options_en: ["Ovary", "Uterus", "Vagina", "Fallopian tube"],
    options_hi: ["अंडाशय", "गर्भाशय", "योनि", "फैलोपियन ट्यूब"],
    answer_en: "Fallopian tube",
    answer_hi: "फैलोपियन ट्यूब",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "The term 'menarche' refers to:",
    question_hi: "'मेनार्क' शब्द का अर्थ है:",
    options_en: ["First menstruation", "Last menstruation", "Ovulation", "Pregnancy"],
    options_hi: ["पहला मासिक धर्म", "अंतिम मासिक धर्म", "अंडोत्सर्जन", "गर्भावस्था"],
    answer_en: "First menstruation",
    answer_hi: "पहला मासिक धर्म",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which of the following is a male accessory reproductive gland?",
    question_hi: "निम्नलिखित में से कौन एक पुरुष सहायक प्रजनन ग्रंथि है?",
    options_en: ["Pituitary", "Prostate", "Thyroid", "Pancreas"],
    options_hi: ["पिट्यूटरी", "प्रोस्टेट", "थायरॉयड", "अग्न्याशय"],
    answer_en: "Prostate",
    answer_hi: "प्रोस्टेट",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which of the following is the correct path of sperm in the male reproductive system?",
    question_hi: "पुरुष प्रजनन प्रणाली में शुक्राणु का सही मार्ग कौन सा है?",
    options_en: ["Testes → Urethra → Vas deferens", "Vas deferens → Testes → Urethra", "Testes → Vas deferens → Urethra", "Urethra → Vas deferens → Testes"],
    options_hi: ["वृषण → मूत्रमार्ग → वास डिफरेंस", "वास डिफरेंस → वृषण → मूत्रमार्ग", "वृषण → वास डिफरेंस → मूत्रमार्ग", "मूत्रमार्ग → वास डिफरेंस → वृषण"],
    answer_en: "Testes → Vas deferens → Urethra",
    answer_hi: "वृषण → वास डिफरेंस → मूत्रमार्ग",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Corpus luteum is formed from:",
    question_hi: "कॉर्पस ल्यूटियम किससे बनता है?",
    options_en: ["Graafian follicle", "Ovum", "Endometrium", "Zygote"],
    options_hi: ["ग्रेफियन कूप", "अंडाणु", "एंडोमेट्रियम", "जाइगोट"],
    answer_en: "Graafian follicle",
    answer_hi: "ग्रेफियन कूप",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which layer of the uterus is shed during menstruation?",
    question_hi: "मासिक धर्म के दौरान गर्भाशय की कौन सी परत झड़ती है?",
    options_en: ["Myometrium", "Perimetrium", "Endometrium", "Epimetrium"],
    options_hi: ["मायोमेट्रियम", "पेरिमीट्रियम", "एंडोमेट्रियम", "एपिमीट्रियम"],
    answer_en: "Endometrium",
    answer_hi: "एंडोमेट्रियम",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "How long is the average human menstrual cycle?",
    question_hi: "मानव मासिक धर्म चक्र की औसत अवधि कितनी होती है?",
    options_en: ["21 days", "28 days", "30 days", "35 days"],
    options_hi: ["21 दिन", "28 दिन", "30 दिन", "35 दिन"],
    answer_en: "28 days",
    answer_hi: "28 दिन",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which organ produces the hormone estrogen?",
    question_hi: "एस्ट्रोजन हार्मोन कौन सा अंग बनाता है?",
    options_en: ["Pancreas", "Ovary", "Testes", "Liver"],
    options_hi: ["अग्न्याशय", "अंडाशय", "वृषण", "यकृत"],
    answer_en: "Ovary",
    answer_hi: "अंडाशय",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which hormone is tested for in pregnancy tests?",
    question_hi: "गर्भावस्था परीक्षण में किस हार्मोन की जांच की जाती है?",
    options_en: ["FSH", "LH", "hCG", "TSH"],
    options_hi: ["एफएसएच", "एलएच", "एचसीजी", "टीएसएच"],
    answer_en: "hCG",
    answer_hi: "एचसीजी",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "In which structure does spermatogenesis occur?",
    question_hi: "शुक्रजनन किस संरचना में होता है?",
    options_en: ["Vas deferens", "Seminiferous tubules", "Epididymis", "Prostate gland"],
    options_hi: ["वास डिफरेंस", "सेमिनिफेरस ट्यूब्यूल्स", "एपीडिडिमिस", "प्रोस्टेट ग्रंथि"],
    answer_en: "Seminiferous tubules",
    answer_hi: "सेमिनिफेरस ट्यूब्यूल्स",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which structure connects the ovary to the uterus?",
    question_hi: "कौन सी संरचना अंडाशय को गर्भाशय से जोड़ती है?",
    options_en: ["Ureter", "Fallopian tube", "Cervix", "Vagina"],
    options_hi: ["यूरेटर", "फैलोपियन ट्यूब", "गर्भाशय ग्रीवा", "योनि"],
    answer_en: "Fallopian tube",
    answer_hi: "फैलोपियन ट्यूब",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the function of acrosome in sperm?",
    question_hi: "शुक्राणु में एक्रोसोम का कार्य क्या है?",
    options_en: ["Produces energy", "Contains digestive enzymes", "Stimulates ovulation", "Forms tail"],
    options_hi: ["ऊर्जा उत्पन्न करता है", "पाचन एंजाइम्स होते हैं", "अंडोत्सर्जन को उत्तेजित करता है", "पूंछ बनाता है"],
    answer_en: "Contains digestive enzymes",
    answer_hi: "पाचन एंजाइम्स होते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which hormone maintains the endometrium in early pregnancy?",
    question_hi: "प्रारंभिक गर्भावस्था में एंडोमेट्रियम को बनाए रखने वाला हार्मोन कौन सा है?",
    options_en: ["FSH", "LH", "Progesterone", "Estrogen"],
    options_hi: ["एफएसएच", "एलएच", "प्रोजेस्टेरोन", "एस्ट्रोजन"],
    answer_en: "Progesterone",
    answer_hi: "प्रोजेस्टेरोन",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "The process of delivery of the baby is called:",
    question_hi: "शिशु के जन्म की प्रक्रिया को क्या कहा जाता है?",
    options_en: ["Implantation", "Ovulation", "Parturition", "Fertilization"],
    options_hi: ["स्थापना", "अंडोत्सर्जन", "प्रसव", "निषेचन"],
    answer_en: "Parturition",
    answer_hi: "प्रसव",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "The first milk produced by the mother is called:",
    question_hi: "मां द्वारा उत्पन्न पहला दूध क्या कहलाता है?",
    options_en: ["Lactose", "Colostrum", "Milk plasma", "Whey"],
    options_hi: ["लैक्टोज", "कोलोस्ट्रम", "दूध प्लाज्मा", "व्हे"],
    answer_en: "Colostrum",
    answer_hi: "कोलोस्ट्रम",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "How many chromosomes are there in a human gamete?",
    question_hi: "मानव युग्मक में कितने गुणसूत्र होते हैं?",
    options_en: ["23", "46", "22", "24"],
    options_hi: ["23", "46", "22", "24"],
    answer_en: "23",
    answer_hi: "23",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which cell division occurs during gamete formation?",
    question_hi: "युग्मक निर्माण के दौरान कौन सा कोशिका विभाजन होता है?",
    options_en: ["Mitosis", "Meiosis", "Binary fission", "Amitosis"],
    options_hi: ["मायटोसिस", "मियोसिस", "बाइनरी फिशन", "अमायटोसिस"],
    answer_en: "Meiosis",
    answer_hi: "मियोसिस",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which part of the sperm contains mitochondria?",
    question_hi: "शुक्राणु के किस भाग में माइटोकॉन्ड्रिया होते हैं?",
    options_en: ["Head", "Middle piece", "Tail", "Acrosome"],
    options_hi: ["सिर", "मध्य भाग", "पूंछ", "एक्रोसोम"],
    answer_en: "Middle piece",
    answer_hi: "मध्य भाग",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which layer protects the embryo?",
    question_hi: "कौन सी परत भ्रूण की सुरक्षा करती है?",
    options_en: ["Amnion", "Chorion", "Endometrium", "Placenta"],
    options_hi: ["एम्नियन", "कोरियन", "एंडोमेट्रियम", "प्लेसेंटा"],
    answer_en: "Amnion",
    answer_hi: "एम्नियन",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "How many days after fertilization does implantation occur?",
    question_hi: "निषेचन के कितने दिनों बाद निषेचन होता है?",
    options_en: ["1 day", "7 days", "14 days", "21 days"],
    options_hi: ["1 दिन", "7 दिन", "14 दिन", "21 दिन"],
    answer_en: "7 days",
    answer_hi: "7 दिन",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which hormone induces milk production in mothers?",
    question_hi: "माताओं में दूध उत्पादन के लिए कौन सा हार्मोन जिम्मेदार है?",
    options_en: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
    options_hi: ["प्रोलैक्टिन", "ऑक्सीटोसिन", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
    answer_en: "Prolactin",
    answer_hi: "प्रोलैक्टिन",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which hormone helps in the expulsion of milk?",
    question_hi: "दूध निकालने में कौन सा हार्मोन मदद करता है?",
    options_en: ["Estrogen", "Progesterone", "Oxytocin", "FSH"],
    options_hi: ["एस्ट्रोजन", "प्रोजेस्टेरोन", "ऑक्सीटोसिन", "एफएसएच"],
    answer_en: "Oxytocin",
    answer_hi: "ऑक्सीटोसिन",
    attempted: false,
    selected: ""
  },
  {
  num: 26,
  question_en: "Which part of the sperm contains enzymes necessary for fertilization?",
  question_hi: "शुक्राणु का कौन सा भाग निषेचन के लिए आवश्यक एंजाइम्स को रखता है?",
  options_en: ["Head", "Midpiece", "Tail", "Neck"],
  options_hi: ["सिर", "मध्य भाग", "पूंछ", "गर्दन"],
  answer_en: "Head",
  answer_hi: "सिर",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What stimulates the Leydig cells to produce testosterone?",
  question_hi: "लिडिग कोशिकाओं को टेस्टोस्टेरोन उत्पन्न करने के लिए कौन उत्तेजित करता है?",
  options_en: ["FSH", "LH", "TSH", "ACTH"],
  options_hi: ["एफएसएच", "एलएच", "टीएसएच", "एसीटीएच"],
  answer_en: "LH",
  answer_hi: "एलएच",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "What is the function of Sertoli cells?",
  question_hi: "सेर्टोली कोशिकाओं का कार्य क्या है?",
  options_en: ["Secrete estrogen", "Support spermatogenesis", "Produce testosterone", "Transport sperm"],
  options_hi: ["एस्ट्रोजन स्रावित करना", "शुक्रजनन का समर्थन करना", "टेस्टोस्टेरोन बनाना", "शुक्राणु का परिवहन करना"],
  answer_en: "Support spermatogenesis",
  answer_hi: "शुक्रजनन का समर्थन करना",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which part of the female reproductive system receives the sperm during copulation?",
  question_hi: "संभोग के दौरान महिला प्रजनन प्रणाली का कौन सा भाग शुक्राणु प्राप्त करता है?",
  options_en: ["Uterus", "Ovary", "Fallopian tube", "Vagina"],
  options_hi: ["गर्भाशय", "अंडाशय", "फैलोपियन ट्यूब", "योनि"],
  answer_en: "Vagina",
  answer_hi: "योनि",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is the function of the placenta?",
  question_hi: "गर्भनाल (प्लेसेंटा) का कार्य क्या है?",
  options_en: ["Support ovulation", "Provide immunity", "Nutrient and gas exchange between mother and fetus", "Secrete insulin"],
  options_hi: ["अंडोत्सर्जन का समर्थन", "प्रतिरक्षा प्रदान करना", "माता और भ्रूण के बीच पोषक तत्व और गैसों का आदान-प्रदान", "इंसुलिन स्रावित करना"],
  answer_en: "Nutrient and gas exchange between mother and fetus",
  answer_hi: "माता और भ्रूण के बीच पोषक तत्व और गैसों का आदान-प्रदान",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "What prevents polyspermy in humans?",
  question_hi: "मानवों में बहु-शुक्राणु प्रवेश (पॉलीस्पर्मी) को क्या रोकता है?",
  options_en: ["Zona pellucida reaction", "Acrosomal enzymes", "Ovum membrane rupture", "Progesterone release"],
  options_hi: ["जोना पेल्यूसिडा प्रतिक्रिया", "एक्रोसोमल एंजाइम्स", "अंडाणु झिल्ली का फटना", "प्रोजेस्टेरोन का स्राव"],
  answer_en: "Zona pellucida reaction",
  answer_hi: "जोना पेल्यूसिडा प्रतिक्रिया",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which structure secretes hCG during early pregnancy?",
  question_hi: "प्रारंभिक गर्भावस्था के दौरान hCG किस संरचना से स्रावित होता है?",
  options_en: ["Corpus luteum", "Zygote", "Trophoblast", "Ovary"],
  options_hi: ["कॉर्पस ल्यूटियम", "जाइगोट", "ट्रॉफोब्लास्ट", "अंडाशय"],
  answer_en: "Trophoblast",
  answer_hi: "ट्रॉफोब्लास्ट",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "How many chromosomes are present in a human zygote?",
  question_hi: "मानव जाइगोट में कितने गुणसूत्र होते हैं?",
  options_en: ["23", "46", "92", "44"],
  options_hi: ["23", "46", "92", "44"],
  answer_en: "46",
  answer_hi: "46",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which layer of the embryo forms the nervous system?",
  question_hi: "भ्रूण की कौन सी परत तंत्रिका तंत्र का निर्माण करती है?",
  options_en: ["Endoderm", "Mesoderm", "Ectoderm", "Blastoderm"],
  options_hi: ["एंडोडर्म", "मेसोडर्म", "एक्टोडर्म", "ब्लास्टोडर्म"],
  answer_en: "Ectoderm",
  answer_hi: "एक्टोडर्म",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is the outermost membrane surrounding the embryo?",
  question_hi: "भ्रूण को घेरे हुए सबसे बाहरी झिल्ली कौन सी होती है?",
  options_en: ["Amnion", "Chorion", "Allantois", "Yolk sac"],
  options_hi: ["एम्नियन", "कोरियन", "एलेन्टॉइस", "योल्क सैक"],
  answer_en: "Chorion",
  answer_hi: "कोरियन",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Amniotic fluid is secreted by:",
  question_hi: "एम्नियोटिक द्रव किसके द्वारा स्रावित होता है?",
  options_en: ["Yolk sac", "Allantois", "Amnion", "Chorion"],
  options_hi: ["योल्क सैक", "एलेन्टॉइस", "एम्नियन", "कोरियन"],
  answer_en: "Amnion",
  answer_hi: "एम्नियन",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "The fertilized egg gets implanted in:",
  question_hi: "निषेचित अंडा कहाँ स्थापित होता है?",
  options_en: ["Ovary", "Fallopian tube", "Uterus", "Vagina"],
  options_hi: ["अंडाशय", "फैलोपियन ट्यूब", "गर्भाशय", "योनि"],
  answer_en: "Uterus",
  answer_hi: "गर्भाशय",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which hormone helps in milk ejection?",
  question_hi: "दूध निकालने में कौन सा हार्मोन सहायक होता है?",
  options_en: ["Oxytocin", "Prolactin", "Progesterone", "Estrogen"],
  options_hi: ["ऑक्सीटोसिन", "प्रोलैक्टिन", "प्रोजेस्टेरोन", "एस्ट्रोजन"],
  answer_en: "Oxytocin",
  answer_hi: "ऑक्सीटोसिन",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which hormone stimulates milk production?",
  question_hi: "दूध के उत्पादन को कौन सा हार्मोन उत्तेजित करता है?",
  options_en: ["Progesterone", "Estrogen", "Prolactin", "Oxytocin"],
  options_hi: ["प्रोजेस्टेरोन", "एस्ट्रोजन", "प्रोलैक्टिन", "ऑक्सीटोसिन"],
  answer_en: "Prolactin",
  answer_hi: "प्रोलैक्टिन",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which is the correct order of stages in human embryonic development?",
  question_hi: "मानव भ्रूण विकास की सही क्रमिक अवस्थाएँ कौन सी हैं?",
  options_en: ["Zygote → Morula → Blastula → Gastrula", "Zygote → Blastula → Morula → Gastrula", "Morula → Zygote → Gastrula → Blastula", "Zygote → Gastrula → Blastula → Morula"],
  options_hi: ["जाइगोट → मॉरुला → ब्लास्टुला → गैस्ट्रुला", "जाइगोट → ब्लास्टुला → मॉरुला → गैस्ट्रुला", "मॉरुला → जाइगोट → गैस्ट्रुला → ब्लास्टुला", "जाइगोट → गैस्ट्रुला → ब्लास्टुला → मॉरुला"],
  answer_en: "Zygote → Morula → Blastula → Gastrula",
  answer_hi: "जाइगोट → मॉरुला → ब्लास्टुला → गैस्ट्रुला",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which hormone is called the pregnancy hormone?",
  question_hi: "गर्भावस्था हार्मोन किसे कहा जाता है?",
  options_en: ["Estrogen", "FSH", "hCG", "LH"],
  options_hi: ["एस्ट्रोजन", "एफएसएच", "एचसीजी", "एलएच"],
  answer_en: "hCG",
  answer_hi: "एचसीजी",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which structure connects the embryo with placenta?",
  question_hi: "भ्रूण को प्लेसेंटा से कौन सी संरचना जोड़ती है?",
  options_en: ["Chorion", "Amnion", "Umbilical cord", "Yolk sac"],
  options_hi: ["कोरियन", "एम्नियन", "नाल (अम्बिलिकल कॉर्ड)", "योल्क सैक"],
  answer_en: "Umbilical cord",
  answer_hi: "नाल (अम्बिलिकल कॉर्ड)",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which phase of menstrual cycle is also known as the secretory phase?",
  question_hi: "मासिक धर्म चक्र का कौन सा चरण स्रावी चरण (सीक्रेटरी फेज) कहलाता है?",
  options_en: ["Menstrual phase", "Follicular phase", "Luteal phase", "Ovulatory phase"],
  options_hi: ["मासिक धर्म चरण", "कूपिक चरण", "ल्यूटियल चरण", "अंडोत्सर्जन चरण"],
  answer_en: "Luteal phase",
  answer_hi: "ल्यूटियल चरण",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which gland secretes oxytocin?",
  question_hi: "ऑक्सीटोसिन किस ग्रंथि से स्रावित होता है?",
  options_en: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
  options_hi: ["थायरॉयड", "पिट्यूटरी", "एड्रिनल", "अग्न्याशय"],
  answer_en: "Pituitary",
  answer_hi: "पिट्यूटरी",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which fetal membrane acts as a shock absorber?",
  question_hi: "कौन सी भ्रूण झिल्ली झटकों को अवशोषित करने का कार्य करती है?",
  options_en: ["Chorion", "Yolk sac", "Amnion", "Allantois"],
  options_hi: ["कोरियन", "योल्क सैक", "एम्नियन", "एलेन्टॉइस"],
  answer_en: "Amnion",
  answer_hi: "एम्नियन",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which hormone induces labor?",
  question_hi: "कौन सा हार्मोन प्रसव को प्रेरित करता है?",
  options_en: ["Progesterone", "Prolactin", "Oxytocin", "Estrogen"],
  options_hi: ["प्रोजेस्टेरोन", "प्रोलैक्टिन", "ऑक्सीटोसिन", "एस्ट्रोजन"],
  answer_en: "Oxytocin",
  answer_hi: "ऑक्सीटोसिन",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "During which week does organogenesis begin?",
  question_hi: "किस सप्ताह में अंगों का निर्माण (ऑर्गेनोजेनेसिस) शुरू होता है?",
  options_en: ["1st week", "3rd week", "5th week", "7th week"],
  options_hi: ["पहले सप्ताह", "तीसरे सप्ताह", "पाँचवे सप्ताह", "सातवें सप्ताह"],
  answer_en: "3rd week",
  answer_hi: "तीसरे सप्ताह",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "What is the role of the hormone relaxin during pregnancy?",
  question_hi: "गर्भावस्था के दौरान रिलैक्सिन हार्मोन की भूमिका क्या होती है?",
  options_en: ["Initiates lactation", "Maintains corpus luteum", "Relaxes pelvic ligaments", "Prevents ovulation"],
  options_hi: ["स्तनपान शुरू करता है", "कॉर्पस ल्यूटियम को बनाए रखता है", "श्रोणि स्नायुबंधों को ढीला करता है", "अंडोत्सर्जन को रोकता है"],
  answer_en: "Relaxes pelvic ligaments",
  answer_hi: "श्रोणि स्नायुबंधों को ढीला करता है",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which hormone is primarily responsible for the development of secondary sexual characteristics in males?",
  question_hi: "पुरुषों में द्वितीयक यौन विशेषताओं के विकास के लिए मुख्य रूप से कौन सा हार्मोन जिम्मेदार होता है?",
  options_en: ["Testosterone", "LH", "FSH", "Estrogen"],
  options_hi: ["टेस्टोस्टेरोन", "एलएच", "एफएसएच", "एस्ट्रोजन"],
  answer_en: "Testosterone",
  answer_hi: "टेस्टोस्टेरोन",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "When does the implantation of the embryo occur?",
  question_hi: "भ्रूण का स्थापना कब होती है?",
  options_en: ["After 1 day of fertilization", "After 3 days", "After 7 days", "After 14 days"],
  options_hi: ["निषेचन के 1 दिन बाद", "3 दिन बाद", "7 दिन बाद", "14 दिन बाद"],
  answer_en: "After 7 days",
  answer_hi: "7 दिन बाद",
  attempted: false,
  selected: ""
}

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
