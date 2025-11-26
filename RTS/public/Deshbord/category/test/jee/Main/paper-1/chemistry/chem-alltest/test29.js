const questions = [
  {
    num: 1,
    question_en: "Which reagent oxidizes primary alcohol to aldehyde (mild)",
    question_hi: "कौन सा reagent oxidizes primary alcohol to aldehyde (mild)?",
    options_en: ["H2/Pd", "PCC", "NaBH4", "KMnO4"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 2,
    question_en: "Which reaction converts an alkene to an alkane (variant 349)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 349)?",
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
    num: 3,
    question_en: "Compressibility factor Z for ideal gas equals (variant 354)",
    question_hi: "Compressibility factor Z for ideal गैस equals (variant 354)?",
    options_en: ["2", "0", "Infinity", "1"],
    answer_en: "1",
    attempted: false,
    selected: "",
  },
  {
    num: 4,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 432)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 432)?",
    options_en: ["+3", "+2", "+1", "0"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 5,
    question_en: "Color of KMnO4 solution (variant 172)",
    question_hi: "Color of KMnO4 solution (variant 172)?",
    options_en: ["Colorless", "Green", "Brown", "Purple"],
    answer_en: "Purple",
    attempted: false,
    selected: "",
  },
  {
    num: 6,
    question_en: "Osmotic pressure π (dilute) equals (variant 289)",
    question_hi: "Osmotic दाब π (dilute) equals (variant 289)?",
    options_en: ["C/V", "nRT", "CRT", "PV"],
    answer_en: "CRT",
    attempted: false,
    selected: "",
  },
  {
    num: 7,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 469)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 469)?",
    options_en: ["NH3", "Cl- (spectator)", "He", "Na+"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 8,
    question_en: "Half-life of first order reaction is (variant 493)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 493)?",
    options_en: [
      "Infinite",
      "Zero",
      "Proportional to initial conc.",
      "Independent of initial concentration",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 9,
    question_en: "Graham's law relates diffusion rates to (variant 197)",
    question_hi: "Graham's law relates diffusion rates to (variant 197)?",
    options_en: [
      "Inverse sqrt of molar masses",
      "Temperature only",
      "Directly proportional to molar mass",
      "Concentration only",
    ],
    answer_en: "Inverse sqrt of molar masses",
    attempted: false,
    selected: "",
  },
  {
    num: 10,
    question_en: "Unit of rate constant for first order (variant 432)",
    question_hi: "Unit of rate constant for first order (variant 432)?",
    options_en: ["mol L^-1 s^-1", "unitless", "s^-1", "L mol^-1 s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 11,
    question_en: "ΔG < 0 indicates the process is (variant 85)",
    question_hi: "ΔG < 0 indicates the process है (variant 85)?",
    options_en: [
      "Impossible",
      "Non-spontaneous",
      "Spontaneous",
      "At equilibrium",
    ],
    answer_en: "Spontaneous",
    attempted: false,
    selected: "",
  },
  {
    num: 12,
    question_en: "IUPAC name of CH3-CH2-OH is (variant 33)",
    question_hi: "IUPAC name of CH3-CH2-OH है (variant 33)?",
    options_en: ["Propanol", "Ethanol", "Methanol", "Ethanoic acid"],
    answer_en: "Ethanol",
    attempted: false,
    selected: "",
  },
  {
    num: 13,
    question_en: "Which functional group is present in ethanol (variant 166)",
    question_hi: "कौन सा functional group है present in ethanol (variant 166)?",
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
    num: 14,
    question_en: "Avogadro's number is approximately (variant 181)",
    question_hi: "Avogadro's number है approximately (variant 181)?",
    options_en: ["1.602×10^-19", "9.81", "6.022×10^23", "3.00×10^8"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 15,
    question_en: "Bohr model applies best to which atom (variant 194)",
    question_hi: "Bohr model applies best to which atom (variant 194)?",
    options_en: ["Hydrogen", "Oxygen", "Carbon", "Helium"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 16,
    question_en: "Which block contains transition metals (variant 384)",
    question_hi: "कौन सा block contains transition metals (variant 384)?",
    options_en: ["s-block", "p-block", "d-block", "f-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 17,
    question_en:
      "Periodic table: which element has highest electronegativity among these (variant 451)",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these (variant 451)?",
    options_en: ["O", "Cl", "F", "N"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 18,
    question_en:
      "Periodic table: which element has highest electronegativity among these (variant 151)",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these (variant 151)?",
    options_en: ["N", "F", "O", "Cl"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 19,
    question_en: "Bohr model applies best to which atom (variant 374)",
    question_hi: "Bohr model applies best to which atom (variant 374)?",
    options_en: ["Carbon", "Hydrogen", "Helium", "Oxygen"],
    answer_en: "Hydrogen",
    attempted: false,
    selected: "",
  },
  {
    num: 20,
    question_en: "Markovnikov rule applies to addition of HX to (variant 234)",
    question_hi: "Markovnikov rule applies to addition of HX to (variant 234)?",
    options_en: ["Alkenes", "Alkynes always", "Aromatic rings", "Alkanes"],
    answer_en: "Alkenes",
    attempted: false,
    selected: "",
  },
  {
    num: 21,
    question_en: "Group 1 metals are called (variant 257)",
    question_hi: "Group 1 metals हैं called (variant 257)?",
    options_en: [
      "Noble gases",
      "Alkaline earth metals",
      "Transition metals",
      "Alkali metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 22,
    question_en: "Elevation in boiling point depends on (variant 78)",
    question_hi: "Elevation in boiling point depends on (variant 78)?",
    options_en: ["Molality", "Temperature only", "Pressure only", "Molarity"],
    answer_en: "Molality",
    attempted: false,
    selected: "",
  },
  {
    num: 23,
    question_en: "Which is a noble gas (variant 358)",
    question_hi: "कौन सा है a noble गैस (variant 358)?",
    options_en: ["N", "Ne", "O", "F"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 24,
    question_en: "General formula for alkanes is (variant 257)",
    question_hi: "General formula for alkanes है (variant 257)?",
    options_en: ["CnH2n+2", "CnH2n", "CnH2n+1", "CnH2n-2"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 25,
    question_en:
      "Which reaction increases oxidation state of carbon (variant 44)",
    question_hi:
      "कौन सा अभिक्रिया increases oxidation state of carbon (variant 44)?",
    options_en: [
      "Isomerization",
      "Oxidation",
      "Substitution without oxidation",
      "Reduction",
    ],
    answer_en: "Oxidation",
    attempted: false,
    selected: "",
  },
  {
    num: 26,
    question_en:
      "Reactions initiated by radicals often use which initiator (variant 131)",
    question_hi:
      "Reactions initiated by radicals often use which initiator (variant 131)?",
    options_en: ["Peroxides", "Bases", "Acids", "Water"],
    answer_en: "Peroxides",
    attempted: false,
    selected: "",
  },
  {
    num: 27,
    question_en: "Avogadro's number is approximately (variant 161)",
    question_hi: "Avogadro's number है approximately (variant 161)?",
    options_en: ["9.81", "3.00×10^8", "1.602×10^-19", "6.022×10^23"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 28,
    question_en: "Which reagent is a strong oxidizing agent (variant 315)",
    question_hi: "कौन सा reagent है a strong oxidizing agent (variant 315)?",
    options_en: ["O2", "NaCl", "H2", "KMnO4"],
    answer_en: "KMnO4",
    attempted: false,
    selected: "",
  },
  {
    num: 29,
    question_en: "Group 1 metals are called (variant 227)",
    question_hi: "Group 1 metals हैं called (variant 227)?",
    options_en: [
      "Transition metals",
      "Alkali metals",
      "Noble gases",
      "Alkaline earth metals",
    ],
    answer_en: "Alkali metals",
    attempted: false,
    selected: "",
  },
  {
    num: 30,
    question_en: "Half-life of first order reaction is (variant 53)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 53)?",
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
    num: 31,
    question_en:
      "Enthalpy change negative indicates the reaction is (variant 406)",
    question_hi:
      "Enthalpy change negative indicates the अभिक्रिया है (variant 406)?",
    options_en: ["Exothermic", "Isothermal", "Adiabatic", "Endothermic"],
    answer_en: "Exothermic",
    attempted: false,
    selected: "",
  },
  {
    num: 32,
    question_en: "1 mole of ideal gas at STP occupies (approx) (variant 302)",
    question_hi: "1 मोल of ideal गैस at STP occupies (approx) (variant 302)?",
    options_en: ["11.2 L", "22.4 L", "1.0 L", "44.8 L"],
    answer_en: "22.4 L",
    attempted: false,
    selected: "",
  },
  {
    num: 33,
    question_en:
      "Periodic table: which element has highest electronegativity among these (variant 421)",
    question_hi:
      "Periodic table: which element has highest इलेक्ट्रॉनegativity among these (variant 421)?",
    options_en: ["F", "Cl", "N", "O"],
    answer_en: "F",
    attempted: false,
    selected: "",
  },
  {
    num: 34,
    question_en: "Unit of rate constant for first order (variant 132)",
    question_hi: "Unit of rate constant for first order (variant 132)?",
    options_en: ["unitless", "L mol^-1 s^-1", "s^-1", "mol L^-1 s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 35,
    question_en: "Which is a noble gas (variant 178)",
    question_hi: "कौन सा है a noble गैस (variant 178)?",
    options_en: ["F", "N", "Ne", "O"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 36,
    question_en: "Oxidation state of Mn in KMnO4 is (variant 408)",
    question_hi: "Oxidation state of Mn in KMnO4 है (variant 408)?",
    options_en: ["+7", "+2", "+4", "+6"],
    answer_en: "+7",
    attempted: false,
    selected: "",
  },
  {
    num: 37,
    question_en: "Avogadro's number is approximately (variant 341)",
    question_hi: "Avogadro's number है approximately (variant 341)?",
    options_en: ["6.022×10^23", "1.602×10^-19", "9.81", "3.00×10^8"],
    answer_en: "6.022×10^23",
    attempted: false,
    selected: "",
  },
  {
    num: 38,
    question_en: "Half-life of first order reaction is (variant 413)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 413)?",
    options_en: [
      "Proportional to initial conc.",
      "Infinite",
      "Independent of initial concentration",
      "Zero",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 39,
    question_en: "Which reaction converts an alkene to an alkane (variant 409)",
    question_hi:
      "कौन सा अभिक्रिया converts an alkene to an alkane (variant 409)?",
    options_en: [
      "Dehydrogenation",
      "Dehydration",
      "Hydrogenation",
      "Halogenation",
    ],
    answer_en: "Hydrogenation",
    attempted: false,
    selected: "",
  },
  {
    num: 40,
    question_en: "Which is a noble gas (variant 268)",
    question_hi: "कौन सा है a noble गैस (variant 268)?",
    options_en: ["F", "N", "Ne", "O"],
    answer_en: "Ne",
    attempted: false,
    selected: "",
  },
  {
    num: 41,
    question_en: "Common oxidation state of chlorine in Cl2O (variant 492)",
    question_hi: "Common oxidation state of chlorine in Cl2O (variant 492)?",
    options_en: ["0", "+2", "+3", "+1"],
    answer_en: "+1",
    attempted: false,
    selected: "",
  },
  {
    num: 42,
    question_en: "Which block contains transition metals (variant 489)",
    question_hi: "कौन सा block contains transition metals (variant 489)?",
    options_en: ["p-block", "f-block", "s-block", "d-block"],
    answer_en: "d-block",
    attempted: false,
    selected: "",
  },
  {
    num: 43,
    question_en:
      "Which is a typical ligand in coordination chemistry (variant 19)",
    question_hi:
      "कौन सा है a typical ligand in coordination chemहैtry (variant 19)?",
    options_en: ["He", "NH3", "Cl- (spectator)", "Na+"],
    answer_en: "NH3",
    attempted: false,
    selected: "",
  },
  {
    num: 44,
    question_en: "Unit of rate constant for first order (variant 232)",
    question_hi: "Unit of rate constant for first order (variant 232)?",
    options_en: ["L mol^-1 s^-1", "unitless", "mol L^-1 s^-1", "s^-1"],
    answer_en: "s^-1",
    attempted: false,
    selected: "",
  },
  {
    num: 45,
    question_en: "General formula for alkanes is (variant 152)",
    question_hi: "General formula for alkanes है (variant 152)?",
    options_en: ["CnH2n+2", "CnH2n+1", "CnH2n", "CnH2n-2"],
    answer_en: "CnH2n+2",
    attempted: false,
    selected: "",
  },
  {
    num: 46,
    question_en: "Half-life of first order reaction is (variant 193)",
    question_hi: "Half-life of first order अभिक्रिया है (variant 193)?",
    options_en: [
      "Proportional to initial conc.",
      "Zero",
      "Infinite",
      "Independent of initial concentration",
    ],
    answer_en: "Independent of initial concentration",
    attempted: false,
    selected: "",
  },
  {
    num: 47,
    question_en: "Bond enthalpy usually refers to breaking of (variant 360)",
    question_hi: "Bond enthalpy usually refers to breaking of (variant 360)?",
    options_en: [
      "1 mole of liquid bonds",
      "1 mole of solid bonds",
      "1 mole of ionic pairs",
      "1 mole of gaseous bonds",
    ],
    answer_en: "1 mole of gaseous bonds",
    attempted: false,
    selected: "",
  },
  {
    num: 48,
    question_en:
      "Which reagent oxidizes primary alcohol to aldehyde (mild) (variant 396)",
    question_hi:
      "कौन सा reagent oxidizes primary alcohol to aldehyde (mild) (variant 396)?",
    options_en: ["PCC", "KMnO4", "NaBH4", "H2/Pd"],
    answer_en: "PCC",
    attempted: false,
    selected: "",
  },
  {
    num: 49,
    question_en: "Which compound is aromatic (variant 400)",
    question_hi: "कौन सा compound है aromatic (variant 400)?",
    options_en: ["Benzene", "Cyclohexane", "Cyclobutane", "1,3,5-Heptatriene"],
    answer_en: "Benzene",
    attempted: false,
    selected: "",
  },
  {
    num: 50,
    question_en: "Which is a good leaving group (variant 58)",
    question_hi: "कौन सा है a good leaving group (variant 58)?",
    options_en: ["Br-", "H-", "NH2-", "CH3-"],
    answer_en: "Br-",
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
