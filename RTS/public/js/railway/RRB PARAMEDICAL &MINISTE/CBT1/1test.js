const questions = [
    {
      num: 1,
      question_en: "What is the normal body temperature of a human in Celsius?",
      question_hi: "मानव शरीर का सामान्य तापमान सेल्सियस में कितना होता है?",
      options_en: ["36°C", "37°C", "38°C", "39°C"],
      options_hi: ["36°से.", "37°से.", "38°से.", "39°से."],
      answer_en: "37°C",
      answer_hi: "37°से.",
      attempted: false,
      selecte: ""
    },
    {
    num: 2,
question_en: "Which vitamin is produced in the human body when exposed to sunlight?",
question_hi: "सूर्य के प्रकाश में आने पर मानव शरीर में कौन सा विटामिन बनता है?",
options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
answer_en: "Vitamin D",
answer_h: "विटामिन D",
attempted: false,
selected: ""
},
{
num: 3,
question_en: "Who is the current President of India? (As of 2024)",
question_hi: "भारत के वर्तमान राष्ट्रपति कौन हैं? (2024 के अनुसार)",
options_en: ["Droupadi Murmu", "Narendra Modi", "Ram Nath Kovind", "Amit Shah"],
options_hi: ["द्रौपदी मुर्मू", "नरेंद्र मोदी", "राम नाथ कोविंद", "अमित शाह"],
answer_en: "Droupadi Murmu",
answer_hi: "द्रौपदी मुर्मू",
attempted: false,
selected: ""
},
{
num: 4,
question_en: "Which part of the plant conducts photosynthesis?",
question_hi: "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
options_en: ["Root", "Stem", "Leaf", "Flower"],
options_hi: ["जड़", "तना", "पत्ता", "फूल"],
answer_en: "Leaf",
answer_hi: "पत्ता",
attempted: false,
selected: ""
},
{
num: 5,
question_en: "Which Article of the Indian Constitution deals with the Right to Education?",
question_hi: "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
options_en: ["Article 14", "Article 19", "Article 21A", "Article 32"],
options_hi: ["अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21A", "अनुच्छेद 32"],
answer_en: "Article 21A",
answer_hi: "अनुच्छेद 21A",
attempted: false,
selected: ""
},
{
num: 6,
question_en: "What is the function of red blood cells?",
question_hi: "लाल रक्त कोशिकाओं का कार्य क्या है?",
options_en: ["Fight infection", "Carry oxygen", "Clot blood", "Produce hormones"],
options_hi: ["संक्रमण से लड़ना", "ऑक्सीजन ले जाना", "रक्त का थक्का बनाना", "हार्मोन बनाना"],
answer_en: "Carry oxygen",
answer_hi: "ऑक्सीजन ले जाना",
attempted: false,
selected: ""
},
{
num: 7,
question_en: "Who was the first female Prime Minister of India?",
question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
options_en: ["Sonia Gandhi", "Indira Gandhi", "Sarojini Naidu", "Pratibha Patil"],
options_hi: ["सोनिया गांधी", "इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल"],
answer_en: "Indira Gandhi",
answer_hi: "इंदिरा गांधी",
attempted: false,
selected: ""
},
{
num: 8,
question_en: "Which organ is responsible for detoxification in the body?",
question_hi: "शरीर में विषहरण के लिए कौन सा अंग जिम्मेदार है?",
options_en: ["Liver", "Kidney", "Lungs", "Heart"],
options_hi: ["यकृत", "गुर्दा", "फेफड़े", "हृदय"],
answer_en: "Liver",
answer_hi: "यकृत",
attempted: false,
selected: ""
},
{
num: 9,
question_en: "Which Indian state is known as the 'Spice Garden of India'?",
question_hi: "भारत का 'मसालों का बगीचा' किस राज्य को कहा जाता है?",
options_en: ["Kerala", "Tamil Nadu", "Goa", "Assam"],
options_hi: ["केरल", "तमिलनाडु", "गोवा", "असम"],
answer_en: "Kerala",
answer_hi: "केरल",
attempted: false,
selected: ""
},
{
num: 10,
question_en: "In which year did India become a republic?",
question_hi: "भारत किस वर्ष गणराज्य बना?",
options_en: ["1947", "1950", "1952", "1962"],
options_hi: ["1947", "1950", "1952", "1962"],
answer_en: "1950",
answer_hi: "1950",
attempted: false,
selected: ""
},
{
num: 11,
question_en: "Which blood group is called the universal donor?",
question_hi: "कौन सा रक्त समूह सार्वभौमिक दाता कहलाता है?",
options_en: ["A", "B", "O negative", "AB positive"],
options_hi: ["A", "B", "O ऋणात्मक", "AB धनात्मक"],
answer_en: "O negative",
answer_hi: "O ऋणात्मक",
attempted: false,
selected: ""
},
{
num: 12,
question_en: "Which part of the brain controls balance and coordination?",
question_hi: "मस्तिष्क का कौन सा भाग संतुलन और समन्वय को नियंत्रित करता है?",
options_en: ["Cerebrum", "Medulla", "Cerebellum", "Pons"],
options_hi: ["सेरिब्रलम", "मेडुला", "सेरिबेलम", "पॉन्स"],
answer_en: "Cerebellum",
answer_hi: "सेरिबेलम",
attempted: false,
selected: ""
},
{
num: 13,
question_en: "What is the SI unit of force?",
question_hi: "बल की एसआई इकाई क्या है?",
options_en: ["Pascal", "Joule", "Newton", "Watt"],
options_hi: ["पास्कल", "जूल", "न्यूटन", "वाट"],
answer_en: "Newton",
answer_hi: "न्यूटन",
attempted: false,
selected: ""
},
{
num: 14,
question_en: "Where is the headquarters of WHO located?",
question_hi: "WHO का मुख्यालय कहाँ स्थित है?",
options_en: ["New York", "Paris", "Geneva", "London"],
options_hi: ["न्यूयॉर्क", "पेरिस", "जिनेवा", "लंदन"],
answer_en: "Geneva",
answer_hi: "जिनेवा",
attempted: false,
selected: ""
},
{
num: 15,
question_en: "Which gas is most abundant in the Earth's atmosphere?",
question_hi: "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक पाई जाती है?",
options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
answer_en: "Nitrogen",
answer_hi: "नाइट्रोजन",
attempted: false,
selected: ""
},
{
num: 16,
question_en: "Which disease is caused by a deficiency of Vitamin C?",
question_hi: "विटामिन C की कमी से कौन सा रोग होता है?",
options_en: ["Rickets", "Scurvy", "Night blindness", "Beriberi"],
options_hi: ["रिकेट्स", "स्कर्वी", "रात का अंधापन", "बेरीबेरी"],
answer_en: "Scurvy",
answer_hi: "स्कर्वी",
attempted: false,
selected: ""
},
{
num: 17,
question_en: "Which metal is liquid at room temperature?",
question_hi: "कौन सी धातु कमरे के तापमान पर द्रव अवस्था में रहती है?",
options_en: ["Iron", "Copper", "Mercury", "Aluminium"],
options_hi: ["लोहा", "तांबा", "पारा", "एल्युमिनियम"],
answer_en: "Mercury",
answer_hi: "पारा",
attempted: false,
selected: ""
},
{
num: 18,
question_en: "The Constitution of India was adopted on?",
question_hi: "भारतीय संविधान कब अपनाया गया था?",
options_en: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1949"],
options_hi: ["15 अगस्त 1947", "26 जनवरी 1950", "26 नवंबर 1949", "2 अक्टूबर 1949"],
answer_en: "26 November 1949",
answer_hi: "26 नवंबर 1949",
attempted: false,
selected: ""
},
{
num: 19,
question_en: "Who is known as the Father of the Nation in India?",
question_hi: "भारत में राष्ट्रपिता किसे कहा जाता है?",
options_en: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
options_hi: ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "सरदार पटेल"],
answer_en: "Mahatma Gandhi",
answer_hi: "महात्मा गांधी",
attempted: false,
selected: ""
},
{
num: 20,
question_en: "How many bones are there in the adult human body?",
question_hi: "वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
options_en: ["206", "208", "210", "201"],
options_hi: ["206", "208", "210", "201"],
answer_en: "206",
answer_hi: "206",
attempted: false,
selected: ""
},
{
num: 21,
question_en: "Which part of the eye controls the amount of light entering?",
question_hi: "आंख का कौन सा भाग प्रकाश की मात्रा को नियंत्रित करता है?",
options_en: ["Cornea", "Iris", "Retina", "Lens"],
options_hi: ["कॉर्निया", "आईरिस", "रेटिना", "लेंस"],
answer_en: "Iris",
answer_hi: "आईरिस",
attempted: false,
selected: ""
},
{
num: 22,
question_en: "Which Indian river is known as the 'Sorrow of Bihar'?",
question_hi: "कौन सी भारतीय नदी 'बिहार का शोक' कहलाती है?",
options_en: ["Kosi", "Ganga", "Yamuna", "Sone"],
options_hi: ["कोसी", "गंगा", "यमुना", "सोन"],
answer_en: "Kosi",
answer_hi: "कोसी",
attempted: false,
selected: ""
},
{
num: 23,
question_en: "Which vitamin helps in blood clotting?",
question_hi: "रक्त का थक्का जमाने में कौन सा विटामिन सहायक होता है?",
options_en: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
options_hi: ["विटामिन A", "विटामिन C", "विटामिन K", "विटामिन D"],
answer_en: "Vitamin K",
answer_hi: "विटामिन K",
attempted: false,
selected: ""
},
{
num: 24,
question_en: "Which is the longest bone in the human body?",
question_hi: "मानव शरीर में सबसे लंबी हड्डी कौन सी है?",
options_en: ["Humerus", "Femur", "Tibia", "Fibula"],
options_hi: ["ह्यूमरस", "फीमर", "टिबिया", "फिबुला"],
answer_en: "Femur",
answer_hi: "फीमर",
attempted: false,
selected: ""
},
{
num: 25,
question_en: "Which Indian leader gave the slogan 'Do or Die'?",
question_hi: "करो या मरो का नारा किस भारतीय नेता ने दिया था?",
options_en: ["Mahatma Gandhi", "Bhagat Singh", "Jawaharlal Nehru", "Subhas Chandra Bose"],
options_hi: ["महात्मा गांधी", "भगत सिंह", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
answer_en: "Mahatma Gandhi",
answer_hi: "महात्मा गांधी",
attempted: false,
selected: ""
},

    {
      num: 26,
      question_en: "Which of the following is an example of a public good?",
      question_hi: "निम्नलिखित में से कौन एक सार्वजनिक वस्तु का उदाहरण है?",
      options_en: ["Electricity", "National defense", "Mobile service", "Food grains"],
      options_hi: ["बिजली", "राष्ट्रीय रक्षा", "मोबाइल सेवा", "अनाज"],
      answer_en: "National defense",
      answer_hi: "राष्ट्रीय रक्षा",
      attempted: false,
      selected: ""
    },
    {
      num: 27,
      question_en: "What does fiscal deficit mean?",
      question_hi: "राजकोषीय घाटे का क्या अर्थ है?",
      options_en: ["Total expenditure exceeds total revenue", "Total income exceeds total expenditure", "Revenue is equal to expenditure", "Only revenue deficit exists"],
      options_hi: ["कुल व्यय कुल राजस्व से अधिक होता है", "कुल आय कुल व्यय से अधिक होती है", "राजस्व और व्यय समान होते हैं", "केवल राजस्व घाटा होता है"],
      answer_en: "Total expenditure exceeds total revenue",
      answer_hi: "कुल व्यय कुल राजस्व से अधिक होता है",
      attempted: false,
      selected: ""
    },
    {
      num: 28,
      question_en: "Which among the following is considered the most liquid asset?",
      question_hi: "निम्नलिखित में से किसे सबसे तरल संपत्ति माना जाता है?",
      options_en: ["Real estate", "Gold", "Cash", "Stock"],
      options_hi: ["अचल संपत्ति", "सोना", "नकद", "शेयर"],
      answer_en :"Cash",
      answer_hi: "नकद",
      attempted: false,
      selected: ""
    },
    {
      num: 29,
      question_en: "Which type of unemployment occurs due to mismatch of skills?",
      question_hi: "कौशल की असमानता के कारण कौन सी बेरोज़गारी होती है?",
      options_en: ["Structural", "Frictional", "Seasonal", "Cyclical"],
      options_hi: ["संरचनात्मक", "घर्षणात्मक", "मौसमी", "चक्रीय"],
      answer_en: "Structural",
      answer_hi: "संरचनात्मक",
      attempted: false,
      selected: ""
    },
    {
    
      num: 30,
      question_en: "Which of the following is not included in the calculation of GDP?",
      question_hi: "निम्नलिखित में से कौन GDP की गणना में शामिल नहीं होता?",
      options_en: ["Value of production", "Illegal activities", "Government spending", "Exports"],
      options_hi: ["उत्पादन का मूल्य", "अवैध गतिविधियाँ", "सरकारी खर्च", "निर्यात"],
      answer_en: "Illegal activities",
      answer_hi: "अवैध गतिविधियाँ",
      attempted: false,
      selected: ""
    },
    {
      num: 31,
      question_en: "What is meant by 'depreciation' in economics?",
      question_hi: "अर्थशास्त्र में मूल्यह्रास का क्या अर्थ है?",
      options_en: ["Decrease in value of currency", "Decrease in value of capital assets", "Increase in production", "Decrease in GDP"],
      options_hi: ["मुद्रा के मूल्य में कमी", "पूंजी संपत्तियों के मूल्य में कमी", "उत्पादन में वृद्धि", "GDP में कमी"],
      answer_en: "Decrease in value of capital assets",
      answer_hi: "पूंजी संपत्तियों के मूल्य में कमी",
      attempted: false,
      selected: ""
    },
    {
    
      num: 32,
      question_en: "Which institution releases the Consumer Price Index in India?",
      question_hi: "भारत में उपभोक्ता मूल्य सूचकांक कौन जारी करता है?",
      options_en: ["RBI", "Finance Ministry", "CSO", "Labour Bureau"],
      options_hi: ["RBI", "वित्त मंत्रालय", "सीएसओ", "श्रम ब्यूरो"],
      answer_en: "Labour Bureau",
      answer_hi: "श्रम ब्यूरो",
      attempted: false,
      selected: ""
    },
    {
    
      num: 33,
      question_en: "Monopoly is a market structure characterized by:",
      question_hi: "एकाधिकार वह बाजार संरचना है जिसमें होता है:",
      options_en: ["Many sellers", "One seller", "Few buyers", "Free entry and exit"],
      options_hi: ["कई विक्रेता", "एक विक्रेता", "कुछ खरीदार", "मुक्त प्रवेश और निकास"],
      answer_en:"One seller",
      answer_hi: "एक विक्रेता",
      attempted: false,
      selected: ""
    },{
    
      num: 34,
      question_en: "Which sector has the largest contribution to India's GDP?",
      question_hi: "भारत की GDP में सबसे अधिक योगदान किस क्षेत्र का है?",
      options_en: ["Agriculture", "Industry", "Services", "Mining"],
      options_hi: ["कृषि", "उद्योग", "सेवाएं", "खनन"],
      answer_en: "Services",
      answer_hi: "सेवाएं",
      attempted: false,
      selected: ""
    },
    {
      num: 35,
      question_en: "Which one of the following is an example of a regressive tax?",
      question_hi: "निम्नलिखित में से कौन प्रतिगामी कर का उदाहरण है?",
      options_en: ["Income tax", "Property tax", "Sales tax", "Corporate tax"],
      options_hi: ["आयकर", "संपत्ति कर", "विक्री कर", "कॉरपोरेट कर"],
      answer_en: "Sales tax",
      answer_hi: "विक्री कर",
      attempted: false,
      selected: ""
    },
    {
    
      num: 36,
      question_en: "Which of the following is used to control inflation?",
      question_hi: "मुद्रास्फीति को नियंत्रित करने के लिए निम्न में से क्या उपयोग किया जाता है?",
      options_en: ["Lowering interest rates", "Reducing money supply", "Increasing subsidies", "Increasing public spending"],
      options_hi: ["ब्याज दरों को कम करना", "मुद्रा आपूर्ति को घटाना", "सब्सिडी बढ़ाना", "सरकारी खर्च बढ़ाना"],
      answer_en: "Reducing money supply",
      answer_hi: "मुद्रा आपूर्ति को घटाना",
      attempted: false,
      selected: ""
    },
    {
    
      num: 37,
      question_en: "Dumping in economics refers to:",
      question_hi: "अर्थशास्त्र में डंपिंग का तात्पर्य है:",
      options_en: ["Importing low-quality goods", "Exporting goods at a price lower than home market", "Illegal trade", "Selling fake goods"],
      options_hi: ["निम्न गुणवत्ता वाली वस्तुओं का आयात", "वस्तुओं का निर्यात घरेलू बाजार से कम कीमत पर", "अवैध व्यापार", "नकली वस्तुओं की बिक्री"],
      answer_en: "Exporting goods at a price lower than home market",
      answer_hi: "वस्तुओं का निर्यात घरेलू बाजार से कम कीमत पर",
      attempted: false,
      selected: ""
    },
    {
      num: 38,
      question_en: "Which is not a function of the Reserve Bank of India?",
      question_hi: "निम्नलिखित में से कौन भारतीय रिजर्व बैंक का कार्य नहीं है?",
      options_en: ["Monetary policy implementation", "Issuing currency", "Lending to public", "Regulating banks"],
      options_hi: ["मौद्रिक नीति लागू करना", "मुद्रा जारी करना", "जनता को ऋण देना", "बैंकों को विनियमित करना"],
      answer_en: "Lending to public",
      answer_hi: "जनता को ऋण देना",
      attempted: false,
      selected: ""
    },
    {
      num: 39,
      question_en: "Which Indian economist is associated with the Green Revolution?",
      question_hi: "ग्रीन रेवोल्यूशन से संबंधित भारतीय अर्थशास्त्री कौन हैं?",
      options_en: ["Amartya Sen", "C. Rangarajan", "M.S. Swaminathan", "Montek Singh Ahluwalia"],
      options_hi: ["अमर्त्य सेन", "सी. रंगराजन", "एम. एस. स्वामीनाथन", "मोंटेक सिंह अहलूवालिया"],
      answer_en: "M.S. Swaminathan",
      answer_hi: "एम. एस. स्वामीनाथन",
      attempted: false,
      selected: ""
    },
    {
    
      num: 40,
      question_en: "Which term is used for the buying and selling of government securities in the open market?",
      question_hi: "सरकारी प्रतिभूतियों की खुले बाजार में खरीद और बिक्री को क्या कहते हैं?",
      options_en: ["Bank Rate", "Open Market Operations", "Repo Rate", "CRR"],
      options_h: ["बैंक दर", "ओपन मार्केट ऑपरेशंस", "रेपो रेट", "सीआरआर"],
      answer_en: "Open Market Operations",
      answer_hi: "ओपन मार्केट ऑपरेशंस",
      attempted: false,
      selected: ""
    },
    {
      num: 41,
      question_en: "The term 'Laissez-faire' is associated with which type of economy?",
      question_hi: "लेसे फेयर शब्द किस प्रकार की अर्थव्यवस्था से जुड़ा है?",
      options_en: ["Socialist", "Capitalist", "Mixed", "Command"],
      options_hi: ["समाजवादी", "पूंजीवादी", "मिश्रित", "आदेश आधारित"],
      answer_en: "Capitalist",
      answer_hi: "पूंजीवादी",
      attempted: false,
      selected: ""
    },
    {
      num: 42,
      question_en: "Which is the largest component of the money supply in India?",
      question_hi: "भारत में मुद्रा आपूर्ति का सबसे बड़ा घटक कौन सा है?",
      options_en: ["Currency with public", "Demand deposits with banks", "Time deposits", "RBI reserves"],
      options_hi: ["जनता के पास नकद", "बैंकों में मांग जमा", "समय जमा", "RBI का भंडार"],
      answer_en: "Time deposits",
      answer_hi: "समय जमा",
      attempted: false,
      selected: ""
    },
    {
    
      num: 43,
      question_en: "Which of the following is not an objective of economic planning?",
      question_hi: "निम्नलिखित में से कौन आर्थिक योजना का उद्देश्य नहीं है?",
      options_en: ["Increase in national income", "Full employment", "Price stability", "Military expansion"],
      options_hi: ["राष्ट्रीय आय में वृद्धि", "पूर्ण रोजगार", "मूल्य स्थिरता", "सैन्य विस्तार"],
      answer_en: "Military expansion",
      answer_hi: "सैन्य विस्तार",
      attempted: false,
      selected: ""
    },
    {
    
      num: 44,
      question_en: "Which term describes a period of negative economic growth?",
      question_hi: "नकारात्मक आर्थिक विकास की अवधि को क्या कहा जाता है?",
      options_en: ["Boom", "Recession", "Inflation", "Recovery"],
      options_hi: ["बूम", "मंदी", "मुद्रास्फीति", "पुनर्प्राप्ति"],
      answer_en: "Recession",
      answer_hi: "मंदी",
      attempted: false,
      selected: ""
    },
    {
      num: 45,
      question_en: "When was the Goods and Services Tax (GST) implemented in India?",
      question_hi: "भारत में वस्तु एवं सेवा कर (GST) कब लागू किया गया?",
      options_en: ["1st July 2016", "1st July 2017", "1st April 2016", "1st January 2018"],
      options_hi: ["1 जुलाई 2016", "1 जुलाई 2017", "1 अप्रैल 2016", "1 जनवरी 2018"],
      answer_en: "1st July 2017",
      answer_hi: "1 जुलाई 2017",
      attempted: false,
      selected: ""
    },
    {
      num: 46,
      question_en: "What is the full form of FDI?",
      question_hi: "FDI का पूरा नाम क्या है?",
      options_en: ["Foreign Deposit Investment", "Foreign Direct Investment", "Foreign Demand Investment", "Foreign Development Investment"],
      options_hi: ["फॉरेन डिपॉजिट इन्वेस्टमेंट", "फॉरेन डायरेक्ट इन्वेस्टमेंट", "फॉरेन डिमांड इन्वेस्टमेंट", "फॉरेन डेवलपमेंट इन्वेस्टमेंट"],
      answer_en: "Foreign Direct Investment",
      answer_hi: "फॉरेन डायरेक्ट इन्वेस्टमेंट",
      attempted: false,
      selected: ""
    },
    {
      num: 47,
      question_en: "Which indicator shows the average income of a country?",
      question_hi: "देश की औसत आय को कौन सा सूचकांक दर्शाता है?",
      options_en: ["GDP", "GNP", "Per capita income", "Net National Product"],
      options_hi: ["GDP", "GNP", "प्रति व्यक्ति आय", "शुद्ध राष्ट्रीय उत्पाद"],
      answer_en: "Per capita income",
      answer_hi: "प्रति व्यक्ति आय",
      attempted: false,
      selected: ""
    },
    {
      num: 48,
      question_en: "In economics, utility means:",
      question_hi: "अर्थशास्त्र में उपयोगिता का अर्थ है:",
      options_en: ["Usefulness", "Pleasure or satisfaction", "Profit", "Value in exchange"],
      options_hi: ["उपयोगिता", "आनंद या संतोष", "लाभ", "विनिमय मूल्य"],
      answer_en: "Pleasure or satisfaction",
      answer_hi: "आनंद या संतोष",
      attempted: false,
      selected: ""
    },
    
    {num: 49,
      question_en: "Which Five-Year Plan in India was based on the 'Gadgil formula'?",
      question_hi: "भारत में किस पंचवर्षीय योजना में 'गाडगिल फॉर्मूला' अपनाया गया था?",
      options_en: ["Second", "Third", "Fourth", "Fifth"],
      attempted: false,
      options_hi: ["द्वितीय", "तृतीय", "चतुर्थ", "पंचम"],
      answer_en: "Fourth",
      answer_hi: "चतुर्थ",
      selected: ""
    },
    {
  num: 50,
  question_en: "What is the primary objective of the 'Monetary Policy' in India?",
  question_hi: "भारत में 'मौद्रिक नीति' का प्राथमिक उद्देश्य क्या है?",
  options_en: ["Control inflation", "Increase tax revenue", "Regulate stock markets", "Boost exports"],
  options_hi: ["मुद्रास्फीति नियंत्रण", "कर राजस्व बढ़ाना", "शेयर बाजार को विनियमित करना", "निर्यात बढ़ाना"],
  answer_en: "Control inflation",
  answer_hi: "मुद्रास्फीति नियंत्रण",
  attempted: false,
  selected: ""
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