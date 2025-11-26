const questions = [
  {
    "num": 1,
    "question_en": "Which HTML attribute is used to specify that an input field must be filled out?",
    "question_hi": "इनपुट फील्ड को भरना आवश्यक है यह निर्दिष्ट करने के लिए कौन सा HTML एट्रिब्यूट उपयोग होता है?",
    "options_en": ["required", "must", "necessary", "validate"],
    "options_hi": ["required", "must", "necessary", "validate"],
    "answer_en": "required",
    "answer_hi": "required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
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
    "num": 3,
    "question_en": "Which HTML attribute specifies that an input field should be automatically focused when the page loads?",
    "question_hi": "पेज लोड होने पर इनपुट फील्ड ऑटोमेटिकली फोकस हो जाए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["autofocus", "focus", "auto", "selected"],
    "options_hi": ["autofocus", "focus", "auto", "selected"],
    "answer_en": "autofocus",
    "answer_hi": "autofocus",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML attribute specifies that an input field should have autocomplete enabled?",
    "question_hi": "इनपुट फील्ड में ऑटोकम्पलीट एनेबल होना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["autocomplete", "autofill", "complete", "suggest"],
    "options_hi": ["autocomplete", "autofill", "complete", "suggest"],
    "answer_en": "autocomplete",
    "answer_hi": "autocomplete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
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
    "num": 6,
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
    "num": 7,
    "question_en": "Which HTML attribute specifies the minimum value for an input field?",
    "question_hi": "इनपुट फील्ड के लिए मिनिमम वैल्यू निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["min", "minimum", "bottom", "least"],
    "options_hi": ["min", "minimum", "bottom", "least"],
    "answer_en": "min",
    "answer_hi": "min",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML attribute specifies the maximum value for an input field?",
    "question_hi": "इनपुट फील्ड के लिए मैक्सिमम वैल्यू निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["max", "maximum", "top", "limit"],
    "options_hi": ["max", "maximum", "top", "limit"],
    "answer_en": "max",
    "answer_hi": "max",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML attribute specifies the legal number of intervals for an input field?",
    "question_hi": "इनपुट फील्ड के लिए लीगल इंटरवल्स की संख्या निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["step", "interval", "increment", "value"],
    "options_hi": ["step", "interval", "increment", "value"],
    "answer_en": "step",
    "answer_hi": "step",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML attribute specifies that an input field is read-only?",
    "question_hi": "इनपुट फील्ड रीड-ओनली है यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["readonly", "disabled", "static", "fixed"],
    "options_hi": ["readonly", "disabled", "static", "fixed"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML attribute specifies that an input field is disabled?",
    "question_hi": "इनपुट फील्ड डिसेबल है यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["disabled", "readonly", "off", "inactive"],
    "options_hi": ["disabled", "readonly", "off", "inactive"],
    "answer_en": "disabled",
    "answer_hi": "disabled",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
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
    "num": 13,
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
    "num": 14,
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
    "num": 15,
    "question_en": "Which HTML attribute specifies an alternate text for an image?",
    "question_hi": "इमेज के लिए ऑल्टरनेट टेक्स्ट निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["alt", "title", "src", "text"],
    "options_hi": ["alt", "title", "src", "text"],
    "answer_en": "alt",
    "answer_hi": "alt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
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
    "num": 17,
    "question_en": "Which HTML attribute specifies the width of an image?",
    "question_hi": "इमेज की चौड़ाई निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["width", "size", "w", "horizontal"],
    "options_hi": ["width", "size", "w", "horizontal"],
    "answer_en": "width",
    "answer_hi": "width",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML attribute specifies the height of an image?",
    "question_hi": "इमेज की ऊंचाई निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["height", "size", "h", "vertical"],
    "options_hi": ["height", "size", "h", "vertical"],
    "answer_en": "height",
    "answer_hi": "height",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
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
    "num": 20,
    "question_en": "Which HTML attribute specifies a unique id for an element?",
    "question_hi": "एलिमेंट के लिए यूनिक आईडी निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["id", "name", "class", "unique"],
    "options_hi": ["id", "name", "class", "unique"],
    "answer_en": "id",
    "answer_hi": "id",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML attribute specifies one or more class names for an element?",
    "question_hi": "एलिमेंट के लिए एक या अधिक क्लास नेम्स निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["class", "id", "name", "type"],
    "options_hi": ["class", "id", "name", "type"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML attribute specifies the title of an element?",
    "question_hi": "एलिमेंट का टाइटल निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["title", "name", "heading", "label"],
    "options_hi": ["title", "name", "heading", "label"],
    "answer_en": "title",
    "answer_hi": "title",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML attribute specifies the language of the document?",
    "question_hi": "डॉक्यूमेंट की भाषा निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["lang", "language", "xml:lang", "locale"],
    "options_hi": ["lang", "language", "xml:lang", "locale"],
    "answer_en": "lang",
    "answer_hi": "lang",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML attribute specifies the direction of the text?",
    "question_hi": "टेक्स्ट की दिशा निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["dir", "direction", "text-direction", "align"],
    "options_hi": ["dir", "direction", "text-direction", "align"],
    "answer_en": "dir",
    "answer_hi": "dir",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML attribute specifies the character encoding for the document?",
    "question_hi": "डॉक्यूमेंट के लिए कैरेक्टर एन्कोडिंग निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["charset", "encoding", "char", "charset-encoding"],
    "options_hi": ["charset", "encoding", "char", "charset-encoding"],
    "answer_en": "charset",
    "answer_hi": "charset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML attribute specifies the name of the form?",
    "question_hi": "फॉर्म का नाम निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["name", "id", "form", "form-name"],
    "options_hi": ["name", "id", "form", "form-name"],
    "answer_en": "name",
    "answer_hi": "name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
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
    "num": 28,
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
    "num": 29,
    "question_en": "Which HTML attribute specifies the visible width of a text area?",
    "question_hi": "टेक्स्ट एरिया की विजिबल चौड़ाई निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["cols", "rows", "width", "size"],
    "options_hi": ["cols", "rows", "width", "size"],
    "answer_en": "cols",
    "answer_hi": "cols",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML attribute specifies the visible number of lines in a text area?",
    "question_hi": "टेक्स्ट एरिया में विजिबल लाइन्स की संख्या निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["rows", "cols", "lines", "height"],
    "options_hi": ["rows", "cols", "lines", "height"],
    "answer_en": "rows",
    "answer_hi": "rows",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML attribute specifies that the audio/video should start playing automatically?",
    "question_hi": "ऑडियो/वीडियो ऑटोमेटिकली प्ले होना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["autoplay", "auto", "play", "start"],
    "options_hi": ["autoplay", "auto", "play", "start"],
    "answer_en": "autoplay",
    "answer_hi": "autoplay",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML attribute specifies that audio/video controls should be displayed?",
    "question_hi": "ऑडियो/वीडियो कंट्रोल्स डिस्प्ले होने चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["controls", "display", "show", "player"],
    "options_hi": ["controls", "display", "show", "player"],
    "answer_en": "controls",
    "answer_hi": "controls",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML attribute specifies that the audio/video should be muted?",
    "question_hi": "ऑडियो/वीडियो म्यूट होना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["muted", "silent", "no-sound", "quiet"],
    "options_hi": ["muted", "silent", "no-sound", "quiet"],
    "answer_en": "muted",
    "answer_hi": "muted",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML attribute specifies that the audio/video should play in a loop?",
    "question_hi": "ऑडियो/वीडियो लूप में प्ले होना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["loop", "repeat", "cycle", "again"],
    "options_hi": ["loop", "repeat", "cycle", "again"],
    "answer_en": "loop",
    "answer_hi": "loop",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML attribute specifies the number of columns a table cell should span?",
    "question_hi": "टेबल सेल कितने कॉलम्स तक फैलेगी यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["colspan", "rowspan", "span", "columns"],
    "options_hi": ["colspan", "rowspan", "span", "columns"],
    "answer_en": "colspan",
    "answer_hi": "colspan",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML attribute specifies the number of rows a table cell should span?",
    "question_hi": "टेबल सेल कितनी रोज़ तक फैलेगी यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["rowspan", "colspan", "span", "rows"],
    "options_hi": ["rowspan", "colspan", "span", "rows"],
    "answer_en": "rowspan",
    "answer_hi": "rowspan",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML attribute specifies the alignment of the content in a table cell?",
    "question_hi": "टेबल सेल में कंटेंट का अलाइनमेंट निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["align", "valign", "text-align", "position"],
    "options_hi": ["align", "valign", "text-align", "position"],
    "answer_en": "align",
    "answer_hi": "align",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML attribute specifies the vertical alignment of the content in a table cell?",
    "question_hi": "टेबल सेल में कंटेंट का वर्टिकल अलाइनमेंट निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["valign", "align", "vertical-align", "vposition"],
    "options_hi": ["valign", "align", "vertical-align", "vposition"],
    "answer_en": "valign",
    "answer_hi": "valign",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML attribute specifies the source URL of a script?",
    "question_hi": "स्क्रिप्ट का सोर्स URL निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["src", "href", "url", "source"],
    "options_hi": ["src", "href", "url", "source"],
    "answer_en": "src",
    "answer_hi": "src",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML attribute specifies that the script should be executed asynchronously?",
    "question_hi": "स्क्रिप्ट को एसिंक्रोनसली एक्जीक्यूट करना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["async", "defer", "asyncronous", "parallel"],
    "options_hi": ["async", "defer", "asyncronous", "parallel"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML attribute specifies that the script should be executed when the page has finished parsing?",
    "question_hi": "पेज पार्सिंग खत्म होने पर स्क्रिप्ट को एक्जीक्यूट करना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["defer", "async", "parse", "after"],
    "options_hi": ["defer", "async", "parse", "after"],
    "answer_en": "defer",
    "answer_hi": "defer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML attribute specifies the source URL of a CSS file?",
    "question_hi": "CSS फाइल का सोर्स URL निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["href", "src", "url", "source"],
    "options_hi": ["href", "src", "url", "source"],
    "answer_en": "href",
    "answer_hi": "href",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML attribute specifies the relationship between the current document and the linked document?",
    "question_hi": "करंट डॉक्यूमेंट और लिंक्ड डॉक्यूमेंट के बीच रिलेशनशिप निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["rel", "relationship", "type", "link"],
    "options_hi": ["rel", "relationship", "type", "link"],
    "answer_en": "rel",
    "answer_hi": "rel",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML attribute specifies the media type of the linked document?",
    "question_hi": "लिंक्ड डॉक्यूमेंट का मीडिया टाइप निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "media", "content-type", "mime"],
    "options_hi": ["type", "media", "content-type", "mime"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML attribute specifies the character encoding for the external script file?",
    "question_hi": "एक्सटर्नल स्क्रिप्ट फाइल के लिए कैरेक्टर एन्कोडिंग निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["charset", "encoding", "char", "charset-encoding"],
    "options_hi": ["charset", "encoding", "char", "charset-encoding"],
    "answer_en": "charset",
    "answer_hi": "charset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML attribute specifies the value of an input element?",
    "question_hi": "इनपुट एलिमेंट की वैल्यू निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["value", "data", "content", "input"],
    "options_hi": ["value", "data", "content", "input"],
    "answer_en": "value",
    "answer_hi": "value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML attribute specifies the name of an input element?",
    "question_hi": "इनपुट एलिमेंट का नाम निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["name", "id", "input", "element"],
    "options_hi": ["name", "id", "input", "element"],
    "answer_en": "name",
    "answer_hi": "name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML attribute specifies the type of an input element?",
    "question_hi": "इनपुट एलिमेंट का टाइप निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "input-type", "kind", "category"],
    "options_hi": ["type", "input-type", "kind", "category"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML attribute specifies that a checkbox or radio button is selected by default?",
    "question_hi": "चेकबॉक्स या रेडियो बटन डिफॉल्ट रूप से सेलेक्टेड है यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["checked", "selected", "default", "on"],
    "options_hi": ["checked", "selected", "default", "on"],
    "answer_en": "checked",
    "answer_hi": "checked",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML attribute specifies that an option in a select element is selected by default?",
    "question_hi": "सेलेक्ट एलिमेंट में ऑप्शन डिफॉल्ट रूप से सेलेक्टेड है यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["selected", "checked", "default", "on"],
    "options_hi": ["selected", "checked", "default", "on"],
    "answer_en": "selected",
    "answer_hi": "selected",
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