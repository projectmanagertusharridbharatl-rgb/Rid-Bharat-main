const questions = [
{
    num: 1,
    question_en: "Which of the following is not a colligative property?",
    question_hi: "निम्नलिखित में से कौन एक परासंजात गुण नहीं है?",
    options_en: ["Relative lowering of vapor pressure", "Boiling point elevation", "Freezing point depression", "Viscosity"],
    options_hi: ["वाष्प दाब का सापेक्ष ह्रास", "उबाल बिंदु में वृद्धि", "जमाव बिंदु में कमी", "सान्द्रता"],
    answer_en: "Viscosity",
    answer_hi: "सान्द्रता",
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "Which property depends only on the number of solute particles and not on their nature?",
    question_hi: "कौन सा गुण केवल घोल में उपस्थित कणों की संख्या पर निर्भर करता है, उनके प्रकार पर नहीं?",
    options_en: ["Colligative properties", "Chemical properties", "Physical properties", "Optical properties"],
    options_hi: ["परासंजात गुण", "रासायनिक गुण", "भौतिक गुण", "प्रकाशीय गुण"],
    answer_en: "Colligative properties",
    answer_hi: "परासंजात गुण",
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "The boiling point of a solution is always ____ compared to the pure solvent.",
    question_hi: "एक विलयन का उबलता बिंदु शुद्ध विलायक की तुलना में हमेशा ____ होता है।",
    options_en: ["Higher", "Lower", "Same", "Unpredictable"],
    options_hi: ["उच्च", "निम्न", "समान", "अनिश्चित"],
    answer_en: "Higher",
    answer_hi: "उच्च",
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "Freezing point depression is caused due to:",
    question_hi: "जमाव बिंदु में कमी किस कारण होती है?",
    options_en: ["Increase in vapor pressure", "Decrease in vapor pressure", "Increase in boiling point", "Decrease in boiling point"],
    options_hi: ["वाष्प दाब में वृद्धि", "वाष्प दाब में कमी", "उबाल बिंदु में वृद्धि", "उबाल बिंदु में कमी"],
    answer_en: "Decrease in vapor pressure",
    answer_hi: "वाष्प दाब में कमी",
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "Which of the following formulas is used to calculate molality (m)?",
    question_hi: "मोलालिटी (m) निकालने का सही सूत्र कौन सा है?",
    options_en: ["moles of solute / kg of solvent", "moles of solute / liters of solution", "mass of solute / volume of solvent", "moles of solute / volume of solution"],
    options_hi: ["घुलनशील के मोल / विलायक के किलोग्राम", "घुलनशील के मोल / विलयन के लीटर", "घुलनशील का द्रव्यमान / विलायक का आयतन", "घुलनशील के मोल / विलयन का आयतन"],
    answer_en: "moles of solute / kg of solvent",
    answer_hi: "घुलनशील के मोल / विलायक के किलोग्राम",
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "Which colligative property causes the lowering of vapor pressure?",
    question_hi: "कौन सा परासंजात गुण वाष्प दाब को कम करता है?",
    options_en: ["Osmotic pressure", "Boiling point elevation", "Relative lowering of vapor pressure", "Freezing point depression"],
    options_hi: ["ऑस्मोटिक दबाव", "उबाल बिंदु में वृद्धि", "वाष्प दाब का सापेक्ष ह्रास", "जमाव बिंदु में कमी"],
    answer_en: "Relative lowering of vapor pressure",
    answer_hi: "वाष्प दाब का सापेक्ष ह्रास",
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "The unit of osmotic pressure is:",
    question_hi: "ऑस्मोटिक दबाव की इकाई क्या है?",
    options_en: ["atm", "Pascal", "Newton", "Joule"],
    options_hi: ["एटीएम", "पास्कल", "न्यूटन", "जूल"],
    answer_en: "atm",
    answer_hi: "एटीएम",
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "Osmosis is defined as:",
    question_hi: "ऑस्मोसिस को परिभाषित करें:",
    options_en: ["Movement of solvent from dilute to concentrated solution", "Movement of solvent from concentrated to dilute solution", "Movement of solute from dilute to concentrated solution", "Movement of solute from concentrated to dilute solution"],
    options_hi: ["विलयन के पतले भाग से गाढ़े भाग की ओर विलायक का संचलन", "विलयन के गाढ़े भाग से पतले भाग की ओर विलायक का संचलन", "घुलनशील का पतले से गाढ़े भाग की ओर संचलन", "घुलनशील का गाढ़े से पतले भाग की ओर संचलन"],
    answer_en: "Movement of solvent from dilute to concentrated solution",
    answer_hi: "विलयन के पतले भाग से गाढ़े भाग की ओर विलायक का संचलन",
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "Which is the correct relation for boiling point elevation?",
    question_hi: "उबाल बिंदु वृद्धि का सही संबंध कौन सा है?",
    options_en: ["ΔTb = Kb × m", "ΔTb = Kf × m", "ΔTb = π / CRT", "ΔTb = m / Kb"],
    options_hi: ["ΔTb = Kb × m", "ΔTb = Kf × m", "ΔTb = π / CRT", "ΔTb = m / Kb"],
    answer_en: "ΔTb = Kb × m",
    answer_hi: "ΔTb = Kb × m",
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "Which of the following is a characteristic of an ideal solution?",
    question_hi: "निम्नलिखित में से आदर्श विलयन की विशेषता क्या है?",
    options_en: ["No change in enthalpy on mixing", "Positive deviation from Raoult's law", "Negative deviation from Raoult's law", "Increased vapor pressure"],
    options_hi: ["मिश्रण परenthalpy में कोई परिवर्तन नहीं", "Raoult के नियम से सकारात्मक विचलन", "Raoult के नियम से नकारात्मक विचलन", "वाष्प दाब में वृद्धि"],
    answer_en: "No change in enthalpy on mixing",
    answer_hi: "मिश्रण परenthalpy में कोई परिवर्तन नहीं",
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "Which of the following affects the magnitude of colligative properties?",
    question_hi: "निम्नलिखित में से कौन परासंजात गुणों की मात्रा को प्रभावित करता है?",
    options_en: ["Number of particles", "Nature of solute", "Nature of solvent", "Color of solution"],
    options_hi: ["कणों की संख्या", "घुलनशील का प्रकार", "विलायक का प्रकार", "विलयन का रंग"],
    answer_en: "Number of particles",
    answer_hi: "कणों की संख्या",
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "Raoult's law applies to:",
    question_hi: "Raoult का नियम किस पर लागू होता है?",
    options_en: ["Ideal solutions", "Non-ideal solutions", "Suspensions", "Colloids"],
    options_hi: ["आदर्श विलयन", "गैर-आदर्श विलयन", "निलंबन", "कोलॉइड"],
    answer_en: "Ideal solutions",
    answer_hi: "आदर्श विलयन",
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "Which of the following is the formula for osmotic pressure?",
    question_hi: "ऑस्मोटिक दबाव के लिए सही सूत्र कौन सा है?",
    options_en: ["π = MRT", "π = mRT", "π = Kb × m", "π = Kf × m"],
    options_hi: ["π = MRT", "π = mRT", "π = Kb × m", "π = Kf × m"],
    answer_en: "π = MRT",
    answer_hi: "π = MRT",
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "Which property causes an increase in boiling point of a solution?",
    question_hi: "कौन सा गुण विलयन के उबाल बिंदु में वृद्धि करता है?",
    options_en: ["Boiling point elevation", "Freezing point depression", "Relative lowering of vapor pressure", "Osmotic pressure"],
    options_hi: ["उबाल बिंदु में वृद्धि", "जमाव बिंदु में कमी", "वाष्प दाब का सापेक्ष ह्रास", "ऑस्मोटिक दबाव"],
    answer_en: "Boiling point elevation",
    answer_hi: "उबाल बिंदु में वृद्धि",
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "Which one of the following is true for non-volatile solute in a solution?",
    question_hi: "विलयन में गैर-वाष्पशील घुलनशील के लिए निम्नलिखित में से कौन सही है?",
    options_en: ["It lowers vapor pressure", "It raises vapor pressure", "It has no effect on vapor pressure", "It increases boiling point"],
    options_hi: ["यह वाष्प दाब को कम करता है", "यह वाष्प दाब को बढ़ाता है", "इसका वाष्प दाब पर कोई प्रभाव नहीं", "यह उबाल बिंदु को बढ़ाता है"],
    answer_en: "It lowers vapor pressure",
    answer_hi: "यह वाष्प दाब को कम करता है",
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "In colligative properties, the solute particles are considered as:",
    question_hi: "परासंजात गुणों में, घुलनशील कणों को किस रूप में माना जाता है?",
    options_en: ["Non-volatile solute particles", "Volatile solute particles", "Solvent particles", "None of these"],
    options_hi: ["गैर-वाष्पशील घुलनशील कण", "वाष्पशील घुलनशील कण", "विलायक कण", "इनमें से कोई नहीं"],
    answer_en: "Non-volatile solute particles",
    answer_hi: "गैर-वाष्पशील घुलनशील कण",
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "The lowering of vapor pressure of a solvent is directly proportional to:",
    question_hi: "विलायक के वाष्प दाब में कमी सीधे किसके समानुपाती होती है?",
    options_en: ["Mole fraction of solute", "Molecular weight of solute", "Density of solution", "Boiling point of solvent"],
    options_hi: ["घुलनशील के मोल अंश", "घुलनशील का आणविक भार", "विलयन का घनत्व", "विलायक का उबाल बिंदु"],
    answer_en: "Mole fraction of solute",
    answer_hi: "घुलनशील के मोल अंश",
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "Which of the following increases with addition of a non-volatile solute?",
    question_hi: "गैर-वाष्पशील घुलनशील के मिलाने से निम्नलिखित में से क्या बढ़ता है?",
    options_en: ["Boiling point", "Vapor pressure", "Freezing point", "Osmotic pressure"],
    options_hi: ["उबाल बिंदु", "वाष्प दाब", "जमाव बिंदु", "ऑस्मोटिक दबाव"],
    answer_en: "Boiling point",
    answer_hi: "उबाल बिंदु",
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "Which of the following is a measure of the tendency of solvent to move through a semipermeable membrane?",
    question_hi: "निम्नलिखित में से कौन विलायक के सेमीपरमीबल झिल्ली से गुजरने की प्रवृत्ति का माप है?",
    options_en: ["Osmotic pressure", "Vapor pressure", "Boiling point elevation", "Freezing point depression"],
    options_hi: ["ऑस्मोटिक दबाव", "वाष्प दाब", "उबाल बिंदु में वृद्धि", "जमाव बिंदु में कमी"],
    answer_en: "Osmotic pressure",
    answer_hi: "ऑस्मोटिक दबाव",
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "What happens to freezing point of solvent on adding solute?",
    question_hi: "घुलनशील मिलाने पर विलायक के जमाव बिंदु में क्या होता है?",
    options_en: ["It decreases", "It increases", "It remains same", "It fluctuates"],
    options_hi: ["यह कम हो जाता है", "यह बढ़ जाता है", "यह समान रहता है", "यह उतार-चढ़ाव करता है"],
    answer_en: "It decreases",
    answer_hi: "यह कम हो जाता है",
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "Which of the following colligative properties is used to determine molar mass of a solute?",
    question_hi: "मोलर द्रव्यमान ज्ञात करने के लिए किस परासंजात गुण का उपयोग किया जाता है?",
    options_en: ["Osmotic pressure", "Boiling point elevation", "Freezing point depression", "All of these"],
    options_hi: ["ऑस्मोटिक दबाव", "उबाल बिंदु में वृद्धि", "जमाव बिंदु में कमी", "इन सभी का"],
    answer_en: "All of these",
    answer_hi: "इन सभी का",
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "Which colligative property involves the movement of solvent molecules through a semipermeable membrane?",
    question_hi: "कौन सा परासंजात गुण विलायक अणुओं के सेमीपरमीबल झिल्ली से संचरण को दर्शाता है?",
    options_en: ["Osmosis", "Boiling point elevation", "Freezing point depression", "Vapor pressure lowering"],
    options_hi: ["ऑस्मोसिस", "उबाल बिंदु में वृद्धि", "जमाव बिंदु में कमी", "वाष्प दाब में कमी"],
    answer_en: "Osmosis",
    answer_hi: "ऑस्मोसिस",
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "Raoult's law is valid for:",
    question_hi: "Raoult का नियम किनके लिए मान्य है?",
    options_en: ["Ideal solutions", "Non-ideal solutions", "Saturated solutions", "None of these"],
    options_hi: ["आदर्श विलयन", "गैर-आदर्श विलयन", "संतृप्त विलयन", "इनमें से कोई नहीं"],
    answer_en: "Ideal solutions",
    answer_hi: "आदर्श विलयन",
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "Which of the following is NOT a colligative property?",
    question_hi: "निम्नलिखित में से कौन परासंजात गुण नहीं है?",
    options_en: ["Freezing point depression", "Viscosity", "Boiling point elevation", "Osmotic pressure"],
    options_hi: ["जमाव बिंदु में कमी", "सान्द्रता", "उबाल बिंदु में वृद्धि", "ऑस्मोटिक दबाव"],
    answer_en: "Viscosity",
    answer_hi: "सान्द्रता",
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "Which colligative property can be used to determine molecular weight by measuring osmotic pressure?",
    question_hi: "ऑस्मोटिक दबाव मापकर आणविक द्रव्यमान ज्ञात करने के लिए कौन सा परासंजात गुण उपयोगी है?",
    options_en: ["Osmotic pressure", "Boiling point elevation", "Freezing point depression", "Vapor pressure lowering"],
    options_hi: ["ऑस्मोटिक दबाव", "उबाल बिंदु में वृद्धि", "जमाव बिंदु में कमी", "वाष्प दाब में कमी"],
    answer_en: "Osmotic pressure",
    answer_hi: "ऑस्मोटिक दबाव",
    attempted: false,
    selected: null
  },
   {
  num: 26,
  question_en: "What happens to the vapor pressure of a solution when a non-volatile solute is added?",
  question_hi: "जब एक अप्रसारित विलायक जोड़ा जाता है तो विलयन का वाष्प दाब क्या होता है?",
  options_en: ["Increases", "Decreases", "Remains same", "Becomes zero"],
  options_hi: ["बढ़ता है", "घटता है", "एक जैसा रहता है", "शून्य हो जाता है"],
  answer_en: "Decreases",
  answer_hi: "घटता है",
  attempted: false,
  selected: null
},
{
  num: 27,
  question_en: "Raoult's law is applicable to:",
  question_hi: "रौल्ट का नियम किसके लिए लागू होता है:",
  options_en: ["Ideal solutions", "Non-ideal solutions", "Both", "None"],
  options_hi: ["आदर्श विलयन", "गैर-आदर्श विलयन", "दोनों", "कोई नहीं"],
  answer_en: "Ideal solutions",
  answer_hi: "आदर्श विलयन",
  attempted: false,
  selected: null
},
{
  num: 28,
  question_en: "Osmotic pressure depends upon:",
  question_hi: "ऑस्मोटिक दाब किस पर निर्भर करता है:",
  options_en: ["Nature of solute", "Concentration of solute", "Temperature", "Both concentration and temperature"],
  options_hi: ["विलायक का प्रकार", "विलायक की सांद्रता", "तापमान", "सांद्रता और तापमान दोनों"],
  answer_en: "Both concentration and temperature",
  answer_hi: "सांद्रता और तापमान दोनों",
  attempted: false,
  selected: null
},
{
  num: 29,
  question_en: "The van’t Hoff factor for NaCl in aqueous solution is approximately:",
  question_hi: "जलयुक्त विलयन में NaCl के लिए वैन't हॉफ कारक लगभग है:",
  options_en: ["1", "2", "3", "4"],
  options_hi: ["1", "2", "3", "4"],
  answer_en: "2",
  answer_hi: "2",
  attempted: false,
  selected: null
},
{
  num: 30,
  question_en: "Which of the following is a colligative property?",
  question_hi: "निम्नलिखित में से कौन सा एक परासंजात गुण है?",
  options_en: ["Density", "Boiling point elevation", "Viscosity", "Surface tension"],
  options_hi: ["सघनता", "उबाल बिंदु में वृद्धि", "सान्द्रता", "सतह तनाव"],
  answer_en: "Boiling point elevation",
  answer_hi: "उबाल बिंदु में वृद्धि",
  attempted: false,
  selected: null
},
{
  num: 31,
  question_en: "Molality is defined as moles of solute per:",
  question_hi: "मोलैलिटी को परिभाषित किया जाता है विलायक के प्रति मोल के रूप में:",
  options_en: ["Kg of solvent", "Litre of solution", "Kg of solution", "Mole of solvent"],
  options_hi: ["विलायक के किलोग्राम", "विलयन के लीटर", "विलयन के किलोग्राम", "विलायक के मोल"],
  answer_en: "Kg of solvent",
  answer_hi: "विलायक के किलोग्राम",
  attempted: false,
  selected: null
},
{
  num: 32,
  question_en: "Boiling point elevation is directly proportional to:",
  question_hi: "उबाल बिंदु वृद्धि सीधे आनुपातिक है:",
  options_en: ["Molarity", "Molality", "Mole fraction", "Concentration in ppm"],
  options_hi: ["मोलरिटी", "मोलैलिटी", "मोल अंश", "पीपीएम में सांद्रता"],
  answer_en: "Molality",
  answer_hi: "मोलैलिटी",
  attempted: false,
  selected: null
},
{
  num: 33,
  question_en: "Freezing point depression occurs due to:",
  question_hi: "जमाव बिंदु में कमी किस कारण होती है:",
  options_en: ["Presence of solute", "Temperature decrease", "Pressure increase", "Viscosity increase"],
  options_hi: ["विलायक की उपस्थिति", "तापमान में कमी", "दबाव में वृद्धि", "सान्द्रता में वृद्धि"],
  answer_en: "Presence of solute",
  answer_hi: "विलायक की उपस्थिति",
  attempted: false,
  selected: null
},
{
  num: 34,
  question_en: "Which one is an example of an ideal solution?",
  question_hi: "निम्नलिखित में से आदर्श विलयन का उदाहरण कौन सा है?",
  options_en: ["Benzene and Toluene", "Water and Alcohol", "Water and Salt", "Sugar and Water"],
  options_hi: ["बेंजीन और टोलुएन", "पानी और अल्कोहल", "पानी और नमक", "चीनी और पानी"],
  answer_en: "Benzene and Toluene",
  answer_hi: "बेंजीन और टोलुएन",
  attempted: false,
  selected: null
},
{
  num: 35,
  question_en: "Vapor pressure lowering is due to:",
  question_hi: "वाष्प दाब का कमी किस कारण होती है:",
  options_en: ["Increase in temperature", "Presence of solute", "Decrease in solvent", "Increase in pressure"],
  options_hi: ["तापमान में वृद्धि", "विलायक की उपस्थिति", "विलायक की कमी", "दबाव में वृद्धि"],
  answer_en: "Presence of solute",
  answer_hi: "विलायक की उपस्थिति",
  attempted: false,
  selected: null
},
{
  num: 36,
  question_en: "Osmosis is the process of:",
  question_hi: "ऑस्मोसिस क्या है:",
  options_en: ["Diffusion of solvent through a semipermeable membrane", "Diffusion of solute through solvent", "Boiling of solution", "Freezing of solvent"],
  options_hi: ["अर्द्धपारगम्य झिल्ली से विलायक का प्रसार", "विलायक के माध्यम से विलायक का प्रसार", "विलयन का उबालना", "विलायक का जमना"],
  answer_en: "Diffusion of solvent through a semipermeable membrane",
  answer_hi: "अर्द्धपारगम्य झिल्ली से विलायक का प्रसार",
  attempted: false,
  selected: null
},
{
  num: 37,
  question_en: "Which factor affects the magnitude of freezing point depression?",
  question_hi: "जमाव बिंदु में कमी की मात्रा को कौन सा कारक प्रभावित करता है?",
  options_en: ["Molecular weight of solute", "Concentration of solute", "Temperature", "Pressure"],
  options_hi: ["विलायक का आणविक भार", "विलायक की सांद्रता", "तापमान", "दबाव"],
  answer_en: "Concentration of solute",
  answer_hi: "विलायक की सांद्रता",
  attempted: false,
  selected: null
},
{
  num: 38,
  question_en: "A solution containing 1 mole of solute in 1 litre of solution is called:",
  question_hi: "1 लीटर विलयन में 1 मोल विलायक वाला विलयन क्या कहलाता है?",
  options_en: ["Molar solution", "Molal solution", "Normal solution", "Percent solution"],
  options_hi: ["मोलर विलयन", "मोलल विलयन", "नॉर्मल विलयन", "प्रतिशत विलयन"],
  answer_en: "Molar solution",
  answer_hi: "मोलर विलयन",
  attempted: false,
  selected: null
},
{
  num: 39,
  question_en: "Colligative properties depend on:",
  question_hi: "परासंजात गुण किस पर निर्भर करते हैं:",
  options_en: ["Number of solute particles", "Nature of solute", "Nature of solvent", "Both nature of solute and solvent"],
  options_hi: ["विलायक कणों की संख्या", "विलायक का प्रकार", "विलायक का प्रकार", "विलायक और विलायक दोनों का प्रकार"],
  answer_en: "Number of solute particles",
  answer_hi: "विलायक कणों की संख्या",
  attempted: false,
  selected: null
},
{
  num: 40,
  question_en: "Which of the following increases on adding a solute?",
  question_hi: "विलायक जोड़ने पर निम्नलिखित में से क्या बढ़ता है?",
  options_en: ["Vapor pressure", "Boiling point", "Freezing point", "Volatility"],
  options_hi: ["वाष्प दाब", "उबाल बिंदु", "जमाव बिंदु", "वाष्पशीलता"],
  answer_en: "Boiling point",
  answer_hi: "उबाल बिंदु",
  attempted: false,
  selected: null
},
{
  num: 41,
  question_en: "The phenomenon of osmosis is important in:",
  question_hi: "ऑस्मोसिस की घटना किसमें महत्वपूर्ण है?",
  options_en: ["Plant cells", "Animal cells", "Both", "None"],
  options_hi: ["पौधे के कोशिकाएं", "प्राणी कोशिकाएं", "दोनों", "कोई नहीं"],
  answer_en: "Both",
  answer_hi: "दोनों",
  attempted: false,
  selected: null
},
{
  num: 42,
  question_en: "The molecular weight of a solute can be determined by measuring:",
  question_hi: "विलायक का आणविक भार किसे मापकर ज्ञात किया जा सकता है?",
  options_en: ["Osmotic pressure", "Boiling point elevation", "Freezing point depression", "All of these"],
  options_hi: ["ऑस्मोटिक दाब", "उबाल बिंदु वृद्धि", "जमाव बिंदु में कमी", "इन सभी"],
  answer_en: "All of these",
  answer_hi: "इन सभी",
  attempted: false,
  selected: null
},
{
  num: 43,
  question_en: "Raoult’s law states that vapor pressure of a solution:",
  question_hi: "रौल्ट का नियम कहता है कि विलयन का वाष्प दाब:",
  options_en: ["Is equal to vapor pressure of pure solvent", "Is less than vapor pressure of pure solvent", "Is more than vapor pressure of pure solvent", "Depends on temperature only"],
  options_hi: ["शुद्ध विलायक के वाष्प दाब के बराबर होता है", "शुद्ध विलायक के वाष्प दाब से कम होता है", "शुद्ध विलायक के वाष्प दाब से अधिक होता है", "केवल तापमान पर निर्भर करता है"],
  answer_en: "Is less than vapor pressure of pure solvent",
  answer_hi: "शुद्ध विलायक के वाष्प दाब से कम होता है",
  attempted: false,
  selected: null
},
{
  num: 44,
  question_en: "The unit of osmotic pressure is:",
  question_hi: "ऑस्मोटिक दाब की इकाई है:",
  options_en: ["atm", "Pascal", "mmHg", "All of these"],
  options_hi: ["एटीएम", "पास्कल", "मिमी मरकरी", "इन सभी"],
  answer_en: "All of these",
  answer_hi: "इन सभी",
  attempted: false,
  selected: null
},
{
  num: 45,
  question_en: "Molality is independent of:",
  question_hi: "मोलैलिटी किससे स्वतंत्र है?",
  options_en: ["Temperature", "Pressure", "Concentration", "Both temperature and pressure"],
  options_hi: ["तापमान", "दबाव", "सांद्रता", "तापमान और दबाव दोनों"],
  answer_en: "Temperature",
  answer_hi: "तापमान",
  attempted: false,
  selected: null
},
{
  num: 46,
  question_en: "In which colligative property the temperature decreases?",
  question_hi: "किस परासंजात गुण में तापमान घटता है?",
  options_en: ["Freezing point depression", "Boiling point elevation", "Osmotic pressure", "Vapor pressure lowering"],
  options_hi: ["जमाव बिंदु में कमी", "उबाल बिंदु वृद्धि", "ऑस्मोटिक दाब", "वाष्प दाब कमी"],
  answer_en: "Freezing point depression",
  answer_hi: "जमाव बिंदु में कमी",
  attempted: false,
  selected: null
},
{
  num: 47,
  question_en: "What is the effect of adding solute on vapor pressure of a solvent?",
  question_hi: "विलायक में विलायक जोड़ने का वाष्प दाब पर क्या प्रभाव पड़ता है?",
  options_en: ["Increases vapor pressure", "Decreases vapor pressure", "No change", "Depends on solute"],
  options_hi: ["वाष्प दाब बढ़ता है", "वाष्प दाब घटता है", "कोई परिवर्तन नहीं", "विलायक पर निर्भर करता है"],
  answer_en: "Decreases vapor pressure",
  answer_hi: "वाष्प दाब घटता है",
  attempted: false,
  selected: null
},
{
  num: 48,
  question_en: "The boiling point of water in presence of solute:",
  question_hi: "विलायक की उपस्थिति में पानी का उबाल बिंदु:",
  options_en: ["Increases", "Decreases", "Remains same", "Becomes zero"],
  options_hi: ["बढ़ता है", "घटता है", "एक जैसा रहता है", "शून्य हो जाता है"],
  answer_en: "Increases",
  answer_hi: "बढ़ता है",
  attempted: false,
  selected: null
},
{
  num: 49,
  question_en: "The depression in freezing point is proportional to:",
  question_hi: "जमाव बिंदु में कमी आनुपातिक है:",
  options_en: ["Molarity of solute", "Molality of solute", "Mole fraction of solvent", "Density of solution"],
  options_hi: ["विलायक की मोलरिटी", "विलायक की मोलैलिटी", "विलायक का मोल अंश", "विलयन की सघनता"],
  answer_en: "Molality of solute",
  answer_hi: "विलायक की मोलैलिटी",
  attempted: false,
  selected: null
},
{
  num: 50,
  question_en: "The relative lowering of vapor pressure is equal to:",
  question_hi: "वाष्प दाब की सापेक्ष कमी के बराबर है:",
  options_en: ["Mole fraction of solvent", "Mole fraction of solute", "Molality", "Molarity"],
  options_hi: ["विलायक का मोल अंश", "विलायक का मोल अंश", "मोलैलिटी", "मोलरिटी"],
  answer_en: "Mole fraction of solute",
  answer_hi: "विलायक का मोल अंश",
  attempted: false,
  selected: null
}

];


// ========================== GLOBAL VARIABLES ==========================
let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
let timerInterval;

// ========================== QUIZ LOGIC ==========================
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

// ========================== QUESTION ATTEMPT LOGIC ==========================
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ========================== NAVIGATION CONTROLS ==========================
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

// ========================== SUBMIT & SCORE ==========================
function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0, notAttempted = 0, score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(`Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`);
}

// ========================== TIMER FUNCTION ==========================
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

// ========================== QUESTION NAVIGATION UI ==========================
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color};' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ========================== CAMERA & MOVEMENT LOGIC ==========================
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
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

    // ========================== RESIZE HANDLE ==========================
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

    // ========================== DRAG LOGIC ==========================
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

    // ========================== RESIZE LOGIC ==========================
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

    // ========================== CAMERA STREAM ==========================
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

// ========================== MOVEMENT DETECTION ==========================
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
                    alert("⚠️ Alert 1: Face not moving");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head not moving");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

// ========================== RESTART TEST ==========================
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

// ========================== PAGE LOAD ==========================
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); 
};
