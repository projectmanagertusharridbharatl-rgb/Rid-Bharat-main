const questions = [
  {
    "num": 1,
    "question_en": "Which HTML tag is used to define a paragraph?",
    "question_hi": "पैराग्राफ को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["p", "para", "paragraph", "text"],
    "options_hi": ["p", "para", "paragraph", "text"],
    "answer_en": "p",
    "answer_hi": "p",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML tag is used to define bold text?",
    "question_hi": "बोल्ड टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["b", "strong", "bold", "em"],
    "options_hi": ["b", "strong", "bold", "em"],
    "answer_en": "b",
    "answer_hi": "b",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML tag is used to define italic text?",
    "question_hi": "इटैलिक टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["i", "em", "italic", "it"],
    "options_hi": ["i", "em", "italic", "it"],
    "answer_en": "i",
    "answer_hi": "i",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML tag is used to define emphasized text?",
    "question_hi": "जोर दिए गए टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["em", "i", "emphasis", "strong"],
    "options_hi": ["em", "i", "emphasis", "strong"],
    "answer_en": "em",
    "answer_hi": "em",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML tag is used to define important text?",
    "question_hi": "महत्वपूर्ण टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["strong", "b", "important", "em"],
    "options_hi": ["strong", "b", "important", "em"],
    "answer_en": "strong",
    "answer_hi": "strong",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML tag is used to define small text?",
    "question_hi": "छोटे टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["small", "tiny", "mini", "little"],
    "options_hi": ["small", "tiny", "mini", "little"],
    "answer_en": "small",
    "answer_hi": "small",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML tag is used to define marked text?",
    "question_hi": "मार्क किए गए टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["mark", "highlight", "marked", "em"],
    "options_hi": ["mark", "highlight", "marked", "em"],
    "answer_en": "mark",
    "answer_hi": "mark",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML tag is used to define deleted text?",
    "question_hi": "डिलीट किए गए टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["del", "delete", "remove", "strike"],
    "options_hi": ["del", "delete", "remove", "strike"],
    "answer_en": "del",
    "answer_hi": "del",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML tag is used to define inserted text?",
    "question_hi": "इन्सर्ट किए गए टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["ins", "insert", "added", "new"],
    "options_hi": ["ins", "insert", "added", "new"],
    "answer_en": "ins",
    "answer_hi": "ins",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML tag is used to define subscript text?",
    "question_hi": "सबस्क्रिप्ट टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["sub", "subscript", "below", "low"],
    "options_hi": ["sub", "subscript", "below", "low"],
    "answer_en": "sub",
    "answer_hi": "sub",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML tag is used to define superscript text?",
    "question_hi": "सुपरस्क्रिप्ट टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["sup", "superscript", "above", "high"],
    "options_hi": ["sup", "superscript", "above", "high"],
    "answer_en": "sup",
    "answer_hi": "sup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML tag is used to define a quotation?",
    "question_hi": "कोटेशन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["q", "quote", "quotation", "blockquote"],
    "options_hi": ["q", "quote", "quotation", "blockquote"],
    "answer_en": "q",
    "answer_hi": "q",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML tag is used to define a block quotation?",
    "question_hi": "ब्लॉक कोटेशन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["blockquote", "q", "quote", "bq"],
    "options_hi": ["blockquote", "q", "quote", "bq"],
    "answer_en": "blockquote",
    "answer_hi": "blockquote",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML tag is used to define an abbreviation?",
    "question_hi": "संक्षेप को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["abbr", "abbreviation", "short", "acronym"],
    "options_hi": ["abbr", "abbreviation", "short", "acronym"],
    "answer_en": "abbr",
    "answer_hi": "abbr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML tag is used to define contact information?",
    "question_hi": "कॉन्टैक्ट इनफॉर्मेशन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["address", "contact", "info", "mail"],
    "options_hi": ["address", "contact", "info", "mail"],
    "answer_en": "address",
    "answer_hi": "address",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML tag is used to define a citation?",
    "question_hi": "साइटेशन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["cite", "citation", "quote", "reference"],
    "options_hi": ["cite", "citation", "quote", "reference"],
    "answer_en": "cite",
    "answer_hi": "cite",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML tag is used to define bi-directional override?",
    "question_hi": "बाई-डायरेक्शनल ओवरराइड को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["bdo", "bidi", "direction", "override"],
    "options_hi": ["bdo", "bidi", "direction", "override"],
    "answer_en": "bdo",
    "answer_hi": "bdo",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML tag is used to define bi-directional isolation?",
    "question_hi": "बाई-डायरेक्शनल आइसोलेशन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["bdi", "isolate", "direction", "bdo"],
    "options_hi": ["bdi", "isolate", "direction", "bdo"],
    "answer_en": "bdi",
    "answer_hi": "bdi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML tag is used to define a ruby annotation?",
    "question_hi": "रूबी एनोटेशन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["ruby", "annotation", "rt", "rp"],
    "options_hi": ["ruby", "annotation", "rt", "rp"],
    "answer_en": "ruby",
    "answer_hi": "ruby",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML tag is used to define ruby text?",
    "question_hi": "रूबी टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["rt", "rubytext", "annotation", "ruby"],
    "options_hi": ["rt", "rubytext", "annotation", "ruby"],
    "answer_en": "rt",
    "answer_hi": "rt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML tag is used to define ruby parentheses?",
    "question_hi": "रूबी पैरेन्थेसिस को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["rp", "parentheses", "bracket", "ruby"],
    "options_hi": ["rp", "parentheses", "bracket", "ruby"],
    "answer_en": "rp",
    "answer_hi": "rp",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML tag is used to define a code element?",
    "question_hi": "कोड एलिमेंट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["code", "programming", "syntax", "pre"],
    "options_hi": ["code", "programming", "syntax", "pre"],
    "answer_en": "code",
    "answer_hi": "code",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML tag is used to define keyboard input?",
    "question_hi": "कीबोर्ड इनपुट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["kbd", "keyboard", "input", "key"],
    "options_hi": ["kbd", "keyboard", "input", "key"],
    "answer_en": "kbd",
    "answer_hi": "kbd",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML tag is used to define sample output?",
    "question_hi": "सैंपल आउटपुट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["samp", "sample", "output", "code"],
    "options_hi": ["samp", "sample", "output", "code"],
    "answer_en": "samp",
    "answer_hi": "samp",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML tag is used to define a variable?",
    "question_hi": "वेरिएबल को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["var", "variable", "v", "value"],
    "options_hi": ["var", "variable", "v", "value"],
    "answer_en": "var",
    "answer_hi": "var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML tag is used to define preformatted text?",
    "question_hi": "प्रीफॉर्मेटेड टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["pre", "preformatted", "code", "text"],
    "options_hi": ["pre", "preformatted", "code", "text"],
    "answer_en": "pre",
    "answer_hi": "pre",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML tag is used to define a line break?",
    "question_hi": "लाइन ब्रेक को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["br", "break", "newline", "lb"],
    "options_hi": ["br", "break", "newline", "lb"],
    "answer_en": "br",
    "answer_hi": "br",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML tag is used to define a horizontal rule?",
    "question_hi": "हॉरिजॉन्टल रूल को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["hr", "horizontal", "rule", "line"],
    "options_hi": ["hr", "horizontal", "rule", "line"],
    "answer_en": "hr",
    "answer_hi": "hr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML tag is used to define a word break opportunity?",
    "question_hi": "वर्ड ब्रेक ऑपर्चुनिटी को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["wbr", "wordbreak", "break", "br"],
    "options_hi": ["wbr", "wordbreak", "break", "br"],
    "answer_en": "wbr",
    "answer_hi": "wbr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML tag is used to define an image?",
    "question_hi": "इमेज को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["img", "image", "picture", "photo"],
    "options_hi": ["img", "image", "picture", "photo"],
    "answer_en": "img",
    "answer_hi": "img",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML tag is used to define an image map?",
    "question_hi": "इमेज मैप को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["map", "imagemap", "area", "image"],
    "options_hi": ["map", "imagemap", "area", "image"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML tag is used to define an area in image map?",
    "question_hi": "इमेज मैप में एरिया को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["area", "maparea", "section", "part"],
    "options_hi": ["area", "maparea", "section", "part"],
    "answer_en": "area",
    "answer_hi": "area",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
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
    "num": 34,
    "question_en": "Which HTML tag is used to define a figure?",
    "question_hi": "फिगर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["figure", "img", "picture", "fig"],
    "options_hi": ["figure", "img", "picture", "fig"],
    "answer_en": "figure",
    "answer_hi": "figure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML tag is used to define a figure caption?",
    "question_hi": "फिगर कैप्शन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["figcaption", "caption", "figure-title", "figcap"],
    "options_hi": ["figcaption", "caption", "figure-title", "figcap"],
    "answer_en": "figcaption",
    "answer_hi": "figcaption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML tag is used to define a canvas for drawing?",
    "question_hi": "ड्रॉइंग के लिए कैनवास को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["canvas", "draw", "paint", "graphics"],
    "options_hi": ["canvas", "draw", "paint", "graphics"],
    "answer_en": "canvas",
    "answer_hi": "canvas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
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
    "num": 38,
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
    "num": 39,
    "question_en": "Which HTML tag is used to define a video player?",
    "question_hi": "वीडियो प्लेयर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["video", "movie", "media", "film"],
    "options_hi": ["video", "movie", "media", "film"],
    "answer_en": "video",
    "answer_hi": "video",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML tag is used to define an audio player?",
    "question_hi": "ऑडियो प्लेयर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["audio", "sound", "music", "player"],
    "options_hi": ["audio", "sound", "music", "player"],
    "answer_en": "audio",
    "answer_hi": "audio",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
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
    "num": 42,
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
    "num": 43,
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
    "num": 44,
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
    "num": 45,
    "question_en": "Which HTML tag is used to define a parameter?",
    "question_hi": "पैरामीटर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["param", "parameter", "setting", "value"],
    "options_hi": ["param", "parameter", "setting", "value"],
    "answer_en": "param",
    "answer_hi": "param",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
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
    "num": 47,
    "question_en": "Which HTML tag is used to define a noscript section?",
    "question_hi": "नोस्क्रिप्ट सेक्शन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["noscript", "script", "no-js", "alternative"],
    "options_hi": ["noscript", "script", "no-js", "alternative"],
    "answer_en": "noscript",
    "answer_hi": "noscript",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
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
    "num": 49,
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
    "num": 50,
    "question_en": "Which HTML tag is used to define a time element?",
    "question_hi": "टाइम एलिमेंट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["time", "date", "datetime", "clock"],
    "options_hi": ["time", "date", "datetime", "clock"],
    "answer_en": "time",
    "answer_hi": "time",
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
