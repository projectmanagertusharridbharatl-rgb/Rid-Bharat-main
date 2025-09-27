const questions = [
        {
          "num": 1,
          "question_en": "Which of the following is not a part of the female reproductive system?",
          "question_hi": "निम्नलिखित में से कौन महिला प्रजनन प्रणाली का हिस्सा नहीं है?",
          "options_en": ["Ovary", "Uterus", "Vas deferens", "Fallopian tube"],
          "options_hi": ["अंडाशय", "गर्भाशय", "वास डिफरेंस", "फैलोपियन ट्यूब"],
          "answer": "Vas deferens",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "What is the function of the placenta?",
          "question_hi": "गर्भनाल का कार्य क्या है?",
          "options_en": ["Waste removal", "Nutrient supply", "Gas exchange", "All of these"],
          "options_hi": ["अपशिष्ट हटाना", "पोषक तत्वों की आपूर्ति", "गैसों का आदान-प्रदान", "इन सभी में से"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the genotype of a person with blood group AB?",
          "question_hi": "AB रक्त समूह वाले व्यक्ति का जीनोटाइप क्या होता है?",
          "options_en": ["IAIA", "IBIB", "IAIB", "ii"],
          "options_hi": ["IAIA", "IBIB", "IAIB", "ii"],
          "answer": "IAIB",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which hormone is produced by the corpus luteum?",
          "question_hi": "कॉर्पस ल्यूटियम किस हार्मोन का उत्पादन करता है?",
          "options_en": ["Estrogen", "Progesterone", "Testosterone", "Luteinizing hormone"],
          "options_hi": ["एस्ट्रोजन", "प्रोजेस्टेरोन", "टेस्टोस्टेरोन", "ल्यूटिनाइजिंग हार्मोन"],
          "answer": "Progesterone",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What causes Down syndrome?",
          "question_hi": "डाउन सिंड्रोम का कारण क्या है?",
          "options_en": ["Trisomy of chromosome 21", "Monosomy of chromosome 21", "Mutation in X chromosome", "Deletion of chromosome 5"],
          "options_hi": ["क्रोमोसोम 21 की त्रिसोमी", "क्रोमोसोम 21 की मोनोसोमी", "X क्रोमोसोम में उत्परिवर्तन", "क्रोमोसोम 5 की डिलीशन"],
          "answer": "Trisomy of chromosome 21",
          "attempted": false,
          "selected": ""
        },
        {
            "num": 6,
            "question_en": "Which part of the sperm contains enzymes to penetrate the egg?",
            "question_hi": "शुक्राणु का कौन सा भाग अंडाणु में प्रवेश करने के लिए एंजाइम्स रखता है?",
            "options_en": ["Head", "Midpiece", "Tail", "Acrosome"],
            "options_hi": ["सिर", "मध्य भाग", "पूंछ", "एक्रोसोम"],
            "answer": "Acrosome",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 7,
            "question_en": "In Mendel’s experiments, which trait was dominant in pea plants?",
            "question_hi": "मेंडल के प्रयोगों में मटर के पौधों में कौन सा गुण प्रधान था?",
            "options_en": ["Green pod", "Yellow seed", "Dwarf plant", "White flower"],
            "options_hi": ["हरी फली", "पीला बीज", "बौना पौधा", "सफेद फूल"],
            "answer": "Yellow seed",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 8,
            "question_en": "Which gas is used in tissue culture laboratories?",
            "question_hi": "ऊतक संवर्धन प्रयोगशालाओं में किस गैस का प्रयोग होता है?",
            "options_en": ["CO₂", "O₂", "N₂", "H₂"],
            "options_hi": ["CO₂", "O₂", "N₂", "H₂"],
            "answer": "CO₂",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 9,
            "question_en": "Which technique is used for DNA fingerprinting?",
            "question_hi": "DNA फिंगरप्रिंटिंग के लिए कौन सी तकनीक प्रयोग की जाती है?",
            "options_en": ["Gel electrophoresis", "Centrifugation", "PCR", "Spectroscopy"],
            "options_hi": ["जेल इलेक्ट्रोफोरेसिस", "सेंट्रीफ्यूगेशन", "पीसीआर", "स्पेक्ट्रोस्कोपी"],
            "answer": "Gel electrophoresis",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 10,
            "question_en": "Which microbe is used to produce insulin by genetic engineering?",
            "question_hi": "जेनेटिक इंजीनियरिंग द्वारा इंसुलिन बनाने में किस सूक्ष्मजीव का उपयोग होता है?",
            "options_en": ["E. coli", "Yeast", "Bacillus", "Lactobacillus"],
            "options_hi": ["ई. कोलाई", "यीस्ट", "बैसिलस", "लैक्टोबैसिलस"],
            "answer": "E. coli",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 11,
            "question_en": "Which of the following is an example of an in-situ conservation method?",
            "question_hi": "निम्नलिखित में से कौन *इन-सिचु संरक्षण* विधि का उदाहरण है?",
            "options_en": ["Zoo", "Botanical garden", "Wildlife sanctuary", "Seed bank"],
            "options_hi": ["चिड़ियाघर", "वनस्पति उद्यान", "वन्यजीव अभयारण्य", "बीज बैंक"],
            "answer": "Wildlife sanctuary",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 12,
            "question_en": "Haemophilia is an example of:",
            "question_hi": "हीमोफीलिया किसका उदाहरण है?",
            "options_en": ["Sex-linked recessive disorder", "Autosomal dominant", "Chromosomal disorder", "Mitochondrial disease"],
            "options_hi": ["लैंगिक-संलग्न अप्रभावी विकार", "ऑटोसोमल प्रभावी", "गुणसूत्रीय विकार", "माइटोकॉन्ड्रियल रोग"],
            "answer": "Sex-linked recessive disorder",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 13,
            "question_en": "Which organelle is commonly involved in genetic engineering?",
            "question_hi": "जेनेटिक इंजीनियरिंग में आमतौर पर कौन सा कोशिकांग शामिल होता है?",
            "options_en": ["Ribosome", "Chloroplast", "Plasmid", "Mitochondria"],
            "options_hi": ["राइबोसोम", "क्लोरोप्लास्ट", "प्लाज्मिड", "माइटोकॉन्ड्रिया"],
            "answer": "Plasmid",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 14,
            "question_en": "What does AIDS virus attack in the human body?",
            "question_hi": "AIDS वायरस मानव शरीर में किसे प्रभावित करता है?",
            "options_en": ["Red blood cells", "Liver cells", "Helper T-cells", "Nerve cells"],
            "options_hi": ["लाल रक्त कोशिकाएं", "यकृत कोशिकाएं", "हेल्पर टी-कोशिकाएं", "तंत्रिका कोशिकाएं"],
            "answer": "Helper T-cells",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 15,
            "question_en": "Bt cotton is genetically modified to resist:",
            "question_hi": "Bt कपास को किसके प्रतिरोध के लिए आनुवंशिक रूप से परिवर्तित किया गया है?",
            "options_en": ["Fungi", "Bacteria", "Insects", "Viruses"],
            "options_hi": ["फफूंद", "बैक्टीरिया", "कीड़े", "वायरस"],
            "answer": "Insects",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 16,
            "question_en": "The process of formation of gametes is called:",
            "question_hi": "गैमेट्स बनने की प्रक्रिया को क्या कहते हैं?",
            "options_en": ["Fertilization", "Mitosis", "Meiosis", "Gametogenesis"],
            "options_hi": ["निषेचन", "माइटोसिस", "मिओसिस", "गैमेटोजेनेसिस"],
            "answer": "Gametogenesis",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 17,
            "question_en": "Which of the following is a sexually transmitted disease?",
            "question_hi": "निम्नलिखित में से कौन एक यौन संचारित रोग है?",
            "options_en": ["Tuberculosis", "Malaria", "Syphilis", "Cholera"],
            "options_hi": ["टीबी", "मलेरिया", "सिफलिस", "हैजा"],
            "answer": "Syphilis",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 18,
            "question_en": "Who proposed the theory of natural selection?",
            "question_hi": "प्राकृतिक चयन का सिद्धांत किसने प्रस्तावित किया था?",
            "options_en": ["Gregor Mendel", "Charles Darwin", "Watson & Crick", "Lamarck"],
            "options_hi": ["ग्रेगर मेंडल", "चार्ल्स डार्विन", "वॉटसन और क्रिक", "लामार्क"],
            "answer": "Charles Darwin",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 19,
            "question_en": "Which structure in plants helps in nitrogen fixation?",
            "question_hi": "पौधों में कौन सी संरचना नाइट्रोजन स्थिरीकरण में मदद करती है?",
            "options_en": ["Root hairs", "Stomata", "Nodules", "Xylem"],
            "options_hi": ["मूल रोम", "रंध्र", "गांठें", "जाइलम"],
            "answer": "Nodules",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 20,
            "question_en": "Which vitamin deficiency causes rickets?",
            "question_hi": "किस विटामिन की कमी से रिकेट्स होता है?",
            "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
            "options_hi": ["विटामिन A", "विटामिन B12", "विटामिन C", "विटामिन D"],
            "answer": "Vitamin D",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 21,
            "question_en": "Which is the functional unit of the kidney?",
            "question_hi": "गुर्दे की कार्यात्मक इकाई क्या है?",
            "options_en": ["Neuron", "Nephron", "Alveolus", "Lymphocyte"],
            "options_hi": ["न्यूरॉन", "नेफ्रॉन", "एल्वियोलस", "लिम्फोसाइट"],
            "answer": "Nephron",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 22,
            "question_en": "Which enzyme breaks down starch into sugar?",
            "question_hi": "कौन सा एंजाइम स्टार्च को शुगर में तोड़ता है?",
            "options_en": ["Lipase", "Protease", "Amylase", "Pepsin"],
            "options_hi": ["लाइपेस", "प्रोटीज़", "एमाइलेज", "पेप्सिन"],
            "answer": "Amylase",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 23,
            "question_en": "What is the genetic material in most viruses?",
            "question_hi": "अधिकांश वायरस में आनुवंशिक पदार्थ क्या होता है?",
            "options_en": ["DNA", "RNA", "Protein", "Lipids"],
            "options_hi": ["डीएनए", "आरएनए", "प्रोटीन", "लिपिड्स"],
            "answer": "RNA",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 24,
            "question_en": "Which disease is caused by Plasmodium?",
            "question_hi": "Plasmodium से कौन सा रोग होता है?",
            "options_en": ["Malaria", "Dengue", "Cholera", "Typhoid"],
            "options_hi": ["मलेरिया", "डेंगू", "हैजा", "टाइफाइड"],
            "answer": "Malaria",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 25,
            "question_en": "Which of the following is a biodegradable pollutant?",
            "question_hi": "निम्नलिखित में से कौन एक जैव अपघट्य प्रदूषक है?",
            "options_en": ["Plastic", "Detergent", "Sewage", "Pesticide"],
            "options_hi": ["प्लास्टिक", "डिटर्जेंट", "मलजल", "कीटनाशक"],
            "answer": "Sewage",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 26,
            "question_en": "What is the function of DNA ligase in DNA replication?",
            "question_hi": "DNA प्रतिकृति में DNA लाइगेज़ का कार्य क्या है?",
            "options_en": ["Unwinds the DNA", "Joins Okazaki fragments", "Synthesizes RNA primer", "Stabilizes the replication fork"],
            "options_hi": ["DNA को खोलना", "ओकाज़ाकी खंडों को जोड़ना", "RNA प्राइमर का निर्माण करना", "प्रतिकृति फोर्क को स्थिर करना"],
            "answer": "Joins Okazaki fragments",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 27,
            "question_en": "Which hormone regulates the amount of glucose in the blood?",
            "question_hi": "कौन सा हार्मोन रक्त में ग्लूकोज की मात्रा को नियंत्रित करता है?",
            "options_en": ["Thyroxine", "Insulin", "Adrenaline", "Cortisol"],
            "options_hi": ["थायरॉक्सिन", "इंसुलिन", "एड्रेनालिन", "कॉर्टिसोल"],
            "answer": "Insulin",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 28,
            "question_en": "Which part of the brain controls body temperature?",
            "question_hi": "मस्तिष्क का कौन सा भाग शरीर के तापमान को नियंत्रित करता है?",
            "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
            "options_hi": ["सेरीब्रलम", "सेरीबेलम", "मेडुला", "हाइपोथैलेमस"],
            "answer": "Hypothalamus",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 29,
            "question_en": "What is the unit of heredity?",
            "question_hi": "विरासत की इकाई क्या है?",
            "options_en": ["Chromosome", "DNA", "Gene", "Protein"],
            "options_hi": ["गुणसूत्र", "डीएनए", "जीन", "प्रोटीन"],
            "answer": "Gene",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 30,
            "question_en": "Which organ produces urea?",
            "question_hi": "कौन सा अंग यूरिया का निर्माण करता है?",
            "options_en": ["Liver", "Kidney", "Lungs", "Heart"],
            "options_hi": ["यकृत", "गुर्दा", "फेफड़े", "हृदय"],
            "answer": "Liver",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 31,
            "question_en": "What is the primary function of white blood cells?",
            "question_hi": "श्वेत रक्त कणिकाओं का मुख्य कार्य क्या है?",
            "options_en": ["Oxygen transport", "Clotting of blood", "Fighting infections", "Carrying hormones"],
            "options_hi": ["ऑक्सीजन का परिवहन", "रक्त का थक्का बनाना", "संक्रमण से लड़ना", "हार्मोन ले जाना"],
            "answer": "Fighting infections",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 32,
            "question_en": "Which vitamin is essential for blood clotting?",
            "question_hi": "रक्त के थक्के बनने के लिए कौन सा विटामिन आवश्यक है?",
            "options_en": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"],
            "options_hi": ["विटामिन A", "विटामिन B12", "विटामिन C", "विटामिन K"],
            "answer": "Vitamin K",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 33,
            "question_en": "Which disease is caused by Plasmodium?",
            "question_hi": "Plasmodium से कौन सी बीमारी होती है?",
            "options_en": ["Dengue", "Cholera", "Malaria", "Typhoid"],
            "options_hi": ["डेंगू", "हैजा", "मलेरिया", "टाइफॉयड"],
            "answer": "Malaria",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 34,
            "question_en": "Which part of the nephron is involved in filtration?",
            "question_hi": "नेफ्रॉन का कौन सा भाग छानने की प्रक्रिया में शामिल होता है?",
            "options_en": ["Loop of Henle", "Distal tubule", "Bowman's capsule", "Collecting duct"],
            "options_hi": ["हेंले का लूप", "डिस्टल ट्यूब्यूल", "बोमेन का कैप्सूल", "कलेक्टिंग डक्ट"],
            "answer": "Bowman's capsule",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 35,
            "question_en": "What is the function of the xylem in plants?",
            "question_hi": "पौधों में जाइलम का कार्य क्या है?",
            "options_en": ["Transport of food", "Transport of water", "Photosynthesis", "Reproduction"],
            "options_hi": ["भोजन का परिवहन", "जल का परिवहन", "प्रकाश संश्लेषण", "प्रजनन"],
            "answer": "Transport of water",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 36,
            "question_en": "Which plant hormone is responsible for cell elongation?",
            "question_hi": "कोशिका वृद्धि के लिए कौन सा पौध हार्मोन उत्तरदायी है?",
            "options_en": ["Cytokinin", "Auxin", "Gibberellin", "Ethylene"],
            "options_hi": ["साइटोकाइनिन", "ऑक्सिन", "जिबरेलिन", "एथिलीन"],
            "answer": "Auxin",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 37,
            "question_en": "What is the powerhouse of the cell?",
            "question_hi": "कोशिका का ऊर्जा गृह किसे कहा जाता है?",
            "options_en": ["Nucleus", "Mitochondria", "Golgi body", "Ribosome"],
            "options_hi": ["नाभिक", "माइटोकॉन्ड्रिया", "गोल्गी निकाय", "राइबोसोम"],
            "answer": "Mitochondria",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 38,
            "question_en": "Which structure in a cell is responsible for protein synthesis?",
            "question_hi": "कोशिका में प्रोटीन संश्लेषण के लिए कौन सी संरचना उत्तरदायी है?",
            "options_en": ["Mitochondria", "Nucleus", "Ribosomes", "Lysosomes"],
            "options_hi": ["माइटोकॉन्ड्रिया", "नाभिक", "राइबोसोम", "लाइसोजोम"],
            "answer": "Ribosomes",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 39,
            "question_en": "Which process converts glucose into energy in cells?",
            "question_hi": "कौन सी प्रक्रिया कोशिकाओं में ग्लूकोज को ऊर्जा में परिवर्तित करती है?",
            "options_en": ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
            "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "किण्वन", "वाष्पोत्सर्जन"],
            "answer": "Respiration",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 40,
            "question_en": "Which gland is called the 'master gland'?",
            "question_hi": "कौन सी ग्रंथि 'मास्टर ग्रंथि' कहलाती है?",
            "options_en": ["Adrenal gland", "Pituitary gland", "Thyroid gland", "Pineal gland"],
            "options_hi": ["एड्रिनल ग्रंथि", "पिट्यूटरी ग्रंथि", "थायरॉयड ग्रंथि", "पीनियल ग्रंथि"],
            "answer": "Pituitary gland",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 41,
            "question_en": "Which of the following is a vestigial organ in humans?",
            "question_hi": "निम्न में से कौन मानवों में एक अवशेषी अंग है?",
            "options_en": ["Heart", "Appendix", "Liver", "Kidney"],
            "options_hi": ["हृदय", "एपेंडिक्स", "यकृत", "गुर्दा"],
            "answer": "Appendix",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 42,
            "question_en": "Which enzyme is present in saliva?",
            "question_hi": "लार में कौन सा एंजाइम उपस्थित होता है?",
            "options_en": ["Pepsin", "Trypsin", "Amylase", "Lipase"],
            "options_hi": ["पेप्सिन", "ट्रिप्सिन", "एमाइलेज", "लाइपेस"],
            "answer": "Amylase",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 43,
            "question_en": "Which mineral is essential for the formation of hemoglobin?",
            "question_hi": "हीमोग्लोबिन के निर्माण के लिए कौन सा खनिज आवश्यक है?",
            "options_en": ["Calcium", "Magnesium", "Iron", "Potassium"],
            "options_hi": ["कैल्शियम", "मैग्नीशियम", "लोहा", "पोटेशियम"],
            "answer": "Iron",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 44,
            "question_en": "Which layer of the leaf is responsible for photosynthesis?",
            "question_hi": "पत्ती की कौन सी परत प्रकाश संश्लेषण के लिए जिम्मेदार होती है?",
            "options_en": ["Upper epidermis", "Palisade mesophyll", "Lower epidermis", "Spongy mesophyll"],
            "options_hi": ["ऊपरी एपिडर्मिस", "पलिसेड मेसोफिल", "निचली एपिडर्मिस", "स्पंजी मेसोफिल"],
            "answer": "Palisade mesophyll",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 45,
            "question_en": "What is the shape of the RBC?",
            "question_hi": "RBC का आकार क्या होता है?",
            "options_en": ["Spherical", "Biconcave", "Cylindrical", "Flat"],
            "options_hi": ["गोल", "द्वि-अवतल", "बेलनाकार", "समतल"],
            "answer": "Biconcave",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 46,
            "question_en": "Which of the following causes AIDS?",
            "question_hi": "निम्न में से कौन एड्स का कारण बनता है?",
            "options_en": ["HIV", "HCV", "HBV", "EBV"],
            "options_hi": ["HIV", "HCV", "HBV", "EBV"],
            "answer": "HIV",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 47,
            "question_en": "What is the basic unit of the nervous system?",
            "question_hi": "तंत्रिका तंत्र की मूल इकाई क्या है?",
            "options_en": ["Neuron", "Axon", "Dendrite", "Spinal cord"],
            "options_hi": ["न्यूरॉन", "एक्सॉन", "डेंड्राइट", "स्पाइनल कॉर्ड"],
            "answer": "Neuron",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 48,
            "question_en": "Which is the largest gland in the human body?",
            "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
            "options_en": ["Pancreas", "Liver", "Thyroid", "Adrenal"],
            "options_hi": ["अग्न्याशय", "यकृत", "थायरॉयड", "एड्रिनल"],
            "answer": "Liver",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 49,
            "question_en": "What is the process of formation of blood cells called?",
            "question_hi": "रक्त कोशिकाओं के निर्माण की प्रक्रिया को क्या कहते हैं?",
            "options_en": ["Hemolysis", "Hemostasis", "Hemopoiesis", "Hematocrit"],
            "options_hi": ["हीमोलाइसिस", "हीमोस्टेसिस", "हीमोपोएसिस", "हीमैटोक्रिट"],
            "answer": "Hemopoiesis",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 50,
            "question_en": "Which gas is transported by RBCs?",
            "question_hi": "RBCs द्वारा कौन सी गैस परिवाहित की जाती है?",
            "options_en": ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
            "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
            "answer": "Oxygen",
            "attempted": false,
            "selected": ""
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
        window.location.href = "/RTS/Public/Deshbord/category/test/submit-test.html";
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
