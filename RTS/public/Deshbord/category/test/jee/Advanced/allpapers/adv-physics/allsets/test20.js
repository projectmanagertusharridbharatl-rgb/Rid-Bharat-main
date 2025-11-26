const questions = [
  {
    num: 1,
    question_en: "Ideal gas: P=300000 Pa, V=0.02 m³, n=1 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=300000 Pa, V=0.02 m³, n=1 mol. तापमान है:",
    options_en: ["361.0 K", "1444.0 K", "722.0 K", "6000.0"],
    options_hi: ["361.0 K", "1444.0 K", "722.0 K", "6000.0"],
    answer_en: "722.0 K",
    answer_hi: "722.0 K",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "A current 3 A flows through wire of cross-sectional area 1.00 m². Current density J is:",
    question_hi:
      "3 A धारा 1.00 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.33 A/m²", "1.5 A/m²", "2.99 A/m²", "3.01 A/m²"],
    options_hi: ["0.33 A/m²", "1.5 A/m²", "2.99 A/m²", "3.01 A/m²"],
    answer_en: "3.01 A/m²",
    answer_hi: "3.01 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en:
      "A sample with 773 nuclei undergoes 4 half-lives. Remaining nuclei:",
    question_hi: "773 नाभिक वाला नमूना 4 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["48", "193", "773", "386"],
    options_hi: ["48", "193", "773", "386"],
    answer_en: "48",
    answer_hi: "48",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "Energy difference between levels n=2 and n=5 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=2 और n=5 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["1.43 eV", "2.86 eV", "0.54 eV", "3.4 eV"],
    options_hi: ["1.43 eV", "2.86 eV", "0.54 eV", "3.4 eV"],
    answer_en: "2.86 eV",
    answer_hi: "2.86 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "For mass-spring (m=4 kg, k=50 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=4 kg, k=50 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.89 s", "0.28 s", "1.78 s", "22.21 s"],
    options_hi: ["0.89 s", "0.28 s", "1.78 s", "22.21 s"],
    answer_en: "1.78 s",
    answer_hi: "1.78 s",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "A resistor 1 Ω connected to 22 V. Current is:",
    question_hi: "1 Ω प्रतिरोधक को 22 V से जोड़ा। धारा है:",
    options_en: ["22.0 A", "11.0 A", "22 A", "0.05 A"],
    options_hi: ["22.0 A", "11.0 A", "22 A", "0.05 A"],
    answer_en: "22.0 A",
    answer_hi: "22.0 A",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=7.00e+14 Hz and incident frequency f=8.40e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=7.00e+14 Hz और आपतित आवृत्ति f=8.40e+14 Hz होने पर परिणाम है:",
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
    num: 8,
    question_en:
      "A car travels 78 km at 30 km/h and then 79 km at 59 km/h. The average speed is:",
    question_hi:
      "एक कार 30 km/h की गति से 78 km और फिर 59 km/h से 79 km चलती है। औसत वेग है:",
    options_en: ["39.9 km/h", "30 km/h", "44.5 km/h", "59 km/h"],
    options_hi: ["39.9 km/h", "30 km/h", "44.5 km/h", "59 km/h"],
    answer_en: "39.9 km/h",
    answer_hi: "39.9 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en:
      "A sample with 275 nuclei undergoes 4 half-lives. Remaining nuclei:",
    question_hi: "275 नाभिक वाला नमूना 4 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["68", "275", "137", "17"],
    options_hi: ["68", "275", "137", "17"],
    answer_en: "17",
    answer_hi: "17",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
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
    num: 11,
    question_en: "A resistor 2 Ω connected to 22 V. Current is:",
    question_hi: "2 Ω प्रतिरोधक को 22 V से जोड़ा। धारा है:",
    options_en: ["44 A", "11.0 A", "5.5 A", "0.09 A"],
    options_hi: ["44 A", "11.0 A", "5.5 A", "0.09 A"],
    answer_en: "11.0 A",
    answer_hi: "11.0 A",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Dimension of force is:",
    question_hi: "बल का विमीय सूत्र क्या है?",
    options_en: ["[M]", "[L]", "[T]", "[M L T^-2]"],
    options_hi: ["[M]", "[L]", "[T]", "[M L T^-2]"],
    answer_en: "[M L T^-2]",
    answer_hi: "[M L T^-2]",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "A wave has frequency 129 Hz and wavelength 1.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 129 Hz और तरंगदैर्घ्य 1.0 m है। इसका वेग है:",
    options_en: ["129.0 m/s", "0.008 m/s", "0", "64.5 m/s"],
    options_hi: ["129.0 m/s", "0.008 m/s", "0", "64.5 m/s"],
    answer_en: "129.0 m/s",
    answer_hi: "129.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "A sample with 717 nuclei undergoes 3 half-lives. Remaining nuclei:",
    question_hi: "717 नाभिक वाला नमूना 3 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["179", "89", "358", "717"],
    options_hi: ["179", "89", "358", "717"],
    answer_en: "89",
    answer_hi: "89",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "A car travels 33 km at 70 km/h and then 76 km at 62 km/h. The average speed is:",
    question_hi:
      "एक कार 70 km/h की गति से 33 km और फिर 62 km/h से 76 km चलती है। औसत वेग है:",
    options_en: ["64.2 km/h", "62 km/h", "66.0 km/h", "70 km/h"],
    options_hi: ["64.2 km/h", "62 km/h", "66.0 km/h", "70 km/h"],
    answer_en: "64.2 km/h",
    answer_hi: "64.2 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "Nucleus with mass number A=6. Approx total binding energy (avg 7.0 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=6 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.0 MeV/न्यूक्लिओन):",
    options_en: ["21.1 MeV", "7.0 MeV", "52.3 MeV", "42.3 MeV"],
    options_hi: ["21.1 MeV", "7.0 MeV", "52.3 MeV", "42.3 MeV"],
    answer_en: "42.3 MeV",
    answer_hi: "42.3 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Body moves in circle radius 10 m at speed 8 m/s. Centripetal acceleration is:",
    question_hi:
      "10 m त्रिज्या वाले वृत्त में 8 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["8 m/s²", "0.8 m/s²", "6.4 m/s²", "12.8 m/s²"],
    options_hi: ["8 m/s²", "0.8 m/s²", "6.4 m/s²", "12.8 m/s²"],
    answer_en: "6.4 m/s²",
    answer_hi: "6.4 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "For mass-spring (m=2 kg, k=200 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=2 kg, k=200 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.31 s", "0.63 s", "0.1 s", "62.83 s"],
    options_hi: ["0.31 s", "0.63 s", "0.1 s", "62.83 s"],
    answer_en: "0.63 s",
    answer_hi: "0.63 s",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en:
      "Nucleus with mass number A=37. Approx total binding energy (avg 7.9 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=37 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.9 MeV/न्यूक्लिओन):",
    options_en: ["7.9 MeV", "300.6 MeV", "290.6 MeV", "145.3 MeV"],
    options_hi: ["7.9 MeV", "300.6 MeV", "290.6 MeV", "145.3 MeV"],
    answer_en: "290.6 MeV",
    answer_hi: "290.6 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Work 992 J done in 11 s. Power is:",
    question_hi: "11 s में 992 J कार्य किया। शक्ति है:",
    options_en: ["90.2 W", "180.4 W", "992 W", "10912 W"],
    options_hi: ["90.2 W", "180.4 W", "992 W", "10912 W"],
    answer_en: "90.2 W",
    answer_hi: "90.2 W",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "Gravitational potential energy of mass 2 kg at height 30 m (g=10) is:",
    question_hi:
      "2 kg द्रव्यमान की 30 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["300.0 J", "600 J", "42 J", "60 J"],
    options_hi: ["300.0 J", "600 J", "42 J", "60 J"],
    answer_en: "600 J",
    answer_hi: "600 J",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Dimension of velocity is:",
    question_hi: "वेग का विमीय सूत्र क्या है?",
    options_en: ["[L]", "[M]", "[T]", "[L T^-1]"],
    options_hi: ["[L]", "[M]", "[T]", "[L T^-1]"],
    answer_en: "[L T^-1]",
    answer_hi: "[L T^-1]",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "A net force acts on a mass 9 kg producing acceleration 1 m/s². The force is:",
    question_hi: "9 kg द्रव्यमान पर 1 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["10 N", "0", "9 N", "8 N"],
    options_hi: ["10 N", "0", "9 N", "8 N"],
    answer_en: "9 N",
    answer_hi: "9 N",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "A thin lens with focal length 15 cm forms an image for object at -50 cm. Image distance v is:",
    question_hi:
      "15 cm फोकल लंबाई वाले लेंस के लिए वस्तु -50 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-50 cm", "15 cm", "21.43 cm", "-21.43 cm"],
    options_hi: ["-50 cm", "15 cm", "21.43 cm", "-21.43 cm"],
    answer_en: "21.43 cm",
    answer_hi: "21.43 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "In a process, heat supplied Q=131 J and work done W=25 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=131 J और किया गया कार्य W=25 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["131 J", "106 J", "156 J", "25 J"],
    options_hi: ["131 J", "106 J", "156 J", "25 J"],
    answer_en: "106 J",
    answer_hi: "106 J",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Work 672 J done in 18 s. Power is:",
    question_hi: "18 s में 672 J कार्य किया। शक्ति है:",
    options_en: ["12096 W", "74.7 W", "37.3 W", "672 W"],
    options_hi: ["12096 W", "74.7 W", "37.3 W", "672 W"],
    answer_en: "37.3 W",
    answer_hi: "37.3 W",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "For mass-spring (m=1 kg, k=100 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=1 kg, k=100 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.1 s", "62.83 s", "0.63 s", "0.31 s"],
    options_hi: ["0.1 s", "62.83 s", "0.63 s", "0.31 s"],
    answer_en: "0.63 s",
    answer_hi: "0.63 s",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "Projectile launched with speed 25 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "25 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["31.2 m", "62.5 m", "125.0 m", "0"],
    options_hi: ["31.2 m", "62.5 m", "125.0 m", "0"],
    answer_en: "62.5 m",
    answer_hi: "62.5 m",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Projectile launched with speed 22 m/s at 60°. Range (g=10 m/s²) is:",
    question_hi: "22 m/s की गति से 60° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["83.8 m", "48.4 m", "41.9 m", "24.2 m"],
    options_hi: ["83.8 m", "48.4 m", "41.9 m", "24.2 m"],
    answer_en: "41.9 m",
    answer_hi: "41.9 m",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=7.00e+14 Hz and incident frequency f=7.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=7.00e+14 Hz और आपतित आवृत्ति f=7.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Maximum KE",
      "Electrons just emitted (zero KE)",
      "No emission",
      "Cannot say",
    ],
    options_hi: [
      "Maximum KE",
      "Electrons just emitted (zero KE)",
      "No emission",
      "Cannot say",
    ],
    answer_en: "Electrons just emitted (zero KE)",
    answer_hi: "Electrons just emitted (zero KE)",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Dimension of power is:",
    question_hi: "शक्ति का विमीय सूत्र क्या है?",
    options_en: ["[M L^2 T^-3]", "[M]", "[L]", "[T]"],
    options_hi: ["[M L^2 T^-3]", "[M]", "[L]", "[T]"],
    answer_en: "[M L^2 T^-3]",
    answer_hi: "[M L^2 T^-3]",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "Projectile launched with speed 25 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "25 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["125.0 m", "0", "62.5 m", "31.2 m"],
    options_hi: ["125.0 m", "0", "62.5 m", "31.2 m"],
    answer_en: "62.5 m",
    answer_hi: "62.5 m",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "Energy difference between levels n=1 and n=4 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=1 और n=4 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["12.75 eV", "6.38 eV", "0.85 eV", "13.6 eV"],
    options_hi: ["12.75 eV", "6.38 eV", "0.85 eV", "13.6 eV"],
    answer_en: "12.75 eV",
    answer_hi: "12.75 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "A current 5 A flows through wire of cross-sectional area 1.10 m². Current density J is:",
    question_hi:
      "5 A धारा 1.10 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.22 A/m²", "4.56 A/m²", "2.28 A/m²", "5.49 A/m²"],
    options_hi: ["0.22 A/m²", "4.56 A/m²", "2.28 A/m²", "5.49 A/m²"],
    answer_en: "4.56 A/m²",
    answer_hi: "4.56 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Fleming's left-hand rule is used to find the direction of:",
    question_hi:
      "फ्लेमिंग का बायाँ हाथ नियम किस दिशा को ज्ञात करने के लिए उपयोग होता है?",
    options_en: [
      "Induced current",
      "Charge density",
      "Magnetic field lines",
      "Force on a current-carrying conductor",
    ],
    options_hi: [
      "Induced current",
      "Charge density",
      "Magnetic field lines",
      "Force on a current-carrying conductor",
    ],
    answer_en: "Force on a current-carrying conductor",
    answer_hi: "Force on a current-carrying conductor",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "Maximum static friction for normal reaction 12 N and μ= 0.2 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=12 N, μ=0.2) है:",
    options_en: ["60.0 N", "2.4 N", "1.2 N", "12 N"],
    options_hi: ["60.0 N", "2.4 N", "1.2 N", "12 N"],
    answer_en: "2.4 N",
    answer_hi: "2.4 N",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "Projectile launched with speed 18 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "18 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["16.2 m", "0", "64.8 m", "32.4 m"],
    options_hi: ["16.2 m", "0", "64.8 m", "32.4 m"],
    answer_en: "32.4 m",
    answer_hi: "32.4 m",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "A car travels 45 km at 56 km/h and then 57 km at 36 km/h. The average speed is:",
    question_hi:
      "एक कार 56 km/h की गति से 45 km और फिर 36 km/h से 57 km चलती है। औसत वेग है:",
    options_en: ["56 km/h", "46.0 km/h", "36 km/h", "42.7 km/h"],
    options_hi: ["56 km/h", "46.0 km/h", "36 km/h", "42.7 km/h"],
    answer_en: "42.7 km/h",
    answer_hi: "42.7 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=6.00e+14 Hz and incident frequency f=4.80e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=6.00e+14 Hz और आपतित आवृत्ति f=4.80e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Infinite KE",
      "No emission",
      "Electrons emitted with high KE",
      "Electrons emitted with zero KE",
    ],
    options_hi: [
      "Infinite KE",
      "No emission",
      "Electrons emitted with high KE",
      "Electrons emitted with zero KE",
    ],
    answer_en: "No emission",
    answer_hi: "No emission",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en:
      "Capacitors 5 μF and 10 μF in parallel. Equivalent capacitance:",
    question_hi: "5 μF और 10 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["15 μF", "10 μF", "50 μF", "3.33 μF"],
    options_hi: ["15 μF", "10 μF", "50 μF", "3.33 μF"],
    answer_en: "15 μF",
    answer_hi: "15 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "A resistor 6 Ω connected to 11 V. Current is:",
    question_hi: "6 Ω प्रतिरोधक को 11 V से जोड़ा। धारा है:",
    options_en: ["1.83 A", "0.92 A", "66 A", "0.55 A"],
    options_hi: ["1.83 A", "0.92 A", "66 A", "0.55 A"],
    answer_en: "1.83 A",
    answer_hi: "1.83 A",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Dimension of energy is:",
    question_hi: "ऊर्जा का विमीय सूत्र क्या है?",
    options_en: ["[M L^2 T^-2]", "[T]", "[M]", "[L]"],
    options_hi: ["[M L^2 T^-2]", "[T]", "[M]", "[L]"],
    answer_en: "[M L^2 T^-2]",
    answer_hi: "[M L^2 T^-2]",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "Two resistors 3 Ω and 2 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 3 Ω और 2 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["1.2 Ω", "6 Ω", "5 Ω", "2 Ω"],
    options_hi: ["1.2 Ω", "6 Ω", "5 Ω", "2 Ω"],
    answer_en: "1.2 Ω",
    answer_hi: "1.2 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Ideal gas: P=100000 Pa, V=0.02 m³, n=1 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=100000 Pa, V=0.02 m³, n=1 mol. तापमान है:",
    options_en: ["120.3 K", "481.3 K", "240.7 K", "2000.0"],
    options_hi: ["120.3 K", "481.3 K", "240.7 K", "2000.0"],
    answer_en: "240.7 K",
    answer_hi: "240.7 K",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "A constant force 49 N acts over displacement 7 m. Work done is:",
    question_hi:
      "49 N का नियत बल 7 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["343 J", "7.0 J", "171.5 J", "56 J"],
    options_hi: ["343 J", "7.0 J", "171.5 J", "56 J"],
    answer_en: "343 J",
    answer_hi: "343 J",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "A constant force 34 N acts over displacement 5 m. Work done is:",
    question_hi:
      "34 N का नियत बल 5 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["6.8 J", "39 J", "170 J", "85.0 J"],
    options_hi: ["6.8 J", "39 J", "170 J", "85.0 J"],
    answer_en: "170 J",
    answer_hi: "170 J",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Projectile launched with speed 26 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "26 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["135.2 m", "33.8 m", "0", "67.6 m"],
    options_hi: ["135.2 m", "33.8 m", "0", "67.6 m"],
    answer_en: "67.6 m",
    answer_hi: "67.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["3.0e9 m/s", "1.5e8 m/s", "299863380 m/s", "3.0e7 m/s"],
    options_hi: ["3.0e9 m/s", "1.5e8 m/s", "299863380 m/s", "3.0e7 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "A car travels 55 km at 52 km/h and then 65 km at 62 km/h. The average speed is:",
    question_hi:
      "एक कार 52 km/h की गति से 55 km और फिर 62 km/h से 65 km चलती है। औसत वेग है:",
    options_en: ["62 km/h", "57.0 km/h", "52 km/h", "0"],
    options_hi: ["62 km/h", "57.0 km/h", "52 km/h", "0"],
    answer_en: "57.0 km/h",
    answer_hi: "57.0 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Work 142 J done in 17 s. Power is:",
    question_hi: "17 s में 142 J कार्य किया। शक्ति है:",
    options_en: ["16.7 W", "2414 W", "8.4 W", "142 W"],
    options_hi: ["16.7 W", "2414 W", "8.4 W", "142 W"],
    answer_en: "8.4 W",
    answer_hi: "8.4 W",
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
