const questions = [
  { num: 1, question: "1 What does the 'DOCTYPE' declaration do?", options: ["Defines document type", "Sets character encoding", "Links stylesheets", "Declares scripts"], answer: "Defines document type", attempted: false, selected: "" },
  { num: 2, question: "2 Which attribute specifies the URL of an image?", options: ["src", "href", "alt", "title"], answer: "src", attempted: false, selected: "" },
  { num: 3, question: "3 What is the purpose of the 'alt' attribute in images?", options: ["Provides alternative text", "Sets image size", "Links image", "Adds a caption"], answer: "Provides alternative text", attempted: false, selected: "" },
  { num: 4, question: "4 Which tag is used to create a hyperlink?", options: ["a", "link", "href", "url"], answer: "a", attempted: false, selected: "" },
  { num: 5, question: "5 What tag is used to create a paragraph?", options: ["p", "para", "text", "section"], answer: "p", attempted: false, selected: "" },
  { num: 6, question: "6 Which attribute specifies the destination URL in a hyperlink?", options: ["href", "src", "link", "url"], answer: "href", attempted: false, selected: "" },
  { num: 7, question: "7 What tag is used to insert a line break?", options: ["br", "lb", "break", "newline"], answer: "br", attempted: false, selected: "" },
  { num: 8, question: "8 Which tag is used to create an unordered list?", options: ["ul", "ol", "li", "list"], answer: "ul", attempted: false, selected: "" },
  { num: 9, question: "9 What tag is used to create list items?", options: ["li", "item", "ul", "ol"], answer: "li", attempted: false, selected: "" },
  { num: 10, question: "10 Which tag is used to create an ordered list?", options: ["ol", "ul", "list", "li"], answer: "ol", attempted: false, selected: "" },
  { num: 11, question: "11 Which attribute specifies the language of the document?", options: ["lang", "type", "language", "xml"], answer: "lang", attempted: false, selected: "" },
  { num: 12, question: "12 What is the function of the 'title' attribute?", options: ["Shows tooltip text", "Defines page title", "Specifies styles", "Links scripts"], answer: "Shows tooltip text", attempted: false, selected: "" },
  { num: 13, question: "13 Which tag is used to create a table?", options: ["table", "tab", "tr", "td"], answer: "table", attempted: false, selected: "" },
  { num: 14, question: "14 Which tag is used for a table row?", options: ["tr", "row", "td", "table"], answer: "tr", attempted: false, selected: "" },
  { num: 15, question: "15 Which tag is used for a table cell?", options: ["td", "cell", "tr", "th"], answer: "td", attempted: false, selected: "" },
  { num: 16, question: "16 Which tag defines a table header cell?", options: ["th", "td", "tr", "header"], answer: "th", attempted: false, selected: "" },
  { num: 17, question: "17 What tag is used to create a division or section?", options: ["div", "section", "span", "container"], answer: "div", attempted: false, selected: "" },
  { num: 18, question: "18 Which tag is used to group inline elements?", options: ["span", "div", "section", "group"], answer: "span", attempted: false, selected: "" },
  { num: 19, question: "19 Which tag is used to add a line horizontal rule?", options: ["hr", "line", "break", "rule"], answer: "hr", attempted: false, selected: "" },
  { num: 20, question: "20 What attribute specifies alternative text for the area element?", options: ["alt", "title", "href", "src"], answer: "alt", attempted: false, selected: "" },
  { num: 21, question: "21 Which tag is used to embed a video?", options: ["video", "media", "movie", "embed"], answer: "video", attempted: false, selected: "" },
  { num: 22, question: "22 Which tag is used to embed audio?", options: ["audio", "sound", "music", "media"], answer: "audio", attempted: false, selected: "" },
  { num: 23, question: "23 Which attribute is used to set an element's unique identifier?", options: ["id", "class", "name", "key"], answer: "id", attempted: false, selected: "" },
  { num: 24, question: "24 What attribute defines one or more classes for an element?", options: ["class", "id", "style", "type"], answer: "class", attempted: false, selected: "" },
  { num: 25, question: "25 Which tag is used to include JavaScript?", options: ["script", "js", "javascript", "code"], answer: "script", attempted: false, selected: "" },
  { num: 26, question: "26 Which tag is used to define the document's head section?", options: ["head", "header", "title", "meta"], answer: "head", attempted: false, selected: "" },
  { num: 27, question: "27 Which tag defines the visible page title?", options: ["title", "h1", "head", "header"], answer: "title", attempted: false, selected: "" },
  { num: 28, question: "28 Which tag is used to create a line break inside text?", options: ["br", "lb", "break", "newline"], answer: "br", attempted: false, selected: "" },
  { num: 29, question: "29 Which tag is used to create a form?", options: ["form", "input", "fieldset", "button"], answer: "form", attempted: false, selected: "" },
  { num: 30, question: "30 Which tag creates a text input field?", options: ["input", "textbox", "text", "field"], answer: "input", attempted: false, selected: "" },
  { num: 31, question: "31 Which attribute specifies the input type for input fields?", options: ["type", "class", "id", "name"], answer: "type", attempted: false, selected: "" },
  { num: 32, question: "32 Which tag is used to create a button?", options: ["button", "input", "submit", "click"], answer: "button", attempted: false, selected: "" },
  { num: 33, question: "33 Which attribute defines the placeholder text in input?", options: ["placeholder", "value", "title", "alt"], answer: "placeholder", attempted: false, selected: "" },
  { num: 34, question: "34 Which tag groups related elements in a form?", options: ["fieldset", "form", "div", "section"], answer: "fieldset", attempted: false, selected: "" },
  { num: 35, question: "35 What tag is used to create a label for input elements?", options: ["label", "caption", "title", "hint"], answer: "label", attempted: false, selected: "" },
  { num: 36, question: "36 Which attribute associates a label with an input?", options: ["for", "id", "name", "class"], answer: "for", attempted: false, selected: "" },
  { num: 37, question: "37 What tag is used for the main heading?", options: ["h1", "heading", "title", "head"], answer: "h1", attempted: false, selected: "" },
  { num: 38, question: "38 Which tags represent subheadings?", options: ["h2, h3, h4, h5, h6", "h1", "header", "section"], answer: "h2, h3, h4, h5, h6", attempted: false, selected: "" },
  { num: 39, question: "39 Which tag defines a footer section?", options: ["footer", "foot", "section", "bottom"], answer: "footer", attempted: false, selected: "" },
  { num: 40, question: "40 Which tag is used for navigation links?", options: ["nav", "menu", "navigation", "links"], answer: "nav", attempted: false, selected: "" },
  { num: 41, question: "41 What attribute specifies whether an input is required?", options: ["required", "mandatory", "validate", "needed"], answer: "required", attempted: false, selected: "" },
  { num: 42, question: "42 Which tag is used to insert comments?", options: ["!-- comment --", "// comment", "# comment", "/* comment */"], answer: "!-- comment --", attempted: false, selected: "" },
  { num: 43, question: "43 What does the 'src' attribute specify in script tags?", options: ["External script URL", "Script content", "Script type", "Script ID"], answer: "External script URL", attempted: false, selected: "" },
  { num: 44, question: "44 Which attribute sets the language direction of text?", options: ["dir", "lang", "textdir", "direction"], answer: "dir", attempted: false, selected: "" },
  { num: 45, question: "45 Which attribute controls the tab order of elements?", options: ["tabindex", "index", "order", "tab"], answer: "tabindex", attempted: false, selected: "" },
  { num: 46, question: "46 Which tag is used to define a section in a document?", options: ["section", "div", "article", "container"], answer: "section", attempted: false, selected: "" },
  { num: 47, question: "47 Which attribute is used to specify image dimensions?", options: ["width and height", "size", "length", "dimension"], answer: "width and height", attempted: false, selected: "" },
  { num: 48, question: "48 What attribute is used to link external CSS files?", options: ["href", "src", "link", "rel"], answer: "href", attempted: false, selected: "" },
  { num: 49, question: "49 Which tag defines a sidebar?", options: ["aside", "sidebar", "div", "section"], answer: "aside", attempted: false, selected: "" },
  { num: 50, question: "50 What does the 'rel' attribute in a link tag specify?", options: ["Relationship between document and linked resource", "URL of linked file", "Media type", "Link title"], answer: "Relationship between document and linked resource", attempted: false, selected: "" }
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

