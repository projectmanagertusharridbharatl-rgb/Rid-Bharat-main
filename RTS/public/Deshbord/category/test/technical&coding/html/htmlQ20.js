const questions = [
  {
    "num": 1,
    "question_en": "Which CSS property is used to change the cursor type?",
    "question_hi": "कर्सर टाइप बदलने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["cursor", "pointer", "mouse", "click"],
    "options_hi": ["cursor", "pointer", "mouse", "click"],
    "answer_en": "cursor",
    "answer_hi": "cursor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
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
    "num": 3,
    "question_en": "Which CSS property is used to create animations?",
    "question_hi": "एनिमेशन बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["animation", "transition", "transform", "keyframes"],
    "options_hi": ["animation", "transition", "transform", "keyframes"],
    "answer_en": "animation",
    "answer_hi": "animation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML tag is used to define a subscript?",
    "question_hi": "सबस्क्रिप्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["sub", "sup", "subscript", "low"],
    "options_hi": ["sub", "sup", "subscript", "low"],
    "answer_en": "sub",
    "answer_hi": "sub",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which CSS property is used to create smooth transitions?",
    "question_hi": "स्मूथ ट्रांजिशन बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["transition", "animation", "transform", "smooth"],
    "options_hi": ["transition", "animation", "transform", "smooth"],
    "answer_en": "transition",
    "answer_hi": "transition",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML tag is used to define a superscript?",
    "question_hi": "सुपरस्क्रिप्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["sup", "sub", "superscript", "high"],
    "options_hi": ["sup", "sub", "superscript", "high"],
    "answer_en": "sup",
    "answer_hi": "sup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which CSS property is used to rotate elements?",
    "question_hi": "एलिमेंट्स को रोटेट करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["transform", "rotate", "rotation", "transform-rotate"],
    "options_hi": ["transform", "rotate", "rotation", "transform-rotate"],
    "answer_en": "transform",
    "answer_hi": "transform",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML tag is used to define a data list?",
    "question_hi": "डेटा लिस्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["datalist", "select", "option", "list"],
    "options_hi": ["datalist", "select", "option", "list"],
    "answer_en": "datalist",
    "answer_hi": "datalist",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which CSS property is used to scale elements?",
    "question_hi": "एलिमेंट्स को स्केल करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["transform", "scale", "size", "resize"],
    "options_hi": ["transform", "scale", "size", "resize"],
    "answer_en": "transform",
    "answer_hi": "transform",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
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
    "num": 11,
    "question_en": "Which CSS property is used to create flexbox layouts?",
    "question_hi": "फ्लेक्सबॉक्स लेआउट बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["display", "flex", "flexbox", "layout"],
    "options_hi": ["display", "flex", "flexbox", "layout"],
    "answer_en": "display",
    "answer_hi": "display",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
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
    "num": 13,
    "question_en": "Which CSS property is used to align items in flexbox?",
    "question_hi": "फ्लेक्सबॉक्स में आइटम्स को अलाइन करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["align-items", "justify-content", "align-content", "flex-align"],
    "options_hi": ["align-items", "justify-content", "align-content", "flex-align"],
    "answer_en": "align-items",
    "answer_hi": "align-items",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML tag is used to define a track for media?",
    "question_hi": "मीडिया के लिए ट्रैक को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["track", "source", "media", "audio"],
    "options_hi": ["track", "source", "media", "audio"],
    "answer_en": "track",
    "answer_hi": "track",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which CSS property is used to justify content in flexbox?",
    "question_hi": "फ्लेक्सबॉक्स में कंटेंट को जस्टिफाई करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["justify-content", "align-items", "align-content", "flex-justify"],
    "options_hi": ["justify-content", "align-items", "align-content", "flex-justify"],
    "answer_en": "justify-content",
    "answer_hi": "justify-content",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML tag is used to define an embedded object?",
    "question_hi": "एम्बेडेड ऑब्जेक्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["embed", "object", "iframe", "media"],
    "options_hi": ["embed", "object", "iframe", "media"],
    "answer_en": "embed",
    "answer_hi": "embed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which CSS property is used to create grid layouts?",
    "question_hi": "ग्रिड लेआउट बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["display", "grid", "grid-template", "layout"],
    "options_hi": ["display", "grid", "grid-template", "layout"],
    "answer_en": "display",
    "answer_hi": "display",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML tag is used to define an iframe?",
    "question_hi": "आईफ्रेम को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["iframe", "frame", "embed", "object"],
    "options_hi": ["iframe", "frame", "embed", "object"],
    "answer_en": "iframe",
    "answer_hi": "iframe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which CSS property is used to define grid columns?",
    "question_hi": "ग्रिड कॉलम को परिभाषित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["grid-template-columns", "grid-columns", "columns", "grid-cols"],
    "options_hi": ["grid-template-columns", "grid-columns", "columns", "grid-cols"],
    "answer_en": "grid-template-columns",
    "answer_hi": "grid-template-columns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML tag is used to define a parameter for object?",
    "question_hi": "ऑब्जेक्ट के लिए पैरामीटर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["param", "parameter", "object", "embed"],
    "options_hi": ["param", "parameter", "object", "embed"],
    "answer_en": "param",
    "answer_hi": "param",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which CSS property is used to define grid rows?",
    "question_hi": "ग्रिड रो को परिभाषित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["grid-template-rows", "grid-rows", "rows", "grid-rows"],
    "options_hi": ["grid-template-rows", "grid-rows", "rows", "grid-rows"],
    "answer_en": "grid-template-rows",
    "answer_hi": "grid-template-rows",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML tag is used to define a map area?",
    "question_hi": "मैप एरिया को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["area", "map", "img", "coords"],
    "options_hi": ["area", "map", "img", "coords"],
    "answer_en": "area",
    "answer_hi": "area",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which CSS property is used to create column layouts?",
    "question_hi": "कॉलम लेआउट बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["column-count", "columns", "grid", "flex"],
    "options_hi": ["column-count", "columns", "grid", "flex"],
    "answer_en": "column-count",
    "answer_hi": "column-count",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML tag is used to define a map?",
    "question_hi": "मैप को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["map", "area", "img", "image-map"],
    "options_hi": ["map", "area", "img", "image-map"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which CSS property is used to create multi-column layouts?",
    "question_hi": "मल्टी-कॉलम लेआउट बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["columns", "column-count", "grid", "flex"],
    "options_hi": ["columns", "column-count", "grid", "flex"],
    "answer_en": "columns",
    "answer_hi": "columns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML tag is used to define a base URL?",
    "question_hi": "बेस URL को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["base", "link", "url", "href"],
    "options_hi": ["base", "link", "url", "href"],
    "answer_en": "base",
    "answer_hi": "base",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which CSS property is used to create sticky elements?",
    "question_hi": "स्टिकी एलिमेंट्स बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["position", "sticky", "fixed", "relative"],
    "options_hi": ["position", "sticky", "fixed", "relative"],
    "answer_en": "position",
    "answer_hi": "position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML tag is used to define a link relationship?",
    "question_hi": "लिंक रिलेशनशिप को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["link", "a", "rel", "href"],
    "options_hi": ["link", "a", "rel", "href"],
    "answer_en": "link",
    "answer_hi": "link",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which CSS property is used to create fixed elements?",
    "question_hi": "फिक्स्ड एलिमेंट्स बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["position", "fixed", "sticky", "absolute"],
    "options_hi": ["position", "fixed", "sticky", "absolute"],
    "answer_en": "position",
    "answer_hi": "position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML tag is used to define metadata?",
    "question_hi": "मेटाडेटा को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["meta", "data", "info", "head"],
    "options_hi": ["meta", "data", "info", "head"],
    "answer_en": "meta",
    "answer_hi": "meta",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which CSS property is used to create relative positioning?",
    "question_hi": "रिलेटिव पोजीशनिंग बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["position", "relative", "absolute", "static"],
    "options_hi": ["position", "relative", "absolute", "static"],
    "answer_en": "position",
    "answer_hi": "position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML tag is used to define a script?",
    "question_hi": "स्क्रिप्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["script", "javascript", "code", "js"],
    "options_hi": ["script", "javascript", "code", "js"],
    "answer_en": "script",
    "answer_hi": "script",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which CSS property is used to create absolute positioning?",
    "question_hi": "एब्सोल्यूट पोजीशनिंग बनाने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["position", "absolute", "relative", "fixed"],
    "options_hi": ["position", "absolute", "relative", "fixed"],
    "answer_en": "position",
    "answer_hi": "position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
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
    "num": 35,
    "question_en": "Which CSS property is used to control z-index?",
    "question_hi": "z-index को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["z-index", "layer", "depth", "stack"],
    "options_hi": ["z-index", "layer", "depth", "stack"],
    "answer_en": "z-index",
    "answer_hi": "z-index",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML tag is used to define a style section?",
    "question_hi": "स्टाइल सेक्शन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["style", "css", "stylesheet", "design"],
    "options_hi": ["style", "css", "stylesheet", "design"],
    "answer_en": "style",
    "answer_hi": "style",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which CSS property is used to control overflow?",
    "question_hi": "ओवरफ्लो को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["overflow", "scroll", "hidden", "visible"],
    "options_hi": ["overflow", "scroll", "hidden", "visible"],
    "answer_en": "overflow",
    "answer_hi": "overflow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML tag is used to define a title?",
    "question_hi": "टाइटल को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["title", "h1", "heading", "name"],
    "options_hi": ["title", "h1", "heading", "name"],
    "answer_en": "title",
    "answer_hi": "title",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which CSS property is used to control visibility?",
    "question_hi": "विजिबिलिटी को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["visibility", "display", "opacity", "see"],
    "options_hi": ["visibility", "display", "opacity", "see"],
    "answer_en": "visibility",
    "answer_hi": "visibility",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML tag is used to define a basefont?",
    "question_hi": "बेसफॉन्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["basefont", "font", "text", "style"],
    "options_hi": ["basefont", "font", "text", "style"],
    "answer_en": "basefont",
    "answer_hi": "basefont",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which CSS property is used to control resize?",
    "question_hi": "रीसाइज को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["resize", "size", "scale", "transform"],
    "options_hi": ["resize", "size", "scale", "transform"],
    "answer_en": "resize",
    "answer_hi": "resize",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML tag is used to define a font?",
    "question_hi": "फॉन्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["font", "text", "style", "face"],
    "options_hi": ["font", "text", "style", "face"],
    "answer_en": "font",
    "answer_hi": "font",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which CSS property is used to control user select?",
    "question_hi": "यूजर सेलेक्ट को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["user-select", "select", "selection", "text-select"],
    "options_hi": ["user-select", "select", "selection", "text-select"],
    "answer_en": "user-select",
    "answer_hi": "user-select",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML tag is used to define a center?",
    "question_hi": "सेंटर को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["center", "div", "middle", "align"],
    "options_hi": ["center", "div", "middle", "align"],
    "answer_en": "center",
    "answer_hi": "center",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which CSS property is used to control pointer events?",
    "question_hi": "पॉइंटर इवेंट्स को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["pointer-events", "click", "event", "mouse"],
    "options_hi": ["pointer-events", "click", "event", "mouse"],
    "answer_en": "pointer-events",
    "answer_hi": "pointer-events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML tag is used to define a strike?",
    "question_hi": "स्ट्राइक को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["strike", "s", "del", "line-through"],
    "options_hi": ["strike", "s", "del", "line-through"],
    "answer_en": "strike",
    "answer_hi": "strike",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which CSS property is used to control filter effects?",
    "question_hi": "फिल्टर इफेक्ट्स को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["filter", "effect", "blur", "image-filter"],
    "options_hi": ["filter", "effect", "blur", "image-filter"],
    "answer_en": "filter",
    "answer_hi": "filter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML tag is used to define a teletype text?",
    "question_hi": "टेलीटाइप टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["tt", "teletype", "monospace", "code"],
    "options_hi": ["tt", "teletype", "monospace", "code"],
    "answer_en": "tt",
    "answer_hi": "tt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which CSS property is used to control backdrop filter?",
    "question_hi": "बैकड्रॉप फिल्टर को नियंत्रित करने के लिए कौन-सी CSS प्रॉपर्टी उपयोग होती है?",
    "options_en": ["backdrop-filter", "filter", "background-filter", "bg-filter"],
    "options_hi": ["backdrop-filter", "filter", "background-filter", "bg-filter"],
    "answer_en": "backdrop-filter",
    "answer_hi": "backdrop-filter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML tag is used to define a big text?",
    "question_hi": "बड़े टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["big", "large", "h1", "size"],
    "options_hi": ["big", "large", "h1", "size"],
    "answer_en": "big",
    "answer_hi": "big",
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