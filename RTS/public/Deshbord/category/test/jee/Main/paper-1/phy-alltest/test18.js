const questions = [
  {
    num: 1,
    question_en:
      "Body moves in circle radius 7 m at speed 17 m/s. Centripetal acceleration is:",
    question_hi:
      "7 m त्रिज्या वाले वृत्त में 17 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: [
      "41.285714285714285 m/s²",
      "2.4285714285714284 m/s²",
      "82.57142857142857 m/s²",
      "17 m/s²",
    ],
    options_hi: [
      "41.285714285714285 m/s²",
      "2.4285714285714284 m/s²",
      "82.57142857142857 m/s²",
      "17 m/s²",
    ],
    answer_en: "41.285714285714285 m/s²",
    answer_hi: "41.285714285714285 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "A thin lens with focal length 20 cm forms an image for object at -40 cm. Image distance v is:",
    question_hi:
      "20 cm फोकल लंबाई वाले लेंस के लिए वस्तु -40 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-40.0 cm", "20 cm", "-40 cm", "40.0 cm"],
    options_hi: ["-40.0 cm", "20 cm", "-40 cm", "40.0 cm"],
    answer_en: "40.0 cm",
    answer_hi: "40.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
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
    num: 4,
    question_en:
      "A constant force 36 N acts over displacement 5 m. Work done is:",
    question_hi:
      "36 N का नियत बल 5 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["7.2 J", "180 J", "90.0 J", "41 J"],
    options_hi: ["7.2 J", "180 J", "90.0 J", "41 J"],
    answer_en: "180 J",
    answer_hi: "180 J",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en:
      "Maximum static friction for normal reaction 32 N and μ= 0.4 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=32 N, μ=0.4) है:",
    options_en: ["6.4 N", "12.8 N", "32 N", "80.0 N"],
    options_hi: ["6.4 N", "12.8 N", "32 N", "80.0 N"],
    answer_en: "12.8 N",
    answer_hi: "12.8 N",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=8.00e+14 Hz and incident frequency f=8.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=8.00e+14 Hz और आपतित आवृत्ति f=8.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Cannot say",
      "Electrons just emitted (zero KE)",
      "Maximum KE",
      "No emission",
    ],
    options_hi: [
      "Cannot say",
      "Electrons just emitted (zero KE)",
      "Maximum KE",
      "No emission",
    ],
    answer_en: "Electrons just emitted (zero KE)",
    answer_hi: "Electrons just emitted (zero KE)",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "A car travels 75 km at 78 km/h and then 71 km at 37 km/h. The average speed is:",
    question_hi:
      "एक कार 78 km/h की गति से 75 km और फिर 37 km/h से 71 km चलती है। औसत वेग है:",
    options_en: ["50.7 km/h", "37 km/h", "57.5 km/h", "78 km/h"],
    options_hi: ["50.7 km/h", "37 km/h", "57.5 km/h", "78 km/h"],
    answer_en: "50.7 km/h",
    answer_hi: "50.7 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "A resistor 8 Ω connected to 20 V. Current is:",
    question_hi: "8 Ω प्रतिरोधक को 20 V से जोड़ा। धारा है:",
    options_en: ["1.25 A", "2.5 A", "0.40 A", "160 A"],
    options_hi: ["1.25 A", "2.5 A", "0.40 A", "160 A"],
    answer_en: "2.5 A",
    answer_hi: "2.5 A",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "For mass-spring (m=3 kg, k=100 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=3 kg, k=100 N/m) के लिए आवर्तकाल T है:",
    options_en: ["1.09 s", "36.28 s", "0.54 s", "0.17 s"],
    options_hi: ["1.09 s", "36.28 s", "0.54 s", "0.17 s"],
    answer_en: "1.09 s",
    answer_hi: "1.09 s",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "Projectile launched with speed 15 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "15 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["11.2 m", "0", "45.0 m", "22.5 m"],
    options_hi: ["11.2 m", "0", "45.0 m", "22.5 m"],
    answer_en: "22.5 m",
    answer_hi: "22.5 m",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en:
      "Energy difference between levels n=3 and n=5 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=3 और n=5 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["0.97 eV", "0.48 eV", "1.51 eV", "0.54 eV"],
    options_hi: ["0.97 eV", "0.48 eV", "1.51 eV", "0.54 eV"],
    answer_en: "0.97 eV",
    answer_hi: "0.97 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Faraday's law states that induced emf is proportional to:",
    question_hi:
      "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    options_en: [
      "Rate of change of magnetic flux",
      "Magnetic flux itself",
      "Square of current",
      "Resistance of coil",
    ],
    options_hi: [
      "Rate of change of magnetic flux",
      "Magnetic flux itself",
      "Square of current",
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
      "Maximum static friction for normal reaction 38 N and μ= 0.5 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=38 N, μ=0.5) है:",
    options_en: ["19.0 N", "76.0 N", "9.5 N", "38 N"],
    options_hi: ["19.0 N", "76.0 N", "9.5 N", "38 N"],
    answer_en: "19.0 N",
    answer_hi: "19.0 N",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "A current 7 A flows through wire of cross-sectional area 0.56 m². Current density J is:",
    question_hi:
      "7 A धारा 0.56 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.08 A/m²", "12.42 A/m²", "6.21 A/m²", "3.95 A/m²"],
    options_hi: ["0.08 A/m²", "12.42 A/m²", "6.21 A/m²", "3.95 A/m²"],
    answer_en: "12.42 A/m²",
    answer_hi: "12.42 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "In a process, heat supplied Q=135 J and work done W=87 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=135 J और किया गया कार्य W=87 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["135 J", "222 J", "48 J", "87 J"],
    options_hi: ["135 J", "222 J", "48 J", "87 J"],
    answer_en: "48 J",
    answer_hi: "48 J",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "Capacitors 4 μF and 2 μF in parallel. Equivalent capacitance:",
    question_hi: "4 μF और 2 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["4 μF", "6 μF", "1.33 μF", "8 μF"],
    options_hi: ["4 μF", "6 μF", "1.33 μF", "8 μF"],
    answer_en: "6 μF",
    answer_hi: "6 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Body moves in circle radius 8 m at speed 30 m/s. Centripetal acceleration is:",
    question_hi:
      "8 m त्रिज्या वाले वृत्त में 30 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["3.75 m/s²", "225.0 m/s²", "30 m/s²", "112.5 m/s²"],
    options_hi: ["3.75 m/s²", "225.0 m/s²", "30 m/s²", "112.5 m/s²"],
    answer_en: "112.5 m/s²",
    answer_hi: "112.5 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Body moves in circle radius 10 m at speed 22 m/s. Centripetal acceleration is:",
    question_hi:
      "10 m त्रिज्या वाले वृत्त में 22 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["96.8 m/s²", "22 m/s²", "48.4 m/s²", "2.2 m/s²"],
    options_hi: ["96.8 m/s²", "22 m/s²", "48.4 m/s²", "2.2 m/s²"],
    answer_en: "48.4 m/s²",
    answer_hi: "48.4 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Ideal gas: P=200000 Pa, V=0.05 m³, n=1 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=200000 Pa, V=0.05 m³, n=1 mol. तापमान है:",
    options_en: ["601.7 K", "10000.0", "2406.7 K", "1203.4 K"],
    options_hi: ["601.7 K", "10000.0", "2406.7 K", "1203.4 K"],
    answer_en: "1203.4 K",
    answer_hi: "1203.4 K",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en:
      "A thin lens with focal length 20 cm forms an image for object at -50 cm. Image distance v is:",
    question_hi:
      "20 cm फोकल लंबाई वाले लेंस के लिए वस्तु -50 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-50 cm", "33.33 cm", "-33.33 cm", "20 cm"],
    options_hi: ["-50 cm", "33.33 cm", "-33.33 cm", "20 cm"],
    answer_en: "33.33 cm",
    answer_hi: "33.33 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=4.00e+14 Hz and incident frequency f=3.20e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=4.00e+14 Hz और आपतित आवृत्ति f=3.20e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons emitted with zero KE",
      "Infinite KE",
      "No emission",
      "Electrons emitted with high KE",
    ],
    options_hi: [
      "Electrons emitted with zero KE",
      "Infinite KE",
      "No emission",
      "Electrons emitted with high KE",
    ],
    answer_en: "No emission",
    answer_hi: "No emission",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "A car travels 63 km at 80 km/h and then 66 km at 79 km/h. The average speed is:",
    question_hi:
      "एक कार 80 km/h की गति से 63 km और फिर 79 km/h से 66 km चलती है। औसत वेग है:",
    options_en: ["80 km/h", "79.5 km/h", "0", "79 km/h"],
    options_hi: ["80 km/h", "79.5 km/h", "0", "79 km/h"],
    answer_en: "79.5 km/h",
    answer_hi: "79.5 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Capacitors 5 μF and 10 μF in series. Equivalent capacitance:",
    question_hi: "5 μF और 10 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["5 μF", "15 μF", "3.33 μF", "50 μF"],
    options_hi: ["5 μF", "15 μF", "3.33 μF", "50 μF"],
    answer_en: "3.33 μF",
    answer_hi: "3.33 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "Projectile launched with speed 24 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "24 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["28.8 m", "115.2 m", "57.6 m", "0"],
    options_hi: ["28.8 m", "115.2 m", "57.6 m", "0"],
    answer_en: "57.6 m",
    answer_hi: "57.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Ideal gas: P=400000 Pa, V=0.01 m³, n=3 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=400000 Pa, V=0.01 m³, n=3 mol. तापमान है:",
    options_en: ["80.2 K", "320.9 K", "160.4 K", "4000.0"],
    options_hi: ["80.2 K", "320.9 K", "160.4 K", "4000.0"],
    answer_en: "160.4 K",
    answer_hi: "160.4 K",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "Gravitational potential energy of mass 2 kg at height 18 m (g=10) is:",
    question_hi:
      "2 kg द्रव्यमान की 18 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["30 J", "36 J", "360 J", "180.0 J"],
    options_hi: ["30 J", "36 J", "360 J", "180.0 J"],
    answer_en: "360 J",
    answer_hi: "360 J",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "Two resistors 5 Ω and 9 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 5 Ω और 9 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["3.21 Ω", "45 Ω", "14 Ω", "5 Ω"],
    options_hi: ["3.21 Ω", "45 Ω", "14 Ω", "5 Ω"],
    answer_en: "3.21 Ω",
    answer_hi: "3.21 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "Capacitors 10 μF and 10 μF in parallel. Equivalent capacitance:",
    question_hi: "10 μF और 10 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["5.00 μF", "100 μF", "10 μF", "20 μF"],
    options_hi: ["5.00 μF", "100 μF", "10 μF", "20 μF"],
    answer_en: "20 μF",
    answer_hi: "20 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Body moves in circle radius 4 m at speed 16 m/s. Centripetal acceleration is:",
    question_hi:
      "4 m त्रिज्या वाले वृत्त में 16 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["4.0 m/s²", "16 m/s²", "64.0 m/s²", "128.0 m/s²"],
    options_hi: ["4.0 m/s²", "16 m/s²", "64.0 m/s²", "128.0 m/s²"],
    answer_en: "64.0 m/s²",
    answer_hi: "64.0 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "A resistor 6 Ω connected to 10 V. Current is:",
    question_hi: "6 Ω प्रतिरोधक को 10 V से जोड़ा। धारा है:",
    options_en: ["0.60 A", "60 A", "1.67 A", "0.83 A"],
    options_hi: ["0.60 A", "60 A", "1.67 A", "0.83 A"],
    answer_en: "1.67 A",
    answer_hi: "1.67 A",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Work 360 J done in 8 s. Power is:",
    question_hi: "8 s में 360 J कार्य किया। शक्ति है:",
    options_en: ["45.0 W", "90.0 W", "360 W", "2880 W"],
    options_hi: ["45.0 W", "90.0 W", "360 W", "2880 W"],
    answer_en: "45.0 W",
    answer_hi: "45.0 W",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "Gravitational potential energy of mass 8 kg at height 40 m (g=10) is:",
    question_hi:
      "8 kg द्रव्यमान की 40 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["58 J", "1600.0 J", "320 J", "3200 J"],
    options_hi: ["58 J", "1600.0 J", "320 J", "3200 J"],
    answer_en: "3200 J",
    answer_hi: "3200 J",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "Maximum static friction for normal reaction 70 N and μ= 0.4 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=70 N, μ=0.4) है:",
    options_en: ["175.0 N", "28.0 N", "70 N", "14.0 N"],
    options_hi: ["175.0 N", "28.0 N", "70 N", "14.0 N"],
    answer_en: "28.0 N",
    answer_hi: "28.0 N",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "A thin lens with focal length 15 cm forms an image for object at -30 cm. Image distance v is:",
    question_hi:
      "15 cm फोकल लंबाई वाले लेंस के लिए वस्तु -30 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["15 cm", "-30 cm", "30.0 cm", "-30.0 cm"],
    options_hi: ["15 cm", "-30 cm", "30.0 cm", "-30.0 cm"],
    answer_en: "30.0 cm",
    answer_hi: "30.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "Maximum static friction for normal reaction 69 N and μ= 0.4 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=69 N, μ=0.4) है:",
    options_en: ["27.6 N", "13.8 N", "172.5 N", "69 N"],
    options_hi: ["27.6 N", "13.8 N", "172.5 N", "69 N"],
    answer_en: "27.6 N",
    answer_hi: "27.6 N",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["3.0e9 m/s", "299863380 m/s", "1.5e8 m/s", "3.0e7 m/s"],
    options_hi: ["3.0e9 m/s", "299863380 m/s", "1.5e8 m/s", "3.0e7 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "Two resistors 3 Ω and 4 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 3 Ω और 4 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["12 Ω", "1.71 Ω", "7 Ω", "3 Ω"],
    options_hi: ["12 Ω", "1.71 Ω", "7 Ω", "3 Ω"],
    answer_en: "1.71 Ω",
    answer_hi: "1.71 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "Maximum static friction for normal reaction 36 N and μ= 0.5 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=36 N, μ=0.5) है:",
    options_en: ["36 N", "9.0 N", "72.0 N", "18.0 N"],
    options_hi: ["36 N", "9.0 N", "72.0 N", "18.0 N"],
    answer_en: "18.0 N",
    answer_hi: "18.0 N",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "A car travels 61 km at 49 km/h and then 60 km at 64 km/h. The average speed is:",
    question_hi:
      "एक कार 49 km/h की गति से 61 km और फिर 64 km/h से 60 km चलती है। औसत वेग है:",
    options_en: ["49 km/h", "56.5 km/h", "55.4 km/h", "64 km/h"],
    options_hi: ["49 km/h", "56.5 km/h", "55.4 km/h", "64 km/h"],
    answer_en: "55.4 km/h",
    answer_hi: "55.4 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Ideal gas: P=400000 Pa, V=0.03 m³, n=3 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=400000 Pa, V=0.03 m³, n=3 mol. तापमान है:",
    options_en: ["240.7 K", "962.7 K", "12000.0", "481.3 K"],
    options_hi: ["240.7 K", "962.7 K", "12000.0", "481.3 K"],
    answer_en: "481.3 K",
    answer_hi: "481.3 K",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "A thin lens with focal length 10 cm forms an image for object at -60 cm. Image distance v is:",
    question_hi:
      "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -60 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["10 cm", "12.0 cm", "-12.0 cm", "-60 cm"],
    options_hi: ["10 cm", "12.0 cm", "-12.0 cm", "-60 cm"],
    answer_en: "12.0 cm",
    answer_hi: "12.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "Nucleus with mass number A=24. Approx total binding energy (avg 7.2 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=24 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.2 MeV/न्यूक्लिओन):",
    options_en: ["173.2 MeV", "7.2 MeV", "183.2 MeV", "86.6 MeV"],
    options_hi: ["173.2 MeV", "7.2 MeV", "183.2 MeV", "86.6 MeV"],
    answer_en: "173.2 MeV",
    answer_hi: "173.2 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "A resistor 3 Ω connected to 24 V. Current is:",
    question_hi: "3 Ω प्रतिरोधक को 24 V से जोड़ा। धारा है:",
    options_en: ["4.0 A", "0.12 A", "8.0 A", "72 A"],
    options_hi: ["4.0 A", "0.12 A", "8.0 A", "72 A"],
    answer_en: "8.0 A",
    answer_hi: "8.0 A",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Fleming's left-hand rule is used to find the direction of:",
    question_hi:
      "फ्लेमिंग का बायाँ हाथ नियम किस दिशा को ज्ञात करने के लिए उपयोग होता है?",
    options_en: [
      "Induced current",
      "Force on a current-carrying conductor",
      "Charge density",
      "Magnetic field lines",
    ],
    options_hi: [
      "Induced current",
      "Force on a current-carrying conductor",
      "Charge density",
      "Magnetic field lines",
    ],
    answer_en: "Force on a current-carrying conductor",
    answer_hi: "Force on a current-carrying conductor",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Ideal gas: P=300000 Pa, V=0.04 m³, n=3 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=300000 Pa, V=0.04 m³, n=3 mol. तापमान है:",
    options_en: ["481.3 K", "12000.0", "240.7 K", "962.7 K"],
    options_hi: ["481.3 K", "12000.0", "240.7 K", "962.7 K"],
    answer_en: "481.3 K",
    answer_hi: "481.3 K",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Capacitors 5 μF and 4 μF in parallel. Equivalent capacitance:",
    question_hi: "5 μF और 4 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["20 μF", "9 μF", "2.22 μF", "5 μF"],
    options_hi: ["20 μF", "9 μF", "2.22 μF", "5 μF"],
    answer_en: "9 μF",
    answer_hi: "9 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Maximum static friction for normal reaction 90 N and μ= 0.5 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=90 N, μ=0.5) है:",
    options_en: ["22.5 N", "180.0 N", "90 N", "45.0 N"],
    options_hi: ["22.5 N", "180.0 N", "90 N", "45.0 N"],
    answer_en: "45.0 N",
    answer_hi: "45.0 N",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "A car travels 31 km at 77 km/h and then 60 km at 79 km/h. The average speed is:",
    question_hi:
      "एक कार 77 km/h की गति से 31 km और फिर 79 km/h से 60 km चलती है। औसत वेग है:",
    options_en: ["78.3 km/h", "78.0 km/h", "79 km/h", "77 km/h"],
    options_hi: ["78.3 km/h", "78.0 km/h", "79 km/h", "77 km/h"],
    answer_en: "78.3 km/h",
    answer_hi: "78.3 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "Body moves in circle radius 3 m at speed 13 m/s. Centripetal acceleration is:",
    question_hi:
      "3 m त्रिज्या वाले वृत्त में 13 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: [
      "4.333333333333333 m/s²",
      "56.333333333333336 m/s²",
      "112.66666666666667 m/s²",
      "13 m/s²",
    ],
    options_hi: [
      "4.333333333333333 m/s²",
      "56.333333333333336 m/s²",
      "112.66666666666667 m/s²",
      "13 m/s²",
    ],
    answer_en: "56.333333333333336 m/s²",
    answer_hi: "56.333333333333336 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "A sample with 443 nuclei undergoes 4 half-lives. Remaining nuclei:",
    question_hi: "443 नाभिक वाला नमूना 4 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["110", "27", "443", "221"],
    options_hi: ["110", "27", "443", "221"],
    answer_en: "27",
    answer_hi: "27",
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
