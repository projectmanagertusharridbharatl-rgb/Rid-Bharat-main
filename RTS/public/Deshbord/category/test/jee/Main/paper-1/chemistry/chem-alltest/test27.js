const questions = [
  {
    num: 1,
    question_en: "Which is an example of a conjugated system (variant 278)",
    question_hi: "कौन सा है an example of a conjugated system (variant 278)?",
    options_en: ["Cyclohexane", "Methane", "Butadiene", "Butane"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Unit of rate constant for first order (variant 52)",
    question_hi: "Unit of rate constant for first order (variant 52)?",
    options_en: ["s^-1", "unitless", "mol L^-1 s^-1", "L mol^-1 s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 459)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 459)?",
    options_en: ["Temperature", "Pressure", "Molality", "Molarity"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 252)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 252)?",
    options_en: ["+2", "+1", "+3", "0"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Van't Hoff factor i accounts for (variant 430)",
    question_hi: "Van't Hoff factor i accounts for (variant 430)?",
    options_en: [
      "Dissociation/association",
      "Pressure",
      "Viscosity",
      "Temperature",
    ],
    answer_en: "Dissociation/association",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "ΔG < 0 indicates the process is (variant 105)",
    question_hi: "ΔG < 0 indicates the process है (variant 105)?",
    options_en: [
      "Spontaneous",
      "Non-spontaneous",
      "Impossible",
      "At equilibrium",
    ],
    answer_en: "Spontaneous",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 357)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 357)?",
    options_en: ["+1", "0", "+3", "+2"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Which metal is liquid at room temperature (variant 131)",
    question_hi: "कौन सा metal है liquid at room तापमान (variant 131)?",
    options_en: ["Na", "Al", "Fe", "Hg"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Which functional group is present in ethanol (variant 31)",
    question_hi: "कौन सा functional group है present in ethanol (variant 31)?",
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
    num: 10,
    question_en: "Boyle's law at constant T states PV is (variant 27)",
    question_hi: "Boyle's law at constant T states PV है (variant 27)?",
    options_en: ["Zero", "Constant", "Proportional to V", "Proportional to P"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 424)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 424)?",
    options_en: ["NH3", "He", "Cl- (spectator)", "Na+"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en:
      "Arrhenius equation involves activation energy and (variant 291)",
    question_hi:
      "Arrhenius equation involves activation ऊर्जा and (variant 291)?",
    options_en: ["Temperature", "Volume", "Pressure", "Concentration"],
    answer_en: "Temperature",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "1 mole of ideal gas at STP occupies (approx) (variant 442)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx) (variant 442)?",
    options_en: ["1.0 L", "11.2 L", "22.4 L", "44.8 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Compressibility factor Z for ideal gas equals (variant 254)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 254)?",
    options_en: ["Infinity", "0", "1", "2"],
    answer_en: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Bond enthalpy usually refers to breaking of (variant 400)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 400)?",
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
    num: 16,
    question_en: "Hybridization of central atom in BF3 (variant 80)",
    question_hi: "Hybridization of central atom in BF3 (variant 80)?",
    options_en: ["sp3", "sp3d", "sp2", "sp"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 26)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 26)?",
    options_en: ["Acids", "Water", "Bases", "Peroxides"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "Raoult's law applies to (variant 228)",
    question_hi: "Raoult's law applies to (variant 228)?",
    options_en: [
      "Non-ideal solutions",
      "Ideal solutions",
      "Colloids",
      "Pure solvents",
    ],
    answer_en: "Ideal solutions",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Which is an example of a conjugated system (variant 188)",
    question_hi: "कौन सा है an example of a conjugated system (variant 188)?",
    options_en: ["Butane", "Cyclohexane", "Methane", "Butadiene"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Unit of rate constant for first order",
    question_hi: "Unit of rate constant for first order?",
    options_en: ["mol L^-1 s^-1", "unitless", "L mol^-1 s^-1", "s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Half-life of first order reaction is (variant 213)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 213)?",
    options_en: [
      "Zero",
      "Independent of initial concentration",
      "Infinite",
      "Proportional to initial conc.",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 282)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 282)?",
    options_en: ["+1", "+3", "0", "+2"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Van't Hoff factor i accounts for (variant 30)",
    question_hi: "Van't Hoff factor i accounts for (variant 30)?",
    options_en: [
      "Viscosity",
      "Pressure",
      "Temperature",
      "Dissociation/association",
    ],
    answer_en: "Dissociation/association",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Group 1 metals are called (variant 407)",
    question_hi: "Group 1 metals हैं called (variant 407)?",
    options_en: [
      "Alkali metals",
      "Alkaline earth metals",
      "Noble gases",
      "Transition metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 423)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 423)?",
    options_en: ["+7", "+4", "+6", "+2"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Which is a good leaving group (variant 448)",
    question_hi: "कौन सा है a good leaving group (variant 448)?",
    options_en: ["NH2-", "Br-", "CH3-", "H-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "Which is a noble gas (variant 388)",
    question_hi: "कौन सा है a noble गैस (variant 388)?",
    options_en: ["F", "N", "O", "Ne"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "1 mole of ideal gas at STP occupies (approx) (variant 22)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx) (variant 22)?",
    options_en: ["44.8 L", "11.2 L", "1.0 L", "22.4 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Elevation in boiling point depends on (variant 418)",
    question_hi: "Elevation in boiling point depends on (variant 418)?",
    options_en: ["Pressure only", "Molarity", "Molality", "Temperature only"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 315)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 315)?",
    options_en: ["One", "Two", "Three", "Zero"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Van't Hoff factor i accounts for (variant 310)",
    question_hi: "Van't Hoff factor i accounts for (variant 310)?",
    options_en: [
      "Viscosity",
      "Pressure",
      "Temperature",
      "Dissociation/association",
    ],
    answer_en: "Dissociation/association",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "Hybridization of central atom in BF3 (variant 125)",
    question_hi: "Hybridization of central atom in BF3 (variant 125)?",
    options_en: ["sp", "sp2", "sp3", "sp3d"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 101)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 101)?",
    options_en: ["Acids", "Bases", "Water", "Peroxides"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "SN1 reactions proceed via which intermediate (variant 65)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 65)?",
    options_en: ["Concerted TS", "Carbanion", "Radical", "Carbocation"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Avogadro's number is approximately (variant 21)",
    question_hi: "Avogadro's number है approximately (variant 21)?",
    options_en: ["9.81", "1.602×10^-19", "3.00×10^8", "6.022×10^23"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Which reagent forms Grignard reagent (variant 72)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 72)?",
    options_en: ["Mg in dry ether", "LiAlH4", "HCl", "NaBH4"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Markovnikov rule applies to addition of HX to (variant 474)",
    question_hi: "Markovnikov rule applies to addition of HX to (variant 474)?",
    options_en: ["Alkanes", "Aromatic rings", "Alkynes always", "Alkenes"],
    answer_en: "Alkenes",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 26)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 26)?",
    options_en: ["Adiabatic", "Endothermic", "Isothermal", "Exothermic"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Which reagent forms Grignard reagent (variant 222)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 222)?",
    options_en: ["LiAlH4", "Mg in dry ether", "HCl", "NaBH4"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Which reaction converts an alkene to an alkane (variant 274)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 274)?",
    options_en: [
      "Dehydrogenation",
      "Hydrogenation",
      "Dehydration",
      "Halogenation",
    ],
    answer_en: "Hydrogenation",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 446)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 446)?",
    options_en: ["Acids", "Water", "Bases", "Peroxides"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 143)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 143)?",
    options_en: ["Cl2", "CO2", "H2", "O2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Benzene undergoes which type of reaction (variant 307)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 307)?",
    options_en: [
      "Electrophilic aromatic substitution",
      "Elimination",
      "Nucleophilic substitution",
      "Addition",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Unit of rate constant for first order (variant 332)",
    question_hi: "Unit of rate constant for first order (variant 332)?",
    options_en: ["unitless", "L mol^-1 s^-1", "s^-1", "mol L^-1 s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Benzene undergoes which type of reaction (variant 97)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 97)?",
    options_en: [
      "Nucleophilic substitution",
      "Electrophilic aromatic substitution",
      "Elimination",
      "Addition",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Boyle's law at constant T states PV is (variant 467)",
    question_hi: "Boyle's law at constant T states PV है (variant 467)?",
    options_en: ["Zero", "Constant", "Proportional to V", "Proportional to P"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Periodic table: which element has highest electronegativity among these (variant 226)",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these (variant 226)?",
    options_en: ["O", "Cl", "N", "F"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Which metal is liquid at room temperature (variant 386)",
    question_hi: "कौन सा metal है liquid at room तापमान (variant 386)?",
    options_en: ["Na", "Al", "Hg", "Fe"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "1 mole of ideal gas at STP occupies (approx) (variant 62)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx) (variant 62)?",
    options_en: ["11.2 L", "22.4 L", "1.0 L", "44.8 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Which oxide is amphoteric (variant 381)",
    question_hi: "कौन सा oxide है amphoteric (variant 381)?",
    options_en: ["SO3", "N2O5", "Al2O3", "CO2"],
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
