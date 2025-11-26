const questions = [
  {
    num: 1,
    question_en:
      "A thin lens with focal length 10 cm forms an image for object at -50 cm. Image distance v is:",
    question_hi:
      "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -50 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["12.5 cm", "-50 cm", "-12.5 cm", "10 cm"],
    options_hi: ["12.5 cm", "-50 cm", "-12.5 cm", "10 cm"],
    answer_en: "12.5 cm",
    answer_hi: "12.5 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "A current 7 A flows through wire of cross-sectional area 1.15 m². Current density J is:",
    question_hi:
      "7 A धारा 1.15 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["6.07 A/m²", "8.07 A/m²", "0.16 A/m²", "3.04 A/m²"],
    options_hi: ["6.07 A/m²", "8.07 A/m²", "0.16 A/m²", "3.04 A/m²"],
    answer_en: "6.07 A/m²",
    answer_hi: "6.07 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en:
      "A sample with 701 nuclei undergoes 2 half-lives. Remaining nuclei:",
    question_hi: "701 नाभिक वाला नमूना 2 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["175", "0", "350", "701"],
    options_hi: ["175", "0", "350", "701"],
    answer_en: "175",
    answer_hi: "175",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "A current 6 A flows through wire of cross-sectional area 1.63 m². Current density J is:",
    question_hi:
      "6 A धारा 1.63 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["3.69 A/m²", "9.77 A/m²", "0.27 A/m²", "1.84 A/m²"],
    options_hi: ["3.69 A/m²", "9.77 A/m²", "0.27 A/m²", "1.84 A/m²"],
    answer_en: "3.69 A/m²",
    answer_hi: "3.69 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en:
      "A sample with 403 nuclei undergoes 3 half-lives. Remaining nuclei:",
    question_hi: "403 नाभिक वाला नमूना 3 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["100", "50", "201", "403"],
    options_hi: ["100", "50", "201", "403"],
    answer_en: "50",
    answer_hi: "50",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=8.00e+14 Hz and incident frequency f=9.60e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=8.00e+14 Hz और आपतित आवृत्ति f=9.60e+14 Hz होने पर परिणाम है:",
    options_en: [
      "No emission",
      "Cannot say",
      "Electrons just emitted (zero KE)",
      "Electrons emitted with KE > 0",
    ],
    options_hi: [
      "No emission",
      "Cannot say",
      "Electrons just emitted (zero KE)",
      "Electrons emitted with KE > 0",
    ],
    answer_en: "Electrons emitted with KE > 0",
    answer_hi: "Electrons emitted with KE > 0",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Time to fall freely from height 77 m (g=10 m/s²) is:",
    question_hi: "77 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["2.77 s", "3.92 s", "1.96 s", "7.85 s"],
    options_hi: ["2.77 s", "3.92 s", "1.96 s", "7.85 s"],
    answer_en: "3.92 s",
    answer_hi: "3.92 s",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "In a process, heat supplied Q=260 J and work done W=41 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=260 J और किया गया कार्य W=41 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["219 J", "301 J", "260 J", "41 J"],
    options_hi: ["219 J", "301 J", "260 J", "41 J"],
    answer_en: "219 J",
    answer_hi: "219 J",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "A resistor 10 Ω connected to 13 V. Current is:",
    question_hi: "10 Ω प्रतिरोधक को 13 V से जोड़ा। धारा है:",
    options_en: ["1.3 A", "130 A", "0.77 A", "0.65 A"],
    options_hi: ["1.3 A", "130 A", "0.77 A", "0.65 A"],
    answer_en: "1.3 A",
    answer_hi: "1.3 A",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "Capacitors 4 μF and 10 μF in parallel. Equivalent capacitance:",
    question_hi: "4 μF और 10 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["10 μF", "2.86 μF", "14 μF", "40 μF"],
    options_hi: ["10 μF", "2.86 μF", "14 μF", "40 μF"],
    answer_en: "14 μF",
    answer_hi: "14 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en:
      "A sample with 709 nuclei undergoes 4 half-lives. Remaining nuclei:",
    question_hi: "709 नाभिक वाला नमूना 4 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["354", "177", "44", "709"],
    options_hi: ["354", "177", "44", "709"],
    answer_en: "44",
    answer_hi: "44",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "A resistor 3 Ω connected to 13 V. Current is:",
    question_hi: "3 Ω प्रतिरोधक को 13 V से जोड़ा। धारा है:",
    options_en: ["39 A", "4.33 A", "0.23 A", "2.17 A"],
    options_hi: ["39 A", "4.33 A", "0.23 A", "2.17 A"],
    answer_en: "4.33 A",
    answer_hi: "4.33 A",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Time to fall freely from height 80 m (g=10 m/s²) is:",
    question_hi: "80 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["4.0 s", "8.0 s", "2.83 s", "2.0 s"],
    options_hi: ["4.0 s", "8.0 s", "2.83 s", "2.0 s"],
    answer_en: "4.0 s",
    answer_hi: "4.0 s",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "In a process, heat supplied Q=188 J and work done W=58 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=188 J और किया गया कार्य W=58 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["130 J", "246 J", "58 J", "188 J"],
    options_hi: ["130 J", "246 J", "58 J", "188 J"],
    answer_en: "130 J",
    answer_hi: "130 J",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["3.0e9 m/s", "3.0e7 m/s", "299863380 m/s", "1.5e8 m/s"],
    options_hi: ["3.0e9 m/s", "3.0e7 m/s", "299863380 m/s", "1.5e8 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "Body moves in circle radius 3 m at speed 20 m/s. Centripetal acceleration is:",
    question_hi:
      "3 m त्रिज्या वाले वृत्त में 20 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: [
      "266.6666666666667 m/s²",
      "133.33333333333334 m/s²",
      "6.666666666666667 m/s²",
      "20 m/s²",
    ],
    options_hi: [
      "266.6666666666667 m/s²",
      "133.33333333333334 m/s²",
      "6.666666666666667 m/s²",
      "20 m/s²",
    ],
    answer_en: "133.33333333333334 m/s²",
    answer_hi: "133.33333333333334 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "A current 8 A flows through wire of cross-sectional area 0.91 m². Current density J is:",
    question_hi:
      "8 A धारा 0.91 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["7.29 A/m²", "4.39 A/m²", "8.78 A/m²", "0.11 A/m²"],
    options_hi: ["7.29 A/m²", "4.39 A/m²", "8.78 A/m²", "0.11 A/m²"],
    answer_en: "8.78 A/m²",
    answer_hi: "8.78 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Nucleus with mass number A=17. Approx total binding energy (avg 7.4 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=17 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.4 MeV/न्यूक्लिओन):",
    options_en: ["62.8 MeV", "125.5 MeV", "135.5 MeV", "7.4 MeV"],
    options_hi: ["62.8 MeV", "125.5 MeV", "135.5 MeV", "7.4 MeV"],
    answer_en: "125.5 MeV",
    answer_hi: "125.5 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Time to fall freely from height 59 m (g=10 m/s²) is:",
    question_hi: "59 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.72 s", "6.87 s", "3.44 s", "2.43 s"],
    options_hi: ["1.72 s", "6.87 s", "3.44 s", "2.43 s"],
    answer_en: "3.44 s",
    answer_hi: "3.44 s",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en:
      "Gravitational potential energy of mass 15 kg at height 32 m (g=10) is:",
    question_hi:
      "15 kg द्रव्यमान की 32 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["57 J", "2400.0 J", "480 J", "4800 J"],
    options_hi: ["57 J", "2400.0 J", "480 J", "4800 J"],
    answer_en: "4800 J",
    answer_hi: "4800 J",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "Projectile launched with speed 17 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "17 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["14.4 m", "0", "57.8 m", "28.9 m"],
    options_hi: ["14.4 m", "0", "57.8 m", "28.9 m"],
    answer_en: "28.9 m",
    answer_hi: "28.9 m",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Dimension of energy is:",
    question_hi: "ऊर्जा का विमीय सूत्र क्या है?",
    options_en: ["[M]", "[M L^2 T^-2]", "[T]", "[L]"],
    options_hi: ["[M]", "[M L^2 T^-2]", "[T]", "[L]"],
    answer_en: "[M L^2 T^-2]",
    answer_hi: "[M L^2 T^-2]",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "A resistor 2 Ω connected to 8 V. Current is:",
    question_hi: "2 Ω प्रतिरोधक को 8 V से जोड़ा। धारा है:",
    options_en: ["0.25 A", "4.0 A", "2.0 A", "16 A"],
    options_hi: ["0.25 A", "4.0 A", "2.0 A", "16 A"],
    answer_en: "4.0 A",
    answer_hi: "4.0 A",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "Body moves in circle radius 2 m at speed 15 m/s. Centripetal acceleration is:",
    question_hi:
      "2 m त्रिज्या वाले वृत्त में 15 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["7.5 m/s²", "15 m/s²", "112.5 m/s²", "225.0 m/s²"],
    options_hi: ["7.5 m/s²", "15 m/s²", "112.5 m/s²", "225.0 m/s²"],
    answer_en: "112.5 m/s²",
    answer_hi: "112.5 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "Body moves in circle radius 10 m at speed 7 m/s. Centripetal acceleration is:",
    question_hi:
      "10 m त्रिज्या वाले वृत्त में 7 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["7 m/s²", "0.7 m/s²", "4.9 m/s²", "9.8 m/s²"],
    options_hi: ["7 m/s²", "0.7 m/s²", "4.9 m/s²", "9.8 m/s²"],
    answer_en: "4.9 m/s²",
    answer_hi: "4.9 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "A sample with 203 nuclei undergoes 4 half-lives. Remaining nuclei:",
    question_hi: "203 नाभिक वाला नमूना 4 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["101", "12", "203", "50"],
    options_hi: ["101", "12", "203", "50"],
    answer_en: "12",
    answer_hi: "12",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "A resistor 11 Ω connected to 13 V. Current is:",
    question_hi: "11 Ω प्रतिरोधक को 13 V से जोड़ा। धारा है:",
    options_en: ["143 A", "1.18 A", "0.85 A", "0.59 A"],
    options_hi: ["143 A", "1.18 A", "0.85 A", "0.59 A"],
    answer_en: "1.18 A",
    answer_hi: "1.18 A",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Time to fall freely from height 47 m (g=10 m/s²) is:",
    question_hi: "47 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["3.07 s", "2.17 s", "6.13 s", "1.53 s"],
    options_hi: ["3.07 s", "2.17 s", "6.13 s", "1.53 s"],
    answer_en: "3.07 s",
    answer_hi: "3.07 s",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Projectile launched with speed 40 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "40 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["320.0 m", "160.0 m", "0", "80.0 m"],
    options_hi: ["320.0 m", "160.0 m", "0", "80.0 m"],
    answer_en: "160.0 m",
    answer_hi: "160.0 m",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "A wave has frequency 271 Hz and wavelength 2.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 271 Hz और तरंगदैर्घ्य 2.0 m है। इसका वेग है:",
    options_en: ["271.0 m/s", "135.5 m/s", "0.007 m/s", "542.0 m/s"],
    options_hi: ["271.0 m/s", "135.5 m/s", "0.007 m/s", "542.0 m/s"],
    answer_en: "542.0 m/s",
    answer_hi: "542.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Fleming's left-hand rule is used to find the direction of:",
    question_hi:
      "फ्लेमिंग का बायाँ हाथ नियम किस दिशा को ज्ञात करने के लिए उपयोग होता है?",
    options_en: [
      "Force on a current-carrying conductor",
      "Charge density",
      "Induced current",
      "Magnetic field lines",
    ],
    options_hi: [
      "Force on a current-carrying conductor",
      "Charge density",
      "Induced current",
      "Magnetic field lines",
    ],
    answer_en: "Force on a current-carrying conductor",
    answer_hi: "Force on a current-carrying conductor",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
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
    num: 33,
    question_en:
      "Projectile launched with speed 32 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "32 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["51.2 m", "0", "204.8 m", "102.4 m"],
    options_hi: ["51.2 m", "0", "204.8 m", "102.4 m"],
    answer_en: "102.4 m",
    answer_hi: "102.4 m",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Ideal gas: P=200000 Pa, V=0.04 m³, n=2 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=200000 Pa, V=0.04 m³, n=2 mol. तापमान है:",
    options_en: ["481.3 K", "8000.0", "962.7 K", "240.7 K"],
    options_hi: ["481.3 K", "8000.0", "962.7 K", "240.7 K"],
    answer_en: "481.3 K",
    answer_hi: "481.3 K",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "A resistor 10 Ω connected to 21 V. Current is:",
    question_hi: "10 Ω प्रतिरोधक को 21 V से जोड़ा। धारा है:",
    options_en: ["210 A", "1.05 A", "2.1 A", "0.48 A"],
    options_hi: ["210 A", "1.05 A", "2.1 A", "0.48 A"],
    answer_en: "2.1 A",
    answer_hi: "2.1 A",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "A thin lens with focal length 25 cm forms an image for object at -30 cm. Image distance v is:",
    question_hi:
      "25 cm फोकल लंबाई वाले लेंस के लिए वस्तु -30 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-150.0 cm", "-30 cm", "150.0 cm", "25 cm"],
    options_hi: ["-150.0 cm", "-30 cm", "150.0 cm", "25 cm"],
    answer_en: "150.0 cm",
    answer_hi: "150.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "Energy difference between levels n=2 and n=4 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=2 और n=4 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["2.55 eV", "0.85 eV", "3.4 eV", "1.27 eV"],
    options_hi: ["2.55 eV", "0.85 eV", "3.4 eV", "1.27 eV"],
    answer_en: "2.55 eV",
    answer_hi: "2.55 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "A wave has frequency 165 Hz and wavelength 1.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 165 Hz और तरंगदैर्घ्य 1.0 m है। इसका वेग है:",
    options_en: ["165.0 m/s", "0", "0.006 m/s", "82.5 m/s"],
    options_hi: ["165.0 m/s", "0", "0.006 m/s", "82.5 m/s"],
    answer_en: "165.0 m/s",
    answer_hi: "165.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "Energy difference between levels n=2 and n=5 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=2 और n=5 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["3.4 eV", "0.54 eV", "2.86 eV", "1.43 eV"],
    options_hi: ["3.4 eV", "0.54 eV", "2.86 eV", "1.43 eV"],
    answer_en: "2.86 eV",
    answer_hi: "2.86 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en:
      "A thin lens with focal length 15 cm forms an image for object at -30 cm. Image distance v is:",
    question_hi:
      "15 cm फोकल लंबाई वाले लेंस के लिए वस्तु -30 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-30 cm", "15 cm", "30.0 cm", "-30.0 cm"],
    options_hi: ["-30 cm", "15 cm", "30.0 cm", "-30.0 cm"],
    answer_en: "30.0 cm",
    answer_hi: "30.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "A resistor 11 Ω connected to 16 V. Current is:",
    question_hi: "11 Ω प्रतिरोधक को 16 V से जोड़ा। धारा है:",
    options_en: ["1.45 A", "176 A", "0.73 A", "0.69 A"],
    options_hi: ["1.45 A", "176 A", "0.73 A", "0.69 A"],
    answer_en: "1.45 A",
    answer_hi: "1.45 A",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Work 259 J done in 12 s. Power is:",
    question_hi: "12 s में 259 J कार्य किया। शक्ति है:",
    options_en: ["43.2 W", "21.6 W", "3108 W", "259 W"],
    options_hi: ["43.2 W", "21.6 W", "3108 W", "259 W"],
    answer_en: "21.6 W",
    answer_hi: "21.6 W",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Dimension of power is:",
    question_hi: "शक्ति का विमीय सूत्र क्या है?",
    options_en: ["[L]", "[M]", "[M L^2 T^-3]", "[T]"],
    options_hi: ["[L]", "[M]", "[M L^2 T^-3]", "[T]"],
    answer_en: "[M L^2 T^-3]",
    answer_hi: "[M L^2 T^-3]",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "For mass-spring (m=3 kg, k=100 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=3 kg, k=100 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.17 s", "0.54 s", "36.28 s", "1.09 s"],
    options_hi: ["0.17 s", "0.54 s", "36.28 s", "1.09 s"],
    answer_en: "1.09 s",
    answer_hi: "1.09 s",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "A net force acts on a mass 6 kg producing acceleration 10 m/s². The force is:",
    question_hi: "6 kg द्रव्यमान पर 10 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["600 N", "-4 N", "60 N", "16 N"],
    options_hi: ["600 N", "-4 N", "60 N", "16 N"],
    answer_en: "60 N",
    answer_hi: "60 N",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "A net force acts on a mass 6 kg producing acceleration 6 m/s². The force is:",
    question_hi: "6 kg द्रव्यमान पर 6 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["0 N", "36 N", "12 N", "216 N"],
    options_hi: ["0 N", "36 N", "12 N", "216 N"],
    answer_en: "36 N",
    answer_hi: "36 N",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Body moves in circle radius 6 m at speed 17 m/s. Centripetal acceleration is:",
    question_hi:
      "6 m त्रिज्या वाले वृत्त में 17 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: [
      "2.8333333333333335 m/s²",
      "48.166666666666664 m/s²",
      "96.33333333333333 m/s²",
      "17 m/s²",
    ],
    options_hi: [
      "2.8333333333333335 m/s²",
      "48.166666666666664 m/s²",
      "96.33333333333333 m/s²",
      "17 m/s²",
    ],
    answer_en: "48.166666666666664 m/s²",
    answer_hi: "48.166666666666664 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "In a process, heat supplied Q=258 J and work done W=28 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=258 J और किया गया कार्य W=28 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["286 J", "258 J", "230 J", "28 J"],
    options_hi: ["286 J", "258 J", "230 J", "28 J"],
    answer_en: "230 J",
    answer_hi: "230 J",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "In a process, heat supplied Q=64 J and work done W=51 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=64 J और किया गया कार्य W=51 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["13 J", "51 J", "115 J", "64 J"],
    options_hi: ["13 J", "51 J", "115 J", "64 J"],
    answer_en: "13 J",
    answer_hi: "13 J",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "Body moves in circle radius 5 m at speed 30 m/s. Centripetal acceleration is:",
    question_hi:
      "5 m त्रिज्या वाले वृत्त में 30 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["30 m/s²", "180.0 m/s²", "6.0 m/s²", "360.0 m/s²"],
    options_hi: ["30 m/s²", "180.0 m/s²", "6.0 m/s²", "360.0 m/s²"],
    answer_en: "180.0 m/s²",
    answer_hi: "180.0 m/s²",
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
