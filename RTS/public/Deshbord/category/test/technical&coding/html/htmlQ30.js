const questions = [
  { num: 1, question: "1 What is the purpose of the 'is' attribute in custom elements?", options: ["Extends built-in elements", "Imports script", "Applies CSS", "Initializes class"], answer: "Extends built-in elements", attempted: false, selected: "" },
  { num: 2, question: "2 Which tag allows usage of Web Components?", options: ["template", "webcomponent", "custom", "module"], answer: "template", attempted: false, selected: "" },
  { num: 3, question: "3 What does the 'slot' tag do in shadow DOM?", options: ["Defines placeholder for content", "Binds data", "Imports CSS", "Sets local scope"], answer: "Defines placeholder for content", attempted: false, selected: "" },
  { num: 4, question: "4 What is the role of 'part' attribute in shadow DOM?", options: ["Enables styling from outside", "Attaches scripts", "Creates partition", "Applies layout"], answer: "Enables styling from outside", attempted: false, selected: "" },
  { num: 5, question: "5 Which HTML tag allows importing HTML into shadow DOM?", options: ["template", "import", "shadow", "slot"], answer: "template", attempted: false, selected: "" },
  { num: 6, question: "6 Which attribute disables resizing of a textarea?", options: ["style='resize:none'", "readonly", "noresize", "disable"], answer: "style='resize:none'", attempted: false, selected: "" },
  { num: 7, question: "7 What does 'inputmode' attribute do?", options: ["Hints at virtual keyboard type", "Formats input", "Adds JS event", "Validates regex"], answer: "Hints at virtual keyboard type", attempted: false, selected: "" },
  { num: 8, question: "8 Which tag supports progressive enhancement for images?", options: ["picture", "img", "srcset", "image"], answer: "picture", attempted: false, selected: "" },
  { num: 9, question: "9 What is the use of 'loading=\"lazy\"' attribute in images?", options: ["Delays image loading", "Compresses image", "Loads cache", "Preloads images"], answer: "Delays image loading", attempted: false, selected: "" },
  { num: 10, question: "10 Which attribute in <form> enables AJAX-style submission?", options: ["onsubmit", "formaction", "target", "fetch"], answer: "onsubmit", attempted: false, selected: "" },
  { num: 11, question: "11 What does 'type=module' do in <script> tag?", options: ["Loads as ES6 module", "Disables script", "Adds class", "Styles script"], answer: "Loads as ES6 module", attempted: false, selected: "" },
  { num: 12, question: "12 What is the use of 'crossorigin' attribute in media elements?", options: ["Handles CORS requests", "Encrypts media", "Defines credentials", "Improves speed"], answer: "Handles CORS requests", attempted: false, selected: "" },
  { num: 13, question: "13 Which attribute is used to make audio autoplay on load?", options: ["autoplay", "start", "loop", "play"], answer: "autoplay", attempted: false, selected: "" },
  { num: 14, question: "14 What is the effect of 'preload=metadata' in <video>?", options: ["Loads only metadata", "Loads full video", "Disables loading", "Plays in loop"], answer: "Loads only metadata", attempted: false, selected: "" },
  { num: 15, question: "15 What is the default value of the 'target' attribute in <form>?", options: ["_self", "_blank", "_parent", "_top"], answer: "_self", attempted: false, selected: "" },
  { num: 16, question: "16 Which tag defines a list where the order doesn't matter?", options: ["ul", "ol", "menu", "list"], answer: "ul", attempted: false, selected: "" },
  { num: 17, question: "17 Which tag defines a term in a description list?", options: ["dt", "dd", "dl", "define"], answer: "dt", attempted: false, selected: "" },
  { num: 18, question: "18 Which attribute prevents user from editing an input field?", options: ["readonly", "disabled", "locked", "hide"], answer: "readonly", attempted: false, selected: "" },
  { num: 19, question: "19 What is the function of 'formaction' in a submit button?", options: ["Overrides form action URL", "Validates form", "Styles button", "Disables submit"], answer: "Overrides form action URL", attempted: false, selected: "" },
  { num: 20, question: "20 Which attribute defines keyboard shortcut for an element?", options: ["accesskey", "shortcut", "keymap", "hotkey"], answer: "accesskey", attempted: false, selected: "" },
  { num: 21, question: "21 What does the 'pattern' attribute validate?", options: ["Regular expressions", "Number format", "Date", "Field order"], answer: "Regular expressions", attempted: false, selected: "" },
  { num: 22, question: "22 What is the use of <noscript> tag?", options: ["Fallback for no JS", "Script loader", "Disable JS", "Add comments"], answer: "Fallback for no JS", attempted: false, selected: "" },
  { num: 23, question: "23 What does <data> tag represent?", options: ["Machine-readable data", "Database value", "Data list", "External file"], answer: "Machine-readable data", attempted: false, selected: "" },
  { num: 24, question: "24 Which attribute shows text when media fails to load?", options: ["alt", "title", "caption", "onerror"], answer: "alt", attempted: false, selected: "" },
  { num: 25, question: "25 What is the use of <abbr> tag?", options: ["Defines abbreviation", "Adds attribute", "Bold text", "Break line"], answer: "Defines abbreviation", attempted: false, selected: "" },
  { num: 26, question: "26 Which HTML5 API is used to drag and drop items?", options: ["Drag and Drop API", "DOM API", "Event API", "Web Storage API"], answer: "Drag and Drop API", attempted: false, selected: "" },
  { num: 27, question: "27 What does the 'defer' attribute do in a <script> tag?", options: ["Delays execution until page load", "Skips script", "Runs script first", "Ignores DOM"], answer: "Delays execution until page load", attempted: false, selected: "" },
  { num: 28, question: "28 Which tag is used for multiline text input?", options: ["textarea", "input", "textbox", "field"], answer: "textarea", attempted: false, selected: "" },
  { num: 29, question: "29 What is the function of 'accept' attribute in file input?", options: ["Restricts file types", "Encrypts file", "Compresses data", "Sets permissions"], answer: "Restricts file types", attempted: false, selected: "" },
  { num: 30, question: "30 Which HTML tag defines user contact information?", options: ["address", "contact", "footer", "info"], answer: "address", attempted: false, selected: "" },
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