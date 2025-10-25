const questions = [
  {
    num: 1,
    question_en:
      "Which CSS property is used to change the background color of an input field?",
    question_hi:
      "इनपुट फ़ील्ड का बैकग्राउंड कलर बदलने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: ["background-color", "color", "border-color", "outline"],
    options_hi: ["पृष्ठभूमि रंग", "रंग", "बॉर्डर का रंग", "आउटलाइन"],
    answer_en: "background-color",
    answer_hi: "पृष्ठभूमि रंग",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Which property controls the text color inside an input box?",
    question_hi:
      "इनपुट बॉक्स के अंदर टेक्स्ट का रंग नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["color", "background-color", "border", "font-size"],
    options_hi: ["रंग", "पृष्ठभूमि रंग", "बॉर्डर", "फ़ॉन्ट आकार"],
    answer_en: "color",
    answer_hi: "रंग",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en:
      "Which CSS property is used to change the border color of an input field?",
    question_hi:
      "इनपुट फ़ील्ड के बॉर्डर का रंग बदलने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: ["border-color", "color", "background-color", "outline"],
    options_hi: ["बॉर्डर का रंग", "रंग", "पृष्ठभूमि रंग", "आउटलाइन"],
    answer_en: "border-color",
    answer_hi: "बॉर्डर का रंग",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "What CSS property is used to remove the outline from a focused input field?",
    question_hi:
      "फोकस किए गए इनपुट फ़ील्ड से आउटलाइन हटाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: ["outline", "border", "box-shadow", "text-decoration"],
    options_hi: ["आउटलाइन", "बॉर्डर", "बॉक्स शैडो", "टेक्स्ट सजावट"],
    answer_en: "outline",
    answer_hi: "आउटलाइन",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en:
      "Which property controls the size of text inside an input field?",
    question_hi:
      "इनपुट फ़ील्ड के अंदर टेक्स्ट के आकार को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["font-size", "color", "padding", "margin"],
    options_hi: ["फ़ॉन्ट आकार", "रंग", "पैडिंग", "मार्जिन"],
    answer_en: "font-size",
    answer_hi: "फ़ॉन्ट आकार",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "Which CSS property is used to style the checkbox color when checked?",
    question_hi:
      "चेकबॉक्स चुना गया हो तो उसका रंग बदलने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: ["accent-color", "background-color", "color", "border-color"],
    options_hi: ["एक्सेंट रंग", "पृष्ठभूमि रंग", "रंग", "बॉर्डर का रंग"],
    answer_en: "accent-color",
    answer_hi: "एक्सेंट रंग",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "How do you change the cursor style when hovering over a button?",
    question_hi: "बटन पर होवर करने पर कर्सर का स्टाइल कैसे बदलते हैं?",
    options_en: ["cursor", "pointer-events", "hover-style", "mouse-style"],
    options_hi: ["कर्सर", "पॉइंटर-इवेंट्स", "होवर स्टाइल", "माउस स्टाइल"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "Which CSS property adds space inside an input field around the text?",
    question_hi:
      "इनपुट फ़ील्ड के अंदर टेक्स्ट के चारों ओर जगह जोड़ने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["padding", "margin", "border", "outline"],
    options_hi: ["पैडिंग", "मार्जिन", "बॉर्डर", "आउटलाइन"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en:
      "Which CSS property adds space outside the input field element?",
    question_hi:
      "इनपुट फ़ील्ड एलिमेंट के बाहर जगह जोड़ने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["margin", "padding", "border", "outline"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर", "आउटलाइन"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "How do you make a button have rounded corners in CSS?",
    question_hi: "CSS में बटन के कोनों को गोल कैसे बनाते हैं?",
    options_en: [
      "border-radius",
      "border-style",
      "border-width",
      "border-color",
    ],
    options_hi: [
      "बॉर्डर-रेडियस",
      "बॉर्डर-स्टाइल",
      "बॉर्डर-चौड़ाई",
      "बॉर्डर का रंग",
    ],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर-रेडियस",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en:
      "Which property controls the font style (italic, normal) in inputs?",
    question_hi:
      "इनपुट में फ़ॉन्ट स्टाइल (इटैलिक, सामान्य) को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["font-style", "font-weight", "font-size", "text-align"],
    options_hi: [
      "फ़ॉन्ट स्टाइल",
      "फ़ॉन्ट वजन",
      "फ़ॉन्ट आकार",
      "टेक्स्ट संरेखण",
    ],
    answer_en: "font-style",
    answer_hi: "फ़ॉन्ट स्टाइल",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Which CSS property changes the font weight (boldness)?",
    question_hi: "कौन सी CSS प्रॉपर्टी फ़ॉन्ट का वजन (बोल्डनेस) बदलती है?",
    options_en: ["font-weight", "font-style", "font-size", "text-transform"],
    options_hi: [
      "फ़ॉन्ट वजन",
      "फ़ॉन्ट स्टाइल",
      "फ़ॉन्ट आकार",
      "टेक्स्ट ट्रांसफॉर्म",
    ],
    answer_en: "font-weight",
    answer_hi: "फ़ॉन्ट वजन",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "How can you disable an input field using CSS?",
    question_hi: "CSS का उपयोग करके इनपुट फ़ील्ड को कैसे डिसेबल करते हैं?",
    options_en: [
      "using :disabled pseudo-class",
      "using display:none",
      "using visibility:hidden",
      "using opacity:0",
    ],
    options_hi: [
      ":disabled छद्म-क्लास का उपयोग करके",
      "display:none का उपयोग करके",
      "visibility:hidden का उपयोग करके",
      "opacity:0 का उपयोग करके",
    ],
    answer_en: "using :disabled pseudo-class",
    answer_hi: ":disabled छद्म-क्लास का उपयोग करके",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "Which property controls the spacing between characters in an input?",
    question_hi:
      "इनपुट में अक्षरों के बीच की जगह को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: [
      "letter-spacing",
      "word-spacing",
      "line-height",
      "text-indent",
    ],
    options_hi: ["अक्षर-स्थान", "शब्द-स्थान", "लाइन-ऊँचाई", "टेक्स्ट इंडेंट"],
    answer_en: "letter-spacing",
    answer_hi: "अक्षर-स्थान",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "Which CSS property controls the vertical space between lines in an input?",
    question_hi:
      "इनपुट में लाइनों के बीच ऊर्ध्वाधर जगह को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["line-height", "letter-spacing", "word-spacing", "text-align"],
    options_hi: ["लाइन-ऊँचाई", "अक्षर-स्थान", "शब्द-स्थान", "टेक्स्ट संरेखण"],
    answer_en: "line-height",
    answer_hi: "लाइन-ऊँचाई",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "Which property controls the horizontal alignment of text inside an input field?",
    question_hi:
      "इनपुट फ़ील्ड के अंदर टेक्स्ट के क्षैतिज संरेखण को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: [
      "text-align",
      "vertical-align",
      "align-content",
      "justify-content",
    ],
    options_hi: [
      "टेक्स्ट संरेखण",
      "ऊर्ध्वाधर संरेखण",
      "सामग्री संरेखण",
      "न्याय-संग्रहण",
    ],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट संरेखण",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Which CSS pseudo-class styles the input when it is focused?",
    question_hi:
      "इनपुट पर फोकस होने पर कौन-सी CSS छद्म-क्लास उसे स्टाइल करती है?",
    options_en: [":focus", ":hover", ":active", ":visited"],
    options_hi: [":फोकस", ":होवर", ":सक्रिय", ":दर्शित"],
    answer_en: ":focus",
    answer_hi: ":फोकस",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Which CSS property controls the appearance of a disabled input field?",
    question_hi:
      "डिसेबल इनपुट फ़ील्ड की उपस्थिति को नियंत्रित करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["opacity", "visibility", "display", "cursor"],
    options_hi: ["अपारदर्शिता", "दृश्यता", "डिस्प्ले", "कर्सर"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en:
      "Which CSS property changes the shape of the cursor over a button?",
    question_hi: "बटन पर कर्सर के आकार को बदलने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["cursor", "pointer-events", "hover", "mouse-style"],
    options_hi: ["कर्सर", "पॉइंटर-इवेंट्स", "होवर", "माउस स्टाइल"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en:
      "Which property is used to increase the size of a checkbox or radio button?",
    question_hi:
      "चेकबॉक्स या रेडियो बटन का आकार बढ़ाने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["transform: scale()", "font-size", "width", "height"],
    options_hi: ["transform: scale()", "फ़ॉन्ट आकार", "चौड़ाई", "ऊँचाई"],
    answer_en: "transform: scale()",
    answer_hi: "transform: scale()",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "How do you change the font inside a button in CSS?",
    question_hi: "CSS में बटन के अंदर फ़ॉन्ट कैसे बदलते हैं?",
    options_en: ["font-family", "font-weight", "font-size", "font-style"],
    options_hi: ["फ़ॉन्ट परिवार", "फ़ॉन्ट वजन", "फ़ॉन्ट आकार", "फ़ॉन्ट स्टाइल"],
    answer_en: "font-family",
    answer_hi: "फ़ॉन्ट परिवार",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "Which CSS property changes the background color of a button when hovered?",
    question_hi:
      "होवर करने पर बटन का बैकग्राउंड रंग बदलने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["background-color", "color", "border-color", "opacity"],
    options_hi: ["पृष्ठभूमि रंग", "रंग", "बॉर्डर का रंग", "अपारदर्शिता"],
    answer_en: "background-color",
    answer_hi: "पृष्ठभूमि रंग",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Which property removes the default border from buttons?",
    question_hi:
      "बटन से डिफ़ॉल्ट बॉर्डर हटाने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["border", "outline", "box-shadow", "background"],
    options_hi: ["बॉर्डर", "आउटलाइन", "बॉक्स शैडो", "पृष्ठभूमि"],
    answer_en: "border",
    answer_hi: "बॉर्डर",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "Which CSS property is used to make the text inside a button uppercase?",
    question_hi:
      "बटन के अंदर टेक्स्ट को अपरकेस बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: ["text-transform", "text-align", "font-weight", "font-style"],
    options_hi: [
      "टेक्स्ट ट्रांसफॉर्म",
      "टेक्स्ट संरेखण",
      "फ़ॉन्ट वजन",
      "फ़ॉन्ट स्टाइल",
    ],
    answer_en: "text-transform",
    answer_hi: "टेक्स्ट ट्रांसफॉर्म",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "Which property controls the space between words inside an input field?",
    question_hi:
      "इनपुट फ़ील्ड के अंदर शब्दों के बीच की जगह को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: [
      "word-spacing",
      "letter-spacing",
      "line-height",
      "text-indent",
    ],
    options_hi: ["शब्द-स्थान", "अक्षर-स्थान", "लाइन-ऊँचाई", "टेक्स्ट इंडेंट"],
    answer_en: "word-spacing",
    answer_hi: "शब्द-स्थान",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "Which CSS property changes the appearance of a radio button when selected?",
    question_hi:
      "चयनित रेडियो बटन की उपस्थिति बदलने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: ["accent-color", "background-color", "border-color", "outline"],
    options_hi: ["एक्सेंट रंग", "पृष्ठभूमि रंग", "बॉर्डर का रंग", "आउटलाइन"],
    answer_en: "accent-color",
    answer_hi: "एक्सेंट रंग",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "How do you make the input field text bold using CSS?",
    question_hi:
      "CSS का उपयोग करके इनपुट फ़ील्ड के टेक्स्ट को बोल्ड कैसे बनाते हैं?",
    options_en: [
      "font-weight: bold;",
      "font-style: bold;",
      "text-decoration: bold;",
      "font-size: bold;",
    ],
    options_hi: [
      "font-weight: bold;",
      "font-style: bold;",
      "text-decoration: bold;",
      "font-size: bold;",
    ],
    answer_en: "font-weight: bold;",
    answer_hi: "font-weight: bold;",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "Which CSS property adds a shadow effect to inputs or buttons?",
    question_hi:
      "इनपुट या बटन में छाया प्रभाव जोड़ने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: [
      "box-shadow",
      "text-shadow",
      "border-shadow",
      "outline-shadow",
    ],
    options_hi: ["बॉक्स शैडो", "टेक्स्ट शैडो", "बॉर्डर शैडो", "आउटलाइन शैडो"],
    answer_en: "box-shadow",
    answer_hi: "बॉक्स शैडो",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Which property controls the transparency of an input or button element?",
    question_hi:
      "इनपुट या बटन एलिमेंट की पारदर्शिता को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["opacity", "visibility", "display", "z-index"],
    options_hi: ["अपारदर्शिता", "दृश्यता", "डिस्प्ले", "जेड-इंडेक्स"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "How do you increase the width of a button in CSS?",
    question_hi: "CSS में बटन की चौड़ाई कैसे बढ़ाते हैं?",
    options_en: ["width", "height", "padding", "margin"],
    options_hi: ["चौड़ाई", "ऊँचाई", "पैडिंग", "मार्जिन"],
    answer_en: "width",
    answer_hi: "चौड़ाई",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "Which CSS property is used to make input fields full width inside a container?",
    question_hi:
      "कंटेनर के अंदर इनपुट फ़ील्ड को पूरी चौड़ाई में दिखाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: [
      "width: 100%",
      "width: auto",
      "max-width: 100%",
      "min-width: 100%",
    ],
    options_hi: [
      "width: 100%",
      "width: auto",
      "max-width: 100%",
      "min-width: 100%",
    ],
    answer_en: "width: 100%",
    answer_hi: "width: 100%",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "Which property sets the font size of the placeholder text in an input?",
    question_hi:
      "इनपुट में प्लेसहोल्डर टेक्स्ट का फ़ॉन्ट आकार सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: [
      "::placeholder { font-size: }",
      "::input { font-size: }",
      "placeholder-size",
      "input-size",
    ],
    options_hi: [
      "::placeholder { font-size: }",
      "::input { font-size: }",
      "placeholder-size",
      "input-size",
    ],
    answer_en: "::placeholder { font-size: }",
    answer_hi: "::placeholder { font-size: }",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "Which CSS property controls the spacing between a checkbox and its label?",
    question_hi:
      "चेकबॉक्स और उसके लेबल के बीच की जगह को नियंत्रित करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["margin", "padding", "border-spacing", "letter-spacing"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर-स्थान", "अक्षर-स्थान"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Which CSS property is used to style a button's text color?",
    question_hi:
      "बटन के टेक्स्ट के रंग को स्टाइल करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: [
      "color",
      "background-color",
      "border-color",
      "text-decoration",
    ],
    options_hi: ["रंग", "पृष्ठभूमि रंग", "बॉर्डर का रंग", "टेक्स्ट सजावट"],
    answer_en: "color",
    answer_hi: "रंग",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "How can you add a hover effect on a button in CSS?",
    question_hi: "CSS में बटन पर होवर इफ़ेक्ट कैसे जोड़ते हैं?",
    options_en: [
      ":hover pseudo-class",
      ":focus pseudo-class",
      ":active pseudo-class",
      ":visited pseudo-class",
    ],
    options_hi: [
      ":होवर छद्म-क्लास",
      ":फोकस छद्म-क्लास",
      ":सक्रिय छद्म-क्लास",
      ":दर्शित छद्म-क्लास",
    ],
    answer_en: ":hover pseudo-class",
    answer_hi: ":होवर छद्म-क्लास",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "Which property controls the font style inside a checkbox label?",
    question_hi:
      "चेकबॉक्स लेबल के अंदर फ़ॉन्ट स्टाइल को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["font-style", "font-weight", "font-size", "text-align"],
    options_hi: [
      "फ़ॉन्ट स्टाइल",
      "फ़ॉन्ट वजन",
      "फ़ॉन्ट आकार",
      "टेक्स्ट संरेखण",
    ],
    answer_en: "font-style",
    answer_hi: "फ़ॉन्ट स्टाइल",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "How do you increase the height of a textarea in CSS?",
    question_hi: "CSS में टेक्स्टएरिया की ऊँचाई कैसे बढ़ाते हैं?",
    options_en: ["height", "width", "padding", "margin"],
    options_hi: ["ऊँचाई", "चौड़ाई", "पैडिंग", "मार्जिन"],
    answer_en: "height",
    answer_hi: "ऊँचाई",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "Which property removes the default focus outline from inputs?",
    question_hi:
      "इनपुट से डिफ़ॉल्ट फोकस आउटलाइन हटाने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: [
      "outline: none;",
      "border: none;",
      "box-shadow: none;",
      "text-decoration: none;",
    ],
    options_hi: [
      "outline: none;",
      "border: none;",
      "box-shadow: none;",
      "text-decoration: none;",
    ],
    answer_en: "outline: none;",
    answer_hi: "outline: none;",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "Which CSS property controls the background color of a radio button when hovered?",
    question_hi:
      "होवर करने पर रेडियो बटन का बैकग्राउंड रंग नियंत्रित करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["background-color", "color", "border-color", "opacity"],
    options_hi: ["पृष्ठभूमि रंग", "रंग", "बॉर्डर का रंग", "अपारदर्शिता"],
    answer_en: "background-color",
    answer_hi: "पृष्ठभूमि रंग",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "How do you align checkboxes vertically in CSS?",
    question_hi: "CSS में चेकबॉक्स को ऊर्ध्वाधर रूप से कैसे संरेखित करते हैं?",
    options_en: [
      "display: block;",
      "display: inline;",
      "vertical-align: middle;",
      "float: left;",
    ],
    options_hi: [
      "display: block;",
      "display: inline;",
      "vertical-align: middle;",
      "float: left;",
    ],
    answer_en: "display: block;",
    answer_hi: "display: block;",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Which property sets the border style of a button?",
    question_hi: "बटन के बॉर्डर स्टाइल को सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-style", "border-width", "border-color", "outline"],
    options_hi: ["बॉर्डर स्टाइल", "बॉर्डर चौड़ाई", "बॉर्डर का रंग", "आउटलाइन"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर स्टाइल",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "Which CSS property is used to add space between multiple input fields?",
    question_hi:
      "कई इनपुट फ़ील्ड के बीच जगह जोड़ने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: ["margin", "padding", "border-spacing", "gap"],
    options_hi: ["मार्जिन", "पैडिंग", "बॉर्डर-स्थान", "गैप"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "How do you center align text inside a button using CSS?",
    question_hi:
      "CSS का उपयोग करके बटन के अंदर टेक्स्ट को केंद्र में कैसे संरेखित करते हैं?",
    options_en: [
      "text-align: center;",
      "text-align: left;",
      "text-align: right;",
      "vertical-align: middle;",
    ],
    options_hi: [
      "text-align: center;",
      "text-align: left;",
      "text-align: right;",
      "vertical-align: middle;",
    ],
    answer_en: "text-align: center;",
    answer_hi: "text-align: center;",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en:
      "Which CSS property controls the cursor style when over an input field?",
    question_hi:
      "इनपुट फ़ील्ड पर कर्सर स्टाइल को नियंत्रित करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["cursor", "pointer-events", "hover", "mouse-style"],
    options_hi: ["कर्सर", "पॉइंटर-इवेंट्स", "होवर", "माउस स्टाइल"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "Which property is used to increase the clickable area of checkboxes?",
    question_hi:
      "चेकबॉक्स का क्लिक करने योग्य क्षेत्र बढ़ाने के लिए कौन-सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["padding", "margin", "width", "height"],
    options_hi: ["पैडिंग", "मार्जिन", "चौड़ाई", "ऊँचाई"],
    answer_en: "padding",
    answer_hi: "पैडिंग",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "How do you hide the checkbox but still keep it functional in CSS?",
    question_hi:
      "CSS में चेकबॉक्स को छुपाने के बावजूद इसे कार्यशील कैसे रखते हैं?",
    options_en: [
      "opacity: 0; width: 0; height: 0;",
      "display: none;",
      "visibility: hidden;",
      "z-index: -1;",
    ],
    options_hi: [
      "opacity: 0; width: 0; height: 0;",
      "display: none;",
      "visibility: hidden;",
      "z-index: -1;",
    ],
    answer_en: "opacity: 0; width: 0; height: 0;",
    answer_hi: "opacity: 0; width: 0; height: 0;",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Which CSS property controls the outline color of a focused input field?",
    question_hi:
      "फोकस किए गए इनपुट फ़ील्ड की आउटलाइन का रंग नियंत्रित करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: [
      "outline-color",
      "border-color",
      "box-shadow-color",
      "text-color",
    ],
    options_hi: [
      "आउटलाइन रंग",
      "बॉर्डर का रंग",
      "बॉक्स शैडो रंग",
      "टेक्स्ट रंग",
    ],
    answer_en: "outline-color",
    answer_hi: "आउटलाइन रंग",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "Which CSS property is used to style the placeholder text color?",
    question_hi:
      "प्लेसहोल्डर टेक्स्ट के रंग को स्टाइल करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    options_en: [
      "::placeholder { color: }",
      "::input { color: }",
      "placeholder-color",
      "input-color",
    ],
    options_hi: [
      "::placeholder { color: }",
      "::input { color: }",
      "placeholder-color",
      "input-color",
    ],
    answer_en: "::placeholder { color: }",
    answer_hi: "::placeholder { color: }",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "Which CSS property controls the visibility of an input element?",
    question_hi:
      "इनपुट एलिमेंट की दृश्यता को नियंत्रित करने वाली CSS प्रॉपर्टी कौन सी है?",
    options_en: ["visibility", "display", "opacity", "z-index"],
    options_hi: ["दृश्यता", "डिस्प्ले", "अपारदर्शिता", "जेड-इंडेक्स"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "Which property controls the font style inside a checkbox label?",
    question_hi:
      "चेकबॉक्स लेबल के अंदर फ़ॉन्ट स्टाइल को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["font-style", "font-weight", "font-size", "text-align"],
    options_hi: [
      "फ़ॉन्ट स्टाइल",
      "फ़ॉन्ट वजन",
      "फ़ॉन्ट आकार",
      "टेक्स्ट संरेखण",
    ],
    answer_en: "font-style",
    answer_hi: "फ़ॉन्ट स्टाइल",
    attempted: false,
    selected: "",
  },

  // Continue adding more questions 51 to 100
];

// Add more questions as needed...
let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timerInterval;

let timeLeft = 180 * 60; // 3 hours

function loadQuestion(index) {
  const questionText =
    language === "en"
      ? questions[index].question_en
      : questions[index].question_hi;
  const optionsArray =
    language === "en"
      ? questions[index].options_en
      : questions[index].options_hi;

  document.getElementById("question").textContent =
    `${questions[index].num}. ${questionText}`;
  document.getElementById("questionCounter").textContent =
    `Question ${index + 1} of ${questions.length}`;

  const optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";

  optionsArray.forEach((option, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="radio" name="option-${index}" id="option-${index}-${i}" value="${option}">
      <label for="option-${index}-${i}">${option}</label>
    `;
    const radio = li.querySelector("input");

    // If previously selected, mark checked
    if (questions[index].selected === option) {
      radio.checked = true;
      li.classList.add("selected");
    }

    // Click anywhere on the li
    li.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default radio behavior
      const q = questions[index];
      if (q.selected === option) {
        // Deselect if clicked again
        q.selected = "";
        q.attempted = false;
        radio.checked = false;
        li.classList.remove("selected");
      } else {
        // Select new option
        q.selected = option;
        q.attempted = true;

        // Deselect all other options visually
        optionsElement.querySelectorAll("li").forEach((l) => {
          l.classList.remove("selected");
          l.querySelector("input").checked = false;
        });

        radio.checked = true;
        li.classList.add("selected");
      }

      updateCircles();
    });

    optionsElement.appendChild(li);
  });

  updateCircles();
}

function markAttempted(index, selectedAnswer) {
  // Not needed now, selection handled inside li click
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
    let status =
      i === currentQuestion
        ? "active"
        : q.selected
          ? "answered"
          : "not-attempted";
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

  let attempted = 0,
    notAttempted = 0,
    score = 0;
  const results = [];

  questions.forEach((q) => {
    const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
    if (q.selected) {
      attempted++;
      if (q.selected === correctAnswer) score++;
    } else {
      notAttempted++;
    }
    results.push({
      question: language === "en" ? q.question_en : q.question_hi,
      selected: q.selected || "Not Answered",
      correct: correctAnswer,
    });
  });

  localStorage.setItem("attempted", attempted);
  localStorage.setItem("notAttempted", notAttempted);
  localStorage.setItem("score", score);
  localStorage.setItem("results", JSON.stringify(results));

  let viewResult = confirm(
    "Test submitted successfully! Do you want to view your result?"
  );
  if (viewResult) {
    window.location.href =
      "/RTS/public/Deshbord/category/test/submit-test.html";
  }
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! Submitting automatically.");
      submitQuiz();
    } else {
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `Time Left: ${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      timeLeft--;
    }
  }, 1000);
}

window.onload = function () {
  startTimer();
  loadQuestion(currentQuestion);
};
