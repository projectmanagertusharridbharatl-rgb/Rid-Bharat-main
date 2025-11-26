const questions = [
  {
    num: 1,
    question_en: "SN1 reactions proceed via which intermediate (variant 245)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 245)?",
    options_en: ["Radical", "Concerted TS", "Carbanion", "Carbocation"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "General formula for alkanes is (variant 47)",
    question_hi: "General formula for alkanes है (variant 47)?",
    options_en: ["CnH2n-2", "CnH2n+2", "CnH2n", "CnH2n+1"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Unit of entropy (S) is (variant 284)",
    question_hi: "Unit of entropy (S) है (variant 284)?",
    options_en: ["J K^-1 mol^-1", "K mol^-1", "J mol^-1", "J K"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Van't Hoff factor i accounts for",
    question_hi: "Van't Hoff factor i accounts for?",
    options_en: [
      "Dissociation/association",
      "Temperature",
      "Viscosity",
      "Pressure",
    ],
    answer_en: "Dissociation/association",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Which metal is liquid at room temperature (variant 161)",
    question_hi: "कौन सा metal है liquid at room तापमान (variant 161)?",
    options_en: ["Hg", "Na", "Al", "Fe"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 18)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 18)?",
    options_en: ["Propanol", "Methanol", "Ethanol", "Ethanoic acid"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 139)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 139)?",
    options_en: ["NH3", "Na+", "Cl- (spectator)", "He"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "General formula for alkanes is (variant 377)",
    question_hi: "General formula for alkanes है (variant 377)?",
    options_en: ["CnH2n+2", "CnH2n+1", "CnH2n-2", "CnH2n"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Which reaction converts an alkene to an alkane (variant 229)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 229)?",
    options_en: [
      "Hydrogenation",
      "Dehydration",
      "Dehydrogenation",
      "Halogenation",
    ],
    answer_en: "Hydrogenation",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 117)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 117)?",
    options_en: ["0", "+2", "+1", "+3"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 198)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 198)?",
    options_en: ["+6", "+7", "+2", "+4"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Which is an example of a conjugated system (variant 428)",
    question_hi: "कौन सा है an example of a conjugated system (variant 428)?",
    options_en: ["Butane", "Methane", "Butadiene", "Cyclohexane"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 45)",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons (variant 45)?",
    options_en: ["Three", "One", "Zero", "Two"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Unit of entropy (S) is (variant 304)",
    question_hi: "Unit of entropy (S) है (variant 304)?",
    options_en: ["J K", "K mol^-1", "J K^-1 mol^-1", "J mol^-1"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Which is a good leaving group (variant 223)",
    question_hi: "कौन सा है a good leaving group (variant 223)?",
    options_en: ["H-", "CH3-", "NH2-", "Br-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Which reagent forms Grignard reagent",
    question_hi: "कौन सा reagent forms Grignard reagent?",
    options_en: ["NaBH4", "HCl", "LiAlH4", "Mg in dry ether"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Group 1 metals are called",
    question_hi: "Group 1 metals हैं called?",
    options_en: [
      "Noble gases",
      "Alkali metals",
      "Alkaline earth metals",
      "Transition metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en: "Color of KMnO4 solution (variant 427)",
    question_hi: "Color of KMnO4 solution (variant 427)?",
    options_en: ["Brown", "Colorless", "Green", "Purple"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "SN1 reactions proceed via which intermediate (variant 35)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 35)?",
    options_en: ["Concerted TS", "Carbanion", "Radical", "Carbocation"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Hybridization of central atom in BF3 (variant 65)",
    question_hi: "Hybridization of central atom in BF3 (variant 65)?",
    options_en: ["sp2", "sp3d", "sp", "sp3"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 72)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 72)?",
    options_en: ["0", "+2", "+1", "+3"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Hybridization of central atom in BF3 (variant 245)",
    question_hi: "Hybridization of central atom in BF3 (variant 245)?",
    options_en: ["sp2", "sp3", "sp3d", "sp"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Color of KMnO4 solution (variant 22)",
    question_hi: "Color of KMnO4 solution (variant 22)?",
    options_en: ["Brown", "Colorless", "Green", "Purple"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "Periodic table: which element has highest electronegativity among these (variant 256)",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these (variant 256)?",
    options_en: ["O", "N", "F", "Cl"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en: "Raoult's law applies to (variant 248)",
    question_hi: "Raoult's law applies to (variant 248)?",
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
    num: 26,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 426)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 426)?",
    options_en: ["NaBH4", "H2/Pd", "PCC", "KMnO4"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 226)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 226)?",
    options_en: ["Endothermic", "Adiabatic", "Isothermal", "Exothermic"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Graham's law relates diffusion rates to (variant 77)",
    question_hi: "Graham's law relates diffusion rates to (variant 77)?",
    options_en: [
      "Directly proportional to molar mass",
      "Temperature only",
      "Inverse sqrt of molar masses",
      "Concentration only",
    ],
    answer_en: "Inverse sqrt of molar masses",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Osmotic pressure π (dilute) equals (variant 429)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 429)?",
    options_en: ["nRT", "CRT", "PV", "C/V"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 356)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 356)?",
    options_en: ["Bases", "Peroxides", "Water", "Acids"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Which compound is aromatic (variant 415)",
    question_hi: "कौन सा compound है aromatic (variant 415)?",
    options_en: ["1,3,5-Heptatriene", "Cyclohexane", "Cyclobutane", "Benzene"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "SN1 reactions proceed via which intermediate",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate?",
    options_en: ["Concerted TS", "Carbanion", "Radical", "Carbocation"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Osmotic pressure π (dilute) equals (variant 309)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 309)?",
    options_en: ["C/V", "PV", "nRT", "CRT"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Unit of rate constant for first order (variant 312)",
    question_hi: "Unit of rate constant for first order (variant 312)?",
    options_en: ["s^-1", "L mol^-1 s^-1", "unitless", "mol L^-1 s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "General formula for alkanes is (variant 482)",
    question_hi: "General formula for alkanes है (variant 482)?",
    options_en: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnH2n+1"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 27)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 27)?",
    options_en: ["0", "+1", "+2", "+3"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Osmotic pressure π (dilute) equals (variant 249)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 249)?",
    options_en: ["nRT", "C/V", "PV", "CRT"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "Group 1 metals are called (variant 107)",
    question_hi: "Group 1 metals हैं called (variant 107)?",
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
    num: 39,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 219)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 219)?",
    options_en: ["Temperature", "Molarity", "Pressure", "Molality"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 171)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 171)?",
    options_en: ["H2/Pd", "PCC", "KMnO4", "NaBH4"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "SN1 reactions proceed via which intermediate (variant 320)",
    question_hi: "SN1 अभिक्रियाs proceed via which intermediate (variant 320)?",
    options_en: ["Carbocation", "Carbanion", "Concerted TS", "Radical"],
    answer_en: "Carbocation",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Markovnikov rule applies to addition of HX to (variant 309)",
    question_hi: "Markovnikov rule applies to addition of HX to (variant 309)?",
    options_en: ["Alkanes", "Alkynes always", "Aromatic rings", "Alkenes"],
    answer_en: "Alkenes",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Joule-Thomson coefficient for ideal gas is (variant 255)",
    question_hi: "Joule-Thomson coefficient for ideal गैस है (variant 255)?",
    options_en: ["Positive", "Zero", "Negative", "Infinite"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "General formula for alkanes is (variant 422)",
    question_hi: "General formula for alkanes है (variant 422)?",
    options_en: ["CnH2n+2", "CnH2n-2", "CnH2n+1", "CnH2n"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "Which oxide is amphoteric (variant 261)",
    question_hi: "कौन सा oxide है amphoteric (variant 261)?",
    options_en: ["N2O5", "SO3", "CO2", "Al2O3"],
    answer_en: "Al2O3",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Which reagent forms Grignard reagent (variant 87)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 87)?",
    options_en: ["Mg in dry ether", "HCl", "NaBH4", "LiAlH4"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "Which block contains transition metals (variant 249)",
    question_hi: "कौन सा block contains transition metals (variant 249)?",
    options_en: ["f-block", "s-block", "p-block", "d-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Which reagent forms Grignard reagent (variant 477)",
    question_hi: "कौन सा reagent forms Grignard reagent (variant 477)?",
    options_en: ["LiAlH4", "NaBH4", "HCl", "Mg in dry ether"],
    answer_en: "Mg in dry ether",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Unit of entropy (S) is (variant 384)",
    question_hi: "Unit of entropy (S) है (variant 384)?",
    options_en: ["K mol^-1", "J K", "J K^-1 mol^-1", "J mol^-1"],
    answer_en: "J K^-1 mol^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en:
      "Depression in freezing point ΔTf proportional to (variant 359)",
    question_hi:
      "Depression in freezing point ΔTf proportional to (variant 359)?",
    options_en: ["Molarity", "Temperature", "Pressure", "Molality"],
    answer_en: "Molality",
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
