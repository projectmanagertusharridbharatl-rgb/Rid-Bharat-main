const questions = [
  { num: 101, question: "101 What does the 'aria-hidden' attribute do?", options: ["Hides element from assistive tech", "Removes from DOM", "Hides with CSS", "Disables element"], answer: "Hides element from assistive tech", attempted: false, selected: "" },
  { num: 102, question: "102 Which tag is used to create a hyperlink in HTML?", options: ["a", "link", "href", "url"], answer: "a", attempted: false, selected: "" },
  { num: 103, question: "103 What is the purpose of the meta tag?", options: ["Defines metadata", "Displays content", "Creates links", "Embeds images"], answer: "Defines metadata", attempted: false, selected: "" },
  { num: 104, question: "104 Which attribute is used to specify an image source?", options: ["src", "href", "link", "alt"], answer: "src", attempted: false, selected: "" },
  { num: 105, question: "105 How do you make a numbered list in HTML?", options: ["ol", "ul", "li", "list"], answer: "ol", attempted: false, selected: "" },
  { num: 106, question: "106 Which tag is used for a line break?", options: ["br", "break", "lb", "newline"], answer: "br", attempted: false, selected: "" },
  { num: 107, question: "107 What tag is used to create a table row?", options: ["tr", "td", "th", "table"], answer: "tr", attempted: false, selected: "" },
  { num: 108, question: "108 Which attribute opens a link in a new tab?", options: ["target=\"_blank\"", "href=\"_new\"", "open=\"new\"", "window=\"new\""], answer: "target=\"_blank\"", attempted: false, selected: "" },
  { num: 109, question: "109 What does the 'alt' attribute provide for an img tag?", options: ["Alternative text", "Image URL", "Image title", "Image size"], answer: "Alternative text", attempted: false, selected: "" },
  { num: 110, question: "110 Which tag is used to define a paragraph?", options: ["p", "para", "text", "div"], answer: "p", attempted: false, selected: "" },
  { num: 111, question: "111 What is the correct tag for inserting a horizontal line?", options: ["hr", "line", "hl", "breakline"], answer: "hr", attempted: false, selected: "" },
  { num: 112, question: "112 Which tag is used to create a checkbox?", options: ["input type=\"checkbox\"", "checkbox", "input checkbox", "check"], answer: "input type=\"checkbox\"", attempted: false, selected: "" },
  { num: 113, question: "113 Which attribute is used to disable an input field?", options: ["disabled", "readonly", "lock", "block"], answer: "disabled", attempted: false, selected: "" },
  { num: 114, question: "114 Which tag is used to embed a video?", options: ["video", "movie", "media", "embed"], answer: "video", attempted: false, selected: "" },
  { num: 115, question: "115 How do you add a comment in HTML?", options: [" Comment ", "// Comment", "/* Comment */", "# Comment"], answer: " Comment ", attempted: false, selected: "" },
  { num: 116, question: "116 Which tag is used to create a dropdown list?", options: ["select", "input", "option", "dropdown"], answer: "select", attempted: false, selected: "" },
  { num: 117, question: "117 Which tag defines a table header cell?", options: ["th", "td", "tr", "table"], answer: "th", attempted: false, selected: "" },
  { num: 118, question: "118 Which attribute specifies the language of the document?", options: ["lang", "xml", "language", "loc"], answer: "lang", attempted: false, selected: "" },
  { num: 119, question: "119 What is the root element of an HTML document?", options: ["html", "head", "body", "root"], answer: "html", attempted: false, selected: "" },
  { num: 120, question: "120 Which tag is used to define a clickable button?", options: ["button", "input", "submit", "click"], answer: "button", attempted: false, selected: "" },
  { num: 121, question: "121 Which tag is used to define a section in HTML5?", options: ["section", "div", "article", "span"], answer: "section", attempted: false, selected: "" },
  { num: 122, question: "122 What is the default display property of a div?", options: ["block", "inline", "inline-block", "none"], answer: "block", attempted: false, selected: "" },
  { num: 123, question: "123 Which tag inserts a line break without starting a new paragraph?", options: ["br", "p", "lb", "break"], answer: "br", attempted: false, selected: "" },
  { num: 124, question: "124 Which tag is used to specify an unordered list?", options: ["ul", "ol", "li", "list"], answer: "ul", attempted: false, selected: "" },
  { num: 125, question: "125 Which tag is used to define the body of the document?", options: ["body", "head", "html", "section"], answer: "body", attempted: false, selected: "" },
  { num: 126, question: "126 Which attribute is used to link an external CSS file?", options: ["href", "src", "link", "rel"], answer: "href", attempted: false, selected: "" },
  { num: 127, question: "127 What is the correct way to make a list that lists items with bullets?", options: ["ul", "ol", "list", "li"], answer: "ul", attempted: false, selected: "" },
  { num: 128, question: "128 How do you define a text input field?", options: ["input type=\"text\"", "textfield", "input text", "textbox"], answer: "input type=\"text\"", attempted: false, selected: "" },
  { num: 129, question: "129 Which attribute is used to specify an input's placeholder text?", options: ["placeholder", "title", "alt", "value"], answer: "placeholder", attempted: false, selected: "" },
  { num: 130, question: "130 Which tag is used to create a numbered list?", options: ["ol", "ul", "li", "list"], answer: "ol", attempted: false, selected: "" },
  { num: 31, question: "31 Which HTML element represents a scalar value within a range?", options: ["meter", "range", "progress", "scale"], answer: "meter", attempted: false, selected: "" },
  { num: 32, question: "32 Which tag groups footer, author info, or nav links?", options: ["footer", "aside", "base", "end"], answer: "footer", attempted: false, selected: "" },
  { num: 33, question: "33 What is the purpose of <progress> tag?", options: ["Shows task progress", "Displays image", "Monitors traffic", "Validates input"], answer: "Shows task progress", attempted: false, selected: "" },
  { num: 34, question: "34 What is the default type of <button>?", options: ["submit", "button", "reset", "click"], answer: "submit", attempted: false, selected: "" },
  { num: 35, question: "35 Which tag is used to provide alternative sources for media?", options: ["source", "track", "meta", "link"], answer: "source", attempted: false, selected: "" },
  { num: 36, question: "36 What is the function of 'tabindex' attribute?", options: ["Controls focus order", "Sets table index", "Adds tab character", "Adds tabbed layout"], answer: "Controls focus order", attempted: false, selected: "" },
  { num: 37, question: "37 Which tag adds a caption to a table?", options: ["caption", "title", "summary", "legend"], answer: "caption", attempted: false, selected: "" },
  { num: 38, question: "38 What is the purpose of <legend> tag?", options: ["Provides title to fieldset", "Displays image", "Links legends", "Hides form"], answer: "Provides title to fieldset", attempted: false, selected: "" },
  { num: 39, question: "39 What does the 'reversed' attribute in <ol> do?", options: ["Reverses list order", "Changes to ul", "Sorts alphabetically", "Styles the list"], answer: "Reverses list order", attempted: false, selected: "" },
  { num: 40, question: "40 Which element defines fine print or disclaimer?", options: ["small", "sub", "aside", "note"], answer: "small", attempted: false, selected: "" },
  { num: 41, question: "41 What is the purpose of <time> tag?", options: ["Defines time/date", "Measures duration", "Times execution", "Sets timeout"], answer: "Defines time/date", attempted: false, selected: "" },
  { num: 42, question: "42 Which tag is used to embed SVG in HTML?", options: ["svg", "vector", "shape", "draw"], answer: "svg", attempted: false, selected: "" },
  { num: 43, question: "43 What is the function of <base> tag?", options: ["Sets base URL", "Links script", "Centers content", "Starts layout"], answer: "Sets base URL", attempted: false, selected: "" },
  { num: 44, question: "44 Which tag is used for ruby annotations?", options: ["ruby", "annotation", "cite", "note"], answer: "ruby", attempted: false, selected: "" },
  { num: 45, question: "45 What is the use of <wbr> tag?", options: ["Suggests line break", "Wraps border", "Web-based render", "Word border"], answer: "Suggests line break", attempted: false, selected: "" },
  { num: 46, question: "46 Which tag is used to declare a variable in HTML5?", options: ["var", "let", "code", "const"], answer: "var", attempted: false, selected: "" },
  { num: 47, question: "47 What does the <bdo> tag allow?", options: ["Overrides text direction", "Bold text", "Breaks document", "Binds object"], answer: "Overrides text direction", attempted: false, selected: "" },
  { num: 48, question: "48 Which tag is used to show computer output?", options: ["samp", "output", "code", "result"], answer: "samp", attempted: false, selected: "" },
  { num: 49, question: "49 Which HTML tag defines the base direction of text?", options: ["bdo", "dir", "textdir", "lang"], answer: "bdo", attempted: false, selected: "" },
  { num: 50, question: "50 What is the purpose of the <summary> tag?", options: ["Defines visible heading for details", "Summarizes article", "Adds alt text", "Describes metadata"], answer: "Defines visible heading for details", attempted: false, selected: "" }
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
