const questions = [
{
    num: 1,
    question_en: "Which one of the following is the most important factor in the location of an industry?",
    question_hi: "किसी उद्योग के स्थान निर्धारण में निम्नलिखित में से सबसे महत्वपूर्ण कारक कौन सा है?",
    options_en: ["Raw materials", "Labour", "Capital", "Transport"],
    options_hi: ["कच्चा माल", "श्रम", "पूंजी", "परिवहन"],
    answer_en: "Raw materials",
    answer_hi: "कच्चा माल",
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "Which industry is known as the backbone of Indian economy?",
    question_hi: "भारत की अर्थव्यवस्था की रीढ़ कौन-सी उद्योग के रूप में जानी जाती है?",
    options_en: ["Agriculture", "Textile", "Information Technology", "Automobile"],
    options_hi: ["कृषि", "वस्त्र", "सूचना प्रौद्योगिकी", "ऑटोमोबाइल"],
    answer_en: "Agriculture",
    answer_hi: "कृषि",
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "Which of the following is a heavy industry?",
    question_hi: "निम्नलिखित में से कौन-सा भारी उद्योग है?",
    options_en: ["Textile", "Sugar", "Iron and Steel", "Leather"],
    options_hi: ["वस्त्र", "चीनी", "लौह और इस्पात", "चमड़ा"],
    answer_en: "Iron and Steel",
    answer_hi: "लौह और इस्पात",
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "Which resource is essential for cement industry?",
    question_hi: "सीमेंट उद्योग के लिए कौन-सा संसाधन आवश्यक है?",
    options_en: ["Limestone", "Coal", "Iron Ore", "Sand"],
    options_hi: ["चूना पत्थर", "कोयला", "लौह अयस्क", "रेत"],
    answer_en: "Limestone",
    answer_hi: "चूना पत्थर",
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "Which industry is based on the processing of food products?",
    question_hi: "कौन-सा उद्योग खाद्य पदार्थों के प्रसंस्करण पर आधारित है?",
    options_en: ["Textile", "Sugar", "Paper", "Food Processing"],
    options_hi: ["वस्त्र", "चीनी", "कागज", "खाद्य प्रसंस्करण"],
    answer_en: "Food Processing",
    answer_hi: "खाद्य प्रसंस्करण",
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "Which industry is known as the 'Sunrise Industry' in India?",
    question_hi: "भारत में 'सूर्योदय उद्योग' के रूप में कौन-सा उद्योग जाना जाता है?",
    options_en: ["Textile", "Information Technology", "Steel", "Automobile"],
    options_hi: ["वस्त्र", "सूचना प्रौद्योगिकी", "इस्पात", "ऑटोमोबाइल"],
    answer_en: "Information Technology",
    answer_hi: "सूचना प्रौद्योगिकी",
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "Which sector contributes the maximum to India’s GDP?",
    question_hi: "भारत की जीडीपी में सबसे अधिक योगदान कौन-सा क्षेत्र करता है?",
    options_en: ["Agriculture", "Industry", "Services", "Manufacturing"],
    options_hi: ["कृषि", "उद्योग", "सेवा", "निर्माण"],
    answer_en: "Services",
    answer_hi: "सेवा",
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "Which state is the largest producer of sugar in India?",
    question_hi: "भारत में चीनी का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    options_en: ["Uttar Pradesh", "Maharashtra", "Tamil Nadu", "Karnataka"],
    options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "तमिलनाडु", "कर्नाटक"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "Where is the largest steel plant in India located?",
    question_hi: "भारत का सबसे बड़ा इस्पात संयंत्र कहाँ स्थित है?",
    options_en: ["Jamshedpur", "Bhilai", "Rourkela", "Durgapur"],
    options_hi: ["जमशेदपुर", "भिलाई", "राउरकेला", "दुर्गापुर"],
    answer_en: "Jamshedpur",
    answer_hi: "जमशेदपुर",
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "Which industry uses the most water?",
    question_hi: "सबसे अधिक पानी किस उद्योग में उपयोग होता है?",
    options_en: ["Textile", "Paper", "Sugar", "Cement"],
    options_hi: ["वस्त्र", "कागज", "चीनी", "सीमेंट"],
    answer_en: "Textile",
    answer_hi: "वस्त्र",
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "Which industry is the largest employer in India?",
    question_hi: "भारत में सबसे बड़ा रोजगार देने वाला उद्योग कौन-सा है?",
    options_en: ["Agriculture", "Textile", "Manufacturing", "IT"],
    options_hi: ["कृषि", "वस्त्र", "निर्माण", "सूचना प्रौद्योगिकी"],
    answer_en: "Agriculture",
    answer_hi: "कृषि",
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "Which state is famous for the production of cotton textiles?",
    question_hi: "कौन-सा राज्य कपास वस्त्र उत्पादन के लिए प्रसिद्ध है?",
    options_en: ["Gujarat", "Punjab", "West Bengal", "Rajasthan"],
    options_hi: ["गुजरात", "पंजाब", "पश्चिम बंगाल", "राजस्थान"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "Which industry uses bauxite as the main raw material?",
    question_hi: "कौन-सा उद्योग मुख्य कच्चे माल के रूप में बॉक्साइट का उपयोग करता है?",
    options_en: ["Aluminium", "Steel", "Copper", "Zinc"],
    options_hi: ["एल्यूमिनियम", "इस्पात", "तांबा", "जस्ता"],
    answer_en: "Aluminium",
    answer_hi: "एल्यूमिनियम",
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "Which sector provides the largest share of employment in India?",
    question_hi: "भारत में रोजगार का सबसे बड़ा हिस्सा कौन-सा क्षेत्र प्रदान करता है?",
    options_en: ["Agriculture", "Industry", "Services", "Trade"],
    options_hi: ["कृषि", "उद्योग", "सेवा", "व्यापार"],
    answer_en: "Agriculture",
    answer_hi: "कृषि",
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "Which is the main product of the sugar industry?",
    question_hi: "चीनी उद्योग का मुख्य उत्पाद क्या है?",
    options_en: ["Molasses", "Sugar", "Alcohol", "Ethanol"],
    options_hi: ["गुड़", "चीनी", "शराब", "इथेनॉल"],
    answer_en: "Sugar",
    answer_hi: "चीनी",
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "Which industry requires the use of a blast furnace?",
    question_hi: "किस उद्योग में ब्लास्ट फर्नेस का उपयोग आवश्यक होता है?",
    options_en: ["Steel Industry", "Textile Industry", "Cement Industry", "Sugar Industry"],
    options_hi: ["इस्पात उद्योग", "वस्त्र उद्योग", "सीमेंट उद्योग", "चीनी उद्योग"],
    answer_en: "Steel Industry",
    answer_hi: "इस्पात उद्योग",
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "Which Indian state has the largest number of textile mills?",
    question_hi: "किस भारतीय राज्य में सबसे अधिक वस्त्र मिलें हैं?",
    options_en: ["Maharashtra", "Tamil Nadu", "West Bengal", "Gujarat"],
    options_hi: ["महाराष्ट्र", "तमिलनाडु", "पश्चिम बंगाल", "गुजरात"],
    answer_en: "Maharashtra",
    answer_hi: "महाराष्ट्र",
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "Which industry produces rayon and nylon?",
    question_hi: "कौन-सा उद्योग रयान और नायलॉन का उत्पादन करता है?",
    options_en: ["Textile Industry", "Chemical Industry", "Plastic Industry", "Rubber Industry"],
    options_hi: ["वस्त्र उद्योग", "रासायनिक उद्योग", "प्लास्टिक उद्योग", "रबर उद्योग"],
    answer_en: "Textile Industry",
    answer_hi: "वस्त्र उद्योग",
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "Which Indian state is the largest producer of iron ore?",
    question_hi: "भारत का सबसे बड़ा लौह अयस्क उत्पादक राज्य कौन सा है?",
    options_en: ["Odisha", "Jharkhand", "Chhattisgarh", "Karnataka"],
    options_hi: ["ओडिशा", "झारखंड", "छत्तीसगढ़", "कर्नाटक"],
    answer_en: "Odisha",
    answer_hi: "ओडिशा",
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "Which industry uses the maximum power in India?",
    question_hi: "भारत में अधिकतम बिजली किस उद्योग में उपयोग होती है?",
    options_en: ["Iron and Steel", "Textile", "Cement", "Chemical"],
    options_hi: ["लौह और इस्पात", "वस्त्र", "सीमेंट", "रासायनिक"],
    answer_en: "Iron and Steel",
    answer_hi: "लौह और इस्पात",
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "Which city is famous for the production of cotton textiles in India?",
    question_hi: "भारत में कपास वस्त्र उत्पादन के लिए कौन-सा शहर प्रसिद्ध है?",
    options_en: ["Surat", "Mumbai", "Chennai", "Delhi"],
    options_hi: ["सूरत", "मुंबई", "चेन्नई", "दिल्ली"],
    answer_en: "Surat",
    answer_hi: "सूरत",
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "Which industry is known for the manufacture of automobiles?",
    question_hi: "कौन-सा उद्योग ऑटोमोबाइल के निर्माण के लिए जाना जाता है?",
    options_en: ["Automobile Industry", "Textile Industry", "Chemical Industry", "Cement Industry"],
    options_hi: ["ऑटोमोबाइल उद्योग", "वस्त्र उद्योग", "रासायनिक उद्योग", "सीमेंट उद्योग"],
    answer_en: "Automobile Industry",
    answer_hi: "ऑटोमोबाइल उद्योग",
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "Which state is the largest producer of petroleum in India?",
    question_hi: "भारत में पेट्रोलियम का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    options_en: ["Assam", "Rajasthan", "Gujarat", "Maharashtra"],
    options_hi: ["असम", "राजस्थान", "गुजरात", "महाराष्ट्र"],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "Which industry is based on jute fiber?",
    question_hi: "कौन-सा उद्योग जूट फाइबर पर आधारित है?",
    options_en: ["Textile Industry", "Paper Industry", "Chemical Industry", "Food Processing Industry"],
    options_hi: ["वस्त्र उद्योग", "कागज उद्योग", "रासायनिक उद्योग", "खाद्य प्रसंस्करण उद्योग"],
    answer_en: "Textile Industry",
    answer_hi: "वस्त्र उद्योग",
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "Which city is known as the 'Manchester of India'?",
    question_hi: "भारत का कौन-सा शहर 'भारत का मैनचेस्टर' के नाम से जाना जाता है?",
    options_en: ["Mumbai", "Ahmedabad", "Kolkata", "Chennai"],
    options_hi: ["मुंबई", "अहमदाबाद", "कोलकाता", "चेन्नई"],
    answer_en: "Ahmedabad",
    answer_hi: "अहमदाबाद",
    attempted: false,
    selected: null
  },
   {
    num: 26,
    question_en: "Which Indian state is famous for its tea gardens in the Dooars region?",
    question_hi: "दूवास क्षेत्र में अपने चाय बागानों के लिए कौन सा भारतीय राज्य प्रसिद्ध है?",
    options_en: ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
    options_hi: ["असम", "पश्चिम बंगाल", "केरल", "तमिल नाडु"],
    answer_en: "West Bengal",
    answer_hi: "पश्चिम बंगाल",
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "Which river is called the 'Sorrow of Bihar' due to its frequent floods?",
    question_hi: "कौन सी नदी अपने बार-बार बाढ़ के कारण 'बिहार का दुख' कहलाती है?",
    options_en: ["Kosi", "Ganga", "Yamuna", "Godavari"],
    options_hi: ["कोसी", "गंगा", "यमुना", "गोदावरी"],
    answer_en: "Kosi",
    answer_hi: "कोसी",
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "Which city is the capital of the Indian state of Rajasthan?",
    question_hi: "राजस्थान राज्य की राजधानी कौन सा शहर है?",
    options_en: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
    options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "Which is the longest river in India?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Yamuna", "Godavari", "Indus"],
    options_hi: ["गंगा", "यमुना", "गोदावरी", "सिंधु"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "The Thar Desert is located in which part of India?",
    question_hi: "थार रेगिस्तान भारत के किस भाग में स्थित है?",
    options_en: ["North-West", "South-East", "North-East", "South-West"],
    options_hi: ["उत्तर-पश्चिम", "दक्षिण-पूर्व", "उत्तर-पूर्व", "दक्षिण-पश्चिम"],
    answer_en: "North-West",
    answer_hi: "उत्तर-पश्चिम",
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "Which Indian city is known as the 'Pink City'?",
    question_hi: "भारत का कौन-सा शहर 'गुलाबी शहर' के नाम से जाना जाता है?",
    options_en: ["Jaipur", "Jodhpur", "Udaipur", "Agra"],
    options_hi: ["जयपुर", "जोधपुर", "उदयपुर", "आगरा"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "The Chilika Lake is located in which Indian state?",
    question_hi: "चिलिका झील किस भारतीय राज्य में स्थित है?",
    options_en: ["Odisha", "West Bengal", "Assam", "Kerala"],
    options_hi: ["ओडिशा", "पश्चिम बंगाल", "असम", "केरल"],
    answer_en: "Odisha",
    answer_hi: "ओडिशा",
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "Which of the following is the highest peak in India?",
    question_hi: "भारत में निम्नलिखित में से सबसे ऊँचा शिखर कौन सा है?",
    options_en: ["Kangchenjunga", "Nanda Devi", "Kamet", "Saltoro Kangri"],
    options_hi: ["कंचनजंगा", "नंदा देवी", "कामेट", "साल्टोरो कंगरी"],
    answer_en: "Kangchenjunga",
    answer_hi: "कंचनजंगा",
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "Which city is famous for its silk sarees known as 'Kanchipuram Silk'?",
    question_hi: "कौन सा शहर अपनी 'कांचीपुरम सिल्क' साड़ियों के लिए प्रसिद्ध है?",
    options_en: ["Kanchipuram", "Varanasi", "Mysore", "Surat"],
    options_hi: ["कांचीपुरम", "वाराणसी", "मैसूर", "सूरत"],
    answer_en: "Kanchipuram",
    answer_hi: "कांचीपुरम",
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "Which of the following rivers flows into the Arabian Sea?",
    question_hi: "निम्नलिखित में से कौन सी नदी अरब सागर में गिरती है?",
    options_en: ["Narmada", "Godavari", "Ganga", "Brahmaputra"],
    options_hi: ["नर्मदा", "गोदावरी", "गंगा", "ब्राह्मपुत्र"],
    answer_en: "Narmada",
    answer_hi: "नर्मदा",
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "Which Indian state has the largest forest area?",
    question_hi: "किस भारतीय राज्य के पास सबसे बड़ा वन क्षेत्र है?",
    options_en: ["Madhya Pradesh", "Maharashtra", "Arunachal Pradesh", "Odisha"],
    options_hi: ["मध्य प्रदेश", "महाराष्ट्र", "अरुणाचल प्रदेश", "ओडिशा"],
    answer_en: "Madhya Pradesh",
    answer_hi: "मध्य प्रदेश",
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "The famous Ajanta Caves are located in which state?",
    question_hi: "प्रसिद्ध अजंता गुफाएं किस राज्य में स्थित हैं?",
    options_en: ["Maharashtra", "Rajasthan", "Gujarat", "Karnataka"],
    options_hi: ["महाराष्ट्र", "राजस्थान", "गुजरात", "कर्नाटक"],
    answer_en: "Maharashtra",
    answer_hi: "महाराष्ट्र",
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "Which of the following is the smallest state in India by area?",
    question_hi: "क्षेत्रफल के हिसाब से भारत का सबसे छोटा राज्य कौन सा है?",
    options_en: ["Goa", "Sikkim", "Tripura", "Nagaland"],
    options_hi: ["गोवा", "सिक्किम", "त्रिपुरा", "नागालैंड"],
    answer_en: "Goa",
    answer_hi: "गोवा",
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "The Indian Desert is also known by which name?",
    question_hi: "भारतीय रेगिस्तान को किस नाम से भी जाना जाता है?",
    options_en: ["Thar Desert", "Great Indian Desert", "Marusthal", "All of the above"],
    options_hi: ["थार रेगिस्तान", "ग्रेट इंडियन डेजर्ट", "मरुस्थल", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "Which of the following is the main crop of Punjab?",
    question_hi: "पंजाब की मुख्य फसल निम्नलिखित में से कौन सी है?",
    options_en: ["Wheat", "Rice", "Sugarcane", "Cotton"],
    options_hi: ["गेहूं", "चावल", "गन्ना", "कपास"],
    answer_en: "Wheat",
    answer_hi: "गेहूं",
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "The famous backwaters of India are located in which state?",
    question_hi: "भारत के प्रसिद्ध बैकवाटर्स किस राज्य में स्थित हैं?",
    options_en: ["Kerala", "Tamil Nadu", "Karnataka", "Goa"],
    options_hi: ["केरल", "तमिल नाडु", "कर्नाटक", "गोवा"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "Which Indian state is known as the 'Land of Five Rivers'?",
    question_hi: "भारत का कौन सा राज्य 'पाँच नदियों की भूमि' के नाम से जाना जाता है?",
    options_en: ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
    options_hi: ["पंजाब", "हरियाणा", "राजस्थान", "उत्तर प्रदेश"],
    answer_en: "Punjab",
    answer_hi: "पंजाब",
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "Which city is the financial capital of India?",
    question_hi: "भारत की वित्तीय राजधानी कौन सी है?",
    options_en: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
    options_hi: ["मुंबई", "दिल्ली", "बेंगलुरु", "चेन्नई"],
    answer_en: "Mumbai",
    answer_hi: "मुंबई",
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "Which state is known as the 'Spice Garden of India'?",
    question_hi: "कौन सा राज्य 'भारत का मसालों का बगीचा' के नाम से जाना जाता है?",
    options_en: ["Kerala", "Goa", "Tamil Nadu", "Karnataka"],
    options_hi: ["केरल", "गोवा", "तमिल नाडु", "कर्नाटक"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "The Great Indian Bustard is the state bird of which state?",
    question_hi: "ग्रेट इंडियन बस्टर्ड किस राज्य का राज्य पक्षी है?",
    options_en: ["Rajasthan", "Gujarat", "Maharashtra", "Punjab"],
    options_hi: ["राजस्थान", "गुजरात", "महाराष्ट्र", "पंजाब"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "Which Indian monument is also known as the 'Black Taj'?",
    question_hi: "कौन सा भारतीय स्मारक 'ब्लैक ताज' के नाम से जाना जाता है?",
    options_en: ["Gol Gumbaz", "Qutub Minar", "Charminar", "Red Fort"],
    options_hi: ["गोल गुंबज", "कुतुब मीनार", "चारमीनार", "लाल किला"],
    answer_en: "Gol Gumbaz",
    answer_hi: "गोल गुंबज",
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "Which city is famous for its leather industry in India?",
    question_hi: "भारत में कौन सा शहर अपनी चमड़े की उद्योग के लिए प्रसिद्ध है?",
    options_en: ["Kanpur", "Agra", "Surat", "Lucknow"],
    options_hi: ["कानपुर", "आगरा", "सूरत", "लखनऊ"],
    answer_en: "Kanpur",
    answer_hi: "कानपुर",
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "Which Indian festival is also known as the 'Festival of Lights'?",
    question_hi: "भारत का कौन सा त्योहार 'दीपों का त्योहार' के नाम से जाना जाता है?",
    options_en: ["Diwali", "Holi", "Navratri", "Raksha Bandhan"],
    options_hi: ["दिवाली", "होली", "नवरात्रि", "रक्षा बंधन"],
    answer_en: "Diwali",
    answer_hi: "दिवाली",
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "Which Indian state is the largest producer of mangoes?",
    question_hi: "आम उत्पादन में सबसे बड़ा भारतीय राज्य कौन सा है?",
    options_en: ["Uttar Pradesh", "Maharashtra", "Andhra Pradesh", "West Bengal"],
    options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "आंध्र प्रदेश", "पश्चिम बंगाल"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "Which city is known as the 'Manchester of India'?",
    question_hi: "भारत का कौन-सा शहर 'भारत का मैनचेस्टर' के नाम से जाना जाता है?",
    options_en: ["Mumbai", "Ahmedabad", "Kolkata", "Chennai"],
    options_hi: ["मुंबई", "अहमदाबाद", "कोलकाता", "चेन्नई"],
    answer_en: "Ahmedabad",
    answer_hi: "अहमदाबाद",
    attempted: false,
    selected: null
  },
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
      const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
      if (q.attempted) {
          attempted++;
          if (q.selected === correctAnswer) score++;
      } else {
          notAttempted++;
      }
      results.push({ 
          question: language === "en" ? q.question_en : q.question_hi,
          selected: q.selected || "Not Answered", 
          correct: correctAnswer 
      });
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