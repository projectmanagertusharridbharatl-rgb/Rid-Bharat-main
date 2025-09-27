const questions = [
   {
    num: 1,
    question_en: "Which one of the following is the most densely populated country in the world?",
    question_hi: "नीचे दिए गए में से कौन सा देश दुनिया का सबसे अधिक घनी आबादी वाला देश है?",
    options_en: ["Monaco", "India", "Bangladesh", "Singapore"],
    options_hi: ["मोनाको", "भारत", "बांग्लादेश", "सिंगापुर"],
    answer_en: "Monaco",
    answer_hi: "मोनाको",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the approximate population density of Monaco?",
    question_hi: "मोनाको की अनुमानित जनसंख्या घनत्व क्या है?",
    options_en: ["Over 15,000 persons per sq. km", "Over 2,000 persons per sq. km", "Over 5,000 persons per sq. km", "Over 10,000 persons per sq. km"],
    options_hi: ["15,000 से अधिक व्यक्ति प्रति वर्ग किलोमीटर", "2,000 से अधिक व्यक्ति प्रति वर्ग किलोमीटर", "5,000 से अधिक व्यक्ति प्रति वर्ग किलोमीटर", "10,000 से अधिक व्यक्ति प्रति वर्ग किलोमीटर"],
    answer_en: "Over 15,000 persons per sq. km",
    answer_hi: "15,000 से अधिक व्यक्ति प्रति वर्ग किलोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which continent has the highest number of densely populated countries?",
    question_hi: "किस महाद्वीप में सबसे अधिक घनी आबादी वाले देश हैं?",
    options_en: ["Asia", "Europe", "Africa", "South America"],
    options_hi: ["एशिया", "यूरोप", "अफ्रीका", "दक्षिण अमेरिका"],
    answer_en: "Asia",
    answer_hi: "एशिया",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which of the following is NOT among the top five most densely populated countries?",
    question_hi: "नीचे दिए गए में से कौन सा शीर्ष पांच सबसे अधिक घनी आबादी वाले देशों में नहीं है?",
    options_en: ["Monaco", "Singapore", "Vatican City", "Australia"],
    options_hi: ["मोनाको", "सिंगापुर", "वैटिकन सिटी", "ऑस्ट्रेलिया"],
    answer_en: "Australia",
    answer_hi: "ऑस्ट्रेलिया",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Bangladesh’s population density is closest to which figure?",
    question_hi: "बांग्लादेश की जनसंख्या घनत्व सबसे करीब है किस संख्या के?",
    options_en: ["1,200 persons per sq. km", "2,000 persons per sq. km", "1,000 persons per sq. km", "1,500 persons per sq. km"],
    options_hi: ["1,200 व्यक्ति प्रति वर्ग किलोमीटर", "2,000 व्यक्ति प्रति वर्ग किलोमीटर", "1,000 व्यक्ति प्रति वर्ग किलोमीटर", "1,500 व्यक्ति प्रति वर्ग किलोमीटर"],
    answer_en: "1,200 persons per sq. km",
    answer_hi: "1,200 व्यक्ति प्रति वर्ग किलोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which of the following factors contributes most to high population density?",
    question_hi: "नीचे दिए गए में से कौन सा कारण सबसे अधिक जनसंख्या घनत्व में योगदान देता है?",
    options_en: ["High birth rate", "Large land area", "Low fertility rate", "Desert terrain"],
    options_hi: ["उच्च जन्म दर", "बड़ा भूमि क्षेत्र", "कम प्रजनन दर", "रेगिस्तानी इलाका"],
    answer_en: "High birth rate",
    answer_hi: "उच्च जन्म दर",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which country among the following has a low population density?",
    question_hi: "नीचे दिए गए में से किस देश की जनसंख्या घनत्व कम है?",
    options_en: ["Bangladesh", "Monaco", "Mongolia", "Singapore"],
    options_hi: ["बांग्लादेश", "मोनाको", "मंगोलिया", "सिंगापुर"],
    answer_en: "Mongolia",
    answer_hi: "मंगोलिया",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which region in India is known for high population density?",
    question_hi: "भारत का कौन-सा क्षेत्र उच्च जनसंख्या घनत्व के लिए जाना जाता है?",
    options_en: ["Thar Desert", "Bihar", "Ladakh", "Himalayas"],
    options_hi: ["थार रेगिस्तान", "बिहार", "लद्दाख", "हिमालय"],
    answer_en: "Bihar",
    answer_hi: "बिहार",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which of these is a consequence of high population density?",
    question_hi: "इनमें से कौन उच्च जनसंख्या घनत्व का परिणाम है?",
    options_en: ["More natural resources", "Better air quality", "Pressure on infrastructure", "More open spaces"],
    options_hi: ["अधिक प्राकृतिक संसाधन", "बेहतर वायु गुणवत्ता", "इन्फ्रास्ट्रक्चर पर दबाव", "अधिक खुला स्थान"],
    answer_en: "Pressure on infrastructure",
    answer_hi: "इन्फ्रास्ट्रक्चर पर दबाव",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Singapore’s population density is approximately:",
    question_hi: "सिंगापुर की जनसंख्या घनत्व लगभग कितनी है?",
    options_en: ["8,000 persons per sq. km", "5,000 persons per sq. km", "3,000 persons per sq. km", "10,000 persons per sq. km"],
    options_hi: ["8,000 व्यक्ति प्रति वर्ग किलोमीटर", "5,000 व्यक्ति प्रति वर्ग किलोमीटर", "3,000 व्यक्ति प्रति वर्ग किलोमीटर", "10,000 व्यक्ति प्रति वर्ग किलोमीटर"],
    answer_en: "8,000 persons per sq. km",
    answer_hi: "8,000 व्यक्ति प्रति वर्ग किलोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which of these countries has a population density closest to 400 persons per sq. km?",
    question_hi: "इनमें से किस देश की जनसंख्या घनत्व लगभग 400 व्यक्ति प्रति वर्ग किलोमीटर है?",
    options_en: ["India", "China", "United States", "Russia"],
    options_hi: ["भारत", "चीन", "संयुक्त राज्य अमेरिका", "रूस"],
    answer_en: "India",
    answer_hi: "भारत",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Population density is calculated by dividing:",
    question_hi: "जनसंख्या घनत्व की गणना कैसे की जाती है?",
    options_en: ["Population by birth rate", "Area by population", "Population by area", "Area by birth rate"],
    options_hi: ["जनसंख्या को जन्म दर से", "क्षेत्रफल को जनसंख्या से", "जनसंख्या को क्षेत्रफल से", "क्षेत्रफल को जन्म दर से"],
    answer_en: "Population by area",
    answer_hi: "जनसंख्या को क्षेत्रफल से",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which of the following countries is least densely populated?",
    question_hi: "नीचे दिए गए में से कौन सा देश सबसे कम घनी आबादी वाला है?",
    options_en: ["Greenland", "Monaco", "Singapore", "Bangladesh"],
    options_hi: ["ग्रीनलैंड", "मोनाको", "सिंगापुर", "बांग्लादेश"],
    answer_en: "Greenland",
    answer_hi: "ग्रीनलैंड",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which city is considered the most densely populated urban area?",
    question_hi: "कौन-सा शहर सबसे अधिक घनी आबादी वाला शहरी क्षेत्र माना जाता है?",
    options_en: ["Mumbai", "Dhaka", "Manila", "Paris"],
    options_hi: ["मुंबई", "ढाका", "मनीला", "पेरिस"],
    answer_en: "Manila",
    answer_hi: "मनीला",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Population density affects which of the following most directly?",
    question_hi: "जनसंख्या घनत्व निम्नलिखित में से किस पर सबसे अधिक प्रभाव डालता है?",
    options_en: ["Climate", "Infrastructure", "Soil quality", "Latitude"],
    options_hi: ["जलवायु", "इन्फ्रास्ट्रक्चर", "मिट्टी की गुणवत्ता", "अक्षांश"],
    answer_en: "Infrastructure",
    answer_hi: "इन्फ्रास्ट्रक्चर",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which among these countries has experienced a recent decline in population density?",
    question_hi: "इनमें से किस देश में हाल ही में जनसंख्या घनत्व में कमी आई है?",
    options_en: ["Japan", "Bangladesh", "India", "Singapore"],
    options_hi: ["जापान", "बांग्लादेश", "भारत", "सिंगापुर"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Population density is typically highest in which kind of area?",
    question_hi: "जनसंख्या घनत्व आमतौर पर किस प्रकार के क्षेत्र में सबसे अधिक होता है?",
    options_en: ["Urban", "Rural", "Desert", "Mountain"],
    options_hi: ["शहरी", "ग्रामीण", "रेगिस्तान", "पर्वतीय"],
    answer_en: "Urban",
    answer_hi: "शहरी",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which of the following countries is known for having a very low population density due to its large landmass?",
    question_hi: "नीचे दिए गए में से कौन सा देश अपनी विशाल भूमि के कारण बहुत कम जनसंख्या घनत्व के लिए जाना जाता है?",
    options_en: ["Canada", "Bangladesh", "Monaco", "Singapore"],
    options_hi: ["कनाडा", "बांग्लादेश", "मोनाको", "सिंगापुर"],
    answer_en: "Canada",
    answer_hi: "कनाडा",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which of the following is NOT a factor affecting population density?",
    question_hi: "जनसंख्या घनत्व को प्रभावित करने वाला कौन सा कारण नहीं है?",
    options_en: ["Climate", "Topography", "Soil fertility", "Solar radiation"],
    options_hi: ["जलवायु", "भूमि रचना", "मिट्टी की उर्वरता", "सौर विकिरण"],
    answer_en: "Solar radiation",
    answer_hi: "सौर विकिरण",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which country’s population density has increased drastically in the last decade?",
    question_hi: "किस देश की जनसंख्या घनत्व पिछले दशक में तेजी से बढ़ी है?",
    options_en: ["India", "Russia", "Australia", "Greenland"],
    options_hi: ["भारत", "रूस", "ऑस्ट्रेलिया", "ग्रीनलैंड"],
    answer_en: "India",
    answer_hi: "भारत",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which among the following has the least impact on population density?",
    question_hi: "इनमें से किसका जनसंख्या घनत्व पर सबसे कम प्रभाव होता है?",
    options_en: ["Economic opportunities", "Healthcare facilities", "Climate", "Fashion trends"],
    options_hi: ["आर्थिक अवसर", "स्वास्थ्य सुविधाएं", "जलवायु", "फैशन ट्रेंड"],
    answer_en: "Fashion trends",
    answer_hi: "फैशन ट्रेंड",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the term for the number of people living per unit area?",
    question_hi: "प्रति इकाई क्षेत्र में रहने वाले लोगों की संख्या को क्या कहा जाता है?",
    options_en: ["Population density", "Population growth", "Population distribution", "Population decline"],
    options_hi: ["जनसंख्या घनत्व", "जनसंख्या वृद्धि", "जनसंख्या वितरण", "जनसंख्या गिरावट"],
    answer_en: "Population density",
    answer_hi: "जनसंख्या घनत्व",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which country is known for having the highest urban population density?",
    question_hi: "कौन सा देश उच्चतम शहरी जनसंख्या घनत्व के लिए जाना जाता है?",
    options_en: ["Singapore", "Monaco", "Bangladesh", "India"],
    options_hi: ["सिंगापुर", "मोनाको", "बांग्लादेश", "भारत"],
    answer_en: "Monaco",
    answer_hi: "मोनाको",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which of the following factors can reduce population density?",
    question_hi: "निम्नलिखित में से कौन-सा कारक जनसंख्या घनत्व को कम कर सकता है?",
    options_en: ["Migration", "Birth rate", "Urbanization", "High fertility"],
    options_hi: ["प्रवास", "जन्म दर", "शहरीकरण", "उच्च प्रजनन"],
    answer_en: "Migration",
    answer_hi: "प्रवास",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which country has the highest population density in Africa?",
    question_hi: "अफ्रीका में सबसे अधिक जनसंख्या घनत्व वाला देश कौन सा है?",
    options_en: ["Rwanda", "Nigeria", "Egypt", "South Africa"],
    options_hi: ["रवांडा", "नाइजीरिया", "मिस्र", "दक्षिण अफ्रीका"],
    answer_en: "Rwanda",
    answer_hi: "रवांडा",
    attempted: false,
    selected: ""
  },
    {
    num: 26,
    question_en: "Which factor is most responsible for high population density in coastal areas?",
    question_hi: "तटीय क्षेत्रों में उच्च जनसंख्या घनत्व के लिए सबसे जिम्मेदार कारक कौन सा है?",
    options_en: ["Trade and commerce", "Harsh climate", "Lack of resources", "Remote location"],
    options_hi: ["व्यापार और वाणिज्य", "कठोर जलवायु", "संसाधनों की कमी", "दूरदराज़ स्थान"],
    answer_en: "Trade and commerce",
    answer_hi: "व्यापार और वाणिज्य",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which continent has the lowest average population density?",
    question_hi: "किस महाद्वीप की औसत जनसंख्या घनत्व सबसे कम है?",
    options_en: ["Australia", "Asia", "Europe", "Africa"],
    options_hi: ["ऑस्ट्रेलिया", "एशिया", "यूरोप", "अफ्रीका"],
    answer_en: "Australia",
    answer_hi: "ऑस्ट्रेलिया",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which country has a very high population density but limited land area?",
    question_hi: "किस देश में बहुत अधिक जनसंख्या घनत्व है लेकिन भूमि क्षेत्र सीमित है?",
    options_en: ["Bangladesh", "Russia", "Brazil", "Canada"],
    options_hi: ["बांग्लादेश", "रूस", "ब्राजील", "कनाडा"],
    answer_en: "Bangladesh",
    answer_hi: "बांग्लादेश",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What effect does urbanization have on population density?",
    question_hi: "शहरीकरण का जनसंख्या घनत्व पर क्या प्रभाव पड़ता है?",
    options_en: ["Increases density", "Decreases density", "No effect", "Causes migration out"],
    options_hi: ["घनत्व बढ़ाता है", "घनत्व घटाता है", "कोई प्रभाव नहीं", "प्रवास को बढ़ावा देता है"],
    answer_en: "Increases density",
    answer_hi: "घनत्व बढ़ाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which natural feature typically results in low population density?",
    question_hi: "कौन सी प्राकृतिक विशेषता आमतौर पर कम जनसंख्या घनत्व का कारण बनती है?",
    options_en: ["Deserts", "Plains", "Rivers", "Coasts"],
    options_hi: ["रेगिस्तान", "मैदान", "नदियाँ", "तट"],
    answer_en: "Deserts",
    answer_hi: "रेगिस्तान",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which factor directly influences population density by affecting livability?",
    question_hi: "कौन सा कारक निवासयोग्यता को प्रभावित करके सीधे जनसंख्या घनत्व को प्रभावित करता है?",
    options_en: ["Climate", "Television", "Fashion", "Sports"],
    options_hi: ["जलवायु", "टेलीविजन", "फैशन", "खेल"],
    answer_en: "Climate",
    answer_hi: "जलवायु",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Countries with which of the following characteristics usually have high population densities?",
    question_hi: "किस प्रकार के देशों में आमतौर पर उच्च जनसंख्या घनत्व होता है?",
    options_en: ["Fertile land and urbanization", "Mountainous and barren land", "Extreme cold climate", "Isolated islands"],
    options_hi: ["उर्वर भूमि और शहरीकरण", "पहाड़ी और बंजर भूमि", "अत्यधिक ठंडा जलवायु", "दूरस्थ द्वीप"],
    answer_en: "Fertile land and urbanization",
    answer_hi: "उर्वर भूमि और शहरीकरण",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the approximate population density of India as of 2020?",
    question_hi: "2020 के अनुसार भारत की लगभग जनसंख्या घनत्व क्या है?",
    options_en: ["450 people per sq km", "100 people per sq km", "50 people per sq km", "800 people per sq km"],
    options_hi: ["450 लोग प्रति वर्ग किमी", "100 लोग प्रति वर्ग किमी", "50 लोग प्रति वर्ग किमी", "800 लोग प्रति वर्ग किमी"],
    answer_en: "450 people per sq km",
    answer_hi: "450 लोग प्रति वर्ग किमी",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "How does migration affect population density in rural areas?",
    question_hi: "प्रवास ग्रामीण क्षेत्रों में जनसंख्या घनत्व को कैसे प्रभावित करता है?",
    options_en: ["Decreases density", "Increases density", "No change", "Creates deserts"],
    options_hi: ["घनत्व घटता है", "घनत्व बढ़ता है", "कोई परिवर्तन नहीं", "रेगिस्तान बनता है"],
    answer_en: "Decreases density",
    answer_hi: "घनत्व घटता है",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which of the following is a densely populated country in Europe?",
    question_hi: "नीचे में से कौन सा यूरोप का जनसंख्या घनत्व वाला देश है?",
    options_en: ["Netherlands", "Norway", "Finland", "Iceland"],
    options_hi: ["नीदरलैंड", "नॉर्वे", "फिनलैंड", "आइसलैंड"],
    answer_en: "Netherlands",
    answer_hi: "नीदरलैंड",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Population density is usually lower in which kind of climate?",
    question_hi: "किस प्रकार के जलवायु में जनसंख्या घनत्व आमतौर पर कम होता है?",
    options_en: ["Extreme cold", "Temperate", "Tropical", "Moderate"],
    options_hi: ["अत्यधिक ठंडा", "समशीतोष्ण", "उष्णकटिबंधीय", "मध्यम"],
    answer_en: "Extreme cold",
    answer_hi: "अत्यधिक ठंडा",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which economic activity tends to be found in high population density areas?",
    question_hi: "उच्च जनसंख्या घनत्व वाले क्षेत्रों में आमतौर पर कौन सी आर्थिक गतिविधि पाई जाती है?",
    options_en: ["Industry and services", "Hunting", "Extensive farming", "Mining"],
    options_hi: ["उद्योग और सेवा", "शिकार", "व्यापक खेती", "खनन"],
    answer_en: "Industry and services",
    answer_hi: "उद्योग और सेवा",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which country in Asia has the highest population density?",
    question_hi: "एशिया में किस देश की जनसंख्या घनत्व सबसे अधिक है?",
    options_en: ["Bangladesh", "India", "China", "Pakistan"],
    options_hi: ["बांग्लादेश", "भारत", "चीन", "पाकिस्तान"],
    answer_en: "Bangladesh",
    answer_hi: "बांग्लादेश",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which factor has contributed the most to population density in urban areas?",
    question_hi: "शहरी क्षेत्रों में जनसंख्या घनत्व में सबसे अधिक योगदान देने वाला कारक कौन सा है?",
    options_en: ["Better jobs and facilities", "Harsh environment", "High birth rates", "Poor transport"],
    options_hi: ["बेहतर नौकरी और सुविधाएं", "कठोर पर्यावरण", "उच्च जन्म दर", "खराब परिवहन"],
    answer_en: "Better jobs and facilities",
    answer_hi: "बेहतर नौकरी और सुविधाएं",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which of the following areas generally has the lowest population density?",
    question_hi: "इनमें से कौन सा क्षेत्र आमतौर पर सबसे कम जनसंख्या घनत्व वाला होता है?",
    options_en: ["Mountainous regions", "River plains", "Coastal areas", "Urban centers"],
    options_hi: ["पर्वतीय क्षेत्र", "नदी के मैदान", "तटीय क्षेत्र", "शहरी केंद्र"],
    answer_en: "Mountainous regions",
    answer_hi: "पर्वतीय क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the population density formula?",
    question_hi: "जनसंख्या घनत्व का सूत्र क्या है?",
    options_en: ["Population / Area", "Area / Population", "Birth Rate / Death Rate", "Population Growth Rate"],
    options_hi: ["जनसंख्या / क्षेत्रफल", "क्षेत्रफल / जनसंख्या", "जन्म दर / मृत्यु दर", "जनसंख्या वृद्धि दर"],
    answer_en: "Population / Area",
    answer_hi: "जनसंख्या / क्षेत्रफल",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which of the following has the highest population density in the world?",
    question_hi: "दुनिया में इनमें से किसका सबसे अधिक जनसंख्या घनत्व है?",
    options_en: ["Monaco", "India", "Bangladesh", "Japan"],
    options_hi: ["मोनाको", "भारत", "बांग्लादेश", "जापान"],
    answer_en: "Monaco",
    answer_hi: "मोनाको",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Why do desert areas have low population density?",
    question_hi: "रेगिस्तान क्षेत्रों में जनसंख्या घनत्व कम क्यों होता है?",
    options_en: ["Harsh living conditions", "High rainfall", "Fertile soil", "Good infrastructure"],
    options_hi: ["कठोर जीवन परिस्थितियां", "अधिक वर्षा", "उर्वर मिट्टी", "अच्छा आधारभूत संरचना"],
    answer_en: "Harsh living conditions",
    answer_hi: "कठोर जीवन परिस्थितियां",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which region of India has the lowest population density?",
    question_hi: "भारत का कौन सा क्षेत्र सबसे कम जनसंख्या घनत्व वाला है?",
    options_en: ["Ladakh", "Punjab", "Bihar", "Kerala"],
    options_hi: ["लद्दाख", "पंजाब", "बिहार", "केरल"],
    answer_en: "Ladakh",
    answer_hi: "लद्दाख",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which of the following is a consequence of high population density?",
    question_hi: "उच्च जनसंख्या घनत्व का कौन सा परिणाम होता है?",
    options_en: ["Overcrowding", "Fertile land", "Low pollution", "Good housing"],
    options_hi: ["अधिक भीड़", "उर्वर भूमि", "कम प्रदूषण", "अच्छा आवास"],
    answer_en: "Overcrowding",
    answer_hi: "अधिक भीड़",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which of the following countries has one of the lowest population densities in the world?",
    question_hi: "इनमें से किस देश की दुनिया में सबसे कम जनसंख्या घनत्व में से एक है?",
    options_en: ["Australia", "Bangladesh", "India", "South Korea"],
    options_hi: ["ऑस्ट्रेलिया", "बांग्लादेश", "भारत", "दक्षिण कोरिया"],
    answer_en: "Australia",
    answer_hi: "ऑस्ट्रेलिया",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "How does climate influence population density?",
    question_hi: "जलवायु जनसंख्या घनत्व को कैसे प्रभावित करती है?",
    options_en: ["Favorable climate increases density", "Climate has no effect", "Harsh climate increases density", "Climate decreases birth rate"],
    options_hi: ["अनुकूल जलवायु घनत्व बढ़ाती है", "जलवायु का कोई प्रभाव नहीं", "कठोर जलवायु घनत्व बढ़ाती है", "जलवायु जन्म दर घटाती है"],
    answer_en: "Favorable climate increases density",
    answer_hi: "अनुकूल जलवायु घनत्व बढ़ाती है",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which of the following is an urban area with very high population density?",
    question_hi: "इनमें से कौन सा शहरी क्षेत्र बहुत उच्च जनसंख्या घनत्व वाला है?",
    options_en: ["Mumbai", "Tundra", "Desert", "Rainforest"],
    options_hi: ["मुंबई", "टुंड्रा", "रेगिस्तान", "वर्षावन"],
    answer_en: "Mumbai",
    answer_hi: "मुंबई",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Population density can be expressed as:",
    question_hi: "जनसंख्या घनत्व को इस रूप में व्यक्त किया जा सकता है:",
    options_en: ["Number of people per square kilometer", "Total population", "Number of births", "Death rate"],
    options_hi: ["प्रति वर्ग किलोमीटर लोगों की संख्या", "कुल जनसंख्या", "जन्मों की संख्या", "मृत्यु दर"],
    answer_en: "Number of people per square kilometer",
    answer_hi: "प्रति वर्ग किलोमीटर लोगों की संख्या",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which of these is NOT a densely populated city?",
    question_hi: "इनमें से कौन सा घनत्व वाला शहर नहीं है?",
    options_en: ["Tokyo", "Delhi", "Sydney", "Kolkata"],
    options_hi: ["टोक्यो", "दिल्ली", "सिडनी", "कोलकाता"],
    answer_en: "Sydney",
    answer_hi: "सिडनी",
    attempted: false,
    selected: ""
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