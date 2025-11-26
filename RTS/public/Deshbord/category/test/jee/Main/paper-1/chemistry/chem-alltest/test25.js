const questions = [
  {
    num: 1,
    question_en: "Avogadro's number is approximately (variant 41)",
    question_hi: "Avogadro's number है approximately (variant 41)?",
    options_en: ["6.022×10^23", "1.602×10^-19", "9.81", "3.00×10^8"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "Which reaction increases oxidation state of carbon (variant 434)",
    question_hi:
      "कौन सा अभिक्रिया increases oxidation state of carbon (variant 434)?",
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
    num: 3,
    question_en: "General formula for alkanes is (variant 317)",
    question_hi: "General formula for alkanes है (variant 317)?",
    options_en: ["CnH2n-2", "CnH2n+2", "CnH2n", "CnH2n+1"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Which reagent forms Grignard reagent (variant 282)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 282)?",
    options_en: ["LiAlH4", "Mg in dry ether", "HCl", "NaBH4"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Which metal is liquid at room temperature (variant 326)",
    question_hi: "कौन सा metal है liquid at room तापमान (variant 326)?",
    options_en: ["Hg", "Fe", "Al", "Na"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Compressibility factor Z for ideal gas equals (variant 174)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 174)?",
    options_en: ["2", "1", "Infinity", "0"],
    answer_en: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "SN1 reactions proceed via which intermediate (variant 260)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 260)?",
    options_en: ["Radical", "Concerted TS", "Carbocation", "Carbanion"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Joule-Thomson coefficient for ideal gas is (variant 395)",
    question_hi: "Joule-Thomson coefficient for ideal गैस है (variant 395)?",
    options_en: ["Positive", "Infinite", "Zero", "Negative"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Markovnikov rule applies to addition of HX to (variant 384)",
    question_hi: "Markovnikov rule applies to addition of HX to (variant 384)?",
    options_en: ["Alkynes always", "Alkenes", "Alkanes", "Aromatic rings"],
    answer_en: "Alkenes",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "Which compound is aromatic (variant 355)",
    question_hi: "कौन सा compound है aromatic (variant 355)?",
    options_en: ["Cyclohexane", "1,3,5-Heptatriene", "Benzene", "Cyclobutane"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Which metal is liquid at room temperature (variant 311)",
    question_hi: "कौन सा metal है liquid at room तापमान (variant 311)?",
    options_en: ["Hg", "Na", "Al", "Fe"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Which reagent is a strong oxidizing agent (variant 180)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 180)?",
    options_en: ["O2", "H2", "KMnO4", "NaCl"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Avogadro's number is approximately (variant 481)",
    question_hi: "Avogadro's number है approximately (variant 481)?",
    options_en: ["9.81", "1.602×10^-19", "6.022×10^23", "3.00×10^8"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Elevation in boiling point depends on (variant 318)",
    question_hi: "Elevation in boiling point depends on (variant 318)?",
    options_en: ["Pressure only", "Molarity", "Molality", "Temperature only"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 188)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 188)?",
    options_en: ["O2", "H2", "Cl2", "CO2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 168)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 168)?",
    options_en: ["Ethanoic acid", "Ethanol", "Methanol", "Propanol"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Benzene undergoes which type of reaction (variant 157)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 157)?",
    options_en: [
      "Elimination",
      "Addition",
      "Electrophilic aromatic substitution",
      "Nucleophilic substitution",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "Which is a noble gas (variant 58)",
    question_hi: "कौन सा है a noble गैस (variant 58)?",
    options_en: ["N", "Ne", "F", "O"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Bond enthalpy usually refers to breaking of (variant 200)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 200)?",
    options_en: [
      "1 mole of ionic pairs",
      "1 mole of gaseous bonds",
      "1 mole of liquid bonds",
      "1 mole of solid bonds",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Which compound is aromatic (variant 85)",
    question_hi: "कौन सा compound है aromatic (variant 85)?",
    options_en: ["1,3,5-Heptatriene", "Cyclobutane", "Benzene", "Cyclohexane"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Compressibility factor Z for ideal gas equals (variant 134)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 134)?",
    options_en: ["2", "1", "Infinity", "0"],
    answer_en: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "1 mole of ideal gas at STP occupies (approx) (variant 262)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx) (variant 262)?",
    options_en: ["11.2 L", "22.4 L", "1.0 L", "44.8 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "Critical temperature is the temperature above which gas (variant 136)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 136)?",
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
    num: 24,
    question_en: "Bond enthalpy usually refers to breaking of (variant 340)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 340)?",
    options_en: [
      "1 mole of liquid bonds",
      "1 mole of gaseous bonds",
      "1 mole of solid bonds",
      "1 mole of ionic pairs",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Bond enthalpy usually refers to breaking of (variant 60)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 60)?",
    options_en: [
      "1 mole of gaseous bonds",
      "1 mole of liquid bonds",
      "1 mole of ionic pairs",
      "1 mole of solid bonds",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Half-life of first order reaction is (variant 473)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 473)?",
    options_en: [
      "Proportional to initial conc.",
      "Infinite",
      "Zero",
      "Independent of initial concentration",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "Which reaction converts an alkene to an alkane (variant 259)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 259)?",
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
    num: 28,
    question_en: "Which reaction converts an alkene to an alkane (variant 214)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 214)?",
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
    num: 29,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 78)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 78)?",
    options_en: ["+4", "+6", "+2", "+7"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "General formula for alkanes is (variant 167)",
    question_hi: "General formula for alkanes है (variant 167)?",
    options_en: ["CnH2n+1", "CnH2n", "CnH2n-2", "CnH2n+2"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Bohr model applies best to which atom (variant 494)",
    question_hi: "Bohr model applies best to which atom (variant 494)?",
    options_en: ["Helium", "Oxygen", "Carbon", "Hydrogen"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 443)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 443)?",
    options_en: ["O2", "CO2", "H2", "Cl2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Unit of entropy (S) is (variant 344)",
    question_hi: "Unit of entropy (S) है (variant 344)?",
    options_en: ["J K^-1 mol^-1", "J mol^-1", "J K", "K mol^-1"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 435)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 435)?",
    options_en: ["Three", "Two", "One", "Zero"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 446)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 446)?",
    options_en: ["Adiabatic", "Isothermal", "Endothermic", "Exothermic"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Hybridization of central atom in BF3 (variant 305)",
    question_hi: "Hybridization of central atom in BF3 (variant 305)?",
    options_en: ["sp", "sp3", "sp3d", "sp2"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Electron configuration of O atom (ground state) (variant 25)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 25)?",
    options_en: ["1s2 2s2 2p6", "1s2 2s2 2p4", "1s2 2s1 2p4", "1s2 2s2 2p3"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "Avogadro's number is approximately (variant 121)",
    question_hi: "Avogadro's number है approximately (variant 121)?",
    options_en: ["6.022×10^23", "3.00×10^8", "1.602×10^-19", "9.81"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 454)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 454)?",
    options_en: ["NH3", "Cl- (spectator)", "He", "Na+"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Boyle's law at constant T states PV is (variant 267)",
    question_hi: "Boyle's law at constant T states PV है (variant 267)?",
    options_en: ["Proportional to P", "Proportional to V", "Zero", "Constant"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Which is a noble gas",
    question_hi: "कौन सा है a noble गैस?",
    options_en: ["Ne", "O", "F", "N"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 488)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 488)?",
    options_en: ["H2", "Cl2", "O2", "CO2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Compressibility factor Z for ideal gas equals (variant 274)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 274)?",
    options_en: ["Infinity", "1", "2", "0"],
    answer_en: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Markovnikov rule applies to addition of HX to (variant 369)",
    question_hi: "Markovnikov rule applies to addition of HX to (variant 369)?",
    options_en: ["Aromatic rings", "Alkenes", "Alkanes", "Alkynes always"],
    answer_en: "Alkenes",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Unit of entropy (S) is (variant 104)",
    question_hi: "Unit of entropy (S) है (variant 104)?",
    options_en: ["J K^-1 mol^-1", "J K", "K mol^-1", "J mol^-1"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 498)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 498)?",
    options_en: ["Ethanol", "Methanol", "Ethanoic acid", "Propanol"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 300)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 300)?",
    options_en: ["Two", "One", "Three", "Zero"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Which is an example of a conjugated system",
    question_hi: "कौन सा है an example of a conjugated system?",
    options_en: ["Butadiene", "Methane", "Cyclohexane", "Butane"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "General formula for alkanes is (variant 287)",
    question_hi: "General formula for alkanes है (variant 287)?",
    options_en: ["CnH2n", "CnH2n+1", "CnH2n-2", "CnH2n+2"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 153)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 153)?",
    options_en: ["Ethanoic acid", "Methanol", "Ethanol", "Propanol"],
    answer_en: "Ethanol",
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
