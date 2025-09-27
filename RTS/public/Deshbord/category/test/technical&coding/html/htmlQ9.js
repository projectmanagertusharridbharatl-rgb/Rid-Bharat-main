const questions = [
  { num: 1, question: "1 What is the purpose of the 'data-*' attribute in HTML5?", options: ["Store custom data", "Create forms", "Style elements", "Link CSS"], answer: "Store custom data", attempted: false, selected: "" },
  { num: 2, question: "2 Which attribute is used to specify a unique identifier for an HTML element?", options: ["id", "class", "name", "key"], answer: "id", attempted: false, selected: "" },
  { num: 3, question: "3 What does the 'defer' attribute do in a <script> tag?", options: ["Delays script execution", "Prevents execution", "Loads CSS", "Hides content"], answer: "Delays script execution", attempted: false, selected: "" },
  { num: 4, question: "4 What is the main difference between 'id' and 'class' in HTML?", options: ["id is unique, class is reusable", "Both are same", "id is for CSS, class is for JS", "id is for input only"], answer: "id is unique, class is reusable", attempted: false, selected: "" },
  { num: 5, question: "5 Which tag is used to define a container for an external application?", options: ["object", "embed", "iframe", "applet"], answer: "object", attempted: false, selected: "" },
  { num: 6, question: "6 Which tag supports defining fallback content for unsupported media?", options: ["video", "audio", "object", "source"], answer: "object", attempted: false, selected: "" },
  { num: 7, question: "7 What does the 'sandbox' attribute do in an iframe?", options: ["Applies security restrictions", "Changes size", "Loads faster", "Enables drag"], answer: "Applies security restrictions", attempted: false, selected: "" },
  { num: 8, question: "8 Which HTML tag is used to define a client-side image map?", options: ["map", "area", "imgmap", "coords"], answer: "map", attempted: false, selected: "" },
  { num: 9, question: "9 Which attribute defines a list of pre-defined options for input?", options: ["list", "options", "values", "set"], answer: "list", attempted: false, selected: "" },
  { num: 10, question: "10 What does the <dialog> element represent?", options: ["Modal dialog box", "Login form", "Tooltip", "Floating menu"], answer: "Modal dialog box", attempted: false, selected: "" },
  { num: 11, question: "11 Which tag is used to group commands in a menu?", options: ["menu", "nav", "command", "section"], answer: "menu", attempted: false, selected: "" },
  { num: 12, question: "12 What is the function of the <details> tag?", options: ["Creates expandable content", "Adds form field", "Shows summary", "Embeds media"], answer: "Creates expandable content", attempted: false, selected: "" },
  { num: 13, question: "13 Which attribute is used with <input> to specify allowed file types?", options: ["accept", "type", "files", "filter"], answer: "accept", attempted: false, selected: "" },
  { num: 14, question: "14 What is the use of the <wbr> tag?", options: ["Suggests line break", "Adds space", "Wraps text", "Bolds text"], answer: "Suggests line break", attempted: false, selected: "" },
  { num: 15, question: "15 Which HTML element is used to display a scalar measurement?", options: ["meter", "progress", "scale", "input"], answer: "meter", attempted: false, selected: "" },
  { num: 16, question: "16 What is the use of the 'formaction' attribute in a button?", options: ["Specifies submission URL", "Defines method", "Sets ID", "Disables form"], answer: "Specifies submission URL", attempted: false, selected: "" },
  { num: 17, question: "17 Which tag allows specifying inline mathematical notation?", options: ["math", "mtext", "equation", "notation"], answer: "math", attempted: false, selected: "" },
  { num: 18, question: "18 What is the use of the 'step' attribute in number input?", options: ["Specifies interval", "Sets default", "Fixes size", "Enables rounding"], answer: "Specifies interval", attempted: false, selected: "" },
  { num: 19, question: "19 What does the 'spellcheck' attribute control?", options: ["Spelling check on input", "Grammar fix", "Case sensitivity", "Word count"], answer: "Spelling check on input", attempted: false, selected: "" },
  { num: 20, question: "20 Which HTML tag defines a description/value of a term?", options: ["dd", "dt", "dl", "desc"], answer: "dd", attempted: false, selected: "" },
  { num: 21, question: "21 What is the purpose of the <abbr> tag?", options: ["Defines abbreviation", "Adds comment", "Links article", "Shows quote"], answer: "Defines abbreviation", attempted: false, selected: "" },
  { num: 22, question: "22 What is the correct HTML for inserting a line break?", options: ["<br>", "<lb>", "<break>", "<line>"], answer: "<br>", attempted: false, selected: "" },
  { num: 23, question: "23 What does the 'formmethod' attribute override?", options: ["Default form method", "Submit type", "Form layout", "Input validation"], answer: "Default form method", attempted: false, selected: "" },
  { num: 24, question: "24 What is the role of the <legend> tag?", options: ["Caption for fieldset", "Form title", "Heading", "Link label"], answer: "Caption for fieldset", attempted: false, selected: "" },
  { num: 25, question: "25 Which attribute links a label to a specific form control?", options: ["for", "id", "name", "link"], answer: "for", attempted: false, selected: "" },
  { num: 26, question: "26 What is the purpose of <template> in HTML?", options: ["Stores reusable content", "Prints content", "Adds formatting", "Calls API"], answer: "Stores reusable content", attempted: false, selected: "" },
  { num: 27, question: "27 What is the role of the <bdo> tag?", options: ["Overrides text direction", "Bold text only", "Replaces heading", "Defines object"], answer: "Overrides text direction", attempted: false, selected: "" },
  { num: 28, question: "28 Which attribute defines tooltip text on hover?", options: ["title", "alt", "hover", "hint"], answer: "title", attempted: false, selected: "" },
  { num: 29, question: "29 Which tag is used to define an internal style sheet?", options: ["style", "css", "script", "head"], answer: "style", attempted: false, selected: "" },
  { num: 30, question: "30 What does the <output> tag represent?", options: ["Result of calculation", "Console output", "Button text", "User feedback"], answer: "Result of calculation", attempted: false, selected: "" },
  { num: 31, question: "31 What does the 'required' attribute enforce?", options: ["Field must be filled", "Makes field readonly", "Disables input", "Hides field"], answer: "Field must be filled", attempted: false, selected: "" },
  { num: 32, question: "32 What is the use of the 'autofocus' attribute?", options: ["Focuses field on load", "Highlights field", "Validates input", "Clears content"], answer: "Focuses field on load", attempted: false, selected: "" },
  { num: 33, question: "33 What is the function of the <cite> tag?", options: ["References a source", "Cites author", "Quotes law", "Notes section"], answer: "References a source", attempted: false, selected: "" },
  { num: 34, question: "34 What does the 'disabled' attribute do?", options: ["Disables input", "Clears input", "Submits form", "Adds label"], answer: "Disables input", attempted: false, selected: "" },
  { num: 35, question: "35 What is the function of the <del> tag?", options: ["Represents deleted text", "Deletes element", "Hides content", "Comments section"], answer: "Represents deleted text", attempted: false, selected: "" },
  { num: 36, question: "36 What is the purpose of the <ins> tag?", options: ["Represents inserted text", "Inserts line", "Links style", "Includes form"], answer: "Represents inserted text", attempted: false, selected: "" },
  { num: 37, question: "37 What is the purpose of the <time> tag?", options: ["Defines time/date", "Adds delay", "Schedules animation", "Times script"], answer: "Defines time/date", attempted: false, selected: "" },
  { num: 38, question: "38 What is the function of the <label> tag?", options: ["Labels form input", "Names section", "Describes link", "Explains table"], answer: "Labels form input", attempted: false, selected: "" },
  { num: 39, question: "39 Which tag is used to define emphasized text?", options: ["em", "i", "strong", "mark"], answer: "em", attempted: false, selected: "" },
  { num: 40, question: "40 What does the 'placeholder' attribute do?", options: ["Shows hint text", "Sets default", "Auto fills form", "Clears value"], answer: "Shows hint text", attempted: false, selected: "" },
  { num: 41, question: "41 Which tag is used to group block-level content?", options: ["div", "span", "section", "group"], answer: "div", attempted: false, selected: "" },
  { num: 42, question: "42 Which tag is used to group inline content?", options: ["span", "label", "div", "section"], answer: "span", attempted: false, selected: "" },
  { num: 43, question: "43 What does the <em> tag mean semantically?", options: ["Emphasized stress", "Italic font", "Large text", "Heading"], answer: "Emphasized stress", attempted: false, selected: "" },
  { num: 44, question: "44 What is the role of the <strong> tag?", options: ["Indicates strong importance", "Bold text", "Larger size", "Highlight text"], answer: "Indicates strong importance", attempted: false, selected: "" },
  { num: 45, question: "45 What does the <pre> tag do?", options: ["Preserves whitespace", "Preload image", "Preview text", "Print text"], answer: "Preserves whitespace", attempted: false, selected: "" },
  { num: 46, question: "46 Which attribute makes a field uneditable but submittable?", options: ["readonly", "disabled", "required", "static"], answer: "readonly", attempted: false, selected: "" },
  { num: 47, question: "47 Which tag defines a navigation section?", options: ["nav", "aside", "header", "menu"], answer: "nav", attempted: false, selected: "" },
  { num: 48, question: "48 What does the <section> tag represent?", options: ["Thematic grouping of content", "Sidebar", "Comment block", "Inline text"], answer: "Thematic grouping of content", attempted: false, selected: "" },
  { num: 49, question: "49 What is the use of the <article> tag?", options: ["Independent self-contained content", "Lists content", "Displays summary", "Styles data"], answer: "Independent self-contained content", attempted: false, selected: "" },
  { num: 50, question: "50 Which tag defines the main content of a document?", options: ["main", "body", "article", "section"], answer: "main", attempted: false, selected: "" }
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
