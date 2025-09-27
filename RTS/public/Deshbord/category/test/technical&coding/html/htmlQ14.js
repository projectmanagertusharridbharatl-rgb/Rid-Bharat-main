const questions = [
  { num: 1, question: "1 What does the 'contenteditable' attribute do?", options: ["Makes element content editable", "Encrypts content", "Marks content for SEO", "Links content to CSS"], answer: "Makes element content editable", attempted: false, selected: "" },
  { num: 2, question: "2 What does the 'draggable' attribute specify?", options: ["Whether an element can be dragged", "If element is scrollable", "Element load priority", "Sets drag animation"], answer: "Whether an element can be dragged", attempted: false, selected: "" },
  { num: 3, question: "3 What is the 'aria-label' attribute used for?", options: ["Defines accessible label", "Sets input limit", "Binds JS event", "Initiates audio"], answer: "Defines accessible label", attempted: false, selected: "" },
  { num: 4, question: "4 What does the <dialog> tag define?", options: ["Interactive dialog box", "Tooltip", "Alert box", "Debug console"], answer: "Interactive dialog box", attempted: false, selected: "" },
  { num: 5, question: "5 What is the function of 'type' in <button>?", options: ["Defines button behavior", "Styles button", "Assigns ID", "Calls function"], answer: "Defines button behavior", attempted: false, selected: "" },
  { num: 6, question: "6 What does <progress> represent?", options: ["Progress of task completion", "CSS animation", "Data output", "Table column"], answer: "Progress of task completion", attempted: false, selected: "" },
  { num: 7, question: "7 What is the use of 'novalidate' in <form>?", options: ["Disables form validation", "Prevents submission", "Encrypts data", "Logs user agent"], answer: "Disables form validation", attempted: false, selected: "" },
  { num: 8, question: "8 What is the role of <summary> tag?", options: ["Caption for <details>", "Adds list heading", "Summarizes code", "Tracks paragraph"], answer: "Caption for <details>", attempted: false, selected: "" },
  { num: 9, question: "9 What does 'tabindex' control?", options: ["Element tab order", "Tabs in form", "Text formatting", "List orientation"], answer: "Element tab order", attempted: false, selected: "" },
  { num: 10, question: "10 What is the use of <fieldset>?", options: ["Groups related form inputs", "Resets form", "Outputs JSON", "Defines layout"], answer: "Groups related form inputs", attempted: false, selected: "" },
  { num: 11, question: "11 What does 'crossorigin' attribute handle?", options: ["CORS policy for media elements", "File extensions", "User roles", "Browser version"], answer: "CORS policy for media elements", attempted: false, selected: "" },
  { num: 12, question: "12 What is <source> tag used inside <video>?", options: ["Provides video source files", "Applies styles", "Embeds JavaScript", "Links subtitle"], answer: "Provides video source files", attempted: false, selected: "" },
  { num: 13, question: "13 What does 'required' attribute do?", options: ["Forces input field completion", "Limits access", "Hides field", "Locks form"], answer: "Forces input field completion", attempted: false, selected: "" },
  { num: 14, question: "14 What does the 'muted' attribute in <video> do?", options: ["Disables audio playback", "Disables video", "Mutes alerts", "Controls resolution"], answer: "Disables audio playback", attempted: false, selected: "" },
  { num: 15, question: "15 What is the use of 'poster' in <video>?", options: ["Sets image before playback", "Adds subtitle", "Links to author", "Embeds logo"], answer: "Sets image before playback", attempted: false, selected: "" },
  { num: 16, question: "16 What does 'controls' attribute enable in media tags?", options: ["Media playback UI", "Scripting tools", "Drag events", "Media preload"], answer: "Media playback UI", attempted: false, selected: "" },
  { num: 17, question: "17 What does the 'label' tag associate with?", options: ["Form input elements", "Headings", "Scripts", "Stylesheets"], answer: "Form input elements", attempted: false, selected: "" },
  { num: 18, question: "18 What is <track> used for?", options: ["Captions or subtitles", "Animation", "Volume control", "Loading icon"], answer: "Captions or subtitles", attempted: false, selected: "" },
  { num: 19, question: "19 What is the function of <canvas> tag?", options: ["Draw graphics via scripting", "Create 3D objects", "Play audio", "Write SQL"], answer: "Draw graphics via scripting", attempted: false, selected: "" },
  { num: 20, question: "20 What is the purpose of the 'accesskey' attribute?", options: ["Provides keyboard shortcut", "Encrypts field", "Displays tooltips", "Disables autocomplete"], answer: "Provides keyboard shortcut", attempted: false, selected: "" },
  { num: 21, question: "21 What does <figcaption> describe?", options: ["Caption for <figure>", "Header title", "Form action", "Media content"], answer: "Caption for <figure>", attempted: false, selected: "" },
  { num: 22, question: "22 What is the purpose of <figure>?", options: ["Groups self-contained content", "Controls layout", "Lists definitions", "Renders math"], answer: "Groups self-contained content", attempted: false, selected: "" },
  { num: 23, question: "23 What does the <main> tag indicate?", options: ["Primary document content", "Main heading", "Script body", "Media wrapper"], answer: "Primary document content", attempted: false, selected: "" },
  { num: 24, question: "24 What is the purpose of <header>?", options: ["Introduces section or page", "Starts video", "Wraps nav", "Loads styles"], answer: "Introduces section or page", attempted: false, selected: "" },
  { num: 25, question: "25 What is the function of <footer>?", options: ["Provides footer content", "Ends script", "Stores variables", "Defines section"], answer: "Provides footer content", attempted: false, selected: "" },
  { num: 26, question: "26 What does <label for='id'> link to?", options: ["Input with matching ID", "Textarea field", "Label group", "Script type"], answer: "Input with matching ID", attempted: false, selected: "" },
  { num: 27, question: "27 What is the role of <meta charset='UTF-8'>?", options: ["Defines character encoding", "Sets page speed", "Applies dark mode", "Initiates server request"], answer: "Defines character encoding", attempted: false, selected: "" },
  { num: 28, question: "28 What does <base> tag specify?", options: ["Base URL for relative links", "Database table", "CSS base style", "HTML root"], answer: "Base URL for relative links", attempted: false, selected: "" },
  { num: 29, question: "29 What does <link rel='icon'> do?", options: ["Defines page favicon", "Loads stylesheet", "Connects server", "Links nav"], answer: "Defines page favicon", attempted: false, selected: "" },
  { num: 30, question: "30 What is the use of <meta name='viewport'>?", options: ["Controls mobile scaling", "Sets theme color", "Disables zoom", "Loads meta-data"], answer: "Controls mobile scaling", attempted: false, selected: "" },
  { num: 31, question: "31 What does <script type='module'> mean?", options: ["Defines JS module", "Enables ES6 only", "Requires Babel", "Loads CSS"], answer: "Defines JS module", attempted: false, selected: "" },
  { num: 32, question: "32 What is <noscript> used for?", options: ["Fallback for no JavaScript", "Style backup", "Failsafe div", "Disables HTML"], answer: "Fallback for no JavaScript", attempted: false, selected: "" },
  { num: 33, question: "33 What is <s> tag used for?", options: ["Strikethrough text", "Subheader", "Script tag alias", "CSS style"], answer: "Strikethrough text", attempted: false, selected: "" },
  { num: 34, question: "34 What does <del> represent?", options: ["Deleted content", "Dynamic elements", "Date label", "Dropdown style"], answer: "Deleted content", attempted: false, selected: "" },
  { num: 35, question: "35 What does <ins> tag represent?", options: ["Inserted text", "Input submit", "Instant load", "Inline style"], answer: "Inserted text", attempted: false, selected: "" },
  { num: 36, question: "36 What is <code> tag for?", options: ["Displays code snippets", "Encrypts JS", "Adds styling", "Compiles script"], answer: "Displays code snippets", attempted: false, selected: "" },
  { num: 37, question: "37 What is the function of <kbd> tag?", options: ["Represents user input", "Keyboard shortcut mapping", "Adds function keys", "Binds script"], answer: "Represents user input", attempted: false, selected: "" },
  { num: 38, question: "38 What is <samp> tag used for?", options: ["Sample program output", "Sample layout", "Script AMP", "Sample test case"], answer: "Sample program output", attempted: false, selected: "" },
  { num: 39, question: "39 What does <cite> tag represent?", options: ["Title of a work", "Site name", "Source IP", "Citation format"], answer: "Title of a work", attempted: false, selected: "" },
  { num: 40, question: "40 What is the role of <q> tag?", options: ["Short inline quotation", "Question block", "Query builder", "Quick action"], answer: "Short inline quotation", attempted: false, selected: "" },
  { num: 41, question: "41 What does the <small> tag do?", options: ["Reduces text size", "Hides section", "Disables block", "Shrinks image"], answer: "Reduces text size", attempted: false, selected: "" },
  { num: 42, question: "42 What does <hr> insert in HTML?", options: ["Horizontal rule", "Row divider", "Header row", "Highlight bar"], answer: "Horizontal rule", attempted: false, selected: "" },
  { num: 43, question: "43 What is <em> tag used for?", options: ["Emphasizes text", "Email link", "Embed file", "Error message"], answer: "Emphasizes text", attempted: false, selected: "" },
  { num: 44, question: "44 What is the function of <blockquote>?", options: ["Indents quoted block text", "Loads blog quotes", "Formats headers", "Stores cache"], answer: "Indents quoted block text", attempted: false, selected: "" },
  { num: 45, question: "45 What does <iframe> embed?", options: ["External content", "Frame by frame animation", "Error logs", "Custom styles"], answer: "External content", attempted: false, selected: "" },
  { num: 46, question: "46 What does 'type=email' ensure?", options: ["Validates email pattern", "Sends email", "Encrypts input", "Prints form"], answer: "Validates email pattern", attempted: false, selected: "" },
  { num: 47, question: "47 What does 'readonly' attribute prevent?", options: ["Editing input", "Auto submission", "User selection", "Resizing window"], answer: "Editing input", attempted: false, selected: "" },
  { num: 48, question: "48 What is the use of <optgroup>?", options: ["Groups <option> elements", "Groups buttons", "Adds placeholder", "Loads input data"], answer: "Groups <option> elements", attempted: false, selected: "" },
  { num: 49, question: "49 What does 'value' attribute define?", options: ["Input default value", "Variable value", "Data type", "Function result"], answer: "Input default value", attempted: false, selected: "" },
  { num: 50, question: "50 What does 'maxlength' attribute restrict?", options: ["Maximum characters in input", "Max screen size", "Max form fields", "Max font size"], answer: "Maximum characters in input", attempted: false, selected: "" }
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
            questions[index].attempted = true;
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
