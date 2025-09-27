const questions = [
 {
    num: 1,
    question_en: "Which property controls the alignment of grid items along the row axis?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स को पंक्ति अक्ष के साथ संरेखित करती है?",
    options_en: ["justify-items", "align-items", "justify-content", "align-content"],
    options_hi: ["जस्टिफाई-आइटम्स", "अलाइन-आइटम्स", "जस्टिफाई-कंटेंट", "अलाइन-कंटेंट"],
    answer_en: "justify-items",
    answer_hi: "जस्टिफाई-आइटम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which CSS property defines the number of columns in a grid container?",
    question_hi: "कौन-सी CSS प्रॉपर्टी ग्रिड कंटेनर में कॉलम की संख्या निर्धारित करती है?",
    options_en: ["grid-template-columns", "grid-template-rows", "grid-column", "grid-row"],
    options_hi: ["ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-टेम्प्लेट-रोस", "ग्रिड-कॉलम", "ग्रिड-रो"],
    answer_en: "grid-template-columns",
    answer_hi: "ग्रिड-टेम्प्लेट-कॉलम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property controls the space between grid rows?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड पंक्तियों के बीच की दूरी नियंत्रित करती है?",
    options_en: ["grid-row-gap", "grid-column-gap", "grid-gap", "grid-row-spacing"],
    options_hi: ["ग्रिड-रो-गैप", "ग्रिड-कॉलम-गैप", "ग्रिड-गैप", "ग्रिड-रो-स्पेसिंग"],
    answer_en: "grid-row-gap",
    answer_hi: "ग्रिड-रो-गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property is shorthand for setting both row and column gaps in grid?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड में पंक्ति और कॉलम गैप दोनों सेट करने के लिए शॉर्टहैंड है?",
    options_en: ["grid-gap", "gap", "grid-row-gap", "grid-column-gap"],
    options_hi: ["ग्रिड-गैप", "गैप", "ग्रिड-रो-गैप", "ग्रिड-कॉलम-गैप"],
    answer_en: "gap",
    answer_hi: "गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "What does 'grid-auto-flow: row' do?",
    question_hi: "'grid-auto-flow: row' क्या करता है?",
    options_en: [
      "Places items row-wise",
      "Places items column-wise",
      "Places items in layers",
      "Disables grid auto flow"
    ],
    options_hi: [
      "आइटम्स को पंक्ति के अनुसार रखता है",
      "आइटम्स को कॉलम के अनुसार रखता है",
      "आइटम्स को परतों में रखता है",
      "ग्रिड ऑटो फ्लो को अक्षम करता है"
    ],
    answer_en: "Places items row-wise",
    answer_hi: "आइटम्स को पंक्ति के अनुसार रखता है",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property defines the starting grid line for a grid item?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम के लिए शुरूआती ग्रिड लाइन को परिभाषित करती है?",
    options_en: ["grid-column-start", "grid-row-start", "grid-area", "grid-column-end"],
    options_hi: ["ग्रिड-कॉलम-स्टार्ट", "ग्रिड-रो-स्टार्ट", "ग्रिड-एरिया", "ग्रिड-कॉलम-एंड"],
    answer_en: "grid-column-start",
    answer_hi: "ग्रिड-कॉलम-स्टार्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "What is the default value of 'grid-auto-flow'?",
    question_hi: "'grid-auto-flow' का डिफ़ॉल्ट मान क्या है?",
    options_en: ["row", "column", "dense", "none"],
    options_hi: ["रो", "कॉलम", "डेंस", "नन"],
    answer_en: "row",
    answer_hi: "रो",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property allows you to assign a name to a grid area?",
    question_hi: "कौन-सी प्रॉपर्टी आपको ग्रिड क्षेत्र को नाम देने की अनुमति देती है?",
    options_en: ["grid-area", "grid-template-areas", "grid-template-columns", "grid-column"],
    options_hi: ["ग्रिड-एरिया", "ग्रिड-टेम्प्लेट-एरियास", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-कॉलम"],
    answer_en: "grid-area",
    answer_hi: "ग्रिड-एरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property specifies grid-template areas?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड-टेम्प्लेट-एरियास को निर्दिष्ट करती है?",
    options_en: ["grid-template-areas", "grid-area", "grid-template-columns", "grid-auto-flow"],
    options_hi: ["ग्रिड-टेम्प्लेट-एरियास", "ग्रिड-एरिया", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-ऑटो-फ्लो"],
    answer_en: "grid-template-areas",
    answer_hi: "ग्रिड-टेम्प्लेट-एरियास",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "How do you make a grid container span across 3 columns?",
    question_hi: "आप ग्रिड कंटेनर को 3 कॉलम तक कैसे फैला सकते हैं?",
    options_en: ["grid-column: span 3;", "grid-row: span 3;", "grid-area: span 3;", "grid-span: 3;"],
    options_hi: ["ग्रिड-कॉलम: स्पैन 3;", "ग्रिड-रो: स्पैन 3;", "ग्रिड-एरिया: स्पैन 3;", "ग्रिड-स्पैन: 3;"],
    answer_en: "grid-column: span 3;",
    answer_hi: "ग्रिड-कॉलम: स्पैन 3;",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property sets the size of grid rows?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड पंक्तियों का आकार सेट करती है?",
    options_en: ["grid-template-rows", "grid-template-columns", "grid-auto-rows", "grid-row-gap"],
    options_hi: ["ग्रिड-टेम्प्लेट-रोस", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-ऑटो-रोस", "ग्रिड-रो-गैप"],
    answer_en: "grid-template-rows",
    answer_hi: "ग्रिड-टेम्प्लेट-रोस",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What does 'fr' unit represent in CSS Grid?",
    question_hi: "CSS Grid में 'fr' यूनिट क्या दर्शाती है?",
    options_en: ["Fraction of available space", "Fixed size in pixels", "Flexible rows", "Font-relative size"],
    options_hi: ["उपलब्ध स्थान का हिस्सा", "पिक्सेल में निश्चित आकार", "लचीली पंक्तियाँ", "फ़ॉन्ट-सम्बंधित आकार"],
    answer_en: "Fraction of available space",
    answer_hi: "उपलब्ध स्थान का हिस्सा",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property controls the alignment of grid items along the column axis?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स को कॉलम अक्ष के साथ संरेखित करती है?",
    options_en: ["align-items", "justify-items", "align-content", "justify-content"],
    options_hi: ["अलाइन-आइटम्स", "जस्टिफाई-आइटम्स", "अलाइन-कंटेंट", "जस्टिफाई-कंटेंट"],
    answer_en: "align-items",
    answer_hi: "अलाइन-आइटम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "What does 'grid-template-columns: repeat(3, 1fr)' do?",
    question_hi: "'grid-template-columns: repeat(3, 1fr)' क्या करता है?",
    options_en: [
      "Creates 3 equal columns",
      "Creates 1 column with 3fr width",
      "Creates 3 rows",
      "Repeats 1 column 3 times vertically"
    ],
    options_hi: [
      "3 बराबर कॉलम बनाता है",
      "1 कॉलम 3fr चौड़ा बनाता है",
      "3 पंक्तियाँ बनाता है",
      "1 कॉलम को 3 बार लंबवत दोहराता है"
    ],
    answer_en: "Creates 3 equal columns",
    answer_hi: "3 बराबर कॉलम बनाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property defines the end grid line for a grid item?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम के लिए अंत ग्रिड लाइन को परिभाषित करती है?",
    options_en: ["grid-column-end", "grid-row-end", "grid-area", "grid-column-start"],
    options_hi: ["ग्रिड-कॉलम-एंड", "ग्रिड-रो-एंड", "ग्रिड-एरिया", "ग्रिड-कॉलम-स्टार्ट"],
    answer_en: "grid-column-end",
    answer_hi: "ग्रिड-कॉलम-एंड",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which CSS property specifies the size of implicit grid rows?",
    question_hi: "कौन-सी CSS प्रॉपर्टी अप्रत्यक्ष ग्रिड पंक्तियों का आकार निर्दिष्ट करती है?",
    options_en: ["grid-auto-rows", "grid-template-rows", "grid-auto-columns", "grid-row-gap"],
    options_hi: ["ग्रिड-ऑटो-रोस", "ग्रिड-टेम्प्लेट-रोस", "ग्रिड-ऑटो-कॉलम्स", "ग्रिड-रो-गैप"],
    answer_en: "grid-auto-rows",
    answer_hi: "ग्रिड-ऑटो-रोस",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What does 'justify-content' control in a grid container?",
    question_hi: "ग्रिड कंटेनर में 'justify-content' क्या नियंत्रित करता है?",
    options_en: [
      "Alignment of entire grid along row axis",
      "Alignment of items within grid cells",
      "Space between rows",
      "Size of grid cells"
    ],
    options_hi: [
      "पंक्ति अक्ष के साथ पूरे ग्रिड का संरेखण",
      "ग्रिड सेल्स के भीतर आइटम का संरेखण",
      "पंक्तियों के बीच की दूरी",
      "ग्रिड सेल्स का आकार"
    ],
    answer_en: "Alignment of entire grid along row axis",
    answer_hi: "पंक्ति अक्ष के साथ पूरे ग्रिड का संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which property controls how content is aligned inside grid cells vertically?",
    question_hi: "ग्रिड सेल्स के अंदर सामग्री को लंबवत रूप से कैसे संरेखित किया जाता है यह कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["align-content", "justify-content", "align-items", "justify-items"],
    options_hi: ["अलाइन-कंटेंट", "जस्टिफाई-कंटेंट", "अलाइन-आइटम्स", "जस्टिफाई-आइटम्स"],
    answer_en: "align-content",
    answer_hi: "अलाइन-कंटेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What value of 'grid-auto-flow' places items densely to fill gaps?",
    question_hi: "'grid-auto-flow' का कौन-सा मान आइटम्स को अंतराल भरने के लिए घनीभूत (dense) करता है?",
    options_en: ["dense", "row", "column", "auto"],
    options_hi: ["डेंस", "रो", "कॉलम", "ऑटो"],
    answer_en: "dense",
    answer_hi: "डेंस",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property specifies the grid item's area in shorthand?",
    question_hi: "कौन-सी प्रॉपर्टी शॉर्टहैंड में ग्रिड आइटम का क्षेत्र निर्दिष्ट करती है?",
    options_en: ["grid-area", "grid-column", "grid-row", "grid-template-areas"],
    options_hi: ["ग्रिड-एरिया", "ग्रिड-कॉलम", "ग्रिड-रो", "ग्रिड-टेम्प्लेट-एरियास"],
    answer_en: "grid-area",
    answer_hi: "ग्रिड-एरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What is the default display value for a grid container?",
    question_hi: "ग्रिड कंटेनर के लिए डिफ़ॉल्ट डिस्प्ले मान क्या है?",
    options_en: ["grid", "block", "inline-grid", "inline-block"],
    options_hi: ["ग्रिड", "ब्लॉक", "इनलाइन-ग्रिड", "इनलाइन-ब्लॉक"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property allows overlapping of grid items?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स के ओवरलैपिंग की अनुमति देती है?",
    options_en: ["grid-area", "grid-column", "grid-auto-flow", "grid-gap"],
    options_hi: ["ग्रिड-एरिया", "ग्रिड-कॉलम", "ग्रिड-ऑटो-फ्लो", "ग्रिड-गैप"],
    answer_en: "grid-area",
    answer_hi: "ग्रिड-एरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "What does the 'minmax()' function do in CSS Grid?",
    question_hi: "CSS Grid में 'minmax()' फ़ंक्शन क्या करता है?",
    options_en: [
      "Sets a size range between min and max values",
      "Sets minimum size only",
      "Sets maximum size only",
      "Sets fixed size"
    ],
    options_hi: [
      "न्यूनतम और अधिकतम मानों के बीच आकार सेट करता है",
      "केवल न्यूनतम आकार सेट करता है",
      "केवल अधिकतम आकार सेट करता है",
      "स्थिर आकार सेट करता है"
    ],
    answer_en: "Sets a size range between min and max values",
    answer_hi: "न्यूनतम और अधिकतम मानों के बीच आकार सेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which unit is commonly used to define flexible lengths in CSS Grid?",
    question_hi: "CSS Grid में लचीली लंबाई को परिभाषित करने के लिए कौन-सी यूनिट आमतौर पर उपयोग की जाती है?",
    options_en: ["fr", "px", "%", "em"],
    options_hi: ["fr", "px", "%", "em"],
    answer_en: "fr",
    answer_hi: "fr",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property defines the placement of grid rows?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड पंक्तियों के स्थान को परिभाषित करती है?",
    options_en: ["grid-row", "grid-column", "grid-area", "grid-template-rows"],
    options_hi: ["ग्रिड-रो", "ग्रिड-कॉलम", "ग्रिड-एरिया", "ग्रिड-टेम्प्लेट-रोस"],
    answer_en: "grid-row",
    answer_hi: "ग्रिड-रो",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which property controls how grid items stretch to fill grid cells?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स को ग्रिड सेल्स भरने के लिए फैलाती है?",
    options_en: ["align-self", "justify-self", "align-content", "justify-content"],
    options_hi: ["अलाइन-सेल्फ", "जस्टिफाई-सेल्फ", "अलाइन-कंटेंट", "जस्टिफाई-कंटेंट"],
    answer_en: "align-self",
    answer_hi: "अलाइन-सेल्फ",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "What does 'grid-template' property combine?",
    question_hi: "'grid-template' प्रॉपर्टी क्या-क्या संयोजित करती है?",
    options_en: [
      "grid-template-rows and grid-template-columns",
      "grid-auto-flow and grid-gap",
      "grid-area and grid-template-areas",
      "grid-column and grid-row"
    ],
    options_hi: [
      "ग्रिड-टेम्प्लेट-रोस और ग्रिड-टेम्प्लेट-कॉलम्स",
      "ग्रिड-ऑटो-फ्लो और ग्रिड-गैप",
      "ग्रिड-एरिया और ग्रिड-टेम्प्लेट-एरियास",
      "ग्रिड-कॉलम और ग्रिड-रो"
    ],
    answer_en: "grid-template-rows and grid-template-columns",
    answer_hi: "ग्रिड-टेम्प्लेट-रोस और ग्रिड-टेम्प्लेट-कॉलम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which property controls the order of grid items?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड आइटम्स के क्रम को नियंत्रित करती है?",
    options_en: ["order", "z-index", "grid-area", "grid-row"],
    options_hi: ["ऑर्डर", "जेड-इंडेक्स", "ग्रिड-एरिया", "ग्रिड-रो"],
    answer_en: "order",
    answer_hi: "ऑर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "What is the effect of 'grid-auto-columns' property?",
    question_hi: "'grid-auto-columns' प्रॉपर्टी का क्या प्रभाव होता है?",
    options_en: [
      "Sets size for implicit columns",
      "Sets size for explicit columns",
      "Sets gap between columns",
      "Sets size for rows"
    ],
    options_hi: [
      "अप्रत्यक्ष कॉलम्स का आकार सेट करता है",
      "स्पष्ट कॉलम्स का आकार सेट करता है",
      "कॉलम्स के बीच गैप सेट करता है",
      "पंक्तियों का आकार सेट करता है"
    ],
    answer_en: "Sets size for implicit columns",
    answer_hi: "अप्रत्यक्ष कॉलम्स का आकार सेट करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which property can be used to name multiple grid areas in one declaration?",
    question_hi: "एक डिक्लेरेशन में कई ग्रिड क्षेत्रों को नामित करने के लिए कौन-सी प्रॉपर्टी का उपयोग किया जा सकता है?",
    options_en: ["grid-template-areas", "grid-area", "grid-template-columns", "grid-template-rows"],
    options_hi: ["ग्रिड-टेम्प्लेट-एरियास", "ग्रिड-एरिया", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-टेम्प्लेट-रोस"],
    answer_en: "grid-template-areas",
    answer_hi: "ग्रिड-टेम्प्लेट-एरियास",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which CSS unit represents the fraction of the available space in grid?",
    question_hi: "ग्रिड में उपलब्ध स्थान के हिस्से को कौन-सी CSS यूनिट दर्शाती है?",
    options_en: ["fr", "px", "em", "%"],
    options_hi: ["fr", "px", "em", "%"],
    answer_en: "fr",
    answer_hi: "fr",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "How do you span a grid item across 2 rows?",
    question_hi: "आप एक ग्रिड आइटम को 2 पंक्तियों तक कैसे फैलाते हैं?",
    options_en: ["grid-row: span 2;", "grid-column: span 2;", "grid-area: span 2;", "grid-row-start: 2;"],
    options_hi: ["ग्रिड-रो: स्पैन 2;", "ग्रिड-कॉलम: स्पैन 2;", "ग्रिड-एरिया: स्पैन 2;", "ग्रिड-रो-स्टार्ट: 2;"],
    answer_en: "grid-row: span 2;",
    answer_hi: "ग्रिड-रो: स्पैन 2;",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property controls the alignment of the entire grid container on the column axis?",
    question_hi: "कौन-सी प्रॉपर्टी कॉलम अक्ष पर पूरे ग्रिड कंटेनर का संरेखण नियंत्रित करती है?",
    options_en: ["justify-content", "align-content", "justify-items", "align-items"],
    options_hi: ["जस्टिफाई-कंटेंट", "अलाइन-कंटेंट", "जस्टिफाई-आइटम्स", "अलाइन-आइटम्स"],
    answer_en: "justify-content",
    answer_hi: "जस्टिफाई-कंटेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "What does 'grid-template-rows: auto 100px 1fr' specify?",
    question_hi: "'grid-template-rows: auto 100px 1fr' क्या निर्दिष्ट करता है?",
    options_en: [
      "Three rows with heights auto, 100px and fraction unit",
      "Three columns with specified widths",
      "Grid gaps for rows",
      "Grid areas layout"
    ],
    options_hi: [
      "तीन पंक्तियाँ जिनकी ऊँचाई auto, 100px और फ्रैक्शन यूनिट है",
      "तीन कॉलम जिनकी चौड़ाई निर्दिष्ट है",
      "पंक्तियों के लिए ग्रिड गैप्स",
      "ग्रिड क्षेत्रों का लेआउट"
    ],
    answer_en: "Three rows with heights auto, 100px and fraction unit",
    answer_hi: "तीन पंक्तियाँ जिनकी ऊँचाई auto, 100px और फ्रैक्शन यूनिट है",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "How do you create a grid container in CSS?",
    question_hi: "CSS में ग्रिड कंटेनर कैसे बनाते हैं?",
    options_en: ["display: grid;", "display: flex;", "display: block;", "display: inline-grid;"],
    options_hi: ["display: grid;", "display: flex;", "display: block;", "display: inline-grid;"],
    answer_en: "display: grid;",
    answer_hi: "display: grid;",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which property sets the minimum size of a grid track?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड ट्रैक का न्यूनतम आकार सेट करती है?",
    options_en: ["minmax()", "min-width", "min-height", "grid-auto-columns"],
    options_hi: ["minmax()", "min-width", "min-height", "grid-auto-columns"],
    answer_en: "minmax()",
    answer_hi: "minmax()",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which property specifies the size of implicit grid columns?",
    question_hi: "कौन-सी प्रॉपर्टी अप्रत्यक्ष ग्रिड कॉलम्स का आकार निर्दिष्ट करती है?",
    options_en: ["grid-auto-columns", "grid-auto-rows", "grid-template-columns", "grid-template-rows"],
    options_hi: ["ग्रिड-ऑटो-कॉलम्स", "ग्रिड-ऑटो-रोस", "ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-टेम्प्लेट-रोस"],
    answer_en: "grid-auto-columns",
    answer_hi: "ग्रिड-ऑटो-कॉलम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What value of 'grid-auto-flow' causes grid items to fill by column?",
    question_hi: "'grid-auto-flow' का कौन-सा मान आइटम्स को कॉलम अनुसार भरने के लिए होता है?",
    options_en: ["column", "row", "dense", "auto"],
    options_hi: ["कॉलम", "रो", "डेंस", "ऑटो"],
    answer_en: "column",
    answer_hi: "कॉलम",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property allows a grid item to be placed in multiple areas?",
    question_hi: "कौन-सी प्रॉपर्टी एक ग्रिड आइटम को कई क्षेत्रों में रखने की अनुमति देती है?",
    options_en: ["grid-area", "grid-column-start", "grid-row-start", "grid-column-end"],
    options_hi: ["ग्रिड-एरिया", "ग्रिड-कॉलम-स्टार्ट", "ग्रिड-रो-स्टार्ट", "ग्रिड-कॉलम-एंड"],
    answer_en: "grid-area",
    answer_hi: "ग्रिड-एरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "How do you define a 4 by 3 grid using grid-template-columns and grid-template-rows?",
    question_hi: "ग्रिड-टेम्प्लेट-कॉलम्स और ग्रिड-टेम्प्लेट-रोस का उपयोग करके 4 x 3 ग्रिड कैसे परिभाषित करते हैं?",
    options_en: [
      "grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);",
      "grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 1fr);",
      "grid-columns: 4; grid-rows: 3;",
      "grid-columns: 3; grid-rows: 4;"
    ],
    options_hi: [
      "grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);",
      "grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 1fr);",
      "grid-columns: 4; grid-rows: 3;",
      "grid-columns: 3; grid-rows: 4;"
    ],
    answer_en: "grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);",
    answer_hi: "grid-template-columns: repeat(4, 1fr); grid-template-rows: repeat(3, 1fr);",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "What does 'justify-self: stretch' do for a grid item?",
    question_hi: "'justify-self: stretch' ग्रिड आइटम के लिए क्या करता है?",
    options_en: [
      "Makes the item stretch to fill its grid cell horizontally",
      "Aligns item to the start of the cell",
      "Centers item in the cell",
      "Makes item smaller"
    ],
    options_hi: [
      "आइटम को उसके ग्रिड सेल के क्षैतिज रूप से भरने के लिए फैलाता है",
      "आइटम को सेल की शुरुआत पर संरेखित करता है",
      "आइटम को सेल के केंद्र में रखता है",
      "आइटम को छोटा करता है"
    ],
    answer_en: "Makes the item stretch to fill its grid cell horizontally",
    answer_hi: "आइटम को उसके ग्रिड सेल के क्षैतिज रूप से भरने के लिए फैलाता है",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property controls the vertical alignment of grid items inside their cells?",
    question_hi: "ग्रिड आइटम्स के सेल्स के अंदर लंबवत संरेखण कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["align-self", "justify-self", "align-items", "justify-items"],
    options_hi: ["अलाइन-सेल्फ", "जस्टिफाई-सेल्फ", "अलाइन-आइटम्स", "जस्टिफाई-आइटम्स"],
    answer_en: "align-self",
    answer_hi: "अलाइन-सेल्फ",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What value of 'grid-template-columns' creates three columns of equal width?",
    question_hi: "'grid-template-columns' का कौन-सा मान तीन बराबर चौड़ाई वाले कॉलम बनाता है?",
    options_en: ["repeat(3, 1fr)", "auto auto auto", "100px 100px 100px", "1fr 2fr 1fr"],
    options_hi: ["repeat(3, 1fr)", "auto auto auto", "100px 100px 100px", "1fr 2fr 1fr"],
    answer_en: "repeat(3, 1fr)",
    answer_hi: "repeat(3, 1fr)",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property specifies how the grid auto-placement algorithm works?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड ऑटो-प्लेसमेंट एल्गोरिदम को नियंत्रित करती है?",
    options_en: ["grid-auto-flow", "grid-auto-columns", "grid-auto-rows", "grid-gap"],
    options_hi: ["ग्रिड-ऑटो-फ्लो", "ग्रिड-ऑटो-कॉलम्स", "ग्रिड-ऑटो-रोस", "ग्रिड-गैप"],
    answer_en: "grid-auto-flow",
    answer_hi: "ग्रिड-ऑटो-फ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "How do you define named grid areas for layout?",
    question_hi: "लेआउट के लिए नामित ग्रिड क्षेत्र कैसे परिभाषित करते हैं?",
    options_en: ["Using grid-template-areas", "Using grid-area", "Using grid-gap", "Using grid-auto-flow"],
    options_hi: ["ग्रिड-टेम्प्लेट-एरियास का उपयोग करके", "ग्रिड-एरिया का उपयोग करके", "ग्रिड-गैप का उपयोग करके", "ग्रिड-ऑटो-फ्लो का उपयोग करके"],
    answer_en: "Using grid-template-areas",
    answer_hi: "ग्रिड-टेम्प्लेट-एरियास का उपयोग करके",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property controls the horizontal alignment of grid items inside their cells?",
    question_hi: "ग्रिड आइटम्स के सेल्स के अंदर क्षैतिज संरेखण कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["justify-self", "align-self", "justify-items", "align-items"],
    options_hi: ["जस्टिफाई-सेल्फ", "अलाइन-सेल्फ", "जस्टिफाई-आइटम्स", "अलाइन-आइटम्स"],
    answer_en: "justify-self",
    answer_hi: "जस्टिफाई-सेल्फ",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "What is the purpose of 'grid-template-areas'?",
    question_hi: "'grid-template-areas' का उद्देश्य क्या है?",
    options_en: [
      "To define named areas for grid layout",
      "To set column widths",
      "To set row heights",
      "To define gaps between grid items"
    ],
    options_hi: [
      "ग्रिड लेआउट के लिए नामित क्षेत्र परिभाषित करना",
      "कॉलम चौड़ाई सेट करना",
      "पंक्ति ऊँचाई सेट करना",
      "ग्रिड आइटम्स के बीच गैप परिभाषित करना"
    ],
    answer_en: "To define named areas for grid layout",
    answer_hi: "ग्रिड लेआउट के लिए नामित क्षेत्र परिभाषित करना",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property sets the size of a grid column?",
    question_hi: "कौन-सी प्रॉपर्टी ग्रिड कॉलम का आकार सेट करती है?",
    options_en: ["grid-template-columns", "grid-template-rows", "grid-auto-columns", "grid-auto-rows"],
    options_hi: ["ग्रिड-टेम्प्लेट-कॉलम्स", "ग्रिड-टेम्प्लेट-रोस", "ग्रिड-ऑटो-कॉलम्स", "ग्रिड-ऑटो-रोस"],
    answer_en: "grid-template-columns",
    answer_hi: "ग्रिड-टेम्प्लेट-कॉलम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property is used to control gaps between grid columns?",
    question_hi: "ग्रिड कॉलम्स के बीच गैप को नियंत्रित करने के लिए कौन-सी प्रॉपर्टी उपयोग की जाती है?",
    options_en: ["grid-column-gap", "grid-row-gap", "grid-gap", "gap"],
    options_hi: ["ग्रिड-कॉलम-गैप", "ग्रिड-रो-गैप", "ग्रिड-गैप", "गैप"],
    answer_en: "grid-column-gap",
    answer_hi: "ग्रिड-कॉलम-गैप",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "What does 'grid-row-start: 2;' do?",
    question_hi: "'grid-row-start: 2;' क्या करता है?",
    options_en: [
      "Positions the grid item to start on the second row",
      "Positions the grid item to end on the second row",
      "Positions the grid item to span two rows",
      "Positions the grid item on the first row"
    ],
    options_hi: [
      "ग्रिड आइटम को दूसरी पंक्ति पर शुरू करता है",
      "ग्रिड आइटम को दूसरी पंक्ति पर समाप्त करता है",
      "ग्रिड आइटम को दो पंक्तियों तक फैलाता है",
      "ग्रिड आइटम को पहली पंक्ति पर रखता है"
    ],
    answer_en: "Positions the grid item to start on the second row",
    answer_hi: "ग्रिड आइटम को दूसरी पंक्ति पर शुरू करता है",
    attempted: false,
    selected: ""
  }
  // Continue adding more questions 51 to 100
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
      const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
      if (q.attempted) {
          attempted++;
          if (q.selected === correctAnswer) score++;
      } else {
          notAttempted++;
      }
      results.push({ 
          question: language === "en" ? q.question_en : q.question_hi,
          selected: q.selected || "Not Answered", 
          correct: correctAnswer 
      });
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