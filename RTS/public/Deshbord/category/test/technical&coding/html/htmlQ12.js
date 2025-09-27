const questions = [
  { num: 1, question: "1 What does the 'aria-label' attribute do in HTML?", options: ["Provides accessible name", "Links label to input", "Sets tooltip text", "Changes element style"], answer: "Provides accessible name", attempted: false, selected: "" },
  { num: 2, question: "2 What is the purpose of the 'hidden' attribute in HTML?", options: ["Hides element visually and from screen readers", "Removes element from DOM", "Applies CSS display: none", "Changes opacity"], answer: "Hides element visually and from screen readers", attempted: false, selected: "" },
  { num: 3, question: "3 What is the role of the <slot> element in Web Components?", options: ["Placeholder for light DOM content", "Defines shadow DOM", "Imports external content", "Creates a slot machine"], answer: "Placeholder for light DOM content", attempted: false, selected: "" },
  { num: 4, question: "4 Which tag is used to define a shadow DOM root?", options: ["#shadow-root", "shadow", "template", "None directly, it's done in JS"], answer: "None directly, it's done in JS", attempted: false, selected: "" },
  { num: 5, question: "5 What is the function of 'contenteditable' attribute?", options: ["Makes content editable", "Saves data", "Links JS to content", "Changes element style"], answer: "Makes content editable", attempted: false, selected: "" },
  { num: 6, question: "6 What is the use of 'draggable' attribute in HTML?", options: ["Allows drag and drop", "Enables resizing", "Moves element to another page", "Binds element to JS"], answer: "Allows drag and drop", attempted: false, selected: "" },
  { num: 7, question: "7 What does the 'translate' attribute do in HTML?", options: ["Specifies if content should be translated", "Applies transform", "Converts language automatically", "Defines text direction"], answer: "Specifies if content should be translated", attempted: false, selected: "" },
  { num: 8, question: "8 What is the purpose of the <picture> element in HTML?", options: ["Serves multiple image sources", "Adds filter to image", "Creates thumbnail", "Inserts caption"], answer: "Serves multiple image sources", attempted: false, selected: "" },
  { num: 9, question: "9 What is the role of the 'srcset' attribute?", options: ["Defines multiple image sources", "Sets audio file", "Styles image", "Creates thumbnail"], answer: "Defines multiple image sources", attempted: false, selected: "" },
  { num: 10, question: "10 What does the 'autocapitalize' attribute do?", options: ["Controls capitalization of text inputs", "Caps lock detection", "Converts to upper case", "Sets font-size"], answer: "Controls capitalization of text inputs", attempted: false, selected: "" },
  { num: 11, question: "11 What is the use of 'accesskey' attribute in HTML?", options: ["Defines keyboard shortcut", "Adds password field", "Controls access", "Changes layout"], answer: "Defines keyboard shortcut", attempted: false, selected: "" },
  { num: 12, question: "12 What does 'novalidate' attribute do in a form?", options: ["Disables native form validation", "Disables CSS validation", "Ignores JS validation", "Removes form controls"], answer: "Disables native form validation", attempted: false, selected: "" },
  { num: 13, question: "13 What is the function of the <noscript> element?", options: ["Displays content if JS is disabled", "Executes JS script", "Disables JS", "Prevents loading"], answer: "Displays content if JS is disabled", attempted: false, selected: "" },
  { num: 14, question: "14 What does the 'inputmode' attribute suggest?", options: ["Preferred input method", "Field name", "Keyboard layout", "Input restriction"], answer: "Preferred input method", attempted: false, selected: "" },
  { num: 15, question: "15 What is the purpose of <progress> tag?", options: ["Displays task progress", "Shows meter range", "Measures speed", "Draws shape"], answer: "Displays task progress", attempted: false, selected: "" },
  { num: 16, question: "16 What does 'autocomplete' attribute control?", options: ["Form autofill behavior", "Password visibility", "Autoplay content", "Auto format text"], answer: "Form autofill behavior", attempted: false, selected: "" },
  { num: 17, question: "17 What is the function of the <mark> tag?", options: ["Highlights text", "Underlines text", "Bolds text", "Italicizes text"], answer: "Highlights text", attempted: false, selected: "" },
  { num: 18, question: "18 What does the 'crossorigin' attribute do?", options: ["Controls cross-origin resource sharing", "Crosses out text", "Runs script remotely", "Loads backup script"], answer: "Controls cross-origin resource sharing", attempted: false, selected: "" },
  { num: 19, question: "19 What does the <summary> tag do?", options: ["Defines summary for <details>", "Summarizes paragraph", "Creates tooltip", "Generates index"], answer: "Defines summary for <details>", attempted: false, selected: "" },
  { num: 20, question: "20 What is the purpose of 'referrerpolicy' attribute?", options: ["Controls referrer info sent with request", "Blocks phishing", "Sets domain", "Prevents cookies"], answer: "Controls referrer info sent with request", attempted: false, selected: "" },
  { num: 21, question: "21 What does the 'integrity' attribute ensure?", options: ["Checks file integrity with hash", "Prevents duplicate imports", "Hashes passwords", "Secures JS execution"], answer: "Checks file integrity with hash", attempted: false, selected: "" },
  { num: 22, question: "22 What is the function of the 'type' attribute in <button>?", options: ["Defines button behavior", "Sets button text", "Links external CSS", "Styles form"], answer: "Defines button behavior", attempted: false, selected: "" },
  { num: 23, question: "23 What does the <caption> tag define in a table?", options: ["Table title", "Table cell", "Table column", "Table header"], answer: "Table title", attempted: false, selected: "" },
  { num: 24, question: "24 What is the purpose of the <colgroup> element?", options: ["Defines group of table columns", "Styles header", "Displays caption", "Groups rows"], answer: "Defines group of table columns", attempted: false, selected: "" },
  { num: 25, question: "25 What does the 'scope' attribute in <th> tag define?", options: ["Scope of header cell", "Scope of script", "Scope of class", "Scope of CSS"], answer: "Scope of header cell", attempted: false, selected: "" },
  { num: 26, question: "26 What is the use of <thead> in HTML tables?", options: ["Defines header section of a table", "Aligns table", "Creates border", "Sums up rows"], answer: "Defines header section of a table", attempted: false, selected: "" },
  { num: 27, question: "27 What is the purpose of <tfoot> tag in HTML?", options: ["Defines footer of table", "Closes table", "Adds style", "Creates summary"], answer: "Defines footer of table", attempted: false, selected: "" },
  { num: 28, question: "28 What does the <track> tag support?", options: ["Text tracks for media", "Tracks user data", "Downloads media", "Adjusts volume"], answer: "Text tracks for media", attempted: false, selected: "" },
  { num: 29, question: "29 What does the 'controls' attribute do in media tags?", options: ["Displays media controls", "Plays media", "Loops media", "Downloads media"], answer: "Displays media controls", attempted: false, selected: "" },
  { num: 30, question: "30 What does the 'loop' attribute do in <audio>/<video>?", options: ["Repeats playback", "Loops animation", "Changes pitch", "Loads subtitles"], answer: "Repeats playback", attempted: false, selected: "" },
  { num: 31, question: "31 What does the 'muted' attribute do in <audio>/<video>?", options: ["Starts playback muted", "Disables loop", "Pauses audio", "Increases volume"], answer: "Starts playback muted", attempted: false, selected: "" },
  { num: 32, question: "32 What is the role of the 'poster' attribute in <video>?", options: ["Specifies placeholder image", "Adds watermark", "Shows preview", "Auto-resumes playback"], answer: "Specifies placeholder image", attempted: false, selected: "" },
  { num: 33, question: "33 What does the <fieldset> tag do?", options: ["Groups related form elements", "Adds border", "Styles input", "Adds placeholder"], answer: "Groups related form elements", attempted: false, selected: "" },
  { num: 34, question: "34 What does the 'multiple' attribute allow in <input>?", options: ["Multiple file or value selection", "Multi-user form", "Clones inputs", "Shows error"], answer: "Multiple file or value selection", attempted: false, selected: "" },
  { num: 35, question: "35 What is the use of 'pattern' attribute in inputs?", options: ["Validates input with regex", "Applies background", "Formats phone number", "Changes text direction"], answer: "Validates input with regex", attempted: false, selected: "" },
  { num: 36, question: "36 What does the <iframe> tag do?", options: ["Embeds external webpage", "Imports script", "Adds modal", "Includes style"], answer: "Embeds external webpage", attempted: false, selected: "" },
  { num: 37, question: "37 What does the 'srcdoc' attribute do in <iframe>?", options: ["Defines inline HTML content", "Sets document title", "Adds JavaScript", "Embeds PDF"], answer: "Defines inline HTML content", attempted: false, selected: "" },
  { num: 38, question: "38 What is the function of <base> tag in HTML?", options: ["Sets base URL for all relative URLs", "Defines base class", "Creates base layout", "Links styles"], answer: "Sets base URL for all relative URLs", attempted: false, selected: "" },
  { num: 39, question: "39 What does the <meta charset='UTF-8'> tag define?", options: ["Character encoding of document", "Author name", "Script type", "Language locale"], answer: "Character encoding of document", attempted: false, selected: "" },
  { num: 40, question: "40 What is the purpose of <link rel='preload'>?", options: ["Preloads resources before use", "Loads scripts on demand", "Links social media", "Applies theme"], answer: "Preloads resources before use", attempted: false, selected: "" },
  { num: 41, question: "41 What is the use of <meta name='viewport'>?", options: ["Sets viewport size for mobile", "Defines title", "Shows map", "Adjusts zoom"], answer: "Sets viewport size for mobile", attempted: false, selected: "" },
  { num: 42, question: "42 What does the 'lang' attribute specify?", options: ["Language of element content", "Script type", "Locale setting", "Font style"], answer: "Language of element content", attempted: false, selected: "" },
  { num: 43, question: "43 What is the purpose of <canvas> element?", options: ["Draw graphics using JS", "Render SVG", "Animate GIF", "Show map"], answer: "Draw graphics using JS", attempted: false, selected: "" },
  { num: 44, question: "44 What does <svg> tag support?", options: ["Vector graphics", "Video playback", "Form validation", "Web security"], answer: "Vector graphics", attempted: false, selected: "" },
  { num: 45, question: "45 What is the function of <del> tag?", options: ["Represents deleted content", "Deletes file", "Clears value", "Submits form"], answer: "Represents deleted content", attempted: false, selected: "" },
  { num: 46, question: "46 What is the function of <ins> tag?", options: ["Represents inserted content", "Includes script", "Starts form", "Indents paragraph"], answer: "Represents inserted content", attempted: false, selected: "" },
  { num: 47, question: "47 What does the 'tabindex' attribute control?", options: ["Tab order of elements", "Table index", "Tabs layout", "Tab style"], answer: "Tab order of elements", attempted: false, selected: "" },
  { num: 48, question: "48 What does the <kbd> tag indicate?", options: ["Keyboard input", "Code block", "Keystroke logger", "Clickable button"], answer: "Keyboard input", attempted: false, selected: "" },
  { num: 49, question: "49 What is the use of <code> tag?", options: ["Displays code snippet", "Executes script", "Defines class", "Prevents error"], answer: "Displays code snippet", attempted: false, selected: "" },
  { num: 50, question: "50 What is the purpose of <samp> tag?", options: ["Represents sample output", "Samples audio", "Saves data", "Applies CSS"], answer: "Represents sample output", attempted: false, selected: "" }
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