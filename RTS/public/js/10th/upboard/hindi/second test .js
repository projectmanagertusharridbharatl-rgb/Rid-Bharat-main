


const questions = [
    
        {
            "num": 1,
            "question_en": "Which chapter describes the beauty of the Himalayas?",
            "question_hi": "हिमालय की सुंदरता का वर्णन किस पाठ में है?",
            "options_en": ["Sana Sana Hath Jodi", "Netaji Ka Chashma", "Harihar Kaka", "Mata Ka Aanchal"],
            "options_hi": ["साना साना हाथ जोड़ि", "नेताजी का चश्मा", "हरिहर काका", "माता का आँचल"],
            "answer_en": "Sana Sana Hath Jodi",
            "answer_hi": "साना साना हाथ जोड़ि",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "Who is the author of 'Netaji Ka Chashma'?",
            "question_hi": "'नेताजी का चश्मा' के लेखक कौन हैं?",
            "options_en": ["Premchand", "Shivpujan Sahay", "Yashpal", "Mahadevi Verma"],
            "options_hi": ["प्रेमचंद", "शिवपूजन सहाय", "यशपाल", "महादेवी वर्मा"],
            "answer_en": "Shivpujan Sahay",
            "answer_hi": "शिवपूजन सहाय",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "Which poetic work is written by Surdas?",
            "question_hi": "सूरदास द्वारा रचित काव्य कौन-सा है?",
            "options_en": ["Ramcharitmanas", "Sur Sagar", "Vinay Patrika", "Sakhi"],
            "options_hi": ["रामचरितमानस", "सूर सागर", "विनय पत्रिका", "साखी"],
            "answer_en": "Sur Sagar",
            "answer_hi": "सूर सागर",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "What is the main theme of 'Diary Ka Ek Panna'?",
            "question_hi": "'डायरी का एक पन्ना' का मुख्य विषय क्या है?",
            "options_en": ["Gandhi's Childhood", "Jallianwala Bagh Massacre", "Independence Day", "Partition of India"],
            "options_hi": ["गांधी का बचपन", "जलियाँवाला बाग हत्याकांड", "स्वतंत्रता दिवस", "भारत का विभाजन"],
            "answer_en": "Jallianwala Bagh Massacre",
            "answer_hi": "जलियाँवाला बाग हत्याकांड",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "Which literary period does Bihari belong to?",
            "question_hi": "बिहारी किस साहित्यिक काल से संबंधित हैं?",
            "options_en": ["Bhakti Kaal", "Riti Kaal", "Chhayavaad", "Adhunik Kaal"],
            "options_hi": ["भक्ति काल", "रीति काल", "छायावाद", "आधुनिक काल"],
            "answer_en": "Riti Kaal",
            "answer_hi": "रीति काल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 6,
            "question_en": "In which lesson does the character 'Wazir Ali' appear?",
            "question_hi": "'वजीर अली' पात्र किस पाठ में आता है?",
            "options_en": ["Kartoos", "Harihar Kaka", "Netaji Ka Chashma", "Bade Bhai Sahab"],
            "options_hi": ["कारतूस", "हरिहर काका", "नेताजी का चश्मा", "बड़े भाई साहब"],
            "answer_en": "Kartoos",
            "answer_hi": "कारतूस",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 7,
            "question_en": "What is the meaning of 'Kshitij' in Hindi literature?",
            "question_hi": "हिंदी साहित्य में 'क्षितिज' का क्या अर्थ है?",
            "options_en": ["New Beginnings", "Horizon of Knowledge", "Light of Wisdom", "Era of Change"],
            "options_hi": ["नई शुरुआत", "ज्ञान का क्षितिज", "ज्ञान का प्रकाश", "परिवर्तन का युग"],
            "answer_en": "Horizon of Knowledge",
            "answer_hi": "ज्ञान का क्षितिज",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 8,
            "question_en": "Which poet is known for 'Rahim Ke Dohe'?",
            "question_hi": "'रहीम के दोहे' के लिए किस कवि को जाना जाता है?",
            "options_en": ["Kabir", "Tulsidas", "Rahim", "Surdas"],
            "options_hi": ["कबीर", "तुलसीदास", "रहीम", "सूरदास"],
            "answer_en": "Rahim",
            "answer_hi": "रहीम",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 9,
            "question_en": "What is the writing style of 'Bade Bhai Sahab'?",
            "question_hi": "'बड़े भाई साहब' की लेखन शैली क्या है?",
            "options_en": ["Humorous", "Satirical", "Tragic", "Philosophical"],
            "options_hi": ["हास्यपूर्ण", "व्यंग्यात्मक", "दुखांत", "दार्शनिक"],
            "answer_en": "Humorous",
            "answer_hi": "हास्यपूर्ण",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 10,
            "question_en": "Which chapter is based on a true historical event?",
            "question_hi": "कौन-सा पाठ एक वास्तविक ऐतिहासिक घटना पर आधारित है?",
            "options_en": ["Diary Ka Ek Panna", "Mata Ka Aanchal", "Harihar Kaka", "Sana Sana Hath Jodi"],
            "options_hi": ["डायरी का एक पन्ना", "माता का आँचल", "हरिहर काका", "साना साना हाथ जोड़ि"],
            "answer_en": "Diary Ka Ek Panna",
            "answer_hi": "डायरी का एक पन्ना",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 11,
            "question_en": "Who wrote the poem 'Fasal'?",
            "question_hi": "'फसल' कविता किसने लिखी?",
            "options_en": ["Nagarjun", "Ramdhari Singh Dinkar", "Mahadevi Verma", "Harivansh Rai Bachchan"],
            "options_hi": ["नागार्जुन", "रामधारी सिंह दिनकर", "महादेवी वर्मा", "हरिवंश राय बच्चन"],
            "answer_en": "Nagarjun",
            "answer_hi": "नागार्जुन",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 12,
            "question_en": "What is the central emotion in 'Surdas Ke Pad'?",
            "question_hi": "'सूरदास के पद' में केंद्रीय भावना क्या है?",
            "options_en": ["Bhakti (Devotion)", "Shringar (Romance)", "Veer Ras (Heroism)", "Karuna (Compassion)"],
            "options_hi": ["भक्ति", "श्रृंगार", "वीर रस", "करुणा"],
            "answer_en": "Bhakti (Devotion)",
            "answer_hi": "भक्ति",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 13,
            "question_en": "Which lesson highlights the bond between mother and child?",
            "question_hi": "किस पाठ में माँ और बच्चे के बीच के बंधन को उजागर किया गया है?",
            "options_en": ["Mata Ka Aanchal", "Bade Bhai Sahab", "Kartoos", "Netaji Ka Chashma"],
            "options_hi": ["माता का आँचल", "बड़े भाई साहब", "कारतूस", "नेताजी का चश्मा"],
            "answer_en": "Mata Ka Aanchal",
            "answer_hi": "माता का आँचल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 14,
            "question_en": "What is the genre of 'Harihar Kaka'?",
            "question_hi": "'हरिहर काका' किस विधा की रचना है?",
            "options_en": ["Autobiography", "Satire", "Social Drama", "Tragedy"],
            "options_hi": ["आत्मकथा", "व्यंग्य", "सामाजिक नाटक", "दुखांत कथा"],
            "answer_en": "Social Drama",
            "answer_hi": "सामाजिक नाटक",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 15,
            "question_en": "Which literary figure is associated with 'Chhayavaad'?",
            "question_hi": "किस साहित्यिक व्यक्तित्व का संबंध 'छायावाद' से है?",
            "options_en": ["Mahadevi Verma", "Premchand", "Kabir", "Tulsidas"],
            "options_hi": ["महादेवी वर्मा", "प्रेमचंद", "कबीर", "तुलसीदास"],
            "answer_en": "Mahadevi Verma",
            "answer_hi": "महादेवी वर्मा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 16,
            "question_en": "In 'Ram-Lakshman-Parshuram Samvad', what is the main conflict?",
            "question_hi": "'राम-लक्ष्मण-परशुराम संवाद' में मुख्य संघर्ष क्या है?",
            "options_en": ["Wealth vs Poverty", "Knowledge vs Ignorance", "Pride vs Humility", "Power vs Weakness"],
            "options_hi": ["धन vs गरीबी", "ज्ञान vs अज्ञान", "गर्व vs विनम्रता", "शक्ति vs कमजोरी"],
            "answer_en": "Pride vs Humility",
            "answer_hi": "गर्व vs विनम्रता",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 17,
            "question_en": "Which chapter is written by Madhu Kankaria?",
            "question_hi": "कौन-सा पाठ मधु कांकरिया द्वारा लिखा गया है?",
            "options_en": ["Sana Sana Hath Jodi", "Diary Ka Ek Panna", "Harihar Kaka", "Mata Ka Aanchal"],
            "options_hi": ["साना साना हाथ जोड़ि", "डायरी का एक पन्ना", "हरिहर काका", "माता का आँचल"],
            "answer_en": "Sana Sana Hath Jodi",
            "answer_hi": "साना साना हाथ जोड़ि",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 18,
            "question_en": "What is the primary language of 'Bihari Ke Dohe'?",
            "question_hi": "'बिहारी के दोहे' की प्राथमिक भाषा क्या है?",
            "options_en": ["Braj Bhasha", "Awadhi", "Khadi Boli", "Maithili"],
            "options_hi": ["ब्रज भाषा", "अवधी", "खड़ी बोली", "मैथिली"],
            "answer_en": "Braj Bhasha",
            "answer_hi": "ब्रज भाषा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 19,
            "question_en": "Which lesson discusses rural life in India?",
            "question_hi": "किस पाठ में भारत के ग्रामीण जीवन की चर्चा है?",
            "options_en": ["Mata Ka Aanchal", "Netaji Ka Chashma", "Diary Ka Ek Panna", "Sana Sana Hath Jodi"],
            "options_hi": ["माता का आँचल", "नेताजी का चश्मा", "डायरी का एक पन्ना", "साना साना हाथ जोड़ि"],
            "answer_en": "Mata Ka Aanchal",
            "answer_hi": "माता का आँचल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 20,
            "question_en": "What is the moral of 'Bade Bhai Sahab'?",
            "question_hi": "'बड़े भाई साहब' की शिक्षा क्या है?",
            "options_en": ["Hard Work Pays Off", "Education is Everything", "Enjoy Life", "Balance Studies and Play"],
            "options_hi": ["मेहनत का फल मिलता है", "शिक्षा ही सब कुछ है", "जीवन का आनंद लो", "पढ़ाई और खेल में संतुलन रखें"],
            "answer_en": "Balance Studies and Play",
            "answer_hi": "पढ़ाई और खेल में संतुलन रखें",
            "attempted": false,
            "selected": ""
        },
        
            {
                "num": 21,
                "question_en": "Which literary device is predominantly used in Bihari's couplets?",
                "question_hi": "बिहारी के दोहों में मुख्य रूप से कौन-सा साहित्यिक अलंकार प्रयुक्त होता है?",
                "options_en": ["Shlesh (Pun)", "Anupras (Alliteration)", "Upma (Simile)", "Atishayokti (Hyperbole)"],
                "options_hi": ["श्लेष", "अनुप्रास", "उपमा", "अतिशयोक्ति"],
                "answer_en": "Shlesh (Pun)",
                "answer_hi": "श्लेष",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 22,
                "question_en": "In which lesson does the concept of 'Gramin Jeevan' (Rural Life) appear prominently?",
                "question_hi": "किस पाठ में 'ग्रामीण जीवन' की अवधारणा प्रमुखता से आती है?",
                "options_en": ["Mata Ka Aanchal", "Sana Sana Hath Jodi", "Netaji Ka Chashma", "Diary Ka Ek Panna"],
                "options_hi": ["माता का आँचल", "साना साना हाथ जोड़ि", "नेताजी का चश्मा", "डायरी का एक पन्ना"],
                "answer_en": "Mata Ka Aanchal",
                "answer_hi": "माता का आँचल",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 23,
                "question_en": "Who is the protagonist in 'Harihar Kaka'?",
                "question_hi": "'हरिहर काका' का मुख्य पात्र कौन है?",
                "options_en": ["An old man", "A young boy", "A school teacher", "A freedom fighter"],
                "options_hi": ["एक बूढ़ा व्यक्ति", "एक युवा लड़का", "एक स्कूल शिक्षक", "एक स्वतंत्रता सेनानी"],
                "answer_en": "An old man",
                "answer_hi": "एक बूढ़ा व्यक्ति",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 24,
                "question_en": "Which of these is a 'Veer Ras' poem in your syllabus?",
                "question_hi": "इनमें से कौन-सी 'वीर रस' की कविता आपके पाठ्यक्रम में है?",
                "options_en": ["Surdas Ke Pad", "Ram-Lakshman-Parshuram Samvad", "Fasal", "Rahim Ke Dohe"],
                "options_hi": ["सूरदास के पद", "राम-लक्ष्मण-परशुराम संवाद", "फसल", "रहीम के दोहे"],
                "answer_en": "Ram-Lakshman-Parshuram Samvad",
                "answer_hi": "राम-लक्ष्मण-परशुराम संवाद",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 25,
                "question_en": "What historical event is the backdrop of 'Diary Ka Ek Panna'?",
                "question_hi": "'डायरी का एक पन्ना' की पृष्ठभूमि में कौन-सा ऐतिहासिक घटनाक्रम है?",
                "options_en": ["1857 Revolt", "Jallianwala Bagh Massacre", "Quit India Movement", "Partition of Bengal"],
                "options_hi": ["1857 का विद्रोह", "जलियाँवाला बाग हत्याकांड", "भारत छोड़ो आंदोलन", "बंगाल का विभाजन"],
                "answer_en": "Jallianwala Bagh Massacre",
                "answer_hi": "जलियाँवाला बाग हत्याकांड",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 26,
                "question_en": "Which chapter highlights the theme of 'Brotherhood'?",
                "question_hi": "किस पाठ में 'भाईचारे' की थीम प्रमुख है?",
                "options_en": ["Bade Bhai Sahab", "Harihar Kaka", "Kartoos", "Netaji Ka Chashma"],
                "options_hi": ["बड़े भाई साहब", "हरिहर काका", "कारतूस", "नेताजी का चश्मा"],
                "answer_en": "Bade Bhai Sahab",
                "answer_hi": "बड़े भाई साहब",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 27,
                "question_en": "What is the main literary style of 'Netaji Ka Chashma'?",
                "question_hi": "'नेताजी का चश्मा' की मुख्य साहित्यिक शैली क्या है?",
                "options_en": ["Satirical", "Tragic", "Biographical", "Mystery"],
                "options_hi": ["व्यंग्यात्मक", "दुखांत", "जीवनीपरक", "रहस्यमय"],
                "answer_en": "Satirical",
                "answer_hi": "व्यंग्यात्मक",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 28,
                "question_en": "Which poet belongs to the 'Riti Kaal' period?",
                "question_hi": "कौन-सा कवि 'रीति काल' से संबंधित है?",
                "options_en": ["Kabir", "Bihari", "Nirala", "Mahadevi Verma"],
                "options_hi": ["कबीर", "बिहारी", "निराला", "महादेवी वर्मा"],
                "answer_en": "Bihari",
                "answer_hi": "बिहारी",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 29,
                "question_en": "In 'Sana Sana Hath Jodi', which geographical location is described?",
                "question_hi": "'साना साना हाथ जोड़ि' में किस भौगोलिक स्थान का वर्णन है?",
                "options_en": ["Gangtok, Sikkim", "Shimla, Himachal", "Manali, Himachal", "Darjeeling, West Bengal"],
                "options_hi": ["गंगटोक, सिक्किम", "शिमला, हिमाचल", "मनाली, हिमाचल", "दार्जिलिंग, पश्चिम बंगाल"],
                "answer_en": "Gangtok, Sikkim",
                "answer_hi": "गंगटोक, सिक्किम",
                "attempted": false,
                "selected": ""
            },
            {
                "num": 30,
                "question_en": "What is the primary emotion expressed in 'Mata Ka Aanchal'?",
                "question_hi": "'माता का आँचल' में व्यक्त प्राथमिक भावना क्या है?",
                "options_en": ["Mother's Love", "Patriotism", "Social Reform", "Humorous"],
                "options_hi": ["मातृ प्रेम", "देशभक्ति", "सामाजिक सुधार", "हास्य"],
                "answer_en": "Mother's Love",
                "answer_hi": "मातृ प्रेम",
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
