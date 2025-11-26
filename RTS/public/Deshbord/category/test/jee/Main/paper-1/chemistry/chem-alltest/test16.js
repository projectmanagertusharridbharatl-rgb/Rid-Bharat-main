const questions = [
  {
    num: 1,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 364)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 364)?",
    options_en: ["NH3", "He", "Cl- (spectator)", "Na+"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 336)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 336)?",
    options_en: ["NaBH4", "KMnO4", "H2/Pd", "PCC"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 462)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 462)?",
    options_en: ["0", "+1", "+3", "+2"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Which reagent is a strong oxidizing agent (variant 480)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 480)?",
    options_en: ["O2", "NaCl", "KMnO4", "H2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Van't Hoff factor i accounts for (variant 450)",
    question_hi: "Van't Hoff factor i accounts for (variant 450)?",
    options_en: [
      "Temperature",
      "Viscosity",
      "Dissociation/association",
      "Pressure",
    ],
    answer_en: "Dissociation/association",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 86)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 86)?",
    options_en: ["Isothermal", "Endothermic", "Adiabatic", "Exothermic"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "Electron configuration of O atom (ground state) (variant 340)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 340)?",
    options_en: ["1s2 2s1 2p4", "1s2 2s2 2p4", "1s2 2s2 2p3", "1s2 2s2 2p6"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 126)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 126)?",
    options_en: ["Exothermic", "Isothermal", "Endothermic", "Adiabatic"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 299)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 299)?",
    options_en: ["Molarity", "Temperature", "Pressure", "Molality"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "General formula for alkanes is (variant 92)",
    question_hi: "General formula for alkanes है (variant 92)?",
    options_en: ["CnH2n+2", "CnH2n+1", "CnH2n-2", "CnH2n"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Electron configuration of O atom (ground state) (variant 85)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 85)?",
    options_en: ["1s2 2s2 2p3", "1s2 2s2 2p4", "1s2 2s1 2p4", "1s2 2s2 2p6"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Van't Hoff factor i accounts for (variant 70)",
    question_hi: "Van't Hoff factor i accounts for (variant 70)?",
    options_en: [
      "Pressure",
      "Temperature",
      "Viscosity",
      "Dissociation/association",
    ],
    answer_en: "Dissociation/association",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Group 1 metals are called (variant 122)",
    question_hi: "Group 1 metals हैं called (variant 122)?",
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
    num: 14,
    question_en: "Which reagent forms Grignard reagent (variant 207)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 207)?",
    options_en: ["HCl", "Mg in dry ether", "NaBH4", "LiAlH4"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Unit of entropy (S) is (variant 264)",
    question_hi: "Unit of entropy (S) है (variant 264)?",
    options_en: ["J K^-1 mol^-1", "J K", "K mol^-1", "J mol^-1"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 273)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 273)?",
    options_en: ["Ethanoic acid", "Ethanol", "Methanol", "Propanol"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Which reaction converts an alkene to an alkane (variant 484)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 484)?",
    options_en: [
      "Dehydrogenation",
      "Hydrogenation",
      "Halogenation",
      "Dehydration",
    ],
    answer_en: "Hydrogenation",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "Which compound is aromatic (variant 295)",
    question_hi: "कौन सा compound है aromatic (variant 295)?",
    options_en: ["1,3,5-Heptatriene", "Cyclobutane", "Benzene", "Cyclohexane"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 135)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 135)?",
    options_en: ["Two", "Zero", "One", "Three"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Joule-Thomson coefficient for ideal gas is (variant 375)",
    question_hi: "Joule-Thomson coefficient for ideal गैस है (variant 375)?",
    options_en: ["Negative", "Positive", "Zero", "Infinite"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 499)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 499)?",
    options_en: ["Na+", "Cl- (spectator)", "He", "NH3"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Which reagent forms Grignard reagent (variant 267)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 267)?",
    options_en: ["NaBH4", "HCl", "Mg in dry ether", "LiAlH4"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Electron configuration of O atom (ground state) (variant 70)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 70)?",
    options_en: ["1s2 2s1 2p4", "1s2 2s2 2p3", "1s2 2s2 2p4", "1s2 2s2 2p6"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "Critical temperature is the temperature above which gas (variant 376)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 376)?",
    options_en: [
      "Is ideal",
      "Solidifies",
      "Becomes plasma",
      "Cannot be liquefied by pressure alone",
    ],
    answer_en: "Cannot be liquefied by pressure alone",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Hybridization of central atom in BF3 (variant 395)",
    question_hi: "Hybridization of central atom in BF3 (variant 395)?",
    options_en: ["sp2", "sp3d", "sp", "sp3"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Which is a noble gas (variant 448)",
    question_hi: "कौन सा है a noble गैस (variant 448)?",
    options_en: ["Ne", "F", "N", "O"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "ΔG < 0 indicates the process is (variant 465)",
    question_hi: "ΔG < 0 indicates the process है (variant 465)?",
    options_en: [
      "Non-spontaneous",
      "Impossible",
      "Spontaneous",
      "At equilibrium",
    ],
    answer_en: "Spontaneous",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 491)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 491)?",
    options_en: ["Peroxides", "Water", "Bases", "Acids"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Which reaction increases oxidation state of carbon",
    question_hi: "कौन सा अभिक्रिया increases oxidation state of carbon?",
    options_en: [
      "Isomerization",
      "Reduction",
      "Substitution without oxidation",
      "Oxidation",
    ],
    answer_en: "Oxidation",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "ΔG < 0 indicates the process is (variant 185)",
    question_hi: "ΔG < 0 indicates the process है (variant 185)?",
    options_en: [
      "Spontaneous",
      "At equilibrium",
      "Impossible",
      "Non-spontaneous",
    ],
    answer_en: "Spontaneous",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "Electron configuration of O atom (ground state) (variant 385)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 385)?",
    options_en: ["1s2 2s1 2p4", "1s2 2s2 2p4", "1s2 2s2 2p6", "1s2 2s2 2p3"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 288)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 288)?",
    options_en: ["+4", "+6", "+7", "+2"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Bohr model applies best to which atom (variant 434)",
    question_hi: "Bohr model applies best to which atom (variant 434)?",
    options_en: ["Helium", "Carbon", "Oxygen", "Hydrogen"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Group 1 metals are called (variant 77)",
    question_hi: "Group 1 metals हैं called (variant 77)?",
    options_en: [
      "Transition metals",
      "Alkaline earth metals",
      "Alkali metals",
      "Noble gases",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "Critical temperature is the temperature above which gas (variant 336)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 336)?",
    options_en: [
      "Solidifies",
      "Becomes plasma",
      "Cannot be liquefied by pressure alone",
      "Is ideal",
    ],
    answer_en: "Cannot be liquefied by pressure alone",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Which compound is aromatic (variant 490)",
    question_hi: "कौन सा compound है aromatic (variant 490)?",
    options_en: ["Cyclobutane", "Benzene", "1,3,5-Heptatriene", "Cyclohexane"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Which is a noble gas (variant 118)",
    question_hi: "कौन सा है a noble गैस (variant 118)?",
    options_en: ["F", "Ne", "O", "N"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "Which metal is liquid at room temperature (variant 296)",
    question_hi: "कौन सा metal है liquid at room तापमान (variant 296)?",
    options_en: ["Al", "Fe", "Hg", "Na"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 63)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 63)?",
    options_en: ["+6", "+2", "+7", "+4"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "1 mole of ideal gas at STP occupies (approx) (variant 102)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx) (variant 102)?",
    options_en: ["1.0 L", "44.8 L", "22.4 L", "11.2 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 94)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 94)?",
    options_en: ["Na+", "NH3", "He", "Cl- (spectator)"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Benzene undergoes which type of reaction",
    question_hi: "Benzene undergoes which type of अभिक्रिया?",
    options_en: [
      "Addition",
      "Nucleophilic substitution",
      "Elimination",
      "Electrophilic aromatic substitution",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Ideal gas equation is (variant 23)",
    question_hi: "Ideal गैस equation है (variant 23)?",
    options_en: ["PV = nRT", "P/V = nR", "PV = RT", "P + V = nRT"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "SN1 reactions proceed via which intermediate (variant 125)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 125)?",
    options_en: ["Radical", "Carbanion", "Carbocation", "Concerted TS"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "Periodic table: which element has highest electronegativity among these (variant 106)",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these (variant 106)?",
    options_en: ["N", "O", "F", "Cl"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Which is an example of a conjugated system (variant 338)",
    question_hi: "कौन सा है an example of a conjugated system (variant 338)?",
    options_en: ["Cyclohexane", "Butane", "Butadiene", "Methane"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "Unit of entropy (S) is (variant 224)",
    question_hi: "Unit of entropy (S) है (variant 224)?",
    options_en: ["J K^-1 mol^-1", "J mol^-1", "K mol^-1", "J K"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Which functional group is present in ethanol (variant 331)",
    question_hi: "कौन सा functional group है present in ethanol (variant 331)?",
    options_en: [
      "Amino (–NH2)",
      "Hydroxyl (–OH)",
      "Carboxyl (–COOH)",
      "Carbonyl (C=O)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Which is a good leaving group (variant 268)",
    question_hi: "कौन सा है a good leaving group (variant 268)?",
    options_en: ["H-", "CH3-", "Br-", "NH2-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Which is an example of a conjugated system (variant 443)",
    question_hi: "कौन सा है an example of a conjugated system (variant 443)?",
    options_en: ["Butane", "Cyclohexane", "Methane", "Butadiene"],
    answer_en: "Butadiene",
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
