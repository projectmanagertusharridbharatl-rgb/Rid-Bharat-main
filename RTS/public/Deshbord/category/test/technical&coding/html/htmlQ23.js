const questions = [
  {
    "num": 1,
    "question_en": "Which HTML tag is used to define a document type?",
    "question_hi": "डॉक्यूमेंट टाइप को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["!DOCTYPE", "doctype", "documenttype", "type"],
    "options_hi": ["!DOCTYPE", "doctype", "documenttype", "type"],
    "answer_en": "!DOCTYPE",
    "answer_hi": "!DOCTYPE",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML tag is used to define a comment?",
    "question_hi": "कमेंट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<!-- -->", "//", "/* */", "#"],
    "options_hi": ["<!-- -->", "//", "/* */", "#"],
    "answer_en": "<!-- -->",
    "answer_hi": "<!-- -->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML tag is used to define a table?",
    "question_hi": "टेबल को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["table", "tr", "td", "grid"],
    "options_hi": ["table", "tr", "td", "grid"],
    "answer_en": "table",
    "answer_hi": "table",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML tag is used to define a table row?",
    "question_hi": "टेबल रो को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["tr", "td", "row", "table-row"],
    "options_hi": ["tr", "td", "row", "table-row"],
    "answer_en": "tr",
    "answer_hi": "tr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML tag is used to define a table cell?",
    "question_hi": "टेबल सेल को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["td", "tr", "cell", "table-cell"],
    "options_hi": ["td", "tr", "cell", "table-cell"],
    "answer_en": "td",
    "answer_hi": "td",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML tag is used to define a table header?",
    "question_hi": "टेबल हेडर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["th", "thead", "header", "table-header"],
    "options_hi": ["th", "thead", "header", "table-header"],
    "answer_en": "th",
    "answer_hi": "th",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML tag is used to define a table head?",
    "question_hi": "टेबल हेड को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["thead", "th", "head", "table-head"],
    "options_hi": ["thead", "th", "head", "table-head"],
    "answer_en": "thead",
    "answer_hi": "thead",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML tag is used to define a table body?",
    "question_hi": "टेबल बॉडी को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["tbody", "body", "table-body", "tb"],
    "options_hi": ["tbody", "body", "table-body", "tb"],
    "answer_en": "tbody",
    "answer_hi": "tbody",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML tag is used to define a table footer?",
    "question_hi": "टेबल फुटर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["tfoot", "footer", "table-footer", "tf"],
    "options_hi": ["tfoot", "footer", "table-footer", "tf"],
    "answer_en": "tfoot",
    "answer_hi": "tfoot",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML tag is used to define a caption for a table?",
    "question_hi": "टेबल के लिए कैप्शन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["caption", "title", "table-caption", "cap"],
    "options_hi": ["caption", "title", "table-caption", "cap"],
    "answer_en": "caption",
    "answer_hi": "caption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML tag is used to define a list item?",
    "question_hi": "लिस्ट आइटम को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["li", "item", "list-item", "list"],
    "options_hi": ["li", "item", "list-item", "list"],
    "answer_en": "li",
    "answer_hi": "li",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML tag is used to define an unordered list?",
    "question_hi": "अनऑर्डर्ड लिस्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["ul", "ol", "list", "unordered"],
    "options_hi": ["ul", "ol", "list", "unordered"],
    "answer_en": "ul",
    "answer_hi": "ul",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML tag is used to define an ordered list?",
    "question_hi": "ऑर्डर्ड लिस्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["ol", "ul", "list", "ordered"],
    "options_hi": ["ol", "ul", "list", "ordered"],
    "answer_en": "ol",
    "answer_hi": "ol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML tag is used to define a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["dl", "dt", "dd", "description"],
    "options_hi": ["dl", "dt", "dd", "description"],
    "answer_en": "dl",
    "answer_hi": "dl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML tag is used to define a term in description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में टर्म को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["dt", "dd", "dl", "term"],
    "options_hi": ["dt", "dd", "dl", "term"],
    "answer_en": "dt",
    "answer_hi": "dt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML tag is used to define a description in description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में डिस्क्रिप्शन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["dd", "dt", "dl", "description"],
    "options_hi": ["dd", "dt", "dl", "description"],
    "answer_en": "dd",
    "answer_hi": "dd",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML tag is used to define a division or section?",
    "question_hi": "डिवीजन या सेक्शन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["div", "section", "span", "division"],
    "options_hi": ["div", "section", "span", "division"],
    "answer_en": "div",
    "answer_hi": "div",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML tag is used to define an article?",
    "question_hi": "आर्टिकल को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["article", "section", "div", "content"],
    "options_hi": ["article", "section", "div", "content"],
    "answer_en": "article",
    "answer_hi": "article",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML tag is used to define a section?",
    "question_hi": "सेक्शन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["section", "div", "article", "part"],
    "options_hi": ["section", "div", "article", "part"],
    "answer_en": "section",
    "answer_hi": "section",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML tag is used to define a header?",
    "question_hi": "हेडर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["header", "head", "h1", "top"],
    "options_hi": ["header", "head", "h1", "top"],
    "answer_en": "header",
    "answer_hi": "header",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML tag is used to define a footer?",
    "question_hi": "फुटर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["footer", "bottom", "end", "foot"],
    "options_hi": ["footer", "bottom", "end", "foot"],
    "answer_en": "footer",
    "answer_hi": "footer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML tag is used to define a navigation section?",
    "question_hi": "नेविगेशन सेक्शन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["nav", "navigation", "menu", "links"],
    "options_hi": ["nav", "navigation", "menu", "links"],
    "answer_en": "nav",
    "answer_hi": "nav",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML tag is used to define an aside content?",
    "question_hi": "असाइड कंटेंट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["aside", "sidebar", "div", "section"],
    "options_hi": ["aside", "sidebar", "div", "section"],
    "answer_en": "aside",
    "answer_hi": "aside",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML tag is used to define the main content?",
    "question_hi": "मुख्य कंटेंट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["main", "content", "div", "body"],
    "options_hi": ["main", "content", "div", "body"],
    "answer_en": "main",
    "answer_hi": "main",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
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
    "num": 26,
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
    "num": 27,
    "question_en": "Which HTML tag is used to define a mark or highlight?",
    "question_hi": "मार्क या हाइलाइट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["mark", "highlight", "strong", "em"],
    "options_hi": ["mark", "highlight", "strong", "em"],
    "answer_en": "mark",
    "answer_hi": "mark",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML tag is used to define a time?",
    "question_hi": "टाइम को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["time", "date", "datetime", "clock"],
    "options_hi": ["time", "date", "datetime", "clock"],
    "answer_en": "time",
    "answer_hi": "time",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
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
    "num": 30,
    "question_en": "Which HTML tag is used to define a summary?",
    "question_hi": "सारांश को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["summary", "details", "caption", "title"],
    "options_hi": ["summary", "details", "caption", "title"],
    "answer_en": "summary",
    "answer_hi": "summary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML tag is used to define a dialog?",
    "question_hi": "डायलॉग को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["dialog", "modal", "popup", "window"],
    "options_hi": ["dialog", "modal", "popup", "window"],
    "answer_en": "dialog",
    "answer_hi": "dialog",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML tag is used to define a data element?",
    "question_hi": "डेटा एलिमेंट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["data", "value", "info", "element"],
    "options_hi": ["data", "value", "info", "element"],
    "answer_en": "data",
    "answer_hi": "data",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
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
    "num": 34,
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
    "num": 35,
    "question_en": "Which HTML tag is used to define an output?",
    "question_hi": "आउटपुट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["output", "result", "display", "calculation"],
    "options_hi": ["output", "result", "display", "calculation"],
    "answer_en": "output",
    "answer_hi": "output",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML tag is used to define a picture?",
    "question_hi": "पिक्चर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
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
    "question_en": "Which HTML tag is used to define a source?",
    "question_hi": "सोर्स को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["source", "src", "media", "file"],
    "options_hi": ["source", "src", "media", "file"],
    "answer_en": "source",
    "answer_hi": "source",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML tag is used to define a track?",
    "question_hi": "ट्रैक को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["track", "subtitle", "caption", "audio"],
    "options_hi": ["track", "subtitle", "caption", "audio"],
    "answer_en": "track",
    "answer_hi": "track",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML tag is used to define an embed?",
    "question_hi": "एम्बेड को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
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
    "question_en": "Which HTML tag is used to define a param?",
    "question_hi": "पैराम को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
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
