const questions = [
    {
    num: 1,
    question_en: "What is the formula for the magnetic field around a straight current-carrying conductor?",
    question_hi: "एक सीधी धारा प्रवाहित करने वाले चालक के चारों ओर चुंबकीय क्षेत्र का सूत्र क्या है?",
    options_en: ["B = μ₀I / 2πr", "B = μ₀I / 2r", "B = μ₀I / πr", "B = μ₀I / r"],
    options_hi: ["B = μ₀I / 2πr", "B = μ₀I / 2r", "B = μ₀I / πr", "B = μ₀I / r"],
    answer_en: "B = μ₀I / 2πr",
    answer_hi: "B = μ₀I / 2πr",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which rule is used to find the direction of the magnetic field due to current?",
    question_hi: "धारा के कारण चुंबकीय क्षेत्र की दिशा ज्ञात करने के लिए कौन-सा नियम प्रयोग किया जाता है?",
    options_en: ["Right-hand thumb rule", "Left-hand thumb rule", "Fleming’s left-hand rule", "Fleming’s right-hand rule"],
    options_hi: ["दाहिने हाथ की अंगूठे का नियम", "बाएं हाथ की अंगूठे का नियम", "फ्लेमिंग का बाएं हाथ का नियम", "फ्लेमिंग का दाहिने हाथ का नियम"],
    answer_en: "Right-hand thumb rule",
    answer_hi: "दाहिने हाथ की अंगूठे का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What does the symbol 'μ₀' represent in magnetic field formulas?",
    question_hi: "चुंबकीय क्षेत्र के सूत्रों में 'μ₀' प्रतीक का क्या अर्थ है?",
    options_en: ["Permeability of free space", "Magnetic flux", "Magnetization", "Magnetic moment"],
    options_hi: ["खाली स्थान की पारगम्यता", "चुंबकीय फ्लक्स", "चुंबकीयरण", "चुंबकीय क्षण"],
    answer_en: "Permeability of free space",
    answer_hi: "खाली स्थान की पारगम्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "The unit of magnetic field intensity is:",
    question_hi: "चुंबकीय क्षेत्र की तीव्रता की इकाई क्या है?",
    options_en: ["Tesla", "Weber", "Henry", "Ampere"],
    options_hi: ["टेस्ला", "वेबर", "हेनरी", "एम्पियर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the magnetic field inside a long solenoid carrying current I?",
    question_hi: "धारा धारण करने वाले लंबा सोलनॉइड के अंदर चुंबकीय क्षेत्र क्या होता है?",
    options_en: ["B = μ₀ n I", "B = μ₀ I / 2πr", "B = μ₀ I / r", "B = μ₀ I n²"],
    options_hi: ["B = μ₀ n I", "B = μ₀ I / 2πr", "B = μ₀ I / r", "B = μ₀ I n²"],
    answer_en: "B = μ₀ n I",
    answer_hi: "B = μ₀ n I",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which law explains the induced emf in a coil due to change in magnetic flux?",
    question_hi: "किस नियम से चुंबकीय फ्लक्स में परिवर्तन के कारण कुंडली में प्रेरित EMF की व्याख्या होती है?",
    options_en: ["Faraday’s Law", "Lenz’s Law", "Ohm’s Law", "Newton’s Law"],
    options_hi: ["फैराडे का नियम", "लेन्ज़ का नियम", "ओम का नियम", "न्यूटन का नियम"],
    answer_en: "Faraday’s Law",
    answer_hi: "फैराडे का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "According to Lenz's law, the direction of induced current is such that it:",
    question_hi: "लेन्ज़ के नियम के अनुसार, प्रेरित धारा की दिशा ऐसी होती है कि यह:",
    options_en: ["Opposes the change producing it", "Supports the change producing it", "Is always clockwise", "Is always anticlockwise"],
    options_hi: ["उत्पन्न करने वाले परिवर्तन का विरोध करती है", "उत्पन्न करने वाले परिवर्तन का समर्थन करती है", "हमेशा घड़ी की दिशा में होती है", "हमेशा उल्टी घड़ी की दिशा में होती है"],
    answer_en: "Opposes the change producing it",
    answer_hi: "उत्पन्न करने वाले परिवर्तन का विरोध करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the SI unit of magnetic flux?",
    question_hi: "चुंबकीय फ्लक्स की SI इकाई क्या है?",
    options_en: ["Weber", "Tesla", "Henry", "Ampere"],
    options_hi: ["वेबर", "टेस्ला", "हेनरी", "एम्पियर"],
    answer_en: "Weber",
    answer_hi: "वेबर",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "The device used to measure electric current is called:",
    question_hi: "विद्युत धारा मापने के लिए उपयोग किया जाने वाला यंत्र क्या कहलाता है?",
    options_en: ["Ammeter", "Voltmeter", "Galvanometer", "Wattmeter"],
    options_hi: ["एमीटर", "वोल्टमीटर", "गैल्वानोमीटर", "वाटमीटर"],
    answer_en: "Ammeter",
    answer_hi: "एमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "The SI unit of electric current is:",
    question_hi: "विद्युत धारा की SI इकाई क्या है?",
    options_en: ["Ampere", "Volt", "Ohm", "Coulomb"],
    options_hi: ["एम्पियर", "वोल्ट", "ओम", "कूलॉम्ब"],
    answer_en: "Ampere",
    answer_hi: "एम्पियर",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the relation between magnetic field (B) and magnetic force (F) on a moving charge q?",
    question_hi: "चलती हुई आवेश q पर चुंबकीय क्षेत्र (B) और चुंबकीय बल (F) का संबंध क्या है?",
    options_en: ["F = q(v × B)", "F = q(v + B)", "F = qvB", "F = q/Bv"],
    options_hi: ["F = q(v × B)", "F = q(v + B)", "F = qvB", "F = q/Bv"],
    answer_en: "F = q(v × B)",
    answer_hi: "F = q(v × B)",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which instrument is used to detect and measure small currents?",
    question_hi: "कौन-सा यंत्र छोटी धारा का पता लगाने और मापने के लिए उपयोग किया जाता है?",
    options_en: ["Galvanometer", "Ammeter", "Voltmeter", "Ohmmeter"],
    options_hi: ["गैल्वानोमीटर", "एमीटर", "वोल्टमीटर", "ओममीटर"],
    answer_en: "Galvanometer",
    answer_hi: "गैल्वानोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "The magnetic field lines outside a bar magnet emerge from:",
    question_hi: "बार मैग्नेट के बाहर चुंबकीय क्षेत्र की रेखाएँ कहाँ से निकलती हैं?",
    options_en: ["North Pole", "South Pole", "Both poles", "Centre"],
    options_hi: ["उत्तर ध्रुव", "दक्षिण ध्रुव", "दोनों ध्रुव", "केंद्र"],
    answer_en: "North Pole",
    answer_hi: "उत्तर ध्रुव",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Magnetic field inside a hollow conductor carrying current is:",
    question_hi: "धारा प्रवाहित करने वाले खोखले चालक के अंदर चुंबकीय क्षेत्र:",
    options_en: ["Zero", "Maximum", "Depends on current", "Depends on conductor length"],
    options_hi: ["शून्य", "अधिकतम", "धारा पर निर्भर", "चालक की लंबाई पर निर्भर"],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "The phenomenon of producing induced emf in a coil by changing magnetic flux is called:",
    question_hi: "चुंबकीय फ्लक्स को बदलकर कुंडली में प्रेरित EMF उत्पन्न करने की प्रक्रिया को क्या कहते हैं?",
    options_en: ["Electromagnetic induction", "Electrostatics", "Magnetization", "Electrolysis"],
    options_hi: ["विद्युतचुंबकीय प्रेरण", "विद्युत स्थैतिक", "चुंबकीयरण", "विद्युत अपघटन"],
    answer_en: "Electromagnetic induction",
    answer_hi: "विद्युतचुंबकीय प्रेरण",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "The direction of magnetic field inside a solenoid is:",
    question_hi: "सोलनॉइड के अंदर चुंबकीय क्षेत्र की दिशा होती है:",
    options_en: ["Along the axis of solenoid", "Perpendicular to axis", "Opposite to current", "Random"],
    options_hi: ["सोलनॉइड के अक्ष के साथ", "अक्ष के लम्बवत", "धारा के विपरीत", "यादृच्छिक"],
    answer_en: "Along the axis of solenoid",
    answer_hi: "सोलनॉइड के अक्ष के साथ",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "In which device is mutual induction used?",
    question_hi: "किस यंत्र में परस्पर प्रेरण का उपयोग होता है?",
    options_en: ["Transformer", "Electric motor", "Galvanometer", "Battery"],
    options_hi: ["ट्रांसफार्मर", "विद्युत मोटर", "गैल्वानोमीटर", "बैटरी"],
    answer_en: "Transformer",
    answer_hi: "ट्रांसफार्मर",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "The property of a material to oppose the change in magnetic flux is called:",
    question_hi: "चुंबकीय फ्लक्स में परिवर्तन का विरोध करने वाली सामग्री की गुणधर्म को क्या कहते हैं?",
    options_en: ["Inductance", "Resistance", "Capacitance", "Conductance"],
    options_hi: ["प्रेरण", "प्रतिरोध", "धारिता", "चालकता"],
    answer_en: "Inductance",
    answer_hi: "प्रेरण",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "The unit of inductance is:",
    question_hi: "प्रेरण की इकाई क्या है?",
    options_en: ["Henry", "Tesla", "Weber", "Ohm"],
    options_hi: ["हेनरी", "टेस्ला", "वेबर", "ओम"],
    answer_en: "Henry",
    answer_hi: "हेनरी",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "The magnetic flux linked with a coil depends on:",
    question_hi: "कुंडली से जुड़ा चुंबकीय फ्लक्स किस पर निर्भर करता है?",
    options_en: ["Number of turns and magnetic field", "Current only", "Voltage only", "Resistance only"],
    options_hi: ["लूपों की संख्या और चुंबकीय क्षेत्र", "केवल धारा", "केवल वोल्टेज", "केवल प्रतिरोध"],
    answer_en: "Number of turns and magnetic field",
    answer_hi: "लूपों की संख्या और चुंबकीय क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which of the following produces a magnetic field?",
    question_hi: "निम्नलिखित में से कौन चुंबकीय क्षेत्र उत्पन्न करता है?",
    options_en: ["Moving electric charge", "Static electric charge", "Insulator", "Conductor without current"],
    options_hi: ["गतिशील विद्युत आवेश", "स्थिर विद्युत आवेश", "अचालक", "धारा रहित चालक"],
    answer_en: "Moving electric charge",
    answer_hi: "गतिशील विद्युत आवेश",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "The magnetic field inside a current-carrying circular loop is:",
    question_hi: "धारा प्रवाहित वृत्ताकार कुंडली के अंदर चुंबकीय क्षेत्र:",
    options_en: ["Along the axis of the loop", "Perpendicular to loop plane", "Opposite to current", "Zero"],
    options_hi: ["लूप के अक्ष के साथ", "लूप तल के लम्बवत", "धारा के विपरीत", "शून्य"],
    answer_en: "Along the axis of the loop",
    answer_hi: "लूप के अक्ष के साथ",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which law states that magnetic flux through a coil induces emf?",
    question_hi: "कौन सा नियम बताता है कि कुंडली में चुंबकीय फ्लक्स से EMF उत्पन्न होता है?",
    options_en: ["Faraday's Law", "Ohm's Law", "Newton's Law", "Kirchhoff's Law"],
    options_hi: ["फैराडे का नियम", "ओम का नियम", "न्यूटन का नियम", "किर्चॉफ का नियम"],
    answer_en: "Faraday's Law",
    answer_hi: "फैराडे का नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which of the following is not a magnetic material?",
    question_hi: "निम्नलिखित में से कौन चुंबकीय पदार्थ नहीं है?",
    options_en: ["Copper", "Iron", "Nickel", "Cobalt"],
    options_hi: ["तांबा", "लोहा", "निकेल", "कोबाल्ट"],
    answer_en: "Copper",
    answer_hi: "तांबा",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "The magnetic moment of a current loop depends on:",
    question_hi: "धारा लूप का चुंबकीय क्षण किस पर निर्भर करता है?",
    options_en: ["Current and area of loop", "Current only", "Area only", "Number of turns only"],
    options_hi: ["धारा और लूप का क्षेत्रफल", "केवल धारा", "केवल क्षेत्रफल", "केवल लूपों की संख्या"],
    answer_en: "Current and area of loop",
    answer_hi: "धारा और लूप का क्षेत्रफल",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "What is the direction of the magnetic field around a current-carrying conductor determined by?",
    question_hi: "धारा प्रवाहित करने वाले चालक के चारों ओर चुंबकीय क्षेत्र की दिशा किससे निर्धारित होती है?",
    options_en: [
      "Right-hand thumb rule",
      "Left-hand thumb rule",
      "Right-hand palm rule",
      "Left-hand palm rule"
    ],
    options_hi: [
      "दायाँ हाथ अंगूठा नियम",
      "बायाँ हाथ अंगूठा नियम",
      "दायाँ हाथ हथेली नियम",
      "बायाँ हाथ हथेली नियम"
    ],
    answer_en: "Right-hand thumb rule",
    answer_hi: "दायाँ हाथ अंगूठा नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What does the symbol μ₀ represent in the magnetic field formula?",
    question_hi: "चुंबकीय क्षेत्र के सूत्र में प्रतीक μ₀ का क्या अर्थ है?",
    options_en: [
      "Permeability of free space",
      "Magnetic field strength",
      "Electric current",
      "Resistance"
    ],
    options_hi: [
      "मुक्त स्थान की पारगम्यता",
      "चुंबकीय क्षेत्र की तीव्रता",
      "विद्युत धारा",
      "प्रतिरोध"
    ],
    answer_en: "Permeability of free space",
    answer_hi: "मुक्त स्थान की पारगम्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "If the current in the conductor doubles, what happens to the magnetic field strength at a point?",
    question_hi: "यदि चालक में धारा दोगुनी हो जाए, तो किसी बिंदु पर चुंबकीय क्षेत्र की तीव्रता क्या होती है?",
    options_en: [
      "It doubles",
      "It halves",
      "It remains the same",
      "It becomes zero"
    ],
    options_hi: [
      "यह दोगुनी हो जाती है",
      "यह आधी हो जाती है",
      "यह समान रहती है",
      "यह शून्य हो जाती है"
    ],
    answer_en: "It doubles",
    answer_hi: "यह दोगुनी हो जाती है",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What happens to the magnetic field when the distance from the conductor is doubled?",
    question_hi: "जब चालक से दूरी दोगुनी हो जाती है तो चुंबकीय क्षेत्र क्या होता है?",
    options_en: [
      "It becomes half",
      "It doubles",
      "It remains unchanged",
      "It becomes zero"
    ],
    options_hi: [
      "यह आधा हो जाता है",
      "यह दोगुना हो जाता है",
      "यह अपरिवर्तित रहता है",
      "यह शून्य हो जाता है"
    ],
    answer_en: "It becomes half",
    answer_hi: "यह आधा हो जाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which device is used to detect magnetic field around a conductor?",
    question_hi: "चालक के चारों ओर चुंबकीय क्षेत्र का पता लगाने के लिए कौन सा उपकरण उपयोग किया जाता है?",
    options_en: [
      "Magnetic compass",
      "Voltmeter",
      "Ammeter",
      "Galvanometer"
    ],
    options_hi: [
      "चुंबकीय कम्पास",
      "वोल्टमीटर",
      "एम्पीयरमीटर",
      "गैल्वानोमीटर"
    ],
    answer_en: "Magnetic compass",
    answer_hi: "चुंबकीय कम्पास",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "What type of magnetic field is produced by a current-carrying circular loop at its center?",
    question_hi: "धारा प्रवाहित करने वाले वृत्ताकार कुंडली के केंद्र पर किस प्रकार का चुंबकीय क्षेत्र उत्पन्न होता है?",
    options_en: [
      "Uniform magnetic field",
      "Non-uniform magnetic field",
      "No magnetic field",
      "Zero magnetic field"
    ],
    options_hi: [
      "समान चुंबकीय क्षेत्र",
      "असमान चुंबकीय क्षेत्र",
      "कोई चुंबकीय क्षेत्र नहीं",
      "शून्य चुंबकीय क्षेत्र"
    ],
    answer_en: "Uniform magnetic field",
    answer_hi: "समान चुंबकीय क्षेत्र",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "The unit of magnetic field (B) is?",
    question_hi: "चुंबकीय क्षेत्र (B) की इकाई क्या है?",
    options_en: [
      "Tesla",
      "Volt",
      "Ampere",
      "Newton"
    ],
    options_hi: [
      "टेस्ला",
      "वोल्ट",
      "एम्पीयर",
      "न्यूटन"
    ],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which law relates magnetic field and current in a conductor?",
    question_hi: "कौन सा नियम चालक में चुंबकीय क्षेत्र और धारा को जोड़ता है?",
    options_en: [
      "Biot-Savart Law",
      "Ohm’s Law",
      "Faraday’s Law",
      "Newton’s Law"
    ],
    options_hi: [
      "बायोट-सावर नियम",
      "ओम का नियम",
      "फराडे का नियम",
      "न्यूटन का नियम"
    ],
    answer_en: "Biot-Savart Law",
    answer_hi: "बायोट-सावर नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "What is the magnetic field at the center of a circular loop of radius R carrying current I?",
    question_hi: "वृत्ताकार कुंडली की त्रिज्या R और धारा I होने पर उसके केंद्र पर चुंबकीय क्षेत्र क्या होगा?",
    options_en: [
      "B = μ₀I / 2R",
      "B = μ₀I / 2πR",
      "B = μ₀I / R",
      "B = μ₀I / πR"
    ],
    options_hi: [
      "B = μ₀I / 2R",
      "B = μ₀I / 2πR",
      "B = μ₀I / R",
      "B = μ₀I / πR"
    ],
    answer_en: "B = μ₀I / 2R",
    answer_hi: "B = μ₀I / 2R",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "In the right-hand thumb rule, the thumb indicates the direction of:",
    question_hi: "दायाँ हाथ अंगूठा नियम में अंगूठा किस दिशा को दिखाता है:",
    options_en: [
      "Current",
      "Magnetic field",
      "Force",
      "Electric field"
    ],
    options_hi: [
      "धारा",
      "चुंबकीय क्षेत्र",
      "बल",
      "विद्युत क्षेत्र"
    ],
    answer_en: "Current",
    answer_hi: "धारा",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "If the current in the conductor reverses direction, what happens to the magnetic field?",
    question_hi: "यदि चालक में धारा की दिशा उलट जाती है, तो चुंबकीय क्षेत्र क्या होगा?",
    options_en: [
      "It reverses direction",
      "It increases",
      "It decreases",
      "It remains unchanged"
    ],
    options_hi: [
      "यह दिशा उलट जाती है",
      "यह बढ़ जाता है",
      "यह कम हो जाता है",
      "यह अपरिवर्तित रहता है"
    ],
    answer_en: "It reverses direction",
    answer_hi: "यह दिशा उलट जाती है",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which of the following can produce a magnetic field?",
    question_hi: "निम्नलिखित में से कौन चुंबकीय क्षेत्र उत्पन्न कर सकता है?",
    options_en: [
      "Current-carrying conductor",
      "Insulator",
      "Non-metallic object",
      "None of these"
    ],
    options_hi: [
      "धारा प्रवाहित करने वाला चालक",
      "अविरोधक",
      "गैर-धातु वस्तु",
      "इनमें से कोई नहीं"
    ],
    answer_en: "Current-carrying conductor",
    answer_hi: "धारा प्रवाहित करने वाला चालक",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which scientist discovered the relationship between electricity and magnetism?",
    question_hi: "जिस वैज्ञानिक ने विद्युत और चुंबकत्व के बीच संबंध की खोज की?",
    options_en: [
      "Hans Christian Oersted",
      "James Clerk Maxwell",
      "Michael Faraday",
      "Andre-Marie Ampere"
    ],
    options_hi: [
      "हंस क्रिश्चियन ऑर्स्टेड",
      "जेम्स क्लर्क मैक्सवेल",
      "माइकल फराडे",
      "आंद्रे-मरी एम्पीयर"
    ],
    answer_en: "Hans Christian Oersted",
    answer_hi: "हंस क्रिश्चियन ऑर्स्टेड",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which of the following is a unit of magnetic field strength?",
    question_hi: "चुंबकीय क्षेत्र की तीव्रता की इकाई कौन सी है?",
    options_en: [
      "Tesla",
      "Joule",
      "Watt",
      "Coulomb"
    ],
    options_hi: [
      "टेस्ला",
      "जूल",
      "वाट",
      "कूलाम्ब"
    ],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which law states that the magnetic field due to a small segment of current-carrying conductor is proportional to current and inversely proportional to the square of the distance?",
    question_hi: "कौन सा नियम कहता है कि धारा प्रवाहित छोटे हिस्से से चुंबकीय क्षेत्र धारा के समानुपाती और दूरी के वर्ग के व्युत्क्रमानुपाती होता है?",
    options_en: [
      "Biot-Savart Law",
      "Ampere's Law",
      "Faraday's Law",
      "Ohm's Law"
    ],
    options_hi: [
      "बायोट-सावर नियम",
      "एम्पीयर का नियम",
      "फराडे का नियम",
      "ओम का नियम"
    ],
    answer_en: "Biot-Savart Law",
    answer_hi: "बायोट-सावर नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which physical quantity is responsible for creating a magnetic field around a conductor?",
    question_hi: "कौन सा भौतिक परिमाण चालक के चारों ओर चुंबकीय क्षेत्र उत्पन्न करता है?",
    options_en: [
      "Electric current",
      "Voltage",
      "Resistance",
      "Power"
    ],
    options_hi: [
      "विद्युत धारा",
      "वोल्टेज",
      "प्रतिरोध",
      "शक्ति"
    ],
    answer_en: "Electric current",
    answer_hi: "विद्युत धारा",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Magnetic field lines around a straight current-carrying conductor are:",
    question_hi: "एक सीधी धारा प्रवाहित करने वाले चालक के चारों ओर चुंबकीय क्षेत्र की रेखाएँ कैसी होती हैं?",
    options_en: [
      "Concentric circles",
      "Straight lines",
      "Radial lines",
      "Zigzag lines"
    ],
    options_hi: [
      "समकेन्द्र वृत्त",
      "सीधी रेखाएँ",
      "किरण रेखाएँ",
      "ज़िगज़ैग रेखाएँ"
    ],
    answer_en: "Concentric circles",
    answer_hi: "समकेन्द्र वृत्त",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "The strength of magnetic field depends on:",
    question_hi: "चुंबकीय क्षेत्र की तीव्रता इस पर निर्भर करती है:",
    options_en: [
      "Current and distance from conductor",
      "Voltage and resistance",
      "Power and energy",
      "Length and thickness"
    ],
    options_hi: [
      "धारा और चालक से दूरी",
      "वोल्टेज और प्रतिरोध",
      "शक्ति और ऊर्जा",
      "लंबाई और मोटाई"
    ],
    answer_en: "Current and distance from conductor",
    answer_hi: "धारा और चालक से दूरी",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "What is the effect of increasing current on magnetic field?",
    question_hi: "चुंबकीय क्षेत्र पर धारा बढ़ाने का क्या प्रभाव होता है?",
    options_en: [
      "Magnetic field increases",
      "Magnetic field decreases",
      "No effect",
      "Magnetic field becomes zero"
    ],
    options_hi: [
      "चुंबकीय क्षेत्र बढ़ता है",
      "चुंबकीय क्षेत्र घटता है",
      "कोई प्रभाव नहीं",
      "चुंबकीय क्षेत्र शून्य हो जाता है"
    ],
    answer_en: "Magnetic field increases",
    answer_hi: "चुंबकीय क्षेत्र बढ़ता है",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which of the following is NOT a property of magnetic field lines?",
    question_hi: "निम्नलिखित में से कौन चुंबकीय क्षेत्र रेखाओं का गुण नहीं है?",
    options_en: [
      "They never intersect",
      "They form closed loops",
      "They originate from north pole",
      "They are straight lines"
    ],
    options_hi: [
      "वे कभी नहीं मिलतीं",
      "वे बंद लूप बनाती हैं",
      "वे उत्तर ध्रुव से उत्पन्न होती हैं",
      "वे सीधी रेखाएँ हैं"
    ],
    answer_en: "They are straight lines",
    answer_hi: "वे सीधी रेखाएँ हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which rule helps to find the direction of magnetic field around a conductor?",
    question_hi: "कौन सा नियम चालक के चारों ओर चुंबकीय क्षेत्र की दिशा पता लगाने में मदद करता है?",
    options_en: [
      "Right-hand thumb rule",
      "Left-hand thumb rule",
      "Right-hand palm rule",
      "Faraday’s law"
    ],
    options_hi: [
      "दायाँ हाथ अंगूठा नियम",
      "बायाँ हाथ अंगूठा नियम",
      "दायाँ हाथ हथेली नियम",
      "फराडे का नियम"
    ],
    answer_en: "Right-hand thumb rule",
    answer_hi: "दायाँ हाथ अंगूठा नियम",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "The magnetic field inside a long straight current-carrying conductor is:",
    question_hi: "लंबे सीधे धारा प्रवाहित करने वाले चालक के अंदर चुंबकीय क्षेत्र क्या होता है?",
    options_en: [
      "Zero",
      "Maximum",
      "Minimum",
      "Infinite"
    ],
    options_hi: [
      "शून्य",
      "अधिकतम",
      "न्यूनतम",
      "अनंत"
    ],
    answer_en: "Zero",
    answer_hi: "शून्य",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "In which direction do magnetic field lines point outside a magnet?",
    question_hi: "चुंबक के बाहर चुंबकीय क्षेत्र रेखाएँ किस दिशा में इंगित करती हैं?",
    options_en: [
      "From north to south",
      "From south to north",
      "Random directions",
      "No direction"
    ],
    options_hi: [
      "उत्तर से दक्षिण की ओर",
      "दक्षिण से उत्तर की ओर",
      "यादृच्छिक दिशाएँ",
      "कोई दिशा नहीं"
    ],
    answer_en: "From north to south",
    answer_hi: "उत्तर से दक्षिण की ओर",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which instrument uses the magnetic field produced by current to measure it?",
    question_hi: "धारा द्वारा उत्पन्न चुंबकीय क्षेत्र का उपयोग कर कौन सा यंत्र धारा को मापता है?",
    options_en: [
      "Galvanometer",
      "Voltmeter",
      "Ammeter",
      "Ohmmeter"
    ],
    options_hi: [
      "गैल्वानोमीटर",
      "वोल्टमीटर",
      "एम्पीयरमीटर",
      "ओह्ममीटर"
    ],
    answer_en: "Galvanometer",
    answer_hi: "गैल्वानोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "The magnetic field around a conductor is directly proportional to:",
    question_hi: "चालक के चारों ओर चुंबकीय क्षेत्र सीधे आनुपातिक होता है:",
    options_en: [
      "Current",
      "Voltage",
      "Resistance",
      "Temperature"
    ],
    options_hi: [
      "धारा",
      "वोल्टेज",
      "प्रतिरोध",
      "तापमान"
    ],
    answer_en: "Current",
    answer_hi: "धारा",
    attempted: false,
    selected: ""
  }
     // Continue adding more questions up to 30
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
