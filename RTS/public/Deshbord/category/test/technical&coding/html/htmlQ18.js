const questions = [
  { num: 1, question: "1 What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"], answer: "Hyper Text Markup Language", attempted: false, selected: "" },
  { num: 2, question: "2 Who is the inventor of HTML?", options: ["Tim Berners-Lee", "Bill Gates", "Brendan Eich", "Dennis Ritchie"], answer: "Tim Berners-Lee", attempted: false, selected: "" },
  { num: 3, question: "3 What is the correct HTML tag for the largest heading?", options: ["h1", "heading", "head", "h6"], answer: "h1", attempted: false, selected: "" },
  { num: 4, question: "4 What is the correct HTML element for inserting a line break?", options: ["br", "lb", "break", "line"], answer: "br", attempted: false, selected: "" },
  { num: 5, question: "5 Which tag is used to create a paragraph in HTML?", options: ["p", "para", "text", "pg"], answer: "p", attempted: false, selected: "" },
  { num: 6, question: "6 How can you make text bold in HTML?", options: ["b", "strong", "bold", "both a and b"], answer: "both a and b", attempted: false, selected: "" },
  { num: 7, question: "7 Which HTML tag is used to display an image?", options: ["img", "image", "picture", "src"], answer: "img", attempted: false, selected: "" },
  { num: 8, question: "8 What is the correct syntax to link an external stylesheet?", options: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<stylesheet>style.css</stylesheet>", "<css>style.css</css>"], answer: "<link rel='stylesheet' href='style.css'>", attempted: false, selected: "" },
  { num: 9, question: "9 Which tag is used to create a hyperlink in HTML?", options: ["a", "link", "href", "url"], answer: "a", attempted: false, selected: "" },
  { num: 10, question: "10 What attribute is used to open a link in a new tab?", options: ["target='_blank'", "open='new'", "href='_new'", "link='blank'"], answer: "target='_blank'", attempted: false, selected: "" },
  { num: 11, question: "11 How can you create an unordered list in HTML?", options: ["ul", "ol", "list", "li"], answer: "ul", attempted: false, selected: "" },
  { num: 12, question: "12 How can you create a table row in HTML?", options: ["tr", "td", "table-row", "th"], answer: "tr", attempted: false, selected: "" },
  { num: 13, question: "13 What tag is used to define table data/cell?", options: ["td", "tr", "th", "tabledata"], answer: "td", attempted: false, selected: "" },
  { num: 14, question: "14 Which HTML element is used for emphasized text?", options: ["em", "i", "italic", "strong"], answer: "em", attempted: false, selected: "" },
  { num: 15, question: "15 What is the correct HTML tag for a checkbox?", options: ["input type='checkbox'", "checkbox", "check", "cb"], answer: "input type='checkbox'", attempted: false, selected: "" },
  { num: 16, question: "16 Which HTML element is used to make a drop-down list?", options: ["select", "option", "dropdown", "input list"], answer: "select", attempted: false, selected: "" },
  { num: 17, question: "17 How can you specify the background color of an element in HTML?", options: ["style='background-color:yellow;'", "bg='yellow'", "background='yellow'", "color='yellow'"], answer: "style='background-color:yellow;'", attempted: false, selected: "" },
  { num: 18, question: "18 What tag is used to insert a horizontal line in HTML?", options: ["hr", "line", "break", "border"], answer: "hr", attempted: false, selected: "" },
  { num: 19, question: "19 What is the purpose of the alt attribute in the img tag?", options: ["Displays alternate text if image fails", "Gives image height", "Makes image clickable", "Inserts animation"], answer: "Displays alternate text if image fails", attempted: false, selected: "" },
  { num: 20, question: "20 What does the href attribute specify?", options: ["URL of the link", "Font of the text", "Image source", "Color of the link"], answer: "URL of the link", attempted: false, selected: "" },
  { num: 21, question: "21 Which tag is used to define a list item?", options: ["li", "ul", "ol", "item"], answer: "li", attempted: false, selected: "" },
  { num: 22, question: "22 Which HTML tag is used to define a footer for a document or section?", options: ["footer", "bottom", "section", "end"], answer: "footer", attempted: false, selected: "" },
  { num: 23, question: "23 What tag defines the body of an HTML document?", options: ["body", "main", "content", "document"], answer: "body", attempted: false, selected: "" },
  { num: 24, question: "24 What tag is used to define a comment in HTML?", options: ["<!-- comment -->", "// comment", "** comment **", "/* comment */"], answer: "<!-- comment -->", attempted: false, selected: "" },
  { num: 25, question: "25 What does the <head> tag contain?", options: ["Metadata about the document", "Main content", "Footer text", "HTML table"], answer: "Metadata about the document", attempted: false, selected: "" },
  { num: 26, question: "26 Which tag defines the document title?", options: ["title", "head", "meta", "header"], answer: "title", attempted: false, selected: "" },
  { num: 27, question: "27 What is the default alignment of content in <div> tag?", options: ["Left", "Center", "Right", "Justify"], answer: "Left", attempted: false, selected: "" },
  { num: 28, question: "28 Which attribute specifies an inline CSS style?", options: ["style", "css", "font", "design"], answer: "style", attempted: false, selected: "" },
  { num: 29, question: "29 What does <br> tag do?", options: ["Inserts a line break", "Breaks paragraph", "Breaks table", "Breaks heading"], answer: "Inserts a line break", attempted: false, selected: "" },
  { num: 30, question: "30 What does HTML describe?", options: ["Structure of web pages", "Programming logic", "Database connection", "Server behavior"], answer: "Structure of web pages", attempted: false, selected: "" },
  { num: 31, question: "31 Which tag defines the root of an HTML document?", options: ["html", "body", "root", "doctype"], answer: "html", attempted: false, selected: "" },
  { num: 32, question: "32 Which tag is used to create a number input field?", options: ["input type='number'", "input type='num'", "input number", "num"], answer: "input type='number'", attempted: false, selected: "" },
  { num: 33, question: "33 Which element defines navigation links?", options: ["nav", "a", "link", "navigate"], answer: "nav", attempted: false, selected: "" },
  { num: 34, question: "34 What is the correct tag for inserting an HTML form?", options: ["form", "input", "submit", "fieldset"], answer: "form", attempted: false, selected: "" },
  { num: 35, question: "35 Which tag is used to display preformatted text?", options: ["pre", "code", "text", "tt"], answer: "pre", attempted: false, selected: "" },
  { num: 36, question: "36 What is the purpose of the <meta> tag?", options: ["Provides metadata", "Defines image", "Creates buttons", "Shows alert"], answer: "Provides metadata", attempted: false, selected: "" },
  { num: 37, question: "37 Which attribute is used in input tag to define default value?", options: ["value", "default", "placeholder", "set"], answer: "value", attempted: false, selected: "" },
  { num: 38, question: "38 Which tag represents a line break opportunity?", options: ["wbr", "br", "lb", "hr"], answer: "wbr", attempted: false, selected: "" },
  { num: 39, question: "39 Which tag is used for short quotations?", options: ["q", "quote", "blockquote", "say"], answer: "q", attempted: false, selected: "" },
  { num: 40, question: "40 What does the <code> tag represent?", options: ["Computer code", "CSS block", "HTML script", "Java block"], answer: "Computer code", attempted: false, selected: "" },
  { num: 41, question: "41 Which tag is used to embed external content?", options: ["iframe", "frame", "embed", "object"], answer: "iframe", attempted: false, selected: "" },
  { num: 42, question: "42 What does the <strong> tag do?", options: ["Defines strong importance", "Bold text only", "Underlines text", "Italic text"], answer: "Defines strong importance", attempted: false, selected: "" },
  { num: 43, question: "43 Which tag is used to define a section in a document?", options: ["section", "div", "part", "span"], answer: "section", attempted: false, selected: "" },
  { num: 44, question: "44 What is the function of the <base> tag?", options: ["Specifies base URL", "Creates database", "Formats text", "Inserts images"], answer: "Specifies base URL", attempted: false, selected: "" },
  { num: 45, question: "45 Which tag is used to display a tooltip when mouse hovers?", options: ["title", "tooltip", "hover", "alt"], answer: "title", attempted: false, selected: "" },
  { num: 46, question: "46 Which HTML attribute specifies a unique id?", options: ["id", "name", "class", "unique"], answer: "id", attempted: false, selected: "" },
  { num: 47, question: "47 What tag is used to display italic text?", options: ["i", "em", "italic", "it"], answer: "i", attempted: false, selected: "" },
  { num: 48, question: "48 What is the purpose of <caption> tag in table?", options: ["Defines table title", "Defines row title", "Defines cell color", "Defines footer"], answer: "Defines table title", attempted: false, selected: "" },
  { num: 49, question: "49 What does the <span> tag do?", options: ["Applies style to inline text", "Creates block section", "Applies background", "Links to CSS"], answer: "Applies style to inline text", attempted: false, selected: "" },
  { num: 50, question: "50 What tag is used to define a document's language?", options: ["html lang", "meta lang", "doc lang", "body lang"], answer: "html lang", attempted: false, selected: "" }
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