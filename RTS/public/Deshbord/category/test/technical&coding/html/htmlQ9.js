const questions = [
  {
    "num": 1,
    "question_en": "Which HTML tag is used to create a hyperlink?",
    "question_hi": "हाइपरलिंक बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<a>", "<link>", "<href>", "<hyperlink>"],
    "options_hi": ["<a>", "<link>", "<href>", "<hyperlink>"],
    "answer_en": "<a>",
    "answer_hi": "<a>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML tag is used to create an unordered list?",
    "question_hi": "अनऑर्डर्ड लिस्ट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<ul>", "<ol>", "<li>", "<list>"],
    "options_hi": ["<ul>", "<ol>", "<li>", "<list>"],
    "answer_en": "<ul>",
    "answer_hi": "<ul>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML tag is used to create an ordered list?",
    "question_hi": "ऑर्डर्ड लिस्ट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<ol>", "<ul>", "<li>", "<list>"],
    "options_hi": ["<ol>", "<ul>", "<li>", "<list>"],
    "answer_en": "<ol>",
    "answer_hi": "<ol>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML tag is used to create a table row?",
    "question_hi": "टेबल रो बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<tr>", "<td>", "<th>", "<table>"],
    "options_hi": ["<tr>", "<td>", "<th>", "<table>"],
    "answer_en": "<tr>",
    "answer_hi": "<tr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML tag is used to create a table cell?",
    "question_hi": "टेबल सेल बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<td>", "<tr>", "<th>", "<cell>"],
    "options_hi": ["<td>", "<tr>", "<th>", "<cell>"],
    "answer_en": "<td>",
    "answer_hi": "<td>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML tag is used to create a table header cell?",
    "question_hi": "टेबल हेडर सेल बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<th>", "<td>", "<tr>", "<header>"],
    "options_hi": ["<th>", "<td>", "<tr>", "<header>"],
    "answer_en": "<th>",
    "answer_hi": "<th>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML tag is used to create a form?",
    "question_hi": "फॉर्म बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<form>", "<input>", "<fieldset>", "<submit>"],
    "options_hi": ["<form>", "<input>", "<fieldset>", "<submit>"],
    "answer_en": "<form>",
    "answer_hi": "<form>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML tag is used to create a text input field?",
    "question_hi": "टेक्स्ट इनपुट फील्ड बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<input>", "<text>", "<textarea>", "<textfield>"],
    "options_hi": ["<input>", "<text>", "<textarea>", "<textfield>"],
    "answer_en": "<input>",
    "answer_hi": "<input>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML tag is used to create a multi-line text input?",
    "question_hi": "मल्टी-लाइन टेक्स्ट इनपुट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<textarea>", "<input>", "<text>", "<multiline>"],
    "options_hi": ["<textarea>", "<input>", "<text>", "<multiline>"],
    "answer_en": "<textarea>",
    "answer_hi": "<textarea>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML tag is used to create a dropdown list?",
    "question_hi": "ड्रॉपडाउन लिस्ट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<select>", "<option>", "<dropdown>", "<list>"],
    "options_hi": ["<select>", "<option>", "<dropdown>", "<list>"],
    "answer_en": "<select>",
    "answer_hi": "<select>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML tag is used to create an option in a dropdown list?",
    "question_hi": "ड्रॉपडाउन लिस्ट में ऑप्शन बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<option>", "<select>", "<item>", "<choice>"],
    "options_hi": ["<option>", "<select>", "<item>", "<choice>"],
    "answer_en": "<option>",
    "answer_hi": "<option>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML tag is used to create a button?",
    "question_hi": "बटन बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<button>", "<input>", "<submit>", "<btn>"],
    "options_hi": ["<button>", "<input>", "<submit>", "<btn>"],
    "answer_en": "<button>",
    "answer_hi": "<button>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML tag is used to create an image?",
    "question_hi": "इमेज बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<img>", "<image>", "<pic>", "<photo>"],
    "options_hi": ["<img>", "<image>", "<pic>", "<photo>"],
    "answer_en": "<img>",
    "answer_hi": "<img>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML tag is used to create a line break?",
    "question_hi": "लाइन ब्रेक बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<br>", "<break>", "<lb>", "<newline>"],
    "options_hi": ["<br>", "<break>", "<lb>", "<newline>"],
    "answer_en": "<br>",
    "answer_hi": "<br>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML tag is used to create a horizontal rule?",
    "question_hi": "हॉरिजॉन्टल रूल बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<hr>", "<line>", "<rule>", "<horizontal>"],
    "options_hi": ["<hr>", "<line>", "<rule>", "<horizontal>"],
    "answer_en": "<hr>",
    "answer_hi": "<hr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML tag is used to create a paragraph?",
    "question_hi": "पैराग्राफ बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<p>", "<para>", "<paragraph>", "<text>"],
    "options_hi": ["<p>", "<para>", "<paragraph>", "<text>"],
    "answer_en": "<p>",
    "answer_hi": "<p>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML tag is used to create a heading?",
    "question_hi": "हेडिंग बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<h1> to <h6>", "<head>", "<header>", "<heading>"],
    "options_hi": ["<h1> to <h6>", "<head>", "<header>", "<heading>"],
    "answer_en": "<h1> to <h6>",
    "answer_hi": "<h1> to <h6>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML tag is used to create the largest heading?",
    "question_hi": "सबसे बड़ी हेडिंग बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<h1>", "<h6>", "<heading>", "<big>"],
    "options_hi": ["<h1>", "<h6>", "<heading>", "<big>"],
    "answer_en": "<h1>",
    "answer_hi": "<h1>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML tag is used to create the smallest heading?",
    "question_hi": "सबसे छोटी हेडिंग बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<h6>", "<h1>", "<small>", "<tiny>"],
    "options_hi": ["<h6>", "<h1>", "<small>", "<tiny>"],
    "answer_en": "<h6>",
    "answer_hi": "<h6>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML tag is used to create bold text?",
    "question_hi": "बोल्ड टेक्स्ट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<b>", "<strong>", "<bold>", "<em>"],
    "options_hi": ["<b>", "<strong>", "<bold>", "<em>"],
    "answer_en": "<b>",
    "answer_hi": "<b>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML tag is used to create italic text?",
    "question_hi": "इटैलिक टेक्स्ट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<i>", "<em>", "<italic>", "<cite>"],
    "options_hi": ["<i>", "<em>", "<italic>", "<cite>"],
    "answer_en": "<i>",
    "answer_hi": "<i>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML tag is used to create underlined text?",
    "question_hi": "अंडरलाइन टेक्स्ट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<u>", "<underline>", "<ins>", "<under>"],
    "options_hi": ["<u>", "<underline>", "<ins>", "<under>"],
    "answer_en": "<u>",
    "answer_hi": "<u>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML tag is used to create a division or section?",
    "question_hi": "डिवीजन या सेक्शन बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<div>", "<section>", "<span>", "<container>"],
    "options_hi": ["<div>", "<section>", "<span>", "<container>"],
    "answer_en": "<div>",
    "answer_hi": "<div>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML tag is used to create an inline container?",
    "question_hi": "इनलाइन कंटेनर बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<span>", "<div>", "<inline>", "<container>"],
    "options_hi": ["<span>", "<div>", "<inline>", "<container>"],
    "answer_en": "<span>",
    "answer_hi": "<span>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML tag is used to create a navigation section?",
    "question_hi": "नेविगेशन सेक्शन बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<nav>", "<navigation>", "<menu>", "<navbar>"],
    "options_hi": ["<nav>", "<navigation>", "<menu>", "<navbar>"],
    "answer_en": "<nav>",
    "answer_hi": "<nav>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML tag is used to create a header section?",
    "question_hi": "हेडर सेक्शन बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<header>", "<head>", "<top>", "<heading>"],
    "options_hi": ["<header>", "<head>", "<top>", "<heading>"],
    "answer_en": "<header>",
    "answer_hi": "<header>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML tag is used to create a footer section?",
    "question_hi": "फूटर सेक्शन बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<footer>", "<bottom>", "<end>", "<foot>"],
    "options_hi": ["<footer>", "<bottom>", "<end>", "<foot>"],
    "answer_en": "<footer>",
    "answer_hi": "<footer>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML tag is used to create an article?",
    "question_hi": "आर्टिकल बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<article>", "<section>", "<post>", "<content>"],
    "options_hi": ["<article>", "<section>", "<post>", "<content>"],
    "answer_en": "<article>",
    "answer_hi": "<article>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML tag is used to create a section?",
    "question_hi": "सेक्शन बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<section>", "<div>", "<article>", "<part>"],
    "options_hi": ["<section>", "<div>", "<article>", "<part>"],
    "answer_en": "<section>",
    "answer_hi": "<section>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML tag is used to create an aside content?",
    "question_hi": "असाइड कंटेंट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<aside>", "<sidebar>", "<side>", "<extra>"],
    "options_hi": ["<aside>", "<sidebar>", "<side>", "<extra>"],
    "answer_en": "<aside>",
    "answer_hi": "<aside>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML tag is used to create a main content area?",
    "question_hi": "मेन कंटेंट एरिया बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<main>", "<content>", "<body>", "<primary>"],
    "options_hi": ["<main>", "<content>", "<body>", "<primary>"],
    "answer_en": "<main>",
    "answer_hi": "<main>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML tag is used to create a figure?",
    "question_hi": "फिगर बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<figure>", "<img>", "<pic>", "<diagram>"],
    "options_hi": ["<figure>", "<img>", "<pic>", "<diagram>"],
    "answer_en": "<figure>",
    "answer_hi": "<figure>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML tag is used to create a figure caption?",
    "question_hi": "फिगर कैप्शन बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<figcaption>", "<caption>", "<figure>", "<description>"],
    "options_hi": ["<figcaption>", "<caption>", "<figure>", "<description>"],
    "answer_en": "<figcaption>",
    "answer_hi": "<figcaption>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML tag is used to create a details disclosure widget?",
    "question_hi": "डिटेल्स डिस्क्लोजर विजेट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<details>", "<summary>", "<disclosure>", "<widget>"],
    "options_hi": ["<details>", "<summary>", "<disclosure>", "<widget>"],
    "answer_en": "<details>",
    "answer_hi": "<details>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML tag is used to create a summary for details element?",
    "question_hi": "डिटेल्स एलिमेंट के लिए सारांश बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<summary>", "<details>", "<caption>", "<title>"],
    "options_hi": ["<summary>", "<details>", "<caption>", "<title>"],
    "answer_en": "<summary>",
    "answer_hi": "<summary>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML tag is used to create a dialog box?",
    "question_hi": "डायलॉग बॉक्स बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<dialog>", "<modal>", "<popup>", "<window>"],
    "options_hi": ["<dialog>", "<modal>", "<popup>", "<window>"],
    "answer_en": "<dialog>",
    "answer_hi": "<dialog>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML tag is used to create a progress bar?",
    "question_hi": "प्रोग्रेस बार बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<progress>", "<meter>", "<bar>", "<loading>"],
    "options_hi": ["<progress>", "<meter>", "<bar>", "<loading>"],
    "answer_en": "<progress>",
    "answer_hi": "<progress>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML tag is used to create a meter gauge?",
    "question_hi": "मीटर गेज बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<meter>", "<progress>", "<gauge>", "<measure>"],
    "options_hi": ["<meter>", "<progress>", "<gauge>", "<measure>"],
    "answer_en": "<meter>",
    "answer_hi": "<meter>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML tag is used to create a video player?",
    "question_hi": "वीडियो प्लेयर बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<video>", "<media>", "<movie>", "<player>"],
    "options_hi": ["<video>", "<media>", "<movie>", "<player>"],
    "answer_en": "<video>",
    "answer_hi": "<video>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML tag is used to create an audio player?",
    "question_hi": "ऑडियो प्लेयर बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<audio>", "<sound>", "<music>", "<player>"],
    "options_hi": ["<audio>", "<sound>", "<music>", "<player>"],
    "answer_en": "<audio>",
    "answer_hi": "<audio>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML tag is used to create a canvas for graphics?",
    "question_hi": "ग्राफिक्स के लिए कैनवास बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<canvas>", "<graphics>", "<draw>", "<paint>"],
    "options_hi": ["<canvas>", "<graphics>", "<draw>", "<paint>"],
    "answer_en": "<canvas>",
    "answer_hi": "<canvas>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML tag is used to create SVG graphics?",
    "question_hi": "SVG ग्राफिक्स बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<svg>", "<canvas>", "<graphics>", "<vector>"],
    "options_hi": ["<svg>", "<canvas>", "<graphics>", "<vector>"],
    "answer_en": "<svg>",
    "answer_hi": "<svg>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML tag is used to create a label for form elements?",
    "question_hi": "फॉर्म एलिमेंट्स के लिए लेबल बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<label>", "<text>", "<caption>", "<title>"],
    "options_hi": ["<label>", "<text>", "<caption>", "<title>"],
    "answer_en": "<label>",
    "answer_hi": "<label>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML tag is used to create a fieldset?",
    "question_hi": "फील्डसेट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<fieldset>", "<group>", "<form>", "<section>"],
    "options_hi": ["<fieldset>", "<group>", "<form>", "<section>"],
    "answer_en": "<fieldset>",
    "answer_hi": "<fieldset>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML tag is used to create a legend for fieldset?",
    "question_hi": "फील्डसेट के लिए लीजेंड बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<legend>", "<title>", "<caption>", "<label>"],
    "options_hi": ["<legend>", "<title>", "<caption>", "<label>"],
    "answer_en": "<legend>",
    "answer_hi": "<legend>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML tag is used to create a datalist?",
    "question_hi": "डेटालिस्ट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<datalist>", "<list>", "<options>", "<select>"],
    "options_hi": ["<datalist>", "<list>", "<options>", "<select>"],
    "answer_en": "<datalist>",
    "answer_hi": "<datalist>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML tag is used to create an output element?",
    "question_hi": "आउटपुट एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<output>", "<result>", "<display>", "<show>"],
    "options_hi": ["<output>", "<result>", "<display>", "<show>"],
    "answer_en": "<output>",
    "answer_hi": "<output>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML tag is used to create a time element?",
    "question_hi": "टाइम एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<time>", "<date>", "<datetime>", "<clock>"],
    "options_hi": ["<time>", "<date>", "<datetime>", "<clock>"],
    "answer_en": "<time>",
    "answer_hi": "<time>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML tag is used to create a mark element?",
    "question_hi": "मार्क एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<mark>", "<highlight>", "<em>", "<strong>"],
    "options_hi": ["<mark>", "<highlight>", "<em>", "<strong>"],
    "answer_en": "<mark>",
    "answer_hi": "<mark>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML tag is used to create a code element?",
    "question_hi": "कोड एलिमेंट बनाने के लिए कौन सा HTML टैग उपयोग किया जाता है?",
    "options_en": ["<code>", "<pre>", "<script>", "<programming>"],
    "options_hi": ["<code>", "<pre>", "<script>", "<programming>"],
    "answer_en": "<code>",
    "answer_hi": "<code>",
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
