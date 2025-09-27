const questions = [
  {
    num: 1,
    question_en: "Which of the following is not a colligative property?",
    question_hi: "निम्नलिखित में से कौन एक परासंजात गुण नहीं है?",
    options_en: ["Relative lowering of vapor pressure", "Boiling point elevation", "Freezing point depression", "Viscosity"],
    options_hi: ["वाष्प दाब का सापेक्ष ह्रास", "उबाल बिंदु में वृद्धि", "जमाव बिंदु में कमी", "सान्द्रता"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "Which gas is absorbed during photosynthesis?",
    question_hi: "प्रकाश संश्लेषण के दौरान कौन सी गैस अवशोषित होती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "Which of the following is a primary standard substance?",
    question_hi: "निम्नलिखित में से कौन एक प्राथमिक मानक पदार्थ है?",
    options_en: ["NaOH", "HCl", "Na2CO3", "NH4OH"],
    options_hi: ["NaOH", "HCl", "Na2CO3", "NH4OH"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "Which of the following is not an electrolyte?",
    question_hi: "निम्नलिखित में से कौन एक इलेक्ट्रोलाइट नहीं है?",
    options_en: ["NaCl", "C2H5OH", "HCl", "NaOH"],
    options_hi: ["NaCl", "C2H5OH", "HCl", "NaOH"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "What is the pH of a neutral solution at 25°C?",
    question_hi: "25°C पर एक तटस्थ विलयन का pH क्या होता है?",
    options_en: ["0", "7", "14", "1"],
    options_hi: ["0", "7", "14", "1"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "Which of the following is a redox reaction?",
    question_hi: "निम्नलिखित में से कौन एक रेडॉक्स अभिक्रिया है?",
    options_en: ["HCl + NaOH → NaCl + H2O", "Zn + CuSO4 → ZnSO4 + Cu", "AgNO3 + NaCl → AgCl + NaNO3", "BaCl2 + H2SO4 → BaSO4 + HCl"],
    options_hi: ["HCl + NaOH → NaCl + H2O", "Zn + CuSO4 → ZnSO4 + Cu", "AgNO3 + NaCl → AgCl + NaNO3", "BaCl2 + H2SO4 → BaSO4 + HCl"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "Which of the following is used in the preparation of soap?",
    question_hi: "साबुन बनाने में निम्न में से क्या उपयोग किया जाता है?",
    options_en: ["HCl", "NaOH", "H2SO4", "CH3COOH"],
    options_hi: ["HCl", "NaOH", "H2SO4", "CH3COOH"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "What is the oxidation state of sulfur in H2SO4?",
    question_hi: "H2SO4 में सल्फर की ऑक्सीकरण अवस्था क्या है?",
    options_en: ["+4", "+6", "+2", "0"],
    options_hi: ["+4", "+6", "+2", "0"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "Which of the following is a Lewis acid?",
    question_hi: "निम्नलिखित में से कौन एक लुईस अम्ल है?",
    options_en: ["NH3", "BF3", "OH⁻", "H2O"],
    options_hi: ["NH3", "BF3", "OH⁻", "H2O"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "Which of the following forms a complex with ammonia?",
    question_hi: "निम्नलिखित में से कौन अमोनिया के साथ एक समिश्र बनाता है?",
    options_en: ["Ag⁺", "Na⁺", "K⁺", "Ca²⁺"],
    options_hi: ["Ag⁺", "Na⁺", "K⁺", "Ca²⁺"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "Which element has the highest electronegativity?",
    question_hi: "किस तत्व की विद्युतऋणात्मकता सबसे अधिक होती है?",
    options_en: ["Fluorine", "Oxygen", "Nitrogen", "Chlorine"],
    options_hi: ["फ्लोरीन", "ऑक्सीजन", "नाइट्रोजन", "क्लोरीन"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "The number of atoms in one mole of a substance is known as:",
    question_hi: "किसी पदार्थ के एक मोल में परमाणुओं की संख्या को क्या कहा जाता है?",
    options_en: ["Molar mass", "Avogadro number", "Atomic number", "Molecular mass"],
    options_hi: ["मोलर द्रव्यमान", "एवोगैड्रो संख्या", "परमाणु संख्या", "आणविक द्रव्यमान"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "Which compound is used in the manufacture of glass?",
    question_hi: "कांच बनाने में किस यौगिक का उपयोग किया जाता है?",
    options_en: ["NaCl", "Na2CO3", "KNO3", "NaOH"],
    options_hi: ["NaCl", "Na2CO3", "KNO3", "NaOH"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "Which of the following shows hydrogen bonding?",
    question_hi: "निम्नलिखित में से कौन हाइड्रोजन बॉन्डिंग दर्शाता है?",
    options_en: ["CH4", "NH3", "CO2", "HCl"],
    options_hi: ["CH4", "NH3", "CO2", "HCl"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "Which of the following is not a green house gas?",
    question_hi: "निम्नलिखित में से कौन एक ग्रीनहाउस गैस नहीं है?",
    options_en: ["CO2", "CH4", "O2", "N2O"],
    options_hi: ["CO2", "CH4", "O2", "N2O"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "What is the hybridization of carbon in methane?",
    question_hi: "मीथेन में कार्बन की संकरणता क्या होती है?",
    options_en: ["sp", "sp2", "sp3", "dsp2"],
    options_hi: ["sp", "sp2", "sp3", "dsp2"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "Which of the following does not contain a coordinate bond?",
    question_hi: "निम्नलिखित में से किसमें सहसंयोजक बंध नहीं होता है?",
    options_en: ["NH4⁺", "H3O⁺", "BF3", "CO"],
    options_hi: ["NH4⁺", "H3O⁺", "BF3", "CO"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "Which of the following is an example of a weak acid?",
    question_hi: "निम्न में से कौन एक कमजोर अम्ल का उदाहरण है?",
    options_en: ["HCl", "HNO3", "CH3COOH", "H2SO4"],
    options_hi: ["HCl", "HNO3", "CH3COOH", "H2SO4"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "Which ion is responsible for basicity in NaOH?",
    question_hi: "NaOH में क्षारीयता के लिए कौन सा आयन जिम्मेदार होता है?",
    options_en: ["Na⁺", "H⁺", "OH⁻", "O²⁻"],
    options_hi: ["Na⁺", "H⁺", "OH⁻", "O²⁻"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "Which among the following is aromatic?",
    question_hi: "निम्न में से कौन एक ऐरोमैटिक यौगिक है?",
    options_en: ["Cyclohexane", "Benzene", "Hexene", "Cyclobutane"],
    options_hi: ["साइक्लोहेक्सेन", "बेंजीन", "हेक्सीन", "साइक्लोब्यूटेन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "Which of the following is a characteristic of a first order reaction?",
    question_hi: "निम्नलिखित में से कौन प्रथम क्रम प्रतिक्रिया की विशेषता है?",
    options_en: ["Rate is independent of concentration", "Rate is proportional to the square of concentration", "Rate is proportional to the concentration", "Rate decreases exponentially"],
    options_hi: ["दर सांद्रता पर निर्भर नहीं होती", "दर सांद्रता के वर्ग के समानुपाती होती है", "दर सांद्रता के समानुपाती होती है", "दर घातांकीय रूप से घटती है"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "Which of the following compounds is most reactive in SN1 reaction?",
    question_hi: "निम्नलिखित में से कौन सा यौगिक SN1 अभिक्रिया में सबसे अधिक सक्रिय होता है?",
    options_en: ["CH3Cl", "C2H5Cl", "(CH3)3CCl", "C6H5CH2Cl"],
    options_hi: ["CH3Cl", "C2H5Cl", "(CH3)3CCl", "C6H5CH2Cl"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "Which of the following is a nucleophile?",
    question_hi: "निम्नलिखित में से कौन न्यूक्लियोफाइल है?",
    options_en: ["NO2+", "BF3", "NH3", "AlCl3"],
    options_hi: ["NO2+", "BF3", "NH3", "AlCl3"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "What is the main product when ethene reacts with bromine?",
    question_hi: "जब एथीन ब्रोमीन के साथ अभिक्रिया करता है तो मुख्य उत्पाद क्या होता है?",
    options_en: ["Bromoethane", "Ethene dibromide", "Ethyl bromide", "Ethanol"],
    options_hi: ["ब्रोमोएथेन", "एथीन डाइब्रोमाइड", "एथिल ब्रोमाइड", "एथेनॉल"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "Which of the following is not a characteristic of physisorption?",
    question_hi: "निम्नलिखित में से कौन फिजिसॉर्प्शन की विशेषता नहीं है?",
    options_en: ["Low heat of adsorption", "High specificity", "Reversible", "Involves van der Waals forces"],
    options_hi: ["कम अवशोषण ऊष्मा", "उच्च विशिष्टता", "प्रतिवर्ती", "वान डर वाल्स बलों में शामिल"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 26,
    question_en: "Which gas is released when zinc reacts with dilute hydrochloric acid?",
    question_hi: "जब जिंक तनु हाइड्रोक्लोरिक अम्ल के साथ प्रतिक्रिया करता है तो कौन सी गैस निकलती है?",
    options_en: ["Oxygen", "Hydrogen", "Chlorine", "Nitrogen"],
    options_hi: ["ऑक्सीजन", "हाइड्रोजन", "क्लोरीन", "नाइट्रोजन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "Which of the following is an example of a condensation polymer?",
    question_hi: "निम्नलिखित में से कौन संघनन बहुलक का उदाहरण है?",
    options_en: ["Polythene", "Teflon", "Nylon-6,6", "PVC"],
    options_hi: ["पॉलीथीन", "टेफलॉन", "नायलॉन-6,6", "पीवीसी"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "Which element is common in all amino acids?",
    question_hi: "सभी अमीनो अम्लों में कौन सा तत्व सामान्य होता है?",
    options_en: ["Phosphorus", "Sulphur", "Nitrogen", "Calcium"],
    options_hi: ["फॉस्फोरस", "सल्फर", "नाइट्रोजन", "कैल्शियम"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "Which compound gives iodoform test?",
    question_hi: "कौन सा यौगिक आयोडोफॉर्म परीक्षण देता है?",
    options_en: ["Ethanol", "Methanol", "Propan-1-ol", "Butan-1-ol"],
    options_hi: ["एथेनॉल", "मीथेनॉल", "प्रोपेन-1-ऑल", "ब्यूटेन-1-ऑल"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "Which of the following acts as an oxidising agent?",
    question_hi: "निम्नलिखित में से कौन ऑक्सीकरण अभिकारी के रूप में कार्य करता है?",
    options_en: ["H2", "O2", "Cl-", "Na+"],
    options_hi: ["H2", "O2", "Cl-", "Na+"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "What is the IUPAC name of CH3CHO?",
    question_hi: "CH3CHO का IUPAC नाम क्या है?",
    options_en: ["Methanal", "Ethanol", "Ethanal", "Methanol"],
    options_hi: ["मेथनल", "एथेनॉल", "एथनल", "मेथनॉल"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "Which of the following is most acidic?",
    question_hi: "निम्नलिखित में से कौन सबसे अधिक अम्लीय है?",
    options_en: ["Water", "Ethanol", "Acetic acid", "Phenol"],
    options_hi: ["पानी", "एथेनॉल", "एसीटिक अम्ल", "फिनोल"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "Which vitamin is synthesized in the human body?",
    question_hi: "मानव शरीर में कौन सा विटामिन संश्लेषित होता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer: 4,
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "What is the common name of ethyne?",
    question_hi: "एथाइन का सामान्य नाम क्या है?",
    options_en: ["Acetylene", "Methane", "Ethane", "Propane"],
    options_hi: ["एसीटिलीन", "मीथेन", "एथेन", "प्रोपेन"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "Which compound is used in the manufacture of bakelite?",
    question_hi: "बैकलाइट के निर्माण में किस यौगिक का उपयोग किया जाता है?",
    options_en: ["Phenol and formaldehyde", "Acetone and ammonia", "Urea and formaldehyde", "Ethylene and glycol"],
    options_hi: ["फिनोल और फॉर्मल्डिहाइड", "एसीटोन और अमोनिया", "यूरिया और फॉर्मल्डिहाइड", "एथिलीन और ग्लाइकोल"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "Which compound is an example of a ketone?",
    question_hi: "निम्नलिखित में से कौन एक कीटोन का उदाहरण है?",
    options_en: ["CH3COCH3", "CH3CHO", "CH3OH", "CH3COOH"],
    options_hi: ["CH3COCH3", "CH3CHO", "CH3OH", "CH3COOH"],
    answer: 1,
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "Which element is present in haemoglobin?",
    question_hi: "हीमोग्लोबिन में कौन सा तत्व उपस्थित होता है?",
    options_en: ["Copper", "Zinc", "Iron", "Magnesium"],
    options_hi: ["तांबा", "जिंक", "लोहा", "मैग्नीशियम"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "Which of the following has peptide bonds?",
    question_hi: "निम्नलिखित में से किसमें पेप्टाइड बॉन्ड होते हैं?",
    options_en: ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
    options_hi: ["कार्बोहाइड्रेट्स", "प्रोटीन", "वसा", "विटामिन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "Which of the following is a biodegradable polymer?",
    question_hi: "निम्नलिखित में से कौन जैवअपघट्य बहुलक है?",
    options_en: ["Polyethene", "Nylon-6,6", "PHBV", "PVC"],
    options_hi: ["पॉलीएथीन", "नायलॉन-6,6", "PHBV", "पीवीसी"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "Which of the following is used as an antacid?",
    question_hi: "निम्नलिखित में से किसका उपयोग एंटासिड के रूप में किया जाता है?",
    options_en: ["NaOH", "Mg(OH)₂", "HCl", "CH3COOH"],
    options_hi: ["NaOH", "Mg(OH)₂", "HCl", "CH3COOH"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "Which compound is used as a preservative in pickles?",
    question_hi: "अचार में परिरक्षक के रूप में किस यौगिक का उपयोग किया जाता है?",
    options_en: ["Acetic acid", "Benzoic acid", "Citric acid", "Formic acid"],
    options_hi: ["एसीटिक अम्ल", "बेंजोइक अम्ल", "सिट्रिक अम्ल", "फॉर्मिक अम्ल"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "Which functional group is present in alcohols?",
    question_hi: "एल्कोहॉल में कौन सा फंक्शनल ग्रुप होता है?",
    options_en: ["-COOH", "-CHO", "-OH", "-CO-"],
    options_hi: ["-COOH", "-CHO", "-OH", "-CO-"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "Which reagent is used to distinguish between aldehyde and ketone?",
    question_hi: "एल्डिहाइड और कीटोन में भेद करने के लिए किस अभिकर्मक का उपयोग किया जाता है?",
    options_en: ["Tollen’s reagent", "Benedict’s solution", "Fehling’s solution", "All of these"],
    options_hi: ["टॉलेंस अभिकर्मक", "बेनेडिक्ट्स विलयन", "फीलिंग्स विलयन", "इनमें से सभी"],
    answer: 4,
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "Which compound is used in the synthesis of aspirin?",
    question_hi: "एस्पिरिन के संश्लेषण में किस यौगिक का उपयोग किया जाता है?",
    options_en: ["Acetic acid", "Salicylic acid", "Citric acid", "Benzoic acid"],
    options_hi: ["एसीटिक अम्ल", "सैलिसिलिक अम्ल", "सिट्रिक अम्ल", "बेंजोइक अम्ल"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "Which of the following is a greenhouse gas?",
    question_hi: "निम्नलिखित में से कौन एक ग्रीनहाउस गैस है?",
    options_en: ["O2", "N2", "CH4", "He"],
    options_hi: ["O2", "N2", "CH4", "ही"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "Which method is used for the concentration of bauxite ore?",
    question_hi: "बॉक्साइट अयस्क के सांद्रण के लिए किस विधि का उपयोग किया जाता है?",
    options_en: ["Froth flotation", "Magnetic separation", "Leaching", "Gravity separation"],
    options_hi: ["फ्रॉथ फ्लोटेशन", "चुंबकीय पृथक्करण", "लीचिंग", "गुरुत्व पृथक्करण"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "Which of the following is an example of a micromolecule?",
    question_hi: "निम्नलिखित में से कौन एक सूक्ष्म अणु का उदाहरण है?",
    options_en: ["Starch", "Protein", "Water", "DNA"],
    options_hi: ["स्टार्च", "प्रोटीन", "जल", "डीएनए"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "Which compound contains a carbonyl group?",
    question_hi: "कौन सा यौगिक कार्बोनिल समूह रखता है?",
    options_en: ["Methanol", "Ethanol", "Propanone", "Ethane"],
    options_hi: ["मीथेनॉल", "एथेनॉल", "प्रोपेनोन", "एथेन"],
    answer: 3,
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "Which of the following compounds will show geometrical isomerism?",
    question_hi: "निम्नलिखित में से कौन सा यौगिक ज्यामितीय समावयवता दिखाएगा?",
    options_en: ["But-1-ene", "But-2-ene", "Propane", "Ethane"],
    options_hi: ["ब्यूट-1-इन", "ब्यूट-2-इन", "प्रोपेन", "एथेन"],
    answer: 2,
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "Which one is the correct monomer of natural rubber?",
    question_hi: "प्राकृतिक रबर का सही मोनोमर कौन सा है?",
    options_en: ["Isoprene", "Styrene", "Ethene", "Propene"],
    options_hi: ["आइसोप्रीन", "स्टाइरीन", "एथीन", "प्रोपीन"],
    answer: 1,
    attempted: false,
    selected: null
  }   
  ];
  
// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
let timerInterval;

function loadQuestion(index) {
    const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
    const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

    document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    optionsArray.forEach(option => {
        optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
    });

    updateCircles();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateCircles();
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

function updateCircles() {
    const circleContainer = document.getElementById("circleContainer");
    circleContainer.innerHTML = "";
    const start = currentCirclePage * circlesPerPage;
    const end = Math.min(start + circlesPerPage, questions.length);

    for (let i = start; i < end; i++) {
        const q = questions[i];
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

function prevCirclePage() {
    if (currentCirclePage > 0) {
        currentCirclePage--;
        updateCircles();
    }
}

function nextCirclePage() {
    if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
        currentCirclePage++;
        updateCircles();
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0, notAttempted = 0, score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting the quiz automatically.");
            submitQuiz();
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

window.onload = function () {
    startTimer();
    loadQuestion(currentQuestion);
};
