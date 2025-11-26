const questions = [
  {
    num: 1,
    question_en:
      "Body moves in circle radius 2 m at speed 5 m/s. Centripetal acceleration is:",
    question_hi:
      "2 m त्रिज्या वाले वृत्त में 5 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["25.0 m/s²", "2.5 m/s²", "5 m/s²", "12.5 m/s²"],
    options_hi: ["25.0 m/s²", "2.5 m/s²", "5 m/s²", "12.5 m/s²"],
    answer_en: "12.5 m/s²",
    answer_hi: "12.5 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "A wave has frequency 396 Hz and wavelength 0.5 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 396 Hz और तरंगदैर्घ्य 0.5 m है। इसका वेग है:",
    options_en: ["99.0 m/s", "792.0 m/s", "0.001 m/s", "198.0 m/s"],
    options_hi: ["99.0 m/s", "792.0 m/s", "0.001 m/s", "198.0 m/s"],
    answer_en: "198.0 m/s",
    answer_hi: "198.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "For mass-spring (m=4 kg, k=100 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=4 kg, k=100 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.63 s", "31.42 s", "1.26 s", "0.2 s"],
    options_hi: ["0.63 s", "31.42 s", "1.26 s", "0.2 s"],
    answer_en: "1.26 s",
    answer_hi: "1.26 s",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Fleming's left-hand rule is used to find the direction of:",
    question_hi:
      "फ्लेमिंग का बायाँ हाथ नियम किस दिशा को ज्ञात करने के लिए उपयोग होता है?",
    options_en: [
      "Charge density",
      "Magnetic field lines",
      "Induced current",
      "Force on a current-carrying conductor",
    ],
    options_hi: [
      "Charge density",
      "Magnetic field lines",
      "Induced current",
      "Force on a current-carrying conductor",
    ],
    answer_en: "Force on a current-carrying conductor",
    answer_hi: "Force on a current-carrying conductor",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en:
      "A sample with 470 nuclei undergoes 4 half-lives. Remaining nuclei:",
    question_hi: "470 नाभिक वाला नमूना 4 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["117", "29", "470", "235"],
    options_hi: ["117", "29", "470", "235"],
    answer_en: "29",
    answer_hi: "29",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "A constant force 46 N acts over displacement 7 m. Work done is:",
    question_hi:
      "46 N का नियत बल 7 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["322 J", "161.0 J", "6.6 J", "53 J"],
    options_hi: ["322 J", "161.0 J", "6.6 J", "53 J"],
    answer_en: "322 J",
    answer_hi: "322 J",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "Projectile launched with speed 23 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "23 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["52.9 m", "26.4 m", "0", "105.8 m"],
    options_hi: ["52.9 m", "26.4 m", "0", "105.8 m"],
    answer_en: "52.9 m",
    answer_hi: "52.9 m",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Faraday's law states that induced emf is proportional to:",
    question_hi:
      "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    options_en: [
      "Magnetic flux itself",
      "Rate of change of magnetic flux",
      "Square of current",
      "Resistance of coil",
    ],
    options_hi: [
      "Magnetic flux itself",
      "Rate of change of magnetic flux",
      "Square of current",
      "Resistance of coil",
    ],
    answer_en: "Rate of change of magnetic flux",
    answer_hi: "Rate of change of magnetic flux",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en:
      "A current 9 A flows through wire of cross-sectional area 1.22 m². Current density J is:",
    question_hi:
      "9 A धारा 1.22 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["10.97 A/m²", "3.69 A/m²", "7.38 A/m²", "0.14 A/m²"],
    options_hi: ["10.97 A/m²", "3.69 A/m²", "7.38 A/m²", "0.14 A/m²"],
    answer_en: "7.38 A/m²",
    answer_hi: "7.38 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "Work 697 J done in 5 s. Power is:",
    question_hi: "5 s में 697 J कार्य किया। शक्ति है:",
    options_en: ["3485 W", "697 W", "139.4 W", "278.8 W"],
    options_hi: ["3485 W", "697 W", "139.4 W", "278.8 W"],
    answer_en: "139.4 W",
    answer_hi: "139.4 W",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en:
      "Maximum static friction for normal reaction 58 N and μ= 0.2 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=58 N, μ=0.2) है:",
    options_en: ["58 N", "290.0 N", "5.8 N", "11.6 N"],
    options_hi: ["58 N", "290.0 N", "5.8 N", "11.6 N"],
    answer_en: "11.6 N",
    answer_hi: "11.6 N",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en:
      "A constant force 30 N acts over displacement 5 m. Work done is:",
    question_hi:
      "30 N का नियत बल 5 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["150 J", "6.0 J", "35 J", "75.0 J"],
    options_hi: ["150 J", "6.0 J", "35 J", "75.0 J"],
    answer_en: "150 J",
    answer_hi: "150 J",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "A net force acts on a mass 4 kg producing acceleration 5 m/s². The force is:",
    question_hi: "4 kg द्रव्यमान पर 5 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["20 N", "-1 N", "100 N", "9 N"],
    options_hi: ["20 N", "-1 N", "100 N", "9 N"],
    answer_en: "20 N",
    answer_hi: "20 N",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "Projectile launched with speed 31 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "31 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["192.2 m", "48.0 m", "96.1 m", "0"],
    options_hi: ["192.2 m", "48.0 m", "96.1 m", "0"],
    answer_en: "96.1 m",
    answer_hi: "96.1 m",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "Nucleus with mass number A=14. Approx total binding energy (avg 7.9 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=14 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.9 MeV/न्यूक्लिओन):",
    options_en: ["7.9 MeV", "120.5 MeV", "55.2 MeV", "110.5 MeV"],
    options_hi: ["7.9 MeV", "120.5 MeV", "55.2 MeV", "110.5 MeV"],
    answer_en: "110.5 MeV",
    answer_hi: "110.5 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Dimension of energy is:",
    question_hi: "ऊर्जा का विमीय सूत्र क्या है?",
    options_en: ["[M L^2 T^-2]", "[L]", "[M]", "[T]"],
    options_hi: ["[M L^2 T^-2]", "[L]", "[M]", "[T]"],
    answer_en: "[M L^2 T^-2]",
    answer_hi: "[M L^2 T^-2]",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Dimension of velocity is:",
    question_hi: "वेग का विमीय सूत्र क्या है?",
    options_en: ["[M]", "[L]", "[T]", "[L T^-1]"],
    options_hi: ["[M]", "[L]", "[T]", "[L T^-1]"],
    answer_en: "[L T^-1]",
    answer_hi: "[L T^-1]",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "Work 864 J done in 20 s. Power is:",
    question_hi: "20 s में 864 J कार्य किया। शक्ति है:",
    options_en: ["86.4 W", "43.2 W", "17280 W", "864 W"],
    options_hi: ["86.4 W", "43.2 W", "17280 W", "864 W"],
    answer_en: "43.2 W",
    answer_hi: "43.2 W",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en:
      "A net force acts on a mass 3 kg producing acceleration 5 m/s². The force is:",
    question_hi: "3 kg द्रव्यमान पर 5 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["75 N", "8 N", "-2 N", "15 N"],
    options_hi: ["75 N", "8 N", "-2 N", "15 N"],
    answer_en: "15 N",
    answer_hi: "15 N",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
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
    num: 21,
    question_en: "Time to fall freely from height 44 m (g=10 m/s²) is:",
    question_hi: "44 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["2.1 s", "1.48 s", "5.93 s", "2.97 s"],
    options_hi: ["2.1 s", "1.48 s", "5.93 s", "2.97 s"],
    answer_en: "2.97 s",
    answer_hi: "2.97 s",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "A current 4 A flows through wire of cross-sectional area 1.74 m². Current density J is:",
    question_hi:
      "4 A धारा 1.74 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.43 A/m²", "1.15 A/m²", "2.3 A/m²", "6.96 A/m²"],
    options_hi: ["0.43 A/m²", "1.15 A/m²", "2.3 A/m²", "6.96 A/m²"],
    answer_en: "2.3 A/m²",
    answer_hi: "2.3 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "A current 2 A flows through wire of cross-sectional area 0.90 m². Current density J is:",
    question_hi:
      "2 A धारा 0.90 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.45 A/m²", "1.12 A/m²", "1.79 A/m²", "2.23 A/m²"],
    options_hi: ["0.45 A/m²", "1.12 A/m²", "1.79 A/m²", "2.23 A/m²"],
    answer_en: "2.23 A/m²",
    answer_hi: "2.23 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "Nucleus with mass number A=31. Approx total binding energy (avg 7.9 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=31 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.9 MeV/न्यूक्लिओन):",
    options_en: ["245.5 MeV", "122.7 MeV", "255.5 MeV", "7.9 MeV"],
    options_hi: ["245.5 MeV", "122.7 MeV", "255.5 MeV", "7.9 MeV"],
    answer_en: "245.5 MeV",
    answer_hi: "245.5 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "A thin lens with focal length 15 cm forms an image for object at -60 cm. Image distance v is:",
    question_hi:
      "15 cm फोकल लंबाई वाले लेंस के लिए वस्तु -60 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-60 cm", "-20.0 cm", "15 cm", "20.0 cm"],
    options_hi: ["-60 cm", "-20.0 cm", "15 cm", "20.0 cm"],
    answer_en: "20.0 cm",
    answer_hi: "20.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "A sample with 675 nuclei undergoes 4 half-lives. Remaining nuclei:",
    question_hi: "675 नाभिक वाला नमूना 4 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["42", "675", "337", "168"],
    options_hi: ["42", "675", "337", "168"],
    answer_en: "42",
    answer_hi: "42",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "Capacitors 10 μF and 2 μF in series. Equivalent capacitance:",
    question_hi: "10 μF और 2 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["12 μF", "1.67 μF", "20 μF", "2 μF"],
    options_hi: ["12 μF", "1.67 μF", "20 μF", "2 μF"],
    answer_en: "1.67 μF",
    answer_hi: "1.67 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "Gravitational potential energy of mass 11 kg at height 48 m (g=10) is:",
    question_hi:
      "11 kg द्रव्यमान की 48 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["5280 J", "69 J", "528 J", "2640.0 J"],
    options_hi: ["5280 J", "69 J", "528 J", "2640.0 J"],
    answer_en: "5280 J",
    answer_hi: "5280 J",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Body moves in circle radius 9 m at speed 17 m/s. Centripetal acceleration is:",
    question_hi:
      "9 m त्रिज्या वाले वृत्त में 17 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: [
      "17 m/s²",
      "32.111111111111114 m/s²",
      "1.8888888888888888 m/s²",
      "64.22222222222223 m/s²",
    ],
    options_hi: [
      "17 m/s²",
      "32.111111111111114 m/s²",
      "1.8888888888888888 m/s²",
      "64.22222222222223 m/s²",
    ],
    answer_en: "32.111111111111114 m/s²",
    answer_hi: "32.111111111111114 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "A constant force 14 N acts over displacement 8 m. Work done is:",
    question_hi:
      "14 N का नियत बल 8 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["22 J", "112 J", "1.8 J", "56.0 J"],
    options_hi: ["22 J", "112 J", "1.8 J", "56.0 J"],
    answer_en: "112 J",
    answer_hi: "112 J",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "A car travels 30 km at 80 km/h and then 48 km at 57 km/h. The average speed is:",
    question_hi:
      "एक कार 80 km/h की गति से 30 km और फिर 57 km/h से 48 km चलती है। औसत वेग है:",
    options_en: ["64.1 km/h", "68.5 km/h", "80 km/h", "57 km/h"],
    options_hi: ["64.1 km/h", "68.5 km/h", "80 km/h", "57 km/h"],
    answer_en: "64.1 km/h",
    answer_hi: "64.1 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "Projectile launched with speed 33 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "33 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["0", "108.9 m", "54.5 m", "217.8 m"],
    options_hi: ["0", "108.9 m", "54.5 m", "217.8 m"],
    answer_en: "108.9 m",
    answer_hi: "108.9 m",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=7.00e+14 Hz and incident frequency f=5.60e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=7.00e+14 Hz और आपतित आवृत्ति f=5.60e+14 Hz होने पर परिणाम है:",
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
    num: 34,
    question_en:
      "A net force acts on a mass 4 kg producing acceleration 3 m/s². The force is:",
    question_hi: "4 kg द्रव्यमान पर 3 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["1 N", "12 N", "36 N", "7 N"],
    options_hi: ["1 N", "12 N", "36 N", "7 N"],
    answer_en: "12 N",
    answer_hi: "12 N",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
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
    num: 36,
    question_en:
      "A net force acts on a mass 2 kg producing acceleration 10 m/s². The force is:",
    question_hi: "2 kg द्रव्यमान पर 10 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["20 N", "200 N", "-8 N", "12 N"],
    options_hi: ["20 N", "200 N", "-8 N", "12 N"],
    answer_en: "20 N",
    answer_hi: "20 N",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
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
    num: 38,
    question_en:
      "A wave has frequency 297 Hz and wavelength 0.2 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 297 Hz और तरंगदैर्घ्य 0.2 m है। इसका वेग है:",
    options_en: ["59.4 m/s", "0.001 m/s", "1485.0 m/s", "29.7 m/s"],
    options_hi: ["59.4 m/s", "0.001 m/s", "1485.0 m/s", "29.7 m/s"],
    answer_en: "59.4 m/s",
    answer_hi: "59.4 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "Maximum static friction for normal reaction 83 N and μ= 0.4 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=83 N, μ=0.4) है:",
    options_en: ["83 N", "207.5 N", "33.2 N", "16.6 N"],
    options_hi: ["83 N", "207.5 N", "33.2 N", "16.6 N"],
    answer_en: "33.2 N",
    answer_hi: "33.2 N",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en:
      "Gravitational potential energy of mass 9 kg at height 28 m (g=10) is:",
    question_hi:
      "9 kg द्रव्यमान की 28 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["252 J", "2520 J", "47 J", "1260.0 J"],
    options_hi: ["252 J", "2520 J", "47 J", "1260.0 J"],
    answer_en: "2520 J",
    answer_hi: "2520 J",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Work 546 J done in 5 s. Power is:",
    question_hi: "5 s में 546 J कार्य किया। शक्ति है:",
    options_en: ["546 W", "218.4 W", "109.2 W", "2730 W"],
    options_hi: ["546 W", "218.4 W", "109.2 W", "2730 W"],
    answer_en: "109.2 W",
    answer_hi: "109.2 W",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=7.00e+14 Hz and incident frequency f=7.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=7.00e+14 Hz और आपतित आवृत्ति f=7.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Cannot say",
      "Maximum KE",
      "No emission",
      "Electrons just emitted (zero KE)",
    ],
    options_hi: [
      "Cannot say",
      "Maximum KE",
      "No emission",
      "Electrons just emitted (zero KE)",
    ],
    answer_en: "Electrons just emitted (zero KE)",
    answer_hi: "Electrons just emitted (zero KE)",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "A current 5 A flows through wire of cross-sectional area 1.15 m². Current density J is:",
    question_hi:
      "5 A धारा 1.15 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["5.75 A/m²", "0.23 A/m²", "2.17 A/m²", "4.35 A/m²"],
    options_hi: ["5.75 A/m²", "0.23 A/m²", "2.17 A/m²", "4.35 A/m²"],
    answer_en: "4.35 A/m²",
    answer_hi: "4.35 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=6.00e+14 Hz and incident frequency f=6.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=6.00e+14 Hz और आपतित आवृत्ति f=6.00e+14 Hz होने पर परिणाम है:",
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
    num: 45,
    question_en:
      "A current 7 A flows through wire of cross-sectional area 1.89 m². Current density J is:",
    question_hi:
      "7 A धारा 1.89 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["1.85 A/m²", "3.7 A/m²", "0.27 A/m²", "13.24 A/m²"],
    options_hi: ["1.85 A/m²", "3.7 A/m²", "0.27 A/m²", "13.24 A/m²"],
    answer_en: "3.7 A/m²",
    answer_hi: "3.7 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Projectile launched with speed 26 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "26 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["67.6 m", "33.8 m", "135.2 m", "0"],
    options_hi: ["67.6 m", "33.8 m", "135.2 m", "0"],
    answer_en: "67.6 m",
    answer_hi: "67.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "A sample with 561 nuclei undergoes 4 half-lives. Remaining nuclei:",
    question_hi: "561 नाभिक वाला नमूना 4 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["140", "35", "280", "561"],
    options_hi: ["140", "35", "280", "561"],
    answer_en: "35",
    answer_hi: "35",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "Maximum static friction for normal reaction 59 N and μ= 0.3 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=59 N, μ=0.3) है:",
    options_en: ["196.7 N", "8.8 N", "17.7 N", "59 N"],
    options_hi: ["196.7 N", "8.8 N", "17.7 N", "59 N"],
    answer_en: "17.7 N",
    answer_hi: "17.7 N",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "A current 2 A flows through wire of cross-sectional area 1.11 m². Current density J is:",
    question_hi:
      "2 A धारा 1.11 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["1.79 A/m²", "0.9 A/m²", "0.56 A/m²", "2.23 A/m²"],
    options_hi: ["1.79 A/m²", "0.9 A/m²", "0.56 A/m²", "2.23 A/m²"],
    answer_en: "1.79 A/m²",
    answer_hi: "1.79 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "A current 9 A flows through wire of cross-sectional area 0.58 m². Current density J is:",
    question_hi:
      "9 A धारा 0.58 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["5.26 A/m²", "15.39 A/m²", "7.7 A/m²", "0.06 A/m²"],
    options_hi: ["5.26 A/m²", "15.39 A/m²", "7.7 A/m²", "0.06 A/m²"],
    answer_en: "15.39 A/m²",
    answer_hi: "15.39 A/m²",
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
