const questions = [
  {
    num: 1,
    question_en: "Speed of electromagnetic waves in vacuum (≈):",
    question_hi: "निर्वात में विद्युतचुंबकीय तरंगों का वेग (लगभग):",
    options_en: ["3.0e7 m/s", "3.0e9 m/s", "1.5e8 m/s", "299863380 m/s"],
    options_hi: ["3.0e7 m/s", "3.0e9 m/s", "1.5e8 m/s", "299863380 m/s"],
    answer_en: "299863380 m/s",
    answer_hi: "299863380 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "Body moves in circle radius 8 m at speed 29 m/s. Centripetal acceleration is:",
    question_hi:
      "8 m त्रिज्या वाले वृत्त में 29 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["105.125 m/s²", "29 m/s²", "210.25 m/s²", "3.625 m/s²"],
    options_hi: ["105.125 m/s²", "29 m/s²", "210.25 m/s²", "3.625 m/s²"],
    answer_en: "105.125 m/s²",
    answer_hi: "105.125 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
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
    num: 4,
    question_en:
      "Gravitational potential energy of mass 17 kg at height 48 m (g=10) is:",
    question_hi:
      "17 kg द्रव्यमान की 48 m ऊँचाई पर गुरुत्वीय विभव ऊर्जा (g=10) है:",
    options_en: ["8160 J", "816 J", "4080.0 J", "75 J"],
    options_hi: ["8160 J", "816 J", "4080.0 J", "75 J"],
    answer_en: "8160 J",
    answer_hi: "8160 J",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
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
    num: 6,
    question_en:
      "Body moves in circle radius 1 m at speed 20 m/s. Centripetal acceleration is:",
    question_hi:
      "1 m त्रिज्या वाले वृत्त में 20 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["800.0 m/s²", "20 m/s²", "400.0 m/s²", "20.0 m/s²"],
    options_hi: ["800.0 m/s²", "20 m/s²", "400.0 m/s²", "20.0 m/s²"],
    answer_en: "400.0 m/s²",
    answer_hi: "400.0 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "A resistor 5 Ω connected to 12 V. Current is:",
    question_hi: "5 Ω प्रतिरोधक को 12 V से जोड़ा। धारा है:",
    options_en: ["2.4 A", "1.2 A", "60 A", "0.42 A"],
    options_hi: ["2.4 A", "1.2 A", "60 A", "0.42 A"],
    answer_en: "2.4 A",
    answer_hi: "2.4 A",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "Body moves in circle radius 9 m at speed 24 m/s. Centripetal acceleration is:",
    question_hi:
      "9 m त्रिज्या वाले वृत्त में 24 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: [
      "64.0 m/s²",
      "2.6666666666666665 m/s²",
      "128.0 m/s²",
      "24 m/s²",
    ],
    options_hi: [
      "64.0 m/s²",
      "2.6666666666666665 m/s²",
      "128.0 m/s²",
      "24 m/s²",
    ],
    answer_en: "64.0 m/s²",
    answer_hi: "64.0 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en:
      "Body moves in circle radius 5 m at speed 22 m/s. Centripetal acceleration is:",
    question_hi:
      "5 m त्रिज्या वाले वृत्त में 22 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: ["96.8 m/s²", "193.6 m/s²", "22 m/s²", "4.4 m/s²"],
    options_hi: ["96.8 m/s²", "193.6 m/s²", "22 m/s²", "4.4 m/s²"],
    answer_en: "96.8 m/s²",
    answer_hi: "96.8 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "A constant force 31 N acts over displacement 8 m. Work done is:",
    question_hi:
      "31 N का नियत बल 8 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["39 J", "248 J", "124.0 J", "3.9 J"],
    options_hi: ["39 J", "248 J", "124.0 J", "3.9 J"],
    answer_en: "248 J",
    answer_hi: "248 J",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en:
      "A constant force 17 N acts over displacement 6 m. Work done is:",
    question_hi:
      "17 N का नियत बल 6 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["51.0 J", "23 J", "2.8 J", "102 J"],
    options_hi: ["51.0 J", "23 J", "2.8 J", "102 J"],
    answer_en: "102 J",
    answer_hi: "102 J",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en:
      "A net force acts on a mass 4 kg producing acceleration 4 m/s². The force is:",
    question_hi: "4 kg द्रव्यमान पर 4 m/s² त्वरण उत्पन्न करने वाला बल है:",
    options_en: ["0 N", "16 N", "64 N", "8 N"],
    options_hi: ["0 N", "16 N", "64 N", "8 N"],
    answer_en: "16 N",
    answer_hi: "16 N",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "Energy difference between levels n=2 and n=4 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=2 और n=4 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["2.55 eV", "3.4 eV", "1.27 eV", "0.85 eV"],
    options_hi: ["2.55 eV", "3.4 eV", "1.27 eV", "0.85 eV"],
    answer_en: "2.55 eV",
    answer_hi: "2.55 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "A wave has frequency 494 Hz and wavelength 2.0 m. Its speed is:",
    question_hi:
      "एक तरंग का आवृत्ति 494 Hz और तरंगदैर्घ्य 2.0 m है। इसका वेग है:",
    options_en: ["0.004 m/s", "988.0 m/s", "494.0 m/s", "247.0 m/s"],
    options_hi: ["0.004 m/s", "988.0 m/s", "494.0 m/s", "247.0 m/s"],
    answer_en: "988.0 m/s",
    answer_hi: "988.0 m/s",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "For mass-spring (m=5 kg, k=50 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=5 kg, k=50 N/m) के लिए आवर्तकाल T है:",
    options_en: ["1.99 s", "0.99 s", "19.87 s", "0.32 s"],
    options_hi: ["1.99 s", "0.99 s", "19.87 s", "0.32 s"],
    answer_en: "1.99 s",
    answer_hi: "1.99 s",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "Maximum static friction for normal reaction 55 N and μ= 0.4 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=55 N, μ=0.4) है:",
    options_en: ["22.0 N", "11.0 N", "137.5 N", "55 N"],
    options_hi: ["22.0 N", "11.0 N", "137.5 N", "55 N"],
    answer_en: "22.0 N",
    answer_hi: "22.0 N",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Dimension of power is:",
    question_hi: "शक्ति का विमीय सूत्र क्या है?",
    options_en: ["[T]", "[M L^2 T^-3]", "[L]", "[M]"],
    options_hi: ["[T]", "[M L^2 T^-3]", "[L]", "[M]"],
    answer_en: "[M L^2 T^-3]",
    answer_hi: "[M L^2 T^-3]",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
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
    num: 19,
    question_en:
      "A sample with 143 nuclei undergoes 1 half-lives. Remaining nuclei:",
    question_hi: "143 नाभिक वाला नमूना 1 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["35", "143", "71", "0"],
    options_hi: ["35", "143", "71", "0"],
    answer_en: "71",
    answer_hi: "71",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Fleming's left-hand rule is used to find the direction of:",
    question_hi:
      "फ्लेमिंग का बायाँ हाथ नियम किस दिशा को ज्ञात करने के लिए उपयोग होता है?",
    options_en: [
      "Force on a current-carrying conductor",
      "Charge density",
      "Induced current",
      "Magnetic field lines",
    ],
    options_hi: [
      "Force on a current-carrying conductor",
      "Charge density",
      "Induced current",
      "Magnetic field lines",
    ],
    answer_en: "Force on a current-carrying conductor",
    answer_hi: "Force on a current-carrying conductor",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "A thin lens with focal length 10 cm forms an image for object at -30 cm. Image distance v is:",
    question_hi:
      "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -30 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["10 cm", "-30 cm", "15.0 cm", "-15.0 cm"],
    options_hi: ["10 cm", "-30 cm", "15.0 cm", "-15.0 cm"],
    answer_en: "15.0 cm",
    answer_hi: "15.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=8.00e+14 Hz and incident frequency f=9.60e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=8.00e+14 Hz और आपतित आवृत्ति f=9.60e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Cannot say",
      "No emission",
      "Electrons just emitted (zero KE)",
      "Electrons emitted with KE > 0",
    ],
    options_hi: [
      "Cannot say",
      "No emission",
      "Electrons just emitted (zero KE)",
      "Electrons emitted with KE > 0",
    ],
    answer_en: "Electrons emitted with KE > 0",
    answer_hi: "Electrons emitted with KE > 0",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "A thin lens with focal length 10 cm forms an image for object at -40 cm. Image distance v is:",
    question_hi:
      "10 cm फोकल लंबाई वाले लेंस के लिए वस्तु -40 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["13.33 cm", "-40 cm", "-13.33 cm", "10 cm"],
    options_hi: ["13.33 cm", "-40 cm", "-13.33 cm", "10 cm"],
    answer_en: "13.33 cm",
    answer_hi: "13.33 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "Body moves in circle radius 9 m at speed 22 m/s. Centripetal acceleration is:",
    question_hi:
      "9 m त्रिज्या वाले वृत्त में 22 m/s वेग से गति। अभिकेन्द्रित त्वरण है:",
    options_en: [
      "22 m/s²",
      "2.4444444444444446 m/s²",
      "53.77777777777778 m/s²",
      "107.55555555555556 m/s²",
    ],
    options_hi: [
      "22 m/s²",
      "2.4444444444444446 m/s²",
      "53.77777777777778 m/s²",
      "107.55555555555556 m/s²",
    ],
    answer_en: "53.77777777777778 m/s²",
    answer_hi: "53.77777777777778 m/s²",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "Energy difference between levels n=2 and n=5 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=2 और n=5 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["1.43 eV", "2.86 eV", "3.4 eV", "0.54 eV"],
    options_hi: ["1.43 eV", "2.86 eV", "3.4 eV", "0.54 eV"],
    answer_en: "2.86 eV",
    answer_hi: "2.86 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Ideal gas: P=200000 Pa, V=0.01 m³, n=1 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=200000 Pa, V=0.01 m³, n=1 mol. तापमान है:",
    options_en: ["481.3 K", "2000.0", "120.3 K", "240.7 K"],
    options_hi: ["481.3 K", "2000.0", "120.3 K", "240.7 K"],
    answer_en: "240.7 K",
    answer_hi: "240.7 K",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "Two resistors 5 Ω and 5 Ω in series. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 5 Ω और 5 Ω श्रेणी क्रम में। तुल्य प्रतिरोध:",
    options_en: ["2.50 Ω", "10 Ω", "5 Ω", "25 Ω"],
    options_hi: ["2.50 Ω", "10 Ω", "5 Ω", "25 Ω"],
    answer_en: "10 Ω",
    answer_hi: "10 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Work 793 J done in 6 s. Power is:",
    question_hi: "6 s में 793 J कार्य किया। शक्ति है:",
    options_en: ["793 W", "264.3 W", "132.2 W", "4758 W"],
    options_hi: ["793 W", "264.3 W", "132.2 W", "4758 W"],
    answer_en: "132.2 W",
    answer_hi: "132.2 W",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "A constant force 27 N acts over displacement 2 m. Work done is:",
    question_hi:
      "27 N का नियत बल 2 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["29 J", "13.5 J", "54 J", "27.0 J"],
    options_hi: ["29 J", "13.5 J", "54 J", "27.0 J"],
    answer_en: "54 J",
    answer_hi: "54 J",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Work 801 J done in 7 s. Power is:",
    question_hi: "7 s में 801 J कार्य किया। शक्ति है:",
    options_en: ["114.4 W", "228.9 W", "5607 W", "801 W"],
    options_hi: ["114.4 W", "228.9 W", "5607 W", "801 W"],
    answer_en: "114.4 W",
    answer_hi: "114.4 W",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "A sample with 785 nuclei undergoes 1 half-lives. Remaining nuclei:",
    question_hi: "785 नाभिक वाला नमूना 1 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["785", "196", "0", "392"],
    options_hi: ["785", "196", "0", "392"],
    answer_en: "392",
    answer_hi: "392",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "Ideal gas: P=300000 Pa, V=0.01 m³, n=2 mol. Temperature is:",
    question_hi: "आदर्श गैस: P=300000 Pa, V=0.01 m³, n=2 mol. तापमान है:",
    options_en: ["361.0 K", "180.5 K", "90.3 K", "3000.0"],
    options_hi: ["361.0 K", "180.5 K", "90.3 K", "3000.0"],
    answer_en: "180.5 K",
    answer_hi: "180.5 K",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "A thin lens with focal length 25 cm forms an image for object at -30 cm. Image distance v is:",
    question_hi:
      "25 cm फोकल लंबाई वाले लेंस के लिए वस्तु -30 cm पर है। प्रतिबिंब दूरी v है:",
    options_en: ["25 cm", "-30 cm", "-150.0 cm", "150.0 cm"],
    options_hi: ["25 cm", "-30 cm", "-150.0 cm", "150.0 cm"],
    answer_en: "150.0 cm",
    answer_hi: "150.0 cm",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "Maximum static friction for normal reaction 43 N and μ= 0.5 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=43 N, μ=0.5) है:",
    options_en: ["86.0 N", "43 N", "21.5 N", "10.8 N"],
    options_hi: ["86.0 N", "43 N", "21.5 N", "10.8 N"],
    answer_en: "21.5 N",
    answer_hi: "21.5 N",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "In photoelectric effect, with threshold frequency f₀=7.00e+14 Hz and incident frequency f=7.00e+14 Hz, outcome is:",
    question_hi:
      "प्रकाश-वैद्युत प्रभाव में, सीमा आवृत्ति f₀=7.00e+14 Hz और आपतित आवृत्ति f=7.00e+14 Hz होने पर परिणाम है:",
    options_en: [
      "Cannot say",
      "No emission",
      "Maximum KE",
      "Electrons just emitted (zero KE)",
    ],
    options_hi: [
      "Cannot say",
      "No emission",
      "Maximum KE",
      "Electrons just emitted (zero KE)",
    ],
    answer_en: "Electrons just emitted (zero KE)",
    answer_hi: "Electrons just emitted (zero KE)",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "Energy difference between levels n=1 and n=4 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=1 और n=4 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["6.38 eV", "12.75 eV", "13.6 eV", "0.85 eV"],
    options_hi: ["6.38 eV", "12.75 eV", "13.6 eV", "0.85 eV"],
    answer_en: "12.75 eV",
    answer_hi: "12.75 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "A constant force 34 N acts over displacement 5 m. Work done is:",
    question_hi:
      "34 N का नियत बल 5 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["85.0 J", "170 J", "6.8 J", "39 J"],
    options_hi: ["85.0 J", "170 J", "6.8 J", "39 J"],
    answer_en: "170 J",
    answer_hi: "170 J",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "A current 9 A flows through wire of cross-sectional area 1.10 m². Current density J is:",
    question_hi:
      "9 A धारा 1.10 m² अनुप्रस्थ क्षेत्र वाले तार से बहती है। धारा घनत्व J है:",
    options_en: ["8.15 A/m²", "0.12 A/m²", "9.94 A/m²", "4.07 A/m²"],
    options_hi: ["8.15 A/m²", "0.12 A/m²", "9.94 A/m²", "4.07 A/m²"],
    answer_en: "8.15 A/m²",
    answer_hi: "8.15 A/m²",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "For mass-spring (m=5 kg, k=200 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=5 kg, k=200 N/m) के लिए आवर्तकाल T है:",
    options_en: ["0.99 s", "0.16 s", "39.74 s", "0.5 s"],
    options_hi: ["0.99 s", "0.16 s", "39.74 s", "0.5 s"],
    answer_en: "0.99 s",
    answer_hi: "0.99 s",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en:
      "Maximum static friction for normal reaction 37 N and μ= 0.2 is:",
    question_hi: "अधिकतम स्थैतिक घर्षण (N=37 N, μ=0.2) है:",
    options_en: ["3.7 N", "7.4 N", "185.0 N", "37 N"],
    options_hi: ["3.7 N", "7.4 N", "185.0 N", "37 N"],
    answer_en: "7.4 N",
    answer_hi: "7.4 N",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "Capacitors 10 μF and 2 μF in parallel. Equivalent capacitance:",
    question_hi: "10 μF और 2 μF संधारित्र समांतर क्रम में। तुल्य धारिता:",
    options_en: ["12 μF", "10 μF", "20 μF", "1.67 μF"],
    options_hi: ["12 μF", "10 μF", "20 μF", "1.67 μF"],
    answer_en: "12 μF",
    answer_hi: "12 μF",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "Two resistors 6 Ω and 8 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 6 Ω और 8 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["48 Ω", "14 Ω", "6 Ω", "3.43 Ω"],
    options_hi: ["48 Ω", "14 Ω", "6 Ω", "3.43 Ω"],
    answer_en: "3.43 Ω",
    answer_hi: "3.43 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "A constant force 12 N acts over displacement 2 m. Work done is:",
    question_hi:
      "12 N का नियत बल 2 m विस्थापन पर कार्य करता है। किया गया कार्य है:",
    options_en: ["14 J", "12.0 J", "24 J", "6.0 J"],
    options_hi: ["14 J", "12.0 J", "24 J", "6.0 J"],
    answer_en: "24 J",
    answer_hi: "24 J",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en:
      "Projectile launched with speed 17 m/s at 30°. Range (g=10 m/s²) is:",
    question_hi: "17 m/s की गति से 30° पर प्रक्षेप्य का रेंज (g=10 m/s²) है:",
    options_en: ["14.4 m", "0", "57.8 m", "28.9 m"],
    options_hi: ["14.4 m", "0", "57.8 m", "28.9 m"],
    answer_en: "28.9 m",
    answer_hi: "28.9 m",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "A sample with 303 nuclei undergoes 1 half-lives. Remaining nuclei:",
    question_hi: "303 नाभिक वाला नमूना 1 अर्ध-आयुओं से गुजरता है। शेष नाभिक:",
    options_en: ["75", "303", "151", "0"],
    options_hi: ["75", "303", "151", "0"],
    answer_en: "151",
    answer_hi: "151",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Energy difference between levels n=3 and n=5 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=3 और n=5 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["0.97 eV", "1.51 eV", "0.54 eV", "0.48 eV"],
    options_hi: ["0.97 eV", "1.51 eV", "0.54 eV", "0.48 eV"],
    answer_en: "0.97 eV",
    answer_hi: "0.97 eV",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Two resistors 6 Ω and 6 Ω in parallel. Equivalent resistance:",
    question_hi: "दो प्रतिरोध 6 Ω और 6 Ω समांतर क्रम में। तुल्य प्रतिरोध:",
    options_en: ["36 Ω", "6 Ω", "12 Ω", "3.0 Ω"],
    options_hi: ["36 Ω", "6 Ω", "12 Ω", "3.0 Ω"],
    answer_en: "3.0 Ω",
    answer_hi: "3.0 Ω",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "For mass-spring (m=3 kg, k=50 N/m), time period T is:",
    question_hi: "द्रव्यमान-स्प्रिंग (m=3 kg, k=50 N/m) के लिए आवर्तकाल T है:",
    options_en: ["1.54 s", "0.24 s", "0.77 s", "25.65 s"],
    options_hi: ["1.54 s", "0.24 s", "0.77 s", "25.65 s"],
    answer_en: "1.54 s",
    answer_hi: "1.54 s",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Faraday's law states that induced emf is proportional to:",
    question_hi:
      "फैराडे का नियम कहता है कि प्रेरित विद्युतचालक बल समानुपाती है:",
    options_en: [
      "Square of current",
      "Rate of change of magnetic flux",
      "Magnetic flux itself",
      "Resistance of coil",
    ],
    options_hi: [
      "Square of current",
      "Rate of change of magnetic flux",
      "Magnetic flux itself",
      "Resistance of coil",
    ],
    answer_en: "Rate of change of magnetic flux",
    answer_hi: "Rate of change of magnetic flux",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "Energy difference between levels n=1 and n=2 in H-atom (ΔE) is:",
    question_hi: "हाइड्रोजन परमाणु में n=1 और n=2 के बीच ऊर्जा अंतर (ΔE) है:",
    options_en: ["13.6 eV", "10.2 eV", "5.1 eV", "3.4 eV"],
    options_hi: ["13.6 eV", "10.2 eV", "5.1 eV", "3.4 eV"],
    answer_en: "10.2 eV",
    answer_hi: "10.2 eV",
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
