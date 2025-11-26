const questions = [
  {
    "num": 1,
    "question_en": "Which CSS property controls the text size?",
    "question_hi": "कौन-सी CSS प्रॉपर्टी टेक्स्ट के आकार को नियंत्रित करती है?",
    "options_en": ["font-size", "text-size", "font-style", "text-style"],
    "options_hi": ["font-size", "text-size", "font-style", "text-style"],
    "answer_en": "font-size",
    "answer_hi": "font-size",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML tag is used to define the most important heading?",
    "question_hi": "सबसे महत्वपूर्ण हेडिंग को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h1", "h2", "heading", "head"],
    "options_hi": ["h1", "h2", "heading", "head"],
    "answer_en": "h1",
    "answer_hi": "h1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which CSS property is used to change the background color?",
    "question_hi": "बैकग्राउंड रंग बदलने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["background-color", "color", "bg-color", "background"],
    "options_hi": ["background-color", "color", "bg-color", "background"],
    "answer_en": "background-color",
    "answer_hi": "background-color",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML attribute is used to define inline styles?",
    "question_hi": "इनलाइन स्टाइल्स को परिभाषित करने के लिए कौन सा HTML attribute उपयोग होता है?",
    "options_en": ["style", "class", "css", "styles"],
    "options_hi": ["style", "class", "css", "styles"],
    "answer_en": "style",
    "answer_hi": "style",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which CSS property is used to change the font of an element?",
    "question_hi": "किसी एलिमेंट का फॉन्ट बदलने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["font-family", "font-style", "font-weight", "text-font"],
    "options_hi": ["font-family", "font-style", "font-weight", "text-font"],
    "answer_en": "font-family",
    "answer_hi": "font-family",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML tag is used to define a container for HTML content?",
    "question_hi": "HTML कंटेंट के लिए कंटेनर को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["div", "span", "container", "section"],
    "options_hi": ["div", "span", "container", "section"],
    "answer_en": "div",
    "answer_hi": "div",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which CSS property is used to add space between elements?",
    "question_hi": "एलिमेंट्स के बीच स्पेस जोड़ने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["margin", "padding", "spacing", "border"],
    "options_hi": ["margin", "padding", "spacing", "border"],
    "answer_en": "margin",
    "answer_hi": "margin",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML tag is used to define a list item?",
    "question_hi": "लिस्ट आइटम को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["li", "ul", "ol", "list"],
    "options_hi": ["li", "ul", "ol", "list"],
    "answer_en": "li",
    "answer_hi": "li",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which CSS property is used to make text bold?",
    "question_hi": "टेक्स्ट को बोल्ड बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["font-weight", "font-style", "text-bold", "bold"],
    "options_hi": ["font-weight", "font-style", "text-bold", "bold"],
    "answer_en": "font-weight",
    "answer_hi": "font-weight",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML tag is used to define a navigation section?",
    "question_hi": "नेविगेशन सेक्शन को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["nav", "div", "menu", "navigation"],
    "options_hi": ["nav", "div", "menu", "navigation"],
    "answer_en": "nav",
    "answer_hi": "nav",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which CSS property is used to add space inside an element?",
    "question_hi": "एलिमेंट के अंदर स्पेस जोड़ने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["padding", "margin", "spacing", "border"],
    "options_hi": ["padding", "margin", "spacing", "border"],
    "answer_en": "padding",
    "answer_hi": "padding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML tag is used to define a footer?",
    "question_hi": "फुटर को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["footer", "div", "bottom", "end"],
    "options_hi": ["footer", "div", "bottom", "end"],
    "answer_en": "footer",
    "answer_hi": "footer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which CSS property is used to change text color?",
    "question_hi": "टेक्स्ट का रंग बदलने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["color", "text-color", "font-color", "text-style"],
    "options_hi": ["color", "text-color", "font-color", "text-style"],
    "answer_en": "color",
    "answer_hi": "color",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML tag is used to define a header?",
    "question_hi": "हेडर को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["header", "head", "h1", "top"],
    "options_hi": ["header", "head", "h1", "top"],
    "answer_en": "header",
    "answer_hi": "header",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which CSS property is used to add rounded corners?",
    "question_hi": "गोल कोने जोड़ने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["border-radius", "corner-radius", "round-corner", "border-round"],
    "options_hi": ["border-radius", "corner-radius", "round-corner", "border-round"],
    "answer_en": "border-radius",
    "answer_hi": "border-radius",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML tag is used to define an article?",
    "question_hi": "आर्टिकल को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["article", "section", "div", "content"],
    "options_hi": ["article", "section", "div", "content"],
    "answer_en": "article",
    "answer_hi": "article",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which CSS property is used to create shadows?",
    "question_hi": "शैडो बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["box-shadow", "text-shadow", "shadow", "element-shadow"],
    "options_hi": ["box-shadow", "text-shadow", "shadow", "element-shadow"],
    "answer_en": "box-shadow",
    "answer_hi": "box-shadow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML tag is used to define a section?",
    "question_hi": "सेक्शन को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["section", "div", "article", "part"],
    "options_hi": ["section", "div", "article", "part"],
    "answer_en": "section",
    "answer_hi": "section",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which CSS property is used to control transparency?",
    "question_hi": "ट्रांसपेरेंसी को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["opacity", "transparency", "alpha", "visibility"],
    "options_hi": ["opacity", "transparency", "alpha", "visibility"],
    "answer_en": "opacity",
    "answer_hi": "opacity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML tag is used to define a main content area?",
    "question_hi": "मुख्य कंटेंट एरिया को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["main", "div", "content", "body"],
    "options_hi": ["main", "div", "content", "body"],
    "answer_en": "main",
    "answer_hi": "main",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which CSS property is used to control the display type?",
    "question_hi": "डिस्प्ले टाइप को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["display", "visibility", "position", "layout"],
    "options_hi": ["display", "visibility", "position", "layout"],
    "answer_en": "display",
    "answer_hi": "display",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML tag is used to define a sidebar?",
    "question_hi": "साइडबार को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["aside", "div", "sidebar", "nav"],
    "options_hi": ["aside", "div", "sidebar", "nav"],
    "answer_en": "aside",
    "answer_hi": "aside",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which CSS property is used to position elements?",
    "question_hi": "एलिमेंट्स को पोजीशन करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["position", "display", "float", "layout"],
    "options_hi": ["position", "display", "float", "layout"],
    "answer_en": "position",
    "answer_hi": "position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML tag is used to define a figure?",
    "question_hi": "फिगर को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["figure", "img", "picture", "fig"],
    "options_hi": ["figure", "img", "picture", "fig"],
    "answer_en": "figure",
    "answer_hi": "figure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which CSS property is used to create gradients?",
    "question_hi": "ग्रेडिएंट बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["background-image", "gradient", "linear-gradient", "background-gradient"],
    "options_hi": ["background-image", "gradient", "linear-gradient", "background-gradient"],
    "answer_en": "background-image",
    "answer_hi": "background-image",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML tag is used to define a caption for a figure?",
    "question_hi": "फिगर के लिए कैप्शन को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["figcaption", "caption", "description", "fig-desc"],
    "options_hi": ["figcaption", "caption", "description", "fig-desc"],
    "answer_en": "figcaption",
    "answer_hi": "figcaption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which CSS property is used to control text decoration?",
    "question_hi": "टेक्स्ट डेकोरेशन को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["text-decoration", "font-decoration", "text-style", "decoration"],
    "options_hi": ["text-decoration", "font-decoration", "text-style", "decoration"],
    "answer_en": "text-decoration",
    "answer_hi": "text-decoration",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML tag is used to define a time?",
    "question_hi": "टाइम को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["time", "date", "datetime", "clock"],
    "options_hi": ["time", "date", "datetime", "clock"],
    "answer_en": "time",
    "answer_hi": "time",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which CSS property is used to control text transformation?",
    "question_hi": "टेक्स्ट ट्रांसफॉर्मेशन को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["text-transform", "font-transform", "text-case", "transform"],
    "options_hi": ["text-transform", "font-transform", "text-case", "transform"],
    "answer_en": "text-transform",
    "answer_hi": "text-transform",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML tag is used to define a mark?",
    "question_hi": "मार्क को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["mark", "highlight", "strong", "em"],
    "options_hi": ["mark", "highlight", "strong", "em"],
    "answer_en": "mark",
    "answer_hi": "mark",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which CSS property is used to control letter spacing?",
    "question_hi": "लेटर स्पेसिंग को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["letter-spacing", "word-spacing", "text-spacing", "font-spacing"],
    "options_hi": ["letter-spacing", "word-spacing", "text-spacing", "font-spacing"],
    "answer_en": "letter-spacing",
    "answer_hi": "letter-spacing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML tag is used to define a progress bar?",
    "question_hi": "प्रोग्रेस बार को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["progress", "meter", "bar", "range"],
    "options_hi": ["progress", "meter", "bar", "range"],
    "answer_en": "progress",
    "answer_hi": "progress",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which CSS property is used to control word spacing?",
    "question_hi": "वर्ड स्पेसिंग को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["word-spacing", "letter-spacing", "text-spacing", "font-spacing"],
    "options_hi": ["word-spacing", "letter-spacing", "text-spacing", "font-spacing"],
    "answer_en": "word-spacing",
    "answer_hi": "word-spacing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML tag is used to define a meter?",
    "question_hi": "मीटर को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["meter", "progress", "range", "gauge"],
    "options_hi": ["meter", "progress", "range", "gauge"],
    "answer_en": "meter",
    "answer_hi": "meter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which CSS property is used to control line height?",
    "question_hi": "लाइन हाइट को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["line-height", "text-height", "font-height", "height"],
    "options_hi": ["line-height", "text-height", "font-height", "height"],
    "answer_en": "line-height",
    "answer_hi": "line-height",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML tag is used to define a details element?",
    "question_hi": "डिटेल्स एलिमेंट को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["details", "summary", "info", "data"],
    "options_hi": ["details", "summary", "info", "data"],
    "answer_en": "details",
    "answer_hi": "details",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which CSS property is used to control text direction?",
    "question_hi": "टेक्स्ट डायरेक्शन को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["direction", "text-direction", "writing-mode", "text-align"],
    "options_hi": ["direction", "text-direction", "writing-mode", "text-align"],
    "answer_en": "direction",
    "answer_hi": "direction",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML tag is used to define a summary?",
    "question_hi": "सारांश को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["summary", "details", "info", "caption"],
    "options_hi": ["summary", "details", "info", "caption"],
    "answer_en": "summary",
    "answer_hi": "summary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which CSS property is used to control text overflow?",
    "question_hi": "टेक्स्ट ओवरफ्लो को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["text-overflow", "overflow", "text-wrap", "word-wrap"],
    "options_hi": ["text-overflow", "overflow", "text-wrap", "word-wrap"],
    "answer_en": "text-overflow",
    "answer_hi": "text-overflow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML tag is used to define a dialog?",
    "question_hi": "डायलॉग को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["dialog", "modal", "popup", "window"],
    "options_hi": ["dialog", "modal", "popup", "window"],
    "answer_en": "dialog",
    "answer_hi": "dialog",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which CSS property is used to control white space?",
    "question_hi": "व्हाइट स्पेस को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["white-space", "space", "text-space", "word-space"],
    "options_hi": ["white-space", "space", "text-space", "word-space"],
    "answer_en": "white-space",
    "answer_hi": "white-space",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML tag is used to define a template?",
    "question_hi": "टेम्पलेट को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["template", "script", "style", "pattern"],
    "options_hi": ["template", "script", "style", "pattern"],
    "answer_en": "template",
    "answer_hi": "template",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which CSS property is used to control text shadow?",
    "question_hi": "टेक्स्ट शैडो को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["text-shadow", "box-shadow", "shadow", "font-shadow"],
    "options_hi": ["text-shadow", "box-shadow", "shadow", "font-shadow"],
    "answer_en": "text-shadow",
    "answer_hi": "text-shadow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML tag is used to define a slot?",
    "question_hi": "स्लॉट को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["slot", "div", "span", "placeholder"],
    "options_hi": ["slot", "div", "span", "placeholder"],
    "answer_en": "slot",
    "answer_hi": "slot",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which CSS property is used to control text indent?",
    "question_hi": "टेक्स्ट इंडेंट को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["text-indent", "indent", "margin-left", "padding-left"],
    "options_hi": ["text-indent", "indent", "margin-left", "padding-left"],
    "answer_en": "text-indent",
    "answer_hi": "text-indent",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML tag is used to define a canvas?",
    "question_hi": "कैनवास को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["canvas", "svg", "graphics", "draw"],
    "options_hi": ["canvas", "svg", "graphics", "draw"],
    "answer_en": "canvas",
    "answer_hi": "canvas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which CSS property is used to control text wrap?",
    "question_hi": "टेक्स्ट रैप को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["word-wrap", "text-wrap", "white-space", "overflow-wrap"],
    "options_hi": ["word-wrap", "text-wrap", "white-space", "overflow-wrap"],
    "answer_en": "word-wrap",
    "answer_hi": "word-wrap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML tag is used to define SVG graphics?",
    "question_hi": "SVG ग्राफिक्स को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["svg", "canvas", "graphics", "vector"],
    "options_hi": ["svg", "canvas", "graphics", "vector"],
    "answer_en": "svg",
    "answer_hi": "svg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which CSS property is used to control text alignment?",
    "question_hi": "टेक्स्ट अलाइनमेंट को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["text-align", "align", "text-position", "alignment"],
    "options_hi": ["text-align", "align", "text-position", "alignment"],
    "answer_en": "text-align",
    "answer_hi": "text-align",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML tag is used to define a video?",
    "question_hi": "वीडियो को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["video", "audio", "media", "movie"],
    "options_hi": ["video", "audio", "media", "movie"],
    "answer_en": "video",
    "answer_hi": "video",
    "attempted": false,
    "selected": ""
  }
];





let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
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
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}



////////////////////////////////////////////////////////////////////////////////////////////

// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

      function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            // check correct answer
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }

        } else {
            notAttempted++;
        }

        // push result
        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // store in localStorage
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // ask for result page
    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}



function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////