const questions = [
  { num: 1, question: "1 Which tag is used to define an HTML document's body?", options: ["body", "html", "main", "section"], answer: "body", attempted: false, selected: "" },
  { num: 2, question: "2 What does the <html> tag represent?", options: ["Root of an HTML document", "A heading", "A paragraph", "A hyperlink"], answer: "Root of an HTML document", attempted: false, selected: "" },
  { num: 3, question: "3 Which tag is used to define metadata in an HTML document?", options: ["meta", "data", "info", "head"], answer: "meta", attempted: false, selected: "" },
  { num: 4, question: "4 Which tag is used to define a footer for a document?", options: ["footer", "bottom", "foot", "section"], answer: "footer", attempted: false, selected: "" },
  { num: 5, question: "5 Which element defines a container for navigation links?", options: ["nav", "menu", "navigate", "link"], answer: "nav", attempted: false, selected: "" },
  { num: 6, question: "6 Which tag is used to embed external CSS?", options: ["link", "style", "css", "script"], answer: "link", attempted: false, selected: "" },
  { num: 7, question: "7 Which tag is used to embed internal CSS?", options: ["style", "css", "link", "script"], answer: "style", attempted: false, selected: "" },
  { num: 8, question: "8 Which HTML element is used to play audio files?", options: ["audio", "sound", "music", "media"], answer: "audio", attempted: false, selected: "" },
  { num: 9, question: "9 What is the correct HTML for creating a radio button?", options: ["input type='radio'", "radio", "input type='button'", "radiobox"], answer: "input type='radio'", attempted: false, selected: "" },
  { num: 10, question: "10 Which tag defines inline text style?", options: ["span", "div", "style", "section"], answer: "span", attempted: false, selected: "" },
  { num: 11, question: "11 Which tag is used to define a container block?", options: ["div", "span", "block", "group"], answer: "div", attempted: false, selected: "" },
  { num: 12, question: "12 What tag is used for inserting JavaScript into HTML?", options: ["script", "js", "javascript", "code"], answer: "script", attempted: false, selected: "" },
  { num: 13, question: "13 Which attribute is used to link a stylesheet?", options: ["href", "src", "link", "style"], answer: "href", attempted: false, selected: "" },
  { num: 14, question: "14 Which tag is used for adding a tooltip to an element?", options: ["title", "tooltip", "info", "hint"], answer: "title", attempted: false, selected: "" },
  { num: 15, question: "15 Which attribute is used to specify the language of the document?", options: ["lang", "language", "xml:lang", "doclang"], answer: "lang", attempted: false, selected: "" },
  { num: 16, question: "16 What does the 'target' attribute in <a> tag define?", options: ["Where to open the link", "Font style", "Link color", "Destination title"], answer: "Where to open the link", attempted: false, selected: "" },
  { num: 17, question: "17 Which input type creates a calendar control?", options: ["date", "calendar", "day", "time"], answer: "date", attempted: false, selected: "" },
  { num: 18, question: "18 What is the use of the <br> tag?", options: ["Line break", "Bold text", "Blockquote", "Section end"], answer: "Line break", attempted: false, selected: "" },
  { num: 19, question: "19 Which element is used to define a form?", options: ["form", "input", "fieldset", "div"], answer: "form", attempted: false, selected: "" },
  { num: 20, question: "20 Which tag is used to define an image map?", options: ["map", "imagemap", "area", "usemap"], answer: "map", attempted: false, selected: "" },
  { num: 21, question: "21 Which tag defines an option in a drop-down list?", options: ["option", "choice", "select", "dropdown"], answer: "option", attempted: false, selected: "" },
  { num: 22, question: "22 What attribute disables a form control?", options: ["disabled", "readonly", "hide", "disable"], answer: "disabled", attempted: false, selected: "" },
  { num: 23, question: "23 What does the 'maxlength' attribute specify?", options: ["Maximum length of input", "Width of input", "Font size", "Line height"], answer: "Maximum length of input", attempted: false, selected: "" },
  { num: 24, question: "24 What is the function of the <base> tag?", options: ["Sets base URL", "Defines a base layout", "Adds a background", "Changes font"], answer: "Sets base URL", attempted: false, selected: "" },
  { num: 25, question: "25 Which tag defines a title for a fieldset?", options: ["legend", "label", "caption", "title"], answer: "legend", attempted: false, selected: "" },
  { num: 26, question: "26 Which tag represents machine-readable information?", options: ["meta", "code", "data", "info"], answer: "meta", attempted: false, selected: "" },
  { num: 27, question: "27 What does <abbr> tag define?", options: ["Abbreviation", "Address", "Anchor", "Application"], answer: "Abbreviation", attempted: false, selected: "" },
  { num: 28, question: "28 Which element is used to define a block of code?", options: ["pre", "div", "section", "span"], answer: "pre", attempted: false, selected: "" },
  { num: 29, question: "29 What is the function of the <noscript> tag?", options: ["Display message if JS disabled", "Disable script", "Write comments", "Skip scripts"], answer: "Display message if JS disabled", attempted: false, selected: "" },
  { num: 30, question: "30 Which input type is used for passwords?", options: ["password", "text", "secure", "hidden"], answer: "password", attempted: false, selected: "" },
  { num: 31, question: "31 Which tag defines highlighted text?", options: ["mark", "highlight", "strong", "color"], answer: "mark", attempted: false, selected: "" },
  { num: 32, question: "32 What does the <bdo> tag do?", options: ["Overrides text direction", "Bold text", "Defines block object", "Opens modal"], answer: "Overrides text direction", attempted: false, selected: "" },
  { num: 33, question: "33 Which attribute defines placeholder text in input?", options: ["placeholder", "hint", "default", "value"], answer: "placeholder", attempted: false, selected: "" },
  { num: 34, question: "34 What does the <address> tag provide?", options: ["Contact info", "Map", "Postcode", "Email field"], answer: "Contact info", attempted: false, selected: "" },
  { num: 35, question: "35 Which tag is used to add a progress bar?", options: ["progress", "bar", "range", "load"], answer: "progress", attempted: false, selected: "" },
  { num: 36, question: "36 What is the role of <details> tag?", options: ["Creates expandable details", "Adds summary", "Shows script logs", "Adds footer"], answer: "Creates expandable details", attempted: false, selected: "" },
  { num: 37, question: "37 What tag defines the summary for a <details> element?", options: ["summary", "caption", "note", "title"], answer: "summary", attempted: false, selected: "" },
  { num: 38, question: "38 Which input type is used for email validation?", options: ["email", "text", "address", "mail"], answer: "email", attempted: false, selected: "" },
  { num: 39, question: "39 What does the <time> tag represent?", options: ["A specific time or date", "Timer", "Clock widget", "Timestamp ID"], answer: "A specific time or date", attempted: false, selected: "" },
  { num: 40, question: "40 Which element is used for user input content?", options: ["input", "form", "textarea", "entry"], answer: "input", attempted: false, selected: "" },
  { num: 41, question: "41 Which tag groups header content?", options: ["header", "top", "title", "main"], answer: "header", attempted: false, selected: "" },
  { num: 42, question: "42 What is the role of the <canvas> tag?", options: ["Draw graphics via JS", "Display image", "Embed video", "Create chart"], answer: "Draw graphics via JS", attempted: false, selected: "" },
  { num: 43, question: "43 Which element is used for mathematical formulas?", options: ["math", "calc", "equation", "formula"], answer: "math", attempted: false, selected: "" },
  { num: 44, question: "44 Which tag is used to add a line through text?", options: ["s", "strike", "del", "remove"], answer: "s", attempted: false, selected: "" },
  { num: 45, question: "45 What does <wbr> tag provide?", options: ["Optional line break", "Word break", "New row", "Page reset"], answer: "Optional line break", attempted: false, selected: "" },
  { num: 46, question: "46 Which tag represents an output field?", options: ["output", "result", "print", "show"], answer: "output", attempted: false, selected: "" },
  { num: 47, question: "47 Which tag is used to indicate inserted content?", options: ["ins", "insert", "add", "mark"], answer: "ins", attempted: false, selected: "" },
  { num: 48, question: "48 What is the purpose of <del> tag?", options: ["Shows deleted content", "Removes element", "Hides line", "Strikes link"], answer: "Shows deleted content", attempted: false, selected: "" },
  { num: 49, question: "49 What does <dfn> tag represent?", options: ["Defines a definition", "Bold text", "Defines a function", "Fixes layout"], answer: "Defines a definition", attempted: false, selected: "" },
  { num: 50, question: "50 What does <kbd> tag display?", options: ["Keyboard input", "Shortcuts", "Bold text", "Clickable key"], answer: "Keyboard input", attempted: false, selected: "" }
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