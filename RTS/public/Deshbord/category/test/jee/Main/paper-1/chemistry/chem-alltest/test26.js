const questions = [
  {
    num: 1,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 179)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 179)?",
    options_en: ["Temperature", "Molarity", "Pressure", "Molality"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Raoult's law applies to (variant 188)",
    question_hi: "Raoult's law applies to (variant 188)?",
    options_en: [
      "Non-ideal solutions",
      "Colloids",
      "Pure solvents",
      "Ideal solutions",
    ],
    answer_en: "Ideal solutions",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Joule-Thomson coefficient for ideal gas is (variant 35)",
    question_hi: "Joule-Thomson coefficient for ideal गैस है (variant 35)?",
    options_en: ["Negative", "Positive", "Zero", "Infinite"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 213)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 213)?",
    options_en: ["+6", "+7", "+4", "+2"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Hybridization of central atom in BF3 (variant 170)",
    question_hi: "Hybridization of central atom in BF3 (variant 170)?",
    options_en: ["sp3", "sp2", "sp", "sp3d"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 49)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 49)?",
    options_en: ["NH3", "Na+", "Cl- (spectator)", "He"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Which oxide is amphoteric (variant 96)",
    question_hi: "कौन सा oxide है amphoteric (variant 96)?",
    options_en: ["Al2O3", "CO2", "SO3", "N2O5"],
    answer_en: "Al2O3",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Half-life of first order reaction is (variant 253)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 253)?",
    options_en: [
      "Infinite",
      "Zero",
      "Independent of initial concentration",
      "Proportional to initial conc.",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Which functional group is present in ethanol (variant 76)",
    question_hi: "कौन सा functional group है present in ethanol (variant 76)?",
    options_en: [
      "Amino (–NH2)",
      "Carbonyl (C=O)",
      "Carboxyl (–COOH)",
      "Hydroxyl (–OH)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "Which is a good leaving group (variant 73)",
    question_hi: "कौन सा है a good leaving group (variant 73)?",
    options_en: ["Br-", "CH3-", "NH2-", "H-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Group 1 metals are called (variant 317)",
    question_hi: "Group 1 metals हैं called (variant 317)?",
    options_en: [
      "Noble gases",
      "Transition metals",
      "Alkali metals",
      "Alkaline earth metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 402)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 402)?",
    options_en: ["+2", "0", "+1", "+3"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 109)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 109)?",
    options_en: ["NH3", "Na+", "Cl- (spectator)", "He"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Which reagent is a strong oxidizing agent (variant 165)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 165)?",
    options_en: ["KMnO4", "H2", "NaCl", "O2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Which reaction converts an alkene to an alkane (variant 289)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 289)?",
    options_en: [
      "Halogenation",
      "Dehydration",
      "Hydrogenation",
      "Dehydrogenation",
    ],
    answer_en: "Hydrogenation",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Which is a noble gas (variant 148)",
    question_hi: "कौन सा है a noble गैस (variant 148)?",
    options_en: ["N", "F", "O", "Ne"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 30)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 30)?",
    options_en: ["One", "Two", "Zero", "Three"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "ΔG < 0 indicates the process is (variant 305)",
    question_hi: "ΔG < 0 indicates the process है (variant 305)?",
    options_en: [
      "Impossible",
      "Non-spontaneous",
      "At equilibrium",
      "Spontaneous",
    ],
    answer_en: "Spontaneous",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Joule-Thomson coefficient for ideal gas is (variant 115)",
    question_hi: "Joule-Thomson coefficient for ideal गैस है (variant 115)?",
    options_en: ["Positive", "Negative", "Zero", "Infinite"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Avogadro's number is approximately (variant 381)",
    question_hi: "Avogadro's number है approximately (variant 381)?",
    options_en: ["6.022×10^23", "3.00×10^8", "1.602×10^-19", "9.81"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Which is a good leaving group (variant 208)",
    question_hi: "कौन सा है a good leaving group (variant 208)?",
    options_en: ["NH2-", "CH3-", "Br-", "H-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Raoult's law applies to (variant 268)",
    question_hi: "Raoult's law applies to (variant 268)?",
    options_en: [
      "Non-ideal solutions",
      "Ideal solutions",
      "Pure solvents",
      "Colloids",
    ],
    answer_en: "Ideal solutions",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Osmotic pressure π (dilute) equals (variant 29)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 29)?",
    options_en: ["PV", "CRT", "nRT", "C/V"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Osmotic pressure π (dilute) equals (variant 209)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 209)?",
    options_en: ["PV", "nRT", "CRT", "C/V"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 105)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 105)?",
    options_en: ["One", "Three", "Zero", "Two"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Graham's law relates diffusion rates to (variant 457)",
    question_hi: "Graham's law relates diffusion rates to (variant 457)?",
    options_en: [
      "Inverse sqrt of molar masses",
      "Temperature only",
      "Concentration only",
      "Directly proportional to molar mass",
    ],
    answer_en: "Inverse sqrt of molar masses",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "General formula for alkanes is (variant 407)",
    question_hi: "General formula for alkanes है (variant 407)?",
    options_en: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnH2n+1"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "SN1 reactions proceed via which intermediate (variant 185)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 185)?",
    options_en: ["Carbanion", "Carbocation", "Radical", "Concerted TS"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Hybridization of central atom in BF3 (variant 140)",
    question_hi: "Hybridization of central atom in BF3 (variant 140)?",
    options_en: ["sp3d", "sp3", "sp2", "sp"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 398)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 398)?",
    options_en: ["H2", "O2", "Cl2", "CO2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 296)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 296)?",
    options_en: ["Water", "Peroxides", "Bases", "Acids"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 363)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 363)?",
    options_en: ["Ethanoic acid", "Methanol", "Ethanol", "Propanol"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Which is a noble gas (variant 403)",
    question_hi: "कौन सा है a noble गैस (variant 403)?",
    options_en: ["F", "O", "Ne", "N"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Boyle's law at constant T states PV is (variant 387)",
    question_hi: "Boyle's law at constant T states PV है (variant 387)?",
    options_en: ["Constant", "Zero", "Proportional to P", "Proportional to V"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "Critical temperature is the temperature above which gas (variant 236)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 236)?",
    options_en: [
      "Solidifies",
      "Is ideal",
      "Becomes plasma",
      "Cannot be liquefied by pressure alone",
    ],
    answer_en: "Cannot be liquefied by pressure alone",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 113)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 113)?",
    options_en: ["O2", "Cl2", "H2", "CO2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Which reagent is a strong oxidizing agent (variant 465)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 465)?",
    options_en: ["H2", "O2", "KMnO4", "NaCl"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 326)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 326)?",
    options_en: ["Acids", "Peroxides", "Water", "Bases"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 458)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 458)?",
    options_en: ["O2", "H2", "Cl2", "CO2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Which is a noble gas (variant 43)",
    question_hi: "कौन सा है a noble गैस (variant 43)?",
    options_en: ["N", "O", "F", "Ne"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 78)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 78)?",
    options_en: ["Propanol", "Ethanoic acid", "Ethanol", "Methanol"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 207)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 207)?",
    options_en: ["+3", "+2", "0", "+1"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "Critical temperature is the temperature above which gas (variant 416)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 416)?",
    options_en: [
      "Cannot be liquefied by pressure alone",
      "Is ideal",
      "Becomes plasma",
      "Solidifies",
    ],
    answer_en: "Cannot be liquefied by pressure alone",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Color of KMnO4 solution (variant 202)",
    question_hi: "Color of KMnO4 solution (variant 202)?",
    options_en: ["Purple", "Colorless", "Green", "Brown"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 266)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 266)?",
    options_en: ["Exothermic", "Adiabatic", "Endothermic", "Isothermal"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Bond enthalpy usually refers to breaking of (variant 100)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 100)?",
    options_en: [
      "1 mole of liquid bonds",
      "1 mole of gaseous bonds",
      "1 mole of ionic pairs",
      "1 mole of solid bonds",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 291)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 291)?",
    options_en: ["H2/Pd", "PCC", "KMnO4", "NaBH4"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 81)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 81)?",
    options_en: ["NaBH4", "H2/Pd", "KMnO4", "PCC"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 168)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 168)?",
    options_en: ["+7", "+2", "+6", "+4"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 306)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 306)?",
    options_en: ["Exothermic", "Endothermic", "Adiabatic", "Isothermal"],
    answer_en: "Exothermic",
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
