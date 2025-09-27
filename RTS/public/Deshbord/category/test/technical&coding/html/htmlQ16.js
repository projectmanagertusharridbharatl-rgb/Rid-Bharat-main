const questions = [
  { num: 1, question: "1 What does the 'canvas' element do in HTML5?", options: ["Defines a drawable area for graphics", "Creates an image placeholder", "Embeds videos", "Adds audio controls"], answer: "Defines a drawable area for graphics", attempted: false, selected: "" },
  { num: 2, question: "2 Which attribute makes an input field mandatory?", options: ["required", "validate", "checked", "readonly"], answer: "required", attempted: false, selected: "" },
  { num: 3, question: "3 What is the use of the 'data-' attribute in HTML?", options: ["Stores custom data private to the page", "Defines styles", "Links scripts", "Defines metadata"], answer: "Stores custom data private to the page", attempted: false, selected: "" },
  { num: 4, question: "4 Which tag is used to define a self-contained composition in HTML5?", options: ["article", "section", "div", "aside"], answer: "article", attempted: false, selected: "" },
  { num: 5, question: "5 What is the role of the 'aria-label' attribute?", options: ["Defines accessible name for elements", "Sets style classes", "Defines tooltip text", "Links scripts"], answer: "Defines accessible name for elements", attempted: false, selected: "" },
  { num: 6, question: "6 Which element is used to embed SVG content in HTML?", options: ["svg", "vector", "image", "canvas"], answer: "svg", attempted: false, selected: "" },
  { num: 7, question: "7 What is the purpose of the 'defer' attribute in script tags?", options: ["Delays script execution until HTML is parsed", "Loads script asynchronously", "Disables the script", "Preloads the script"], answer: "Delays script execution until HTML is parsed", attempted: false, selected: "" },
  { num: 8, question: "8 Which attribute controls whether a form input is editable?", options: ["readonly", "disabled", "editable", "enabled"], answer: "readonly", attempted: false, selected: "" },
  { num: 9, question: "9 What does the 'sandbox' attribute do in iframe?", options: ["Applies extra restrictions to content", "Makes iframe fullscreen", "Links external styles", "Enables autoplay"], answer: "Applies extra restrictions to content", attempted: false, selected: "" },
  { num: 10, question: "10 Which element is used for embedding external content like videos or web pages?", options: ["iframe", "embed", "object", "frame"], answer: "iframe", attempted: false, selected: "" },
  { num: 11, question: "11 What attribute is used to specify multiple files in an input field?", options: ["multiple", "files", "multi", "select"], answer: "multiple", attempted: false, selected: "" },
  { num: 12, question: "12 Which element allows the user to select a value from a range?", options: ["input type='range'", "input type='slider'", "input type='number'", "input type='select'"], answer: "input type='range'", attempted: false, selected: "" },
  { num: 13, question: "13 How do you specify a placeholder text in an input?", options: ["placeholder", "title", "alt", "label"], answer: "placeholder", attempted: false, selected: "" },
  { num: 14, question: "14 What does the 'hidden' attribute do?", options: ["Hides the element from view", "Disables the element", "Removes element from DOM", "Makes element transparent"], answer: "Hides the element from view", attempted: false, selected: "" },
  { num: 15, question: "15 Which tag is used for preformatted text?", options: ["pre", "code", "samp", "kbd"], answer: "pre", attempted: false, selected: "" },
  { num: 16, question: "16 What attribute is used to specify the MIME type in the 'source' tag?", options: ["type", "mime", "format", "media"], answer: "type", attempted: false, selected: "" },
  { num: 17, question: "17 Which tag is used to group options inside a select dropdown?", options: ["optgroup", "group", "optionset", "selectgroup"], answer: "optgroup", attempted: false, selected: "" },
  { num: 18, question: "18 How do you make a button that submits a form?", options: ["button type='submit'", "button type='form'", "input type='submit'", "input type='button'"], answer: "button type='submit'", attempted: false, selected: "" },
  { num: 19, question: "19 Which attribute can be used to specify media conditions for stylesheets?", options: ["media", "type", "src", "rel"], answer: "media", attempted: false, selected: "" },
  { num: 20, question: "20 What does the 'novalidate' attribute do in a form?", options: ["Disables form validation", "Enables advanced validation", "Shows validation messages", "Prevents form submission"], answer: "Disables form validation", attempted: false, selected: "" },
  { num: 21, question: "21 Which tag is used to display a tooltip when hovering over an element?", options: ["title", "tooltip", "alt", "caption"], answer: "title", attempted: false, selected: "" },
  { num: 22, question: "22 What does the 'contenteditable' attribute do?", options: ["Makes element editable", "Disables editing", "Locks element", "Sets content visibility"], answer: "Makes element editable", attempted: false, selected: "" },
  { num: 23, question: "23 Which attribute specifies the URL of the external JavaScript file?", options: ["src", "href", "link", "url"], answer: "src", attempted: false, selected: "" },
  { num: 24, question: "24 What element is used to represent a caption for a table?", options: ["caption", "thead", "tfoot", "th"], answer: "caption", attempted: false, selected: "" },
  { num: 25, question: "25 What attribute defines the tooltip text for a link?", options: ["title", "alt", "tooltip", "label"], answer: "title", attempted: false, selected: "" },
  { num: 26, question: "26 Which element defines navigation links in a page?", options: ["nav", "menu", "navigation", "links"], answer: "nav", attempted: false, selected: "" },
  { num: 27, question: "27 What is the use of the 'rel' attribute in link tags?", options: ["Defines relationship between document and linked resource", "Specifies URL", "Sets media type", "Defines script"], answer: "Defines relationship between document and linked resource", attempted: false, selected: "" },
  { num: 28, question: "28 Which attribute sets the alternative text for an <area> element?", options: ["alt", "title", "href", "src"], answer: "alt", attempted: false, selected: "" },
  { num: 29, question: "29 What does the 'autoplay' attribute do in the video tag?", options: ["Starts playing video automatically", "Enables controls", "Loops the video", "Mutes the video"], answer: "Starts playing video automatically", attempted: false, selected: "" },
  { num: 30, question: "30 Which element is used to embed an external interactive content?", options: ["object", "iframe", "embed", "script"], answer: "object", attempted: false, selected: "" },
  { num: 31, question: "31 How do you specify that an input field only accepts numbers?", options: ["type='number'", "type='text'", "pattern='[0-9]+'", "inputmode='numeric'"], answer: "type='number'", attempted: false, selected: "" },
  { num: 32, question: "32 Which element is used to define a caption for a figure?", options: ["figcaption", "caption", "figure", "title"], answer: "figcaption", attempted: false, selected: "" },
  { num: 33, question: "33 What attribute in forms is used to send data as URL parameters?", options: ["method='get'", "method='post'", "action", "enctype"], answer: "method='get'", attempted: false, selected: "" },
  { num: 34, question: "34 What attribute controls whether a checkbox is initially checked?", options: ["checked", "selected", "default", "enabled"], answer: "checked", attempted: false, selected: "" },
  { num: 35, question: "35 Which attribute allows browsers to display placeholders in input fields?", options: ["placeholder", "label", "alt", "title"], answer: "placeholder", attempted: false, selected: "" },
  { num: 36, question: "36 Which attribute provides a hint to the browser about what kind of input is expected?", options: ["inputmode", "type", "pattern", "autocomplete"], answer: "inputmode", attempted: false, selected: "" },
  { num: 37, question: "37 What does the 'spellcheck' attribute do?", options: ["Enables or disables spell checking", "Checks grammar", "Formats text", "Adds underline"], answer: "Enables or disables spell checking", attempted: false, selected: "" },
  { num: 38, question: "38 Which element is used to mark text that has been deleted?", options: ["del", "strike", "s", "remove"], answer: "del", attempted: false, selected: "" },
  { num: 39, question: "39 How do you include metadata about the document?", options: ["meta", "head", "title", "link"], answer: "meta", attempted: false, selected: "" },
  { num: 40, question: "40 Which attribute is used to specify the character encoding of the document?", options: ["charset", "lang", "type", "encoding"], answer: "charset", attempted: false, selected: "" },
  { num: 41, question: "41 What is the use of the 'srcset' attribute in <img> tag?", options: ["Specifies multiple image sources for responsive design", "Specifies image alt text", "Sets image size", "Specifies image caption"], answer: "Specifies multiple image sources for responsive design", attempted: false, selected: "" },
  { num: 42, question: "42 Which attribute is used to make an element draggable?", options: ["draggable", "drag", "drop", "movable"], answer: "draggable", attempted: false, selected: "" },
  { num: 43, question: "43 Which element defines a caption for the <details> element?", options: ["summary", "caption", "title", "legend"], answer: "summary", attempted: false, selected: "" },
  { num: 44, question: "44 Which attribute disables an input field?", options: ["disabled", "readonly", "inactive", "blocked"], answer: "disabled", attempted: false, selected: "" },
  { num: 45, question: "45 Which element is used to define an inline frame?", options: ["iframe", "frame", "embed", "object"], answer: "iframe", attempted: false, selected: "" },
  { num: 46, question: "46 What does the 'novalidate' attribute do on form elements?", options: ["Prevents form validation", "Enables validation", "Shows error messages", "Submits form automatically"], answer: "Prevents form validation", attempted: false, selected: "" },
  { num: 47, question: "47 Which tag represents a container for flow content?", options: ["div", "span", "section", "article"], answer: "div", attempted: false, selected: "" },
  { num: 48, question: "48 Which tag specifies a keyboard input?", options: ["kbd", "code", "samp", "input"], answer: "kbd", attempted: false, selected: "" },
  { num: 49, question: "49 Which attribute is used to group multiple radio buttons?", options: ["name", "id", "class", "group"], answer: "name", attempted: false, selected: "" },
  { num: 50, question: "50 What is the purpose of the 'formaction' attribute on a submit button?", options: ["Overrides the form's action URL", "Sets form method", "Disables the button", "Adds a tooltip"], answer: "Overrides the form's action URL", attempted: false, selected: "" }
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