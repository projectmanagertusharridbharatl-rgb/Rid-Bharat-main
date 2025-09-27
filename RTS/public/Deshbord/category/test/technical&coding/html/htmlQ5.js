const questions = [
  { num: 1, question: "1 Which tag is used to define an unordered list in HTML?", options: ["ul", "ol", "li", "dl"], answer: "ul", attempted: false, selected: "" },
  { num: 2, question: "2 Which HTML tag is used to define a table row?", options: ["tr", "td", "th", "table"], answer: "tr", attempted: false, selected: "" },
  { num: 3, question: "3 What does the <a> tag do in HTML?", options: ["Creates a hyperlink", "Adds an anchor", "Defines an article", "Applies alignment"], answer: "Creates a hyperlink", attempted: false, selected: "" },
  { num: 4, question: "4 What is the purpose of the alt attribute in the <img> tag?", options: ["Provides alternative text", "Applies alignment", "Sets image border", "Changes image size"], answer: "Provides alternative text", attempted: false, selected: "" },
  { num: 5, question: "5 Which tag is used for inserting a line break in HTML?", options: ["br", "hr", "break", "lb"], answer: "br", attempted: false, selected: "" },
  { num: 6, question: "6 Which HTML tag is used to define a table heading?", options: ["th", "tr", "td", "thead"], answer: "th", attempted: false, selected: "" },
  { num: 7, question: "7 What is the purpose of the <meta> tag?", options: ["Provides metadata", "Defines layout", "Embeds media", "Creates links"], answer: "Provides metadata", attempted: false, selected: "" },
  { num: 8, question: "8 Which tag is used to embed a video file in HTML5?", options: ["video", "media", "movie", "embed"], answer: "video", attempted: false, selected: "" },
  { num: 9, question: "9 What does the <head> element contain?", options: ["Metadata and links", "Page content", "Footer", "Body content"], answer: "Metadata and links", attempted: false, selected: "" },
  { num: 10, question: "10 Which input type is used to create a slider in a form?", options: ["range", "slider", "scroll", "scale"], answer: "range", attempted: false, selected: "" },
  { num: 11, question: "11 Which tag is used to define the largest heading?", options: ["h1", "h6", "head", "header"], answer: "h1", attempted: false, selected: "" },
  { num: 12, question: "12 Which tag is used to define a list item?", options: ["li", "ul", "ol", "item"], answer: "li", attempted: false, selected: "" },
  { num: 13, question: "13 What is the purpose of the <form> tag?", options: ["To collect user input", "To create a section", "To style text", "To define a table"], answer: "To collect user input", attempted: false, selected: "" },
  { num: 14, question: "14 Which HTML attribute specifies the destination of a link?", options: ["href", "src", "alt", "target"], answer: "href", attempted: false, selected: "" },
  { num: 15, question: "15 What does the <hr> tag create?", options: ["A horizontal line", "A heading", "A hyperlink", "A hidden row"], answer: "A horizontal line", attempted: false, selected: "" },
  { num: 16, question: "16 What is the purpose of the <button> element?", options: ["Creates a clickable button", "Creates a table", "Creates a list", "Creates a dropdown"], answer: "Creates a clickable button", attempted: false, selected: "" },
  { num: 17, question: "17 Which tag is used to display an image?", options: ["img", "src", "image", "pic"], answer: "img", attempted: false, selected: "" },
  { num: 18, question: "18 Which HTML attribute is used to define inline styles?", options: ["style", "class", "css", "font"], answer: "style", attempted: false, selected: "" },
  { num: 19, question: "19 Which HTML tag is used to define emphasized text?", options: ["em", "i", "strong", "mark"], answer: "em", attempted: false, selected: "" },
  { num: 20, question: "20 Which tag is used to group block-level and inline elements?", options: ["div", "span", "section", "group"], answer: "div", attempted: false, selected: "" },
  { num: 21, question: "21 What does the 'target' attribute do in anchor tags?", options: ["Opens link in a specific window", "Adds styles", "Validates links", "Disables links"], answer: "Opens link in a specific window", attempted: false, selected: "" },
  { num: 22, question: "22 Which tag defines emphasized text with semantic importance?", options: ["strong", "b", "mark", "i"], answer: "strong", attempted: false, selected: "" },
  { num: 23, question: "23 Which element defines short inline quotations?", options: ["q", "blockquote", "quote", "cite"], answer: "q", attempted: false, selected: "" },
  { num: 24, question: "24 Which tag is used to group form controls together?", options: ["fieldset", "legend", "group", "formset"], answer: "fieldset", attempted: false, selected: "" },
  { num: 25, question: "25 What tag is used for the caption of a table?", options: ["caption", "title", "summary", "head"], answer: "caption", attempted: false, selected: "" },
  { num: 26, question: "26 What attribute is used to specify the width of an <img>?", options: ["width", "size", "scale", "stretch"], answer: "width", attempted: false, selected: "" },
  { num: 27, question: "27 Which tag is used to embed audio content?", options: ["audio", "sound", "media", "embed"], answer: "audio", attempted: false, selected: "" },
  { num: 28, question: "28 What tag is used to define a navigation section?", options: ["nav", "menu", "ul", "section"], answer: "nav", attempted: false, selected: "" },
  { num: 29, question: "29 Which HTML tag is used to define a document type?", options: ["!DOCTYPE", "doctype", "html", "type"], answer: "!DOCTYPE", attempted: false, selected: "" },
  { num: 30, question: "30 Which tag contains the main content of a webpage?", options: ["body", "main", "content", "section"], answer: "body", attempted: false, selected: "" },
  { num: 31, question: "31 Which tag is used to define inline containers?", options: ["span", "div", "p", "label"], answer: "span", attempted: false, selected: "" },
  { num: 32, question: "32 What does the <label> tag do?", options: ["Defines label for input", "Creates a form", "Displays bold text", "Submits form"], answer: "Defines label for input", attempted: false, selected: "" },
  { num: 33, question: "33 Which input type creates a checkbox?", options: ["checkbox", "radio", "toggle", "box"], answer: "checkbox", attempted: false, selected: "" },
  { num: 34, question: "34 Which tag defines an HTML document?", options: ["html", "doc", "page", "doctype"], answer: "html", attempted: false, selected: "" },
  { num: 35, question: "35 Which tag is used for inserting an external CSS file?", options: ["link", "style", "css", "script"], answer: "link", attempted: false, selected: "" },
  { num: 36, question: "36 What does the <script> tag do?", options: ["Embeds JavaScript", "Styles content", "Defines layout", "Includes metadata"], answer: "Embeds JavaScript", attempted: false, selected: "" },
  { num: 37, question: "37 Which input type is used to collect email addresses?", options: ["email", "text", "url", "tel"], answer: "email", attempted: false, selected: "" },
  { num: 38, question: "38 Which tag defines a drop-down list?", options: ["select", "option", "dropdown", "input"], answer: "select", attempted: false, selected: "" },
  { num: 39, question: "39 Which HTML tag is used to define a footer?", options: ["footer", "bottom", "section", "end"], answer: "footer", attempted: false, selected: "" },
  { num: 40, question: "40 Which tag is used to define a block of text as a quotation?", options: ["blockquote", "quote", "cite", "text"], answer: "blockquote", attempted: false, selected: "" },
  { num: 41, question: "41 Which HTML tag displays computer code?", options: ["code", "samp", "kbd", "pre"], answer: "code", attempted: false, selected: "" },
  { num: 42, question: "42 Which input type is used to enter a password?", options: ["password", "text", "secure", "code"], answer: "password", attempted: false, selected: "" },
  { num: 43, question: "43 What does the <base> tag specify?", options: ["Base URL", "Base font", "Base style", "Default layout"], answer: "Base URL", attempted: false, selected: "" },
  { num: 44, question: "44 Which HTML element is used to specify a header for a section?", options: ["header", "head", "h1", "top"], answer: "header", attempted: false, selected: "" },
  { num: 45, question: "45 Which tag is used for user input keyboard entry?", options: ["kbd", "input", "key", "type"], answer: "kbd", attempted: false, selected: "" },
  { num: 46, question: "46 Which tag represents a short inline code snippet?", options: ["code", "kbd", "var", "samp"], answer: "code", attempted: false, selected: "" },
  { num: 47, question: "47 Which tag is used to define a container for graphics?", options: ["canvas", "svg", "img", "object"], answer: "canvas", attempted: false, selected: "" },
  { num: 48, question: "48 Which tag is used for content visible only in browsers with no JavaScript?", options: ["noscript", "alt", "fallback", "hidden"], answer: "noscript", attempted: false, selected: "" },
  { num: 49, question: "49 Which tag is used to specify a section in a document?", options: ["section", "div", "span", "main"], answer: "section", attempted: false, selected: "" },
  { num: 50, question: "50 What is the use of <title> tag?", options: ["Defines page title in browser tab", "Defines article name", "Creates heading", "Displays tooltip"], answer: "Defines page title in browser tab", attempted: false, selected: "" }
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
