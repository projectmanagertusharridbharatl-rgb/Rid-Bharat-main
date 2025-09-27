
const questions = [
  { num: 1, question: "1 What is the purpose of the 'slot' element in Web Components?", options: ["Placeholder for light DOM", "Defines shadow DOM", "Creates templates", "Manages styles"], answer: "Placeholder for light DOM", attempted: false, selected: "" },
  { num: 2, question: "2 What does the 'autofocus' attribute do?", options: ["Focus input on page load", "Autoplay video", "Auto-submit form", "Highlight text"], answer: "Focus input on page load", attempted: false, selected: "" },
  { num: 3, question: "3 Which attribute is used to specify CORS settings in <script>?", options: ["crossorigin", "cors", "access-control", "security"], answer: "crossorigin", attempted: false, selected: "" },
  { num: 4, question: "4 What does the 'integrity' attribute do in <script> or <link>?", options: ["Subresource Integrity check", "Encrypts resource", "Compresses data", "Sets priority"], answer: "Subresource Integrity check", attempted: false, selected: "" },
  { num: 5, question: "5 What is the function of the <picture> element?", options: ["Responsive images", "Embed pictures", "Add watermarks", "Crop images"], answer: "Responsive images", attempted: false, selected: "" },
  { num: 6, question: "6 What does the 'loading' attribute do in <img>?", options: ["Lazy loads images", "Preloads images", "Changes image size", "Optimizes format"], answer: "Lazy loads images", attempted: false, selected: "" },
  { num: 7, question: "7 What is the purpose of the <dialog> 'open' attribute?", options: ["Shows dialog", "Closes dialog", "Prevents opening", "Styles dialog"], answer: "Shows dialog", attempted: false, selected: "" },
  { num: 8, question: "8 What does the 'form' attribute on input elements specify?", options: ["Associates input with form by ID", "Defines form style", "Sets form action", "Adds form validation"], answer: "Associates input with form by ID", attempted: false, selected: "" },
  { num: 9, question: "9 Which input type allows selecting a date and time?", options: ["datetime-local", "date", "time", "datetime"], answer: "datetime-local", attempted: false, selected: "" },
  { num: 10, question: "10 What is the difference between 'defer' and 'async' attributes in <script>?", options: ["Defer waits for DOM, async doesn't", "Async blocks parsing", "Defer loads CSS", "Async disables script"], answer: "Defer waits for DOM, async doesn't", attempted: false, selected: "" },
  { num: 11, question: "11 What does the 'step' attribute define in <input>?", options: ["Incremental steps for numeric input", "Step of animation", "Scrolling speed", "Validation level"], answer: "Incremental steps for numeric input", attempted: false, selected: "" },
  { num: 12, question: "12 What does the 'pattern' attribute do in form inputs?", options: ["Validates input against regex", "Defines color pattern", "Sets background image", "Creates animation"], answer: "Validates input against regex", attempted: false, selected: "" },
  { num: 13, question: "13 What is the use of the 'multiple' attribute on <input type='file'>?", options: ["Allows selecting multiple files", "Uploads to multiple servers", "Duplicates files", "Compresses files"], answer: "Allows selecting multiple files", attempted: false, selected: "" },
  { num: 14, question: "14 What does the 'media' attribute do in <link>?", options: ["Applies stylesheet for specified media", "Sets link size", "Defines link target", "Controls media player"], answer: "Applies stylesheet for specified media", attempted: false, selected: "" },
  { num: 15, question: "15 What does the 'sandbox' attribute allow when used with <iframe>?", options: ["Enables security restrictions", "Allows scripts to run", "Enables fullscreen", "Disables scrolling"], answer: "Enables security restrictions", attempted: false, selected: "" },
  { num: 16, question: "16 What is the function of the 'srcset' attribute in <img>?", options: ["Specifies multiple image sources", "Sets image size", "Defines CSS source", "Adds captions"], answer: "Specifies multiple image sources", attempted: false, selected: "" },
  { num: 17, question: "17 What is the purpose of the 'hreflang' attribute in <a> or <link>?", options: ["Specifies language of linked resource", "Defines link color", "Adds tooltips", "Controls navigation"], answer: "Specifies language of linked resource", attempted: false, selected: "" },
  { num: 18, question: "18 What is the use of <template> element in HTML?", options: ["Holds inert DOM fragments", "Defines styles", "Adds scripts", "Creates animations"], answer: "Holds inert DOM fragments", attempted: false, selected: "" },
  { num: 19, question: "19 Which attribute on <video> controls autoplay behavior?", options: ["autoplay", "auto", "play", "start"], answer: "autoplay", attempted: false, selected: "" },
  { num: 20, question: "20 What is the 'hidden' attribute used for?", options: ["Hides element from display", "Removes element from DOM", "Disables element", "Locks element"], answer: "Hides element from display", attempted: false, selected: "" },
  { num: 21, question: "21 What does the 'content' attribute in <meta> tag specify?", options: ["Information associated with meta", "Sets page title", "Defines charset", "Links stylesheet"], answer: "Information associated with meta", attempted: false, selected: "" },
  { num: 22, question: "22 What does the 'referrerpolicy' attribute control?", options: ["Controls referrer information sent", "Sets link color", "Defines anchor behavior", "Modifies cookies"], answer: "Controls referrer information sent", attempted: false, selected: "" },
  { num: 23, question: "23 What is the purpose of the 'manifest' attribute in <html>?", options: ["Specifies cache manifest for offline apps", "Defines meta info", "Sets charset", "Links CSS"], answer: "Specifies cache manifest for offline apps", attempted: false, selected: "" },
  { num: 24, question: "24 What does the 'reversed' attribute do in <ol>?", options: ["Displays list in reverse order", "Reverses text direction", "Inverts colors", "Reverses animation"], answer: "Displays list in reverse order", attempted: false, selected: "" },
  { num: 25, question: "25 What is the use of the 'open' attribute in <details>?", options: ["Controls if details are expanded", "Opens new window", "Opens modal", "Starts animation"], answer: "Controls if details are expanded", attempted: false, selected: "" },
  { num: 26, question: "26 What does the 'readonly' attribute do for inputs?", options: ["Prevents user editing", "Disables input", "Hides input", "Enables autofill"], answer: "Prevents user editing", attempted: false, selected: "" },
  { num: 27, question: "27 What is the role of the <output> element?", options: ["Displays calculation results", "Defines form", "Outputs logs", "Creates alerts"], answer: "Displays calculation results", attempted: false, selected: "" },
  { num: 28, question: "28 What does the 'autocomplete' attribute control?", options: ["Hints for browser autofill", "Auto-generates input", "Controls spellcheck", "Disables input"], answer: "Hints for browser autofill", attempted: false, selected: "" },
  { num: 29, question: "29 What is the difference between <b> and <strong> tags?", options: ["<strong> indicates importance, <b> is stylistic", "<b> is bold, <strong> italic", "No difference", "<b> underlines text"], answer: "<strong> indicates importance, <b> is stylistic", attempted: false, selected: "" },
  { num: 30, question: "30 What does the 'nonce' attribute protect against?", options: ["Cross-site scripting (XSS)", "Network attacks", "Content loading", "Form submissions"], answer: "Cross-site scripting (XSS)", attempted: false, selected: "" },
  { num: 31, question: "31 What is the purpose of the <meter> element?", options: ["Represents scalar measurement", "Creates progress bar", "Displays tooltip", "Defines layout"], answer: "Represents scalar measurement", attempted: false, selected: "" },
  { num: 32, question: "32 What is the function of the 'sandbox' attribute value 'allow-scripts'?", options: ["Allows scripts to run inside sandbox", "Blocks all scripts", "Allows forms only", "Enables fullscreen"], answer: "Allows scripts to run inside sandbox", attempted: false, selected: "" },
  { num: 33, question: "33 What does the 'accept' attribute on <input type='file'> specify?", options: ["Allowed file types", "File size", "Multiple files", "File name pattern"], answer: "Allowed file types", attempted: false, selected: "" },
  { num: 34, question: "34 What is the difference between <section> and <div>?", options: ["<section> is semantic, <div> is generic", "<div> is semantic", "No difference", "<section> is inline"], answer: "<section> is semantic, <div> is generic", attempted: false, selected: "" },
  { num: 35, question: "35 What is the use of the 'srcdoc' attribute in <iframe>?", options: ["Embeds HTML content directly", "Sets source URL", "Preloads frame", "Enables sandbox"], answer: "Embeds HTML content directly", attempted: false, selected: "" },
  { num: 36, question: "36 What does the 'crossorigin' attribute with value 'anonymous' do?", options: ["Fetch resource without credentials", "Enables CORS with credentials", "Blocks all cross-origin", "Enables offline caching"], answer: "Fetch resource without credentials", attempted: false, selected: "" },
  { num: 37, question: "37 What is the purpose of the 'draggable' attribute?", options: ["Enables drag and drop", "Creates animation", "Locks position", "Enables scroll"], answer: "Enables drag and drop", attempted: false, selected: "" },
  { num: 38, question: "38 What does the <abbr> tag represent?", options: ["Abbreviation or acronym", "Animated text", "Accent text", "Hyperlink"], answer: "Abbreviation or acronym", attempted: false, selected: "" },
  { num: 39, question: "39 What is the use of the 'slot' attribute on elements inside shadow DOM?", options: ["Assigns content to slots", "Defines styles", "Imports scripts", "Enables events"], answer: "Assigns content to slots", attempted: false, selected: "" },
  { num: 40, question: "40 What does the 'sandbox' attribute do without any value?", options: ["Applies all restrictions", "Allows scripts", "Disables sandbox", "Enables fullscreen"], answer: "Applies all restrictions", attempted: false, selected: "" },
  { num: 41, question: "41 What is the purpose of the 'aria-label' attribute?", options: ["Accessibility label for screen readers", "CSS styling", "JavaScript hook", "Link title"], answer: "Accessibility label for screen readers", attempted: false, selected: "" },
  { num: 42, question: "42 What does the 'wrap' attribute control in <textarea>?", options: ["Text wrapping behavior", "Wrap text in div", "Wrap links", "Wrap scripts"], answer: "Text wrapping behavior", attempted: false, selected: "" },
  { num: 43, question: "43 What does the 'srcLang' attribute specify in <track>?", options: ["Language of the track", "Source language", "CSS language", "Script language"], answer: "Language of the track", attempted: false, selected: "" },
  { num: 44, question: "44 What is the function of the 'sandbox' attribute value 'allow-forms'?", options: ["Allows form submission inside sandbox", "Blocks forms", "Allows scripts", "Enables popups"], answer: "Allows form submission inside sandbox", attempted: false, selected: "" },
  { num: 45, question: "45 What is the use of <template> element's content property?", options: ["Accesses its DocumentFragment", "Holds text", "Stores JSON", "Links styles"], answer: "Accesses its DocumentFragment", attempted: false, selected: "" },
  { num: 46, question: "46 What is the 'accept-charset' attribute in <form>?", options: ["Defines accepted character encodings", "Sets form style", "Validates inputs", "Specifies form method"], answer: "Defines accepted character encodings", attempted: false, selected: "" },
  { num: 47, question: "47 What is the purpose of the 'formnovalidate' attribute on a submit button?", options: ["Skips form validation", "Validates only the button", "Disables submit", "Auto-fills form"], answer: "Skips form validation", attempted: false, selected: "" },
  { num: 48, question: "48 What does the <bdi> element do?", options: ["Isolates bidirectional text", "Bold text", "Displays block inline", "Marks invalid input"], answer: "Isolates bidirectional text", attempted: false, selected: "" },
  { num: 49, question: "49 What is the use of 'nonce' attribute in Content Security Policy?", options: ["Allows specific inline scripts", "Encrypts scripts", "Blocks external scripts", "Sets script priority"], answer: "Allows specific inline scripts", attempted: false, selected: "" },
  { num: 50, question: "50 What does the 'referrerpolicy' value 'no-referrer' do?", options: ["No referrer info sent", "Sends full referrer", "Sends origin only", "Sends strict-origin"], answer: "No referrer info sent", attempted: false, selected: "" }
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
