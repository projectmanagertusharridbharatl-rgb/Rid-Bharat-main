const questions = [
  {
    "num": 1,
    "question_en": "Which HTML attribute is used to specify that an input field should be pre-filled with a value?",
    "question_hi": "इनपुट फील्ड प्री-फिल्ड वैल्यू के साथ होनी चाहिए यह निर्दिष्ट करने के लिए कौन सा HTML एट्रिब्यूट उपयोग होता है?",
    "options_en": ["value", "placeholder", "default", "prefill"],
    "options_hi": ["value", "placeholder", "default", "prefill"],
    "answer_en": "value",
    "answer_hi": "value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML attribute specifies that a form should not be validated when submitted?",
    "question_hi": "फॉर्म सबमिट होने पर वैलिडेट नहीं होना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["novalidate", "no-validate", "skip-validation", "formnovalidate"],
    "options_hi": ["novalidate", "no-validate", "skip-validation", "formnovalidate"],
    "answer_en": "novalidate",
    "answer_hi": "novalidate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML attribute specifies that an input field should have multiple values?",
    "question_hi": "इनपुट फील्ड में मल्टीपल वैल्यूज होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["multiple", "many", "several", "multi"],
    "options_hi": ["multiple", "many", "several", "multi"],
    "answer_en": "multiple",
    "answer_hi": "multiple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML attribute specifies the pattern that an input field's value is checked against?",
    "question_hi": "इनपुट फील्ड की वैल्यू किस पैटर्न के खिलाफ चेक की जाएगी यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["pattern", "regex", "format", "validate"],
    "options_hi": ["pattern", "regex", "format", "validate"],
    "answer_en": "pattern",
    "answer_hi": "pattern",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML attribute specifies the type of content in a meta tag?",
    "question_hi": "मेटा टैग में कंटेंट का टाइप निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["name", "content", "http-equiv", "charset"],
    "options_hi": ["name", "content", "http-equiv", "charset"],
    "answer_en": "name",
    "answer_hi": "name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML attribute specifies the content of a meta tag?",
    "question_hi": "मेटा टैग के कंटेंट को निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["content", "value", "data", "meta-content"],
    "options_hi": ["content", "value", "data", "meta-content"],
    "answer_en": "content",
    "answer_hi": "content",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML attribute specifies that a link is a stylesheet?",
    "question_hi": "लिंक एक स्टाइलशीट है यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["rel", "type", "href", "stylesheet"],
    "options_hi": ["rel", "type", "href", "stylesheet"],
    "answer_en": "rel",
    "answer_hi": "rel",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML attribute specifies the size of an input field?",
    "question_hi": "इनपुट फील्ड का साइज निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["size", "width", "length", "maxlength"],
    "options_hi": ["size", "width", "length", "maxlength"],
    "answer_en": "size",
    "answer_hi": "size",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML attribute specifies that an image should be loaded when the page loads?",
    "question_hi": "पेज लोड होने पर इमेज लोड होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["loading", "eager", "lazy", "load"],
    "options_hi": ["loading", "eager", "lazy", "load"],
    "answer_en": "loading",
    "answer_hi": "loading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML attribute specifies that an image should be loaded only when it's visible in the viewport?",
    "question_hi": "इमेज तभी लोड होनी चाहिए जब वह व्यूपोर्ट में विजिबल हो यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["loading", "lazy", "eager", "visible"],
    "options_hi": ["loading", "lazy", "eager", "visible"],
    "answer_en": "loading",
    "answer_hi": "loading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML attribute specifies the relationship between the current document and the linked document in a link tag?",
    "question_hi": "लिंक टैग में करंट डॉक्यूमेंट और लिंक्ड डॉक्यूमेंट के बीच रिलेशनशिप निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["rel", "relationship", "type", "href"],
    "options_hi": ["rel", "relationship", "type", "href"],
    "answer_en": "rel",
    "answer_hi": "rel",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML attribute specifies the URL of the page that the link goes to in an anchor tag?",
    "question_hi": "एंकर टैग में लिंक किस पेज पर जाएगा इसका URL निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["href", "src", "url", "link"],
    "options_hi": ["href", "src", "url", "link"],
    "answer_en": "href",
    "answer_hi": "href",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML attribute specifies that a link should open in a new tab?",
    "question_hi": "लिंक न्यू टैब में खुलनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["target", "_blank", "new", "window"],
    "options_hi": ["target", "_blank", "new", "window"],
    "answer_en": "target",
    "answer_hi": "target",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML attribute specifies that a link should open in the same tab?",
    "question_hi": "लिंक सेम टैब में खुलनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["target", "_self", "same", "current"],
    "options_hi": ["target", "_self", "same", "current"],
    "answer_en": "target",
    "answer_hi": "target",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML attribute specifies that a link should open in the parent frame?",
    "question_hi": "लिंक पेरेंट फ्रेम में खुलनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["target", "_parent", "parent", "up"],
    "options_hi": ["target", "_parent", "parent", "up"],
    "answer_en": "target",
    "answer_hi": "target",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML attribute specifies that a link should open in the full body of the window?",
    "question_hi": "लिंक विंडो के फुल बॉडी में खुलनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["target", "_top", "top", "full"],
    "options_hi": ["target", "_top", "top", "full"],
    "answer_en": "target",
    "answer_hi": "target",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML attribute specifies the language of the linked document?",
    "question_hi": "लिंक्ड डॉक्यूमेंट की भाषा निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["hreflang", "lang", "language", "xml:lang"],
    "options_hi": ["hreflang", "lang", "language", "xml:lang"],
    "answer_en": "hreflang",
    "answer_hi": "hreflang",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML attribute specifies the media type of the linked document in a link tag?",
    "question_hi": "लिंक टैग में लिंक्ड डॉक्यूमेंट का मीडिया टाइप निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["media", "type", "content-type", "mime"],
    "options_hi": ["media", "type", "content-type", "mime"],
    "answer_en": "media",
    "answer_hi": "media",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML attribute specifies the character encoding for the document in a meta tag?",
    "question_hi": "मेटा टैग में डॉक्यूमेंट के लिए कैरेक्टर एन्कोडिंग निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["charset", "encoding", "char", "charset-encoding"],
    "options_hi": ["charset", "encoding", "char", "charset-encoding"],
    "answer_en": "charset",
    "answer_hi": "charset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML attribute specifies the viewport settings for responsive design?",
    "question_hi": "रिस्पॉन्सिव डिजाइन के लिए व्यूपोर्ट सेटिंग्स निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["content", "name", "viewport", "meta"],
    "options_hi": ["content", "name", "viewport", "meta"],
    "answer_en": "name",
    "answer_hi": "name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML attribute specifies that a form element should be submitted with the form?",
    "question_hi": "फॉर्म एलिमेंट को फॉर्म के साथ सबमिट किया जाना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["name", "id", "form", "submit"],
    "options_hi": ["name", "id", "form", "submit"],
    "answer_en": "name",
    "answer_hi": "name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML attribute specifies that an input field should be part of a form?",
    "question_hi": "इनपुट फील्ड फॉर्म का पार्ट होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["form", "name", "id", "form-id"],
    "options_hi": ["form", "name", "id", "form-id"],
    "answer_en": "form",
    "answer_hi": "form",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML attribute specifies that a button should submit the form?",
    "question_hi": "बटन फॉर्म सबमिट करेगा यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "submit", "form", "action"],
    "options_hi": ["type", "submit", "form", "action"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML attribute specifies that a button should reset the form?",
    "question_hi": "बटन फॉर्म रीसेट करेगा यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "reset", "form", "action"],
    "options_hi": ["type", "reset", "form", "action"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML attribute specifies that a button should be a clickable button?",
    "question_hi": "बटन क्लिकेबल बटन होना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "button", "click", "action"],
    "options_hi": ["type", "button", "click", "action"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML attribute specifies that an input field should be a password field?",
    "question_hi": "इनपुट फील्ड पासवर्ड फील्ड होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "password", "input", "secret"],
    "options_hi": ["type", "password", "input", "secret"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML attribute specifies that an input field should be a checkbox?",
    "question_hi": "इनपुट फील्ड चेकबॉक्स होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "checkbox", "input", "check"],
    "options_hi": ["type", "checkbox", "input", "check"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML attribute specifies that an input field should be a radio button?",
    "question_hi": "इनपुट फील्ड रेडियो बटन होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "radio", "input", "option"],
    "options_hi": ["type", "radio", "input", "option"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML attribute specifies that an input field should be a file upload field?",
    "question_hi": "इनपुट फील्ड फाइल अपलोड फील्ड होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "file", "input", "upload"],
    "options_hi": ["type", "file", "input", "upload"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML attribute specifies that an input field should be a hidden field?",
    "question_hi": "इनपुट फील्ड हिडन फील्ड होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "hidden", "input", "secret"],
    "options_hi": ["type", "hidden", "input", "secret"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML attribute specifies that an input field should be an email field?",
    "question_hi": "इनपुट फील्ड ईमेल फील्ड होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "email", "input", "mail"],
    "options_hi": ["type", "email", "input", "mail"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML attribute specifies that an input field should be a URL field?",
    "question_hi": "इनपुट फील्ड URL फील्ड होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "url", "input", "link"],
    "options_hi": ["type", "url", "input", "link"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML attribute specifies that an input field should be a number field?",
    "question_hi": "इनपुट फील्ड नंबर फील्ड होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "number", "input", "numeric"],
    "options_hi": ["type", "number", "input", "numeric"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML attribute specifies that an input field should be a range slider?",
    "question_hi": "इनपुट फील्ड रेंज स्लाइडर होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "range", "input", "slider"],
    "options_hi": ["type", "range", "input", "slider"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML attribute specifies that an input field should be a date picker?",
    "question_hi": "इनपुट फील्ड डेट पिकर होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "date", "input", "calendar"],
    "options_hi": ["type", "date", "input", "calendar"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML attribute specifies that an input field should be a color picker?",
    "question_hi": "इनपुट फील्ड कलर पिकर होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "color", "input", "picker"],
    "options_hi": ["type", "color", "input", "picker"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML attribute specifies that an input field should be a search field?",
    "question_hi": "इनपुट फील्ड सर्च फील्ड होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "search", "input", "find"],
    "options_hi": ["type", "search", "input", "find"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML attribute specifies that an input field should be a telephone number field?",
    "question_hi": "इनपुट फील्ड टेलीफोन नंबर फील्ड होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "tel", "input", "phone"],
    "options_hi": ["type", "tel", "input", "phone"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML attribute specifies that an input field should be a time picker?",
    "question_hi": "इनपुट फील्ड टाइम पिकर होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "time", "input", "clock"],
    "options_hi": ["type", "time", "input", "clock"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML attribute specifies that an input field should be a month picker?",
    "question_hi": "इनपुट फील्ड मंथ पिकर होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "month", "input", "calendar"],
    "options_hi": ["type", "month", "input", "calendar"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML attribute specifies that an input field should be a week picker?",
    "question_hi": "इनपुट फील्ड वीक पिकर होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "week", "input", "calendar"],
    "options_hi": ["type", "week", "input", "calendar"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML attribute specifies that an input field should be a datetime-local picker?",
    "question_hi": "इनपुट फील्ड डेटटाइम-लोकल पिकर होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["type", "datetime-local", "input", "calendar"],
    "options_hi": ["type", "datetime-local", "input", "calendar"],
    "answer_en": "type",
    "answer_hi": "type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML attribute specifies that a textarea should have a default value?",
    "question_hi": "टेक्स्टएरिया में डिफॉल्ट वैल्यू होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["value", "placeholder", "default", "text"],
    "options_hi": ["value", "placeholder", "default", "text"],
    "answer_en": "placeholder",
    "answer_hi": "placeholder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML attribute specifies that a select element should have multiple options selectable?",
    "question_hi": "सेलेक्ट एलिमेंट में मल्टीपल ऑप्शन सेलेक्टेबल होने चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["multiple", "many", "several", "multi"],
    "options_hi": ["multiple", "many", "several", "multi"],
    "answer_en": "multiple",
    "answer_hi": "multiple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML attribute specifies that an option in a select element should be disabled?",
    "question_hi": "सेलेक्ट एलिमेंट में ऑप्शन डिसेबल होना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["disabled", "readonly", "off", "inactive"],
    "options_hi": ["disabled", "readonly", "off", "inactive"],
    "answer_en": "disabled",
    "answer_hi": "disabled",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML attribute specifies that an option in a select element should be the default selected option?",
    "question_hi": "सेलेक्ट एलिमेंट में ऑप्शन डिफॉल्ट सेलेक्टेड ऑप्शन होना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["selected", "checked", "default", "on"],
    "options_hi": ["selected", "checked", "default", "on"],
    "answer_en": "selected",
    "answer_hi": "selected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML attribute specifies that an input field should have a list of pre-defined options?",
    "question_hi": "इनपुट फील्ड में प्री-डिफाइंड ऑप्शन्स की लिस्ट होनी चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["list", "options", "datalist", "predefined"],
    "options_hi": ["list", "options", "datalist", "predefined"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML attribute specifies that a form should be validated using HTML5 validation?",
    "question_hi": "फॉर्म HTML5 वैलिडेशन का उपयोग करके वैलिडेट होना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["novalidate", "validate", "html5validate", "formvalidate"],
    "options_hi": ["novalidate", "validate", "html5validate", "formvalidate"],
    "answer_en": "novalidate",
    "answer_hi": "novalidate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML attribute specifies that an input field should have a spell check enabled?",
    "question_hi": "इनपुट फील्ड में स्पेल चेक एनेबल होना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["spellcheck", "check", "spell", "validate"],
    "options_hi": ["spellcheck", "check", "spell", "validate"],
    "answer_en": "spellcheck",
    "answer_hi": "spellcheck",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML attribute specifies that an input field should have auto-capitalization enabled?",
    "question_hi": "इनपुट फील्ड में ऑटो-कैपिटलाइजेशन एनेबल होना चाहिए यह निर्दिष्ट करने वाला HTML एट्रिब्यूट कौन सा है?",
    "options_en": ["autocapitalize", "capitalize", "auto", "text-transform"],
    "options_hi": ["autocapitalize", "capitalize", "auto", "text-transform"],
    "answer_en": "autocapitalize",
    "answer_hi": "autocapitalize",
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