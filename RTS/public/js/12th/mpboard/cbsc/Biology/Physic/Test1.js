const questions = [
   {
    num: 1,
    question_en: "What is the SI unit of electric charge?",
    question_hi: "विद्युत आवेश की एसआई इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलॉम्ब", "एम्पीयर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलॉम्ब",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the nature of electric charge?",
    question_hi: "विद्युत आवेश की प्रकृति क्या होती है?",
    options_en: ["Scalar", "Vector", "Tensor", "None"],
    options_hi: ["स्केलर", "वेक्टर", "टेंसर", "इनमें से कोई नहीं"],
    answer_en: "Scalar",
    answer_hi: "स्केलर",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which of the following is a basic property of electric charge?",
    question_hi: "निम्नलिखित में से कौन विद्युत आवेश की मूलभूत विशेषता है?",
    options_en: ["Additivity", "Quantization", "Conservation", "All of these"],
    options_hi: ["योगात्मकता", "परिमाणीकरण", "संरक्षण", "उपरोक्त सभी"],
    answer_en: "All of these",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Who discovered the law of electrostatic force?",
    question_hi: "विद्युत स्थैतिक बल का नियम किसने खोजा?",
    options_en: ["Newton", "Coulomb", "Faraday", "Ampere"],
    options_hi: ["न्यूटन", "कूलॉम्ब", "फैराडे", "एम्पीयर"],
    answer_en: "Coulomb",
    answer_hi: "कूलॉम्ब",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Coulomb's law is applicable to which type of charges?",
    question_hi: "कूलॉम्ब का नियम किस प्रकार के आवेशों पर लागू होता है?",
    options_en: ["Moving", "Stationary", "Neutral", "All of these"],
    options_hi: ["गतिमान", "स्थिर", "निरपेक्ष", "इनमें से सभी"],
    answer_en: "Stationary",
    answer_hi: "स्थिर",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the nature of the force between like charges?",
    question_hi: "समान प्रकार के आवेशों के बीच बल की प्रकृति क्या होती है?",
    options_en: ["Attractive", "Repulsive", "Zero", "Variable"],
    options_hi: ["आकर्षण", "प्रतिकर्षण", "शून्य", "परिवर्तनीय"],
    answer_en: "Repulsive",
    answer_hi: "प्रतिकर्षण",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the medium in which Coulomb's law is calculated for vacuum?",
    question_hi: "निर्वात के लिए कूलॉम्ब का नियम किस माध्यम में गणना करता है?",
    options_en: ["Air", "Water", "Vacuum", "Oil"],
    options_hi: ["हवा", "पानी", "निर्वात", "तेल"],
    answer_en: "Vacuum",
    answer_hi: "निर्वात",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the permittivity of free space denoted by?",
    question_hi: "मुक्त स्थान की परमीटिविटी को किस प्रतीक से दर्शाया जाता है?",
    options_en: ["ε", "ε₀", "μ₀", "σ"],
    options_hi: ["ε", "ε₀", "μ₀", "σ"],
    answer_en: "ε₀",
    answer_hi: "ε₀",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Electric field is a ______ quantity.",
    question_hi: "विद्युत क्षेत्र एक ______ राशि है।",
    options_en: ["Scalar", "Vector", "Tensor", "None"],
    options_hi: ["स्केलर", "वेक्टर", "टेंसर", "इनमें से कोई नहीं"],
    answer_en: "Vector",
    answer_hi: "वेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "SI unit of electric field is:",
    question_hi: "विद्युत क्षेत्र की एसआई इकाई क्या है?",
    options_en: ["N/C", "C/N", "V", "A"],
    options_hi: ["N/C", "C/N", "V", "A"],
    answer_en: "N/C",
    answer_hi: "N/C",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "The direction of electric field due to a positive charge is:",
    question_hi: "सकारात्मक आवेश के कारण विद्युत क्षेत्र की दिशा क्या होती है?",
    options_en: ["Towards the charge", "Away from the charge", "Circular", "None"],
    options_hi: ["आवेश की ओर", "आवेश से दूर", "वृत्ताकार", "कोई नहीं"],
    answer_en: "Away from the charge",
    answer_hi: "आवेश से दूर",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "The electric field inside a conductor is:",
    question_hi: "एक चालक के अंदर विद्युत क्षेत्र होता है:",
    options_en: ["Zero", "Infinite", "Constant", "Variable"],
    options_hi: ["शून्य", "अनंत", "स्थिर", "परिवर्तनीय"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which physical quantity is the negative gradient of electric potential?",
    question_hi: "कौन सी भौतिक राशि विद्युत विभव का ऋणात्मक ढाल होती है?",
    options_en: ["Electric flux", "Electric field", "Current", "Potential energy"],
    options_hi: ["विद्युत प्रवाह", "विद्युत क्षेत्र", "धारा", "विभव ऊर्जा"],
    answer_en: "Electric field",
    answer_hi: "विद्युत क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which of the following is a unit of electric flux?",
    question_hi: "निम्न में से कौन विद्युत फ्लक्स की इकाई है?",
    options_en: ["Volt", "Newton", "Volt-meter", "Newton meter squared per coulomb"],
    options_hi: ["वोल्ट", "न्यूटन", "वोल्ट-मीटर", "न्यूटन मीटर वर्ग प्रति कूलॉम्ब"],
    answer_en: "Newton meter squared per coulomb",
    answer_hi: "न्यूटन मीटर वर्ग प्रति कूलॉम्ब",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the shape of electric field lines around a point charge?",
    question_hi: "बिंदु आवेश के चारों ओर विद्युत क्षेत्र रेखाओं का आकार क्या होता है?",
    options_en: ["Circular", "Elliptical", "Radial", "Straight"],
    options_hi: ["वृत्ताकार", "दीर्घवृत्ताकार", "त्रिज्यीय", "सीधी"],
    answer_en: "Radial",
    answer_hi: "त्रिज्यीय",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Electric field lines never:",
    question_hi: "विद्युत क्षेत्र रेखाएं कभी भी नहीं:",
    options_en: ["Start from negative charge", "Intersect", "End at positive charge", "Form loops"],
    options_hi: ["ऋणात्मक आवेश से शुरू होती हैं", "एक-दूसरे को काटती हैं", "सकारात्मक आवेश पर समाप्त होती हैं", "लूप बनाती हैं"],
    answer_en: "Intersect",
    answer_hi: "एक-दूसरे को काटती हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which law gives the total electric flux through a closed surface?",
    question_hi: "कौन सा नियम एक बंद सतह के माध्यम से कुल विद्युत फ्लक्स देता है?",
    options_en: ["Coulomb's Law", "Faraday's Law", "Gauss's Law", "Ohm's Law"],
    options_hi: ["कूलॉम्ब का नियम", "फैराडे का नियम", "गाउस का नियम", "ओम का नियम"],
    answer_en: "Gauss's Law",
    answer_hi: "गाउस का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Electric dipole moment is a:",
    question_hi: "विद्युत द्विध्रुव आघूर्ण क्या होता है?",
    options_en: ["Scalar", "Vector", "Tensor", "None"],
    options_hi: ["स्केलर", "वेक्टर", "टेंसर", "कोई नहीं"],
    answer_en: "Vector",
    answer_hi: "वेक्टर",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the unit of electric dipole moment?",
    question_hi: "विद्युत द्विध्रुव आघूर्ण की इकाई क्या होती है?",
    options_en: ["Coulomb", "Coulomb-meter", "Volt", "Ohm"],
    options_hi: ["कूलॉम्ब", "कूलॉम्ब-मीटर", "वोल्ट", "ओम"],
    answer_en: "Coulomb-meter",
    answer_hi: "कूलॉम्ब-मीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "The electric field at the center of a uniformly charged ring is:",
    question_hi: "समान रूप से आवेशित वलय के केंद्र पर विद्युत क्षेत्र होता है:",
    options_en: ["Zero", "Maximum", "Minimum", "Infinite"],
    options_hi: ["शून्य", "अधिकतम", "न्यूनतम", "अनंत"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Electric potential is a ______ quantity.",
    question_hi: "विद्युत विभव एक ______ राशि है।",
    options_en: ["Vector", "Scalar", "Tensor", "None"],
    options_hi: ["वेक्टर", "स्केलर", "टेंसर", "कोई नहीं"],
    answer_en: "Scalar",
    answer_hi: "स्केलर",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the SI unit of electric potential?",
    question_hi: "विद्युत विभव की एसआई इकाई क्या है?",
    options_en: ["Volt", "Ampere", "Coulomb", "Ohm"],
    options_hi: ["वोल्ट", "एम्पीयर", "कूलॉम्ब", "ओम"],
    answer_en: "Volt",
    answer_hi: "वोल्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Work done in moving a unit charge through an electric field is:",
    question_hi: "विद्युत क्षेत्र में एकांक आवेश को स्थानांतरित करने में किया गया कार्य होता है:",
    options_en: ["Potential", "Potential difference", "Electric field", "Current"],
    options_hi: ["विभव", "विभवांतर", "विद्युत क्षेत्र", "धारा"],
    answer_en: "Potential difference",
    answer_hi: "विभवांतर",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Electric flux is maximum when angle between electric field and area vector is:",
    question_hi: "विद्युत क्षेत्र और क्षेत्र सदिश के बीच कोण कब विद्युत फ्लक्स को अधिकतम करता है?",
    options_en: ["0°", "45°", "90°", "180°"],
    options_hi: ["0°", "45°", "90°", "180°"],
    answer_en: "0°",
    answer_hi: "0°",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "The charge on a proton is:",
    question_hi: "प्रोटॉन पर आवेश होता है:",
    options_en: ["+1.6×10⁻¹⁹ C", "−1.6×10⁻¹⁹ C", "0", "+3.2×10⁻¹⁹ C"],
    options_hi: ["+1.6×10⁻¹⁹ C", "−1.6×10⁻¹⁹ C", "0", "+3.2×10⁻¹⁹ C"],
    answer_en: "+1.6×10⁻¹⁹ C",
    answer_hi: "+1.6×10⁻¹⁹ C",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "What is the resistance of an ideal ammeter?",
    question_hi: "आदर्श एमीटर का प्रतिरोध कितना होता है?",
    options_en: ["Zero", "Very high", "Infinity", "One ohm"],
    options_hi: ["शून्य", "बहुत अधिक", "अनंत", "एक ओम"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which physical quantity is measured in ohm-meter?",
    question_hi: "ओम-मीटर में मापी जाने वाली भौतिक राशि कौन सी है?",
    options_en: ["Resistivity", "Resistance", "Conductance", "Conductivity"],
    options_hi: ["प्रतिरोधकता", "प्रतिरोध", "चालकता", "प्रवाहकीयता"],
    answer_en: "Resistivity",
    answer_hi: "प्रतिरोधकता",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which of the following is a vector quantity?",
    question_hi: "निम्नलिखित में से कौन एक सदिश राशि है?",
    options_en: ["Current", "Voltage", "Electric field", "Resistance"],
    options_hi: ["धारा", "वोल्टेज", "विद्युत क्षेत्र", "प्रतिरोध"],
    answer_en: "Electric field",
    answer_hi: "विद्युत क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What happens to resistance if the length of a conductor is doubled?",
    question_hi: "यदि चालक की लंबाई दोगुनी कर दी जाए तो प्रतिरोध पर क्या प्रभाव पड़ेगा?",
    options_en: ["Doubles", "Halves", "Becomes zero", "Remains same"],
    options_hi: ["दोगुना", "आधा", "शून्य", "जैसा था वैसा रहेगा"],
    answer_en: "Doubles",
    answer_hi: "दोगुना",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which instrument is used to measure potential difference?",
    question_hi: "विभवांतर को मापने के लिए कौन-सा यंत्र प्रयोग में लाया जाता है?",
    options_en: ["Voltmeter", "Ammeter", "Galvanometer", "Rheostat"],
    options_hi: ["वोल्टमीटर", "एमीटर", "गैल्वानोमीटर", "रियोस्टैट"],
    answer_en: "Voltmeter",
    answer_hi: "वोल्टमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What does a rheostat do?",
    question_hi: "रियोस्टैट क्या करता है?",
    options_en: ["Controls current", "Measures voltage", "Measures current", "Generates electricity"],
    options_hi: ["धारा को नियंत्रित करता है", "वोल्टेज मापता है", "धारा मापता है", "विद्युत उत्पन्न करता है"],
    answer_en: "Controls current",
    answer_hi: "धारा को नियंत्रित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which of these follows Ohm's law?",
    question_hi: "इनमें से कौन ओम का नियम मानता है?",
    options_en: ["Copper wire", "Diode", "Transistor", "Vacuum tube"],
    options_hi: ["तांबे का तार", "डायोड", "ट्रांजिस्टर", "वैक्यूम ट्यूब"],
    answer_en: "Copper wire",
    answer_hi: "तांबे का तार",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "In a series circuit, current is:",
    question_hi: "श्रृंखला परिपथ में धारा होती है:",
    options_en: ["Same through all resistors", "Different in each resistor", "Zero", "Infinite"],
    options_hi: ["सभी प्रतिरोधों में समान", "हर प्रतिरोध में भिन्न", "शून्य", "अनंत"],
    answer_en: "Same through all resistors",
    answer_hi: "सभी प्रतिरोधों में समान",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "How does temperature affect resistance in a metal?",
    question_hi: "धातु में तापमान बढ़ने से प्रतिरोध पर क्या प्रभाव पड़ता है?",
    options_en: ["Increases", "Decreases", "No change", "Becomes zero"],
    options_hi: ["बढ़ता है", "कम होता है", "कोई परिवर्तन नहीं", "शून्य हो जाता है"],
    answer_en: "Increases",
    answer_hi: "बढ़ता है",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the SI unit of current density?",
    question_hi: "धारा घनत्व की एसआई इकाई क्या है?",
    options_en: ["A/m²", "A·m", "A/m", "V/m"],
    options_hi: ["A/m²", "A·m", "A/m", "V/m"],
    answer_en: "A/m²",
    answer_hi: "A/m²",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "What is the main function of a fuse in an electric circuit?",
    question_hi: "विद्युत परिपथ में फ्यूज का मुख्य कार्य क्या होता है?",
    options_en: ["Prevent overcurrent", "Reduce voltage", "Increase resistance", "Store charge"],
    options_hi: ["अधिक धारा को रोकना", "वोल्टेज कम करना", "प्रतिरोध बढ़ाना", "आवेश को संग्रह करना"],
    answer_en: "Prevent overcurrent",
    answer_hi: "अधिक धारा को रोकना",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which has higher resistance: a thick wire or a thin wire?",
    question_hi: "किसमें अधिक प्रतिरोध होता है: मोटे तार में या पतले तार में?",
    options_en: ["Thin wire", "Thick wire", "Same", "Depends on length"],
    options_hi: ["पतला तार", "मोटा तार", "समान", "लंबाई पर निर्भर करता है"],
    answer_en: "Thin wire",
    answer_hi: "पतला तार",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Unit of conductivity is:",
    question_hi: "चालकता की इकाई क्या है?",
    options_en: ["S/m", "Ω·m", "V/m", "A·m"],
    options_hi: ["S/m", "Ω·m", "V/m", "A·m"],
    answer_en: "S/m",
    answer_hi: "S/m",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Drift velocity is proportional to:",
    question_hi: "ड्रिफ्ट वेग किसके समानुपाती होता है?",
    options_en: ["Electric field", "Magnetic field", "Charge", "Resistance"],
    options_hi: ["विद्युत क्षेत्र", "चुंबकीय क्षेत्र", "आवेश", "प्रतिरोध"],
    answer_en: "Electric field",
    answer_hi: "विद्युत क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which law states that current is directly proportional to voltage?",
    question_hi: "कौन-सा नियम कहता है कि धारा वोल्टेज के समानुपाती होती है?",
    options_en: ["Ohm’s law", "Kirchhoff's law", "Faraday’s law", "Ampere’s law"],
    options_hi: ["ओम का नियम", "किर्चॉफ का नियम", "फैरेडे का नियम", "एम्पियर का नियम"],
    answer_en: "Ohm’s law",
    answer_hi: "ओम का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the reciprocal of resistivity called?",
    question_hi: "प्रतिरोधकता का व्युत्क्रम क्या कहलाता है?",
    options_en: ["Conductivity", "Conductance", "Resistance", "Power"],
    options_hi: ["प्रवाहकीयता", "चालकता", "प्रतिरोध", "शक्ति"],
    answer_en: "Conductivity",
    answer_hi: "प्रवाहकीयता",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which wire will heat more: thick or thin (same material, same length)?",
    question_hi: "कौन-सा तार अधिक गर्म होगा: मोटा या पतला (समान पदार्थ, समान लंबाई)?",
    options_en: ["Thin", "Thick", "Both same", "Depends on voltage"],
    options_hi: ["पतला", "मोटा", "दोनों समान", "वोल्टेज पर निर्भर करता है"],
    answer_en: "Thin",
    answer_hi: "पतला",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the SI unit of power?",
    question_hi: "शक्ति की एसआई इकाई क्या है?",
    options_en: ["Watt", "Volt", "Ohm", "Coulomb"],
    options_hi: ["वाट", "वोल्ट", "ओम", "कूलॉम्ब"],
    answer_en: "Watt",
    answer_hi: "वाट",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "The instrument used to regulate current in a circuit is:",
    question_hi: "परिपथ में धारा को नियंत्रित करने के लिए प्रयुक्त यंत्र है:",
    options_en: ["Rheostat", "Voltmeter", "Ammeter", "Capacitor"],
    options_hi: ["रियोस्टैट", "वोल्टमीटर", "एमीटर", "कैपेसिटर"],
    answer_en: "Rheostat",
    answer_hi: "रियोस्टैट",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Current density vector is in the direction of:",
    question_hi: "धारा घनत्व सदिश किस दिशा में होता है?",
    options_en: ["Flow of current", "Electric field", "Magnetic field", "Resistance"],
    options_hi: ["धारा की दिशा", "विद्युत क्षेत्र", "चुंबकीय क्षेत्र", "प्रतिरोध"],
    answer_en: "Flow of current",
    answer_hi: "धारा की दिशा",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which factor does not affect resistance?",
    question_hi: "इनमें से कौन-सा प्रतिरोध को प्रभावित नहीं करता?",
    options_en: ["Color", "Length", "Area", "Material"],
    options_hi: ["रंग", "लंबाई", "क्षेत्रफल", "सामग्री"],
    answer_en: "Color",
    answer_hi: "रंग",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the SI unit of potential difference?",
    question_hi: "विभवांतर की SI इकाई क्या है?",
    options_en: ["Volt", "Ohm", "Ampere", "Watt"],
    options_hi: ["वोल्ट", "ओम", "एम्पीयर", "वाट"],
    answer_en: "Volt",
    answer_hi: "वोल्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "What is the nature of electric current in a metal?",
    question_hi: "धातु में विद्युत धारा का स्वरूप क्या होता है?",
    options_en: ["Due to electrons", "Due to protons", "Due to ions", "Due to neutrons"],
    options_hi: ["इलेक्ट्रॉनों के कारण", "प्रोटॉनों के कारण", "आयनों के कारण", "न्यूट्रॉनों के कारण"],
    answer_en: "Due to electrons",
    answer_hi: "इलेक्ट्रॉनों के कारण",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "If a resistor is shorted, its resistance becomes:",
    question_hi: "यदि प्रतिरोधक शॉर्ट हो जाए, तो उसका प्रतिरोध कितना हो जाता है?",
    options_en: ["Zero", "Infinity", "Same", "Very high"],
    options_hi: ["शून्य", "अनंत", "समान", "बहुत अधिक"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What is the function of a capacitor in a DC circuit?",
    question_hi: "DC परिपथ में कैपेसिटर का कार्य क्या होता है?",
    options_en: ["Blocks DC", "Conducts DC", "Reduces resistance", "Increases current"],
    options_hi: ["DC को रोकता है", "DC को प्रवाहित करता है", "प्रतिरोध कम करता है", "धारा बढ़ाता है"],
    answer_en: "Blocks DC",
    answer_hi: "DC को रोकता है",
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