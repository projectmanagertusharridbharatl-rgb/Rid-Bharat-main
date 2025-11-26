const questions = [
  {
    num: 1,
    question_en:
      "Projectile launched with speed 20 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "20 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["40.0 m", "20.0 m", "0", "80.0 m"],
    options_hi: ["40.0 m", "20.0 m", "0", "80.0 m"],
    answer_en: "40.0 m",
    answer_hi: "40.0 m",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "A resistor 7 Ω connected to 17 V. Current is:",
    question_hi: "7 Ω प्रतिरोधक को 17 V से जोड़ा। धारा है:",
    options_en: ["2.43 A", "1.21 A", "0.41 A", "119 A"],
    options_hi: ["2.43 A", "1.21 A", "0.41 A", "119 A"],
    answer_en: "2.43 A",
    answer_hi: "2.43 A",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en:
      "Projectile launched with speed 11 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "11 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["0", "24.2 m", "6.0 m", "12.1 m"],
    options_hi: ["0", "24.2 m", "6.0 m", "12.1 m"],
    answer_en: "12.1 m",
    answer_hi: "12.1 m",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "Gravitational potential energy of mass 20 kg at height 37 m (g=10) is:",
    question_hi:
      "20 kg द्रव्यमान की 37 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["740 J", "7400 J", "67 J", "3700.0 J"],
    options_hi: ["740 J", "7400 J", "67 J", "3700.0 J"],
    answer_en: "7400 J",
    answer_hi: "7400 J",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=5.00e+14 Hz and incident frequency f=4.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=5.00e+14 Hz और आपतित आवृत्ति f=4.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons emitted with zero KE",
      "Infinite KE",
      "Electrons emitted with high KE",
      "No emission",
    ],
    options_hi: [
      "Electrons emitted with zero KE",
      "Infinite KE",
      "Electrons emitted with high KE",
      "No emission",
    ],
    answer_en: "No emission",
    answer_hi: "No emission",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Work 107 J done in 4 s. Power is:",
    question_hi: "4 s में 107 J कार्य किया। शक्ति है:",
    options_en: ["26.8 W", "428 W", "53.5 W", "107 W"],
    options_hi: ["26.8 W", "428 W", "53.5 W", "107 W"],
    answer_en: "26.8 W",
    answer_hi: "26.8 W",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Time to fall freely from height 34 m (g=10 m/s²) is:",
    question_hi: "34 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.3 s", "1.84 s", "5.22 s", "2.61 s"],
    options_hi: ["1.3 s", "1.84 s", "5.22 s", "2.61 s"],
    answer_en: "2.61 s",
    answer_hi: "2.61 s",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "A sample with 593 nuclei undergoes 4 half-lives. Remaining nuclei:",
    question_hi: "593 नाभिक वाला नमूना 4 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["148", "37", "296", "593"],
    options_hi: ["148", "37", "296", "593"],
    answer_en: "37",
    answer_hi: "37",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en:
      "Body moves in circle radius 1 m at speed 13 m/s. Centripetal acceleration is:",
    question_hi:
      "1 m त्रिज्या वाले वृत्त में 13 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["338.0 m/s²", "169.0 m/s²", "13 m/s²", "13.0 m/s²"],
    options_hi: ["338.0 m/s²", "169.0 m/s²", "13 m/s²", "13.0 m/s²"],
    answer_en: "169.0 m/s²",
    answer_hi: "169.0 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "A net force acts on a mass 9 kg producing acceleration 6 m/s². The force is:",
    question_hi: "9 kg द्रव्यमान पर 6 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["324 N", "3 N", "15 N", "54 N"],
    options_hi: ["324 N", "3 N", "15 N", "54 N"],
    answer_en: "54 N",
    answer_hi: "54 N",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en:
      "Nucleus with mass number A=36. Approx total binding energy (avg 7.6 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=36 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.6 MeV/न्यूक्लिओन):",
    options_en: ["273.0 MeV", "283.0 MeV", "136.5 MeV", "7.6 MeV"],
    options_hi: ["273.0 MeV", "283.0 MeV", "136.5 MeV", "7.6 MeV"],
    answer_en: "273.0 MeV",
    answer_hi: "273.0 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en:
      "Body moves in circle radius 8 m at speed 9 m/s. Centripetal acceleration is:",
    question_hi:
      "8 m त्रिज्या वाले वृत्त में 9 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["9 m/s²", "10.125 m/s²", "20.25 m/s²", "1.125 m/s²"],
    options_hi: ["9 m/s²", "10.125 m/s²", "20.25 m/s²", "1.125 m/s²"],
    answer_en: "10.125 m/s²",
    answer_hi: "10.125 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "Gravitational potential energy of mass 9 kg at height 33 m (g=10) is:",
    question_hi:
      "9 kg द्रव्यमान की 33 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["297 J", "2970 J", "1485.0 J", "52 J"],
    options_hi: ["297 J", "2970 J", "1485.0 J", "52 J"],
    answer_en: "2970 J",
    answer_hi: "2970 J",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "A car travels 70 km at 77 km/h and then 39 km at 69 km/h. The average speed is:",
    question_hi:
      "एक कार 77 km/h की गति से 70 km और फिर 69 km/h से 39 km चलती है। औसत वेग है:",
    options_en: ["77 km/h", "69 km/h", "73.0 km/h", "73.9 km/h"],
    options_hi: ["77 km/h", "69 km/h", "73.0 km/h", "73.9 km/h"],
    answer_en: "73.9 km/h",
    answer_hi: "73.9 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "Body moves in circle radius 9 m at speed 29 m/s. Centripetal acceleration is:",
    question_hi:
      "9 m त्रिज्या वाले वृत्त में 29 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: [
      "29 m/s²",
      "93.44444444444444 m/s²",
      "186.88888888888889 m/s²",
      "3.2222222222222223 m/s²",
    ],
    options_hi: [
      "29 m/s²",
      "93.44444444444444 m/s²",
      "186.88888888888889 m/s²",
      "3.2222222222222223 m/s²",
    ],
    answer_en: "93.44444444444444 m/s²",
    answer_hi: "93.44444444444444 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Fleming's left-hand rule is used to find the direction of:",
    question_hi:
      "फ्लेमिंग का बायाँ हाथ नियम किस दिशा को ज्ञात करने के लिए उपयोग होता है?",
    options_en: [
      "Magnetic field lines",
      "Force on a current-carrying conductor",
      "Charge density",
      "Induced current",
    ],
    options_hi: [
      "Magnetic field lines",
      "Force on a current-carrying conductor",
      "Charge density",
      "Induced current",
    ],
    answer_en: "Force on a current-carrying conductor",
    answer_hi: "Force on a current-carrying conductor",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "A sample with 711 nuclei undergoes 2 half-lives. Remaining nuclei:",
    question_hi: "711 नाभिक वाला नमूना 2 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["711", "0", "177", "355"],
    options_hi: ["711", "0", "177", "355"],
    answer_en: "177",
    answer_hi: "177",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Gravitational potential energy of mass 16 kg at height 26 m (g=10) is:",
    question_hi:
      "16 kg द्रव्यमान की 26 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["52 J", "416 J", "4160 J", "2080.0 J"],
    options_hi: ["52 J", "416 J", "4160 J", "2080.0 J"],
    answer_en: "4160 J",
    answer_hi: "4160 J",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Capacitors 2 μF and 2 μF in series. Equivalent capacitance:",
    question_hi: "2 μF और 2 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["1.0 μF", "4 μF", "4 μF", "2 μF"],
    options_hi: ["1.0 μF", "4 μF", "4 μF", "2 μF"],
    answer_en: "1.0 μF",
    answer_hi: "1.0 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en:
      "Capacitors 2 μF and 2 μF in parallel. Equivalent capacitance:",
    question_hi: "2 μF और 2 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["4 μF", "2 μF", "0", "1.00 μF"],
    options_hi: ["4 μF", "2 μF", "0", "1.00 μF"],
    answer_en: "4 μF",
    answer_hi: "4 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "Gravitational potential energy of mass 15 kg at height 50 m (g=10) is:",
    question_hi:
      "15 kg द्रव्यमान की 50 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["3750.0 J", "750 J", "7500 J", "75 J"],
    options_hi: ["3750.0 J", "750 J", "7500 J", "75 J"],
    answer_en: "7500 J",
    answer_hi: "7500 J",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Faraday's law states that induced emf is proportional to:",
    question_hi:
      "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    options_en: [
      "Rate of change of magnetic flux",
      "Resistance of coil",
      "Magnetic flux itself",
      "Square of current",
    ],
    options_hi: [
      "Rate of change of magnetic flux",
      "Resistance of coil",
      "Magnetic flux itself",
      "Square of current",
    ],
    answer_en: "Rate of change of magnetic flux",
    answer_hi: "Rate of change of magnetic flux",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Ideal gas: P=300000 Pa, V=0.05 m³, n=2 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=300000 Pa, V=0.05 m³, n=2 mol. तापमान है:",
    options_en: ["15000.0", "902.5 K", "451.3 K", "1805.1 K"],
    options_hi: ["15000.0", "902.5 K", "451.3 K", "1805.1 K"],
    answer_en: "902.5 K",
    answer_hi: "902.5 K",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "A resistor 8 Ω connected to 9 V. Current is:",
    question_hi: "8 Ω प्रतिरोधक को 9 V से जोड़ा। धारा है:",
    options_en: ["1.12 A", "0.89 A", "72 A", "0.56 A"],
    options_hi: ["1.12 A", "0.89 A", "72 A", "0.56 A"],
    answer_en: "1.12 A",
    answer_hi: "1.12 A",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Time to fall freely from height 25 m (g=10 m/s²) is:",
    question_hi: "25 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.12 s", "1.58 s", "2.24 s", "4.47 s"],
    options_hi: ["1.12 s", "1.58 s", "2.24 s", "4.47 s"],
    answer_en: "2.24 s",
    answer_hi: "2.24 s",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=5.00e+14 Hz and incident frequency f=6.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=5.00e+14 Hz और आपतित आवृत्ति f=6.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons just emitted (zero KE)",
      "No emission",
      "Cannot say",
      "Electrons emitted with KE > 0",
    ],
    options_hi: [
      "Electrons just emitted (zero KE)",
      "No emission",
      "Cannot say",
      "Electrons emitted with KE > 0",
    ],
    answer_en: "Electrons emitted with KE > 0",
    answer_hi: "Electrons emitted with KE > 0",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "Projectile launched with speed 33 m/s at 60°. Range (g=10 m/s²) is:",
    question_hi: "33 m/s की गति से 60° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["94.3 m", "188.6 m", "54.5 m", "108.9 m"],
    options_hi: ["94.3 m", "188.6 m", "54.5 m", "108.9 m"],
    answer_en: "94.3 m",
    answer_hi: "94.3 m",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["299863380 m/s", "3.0e9 m/s", "3.0e7 m/s", "1.5e8 m/s"],
    options_hi: ["299863380 m/s", "3.0e9 m/s", "3.0e7 m/s", "1.5e8 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Energy difference between levels n=2 and n=5 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=2 और n=5 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["0.54 eV", "1.43 eV", "3.4 eV", "2.86 eV"],
    options_hi: ["0.54 eV", "1.43 eV", "3.4 eV", "2.86 eV"],
    answer_en: "2.86 eV",
    answer_hi: "2.86 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "For mass-spring (m=5 kg, k=100 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=5 kg, k=100 N/m) के लिए आवर्तकाल T है:",
    options_en: ["28.1 s", "0.22 s", "0.7 s", "1.4 s"],
    options_hi: ["28.1 s", "0.22 s", "0.7 s", "1.4 s"],
    answer_en: "1.4 s",
    answer_hi: "1.4 s",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "In a process, heat supplied Q=52 J and work done W=27 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=52 J और किया गया कार्य W=27 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["79 J", "52 J", "27 J", "25 J"],
    options_hi: ["79 J", "52 J", "27 J", "25 J"],
    answer_en: "25 J",
    answer_hi: "25 J",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "Nucleus with mass number A=19. Approx total binding energy (avg 6.9 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=19 वाले नाभिक की कुल बंधन ऊर्जा (औसत 6.9 MeV/न्यूक्लिओन):",
    options_en: ["140.7 MeV", "130.7 MeV", "65.3 MeV", "6.9 MeV"],
    options_hi: ["140.7 MeV", "130.7 MeV", "65.3 MeV", "6.9 MeV"],
    answer_en: "130.7 MeV",
    answer_hi: "130.7 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Capacitors 2 μF and 10 μF in series. Equivalent capacitance:",
    question_hi: "2 μF और 10 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["2 μF", "12 μF", "20 μF", "1.67 μF"],
    options_hi: ["2 μF", "12 μF", "20 μF", "1.67 μF"],
    answer_en: "1.67 μF",
    answer_hi: "1.67 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=6.00e+14 Hz and incident frequency f=4.80e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=6.00e+14 Hz और आपतित आवृत्ति f=4.80e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons emitted with high KE",
      "Infinite KE",
      "No emission",
      "Electrons emitted with zero KE",
    ],
    options_hi: [
      "Electrons emitted with high KE",
      "Infinite KE",
      "No emission",
      "Electrons emitted with zero KE",
    ],
    answer_en: "No emission",
    answer_hi: "No emission",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Two resistors 5 Ω and 10 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 5 Ω और 10 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["3.33 Ω", "50 Ω", "15 Ω", "10 Ω"],
    options_hi: ["3.33 Ω", "50 Ω", "15 Ω", "10 Ω"],
    answer_en: "15 Ω",
    answer_hi: "15 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=8.00e+14 Hz and incident frequency f=8.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=8.00e+14 Hz और आपतित आवृत्ति f=8.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons just emitted (zero KE)",
      "No emission",
      "Maximum KE",
      "Cannot say",
    ],
    options_hi: [
      "Electrons just emitted (zero KE)",
      "No emission",
      "Maximum KE",
      "Cannot say",
    ],
    answer_en: "Electrons just emitted (zero KE)",
    answer_hi: "Electrons just emitted (zero KE)",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "A current 5 A flows through wire of cross-sectional area 1.16 m². Current density J is:",
    question_hi:
      "5 A धारा 1.16 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["5.80 A/m²", "2.15 A/m²", "0.23 A/m²", "4.31 A/m²"],
    options_hi: ["5.80 A/m²", "2.15 A/m²", "0.23 A/m²", "4.31 A/m²"],
    answer_en: "4.31 A/m²",
    answer_hi: "4.31 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "In a process, heat supplied Q=84 J and work done W=98 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=84 J और किया गया कार्य W=98 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["-14 J", "98 J", "182 J", "84 J"],
    options_hi: ["-14 J", "98 J", "182 J", "84 J"],
    answer_en: "-14 J",
    answer_hi: "-14 J",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "A net force acts on a mass 4 kg producing acceleration 2 m/s². The force is:",
    question_hi: "4 kg द्रव्यमान पर 2 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["6 N", "16 N", "2 N", "8 N"],
    options_hi: ["6 N", "16 N", "2 N", "8 N"],
    answer_en: "8 N",
    answer_hi: "8 N",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en:
      "In a process, heat supplied Q=242 J and work done W=90 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=242 J और किया गया कार्य W=90 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["90 J", "242 J", "152 J", "332 J"],
    options_hi: ["90 J", "242 J", "152 J", "332 J"],
    answer_en: "152 J",
    answer_hi: "152 J",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "Projectile launched with speed 40 m/s at 60°. Range (g=10 m/s²) is:",
    question_hi: "40 m/s की गति से 60° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["80.0 m", "138.6 m", "160.0 m", "277.1 m"],
    options_hi: ["80.0 m", "138.6 m", "160.0 m", "277.1 m"],
    answer_en: "138.6 m",
    answer_hi: "138.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "A constant force 33 N acts over displacement 6 m. Work done is:",
    question_hi:
      "33 N का नियत बल 6 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["198 J", "39 J", "99.0 J", "5.5 J"],
    options_hi: ["198 J", "39 J", "99.0 J", "5.5 J"],
    answer_en: "198 J",
    answer_hi: "198 J",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "Maximum static friction for normal reaction 92 N and μ= 0.4 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=92 N, μ=0.4) है:",
    options_en: ["92 N", "36.8 N", "18.4 N", "230.0 N"],
    options_hi: ["92 N", "36.8 N", "18.4 N", "230.0 N"],
    answer_en: "36.8 N",
    answer_hi: "36.8 N",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Work 863 J done in 15 s. Power is:",
    question_hi: "15 s में 863 J कार्य किया। शक्ति है:",
    options_en: ["57.5 W", "863 W", "12945 W", "115.1 W"],
    options_hi: ["57.5 W", "863 W", "12945 W", "115.1 W"],
    answer_en: "57.5 W",
    answer_hi: "57.5 W",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Dimension of velocity is:",
    question_hi: "वेग का विमीय सूत्र क्या है?",
    options_en: ["[L]", "[L T^-1]", "[M]", "[T]"],
    options_hi: ["[L]", "[L T^-1]", "[M]", "[T]"],
    answer_en: "[L T^-1]",
    answer_hi: "[L T^-1]",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Energy difference between levels n=3 and n=5 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=3 और n=5 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["0.48 eV", "1.51 eV", "0.97 eV", "0.54 eV"],
    options_hi: ["0.48 eV", "1.51 eV", "0.97 eV", "0.54 eV"],
    answer_en: "0.97 eV",
    answer_hi: "0.97 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "Time to fall freely from height 70 m (g=10 m/s²) is:",
    question_hi: "70 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.87 s", "7.48 s", "2.65 s", "3.74 s"],
    options_hi: ["1.87 s", "7.48 s", "2.65 s", "3.74 s"],
    answer_en: "3.74 s",
    answer_hi: "3.74 s",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Two resistors 6 Ω and 8 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 6 Ω और 8 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["14 Ω", "3.43 Ω", "8 Ω", "48 Ω"],
    options_hi: ["14 Ω", "3.43 Ω", "8 Ω", "48 Ω"],
    answer_en: "14 Ω",
    answer_hi: "14 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "A constant force 26 N acts over displacement 3 m. Work done is:",
    question_hi:
      "26 N का नियत बल 3 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["8.7 J", "29 J", "39.0 J", "78 J"],
    options_hi: ["8.7 J", "29 J", "39.0 J", "78 J"],
    answer_en: "78 J",
    answer_hi: "78 J",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=8.00e+14 Hz and incident frequency f=9.60e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=8.00e+14 Hz और आपतित आवृत्ति f=9.60e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons emitted with KE > 0",
      "No emission",
      "Cannot say",
      "Electrons just emitted (zero KE)",
    ],
    options_hi: [
      "Electrons emitted with KE > 0",
      "No emission",
      "Cannot say",
      "Electrons just emitted (zero KE)",
    ],
    answer_en: "Electrons emitted with KE > 0",
    answer_hi: "Electrons emitted with KE > 0",
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
