const questions = [
  {
    num: 1,
    question_en:
      "Gravitational potential energy of mass 3 kg at height 9 m (g=10) is:",
    question_hi:
      "3 kg द्रव्यमान की 9 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["27 J", "270 J", "135.0 J", "22 J"],
    options_hi: ["27 J", "270 J", "135.0 J", "22 J"],
    answer_en: "270 J",
    answer_hi: "270 J",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "Two resistors 2 Ω and 10 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 2 Ω और 10 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["1.67 Ω", "20 Ω", "2 Ω", "12 Ω"],
    options_hi: ["1.67 Ω", "20 Ω", "2 Ω", "12 Ω"],
    answer_en: "1.67 Ω",
    answer_hi: "1.67 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Ideal gas: P=300000 Pa, V=0.01 m³, n=3 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=300000 Pa, V=0.01 m³, n=3 mol. तापमान है:",
    options_en: ["60.2 K", "3000.0", "240.7 K", "120.3 K"],
    options_hi: ["60.2 K", "3000.0", "240.7 K", "120.3 K"],
    answer_en: "120.3 K",
    answer_hi: "120.3 K",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Two resistors 5 Ω and 6 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 5 Ω और 6 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["2.73 Ω", "6 Ω", "30 Ω", "11 Ω"],
    options_hi: ["2.73 Ω", "6 Ω", "30 Ω", "11 Ω"],
    answer_en: "11 Ω",
    answer_hi: "11 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en:
      "A wave has frequency 128 Hz and wavelength 2.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 128 Hz और तरंगदैर्घ्य 2.0 m है। इसका वेग है:",
    options_en: ["256.0 m/s", "64.0 m/s", "128.0 m/s", "0.016 m/s"],
    options_hi: ["256.0 m/s", "64.0 m/s", "128.0 m/s", "0.016 m/s"],
    answer_en: "256.0 m/s",
    answer_hi: "256.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "A constant force 36 N acts over displacement 3 m. Work done is:",
    question_hi:
      "36 N का नियत बल 3 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["12.0 J", "39 J", "54.0 J", "108 J"],
    options_hi: ["12.0 J", "39 J", "54.0 J", "108 J"],
    answer_en: "108 J",
    answer_hi: "108 J",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "Capacitors 2 μF and 4 μF in parallel. Equivalent capacitance:",
    question_hi: "2 μF और 4 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["8 μF", "6 μF", "4 μF", "1.33 μF"],
    options_hi: ["8 μF", "6 μF", "4 μF", "1.33 μF"],
    answer_en: "6 μF",
    answer_hi: "6 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "Nucleus with mass number A=14. Approx total binding energy (avg 7.9 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=14 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.9 MeV/न्यूक्लिओन):",
    options_en: ["55.0 MeV", "110.0 MeV", "7.9 MeV", "120.0 MeV"],
    options_hi: ["55.0 MeV", "110.0 MeV", "7.9 MeV", "120.0 MeV"],
    answer_en: "110.0 MeV",
    answer_hi: "110.0 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=5.00e+14 Hz and incident frequency f=4.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=5.00e+14 Hz और आपतित आवृत्ति f=4.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons emitted with zero KE",
      "No emission",
      "Electrons emitted with high KE",
      "Infinite KE",
    ],
    options_hi: [
      "Electrons emitted with zero KE",
      "No emission",
      "Electrons emitted with high KE",
      "Infinite KE",
    ],
    answer_en: "No emission",
    answer_hi: "No emission",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "A wave has frequency 152 Hz and wavelength 1.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 152 Hz और तरंगदैर्घ्य 1.0 m है। इसका वेग है:",
    options_en: ["0", "0.007 m/s", "76.0 m/s", "152.0 m/s"],
    options_hi: ["0", "0.007 m/s", "76.0 m/s", "152.0 m/s"],
    answer_en: "152.0 m/s",
    answer_hi: "152.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en:
      "A car travels 80 km at 46 km/h and then 76 km at 73 km/h. The average speed is:",
    question_hi:
      "एक कार 46 km/h की गति से 80 km और फिर 73 km/h से 76 km चलती है। औसत वेग है:",
    options_en: ["73 km/h", "56.1 km/h", "46 km/h", "59.5 km/h"],
    options_hi: ["73 km/h", "56.1 km/h", "46 km/h", "59.5 km/h"],
    answer_en: "56.1 km/h",
    answer_hi: "56.1 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Faraday's law states that induced emf is proportional to:",
    question_hi:
      "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    options_en: [
      "Magnetic flux itself",
      "Square of current",
      "Rate of change of magnetic flux",
      "Resistance of coil",
    ],
    options_hi: [
      "Magnetic flux itself",
      "Square of current",
      "Rate of change of magnetic flux",
      "Resistance of coil",
    ],
    answer_en: "Rate of change of magnetic flux",
    answer_hi: "Rate of change of magnetic flux",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "Gravitational potential energy of mass 11 kg at height 42 m (g=10) is:",
    question_hi:
      "11 kg द्रव्यमान की 42 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["63 J", "2310.0 J", "4620 J", "462 J"],
    options_hi: ["63 J", "2310.0 J", "4620 J", "462 J"],
    answer_en: "4620 J",
    answer_hi: "4620 J",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Fleming's left-hand rule is used to find the direction of:",
    question_hi:
      "फ्लेमिंग का बायाँ हाथ नियम किस दिशा को ज्ञात करने के लिए उपयोग होता है?",
    options_en: [
      "Charge density",
      "Magnetic field lines",
      "Force on a current-carrying conductor",
      "Induced current",
    ],
    options_hi: [
      "Charge density",
      "Magnetic field lines",
      "Force on a current-carrying conductor",
      "Induced current",
    ],
    answer_en: "Force on a current-carrying conductor",
    answer_hi: "Force on a current-carrying conductor",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "A current 10 A flows through wire of cross-sectional area 0.86 m². Current density J is:",
    question_hi:
      "10 A धारा 0.86 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["5.83 A/m²", "11.66 A/m²", "0.09 A/m²", "8.57 A/m²"],
    options_hi: ["5.83 A/m²", "11.66 A/m²", "0.09 A/m²", "8.57 A/m²"],
    answer_en: "11.66 A/m²",
    answer_hi: "11.66 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "A sample with 693 nuclei undergoes 1 half-lives. Remaining nuclei:",
    question_hi: "693 नाभिक वाला नमूना 1 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["173", "346", "693", "0"],
    options_hi: ["173", "346", "693", "0"],
    answer_en: "346",
    answer_hi: "346",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "A constant force 37 N acts over displacement 10 m. Work done is:",
    question_hi:
      "37 N का नियत बल 10 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["47 J", "3.7 J", "370 J", "185.0 J"],
    options_hi: ["47 J", "3.7 J", "370 J", "185.0 J"],
    answer_en: "370 J",
    answer_hi: "370 J",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "A thin lens with focal length 25 cm forms an image for object at -60 cm. Image distance v is:",
    question_hi:
      "25 cm फोकल लंबाई वाले लेंस के लिए वस्तु -60 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-60 cm", "-42.86 cm", "42.86 cm", "25 cm"],
    options_hi: ["-60 cm", "-42.86 cm", "42.86 cm", "25 cm"],
    answer_en: "42.86 cm",
    answer_hi: "42.86 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en:
      "A net force acts on a mass 3 kg producing acceleration 1 m/s². The force is:",
    question_hi: "3 kg द्रव्यमान पर 1 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["3 N", "2 N", "4 N", "0"],
    options_hi: ["3 N", "2 N", "4 N", "0"],
    answer_en: "3 N",
    answer_hi: "3 N",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en:
      "Body moves in circle radius 6 m at speed 11 m/s. Centripetal acceleration is:",
    question_hi:
      "6 m त्रिज्या वाले वृत्त में 11 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: [
      "11 m/s²",
      "40.333333333333336 m/s²",
      "20.166666666666668 m/s²",
      "1.8333333333333333 m/s²",
    ],
    options_hi: [
      "11 m/s²",
      "40.333333333333336 m/s²",
      "20.166666666666668 m/s²",
      "1.8333333333333333 m/s²",
    ],
    answer_en: "20.166666666666668 m/s²",
    answer_hi: "20.166666666666668 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Dimension of velocity is:",
    question_hi: "वेग का विमीय सूत्र क्या है?",
    options_en: ["[L T^-1]", "[M]", "[T]", "[L]"],
    options_hi: ["[L T^-1]", "[M]", "[T]", "[L]"],
    answer_en: "[L T^-1]",
    answer_hi: "[L T^-1]",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "Energy difference between levels n=3 and n=4 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=3 और n=4 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["0.85 eV", "1.51 eV", "0.66 eV", "0.33 eV"],
    options_hi: ["0.85 eV", "1.51 eV", "0.66 eV", "0.33 eV"],
    answer_en: "0.66 eV",
    answer_hi: "0.66 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "A current 10 A flows through wire of cross-sectional area 1.53 m². Current density J is:",
    question_hi:
      "10 A धारा 1.53 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["6.52 A/m²", "15.34 A/m²", "3.26 A/m²", "0.15 A/m²"],
    options_hi: ["6.52 A/m²", "15.34 A/m²", "3.26 A/m²", "0.15 A/m²"],
    answer_en: "6.52 A/m²",
    answer_hi: "6.52 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
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
    num: 25,
    question_en:
      "A net force acts on a mass 2 kg producing acceleration 10 m/s². The force is:",
    question_hi: "2 kg द्रव्यमान पर 10 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["200 N", "12 N", "20 N", "-8 N"],
    options_hi: ["200 N", "12 N", "20 N", "-8 N"],
    answer_en: "20 N",
    answer_hi: "20 N",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Time to fall freely from height 62 m (g=10 m/s²) is:",
    question_hi: "62 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.76 s", "7.04 s", "2.49 s", "3.52 s"],
    options_hi: ["1.76 s", "7.04 s", "2.49 s", "3.52 s"],
    answer_en: "3.52 s",
    answer_hi: "3.52 s",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "Projectile launched with speed 29 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "29 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["168.2 m", "84.1 m", "0", "42.0 m"],
    options_hi: ["168.2 m", "84.1 m", "0", "42.0 m"],
    answer_en: "84.1 m",
    answer_hi: "84.1 m",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "Maximum static friction for normal reaction 27 N and μ= 0.3 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=27 N, μ=0.3) है:",
    options_en: ["90.0 N", "4.0 N", "8.1 N", "27 N"],
    options_hi: ["90.0 N", "4.0 N", "8.1 N", "27 N"],
    answer_en: "8.1 N",
    answer_hi: "8.1 N",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Nucleus with mass number A=24. Approx total binding energy (avg 7.6 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=24 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.6 MeV/न्यूक्लिओन):",
    options_en: ["90.7 MeV", "181.5 MeV", "191.5 MeV", "7.6 MeV"],
    options_hi: ["90.7 MeV", "181.5 MeV", "191.5 MeV", "7.6 MeV"],
    answer_en: "181.5 MeV",
    answer_hi: "181.5 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "A wave has frequency 437 Hz and wavelength 2.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 437 Hz और तरंगदैर्घ्य 2.0 m है। इसका वेग है:",
    options_en: ["437.0 m/s", "874.0 m/s", "0.005 m/s", "218.5 m/s"],
    options_hi: ["437.0 m/s", "874.0 m/s", "0.005 m/s", "218.5 m/s"],
    answer_en: "874.0 m/s",
    answer_hi: "874.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["3.0e9 m/s", "299863380 m/s", "3.0e7 m/s", "1.5e8 m/s"],
    options_hi: ["3.0e9 m/s", "299863380 m/s", "3.0e7 m/s", "1.5e8 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "Nucleus with mass number A=40. Approx total binding energy (avg 6.8 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=40 वाले नाभिक की कुल बंधन ऊर्जा (औसत 6.8 MeV/न्यूक्लिओन):",
    options_en: ["6.8 MeV", "271.3 MeV", "135.6 MeV", "281.3 MeV"],
    options_hi: ["6.8 MeV", "271.3 MeV", "135.6 MeV", "281.3 MeV"],
    answer_en: "271.3 MeV",
    answer_hi: "271.3 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "Nucleus with mass number A=19. Approx total binding energy (avg 7.8 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=19 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.8 MeV/न्यूक्लिओन):",
    options_en: ["7.8 MeV", "157.5 MeV", "73.8 MeV", "147.5 MeV"],
    options_hi: ["7.8 MeV", "157.5 MeV", "73.8 MeV", "147.5 MeV"],
    answer_en: "147.5 MeV",
    answer_hi: "147.5 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Dimension of energy is:",
    question_hi: "ऊर्जा का विमीय सूत्र क्या है?",
    options_en: ["[M L^2 T^-2]", "[T]", "[L]", "[M]"],
    options_hi: ["[M L^2 T^-2]", "[T]", "[L]", "[M]"],
    answer_en: "[M L^2 T^-2]",
    answer_hi: "[M L^2 T^-2]",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "A car travels 41 km at 40 km/h and then 64 km at 48 km/h. The average speed is:",
    question_hi:
      "एक कार 40 km/h की गति से 41 km और फिर 48 km/h से 64 km चलती है। औसत वेग है:",
    options_en: ["44.5 km/h", "44.0 km/h", "40 km/h", "48 km/h"],
    options_hi: ["44.5 km/h", "44.0 km/h", "40 km/h", "48 km/h"],
    answer_en: "44.5 km/h",
    answer_hi: "44.5 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "Nucleus with mass number A=34. Approx total binding energy (avg 7.5 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=34 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.5 MeV/न्यूक्लिओन):",
    options_en: ["126.9 MeV", "7.5 MeV", "263.8 MeV", "253.8 MeV"],
    options_hi: ["126.9 MeV", "7.5 MeV", "263.8 MeV", "253.8 MeV"],
    answer_en: "253.8 MeV",
    answer_hi: "253.8 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "A constant force 43 N acts over displacement 5 m. Work done is:",
    question_hi:
      "43 N का नियत बल 5 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["215 J", "8.6 J", "107.5 J", "48 J"],
    options_hi: ["215 J", "8.6 J", "107.5 J", "48 J"],
    answer_en: "215 J",
    answer_hi: "215 J",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "Nucleus with mass number A=23. Approx total binding energy (avg 8.5 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=23 वाले नाभिक की कुल बंधन ऊर्जा (औसत 8.5 MeV/न्यूक्लिओन):",
    options_en: ["194.6 MeV", "8.5 MeV", "97.3 MeV", "204.6 MeV"],
    options_hi: ["194.6 MeV", "8.5 MeV", "97.3 MeV", "204.6 MeV"],
    answer_en: "194.6 MeV",
    answer_hi: "194.6 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "For mass-spring (m=1 kg, k=50 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=1 kg, k=50 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.14 s", "44.43 s", "0.44 s", "0.89 s"],
    options_hi: ["0.14 s", "44.43 s", "0.44 s", "0.89 s"],
    answer_en: "0.89 s",
    answer_hi: "0.89 s",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Dimension of power is:",
    question_hi: "शक्ति का विमीय सूत्र क्या है?",
    options_en: ["[M L^2 T^-3]", "[T]", "[L]", "[M]"],
    options_hi: ["[M L^2 T^-3]", "[T]", "[L]", "[M]"],
    answer_en: "[M L^2 T^-3]",
    answer_hi: "[M L^2 T^-3]",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "Nucleus with mass number A=10. Approx total binding energy (avg 8.1 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=10 वाले नाभिक की कुल बंधन ऊर्जा (औसत 8.1 MeV/न्यूक्लिओन):",
    options_en: ["81.2 MeV", "91.2 MeV", "8.1 MeV", "40.6 MeV"],
    options_hi: ["81.2 MeV", "91.2 MeV", "8.1 MeV", "40.6 MeV"],
    answer_en: "81.2 MeV",
    answer_hi: "81.2 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Work 679 J done in 4 s. Power is:",
    question_hi: "4 s में 679 J कार्य किया। शक्ति है:",
    options_en: ["169.8 W", "679 W", "2716 W", "339.5 W"],
    options_hi: ["169.8 W", "679 W", "2716 W", "339.5 W"],
    answer_en: "169.8 W",
    answer_hi: "169.8 W",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "A wave has frequency 108 Hz and wavelength 2.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 108 Hz और तरंगदैर्घ्य 2.0 m है। इसका वेग है:",
    options_en: ["54.0 m/s", "0.019 m/s", "216.0 m/s", "108.0 m/s"],
    options_hi: ["54.0 m/s", "0.019 m/s", "216.0 m/s", "108.0 m/s"],
    answer_en: "216.0 m/s",
    answer_hi: "216.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Work 327 J done in 5 s. Power is:",
    question_hi: "5 s में 327 J कार्य किया। शक्ति है:",
    options_en: ["65.4 W", "1635 W", "130.8 W", "327 W"],
    options_hi: ["65.4 W", "1635 W", "130.8 W", "327 W"],
    answer_en: "65.4 W",
    answer_hi: "65.4 W",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "In a process, heat supplied Q=57 J and work done W=35 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=57 J और किया गया कार्य W=35 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["57 J", "92 J", "22 J", "35 J"],
    options_hi: ["57 J", "92 J", "22 J", "35 J"],
    answer_en: "22 J",
    answer_hi: "22 J",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Dimension of force is:",
    question_hi: "बल का विमीय सूत्र क्या है?",
    options_en: ["[M L T^-2]", "[M]", "[L]", "[T]"],
    options_hi: ["[M L T^-2]", "[M]", "[L]", "[T]"],
    answer_en: "[M L T^-2]",
    answer_hi: "[M L T^-2]",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "A thin lens with focal length 15 cm forms an image for object at -30 cm. Image distance v is:",
    question_hi:
      "15 cm फोकल लंबाई वाले लेंस के लिए वस्तु -30 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["15 cm", "-30 cm", "-30.0 cm", "30.0 cm"],
    options_hi: ["15 cm", "-30 cm", "-30.0 cm", "30.0 cm"],
    answer_en: "30.0 cm",
    answer_hi: "30.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "A constant force 31 N acts over displacement 4 m. Work done is:",
    question_hi:
      "31 N का नियत बल 4 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["35 J", "7.8 J", "62.0 J", "124 J"],
    options_hi: ["35 J", "7.8 J", "62.0 J", "124 J"],
    answer_en: "124 J",
    answer_hi: "124 J",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "Maximum static friction for normal reaction 84 N and μ= 0.2 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=84 N, μ=0.2) है:",
    options_en: ["8.4 N", "84 N", "420.0 N", "16.8 N"],
    options_hi: ["8.4 N", "84 N", "420.0 N", "16.8 N"],
    answer_en: "16.8 N",
    answer_hi: "16.8 N",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "Nucleus with mass number A=10. Approx total binding energy (avg 8.4 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=10 वाले नाभिक की कुल बंधन ऊर्जा (औसत 8.4 MeV/न्यूक्लिओन):",
    options_en: ["94.0 MeV", "8.4 MeV", "42.0 MeV", "84.0 MeV"],
    options_hi: ["94.0 MeV", "8.4 MeV", "42.0 MeV", "84.0 MeV"],
    answer_en: "84.0 MeV",
    answer_hi: "84.0 MeV",
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
