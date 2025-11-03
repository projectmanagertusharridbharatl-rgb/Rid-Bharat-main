const questions = [
  {
    num: 1,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "[Physics] The unit of magnetic field is:",
    question_hi: "[Physics] चुंबकीय क्षेत्र की इकाई क्या है?",
    options_en: ["Tesla", "Henry", "Farad", "Weber"],
    options_hi: ["टेस्ला", "हेनरी", "फैराड", "वेबर"],
    answer_en: "Tesla",
    answer_hi: "टेस्ला",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "[Physics] What is the SI unit of electric charge?",
    question_hi: "[Physics] विद्युत आवेश की SI इकाई क्या है?",
    options_en: ["Coulomb", "Ampere", "Volt", "Ohm"],
    options_hi: ["कूलाम्ब", "एम्पियर", "वोल्ट", "ओम"],
    answer_en: "Coulomb",
    answer_hi: "कूलाम्ब",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "[Physics] Which of the following is not a vector quantity?",
    question_hi: "[Physics] निम्न में से कौन एक सदिश राशि नहीं है?",
    options_en: ["Velocity", "Force", "Work", "Acceleration"],
    options_hi: ["वेग", "बल", "कार्य", "त्वरण"],
    answer_en: "Work",
    answer_hi: "कार्य",
    attempted: false,
    selected: "",
  },
  {
    num: 51,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 52,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 53,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 54,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 55,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 56,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 57,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 58,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 59,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 60,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 61,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 62,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 63,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 64,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 65,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 66,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 67,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 68,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 69,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 70,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 71,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 72,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 73,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 74,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 75,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 76,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 77,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 78,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 79,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 80,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 81,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 82,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 83,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 84,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 85,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 86,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 87,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 88,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 89,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 90,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 91,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 92,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 93,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 94,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 95,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 96,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 97,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 98,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 99,
    question_en: "[Chemistry] What is the pH of pure water at 25°C?",
    question_hi: "[Chemistry] 25°C पर शुद्ध जल का pH क्या होता है?",
    options_en: ["5", "6", "7", "8"],
    options_hi: ["5", "6", "7", "8"],
    answer_en: "7",
    answer_hi: "7",
    attempted: false,
    selected: "",
  },
  {
    num: 100,
    question_en: "[Chemistry] Which of the following is a noble gas?",
    question_hi: "[Chemistry] निम्न में से कौन एक निष्क्रिय गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: "",
  },
  {
    num: 101,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 102,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 103,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 104,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 105,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 106,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 107,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 108,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 109,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 110,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 111,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 112,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 113,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 114,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 115,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 116,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 117,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 118,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 119,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 120,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 121,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 122,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 123,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 124,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 125,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 126,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 127,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 128,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 129,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 130,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 131,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 132,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 133,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 134,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 135,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 136,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 137,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 138,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 139,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 140,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 141,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 142,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 143,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 144,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 145,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 146,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 147,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 148,
    question_en: "[Botany] Xylem is responsible for transporting?",
    question_hi: "[Botany] जाइलम किसके परिवहन के लिए उत्तरदायी है?",
    options_en: ["Water", "Food", "Hormones", "Oxygen"],
    options_hi: ["पानी", "भोजन", "हार्मोन", "ऑक्सीजन"],
    answer_en: "Water",
    answer_hi: "पानी",
    attempted: false,
    selected: "",
  },
  {
    num: 149,
    question_en: "[Botany] Photosynthesis occurs in which cell organelle?",
    question_hi: "[Botany] प्रकाश संश्लेषण किस कोशिका अंग में होता है?",
    options_en: ["Chloroplast", "Mitochondria", "Nucleus", "Golgi body"],
    options_hi: [
      "क्लोरोप्लास्ट",
      "माइटोकॉन्ड्रिया",
      "न्यूक्लियस",
      "गोल्जी बॉडी",
    ],
    answer_en: "Chloroplast",
    answer_hi: "क्लोरोप्लास्ट",
    attempted: false,
    selected: "",
  },
  {
    num: 150,
    question_en: "[Botany] Which of the following is a non-vascular plant?",
    question_hi: "[Botany] निम्नलिखित में से कौन सा एक अधिवाहिकीय पौधा है?",
    options_en: ["Moss", "Fern", "Pine", "Mango"],
    options_hi: ["मॉस", "फर्न", "पाइन", "आम"],
    answer_en: "Moss",
    answer_hi: "मॉस",
    attempted: false,
    selected: "",
  },
  {
    num: 151,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 152,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 153,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 154,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 155,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 156,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 157,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 158,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 159,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 160,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 161,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 162,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 163,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 164,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 165,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 166,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 167,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 168,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 169,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 170,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 171,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 172,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 173,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 174,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 175,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 176,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 177,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 178,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 179,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 180,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 181,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 182,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 183,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 184,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 185,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 186,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 187,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 188,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 189,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 190,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 191,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 192,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 193,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 194,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 195,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 196,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 197,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
    attempted: false,
    selected: "",
  },
  {
    num: 198,
    question_en: "[Zoology] Which vitamin is produced in skin by sunlight?",
    question_hi:
      "[Zoology] सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: "",
  },
  {
    num: 199,
    question_en: "[Zoology] Which blood cells help in clotting?",
    question_hi: "[Zoology] कौन सी रक्त कोशिकाएं थक्के बनाने में मदद करती हैं?",
    options_en: ["Platelets", "RBC", "WBC", "Plasma"],
    options_hi: [
      "प्लेटलेट्स",
      "लाल रक्त कोशिकाएं",
      "श्वेत रक्त कोशिकाएं",
      "प्लाज्मा",
    ],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: "",
  },
  {
    num: 200,
    question_en: "[Zoology] Largest organ in the human body is?",
    question_hi: "[Zoology] मानव शरीर का सबसे बड़ा अंग कौन सा है?",
    options_en: ["Liver", "Skin", "Lung", "Heart"],
    options_hi: ["यकृत", "त्वचा", "फेफड़ा", "हृदय"],
    answer_en: "Skin",
    answer_hi: "त्वचा",
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
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
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
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}

function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
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
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
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
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
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
