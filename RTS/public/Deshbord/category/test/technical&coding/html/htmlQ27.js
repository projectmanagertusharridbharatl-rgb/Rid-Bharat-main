const questions = [
  {
    "num": 1,
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
    "num": 2,
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
    "num": 3,
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
    "num": 4,
    "question_en": "Which HTML tag is used to define a table header cell?",
    "question_hi": "टेबल हेडर सेल को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["th", "thead", "header", "table-header"],
    "options_hi": ["th", "thead", "header", "table-header"],
    "answer_en": "th",
    "answer_hi": "th",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
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
    "num": 6,
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
    "num": 7,
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
    "num": 8,
    "question_en": "Which HTML tag is used to define a table caption?",
    "question_hi": "टेबल कैप्शन को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["caption", "title", "table-caption", "cap"],
    "options_hi": ["caption", "title", "table-caption", "cap"],
    "answer_en": "caption",
    "answer_hi": "caption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
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
    "num": 10,
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
    "num": 11,
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
    "num": 12,
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
    "num": 13,
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
    "num": 14,
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
    "num": 15,
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
    "num": 16,
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
    "num": 17,
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
    "num": 18,
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
    "num": 19,
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
    "num": 20,
    "question_en": "Which HTML tag is used to define a heading level 1?",
    "question_hi": "हेडिंग लेवल 1 को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h1", "heading1", "head1", "header1"],
    "options_hi": ["h1", "heading1", "head1", "header1"],
    "answer_en": "h1",
    "answer_hi": "h1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML tag is used to define a heading level 2?",
    "question_hi": "हेडिंग लेवल 2 को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h2", "heading2", "head2", "header2"],
    "options_hi": ["h2", "heading2", "head2", "header2"],
    "answer_en": "h2",
    "answer_hi": "h2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML tag is used to define a heading level 3?",
    "question_hi": "हेडिंग लेवल 3 को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h3", "heading3", "head3", "header3"],
    "options_hi": ["h3", "heading3", "head3", "header3"],
    "answer_en": "h3",
    "answer_hi": "h3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML tag is used to define a heading level 4?",
    "question_hi": "हेडिंग लेवल 4 को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h4", "heading4", "head4", "header4"],
    "options_hi": ["h4", "heading4", "head4", "header4"],
    "answer_en": "h4",
    "answer_hi": "h4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML tag is used to define a heading level 5?",
    "question_hi": "हेडिंग लेवल 5 को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h5", "heading5", "head5", "header5"],
    "options_hi": ["h5", "heading5", "head5", "header5"],
    "answer_en": "h5",
    "answer_hi": "h5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML tag is used to define a heading level 6?",
    "question_hi": "हेडिंग लेवल 6 को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h6", "heading6", "head6", "header6"],
    "options_hi": ["h6", "heading6", "head6", "header6"],
    "answer_en": "h6",
    "answer_hi": "h6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
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
    "num": 27,
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
    "num": 28,
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
    "num": 29,
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
    "num": 30,
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
    "num": 31,
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
    "num": 32,
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
    "num": 33,
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
    "num": 34,
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
    "num": 35,
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
    "num": 36,
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
    "num": 37,
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
    "num": 38,
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
    "num": 39,
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
    "num": 40,
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
    "num": 41,
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
    "num": 42,
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
    "num": 43,
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
    "num": 44,
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
    "num": 45,
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
    "num": 46,
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
    "num": 47,
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
    "num": 48,
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
    "num": 49,
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
    "num": 50,
    "question_en": "Which HTML tag is used to define ruby text?",
    "question_hi": "रूबी टेक्स्ट को परिभाषित करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["rt", "rubytext", "annotation", "ruby"],
    "options_hi": ["rt", "rubytext", "annotation", "ruby"],
    "answer_en": "rt",
    "answer_hi": "rt",
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