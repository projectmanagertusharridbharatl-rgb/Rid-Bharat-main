const questions = [
  {
    "num": 1,
    "question_en": "Which HTML5 tag is used for navigation links?",
    "question_hi": "नेविगेशन लिंक्स के लिए कौन सा HTML5 टैग उपयोग होता है?",
    "options_en": ["nav", "menu", "navigation", "links"],
    "options_hi": ["nav", "menu", "navigation", "links"],
    "answer_en": "nav",
    "answer_hi": "nav",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML5 tag represents independent content?",
    "question_hi": "कौन सा HTML5 टैग स्वतंत्र कंटेंट को दर्शाता है?",
    "options_en": ["article", "section", "div", "main"],
    "options_hi": ["article", "section", "div", "main"],
    "answer_en": "article",
    "answer_hi": "article",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML5 tag is used for sidebar content?",
    "question_hi": "साइडबार कंटेंट के लिए कौन सा HTML5 टैग उपयोग होता है?",
    "options_en": ["aside", "sidebar", "nav", "section"],
    "options_hi": ["aside", "sidebar", "nav", "section"],
    "answer_en": "aside",
    "answer_hi": "aside",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML5 tag defines the main content area?",
    "question_hi": "मुख्य कंटेंट एरिया को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["main", "content", "body", "section"],
    "options_hi": ["main", "content", "body", "section"],
    "answer_en": "main",
    "answer_hi": "main",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML5 tag is used for footer content?",
    "question_hi": "फूटर कंटेंट के लिए कौन सा HTML5 टैग उपयोग होता है?",
    "options_en": ["footer", "bottom", "end", "section"],
    "options_hi": ["footer", "bottom", "end", "section"],
    "answer_en": "footer",
    "answer_hi": "footer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML5 tag is used for header content?",
    "question_hi": "हेडर कंटेंट के लिए कौन सा HTML5 टैग उपयोग होता है?",
    "options_en": ["header", "top", "head", "section"],
    "options_hi": ["header", "top", "head", "section"],
    "answer_en": "header",
    "answer_hi": "header",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML5 tag defines a section in a document?",
    "question_hi": "डॉक्यूमेंट में सेक्शन को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["section", "div", "article", "main"],
    "options_hi": ["section", "div", "article", "main"],
    "answer_en": "section",
    "answer_hi": "section",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML5 tag is used for figure captions?",
    "question_hi": "फिगर कैप्शन के लिए कौन सा HTML5 टैग उपयोग होता है?",
    "options_en": ["figcaption", "caption", "figure-text", "desc"],
    "options_hi": ["figcaption", "caption", "figure-text", "desc"],
    "answer_en": "figcaption",
    "answer_hi": "figcaption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML5 tag represents a figure?",
    "question_hi": "फिगर को दर्शाने वाला HTML5 टैग कौन सा है?",
    "options_en": ["figure", "img", "picture", "illustration"],
    "options_hi": ["figure", "img", "picture", "illustration"],
    "answer_en": "figure",
    "answer_hi": "figure",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML5 tag defines marked/highlighted text?",
    "question_hi": "मार्क्ड/हाइलाइटेड टेक्स्ट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["mark", "highlight", "strong", "em"],
    "options_hi": ["mark", "highlight", "strong", "em"],
    "answer_en": "mark",
    "answer_hi": "mark",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML5 tag defines a progress bar?",
    "question_hi": "प्रोग्रेस बार को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["progress", "meter", "range", "bar"],
    "options_hi": ["progress", "meter", "range", "bar"],
    "answer_en": "progress",
    "answer_hi": "progress",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML5 tag defines a scalar measurement?",
    "question_hi": "स्केलर माप को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["meter", "progress", "range", "measure"],
    "options_hi": ["meter", "progress", "range", "measure"],
    "answer_en": "meter",
    "answer_hi": "meter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML5 tag defines a date/time control?",
    "question_hi": "डेट/टाइम कंट्रोल को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["input type='datetime-local'", "time", "date", "calendar"],
    "options_hi": ["input type='datetime-local'", "time", "date", "calendar"],
    "answer_en": "input type='datetime-local'",
    "answer_hi": "input type='datetime-local'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML5 tag defines a color picker?",
    "question_hi": "कलर पिकर को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["input type='color'", "color", "picker", "input type='picker'"],
    "options_hi": ["input type='color'", "color", "picker", "input type='picker'"],
    "answer_en": "input type='color'",
    "answer_hi": "input type='color'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML5 tag defines a range control?",
    "question_hi": "रेंज कंट्रोल को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["input type='range'", "range", "slider", "input type='slider'"],
    "options_hi": ["input type='range'", "range", "slider", "input type='slider'"],
    "answer_en": "input type='range'",
    "answer_hi": "input type='range'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML5 tag defines a search field?",
    "question_hi": "सर्च फील्ड को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["input type='search'", "search", "input type='text'", "find"],
    "options_hi": ["input type='search'", "search", "input type='text'", "find"],
    "answer_en": "input type='search'",
    "answer_hi": "input type='search'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML5 tag defines a telephone number input?",
    "question_hi": "टेलीफोन नंबर इनपुट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["input type='tel'", "tel", "phone", "input type='phone'"],
    "options_hi": ["input type='tel'", "tel", "phone", "input type='phone'"],
    "answer_en": "input type='tel'",
    "answer_hi": "input type='tel'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML5 tag defines a URL input?",
    "question_hi": "URL इनपुट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["input type='url'", "url", "link", "input type='link'"],
    "options_hi": ["input type='url'", "url", "link", "input type='link'"],
    "answer_en": "input type='url'",
    "answer_hi": "input type='url'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML5 tag defines an email input?",
    "question_hi": "ईमेल इनपुट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["input type='email'", "email", "mail", "input type='mail'"],
    "options_hi": ["input type='email'", "email", "mail", "input type='mail'"],
    "answer_en": "input type='email'",
    "answer_hi": "input type='email'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML5 tag defines a number input?",
    "question_hi": "नंबर इनपुट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["input type='number'", "number", "numeric", "input type='numeric'"],
    "options_hi": ["input type='number'", "number", "numeric", "input type='numeric'"],
    "answer_en": "input type='number'",
    "answer_hi": "input type='number'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML5 attribute makes an input field required?",
    "question_hi": "कौन सा HTML5 एट्रिब्यूट इनपुट फील्ड को आवश्यक बनाता है?",
    "options_en": ["required", "mandatory", "necessary", "must"],
    "options_hi": ["required", "mandatory", "necessary", "must"],
    "answer_en": "required",
    "answer_hi": "required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML5 attribute specifies a placeholder text?",
    "question_hi": "कौन सा HTML5 एट्रिब्यूट प्लेसहोल्डर टेक्स्ट निर्दिष्ट करता है?",
    "options_en": ["placeholder", "hint", "text", "value"],
    "options_hi": ["placeholder", "hint", "text", "value"],
    "answer_en": "placeholder",
    "answer_hi": "placeholder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML5 attribute enables autocomplete?",
    "question_hi": "कौन सा HTML5 एट्रिब्यूट ऑटोकम्पलीट को सक्षम करता है?",
    "options_en": ["autocomplete", "autofill", "complete", "suggest"],
    "options_hi": ["autocomplete", "autofill", "complete", "suggest"],
    "answer_en": "autocomplete",
    "answer_hi": "autocomplete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML5 attribute automatically focuses an input?",
    "question_hi": "कौन सा HTML5 एट्रिब्यूट इनपुट को स्वचालित रूप से फोकस करता है?",
    "options_en": ["autofocus", "focus", "auto", "selected"],
    "options_hi": ["autofocus", "focus", "auto", "selected"],
    "answer_en": "autofocus",
    "answer_hi": "autofocus",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML5 tag defines a dialog box?",
    "question_hi": "डायलॉग बॉक्स को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["dialog", "modal", "popup", "window"],
    "options_hi": ["dialog", "modal", "popup", "window"],
    "answer_en": "dialog",
    "answer_hi": "dialog",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML5 tag defines a details widget?",
    "question_hi": "डिटेल्स विजेट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["details", "summary", "accordion", "expand"],
    "options_hi": ["details", "summary", "accordion", "expand"],
    "answer_en": "details",
    "answer_hi": "details",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML5 tag defines a summary for details?",
    "question_hi": "डिटेल्स के लिए सारांश को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["summary", "details", "heading", "title"],
    "options_hi": ["summary", "details", "heading", "title"],
    "answer_en": "summary",
    "answer_hi": "summary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML5 tag defines a template?",
    "question_hi": "टेम्पलेट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["template", "script", "div", "pattern"],
    "options_hi": ["template", "script", "div", "pattern"],
    "answer_en": "template",
    "answer_hi": "template",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML5 tag defines a slot?",
    "question_hi": "स्लॉट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["slot", "placeholder", "gap", "space"],
    "options_hi": ["slot", "placeholder", "gap", "space"],
    "answer_en": "slot",
    "answer_hi": "slot",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML5 tag defines a canvas for graphics?",
    "question_hi": "ग्राफिक्स के लिए कैनवास को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["canvas", "svg", "graphics", "draw"],
    "options_hi": ["canvas", "svg", "graphics", "draw"],
    "answer_en": "canvas",
    "answer_hi": "canvas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML5 tag defines scalable vector graphics?",
    "question_hi": "स्केलेबल वेक्टर ग्राफिक्स को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["svg", "canvas", "vector", "graphic"],
    "options_hi": ["svg", "canvas", "vector", "graphic"],
    "answer_en": "svg",
    "answer_hi": "svg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML5 tag defines audio content?",
    "question_hi": "ऑडियो कंटेंट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["audio", "sound", "music", "player"],
    "options_hi": ["audio", "sound", "music", "player"],
    "answer_en": "audio",
    "answer_hi": "audio",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML5 tag defines video content?",
    "question_hi": "वीडियो कंटेंट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["video", "movie", "film", "player"],
    "options_hi": ["video", "movie", "film", "player"],
    "answer_en": "video",
    "answer_hi": "video",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML5 tag defines a track for media?",
    "question_hi": "मीडिया के लिए ट्रैक को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["track", "source", "media", "subtitle"],
    "options_hi": ["track", "source", "media", "subtitle"],
    "answer_en": "track",
    "answer_hi": "track",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML5 tag defines a source for media?",
    "question_hi": "मीडिया के लिए सोर्स को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["source", "src", "media", "file"],
    "options_hi": ["source", "src", "media", "file"],
    "answer_en": "source",
    "answer_hi": "source",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML5 tag defines a data list?",
    "question_hi": "डेटा लिस्ट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["datalist", "list", "options", "select"],
    "options_hi": ["datalist", "list", "options", "select"],
    "answer_en": "datalist",
    "answer_hi": "datalist",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML5 tag defines an output element?",
    "question_hi": "आउटपुट एलिमेंट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["output", "result", "display", "span"],
    "options_hi": ["output", "result", "display", "span"],
    "answer_en": "output",
    "answer_hi": "output",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML5 tag defines a time/date?",
    "question_hi": "टाइम/डेट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["time", "datetime", "date", "calendar"],
    "options_hi": ["time", "datetime", "date", "calendar"],
    "answer_en": "time",
    "answer_hi": "time",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML5 tag defines a ruby annotation?",
    "question_hi": "रूबी एनोटेशन को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["ruby", "annotation", "rt", "rp"],
    "options_hi": ["ruby", "annotation", "rt", "rp"],
    "answer_en": "ruby",
    "answer_hi": "ruby",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML5 tag defines ruby text?",
    "question_hi": "रूबी टेक्स्ट को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["rt", "ruby", "rp", "text"],
    "options_hi": ["rt", "ruby", "rp", "text"],
    "answer_en": "rt",
    "answer_hi": "rt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML5 tag defines ruby parentheses?",
    "question_hi": "रूबी पैरेन्थेसिस को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["rp", "ruby", "rt", "parentheses"],
    "options_hi": ["rp", "ruby", "rt", "parentheses"],
    "answer_en": "rp",
    "answer_hi": "rp",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML5 tag defines a bidirectional isolation?",
    "question_hi": "बायडायरेक्शनल आइसोलेशन को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["bdi", "bdo", "dir", "span"],
    "options_hi": ["bdi", "bdo", "dir", "span"],
    "answer_en": "bdi",
    "answer_hi": "bdi",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML5 tag defines bidirectional override?",
    "question_hi": "बायडायरेक्शनल ओवरराइड को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["bdo", "bdi", "dir", "override"],
    "options_hi": ["bdo", "bdi", "dir", "override"],
    "answer_en": "bdo",
    "answer_hi": "bdo",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML5 tag defines a word break opportunity?",
    "question_hi": "वर्ड ब्रेक ऑपरच्यूनिटी को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["wbr", "br", "break", "wordbreak"],
    "options_hi": ["wbr", "br", "break", "wordbreak"],
    "answer_en": "wbr",
    "answer_hi": "wbr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML5 tag defines a line break?",
    "question_hi": "लाइन ब्रेक को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["br", "wbr", "break", "lb"],
    "options_hi": ["br", "wbr", "break", "lb"],
    "answer_en": "br",
    "answer_hi": "br",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML5 tag defines a span of text?",
    "question_hi": "टेक्स्ट के स्पैन को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["span", "div", "text", "section"],
    "options_hi": ["span", "div", "text", "section"],
    "answer_en": "span",
    "answer_hi": "span",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML5 tag defines a division/section?",
    "question_hi": "डिवीजन/सेक्शन को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["div", "span", "section", "article"],
    "options_hi": ["div", "span", "section", "article"],
    "answer_en": "div",
    "answer_hi": "div",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML5 tag defines a paragraph?",
    "question_hi": "पैराग्राफ को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["p", "para", "text", "div"],
    "options_hi": ["p", "para", "text", "div"],
    "answer_en": "p",
    "answer_hi": "p",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML5 tag defines a hyperlink?",
    "question_hi": "हाइपरलिंक को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["a", "link", "href", "hyper"],
    "options_hi": ["a", "link", "href", "hyper"],
    "answer_en": "a",
    "answer_hi": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML5 tag defines an image?",
    "question_hi": "इमेज को परिभाषित करने वाला HTML5 टैग कौन सा है?",
    "options_en": ["img", "image", "picture", "src"],
    "options_hi": ["img", "image", "picture", "src"],
    "answer_en": "img",
    "answer_hi": "img",
    "attempted": false,
    "selected": ""
  }
]




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
