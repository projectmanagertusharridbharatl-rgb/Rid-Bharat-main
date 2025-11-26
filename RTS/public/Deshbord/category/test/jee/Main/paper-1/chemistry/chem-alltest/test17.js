const questions = [
  {
    num: 1,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 176)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 176)?",
    options_en: ["Bases", "Acids", "Water", "Peroxides"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 228)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 228)?",
    options_en: ["+6", "+7", "+4", "+2"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Which oxide is amphoteric (variant 66)",
    question_hi: "कौन सा oxide है amphoteric (variant 66)?",
    options_en: ["Al2O3", "N2O5", "SO3", "CO2"],
    answer_en: "Al2O3",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Which reaction converts an alkene to an alkane (variant 64)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 64)?",
    options_en: [
      "Hydrogenation",
      "Halogenation",
      "Dehydrogenation",
      "Dehydration",
    ],
    answer_en: "Hydrogenation",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Which reagent forms Grignard reagent (variant 147)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 147)?",
    options_en: ["NaBH4", "HCl", "Mg in dry ether", "LiAlH4"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "Which reaction increases oxidation state of carbon (variant 164)",
    question_hi:
      "कौन सा अभिक्रिया increases oxidation state of carbon (variant 164)?",
    options_en: [
      "Substitution without oxidation",
      "Reduction",
      "Oxidation",
      "Isomerization",
    ],
    answer_en: "Oxidation",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "Which reaction increases oxidation state of carbon (variant 494)",
    question_hi:
      "कौन सा अभिक्रिया increases oxidation state of carbon (variant 494)?",
    options_en: [
      "Substitution without oxidation",
      "Reduction",
      "Oxidation",
      "Isomerization",
    ],
    answer_en: "Oxidation",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Which compound is aromatic (variant 115)",
    question_hi: "कौन सा compound है aromatic (variant 115)?",
    options_en: ["Cyclohexane", "Cyclobutane", "1,3,5-Heptatriene", "Benzene"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 183)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 183)?",
    options_en: ["+4", "+2", "+6", "+7"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "Periodic table: which element has highest electronegativity among these (variant 121)",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these (variant 121)?",
    options_en: ["N", "F", "O", "Cl"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "SN1 reactions proceed via which intermediate (variant 110)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 110)?",
    options_en: ["Concerted TS", "Radical", "Carbanion", "Carbocation"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Which functional group is present in ethanol (variant 376)",
    question_hi: "कौन सा functional group है present in ethanol (variant 376)?",
    options_en: [
      "Carbonyl (C=O)",
      "Hydroxyl (–OH)",
      "Amino (–NH2)",
      "Carboxyl (–COOH)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Which is a good leaving group",
    question_hi: "कौन सा है a good leaving group?",
    options_en: ["NH2-", "H-", "Br-", "CH3-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Bohr model applies best to which atom (variant 284)",
    question_hi: "Bohr model applies best to which atom (variant 284)?",
    options_en: ["Carbon", "Hydrogen", "Helium", "Oxygen"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Which is a good leaving group (variant 103)",
    question_hi: "कौन सा है a good leaving group (variant 103)?",
    options_en: ["CH3-", "Br-", "H-", "NH2-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Unit of entropy (S) is (variant 404)",
    question_hi: "Unit of entropy (S) है (variant 404)?",
    options_en: ["J mol^-1", "J K", "K mol^-1", "J K^-1 mol^-1"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Unit of rate constant for first order (variant 272)",
    question_hi: "Unit of rate constant for first order (variant 272)?",
    options_en: ["unitless", "mol L^-1 s^-1", "s^-1", "L mol^-1 s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Which reaction increases oxidation state of carbon (variant 374)",
    question_hi:
      "कौन सा अभिक्रिया increases oxidation state of carbon (variant 374)?",
    options_en: [
      "Oxidation",
      "Reduction",
      "Isomerization",
      "Substitution without oxidation",
    ],
    answer_en: "Oxidation",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en:
      "Critical temperature is the temperature above which gas (variant 496)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 496)?",
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
    num: 20,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 206)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 206)?",
    options_en: ["Endothermic", "Adiabatic", "Exothermic", "Isothermal"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Unit of rate constant for first order (variant 252)",
    question_hi: "Unit of rate constant for first order (variant 252)?",
    options_en: ["L mol^-1 s^-1", "s^-1", "mol L^-1 s^-1", "unitless"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 138)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 138)?",
    options_en: ["Propanol", "Ethanol", "Methanol", "Ethanoic acid"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Graham's law relates diffusion rates to (variant 177)",
    question_hi: "Graham's law relates diffusion rates to (variant 177)?",
    options_en: [
      "Temperature only",
      "Concentration only",
      "Directly proportional to molar mass",
      "Inverse sqrt of molar masses",
    ],
    answer_en: "Inverse sqrt of molar masses",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Elevation in boiling point depends on (variant 498)",
    question_hi: "Elevation in boiling point depends on (variant 498)?",
    options_en: ["Molarity", "Pressure only", "Temperature only", "Molality"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 150)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 150)?",
    options_en: ["Zero", "Two", "One", "Three"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Joule-Thomson coefficient for ideal gas is (variant 275)",
    question_hi: "Joule-Thomson coefficient for ideal गैस है (variant 275)?",
    options_en: ["Infinite", "Positive", "Negative", "Zero"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "SN1 reactions proceed via which intermediate (variant 425)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 425)?",
    options_en: ["Carbanion", "Radical", "Concerted TS", "Carbocation"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 495)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 495)?",
    options_en: ["One", "Three", "Zero", "Two"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 273)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 273)?",
    options_en: ["+7", "+2", "+4", "+6"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Hybridization of central atom in BF3 (variant 35)",
    question_hi: "Hybridization of central atom in BF3 (variant 35)?",
    options_en: ["sp", "sp3d", "sp2", "sp3"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Raoult's law applies to (variant 468)",
    question_hi: "Raoult's law applies to (variant 468)?",
    options_en: [
      "Colloids",
      "Pure solvents",
      "Non-ideal solutions",
      "Ideal solutions",
    ],
    answer_en: "Ideal solutions",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "Which reagent forms Grignard reagent (variant 102)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 102)?",
    options_en: ["LiAlH4", "HCl", "NaBH4", "Mg in dry ether"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Avogadro's number is approximately (variant 461)",
    question_hi: "Avogadro's number है approximately (variant 461)?",
    options_en: ["9.81", "3.00×10^8", "6.022×10^23", "1.602×10^-19"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 132)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 132)?",
    options_en: ["0", "+2", "+1", "+3"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "Critical temperature is the temperature above which gas (variant 276)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 276)?",
    options_en: [
      "Is ideal",
      "Becomes plasma",
      "Cannot be liquefied by pressure alone",
      "Solidifies",
    ],
    answer_en: "Cannot be liquefied by pressure alone",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Which block contains transition metals (variant 459)",
    question_hi: "कौन सा block contains transition metals (variant 459)?",
    options_en: ["d-block", "p-block", "f-block", "s-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Bond enthalpy usually refers to breaking of (variant 120)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 120)?",
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
    num: 38,
    question_en: "Unit of entropy (S) is (variant 44)",
    question_hi: "Unit of entropy (S) है (variant 44)?",
    options_en: ["J K", "K mol^-1", "J mol^-1", "J K^-1 mol^-1"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Which is an example of a conjugated system (variant 68)",
    question_hi: "कौन सा है an example of a conjugated system (variant 68)?",
    options_en: ["Butane", "Butadiene", "Methane", "Cyclohexane"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Markovnikov rule applies to addition of HX to (variant 264)",
    question_hi: "Markovnikov rule applies to addition of HX to (variant 264)?",
    options_en: ["Alkanes", "Aromatic rings", "Alkynes always", "Alkenes"],
    answer_en: "Alkenes",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 318)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 318)?",
    options_en: ["+4", "+7", "+6", "+2"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Benzene undergoes which type of reaction (variant 412)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 412)?",
    options_en: [
      "Elimination",
      "Nucleophilic substitution",
      "Electrophilic aromatic substitution",
      "Addition",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Which functional group is present in ethanol (variant 481)",
    question_hi: "कौन सा functional group है present in ethanol (variant 481)?",
    options_en: [
      "Carbonyl (C=O)",
      "Amino (–NH2)",
      "Carboxyl (–COOH)",
      "Hydroxyl (–OH)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en:
      "Which reaction increases oxidation state of carbon (variant 464)",
    question_hi:
      "कौन सा अभिक्रिया increases oxidation state of carbon (variant 464)?",
    options_en: [
      "Reduction",
      "Substitution without oxidation",
      "Isomerization",
      "Oxidation",
    ],
    answer_en: "Oxidation",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Bohr model applies best to which atom (variant 359)",
    question_hi: "Bohr model applies best to which atom (variant 359)?",
    options_en: ["Hydrogen", "Carbon", "Helium", "Oxygen"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Which functional group is present in ethanol (variant 211)",
    question_hi: "कौन सा functional group है present in ethanol (variant 211)?",
    options_en: [
      "Carboxyl (–COOH)",
      "Hydroxyl (–OH)",
      "Amino (–NH2)",
      "Carbonyl (C=O)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "SN1 reactions proceed via which intermediate (variant 230)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 230)?",
    options_en: ["Carbocation", "Carbanion", "Radical", "Concerted TS"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Benzene undergoes which type of reaction (variant 487)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 487)?",
    options_en: [
      "Addition",
      "Elimination",
      "Electrophilic aromatic substitution",
      "Nucleophilic substitution",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Hybridization of central atom in BF3 (variant 500)",
    question_hi: "Hybridization of central atom in BF3 (variant 500)?",
    options_en: ["sp3d", "sp", "sp2", "sp3"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 334)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 334)?",
    options_en: ["Na+", "Cl- (spectator)", "He", "NH3"],
    answer_en: "NH3",
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
