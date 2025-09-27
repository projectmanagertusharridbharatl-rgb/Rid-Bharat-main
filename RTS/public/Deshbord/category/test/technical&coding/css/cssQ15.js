const questions = [
  {
    num: 1,
    question_en: "What does CSS Flexbox primarily help with?",
    question_hi: "CSS Flexbox मुख्य रूप से किस चीज़ में मदद करता है?",
    options_en: ["Layout alignment", "Color styling", "Font styling", "Animation effects"],
    options_hi: ["लेआउट संरेखण", "रंग स्टाइलिंग", "फॉन्ट स्टाइलिंग", "एनिमेशन प्रभाव"],
    answer_en: "Layout alignment",
    answer_hi: "लेआउट संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which property defines a flex container?",
    question_hi: "कौन-सी प्रॉपर्टी flex container को परिभाषित करती है?",
    options_en: ["display: flex", "position: flex", "flex-direction", "align-items"],
    options_hi: ["display: flex", "position: flex", "flex-direction", "align-items"],
    answer_en: "display: flex",
    answer_hi: "display: flex",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the default value of 'flex-direction'?",
    question_hi: "'flex-direction' का डिफ़ॉल्ट मान क्या है?",
    options_en: ["row", "column", "row-reverse", "column-reverse"],
    options_hi: ["row", "column", "row-reverse", "column-reverse"],
    answer_en: "row",
    answer_hi: "row",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which property controls the direction of the main axis in flexbox?",
    question_hi: "Flexbox में main axis की दिशा को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["flex-direction", "justify-content", "align-items", "flex-wrap"],
    options_hi: ["flex-direction", "justify-content", "align-items", "flex-wrap"],
    answer_en: "flex-direction",
    answer_hi: "flex-direction",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which property controls how flex items are aligned along the main axis?",
    question_hi: "Main axis के साथ flex आइटम्स को कैसे संरेखित किया जाता है, यह कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["justify-content", "align-items", "flex-direction", "flex-wrap"],
    options_hi: ["justify-content", "align-items", "flex-direction", "flex-wrap"],
    answer_en: "justify-content",
    answer_hi: "justify-content",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "What does 'align-items: center' do in flexbox?",
    question_hi: "'align-items: center' flexbox में क्या करता है?",
    options_en: [
      "Centers flex items along the cross axis",
      "Centers flex items along the main axis",
      "Aligns flex items to start",
      "Aligns flex items to end"
    ],
    options_hi: [
      "क्रॉस एक्सिस के साथ आइटम्स को केंद्रित करता है",
      "मेन एक्सिस के साथ आइटम्स को केंद्रित करता है",
      "आइटम्स को शुरू में संरेखित करता है",
      "आइटम्स को अंत में संरेखित करता है"
    ],
    answer_en: "Centers flex items along the cross axis",
    answer_hi: "क्रॉस एक्सिस के साथ आइटम्स को केंद्रित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Which property controls wrapping of flex items?",
    question_hi: "Flex आइटम्स के wrapping को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["flex-wrap", "flex-flow", "flex-grow", "flex-shrink"],
    options_hi: ["flex-wrap", "flex-flow", "flex-grow", "flex-shrink"],
    answer_en: "flex-wrap",
    answer_hi: "flex-wrap",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the effect of 'flex-wrap: nowrap'?",
    question_hi: "'flex-wrap: nowrap' का क्या प्रभाव होता है?",
    options_en: [
      "Flex items stay in one line without wrapping",
      "Flex items wrap to multiple lines",
      "Flex items disappear",
      "Flex items align center"
    ],
    options_hi: [
      "फ्लेक्स आइटम्स एक लाइन में रहते हैं बिना रैपिंग के",
      "फ्लेक्स आइटम्स कई लाइनों में रैप होते हैं",
      "फ्लेक्स आइटम्स गायब हो जाते हैं",
      "फ्लेक्स आइटम्स केंद्र में संरेखित होते हैं"
    ],
    answer_en: "Flex items stay in one line without wrapping",
    answer_hi: "फ्लेक्स आइटम्स एक लाइन में रहते हैं बिना रैपिंग के",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which property is shorthand for 'flex-grow', 'flex-shrink' and 'flex-basis'?",
    question_hi: "'flex-grow', 'flex-shrink' और 'flex-basis' के लिए shorthand कौन-सी प्रॉपर्टी है?",
    options_en: ["flex", "flex-flow", "flex-wrap", "flex-direction"],
    options_hi: ["flex", "flex-flow", "flex-wrap", "flex-direction"],
    answer_en: "flex",
    answer_hi: "flex",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What does 'flex-grow: 1' mean?",
    question_hi: "'flex-grow: 1' का क्या मतलब है?",
    options_en: [
      "Flex item can grow to fill available space",
      "Flex item cannot grow",
      "Flex item shrinks",
      "Flex item is hidden"
    ],
    options_hi: [
      "फ्लेक्स आइटम उपलब्ध जगह भरने के लिए बढ़ सकता है",
      "फ्लेक्स आइटम नहीं बढ़ सकता",
      "फ्लेक्स आइटम सिकुड़ता है",
      "फ्लेक्स आइटम छुपा है"
    ],
    answer_en: "Flex item can grow to fill available space",
    answer_hi: "फ्लेक्स आइटम उपलब्ध जगह भरने के लिए बढ़ सकता है",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "What is the default value of 'flex-shrink'?",
    question_hi: "'flex-shrink' का डिफ़ॉल्ट मान क्या है?",
    options_en: ["1", "0", "auto", "none"],
    options_hi: ["1", "0", "auto", "none"],
    answer_en: "1",
    answer_hi: "1",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which property aligns flex items along the cross axis?",
    question_hi: "क्रॉस एक्सिस पर फ्लेक्स आइटम्स को संरेखित करने वाली प्रॉपर्टी कौन-सी है?",
    options_en: ["align-items", "justify-content", "flex-direction", "flex-wrap"],
    options_hi: ["align-items", "justify-content", "flex-direction", "flex-wrap"],
    answer_en: "align-items",
    answer_hi: "align-items",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which property allows individual flex items to override the container’s 'align-items' setting?",
    question_hi: "कौन-सी प्रॉपर्टी व्यक्तिगत फ्लेक्स आइटम्स को कंटेनर के 'align-items' सेटिंग को ओवरराइड करने देती है?",
    options_en: ["align-self", "align-items", "justify-content", "flex-grow"],
    options_hi: ["align-self", "align-items", "justify-content", "flex-grow"],
    answer_en: "align-self",
    answer_hi: "align-self",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which flexbox property controls the alignment of flex lines in multi-line flex containers?",
    question_hi: "मल्टी-लाइन फ्लेक्स कंटेनर में फ्लेक्स लाइनों की संरेखण को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["align-content", "justify-content", "align-items", "flex-wrap"],
    options_hi: ["align-content", "justify-content", "align-items", "flex-wrap"],
    answer_en: "align-content",
    answer_hi: "align-content",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What does the 'order' property do in flexbox?",
    question_hi: "Flexbox में 'order' प्रॉपर्टी क्या करती है?",
    options_en: [
      "Controls the order of flex items",
      "Controls color of flex items",
      "Controls size of flex items",
      "Controls margin of flex items"
    ],
    options_hi: [
      "फ्लेक्स आइटम्स के क्रम को नियंत्रित करती है",
      "फ्लेक्स आइटम्स के रंग को नियंत्रित करती है",
      "फ्लेक्स आइटम्स के आकार को नियंत्रित करती है",
      "फ्लेक्स आइटम्स के मार्जिन को नियंत्रित करती है"
    ],
    answer_en: "Controls the order of flex items",
    answer_hi: "फ्लेक्स आइटम्स के क्रम को नियंत्रित करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which CSS property is used to set the initial main size of a flex item?",
    question_hi: "कौन-सी CSS प्रॉपर्टी फ्लेक्स आइटम के प्रारंभिक मुख्य आकार को सेट करती है?",
    options_en: ["flex-basis", "flex-grow", "flex-shrink", "flex-wrap"],
    options_hi: ["flex-basis", "flex-grow", "flex-shrink", "flex-wrap"],
    answer_en: "flex-basis",
    answer_hi: "flex-basis",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "What happens if 'flex-grow' is set to 0?",
    question_hi: "'flex-grow' 0 पर सेट होने पर क्या होता है?",
    options_en: [
      "Flex item will not grow",
      "Flex item will grow",
      "Flex item will shrink",
      "Flex item will disappear"
    ],
    options_hi: [
      "फ्लेक्स आइटम नहीं बढ़ेगा",
      "फ्लेक्स आइटम बढ़ेगा",
      "फ्लेक्स आइटम सिकुड़ेगा",
      "फ्लेक्स आइटम गायब हो जाएगा"
    ],
    answer_en: "Flex item will not grow",
    answer_hi: "फ्लेक्स आइटम नहीं बढ़ेगा",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which value of 'justify-content' aligns items to the center?",
    question_hi: "'justify-content' का कौन-सा मान आइटम्स को केंद्र में संरेखित करता है?",
    options_en: ["center", "flex-start", "flex-end", "space-between"],
    options_hi: ["center", "flex-start", "flex-end", "space-between"],
    answer_en: "center",
    answer_hi: "center",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "What is the effect of 'justify-content: space-between'?",
    question_hi: "'justify-content: space-between' का क्या प्रभाव होता है?",
    options_en: [
      "Items spread out with equal space between",
      "Items grouped at start",
      "Items grouped at end",
      "Items centered"
    ],
    options_hi: [
      "आइटम्स समान दूरी पर फैले होते हैं",
      "आइटम्स शुरू में समूहित होते हैं",
      "आइटम्स अंत में समूहित होते हैं",
      "आइटम्स केंद्र में होते हैं"
    ],
    answer_en: "Items spread out with equal space between",
    answer_hi: "आइटम्स समान दूरी पर फैले होते हैं",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "How do you make a flex container wrap its items to the next line?",
    question_hi: "फ्लेक्स कंटेनर को अपने आइटम्स को अगली लाइन पर रैप करने के लिए कैसे सेट करें?",
    options_en: ["flex-wrap: wrap", "flex-direction: column", "flex-grow: 1", "justify-content: center"],
    options_hi: ["flex-wrap: wrap", "flex-direction: column", "flex-grow: 1", "justify-content: center"],
    answer_en: "flex-wrap: wrap",
    answer_hi: "flex-wrap: wrap",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "What does 'align-content' control in flexbox?",
    question_hi: "Flexbox में 'align-content' क्या नियंत्रित करता है?",
    options_en: [
      "Alignment of flex lines in multi-line flex containers",
      "Alignment of items along main axis",
      "Direction of flex items",
      "Wrapping behavior"
    ],
    options_hi: [
      "मल्टी-लाइन फ्लेक्स कंटेनर में फ्लेक्स लाइनों की संरेखण",
      "मेन एक्सिस के साथ आइटम्स की संरेखण",
      "फ्लेक्स आइटम्स की दिशा",
      "रैपिंग व्यवहार"
    ],
    answer_en: "Alignment of flex lines in multi-line flex containers",
    answer_hi: "मल्टी-लाइन फ्लेक्स कंटेनर में फ्लेक्स लाइनों की संरेखण",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which property controls the alignment of flex items when they do not use all the available space?",
    question_hi: "जब फ्लेक्स आइटम्स उपलब्ध जगह का पूरा उपयोग नहीं करते, तो उनकी संरेखण को कौन-सी प्रॉपर्टी नियंत्रित करती है?",
    options_en: ["align-items", "align-content", "justify-content", "order"],
    options_hi: ["align-items", "align-content", "justify-content", "order"],
    answer_en: "align-items",
    answer_hi: "align-items",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which property is used to change the order of flex items visually?",
    question_hi: "फ्लेक्स आइटम्स के दृश्य क्रम को बदलने के लिए कौन-सी प्रॉपर्टी का उपयोग किया जाता है?",
    options_en: ["order", "flex-grow", "flex-shrink", "flex-basis"],
    options_hi: ["order", "flex-grow", "flex-shrink", "flex-basis"],
    answer_en: "order",
    answer_hi: "order",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "What is the default value of the 'order' property?",
    question_hi: "'order' प्रॉपर्टी का डिफ़ॉल्ट मान क्या है?",
    options_en: ["0", "1", "-1", "auto"],
    options_hi: ["0", "1", "-1", "auto"],
    answer_en: "0",
    answer_hi: "0",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which CSS flexbox property controls the ability of a flex item to shrink if necessary?",
    question_hi: "कौन-सी CSS फ्लेक्सबॉक्स प्रॉपर्टी फ्लेक्स आइटम को आवश्यक होने पर सिकुड़ने की क्षमता नियंत्रित करती है?",
    options_en: ["flex-shrink", "flex-grow", "flex-basis", "order"],
    options_hi: ["flex-shrink", "flex-grow", "flex-basis", "order"],
    answer_en: "flex-shrink",
    answer_hi: "flex-shrink",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "What does the 'flex-basis' property specify?",
    question_hi: "'flex-basis' प्रॉपर्टी क्या निर्दिष्ट करती है?",
    options_en: [
      "Initial main size of a flex item",
      "Amount of space between items",
      "Alignment of items",
      "Order of items"
    ],
    options_hi: [
      "फ्लेक्स आइटम का प्रारंभिक मुख्य आकार",
      "आइटम्स के बीच की दूरी",
      "आइटम्स की संरेखण",
      "आइटम्स का क्रम"
    ],
    answer_en: "Initial main size of a flex item",
    answer_hi: "फ्लेक्स आइटम का प्रारंभिक मुख्य आकार",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which property defines the default size of an element before remaining space is distributed?",
    question_hi: "कौन-सी प्रॉपर्टी किसी एलिमेंट के डिफ़ॉल्ट आकार को परिभाषित करती है जब तक कि बाकी स्थान वितरित न हो?",
    options_en: ["flex-basis", "flex-grow", "flex-shrink", "justify-content"],
    options_hi: ["फ्लेक्स-बेसिस", "फ्लेक्स-ग्रो", "फ्लेक्स-श्रिंक", "जस्टिफाई-कॉन्टेंट"],
    answer_en: "flex-basis",
    answer_hi: "फ्लेक्स-बेसिस",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What does 'justify-content: center' do in a flex container?",
    question_hi: "'justify-content: center' एक फ्लेक्स कंटेनर में क्या करता है?",
    options_en: ["Aligns items to the center of the main axis", "Aligns items to the start", "Aligns items to the end", "Stretches items"],
    options_hi: ["मुख्य अक्ष के केंद्र में आइटम संरेखित करता है", "प्रारंभ में आइटम संरेखित करता है", "अंत में आइटम संरेखित करता है", "आइटम्स को फैलाता है"],
    answer_en: "Aligns items to the center of the main axis",
    answer_hi: "मुख्य अक्ष के केंद्र में आइटम संरेखित करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which property allows items to wrap in a flex container?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स कंटेनर में आइटम्स को रैप करने की अनुमति देती है?",
    options_en: ["flex-wrap", "flex-direction", "flex-flow", "align-items"],
    options_hi: ["फ्लेक्स-रैप", "फ्लेक्स-डायरेक्शन", "फ्लेक्स-फ्लो", "अलाइन-आइटम्स"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "What value of 'flex-direction' makes the main axis vertical from top to bottom?",
    question_hi: "'flex-direction' का कौन-सा मान मुख्य अक्ष को ऊपर से नीचे तक लंबवत बनाता है?",
    options_en: ["column", "row", "row-reverse", "column-reverse"],
    options_hi: ["कॉलम", "रो", "रो-रिवर्स", "कॉलम-रिवर्स"],
    answer_en: "column",
    answer_hi: "कॉलम",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which CSS property is used to align items on the cross axis in a flex container?",
    question_hi: "फ्लेक्स कंटेनर में क्रॉस अक्ष पर आइटम को संरेखित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग की जाती है?",
    options_en: ["justify-content", "align-items", "flex-direction", "align-content"],
    options_hi: ["जस्टिफाई-कंटेंट", "अलाइन-आइटम्स", "फ्लेक्स-डायरेक्शन", "अलाइन-कंटेंट"],
    answer_en: "align-items",
    answer_hi: "अलाइन-आइटम्स",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which value of 'justify-content' places items at the start of the main axis?",
    question_hi: "'justify-content' का कौन-सा मान आइटम्स को मुख्य अक्ष की शुरुआत में रखता है?",
    options_en: ["flex-start", "flex-end", "center", "space-between"],
    options_hi: ["फ्लेक्स-स्टार्ट", "फ्लेक्स-एंड", "सेंटर", "स्पेस-बिटवीन"],
    answer_en: "flex-start",
    answer_hi: "फ्लेक्स-स्टार्ट",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which property allows items to wrap onto multiple lines in a flex container?",
    question_hi: "फ्लेक्स कंटेनर में आइटम्स को कई लाइनों में लपेटने की अनुमति देने वाली प्रॉपर्टी कौन-सी है?",
    options_en: ["flex-wrap", "wrap-items", "flex-flow", "align-wrap"],
    options_hi: ["फ्लेक्स-रैप", "रैप-आइटम्स", "फ्लेक्स-फ्लो", "अलाइन-रैप"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which value of 'align-items' aligns items at the end of the cross axis?",
    question_hi: "'align-items' का कौन-सा मान आइटम्स को क्रॉस अक्ष के अंत में संरेखित करता है?",
    options_en: ["flex-end", "flex-start", "center", "stretch"],
    options_hi: ["फ्लेक्स-एंड", "फ्लेक्स-स्टार्ट", "सेंटर", "स्ट्रेच"],
    answer_en: "flex-end",
    answer_hi: "फ्लेक्स-एंड",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "What does 'flex-grow' specify?",
    question_hi: "'flex-grow' किसे निर्दिष्ट करता है?",
    options_en: [
      "The initial size of a flex item",
      "How much a flex item will grow relative to others",
      "The direction of the flex items",
      "The spacing between items"
    ],
    options_hi: [
      "फ्लेक्स आइटम का प्रारंभिक आकार",
      "अन्य आइटम्स की तुलना में फ्लेक्स आइटम कितना बढ़ेगा",
      "फ्लेक्स आइटम्स की दिशा",
      "आइटम्स के बीच की दूरी"
    ],
    answer_en: "How much a flex item will grow relative to others",
    answer_hi: "अन्य आइटम्स की तुलना में फ्लेक्स आइटम कितना बढ़ेगा",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which value of 'flex-direction' sets the main axis horizontally from right to left?",
    question_hi: "'flex-direction' का कौन-सा मान मुख्य अक्ष को दाएँ से बाएँ क्षैतिज बनाता है?",
    options_en: ["row", "row-reverse", "column", "column-reverse"],
    options_hi: ["रो", "रो-रिवर्स", "कॉलम", "कॉलम-रिवर्स"],
    answer_en: "row-reverse",
    answer_hi: "रो-रिवर्स",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "What does the 'align-content' property do in a flex container?",
    question_hi: "'align-content' प्रॉपर्टी फ्लेक्स कंटेनर में क्या करती है?",
    options_en: [
      "Aligns items on the cross axis",
      "Aligns multiple rows on the cross axis",
      "Sets the main axis direction",
      "Sets item spacing"
    ],
    options_hi: [
      "क्रॉस अक्ष पर आइटम्स को संरेखित करती है",
      "क्रॉस अक्ष पर कई पंक्तियों को संरेखित करती है",
      "मुख्य अक्ष की दिशा सेट करती है",
      "आइटम्स के बीच की दूरी सेट करती है"
    ],
    answer_en: "Aligns multiple rows on the cross axis",
    answer_hi: "क्रॉस अक्ष पर कई पंक्तियों को संरेखित करती है",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "What value of 'align-items' stretches items to fill the container?",
    question_hi: "'align-items' का कौन-सा मान आइटम्स को कंटेनर भरने के लिए खींचता है?",
    options_en: ["stretch", "flex-start", "flex-end", "center"],
    options_hi: ["स्ट्रेच", "फ्लेक्स-स्टार्ट", "फ्लेक्स-एंड", "सेंटर"],
    answer_en: "stretch",
    answer_hi: "स्ट्रेच",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which CSS property sets how flex items are laid out along the main axis?",
    question_hi: "कौन-सी CSS प्रॉपर्टी निर्धारित करती है कि फ्लेक्स आइटम्स मुख्य अक्ष के साथ कैसे रखे जाते हैं?",
    options_en: ["justify-content", "align-items", "order", "flex-wrap"],
    options_hi: ["जस्टिफाई-कंटेंट", "अलाइन-आइटम्स", "ऑर्डर", "फ्लेक्स-रैप"],
    answer_en: "justify-content",
    answer_hi: "जस्टिफाई-कंटेंट",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which property sets the order in which items appear in the flex container?",
    question_hi: "कौन-सी प्रॉपर्टी फ्लेक्स कंटेनर में आइटम्स की उपस्थिति का क्रम सेट करती है?",
    options_en: ["flex-order", "order", "flex-index", "z-index"],
    options_hi: ["फ्लेक्स-ऑर्डर", "ऑर्डर", "फ्लेक्स-इंडेक्स", "ज़ेड-इंडेक्स"],
    answer_en: "order",
    answer_hi: "ऑर्डर",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which shorthand property sets 'flex-grow', 'flex-shrink', and 'flex-basis'?",
    question_hi: "कौन-सी शॉर्टहैंड प्रॉपर्टी 'flex-grow', 'flex-shrink', और 'flex-basis' सेट करती है?",
    options_en: ["flex", "flex-direction", "flex-flow", "flex-wrap"],
    options_hi: ["फ्लेक्स", "फ्लेक्स-डायरेक्शन", "फ्लेक्स-फ्लो", "फ्लेक्स-रैप"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which property defines whether items are forced onto one line or can wrap?",
    question_hi: "कौन-सी प्रॉपर्टी निर्धारित करती है कि आइटम्स को एक ही पंक्ति में रखा जाएगा या वे लपेटे जा सकते हैं?",
    options_en: ["flex-wrap", "align-items", "flex-flow", "order"],
    options_hi: ["फ्लेक्स-रैप", "अलाइन-आइटम्स", "फ्लेक्स-फ्लो", "ऑर्डर"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "What is the default value of 'flex-direction'?",
    question_hi: "'flex-direction' का डिफ़ॉल्ट मान क्या होता है?",
    options_en: ["row", "column", "row-reverse", "column-reverse"],
    options_hi: ["रो", "कॉलम", "रो-रिवर्स", "कॉलम-रिवर्स"],
    answer_en: "row",
    answer_hi: "रो",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which flexbox property helps to control overflow of flex items?",
    question_hi: "कौन-सी फ्लेक्सबॉक्स प्रॉपर्टी फ्लेक्स आइटम्स के ओवरफ्लो को नियंत्रित करने में मदद करती है?",
    options_en: ["flex-wrap", "overflow", "align-items", "z-index"],
    options_hi: ["फ्लेक्स-रैप", "ओवरफ्लो", "अलाइन-आइटम्स", "ज़ेड-इंडेक्स"],
    answer_en: "flex-wrap",
    answer_hi: "फ्लेक्स-रैप",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "What does the 'order' property affect in a flex container?",
    question_hi: "'order' प्रॉपर्टी फ्लेक्स कंटेनर में किसे प्रभावित करती है?",
    options_en: [
      "Size of items",
      "Position in the DOM",
      "Visual order of items",
      "Background color"
    ],
    options_hi: [
      "आइटम्स का आकार",
      "DOM में स्थिति",
      "आइटम्स का दृश्य क्रम",
      "बैकग्राउंड रंग"
    ],
    answer_en: "Visual order of items",
    answer_hi: "आइटम्स का दृश्य क्रम",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the default value of 'align-items' in flexbox?",
    question_hi: "फ्लेक्सबॉक्स में 'align-items' का डिफ़ॉल्ट मान क्या होता है?",
    options_en: ["stretch", "center", "flex-start", "baseline"],
    options_hi: ["स्ट्रेच", "सेंटर", "फ्लेक्स-स्टार्ट", "बेसलाइन"],
    answer_en: "stretch",
    answer_hi: "स्ट्रेच",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which property combines 'flex-direction' and 'flex-wrap'?",
    question_hi: "कौन-सी प्रॉपर्टी 'flex-direction' और 'flex-wrap' को जोड़ती है?",
    options_en: ["flex-flow", "flex", "display", "justify-content"],
    options_hi: ["फ्लेक्स-फ्लो", "फ्लेक्स", "डिस्प्ले", "जस्टिफाई-कंटेंट"],
    answer_en: "flex-flow",
    answer_hi: "फ्लेक्स-फ्लो",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which property controls how flex items shrink when necessary?",
    question_hi: "कौन-सी प्रॉपर्टी आवश्यक होने पर फ्लेक्स आइटम्स को सिकोड़ने को नियंत्रित करती है?",
    options_en: ["flex-shrink", "flex-grow", "flex-wrap", "order"],
    options_hi: ["फ्लेक्स-श्रिंक", "फ्लेक्स-ग्रो", "फ्लेक्स-रैप", "ऑर्डर"],
    answer_en: "flex-shrink",
    answer_hi: "फ्लेक्स-श्रिंक",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which flexbox value centers items both vertically and horizontally?",
    question_hi: "कौन-सा फ्लेक्सबॉक्स मान आइटम्स को ऊर्ध्वाधर और क्षैतिज दोनों रूप से केंद्र में रखता है?",
    options_en: [
      "justify-content: center; align-items: center;",
      "align-content: center",
      "flex-grow: 1",
      "order: 0"
    ],
    options_hi: [
      "justify-content: center; align-items: center;",
      "align-content: center",
      "flex-grow: 1",
      "order: 0"
    ],
    answer_en: "justify-content: center; align-items: center;",
    answer_hi: "justify-content: center; align-items: center;",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which display value activates flexbox layout?",
    question_hi: "कौन-सा डिस्प्ले मान फ्लेक्सबॉक्स लेआउट को सक्रिय करता है?",
    options_en: ["flex", "block", "inline", "grid"],
    options_hi: ["फ्लेक्स", "ब्लॉक", "इनलाइन", "ग्रिड"],
    answer_en: "flex",
    answer_hi: "फ्लेक्स",
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