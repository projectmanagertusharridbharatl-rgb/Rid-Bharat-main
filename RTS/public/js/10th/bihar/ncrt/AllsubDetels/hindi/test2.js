
const questions = [
    {
        "num": 1,
        "question_en": "Which of the following words starting with 'स्नो' is correct?",
        "question_hi": "'स्नो' से शुरू होने वाला कौन-सा शब्द सही है?",
        "options_en": ["स्नोव", "स्नोह", "स्नोप", "स्नोक"],
        "options_hi": ["स्नोव", "स्नोह", "स्नोप", "स्नोक"],
        "answer_en": "स्नोह",
        "answer_hi": "स्नोह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the meaning of 'स्नोबॉल' in Hindi?",
        "question_hi": "'स्नोबॉल' का हिंदी अर्थ क्या है?",
        "options_en": ["बर्फ का गोला", "फूलों की माला", "पत्थर का टुकड़ा", "रेत का घर"],
        "options_hi": ["बर्फ का गोला", "फूलों की माला", "पत्थर का टुकड़ा", "रेत का घर"],
        "answer_en": "बर्फ का गोला",
        "answer_hi": "बर्फ का गोला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which word starting with 'स्नो' means 'affection' in English?",
        "question_hi": "'स्नो' से शुरू होने वाला कौन-सा शब्द अंग्रेजी में 'affection' का अर्थ देता है?",
        "options_en": ["स्नोत", "स्नोह", "स्नोव", "स्नोप"],
        "options_hi": ["स्नोत", "स्नोह", "स्नोव", "स्नोप"],
        "answer_en": "स्नोह",
        "answer_hi": "स्नोह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the correct spelling of the Hindi word meaning 'snowfall' starting with 'स्नो'?",
        "question_hi": "'बर्फबारी' अर्थ देने वाले 'स्नो' से शुरू होने वाले शब्द की सही वर्तनी क्या है?",
        "options_en": ["स्नोफॉल", "स्नोपात", "स्नोवर्षा", "स्नोहवृष्टि"],
        "options_hi": ["स्नोफॉल", "स्नोपात", "स्नोवर्षा", "स्नोहवृष्टि"],
        "answer_en": "स्नोपात",
        "answer_hi": "स्नोपात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which 'स्नो' starting word is used in Hindi literature for 'melting'?",
        "question_hi": "हिंदी साहित्य में 'पिघलना' के लिए किस 'स्नो' से शुरू होने वाले शब्द का प्रयोग होता है?",
        "options_en": ["स्नोद", "स्नोहित", "स्नोत", "स्नोन"],
        "options_hi": ["स्नोद", "स्नोहित", "स्नोत", "स्नोन"],
        "answer_en": "स्नोद",
        "answer_hi": "स्नोद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the correct compound word starting with 'स्नो' meaning 'snow-capped'?",
        "question_hi": "'बर्फ से ढका हुआ' अर्थ देने वाला सही 'स्नो' से शुरू होने वाला समास शब्द कौन-सा है?",
        "options_en": ["स्नोमुकुट", "स्नोशीर्ष", "स्नोच्छादित", "स्नोआवृत"],
        "options_hi": ["स्नोमुकुट", "स्नोशीर्ष", "स्नोच्छादित", "स्नोआवृत"],
        "answer_en": "स्नोच्छादित",
        "answer_hi": "स्नोच्छादित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which 'स्नो' word appears in the Hindi translation of Robert Frost's poem 'Stopping by Woods on a Snowy Evening'?",
        "question_hi": "रॉबर्ट फ्रॉस्ट की कविता 'स्टॉपिंग बाई वुड्स ऑन ए स्नोई इवनिंग' के हिंदी अनुवाद में कौन-सा 'स्नो' शब्द आता है?",
        "options_en": ["स्नोह", "स्नोपात", "स्नोवन", "स्नोघन"],
        "options_hi": ["स्नोह", "स्नोपात", "स्नोवन", "स्नोघन"],
        "answer_en": "स्नोघन",
        "answer_hi": "स्नोघन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the correct Hindi word starting with 'स्नो' for 'snowflake'?",
        "question_hi": "'हिमकण' के लिए 'स्नो' से शुरू होने वाला सही हिंदी शब्द कौन-सा है?",
        "options_en": ["स्नोकण", "स्नोतुका", "स्नोहण", "स्नोशकल"],
        "options_hi": ["स्नोकण", "स्नोतुका", "स्नोहण", "स्नोशकल"],
        "answer_en": "स्नोकण",
        "answer_hi": "स्नोकण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which 'स्नो' word is used in Ayurveda for a cold-related condition?",
        "question_hi": "आयुर्वेद में ठंड से संबंधित स्थिति के लिए किस 'स्नो' शब्द का प्रयोग होता है?",
        "options_en": ["स्नोहिका", "स्नोवात", "स्नोपित्त", "स्नोरोग"],
        "options_hi": ["स्नोहिका", "स्नोवात", "स्नोपित्त", "स्नोरोग"],
        "answer_en": "स्नोपित्त",
        "answer_hi": "स्नोपित्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the literary meaning of 'स्नोहिल' in Hindi?",
        "question_hi": "हिंदी में 'स्नोहिल' का साहित्यिक अर्थ क्या है?",
        "options_en": ["Snowy", "Affectionate", "Melting", "Cold-hearted"],
        "options_hi": ["बर्फीला", "स्नेही", "पिघलता हुआ", "ठंडे दिल वाला"],
        "answer_en": "Affectionate",
        "answer_hi": "स्नेही",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which 'स्नो' word means 'snow-white' in Hindi literature?",
        "question_hi": "हिंदी साहित्य में 'बर्फ-सा सफेद' के लिए कौन-सा 'स्नो' शब्द प्रयुक्त होता है?",
        "options_en": ["स्नोश्वेत", "स्नोहिम", "स्नोदधि", "स्नोज्योत्स्ना"],
        "options_hi": ["स्नोश्वेत", "स्नोहिम", "स्नोदधि", "स्नोज्योत्स्ना"],
        "answer_en": "स्नोश्वेत",
        "answer_hi": "स्नोश्वेत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "In Hindi grammar, which 'स्नो' word is an example of a तत्सम word?",
        "question_hi": "हिंदी व्याकरण में कौन-सा 'स्नो' शब्द तत्सम शब्द का उदाहरण है?",
        "options_en": ["स्नोह", "स्नेह", "स्नोप", "स्नोत"],
        "options_hi": ["स्नोह", "स्नेह", "स्नोप", "स्नोत"],
        "answer_en": "स्नेह",
        "answer_hi": "स्नेह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which 'स्नो' starting word appears in Mahadevi Verma's poems?",
        "question_hi": "महादेवी वर्मा की कविताओं में कौन-सा 'स्नो' से शुरू होने वाला शब्द मिलता है?",
        "options_en": ["स्नोनद", "स्नोहिल", "स्नोघन", "स्नोदया"],
        "options_hi": ["स्नोनद", "स्नोहिल", "स्नोघन", "स्नोदया"],
        "answer_en": "स्नोहिल",
        "answer_hi": "स्नोहिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the correct sandhi vicched of 'स्नोहित'?",
        "question_hi": "'स्नोहित' का सही संधि विच्छेद क्या है?",
        "options_en": ["स्नो + हित", "स्नः + हित", "स्नौ + हित", "स्नो + ईहित"],
        "options_hi": ["स्नो + हित", "स्नः + हित", "स्नौ + हित", "स्नो + ईहित"],
        "answer_en": "स्नो + हित",
        "answer_hi": "स्नो + हित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which 'स्नो' word is used in Hindi for 'glacier'?",
        "question_hi": "हिंदी में 'ग्लेशियर' के लिए कौन-सा 'स्नो' शब्द प्रयुक्त होता है?",
        "options_en": ["स्नोनदी", "स्नोहिमनद", "स्नोशिला", "स्नोप्रपात"],
        "options_hi": ["स्नोनदी", "स्नोहिमनद", "स्नोशिला", "स्नोप्रपात"],
        "answer_en": "स्नोहिमनद",
        "answer_hi": "स्नोहिमनद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "In Hindi literature, 'स्नोद्गम' refers to:",
        "question_hi": "हिंदी साहित्य में 'स्नोद्गम' शब्द किसे संदर्भित करता है?",
        "options_en": ["Snow origin", "Snow melting", "Snow water source", "Snow mountain"],
        "options_hi": ["बर्फ का उद्गम", "बर्फ का पिघलना", "बर्फीला जल स्रोत", "बर्फीला पर्वत"],
        "answer_en": "Snow water source",
        "answer_hi": "बर्फीला जल स्रोत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which 'स्नो' word is a synonym for 'affection' in Hindi poetry?",
        "question_hi": "हिंदी काव्य में 'स्नेह' का पर्यायवाची कौन-सा 'स्नो' शब्द है?",
        "options_en": ["स्नोह", "स्नोप", "स्नोत", "स्नोद"],
        "options_hi": ["स्नोह", "स्नोप", "स्नोत", "स्नोद"],
        "answer_en": "स्नोह",
        "answer_hi": "स्नोह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the correct compound of 'स्नो' and 'वृष्टि'?",
        "question_hi": "'स्नो' और 'वृष्टि' का सही समास क्या होगा?",
        "options_en": ["स्नोवृष्टि", "स्नोहवृष्टि", "स्नोपवृष्टि", "स्नोदवृष्टि"],
        "options_hi": ["स्नोवृष्टि", "स्नोहवृष्टि", "स्नोपवृष्टि", "स्नोदवृष्टि"],
        "answer_en": "स्नोवृष्टि",
        "answer_hi": "स्नोवृष्टि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which 'स्नो' word appears in the Hindi translation of Shakespeare's works?",
        "question_hi": "शेक्सपियर के कार्यों के हिंदी अनुवाद में कौन-सा 'स्नो' शब्द प्रयुक्त हुआ है?",
        "options_en": ["स्नोघन", "स्नोदय", "स्नोहार्द्र", "स्नोकिरीट"],
        "options_hi": ["स्नोघन", "स्नोदय", "स्नोहार्द्र", "स्नोकिरीट"],
        "answer_en": "स्नोघन",
        "answer_hi": "स्नोघन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the feminine form of 'स्नोहित'?",
        "question_hi": "'स्नोहित' का स्त्रीलिंग रूप क्या है?",
        "options_en": ["स्नोहिता", "स्नोहिनी", "स्नोहिती", "स्नोहिला"],
        "options_hi": ["स्नोहिता", "स्नोहिनी", "स्नोहिती", "स्नोहिला"],
        "answer_en": "स्नोहिता",
        "answer_hi": "स्नोहिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which 'स्नो' word is used in Hindi for 'snowstorm'?",
        "question_hi": "हिंदी में 'हिमतूफान' के लिए कौन-सा 'स्नो' शब्द प्रयुक्त होता है?",
        "options_en": ["स्नोतूफान", "स्नोझंझा", "स्नोप्रभंजन", "स्नोआंधी"],
        "options_hi": ["स्नोतूफान", "स्नोझंझा", "स्नोप्रभंजन", "स्नोआंधी"],
        "answer_en": "स्नोझंझा",
        "answer_hi": "स्नोझंझा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "In Hindi literature, 'स्नोद्गार' refers to:",
        "question_hi": "हिंदी साहित्य में 'स्नोद्गार' शब्द किसे संदर्भित करता है?",
        "options_en": ["Snowfall", "Snow water stream", "Snow melting", "Snow covered peak"],
        "options_hi": ["हिमपात", "हिम जल धारा", "हिम का पिघलना", "हिमाच्छादित शिखर"],
        "answer_en": "Snow water stream",
        "answer_hi": "हिम जल धारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which 'स्नो' word appears in Sumitranandan Pant's poetry?",
        "question_hi": "सुमित्रानंदन पंत की कविताओं में कौन-सा 'स्नो' शब्द मिलता है?",
        "options_en": ["स्नोहिल", "स्नोकिरण", "स्नोदीप्ति", "स्नोप्रभा"],
        "options_hi": ["स्नोहिल", "स्नोकिरण", "स्नोदीप्ति", "स्नोप्रभा"],
        "answer_en": "स्नोप्रभा",
        "answer_hi": "स्नोप्रभा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the correct sandhi of 'स्नो' and 'उदय'?",
        "question_hi": "'स्नो' और 'उदय' की सही संधि क्या होगी?",
        "options_en": ["स्नोदय", "स्नौदय", "स्नोउदय", "स्नावुदय"],
        "options_hi": ["स्नोदय", "स्नौदय", "स्नोउदय", "स्नावुदय"],
        "answer_en": "स्नोदय",
        "answer_hi": "स्नोदय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which 'स्नो' word means 'snow-clad mountains' in Hindi literature?",
        "question_hi": "हिंदी साहित्य में 'हिमाच्छादित पर्वतों' के लिए कौन-सा 'स्नो' शब्द प्रयुक्त होता है?",
        "options_en": ["स्नोशैल", "स्नोगिरि", "स्नोभूधर", "स्नोमेरु"],
        "options_hi": ["स्नोशैल", "स्नोगिरि", "स्नोभूधर", "स्नोमेरु"],
        "answer_en": "स्नोगिरि",
        "answer_hi": "स्नोगिरि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the correct विग्रह of 'स्नोहिम'?",
        "question_hi": "'स्नोहिम' का सही विग्रह क्या है?",
        "options_en": ["स्नो + हिम", "स्नः + हिम", "स्नौ + हिम", "स्नो + ईहिम"],
        "options_hi": ["स्नो + हिम", "स्नः + हिम", "स्नौ + हिम", "स्नो + ईहिम"],
        "answer_en": "स्नो + हिम",
        "answer_hi": "स्नो + हिम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which 'स्नो' word is used for 'snow leopard' in Hindi?",
        "question_hi": "हिंदी में 'हिम तेंदुआ' के लिए कौन-सा 'स्नो' शब्द प्रयुक्त होता है?",
        "options_en": ["स्नोचित्ता", "स्नोव्याघ्र", "स्नोपुंडरीक", "स्नोशार्दूल"],
        "options_hi": ["स्नोचित्ता", "स्नोव्याघ्र", "स्नोपुंडरीक", "स्नोशार्दूल"],
        "answer_en": "स्नोशार्दूल",
        "answer_hi": "स्नोशार्दूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "In Hindi grammar, which 'स्नो' word is an example of कृदंत?",
        "question_hi": "हिंदी व्याकरण में कौन-सा 'स्नो' शब्द कृदंत का उदाहरण है?",
        "options_en": ["स्नोहित", "स्नोद", "स्नोह", "स्नोत"],
        "options_hi": ["स्नोहित", "स्नोद", "स्नोह", "स्नोत"],
        "answer_en": "स्नोहित",
        "answer_hi": "स्नोहित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which 'स्नो' word appears in the Hindi translation of Wordsworth's poetry?",
        "question_hi": "वर्ड्सवर्थ की कविताओं के हिंदी अनुवाद में कौन-सा 'स्नो' शब्द मिलता है?",
        "options_en": ["स्नोनद", "स्नोहिम", "स्नोद्यान", "स्नोकानन"],
        "options_hi": ["स्नोनद", "स्नोहिम", "स्नोद्यान", "स्नोकानन"],
        "answer_en": "स्नोहिम",
        "answer_hi": "स्नोहिम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the correct तद्भव form of 'स्नेह'?",
        "question_hi": "'स्नेह' का सही तद्भव रूप क्या है?",
        "options_en": ["सिनेह", "नेह", "स्नोह", "स्निह"],
        "options_hi": ["सिनेह", "नेह", "स्नोह", "स्निह"],
        "answer_en": "नेह",
        "answer_hi": "नेह",
        "attempted": false,
        "selected": ""
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