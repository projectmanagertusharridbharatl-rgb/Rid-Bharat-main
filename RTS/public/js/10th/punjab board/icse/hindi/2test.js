
const questions = [
        
                {
                  "num": 1,
                  "question_en": "Identify the adjective: 'वह लाल गुलाब सुंदर है।'",
                  "question_hi": "'वह लाल गुलाब सुंदर है।' में विशेषण कौन-सा है?",
                  "options_en": ["That (वह)", "Red (लाल)", "Rose (गुलाब)", "Beautiful (सुंदर)"],
                  "options_hi": ["वह", "लाल", "गुलाब", "सुंदर"],
                  "answer_en": "Red (लाल)",
                  "answer_hi": "लाल"
                },
                {
                  "num": 2,
                  "question_en": "Identify the adjective: 'बड़ा घर महंगा है।'",
                  "question_hi": "'बड़ा घर महंगा है।' में विशेषण कौन-सा है?",
                  "options_en": ["Big (बड़ा)", "House (घर)", "Expensive (महंगा)", "Is (है)"],
                  "options_hi": ["बड़ा", "घर", "महंगा", "है"],
                  "answer_en": "Big (बड़ा)",
                  "answer_hi": "बड़ा"
                },
                {
                  "num": 3,
                  "question_en": "Identify the adjective: 'नीला आसमान साफ है।'",
                  "question_hi": "'नीला आसमान साफ है।' में विशेषण कौन-सा है?",
                  "options_en": ["Blue (नीला)", "Sky (आसमान)", "Clear (साफ)", "Is (है)"],
                  "options_hi": ["नीला", "आसमान", "साफ", "है"],
                  "answer_en": "Blue (नीला)",
                  "answer_hi": "नीला"
                },
                {
                  "num": 4,
                  "question_en": "Identify the adjective: 'मीठा आम खाओ।'",
                  "question_hi": "'मीठा आम खाओ।' में विशेषण कौन-सा है?",
                  "options_en": ["Sweet (मीठा)", "Mango (आम)", "Eat (खाओ)", "None"],
                  "options_hi": ["मीठा", "आम", "खाओ", "कोई नहीं"],
                  "answer_en": "Sweet (मीठा)",
                  "answer_hi": "मीठा"
                },
                {
                  "num": 5,
                  "question_en": "Identify the adjective: 'ऊँचे पहाड़ दिखते हैं।'",
                  "question_hi": "'ऊँचे पहाड़ दिखते हैं।' में विशेषण कौन-सा है?",
                  "options_en": ["Tall (ऊँचे)", "Mountains (पहाड़)", "Visible (दिखते)", "Are (हैं)"],
                  "options_hi": ["ऊँचे", "पहाड़", "दिखते", "हैं"],
                  "answer_en": "Tall (ऊँचे)",
                  "answer_hi": "ऊँचे"
                },
                {
                  "num": 6,
                  "question_en": "Identify the adjective: 'काली गाय दौड़ रही है।'",
                  "question_hi": "'काली गाय दौड़ रही है।' में विशेषण कौन-सा है?",
                  "options_en": ["Black (काली)", "Cow (गाय)", "Running (दौड़ रही)", "Is (है)"],
                  "options_hi": ["काली", "गाय", "दौड़ रही", "है"],
                  "answer_en": "Black (काली)",
                  "answer_hi": "काली"
                },
                {
                  "num": 7,
                  "question_en": "Identify the adjective: 'तेज हवा चल रही है।'",
                  "question_hi": "'तेज हवा चल रही है।' में विशेषण कौन-सा है?",
                  "options_en": ["Fast (तेज)", "Wind (हवा)", "Blowing (चल रही)", "Is (है)"],
                  "options_hi": ["तेज", "हवा", "चल रही", "है"],
                  "answer_en": "Fast (तेज)",
                  "answer_hi": "तेज"
                },
                {
                  "num": 8,
                  "question_en": "Identify the adjective: 'पुरानी किताब पढ़ो।'",
                  "question_hi": "'पुरानी किताब पढ़ो।' में विशेषण कौन-सा है?",
                  "options_en": ["Old (पुरानी)", "Book (किताब)", "Read (पढ़ो)", "None"],
                  "options_hi": ["पुरानी", "किताब", "पढ़ो", "कोई नहीं"],
                  "answer_en": "Old (पुरानी)",
                  "answer_hi": "पुरानी"
                },
                {
                  "num": 9,
                  "question_en": "Identify the adjective: 'छोटा बच्चा सो रहा है।'",
                  "question_hi": "'छोटा बच्चा सो रहा है।' में विशेषण कौन-सा है?",
                  "options_en": ["Small (छोटा)", "Child (बच्चा)", "Sleeping (सो रहा)", "Is (है)"],
                  "options_hi": ["छोटा", "बच्चा", "सो रहा", "है"],
                  "answer_en": "Small (छोटा)",
                  "answer_hi": "छोटा"
                },
                {
                  "num": 10,
                  "question_en": "Identify the adjective: 'हरा पेड़ ऊँचा है।'",
                  "question_hi": "'हरा पेड़ ऊँचा है।' में विशेषण कौन-सा है?",
                  "options_en": ["Green (हरा)", "Tree (पेड़)", "Tall (ऊँचा)", "Is (है)"],
                  "options_hi": ["हरा", "पेड़", "ऊँचा", "है"],
                  "answer_en": "Green (हरा)",
                  "answer_hi": "हरा"
                },
                {
                  "num": 11,
                  "question_en": "Identify the adjective: 'गर्म दूध पी लो।'",
                  "question_hi": "'गर्म दूध पी लो।' में विशेषण कौन-सा है?",
                  "options_en": ["Hot (गर्म)", "Milk (दूध)", "Drink (पी लो)", "None"],
                  "options_hi": ["गर्म", "दूध", "पी लो", "कोई नहीं"],
                  "answer_en": "Hot (गर्म)",
                  "answer_hi": "गर्म"
                },
                {
                  "num": 12,
                  "question_en": "Identify the adjective: 'सुंदर फूल खिले हैं।'",
                  "question_hi": "'सुंदर फूल खिले हैं।' में विशेषण कौन-सा है?",
                  "options_en": ["Beautiful (सुंदर)", "Flower (फूल)", "Bloomed (खिले)", "Are (हैं)"],
                  "options_hi": ["सुंदर", "फूल", "खिले", "हैं"],
                  "answer_en": "Beautiful (सुंदर)",
                  "answer_hi": "सुंदर"
                },
                {
                  "num": 13,
                  "question_en": "Identify the adjective: 'भारी बैग उठाओ।'",
                  "question_hi": "'भारी बैग उठाओ।' में विशेषण कौन-सा है?",
                  "options_en": ["Heavy (भारी)", "Bag (बैग)", "Lift (उठाओ)", "None"],
                  "options_hi": ["भारी", "बैग", "उठाओ", "कोई नहीं"],
                  "answer_en": "Heavy (भारी)",
                  "answer_hi": "भारी"
                },
                {
                  "num": 14,
                  "question_en": "Identify the adjective: 'मीठी चाय पीजिए।'",
                  "question_hi": "'मीठी चाय पीजिए।' में विशेषण कौन-सा है?",
                  "options_en": ["Sweet (मीठी)", "Tea (चाय)", "Drink (पीजिए)", "None"],
                  "options_hi": ["मीठी", "चाय", "पीजिए", "कोई नहीं"],
                  "answer_en": "Sweet (मीठी)",
                  "answer_hi": "मीठी"
                },
                {
                  "num": 15,
                  "question_en": "Identify the adjective: 'ठंडा पानी लाओ।'",
                  "question_hi": "'ठंडा पानी लाओ।' में विशेषण कौन-सा है?",
                  "options_en": ["Cold (ठंडा)", "Water (पानी)", "Bring (लाओ)", "None"],
                  "options_hi": ["ठंडा", "पानी", "लाओ", "कोई नहीं"],
                  "answer_en": "Cold (ठंडा)",
                  "answer_hi": "ठंडा"
                },
                {
                  "num": 16,
                  "question_en": "Identify the adjective: 'नरम रोटी खाओ।'",
                  "question_hi": "'नरम रोटी खाओ।' में विशेषण कौन-सा है?",
                  "options_en": ["Soft (नरम)", "Bread (रोटी)", "Eat (खाओ)", "None"],
                  "options_hi": ["नरम", "रोटी", "खाओ", "कोई नहीं"],
                  "answer_en": "Soft (नरम)",
                  "answer_hi": "नरम"
                },
                {
                  "num": 17,
                  "question_en": "Identify the adjective: 'चौड़ी सड़क है।'",
                  "question_hi": "'चौड़ी सड़क है।' में विशेषण कौन-सा है?",
                  "options_en": ["Wide (चौड़ी)", "Road (सड़क)", "Is (है)", "None"],
                  "options_hi": ["चौड़ी", "सड़क", "है", "कोई नहीं"],
                  "answer_en": "Wide (चौड़ी)",
                  "answer_hi": "चौड़ी"
                },
                {
                  "num": 18,
                  "question_en": "Identify the adjective: 'गीला कपड़ा सूख गया।'",
                  "question_hi": "'गीला कपड़ा सूख गया।' में विशेषण कौन-सा है?",
                  "options_en": ["Wet (गीला)", "Cloth (कपड़ा)", "Dried (सूख गया)", "None"],
                  "options_hi": ["गीला", "कपड़ा", "सूख गया", "कोई नहीं"],
                  "answer_en": "Wet (गीला)",
                  "answer_hi": "गीला"
                },
                {
                  "num": 19,
                  "question_en": "Identify the adjective: 'ताजा फल खरीदो।'",
                  "question_hi": "'ताजा फल खरीदो।' में विशेषण कौन-सा है?",
                  "options_en": ["Fresh (ताजा)", "Fruit (फल)", "Buy (खरीदो)", "None"],
                  "options_hi": ["ताजा", "फल", "खरीदो", "कोई नहीं"],
                  "answer_en": "Fresh (ताजा)",
                  "answer_hi": "ताजा"
                },
                {
                  "num": 20,
                  "question_en": "Identify the adjective: 'साफ कमरा बनाओ।'",
                  "question_hi": "'साफ कमरा बनाओ।' में विशेषण कौन-सा है?",
                  "options_en": ["Clean (साफ)", "Room (कमरा)", "Make (बनाओ)", "None"],
                  "options_hi": ["साफ", "कमरा", "बनाओ", "कोई नहीं"],
                  "answer_en": "Clean (साफ)",
                  "answer_hi": "साफ"
                },
                {
                  "num": 21,
                  "question_en": "Identify the adjective: 'खट्टा नींबू है।'",
                  "question_hi": "'खट्टा नींबू है।' में विशेषण कौन-सा है?",
                  "options_en": ["Sour (खट्टा)", "Lemon (नींबू)", "Is (है)", "None"],
                  "options_hi": ["खट्टा", "नींबू", "है", "कोई नहीं"],
                  "answer_en": "Sour (खट्टा)",
                  "answer_hi": "खट्टा"
                },
                {
                  "num": 22,
                  "question_en": "Identify the adjective: 'मोटी किताब पढ़ रहा हूँ।'",
                  "question_hi": "'मोटी किताब पढ़ रहा हूँ।' में विशेषण कौन-सा है?",
                  "options_en": ["Thick (मोटी)", "Book (किताब)", "Reading (पढ़ रहा)", "Am (हूँ)"],
                  "options_hi": ["मोटी", "किताब", "पढ़ रहा", "हूँ"],
                  "answer_en": "Thick (मोटी)",
                  "answer_hi": "मोटी"
                },
                {
                  "num": 23,
                  "question_en": "Identify the adjective: 'पतली लड़की दौड़ रही है।'",
                  "question_hi": "'पतली लड़की दौड़ रही है।' में विशेषण कौन-सा है?",
                  "options_en": ["Thin (पतली)", "Girl (लड़की)", "Running (दौड़ रही)", "Is (है)"],
                  "options_hi": ["पतली", "लड़की", "दौड़ रही", "है"],
                  "answer_en": "Thin (पतली)",
                  "answer_hi": "पतली"
                },
                {
                  "num": 24,
                  "question_en": "Identify the adjective: 'चमकीला सिक्का गिर गया।'",
                  "question_hi": "'चमकीला सिक्का गिर गया।' में विशेषण कौन-सा है?",
                  "options_en": ["Shiny (चमकीला)", "Coin (सिक्का)", "Fell (गिर गया)", "None"],
                  "options_hi": ["चमकीला", "सिक्का", "गिर गया", "कोई नहीं"],
                  "answer_en": "Shiny (चमकीला)",
                  "answer_hi": "चमकीला"
                },
                {
                  "num": 25,
                  "question_en": "Identify the adjective: 'धीमी आवाज़ सुनो।'",
                  "question_hi": "'धीमी आवाज़ सुनो।' में विशेषण कौन-सा है?",
                  "options_en": ["Slow (धीमी)", "Sound (आवाज़)", "Listen (सुनो)", "None"],
                  "options_hi": ["धीमी", "आवाज़", "सुनो", "कोई नहीं"],
                  "answer_en": "Slow (धीमी)",
                  "answer_hi": "धीमी"
                },
                {
                  "num": 26,
                  "question_en": "Identify the adjective: 'खुश बच्चे खेल रहे हैं।'",
                  "question_hi": "'खुश बच्चे खेल रहे हैं।' में विशेषण कौन-सा है?",
                  "options_en": ["Happy (खुश)", "Children (बच्चे)", "Playing (खेल रहे)", "Are (हैं)"],
                  "options_hi": ["खुश", "बच्चे", "खेल रहे", "हैं"],
                  "answer_en": "Happy (खुश)",
                  "answer_hi": "खुश"
                },
                {
                  "num": 27,
                  "question_en": "Identify the adjective: 'उज्ज्वल भविष्य बनाओ।'",
                  "question_hi": "'उज्ज्वल भविष्य बनाओ।' में विशेषण कौन-सा है?",
                  "options_en": ["Bright (उज्ज्वल)", "Future (भविष्य)", "Make (बनाओ)", "None"],
                  "options_hi": ["उज्ज्वल", "भविष्य", "बनाओ", "कोई नहीं"],
                  "answer_en": "Bright (उज्ज्वल)",
                  "answer_hi": "उज्ज्वल"
                },
                {
                  "num": 28,
                  "question_en": "Identify the adjective: 'कड़वा दवा पी लो।'",
                  "question_hi": "'कड़वा दवा पी लो।' में विशेषण कौन-सा है?",
                  "options_en": ["Bitter (कड़वा)", "Medicine (दवा)", "Drink (पी लो)", "None"],
                  "options_hi": ["कड़वा", "दवा", "पी लो", "कोई नहीं"],
                  "answer_en": "Bitter (कड़वा)",
                  "answer_hi": "कड़वा"
                },
                {
                  "num": 29,
                  "question_en": "Identify the adjective: 'सस्ता सामान लाओ।'",
                  "question_hi": "'सस्ता सामान लाओ।' में विशेषण कौन-सा है?",
                  "options_en": ["Cheap (सस्ता)", "Items (सामान)", "Bring (लाओ)", "None"],
                  "options_hi": ["सस्ता", "सामान", "लाओ", "कोई नहीं"],
                  "answer_en": "Cheap (सस्ता)",
                  "answer_hi": "सस्ता"
                },
                {
                  "num": 30,
                  "question_en": "Identify the adjective: 'मुलायम तकिया रखो।'",
                  "question_hi": "'मुलायम तकिया रखो।' में विशेषण कौन-सा है?",
                  "options_en": ["Soft (मुलायम)", "Pillow (तकिया)", "Keep (रखो)", "None"],
                  "options_hi": ["मुलायम", "तकिया", "रखो", "कोई नहीं"],
                  "answer_en": "Soft (मुलायम)",
                  "answer_hi": "मुलायम"
                },
                {
                  "num": 31,
                  "question_en": "Identify the adjective: 'चिकना फर्श है।'",
                  "question_hi": "'चिकना फर्श है।' में विशेषण कौन-सा है?",
                  "options_en": ["Smooth (चिकना)", "Floor (फर्श)", "Is (है)", "None"],
                  "options_hi": ["चिकना", "फर्श", "है", "कोई नहीं"],
                  "answer_en": "Smooth (चिकना)",
                  "answer_hi": "चिकना"
                },
                {
                  "num": 32,
                  "question_en": "Identify the adjective: 'खाली बॉक्स रख दो।'",
                  "question_hi": "'खाली बॉक्स रख दो।' में विशेषण कौन-सा है?",
                  "options_en": ["Empty (खाली)", "Box (बॉक्स)", "Keep (रख दो)", "None"],
                  "options_hi": ["खाली", "बॉक्स", "रख दो", "कोई नहीं"],
                  "answer_en": "Empty (खाली)",
                  "answer_hi": "खाली"
                },
                {
                  "num": 33,
                  "question_en": "Identify the adjective: 'गंदा कपड़ा धो दो।'",
                  "question_hi": "'गंदा कपड़ा धो दो।' में विशेषण कौन-सा है?",
                  "options_en": ["Dirty (गंदा)", "Cloth (कपड़ा)", "Wash (धो दो)", "None"],
                  "options_hi": ["गंदा", "कपड़ा", "धो दो", "कोई नहीं"],
                  "answer_en": "Dirty (गंदा)",
                  "answer_hi": "गंदा"
                },
                {
                  "num": 34,
                  "question_en": "Identify the adjective: 'तंग गली में रहते हैं।'",
                  "question_hi": "'तंग गली में रहते हैं।' में विशेषण कौन-सा है?",
                  "options_en": ["Narrow (तंग)", "Lane (गली)", "Live (रहते)", "Are (हैं)"],
                  "options_hi": ["तंग", "गली", "रहते", "हैं"],
                  "answer_en": "Narrow (तंग)",
                  "answer_hi": "तंग"
                },
                {
                  "num": 35,
                  "question_en": "Identify the adjective: 'नरम हृदय वाला आदमी।'",
                  "question_hi": "'नरम हृदय वाला आदमी।' में विशेषण कौन-सा है?",
                  "options_en": ["Soft-hearted (नरम हृदय वाला)", "Man (आदमी)", "None", "None"],
                  "options_hi": ["नरम हृदय वाला", "आदमी", "कोई नहीं", "कोई नहीं"],
                  "answer_en": "Soft-hearted (नरम हृदय वाला)",
                  "answer_hi": "नरम हृदय वाला"
                },
                {
                  "num": 36,
                  "question_en": "Identify the adjective: 'चमकदार आँखें हैं।'",
                  "question_hi": "'चमकदार आँखें हैं।' में विशेषण कौन-सा है?",
                  "options_en": ["Shining (चमकदार)", "Eyes (आँखें)", "Are (हैं)", "None"],
                  "options_hi": ["चमकदार", "आँखें", "हैं", "कोई नहीं"],
                  "answer_en": "Shining (चमकदार)",
                  "answer_hi": "चमकदार"
                },
                {
                  "num": 37,
                  "question_en": "Identify the adjective: 'खुशबूदार फूल है।'",
                  "question_hi": "'खुशबूदार फूल है।' में विशेषण कौन-सा है?",
                  "options_en": ["Fragrant (खुशबूदार)", "Flower (फूल)", "Is (है)", "None"],
                  "options_hi": ["खुशबूदार", "फूल", "है", "कोई नहीं"],
                  "answer_en": "Fragrant (खुशबूदार)",
                  "answer_hi": "खुशबूदार"
                },
                {
                  "num": 38,
                  "question_en": "Identify the adjective: 'टेढ़ी रेखा खींचो।'",
                  "question_hi": "'टेढ़ी रेखा खींचो।' में विशेषण कौन-सा है?",
                  "options_en": ["Crooked (टेढ़ी)", "Line (रेखा)", "Draw (खींचो)", "None"],
                  "options_hi": ["टेढ़ी", "रेखा", "खींचो", "कोई नहीं"],
                  "answer_en": "Crooked (टेढ़ी)",
                  "answer_hi": "टेढ़ी"
                },
                {
                  "num": 39,
                  "question_en": "Identify the adjective: 'सूखा पत्ता गिरा।'",
                  "question_hi": "'सूखा पत्ता गिरा।' में विशेषण कौन-सा है?",
                  "options_en": ["Dry (सूखा)", "Leaf (पत्ता)", "Fell (गिरा)", "None"],
                  "options_hi": ["सूखा", "पत्ता", "गिरा", "कोई नहीं"],
                  "answer_en": "Dry (सूखा)",
                  "answer_hi": "सूखा"
                },
                {
                  "num": 40,
                  "question_en": "Identify the adjective: 'भीगी मिट्टी है।'",
                  "question_hi": "'भीगी मिट्टी है।' में विशेषण कौन-सा है?",
                  "options_en": ["Wet (भीगी)", "Soil (मिट्टी)", "Is (है)", "None"],
                  "options_hi": ["भीगी", "मिट्टी", "है", "कोई नहीं"],
                  "answer_en": "Wet (भीगी)",
                  "answer_hi": "भीगी"
                },
                {
                  "num": 41,
                  "question_en": "Identify the adjective: 'फीका स्वाद है।'",
                  "question_hi": "'फीका स्वाद है।' में विशेषण कौन-सा है?",
                  "options_en": ["Bland (फीका)", "Taste (स्वाद)", "Is (है)", "None"],
                  "options_hi": ["फीका", "स्वाद", "है", "कोई नहीं"],
                  "answer_en": "Bland (फीका)",
                  "answer_hi": "फीका"
                },
                {
                  "num": 42,
                  "question_en": "Identify the adjective: 'चिपचिपा हाथ है।'",
                  "question_hi": "'चिपचिपा हाथ है।' में विशेषण कौन-सा है?",
                  "options_en": ["Sticky (चिपचिपा)", "Hand (हाथ)", "Is (है)", "None"],
                  "options_hi": ["चिपचिपा", "हाथ", "है", "कोई नहीं"],
                  "answer_en": "Sticky (चिपचिपा)",
                  "answer_hi": "चिपचिपा"
                },
                {
                  "num": 43,
                  "question_en": "Identify the adjective: 'खुरदुरा पत्थर है।'",
                  "question_hi": "'खुरदुरा पत्थर है।' में विशेषण कौन-सा है?",
                  "options_en": ["Rough (खुरदुरा)", "Stone (पत्थर)", "Is (है)", "None"],
                  "options_hi": ["खुरदुरा", "पत्थर", "है", "कोई नहीं"],
                  "answer_en": "Rough (खुरदुरा)",
                  "answer_hi": "खुरदुरा"
                },
                {
                  "num": 44,
                  "question_en": "Identify the adjective: 'चमकीला सितारा है।'",
                  "question_hi": "'चमकीला सितारा है।' में विशेषण कौन-सा है?",
                  "options_en": ["Shiny (चमकीला)", "Star (सितारा)", "Is (है)", "None"],
                  "options_hi": ["चमकीला", "सितारा", "है", "कोई नहीं"],
                  "answer_en": "Shiny (चमकीला)",
                  "answer_hi": "चमकीला"
                },
                {
                  "num": 45,
                  "question_en": "Identify the adjective: 'ढीला पेंच है।'",
                  "question_hi": "'ढीला पेंच है।' में विशेषण कौन-सा है?",
                  "options_en": ["Loose (ढीला)", "Screw (पेंच)", "Is (है)", "None"],
                  "options_hi": ["ढीला", "पेंच", "है", "कोई नहीं"],
                  "answer_en": "Loose (ढीला)",
                  "answer_hi": "ढीला"
                },
                {
                  "num": 46,
                  "question_en": "Identify the adjective: 'कसा हुआ नट है।'",
                  "question_hi": "'कसा हुआ नट है।' में विशेषण कौन-सा है?",
                  "options_en": ["Tight (कसा हुआ)", "Nut (नट)", "Is (है)", "None"],
                  "options_hi": ["कसा हुआ", "नट", "है", "कोई नहीं"],
                  "answer_en": "Tight (कसा हुआ)",
                  "answer_hi": "कसा हुआ"
                },
                {
                  "num": 47,
                  "question_en": "Identify the adjective: 'बासी रोटी है।'",
                  "question_hi": "'बासी रोटी है।' में विशेषण कौन-सा है?",
                  "options_en": ["Stale (बासी)", "Bread (रोटी)", "Is (है)", "None"],
                  "options_hi": ["बासी", "रोटी", "है", "कोई नहीं"],
                  "answer_en": "Stale (बासी)",
                  "answer_hi": "बासी"
                },
                {
                  "num": 48,
                  "question_en": "Identify the adjective: 'ताज़ी हवा आ रही है।'",
                  "question_hi": "'ताज़ी हवा आ रही है।' में विशेषण कौन-सा है?",
                  "options_en": ["Fresh (ताज़ी)", "Air (हवा)", "Coming (आ रही)", "Is (है)"],
                  "options_hi": ["ताज़ी", "हवा", "आ रही", "है"],
                  "answer_en": "Fresh (ताज़ी)",
                  "answer_hi": "ताज़ी"
                },
                {
                  "num": 49,
                  "question_en": "Identify the adjective: 'खोखला पेड़ है।'",
                  "question_hi": "'खोखला पेड़ है।' में विशेषण कौन-सा है?",
                  "options_en": ["Hollow (खोखला)", "Tree (पेड़)", "Is (है)", "None"],
                  "options_hi": ["खोखला", "पेड़", "है", "कोई नहीं"],
                  "answer_en": "Hollow (खोखला)",
                  "answer_hi": "खोखला"
                },
                {
                  "num": 50,
                  "question_en": "Identify the adjective: 'चिकना बाल है।'",
                  "question_hi": "'चिकना बाल है।' में विशेषण कौन-सा है?",
                  "options_en": ["Smooth (चिकना)", "Hair (बाल)", "Is (है)", "None"],
                  "options_hi": ["चिकना", "बाल", "है", "कोई नहीं"],
                  "answer_en": "Smooth (चिकना)",
                  "answer_hi": "चिकना"
                }
              
                // Add 35 more MCQs following the same pattern...
              

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
                window.location.href = "/RTS/Public/Deshbord/category/test/submit-test.html";
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