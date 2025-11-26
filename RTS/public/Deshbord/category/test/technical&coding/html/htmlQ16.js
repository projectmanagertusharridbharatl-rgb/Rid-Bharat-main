const questions = [
  {
    "num": 1,
    "question_en": "Which HTML5 element is used to define a document's head section?",
    "question_hi": "डॉक्यूमेंट के हेड सेक्शन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<head>", "<header>", "<top>", "<heading>"],
    "options_hi": ["<head>", "<header>", "<top>", "<heading>"],
    "answer_en": "<head>",
    "answer_hi": "<head>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which HTML5 element is used to define the document's body?",
    "question_hi": "डॉक्यूमेंट के बॉडी को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<body>", "<content>", "<main>", "<section>"],
    "options_hi": ["<body>", "<content>", "<main>", "<section>"],
    "answer_en": "<body>",
    "answer_hi": "<body>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which HTML5 element is used to define the document type?",
    "question_hi": "डॉक्यूमेंट टाइप को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<!DOCTYPE html>", "<html>", "<document>", "<doctype>"],
    "options_hi": ["<!DOCTYPE html>", "<html>", "<document>", "<doctype>"],
    "answer_en": "<!DOCTYPE html>",
    "answer_hi": "<!DOCTYPE html>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which HTML5 element is used to define the root of an HTML document?",
    "question_hi": "HTML डॉक्यूमेंट के रूट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<html>", "<root>", "<document>", "<page>"],
    "options_hi": ["<html>", "<root>", "<document>", "<page>"],
    "answer_en": "<html>",
    "answer_hi": "<html>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which HTML5 element is used to define a title for the document?",
    "question_hi": "डॉक्यूमेंट के लिए टाइटल डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<title>", "<heading>", "<name>", "<caption>"],
    "options_hi": ["<title>", "<heading>", "<name>", "<caption>"],
    "answer_en": "<title>",
    "answer_hi": "<title>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which HTML5 element is used to define metadata about the document?",
    "question_hi": "डॉक्यूमेंट के बारे में मेटाडेटा डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<meta>", "<data>", "<info>", "<metadata>"],
    "options_hi": ["<meta>", "<data>", "<info>", "<metadata>"],
    "answer_en": "<meta>",
    "answer_hi": "<meta>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which HTML5 element is used to define a link to an external resource?",
    "question_hi": "एक्सटर्नल रिसोर्स के लिंक को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<link>", "<a>", "<href>", "<external>"],
    "options_hi": ["<link>", "<a>", "<href>", "<external>"],
    "answer_en": "<link>",
    "answer_hi": "<link>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which HTML5 element is used to define a style for the document?",
    "question_hi": "डॉक्यूमेंट के लिए स्टाइल डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<style>", "<css>", "<design>", "<look>"],
    "options_hi": ["<style>", "<css>", "<design>", "<look>"],
    "answer_en": "<style>",
    "answer_hi": "<style>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTML5 element is used to define a script?",
    "question_hi": "स्क्रिप्ट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<script>", "<javascript>", "<code>", "<program>"],
    "options_hi": ["<script>", "<javascript>", "<code>", "<program>"],
    "answer_en": "<script>",
    "answer_hi": "<script>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which HTML5 element is used to define an inline frame?",
    "question_hi": "इनलाइन फ्रेम को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<iframe>", "<frame>", "<inline>", "<embed>"],
    "options_hi": ["<iframe>", "<frame>", "<inline>", "<embed>"],
    "answer_en": "<iframe>",
    "answer_hi": "<iframe>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which HTML5 element is used to define a form control for input?",
    "question_hi": "इनपुट के लिए फॉर्म कंट्रोल डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<input>", "<form>", "<control>", "<field>"],
    "options_hi": ["<input>", "<form>", "<control>", "<field>"],
    "answer_en": "<input>",
    "answer_hi": "<input>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which HTML5 element is used to define a button?",
    "question_hi": "बटन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<button>", "<btn>", "<click>", "<submit>"],
    "options_hi": ["<button>", "<btn>", "<click>", "<submit>"],
    "answer_en": "<button>",
    "answer_hi": "<button>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which HTML5 element is used to define a select list?",
    "question_hi": "सेलेक्ट लिस्ट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<select>", "<option>", "<list>", "<dropdown>"],
    "options_hi": ["<select>", "<option>", "<list>", "<dropdown>"],
    "answer_en": "<select>",
    "answer_hi": "<select>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which HTML5 element is used to define an option in a select list?",
    "question_hi": "सेलेक्ट लिस्ट में ऑप्शन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<option>", "<select>", "<item>", "<choice>"],
    "options_hi": ["<option>", "<select>", "<item>", "<choice>"],
    "answer_en": "<option>",
    "answer_hi": "<option>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which HTML5 element is used to define a text area?",
    "question_hi": "टेक्स्ट एरिया को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<textarea>", "<text>", "<input>", "<box>"],
    "options_hi": ["<textarea>", "<text>", "<input>", "<box>"],
    "answer_en": "<textarea>",
    "answer_hi": "<textarea>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
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
    "num": 17,
    "question_en": "Which HTML5 element is used to define a fieldset?",
    "question_hi": "फील्डसेट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<fieldset>", "<group>", "<form>", "<section>"],
    "options_hi": ["<fieldset>", "<group>", "<form>", "<section>"],
    "answer_en": "<fieldset>",
    "answer_hi": "<fieldset>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which HTML5 element is used to define a legend for a fieldset?",
    "question_hi": "फील्डसेट के लिए लीजेंड डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<legend>", "<title>", "<caption>", "<label>"],
    "options_hi": ["<legend>", "<title>", "<caption>", "<label>"],
    "answer_en": "<legend>",
    "answer_hi": "<legend>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which HTML5 element is used to define a table?",
    "question_hi": "टेबल को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<table>", "<grid>", "<data>", "<sheet>"],
    "options_hi": ["<table>", "<grid>", "<data>", "<sheet>"],
    "answer_en": "<table>",
    "answer_hi": "<table>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML5 element is used to define a table row?",
    "question_hi": "टेबल रो को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<tr>", "<row>", "<td>", "<line>"],
    "options_hi": ["<tr>", "<row>", "<td>", "<line>"],
    "answer_en": "<tr>",
    "answer_hi": "<tr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML5 element is used to define a table cell?",
    "question_hi": "टेबल सेल को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<td>", "<cell>", "<tr>", "<box>"],
    "options_hi": ["<td>", "<cell>", "<tr>", "<box>"],
    "answer_en": "<td>",
    "answer_hi": "<td>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which HTML5 element is used to define a table header cell?",
    "question_hi": "टेबल हेडर सेल को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<th>", "<header>", "<td>", "<head>"],
    "options_hi": ["<th>", "<header>", "<td>", "<head>"],
    "answer_en": "<th>",
    "answer_hi": "<th>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML5 element is used to define a table caption?",
    "question_hi": "टेबल कैप्शन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<caption>", "<title>", "<name>", "<label>"],
    "options_hi": ["<caption>", "<title>", "<name>", "<label>"],
    "answer_en": "<caption>",
    "answer_hi": "<caption>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which HTML5 element is used to define a table header?",
    "question_hi": "टेबल हेडर को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<thead>", "<header>", "<th>", "<top>"],
    "options_hi": ["<thead>", "<header>", "<th>", "<top>"],
    "answer_en": "<thead>",
    "answer_hi": "<thead>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which HTML5 element is used to define a table body?",
    "question_hi": "टेबल बॉडी को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<tbody>", "<body>", "<td>", "<content>"],
    "options_hi": ["<tbody>", "<body>", "<td>", "<content>"],
    "answer_en": "<tbody>",
    "answer_hi": "<tbody>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which HTML5 element is used to define a table footer?",
    "question_hi": "टेबल फूटर को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<tfoot>", "<footer>", "<bottom>", "<end>"],
    "options_hi": ["<tfoot>", "<footer>", "<bottom>", "<end>"],
    "answer_en": "<tfoot>",
    "answer_hi": "<tfoot>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which HTML5 element is used to define a list?",
    "question_hi": "लिस्ट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<ul> or <ol>", "<list>", "<li>", "<item>"],
    "options_hi": ["<ul> or <ol>", "<list>", "<li>", "<item>"],
    "answer_en": "<ul> or <ol>",
    "answer_hi": "<ul> or <ol>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which HTML5 element is used to define a list item?",
    "question_hi": "लिस्ट आइटम को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<li>", "<item>", "<list>", "<element>"],
    "options_hi": ["<li>", "<item>", "<list>", "<element>"],
    "answer_en": "<li>",
    "answer_hi": "<li>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML5 element is used to define a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<dl>", "<description>", "<list>", "<detail>"],
    "options_hi": ["<dl>", "<description>", "<list>", "<detail>"],
    "answer_en": "<dl>",
    "answer_hi": "<dl>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML5 element is used to define a term in a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में टर्म को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<dt>", "<term>", "<name>", "<title>"],
    "options_hi": ["<dt>", "<term>", "<name>", "<title>"],
    "answer_en": "<dt>",
    "answer_hi": "<dt>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which HTML5 element is used to define a description in a description list?",
    "question_hi": "डिस्क्रिप्शन लिस्ट में डिस्क्रिप्शन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<dd>", "<description>", "<detail>", "<info>"],
    "options_hi": ["<dd>", "<description>", "<detail>", "<info>"],
    "answer_en": "<dd>",
    "answer_hi": "<dd>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML5 element is used to define a division or section?",
    "question_hi": "डिवीजन या सेक्शन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<div>", "<section>", "<part>", "<area>"],
    "options_hi": ["<div>", "<section>", "<part>", "<area>"],
    "answer_en": "<div>",
    "answer_hi": "<div>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML5 element is used to define a span of text?",
    "question_hi": "टेक्स्ट के स्पैन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<span>", "<text>", "<inline>", "<part>"],
    "options_hi": ["<span>", "<text>", "<inline>", "<part>"],
    "answer_en": "<span>",
    "answer_hi": "<span>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML5 element is used to define a paragraph?",
    "question_hi": "पैराग्राफ को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<p>", "<para>", "<text>", "<content>"],
    "options_hi": ["<p>", "<para>", "<text>", "<content>"],
    "answer_en": "<p>",
    "answer_hi": "<p>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML5 element is used to define a heading?",
    "question_hi": "हेडिंग को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<h1> to <h6>", "<heading>", "<title>", "<head>"],
    "options_hi": ["<h1> to <h6>", "<heading>", "<title>", "<head>"],
    "answer_en": "<h1> to <h6>",
    "answer_hi": "<h1> to <h6>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML5 element is used to define a line break?",
    "question_hi": "लाइन ब्रेक को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<br>", "<break>", "<newline>", "<lb>"],
    "options_hi": ["<br>", "<break>", "<newline>", "<lb>"],
    "answer_en": "<br>",
    "answer_hi": "<br>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML5 element is used to define a horizontal rule?",
    "question_hi": "हॉरिजॉन्टल रूल को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<hr>", "<line>", "<rule>", "<separator>"],
    "options_hi": ["<hr>", "<line>", "<rule>", "<separator>"],
    "answer_en": "<hr>",
    "answer_hi": "<hr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML5 element is used to define a comment?",
    "question_hi": "कमेंट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<!-- -->", "<comment>", "<note>", "<remark>"],
    "options_hi": ["<!-- -->", "<comment>", "<note>", "<remark>"],
    "answer_en": "<!-- -->",
    "answer_hi": "<!-- -->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML5 element is used to define a hyperlink?",
    "question_hi": "हाइपरलिंक को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<a>", "<link>", "<href>", "<url>"],
    "options_hi": ["<a>", "<link>", "<href>", "<url>"],
    "answer_en": "<a>",
    "answer_hi": "<a>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML5 element is used to define an image?",
    "question_hi": "इमेज को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<img>", "<image>", "<picture>", "<photo>"],
    "options_hi": ["<img>", "<image>", "<picture>", "<photo>"],
    "answer_en": "<img>",
    "answer_hi": "<img>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML5 element is used to define a map area?",
    "question_hi": "मैप एरिया को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<area>", "<map>", "<section>", "<zone>"],
    "options_hi": ["<area>", "<map>", "<section>", "<zone>"],
    "answer_en": "<area>",
    "answer_hi": "<area>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML5 element is used to define a client-side image-map?",
    "question_hi": "क्लाइंट-साइड इमेज-मैप को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<map>", "<image>", "<area>", "<imagemap>"],
    "options_hi": ["<map>", "<image>", "<area>", "<imagemap>"],
    "answer_en": "<map>",
    "answer_hi": "<map>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML5 element is used to define a parameter for an object?",
    "question_hi": "ऑब्जेक्ट के लिए पैरामीटर डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<param>", "<parameter>", "<value>", "<setting>"],
    "options_hi": ["<param>", "<parameter>", "<value>", "<setting>"],
    "answer_en": "<param>",
    "answer_hi": "<param>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML5 element is used to define an embedded object?",
    "question_hi": "एम्बेडेड ऑब्जेक्ट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<object>", "<embed>", "<insert>", "<include>"],
    "options_hi": ["<object>", "<embed>", "<insert>", "<include>"],
    "answer_en": "<object>",
    "answer_hi": "<object>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML5 element is used to define embedded content?",
    "question_hi": "एम्बेडेड कंटेंट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<embed>", "<object>", "<include>", "<content>"],
    "options_hi": ["<embed>", "<object>", "<include>", "<content>"],
    "answer_en": "<embed>",
    "answer_hi": "<embed>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML5 element is used to define a caption for a figure?",
    "question_hi": "फिगर के लिए कैप्शन डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<figcaption>", "<caption>", "<title>", "<label>"],
    "options_hi": ["<figcaption>", "<caption>", "<title>", "<label>"],
    "answer_en": "<figcaption>",
    "answer_hi": "<figcaption>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML5 element is used to define a figure?",
    "question_hi": "फिगर को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<figure>", "<img>", "<picture>", "<illustration>"],
    "options_hi": ["<figure>", "<img>", "<picture>", "<illustration>"],
    "answer_en": "<figure>",
    "answer_hi": "<figure>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML5 element is used to define a details disclosure widget?",
    "question_hi": "डिटेल्स डिस्क्लोजर विजेट को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<details>", "<summary>", "<widget>", "<disclosure>"],
    "options_hi": ["<details>", "<summary>", "<widget>", "<disclosure>"],
    "answer_en": "<details>",
    "answer_hi": "<details>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML5 element is used to define a summary for details?",
    "question_hi": "डिटेल्स के लिए सारांश डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<summary>", "<details>", "<caption>", "<title>"],
    "options_hi": ["<summary>", "<details>", "<caption>", "<title>"],
    "answer_en": "<summary>",
    "answer_hi": "<summary>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML5 element is used to define a command button?",
    "question_hi": "कमांड बटन को डिफाइन करने के लिए कौन सा HTML5 एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<command>", "<button>", "<action>", "<control>"],
    "options_hi": ["<command>", "<button>", "<action>", "<control>"],
    "answer_en": "<command>",
    "answer_hi": "<command>",
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