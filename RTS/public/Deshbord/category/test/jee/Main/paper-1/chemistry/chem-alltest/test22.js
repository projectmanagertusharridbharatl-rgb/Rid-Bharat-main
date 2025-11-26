const questions = [
  {
    num: 1,
    question_en: "Avogadro's number is approximately (variant 441)",
    question_hi: "Avogadro's number है approximately (variant 441)?",
    options_en: ["1.602×10^-19", "3.00×10^8", "6.022×10^23", "9.81"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "Critical temperature is the temperature above which gas (variant 156)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 156)?",
    options_en: [
      "Is ideal",
      "Cannot be liquefied by pressure alone",
      "Becomes plasma",
      "Solidifies",
    ],
    answer_en: "Cannot be liquefied by pressure alone",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Bond enthalpy usually refers to breaking of (variant 160)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 160)?",
    options_en: [
      "1 mole of gaseous bonds",
      "1 mole of solid bonds",
      "1 mole of liquid bonds",
      "1 mole of ionic pairs",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 363)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 363)?",
    options_en: ["+2", "+6", "+7", "+4"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Which reagent forms Grignard reagent (variant 327)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 327)?",
    options_en: ["LiAlH4", "HCl", "Mg in dry ether", "NaBH4"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 274)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 274)?",
    options_en: ["Cl- (spectator)", "Na+", "NH3", "He"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Bohr model applies best to which atom (variant 29)",
    question_hi: "Bohr model applies best to which atom (variant 29)?",
    options_en: ["Carbon", "Helium", "Oxygen", "Hydrogen"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "Which reaction increases oxidation state of carbon (variant 479)",
    question_hi:
      "कौन सा अभिक्रिया increases oxidation state of carbon (variant 479)?",
    options_en: [
      "Oxidation",
      "Isomerization",
      "Substitution without oxidation",
      "Reduction",
    ],
    answer_en: "Oxidation",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Color of KMnO4 solution (variant 382)",
    question_hi: "Color of KMnO4 solution (variant 382)?",
    options_en: ["Purple", "Brown", "Colorless", "Green"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 39)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 39)?",
    options_en: ["Molality", "Temperature", "Pressure", "Molarity"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 372)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 372)?",
    options_en: ["+3", "+2", "0", "+1"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Elevation in boiling point depends on (variant 278)",
    question_hi: "Elevation in boiling point depends on (variant 278)?",
    options_en: ["Pressure only", "Molality", "Temperature only", "Molarity"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "Electron configuration of O atom (ground state) (variant 145)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 145)?",
    options_en: ["1s2 2s2 2p6", "1s2 2s2 2p3", "1s2 2s1 2p4", "1s2 2s2 2p4"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 48)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 48)?",
    options_en: ["+6", "+2", "+4", "+7"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Which oxide is amphoteric (variant 156)",
    question_hi: "कौन सा oxide है amphoteric (variant 156)?",
    options_en: ["CO2", "N2O5", "SO3", "Al2O3"],
    answer_en: "Al2O3",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Which reaction converts an alkene to an alkane (variant 34)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 34)?",
    options_en: [
      "Dehydrogenation",
      "Dehydration",
      "Halogenation",
      "Hydrogenation",
    ],
    answer_en: "Hydrogenation",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 499)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 499)?",
    options_en: ["Pressure", "Temperature", "Molarity", "Molality"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 192)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 192)?",
    options_en: ["+1", "0", "+3", "+2"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "General formula for alkanes is (variant 362)",
    question_hi: "General formula for alkanes है (variant 362)?",
    options_en: ["CnH2n-2", "CnH2n+1", "CnH2n+2", "CnH2n"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Unit of entropy (S) is (variant 324)",
    question_hi: "Unit of entropy (S) है (variant 324)?",
    options_en: ["K mol^-1", "J K", "J mol^-1", "J K^-1 mol^-1"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Hybridization of central atom in BF3 (variant 230)",
    question_hi: "Hybridization of central atom in BF3 (variant 230)?",
    options_en: ["sp2", "sp3d", "sp", "sp3"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 139)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 139)?",
    options_en: ["Pressure", "Molarity", "Temperature", "Molality"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 447)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 447)?",
    options_en: ["+1", "+2", "0", "+3"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "Arrhenius equation involves activation energy and (variant 271)",
    question_hi:
      "Arrhenius equation involves activation ऊर्जा and (variant 271)?",
    options_en: ["Pressure", "Temperature", "Concentration", "Volume"],
    answer_en: "Temperature",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Raoult's law applies to (variant 328)",
    question_hi: "Raoult's law applies to (variant 328)?",
    options_en: [
      "Ideal solutions",
      "Non-ideal solutions",
      "Colloids",
      "Pure solvents",
    ],
    answer_en: "Ideal solutions",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Half-life of first order reaction is (variant 153)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 153)?",
    options_en: [
      "Proportional to initial conc.",
      "Zero",
      "Independent of initial concentration",
      "Infinite",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "Which block contains transition metals (variant 414)",
    question_hi: "कौन सा block contains transition metals (variant 414)?",
    options_en: ["p-block", "s-block", "f-block", "d-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Benzene undergoes which type of reaction (variant 367)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 367)?",
    options_en: [
      "Nucleophilic substitution",
      "Addition",
      "Electrophilic aromatic substitution",
      "Elimination",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Periodic table: which element has highest electronegativity among these (variant 286)",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these (variant 286)?",
    options_en: ["Cl", "F", "N", "O"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Which reagent is a strong oxidizing agent (variant 75)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 75)?",
    options_en: ["KMnO4", "H2", "NaCl", "O2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Which reagent is a strong oxidizing agent (variant 150)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 150)?",
    options_en: ["O2", "NaCl", "KMnO4", "H2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "Unit of rate constant for first order (variant 412)",
    question_hi: "Unit of rate constant for first order (variant 412)?",
    options_en: ["s^-1", "mol L^-1 s^-1", "unitless", "L mol^-1 s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Which block contains transition metals (variant 369)",
    question_hi: "कौन सा block contains transition metals (variant 369)?",
    options_en: ["f-block", "p-block", "d-block", "s-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Benzene undergoes which type of reaction (variant 52)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 52)?",
    options_en: [
      "Electrophilic aromatic substitution",
      "Addition",
      "Nucleophilic substitution",
      "Elimination",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 42)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 42)?",
    options_en: ["0", "+3", "+2", "+1"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Which oxide is amphoteric (variant 36)",
    question_hi: "कौन सा oxide है amphoteric (variant 36)?",
    options_en: ["SO3", "CO2", "Al2O3", "N2O5"],
    answer_en: "Al2O3",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Compressibility factor Z for ideal gas equals (variant 114)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 114)?",
    options_en: ["Infinity", "1", "2", "0"],
    answer_en: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 401)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 401)?",
    options_en: ["Acids", "Peroxides", "Water", "Bases"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Which reaction converts an alkene to an alkane (variant 304)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 304)?",
    options_en: [
      "Hydrogenation",
      "Dehydrogenation",
      "Halogenation",
      "Dehydration",
    ],
    answer_en: "Hydrogenation",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Markovnikov rule applies to addition of HX to (variant 429)",
    question_hi: "Markovnikov rule applies to addition of HX to (variant 429)?",
    options_en: ["Aromatic rings", "Alkynes always", "Alkanes", "Alkenes"],
    answer_en: "Alkenes",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 68)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 68)?",
    options_en: ["H2", "O2", "Cl2", "CO2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 34)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 34)?",
    options_en: ["He", "Cl- (spectator)", "NH3", "Na+"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Group 1 metals are called (variant 437)",
    question_hi: "Group 1 metals हैं called (variant 437)?",
    options_en: [
      "Transition metals",
      "Alkali metals",
      "Noble gases",
      "Alkaline earth metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en:
      "Electron configuration of O atom (ground state) (variant 400)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 400)?",
    options_en: ["1s2 2s2 2p4", "1s2 2s2 2p6", "1s2 2s1 2p4", "1s2 2s2 2p3"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Which reagent is a strong oxidizing agent (variant 285)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 285)?",
    options_en: ["KMnO4", "O2", "H2", "NaCl"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Which oxide is amphoteric (variant 306)",
    question_hi: "कौन सा oxide है amphoteric (variant 306)?",
    options_en: ["CO2", "N2O5", "Al2O3", "SO3"],
    answer_en: "Al2O3",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "Raoult's law applies to (variant 448)",
    question_hi: "Raoult's law applies to (variant 448)?",
    options_en: [
      "Ideal solutions",
      "Non-ideal solutions",
      "Colloids",
      "Pure solvents",
    ],
    answer_en: "Ideal solutions",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "Which reaction increases oxidation state of carbon (variant 329)",
    question_hi:
      "कौन सा अभिक्रिया increases oxidation state of carbon (variant 329)?",
    options_en: [
      "Oxidation",
      "Substitution without oxidation",
      "Isomerization",
      "Reduction",
    ],
    answer_en: "Oxidation",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Which reaction converts an alkene to an alkane (variant 199)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 199)?",
    options_en: [
      "Halogenation",
      "Dehydrogenation",
      "Dehydration",
      "Hydrogenation",
    ],
    answer_en: "Hydrogenation",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Compressibility factor Z for ideal gas equals (variant 434)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 434)?",
    options_en: ["2", "Infinity", "0", "1"],
    answer_en: "1",
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
