const questions = [
  {
    num: 1,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 125)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 125) का उत्तर चुनें",
    options_en: ["3 km", "4 km", "7 km", "5 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Average of 10,20,30,40 is (variant 943)",
    question_hi: "Average of 10,20,30,40 is (variant 943) का उत्तर चुनें",
    options_en: ["35", "20", "30", "25"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 895)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 895) का उत्तर चुनें",
    options_en: ["4 km", "3 km", "7 km", "5 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 535)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 535) का उत्तर चुनें",
    options_en: ["7 km", "4 km", "3 km", "5 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "If SP=150 and CP=100, profit % is (variant 994)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 994) का उत्तर चुनें",
    options_en: ["25%", "60%", "40%", "50%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 795)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 795) का उत्तर चुनें",
    options_en: ["4 km", "3 km", "7 km", "5 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Average of 10,20,30,40 is (variant 683)",
    question_hi: "Average of 10,20,30,40 is (variant 683) का उत्तर चुनें",
    options_en: ["35", "30", "25", "20"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Next number in the series 2,4,8,16 is (variant 232)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 232) का उत्तर चुनें",
    options_en: ["30", "40", "32", "24"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Next number in the series 2,4,8,16 is (variant 1477)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 1477) का उत्तर चुनें",
    options_en: ["24", "32", "30", "40"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 50)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 50) का उत्तर चुनें",
    options_en: ["3 km", "4 km", "5 km", "7 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Average of 10,20,30,40 is (variant 428)",
    question_hi: "Average of 10,20,30,40 is (variant 428) का उत्तर चुनें",
    options_en: ["35", "25", "30", "20"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "If SP=150 and CP=100, profit % is (variant 214)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 214) का उत्तर चुनें",
    options_en: ["25%", "50%", "60%", "40%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "If SP=150 and CP=100, profit % is (variant 1454)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 1454) का उत्तर चुनें",
    options_en: ["60%", "40%", "50%", "25%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "If SP=150 and CP=100, profit % is (variant 1429)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 1429) का उत्तर चुनें",
    options_en: ["50%", "40%", "25%", "60%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 1386)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 1386) का उत्तर चुनें",
    options_en: ["120 km/h", "60 km/h", "80 km/h", "40 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 560)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 560) का उत्तर चुनें",
    options_en: ["4 km", "3 km", "5 km", "7 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "If SP=150 and CP=100, profit % is (variant 124)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 124) का उत्तर चुनें",
    options_en: ["60%", "50%", "25%", "40%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "If SP=150 and CP=100, profit % is (variant 894)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 894) का उत्तर चुनें",
    options_en: ["25%", "60%", "40%", "50%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "If SP=150 and CP=100, profit % is (variant 694)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 694) का उत्तर चुनें",
    options_en: ["60%", "25%", "40%", "50%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Average of 10,20,30,40 is (variant 298)",
    question_hi: "Average of 10,20,30,40 is (variant 298) का उत्तर चुनें",
    options_en: ["20", "35", "25", "30"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Average of 10,20,30,40 is (variant 1208)",
    question_hi: "Average of 10,20,30,40 is (variant 1208) का उत्तर चुनें",
    options_en: ["30", "20", "35", "25"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 1230)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 1230) का उत्तर चुनें",
    options_en: ["7 km", "4 km", "3 km", "5 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 596)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 596) का उत्तर चुनें",
    options_en: ["60 km/h", "80 km/h", "40 km/h", "120 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Next number in the series 2,4,8,16 is (variant 687)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 687) का उत्तर चुनें",
    options_en: ["32", "24", "30", "40"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "If SP=150 and CP=100, profit % is (variant 904)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 904) का उत्तर चुनें",
    options_en: ["25%", "40%", "60%", "50%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 481)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 481) का उत्तर चुनें",
    options_en: ["120 km/h", "40 km/h", "60 km/h", "80 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "Average of 10,20,30,40 is (variant 448)",
    question_hi: "Average of 10,20,30,40 is (variant 448) का उत्तर चुनें",
    options_en: ["35", "30", "25", "20"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Next number in the series 2,4,8,16 is (variant 1232)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 1232) का उत्तर चुनें",
    options_en: ["30", "40", "32", "24"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "If SP=150 and CP=100, profit % is (variant 819)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 819) का उत्तर चुनें",
    options_en: ["60%", "25%", "40%", "50%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 306)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 306) का उत्तर चुनें",
    options_en: ["80 km/h", "60 km/h", "40 km/h", "120 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Average of 10,20,30,40 is (variant 498)",
    question_hi: "Average of 10,20,30,40 is (variant 498) का उत्तर चुनें",
    options_en: ["30", "25", "35", "20"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "Next number in the series 2,4,8,16 is (variant 802)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 802) का उत्तर चुनें",
    options_en: ["32", "24", "40", "30"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Next number in the series 2,4,8,16 is (variant 892)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 892) का उत्तर चुनें",
    options_en: ["32", "30", "40", "24"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 136)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 136) का उत्तर चुनें",
    options_en: ["40 km/h", "80 km/h", "120 km/h", "60 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Average of 10,20,30,40 is (variant 33)",
    question_hi: "Average of 10,20,30,40 is (variant 33) का उत्तर चुनें",
    options_en: ["35", "20", "25", "30"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 1235)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 1235) का उत्तर चुनें",
    options_en: ["3 km", "7 km", "4 km", "5 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "If SP=150 and CP=100, profit % is (variant 919)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 919) का उत्तर चुनें",
    options_en: ["25%", "50%", "60%", "40%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "If SP=150 and CP=100, profit % is (variant 464)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 464) का उत्तर चुनें",
    options_en: ["40%", "25%", "60%", "50%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Next number in the series 2,4,8,16 is (variant 1082)",
    question_hi:
      "Next number in the series 2,4,8,16 is (variant 1082) का उत्तर चुनें",
    options_en: ["32", "24", "40", "30"],
    answer_en: "32",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "If SP=150 and CP=100, profit % is (variant 549)",
    question_hi:
      "If SP=150 and CP=100, profit % is (variant 549) का उत्तर चुनें",
    options_en: ["60%", "40%", "50%", "25%"],
    answer_en: "50%",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 1026)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 1026) का उत्तर चुनें",
    options_en: ["60 km/h", "40 km/h", "80 km/h", "120 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 1260)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 1260) का उत्तर चुनें",
    options_en: ["4 km", "5 km", "7 km", "3 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 65)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 65) का उत्तर चुनें",
    options_en: ["3 km", "7 km", "5 km", "4 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Average of 10,20,30,40 is (variant 948)",
    question_hi: "Average of 10,20,30,40 is (variant 948) का उत्तर चुनें",
    options_en: ["25", "35", "20", "30"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Average of 10,20,30,40 is (variant 253)",
    question_hi: "Average of 10,20,30,40 is (variant 253) का उत्तर चुनें",
    options_en: ["35", "30", "25", "20"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "If a train travels 120 km in 2 hours, its speed is (variant 1266)",
    question_hi:
      "If a train travels 120 km in 2 hours, its speed is (variant 1266) का उत्तर चुनें",
    options_en: ["120 km/h", "40 km/h", "80 km/h", "60 km/h"],
    answer_en: "60 km/h",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 1395)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 1395) का उत्तर चुनें",
    options_en: ["3 km", "4 km", "5 km", "7 km"],
    answer_en: "5 km",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Average of 10,20,30,40 is (variant 873)",
    question_hi: "Average of 10,20,30,40 is (variant 873) का उत्तर चुनें",
    options_en: ["20", "30", "35", "25"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Average of 10,20,30,40 is (variant 818)",
    question_hi: "Average of 10,20,30,40 is (variant 818) का उत्तर चुनें",
    options_en: ["30", "25", "20", "35"],
    answer_en: "25",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "Man walks 3 km east then 4 km north, displacement is (variant 155)",
    question_hi:
      "Man walks 3 km east then 4 km north, displacement is (variant 155) का उत्तर चुनें",
    options_en: ["5 km", "4 km", "7 km", "3 km"],
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
