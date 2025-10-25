const questions = [
  {
    num: 1,
    question_en: "Which CSS property is used to change the font of an element?",
    question_hi:
      "कौन सी CSS प्रॉपर्टी तत्व का फॉन्ट बदलने के लिए उपयोग होती है?",
    options_en: ["font-family", "font-size", "font-weight", "font-style"],
    options_hi: ["font-family", "font-size", "font-weight", "font-style"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट फैमिली",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Which property controls the horizontal alignment of text?",
    question_hi:
      "कौन सी प्रॉपर्टी टेक्स्ट के क्षैतिज संरेखण को नियंत्रित करती है?",
    options_en: [
      "text-align",
      "vertical-align",
      "align-content",
      "align-items",
    ],
    options_hi: [
      "text-align",
      "vertical-align",
      "align-content",
      "align-items",
    ],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट-अलाइन",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Which property controls the spacing between lines of text?",
    question_hi:
      "कौन सी प्रॉपर्टी टेक्स्ट की लाइनों के बीच की दूरी नियंत्रित करती है?",
    options_en: [
      "line-height",
      "letter-spacing",
      "word-spacing",
      "text-indent",
    ],
    options_hi: [
      "line-height",
      "letter-spacing",
      "word-spacing",
      "text-indent",
    ],
    answer_en: "line-height",
    answer_hi: "लाइन-हाइट",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "Which property is used to increase or decrease the space between characters?",
    question_hi:
      "कौन सी प्रॉपर्टी अक्षरों के बीच की दूरी बढ़ाने या घटाने के लिए उपयोग होती है?",
    options_en: [
      "letter-spacing",
      "word-spacing",
      "line-height",
      "text-indent",
    ],
    options_hi: [
      "letter-spacing",
      "word-spacing",
      "line-height",
      "text-indent",
    ],
    answer_en: "letter-spacing",
    answer_hi: "लेटर-स्पेसिंग",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Which property specifies the weight (thickness) of the font?",
    question_hi: "कौन सी प्रॉपर्टी फॉन्ट के मोटाई (वेट) को निर्धारित करती है?",
    options_en: ["font-weight", "font-size", "font-style", "font-variant"],
    options_hi: ["font-weight", "font-size", "font-style", "font-variant"],
    answer_en: "font-weight",
    answer_hi: "फॉन्ट-वेट",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "What value of 'text-align' aligns text to the center?",
    question_hi:
      "'text-align' का कौन सा मान टेक्स्ट को केंद्र में संरेखित करता है?",
    options_en: ["center", "left", "right", "justify"],
    options_hi: ["center", "left", "right", "justify"],
    answer_en: "center",
    answer_hi: "केंद्र",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Which property changes the font size of text?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट के फॉन्ट साइज को बदलती है?",
    options_en: ["font-size", "font-family", "font-weight", "font-style"],
    options_hi: ["font-size", "font-family", "font-weight", "font-style"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज़",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Which CSS property makes text italic?",
    question_hi: "कौन सी CSS प्रॉपर्टी टेक्स्ट को इटैलिक बनाती है?",
    options_en: [
      "font-style",
      "font-weight",
      "font-variant",
      "text-decoration",
    ],
    options_hi: [
      "font-style",
      "font-weight",
      "font-variant",
      "text-decoration",
    ],
    answer_en: "font-style",
    answer_hi: "फॉन्ट-स्टाइल",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Which value of 'font-weight' makes text bold?",
    question_hi: "'font-weight' का कौन सा मान टेक्स्ट को बोल्ड बनाता है?",
    options_en: ["bold", "normal", "lighter", "bolder"],
    options_hi: ["bold", "normal", "lighter", "bolder"],
    answer_en: "bold",
    answer_hi: "बोल्ड",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "What does the 'letter-spacing' property affect?",
    question_hi: "'letter-spacing' प्रॉपर्टी किस चीज़ को प्रभावित करती है?",
    options_en: [
      "Spacing between characters",
      "Spacing between words",
      "Spacing between lines",
      "Indentation",
    ],
    options_hi: [
      "अक्षरों के बीच की जगह",
      "शब्दों के बीच की जगह",
      "लाइनों के बीच की जगह",
      "इंडेंटेशन",
    ],
    answer_en: "Spacing between characters",
    answer_hi: "अक्षरों के बीच की जगह",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Which property aligns text to the right side?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट को दाईं ओर संरेखित करती है?",
    options_en: [
      "text-align: right",
      "text-align: left",
      "text-align: center",
      "text-align: justify",
    ],
    options_hi: [
      "text-align: right",
      "text-align: left",
      "text-align: center",
      "text-align: justify",
    ],
    answer_en: "text-align: right",
    answer_hi: "टेक्स्ट-अलाइन: राइट",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Which property sets the default font size for an element?",
    question_hi:
      "कौन सी प्रॉपर्टी किसी तत्व के लिए डिफ़ॉल्ट फॉन्ट साइज सेट करती है?",
    options_en: ["font-size", "font-family", "font-weight", "font-style"],
    options_hi: ["font-size", "font-family", "font-weight", "font-style"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज़",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Which CSS property is used to underline text?",
    question_hi:
      "कौन सी CSS प्रॉपर्टी टेक्स्ट के नीचे रेखा (underline) डालती है?",
    options_en: [
      "text-decoration",
      "border-bottom",
      "font-style",
      "text-underline",
    ],
    options_hi: [
      "text-decoration",
      "border-bottom",
      "font-style",
      "text-underline",
    ],
    answer_en: "text-decoration",
    answer_hi: "टेक्स्ट डेकोरेशन",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Which property controls how the text is justified?",
    question_hi:
      "कौन सी प्रॉपर्टी यह नियंत्रित करती है कि टेक्स्ट कैसे जस्टिफाई होता है?",
    options_en: [
      "text-align",
      "text-justify",
      "text-indent",
      "text-decoration",
    ],
    options_hi: [
      "text-align",
      "text-justify",
      "text-indent",
      "text-decoration",
    ],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट-अलाइन",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Which property sets the height of a line box?",
    question_hi: "कौन सी प्रॉपर्टी लाइन बॉक्स की ऊंचाई सेट करती है?",
    options_en: ["line-height", "font-size", "font-weight", "letter-spacing"],
    options_hi: ["line-height", "font-size", "font-weight", "letter-spacing"],
    answer_en: "line-height",
    answer_hi: "लाइन-हाइट",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Which property sets the spacing between words?",
    question_hi: "कौन सी प्रॉपर्टी शब्दों के बीच की जगह सेट करती है?",
    options_en: [
      "word-spacing",
      "letter-spacing",
      "line-height",
      "text-indent",
    ],
    options_hi: [
      "word-spacing",
      "letter-spacing",
      "line-height",
      "text-indent",
    ],
    answer_en: "word-spacing",
    answer_hi: "वर्ड-स्पेसिंग",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Which property changes the font style to normal, italic, or oblique?",
    question_hi:
      "कौन सी प्रॉपर्टी फॉन्ट स्टाइल को नॉर्मल, इटैलिक, या ऑब्लिक में बदलती है?",
    options_en: ["font-style", "font-weight", "font-variant", "font-family"],
    options_hi: ["font-style", "font-weight", "font-variant", "font-family"],
    answer_en: "font-style",
    answer_hi: "फॉन्ट-स्टाइल",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "What is the default value of 'font-weight'?",
    question_hi: "'font-weight' का डिफ़ॉल्ट मान क्या है?",
    options_en: ["normal", "bold", "lighter", "bolder"],
    options_hi: ["normal", "bold", "lighter", "bolder"],
    answer_en: "normal",
    answer_hi: "नॉर्मल",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en:
      "Which property is used to control the capitalization of text?",
    question_hi:
      "कौन सी प्रॉपर्टी टेक्स्ट के कैपिटलाइज़ेशन को नियंत्रित करती है?",
    options_en: [
      "text-transform",
      "text-align",
      "text-decoration",
      "font-variant",
    ],
    options_hi: [
      "text-transform",
      "text-align",
      "text-decoration",
      "font-variant",
    ],
    answer_en: "text-transform",
    answer_hi: "टेक्स्ट-ट्रांसफॉर्म",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Which property sets the spacing between letters to normal?",
    question_hi:
      "कौन सी प्रॉपर्टी अक्षरों के बीच की जगह को सामान्य पर सेट करती है?",
    options_en: ["normal", "inherit", "initial", "unset"],
    options_hi: ["normal", "inherit", "initial", "unset"],
    answer_en: "normal",
    answer_hi: "सामान्य",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "Which property controls the font size relative to the parent element?",
    question_hi:
      "कौन सी प्रॉपर्टी फॉन्ट साइज को पैरेंट तत्व के सापेक्ष नियंत्रित करती है?",
    options_en: [
      "font-size-relative",
      "font-size",
      "font-weight",
      "font-style",
    ],
    options_hi: [
      "font-size-relative",
      "font-size",
      "font-weight",
      "font-style",
    ],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज़",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Which property makes all text uppercase?",
    question_hi: "कौन सी प्रॉपर्टी सभी टेक्स्ट को अपरकेस में बदलती है?",
    options_en: [
      "text-transform: uppercase",
      "text-transform: lowercase",
      "text-transform: capitalize",
      "text-align: center",
    ],
    options_hi: [
      "text-transform: uppercase",
      "text-transform: lowercase",
      "text-transform: capitalize",
      "text-align: center",
    ],
    answer_en: "text-transform: uppercase",
    answer_hi: "टेक्स्ट-ट्रांसफॉर्म: अपरकेस",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "Which property is used to add space between the lines of text?",
    question_hi:
      "कौन सी प्रॉपर्टी टेक्स्ट की लाइनों के बीच जगह जोड़ने के लिए उपयोग होती है?",
    options_en: [
      "line-height",
      "letter-spacing",
      "word-spacing",
      "text-indent",
    ],
    options_hi: [
      "line-height",
      "letter-spacing",
      "word-spacing",
      "text-indent",
    ],
    answer_en: "line-height",
    answer_hi: "लाइन-हाइट",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Which property can be used to make text bold and heavy?",
    question_hi:
      "कौन सी प्रॉपर्टी टेक्स्ट को बोल्ड और भारी बनाने के लिए उपयोग होती है?",
    options_en: ["font-weight", "font-size", "font-style", "text-decoration"],
    options_hi: ["font-weight", "font-size", "font-style", "text-decoration"],
    answer_en: "font-weight",
    answer_hi: "फॉन्ट-वेट",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "Which property aligns text both left and right by adjusting spacing?",
    question_hi:
      "कौन सी प्रॉपर्टी टेक्स्ट को बाएं और दाएं दोनों ओर संरेखित करती है spacing समायोजित करके?",
    options_en: [
      "text-align: justify",
      "text-align: left",
      "text-align: right",
      "text-align: center",
    ],
    options_hi: [
      "text-align: justify",
      "text-align: left",
      "text-align: right",
      "text-align: center",
    ],
    answer_en: "text-align: justify",
    answer_hi: "टेक्स्ट-अलाइन: जस्टिफाई",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "Which CSS property is used to capitalize the first letter of each word?",
    question_hi:
      "कौन सी CSS प्रॉपर्टी हर शब्द के पहले अक्षर को कैपिटल करती है?",
    options_en: [
      "text-transform: capitalize",
      "text-transform: uppercase",
      "text-transform: lowercase",
      "font-variant",
    ],
    options_hi: [
      "text-transform: capitalize",
      "text-transform: uppercase",
      "text-transform: lowercase",
      "font-variant",
    ],
    answer_en: "text-transform: capitalize",
    answer_hi: "टेक्स्ट-ट्रांसफॉर्म: कैपिटलाइज़",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "What does the 'font-variant' property do?",
    question_hi: "'font-variant' प्रॉपर्टी क्या करती है?",
    options_en: [
      "Controls small-caps text",
      "Controls font weight",
      "Controls font size",
      "Controls font style",
    ],
    options_hi: [
      "स्मॉल-कैप्स टेक्स्ट को नियंत्रित करती है",
      "फॉन्ट वेट को नियंत्रित करती है",
      "फॉन्ट साइज को नियंत्रित करती है",
      "फॉन्ट स्टाइल को नियंत्रित करती है",
    ],
    answer_en: "Controls small-caps text",
    answer_hi: "स्मॉल-कैप्स टेक्स्ट को नियंत्रित करती है",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Which property is used to remove underline from links?",
    question_hi:
      "कौन सी प्रॉपर्टी लिंक से अंडरलाइन हटाने के लिए उपयोग होती है?",
    options_en: [
      "text-decoration: none",
      "text-decoration: underline",
      "font-style: normal",
      "font-weight: normal",
    ],
    options_hi: [
      "text-decoration: none",
      "text-decoration: underline",
      "font-style: normal",
      "font-weight: normal",
    ],
    answer_en: "text-decoration: none",
    answer_hi: "टेक्स्ट डेकोरेशन: नन",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Which property controls the thickness of font strokes?",
    question_hi: "कौन सी प्रॉपर्टी फॉन्ट स्ट्रोक की मोटाई नियंत्रित करती है?",
    options_en: ["font-weight", "font-size", "font-style", "font-variant"],
    options_hi: ["फॉन्ट-वेट", "फॉन्ट-साइज़", "फॉन्ट-स्टाइल", "फॉन्ट-वैरिएंट"],
    answer_en: "font-weight",
    answer_hi: "फॉन्ट-वेट",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Which property is used to change the text color?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट का रंग बदलने के लिए उपयोग होती है?",
    options_en: ["color", "background-color", "font-color", "text-color"],
    options_hi: ["कलर", "बैकग्राउंड-कलर", "फॉन्ट-कलर", "टेक्स्ट-कलर"],
    answer_en: "color",
    answer_hi: "कलर",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "Which property specifies whether the text should be displayed in uppercase, lowercase, or capitalized?",
    question_hi:
      "कौन सी प्रॉपर्टी निर्धारित करती है कि टेक्स्ट अपरकेस, लोअरकेस या कैपिटलाइज़्ड दिखेगा?",
    options_en: ["text-transform", "text-align", "font-style", "font-weight"],
    options_hi: [
      "टेक्स्ट-ट्रांसफॉर्म",
      "टेक्स्ट-अलाइन",
      "फॉन्ट-स्टाइल",
      "फॉन्ट-वेट",
    ],
    answer_en: "text-transform",
    answer_hi: "टेक्स्ट-ट्रांसफॉर्म",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "Which property adds space before the first line of text?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट की पहली लाइन से पहले जगह जोड़ती है?",
    options_en: [
      "text-indent",
      "line-height",
      "letter-spacing",
      "word-spacing",
    ],
    options_hi: [
      "टेक्स्ट-इंडेंट",
      "लाइन-हाइट",
      "लेटर-स्पेसिंग",
      "वर्ड-स्पेसिंग",
    ],
    answer_en: "text-indent",
    answer_hi: "टेक्स्ट-इंडेंट",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "Which property specifies the font size in relative units such as em or rem?",
    question_hi:
      "कौन सी प्रॉपर्टी फॉन्ट साइज को रिलेटिव यूनिट्स जैसे em या rem में सेट करती है?",
    options_en: ["font-size", "font-weight", "font-style", "font-variant"],
    options_hi: ["फॉन्ट-साइज़", "फॉन्ट-वेट", "फॉन्ट-स्टाइल", "फॉन्ट-वैरिएंट"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट-साइज़",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "Which property specifies whether text should be underlined, overlined, or struck through?",
    question_hi:
      "कौन सी प्रॉपर्टी निर्धारित करती है कि टेक्स्ट के नीचे लाइन, ऊपर लाइन, या स्ट्राइक-थ्रू होगी?",
    options_en: [
      "text-decoration",
      "text-transform",
      "font-style",
      "font-weight",
    ],
    options_hi: [
      "टेक्स्ट डेकोरेशन",
      "टेक्स्ट-ट्रांसफॉर्म",
      "फॉन्ट-स्टाइल",
      "फॉन्ट-वेट",
    ],
    answer_en: "text-decoration",
    answer_hi: "टेक्स्ट डेकोरेशन",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "Which CSS property controls the visibility of an element’s text?",
    question_hi:
      "कौन सी CSS प्रॉपर्टी किसी तत्व के टेक्स्ट की दृश्यता नियंत्रित करती है?",
    options_en: ["visibility", "display", "opacity", "color"],
    options_hi: ["विजिबिलिटी", "डिस्प्ले", "ओपैसिटी", "कलर"],
    answer_en: "visibility",
    answer_hi: "विजिबिलिटी",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "What value of 'text-align' justifies text by adjusting spacing?",
    question_hi: "'text-align' का कौन सा मान टेक्स्ट को जस्टिफाई करता है?",
    options_en: ["justify", "left", "right", "center"],
    options_hi: ["जस्टिफाई", "लेफ्ट", "राइट", "सेंटर"],
    answer_en: "justify",
    answer_hi: "जस्टिफाई",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "Which property controls the height of the line box that wraps the text?",
    question_hi:
      "कौन सी प्रॉपर्टी लाइन बॉक्स की ऊंचाई नियंत्रित करती है जो टेक्स्ट को लपेटती है?",
    options_en: ["line-height", "font-size", "letter-spacing", "word-spacing"],
    options_hi: ["लाइन-हाइट", "फॉन्ट-साइज़", "लेटर-स्पेसिंग", "वर्ड-स्पेसिंग"],
    answer_en: "line-height",
    answer_hi: "लाइन-हाइट",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "Which CSS property can change the text direction from left to right or right to left?",
    question_hi:
      "कौन सी CSS प्रॉपर्टी टेक्स्ट की दिशा को बाएं से दाएं या दाएं से बाएं बदल सकती है?",
    options_en: ["direction", "text-align", "writing-mode", "text-orientation"],
    options_hi: [
      "डायरेक्शन",
      "टेक्स्ट-अलाइन",
      "राइटिंग-मोड",
      "टेक्स्ट-ओरिएंटेशन",
    ],
    answer_en: "direction",
    answer_hi: "डायरेक्शन",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "Which property controls the font style to be normal, italic, or oblique?",
    question_hi:
      "कौन सी प्रॉपर्टी फॉन्ट स्टाइल को नॉर्मल, इटैलिक या ऑब्लिक में नियंत्रित करती है?",
    options_en: ["font-style", "font-weight", "font-variant", "font-family"],
    options_hi: ["फॉन्ट-स्टाइल", "फॉन्ट-वेट", "फॉन्ट-वैरिएंट", "फॉन्ट-फैमिली"],
    answer_en: "font-style",
    answer_hi: "फॉन्ट-स्टाइल",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Which property can be used to add a shadow effect to text?",
    question_hi:
      "कौन सी प्रॉपर्टी टेक्स्ट में शैडो प्रभाव जोड़ने के लिए उपयोग होती है?",
    options_en: ["text-shadow", "box-shadow", "shadow", "font-shadow"],
    options_hi: ["टेक्स्ट-शैडो", "बॉक्स-शैडो", "शैडो", "फॉन्ट-शैडो"],
    answer_en: "text-shadow",
    answer_hi: "टेक्स्ट-शैडो",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Which property controls the spacing between words?",
    question_hi: "कौन सी प्रॉपर्टी शब्दों के बीच की जगह नियंत्रित करती है?",
    options_en: [
      "word-spacing",
      "letter-spacing",
      "line-height",
      "text-indent",
    ],
    options_hi: [
      "वर्ड-स्पेसिंग",
      "लेटर-स्पेसिंग",
      "लाइन-हाइट",
      "टेक्स्ट-इंडेंट",
    ],
    answer_en: "word-spacing",
    answer_hi: "वर्ड-स्पेसिंग",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Which CSS property allows you to add a fallback font?",
    question_hi:
      "कौन सी CSS प्रॉपर्टी आपको फॉलबैक फॉन्ट जोड़ने की अनुमति देती है?",
    options_en: ["font-family", "font-weight", "font-style", "font-size"],
    options_hi: ["फॉन्ट-फैमिली", "फॉन्ट-वेट", "फॉन्ट-स्टाइल", "फॉन्ट-साइज़"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट-फैमिली",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "What is the effect of 'text-transform: lowercase'?",
    question_hi: "'text-transform: lowercase' का क्या प्रभाव होता है?",
    options_en: [
      "Converts all letters to lowercase",
      "Converts all letters to uppercase",
      "Capitalizes first letter",
      "No effect",
    ],
    options_hi: [
      "सभी अक्षरों को लोअरकेस में बदलता है",
      "सभी अक्षरों को अपरकेस में बदलता है",
      "पहले अक्षर को कैपिटलाइज़ करता है",
      "कोई प्रभाव नहीं",
    ],
    answer_en: "Converts all letters to lowercase",
    answer_hi: "सभी अक्षरों को लोअरकेस में बदलता है",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en:
      "Which property sets the thickness of a font to be lighter than normal?",
    question_hi:
      "कौन सी प्रॉपर्टी फॉन्ट की मोटाई को सामान्य से हल्का बनाती है?",
    options_en: [
      "font-weight: lighter",
      "font-weight: bold",
      "font-style: normal",
      "font-variant: normal",
    ],
    options_hi: [
      "फॉन्ट-वेट: लाइटर",
      "फॉन्ट-वेट: बोल्ड",
      "फॉन्ट-स्टाइल: नॉर्मल",
      "फॉन्ट-वैरिएंट: नॉर्मल",
    ],
    answer_en: "font-weight: lighter",
    answer_hi: "फॉन्ट-वेट: लाइटर",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "Which property is used to specify fallback fonts separated by commas?",
    question_hi:
      "कौन सी प्रॉपर्टी फॉलबैक फॉन्ट्स को कॉमा से अलग करने के लिए उपयोग होती है?",
    options_en: ["font-family", "font-weight", "font-style", "font-size"],
    options_hi: ["फॉन्ट-फैमिली", "फॉन्ट-वेट", "फॉन्ट-स्टाइल", "फॉन्ट-साइज़"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट-फैमिली",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Which property sets the text to be bold and italic together?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट को बोल्ड और इटैलिक दोनों बनाती है?",
    options_en: [
      "font-weight and font-style",
      "text-decoration",
      "font-variant",
      "text-transform",
    ],
    options_hi: [
      "फॉन्ट-वेट और फॉन्ट-स्टाइल",
      "टेक्स्ट डेकोरेशन",
      "फॉन्ट-वैरिएंट",
      "टेक्स्ट-ट्रांसफॉर्म",
    ],
    answer_en: "font-weight and font-style",
    answer_hi: "फॉन्ट-वेट और फॉन्ट-स्टाइल",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Which property controls the fallback generic font family like serif, sans-serif?",
    question_hi:
      "कौन सी प्रॉपर्टी फॉलबैक जेनेरिक फॉन्ट फैमिली जैसे serif, sans-serif को नियंत्रित करती है?",
    options_en: ["font-family", "font-weight", "font-style", "font-variant"],
    options_hi: ["फॉन्ट-फैमिली", "फॉन्ट-वेट", "फॉन्ट-स्टाइल", "फॉन्ट-वैरिएंट"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट-फैमिली",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "Which CSS property controls the spacing between words in a paragraph?",
    question_hi:
      "कौन सी CSS प्रॉपर्टी पैराग्राफ में शब्दों के बीच की जगह नियंत्रित करती है?",
    options_en: [
      "word-spacing",
      "letter-spacing",
      "line-height",
      "text-indent",
    ],
    options_hi: [
      "वर्ड-स्पेसिंग",
      "लेटर-स्पेसिंग",
      "लाइन-हाइट",
      "टेक्स्ट-इंडेंट",
    ],
    answer_en: "word-spacing",
    answer_hi: "वर्ड-स्पेसिंग",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Which property is used to align inline elements vertically?",
    question_hi: "कौन सी प्रॉपर्टी इनलाइन एलिमेंट्स को वर्टिकली अलाइन करती है?",
    options_en: ["vertical-align", "text-align", "line-height", "font-weight"],
    options_hi: ["वर्टिकल-अलाइन", "टेक्स्ट-अलाइन", "लाइन-हाइट", "फॉन्ट-वेट"],
    answer_en: "vertical-align",
    answer_hi: "वर्टिकल-अलाइन",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Which property sets the text to be both bold and underlined?",
    question_hi:
      "कौन सी प्रॉपर्टी टेक्स्ट को बोल्ड और अंडरलाइन दोनों बनाती है?",
    options_en: [
      "font-weight: bold and text-decoration: underline",
      "font-weight: normal and text-decoration: none",
      "font-style: italic and text-decoration: none",
      "text-transform: uppercase and text-decoration: none",
    ],
    options_hi: [
      "फॉन्ट-वेट: बोल्ड और टेक्स्ट डेकोरेशन: अंडरलाइन",
      "फॉन्ट-वेट: नॉर्मल और टेक्स्ट डेकोरेशन: नन",
      "फॉन्ट-स्टाइल: इटैलिक और टेक्स्ट डेकोरेशन: नन",
      "टेक्स्ट-ट्रांसफॉर्म: अपरकेस और टेक्स्ट डेकोरेशन: नन",
    ],
    answer_en: "font-weight: bold and text-decoration: underline",
    answer_hi: "फॉन्ट-वेट: बोल्ड और टेक्स्ट डेकोरेशन: अंडरलाइन",
    attempted: false,
    selected: "",
  },
  // Continue adding more questions 51 to 100
];

/
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
