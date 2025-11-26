const questions = [
  {
    num: 1,
    question_en: "Group 1 metals are called (variant 362)",
    question_hi: "Group 1 metals हैं called (variant 362)?",
    options_en: [
      "Alkali metals",
      "Transition metals",
      "Noble gases",
      "Alkaline earth metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Markovnikov rule applies to addition of HX to (variant 219)",
    question_hi: "Markovnikov rule applies to addition of HX to (variant 219)?",
    options_en: ["Alkanes", "Alkenes", "Aromatic rings", "Alkynes always"],
    answer_en: "Alkenes",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Avogadro's number is approximately (variant 141)",
    question_hi: "Avogadro's number है approximately (variant 141)?",
    options_en: ["9.81", "6.022×10^23", "1.602×10^-19", "3.00×10^8"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Unit of rate constant for first order (variant 152)",
    question_hi: "Unit of rate constant for first order (variant 152)?",
    options_en: ["L mol^-1 s^-1", "mol L^-1 s^-1", "unitless", "s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Which compound is aromatic (variant 70)",
    question_hi: "कौन सा compound है aromatic (variant 70)?",
    options_en: ["Cyclobutane", "1,3,5-Heptatriene", "Cyclohexane", "Benzene"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Half-life of first order reaction is (variant 173)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 173)?",
    options_en: [
      "Infinite",
      "Proportional to initial conc.",
      "Independent of initial concentration",
      "Zero",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Color of KMnO4 solution (variant 82)",
    question_hi: "Color of KMnO4 solution (variant 82)?",
    options_en: ["Purple", "Green", "Brown", "Colorless"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Elevation in boiling point depends on (variant 358)",
    question_hi: "Elevation in boiling point depends on (variant 358)?",
    options_en: ["Molarity", "Pressure only", "Molality", "Temperature only"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Which reaction converts an alkene to an alkane (variant 49)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 49)?",
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
    num: 10,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 56)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 56)?",
    options_en: ["Bases", "Acids", "Peroxides", "Water"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "General formula for alkanes is (variant 272)",
    question_hi: "General formula for alkanes है (variant 272)?",
    options_en: ["CnH2n-2", "CnH2n+1", "CnH2n", "CnH2n+2"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Which oxide is amphoteric (variant 186)",
    question_hi: "कौन सा oxide है amphoteric (variant 186)?",
    options_en: ["N2O5", "CO2", "Al2O3", "SO3"],
    answer_en: "Al2O3",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Color of KMnO4 solution (variant 232)",
    question_hi: "Color of KMnO4 solution (variant 232)?",
    options_en: ["Purple", "Brown", "Colorless", "Green"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Compressibility factor Z for ideal gas equals (variant 74)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 74)?",
    options_en: ["Infinity", "2", "1", "0"],
    answer_en: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Elevation in boiling point depends on (variant 258)",
    question_hi: "Elevation in boiling point depends on (variant 258)?",
    options_en: ["Molarity", "Pressure only", "Molality", "Temperature only"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Color of KMnO4 solution",
    question_hi: "Color of KMnO4 solution?",
    options_en: ["Green", "Brown", "Colorless", "Purple"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Which is a noble gas (variant 88)",
    question_hi: "कौन सा है a noble गैस (variant 88)?",
    options_en: ["N", "Ne", "F", "O"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "Arrhenius equation involves activation energy and",
    question_hi: "Arrhenius equation involves activation ऊर्जा and?",
    options_en: ["Temperature", "Pressure", "Concentration", "Volume"],
    answer_en: "Temperature",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Elevation in boiling point depends on (variant 38)",
    question_hi: "Elevation in boiling point depends on (variant 38)?",
    options_en: ["Temperature only", "Pressure only", "Molality", "Molarity"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Group 1 metals are called (variant 32)",
    question_hi: "Group 1 metals हैं called (variant 32)?",
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
    num: 21,
    question_en: "Hybridization of central atom in BF3 (variant 155)",
    question_hi: "Hybridization of central atom in BF3 (variant 155)?",
    options_en: ["sp2", "sp3d", "sp3", "sp"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en:
      "Arrhenius equation involves activation energy and (variant 231)",
    question_hi:
      "Arrhenius equation involves activation ऊर्जा and (variant 231)?",
    options_en: ["Pressure", "Temperature", "Volume", "Concentration"],
    answer_en: "Temperature",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Unit of rate constant for first order (variant 472)",
    question_hi: "Unit of rate constant for first order (variant 472)?",
    options_en: ["mol L^-1 s^-1", "s^-1", "unitless", "L mol^-1 s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Raoult's law applies to (variant 368)",
    question_hi: "Raoult's law applies to (variant 368)?",
    options_en: [
      "Ideal solutions",
      "Non-ideal solutions",
      "Pure solvents",
      "Colloids",
    ],
    answer_en: "Ideal solutions",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Boyle's law at constant T states PV is (variant 307)",
    question_hi: "Boyle's law at constant T states PV है (variant 307)?",
    options_en: ["Constant", "Proportional to V", "Zero", "Proportional to P"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Osmotic pressure π (dilute) equals (variant 409)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 409)?",
    options_en: ["CRT", "nRT", "C/V", "PV"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "Electron configuration of O atom (ground state) (variant 220)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 220)?",
    options_en: ["1s2 2s2 2p4", "1s2 2s2 2p3", "1s2 2s2 2p6", "1s2 2s1 2p4"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 258)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 258)?",
    options_en: ["Methanol", "Ethanoic acid", "Propanol", "Ethanol"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Which reagent forms Grignard reagent (variant 237)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 237)?",
    options_en: ["NaBH4", "Mg in dry ether", "HCl", "LiAlH4"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "SN1 reactions proceed via which intermediate (variant 380)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 380)?",
    options_en: ["Concerted TS", "Carbocation", "Radical", "Carbanion"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Joule-Thomson coefficient for ideal gas is (variant 495)",
    question_hi: "Joule-Thomson coefficient for ideal गैस है (variant 495)?",
    options_en: ["Negative", "Positive", "Infinite", "Zero"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "General formula for alkanes is",
    question_hi: "General formula for alkanes है?",
    options_en: ["CnH2n+2", "CnH2n+1", "CnH2n-2", "CnH2n"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 428)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 428)?",
    options_en: ["CO2", "O2", "Cl2", "H2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Which metal is liquid at room temperature (variant 86)",
    question_hi: "कौन सा metal है liquid at room तापमान (variant 86)?",
    options_en: ["Fe", "Na", "Al", "Hg"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Benzene undergoes which type of reaction (variant 202)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 202)?",
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
    num: 36,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 165)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 165)?",
    options_en: ["Three", "Two", "Zero", "One"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Which functional group is present in ethanol (variant 151)",
    question_hi: "कौन सा functional group है present in ethanol (variant 151)?",
    options_en: [
      "Hydroxyl (–OH)",
      "Carboxyl (–COOH)",
      "Carbonyl (C=O)",
      "Amino (–NH2)",
    ],
    answer_en: "Hydroxyl (–OH)",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "Benzene undergoes which type of reaction (variant 172)",
    question_hi: "Benzene undergoes which type of अभिक्रिया (variant 172)?",
    options_en: [
      "Nucleophilic substitution",
      "Electrophilic aromatic substitution",
      "Addition",
      "Elimination",
    ],
    answer_en: "Electrophilic aromatic substitution",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Compressibility factor Z for ideal gas equals (variant 334)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 334)?",
    options_en: ["2", "0", "Infinity", "1"],
    answer_en: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Which compound is aromatic (variant 265)",
    question_hi: "कौन सा compound है aromatic (variant 265)?",
    options_en: ["Cyclohexane", "Cyclobutane", "Benzene", "1,3,5-Heptatriene"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Which reaction converts an alkene to an alkane (variant 169)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 169)?",
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
    num: 42,
    question_en: "IUPAC name of CH3-CH2-OH is",
    question_hi: "IUPAC name of CH3-CH2-OH है?",
    options_en: ["Methanol", "Ethanol", "Propanol", "Ethanoic acid"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Which is a noble gas (variant 433)",
    question_hi: "कौन सा है a noble गैस (variant 433)?",
    options_en: ["N", "O", "F", "Ne"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en:
      "Critical temperature is the temperature above which gas (variant 456)",
    question_hi: "Critical तापमान है the तापमान above which गैस (variant 456)?",
    options_en: [
      "Becomes plasma",
      "Is ideal",
      "Solidifies",
      "Cannot be liquefied by pressure alone",
    ],
    answer_en: "Cannot be liquefied by pressure alone",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 353)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 353)?",
    options_en: ["Cl2", "H2", "CO2", "O2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Bond enthalpy usually refers to breaking of (variant 440)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 440)?",
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
    num: 47,
    question_en: "Compressibility factor Z for ideal gas equals (variant 314)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 314)?",
    options_en: ["0", "Infinity", "1", "2"],
    answer_en: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Which is an example of a conjugated system (variant 458)",
    question_hi: "कौन सा है an example of a conjugated system (variant 458)?",
    options_en: ["Butadiene", "Cyclohexane", "Butane", "Methane"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en:
      "Electron configuration of O atom (ground state) (variant 310)",
    question_hi:
      "Electron configuration of O atom (ground state) (variant 310)?",
    options_en: ["1s2 2s1 2p4", "1s2 2s2 2p6", "1s2 2s2 2p3", "1s2 2s2 2p4"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Osmotic pressure π (dilute) equals (variant 349)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 349)?",
    options_en: ["CRT", "C/V", "PV", "nRT"],
    answer_en: "CRT",
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
