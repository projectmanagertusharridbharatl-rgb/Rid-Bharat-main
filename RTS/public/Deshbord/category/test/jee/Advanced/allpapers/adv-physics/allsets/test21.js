const questions = [
  {
    num: 1,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=6.00e+14 Hz and incident frequency f=6.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=6.00e+14 Hz और आपतित आवृत्ति f=6.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Maximum KE",
      "No emission",
      "Electrons just emitted (zero KE)",
      "Cannot say",
    ],
    options_hi: [
      "Maximum KE",
      "No emission",
      "Electrons just emitted (zero KE)",
      "Cannot say",
    ],
    answer_en: "Electrons just emitted (zero KE)",
    answer_hi: "Electrons just emitted (zero KE)",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["299863380 m/s", "3.0e9 m/s", "1.5e8 m/s", "3.0e7 m/s"],
    options_hi: ["299863380 m/s", "3.0e9 m/s", "1.5e8 m/s", "3.0e7 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en:
      "A net force acts on a mass 2 kg producing acceleration 8 m/s². The force is:",
    question_hi: "2 kg द्रव्यमान पर 8 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["10 N", "128 N", "16 N", "-6 N"],
    options_hi: ["10 N", "128 N", "16 N", "-6 N"],
    answer_en: "16 N",
    answer_hi: "16 N",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "A thin lens with focal length 15 cm forms an image for object at -60 cm. Image distance v is:",
    question_hi:
      "15 cm फोकल लंबाई वाले लेंस के लिए वस्तु -60 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-20.0 cm", "15 cm", "20.0 cm", "-60 cm"],
    options_hi: ["-20.0 cm", "15 cm", "20.0 cm", "-60 cm"],
    answer_en: "20.0 cm",
    answer_hi: "20.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en:
      "Body moves in circle radius 10 m at speed 8 m/s. Centripetal acceleration is:",
    question_hi:
      "10 m त्रिज्या वाले वृत्त में 8 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["12.8 m/s²", "8 m/s²", "6.4 m/s²", "0.8 m/s²"],
    options_hi: ["12.8 m/s²", "8 m/s²", "6.4 m/s²", "0.8 m/s²"],
    answer_en: "6.4 m/s²",
    answer_hi: "6.4 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Ideal gas: P=100000 Pa, V=0.01 m³, n=1 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=100000 Pa, V=0.01 m³, n=1 mol. तापमान है:",
    options_en: ["240.7 K", "120.3 K", "60.2 K", "1000.0"],
    options_hi: ["240.7 K", "120.3 K", "60.2 K", "1000.0"],
    answer_en: "120.3 K",
    answer_hi: "120.3 K",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Work 579 J done in 10 s. Power is:",
    question_hi: "10 s में 579 J कार्य किया। शक्ति है:",
    options_en: ["579 W", "5790 W", "115.8 W", "57.9 W"],
    options_hi: ["579 W", "5790 W", "115.8 W", "57.9 W"],
    answer_en: "57.9 W",
    answer_hi: "57.9 W",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "Projectile launched with speed 20 m/s at 60°. Range (g=10 m/s²) is:",
    question_hi: "20 m/s की गति से 60° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["20.0 m", "40.0 m", "34.6 m", "69.3 m"],
    options_hi: ["20.0 m", "40.0 m", "34.6 m", "69.3 m"],
    answer_en: "34.6 m",
    answer_hi: "34.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Two resistors 3 Ω and 5 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 3 Ω और 5 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["5 Ω", "15 Ω", "1.88 Ω", "8 Ω"],
    options_hi: ["5 Ω", "15 Ω", "1.88 Ω", "8 Ω"],
    answer_en: "8 Ω",
    answer_hi: "8 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "A car travels 53 km at 39 km/h and then 39 km at 78 km/h. The average speed is:",
    question_hi:
      "एक कार 39 km/h की गति से 53 km और फिर 78 km/h से 39 km चलती है। औसत वेग है:",
    options_en: ["58.5 km/h", "49.5 km/h", "78 km/h", "39 km/h"],
    options_hi: ["58.5 km/h", "49.5 km/h", "78 km/h", "39 km/h"],
    answer_en: "49.5 km/h",
    answer_hi: "49.5 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en:
      "In a process, heat supplied Q=186 J and work done W=36 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=186 J और किया गया कार्य W=36 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["186 J", "36 J", "222 J", "150 J"],
    options_hi: ["186 J", "36 J", "222 J", "150 J"],
    answer_en: "150 J",
    answer_hi: "150 J",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Work 409 J done in 13 s. Power is:",
    question_hi: "13 s में 409 J कार्य किया। शक्ति है:",
    options_en: ["409 W", "5317 W", "62.9 W", "31.5 W"],
    options_hi: ["409 W", "5317 W", "62.9 W", "31.5 W"],
    answer_en: "31.5 W",
    answer_hi: "31.5 W",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "A car travels 78 km at 35 km/h and then 80 km at 72 km/h. The average speed is:",
    question_hi:
      "एक कार 35 km/h की गति से 78 km और फिर 72 km/h से 80 km चलती है। औसत वेग है:",
    options_en: ["35 km/h", "72 km/h", "47.3 km/h", "53.5 km/h"],
    options_hi: ["35 km/h", "72 km/h", "47.3 km/h", "53.5 km/h"],
    answer_en: "47.3 km/h",
    answer_hi: "47.3 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "A wave has frequency 462 Hz and wavelength 2.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 462 Hz और तरंगदैर्घ्य 2.0 m है। इसका वेग है:",
    options_en: ["924.0 m/s", "231.0 m/s", "462.0 m/s", "0.004 m/s"],
    options_hi: ["924.0 m/s", "231.0 m/s", "462.0 m/s", "0.004 m/s"],
    answer_en: "924.0 m/s",
    answer_hi: "924.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "Capacitors 2 μF and 10 μF in parallel. Equivalent capacitance:",
    question_hi: "2 μF और 10 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["20 μF", "1.67 μF", "12 μF", "10 μF"],
    options_hi: ["20 μF", "1.67 μF", "12 μF", "10 μF"],
    answer_en: "12 μF",
    answer_hi: "12 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "Body moves in circle radius 6 m at speed 23 m/s. Centripetal acceleration is:",
    question_hi:
      "6 m त्रिज्या वाले वृत्त में 23 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: [
      "88.16666666666667 m/s²",
      "23 m/s²",
      "3.8333333333333335 m/s²",
      "176.33333333333334 m/s²",
    ],
    options_hi: [
      "88.16666666666667 m/s²",
      "23 m/s²",
      "3.8333333333333335 m/s²",
      "176.33333333333334 m/s²",
    ],
    answer_en: "88.16666666666667 m/s²",
    answer_hi: "88.16666666666667 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Maximum static friction for normal reaction 66 N and μ= 0.2 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=66 N, μ=0.2) है:",
    options_en: ["66 N", "6.6 N", "330.0 N", "13.2 N"],
    options_hi: ["66 N", "6.6 N", "330.0 N", "13.2 N"],
    answer_en: "13.2 N",
    answer_hi: "13.2 N",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "A current 9 A flows through wire of cross-sectional area 0.54 m². Current density J is:",
    question_hi:
      "9 A धारा 0.54 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["4.85 A/m²", "16.69 A/m²", "8.35 A/m²", "0.06 A/m²"],
    options_hi: ["4.85 A/m²", "16.69 A/m²", "8.35 A/m²", "0.06 A/m²"],
    answer_en: "16.69 A/m²",
    answer_hi: "16.69 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en:
      "Nucleus with mass number A=32. Approx total binding energy (avg 6.7 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=32 वाले नाभिक की कुल बंधन ऊर्जा (औसत 6.7 MeV/न्यूक्लिओन):",
    options_en: ["225.7 MeV", "6.7 MeV", "107.9 MeV", "215.7 MeV"],
    options_hi: ["225.7 MeV", "6.7 MeV", "107.9 MeV", "215.7 MeV"],
    answer_en: "215.7 MeV",
    answer_hi: "215.7 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en:
      "Maximum static friction for normal reaction 98 N and μ= 0.3 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=98 N, μ=0.3) है:",
    options_en: ["29.4 N", "326.7 N", "14.7 N", "98 N"],
    options_hi: ["29.4 N", "326.7 N", "14.7 N", "98 N"],
    answer_en: "29.4 N",
    answer_hi: "29.4 N",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "A resistor 8 Ω connected to 3 V. Current is:",
    question_hi: "8 Ω प्रतिरोधक को 3 V से जोड़ा। धारा है:",
    options_en: ["0.38 A", "0.19 A", "2.67 A", "24 A"],
    options_hi: ["0.38 A", "0.19 A", "2.67 A", "24 A"],
    answer_en: "0.38 A",
    answer_hi: "0.38 A",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "For mass-spring (m=5 kg, k=100 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=5 kg, k=100 N/m) के लिए आवर्तकाल T है:",
    options_en: ["1.4 s", "0.7 s", "28.1 s", "0.22 s"],
    options_hi: ["1.4 s", "0.7 s", "28.1 s", "0.22 s"],
    answer_en: "1.4 s",
    answer_hi: "1.4 s",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Ideal gas: P=400000 Pa, V=0.01 m³, n=2 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=400000 Pa, V=0.01 m³, n=2 mol. तापमान है:",
    options_en: ["240.7 K", "481.3 K", "120.3 K", "4000.0"],
    options_hi: ["240.7 K", "481.3 K", "120.3 K", "4000.0"],
    answer_en: "240.7 K",
    answer_hi: "240.7 K",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
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
    num: 25,
    question_en:
      "Gravitational potential energy of mass 5 kg at height 6 m (g=10) is:",
    question_hi:
      "5 kg द्रव्यमान की 6 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["150.0 J", "21 J", "300 J", "30 J"],
    options_hi: ["150.0 J", "21 J", "300 J", "30 J"],
    answer_en: "300 J",
    answer_hi: "300 J",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "For mass-spring (m=4 kg, k=100 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=4 kg, k=100 N/m) के लिए आवर्तकाल T है:",
    options_en: ["1.26 s", "0.2 s", "31.42 s", "0.63 s"],
    options_hi: ["1.26 s", "0.2 s", "31.42 s", "0.63 s"],
    answer_en: "1.26 s",
    answer_hi: "1.26 s",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "Projectile launched with speed 26 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "26 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["33.8 m", "135.2 m", "67.6 m", "0"],
    options_hi: ["33.8 m", "135.2 m", "67.6 m", "0"],
    answer_en: "67.6 m",
    answer_hi: "67.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "Capacitors 4 μF and 2 μF in parallel. Equivalent capacitance:",
    question_hi: "4 μF और 2 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["8 μF", "1.33 μF", "4 μF", "6 μF"],
    options_hi: ["8 μF", "1.33 μF", "4 μF", "6 μF"],
    answer_en: "6 μF",
    answer_hi: "6 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Nucleus with mass number A=20. Approx total binding energy (avg 8.3 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=20 वाले नाभिक की कुल बंधन ऊर्जा (औसत 8.3 MeV/न्यूक्लिओन):",
    options_en: ["8.3 MeV", "83.0 MeV", "165.9 MeV", "175.9 MeV"],
    options_hi: ["8.3 MeV", "83.0 MeV", "165.9 MeV", "175.9 MeV"],
    answer_en: "165.9 MeV",
    answer_hi: "165.9 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "A wave has frequency 393 Hz and wavelength 1.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 393 Hz और तरंगदैर्घ्य 1.0 m है। इसका वेग है:",
    options_en: ["0.003 m/s", "393.0 m/s", "196.5 m/s", "0"],
    options_hi: ["0.003 m/s", "393.0 m/s", "196.5 m/s", "0"],
    answer_en: "393.0 m/s",
    answer_hi: "393.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "Maximum static friction for normal reaction 41 N and μ= 0.4 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=41 N, μ=0.4) है:",
    options_en: ["16.4 N", "41 N", "8.2 N", "102.5 N"],
    options_hi: ["16.4 N", "41 N", "8.2 N", "102.5 N"],
    answer_en: "16.4 N",
    answer_hi: "16.4 N",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "Work 123 J done in 20 s. Power is:",
    question_hi: "20 s में 123 J कार्य किया। शक्ति है:",
    options_en: ["12.3 W", "2460 W", "6.2 W", "123 W"],
    options_hi: ["12.3 W", "2460 W", "6.2 W", "123 W"],
    answer_en: "6.2 W",
    answer_hi: "6.2 W",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Capacitors 2 μF and 10 μF in series. Equivalent capacitance:",
    question_hi: "2 μF और 10 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["20 μF", "12 μF", "1.67 μF", "2 μF"],
    options_hi: ["20 μF", "12 μF", "1.67 μF", "2 μF"],
    answer_en: "1.67 μF",
    answer_hi: "1.67 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Capacitors 10 μF and 5 μF in series. Equivalent capacitance:",
    question_hi: "10 μF और 5 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["15 μF", "5 μF", "3.33 μF", "50 μF"],
    options_hi: ["15 μF", "5 μF", "3.33 μF", "50 μF"],
    answer_en: "3.33 μF",
    answer_hi: "3.33 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "Projectile launched with speed 38 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "38 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["72.2 m", "288.8 m", "0", "144.4 m"],
    options_hi: ["72.2 m", "288.8 m", "0", "144.4 m"],
    answer_en: "144.4 m",
    answer_hi: "144.4 m",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "A current 1 A flows through wire of cross-sectional area 1.39 m². Current density J is:",
    question_hi:
      "1 A धारा 1.39 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["1.39 A/m²", "1.39 A/m²", "0.72 A/m²", "0.36 A/m²"],
    options_hi: ["1.39 A/m²", "1.39 A/m²", "0.72 A/m²", "0.36 A/m²"],
    answer_en: "0.72 A/m²",
    answer_hi: "0.72 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "Nucleus with mass number A=12. Approx total binding energy (avg 6.9 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=12 वाले नाभिक की कुल बंधन ऊर्जा (औसत 6.9 MeV/न्यूक्लिओन):",
    options_en: ["41.1 MeV", "92.3 MeV", "82.3 MeV", "6.9 MeV"],
    options_hi: ["41.1 MeV", "92.3 MeV", "82.3 MeV", "6.9 MeV"],
    answer_en: "82.3 MeV",
    answer_hi: "82.3 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "A resistor 7 Ω connected to 24 V. Current is:",
    question_hi: "7 Ω प्रतिरोधक को 24 V से जोड़ा। धारा है:",
    options_en: ["0.29 A", "3.43 A", "1.71 A", "168 A"],
    options_hi: ["0.29 A", "3.43 A", "1.71 A", "168 A"],
    answer_en: "3.43 A",
    answer_hi: "3.43 A",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Ideal gas: P=300000 Pa, V=0.04 m³, n=2 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=300000 Pa, V=0.04 m³, n=2 mol. तापमान है:",
    options_en: ["361.0 K", "722.0 K", "1444.0 K", "12000.0"],
    options_hi: ["361.0 K", "722.0 K", "1444.0 K", "12000.0"],
    answer_en: "722.0 K",
    answer_hi: "722.0 K",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en:
      "A wave has frequency 462 Hz and wavelength 0.5 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 462 Hz और तरंगदैर्घ्य 0.5 m है। इसका वेग है:",
    options_en: ["115.5 m/s", "0.001 m/s", "924.0 m/s", "231.0 m/s"],
    options_hi: ["115.5 m/s", "0.001 m/s", "924.0 m/s", "231.0 m/s"],
    answer_en: "231.0 m/s",
    answer_hi: "231.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "Projectile launched with speed 17 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "17 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["0", "57.8 m", "28.9 m", "14.4 m"],
    options_hi: ["0", "57.8 m", "28.9 m", "14.4 m"],
    answer_en: "28.9 m",
    answer_hi: "28.9 m",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "A thin lens with focal length 10 cm forms an image for object at -60 cm. Image distance v is:",
    question_hi:
      "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -60 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-60 cm", "12.0 cm", "-12.0 cm", "10 cm"],
    options_hi: ["-60 cm", "12.0 cm", "-12.0 cm", "10 cm"],
    answer_en: "12.0 cm",
    answer_hi: "12.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Time to fall freely from height 63 m (g=10 m/s²) is:",
    question_hi: "63 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["7.1 s", "2.51 s", "3.55 s", "1.77 s"],
    options_hi: ["7.1 s", "2.51 s", "3.55 s", "1.77 s"],
    answer_en: "3.55 s",
    answer_hi: "3.55 s",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en:
      "A constant force 27 N acts over displacement 6 m. Work done is:",
    question_hi:
      "27 N का नियत बल 6 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["162 J", "81.0 J", "4.5 J", "33 J"],
    options_hi: ["162 J", "81.0 J", "4.5 J", "33 J"],
    answer_en: "162 J",
    answer_hi: "162 J",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Capacitors 2 μF and 5 μF in series. Equivalent capacitance:",
    question_hi: "2 μF और 5 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["2 μF", "1.43 μF", "7 μF", "10 μF"],
    options_hi: ["2 μF", "1.43 μF", "7 μF", "10 μF"],
    answer_en: "1.43 μF",
    answer_hi: "1.43 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "A thin lens with focal length 10 cm forms an image for object at -50 cm. Image distance v is:",
    question_hi:
      "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -50 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["10 cm", "12.5 cm", "-50 cm", "-12.5 cm"],
    options_hi: ["10 cm", "12.5 cm", "-50 cm", "-12.5 cm"],
    answer_en: "12.5 cm",
    answer_hi: "12.5 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Maximum static friction for normal reaction 21 N and μ= 0.3 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=21 N, μ=0.3) है:",
    options_en: ["3.1 N", "21 N", "70.0 N", "6.3 N"],
    options_hi: ["3.1 N", "21 N", "70.0 N", "6.3 N"],
    answer_en: "6.3 N",
    answer_hi: "6.3 N",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Time to fall freely from height 59 m (g=10 m/s²) is:",
    question_hi: "59 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["6.87 s", "1.72 s", "2.43 s", "3.44 s"],
    options_hi: ["6.87 s", "1.72 s", "2.43 s", "3.44 s"],
    answer_en: "3.44 s",
    answer_hi: "3.44 s",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Time to fall freely from height 19 m (g=10 m/s²) is:",
    question_hi: "19 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.38 s", "1.95 s", "3.9 s", "0.97 s"],
    options_hi: ["1.38 s", "1.95 s", "3.9 s", "0.97 s"],
    answer_en: "1.95 s",
    answer_hi: "1.95 s",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Fleming's left-hand rule is used to find the direction of:",
    question_hi:
      "फ्लेमिंग का बायाँ हाथ नियम किस दिशा को ज्ञात करने के लिए उपयोग होता है?",
    options_en: [
      "Charge density",
      "Induced current",
      "Magnetic field lines",
      "Force on a current-carrying conductor",
    ],
    options_hi: [
      "Charge density",
      "Induced current",
      "Magnetic field lines",
      "Force on a current-carrying conductor",
    ],
    answer_en: "Force on a current-carrying conductor",
    answer_hi: "Force on a current-carrying conductor",
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
