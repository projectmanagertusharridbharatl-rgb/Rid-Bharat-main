const questions = [
    {
      num: 1,
      question_en: "Which particle is responsible for current in a conductor?",
      question_hi: "किस कण के कारण चालक में धारा प्रवाहित होती है?",
      options_en: ["Proton", "Neutron", "Electron", "Ion"],
      options_hi: ["प्रोटॉन", "न्यूट्रॉन", "इलेक्ट्रॉन", "आयन"],
      answer: "Electron",
      attempted: false,
      selected: ""
    },
    {
      num: 2,
      question_en: "The SI unit of electric charge is:",
      question_hi: "विद्युत आवेश की SI इकाई क्या है?",
      options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
      options_hi: ["कूलॉम्ब", "ऐम्पियर", "वोल्ट", "ओहम"],
      answer: "Coulomb",
      attempted: false,
      selected: ""
    },
    {
      num: 3,
      question_en: "What is the value of the current in a conductor with no potential difference across it?",
      question_hi: "ऐसे चालक में, जिसमें कोई विभवांतर न हो, धारा का मान क्या होगा?",
      options_en: ["Zero", "Infinity", "Depends on resistance", "Depends on voltage"],
      options_hi: ["शून्य", "अनंत", "प्रतिरोध पर निर्भर", "वोल्टेज पर निर्भर"],
      answer: "Zero",
      attempted: false,
      selected: ""
    },
    {
      num: 4,
      question_en: "What does Ohm’s Law state?",
      question_hi: "ओम का नियम क्या कहता है?",
      options_en: ["Voltage is inversely proportional to resistance", "Current is inversely proportional to voltage", "Current is directly proportional to voltage", "Resistance is directly proportional to voltage"],
      options_hi: ["वोल्टेज प्रतिरोध के व्युत्क्रमा अनुपाती है", "धारा वोल्टेज के व्युत्क्रमा अनुपाती है", "धारा वोल्टेज के प्रत्यक्ष अनुपाती है", "प्रतिरोध वोल्टेज के प्रत्यक्ष अनुपाती है"],
      answer: "Current is directly proportional to voltage",
      attempted: false,
      selected: ""
    },
    {
      num: 5,
      question_en: "Which of the following has the highest resistivity?",
      question_hi: "निम्न में से किसकी प्रतिरोधकता सबसे अधिक होती है?",
      options_en: ["Copper", "Aluminum", "Silver", "Rubber"],
      options_hi: ["ताम्बा", "एल्युमिनियम", "चांदी", "रबर"],
      answer: "Rubber",
      attempted: false,
      selected: ""
    },
    {
      num: 6,
      question_en: "What is the SI unit of electric current?",
      question_hi: "विद्युत धारा की SI इकाई क्या है?",
      options_en: ["Volt", "Ohm", "Ampere", "Coulomb"],
      options_hi: ["वोल्ट", "ओहम", "ऐम्पियर", "कूलॉम्ब"],
      answer: "Ampere",
      attempted: false,
      selected: ""
    },
    {
      num: 7,
      question_en: "What happens to the resistance of a conductor as temperature increases?",
      question_hi: "जब तापमान बढ़ता है तो चालक का प्रतिरोध क्या होता है?",
      options_en: ["Increases", "Decreases", "Remains constant", "Depends on the material"],
      options_hi: ["बढ़ता है", "घटता है", "स्थिर रहता है", "सामग्री पर निर्भर करता है"],
      answer: "Increases",
      attempted: false,
      selected: ""
    },
    {
      num: 8,
      question_en: "What is the total resistance in a series circuit?",
      question_hi: "श्रृंखला परिपथ में कुल प्रतिरोध क्या होगा?",
      options_en: ["Sum of all resistances", "Product of all resistances", "Average of all resistances", "None of the above"],
      options_hi: ["सभी प्रतिरोधों का योग", "सभी प्रतिरोधों का गुणनफल", "सभी प्रतिरोधों का औसत", "उपरोक्त में से कोई नहीं"],
      answer: "Sum of all resistances",
      attempted: false,
      selected: ""
    },
    {
      num: 9,
      question_en: "What is the relationship between power and current in an electrical circuit?",
      question_hi: "विद्युत परिपथ में शक्ति और धारा के बीच क्या संबंध है?",
      options_en: ["Power is inversely proportional to current", "Power is directly proportional to current", "Power is directly proportional to resistance", "Power is inversely proportional to resistance"],
      options_hi: ["शक्ति धारा के व्युत्क्रमा अनुपाती है", "शक्ति धारा के प्रत्यक्ष अनुपाती है", "शक्ति प्रतिरोध के प्रत्यक्ष अनुपाती है", "शक्ति प्रतिरोध के व्युत्क्रमा अनुपाती है"],
      answer: "Power is directly proportional to current",
      attempted: false,
      selected: ""
    },
    {
      num: 10,
      question_en: "What is the equivalent resistance of two resistors connected in parallel?",
      question_hi: "दो प्रतिरोधों के समानांतर कनेक्ट होने पर उनके समकक्ष प्रतिरोध का मान क्या होगा?",
      options_en: ["Sum of the resistances", "Product of the resistances", "1 / (1/R1 + 1/R2)", "R1 + R2"],
      options_hi: ["प्रतिरोधों का योग", "प्रतिरोधों का गुणनफल", "1 / (1/R1 + 1/R2)", "R1 + R2"],
      answer: "1 / (1/R1 + 1/R2)",
      attempted: false,
      selected: ""
    },
    {
      num: 11,
      question_en: "What is the unit of electric potential difference?",
      question_hi: "विद्युत विभवांतर की इकाई क्या है?",
      options_en: ["Ampere", "Volt", "Ohm", "Coulomb"],
      options_hi: ["ऐम्पियर", "वोल्ट", "ओहम", "कूलॉम्ब"],
      answer: "Volt",
      attempted: false,
      selected: ""
    },
    {
      num: 12,
      question_en: "What is the formula for Ohm's law?",
      question_hi: "ओम के नियम का सूत्र क्या है?",
      options_en: ["V = IR", "V = I/R", "V = R/I", "V = I + R"],
      options_hi: ["V = IR", "V = I/R", "V = R/I", "V = I + R"],
      answer: "V = IR",
      attempted: false,
      selected: ""
    },
    {
      num: 13,
      question_en: "What is the current through a 5Ω resistor if a potential difference of 10V is applied?",
      question_hi: "यदि 10V का विभवांतर लगाया जाए तो 5Ω प्रतिरोधक से होकर धारा का मान क्या होगा?",
      options_en: ["2 A", "5 A", "10 A", "50 A"],
      options_hi: ["2 A", "5 A", "10 A", "50 A"],
      answer: "2 A",
      attempted: false,
      selected: ""
    },
    {
      num: 14,
      question_en: "Which of the following is not a conductor?",
      question_hi: "निम्नलिखित में से कौन एक चालक नहीं है?",
      options_en: ["Copper", "Aluminum", "Silver", "Wood"],
      options_hi: ["ताम्बा", "एल्युमिनियम", "चांदी", "लकड़ी"],
      answer: "Wood",
      attempted: false,
      selected: ""
    },
    {
      num: 15,
      question_en: "The resistance of a wire depends on which of the following?",
      question_hi: "एक तार का प्रतिरोध निम्नलिखित में से किस पर निर्भर करता है?",
      options_en: ["Length of wire", "Cross-sectional area", "Material of wire", "All of the above"],
      options_hi: ["तार की लंबाई", "क्रॉस-सेक्शनल क्षेत्र", "तार की सामग्री", "उपरोक्त सभी"],
      answer: "All of the above",
      attempted: false,
      selected: ""
    },
    {
      num: 16,
      question_en: "What does a resistor do in a circuit?",
      question_hi: "परिपथ में प्रतिरोधक क्या कार्य करता है?",
      options_en: ["Reduces current", "Increases current", "Regulates voltage", "None of the above"],
      options_hi: ["धारा को कम करता है", "धारा को बढ़ाता है", "वोल्टेज को नियंत्रित करता है", "उपरोक्त में से कोई नहीं"],
      answer: "Reduces current",
      attempted: false,
      selected: ""
    },
    {
      num: 17,
      question_en: "Which of the following is a superconductor at low temperature?",
      question_hi: "निम्नलिखित में से कौन सा कम तापमान पर अधातुता प्रदर्शित करता है?",
      options_en: ["Copper", "Aluminum", "Lead", "Iron"],
      options_hi: ["ताम्बा", "एल्युमिनियम", "सीसा", "लोहा"],
      answer: "Lead",
      attempted: false,
      selected: ""
    },
    {
      num: 18,
      question_en: "In a parallel circuit, the total current is the:",
      question_hi: "समानांतर परिपथ में, कुल धारा क्या होगी?",
      options_en: ["Sum of individual currents", "Product of individual currents", "Average of individual currents", "None of the above"],
      options_hi: ["व्यक्तिगत धाराओं का योग", "व्यक्तिगत धाराओं का गुणनफल", "व्यक्तिगत धाराओं का औसत", "उपरोक्त में से कोई नहीं"],
      answer: "Sum of individual currents",
      attempted: false,
      selected: ""
    },
    {
      num: 19,
      question_en: "What is the formula to calculate power in an electrical circuit?",
      question_hi: "विद्युत परिपथ में शक्ति की गणना करने का सूत्र क्या है?",
      options_en: ["P = VI", "P = V/R", "P = I²R", "P = IR"],
      options_hi: ["P = VI", "P = V/R", "P = I²R", "P = IR"],
      answer: "P = VI",
      attempted: false,
      selected: ""
    },
    {
      num: 20,
      question_en: "The resistivity of a material is:",
      question_hi: "किसी सामग्री की प्रतिरोधकता क्या होती है?",
      options_en: ["Independently of temperature", "Directly proportional to temperature", "Inversely proportional to temperature", "None of the above"],
      options_hi: ["तापमान से स्वतंत्र", "तापमान के प्रत्यक्ष अनुपाती", "तापमान के व्युत्क्रमा अनुपाती", "उपरोक्त में से कोई नहीं"],
      answer: "Directly proportional to temperature",
      attempted: false,
      selected: ""
    },
    {
      num: 21,
      question_en: "What happens to the current when the voltage is doubled in a resistor?",
      question_hi: "जब प्रतिरोधक में वोल्टेज दोगुना हो जाता है तो धारा का क्या होता है?",
      options_en: ["It doubles", "It halves", "It remains constant", "It quadruples"],
      options_hi: ["यह दोगुना हो जाता है", "यह आधा हो जाता है", "यह स्थिर रहता है", "यह चौगुना हो जाता है"],
      answer: "It doubles",
      attempted: false,
      selected: ""
    },
    {
      num: 22,
      question_en: "What does a voltmeter measure?",
      question_hi: "वोल्टमीटर क्या मापता है?",
      options_en: ["Current", "Resistance", "Potential difference", "Power"],
      options_hi: ["धारा", "प्रतिरोध", "विभवांतर", "शक्ति"],
      answer: "Potential difference",
      attempted: false,
      selected: ""
    },
    {
      num: 23,
      question_en: "The total resistance in a parallel circuit is always:",
      question_hi: "समानांतर परिपथ में कुल प्रतिरोध हमेशा क्या होगा?",
      options_en: ["Greater than any of the individual resistances", "Less than any of the individual resistances", "Equal to the sum of the individual resistances", "None of the above"],
      options_hi: ["किसी भी व्यक्तिगत प्रतिरोध से अधिक", "किसी भी व्यक्तिगत प्रतिरोध से कम", "व्यक्तिगत प्रतिरोधों का योग के बराबर", "उपरोक्त में से कोई नहीं"],
      answer: "Less than any of the individual resistances",
      attempted: false,
      selected: ""
    },
    {
      num: 24,
      question_en: "Which of the following materials is the best conductor of electricity?",
      question_hi: "निम्नलिखित में से कौन सा सामग्री विद्युत का सबसे अच्छा चालक है?",
      options_en: ["Copper", "Iron", "Gold", "Silver"],
      options_hi: ["ताम्बा", "लोहा", "सोना", "चांदी"],
      answer: "Silver",
      attempted: false,
      selected: ""
    },
    {
      num: 25,
      question_en: "The resistivity of a material is independent of:",
      question_hi: "किसी सामग्री की प्रतिरोधकता निम्नलिखित में से किस से स्वतंत्र होती है?",
      options_en: ["Length", "Temperature", "Material", "Cross-sectional area"],
      options_hi: ["लंबाई", "तापमान", "सामग्री", "क्रॉस-सेक्शनल क्षेत्र"],
      answer: "Length",
      attempted: false,
      selected: ""
    },
    {
      num: 26,
      question_en: "What is the unit of electric power?",
      question_hi: "विद्युत शक्ति की इकाई क्या है?",
      options_en: ["Volt", "Ampere", "Watt", "Coulomb"],
      options_hi: ["वोल्ट", "ऐम्पियर", "वाट", "कूलॉम्ब"],
      answer: "Watt",
      attempted: false,
      selected: ""
    },
    {
      num: 27,
      question_en: "What is the relationship between voltage and current in an ideal conductor?",
      question_hi: "एक आदर्श चालक में वोल्टेज और धारा के बीच क्या संबंध है?",
      options_en: ["Voltage is proportional to current", "Voltage is inversely proportional to current", "Voltage is independent of current", "None of the above"],
      options_hi: ["वोल्टेज धारा के अनुपाती है", "वोल्टेज धारा के व्युत्क्रमा अनुपाती है", "वोल्टेज धारा से स्वतंत्र है", "उपरोक्त में से कोई नहीं"],
      answer: "Voltage is proportional to current",
      attempted: false,
      selected: ""
    },
    {
      num: 28,
      question_en: "What is the effect of temperature on the resistance of a conductor?",
      question_hi: "चालक के प्रतिरोध पर तापमान का क्या प्रभाव पड़ता है?",
      options_en: ["Resistance increases with temperature", "Resistance decreases with temperature", "Resistance remains constant", "Resistance is unaffected by temperature"],
      options_hi: ["प्रतिरोध तापमान के साथ बढ़ता है", "प्रतिरोध तापमान के साथ घटता है", "प्रतिरोध स्थिर रहता है", "तापमान से प्रतिरोध प्रभावित नहीं होता है"],
      answer: "Resistance increases with temperature",
      attempted: false,
      selected: ""
    },
    {
      num: 29,
      question_en: "Which of the following is a material that increases in resistance with an increase in temperature?",
      question_hi: "निम्नलिखित में से कौन सा सामग्री है जिसका प्रतिरोध तापमान बढ़ने के साथ बढ़ता है?",
      options_en: ["Copper", "Aluminum", "Iron", "Silver"],
      options_hi: ["ताम्बा", "एल्युमिनियम", "लोहा", "चांदी"],
      answer: "Iron",
      attempted: false,
      selected: ""
    },
    {
      num: 30,
      question_en: "What is the current in a 10Ω resistor when a voltage of 20V is applied?",
      question_hi: "20V का विभवांतर लगाए जाने पर 10Ω प्रतिरोधक से होकर धारा का मान क्या होगा?",
      options_en: ["2 A", "4 A", "5 A", "10 A"],
      options_hi: ["2 A", "4 A", "5 A", "10 A"],
      answer: "2 A",
      attempted: false,
      selected: ""
    },
    {
      num: 31,
      question_en: "What is the power consumed by a 5Ω resistor when a current of 2A flows through it?",
      question_hi: "यदि 2A की धारा 5Ω प्रतिरोधक से होकर बहती है, तो इसका शक्ति उपभोग कितना होगा?",
      options_en: ["5 W", "10 W", "20 W", "25 W"],
      options_hi: ["5 W", "10 W", "20 W", "25 W"],
      answer: "20 W",
      attempted: false,
      selected: ""
    },
    {
      num: 32,
      question_en: "What is the total resistance of two resistors of 3Ω and 6Ω connected in series?",
      question_hi: "यदि 3Ω और 6Ω के दो प्रतिरोधक श्रृंखला में जुड़े हों, तो उनका कुल प्रतिरोध कितना होगा?",
      options_en: ["3Ω", "6Ω", "9Ω", "18Ω"],
      options_hi: ["3Ω", "6Ω", "9Ω", "18Ω"],
      answer: "9Ω",
      attempted: false,
      selected: ""
    },
    {
      num: 33,
      question_en: "The resistance of a conductor is dependent on:",
      question_hi: "चालक का प्रतिरोध किस पर निर्भर करता है?",
      options_en: ["Length of the conductor", "Cross-sectional area", "Material of the conductor", "All of the above"],
      options_hi: ["चालक की लंबाई", "क्रॉस-सेक्शनल क्षेत्र", "चालक की सामग्री", "उपरोक्त सभी"],
      answer: "All of the above",
      attempted: false,
      selected: ""
    },
    {
      num: 34,
      question_en: "What happens to the total resistance when resistors are connected in parallel?",
      question_hi: "जब प्रतिरोधक समानांतर में जुड़े होते हैं, तो कुल प्रतिरोध में क्या बदलाव होता है?",
      options_en: ["It increases", "It decreases", "It remains the same", "It becomes infinite"],
      options_hi: ["यह बढ़ता है", "यह घटता है", "यह वही रहता है", "यह अनंत हो जाता है"],
      answer: "It decreases",
      attempted: false,
      selected: ""
    },
    {
      num: 35,
      question_en: "What is the power dissipated in a resistor when a current of 3A flows through it?",
      question_hi: "जब 3A की धारा प्रतिरोधक से होकर बहती है, तो उसमें कितनी शक्ति नष्ट होती है?",
      options_en: ["3W", "9W", "27W", "81W"],
      options_hi: ["3W", "9W", "27W", "81W"],
      answer: "9W",
      attempted: false,
      selected: ""
    },
    {
      num: 36,
      question_en: "What is the effect of resistance on the flow of current?",
      question_hi: "प्रतिरोध का धारा के प्रवाह पर क्या प्रभाव पड़ता है?",
      options_en: ["Higher resistance allows more current", "Higher resistance allows less current", "Resistance has no effect", "None of the above"],
      options_hi: ["ज्यादा प्रतिरोध अधिक धारा की अनुमति देता है", "ज्यादा प्रतिरोध कम धारा की अनुमति देता है", "प्रतिरोध का कोई प्रभाव नहीं होता", "उपरोक्त में से कोई नहीं"],
      answer: "Higher resistance allows less current",
      attempted: false,
      selected: ""
    },
    {
      num: 37,
      question_en: "Which of the following can reduce the resistance of a wire?",
      question_hi: "निम्नलिखित में से कौन सा तार के प्रतिरोध को कम कर सकता है?",
      options_en: ["Increasing its length", "Increasing its temperature", "Increasing its cross-sectional area", "Increasing its material resistivity"],
      options_hi: ["इसके लंबाई को बढ़ाना", "इसके तापमान को बढ़ाना", "इसके क्रॉस-सेक्शनल क्षेत्र को बढ़ाना", "इसके सामग्री की प्रतिरोधकता को बढ़ाना"],
      answer: "Increasing its cross-sectional area",
      attempted: false,
      selected: ""
    },
    {
      num: 38,
      question_en: "Which of the following materials has the lowest resistivity?",
      question_hi: "निम्नलिखित में से किस सामग्री की प्रतिरोधकता सबसे कम होती है?",
      options_en: ["Copper", "Iron", "Silver", "Aluminum"],
      options_hi: ["ताम्बा", "लोहा", "चांदी", "एल्युमिनियम"],
      answer: "Silver",
      attempted: false,
      selected: ""
    },
    {
      num: 39,
      question_en: "What is the formula to calculate the total resistance in a series circuit?",
      question_hi: "श्रृंखला परिपथ में कुल प्रतिरोध की गणना करने का सूत्र क्या है?",
      options_en: ["R = R1 + R2 + ... + Rn", "R = 1 / (1/R1 + 1/R2)", "R = I / V", "R = P / I²"],
      options_hi: ["R = R1 + R2 + ... + Rn", "R = 1 / (1/R1 + 1/R2)", "R = I / V", "R = P / I²"],
      answer: "R = R1 + R2 + ... + Rn",
      attempted: false,
      selected: ""
    },
    {
      num: 40,
      question_en: "What is the power dissipated in a 10Ω resistor when a current of 5A flows through it?",
      question_hi: "जब 5A की धारा 10Ω प्रतिरोधक से होकर बहती है, तो उसमें कितनी शक्ति नष्ट होती है?",
      options_en: ["50W", "100W", "200W", "250W"],
      options_hi: ["50W", "100W", "200W", "250W"],
      answer: "250W",
      attempted: false,
      selected: ""
    },
    {
      num: 41,
      question_en: "What is the effect of voltage on the flow of current in a conductor?",
      question_hi: "चालक में धारा के प्रवाह पर वोल्टेज का क्या प्रभाव पड़ता है?",
      options_en: ["Higher voltage results in higher current", "Higher voltage results in lower current", "Voltage has no effect on current", "None of the above"],
      options_hi: ["ज्यादा वोल्टेज से ज्यादा धारा होती है", "ज्यादा वोल्टेज से कम धारा होती है", "वोल्टेज का धारा पर कोई प्रभाव नहीं होता", "उपरोक्त में से कोई नहीं"],
      answer: "Higher voltage results in higher current",
      attempted: false,
      selected: ""
    },
    {
      num: 42,
      question_en: "What is the resistance of a 5Ω resistor in a parallel circuit with a 10Ω resistor?",
      question_hi: "10Ω प्रतिरोधक के साथ समानांतर परिपथ में 5Ω प्रतिरोधक का प्रतिरोध क्या होगा?",
      options_en: ["1.5Ω", "3.33Ω", "15Ω", "50Ω"],
      options_hi: ["1.5Ω", "3.33Ω", "15Ω", "50Ω"],
      answer: "3.33Ω",
      attempted: false,
      selected: ""
    },
    {
      num: 43,
      question_en: "What is the current in a 20Ω resistor when a potential difference of 100V is applied?",
      question_hi: "100V का विभवांतर लगाए जाने पर 20Ω प्रतिरोधक से होकर धारा का मान क्या होगा?",
      options_en: ["5 A", "2 A", "10 A", "4 A"],
      options_hi: ["5 A", "2 A", "10 A", "4 A"],
      answer: "5 A",
      attempted: false,
      selected: ""
    },
    {
      num: 44,
      question_en: "What happens to the resistance when the length of a wire is doubled?",
      question_hi: "यदि एक तार की लंबाई दोगुनी हो जाए, तो प्रतिरोध में क्या परिवर्तन होगा?",
      options_en: ["Resistance is halved", "Resistance doubles", "Resistance quadruples", "Resistance remains constant"],
      options_hi: ["प्रतिरोध आधा हो जाता है", "प्रतिरोध दोगुना हो जाता है", "प्रतिरोध चौगुना हो जाता है", "प्रतिरोध स्थिर रहता है"],
      answer: "Resistance doubles",
      attempted: false,
      selected: ""
    },
    {
      num: 45,
      question_en: "Which of the following is not a unit of power?",
      question_hi: "निम्नलिखित में से कौन शक्ति की इकाई नहीं है?",
      options_en: ["Watt", "Joule", "Volt", "Ampere"],
      options_hi: ["वाट", "जूल", "वोल्ट", "ऐम्पियर"],
      answer: "Volt",
      attempted: false,
      selected: ""
    },
    {
      num: 46,
      question_en: "Which of the following is true for a conductor?",
      question_hi: "निम्नलिखित में से कौन सा कथन चालक के लिए सही है?",
      options_en: ["Resistor obeys Ohm's law", "Resistance is independent of temperature", "Current is inversely proportional to resistance", "None of the above"],
      options_hi: ["प्रतिरोधक ओहम के नियम का पालन करता है", "प्रतिरोध तापमान से स्वतंत्र होता है", "धारा प्रतिरोध के व्युत्क्रमा अनुपाती होती है", "उपरोक्त में से कोई नहीं"],
      answer: "Resistor obeys Ohm's law",
      attempted: false,
      selected: ""
    },
    {
      num: 47,
      question_en: "What happens to the total resistance when resistors are connected in series?",
      question_hi: "जब प्रतिरोधक श्रृंखला में जुड़े होते हैं, तो कुल प्रतिरोध में क्या परिवर्तन होता है?",
      options_en: ["It decreases", "It increases", "It remains the same", "None of the above"],
      options_hi: ["यह घटता है", "यह बढ़ता है", "यह वही रहता है", "उपरोक्त में से कोई नहीं"],
      answer: "It increases",
      attempted: false,
      selected: ""
    },
    {
      num: 48,
      question_en: "What is the resistance of a 10Ω resistor in a parallel circuit with a 10Ω resistor?",
      question_hi: "10Ω प्रतिरोधक के साथ समानांतर परिपथ में 10Ω प्रतिरोधक का प्रतिरोध क्या होगा?",
      options_en: ["5Ω", "10Ω", "15Ω", "20Ω"],
      options_hi: ["5Ω", "10Ω", "15Ω", "20Ω"],
      answer: "5Ω",
      attempted: false,
      selected: ""
    },
    {
      num: 49,
      question_en: "What is the power dissipated in a resistor if the current is doubled?",
      question_hi: "यदि धारा को दोगुना कर दिया जाए तो प्रतिरोधक में कितनी शक्ति नष्ट होगी?",
      options_en: ["The power remains the same", "The power doubles", "The power quadruples", "The power is halved"],
      options_hi: ["शक्ति वही रहती है", "शक्ति दोगुनी हो जाती है", "शक्ति चौगुनी हो जाती है", "शक्ति आधी हो जाती है"],
      answer: "The power quadruples",
      attempted: false,
      selected: ""
    },
    {
      num: 50,
      question_en: "What is the formula for calculating the power dissipated in a resistor?",
      question_hi: "प्रतिरोधक में नष्ट होने वाली शक्ति की गणना करने का सूत्र क्या है?",
      options_en: ["P = I²R", "P = V²R", "P = IV", "All of the above"],
      options_hi: ["P = I²R", "P = V²R", "P = IV", "उपरोक्त सभी"],
      answer: "All of the above",
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
