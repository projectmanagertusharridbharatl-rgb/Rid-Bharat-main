const questions = [
  {
    num: 1,
    question_en:
      "Nucleus with mass number A=15. Approx total binding energy (avg 7.1 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=15 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.1 MeV/न्यूक्लिओन):",
    options_en: ["106.1 MeV", "7.1 MeV", "53.0 MeV", "116.1 MeV"],
    options_hi: ["106.1 MeV", "7.1 MeV", "53.0 MeV", "116.1 MeV"],
    answer_en: "106.1 MeV",
    answer_hi: "106.1 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Dimension of force is:",
    question_hi: "बल का विमीय सूत्र क्या है?",
    options_en: ["[M]", "[M L T^-2]", "[L]", "[T]"],
    options_hi: ["[M]", "[M L T^-2]", "[L]", "[T]"],
    answer_en: "[M L T^-2]",
    answer_hi: "[M L T^-2]",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "A resistor 10 Ω connected to 24 V. Current is:",
    question_hi: "10 Ω प्रतिरोधक को 24 V से जोड़ा। धारा है:",
    options_en: ["2.4 A", "1.2 A", "0.42 A", "240 A"],
    options_hi: ["2.4 A", "1.2 A", "0.42 A", "240 A"],
    answer_en: "2.4 A",
    answer_hi: "2.4 A",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "Nucleus with mass number A=5. Approx total binding energy (avg 8.1 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=5 वाले नाभिक की कुल बंधन ऊर्जा (औसत 8.1 MeV/न्यूक्लिओन):",
    options_en: ["40.4 MeV", "20.2 MeV", "8.1 MeV", "50.4 MeV"],
    options_hi: ["40.4 MeV", "20.2 MeV", "8.1 MeV", "50.4 MeV"],
    answer_en: "40.4 MeV",
    answer_hi: "40.4 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Ideal gas: P=200000 Pa, V=0.05 m³, n=3 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=200000 Pa, V=0.05 m³, n=3 mol. तापमान है:",
    options_en: ["200.6 K", "802.2 K", "401.1 K", "10000.0"],
    options_hi: ["200.6 K", "802.2 K", "401.1 K", "10000.0"],
    answer_en: "401.1 K",
    answer_hi: "401.1 K",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Time to fall freely from height 43 m (g=10 m/s²) is:",
    question_hi: "43 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["5.87 s", "1.47 s", "2.93 s", "2.07 s"],
    options_hi: ["5.87 s", "1.47 s", "2.93 s", "2.07 s"],
    answer_en: "2.93 s",
    answer_hi: "2.93 s",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "Energy difference between levels n=2 and n=3 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=2 और n=3 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["3.4 eV", "1.89 eV", "0.94 eV", "1.51 eV"],
    options_hi: ["3.4 eV", "1.89 eV", "0.94 eV", "1.51 eV"],
    answer_en: "1.89 eV",
    answer_hi: "1.89 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "A car travels 37 km at 57 km/h and then 58 km at 40 km/h. The average speed is:",
    question_hi:
      "एक कार 57 km/h की गति से 37 km और फिर 40 km/h से 58 km चलती है। औसत वेग है:",
    options_en: ["40 km/h", "48.5 km/h", "45.3 km/h", "57 km/h"],
    options_hi: ["40 km/h", "48.5 km/h", "45.3 km/h", "57 km/h"],
    answer_en: "45.3 km/h",
    answer_hi: "45.3 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en:
      "Maximum static friction for normal reaction 87 N and μ= 0.2 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=87 N, μ=0.2) है:",
    options_en: ["17.4 N", "8.7 N", "87 N", "435.0 N"],
    options_hi: ["17.4 N", "8.7 N", "87 N", "435.0 N"],
    answer_en: "17.4 N",
    answer_hi: "17.4 N",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
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
    num: 11,
    question_en:
      "In a process, heat supplied Q=286 J and work done W=94 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=286 J और किया गया कार्य W=94 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["286 J", "192 J", "94 J", "380 J"],
    options_hi: ["286 J", "192 J", "94 J", "380 J"],
    answer_en: "192 J",
    answer_hi: "192 J",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en:
      "A wave has frequency 77 Hz and wavelength 0.5 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 77 Hz और तरंगदैर्घ्य 0.5 m है। इसका वेग है:",
    options_en: ["154.0 m/s", "38.5 m/s", "19.2 m/s", "0.006 m/s"],
    options_hi: ["154.0 m/s", "38.5 m/s", "19.2 m/s", "0.006 m/s"],
    answer_en: "38.5 m/s",
    answer_hi: "38.5 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "A sample with 451 nuclei undergoes 2 half-lives. Remaining nuclei:",
    question_hi: "451 नाभिक वाला नमूना 2 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["0", "225", "112", "451"],
    options_hi: ["0", "225", "112", "451"],
    answer_en: "112",
    answer_hi: "112",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "Two resistors 5 Ω and 8 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 5 Ω और 8 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["5 Ω", "40 Ω", "13 Ω", "3.08 Ω"],
    options_hi: ["5 Ω", "40 Ω", "13 Ω", "3.08 Ω"],
    answer_en: "3.08 Ω",
    answer_hi: "3.08 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "Projectile launched with speed 29 m/s at 60°. Range (g=10 m/s²) is:",
    question_hi: "29 m/s की गति से 60° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["84.1 m", "42.0 m", "145.7 m", "72.8 m"],
    options_hi: ["84.1 m", "42.0 m", "145.7 m", "72.8 m"],
    answer_en: "72.8 m",
    answer_hi: "72.8 m",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Capacitors 2 μF and 2 μF in series. Equivalent capacitance:",
    question_hi: "2 μF और 2 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["4 μF", "1.0 μF", "2 μF", "4 μF"],
    options_hi: ["4 μF", "1.0 μF", "2 μF", "4 μF"],
    answer_en: "1.0 μF",
    answer_hi: "1.0 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Gravitational potential energy of mass 13 kg at height 42 m (g=10) is:",
    question_hi:
      "13 kg द्रव्यमान की 42 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["5460 J", "65 J", "546 J", "2730.0 J"],
    options_hi: ["5460 J", "65 J", "546 J", "2730.0 J"],
    answer_en: "5460 J",
    answer_hi: "5460 J",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "A current 2 A flows through wire of cross-sectional area 1.99 m². Current density J is:",
    question_hi:
      "2 A धारा 1.99 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["3.98 A/m²", "0.5 A/m²", "0", "1.0 A/m²"],
    options_hi: ["3.98 A/m²", "0.5 A/m²", "0", "1.0 A/m²"],
    answer_en: "1.0 A/m²",
    answer_hi: "1.0 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en:
      "Energy difference between levels n=1 and n=3 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=1 और n=3 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["12.09 eV", "6.04 eV", "13.6 eV", "1.51 eV"],
    options_hi: ["12.09 eV", "6.04 eV", "13.6 eV", "1.51 eV"],
    answer_en: "12.09 eV",
    answer_hi: "12.09 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en:
      "Projectile launched with speed 37 m/s at 60°. Range (g=10 m/s²) is:",
    question_hi: "37 m/s की गति से 60° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["68.5 m", "118.6 m", "237.1 m", "136.9 m"],
    options_hi: ["68.5 m", "118.6 m", "237.1 m", "136.9 m"],
    answer_en: "118.6 m",
    answer_hi: "118.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "Projectile launched with speed 14 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "14 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["0", "9.8 m", "19.6 m", "39.2 m"],
    options_hi: ["0", "9.8 m", "19.6 m", "39.2 m"],
    answer_en: "19.6 m",
    answer_hi: "19.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "A thin lens with focal length 25 cm forms an image for object at -60 cm. Image distance v is:",
    question_hi:
      "25 cm फोकल लंबाई वाले लेंस के लिए वस्तु -60 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-42.86 cm", "42.86 cm", "25 cm", "-60 cm"],
    options_hi: ["-42.86 cm", "42.86 cm", "25 cm", "-60 cm"],
    answer_en: "42.86 cm",
    answer_hi: "42.86 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "A current 6 A flows through wire of cross-sectional area 1.76 m². Current density J is:",
    question_hi:
      "6 A धारा 1.76 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["1.7 A/m²", "10.59 A/m²", "0.29 A/m²", "3.4 A/m²"],
    options_hi: ["1.7 A/m²", "10.59 A/m²", "0.29 A/m²", "3.4 A/m²"],
    answer_en: "3.4 A/m²",
    answer_hi: "3.4 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Capacitors 5 μF and 2 μF in series. Equivalent capacitance:",
    question_hi: "5 μF और 2 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["10 μF", "7 μF", "2 μF", "1.43 μF"],
    options_hi: ["10 μF", "7 μF", "2 μF", "1.43 μF"],
    answer_en: "1.43 μF",
    answer_hi: "1.43 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Two resistors 3 Ω and 8 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 3 Ω और 8 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["2.18 Ω", "24 Ω", "11 Ω", "8 Ω"],
    options_hi: ["2.18 Ω", "24 Ω", "11 Ω", "8 Ω"],
    answer_en: "11 Ω",
    answer_hi: "11 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "A wave has frequency 292 Hz and wavelength 1.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 292 Hz और तरंगदैर्घ्य 1.0 m है। इसका वेग है:",
    options_en: ["292.0 m/s", "0.003 m/s", "0", "146.0 m/s"],
    options_hi: ["292.0 m/s", "0.003 m/s", "0", "146.0 m/s"],
    answer_en: "292.0 m/s",
    answer_hi: "292.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "Maximum static friction for normal reaction 66 N and μ= 0.4 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=66 N, μ=0.4) है:",
    options_en: ["26.4 N", "66 N", "165.0 N", "13.2 N"],
    options_hi: ["26.4 N", "66 N", "165.0 N", "13.2 N"],
    answer_en: "26.4 N",
    answer_hi: "26.4 N",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "A wave has frequency 495 Hz and wavelength 0.2 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 495 Hz और तरंगदैर्घ्य 0.2 m है। इसका वेग है:",
    options_en: ["49.5 m/s", "2475.0 m/s", "0.0 m/s", "99.0 m/s"],
    options_hi: ["49.5 m/s", "2475.0 m/s", "0.0 m/s", "99.0 m/s"],
    answer_en: "99.0 m/s",
    answer_hi: "99.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "A current 4 A flows through wire of cross-sectional area 1.10 m². Current density J is:",
    question_hi:
      "4 A धारा 1.10 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.28 A/m²", "3.63 A/m²", "1.82 A/m²", "4.41 A/m²"],
    options_hi: ["0.28 A/m²", "3.63 A/m²", "1.82 A/m²", "4.41 A/m²"],
    answer_en: "3.63 A/m²",
    answer_hi: "3.63 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "A constant force 48 N acts over displacement 4 m. Work done is:",
    question_hi:
      "48 N का नियत बल 4 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["12.0 J", "192 J", "52 J", "96.0 J"],
    options_hi: ["12.0 J", "192 J", "52 J", "96.0 J"],
    answer_en: "192 J",
    answer_hi: "192 J",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "Energy difference between levels n=3 and n=6 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=3 और n=6 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["0.57 eV", "1.51 eV", "1.13 eV", "0.38 eV"],
    options_hi: ["0.57 eV", "1.51 eV", "1.13 eV", "0.38 eV"],
    answer_en: "1.13 eV",
    answer_hi: "1.13 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=5.00e+14 Hz and incident frequency f=6.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=5.00e+14 Hz और आपतित आवृत्ति f=6.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons emitted with KE > 0",
      "Electrons just emitted (zero KE)",
      "No emission",
      "Cannot say",
    ],
    options_hi: [
      "Electrons emitted with KE > 0",
      "Electrons just emitted (zero KE)",
      "No emission",
      "Cannot say",
    ],
    answer_en: "Electrons emitted with KE > 0",
    answer_hi: "Electrons emitted with KE > 0",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Time to fall freely from height 79 m (g=10 m/s²) is:",
    question_hi: "79 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.99 s", "7.95 s", "2.81 s", "3.97 s"],
    options_hi: ["1.99 s", "7.95 s", "2.81 s", "3.97 s"],
    answer_en: "3.97 s",
    answer_hi: "3.97 s",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "A current 3 A flows through wire of cross-sectional area 1.96 m². Current density J is:",
    question_hi:
      "3 A धारा 1.96 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["1.53 A/m²", "5.88 A/m²", "0.77 A/m²", "0.65 A/m²"],
    options_hi: ["1.53 A/m²", "5.88 A/m²", "0.77 A/m²", "0.65 A/m²"],
    answer_en: "1.53 A/m²",
    answer_hi: "1.53 A/m²",
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
    num: 36,
    question_en:
      "A sample with 371 nuclei undergoes 3 half-lives. Remaining nuclei:",
    question_hi: "371 नाभिक वाला नमूना 3 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["371", "185", "92", "46"],
    options_hi: ["371", "185", "92", "46"],
    answer_en: "46",
    answer_hi: "46",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "A sample with 169 nuclei undergoes 3 half-lives. Remaining nuclei:",
    question_hi: "169 नाभिक वाला नमूना 3 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["84", "42", "21", "169"],
    options_hi: ["84", "42", "21", "169"],
    answer_en: "21",
    answer_hi: "21",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "Maximum static friction for normal reaction 28 N and μ= 0.5 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=28 N, μ=0.5) है:",
    options_en: ["14.0 N", "56.0 N", "28 N", "7.0 N"],
    options_hi: ["14.0 N", "56.0 N", "28 N", "7.0 N"],
    answer_en: "14.0 N",
    answer_hi: "14.0 N",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Ideal gas: P=100000 Pa, V=0.04 m³, n=3 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=100000 Pa, V=0.04 m³, n=3 mol. तापमान है:",
    options_en: ["160.4 K", "320.9 K", "4000.0", "80.2 K"],
    options_hi: ["160.4 K", "320.9 K", "4000.0", "80.2 K"],
    answer_en: "160.4 K",
    answer_hi: "160.4 K",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en:
      "Gravitational potential energy of mass 7 kg at height 29 m (g=10) is:",
    question_hi:
      "7 kg द्रव्यमान की 29 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["2030 J", "203 J", "1015.0 J", "46 J"],
    options_hi: ["2030 J", "203 J", "1015.0 J", "46 J"],
    answer_en: "2030 J",
    answer_hi: "2030 J",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=7.00e+14 Hz and incident frequency f=5.60e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=7.00e+14 Hz और आपतित आवृत्ति f=5.60e+14 Hz होने पर परिणाम है:",
    options_en: [
      "No emission",
      "Infinite KE",
      "Electrons emitted with high KE",
      "Electrons emitted with zero KE",
    ],
    options_hi: [
      "No emission",
      "Infinite KE",
      "Electrons emitted with high KE",
      "Electrons emitted with zero KE",
    ],
    answer_en: "No emission",
    answer_hi: "No emission",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "Body moves in circle radius 4 m at speed 23 m/s. Centripetal acceleration is:",
    question_hi:
      "4 m त्रिज्या वाले वृत्त में 23 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["5.75 m/s²", "132.25 m/s²", "23 m/s²", "264.5 m/s²"],
    options_hi: ["5.75 m/s²", "132.25 m/s²", "23 m/s²", "264.5 m/s²"],
    answer_en: "132.25 m/s²",
    answer_hi: "132.25 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "Nucleus with mass number A=5. Approx total binding energy (avg 7.8 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=5 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.8 MeV/न्यूक्लिओन):",
    options_en: ["7.8 MeV", "49.1 MeV", "19.5 MeV", "39.1 MeV"],
    options_hi: ["7.8 MeV", "49.1 MeV", "19.5 MeV", "39.1 MeV"],
    answer_en: "39.1 MeV",
    answer_hi: "39.1 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Faraday's law states that induced emf is proportional to:",
    question_hi:
      "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    options_en: [
      "Square of current",
      "Magnetic flux itself",
      "Rate of change of magnetic flux",
      "Resistance of coil",
    ],
    options_hi: [
      "Square of current",
      "Magnetic flux itself",
      "Rate of change of magnetic flux",
      "Resistance of coil",
    ],
    answer_en: "Rate of change of magnetic flux",
    answer_hi: "Rate of change of magnetic flux",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Ideal gas: P=200000 Pa, V=0.04 m³, n=2 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=200000 Pa, V=0.04 m³, n=2 mol. तापमान है:",
    options_en: ["962.7 K", "481.3 K", "8000.0", "240.7 K"],
    options_hi: ["962.7 K", "481.3 K", "8000.0", "240.7 K"],
    answer_en: "481.3 K",
    answer_hi: "481.3 K",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Work 365 J done in 5 s. Power is:",
    question_hi: "5 s में 365 J कार्य किया। शक्ति है:",
    options_en: ["365 W", "1825 W", "73.0 W", "146.0 W"],
    options_hi: ["365 W", "1825 W", "73.0 W", "146.0 W"],
    answer_en: "73.0 W",
    answer_hi: "73.0 W",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "For mass-spring (m=1 kg, k=50 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=1 kg, k=50 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.14 s", "0.44 s", "0.89 s", "44.43 s"],
    options_hi: ["0.14 s", "0.44 s", "0.89 s", "44.43 s"],
    answer_en: "0.89 s",
    answer_hi: "0.89 s",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "Projectile launched with speed 26 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "26 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["33.8 m", "0", "67.6 m", "135.2 m"],
    options_hi: ["33.8 m", "0", "67.6 m", "135.2 m"],
    answer_en: "67.6 m",
    answer_hi: "67.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "Projectile launched with speed 14 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "14 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["39.2 m", "0", "9.8 m", "19.6 m"],
    options_hi: ["39.2 m", "0", "9.8 m", "19.6 m"],
    answer_en: "19.6 m",
    answer_hi: "19.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Ideal gas: P=300000 Pa, V=0.01 m³, n=1 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=300000 Pa, V=0.01 m³, n=1 mol. तापमान है:",
    options_en: ["361.0 K", "180.5 K", "3000.0", "722.0 K"],
    options_hi: ["361.0 K", "180.5 K", "3000.0", "722.0 K"],
    answer_en: "361.0 K",
    answer_hi: "361.0 K",
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
