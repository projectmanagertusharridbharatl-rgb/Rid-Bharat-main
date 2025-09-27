  const questions = [
  { num: 1, question: "1 What does the 'contenteditable' attribute do?", options: ["Makes an element editable", "Disables editing", "Highlights text", "Locks content"], answer: "Makes an element editable", attempted: false, selected: "" },
  { num: 2, question: "2 Which attribute defines a custom data attribute?", options: ["data-*", "custom-*", "aria-*", "meta-*"], answer: "data-*", attempted: false, selected: "" },
  { num: 3, question: "3 What is the purpose of the 'slotchange' event?", options: ["Detects changes in assigned nodes to a slot", "Triggers on slot creation", "Fires when slot is removed", "Handles slot styling"], answer: "Detects changes in assigned nodes to a slot", attempted: false, selected: "" },
  { num: 4, question: "4 Which attribute enables embedding of an SVG inside HTML?", options: ["svg", "canvas", "embed", "object"], answer: "svg", attempted: false, selected: "" },
  { num: 5, question: "5 What does the 'part' attribute in Shadow DOM do?", options: ["Exposes elements for styling", "Defines shadow root", "Declares event handlers", "Assigns slot names"], answer: "Exposes elements for styling", attempted: false, selected: "" },
  { num: 6, question: "6 Which element is used to define reusable fragments in HTML?", options: ["template", "fragment", "reuse", "slot"], answer: "template", attempted: false, selected: "" },
  { num: 7, question: "7 What is the purpose of the 'is' attribute in custom elements?", options: ["Extends built-in elements", "Defines styles", "Links scripts", "Sets ID"], answer: "Extends built-in elements", attempted: false, selected: "" },
  { num: 8, question: "8 How can you disable form validation for a specific input?", options: ["novalidate attribute", "disable attribute", "readonly attribute", "formnovalidate attribute"], answer: "novalidate attribute", attempted: false, selected: "" },
  { num: 9, question: "9 What does the 'sandbox' attribute's 'allow-popups' value enable?", options: ["Allows popup windows", "Blocks popups", "Allows fullscreen", "Enables scripts"], answer: "Allows popup windows", attempted: false, selected: "" },
  { num: 10, question: "10 Which input type allows for numeric input with sliders?", options: ["range", "number", "slider", "numeric"], answer: "range", attempted: false, selected: "" },
  { num: 11, question: "11 What does the 'srcset' attribute enable in images?", options: ["Specifies multiple image sources for responsive images", "Defines image captions", "Sets image alt text", "Specifies fallback image"], answer: "Specifies multiple image sources for responsive images", attempted: false, selected: "" },
  { num: 12, question: "12 What is the difference between 'aria-hidden' and 'hidden' attributes?", options: ["'aria-hidden' hides from assistive tech, 'hidden' hides visually", "'hidden' hides from assistive tech", "'aria-hidden' hides visually", "No difference"], answer: "'aria-hidden' hides from assistive tech, 'hidden' hides visually", attempted: false, selected: "" },
  { num: 13, question: "13 Which element represents self-contained content that could be distributed independently?", options: ["article", "section", "div", "aside"], answer: "article", attempted: false, selected: "" },
  { num: 14, question: "14 What is the effect of the 'draggable' attribute?", options: ["Allows drag-and-drop of the element", "Disables mouse events", "Enables resizing", "Locks the element"], answer: "Allows drag-and-drop of the element", attempted: false, selected: "" },
  { num: 15, question: "15 Which element is used for client-side templating?", options: ["template", "script", "div", "span"], answer: "template", attempted: false, selected: "" },
  { num: 16, question: "16 What does the 'defer' attribute on a script do?", options: ["Executes script after HTML parsing", "Loads script asynchronously", "Blocks rendering", "Delays script indefinitely"], answer: "Executes script after HTML parsing", attempted: false, selected: "" },
  { num: 17, question: "17 Which HTML element allows embedding interactive content like games?", options: ["canvas", "svg", "iframe", "embed"], answer: "canvas", attempted: false, selected: "" },
  { num: 18, question: "18 What does the 'aria-live' attribute control?", options: ["Updates for screen readers", "Live streaming content", "Live animations", "Live video controls"], answer: "Updates for screen readers", attempted: false, selected: "" },
  { num: 19, question: "19 What is the use of the 'nonce' attribute in Content Security Policy?", options: ["Allows trusted inline scripts", "Blocks all scripts", "Encrypts scripts", "Specifies external script URL"], answer: "Allows trusted inline scripts", attempted: false, selected: "" },
  { num: 20, question: "20 Which attribute specifies the base URL for relative links?", options: ["base", "href", "src", "link"], answer: "base", attempted: false, selected: "" },
  { num: 21, question: "21 What does the 'aria-pressed' attribute indicate?", options: ["Toggle button state", "Button enabled", "Button disabled", "Button focused"], answer: "Toggle button state", attempted: false, selected: "" },
  { num: 22, question: "22 What is the purpose of the 'form' attribute on form-associated elements?", options: ["Associates element with a form by ID", "Sets form action", "Defines form method", "Specifies form validation"], answer: "Associates element with a form by ID", attempted: false, selected: "" },
  { num: 23, question: "23 Which attribute allows specifying fallback fonts?", options: ["font-family", "font-fallback", "font-style", "font-weight"], answer: "font-family", attempted: false, selected: "" },
  { num: 24, question: "24 What is the function of the <picture> element?", options: ["Provides multiple image sources for different conditions", "Embeds video content", "Displays static images", "Adds captions to images"], answer: "Provides multiple image sources for different conditions", attempted: false, selected: "" },
  { num: 25, question: "25 Which attribute controls how text is wrapped inside an element?", options: ["white-space", "wrap", "text-wrap", "overflow-wrap"], answer: "white-space", attempted: false, selected: "" },
  { num: 26, question: "26 What does the 'accesskey' attribute do?", options: ["Defines keyboard shortcut", "Sets focus", "Disables element", "Triggers click"], answer: "Defines keyboard shortcut", attempted: false, selected: "" },
  { num: 27, question: "27 Which element represents a caption for the <figure> element?", options: ["figcaption", "caption", "label", "legend"], answer: "figcaption", attempted: false, selected: "" },
  { num: 28, question: "28 What is the purpose of the 'aria-describedby' attribute?", options: ["Provides descriptive text for accessibility", "Defines tooltip", "Links to styles", "Sets input placeholder"], answer: "Provides descriptive text for accessibility", attempted: false, selected: "" },
  { num: 29, question: "29 Which attribute is used to preload resources like scripts and styles?", options: ["rel='preload'", "rel='prefetch'", "rel='stylesheet'", "rel='import'"], answer: "rel='preload'", attempted: false, selected: "" },
  { num: 30, question: "30 What is the effect of setting 'autocomplete' to 'off' on a form?", options: ["Disables browser autofill", "Enables autofill", "Blocks form submission", "Validates input"], answer: "Disables browser autofill", attempted: false, selected: "" },
  { num: 31, question: "31 What does the 'aria-expanded' attribute indicate?", options: ["Whether an element is expanded or collapsed", "Visibility of an element", "Focus state", "Loading state"], answer: "Whether an element is expanded or collapsed", attempted: false, selected: "" },
  { num: 32, question: "32 What does the 'ping' attribute in <a> tags do?", options: ["Sends a POST request on click", "Preloads linked page", "Opens link in new tab", "Adds tooltip"], answer: "Sends a POST request on click", attempted: false, selected: "" },
  { num: 33, question: "33 Which element allows embedding external content like PDFs?", options: ["object", "iframe", "embed", "canvas"], answer: "object", attempted: false, selected: "" },
  { num: 34, question: "34 What does the 'rel' attribute in <link> specify?", options: ["Relationship between current document and linked resource", "Link URL", "Link type", "Link target"], answer: "Relationship between current document and linked resource", attempted: false, selected: "" },
  { num: 35, question: "35 What does the 'charset' attribute in <meta> define?", options: ["Character encoding for the document", "Language of document", "Page title", "Content description"], answer: "Character encoding for the document", attempted: false, selected: "" },
  { num: 36, question: "36 What is the purpose of the 'role' attribute in HTML?", options: ["Defines accessibility role", "Adds CSS styles", "Declares scripts", "Sets element ID"], answer: "Defines accessibility role", attempted: false, selected: "" },
  { num: 37, question: "37 What does the 'hidden' attribute do?", options: ["Hides element from rendering", "Removes element from DOM", "Disables element", "Locks element"], answer: "Hides element from rendering", attempted: false, selected: "" },
  { num: 38, question: "38 What is the 'spellcheck' attribute used for?", options: ["Enables or disables spell checking", "Highlights errors", "Blocks input", "Formats text"], answer: "Enables or disables spell checking", attempted: false, selected: "" },
  { num: 39, question: "39 Which attribute defines the input mode for virtual keyboards?", options: ["inputmode", "mode", "keyboardtype", "type"], answer: "inputmode", attempted: false, selected: "" },
  { num: 40, question: "40 What is the purpose of the 'download' attribute in <a>?", options: ["Indicates the link is for downloading a resource", "Opens link in new tab", "Preloads resource", "Sets link target"], answer: "Indicates the link is for downloading a resource", attempted: false, selected: "" },
  { num: 41, question: "41 What does the 'aria-haspopup' attribute indicate?", options: ["Element has a popup menu", "Element is hidden", "Element is disabled", "Element has tooltip"], answer: "Element has a popup menu", attempted: false, selected: "" },
  { num: 42, question: "42 Which HTML element is used to define a caption for a table?", options: ["caption", "label", "figcaption", "thead"], answer: "caption", attempted: false, selected: "" },
  { num: 43, question: "43 What is the purpose of the 'spellcheck' attribute?", options: ["Controls whether the element is checked for spelling errors", "Sets font", "Adds tooltips", "Blocks input"], answer: "Controls whether the element is checked for spelling errors", attempted: false, selected: "" },
  { num: 44, question: "44 What does the 'placeholder' attribute specify?", options: ["Hint text shown in inputs", "Sets input value", "Validates input", "Labels input"], answer: "Hint text shown in inputs", attempted: false, selected: "" },
  { num: 45, question: "45 Which attribute is used to make an element focusable?", options: ["tabindex", "focusable", "autofocus", "accesskey"], answer: "tabindex", attempted: false, selected: "" },
  { num: 46, question: "46 What is the use of the <details> element?", options: ["Creates an interactive disclosure widget", "Defines a section", "Groups form controls", "Adds scripts"], answer: "Creates an interactive disclosure widget", attempted: false, selected: "" },
  { num: 47, question: "47 What does the 'inputmode' attribute do?", options: ["Hints at the type of data expected by input", "Controls input validation", "Sets input mask", "Defines input size"], answer: "Hints at the type of data expected by input", attempted: false, selected: "" },
  { num: 48, question: "48 Which element is used to display a progress bar?", options: ["<progress>", "meter", "status", "output"], answer: "progress", attempted: false, selected: "" },
  { num: 49, question: "49 What is the purpose of the 'aria-live' attribute?", options: ["Indicates updates to screen readers", "Defines live video", "Enables live chat", "Controls live animations"], answer: "Indicates updates to screen readers", attempted: false, selected: "" },
  { num: 50, question: "50 Which attribute specifies the preferred color scheme?", options: ["media='(prefers-color-scheme)'", "theme", "color-scheme", "appearance"], answer: "media='(prefers-color-scheme)'", attempted: false, selected: "" }
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