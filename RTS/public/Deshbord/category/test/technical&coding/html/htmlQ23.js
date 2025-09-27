const questions = [
  { num: 1, question: "1 What does HTML stand for?", options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "HyperTool Multi Language"], answer: "HyperText Markup Language", attempted: false, selected: "" },
  { num: 2, question: "2 Which tag is used for the largest heading?", options: ["h1", "heading", "head", "h6"], answer: "h1", attempted: false, selected: "" },
  { num: 3, question: "3 What is the correct HTML element for inserting a line break?", options: ["br", "break", "lb", "line"], answer: "br", attempted: false, selected: "" },
  { num: 4, question: "4 Which tag is used to create a paragraph?", options: ["p", "para", "pg", "paragraph"], answer: "p", attempted: false, selected: "" },
  { num: 5, question: "5 What is the correct HTML tag for inserting an image?", options: ["img", "image", "src", "picture"], answer: "img", attempted: false, selected: "" },
  { num: 6, question: "6 How can you create a hyperlink in HTML?", options: ["a", "link", "href", "hyperlink"], answer: "a", attempted: false, selected: "" },
  { num: 7, question: "7 Which attribute specifies the destination URL in a hyperlink?", options: ["href", "src", "link", "target"], answer: "href", attempted: false, selected: "" },
  { num: 8, question: "8 Which tag is used to make text bold?", options: ["b", "strong", "bold", "textb"], answer: "b", attempted: false, selected: "" },
  { num: 9, question: "9 What is the correct tag to italicize text?", options: ["i", "italic", "em", "it"], answer: "i", attempted: false, selected: "" },
  { num: 10, question: "10 Which tag creates an unordered list?", options: ["ul", "ol", "list", "li"], answer: "ul", attempted: false, selected: "" },
  { num: 11, question: "11 Which tag defines a table row?", options: ["tr", "row", "td", "th"], answer: "tr", attempted: false, selected: "" },
  { num: 12, question: "12 What does the <title> tag define?", options: ["Page title", "Main heading", "Document link", "Text block"], answer: "Page title", attempted: false, selected: "" },
  { num: 13, question: "13 Which element is used for creating a numbered list?", options: ["ol", "ul", "li", "dl"], answer: "ol", attempted: false, selected: "" },
  { num: 14, question: "14 What is the correct tag for creating a checkbox?", options: ["input type='checkbox'", "checkbox", "check", "form-checkbox"], answer: "input type='checkbox'", attempted: false, selected: "" },
  { num: 15, question: "15 What tag is used to define a table?", options: ["table", "tbl", "data", "grid"], answer: "table", attempted: false, selected: "" },
  { num: 16, question: "16 How do you add a comment in HTML?", options: ["<!-- comment -->", "// comment", "# comment", "/* comment */"], answer: "<!-- comment -->", attempted: false, selected: "" },
  { num: 17, question: "17 What is the correct tag for a list item?", options: ["li", "list", "ul", "item"], answer: "li", attempted: false, selected: "" },
  { num: 18, question: "18 What does the <head> tag contain?", options: ["Metadata and links", "Body content", "Footer content", "Paragraphs"], answer: "Metadata and links", attempted: false, selected: "" },
  { num: 19, question: "19 Which element is used for short quotations?", options: ["q", "quote", "short", "text"], answer: "q", attempted: false, selected: "" },
  { num: 20, question: "20 Which tag is used to display a horizontal line?", options: ["hr", "line", "hl", "br"], answer: "hr", attempted: false, selected: "" },
  { num: 21, question: "21 Which attribute sets an image’s alternate text?", options: ["alt", "text", "name", "title"], answer: "alt", attempted: false, selected: "" },
  { num: 22, question: "22 What tag is used to group form controls?", options: ["fieldset", "group", "formset", "inputblock"], answer: "fieldset", attempted: false, selected: "" },
  { num: 23, question: "23 What tag is used to label inputs?", options: ["label", "tag", "input", "formlabel"], answer: "label", attempted: false, selected: "" },
  { num: 24, question: "24 Which element defines emphasized text?", options: ["em", "i", "strong", "highlight"], answer: "em", attempted: false, selected: "" },
  { num: 25, question: "25 Which tag is used to insert a video?", options: ["video", "media", "movie", "vid"], answer: "video", attempted: false, selected: "" },
  { num: 26, question: "26 What is the default alignment of text in a paragraph?", options: ["Left", "Center", "Right", "Justify"], answer: "Left", attempted: false, selected: "" },
  { num: 27, question: "27 Which tag is used to create a dropdown list?", options: ["select", "dropdown", "list", "optionbox"], answer: "select", attempted: false, selected: "" },
  { num: 28, question: "28 What does the 'action' attribute in a form define?", options: ["Form submission URL", "Form method", "Form style", "Validation"], answer: "Form submission URL", attempted: false, selected: "" },
  { num: 29, question: "29 Which tag is used to define a cell in a table?", options: ["td", "cell", "tr", "th"], answer: "td", attempted: false, selected: "" },
  { num: 30, question: "30 Which element is used for preformatted text?", options: ["pre", "code", "format", "text"], answer: "pre", attempted: false, selected: "" },
  { num: 31, question: "31 What tag is used to define a label for a form control?", options: ["label", "caption", "title", "mark"], answer: "label", attempted: false, selected: "" },
  { num: 32, question: "32 Which tag is used to define a heading in a table?", options: ["th", "td", "tr", "caption"], answer: "th", attempted: false, selected: "" },
  { num: 33, question: "33 What is the use of the <meta> tag?", options: ["Defines metadata", "Displays data", "Adds images", "Styles the page"], answer: "Defines metadata", attempted: false, selected: "" },
  { num: 34, question: "34 What is the correct element to use for inserting background music?", options: ["audio", "sound", "bgsound", "music"], answer: "audio", attempted: false, selected: "" },
  { num: 35, question: "35 Which element is used to define a navigation section?", options: ["nav", "menu", "ul", "link"], answer: "nav", attempted: false, selected: "" },
  { num: 36, question: "36 Which element is used to define the main content?", options: ["main", "body", "section", "div"], answer: "main", attempted: false, selected: "" },
  { num: 37, question: "37 What tag is used for inline code?", options: ["code", "pre", "kbd", "script"], answer: "code", attempted: false, selected: "" },
  { num: 38, question: "38 What tag is used to define a comment in HTML?", options: ["<!-- -->", "//", "##", "**"], answer: "<!-- -->", attempted: false, selected: "" },
  { num: 39, question: "39 What tag is used to define a section in a document?", options: ["section", "div", "part", "body"], answer: "section", attempted: false, selected: "" },
  { num: 40, question: "40 Which tag is used to define a clickable button?", options: ["button", "click", "submit", "input"], answer: "button", attempted: false, selected: "" },
  { num: 41, question: "41 Which attribute is used with input to accept multiple values?", options: ["multiple", "multi", "more", "list"], answer: "multiple", attempted: false, selected: "" },
  { num: 42, question: "42 Which tag groups related options in a dropdown?", options: ["optgroup", "option", "fieldset", "select"], answer: "optgroup", attempted: false, selected: "" },
  { num: 43, question: "43 What tag defines a caption for a table?", options: ["caption", "heading", "title", "label"], answer: "caption", attempted: false, selected: "" },
  { num: 44, question: "44 What does the <link> tag define?", options: ["External resource link", "Internal script", "Hyperlink", "Navigation tab"], answer: "External resource link", attempted: false, selected: "" },
  { num: 45, question: "45 What is the default method of form submission?", options: ["GET", "POST", "SUBMIT", "SEND"], answer: "GET", attempted: false, selected: "" },
  { num: 46, question: "46 Which input type is used for numeric input?", options: ["number", "text", "digit", "int"], answer: "number", attempted: false, selected: "" },
  { num: 47, question: "47 What attribute is used to specify inline styles?", options: ["style", "css", "class", "design"], answer: "style", attempted: false, selected: "" },
  { num: 48, question: "48 What tag defines a definition list?", options: ["dl", "ol", "ul", "list"], answer: "dl", attempted: false, selected: "" },
  { num: 49, question: "49 What is the correct element for defining terms in a definition list?", options: ["dt", "dd", "term", "df"], answer: "dt", attempted: false, selected: "" },
  { num: 50, question: "50 What is the correct tag for the description in a definition list?", options: ["dd", "dt", "desc", "define"], answer: "dd", attempted: false, selected: "" }
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