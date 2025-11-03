const questions = [
 
      {
        num: 1,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 2,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 3,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 4,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 5,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 6,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 7,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 8,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 9,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 10,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 11,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 12,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 13,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 14,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 15,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 16,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 17,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 18,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 19,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 20,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 21,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 22,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 23,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 24,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 25,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 26,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 27,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 28,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 29,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 30,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 31,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 32,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 33,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 34,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 35,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 36,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 37,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 38,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 39,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 40,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 41,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 42,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 43,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 44,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 45,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 46,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 47,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 48,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 49,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 50,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 51,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 52,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 53,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 54,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 55,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 56,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 57,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 58,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 59,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 60,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 61,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 62,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 63,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 64,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 65,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 66,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 67,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 68,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 69,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 70,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 71,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 72,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 73,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 74,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 75,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 76,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 77,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 78,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 79,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 80,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 81,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 82,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 83,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 84,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 85,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 86,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 87,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 88,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 89,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 90,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 91,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 92,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 93,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 94,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 95,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 96,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 97,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 98,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 99,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 100,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 101,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 102,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 103,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 104,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 105,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 106,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 107,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 108,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 109,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 110,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 111,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 112,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 113,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 114,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 115,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 116,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 117,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 118,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 119,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 120,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 121,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 122,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 123,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 124,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 125,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 126,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 127,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 128,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 129,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 130,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 131,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 132,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 133,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 134,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 135,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 136,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 137,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 138,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 139,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 140,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 141,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 142,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 143,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 144,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 145,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 146,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 147,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 148,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 149,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 150,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 151,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 152,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 153,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 154,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 155,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 156,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 157,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 158,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 159,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 160,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 161,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 162,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 163,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 164,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 165,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 166,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 167,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 168,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 169,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 170,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 171,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 172,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 173,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 174,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 175,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 176,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 177,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 178,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 179,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 180,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 181,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 182,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 183,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 184,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 185,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 186,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 187,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 188,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 189,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 190,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 191,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 192,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 193,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 194,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 195,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 196,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },
      {
        num: 197,
        subject: "Physics",
        question_en:
          "A ball is thrown vertically upwards with a velocity of 20 m/s. How long will it take to return to the thrower’s hand? (Assume g = 10 m/s²)",
        question_hi:
          "एक गेंद को 20 m/s की वेग से सीधे ऊपर की ओर फेंका गया। इसे फेंकने वाले के हाथ में वापस आने में कितना समय लगेगा? (g = 10 m/s² मानें)",
        options_en: ["2 s", "4 s", "6 s", "8 s"],
        options_hi: ["2 सेकंड", "4 सेकंड", "6 सेकंड", "8 सेकंड"],
        answer_en: "4 s",
        answer_hi: "4 सेकंड",
        attempted: false,
        selected: "",
      },
      {
        num: 198,
        subject: "Chemistry",
        question_en: "What is the IUPAC name of CH3–CH2–COOH?",
        question_hi: "CH3–CH2–COOH का IUPAC नाम क्या है?",
        options_en: [
          "Methanoic acid",
          "Ethanoic acid",
          "Propanoic acid",
          "Butanoic acid",
        ],
        options_hi: [
          "मीथेनोइक अम्ल",
          "एथेनोइक अम्ल",
          "प्रोपेनोइक अम्ल",
          "ब्यूटेनोंइक अम्ल",
        ],
        answer_en: "Propanoic acid",
        answer_hi: "प्रोपेनोइक अम्ल",
        attempted: false,
        selected: "",
      },
      {
        num: 199,
        subject: "Botany",
        question_en: "Which plant hormone is responsible for cell elongation?",
        question_hi: "कोशिका वृद्धि के लिए कौन सा पादप हार्मोन उत्तरदायी है?",
        options_en: ["Cytokinin", "Gibberellin", "Auxin", "Ethylene"],
        options_hi: ["साइटोकिनिन", "गिबरेलिन", "ऑक्सिन", "एथिलीन"],
        answer_en: "Auxin",
        answer_hi: "ऑक्सिन",
        attempted: false,
        selected: "",
      },
      {
        num: 200,
        subject: "Zoology",
        question_en: "Which blood cells help in clotting of blood?",
        question_hi:
          "रक्त का थक्का बनाने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
        options_en: ["RBC", "WBC", "Platelets", "Plasma"],
        options_hi: [
          "लाल रक्त कोशिकाएं",
          "श्वेत रक्त कोशिकाएं",
          "प्लेटलेट्स",
          "प्लाज्मा",
        ],
        answer_en: "Platelets",
        answer_hi: "प्लेटलेट्स",
        attempted: false,
        selected: "",
      },

  // Add more questions here...
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
