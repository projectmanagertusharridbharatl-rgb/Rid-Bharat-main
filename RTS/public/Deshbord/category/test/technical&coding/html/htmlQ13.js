const questions = [
  {
    "num": 1,
    "question_en": "Which HTML5 attribute is used to make an input field read-only?",
    "question_hi": "इनपुट फील्ड को रीड-ओनली बनाने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["readonly", "disabled", "static", "fixed"],
    "options_hi": ["readonly", "disabled", "static", "fixed"],
    "answer_en": "readonly",
    "answer_hi": "readonly",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML5 attribute is used to disable an input field?",
    "question_hi": "इनपुट फील्ड को डिसेबल करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["disabled", "readonly", "off", "inactive"],
    "options_hi": ["disabled", "readonly", "off", "inactive"],
    "answer_en": "disabled",
    "answer_hi": "disabled",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML5 attribute specifies the maximum number of characters allowed in an input field?",
    "question_hi": "इनपुट फील्ड में अनुमत अधिकतम कैरेक्टर्स की संख्या निर्दिष्ट करने वाला HTML5 एट्रिब्यूट कौन सा है?",
    "options_en": ["maxlength", "size", "length", "max"],
    "options_hi": ["maxlength", "size", "length", "max"],
    "answer_en": "maxlength",
    "answer_hi": "maxlength",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML5 attribute specifies the width of an input field?",
    "question_hi": "इनपुट फील्ड की चौड़ाई निर्दिष्ट करने वाला HTML5 एट्रिब्यूट कौन सा है?",
    "options_en": ["size", "width", "length", "maxlength"],
    "options_hi": ["size", "width", "length", "maxlength"],
    "answer_en": "size",
    "answer_hi": "size",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML5 element is used to define a container for multiple image resources?",
    "question_hi": "मल्टीपल इमेज रिसोर्सेज के लिए कंटेनर डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<picture>", "<img>", "<source>", "<image>"],
    "options_hi": ["<picture>", "<img>", "<source>", "<image>"],
    "answer_en": "<picture>",
    "answer_hi": "<picture>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML5 element is used to define a caption for a table?",
    "question_hi": "टेबल के लिए कैप्शन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<caption>", "<title>", "<table>", "<thead>"],
    "options_hi": ["<caption>", "<title>", "<table>", "<thead>"],
    "answer_en": "<caption>",
    "answer_hi": "<caption>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML5 element is used to define a table header?",
    "question_hi": "टेबल हेडर डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<thead>", "<th>", "<header>", "<tfoot>"],
    "options_hi": ["<thead>", "<th>", "<header>", "<tfoot>"],
    "answer_en": "<thead>",
    "answer_hi": "<thead>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML5 element is used to define a table body?",
    "question_hi": "टेबल बॉडी डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<tbody>", "<td>", "<body>", "<table>"],
    "options_hi": ["<tbody>", "<td>", "<body>", "<table>"],
    "answer_en": "<tbody>",
    "answer_hi": "<tbody>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML5 element is used to define a table footer?",
    "question_hi": "टेबल फूटर डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<tfoot>", "<footer>", "<td>", "<bottom>"],
    "options_hi": ["<tfoot>", "<footer>", "<td>", "<bottom>"],
    "answer_en": "<tfoot>",
    "answer_hi": "<tfoot>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML5 attribute is used to specify that a form should not be validated?",
    "question_hi": "फॉर्म को वैलिडेट नहीं किया जाना चाहिए यह निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["novalidate", "no-validate", "skip-validation", "formnovalidate"],
    "options_hi": ["novalidate", "no-validate", "skip-validation", "formnovalidate"],
    "answer_en": "novalidate",
    "answer_hi": "novalidate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML5 input type is used for hidden input fields?",
    "question_hi": "हिडन इनपुट फील्ड्स के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["hidden", "none", "invisible", "secret"],
    "options_hi": ["hidden", "none", "invisible", "secret"],
    "answer_en": "hidden",
    "answer_hi": "hidden",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML5 input type is used for file uploads?",
    "question_hi": "फाइल अपलोड्स के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["file", "upload", "document", "attachment"],
    "options_hi": ["file", "upload", "document", "attachment"],
    "answer_en": "file",
    "answer_hi": "file",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML5 input type is used for checkboxes?",
    "question_hi": "चेकबॉक्स के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["checkbox", "check", "radio", "option"],
    "options_hi": ["checkbox", "check", "radio", "option"],
    "answer_en": "checkbox",
    "answer_hi": "checkbox",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML5 input type is used for radio buttons?",
    "question_hi": "रेडियो बटन्स के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["radio", "button", "select", "option"],
    "options_hi": ["radio", "button", "select", "option"],
    "answer_en": "radio",
    "answer_hi": "radio",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML5 attribute is used to specify that a checkbox or radio button should be pre-selected?",
    "question_hi": "चेकबॉक्स या रेडियो बटन प्री-सेलेक्टेड होना चाहिए यह निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["checked", "selected", "default", "on"],
    "options_hi": ["checked", "selected", "default", "on"],
    "answer_en": "checked",
    "answer_hi": "checked",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML5 element is used to define a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<dl>", "<dt>", "<dd>", "<description>"],
    "options_hi": ["<dl>", "<dt>", "<dd>", "<description>"],
    "answer_en": "<dl>",
    "answer_hi": "<dl>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML5 element is used to define a term in a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में टर्म डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<dt>", "<dl>", "<dd>", "<term>"],
    "options_hi": ["<dt>", "<dl>", "<dd>", "<term>"],
    "answer_en": "<dt>",
    "answer_hi": "<dt>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML5 element is used to define a description in a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में डिस्क्रिप्शन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<dd>", "<dl>", "<dt>", "<description>"],
    "options_hi": ["<dd>", "<dl>", "<dt>", "<description>"],
    "answer_en": "<dd>",
    "answer_hi": "<dd>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML5 element is used to define a horizontal rule?",
    "question_hi": "हॉरिजॉन्टल रूल डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<hr>", "<line>", "<rule>", "<horizontal>"],
    "options_hi": ["<hr>", "<line>", "<rule>", "<horizontal>"],
    "answer_en": "<hr>",
    "answer_hi": "<hr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML5 element is used to define a line break?",
    "question_hi": "लाइन ब्रेक डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<br>", "<break>", "<lb>", "<newline>"],
    "options_hi": ["<br>", "<break>", "<lb>", "<newline>"],
    "answer_en": "<br>",
    "answer_hi": "<br>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML5 element is used to define a paragraph?",
    "question_hi": "पैराग्राफ डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<p>", "<para>", "<paragraph>", "<text>"],
    "options_hi": ["<p>", "<para>", "<paragraph>", "<text>"],
    "answer_en": "<p>",
    "answer_hi": "<p>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML5 element is used to define a heading?",
    "question_hi": "हेडिंग डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<h1> to <h6>", "<head>", "<header>", "<heading>"],
    "options_hi": ["<h1> to <h6>", "<head>", "<header>", "<heading>"],
    "answer_en": "<h1> to <h6>",
    "answer_hi": "<h1> to <h6>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML5 element is used to define the largest heading?",
    "question_hi": "सबसे बड़ी हेडिंग डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<h1>", "<h6>", "<heading>", "<big>"],
    "options_hi": ["<h1>", "<h6>", "<heading>", "<big>"],
    "answer_en": "<h1>",
    "answer_hi": "<h1>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML5 element is used to define the smallest heading?",
    "question_hi": "सबसे छोटी हेडिंग डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<h6>", "<h1>", "<small>", "<tiny>"],
    "options_hi": ["<h6>", "<h1>", "<small>", "<tiny>"],
    "answer_en": "<h6>",
    "answer_hi": "<h6>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML5 element is used to define bold text?",
    "question_hi": "बोल्ड टेक्स्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<b>", "<strong>", "<bold>", "<em>"],
    "options_hi": ["<b>", "<strong>", "<bold>", "<em>"],
    "answer_en": "<b>",
    "answer_hi": "<b>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML5 element is used to define important text?",
    "question_hi": "इम्पोर्टेन्ट टेक्स्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<strong>", "<b>", "<important>", "<em>"],
    "options_hi": ["<strong>", "<b>", "<important>", "<em>"],
    "answer_en": "<strong>",
    "answer_hi": "<strong>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML5 element is used to define italic text?",
    "question_hi": "इटैलिक टेक्स्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<i>", "<em>", "<italic>", "<cite>"],
    "options_hi": ["<i>", "<em>", "<italic>", "<cite>"],
    "answer_en": "<i>",
    "answer_hi": "<i>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML5 element is used to define emphasized text?",
    "question_hi": "एम्फेसाइज्ड टेक्स्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<em>", "<i>", "<emphasis>", "<strong>"],
    "options_hi": ["<em>", "<i>", "<emphasis>", "<strong>"],
    "answer_en": "<em>",
    "answer_hi": "<em>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML5 element is used to define marked/highlighted text?",
    "question_hi": "मार्क्ड/हाइलाइटेड टेक्स्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<mark>", "<highlight>", "<strong>", "<em>"],
    "options_hi": ["<mark>", "<highlight>", "<strong>", "<em>"],
    "answer_en": "<mark>",
    "answer_hi": "<mark>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML5 element is used to define small text?",
    "question_hi": "स्मॉल टेक्स्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<small>", "<tiny>", "<mini>", "<little>"],
    "options_hi": ["<small>", "<tiny>", "<mini>", "<little>"],
    "answer_en": "<small>",
    "answer_hi": "<small>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML5 element is used to define deleted text?",
    "question_hi": "डिलीटेड टेक्स्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<del>", "<delete>", "<remove>", "<strike>"],
    "options_hi": ["<del>", "<delete>", "<remove>", "<strike>"],
    "answer_en": "<del>",
    "answer_hi": "<del>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML5 element is used to define inserted text?",
    "question_hi": "इन्सर्टेड टेक्स्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<ins>", "<insert>", "<add>", "<new>"],
    "options_hi": ["<ins>", "<insert>", "<add>", "<new>"],
    "answer_en": "<ins>",
    "answer_hi": "<ins>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML5 element is used to define subscript text?",
    "question_hi": "सबस्क्रिप्ट टेक्स्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<sub>", "<subscript>", "<below>", "<low>"],
    "options_hi": ["<sub>", "<subscript>", "<below>", "<low>"],
    "answer_en": "<sub>",
    "answer_hi": "<sub>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML5 element is used to define superscript text?",
    "question_hi": "सुपरस्क्रिप्ट टेक्स्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<sup>", "<superscript>", "<above>", "<high>"],
    "options_hi": ["<sup>", "<superscript>", "<above>", "<high>"],
    "answer_en": "<sup>",
    "answer_hi": "<sup>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML5 element is used to define a quotation?",
    "question_hi": "क्वोटेशन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<q>", "<quote>", "<blockquote>", "<citation>"],
    "options_hi": ["<q>", "<quote>", "<blockquote>", "<citation>"],
    "answer_en": "<q>",
    "answer_hi": "<q>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML5 element is used to define a block quotation?",
    "question_hi": "ब्लॉक क्वोटेशन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<blockquote>", "<q>", "<quote>", "<citation>"],
    "options_hi": ["<blockquote>", "<q>", "<quote>", "<citation>"],
    "answer_en": "<blockquote>",
    "answer_hi": "<blockquote>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML5 element is used to define an abbreviation?",
    "question_hi": "अब्ब्रेविएशन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<abbr>", "<abbreviation>", "<short>", "<acronym>"],
    "options_hi": ["<abbr>", "<abbreviation>", "<short>", "<acronym>"],
    "answer_en": "<abbr>",
    "answer_hi": "<abbr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML5 element is used to define contact information?",
    "question_hi": "कॉन्टैक्ट इनफॉर्मेशन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<address>", "<contact>", "<info>", "<details>"],
    "options_hi": ["<address>", "<contact>", "<info>", "<details>"],
    "answer_en": "<address>",
    "answer_hi": "<address>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML5 element is used to define a citation?",
    "question_hi": "साइटेशन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<cite>", "<citation>", "<quote>", "<reference>"],
    "options_hi": ["<cite>", "<citation>", "<quote>", "<reference>"],
    "answer_en": "<cite>",
    "answer_hi": "<cite>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML5 element is used to define bi-directional override?",
    "question_hi": "बाय-डायरेक्शनल ओवरराइड डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<bdo>", "<bdi>", "<dir>", "<direction>"],
    "options_hi": ["<bdo>", "<bdi>", "<dir>", "<direction>"],
    "answer_en": "<bdo>",
    "answer_hi": "<bdo>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML5 element is used to define bi-directional isolation?",
    "question_hi": "बाय-डायरेक्शनल आइसोलेशन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<bdi>", "<bdo>", "<isolate>", "<direction>"],
    "options_hi": ["<bdi>", "<bdo>", "<isolate>", "<direction>"],
    "answer_en": "<bdi>",
    "answer_hi": "<bdi>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML5 element is used to define a ruby annotation?",
    "question_hi": "रूबी एनोटेशन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<ruby>", "<annotation>", "<rt>", "<rp>"],
    "options_hi": ["<ruby>", "<annotation>", "<rt>", "<rp>"],
    "answer_en": "<ruby>",
    "answer_hi": "<ruby>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML5 element is used to define ruby text?",
    "question_hi": "रूबी टेक्स्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<rt>", "<ruby>", "<rp>", "<text>"],
    "options_hi": ["<rt>", "<ruby>", "<rp>", "<text>"],
    "answer_en": "<rt>",
    "answer_hi": "<rt>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML5 element is used to define ruby parentheses?",
    "question_hi": "रूबी पैरेन्थेसिस डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<rp>", "<ruby>", "<rt>", "<parentheses>"],
    "options_hi": ["<rp>", "<ruby>", "<rt>", "<parentheses>"],
    "answer_en": "<rp>",
    "answer_hi": "<rp>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML5 element is used to define a code snippet?",
    "question_hi": "कोड स्निपेट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<code>", "<pre>", "<script>", "<programming>"],
    "options_hi": ["<code>", "<pre>", "<script>", "<programming>"],
    "answer_en": "<code>",
    "answer_hi": "<code>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML5 element is used to define keyboard input?",
    "question_hi": "कीबोर्ड इनपुट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<kbd>", "<keyboard>", "<input>", "<key>"],
    "options_hi": ["<kbd>", "<keyboard>", "<input>", "<key>"],
    "answer_en": "<kbd>",
    "answer_hi": "<kbd>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML5 element is used to define sample output?",
    "question_hi": "सैंपल आउटपुट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<samp>", "<sample>", "<output>", "<result>"],
    "options_hi": ["<samp>", "<sample>", "<output>", "<result>"],
    "answer_en": "<samp>",
    "answer_hi": "<samp>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML5 element is used to define a variable?",
    "question_hi": "वेरिएबल डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<var>", "<variable>", "<v>", "<value>"],
    "options_hi": ["<var>", "<variable>", "<v>", "<value>"],
    "answer_en": "<var>",
    "answer_hi": "<var>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML5 element is used to define preformatted text?",
    "question_hi": "प्रीफॉर्मेटेड टेक्स्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<pre>", "<code>", "<text>", "<format>"],
    "options_hi": ["<pre>", "<code>", "<text>", "<format>"],
    "answer_en": "<pre>",
    "answer_hi": "<pre>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML5 element is used to define a line break opportunity?",
    "question_hi": "लाइन ब्रेक ऑपरच्यूनिटी डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<wbr>", "<br>", "<break>", "<opportunity>"],
    "options_hi": ["<wbr>", "<br>", "<break>", "<opportunity>"],
    "answer_en": "<wbr>",
    "answer_hi": "<wbr>",
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
