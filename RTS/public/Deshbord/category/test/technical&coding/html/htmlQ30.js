const questions = [
  {
    "num": 1,
    "question_en": "What is the correct HTML element for inserting a line break?",
    "question_hi": "लाइन ब्रेक इन्सर्ट करने के लिए सही HTML एलिमेंट कौन सा है?",
    "options_en": ["<br>", "<lb>", "<break>", "<newline>"],
    "options_hi": ["<br>", "<lb>", "<break>", "<newline>"],
    "answer_en": "<br>",
    "answer_hi": "<br>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the correct HTML for adding a background color?",
    "question_hi": "बैकग्राउंड कलर जोड़ने के लिए सही HTML क्या है?",
    "options_en": ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<body bg='yellow'>", "<body color='yellow'>"],
    "options_hi": ["<body style='background-color:yellow;'>", "<background>yellow</background>", "<body bg='yellow'>", "<body color='yellow'>"],
    "answer_en": "<body style='background-color:yellow;'>",
    "answer_hi": "<body style='background-color:yellow;'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Choose the correct HTML element to define important text",
    "question_hi": "इम्पोर्टेन्ट टेक्स्ट डिफाइन करने के लिए सही HTML एलिमेंट चुनें",
    "options_en": ["<strong>", "<important>", "<b>", "<i>"],
    "options_hi": ["<strong>", "<important>", "<b>", "<i>"],
    "answer_en": "<strong>",
    "answer_hi": "<strong>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Choose the correct HTML element to define emphasized text",
    "question_hi": "एम्फेसाइज्ड टेक्स्ट डिफाइन करने के लिए सही HTML एलिमेंट चुनें",
    "options_en": ["<em>", "<italic>", "<i>", "<emphasis>"],
    "options_hi": ["<em>", "<italic>", "<i>", "<emphasis>"],
    "answer_en": "<em>",
    "answer_hi": "<em>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the correct HTML for creating a hyperlink?",
    "question_hi": "हाइपरलिंक बनाने के लिए सही HTML क्या है?",
    "options_en": ["<a href='http://www.example.com'>Example</a>", "<a url='http://www.example.com'>Example</a>", "<link href='http://www.example.com'>Example</link>", "<a>http://www.example.com</a>"],
    "options_hi": ["<a href='http://www.example.com'>Example</a>", "<a url='http://www.example.com'>Example</a>", "<link href='http://www.example.com'>Example</link>", "<a>http://www.example.com</a>"],
    "answer_en": "<a href='http://www.example.com'>Example</a>",
    "answer_hi": "<a href='http://www.example.com'>Example</a>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "How can you open a link in a new tab/browser window?",
    "question_hi": "आप लिंक को नई टैब/ब्राउज़र विंडो में कैसे खोल सकते हैं?",
    "options_en": ["<a href='url' target='_blank'>", "<a href='url' new>", "<a href='url' target='new'>", "<a href='url' tab='new'>"],
    "options_hi": ["<a href='url' target='_blank'>", "<a href='url' new>", "<a href='url' target='new'>", "<a href='url' tab='new'>"],
    "answer_en": "<a href='url' target='_blank'>",
    "answer_hi": "<a href='url' target='_blank'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which of these elements are all <table> elements?",
    "question_hi": "इनमें से कौन से सभी <table> एलिमेंट्स हैं?",
    "options_en": ["<table><tr><td>", "<table><head><tfoot>", "<table><tr><tt>", "<thead><body><tr>"],
    "options_hi": ["<table><tr><td>", "<table><head><tfoot>", "<table><tr><tt>", "<thead><body><tr>"],
    "answer_en": "<table><tr><td>",
    "answer_hi": "<table><tr><td>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Inline elements are normally displayed without starting a new line",
    "question_hi": "इनलाइन एलिमेंट्स आमतौर पर नई लाइन शुरू किए बिना डिस्प्ले होते हैं",
    "options_en": ["True", "False", "Depends on browser", "Only in mobile"],
    "options_hi": ["सही", "गलत", "ब्राउज़र पर निर्भर", "केवल मोबाइल में"],
    "answer_en": "True",
    "answer_hi": "सही",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "How can you make a numbered list?",
    "question_hi": "आप नंबर्ड लिस्ट कैसे बना सकते हैं?",
    "options_en": ["<ol>", "<ul>", "<list>", "<dl>"],
    "options_hi": ["<ol>", "<ul>", "<list>", "<dl>"],
    "answer_en": "<ol>",
    "answer_hi": "<ol>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "How can you make a bulleted list?",
    "question_hi": "आप बुलेटेड लिस्ट कैसे बना सकते हैं?",
    "options_en": ["<ul>", "<ol>", "<list>", "<bl>"],
    "options_hi": ["<ul>", "<ol>", "<list>", "<bl>"],
    "answer_en": "<ul>",
    "answer_hi": "<ul>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the correct HTML for making a checkbox?",
    "question_hi": "चेकबॉक्स बनाने के लिए सही HTML क्या है?",
    "options_en": ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<check>"],
    "options_hi": ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<check>"],
    "answer_en": "<input type='checkbox'>",
    "answer_hi": "<input type='checkbox'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the correct HTML for making a text input field?",
    "question_hi": "टेक्स्ट इनपुट फील्ड बनाने के लिए सही HTML क्या है?",
    "options_en": ["<input type='text'>", "<input type='textfield'>", "<textinput>", "<textfield>"],
    "options_hi": ["<input type='text'>", "<input type='textfield'>", "<textinput>", "<textfield>"],
    "answer_en": "<input type='text'>",
    "answer_hi": "<input type='text'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the correct HTML for making a drop-down list?",
    "question_hi": "ड्रॉप-डाउन लिस्ट बनाने के लिए सही HTML क्या है?",
    "options_en": ["<select>", "<list>", "<input type='dropdown'>", "<dropdown>"],
    "options_hi": ["<select>", "<list>", "<input type='dropdown'>", "<dropdown>"],
    "answer_en": "<select>",
    "answer_hi": "<select>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the correct HTML for making a text area?",
    "question_hi": "टेक्स्ट एरिया बनाने के लिए सही HTML क्या है?",
    "options_en": ["<textarea>", "<input type='textarea'>", "<input type='textbox'>", "<textbox>"],
    "options_hi": ["<textarea>", "<input type='textarea'>", "<input type='textbox'>", "<textbox>"],
    "answer_en": "<textarea>",
    "answer_hi": "<textarea>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the correct HTML for inserting an image?",
    "question_hi": "इमेज इन्सर्ट करने के लिए सही HTML क्या है?",
    "options_en": ["<img src='image.jpg' alt='MyImage'>", "<image src='image.jpg' alt='MyImage'>", "<img href='image.jpg' alt='MyImage'>", "<img alt='MyImage'>image.jpg</img>"],
    "options_hi": ["<img src='image.jpg' alt='MyImage'>", "<image src='image.jpg' alt='MyImage'>", "<img href='image.jpg' alt='MyImage'>", "<img alt='MyImage'>image.jpg</img>"],
    "answer_en": "<img src='image.jpg' alt='MyImage'>",
    "answer_hi": "<img src='image.jpg' alt='MyImage'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the correct HTML for inserting a background image?",
    "question_hi": "बैकग्राउंड इमेज इन्सर्ट करने के लिए सही HTML क्या है?",
    "options_en": ["<body style='background-image:url(image.jpg)'>", "<background img='image.jpg'>", "<body background='image.jpg'>", "<body bg='image.jpg'>"],
    "options_hi": ["<body style='background-image:url(image.jpg)'>", "<background img='image.jpg'>", "<body background='image.jpg'>", "<body bg='image.jpg'>"],
    "answer_en": "<body style='background-image:url(image.jpg)'>",
    "answer_hi": "<body style='background-image:url(image.jpg)'>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "An <iframe> is used to display a web page within a web page",
    "question_hi": "एक <iframe> का उपयोग वेब पेज के अंदर वेब पेज डिस्प्ले करने के लिए किया जाता है",
    "options_en": ["True", "False", "Only for videos", "Only for ads"],
    "options_hi": ["सही", "गलत", "केवल वीडियो के लिए", "केवल एड्स के लिए"],
    "answer_en": "True",
    "answer_hi": "सही",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "HTML comments start with <!-- and end with -->",
    "question_hi": "HTML कमेंट्स <!-- से शुरू होते हैं और --> के साथ खत्म होते हैं",
    "options_en": ["True", "False", "Only in HTML5", "Depends on doctype"],
    "options_hi": ["सही", "गलत", "केवल HTML5 में", "DOCTYPE पर निर्भर"],
    "answer_en": "True",
    "answer_hi": "सही",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Block-level elements normally start on a new line",
    "question_hi": "ब्लॉक-लेवल एलिमेंट्स आमतौर पर नई लाइन पर शुरू होते हैं",
    "options_en": ["True", "False", "Only in tables", "Only in forms"],
    "options_hi": ["सही", "गलत", "केवल टेबल्स में", "केवल फॉर्म्स में"],
    "answer_en": "True",
    "answer_hi": "सही",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which HTML element defines the title of a document?",
    "question_hi": "कौन सा HTML एलिमेंट डॉक्यूमेंट का टाइटल डिफाइन करता है?",
    "options_en": ["<title>", "<head>", "<meta>", "<header>"],
    "options_hi": ["<title>", "<head>", "<meta>", "<header>"],
    "answer_en": "<title>",
    "answer_hi": "<title>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which HTML attribute specifies an alternate text for an image?",
    "question_hi": "कौन सा HTML एट्रिब्यूट इमेज के लिए ऑल्टरनेट टेक्स्ट स्पेसिफाई करता है?",
    "options_en": ["alt", "title", "src", "longdesc"],
    "options_hi": ["alt", "title", "src", "longdesc"],
    "answer_en": "alt",
    "answer_hi": "alt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which doctype is correct for HTML5?",
    "question_hi": "HTML5 के लिए कौन सा DOCTYPE सही है?",
    "options_en": ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<!DOCTYPE HTML PUBLIC>", "<HTML>"],
    "options_hi": ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<!DOCTYPE HTML PUBLIC>", "<HTML>"],
    "answer_en": "<!DOCTYPE html>",
    "answer_hi": "<!DOCTYPE html>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which HTML element is used to specify a footer for a document?",
    "question_hi": "डॉक्यूमेंट के लिए फूटर स्पेसिफाई करने के लिए कौन सा HTML एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<footer>", "<bottom>", "<section>", "<div>"],
    "options_hi": ["<footer>", "<bottom>", "<section>", "<div>"],
    "answer_en": "<footer>",
    "answer_hi": "<footer>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the correct HTML element for playing video files?",
    "question_hi": "वीडियो फाइल्स प्ले करने के लिए सही HTML एलिमेंट कौन सा है?",
    "options_en": ["<video>", "<media>", "<movie>", "<embed>"],
    "options_hi": ["<video>", "<media>", "<movie>", "<embed>"],
    "answer_en": "<video>",
    "answer_hi": "<video>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the correct HTML element for playing audio files?",
    "question_hi": "ऑडियो फाइल्स प्ले करने के लिए सही HTML एलिमेंट कौन सा है?",
    "options_en": ["<audio>", "<sound>", "<mp3>", "<media>"],
    "options_hi": ["<audio>", "<sound>", "<mp3>", "<media>"],
    "answer_en": "<audio>",
    "answer_hi": "<audio>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The HTML global attribute 'contenteditable' is used to:",
    "question_hi": "HTML ग्लोबल एट्रिब्यूट 'contenteditable' का उपयोग किया जाता है:",
    "options_en": ["Specify whether the content is editable or not", "Update content from server", "Specify the content type", "Make content responsive"],
    "options_hi": ["स्पेसिफाई करने के लिए कि कंटेंट एडिटेबल है या नहीं", "सर्वर से कंटेंट अपडेट करने के लिए", "कंटेंट टाइप स्पेसिफाई करने के लिए", "कंटेंट को रिस्पॉन्सिव बनाने के लिए"],
    "answer_en": "Specify whether the content is editable or not",
    "answer_hi": "स्पेसिफाई करने के लिए कि कंटेंट एडिटेबल है या नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "In HTML, which attribute is used to specify that an input field must be filled out?",
    "question_hi": "HTML में, कौन सा एट्रिब्यूट यह स्पेसिफाई करने के लिए उपयोग किया जाता है कि इनपुट फील्ड भरा जाना चाहिए?",
    "options_en": ["required", "validate", "placeholder", "important"],
    "options_hi": ["required", "validate", "placeholder", "important"],
    "answer_en": "required",
    "answer_hi": "required",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which input type defines a slider control?",
    "question_hi": "कौन सा इनपुट टाइप स्लाइडर कंट्रोल डिफाइन करता है?",
    "options_en": ["range", "slider", "search", "number"],
    "options_hi": ["range", "slider", "search", "number"],
    "answer_en": "range",
    "answer_hi": "range",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which HTML element is used to specify a header for a document?",
    "question_hi": "डॉक्यूमेंट के लिए हेडर स्पेसिफाई करने के लिए कौन सा HTML एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<header>", "<head>", "<top>", "<heading>"],
    "options_hi": ["<header>", "<head>", "<top>", "<heading>"],
    "answer_en": "<header>",
    "answer_hi": "<header>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which HTML element defines navigation links?",
    "question_hi": "कौन सा HTML एलिमेंट नेविगेशन लिंक्स डिफाइन करता है?",
    "options_en": ["<nav>", "<navigation>", "<navigate>", "<links>"],
    "options_hi": ["<nav>", "<navigation>", "<navigate>", "<links>"],
    "answer_en": "<nav>",
    "answer_hi": "<nav>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "In HTML, what does the <aside> element define?",
    "question_hi": "HTML में, <aside> एलिमेंट क्या डिफाइन करता है?",
    "options_en": ["Content aside from the page content", "A sidebar", "Additional information", "All of the above"],
    "options_hi": ["पेज कंटेंट के अलावा कंटेंट", "एक साइडबार", "अतिरिक्त जानकारी", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which HTML element is used to specify a section of a document?",
    "question_hi": "डॉक्यूमेंट के सेक्शन को स्पेसिफाई करने के लिए कौन सा HTML एलिमेंट उपयोग किया जाता है?",
    "options_en": ["<section>", "<div>", "<article>", "<span>"],
    "options_hi": ["<section>", "<div>", "<article>", "<span>"],
    "answer_en": "<section>",
    "answer_hi": "<section>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which HTML element defines the main content of a document?",
    "question_hi": "कौन सा HTML एलिमेंट डॉक्यूमेंट के मेन कंटेंट को डिफाइन करता है?",
    "options_en": ["<main>", "<content>", "<body>", "<section>"],
    "options_hi": ["<main>", "<content>", "<body>", "<section>"],
    "answer_en": "<main>",
    "answer_hi": "<main>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which HTML element defines a thematic break?",
    "question_hi": "कौन सा HTML एलिमेंट एक थीमेटिक ब्रेक डिफाइन करता है?",
    "options_en": ["<hr>", "<br>", "<break>", "<theme>"],
    "options_hi": ["<hr>", "<br>", "<break>", "<theme>"],
    "answer_en": "<hr>",
    "answer_hi": "<hr>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTML element defines a description list?",
    "question_hi": "कौन सा HTML एलिमेंट एक डिस्क्रिप्शन लिस्ट डिफाइन करता है?",
    "options_en": ["<dl>", "<dt>", "<dd>", "<description>"],
    "options_hi": ["<dl>", "<dt>", "<dd>", "<description>"],
    "answer_en": "<dl>",
    "answer_hi": "<dl>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which HTML element defines a caption for a figure?",
    "question_hi": "कौन सा HTML एलिमेंट फिगर के लिए कैप्शन डिफाइन करता है?",
    "options_en": ["<figcaption>", "<caption>", "<figure>", "<imgcaption>"],
    "options_hi": ["<figcaption>", "<caption>", "<figure>", "<imgcaption>"],
    "answer_en": "<figcaption>",
    "answer_hi": "<figcaption>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which HTML element defines a progress bar?",
    "question_hi": "कौन सा HTML एलिमेंट प्रोग्रेस बार डिफाइन करता है?",
    "options_en": ["<progress>", "<meter>", "<bar>", "<loading>"],
    "options_hi": ["<progress>", "<meter>", "<bar>", "<loading>"],
    "answer_en": "<progress>",
    "answer_hi": "<progress>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which HTML element defines a scalar measurement?",
    "question_hi": "कौन सा HTML एलिमेंट स्केलर मेजरमेंट डिफाइन करता है?",
    "options_en": ["<meter>", "<progress>", "<range>", "<measure>"],
    "options_hi": ["<meter>", "<progress>", "<range>", "<measure>"],
    "answer_en": "<meter>",
    "answer_hi": "<meter>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which HTML element defines a dialog box?",
    "question_hi": "कौन सा HTML एलिमेंट डायलॉग बॉक्स डिफाइन करता है?",
    "options_en": ["<dialog>", "<modal>", "<popup>", "<window>"],
    "options_hi": ["<dialog>", "<modal>", "<popup>", "<window>"],
    "answer_en": "<dialog>",
    "answer_hi": "<dialog>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which HTML element defines a summary for details?",
    "question_hi": "कौन सा HTML एलिमेंट डिटेल्स के लिए सारांश डिफाइन करता है?",
    "options_en": ["<summary>", "<details>", "<caption>", "<title>"],
    "options_hi": ["<summary>", "<details>", "<caption>", "<title>"],
    "answer_en": "<summary>",
    "answer_hi": "<summary>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which HTML element defines a command/menu item?",
    "question_hi": "कौन सा HTML एलिमेंट कमांड/मेन्यू आइटम डिफाइन करता है?",
    "options_en": ["<command>", "<menu>", "<item>", "<button>"],
    "options_hi": ["<command>", "<menu>", "<item>", "<button>"],
    "answer_en": "<command>",
    "answer_hi": "<command>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which HTML element defines a ruby annotation?",
    "question_hi": "कौन सा HTML एलिमेंट रूबी एनोटेशन डिफाइन करता है?",
    "options_en": ["<ruby>", "<annotation>", "<rt>", "<rp>"],
    "options_hi": ["<ruby>", "<annotation>", "<rt>", "<rp>"],
    "answer_en": "<ruby>",
    "answer_hi": "<ruby>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which HTML element defines a track for media?",
    "question_hi": "कौन सा HTML एलिमेंट मीडिया के लिए ट्रैक डिफाइन करता है?",
    "options_en": ["<track>", "<source>", "<media>", "<audio>"],
    "options_hi": ["<track>", "<source>", "<media>", "<audio>"],
    "answer_en": "<track>",
    "answer_hi": "<track>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which HTML element defines a source for media?",
    "question_hi": "कौन सा HTML एलिमेंट मीडिया के लिए सोर्स डिफाइन करता है?",
    "options_en": ["<source>", "<src>", "<media>", "<video>"],
    "options_hi": ["<source>", "<src>", "<media>", "<video>"],
    "answer_en": "<source>",
    "answer_hi": "<source>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which HTML element defines a container for external content?",
    "question_hi": "कौन सा HTML एलिमेंट एक्सटर्नल कंटेंट के लिए कंटेनर डिफाइन करता है?",
    "options_en": ["<embed>", "<object>", "<iframe>", "<external>"],
    "options_hi": ["<embed>", "<object>", "<iframe>", "<external>"],
    "answer_en": "<embed>",
    "answer_hi": "<embed>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which HTML element defines a container for an external application?",
    "question_hi": "एक्सटर्नल एप्लिकेशन के लिए कंटेनर डिफाइन करने वाला HTML एलिमेंट कौन सा है?",
    "options_en": ["<object>", "<embed>", "<app>", "<external>"],
    "options_hi": ["<object>", "<embed>", "<app>", "<external>"],
    "answer_en": "<object>",
    "answer_hi": "<object>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTML element defines a parameter for an object?",
    "question_hi": "ऑब्जेक्ट के लिए पैरामीटर डिफाइन करने वाला HTML एलिमेंट कौन सा है?",
    "options_en": ["<param>", "<parameter>", "<value>", "<object>"],
    "options_hi": ["<param>", "<parameter>", "<value>", "<object>"],
    "answer_en": "<param>",
    "answer_hi": "<param>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which HTML element defines a section in a document?",
    "question_hi": "डॉक्यूमेंट में सेक्शन डिफाइन करने वाला HTML एलिमेंट कौन सा है?",
    "options_en": ["<section>", "<div>", "<article>", "<span>"],
    "options_hi": ["<section>", "<div>", "<article>", "<span>"],
    "answer_en": "<section>",
    "answer_hi": "<section>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which HTML element defines a group of related options?",
    "question_hi": "संबंधित ऑप्शन्स के ग्रुप को डिफाइन करने वाला HTML एलिमेंट कौन सा है?",
    "options_en": ["<optgroup>", "<option>", "<select>", "<group>"],
    "options_hi": ["<optgroup>", "<option>", "<select>", "<group>"],
    "answer_en": "<optgroup>",
    "answer_hi": "<optgroup>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which HTML element defines a key-pair generator field?",
    "question_hi": "की-पेयर जेनरेटर फील्ड डिफाइन करने वाला HTML एलिमेंट कौन सा है?",
    "options_en": ["<keygen>", "<key>", "<generate>", "<password>"],
    "options_hi": ["<keygen>", "<key>", "<generate>", "<password>"],
    "answer_en": "<keygen>",
    "answer_hi": "<keygen>",
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