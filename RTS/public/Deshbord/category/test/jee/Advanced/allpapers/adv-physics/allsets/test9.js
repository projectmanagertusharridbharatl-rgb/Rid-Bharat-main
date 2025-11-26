const questions = [
  {
    num: 1,
    question_en:
      "A constant force 29 N acts over displacement 5 m. Work done is:",
    question_hi:
      "29 N का नियत बल 5 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["145 J", "72.5 J", "5.8 J", "34 J"],
    options_hi: ["145 J", "72.5 J", "5.8 J", "34 J"],
    answer_en: "145 J",
    answer_hi: "145 J",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "Gravitational potential energy of mass 5 kg at height 46 m (g=10) is:",
    question_hi:
      "5 kg द्रव्यमान की 46 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["230 J", "61 J", "2300 J", "1150.0 J"],
    options_hi: ["230 J", "61 J", "2300 J", "1150.0 J"],
    answer_en: "2300 J",
    answer_hi: "2300 J",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
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
    num: 4,
    question_en:
      "Body moves in circle radius 5 m at speed 16 m/s. Centripetal acceleration is:",
    question_hi:
      "5 m त्रिज्या वाले वृत्त में 16 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["102.4 m/s²", "51.2 m/s²", "16 m/s²", "3.2 m/s²"],
    options_hi: ["102.4 m/s²", "51.2 m/s²", "16 m/s²", "3.2 m/s²"],
    answer_en: "51.2 m/s²",
    answer_hi: "51.2 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Dimension of energy is:",
    question_hi: "ऊर्जा का विमीय सूत्र क्या है?",
    options_en: ["[L]", "[M L^2 T^-2]", "[T]", "[M]"],
    options_hi: ["[L]", "[M L^2 T^-2]", "[T]", "[M]"],
    answer_en: "[M L^2 T^-2]",
    answer_hi: "[M L^2 T^-2]",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "Gravitational potential energy of mass 4 kg at height 3 m (g=10) is:",
    question_hi:
      "4 kg द्रव्यमान की 3 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["17 J", "60.0 J", "120 J", "12 J"],
    options_hi: ["17 J", "60.0 J", "120 J", "12 J"],
    answer_en: "120 J",
    answer_hi: "120 J",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Ideal gas: P=400000 Pa, V=0.01 m³, n=2 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=400000 Pa, V=0.01 m³, n=2 mol. तापमान है:",
    options_en: ["481.3 K", "120.3 K", "240.7 K", "4000.0"],
    options_hi: ["481.3 K", "120.3 K", "240.7 K", "4000.0"],
    answer_en: "240.7 K",
    answer_hi: "240.7 K",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "In a process, heat supplied Q=276 J and work done W=73 J. Change in internal energy ΔU is:",
    question_hi:
      "एक प्रक्रिया में, दी गई ऊष्मा Q=276 J और किया गया कार्य W=73 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    options_en: ["73 J", "349 J", "276 J", "203 J"],
    options_hi: ["73 J", "349 J", "276 J", "203 J"],
    answer_en: "203 J",
    answer_hi: "203 J",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Dimension of force is:",
    question_hi: "बल का विमीय सूत्र क्या है?",
    options_en: ["[T]", "[L]", "[M]", "[M L T^-2]"],
    options_hi: ["[T]", "[L]", "[M]", "[M L T^-2]"],
    answer_en: "[M L T^-2]",
    answer_hi: "[M L T^-2]",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
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
    num: 11,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=5.00e+14 Hz and incident frequency f=5.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=5.00e+14 Hz और आपतित आवृत्ति f=5.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons just emitted (zero KE)",
      "Maximum KE",
      "Cannot say",
      "No emission",
    ],
    options_hi: [
      "Electrons just emitted (zero KE)",
      "Maximum KE",
      "Cannot say",
      "No emission",
    ],
    answer_en: "Electrons just emitted (zero KE)",
    answer_hi: "Electrons just emitted (zero KE)",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "A resistor 6 Ω connected to 19 V. Current is:",
    question_hi: "6 Ω प्रतिरोधक को 19 V से जोड़ा। धारा है:",
    options_en: ["114 A", "0.32 A", "1.58 A", "3.17 A"],
    options_hi: ["114 A", "0.32 A", "1.58 A", "3.17 A"],
    answer_en: "3.17 A",
    answer_hi: "3.17 A",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Capacitors 4 μF and 4 μF in series. Equivalent capacitance:",
    question_hi: "4 μF और 4 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["16 μF", "2.0 μF", "8 μF", "4 μF"],
    options_hi: ["16 μF", "2.0 μF", "8 μF", "4 μF"],
    answer_en: "2.0 μF",
    answer_hi: "2.0 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "A thin lens with focal length 15 cm forms an image for object at -40 cm. Image distance v is:",
    question_hi:
      "15 cm फोकल लंबाई वाले लेंस के लिए वस्तु -40 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["-40 cm", "15 cm", "-24.0 cm", "24.0 cm"],
    options_hi: ["-40 cm", "15 cm", "-24.0 cm", "24.0 cm"],
    answer_en: "24.0 cm",
    answer_hi: "24.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Ideal gas: P=100000 Pa, V=0.02 m³, n=1 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=100000 Pa, V=0.02 m³, n=1 mol. तापमान है:",
    options_en: ["240.7 K", "2000.0", "481.3 K", "120.3 K"],
    options_hi: ["240.7 K", "2000.0", "481.3 K", "120.3 K"],
    answer_en: "240.7 K",
    answer_hi: "240.7 K",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "A constant force 12 N acts over displacement 4 m. Work done is:",
    question_hi:
      "12 N का नियत बल 4 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["24.0 J", "3.0 J", "48 J", "16 J"],
    options_hi: ["24.0 J", "3.0 J", "48 J", "16 J"],
    answer_en: "48 J",
    answer_hi: "48 J",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "A sample with 199 nuclei undergoes 3 half-lives. Remaining nuclei:",
    question_hi: "199 नाभिक वाला नमूना 3 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["49", "199", "24", "99"],
    options_hi: ["49", "199", "24", "99"],
    answer_en: "24",
    answer_hi: "24",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Gravitational potential energy of mass 7 kg at height 15 m (g=10) is:",
    question_hi:
      "7 kg द्रव्यमान की 15 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["105 J", "525.0 J", "32 J", "1050 J"],
    options_hi: ["105 J", "525.0 J", "32 J", "1050 J"],
    answer_en: "1050 J",
    answer_hi: "1050 J",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Ideal gas: P=300000 Pa, V=0.03 m³, n=2 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=300000 Pa, V=0.03 m³, n=2 mol. तापमान है:",
    options_en: ["9000.0", "270.8 K", "1083.0 K", "541.5 K"],
    options_hi: ["9000.0", "270.8 K", "1083.0 K", "541.5 K"],
    answer_en: "541.5 K",
    answer_hi: "541.5 K",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Time to fall freely from height 38 m (g=10 m/s²) is:",
    question_hi: "38 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["1.38 s", "1.95 s", "5.51 s", "2.76 s"],
    options_hi: ["1.38 s", "1.95 s", "5.51 s", "2.76 s"],
    answer_en: "2.76 s",
    answer_hi: "2.76 s",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Two resistors 4 Ω and 5 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 4 Ω और 5 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["5 Ω", "9 Ω", "20 Ω", "2.22 Ω"],
    options_hi: ["5 Ω", "9 Ω", "20 Ω", "2.22 Ω"],
    answer_en: "9 Ω",
    answer_hi: "9 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["3.0e7 m/s", "3.0e9 m/s", "299863380 m/s", "1.5e8 m/s"],
    options_hi: ["3.0e7 m/s", "3.0e9 m/s", "299863380 m/s", "1.5e8 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "A current 4 A flows through wire of cross-sectional area 0.61 m². Current density J is:",
    question_hi:
      "4 A धारा 0.61 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.15 A/m²", "2.43 A/m²", "3.3 A/m²", "6.59 A/m²"],
    options_hi: ["0.15 A/m²", "2.43 A/m²", "3.3 A/m²", "6.59 A/m²"],
    answer_en: "6.59 A/m²",
    answer_hi: "6.59 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "A current 10 A flows through wire of cross-sectional area 0.58 m². Current density J is:",
    question_hi:
      "10 A धारा 0.58 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["0.06 A/m²", "5.81 A/m²", "17.2 A/m²", "8.6 A/m²"],
    options_hi: ["0.06 A/m²", "5.81 A/m²", "17.2 A/m²", "8.6 A/m²"],
    answer_en: "17.2 A/m²",
    answer_hi: "17.2 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "A constant force 45 N acts over displacement 5 m. Work done is:",
    question_hi:
      "45 N का नियत बल 5 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["225 J", "50 J", "112.5 J", "9.0 J"],
    options_hi: ["225 J", "50 J", "112.5 J", "9.0 J"],
    answer_en: "225 J",
    answer_hi: "225 J",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "A constant force 26 N acts over displacement 7 m. Work done is:",
    question_hi:
      "26 N का नियत बल 7 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["3.7 J", "182 J", "33 J", "91.0 J"],
    options_hi: ["3.7 J", "182 J", "33 J", "91.0 J"],
    answer_en: "182 J",
    answer_hi: "182 J",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=8.00e+14 Hz and incident frequency f=9.60e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=8.00e+14 Hz और आपतित आवृत्ति f=9.60e+14 Hz होने पर परिणाम है:",
    options_en: [
      "No emission",
      "Electrons just emitted (zero KE)",
      "Cannot say",
      "Electrons emitted with KE > 0",
    ],
    options_hi: [
      "No emission",
      "Electrons just emitted (zero KE)",
      "Cannot say",
      "Electrons emitted with KE > 0",
    ],
    answer_en: "Electrons emitted with KE > 0",
    answer_hi: "Electrons emitted with KE > 0",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "Capacitors 10 μF and 10 μF in series. Equivalent capacitance:",
    question_hi: "10 μF और 10 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["5.0 μF", "100 μF", "20 μF", "10 μF"],
    options_hi: ["5.0 μF", "100 μF", "20 μF", "10 μF"],
    answer_en: "5.0 μF",
    answer_hi: "5.0 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Time to fall freely from height 49 m (g=10 m/s²) is:",
    question_hi: "49 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    options_en: ["2.21 s", "6.26 s", "3.13 s", "1.57 s"],
    options_hi: ["2.21 s", "6.26 s", "3.13 s", "1.57 s"],
    answer_en: "3.13 s",
    answer_hi: "3.13 s",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "Capacitors 10 μF and 5 μF in parallel. Equivalent capacitance:",
    question_hi: "10 μF और 5 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["50 μF", "15 μF", "10 μF", "3.33 μF"],
    options_hi: ["50 μF", "15 μF", "10 μF", "3.33 μF"],
    answer_en: "15 μF",
    answer_hi: "15 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "A current 10 A flows through wire of cross-sectional area 1.94 m². Current density J is:",
    question_hi:
      "10 A धारा 1.94 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["2.58 A/m²", "19.39 A/m²", "5.16 A/m²", "0.19 A/m²"],
    options_hi: ["2.58 A/m²", "19.39 A/m²", "5.16 A/m²", "0.19 A/m²"],
    answer_en: "5.16 A/m²",
    answer_hi: "5.16 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "A net force acts on a mass 10 kg producing acceleration 7 m/s². The force is:",
    question_hi: "10 kg द्रव्यमान पर 7 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["17 N", "3 N", "70 N", "490 N"],
    options_hi: ["17 N", "3 N", "70 N", "490 N"],
    answer_en: "70 N",
    answer_hi: "70 N",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "A sample with 762 nuclei undergoes 1 half-lives. Remaining nuclei:",
    question_hi: "762 नाभिक वाला नमूना 1 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["762", "0", "190", "381"],
    options_hi: ["762", "0", "190", "381"],
    answer_en: "381",
    answer_hi: "381",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "A car travels 33 km at 69 km/h and then 42 km at 56 km/h. The average speed is:",
    question_hi:
      "एक कार 69 km/h की गति से 33 km और फिर 56 km/h से 42 km चलती है। औसत वेग है:",
    options_en: ["61.1 km/h", "56 km/h", "69 km/h", "62.5 km/h"],
    options_hi: ["61.1 km/h", "56 km/h", "69 km/h", "62.5 km/h"],
    answer_en: "61.1 km/h",
    answer_hi: "61.1 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Capacitors 5 μF and 4 μF in series. Equivalent capacitance:",
    question_hi: "5 μF और 4 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["4 μF", "20 μF", "2.22 μF", "9 μF"],
    options_hi: ["4 μF", "20 μF", "2.22 μF", "9 μF"],
    answer_en: "2.22 μF",
    answer_hi: "2.22 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "Maximum static friction for normal reaction 70 N and μ= 0.2 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=70 N, μ=0.2) है:",
    options_en: ["14.0 N", "70 N", "7.0 N", "350.0 N"],
    options_hi: ["14.0 N", "70 N", "7.0 N", "350.0 N"],
    answer_en: "14.0 N",
    answer_hi: "14.0 N",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Capacitors 10 μF and 5 μF in series. Equivalent capacitance:",
    question_hi: "10 μF और 5 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    options_en: ["3.33 μF", "5 μF", "15 μF", "50 μF"],
    options_hi: ["3.33 μF", "5 μF", "15 μF", "50 μF"],
    answer_en: "3.33 μF",
    answer_hi: "3.33 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "A wave has frequency 144 Hz and wavelength 1.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 144 Hz और तरंगदैर्घ्य 1.0 m है। इसका वेग है:",
    options_en: ["72.0 m/s", "144.0 m/s", "0", "0.007 m/s"],
    options_hi: ["72.0 m/s", "144.0 m/s", "0", "0.007 m/s"],
    answer_en: "144.0 m/s",
    answer_hi: "144.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Faraday's law states that induced emf is proportional to:",
    question_hi:
      "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    options_en: [
      "Square of current",
      "Rate of change of magnetic flux",
      "Resistance of coil",
      "Magnetic flux itself",
    ],
    options_hi: [
      "Square of current",
      "Rate of change of magnetic flux",
      "Resistance of coil",
      "Magnetic flux itself",
    ],
    answer_en: "Rate of change of magnetic flux",
    answer_hi: "Rate of change of magnetic flux",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Work 614 J done in 14 s. Power is:",
    question_hi: "14 s में 614 J कार्य किया। शक्ति है:",
    options_en: ["8596 W", "43.9 W", "87.7 W", "614 W"],
    options_hi: ["8596 W", "43.9 W", "87.7 W", "614 W"],
    answer_en: "43.9 W",
    answer_hi: "43.9 W",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "Energy difference between levels n=2 and n=4 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=2 और n=4 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["1.27 eV", "2.55 eV", "3.4 eV", "0.85 eV"],
    options_hi: ["1.27 eV", "2.55 eV", "3.4 eV", "0.85 eV"],
    answer_en: "2.55 eV",
    answer_hi: "2.55 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=6.00e+14 Hz and incident frequency f=6.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=6.00e+14 Hz और आपतित आवृत्ति f=6.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Electrons just emitted (zero KE)",
      "Maximum KE",
      "Cannot say",
      "No emission",
    ],
    options_hi: [
      "Electrons just emitted (zero KE)",
      "Maximum KE",
      "Cannot say",
      "No emission",
    ],
    answer_en: "Electrons just emitted (zero KE)",
    answer_hi: "Electrons just emitted (zero KE)",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "Projectile launched with speed 28 m/s at 60°. Range (g=10 m/s²) is:",
    question_hi: "28 m/s की गति से 60° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["135.8 m", "67.9 m", "39.2 m", "78.4 m"],
    options_hi: ["135.8 m", "67.9 m", "39.2 m", "78.4 m"],
    answer_en: "67.9 m",
    answer_hi: "67.9 m",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Dimension of velocity is:",
    question_hi: "वेग का विमीय सूत्र क्या है?",
    options_en: ["[T]", "[L]", "[M]", "[L T^-1]"],
    options_hi: ["[T]", "[L]", "[M]", "[L T^-1]"],
    answer_en: "[L T^-1]",
    answer_hi: "[L T^-1]",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "A net force acts on a mass 3 kg producing acceleration 7 m/s². The force is:",
    question_hi: "3 kg द्रव्यमान पर 7 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["147 N", "10 N", "21 N", "-4 N"],
    options_hi: ["147 N", "10 N", "21 N", "-4 N"],
    answer_en: "21 N",
    answer_hi: "21 N",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=7.00e+14 Hz and incident frequency f=8.40e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=7.00e+14 Hz और आपतित आवृत्ति f=8.40e+14 Hz होने पर परिणाम है:",
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
    num: 47,
    question_en:
      "Two resistors 8 Ω and 8 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 8 Ω और 8 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["4.0 Ω", "8 Ω", "16 Ω", "64 Ω"],
    options_hi: ["4.0 Ω", "8 Ω", "16 Ω", "64 Ω"],
    answer_en: "4.0 Ω",
    answer_hi: "4.0 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "Body moves in circle radius 3 m at speed 12 m/s. Centripetal acceleration is:",
    question_hi:
      "3 m त्रिज्या वाले वृत्त में 12 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["4.0 m/s²", "48.0 m/s²", "96.0 m/s²", "12 m/s²"],
    options_hi: ["4.0 m/s²", "48.0 m/s²", "96.0 m/s²", "12 m/s²"],
    answer_en: "48.0 m/s²",
    answer_hi: "48.0 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "A net force acts on a mass 10 kg producing acceleration 2 m/s². The force is:",
    question_hi: "10 kg द्रव्यमान पर 2 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["12 N", "8 N", "40 N", "20 N"],
    options_hi: ["12 N", "8 N", "40 N", "20 N"],
    answer_en: "20 N",
    answer_hi: "20 N",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "A current 2 A flows through wire of cross-sectional area 0.99 m². Current density J is:",
    question_hi:
      "2 A धारा 0.99 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["1.97 A/m²", "2.03 A/m²", "0.49 A/m²", "1.01 A/m²"],
    options_hi: ["1.97 A/m²", "2.03 A/m²", "0.49 A/m²", "1.01 A/m²"],
    answer_en: "2.03 A/m²",
    answer_hi: "2.03 A/m²",
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
