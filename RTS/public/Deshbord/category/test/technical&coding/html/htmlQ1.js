const questions = [
  { num: 151, question: "151 What is the purpose of the 'manifest' attribute in HTML5?", options: ["Specifies offline resources", "Defines metadata", "Links stylesheets", "Embeds fonts"], answer: "Specifies offline resources", attempted: false, selected: "" },
  { num: 152, question: "152 Which tag is used to define a client-side image map?", options: ["map", "imgmap", "imagemap", "area"], answer: "map", attempted: false, selected: "" },
  { num: 153, question: "153 What does the 'hidden' attribute do in HTML?", options: ["Hides element from view", "Disables element", "Deletes element", "Renders read-only"], answer: "Hides element from view", attempted: false, selected: "" },
  { num: 154, question: "154 Which attribute specifies a short hint for an input field?", options: ["placeholder", "hint", "label", "title"], answer: "placeholder", attempted: false, selected: "" },
  { num: 155, question: "155 What does the 'reversed' attribute do in an ordered list?", options: ["Displays list in reverse order", "Aligns right", "Displays alphabetically", "Removes numbers"], answer: "Displays list in reverse order", attempted: false, selected: "" },
  { num: 156, question: "156 Which input type allows users to pick a color?", options: ["color", "palette", "hex", "rgb"], answer: "color", attempted: false, selected: "" },
  { num: 157, question: "157 What does the 'novalidate' attribute do on a form?", options: ["Disables form validation", "Resets form", "Submits with alert", "Hides errors"], answer: "Disables form validation", attempted: false, selected: "" },
  { num: 158, question: "158 What does the <template> tag provide?", options: ["Client-side content placeholder", "Reusable script", "Modal window", "CSS reset"], answer: "Client-side content placeholder", attempted: false, selected: "" },
  { num: 159, question: "159 Which element defines a scalar measurement within a known range?", options: ["meter", "range", "progress", "scale"], answer: "meter", attempted: false, selected: "" },
  { num: 160, question: "160 What does the <bdi> tag stand for?", options: ["Bi-directional isolation", "Bold italic", "Browser data interface", "Button design interface"], answer: "Bi-directional isolation", attempted: false, selected: "" },
  { num: 161, question: "161 What is the function of the <wbr> tag?", options: ["Suggests a line break opportunity", "Breaks word automatically", "Wraps border", "Defines whitespace"], answer: "Suggests a line break opportunity", attempted: false, selected: "" },
  { num: 162, question: "162 What does 'formmethod' specify in a button?", options: ["HTTP method on submit", "Form layout", "Style method", "Submit location"], answer: "HTTP method on submit", attempted: false, selected: "" },
  { num: 163, question: "163 Which tag represents the output of a calculation?", options: ["output", "samp", "result", "kbd"], answer: "output", attempted: false, selected: "" },
  { num: 164, question: "164 What is the <datalist> element used for?", options: ["List of pre-defined options", "Valid data range", "Form schema", "Display list output"], answer: "List of pre-defined options", attempted: false, selected: "" },
  { num: 165, question: "165 What is the default method for HTML forms?", options: ["GET", "POST", "SUBMIT", "PUT"], answer: "GET", attempted: false, selected: "" },
  { num: 166, question: "166 Which tag provides alternative media sources?", options: ["source", "media", "alternate", "track"], answer: "source", attempted: false, selected: "" },
  { num: 167, question: "167 What is the function of the <mark> tag?", options: ["Highlights text", "Creates label", "Inserts note", "Marks error"], answer: "Highlights text", attempted: false, selected: "" },
  { num: 168, question: "168 What does the <noscript> element do?", options: ["Provides content for no-JS environments", "Prevents scripts from loading", "Encrypts JavaScript", "Loads JavaScript asynchronously"], answer: "Provides content for no-JS environments", attempted: false, selected: "" },
  { num: 169, question: "169 Which tag groups footnotes or side comments?", options: ["aside", "footer", "note", "details"], answer: "aside", attempted: false, selected: "" },
  { num: 170, question: "170 Which input type represents a number slider?", options: ["range", "number", "slider", "step"], answer: "range", attempted: false, selected: "" },
  { num: 171, question: "171 What does the <progress> tag do?", options: ["Displays completion progress", "Submits progress", "Tracks speed", "Logs activity"], answer: "Displays completion progress", attempted: false, selected: "" },
  { num: 172, question: "172 What is the purpose of the <kbd> tag?", options: ["Indicates user input", "Creates label", "Simulates button", "Emulates script"], answer: "Indicates user input", attempted: false, selected: "" },
  { num: 173, question: "173 What does the 'readonly' attribute do?", options: ["Makes input uneditable", "Hides input", "Validates input", "Auto-submits field"], answer: "Makes input uneditable", attempted: false, selected: "" },
  { num: 174, question: "174 What does the <summary> tag do?", options: ["Provides visible heading for <details>", "Gives content summary", "Shows caption", "Labels article"], answer: "Provides visible heading for <details>", attempted: false, selected: "" },
  { num: 175, question: "175 What does the <meta charset='UTF-8'> tag define?", options: ["Character encoding", "Font type", "Page size", "CSS link"], answer: "Character encoding", attempted: false, selected: "" },
  { num: 176, question: "176 What is the purpose of the <section> tag?", options: ["Defines a thematic grouping", "Styles a container", "Creates header", "Adds border"], answer: "Defines a thematic grouping", attempted: false, selected: "" },
  { num: 177, question: "177 Which tag defines side comments or tangential content?", options: ["aside", "div", "note", "section"], answer: "aside", attempted: false, selected: "" },
  { num: 178, question: "178 What does the <basefont> tag do?", options: ["(Deprecated) Sets default font", "Links default stylesheet", "Defines fallback font", "Specifies HTML version"], answer: "(Deprecated) Sets default font", attempted: false, selected: "" },
  { num: 179, question: "179 Which attribute helps support responsive design in <img>?", options: ["srcset", "src", "alt", "usemap"], answer: "srcset", attempted: false, selected: "" },
  { num: 180, question: "180 What is the function of the <colgroup> tag?", options: ["Applies style to table columns", "Creates table header", "Groups forms", "Styles div"], answer: "Applies style to table columns", attempted: false, selected: "" },
  { num: 181, question: "181 What tag defines a container for command buttons?", options: ["menu", "command", "nav", "toolbar"], answer: "menu", attempted: false, selected: "" },
  { num: 182, question: "182 What tag is used to embed a video file?", options: ["video", "embed", "media", "object"], answer: "video", attempted: false, selected: "" },
  { num: 183, question: "183 What is the use of the <track> tag inside a video?", options: ["Captions/subtitles", "Preload control", "Buffer time", "Frame rate"], answer: "Captions/subtitles", attempted: false, selected: "" },
  { num: 184, question: "184 What is the 'multiple' attribute used for?", options: ["Select multiple files or values", "Multi-line form", "Array data", "Repeat heading"], answer: "Select multiple files or values", attempted: false, selected: "" },
  { num: 185, question: "185 What does the <object> tag support?", options: ["Embedding media like PDFs", "Draw SVG shapes", "Add external JS", "Define nav"], answer: "Embedding media like PDFs", attempted: false, selected: "" },
  { num: 186, question: "186 Which element is used for keyboard input?", options: ["kbd", "input", "code", "var"], answer: "kbd", attempted: false, selected: "" },
  { num: 187, question: "187 What does the <param> tag define?", options: ["Parameters for plugins", "CSS variables", "Form inputs", "Page metadata"], answer: "Parameters for plugins", attempted: false, selected: "" },
  { num: 188, question: "188 What tag is used to define superscript text?", options: ["sup", "super", "up", "caption"], answer: "sup", attempted: false, selected: "" },
  { num: 189, question: "189 What does the <cite> tag specify?", options: ["Title of a work", "Citation ID", "Footnote link", "Web reference"], answer: "Title of a work", attempted: false, selected: "" },
  { num: 190, question: "190 What is the use of <thead> tag in HTML tables?", options: ["Groups header content", "Applies theme", "Links style", "Inserts icons"], answer: "Groups header content", attempted: false, selected: "" },
  { num: 191, question: "191 What does the 'contenteditable' attribute do?", options: ["Makes element editable", "Hides element", "Adds comment", "Saves form"], answer: "Makes element editable", attempted: false, selected: "" },
  { num: 192, question: "192 What tag groups footer content in tables?", options: ["tfoot", "tfootbar", "tablefoot", "footer"], answer: "tfoot", attempted: false, selected: "" },
  { num: 193, question: "193 What is the use of <caption> in tables?", options: ["Provides table title", "Adds description", "Displays column name", "Links to header"], answer: "Provides table title", attempted: false, selected: "" },
  { num: 194, question: "194 What attribute disables an HTML input?", options: ["disabled", "readonly", "hide", "inactive"], answer: "disabled", attempted: false, selected: "" },
  { num: 195, question: "195 What tag is used to define a comment in HTML?", options: ["<!-- comment -->", "// comment", "# comment", "<comment>"], answer: "<!-- comment -->", attempted: false, selected: "" },
  { num: 196, question: "196 What does the <code> tag represent?", options: ["Computer code fragment", "Color picker", "Compressed object", "Data schema"], answer: "Computer code fragment", attempted: false, selected: "" },
  { num: 197, question: "197 Which tag specifies inline quotations?", options: ["q", "blockquote", "quote", "line"], answer: "q", attempted: false, selected: "" },
  { num: 198, question: "198 What does the <blockquote> tag define?", options: ["A long quotation block", "Highlighted content", "Warning block", "Script block"], answer: "A long quotation block", attempted: false, selected: "" },
  { num: 199, question: "199 What does the <style> tag do?", options: ["Defines internal CSS", "Defines layout", "Styles JS", "Styles attributes"], answer: "Defines internal CSS", attempted: false, selected: "" },
  { num: 200, question: "200 What is the role of <link> tag?", options: ["Links external resources", "Applies metadata", "Links to forms", "Generates QR"], answer: "Links external resources", attempted: false, selected: "" }
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
