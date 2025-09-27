


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
let language = "en"; // Default English
let timeLeft = 300; // 5-minute timer
let timerInterval;

function loadQuestion(index) {
const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

const optionsElement = document.getElementById("options");
optionsElement.innerHTML = "";

optionsArray.forEach(option => {
    optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
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
let confirmation = confirm("Are you sure you want to submit the test?");
if (!confirmation) return;

clearInterval(timerInterval);

let attempted = 0, notAttempted = 0, score = 0;
const results = [];

questions.forEach(q => {
    if (q.attempted) {
        attempted++;
        if (q.selected === q.answer_en || q.selected === q.answer_hi) {
            score++;
        }
    } else {
        notAttempted++;
    }
    results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
});

localStorage.setItem("attempted", attempted);
localStorage.setItem("notAttempted", notAttempted);
localStorage.setItem("score", score);
localStorage.setItem("results", JSON.stringify(results));

let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
if (viewResult) {
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}
}

function startTimer() {
const timerElement = document.getElementById("timer");
timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Time's up! Submitting the quiz automatically.");
        submitQuiz();
    } else {
        timerElement.textContent = `Time Left: ${Math.floor(timeLeft / 60)}:${timeLeft % 60}`;
        timeLeft--;
    }
}, 1000);
}

function updateNavigation() {
const navElement = document.getElementById("circleContainer");
navElement.innerHTML = "";

questions.forEach((q, index) => {
    let color = "gray"; // Default not visited
    if (q.attempted) {
        color = "green"; // Answered
    }
    if (q.selected === "") {
        color = "gray"; // Not answered
    }
    if (index === currentQuestion) {
        color = "blue"; // Current question
    }
    navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
});
}

window.onload = function () {
loadQuestion(currentQuestion);
startTimer();
};