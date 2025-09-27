const questions = [
   {
    num: 1,
    question_en: "What is electromagnetic induction?",
    question_hi: "चुंबकीय प्रेरण क्या है?",
    options_en: [
      "Generation of electric current due to a changing magnetic field",
      "Generation of magnetic field due to a changing current",
      "Generation of current by friction",
      "Generation of current by pressure"
    ],
    options_hi: [
      "चुंबकीय क्षेत्र में परिवर्तन के कारण विद्युत धारा का उत्पन्न होना",
      "धारा में परिवर्तन के कारण चुंबकीय क्षेत्र का उत्पन्न होना",
      "घर्षण द्वारा धारा का उत्पन्न होना",
      "दाब द्वारा धारा का उत्पन्न होना"
    ],
    answer_en: "Generation of electric current due to a changing magnetic field",
    answer_hi: "चुंबकीय क्षेत्र में परिवर्तन के कारण विद्युत धारा का उत्पन्न होना",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Who discovered electromagnetic induction?",
    question_hi: "चुंबकीय प्रेरण की खोज किसने की?",
    options_en: [
      "Michael Faraday",
      "James Maxwell",
      "André-Marie Ampère",
      "Heinrich Hertz"
    ],
    options_hi: [
      "माइकल फैराडे",
      "जेम्स मैक्सवेल",
      "आंद्रे-मेरी एम्पीयर",
      "हाइनरिच हर्ट्ज़"
    ],
    answer_en: "Michael Faraday",
    answer_hi: "माइकल फैराडे",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Faraday's law is related to:",
    question_hi: "फैराडे का नियम किससे संबंधित है:",
    options_en: [
      "Electromagnetic induction",
      "Electrostatics",
      "Magnetostatics",
      "Thermodynamics"
    ],
    options_hi: [
      "चुंबकीय प्रेरण",
      "स्थिर विद्युत",
      "स्थिर चुंबकत्व",
      "तापगतिकी"
    ],
    answer_en: "Electromagnetic induction",
    answer_hi: "चुंबकीय प्रेरण",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Lenz's law is based on the law of:",
    question_hi: "लेन्ज़ का नियम किस नियम पर आधारित है?",
    options_en: [
      "Conservation of energy",
      "Conservation of momentum",
      "Conservation of charge",
      "Conservation of mass"
    ],
    options_hi: [
      "ऊर्जा संरक्षण का नियम",
      "संचरण संरक्षण का नियम",
      "आवेश संरक्षण का नियम",
      "द्रव्यमान संरक्षण का नियम"
    ],
    answer_en: "Conservation of energy",
    answer_hi: "ऊर्जा संरक्षण का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What does Lenz's law state?",
    question_hi: "लेन्ज़ का नियम क्या कहता है?",
    options_en: [
      "Induced current opposes the cause producing it",
      "Induced current supports the change",
      "Magnetic flux remains constant",
      "Electric current is proportional to voltage"
    ],
    options_hi: [
      "प्रेरित धारा उसके कारण का विरोध करती है",
      "प्रेरित धारा परिवर्तन का समर्थन करती है",
      "चुंबकीय फ्लक्स स्थिर रहता है",
      "विद्युत धारा वोल्टेज के समानुपाती होती है"
    ],
    answer_en: "Induced current opposes the cause producing it",
    answer_hi: "प्रेरित धारा उसके कारण का विरोध करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "SI unit of magnetic flux is:",
    question_hi: "चुंबकीय फ्लक्स की एसआई इकाई क्या है?",
    options_en: ["Weber", "Tesla", "Henry", "Farad"],
    options_hi: ["वेबर", "टेस्ला", "हेनरी", "फैराड"],
    answer_en: "Weber",
    answer_hi: "वेबर",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which quantity determines the direction of induced current?",
    question_hi: "प्रेरित धारा की दिशा किससे निर्धारित होती है?",
    options_en: ["Lenz's Law", "Ampere's Law", "Coulomb's Law", "Ohm's Law"],
    options_hi: ["लेन्ज़ का नियम", "एम्पीयर का नियम", "कूलॉम्ब का नियम", "ओम का नियम"],
    answer_en: "Lenz's Law",
    answer_hi: "लेन्ज़ का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "The unit of magnetic flux density is:",
    question_hi: "चुंबकीय फ्लक्स घनत्व की इकाई क्या है?",
    options_en: ["Tesla", "Weber", "Farad", "Coulomb"],
    options_hi: ["टेस्ला", "वेबर", "फैराड", "कूलॉम्ब"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Mutual induction occurs between:",
    question_hi: "परस्पर प्रेरण किसके बीच होता है?",
    options_en: [
      "Two coils",
      "One coil",
      "A magnet and a coil",
      "Two magnets"
    ],
    options_hi: [
      "दो कुंडलियों के बीच",
      "एक कुंडली में",
      "एक चुंबक और कुंडली के बीच",
      "दो चुंबकों के बीच"
    ],
    answer_en: "Two coils",
    answer_hi: "दो कुंडलियों के बीच",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Self-induction is the property of:",
    question_hi: "स्व-प्रेरण किसका गुण है?",
    options_en: [
      "A coil to oppose change in current",
      "A resistor to reduce current",
      "A magnet to attract iron",
      "A battery to produce voltage"
    ],
    options_hi: [
      "कुंडली का धारा में परिवर्तन का विरोध करना",
      "प्रतिरोधक का धारा कम करना",
      "चुंबक का लोहे को आकर्षित करना",
      "बैटरी का वोल्टेज उत्पन्न करना"
    ],
    answer_en: "A coil to oppose change in current",
    answer_hi: "कुंडली का धारा में परिवर्तन का विरोध करना",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "The device used to show the presence of induced current is:",
    question_hi: "प्रेरित धारा की उपस्थिति दिखाने के लिए कौन सा उपकरण प्रयोग किया जाता है?",
    options_en: ["Galvanometer", "Voltmeter", "Ammeter", "Ohmmeter"],
    options_hi: ["गैलोंनोमीटर", "वोल्टमीटर", "एमीटर", "ओह्मीटर"],
    answer_en: "Galvanometer",
    answer_hi: "गैलोंनोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "A magnetic field can be produced by:",
    question_hi: "चुंबकीय क्षेत्र उत्पन्न किया जा सकता है:",
    options_en: ["Moving charges", "Stationary charges", "Neutral particles", "Heat"],
    options_hi: ["गति करते आवेश", "स्थिर आवेश", "तटस्थ कण", "ऊष्मा"],
    answer_en: "Moving charges",
    answer_hi: "गति करते आवेश",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which of the following shows mutual induction?",
    question_hi: "निम्न में से कौन परस्पर प्रेरण दर्शाता है?",
    options_en: [
      "Transformer",
      "Electric bulb",
      "Resistor",
      "Battery"
    ],
    options_hi: [
      "ट्रांसफार्मर",
      "विद्युत बल्ब",
      "प्रतिरोधक",
      "बैटरी"
    ],
    answer_en: "Transformer",
    answer_hi: "ट्रांसफार्मर",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Induced EMF is maximum when the angle between field and motion is:",
    question_hi: "प्रेरित विद्युत वाहक बल अधिकतम होता है जब क्षेत्र और गति के बीच कोण होता है:",
    options_en: ["90°", "0°", "180°", "45°"],
    options_hi: ["90°", "0°", "180°", "45°"],
    answer_en: "90°",
    answer_hi: "90°",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which of the following does not affect induced EMF?",
    question_hi: "निम्न में से कौन प्रेरित विद्युत वाहक बल को प्रभावित नहीं करता?",
    options_en: ["Resistance of wire", "Rate of change of flux", "Number of turns", "Area of coil"],
    options_hi: ["तार का प्रतिरोध", "फ्लक्स परिवर्तन की दर", "कुंडली के फेरे", "कुंडली का क्षेत्रफल"],
    answer_en: "Resistance of wire",
    answer_hi: "तार का प्रतिरोध",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "What happens to the induced EMF if the speed of magnet increases?",
    question_hi: "यदि चुंबक की गति बढ़ती है तो प्रेरित EMF का क्या होता है?",
    options_en: ["Increases", "Decreases", "Remains same", "Becomes zero"],
    options_hi: ["बढ़ता है", "कम होता है", "समान रहता है", "शून्य हो जाता है"],
    answer_en: "Increases",
    answer_hi: "बढ़ता है",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which rule is used to determine the direction of induced current?",
    question_hi: "प्रेरित धारा की दिशा जानने के लिए किस नियम का प्रयोग होता है?",
    options_en: ["Fleming's right-hand rule", "Fleming's left-hand rule", "Ampere's rule", "Coulomb's rule"],
    options_hi: ["फ्लेमिंग का दायाँ हाथ नियम", "फ्लेमिंग का बायाँ हाथ नियम", "एम्पीयर का नियम", "कूलॉम्ब का नियम"],
    answer_en: "Fleming's right-hand rule",
    answer_hi: "फ्लेमिंग का दायाँ हाथ नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the role of soft iron core in transformer?",
    question_hi: "ट्रांसफार्मर में सॉफ्ट आयरन कोर का क्या कार्य होता है?",
    options_en: [
      "To increase magnetic flux",
      "To decrease resistance",
      "To increase voltage",
      "To increase current"
    ],
    options_hi: [
      "चुंबकीय फ्लक्स को बढ़ाने के लिए",
      "प्रतिरोध को कम करने के लिए",
      "वोल्टेज बढ़ाने के लिए",
      "धारा बढ़ाने के लिए"
    ],
    answer_en: "To increase magnetic flux",
    answer_hi: "चुंबकीय फ्लक्स को बढ़ाने के लिए",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which law gives the magnitude of induced EMF?",
    question_hi: "प्रेरित EMF की परिमाण किस नियम से मिलता है?",
    options_en: [
      "Faraday's Second Law",
      "Faraday's First Law",
      "Lenz's Law",
      "Coulomb's Law"
    ],
    options_hi: [
      "फैराडे का द्वितीय नियम",
      "फैराडे का प्रथम नियम",
      "लेन्ज़ का नियम",
      "कूलॉम्ब का नियम"
    ],
    answer_en: "Faraday's Second Law",
    answer_hi: "फैराडे का द्वितीय नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Self-inductance of an ideal solenoid depends on:",
    question_hi: "एक आदर्श सोलनॉइड का स्व-प्रेरण किस पर निर्भर करता है?",
    options_en: ["Number of turns", "Voltage", "Current", "Resistance"],
    options_hi: ["फेरों की संख्या", "वोल्टेज", "धारा", "प्रतिरोध"],
    answer_en: "Number of turns",
    answer_hi: "फेरों की संख्या",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "If magnetic flux through a circuit changes, then:",
    question_hi: "यदि किसी परिपथ में चुंबकीय फ्लक्स बदलता है, तो:",
    options_en: [
      "An EMF is induced",
      "No EMF is induced",
      "Only current is induced",
      "Only voltage increases"
    ],
    options_hi: [
      "एक EMF प्रेरित होती है",
      "कोई EMF प्रेरित नहीं होती",
      "केवल धारा प्रेरित होती है",
      "केवल वोल्टेज बढ़ता है"
    ],
    answer_en: "An EMF is induced",
    answer_hi: "एक EMF प्रेरित होती है",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which is a unit of self-inductance?",
    question_hi: "स्व-प्रेरण की इकाई क्या है?",
    options_en: ["Henry", "Weber", "Tesla", "Farad"],
    options_hi: ["हेनरी", "वेबर", "टेस्ला", "फैराड"],
    answer_en: "Henry",
    answer_hi: "हेनरी",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which factor affects mutual inductance of two coils?",
    question_hi: "दो कुंडलियों की परस्पर प्रेरण को कौन प्रभावित करता है?",
    options_en: ["Distance between coils", "Mass of coil", "Color of wire", "Type of battery used"],
    options_hi: ["कुंडलियों के बीच की दूरी", "कुंडली का द्रव्यमान", "तार का रंग", "उपयोग की गई बैटरी का प्रकार"],
    answer_en: "Distance between coils",
    answer_hi: "कुंडलियों के बीच की दूरी",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "A transformer works on the principle of:",
    question_hi: "ट्रांसफार्मर किस सिद्धांत पर कार्य करता है?",
    options_en: [
      "Mutual Induction",
      "Self Induction",
      "Ohm's Law",
      "Electrostatics"
    ],
    options_hi: [
      "परस्पर प्रेरण",
      "स्व प्रेरण",
      "ओम का नियम",
      "स्थिर विद्युत"
    ],
    answer_en: "Mutual Induction",
    answer_hi: "परस्पर प्रेरण",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "The direction of induced current is given by:",
    question_hi: "प्रेरित धारा की दिशा किसके द्वारा बताई जाती है?",
    options_en: [
      "Lenz's Law",
      "Faraday's Law",
      "Ohm's Law",
      "Ampere's Law"
    ],
    options_hi: [
      "लेन्ज़ का नियम",
      "फैराडे का नियम",
      "ओम का नियम",
      "एम्पीयर का नियम"
    ],
    answer_en: "Lenz's Law",
    answer_hi: "लेन्ज़ का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which of the following materials is best suited for making a transformer core?",
    question_hi: "निम्न में से कौन सा पदार्थ ट्रांसफार्मर कोर बनाने के लिए सबसे उपयुक्त है?",
    options_en: ["Silicon steel", "Copper", "Aluminum", "Plastic"],
    options_hi: ["सिलिकॉन स्टील", "तांबा", "एल्यूमिनियम", "प्लास्टिक"],
    answer_en: "Silicon steel",
    answer_hi: "सिलिकॉन स्टील",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "In a step-up transformer, the number of turns in the secondary coil is:",
    question_hi: "स्टेप-अप ट्रांसफार्मर में, द्वितीयक कुंडली के फेरों की संख्या होती है:",
    options_en: ["Greater than primary", "Less than primary", "Equal to primary", "Zero"],
    options_hi: ["प्राथमिक से अधिक", "प्राथमिक से कम", "प्राथमिक के बराबर", "शून्य"],
    answer_en: "Greater than primary",
    answer_hi: "प्राथमिक से अधिक",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "The unit Weber is used to measure:",
    question_hi: "वेबर इकाई किसका मापन करती है?",
    options_en: ["Magnetic flux", "Electric current", "Voltage", "Resistance"],
    options_hi: ["चुंबकीय फ्लक्स", "विद्युत धारा", "वोल्टेज", "प्रतिरोध"],
    answer_en: "Magnetic flux",
    answer_hi: "चुंबकीय फ्लक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "The polarity of induced emf opposes the change in magnetic flux. This is known as:",
    question_hi: "प्रेरित EMF की ध्रुवता चुंबकीय फ्लक्स में परिवर्तन का विरोध करती है। इसे क्या कहते हैं?",
    options_en: ["Lenz's Law", "Faraday's Law", "Newton's Law", "Ohm's Law"],
    options_hi: ["लेन्ज़ का नियम", "फैराडे का नियम", "न्यूटन का नियम", "ओम का नियम"],
    answer_en: "Lenz's Law",
    answer_hi: "लेन्ज़ का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which factor does NOT affect the self-inductance of a coil?",
    question_hi: "कौन सा तत्व कुंडली के स्व-प्रेरण को प्रभावित नहीं करता?",
    options_en: ["Temperature", "Number of turns", "Length of coil", "Core material"],
    options_hi: ["तापमान", "फेरों की संख्या", "कुंडली की लंबाई", "कोर सामग्री"],
    answer_en: "Temperature",
    answer_hi: "तापमान",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What is the effect of inserting an iron core inside a coil?",
    question_hi: "कुंडली के अंदर लोहा कोर डालने का क्या प्रभाव होता है?",
    options_en: ["Increases inductance", "Decreases inductance", "No effect", "Increases resistance"],
    options_hi: ["प्रेरण बढ़ाता है", "प्रेरण घटाता है", "कोई प्रभाव नहीं", "प्रतिरोध बढ़ाता है"],
    answer_en: "Increases inductance",
    answer_hi: "प्रेरण बढ़ाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "The change in magnetic flux that induces current is due to:",
    question_hi: "चुंबकीय फ्लक्स में परिवर्तन जिससे धारा प्रेरित होती है, वह किस कारण से होता है?",
    options_en: ["Relative motion", "Heat", "Electric shock", "Light"],
    options_hi: ["सापेक्ष गति", "ऊष्मा", "विद्युत आघात", "प्रकाश"],
    answer_en: "Relative motion",
    answer_hi: "सापेक्ष गति",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "In electromagnetic induction, emf is induced when:",
    question_hi: "विद्युतचुंबकीय प्रेरण में, EMF तब प्रेरित होती है जब:",
    options_en: [
      "Magnetic flux through circuit changes",
      "Current is constant",
      "Resistance is zero",
      "Temperature is constant"
    ],
    options_hi: [
      "परिपथ में चुंबकीय फ्लक्स बदलता है",
      "धारा स्थिर रहती है",
      "प्रतिरोध शून्य होता है",
      "तापमान स्थिर रहता है"
    ],
    answer_en: "Magnetic flux through circuit changes",
    answer_hi: "परिपथ में चुंबकीय फ्लक्स बदलता है",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "A galvanometer connected in series with a coil shows deflection. This indicates:",
    question_hi: "कुंडली के साथ श्रृंखला में जुड़ा गैलोंनोमीटर विचलन दिखाता है। इसका क्या अर्थ है?",
    options_en: [
      "Current is induced in the coil",
      "No current is present",
      "Voltage is zero",
      "Resistance is very high"
    ],
    options_hi: [
      "कुंडली में धारा प्रेरित होती है",
      "कोई धारा नहीं है",
      "वोल्टेज शून्य है",
      "प्रतिरोध बहुत अधिक है"
    ],
    answer_en: "Current is induced in the coil",
    answer_hi: "कुंडली में धारा प्रेरित होती है",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "The SI unit of magnetic flux density is:",
    question_hi: "चुंबकीय फ्लक्स घनत्व की SI इकाई क्या है?",
    options_en: ["Tesla", "Weber", "Henry", "Gauss"],
    options_hi: ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "When the magnetic field through a coil changes, the coil acts as:",
    question_hi: "जब कुंडली से होकर चुंबकीय क्षेत्र बदलता है, तो कुंडली किस रूप में कार्य करती है?",
    options_en: ["Inductor", "Conductor", "Capacitor", "Resistor"],
    options_hi: ["प्रेरक", "चालक", "संधारित्र", "प्रतिरोधक"],
    answer_en: "Inductor",
    answer_hi: "प्रेरक",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "The direction of induced emf can be found by:",
    question_hi: "प्रेरित EMF की दिशा कैसे ज्ञात की जा सकती है?",
    options_en: ["Lenz's Law", "Ohm's Law", "Newton's Law", "Hooke's Law"],
    options_hi: ["लेन्ज़ का नियम", "ओम का नियम", "न्यूटन का नियम", "हूक का नियम"],
    answer_en: "Lenz's Law",
    answer_hi: "लेन्ज़ का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "If the magnetic flux linked with a coil is constant, the induced emf is:",
    question_hi: "यदि कुंडली के साथ जुड़ा चुंबकीय फ्लक्स स्थिर है, तो प्रेरित EMF:",
    options_en: ["Zero", "Maximum", "Variable", "Infinite"],
    options_hi: ["शून्य", "अधिकतम", "परिवर्ती", "असीम"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which of these devices operates on electromagnetic induction?",
    question_hi: "इनमें से कौन सा उपकरण विद्युतचुंबकीय प्रेरण पर काम करता है?",
    options_en: ["Electric generator", "Resistor", "Battery", "Fuse"],
    options_hi: ["विद्युत जनरेटर", "प्रतिरोधक", "बैटरी", "फ्यूज"],
    answer_en: "Electric generator",
    answer_hi: "विद्युत जनरेटर",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "The emf induced in a coil is directly proportional to:",
    question_hi: "कुंडली में प्रेरित EMF सीधे आनुपातिक होती है:",
    options_en: [
      "Rate of change of magnetic flux",
      "Resistance of the coil",
      "Length of the wire",
      "Temperature"
    ],
    options_hi: [
      "चुंबकीय फ्लक्स के परिवर्तन की दर",
      "कुंडली का प्रतिरोध",
      "तार की लंबाई",
      "तापमान"
    ],
    answer_en: "Rate of change of magnetic flux",
    answer_hi: "चुंबकीय फ्लक्स के परिवर्तन की दर",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "In Faraday’s experiment, increasing the speed of relative motion:",
    question_hi: "फैराडे के प्रयोग में, सापेक्ष गति बढ़ाने से:",
    options_en: [
      "Increases induced emf",
      "Decreases induced emf",
      "Does not affect induced emf",
      "Stops induced emf"
    ],
    options_hi: [
      "प्रेरित EMF बढ़ जाती है",
      "प्रेरित EMF घट जाती है",
      "प्रेरित EMF पर कोई प्रभाव नहीं पड़ता",
      "प्रेरित EMF रुक जाती है"
    ],
    answer_en: "Increases induced emf",
    answer_hi: "प्रेरित EMF बढ़ जाती है",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "If the magnetic flux through a coil changes from 5 Weber to 1 Weber in 0.2 seconds, the average induced emf is:",
    question_hi: "यदि कुंडली में चुंबकीय फ्लक्स 5 वेबर से घटकर 1 वेबर हो जाता है 0.2 सेकंड में, तो औसत प्रेरित EMF क्या होगी?",
    options_en: [
      "20 V",
      "10 V",
      "15 V",
      "5 V"
    ],
    options_hi: [
      "20 वोल्ट",
      "10 वोल्ट",
      "15 वोल्ट",
      "5 वोल्ट"
    ],
    answer_en: "20 V",
    answer_hi: "20 वोल्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "The mutual inductance of two coils depends on:",
    question_hi: "दो कुंडलियों की परस्पर प्रेरण किस पर निर्भर करती है?",
    options_en: ["Geometry of coils and distance between them", "Color of wire", "Voltage applied", "Current in coils"],
    options_hi: ["कुंडलियों का ज्यामिति और उनके बीच की दूरी", "तार का रंग", "लागू वोल्टेज", "कुंडलियों में धारा"],
    answer_en: "Geometry of coils and distance between them",
    answer_hi: "कुंडलियों का ज्यामिति और उनके बीच की दूरी",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What is the relation between emf (E) and number of turns (N) in a coil?",
    question_hi: "कुंडली में EMF (E) और फेरों की संख्या (N) के बीच क्या संबंध है?",
    options_en: ["E ∝ N", "E ∝ 1/N", "E ∝ N²", "E is independent of N"],
    options_hi: ["E ∝ N", "E ∝ 1/N", "E ∝ N²", "E N से स्वतंत्र है"],
    answer_en: "E ∝ N",
    answer_hi: "E ∝ N",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which physical law states that an induced current always opposes the cause producing it?",
    question_hi: "कौन सा भौतिक नियम कहता है कि प्रेरित धारा हमेशा उसे उत्पन्न करने वाले कारण का विरोध करती है?",
    options_en: ["Lenz's Law", "Faraday's Law", "Newton's First Law", "Ohm's Law"],
    options_hi: ["लेन्ज़ का नियम", "फैराडे का नियम", "न्यूटन का पहला नियम", "ओम का नियम"],
    answer_en: "Lenz's Law",
    answer_hi: "लेन्ज़ का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "The SI unit of inductance is:",
    question_hi: "प्रेरण की SI इकाई क्या है?",
    options_en: ["Henry", "Tesla", "Weber", "Ohm"],
    options_hi: ["हेनरी", "टेस्ला", "वेबर", "ओम"],
    answer_en: "Henry",
    answer_hi: "हेनरी",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "If the induced emf in a coil is zero, the magnetic flux through the coil is:",
    question_hi: "यदि कुंडली में प्रेरित EMF शून्य है, तो कुंडली से होकर चुंबकीय फ्लक्स:",
    options_en: ["Constant", "Increasing", "Decreasing", "Oscillating"],
    options_hi: ["स्थिर", "बढ़ रहा", "घट रहा", "दौलता हुआ"],
    answer_en: "Constant",
    answer_hi: "स्थिर",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "A transformer works on the principle of:",
    question_hi: "ट्रांसफार्मर किस सिद्धांत पर कार्य करता है?",
    options_en: ["Mutual induction", "Self-induction", "Ohm’s Law", "Lenz's Law"],
    options_hi: ["परस्पर प्रेरण", "स्व-प्रेरण", "ओम का नियम", "लेन्ज़ का नियम"],
    answer_en: "Mutual induction",
    answer_hi: "परस्पर प्रेरण",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "The efficiency of an ideal transformer is:",
    question_hi: "आदर्श ट्रांसफार्मर की दक्षता होती है:",
    options_en: ["100%", "Less than 100%", "More than 100%", "50%"],
    options_hi: ["100%", "100% से कम", "100% से अधिक", "50%"],
    answer_en: "100%",
    answer_hi: "100%",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "The primary purpose of a transformer is to:",
    question_hi: "ट्रांसफार्मर का मुख्य उद्देश्य है:",
    options_en: ["Change voltage levels", "Change current frequency", "Store electric energy", "Convert AC to DC"],
    options_hi: ["वोल्टेज स्तर बदलना", "धारा आवृत्ति बदलना", "विद्युत ऊर्जा संग्रहीत करना", "AC को DC में बदलना"],
    answer_en: "Change voltage levels",
    answer_hi: "वोल्टेज स्तर बदलना",
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