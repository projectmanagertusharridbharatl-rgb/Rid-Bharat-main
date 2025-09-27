
   const questions = [
  { num: 1, question: "1 What does the 'defer' attribute do in a <script> tag?", options: ["Delays script execution until HTML is parsed", "Executes script immediately", "Ignores the script", "Runs only after page load"], answer: "Delays script execution until HTML is parsed", attempted: false, selected: "" },
  { num: 2, question: "2 What is the use of the 'contenteditable' attribute?", options: ["Makes element content editable", "Disables content", "Hides element", "Links to CSS"], answer: "Makes element content editable", attempted: false, selected: "" },
  { num: 3, question: "3 Which HTML5 tag is used for self-contained content?", options: ["article", "section", "div", "aside"], answer: "article", attempted: false, selected: "" },
  { num: 4, question: "4 What is the purpose of the 'sandbox' attribute in <iframe>?", options: ["Applies restrictions to iframe content", "Makes iframe resizable", "Adds CSS to iframe", "Adds scrollbars"], answer: "Applies restrictions to iframe content", attempted: false, selected: "" },
  { num: 5, question: "5 What does the <template> tag do?", options: ["Holds HTML not rendered until used", "Defines CSS template", "Creates table format", "Links to JavaScript"], answer: "Holds HTML not rendered until used", attempted: false, selected: "" },
  { num: 6, question: "6 What does the 'autofocus' attribute do in an input field?", options: ["Automatically focuses input on page load", "Automatically fills data", "Highlights input", "Adds placeholder"], answer: "Automatically focuses input on page load", attempted: false, selected: "" },
  { num: 7, question: "7 Which tag is used to embed a video in HTML5?", options: ["video", "embed", "media", "object"], answer: "video", attempted: false, selected: "" },
  { num: 8, question: "8 What does 'spellcheck' attribute do?", options: ["Enables spell checking", "Checks link validity", "Disables keyboard input", "Validates script"], answer: "Enables spell checking", attempted: false, selected: "" },
  { num: 9, question: "9 What is the purpose of the 'hidden' attribute?", options: ["Hides an element from the page", "Encrypts the element", "Displays element in new tab", "Makes element bold"], answer: "Hides an element from the page", attempted: false, selected: "" },
  { num: 10, question: "10 Which HTML tag is used to play video with multiple sources?", options: ["video", "source", "media", "track"], answer: "video", attempted: false, selected: "" },
  { num: 11, question: "11 What is the function of the 'download' attribute in an anchor tag?", options: ["Triggers download of linked file", "Plays media file", "Uploads a file", "Redirects to download site"], answer: "Triggers download of linked file", attempted: false, selected: "" },
  { num: 12, question: "12 What is the default method for a form submission?", options: ["GET", "POST", "PUT", "DELETE"], answer: "GET", attempted: false, selected: "" },
  { num: 13, question: "13 Which HTML tag is used to define a container for SVG graphics?", options: ["svg", "canvas", "vector", "shape"], answer: "svg", attempted: false, selected: "" },
  { num: 14, question: "14 What does the 'novalidate' attribute in form do?", options: ["Disables form validation", "Skips input fields", "Enables script debugging", "Hides submit button"], answer: "Disables form validation", attempted: false, selected: "" },
  { num: 15, question: "15 Which input type allows users to pick a color?", options: ["color", "text", "rgb", "palette"], answer: "color", attempted: false, selected: "" },
  { num: 16, question: "16 What does the <mark> element represent?", options: ["Highlighted text", "Bold text", "Marked image", "Superscript text"], answer: "Highlighted text", attempted: false, selected: "" },
  { num: 17, question: "17 What does 'aria-label' attribute do?", options: ["Defines label for screen readers", "Shows image caption", "Adds HTML label", "Enables clickable text"], answer: "Defines label for screen readers", attempted: false, selected: "" },
  { num: 18, question: "18 What is the purpose of <output> element?", options: ["Displays result of calculation", "Shows image output", "Displays video", "Links to form"], answer: "Displays result of calculation", attempted: false, selected: "" },
  { num: 19, question: "19 What does the <datalist> tag provide in forms?", options: ["Predefined list of options", "Dropdown menu", "List of images", "Checkboxes"], answer: "Predefined list of options", attempted: false, selected: "" },
  { num: 20, question: "20 What is the use of the <progress> element?", options: ["Represents task progress", "Shows form status", "Indicates checkbox", "Links progress bar"], answer: "Represents task progress", attempted: false, selected: "" },
  { num: 21, question: "21 What does the 'draggable' attribute enable?", options: ["Allows element to be dragged", "Expands element", "Adds animation", "Scrolls automatically"], answer: "Allows element to be dragged", attempted: false, selected: "" },
  { num: 22, question: "22 Which tag is used to group form controls?", options: ["fieldset", "group", "set", "div"], answer: "fieldset", attempted: false, selected: "" },
  { num: 23, question: "23 What does the 'type' attribute define in <input>?", options: ["Input behavior", "Field name", "Label text", "Max characters"], answer: "Input behavior", attempted: false, selected: "" },
  { num: 24, question: "24 Which tag defines time/date values?", options: ["time", "date", "datetime", "timestamp"], answer: "time", attempted: false, selected: "" },
  { num: 25, question: "25 What does 'pre' element preserve?", options: ["Whitespace and formatting", "Only bold text", "Inline elements", "Paragraphs only"], answer: "Whitespace and formatting", attempted: false, selected: "" },
  { num: 26, question: "26 Which input type allows selection of files?", options: ["file", "upload", "media", "browse"], answer: "file", attempted: false, selected: "" },
  { num: 27, question: "27 What does the 'checked' attribute do?", options: ["Marks checkbox/radio as selected", "Checks spelling", "Checks network", "Verifies link"], answer: "Marks checkbox/radio as selected", attempted: false, selected: "" },
  { num: 28, question: "28 Which attribute makes a form field mandatory?", options: ["required", "validate", "mandatory", "compulsory"], answer: "required", attempted: false, selected: "" },
  { num: 29, question: "29 What does the 'accept' attribute specify?", options: ["File types for input", "User acceptance", "Form status", "Theme support"], answer: "File types for input", attempted: false, selected: "" },
  { num: 30, question: "30 What does the <canvas> tag do?", options: ["Draw graphics via JavaScript", "Play videos", "Embed images", "Create links"], answer: "Draw graphics via JavaScript", attempted: false, selected: "" },
  { num: 31, question: "31 Which tag adds subtitles or captions to media?", options: ["track", "caption", "subtitle", "sub"], answer: "track", attempted: false, selected: "" },
  { num: 32, question: "32 What does 'autoplay' do in <video> or <audio>?", options: ["Plays media automatically", "Loops media", "Shows poster", "Enables mute"], answer: "Plays media automatically", attempted: false, selected: "" },
  { num: 33, question: "33 What does <noscript> define?", options: ["Fallback for users with JavaScript disabled", "Disables scripting", "No styles applied", "Unlinked elements"], answer: "Fallback for users with JavaScript disabled", attempted: false, selected: "" },
  { num: 34, question: "34 What is the use of 'placeholder' attribute?", options: ["Shows hint inside input", "Adds default value", "Highlights field", "Sets background"], answer: "Shows hint inside input", attempted: false, selected: "" },
  { num: 35, question: "35 What does the <abbr> tag define?", options: ["Abbreviation or acronym", "Image title", "Author name", "Paragraph indent"], answer: "Abbreviation or acronym", attempted: false, selected: "" },
  { num: 36, question: "36 What tag is used to define keyboard input?", options: ["kbd", "key", "input", "code"], answer: "kbd", attempted: false, selected: "" },
  { num: 37, question: "37 Which tag is used to define sample output?", options: ["samp", "output", "kbd", "pre"], answer: "samp", attempted: false, selected: "" },
  { num: 38, question: "38 What tag represents machine-readable time/date?", options: ["time", "meta", "script", "code"], answer: "time", attempted: false, selected: "" },
  { num: 39, question: "39 Which tag is used to define contact information?", options: ["address", "contact", "info", "footer"], answer: "address", attempted: false, selected: "" },
  { num: 40, question: "40 What does 'muted' do in <audio> or <video>?", options: ["Starts media with no sound", "Mutes microphone", "Loops the audio", "Pauses video"], answer: "Starts media with no sound", attempted: false, selected: "" },
  { num: 41, question: "41 Which element groups headings and intro content?", options: ["header", "head", "section", "meta"], answer: "header", attempted: false, selected: "" },
  { num: 42, question: "42 What does <wbr> tag define?", options: ["Line break opportunity", "Page break", "Word bold region", "Write block record"], answer: "Line break opportunity", attempted: false, selected: "" },
  { num: 43, question: "43 What is the default display value of a <div>?", options: ["block", "inline", "flex", "none"], answer: "block", attempted: false, selected: "" },
  { num: 44, question: "44 What does the 'name' attribute in form elements do?", options: ["Identifies the field when submitting", "Displays label", "Adds class name", "Sets CSS style"], answer: "Identifies the field when submitting", attempted: false, selected: "" },
  { num: 45, question: "45 What tag defines navigation links?", options: ["nav", "menu", "header", "link"], answer: "nav", attempted: false, selected: "" },
  { num: 46, question: "46 What does <meta name='viewport'> control?", options: ["Responsive scaling on devices", "Text zoom", "Font download", "Color scheme"], answer: "Responsive scaling on devices", attempted: false, selected: "" },
  { num: 47, question: "47 Which attribute disables an input field?", options: ["disabled", "readonly", "off", "hidden"], answer: "disabled", attempted: false, selected: "" },
  { num: 48, question: "48 What does 'readonly' do in an input element?", options: ["Prevents editing", "Disables input", "Hides field", "Clears input"], answer: "Prevents editing", attempted: false, selected: "" },
  { num: 49, question: "49 What does <meta http-equiv='refresh'> do?", options: ["Refreshes the page", "Closes tab", "Resizes window", "Changes background"], answer: "Refreshes the page", attempted: false, selected: "" },
  { num: 50, question: "50 What does <bdi> tag do?", options: ["Isolates text direction", "Displays bold italic", "Disables input", "Creates block"], answer: "Isolates text direction", attempted: false, selected: "" }
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