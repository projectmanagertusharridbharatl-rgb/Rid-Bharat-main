const questions = [
  { num: 1, question: "1 Which HTML5 element is used to play video files?", options: ["video", "media", "movie", "player"], answer: "video", attempted: false, selected: "" },
  { num: 2, question: "2 What is the purpose of the 'autoplay' attribute in the <video> tag?", options: ["Plays video automatically", "Loops video", "Shows subtitles", "Adds controls"], answer: "Plays video automatically", attempted: false, selected: "" },
  { num: 3, question: "3 Which tag is used to define an interactive field for user input?", options: ["input", "field", "textbox", "ui"], answer: "input", attempted: false, selected: "" },
  { num: 4, question: "4 Which attribute is used to validate a required input field?", options: ["required", "validate", "need", "must"], answer: "required", attempted: false, selected: "" },
  { num: 5, question: "5 What does the <datalist> element provide?", options: ["Predefined input options", "Data list table", "Form validation", "Audio list"], answer: "Predefined input options", attempted: false, selected: "" },
  { num: 6, question: "6 Which HTML element is used to group form fields?", options: ["fieldset", "formset", "group", "wrapper"], answer: "fieldset", attempted: false, selected: "" },
  { num: 7, question: "7 Which HTML tag is used for scalable vector graphics?", options: ["svg", "canvas", "vector", "graphics"], answer: "svg", attempted: false, selected: "" },
  { num: 8, question: "8 Which tag is used to define a client-side script?", options: ["script", "code", "js", "javascript"], answer: "script", attempted: false, selected: "" },
  { num: 9, question: "9 What attribute specifies the MIME type in the <script> tag?", options: ["type", "script-type", "mimetype", "src-type"], answer: "type", attempted: false, selected: "" },
  { num: 10, question: "10 What is the purpose of the 'defer' attribute in a script?", options: ["Executes after HTML parsing", "Delays video", "Defers page loading", "Runs script first"], answer: "Executes after HTML parsing", attempted: false, selected: "" },
  { num: 11, question: "11 Which tag creates a container for graphics via scripting?", options: ["canvas", "svg", "paint", "graphics"], answer: "canvas", attempted: false, selected: "" },
  { num: 12, question: "12 What is the 'contenteditable' attribute used for?", options: ["Make content editable", "Hide content", "Style text", "Lock element"], answer: "Make content editable", attempted: false, selected: "" },
  { num: 13, question: "13 Which attribute prevents form data from being submitted?", options: ["novalidate", "nonsubmit", "disabled", "readonly"], answer: "novalidate", attempted: false, selected: "" },
  { num: 14, question: "14 What does the <output> tag do?", options: ["Displays calculation result", "Prints document", "Defines output device", "Shows logs"], answer: "Displays calculation result", attempted: false, selected: "" },
  { num: 15, question: "15 Which HTML5 element defines self-contained content?", options: ["article", "aside", "div", "content"], answer: "article", attempted: false, selected: "" },
  { num: 16, question: "16 What does the <progress> element display?", options: ["Task progress bar", "Video timeline", "Audio volume", "Download file"], answer: "Task progress bar", attempted: false, selected: "" },
  { num: 17, question: "17 What is the use of the <mark> tag?", options: ["Highlights text", "Adds bookmark", "Links text", "Marks heading"], answer: "Highlights text", attempted: false, selected: "" },
  { num: 18, question: "18 Which attribute links a label to a form control?", options: ["for", "link", "ref", "idto"], answer: "for", attempted: false, selected: "" },
  { num: 19, question: "19 Which HTML tag supports audio playback?", options: ["audio", "sound", "mp3", "media"], answer: "audio", attempted: false, selected: "" },
  { num: 20, question: "20 Which element is used to display a list of terms and definitions?", options: ["dl", "ul", "dtl", "ol"], answer: "dl", attempted: false, selected: "" },
  { num: 21, question: "21 What tag is used to define a key on the keyboard?", options: ["kbd", "key", "ctrl", "btn"], answer: "kbd", attempted: false, selected: "" },
  { num: 22, question: "22 Which tag is used to define sample output from a program?", options: ["samp", "output", "print", "kbd"], answer: "samp", attempted: false, selected: "" },
  { num: 23, question: "23 What is the purpose of the <noscript> tag?", options: ["Displays content if scripts are disabled", "Hides script errors", "Disables JS", "Imports styles"], answer: "Displays content if scripts are disabled", attempted: false, selected: "" },
  { num: 24, question: "24 What does the 'download' attribute in <a> tag do?", options: ["Triggers file download", "Links to webpage", "Opens file", "Prints document"], answer: "Triggers file download", attempted: false, selected: "" },
  { num: 25, question: "25 Which HTML tag is used to group inline-elements?", options: ["span", "div", "section", "group"], answer: "span", attempted: false, selected: "" },
  { num: 26, question: "26 What does the 'hidden' attribute do?", options: ["Hides the element", "Deletes the tag", "Secures content", "Resizes the layout"], answer: "Hides the element", attempted: false, selected: "" },
  { num: 27, question: "27 Which HTML element defines navigation links?", options: ["nav", "link", "menu", "aside"], answer: "nav", attempted: false, selected: "" },
  { num: 28, question: "28 Which tag is used to define a figure caption?", options: ["figcaption", "caption", "legend", "figuretitle"], answer: "figcaption", attempted: false, selected: "" },
  { num: 29, question: "29 What is the use of the <template> tag?", options: ["Stores reusable code fragments", "Defines header", "Creates function", "Designs layout"], answer: "Stores reusable code fragments", attempted: false, selected: "" },
  { num: 30, question: "30 Which attribute is used to specify a short hint for input fields?", options: ["placeholder", "hint", "title", "alt"], answer: "placeholder", attempted: false, selected: "" },
  { num: 31, question: "31 Which tag represents the result of a calculation?", options: ["output", "result", "value", "calc"], answer: "output", attempted: false, selected: "" },
  { num: 32, question: "32 Which attribute is used to specify a pre-selected option?", options: ["selected", "checked", "default", "preselect"], answer: "selected", attempted: false, selected: "" },
  { num: 33, question: "33 What is the role of the <track> element?", options: ["Defines text tracks for media", "Plays audio", "Tracks user input", "Styles media"], answer: "Defines text tracks for media", attempted: false, selected: "" },
  { num: 34, question: "34 Which tag is used to define a time/date?", options: ["time", "date", "datetime", "calendar"], answer: "time", attempted: false, selected: "" },
  { num: 35, question: "35 What does the 'spellcheck' attribute do?", options: ["Enables spell checking", "Disables script errors", "Runs grammar check", "Fixes typos"], answer: "Enables spell checking", attempted: false, selected: "" },
  { num: 36, question: "36 What is the use of the <details> tag?", options: ["Creates expandable section", "Shows summary", "Hides image", "Displays error"], answer: "Creates expandable section", attempted: false, selected: "" },
  { num: 37, question: "37 What tag is used inside <details> to show a heading?", options: ["summary", "caption", "header", "title"], answer: "summary", attempted: false, selected: "" },
  { num: 38, question: "38 Which HTML attribute disables an input field?", options: ["disabled", "readonly", "inactive", "locked"], answer: "disabled", attempted: false, selected: "" },
  { num: 39, question: "39 What does the <address> tag describe?", options: ["Contact info", "Location link", "Mail server", "IP address"], answer: "Contact info", attempted: false, selected: "" },
  { num: 40, question: "40 Which tag is used to display mathematical expressions?", options: ["math", "equation", "formula", "calc"], answer: "math", attempted: false, selected: "" },
  { num: 41, question: "41 What is the purpose of the <meta charset='UTF-8'> tag?", options: ["Defines character encoding", "Loads script", "Sets language", "Styles layout"], answer: "Defines character encoding", attempted: false, selected: "" },
  { num: 42, question: "42 Which HTML tag provides a tooltip on hover?", options: ["title", "hover", "alt", "tip"], answer: "title", attempted: false, selected: "" },
  { num: 43, question: "43 Which element defines emphasized text with semantic importance?", options: ["em", "i", "strong", "mark"], answer: "strong", attempted: false, selected: "" },
  { num: 44, question: "44 What tag defines a scalar measurement within a known range?", options: ["meter", "progress", "range", "value"], answer: "meter", attempted: false, selected: "" },
  { num: 45, question: "45 Which tag defines a list of options for input?", options: ["datalist", "list", "select", "options"], answer: "datalist", attempted: false, selected: "" },
  { num: 46, question: "46 What does the 'autofocus' attribute do?", options: ["Focuses input on load", "Animates element", "Highlights form", "Opens dialog"], answer: "Focuses input on load", attempted: false, selected: "" },
  { num: 47, question: "47 What tag is used for computer code with preserved formatting?", options: ["pre", "code", "kbd", "tt"], answer: "pre", attempted: false, selected: "" },
  { num: 48, question: "48 What is the function of <object> tag?", options: ["Embeds multimedia", "Defines table", "Links scripts", "Creates object literal"], answer: "Embeds multimedia", attempted: false, selected: "" },
  { num: 49, question: "49 What is the default method for form submission?", options: ["GET", "POST", "SEND", "PUT"], answer: "GET", attempted: false, selected: "" },
  { num: 50, question: "50 Which element defines a relationship between document and external resource?", options: ["link", "meta", "a", "style"], answer: "link", attempted: false, selected: "" }
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