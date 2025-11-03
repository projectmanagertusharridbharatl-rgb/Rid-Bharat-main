const questions = [
    {
        "num": 1,
        "question_en": "Who is the author of 'The Portrait of a Lady'?",
        "question_hi": "'द पोर्ट्रेट ऑफ़ अ लेडी' के लेखक कौन हैं?",
        "options_en": ["R.K. Narayan", "Khushwant Singh", "Henry James", "Jane Austen"],
        "options_hi": ["आर.के. नारायण", "खुशवंत सिंह", "हेनरी जेम्स", "जेन ऑस्टेन"],
        "answer_en": "Henry James",
        "answer_hi": "हेनरी जेम्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which poem is written by William Wordsworth?",
        "question_hi": "विलियम वर्ड्सवर्थ द्वारा कौन-सी कविता लिखी गई है?",
        "options_en": ["The Raven", "Daffodils", "The Tyger", "Ozymandias"],
        "options_hi": ["द रेवेन", "डैफोडिल्स", "द टाइगर", "ओजीमंडियास"],
        "answer_en": "Daffodils",
        "answer_hi": "डैफोडिल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the central theme of 'The Last Lesson' by Alphonse Daudet?",
        "question_hi": "अल्फोंस डौडेट की 'द लास्ट लेसन' का केंद्रीय विषय क्या है?",
        "options_en": ["Love", "Freedom", "Patriotism", "Nature"],
        "options_hi": ["प्यार", "स्वतंत्रता", "देशभक्ति", "प्रकृति"],
        "answer_en": "Patriotism",
        "answer_hi": "देशभक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Who is the protagonist in 'The Invisible Man' by H.G. Wells?",
        "question_hi": "एच.जी. वेल्स के 'द इनविजिबल मैन' में मुख्य पात्र कौन है?",
        "options_en": ["Griffin", "Kemp", "Dr. Jekyll", "Mr. Hyde"],
        "options_hi": ["ग्रिफिन", "केंप", "डॉ. जेकिल", "मिस्टर हाइड"],
        "answer_en": "Griffin",
        "answer_hi": "ग्रिफिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which literary device is used in 'The Road Not Taken' by Robert Frost?",
        "question_hi": "रॉबर्ट फ्रॉस्ट की 'द रोड नॉट टेकन' में कौन-सा साहित्यिक उपकरण प्रयुक्त हुआ है?",
        "options_en": ["Metaphor", "Simile", "Alliteration", "Personification"],
        "options_hi": ["रूपक", "उपमा", "अनुप्रास", "मानवीकरण"],
        "answer_en": "Metaphor",
        "answer_hi": "रूपक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Who wrote 'The Merchant of Venice'?",
        "question_hi": "'द मर्चेंट ऑफ वेनिस' किसने लिखा?",
        "options_en": ["Charles Dickens", "William Shakespeare", "George Bernard Shaw", "John Milton"],
        "options_hi": ["चार्ल्स डिकेंस", "विलियम शेक्सपियर", "जॉर्ज बर्नार्ड शॉ", "जॉन मिल्टन"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is the pen name of O. Henry?",
        "question_hi": "ओ. हेनरी का उपनाम क्या है?",
        "options_en": ["William Sydney Porter", "Samuel Clemens", "Eric Blair", "Mary Ann Evans"],
        "options_hi": ["विलियम सिडनी पोर्टर", "सैमुअल क्लीमेंस", "एरिक ब्लेयर", "मैरी ऐन इवांस"],
        "answer_en": "William Sydney Porter",
        "answer_hi": "विलियम सिडनी पोर्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which of these is a tragedy written by Shakespeare?",
        "question_hi": "इनमें से कौन शेक्सपियर द्वारा लिखित एक त्रासदी है?",
        "options_en": ["A Midsummer Night's Dream", "Macbeth", "The Tempest", "Twelfth Night"],
        "options_hi": ["ए मिडसमर नाइट्स ड्रीम", "मैकबेथ", "द टेम्पेस्ट", "ट्वेल्थ नाइट"],
        "answer_en": "Macbeth",
        "answer_hi": "मैकबेथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Who is the author of 'Gulliver's Travels'?",
        "question_hi": "'गुलिवर्स ट्रेवल्स' के लेखक कौन हैं?",
        "options_en": ["Jonathan Swift", "Daniel Defoe", "J.R.R. Tolkien", "Lewis Carroll"],
        "options_hi": ["जोनाथन स्विफ्ट", "डैनियल डिफो", "जे.आर.आर. टॉल्किन", "लुईस कैरोल"],
        "answer_en": "Jonathan Swift",
        "answer_hi": "जोनाथन स्विफ्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the main theme of 'The Dear Departed' by Stanley Houghton?",
        "question_hi": "स्टैनली हॉटन के 'द डियर डिपार्टेड' का मुख्य विषय क्या है?",
        "options_en": ["Love", "Greed", "Sacrifice", "Bravery"],
        "options_hi": ["प्यार", "लालच", "बलिदान", "बहादुरी"],
        "answer_en": "Greed",
        "answer_hi": "लालच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which of these is a play by George Bernard Shaw?",
        "question_hi": "इनमें से कौन-सा जॉर्ज बर्नार्ड शॉ का नाटक है?",
        "options_en": ["Pygmalion", "1984", "Wuthering Heights", "Pride and Prejudice"],
        "options_hi": ["पिगमेलियन", "1984", "वदरिंग हाइट्स", "प्राइड एंड प्रेजुडिस"],
        "answer_en": "Pygmalion",
        "answer_hi": "पिगमेलियन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Who is the poet of 'The Solitary Reaper'?",
        "question_hi": "'द सॉलिटरी रीपर' के कवि कौन हैं?",
        "options_en": ["John Keats", "William Wordsworth", "P.B. Shelley", "Lord Byron"],
        "options_hi": ["जॉन कीट्स", "विलियम वर्ड्सवर्थ", "पी.बी. शेली", "लॉर्ड बायरन"],
        "answer_en": "William Wordsworth",
        "answer_hi": "विलियम वर्ड्सवर्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which literary form is 'The Proposal' by Anton Chekhov?",
        "question_hi": "एंटन चेखव की 'द प्रपोजल' किस साहित्यिक रूप में है?",
        "options_en": ["Novel", "Poem", "One-act play", "Essay"],
        "options_hi": ["उपन्यास", "कविता", "एकांकी", "निबंध"],
        "answer_en": "One-act play",
        "answer_hi": "एकांकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Who wrote 'Pride and Prejudice'?",
        "question_hi": "'प्राइड एंड प्रेजुडिस' किसने लिखा?",
        "options_en": ["Jane Austen", "Emily Bronte", "Charlotte Bronte", "Virginia Woolf"],
        "options_hi": ["जेन ऑस्टेन", "एमिली ब्रोंटे", "शार्लोट ब्रोंटे", "वर्जीनिया वूल्फ"],
        "answer_en": "Jane Austen",
        "answer_hi": "जेन ऑस्टेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the setting of 'The Tale of Melon City'?",
        "question_hi": "'द टेल ऑफ मेलन सिटी' का सेटिंग क्या है?",
        "options_en": ["A kingdom", "A modern city", "A village", "A forest"],
        "options_hi": ["एक राज्य", "एक आधुनिक शहर", "एक गाँव", "एक जंगल"],
        "answer_en": "A kingdom",
        "answer_hi": "एक राज्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which figure of speech is used in 'All the world's a stage'?",
        "question_hi": "'ऑल द वर्ल्ड्स अ स्टेज' में कौन-सा अलंकार प्रयुक्त हुआ है?",
        "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
        "answer_en": "Metaphor",
        "answer_hi": "रूपक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Who is the author of 'The Rime of the Ancient Mariner'?",
        "question_hi": "'द राइम ऑफ द एन्शिएंट मैरिनर' के लेखक कौन हैं?",
        "options_en": ["William Blake", "S.T. Coleridge", "John Keats", "William Wordsworth"],
        "options_hi": ["विलियम ब्लेक", "एस.टी. कॉलरिज", "जॉन कीट्स", "विलियम वर्ड्सवर्थ"],
        "answer_en": "S.T. Coleridge",
        "answer_hi": "एस.टी. कॉलरिज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the central idea of 'A Thing of Beauty' by John Keats?",
        "question_hi": "जॉन कीट्स की 'अ थिंग ऑफ ब्यूटी' का केंद्रीय विचार क्या है?",
        "options_en": ["Beauty is temporary", "Beauty brings joy", "Beauty is deceptive", "Beauty is subjective"],
        "options_hi": ["सुंदरता अस्थायी है", "सुंदरता आनंद लाती है", "सुंदरता धोखा देती है", "सुंदरता व्यक्तिपरक है"],
        "answer_en": "Beauty brings joy",
        "answer_hi": "सुंदरता आनंद लाती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which of these is a satire by Jonathan Swift?",
        "question_hi": "इनमें से कौन जोनाथन स्विफ्ट की एक व्यंग्य रचना है?",
        "options_en": ["Robinson Crusoe", "Gulliver's Travels", "Treasure Island", "Oliver Twist"],
        "options_hi": ["रॉबिन्सन क्रूसो", "गुलिवर्स ट्रेवल्स", "ट्रेजर आइलैंड", "ऑलिवर ट्विस्ट"],
        "answer_en": "Gulliver's Travels",
        "answer_hi": "गुलिवर्स ट्रेवल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Who wrote 'The Gift of the Magi'?",
        "question_hi": "'द गिफ्ट ऑफ द मैगी' किसने लिखा?",
        "options_en": ["O. Henry", "Mark Twain", "Charles Dickens", "Leo Tolstoy"],
        "options_hi": ["ओ. हेनरी", "मार्क ट्वेन", "चार्ल्स डिकेंस", "लियो टॉल्स्टॉय"],
        "answer_en": "O. Henry",
        "answer_hi": "ओ. हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which character is from 'The Tempest' by Shakespeare?",
        "question_hi": "कौन-सा पात्र शेक्सपियर के 'द टेम्पेस्ट' से है?",
        "options_en": ["Hamlet", "Prospero", "Macbeth", "Othello"],
        "options_hi": ["हैमलेट", "प्रॉस्पेरो", "मैकबेथ", "ओथेलो"],
        "answer_en": "Prospero",
        "answer_hi": "प्रॉस्पेरो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the main conflict in 'The Necklace' by Guy de Maupassant?",
        "question_hi": "गाय डी मोपासां की 'द नेकलेस' में मुख्य संघर्ष क्या है?",
        "options_en": ["Man vs Nature", "Man vs Society", "Man vs Self", "Man vs Technology"],
        "options_hi": ["मनुष्य बनाम प्रकृति", "मनुष्य बनाम समाज", "मनुष्य बनाम स्वयं", "मनुष्य बनाम प्रौद्योगिकी"],
        "answer_en": "Man vs Society",
        "answer_hi": "मनुष्य बनाम समाज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Who is the poet of 'Ozymandias'?",
        "question_hi": "'ओजीमंडियास' के कवि कौन हैं?",
        "options_en": ["John Keats", "P.B. Shelley", "William Wordsworth", "Lord Byron"],
        "options_hi": ["जॉन कीट्स", "पी.बी. शेली", "विलियम वर्ड्सवर्थ", "लॉर्ड बायरन"],
        "answer_en": "P.B. Shelley",
        "answer_hi": "पी.बी. शेली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which literary device is prominently used in 'The Laburnum Top'?",
        "question_hi": "'द लैबर्नम टॉप' में प्रमुख रूप से कौन-सा साहित्यिक उपकरण प्रयुक्त हुआ है?",
        "options_en": ["Irony", "Alliteration", "Personification", "Onomatopoeia"],
        "options_hi": ["विडंबना", "अनुप्रास", "मानवीकरण", "ध्वन्यात्मकता"],
        "answer_en": "Personification",
        "answer_hi": "मानवीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Who wrote 'The Canterville Ghost'?",
        "question_hi": "'द कैंटरविले घोस्ट' किसने लिखा?",
        "options_en": ["Edgar Allan Poe", "Oscar Wilde", "Bram Stoker", "Mary Shelley"],
        "options_hi": ["एडगर एलन पो", "ऑस्कर वाइल्ड", "ब्रैम स्टोकर", "मैरी शेली"],
        "answer_en": "Oscar Wilde",
        "answer_hi": "ऑस्कर वाइल्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the theme of 'The Last Leaf' by O. Henry?",
        "question_hi": "ओ. हेनरी की 'द लास्ट लीफ' का विषय क्या है?",
        "options_en": ["Hope", "Revenge", "Betrayal", "Greed"],
        "options_hi": ["आशा", "बदला", "विश्वासघात", "लालच"],
        "answer_en": "Hope",
        "answer_hi": "आशा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which poem begins with 'I wandered lonely as a cloud'?",
        "question_hi": "कौन-सी कविता 'आइ वंडर्ड लोनली एज़ अ क्लाउड' से शुरू होती है?",
        "options_en": ["The Solitary Reaper", "Daffodils", "Ode to a Nightingale", "The Raven"],
        "options_hi": ["द सॉलिटरी रीपर", "डैफोडिल्स", "ओड टू अ नाइटिंगेल", "द रेवेन"],
        "answer_en": "Daffodils",
        "answer_hi": "डैफोडिल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Who is the protagonist in 'The Hound of the Baskervilles'?",
        "question_hi": "'द हाउंड ऑफ द बास्करविल्स' में मुख्य पात्र कौन है?",
        "options_en": ["Sherlock Holmes", "Hercule Poirot", "Dr. Watson", "Miss Marple"],
        "options_hi": ["शरलॉक होम्स", "हरक्यूल पोयरोट", "डॉ. वाटसन", "मिस मार्पल"],
        "answer_en": "Sherlock Holmes",
        "answer_hi": "शरलॉक होम्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which literary period does Jane Austen belong to?",
        "question_hi": "जेन ऑस्टेन किस साहित्यिक काल से संबंधित हैं?",
        "options_en": ["Victorian", "Romantic", "Modern", "Elizabethan"],
        "options_hi": ["विक्टोरियन", "रोमांटिक", "आधुनिक", "एलिज़ाबेथन"],
        "answer_en": "Romantic",
        "answer_hi": "रोमांटिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the moral of 'The Frog and the Nightingale' by Vikram Seth?",
        "question_hi": "विक्रम सेठ की 'द फ्रॉग एंड द नाइटिंगेल' का नैतिक संदेश क्या है?",
        "options_en": ["Be yourself", "Trust others", "Work hard", "Follow trends"],
        "options_hi": ["स्वयं बनें", "दूसरों पर भरोसा करें", "कड़ी मेहनत करें", "रुझानों का पालन करें"],
        "answer_en": "Be yourself",
        "answer_hi": "स्वयं बनें",
        "attempted": false,
        "selected": ""
    }









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
