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




// ========================== GLOBAL VARIABLES ==========================
let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
let timerInterval;

// ========================== QUIZ LOGIC ==========================
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

// ========================== QUESTION ATTEMPT LOGIC ==========================
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ========================== NAVIGATION CONTROLS ==========================
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

// ========================== SUBMIT & SCORE ==========================
function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0, notAttempted = 0, score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(`Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`);
}

// ========================== TIMER FUNCTION ==========================
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

// ========================== QUESTION NAVIGATION UI ==========================
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color};' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ========================== CAMERA & MOVEMENT LOGIC ==========================
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
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

    // ========================== RESIZE HANDLE ==========================
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

    // ========================== DRAG LOGIC ==========================
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

    // ========================== RESIZE LOGIC ==========================
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

    // ========================== CAMERA STREAM ==========================
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

// ========================== MOVEMENT DETECTION ==========================
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
                    alert("⚠️ Alert 1: Face not moving");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head not moving");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

// ========================== RESTART TEST ==========================
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

// ========================== PAGE LOAD ==========================
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); 
};
