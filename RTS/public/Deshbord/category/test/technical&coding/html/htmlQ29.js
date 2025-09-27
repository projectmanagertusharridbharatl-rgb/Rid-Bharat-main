const questions = [
  { num: 1, question: "1 What is the purpose of the 'contenteditable' attribute?", options: ["Makes element editable", "Applies CSS style", "Links JavaScript", "Defines data type"], answer: "Makes element editable", attempted: false, selected: "" },
  { num: 2, question: "2 What is the use of the 'draggable' attribute?", options: ["Specifies whether element is draggable", "Enables drop event", "Moves element position", "Defines drag area"], answer: "Specifies whether element is draggable", attempted: false, selected: "" },
  { num: 3, question: "3 Which tag defines a scalar measurement within a known range?", options: ["meter", "range", "progress", "scale"], answer: "meter", attempted: false, selected: "" },
  { num: 4, question: "4 Which tag is used to define client-side image map area?", options: ["area", "map", "link", "region"], answer: "area", attempted: false, selected: "" },
  { num: 5, question: "5 What does the 'async' attribute do in a <script> tag?", options: ["Executes script asynchronously", "Makes script synchronous", "Delays script load", "Refreshes script"], answer: "Executes script asynchronously", attempted: false, selected: "" },
  { num: 6, question: "6 Which tag defines an element that is self-contained?", options: ["article", "section", "aside", "block"], answer: "article", attempted: false, selected: "" },
  { num: 7, question: "7 What is the use of the 'hidden' attribute?", options: ["Hides the element", "Encrypts data", "Deletes element", "Marks as private"], answer: "Hides the element", attempted: false, selected: "" },
  { num: 8, question: "8 What does 'autofocus' do in an input element?", options: ["Automatically focuses on load", "Fills data automatically", "Adds animation", "Shows placeholder"], answer: "Automatically focuses on load", attempted: false, selected: "" },
  { num: 9, question: "9 Which attribute allows specifying a URL for form submission?", options: ["action", "method", "href", "url"], answer: "action", attempted: false, selected: "" },
  { num: 10, question: "10 Which tag is used to define a label for an input?", options: ["label", "span", "tag", "inputname"], answer: "label", attempted: false, selected: "" },
  { num: 11, question: "11 What is the function of the 'formnovalidate' attribute?", options: ["Disables form validation", "Hides form", "Encrypts form data", "Disables button"], answer: "Disables form validation", attempted: false, selected: "" },
  { num: 12, question: "12 What does the 'rel' attribute in <link> tag define?", options: ["Relationship between documents", "Relative position", "Reload interval", "Remote link"], answer: "Relationship between documents", attempted: false, selected: "" },
  { num: 13, question: "13 Which tag is used to embed a video in HTML?", options: ["video", "media", "object", "movie"], answer: "video", attempted: false, selected: "" },
  { num: 14, question: "14 What does the 'sandbox' attribute in <iframe> do?", options: ["Applies restrictions to iframe content", "Expands iframe", "Adds animations", "Imports scripts"], answer: "Applies restrictions to iframe content", attempted: false, selected: "" },
  { num: 15, question: "15 Which tag is used for external application plugins?", options: ["object", "plugin", "applet", "embed"], answer: "object", attempted: false, selected: "" },
  { num: 16, question: "16 What is the purpose of the 'download' attribute in <a> tag?", options: ["Forces file download", "Displays link text", "Opens in browser", "Redirects page"], answer: "Forces file download", attempted: false, selected: "" },
  { num: 17, question: "17 Which input type is used for selecting colors?", options: ["color", "hex", "rgb", "picker"], answer: "color", attempted: false, selected: "" },
  { num: 18, question: "18 What does the <track> tag do?", options: ["Provides text tracks for media", "Shows captions", "Syncs timeline", "Adds subtitles manually"], answer: "Provides text tracks for media", attempted: false, selected: "" },
  { num: 19, question: "19 Which element is best suited for side notes?", options: ["aside", "note", "section", "details"], answer: "aside", attempted: false, selected: "" },
  { num: 20, question: "20 Which tag is used to define grouped options in a dropdown?", options: ["optgroup", "option", "select", "group"], answer: "optgroup", attempted: false, selected: "" },
  { num: 21, question: "21 What is the role of <fieldset> in forms?", options: ["Groups related fields", "Adds style", "Defines layout", "Validates data"], answer: "Groups related fields", attempted: false, selected: "" },
  { num: 22, question: "22 What does the 'multiple' attribute allow in input?", options: ["Select multiple values", "Multiple submissions", "Clone input", "Enable validation"], answer: "Select multiple values", attempted: false, selected: "" },
  { num: 23, question: "23 Which attribute triggers JavaScript when input changes?", options: ["onchange", "onclick", "onhover", "onedit"], answer: "onchange", attempted: false, selected: "" },
  { num: 24, question: "24 What is the function of <template> tag?", options: ["Holds HTML for later rendering", "Defines master layout", "Includes JS template", "Creates theme"], answer: "Holds HTML for later rendering", attempted: false, selected: "" },
  { num: 25, question: "25 Which tag is used to display result of a calculation?", options: ["output", "calc", "script", "result"], answer: "output", attempted: false, selected: "" },
  { num: 26, question: "26 What does the 'novalidate' attribute do in a form?", options: ["Disables form validation", "Hides warning", "Locks input", "Ignores JS"], answer: "Disables form validation", attempted: false, selected: "" },
  { num: 27, question: "27 What is the role of <param> tag?", options: ["Defines parameters for object tag", "Adds paragraph", "Sets parent", "Links parameter"], answer: "Defines parameters for object tag", attempted: false, selected: "" },
  { num: 28, question: "28 Which attribute defines a fallback text for media?", options: ["alt", "fallback", "caption", "subtitle"], answer: "alt", attempted: false, selected: "" },
  { num: 29, question: "29 What is the use of <bdi> tag?", options: ["Isolates part of text", "Bold italic text", "Imports layout", "Displays image"], answer: "Isolates part of text", attempted: false, selected: "" },
  { num: 30, question: "30 Which tag defines dialog box or popup?", options: ["dialog", "popup", "modal", "section"], answer: "dialog", attempted: false, selected: "" },
  { num: 31, question: "31 What does the 'spellcheck' attribute do?", options: ["Enables spell checking", "Corrects grammar", "Hides typos", "Marks keywords"], answer: "Enables spell checking", attempted: false, selected: "" },
  { num: 32, question: "32 What is the purpose of <source> tag?", options: ["Specifies media resources", "Links JavaScript", "Provides URL", "Shows output"], answer: "Specifies media resources", attempted: false, selected: "" },
  { num: 33, question: "33 Which tag is used to define navigation links?", options: ["nav", "link", "menu", "ul"], answer: "nav", attempted: false, selected: "" },
  { num: 34, question: "34 Which input type ensures URL formatting?", options: ["url", "text", "href", "link"], answer: "url", attempted: false, selected: "" },
  { num: 35, question: "35 What does the <mark> tag indicate?", options: ["Highlighted text", "Bookmark", "Marked section", "Meta tag"], answer: "Highlighted text", attempted: false, selected: "" },
  { num: 36, question: "36 What is the use of <em> tag?", options: ["Emphasized text", "Email link", "Empty tag", "Embed file"], answer: "Emphasized text", attempted: false, selected: "" },
  { num: 37, question: "37 Which tag represents the main content of a document?", options: ["main", "body", "section", "center"], answer: "main", attempted: false, selected: "" },
  { num: 38, question: "38 What does the <sup> tag do?", options: ["Displays superscript", "Supports text", "Supplies input", "Submits form"], answer: "Displays superscript", attempted: false, selected: "" },
  { num: 39, question: "39 Which tag represents subscript text?", options: ["sub", "script", "subtext", "under"], answer: "sub", attempted: false, selected: "" },
  { num: 40, question: "40 What is the purpose of <cite> tag?", options: ["Cites source", "Creates title", "Defines site", "Links citation"], answer: "Cites source", attempted: false, selected: "" },
  { num: 41, question: "41 What is the role of <code> tag?", options: ["Displays computer code", "Generates script", "Includes JS", "Renders CSS"], answer: "Displays computer code", attempted: false, selected: "" },
  { num: 42, question: "42 What does the <samp> tag define?", options: ["Sample output", "Sanitized text", "Syntax hint", "Script alert"], answer: "Sample output", attempted: false, selected: "" },
  { num: 43, question: "43 Which tag is used for strong importance?", options: ["strong", "b", "em", "mark"], answer: "strong", attempted: false, selected: "" },
  { num: 44, question: "44 What does <var> tag represent?", options: ["Variable in code", "Variant layout", "Value result", "Vertical space"], answer: "Variable in code", attempted: false, selected: "" },
  { num: 45, question: "45 What is the use of <hr> tag?", options: ["Creates horizontal line", "Hard reset", "Header replacement", "Height rule"], answer: "Creates horizontal line", attempted: false, selected: "" },
  { num: 46, question: "46 Which tag represents quotation from another source?", options: ["blockquote", "quote", "q", "note"], answer: "blockquote", attempted: false, selected: "" },
  { num: 47, question: "47 Which tag is used to define inline short quotes?", options: ["q", "quote", "short", "s"], answer: "q", attempted: false, selected: "" },
  { num: 48, question: "48 What is the use of <pre> tag?", options: ["Preserves formatting", "Preloads data", "Prevents render", "Prints content"], answer: "Preserves formatting", attempted: false, selected: "" },
  { num: 49, question: "49 What does the <small> tag represent?", options: ["Smaller text", "Short script", "Small width", "Silent text"], answer: "Smaller text", attempted: false, selected: "" },
  { num: 50, question: "50 What does the <meta charset='UTF-8'> define?", options: ["Character encoding", "Meta layout", "Script behavior", "Charset order"], answer: "Character encoding", attempted: false, selected: "" }
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