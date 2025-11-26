const questions = [
  {
    num: 1,
    question_en: "Color of KMnO4 solution",
    question_hi: "Color of KMnO4 solution?",
    options_en: ["Colorless", "Brown", "Green", "Purple"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons?",
    options_en: ["Three", "Two", "Zero", "One"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 3,
    question_en: "Osmotic pressure π (dilute) equals",
    question_hi: "Osmotic दाब π (dilute) equals?",
    options_en: ["CRT", "PV", "nRT", "C/V"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Bohr model applies best to which atom",
    question_hi: "Bohr model applies best to which atom?",
    options_en: ["Oxygen", "Helium", "Carbon", "Hydrogen"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Oxidation state of Mn in KMnO4 is",
    question_hi: "Oxidation state of Mn in KMnO4 है?",
    options_en: ["+4", "+6", "+2", "+7"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en:
      "Which reaction increases oxidation state of carbon",
    question_hi:
      "कौन सा अभिक्रिया increases oxidation state of carbon?",
    options_en: [
      "Isomerization",
      "Reduction",
      "Oxidation",
      "Substitution without oxidation",
    ],
    answer_en: "Oxidation",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en: "Joule-Thomson coefficient for ideal gas is",
    question_hi: "Joule-Thomson coefficient for ideal गैस है?",
    options_en: ["Zero", "Negative", "Infinite", "Positive"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en:
      "Depression in freezing point ΔTf proportional to",
    question_hi:
      "Depression in freezing point ΔTf proportional to?",
    options_en: ["Molality", "Pressure", "Temperature", "Molarity"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Which block contains transition metals",
    question_hi: "कौन सा block contains transition metals?",
    options_en: ["p-block", "d-block", "f-block", "s-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "ΔG < 0 indicates the process is",
    question_hi: "ΔG < 0 indicates the process है?",
    options_en: [
      "Impossible",
      "At equilibrium",
      "Non-spontaneous",
      "Spontaneous",
    ],
    answer_en: "Spontaneous",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "Which is an example of a conjugated system",
    question_hi: "कौन सा है an example of a conjugated system?",
    options_en: ["Cyclohexane", "Methane", "Butadiene", "Butane"],
    answer_en: "Butadiene",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "Joule-Thomson coefficient for ideal gas is",
    question_hi: "Joule-Thomson coefficient for ideal गैस है?",
    options_en: ["Positive", "Zero", "Infinite", "Negative"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en:
      "Reactions initiated by radicals often use which initiator",
    question_hi:
      "Reactions initiated by radicals often use which initiator?",
    options_en: ["Water", "Acids", "Peroxides", "Bases"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 14,
    question_en: "Bohr model applies best to which atom",
    question_hi: "Bohr model applies best to which atom?",
    options_en: ["Hydrogen", "Helium", "Carbon", "Oxygen"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl?",
    options_en: ["O2", "Cl2", "H2", "CO2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons",
    question_hi:
      "Tertiary alcohol has OH attached to carbon bonded to how many carbons?",
    options_en: ["One", "Zero", "Two", "Three"],
    answer_en: "Three",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en: "Elevation in boiling point depends on",
    question_hi: "Elevation in boiling point depends on?",
    options_en: ["Molarity", "Molality", "Temperature only", "Pressure only"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Electron configuration of O atom (ground state)",
    question_hi:
      "Electron configuration of O atom (ground state)?",
    options_en: ["1s2 2s2 2p4", "1s2 2s2 2p6", "1s2 2s1 2p4", "1s2 2s2 2p3"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Which metal is liquid at room temperature",
    question_hi: "कौन सा metal है liquid at room तापमान?",
    options_en: ["Hg", "Al", "Na", "Fe"],
    answer_en: "Hg",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en:
      "Which is a typical ligand in coordination chemistry",
    question_hi:
      "कौन सा है a typical ligand in coordination chemistry?",
    options_en: ["He", "NH3", "Na+", "Cl- (spectator)"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "ΔG < 0 indicates the process is",
    question_hi: "ΔG < 0 indicates the process है?",
    options_en: [
      "Non-spontaneous",
      "At equilibrium",
      "Impossible",
      "Spontaneous",
    ],
    answer_en: "Spontaneous",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Oxidation state of Mn in KMnO4 is",
    question_hi: "Oxidation state of Mn in KMnO4 है?",
    options_en: ["+7", "+4", "+2", "+6"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "General formula for alkanes is",
    question_hi: "General formula for alkanes है?",
    options_en: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnH2n+1"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en:
      "Which is a typical ligand in coordination chemistry",
    question_hi:
      "कौन सा है a typical ligand in coordination chemistry?",
    options_en: ["He", "Cl- (spectator)", "Na+", "NH3"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "Which gas is liberated when Zn reacts with dilute HCl",
    question_hi:
      "कौन सा गैस है liberated when Zn reacts with dilute HCl?",
    options_en: ["Cl2", "CO2", "O2", "H2"],
    answer_en: "H2",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en: "Bond enthalpy usually refers to breaking of",
    question_hi: "Bond enthalpy usually refers to breaking of?",
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
    num: 27,
    question_en: "Which is a noble gas",
    question_hi: "कौन सा है a noble गैस?",
    options_en: ["N", "O", "Ne", "F"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "IUPAC name of CH3-CH2-OH is",
    question_hi: "IUPAC name of CH3-CH2-OH है?",
    options_en: ["Methanol", "Ethanol", "Ethanoic acid", "Propanol"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en:
      "Depression in freezing point ΔTf proportional to",
    question_hi:
      "Depression in freezing point ΔTf proportional to?",
    options_en: ["Pressure", "Molarity", "Temperature", "Molality"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Which block contains transition metals",
    question_hi: "कौन सा block contains transition metals?",
    options_en: ["s-block", "p-block", "d-block", "f-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 31,
    question_en: "Hybridization of central atom in BF3",
    question_hi: "Hybridization of central atom in BF3?",
    options_en: ["sp2", "sp", "sp3", "sp3d"],
    answer_en: "sp2",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en:
      "Periodic table: which element has highest electronegativity among these",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these?",
    options_en: ["F", "Cl", "O", "N"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en: "Joule-Thomson coefficient for ideal gas is",
    question_hi: "Joule-Thomson coefficient for ideal गैस है?",
    options_en: ["Zero", "Infinite", "Negative", "Positive"],
    answer_en: "Zero",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild)?",
    options_en: ["H2/Pd", "PCC", "KMnO4", "NaBH4"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "1 mole of ideal gas at STP occupies (approx)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx)?",
    options_en: ["22.4 L", "11.2 L", "44.8 L", "1.0 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Which reagent is a strong oxidizing agent",
    question_hi: "कौन सा reagent है a strong oxidizing agent?",
    options_en: ["KMnO4", "O2", "H2", "NaCl"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "1 mole of ideal gas at STP occupies (approx)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx)?",
    options_en: ["11.2 L", "1.0 L", "44.8 L", "22.4 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en:
      "Enthalpy change negative indicates the reaction is",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है?",
    options_en: ["Adiabatic", "Isothermal", "Exothermic", "Endothermic"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Which functional group is present in ethanol",
    question_hi: "कौन सा functional group है present in ethanol?",
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
    num: 40,
    question_en: "1 mole of ideal gas at STP occupies (approx)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx)?",
    options_en: ["44.8 L", "11.2 L", "22.4 L", "1.0 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Elevation in boiling point depends on",
    question_hi: "Elevation in boiling point depends on?",
    options_en: ["Pressure only", "Molarity", "Temperature only", "Molality"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Oxidation state of Mn in KMnO4 is",
    question_hi: "Oxidation state of Mn in KMnO4 है?",
    options_en: ["+2", "+4", "+7", "+6"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en: "Ideal gas equation is",
    question_hi: "Ideal गैस equation है?",
    options_en: ["PV = RT", "PV = nRT", "P + V = nRT", "P/V = nR"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Color of KMnO4 solution",
    question_hi: "Color of KMnO4 solution?",
    options_en: ["Colorless", "Purple", "Brown", "Green"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en:
      "Electron configuration of O atom (ground state)",
    question_hi:
      "Electron configuration of O atom (ground state)?",
    options_en: ["1s2 2s2 2p3", "1s2 2s2 2p4", "1s2 2s1 2p4", "1s2 2s2 2p6"],
    answer_en: "1s2 2s2 2p4",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en:
      "Reactions initiated by radicals often use which initiator",
    question_hi:
      "Reactions initiated by radicals often use which initiator?",
    options_en: ["Water", "Acids", "Peroxides", "Bases"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "Which block contains transition metals",
    question_hi: "कौन सा block contains transition metals?",
    options_en: ["p-block", "f-block", "d-block", "s-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en: "Ideal gas equation is",
    question_hi: "Ideal गैस equation है?",
    options_en: ["P + V = nRT", "PV = RT", "P/V = nR", "PV = nRT"],
    answer_en: "PV = nRT",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Which is a good leaving group",
    question_hi: "कौन सा है a good leaving group?",
    options_en: ["NH2-", "Br-", "H-", "CH3-"],
    answer_en: "Br-",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Ideal gas equation is",
    question_hi: "Ideal गैस equation है?",
    options_en: ["P + V = nRT", "PV = nRT", "PV = RT", "P/V = nR"],
    answer_en: "PV = nRT",
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
