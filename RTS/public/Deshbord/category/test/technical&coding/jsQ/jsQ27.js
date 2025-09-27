const questions = [
         { num: 51, question: "51 What is the output of console.log('1' + '2' + '3')?", options: ["123", "6", "33", "NaN"], answer: "123", attempted: false, selected: "" },
  { num: 52, question: "52 What is the output of console.log('1' + 2 + 3)?", options: ["123", "15", "6", "NaN"], answer: "123", attempted: false, selected: "" },
  { num: 53, question: "53 What is the output of console.log(1 + 2 + '3')?", options: ["33", "123", "6", "NaN"], answer: "33", attempted: false, selected: "" },
  { num: 54, question: "54 What is the output of console.log(1 + '2' + 3)?", options: ["123", "15", "6", "NaN"], answer: "123", attempted: false, selected: "" },
  { num: 55, question: "55 What is the output of console.log(+'1' + +'2' + +'3')?", options: ["123", "6", "33", "NaN"], answer: "6", attempted: false, selected: "" },
  { num: 56, question: "56 What is the output of console.log('1' - '2' - '3')?", options: ["-4", "123", "NaN", "undefined"], answer: "-4", attempted: false, selected: "" },
  { num: 57, question: "57 What is the output of console.log('1' - - '1')?", options: ["2", "0", "11", "NaN"], answer: "2", attempted: false, selected: "" },
  { num: 58, question: "58 What is the output of console.log('1' + - '1')?", options: ["1-1", "0", "2", "NaN"], answer: "1-1", attempted: false, selected: "" },
  { num: 59, question: "59 What is the output of console.log(+'1' + - '1')?", options: ["0", "1-1", "2", "NaN"], answer: "0", attempted: false, selected: "" },
  { num: 60, question: "60 What is the output of console.log(-'1' + + '1')?", options: ["0", "1-1", "2", "NaN"], answer: "0", attempted: false, selected: "" },
  { num: 61, question: "61 What is the output of console.log(1 + 2 + 3 + '4')?", options: ["1234", "64", "10", "NaN"], answer: "64", attempted: false, selected: "" },
  { num: 62, question: "62 What is the output of console.log('1' + 2 + 3 + 4)?", options: ["1234", "10", "234", "NaN"], answer: "1234", attempted: false, selected: "" },
  { num: 63, question: "63 What is the output of console.log(1 + '2' + 3 + 4)?", options: ["1234", "10", "234", "NaN"], answer: "1234", attempted: false, selected: "" },
  { num: 64, question: "64 What is the output of console.log(1 + 2 + '3' + 4)?", options: ["1234", "334", "10", "NaN"], answer: "334", attempted: false, selected: "" },
  { num: 65, question: "65 What is the output of console.log(1 + 2 + 3 + '4' + 5)?", options: ["12345", "645", "10", "NaN"], answer: "645", attempted: false, selected: "" },
  { num: 66, question: "66 What is the output of console.log('1' + '2' - '3')?", options: ["9", "123", "NaN", "undefined"], answer: "9", attempted: false, selected: "" },
  { num: 67, question: "67 What is the output of console.log('1' * '2' * '3')?", options: ["6", "123", "NaN", "undefined"], answer: "6", attempted: false, selected: "" },
  { num: 68, question: "68 What is the output of console.log('1' / '2' / '3')?", options: ["0.166...", "123", "NaN", "undefined"], answer: "0.166...", attempted: false, selected: "" },
  { num: 69, question: "69 What is the output of console.log('a' / 'b')?", options: ["NaN", "undefined", "TypeError", "ab"], answer: "NaN", attempted: false, selected: "" },
  { num: 70, question: "70 What is the output of console.log('a' * 'b')?", options: ["NaN", "undefined", "TypeError", "ab"], answer: "NaN", attempted: false, selected: "" },
  { num: 71, question: "71 What is the output of console.log('a' + 'b')?", options: ["ab", "NaN", "undefined", "TypeError"], answer: "ab", attempted: false, selected: "" },
  { num: 72, question: "72 What is the output of console.log('a' - 'b')?", options: ["NaN", "undefined", "TypeError", "ab"], answer: "NaN", attempted: false, selected: "" },
  { num: 73, question: "73 What is the output of console.log(Number('1'))?", options: ["1", "'1'", "NaN", "TypeError"], answer: "1", attempted: false, selected: "" },
  { num: 74, question: "74 What is the output of console.log(Number('a'))?", options: ["NaN", "undefined", "TypeError", "'a'"], answer: "NaN", attempted: false, selected: "" },
  { num: 75, question: "75 What is the output of console.log(String(1))?", options: ["'1'", "1", "NaN", "TypeError"], answer: "'1'", attempted: false, selected: "" },
  { num: 76, question: "76 What is the output of console.log(String(null))?", options: ["'null'", "null", "NaN", "TypeError"], answer: "'null'", attempted: false, selected: "" },
  { num: 77, question: "77 What is the output of console.log(String(undefined))?", options: ["'undefined'", "undefined", "NaN", "TypeError"], answer: "'undefined'", attempted: false, selected: "" },
  { num: 78, question: "78 What is the output of console.log(Boolean(1))?", options: ["true", "false", "1", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 79, question: "79 What is the output of console.log(Boolean(0))?", options: ["false", "true", "0", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 80, question: "80 What is the output of console.log(Boolean(''))?", options: ["false", "true", "''", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 81, question: "81 What is the output of console.log(Boolean(' '))?", options: ["true", "false", "' '", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 82, question: "82 What is the output of console.log(Boolean([]))?", options: ["true", "false", "[]", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 83, question: "83 What is the output of console.log(Boolean({}))?", options: ["true", "false", "{}", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 84, question: "84 What is the output of console.log(Boolean(null))?", options: ["false", "true", "null", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 85, question: "85 What is the output of console.log(Boolean(undefined))?", options: ["false", "true", "undefined", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 86, question: "86 What is the output of console.log(Boolean(NaN))?", options: ["false", "true", "NaN", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 87, question: "87 What is the output of console.log(!!1)?", options: ["true", "false", "1", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 88, question: "88 What is the output of console.log(!!0)?", options: ["false", "true", "0", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 89, question: "89 What is the output of console.log(!!'')?", options: ["false", "true", "''", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 90, question: "90 What is the output of console.log(!!' ')?", options: ["true", "false", "' '", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 91, question: "91 What is the output of console.log(!![])?", options: ["true", "false", "[]", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 92, question: "92 What is the output of console.log(!!{})?", options: ["true", "false", "{}", "TypeError"], answer: "true", attempted: false, selected: "" },
  { num: 93, question: "93 What is the output of console.log(!!null)?", options: ["false", "true", "null", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 94, question: "94 What is the output of console.log(!!undefined)?", options: ["false", "true", "undefined", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 95, question: "95 What is the output of console.log(!!NaN)?", options: ["false", "true", "NaN", "TypeError"], answer: "false", attempted: false, selected: "" },
  { num: 96, question: "96 What is the output of console.log(1 && 2)?", options: ["2", "1", "true", "false"], answer: "2", attempted: false, selected: "" },
  { num: 97, question: "97 What is the output of console.log(0 && 2)?", options: ["0", "2", "false", "true"], answer: "0", attempted: false, selected: "" },
  { num: 98, question: "98 What is the output of console.log(1 || 2)?", options: ["1", "2", "true", "false"], answer: "1", attempted: false, selected: "" },
  { num: 99, question: "99 What is the output of console.log(0 || 2)?", options: ["2", "0", "true", "false"], answer: "2", attempted: false, selected: "" },
  { num: 100, question: "100 What is the output of console.log([] == ![])?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" }
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
            questions[index].attempted = true;
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
