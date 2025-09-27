
const questions = [
  { num: 201, question: "201 What does the 'sandbox' attribute in <iframe> do?", options: ["Applies extra restrictions", "Adds security token", "Enables fullscreen", "Disables iframe"], answer: "Applies extra restrictions", attempted: false, selected: "" },
  { num: 202, question: "202 What does the 'autofocus' attribute do?", options: ["Automatically focuses on input", "Disables focus", "Adds blinking cursor", "Highlights text"], answer: "Automatically focuses on input", attempted: false, selected: "" },
  { num: 203, question: "203 What does the 'draggable' attribute specify?", options: ["Element can be dragged", "Element resizable", "Enable scrollbar", "Rotate element"], answer: "Element can be dragged", attempted: false, selected: "" },
  { num: 204, question: "204 What is the function of the 'spellcheck' attribute?", options: ["Checks spelling", "Checks grammar", "Auto-corrects", "Disables typing"], answer: "Checks spelling", attempted: false, selected: "" },
  { num: 205, question: "205 What does the <dialog> tag define?", options: ["Dialog box or popup", "Hyperlink", "Code block", "Table column"], answer: "Dialog box or popup", attempted: false, selected: "" },
  { num: 206, question: "206 What does the <figure> tag represent?", options: ["Self-contained media", "Bold text", "Hidden layout", "Code section"], answer: "Self-contained media", attempted: false, selected: "" },
  { num: 207, question: "207 What does the <figcaption> tag define?", options: ["Caption for media", "Code description", "Image tooltip", "Navigation title"], answer: "Caption for media", attempted: false, selected: "" },
  { num: 208, question: "208 What does 'accept' attribute in file input specify?", options: ["Allowed file types", "Input style", "Encoding type", "Form method"], answer: "Allowed file types", attempted: false, selected: "" },
  { num: 209, question: "209 What is the function of <details> element?", options: ["Hides/reveals content", "Describes list", "Inputs secret data", "Summarizes text"], answer: "Hides/reveals content", attempted: false, selected: "" },
  { num: 210, question: "210 What is the default display of <div>?", options: ["block", "inline", "none", "flex"], answer: "block", attempted: false, selected: "" },
  { num: 211, question: "211 What is the purpose of the <embed> tag?", options: ["Embed external content", "Add heading", "Load JS files", "Link stylesheet"], answer: "Embed external content", attempted: false, selected: "" },
  { num: 212, question: "212 Which tag is used for defining metadata about HTML document?", options: ["meta", "head", "script", "style"], answer: "meta", attempted: false, selected: "" },
  { num: 213, question: "213 What is the function of <legend> tag?", options: ["Caption for <fieldset>", "Defines icon", "Provides link", "Adds comment"], answer: "Caption for <fieldset>", attempted: false, selected: "" },
  { num: 214, question: "214 Which tag defines preformatted text?", options: ["pre", "code", "kbd", "samp"], answer: "pre", attempted: false, selected: "" },
  { num: 215, question: "215 What is the use of 'type' attribute in <script>?", options: ["Defines script type", "Indicates version", "Sets loop", "Sets delay"], answer: "Defines script type", attempted: false, selected: "" },
  { num: 216, question: "216 What does the 'defer' attribute do in scripts?", options: ["Executes after page load", "Blocks DOM parsing", "Stops execution", "Delays animation"], answer: "Executes after page load", attempted: false, selected: "" },
  { num: 217, question: "217 What does the 'async' attribute do?", options: ["Executes script asynchronously", "Runs script on hover", "Validates input", "Skips loading"], answer: "Executes script asynchronously", attempted: false, selected: "" },
  { num: 218, question: "218 What is the 'rel' attribute used for in <link>?", options: ["Defines relationship", "Sets reload", "Links report", "Hides page"], answer: "Defines relationship", attempted: false, selected: "" },
  { num: 219, question: "219 What tag defines a navigation section?", options: ["nav", "section", "aside", "menu"], answer: "nav", attempted: false, selected: "" },
  { num: 220, question: "220 What does the <abbr> tag do?", options: ["Defines abbreviation", "Adds tooltip", "Adds comment", "Highlights paragraph"], answer: "Defines abbreviation", attempted: false, selected: "" },
  { num: 221, question: "221 Which HTML tag is used for bidirectional override?", options: ["bdo", "bdi", "dir", "lang"], answer: "bdo", attempted: false, selected: "" },
  { num: 222, question: "222 Which tag is used to include JavaScript?", options: ["script", "style", "js", "code"], answer: "script", attempted: false, selected: "" },
  { num: 223, question: "223 What is the function of 'tabindex' attribute?", options: ["Controls tab order", "Sets tab title", "Links tab menu", "Changes font"], answer: "Controls tab order", attempted: false, selected: "" },
  { num: 224, question: "224 What tag is used to define contact information?", options: ["address", "footer", "contact", "info"], answer: "address", attempted: false, selected: "" },
  { num: 225, question: "225 Which HTML5 tag defines important text?", options: ["strong", "b", "mark", "caption"], answer: "strong", attempted: false, selected: "" },
  { num: 226, question: "226 Which tag defines emphasized text?", options: ["em", "i", "mark", "cite"], answer: "em", attempted: false, selected: "" },
  { num: 227, question: "227 What is the purpose of <time> tag?", options: ["Represents date/time", "Times loading", "Adds clock", "Logs time"], answer: "Represents date/time", attempted: false, selected: "" },
  { num: 228, question: "228 What tag defines a variable in programming context?", options: ["var", "code", "samp", "kbd"], answer: "var", attempted: false, selected: "" },
  { num: 229, question: "229 What does the <rp> tag define?", options: ["Fallback for ruby text", "Right panel", "Response param", "Related post"], answer: "Fallback for ruby text", attempted: false, selected: "" },
  { num: 230, question: "230 What tag is used to define ruby annotations?", options: ["ruby", "rp", "rt", "annotation"], answer: "ruby", attempted: false, selected: "" },
  { num: 231, question: "231 What does the <rt> tag represent?", options: ["Ruby text explanation", "Row title", "Runtime test", "Return value"], answer: "Ruby text explanation", attempted: false, selected: "" },
  { num: 232, question: "232 What does the 'formaction' attribute define?", options: ["URL for form submission", "Form styling", "Redirect page", "Validation method"], answer: "URL for form submission", attempted: false, selected: "" },
  { num: 233, question: "233 What tag defines a label for an input?", options: ["label", "caption", "legend", "span"], answer: "label", attempted: false, selected: "" },
  { num: 234, question: "234 What does 'required' attribute do in input fields?", options: ["Prevents empty submission", "Disables input", "Styles label", "Adds icon"], answer: "Prevents empty submission", attempted: false, selected: "" },
  { num: 235, question: "235 What is the function of the 'minlength' attribute?", options: ["Minimum input length", "Font size", "Margin limit", "Element height"], answer: "Minimum input length", attempted: false, selected: "" },
  { num: 236, question: "236 What does the <optgroup> tag define?", options: ["Group of related options", "Multiple selects", "Dropdown toggle", "Form group"], answer: "Group of related options", attempted: false, selected: "" },
  { num: 237, question: "237 Which tag defines a line break?", options: ["br", "lb", "nl", "hr"], answer: "br", attempted: false, selected: "" },
  { num: 238, question: "238 What tag defines thematic change in HTML?", options: ["hr", "div", "section", "article"], answer: "hr", attempted: false, selected: "" },
  { num: 239, question: "239 What does the <article> tag represent?", options: ["Independent self-contained content", "Sidebar text", "Form field", "List element"], answer: "Independent self-contained content", attempted: false, selected: "" },
  { num: 240, question: "240 What is the use of 'content' attribute in <meta>?", options: ["Sets metadata value", "Displays tooltip", "Changes layout", "Links style"], answer: "Sets metadata value", attempted: false, selected: "" },
  { num: 241, question: "241 What is the default encoding if none specified in <meta>?", options: ["ISO-8859-1", "UTF-16", "ASCII", "UTF-8"], answer: "UTF-8", attempted: false, selected: "" },
  { num: 242, question: "242 What does the 'label' element associate with?", options: ["Input element", "Legend", "Div", "Select"], answer: "Input element", attempted: false, selected: "" },
  { num: 243, question: "243 What tag is used to define unordered lists?", options: ["ul", "ol", "list", "li"], answer: "ul", attempted: false, selected: "" },
  { num: 244, question: "244 Which tag defines a table row?", options: ["tr", "td", "th", "row"], answer: "tr", attempted: false, selected: "" },
  { num: 245, question: "245 Which HTML tag represents a table cell?", options: ["td", "tr", "th", "table"], answer: "td", attempted: false, selected: "" },
  { num: 246, question: "246 Which tag is used for table headers?", options: ["th", "thead", "td", "caption"], answer: "th", attempted: false, selected: "" },
  { num: 247, question: "247 What is the default alignment of table headers?", options: ["Center", "Left", "Right", "Justify"], answer: "Center", attempted: false, selected: "" },
  { num: 248, question: "248 What tag represents a list item?", options: ["li", "item", "ul", "ol"], answer: "li", attempted: false, selected: "" },
  { num: 249, question: "249 Which tag is used to define a checkbox?", options: ["input type='checkbox'", "checkbox", "check", "option"], answer: "input type='checkbox'", attempted: false, selected: "" },
  { num: 250, question: "250 What is the role of the <title> tag?", options: ["Defines page title", "Adds header", "Shows icon", "Displays table name"], answer: "Defines page title", attempted: false, selected: "" }
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
