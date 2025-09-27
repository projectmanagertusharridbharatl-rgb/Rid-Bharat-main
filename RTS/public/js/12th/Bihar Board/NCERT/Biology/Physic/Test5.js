const questions = [
  {
    num: 1,
    question_en: "What is the formula for the magnetic field around a straight current-carrying conductor?",
    question_hi: "एक सीधी धारा प्रवाहित करने वाले चालक के चारों ओर चुंबकीय क्षेत्र का सूत्र क्या है?",
    options_en: ["B = μ₀I / 2πr", "B = μ₀I / 2r", "B = μ₀I / πr", "B = μ₀I / r"],
    options_hi: ["B = μ₀I / 2πr", "B = μ₀I / 2r", "B = μ₀I / πr", "B = μ₀I / r"],
    answer: "B = μ₀I / 2πr",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which lens is used in the human eye to focus light?",
    question_hi: "मानव आंख में प्रकाश को एकत्रित करने के लिए कौन सा लेंस प्रयोग किया जाता है?",
    options_en: ["Concave lens", "Convex lens", "Plano-convex lens", "Concave-convex lens"],
    options_hi: ["विहीन लेंस", "उत्तल लेंस", "प्लानो-उत्तल लेंस", "विहीन-उत्तल लेंस"],
    answer: "Convex lens",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the focal length of a concave lens?",
    question_hi: "विहीन लेंस का फोकल लंबाई क्या है?",
    options_en: ["Positive", "Negative", "Zero", "Infinity"],
    options_hi: ["सकारात्मक", "नकारात्मक", "शून्य", "अनंत"],
    answer: "Negative",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which of the following phenomena is explained by wave optics?",
    question_hi: "निम्नलिखित में से कौन सा घटनाक्रम तरंगीय प्रकाशिकी द्वारा समझाया जाता है?",
    options_en: ["Reflection", "Refraction", "Diffraction", "Polarization"],
    options_hi: ["प्रतिबिंब", "अपवर्तन", "विक्षेपण", "ध्रुवीकरण"],
    answer: "Diffraction",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What is the critical angle for total internal reflection?",
    question_hi: "कुल आंतरिक परावृत्ति के लिए महत्वपूर्ण कोण क्या है?",
    options_en: ["90°", "60°", "45°", "30°"],
    options_hi: ["90°", "60°", "45°", "30°"],
    answer: "90°",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What is the unit of magnification in optics?",
    question_hi: "ऑप्टिक्स में आवर्धन की इकाई क्या है?",
    options_en: ["Diopter", "Meter", "No unit", "Radian"],
    options_hi: ["डायोप्टर", "मीटर", "कोई इकाई नहीं", "रेडियन"],
    answer: "No unit",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which optical instrument is used to correct myopia?",
    question_hi: "मायोपिया को सुधारने के लिए कौन सा ऑप्टिकल उपकरण प्रयोग किया जाता है?",
    options_en: ["Concave lens", "Convex lens", "Bifocal lens", "Prism"],
    options_hi: ["विहीन लेंस", "उत्तल लेंस", "द्वैध लेंस", "प्रिज्म"],
    answer: "Concave lens",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the primary function of a convex lens?",
    question_hi: "उत्तल लेंस का प्राथमिक कार्य क्या है?",
    options_en: ["To diverge light", "To focus light", "To reflect light", "To bend light"],
    options_hi: ["प्रकाश को फैलाना", "प्रकाश को एकत्रित करना", "प्रकाश को परावर्तित करना", "प्रकाश को मोड़ना"],
    answer: "To focus light",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What causes rainbow formation in the sky?",
    question_hi: "आसमान में इंद्रधनुष के बनने का कारण क्या है?",
    options_en: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
    options_hi: ["प्रतिबिंब", "अपवर्तन", "विक्षेपण", "विखंडन"],
    answer: "Dispersion",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which phenomenon occurs when light passes from one medium to another?",
    question_hi: "कौन सा घटनाक्रम तब होता है जब प्रकाश एक माध्यम से दूसरे माध्यम में जाता है?",
    options_en: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
    options_hi: ["प्रतिबिंब", "अपवर्तन", "विक्षेपण", "विखंडन"],
    answer: "Refraction",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the main cause of dispersion of light in a prism?",
    question_hi: "प्रिज्म में प्रकाश के विखंडन का मुख्य कारण क्या है?",
    options_en: ["Reflection", "Different wavelengths", "Diffraction", "Polarization"],
    options_hi: ["प्रतिबिंब", "विभिन्न तरंगदैर्ध्य", "विक्षेपण", "ध्रुवीकरण"],
    answer: "Different wavelengths",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the term for the bending of light as it passes around the edge of an obstacle?",
    question_hi: "जब प्रकाश किसी अवरोधक के किनारे से गुजरता है तो उसे कौन सा शब्द कहते हैं?",
    options_en: ["Reflection", "Refraction", "Diffraction", "Polarization"],
    options_hi: ["प्रतिबिंब", "अपवर्तन", "विक्षेपण", "ध्रुवीकरण"],
    answer: "Diffraction",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which of the following is not a part of the human eye?",
    question_hi: "निम्नलिखित में से कौन सा मानव आंख का भाग नहीं है?",
    options_en: ["Cornea", "Lens", "Retina", "Prism"],
    options_hi: ["कॉर्निया", "लेंस", "रेटिना", "प्रिज्म"],
    answer: "Prism",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What type of lens is used in a magnifying glass?",
    question_hi: "आलोचनात्मक लेंस किस प्रकार का लेंस होता है?",
    options_en: ["Concave lens", "Convex lens", "Bifocal lens", "Cylindrical lens"],
    options_hi: ["विहीन लेंस", "उत्तल लेंस", "द्वैध लेंस", "सिलिंड्रिकल लेंस"],
    answer: "Convex lens",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the focal length of a convex lens?",
    question_hi: "उत्तल लेंस की फोकल लंबाई क्या होती है?",
    options_en: ["Positive", "Negative", "Zero", "Infinity"],
    options_hi: ["सकारात्मक", "नकारात्मक", "शून्य", "अनंत"],
    answer: "Positive",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "What is the phenomenon responsible for the formation of a mirage?",
    question_hi: "मीराज के बनने के लिए जिम्मेदार घटना क्या है?",
    options_en: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
    options_hi: ["प्रतिबिंब", "अपवर्तन", "विक्षेपण", "विखंडन"],
    answer: "Refraction",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which type of mirror is used in a shaving mirror?",
    question_hi: "शेविंग मिरर में किस प्रकार का दर्पण प्रयोग किया जाता है?",
    options_en: ["Concave mirror", "Convex mirror", "Plane mirror", "None of the above"],
    options_hi: ["विहीन दर्पण", "उत्तल दर्पण", "समतल दर्पण", "उपर्युक्त में से कोई नहीं"],
    answer: "Concave mirror",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the effect of increasing the wavelength of light?",
    question_hi: "प्रकाश की तरंगदैर्ध्य बढ़ाने का प्रभाव क्या होता है?",
    options_en: ["Increase in frequency", "Increase in speed", "Decrease in speed", "Decrease in frequency"],
    options_hi: ["आवृत्ति में वृद्धि", "गति में वृद्धि", "गति में कमी", "आवृत्ति में कमी"],
    answer: "Decrease in frequency",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the focal length of a plane mirror?",
    question_hi: "समतल दर्पण की फोकल लंबाई क्या होती है?",
    options_en: ["Infinity", "Zero", "10 cm", "Depends on object"],
    options_hi: ["अनंत", "शून्य", "10 सेमी", "वस्तु पर निर्भर"],
    answer: "Infinity",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which type of lens is used to correct myopia?",
    question_hi: "मायोपिया को सुधारने के लिए किस प्रकार के लेंस का उपयोग किया जाता है?",
    options_en: ["Convex lens", "Concave lens", "Cylindrical lens", "None"],
    options_hi: ["उत्तल लेंस", "अवतल लेंस", "सिलिंडर लेंस", "कोई नहीं"],
    answer: "Concave lens",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "The phenomenon of bending of light around the corners is called:",
    question_hi: "कोनों के चारों ओर प्रकाश के मुड़ने की घटना को क्या कहते हैं?",
    options_en: ["Reflection", "Refraction", "Interference", "Diffraction"],
    options_hi: ["परावर्तन", "अपवर्तन", "हस्तक्षेप", "प्रकीर्णन"],
    answer: "Diffraction",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "In which medium does light travel the slowest?",
    question_hi: "किस माध्यम में प्रकाश सबसे धीमा चलता है?",
    options_en: ["Air", "Glass", "Water", "Vacuum"],
    options_hi: ["हवा", "कांच", "पानी", "निर्वात"],
    answer: "Glass",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which color of light is least deviated in a prism?",
    question_hi: "प्रिज़्म में कौन सा रंग सबसे कम विक्षेपित होता है?",
    options_en: ["Red", "Blue", "Green", "Violet"],
    options_hi: ["लाल", "नीला", "हरा", "बैंगनी"],
    answer: "Red",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What is the angle of incidence for total internal reflection in water to air?",
    question_hi: "जल से वायु में पूर्ण आंतरिक परावर्तन के लिए आपतन कोण क्या होता है?",
    options_en: ["Greater than critical angle", "Less than critical angle", "Equal to 90°", "Zero"],
    options_hi: ["क्रांतिक कोण से अधिक", "क्रांतिक कोण से कम", "90° के बराबर", "शून्य"],
    answer: "Greater than critical angle",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "What is the condition for constructive interference?",
    question_hi: "रचनात्मक हस्तक्षेप के लिए शर्त क्या है?",
    options_en: ["Path difference = nλ", "Path difference = (2n+1)λ/2", "No path difference", "Wavelength is zero"],
    options_hi: ["पथ भेद = nλ", "पथ भेद = (2n+1)λ/2", "कोई पथ भेद नहीं", "तरंगदैर्ध्य शून्य है"],
    answer: "Path difference = nλ",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which phenomenon proves the wave nature of light?",
    question_hi: "कौन सी घटना प्रकाश की तरंग प्रकृति को सिद्ध करती है?",
    options_en: ["Interference", "Reflection", "Refraction", "Photoelectric effect"],
    options_hi: ["हस्तक्षेप", "परावर्तन", "अपवर्तन", "प्रकाश-विद्युत प्रभाव"],
    answer: "Interference",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which optical device uses total internal reflection?",
    question_hi: "कौन सा ऑप्टिकल उपकरण पूर्ण आंतरिक परावर्तन का उपयोग करता है?",
    options_en: ["Prism", "Lens", "Mirror", "Plane glass"],
    options_hi: ["प्रिज्म", "लेंस", "दर्पण", "समतल कांच"],
    answer: "Prism",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What is the nature of the image formed by a convex lens when the object is placed beyond 2F?",
    question_hi: "जब वस्तु उत्तल लेंस से 2F से अधिक दूरी पर रखी जाती है, तो बनने वाली छवि का स्वरूप क्या होता है?",
    options_en: ["Real, inverted, diminished", "Virtual, erect, magnified", "Real, inverted, magnified", "Virtual, inverted, same size"],
    options_hi: ["वास्तविक, उल्टी, छोटी", "आभासी, सीधी, बड़ी", "वास्तविक, उल्टी, बड़ी", "आभासी, उल्टी, समान आकार"],
    answer: "Real, inverted, diminished",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which part of the eye controls the amount of light entering?",
    question_hi: "आंख का कौन सा भाग आंख में प्रवेश करने वाली रोशनी की मात्रा को नियंत्रित करता है?",
    options_en: ["Retina", "Lens", "Cornea", "Iris"],
    options_hi: ["रेटिना", "लेंस", "कॉर्निया", "आईरिस"],
    answer: "Iris",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What type of lens is used in a magnifying glass?",
    question_hi: "आवर्धक कांच में किस प्रकार का लेंस प्रयोग किया जाता है?",
    options_en: ["Convex", "Concave", "Cylindrical", "Plano-concave"],
    options_hi: ["उत्तल", "अवतल", "सिलिंडर", "प्लेनो-अवतल"],
    answer: "Convex",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which color deviates most in dispersion?",
    question_hi: "विक्षेपण में कौन सा रंग सबसे अधिक विक्षेपित होता है?",
    options_en: ["Red", "Green", "Yellow", "Violet"],
    options_hi: ["लाल", "हरा", "पीला", "बैंगनी"],
    answer: "Violet",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which optical instrument has both objective and eyepiece lenses?",
    question_hi: "किस ऑप्टिकल यंत्र में ऑब्जेक्टिव और आईपीस दोनों लेंस होते हैं?",
    options_en: ["Microscope", "Magnifying glass", "Prism", "Plane mirror"],
    options_hi: ["सूक्ष्मदर्शी", "आवर्धक कांच", "प्रिज्म", "समतल दर्पण"],
    answer: "Microscope",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "What is lateral inversion?",
    question_hi: "पार्श्व प्रतिवर्तन क्या है?",
    options_en: ["Up and down reversal", "Side-to-side reversal", "Image enlargement", "Image inversion"],
    options_hi: ["ऊपर और नीचे उलटना", "पार्श्व उलटना", "छवि का बड़ा होना", "छवि का उलटना"],
    answer: "Side-to-side reversal",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which property of light enables vision in humans?",
    question_hi: "प्रकाश की कौन सी विशेषता मनुष्यों को देखने में सक्षम बनाती है?",
    options_en: ["Reflection", "Refraction", "Transmission", "Scattering"],
    options_hi: ["परावर्तन", "अपवर्तन", "संप्रेषण", "प्रकीर्णन"],
    answer: "Reflection",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "The SI unit of power of a lens is:",
    question_hi: "लेंस की शक्ति की SI इकाई क्या है?",
    options_en: ["Diopter", "Watt", "Newton", "Lux"],
    options_hi: ["डायोप्टर", "वाट", "न्यूटन", "लक्स"],
    answer: "Diopter",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which mirror is used in a rear-view mirror of vehicles?",
    question_hi: "वाहनों के रियर-व्यू मिरर में कौन सा दर्पण प्रयोग किया जाता है?",
    options_en: ["Concave", "Convex", "Plane", "Cylindrical"],
    options_hi: ["अवतल", "उत्तल", "समतल", "सिलिंडर"],
    answer: "Convex",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "The ability of the eye to focus on near and far objects is called:",
    question_hi: "निकट और दूर की वस्तुओं पर ध्यान केंद्रित करने की आंख की क्षमता को क्या कहा जाता है?",
    options_en: ["Accommodation", "Adaptation", "Perception", "Convergence"],
    options_hi: ["समायोजन", "अनुकूलन", "अनुभूति", "संमिलन"],
    answer: "Accommodation",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which device splits white light into its components?",
    question_hi: "सफेद प्रकाश को उसके घटकों में विभाजित करने वाला उपकरण कौन सा है?",
    options_en: ["Prism", "Mirror", "Lens", "Glass slab"],
    options_hi: ["प्रिज्म", "दर्पण", "लेंस", "कांच की पट्टी"],
    answer: "Prism",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "The mirror formula is:",
    question_hi: "दर्पण सूत्र क्या है?",
    options_en: ["1/f = 1/v + 1/u", "1/f = 1/u - 1/v", "1/f = 1/v - 1/u", "f = u + v"],
    options_hi: ["1/f = 1/v + 1/u", "1/f = 1/u - 1/v", "1/f = 1/v - 1/u", "f = u + v"],
    answer: "1/f = 1/v - 1/u",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which optical phenomenon is used in optical fibers?",
    question_hi: "ऑप्टिकल फाइबर में कौन सी प्रकाशीय घटना का उपयोग होता है?",
    options_en: ["Total internal reflection", "Refraction", "Scattering", "Diffraction"],
    options_hi: ["पूर्ण आंतरिक परावर्तन", "अपवर्तन", "प्रकीर्णन", "प्रकीर्णन"],
    answer: "Total internal reflection",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "In Young's double-slit experiment, what causes the formation of dark fringes?",
    question_hi: "यंग के डबल-स्लिट प्रयोग में अंधेरे फ्रिंज बनने का कारण क्या है?",
    options_en: ["Constructive interference", "Destructive interference", "Reflection", "Diffraction"],
    options_hi: ["रचनात्मक हस्तक्षेप", "विनाशकारी हस्तक्षेप", "परावर्तन", "प्रकीर्णन"],
    answer: "Destructive interference",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which of the following is not a property of laser light?",
    question_hi: "निम्नलिखित में से कौन लेजर प्रकाश का गुण नहीं है?",
    options_en: ["Monochromatic", "Coherent", "Divergent", "Highly directional"],
    options_hi: ["एकरंगी", "समरूपी", "विचलित", "अत्यधिक दिशात्मक"],
    answer: "Divergent",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the frequency of red light approximately?",
    question_hi: "लाल प्रकाश की आवृत्ति लगभग कितनी होती है?",
    options_en: ["4 × 10¹⁴ Hz", "7 × 10¹⁴ Hz", "1 × 10¹⁶ Hz", "1 × 10⁸ Hz"],
    options_hi: ["4 × 10¹⁴ Hz", "7 × 10¹⁴ Hz", "1 × 10¹⁶ Hz", "1 × 10⁸ Hz"],
    answer: "4 × 10¹⁴ Hz",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which lens is used in the human eye?",
    question_hi: "मानव आंख में किस प्रकार का लेंस होता है?",
    options_en: ["Convex lens", "Concave lens", "Plane lens", "None"],
    options_hi: ["उत्तल लेंस", "अवतल लेंस", "समतल लेंस", "कोई नहीं"],
    answer: "Convex lens",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "The eye defect in which a person can see nearby objects clearly but not distant ones is:",
    question_hi: "वह नेत्र दोष जिसमें व्यक्ति पास की वस्तुएं स्पष्ट देख सकता है लेकिन दूर की नहीं, क्या कहलाता है?",
    options_en: ["Hypermetropia", "Myopia", "Astigmatism", "Presbyopia"],
    options_hi: ["हाइपरमेट्रोपिया", "मायोपिया", "एस्टिगमैटिज़्म", "प्रेसबायोपिया"],
    answer: "Myopia",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which of the following cannot be seen through a microscope?",
    question_hi: "निम्नलिखित में से किसे सूक्ष्मदर्शी से नहीं देखा जा सकता?",
    options_en: ["Bacteria", "Viruses", "Atoms", "Fungi"],
    options_hi: ["बैक्टीरिया", "वायरस", "परमाणु", "फफूंदी"],
    answer: "Atoms",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which quantity changes when light passes from one medium to another?",
    question_hi: "जब प्रकाश एक माध्यम से दूसरे में जाता है, तो कौन सी मात्रा बदलती है?",
    options_en: ["Frequency", "Wavelength", "Energy", "Amplitude"],
    options_hi: ["आवृत्ति", "तरंगदैर्ध्य", "ऊर्जा", "आयाम"],
    answer: "Wavelength",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which principle explains the working of optical fiber?",
    question_hi: "ऑप्टिकल फाइबर के कार्य को कौन सा सिद्धांत समझाता है?",
    options_en: ["Refraction", "Dispersion", "Total internal reflection", "Polarization"],
    options_hi: ["अपवर्तन", "विक्षेपण", "पूर्ण आंतरिक परावर्तन", "ध्रुवण"],
    answer: "Total internal reflection",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which mirror is used in solar cookers?",
    question_hi: "सौर कुकरों में किस प्रकार का दर्पण प्रयोग किया जाता है?",
    options_en: ["Concave mirror", "Convex mirror", "Plane mirror", "Parabolic mirror"],
    options_hi: ["अवतल दर्पण", "उत्तल दर्पण", "समतल दर्पण", "पैराबोलिक दर्पण"],
    answer: "Concave mirror",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which color has the highest refractive index in glass?",
    question_hi: "कांच में किस रंग का अपवर्तनांक सबसे अधिक होता है?",
    options_en: ["Red", "Violet", "Blue", "Green"],
    options_hi: ["लाल", "बैंगनी", "नीला", "हरा"],
    answer: "Violet",
    attempted: false,
    selected: ""
  }
     // Continue adding more questions up to 30
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
