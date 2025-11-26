const questions = [
  {
    num: 1,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 276)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 276)?",
    options_en: ["NaBH4", "PCC", "H2/Pd", "KMnO4"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Color of KMnO4 solution (variant 157)",
    question_hi: "Color of KMnO4 solution (variant 157)?",
    options_en: ["Brown", "Green", "Colorless", "Purple"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Osmotic pressure π (dilute) equals (variant 129)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 129)?",
    options_en: ["C/V", "nRT", "PV", "CRT"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 378)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 378)?",
    options_en: ["+6", "+2", "+7", "+4"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Boyle's law at constant T states PV is (variant 407)",
    question_hi: "Boyle's law at constant T states PV है (variant 407)?",
    options_en: ["Constant", "Proportional to P", "Proportional to V", "Zero"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Which block contains transition metals (variant 54)",
    question_hi: "कौन सा block contains transition metals (variant 54)?",
    options_en: ["s-block", "p-block", "d-block", "f-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Graham's law relates diffusion rates to (variant 417)",
    question_hi: "Graham's law relates diffusion rates to (variant 417)?",
    options_en: [
      "Concentration only",
      "Temperature only",
      "Directly proportional to molar mass",
      "Inverse sqrt of molar masses",
    ],
    answer_en: "Inverse sqrt of molar masses",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "SN1 reactions proceed via which intermediate (variant 350)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 350)?",
    options_en: ["Carbocation", "Carbanion", "Concerted TS", "Radical"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Group 1 metals are called (variant 392)",
    question_hi: "Group 1 metals हैं called (variant 392)?",
    options_en: [
      "Alkaline earth metals",
      "Transition metals",
      "Alkali metals",
      "Noble gases",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "Boyle's law at constant T states PV is (variant 367)",
    question_hi: "Boyle's law at constant T states PV है (variant 367)?",
    options_en: ["Proportional to P", "Constant", "Proportional to V", "Zero"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "SN1 reactions proceed via which intermediate (variant 500)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 500)?",
    options_en: ["Radical", "Carbocation", "Carbanion", "Concerted TS"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en:
      "Arrhenius equation involves activation energy and (variant 451)",
    question_hi:
      "Arrhenius equation involves activation ऊर्जा and (variant 451)?",
    options_en: ["Volume", "Pressure", "Temperature", "Concentration"],
    answer_en: "Temperature",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Which reagent is a strong oxidizing agent (variant 450)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 450)?",
    options_en: ["KMnO4", "H2", "O2", "NaCl"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Which is a good leaving group (variant 238)",
    question_hi: "कौन सा है a good leaving group (variant 238)?",
    options_en: ["Br-", "H-", "CH3-", "NH2-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "Electron configuration of O atom (ground state) (variant 160)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 160)?",
    options_en: ["1s2 2s2 2p4", "1s2 2s2 2p3", "1s2 2s1 2p4", "1s2 2s2 2p6"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Graham's law relates diffusion rates to (variant 397)",
    question_hi: "Graham's law relates diffusion rates to (variant 397)?",
    options_en: [
      "Temperature only",
      "Concentration only",
      "Inverse sqrt of molar masses",
      "Directly proportional to molar mass",
    ],
    answer_en: "Inverse sqrt of molar masses",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Critical temperature is the temperature above which gas (variant 356)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 356)?",
    options_en: [
      "Solidifies",
      "Becomes plasma",
      "Is ideal",
      "Cannot be liquefied by pressure alone",
    ],
    answer_en: "Cannot be liquefied by pressure alone",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 259)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 259)?",
    options_en: ["Cl- (spectator)", "He", "Na+", "NH3"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Hybridization of central atom in BF3 (variant 95)",
    question_hi: "Hybridization of central atom in BF3 (variant 95)?",
    options_en: ["sp", "sp3d", "sp3", "sp2"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Color of KMnO4 solution (variant 472)",
    question_hi: "Color of KMnO4 solution (variant 472)?",
    options_en: ["Colorless", "Brown", "Green", "Purple"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Which reagent is a strong oxidizing agent (variant 60)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 60)?",
    options_en: ["O2", "KMnO4", "NaCl", "H2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 281)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 281)?",
    options_en: ["Peroxides", "Acids", "Water", "Bases"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Which reagent is a strong oxidizing agent (variant 195)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 195)?",
    options_en: ["O2", "NaCl", "H2", "KMnO4"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Unit of entropy (S) is (variant 364)",
    question_hi: "Unit of entropy (S) है (variant 364)?",
    options_en: ["J K", "J mol^-1", "K mol^-1", "J K^-1 mol^-1"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Group 1 metals are called (variant 377)",
    question_hi: "Group 1 metals हैं called (variant 377)?",
    options_en: [
      "Alkaline earth metals",
      "Transition metals",
      "Noble gases",
      "Alkali metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Color of KMnO4 solution (variant 187)",
    question_hi: "Color of KMnO4 solution (variant 187)?",
    options_en: ["Purple", "Colorless", "Green", "Brown"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "Arrhenius equation involves activation energy and (variant 431)",
    question_hi:
      "Arrhenius equation involves activation ऊर्जा and (variant 431)?",
    options_en: ["Volume", "Concentration", "Pressure", "Temperature"],
    answer_en: "Temperature",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Which is a noble gas (variant 478)",
    question_hi: "कौन सा है a noble गैस (variant 478)?",
    options_en: ["F", "O", "N", "Ne"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Which is a good leaving group (variant 163)",
    question_hi: "कौन सा है a good leaving group (variant 163)?",
    options_en: ["Br-", "H-", "NH2-", "CH3-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Van't Hoff factor i accounts for (variant 290)",
    question_hi: "Van't Hoff factor i accounts for (variant 290)?",
    options_en: [
      "Temperature",
      "Pressure",
      "Viscosity",
      "Dissociation/association",
    ],
    answer_en: "Dissociation/association",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "1 mole of ideal gas at STP occupies (approx)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx)?",
    options_en: ["44.8 L", "11.2 L", "22.4 L", "1.0 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 99)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 99)?",
    options_en: ["Temperature", "Molarity", "Molality", "Pressure"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Color of KMnO4 solution (variant 307)",
    question_hi: "Color of KMnO4 solution (variant 307)?",
    options_en: ["Purple", "Brown", "Green", "Colorless"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Unit of rate constant for first order (variant 292)",
    question_hi: "Unit of rate constant for first order (variant 292)?",
    options_en: ["L mol^-1 s^-1", "s^-1", "unitless", "mol L^-1 s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Which compound is aromatic (variant 325)",
    question_hi: "कौन सा compound है aromatic (variant 325)?",
    options_en: ["Cyclohexane", "Benzene", "1,3,5-Heptatriene", "Cyclobutane"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Boyle's law at constant T states PV is (variant 67)",
    question_hi: "Boyle's law at constant T states PV है (variant 67)?",
    options_en: ["Proportional to V", "Zero", "Proportional to P", "Constant"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Half-life of first order reaction is (variant 133)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 133)?",
    options_en: [
      "Zero",
      "Proportional to initial conc.",
      "Infinite",
      "Independent of initial concentration",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 323)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 323)?",
    options_en: ["CO2", "O2", "Cl2", "H2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "General formula for alkanes is (variant 347)",
    question_hi: "General formula for alkanes है (variant 347)?",
    options_en: ["CnH2n+1", "CnH2n", "CnH2n+2", "CnH2n-2"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Ideal gas equation is (variant 283)",
    question_hi: "Ideal गैस equation है (variant 283)?",
    options_en: ["PV = nRT", "PV = RT", "P/V = nR", "P + V = nRT"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Hybridization of central atom in BF3 (variant 110)",
    question_hi: "Hybridization of central atom in BF3 (variant 110)?",
    options_en: ["sp2", "sp", "sp3d", "sp3"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "SN1 reactions proceed via which intermediate (variant 215)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 215)?",
    options_en: ["Concerted TS", "Carbocation", "Carbanion", "Radical"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Which is a good leaving group (variant 493)",
    question_hi: "कौन सा है a good leaving group (variant 493)?",
    options_en: ["H-", "NH2-", "Br-", "CH3-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Which reagent is a strong oxidizing agent (variant 360)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 360)?",
    options_en: ["H2", "NaCl", "KMnO4", "O2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Which is an example of a conjugated system (variant 53)",
    question_hi: "कौन सा है an example of a conjugated system (variant 53)?",
    options_en: ["Butane", "Butadiene", "Cyclohexane", "Methane"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Which reagent is a strong oxidizing agent (variant 435)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 435)?",
    options_en: ["KMnO4", "O2", "NaCl", "H2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "Which reagent is a strong oxidizing agent (variant 90)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 90)?",
    options_en: ["NaCl", "KMnO4", "H2", "O2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Which reaction converts an alkene to an alkane (variant 79)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 79)?",
    options_en: [
      "Dehydration",
      "Dehydrogenation",
      "Halogenation",
      "Hydrogenation",
    ],
    answer_en: "Hydrogenation",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Unit of rate constant for first order (variant 92)",
    question_hi: "Unit of rate constant for first order (variant 92)?",
    options_en: ["mol L^-1 s^-1", "unitless", "s^-1", "L mol^-1 s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Which oxide is amphoteric (variant 216)",
    question_hi: "कौन सा oxide है amphoteric (variant 216)?",
    options_en: ["CO2", "Al2O3", "SO3", "N2O5"],
    answer_en: "Al2O3",
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
