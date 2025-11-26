const questions = [
  {
    num: 1,
    question_en: "Markovnikov rule applies to addition of HX to (variant 99)",
    question_hi: "Markovnikov rule applies to addition of HX to (variant 99)?",
    options_en: ["Alkanes", "Aromatic rings", "Alkenes", "Alkynes always"],
    answer_en: "Alkenes",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Which functional group is present in ethanol (variant 91)",
    question_hi: "कौन सा functional group है present in ethanol (variant 91)?",
    options_en: [
      "Carbonyl (C=O)",
      "Carboxyl (–COOH)",
      "Hydroxyl (–OH)",
      "Amino (–NH2)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Half-life of first order reaction is (variant 373)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 373)?",
    options_en: [
      "Infinite",
      "Proportional to initial conc.",
      "Zero",
      "Independent of initial concentration",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Elevation in boiling point depends on",
    question_hi: "Elevation in boiling point depends on?",
    options_en: ["Molality", "Molarity", "Pressure only", "Temperature only"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Which oxide is amphoteric (variant 321)",
    question_hi: "कौन सा oxide है amphoteric (variant 321)?",
    options_en: ["SO3", "Al2O3", "CO2", "N2O5"],
    answer_en: "Al2O3",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "1 mole of ideal gas at STP occupies (approx) (variant 362)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx) (variant 362)?",
    options_en: ["22.4 L", "1.0 L", "11.2 L", "44.8 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Which compound is aromatic (variant 100)",
    question_hi: "कौन सा compound है aromatic (variant 100)?",
    options_en: ["Cyclobutane", "1,3,5-Heptatriene", "Cyclohexane", "Benzene"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Unit of entropy (S) is (variant 184)",
    question_hi: "Unit of entropy (S) है (variant 184)?",
    options_en: ["J K^-1 mol^-1", "K mol^-1", "J mol^-1", "J K"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Which reagent forms Grignard reagent (variant 402)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 402)?",
    options_en: ["HCl", "Mg in dry ether", "LiAlH4", "NaBH4"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 169)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 169)?",
    options_en: ["Na+", "Cl- (spectator)", "He", "NH3"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 108)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 108)?",
    options_en: ["+2", "+7", "+6", "+4"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "1 mole of ideal gas at STP occupies (approx) (variant 82)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx) (variant 82)?",
    options_en: ["22.4 L", "1.0 L", "44.8 L", "11.2 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Ideal gas equation is (variant 163)",
    question_hi: "Ideal गैस equation है (variant 163)?",
    options_en: ["PV = RT", "PV = nRT", "P/V = nR", "P + V = nRT"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 270)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 270)?",
    options_en: ["One", "Three", "Zero", "Two"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Which reagent is a strong oxidizing agent (variant 495)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 495)?",
    options_en: ["KMnO4", "NaCl", "H2", "O2"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Which metal is liquid at room temperature (variant 41)",
    question_hi: "कौन सा metal है liquid at room तापमान (variant 41)?",
    options_en: ["Na", "Fe", "Al", "Hg"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 98)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 98)?",
    options_en: ["H2", "O2", "Cl2", "CO2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "Which reagent is a strong oxidizing agent (variant 300)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 300)?",
    options_en: ["NaCl", "H2", "O2", "KMnO4"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Group 1 metals are called (variant 422)",
    question_hi: "Group 1 metals हैं called (variant 422)?",
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
    num: 20,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 138)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 138)?",
    options_en: ["+4", "+6", "+7", "+2"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Bond enthalpy usually refers to breaking of (variant 80)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 80)?",
    options_en: [
      "1 mole of solid bonds",
      "1 mole of gaseous bonds",
      "1 mole of ionic pairs",
      "1 mole of liquid bonds",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Which is a good leaving group (variant 133)",
    question_hi: "कौन सा है a good leaving group (variant 133)?",
    options_en: ["NH2-", "CH3-", "Br-", "H-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Which oxide is amphoteric (variant 81)",
    question_hi: "कौन सा oxide है amphoteric (variant 81)?",
    options_en: ["Al2O3", "N2O5", "CO2", "SO3"],
    answer_en: "Al2O3",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Avogadro's number is approximately (variant 301)",
    question_hi: "Avogadro's number है approximately (variant 301)?",
    options_en: ["9.81", "3.00×10^8", "1.602×10^-19", "6.022×10^23"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Which is a good leaving group (variant 343)",
    question_hi: "कौन सा है a good leaving group (variant 343)?",
    options_en: ["NH2-", "H-", "Br-", "CH3-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "Periodic table: which element has highest electronegativity among these (variant 136)",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these (variant 136)?",
    options_en: ["Cl", "N", "F", "O"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "Which block contains transition metals (variant 69)",
    question_hi: "कौन सा block contains transition metals (variant 69)?",
    options_en: ["d-block", "s-block", "f-block", "p-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Ideal gas equation is (variant 383)",
    question_hi: "Ideal गैस equation है (variant 383)?",
    options_en: ["P + V = nRT", "P/V = nR", "PV = nRT", "PV = RT"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Which reaction converts an alkene to an alkane (variant 499)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 499)?",
    options_en: [
      "Halogenation",
      "Hydrogenation",
      "Dehydration",
      "Dehydrogenation",
    ],
    answer_en: "Hydrogenation",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 438)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 438)?",
    options_en: ["+7", "+2", "+6", "+4"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en:
      "Which reaction increases oxidation state of carbon (variant 224)",
    question_hi:
      "कौन सा अभिक्रिया increases oxidation state of carbon (variant 224)?",
    options_en: [
      "Reduction",
      "Isomerization",
      "Substitution without oxidation",
      "Oxidation",
    ],
    answer_en: "Oxidation",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "Boyle's law at constant T states PV is (variant 167)",
    question_hi: "Boyle's law at constant T states PV है (variant 167)?",
    options_en: ["Zero", "Constant", "Proportional to V", "Proportional to P"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "SN1 reactions proceed via which intermediate (variant 155)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 155)?",
    options_en: ["Radical", "Concerted TS", "Carbocation", "Carbanion"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 46)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 46)?",
    options_en: ["Isothermal", "Exothermic", "Endothermic", "Adiabatic"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Bond enthalpy usually refers to breaking of (variant 460)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 460)?",
    options_en: [
      "1 mole of gaseous bonds",
      "1 mole of solid bonds",
      "1 mole of ionic pairs",
      "1 mole of liquid bonds",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Van't Hoff factor i accounts for (variant 490)",
    question_hi: "Van't Hoff factor i accounts for (variant 490)?",
    options_en: [
      "Pressure",
      "Dissociation/association",
      "Temperature",
      "Viscosity",
    ],
    answer_en: "Dissociation/association",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Ideal gas equation is (variant 443)",
    question_hi: "Ideal गैस equation है (variant 443)?",
    options_en: ["PV = nRT", "P + V = nRT", "PV = RT", "P/V = nR"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "Which is a good leaving group (variant 358)",
    question_hi: "कौन सा है a good leaving group (variant 358)?",
    options_en: ["NH2-", "H-", "Br-", "CH3-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en:
      "Electron configuration of O atom (ground state) (variant 460)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 460)?",
    options_en: ["1s2 2s1 2p4", "1s2 2s2 2p3", "1s2 2s2 2p4", "1s2 2s2 2p6"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Which block contains transition metals (variant 309)",
    question_hi: "कौन सा block contains transition metals (variant 309)?",
    options_en: ["s-block", "d-block", "p-block", "f-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "General formula for alkanes is (variant 137)",
    question_hi: "General formula for alkanes है (variant 137)?",
    options_en: ["CnH2n", "CnH2n+2", "CnH2n+1", "CnH2n-2"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Which functional group is present in ethanol (variant 466)",
    question_hi: "कौन सा functional group है present in ethanol (variant 466)?",
    options_en: [
      "Carboxyl (–COOH)",
      "Carbonyl (C=O)",
      "Amino (–NH2)",
      "Hydroxyl (–OH)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Osmotic pressure π (dilute) equals (variant 329)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 329)?",
    options_en: ["nRT", "PV", "C/V", "CRT"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Half-life of first order reaction is (variant 113)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 113)?",
    options_en: [
      "Zero",
      "Infinite",
      "Proportional to initial conc.",
      "Independent of initial concentration",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Markovnikov rule applies to addition of HX to (variant 54)",
    question_hi: "Markovnikov rule applies to addition of HX to (variant 54)?",
    options_en: ["Alkenes", "Alkynes always", "Alkanes", "Aromatic rings"],
    answer_en: "Alkenes",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Which functional group is present in ethanol (variant 391)",
    question_hi: "कौन सा functional group है present in ethanol (variant 391)?",
    options_en: [
      "Hydroxyl (–OH)",
      "Amino (–NH2)",
      "Carboxyl (–COOH)",
      "Carbonyl (C=O)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 261)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 261)?",
    options_en: ["NaBH4", "PCC", "H2/Pd", "KMnO4"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Markovnikov rule applies to addition of HX to (variant 129)",
    question_hi: "Markovnikov rule applies to addition of HX to (variant 129)?",
    options_en: ["Aromatic rings", "Alkenes", "Alkanes", "Alkynes always"],
    answer_en: "Alkenes",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Markovnikov rule applies to addition of HX to (variant 204)",
    question_hi: "Markovnikov rule applies to addition of HX to (variant 204)?",
    options_en: ["Aromatic rings", "Alkanes", "Alkenes", "Alkynes always"],
    answer_en: "Alkenes",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 199)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 199)?",
    options_en: ["He", "Na+", "Cl- (spectator)", "NH3"],
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
