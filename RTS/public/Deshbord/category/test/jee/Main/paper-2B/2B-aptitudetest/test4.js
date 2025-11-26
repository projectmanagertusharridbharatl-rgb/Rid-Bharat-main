const questions = [
  {
    num: 1,
    question_en: "Next number in the series 2,4,8,16 is (variant 1262)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 1262) का उत्तर चुनें",
    options_en: ["24", "40", "32", "30"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 221)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 221) का उत्तर चुनें",
    options_en: ["120 km/h", "80 km/h", "40 km/h", "60 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "If SP=150 and CP=100, profit % is (variant 849)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 849) का उत्तर चुनें",
    options_en: ["25%", "40%", "50%", "60%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 490)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 490) का उत्तर चुनें",
    options_en: ["3 km", "5 km", "7 km", "4 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Average of 10,20,30,40 is (variant 538)",
    question_hi: "Average of 10,20,30,40 is (variant 538) का उत्तर चुनें",
    options_en: ["25", "35", "20", "30"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Next number in the series 2,4,8,16 is (variant 1422)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 1422) का उत्तर चुनें",
    options_en: ["30", "40", "24", "32"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "If SP=150 and CP=100, profit % is (variant 679)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 679) का उत्तर चुनें",
    options_en: ["50%", "40%", "60%", "25%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 1166)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 1166) का उत्तर चुनें",
    options_en: ["60 km/h", "80 km/h", "120 km/h", "40 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 600)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 600) का उत्तर चुनें",
    options_en: ["4 km", "7 km", "5 km", "3 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 676)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 676) का उत्तर चुनें",
    options_en: ["80 km/h", "60 km/h", "120 km/h", "40 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Average of 10,20,30,40 is (variant 193)",
    question_hi: "Average of 10,20,30,40 is (variant 193) का उत्तर चुनें",
    options_en: ["20", "35", "30", "25"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 741)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 741) का उत्तर चुनें",
    options_en: ["120 km/h", "80 km/h", "60 km/h", "40 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 750)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 750) का उत्तर चुनें",
    options_en: ["5 km", "7 km", "4 km", "3 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Next number in the series 2,4,8,16 is (variant 1207)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 1207) का उत्तर चुनें",
    options_en: ["30", "40", "24", "32"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 1105)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 1105) का उत्तर चुनें",
    options_en: ["7 km", "5 km", "4 km", "3 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Next number in the series 2,4,8,16 is (variant 1172)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 1172) का उत्तर चुनें",
    options_en: ["30", "32", "40", "24"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Average of 10,20,30,40 is (variant 958)",
    question_hi: "Average of 10,20,30,40 is (variant 958) का उत्तर चुनें",
    options_en: ["30", "25", "20", "35"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "If SP=150 and CP=100, profit % is (variant 69)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 69) का उत्तर चुनें",
    options_en: ["50%", "25%", "40%", "60%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "If SP=150 and CP=100, profit % is (variant 999)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 999) का उत्तर चुनें",
    options_en: ["40%", "25%", "50%", "60%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Next number in the series 2,4,8,16 is (variant 862)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 862) का उत्तर चुनें",
    options_en: ["30", "24", "40", "32"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 1010)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 1010) का उत्तर चुनें",
    options_en: ["4 km", "5 km", "7 km", "3 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Average of 10,20,30,40 is (variant 173)",
    question_hi: "Average of 10,20,30,40 is (variant 173) का उत्तर चुनें",
    options_en: ["25", "30", "35", "20"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 826)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 826) का उत्तर चुनें",
    options_en: ["60 km/h", "40 km/h", "120 km/h", "80 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "If SP=150 and CP=100, profit % is (variant 1434)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 1434) का उत्तर चुनें",
    options_en: ["60%", "25%", "50%", "40%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Next number in the series 2,4,8,16 is (variant 272)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 272) का उत्तर चुनें",
    options_en: ["24", "32", "30", "40"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "If SP=150 and CP=100, profit % is (variant 429)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 429) का उत्तर चुनें",
    options_en: ["25%", "50%", "60%", "40%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 1041)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 1041) का उत्तर चुनें",
    options_en: ["120 km/h", "60 km/h", "40 km/h", "80 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 206)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 206) का उत्तर चुनें",
    options_en: ["60 km/h", "40 km/h", "120 km/h", "80 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Average of 10,20,30,40 is (variant 1223)",
    question_hi: "Average of 10,20,30,40 is (variant 1223) का उत्तर चुनें",
    options_en: ["20", "25", "30", "35"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "If SP=150 and CP=100, profit % is (variant 199)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 199) का उत्तर चुनें",
    options_en: ["40%", "60%", "50%", "25%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "If SP=150 and CP=100, profit % is (variant 529)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 529) का उत्तर चुनें",
    options_en: ["50%", "40%", "60%", "25%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 1176)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 1176) का उत्तर चुनें",
    options_en: ["80 km/h", "120 km/h", "60 km/h", "40 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "If SP=150 and CP=100, profit % is (variant 309)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 309) का उत्तर चुनें",
    options_en: ["60%", "50%", "40%", "25%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Next number in the series 2,4,8,16 is (variant 692)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 692) का उत्तर चुनें",
    options_en: ["40", "24", "30", "32"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 1341)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 1341) का उत्तर चुनें",
    options_en: ["120 km/h", "40 km/h", "60 km/h", "80 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 466)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 466) का उत्तर चुनें",
    options_en: ["120 km/h", "80 km/h", "40 km/h", "60 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "If SP=150 and CP=100, profit % is (variant 1484)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 1484) का उत्तर चुनें",
    options_en: ["25%", "50%", "40%", "60%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 156)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 156) का उत्तर चुनें",
    options_en: ["60 km/h", "80 km/h", "120 km/h", "40 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Average of 10,20,30,40 is (variant 998)",
    question_hi: "Average of 10,20,30,40 is (variant 998) का उत्तर चुनें",
    options_en: ["25", "35", "20", "30"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Average of 10,20,30,40 is (variant 233)",
    question_hi: "Average of 10,20,30,40 is (variant 233) का उत्तर चुनें",
    options_en: ["30", "35", "25", "20"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 1406)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 1406) का उत्तर चुनें",
    options_en: ["60 km/h", "80 km/h", "40 km/h", "120 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "If SP=150 and CP=100, profit % is (variant 1469)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 1469) का उत्तर चुनें",
    options_en: ["40%", "60%", "50%", "25%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 180)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 180) का उत्तर चुनें",
    options_en: ["3 km", "4 km", "5 km", "7 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "If SP=150 and CP=100, profit % is (variant 859)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 859) का उत्तर चुनें",
    options_en: ["25%", "50%", "40%", "60%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Average of 10,20,30,40 is (variant 88)",
    question_hi: "Average of 10,20,30,40 is (variant 88) का उत्तर चुनें",
    options_en: ["35", "30", "25", "20"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 1350)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 1350) का उत्तर चुनें",
    options_en: ["3 km", "5 km", "4 km", "7 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "Average of 10,20,30,40 is (variant 638)",
    question_hi: "Average of 10,20,30,40 is (variant 638) का उत्तर चुनें",
    options_en: ["30", "35", "20", "25"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 961)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 961) का उत्तर चुनें",
    options_en: ["80 km/h", "60 km/h", "120 km/h", "40 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Next number in the series 2,4,8,16 is (variant 1282)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 1282) का उत्तर चुनें",
    options_en: ["30", "24", "40", "32"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 5)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 5) का उत्तर चुनें",
    options_en: ["4 km", "3 km", "7 km", "5 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
];

let currentQuestion = 0;
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
  const q = questions[index];
  document.getElementById("question").textContent = `${q.num}. ${
    language === "en" ? q.question_en : q.question_hi
  }`;
  document.getElementById("questionCounter").textContent = `Question ${
    index + 1
  } of ${questions.length}`;

  const optionsElement = document.getElementById("options");
  optionsElement.innerHTML = "";

  const options = language === "en" ? q.options_en : q.options_hi;

  options.forEach((option) => {
    const isSelected = q.selected === option;
    const optionDiv = document.createElement("div");
    optionDiv.className = "option-box";
    optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

    optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${
      isSelected ? "checked" : ""
    } style="margin-right:8px;">
            ${option}
        `;

    optionDiv.addEventListener("click", () => {
      markAttempted(index, option);
      loadQuestion(index);
    });

    optionsElement.appendChild(optionDiv);
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
  clearInterval(timerInterval);
  let attempted = 0,
    notAttempted = 0,
    score = 0;

  questions.forEach((q) => {
    if (q.attempted) {
      attempted++;
      if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
    } else notAttempted++;
  });

  alert(
    `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
  );
}

function startTimer() {
  const timerElement = document.getElementById("timer");
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
      submitQuiz();
    } else {
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;
      timerElement.textContent = `Time Left: ${hours
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
      timeLeft--;
    }
  }, 1000);
}

////////////////////////////////////////////////////////////////////////////////////////////

// submit
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

  questions.forEach((q) => {
    if (q.attempted) {
      attempted++;
      if (q.selected === q.answer) {
        score++;
      }
    } else {
      notAttempted++;
    }
    results.push({
      question: q.question,
      selected: q.selected || "Not Answered",
      correct: q.answer,
    });
  });

  localStorage.setItem("attempted", attempted);
  localStorage.setItem("notAttempted", notAttempted);
  localStorage.setItem("score", score);
  localStorage.setItem("results", JSON.stringify(results));

  // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
  let viewResult = confirm(
    "Test submitted successfully! Do you want to view your result?"
  );
  if (viewResult) {
    window.location.href =
      "/RTS/public/Deshbord/category/test/submit-test.html";
  }
}
window.onload = () => {
  loadQuestion(currentQuestion);
};

function updateNavigation() {
  const nav = document.getElementById("circleContainer");
  nav.innerHTML = "";
  questions.forEach((q, i) => {
    let color = "gray";
    if (i === currentQuestion) color = "blue";
    else if (q.attempted) color = "green";
    nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${
      i + 1
    }</div>`;
  });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
  const container = document.createElement("div");
  container.id = "camera-container";
  container.style.position = "fixed";
  container.style.top = "10px";
  container.style.left = "10px"; // ✅ Left side
  container.style.width = "130px";
  container.style.height = "130px";
  container.style.zIndex = "9999";
  container.style.borderRadius = "50%";
  container.style.overflow = "hidden";
  container.style.border = "3px solid red";
  container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  container.style.cursor = "grab";
  container.style.minWidth = "80px";
  container.style.minHeight = "80px";
  container.style.maxWidth = "250px";
  container.style.maxHeight = "250px";
  container.style.background = "#000";
  document.body.appendChild(container);

  const video = document.createElement("video");
  video.setAttribute("autoplay", true);
  video.setAttribute("playsinline", true);
  video.style.width = "100%";
  video.style.height = "100%";
  video.style.objectFit = "cover";
  container.appendChild(video);

  // ✅ Resize handle
  const resizeHandle = document.createElement("div");
  resizeHandle.style.position = "absolute";
  resizeHandle.style.bottom = "2px";
  resizeHandle.style.right = "2px";
  resizeHandle.style.width = "15px";
  resizeHandle.style.height = "15px";
  resizeHandle.style.background = "rgba(255,255,255,0.7)";
  resizeHandle.style.borderRadius = "4px";
  resizeHandle.style.cursor = "se-resize";
  container.appendChild(resizeHandle);

  // ✅ Drag logic
  let isDragging = false;
  let offsetX, offsetY;

  container.addEventListener("mousedown", (e) => {
    if (e.target === resizeHandle) return;
    isDragging = true;
    offsetX = e.clientX - container.offsetLeft;
    offsetY = e.clientY - container.offsetTop;
    container.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
    y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
    container.style.left = `${x}px`;
    container.style.top = `${y}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    container.style.cursor = "grab";
  });

  // ✅ Resize logic
  let isResizing = false;
  let startWidth, startHeight, startX, startY;

  resizeHandle.addEventListener("mousedown", (e) => {
    e.stopPropagation();
    isResizing = true;
    startWidth = container.offsetWidth;
    startHeight = container.offsetHeight;
    startX = e.clientX;
    startY = e.clientY;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isResizing) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const newSize = Math.max(
      80,
      Math.min(250, Math.max(startWidth + dx, startHeight + dy))
    );
    container.style.width = `${newSize}px`;
    container.style.height = `${newSize}px`;
  });

  document.addEventListener("mouseup", () => {
    isResizing = false;
  });

  // ✅ Camera stream
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      videoStream = stream;
      detectMovement(video);
    })
    .catch((err) => {
      console.error("Camera error:", err);
      alert("Camera not accessible!");
    });
}

function detectMovement(video) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 160;
  canvas.height = 160;
  let lastImageData = null;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    if (lastImageData) {
      let diff = 0;
      for (let i = 0; i < imageData.data.length; i += 4) {
        diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
      }

      if (diff > 1000000) {
        movementCount++;
        if (movementCount === 1) {
          alert("⚠️ Alert 1: Face is not move");
        } else if (movementCount === 2) {
          alert("⚠️ Alert 2: Head is not move");
        } else if (movementCount === 3) {
          alert("⚠️ Alert 3: Test series is restarting...");
          restartTest();
        }
      }
    }
    lastImageData = imageData;
  }, 2000);
}

function restartTest() {
  if (videoStream) {
    videoStream.getTracks().forEach((track) => track.stop());
  }
  const camContainer = document.getElementById("camera-container");
  if (camContainer) camContainer.remove();

  movementCount = 0;
  currentQuestion = 0;
  timeLeft = 180 * 60;

  questions.forEach((q) => {
    q.attempted = false;
    q.selected = null;
  });

  loadQuestion(currentQuestion);
  startTimer();
  startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
  loadQuestion(currentQuestion);
  startTimer();
  startCamera(); // ✅ Camera starts with test
};

///////////////////////////////////////
