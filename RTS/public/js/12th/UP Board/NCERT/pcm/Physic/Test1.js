const questions = [
  {
    num: 1,
    question_en: "What is the SI unit of electric charge?",
    question_hi: "विद्युत आवेश की एसआई इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलॉम्ब", "एम्पीयर", "वोल्ट", "ओम"],
    answer: "Coulomb",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which law states that the current through a conductor is directly proportional to the voltage?",
    question_hi: "कौन सा नियम कहता है कि चालक में प्रवाहित धारा वोल्टेज के सीधे अनुपात में होती है?",
    options_en: ["Faraday's Law", "Ohm's Law", "Ampere's Law", "Kirchhoff's Law"],
    options_hi: ["फैरेडे का नियम", "ओम का नियम", "एम्पीयर का नियम", "किर्शहॉफ का नियम"],
    answer: "Ohm's Law",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "The unit of magnetic flux is:",
    question_hi: "चुंबकीय फ्लक्स की इकाई क्या है?",
    options_en: ["Weber", "Tesla", "Gauss", "Henry"],
    options_hi: ["वेबर", "टेस्ला", "गॉस", "हेनरी"],
    answer: "Weber",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "A transformer works on the principle of:",
    question_hi: "ट्रांसफार्मर किस सिद्धांत पर कार्य करता है?",
    options_en: ["Ohm’s Law", "Mutual Induction", "Self Induction", "Capacitance"],
    options_hi: ["ओम का नियम", "पारस्परिक प्रेरण", "स्व प्रेरण", "धारिता"],
    answer: "Mutual Induction",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which of the following has the highest refractive index?",
    question_hi: "निम्न में से किसका अपवर्तनांक सबसे अधिक होता है?",
    options_en: ["Water", "Air", "Glass", "Diamond"],
    options_hi: ["पानी", "हवा", "कांच", "हीरा"],
    answer: "Diamond",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which particle is responsible for current in a conductor?",
    question_hi: "किस कण के कारण चालक में धारा प्रवाहित होती है?",
    options_en: ["Proton", "Neutron", "Electron", "Ion"],
    options_hi: ["प्रोटॉन", "न्यूट्रॉन", "इलेक्ट्रॉन", "आयन"],
    answer: "Electron",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which of the following is not a vector quantity?",
    question_hi: "निम्न में से कौन सदिश राशि नहीं है?",
    options_en: ["Electric field", "Magnetic field", "Electric potential", "Force"],
    options_hi: ["विद्युत क्षेत्र", "चुंबकीय क्षेत्र", "विद्युत विभव", "बल"],
    answer: "Electric potential",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "The direction of electric field lines is:",
    question_hi: "विद्युत क्षेत्र रेखाओं की दिशा होती है:",
    options_en: ["From negative to positive", "Circular", "From positive to negative", "Random"],
    options_hi: ["ऋणात्मक से धनात्मक", "वृत्ताकार", "धनात्मक से ऋणात्मक", "यादृच्छिक"],
    answer: "From positive to negative",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which rule is used to determine the direction of induced current?",
    question_hi: "प्रेरित धारा की दिशा ज्ञात करने के लिए कौन सा नियम प्रयोग किया जाता है?",
    options_en: ["Ohm’s law", "Lenz’s law", "Faraday’s law", "Kirchhoff’s rule"],
    options_hi: ["ओम का नियम", "लेन्ज़ का नियम", "फैरेडे का नियम", "किर्शहॉफ का नियम"],
    answer: "Lenz’s law",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which of the following is used to produce electric power in a generator?",
    question_hi: "जेनरेटर में विद्युत शक्ति उत्पन्न करने के लिए निम्न में से क्या प्रयोग किया जाता है?",
    options_en: ["Capacitance", "Magnetism", "Resistance", "Reactance"],
    options_hi: ["धारिता", "चुंबकत्व", "प्रतिरोध", "प्रतिक्रिया"],
    answer: "Magnetism",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which physical quantity is conserved in an LC oscillation?",
    question_hi: "LC दोलन में कौन सी भौतिक राशि संरक्षित रहती है?",
    options_en: ["Charge", "Magnetic field", "Total energy", "Voltage"],
    options_hi: ["आवेश", "चुंबकीय क्षेत्र", "कुल ऊर्जा", "वोल्टेज"],
    answer: "Total energy",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "The unit of capacitance is:",
    question_hi: "धारिता की इकाई क्या है?",
    options_en: ["Farad", "Coulomb", "Henry", "Volt"],
    options_hi: ["फैराड", "कूलॉम्ब", "हेनरी", "वोल्ट"],
    answer: "Farad",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "The magnetic field inside a long solenoid is:",
    question_hi: "एक लंबे सोलनॉइड के भीतर चुंबकीय क्षेत्र होता है:",
    options_en: ["Zero", "Non-uniform", "Uniform", "Circular"],
    options_hi: ["शून्य", "असमान", "समान", "वृत्ताकार"],
    answer: "Uniform",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Light behaves as a particle in:",
    question_hi: "प्रकाश कण के रूप में व्यवहार करता है:",
    options_en: ["Interference", "Diffraction", "Photoelectric effect", "Polarization"],
    options_hi: ["हस्तक्षेप", "प्रकीर्णन", "प्रकाश विद्युत प्रभाव", "ध्रुवण"],
    answer: "Photoelectric effect",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "The speed of light in vacuum is:",
    question_hi: "निर्वात में प्रकाश की गति होती है:",
    options_en: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁵ m/s"],
    options_hi: ["3 × 10⁶ मी/से", "3 × 10⁸ मी/से", "3 × 10¹⁰ मी/से", "3 × 10⁵ मी/से"],
    answer: "3 × 10⁸ m/s",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "The minimum energy needed to remove an electron from a metal surface is:",
    question_hi: "धातु की सतह से इलेक्ट्रॉन को हटाने के लिए आवश्यक न्यूनतम ऊर्जा क्या कहलाती है?",
    options_en: ["Ionization energy", "Threshold energy", "Binding energy", "Work function"],
    options_hi: ["आयनन ऊर्जा", "थ्रेशहोल्ड ऊर्जा", "बंधन ऊर्जा", "वर्क फंक्शन"],
    answer: "Work function",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which of the following particles has zero rest mass?",
    question_hi: "निम्न में से किस कण का विश्राम द्रव्यमान शून्य होता है?",
    options_en: ["Electron", "Proton", "Neutron", "Photon"],
    options_hi: ["इलेक्ट्रॉन", "प्रोटॉन", "न्यूट्रॉन", "फोटॉन"],
    answer: "Photon",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which of the following is not a property of electromagnetic waves?",
    question_hi: "निम्न में से कौन विद्युतचुंबकीय तरंगों का गुण नहीं है?",
    options_en: ["They are transverse", "They require a medium", "They travel at the speed of light", "They consist of oscillating electric and magnetic fields"],
    options_hi: ["वे अनुप्रस्थ होती हैं", "उन्हें माध्यम की आवश्यकता होती है", "वे प्रकाश की गति से यात्रा करती हैं", "वे दोलनशील विद्युत और चुंबकीय क्षेत्रों से बनी होती हैं"],
    answer: "They require a medium",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Who discovered the photoelectric effect?",
    question_hi: "प्रकाश विद्युत प्रभाव की खोज किसने की थी?",
    options_en: ["Newton", "Planck", "Einstein", "Bohr"],
    options_hi: ["न्यूटन", "प्लैंक", "आइंस्टीन", "बोर"],
    answer: "Einstein",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "A device that converts AC to DC is called:",
    question_hi: "AC को DC में बदलने वाले यंत्र को क्या कहते हैं?",
    options_en: ["Amplifier", "Rectifier", "Oscillator", "Transformer"],
    options_hi: ["एम्प्लीफायर", "रेक्टिफायर", "दोलक", "ट्रांसफार्मर"],
    answer: "Rectifier",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which color of light has the shortest wavelength?",
    question_hi: "किस रंग की प्रकाश की तरंग दैर्ध्य सबसे कम होती है?",
    options_en: ["Red", "Blue", "Green", "Violet"],
    options_hi: ["लाल", "नीला", "हरा", "बैंगनी"],
    answer: "Violet",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "In a nuclear reactor, the material used to slow down neutrons is called:",
    question_hi: "नाभिकीय रिएक्टर में न्यूट्रॉन को धीमा करने के लिए प्रयुक्त पदार्थ को क्या कहते हैं?",
    options_en: ["Moderator", "Control rod", "Coolant", "Fuel"],
    options_hi: ["मॉडरेटर", "नियंत्रण छड़", "शीतलक", "ईंधन"],
    answer: "Moderator",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which radiation has the highest penetrating power?",
    question_hi: "किस विकिरण की प्रवेश शक्ति सबसे अधिक होती है?",
    options_en: ["Alpha", "Beta", "Gamma", "X-ray"],
    options_hi: ["अल्फा", "बीटा", "गामा", "एक्स-रे"],
    answer: "Gamma",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Who proposed the wave theory of matter?",
    question_hi: "पदार्थ की तरंग सिद्धांत किसने प्रस्तुत की?",
    options_en: ["Einstein", "Heisenberg", "Bohr", "de Broglie"],
    options_hi: ["आइंस्टीन", "हाइजेनबर्ग", "बोर", "डी ब्रॉग्ली"],
    answer: "de Broglie",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which of the following quantities is always conserved in a nuclear reaction?",
    question_hi: "नाभिकीय अभिक्रिया में कौन सी राशि हमेशा संरक्षित रहती है?",
    options_en: ["Atomic number", "Mass", "Mass-energy", "Neutron number"],
    options_hi: ["परमाणु संख्या", "द्रव्यमान", "द्रव्यमान-ऊर्जा", "न्यूट्रॉन संख्या"],
    answer: "Mass-energy",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "What is the SI unit of resistance?",
    question_hi: "प्रतिरोध की SI इकाई क्या है?",
    options_en: ["Ohm", "Ampere", "Volt", "Watt"],
    options_hi: ["ओम", "एम्पीयर", "वोल्ट", "वाट"],
    answer: "Ohm",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which device is used to measure electric current?",
    question_hi: "विद्युत धारा मापने के लिए किस यंत्र का उपयोग होता है?",
    options_en: ["Voltmeter", "Ammeter", "Galvanometer", "Wattmeter"],
    options_hi: ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "वाटमीटर"],
    answer: "Ammeter",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which fundamental force is responsible for binding protons and neutrons?",
    question_hi: "प्रोटॉन और न्यूट्रॉन को बांधने वाला मूलभूत बल कौन सा है?",
    options_en: ["Gravitational", "Electromagnetic", "Strong nuclear", "Weak nuclear"],
    options_hi: ["गुरुत्वाकर्षण", "विद्युतचुंबकीय", "सुदृढ़ नाभिकीय", "दुर्बल नाभिकीय"],
    answer: "Strong nuclear",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which instrument is used to detect radiation?",
    question_hi: "किस यंत्र का प्रयोग विकिरण को मापने के लिए किया जाता है?",
    options_en: ["Thermometer", "Spectrometer", "Barometer", "Geiger-Müller counter"],
    options_hi: ["थर्मामीटर", "स्पेक्ट्रोमीटर", "बैरोमीटर", "गाइगर-म्यूलर काउंटर"],
    answer: "Geiger-Müller counter",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which of the following waves is used in microwave ovens?",
    question_hi: "माइक्रोवेव ओवन में कौन सी तरंगें प्रयोग की जाती हैं?",
    options_en: ["Infrared", "Microwaves", "Ultraviolet", "X-rays"],
    options_hi: ["इन्फ्रारेड", "माइक्रोवेव", "अल्ट्रावायलेट", "एक्स-रे"],
    answer: "Microwaves",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which phenomenon explains the blue color of the sky?",
    question_hi: "आकाश का नीला रंग किस परिघटना के कारण होता है?",
    options_en: ["Reflection", "Refraction", "Scattering", "Diffraction"],
    options_hi: ["परावर्तन", "अपवर्तन", "प्रकीर्णन", "विचलन"],
    answer: "Scattering",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which mirror is used in a car’s rear-view mirror?",
    question_hi: "कार के पीछे देखने वाले दर्पण में कौन सा दर्पण प्रयोग किया जाता है?",
    options_en: ["Concave", "Convex", "Plane", "None of these"],
    options_hi: ["अवतल", "उत्तल", "समतल", "इनमें से कोई नहीं"],
    answer: "Convex",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which law is used to find the direction of magnetic field around a current-carrying conductor?",
    question_hi: "धारा वहन करने वाले चालक के चारों ओर चुंबकीय क्षेत्र की दिशा ज्ञात करने के लिए कौन सा नियम प्रयोग किया जाता है?",
    options_en: ["Lenz’s Law", "Right Hand Rule", "Coulomb’s Law", "Faraday’s Law"],
    options_hi: ["लेन्ज़ का नियम", "दायाँ हाथ नियम", "कूलॉम्ब का नियम", "फैरेडे का नियम"],
    answer: "Right Hand Rule",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which quantity remains unchanged in uniform circular motion?",
    question_hi: "समान वृत्तीय गति में कौन सी राशि अपरिवर्तित रहती है?",
    options_en: ["Velocity", "Acceleration", "Speed", "Force"],
    options_hi: ["वेग", "त्वरण", "गति", "बल"],
    answer: "Speed",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "In which medium does light travel the fastest?",
    question_hi: "किस माध्यम में प्रकाश सबसे तेज गति से चलता है?",
    options_en: ["Water", "Glass", "Air", "Vacuum"],
    options_hi: ["पानी", "कांच", "हवा", "निर्वात"],
    answer: "Vacuum",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "The device used to split white light into its components is called:",
    question_hi: "श्वेत प्रकाश को उसके घटकों में विभाजित करने वाला यंत्र कहलाता है:",
    options_en: ["Mirror", "Lens", "Grating", "Prism"],
    options_hi: ["दर्पण", "लेंस", "जालिका", "प्रिज्म"],
    answer: "Prism",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "The unit of magnetic field strength is:",
    question_hi: "चुंबकीय क्षेत्र की तीव्रता की इकाई है:",
    options_en: ["Tesla", "Newton", "Weber", "Volt"],
    options_hi: ["टेस्ला", "न्यूटन", "वेबर", "वोल्ट"],
    answer: "Tesla",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "A transformer works on the principle of:",
    question_hi: "ट्रांसफार्मर किस सिद्धांत पर कार्य करता है?",
    options_en: ["Electrostatics", "Magnetic field", "Electromagnetic induction", "Current conduction"],
    options_hi: ["स्थैतिक विद्युत", "चुंबकीय क्षेत्र", "विद्युत चुंबकीय प्रेरण", "धारा प्रवाह"],
    answer: "Electromagnetic induction",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which of the following is not a unit of energy?",
    question_hi: "निम्न में से कौन ऊर्जा की इकाई नहीं है?",
    options_en: ["Joule", "Calorie", "Watt", "kWh"],
    options_hi: ["जूल", "कैलोरी", "वाट", "किलोवाट-घंटा"],
    answer: "Watt",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which physical quantity is expressed as work done per unit charge?",
    question_hi: "प्रति इकाई आवेश किया गया कार्य किस भौतिक राशि को दर्शाता है?",
    options_en: ["Electric field", "Electric potential", "Current", "Voltage"],
    options_hi: ["विद्युत क्षेत्र", "विद्युत विभव", "धारा", "वोल्टेज"],
    answer: "Electric potential",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Who discovered electromagnetic waves?",
    question_hi: "विद्युत चुंबकीय तरंगों की खोज किसने की थी?",
    options_en: ["Maxwell", "Newton", "Faraday", "Hertz"],
    options_hi: ["मैक्सवेल", "न्यूटन", "फैरेडे", "हर्ट्ज़"],
    answer: "Hertz",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "What is the angle of reflection equal to?",
    question_hi: "परावर्तन कोण किसके बराबर होता है?",
    options_en: ["Angle of incidence", "Refracted angle", "Normal angle", "90 degrees"],
    options_hi: ["आपतन कोण", "अपवर्तित कोण", "लंब कोण", "90 डिग्री"],
    answer: "Angle of incidence",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which particle deflects most in electric field?",
    question_hi: "विद्युत क्षेत्र में कौन सा कण सबसे अधिक विचलित होता है?",
    options_en: ["Proton", "Electron", "Neutron", "Alpha particle"],
    options_hi: ["प्रोटॉन", "इलेक्ट्रॉन", "न्यूट्रॉन", "अल्फा कण"],
    answer: "Electron",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "SI unit of power is:",
    question_hi: "शक्ति की SI इकाई क्या है?",
    options_en: ["Joule", "Watt", "Newton", "Ohm"],
    options_hi: ["जूल", "वाट", "न्यूटन", "ओम"],
    answer: "Watt",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which of the following lenses is used to correct myopia?",
    question_hi: "निकट दृष्टि दोष को सुधारने के लिए कौन सा लेंस प्रयोग किया जाता है?",
    options_en: ["Convex", "Concave", "Bifocal", "Cylindrical"],
    options_hi: ["उत्तल", "अवतल", "द्विवंकीय", "बेलनाकार"],
    answer: "Concave",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which component of the atom was discovered first?",
    question_hi: "परमाणु का सबसे पहले खोजा गया घटक कौन सा था?",
    options_en: ["Neutron", "Electron", "Proton", "Nucleus"],
    options_hi: ["न्यूट्रॉन", "इलेक्ट्रॉन", "प्रोटॉन", "नाभिक"],
    answer: "Electron",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which among the following has the highest frequency?",
    question_hi: "निम्न में से किसकी आवृत्ति सबसे अधिक होती है?",
    options_en: ["Radio waves", "Ultraviolet", "Gamma rays", "Microwaves"],
    options_hi: ["रेडियो तरंगें", "अल्ट्रावायलेट", "गामा किरणें", "माइक्रोवेव"],
    answer: "Gamma rays",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "What is the function of a fuse in an electric circuit?",
    question_hi: "विद्युत परिपथ में फ्यूज का कार्य क्या होता है?",
    options_en: ["Increase current", "Decrease resistance", "Protect circuit", "Store energy"],
    options_hi: ["धारा बढ़ाना", "प्रतिरोध घटाना", "परिपथ की सुरक्षा करना", "ऊर्जा संग्रहीत करना"],
    answer: "Protect circuit",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which scientist discovered X-rays?",
    question_hi: "X-किरणों की खोज किस वैज्ञानिक ने की थी?",
    options_en: ["Rutherford", "Roentgen", "Bohr", "Curie"],
    options_hi: ["रदरफोर्ड", "रोएंटजन", "बोर", "क्यूरी"],
    answer: "Roentgen",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property of a wave is changed in amplitude modulation?",
    question_hi: "आयाम परावर्तन में तरंग की कौन सी विशेषता बदली जाती है?",
    options_en: ["Frequency", "Amplitude", "Phase", "Speed"],
    options_hi: ["आवृत्ति", "आयाम", "चरण", "गति"],
    answer: "Amplitude",
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
