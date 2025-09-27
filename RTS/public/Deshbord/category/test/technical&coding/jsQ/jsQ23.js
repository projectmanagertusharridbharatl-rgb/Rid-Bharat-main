const questions = [
        { num: 51, question: "51 What is the output of console.log(typeof function() {})?", options: ["function", "object", "undefined", "string"], answer: "function", attempted: false, selected: "" },
  { num: 52, question: "52 What is the output of console.log(typeof class C {})?", options: ["function", "object", "undefined", "string"], answer: "function", attempted: false, selected: "" },
  { num: 53, question: "53 What is the output of console.log(typeof new Date())?", options: ["date", "object", "undefined", "string"], answer: "object", attempted: false, selected: "" },
  { num: 54, question: "54 What is the output of console.log(typeof /regex/)?", options: ["regex", "object", "undefined", "string"], answer: "object", attempted: false, selected: "" },
  { num: 55, question: "55 What is the output of console.log(typeof Symbol())?", options: ["symbol", "object", "undefined", "string"], answer: "symbol", attempted: false, selected: "" },
  { num: 56, question: "56 What is the output of console.log(typeof BigInt(1))?", options: ["bigint", "object", "undefined", "string"], answer: "bigint", attempted: false, selected: "" },
  { num: 57, question: "57 What is the output of console.log(1 + true)?", options: ["2", "1true", "NaN", "undefined"], answer: "2", attempted: false, selected: "" },
  { num: 58, question: "58 What is the output of console.log(1 + false)?", options: ["1", "1false", "NaN", "undefined"], answer: "1", attempted: false, selected: "" },
  { num: 59, question: "59 What is the output of console.log('1' + true)?", options: ["2", "1true", "NaN", "undefined"], answer: "1true", attempted: false, selected: "" },
  { num: 60, question: "60 What is the output of console.log('1' + false)?", options: ["1", "1false", "NaN", "undefined"], answer: "1false", attempted: false, selected: "" },
  { num: 61, question: "61 What is the output of console.log(1 + undefined)?", options: ["1", "NaN", "undefined", "1undefined"], answer: "NaN", attempted: false, selected: "" },
  { num: 62, question: "62 What is the output of console.log(1 + null)?", options: ["1", "NaN", "undefined", "1null"], answer: "1", attempted: false, selected: "" },
  { num: 63, question: "63 What is the output of console.log('1' + undefined)?", options: ["1", "NaN", "1undefined", "undefined"], answer: "1undefined", attempted: false, selected: "" },
  { num: 64, question: "64 What is the output of console.log('1' + null)?", options: ["1", "1null", "NaN", "undefined"], answer: "1null", attempted: false, selected: "" },
  { num: 65, question: "65 What is the output of console.log(1 - undefined)?", options: ["1", "NaN", "undefined", "-1"], answer: "NaN", attempted: false, selected: "" },
  { num: 66, question: "66 What is the output of console.log(1 - null)?", options: ["1", "NaN", "undefined", "0"], answer: "1", attempted: false, selected: "" },
  { num: 67, question: "67 What is the output of console.log('1' - undefined)?", options: ["1", "NaN", "undefined", "-1"], answer: "NaN", attempted: false, selected: "" },
  { num: 68, question: "68 What is the output of console.log('1' - null)?", options: ["1", "NaN", "undefined", "0"], answer: "1", attempted: false, selected: "" },
  { num: 69, question: "69 What is the output of console.log(1 * undefined)?", options: ["1", "NaN", "undefined", "0"], answer: "NaN", attempted: false, selected: "" },
  { num: 70, question: "70 What is the output of console.log(1 * null)?", options: ["1", "NaN", "undefined", "0"], answer: "0", attempted: false, selected: "" },
  { num: 71, question: "71 What is the output of console.log('1' * undefined)?", options: ["1", "NaN", "undefined", "0"], answer: "NaN", attempted: false, selected: "" },
  { num: 72, question: "72 What is the output of console.log('1' * null)?", options: ["1", "NaN", "undefined", "0"], answer: "0", attempted: false, selected: "" },
  { num: 73, question: "73 What is the output of console.log(1 / undefined)?", options: ["1", "NaN", "undefined", "Infinity"], answer: "NaN", attempted: false, selected: "" },
  { num: 74, question: "74 What is the output of console.log(1 / null)?", options: ["1", "NaN", "undefined", "Infinity"], answer: "Infinity", attempted: false, selected: "" },
  { num: 75, question: "75 What is the output of console.log('1' / undefined)?", options: ["1", "NaN", "undefined", "Infinity"], answer: "NaN", attempted: false, selected: "" },
  { num: 76, question: "76 What is the output of console.log('1' / null)?", options: ["1", "NaN", "undefined", "Infinity"], answer: "Infinity", attempted: false, selected: "" },
  { num: 77, question: "77 What is the output of console.log(undefined + undefined)?", options: ["undefined", "NaN", "undefinedundefined", "0"], answer: "NaN", attempted: false, selected: "" },
  { num: 78, question: "78 What is the output of console.log(null + null)?", options: ["null", "NaN", "nullnull", "0"], answer: "0", attempted: false, selected: "" },
  { num: 79, question: "79 What is the output of console.log(undefined + null)?", options: ["undefinednull", "NaN", "undefined", "0"], answer: "NaN", attempted: false, selected: "" },
  { num: 80, question: "80 What is the output of console.log(undefined - null)?", options: ["undefinednull", "NaN", "undefined", "0"], answer: "NaN", attempted: false, selected: "" },
  { num: 81, question: "81 What is the output of console.log(undefined * null)?", options: ["undefinednull", "NaN", "undefined", "0"], answer: "NaN", attempted: false, selected: "" },
  { num: 82, question: "82 What is the output of console.log(undefined / null)?", options: ["undefinednull", "NaN", "undefined", "Infinity"], answer: "NaN", attempted: false, selected: "" },
  { num: 83, question: "83 What is the output of console.log(undefined == 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 84, question: "84 What is the output of console.log(null == 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 85, question: "85 What is the output of console.log(undefined < 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 86, question: "86 What is the output of console.log(null < 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 87, question: "87 What is the output of console.log(undefined > 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 88, question: "88 What is the output of console.log(null > 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 89, question: "89 What is the output of console.log(undefined <= 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 90, question: "90 What is the output of console.log(null <= 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 91, question: "91 What is the output of console.log(undefined >= 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 92, question: "92 What is the output of console.log(null >= 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 93, question: "93 What is the output of console.log(parseInt('123abc'))?", options: ["123", "NaN", "123abc", "undefined"], answer: "123", attempted: false, selected: "" },
  { num: 94, question: "94 What is the output of console.log(parseInt('abc123'))?", options: ["123", "NaN", "abc123", "undefined"], answer: "NaN", attempted: false, selected: "" },
  { num: 95, question: "95 What is the output of console.log(parseFloat('123.45abc'))?", options: ["123.45", "NaN", "123.45abc", "undefined"], answer: "123.45", attempted: false, selected: "" },
  { num: 96, question: "96 What is the output of console.log(parseFloat('abc123.45'))?", options: ["123.45", "NaN", "abc123.45", "undefined"], answer: "NaN", attempted: false, selected: "" },
  { num: 97, question: "97 What is the output of console.log(isNaN(undefined))?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 98, question: "98 What is the output of console.log(isNaN(null))?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 99, question: "99 What is the output of console.log(isNaN('123'))?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 100, question: "100 What is the output of console.log(isNaN('abc'))?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" }
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
