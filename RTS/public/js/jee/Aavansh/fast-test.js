
const questions = [
    
    
        // Physics (1-15)
        {
            "num": 1,
            "question_en": "The dimensional formula for angular momentum is:",
            "question_hi": "कोणीय संवेग का विमीय सूत्र है:",
            "options_en": ["[ML²T⁻¹]", "[MLT⁻¹]", "[ML²T⁻²]", "[MLT]"],
            "options_hi": ["[ML²T⁻¹]", "[MLT⁻¹]", "[ML²T⁻²]", "[MLT]"],
            "answer_en": "[ML²T⁻¹]",
            "answer_hi": "[ML²T⁻¹]",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "A convex lens of focal length 20 cm forms a real image at 40 cm. What is the object distance?",
            "question_hi": "20 cm फोकस दूरी वाले उत्तल लेंस द्वारा 40 cm पर वास्तविक प्रतिबिंब बनता है। वस्तु की दूरी क्या है?",
            "options_en": ["10 cm", "20 cm", "30 cm", "40 cm"],
            "options_hi": ["10 सेमी", "20 सेमी", "30 सेमी", "40 सेमी"],
            "answer_en": "40 cm",
            "answer_hi": "40 सेमी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "The work done in moving a charge of 2 C across two points with a potential difference of 10 V is:",
            "question_hi": "10 V के विभवांतर वाले दो बिंदुओं के बीच 2 C आवेश को ले जाने में किया गया कार्य है:",
            "options_en": ["5 J", "10 J", "20 J", "40 J"],
            "options_hi": ["5 J", "10 J", "20 J", "40 J"],
            "answer_en": "20 J",
            "answer_hi": "20 J",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "Newton's third law of motion is applicable for:",
            "question_hi": "न्यूटन का गति का तीसरा नियम लागू होता है:",
            "options_en": ["Contact forces only", "Non-contact forces only", "Both contact and non-contact forces", "None"],
            "options_hi": ["केवल संपर्क बल", "केवल असंपर्क बल", "संपर्क और असंपर्क दोनों बल", "कोई नहीं"],
            "answer_en": "Both contact and non-contact forces",
            "answer_hi": "संपर्क और असंपर्क दोनों बल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "The time period of a simple pendulum depends on:",
            "question_hi": "सरल लोलक का आवर्तकाल निर्भर करता है:",
            "options_en": ["Mass of bob", "Length of string", "Amplitude", "Material of bob"],
            "options_hi": ["गोलक का द्रव्यमान", "धागे की लंबाई", "आयाम", "गोलक का पदार्थ"],
            "answer_en": "Length of string",
            "answer_hi": "धागे की लंबाई",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "The SI unit of magnetic flux is:",
            "question_hi": "चुंबकीय फ्लक्स की SI इकाई है:",
            "options_en": ["Tesla", "Weber", "Henry", "Farad"],
            "options_hi": ["टेस्ला", "वेबर", "हेनरी", "फैरड"],
            "answer_en": "Weber",
            "answer_hi": "वेबर",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "A car accelerates from 0 to 20 m/s in 5 seconds. What is its acceleration?",
            "question_hi": "एक कार 0 से 20 m/s तक 5 सेकंड में त्वरित होती है। इसका त्वरण क्या है?",
            "options_en": ["1 m/s²", "2 m/s²", "4 m/s²", "5 m/s²"],
            "options_hi": ["1 m/s²", "2 m/s²", "4 m/s²", "5 m/s²"],
            "answer_en": "4 m/s²",
            "answer_hi": "4 m/s²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "The refractive index of water is 1.33. What is the speed of light in water?",
            "question_hi": "पानी का अपवर्तनांक 1.33 है। पानी में प्रकाश की गति क्या है?",
            "options_en": ["2.25 × 10⁸ m/s", "2.5 × 10⁸ m/s", "3 × 10⁸ m/s", "1.33 × 10⁸ m/s"],
            "options_hi": ["2.25 × 10⁸ m/s", "2.5 × 10⁸ m/s", "3 × 10⁸ m/s", "1.33 × 10⁸ m/s"],
            "answer_en": "2.25 × 10⁸ m/s",
            "answer_hi": "2.25 × 10⁸ m/s",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "The energy stored in a capacitor is given by:",
            "question_hi": "संधारित्र में संचित ऊर्जा दी जाती है:",
            "options_en": ["½ CV²", "CV²", "C/V", "V²/C"],
            "options_hi": ["½ CV²", "CV²", "C/V", "V²/C"],
            "answer_en": "½ CV²",
            "answer_hi": "½ CV²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "Which law states that entropy of the universe always increases?",
            "question_hi": "कौन सा नियम कहता है कि ब्रह्मांड की एन्ट्रॉपी हमेशा बढ़ती है?",
            "options_en": ["First Law of Thermodynamics", "Second Law of Thermodynamics", "Zeroth Law", "Third Law"],
            "options_hi": ["ऊष्मागतिकी का पहला नियम", "ऊष्मागतिकी का दूसरा नियम", "शून्यवाँ नियम", "तीसरा नियम"],
            "answer_en": "Second Law of Thermodynamics",
            "answer_hi": "ऊष्मागतिकी का दूसरा नियम",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "The unit of electric field intensity is:",
            "question_hi": "विद्युत क्षेत्र की तीव्रता की इकाई है:",
            "options_en": ["N/C", "J/C", "V/m", "Both N/C and V/m"],
            "options_hi": ["N/C", "J/C", "V/m", "N/C और V/m दोनों"],
            "answer_en": "Both N/C and V/m",
            "answer_hi": "N/C और V/m दोनों",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "A body of mass 2 kg is moving with a velocity of 3 m/s. Its kinetic energy is:",
            "question_hi": "2 kg द्रव्यमान का एक पिंड 3 m/s के वेग से गतिमान है। इसकी गतिज ऊर्जा है:",
            "options_en": ["3 J", "6 J", "9 J", "18 J"],
            "options_hi": ["3 J", "6 J", "9 J", "18 J"],
            "answer_en": "9 J",
            "answer_hi": "9 J",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
            "question_en": "The force acting on a charge q in an electric field E is:",
            "question_hi": "विद्युत क्षेत्र E में आवेश q पर लगने वाला बल है:",
            "options_en": ["qE", "E/q", "q²E", "q/E"],
            "options_hi": ["qE", "E/q", "q²E", "q/E"],
            "answer_en": "qE",
            "answer_hi": "qE",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 14,
            "question_en": "The wavelength of light in a medium decreases by 25%. What is the refractive index?",
            "question_hi": "एक माध्यम में प्रकाश की तरंगदैर्ध्य 25% कम हो जाती है। अपवर्तनांक क्या है?",
            "options_en": ["1.25", "1.33", "1.5", "1.75"],
            "options_hi": ["1.25", "1.33", "1.5", "1.75"],
            "answer_en": "1.33",
            "answer_hi": "1.33",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "The time period of a satellite orbiting Earth depends on:",
            "question_hi": "पृथ्वी की परिक्रमा करने वाले उपग्रह का आवर्तकाल निर्भर करता है:",
            "options_en": ["Mass of satellite", "Radius of orbit", "Both", "None"],
            "options_hi": ["उपग्रह का द्रव्यमान", "कक्षा की त्रिज्या", "दोनों", "कोई नहीं"],
            "answer_en": "Radius of orbit",
            "answer_hi": "कक्षा की त्रिज्या",
            "attempted": false,
            "selected": ""
        },
    
        // Chemistry (16-30)
        {
            "num": 16,
            "question_en": "The oxidation state of chromium in K₂Cr₂O₇ is:",
            "question_hi": "K₂Cr₂O₇ में क्रोमियम की ऑक्सीकरण अवस्था है:",
            "options_en": ["+3", "+4", "+5", "+6"],
            "options_hi": ["+3", "+4", "+5", "+6"],
            "answer_en": "+6",
            "answer_hi": "+6",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "Which of the following is a non-polar molecule?",
            "question_hi": "निम्नलिखित में से कौन एक अध्रुवीय अणु है?",
            "options_en": ["H₂O", "NH₃", "CO₂", "HCl"],
            "options_hi": ["H₂O", "NH₃", "CO₂", "HCl"],
            "answer_en": "CO₂",
            "answer_hi": "CO₂",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "The IUPAC name of CH₃-CH₂-CHO is:",
            "question_hi": "CH₃-CH₂-CHO का IUPAC नाम है:",
            "options_en": ["Propanal", "Propanone", "Ethanal", "Butanal"],
            "options_hi": ["प्रोपेनल", "प्रोपेनोन", "एथेनल", "ब्यूटेनल"],
            "answer_en": "Propanal",
            "answer_hi": "प्रोपेनल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "The number of sigma bonds in ethene (C₂H₄) is:",
            "question_hi": "ईथीन (C₂H₄) में सिग्मा बंधों की संख्या है:",
            "options_en": ["3", "5", "7", "9"],
            "options_hi": ["3", "5", "7", "9"],
            "answer_en": "5",
            "answer_hi": "5",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "Which of the following is a noble gas?",
            "question_hi": "निम्नलिखित में से कौन एक अक्रिय गैस है?",
            "options_en": ["Oxygen", "Nitrogen", "Argon", "Chlorine"],
            "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "ऑर्गन", "क्लोरीन"],
            "answer_en": "Argon",
            "answer_hi": "ऑर्गन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 21,
            "question_en": "The pH of a neutral solution at 25°C is:",
            "question_hi": "25°C पर एक उदासीन विलयन का pH है:",
            "options_en": ["5", "7", "10", "14"],
            "options_hi": ["5", "7", "10", "14"],
            "answer_en": "7",
            "answer_hi": "7",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 22,
            "question_en": "Which element has the atomic number 12?",
            "question_hi": "किस तत्व का परमाणु क्रमांक 12 है?",
            "options_en": ["Sodium", "Magnesium", "Aluminum", "Silicon"],
            "options_hi": ["सोडियम", "मैग्नीशियम", "एल्युमिनियम", "सिलिकॉन"],
            "answer_en": "Magnesium",
            "answer_hi": "मैग्नीशियम",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 23,
            "question_en": "The hybridization of carbon in ethyne (C₂H₂) is:",
            "question_hi": "एथाइन (C₂H₂) में कार्बन का संकरण है:",
            "options_en": ["sp", "sp²", "sp³", "sp³d"],
            "options_hi": ["sp", "sp²", "sp³", "sp³d"],
            "answer_en": "sp",
            "answer_hi": "sp",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 24,
            "question_en": "Which of the following is a reducing agent?",
            "question_hi": "निम्नलिखित में से कौन एक अपचायक है?",
            "options_en": ["H₂O₂", "KMnO₄", "NaBH₄", "O₃"],
            "options_hi": ["H₂O₂", "KMnO₄", "NaBH₄", "O₃"],
            "answer_en": "NaBH₄",
            "answer_hi": "NaBH₄",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 25,
            "question_en": "The molecular formula of benzene is:",
            "question_hi": "बेंजीन का आणविक सूत्र है:",
            "options_en": ["C₆H₆", "C₆H₁₂", "C₆H₅OH", "C₆H₁₀"],
            "options_hi": ["C₆H₆", "C₆H₁₂", "C₆H₅OH", "C₆H₁₀"],
            "answer_en": "C₆H₆",
            "answer_hi": "C₆H₆",
            "attempted": false,
            "selected": ""
        },



        {
            "num": 26,
            "question_en": "If a wire is stretched to double its length, what happens to its resistance?",
            "question_hi": "यदि एक तार को खींचकर उसकी लंबाई दुगनी कर दी जाए, तो उसका प्रतिरोध क्या होगा?",
            "options_en": ["Remains same", "Becomes half", "Becomes double", "Becomes four times"],
            "options_hi": ["जैसा था वैसा ही रहेगा", "आधा हो जाएगा", "दोगुना हो जाएगा", "चार गुना हो जाएगा"],
            "answer_en": "Becomes four times",
            "answer_hi": "चार गुना हो जाएगा",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 27,
            "question_en": "Which of the following species is paramagnetic?",
            "question_hi": "निम्नलिखित में से कौन-सी प्रजाति पेरामैग्नेटिक है?",
            "options_en": ["O2", "N2", "CO2", "H2O"],
            "options_hi": ["O2", "N2", "CO2", "H2O"],
            "answer_en": "O2",
            "answer_hi": "O2",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 28,
            "question_en": "The limit of (sin x)/x as x approaches 0 is:",
            "question_hi": "जब x → 0 होता है, तब (sin x)/x का मान क्या होता है?",
            "options_en": ["0", "1", "∞", "Does not exist"],
            "options_hi": ["0", "1", "∞", "अस्तित्व नहीं है"],
            "answer_en": "1",
            "answer_hi": "1",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 29,
            "question_en": "A capacitor of 10μF is charged to 100V. Energy stored is:",
            "question_hi": "10μF का एक संधारित्र 100V पर चार्ज किया गया है। संचित ऊर्जा क्या होगी?",
            "options_en": ["0.05 J", "0.1 J", "0.25 J", "0.5 J"],
            "options_hi": ["0.05 जूल", "0.1 जूल", "0.25 जूल", "0.5 जूल"],
            "answer_en": "0.05 J",
            "answer_hi": "0.05 जूल",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 30,
            "question_en": "What is the IUPAC name of CH3-CH2-OH?",
            "question_hi": "CH3-CH2-OH का IUPAC नाम क्या है?",
            "options_en": ["Methanol", "Propanol", "Ethanol", "Butanol"],
            "options_hi": ["मेथनॉल", "प्रोपेनॉल", "एथनॉल", "ब्यूटनॉल"],
            "answer_en": "Ethanol",
            "answer_hi": "एथनॉल",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 31,
            "question_en": "In Young’s double slit experiment, the fringe width is 0.5 mm. If immersed in water (μ = 4/3), what is the new fringe width?",
            "question_hi": "यंग के डबल स्लिट प्रयोग में फ्रिंज की चौड़ाई 0.5 mm है। यदि जल (μ = 4/3) में डुबोया जाए, तो नई फ्रिंज चौड़ाई क्या होगी?",
            "options_en": ["0.375 mm", "0.5 mm", "0.667 mm", "1.5 mm"],
            "options_hi": ["0.375 मिमी", "0.5 मिमी", "0.667 मिमी", "1.5 मिमी"],
            "answer_en": "0.375 mm",
            "answer_hi": "0.375 मिमी",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 32,
            "question_en": "The correct order of bond angles in H₂O, NH₃ and CH₄ is:",
            "question_hi": "H₂O, NH₃ और CH₄ में बंध कोणों का सही क्रम है:",
            "options_en": ["H₂O < NH₃ < CH₄", "NH₃ < H₂O < CH₄", "CH₄ < NH₃ < H₂O", "CH₄ < H₂O < NH₃"],
            "options_hi": ["H₂O < NH₃ < CH₄", "NH₃ < H₂O < CH₄", "CH₄ < NH₃ < H₂O", "CH₄ < H₂O < NH₃"],
            "answer_en": "H₂O < NH₃ < CH₄",
            "answer_hi": "H₂O < NH₃ < CH₄",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 33,
            "question_en": "If the sum of first n terms of a series is Sₙ = 3n² + 2n, what is the nth term?",
            "question_hi": "यदि किसी श्रेणी के पहले n पदों का योग Sₙ = 3n² + 2n है, तो nवाँ पद क्या होगा?",
            "options_en": ["6n + 2", "6n - 1", "3n + 2", "6n + 5"],
            "options_hi": ["6n + 2", "6n - 1", "3n + 2", "6n + 5"],
            "answer_en": "6n + 2",
            "answer_hi": "6n + 2",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 34,
            "question_en": "The value of (1 + tan²θ)/(1 + cot²θ) is:",
            "question_hi": "(1 + tan²θ)/(1 + cot²θ) का मान क्या है?",
            "options_en": ["tan²θ", "cot²θ", "tan⁴θ", "1"],
            "options_hi": ["tan²θ", "cot²θ", "tan⁴θ", "1"],
            "answer_en": "tan²θ",
            "answer_hi": "tan²θ",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 35,
            "question_en": "A projectile is thrown at an angle of 60° with speed 20 m/s. What is the maximum height attained?",
            "question_hi": "एक प्रक्षेप्य को 60° कोण पर 20 m/s की गति से फेंका जाता है। अधिकतम ऊँचाई क्या होगी?",
            "options_en": ["5 m", "10 m", "15 m", "20 m"],
            "options_hi": ["5 मी", "10 मी", "15 मी", "20 मी"],
            "answer_en": "15 m",
            "answer_hi": "15 मी",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 36,
            "question_en": "Which orbital has the highest energy in a multi-electron atom?",
            "question_hi": "किस कक्षा में बहु-इलेक्ट्रॉन परमाणु में सबसे अधिक ऊर्जा होती है?",
            "options_en": ["3s", "3p", "4s", "3d"],
            "options_hi": ["3s", "3p", "4s", "3d"],
            "answer_en": "3d",
            "answer_hi": "3d",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 37,
            "question_en": "The molarity of 49 g of H₂SO₄ in 1 liter solution is:",
            "question_hi": "1 लीटर विलयन में 49 ग्राम H₂SO₄ की मोलरता क्या है?",
            "options_en": ["0.25 M", "0.5 M", "1 M", "2 M"],
            "options_hi": ["0.25 M", "0.5 M", "1 M", "2 M"],
            "answer_en": "0.5 M",
            "answer_hi": "0.5 M",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 38,
            "question_en": "Is f(x) = |x - 2| differentiable at x = 2?",
            "question_hi": "क्या f(x) = |x - 2| x = 2 पर अवकलनीय है?",
            "options_en": ["Yes", "No", "Partially", "Only from right"],
            "options_hi": ["हाँ", "नहीं", "आंशिक रूप से", "केवल दाएँ से"],
            "answer_en": "No",
            "answer_hi": "नहीं",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 39,
            "question_en": "Which of the following elements has the highest first ionization energy?",
            "question_hi": "निम्न में से किस तत्व की प्रथम आयनीकरण ऊर्जा सबसे अधिक है?",
            "options_en": ["Na", "Mg", "Al", "Ne"],
            "options_hi": ["Na", "Mg", "Al", "Ne"],
            "answer_en": "Ne",
            "answer_hi": "Ne",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 40,
            "question_en": "If A = [[1, 2], [3, 4]], then the determinant of A is:",
            "question_hi": "यदि A = [[1, 2], [3, 4]] है, तो A का निर्धारक क्या है?",
            "options_en": ["-2", "2", "10", "0"],
            "options_hi": ["-2", "2", "10", "0"],
            "answer_en": "-2",
            "answer_hi": "-2",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 41,
            "question_en": "What is the relation between focal length f and radius of curvature R for a spherical mirror?",
            "question_hi": "गोलाकार दर्पण के लिए फोकस दूरी f और वक्रता त्रिज्या R में क्या संबंध है?",
            "options_en": ["f = R", "f = R/2", "f = 2R", "f = R²"],
            "options_hi": ["f = R", "f = R/2", "f = 2R", "f = R²"],
            "answer_en": "f = R/2",
            "answer_hi": "f = R/2",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 42,
            "question_en": "The integral ∫sin²x dx equals:",
            "question_hi": "∫sin²x dx का हल है:",
            "options_en": ["x - sinx cosx + C", "x/2 - sin2x/4 + C", "x + C", "cos²x + C"],
            "options_hi": ["x - sinx cosx + C", "x/2 - sin2x/4 + C", "x + C", "cos²x + C"],
            "answer_en": "x/2 - sin2x/4 + C",
            "answer_hi": "x/2 - sin2x/4 + C",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 43,
            "question_en": "Which gas is used in Haber process?",
            "question_hi": "हैबर प्रक्रिया में कौन सी गैस प्रयुक्त होती है?",
            "options_en": ["O₂", "H₂", "Cl₂", "He"],
            "options_hi": ["O₂", "H₂", "Cl₂", "He"],
            "answer_en": "H₂",
            "answer_hi": "H₂",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 44,
            "question_en": "The shortest wavelength in Lyman series corresponds to:",
            "question_hi": "लाइमैन श्रंखला में सबसे छोटी तरंगदैर्ध्य किसके लिए होती है?",
            "options_en": ["n = ∞ to n = 1", "n = 2 to n = 1", "n = 3 to n = 1", "n = 4 to n = 1"],
            "options_hi": ["n = ∞ से n = 1", "n = 2 से n = 1", "n = 3 से n = 1", "n = 4 से n = 1"],
            "answer_en": "n = ∞ to n = 1",
            "answer_hi": "n = ∞ से n = 1",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 45,
            "question_en": "If logₐb = x, then b equals:",
            "question_hi": "यदि logₐb = x, तो b का मान होगा:",
            "options_en": ["a^x", "x^a", "a/x", "logx(a)"],
            "options_hi": ["a^x", "x^a", "a/x", "logx(a)"],
            "answer_en": "a^x",
            "answer_hi": "a^x",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 46,
            "question_en": "The derivative of x^x is:",
            "question_hi": "x^x का अवकलज क्या है?",
            "options_en": ["x^x ln(x)", "x^x (1 + ln x)", "x^x x ln x", "x^x/x"],
            "options_hi": ["x^x ln(x)", "x^x (1 + ln x)", "x^x x ln x", "x^x/x"],
            "answer_en": "x^x (1 + ln x)",
            "answer_hi": "x^x (1 + ln x)",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 47,
            "question_en": "Which of the following has maximum boiling point?",
            "question_hi": "निम्नलिखित में से किसका क्वथनांक सबसे अधिक है?",
            "options_en": ["H₂O", "H₂S", "H₂Se", "H₂Te"],
            "options_hi": ["H₂O", "H₂S", "H₂Se", "H₂Te"],
            "answer_en": "H₂O",
            "answer_hi": "H₂O",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 48,
            "question_en": "The magnetic field at center of circular loop of radius R carrying current I is:",
            "question_hi": "त्रिज्या R की एक करंट लेती वृत्तीय लूप के केंद्र पर चुम्बकीय क्षेत्र क्या होगा?",
            "options_en": ["μ₀I/2R", "μ₀I/4πR", "μ₀IR²", "μ₀IR/2"],
            "options_hi": ["μ₀I/2R", "μ₀I/4πR", "μ₀IR²", "μ₀IR/2"],
            "answer_en": "μ₀I/2R",
            "answer_hi": "μ₀I/2R",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 49,
            "question_en": "Which one of the following has zero dipole moment?",
            "question_hi": "निम्नलिखित में से किसका द्विध्रुव आघूर्ण शून्य होता है?",
            "options_en": ["CO₂", "NH₃", "H₂O", "SO₂"],
            "options_hi": ["CO₂", "NH₃", "H₂O", "SO₂"],
            "answer_en": "CO₂",
            "answer_hi": "CO₂",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 50,
            "question_en": "The general solution of dy/dx = y is:",
            "question_hi": "dy/dx = y का सामान्य हल क्या है?",
            "options_en": ["y = x", "y = e^x", "y = Ae^x", "y = A/x"],
            "options_hi": ["y = x", "y = e^x", "y = Ae^x", "y = A/x"],
            "answer_en": "y = Ae^x",
            "answer_hi": "y = Ae^x",
            "attempted": false,
            "selected": ""
          }

// Add more questions here...
];

let currentQuestion = 0;
let language = "en"; // Default English
let timeLeft = 10800; // 5-minute timer
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
let confirmation = confirm("Are you sure you want to submit the test?");
if (!confirmation) return;

clearInterval(timerInterval);

let attempted = 0, notAttempted = 0, score = 0;
const results = [];

questions.forEach(q => {
    if (q.attempted) {
        attempted++;
        if (q.selected === q.answer_en || q.selected === q.answer_hi) {
            score++;
        }
    } else {
        notAttempted++;
    }
    results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
});

localStorage.setItem("attempted", attempted);
localStorage.setItem("notAttempted", notAttempted);
localStorage.setItem("score", score);
localStorage.setItem("results", JSON.stringify(results));

let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
if (viewResult) {
    window.location.href = "/rts/Deshbord/category/test/submit-test.html";
}
}

function startTimer() {
const timerElement = document.getElementById("timer");
timeLeft = 180 * 60; // Convert 180 minutes to seconds (180 × 60)

timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Time's up! Submitting the quiz automatically.");
        submitQuiz();
    } else {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        // Format as HH:MM:SS with leading zeros
        timerElement.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeLeft--;
    }
}, 1000);
}
function updateNavigation() {
const navElement = document.getElementById("circleContainer");
navElement.innerHTML = "";

questions.forEach((q, index) => {
    let color = "gray"; // Default not visited
    if (q.attempted) {
        color = "green"; // Answered
    }
    if (q.selected === "") {
        color = "gray"; // Not answered
    }
    if (index === currentQuestion) {
        color = "blue"; // Current question
    }
    navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
});
}

window.onload = function () {
loadQuestion(currentQuestion);
startTimer();
};