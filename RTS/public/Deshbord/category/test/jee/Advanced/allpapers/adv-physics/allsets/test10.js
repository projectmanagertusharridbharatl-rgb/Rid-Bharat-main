const questions = [
  {
    num: 1,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=6.00e+14 Hz and incident frequency f=4.80e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=6.00e+14 Hz और आपतित आवृत्ति f=4.80e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons emitted with high KE",
      "Infinite KE",
      "Electrons emitted with zero KE",
      "No emission",
    ],
    options_hi: [
      "Electrons emitted with high KE",
      "Infinite KE",
      "Electrons emitted with zero KE",
      "No emission",
    ],
    answer_en: "No emission",
    answer_hi: "No emission",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "A current 7 A flows through wire of cross-sectional area 1.89 m². Current density J is:",
    question_hi:
      "7 A धारा 1.89 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["13.23 A/m²", "0.27 A/m²", "3.7 A/m²", "1.85 A/m²"],
    options_hi: ["13.23 A/m²", "0.27 A/m²", "3.7 A/m²", "1.85 A/m²"],
    answer_en: "3.7 A/m²",
    answer_hi: "3.7 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en:
      "A wave has frequency 195 Hz and wavelength 2.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 195 Hz और तरंगदैर्घ्य 2.0 m है। इसका वेग है:",
    options_en: ["390.0 m/s", "97.5 m/s", "0.01 m/s", "195.0 m/s"],
    options_hi: ["390.0 m/s", "97.5 m/s", "0.01 m/s", "195.0 m/s"],
    answer_en: "390.0 m/s",
    answer_hi: "390.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "A wave has frequency 411 Hz and wavelength 0.2 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 411 Hz और तरंगदैर्घ्य 0.2 m है। इसका वेग है:",
    options_en: ["41.1 m/s", "0.0 m/s", "82.2 m/s", "2055.0 m/s"],
    options_hi: ["41.1 m/s", "0.0 m/s", "82.2 m/s", "2055.0 m/s"],
    answer_en: "82.2 m/s",
    answer_hi: "82.2 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Work 849 J done in 3 s. Power is:",
    question_hi: "3 s में 849 J कार्य किया। शक्ति है:",
    options_en: ["283.0 W", "849 W", "566.0 W", "2547 W"],
    options_hi: ["283.0 W", "849 W", "566.0 W", "2547 W"],
    answer_en: "283.0 W",
    answer_hi: "283.0 W",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Capacitors 5 μF and 4 μF in series. Equivalent capacitance:",
    question_hi: "5 μF और 4 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["2.22 μF", "9 μF", "20 μF", "4 μF"],
    options_hi: ["2.22 μF", "9 μF", "20 μF", "4 μF"],
    answer_en: "2.22 μF",
    answer_hi: "2.22 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "Body moves in circle radius 1 m at speed 26 m/s. Centripetal acceleration is:",
    question_hi:
      "1 m त्रिज्या वाले वृत्त में 26 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["676.0 m/s²", "26.0 m/s²", "1352.0 m/s²", "26 m/s²"],
    options_hi: ["676.0 m/s²", "26.0 m/s²", "1352.0 m/s²", "26 m/s²"],
    answer_en: "676.0 m/s²",
    answer_hi: "676.0 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "A resistor 9 Ω connected to 19 V. Current is:",
    question_hi: "9 Ω प्रतिरोधक को 19 V से जोड़ा। धारा है:",
    options_en: ["1.06 A", "0.47 A", "2.11 A", "171 A"],
    options_hi: ["1.06 A", "0.47 A", "2.11 A", "171 A"],
    answer_en: "2.11 A",
    answer_hi: "2.11 A",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Work 853 J done in 7 s. Power is:",
    question_hi: "7 s में 853 J कार्य किया। शक्ति है:",
    options_en: ["5971 W", "243.7 W", "853 W", "121.9 W"],
    options_hi: ["5971 W", "243.7 W", "853 W", "121.9 W"],
    answer_en: "121.9 W",
    answer_hi: "121.9 W",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "A sample with 607 nuclei undergoes 3 half-lives. Remaining nuclei:",
    question_hi: "607 नाभिक वाला नमूना 3 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["151", "303", "75", "607"],
    options_hi: ["151", "303", "75", "607"],
    answer_en: "75",
    answer_hi: "75",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Time to fall freely from height 38 m (g=10 m/s²) is:",
    question_hi: "38 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.95 s", "1.38 s", "2.76 s", "5.51 s"],
    options_hi: ["1.95 s", "1.38 s", "2.76 s", "5.51 s"],
    answer_en: "2.76 s",
    answer_hi: "2.76 s",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["3.0e7 m/s", "1.5e8 m/s", "3.0e9 m/s", "299863380 m/s"],
    options_hi: ["3.0e7 m/s", "1.5e8 m/s", "3.0e9 m/s", "299863380 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Time to fall freely from height 56 m (g=10 m/s²) is:",
    question_hi: "56 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.67 s", "6.69 s", "2.37 s", "3.35 s"],
    options_hi: ["1.67 s", "6.69 s", "2.37 s", "3.35 s"],
    answer_en: "3.35 s",
    answer_hi: "3.35 s",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "A current 4 A flows through wire of cross-sectional area 1.72 m². Current density J is:",
    question_hi:
      "4 A धारा 1.72 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.43 A/m²", "1.16 A/m²", "6.90 A/m²", "2.32 A/m²"],
    options_hi: ["0.43 A/m²", "1.16 A/m²", "6.90 A/m²", "2.32 A/m²"],
    answer_en: "2.32 A/m²",
    answer_hi: "2.32 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "Nucleus with mass number A=18. Approx total binding energy (avg 7.9 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=18 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.9 MeV/न्यूक्लिओन):",
    options_en: ["70.9 MeV", "7.9 MeV", "141.8 MeV", "151.8 MeV"],
    options_hi: ["70.9 MeV", "7.9 MeV", "141.8 MeV", "151.8 MeV"],
    answer_en: "141.8 MeV",
    answer_hi: "141.8 MeV",
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
      "Induced current",
      "Force on a current-carrying conductor",
      "Charge density",
    ],
    options_hi: [
      "Magnetic field lines",
      "Induced current",
      "Force on a current-carrying conductor",
      "Charge density",
    ],
    answer_en: "Force on a current-carrying conductor",
    answer_hi: "Force on a current-carrying conductor",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Two resistors 10 Ω and 8 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 10 Ω और 8 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["18 Ω", "8 Ω", "4.44 Ω", "80 Ω"],
    options_hi: ["18 Ω", "8 Ω", "4.44 Ω", "80 Ω"],
    answer_en: "4.44 Ω",
    answer_hi: "4.44 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Gravitational potential energy of mass 12 kg at height 45 m (g=10) is:",
    question_hi:
      "12 kg द्रव्यमान की 45 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["540 J", "5400 J", "2700.0 J", "67 J"],
    options_hi: ["540 J", "5400 J", "2700.0 J", "67 J"],
    answer_en: "5400 J",
    answer_hi: "5400 J",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en:
      "Projectile launched with speed 39 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "39 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["152.1 m", "76.0 m", "304.2 m", "0"],
    options_hi: ["152.1 m", "76.0 m", "304.2 m", "0"],
    answer_en: "152.1 m",
    answer_hi: "152.1 m",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Work 976 J done in 18 s. Power is:",
    question_hi: "18 s में 976 J कार्य किया। शक्ति है:",
    options_en: ["976 W", "17568 W", "108.4 W", "54.2 W"],
    options_hi: ["976 W", "17568 W", "108.4 W", "54.2 W"],
    answer_en: "54.2 W",
    answer_hi: "54.2 W",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "A net force acts on a mass 1 kg producing acceleration 2 m/s². The force is:",
    question_hi: "1 kg द्रव्यमान पर 2 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["-1 N", "3 N", "2 N", "4 N"],
    options_hi: ["-1 N", "3 N", "2 N", "4 N"],
    answer_en: "2 N",
    answer_hi: "2 N",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Faraday's law states that induced emf is proportional to:",
    question_hi:
      "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    options_en: [
      "Magnetic flux itself",
      "Resistance of coil",
      "Rate of change of magnetic flux",
      "Square of current",
    ],
    options_hi: [
      "Magnetic flux itself",
      "Resistance of coil",
      "Rate of change of magnetic flux",
      "Square of current",
    ],
    answer_en: "Rate of change of magnetic flux",
    answer_hi: "Rate of change of magnetic flux",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "A sample with 215 nuclei undergoes 1 half-lives. Remaining nuclei:",
    question_hi: "215 नाभिक वाला नमूना 1 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["53", "0", "215", "107"],
    options_hi: ["53", "0", "215", "107"],
    answer_en: "107",
    answer_hi: "107",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "A car travels 37 km at 40 km/h and then 32 km at 76 km/h. The average speed is:",
    question_hi:
      "एक कार 40 km/h की गति से 37 km और फिर 76 km/h से 32 km चलती है। औसत वेग है:",
    options_en: ["51.3 km/h", "40 km/h", "76 km/h", "58.0 km/h"],
    options_hi: ["51.3 km/h", "40 km/h", "76 km/h", "58.0 km/h"],
    answer_en: "51.3 km/h",
    answer_hi: "51.3 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "Energy difference between levels n=2 and n=4 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=2 और n=4 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["0.85 eV", "3.4 eV", "2.55 eV", "1.27 eV"],
    options_hi: ["0.85 eV", "3.4 eV", "2.55 eV", "1.27 eV"],
    answer_en: "2.55 eV",
    answer_hi: "2.55 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Two resistors 7 Ω and 6 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 7 Ω और 6 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["42 Ω", "3.23 Ω", "13 Ω", "7 Ω"],
    options_hi: ["42 Ω", "3.23 Ω", "13 Ω", "7 Ω"],
    answer_en: "13 Ω",
    answer_hi: "13 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "A sample with 288 nuclei undergoes 4 half-lives. Remaining nuclei:",
    question_hi: "288 नाभिक वाला नमूना 4 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["72", "288", "144", "18"],
    options_hi: ["72", "288", "144", "18"],
    answer_en: "18",
    answer_hi: "18",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "Projectile launched with speed 16 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "16 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["25.6 m", "51.2 m", "0", "12.8 m"],
    options_hi: ["25.6 m", "51.2 m", "0", "12.8 m"],
    answer_en: "25.6 m",
    answer_hi: "25.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Body moves in circle radius 2 m at speed 25 m/s. Centripetal acceleration is:",
    question_hi:
      "2 m त्रिज्या वाले वृत्त में 25 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["25 m/s²", "312.5 m/s²", "12.5 m/s²", "625.0 m/s²"],
    options_hi: ["25 m/s²", "312.5 m/s²", "12.5 m/s²", "625.0 m/s²"],
    answer_en: "312.5 m/s²",
    answer_hi: "312.5 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Two resistors 3 Ω and 4 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 3 Ω और 4 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["1.71 Ω", "4 Ω", "12 Ω", "7 Ω"],
    options_hi: ["1.71 Ω", "4 Ω", "12 Ω", "7 Ω"],
    answer_en: "7 Ω",
    answer_hi: "7 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Capacitors 4 μF and 4 μF in series. Equivalent capacitance:",
    question_hi: "4 μF और 4 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["8 μF", "2.0 μF", "16 μF", "4 μF"],
    options_hi: ["8 μF", "2.0 μF", "16 μF", "4 μF"],
    answer_en: "2.0 μF",
    answer_hi: "2.0 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "A constant force 46 N acts over displacement 2 m. Work done is:",
    question_hi:
      "46 N का नियत बल 2 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["48 J", "46.0 J", "92 J", "23.0 J"],
    options_hi: ["48 J", "46.0 J", "92 J", "23.0 J"],
    answer_en: "92 J",
    answer_hi: "92 J",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "Capacitors 2 μF and 10 μF in parallel. Equivalent capacitance:",
    question_hi: "2 μF और 10 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["10 μF", "20 μF", "12 μF", "1.67 μF"],
    options_hi: ["10 μF", "20 μF", "12 μF", "1.67 μF"],
    answer_en: "12 μF",
    answer_hi: "12 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "Gravitational potential energy of mass 13 kg at height 21 m (g=10) is:",
    question_hi:
      "13 kg द्रव्यमान की 21 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["2730 J", "44 J", "273 J", "1365.0 J"],
    options_hi: ["2730 J", "44 J", "273 J", "1365.0 J"],
    answer_en: "2730 J",
    answer_hi: "2730 J",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "Projectile launched with speed 20 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "20 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["0", "20.0 m", "40.0 m", "80.0 m"],
    options_hi: ["0", "20.0 m", "40.0 m", "80.0 m"],
    answer_en: "40.0 m",
    answer_hi: "40.0 m",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Time to fall freely from height 30 m (g=10 m/s²) is:",
    question_hi: "30 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.73 s", "1.22 s", "2.45 s", "4.9 s"],
    options_hi: ["1.73 s", "1.22 s", "2.45 s", "4.9 s"],
    answer_en: "2.45 s",
    answer_hi: "2.45 s",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "Energy difference between levels n=2 and n=3 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=2 और n=3 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["3.4 eV", "0.94 eV", "1.51 eV", "1.89 eV"],
    options_hi: ["3.4 eV", "0.94 eV", "1.51 eV", "1.89 eV"],
    answer_en: "1.89 eV",
    answer_hi: "1.89 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "For mass-spring (m=1 kg, k=200 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=1 kg, k=200 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.07 s", "88.86 s", "0.22 s", "0.44 s"],
    options_hi: ["0.07 s", "88.86 s", "0.22 s", "0.44 s"],
    answer_en: "0.44 s",
    answer_hi: "0.44 s",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "A current 4 A flows through wire of cross-sectional area 1.97 m². Current density J is:",
    question_hi:
      "4 A धारा 1.97 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["7.88 A/m²", "0.49 A/m²", "2.03 A/m²", "1.02 A/m²"],
    options_hi: ["7.88 A/m²", "0.49 A/m²", "2.03 A/m²", "1.02 A/m²"],
    answer_en: "2.03 A/m²",
    answer_hi: "2.03 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en:
      "Projectile launched with speed 32 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "32 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["0", "204.8 m", "102.4 m", "51.2 m"],
    options_hi: ["0", "204.8 m", "102.4 m", "51.2 m"],
    answer_en: "102.4 m",
    answer_hi: "102.4 m",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "A resistor 5 Ω connected to 23 V. Current is:",
    question_hi: "5 Ω प्रतिरोधक को 23 V से जोड़ा। धारा है:",
    options_en: ["0.22 A", "2.3 A", "115 A", "4.6 A"],
    options_hi: ["0.22 A", "2.3 A", "115 A", "4.6 A"],
    answer_en: "4.6 A",
    answer_hi: "4.6 A",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "For mass-spring (m=4 kg, k=100 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=4 kg, k=100 N/m) के लिए आवर्तकाल T है:",
    options_en: ["31.42 s", "0.2 s", "0.63 s", "1.26 s"],
    options_hi: ["31.42 s", "0.2 s", "0.63 s", "1.26 s"],
    answer_en: "1.26 s",
    answer_hi: "1.26 s",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "A sample with 507 nuclei undergoes 1 half-lives. Remaining nuclei:",
    question_hi: "507 नाभिक वाला नमूना 1 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["0", "126", "253", "507"],
    options_hi: ["0", "126", "253", "507"],
    answer_en: "253",
    answer_hi: "253",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Ideal gas: P=200000 Pa, V=0.01 m³, n=3 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=200000 Pa, V=0.01 m³, n=3 mol. तापमान है:",
    options_en: ["80.2 K", "2000.0", "40.1 K", "160.4 K"],
    options_hi: ["80.2 K", "2000.0", "40.1 K", "160.4 K"],
    answer_en: "80.2 K",
    answer_hi: "80.2 K",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "Projectile launched with speed 36 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "36 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["129.6 m", "0", "64.8 m", "259.2 m"],
    options_hi: ["129.6 m", "0", "64.8 m", "259.2 m"],
    answer_en: "129.6 m",
    answer_hi: "129.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Gravitational potential energy of mass 3 kg at height 23 m (g=10) is:",
    question_hi:
      "3 kg द्रव्यमान की 23 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["345.0 J", "69 J", "690 J", "36 J"],
    options_hi: ["345.0 J", "69 J", "690 J", "36 J"],
    answer_en: "690 J",
    answer_hi: "690 J",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Maximum static friction for normal reaction 38 N and μ= 0.5 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=38 N, μ=0.5) है:",
    options_en: ["19.0 N", "76.0 N", "38 N", "9.5 N"],
    options_hi: ["19.0 N", "76.0 N", "38 N", "9.5 N"],
    answer_en: "19.0 N",
    answer_hi: "19.0 N",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "In a process, heat supplied Q=135 J and work done W=16 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=135 J और किया गया कार्य W=16 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["151 J", "119 J", "16 J", "135 J"],
    options_hi: ["151 J", "119 J", "16 J", "135 J"],
    answer_en: "119 J",
    answer_hi: "119 J",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "Body moves in circle radius 10 m at speed 26 m/s. Centripetal acceleration is:",
    question_hi:
      "10 m त्रिज्या वाले वृत्त में 26 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["26 m/s²", "2.6 m/s²", "135.2 m/s²", "67.6 m/s²"],
    options_hi: ["26 m/s²", "2.6 m/s²", "135.2 m/s²", "67.6 m/s²"],
    answer_en: "67.6 m/s²",
    answer_hi: "67.6 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "A constant force 29 N acts over displacement 4 m. Work done is:",
    question_hi:
      "29 N का नियत बल 4 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["33 J", "7.2 J", "58.0 J", "116 J"],
    options_hi: ["33 J", "7.2 J", "58.0 J", "116 J"],
    answer_en: "116 J",
    answer_hi: "116 J",
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
