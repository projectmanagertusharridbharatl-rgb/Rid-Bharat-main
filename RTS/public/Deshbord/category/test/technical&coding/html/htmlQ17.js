const questions = [
  { num: 1, question: "1 What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Mark Language", "Hyperlinking Text Mark Language"], answer: "Hyper Text Markup Language", attempted: false, selected: "" },
  { num: 2, question: "2 Which tag is used to create a hyperlink in HTML?", options: ["a", "link", "href", "hyperlink"], answer: "a", attempted: false, selected: "" },
  { num: 3, question: "3 What is the correct HTML element for inserting a line break?", options: ["<br>", "<break>", "<lb>", "<linebreak>"], answer: "<br>", attempted: false, selected: "" },
  { num: 4, question: "4 Which attribute is used to provide an alternate text for an image?", options: ["alt", "src", "title", "longdesc"], answer: "alt", attempted: false, selected: "" },
  { num: 5, question: "5 Which tag is used to create an unordered list?", options: ["ul", "ol", "li", "list"], answer: "ul", attempted: false, selected: "" },
  { num: 6, question: "6 How do you create a numbered list in HTML?", options: ["ol", "ul", "list", "nl"], answer: "ol", attempted: false, selected: "" },
  { num: 7, question: "7 What does the <title> tag define?", options: ["The title of the document", "A heading", "A subtitle", "A tooltip"], answer: "The title of the document", attempted: false, selected: "" },
  { num: 8, question: "8 Which tag is used to add a paragraph?", options: ["p", "para", "pg", "text"], answer: "p", attempted: false, selected: "" },
  { num: 9, question: "9 Which attribute is used to specify the URL in a link?", options: ["href", "src", "link", "url"], answer: "href", attempted: false, selected: "" },
  { num: 10, question: "10 How do you insert a comment in HTML?", options: ["<!-- Comment -->", "// Comment", "' Comment", "/* Comment */"], answer: "<!-- Comment -->", attempted: false, selected: "" },
  { num: 11, question: "11 What is the correct HTML element to define important text?", options: ["strong", "important", "b", "i"], answer: "strong", attempted: false, selected: "" },
  { num: 12, question: "12 Which tag is used to define a table row?", options: ["tr", "td", "table", "th"], answer: "tr", attempted: false, selected: "" },
  { num: 13, question: "13 Which tag defines a table cell?", options: ["td", "tr", "th", "table"], answer: "td", attempted: false, selected: "" },
  { num: 14, question: "14 What tag is used to define a table header?", options: ["th", "td", "tr", "table"], answer: "th", attempted: false, selected: "" },
  { num: 15, question: "15 How do you create a checkbox in HTML?", options: ["input type='checkbox'", "input type='check'", "checkbox", "input type='box'"], answer: "input type='checkbox'", attempted: false, selected: "" },
  { num: 16, question: "16 Which tag is used to embed an image?", options: ["img", "image", "src", "picture"], answer: "img", attempted: false, selected: "" },
  { num: 17, question: "17 What is the correct attribute to open a link in a new tab?", options: ["target='_blank'", "newtab='true'", "open='new'", "target='new'"], answer: "target='_blank'", attempted: false, selected: "" },
  { num: 18, question: "18 How do you make text bold in HTML?", options: ["b", "bold", "strong", "em"], answer: "b", attempted: false, selected: "" },
  { num: 19, question: "19 Which element is used to emphasize text?", options: ["em", "strong", "italic", "i"], answer: "em", attempted: false, selected: "" },
  { num: 20, question: "20 How do you create a dropdown list in HTML?", options: ["select", "dropdown", "list", "option"], answer: "select", attempted: false, selected: "" },
  { num: 21, question: "21 Which tag is used to define a footer for a document or section?", options: ["footer", "foot", "section", "bottom"], answer: "footer", attempted: false, selected: "" },
  { num: 22, question: "22 How do you insert an image that is a link?", options: ["<a href='url'><img src='img.jpg'></a>", "<img href='url' src='img.jpg'>", "<link img='img.jpg' href='url'>", "<img src='img.jpg' link='url'>"], answer: "<a href='url'><img src='img.jpg'></a>", attempted: false, selected: "" },
  { num: 23, question: "23 What does the 'src' attribute specify in an <img> tag?", options: ["Image source URL", "Alternate text", "Image title", "Image size"], answer: "Image source URL", attempted: false, selected: "" },
  { num: 24, question: "24 Which tag is used to define a division or section in HTML?", options: ["div", "section", "article", "span"], answer: "div", attempted: false, selected: "" },
  { num: 25, question: "25 How do you create a hyperlink that links to an email address?", options: ["mailto:example@example.com", "email:example@example.com", "linkto:example@example.com", "href:example@example.com"], answer: "mailto:example@example.com", attempted: false, selected: "" },
  { num: 26, question: "26 Which element is used to specify a caption for an image?", options: ["figcaption", "caption", "title", "alt"], answer: "figcaption", attempted: false, selected: "" },
  { num: 27, question: "27 How do you define a section in an HTML document?", options: ["section", "div", "article", "segment"], answer: "section", attempted: false, selected: "" },
  { num: 28, question: "28 Which tag is used to define a form in HTML?", options: ["form", "input", "fieldset", "label"], answer: "form", attempted: false, selected: "" },
  { num: 29, question: "29 What is the purpose of the <head> element?", options: ["Contains metadata about the document", "Contains the main content", "Defines footer", "Defines header"], answer: "Contains metadata about the document", attempted: false, selected: "" },
  { num: 30, question: "30 How do you specify the language of an HTML document?", options: ["<html lang='en'>", "<html language='en'>", "<html code='en'>", "<html locale='en'>"], answer: "<html lang='en'>", attempted: false, selected: "" },
  { num: 31, question: "31 Which tag is used to define a navigation bar?", options: ["nav", "menu", "navigation", "navbar"], answer: "nav", attempted: false, selected: "" },
  { num: 32, question: "32 How do you create a radio button in HTML?", options: ["input type='radio'", "input type='checkbox'", "input type='button'", "input type='select'"], answer: "input type='radio'", attempted: false, selected: "" },
  { num: 33, question: "33 Which tag defines a section heading?", options: ["h1", "head", "header", "heading"], answer: "h1", attempted: false, selected: "" },
  { num: 34, question: "34 What is the default display property of the <span> element?", options: ["inline", "block", "inline-block", "none"], answer: "inline", attempted: false, selected: "" },
  { num: 35, question: "35 How do you add a background color to an element in HTML?", options: ["Using the style attribute", "Using the bgcolor attribute", "Using the color attribute", "Using the background attribute"], answer: "Using the style attribute", attempted: false, selected: "" },
  { num: 36, question: "36 Which tag is used to define a clickable button?", options: ["button", "input", "a", "div"], answer: "button", attempted: false, selected: "" },
  { num: 37, question: "37 What is the correct HTML element for playing audio files?", options: ["audio", "sound", "music", "media"], answer: "audio", attempted: false, selected: "" },
  { num: 38, question: "38 How do you link an external CSS file to an HTML document?", options: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<css link='style.css'>", "<style href='style.css'>"], answer: "<link rel='stylesheet' href='style.css'>", attempted: false, selected: "" },
  { num: 39, question: "39 Which attribute specifies the text direction in HTML?", options: ["dir", "lang", "textdir", "direction"], answer: "dir", attempted: false, selected: "" },
  { num: 40, question: "40 How do you define a section that is not related to the main content?", options: ["aside", "section", "article", "footer"], answer: "aside", attempted: false, selected: "" },
  { num: 41, question: "41 What tag is used to define a list item?", options: ["li", "list", "item", "ul"], answer: "li", attempted: false, selected: "" },
  { num: 42, question: "42 Which attribute is used to control the size of an input field?", options: ["size", "length", "width", "height"], answer: "size", attempted: false, selected: "" },
  { num: 43, question: "43 Which element is used to group related elements in a form?", options: ["fieldset", "form", "div", "section"], answer: "fieldset", attempted: false, selected: "" },
  { num: 44, question: "44 How do you specify the character set in an HTML document?", options: ["<meta charset='UTF-8'>", "<meta charset='utf-8'>", "<meta charset='UTF8'>", "<meta charset='utf8'>"], answer: "<meta charset='UTF-8'>", attempted: false, selected: "" },
  { num: 45, question: "45 Which element is used to display a picture caption?", options: ["figcaption", "caption", "imagecaption", "piccaption"], answer: "figcaption", attempted: false, selected: "" },
  { num: 46, question: "46 How do you add a horizontal line in HTML?", options: ["hr", "line", "hl", "break"], answer: "hr", attempted: false, selected: "" },
  { num: 47, question: "47 Which tag defines the body of the HTML document?", options: ["body", "head", "html", "main"], answer: "body", attempted: false, selected: "" },
  { num: 48, question: "48 How do you create a hyperlink to an anchor within the same page?", options: ["#anchorname", "anchorname", "link=anchorname", "href=anchorname"], answer: "#anchorname", attempted: false, selected: "" },
  { num: 49, question: "49 Which attribute specifies the destination of a form submission?", options: ["action", "method", "target", "href"], answer: "action", attempted: false, selected: "" },
  { num: 50, question: "50 How do you specify an email input field in a form?", options: ["input type='email'", "input type='text'", "input type='mail'", "input type='address'"], answer: "input type='email'", attempted: false, selected: "" }
];

    let currentQuestion = 0;

        function loadQuestion(index) {
            document.getElementById("question").textContent = questions[index].question;
            document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;
            const optionsElement = document.getElementById("options");
            optionsElement.innerHTML = "";
            questions[index].options.forEach(option => {
                optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
            });
            updateCircles();
        }

        function markAttempted(index, selectedAnswer) {
            questions[index].
            questions[index].selected = selectedAnswer;
            updateCircles();
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

        function updateCircles() {
            const circleContainer = document.getElementById("circleContainer");
            circleContainer.innerHTML = "";
            questions.forEach((q, i) => {
                let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
                circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
            });
        }

        function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };