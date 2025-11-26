const questions = [
  {
    "num": 1,
    "question_en": "Which HTML tag is used to create a submit button?",
    "question_hi": "सबमिट बटन बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='submit'", "button", "submit", "input type='button'"],
    "options_hi": ["input type='submit'", "button", "submit", "input type='button'"],
    "answer_en": "input type='submit'",
    "answer_hi": "input type='submit'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML tag is used to create a reset button?",
    "question_hi": "रिसेट बटन बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='reset'", "button", "reset", "input type='button'"],
    "options_hi": ["input type='reset'", "button", "reset", "input type='button'"],
    "answer_en": "input type='reset'",
    "answer_hi": "input type='reset'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML tag is used to create a checkbox?",
    "question_hi": "चेकबॉक्स बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='checkbox'", "checkbox", "input type='check'", "check"],
    "options_hi": ["input type='checkbox'", "checkbox", "input type='check'", "check"],
    "answer_en": "input type='checkbox'",
    "answer_hi": "input type='checkbox'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML tag is used to create a radio button?",
    "question_hi": "रेडियो बटन बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='radio'", "radio", "input type='radiobutton'", "radiobutton"],
    "options_hi": ["input type='radio'", "radio", "input type='radiobutton'", "radiobutton"],
    "answer_en": "input type='radio'",
    "answer_hi": "input type='radio'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML tag is used to create a password field?",
    "question_hi": "पासवर्ड फील्ड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='password'", "password", "input type='secret'", "secret"],
    "options_hi": ["input type='password'", "password", "input type='secret'", "secret"],
    "answer_en": "input type='password'",
    "answer_hi": "input type='password'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML tag is used to create a file upload field?",
    "question_hi": "फाइल अपलोड फील्ड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='file'", "file", "input type='upload'", "upload"],
    "options_hi": ["input type='file'", "file", "input type='upload'", "upload"],
    "answer_en": "input type='file'",
    "answer_hi": "input type='file'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML tag is used to create a hidden input field?",
    "question_hi": "हिडन इनपुट फील्ड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='hidden'", "hidden", "input type='invisible'", "invisible"],
    "options_hi": ["input type='hidden'", "hidden", "input type='invisible'", "invisible"],
    "answer_en": "input type='hidden'",
    "answer_hi": "input type='hidden'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML tag is used to create an email input field?",
    "question_hi": "ईमेल इनपुट फील्ड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='email'", "email", "input type='mail'", "mail"],
    "options_hi": ["input type='email'", "email", "input type='mail'", "mail"],
    "answer_en": "input type='email'",
    "answer_hi": "input type='email'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML tag is used to create a number input field?",
    "question_hi": "नंबर इनपुट फील्ड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='number'", "number", "input type='numeric'", "numeric"],
    "options_hi": ["input type='number'", "number", "input type='numeric'", "numeric"],
    "answer_en": "input type='number'",
    "answer_hi": "input type='number'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML tag is used to create a range slider?",
    "question_hi": "रेंज स्लाइडर बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='range'", "range", "input type='slider'", "slider"],
    "options_hi": ["input type='range'", "range", "input type='slider'", "slider"],
    "answer_en": "input type='range'",
    "answer_hi": "input type='range'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML tag is used to create a date picker?",
    "question_hi": "डेट पिकर बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='date'", "date", "input type='calendar'", "calendar"],
    "options_hi": ["input type='date'", "date", "input type='calendar'", "calendar"],
    "answer_en": "input type='date'",
    "answer_hi": "input type='date'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML tag is used to create a color picker?",
    "question_hi": "कलर पिकर बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='color'", "color", "input type='picker'", "picker"],
    "options_hi": ["input type='color'", "color", "input type='picker'", "picker"],
    "answer_en": "input type='color'",
    "answer_hi": "input type='color'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML tag is used to create a search field?",
    "question_hi": "सर्च फील्ड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='search'", "search", "input type='find'", "find"],
    "options_hi": ["input type='search'", "search", "input type='find'", "find"],
    "answer_en": "input type='search'",
    "answer_hi": "input type='search'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML tag is used to create a telephone number input field?",
    "question_hi": "टेलीफोन नंबर इनपुट फील्ड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='tel'", "tel", "input type='phone'", "phone"],
    "options_hi": ["input type='tel'", "tel", "input type='phone'", "phone"],
    "answer_en": "input type='tel'",
    "answer_hi": "input type='tel'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML tag is used to create a URL input field?",
    "question_hi": "URL इनपुट फील्ड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='url'", "url", "input type='link'", "link"],
    "options_hi": ["input type='url'", "url", "input type='link'", "link"],
    "answer_en": "input type='url'",
    "answer_hi": "input type='url'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML tag is used to create a time input field?",
    "question_hi": "टाइम इनपुट फील्ड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='time'", "time", "input type='clock'", "clock"],
    "options_hi": ["input type='time'", "time", "input type='clock'", "clock"],
    "answer_en": "input type='time'",
    "answer_hi": "input type='time'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML tag is used to create a month input field?",
    "question_hi": "मंथ इनपुट फील्ड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='month'", "month", "input type='date'", "calendar"],
    "options_hi": ["input type='month'", "month", "input type='date'", "calendar"],
    "answer_en": "input type='month'",
    "answer_hi": "input type='month'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML tag is used to create a week input field?",
    "question_hi": "वीक इनपुट फील्ड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='week'", "week", "input type='date'", "calendar"],
    "options_hi": ["input type='week'", "week", "input type='date'", "calendar"],
    "answer_en": "input type='week'",
    "answer_hi": "input type='week'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML tag is used to create a datetime-local input field?",
    "question_hi": "डेटटाइम-लोकल इनपुट फील्ड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["input type='datetime-local'", "datetime", "input type='date'", "datetime-local"],
    "options_hi": ["input type='datetime-local'", "datetime", "input type='date'", "datetime-local"],
    "answer_en": "input type='datetime-local'",
    "answer_hi": "input type='datetime-local'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML tag is used to create a text area?",
    "question_hi": "टेक्स्ट एरिया बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["textarea", "text", "input type='textarea'", "area"],
    "options_hi": ["textarea", "text", "input type='textarea'", "area"],
    "answer_en": "textarea",
    "answer_hi": "textarea",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML tag is used to create a drop-down list?",
    "question_hi": "ड्रॉप-डाउन लिस्ट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["select", "option", "dropdown", "list"],
    "options_hi": ["select", "option", "dropdown", "list"],
    "answer_en": "select",
    "answer_hi": "select",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML tag is used to create an option in a drop-down list?",
    "question_hi": "ड्रॉप-डाउन लिस्ट में ऑप्शन बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["option", "select", "item", "choice"],
    "options_hi": ["option", "select", "item", "choice"],
    "answer_en": "option",
    "answer_hi": "option",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML tag is used to create a button?",
    "question_hi": "बटन बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["button", "input type='button'", "btn", "click"],
    "options_hi": ["button", "input type='button'", "btn", "click"],
    "answer_en": "button",
    "answer_hi": "button",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML tag is used to create a fieldset?",
    "question_hi": "फील्डसेट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["fieldset", "form", "group", "section"],
    "options_hi": ["fieldset", "form", "group", "section"],
    "answer_en": "fieldset",
    "answer_hi": "fieldset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML tag is used to create a legend for a fieldset?",
    "question_hi": "फील्डसेट के लिए लेजेंड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["legend", "label", "title", "caption"],
    "options_hi": ["legend", "label", "title", "caption"],
    "answer_en": "legend",
    "answer_hi": "legend",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML tag is used to create a datalist?",
    "question_hi": "डेटालिस्ट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["datalist", "list", "options", "select"],
    "options_hi": ["datalist", "list", "options", "select"],
    "answer_en": "datalist",
    "answer_hi": "datalist",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML tag is used to create an output element?",
    "question_hi": "आउटपुट एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["output", "result", "display", "span"],
    "options_hi": ["output", "result", "display", "span"],
    "answer_en": "output",
    "answer_hi": "output",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML tag is used to create a progress bar?",
    "question_hi": "प्रोग्रेस बार बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["progress", "meter", "bar", "load"],
    "options_hi": ["progress", "meter", "bar", "load"],
    "answer_en": "progress",
    "answer_hi": "progress",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML tag is used to create a meter?",
    "question_hi": "मीटर बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["meter", "progress", "range", "measure"],
    "options_hi": ["meter", "progress", "range", "measure"],
    "answer_en": "meter",
    "answer_hi": "meter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML tag is used to create a details element?",
    "question_hi": "डिटेल्स एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["details", "summary", "accordion", "expand"],
    "options_hi": ["details", "summary", "accordion", "expand"],
    "answer_en": "details",
    "answer_hi": "details",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML tag is used to create a summary for details?",
    "question_hi": "डिटेल्स के लिए सारांश बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["summary", "details", "heading", "title"],
    "options_hi": ["summary", "details", "heading", "title"],
    "answer_en": "summary",
    "answer_hi": "summary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML tag is used to create a dialog box?",
    "question_hi": "डायलॉग बॉक्स बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["dialog", "modal", "popup", "window"],
    "options_hi": ["dialog", "modal", "popup", "window"],
    "answer_en": "dialog",
    "answer_hi": "dialog",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML tag is used to create a menu?",
    "question_hi": "मेनू बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["menu", "nav", "ul", "list"],
    "options_hi": ["menu", "nav", "ul", "list"],
    "answer_en": "menu",
    "answer_hi": "menu",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML tag is used to create a command in a menu?",
    "question_hi": "मेनू में कमांड बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["command", "item", "li", "option"],
    "options_hi": ["command", "item", "li", "option"],
    "answer_en": "command",
    "answer_hi": "command",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML tag is used to create a keygen element?",
    "question_hi": "कीजन एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["keygen", "key", "generate", "security"],
    "options_hi": ["keygen", "key", "generate", "security"],
    "answer_en": "keygen",
    "answer_hi": "keygen",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML tag is used to create a mark element?",
    "question_hi": "मार्क एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["mark", "highlight", "strong", "em"],
    "options_hi": ["mark", "highlight", "strong", "em"],
    "answer_en": "mark",
    "answer_hi": "mark",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML tag is used to create a wbr element?",
    "question_hi": "WBR एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["wbr", "br", "break", "wordbreak"],
    "options_hi": ["wbr", "br", "break", "wordbreak"],
    "answer_en": "wbr",
    "answer_hi": "wbr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML tag is used to create a canvas element?",
    "question_hi": "कैनवास एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["canvas", "svg", "graphics", "draw"],
    "options_hi": ["canvas", "svg", "graphics", "draw"],
    "answer_en": "canvas",
    "answer_hi": "canvas",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML tag is used to create an SVG element?",
    "question_hi": "SVG एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["svg", "canvas", "vector", "graphic"],
    "options_hi": ["svg", "canvas", "vector", "graphic"],
    "answer_en": "svg",
    "answer_hi": "svg",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML tag is used to create an audio element?",
    "question_hi": "ऑडियो एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["audio", "sound", "music", "player"],
    "options_hi": ["audio", "sound", "music", "player"],
    "answer_en": "audio",
    "answer_hi": "audio",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML tag is used to create a video element?",
    "question_hi": "वीडियो एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["video", "movie", "film", "player"],
    "options_hi": ["video", "movie", "film", "player"],
    "answer_en": "video",
    "answer_hi": "video",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML tag is used to create a source element?",
    "question_hi": "सोर्स एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["source", "src", "media", "file"],
    "options_hi": ["source", "src", "media", "file"],
    "answer_en": "source",
    "answer_hi": "source",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML tag is used to create a track element?",
    "question_hi": "ट्रैक एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["track", "source", "media", "subtitle"],
    "options_hi": ["track", "source", "media", "subtitle"],
    "answer_en": "track",
    "answer_hi": "track",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML tag is used to create an embed element?",
    "question_hi": "एम्बेड एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["embed", "object", "iframe", "include"],
    "options_hi": ["embed", "object", "iframe", "include"],
    "answer_en": "embed",
    "answer_hi": "embed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML tag is used to create an object element?",
    "question_hi": "ऑब्जेक्ट एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["object", "embed", "iframe", "include"],
    "options_hi": ["object", "embed", "iframe", "include"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML tag is used to create a param element?",
    "question_hi": "पैराम एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["param", "parameter", "value", "attribute"],
    "options_hi": ["param", "parameter", "value", "attribute"],
    "answer_en": "param",
    "answer_hi": "param",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML tag is used to create an iframe?",
    "question_hi": "आईफ्रेम बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["iframe", "frame", "embed", "object"],
    "options_hi": ["iframe", "frame", "embed", "object"],
    "answer_en": "iframe",
    "answer_hi": "iframe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML tag is used to create a map element?",
    "question_hi": "मैप एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["map", "area", "img", "imagemap"],
    "options_hi": ["map", "area", "img", "imagemap"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML tag is used to create an area element?",
    "question_hi": "एरिया एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["area", "map", "img", "click"],
    "options_hi": ["area", "map", "img", "click"],
    "answer_en": "area",
    "answer_hi": "area",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML tag is used to create a picture element?",
    "question_hi": "पिक्चर एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["picture", "img", "image", "photo"],
    "options_hi": ["picture", "img", "image", "photo"],
    "answer_en": "picture",
    "answer_hi": "picture",
    "attempted": false,
    "selected": ""
  }
]



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