const questions = [
  {
    num: 1,
    question_en: "Work 104 J done in 15 s. Power is:",
    question_hi: "15 s में 104 J कार्य किया। शक्ति है:",
    options_en: ["13.9 W", "1560 W", "6.9 W", "104 W"],
    options_hi: ["13.9 W", "1560 W", "6.9 W", "104 W"],
    answer_en: "6.9 W",
    answer_hi: "6.9 W",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "A sample with 718 nuclei undergoes 2 half-lives. Remaining nuclei:",
    question_hi: "718 नाभिक वाला नमूना 2 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["179", "359", "0", "718"],
    options_hi: ["179", "359", "0", "718"],
    answer_en: "179",
    answer_hi: "179",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en:
      "A wave has frequency 369 Hz and wavelength 0.5 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 369 Hz और तरंगदैर्घ्य 0.5 m है। इसका वेग है:",
    options_en: ["0.001 m/s", "184.5 m/s", "92.2 m/s", "738.0 m/s"],
    options_hi: ["0.001 m/s", "184.5 m/s", "92.2 m/s", "738.0 m/s"],
    answer_en: "184.5 m/s",
    answer_hi: "184.5 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "A current 2 A flows through wire of cross-sectional area 1.04 m². Current density J is:",
    question_hi:
      "2 A धारा 1.04 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["2.08 A/m²", "0.52 A/m²", "1.92 A/m²", "0.96 A/m²"],
    options_hi: ["2.08 A/m²", "0.52 A/m²", "1.92 A/m²", "0.96 A/m²"],
    answer_en: "1.92 A/m²",
    answer_hi: "1.92 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en:
      "In a process, heat supplied Q=240 J and work done W=24 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=240 J और किया गया कार्य W=24 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["264 J", "216 J", "24 J", "240 J"],
    options_hi: ["264 J", "216 J", "24 J", "240 J"],
    answer_en: "216 J",
    answer_hi: "216 J",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Two resistors 5 Ω and 6 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 5 Ω और 6 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["30 Ω", "11 Ω", "6 Ω", "2.73 Ω"],
    options_hi: ["30 Ω", "11 Ω", "6 Ω", "2.73 Ω"],
    answer_en: "11 Ω",
    answer_hi: "11 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "Projectile launched with speed 13 m/s at 60°. Range (g=10 m/s²) is:",
    question_hi: "13 m/s की गति से 60° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["14.6 m", "8.4 m", "16.9 m", "29.3 m"],
    options_hi: ["14.6 m", "8.4 m", "16.9 m", "29.3 m"],
    answer_en: "14.6 m",
    answer_hi: "14.6 m",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=6.00e+14 Hz and incident frequency f=7.20e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=6.00e+14 Hz और आपतित आवृत्ति f=7.20e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons emitted with KE > 0",
      "No emission",
      "Cannot say",
      "Electrons just emitted (zero KE)",
    ],
    options_hi: [
      "Electrons emitted with KE > 0",
      "No emission",
      "Cannot say",
      "Electrons just emitted (zero KE)",
    ],
    answer_en: "Electrons emitted with KE > 0",
    answer_hi: "Electrons emitted with KE > 0",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en:
      "Energy difference between levels n=3 and n=4 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=3 और n=4 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["0.66 eV", "0.85 eV", "1.51 eV", "0.33 eV"],
    options_hi: ["0.66 eV", "0.85 eV", "1.51 eV", "0.33 eV"],
    answer_en: "0.66 eV",
    answer_hi: "0.66 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "A net force acts on a mass 9 kg producing acceleration 3 m/s². The force is:",
    question_hi: "9 kg द्रव्यमान पर 3 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["12 N", "6 N", "27 N", "81 N"],
    options_hi: ["12 N", "6 N", "27 N", "81 N"],
    answer_en: "27 N",
    answer_hi: "27 N",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["1.5e8 m/s", "3.0e7 m/s", "299863380 m/s", "3.0e9 m/s"],
    options_hi: ["1.5e8 m/s", "3.0e7 m/s", "299863380 m/s", "3.0e9 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en:
      "In a process, heat supplied Q=193 J and work done W=57 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=193 J और किया गया कार्य W=57 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["250 J", "57 J", "136 J", "193 J"],
    options_hi: ["250 J", "57 J", "136 J", "193 J"],
    answer_en: "136 J",
    answer_hi: "136 J",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "A thin lens with focal length 10 cm forms an image for object at -40 cm. Image distance v is:",
    question_hi:
      "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -40 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["10 cm", "-40 cm", "13.33 cm", "-13.33 cm"],
    options_hi: ["10 cm", "-40 cm", "13.33 cm", "-13.33 cm"],
    answer_en: "13.33 cm",
    answer_hi: "13.33 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "Body moves in circle radius 8 m at speed 19 m/s. Centripetal acceleration is:",
    question_hi:
      "8 m त्रिज्या वाले वृत्त में 19 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["19 m/s²", "45.125 m/s²", "2.375 m/s²", "90.25 m/s²"],
    options_hi: ["19 m/s²", "45.125 m/s²", "2.375 m/s²", "90.25 m/s²"],
    answer_en: "45.125 m/s²",
    answer_hi: "45.125 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "Gravitational potential energy of mass 9 kg at height 27 m (g=10) is:",
    question_hi:
      "9 kg द्रव्यमान की 27 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["46 J", "243 J", "1215.0 J", "2430 J"],
    options_hi: ["46 J", "243 J", "1215.0 J", "2430 J"],
    answer_en: "2430 J",
    answer_hi: "2430 J",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "A constant force 35 N acts over displacement 10 m. Work done is:",
    question_hi:
      "35 N का नियत बल 10 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["45 J", "350 J", "3.5 J", "175.0 J"],
    options_hi: ["45 J", "350 J", "3.5 J", "175.0 J"],
    answer_en: "350 J",
    answer_hi: "350 J",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Two resistors 3 Ω and 8 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 3 Ω और 8 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["11 Ω", "24 Ω", "8 Ω", "2.18 Ω"],
    options_hi: ["11 Ω", "24 Ω", "8 Ω", "2.18 Ω"],
    answer_en: "11 Ω",
    answer_hi: "11 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "A resistor 7 Ω connected to 2 V. Current is:",
    question_hi: "7 Ω प्रतिरोधक को 2 V से जोड़ा। धारा है:",
    options_en: ["3.50 A", "0.14 A", "14 A", "0.29 A"],
    options_hi: ["3.50 A", "0.14 A", "14 A", "0.29 A"],
    answer_en: "0.29 A",
    answer_hi: "0.29 A",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Faraday's law states that induced emf is proportional to:",
    question_hi:
      "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    options_en: [
      "Magnetic flux itself",
      "Resistance of coil",
      "Square of current",
      "Rate of change of magnetic flux",
    ],
    options_hi: [
      "Magnetic flux itself",
      "Resistance of coil",
      "Square of current",
      "Rate of change of magnetic flux",
    ],
    answer_en: "Rate of change of magnetic flux",
    answer_hi: "Rate of change of magnetic flux",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en:
      "Body moves in circle radius 5 m at speed 5 m/s. Centripetal acceleration is:",
    question_hi:
      "5 m त्रिज्या वाले वृत्त में 5 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["1.0 m/s²", "5.0 m/s²", "10.0 m/s²", "5 m/s²"],
    options_hi: ["1.0 m/s²", "5.0 m/s²", "10.0 m/s²", "5 m/s²"],
    answer_en: "5.0 m/s²",
    answer_hi: "5.0 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Work 213 J done in 14 s. Power is:",
    question_hi: "14 s में 213 J कार्य किया। शक्ति है:",
    options_en: ["213 W", "30.4 W", "15.2 W", "2982 W"],
    options_hi: ["213 W", "30.4 W", "15.2 W", "2982 W"],
    answer_en: "15.2 W",
    answer_hi: "15.2 W",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "Maximum static friction for normal reaction 31 N and μ= 0.3 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=31 N, μ=0.3) है:",
    options_en: ["31 N", "9.3 N", "4.6 N", "103.3 N"],
    options_hi: ["31 N", "9.3 N", "4.6 N", "103.3 N"],
    answer_en: "9.3 N",
    answer_hi: "9.3 N",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Capacitors 10 μF and 2 μF in series. Equivalent capacitance:",
    question_hi: "10 μF और 2 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["12 μF", "20 μF", "2 μF", "1.67 μF"],
    options_hi: ["12 μF", "20 μF", "2 μF", "1.67 μF"],
    answer_en: "1.67 μF",
    answer_hi: "1.67 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Work 188 J done in 7 s. Power is:",
    question_hi: "7 s में 188 J कार्य किया। शक्ति है:",
    options_en: ["188 W", "1316 W", "53.7 W", "26.9 W"],
    options_hi: ["188 W", "1316 W", "53.7 W", "26.9 W"],
    answer_en: "26.9 W",
    answer_hi: "26.9 W",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "For mass-spring (m=4 kg, k=100 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=4 kg, k=100 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.2 s", "31.42 s", "0.63 s", "1.26 s"],
    options_hi: ["0.2 s", "31.42 s", "0.63 s", "1.26 s"],
    answer_en: "1.26 s",
    answer_hi: "1.26 s",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "A net force acts on a mass 8 kg producing acceleration 4 m/s². The force is:",
    question_hi: "8 kg द्रव्यमान पर 4 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["32 N", "12 N", "128 N", "4 N"],
    options_hi: ["32 N", "12 N", "128 N", "4 N"],
    answer_en: "32 N",
    answer_hi: "32 N",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "A wave has frequency 252 Hz and wavelength 2.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 252 Hz और तरंगदैर्घ्य 2.0 m है। इसका वेग है:",
    options_en: ["252.0 m/s", "0.008 m/s", "126.0 m/s", "504.0 m/s"],
    options_hi: ["252.0 m/s", "0.008 m/s", "126.0 m/s", "504.0 m/s"],
    answer_en: "504.0 m/s",
    answer_hi: "504.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "Energy difference between levels n=3 and n=6 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=3 और n=6 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["1.51 eV", "0.57 eV", "0.38 eV", "1.13 eV"],
    options_hi: ["1.51 eV", "0.57 eV", "0.38 eV", "1.13 eV"],
    answer_en: "1.13 eV",
    answer_hi: "1.13 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "A constant force 24 N acts over displacement 7 m. Work done is:",
    question_hi:
      "24 N का नियत बल 7 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["3.4 J", "168 J", "31 J", "84.0 J"],
    options_hi: ["3.4 J", "168 J", "31 J", "84.0 J"],
    answer_en: "168 J",
    answer_hi: "168 J",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Work 577 J done in 11 s. Power is:",
    question_hi: "11 s में 577 J कार्य किया। शक्ति है:",
    options_en: ["577 W", "52.5 W", "104.9 W", "6347 W"],
    options_hi: ["577 W", "52.5 W", "104.9 W", "6347 W"],
    answer_en: "52.5 W",
    answer_hi: "52.5 W",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "In a process, heat supplied Q=145 J and work done W=12 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=145 J और किया गया कार्य W=12 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["133 J", "145 J", "12 J", "157 J"],
    options_hi: ["133 J", "145 J", "12 J", "157 J"],
    answer_en: "133 J",
    answer_hi: "133 J",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "Time to fall freely from height 33 m (g=10 m/s²) is:",
    question_hi: "33 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.28 s", "2.57 s", "5.14 s", "1.82 s"],
    options_hi: ["1.28 s", "2.57 s", "5.14 s", "1.82 s"],
    answer_en: "2.57 s",
    answer_hi: "2.57 s",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "Maximum static friction for normal reaction 22 N and μ= 0.3 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=22 N, μ=0.3) है:",
    options_en: ["73.3 N", "3.3 N", "6.6 N", "22 N"],
    options_hi: ["73.3 N", "3.3 N", "6.6 N", "22 N"],
    answer_en: "6.6 N",
    answer_hi: "6.6 N",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "A car travels 64 km at 61 km/h and then 65 km at 54 km/h. The average speed is:",
    question_hi:
      "एक कार 61 km/h की गति से 64 km और फिर 54 km/h से 65 km चलती है। औसत वेग है:",
    options_en: ["57.5 km/h", "57.3 km/h", "54 km/h", "61 km/h"],
    options_hi: ["57.5 km/h", "57.3 km/h", "54 km/h", "61 km/h"],
    answer_en: "57.3 km/h",
    answer_hi: "57.3 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Work 733 J done in 17 s. Power is:",
    question_hi: "17 s में 733 J कार्य किया। शक्ति है:",
    options_en: ["12461 W", "43.1 W", "733 W", "86.2 W"],
    options_hi: ["12461 W", "43.1 W", "733 W", "86.2 W"],
    answer_en: "43.1 W",
    answer_hi: "43.1 W",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Ideal gas: P=300000 Pa, V=0.03 m³, n=1 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=300000 Pa, V=0.03 m³, n=1 mol. तापमान है:",
    options_en: ["1083.0 K", "9000.0", "2166.1 K", "541.5 K"],
    options_hi: ["1083.0 K", "9000.0", "2166.1 K", "541.5 K"],
    answer_en: "1083.0 K",
    answer_hi: "1083.0 K",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "For mass-spring (m=2 kg, k=200 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=2 kg, k=200 N/m) के लिए आवर्तकाल T है:",
    options_en: ["62.83 s", "0.31 s", "0.1 s", "0.63 s"],
    options_hi: ["62.83 s", "0.31 s", "0.1 s", "0.63 s"],
    answer_en: "0.63 s",
    answer_hi: "0.63 s",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "A current 3 A flows through wire of cross-sectional area 1.91 m². Current density J is:",
    question_hi:
      "3 A धारा 1.91 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["1.57 A/m²", "0.78 A/m²", "0.64 A/m²", "5.73 A/m²"],
    options_hi: ["1.57 A/m²", "0.78 A/m²", "0.64 A/m²", "5.73 A/m²"],
    answer_en: "1.57 A/m²",
    answer_hi: "1.57 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "A current 10 A flows through wire of cross-sectional area 0.86 m². Current density J is:",
    question_hi:
      "10 A धारा 0.86 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["11.61 A/m²", "8.61 A/m²", "5.81 A/m²", "0.09 A/m²"],
    options_hi: ["11.61 A/m²", "8.61 A/m²", "5.81 A/m²", "0.09 A/m²"],
    answer_en: "11.61 A/m²",
    answer_hi: "11.61 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en:
      "Projectile launched with speed 12 m/s at 45°. Range (g=10 m/s²) is:",
    question_hi: "12 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["28.8 m", "7.2 m", "14.4 m", "0"],
    options_hi: ["28.8 m", "7.2 m", "14.4 m", "0"],
    answer_en: "14.4 m",
    answer_hi: "14.4 m",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "A wave has frequency 221 Hz and wavelength 0.2 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 221 Hz और तरंगदैर्घ्य 0.2 m है। इसका वेग है:",
    options_en: ["0.001 m/s", "44.2 m/s", "22.1 m/s", "1105.0 m/s"],
    options_hi: ["0.001 m/s", "44.2 m/s", "22.1 m/s", "1105.0 m/s"],
    answer_en: "44.2 m/s",
    answer_hi: "44.2 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Fleming's left-hand rule is used to find the direction of:",
    question_hi:
      "फ्लेमिंग का बायाँ हाथ नियम किस दिशा को ज्ञात करने के लिए उपयोग होता है?",
    options_en: [
      "Charge density",
      "Force on a current-carrying conductor",
      "Magnetic field lines",
      "Induced current",
    ],
    options_hi: [
      "Charge density",
      "Force on a current-carrying conductor",
      "Magnetic field lines",
      "Induced current",
    ],
    answer_en: "Force on a current-carrying conductor",
    answer_hi: "Force on a current-carrying conductor",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "Nucleus with mass number A=15. Approx total binding energy (avg 7.5 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=15 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.5 MeV/न्यूक्लिओन):",
    options_en: ["56.5 MeV", "123.0 MeV", "113.0 MeV", "7.5 MeV"],
    options_hi: ["56.5 MeV", "123.0 MeV", "113.0 MeV", "7.5 MeV"],
    answer_en: "113.0 MeV",
    answer_hi: "113.0 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en:
      "In a process, heat supplied Q=222 J and work done W=26 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=222 J और किया गया कार्य W=26 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["26 J", "222 J", "248 J", "196 J"],
    options_hi: ["26 J", "222 J", "248 J", "196 J"],
    answer_en: "196 J",
    answer_hi: "196 J",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "Capacitors 2 μF and 5 μF in parallel. Equivalent capacitance:",
    question_hi: "2 μF और 5 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["10 μF", "5 μF", "7 μF", "1.43 μF"],
    options_hi: ["10 μF", "5 μF", "7 μF", "1.43 μF"],
    answer_en: "7 μF",
    answer_hi: "7 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Gravitational potential energy of mass 16 kg at height 6 m (g=10) is:",
    question_hi:
      "16 kg द्रव्यमान की 6 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["960 J", "96 J", "480.0 J", "32 J"],
    options_hi: ["960 J", "96 J", "480.0 J", "32 J"],
    answer_en: "960 J",
    answer_hi: "960 J",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Nucleus with mass number A=7. Approx total binding energy (avg 7.3 MeV/nucleon):",
    question_hi:
      "द्रव्यमान संख्या A=7 वाले नाभिक की कुल बंधन ऊर्जा (औसत 7.3 MeV/न्यूक्लिओन):",
    options_en: ["51.2 MeV", "25.6 MeV", "7.3 MeV", "61.2 MeV"],
    options_hi: ["51.2 MeV", "25.6 MeV", "7.3 MeV", "61.2 MeV"],
    answer_en: "51.2 MeV",
    answer_hi: "51.2 MeV",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "A constant force 48 N acts over displacement 6 m. Work done is:",
    question_hi:
      "48 N का नियत बल 6 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["144.0 J", "288 J", "54 J", "8.0 J"],
    options_hi: ["144.0 J", "288 J", "54 J", "8.0 J"],
    answer_en: "288 J",
    answer_hi: "288 J",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Work 783 J done in 13 s. Power is:",
    question_hi: "13 s में 783 J कार्य किया। शक्ति है:",
    options_en: ["783 W", "60.2 W", "120.5 W", "10179 W"],
    options_hi: ["783 W", "60.2 W", "120.5 W", "10179 W"],
    answer_en: "60.2 W",
    answer_hi: "60.2 W",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "A resistor 12 Ω connected to 4 V. Current is:",
    question_hi: "12 Ω प्रतिरोधक को 4 V से जोड़ा। धारा है:",
    options_en: ["48 A", "0.33 A", "3.00 A", "0.17 A"],
    options_hi: ["48 A", "0.33 A", "3.00 A", "0.17 A"],
    answer_en: "0.33 A",
    answer_hi: "0.33 A",
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
