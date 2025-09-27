
const questions = [
    {
        "num": 1,
        "question_en": "What is the meaning of 'محبت'?",
        "question_hi": "'محبت' کا کیا مطلب ہے؟",
        "options_en": ["Love", "Hate", "Peace", "War"],
        "options_hi": ["محبت", "نفرت", "امن", "جنگ"],
        "answer_en": "Love",
        "answer_hi": "محبت",
        "subject": "Urdu"
      },
      {
        "num": 2,
        "question_en": "What is the plural of 'کتاب'?",
        "question_hi": "'کتاب' کا جمع کیا ہے؟",
        "options_en": ["کتابیں", "کتابوں", "کتابے", "کتابہ"],
        "options_hi": ["کتابیں", "کتابوں", "کتابے", "کتابہ"],
        "answer_en": "کتابیں",
        "answer_hi": "کتابیں",
        "subject": "Urdu"
      },
      {
        "num": 3,
        "question_en": "What is the opposite of 'خوش'?",
        "question_hi": "'خوش' کا متضاد کیا ہے؟",
        "options_en": ["Sad", "Angry", "Tired", "Bored"],
        "options_hi": ["اداس", "غصہ", "تھکا", "بور"],
        "answer_en": "Sad",
        "answer_hi": "اداس",
        "subject": "Urdu"
      },
      {
        "num": 4,
        "question_en": "Which of these means 'Sun' in Urdu?",
        "question_hi": "ان میں سے 'سورج' کے لیے کون سا لفظ ہے؟",
        "options_en": ["سورج", "چاند", "ستارہ", "آگ"],
        "options_hi": ["سورج", "چاند", "ستارہ", "آگ"],
        "answer_en": "سورج",
        "answer_hi": "سورج",
        "subject": "Urdu"
      },
      {
        "num": 5,
        "question_en": "What is the Urdu word for 'Friend'?",
        "question_hi": "'دوست' کے لیے اردو میں کیا لفظ ہے؟",
        "options_en": ["دوست", "یارو", "سہارا", "ساتھی"],
        "options_hi": ["دوست", "یارو", "سہارا", "ساتھی"],
        "answer_en": "دوست",
        "answer_hi": "دوست",
        "subject": "Urdu"
      },
      {
        "num": 6,
        "question_en": "What is the meaning of 'حالات'?",
        "question_hi": "'حالات' کا کیا مطلب ہے؟",
        "options_en": ["Conditions", "People", "Places", "Times"],
        "options_hi": ["حالات", "لوگ", "جگہیں", "وقت"],
        "answer_en": "Conditions",
        "answer_hi": "حالات",
        "subject": "Urdu"
      },
      {
        "num": 7,
        "question_en": "What is the opposite of 'سچ'?",
        "question_hi": "'سچ' کا متضاد کیا ہے؟",
        "options_en": ["Truth", "Lie", "Secret", "Fact"],
        "options_hi": ["سچ", "جھوٹ", "راز", "حقیقت"],
        "answer_en": "Lie",
        "answer_hi": "جھوٹ",
        "subject": "Urdu"
      },
      {
        "num": 8,
        "question_en": "Which of these means 'Flower' in Urdu?",
        "question_hi": "ان میں سے 'پھول' کے لیے کون سا لفظ ہے؟",
        "options_en": ["پھول", "پتہ", "شاخ", "درخت"],
        "options_hi": ["پھول", "پتہ", "شاخ", "درخت"],
        "answer_en": "پھول",
        "answer_hi": "پھول",
        "subject": "Urdu"
      },
      {
        "num": 9,
        "question_en": "What is the plural of 'انسان'?",
        "question_hi": "'انسان' کا جمع کیا ہے؟",
        "options_en": ["انسانوں", "انسانات", "آدمی", "مرد"],
        "options_hi": ["انسانوں", "انسانات", "آدمی", "مرد"],
        "answer_en": "انسانوں",
        "answer_hi": "انسانوں",
        "subject": "Urdu"
      },
      {
        "num": 10,
        "question_en": "What is the meaning of 'خواب'?",
        "question_hi": "'خواب' کا کیا مطلب ہے؟",
        "options_en": ["Dream", "Wish", "Memory", "Story"],
        "options_hi": ["خواب", "خواہش", "یاد", "کہانی"],
        "answer_en": "Dream",
        "answer_hi": "خواب",
        "subject": "Urdu"
      },
      {
        "num": 11,
        "question_en": "Which of these means 'Light' in Urdu?",
        "question_hi": "ان میں سے 'روشنی' کے لیے کون سا لفظ ہے؟",
        "options_en": ["روشنی", "اندھیرا", "دھند", "شمع"],
        "options_hi": ["روشنی", "اندھیرا", "دھند", "شمع"],
        "answer_en": "روشنی",
        "answer_hi": "روشنی",
        "subject": "Urdu"
      },
      {
        "num": 12,
        "question_en": "What is the opposite of 'خوف'?",
        "question_hi": "'خوف' کا متضاد کیا ہے؟",
        "options_en": ["Fear", "Bravery", "Happiness", "Peace"],
        "options_hi": ["خوف", "دلیری", "خوشی", "امن"],
        "answer_en": "Bravery",
        "answer_hi": "دلیری",
        "subject": "Urdu"
      },
      {
        "num": 13,
        "question_en": "What is the Urdu word for 'Book'?",
        "question_hi": "'کتاب' کے لیے اردو میں کیا لفظ ہے؟",
        "options_en": ["کتاب", "دفتر", "پرچہ", "نوٹس"],
        "options_hi": ["کتاب", "دفتر", "پرچہ", "نوٹس"],
        "answer_en": "کتاب",
        "answer_hi": "کتاب",
        "subject": "Urdu"
      },
      {
        "num": 14,
        "question_en": "What is the meaning of 'زندگی'?",
        "question_hi": "'زندگی' کا کیا مطلب ہے؟",
        "options_en": ["Life", "Death", "Time", "Love"],
        "options_hi": ["زندگی", "موت", "وقت", "محبت"],
        "answer_en": "Life",
        "answer_hi": "زندگی",
        "subject": "Urdu"
      },
      {
        "num": 15,
        "question_en": "What is the opposite of 'دشمن'?",
        "question_hi": "'دشمن' کا متضاد کیا ہے؟",
        "options_en": ["Friend", "Enemy", "Warrior", "Rival"],
        "options_hi": ["دوست", "دشمن", "سپاہی", "حریف"],
        "answer_en": "Friend",
        "answer_hi": "دوست",
        "subject": "Urdu"
      },
      {
        "num": 16,
        "question_en": "Which of these means 'Ocean' in Urdu?",
        "question_hi": "ان میں سے 'سمندر' کے لیے کون سا لفظ ہے؟",
        "options_en": ["سمندر", "دریا", "جھیل", "نالہ"],
        "options_hi": ["سمندر", "دریا", "جھیل", "نالہ"],
        "answer_en": "سمندر",
        "answer_hi": "سمندر",
        "subject": "Urdu"
      },
      {
        "num": 17,
        "question_en": "What is the plural of 'گلاب'?",
        "question_hi": "'گلاب' کا جمع کیا ہے؟",
        "options_en": ["گلابوں", "گلابات", "گلابیں", "گلاب"],
        "options_hi": ["گلابوں", "گلابات", "گلابیں", "گلاب"],
        "answer_en": "گلابوں",
        "answer_hi": "گلابوں",
        "subject": "Urdu"
      },
      {
        "num": 18,
        "question_en": "What is the meaning of 'دور'?",
        "question_hi": "'دور' کا کیا مطلب ہے؟",
        "options_en": ["Near", "Far", "High", "Low"],
        "options_hi": ["قریب", "دور", "اوپر", "نیچے"],
        "answer_en": "Far",
        "answer_hi": "دور",
        "subject": "Urdu"
      },
      {
        "num": 19,
        "question_en": "What is the opposite of 'سکون'?",
        "question_hi": "'سکون' کا متضاد کیا ہے؟",
        "options_en": ["Rest", "Peace", "Noise", "Calm"],
        "options_hi": ["آرام", "امن", "شور", "خاموشی"],
        "answer_en": "Noise",
        "answer_hi": "شور",
        "subject": "Urdu"
      },
      {
        "num": 20,
        "question_en": "What is the Urdu word for 'Child'?",
        "question_hi": "'بچہ' کے لیے اردو میں کیا لفظ ہے؟",
        "options_en": ["بچہ", "لڑکا", "لڑکی", "نوعمر"],
        "options_hi": ["بچہ", "لڑکا", "لڑکی", "نوعمر"],
        "answer_en": "بچہ",
        "answer_hi": "بچہ",
        "subject": "Urdu"
      },
      {
        "num": 21,
        "question_en": "What is the opposite of 'محنت'?",
        "question_hi": "'محنت' کا متضاد کیا ہے؟",
        "options_en": ["Hardwork", "Laziness", "Dedication", "Effort"],
        "options_hi": ["محنت", "سستی", "عزم", "کوشش"],
        "answer_en": "Laziness",
        "answer_hi": "سستی",
        "subject": "Urdu"
      },
      
  
    // Add more questions here...
    ];
    
    let currentQuestion = 0;
    let language = "en"; // Default English
    let timeLeft = 10800; // 5-minute timer
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
    
    updateNavigation();
    }
    
    function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
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
    
    function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
    }
    
    function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;
    
    clearInterval(timerInterval);
    
    let attempted = 0, notAttempted = 0, score = 0;
    const results = [];
    
    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
    });
    
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));
    
    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/Deshbord/category/test/submit-test.html";
    }
    }
    
    function startTimer() {
    const timerElement = document.getElementById("timer");
    timeLeft = 180 * 60; // Convert 180 minutes to seconds (180 × 60)
    
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting the quiz automatically.");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            
            // Format as HH:MM:SS with leading zeros
            timerElement.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            timeLeft--;
        }
    }, 1000);
    }
    function updateNavigation() {
    const navElement = document.getElementById("circleContainer");
    navElement.innerHTML = "";
    
    questions.forEach((q, index) => {
        let color = "gray"; // Default not visited
        if (q.attempted) {
            color = "green"; // Answered
        }
        if (q.selected === "") {
            color = "gray"; // Not answered
        }
        if (index === currentQuestion) {
            color = "blue"; // Current question
        }
        navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
    });
    }
    
    window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    };