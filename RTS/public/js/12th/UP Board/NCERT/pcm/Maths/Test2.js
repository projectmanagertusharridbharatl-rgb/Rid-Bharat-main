 //  inverseTrigonometricFunctions (unit-2)
 const questions = [
  {
   num: 1,
   question_en: "What is the value of tan⁻¹(0)?",
   question_hi: "tan⁻¹(0) का मान क्या है?",
   options_en: ["0", "π/2", "π", "π/4"],
   options_hi: ["0", "π/2", "π", "π/4"],
   answer: "0",
   attempted: false,
   selected: ""
 },
 {
   num: 2,
   question_en: "What is the value of cot⁻¹(√2)?",
   question_hi: "cot⁻¹(√2) का मान क्या है?",
   options_en: ["π/4", "π/6", "π/3", "π/2"],
   options_hi: ["π/4", "π/6", "π/3", "π/2"],
   answer: "π/4",
   attempted: false,
   selected: ""
 },
 {
   num: 3,
   question_en: "What is the value of sec⁻¹(1/2)?",
   question_hi: "sec⁻¹(1/2) का मान क्या है?",
   options_en: ["π/3", "π/2", "π", "2π/3"],
   options_hi: ["π/3", "π/2", "π", "2π/3"],
   answer: "2π/3",
   attempted: false,
   selected: ""
 },
 {
   num: 4,
   question_en: "What is the value of sin⁻¹(√3/2)?",
   question_hi: "sin⁻¹(√3/2) का मान क्या है?",
   options_en: ["π/3", "π/2", "π/4", "π/6"],
   options_hi: ["π/3", "π/2", "π/4", "π/6"],
   answer: "π/3",
   attempted: false,
   selected: ""
 },
 {
   num: 5,
   question_en: "What is the value of cos⁻¹(-√2/2)?",
   question_hi: "cos⁻¹(-√2/2) का मान क्या है?",
   options_en: ["3π/4", "π/3", "π/2", "π"],
   options_hi: ["3π/4", "π/3", "π/2", "π"],
   answer: "3π/4",
   attempted: false,
   selected: ""
 },
 {
   num: 6,
   question_en: "What is the value of tan⁻¹(1/√3)?",
   question_hi: "tan⁻¹(1/√3) का मान क्या है?",
   options_en: ["π/6", "π/3", "π/4", "0"],
   options_hi: ["π/6", "π/3", "π/4", "0"],
   answer: "π/6",
   attempted: false,
   selected: ""
 },
 {
   num: 7,
   question_en: "What is the value of sin⁻¹(1/2)?",
   question_hi: "sin⁻¹(1/2) का मान क्या है?",
   options_en: ["π/6", "π/3", "π/4", "π/2"],
   options_hi: ["π/6", "π/3", "π/4", "π/2"],
   answer: "π/6",
   attempted: false,
   selected: ""
 },
 {
   num: 8,
   question_en: "What is the value of cos⁻¹(1)?",
   question_hi: "cos⁻¹(1) का मान क्या है?",
   options_en: ["0", "π/2", "π", "π/3"],
   options_hi: ["0", "π/2", "π", "π/3"],
   answer: "0",
   attempted: false,
   selected: ""
 },
 {
   num: 9,
   question_en: "What is the range of cos⁻¹(x)?",
   question_hi: "cos⁻¹(x) फलन का सीमा क्या है?",
   options_en: ["[-1, 1]", "[-π/2, π/2]", "[0, π]", "[-π, π]"],
   options_hi: ["[-1, 1]", "[-π/2, π/2]", "[0, π]", "[-π, π]"],
   answer: "[0, π]",
   attempted: false,
   selected: ""
 },
 {
   num: 10,
   question_en: "What is the value of tan⁻¹(-1)?",
   question_hi: "tan⁻¹(-1) का मान क्या है?",
   options_en: ["-π/4", "π/4", "π/3", "π/2"],
   options_hi: ["-π/4", "π/4", "π/3", "π/2"],
   answer: "-π/4",
   attempted: false,
   selected: ""
 },
 {
   num: 11,
   question_en: "What is the domain of cos⁻¹(x)?",
   question_hi: "cos⁻¹(x) फलन का परिमाण क्या है?",
   options_en: ["[-1, 1]", "(0, ∞)", "[-π/2, π/2]", "[-π, π]"],
   options_hi: ["[-1, 1]", "(0, ∞)", "[-π/2, π/2]", "[-π, π]"],
   answer: "[-1, 1]",
   attempted: false,
   selected: ""
 },
 {
   num: 12,
   question_en: "What is the value of sec⁻¹(1)?",
   question_hi: "sec⁻¹(1) का मान क्या है?",
   options_en: ["0", "π/2", "π", "π/3"],
   options_hi: ["0", "π/2", "π", "π/3"],
   answer: "0",
   attempted: false,
   selected: ""
 },
 {
   num: 13,
   question_en: "What is the value of cos⁻¹(√3/2)?",
   question_hi: "cos⁻¹(√3/2) का मान क्या है?",
   options_en: ["π/6", "π/4", "π/3", "π/2"],
   options_hi: ["π/6", "π/4", "π/3", "π/2"],
   answer: "π/6",
   attempted: false,
   selected: ""
 },
 {
   num: 14,
   question_en: "What is the value of tan⁻¹(√3)?",
   question_hi: "tan⁻¹(√3) का मान क्या है?",
   options_en: ["π/3", "π/4", "π/6", "π/2"],
   options_hi: ["π/3", "π/4", "π/6", "π/2"],
   answer: "π/3",
   attempted: false,
   selected: ""
 },
 {
   num: 15,
   question_en: "What is the value of sin⁻¹(-√3/2)?",
   question_hi: "sin⁻¹(-√3/2) का मान क्या है?",
   options_en: ["-π/3", "-π/4", "-π/6", "π/6"],
   options_hi: ["-π/3", "-π/4", "-π/6", "π/6"],
   answer: "-π/3",
   attempted: false,
   selected: ""
 },
 {
   num: 16,
   question_en: "What is the range of tan⁻¹(x)?",
   question_hi: "tan⁻¹(x) फलन का सीमा क्या है?",
   options_en: ["[-π/2, π/2]", "[-π, π]", "[-1, 1]", "[0, π]"],
   options_hi: ["[-π/2, π/2]", "[-π, π]", "[-1, 1]", "[0, π]"],
   answer: "[-π/2, π/2]",
   attempted: false,
   selected: ""
 },
 {
   num: 17,
   question_en: "What is the value of cos⁻¹(0)?",
   question_hi: "cos⁻¹(0) का मान क्या है?",
   options_en: ["π/2", "π", "0", "π/4"],
   options_hi: ["π/2", "π", "0", "π/4"],
   answer: "π/2",
   attempted: false,
   selected: ""
 },
 {
   num: 18,
   question_en: "What is the value of cot⁻¹(1/√3)?",
   question_hi: "cot⁻¹(1/√3) का मान क्या है?",
   options_en: ["π/6", "π/4", "π/3", "π/2"],
   options_hi: ["π/6", "π/4", "π/3", "π/2"],
   answer: "π/3",
   attempted: false,
   selected: ""
 },
 {
   num: 19,
   question_en: "What is the value of tan⁻¹(1)?",
   question_hi: "tan⁻¹(1) का मान क्या है?",
   options_en: ["π/4", "π/2", "π", "0"],
   options_hi: ["π/4", "π/2", "π", "0"],
   answer: "π/4",
   attempted: false,
   selected: ""
 },
 {
   num: 20,
   question_en: "What is the value of sin⁻¹(-1)?",
   question_hi: "sin⁻¹(-1) का मान क्या है?",
   options_en: ["-π/2", "π/2", "π", "0"],
   options_hi: ["-π/2", "π/2", "π", "0"],
   answer: "-π/2",
   attempted: false,
   selected: ""
 },
 {
   num: 21,
   question_en: "What is the value of sec⁻¹(2)?",
   question_hi: "sec⁻¹(2) का मान क्या है?",
   options_en: ["π/3", "π/2", "π", "2π/3"],
   options_hi: ["π/3", "π/2", "π", "2π/3"],
   },
     {
       num: 22,
       question_en: "What is the value of cot⁻¹(1)?",
       question_hi: "cot⁻¹(1) का मान क्या है?",
       options_en: ["π/4", "π/3", "π/6", "π/2"],
       options_hi: ["π/4", "π/3", "π/6", "π/2"],
       answer: "π/4",
       attempted: false,
       selected: ""
     },
     {
       num: 23,
       question_en: "What is the domain of tan⁻¹(x)?",
       question_hi: "tan⁻¹(x) फलन का परिमाण क्या है?",
       options_en: ["ℝ", "[-1, 1]", "[0, π]", "[-π/2, π/2]"],
       options_hi: ["ℝ", "[-1, 1]", "[0, π]", "[-π/2, π/2]"],
       answer: "ℝ",
       attempted: false,
       selected: ""
     },
     {
       num: 24,
       question_en: "What is the value of cos⁻¹(-1)?",
       question_hi: "cos⁻¹(-1) का मान क्या है?",
       options_en: ["π", "π/2", "0", "π/3"],
       options_hi: ["π", "π/2", "0", "π/3"],
       answer: "π",
       attempted: false,
       selected: ""
     },
     {
       num: 25,
       question_en: "What is the range of sin⁻¹(x)?",
       question_hi: "sin⁻¹(x) फलन का सीमा क्या है?",
       options_en: ["[-π/2, π/2]", "[0, π]", "[-1, 1]", "[-π, π]"],
       options_hi: ["[-π/2, π/2]", "[0, π]", "[-1, 1]", "[-π, π]"],
       answer: "[-π/2, π/2]",
       attempted: false,
       selected: ""
     },
     {
       num: 26,
       question_en: "What is the value of sin⁻¹(1)?",
       question_hi: "sin⁻¹(1) का मान क्या है?",
       options_en: ["π/2", "π", "0", "π/4"],
       options_hi: ["π/2", "π", "0", "π/4"],
       answer: "π/2",
       attempted: false,
       selected: ""
     },
     {
       num: 27,
       question_en: "What is the value of tan⁻¹(0)?",
       question_hi: "tan⁻¹(0) का मान क्या है?",
       options_en: ["0", "π/2", "π", "π/4"],
       options_hi: ["0", "π/2", "π", "π/4"],
       answer: "0",
       attempted: false,
       selected: ""
     },
     {
       num: 28,
       question_en: "What is the domain of sin⁻¹(x)?",
       question_hi: "sin⁻¹(x) का परिमाण क्या है?",
       options_en: ["[-1, 1]", "(-∞, ∞)", "[0, π]", "[-π, π]"],
       options_hi: ["[-1, 1]", "(-∞, ∞)", "[0, π]", "[-π, π]"],
       answer: "[-1, 1]",
       attempted: false,
       selected: ""
     },
     {
       num: 29,
       question_en: "What is the value of cos⁻¹(1/2)?",
       question_hi: "cos⁻¹(1/2) का मान क्या है?",
       options_en: ["π/3", "π/2", "π/6", "π/4"],
       options_hi: ["π/3", "π/2", "π/6", "π/4"],
       answer: "π/3",
       attempted: false,
       selected: ""
     },
     {
       num: 30,
       question_en: "What is the value of tan⁻¹(√3)?",
       question_hi: "tan⁻¹(√3) का मान क्या है?",
       options_en: ["π/3", "π/4", "π/6", "π/2"],
       options_hi: ["π/3", "π/4", "π/6", "π/2"],
       answer: "π/3",
       attempted: false,
       selected: ""
     },
     {
       num: 31,
       question_en: "If sin⁻¹(x) = θ, then x = ?",
       question_hi: "यदि sin⁻¹(x) = θ, तो x = ?",
       options_en: ["sin(θ)", "cos(θ)", "tan(θ)", "cot(θ)"],
       options_hi: ["sin(θ)", "cos(θ)", "tan(θ)", "cot(θ)"],
       answer: "sin(θ)",
       attempted: false,
       selected: ""
     },
     {
       num: 32,
       question_en: "Which of the following is not principal value branch?",
       question_hi: "निम्न में से कौन मुख्य मान शाखा नहीं है?",
       options_en: ["sin⁻¹(x): [-π/2, π/2]", "cos⁻¹(x): [0, π]", "tan⁻¹(x): (0, π)", "cot⁻¹(x): (0, π)"],
       options_hi: ["sin⁻¹(x): [-π/2, π/2]", "cos⁻¹(x): [0, π]", "tan⁻¹(x): (0, π)", "cot⁻¹(x): (0, π)"],
       answer: "tan⁻¹(x): (0, π)",
       attempted: false,
       selected: ""
     },
     {
       num: 33,
       question_en: "What is the value of sin⁻¹(0)?",
       question_hi: "sin⁻¹(0) का मान क्या है?",
       options_en: ["0", "π/2", "π", "π/4"],
       options_hi: ["0", "π/2", "π", "π/4"],
       answer: "0",
       attempted: false,
       selected: ""
     },
     {
       num: 34,
       question_en: "What is the value of cot⁻¹(0)?",
       question_hi: "cot⁻¹(0) का मान क्या है?",
       options_en: ["π/2", "0", "π", "π/3"],
       options_hi: ["π/2", "0", "π", "π/3"],
       answer: "π/2",
       attempted: false,
       selected: ""
     },
     {
       num: 35,
       question_en: "Which function has range (0, π)?",
       question_hi: "कौन सा फलन का सीमा (0, π) है?",
       options_en: ["cot⁻¹(x)", "sin⁻¹(x)", "tan⁻¹(x)", "cos⁻¹(x)"],
       options_hi: ["cot⁻¹(x)", "sin⁻¹(x)", "tan⁻¹(x)", "cos⁻¹(x)"],
       answer: "cot⁻¹(x)",
       attempted: false,
       selected: ""
     },
     {
       num: 36,
       question_en: "What is the value of cos⁻¹(√2/2)?",
       question_hi: "cos⁻¹(√2/2) का मान क्या है?",
       options_en: ["π/4", "π/6", "π/3", "π/2"],
       options_hi: ["π/4", "π/6", "π/3", "π/2"],
       answer: "π/4",
       attempted: false,
       selected: ""
     },
     {
       num: 37,
       question_en: "What is the domain of cot⁻¹(x)?",
       question_hi: "cot⁻¹(x) का परिमाण क्या है?",
       options_en: ["ℝ", "[-1, 1]", "[0, π]", "[-π/2, π/2]"],
       options_hi: ["ℝ", "[-1, 1]", "[0, π]", "[-π/2, π/2]"],
       answer: "ℝ",
       attempted: false,
       selected: ""
     },
     {
       num: 38,
       question_en: "What is the value of sec⁻¹(1)?",
       question_hi: "sec⁻¹(1) का मान क्या है?",
       options_en: ["0", "π/2", "π", "π/3"],
       options_hi: ["0", "π/2", "π", "π/3"],
       answer: "0",
       attempted: false,
       selected: ""
     },
     {
       num: 39,
       question_en: "What is the range of sec⁻¹(x)?",
       question_hi: "sec⁻¹(x) का सीमा क्या है?",
       options_en: ["[0, π] – {π/2}", "[-π/2, π/2]", "ℝ", "[1, ∞)"],
       options_hi: ["[0, π] – {π/2}", "[-π/2, π/2]", "ℝ", "[1, ∞)"],
       answer: "[0, π] – {π/2}",
       attempted: false,
       selected: ""
     },
     {
       num: 40,
       question_en: "What is the range of cos⁻¹(x)?",
       question_hi: "cos⁻¹(x) का सीमा क्या है?",
       options_en: ["[0, π]", "[-π/2, π/2]", "[−π, π]", "[−1, 1]"],
       options_hi: ["[0, π]", "[-π/2, π/2]", "[−π, π]", "[−1, 1]"],
       answer: "[0, π]",
       attempted: false,
       selected: ""
     },
     {
       num: 41,
       question_en: "What is the domain of sec⁻¹(x)?",
       question_hi: "sec⁻¹(x) का परिमाण क्या है?",
       options_en: ["(−∞, −1] ∪ [1, ∞)", "[−1, 1]", "ℝ", "[0, π]"],
       options_hi: ["(−∞, −1] ∪ [1, ∞)", "[−1, 1]", "ℝ", "[0, π]"],
       answer: "(−∞, −1] ∪ [1, ∞)",
       attempted: false,
       selected: ""
     },
     {
       num: 42,
       question_en: "sin⁻¹(sin x) = x is true when x ∈",
       question_hi: "sin⁻¹(sin x) = x सत्य है जब x ∈",
       options_en: ["[−π/2, π/2]", "[0, π]", "ℝ", "[−1, 1]"],
       options_hi: ["[−π/2, π/2]", "[0, π]", "ℝ", "[−1, 1]"],
       answer: "[−π/2, π/2]",
       attempted: false,
       selected: ""
     },
     {
       num: 43,
       question_en: "cos⁻¹(cos x) = x is true when x ∈",
       question_hi: "cos⁻¹(cos x) = x सत्य है जब x ∈",
       options_en: ["[0, π]", "[−π/2, π/2]", "ℝ", "[−1, 1]"],
       options_hi: ["[0, π]", "[−π/2, π/2]", "ℝ", "[−1, 1]"],
       answer: "[0, π]",
       attempted: false,
       selected: ""
     },
     {
       num: 44,
       question_en: "tan⁻¹(tan x) = x is true when x ∈",
       question_hi: "tan⁻¹(tan x) = x सत्य है जब x ∈",
       options_en: ["(−π/2, π/2)", "[−π/2, π/2]", "[0, π]", "ℝ"],
       options_hi: ["(−π/2, π/2)", "[−π/2, π/2]", "[0, π]", "ℝ"],
       answer: "(−π/2, π/2)",
       attempted: false,
       selected: ""
     },
     {
       num: 45,
       question_en: "What is the principal value of sin⁻¹(−1)?",
       question_hi: "sin⁻¹(−1) का मुख्य मान क्या है?",
       options_en: ["−π/2", "π/2", "0", "π"],
       options_hi: ["−π/2", "π/2", "0", "π"],
       answer: "−π/2",
       attempted: false,
       selected: ""
     },
     {
       num: 46,
       question_en: "What is the principal value of cos⁻¹(−1)?",
       question_hi: "cos⁻¹(−1) का मुख्य मान क्या है?",
       options_en: ["π", "π/2", "0", "−π"],
       options_hi: ["π", "π/2", "0", "−π"],
       answer: "π",
       attempted: false,
       selected: ""
     },
     {
       num: 47,
       question_en: "What is the principal value of tan⁻¹(−1)?",
       question_hi: "tan⁻¹(−1) का मुख्य मान क्या है?",
       options_en: ["−π/4", "π/4", "0", "π"],
       options_hi: ["−π/4", "π/4", "0", "π"],
       answer: "−π/4",
       attempted: false,
       selected: ""
     },
     {
       num: 48,
       question_en: "Which inverse trigonometric function is even?",
       question_hi: "कौन सा व्युत्क्रमानुपाती त्रिकोणमितीय फलन सम है?",
       options_en: ["cos⁻¹(x)", "sin⁻¹(x)", "tan⁻¹(x)", "cot⁻¹(x)"],
       options_hi: ["cos⁻¹(x)", "sin⁻¹(x)", "tan⁻¹(x)", "cot⁻¹(x)"],
       answer: "cos⁻¹(x)",
       attempted: false,
       selected: ""
     },
     {
       num: 49,
       question_en: "Which inverse trigonometric function is odd?",
       question_hi: "कौन सा व्युत्क्रमानुपाती त्रिकोणमितीय फलन विषम है?",
       options_en: ["sin⁻¹(x)", "cos⁻¹(x)", "sec⁻¹(x)", "None"],
       options_hi: ["sin⁻¹(x)", "cos⁻¹(x)", "sec⁻¹(x)", "None"],
       answer: "sin⁻¹(x)",
       attempted: false,
       selected: ""
     },
     {
       num: 50,
       question_en: "The graph of y = tan⁻¹(x) is",
       question_hi: "y = tan⁻¹(x) का ग्राफ है",
       options_en: ["Increasing", "Decreasing", "Constant", "None"],
       options_hi: ["बढ़ता हुआ", "घटता हुआ", "स्थिर", "कोई नहीं"],
       answer: "Increasing",
       attempted: false,
       selected: ""
     },
   ];
 
   // Add more questions as needed...
   
   let currentQuestion = 0;
   let language = "en"; // Default English
   const circlesPerPage = 70;
   let currentCirclePage = 0;
   let timeLeft = 300;
   let timerInterval;
   
   function loadQuestion(index) {
       const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
       const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;
   
       document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
       document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;
   
       const optionsElement = document.getElementById("options");
       optionsElement.innerHTML = "";
   
       optionsArray.forEach(option => {
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
       const start = currentCirclePage * circlesPerPage;
       const end = Math.min(start + circlesPerPage, questions.length);
   
       for (let i = start; i < end; i++) {
           const q = questions[i];
           let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
           circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
       }
   }
   
   function jumpToQuestion(index) {
       currentQuestion = index;
       loadQuestion(index);
   }
   
   function prevCirclePage() {
       if (currentCirclePage > 0) {
           currentCirclePage--;
           updateCircles();
       }
   }
   
   function nextCirclePage() {
       if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
           currentCirclePage++;
           updateCircles();
       }
   }
   
   function changeLanguage() {
       language = document.getElementById("languageSelect").value;
       loadQuestion(currentQuestion);
   }
   
   function submitQuiz() {
       let confirmation = confirm("Are you sure you want to submit the test?");
       if (!confirmation) return;
   
       let attempted = 0, notAttempted = 0, score = 0;
       const results = [];
   
       questions.forEach(q => {
           if (q.attempted) {
               attempted++;
               if (q.selected === q.answer) score++;
           } else {
               notAttempted++;
           }
           results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
       });
   
       localStorage.setItem("attempted", attempted);
       localStorage.setItem("notAttempted", notAttempted);
       localStorage.setItem("score", score);
       localStorage.setItem("results", JSON.stringify(results));
   
       let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
       if (viewResult) {
           window.location.href = "/RTS/Public/Deshbord/category/test/submit-test.html";
       }
   }
   
   function startTimer() {
       const timerElement = document.getElementById("timer");
       timerInterval = setInterval(() => {
           if (timeLeft <= 0) {
               clearInterval(timerInterval);
               alert("Time's up! Submitting the quiz automatically.");
               submitQuiz();
           } else {
               timerElement.textContent = timeLeft;
               timeLeft--;
           }
       }, 1000);
   }
   
   window.onload = function () {
       startTimer();
       loadQuestion(currentQuestion);
   };
   