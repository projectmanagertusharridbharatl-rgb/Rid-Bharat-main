const questions = [
  { num: 1, question: "1 What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language", "None of these"], answer: "Hyper Text Markup Language", attempted: false, selected: "" },
  { num: 2, question: "2 Which tag is used for the largest heading?", options: ["h1", "h6", "heading", "head"], answer: "h1", attempted: false, selected: "" },
  { num: 3, question: "3 Which tag is used to create a hyperlink in HTML?", options: ["a", "link", "href", "hyperlink"], answer: "a", attempted: false, selected: "" },
  { num: 4, question: "4 What does the <br> tag do?", options: ["Inserts a line break", "Makes text bold", "Adds a space", "Ends a paragraph"], answer: "Inserts a line break", attempted: false, selected: "" },
  { num: 5, question: "5 Which tag is used to display images in HTML?", options: ["img", "image", "src", "pic"], answer: "img", attempted: false, selected: "" },
  { num: 6, question: "6 What is the correct format to add a background color in HTML?", options: ["<body style='background-color:blue;'>", "<background=blue>", "<bgcolor=blue>", "<body color='blue'>"], answer: "<body style='background-color:blue;'>", attempted: false, selected: "" },
  { num: 7, question: "7 Which attribute is used to provide an alternative text for an image?", options: ["alt", "src", "title", "value"], answer: "alt", attempted: false, selected: "" },
  { num: 8, question: "8 Which HTML element is used for inserting a line horizontally?", options: ["hr", "line", "border", "rule"], answer: "hr", attempted: false, selected: "" },
  { num: 9, question: "9 What is used to create an unordered list?", options: ["ul", "ol", "li", "dl"], answer: "ul", attempted: false, selected: "" },
  { num: 10, question: "10 What does the <p> tag define?", options: ["Paragraph", "Picture", "Preformatted", "Password"], answer: "Paragraph", attempted: false, selected: "" },
  { num: 11, question: "11 What tag is used to bold text?", options: ["b", "strong", "bold", "font"], answer: "b", attempted: false, selected: "" },
  { num: 12, question: "12 Which tag is used to italicize text?", options: ["i", "em", "italic", "style"], answer: "i", attempted: false, selected: "" },
  { num: 13, question: "13 What tag is used to define a table row?", options: ["tr", "td", "th", "row"], answer: "tr", attempted: false, selected: "" },
  { num: 14, question: "14 Which tag defines a table cell?", options: ["td", "tr", "th", "cell"], answer: "td", attempted: false, selected: "" },
  { num: 15, question: "15 Which tag is used for a table heading?", options: ["th", "td", "head", "title"], answer: "th", attempted: false, selected: "" },
  { num: 16, question: "16 What is the correct HTML for creating a checkbox?", options: ["<input type='checkbox'>", "<check>", "<checkbox>", "<input type='check'>"], answer: "<input type='checkbox'>", attempted: false, selected: "" },
  { num: 17, question: "17 How do you create a radio button in HTML?", options: ["<input type='radio'>", "<radio>", "<input type='radiobutton'>", "<radiobtn>"], answer: "<input type='radio'>", attempted: false, selected: "" },
  { num: 18, question: "18 What attribute defines the input type in a form?", options: ["type", "formtype", "input", "name"], answer: "type", attempted: false, selected: "" },
  { num: 19, question: "19 What is the default alignment of content in a table cell?", options: ["Left", "Center", "Right", "Justify"], answer: "Left", attempted: false, selected: "" },
  { num: 20, question: "20 Which tag is used to create a dropdown list?", options: ["select", "dropdown", "option", "list"], answer: "select", attempted: false, selected: "" },
  { num: 21, question: "21 Which tag is used to define options in a dropdown?", options: ["option", "select", "dropdown", "choices"], answer: "option", attempted: false, selected: "" },
  { num: 22, question: "22 How do you add comments in HTML?", options: ["<!-- comment -->", "// comment", "# comment", "/* comment */"], answer: "<!-- comment -->", attempted: false, selected: "" },
  { num: 23, question: "23 Which tag defines the title of the document?", options: ["title", "head", "meta", "name"], answer: "title", attempted: false, selected: "" },
  { num: 24, question: "24 Where does the <title> tag go?", options: ["Inside the <head>", "Inside the <body>", "After <html>", "After </body>"], answer: "Inside the <head>", attempted: false, selected: "" },
  { num: 25, question: "25 Which tag is used to define a list item?", options: ["li", "ul", "ol", "dl"], answer: "li", attempted: false, selected: "" },
  { num: 26, question: "26 What is the purpose of <head> tag?", options: ["Holds metadata", "Displays heading", "Formats text", "Starts the body"], answer: "Holds metadata", attempted: false, selected: "" },
  { num: 27, question: "27 Which HTML tag is used to define a hyperlink destination?", options: ["href", "a", "link", "url"], answer: "a", attempted: false, selected: "" },
  { num: 28, question: "28 What does the <html> tag represent?", options: ["Root of HTML document", "Header", "Container", "Body wrapper"], answer: "Root of HTML document", attempted: false, selected: "" },
  { num: 29, question: "29 How do you make a numbered list?", options: ["ol", "ul", "li", "dl"], answer: "ol", attempted: false, selected: "" },
  { num: 30, question: "30 Which tag is used to define metadata?", options: ["meta", "data", "info", "script"], answer: "meta", attempted: false, selected: "" },
  { num: 31, question: "31 What is the purpose of <base> tag?", options: ["Specifies base URL", "Creates base element", "Formats text", "Defines layout"], answer: "Specifies base URL", attempted: false, selected: "" },
  { num: 32, question: "32 Which element is used for inserting preformatted text?", options: ["pre", "code", "text", "format"], answer: "pre", attempted: false, selected: "" },
  { num: 33, question: "33 What does the 'target' attribute in <a> tag do?", options: ["Opens link in new tab", "Sets link color", "Styles anchor", "Validates link"], answer: "Opens link in new tab", attempted: false, selected: "" },
  { num: 34, question: "34 What tag is used to embed external CSS?", options: ["link", "style", "script", "css"], answer: "link", attempted: false, selected: "" },
  { num: 35, question: "35 How can you make a text input field required?", options: ["required", "must", "validate", "check"], answer: "required", attempted: false, selected: "" },
  { num: 36, question: "36 What is the default type of <button>?", options: ["submit", "button", "reset", "none"], answer: "submit", attempted: false, selected: "" },
  { num: 37, question: "37 Which tag is used to insert JavaScript code?", options: ["script", "js", "javascript", "code"], answer: "script", attempted: false, selected: "" },
  { num: 38, question: "38 What does <style> tag do?", options: ["Adds CSS rules", "Adds font", "Links stylesheet", "Defines layout"], answer: "Adds CSS rules", attempted: false, selected: "" },
  { num: 39, question: "39 What does the <body> tag contain?", options: ["Page content", "Metadata", "JavaScript", "Stylesheet"], answer: "Page content", attempted: false, selected: "" },
  { num: 40, question: "40 What is used to create a text area?", options: ["textarea", "textbox", "input type='text'", "textblock"], answer: "textarea", attempted: false, selected: "" },
  { num: 41, question: "41 Which input type is used for numeric input?", options: ["number", "text", "value", "digits"], answer: "number", attempted: false, selected: "" },
  { num: 42, question: "42 What tag is used to add a label to a form control?", options: ["label", "caption", "text", "formtext"], answer: "label", attempted: false, selected: "" },
  { num: 43, question: "43 What attribute sets the maximum characters in input?", options: ["maxlength", "max", "length", "limit"], answer: "maxlength", attempted: false, selected: "" },
  { num: 44, question: "44 What tag defines an abbreviation?", options: ["abbr", "short", "define", "acronym"], answer: "abbr", attempted: false, selected: "" },
  { num: 45, question: "45 How do you define a block of quotation?", options: ["blockquote", "quote", "q", "say"], answer: "blockquote", attempted: false, selected: "" },
  { num: 46, question: "46 What tag is used to define contact information?", options: ["address", "contact", "info", "footer"], answer: "address", attempted: false, selected: "" },
  { num: 47, question: "47 What tag is used to group related form elements?", options: ["fieldset", "form", "section", "group"], answer: "fieldset", attempted: false, selected: "" },
  { num: 48, question: "48 Which tag is used to define a caption for a fieldset?", options: ["legend", "caption", "title", "label"], answer: "legend", attempted: false, selected: "" },
  { num: 49, question: "49 What tag is used to define emphasized text?", options: ["em", "i", "strong", "mark"], answer: "em", attempted: false, selected: "" },
  { num: 50, question: "50 What tag is used for highlighted text?", options: ["mark", "highlight", "em", "b"], answer: "mark", attempted: false, selected: "" }
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