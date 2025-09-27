


const questions = [
    
        {
            "num": 1,
            "question_en": "What is the LCM of 6 and 8?",
            "question_hi": "6 और 8 का लघुत्तम गुणांक (LCM) क्या है?",
            "options_en": ["24", "48", "12", "18"],
            "options_hi": ["24", "48", "12", "18"],
            "answer_en": "24",
            "answer_hi": "24",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "What is the HCF of 12 and 18?",
            "question_hi": "12 और 18 का महत्तम समापवर्तक (HCF) क्या है?",
            "options_en": ["6", "4", "3", "12"],
            "options_hi": ["6", "4", "3", "12"],
            "answer_en": "6",
            "answer_hi": "6",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "What is the value of 20% of 150?",
            "question_hi": "150 का 20% क्या है?",
            "options_en": ["30", "25", "35", "40"],
            "options_hi": ["30", "25", "35", "40"],
            "answer_en": "30",
            "answer_hi": "30",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "What is the perimeter of a circle with radius 7 cm?",
            "question_hi": "7 सेंटीमीटर त्रिज्या वाले वृत्त का परिमाप क्या होगा?",
            "options_en": ["44 cm", "50 cm", "40 cm", "38 cm"],
            "options_hi": ["44 cm", "50 cm", "40 cm", "38 cm"],
            "answer_en": "44 cm",
            "answer_hi": "44 cm",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "What is the sum of 345 and 123?",
            "question_hi": "345 और 123 का योग क्या है?",
            "options_en": ["468", "470", "450", "480"],
            "options_hi": ["468", "470", "450", "480"],
            "answer_en": "468",
            "answer_hi": "468",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "What is the area of a right-angled triangle with base 9 cm and height 12 cm?",
            "question_hi": "9 सेंटीमीटर आधार और 12 सेंटीमीटर ऊँचाई वाले समकोण त्रिभुज का क्षेत्रफल क्या होगा?",
            "options_en": ["54 cm²", "50 cm²", "60 cm²", "55 cm²"],
            "options_hi": ["54 cm²", "50 cm²", "60 cm²", "55 cm²"],
            "answer_en": "54 cm²",
            "answer_hi": "54 cm²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "What is the volume of a cone with radius 4 cm and height 9 cm?",
            "question_hi": "4 सेंटीमीटर त्रिज्या और 9 सेंटीमीटर ऊँचाई वाले शंकु का आयतन क्या होगा?",
            "options_en": ["36π cm³", "48π cm³", "72π cm³", "18π cm³"],
            "options_hi": ["36π cm³", "48π cm³", "72π cm³", "18π cm³"],
            "answer_en": "36π cm³",
            "answer_hi": "36π cm³",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "What is the square of 15?",
            "question_hi": "15 का वर्ग क्या है?",
            "options_en": ["225", "200", "250", "220"],
            "options_hi": ["225", "200", "250", "220"],
            "answer_en": "225",
            "answer_hi": "225",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "What is the difference between 980 and 275?",
            "question_hi": "980 और 275 के बीच अंतर क्या है?",
            "options_en": ["705", "710", "700", "720"],
            "options_hi": ["705", "710", "700", "720"],
            "answer_en": "705",
            "answer_hi": "705",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "What is the area of a trapezium with parallel sides 8 cm and 12 cm, and height 6 cm?",
            "question_hi": "8 सेंटीमीटर और 12 सेंटीमीटर समानांतर भुजाओं वाले और 6 सेंटीमीटर ऊँचाई वाले समांतर चतुर्भुज का क्षेत्रफल क्या होगा?",
            "options_en": ["60 cm²", "70 cm²", "80 cm²", "65 cm²"],
            "options_hi": ["60 cm²", "70 cm²", "80 cm²", "65 cm²"],
            "answer_en": "60 cm²",
            "answer_hi": "60 cm²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "What is the square root of 121?",
            "question_hi": "121 का वर्गमूल क्या है?",
            "options_en": ["11", "12", "13", "10"],
            "options_hi": ["11", "12", "13", "10"],
            "answer_en": "11",
            "answer_hi": "11",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "What is the perimeter of an equilateral triangle with side 8 cm?",
            "question_hi": "8 सेंटीमीटर लंबाई वाले समद्विबाहु त्रिभुज का परिमाप क्या होगा?",
            "options_en": ["24 cm", "18 cm", "30 cm", "32 cm"],
            "options_hi": ["24 cm", "18 cm", "30 cm", "32 cm"],
            "answer_en": "24 cm",
            "answer_hi": "24 cm",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
            "question_en": "What is the volume of a sphere with radius 5 cm?",
            "question_hi": "5 सेंटीमीटर त्रिज्या वाले गोले का आयतन क्या होगा?",
            "options_en": ["523.6 cm³", "530 cm³", "600 cm³", "400 cm³"],
            "options_hi": ["523.6 cm³", "530 cm³", "600 cm³", "400 cm³"],
            "answer_en": "523.6 cm³",
            "answer_hi": "523.6 cm³",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 14,
            "question_en": "What is the perimeter of a hexagon with side 5 cm?",
            "question_hi": "5 सेंटीमीटर लंबाई वाले षट्भुज का परिमाप क्या होगा?",
            "options_en": ["30 cm", "28 cm", "35 cm", "32 cm"],
            "options_hi": ["30 cm", "28 cm", "35 cm", "32 cm"],
            "answer_en": "30 cm",
            "answer_hi": "30 cm",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "What is the area of a rhombus with diagonals 8 cm and 6 cm?",
            "question_hi": "8 सेंटीमीटर और 6 सेंटीमीटर विकर्ण वाले समचतुर्भुज का क्षेत्रफल क्या होगा?",
            "options_en": ["24 cm²", "20 cm²", "18 cm²", "15 cm²"],
            "options_hi": ["24 cm²", "20 cm²", "18 cm²", "15 cm²"],
            "answer_en": "24 cm²",
            "answer_hi": "24 cm²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 16,
            "question_en": "What is the sum of the first 10 natural numbers?",
            "question_hi": "पहले 10 प्राकृतिक संख्याओं का योग क्या है?",
            "options_en": ["55", "60", "50", "45"],
            "options_hi": ["55", "60", "50", "45"],
            "answer_en": "55",
            "answer_hi": "55",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "What is the result of 2 raised to the power of 3?",
            "question_hi": "2 को 3 की शक्ति में बढ़ाने का परिणाम क्या होगा?",
            "options_en": ["8", "9", "6", "4"],
            "options_hi": ["8", "9", "6", "4"],
            "answer_en": "8",
            "answer_hi": "8",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "What is the product of 13 and 7?",
            "question_hi": "13 और 7 का गुणनफल क्या है?",
            "options_en": ["91", "99", "100", "89"],
            "options_hi": ["91", "99", "100", "89"],
            "answer_en": "91",
            "answer_hi": "91",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "What is the area of a circle with radius 10 cm?",
            "question_hi": "10 सेंटीमीटर त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
            "options_en": ["314 cm²", "310 cm²", "320 cm²", "300 cm²"],
            "options_hi": ["314 cm²", "310 cm²", "320 cm²", "300 cm²"],
            "answer_en": "314 cm²",
            "answer_hi": "314 cm²",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "What is the sum of 135 and 275?",
            "question_hi": "135 और 275 का योग क्या है?",
            "options_en": ["410", "420", "430", "440"],
            "options_hi": ["410", "420", "430", "440"],
            "answer_en": "410",
            "answer_hi": "410",
            "attempted": false,
            "selected": ""
        },
        
            {
                "num": 21,
                "question_en": "What is the value of 5 × 12?",
                "question_hi": "5 × 12 का मान क्या है?",
                "options_en": ["60", "65", "50", "55"],
                "options_hi": ["60", "65", "50", "55"],
                "answer_en": "60",
                "answer_hi": "60",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 22,
                "question_en": "What is the perimeter of a square with side length 6 cm?",
                "question_hi": "6 सेंटीमीटर लंबाई वाले वर्ग का परिमाप क्या होगा?",
                "options_en": ["24 cm", "18 cm", "20 cm", "30 cm"],
                "options_hi": ["24 cm", "18 cm", "20 cm", "30 cm"],
                "answer_en": "24 cm",
                "answer_hi": "24 cm",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 23,
                "question_en": "What is the volume of a cube with side 4 cm?",
                "question_hi": "4 सेंटीमीटर लंबाई वाले घन का आयतन क्या होगा?",
                "options_en": ["64 cm³", "48 cm³", "32 cm³", "36 cm³"],
                "options_hi": ["64 cm³", "48 cm³", "32 cm³", "36 cm³"],
                "answer_en": "64 cm³",
                "answer_hi": "64 cm³",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 24,
                "question_en": "What is the area of a circle with radius 14 cm?",
                "question_hi": "14 सेंटीमीटर त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
                "options_en": ["616 cm²", "622 cm²", "625 cm²", "600 cm²"],
                "options_hi": ["616 cm²", "622 cm²", "625 cm²", "600 cm²"],
                "answer_en": "616 cm²",
                "answer_hi": "616 cm²",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 25,
                "question_en": "What is the area of a rectangle with length 7 cm and width 5 cm?",
                "question_hi": "7 सेंटीमीटर लंबाई और 5 सेंटीमीटर चौड़ाई वाले आयत का क्षेत्रफल क्या होगा?",
                "options_en": ["35 cm²", "32 cm²", "40 cm²", "45 cm²"],
                "options_hi": ["35 cm²", "32 cm²", "40 cm²", "45 cm²"],
                "answer_en": "35 cm²",
                "answer_hi": "35 cm²",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 26,
                "question_en": "What is the value of 25 + 30?",
                "question_hi": "25 + 30 का योग क्या है?",
                "options_en": ["55", "60", "50", "45"],
                "options_hi": ["55", "60", "50", "45"],
                "answer_en": "55",
                "answer_hi": "55",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 27,
                "question_en": "What is the perimeter of a triangle with sides 8 cm, 6 cm, and 10 cm?",
                "question_hi": "8 सेंटीमीटर, 6 सेंटीमीटर और 10 सेंटीमीटर लंबाई वाली त्रिभुज का परिमाप क्या होगा?",
                "options_en": ["24 cm", "26 cm", "22 cm", "20 cm"],
                "options_hi": ["24 cm", "26 cm", "22 cm", "20 cm"],
                "answer_en": "24 cm",
                "answer_hi": "24 cm",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 28,
                "question_en": "What is the value of 16 ÷ 4?",
                "question_hi": "16 ÷ 4 का मान क्या है?",
                "options_en": ["4", "5", "6", "3"],
                "options_hi": ["4", "5", "6", "3"],
                "answer_en": "4",
                "answer_hi": "4",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 29,
                "question_en": "What is the value of 3 × 9?",
                "question_hi": "3 × 9 का मान क्या है?",
                "options_en": ["27", "28", "26", "25"],
                "options_hi": ["27", "28", "26", "25"],
                "answer_en": "27",
                "answer_hi": "27",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 30,
                "question_en": "What is the area of a triangle with base 10 cm and height 6 cm?",
                "question_hi": "10 सेंटीमीटर आधार और 6 सेंटीमीटर ऊँचाई वाले त्रिभुज का क्षेत्रफल क्या होगा?",
                "options_en": ["30 cm²", "25 cm²", "20 cm²", "15 cm²"],
                "options_hi": ["30 cm²", "25 cm²", "20 cm²", "15 cm²"],
                "answer_en": "30 cm²",
                "answer_hi": "30 cm²",
                "attempted": false,
                "selected": ""
            }
        
    
// Add more questions here...
];

let currentQuestion = 0;
let language = "en"; // Default English
let timeLeft = 300; // 5-minute timer
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
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
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
        timerElement.textContent = `Time Left: ${Math.floor(timeLeft / 60)}:${timeLeft % 60}`;
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