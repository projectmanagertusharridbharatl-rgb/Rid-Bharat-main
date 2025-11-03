


const questions = [
    
        {
            "num": 1,
            "question_en": "Who is the author of 'Uttar Kardant'?",
            "question_hi": "'उत्तर कार्डेंट' के लेखक कौन हैं?",
            "options_en": ["Premchand", "Yashpal", "Jayashankar Prasad", "Mahadevi Verma"],
            "options_hi": ["प्रेमचंद", "यशपाल", "जयशंकर प्रसाद", "महादेवी वर्मा"],
            "answer_en": "Yashpal",
            "answer_hi": "यशपाल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "Which of these is a 'Riti Kaavya' poet?",
            "question_hi": "इनमें से कौन 'रीति काव्य' के कवि हैं?",
            "options_en": ["Kabir", "Tulsidas", "Bihari", "Nirala"],
            "options_hi": ["कबीर", "तुलसीदास", "बिहारी", "निराला"],
            "answer_en": "Bihari",
            "answer_hi": "बिहारी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "In which lesson does 'Harihar Kaka' character appear?",
            "question_hi": "'हरिहर काका' पात्र किस पाठ में आता है?",
            "options_en": ["Netaji Ka Chashma", "Sana Sana Hath Jodi", "Harihar Kaka", "Mata Ka Aanchal"],
            "options_hi": ["नेताजी का चश्मा", "साना साना हाथ जोड़ि", "हरिहर काका", "माता का आँचल"],
            "answer_en": "Harihar Kaka",
            "answer_hi": "हरिहर काका",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "What is the main theme of 'Kartoos' story?",
            "question_hi": "'कारतूस' कहानी का मुख्य विषय क्या है?",
            "options_en": ["Freedom Struggle", "Love Story", "Social Reform", "Comedy"],
            "options_hi": ["आजादी की लड़ाई", "प्रेम कहानी", "सामाजिक सुधार", "कॉमेडी"],
            "answer_en": "Freedom Struggle",
            "answer_hi": "आजादी की लड़ाई",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "Which poet wrote 'Surdas Ke Pad'?",
            "question_hi": "'सूरदास के पद' किस कवि ने लिखे?",
            "options_en": ["Tulsidas", "Surdas", "Kabir", "Meera"],
            "options_hi": ["तुलसीदास", "सूरदास", "कबीर", "मीरा"],
            "answer_en": "Surdas",
            "answer_hi": "सूरदास",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "What is the meaning of 'Teen Dasak' in Hindi literature?",
            "question_hi": "हिंदी साहित्य में 'तीन दशक' का क्या अर्थ है?",
            "options_en": ["Three Decades", "Three Poets", "Three Stories", "Three Eras"],
            "options_hi": ["तीन दशक", "तीन कवि", "तीन कहानियाँ", "तीन युग"],
            "answer_en": "Three Decades",
            "answer_hi": "तीन दशक",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "Which chapter describes Gangtok's beauty?",
            "question_hi": "गंगटोक की सुंदरता का वर्णन किस पाठ में है?",
            "options_en": ["Sana Sana Hath Jodi", "Netaji Ka Chashma", "Harihar Kaka", "Mata Ka Aanchal"],
            "options_hi": ["साना साना हाथ जोड़ि", "नेताजी का चश्मा", "हरिहर काका", "माता का आँचल"],
            "answer_en": "Sana Sana Hath Jodi",
            "answer_hi": "साना साना हाथ जोड़ि",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "What is the writing style of 'Mata Ka Aanchal'?",
            "question_hi": "'माता का आँचल' की लेखन शैली क्या है?",
            "options_en": ["Autobiographical", "Satirical", "Dramatic", "Poetic"],
            "options_hi": ["आत्मकथात्मक", "व्यंग्यात्मक", "नाटकीय", "काव्यात्मक"],
            "answer_en": "Autobiographical",
            "answer_hi": "आत्मकथात्मक",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "Which poet is known as 'Rashtrakavi'?",
            "question_hi": "किस कवि को 'राष्ट्रकवि' कहा जाता है?",
            "options_en": ["Maithili Sharan Gupt", "Ramdhari Singh Dinkar", "Suryakant Tripathi Nirala", "Harivansh Rai Bachchan"],
            "options_hi": ["मैथिलीशरण गुप्त", "रामधारी सिंह दिनकर", "सूर्यकांत त्रिपाठी निराला", "हरिवंश राय बच्चन"],
            "answer_en": "Maithili Sharan Gupt",
            "answer_hi": "मैथिलीशरण गुप्त",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "In which lesson does 'Halku' character appear?",
            "question_hi": "'हल्कू' पात्र किस पाठ में आता है?",
            "options_en": ["Bade Bhai Sahab", "Halku", "Kartoos", "Netaji Ka Chashma"],
            "options_hi": ["बड़े भाई साहब", "हल्कू", "कारतूस", "नेताजी का चश्मा"],
            "answer_en": "Halku",
            "answer_hi": "हल्कू",
            "attempted": false,
            "selected": ""
        },
    
    
        {
            "num": 11,
            "question_en": "Which poet wrote 'Ram-Lakshman-Parshuram Samvad'?",
            "question_hi": "'राम-लक्ष्मण-परशुराम संवाद' किस कवि की रचना है?",
            "options_en": ["Tulsidas", "Kabir", "Surdas", "Maithili Sharan Gupt"],
            "options_hi": ["तुलसीदास", "कबीर", "सूरदास", "मैथिलीशरण गुप्त"],
            "answer_en": "Tulsidas",
            "answer_hi": "तुलसीदास",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "What is the main theme of 'Bade Bhai Sahab'?",
            "question_hi": "'बड़े भाई साहब' कहानी का मुख्य विषय क्या है?",
            "options_en": ["Sibling Rivalry", "Education System", "Social Inequality", "Freedom Struggle"],
            "options_hi": ["भाई-भाई में प्रतिस्पर्धा", "शिक्षा प्रणाली", "सामाजिक असमानता", "आजादी की लड़ाई"],
            "answer_en": "Sibling Rivalry",
            "answer_hi": "भाई-भाई में प्रतिस्पर्धा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
            "question_en": "In which lesson does the character 'Mohan' appear?",
            "question_hi": "'मोहन' पात्र किस पाठ में आता है?",
            "options_en": ["Diary Ka Ek Panna", "Sana Sana Hath Jodi", "Mata Ka Aanchal", "Kartoos"],
            "options_hi": ["डायरी का एक पन्ना", "साना साना हाथ जोड़ि", "माता का आँचल", "कारतूस"],
            "answer_en": "Diary Ka Ek Panna",
            "answer_hi": "डायरी का एक पन्ना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 14,
            "question_en": "Which literary device is prominently used in Bihari's 'Dohe'?",
            "question_hi": "बिहारी के 'दोहे' में कौन-सा साहित्यिक अलंकार प्रमुख है?",
            "options_en": ["Anupras", "Yamak", "Shlesh", "Upma"],
            "options_hi": ["अनुप्रास", "यमक", "श्लेष", "उपमा"],
            "answer_en": "Shlesh",
            "answer_hi": "श्लेष",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "Who is the author of 'Mata Ka Aanchal'?",
            "question_hi": "'माता का आँचल' के लेखक कौन हैं?",
            "options_en": ["Premchand", "Yashpal", "Bhishma Sahni", "Phanishwar Nath Renu"],
            "options_hi": ["प्रेमचंद", "यशपाल", "भीष्म साहनी", "फणीश्वर नाथ रेणु"],
            "answer_en": "Phanishwar Nath Renu",
            "answer_hi": "फणीश्वर नाथ रेणु",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 16,
            "question_en": "Which chapter describes the Jallianwala Bagh massacre?",
            "question_hi": "जलियाँवाला बाग हत्याकांड का वर्णन किस पाठ में है?",
            "options_en": ["Diary Ka Ek Panna", "Kartoos", "Netaji Ka Chashma", "Harihar Kaka"],
            "options_hi": ["डायरी का एक पन्ना", "कारतूस", "नेताजी का चश्मा", "हरिहर काका"],
            "answer_en": "Diary Ka Ek Panna",
            "answer_hi": "डायरी का एक पन्ना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "What is the meaning of 'Kshitij' in the textbook name?",
            "question_hi": "पाठ्यपुस्तक नाम 'क्षितिज' का क्या अर्थ है?",
            "options_en": ["Horizon", "Sky", "Earth", "Light"],
            "options_hi": ["क्षितिज (दूर का दृश्य)", "आकाश", "धरती", "प्रकाश"],
            "answer_en": "Horizon",
            "answer_hi": "क्षितिज (दूर का दृश्य)",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "Which poet wrote 'Fasal' poem?",
            "question_hi": "'फसल' कविता किसने लिखी?",
            "options_en": ["Ramdhari Singh Dinkar", "Suryakant Tripathi Nirala", "Rahim", "Nagarguna"],
            "options_hi": ["रामधारी सिंह दिनकर", "सूर्यकांत त्रिपाठी निराला", "रहीम", "नागार्जुन"],
            "answer_en": "Nagarguna",
            "answer_hi": "नागार्जुन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "Which lesson is based on Mahatma Gandhi's life?",
            "question_hi": "कौन-सा पाठ महात्मा गांधी के जीवन पर आधारित है?",
            "options_en": ["Diary Ka Ek Panna", "Netaji Ka Chashma", "Bade Bhai Sahab", "Kartoos"],
            "options_hi": ["डायरी का एक पन्ना", "नेताजी का चश्मा", "बड़े भाई साहब", "कारतूस"],
            "answer_en": "Diary Ka Ek Panna",
            "answer_hi": "डायरी का एक पन्ना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "What is the pen name of 'Premchand'?",
            "question_hi": "'प्रेमचंद' का मूल नाम क्या था?",
            "options_en": ["Dhanpat Rai", "Nawab Rai", "Munshi Premchand", "Both A and B"],
            "options_hi": ["धनपत राय", "नवाब राय", "मुंशी प्रेमचंद", "A और B दोनों"],
            "answer_en": "Both A and B",
            "answer_hi": "A और B दोनों",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 21,
            "question_en": "Which literary work is written by Jayashankar Prasad?",
            "question_hi": "जयशंकर प्रसाद द्वारा रचित साहित्यिक कार्य कौन-सा है?",
            "options_en": ["Godan", "Kamayani", "Gaban", "Nirmala"],
            "options_hi": ["गोदान", "कामायनी", "गबन", "निर्मला"],
            "answer_en": "Kamayani",
            "answer_hi": "कामायनी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 22,
            "question_en": "In 'Sana Sana Hath Jodi', which place is described?",
            "question_hi": "'साना साना हाथ जोड़ि' में किस स्थान का वर्णन है?",
            "options_en": ["Gangtok", "Darjeeling", "Shimla", "Manali"],
            "options_hi": ["गंगटोक", "दार्जिलिंग", "शिमला", "मनाली"],
            "answer_en": "Gangtok",
            "answer_hi": "गंगटोक",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 23,
            "question_en": "Which figure of speech is used in 'Rahim Ke Dohe'?",
            "question_hi": "'रहीम के दोहे' में कौन-सा अलंकार प्रयुक्त हुआ है?",
            "options_en": ["Anupras", "Upma", "Yamak", "All of these"],
            "options_hi": ["अनुप्रास", "उपमा", "यमक", "ये सभी"],
            "answer_en": "All of these",
            "answer_hi": "ये सभी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 24,
            "question_en": "What is the main conflict in 'Kartoos'?",
            "question_hi": "'कारतूस' कहानी में मुख्य संघर्ष क्या है?",
            "options_en": ["British vs Indian Soldiers", "Family Dispute", "Love Triangle", "Village Politics"],
            "options_hi": ["अंग्रेजों vs भारतीय सैनिक", "पारिवारिक विवाद", "प्रेम त्रिकोण", "गाँव की राजनीति"],
            "answer_en": "British vs Indian Soldiers",
            "answer_hi": "अंग्रेजों vs भारतीय सैनिक",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 25,
            "question_en": "Which poet is associated with 'Chhayavaad'?",
            "question_hi": "किस कवि का संबंध 'छायावाद' से है?",
            "options_en": ["Kabir", "Tulsidas", "Mahadevi Verma", "Bihari"],
            "options_hi": ["कबीर", "तुलसीदास", "महादेवी वर्मा", "बिहारी"],
            "answer_en": "Mahadevi Verma",
            "answer_hi": "महादेवी वर्मा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 26,
            "question_en": "What is the genre of 'Netaji Ka Chashma'?",
            "question_hi": "'नेताजी का चश्मा' किस विधा की रचना है?",
            "options_en": ["Satire", "Tragedy", "Biography", "Drama"],
            "options_hi": ["व्यंग्य", "ट्रेजडी", "जीवनी", "नाटक"],
            "answer_en": "Satire",
            "answer_hi": "व्यंग्य",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 27,
            "question_en": "Which lesson discusses the importance of trees?",
            "question_hi": "किस पाठ में पेड़ों का महत्व चर्चित है?",
            "options_en": ["Fasal", "Harihar Kaka", "Sana Sana Hath Jodi", "Mata Ka Aanchal"],
            "options_hi": ["फसल", "हरिहर काका", "साना साना हाथ जोड़ि", "माता का आँचल"],
            "answer_en": "Fasal",
            "answer_hi": "फसल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 28,
            "question_en": "Who wrote 'Bihari Ke Dohe'?",
            "question_hi": "'बिहारी के दोहे' किसने लिखे?",
            "options_en": ["Bihari Lal", "Kabir Das", "Rahim", "Tulsidas"],
            "options_hi": ["बिहारी लाल", "कबीर दास", "रहीम", "तुलसीदास"],
            "answer_en": "Bihari Lal",
            "answer_hi": "बिहारी लाल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 29,
            "question_en": "Which chapter is written by Shivpujan Sahay?",
            "question_hi": "कौन-सा पाठ शिवपूजन सहाय द्वारा लिखा गया है?",
            "options_en": ["Mata Ka Aanchal", "Harihar Kaka", "Netaji Ka Chashma", "Diary Ka Ek Panna"],
            "options_hi": ["माता का आँचल", "हरिहर काका", "नेताजी का चश्मा", "डायरी का एक पन्ना"],
            "answer_en": "Netaji Ka Chashma",
            "answer_hi": "नेताजी का चश्मा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 30,
            "question_en": "What is the central idea of 'Fasal' poem?",
            "question_hi": "'फसल' कविता का केंद्रीय भाव क्या है?",
            "options_en": ["Farmer's Hard Work", "Nature's Beauty", "Cycle of Seasons", "All of these"],
            "options_hi": ["किसान की मेहनत", "प्रकृति की सुंदरता", "ऋतुओं का चक्र", "ये सभी"],
            "answer_en": "All of these",
            "answer_hi": "ये सभी",
            "attempted": false,
            "selected": ""
        }
    

// Add more questions here...
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
