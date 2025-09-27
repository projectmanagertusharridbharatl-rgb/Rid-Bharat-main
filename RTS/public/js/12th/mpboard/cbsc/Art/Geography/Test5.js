const questions = [
   {
    num: 26,
    question_en: "Which city is the capital of Gujarat?",
    question_hi: "गुजरात की राजधानी कौन सी है?",
    options_en: ["Surat", "Ahmedabad", "Gandhinagar", "Vadodara"],
    options_hi: ["सूरत", "अहमदाबाद", "गांधीनगर", "वडोदरा"],
    answer_en: "Gandhinagar",
    answer_hi: "गांधीनगर",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which city is known as the 'City of Temples'?",
    question_hi: "कौन सा शहर 'मंदिरों का शहर' कहलाता है?",
    options_en: ["Varanasi", "Haridwar", "Puri", "Rishikesh"],
    options_hi: ["वाराणसी", "हरिद्वार", "पुरी", "ऋषिकेश"],
    answer_en: "Varanasi",
    answer_hi: "वाराणसी",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which city is the capital of Andhra Pradesh?",
    question_hi: "आंध्र प्रदेश की राजधानी कौन सी है?",
    options_en: ["Visakhapatnam", "Vijayawada", "Amaravati", "Tirupati"],
    options_hi: ["विशाखापत्तनम", "विजयवाड़ा", "अमरावती", "तिरुपति"],
    answer_en: "Amaravati",
    answer_hi: "अमरावती",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which city is called the 'City of Nawabs' besides Lucknow?",
    question_hi: "लखनऊ के अलावा कौन सा शहर 'नवाबों का शहर' कहलाता है?",
    options_en: ["Hyderabad", "Patna", "Kolkata", "Jaipur"],
    options_hi: ["हैदराबाद", "पटना", "कोलकाता", "जयपुर"],
    answer_en: "Hyderabad",
    answer_hi: "हैदराबाद",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which city is known as the 'Granite City'?",
    question_hi: "कौन सा शहर 'ग्रेनाइट सिटी' के नाम से जाना जाता है?",
    options_en: ["Bangalore", "Hyderabad", "Chennai", "Coimbatore"],
    options_hi: ["बैंगलोर", "हैदराबाद", "चेन्नई", "कोयंबटूर"],
    answer_en: "Coimbatore",
    answer_hi: "कोयंबटूर",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which city is the capital of Himachal Pradesh?",
    question_hi: "हिमाचल प्रदेश की राजधानी कौन सी है?",
    options_en: ["Shimla", "Manali", "Dharamshala", "Mandi"],
    options_hi: ["शिमला", "मनाली", "धर्मशाला", "मंडी"],
    answer_en: "Shimla",
    answer_hi: "शिमला",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which city is called the 'City of Lakes' other than Udaipur?",
    question_hi: "उदयपुर के अलावा कौन सा शहर 'झीलों का शहर' कहलाता है?",
    options_en: ["Bhopal", "Indore", "Jodhpur", "Pune"],
    options_hi: ["भोपाल", "इंदौर", "जोधपुर", "पुणे"],
    answer_en: "Bhopal",
    answer_hi: "भोपाल",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which city is the capital of Assam?",
    question_hi: "असम की राजधानी कौन सी है?",
    options_en: ["Guwahati", "Dispur", "Jorhat", "Silchar"],
    options_hi: ["गुवाहाटी", "दिसपुर", "जोरहाट", "सिलचर"],
    answer_en: "Dispur",
    answer_hi: "दिसपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which city is known as the 'City of Palaces'?",
    question_hi: "कौन सा शहर 'महलों का शहर' कहलाता है?",
    options_en: ["Bikaner", "Udaipur", "Jaipur", "Jodhpur"],
    options_hi: ["बीकानेर", "उदयपुर", "जयपुर", "जोधपुर"],
    answer_en: "Bikaner",
    answer_hi: "बीकानेर",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which city is the capital of Jharkhand?",
    question_hi: "झारखंड की राजधानी कौन सी है?",
    options_en: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
    options_hi: ["रांची", "जमशेदपुर", "धनबाद", "बोकारो"],
    answer_en: "Ranchi",
    answer_hi: "रांची",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which city is known as the 'City of Festivals'?",
    question_hi: "कौन सा शहर 'त्योहारों का शहर' कहलाता है?",
    options_en: ["Varanasi", "Mumbai", "Delhi", "Kolkata"],
    options_hi: ["वाराणसी", "मुंबई", "दिल्ली", "कोलकाता"],
    answer_en: "Varanasi",
    answer_hi: "वाराणसी",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which city is the capital of Odisha?",
    question_hi: "ओड़िशा की राजधानी कौन सी है?",
    options_en: ["Bhubaneswar", "Cuttack", "Puri", "Rourkela"],
    options_hi: ["भुवनेश्वर", "कटक", "पुरी", "राउरकेला"],
    answer_en: "Bhubaneswar",
    answer_hi: "भुवनेश्वर",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which city is the capital of Chhattisgarh?",
    question_hi: "छत्तीसगढ़ की राजधानी कौन सी है?",
    options_en: ["Raipur", "Bhilai", "Durg", "Bilaspur"],
    options_hi: ["रायपुर", "भिलाई", "दुर्ग", "बिलासपुर"],
    answer_en: "Raipur",
    answer_hi: "रायपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which city is called the 'City of Destiny'?",
    question_hi: "कौन सा शहर 'नियति का शहर' कहलाता है?",
    options_en: ["Visakhapatnam", "Hyderabad", "Bangalore", "Chennai"],
    options_hi: ["विशाखापत्तनम", "हैदराबाद", "बैंगलोर", "चेन्नई"],
    answer_en: "Visakhapatnam",
    answer_hi: "विशाखापत्तनम",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which city is the capital of Sikkim?",
    question_hi: "सिक्किम की राजधानी कौन सी है?",
    options_en: ["Gangtok", "Namchi", "Pelling", "Mangan"],
    options_hi: ["गंगटोक", "नामची", "पेलिंग", "मांगन"],
    answer_en: "Gangtok",
    answer_hi: "गंगटोक",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which city is the capital of Tripura?",
    question_hi: "त्रिपुरा की राजधानी कौन सी है?",
    options_en: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar"],
    options_hi: ["अगर्तला", "उदयपुर", "धर्मनगर", "कैलाशहार"],
    answer_en: "Agartala",
    answer_hi: "अगर्तला",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which city is known as the 'City of Joy'?",
    question_hi: "कौन सा शहर 'खुशी का शहर' कहलाता है?",
    options_en: ["Kolkata", "Mumbai", "Chennai", "Hyderabad"],
    options_hi: ["कोलकाता", "मुंबई", "चेन्नई", "हैदराबाद"],
    answer_en: "Kolkata",
    answer_hi: "कोलकाता",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which city is the capital of Nagaland?",
    question_hi: "नागालैंड की राजधानी कौन सी है?",
    options_en: ["Kohima", "Dimapur", "Mokokchung", "Wokha"],
    options_hi: ["कोहिमा", "डिमापुर", "मोकोकचुंग", "वोखा"],
    answer_en: "Kohima",
    answer_hi: "कोहिमा",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which city is the capital of Punjab?",
    question_hi: "पंजाब की राजधानी कौन सी है?",
    options_en: ["Chandigarh", "Amritsar", "Ludhiana", "Jalandhar"],
    options_hi: ["चंडीगढ़", "अमृतसर", "लुधियाना", "जालंधर"],
    answer_en: "Chandigarh",
    answer_hi: "चंडीगढ़",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which city is the capital of Rajasthan?",
    question_hi: "राजस्थान की राजधानी कौन सी है?",
    options_en: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"],
    options_hi: ["जयपुर", "जोधपुर", "उदयपुर", "अजमेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which city is the capital of Tamil Nadu?",
    question_hi: "तमिलनाडु की राजधानी कौन सी है?",
    options_en: ["Chennai", "Coimbatore", "Madurai", "Salem"],
    options_hi: ["चेन्नई", "कोयंबटूर", "मदुरै", "सेलम"],
    answer_en: "Chennai",
    answer_hi: "चेन्नई",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which city is the capital of Telangana?",
    question_hi: "तेलंगाना की राजधानी कौन सी है?",
    options_en: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    options_hi: ["हैदराबाद", "वारंगल", "निज़ामाबाद", "करीमनगर"],
    answer_en: "Hyderabad",
    answer_hi: "हैदराबाद",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which city is the capital of Uttarakhand?",
    question_hi: "उत्तराखंड की राजधानी कौन सी है?",
    options_en: ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
    options_hi: ["देहरादून", "हरिद्वार", "नैनीताल", "ऋषिकेश"],
    answer_en: "Dehradun",
    answer_hi: "देहरादून",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which city is the capital of West Bengal?",
    question_hi: "पश्चिम बंगाल की राजधानी कौन सी है?",
    options_en: ["Kolkata", "Darjeeling", "Siliguri", "Howrah"],
    options_hi: ["कोलकाता", "दार्जिलिंग", "सिलीगुड़ी", "हावड़ा"],
    answer_en: "Kolkata",
    answer_hi: "कोलकाता",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which city is known as the 'Pink City'?",
    question_hi: "कौन सा शहर 'गुलाबी शहर' कहलाता है?",
    options_en: ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
    options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "अजमेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  
    // Continue adding more questions up to 30
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
      const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
      if (q.attempted) {
          attempted++;
          if (q.selected === correctAnswer) score++;
      } else {
          notAttempted++;
      }
      results.push({ 
          question: language === "en" ? q.question_en : q.question_hi,
          selected: q.selected || "Not Answered", 
          correct: correctAnswer 
      });
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
      timerElement.textContent = timeLeft;
      timeLeft--;
    }
  }, 1000);
}

window.onload = function () {
  startTimer();
  loadQuestion(currentQuestion);
};