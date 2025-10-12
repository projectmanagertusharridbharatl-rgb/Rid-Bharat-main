const questions = [
   {
    num: 26,
    question_en: "Which city is the capital of Gujarat?",
    question_hi: "गुजरात की राजधानी कौन सी है?",
    options_en: ["Surat", "Ahmedabad", "Gandhinagar", "Vadodara"],
    options_hi: ["सूरत", "अहमदाबाद", "गांधीनगर", "वडोदरा"],
    answer_en: "Gandhinagar",
    answer_hi: "गांधीनगर",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which city is known as the 'City of Temples'?",
    question_hi: "कौन सा शहर 'मंदिरों का शहर' कहलाता है?",
    options_en: ["Varanasi", "Haridwar", "Puri", "Rishikesh"],
    options_hi: ["वाराणसी", "हरिद्वार", "पुरी", "ऋषिकेश"],
    answer_en: "Varanasi",
    answer_hi: "वाराणसी",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which city is the capital of Andhra Pradesh?",
    question_hi: "आंध्र प्रदेश की राजधानी कौन सी है?",
    options_en: ["Visakhapatnam", "Vijayawada", "Amaravati", "Tirupati"],
    options_hi: ["विशाखापत्तनम", "विजयवाड़ा", "अमरावती", "तिरुपति"],
    answer_en: "Amaravati",
    answer_hi: "अमरावती",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which city is called the 'City of Nawabs' besides Lucknow?",
    question_hi: "लखनऊ के अलावा कौन सा शहर 'नवाबों का शहर' कहलाता है?",
    options_en: ["Hyderabad", "Patna", "Kolkata", "Jaipur"],
    options_hi: ["हैदराबाद", "पटना", "कोलकाता", "जयपुर"],
    answer_en: "Hyderabad",
    answer_hi: "हैदराबाद",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which city is known as the 'Granite City'?",
    question_hi: "कौन सा शहर 'ग्रेनाइट सिटी' के नाम से जाना जाता है?",
    options_en: ["Bangalore", "Hyderabad", "Chennai", "Coimbatore"],
    options_hi: ["बैंगलोर", "हैदराबाद", "चेन्नई", "कोयंबटूर"],
    answer_en: "Coimbatore",
    answer_hi: "कोयंबटूर",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which city is the capital of Himachal Pradesh?",
    question_hi: "हिमाचल प्रदेश की राजधानी कौन सी है?",
    options_en: ["Shimla", "Manali", "Dharamshala", "Mandi"],
    options_hi: ["शिमला", "मनाली", "धर्मशाला", "मंडी"],
    answer_en: "Shimla",
    answer_hi: "शिमला",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which city is called the 'City of Lakes' other than Udaipur?",
    question_hi: "उदयपुर के अलावा कौन सा शहर 'झीलों का शहर' कहलाता है?",
    options_en: ["Bhopal", "Indore", "Jodhpur", "Pune"],
    options_hi: ["भोपाल", "इंदौर", "जोधपुर", "पुणे"],
    answer_en: "Bhopal",
    answer_hi: "भोपाल",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which city is the capital of Assam?",
    question_hi: "असम की राजधानी कौन सी है?",
    options_en: ["Guwahati", "Dispur", "Jorhat", "Silchar"],
    options_hi: ["गुवाहाटी", "दिसपुर", "जोरहाट", "सिलचर"],
    answer_en: "Dispur",
    answer_hi: "दिसपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which city is known as the 'City of Palaces'?",
    question_hi: "कौन सा शहर 'महलों का शहर' कहलाता है?",
    options_en: ["Bikaner", "Udaipur", "Jaipur", "Jodhpur"],
    options_hi: ["बीकानेर", "उदयपुर", "जयपुर", "जोधपुर"],
    answer_en: "Bikaner",
    answer_hi: "बीकानेर",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which city is the capital of Jharkhand?",
    question_hi: "झारखंड की राजधानी कौन सी है?",
    options_en: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
    options_hi: ["रांची", "जमशेदपुर", "धनबाद", "बोकारो"],
    answer_en: "Ranchi",
    answer_hi: "रांची",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which city is known as the 'City of Festivals'?",
    question_hi: "कौन सा शहर 'त्योहारों का शहर' कहलाता है?",
    options_en: ["Varanasi", "Mumbai", "Delhi", "Kolkata"],
    options_hi: ["वाराणसी", "मुंबई", "दिल्ली", "कोलकाता"],
    answer_en: "Varanasi",
    answer_hi: "वाराणसी",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which city is the capital of Odisha?",
    question_hi: "ओड़िशा की राजधानी कौन सी है?",
    options_en: ["Bhubaneswar", "Cuttack", "Puri", "Rourkela"],
    options_hi: ["भुवनेश्वर", "कटक", "पुरी", "राउरकेला"],
    answer_en: "Bhubaneswar",
    answer_hi: "भुवनेश्वर",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which city is the capital of Chhattisgarh?",
    question_hi: "छत्तीसगढ़ की राजधानी कौन सी है?",
    options_en: ["Raipur", "Bhilai", "Durg", "Bilaspur"],
    options_hi: ["रायपुर", "भिलाई", "दुर्ग", "बिलासपुर"],
    answer_en: "Raipur",
    answer_hi: "रायपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which city is called the 'City of Destiny'?",
    question_hi: "कौन सा शहर 'नियति का शहर' कहलाता है?",
    options_en: ["Visakhapatnam", "Hyderabad", "Bangalore", "Chennai"],
    options_hi: ["विशाखापत्तनम", "हैदराबाद", "बैंगलोर", "चेन्नई"],
    answer_en: "Visakhapatnam",
    answer_hi: "विशाखापत्तनम",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which city is the capital of Sikkim?",
    question_hi: "सिक्किम की राजधानी कौन सी है?",
    options_en: ["Gangtok", "Namchi", "Pelling", "Mangan"],
    options_hi: ["गंगटोक", "नामची", "पेलिंग", "मांगन"],
    answer_en: "Gangtok",
    answer_hi: "गंगटोक",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which city is the capital of Tripura?",
    question_hi: "त्रिपुरा की राजधानी कौन सी है?",
    options_en: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar"],
    options_hi: ["अगर्तला", "उदयपुर", "धर्मनगर", "कैलाशहार"],
    answer_en: "Agartala",
    answer_hi: "अगर्तला",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which city is known as the 'City of Joy'?",
    question_hi: "कौन सा शहर 'खुशी का शहर' कहलाता है?",
    options_en: ["Kolkata", "Mumbai", "Chennai", "Hyderabad"],
    options_hi: ["कोलकाता", "मुंबई", "चेन्नई", "हैदराबाद"],
    answer_en: "Kolkata",
    answer_hi: "कोलकाता",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which city is the capital of Nagaland?",
    question_hi: "नागालैंड की राजधानी कौन सी है?",
    options_en: ["Kohima", "Dimapur", "Mokokchung", "Wokha"],
    options_hi: ["कोहिमा", "डिमापुर", "मोकोकचुंग", "वोखा"],
    answer_en: "Kohima",
    answer_hi: "कोहिमा",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which city is the capital of Punjab?",
    question_hi: "पंजाब की राजधानी कौन सी है?",
    options_en: ["Chandigarh", "Amritsar", "Ludhiana", "Jalandhar"],
    options_hi: ["चंडीगढ़", "अमृतसर", "लुधियाना", "जालंधर"],
    answer_en: "Chandigarh",
    answer_hi: "चंडीगढ़",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which city is the capital of Rajasthan?",
    question_hi: "राजस्थान की राजधानी कौन सी है?",
    options_en: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"],
    options_hi: ["जयपुर", "जोधपुर", "उदयपुर", "अजमेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which city is the capital of Tamil Nadu?",
    question_hi: "तमिलनाडु की राजधानी कौन सी है?",
    options_en: ["Chennai", "Coimbatore", "Madurai", "Salem"],
    options_hi: ["चेन्नई", "कोयंबटूर", "मदुरै", "सेलम"],
    answer_en: "Chennai",
    answer_hi: "चेन्नई",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which city is the capital of Telangana?",
    question_hi: "तेलंगाना की राजधानी कौन सी है?",
    options_en: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    options_hi: ["हैदराबाद", "वारंगल", "निज़ामाबाद", "करीमनगर"],
    answer_en: "Hyderabad",
    answer_hi: "हैदराबाद",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which city is the capital of Uttarakhand?",
    question_hi: "उत्तराखंड की राजधानी कौन सी है?",
    options_en: ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
    options_hi: ["देहरादून", "हरिद्वार", "नैनीताल", "ऋषिकेश"],
    answer_en: "Dehradun",
    answer_hi: "देहरादून",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which city is the capital of West Bengal?",
    question_hi: "पश्चिम बंगाल की राजधानी कौन सी है?",
    options_en: ["Kolkata", "Darjeeling", "Siliguri", "Howrah"],
    options_hi: ["कोलकाता", "दार्जिलिंग", "सिलीगुड़ी", "हावड़ा"],
    answer_en: "Kolkata",
    answer_hi: "कोलकाता",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which city is known as the 'Pink City'?",
    question_hi: "कौन सा शहर 'गुलाबी शहर' कहलाता है?",
    options_en: ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
    options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "अजमेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  
    // Continue adding more questions up to 30
];


let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

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
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
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
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}

function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
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
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
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
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
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
