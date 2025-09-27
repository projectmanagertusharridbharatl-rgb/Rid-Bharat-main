const questions = [
 
  {
    num: 1,
    question_en: "What is electromagnetic induction?",
    question_hi: "चुंबकीय प्रेरण क्या है?",
    options_en: ["Generation of electric current due to a changing magnetic field", "Generation of magnetic field due to a changing current", "Generation of current by friction", "Generation of current by pressure"],
    options_hi: ["चुंबकीय क्षेत्र में परिवर्तन के कारण विद्युत धारा का उत्पन्न होना", "धारा में परिवर्तन के कारण चुंबकीय क्षेत्र का उत्पन्न होना", "घर्षण द्वारा धारा का उत्पन्न होना", "दाब द्वारा धारा का उत्पन्न होना"],
    answer: "Generation of electric current due to a changing magnetic field",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the formula for the magnetic field around a straight current-carrying conductor?",
    question_hi: "एक सीधी धारा प्रवाहित करने वाले चालक के चारों ओर चुंबकीय क्षेत्र का सूत्र क्या है?",
    options_en: ["B = μ₀I / 2πr", "B = μ₀I / 2r", "B = μ₀I / πr", "B = μ₀I / r"],
    options_hi: ["B = μ₀I / 2πr", "B = μ₀I / 2r", "B = μ₀I / πr", "B = μ₀I / r"],
    answer: "B = μ₀I / 2πr",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the unit of magnetic flux?",
    question_hi: "चुंबकीय फ्लक्स की इकाई क्या है?",
    options_en: ["Weber", "Tesla", "Ampere", "Volt"],
    options_hi: ["वेबर", "टेस्ला", "ऐम्पियर", "वोल्ट"],
    answer: "Weber",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What is Faraday's law of electromagnetic induction?",
    question_hi: "चुंबकीय प्रेरण का फैराडे का नियम क्या है?",
    options_en: ["The induced emf is directly proportional to the rate of change of magnetic flux", "The induced emf is inversely proportional to the rate of change of magnetic flux", "The induced emf is independent of the magnetic flux", "The induced emf depends on the current"],
    options_hi: ["उत्तेजित ईएमएफ चुंबकीय फ्लक्स में परिवर्तन की दर के समानुपाती होता है", "उत्तेजित ईएमएफ चुंबकीय फ्लक्स में परिवर्तन की दर के व्युत्क्रामी होता है", "उत्तेजित ईएमएफ चुंबकीय फ्लक्स पर निर्भर नहीं होता", "उत्तेजित ईएमएफ धारा पर निर्भर करता है"],
    answer: "The induced emf is directly proportional to the rate of change of magnetic flux",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What does Lenz's law state?",
    question_hi: "लेन्ज के नियम के अनुसार क्या कहा जाता है?",
    options_en: ["The direction of induced current opposes the change in magnetic flux", "The direction of induced current follows the change in magnetic flux", "The direction of induced current is independent of magnetic flux", "The induced current is always zero"],
    options_hi: ["उत्तेजित धारा की दिशा चुंबकीय फ्लक्स में परिवर्तन का विरोध करती है", "उत्तेजित धारा की दिशा चुंबकीय फ्लक्स में परिवर्तन के साथ होती है", "उत्तेजित धारा की दिशा चुंबकीय फ्लक्स पर निर्भर नहीं होती", "उत्तेजित धारा हमेशा शून्य होती है"],
    answer: "The direction of induced current opposes the change in magnetic flux",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the SI unit of induced emf?",
    question_hi: "उत्तेजित ईएमएफ की एसआई इकाई क्या है?",
    options_en: ["Volt", "Ampere", "Tesla", "Weber"],
    options_hi: ["वोल्ट", "ऐम्पियर", "टेस्ला", "वेबर"],
    answer: "Volt",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What happens when the magnetic flux passing through a coil changes?",
    question_hi: "जब एक कॉइल से होकर गुजरने वाला चुंबकीय फ्लक्स बदलता है, तो क्या होता है?",
    options_en: ["An emf is induced in the coil", "The coil becomes magnetized", "The current in the coil becomes constant", "The coil loses its resistance"],
    options_hi: ["कॉइल में एक ईएमएफ उत्तेजित होता है", "कॉइल चुंबकीय हो जाती है", "कॉइल में धारा स्थिर हो जाती है", "कॉइल अपनी प्रतिरोधकता खो देती है"],
    answer: "An emf is induced in the coil",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the phenomenon in which a changing magnetic field induces an electric current called?",
    question_hi: "वह घटनाक्रम जिसे बदलते चुंबकीय क्षेत्र से विद्युत धारा उत्पन्न होती है, क्या कहा जाता है?",
    options_en: ["Electromagnetic induction", "Magnetic induction", "Electrostatic induction", "Thermal induction"],
    options_hi: ["चुंबकीय प्रेरण", "चुंबकीय प्रेरण", "विद्युत-स्थैतिक प्रेरण", "उष्मा प्रेरण"],
    answer: "Electromagnetic induction",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the formula for the induced emf in a coil according to Faraday’s law?",
    question_hi: "फैराडे के नियम के अनुसार एक कॉइल में उत्तेजित ईएमएफ का सूत्र क्या है?",
    options_en: ["E = -dΦ/dt", "E = dΦ/dt", "E = Φ/dt", "E = Φ * dt"],
    options_hi: ["E = -dΦ/dt", "E = dΦ/dt", "E = Φ/dt", "E = Φ * dt"],
    answer: "E = -dΦ/dt",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the effect of increasing the number of turns in a coil on the induced emf?",
    question_hi: "एक कॉइल में घूर्णन की संख्या बढ़ाने का उत्तेजित ईएमएफ पर क्या प्रभाव पड़ता है?",
    options_en: ["Induced emf increases", "Induced emf decreases", "No effect on induced emf", "Induced emf becomes zero"],
    options_hi: ["उत्तेजित ईएमएफ बढ़ता है", "उत्तेजित ईएमएफ घटता है", "उत्तेजित ईएमएफ पर कोई प्रभाव नहीं पड़ता", "उत्तेजित ईएमएफ शून्य हो जाता है"],
    answer: "Induced emf increases",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What does the negative sign in Faraday’s law of induction represent?",
    question_hi: "फैराडे के प्रेरण नियम में ऋणात्मक चिह्न क्या दर्शाता है?",
    options_en: ["It represents the direction of the induced emf", "It represents the magnitude of the induced emf", "It represents the current in the coil", "It represents the rate of change of magnetic flux"],
    options_hi: ["यह उत्तेजित ईएमएफ की दिशा को दर्शाता है", "यह उत्तेजित ईएमएफ के परिमाण को दर्शाता है", "यह कॉइल में धारा को दर्शाता है", "यह चुंबकीय फ्लक्स में परिवर्तन की दर को दर्शाता है"],
    answer: "It represents the direction of the induced emf",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is self-induction?",
    question_hi: "स्वयं प्रेरण क्या है?",
    options_en: ["Induction of emf in a coil due to its own changing current", "Induction of emf in a coil due to external magnetic field", "Induction of emf due to thermal effects", "None of the above"],
    options_hi: ["कॉइल में ईएमएफ का उत्पन्न होना जो कि उसकी अपनी बदलती धारा के कारण होता है", "कॉइल में ईएमएफ का उत्पन्न होना जो बाहरी चुंबकीय क्षेत्र के कारण होता है", "उष्मीय प्रभावों के कारण ईएमएफ का उत्पन्न होना", "उपरोक्त में से कोई नहीं"],
    answer: "Induction of emf in a coil due to its own changing current",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "What is mutual induction?",
    question_hi: "आपसी प्रेरण क्या है?",
    options_en: ["Induction of emf in one coil due to the changing current in another coil", "Induction of emf in a coil due to its own changing current", "Induction of emf in a coil due to a moving magnetic field", "None of the above"],
    options_hi: ["एक कॉइल में ईएमएफ का उत्पन्न होना जो दूसरे कॉइल में बदलती धारा के कारण होता है", "कॉइल में ईएमएफ का उत्पन्न होना जो उसकी अपनी बदलती धारा के कारण होता है", "चुंबकीय क्षेत्र के बदलने से कॉइल में ईएमएफ का उत्पन्न होना", "उपरोक्त में से कोई नहीं"],
    answer: "Induction of emf in one coil due to the changing current in another coil",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What is the unit of inductance?",
    question_hi: "प्रेरणता की इकाई क्या है?",
    options_en: ["Henry", "Tesla", "Volt", "Ampere"],
    options_hi: ["हेनरी", "टेस्ला", "वोल्ट", "ऐम्पियर"],
    answer: "Henry",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the formula for the energy stored in an inductor?",
    question_hi: "एक इंडक्टर में संग्रहित ऊर्जा का सूत्र क्या है?",
    options_en: ["E = ½ L I²", "E = L I²", "E = ½ I²", "E = L I"],
    options_hi: ["E = ½ L I²", "E = L I²", "E = ½ I²", "E = L I"],
    answer: "E = ½ L I²",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "What is the frequency of an alternating current?",
    question_hi: "परिवर्तित धारा की आवृत्ति क्या होती है?",
    options_en: ["Number of cycles per second", "Number of cycles per minute", "Rate of change of current", "Rate of change of voltage"],
    options_hi: ["प्रति सेकंड के चक्रों की संख्या", "प्रति मिनट के चक्रों की संख्या", "धारा के परिवर्तन की दर", "वोल्टेज के परिवर्तन की दर"],
    answer: "Number of cycles per second",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What is the unit of frequency of alternating current?",
    question_hi: "परिवर्तित धारा की आवृत्ति की इकाई क्या है?",
    options_en: ["Hertz", "Tesla", "Volt", "Ampere"],
    options_hi: ["हर्ट्ज़", "टेस्ला", "वोल्ट", "ऐम्पियर"],
    answer: "Hertz",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which of the following is used to generate alternating current?",
    question_hi: "निम्नलिखित में से किसे परिवर्तित धारा उत्पन्न करने के लिए उपयोग किया जाता है?",
    options_en: ["Alternator", "Battery", "Resistor", "Capacitor"],
    options_hi: ["एल्युमिनेटर", "बैटरी", "प्रतिरोधक", "संवेदक"],
    answer: "Alternator",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the formula for the root mean square (RMS) value of alternating current?",
    question_hi: "परिवर्तित धारा के रूट मीन स्क्वायर (RMS) मान का सूत्र क्या है?",
    options_en: ["I₀ / √2", "I₀ * √2", "I₀", "2I₀"],
    options_hi: ["I₀ / √2", "I₀ * √2", "I₀", "2I₀"],
    answer: "I₀ / √2",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "In an alternating current circuit, what does the peak value represent?",
    question_hi: "परिवर्तित धारा परिपथ में, शिखर मान क्या दर्शाता है?",
    options_en: ["Maximum value of current", "Average value of current", "Minimum value of current", "RMS value of current"],
    options_hi: ["धारा का अधिकतम मान", "धारा का औसत मान", "धारा का न्यूनतम मान", "धारा का RMS मान"],
    answer: "Maximum value of current",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the formula for the average value of alternating current?",
    question_hi: "परिवर्तित धारा के औसत मान का सूत्र क्या है?",
    options_en: ["2I₀ / π", "I₀ / 2", "I₀ * π", "I₀ / √2"],
    options_hi: ["2I₀ / π", "I₀ / 2", "I₀ * π", "I₀ / √2"],
    answer: "2I₀ / π",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the primary function of a transformer?",
    question_hi: "एक ट्रांसफार्मर का मुख्य कार्य क्या है?",
    options_en: ["To change the voltage", "To change the current", "To change the power", "To store energy"],
    options_hi: ["वोल्टेज को बदलने के लिए", "धारा को बदलने के लिए", "शक्ति को बदलने के लिए", "ऊर्जा को संग्रहीत करने के लिए"],
    answer: "To change the voltage",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What is the principle behind a transformer?",
    question_hi: "ट्रांसफार्मर का सिद्धांत क्या है?",
    options_en: ["Electromagnetic induction", "Electrostatic induction", "Mechanical induction", "Magnetic induction"],
    options_hi: ["चुंबकीय प्रेरण", "विद्युत-स्थैतिक प्रेरण", "यांत्रिक प्रेरण", "चुंबकीय प्रेरण"],
    answer: "Electromagnetic induction",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which of the following is the main source of energy for an AC generator?",
    question_hi: "AC जनरेटर के लिए ऊर्जा का मुख्य स्रोत निम्नलिखित में से क्या है?",
    options_en: ["Mechanical energy", "Electrical energy", "Solar energy", "Chemical energy"],
    options_hi: ["यांत्रिक ऊर्जा", "विद्युत ऊर्जा", "सौर ऊर्जा", "रासायनिक ऊर्जा"],
    answer: "Mechanical energy",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What does an inductance coil do in an AC circuit?",
    question_hi: "AC परिपथ में एक प्रेरक कुंडली क्या करती है?",
    options_en: ["Resists changes in current", "Resists changes in voltage", "Stores electric charge", "Converts current to voltage"],
    options_hi: ["धारा में परिवर्तनों का विरोध करती है", "वोल्टेज में परिवर्तनों का विरोध करती है", "विद्युत आवेश संग्रहीत करती है", "धारा को वोल्टेज में बदलती है"],
    answer: "Resists changes in current",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "What is the formula for the energy stored in a capacitor?",
    question_hi: "एक संधारित्र में संग्रहित ऊर्जा का सूत्र क्या है?",
    options_en: ["E = ½ C V²", "E = C V²", "E = ½ L I²", "E = C I²"],
    options_hi: ["E = ½ C V²", "E = C V²", "E = ½ L I²", "E = C I²"],
    answer: "E = ½ C V²",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What is the time period of an alternating current?",
    question_hi: "परिवर्तित धारा का समयकाल क्या है?",
    options_en: ["Time taken for one complete cycle", "Time taken for half cycle", "Time taken for one second", "Time taken for one minute"],
    options_hi: ["एक पूर्ण चक्र के लिए लिया गया समय", "आधा चक्र के लिए लिया गया समय", "एक सेकंड के लिए लिया गया समय", "एक मिनट के लिए लिया गया समय"],
    answer: "Time taken for one complete cycle",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "In an AC circuit, the power factor is equal to:",
    question_hi: "AC परिपथ में, शक्ति गुणांक के बराबर होता है:",
    options_en: ["Cosine of the phase angle", "Sine of the phase angle", "Tangent of the phase angle", "Secant of the phase angle"],
    options_hi: ["चरण कोण का कोसाइन", "चरण कोण का साइन", "चरण कोण का टैनजेंट", "चरण कोण का सेकेंट"],
    answer: "Cosine of the phase angle",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What happens when the power factor of an AC circuit is zero?",
    question_hi: "जब AC परिपथ का शक्ति गुणांक शून्य होता है, तो क्या होता है?",
    options_en: ["The current and voltage are out of phase", "The current and voltage are in phase", "There is no current", "There is no voltage"],
    options_hi: ["धारा और वोल्टेज चरण से बाहर होते हैं", "धारा और वोल्टेज चरण में होते हैं", "कोई धारा नहीं होती", "कोई वोल्टेज नहीं होता"],
    answer: "The current and voltage are out of phase",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "In which type of transformer, the primary and secondary windings are not electrically connected?",
    question_hi: "किस प्रकार के ट्रांसफार्मर में, प्राथमिक और द्वितीयक कुंडलियाँ विद्युत रूप से जुड़ी नहीं होती हैं?",
    options_en: ["Isolation transformer", "Step-up transformer", "Step-down transformer", "Autotransformer"],
    options_hi: ["आइसोलेशन ट्रांसफार्मर", "स्टेप-अप ट्रांसफार्मर", "स्टेप-डाउन ट्रांसफार्मर", "ऑटोट्रांसफार्मर"],
    answer: "Isolation transformer",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which of the following is a characteristic of alternating current?",
    question_hi: "निम्नलिखित में से कौन सा परिवर्तित धारा का लक्षण है?",
    options_en: ["Direction of flow changes periodically", "Direction of flow remains constant", "Current flows in only one direction", "Current is constant"],
    options_hi: ["प्रवाह की दिशा समय-समय पर बदलती है", "प्रवाह की दिशा स्थिर रहती है", "धारा केवल एक दिशा में बहती है", "धारा स्थिर रहती है"],
    answer: "Direction of flow changes periodically",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "In a step-up transformer, which of the following is true?",
    question_hi: "एक स्टेप-अप ट्रांसफार्मर में, निम्नलिखित में से कौन सा सही है?",
    options_en: ["The secondary voltage is greater than the primary voltage", "The secondary voltage is less than the primary voltage", "The primary and secondary voltage are equal", "None of the above"],
    options_hi: ["द्वितीयक वोल्टेज प्राथमिक वोल्टेज से अधिक होता है", "द्वितीयक वोल्टेज प्राथमिक वोल्टेज से कम होता है", "प्राथमिक और द्वितीयक वोल्टेज समान होते हैं", "उपरोक्त में से कोई नहीं"],
    answer: "The secondary voltage is greater than the primary voltage",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is the function of a capacitor in an AC circuit?",
    question_hi: "AC परिपथ में संधारित्र का कार्य क्या है?",
    options_en: ["To store energy", "To regulate current", "To change current", "To change voltage"],
    options_hi: ["ऊर्जा संग्रहीत करने के लिए", "धारा को नियंत्रित करने के लिए", "धारा को बदलने के लिए", "वोल्टेज को बदलने के लिए"],
    answer: "To store energy",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "What happens in a circuit when the power factor is 1?",
    question_hi: "जब शक्ति गुणांक 1 होता है, तो परिपथ में क्या होता है?",
    options_en: ["The current and voltage are in phase", "The current and voltage are out of phase", "The circuit is open", "There is no current"],
    options_hi: ["धारा और वोल्टेज चरण में होते हैं", "धारा और वोल्टेज चरण से बाहर होते हैं", "परिपथ खुला होता है", "कोई धारा नहीं होती"],
    answer: "The current and voltage are in phase",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What is the purpose of a commutator in a DC motor?",
    question_hi: "DC मोटर में कम्युटेटर का उद्देश्य क्या है?",
    options_en: ["To reverse the direction of current", "To increase the voltage", "To store electrical energy", "To increase the current"],
    options_hi: ["धारा की दिशा को उलटने के लिए", "वोल्टेज बढ़ाने के लिए", "विद्युत ऊर्जा संग्रहीत करने के लिए", "धारा बढ़ाने के लिए"],
    answer: "To reverse the direction of current",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "In an AC circuit, which of the following components causes phase difference?",
    question_hi: "AC परिपथ में, निम्नलिखित में से कौन सा घटक चरण अंतर उत्पन्न करता है?",
    options_en: ["Inductor", "Capacitor", "Resistor", "Transformer"],
    options_hi: ["प्रेरक", "संधारित्र", "प्रतिरोधक", "ट्रांसफार्मर"],
    answer: "Inductor",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What is the formula for the inductive reactance in an AC circuit?",
    question_hi: "AC परिपथ में प्रेरक अभ्युत्थान का सूत्र क्या है?",
    options_en: ["Xₗ = 2πfL", "Xₗ = fL", "Xₗ = L²", "Xₗ = 1 / (2πfL)"],
    options_hi: ["Xₗ = 2πfL", "Xₗ = fL", "Xₗ = L²", "Xₗ = 1 / (2πfL)"],
    answer: "Xₗ = 2πfL",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What is the relationship between the current and voltage in an inductive AC circuit?",
    question_hi: "एक प्रेरक AC परिपथ में धारा और वोल्टेज के बीच क्या संबंध होता है?",
    options_en: ["Current lags voltage by 90 degrees", "Current leads voltage by 90 degrees", "Current and voltage are in phase", "Current and voltage are out of phase"],
    options_hi: ["धारा वोल्टेज से 90 डिग्री पीछे होती है", "धारा वोल्टेज से 90 डिग्री आगे होती है", "धारा और वोल्टेज चरण में होते हैं", "धारा और वोल्टेज चरण से बाहर होते हैं"],
    answer: "Current lags voltage by 90 degrees",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "What is the power factor in a purely inductive circuit?",
    question_hi: "एक पूरी तरह से प्रेरक परिपथ में शक्ति गुणांक क्या होता है?",
    options_en: ["Zero", "One", "Less than one", "More than one"],
    options_hi: ["शून्य", "एक", "एक से कम", "एक से अधिक"],
    answer: "Zero",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the main function of a choke in an AC circuit?",
    question_hi: "AC परिपथ में चोक का मुख्य कार्य क्या है?",
    options_en: ["To limit current", "To increase voltage", "To decrease frequency", "To store energy"],
    options_hi: ["धारा को सीमित करने के लिए", "वोल्टेज बढ़ाने के लिए", "आवृत्ति घटाने के लिए", "ऊर्जा संग्रहीत करने के लिए"],
    answer: "To limit current",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What is the formula for the capacitive reactance in an AC circuit?",
    question_hi: "AC परिपथ में संधारित्र अभ्युत्थान का सूत्र क्या है?",
    options_en: ["Xᶜ = 1 / 2πfC", "Xᶜ = fC", "Xᶜ = C²", "Xᶜ = 2πfC"],
    options_hi: ["Xᶜ = 1 / 2πfC", "Xᶜ = fC", "Xᶜ = C²", "Xᶜ = 2πfC"],
    answer: "Xᶜ = 1 / 2πfC",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "What happens in a purely capacitive circuit?",
    question_hi: "एक पूरी तरह से संधारित्र परिपथ में क्या होता है?",
    options_en: ["Current leads voltage by 90 degrees", "Current lags voltage by 90 degrees", "Current and voltage are in phase", "Current and voltage are out of phase"],
    options_hi: ["धारा वोल्टेज से 90 डिग्री आगे होती है", "धारा वोल्टेज से 90 डिग्री पीछे होती है", "धारा और वोल्टेज चरण में होते हैं", "धारा और वोल्टेज चरण से बाहर होते हैं"],
    answer: "Current leads voltage by 90 degrees",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the power factor in a purely capacitive circuit?",
    question_hi: "एक पूरी तरह से संधारित्र परिपथ में शक्ति गुणांक क्या होता है?",
    options_en: ["Zero", "One", "Less than one", "More than one"],
    options_hi: ["शून्य", "एक", "एक से कम", "एक से अधिक"],
    answer: "Zero",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which of the following statements is correct regarding an LCR series circuit?",
    question_hi: "LCR श्रृंखला परिपथ के बारे में निम्नलिखित में से कौन सा कथन सही है?",
    options_en: ["The total reactance is the sum of inductive and capacitive reactance", "The total reactance is the difference between inductive and capacitive reactance", "The current leads the voltage", "The voltage leads the current"],
    options_hi: ["कुल अभ्युत्थान प्रेरक और संधारित्र अभ्युत्थान का योग है", "कुल अभ्युत्थान प्रेरक और संधारित्र अभ्युत्थान के बीच अंतर है", "धारा वोल्टेज से आगे होती है", "वोल्टेज धारा से आगे होती है"],
    answer: "The total reactance is the sum of inductive and capacitive reactance",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What is the resonance frequency in an LCR circuit?",
    question_hi: "LCR परिपथ में अनुनाद आवृत्ति क्या होती है?",
    options_en: ["The frequency at which the total reactance is zero", "The frequency at which the current is minimum", "The frequency at which the voltage is maximum", "The frequency at which impedance is minimum"],
    options_hi: ["वह आवृत्ति जब कुल अभ्युत्थान शून्य होता है", "वह आवृत्ति जब धारा न्यूनतम होती है", "वह आवृत्ति जब वोल्टेज अधिकतम होता है", "वह आवृत्ति जब इम्पीडेंस न्यूनतम होता है"],
    answer: "The frequency at which the total reactance is zero",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the unit of inductance?",
    question_hi: "प्रेरण की इकाई क्या है?",
    options_en: ["Henry", "Ohm", "Farad", "Volt"],
    options_hi: ["हैन्की", "ओहम", "फैरेड", "वोल्ट"],
    answer: "Henry",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What happens at resonance in a series LCR circuit?",
    question_hi: "श्रृंखला LCR परिपथ में अनुनाद पर क्या होता है?",
    options_en: ["Impedance is minimum and current is maximum", "Impedance is maximum and current is minimum", "Impedance is minimum and voltage is maximum", "Impedance and current are equal"],
    options_hi: ["इम्पीडेंस न्यूनतम होता है और धारा अधिकतम होती है", "इम्पीडेंस अधिकतम होता है और धारा न्यूनतम होती है", "इम्पीडेंस न्यूनतम होता है और वोल्टेज अधिकतम होता है", "इम्पीडेंस और धारा समान होती हैं"],
    answer: "Impedance is minimum and current is maximum",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "In which type of circuit is the current always constant?",
    question_hi: "किस प्रकार के परिपथ में धारा हमेशा स्थिर रहती है?",
    options_en: ["DC circuit", "AC circuit", "LCR circuit", "Resonant circuit"],
    options_hi: ["DC परिपथ", "AC परिपथ", "LCR परिपथ", "अनुनाद परिपथ"],
    answer: "DC circuit",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the total energy in an LC circuit at resonance?",
    question_hi: "अनुनाद पर LC परिपथ में कुल ऊर्जा क्या होती है?",
    options_en: ["Maximum energy is stored", "No energy is stored", "Energy is distributed equally between L and C", "Energy is dissipated as heat"],
    options_hi: ["अधिकतम ऊर्जा संग्रहीत होती है", "कोई ऊर्जा संग्रहीत नहीं होती", "ऊर्जा L और C के बीच समान रूप से वितरित होती है", "ऊर्जा गर्मी के रूप में नष्ट होती है"],
    answer: "Maximum energy is stored",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What is the impedance at resonance in an LCR circuit?",
    question_hi: "LCR परिपथ में अनुनाद पर इम्पीडेंस क्या होता है?",
    options_en: ["Zero", "Maximum", "Minimum", "Infinite"],
    options_hi: ["शून्य", "अधिकतम", "न्यूनतम", "अनंत"],
    answer: "Minimum",
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

