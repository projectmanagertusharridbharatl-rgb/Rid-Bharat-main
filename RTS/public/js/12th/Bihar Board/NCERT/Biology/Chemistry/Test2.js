const questions = [
  {
    num: 1,
    question_en: "Which of the following is the chemical formula of water?",
    question_hi: "निम्नलिखित में से पानी का रासायनिक सूत्र कौन सा है?",
    options_en: ["H2O", "O2", "CO2", "H2"],
    options_hi: ["H2O", "O2", "CO2", "H2"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "Which of these elements is a noble gas?",
    question_hi: "इनमें से कौन सा तत्व एक आदर्श गैस है?",
    options_en: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "हाइड्रोजन"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "What is the atomic number of carbon?",
    question_hi: "कार्बन का परमाणु संख्या क्या है?",
    options_en: ["6", "12", "8", "4"],
    options_hi: ["6", "12", "8", "4"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "Which type of bond is formed by sharing electrons?",
    question_hi: "किस प्रकार का बंधन इलेक्ट्रॉनों को साझा करके बनता है?",
    options_en: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
    options_hi: ["आयनिक", "कोवालेन्ट", "धात्विक", "हाइड्रोजन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "What is the chemical formula of sulfuric acid?",
    question_hi: "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
    options_en: ["H2SO4", "HCl", "NaOH", "HNO3"],
    options_hi: ["H2SO4", "HCl", "NaOH", "HNO3"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "What is the pH of pure water?",
    question_hi: "शुद्ध पानी का pH क्या है?",
    options_en: ["7", "5", "10", "3"],
    options_hi: ["7", "5", "10", "3"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "Which of these is an example of a physical change?",
    question_hi: "इनमें से कौन सा एक भौतिक परिवर्तन का उदाहरण है?",
    options_en: ["Burning of paper", "Melting of ice", "Rusting of iron", "Digestion of food"],
    options_hi: ["कागज जलाना", "बर्फ का पिघलना", "लोहा का जंग लगना", "खाद्य का पाचन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "What is the molar mass of water?",
    question_hi: "पानी का मोलर द्रव्यमान क्या है?",
    options_en: ["18 g/mol", "12 g/mol", "22 g/mol", "24 g/mol"],
    options_hi: ["18 ग्राम/मोल", "12 ग्राम/मोल", "22 ग्राम/मोल", "24 ग्राम/मोल"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "Which of these elements is a halogen?",
    question_hi: "इनमें से कौन सा तत्व एक हैलोजन है?",
    options_en: ["Oxygen", "Fluorine", "Argon", "Neon"],
    options_hi: ["ऑक्सीजन", "फ्लोरीन", "आर्गन", "निऑन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "Which of these is a product of photosynthesis?",
    question_hi: "इनमें से कौन सा प्रकाश संश्लेषण का उत्पाद है?",
    options_en: ["Oxygen", "Carbon dioxide", "Methane", "Nitrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "मीथेन", "नाइट्रोजन"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "What is the main constituent of air?",
    question_hi: "हवा का मुख्य घटक क्या है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "What is the chemical symbol for gold?",
    question_hi: "सोने का रासायनिक प्रतीक क्या है?",
    options_en: ["Au", "Ag", "Pb", "Fe"],
    options_hi: ["Au", "Ag", "Pb", "Fe"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "Which of these is a strong acid?",
    question_hi: "इनमें से कौन सा एक मजबूत अम्ल है?",
    options_en: ["Acetic acid", "Hydrochloric acid", "Citric acid", "Formic acid"],
    options_hi: ["एसीटिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "साइट्रिक अम्ल", "फॉर्मिक अम्ल"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "What is the gas produced during respiration?",
    question_hi: "श्वसन के दौरान कौन सा गैस उत्पन्न होती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "Which of these is a noble metal?",
    question_hi: "इनमें से कौन सा एक आदर्श धातु है?",
    options_en: ["Iron", "Gold", "Copper", "Zinc"],
    options_hi: ["लोहा", "सोना", "तांबा", "जिंक"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "What is the molecular formula of methane?",
    question_hi: "मीथेन का आणविक सूत्र क्या है?",
    options_en: ["CH4", "C2H6", "C3H8", "C4H10"],
    options_hi: ["CH4", "C2H6", "C3H8", "C4H10"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "What is the main function of enzymes?",
    question_hi: "एंजाइम्स का मुख्य कार्य क्या है?",
    options_en: ["Store energy", "Speed up chemical reactions", "Transport oxygen", "Break down food"],
    options_hi: ["ऊर्जा संचित करना", "रासायनिक प्रतिक्रियाओं को गति देना", "ऑक्सीजन का परिवहन करना", "खाद्य को तोड़ना"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "What is the atomic number of oxygen?",
    question_hi: "ऑक्सीजन का परमाणु संख्या क्या है?",
    options_en: ["8", "6", "10", "12"],
    options_hi: ["8", "6", "10", "12"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "What is the most abundant gas in Earth's atmosphere?",
    question_hi: "पृथ्वी के वायुमंडल में सबसे प्रचुर गैस कौन सी है?",
    options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "Which of the following is a liquid at room temperature?",
    question_hi: "निम्नलिखित में से कौन सा कमरे के तापमान पर तरल है?",
    options_en: ["Water", "Mercury", "Oxygen", "Nitrogen"],
    options_hi: ["पानी", "पारा", "ऑक्सीजन", "नाइट्रोजन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "What is the formula for calculating the number of moles?",
    question_hi: "मोल्स की संख्या निकालने का सूत्र क्या है?",
    options_en: ["Moles = Mass / Molar mass", "Moles = Volume / Molar volume", "Moles = Mass x Molar mass", "Moles = Volume x Molar volume"],
    options_hi: ["मोल्स = द्रव्यमान / मोलर द्रव्यमान", "मोल्स = आयतन / मोलर आयतन", "मोल्स = द्रव्यमान x मोलर द्रव्यमान", "मोल्स = आयतन x मोलर आयतन"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "What is the ideal gas law?",
    question_hi: "आदर्श गैस का नियम क्या है?",
    options_en: ["PV = nRT", "PV = mRT", "PVT = nRT", "P = V/nRT"],
    options_hi: ["PV = nRT", "PV = mRT", "PVT = nRT", "P = V/nRT"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "What is the boiling point of water?",
    question_hi: "पानी का उबालने का बिंदु क्या है?",
    options_en: ["100°C", "0°C", "50°C", "150°C"],
    options_hi: ["100°C", "0°C", "50°C", "150°C"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "What is the formula for calcium chloride?",
    question_hi: "कैल्शियम क्लोराइड का सूत्र क्या है?",
    options_en: ["CaCl2", "NaCl", "CaCO3", "Na2CO3"],
    options_hi: ["CaCl2", "NaCl", "CaCO3", "Na2CO3"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "Which one is the correct monomer of natural rubber?",
    question_hi: "प्राकृतिक रबर का सही मोनोमर कौन सा है?",
    options_en: ["Isoprene", "Styrene", "Ethene", "Propene"],
    options_hi: ["आइसोप्रीन", "स्टाइरीन", "एथीन", "प्रोपीन"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 26,
    question_en: "What is the main component of natural gas?",
    question_hi: "प्राकृतिक गैस का मुख्य घटक क्या है?",
    options_en: ["Methane", "Ethane", "Propane", "Butane"],
    options_hi: ["मीथेन", "एथेन", "प्रोपेन", "ब्यूटेन"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "Which of these compounds is an example of an ester?",
    question_hi: "इनमें से कौन सा यौगिक एक एस्टर का उदाहरण है?",
    options_en: ["Acetic acid", "Ethanol", "Methyl acetate", "Butyric acid"],
    options_hi: ["एसीटिक अम्ल", "एथेनॉल", "मिथाइल एसीटेट", "ब्यूट्रिक अम्ल"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "Which of these is a reducing agent?",
    question_hi: "इनमें से कौन सा एक न्यूनीकरण एजेंट है?",
    options_en: ["H2O2", "O2", "NaCl", "Na"],
    options_hi: ["H2O2", "O2", "NaCl", "Na"],
    answer: 4,
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "What is the pH range of acids?",
    question_hi: "अम्लों का pH सीमा क्या है?",
    options_en: ["0-6", "7-14", "5-8", "9-12"],
    options_hi: ["0-6", "7-14", "5-8", "9-12"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "Which of these is a property of bases?",
    question_hi: "इनमें से कौन सा एक क्षारीय का गुण है?",
    options_en: ["Bitter taste", "Sour taste", "Slippery feel", "None of the above"],
    options_hi: ["कड़वा स्वाद", "खट्टा स्वाद", "फिसलन महसूस करना", "उपरोक्त में से कोई नहीं"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "Which element is the basis of organic chemistry?",
    question_hi: "कौन सा तत्व कार्बनिक रसायनशास्त्र का आधार है?",
    options_en: ["Hydrogen", "Carbon", "Oxygen", "Nitrogen"],
    options_hi: ["हाइड्रोजन", "कार्बन", "ऑक्सीजन", "नाइट्रोजन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "What is the molecular formula of carbon dioxide?",
    question_hi: "कार्बन डाइऑक्साइड का आणविक सूत्र क्या है?",
    options_en: ["CO2", "CO", "C2O", "C2O2"],
    options_hi: ["CO2", "CO", "C2O", "C2O2"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "What is the formula for sodium hydroxide?",
    question_hi: "सोडियम हाइड्रॉक्साइड का सूत्र क्या है?",
    options_en: ["NaOH", "NaCl", "Na2CO3", "Na2SO4"],
    options_hi: ["NaOH", "NaCl", "Na2CO3", "Na2SO4"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "What is the chemical formula of ammonia?",
    question_hi: "अमोनिया का रासायनिक सूत्र क्या है?",
    options_en: ["NH3", "NH4", "N2H4", "N2O"],
    options_hi: ["NH3", "NH4", "N2H4", "N2O"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "Which of these is a chemical property?",
    question_hi: "निम्नलिखित में से कौन सा रासायनिक गुण है?",
    options_en: ["Color", "Density", "Reactivity with oxygen", "Melting point"],
    options_hi: ["रंग", "घनत्व", "ऑक्सीजन के साथ प्रतिक्रियाशीलता", "पिघलने का बिंदु"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "Which of these is an example of an allotrope?",
    question_hi: "इनमें से कौन सा एक अलोट्रॉप का उदाहरण है?",
    options_en: ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"],
    options_hi: ["कार्बन", "ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "Which of these is a saturated hydrocarbon?",
    question_hi: "इनमें से कौन सा एक संतृप्त हाइड्रोकार्बन है?",
    options_en: ["Methane", "Ethene", "Ethene", "Propyne"],
    options_hi: ["मीथेन", "एथीन", "एथेन", "प्रोपाइन"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "Which of these is an example of an alkali?",
    question_hi: "इनमें से कौन सा एक क्षारीय का उदाहरण है?",
    options_en: ["Sodium hydroxide", "Hydrochloric acid", "Acetic acid", "Sulfuric acid"],
    options_hi: ["सोडियम हाइड्रॉक्साइड", "हाइड्रोक्लोरिक अम्ल", "एसीटिक अम्ल", "सल्फ्यूरिक अम्ल"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "What is the gas produced when an acid reacts with a metal?",
    question_hi: "जब एक अम्ल धातु के साथ प्रतिक्रिया करता है, तो कौन सा गैस उत्पन्न होती है?",
    options_en: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन", "नाइट्रोजन"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "What is the formula for sulfur dioxide?",
    question_hi: "सल्फर डाइऑक्साइड का सूत्र क्या है?",
    options_en: ["SO2", "SO3", "S2O", "S4O2"],
    options_hi: ["SO2", "SO3", "S2O", "S4O2"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "What is the chemical formula of sodium chloride?",
    question_hi: "सोडियम क्लोराइड का रासायनिक सूत्र क्या है?",
    options_en: ["NaCl", "Na2CO3", "NaOH", "Na2SO4"],
    options_hi: ["NaCl", "Na2CO3", "NaOH", "Na2SO4"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "Which of the following is a strong base?",
    question_hi: "निम्नलिखित में से कौन सा एक मजबूत क्षारीय है?",
    options_en: ["Ammonium hydroxide", "Sodium hydroxide", "Calcium carbonate", "Magnesium hydroxide"],
    options_hi: ["अमोनियम हाइड्रॉक्साइड", "सोडियम हाइड्रॉक्साइड", "कैल्शियम कार्बोनेट", "मैग्नीशियम हाइड्रॉक्साइड"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "What is the gas produced when an acid reacts with a metal?",
    question_hi: "जब एक अम्ल धातु के साथ प्रतिक्रिया करता है, तो कौन सा गैस उत्पन्न होती है?",
    options_en: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन", "नाइट्रोजन"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "What is the chemical formula of sulfur dioxide?",
    question_hi: "सल्फर डाइऑक्साइड का रासायनिक सूत्र क्या है?",
    options_en: ["SO2", "SO3", "S2O", "S4O2"],
    options_hi: ["SO2", "SO3", "S2O", "S4O2"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "What is the most common form of nitrogen in the atmosphere?",
    question_hi: "वायुमंडल में नाइट्रोजन का सबसे सामान्य रूप कौन सा है?",
    options_en: ["N2", "N", "NO", "N2O"],
    options_hi: ["N2", "N", "NO", "N2O"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "Which of these is an example of an alkene?",
    question_hi: "इनमें से कौन सा एक अल्केन का उदाहरण है?",
    options_en: ["Ethene", "Methane", "Ethyne", "Butane"],
    options_hi: ["एथीन", "मीथेन", "एथाइन", "ब्यूटेन"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "Which of these is an example of a covalent bond?",
    question_hi: "इनमें से कौन सा एक सहसंयोजक बंधन का उदाहरण है?",
    options_en: ["Water", "Sodium chloride", "Calcium oxide", "Magnesium chloride"],
    options_hi: ["पानी", "सोडियम क्लोराइड", "कैल्शियम ऑक्साइड", "मैग्नीशियम क्लोराइड"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "What is the formula for methane?",
    question_hi: "मीथेन का सूत्र क्या है?",
    options_en: ["CH4", "C2H6", "CH3OH", "C2H4"],
    options_hi: ["CH4", "C2H6", "CH3OH", "C2H4"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "Which of these is an example of an ionic compound?",
    question_hi: "इनमें से कौन सा एक आयनिक यौगिक का उदाहरण है?",
    options_en: ["NaCl", "CH4", "H2O", "O2"],
    options_hi: ["NaCl", "CH4", "H2O", "O2"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "Which of the following is an example of an acid?",
    question_hi: "निम्नलिखित में से कौन सा एक अम्ल का उदाहरण है?",
    options_en: ["Hydrochloric acid", "Sodium hydroxide", "Calcium carbonate", "Magnesium hydroxide"],
    options_hi: ["हाइड्रोक्लोरिक अम्ल", "सोडियम हाइड्रॉक्साइड", "कैल्शियम कार्बोनेट", "मैग्नीशियम हाइड्रॉक्साइड"],
    answer: 1,
    attempted: false,
    selected: null
  }
        
  ];
  
let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
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
