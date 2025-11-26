const questions = [
  {
    num: 1,
    question_en:
      "In a process, heat supplied Q=199 J and work done W=68 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=199 J और किया गया कार्य W=68 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["267 J", "68 J", "199 J", "131 J"],
    options_hi: ["267 J", "68 J", "199 J", "131 J"],
    answer_en: "131 J",
    answer_hi: "131 J",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Capacitors 10 μF and 5 μF in series. Equivalent capacitance:",
    question_hi: "10 μF और 5 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["50 μF", "15 μF", "3.33 μF", "5 μF"],
    options_hi: ["50 μF", "15 μF", "3.33 μF", "5 μF"],
    answer_en: "3.33 μF",
    answer_hi: "3.33 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "For mass-spring (m=1 kg, k=50 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=1 kg, k=50 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.14 s", "44.43 s", "0.89 s", "0.44 s"],
    options_hi: ["0.14 s", "44.43 s", "0.89 s", "0.44 s"],
    answer_en: "0.89 s",
    answer_hi: "0.89 s",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "Gravitational potential energy of mass 11 kg at height 15 m (g=10) is:",
    question_hi:
      "11 kg द्रव्यमान की 15 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["36 J", "165 J", "1650 J", "825.0 J"],
    options_hi: ["36 J", "165 J", "1650 J", "825.0 J"],
    answer_en: "1650 J",
    answer_hi: "1650 J",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Time to fall freely from height 32 m (g=10 m/s²) is:",
    question_hi: "32 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.26 s", "5.06 s", "2.53 s", "1.79 s"],
    options_hi: ["1.26 s", "5.06 s", "2.53 s", "1.79 s"],
    answer_en: "2.53 s",
    answer_hi: "2.53 s",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "A resistor 2 Ω connected to 7 V. Current is:",
    question_hi: "2 Ω प्रतिरोधक को 7 V से जोड़ा। धारा है:",
    options_en: ["14 A", "3.5 A", "1.75 A", "0.29 A"],
    options_hi: ["14 A", "3.5 A", "1.75 A", "0.29 A"],
    answer_en: "3.5 A",
    answer_hi: "3.5 A",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Ideal gas: P=300000 Pa, V=0.01 m³, n=1 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=300000 Pa, V=0.01 m³, n=1 mol. तापमान है:",
    options_en: ["180.5 K", "722.0 K", "361.0 K", "3000.0"],
    options_hi: ["180.5 K", "722.0 K", "361.0 K", "3000.0"],
    answer_en: "361.0 K",
    answer_hi: "361.0 K",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Work 357 J done in 13 s. Power is:",
    question_hi: "13 s में 357 J कार्य किया। शक्ति है:",
    options_en: ["54.9 W", "357 W", "4641 W", "27.5 W"],
    options_hi: ["54.9 W", "357 W", "4641 W", "27.5 W"],
    answer_en: "27.5 W",
    answer_hi: "27.5 W",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Ideal gas: P=200000 Pa, V=0.05 m³, n=3 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=200000 Pa, V=0.05 m³, n=3 mol. तापमान है:",
    options_en: ["200.6 K", "401.1 K", "802.2 K", "10000.0"],
    options_hi: ["200.6 K", "401.1 K", "802.2 K", "10000.0"],
    answer_en: "401.1 K",
    answer_hi: "401.1 K",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "Time to fall freely from height 26 m (g=10 m/s²) is:",
    question_hi: "26 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.14 s", "4.56 s", "2.28 s", "1.61 s"],
    options_hi: ["1.14 s", "4.56 s", "2.28 s", "1.61 s"],
    answer_en: "2.28 s",
    answer_hi: "2.28 s",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "A resistor 7 Ω connected to 9 V. Current is:",
    question_hi: "7 Ω प्रतिरोधक को 9 V से जोड़ा। धारा है:",
    options_en: ["0.64 A", "63 A", "0.78 A", "1.29 A"],
    options_hi: ["0.64 A", "63 A", "0.78 A", "1.29 A"],
    answer_en: "1.29 A",
    answer_hi: "1.29 A",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en:
      "A thin lens with focal length 10 cm forms an image for object at -50 cm. Image distance v is:",
    question_hi:
      "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -50 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-50 cm", "10 cm", "12.5 cm", "-12.5 cm"],
    options_hi: ["-50 cm", "10 cm", "12.5 cm", "-12.5 cm"],
    answer_en: "12.5 cm",
    answer_hi: "12.5 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["299863380 m/s", "1.5e8 m/s", "3.0e7 m/s", "3.0e9 m/s"],
    options_hi: ["299863380 m/s", "1.5e8 m/s", "3.0e7 m/s", "3.0e9 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "Nucleus with mass number A=13. Approx total binding energy (avg 7.7 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=13 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.7 MeV/न्यूक्लिओन):",
    options_en: ["110.1 MeV", "100.1 MeV", "7.7 MeV", "50.1 MeV"],
    options_hi: ["110.1 MeV", "100.1 MeV", "7.7 MeV", "50.1 MeV"],
    answer_en: "100.1 MeV",
    answer_hi: "100.1 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=8.00e+14 Hz and incident frequency f=8.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=8.00e+14 Hz और आपतित आवृत्ति f=8.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Maximum KE",
      "No emission",
      "Cannot say",
      "Electrons just emitted (zero KE)",
    ],
    options_hi: [
      "Maximum KE",
      "No emission",
      "Cannot say",
      "Electrons just emitted (zero KE)",
    ],
    answer_en: "Electrons just emitted (zero KE)",
    answer_hi: "Electrons just emitted (zero KE)",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "Energy difference between levels n=1 and n=3 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=1 और n=3 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["12.09 eV", "1.51 eV", "13.6 eV", "6.04 eV"],
    options_hi: ["12.09 eV", "1.51 eV", "13.6 eV", "6.04 eV"],
    answer_en: "12.09 eV",
    answer_hi: "12.09 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Dimension of velocity is:",
    question_hi: "वेग का विमीय सूत्र क्या है?",
    options_en: ["[L]", "[T]", "[M]", "[L T^-1]"],
    options_hi: ["[L]", "[T]", "[M]", "[L T^-1]"],
    answer_en: "[L T^-1]",
    answer_hi: "[L T^-1]",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Nucleus with mass number A=34. Approx total binding energy (avg 8.5 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=34 वाले नाभिक की कुल बंधन ऊर्जा (औसत 8.5 MeV/न्यूक्लिओन):",
    options_en: ["144.3 MeV", "298.7 MeV", "8.5 MeV", "288.7 MeV"],
    options_hi: ["144.3 MeV", "298.7 MeV", "8.5 MeV", "288.7 MeV"],
    answer_en: "288.7 MeV",
    answer_hi: "288.7 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en:
      "A wave has frequency 292 Hz and wavelength 0.2 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 292 Hz और तरंगदैर्घ्य 0.2 m है। इसका वेग है:",
    options_en: ["1460.0 m/s", "29.2 m/s", "0.001 m/s", "58.4 m/s"],
    options_hi: ["1460.0 m/s", "29.2 m/s", "0.001 m/s", "58.4 m/s"],
    answer_en: "58.4 m/s",
    answer_hi: "58.4 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Work 424 J done in 6 s. Power is:",
    question_hi: "6 s में 424 J कार्य किया। शक्ति है:",
    options_en: ["70.7 W", "2544 W", "424 W", "141.3 W"],
    options_hi: ["70.7 W", "2544 W", "424 W", "141.3 W"],
    answer_en: "70.7 W",
    answer_hi: "70.7 W",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Ideal gas: P=100000 Pa, V=0.01 m³, n=3 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=100000 Pa, V=0.01 m³, n=3 mol. तापमान है:",
    options_en: ["40.1 K", "1000.0", "20.1 K", "80.2 K"],
    options_hi: ["40.1 K", "1000.0", "20.1 K", "80.2 K"],
    answer_en: "40.1 K",
    answer_hi: "40.1 K",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Fleming's left-hand rule is used to find the direction of:",
    question_hi:
      "फ्लेमिंग का बायाँ हाथ नियम किस दिशा को ज्ञात करने के लिए उपयोग होता है?",
    options_en: [
      "Magnetic field lines",
      "Force on a current-carrying conductor",
      "Induced current",
      "Charge density",
    ],
    options_hi: [
      "Magnetic field lines",
      "Force on a current-carrying conductor",
      "Induced current",
      "Charge density",
    ],
    answer_en: "Force on a current-carrying conductor",
    answer_hi: "Force on a current-carrying conductor",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=5.00e+14 Hz and incident frequency f=6.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=5.00e+14 Hz और आपतित आवृत्ति f=6.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons emitted with KE > 0",
      "Cannot say",
      "No emission",
      "Electrons just emitted (zero KE)",
    ],
    options_hi: [
      "Electrons emitted with KE > 0",
      "Cannot say",
      "No emission",
      "Electrons just emitted (zero KE)",
    ],
    answer_en: "Electrons emitted with KE > 0",
    answer_hi: "Electrons emitted with KE > 0",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "Energy difference between levels n=2 and n=5 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=2 और n=5 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["2.86 eV", "3.4 eV", "0.54 eV", "1.43 eV"],
    options_hi: ["2.86 eV", "3.4 eV", "0.54 eV", "1.43 eV"],
    answer_en: "2.86 eV",
    answer_hi: "2.86 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=5.00e+14 Hz and incident frequency f=4.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=5.00e+14 Hz और आपतित आवृत्ति f=4.00e+14 Hz होने पर परिणाम है:",
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
    num: 26,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=8.00e+14 Hz and incident frequency f=9.60e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=8.00e+14 Hz और आपतित आवृत्ति f=9.60e+14 Hz होने पर परिणाम है:",
    options_en: [
      "No emission",
      "Electrons emitted with KE > 0",
      "Electrons just emitted (zero KE)",
      "Cannot say",
    ],
    options_hi: [
      "No emission",
      "Electrons emitted with KE > 0",
      "Electrons just emitted (zero KE)",
      "Cannot say",
    ],
    answer_en: "Electrons emitted with KE > 0",
    answer_hi: "Electrons emitted with KE > 0",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "A constant force 34 N acts over displacement 9 m. Work done is:",
    question_hi:
      "34 N का नियत बल 9 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["43 J", "306 J", "153.0 J", "3.8 J"],
    options_hi: ["43 J", "306 J", "153.0 J", "3.8 J"],
    answer_en: "306 J",
    answer_hi: "306 J",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Faraday's law states that induced emf is proportional to:",
    question_hi:
      "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    options_en: [
      "Rate of change of magnetic flux",
      "Magnetic flux itself",
      "Resistance of coil",
      "Square of current",
    ],
    options_hi: [
      "Rate of change of magnetic flux",
      "Magnetic flux itself",
      "Resistance of coil",
      "Square of current",
    ],
    answer_en: "Rate of change of magnetic flux",
    answer_hi: "Rate of change of magnetic flux",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Projectile launched with speed 39 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "39 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["0", "304.2 m", "76.0 m", "152.1 m"],
    options_hi: ["0", "304.2 m", "76.0 m", "152.1 m"],
    answer_en: "152.1 m",
    answer_hi: "152.1 m",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "A current 9 A flows through wire of cross-sectional area 0.94 m². Current density J is:",
    question_hi:
      "9 A धारा 0.94 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["9.53 A/m²", "0.1 A/m²", "4.77 A/m²", "8.50 A/m²"],
    options_hi: ["9.53 A/m²", "0.1 A/m²", "4.77 A/m²", "8.50 A/m²"],
    answer_en: "9.53 A/m²",
    answer_hi: "9.53 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "Maximum static friction for normal reaction 92 N and μ= 0.5 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=92 N, μ=0.5) है:",
    options_en: ["23.0 N", "92 N", "184.0 N", "46.0 N"],
    options_hi: ["23.0 N", "92 N", "184.0 N", "46.0 N"],
    answer_en: "46.0 N",
    answer_hi: "46.0 N",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "Nucleus with mass number A=9. Approx total binding energy (avg 6.9 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=9 वाले नाभिक की कुल बंधन ऊर्जा (औसत 6.9 MeV/न्यूक्लिओन):",
    options_en: ["62.2 MeV", "6.9 MeV", "72.2 MeV", "31.1 MeV"],
    options_hi: ["62.2 MeV", "6.9 MeV", "72.2 MeV", "31.1 MeV"],
    answer_en: "62.2 MeV",
    answer_hi: "62.2 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "A car travels 60 km at 65 km/h and then 54 km at 60 km/h. The average speed is:",
    question_hi:
      "एक कार 65 km/h की गति से 60 km और फिर 60 km/h से 54 km चलती है। औसत वेग है:",
    options_en: ["62.5 km/h", "65 km/h", "60 km/h", "0"],
    options_hi: ["62.5 km/h", "65 km/h", "60 km/h", "0"],
    answer_en: "62.5 km/h",
    answer_hi: "62.5 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Ideal gas: P=400000 Pa, V=0.03 m³, n=3 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=400000 Pa, V=0.03 m³, n=3 mol. तापमान है:",
    options_en: ["240.7 K", "481.3 K", "962.7 K", "12000.0"],
    options_hi: ["240.7 K", "481.3 K", "962.7 K", "12000.0"],
    answer_en: "481.3 K",
    answer_hi: "481.3 K",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "A thin lens with focal length 25 cm forms an image for object at -30 cm. Image distance v is:",
    question_hi:
      "25 cm फोकल लंबाई वाले लेंस के लिए वस्तु -30 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-30 cm", "-150.0 cm", "150.0 cm", "25 cm"],
    options_hi: ["-30 cm", "-150.0 cm", "150.0 cm", "25 cm"],
    answer_en: "150.0 cm",
    answer_hi: "150.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "Body moves in circle radius 9 m at speed 5 m/s. Centripetal acceleration is:",
    question_hi:
      "9 m त्रिज्या वाले वृत्त में 5 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: [
      "2.7777777777777777 m/s²",
      "5.555555555555555 m/s²",
      "0.5555555555555556 m/s²",
      "5 m/s²",
    ],
    options_hi: [
      "2.7777777777777777 m/s²",
      "5.555555555555555 m/s²",
      "0.5555555555555556 m/s²",
      "5 m/s²",
    ],
    answer_en: "2.7777777777777777 m/s²",
    answer_hi: "2.7777777777777777 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "In a process, heat supplied Q=62 J and work done W=24 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=62 J और किया गया कार्य W=24 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["24 J", "38 J", "62 J", "86 J"],
    options_hi: ["24 J", "38 J", "62 J", "86 J"],
    answer_en: "38 J",
    answer_hi: "38 J",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "Ideal gas: P=200000 Pa, V=0.01 m³, n=1 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=200000 Pa, V=0.01 m³, n=1 mol. तापमान है:",
    options_en: ["481.3 K", "2000.0", "240.7 K", "120.3 K"],
    options_hi: ["481.3 K", "2000.0", "240.7 K", "120.3 K"],
    answer_en: "240.7 K",
    answer_hi: "240.7 K",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "A constant force 14 N acts over displacement 2 m. Work done is:",
    question_hi:
      "14 N का नियत बल 2 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["7.0 J", "16 J", "14.0 J", "28 J"],
    options_hi: ["7.0 J", "16 J", "14.0 J", "28 J"],
    answer_en: "28 J",
    answer_hi: "28 J",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en:
      "Maximum static friction for normal reaction 18 N and μ= 0.3 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=18 N, μ=0.3) है:",
    options_en: ["2.7 N", "60.0 N", "5.4 N", "18 N"],
    options_hi: ["2.7 N", "60.0 N", "5.4 N", "18 N"],
    answer_en: "5.4 N",
    answer_hi: "5.4 N",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "Two resistors 8 Ω and 4 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 8 Ω और 4 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["2.67 Ω", "32 Ω", "4 Ω", "12 Ω"],
    options_hi: ["2.67 Ω", "32 Ω", "4 Ω", "12 Ω"],
    answer_en: "2.67 Ω",
    answer_hi: "2.67 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "Gravitational potential energy of mass 18 kg at height 6 m (g=10) is:",
    question_hi:
      "18 kg द्रव्यमान की 6 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["540.0 J", "1080 J", "34 J", "108 J"],
    options_hi: ["540.0 J", "1080 J", "34 J", "108 J"],
    answer_en: "1080 J",
    answer_hi: "1080 J",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "In a process, heat supplied Q=165 J and work done W=53 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=165 J और किया गया कार्य W=53 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["112 J", "53 J", "165 J", "218 J"],
    options_hi: ["112 J", "53 J", "165 J", "218 J"],
    answer_en: "112 J",
    answer_hi: "112 J",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en:
      "A net force acts on a mass 7 kg producing acceleration 2 m/s². The force is:",
    question_hi: "7 kg द्रव्यमान पर 2 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["5 N", "9 N", "28 N", "14 N"],
    options_hi: ["5 N", "9 N", "28 N", "14 N"],
    answer_en: "14 N",
    answer_hi: "14 N",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "Gravitational potential energy of mass 14 kg at height 40 m (g=10) is:",
    question_hi:
      "14 kg द्रव्यमान की 40 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["2800.0 J", "64 J", "560 J", "5600 J"],
    options_hi: ["2800.0 J", "64 J", "560 J", "5600 J"],
    answer_en: "5600 J",
    answer_hi: "5600 J",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Projectile launched with speed 25 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "25 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["0", "62.5 m", "125.0 m", "31.2 m"],
    options_hi: ["0", "62.5 m", "125.0 m", "31.2 m"],
    answer_en: "62.5 m",
    answer_hi: "62.5 m",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "Work 288 J done in 19 s. Power is:",
    question_hi: "19 s में 288 J कार्य किया। शक्ति है:",
    options_en: ["15.2 W", "5472 W", "288 W", "30.3 W"],
    options_hi: ["15.2 W", "5472 W", "288 W", "30.3 W"],
    answer_en: "15.2 W",
    answer_hi: "15.2 W",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "Nucleus with mass number A=27. Approx total binding energy (avg 7.7 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=27 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.7 MeV/न्यूक्लिओन):",
    options_en: ["218.7 MeV", "7.7 MeV", "208.7 MeV", "104.4 MeV"],
    options_hi: ["218.7 MeV", "7.7 MeV", "208.7 MeV", "104.4 MeV"],
    answer_en: "208.7 MeV",
    answer_hi: "208.7 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "Energy difference between levels n=3 and n=6 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=3 और n=6 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["0.38 eV", "1.51 eV", "0.57 eV", "1.13 eV"],
    options_hi: ["0.38 eV", "1.51 eV", "0.57 eV", "1.13 eV"],
    answer_en: "1.13 eV",
    answer_hi: "1.13 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "A thin lens with focal length 20 cm forms an image for object at -40 cm. Image distance v is:",
    question_hi:
      "20 cm फोकल लंबाई वाले लेंस के लिए वस्तु -40 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-40 cm", "20 cm", "-40.0 cm", "40.0 cm"],
    options_hi: ["-40 cm", "20 cm", "-40.0 cm", "40.0 cm"],
    answer_en: "40.0 cm",
    answer_hi: "40.0 cm",
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
