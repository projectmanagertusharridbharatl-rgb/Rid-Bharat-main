const questions = [
  {
    "num": 1,
    "question_en": "A thin lens with focal length 20 cm forms an image for object at -60 cm. Image distance v is:",
    "question_hi": "20 cm फोकल लंबाई वाले लेंस के लिए वस्तु -60 cm पर है। प्रतिबिंब दूरी v है:",
    "options_en": [
      "-60 cm",
      "30.0 cm",
      "20 cm",
      "-30.0 cm"
    ],
    "options_hi": [
      "-60 cm",
      "30.0 cm",
      "20 cm",
      "-30.0 cm"
    ],
    "answer_en": "30.0 cm",
    "answer_hi": "30.0 cm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Time to fall freely from height 39 m (g=10 m/s²) is:",
    "question_hi": "39 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    "options_en": [
      "5.59 s",
      "1.97 s",
      "2.79 s",
      "1.4 s"
    ],
    "options_hi": [
      "5.59 s",
      "1.97 s",
      "2.79 s",
      "1.4 s"
    ],
    "answer_en": "2.79 s",
    "answer_hi": "2.79 s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Work 755 J done in 4 s. Power is:",
    "question_hi": "4 s में 755 J कार्य किया। शक्ति है:",
    "options_en": [
      "188.8 W",
      "377.5 W",
      "3020 W",
      "755 W"
    ],
    "options_hi": [
      "188.8 W",
      "377.5 W",
      "3020 W",
      "755 W"
    ],
    "answer_en": "188.8 W",
    "answer_hi": "188.8 W",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "For mass-spring (m=3 kg, k=100 N/m), time period T is:",
    "question_hi": "द्रव्यमान-स्प्रिंग (m=3 kg, k=100 N/m) के लिए आवर्तकाल T है:",
    "options_en": [
      "0.54 s",
      "1.09 s",
      "36.28 s",
      "0.17 s"
    ],
    "options_hi": [
      "0.54 s",
      "1.09 s",
      "36.28 s",
      "0.17 s"
    ],
    "answer_en": "1.09 s",
    "answer_hi": "1.09 s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Capacitors 2 μF and 2 μF in series. Equivalent capacitance:",
    "question_hi": "2 μF और 2 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    "options_en": [
      "2 μF",
      "4 μF",
      "1.0 μF",
      "4 μF"
    ],
    "options_hi": [
      "2 μF",
      "4 μF",
      "1.0 μF",
      "4 μF"
    ],
    "answer_en": "1.0 μF",
    "answer_hi": "1.0 μF",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Body moves in circle radius 1 m at speed 6 m/s. Centripetal acceleration is:",
    "question_hi": "1 m त्रिज्या वाले वृत्त में 6 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    "options_en": [
      "72.0 m/s²",
      "6 m/s²",
      "36.0 m/s²",
      "6.0 m/s²"
    ],
    "options_hi": [
      "72.0 m/s²",
      "6 m/s²",
      "36.0 m/s²",
      "6.0 m/s²"
    ],
    "answer_en": "36.0 m/s²",
    "answer_hi": "36.0 m/s²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Body moves in circle radius 10 m at speed 27 m/s. Centripetal acceleration is:",
    "question_hi": "10 m त्रिज्या वाले वृत्त में 27 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    "options_en": [
      "27 m/s²",
      "72.9 m/s²",
      "145.8 m/s²",
      "2.7 m/s²"
    ],
    "options_hi": [
      "27 m/s²",
      "72.9 m/s²",
      "145.8 m/s²",
      "2.7 m/s²"
    ],
    "answer_en": "72.9 m/s²",
    "answer_hi": "72.9 m/s²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Two resistors 2 Ω and 7 Ω in series. Equivalent resistance:",
    "question_hi": "दो प्रतिरोध 2 Ω और 7 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    "options_en": [
      "7 Ω",
      "14 Ω",
      "1.56 Ω",
      "9 Ω"
    ],
    "options_hi": [
      "7 Ω",
      "14 Ω",
      "1.56 Ω",
      "9 Ω"
    ],
    "answer_en": "9 Ω",
    "answer_hi": "9 Ω",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Capacitors 5 μF and 10 μF in parallel. Equivalent capacitance:",
    "question_hi": "5 μF और 10 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    "options_en": [
      "50 μF",
      "10 μF",
      "3.33 μF",
      "15 μF"
    ],
    "options_hi": [
      "50 μF",
      "10 μF",
      "3.33 μF",
      "15 μF"
    ],
    "answer_en": "15 μF",
    "answer_hi": "15 μF",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Energy difference between levels n=2 and n=4 in H-atom (ΔE) is:",
    "question_hi": "हाइड्रोजन परमाणु में n=2 और n=4 के बीच ऊर्जा अंतर (ΔE) है:",
    "options_en": [
      "2.55 eV",
      "1.27 eV",
      "0.85 eV",
      "3.4 eV"
    ],
    "options_hi": [
      "2.55 eV",
      "1.27 eV",
      "0.85 eV",
      "3.4 eV"
    ],
    "answer_en": "2.55 eV",
    "answer_hi": "2.55 eV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "A net force acts on a mass 8 kg producing acceleration 2 m/s². The force is:",
    "question_hi": "8 kg द्रव्यमान पर 2 m/s² त्वरण उत्पन्न करने वाला बल है:",
    "options_en": [
      "10 N",
      "16 N",
      "32 N",
      "6 N"
    ],
    "options_hi": [
      "10 N",
      "16 N",
      "32 N",
      "6 N"
    ],
    "answer_en": "16 N",
    "answer_hi": "16 N",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Two resistors 4 Ω and 7 Ω in series. Equivalent resistance:",
    "question_hi": "दो प्रतिरोध 4 Ω और 7 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    "options_en": [
      "11 Ω",
      "7 Ω",
      "2.55 Ω",
      "28 Ω"
    ],
    "options_hi": [
      "11 Ω",
      "7 Ω",
      "2.55 Ω",
      "28 Ω"
    ],
    "answer_en": "11 Ω",
    "answer_hi": "11 Ω",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "A constant force 10 N acts over displacement 3 m. Work done is:",
    "question_hi": "10 N का नियत बल 3 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    "options_en": [
      "3.3 J",
      "15.0 J",
      "13 J",
      "30 J"
    ],
    "options_hi": [
      "3.3 J",
      "15.0 J",
      "13 J",
      "30 J"
    ],
    "answer_en": "30 J",
    "answer_hi": "30 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Gravitational potential energy of mass 4 kg at height 46 m (g=10) is:",
    "question_hi": "4 kg द्रव्यमान की 46 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    "options_en": [
      "1840 J",
      "184 J",
      "60 J",
      "920.0 J"
    ],
    "options_hi": [
      "1840 J",
      "184 J",
      "60 J",
      "920.0 J"
    ],
    "answer_en": "1840 J",
    "answer_hi": "1840 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Faraday's law states that induced emf is proportional to:",
    "question_hi": "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    "options_en": [
      "Square of current",
      "Resistance of coil",
      "Rate of change of magnetic flux",
      "Magnetic flux itself"
    ],
    "options_hi": [
      "Square of current",
      "Resistance of coil",
      "Rate of change of magnetic flux",
      "Magnetic flux itself"
    ],
    "answer_en": "Rate of change of magnetic flux",
    "answer_hi": "Rate of change of magnetic flux",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Gravitational potential energy of mass 16 kg at height 27 m (g=10) is:",
    "question_hi": "16 kg द्रव्यमान की 27 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    "options_en": [
      "4320 J",
      "53 J",
      "432 J",
      "2160.0 J"
    ],
    "options_hi": [
      "4320 J",
      "53 J",
      "432 J",
      "2160.0 J"
    ],
    "answer_en": "4320 J",
    "answer_hi": "4320 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Work 364 J done in 3 s. Power is:",
    "question_hi": "3 s में 364 J कार्य किया। शक्ति है:",
    "options_en": [
      "121.3 W",
      "364 W",
      "1092 W",
      "242.7 W"
    ],
    "options_hi": [
      "121.3 W",
      "364 W",
      "1092 W",
      "242.7 W"
    ],
    "answer_en": "121.3 W",
    "answer_hi": "121.3 W",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Capacitors 4 μF and 5 μF in series. Equivalent capacitance:",
    "question_hi": "4 μF और 5 μF संधारित्र श्रृंखला क्रम में। तुल्य धारिता:",
    "options_en": [
      "4 μF",
      "2.22 μF",
      "9 μF",
      "20 μF"
    ],
    "options_hi": [
      "4 μF",
      "2.22 μF",
      "9 μF",
      "20 μF"
    ],
    "answer_en": "2.22 μF",
    "answer_hi": "2.22 μF",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Time to fall freely from height 49 m (g=10 m/s²) is:",
    "question_hi": "49 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    "options_en": [
      "1.57 s",
      "2.21 s",
      "6.26 s",
      "3.13 s"
    ],
    "options_hi": [
      "1.57 s",
      "2.21 s",
      "6.26 s",
      "3.13 s"
    ],
    "answer_en": "3.13 s",
    "answer_hi": "3.13 s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Time to fall freely from height 77 m (g=10 m/s²) is:",
    "question_hi": "77 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    "options_en": [
      "7.85 s",
      "2.77 s",
      "1.96 s",
      "3.92 s"
    ],
    "options_hi": [
      "7.85 s",
      "2.77 s",
      "1.96 s",
      "3.92 s"
    ],
    "answer_en": "3.92 s",
    "answer_hi": "3.92 s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "In a process, heat supplied Q=171 J and work done W=74 J. Change in internal energy ΔU is:",
    "question_hi": "एक प्रक्रिया में, दी गई ऊष्मा Q=171 J और किया गया कार्य W=74 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    "options_en": [
      "245 J",
      "74 J",
      "171 J",
      "97 J"
    ],
    "options_hi": [
      "245 J",
      "74 J",
      "171 J",
      "97 J"
    ],
    "answer_en": "97 J",
    "answer_hi": "97 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "A net force acts on a mass 6 kg producing acceleration 8 m/s². The force is:",
    "question_hi": "6 kg द्रव्यमान पर 8 m/s² त्वरण उत्पन्न करने वाला बल है:",
    "options_en": [
      "-2 N",
      "384 N",
      "48 N",
      "14 N"
    ],
    "options_hi": [
      "-2 N",
      "384 N",
      "48 N",
      "14 N"
    ],
    "answer_en": "48 N",
    "answer_hi": "48 N",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Gravitational potential energy of mass 1 kg at height 1 m (g=10) is:",
    "question_hi": "1 kg द्रव्यमान की 1 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    "options_en": [
      "10 J",
      "12 J",
      "1 J",
      "5.0 J"
    ],
    "options_hi": [
      "10 J",
      "12 J",
      "1 J",
      "5.0 J"
    ],
    "answer_en": "10 J",
    "answer_hi": "10 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Fleming's left-hand rule is used to find the direction of:",
    "question_hi": "फ्लेमिंग का बायाँ हाथ नियम किस दिशा को ज्ञात करने के लिए उपयोग होता है?",
    "options_en": [
      "Induced current",
      "Charge density",
      "Magnetic field lines",
      "Force on a current-carrying conductor"
    ],
    "options_hi": [
      "Induced current",
      "Charge density",
      "Magnetic field lines",
      "Force on a current-carrying conductor"
    ],
    "answer_en": "Force on a current-carrying conductor",
    "answer_hi": "Force on a current-carrying conductor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Body moves in circle radius 10 m at speed 16 m/s. Centripetal acceleration is:",
    "question_hi": "10 m त्रिज्या वाले वृत्त में 16 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    "options_en": [
      "51.2 m/s²",
      "16 m/s²",
      "25.6 m/s²",
      "1.6 m/s²"
    ],
    "options_hi": [
      "51.2 m/s²",
      "16 m/s²",
      "25.6 m/s²",
      "1.6 m/s²"
    ],
    "answer_en": "25.6 m/s²",
    "answer_hi": "25.6 m/s²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Gravitational potential energy of mass 14 kg at height 14 m (g=10) is:",
    "question_hi": "14 kg द्रव्यमान की 14 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    "options_en": [
      "196 J",
      "38 J",
      "980.0 J",
      "1960 J"
    ],
    "options_hi": [
      "196 J",
      "38 J",
      "980.0 J",
      "1960 J"
    ],
    "answer_en": "1960 J",
    "answer_hi": "1960 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "A wave has frequency 289 Hz and wavelength 0.2 m. Its speed is:",
    "question_hi": "एक तरंग का आवृत्ति 289 Hz और तरंगदैर्घ्य 0.2 m है। इसका वेग है:",
    "options_en": [
      "0.001 m/s",
      "28.9 m/s",
      "1445.0 m/s",
      "57.8 m/s"
    ],
    "options_hi": [
      "0.001 m/s",
      "28.9 m/s",
      "1445.0 m/s",
      "57.8 m/s"
    ],
    "answer_en": "57.8 m/s",
    "answer_hi": "57.8 m/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Dimension of power is:",
    "question_hi": "शक्ति का विमीय सूत्र क्या है?",
    "options_en": [
      "[M L^2 T^-3]",
      "[T]",
      "[M]",
      "[L]"
    ],
    "options_hi": [
      "[M L^2 T^-3]",
      "[T]",
      "[M]",
      "[L]"
    ],
    "answer_en": "[M L^2 T^-3]",
    "answer_hi": "[M L^2 T^-3]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "In a process, heat supplied Q=238 J and work done W=36 J. Change in internal energy ΔU is:",
    "question_hi": "एक प्रक्रिया में, दी गई ऊष्मा Q=238 J और किया गया कार्य W=36 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    "options_en": [
      "274 J",
      "238 J",
      "202 J",
      "36 J"
    ],
    "options_hi": [
      "274 J",
      "238 J",
      "202 J",
      "36 J"
    ],
    "answer_en": "202 J",
    "answer_hi": "202 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "A resistor 9 Ω connected to 18 V. Current is:",
    "question_hi": "9 Ω प्रतिरोधक को 18 V से जोड़ा। धारा है:",
    "options_en": [
      "162 A",
      "0.50 A",
      "2.0 A",
      "1.0 A"
    ],
    "options_hi": [
      "162 A",
      "0.50 A",
      "2.0 A",
      "1.0 A"
    ],
    "answer_en": "2.0 A",
    "answer_hi": "2.0 A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Speed of electromagnetic waves in vacuum (≈):",
    "question_hi": "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    "options_en": [
      "1.5e8 m/s",
      "3.0e7 m/s",
      "3.0e9 m/s",
      "299863380 m/s"
    ],
    "options_hi": [
      "1.5e8 m/s",
      "3.0e7 m/s",
      "3.0e9 m/s",
      "299863380 m/s"
    ],
    "answer_en": "299863380 m/s",
    "answer_hi": "299863380 m/s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Work 819 J done in 16 s. Power is:",
    "question_hi": "16 s में 819 J कार्य किया। शक्ति है:",
    "options_en": [
      "13104 W",
      "102.4 W",
      "819 W",
      "51.2 W"
    ],
    "options_hi": [
      "13104 W",
      "102.4 W",
      "819 W",
      "51.2 W"
    ],
    "answer_en": "51.2 W",
    "answer_hi": "51.2 W",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Time to fall freely from height 54 m (g=10 m/s²) is:",
    "question_hi": "54 m की ऊँचाई से मुक्तपतन का समय (g=10 m/s²) है:",
    "options_en": [
      "1.64 s",
      "2.32 s",
      "3.29 s",
      "6.57 s"
    ],
    "options_hi": [
      "1.64 s",
      "2.32 s",
      "3.29 s",
      "6.57 s"
    ],
    "answer_en": "3.29 s",
    "answer_hi": "3.29 s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Two resistors 8 Ω and 2 Ω in series. Equivalent resistance:",
    "question_hi": "दो प्रतिरोध 8 Ω और 2 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    "options_en": [
      "10 Ω",
      "1.60 Ω",
      "8 Ω",
      "16 Ω"
    ],
    "options_hi": [
      "10 Ω",
      "1.60 Ω",
      "8 Ω",
      "16 Ω"
    ],
    "answer_en": "10 Ω",
    "answer_hi": "10 Ω",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "In a process, heat supplied Q=135 J and work done W=93 J. Change in internal energy ΔU is:",
    "question_hi": "एक प्रक्रिया में, दी गई ऊष्मा Q=135 J और किया गया कार्य W=93 J है। आंतरिक ऊर्जा में परिवर्तन ΔU है:",
    "options_en": [
      "42 J",
      "93 J",
      "228 J",
      "135 J"
    ],
    "options_hi": [
      "42 J",
      "93 J",
      "228 J",
      "135 J"
    ],
    "answer_en": "42 J",
    "answer_hi": "42 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Nucleus with mass number A=30. Approx total binding energy (avg 6.8 MeV/nucleon):",
    "question_hi": "द्रव्यमान संख्या A=30 वाले नाभिक की कुल बंधन ऊर्जा (औसत 6.8 MeV/न्यूक्लिओन):",
    "options_en": [
      "6.8 MeV",
      "203.4 MeV",
      "101.7 MeV",
      "213.4 MeV"
    ],
    "options_hi": [
      "6.8 MeV",
      "203.4 MeV",
      "101.7 MeV",
      "213.4 MeV"
    ],
    "answer_en": "203.4 MeV",
    "answer_hi": "203.4 MeV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "A thin lens with focal length 10 cm forms an image for object at -50 cm. Image distance v is:",
    "question_hi": "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -50 cm पर है। प्रतिबिंब दूरी v है:",
    "options_en": [
      "-12.5 cm",
      "-50 cm",
      "10 cm",
      "12.5 cm"
    ],
    "options_hi": [
      "-12.5 cm",
      "-50 cm",
      "10 cm",
      "12.5 cm"
    ],
    "answer_en": "12.5 cm",
    "answer_hi": "12.5 cm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Dimension of force is:",
    "question_hi": "बल का विमीय सूत्र क्या है?",
    "options_en": [
      "[M]",
      "[L]",
      "[M L T^-2]",
      "[T]"
    ],
    "options_hi": [
      "[M]",
      "[L]",
      "[M L T^-2]",
      "[T]"
    ],
    "answer_en": "[M L T^-2]",
    "answer_hi": "[M L T^-2]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "A thin lens with focal length 15 cm forms an image for object at -50 cm. Image distance v is:",
    "question_hi": "15 cm फोकल लंबाई वाले लेंस के लिए वस्तु -50 cm पर है। प्रतिबिंब दूरी v है:",
    "options_en": [
      "-21.43 cm",
      "21.43 cm",
      "-50 cm",
      "15 cm"
    ],
    "options_hi": [
      "-21.43 cm",
      "21.43 cm",
      "-50 cm",
      "15 cm"
    ],
    "answer_en": "21.43 cm",
    "answer_hi": "21.43 cm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Gravitational potential energy of mass 9 kg at height 45 m (g=10) is:",
    "question_hi": "9 kg द्रव्यमान की 45 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    "options_en": [
      "4050 J",
      "405 J",
      "64 J",
      "2025.0 J"
    ],
    "options_hi": [
      "4050 J",
      "405 J",
      "64 J",
      "2025.0 J"
    ],
    "answer_en": "4050 J",
    "answer_hi": "4050 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Gravitational potential energy of mass 6 kg at height 47 m (g=10) is:",
    "question_hi": "6 kg द्रव्यमान की 47 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    "options_en": [
      "2820 J",
      "282 J",
      "63 J",
      "1410.0 J"
    ],
    "options_hi": [
      "2820 J",
      "282 J",
      "63 J",
      "1410.0 J"
    ],
    "answer_en": "2820 J",
    "answer_hi": "2820 J",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Body moves in circle radius 7 m at speed 12 m/s. Centripetal acceleration is:",
    "question_hi": "7 m त्रिज्या वाले वृत्त में 12 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    "options_en": [
      "1.7142857142857142 m/s²",
      "12 m/s²",
      "41.142857142857146 m/s²",
      "20.571428571428573 m/s²"
    ],
    "options_hi": [
      "1.7142857142857142 m/s²",
      "12 m/s²",
      "41.142857142857146 m/s²",
      "20.571428571428573 m/s²"
    ],
    "answer_en": "20.571428571428573 m/s²",
    "answer_hi": "20.571428571428573 m/s²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "A thin lens with focal length 10 cm forms an image for object at -60 cm. Image distance v is:",
    "question_hi": "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -60 cm पर है। प्रतिबिंब दूरी v है:",
    "options_en": [
      "-12.0 cm",
      "12.0 cm",
      "10 cm",
      "-60 cm"
    ],
    "options_hi": [
      "-12.0 cm",
      "12.0 cm",
      "10 cm",
      "-60 cm"
    ],
    "answer_en": "12.0 cm",
    "answer_hi": "12.0 cm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Dimension of energy is:",
    "question_hi": "ऊर्जा का विमीय सूत्र क्या है?",
    "options_en": [
      "[T]",
      "[L]",
      "[M]",
      "[M L^2 T^-2]"
    ],
    "options_hi": [
      "[T]",
      "[L]",
      "[M]",
      "[M L^2 T^-2]"
    ],
    "answer_en": "[M L^2 T^-2]",
    "answer_hi": "[M L^2 T^-2]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Energy difference between levels n=1 and n=4 in H-atom (ΔE) is:",
    "question_hi": "हाइड्रोजन परमाणु में n=1 और n=4 के बीच ऊर्जा अंतर (ΔE) है:",
    "options_en": [
      "6.38 eV",
      "12.75 eV",
      "13.6 eV",
      "0.85 eV"
    ],
    "options_hi": [
      "6.38 eV",
      "12.75 eV",
      "13.6 eV",
      "0.85 eV"
    ],
    "answer_en": "12.75 eV",
    "answer_hi": "12.75 eV",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "A current 10 A flows through wire of cross-sectional area 1.79 m². Current density J is:",
    "question_hi": "10 A धारा 1.79 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    "options_en": [
      "17.90 A/m²",
      "0.18 A/m²",
      "5.59 A/m²",
      "2.79 A/m²"
    ],
    "options_hi": [
      "17.90 A/m²",
      "0.18 A/m²",
      "5.59 A/m²",
      "2.79 A/m²"
    ],
    "answer_en": "5.59 A/m²",
    "answer_hi": "5.59 A/m²",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Work 238 J done in 7 s. Power is:",
    "question_hi": "7 s में 238 J कार्य किया। शक्ति है:",
    "options_en": [
      "34.0 W",
      "238 W",
      "1666 W",
      "68.0 W"
    ],
    "options_hi": [
      "34.0 W",
      "238 W",
      "1666 W",
      "68.0 W"
    ],
    "answer_en": "34.0 W",
    "answer_hi": "34.0 W",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Two resistors 2 Ω and 10 Ω in parallel. Equivalent resistance:",
    "question_hi": "दो प्रतिरोध 2 Ω और 10 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    "options_en": [
      "12 Ω",
      "1.67 Ω",
      "2 Ω",
      "20 Ω"
    ],
    "options_hi": [
      "12 Ω",
      "1.67 Ω",
      "2 Ω",
      "20 Ω"
    ],
    "answer_en": "1.67 Ω",
    "answer_hi": "1.67 Ω",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Projectile launched with speed 21 m/s at 45°. Range (g=10 m/s²) is:",
    "question_hi": "21 m/s की गति से 45° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    "options_en": [
      "88.2 m",
      "0",
      "22.1 m",
      "44.1 m"
    ],
    "options_hi": [
      "88.2 m",
      "0",
      "22.1 m",
      "44.1 m"
    ],
    "answer_en": "44.1 m",
    "answer_hi": "44.1 m",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Projectile launched with speed 36 m/s at 30°. Range (g=10 m/s²) is:",
    "question_hi": "36 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    "options_en": [
      "64.8 m",
      "259.2 m",
      "129.6 m",
      "0"
    ],
    "options_hi": [
      "64.8 m",
      "259.2 m",
      "129.6 m",
      "0"
    ],
    "answer_en": "129.6 m",
    "answer_hi": "129.6 m",
    "attempted": false,
    "selected": ""
  }
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
