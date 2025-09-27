const questions = [
  { num: 1, question: "1 What does the 'defer' attribute do in a script tag?", options: ["Delays script execution until after parsing", "Prevents script from running", "Runs script immediately", "Downloads script without execution"], answer: "Delays script execution until after parsing", attempted: false, selected: "" },
  { num: 2, question: "2 What is the use of the 'sandbox' attribute in iframe?", options: ["Restricts actions within iframe", "Sets background of iframe", "Enables JavaScript", "Embeds media content"], answer: "Restricts actions within iframe", attempted: false, selected: "" },
  { num: 3, question: "3 Which tag is used to define a container for navigation links?", options: ["nav", "menu", "navigation", "ul"], answer: "nav", attempted: false, selected: "" },
  { num: 4, question: "4 What does the 'contenteditable' attribute do?", options: ["Makes element editable", "Protects content", "Hides element", "Encrypts content"], answer: "Makes element editable", attempted: false, selected: "" },
  { num: 5, question: "5 What does the 'autofocus' attribute do in input?", options: ["Focuses input on page load", "Fills data automatically", "Validates input", "Highlights field"], answer: "Focuses input on page load", attempted: false, selected: "" },
  { num: 6, question: "6 Which tag defines a section that is tangentially related to the content?", options: ["aside", "section", "div", "footer"], answer: "aside", attempted: false, selected: "" },
  { num: 7, question: "7 What is the function of the 'hidden' attribute?", options: ["Hides the element", "Deletes element", "Removes styling", "Locks content"], answer: "Hides the element", attempted: false, selected: "" },
  { num: 8, question: "8 What tag defines a self-contained piece of content?", options: ["article", "section", "aside", "div"], answer: "article", attempted: false, selected: "" },
  { num: 9, question: "9 What is the use of <template> in HTML?", options: ["Stores client-side templates", "Links scripts", "Applies CSS", "Displays error"], answer: "Stores client-side templates", attempted: false, selected: "" },
  { num: 10, question: "10 What does the 'spellcheck' attribute control?", options: ["Spell checking in input", "Language translation", "Text formatting", "Accessibility"], answer: "Spell checking in input", attempted: false, selected: "" },
  { num: 11, question: "11 Which tag defines scalar measurements or fractional values?", options: ["meter", "progress", "range", "gauge"], answer: "meter", attempted: false, selected: "" },
  { num: 12, question: "12 What does the 'novalidate' attribute do in forms?", options: ["Disables HTML5 validation", "Disables form submission", "Hides form", "Encrypts data"], answer: "Disables HTML5 validation", attempted: false, selected: "" },
  { num: 13, question: "13 Which HTML element is used to define the footer of a document?", options: ["footer", "bottom", "section", "end"], answer: "footer", attempted: false, selected: "" },
  { num: 14, question: "14 What is the use of the <datalist> tag?", options: ["Provides list of options", "Displays listbox", "Defines dropdown", "Creates popup"], answer: "Provides list of options", attempted: false, selected: "" },
  { num: 15, question: "15 What does the 'formaction' attribute specify?", options: ["URL for form submission", "Form name", "Form input type", "Auto validation"], answer: "URL for form submission", attempted: false, selected: "" },
  { num: 16, question: "16 Which input type is used for selecting a color?", options: ["color", "picker", "rgb", "palette"], answer: "color", attempted: false, selected: "" },
  { num: 17, question: "17 What tag is used to specify a progress bar?", options: ["progress", "bar", "loading", "status"], answer: "progress", attempted: false, selected: "" },
  { num: 18, question: "18 Which tag is used to group header content in HTML5?", options: ["header", "head", "group", "banner"], answer: "header", attempted: false, selected: "" },
  { num: 19, question: "19 What does the 'download' attribute in <a> tag do?", options: ["Triggers file download", "Uploads file", "Saves page", "Opens in new tab"], answer: "Triggers file download", attempted: false, selected: "" },
  { num: 20, question: "20 What is the use of 'draggable' attribute?", options: ["Makes element draggable", "Enables touch", "Sets cursor", "Aligns content"], answer: "Makes element draggable", attempted: false, selected: "" },
  { num: 21, question: "21 What tag represents a machine-readable date/time?", options: ["time", "date", "datetime", "calendar"], answer: "time", attempted: false, selected: "" },
  { num: 22, question: "22 What tag is used to define a command button?", options: ["button", "input", "cmd", "submit"], answer: "button", attempted: false, selected: "" },
  { num: 23, question: "23 Which HTML element is used to play audio?", options: ["audio", "sound", "media", "track"], answer: "audio", attempted: false, selected: "" },
  { num: 24, question: "24 What is the use of the <track> tag in <video>?", options: ["Adds subtitles", "Inserts audio", "Defines chapters", "Adds playlist"], answer: "Adds subtitles", attempted: false, selected: "" },
  { num: 25, question: "25 Which attribute specifies the media type in <link>?", options: ["type", "rel", "media", "target"], answer: "media", attempted: false, selected: "" },
  { num: 26, question: "26 What does the 'manifest' attribute in <html> do?", options: ["Specifies cache file", "Adds animation", "Changes layout", "Enables scripts"], answer: "Specifies cache file", attempted: false, selected: "" },
  { num: 27, question: "27 Which tag is used to embed SVG graphics?", options: ["svg", "canvas", "img", "vector"], answer: "svg", attempted: false, selected: "" },
  { num: 28, question: "28 What tag is used for canvas-based drawing?", options: ["canvas", "draw", "paint", "graphic"], answer: "canvas", attempted: false, selected: "" },
  { num: 29, question: "29 What does the <output> element represent?", options: ["Calculation result", "Form data", "Database entry", "Audio stream"], answer: "Calculation result", attempted: false, selected: "" },
  { num: 30, question: "30 What is the role of <noscript> tag?", options: ["Fallback if JS is disabled", "Loads script", "Styles no-JS", "Prevents JS execution"], answer: "Fallback if JS is disabled", attempted: false, selected: "" },
  { num: 31, question: "31 What does the 'autoplay' attribute do in <video>?", options: ["Plays video automatically", "Loops video", "Hides controls", "Disables pause"], answer: "Plays video automatically", attempted: false, selected: "" },
  { num: 32, question: "32 What is the purpose of the <source> tag?", options: ["Defines media resources", "Inserts audio", "Adds plugins", "Defines layout"], answer: "Defines media resources", attempted: false, selected: "" },
  { num: 33, question: "33 Which tag is used to define client-side image map?", options: ["map", "imgmap", "area", "clickmap"], answer: "map", attempted: false, selected: "" },
  { num: 34, question: "34 Which tag specifies the area inside an image map?", options: ["area", "region", "rect", "coord"], answer: "area", attempted: false, selected: "" },
  { num: 35, question: "35 What does the <details> tag do?", options: ["Creates toggleable content", "Displays data table", "Shows code snippet", "Links page"], answer: "Creates toggleable content", attempted: false, selected: "" },
  { num: 36, question: "36 What tag provides a summary for <details>?", options: ["summary", "caption", "heading", "hint"], answer: "summary", attempted: false, selected: "" },
  { num: 37, question: "37 What does the 'form' attribute in input do?", options: ["Associates input with form", "Disables input", "Sets form style", "Validates field"], answer: "Associates input with form", attempted: false, selected: "" },
  { num: 38, question: "38 What input type is used for selecting a file?", options: ["file", "upload", "document", "selector"], answer: "file", attempted: false, selected: "" },
  { num: 39, question: "39 What does the 'pattern' attribute do?", options: ["Defines regex for validation", "Styles form", "Adds input mask", "Links to CSS"], answer: "Defines regex for validation", attempted: false, selected: "" },
  { num: 40, question: "40 What is the use of <mark> tag?", options: ["Highlights text", "Marks checkbox", "Creates label", "Draws border"], answer: "Highlights text", attempted: false, selected: "" },
  { num: 41, question: "41 What is the use of <kbd> tag?", options: ["Displays keyboard input", "Adds keyframe", "Styles buttons", "Defines hotkey"], answer: "Displays keyboard input", attempted: false, selected: "" },
  { num: 42, question: "42 Which element represents a variable in HTML?", options: ["var", "code", "v", "value"], answer: "var", attempted: false, selected: "" },
  { num: 43, question: "43 What does <samp> element represent?", options: ["Sample output", "Sample input", "Short answer", "Static code"], answer: "Sample output", attempted: false, selected: "" },
  { num: 44, question: "44 Which tag is used for bidirectional text override?", options: ["bdo", "dir", "bdi", "rtl"], answer: "bdo", attempted: false, selected: "" },
  { num: 45, question: "45 What is the use of the <wbr> tag?", options: ["Suggests word break", "Wraps text", "Bold text", "Breaks line"], answer: "Suggests word break", attempted: false, selected: "" },
  { num: 46, question: "46 What tag is used to indicate contact information?", options: ["address", "contact", "info", "footer"], answer: "address", attempted: false, selected: "" },
  { num: 47, question: "47 What tag is used for line break opportunity?", options: ["wbr", "br", "hr", "lb"], answer: "wbr", attempted: false, selected: "" },
  { num: 48, question: "48 Which element defines marked or highlighted text?", options: ["mark", "highlight", "b", "em"], answer: "mark", attempted: false, selected: "" },
  { num: 49, question: "49 What is the function of the <abbr> tag?", options: ["Defines abbreviation", "Adds attribute", "Shows bold text", "Breaks text"], answer: "Defines abbreviation", attempted: false, selected: "" },
  { num: 50, question: "50 Which element is used to define sample output from a program?", options: ["samp", "code", "kbd", "output"], answer: "samp", attempted: false, selected: "" }
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