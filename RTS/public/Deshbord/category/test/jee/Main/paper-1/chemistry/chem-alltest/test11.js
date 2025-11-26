const questions = [
  {
    num: 1,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl (variant 263)",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl (variant 263)?",
    options_en: ["H2", "CO2", "Cl2", "O2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "General formula for alkanes is (variant 437)",
    question_hi: "General formula for alkanes है (variant 437)?",
    options_en: ["CnH2n", "CnH2n+2", "CnH2n+1", "CnH2n-2"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Which metal is liquid at room temperature (variant 401)",
    question_hi: "कौन सा metal है liquid at room तापमान (variant 401)?",
    options_en: ["Al", "Na", "Hg", "Fe"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Osmotic pressure π (dilute) equals",
    question_hi: "Osmotic दाब π (dilute) equals?",
    options_en: ["CRT", "C/V", "nRT", "PV"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Hybridization of central atom in BF3",
    question_hi: "Hybridization of central atom in BF3?",
    options_en: ["sp3", "sp", "sp3d", "sp2"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Which is an example of a conjugated system (variant 353)",
    question_hi: "कौन सा है an example of a conjugated system (variant 353)?",
    options_en: ["Methane", "Cyclohexane", "Butadiene", "Butane"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Color of KMnO4 solution (variant 247)",
    question_hi: "Color of KMnO4 solution (variant 247)?",
    options_en: ["Green", "Purple", "Colorless", "Brown"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Which reagent forms Grignard reagent (variant 192)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 192)?",
    options_en: ["Mg in dry ether", "LiAlH4", "HCl", "NaBH4"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Ideal gas equation is (variant 103)",
    question_hi: "Ideal गैस equation है (variant 103)?",
    options_en: ["P + V = nRT", "PV = RT", "P/V = nR", "PV = nRT"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "Which compound is aromatic (variant 370)",
    question_hi: "कौन सा compound है aromatic (variant 370)?",
    options_en: ["1,3,5-Heptatriene", "Cyclobutane", "Benzene", "Cyclohexane"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Ideal gas equation is (variant 483)",
    question_hi: "Ideal गैस equation है (variant 483)?",
    options_en: ["P/V = nR", "PV = RT", "PV = nRT", "P + V = nRT"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Hybridization of central atom in BF3 (variant 50)",
    question_hi: "Hybridization of central atom in BF3 (variant 50)?",
    options_en: ["sp3d", "sp2", "sp3", "sp"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Bohr model applies best to which atom (variant 239)",
    question_hi: "Bohr model applies best to which atom (variant 239)?",
    options_en: ["Carbon", "Helium", "Hydrogen", "Oxygen"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "1 mole of ideal gas at STP occupies (approx) (variant 182)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx) (variant 182)?",
    options_en: ["22.4 L", "11.2 L", "44.8 L", "1.0 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Which block contains transition metals",
    question_hi: "कौन सा block contains transition metals?",
    options_en: ["d-block", "s-block", "f-block", "p-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Unit of entropy (S) is (variant 464)",
    question_hi: "Unit of entropy (S) है (variant 464)?",
    options_en: ["J K", "J mol^-1", "K mol^-1", "J K^-1 mol^-1"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 326)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 326)?",
    options_en: ["Isothermal", "Endothermic", "Exothermic", "Adiabatic"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 479)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 479)?",
    options_en: ["Temperature", "Molarity", "Pressure", "Molality"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Half-life of first order reaction is (variant 353)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 353)?",
    options_en: [
      "Zero",
      "Infinite",
      "Independent of initial concentration",
      "Proportional to initial conc.",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Joule-Thomson coefficient for ideal gas is (variant 455)",
    question_hi: "Joule-Thomson coefficient for ideal गैस है (variant 455)?",
    options_en: ["Zero", "Infinite", "Positive", "Negative"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Bohr model applies best to which atom (variant 449)",
    question_hi: "Bohr model applies best to which atom (variant 449)?",
    options_en: ["Helium", "Carbon", "Oxygen", "Hydrogen"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Van't Hoff factor i accounts for (variant 50)",
    question_hi: "Van't Hoff factor i accounts for (variant 50)?",
    options_en: [
      "Dissociation/association",
      "Viscosity",
      "Temperature",
      "Pressure",
    ],
    answer_en: "Dissociation/association",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 366)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 366)?",
    options_en: ["Isothermal", "Endothermic", "Adiabatic", "Exothermic"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "Which reaction converts an alkene to an alkane (variant 439)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 439)?",
    options_en: [
      "Halogenation",
      "Dehydrogenation",
      "Hydrogenation",
      "Dehydration",
    ],
    answer_en: "Hydrogenation",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Boyle's law at constant T states PV is (variant 87)",
    question_hi: "Boyle's law at constant T states PV है (variant 87)?",
    options_en: ["Constant", "Proportional to P", "Proportional to V", "Zero"],
    answer_en: "Constant",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Graham's law relates diffusion rates to (variant 497)",
    question_hi: "Graham's law relates diffusion rates to (variant 497)?",
    options_en: [
      "Concentration only",
      "Directly proportional to molar mass",
      "Inverse sqrt of molar masses",
      "Temperature only",
    ],
    answer_en: "Inverse sqrt of molar masses",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "Elevation in boiling point depends on (variant 218)",
    question_hi: "Elevation in boiling point depends on (variant 218)?",
    options_en: ["Molarity", "Temperature only", "Molality", "Pressure only"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Unit of entropy (S) is (variant 204)",
    question_hi: "Unit of entropy (S) है (variant 204)?",
    options_en: ["J K", "J mol^-1", "J K^-1 mol^-1", "K mol^-1"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 93)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 93)?",
    options_en: ["+4", "+2", "+6", "+7"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "General formula for alkanes is (variant 182)",
    question_hi: "General formula for alkanes है (variant 182)?",
    options_en: ["CnH2n-2", "CnH2n+2", "CnH2n+1", "CnH2n"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Group 1 metals are called (variant 167)",
    question_hi: "Group 1 metals हैं called (variant 167)?",
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
    num: 32,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 381)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 381)?",
    options_en: ["H2/Pd", "NaBH4", "KMnO4", "PCC"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 147)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 147)?",
    options_en: ["+3", "+1", "+2", "0"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Which functional group is present in ethanol (variant 286)",
    question_hi: "कौन सा functional group है present in ethanol (variant 286)?",
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
    num: 35,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 303)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 303)?",
    options_en: ["+4", "+2", "+6", "+7"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 195)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 195)?",
    options_en: ["Two", "Zero", "One", "Three"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Unit of entropy (S) is (variant 84)",
    question_hi: "Unit of entropy (S) है (variant 84)?",
    options_en: ["J K^-1 mol^-1", "K mol^-1", "J mol^-1", "J K"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 206)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 206)?",
    options_en: ["Peroxides", "Acids", "Water", "Bases"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Bond enthalpy usually refers to breaking of (variant 420)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 420)?",
    options_en: [
      "1 mole of solid bonds",
      "1 mole of liquid bonds",
      "1 mole of gaseous bonds",
      "1 mole of ionic pairs",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Which block contains transition metals (variant 24)",
    question_hi: "कौन सा block contains transition metals (variant 24)?",
    options_en: ["d-block", "p-block", "s-block", "f-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 342)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 342)?",
    options_en: ["+2", "+1", "+3", "0"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Ideal gas equation is (variant 203)",
    question_hi: "Ideal गैस equation है (variant 203)?",
    options_en: ["P/V = nR", "PV = RT", "PV = nRT", "P + V = nRT"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Avogadro's number is approximately (variant 61)",
    question_hi: "Avogadro's number है approximately (variant 61)?",
    options_en: ["6.022×10^23", "1.602×10^-19", "9.81", "3.00×10^8"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "1 mole of ideal gas at STP occupies (approx) (variant 382)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx) (variant 382)?",
    options_en: ["11.2 L", "22.4 L", "44.8 L", "1.0 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "Arrhenius equation involves activation energy and (variant 191)",
    question_hi:
      "Arrhenius equation involves activation ऊर्जा and (variant 191)?",
    options_en: ["Volume", "Concentration", "Pressure", "Temperature"],
    answer_en: "Temperature",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Arrhenius equation involves activation energy and (variant 311)",
    question_hi:
      "Arrhenius equation involves activation ऊर्जा and (variant 311)?",
    options_en: ["Pressure", "Concentration", "Temperature", "Volume"],
    answer_en: "Temperature",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en:
      "Periodic table: which element has highest electronegativity among these (variant 166)",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these (variant 166)?",
    options_en: ["Cl", "O", "N", "F"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Which is a good leaving group (variant 298)",
    question_hi: "कौन सा है a good leaving group (variant 298)?",
    options_en: ["NH2-", "CH3-", "Br-", "H-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Which block contains transition metals (variant 429)",
    question_hi: "कौन सा block contains transition metals (variant 429)?",
    options_en: ["d-block", "s-block", "f-block", "p-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Bohr model applies best to which atom (variant 179)",
    question_hi: "Bohr model applies best to which atom (variant 179)?",
    options_en: ["Helium", "Carbon", "Hydrogen", "Oxygen"],
    answer_en: "Hydrogen",
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
