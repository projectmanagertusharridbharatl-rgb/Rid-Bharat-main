const questions = [
  {
    "num": 1,
    "question_en": "Which HTML5 element is used for playing audio files?",
    "question_hi": "ऑडियो फाइल्स प्ले करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<audio>", "<sound>", "<music>", "<mp3>"],
    "options_hi": ["<audio>", "<sound>", "<music>", "<mp3>"],
    "answer_en": "<audio>",
    "answer_hi": "<audio>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML5 element is used for playing video files?",
    "question_hi": "वीडियो फाइल्स प्ले करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<video>", "<movie>", "<film>", "<media>"],
    "options_hi": ["<video>", "<movie>", "<film>", "<media>"],
    "answer_en": "<video>",
    "answer_hi": "<video>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML5 attribute is used to specify that a video should play automatically?",
    "question_hi": "वीडियो ऑटोमेटिकली प्ले होना चाहिए यह निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["autoplay", "auto", "play", "start"],
    "options_hi": ["autoplay", "auto", "play", "start"],
    "answer_en": "autoplay",
    "answer_hi": "autoplay",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML5 attribute is used to show video controls?",
    "question_hi": "वीडियो कंट्रोल्स दिखाने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["controls", "show-controls", "display", "player"],
    "options_hi": ["controls", "show-controls", "display", "player"],
    "answer_en": "controls",
    "answer_hi": "controls",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML5 input type is used for selecting a date?",
    "question_hi": "डेट सेलेक्ट करने के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["date", "calendar", "day", "datetime"],
    "options_hi": ["date", "calendar", "day", "datetime"],
    "answer_en": "date",
    "answer_hi": "date",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML5 input type is used for selecting a time?",
    "question_hi": "टाइम सेलेक्ट करने के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["time", "clock", "hour", "datetime"],
    "options_hi": ["time", "clock", "hour", "datetime"],
    "answer_en": "time",
    "answer_hi": "time",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML5 input type is used for selecting a week?",
    "question_hi": "वीक सेलेक्ट करने के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["week", "date", "calendar", "month"],
    "options_hi": ["week", "date", "calendar", "month"],
    "answer_en": "week",
    "answer_hi": "week",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML5 input type is used for selecting a month?",
    "question_hi": "मंथ सेलेक्ट करने के लिए कौन सा HTML5 इनपुट टाइप उपयोग किया जाता है?",
    "options_en": ["month", "date", "calendar", "year"],
    "options_hi": ["month", "date", "calendar", "year"],
    "answer_en": "month",
    "answer_hi": "month",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML5 element is used to group related options in a drop-down list?",
    "question_hi": "ड्रॉप-डाउन लिस्ट में संबंधित ऑप्शन्स को ग्रुप करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<optgroup>", "<option>", "<select>", "<group>"],
    "options_hi": ["<optgroup>", "<option>", "<select>", "<group>"],
    "answer_en": "<optgroup>",
    "answer_hi": "<optgroup>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML5 attribute is used to specify a pattern for an input field?",
    "question_hi": "इनपुट फील्ड के लिए पैटर्न निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["pattern", "regex", "format", "validate"],
    "options_hi": ["pattern", "regex", "format", "validate"],
    "answer_en": "pattern",
    "answer_hi": "pattern",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML5 attribute is used to specify the maximum value for an input field?",
    "question_hi": "इनपुट फील्ड के लिए मैक्सिमम वैल्यू निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["max", "maximum", "top", "limit"],
    "options_hi": ["max", "maximum", "top", "limit"],
    "answer_en": "max",
    "answer_hi": "max",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML5 attribute is used to specify the minimum value for an input field?",
    "question_hi": "इनपुट फील्ड के लिए मिनिमम वैल्यू निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["min", "minimum", "bottom", "least"],
    "options_hi": ["min", "minimum", "bottom", "least"],
    "answer_en": "min",
    "answer_hi": "min",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML5 attribute is used to specify the step for an input field?",
    "question_hi": "इनपुट फील्ड के लिए स्टेप निर्दिष्ट करने के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["step", "interval", "increment", "value"],
    "options_hi": ["step", "interval", "increment", "value"],
    "answer_en": "step",
    "answer_hi": "step",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML5 element is used to define a header for a document or section?",
    "question_hi": "डॉक्यूमेंट या सेक्शन के लिए हेडर डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<header>", "<head>", "<top>", "<heading>"],
    "options_hi": ["<header>", "<head>", "<top>", "<heading>"],
    "answer_en": "<header>",
    "answer_hi": "<header>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML5 element is used to define a footer for a document or section?",
    "question_hi": "डॉक्यूमेंट या सेक्शन के लिए फूटर डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<footer>", "<bottom>", "<end>", "<foot>"],
    "options_hi": ["<footer>", "<bottom>", "<end>", "<foot>"],
    "answer_en": "<footer>",
    "answer_hi": "<footer>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML5 element is used to define a section in a document?",
    "question_hi": "डॉक्यूमेंट में सेक्शन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<section>", "<div>", "<article>", "<part>"],
    "options_hi": ["<section>", "<div>", "<article>", "<part>"],
    "answer_en": "<section>",
    "answer_hi": "<section>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML5 element is used to define an article?",
    "question_hi": "आर्टिकल डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<article>", "<section>", "<post>", "<content>"],
    "options_hi": ["<article>", "<section>", "<post>", "<content>"],
    "answer_en": "<article>",
    "answer_hi": "<article>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML5 element is used to define content aside from the content it is placed in?",
    "question_hi": "जिस कंटेंट में इसे प्लेस किया गया है उसके अलावा कंटेंट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<aside>", "<sidebar>", "<extra>", "<additional>"],
    "options_hi": ["<aside>", "<sidebar>", "<extra>", "<additional>"],
    "answer_en": "<aside>",
    "answer_hi": "<aside>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML5 element is used to define navigation links?",
    "question_hi": "नेविगेशन लिंक्स डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<nav>", "<navigation>", "<menu>", "<links>"],
    "options_hi": ["<nav>", "<navigation>", "<menu>", "<links>"],
    "answer_en": "<nav>",
    "answer_hi": "<nav>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
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
    "num": 21,
    "question_en": "Which HTML5 element is used to define a figure?",
    "question_hi": "फिगर डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<figure>", "<img>", "<picture>", "<illustration>"],
    "options_hi": ["<figure>", "<img>", "<picture>", "<illustration>"],
    "answer_en": "<figure>",
    "answer_hi": "<figure>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML5 element is used to define a caption for a figure?",
    "question_hi": "फिगर के लिए कैप्शन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<figcaption>", "<caption>", "<figure>", "<imgcaption>"],
    "options_hi": ["<figcaption>", "<caption>", "<figure>", "<imgcaption>"],
    "answer_en": "<figcaption>",
    "answer_hi": "<figcaption>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML5 element is used to define a dialog box or window?",
    "question_hi": "डायलॉग बॉक्स या विंडो डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<dialog>", "<modal>", "<popup>", "<window>"],
    "options_hi": ["<dialog>", "<modal>", "<popup>", "<window>"],
    "answer_en": "<dialog>",
    "answer_hi": "<dialog>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML5 element is used to define a summary for a details element?",
    "question_hi": "डिटेल्स एलिमेंट के लिए सारांश डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<summary>", "<details>", "<caption>", "<title>"],
    "options_hi": ["<summary>", "<details>", "<caption>", "<title>"],
    "answer_en": "<summary>",
    "answer_hi": "<summary>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML5 element is used to define a progress bar?",
    "question_hi": "प्रोग्रेस बार डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<progress>", "<meter>", "<bar>", "<loading>"],
    "options_hi": ["<progress>", "<meter>", "<bar>", "<loading>"],
    "answer_en": "<progress>",
    "answer_hi": "<progress>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML5 element is used to define a scalar measurement?",
    "question_hi": "स्केलर माप डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<meter>", "<progress>", "<range>", "<measure>"],
    "options_hi": ["<meter>", "<progress>", "<range>", "<measure>"],
    "answer_en": "<meter>",
    "answer_hi": "<meter>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML5 element is used to define a time or date?",
    "question_hi": "टाइम या डेट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<time>", "<datetime>", "<date>", "<calendar>"],
    "options_hi": ["<time>", "<datetime>", "<date>", "<calendar>"],
    "answer_en": "<time>",
    "answer_hi": "<time>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
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
    "num": 29,
    "question_en": "Which HTML5 element is used to define a word break opportunity?",
    "question_hi": "वर्ड ब्रेक ऑपरच्यूनिटी डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<wbr>", "<br>", "<break>", "<wordbreak>"],
    "options_hi": ["<wbr>", "<br>", "<break>", "<wordbreak>"],
    "answer_en": "<wbr>",
    "answer_hi": "<wbr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML5 element is used to define a line break?",
    "question_hi": "लाइन ब्रेक डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<br>", "<wbr>", "<break>", "<lb>"],
    "options_hi": ["<br>", "<wbr>", "<break>", "<lb>"],
    "answer_en": "<br>",
    "answer_hi": "<br>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML5 element is used to define a span of text?",
    "question_hi": "टेक्स्ट के स्पैन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<span>", "<div>", "<text>", "<section>"],
    "options_hi": ["<span>", "<div>", "<text>", "<section>"],
    "answer_en": "<span>",
    "answer_hi": "<span>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML5 element is used to define a division or section?",
    "question_hi": "डिवीजन या सेक्शन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<div>", "<span>", "<section>", "<article>"],
    "options_hi": ["<div>", "<span>", "<section>", "<article>"],
    "answer_en": "<div>",
    "answer_hi": "<div>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML5 element is used to define a paragraph?",
    "question_hi": "पैराग्राफ डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<p>", "<para>", "<text>", "<div>"],
    "options_hi": ["<p>", "<para>", "<text>", "<div>"],
    "answer_en": "<p>",
    "answer_hi": "<p>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML5 element is used to define a hyperlink?",
    "question_hi": "हाइपरलिंक डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<a>", "<link>", "<href>", "<hyper>"],
    "options_hi": ["<a>", "<link>", "<href>", "<hyper>"],
    "answer_en": "<a>",
    "answer_hi": "<a>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML5 element is used to define an image?",
    "question_hi": "इमेज डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<img>", "<image>", "<picture>", "<src>"],
    "options_hi": ["<img>", "<image>", "<picture>", "<src>"],
    "answer_en": "<img>",
    "answer_hi": "<img>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML5 element is used to define a list item?",
    "question_hi": "लिस्ट आइटम डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<li>", "<item>", "<list>", "<element>"],
    "options_hi": ["<li>", "<item>", "<list>", "<element>"],
    "answer_en": "<li>",
    "answer_hi": "<li>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML5 element is used to define an unordered list?",
    "question_hi": "अनऑर्डर्ड लिस्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<ul>", "<ol>", "<list>", "<unordered>"],
    "options_hi": ["<ul>", "<ol>", "<list>", "<unordered>"],
    "answer_en": "<ul>",
    "answer_hi": "<ul>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML5 element is used to define an ordered list?",
    "question_hi": "ऑर्डर्ड लिस्ट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<ol>", "<ul>", "<list>", "<ordered>"],
    "options_hi": ["<ol>", "<ul>", "<list>", "<ordered>"],
    "answer_en": "<ol>",
    "answer_hi": "<ol>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML5 element is used to define a table?",
    "question_hi": "टेबल डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<table>", "<tr>", "<td>", "<grid>"],
    "options_hi": ["<table>", "<tr>", "<td>", "<grid>"],
    "answer_en": "<table>",
    "answer_hi": "<table>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML5 element is used to define a table row?",
    "question_hi": "टेबल रो डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<tr>", "<td>", "<table>", "<row>"],
    "options_hi": ["<tr>", "<td>", "<table>", "<row>"],
    "answer_en": "<tr>",
    "answer_hi": "<tr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML5 element is used to define a table cell?",
    "question_hi": "टेबल सेल डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<td>", "<tr>", "<table>", "<cell>"],
    "options_hi": ["<td>", "<tr>", "<table>", "<cell>"],
    "answer_en": "<td>",
    "answer_hi": "<td>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML5 element is used to define a table header?",
    "question_hi": "टेबल हेडर डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<th>", "<td>", "<header>", "<thead>"],
    "options_hi": ["<th>", "<td>", "<header>", "<thead>"],
    "answer_en": "<th>",
    "answer_hi": "<th>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML5 element is used to define a form?",
    "question_hi": "फॉर्म डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<form>", "<input>", "<fieldset>", "<submit>"],
    "options_hi": ["<form>", "<input>", "<fieldset>", "<submit>"],
    "answer_en": "<form>",
    "answer_hi": "<form>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML5 element is used to define an input field?",
    "question_hi": "इनपुट फील्ड डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<input>", "<text>", "<field>", "<textfield>"],
    "options_hi": ["<input>", "<text>", "<field>", "<textfield>"],
    "answer_en": "<input>",
    "answer_hi": "<input>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML5 element is used to define a button?",
    "question_hi": "बटन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<button>", "<input>", "<submit>", "<btn>"],
    "options_hi": ["<button>", "<input>", "<submit>", "<btn>"],
    "answer_en": "<button>",
    "answer_hi": "<button>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML5 element is used to define a select dropdown?",
    "question_hi": "सेलेक्ट ड्रॉपडाउन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<select>", "<option>", "<dropdown>", "<list>"],
    "options_hi": ["<select>", "<option>", "<dropdown>", "<list>"],
    "answer_en": "<select>",
    "answer_hi": "<select>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML5 element is used to define an option in a dropdown?",
    "question_hi": "ड्रॉपडाउन में ऑप्शन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<option>", "<select>", "<item>", "<choice>"],
    "options_hi": ["<option>", "<select>", "<item>", "<choice>"],
    "answer_en": "<option>",
    "answer_hi": "<option>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML5 element is used to define a textarea?",
    "question_hi": "टेक्स्टएरिया डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<textarea>", "<input>", "<text>", "<multiline>"],
    "options_hi": ["<textarea>", "<input>", "<text>", "<multiline>"],
    "answer_en": "<textarea>",
    "answer_hi": "<textarea>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML5 element is used to define a label for a form element?",
    "question_hi": "फॉर्म एलिमेंट के लिए लेबल डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<label>", "<text>", "<caption>", "<title>"],
    "options_hi": ["<label>", "<text>", "<caption>", "<title>"],
    "answer_en": "<label>",
    "answer_hi": "<label>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML5 element is used to define a fieldset?",
    "question_hi": "फील्डसेट डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<fieldset>", "<group>", "<form>", "<section>"],
    "options_hi": ["<fieldset>", "<group>", "<form>", "<section>"],
    "answer_en": "<fieldset>",
    "answer_hi": "<fieldset>",
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