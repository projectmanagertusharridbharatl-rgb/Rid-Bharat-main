const questions = [
    {
      num: 1,
      question_en: "What is the direction of the magnetic force on a moving charge?",
      question_hi: "गतिमान आवेश पर चुंबकीय बल की दिशा क्या होती है?",
      options_en: ["Parallel to the velocity", "Perpendicular to the velocity", "Along the direction of the magnetic field", "None of the above"],
      options_hi: ["वेग के समानांतर", "वेग के लम्बवत", "चुंबकीय क्षेत्र की दिशा में", "उपरोक्त में से कोई नहीं"],
      answer: "Perpendicular to the velocity",
      attempted: false,
      selected: ""
    },
    {
      num: 2,
      question_en: "Which law describes the force between two current-carrying conductors?",
      question_hi: "कौन सा नियम दो धारा प्रवाहित करने वाले चालकों के बीच बल का वर्णन करता है?",
      options_en: ["Coulomb's law", "Ampere's law", "Gauss's law", "Biot-Savart law"],
      options_hi: ["कूलॉम्ब का नियम", "एंपेयर का नियम", "गॉस का नियम", "बायो-सावर्ट का नियम"],
      answer: "Ampere's law",
      attempted: false,
      selected: ""
    },
    {
      num: 3,
      question_en: "What does the magnetic field produced by a current-carrying conductor form around it?",
      question_hi: "धारा प्रवाहित करने वाले चालक के चारों ओर उत्पन्न होने वाला चुंबकीय क्षेत्र किस रूप में होता है?",
      options_en: ["Straight lines", "Concentric circles", "Spirals", "Ellipses"],
      options_hi: ["सीधे रेखाएँ", "सामकेंद्री वृत", "सर्पिल", "दीर्घवृत्त"],
      answer: "Concentric circles",
      attempted: false,
      selected: ""
    },
    {
      num: 4,
      question_en: "What is the SI unit of magnetic field strength?",
      question_hi: "चुंबकीय क्षेत्र की शक्ति की एसआई इकाई क्या है?",
      options_en: ["Tesla", "Gauss", "Ampere", "Newton"],
      options_hi: ["टेस्ला", "गॉस", "ऐम्पियर", "न्यूटन"],
      answer: "Tesla",
      attempted: false,
      selected: ""
    },
    {
      num: 5,
      question_en: "What is the direction of the magnetic field produced by a straight current-carrying conductor?",
      question_hi: "सीधे धारा प्रवाहित करने वाले चालक द्वारा उत्पन्न चुंबकीय क्षेत्र की दिशा क्या होती है?",
      options_en: ["Radial outwards", "Radial inwards", "Circular around the conductor", "None of the above"],
      options_hi: ["बाहरी रेडियल", "अंदर की रेडियल", "चालक के चारों ओर वृत्ताकार", "उपरोक्त में से कोई नहीं"],
      answer: "Circular around the conductor",
      attempted: false,
      selected: ""
    },
    {
      num: 6,
      question_en: "What is the force on a charge moving in a magnetic field?",
      question_hi: "चुंबकीय क्षेत्र में गतिमान आवेश पर बल क्या होता है?",
      options_en: ["Zero", "Maximum when parallel", "Maximum when perpendicular", "Varies with speed"],
      options_hi: ["शून्य", "समानांतर होने पर अधिकतम", "लम्बवत होने पर अधिकतम", "गति के साथ बदलता है"],
      answer: "Maximum when perpendicular",
      attempted: false,
      selected: ""
    },
    {
      num: 7,
      question_en: "What is the magnetic field at the center of a circular loop carrying a current?",
      question_hi: "धारा प्रवाहित करने वाले वृत्ताकार लूप के केंद्र में चुंबकीय क्षेत्र क्या होता है?",
      options_en: ["Zero", "Maximum", "Half of the value at the edges", "Varies along the axis"],
      options_hi: ["शून्य", "अधिकतम", "किनारों पर मान का आधा", "धुरी के साथ बदलता है"],
      answer: "Maximum",
      attempted: false,
      selected: ""
    },
    {
      num: 8,
      question_en: "Which of the following factors does not affect the magnetic force on a moving charge?",
      question_hi: "निम्नलिखित में से कौन सा तत्व गतिमान आवेश पर चुंबकीय बल को प्रभावित नहीं करता है?",
      options_en: ["Speed of the charge", "Magnitude of the charge", "Direction of the charge", "None of the above"],
      options_hi: ["आवेश की गति", "आवेश का परिमाण", "आवेश की दिशा", "उपरोक्त में से कोई नहीं"],
      answer: "Direction of the charge",
      attempted: false,
      selected: ""
    },
    {
      num: 9,
      question_en: "What is the force between two parallel conductors carrying current?",
      question_hi: "दो समानांतर चालकों के बीच बल क्या होता है जब वे धारा प्रवाहित कर रहे होते हैं?",
      options_en: ["Attractive force", "Repulsive force", "No force", "Depends on the temperature"],
      options_hi: ["आकर्षक बल", "प्रतिकर्षक बल", "कोई बल नहीं", "तापमान पर निर्भर"],
      answer: "Attractive force",
      attempted: false,
      selected: ""
    },
    {
      num: 10,
      question_en: "Which of the following is the right hand rule used to determine?",
      question_hi: "निम्नलिखित में से किसका निर्धारण करने के लिए दाहिने हाथ का नियम उपयोग किया जाता है?",
      options_en: ["Direction of magnetic force", "Direction of electric field", "Direction of current", "Direction of magnetic field around a conductor"],
      options_hi: ["चुंबकीय बल की दिशा", "विद्युत क्षेत्र की दिशा", "धारा की दिशा", "चालक के चारों ओर चुंबकीय क्षेत्र की दिशा"],
      answer: "Direction of magnetic field around a conductor",
      attempted: false,
      selected: ""
    },
    {
      num: 11,
      question_en: "What happens when a moving charge enters a magnetic field perpendicular to its velocity?",
      question_hi: "जब गतिमान आवेश एक चुंबकीय क्षेत्र में प्रवेश करता है जो इसकी वेग के लम्बवत होता है, तो क्या होता है?",
      options_en: ["It slows down", "It speeds up", "It moves in a circular path", "It moves in a straight line"],
      options_hi: ["यह धीमा हो जाता है", "यह तेज़ हो जाता है", "यह वृत्ताकार मार्ग में चलता है", "यह सीधी रेखा में चलता है"],
      answer: "It moves in a circular path",
      attempted: false,
      selected: ""
    },
    {
      num: 12,
      question_en: "What is the force on a current-carrying conductor placed in a magnetic field?",
      question_hi: "चुंबकीय क्षेत्र में रखे गए धारा प्रवाहित करने वाले चालक पर बल क्या होता है?",
      options_en: ["Zero", "Attractive", "Repulsive", "Depends on the current"],
      options_hi: ["शून्य", "आकर्षक", "प्रतिकर्षक", "धारा पर निर्भर"],
      answer: "Attractive",
      attempted: false,
      selected: ""
    },
    {
      num: 13,
      question_en: "What is the unit of magnetic field strength?",
      question_hi: "चुंबकीय क्षेत्र की शक्ति की इकाई क्या है?",
      options_en: ["Ampere", "Tesla", "Newton", "Volt"],
      options_hi: ["ऐम्पियर", "टेस्ला", "न्यूटन", "वोल्ट"],
      answer: "Tesla",
      attempted: false,
      selected: ""
    },
    {
      num: 14,
      question_en: "What is the formula for the magnetic force on a current-carrying conductor?",
      question_hi: "धारा प्रवाहित करने वाले चालक पर चुंबकीय बल का सूत्र क्या है?",
      options_en: ["F = ILB sin θ", "F = qvB", "F = BIL", "F = Bqv"],
      options_hi: ["F = ILB sin θ", "F = qvB", "F = BIL", "F = Bqv"],
      answer: "F = ILB sin θ",
      attempted: false,
      selected: ""
    },
    {
      num: 15,
      question_en: "What happens when two current-carrying conductors are placed parallel and close to each other?",
      question_hi: "जब दो धारा प्रवाहित करने वाले चालक समानांतर और पास-पास रखे जाते हैं, तो क्या होता है?",
      options_en: ["They attract each other", "They repel each other", "No force is experienced", "They are unaffected"],
      options_hi: ["वे एक-दूसरे को आकर्षित करते हैं", "वे एक-दूसरे को प्रतिकर्षित करते हैं", "कोई बल अनुभव नहीं होता", "वे अप्रभावित रहते हैं"],
      answer: "They attract each other",
      attempted: false,
      selected: ""
    },
    {
      num: 16,
      question_en: "What is the formula for the magnetic field at the center of a circular loop carrying current?",
      question_hi: "धारा प्रवाहित करने वाले वृत्ताकार लूप के केंद्र में चुंबकीय क्षेत्र का सूत्र क्या है?",
      options_en: ["B = (μ₀I) / 2r", "B = μ₀I / 4πr", "B = μ₀I / r", "B = μ₀I / 2πr"],
      options_hi: ["B = (μ₀I) / 2r", "B = μ₀I / 4πr", "B = μ₀I / r", "B = μ₀I / 2πr"],
      answer: "B = (μ₀I) / 2r",
      attempted: false,
      selected: ""
    },
    {
      num: 17,
      question_en: "What is the effect of the magnetic field on a charged particle?",
      question_hi: "चुंबकीय क्षेत्र का आवेशित कण पर क्या प्रभाव पड़ता है?",
      options_en: ["It accelerates the particle", "It deflects the particle", "It stops the particle", "It does not affect the particle"],
      options_hi: ["यह कण को त्वरण करता है", "यह कण को विक्षेपित करता है", "यह कण को रोकता है", "यह कण को प्रभावित नहीं करता"],
      answer: "It deflects the particle",
      attempted: false,
      selected: ""
    },
    {
      num: 18,
      question_en: "What is the direction of the magnetic field produced by a current-carrying conductor?",
      question_hi: "धारा प्रवाहित करने वाले चालक द्वारा उत्पन्न चुंबकीय क्षेत्र की दिशा क्या होती है?",
      options_en: ["Right hand rule", "Left hand rule", "Clockwise", "Anti-clockwise"],
      options_hi: ["दाहिने हाथ का नियम", "बाएं हाथ का नियम", "घड़ी की दिशा में", "घड़ी की विपरीत दिशा में"],
      answer: "Right hand rule",
      attempted: false,
      selected: ""
    },
    {
      num: 19,
      question_en: "What is the value of the magnetic field at a point on the axis of a circular loop carrying current?",
      question_hi: "धारा प्रवाहित करने वाले वृत्ताकार लूप की धुरी पर एक बिंदु पर चुंबकीय क्षेत्र का मान क्या है?",
      options_en: ["Zero", "Maximum", "Half of the value at the center", "Depends on the radius"],
      options_hi: ["शून्य", "अधिकतम", "केंद्र पर मान का आधा", "व्यास पर निर्भर"],
      answer: "Zero",
      attempted: false,
      selected: ""
    },
    {
      num: 20,
      question_en: "What happens when a magnetic field is applied to a moving charge?",
      question_hi: "जब एक चुंबकीय क्षेत्र गतिमान आवेश पर लगाया जाता है, तो क्या होता है?",
      options_en: ["The charge moves in a straight line", "The charge moves in a circular path", "The charge is slowed down", "The charge is stopped"],
      options_hi: ["आवेश सीधी रेखा में चलता है", "आवेश वृत्ताकार मार्ग में चलता है", "आवेश धीमा हो जाता है", "आवेश रुक जाता है"],
      answer: "The charge moves in a circular path",
      attempted: false,
      selected: ""
    },
    {
      num: 21,
      question_en: "What is the SI unit of magnetic flux?",
      question_hi: "चुंबकीय फ्लक्स की एसआई इकाई क्या है?",
      options_en: ["Weber", "Tesla", "Ampere", "Volt"],
      options_hi: ["वेबर", "टेस्ला", "ऐम्पियर", "वोल्ट"],
      answer: "Weber",
      attempted: false,
      selected: ""
    },
    {
      num: 22,
      question_en: "What happens to the magnetic force if the velocity of the charged particle is doubled?",
      question_hi: "यदि आवेशित कण की गति को दोगुना किया जाए तो चुंबकीय बल क्या होगा?",
      options_en: ["It remains the same", "It doubles", "It becomes four times", "It decreases"],
      options_hi: ["यह वही रहता है", "यह दोगुना हो जाता है", "यह चार गुना हो जाता है", "यह घटता है"],
      answer: "It doubles",
      attempted: false,
      selected: ""
    },
    {
      num: 23,
      question_en: "What is the formula for the force on a moving charge in a magnetic field?",
      question_hi: "चुंबकीय क्षेत्र में गतिमान आवेश पर बल का सूत्र क्या है?",
      options_en: ["F = qvB sin θ", "F = ILB", "F = BIL", "F = Bqv"],
      options_hi: ["F = qvB sin θ", "F = ILB", "F = BIL", "F = Bqv"],
      answer: "F = qvB sin θ",
      attempted: false,
      selected: ""
    },
    {
      num: 24,
      question_en: "What is the effect of the angle between the velocity of the charge and the magnetic field on the magnetic force?",
      question_hi: "आवेश की गति और चुंबकीय क्षेत्र के बीच कोण का चुंबकीय बल पर क्या प्रभाव पड़ता है?",
      options_en: ["Zero when parallel", "Maximum when perpendicular", "Zero when perpendicular", "Maximum when parallel"],
      options_hi: ["शून्य जब समानांतर हो", "अधिकतम जब लम्बवत हो", "शून्य जब लम्बवत हो", "अधिकतम जब समानांतर हो"],
      answer: "Maximum when perpendicular",
      attempted: false,
      selected: ""
    },
    {
      num: 25,
      question_en: "What happens when the radius of a circular current-carrying loop is increased?",
      question_hi: "जब वृत्ताकार धारा प्रवाहित करने वाले लूप का त्रिज्या बढ़ाया जाता है, तो क्या होता है?",
      options_en: ["Magnetic field increases", "Magnetic field decreases", "No effect on magnetic field", "Depends on the current"],
      options_hi: ["चुंबकीय क्षेत्र बढ़ता है", "चुंबकीय क्षेत्र घटता है", "चुंबकीय क्षेत्र पर कोई प्रभाव नहीं पड़ता", "धारा पर निर्भर करता है"],
      answer: "Magnetic field decreases",
      attempted: false,
      selected: ""
    },
      {
        num: 26,
        question_en: "What happens when the current in a circular loop is increased?",
        question_hi: "जब वृत्ताकार लूप में धारा बढ़ाई जाती है, तो क्या होता है?",
        options_en: ["Magnetic field increases", "Magnetic field decreases", "No effect on magnetic field", "Depends on the radius"],
        options_hi: ["चुंबकीय क्षेत्र बढ़ता है", "चुंबकीय क्षेत्र घटता है", "चुंबकीय क्षेत्र पर कोई प्रभाव नहीं पड़ता", "त्रिज्या पर निर्भर करता है"],
        answer: "Magnetic field increases",
        attempted: false,
        selected: ""
      },
      {
        num: 27,
        question_en: "What is the effect of increasing the current in a straight conductor on the magnetic field around it?",
        question_hi: "सीधे चालक में धारा बढ़ाने का उसके चारों ओर चुंबकीय क्षेत्र पर क्या प्रभाव पड़ता है?",
        options_en: ["The magnetic field increases", "The magnetic field decreases", "The magnetic field remains constant", "The magnetic field becomes zero"],
        options_hi: ["चुंबकीय क्षेत्र बढ़ता है", "चुंबकीय क्षेत्र घटता है", "चुंबकीय क्षेत्र स्थिर रहता है", "चुंबकीय क्षेत्र शून्य हो जाता है"],
        answer: "The magnetic field increases",
        attempted: false,
        selected: ""
      },
      {
        num: 28,
        question_en: "What is the direction of the magnetic field produced by a current-carrying conductor at a point above it?",
        question_hi: "एक धारा प्रवाहित करने वाले चालक के ऊपर स्थित बिंदु पर उत्पन्न चुंबकीय क्षेत्र की दिशा क्या होती है?",
        options_en: ["Radial outward", "Radial inward", "Perpendicular to the conductor", "Parallel to the conductor"],
        options_hi: ["बाहरी रेडियल", "अंदर की रेडियल", "चालक के लम्बवत", "चालक के समानांतर"],
        answer: "Perpendicular to the conductor",
        attempted: false,
        selected: ""
      },
      {
        num: 29,
        question_en: "What is the force between two parallel current-carrying conductors placed 1 meter apart?",
        question_hi: "1 मीटर की दूरी पर रखे गए दो समानांतर धारा प्रवाहित करने वाले चालकों के बीच बल क्या होगा?",
        options_en: ["It will be zero", "It will be attractive", "It will be repulsive", "It will depend on the material of the conductors"],
        options_hi: ["यह शून्य होगा", "यह आकर्षक होगा", "यह प्रतिकर्षक होगा", "यह चालकों की सामग्री पर निर्भर करेगा"],
        answer: "It will be attractive",
        attempted: false,
        selected: ""
      },
      {
        num: 30,
        question_en: "What is the magnetic force on a charge moving parallel to a magnetic field?",
        question_hi: "चुंबकीय क्षेत्र के समानांतर गतिमान आवेश पर चुंबकीय बल क्या होता है?",
        options_en: ["Zero", "Maximum", "It depends on the velocity", "It depends on the charge"],
        options_hi: ["शून्य", "अधिकतम", "यह गति पर निर्भर करता है", "यह आवेश पर निर्भर करता है"],
        answer: "Zero",
        attempted: false,
        selected: ""
      },
      {
        num: 31,
        question_en: "What is the direction of the magnetic force on a positive charge moving in a magnetic field?",
        question_hi: "चुंबकीय क्षेत्र में गतिमान सकारात्मक आवेश पर चुंबकीय बल की दिशा क्या होती है?",
        options_en: ["Perpendicular to the velocity", "Along the velocity", "Along the magnetic field", "None of the above"],
        options_hi: ["वेग के लम्बवत", "वेग के साथ", "चुंबकीय क्षेत्र के साथ", "उपरोक्त में से कोई नहीं"],
        answer: "Perpendicular to the velocity",
        attempted: false,
        selected: ""
      },
      {
        num: 32,
        question_en: "What is the effect of decreasing the radius of a circular loop on the magnetic field at the center?",
        question_hi: "वृत्ताकार लूप के त्रिज्या को घटाने का केंद्र पर चुंबकीय क्षेत्र पर क्या प्रभाव पड़ता है?",
        options_en: ["Magnetic field increases", "Magnetic field decreases", "No effect on the magnetic field", "It depends on the current"],
        options_hi: ["चुंबकीय क्षेत्र बढ़ता है", "चुंबकीय क्षेत्र घटता है", "चुंबकीय क्षेत्र पर कोई प्रभाव नहीं पड़ता", "यह धारा पर निर्भर करता है"],
        answer: "Magnetic field increases",
        attempted: false,
        selected: ""
      },
      {
        num: 33,
        question_en: "What is the magnetic field strength at the center of a solenoid?",
        question_hi: "एक सोलिनॉइड के केंद्र में चुंबकीय क्षेत्र की शक्ति क्या होती है?",
        options_en: ["Zero", "Maximum", "Depends on the current", "Depends on the radius"],
        options_hi: ["शून्य", "अधिकतम", "यह धारा पर निर्भर करता है", "यह त्रिज्या पर निर्भर करता है"],
        answer: "Maximum",
        attempted: false,
        selected: ""
      },
      {
        num: 34,
        question_en: "What is the relationship between magnetic field strength and the number of turns in a solenoid?",
        question_hi: "एक सोलिनॉइड में चुंबकीय क्षेत्र की शक्ति और घूर्णन की संख्या के बीच क्या संबंध है?",
        options_en: ["Magnetic field is directly proportional to the number of turns", "Magnetic field is inversely proportional to the number of turns", "Magnetic field is independent of the number of turns", "None of the above"],
        options_hi: ["चुंबकीय क्षेत्र घूर्णन की संख्या के समानुपाती होता है", "चुंबकीय क्षेत्र घूर्णन की संख्या के व्युत्क्रामी होता है", "चुंबकीय क्षेत्र घूर्णन की संख्या से स्वतंत्र होता है", "उपरोक्त में से कोई नहीं"],
        answer: "Magnetic field is directly proportional to the number of turns",
        attempted: false,
        selected: ""
      },
      {
        num: 35,
        question_en: "What is the formula for the magnetic field inside a long solenoid?",
        question_hi: "एक लंबे सोलिनॉइड के अंदर चुंबकीय क्षेत्र का सूत्र क्या है?",
        options_en: ["B = μ₀nI", "B = μ₀I / n", "B = μ₀I / 2πr", "B = μ₀nI / 2πr"],
        options_hi: ["B = μ₀nI", "B = μ₀I / n", "B = μ₀I / 2πr", "B = μ₀nI / 2πr"],
        answer: "B = μ₀nI",
        attempted: false,
        selected: ""
      },
      {
        num: 36,
        question_en: "What happens to the magnetic field of a solenoid if the current flowing through it is reversed?",
        question_hi: "यदि सोलिनॉइड से बहने वाली धारा उलट दी जाए, तो चुंबकीय क्षेत्र क्या होता है?",
        options_en: ["Magnetic field reverses", "Magnetic field remains the same", "Magnetic field increases", "Magnetic field decreases"],
        options_hi: ["चुंबकीय क्षेत्र उलट जाता है", "चुंबकीय क्षेत्र वही रहता है", "चुंबकीय क्षेत्र बढ़ता है", "चुंबकीय क्षेत्र घटता है"],
        answer: "Magnetic field reverses",
        attempted: false,
        selected: ""
      },
      {
        num: 37,
        question_en: "What is the use of a solenoid?",
        question_hi: "सोलिनॉइड का उपयोग क्या है?",
        options_en: ["To produce a uniform magnetic field", "To produce an electric field", "To store electrical energy", "To generate heat"],
        options_hi: ["एक समान चुंबकीय क्षेत्र उत्पन्न करने के लिए", "विद्युत क्षेत्र उत्पन्न करने के लिए", "विद्युत ऊर्जा संचित करने के लिए", "गर्मी उत्पन्न करने के लिए"],
        answer: "To produce a uniform magnetic field",
        attempted: false,
        selected: ""
      },
      {
        num: 38,
        question_en: "What is the direction of the magnetic field inside a solenoid?",
        question_hi: "एक सोलिनॉइड के अंदर चुंबकीय क्षेत्र की दिशा क्या होती है?",
        options_en: ["Along the axis of the solenoid", "Perpendicular to the axis", "Radial", "None of the above"],
        options_hi: ["सोलिनॉइड की धुरी के साथ", "धुरी के लम्बवत", "रेडियल", "उपरोक्त में से कोई नहीं"],
        answer: "Along the axis of the solenoid",
        attempted: false,
        selected: ""
      },
      {
        num: 39,
        question_en: "What is the magnetic field at a point outside a solenoid?",
        question_hi: "एक सोलिनॉइड के बाहर किसी बिंदु पर चुंबकीय क्षेत्र का मान क्या होता है?",
        options_en: ["Zero", "Maximum", "Depends on the current", "Depends on the distance from the solenoid"],
        options_hi: ["शून्य", "अधिकतम", "यह धारा पर निर्भर करता है", "यह सोलिनॉइड से दूरी पर निर्भर करता है"],
        answer: "Zero",
        attempted: false,
        selected: ""
      },
      {
        num: 40,
        question_en: "What is the magnetic field strength inside a solenoid directly proportional to?",
        question_hi: "सोलिनॉइड के अंदर चुंबकीय क्षेत्र की शक्ति किसके समानुपाती होती है?",
        options_en: ["Current", "Radius", "Length", "Temperature"],
        options_hi: ["धारा", "त्रिज्या", "लंबाई", "तापमान"],
        answer: "Current",
        attempted: false,
        selected: ""
      },
      {
        num: 41,
        question_en: "What is the unit of magnetic field strength?",
        question_hi: "चुंबकीय क्षेत्र की शक्ति की इकाई क्या है?",
        options_en: ["Tesla", "Weber", "Ampere", "Volt"],
        options_hi: ["टेस्ला", "वेबर", "ऐम्पियर", "वोल्ट"],
        answer: "Tesla",
        attempted: false,
        selected: ""
      },
      {
        num: 42,
        question_en: "What happens when two parallel current-carrying conductors are placed in the same direction?",
        question_hi: "जब दो समानांतर धारा प्रवाहित करने वाले चालक समान दिशा में रखे जाते हैं, तो क्या होता है?",
        options_en: ["They repel each other", "They attract each other", "No interaction", "Depends on the material"],
        options_hi: ["वे एक-दूसरे को प्रतिकर्षित करते हैं", "वे एक-दूसरे को आकर्षित करते हैं", "कोई इंटरएक्शन नहीं होता", "यह सामग्री पर निर्भर करता है"],
        answer: "They attract each other",
        attempted: false,
        selected: ""
      },
      {
        num: 43,
        question_en: "What happens when two parallel current-carrying conductors are placed in opposite directions?",
        question_hi: "जब दो समानांतर धारा प्रवाहित करने वाले चालक विपरीत दिशा में रखे जाते हैं, तो क्या होता है?",
        options_en: ["They repel each other", "They attract each other", "No interaction", "Depends on the distance between the conductors"],
        options_hi: ["वे एक-दूसरे को प्रतिकर्षित करते हैं", "वे एक-दूसरे को आकर्षित करते हैं", "कोई इंटरएक्शन नहीं होता", "यह चालकों के बीच दूरी पर निर्भर करता है"],
        answer: "They repel each other",
        attempted: false,
        selected: ""
      },
      {
        num: 44,
        question_en: "What is the force between two current-carrying conductors placed parallel to each other?",
        question_hi: "दो समानांतर धारा प्रवाहित करने वाले चालकों के बीच बल क्या होता है?",
        options_en: ["Attractive or repulsive depending on the current direction", "Always attractive", "Always repulsive", "No force between them"],
        options_hi: ["धारा की दिशा पर निर्भर आकर्षक या प्रतिकर्षक", "हमेशा आकर्षक", "हमेशा प्रतिकर्षक", "उनके बीच कोई बल नहीं होता"],
        answer: "Attractive or repulsive depending on the current direction",
        attempted: false,
        selected: ""
      },
      {
        num: 45,
        question_en: "What is the formula for the force between two parallel current-carrying conductors?",
        question_hi: "दो समानांतर धारा प्रवाहित करने वाले चालकों के बीच बल का सूत्र क्या है?",
        options_en: ["F = (μ₀I₁I₂L) / 2πr", "F = μ₀I₁I₂r", "F = μ₀I₁I₂L", "F = (μ₀I₁I₂) / 2πr"],
        options_hi: ["F = (μ₀I₁I₂L) / 2πr", "F = μ₀I₁I₂r", "F = μ₀I₁I₂L", "F = (μ₀I₁I₂) / 2πr"],
        answer: "F = (μ₀I₁I₂L) / 2πr",
        attempted: false,
        selected: ""
      },
      {
        num: 46,
        question_en: "What is the unit of magnetic force?",
        question_hi: "चुंबकीय बल की इकाई क्या है?",
        options_en: ["Newton", "Tesla", "Weber", "Ampere"],
        options_hi: ["न्यूटन", "टेस्ला", "वेबर", "ऐम्पियर"],
        answer: "Newton",
        attempted: false,
        selected: ""
      },
      {
        num: 47,
        question_en: "What is the effect of increasing the separation between two parallel current-carrying conductors?",
        question_hi: "दो समानांतर धारा प्रवाहित करने वाले चालकों के बीच दूरी बढ़ाने का क्या प्रभाव होता है?",
        options_en: ["The force between them increases", "The force between them decreases", "The force remains the same", "Depends on the current"],
        options_hi: ["उनके बीच बल बढ़ता है", "उनके बीच बल घटता है", "बल वही रहता है", "यह धारा पर निर्भर करता है"],
        answer: "The force between them decreases",
        attempted: false,
        selected: ""
      },
      {
        num: 48,
        question_en: "What is the direction of the magnetic force on a moving charge?",
        question_hi: "गतिमान आवेश पर चुंबकीय बल की दिशा क्या होती है?",
        options_en: ["Parallel to the velocity", "Perpendicular to the velocity", "Along the magnetic field", "Opposite to the magnetic field"],
        options_hi: ["वेग के समानांतर", "वेग के लम्बवत", "चुंबकीय क्षेत्र के साथ", "चुंबकीय क्षेत्र के विपरीत"],
        answer: "Perpendicular to the velocity",
        attempted: false,
        selected: ""
      },
      {
        num: 49,
        question_en: "What is the SI unit of magnetic flux?",
        question_hi: "चुंबकीय फ्लक्स की एसआई इकाई क्या है?",
        options_en: ["Weber", "Tesla", "Ampere", "Volt"],
        options_hi: ["वेबर", "टेस्ला", "ऐम्पियर", "वोल्ट"],
        answer: "Weber",
        attempted: false,
        selected: ""
      },
      {
        num: 50,
        question_en: "What is the formula for the magnetic field around a straight current-carrying conductor?",
        question_hi: "एक सीधी धारा प्रवाहित करने वाले चालक के चारों ओर चुंबकीय क्षेत्र का सूत्र क्या है?",
        options_en: ["B = μ₀I / 2πr", "B = μ₀I / 2r", "B = μ₀I / πr", "B = μ₀I / r"],
        options_hi: ["B = μ₀I / 2πr", "B = μ₀I / 2r", "B = μ₀I / πr", "B = μ₀I / r"],
        answer: "B = μ₀I / 2πr",
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
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
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
