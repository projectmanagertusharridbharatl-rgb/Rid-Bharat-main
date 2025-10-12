const questions = [
    {
    num: 1,
    question_en: "Ohm’s law is valid for which type of conductor?",
    question_hi: "ओम का नियम किस प्रकार के चालक के लिए मान्य होता है?",
    options_en: ["Non-ohmic", "Vacuum tubes", "Ohmic", "Semiconductors"],
    options_hi: ["गैर-ओमिक", "वैक्यूम ट्यूब", "ओमिक", "अर्धचालक"],
    answer_en: "Ohmic",
    answer_hi: "ओमिक",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the SI unit of current?",
    question_hi: "धारा की एसआई इकाई क्या है?",
    options_en: ["Coulomb", "Volt", "Ampere", "Ohm"],
    options_hi: ["कूलॉम्ब", "वोल्ट", "एम्पीयर", "ओम"],
    answer_en: "Ampere",
    answer_hi: "एम्पीयर",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which instrument is used to measure electric current?",
    question_hi: "विद्युत धारा को मापने के लिए कौन सा यंत्र प्रयोग होता है?",
    options_en: ["Voltmeter", "Galvanometer", "Ammeter", "Ohmmeter"],
    options_hi: ["वोल्टमीटर", "गैल्वेनोमीटर", "एमीटर", "ओह्ममीटर"],
    answer_en: "Ammeter",
    answer_hi: "एमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "1 volt is equal to:",
    question_hi: "1 वोल्ट के बराबर है:",
    options_en: ["1 joule/coulomb", "1 coulomb/joule", "1 ohm/ampere", "1 watt/second"],
    options_hi: ["1 जूल/कूलॉम्ब", "1 कूलॉम्ब/जूल", "1 ओम/एम्पीयर", "1 वाट/सेकंड"],
    answer_en: "1 joule/coulomb",
    answer_hi: "1 जूल/कूलॉम्ब",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the resistance of a conductor if voltage is 10V and current is 2A?",
    question_hi: "यदि वोल्टेज 10V और धारा 2A है, तो चालक का प्रतिरोध क्या होगा?",
    options_en: ["20 Ω", "5 Ω", "10 Ω", "2 Ω"],
    options_hi: ["20 ओम", "5 ओम", "10 ओम", "2 ओम"],
    answer_en: "5 Ω",
    answer_hi: "5 ओम",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which physical quantity is defined as rate of flow of charge?",
    question_hi: "आवेश के प्रवाह की दर को किस भौतिक राशि के रूप में परिभाषित किया गया है?",
    options_en: ["Voltage", "Resistance", "Current", "Power"],
    options_hi: ["वोल्टेज", "प्रतिरोध", "धारा", "शक्ति"],
    answer_en: "Current",
    answer_hi: "धारा",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "The reciprocal of resistance is called:",
    question_hi: "प्रतिरोध का व्युत्क्रम कहलाता है:",
    options_en: ["Reactance", "Capacitance", "Conductance", "Impedance"],
    options_hi: ["रिएक्टेंस", "धारिता", "चालकता", "इम्पीडेंस"],
    answer_en: "Conductance",
    answer_hi: "चालकता",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which of the following is a good conductor?",
    question_hi: "निम्न में से कौन सा एक अच्छा चालक है?",
    options_en: ["Glass", "Plastic", "Copper", "Wood"],
    options_hi: ["कांच", "प्लास्टिक", "तांबा", "लकड़ी"],
    answer_en: "Copper",
    answer_hi: "तांबा",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the resistance of an ideal voltmeter?",
    question_hi: "आदर्श वोल्टमीटर का प्रतिरोध क्या होता है?",
    options_en: ["Very high", "Zero", "Low", "Infinite"],
    options_hi: ["बहुत अधिक", "शून्य", "कम", "अनंत"],
    answer_en: "Infinite",
    answer_hi: "अनंत",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "The relation between resistance (R), resistivity (ρ), length (L), and area (A) is:",
    question_hi: "प्रतिरोध (R), प्रतिरोधकता (ρ), लंबाई (L), और क्षेत्रफल (A) के बीच संबंध है:",
    options_en: ["R = ρA/L", "R = L/ρA", "R = ρL/A", "R = ρ/L"],
    options_hi: ["R = ρA/L", "R = L/ρA", "R = ρL/A", "R = ρ/L"],
    answer_en: "R = ρL/A",
    answer_hi: "R = ρL/A",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which quantity does not change in series connection?",
    question_hi: "श्रृंखला संयोजन में कौन सी राशि नहीं बदलती?",
    options_en: ["Voltage", "Resistance", "Current", "Power"],
    options_hi: ["वोल्टेज", "प्रतिरोध", "धारा", "शक्ति"],
    answer_en: "Current",
    answer_hi: "धारा",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Electric power is equal to:",
    question_hi: "विद्युत शक्ति बराबर होती है:",
    options_en: ["V/I", "I²R", "IR", "VR"],
    options_hi: ["V/I", "I²R", "IR", "VR"],
    answer_en: "I²R",
    answer_hi: "I²R",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which device converts chemical energy into electrical energy?",
    question_hi: "कौन सा यंत्र रासायनिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करता है?",
    options_en: ["Generator", "Transformer", "Battery", "Motor"],
    options_hi: ["जनरेटर", "ट्रांसफार्मर", "बैटरी", "मोटर"],
    answer_en: "Battery",
    answer_hi: "बैटरी",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "SI unit of charge is:",
    question_hi: "आवेश की एसआई इकाई है:",
    options_en: ["Ampere", "Volt", "Coulomb", "Ohm"],
    options_hi: ["एम्पीयर", "वोल्ट", "कूलॉम्ब", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलॉम्ब",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Kirchhoff's current law is based on:",
    question_hi: "किर्चॉफ का धारा नियम किस पर आधारित है?",
    options_en: ["Law of energy conservation", "Law of momentum", "Charge conservation", "Ohm's law"],
    options_hi: ["ऊर्जा संरक्षण नियम", "संचरण का नियम", "आवेश संरक्षण", "ओम का नियम"],
    answer_en: "Charge conservation",
    answer_hi: "आवेश संरक्षण",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "SI unit of resistivity is:",
    question_hi: "प्रतिरोधकता की SI इकाई है:",
    options_en: ["Ohm", "Ohm-meter", "Volt", "Ampere"],
    options_hi: ["ओम", "ओम-मीटर", "वोल्ट", "एम्पीयर"],
    answer_en: "Ohm-meter",
    answer_hi: "ओम-मीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the charge of an electron?",
    question_hi: "इलेक्ट्रॉन का आवेश क्या होता है?",
    options_en: ["+1.6 × 10⁻¹⁹ C", "-1.6 × 10⁻¹⁹ C", "0", "1 C"],
    options_hi: ["+1.6 × 10⁻¹⁹ C", "-1.6 × 10⁻¹⁹ C", "0", "1 C"],
    answer_en: "-1.6 × 10⁻¹⁹ C",
    answer_hi: "-1.6 × 10⁻¹⁹ C",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "If V = IR, then I equals:",
    question_hi: "यदि V = IR है, तो I बराबर होगा:",
    options_en: ["V × R", "V / R", "R / V", "1 / VR"],
    options_hi: ["V × R", "V / R", "R / V", "1 / VR"],
    answer_en: "V / R",
    answer_hi: "V / R",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Unit of electric energy used in households is:",
    question_hi: "घरों में उपयोग की जाने वाली विद्युत ऊर्जा की इकाई है:",
    options_en: ["Watt", "Kilowatt", "Kilowatt-hour", "Ampere-hour"],
    options_hi: ["वाट", "किलोवाट", "किलोवाट-घंटा", "एम्पीयर-घंटा"],
    answer_en: "Kilowatt-hour",
    answer_hi: "किलोवाट-घंटा",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "What happens to resistance when temperature increases in metals?",
    question_hi: "धातुओं में तापमान बढ़ने पर प्रतिरोध का क्या होता है?",
    options_en: ["Decreases", "Increases", "Remains same", "Becomes zero"],
    options_hi: ["घटता है", "बढ़ता है", "समान रहता है", "शून्य हो जाता है"],
    answer_en: "Increases",
    answer_hi: "बढ़ता है",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which material is used in standard resistors?",
    question_hi: "मानक प्रतिरोधक में किस पदार्थ का उपयोग किया जाता है?",
    options_en: ["Copper", "Nichrome", "Aluminium", "Silver"],
    options_hi: ["तांबा", "नाइक्रोम", "एल्युमिनियम", "चाँदी"],
    answer_en: "Nichrome",
    answer_hi: "नाइक्रोम",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Electric power formula in terms of voltage and resistance is:",
    question_hi: "वोल्टेज और प्रतिरोध के रूप में विद्युत शक्ति का सूत्र है:",
    options_en: ["P = V²/R", "P = IR", "P = I²/R", "P = R/V"],
    options_hi: ["P = V²/R", "P = IR", "P = I²/R", "P = R/V"],
    answer_en: "P = V²/R",
    answer_hi: "P = V²/R",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which conductor is used in household wiring?",
    question_hi: "घरेलू वायरिंग में किस चालक का उपयोग किया जाता है?",
    options_en: ["Aluminium", "Steel", "Copper", "Iron"],
    options_hi: ["एल्युमिनियम", "स्टील", "तांबा", "लोहा"],
    answer_en: "Copper",
    answer_hi: "तांबा",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Ohm’s law states that:",
    question_hi: "ओम का नियम कहता है कि:",
    options_en: ["V ∝ R", "I ∝ V", "R ∝ I", "V ∝ 1/I"],
    options_hi: ["V ∝ R", "I ∝ V", "R ∝ I", "V ∝ 1/I"],
    answer_en: "I ∝ V",
    answer_hi: "I ∝ V",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Drift velocity is proportional to:",
    question_hi: "ड्रिफ्ट वेग किसके अनुपाती होता है?",
    options_en: ["Current", "Voltage", "Resistance", "Power"],
    options_hi: ["धारा", "वोल्टेज", "प्रतिरोध", "शक्ति"],
    answer_en: "Current",
    answer_hi: "धारा",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "What is the drift velocity of electrons?",
    question_hi: "इलेक्ट्रॉनों की ड्रिफ्ट वेग क्या होती है?",
    options_en: ["Very high", "Moderate", "Very low", "Zero"],
    options_hi: ["बहुत अधिक", "मध्यम", "बहुत कम", "शून्य"],
    answer_en: "Very low",
    answer_hi: "बहुत कम",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which of the following does not affect the resistance of a wire?",
    question_hi: "निम्न में से कौन सी चीज़ तार के प्रतिरोध को प्रभावित नहीं करती?",
    options_en: ["Length", "Cross-sectional area", "Temperature", "Color"],
    options_hi: ["लंबाई", "क्रॉस-सेक्शनल क्षेत्रफल", "तापमान", "रंग"],
    answer_en: "Color",
    answer_hi: "रंग",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "The unit of resistivity is:",
    question_hi: "प्रतिरोधकता की इकाई है:",
    options_en: ["Ohm", "Ohm-meter", "Ohm/meter", "Volt/Ampere"],
    options_hi: ["ओम", "ओम-मीटर", "ओम/मीटर", "वोल्ट/एम्पीयर"],
    answer_en: "Ohm-meter",
    answer_hi: "ओम-मीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the value of current if 2C of charge flows in 2 seconds?",
    question_hi: "यदि 2 कूलॉम्ब आवेश 2 सेकंड में प्रवाहित होता है तो धारा का मान क्या होगा?",
    options_en: ["0 A", "1 A", "2 A", "4 A"],
    options_hi: ["0 ए", "1 ए", "2 ए", "4 ए"],
    answer_en: "1 A",
    answer_hi: "1 ए",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "In a series circuit, the current is:",
    question_hi: "श्रृंखला परिपथ में धारा होती है:",
    options_en: ["Different in each resistor", "Same in all resistors", "Zero", "Infinite"],
    options_hi: ["प्रत्येक प्रतिरोध में अलग", "सभी प्रतिरोधों में समान", "शून्य", "अनंत"],
    answer_en: "Same in all resistors",
    answer_hi: "सभी प्रतिरोधों में समान",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which of the following has lowest resistivity?",
    question_hi: "निम्न में से किसकी प्रतिरोधकता सबसे कम होती है?",
    options_en: ["Copper", "Nichrome", "Glass", "Rubber"],
    options_hi: ["तांबा", "नाइक्रोम", "कांच", "रबर"],
    answer_en: "Copper",
    answer_hi: "तांबा",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Superconductors have resistivity:",
    question_hi: "सुपरकंडक्टर की प्रतिरोधकता होती है:",
    options_en: ["Very high", "Very low", "Zero", "Infinite"],
    options_hi: ["बहुत अधिक", "बहुत कम", "शून्य", "अनंत"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "A current of 1 A means:",
    question_hi: "1 एम्पीयर धारा का अर्थ है:",
    options_en: ["1 C of charge in 1 minute", "1 C of charge in 1 second", "1 V per ohm", "1 J per C"],
    options_hi: ["1 मिनट में 1 कूलॉम्ब आवेश", "1 सेकंड में 1 कूलॉम्ब आवेश", "1 वोल्ट प्रति ओम", "1 जूल प्रति कूलॉम्ब"],
    answer_en: "1 C of charge in 1 second",
    answer_hi: "1 सेकंड में 1 कूलॉम्ब आवेश",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "If the temperature of a metallic conductor increases, its resistance:",
    question_hi: "यदि धात्विक चालक का तापमान बढ़ता है, तो उसका प्रतिरोध:",
    options_en: ["Increases", "Decreases", "Remains same", "Becomes zero"],
    options_hi: ["बढ़ता है", "घटता है", "समान रहता है", "शून्य हो जाता है"],
    answer_en: "Increases",
    answer_hi: "बढ़ता है",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which has higher resistance?",
    question_hi: "किसमें उच्च प्रतिरोध होता है?",
    options_en: ["Thick wire", "Short wire", "Thin wire", "Copper wire"],
    options_hi: ["मोटी तार", "छोटी तार", "पतली तार", "तांबे की तार"],
    answer_en: "Thin wire",
    answer_hi: "पतली तार",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Unit of power in electric circuit is:",
    question_hi: "विद्युत परिपथ में शक्ति की इकाई है:",
    options_en: ["Joule", "Watt", "Ampere", "Ohm"],
    options_hi: ["जूल", "वाट", "एम्पीयर", "ओम"],
    answer_en: "Watt",
    answer_hi: "वाट",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which formula represents electric power?",
    question_hi: "विद्युत शक्ति को कौन सा सूत्र दर्शाता है?",
    options_en: ["P = IV", "P = IR", "P = I/R", "P = V/I"],
    options_hi: ["P = IV", "P = IR", "P = I/R", "P = V/I"],
    answer_en: "P = IV",
    answer_hi: "P = IV",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which of the following obeys Ohm’s law?",
    question_hi: "निम्न में से कौन ओम का नियम मानता है?",
    options_en: ["Vacuum diode", "Zener diode", "Filament bulb", "Resistor"],
    options_hi: ["वैक्यूम डायोड", "जेनर डायोड", "फिलामेंट बल्ब", "प्रतिरोधक"],
    answer_en: "Resistor",
    answer_hi: "प्रतिरोधक",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "In which case will the resistance be maximum?",
    question_hi: "किस स्थिति में प्रतिरोध अधिकतम होगा?",
    options_en: ["Short and thick wire", "Long and thick wire", "Short and thin wire", "Long and thin wire"],
    options_hi: ["छोटी और मोटी तार", "लंबी और मोटी तार", "छोटी और पतली तार", "लंबी और पतली तार"],
    answer_en: "Long and thin wire",
    answer_hi: "लंबी और पतली तार",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the resistance of an ideal ammeter?",
    question_hi: "एक आदर्श एमीटर का प्रतिरोध क्या होता है?",
    options_en: ["Very high", "High", "Low", "Zero"],
    options_hi: ["बहुत अधिक", "अधिक", "कम", "शून्य"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which device is used to measure potential difference?",
    question_hi: "विभवांतर मापने के लिए किस यंत्र का प्रयोग किया जाता है?",
    options_en: ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
    options_hi: ["एमीटर", "वोल्टमीटर", "गैल्वानोमीटर", "ओह्ममीटर"],
    answer_en: "Voltmeter",
    answer_hi: "वोल्टमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "In parallel connection, potential difference across each resistor is:",
    question_hi: "समानांतर संयोजन में प्रत्येक प्रतिरोधक पर विभवांतर होता है:",
    options_en: ["Different", "Half", "Same", "Zero"],
    options_hi: ["अलग-अलग", "आधा", "समान", "शून्य"],
    answer_en: "Same",
    answer_hi: "समान",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which property of a material opposes current flow?",
    question_hi: "किस पदार्थ का गुण धारा के प्रवाह का विरोध करता है?",
    options_en: ["Conductivity", "Resistance", "Capacitance", "Inductance"],
    options_hi: ["चालकता", "प्रतिरोध", "धारिता", "प्रेरकत्व"],
    answer_en: "Resistance",
    answer_hi: "प्रतिरोध",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "The SI unit of electric potential is:",
    question_hi: "विद्युत विभव की एसआई इकाई है:",
    options_en: ["Ampere", "Coulomb", "Volt", "Ohm"],
    options_hi: ["एम्पीयर", "कूलॉम्ब", "वोल्ट", "ओम"],
    answer_en: "Volt",
    answer_hi: "वोल्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which law helps in calculating total current in parallel circuit?",
    question_hi: "समानांतर परिपथ में कुल धारा की गणना करने में कौन सा नियम सहायक है?",
    options_en: ["Ohm's Law", "Kirchhoff’s First Law", "Kirchhoff’s Second Law", "Lenz Law"],
    options_hi: ["ओम का नियम", "किर्चहॉफ का पहला नियम", "किर्चहॉफ का दूसरा नियम", "लेन्ज का नियम"],
    answer_en: "Kirchhoff’s First Law",
    answer_hi: "किर्चहॉफ का पहला नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "When no current flows through a wire, potential difference is:",
    question_hi: "जब किसी तार में कोई धारा नहीं बहती, तो विभवांतर होता है:",
    options_en: ["Maximum", "Minimum", "Zero", "Constant"],
    options_hi: ["अधिकतम", "न्यूनतम", "शून्य", "समान"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "The slope of V-I graph gives:",
    question_hi: "V-I ग्राफ का ढाल देता है:",
    options_en: ["Power", "Conductance", "Resistance", "Voltage"],
    options_hi: ["शक्ति", "चालकता", "प्रतिरोध", "वोल्टेज"],
    answer_en: "Resistance",
    answer_hi: "प्रतिरोध",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "A fuse wire should have:",
    question_hi: "फ्यूज वायर में क्या गुण होना चाहिए?",
    options_en: ["High resistance and low melting point", "Low resistance and high melting point", "High current and low voltage", "Low resistance and low melting point"],
    options_hi: ["उच्च प्रतिरोध और निम्न गलनांक", "निम्न प्रतिरोध और उच्च गलनांक", "उच्च धारा और निम्न वोल्टेज", "निम्न प्रतिरोध और निम्न गलनांक"],
    answer_en: "High resistance and low melting point",
    answer_hi: "उच्च प्रतिरोध और निम्न गलनांक",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "A good conductor has:",
    question_hi: "एक अच्छा चालक होता है जिसमें:",
    options_en: ["Low resistance", "High resistance", "Zero voltage", "High temperature"],
    options_hi: ["कम प्रतिरोध", "अधिक प्रतिरोध", "शून्य वोल्टेज", "अधिक तापमान"],
    answer_en: "Low resistance",
    answer_hi: "कम प्रतिरोध",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which material is commonly used for electrical wires?",
    question_hi: "विद्युत तारों के लिए सामान्यतः किस पदार्थ का प्रयोग होता है?",
    options_en: ["Iron", "Aluminum", "Lead", "Gold"],
    options_hi: ["लोहा", "एल्युमिनियम", "सीसा", "सोना"],
    answer_en: "Aluminum",
    answer_hi: "एल्युमिनियम",
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
