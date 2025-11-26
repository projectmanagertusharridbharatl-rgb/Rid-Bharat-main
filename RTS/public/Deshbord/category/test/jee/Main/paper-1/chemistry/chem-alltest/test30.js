const questions = [
  {
    num: 1,
    question_en: "Which compound is aromatic (variant 385)",
    question_hi: "कौन सा compound है aromatic (variant 385)?",
    options_en: ["Benzene", "1,3,5-Heptatriene", "Cyclohexane", "Cyclobutane"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Benzene undergoes which type of reaction (variant 382)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 382)?",
    options_en: [
      "Addition",
      "Elimination",
      "Nucleophilic substitution",
      "Electrophilic aromatic substitution",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Joule-Thomson coefficient for ideal gas is (variant 95)",
    question_hi: "Joule-Thomson coefficient for ideal गैस है (variant 95)?",
    options_en: ["Positive", "Infinite", "Zero", "Negative"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en:
      "Electron configuration of O atom (ground state) (variant 370)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 370)?",
    options_en: ["1s2 2s2 2p6", "1s2 2s2 2p4", "1s2 2s2 2p3", "1s2 2s1 2p4"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Half-life of first order reaction is (variant 93)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 93)?",
    options_en: [
      "Zero",
      "Independent of initial concentration",
      "Proportional to initial conc.",
      "Infinite",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Which reagent is a strong oxidizing agent (variant 45)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 45)?",
    options_en: ["NaCl", "KMnO4", "O2", "H2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Compressibility factor Z for ideal gas equals (variant 394)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 394)?",
    options_en: ["1", "2", "Infinity", "0"],
    answer_en: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Which reagent is a strong oxidizing agent (variant 405)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 405)?",
    options_en: ["H2", "O2", "NaCl", "KMnO4"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 63)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 63)?",
    options_en: ["Methanol", "Ethanol", "Propanol", "Ethanoic acid"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 386)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 386)?",
    options_en: ["Acids", "Peroxides", "Bases", "Water"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Which metal is liquid at room temperature (variant 266)",
    question_hi: "कौन सा metal है liquid at room तापमान (variant 266)?",
    options_en: ["Al", "Fe", "Na", "Hg"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Which is a noble gas (variant 223)",
    question_hi: "कौन सा है a noble गैस (variant 223)?",
    options_en: ["Ne", "N", "O", "F"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 216)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 216)?",
    options_en: ["KMnO4", "NaBH4", "PCC", "H2/Pd"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 198)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 198)?",
    options_en: ["Ethanol", "Methanol", "Propanol", "Ethanoic acid"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Joule-Thomson coefficient for ideal gas is (variant 235)",
    question_hi: "Joule-Thomson coefficient for ideal गैस है (variant 235)?",
    options_en: ["Infinite", "Zero", "Negative", "Positive"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 23)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 23)?",
    options_en: ["CO2", "Cl2", "H2", "O2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Arrhenius equation involves activation energy and (variant 411)",
    question_hi:
      "Arrhenius equation involves activation ऊर्जा and (variant 411)?",
    options_en: ["Pressure", "Temperature", "Volume", "Concentration"],
    answer_en: "Temperature",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 38)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 38)?",
    options_en: ["O2", "CO2", "H2", "Cl2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Which compound is aromatic (variant 460)",
    question_hi: "कौन सा compound है aromatic (variant 460)?",
    options_en: ["Cyclobutane", "Benzene", "1,3,5-Heptatriene", "Cyclohexane"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Bond enthalpy usually refers to breaking of (variant 260)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 260)?",
    options_en: [
      "1 mole of liquid bonds",
      "1 mole of solid bonds",
      "1 mole of gaseous bonds",
      "1 mole of ionic pairs",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "Arrhenius equation involves activation energy and (variant 131)",
    question_hi:
      "Arrhenius equation involves activation ऊर्जा and (variant 131)?",
    options_en: ["Temperature", "Concentration", "Volume", "Pressure"],
    answer_en: "Temperature",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 159)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 159)?",
    options_en: ["Molality", "Pressure", "Molarity", "Temperature"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Color of KMnO4 solution (variant 412)",
    question_hi: "Color of KMnO4 solution (variant 412)?",
    options_en: ["Brown", "Purple", "Green", "Colorless"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "Critical temperature is the temperature above which gas (variant 436)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 436)?",
    options_en: [
      "Cannot be liquefied by pressure alone",
      "Is ideal",
      "Solidifies",
      "Becomes plasma",
    ],
    answer_en: "Cannot be liquefied by pressure alone",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 456)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 456)?",
    options_en: ["KMnO4", "NaBH4", "PCC", "H2/Pd"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Group 1 metals are called (variant 242)",
    question_hi: "Group 1 metals हैं called (variant 242)?",
    options_en: [
      "Transition metals",
      "Noble gases",
      "Alkaline earth metals",
      "Alkali metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "Benzene undergoes which type of reaction (variant 457)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 457)?",
    options_en: [
      "Elimination",
      "Electrophilic aromatic substitution",
      "Addition",
      "Nucleophilic substitution",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Graham's law relates diffusion rates to (variant 437)",
    question_hi: "Graham's law relates diffusion rates to (variant 437)?",
    options_en: [
      "Directly proportional to molar mass",
      "Inverse sqrt of molar masses",
      "Temperature only",
      "Concentration only",
    ],
    answer_en: "Inverse sqrt of molar masses",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Which metal is liquid at room temperature (variant 341)",
    question_hi: "कौन सा metal है liquid at room तापमान (variant 341)?",
    options_en: ["Fe", "Na", "Hg", "Al"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "Electron configuration of O atom (ground state) (variant 115)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 115)?",
    options_en: ["1s2 2s2 2p3", "1s2 2s2 2p4", "1s2 2s1 2p4", "1s2 2s2 2p6"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Boyle's law at constant T states PV is (variant 187)",
    question_hi: "Boyle's law at constant T states PV है (variant 187)?",
    options_en: ["Proportional to P", "Zero", "Proportional to V", "Constant"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 351)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 351)?",
    options_en: ["KMnO4", "PCC", "NaBH4", "H2/Pd"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "Electron configuration of O atom (ground state) (variant 205)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 205)?",
    options_en: ["1s2 2s2 2p6", "1s2 2s2 2p4", "1s2 2s1 2p4", "1s2 2s2 2p3"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "General formula for alkanes is (variant 332)",
    question_hi: "General formula for alkanes है (variant 332)?",
    options_en: ["CnH2n+2", "CnH2n", "CnH2n+1", "CnH2n-2"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Which compound is aromatic (variant 475)",
    question_hi: "कौन सा compound है aromatic (variant 475)?",
    options_en: ["Benzene", "Cyclohexane", "Cyclobutane", "1,3,5-Heptatriene"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 116)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 116)?",
    options_en: ["Bases", "Water", "Acids", "Peroxides"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Which is a noble gas (variant 28)",
    question_hi: "कौन सा है a noble गैस (variant 28)?",
    options_en: ["Ne", "N", "F", "O"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 312)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 312)?",
    options_en: ["+3", "0", "+1", "+2"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Which reagent forms Grignard reagent (variant 447)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 447)?",
    options_en: ["Mg in dry ether", "LiAlH4", "NaBH4", "HCl"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Group 1 metals are called (variant 152)",
    question_hi: "Group 1 metals हैं called (variant 152)?",
    options_en: [
      "Noble gases",
      "Alkali metals",
      "Alkaline earth metals",
      "Transition metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Unit of rate constant for first order (variant 192)",
    question_hi: "Unit of rate constant for first order (variant 192)?",
    options_en: ["L mol^-1 s^-1", "s^-1", "unitless", "mol L^-1 s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Elevation in boiling point depends on (variant 178)",
    question_hi: "Elevation in boiling point depends on (variant 178)?",
    options_en: ["Molality", "Molarity", "Temperature only", "Pressure only"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Which reagent is a strong oxidizing agent (variant 420)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 420)?",
    options_en: ["KMnO4", "H2", "NaCl", "O2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Which is an example of a conjugated system (variant 203)",
    question_hi: "कौन सा है an example of a conjugated system (variant 203)?",
    options_en: ["Cyclohexane", "Methane", "Butadiene", "Butane"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Which block contains transition metals (variant 339)",
    question_hi: "कौन सा block contains transition metals (variant 339)?",
    options_en: ["p-block", "s-block", "f-block", "d-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 338)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 338)?",
    options_en: ["H2", "Cl2", "CO2", "O2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 399)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 399)?",
    options_en: ["Pressure", "Molarity", "Molality", "Temperature"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 123)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 123)?",
    options_en: ["+4", "+7", "+6", "+2"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Which is an example of a conjugated system (variant 233)",
    question_hi: "कौन सा है an example of a conjugated system (variant 233)?",
    options_en: ["Butadiene", "Butane", "Methane", "Cyclohexane"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Which is a noble gas (variant 298)",
    question_hi: "कौन सा है a noble गैस (variant 298)?",
    options_en: ["O", "F", "Ne", "N"],
    answer_en: "Ne",
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
