const questions = [
   {
    num: 1,
    question_en: "What does CSS stand for?",
    question_hi: "CSS का पूरा नाम क्या है?",
    options_en: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    options_hi: ["कैस्केडिंग स्टाइल शीट्स", "कंप्यूटर स्टाइल शीट्स", "क्रिएटिव स्टाइल शीट्स", "कलरफुल स्टाइल शीट्स"],
    answer_en: "Cascading Style Sheets",
    answer_hi: "कैस्केडिंग स्टाइल शीट्स",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property is used to change the background color?",
    question_hi: "पृष्ठभूमि रंग बदलने के लिए कौन सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["background-color", "color", "bgcolor", "background-style"],
    options_hi: ["background-color", "color", "bgcolor", "background-style"],
    answer_en: "background-color",
    answer_hi: "पृष्ठभूमि का रंग",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which property controls the text color?",
    question_hi: "टेक्स्ट का रंग नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["color", "font-color", "text-color", "background-color"],
    options_hi: ["color", "font-color", "text-color", "background-color"],
    answer_en: "color",
    answer_hi: "टेक्स्ट का रंग",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property is used to set the font size?",
    question_hi: "फॉन्ट का आकार सेट करने के लिए कौन सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["font-size", "text-size", "font-style", "text-style"],
    options_hi: ["font-size", "text-size", "font-style", "text-style"],
    answer_en: "font-size",
    answer_hi: "फॉन्ट का आकार",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "How can you make the text bold in CSS?",
    question_hi: "CSS में टेक्स्ट को बोल्ड कैसे बनाया जाता है?",
    options_en: ["font-weight: bold", "text-style: bold", "font-style: bold", "text-weight: bold"],
    options_hi: ["font-weight: bold", "text-style: bold", "font-style: bold", "text-weight: bold"],
    answer_en: "font-weight: bold",
    answer_hi: "फॉन्ट का वजन बोल्ड",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which property controls the font family?",
    question_hi: "फॉन्ट परिवार को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["font-family", "font-style", "text-family", "text-style"],
    options_hi: ["font-family", "font-style", "text-family", "text-style"],
    answer_en: "font-family",
    answer_hi: "फॉन्ट परिवार",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "How do you add a comment in CSS?",
    question_hi: "CSS में टिप्पणी कैसे जोड़ी जाती है?",
    options_en: ["/* comment */", "// comment", "<!-- comment -->", "# comment"],
    options_hi: ["/* टिप्पणी */", "// टिप्पणी", "<!-- टिप्पणी -->", "# टिप्पणी"],
    answer_en: "/* comment */",
    answer_hi: "/* टिप्पणी */",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which property is used to change the text alignment?",
    question_hi: "टेक्स्ट संरेखण बदलने के लिए कौन सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["text-align", "align-text", "font-align", "text-position"],
    options_hi: ["text-align", "align-text", "font-align", "text-position"],
    answer_en: "text-align",
    answer_hi: "टेक्स्ट संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "What is the default value of the position property?",
    question_hi: "position प्रॉपर्टी का डिफ़ॉल्ट मान क्या है?",
    options_en: ["static", "relative", "absolute", "fixed"],
    options_hi: ["static", "relative", "absolute", "fixed"],
    answer_en: "static",
    answer_hi: "स्थिर (static)",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which property is used to change the visibility of an element?",
    question_hi: "किस प्रॉपर्टी का उपयोग तत्व की दृश्यता बदलने के लिए किया जाता है?",
    options_en: ["visibility", "display", "opacity", "show"],
    options_hi: ["visibility", "display", "opacity", "show"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which property is used to hide an element but still keep its space?",
    question_hi: "कौन सी प्रॉपर्टी तत्व को छिपाने के लिए उपयोग होती है लेकिन उसका स्थान बनाए रखती है?",
    options_en: ["visibility: hidden", "display: none", "opacity: 0", "hidden: true"],
    options_hi: ["visibility: hidden", "display: none", "opacity: 0", "hidden: true"],
    answer_en: "visibility: hidden",
    answer_hi: "दृश्यता: छुपाएं",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property removes an element from the document flow?",
    question_hi: "कौन सी प्रॉपर्टी तत्व को डॉक्यूमेंट फ्लो से हटा देती है?",
    options_en: ["display: none", "visibility: hidden", "opacity: 0", "hidden: true"],
    options_hi: ["display: none", "visibility: hidden", "opacity: 0", "hidden: true"],
    answer_en: "display: none",
    answer_hi: "डिस्प्ले: नहीं दिखाएं",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "How do you select an element with id 'header' in CSS?",
    question_hi: "CSS में 'header' आईडी वाले तत्व को कैसे चुनते हैं?",
    options_en: ["#header", ".header", "header", "*header"],
    options_hi: ["#header", ".header", "header", "*header"],
    answer_en: "#header",
    answer_hi: "'#header' चयनकर्ता",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "How do you select all elements of class 'container'?",
    question_hi: "क्लास 'container' के सभी तत्वों को कैसे चुनते हैं?",
    options_en: [".container", "#container", "*container", "container"],
    options_hi: [".container", "#container", "*container", "container"],
    answer_en: ".container",
    answer_hi: "'.container' चयनकर्ता",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which property controls the space between letters?",
    question_hi: "अक्षरों के बीच की जगह को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["letter-spacing", "word-spacing", "text-spacing", "font-spacing"],
    options_hi: ["letter-spacing", "word-spacing", "text-spacing", "font-spacing"],
    answer_en: "letter-spacing",
    answer_hi: "अक्षर के बीच की जगह",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which property controls the space between words?",
    question_hi: "शब्दों के बीच की जगह को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["word-spacing", "letter-spacing", "text-spacing", "font-spacing"],
    options_hi: ["word-spacing", "letter-spacing", "text-spacing", "font-spacing"],
    answer_en: "word-spacing",
    answer_hi: "शब्दों के बीच की जगह",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which property changes the element's opacity?",
    question_hi: "कौन सी प्रॉपर्टी तत्व की अपारदर्शिता (opacity) बदलती है?",
    options_en: ["opacity", "visibility", "display", "filter"],
    options_hi: ["opacity", "visibility", "display", "filter"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which property adds space inside an element, between the content and the border?",
    question_hi: "कौन सी प्रॉपर्टी तत्व के अंदर, कंटेंट और बॉर्डर के बीच जगह जोड़ती है?",
    options_en: ["padding", "margin", "border", "spacing"],
    options_hi: ["padding", "margin", "border", "spacing"],
    answer_en: "padding",
    answer_hi: "पैडिंग (अंदर की जगह)",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which property adds space outside an element, between the element and other elements?",
    question_hi: "कौन सी प्रॉपर्टी तत्व के बाहर, उसके और दूसरे तत्वों के बीच जगह जोड़ती है?",
    options_en: ["margin", "padding", "border", "spacing"],
    options_hi: ["margin", "padding", "border", "spacing"],
    answer_en: "margin",
    answer_hi: "मार्जिन (बाहर की जगह)",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which property sets the border style of a box?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स के बॉर्डर का स्टाइल सेट करती है?",
    options_en: ["border-style", "border-width", "border-color", "border-radius"],
    options_hi: ["border-style", "border-width", "border-color", "border-radius"],
    answer_en: "border-style",
    answer_hi: "बॉर्डर का स्टाइल",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "How to make rounded corners of a box?",
    question_hi: "बॉक्स के गोल कोनों को कैसे बनाएं?",
    options_en: ["border-radius", "border-style", "border-width", "border-color"],
    options_hi: ["border-radius", "border-style", "border-width", "border-color"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर का रेडियस (गोल कोने)",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property controls the width of the border?",
    question_hi: "बॉर्डर की मोटाई को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-width", "border-style", "border-color", "border-radius"],
    options_hi: ["border-width", "border-style", "border-color", "border-radius"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर की मोटाई",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which property sets the style of the list item marker?",
    question_hi: "सूची आइटम मार्कर का स्टाइल सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["list-style-type", "list-style", "list-marker", "list-item-style"],
    options_hi: ["list-style-type", "list-style", "list-marker", "list-item-style"],
    answer_en: "list-style-type",
    answer_hi: "सूची स्टाइल टाइप",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which property is used to change the cursor on hover?",
    question_hi: "होवर पर कर्सर बदलने के लिए कौन सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["cursor", "pointer", "hover", "mouse"],
    options_hi: ["cursor", "pointer", "hover", "mouse"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which property controls the display behavior of an element?",
    question_hi: "कौन सी प्रॉपर्टी तत्व के डिस्प्ले व्यवहार को नियंत्रित करती है?",
    options_en: ["display", "visibility", "opacity", "position"],
    options_hi: ["display", "visibility", "opacity", "position"],
    answer_en: "display",
    answer_hi: "डिस्प्ले",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Which property is used to set the height of an element?",
    question_hi: "कौन सी प्रॉपर्टी तत्व की ऊंचाई सेट करने के लिए उपयोग होती है?",
    options_en: ["height", "width", "size", "length"],
    options_hi: ["height", "width", "size", "length"],
    answer_en: "height",
    answer_hi: "ऊंचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which property is used to set the width of an element?",
    question_hi: "कौन सी प्रॉपर्टी तत्व की चौड़ाई सेट करने के लिए उपयोग होती है?",
    options_en: ["width", "height", "size", "length"],
    options_hi: ["width", "height", "size", "length"],
    answer_en: "width",
    answer_hi: "चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which property controls the order of flex items?",
    question_hi: "फ्लेक्स आइटम्स के क्रम को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["order", "flex-order", "item-order", "position"],
    options_hi: ["order", "flex-order", "item-order", "position"],
    answer_en: "order",
    answer_hi: "क्रम (order)",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which property specifies the type of list marker?",
    question_hi: "सूची मार्कर के प्रकार को निर्दिष्ट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["list-style-type", "list-type", "marker-style", "list-style"],
    options_hi: ["list-style-type", "list-type", "marker-style", "list-style"],
    answer_en: "list-style-type",
    answer_hi: "सूची शैली प्रकार",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which property specifies the space between lines of text?",
    question_hi: "टेक्स्ट की लाइनों के बीच की जगह को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["line-height", "letter-spacing", "word-spacing", "text-spacing"],
    options_hi: ["line-height", "letter-spacing", "word-spacing", "text-spacing"],
    answer_en: "line-height",
    answer_hi: "लाइन की ऊंचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which property is used to make text uppercase?",
    question_hi: "टेक्स्ट को अपरकेस (बड़े अक्षरों) में बदलने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["text-transform", "text-uppercase", "text-style", "font-transform"],
    options_hi: ["text-transform", "text-uppercase", "text-style", "font-transform"],
    answer_en: "text-transform",
    answer_hi: "टेक्स्ट ट्रांसफॉर्म",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which property specifies the visibility of overflow content?",
    question_hi: "ओवरफ्लो सामग्री की दृश्यता को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["overflow", "visibility", "display", "content"],
    options_hi: ["overflow", "visibility", "display", "content"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property sets the stacking order of positioned elements?",
    question_hi: "पोजीशन्ड तत्वों के स्टैकिंग ऑर्डर को सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["z-index", "order", "position", "stack"],
    options_hi: ["z-index", "order", "position", "stack"],
    answer_en: "z-index",
    answer_hi: "z-इंडेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which property is used to float an element to the left or right?",
    question_hi: "तत्व को बाएं या दाएं फ्लोट करने के लिए कौन सी प्रॉपर्टी उपयोग होती है?",
    options_en: ["float", "position", "clear", "align"],
    options_hi: ["float", "position", "clear", "align"],
    answer_en: "float",
    answer_hi: "फ्लोट",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which property clears floated elements?",
    question_hi: "फ्लोटेड तत्वों को क्लियर करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["clear", "float", "position", "overflow"],
    options_hi: ["clear", "float", "position", "overflow"],
    answer_en: "clear",
    answer_hi: "क्लियर",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which property sets the background image of an element?",
    question_hi: "कौन सी प्रॉपर्टी तत्व की पृष्ठभूमि छवि सेट करती है?",
    options_en: ["background-image", "bg-image", "image", "background"],
    options_hi: ["background-image", "bg-image", "image", "background"],
    answer_en: "background-image",
    answer_hi: "पृष्ठभूमि छवि",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which property controls the spacing between paragraphs?",
    question_hi: "पैराग्राफ के बीच की जगह को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["margin", "padding", "border-spacing", "line-height"],
    options_hi: ["margin", "padding", "border-spacing", "line-height"],
    answer_en: "margin",
    answer_hi: "मार्जिन",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which property is used to control the cursor when hovering over an element?",
    question_hi: "कौन सी प्रॉपर्टी तत्व पर होवर करते समय कर्सर को नियंत्रित करती है?",
    options_en: ["cursor", "pointer", "hover", "mouse"],
    options_hi: ["cursor", "pointer", "hover", "mouse"],
    answer_en: "cursor",
    answer_hi: "कर्सर",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which property controls the visibility of an element without removing it from the document flow?",
    question_hi: "कौन सी प्रॉपर्टी तत्व की दृश्यता को नियंत्रित करती है बिना उसे डॉक्यूमेंट फ्लो से हटाए?",
    options_en: ["visibility", "display", "opacity", "hidden"],
    options_hi: ["visibility", "display", "opacity", "hidden"],
    answer_en: "visibility",
    answer_hi: "दृश्यता",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property is used to set the opacity level of an element?",
    question_hi: "कौन सी प्रॉपर्टी तत्व के अपारदर्शिता स्तर को सेट करती है?",
    options_en: ["opacity", "visibility", "filter", "display"],
    options_hi: ["opacity", "visibility", "filter", "display"],
    answer_en: "opacity",
    answer_hi: "अपारदर्शिता",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which property specifies whether an element is fixed, absolute, relative, or static?",
    question_hi: "कौन सी प्रॉपर्टी निर्दिष्ट करती है कि तत्व fixed, absolute, relative या static है?",
    options_en: ["position", "display", "float", "clear"],
    options_hi: ["position", "display", "float", "clear"],
    answer_en: "position",
    answer_hi: "पोजीशन",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property controls the text decoration like underline or line-through?",
    question_hi: "कौन सी प्रॉपर्टी टेक्स्ट की सजावट जैसे अंडरलाइन या लाइन-थ्रू को नियंत्रित करती है?",
    options_en: ["text-decoration", "text-style", "font-decoration", "text-underline"],
    options_hi: ["text-decoration", "text-style", "font-decoration", "text-underline"],
    answer_en: "text-decoration",
    answer_hi: "टेक्स्ट डेकोरेशन",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which property controls the style of the border radius?",
    question_hi: "कौन सी प्रॉपर्टी बॉर्डर रेडियस के स्टाइल को नियंत्रित करती है?",
    options_en: ["border-radius", "border-style", "border-width", "border-color"],
    options_hi: ["border-radius", "border-style", "border-width", "border-color"],
    answer_en: "border-radius",
    answer_hi: "बॉर्डर रेडियस",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which property controls the space between cells in a table?",
    question_hi: "टेबल में सेल्स के बीच की जगह को नियंत्रित करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["border-spacing", "cell-spacing", "padding", "margin"],
    options_hi: ["border-spacing", "cell-spacing", "padding", "margin"],
    answer_en: "border-spacing",
    answer_hi: "बॉर्डर स्पेसिंग",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which property defines how an element's content is displayed when it overflows the element's box?",
    question_hi: "जब तत्व की सामग्री उसके बॉक्स से बाहर निकलती है तो उसे कैसे प्रदर्शित किया जाता है, यह कौन सी प्रॉपर्टी निर्धारित करती है?",
    options_en: ["overflow", "visibility", "display", "content"],
    options_hi: ["overflow", "visibility", "display", "content"],
    answer_en: "overflow",
    answer_hi: "ओवरफ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which property sets the space between words?",
    question_hi: "शब्दों के बीच की जगह को सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    options_hi: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
    answer_en: "word-spacing",
    answer_hi: "शब्दों के बीच की जगह",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property sets the indentation of the first line of text?",
    question_hi: "पहली लाइन के इंडेंटेशन को सेट करने वाली प्रॉपर्टी कौन सी है?",
    options_en: ["text-indent", "line-height", "text-align", "indent"],
    options_hi: ["text-indent", "line-height", "text-align", "indent"],
    answer_en: "text-indent",
    answer_hi: "टेक्स्ट इंडेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property is used to set the minimum width of an element?",
    question_hi: "कौन सी प्रॉपर्टी तत्व की न्यूनतम चौड़ाई सेट करने के लिए उपयोग होती है?",
    options_en: ["min-width", "max-width", "width", "min-height"],
    options_hi: ["min-width", "max-width", "width", "min-height"],
    answer_en: "min-width",
    answer_hi: "न्यूनतम चौड़ाई",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which property is used to set the maximum height of an element?",
    question_hi: "कौन सी प्रॉपर्टी तत्व की अधिकतम ऊंचाई सेट करने के लिए उपयोग होती है?",
    options_en: ["max-height", "min-height", "height", "max-width"],
    options_hi: ["max-height", "min-height", "height", "max-width"],
    answer_en: "max-height",
    answer_hi: "अधिकतम ऊंचाई",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which property controls the thickness of the box border?",
    question_hi: "कौन सी प्रॉपर्टी बॉक्स के बॉर्डर की मोटाई नियंत्रित करती है?",
    options_en: ["border-width", "border-style", "border-color", "border-radius"],
    options_hi: ["बॉर्डर-विथ", "बॉर्डर-स्टाइल", "बॉर्डर-कलर", "बॉर्डर-रेडियस"],
    answer_en: "border-width",
    answer_hi: "बॉर्डर-विथ",
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