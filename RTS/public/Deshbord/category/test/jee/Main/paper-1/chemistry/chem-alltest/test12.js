const questions = [
  {
    num: 1,
    question_en: "Color of KMnO4 solution (variant 112)",
    question_hi: "Color of KMnO4 solution (variant 112)?",
    options_en: ["Brown", "Purple", "Colorless", "Green"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Raoult's law applies to (variant 428)",
    question_hi: "Raoult's law applies to (variant 428)?",
    options_en: [
      "Ideal solutions",
      "Pure solvents",
      "Non-ideal solutions",
      "Colloids",
    ],
    answer_en: "Ideal solutions",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Color of KMnO4 solution (variant 457)",
    question_hi: "Color of KMnO4 solution (variant 457)?",
    options_en: ["Brown", "Colorless", "Green", "Purple"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Color of KMnO4 solution (variant 352)",
    question_hi: "Color of KMnO4 solution (variant 352)?",
    options_en: ["Purple", "Green", "Brown", "Colorless"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Group 1 metals are called (variant 347)",
    question_hi: "Group 1 metals हैं called (variant 347)?",
    options_en: [
      "Alkaline earth metals",
      "Noble gases",
      "Transition metals",
      "Alkali metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Color of KMnO4 solution (variant 127)",
    question_hi: "Color of KMnO4 solution (variant 127)?",
    options_en: ["Purple", "Brown", "Colorless", "Green"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Elevation in boiling point depends on (variant 338)",
    question_hi: "Elevation in boiling point depends on (variant 338)?",
    options_en: ["Pressure only", "Temperature only", "Molarity", "Molality"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "Periodic table: which element has highest electronegativity among these",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these?",
    options_en: ["O", "F", "N", "Cl"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Benzene undergoes which type of reaction (variant 397)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 397)?",
    options_en: [
      "Nucleophilic substitution",
      "Elimination",
      "Addition",
      "Electrophilic aromatic substitution",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 96)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 96)?",
    options_en: ["PCC", "KMnO4", "NaBH4", "H2/Pd"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "SN1 reactions proceed via which intermediate (variant 455)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 455)?",
    options_en: ["Concerted TS", "Carbanion", "Radical", "Carbocation"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Unit of rate constant for first order (variant 172)",
    question_hi: "Unit of rate constant for first order (variant 172)?",
    options_en: ["s^-1", "L mol^-1 s^-1", "mol L^-1 s^-1", "unitless"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Joule-Thomson coefficient for ideal gas is (variant 335)",
    question_hi: "Joule-Thomson coefficient for ideal गैस है (variant 335)?",
    options_en: ["Positive", "Negative", "Infinite", "Zero"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 297)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 297)?",
    options_en: ["+1", "+3", "+2", "0"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 236)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 236)?",
    options_en: ["Water", "Acids", "Peroxides", "Bases"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Bohr model applies best to which atom (variant 104)",
    question_hi: "Bohr model applies best to which atom (variant 104)?",
    options_en: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Which reagent is a strong oxidizing agent (variant 270)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 270)?",
    options_en: ["KMnO4", "NaCl", "H2", "O2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "Which functional group is present in ethanol (variant 496)",
    question_hi: "कौन सा functional group है present in ethanol (variant 496)?",
    options_en: [
      "Amino (–NH2)",
      "Carbonyl (C=O)",
      "Hydroxyl (–OH)",
      "Carboxyl (–COOH)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Raoult's law applies to (variant 28)",
    question_hi: "Raoult's law applies to (variant 28)?",
    options_en: [
      "Ideal solutions",
      "Pure solvents",
      "Colloids",
      "Non-ideal solutions",
    ],
    answer_en: "Ideal solutions",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Which compound is aromatic (variant 250)",
    question_hi: "कौन सा compound है aromatic (variant 250)?",
    options_en: ["Cyclobutane", "Cyclohexane", "Benzene", "1,3,5-Heptatriene"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Bohr model applies best to which atom (variant 299)",
    question_hi: "Bohr model applies best to which atom (variant 299)?",
    options_en: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Group 1 metals are called (variant 302)",
    question_hi: "Group 1 metals हैं called (variant 302)?",
    options_en: [
      "Transition metals",
      "Noble gases",
      "Alkali metals",
      "Alkaline earth metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Which functional group is present in ethanol (variant 316)",
    question_hi: "कौन सा functional group है present in ethanol (variant 316)?",
    options_en: [
      "Hydroxyl (–OH)",
      "Carbonyl (C=O)",
      "Carboxyl (–COOH)",
      "Amino (–NH2)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Osmotic pressure π (dilute) equals (variant 169)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 169)?",
    options_en: ["CRT", "C/V", "nRT", "PV"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Graham's law relates diffusion rates to (variant 157)",
    question_hi: "Graham's law relates diffusion rates to (variant 157)?",
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
    num: 26,
    question_en: "Which functional group is present in ethanol (variant 196)",
    question_hi: "कौन सा functional group है present in ethanol (variant 196)?",
    options_en: [
      "Amino (–NH2)",
      "Carboxyl (–COOH)",
      "Hydroxyl (–OH)",
      "Carbonyl (C=O)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 279)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 279)?",
    options_en: ["Pressure", "Molarity", "Molality", "Temperature"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Which is a good leaving group (variant 373)",
    question_hi: "कौन सा है a good leaving group (variant 373)?",
    options_en: ["CH3-", "Br-", "NH2-", "H-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 417)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 417)?",
    options_en: ["+2", "+3", "+1", "0"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Benzene undergoes which type of reaction (variant 442)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 442)?",
    options_en: [
      "Addition",
      "Nucleophilic substitution",
      "Electrophilic aromatic substitution",
      "Elimination",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Which is a noble gas (variant 238)",
    question_hi: "कौन सा है a noble गैस (variant 238)?",
    options_en: ["N", "Ne", "O", "F"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "Which functional group is present in ethanol (variant 121)",
    question_hi: "कौन सा functional group है present in ethanol (variant 121)?",
    options_en: [
      "Carboxyl (–COOH)",
      "Amino (–NH2)",
      "Hydroxyl (–OH)",
      "Carbonyl (C=O)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Hybridization of central atom in BF3 (variant 425)",
    question_hi: "Hybridization of central atom in BF3 (variant 425)?",
    options_en: ["sp3d", "sp3", "sp", "sp2"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "General formula for alkanes is (variant 452)",
    question_hi: "General formula for alkanes है (variant 452)?",
    options_en: ["CnH2n+1", "CnH2n+2", "CnH2n", "CnH2n-2"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Bond enthalpy usually refers to breaking of (variant 180)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 180)?",
    options_en: [
      "1 mole of ionic pairs",
      "1 mole of gaseous bonds",
      "1 mole of solid bonds",
      "1 mole of liquid bonds",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 124)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 124)?",
    options_en: ["He", "Na+", "NH3", "Cl- (spectator)"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 426)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 426)?",
    options_en: ["Isothermal", "Endothermic", "Exothermic", "Adiabatic"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "Which reaction converts an alkene to an alkane (variant 334)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 334)?",
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
    num: 39,
    question_en: "Which is an example of a conjugated system (variant 218)",
    question_hi: "कौन सा है an example of a conjugated system (variant 218)?",
    options_en: ["Methane", "Cyclohexane", "Butane", "Butadiene"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Which reagent is a strong oxidizing agent (variant 240)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 240)?",
    options_en: ["NaCl", "O2", "KMnO4", "H2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 308)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 308)?",
    options_en: ["Cl2", "O2", "H2", "CO2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "Critical temperature is the temperature above which gas (variant 176)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 176)?",
    options_en: [
      "Cannot be liquefied by pressure alone",
      "Becomes plasma",
      "Is ideal",
      "Solidifies",
    ],
    answer_en: "Cannot be liquefied by pressure alone",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Which metal is liquid at room temperature (variant 281)",
    question_hi: "कौन सा metal है liquid at room तापमान (variant 281)?",
    options_en: ["Al", "Fe", "Hg", "Na"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Bond enthalpy usually refers to breaking of (variant 280)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 280)?",
    options_en: [
      "1 mole of solid bonds",
      "1 mole of ionic pairs",
      "1 mole of gaseous bonds",
      "1 mole of liquid bonds",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 431)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 431)?",
    options_en: ["Bases", "Water", "Peroxides", "Acids"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 201)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 201)?",
    options_en: ["NaBH4", "KMnO4", "PCC", "H2/Pd"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "Hybridization of central atom in BF3 (variant 440)",
    question_hi: "Hybridization of central atom in BF3 (variant 440)?",
    options_en: ["sp3d", "sp2", "sp3", "sp"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "Periodic table: which element has highest electronegativity among these (variant 196)",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these (variant 196)?",
    options_en: ["O", "F", "N", "Cl"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Ideal gas equation is (variant 243)",
    question_hi: "Ideal गैस equation है (variant 243)?",
    options_en: ["P/V = nR", "PV = RT", "PV = nRT", "P + V = nRT"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Which is a noble gas (variant 328)",
    question_hi: "कौन सा है a noble गैस (variant 328)?",
    options_en: ["F", "Ne", "N", "O"],
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
