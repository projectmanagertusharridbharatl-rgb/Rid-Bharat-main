const questions = [
  {
    "num": 1,
    "question_en": "Which HTML tag is used to create the largest heading?",
    "question_hi": "सबसे बड़ा हेडिंग बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h1", "h6", "heading", "head"],
    "options_hi": ["h1", "h6", "heading", "head"],
    "answer_en": "h1",
    "answer_hi": "h1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML tag is used to create the smallest heading?",
    "question_hi": "सबसे छोटा हेडिंग बनाने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["h6", "h1", "small", "tiny"],
    "options_hi": ["h6", "h1", "small", "tiny"],
    "answer_en": "h6",
    "answer_hi": "h6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML attribute is used to define inline styles?",
    "question_hi": "इनलाइन स्टाइल्स डिफाइन करने के लिए कौन सा HTML एट्रिब्यूट उपयोग होता है?",
    "options_en": ["style", "css", "design", "look"],
    "options_hi": ["style", "css", "design", "look"],
    "answer_en": "style",
    "answer_hi": "style",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML tag is used to define important text?",
    "question_hi": "इम्पोर्टेन्ट टेक्स्ट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["strong", "b", "important", "bold"],
    "options_hi": ["strong", "b", "important", "bold"],
    "answer_en": "strong",
    "answer_hi": "strong",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML tag is used to define emphasized text?",
    "question_hi": "एम्फेसाइज्ड टेक्स्ट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["em", "i", "emphasis", "italic"],
    "options_hi": ["em", "i", "emphasis", "italic"],
    "answer_en": "em",
    "answer_hi": "em",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML tag is used to define a section with navigation links?",
    "question_hi": "नेविगेशन लिंक्स वाले सेक्शन को डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["nav", "menu", "links", "navigation"],
    "options_hi": ["nav", "menu", "links", "navigation"],
    "answer_en": "nav",
    "answer_hi": "nav",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML tag is used to define a list item?",
    "question_hi": "लिस्ट आइटम डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["li", "item", "list", "ul"],
    "options_hi": ["li", "item", "list", "ul"],
    "answer_en": "li",
    "answer_hi": "li",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML tag is used to define a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["dl", "dd", "dt", "desc"],
    "options_hi": ["dl", "dd", "dt", "desc"],
    "answer_en": "dl",
    "answer_hi": "dl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML tag is used to define a term in a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में टर्म डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["dt", "dd", "dl", "term"],
    "options_hi": ["dt", "dd", "dl", "term"],
    "answer_en": "dt",
    "answer_hi": "dt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML tag is used to define a description in a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में डिस्क्रिप्शन डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["dd", "dt", "dl", "desc"],
    "options_hi": ["dd", "dt", "dl", "desc"],
    "answer_en": "dd",
    "answer_hi": "dd",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML tag is used to define a table row?",
    "question_hi": "टेबल रो डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["tr", "td", "th", "table"],
    "options_hi": ["tr", "td", "th", "table"],
    "answer_en": "tr",
    "answer_hi": "tr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML tag is used to define a table header cell?",
    "question_hi": "टेबल हेडर सेल डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["th", "td", "tr", "header"],
    "options_hi": ["th", "td", "tr", "header"],
    "answer_en": "th",
    "answer_hi": "th",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML tag is used to define a table data cell?",
    "question_hi": "टेबल डेटा सेल डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["td", "th", "tr", "data"],
    "options_hi": ["td", "th", "tr", "data"],
    "answer_en": "td",
    "answer_hi": "td",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML tag is used to define a table caption?",
    "question_hi": "टेबल कैप्शन डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["caption", "title", "head", "label"],
    "options_hi": ["caption", "title", "head", "label"],
    "answer_en": "caption",
    "answer_hi": "caption",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML attribute is used to specify the number of columns a table cell should span?",
    "question_hi": "टेबल सेल कितने कॉलम्स तक फैलेगी यह निर्दिष्ट करने के लिए कौन सा HTML एट्रिब्यूट उपयोग होता है?",
    "options_en": ["colspan", "rowspan", "span", "columns"],
    "options_hi": ["colspan", "rowspan", "span", "columns"],
    "answer_en": "colspan",
    "answer_hi": "colspan",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML attribute is used to specify the number of rows a table cell should span?",
    "question_hi": "टेबल सेल कितनी रोज़ तक फैलेगी यह निर्दिष्ट करने के लिए कौन सा HTML एट्रिब्यूट उपयोग होता है?",
    "options_en": ["rowspan", "colspan", "span", "rows"],
    "options_hi": ["rowspan", "colspan", "span", "rows"],
    "answer_en": "rowspan",
    "answer_hi": "rowspan",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML tag is used to define a form?",
    "question_hi": "फॉर्म डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["form", "input", "fieldset", "div"],
    "options_hi": ["form", "input", "fieldset", "div"],
    "answer_en": "form",
    "answer_hi": "form",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML attribute specifies where to send the form-data when a form is submitted?",
    "question_hi": "फॉर्म सबमिट होने पर फॉर्म-डेटा कहाँ भेजना है यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["action", "method", "target", "url"],
    "options_hi": ["action", "method", "target", "url"],
    "answer_en": "action",
    "answer_hi": "action",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML attribute specifies how to send the form-data?",
    "question_hi": "फॉर्म-डेटा कैसे भेजना है यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["method", "action", "type", "send"],
    "options_hi": ["method", "action", "type", "send"],
    "answer_en": "method",
    "answer_hi": "method",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method is used to send form-data as URL variables?",
    "question_hi": "फॉर्म-डेटा को URL वेरिएबल्स के रूप में भेजने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["GET", "POST", "PUT", "SEND"],
    "options_hi": ["GET", "POST", "PUT", "SEND"],
    "answer_en": "GET",
    "answer_hi": "GET",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method is used to send form-data as HTTP post transaction?",
    "question_hi": "फॉर्म-डेटा को HTTP पोस्ट ट्रांजैक्शन के रूप में भेजने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["POST", "GET", "PUT", "SEND"],
    "options_hi": ["POST", "GET", "PUT", "SEND"],
    "answer_en": "POST",
    "answer_hi": "POST",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML tag is used to define a label for an input element?",
    "question_hi": "इनपुट एलिमेंट के लिए लेबल डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["label", "span", "div", "text"],
    "options_hi": ["label", "span", "div", "text"],
    "answer_en": "label",
    "answer_hi": "label",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML attribute is used to associate a label with an input element?",
    "question_hi": "लेबल को इनपुट एलिमेंट के साथ एसोसिएट करने के लिए कौन सा HTML एट्रिब्यूट उपयोग होता है?",
    "options_en": ["for", "id", "name", "label"],
    "options_hi": ["for", "id", "name", "label"],
    "answer_en": "for",
    "answer_hi": "for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML tag is used to define a group of related options in a drop-down list?",
    "question_hi": "ड्रॉप-डाउन लिस्ट में संबंधित ऑप्शन्स के ग्रुप को डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["optgroup", "option", "select", "group"],
    "options_hi": ["optgroup", "option", "select", "group"],
    "answer_en": "optgroup",
    "answer_hi": "optgroup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML attribute is used to specify that an input field is read-only?",
    "question_hi": "इनपुट फील्ड रीड-ओनली है यह निर्दिष्ट करने के लिए कौन सा HTML एट्रिब्यूट उपयोग होता है?",
    "options_en": ["readonly", "disabled", "static", "fixed"],
    "options_hi": ["readonly", "disabled", "static", "fixed"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML attribute is used to specify that an input field is disabled?",
    "question_hi": "इनपुट फील्ड डिसेबल है यह निर्दिष्ट करने के लिए कौन सा HTML एट्रिब्यूट उपयोग होता है?",
    "options_en": ["disabled", "readonly", "off", "inactive"],
    "options_hi": ["disabled", "readonly", "off", "inactive"],
    "answer_en": "disabled",
    "answer_hi": "disabled",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML attribute specifies the maximum number of characters allowed in an input field?",
    "question_hi": "इनपुट फील्ड में अधिकतम कितने कैरेक्टर्स की अनुमति है यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["maxlength", "size", "length", "max"],
    "options_hi": ["maxlength", "size", "length", "max"],
    "answer_en": "maxlength",
    "answer_hi": "maxlength",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML attribute specifies the width of an input field?",
    "question_hi": "इनपुट फील्ड की चौड़ाई निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["size", "width", "length", "maxlength"],
    "options_hi": ["size", "width", "length", "maxlength"],
    "answer_en": "size",
    "answer_hi": "size",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML tag is used to define a clickable area inside an image map?",
    "question_hi": "इमेज मैप के अंदर क्लिक करने योग्य एरिया डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["area", "map", "img", "click"],
    "options_hi": ["area", "map", "img", "click"],
    "answer_en": "area",
    "answer_hi": "area",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML tag is used to define an image map?",
    "question_hi": "इमेज मैप डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["map", "area", "img", "imagemap"],
    "options_hi": ["map", "area", "img", "imagemap"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML attribute is used to specify an alternate text for an image?",
    "question_hi": "इमेज के लिए ऑल्टरनेट टेक्स्ट निर्दिष्ट करने के लिए कौन सा HTML एट्रिब्यूट उपयोग होता है?",
    "options_en": ["alt", "title", "src", "text"],
    "options_hi": ["alt", "title", "src", "text"],
    "answer_en": "alt",
    "answer_hi": "alt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML attribute specifies the URL of the image?",
    "question_hi": "इमेज का URL निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["src", "href", "url", "link"],
    "options_hi": ["src", "href", "url", "link"],
    "answer_en": "src",
    "answer_hi": "src",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML tag is used to define a paragraph?",
    "question_hi": "पैराग्राफ डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["p", "para", "text", "div"],
    "options_hi": ["p", "para", "text", "div"],
    "answer_en": "p",
    "answer_hi": "p",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML tag is used to define a line break?",
    "question_hi": "लाइन ब्रेक डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["br", "break", "lb", "newline"],
    "options_hi": ["br", "break", "lb", "newline"],
    "answer_en": "br",
    "answer_hi": "br",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML tag is used to define a horizontal rule?",
    "question_hi": "हॉरिजॉन्टल रूल डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["hr", "line", "rule", "horizontal"],
    "options_hi": ["hr", "line", "rule", "horizontal"],
    "answer_en": "hr",
    "answer_hi": "hr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML tag is used to define a comment?",
    "question_hi": "कमेंट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<!-- -->", "//", "/* */", "#"],
    "options_hi": ["<!-- -->", "//", "/* */", "#"],
    "answer_en": "<!-- -->",
    "answer_hi": "<!-- -->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML tag is used to define preformatted text?",
    "question_hi": "प्रीफॉर्मेटेड टेक्स्ट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["pre", "code", "text", "format"],
    "options_hi": ["pre", "code", "text", "format"],
    "answer_en": "pre",
    "answer_hi": "pre",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML tag is used to define a hyperlink?",
    "question_hi": "हाइपरलिंक डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["a", "link", "href", "hyper"],
    "options_hi": ["a", "link", "href", "hyper"],
    "answer_en": "a",
    "answer_hi": "a",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML attribute specifies the URL of the page the link goes to?",
    "question_hi": "लिंक किस पेज पर जाएगा इसका URL निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["href", "src", "url", "link"],
    "options_hi": ["href", "src", "url", "link"],
    "answer_en": "href",
    "answer_hi": "href",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML attribute specifies where to open the linked document?",
    "question_hi": "लिंक्ड डॉक्यूमेंट कहाँ खुलेगा यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["target", "window", "open", "href"],
    "options_hi": ["target", "window", "open", "href"],
    "answer_en": "target",
    "answer_hi": "target",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which target attribute value opens the linked document in a new window or tab?",
    "question_hi": "कौन सा टारगेट एट्रिब्यूट वैल्यू लिंक्ड डॉक्यूमेंट को नई विंडो या टैब में खोलता है?",
    "options_en": ["_blank", "_self", "_parent", "_top"],
    "options_hi": ["_blank", "_self", "_parent", "_top"],
    "answer_en": "_blank",
    "answer_hi": "_blank",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML tag is used to define an unordered list?",
    "question_hi": "अनऑर्डर्ड लिस्ट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["ul", "ol", "li", "list"],
    "options_hi": ["ul", "ol", "li", "list"],
    "answer_en": "ul",
    "answer_hi": "ul",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML tag is used to define an ordered list?",
    "question_hi": "ऑर्डर्ड लिस्ट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["ol", "ul", "li", "list"],
    "options_hi": ["ol", "ul", "li", "list"],
    "answer_en": "ol",
    "answer_hi": "ol",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML attribute specifies that an input field must be filled out?",
    "question_hi": "इनपुट फील्ड को भरना आवश्यक है यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["required", "must", "necessary", "validate"],
    "options_hi": ["required", "must", "necessary", "validate"],
    "answer_en": "required",
    "answer_hi": "required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML attribute specifies a short hint that describes the expected value of an input field?",
    "question_hi": "इनपुट फील्ड की एक्सपेक्टेड वैल्यू को डिस्क्राइब करने वाला शॉर्ट हिंट निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["placeholder", "hint", "tooltip", "title"],
    "options_hi": ["placeholder", "hint", "tooltip", "title"],
    "answer_en": "placeholder",
    "answer_hi": "placeholder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML tag is used to define the document's body?",
    "question_hi": "डॉक्यूमेंट का बॉडी डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["body", "html", "head", "main"],
    "options_hi": ["body", "html", "head", "main"],
    "answer_en": "body",
    "answer_hi": "body",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML tag is used to define the document's head?",
    "question_hi": "डॉक्यूमेंट का हेड डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["head", "html", "body", "header"],
    "options_hi": ["head", "html", "body", "header"],
    "answer_en": "head",
    "answer_hi": "head",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML tag is used to define the root of an HTML document?",
    "question_hi": "HTML डॉक्यूमेंट का रूट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["html", "head", "body", "root"],
    "options_hi": ["html", "head", "body", "root"],
    "answer_en": "html",
    "answer_hi": "html",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML tag is used to define the title of the document?",
    "question_hi": "डॉक्यूमेंट का टाइटल डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["title", "head", "h1", "header"],
    "options_hi": ["title", "head", "h1", "header"],
    "answer_en": "title",
    "answer_hi": "title",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML tag is used to define a division or a section?",
    "question_hi": "डिवीजन या सेक्शन डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["div", "span", "section", "article"],
    "options_hi": ["div", "span", "section", "article"],
    "answer_en": "div",
    "answer_hi": "div",
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
