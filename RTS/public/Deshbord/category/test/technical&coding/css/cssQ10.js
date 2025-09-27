const questions = [
 {
    num: 1,
    question_en: "Which display value makes an element behave like a block element?",
    question_hi: "कौन सा display मान एक एलिमेंट को ब्लॉक एलिमेंट की तरह व्यवहार करता है?",
    options_en: ["block", "inline", "inline-block", "none"],
    options_hi: ["ब्लॉक", "इनलाइन", "इनलाइन-ब्लॉक", "नन"],
    answer_en: "block",
    answer_hi: "ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which display value makes an element behave like an inline element?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन एलिमेंट की तरह व्यवहार करता है?",
    options_en: ["inline", "block", "flex", "grid"],
    options_hi: ["इनलाइन", "ब्लॉक", "फ्लेक्स", "ग्रिड"],
    answer_en: "inline",
    answer_hi: "इनलाइन",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which display property value allows an element to be inline but accept width and height?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन बनाता है लेकिन चौड़ाई और ऊँचाई स्वीकार करता है?",
    options_en: ["inline-block", "inline", "block", "none"],
    options_hi: ["इनलाइन-ब्लॉक", "इनलाइन", "ब्लॉक", "नन"],
    answer_en: "inline-block",
    answer_hi: "इनलाइन-ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which display value hides the element from the page completely?",
    question_hi: "कौन सा display मान एलिमेंट को पूरी तरह से पेज से छुपा देता है?",
    options_en: ["none", "block", "inline", "flex"],
    options_hi: ["नन", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "none",
    answer_hi: "नन",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which display value makes an element a flex container?",
    question_hi: "कौन सा display मान एक एलिमेंट को फ्लेक्स कंटेनर बनाता है?",
    options_en: ["flex", "block", "inline", "grid"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "ग्रिड"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which display value makes an element a grid container?",
    question_hi: "कौन सा display मान एक एलिमेंट को ग्रिड कंटेनर बनाता है?",
    options_en: ["grid", "flex", "block", "inline-block"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन-ब्लॉक"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which display type allows flex items to wrap onto multiple lines?",
    question_hi: "कौन सा display टाइप फ्लेक्स आइटम्स को कई लाइनों में लपेटने की अनुमति देता है?",
    options_en: ["flex-wrap", "inline", "block", "none"],
    options_hi: ["फ्लेक्स-व्रैप", "इनलाइन", "ब्लॉक", "नन"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-व्रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which display value keeps elements in the normal document flow and allows width and height?",
    question_hi: "कौन सा display मान एलिमेंट्स को सामान्य दस्तावेज़ प्रवाह में रखता है और चौड़ाई व ऊँचाई की अनुमति देता है?",
    options_en: ["inline-block", "inline", "block", "none"],
    options_hi: ["इनलाइन-ब्लॉक", "इनलाइन", "ब्लॉक", "नन"],
    answer_en: "inline-block",
    answer_hi: "इनलाइन-ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the default display value of a <div> element?",
    question_hi: "<div> एलिमेंट का डिफ़ॉल्ट display मान क्या है?",
    options_en: ["block", "inline", "inline-block", "none"],
    options_hi: ["ब्लॉक", "इनलाइन", "इनलाइन-ब्लॉक", "नन"],
    answer_en: "block",
    answer_hi: "ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the default display value of a <span> element?",
    question_hi: "<span> एलिमेंट का डिफ़ॉल्ट display मान क्या है?",
    options_en: ["inline", "block", "inline-block", "none"],
    options_hi: ["इनलाइन", "ब्लॉक", "इनलाइन-ब्लॉक", "नन"],
    answer_en: "inline",
    answer_hi: "इनलाइन",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which display value is useful for creating flexible layouts in CSS?",
    question_hi: "CSS में फ्लेक्सिबल लेआउट बनाने के लिए कौन सा display मान उपयोगी है?",
    options_en: ["flex", "block", "inline", "none"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which display property can you use to create a two-dimensional layout?",
    question_hi: "दो-आयामी लेआउट बनाने के लिए कौन सी display प्रॉपर्टी का उपयोग किया जा सकता है?",
    options_en: ["grid", "flex", "block", "inline"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which display value removes an element but does not affect the layout of other elements?",
    question_hi: "कौन सा display मान एलिमेंट को हटा देता है लेकिन अन्य एलिमेंट्स के लेआउट को प्रभावित नहीं करता?",
    options_en: ["none", "block", "inline", "flex"],
    options_hi: ["नन", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "none",
    answer_hi: "नन",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Can an element with display: inline accept width and height?",
    question_hi: "क्या display: inline वाला एलिमेंट चौड़ाई और ऊंचाई स्वीकार कर सकता है?",
    options_en: ["No", "Yes", "Only width", "Only height"],
    options_hi: ["नहीं", "हाँ", "केवल चौड़ाई", "केवल ऊंचाई"],
    answer_en: "No",
    answer_hi: "नहीं",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which display value allows elements to behave like inline elements but also accept height and width?",
    question_hi: "कौन सा display मान एलिमेंट्स को इनलाइन की तरह व्यवहार करने देता है लेकिन ऊंचाई और चौड़ाई स्वीकार भी करता है?",
    options_en: ["inline-block", "block", "inline", "none"],
    options_hi: ["इनलाइन-ब्लॉक", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "inline-block",
    answer_hi: "इनलाइन-ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which display value is best suited for responsive web layouts?",
    question_hi: "रिस्पॉन्सिव वेब लेआउट के लिए कौन सा display मान सबसे उपयुक्त है?",
    options_en: ["flex", "inline", "block", "none"],
    options_hi: ["फ्लेक्स", "इनलाइन", "ब्लॉक", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which display value can be used with grid-template-columns and grid-template-rows?",
    question_hi: "कौन सा display मान grid-template-columns और grid-template-rows के साथ उपयोग किया जाता है?",
    options_en: ["grid", "flex", "block", "inline"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which display property value allows flex items to be aligned horizontally or vertically?",
    question_hi: "कौन सा display मान फ्लेक्स आइटम्स को क्षैतिज या ऊर्ध्वाधर संरेखित करने देता है?",
    options_en: ["flex", "block", "inline", "none"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which display value is used to show an element as an inline flex container?",
    question_hi: "कौन सा display मान एलिमेंट को इनलाइन फ्लेक्स कंटेनर के रूप में दिखाता है?",
    options_en: ["inline-flex", "inline-block", "block", "flex"],
    options_hi: ["इनलाइन-फ्लेक्स", "इनलाइन-ब्लॉक", "ब्लॉक", "फ्लेक्स"],
    answer_en: "inline-flex",
    answer_hi: "इनलाइन-फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which display property value makes an element disappear but still take up space?",
    question_hi: "कौन सा display मान एलिमेंट को गायब कर देता है लेकिन फिर भी जगह लेता है?",
    options_en: ["visibility: hidden", "display: none", "opacity: 0", "position: absolute"],
    options_hi: ["विजिबिलिटी: हिडन", "डिस्प्ले: नन", "ओपेसिटी: 0", "पोजीशन: एब्सोल्यूट"],
    answer_en: "visibility: hidden",
    answer_hi: "विजिबिलिटी: हिडन",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which display value makes an element behave like a list-item?",
    question_hi: "कौन सा display मान एलिमेंट को लिस्ट-आइटम की तरह व्यवहार करता है?",
    options_en: ["list-item", "block", "inline", "flex"],
    options_hi: ["लिस्ट-आइटम", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "list-item",
    answer_hi: "लिस्ट-आइटम",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which display value creates a block-level flex container?",
    question_hi: "कौन सा display मान एक ब्लॉक-स्तरीय फ्लेक्स कंटेनर बनाता है?",
    options_en: ["flex", "inline-flex", "block", "inline-block"],
    options_hi: ["फ्लेक्स", "इनलाइन-फ्लेक्स", "ब्लॉक", "इनलाइन-ब्लॉक"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which display property value is best for making multi-column layouts?",
    question_hi: "मल्टी-कॉलम लेआउट बनाने के लिए कौन सा display मान सबसे अच्छा है?",
    options_en: ["grid", "flex", "block", "inline"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which display value allows an element to behave like an inline flex container?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन फ्लेक्स कंटेनर की तरह व्यवहार करने देता है?",
    options_en: ["inline-flex", "flex", "inline-block", "block"],
    options_hi: ["इनलाइन-फ्लेक्स", "फ्लेक्स", "इनलाइन-ब्लॉक", "ब्लॉक"],
    answer_en: "inline-flex",
    answer_hi: "इनलाइन-फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which display value makes an element behave like a table?",
    question_hi: "कौन सा display मान एक एलिमेंट को टेबल की तरह व्यवहार करने देता है?",
    options_en: ["table", "block", "inline", "flex"],
    options_hi: ["टेबल", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table",
    answer_hi: "टेबल",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which display value allows an element to behave like an inline table?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन टेबल की तरह व्यवहार करने देता है?",
    options_en: ["inline-table", "inline-block", "inline", "block"],
    options_hi: ["इनलाइन-टेबल", "इनलाइन-ब्लॉक", "इनलाइन", "ब्लॉक"],
    answer_en: "inline-table",
    answer_hi: "इनलाइन-टेबल",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which display value hides the element but still allows it to take up space?",
    question_hi: "कौन सा display मान एलिमेंट को छुपा देता है लेकिन फिर भी जगह लेता है?",
    options_en: ["visibility: hidden", "display: none", "opacity: 0", "position: absolute"],
    options_hi: ["विजिबिलिटी: हिडन", "डिस्प्ले: नन", "ओपेसिटी: 0", "पोजीशन: एब्सोल्यूट"],
    answer_en: "visibility: hidden",
    answer_hi: "विजिबिलिटी: हिडन",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which display value will remove an element from the layout flow entirely?",
    question_hi: "कौन सा display मान एलिमेंट को पूरी तरह से लेआउट फ्लो से हटा देता है?",
    options_en: ["display: none", "visibility: hidden", "opacity: 0", "position: fixed"],
    options_hi: ["डिस्प्ले: नन", "विजिबिलिटी: हिडन", "ओपेसिटी: 0", "पोजीशन: फिक्स्ड"],
    answer_en: "display: none",
    answer_hi: "डिस्प्ले: नन",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which display value makes the element a flex container with horizontal flow by default?",
    question_hi: "कौन सा display मान एलिमेंट को डिफ़ॉल्ट रूप से क्षैतिज फ्लो वाला फ्लेक्स कंटेनर बनाता है?",
    options_en: ["flex", "grid", "block", "inline-flex"],
    options_hi: ["फ्लेक्स", "ग्रिड", "ब्लॉक", "इनलाइन-फ्लेक्स"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What display value would you use to create a grid container?",
    question_hi: "ग्रिड कंटेनर बनाने के लिए आप कौन सा display मान उपयोग करेंगे?",
    options_en: ["grid", "flex", "block", "inline-block"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन-ब्लॉक"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which display value is the default for list items (<li>)?",
    question_hi: "<li> (लिस्ट आइटम) के लिए डिफ़ॉल्ट display मान क्या है?",
    options_en: ["list-item", "block", "inline", "flex"],
    options_hi: ["लिस्ट-आइटम", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "list-item",
    answer_hi: "लिस्ट-आइटम",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which display property is best for creating a navigation bar with flexible items?",
    question_hi: "फ्लेक्सिबल आइटम्स के साथ नेविगेशन बार बनाने के लिए कौन सी display प्रॉपर्टी सबसे अच्छी है?",
    options_en: ["flex", "block", "inline", "grid"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "ग्रिड"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which CSS display value would allow an element to shrink and grow dynamically within a container?",
    question_hi: "कौन सा CSS display मान एक एलिमेंट को कंटेनर के भीतर डायनामिक रूप से सिकुड़ने और बढ़ने की अनुमति देता है?",
    options_en: ["flex", "block", "inline", "none"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which display value is used to position an element as a table row?",
    question_hi: "कौन सा display मान एलिमेंट को टेबल रो के रूप में स्थिति करने के लिए उपयोग किया जाता है?",
    options_en: ["table-row", "block", "inline", "flex"],
    options_hi: ["टेबल-रो", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-row",
    answer_hi: "टेबल-रो",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which display value is used to position an element as a table cell?",
    question_hi: "कौन सा display मान एलिमेंट को टेबल सेल के रूप में स्थिति करने के लिए उपयोग किया जाता है?",
    options_en: ["table-cell", "block", "inline", "flex"],
    options_hi: ["टेबल-सेल", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-cell",
    answer_hi: "टेबल-सेल",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which display value allows nested flex containers inside other flex containers?",
    question_hi: "कौन सा display मान अन्य फ्लेक्स कंटेनरों के अंदर नेस्टेड फ्लेक्स कंटेनरों की अनुमति देता है?",
    options_en: ["flex", "grid", "block", "inline"],
    options_hi: ["फ्लेक्स", "ग्रिड", "ब्लॉक", "इनलाइन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which display value would make an element behave like an inline flex container?",
    question_hi: "कौन सा display मान एक एलिमेंट को इनलाइन फ्लेक्स कंटेनर की तरह व्यवहार करने देता है?",
    options_en: ["inline-flex", "flex", "inline", "block"],
    options_hi: ["इनलाइन-फ्लेक्स", "फ्लेक्स", "इनलाइन", "ब्लॉक"],
    answer_en: "inline-flex",
    answer_hi: "इनलाइन-फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which display property would you use for hidden elements that do not affect layout or take space?",
    question_hi: "कौन सी display प्रॉपर्टी आप छुपे हुए एलिमेंट्स के लिए उपयोग करेंगे जो लेआउट को प्रभावित नहीं करते या जगह नहीं लेते?",
    options_en: ["display: none", "visibility: hidden", "opacity: 0", "position: absolute"],
    options_hi: ["डिस्प्ले: नन", "विजिबिलिटी: हिडन", "ओपेसिटी: 0", "पोजीशन: एब्सोल्यूट"],
    answer_en: "display: none",
    answer_hi: "डिस्प्ले: नन",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which display value allows grid items to be positioned into rows and columns?",
    question_hi: "कौन सा display मान ग्रिड आइटम्स को पंक्तियों और स्तंभों में स्थिति करने की अनुमति देता है?",
    options_en: ["grid", "flex", "block", "inline"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which display value is best for creating responsive layouts that adapt to screen size?",
    question_hi: "स्क्रीन साइज के अनुसार अनुकूलित होने वाले रिस्पॉन्सिव लेआउट बनाने के लिए कौन सा display मान सबसे अच्छा है?",
    options_en: ["flex", "block", "inline", "none"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "नन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which display value sets an element to behave like a table column group?",
    question_hi: "कौन सा display मान एलिमेंट को टेबल कॉलम ग्रुप की तरह व्यवहार करने देता है?",
    options_en: ["table-column-group", "block", "inline", "flex"],
    options_hi: ["टेबल-कॉलम-ग्रुप", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-column-group",
    answer_hi: "टेबल-कॉलम-ग्रुप",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which display value is used for table captions?",
    question_hi: "टेबल कैप्शन के लिए कौन सा display मान उपयोग किया जाता है?",
    options_en: ["table-caption", "block", "inline", "flex"],
    options_hi: ["टेबल-कैप्शन", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-caption",
    answer_hi: "टेबल-कैप्शन",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which display value is useful for making a flex container that stacks items vertically?",
    question_hi: "वर्टिकल आइटम्स को स्टैक करने वाला फ्लेक्स कंटेनर बनाने के लिए कौन सा display मान उपयोगी है?",
    options_en: ["flex", "grid", "block", "inline"],
    options_hi: ["फ्लेक्स", "ग्रिड", "ब्लॉक", "इनलाइन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which display value allows elements to flow inline with other elements but also accept box model properties?",
    question_hi: "कौन सा display मान एलिमेंट्स को अन्य एलिमेंट्स के साथ इनलाइन फ्लो करने देता है लेकिन बॉक्स मॉडल प्रॉपर्टीज़ भी स्वीकार करता है?",
    options_en: ["inline-block", "inline", "block", "flex"],
    options_hi: ["इनलाइन-ब्लॉक", "इनलाइन", "ब्लॉक", "फ्लेक्स"],
    answer_en: "inline-block",
    answer_hi: "इनलाइन-ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which display value is used to reset an element to default block behavior?",
    question_hi: "कौन सा display मान एलिमेंट को डिफ़ॉल्ट ब्लॉक व्यवहार में रीसेट करने के लिए उपयोग किया जाता है?",
    options_en: ["block", "inline", "none", "flex"],
    options_hi: ["ब्लॉक", "इनलाइन", "नन", "फ्लेक्स"],
    answer_en: "block",
    answer_hi: "ब्लॉक",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which display value lets flex items be distributed along the main axis?",
    question_hi: "कौन सा display मान फ्लेक्स आइटम्स को मुख्य अक्ष के साथ वितरित करने देता है?",
    options_en: ["flex", "inline-flex", "block", "inline"],
    options_hi: ["फ्लेक्स", "इनलाइन-फ्लेक्स", "ब्लॉक", "इनलाइन"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which display value is used for table footers?",
    question_hi: "टेबल फुटर के लिए कौन सा display मान उपयोग किया जाता है?",
    options_en: ["table-footer-group", "block", "inline", "flex"],
    options_hi: ["टेबल-फुटर-ग्रुप", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-footer-group",
    answer_hi: "टेबल-फुटर-ग्रुप",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which display value is used for table header groups?",
    question_hi: "टेबल हेडर ग्रुप के लिए कौन सा display मान उपयोग किया जाता है?",
    options_en: ["table-header-group", "block", "inline", "flex"],
    options_hi: ["टेबल-हेडर-ग्रुप", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "table-header-group",
    answer_hi: "टेबल-हेडर-ग्रुप",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which display value is best suited for a container that needs to adapt to both rows and columns?",
    question_hi: "कौन सा display मान ऐसे कंटेनर के लिए सबसे उपयुक्त है जिसे पंक्तियों और स्तंभों दोनों में अनुकूलित होना होता है?",
    options_en: ["grid", "flex", "block", "inline-block"],
    options_hi: ["ग्रिड", "फ्लेक्स", "ब्लॉक", "इनलाइन-ब्लॉक"],
    answer_en: "grid",
    answer_hi: "ग्रिड",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which display value allows an element to behave like a run-in container?",
    question_hi: "कौन सा display मान एक एलिमेंट को रन-इन कंटेनर की तरह व्यवहार करने देता है?",
    options_en: ["run-in", "block", "inline", "flex"],
    options_hi: ["रन-इन", "ब्लॉक", "इनलाइन", "फ्लेक्स"],
    answer_en: "run-in",
    answer_hi: "रन-इन",
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