const questions = [
  {
    "num": 1,
    "question_en": "Which HTML5 element is used to define a document's header?",
    "question_hi": "डॉक्यूमेंट के हेडर को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<header>", "<head>", "<top>", "<heading>"],
    "options_hi": ["<header>", "<head>", "<top>", "<heading>"],
    "answer_en": "<header>",
    "answer_hi": "<header>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML5 element is used to define a document's footer?",
    "question_hi": "डॉक्यूमेंट के फूटर को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<footer>", "<bottom>", "<end>", "<foot>"],
    "options_hi": ["<footer>", "<bottom>", "<end>", "<foot>"],
    "answer_en": "<footer>",
    "answer_hi": "<footer>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML5 element is used to define navigation links?",
    "question_hi": "नेविगेशन लिंक्स को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<nav>", "<navigation>", "<menu>", "<links>"],
    "options_hi": ["<nav>", "<navigation>", "<menu>", "<links>"],
    "answer_en": "<nav>",
    "answer_hi": "<nav>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML5 element is used to define content aside from the main content?",
    "question_hi": "मेन कंटेंट के अलावा कंटेंट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<aside>", "<sidebar>", "<extra>", "<additional>"],
    "options_hi": ["<aside>", "<sidebar>", "<extra>", "<additional>"],
    "answer_en": "<aside>",
    "answer_hi": "<aside>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML5 element is used to define a section in a document?",
    "question_hi": "डॉक्यूमेंट में सेक्शन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<section>", "<div>", "<article>", "<part>"],
    "options_hi": ["<section>", "<div>", "<article>", "<part>"],
    "answer_en": "<section>",
    "answer_hi": "<section>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML5 element is used to define an independent article?",
    "question_hi": "स्वतंत्र आर्टिकल को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<article>", "<section>", "<post>", "<content>"],
    "options_hi": ["<article>", "<section>", "<post>", "<content>"],
    "answer_en": "<article>",
    "answer_hi": "<article>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML5 element is used to define the main content of a document?",
    "question_hi": "डॉक्यूमेंट के मेन कंटेंट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<main>", "<content>", "<body>", "<section>"],
    "options_hi": ["<main>", "<content>", "<body>", "<section>"],
    "answer_en": "<main>",
    "answer_hi": "<main>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML5 element is used to define a figure with optional caption?",
    "question_hi": "ऑप्शनल कैप्शन के साथ फिगर को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<figure>", "<img>", "<picture>", "<illustration>"],
    "options_hi": ["<figure>", "<img>", "<picture>", "<illustration>"],
    "answer_en": "<figure>",
    "answer_hi": "<figure>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML5 element is used to define a caption for a figure?",
    "question_hi": "फिगर के लिए कैप्शन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<figcaption>", "<caption>", "<figure>", "<imgcaption>"],
    "options_hi": ["<figcaption>", "<caption>", "<figure>", "<imgcaption>"],
    "answer_en": "<figcaption>",
    "answer_hi": "<figcaption>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML5 element is used to define a dialog box?",
    "question_hi": "डायलॉग बॉक्स को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<dialog>", "<modal>", "<popup>", "<window>"],
    "options_hi": ["<dialog>", "<modal>", "<popup>", "<window>"],
    "answer_en": "<dialog>",
    "answer_hi": "<dialog>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML5 element is used to define details that can be toggled?",
    "question_hi": "टॉगल किए जा सकने वाले डिटेल्स को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<details>", "<summary>", "<accordion>", "<expand>"],
    "options_hi": ["<details>", "<summary>", "<accordion>", "<expand>"],
    "answer_en": "<details>",
    "answer_hi": "<details>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML5 element is used to define a summary for details?",
    "question_hi": "डिटेल्स के लिए सारांश को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<summary>", "<details>", "<caption>", "<title>"],
    "options_hi": ["<summary>", "<details>", "<caption>", "<title>"],
    "answer_en": "<summary>",
    "answer_hi": "<summary>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML5 element is used to define a progress bar?",
    "question_hi": "प्रोग्रेस बार को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<progress>", "<meter>", "<bar>", "<loading>"],
    "options_hi": ["<progress>", "<meter>", "<bar>", "<loading>"],
    "answer_en": "<progress>",
    "answer_hi": "<progress>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML5 element is used to define a scalar measurement?",
    "question_hi": "स्केलर माप को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<meter>", "<progress>", "<range>", "<measure>"],
    "options_hi": ["<meter>", "<progress>", "<range>", "<measure>"],
    "answer_en": "<meter>",
    "answer_hi": "<meter>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML5 element is used to define a time or date?",
    "question_hi": "टाइम या डेट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<time>", "<datetime>", "<date>", "<calendar>"],
    "options_hi": ["<time>", "<datetime>", "<date>", "<calendar>"],
    "answer_en": "<time>",
    "answer_hi": "<time>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML5 element is used to define marked/highlighted text?",
    "question_hi": "मार्क्ड/हाइलाइटेड टेक्स्ट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<mark>", "<highlight>", "<strong>", "<em>"],
    "options_hi": ["<mark>", "<highlight>", "<strong>", "<em>"],
    "answer_en": "<mark>",
    "answer_hi": "<mark>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML5 element is used to define a word break opportunity?",
    "question_hi": "वर्ड ब्रेक ऑपरच्यूनिटी को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<wbr>", "<br>", "<break>", "<wordbreak>"],
    "options_hi": ["<wbr>", "<br>", "<break>", "<wordbreak>"],
    "answer_en": "<wbr>",
    "answer_hi": "<wbr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML5 element is used to define a template?",
    "question_hi": "टेम्पलेट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<template>", "<script>", "<pattern>", "<model>"],
    "options_hi": ["<template>", "<script>", "<pattern>", "<model>"],
    "answer_en": "<template>",
    "answer_hi": "<template>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML5 element is used to define a slot?",
    "question_hi": "स्लॉट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<slot>", "<placeholder>", "<gap>", "<space>"],
    "options_hi": ["<slot>", "<placeholder>", "<gap>", "<space>"],
    "answer_en": "<slot>",
    "answer_hi": "<slot>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML5 element is used to define a canvas for graphics?",
    "question_hi": "ग्राफिक्स के लिए कैनवास को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<canvas>", "<svg>", "<graphics>", "<draw>"],
    "options_hi": ["<canvas>", "<svg>", "<graphics>", "<draw>"],
    "answer_en": "<canvas>",
    "answer_hi": "<canvas>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML5 element is used to define scalable vector graphics?",
    "question_hi": "स्केलेबल वेक्टर ग्राफिक्स को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<svg>", "<canvas>", "<vector>", "<graphic>"],
    "options_hi": ["<svg>", "<canvas>", "<vector>", "<graphic>"],
    "answer_en": "<svg>",
    "answer_hi": "<svg>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML5 element is used to define audio content?",
    "question_hi": "ऑडियो कंटेंट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<audio>", "<sound>", "<music>", "<player>"],
    "options_hi": ["<audio>", "<sound>", "<music>", "<player>"],
    "answer_en": "<audio>",
    "answer_hi": "<audio>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML5 element is used to define video content?",
    "question_hi": "वीडियो कंटेंट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<video>", "<movie>", "<film>", "<player>"],
    "options_hi": ["<video>", "<movie>", "<film>", "<player>"],
    "answer_en": "<video>",
    "answer_hi": "<video>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML5 element is used to define a track for media?",
    "question_hi": "मीडिया के लिए ट्रैक को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<track>", "<source>", "<media>", "<subtitle>"],
    "options_hi": ["<track>", "<source>", "<media>", "<subtitle>"],
    "answer_en": "<track>",
    "answer_hi": "<track>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML5 element is used to define a source for media?",
    "question_hi": "मीडिया के लिए सोर्स को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<source>", "<src>", "<media>", "<file>"],
    "options_hi": ["<source>", "<src>", "<media>", "<file>"],
    "answer_en": "<source>",
    "answer_hi": "<source>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML5 element is used to define a data list?",
    "question_hi": "डेटा लिस्ट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<datalist>", "<list>", "<options>", "<select>"],
    "options_hi": ["<datalist>", "<list>", "<options>", "<select>"],
    "answer_en": "<datalist>",
    "answer_hi": "<datalist>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML5 element is used to define an output element?",
    "question_hi": "आउटपुट एलिमेंट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<output>", "<result>", "<display>", "<span>"],
    "options_hi": ["<output>", "<result>", "<display>", "<span>"],
    "answer_en": "<output>",
    "answer_hi": "<output>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML5 element is used to define a ruby annotation?",
    "question_hi": "रूबी एनोटेशन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<ruby>", "<annotation>", "<rt>", "<rp>"],
    "options_hi": ["<ruby>", "<annotation>", "<rt>", "<rp>"],
    "answer_en": "<ruby>",
    "answer_hi": "<ruby>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML5 element is used to define ruby text?",
    "question_hi": "रूबी टेक्स्ट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<rt>", "<ruby>", "<rp>", "<text>"],
    "options_hi": ["<rt>", "<ruby>", "<rp>", "<text>"],
    "answer_en": "<rt>",
    "answer_hi": "<rt>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML5 element is used to define ruby parentheses?",
    "question_hi": "रूबी पैरेन्थेसिस को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<rp>", "<ruby>", "<rt>", "<parentheses>"],
    "options_hi": ["<rp>", "<ruby>", "<rt>", "<parentheses>"],
    "answer_en": "<rp>",
    "answer_hi": "<rp>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML5 element is used to define bi-directional isolation?",
    "question_hi": "बाय-डायरेक्शनल आइसोलेशन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<bdi>", "<bdo>", "<dir>", "<span>"],
    "options_hi": ["<bdi>", "<bdo>", "<dir>", "<span>"],
    "answer_en": "<bdi>",
    "answer_hi": "<bdi>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML5 element is used to define bi-directional override?",
    "question_hi": "बाय-डायरेक्शनल ओवरराइड को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<bdo>", "<bdi>", "<dir>", "<override>"],
    "options_hi": ["<bdo>", "<bdi>", "<dir>", "<override>"],
    "answer_en": "<bdo>",
    "answer_hi": "<bdo>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML5 attribute is used to make content editable?",
    "question_hi": "कंटेंट को एडिटेबल बनाने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["contenteditable", "editable", "edit", "modifiable"],
    "options_hi": ["contenteditable", "editable", "edit", "modifiable"],
    "answer_en": "contenteditable",
    "answer_hi": "contenteditable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML5 attribute is used to specify the language of the content?",
    "question_hi": "कंटेंट की भाषा निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["lang", "language", "xml:lang", "locale"],
    "options_hi": ["lang", "language", "xml:lang", "locale"],
    "answer_en": "lang",
    "answer_hi": "lang",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML5 attribute is used to specify the text direction?",
    "question_hi": "टेक्स्ट डायरेक्शन निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["dir", "direction", "text-direction", "align"],
    "options_hi": ["dir", "direction", "text-direction", "align"],
    "answer_en": "dir",
    "answer_hi": "dir",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML5 attribute is used to specify a context menu?",
    "question_hi": "कॉन्टेक्स्ट मेन्यू निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["contextmenu", "menu", "context", "popup"],
    "options_hi": ["contextmenu", "menu", "context", "popup"],
    "answer_en": "contextmenu",
    "answer_hi": "contextmenu",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML5 attribute is used to specify that an element is draggable?",
    "question_hi": "एलिमेंट ड्रैगेबल है यह निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["draggable", "drag", "moveable", "dragdrop"],
    "options_hi": ["draggable", "drag", "moveable", "dragdrop"],
    "answer_en": "draggable",
    "answer_hi": "draggable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML5 attribute is used to specify that an element is not draggable?",
    "question_hi": "एलिमेंट ड्रैगेबल नहीं है यह निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["draggable='false'", "nodrag", "static", "fixed"],
    "options_hi": ["draggable='false'", "nodrag", "static", "fixed"],
    "answer_en": "draggable='false'",
    "answer_hi": "draggable='false'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML5 attribute is used to specify hidden elements?",
    "question_hi": "हिडन एलिमेंट्स निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["hidden", "invisible", "display='none'", "visible='false'"],
    "options_hi": ["hidden", "invisible", "display='none'", "visible='false'"],
    "answer_en": "hidden",
    "answer_hi": "hidden",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML5 attribute is used to specify a unique identifier?",
    "question_hi": "यूनिक आइडेंटिफायर निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["id", "name", "class", "unique"],
    "options_hi": ["id", "name", "class", "unique"],
    "answer_en": "id",
    "answer_hi": "id",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML5 attribute is used to specify one or more class names?",
    "question_hi": "एक या अधिक क्लास नेम्स निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["class", "id", "name", "type"],
    "options_hi": ["class", "id", "name", "type"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML5 attribute is used to specify the title of an element?",
    "question_hi": "एलिमेंट का टाइटल निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["title", "name", "heading", "label"],
    "options_hi": ["title", "name", "heading", "label"],
    "answer_en": "title",
    "answer_hi": "title",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML5 attribute is used to specify the tab order?",
    "question_hi": "टैब ऑर्डर निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["tabindex", "taborder", "tab", "focusorder"],
    "options_hi": ["tabindex", "taborder", "tab", "focusorder"],
    "answer_en": "tabindex",
    "answer_hi": "tabindex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML5 attribute is used to specify spell checking?",
    "question_hi": "स्पेल चेकिंग निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["spellcheck", "check", "spell", "validate"],
    "options_hi": ["spellcheck", "check", "spell", "validate"],
    "answer_en": "spellcheck",
    "answer_hi": "spellcheck",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML5 input type is used for color selection?",
    "question_hi": "कलर सेलेक्शन के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["color", "picker", "colorpicker", "select"],
    "options_hi": ["color", "picker", "colorpicker", "select"],
    "answer_en": "color",
    "answer_hi": "color",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML5 input type is used for range selection?",
    "question_hi": "रेंज सेलेक्शन के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["range", "slider", "number", "scale"],
    "options_hi": ["range", "slider", "number", "scale"],
    "answer_en": "range",
    "answer_hi": "range",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML5 input type is used for email addresses?",
    "question_hi": "ईमेल एड्रेस के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["email", "text", "mail", "address"],
    "options_hi": ["email", "text", "mail", "address"],
    "answer_en": "email",
    "answer_hi": "email",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML5 input type is used for URLs?",
    "question_hi": "URLs के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["url", "link", "website", "http"],
    "options_hi": ["url", "link", "website", "http"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML5 input type is used for telephone numbers?",
    "question_hi": "टेलीफोन नंबर्स के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["tel", "phone", "telephone", "number"],
    "options_hi": ["tel", "phone", "telephone", "number"],
    "answer_en": "tel",
    "answer_hi": "tel",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML5 input type is used for search fields?",
    "question_hi": "सर्च फील्ड्स के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["search", "find", "text", "query"],
    "options_hi": ["search", "find", "text", "query"],
    "answer_en": "search",
    "answer_hi": "search",
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