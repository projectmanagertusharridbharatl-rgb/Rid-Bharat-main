const questions = [
  {
    "num": 1,
    "question_en": "Which HTML tag is used to define the document type?",
    "question_hi": "डॉक्यूमेंट टाइप डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<!DOCTYPE>", "<html>", "<document>", "<doctype>"],
    "options_hi": ["<!DOCTYPE>", "<html>", "<document>", "<doctype>"],
    "answer_en": "<!DOCTYPE>",
    "answer_hi": "<!DOCTYPE>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML tag is used to define a header for a document or section?",
    "question_hi": "डॉक्यूमेंट या सेक्शन के लिए हेडर डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<header>", "<head>", "<h1>", "<top>"],
    "options_hi": ["<header>", "<head>", "<h1>", "<top>"],
    "answer_en": "<header>",
    "answer_hi": "<header>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML tag is used to define a footer for a document or section?",
    "question_hi": "डॉक्यूमेंट या सेक्शन के लिए फूटर डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<footer>", "<bottom>", "<end>", "<close>"],
    "options_hi": ["<footer>", "<bottom>", "<end>", "<close>"],
    "answer_en": "<footer>",
    "answer_hi": "<footer>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML tag is used to define a section in a document?",
    "question_hi": "डॉक्यूमेंट में सेक्शन डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<section>", "<div>", "<article>", "<part>"],
    "options_hi": ["<section>", "<div>", "<article>", "<part>"],
    "answer_en": "<section>",
    "answer_hi": "<section>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML tag is used to define an article?",
    "question_hi": "आर्टिकल डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<article>", "<section>", "<div>", "<content>"],
    "options_hi": ["<article>", "<section>", "<div>", "<content>"],
    "answer_en": "<article>",
    "answer_hi": "<article>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML tag is used to define content aside from the page content?",
    "question_hi": "पेज कंटेंट के अलावा कंटेंट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<aside>", "<sidebar>", "<nav>", "<extra>"],
    "options_hi": ["<aside>", "<sidebar>", "<nav>", "<extra>"],
    "answer_en": "<aside>",
    "answer_hi": "<aside>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML tag is used to define navigation links?",
    "question_hi": "नेविगेशन लिंक्स डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<nav>", "<navigation>", "<menu>", "<links>"],
    "options_hi": ["<nav>", "<navigation>", "<menu>", "<links>"],
    "answer_en": "<nav>",
    "answer_hi": "<nav>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML tag is used to define a figure?",
    "question_hi": "फिगर डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<figure>", "<img>", "<picture>", "<illustration>"],
    "options_hi": ["<figure>", "<img>", "<picture>", "<illustration>"],
    "answer_en": "<figure>",
    "answer_hi": "<figure>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML tag is used to define a caption for a figure?",
    "question_hi": "फिगर के लिए कैप्शन डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<figcaption>", "<caption>", "<description>", "<title>"],
    "options_hi": ["<figcaption>", "<caption>", "<description>", "<title>"],
    "answer_en": "<figcaption>",
    "answer_hi": "<figcaption>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML tag is used to define marked/highlighted text?",
    "question_hi": "मार्क्ड/हाइलाइटेड टेक्स्ट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<mark>", "<highlight>", "<strong>", "<em>"],
    "options_hi": ["<mark>", "<highlight>", "<strong>", "<em>"],
    "answer_en": "<mark>",
    "answer_hi": "<mark>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML tag is used to define a progress bar?",
    "question_hi": "प्रोग्रेस बार डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<progress>", "<meter>", "<bar>", "<load>"],
    "options_hi": ["<progress>", "<meter>", "<bar>", "<load>"],
    "answer_en": "<progress>",
    "answer_hi": "<progress>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML tag is used to define a scalar measurement?",
    "question_hi": "स्केलर माप डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<meter>", "<progress>", "<range>", "<measure>"],
    "options_hi": ["<meter>", "<progress>", "<range>", "<measure>"],
    "answer_en": "<meter>",
    "answer_hi": "<meter>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML tag is used to define a dialog box?",
    "question_hi": "डायलॉग बॉक्स डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<dialog>", "<modal>", "<popup>", "<window>"],
    "options_hi": ["<dialog>", "<modal>", "<popup>", "<window>"],
    "answer_en": "<dialog>",
    "answer_hi": "<dialog>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML tag is used to define a details widget?",
    "question_hi": "डिटेल्स विजेट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<details>", "<summary>", "<accordion>", "<expand>"],
    "options_hi": ["<details>", "<summary>", "<accordion>", "<expand>"],
    "answer_en": "<details>",
    "answer_hi": "<details>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML tag is used to define a summary for details?",
    "question_hi": "डिटेल्स के लिए सारांश डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<summary>", "<details>", "<heading>", "<title>"],
    "options_hi": ["<summary>", "<details>", "<heading>", "<title>"],
    "answer_en": "<summary>",
    "answer_hi": "<summary>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which HTML tag is used to define a template?",
    "question_hi": "टेम्पलेट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<template>", "<script>", "<div>", "<pattern>"],
    "options_hi": ["<template>", "<script>", "<div>", "<pattern>"],
    "answer_en": "<template>",
    "answer_hi": "<template>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which HTML tag is used to define a slot?",
    "question_hi": "स्लॉट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<slot>", "<placeholder>", "<gap>", "<space>"],
    "options_hi": ["<slot>", "<placeholder>", "<gap>", "<space>"],
    "answer_en": "<slot>",
    "answer_hi": "<slot>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML tag is used to define a canvas for graphics?",
    "question_hi": "ग्राफिक्स के लिए कैनवास डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<canvas>", "<svg>", "<graphics>", "<draw>"],
    "options_hi": ["<canvas>", "<svg>", "<graphics>", "<draw>"],
    "answer_en": "<canvas>",
    "answer_hi": "<canvas>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML tag is used to define scalable vector graphics?",
    "question_hi": "स्केलेबल वेक्टर ग्राफिक्स डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<svg>", "<canvas>", "<vector>", "<graphic>"],
    "options_hi": ["<svg>", "<canvas>", "<vector>", "<graphic>"],
    "answer_en": "<svg>",
    "answer_hi": "<svg>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML tag is used to define audio content?",
    "question_hi": "ऑडियो कंटेंट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<audio>", "<sound>", "<music>", "<player>"],
    "options_hi": ["<audio>", "<sound>", "<music>", "<player>"],
    "answer_en": "<audio>",
    "answer_hi": "<audio>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML tag is used to define video content?",
    "question_hi": "वीडियो कंटेंट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<video>", "<movie>", "<film>", "<player>"],
    "options_hi": ["<video>", "<movie>", "<film>", "<player>"],
    "answer_en": "<video>",
    "answer_hi": "<video>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML tag is used to define a track for media?",
    "question_hi": "मीडिया के लिए ट्रैक डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<track>", "<source>", "<media>", "<subtitle>"],
    "options_hi": ["<track>", "<source>", "<media>", "<subtitle>"],
    "answer_en": "<track>",
    "answer_hi": "<track>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML tag is used to define a source for media?",
    "question_hi": "मीडिया के लिए सोर्स डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<source>", "<src>", "<media>", "<file>"],
    "options_hi": ["<source>", "<src>", "<media>", "<file>"],
    "answer_en": "<source>",
    "answer_hi": "<source>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML tag is used to define a data list?",
    "question_hi": "डेटा लिस्ट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<datalist>", "<list>", "<options>", "<select>"],
    "options_hi": ["<datalist>", "<list>", "<options>", "<select>"],
    "answer_en": "<datalist>",
    "answer_hi": "<datalist>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML tag is used to define an output element?",
    "question_hi": "आउटपुट एलिमेंट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<output>", "<result>", "<display>", "<span>"],
    "options_hi": ["<output>", "<result>", "<display>", "<span>"],
    "answer_en": "<output>",
    "answer_hi": "<output>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML tag is used to define a time/date?",
    "question_hi": "टाइम/डेट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<time>", "<datetime>", "<date>", "<calendar>"],
    "options_hi": ["<time>", "<datetime>", "<date>", "<calendar>"],
    "answer_en": "<time>",
    "answer_hi": "<time>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML tag is used to define a ruby annotation?",
    "question_hi": "रूबी एनोटेशन डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<ruby>", "<annotation>", "<rt>", "<rp>"],
    "options_hi": ["<ruby>", "<annotation>", "<rt>", "<rp>"],
    "answer_en": "<ruby>",
    "answer_hi": "<ruby>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML tag is used to define ruby text?",
    "question_hi": "रूबी टेक्स्ट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<rt>", "<ruby>", "<rp>", "<text>"],
    "options_hi": ["<rt>", "<ruby>", "<rp>", "<text>"],
    "answer_en": "<rt>",
    "answer_hi": "<rt>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML tag is used to define ruby parentheses?",
    "question_hi": "रूबी पैरेन्थेसिस डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<rp>", "<ruby>", "<rt>", "<parentheses>"],
    "options_hi": ["<rp>", "<ruby>", "<rt>", "<parentheses>"],
    "answer_en": "<rp>",
    "answer_hi": "<rp>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML tag is used to define a bidirectional isolation?",
    "question_hi": "बायडायरेक्शनल आइसोलेशन डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<bdi>", "<bdo>", "<dir>", "<span>"],
    "options_hi": ["<bdi>", "<bdo>", "<dir>", "<span>"],
    "answer_en": "<bdi>",
    "answer_hi": "<bdi>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML tag is used to define bidirectional override?",
    "question_hi": "बायडायरेक्शनल ओवरराइड डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<bdo>", "<bdi>", "<dir>", "<override>"],
    "options_hi": ["<bdo>", "<bdi>", "<dir>", "<override>"],
    "answer_en": "<bdo>",
    "answer_hi": "<bdo>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML tag is used to define a word break opportunity?",
    "question_hi": "वर्ड ब्रेक ऑपरच्यूनिटी डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<wbr>", "<br>", "<break>", "<wordbreak>"],
    "options_hi": ["<wbr>", "<br>", "<break>", "<wordbreak>"],
    "answer_en": "<wbr>",
    "answer_hi": "<wbr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML tag is used to define a line break?",
    "question_hi": "लाइन ब्रेक डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<br>", "<wbr>", "<break>", "<lb>"],
    "options_hi": ["<br>", "<wbr>", "<break>", "<lb>"],
    "answer_en": "<br>",
    "answer_hi": "<br>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML tag is used to define a span of text?",
    "question_hi": "टेक्स्ट के स्पैन को डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<span>", "<div>", "<text>", "<section>"],
    "options_hi": ["<span>", "<div>", "<text>", "<section>"],
    "answer_en": "<span>",
    "answer_hi": "<span>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML tag is used to define a division/section?",
    "question_hi": "डिवीजन/सेक्शन डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<div>", "<span>", "<section>", "<article>"],
    "options_hi": ["<div>", "<span>", "<section>", "<article>"],
    "answer_en": "<div>",
    "answer_hi": "<div>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML tag is used to define a paragraph?",
    "question_hi": "पैराग्राफ डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<p>", "<para>", "<text>", "<div>"],
    "options_hi": ["<p>", "<para>", "<text>", "<div>"],
    "answer_en": "<p>",
    "answer_hi": "<p>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML tag is used to define a hyperlink?",
    "question_hi": "हाइपरलिंक डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<a>", "<link>", "<href>", "<hyper>"],
    "options_hi": ["<a>", "<link>", "<href>", "<hyper>"],
    "answer_en": "<a>",
    "answer_hi": "<a>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML tag is used to define an image?",
    "question_hi": "इमेज डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<img>", "<image>", "<picture>", "<src>"],
    "options_hi": ["<img>", "<image>", "<picture>", "<src>"],
    "answer_en": "<img>",
    "answer_hi": "<img>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML tag is used to define a list item?",
    "question_hi": "लिस्ट आइटम डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<li>", "<item>", "<list>", "<ul>"],
    "options_hi": ["<li>", "<item>", "<list>", "<ul>"],
    "answer_en": "<li>",
    "answer_hi": "<li>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML tag is used to define an unordered list?",
    "question_hi": "अनऑर्डर्ड लिस्ट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<ul>", "<ol>", "<li>", "<list>"],
    "options_hi": ["<ul>", "<ol>", "<li>", "<list>"],
    "answer_en": "<ul>",
    "answer_hi": "<ul>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML tag is used to define an ordered list?",
    "question_hi": "ऑर्डर्ड लिस्ट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<ol>", "<ul>", "<li>", "<list>"],
    "options_hi": ["<ol>", "<ul>", "<li>", "<list>"],
    "answer_en": "<ol>",
    "answer_hi": "<ol>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML tag is used to define a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<dl>", "<dd>", "<dt>", "<desc>"],
    "options_hi": ["<dl>", "<dd>", "<dt>", "<desc>"],
    "answer_en": "<dl>",
    "answer_hi": "<dl>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML tag is used to define a term in a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में टर्म डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<dt>", "<dd>", "<dl>", "<term>"],
    "options_hi": ["<dt>", "<dd>", "<dl>", "<term>"],
    "answer_en": "<dt>",
    "answer_hi": "<dt>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML tag is used to define a description in a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में डिस्क्रिप्शन डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<dd>", "<dt>", "<dl>", "<desc>"],
    "options_hi": ["<dd>", "<dt>", "<dl>", "<desc>"],
    "answer_en": "<dd>",
    "answer_hi": "<dd>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML tag is used to define a table?",
    "question_hi": "टेबल डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<table>", "<tr>", "<td>", "<th>"],
    "options_hi": ["<table>", "<tr>", "<td>", "<th>"],
    "answer_en": "<table>",
    "answer_hi": "<table>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML tag is used to define a table row?",
    "question_hi": "टेबल रो डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<tr>", "<td>", "<th>", "<table>"],
    "options_hi": ["<tr>", "<td>", "<th>", "<table>"],
    "answer_en": "<tr>",
    "answer_hi": "<tr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML tag is used to define a table header cell?",
    "question_hi": "टेबल हेडर सेल डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<th>", "<td>", "<tr>", "<header>"],
    "options_hi": ["<th>", "<td>", "<tr>", "<header>"],
    "answer_en": "<th>",
    "answer_hi": "<th>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML tag is used to define a table data cell?",
    "question_hi": "टेबल डेटा सेल डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<td>", "<th>", "<tr>", "<data>"],
    "options_hi": ["<td>", "<th>", "<tr>", "<data>"],
    "answer_en": "<td>",
    "answer_hi": "<td>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML tag is used to define a table caption?",
    "question_hi": "टेबल कैप्शन डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<caption>", "<title>", "<head>", "<label>"],
    "options_hi": ["<caption>", "<title>", "<head>", "<label>"],
    "answer_en": "<caption>",
    "answer_hi": "<caption>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML tag is used to define a form?",
    "question_hi": "फॉर्म डिफाइन करने के लिए कौन सा HTML टैग उपयोग होता है?",
    "options_en": ["<form>", "<input>", "<fieldset>", "<div>"],
    "options_hi": ["<form>", "<input>", "<fieldset>", "<div>"],
    "answer_en": "<form>",
    "answer_hi": "<form>",
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
