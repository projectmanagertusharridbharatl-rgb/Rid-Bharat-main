const questions = [
  {
    num: 1,
    question_en: "What is the direction of the magnetic force on a moving charge?",
    question_hi: "गतिमान आवेश पर चुंबकीय बल की दिशा क्या होती है?",
    options_en: ["Parallel to the velocity", "Perpendicular to the velocity", "Along the direction of the magnetic field", "None of the above"],
    options_hi: ["वेग के समानांतर", "वेग के लम्बवत", "चुंबकीय क्षेत्र की दिशा में", "उपरोक्त में से कोई नहीं"],
    answer: "Perpendicular to the velocity",
    answer_hi: "वेग के लम्बवत",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which rule is used to determine the direction of magnetic field around a conductor?",
    question_hi: "चालक के चारों ओर चुंबकीय क्षेत्र की दिशा निर्धारित करने के लिए कौन-सा नियम प्रयोग किया जाता है?",
    options_en: ["Right-hand thumb rule", "Fleming’s left-hand rule", "Lenz’s law", "Ohm’s law"],
    options_hi: ["दाएँ हाथ के अंगूठे का नियम", "फ्लेमिंग का बायाँ हाथ नियम", "लेन्ज का नियम", "ओह्म का नियम"],
    answer: "Right-hand thumb rule",
    answer_hi: "दाएँ हाथ के अंगूठे का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "The unit of magnetic field is:",
    question_hi: "चुंबकीय क्षेत्र की इकाई है:",
    options_en: ["Tesla", "Weber", "Henry", "Farad"],
    options_hi: ["टेस्ला", "वेबर", "हेनरी", "फैरेड"],
    answer: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Fleming's left-hand rule is used for:",
    question_hi: "फ्लेमिंग का बायाँ हाथ नियम किसके लिए प्रयोग किया जाता है?",
    options_en: ["Direction of induced current", "Direction of magnetic field", "Direction of force on a current-carrying conductor", "None of these"],
    options_hi: ["प्रेरित धारा की दिशा", "चुंबकीय क्षेत्र की दिशा", "धारा वहन करने वाले चालक पर बल की दिशा", "इनमें से कोई नहीं"],
    answer: "Direction of force on a current-carrying conductor",
    answer_hi: "धारा वहन करने वाले चालक पर बल की दिशा",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the shape of magnetic field lines around a straight current-carrying conductor?",
    question_hi: "सीधी धारा वहन करने वाले चालक के चारों ओर चुंबकीय क्षेत्र रेखाओं का आकार क्या होता है?",
    options_en: ["Straight lines", "Concentric circles", "Elliptical", "Random"],
    options_hi: ["सीधी रेखाएँ", "समवृत्तीय वृत्त", "दीर्घवृत्तीय", "यादृच्छिक"],
    answer: "Concentric circles",
    answer_hi: "समवृत्तीय वृत्त",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which of the following devices works on the magnetic effect of current?",
    question_hi: "निम्न में से कौन-सा उपकरण धारा के चुंबकीय प्रभाव पर कार्य करता है?",
    options_en: ["Electric bulb", "Electric motor", "Electric heater", "Solar cell"],
    options_hi: ["विद्युत बल्ब", "विद्युत मोटर", "विद्युत हीटर", "सौर सेल"],
    answer: "Electric motor",
    answer_hi: "विद्युत मोटर",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which instrument is used to detect current in a circuit?",
    question_hi: "परिपथ में धारा का पता लगाने के लिए किस यंत्र का प्रयोग किया जाता है?",
    options_en: ["Voltmeter", "Ammeter", "Galvanometer", "Multimeter"],
    options_hi: ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "मल्टीमीटर"],
    answer: "Galvanometer",
    answer_hi: "गैल्वेनोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the magnetic field at the center of a circular current-carrying loop?",
    question_hi: "धारा वहन करने वाले वृत्तीय लूप के केंद्र पर चुंबकीय क्षेत्र क्या होता है?",
    options_en: ["Zero", "Maximum", "Minimum", "Cannot be determined"],
    options_hi: ["शून्य", "अधिकतम", "न्यूनतम", "निर्धारित नहीं किया जा सकता"],
    answer: "Maximum",
    answer_hi: "अधिकतम",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Magnetic field lines never:",
    question_hi: "चुंबकीय क्षेत्र रेखाएँ कभी भी नहीं:",
    options_en: ["Intersect each other", "Form closed loops", "Pass through vacuum", "Originate from south pole"],
    options_hi: ["एक-दूसरे को काटती हैं", "बंद लूप बनाती हैं", "रिक्त स्थान से गुजरती हैं", "दक्षिण ध्रुव से उत्पन्न होती हैं"],
    answer: "Intersect each other",
    answer_hi: "एक-दूसरे को काटती हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which law is used to find magnetic field due to a long straight conductor?",
    question_hi: "लंबे सीधे चालक के कारण चुंबकीय क्षेत्र ज्ञात करने के लिए कौन-सा नियम प्रयोग होता है?",
    options_en: ["Ohm's Law", "Ampere’s Law", "Faraday’s Law", "Lenz’s Law"],
    options_hi: ["ओह्म का नियम", "एम्पियर का नियम", "फैराडे का नियम", "लेन्ज का नियम"],
    answer: "Ampere’s Law",
    answer_hi: "एम्पियर का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "SI unit of magnetic flux is:",
    question_hi: "चुंबकीय फ्लक्स की SI इकाई है:",
    options_en: ["Tesla", "Weber", "Gauss", "Henry"],
    options_hi: ["टेस्ला", "वेबर", "गॉस", "हेनरी"],
    answer: "Weber",
    answer_hi: "वेबर",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "The magnetic moment of a current loop is proportional to:",
    question_hi: "धारा लूप का चुंबकीय आघूर्ण किसके अनुपात में होता है?",
    options_en: ["Current", "Area of loop", "Number of turns", "All of the above"],
    options_hi: ["धारा", "लूप का क्षेत्रफल", "टर्न की संख्या", "उपरोक्त सभी"],
    answer: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which component is used to increase the magnetic field in an electromagnet?",
    question_hi: "विद्युतचुंबक में चुंबकीय क्षेत्र बढ़ाने के लिए किस घटक का उपयोग किया जाता है?",
    options_en: ["Copper core", "Iron core", "Aluminium coil", "Zinc rod"],
    options_hi: ["तांबे का कोर", "लौह कोर", "एल्युमिनियम कुंडली", "जिंक रॉड"],
    answer: "Iron core",
    answer_hi: "लौह कोर",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "A charged particle enters a magnetic field perpendicular to it. What happens to its path?",
    question_hi: "एक आवेशित कण चुंबकीय क्षेत्र में लम्बवत प्रवेश करता है। उसके पथ में क्या होता है?",
    options_en: ["Straight line", "Circular path", "Zigzag", "No change"],
    options_hi: ["सीधी रेखा", "वृत्ताकार पथ", "तिरछा", "कोई परिवर्तन नहीं"],
    answer: "Circular path",
    answer_hi: "वृत्ताकार पथ",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What happens to magnetic field strength as current increases?",
    question_hi: "जैसे-जैसे धारा बढ़ती है, चुंबकीय क्षेत्र की तीव्रता में क्या होता है?",
    options_en: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
    options_hi: ["बढ़ती है", "घटती है", "स्थिर रहती है", "शून्य हो जाती है"],
    answer: "Increases",
    answer_hi: "बढ़ती है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which quantity is conserved in magnetic interactions?",
    question_hi: "चुंबकीय क्रियाओं में कौन-सी राशि संरक्षित रहती है?",
    options_en: ["Energy", "Charge", "Mass", "Momentum"],
    options_hi: ["ऊर्जा", "आवेश", "द्रव्यमान", "संचरण"],
    answer: "Energy",
    answer_hi: "ऊर्जा",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "In a solenoid, the magnetic field is:",
    question_hi: "सोलिनॉयड में चुंबकीय क्षेत्र होता है:",
    options_en: ["Uniform inside", "Zero outside", "Circular", "Both A and B"],
    options_hi: ["भीतर समान", "बाहर शून्य", "वृत्तीय", "A और B दोनों"],
    answer: "Both A and B",
    answer_hi: "A और B दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "The magnetic dipole moment is a:",
    question_hi: "चुंबकीय द्विध्रुव आघूर्ण होता है:",
    options_en: ["Scalar quantity", "Vector quantity", "Dimensionless", "None"],
    options_hi: ["अदिश राशि", "सदिश राशि", "निर्विमीय", "कोई नहीं"],
    answer: "Vector quantity",
    answer_hi: "सदिश राशि",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "A current carrying conductor placed in magnetic field experiences:",
    question_hi: "चुंबकीय क्षेत्र में रखा धारा वहन करने वाला चालक अनुभव करता है:",
    options_en: ["Electric force", "Magnetic force", "Gravitational force", "No force"],
    options_hi: ["विद्युत बल", "चुंबकीय बल", "गुरुत्व बल", "कोई बल नहीं"],
    answer: "Magnetic force",
    answer_hi: "चुंबकीय बल",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Direction of magnetic moment of a current loop is given by:",
    question_hi: "धारा लूप का चुंबकीय आघूर्ण की दिशा निर्धारित होती है:",
    options_en: ["Fleming’s left hand rule", "Right hand thumb rule", "Corkscrew rule", "None"],
    options_hi: ["फ्लेमिंग का बायाँ हाथ नियम", "दाएँ हाथ का अंगूठा नियम", "कॉर्कस्क्रू नियम", "कोई नहीं"],
    answer: "Right hand thumb rule",
    answer_hi: "दाएँ हाथ का अंगूठा नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which of the following has a magnetic field?",
    question_hi: "निम्न में से किसके पास चुंबकीय क्षेत्र होता है?",
    options_en: ["Bar magnet", "Solenoid", "Earth", "All of the above"],
    options_hi: ["छड़ चुंबक", "सोलिनॉयड", "पृथ्वी", "उपरोक्त सभी"],
    answer: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Magnetic field lines due to a bar magnet:",
    question_hi: "छड़ चुंबक द्वारा उत्पन्न चुंबकीय क्षेत्र रेखाएं:",
    options_en: ["Start from south pole", "Form open loops", "Go from north to south outside the magnet", "None"],
    options_hi: ["दक्षिण ध्रुव से शुरू होती हैं", "खुली लूप बनाती हैं", "चुंबक के बाहर उत्तर से दक्षिण जाती हैं", "कोई नहीं"],
    answer: "Go from north to south outside the magnet",
    answer_hi: "चुंबक के बाहर उत्तर से दक्षिण जाती हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Earth’s magnetic field is similar to:",
    question_hi: "पृथ्वी का चुंबकीय क्षेत्र किसके समान है?",
    options_en: ["Electric field", "Bar magnet", "Solenoid", "Magnetic needle"],
    options_hi: ["विद्युत क्षेत्र", "छड़ चुंबक", "सोलिनॉयड", "चुंबकीय सुई"],
    answer: "Bar magnet",
    answer_hi: "छड़ चुंबक",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "A magnetic field exerts no force on:",
    question_hi: "चुंबकीय क्षेत्र किस पर कोई बल नहीं लगाता है?",
    options_en: ["Moving charge", "Stationary charge", "Current carrying wire", "Electrons in motion"],
    options_hi: ["गतिमान आवेश", "स्थिर आवेश", "धारा वहन करने वाला तार", "गतिमान इलेक्ट्रॉन"],
    answer: "Stationary charge",
    answer_hi: "स्थिर आवेश",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Magnetic susceptibility is defined as:",
    question_hi: "चुंबकीय सुसंवेदनशीलता को परिभाषित किया जाता है:",
    options_en: ["B/H", "M/H", "M/B", "None"],
    options_hi: ["B/H", "M/H", "M/B", "कोई नहीं"],
    answer: "M/H",
    answer_hi: "M/H",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "What happens to a current-carrying conductor placed in a magnetic field?",
    question_hi: "चुंबकीय क्षेत्र में रखे गए एक विद्युत धारा प्रवाहित चालक के साथ क्या होता है?",
    options_en: ["It experiences a force", "It melts", "It becomes an insulator", "Nothing happens"],
    options_hi: ["यह एक बल का अनुभव करता है", "यह पिघल जाता है", "यह एक इन्सुलेटर बन जाता है", "कुछ नहीं होता"],
    answer: "It experiences a force",
    answer_hi: "यह एक बल का अनुभव करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "The unit of magnetic field strength is:",
    question_hi: "चुंबकीय क्षेत्र की तीव्रता की इकाई क्या है:",
    options_en: ["Tesla", "Newton", "Coulomb", "Henry"],
    options_hi: ["टेस्ला", "न्यूटन", "कूलॉम्ब", "हेनरी"],
    answer: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "The magnetic field inside a long straight solenoid is:",
    question_hi: "एक लंबे सीधे सोलोनॉइड के अंदर चुंबकीय क्षेत्र होता है:",
    options_en: ["Non-uniform", "Zero", "Uniform", "Circular"],
    options_hi: ["असमान", "शून्य", "समान", "वृत्ताकार"],
    answer: "Uniform",
    answer_hi: "समान",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "A moving coil galvanometer can be converted into an ammeter by connecting:",
    question_hi: "एक चल कुंडली गैल्वेनोमीटर को एक एमीटर में बदला जा सकता है:",
    options_en: ["A high resistance in parallel", "A low resistance in parallel", "A low resistance in series", "A high resistance in series"],
    options_hi: ["समानांतर में उच्च प्रतिरोध", "समानांतर में निम्न प्रतिरोध", "श्रृंखला में निम्न प्रतिरोध", "श्रृंखला में उच्च प्रतिरोध"],
    answer: "A low resistance in parallel",
    answer_hi: "समानांतर में निम्न प्रतिरोध",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which rule is used to find the direction of the magnetic field around a current-carrying conductor?",
    question_hi: "विद्युत धारा प्रवाहित चालक के चारों ओर चुंबकीय क्षेत्र की दिशा ज्ञात करने के लिए कौन सा नियम प्रयोग में लाया जाता है?",
    options_en: ["Fleming's Left-Hand Rule", "Right-Hand Thumb Rule", "Lenz's Law", "Faraday's Law"],
    options_hi: ["फ्लेमिंग का बायाँ हाथ नियम", "दाहिना हाथ अंगूठा नियम", "लेन्ज का नियम", "फैराडे का नियम"],
    answer: "Right-Hand Thumb Rule",
    answer_hi: "दाहिना हाथ अंगूठा नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "In which direction does a magnetic needle align itself?",
    question_hi: "चुंबकीय सुई स्वयं को किस दिशा में संरेखित करती है?",
    options_en: ["East-West", "North-South", "Up-Down", "Random"],
    options_hi: ["पूरब-पश्चिम", "उत्तर-दक्षिण", "ऊपर-नीचे", "यादृच्छिक"],
    answer: "North-South",
    answer_hi: "उत्तर-दक्षिण",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Magnetic lines of force never:",
    question_hi: "चुंबकीय बल रेखाएँ कभी भी नहीं:",
    options_en: ["Intersect", "Form closed loops", "Originate from North pole", "End at South pole"],
    options_hi: ["एक-दूसरे को काटती हैं", "बंद लूप बनाती हैं", "उत्तर ध्रुव से उत्पन्न होती हैं", "दक्षिण ध्रुव पर समाप्त होती हैं"],
    answer: "Intersect",
    answer_hi: "एक-दूसरे को काटती हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "The force on a charge moving parallel to magnetic field is:",
    question_hi: "चुंबकीय क्षेत्र के समानांतर गतिशील आवेश पर बल होगा:",
    options_en: ["Maximum", "Zero", "Minimum", "Infinite"],
    options_hi: ["अधिकतम", "शून्य", "न्यूनतम", "अनंत"],
    answer: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Magnetic moment of a solenoid depends on:",
    question_hi: "सोलोनॉइड का चुंबकीय आघूर्ण किस पर निर्भर करता है:",
    options_en: ["Number of turns", "Current", "Area of cross-section", "All of these"],
    options_hi: ["कुंडली की संख्या", "धारा", "अनुप्रस्थ काट का क्षेत्रफल", "इन सभी पर"],
    answer: "All of these",
    answer_hi: "इन सभी पर",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which device is used to measure current in a circuit?",
    question_hi: "सर्किट में विद्युत धारा मापने के लिए किस यंत्र का उपयोग किया जाता है?",
    options_en: ["Voltmeter", "Galvanometer", "Ammeter", "Rheostat"],
    options_hi: ["वोल्टमीटर", "गैल्वेनोमीटर", "एमीटर", "रियोस्टेट"],
    answer: "Ammeter",
    answer_hi: "एमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "The direction of induced current is given by:",
    question_hi: "प्रेरित धारा की दिशा किससे निर्धारित होती है?",
    options_en: ["Ohm's Law", "Lenz’s Law", "Kirchhoff’s Law", "Ampere’s Law"],
    options_hi: ["ओम का नियम", "लेन्ज का नियम", "किर्शॉफ का नियम", "एम्पियर का नियम"],
    answer: "Lenz’s Law",
    answer_hi: "लेन्ज का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "The Earth's magnetic field is due to:",
    question_hi: "पृथ्वी का चुंबकीय क्षेत्र किस कारण होता है?",
    options_en: ["Gravitational pull", "Earth's rotation", "Electric currents in Earth’s core", "Sunlight"],
    options_hi: ["गुरुत्वाकर्षण बल", "पृथ्वी का घूर्णन", "पृथ्वी के कोर में विद्युत धाराएँ", "सूर्य का प्रकाश"],
    answer: "Electric currents in Earth’s core",
    answer_hi: "पृथ्वी के कोर में विद्युत धाराएँ",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "SI unit of magnetic flux is:",
    question_hi: "चुंबकीय फ्लक्स की एसआई इकाई क्या है?",
    options_en: ["Tesla", "Weber", "Gauss", "Ampere"],
    options_hi: ["टेस्ला", "वेबर", "गॉस", "एम्पियर"],
    answer: "Weber",
    answer_hi: "वेबर",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "A current loop behaves like a:",
    question_hi: "एक विद्युत धारा लूप किसकी तरह व्यवहार करता है?",
    options_en: ["Electric dipole", "Magnetic dipole", "Neutral object", "Capacitor"],
    options_hi: ["विद्युत द्विध्रुव", "चुंबकीय द्विध्रुव", "तटस्थ वस्तु", "कैपेसिटर"],
    answer: "Magnetic dipole",
    answer_hi: "चुंबकीय द्विध्रुव",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the shape of magnetic field lines around a straight current-carrying conductor?",
    question_hi: "सीधे विद्युत धारा प्रवाहित चालक के चारों ओर चुंबकीय क्षेत्र रेखाओं का आकार क्या होता है?",
    options_en: ["Straight lines", "Elliptical", "Circular", "Parabolic"],
    options_hi: ["सीधी रेखाएं", "दीर्घवृत्ताकार", "वृत्ताकार", "परवलयाकार"],
    answer: "Circular",
    answer_hi: "वृत्ताकार",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "The instrument used to detect the presence of current is:",
    question_hi: "विद्युत धारा की उपस्थिति का पता लगाने वाला यंत्र कौन सा है?",
    options_en: ["Voltmeter", "Ammeter", "Galvanometer", "Wattmeter"],
    options_hi: ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "वाटमीटर"],
    answer: "Galvanometer",
    answer_hi: "गैल्वेनोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Fleming’s left-hand rule is used to find:",
    question_hi: "फ्लेमिंग का बायाँ हाथ नियम किसके लिए प्रयोग किया जाता है?",
    options_en: ["Direction of magnetic field", "Direction of current", "Direction of force", "Direction of velocity"],
    options_hi: ["चुंबकीय क्षेत्र की दिशा", "धारा की दिशा", "बल की दिशा", "वेग की दिशा"],
    answer: "Direction of force",
    answer_hi: "बल की दिशा",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "A magnetic field exerts no force on a:",
    question_hi: "चुंबकीय क्षेत्र किस पर कोई बल नहीं लगाता?",
    options_en: ["Stationary charge", "Moving charge", "Current-carrying conductor", "Electron"],
    options_hi: ["स्थिर आवेश", "गतिमान आवेश", "धारा वहन करने वाला चालक", "इलेक्ट्रॉन"],
    answer: "Stationary charge",
    answer_hi: "स्थिर आवेश",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "A magnetic compass needle aligns in which direction on Earth?",
    question_hi: "पृथ्वी पर चुंबकीय कंपास सुई किस दिशा में संरेखित होती है?",
    options_en: ["East-West", "Randomly", "North-South", "South-East"],
    options_hi: ["पूर्व-पश्चिम", "यादृच्छिक", "उत्तर-दक्षिण", "दक्षिण-पूर्व"],
    answer: "North-South",
    answer_hi: "उत्तर-दक्षिण",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Magnetic field lines always form:",
    question_hi: "चुंबकीय क्षेत्र रेखाएँ हमेशा बनाती हैं:",
    options_en: ["Straight lines", "Closed loops", "Open curves", "Zigzag paths"],
    options_hi: ["सीधी रेखाएँ", "बंद लूप", "खुली वक्र रेखाएँ", "तिरछे रास्ते"],
    answer: "Closed loops",
    answer_hi: "बंद लूप",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Magnetic field inside a bar magnet moves from:",
    question_hi: "एक बार चुंबक के अंदर चुंबकीय क्षेत्र की दिशा होती है:",
    options_en: ["North to South", "South to North", "East to West", "Random"],
    options_hi: ["उत्तर से दक्षिण", "दक्षिण से उत्तर", "पूर्व से पश्चिम", "यादृच्छिक"],
    answer: "South to North",
    answer_hi: "दक्षिण से उत्तर",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which part of Earth acts like a giant magnet?",
    question_hi: "पृथ्वी का कौन सा भाग एक विशाल चुंबक की तरह कार्य करता है?",
    options_en: ["Atmosphere", "Core", "Crust", "Mantle"],
    options_hi: ["वायुमंडल", "कोर", "क्रस्ट", "मैंटल"],
    answer: "Core",
    answer_hi: "कोर",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which of the following materials is most magnetic?",
    question_hi: "निम्न में से कौन सा पदार्थ सबसे अधिक चुंबकीय होता है?",
    options_en: ["Copper", "Iron", "Wood", "Glass"],
    options_hi: ["तांबा", "लोहा", "लकड़ी", "कांच"],
    answer: "Iron",
    answer_hi: "लोहा",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Magnetic field is strongest where field lines are:",
    question_hi: "चुंबकीय क्षेत्र सबसे अधिक होता है जहाँ बल रेखाएँ होती हैं:",
    options_en: ["Far apart", "Curved", "Straight", "Close together"],
    options_hi: ["दूर-दूर", "वक्र", "सीधी", "पास-पास"],
    answer: "Close together",
    answer_hi: "पास-पास",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "The region around a magnet where force acts is called:",
    question_hi: "चुंबक के चारों ओर वह क्षेत्र जहाँ बल कार्य करता है, कहलाता है:",
    options_en: ["Magnetic region", "Magnetic area", "Magnetic field", "Magnetic zone"],
    options_hi: ["चुंबकीय क्षेत्र", "चुंबकीय क्षेत्रफल", "चुंबकीय क्षेत्र", "चुंबकीय जोन"],
    answer: "Magnetic field",
    answer_hi: "चुंबकीय क्षेत्र",
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