const questions = [
  {
    num: 1,
    question_en: "Two resistors 2 Ω and 10 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 2 Ω और 10 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["1.67 Ω", "12 Ω", "10 Ω", "20 Ω"],
    options_hi: ["1.67 Ω", "12 Ω", "10 Ω", "20 Ω"],
    answer_en: "12 Ω",
    answer_hi: "12 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "A car travels 67 km at 71 km/h and then 76 km at 31 km/h. The average speed is:",
    question_hi:
      "एक कार 71 km/h की गति से 67 km और फिर 31 km/h से 76 km चलती है। औसत वेग है:",
    options_en: ["51.0 km/h", "42.1 km/h", "31 km/h", "71 km/h"],
    options_hi: ["51.0 km/h", "42.1 km/h", "31 km/h", "71 km/h"],
    answer_en: "42.1 km/h",
    answer_hi: "42.1 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en:
      "In a process, heat supplied Q=246 J and work done W=40 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=246 J और किया गया कार्य W=40 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["286 J", "40 J", "206 J", "246 J"],
    options_hi: ["286 J", "40 J", "206 J", "246 J"],
    answer_en: "206 J",
    answer_hi: "206 J",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "A current 8 A flows through wire of cross-sectional area 0.76 m². Current density J is:",
    question_hi:
      "8 A धारा 0.76 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.09 A/m²", "10.59 A/m²", "5.3 A/m²", "6.04 A/m²"],
    options_hi: ["0.09 A/m²", "10.59 A/m²", "5.3 A/m²", "6.04 A/m²"],
    answer_en: "10.59 A/m²",
    answer_hi: "10.59 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "A resistor 4 Ω connected to 9 V. Current is:",
    question_hi: "4 Ω प्रतिरोधक को 9 V से जोड़ा। धारा है:",
    options_en: ["1.12 A", "0.44 A", "2.25 A", "36 A"],
    options_hi: ["1.12 A", "0.44 A", "2.25 A", "36 A"],
    answer_en: "2.25 A",
    answer_hi: "2.25 A",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "A car travels 32 km at 64 km/h and then 32 km at 66 km/h. The average speed is:",
    question_hi:
      "एक कार 64 km/h की गति से 32 km और फिर 66 km/h से 32 km चलती है। औसत वेग है:",
    options_en: ["64 km/h", "65.0 km/h", "66 km/h", "0"],
    options_hi: ["64 km/h", "65.0 km/h", "66 km/h", "0"],
    answer_en: "65.0 km/h",
    answer_hi: "65.0 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Dimension of velocity is:",
    question_hi: "वेग का विमीय सूत्र क्या है?",
    options_en: ["[L T^-1]", "[L]", "[M]", "[T]"],
    options_hi: ["[L T^-1]", "[L]", "[M]", "[T]"],
    answer_en: "[L T^-1]",
    answer_hi: "[L T^-1]",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "A sample with 387 nuclei undergoes 1 half-lives. Remaining nuclei:",
    question_hi: "387 नाभिक वाला नमूना 1 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["0", "387", "96", "193"],
    options_hi: ["0", "387", "96", "193"],
    answer_en: "193",
    answer_hi: "193",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Faraday's law states that induced emf is proportional to:",
    question_hi:
      "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    options_en: [
      "Rate of change of magnetic flux",
      "Square of current",
      "Magnetic flux itself",
      "Resistance of coil",
    ],
    options_hi: [
      "Rate of change of magnetic flux",
      "Square of current",
      "Magnetic flux itself",
      "Resistance of coil",
    ],
    answer_en: "Rate of change of magnetic flux",
    answer_hi: "Rate of change of magnetic flux",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "A net force acts on a mass 10 kg producing acceleration 2 m/s². The force is:",
    question_hi: "10 kg द्रव्यमान पर 2 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["40 N", "12 N", "20 N", "8 N"],
    options_hi: ["40 N", "12 N", "20 N", "8 N"],
    answer_en: "20 N",
    answer_hi: "20 N",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en:
      "A net force acts on a mass 1 kg producing acceleration 9 m/s². The force is:",
    question_hi: "1 kg द्रव्यमान पर 9 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["9 N", "10 N", "-8 N", "81 N"],
    options_hi: ["9 N", "10 N", "-8 N", "81 N"],
    answer_en: "9 N",
    answer_hi: "9 N",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["3.0e9 m/s", "3.0e7 m/s", "1.5e8 m/s", "299863380 m/s"],
    options_hi: ["3.0e9 m/s", "3.0e7 m/s", "1.5e8 m/s", "299863380 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "Nucleus with mass number A=9. Approx total binding energy (avg 7.1 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=9 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.1 MeV/न्यूक्लिओन):",
    options_en: ["31.8 MeV", "73.6 MeV", "7.1 MeV", "63.6 MeV"],
    options_hi: ["31.8 MeV", "73.6 MeV", "7.1 MeV", "63.6 MeV"],
    answer_en: "63.6 MeV",
    answer_hi: "63.6 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "Energy difference between levels n=3 and n=5 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=3 और n=5 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["0.48 eV", "0.54 eV", "1.51 eV", "0.97 eV"],
    options_hi: ["0.48 eV", "0.54 eV", "1.51 eV", "0.97 eV"],
    answer_en: "0.97 eV",
    answer_hi: "0.97 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "A sample with 258 nuclei undergoes 2 half-lives. Remaining nuclei:",
    question_hi: "258 नाभिक वाला नमूना 2 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["129", "64", "0", "258"],
    options_hi: ["129", "64", "0", "258"],
    answer_en: "64",
    answer_hi: "64",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "A thin lens with focal length 10 cm forms an image for object at -60 cm. Image distance v is:",
    question_hi:
      "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -60 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-12.0 cm", "10 cm", "12.0 cm", "-60 cm"],
    options_hi: ["-12.0 cm", "10 cm", "12.0 cm", "-60 cm"],
    answer_en: "12.0 cm",
    answer_hi: "12.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Energy difference between levels n=3 and n=6 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=3 और n=6 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["0.57 eV", "1.13 eV", "1.51 eV", "0.38 eV"],
    options_hi: ["0.57 eV", "1.13 eV", "1.51 eV", "0.38 eV"],
    answer_en: "1.13 eV",
    answer_hi: "1.13 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Maximum static friction for normal reaction 34 N and μ= 0.4 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=34 N, μ=0.4) है:",
    options_en: ["13.6 N", "6.8 N", "85.0 N", "34 N"],
    options_hi: ["13.6 N", "6.8 N", "85.0 N", "34 N"],
    answer_en: "13.6 N",
    answer_hi: "13.6 N",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Time to fall freely from height 42 m (g=10 m/s²) is:",
    question_hi: "42 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.45 s", "2.05 s", "2.9 s", "5.8 s"],
    options_hi: ["1.45 s", "2.05 s", "2.9 s", "5.8 s"],
    answer_en: "2.9 s",
    answer_hi: "2.9 s",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en:
      "A constant force 28 N acts over displacement 6 m. Work done is:",
    question_hi:
      "28 N का नियत बल 6 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["168 J", "34 J", "84.0 J", "4.7 J"],
    options_hi: ["168 J", "34 J", "84.0 J", "4.7 J"],
    answer_en: "168 J",
    answer_hi: "168 J",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "A constant force 21 N acts over displacement 10 m. Work done is:",
    question_hi:
      "21 N का नियत बल 10 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["2.1 J", "31 J", "210 J", "105.0 J"],
    options_hi: ["2.1 J", "31 J", "210 J", "105.0 J"],
    answer_en: "210 J",
    answer_hi: "210 J",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Dimension of force is:",
    question_hi: "बल का विमीय सूत्र क्या है?",
    options_en: ["[T]", "[M]", "[M L T^-2]", "[L]"],
    options_hi: ["[T]", "[M]", "[M L T^-2]", "[L]"],
    answer_en: "[M L T^-2]",
    answer_hi: "[M L T^-2]",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Two resistors 2 Ω and 6 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 2 Ω और 6 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["8 Ω", "12 Ω", "6 Ω", "1.50 Ω"],
    options_hi: ["8 Ω", "12 Ω", "6 Ω", "1.50 Ω"],
    answer_en: "8 Ω",
    answer_hi: "8 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "Two resistors 10 Ω and 5 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 10 Ω और 5 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["3.33 Ω", "15 Ω", "5 Ω", "50 Ω"],
    options_hi: ["3.33 Ω", "15 Ω", "5 Ω", "50 Ω"],
    answer_en: "3.33 Ω",
    answer_hi: "3.33 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "Maximum static friction for normal reaction 61 N and μ= 0.3 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=61 N, μ=0.3) है:",
    options_en: ["203.3 N", "18.3 N", "9.2 N", "61 N"],
    options_hi: ["203.3 N", "18.3 N", "9.2 N", "61 N"],
    answer_en: "18.3 N",
    answer_hi: "18.3 N",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
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
    num: 27,
    question_en: "Time to fall freely from height 36 m (g=10 m/s²) is:",
    question_hi: "36 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["2.68 s", "1.9 s", "5.37 s", "1.34 s"],
    options_hi: ["2.68 s", "1.9 s", "5.37 s", "1.34 s"],
    answer_en: "2.68 s",
    answer_hi: "2.68 s",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "A constant force 39 N acts over displacement 9 m. Work done is:",
    question_hi:
      "39 N का नियत बल 9 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["48 J", "351 J", "4.3 J", "175.5 J"],
    options_hi: ["48 J", "351 J", "4.3 J", "175.5 J"],
    answer_en: "351 J",
    answer_hi: "351 J",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Nucleus with mass number A=12. Approx total binding energy (avg 8.1 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=12 वाले नाभिक की कुल बंधन ऊर्जा (औसत 8.1 MeV/न्यूक्लिओन):",
    options_en: ["48.7 MeV", "107.4 MeV", "97.4 MeV", "8.1 MeV"],
    options_hi: ["48.7 MeV", "107.4 MeV", "97.4 MeV", "8.1 MeV"],
    answer_en: "97.4 MeV",
    answer_hi: "97.4 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Time to fall freely from height 14 m (g=10 m/s²) is:",
    question_hi: "14 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["3.35 s", "1.67 s", "0.84 s", "1.18 s"],
    options_hi: ["3.35 s", "1.67 s", "0.84 s", "1.18 s"],
    answer_en: "1.67 s",
    answer_hi: "1.67 s",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "A current 3 A flows through wire of cross-sectional area 0.85 m². Current density J is:",
    question_hi:
      "3 A धारा 0.85 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.28 A/m²", "3.54 A/m²", "2.54 A/m²", "1.77 A/m²"],
    options_hi: ["0.28 A/m²", "3.54 A/m²", "2.54 A/m²", "1.77 A/m²"],
    answer_en: "3.54 A/m²",
    answer_hi: "3.54 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "A resistor 6 Ω connected to 13 V. Current is:",
    question_hi: "6 Ω प्रतिरोधक को 13 V से जोड़ा। धारा है:",
    options_en: ["0.46 A", "2.17 A", "1.08 A", "78 A"],
    options_hi: ["0.46 A", "2.17 A", "1.08 A", "78 A"],
    answer_en: "2.17 A",
    answer_hi: "2.17 A",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Work 516 J done in 3 s. Power is:",
    question_hi: "3 s में 516 J कार्य किया। शक्ति है:",
    options_en: ["1548 W", "516 W", "172.0 W", "344.0 W"],
    options_hi: ["1548 W", "516 W", "172.0 W", "344.0 W"],
    answer_en: "172.0 W",
    answer_hi: "172.0 W",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "For mass-spring (m=1 kg, k=100 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=1 kg, k=100 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.63 s", "62.83 s", "0.1 s", "0.31 s"],
    options_hi: ["0.63 s", "62.83 s", "0.1 s", "0.31 s"],
    answer_en: "0.63 s",
    answer_hi: "0.63 s",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "Nucleus with mass number A=26. Approx total binding energy (avg 8.5 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=26 वाले नाभिक की कुल बंधन ऊर्जा (औसत 8.5 MeV/न्यूक्लिओन):",
    options_en: ["8.5 MeV", "220.8 MeV", "230.8 MeV", "110.4 MeV"],
    options_hi: ["8.5 MeV", "220.8 MeV", "230.8 MeV", "110.4 MeV"],
    answer_en: "220.8 MeV",
    answer_hi: "220.8 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "A net force acts on a mass 9 kg producing acceleration 2 m/s². The force is:",
    question_hi: "9 kg द्रव्यमान पर 2 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["36 N", "7 N", "18 N", "11 N"],
    options_hi: ["36 N", "7 N", "18 N", "11 N"],
    answer_en: "18 N",
    answer_hi: "18 N",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "In a process, heat supplied Q=279 J and work done W=19 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=279 J और किया गया कार्य W=19 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["298 J", "260 J", "19 J", "279 J"],
    options_hi: ["298 J", "260 J", "19 J", "279 J"],
    answer_en: "260 J",
    answer_hi: "260 J",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "A thin lens with focal length 25 cm forms an image for object at -30 cm. Image distance v is:",
    question_hi:
      "25 cm फोकल लंबाई वाले लेंस के लिए वस्तु -30 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-150.0 cm", "25 cm", "-30 cm", "150.0 cm"],
    options_hi: ["-150.0 cm", "25 cm", "-30 cm", "150.0 cm"],
    answer_en: "150.0 cm",
    answer_hi: "150.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "A resistor 11 Ω connected to 5 V. Current is:",
    question_hi: "11 Ω प्रतिरोधक को 5 V से जोड़ा। धारा है:",
    options_en: ["2.20 A", "0.23 A", "0.45 A", "55 A"],
    options_hi: ["2.20 A", "0.23 A", "0.45 A", "55 A"],
    answer_en: "0.45 A",
    answer_hi: "0.45 A",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en:
      "A constant force 25 N acts over displacement 8 m. Work done is:",
    question_hi:
      "25 N का नियत बल 8 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["33 J", "3.1 J", "200 J", "100.0 J"],
    options_hi: ["33 J", "3.1 J", "200 J", "100.0 J"],
    answer_en: "200 J",
    answer_hi: "200 J",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Work 836 J done in 11 s. Power is:",
    question_hi: "11 s में 836 J कार्य किया। शक्ति है:",
    options_en: ["9196 W", "152.0 W", "76.0 W", "836 W"],
    options_hi: ["9196 W", "152.0 W", "76.0 W", "836 W"],
    answer_en: "76.0 W",
    answer_hi: "76.0 W",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "Maximum static friction for normal reaction 81 N and μ= 0.2 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=81 N, μ=0.2) है:",
    options_en: ["16.2 N", "81 N", "405.0 N", "8.1 N"],
    options_hi: ["16.2 N", "81 N", "405.0 N", "8.1 N"],
    answer_en: "16.2 N",
    answer_hi: "16.2 N",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "Gravitational potential energy of mass 13 kg at height 22 m (g=10) is:",
    question_hi:
      "13 kg द्रव्यमान की 22 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["1430.0 J", "286 J", "45 J", "2860 J"],
    options_hi: ["1430.0 J", "286 J", "45 J", "2860 J"],
    answer_en: "2860 J",
    answer_hi: "2860 J",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en:
      "Maximum static friction for normal reaction 80 N and μ= 0.5 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=80 N, μ=0.5) है:",
    options_en: ["160.0 N", "20.0 N", "40.0 N", "80 N"],
    options_hi: ["160.0 N", "20.0 N", "40.0 N", "80 N"],
    answer_en: "40.0 N",
    answer_hi: "40.0 N",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Ideal gas: P=300000 Pa, V=0.05 m³, n=2 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=300000 Pa, V=0.05 m³, n=2 mol. तापमान है:",
    options_en: ["1805.1 K", "451.3 K", "15000.0", "902.5 K"],
    options_hi: ["1805.1 K", "451.3 K", "15000.0", "902.5 K"],
    answer_en: "902.5 K",
    answer_hi: "902.5 K",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "A thin lens with focal length 10 cm forms an image for object at -30 cm. Image distance v is:",
    question_hi:
      "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -30 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["15.0 cm", "10 cm", "-15.0 cm", "-30 cm"],
    options_hi: ["15.0 cm", "10 cm", "-15.0 cm", "-30 cm"],
    answer_en: "15.0 cm",
    answer_hi: "15.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "A current 4 A flows through wire of cross-sectional area 0.71 m². Current density J is:",
    question_hi:
      "4 A धारा 0.71 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["2.83 A/m²", "5.66 A/m²", "2.83 A/m²", "0.18 A/m²"],
    options_hi: ["2.83 A/m²", "5.66 A/m²", "2.83 A/m²", "0.18 A/m²"],
    answer_en: "5.66 A/m²",
    answer_hi: "5.66 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "A resistor 6 Ω connected to 9 V. Current is:",
    question_hi: "6 Ω प्रतिरोधक को 9 V से जोड़ा। धारा है:",
    options_en: ["54 A", "0.75 A", "0.67 A", "1.5 A"],
    options_hi: ["54 A", "0.75 A", "0.67 A", "1.5 A"],
    answer_en: "1.5 A",
    answer_hi: "1.5 A",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "In a process, heat supplied Q=130 J and work done W=39 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=130 J और किया गया कार्य W=39 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["39 J", "169 J", "130 J", "91 J"],
    options_hi: ["39 J", "169 J", "130 J", "91 J"],
    answer_en: "91 J",
    answer_hi: "91 J",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "A sample with 260 nuclei undergoes 1 half-lives. Remaining nuclei:",
    question_hi: "260 नाभिक वाला नमूना 1 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["260", "0", "130", "65"],
    options_hi: ["260", "0", "130", "65"],
    answer_en: "130",
    answer_hi: "130",
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
