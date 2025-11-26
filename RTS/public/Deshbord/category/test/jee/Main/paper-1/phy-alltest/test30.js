const questions = [
  {
    num: 1,
    question_en: "Faraday's law states that induced emf is proportional to:",
    question_hi:
      "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    options_en: [
      "Rate of change of magnetic flux",
      "Magnetic flux itself",
      "Square of current",
      "Resistance of coil",
    ],
    options_hi: [
      "Rate of change of magnetic flux",
      "Magnetic flux itself",
      "Square of current",
      "Resistance of coil",
    ],
    answer_en: "Rate of change of magnetic flux",
    answer_hi: "Rate of change of magnetic flux",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "A net force acts on a mass 6 kg producing acceleration 2 m/s². The force is:",
    question_hi: "6 kg द्रव्यमान पर 2 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["4 N", "24 N", "12 N", "8 N"],
    options_hi: ["4 N", "24 N", "12 N", "8 N"],
    answer_en: "12 N",
    answer_hi: "12 N",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["3.0e9 m/s", "1.5e8 m/s", "3.0e7 m/s", "299863380 m/s"],
    options_hi: ["3.0e9 m/s", "1.5e8 m/s", "3.0e7 m/s", "299863380 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "Capacitors 5 μF and 10 μF in parallel. Equivalent capacitance:",
    question_hi: "5 μF और 10 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["3.33 μF", "15 μF", "50 μF", "10 μF"],
    options_hi: ["3.33 μF", "15 μF", "50 μF", "10 μF"],
    answer_en: "15 μF",
    answer_hi: "15 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en:
      "Two resistors 6 Ω and 4 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 6 Ω और 4 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["10 Ω", "2.4 Ω", "4 Ω", "24 Ω"],
    options_hi: ["10 Ω", "2.4 Ω", "4 Ω", "24 Ω"],
    answer_en: "2.4 Ω",
    answer_hi: "2.4 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=7.00e+14 Hz and incident frequency f=7.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=7.00e+14 Hz और आपतित आवृत्ति f=7.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Maximum KE",
      "Cannot say",
      "No emission",
      "Electrons just emitted (zero KE)",
    ],
    options_hi: [
      "Maximum KE",
      "Cannot say",
      "No emission",
      "Electrons just emitted (zero KE)",
    ],
    answer_en: "Electrons just emitted (zero KE)",
    answer_hi: "Electrons just emitted (zero KE)",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "A car travels 53 km at 54 km/h and then 58 km at 71 km/h. The average speed is:",
    question_hi:
      "एक कार 54 km/h की गति से 53 km और फिर 71 km/h से 58 km चलती है। औसत वेग है:",
    options_en: ["61.7 km/h", "62.5 km/h", "71 km/h", "54 km/h"],
    options_hi: ["61.7 km/h", "62.5 km/h", "71 km/h", "54 km/h"],
    answer_en: "61.7 km/h",
    answer_hi: "61.7 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Two resistors 8 Ω and 6 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 8 Ω और 6 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["48 Ω", "3.43 Ω", "8 Ω", "14 Ω"],
    options_hi: ["48 Ω", "3.43 Ω", "8 Ω", "14 Ω"],
    answer_en: "14 Ω",
    answer_hi: "14 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en:
      "Nucleus with mass number A=36. Approx total binding energy (avg 8.1 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=36 वाले नाभिक की कुल बंधन ऊर्जा (औसत 8.1 MeV/न्यूक्लिओन):",
    options_en: ["146.3 MeV", "292.6 MeV", "302.6 MeV", "8.1 MeV"],
    options_hi: ["146.3 MeV", "292.6 MeV", "302.6 MeV", "8.1 MeV"],
    answer_en: "292.6 MeV",
    answer_hi: "292.6 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "A net force acts on a mass 7 kg producing acceleration 4 m/s². The force is:",
    question_hi: "7 kg द्रव्यमान पर 4 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["3 N", "28 N", "11 N", "112 N"],
    options_hi: ["3 N", "28 N", "11 N", "112 N"],
    answer_en: "28 N",
    answer_hi: "28 N",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en:
      "A net force acts on a mass 4 kg producing acceleration 6 m/s². The force is:",
    question_hi: "4 kg द्रव्यमान पर 6 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["10 N", "24 N", "144 N", "-2 N"],
    options_hi: ["10 N", "24 N", "144 N", "-2 N"],
    answer_en: "24 N",
    answer_hi: "24 N",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Ideal gas: P=100000 Pa, V=0.04 m³, n=3 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=100000 Pa, V=0.04 m³, n=3 mol. तापमान है:",
    options_en: ["160.4 K", "4000.0", "320.9 K", "80.2 K"],
    options_hi: ["160.4 K", "4000.0", "320.9 K", "80.2 K"],
    answer_en: "160.4 K",
    answer_hi: "160.4 K",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "A resistor 6 Ω connected to 7 V. Current is:",
    question_hi: "6 Ω प्रतिरोधक को 7 V से जोड़ा। धारा है:",
    options_en: ["1.17 A", "0.58 A", "0.86 A", "42 A"],
    options_hi: ["1.17 A", "0.58 A", "0.86 A", "42 A"],
    answer_en: "1.17 A",
    answer_hi: "1.17 A",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Time to fall freely from height 56 m (g=10 m/s²) is:",
    question_hi: "56 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["6.69 s", "2.37 s", "1.67 s", "3.35 s"],
    options_hi: ["6.69 s", "2.37 s", "1.67 s", "3.35 s"],
    answer_en: "3.35 s",
    answer_hi: "3.35 s",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Ideal gas: P=200000 Pa, V=0.03 m³, n=2 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=200000 Pa, V=0.03 m³, n=2 mol. तापमान है:",
    options_en: ["722.0 K", "180.5 K", "6000.0", "361.0 K"],
    options_hi: ["722.0 K", "180.5 K", "6000.0", "361.0 K"],
    answer_en: "361.0 K",
    answer_hi: "361.0 K",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "A constant force 29 N acts over displacement 3 m. Work done is:",
    question_hi:
      "29 N का नियत बल 3 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["32 J", "9.7 J", "87 J", "43.5 J"],
    options_hi: ["32 J", "9.7 J", "87 J", "43.5 J"],
    answer_en: "87 J",
    answer_hi: "87 J",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "A resistor 5 Ω connected to 10 V. Current is:",
    question_hi: "5 Ω प्रतिरोधक को 10 V से जोड़ा। धारा है:",
    options_en: ["50 A", "1.0 A", "0.50 A", "2.0 A"],
    options_hi: ["50 A", "1.0 A", "0.50 A", "2.0 A"],
    answer_en: "2.0 A",
    answer_hi: "2.0 A",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "A net force acts on a mass 4 kg producing acceleration 9 m/s². The force is:",
    question_hi: "4 kg द्रव्यमान पर 9 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["-5 N", "324 N", "36 N", "13 N"],
    options_hi: ["-5 N", "324 N", "36 N", "13 N"],
    answer_en: "36 N",
    answer_hi: "36 N",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Fleming's left-hand rule is used to find the direction of:",
    question_hi:
      "फ्लेमिंग का बायाँ हाथ नियम किस दिशा को ज्ञात करने के लिए उपयोग होता है?",
    options_en: [
      "Induced current",
      "Magnetic field lines",
      "Force on a current-carrying conductor",
      "Charge density",
    ],
    options_hi: [
      "Induced current",
      "Magnetic field lines",
      "Force on a current-carrying conductor",
      "Charge density",
    ],
    answer_en: "Force on a current-carrying conductor",
    answer_hi: "Force on a current-carrying conductor",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Time to fall freely from height 16 m (g=10 m/s²) is:",
    question_hi: "16 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["3.58 s", "1.26 s", "0.89 s", "1.79 s"],
    options_hi: ["3.58 s", "1.26 s", "0.89 s", "1.79 s"],
    answer_en: "1.79 s",
    answer_hi: "1.79 s",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "Two resistors 10 Ω and 8 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 10 Ω और 8 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["4.44 Ω", "8 Ω", "18 Ω", "80 Ω"],
    options_hi: ["4.44 Ω", "8 Ω", "18 Ω", "80 Ω"],
    answer_en: "4.44 Ω",
    answer_hi: "4.44 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "A net force acts on a mass 7 kg producing acceleration 10 m/s². The force is:",
    question_hi: "7 kg द्रव्यमान पर 10 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["-3 N", "700 N", "70 N", "17 N"],
    options_hi: ["-3 N", "700 N", "70 N", "17 N"],
    answer_en: "70 N",
    answer_hi: "70 N",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "Gravitational potential energy of mass 19 kg at height 16 m (g=10) is:",
    question_hi:
      "19 kg द्रव्यमान की 16 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["45 J", "1520.0 J", "304 J", "3040 J"],
    options_hi: ["45 J", "1520.0 J", "304 J", "3040 J"],
    answer_en: "3040 J",
    answer_hi: "3040 J",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "A current 1 A flows through wire of cross-sectional area 1.57 m². Current density J is:",
    question_hi:
      "1 A धारा 1.57 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.32 A/m²", "1.57 A/m²", "1.57 A/m²", "0.64 A/m²"],
    options_hi: ["0.32 A/m²", "1.57 A/m²", "1.57 A/m²", "0.64 A/m²"],
    answer_en: "0.64 A/m²",
    answer_hi: "0.64 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "A wave has frequency 374 Hz and wavelength 1.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 374 Hz और तरंगदैर्घ्य 1.0 m है। इसका वेग है:",
    options_en: ["0", "0.003 m/s", "374.0 m/s", "187.0 m/s"],
    options_hi: ["0", "0.003 m/s", "374.0 m/s", "187.0 m/s"],
    answer_en: "374.0 m/s",
    answer_hi: "374.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "For mass-spring (m=4 kg, k=200 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=4 kg, k=200 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.44 s", "0.14 s", "0.89 s", "44.43 s"],
    options_hi: ["0.44 s", "0.14 s", "0.89 s", "44.43 s"],
    answer_en: "0.89 s",
    answer_hi: "0.89 s",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "Projectile launched with speed 25 m/s at 60°. Range (g=10 m/s²) is:",
    question_hi: "25 m/s की गति से 60° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["62.5 m", "31.2 m", "108.3 m", "54.1 m"],
    options_hi: ["62.5 m", "31.2 m", "108.3 m", "54.1 m"],
    answer_en: "54.1 m",
    answer_hi: "54.1 m",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "Body moves in circle radius 4 m at speed 10 m/s. Centripetal acceleration is:",
    question_hi:
      "4 m त्रिज्या वाले वृत्त में 10 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["10 m/s²", "50.0 m/s²", "25.0 m/s²", "2.5 m/s²"],
    options_hi: ["10 m/s²", "50.0 m/s²", "25.0 m/s²", "2.5 m/s²"],
    answer_en: "25.0 m/s²",
    answer_hi: "25.0 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "A current 6 A flows through wire of cross-sectional area 1.09 m². Current density J is:",
    question_hi:
      "6 A धारा 1.09 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.18 A/m²", "6.56 A/m²", "5.49 A/m²", "2.74 A/m²"],
    options_hi: ["0.18 A/m²", "6.56 A/m²", "5.49 A/m²", "2.74 A/m²"],
    answer_en: "5.49 A/m²",
    answer_hi: "5.49 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Two resistors 2 Ω and 10 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 2 Ω और 10 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["20 Ω", "1.67 Ω", "10 Ω", "12 Ω"],
    options_hi: ["20 Ω", "1.67 Ω", "10 Ω", "12 Ω"],
    answer_en: "12 Ω",
    answer_hi: "12 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "Capacitors 10 μF and 10 μF in parallel. Equivalent capacitance:",
    question_hi: "10 μF और 10 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["100 μF", "10 μF", "20 μF", "5.00 μF"],
    options_hi: ["100 μF", "10 μF", "20 μF", "5.00 μF"],
    answer_en: "20 μF",
    answer_hi: "20 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "A car travels 35 km at 49 km/h and then 54 km at 50 km/h. The average speed is:",
    question_hi:
      "एक कार 49 km/h की गति से 35 km और फिर 50 km/h से 54 km चलती है। औसत वेग है:",
    options_en: ["49.6 km/h", "49 km/h", "50 km/h", "49.5 km/h"],
    options_hi: ["49.6 km/h", "49 km/h", "50 km/h", "49.5 km/h"],
    answer_en: "49.6 km/h",
    answer_hi: "49.6 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "Projectile launched with speed 23 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "23 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["26.4 m", "105.8 m", "52.9 m", "0"],
    options_hi: ["26.4 m", "105.8 m", "52.9 m", "0"],
    answer_en: "52.9 m",
    answer_hi: "52.9 m",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "A constant force 33 N acts over displacement 5 m. Work done is:",
    question_hi:
      "33 N का नियत बल 5 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["165 J", "6.6 J", "82.5 J", "38 J"],
    options_hi: ["165 J", "6.6 J", "82.5 J", "38 J"],
    answer_en: "165 J",
    answer_hi: "165 J",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Dimension of force is:",
    question_hi: "बल का विमीय सूत्र क्या है?",
    options_en: ["[T]", "[M L T^-2]", "[L]", "[M]"],
    options_hi: ["[T]", "[M L T^-2]", "[L]", "[M]"],
    answer_en: "[M L T^-2]",
    answer_hi: "[M L T^-2]",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "A car travels 33 km at 70 km/h and then 67 km at 74 km/h. The average speed is:",
    question_hi:
      "एक कार 70 km/h की गति से 33 km और फिर 74 km/h से 67 km चलती है। औसत वेग है:",
    options_en: ["72.0 km/h", "70 km/h", "72.6 km/h", "74 km/h"],
    options_hi: ["72.0 km/h", "70 km/h", "72.6 km/h", "74 km/h"],
    answer_en: "72.6 km/h",
    answer_hi: "72.6 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "A current 8 A flows through wire of cross-sectional area 0.87 m². Current density J is:",
    question_hi:
      "8 A धारा 0.87 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["7.00 A/m²", "0.11 A/m²", "9.14 A/m²", "4.57 A/m²"],
    options_hi: ["7.00 A/m²", "0.11 A/m²", "9.14 A/m²", "4.57 A/m²"],
    answer_en: "9.14 A/m²",
    answer_hi: "9.14 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "In a process, heat supplied Q=53 J and work done W=81 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=53 J और किया गया कार्य W=81 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["53 J", "134 J", "-28 J", "81 J"],
    options_hi: ["53 J", "134 J", "-28 J", "81 J"],
    answer_en: "-28 J",
    answer_hi: "-28 J",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "Projectile launched with speed 36 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "36 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["64.8 m", "0", "259.2 m", "129.6 m"],
    options_hi: ["64.8 m", "0", "259.2 m", "129.6 m"],
    answer_en: "129.6 m",
    answer_hi: "129.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Ideal gas: P=100000 Pa, V=0.02 m³, n=1 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=100000 Pa, V=0.02 m³, n=1 mol. तापमान है:",
    options_en: ["240.7 K", "481.3 K", "2000.0", "120.3 K"],
    options_hi: ["240.7 K", "481.3 K", "2000.0", "120.3 K"],
    answer_en: "240.7 K",
    answer_hi: "240.7 K",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Dimension of power is:",
    question_hi: "शक्ति का विमीय सूत्र क्या है?",
    options_en: ["[M]", "[M L^2 T^-3]", "[L]", "[T]"],
    options_hi: ["[M]", "[M L^2 T^-3]", "[L]", "[T]"],
    answer_en: "[M L^2 T^-3]",
    answer_hi: "[M L^2 T^-3]",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Ideal gas: P=400000 Pa, V=0.02 m³, n=2 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=400000 Pa, V=0.02 m³, n=2 mol. तापमान है:",
    options_en: ["8000.0", "481.3 K", "962.7 K", "240.7 K"],
    options_hi: ["8000.0", "481.3 K", "962.7 K", "240.7 K"],
    answer_en: "481.3 K",
    answer_hi: "481.3 K",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "A wave has frequency 246 Hz and wavelength 0.5 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 246 Hz और तरंगदैर्घ्य 0.5 m है। इसका वेग है:",
    options_en: ["123.0 m/s", "0.002 m/s", "61.5 m/s", "492.0 m/s"],
    options_hi: ["123.0 m/s", "0.002 m/s", "61.5 m/s", "492.0 m/s"],
    answer_en: "123.0 m/s",
    answer_hi: "123.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Ideal gas: P=100000 Pa, V=0.05 m³, n=1 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=100000 Pa, V=0.05 m³, n=1 mol. तापमान है:",
    options_en: ["601.7 K", "300.8 K", "1203.4 K", "5000.0"],
    options_hi: ["601.7 K", "300.8 K", "1203.4 K", "5000.0"],
    answer_en: "601.7 K",
    answer_hi: "601.7 K",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "A constant force 28 N acts over displacement 6 m. Work done is:",
    question_hi:
      "28 N का नियत बल 6 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["84.0 J", "4.7 J", "34 J", "168 J"],
    options_hi: ["84.0 J", "4.7 J", "34 J", "168 J"],
    answer_en: "168 J",
    answer_hi: "168 J",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Nucleus with mass number A=27. Approx total binding energy (avg 7.6 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=27 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.6 MeV/न्यूक्लिओन):",
    options_en: ["7.6 MeV", "214.8 MeV", "102.4 MeV", "204.8 MeV"],
    options_hi: ["7.6 MeV", "214.8 MeV", "102.4 MeV", "204.8 MeV"],
    answer_en: "204.8 MeV",
    answer_hi: "204.8 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Maximum static friction for normal reaction 14 N and μ= 0.3 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=14 N, μ=0.3) है:",
    options_en: ["2.1 N", "4.2 N", "14 N", "46.7 N"],
    options_hi: ["2.1 N", "4.2 N", "14 N", "46.7 N"],
    answer_en: "4.2 N",
    answer_hi: "4.2 N",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "A thin lens with focal length 10 cm forms an image for object at -60 cm. Image distance v is:",
    question_hi:
      "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -60 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-60 cm", "10 cm", "-12.0 cm", "12.0 cm"],
    options_hi: ["-60 cm", "10 cm", "-12.0 cm", "12.0 cm"],
    answer_en: "12.0 cm",
    answer_hi: "12.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "A wave has frequency 361 Hz and wavelength 0.2 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 361 Hz और तरंगदैर्घ्य 0.2 m है। इसका वेग है:",
    options_en: ["1805.0 m/s", "36.1 m/s", "72.2 m/s", "0.001 m/s"],
    options_hi: ["1805.0 m/s", "36.1 m/s", "72.2 m/s", "0.001 m/s"],
    answer_en: "72.2 m/s",
    answer_hi: "72.2 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "A constant force 24 N acts over displacement 2 m. Work done is:",
    question_hi:
      "24 N का नियत बल 2 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["24.0 J", "12.0 J", "48 J", "26 J"],
    options_hi: ["24.0 J", "12.0 J", "48 J", "26 J"],
    answer_en: "48 J",
    answer_hi: "48 J",
    attempted: false,
    selected: "",
  },
];

let currentQuestion = 0;
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
  const q = questions[index];
  document.getElementById("question").textContent = `${q.num}. ${
    language === "en" ? q.question_en : q.question_hi
  }`;
  document.getElementById("questionCounter").textContent = `Question ${
    index + 1
  } of ${questions.length}`;

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
            <input type="radio" name="option" value="${option}" ${
      isSelected ? "checked" : ""
    } style="margin-right:8px;">
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
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
      timeLeft--;
    }
  }, 1000);
}

////////////////////////////////////////////////////////////////////////////////////////////

// submit
function jumpToQuestion(index) {
  currentQuestion = index;
  loadQuestion(index);
}

function submitQuiz() {
  let confirmation = confirm("Are you sure you want to submit the test?");

  if (!confirmation) {
    return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
  }

  let attempted = 0;
  let notAttempted = 0;
  let score = 0;
  const results = [];

  questions.forEach((q) => {
    if (q.attempted) {
      attempted++;
      if (q.selected === q.answer) {
        score++;
      }
    } else {
      notAttempted++;
    }
    results.push({
      question: q.question,
      selected: q.selected || "Not Answered",
      correct: q.answer,
    });
  });

  localStorage.setItem("attempted", attempted);
  localStorage.setItem("notAttempted", notAttempted);
  localStorage.setItem("score", score);
  localStorage.setItem("results", JSON.stringify(results));

  // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
  let viewResult = confirm(
    "Test submitted successfully! Do you want to view your result?"
  );
  if (viewResult) {
    window.location.href =
      "/RTS/public/Deshbord/category/test/submit-test.html";
  }
}
window.onload = () => {
  loadQuestion(currentQuestion);
};

function updateNavigation() {
  const nav = document.getElementById("circleContainer");
  nav.innerHTML = "";
  questions.forEach((q, i) => {
    let color = "gray";
    if (i === currentQuestion) color = "blue";
    else if (q.attempted) color = "green";
    nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${
      i + 1
    }</div>`;
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
    const newSize = Math.max(
      80,
      Math.min(250, Math.max(startWidth + dx, startHeight + dy))
    );
    container.style.width = `${newSize}px`;
    container.style.height = `${newSize}px`;
  });

  document.addEventListener("mouseup", () => {
    isResizing = false;
  });

  // ✅ Camera stream
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      videoStream = stream;
      detectMovement(video);
    })
    .catch((err) => {
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
    videoStream.getTracks().forEach((track) => track.stop());
  }
  const camContainer = document.getElementById("camera-container");
  if (camContainer) camContainer.remove();

  movementCount = 0;
  currentQuestion = 0;
  timeLeft = 180 * 60;

  questions.forEach((q) => {
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

///////////////////////////////////////
