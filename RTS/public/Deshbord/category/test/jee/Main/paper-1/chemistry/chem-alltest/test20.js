const questions = [
  {
    num: 1,
    question_en: "ΔG < 0 indicates the process is (variant 245)",
    question_hi: "ΔG < 0 indicates the process है (variant 245)?",
    options_en: [
      "Spontaneous",
      "At equilibrium",
      "Non-spontaneous",
      "Impossible",
    ],
    answer_en: "Spontaneous",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "Which reaction increases oxidation state of carbon (variant 284)",
    question_hi:
      "कौन सा अभिक्रिया increases oxidation state of carbon (variant 284)?",
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
    num: 3,
    question_en: "Raoult's law applies to (variant 68)",
    question_hi: "Raoult's law applies to (variant 68)?",
    options_en: [
      "Pure solvents",
      "Ideal solutions",
      "Non-ideal solutions",
      "Colloids",
    ],
    answer_en: "Ideal solutions",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Hybridization of central atom in BF3 (variant 215)",
    question_hi: "Hybridization of central atom in BF3 (variant 215)?",
    options_en: ["sp3d", "sp2", "sp3", "sp"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Color of KMnO4 solution (variant 37)",
    question_hi: "Color of KMnO4 solution (variant 37)?",
    options_en: ["Green", "Brown", "Purple", "Colorless"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "ΔG < 0 indicates the process is (variant 345)",
    question_hi: "ΔG < 0 indicates the process है (variant 345)?",
    options_en: [
      "At equilibrium",
      "Non-spontaneous",
      "Spontaneous",
      "Impossible",
    ],
    answer_en: "Spontaneous",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 339)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 339)?",
    options_en: ["Temperature", "Molarity", "Pressure", "Molality"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 379)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 379)?",
    options_en: ["NH3", "Cl- (spectator)", "Na+", "He"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en:
      "Arrhenius equation involves activation energy and (variant 151)",
    question_hi:
      "Arrhenius equation involves activation ऊर्जा and (variant 151)?",
    options_en: ["Pressure", "Volume", "Concentration", "Temperature"],
    answer_en: "Temperature",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "Compressibility factor Z for ideal gas equals (variant 374)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 374)?",
    options_en: ["1", "Infinity", "0", "2"],
    answer_en: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Raoult's law applies to (variant 148)",
    question_hi: "Raoult's law applies to (variant 148)?",
    options_en: [
      "Colloids",
      "Non-ideal solutions",
      "Ideal solutions",
      "Pure solvents",
    ],
    answer_en: "Ideal solutions",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Common oxidation state of chlorine in Cl2O",
    question_hi: "Common oxidation state of chlorine in Cl2O?",
    options_en: ["+2", "+1", "+3", "0"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 229)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 229)?",
    options_en: ["NH3", "Na+", "He", "Cl- (spectator)"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Bond enthalpy usually refers to breaking of (variant 140)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 140)?",
    options_en: [
      "1 mole of liquid bonds",
      "1 mole of ionic pairs",
      "1 mole of solid bonds",
      "1 mole of gaseous bonds",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Group 1 metals are called (variant 452)",
    question_hi: "Group 1 metals हैं called (variant 452)?",
    options_en: [
      "Transition metals",
      "Alkaline earth metals",
      "Noble gases",
      "Alkali metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "Which reaction increases oxidation state of carbon (variant 194)",
    question_hi:
      "कौन सा अभिक्रिया increases oxidation state of carbon (variant 194)?",
    options_en: [
      "Substitution without oxidation",
      "Isomerization",
      "Oxidation",
      "Reduction",
    ],
    answer_en: "Oxidation",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Half-life of first order reaction is (variant 393)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 393)?",
    options_en: [
      "Independent of initial concentration",
      "Proportional to initial conc.",
      "Zero",
      "Infinite",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "Benzene undergoes which type of reaction (variant 112)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 112)?",
    options_en: [
      "Addition",
      "Electrophilic aromatic substitution",
      "Elimination",
      "Nucleophilic substitution",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en:
      "Critical temperature is the temperature above which gas (variant 96)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 96)?",
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
    num: 20,
    question_en:
      "Critical temperature is the temperature above which gas (variant 216)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 216)?",
    options_en: [
      "Solidifies",
      "Cannot be liquefied by pressure alone",
      "Becomes plasma",
      "Is ideal",
    ],
    answer_en: "Cannot be liquefied by pressure alone",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 468)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 468)?",
    options_en: ["+7", "+2", "+6", "+4"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 162)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 162)?",
    options_en: ["+3", "+2", "+1", "0"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "ΔG < 0 indicates the process is (variant 385)",
    question_hi: "ΔG < 0 indicates the process है (variant 385)?",
    options_en: [
      "At equilibrium",
      "Non-spontaneous",
      "Impossible",
      "Spontaneous",
    ],
    answer_en: "Spontaneous",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Color of KMnO4 solution (variant 262)",
    question_hi: "Color of KMnO4 solution (variant 262)?",
    options_en: ["Purple", "Green", "Brown", "Colorless"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Boyle's law at constant T states PV is (variant 287)",
    question_hi: "Boyle's law at constant T states PV है (variant 287)?",
    options_en: ["Constant", "Zero", "Proportional to V", "Proportional to P"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 409)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 409)?",
    options_en: ["NH3", "He", "Na+", "Cl- (spectator)"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "Boyle's law at constant T states PV is (variant 427)",
    question_hi: "Boyle's law at constant T states PV है (variant 427)?",
    options_en: ["Proportional to P", "Zero", "Constant", "Proportional to V"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Avogadro's number is approximately (variant 361)",
    question_hi: "Avogadro's number है approximately (variant 361)?",
    options_en: ["9.81", "6.022×10^23", "1.602×10^-19", "3.00×10^8"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 371)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 371)?",
    options_en: ["Water", "Peroxides", "Bases", "Acids"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Half-life of first order reaction is (variant 273)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 273)?",
    options_en: [
      "Independent of initial concentration",
      "Infinite",
      "Proportional to initial conc.",
      "Zero",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Ideal gas equation is (variant 403)",
    question_hi: "Ideal गैस equation है (variant 403)?",
    options_en: ["PV = nRT", "PV = RT", "P + V = nRT", "P/V = nR"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "Arrhenius equation involves activation energy and (variant 471)",
    question_hi:
      "Arrhenius equation involves activation ऊर्जा and (variant 471)?",
    options_en: ["Pressure", "Temperature", "Concentration", "Volume"],
    answer_en: "Temperature",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Ideal gas equation is (variant 143)",
    question_hi: "Ideal गैस equation है (variant 143)?",
    options_en: ["P/V = nR", "PV = RT", "PV = nRT", "P + V = nRT"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Graham's law relates diffusion rates to (variant 97)",
    question_hi: "Graham's law relates diffusion rates to (variant 97)?",
    options_en: [
      "Concentration only",
      "Inverse sqrt of molar masses",
      "Temperature only",
      "Directly proportional to molar mass",
    ],
    answer_en: "Inverse sqrt of molar masses",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Which oxide is amphoteric (variant 456)",
    question_hi: "कौन सा oxide है amphoteric (variant 456)?",
    options_en: ["CO2", "SO3", "Al2O3", "N2O5"],
    answer_en: "Al2O3",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 246)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 246)?",
    options_en: ["H2/Pd", "KMnO4", "NaBH4", "PCC"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Which is a noble gas (variant 103)",
    question_hi: "कौन सा है a noble गैस (variant 103)?",
    options_en: ["F", "O", "Ne", "N"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "Osmotic pressure π (dilute) equals (variant 469)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 469)?",
    options_en: ["CRT", "nRT", "PV", "C/V"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 450)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 450)?",
    options_en: ["Zero", "Three", "Two", "One"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 333)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 333)?",
    options_en: ["Methanol", "Ethanol", "Propanol", "Ethanoic acid"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Avogadro's number is approximately (variant 281)",
    question_hi: "Avogadro's number है approximately (variant 281)?",
    options_en: ["9.81", "6.022×10^23", "1.602×10^-19", "3.00×10^8"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Which reagent forms Grignard reagent (variant 42)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 42)?",
    options_en: ["HCl", "NaBH4", "Mg in dry ether", "LiAlH4"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Avogadro's number is approximately (variant 101)",
    question_hi: "Avogadro's number है approximately (variant 101)?",
    options_en: ["9.81", "6.022×10^23", "1.602×10^-19", "3.00×10^8"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "ΔG < 0 indicates the process is (variant 45)",
    question_hi: "ΔG < 0 indicates the process है (variant 45)?",
    options_en: [
      "At equilibrium",
      "Spontaneous",
      "Impossible",
      "Non-spontaneous",
    ],
    answer_en: "Spontaneous",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 237)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 237)?",
    options_en: ["0", "+2", "+3", "+1"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "General formula for alkanes is (variant 392)",
    question_hi: "General formula for alkanes है (variant 392)?",
    options_en: ["CnH2n+1", "CnH2n-2", "CnH2n", "CnH2n+2"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "Compressibility factor Z for ideal gas equals (variant 194)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 194)?",
    options_en: ["1", "0", "Infinity", "2"],
    answer_en: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Osmotic pressure π (dilute) equals (variant 449)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 449)?",
    options_en: ["C/V", "CRT", "PV", "nRT"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Elevation in boiling point depends on (variant 458)",
    question_hi: "Elevation in boiling point depends on (variant 458)?",
    options_en: ["Pressure only", "Temperature only", "Molality", "Molarity"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Boyle's law at constant T states PV is (variant 247)",
    question_hi: "Boyle's law at constant T states PV है (variant 247)?",
    options_en: ["Proportional to P", "Proportional to V", "Zero", "Constant"],
    answer_en: "Constant",
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
