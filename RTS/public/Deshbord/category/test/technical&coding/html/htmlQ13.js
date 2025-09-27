const questions = [
  { num: 1, question: "1 What is the 'part' attribute used for in HTML Web Components?", options: ["Expose element parts to shadow DOM styling", "Partition scripts", "Split HTML pages", "Group tags together"], answer: "Expose element parts to shadow DOM styling", attempted: false, selected: "" },
  { num: 2, question: "2 What does the 'is' attribute in HTML extend?", options: ["Custom built-in elements", "Inline styles", "Input types", "Event handlers"], answer: "Custom built-in elements", attempted: false, selected: "" },
  { num: 3, question: "3 What is the function of the 'formaction' attribute in a button?", options: ["Overrides form action URL", "Validates form", "Disables button", "Adds JS event"], answer: "Overrides form action URL", attempted: false, selected: "" },
  { num: 4, question: "4 What does the 'loading' attribute on <img> do?", options: ["Controls lazy loading", "Shows loading bar", "Increases image resolution", "Preloads fonts"], answer: "Controls lazy loading", attempted: false, selected: "" },
  { num: 5, question: "5 What is the purpose of 'nonce' in <script>?", options: ["Allow script execution in CSP", "Encrypt code", "Execute on load", "Compress script"], answer: "Allow script execution in CSP", attempted: false, selected: "" },
  { num: 6, question: "6 Which HTML element is used to define a document outline?", options: ["<section>", "<main>", "<outline>", "<structure>"], answer: "<section>", attempted: false, selected: "" },
  { num: 7, question: "7 What is the use of 'http-equiv' in <meta> tag?", options: ["Acts like HTTP header", "Sets base URL", "Loads external styles", "Sets document title"], answer: "Acts like HTTP header", attempted: false, selected: "" },
  { num: 8, question: "8 What does the 'sandbox' attribute in <iframe> do?", options: ["Restricts iframe functionality", "Embeds sandbox game", "Applies JS sandbox", "Validates iframe size"], answer: "Restricts iframe functionality", attempted: false, selected: "" },
  { num: 9, question: "9 What does the 'accept' attribute in <input> limit?", options: ["File types allowed", "User access", "Input length", "Submit actions"], answer: "File types allowed", attempted: false, selected: "" },
  { num: 10, question: "10 Which tag supports asynchronous script loading?", options: ["<script async>", "<async>", "<scriptload>", "<script defer>"], answer: "<script async>", attempted: false, selected: "" },
  { num: 11, question: "11 What is the purpose of the <template> tag?", options: ["Defines HTML fragments not rendered immediately", "Defines XML templates", "Starts CSS section", "Creates dynamic data"], answer: "Defines HTML fragments not rendered immediately", attempted: false, selected: "" },
  { num: 12, question: "12 What does the 'minlength' attribute enforce?", options: ["Minimum characters in input", "Minimum lines in textarea", "Minimum form elements", "Minimum scroll height"], answer: "Minimum characters in input", attempted: false, selected: "" },
  { num: 13, question: "13 What does the 'formenctype' attribute do?", options: ["Overrides form encoding type", "Encrypts inputs", "Blocks form resubmission", "Detects browser type"], answer: "Overrides form encoding type", attempted: false, selected: "" },
  { num: 14, question: "14 What does the 'challenge' attribute apply to?", options: ["<keygen> element for secure forms", "<button>", "<form>", "<meta>"], answer: "<keygen> element for secure forms", attempted: false, selected: "" },
  { num: 15, question: "15 What does the <output> tag represent?", options: ["Result of calculation", "Audio output", "Form value", "Chart data"], answer: "Result of calculation", attempted: false, selected: "" },
  { num: 16, question: "16 What is the function of the 'high' attribute in <meter>?", options: ["Indicates high range threshold", "Sets value to highest", "Defines priority", "Increases input max"], answer: "Indicates high range threshold", attempted: false, selected: "" },
  { num: 17, question: "17 What does the <bdi> tag ensure?", options: ["Isolates text direction", "Highlights text", "Breaks line", "Enables bold italics"], answer: "Isolates text direction", attempted: false, selected: "" },
  { num: 18, question: "18 What is the purpose of the <wbr> tag?", options: ["Suggests line break opportunity", "Inserts white space", "Replaces <br>", "Removes blank space"], answer: "Suggests line break opportunity", attempted: false, selected: "" },
  { num: 19, question: "19 What does the 'autocomplete' attribute support?", options: ["Browser autofill of input fields", "Automatic form submission", "Live validation", "JS form bindings"], answer: "Browser autofill of input fields", attempted: false, selected: "" },
  { num: 20, question: "20 What does the <time> tag represent?", options: ["Machine-readable date/time", "Execution time", "Clock widget", "Load time"], answer: "Machine-readable date/time", attempted: false, selected: "" },
  { num: 21, question: "21 What is the 'enctype' used for in <form>?", options: ["Specifies form data encoding", "Encrypts data", "Sets language", "Determines layout"], answer: "Specifies form data encoding", attempted: false, selected: "" },
  { num: 22, question: "22 What does the 'reversed' attribute in <ol> do?", options: ["Displays list in reverse order", "Reverses animation", "Reverses text", "Backtracks loop"], answer: "Displays list in reverse order", attempted: false, selected: "" },
  { num: 23, question: "23 What does the <menu> tag define?", options: ["List of commands or context menu", "Navigation list", "Dropdown menu", "Mobile menu"], answer: "List of commands or context menu", attempted: false, selected: "" },
  { num: 24, question: "24 What is the use of 'autofocus' in inputs?", options: ["Sets focus on page load", "Enables auto spacing", "Focuses on keypress", "Focuses on blur"], answer: "Sets focus on page load", attempted: false, selected: "" },
  { num: 25, question: "25 What does the <abbr> tag define?", options: ["Abbreviation or acronym", "Uppercase word", "Anchor link", "Preformatted tag"], answer: "Abbreviation or acronym", attempted: false, selected: "" },
  { num: 26, question: "26 What is the <bdo> tag used for?", options: ["Overrides text direction", "Bolds text", "Doubles output", "Breaks output"], answer: "Overrides text direction", attempted: false, selected: "" },
  { num: 27, question: "27 What is the 'step' attribute used for?", options: ["Sets input increment interval", "Changes font size", "Adds animation steps", "Skips validation"], answer: "Sets input increment interval", attempted: false, selected: "" },
  { num: 28, question: "28 What is <details> tag used for?", options: ["Toggleable disclosure box", "Form details", "Code outline", "Debugger output"], answer: "Toggleable disclosure box", attempted: false, selected: "" },
  { num: 29, question: "29 What does the <datalist> tag support?", options: ["Predefined input values", "Dropdown layout", "Data analytics", "Offline storage"], answer: "Predefined input values", attempted: false, selected: "" },
  { num: 30, question: "30 What is the use of 'default' attribute in <track>?", options: ["Marks default track", "Starts playback", "Sets track order", "Downloads file"], answer: "Marks default track", attempted: false, selected: "" },
  { num: 31, question: "31 What does the <embed> tag support?", options: ["Embeds external content like PDFs or flash", "Embeds JavaScript", "Applies theme", "Links HTML pages"], answer: "Embeds external content like PDFs or flash", attempted: false, selected: "" },
  { num: 32, question: "32 What is <object> tag used for?", options: ["Embeds multimedia or applets", "Creates layout", "Loads JS object", "Parses XML"], answer: "Embeds multimedia or applets", attempted: false, selected: "" },
  { num: 33, question: "33 What is the role of <param> tag?", options: ["Passes parameters to plugins", "Defines parent tag", "Adds JS methods", "Creates child elements"], answer: "Passes parameters to plugins", attempted: false, selected: "" },
  { num: 34, question: "34 What is the purpose of <mark> tag?", options: ["Highlights important text", "Marks end of page", "Creates margin", "Marks comment"], answer: "Highlights important text", attempted: false, selected: "" },
  { num: 35, question: "35 What is the use of <legend> in forms?", options: ["Caption for <fieldset>", "Creates label", "Defines dropdown", "Marks error"], answer: "Caption for <fieldset>", attempted: false, selected: "" },
  { num: 36, question: "36 What is the function of 'wrap' in <textarea>?", options: ["Defines text wrapping behavior", "Wraps form", "Wraps CSS", "Wraps JS"], answer: "Defines text wrapping behavior", attempted: false, selected: "" },
  { num: 37, question: "37 What does the 'download' attribute in <a> do?", options: ["Initiates download on click", "Uploads file", "Shows progress", "Tracks clicks"], answer: "Initiates download on click", attempted: false, selected: "" },
  { num: 38, question: "38 What does <noscript> tag provide?", options: ["Fallback for no JS", "Styles when offline", "Script execution", "Disables cache"], answer: "Fallback for no JS", attempted: false, selected: "" },
  { num: 39, question: "39 What does the 'hidden' attribute mean?", options: ["Element not visible or accessible", "Hidden in JS", "Encrypted element", "Collapsed only"], answer: "Element not visible or accessible", attempted: false, selected: "" },
  { num: 40, question: "40 What is the function of <article> tag?", options: ["Represents independent content", "Displays ad", "Outlines form", "Wraps style"], answer: "Represents independent content", attempted: false, selected: "" },
  { num: 41, question: "41 What does <aside> tag represent?", options: ["Sidebar or tangential content", "Important content", "Main menu", "Sticky footer"], answer: "Sidebar or tangential content", attempted: false, selected: "" },
  { num: 42, question: "42 What is the role of <nav> element?", options: ["Navigation links section", "External file linking", "Embedded navbar", "Scrolling behavior"], answer: "Navigation links section", attempted: false, selected: "" },
  { num: 43, question: "43 What does the 'spellcheck' attribute do?", options: ["Enables spell checking on input", "Runs grammar correction", "Adds dictionary", "Detects input method"], answer: "Enables spell checking on input", attempted: false, selected: "" },
  { num: 44, question: "44 What is the function of <strong> tag?", options: ["Emphasizes text with importance", "Bolds and underlines", "Strikes out text", "Hides text"], answer: "Emphasizes text with importance", attempted: false, selected: "" },
  { num: 45, question: "45 What does the 'dir' attribute specify?", options: ["Text direction", "Directory path", "Digital index", "Displacement range"], answer: "Text direction", attempted: false, selected: "" },
  { num: 46, question: "46 What is the purpose of <sup> tag?", options: ["Superscript text", "Adds summary", "Substitute font", "Supports plugin"], answer: "Superscript text", attempted: false, selected: "" },
  { num: 47, question: "47 What is <sub> used for?", options: ["Subscript text", "Submit value", "Subtitle display", "Subtract values"], answer: "Subscript text", attempted: false, selected: "" },
  { num: 48, question: "48 What does <pre> tag preserve?", options: ["Whitespace and formatting", "Text case", "Input state", "Padding settings"], answer: "Whitespace and formatting", attempted: false, selected: "" },
  { num: 49, question: "49 What is the use of <var> tag?", options: ["Defines variable in text", "Variable for CSS", "Changes layout", "Sets viewport"], answer: "Defines variable in text", attempted: false, selected: "" },
  { num: 50, question: "50 What does <address> tag define?", options: ["Contact information", "IP address", "Postal format", "Static location"], answer: "Contact information", attempted: false, selected: "" }
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
