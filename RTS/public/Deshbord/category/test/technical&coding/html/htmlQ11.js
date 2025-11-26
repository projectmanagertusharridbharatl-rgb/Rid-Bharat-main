const questions = [
  {
    "num": 1,
    "question_en": "Which HTML5 element is used to draw graphics via scripting?",
    "question_hi": "स्क्रिप्टिंग के माध्यम से ग्राफिक्स ड्रा करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<canvas>", "<svg>", "<graphics>", "<draw>"],
    "options_hi": ["<canvas>", "<svg>", "<graphics>", "<draw>"],
    "answer_en": "<canvas>",
    "answer_hi": "<canvas>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML5 element provides a way to hold content that will not be displayed when page loads?",
    "question_hi": "कौन सा HTML5 एलिमेंट ऐसा कंटेंट रखने का तरीका प्रदान करता है जो पेज लोड होने पर डिस्प्ले नहीं होगा?",
    "options_en": ["<template>", "<hidden>", "<noscript>", "<placeholder>"],
    "options_hi": ["<template>", "<hidden>", "<noscript>", "<placeholder>"],
    "answer_en": "<template>",
    "answer_hi": "<template>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML5 attribute is used for form validation without JavaScript?",
    "question_hi": "JavaScript के बिना फॉर्म वैलिडेशन के लिए कौन सा HTML5 एट्रिब्यूट उपयोग किया जाता है?",
    "options_en": ["required", "validate", "mandatory", "mustfill"],
    "options_hi": ["required", "validate", "mandatory", "mustfill"],
    "answer_en": "required",
    "answer_hi": "required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
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
    "num": 5,
    "question_en": "Which HTML5 element represents the result of a calculation?",
    "question_hi": "कौन सा HTML5 एलिमेंट कैलकुलेशन के रिजल्ट को रिप्रेजेंट करता है?",
    "options_en": ["<output>", "<result>", "<calculation>", "<answer>"],
    "options_hi": ["<output>", "<result>", "<calculation>", "<answer>"],
    "answer_en": "<output>",
    "answer_hi": "<output>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML5 attribute specifies that an input field must be filled out?",
    "question_hi": "कौन सा HTML5 एट्रिब्यूट निर्दिष्ट करता है कि इनपुट फील्ड भरी जानी चाहिए?",
    "options_en": ["required", "mandatory", "necessary", "must"],
    "options_hi": ["required", "mandatory", "necessary", "must"],
    "answer_en": "required",
    "answer_hi": "required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML5 element defines a header for a document or section?",
    "question_hi": "कौन सा HTML5 एलिमेंट डॉक्यूमेंट या सेक्शन के लिए हेडर डिफाइन करता है?",
    "options_en": ["<header>", "<head>", "<top>", "<heading>"],
    "options_hi": ["<header>", "<head>", "<top>", "<heading>"],
    "answer_en": "<header>",
    "answer_hi": "<header>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML5 element defines a footer for a document or section?",
    "question_hi": "कौन सा HTML5 एलिमेंट डॉक्यूमेंट या सेक्शन के लिए फूटर डिफाइन करता है?",
    "options_en": ["<footer>", "<bottom>", "<end>", "<foot>"],
    "options_hi": ["<footer>", "<bottom>", "<end>", "<foot>"],
    "answer_en": "<footer>",
    "answer_hi": "<footer>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML5 element defines navigation links?",
    "question_hi": "कौन सा HTML5 एलिमेंट नेविगेशन लिंक्स डिफाइन करता है?",
    "options_en": ["<nav>", "<navigation>", "<menu>", "<links>"],
    "options_hi": ["<nav>", "<navigation>", "<menu>", "<links>"],
    "answer_en": "<nav>",
    "answer_hi": "<nav>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML5 element defines content aside from the page content?",
    "question_hi": "कौन सा HTML5 एलिमेंट पेज कंटेंट के अलावा कंटेंट डिफाइन करता है?",
    "options_en": ["<aside>", "<sidebar>", "<extra>", "<additional>"],
    "options_hi": ["<aside>", "<sidebar>", "<extra>", "<additional>"],
    "answer_en": "<aside>",
    "answer_hi": "<aside>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML5 element defines a section in a document?",
    "question_hi": "कौन सा HTML5 एलिमेंट डॉक्यूमेंट में सेक्शन डिफाइन करता है?",
    "options_en": ["<section>", "<div>", "<article>", "<part>"],
    "options_hi": ["<section>", "<div>", "<article>", "<part>"],
    "answer_en": "<section>",
    "answer_hi": "<section>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML5 element defines an article?",
    "question_hi": "कौन सा HTML5 एलिमेंट आर्टिकल डिफाइन करता है?",
    "options_en": ["<article>", "<section>", "<post>", "<content>"],
    "options_hi": ["<article>", "<section>", "<post>", "<content>"],
    "answer_en": "<article>",
    "answer_hi": "<article>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML5 element defines a dialog box or window?",
    "question_hi": "कौन सा HTML5 एलिमेंट डायलॉग बॉक्स या विंडो डिफाइन करता है?",
    "options_en": ["<dialog>", "<modal>", "<popup>", "<window>"],
    "options_hi": ["<dialog>", "<modal>", "<popup>", "<window>"],
    "answer_en": "<dialog>",
    "answer_hi": "<dialog>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML5 element defines a summary for a <details> element?",
    "question_hi": "कौन सा HTML5 एलिमेंट <details> एलिमेंट के लिए सारांश डिफाइन करता है?",
    "options_en": ["<summary>", "<details>", "<caption>", "<title>"],
    "options_hi": ["<summary>", "<details>", "<caption>", "<title>"],
    "answer_en": "<summary>",
    "answer_hi": "<summary>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML5 element defines a progress bar?",
    "question_hi": "कौन सा HTML5 एलिमेंट प्रोग्रेस बार डिफाइन करता है?",
    "options_en": ["<progress>", "<meter>", "<bar>", "<loading>"],
    "options_hi": ["<progress>", "<meter>", "<bar>", "<loading>"],
    "answer_en": "<progress>",
    "answer_hi": "<progress>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML5 element defines a scalar measurement within a known range?",
    "question_hi": "कौन सा HTML5 एलिमेंट ज्ञात रेंज के भीतर स्केलर माप डिफाइन करता है?",
    "options_en": ["<meter>", "<progress>", "<range>", "<measure>"],
    "options_hi": ["<meter>", "<progress>", "<range>", "<measure>"],
    "answer_en": "<meter>",
    "answer_hi": "<meter>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML5 element defines a date/time control?",
    "question_hi": "कौन सा HTML5 एलिमेंट डेट/टाइम कंट्रोल डिफाइन करता है?",
    "options_en": ["<input type='datetime-local'>", "<time>", "<date>", "<calendar>"],
    "options_hi": ["<input type='datetime-local'>", "<time>", "<date>", "<calendar>"],
    "answer_en": "<input type='datetime-local'>",
    "answer_hi": "<input type='datetime-local'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML5 element defines a color picker?",
    "question_hi": "कौन सा HTML5 एलिमेंट कलर पिकर डिफाइन करता है?",
    "options_en": ["<input type='color'>", "<color>", "<picker>", "<input type='picker'>"],
    "options_hi": ["<input type='color'>", "<color>", "<picker>", "<input type='picker'>"],
    "answer_en": "<input type='color'>",
    "answer_hi": "<input type='color'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML5 element defines a range control?",
    "question_hi": "कौन सा HTML5 एलिमेंट रेंज कंट्रोल डिफाइन करता है?",
    "options_en": ["<input type='range'>", "<range>", "<slider>", "<input type='slider'>"],
    "options_hi": ["<input type='range'>", "<range>", "<slider>", "<input type='slider'>"],
    "answer_en": "<input type='range'>",
    "answer_hi": "<input type='range'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML5 element defines a search field?",
    "question_hi": "कौन सा HTML5 एलिमेंट सर्च फील्ड डिफाइन करता है?",
    "options_en": ["<input type='search'>", "<search>", "<input type='text'>", "<find>"],
    "options_hi": ["<input type='search'>", "<search>", "<input type='text'>", "<find>"],
    "answer_en": "<input type='search'>",
    "answer_hi": "<input type='search'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML5 element defines a telephone number input?",
    "question_hi": "कौन सा HTML5 एलिमेंट टेलीफोन नंबर इनपुट डिफाइन करता है?",
    "options_en": ["<input type='tel'>", "<tel>", "<phone>", "<input type='phone'>"],
    "options_hi": ["<input type='tel'>", "<tel>", "<phone>", "<input type='phone'>"],
    "answer_en": "<input type='tel'>",
    "answer_hi": "<input type='tel'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML5 element defines a URL input?",
    "question_hi": "कौन सा HTML5 एलिमेंट URL इनपुट डिफाइन करता है?",
    "options_en": ["<input type='url'>", "<url>", "<link>", "<input type='link'>"],
    "options_hi": ["<input type='url'>", "<url>", "<link>", "<input type='link'>"],
    "answer_en": "<input type='url'>",
    "answer_hi": "<input type='url'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML5 element defines a number input?",
    "question_hi": "कौन सा HTML5 एलिमेंट नंबर इनपुट डिफाइन करता है?",
    "options_en": ["<input type='number'>", "<number>", "<numeric>", "<input type='numeric'>"],
    "options_hi": ["<input type='number'>", "<number>", "<numeric>", "<input type='numeric'>"],
    "answer_en": "<input type='number'>",
    "answer_hi": "<input type='number'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML5 attribute specifies a short hint that describes the expected value?",
    "question_hi": "कौन सा HTML5 एट्रिब्यूट एक छोटा संकेत निर्दिष्ट करता है जो अपेक्षित मूल्य का वर्णन करता है?",
    "options_en": ["placeholder", "hint", "tooltip", "description"],
    "options_hi": ["placeholder", "hint", "tooltip", "description"],
    "answer_en": "placeholder",
    "answer_hi": "placeholder",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML5 attribute specifies that an input field should be pre-selected?",
    "question_hi": "कौन सा HTML5 एट्रिब्यूट निर्दिष्ट करता है कि इनपुट फील्ड प्री-सेलेक्टेड होनी चाहिए?",
    "options_en": ["autofocus", "focus", "selected", "default"],
    "options_hi": ["autofocus", "focus", "selected", "default"],
    "answer_en": "autofocus",
    "answer_hi": "autofocus",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML5 attribute specifies that an input field should have autocomplete?",
    "question_hi": "कौन सा HTML5 एट्रिब्यूट निर्दिष्ट करता है कि इनपुट फील्ड में ऑटोकम्पलीट होना चाहिए?",
    "options_en": ["autocomplete", "autofill", "complete", "suggest"],
    "options_hi": ["autocomplete", "autofill", "complete", "suggest"],
    "answer_en": "autocomplete",
    "answer_hi": "autocomplete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML5 element defines a data list with pre-defined options?",
    "question_hi": "कौन सा HTML5 एलिमेंट प्री-डिफाइंड ऑप्शन्स के साथ डेटा लिस्ट डिफाइन करता है?",
    "options_en": ["<datalist>", "<list>", "<options>", "<select>"],
    "options_hi": ["<datalist>", "<list>", "<options>", "<select>"],
    "answer_en": "<datalist>",
    "answer_hi": "<datalist>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML5 element defines a key-pair generator field?",
    "question_hi": "कौन सा HTML5 एलिमेंट की-पेयर जेनरेटर फील्ड डिफाइन करता है?",
    "options_en": ["<keygen>", "<key>", "<generate>", "<password>"],
    "options_hi": ["<keygen>", "<key>", "<generate>", "<password>"],
    "answer_en": "<keygen>",
    "answer_hi": "<keygen>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML5 element defines a container for external application?",
    "question_hi": "कौन सा HTML5 एलिमेंट एक्सटर्नल एप्लिकेशन के लिए कंटेनर डिफाइन करता है?",
    "options_en": ["<embed>", "<object>", "<iframe>", "<external>"],
    "options_hi": ["<embed>", "<object>", "<iframe>", "<external>"],
    "answer_en": "<embed>",
    "answer_hi": "<embed>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML5 element defines a track for media elements?",
    "question_hi": "कौन सा HTML5 एलिमेंट मीडिया एलिमेंट्स के लिए ट्रैक डिफाइन करता है?",
    "options_en": ["<track>", "<source>", "<media>", "<subtitle>"],
    "options_hi": ["<track>", "<source>", "<media>", "<subtitle>"],
    "answer_en": "<track>",
    "answer_hi": "<track>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML5 element defines multiple media resources?",
    "question_hi": "कौन सा HTML5 एलिमेंट मल्टीपल मीडिया रिसोर्सेज डिफाइन करता है?",
    "options_en": ["<source>", "<src>", "<media>", "<resource>"],
    "options_hi": ["<source>", "<src>", "<media>", "<resource>"],
    "answer_en": "<source>",
    "answer_hi": "<source>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML5 element defines a ruby annotation?",
    "question_hi": "कौन सा HTML5 एलिमेंट रूबी एनोटेशन डिफाइन करता है?",
    "options_en": ["<ruby>", "<annotation>", "<rt>", "<rp>"],
    "options_hi": ["<ruby>", "<annotation>", "<rt>", "<rp>"],
    "answer_en": "<ruby>",
    "answer_hi": "<ruby>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML5 element defines a ruby text?",
    "question_hi": "कौन सा HTML5 एलिमेंट रूबी टेक्स्ट डिफाइन करता है?",
    "options_en": ["<rt>", "<ruby>", "<rp>", "<text>"],
    "options_hi": ["<rt>", "<ruby>", "<rp>", "<text>"],
    "answer_en": "<rt>",
    "answer_hi": "<rt>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML5 element defines a ruby parentheses?",
    "question_hi": "कौन सा HTML5 एलिमेंट रूबी पैरेन्थेसिस डिफाइन करता है?",
    "options_en": ["<rp>", "<ruby>", "<rt>", "<parentheses>"],
    "options_hi": ["<rp>", "<ruby>", "<rt>", "<parentheses>"],
    "answer_en": "<rp>",
    "answer_hi": "<rp>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML5 element defines text direction isolation?",
    "question_hi": "कौन सा HTML5 एलिमेंट टेक्स्ट डायरेक्शन आइसोलेशन डिफाइन करता है?",
    "options_en": ["<bdi>", "<bdo>", "<dir>", "<span>"],
    "options_hi": ["<bdi>", "<bdo>", "<dir>", "<span>"],
    "answer_en": "<bdi>",
    "answer_hi": "<bdi>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML5 element defines text direction override?",
    "question_hi": "कौन सा HTML5 एलिमेंट टेक्स्ट डायरेक्शन ओवरराइड डिफाइन करता है?",
    "options_en": ["<bdo>", "<bdi>", "<dir>", "<override>"],
    "options_hi": ["<bdo>", "<bdi>", "<dir>", "<override>"],
    "answer_en": "<bdo>",
    "answer_hi": "<bdo>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML5 element defines a word break opportunity?",
    "question_hi": "कौन सा HTML5 एलिमेंट वर्ड ब्रेक ऑपरच्यूनिटी डिफाइन करता है?",
    "options_en": ["<wbr>", "<br>", "<break>", "<wordbreak>"],
    "options_hi": ["<wbr>", "<br>", "<break>", "<wordbreak>"],
    "answer_en": "<wbr>",
    "answer_hi": "<wbr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML5 element defines a line break?",
    "question_hi": "कौन सा HTML5 एलिमेंट लाइन ब्रेक डिफाइन करता है?",
    "options_en": ["<br>", "<wbr>", "<break>", "<lb>"],
    "options_hi": ["<br>", "<wbr>", "<break>", "<lb>"],
    "answer_en": "<br>",
    "answer_hi": "<br>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML5 element defines marked/highlighted text?",
    "question_hi": "कौन सा HTML5 एलिमेंट मार्क्ड/हाइलाइटेड टेक्स्ट डिफाइन करता है?",
    "options_en": ["<mark>", "<highlight>", "<strong>", "<em>"],
    "options_hi": ["<mark>", "<highlight>", "<strong>", "<em>"],
    "answer_en": "<mark>",
    "answer_hi": "<mark>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML5 element defines a time or date?",
    "question_hi": "कौन सा HTML5 एलिमेंट टाइम या डेट डिफाइन करता है?",
    "options_en": ["<time>", "<datetime>", "<date>", "<calendar>"],
    "options_hi": ["<time>", "<datetime>", "<date>", "<calendar>"],
    "answer_en": "<time>",
    "answer_hi": "<time>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML5 element defines a figure with optional caption?",
    "question_hi": "कौन सा HTML5 एलिमेंट ऑप्शनल कैप्शन के साथ फिगर डिफाइन करता है?",
    "options_en": ["<figure>", "<img>", "<picture>", "<illustration>"],
    "options_hi": ["<figure>", "<img>", "<picture>", "<illustration>"],
    "answer_en": "<figure>",
    "answer_hi": "<figure>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML5 element defines a caption for a figure?",
    "question_hi": "कौन सा HTML5 एलिमेंट फिगर के लिए कैप्शन डिफाइन करता है?",
    "options_en": ["<figcaption>", "<caption>", "<figure>", "<imgcaption>"],
    "options_hi": ["<figcaption>", "<caption>", "<figure>", "<imgcaption>"],
    "answer_en": "<figcaption>",
    "answer_hi": "<figcaption>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML5 element defines a details disclosure widget?",
    "question_hi": "कौन सा HTML5 एलिमेंट डिटेल्स डिस्क्लोजर विजेट डिफाइन करता है?",
    "options_en": ["<details>", "<summary>", "<accordion>", "<expand>"],
    "options_hi": ["<details>", "<summary>", "<accordion>", "<expand>"],
    "answer_en": "<details>",
    "answer_hi": "<details>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML5 element defines a summary for details?",
    "question_hi": "कौन सा HTML5 एलिमेंट डिटेल्स के लिए सारांश डिफाइन करता है?",
    "options_en": ["<summary>", "<details>", "<heading>", "<title>"],
    "options_hi": ["<summary>", "<details>", "<heading>", "<title>"],
    "answer_en": "<summary>",
    "answer_hi": "<summary>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML5 element defines a main content area?",
    "question_hi": "कौन सा HTML5 एलिमेंट मेन कंटेंट एरिया डिफाइन करता है?",
    "options_en": ["<main>", "<content>", "<body>", "<section>"],
    "options_hi": ["<main>", "<content>", "<body>", "<section>"],
    "answer_en": "<main>",
    "answer_hi": "<main>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML5 element defines a section in a document?",
    "question_hi": "कौन सा HTML5 एलिमेंट डॉक्यूमेंट में सेक्शन डिफाइन करता है?",
    "options_en": ["<section>", "<div>", "<article>", "<part>"],
    "options_hi": ["<section>", "<div>", "<article>", "<part>"],
    "answer_en": "<section>",
    "answer_hi": "<section>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML5 element defines an independent content?",
    "question_hi": "कौन सा HTML5 एलिमेंट स्वतंत्र कंटेंट डिफाइन करता है?",
    "options_en": ["<article>", "<section>", "<div>", "<main>"],
    "options_hi": ["<article>", "<section>", "<div>", "<main>"],
    "answer_en": "<article>",
    "answer_hi": "<article>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML5 element defines a header for a document?",
    "question_hi": "कौन सा HTML5 एलिमेंट डॉक्यूमेंट के लिए हेडर डिफाइन करता है?",
    "options_en": ["<header>", "<head>", "<top>", "<heading>"],
    "options_hi": ["<header>", "<head>", "<top>", "<heading>"],
    "answer_en": "<header>",
    "answer_hi": "<header>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML5 element defines a footer for a document?",
    "question_hi": "कौन सा HTML5 एलिमेंट डॉक्यूमेंट के लिए फूटर डिफाइन करता है?",
    "options_en": ["<footer>", "<bottom>", "<end>", "<foot>"],
    "options_hi": ["<footer>", "<bottom>", "<end>", "<foot>"],
    "answer_en": "<footer>",
    "answer_hi": "<footer>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML5 element defines navigation links?",
    "question_hi": "कौन सा HTML5 एलिमेंट नेविगेशन लिंक्स डिफाइन करता है?",
    "options_en": ["<nav>", "<navigation>", "<menu>", "<links>"],
    "options_hi": ["<nav>", "<navigation>", "<menu>", "<links>"],
    "answer_en": "<nav>",
    "answer_hi": "<nav>",
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