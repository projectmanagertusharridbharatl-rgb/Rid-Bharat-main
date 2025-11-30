const questions = [
  {
    "num": 1,
    "question_en": "Which HTML tag is used to define the root of an HTML document?",
    "question_hi": "HTML डॉक्यूमेंट की रूट को परिभाषित करने के लिए कौन सा टैग उपयोग होता है?",
    "options_en": ["html", "root", "document", "head"],
    "options_hi": ["html", "root", "document", "head"],
    "answer_en": "html",
    "answer_hi": "html",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML tag is used to define the document's head?",
    "question_hi": "डॉक्यूमेंट के हेड को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["head", "header", "top", "html-head"],
    "options_hi": ["head", "header", "top", "html-head"],
    "answer_en": "head",
    "answer_hi": "head",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML tag is used to define the document's body?",
    "question_hi": "डॉक्यूमेंट के बॉडी को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["body", "content", "main", "html-body"],
    "options_hi": ["body", "content", "main", "html-body"],
    "answer_en": "body",
    "answer_hi": "body",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML tag is used to define a level 2 heading?",
    "question_hi": "लेवल 2 हेडिंग को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h2", "heading2", "head2", "h1"],
    "options_hi": ["h2", "heading2", "head2", "h1"],
    "answer_en": "h2",
    "answer_hi": "h2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML tag is used to define a level 3 heading?",
    "question_hi": "लेवल 3 हेडिंग को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h3", "heading3", "head3", "h2"],
    "options_hi": ["h3", "heading3", "head3", "h2"],
    "answer_en": "h3",
    "answer_hi": "h3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML tag is used to define a level 4 heading?",
    "question_hi": "लेवल 4 हेडिंग को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h4", "heading4", "head4", "h3"],
    "options_hi": ["h4", "heading4", "head4", "h3"],
    "answer_en": "h4",
    "answer_hi": "h4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML tag is used to define a level 5 heading?",
    "question_hi": "लेवल 5 हेडिंग को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h5", "heading5", "head5", "h4"],
    "options_hi": ["h5", "heading5", "head5", "h4"],
    "answer_en": "h5",
    "answer_hi": "h5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML tag is used to define a level 6 heading?",
    "question_hi": "लेवल 6 हेडिंग को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h6", "heading6", "head6", "h5"],
    "options_hi": ["h6", "heading6", "head6", "h5"],
    "answer_en": "h6",
    "answer_hi": "h6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML tag is used to define a span of text?",
    "question_hi": "टेक्स्ट के एक स्पैन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["span", "div", "text", "section"],
    "options_hi": ["span", "div", "text", "section"],
    "answer_en": "span",
    "answer_hi": "span",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML tag is used to define a line break?",
    "question_hi": "लाइन ब्रेक को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["br", "break", "lb", "newline"],
    "options_hi": ["br", "break", "lb", "newline"],
    "answer_en": "br",
    "answer_hi": "br",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML tag is used to define a horizontal rule?",
    "question_hi": "हॉरिजॉन्टल रूल को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["hr", "line", "rule", "horizontal"],
    "options_hi": ["hr", "line", "rule", "horizontal"],
    "answer_en": "hr",
    "answer_hi": "hr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML tag is used to define a form input field?",
    "question_hi": "फॉर्म इनपुट फील्ड को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input", "textfield", "field", "forminput"],
    "options_hi": ["input", "textfield", "field", "forminput"],
    "answer_en": "input",
    "answer_hi": "input",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML tag is used to define a textarea?",
    "question_hi": "टेक्स्टएरिया को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["textarea", "textbox", "input", "multiline"],
    "options_hi": ["textarea", "textbox", "input", "multiline"],
    "answer_en": "textarea",
    "answer_hi": "textarea",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML tag is used to define a button?",
    "question_hi": "बटन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["button", "btn", "click", "submit"],
    "options_hi": ["button", "btn", "click", "submit"],
    "answer_en": "button",
    "answer_hi": "button",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML tag is used to define a select dropdown?",
    "question_hi": "सेलेक्ट ड्रॉपडाउन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["select", "dropdown", "option", "list"],
    "options_hi": ["select", "dropdown", "option", "list"],
    "answer_en": "select",
    "answer_hi": "select",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML tag is used to define an option in a dropdown?",
    "question_hi": "ड्रॉपडाउन में ऑप्शन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["option", "choice", "item", "select-option"],
    "options_hi": ["option", "choice", "item", "select-option"],
    "answer_en": "option",
    "answer_hi": "option",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML tag is used to define a label for form elements?",
    "question_hi": "फॉर्म एलिमेंट्स के लिए लेबल को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["label", "text", "caption", "form-label"],
    "options_hi": ["label", "text", "caption", "form-label"],
    "answer_en": "label",
    "answer_hi": "label",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML tag is used to define a fieldset?",
    "question_hi": "फील्डसेट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["fieldset", "group", "form-group", "section"],
    "options_hi": ["fieldset", "group", "form-group", "section"],
    "answer_en": "fieldset",
    "answer_hi": "fieldset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML tag is used to define a legend for a fieldset?",
    "question_hi": "फील्डसेट के लिए लेजेंड को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["legend", "title", "caption", "fieldset-title"],
    "options_hi": ["legend", "title", "caption", "fieldset-title"],
    "answer_en": "legend",
    "answer_hi": "legend",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML tag is used to define a datalist?",
    "question_hi": "डेटालिस्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["datalist", "list", "options", "inputlist"],
    "options_hi": ["datalist", "list", "options", "inputlist"],
    "answer_en": "datalist",
    "answer_hi": "datalist",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML tag is used to define an output element?",
    "question_hi": "आउटपुट एलिमेंट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["output", "result", "display", "calculation"],
    "options_hi": ["output", "result", "display", "calculation"],
    "answer_en": "output",
    "answer_hi": "output",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML tag is used to define a meter?",
    "question_hi": "मीटर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["meter", "gauge", "measure", "progress"],
    "options_hi": ["meter", "gauge", "measure", "progress"],
    "answer_en": "meter",
    "answer_hi": "meter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML tag is used to define a progress bar?",
    "question_hi": "प्रोग्रेस बार को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["progress", "meter", "bar", "loading"],
    "options_hi": ["progress", "meter", "bar", "loading"],
    "answer_en": "progress",
    "answer_hi": "progress",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML tag is used to define a details element?",
    "question_hi": "डिटेल्स एलिमेंट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["details", "summary", "expand", "collapse"],
    "options_hi": ["details", "summary", "expand", "collapse"],
    "answer_en": "details",
    "answer_hi": "details",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML tag is used to define a summary for details?",
    "question_hi": "डिटेल्स के लिए सारांश को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["summary", "title", "heading", "caption"],
    "options_hi": ["summary", "title", "heading", "caption"],
    "answer_en": "summary",
    "answer_hi": "summary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML tag is used to define a dialog box?",
    "question_hi": "डायलॉग बॉक्स को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["dialog", "modal", "popup", "window"],
    "options_hi": ["dialog", "modal", "popup", "window"],
    "answer_en": "dialog",
    "answer_hi": "dialog",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML tag is used to define a menu?",
    "question_hi": "मेन्यू को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["menu", "nav", "list", "ul"],
    "options_hi": ["menu", "nav", "list", "ul"],
    "answer_en": "menu",
    "answer_hi": "menu",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML tag is used to define a command button?",
    "question_hi": "कमांड बटन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["command", "button", "cmd", "action"],
    "options_hi": ["command", "button", "cmd", "action"],
    "answer_en": "command",
    "answer_hi": "command",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML tag is used to define a keygen?",
    "question_hi": "कीजन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["keygen", "key", "generate", "security"],
    "options_hi": ["keygen", "key", "generate", "security"],
    "answer_en": "keygen",
    "answer_hi": "keygen",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML tag is used to define a wbr (word break opportunity)?",
    "question_hi": "WBR (वर्ड ब्रेक ऑपर्चुनिटी) को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["wbr", "break", "wordbreak", "br"],
    "options_hi": ["wbr", "break", "wordbreak", "br"],
    "answer_en": "wbr",
    "answer_hi": "wbr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML tag is used to define a ruby annotation?",
    "question_hi": "रूबी एनोटेशन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["ruby", "annotation", "note", "comment"],
    "options_hi": ["ruby", "annotation", "note", "comment"],
    "answer_en": "ruby",
    "answer_hi": "ruby",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML tag is used to define a rt (ruby text)?",
    "question_hi": "RT (रूबी टेक्स्ट) को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["rt", "rubytext", "text", "annotation"],
    "options_hi": ["rt", "rubytext", "text", "annotation"],
    "answer_en": "rt",
    "answer_hi": "rt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML tag is used to define a rp (ruby parentheses)?",
    "question_hi": "RP (रूबी पैरेन्थेसिस) को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["rp", "parentheses", "bracket", "rubyparen"],
    "options_hi": ["rp", "parentheses", "bracket", "rubyparen"],
    "answer_en": "rp",
    "answer_hi": "rp",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML tag is used to define a bdi (bi-directional isolation)?",
    "question_hi": "BDI (बाई-डायरेक्शनल आइसोलेशन) को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["bdi", "direction", "isolate", "text"],
    "options_hi": ["bdi", "direction", "isolate", "text"],
    "answer_en": "bdi",
    "answer_hi": "bdi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML tag is used to define a bdo (bi-directional override)?",
    "question_hi": "BDO (बाई-डायरेक्शनल ओवरराइड) को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["bdo", "direction", "override", "text"],
    "options_hi": ["bdo", "direction", "override", "text"],
    "answer_en": "bdo",
    "answer_hi": "bdo",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML tag is used to define a picture element?",
    "question_hi": "पिक्चर एलिमेंट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["picture", "image", "img", "photo"],
    "options_hi": ["picture", "image", "img", "photo"],
    "answer_en": "picture",
    "answer_hi": "picture",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML tag is used to define a template?",
    "question_hi": "टेम्पलेट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["template", "pattern", "model", "layout"],
    "options_hi": ["template", "pattern", "model", "layout"],
    "answer_en": "template",
    "answer_hi": "template",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML tag is used to define a slot?",
    "question_hi": "स्लॉट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["slot", "placeholder", "space", "hole"],
    "options_hi": ["slot", "placeholder", "space", "hole"],
    "answer_en": "slot",
    "answer_hi": "slot",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML tag is used to define a canvas?",
    "question_hi": "कैनवास को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["canvas", "draw", "paint", "graphics"],
    "options_hi": ["canvas", "draw", "paint", "graphics"],
    "answer_en": "canvas",
    "answer_hi": "canvas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML tag is used to define SVG graphics?",
    "question_hi": "SVG ग्राफिक्स को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["svg", "vector", "graphic", "image"],
    "options_hi": ["svg", "vector", "graphic", "image"],
    "answer_en": "svg",
    "answer_hi": "svg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML tag is used to define a math expression?",
    "question_hi": "मैथ एक्सप्रेशन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["math", "equation", "formula", "calculate"],
    "options_hi": ["math", "equation", "formula", "calculate"],
    "answer_en": "math",
    "answer_hi": "math",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML tag is used to define a video?",
    "question_hi": "वीडियो को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["video", "movie", "media", "film"],
    "options_hi": ["video", "movie", "media", "film"],
    "answer_en": "video",
    "answer_hi": "video",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML tag is used to define an audio?",
    "question_hi": "ऑडियो को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["audio", "sound", "music", "player"],
    "options_hi": ["audio", "sound", "music", "player"],
    "answer_en": "audio",
    "answer_hi": "audio",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML tag is used to define a source for media?",
    "question_hi": "मीडिया के लिए सोर्स को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["source", "src", "media", "file"],
    "options_hi": ["source", "src", "media", "file"],
    "answer_en": "source",
    "answer_hi": "source",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML tag is used to define a track for media?",
    "question_hi": "मीडिया के लिए ट्रैक को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["track", "subtitle", "caption", "audio"],
    "options_hi": ["track", "subtitle", "caption", "audio"],
    "answer_en": "track",
    "answer_hi": "track",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML tag is used to define an embed element?",
    "question_hi": "एम्बेड एलिमेंट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["embed", "object", "plugin", "media"],
    "options_hi": ["embed", "object", "plugin", "media"],
    "answer_en": "embed",
    "answer_hi": "embed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML tag is used to define an object?",
    "question_hi": "ऑब्जेक्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["object", "embed", "media", "file"],
    "options_hi": ["object", "embed", "media", "file"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML tag is used to define a param for object?",
    "question_hi": "ऑब्जेक्ट के लिए पैराम को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["param", "parameter", "setting", "value"],
    "options_hi": ["param", "parameter", "setting", "value"],
    "answer_en": "param",
    "answer_hi": "param",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML tag is used to define an iframe?",
    "question_hi": "आईफ्रेम को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["iframe", "frame", "embed", "window"],
    "options_hi": ["iframe", "frame", "embed", "window"],
    "answer_en": "iframe",
    "answer_hi": "iframe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML tag is used to define a map?",
    "question_hi": "मैप को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["map", "image", "area", "coordinates"],
    "options_hi": ["map", "image", "area", "coordinates"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  }
];



// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

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
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ (FINAL FIXED) ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // ⭐ LIVE TIME CALCULATION (CORRECT)
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // SAVE TIME
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
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

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    // SAVE DATA
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // GO TO RESULT PAGE
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
        <div class="circle"
        style="background:${color}"
        onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA (NO CHANGE) ----------------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};
