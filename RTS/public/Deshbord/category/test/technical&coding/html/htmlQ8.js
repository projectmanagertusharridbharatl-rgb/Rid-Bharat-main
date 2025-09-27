const questions = [
  { num: 251, question: "251 What is the purpose of the 'hidden' attribute in HTML?", options: ["Hides element from view", "Deletes element", "Makes text bold", "Adds spacing"], answer: "Hides element from view", attempted: false, selected: "" },
  { num: 252, question: "252 What does the 'novalidate' attribute do in forms?", options: ["Skips validation on submit", "Disables all inputs", "Makes form read-only", "Hides form"], answer: "Skips validation on submit", attempted: false, selected: "" },
  { num: 253, question: "253 What is the purpose of the template tag?", options: ["Holds client-side content", "Displays preformatted text", "Creates layout", "Defines style"], answer: "Holds client-side content", attempted: false, selected: "" },
  { num: 254, question: "254 Which tag is used to define output of calculations?", options: ["output", "calc", "result", "display"], answer: "output", attempted: false, selected: "" },
  { num: 255, question: "255 What does the 'autoplay' attribute do in media elements?", options: ["Starts media automatically", "Loops media", "Adds controls", "Downloads file"], answer: "Starts media automatically", attempted: false, selected: "" },
  { num: 256, question: "256 What is the use of <track> tag?", options: ["Provides subtitles", "Adds animation", "Loads plugin", "Inserts ad"], answer: "Provides subtitles", attempted: false, selected: "" },
  { num: 257, question: "257 What does the 'muted' attribute do in video/audio?", options: ["Mutes the media", "Disables download", "Skips content", "Changes volume"], answer: "Mutes the media", attempted: false, selected: "" },
  { num: 258, question: "258 What is the function of 'srcdoc' in iframe?", options: ["Embeds HTML content", "Links JavaScript", "Applies CSS", "Sets document title"], answer: "Embeds HTML content", attempted: false, selected: "" },
  { num: 259, question: "259 What does the 'multiple' attribute do in select or input?", options: ["Allows multiple selections", "Duplicates element", "Saves input", "Sends email"], answer: "Allows multiple selections", attempted: false, selected: "" },
  { num: 260, question: "260 What does the progress tag represent?", options: ["Progress of task", "Total duration", "Form step", "Error status"], answer: "Progress of task", attempted: false, selected: "" },
  { num: 261, question: "261 What is the use of meter tag?", options: ["Represents scalar value", "Draws chart", "Adds animation", "Creates graph"], answer: "Represents scalar value", attempted: false, selected: "" },
  { num: 262, question: "262 What does 'contenteditable' attribute enable?", options: ["User can edit content", "Read-only mode", "Highlights text", "Adds input box"], answer: "User can edit content", attempted: false, selected: "" },
  { num: 263, question: "263 Which tag is used to define keyboard input?", options: ["kbd", "code", "var", "input"], answer: "kbd", attempted: false, selected: "" },
  { num: 264, question: "264 Which tag specifies sample output from a program?", options: ["samp", "code", "pre", "kbd"], answer: "samp", attempted: false, selected: "" },
  { num: 265, question: "265 What does the 'form' attribute in input tag refer to?", options: ["Associated form ID", "Input size", "Fieldset name", "Submit method"], answer: "Associated form ID", attempted: false, selected: "" },
  { num: 266, question: "266 What is the use of noscript tag?", options: ["Fallback for disabled JavaScript", "Adds script delay", "Styles script", "Blocks JS file"], answer: "Fallback for disabled JavaScript", attempted: false, selected: "" },
  { num: 267, question: "267 What does the object tag do?", options: ["Embeds external objects", "Creates table", "Links CSS", "Saves files"], answer: "Embeds external objects", attempted: false, selected: "" },
  { num: 268, question: "268 What is the use of param tag?", options: ["Defines parameters for object", "Sets page properties", "Declares method", "Validates input"], answer: "Defines parameters for object", attempted: false, selected: "" },
  { num: 269, question: "269 What tag is used to define base URL for all links?", options: ["base", "meta", "url", "head"], answer: "base", attempted: false, selected: "" },
  { num: 270, question: "270 Which tag is used to represent a caption for a table?", options: ["caption", "label", "legend", "title"], answer: "caption", attempted: false, selected: "" },
  { num: 271, question: "271 What does the 'poster' attribute do in <video>?", options: ["Sets preview image", "Pauses video", "Adds watermark", "Loads faster"], answer: "Sets preview image", attempted: false, selected: "" },
  { num: 272, question: "272 What is the use of mark tag?", options: ["Highlights text", "Adds margin", "Changes font", "Inserts image"], answer: "Highlights text", attempted: false, selected: "" },
  { num: 273, question: "273 Which tag is used to define quotations?", options: ["blockquote", "quote", "q", "cite"], answer: "blockquote", attempted: false, selected: "" },
  { num: 274, question: "274 What is the role of cite tag?", options: ["References source", "Creates comment", "Sets italic", "Displays error"], answer: "References source", attempted: false, selected: "" },
  { num: 275, question: "275 Which attribute prevents resizing of textarea?", options: ["resize='none'", "static", "readonly", "disabled"], answer: "resize='none'", attempted: false, selected: "" },
  { num: 276, question: "276 Which tag is used to insert a comment in HTML?", options: ["<!-- -->", "//", "/* */", "#"], answer: "<!-- -->", attempted: false, selected: "" },
  { num: 277, question: "277 Which tag is used to define a responsive image?", options: ["picture", "img-responsive", "srcset", "figure"], answer: "picture", attempted: false, selected: "" },
  { num: 278, question: "278 What is the use of summary tag?", options: ["Provides heading for <details>", "Summarizes article", "Creates list", "Inserts video"], answer: "Provides heading for <details>", attempted: false, selected: "" },
  { num: 279, question: "279 Which attribute defines the value of meter element?", options: ["value", "meter", "score", "level"], answer: "value", attempted: false, selected: "" },
  { num: 280, question: "280 What does the 'readonly' attribute do?", options: ["Disables editing input", "Hides field", "Removes validation", "Clears data"], answer: "Disables editing input", attempted: false, selected: "" },
  { num: 281, question: "281 What is the use of fieldset tag?", options: ["Groups related form fields", "Adds border", "Styles form", "Checks validation"], answer: "Groups related form fields", attempted: false, selected: "" },
  { num: 282, question: "282 What is the role of code tag?", options: ["Displays code in monospace", "Executes code", "Comments code", "Logs output"], answer: "Displays code in monospace", attempted: false, selected: "" },
  { num: 283, question: "283 What does bdi tag stand for?", options: ["Bi-directional isolation", "Bold italic", "Block inline", "Background image"], answer: "Bi-directional isolation", attempted: false, selected: "" },
  { num: 284, question: "284 Which tag is used to define a footer for section?", options: ["footer", "section", "bottom", "aside"], answer: "footer", attempted: false, selected: "" },
  { num: 285, question: "285 Which attribute sets default value in input?", options: ["value", "default", "initial", "text"], answer: "value", attempted: false, selected: "" },
  { num: 286, question: "286 What does the 'autocomplete' attribute do?", options: ["Suggests previous input", "Corrects data", "Validates entry", "Adds icon"], answer: "Suggests previous input", attempted: false, selected: "" },
  { num: 287, question: "287 Which tag represents a side content?", options: ["aside", "section", "div", "article"], answer: "aside", attempted: false, selected: "" },
  { num: 288, question: "288 What does the 'type' attribute define in <input>?", options: ["Input field behavior", "Text alignment", "Font type", "Password hint"], answer: "Input field behavior", attempted: false, selected: "" },
  { num: 289, question: "289 Which tag is used to define inline subscript?", options: ["sub", "sup", "small", "em"], answer: "sub", attempted: false, selected: "" },
  { num: 290, question: "290 Which tag defines inline superscript?", options: ["sup", "sub", "small", "em"], answer: "sup", attempted: false, selected: "" },
  { num: 291, question: "291 Which tag is used to represent small text?", options: ["small", "span", "em", "b"], answer: "small", attempted: false, selected: "" },
  { num: 292, question: "292 What is the use of style tag?", options: ["Defines CSS rules", "Adds font", "Scripts logic", "Adds media"], answer: "Defines CSS rules", attempted: false, selected: "" },
  { num: 293, question: "293 Which tag defines an inline container?", options: ["span", "div", "p", "section"], answer: "span", attempted: false, selected: "" },
  { num: 294, question: "294 What tag is used for inserting an image?", options: ["img", "image", "picture", "media"], answer: "img", attempted: false, selected: "" },
  { num: 295, question: "295 What is the purpose of the 'alt' attribute in <img>?", options: ["Text for broken image", "Tooltip", "Zoom image", "Bold image"], answer: "Text for broken image", attempted: false, selected: "" },
  { num: 296, question: "296 What does the 'srcset' attribute in img tag define?", options: ["Responsive image sources", "Script link", "Image alignment", "Shadow filter"], answer: "Responsive image sources", attempted: false, selected: "" },
  { num: 297, question: "297 What tag is used to group headings, nav, and intro?", options: ["header", "title", "head", "section"], answer: "header", attempted: false, selected: "" },
  { num: 298, question: "298 What tag is used to define grouped navigation links?", options: ["nav", "menu", "list", "aside"], answer: "nav", attempted: false, selected: "" },
  { num: 299, question: "299 What does the 'accesskey' attribute provide?", options: ["Keyboard shortcut", "Input validation", "Auto-complete text", "Tab order"], answer: "Keyboard shortcut", attempted: false, selected: "" },
  { num: 300, question: "300 Which HTML tag is used to embed SVG?", options: ["svg", "canvas", "img", "vector"], answer: "svg", attempted: false, selected: "" }
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


