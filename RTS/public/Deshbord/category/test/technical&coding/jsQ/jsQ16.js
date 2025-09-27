const questions = [
       { num: 1, question: "1. What is the output of console.log(typeof null)?", options: ["object", "null", "undefined", "string"], answer: "object", attempted: false, selected: "" },
  { num: 2, question: "2. What is the output of console.log(1 + '1')?", options: ["2", "11", "NaN", "undefined"], answer: "11", attempted: false, selected: "" },
  { num: 3, question: "3. What is the output of console.log(2 == '2')?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 4, question: "4. What is the output of console.log(2 === '2')?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 5, question: "5. What is the output of console.log([] + [])?", options: ["[]", "[object Object]", "'' (empty string)", "TypeError"], answer: "'' (empty string)", attempted: false, selected: "" },
  { num: 6, question: "6. What is the output of console.log([] + {})?", options: ["[object Object]", "{}", "TypeError", "undefined"], answer: "[object Object]", attempted: false, selected: "" },
  { num: 7, question: "7. What is the output of console.log({} + [])?", options: ["[object Object]", "0", "NaN", "TypeError"], answer: "0", attempted: false, selected: "" },
  { num: 8, question: "8. What is the output of console.log(!!'false')?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 9, question: "9. What is the output of console.log(!!false)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 10, question: "10. What is the output of console.log(NaN === NaN)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 11, question: "11. What is the output of console.log(typeof NaN)?", options: ["number", "NaN", "string", "undefined"], answer: "number", attempted: false, selected: "" },
  { num: 12, question: "12. What is the output of console.log(1 < 2 < 3)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 13, question: "13. What is the output of console.log(3 > 2 > 1)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 14, question: "14. What is the output of console.log('5' - 3)?", options: ["2", "53", "NaN", "TypeError"], answer: "2", attempted: false, selected: "" },
  { num: 15, question: "15. What is the output of console.log('5' + 3)?", options: ["8", "53", "NaN", "TypeError"], answer: "53", attempted: false, selected: "" },
  { num: 16, question: "16. What is the output of console.log('b' + 'a' + + 'a' + 'a')?", options: ["baNaNa", "baaa", "NaN", "TypeError"], answer: "baNaNa", attempted: false, selected: "" },
  { num: 17, question: "17. What is the output of console.log(0.1 + 0.2 === 0.3)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 18, question: "18. What is the output of console.log(typeof function() {})?", options: ["function", "object", "undefined", "string"], answer: "function", attempted: false, selected: "" },
  { num: 19, question: "19. What is the output of console.log(typeof [])?", options: ["array", "object", "undefined", "string"], answer: "object", attempted: false, selected: "" },
  { num: 20, question: "20. What is the output of console.log([] == false)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 21, question: "21. What is the output of console.log({} == false)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 22, question: "22. What is the output of console.log([] == 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 23, question: "23. What is the output of console.log({} == 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 24, question: "24. What is the output of console.log(!!0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 25, question: "25. What is the output of console.log(!!1)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 26, question: "26. What is the output of console.log(!!'0')?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 27, question: "27. What is the output of console.log(!!'')?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 28, question: "28. What is the output of console.log(!!null)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 29, question: "29. What is the output of console.log(!!undefined)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 30, question: "30. What is the output of console.log(!!{})?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 31, question: "31. What is the output of console.log(!![])?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 32, question: "32. What is the output of console.log(1 == '1')?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 33, question: "33. What is the output of console.log(1 === '1')?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 34, question: "34. What is the output of console.log(null == undefined)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 35, question: "35. What is the output of console.log(null === undefined)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 36, question: "36. What is the output of console.log('' == false)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 37, question: "37. What is the output of console.log('' === false)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 38, question: "38. What is the output of console.log(0 == false)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 39, question: "39. What is the output of console.log(0 === false)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 40, question: "40. What is the output of console.log('5' - - '3')?", options: ["8", "2", "53", "NaN"], answer: "8", attempted: false, selected: "" },
  { num: 41, question: "41. What is the output of console.log('5' + - '3')?", options: ["2", "8", "5-3", "53"], answer: "5-3", attempted: false, selected: "" },
  { num: 42, question: "42. What is the output of console.log(+'5' + +'3')?", options: ["8", "53", "NaN", "TypeError"], answer: "8", attempted: false, selected: "" },
  { num: 43, question: "43. What is the output of console.log(+'5' - +'3')?", options: ["2", "8", "53", "NaN"], answer: "2", attempted: false, selected: "" },
  { num: 44, question: "44. What is the output of console.log(Math.max())?", options: ["0", "Infinity", "-Infinity", "NaN"], answer: "-Infinity", attempted: false, selected: "" },
  { num: 45, question: "45. What is the output of console.log(Math.min())?", options: ["0", "Infinity", "-Infinity", "NaN"], answer: "Infinity", attempted: false, selected: "" },
  { num: 46, question: "46. What is the output of console.log([] == 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "true", attempted: false, selected: "" },
  { num: 47, question: "47. What is the output of console.log([] === 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 48, question: "48. What is the output of console.log({} == 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 49, question: "49. What is the output of console.log({} === 0)?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
  { num: 50, question: "50. What is the output of console.log([] == [])?", options: ["true", "false", "TypeError", "undefined"], answer: "false", attempted: false, selected: "" },
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
