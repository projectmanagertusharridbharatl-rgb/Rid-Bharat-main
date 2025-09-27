const questions = [
    {
      num: 1,
      question_hi: "कविता 'अग्नि परीक्षा' के लेखक कौन हैं?",
      question_en: "Who is the author of the poem 'Agni Pariksha'?",
      options_hi: ["मैक्सिम गोर्की", "उमाशंकर श्रीवास्तव", "विनोबा भावे", "रामधारी सिंह दिनकर"],
      options_en: ["Maxim Gorky", "Umashankar Shrivastava", "Vinoba Bhave", "Ramdhari Singh Dinkar"],
      answer: "रामधारी सिंह दिनकर",
      attempted: false,
      selected: ""
    },
    {
      num: 2,
      question_hi: "'भारत माता' पाठ के लेखक कौन हैं?",
      question_en: "Who is the author of the 'Bharat Mata' passage?",
      options_hi: ["महादेवी वर्मा", "जवाहरलाल नेहरू", "मुल्कराज आनंद", "सुभाष चंद्र बोस"],
      options_en: ["Mahadevi Verma", "Jawaharlal Nehru", "Mulk Raj Anand", "Subhas Chandra Bose"],
      answer: "मुल्कराज आनंद",
      attempted: false,
      selected: ""
    },
    {
      num: 3,
      question_hi: "'भारत माता' में भारत को किस रूप में देखा गया है?",
      question_en: "In 'Bharat Mata', how is India seen?",
      options_hi: ["राजनीतिक इकाई", "सांस्कृतिक संस्था", "जन्मभूमि", "माता के रूप में"],
      options_en: ["Political entity", "Cultural institution", "Birthplace", "As a mother"],
      answer: "माता के रूप में",
      attempted: false,
      selected: ""
    },
    {
      num: 4,
      question_hi: "'भीड़ में खोया आदमी' के लेखक कौन हैं?",
      question_en: "Who is the author of 'The Man Lost in the Crowd'?",
      options_hi: ["हरिशंकर परसाई", "रामवृक्ष बेनीपुरी", "अज्ञेय", "बालकृष्ण भट्ट"],
      options_en: ["Harishankar Parsai", "Ramvriksh Benipuri", "Agyeya", "Balakrishna Bhatt"],
      answer: "हरिशंकर परसाई",
      attempted: false,
      selected: ""
    },
    {
      num: 5,
      question_hi: "'भीड़ में खोया आदमी' पाठ का मुख्य विषय क्या है?",
      question_en: "What is the main theme of the 'Man Lost in the Crowd' passage?",
      options_hi: ["गरीबी", "नैतिक पतन", "आधुनिक जीवन की विडंबनाएँ", "प्रेम और करुणा"],
      options_en: ["Poverty", "Moral decay", "Ironies of modern life", "Love and compassion"],
      answer: "आधुनिक जीवन की विडंबनाएँ",
      attempted: false,
      selected: ""
    },
    {
      num: 6,
      question_hi: "'जामुन का पेड़' किस व्यवस्था की आलोचना करता है?",
      question_en: "What system does the story 'Jamun Ka Ped' criticize?",
      options_hi: ["शिक्षा व्यवस्था", "सरकारी तंत्र", "परिवार व्यवस्था", "न्याय व्यवस्था"],
      options_en: ["Education system", "Government system", "Family system", "Judicial system"],
      answer: "सरकारी तंत्र",
      attempted: false,
      selected: ""
  },
  {
      num: 7,
      question_hi: "'अतीत में दबे पाँव' किसकी आत्मकथात्मक कृति है?",
      question_en: "'Ateet Mein Dabe Paon' is an autobiographical work of which author?",
      options_hi: ["कन्हैया लाल मिश्र 'प्रभाकर'", "हरिशंकर परसाई", "अमृतलाल नागर", "धर्मवीर भारती"],
      options_en: ["Kanhaiya Lal Mishra 'Prabhakar'", "Harishankar Parsai", "Amritlal Nagar", "Dharmveer Bharti"],
      answer: "कन्हैया लाल मिश्र 'प्रभाकर'",
      attempted: false,
      selected: ""
  },
  {
      num: 8,
      question_hi: "'अतीत में दबे पाँव' पाठ में लेखक ने किसका वर्णन किया है?",
      question_en: "'Ateet Mein Dabe Paon' describes which of the following?",
      options_hi: ["बचपन की स्मृतियाँ", "राजनीतिक अनुभव", "पारिवारिक जीवन", "विद्यार्थी जीवन"],
      options_en: ["Childhood memories", "Political experiences", "Family life", "Student life"],
      answer: "बचपन की स्मृतियाँ",
      attempted: false,
      selected: ""
  },
  {
      num: 9,
      question_hi: "'नमक' पाठ में किस बात पर ज़ोर दिया गया है?",
      question_en: "What is emphasized in the lesson 'Namak'?",
      options_hi: ["स्वतंत्रता संग्राम", "नमक का वैज्ञानिक महत्व", "नमक की सामाजिक भूमिका", "नमक का व्यावसायिक पक्ष"],
      options_en: ["Freedom struggle", "Scientific importance of salt", "Social role of salt", "Commercial aspect of salt"],
      answer: "नमक की सामाजिक भूमिका",
      attempted: false,
      selected: ""
  },
  {
      num: 10,
      question_hi: "'नमक' पाठ के लेखक कौन हैं?",
      question_en: "Who is the author of the lesson 'Namak'?",
      options_hi: ["शिवानी", "कन्हैया लाल मिश्र", "राही मासूम रज़ा", "श्यामाचरण दुबे"],
      options_en: ["Shivani", "Kanhaiya Lal Mishra", "Rahi Masoom Raza", "Shyamacharan Dubey"],
      answer: "श्यामाचरण दुबे",
      attempted: false,
      selected: ""
  },
  {
      num: 11,
      question_hi: "'पतझड़ में टूटी पत्तियाँ' एक प्रकार की क्या है?",
      question_en: "'Patjhad Mein Tooti Pattiyan' is a type of which form?",
      options_hi: ["कविता", "रेखाचित्र", "कहानी", "नाटक"],
      options_en: ["Poem", "Sketch", "Story", "Play"],
      answer: "रेखाचित्र",
      attempted: false,
      selected: ""
  },
  {
      num: 12,
      question_hi: "'पतझड़ में टूटी पत्तियाँ' के लेखक कौन हैं?",
      question_en: "Who is the author of 'Patjhad Mein Tooti Pattiyan'?",
      options_hi: ["हरिशंकर परसाई", "शिवानी", "कन्हैया लाल मिश्र", "कुमार गौरव"],
      options_en: ["Harishankar Parsai", "Shivani", "Kanhaiya Lal Mishra", "Kumar Gaurav"],
      answer: "शिवानी",
      attempted: false,
      selected: ""
  },
  {
      num: 13,
      question_hi: "'काले मेघा पानी दे' पाठ किस विधा से संबंधित है?",
      question_en: "'Kaale Megha Pani De' belongs to which literary genre?",
      options_hi: ["नाटक", "निबंध", "संस्मरण", "भाषण"],
      options_en: ["Play", "Essay", "Memoir", "Speech"],
      answer: "संस्मरण",
      attempted: false,
      selected: ""
  },
  {
      num: 14,
      question_hi: "'काले मेघा पानी दे' पाठ में कौन सी समस्या दिखाई गई है?",
      question_en: "Which issue is highlighted in the lesson 'Kaale Megha Pani De'?",
      options_hi: ["भुखमरी", "जल संकट", "बेरोजगारी", "महंगाई"],
      options_en: ["Famine", "Water crisis", "Unemployment", "Inflation"],
      answer: "जल संकट",
      attempted: false,
      selected: ""
  },
  {
      num: 15,
      question_hi: "'सन्नाटा' पाठ का प्रमुख विषय क्या है?",
      question_en: "What is the main theme of the lesson 'Sannata'?",
      options_hi: ["न्याय", "संवेदनशीलता", "राजनीति", "शांति"],
      options_en: ["Justice", "Sensitivity", "Politics", "Peace"],
      answer: "संवेदनशीलता",
      attempted: false,
      selected: ""
  },
  {
      num: 16,
      question_hi: "'पाठ – सन्नाटा' के लेखक कौन हैं?",
      question_en: "Who is the author of the lesson 'Sannata'?",
      options_hi: ["राही मासूम रज़ा", "श्यामाचरण दुबे", "अज्ञेय", "शिवानी"],
      options_en: ["Rahi Masoom Raza", "Shyamacharan Dubey", "Agyeya", "Shivani"],
      answer: "राही मासूम रज़ा",
      attempted: false,
      selected: ""
  },
  {
      num: 17,
      question_hi: "'पाठ – नमक' में नमक को किस दृष्टिकोण से देखा गया है?",
      question_en: "In the lesson 'Namak', from which perspective is salt viewed?",
      options_hi: ["रासायनिक", "ऐतिहासिक", "सामाजिक", "धार्मिक"],
      options_en: ["Chemical", "Historical", "Social", "Religious"],
      answer: "सामाजिक",
      attempted: false,
      selected: ""
  },
  {
      num: 18,
      question_hi: "'भीड़ में खोया आदमी' किस प्रकार की रचना है?",
      question_en: "What type of work is 'Bheed Mein Khoya Aadmi'?",
      options_hi: ["नाटक", "व्यंग्य", "संस्मरण", "कविता"],
      options_en: ["Play", "Satire", "Memoir", "Poem"],
      answer: "व्यंग्य",
      attempted: false,
      selected: ""
  },
  {
      num: 19,
      question_hi: "'जामुन का पेड़' कहानी में कौन गिर जाता है?",
      question_en: "Who falls down in the story 'Jamun Ka Ped'?",
      options_hi: ["क्लर्क", "बच्चा", "लेखक", "माली"],
      options_en: ["Clerk", "Child", "Author", "Gardener"],
      answer: "क्लर्क",
      attempted: false,
      selected: ""
  },
  {
      num: 20,
      question_hi: "'भारत माता' में लेखक भारत को क्या मानते हैं?",
      question_en: "In 'Bharat Mata', what does the author consider India to be?",
      options_hi: ["मिट्टी", "धरोहर", "प्रकृति", "जीवंत सत्ता"],
      options_en: ["Soil", "Heritage", "Nature", "Living entity"],
      answer: "जीवंत सत्ता",
      attempted: false,
      selected: ""
  },
  {
      num: 21,
      question_hi: "'अतीत में दबे पाँव' में किस युग की स्मृतियाँ हैं?",
      question_en: "Which era's memories are there in 'Ateet Mein Dabe Paon'?",
      options_hi: ["आधुनिक युग", "ब्रिटिश काल", "बचपन का युग", "विद्यार्थी जीवन"],
      options_en: ["Modern era", "British era", "Childhood era", "Student life"],
      answer: "बचपन का युग",
      attempted: false,
      selected: ""
  },
  {
      num: 22,
      question_hi: "'पतझड़ में टूटी पत्तियाँ' में लेखक ने किसके जीवन का चित्रण किया है?",
      question_en: "In 'Patjhad Mein Tooti Pattiyan', the author depicts whose life?",
      options_hi: ["आध्यात्मिक जीवन", "नारी जीवन", "व्यक्तिगत संघर्ष", "राजनीतिक विचार"],
      options_en: ["Spiritual life", "Women's life", "Personal struggle", "Political views"],
      answer: "नारी जीवन",
      attempted: false,
      selected: ""
  },
  {
      num: 23,
      question_hi: "'नमक' पाठ में लेखक ने किसे कटाक्ष किया है?",
      question_en: "In the lesson 'Namak', whom does the author satirize?",
      options_hi: ["समाज", "सरकार", "धर्म", "परिवार"],
      options_en: ["Society", "Government", "Religion", "Family"],
      answer: "समाज",
      attempted: false,
      selected: ""
  },
  {
      num: 24,
      question_hi: "'नमक' पाठ के लेखक का कौन सा दृष्टिकोण है?",
      question_en: "What is the perspective of the author in the lesson 'Namak'?",
      options_hi: ["समाजवादी", "नारीवादी", "पूंजीवादी", "धार्मिक"],
      options_en: ["Socialist", "Feminist", "Capitalist", "Religious"],
      answer: "समाजवादी",
      attempted: false,
      selected: ""
  },
  {
    num: 25,
    question_hi: "'भारत माता' में लेखक ने किसे पूजा है?",
    question_en: "In 'Bharat Mata', whom has the author worshiped?",
    options_hi: ["प्रकृति", "भारत", "माँ", "धर्म"],
    options_en: ["Nature", "India", "Mother", "Religion"],
    answer: "भारत",
    attempted: false,
    selected: ""
},
{
    num: 26,
    question_hi: "'अग्नि परीक्षा' में कौन मुख्य पात्र है?",
    question_en: "Who is the main character in 'Agni Pariksha'?",
    options_hi: ["रानी", "राजा", "साधु", "वीर"],
    options_en: ["Queen", "King", "Saint", "Hero"],
    answer: "वीर",
    attempted: false,
    selected: ""
},
{
    num: 27,
    question_hi: "'अग्नि परीक्षा' का कौन सा संदेश है?",
    question_en: "What is the message of 'Agni Pariksha'?",
    options_hi: ["सत्य की विजय", "धैर्य की शक्ति", "साहस और बलिदान", "समाज का सुधार"],
    options_en: ["Victory of truth", "Power of patience", "Courage and sacrifice", "Social reform"],
    answer: "साहस और बलिदान",
    attempted: false,
    selected: ""
},
{
    num: 28,
    question_hi: "'वह तोड़ती है' कविता में किस बात का जिक्र किया गया है?",
    question_en: "What is mentioned in the poem 'Woh Todti Hai'?",
    options_hi: ["नारी की शक्ति", "धन की अहमियत", "समाज की आलोचना", "प्राकृतिक सौंदर्य"],
    options_en: ["The power of woman", "Importance of wealth", "Critique of society", "Natural beauty"],
    answer: "नारी की शक्ति",
    attempted: false,
    selected: ""
},
{
    num: 29,
    question_hi: "'वह तोड़ती है' कविता की लेखिका कौन हैं?",
    question_en: "Who is the poetess of 'Woh Todti Hai'?",
    options_hi: ["माया एंजेलो", "महादेवी वर्मा", "शिवानी", "निर्मला श्रीवास्तव"],
    options_en: ["Maya Angelou", "Mahadevi Verma", "Shivani", "Nirmala Srivastava"],
    answer: "महादेवी वर्मा",
    attempted: false,
    selected: ""
},
{
    num: 30,
    question_hi: "'हरियाली' कविता का संदेश क्या है?",
    question_en: "What is the message of the poem 'Hariyali'?",
    options_hi: ["प्रकृति से प्रेम", "राष्ट्रवाद", "समानता का अधिकार", "शक्ति का प्रमाण"],
    options_en: ["Love for nature", "Nationalism", "Right to equality", "Proof of power"],
    answer: "प्रकृति से प्रेम",
    attempted: false,
    selected: ""
},
{
    num: 31,
    question_hi: "'नदी' कविता में नदी का रूप किस रूप में दिखाया गया है?",
    question_en: "In the poem 'Nadi', how is the river portrayed?",
    options_hi: ["निर्मल", "लहराता हुआ", "विद्रोही", "निरंतर बहता हुआ"],
    options_en: ["Pure", "Waving", "Rebellious", "Flowing constantly"],
    answer: "निरंतर बहता हुआ",
    attempted: false,
    selected: ""
},
{
    num: 32,
    question_hi: "'नदी' कविता में नदी किसे संकेत करती है?",
    question_en: "In the poem 'Nadi', what does the river symbolize?",
    options_hi: ["जीवन", "प्रकृति", "मानवता", "संघर्ष"],
    options_en: ["Life", "Nature", "Humanity", "Struggle"],
    answer: "जीवन",
    attempted: false,
    selected: ""
},
{
    num: 33,
    question_hi: "'भारत माता' कविता में भारत को किस रूप में चित्रित किया गया है?",
    question_en: "In the poem 'Bharat Mata', how is India depicted?",
    options_hi: ["माँ", "भूमि", "सिंहासन", "धरोहर"],
    options_en: ["Mother", "Land", "Throne", "Heritage"],
    answer: "माँ",
    attempted: false,
    selected: ""
},
{
    num: 34,
    question_hi: "'सपने' कविता में लेखक ने किस भाव को व्यक्त किया है?",
    question_en: "In the poem 'Sapne', what emotion does the poet express?",
    options_hi: ["आशा", "निराशा", "सकारात्मकता", "सपने देखना"],
    options_en: ["Hope", "Despair", "Positivity", "Dreaming"],
    answer: "आशा",
    attempted: false,
    selected: ""
},
{
    num: 35,
    question_hi: "'सपने' कविता के लेखक कौन हैं?",
    question_en: "Who is the poet of the poem 'Sapne'?",
    options_hi: ["सुमित्रानंदन पंत", "गुलजार", "हरिवंश राय बच्चन", "महादेवी वर्मा"],
    options_en: ["Sumitranandan Pant", "Gulzar", "Harivansh Rai Bachchan", "Mahadevi Verma"],
    answer: "सुमित्रानंदन पंत",
    attempted: false,
    selected: ""
},
{
    num: 36,
    question_hi: "'सपने' कविता में सपनों के महत्व को किस रूप में प्रस्तुत किया गया है?",
    question_en: "In the poem 'Sapne', how is the importance of dreams presented?",
    options_hi: ["उम्मीद और संघर्ष", "आशा और डर", "जीवन की अनिवार्यता", "साकारात्मक दृष्टिकोण"],
    options_en: ["Hope and struggle", "Hope and fear", "Necessity of life", "Positive outlook"],
    answer: "उम्मीद और संघर्ष",
    attempted: false,
    selected: ""
},
{
    num: 37,
    question_hi: "'भारत माता' कविता में 'भारत' को किस रूप में प्रस्तुत किया गया है?",
    question_en: "In the poem 'Bharat Mata', how is 'India' presented?",
    options_hi: ["माँ के रूप में", "धरोहर के रूप में", "संस्कृति के रूप में", "शक्ति के रूप में"],
    options_en: ["As a mother", "As a heritage", "As a culture", "As a power"],
    answer: "माँ के रूप में",
    attempted: false,
    selected: ""
},
{
    num: 38,
    question_hi: "'वह तोड़ती है' कविता में किसके संघर्ष का चित्रण किया गया है?",
    question_en: "In the poem 'Woh Todti Hai', whose struggle is depicted?",
    options_hi: ["नारी", "आदमी", "प्रकृति", "समाज"],
    options_en: ["Woman", "Man", "Nature", "Society"],
    answer: "नारी",
    attempted: false,
    selected: ""
},
{
    num: 39,
    question_hi: "'हरियाली' कविता के लेखक कौन हैं?",
    question_en: "Who is the poet of the poem 'Hariyali'?",
    options_hi: ["रामधारी सिंह 'दिनकर'", "महादेवी वर्मा", "शिवानी", "सुमित्रानंदन पंत"],
    options_en: ["Ramdhari Singh 'Dinkar'", "Mahadevi Verma", "Shivani", "Sumitranandan Pant"],
    answer: "सुमित्रानंदन पंत",
    attempted: false,
    selected: ""
},
{
    num: 40,
    question_hi: "'भारत माता' कविता में 'भारत' को किस रूप में चित्रित किया गया है?",
    question_en: "In the poem 'Bharat Mata', how is 'India' depicted?",
    options_hi: ["माँ के रूप में", "धरोहर के रूप में", "संस्कृति के रूप में", "शक्ति के रूप में"],
    options_en: ["As a mother", "As a heritage", "As a culture", "As a power"],
    answer: "माँ के रूप में",
    attempted: false,
    selected: ""
},
{
  num: 41,
  question_hi: "'भारत माता' कविता में 'भारत' को किस रूप में चित्रित किया गया है?",
  question_en: "In the poem 'Bharat Mata', how is 'India' depicted?",
  options_hi: ["माँ के रूप में", "धरोहर के रूप में", "संस्कृति के रूप में", "शक्ति के रूप में"],
  options_en: ["As a mother", "As a heritage", "As a culture", "As a power"],
  answer: "माँ के रूप में",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_hi: "'सपने' कविता में लेखक ने क्या संदेश दिया है?",
  question_en: "What message does the poet give in the poem 'Sapne'?",
  options_hi: ["सपने देखो", "सपनों को साकार करो", "दुनिया से भागो", "सपनों में खो जाओ"],
  options_en: ["Dream", "Make dreams come true", "Run away from the world", "Get lost in dreams"],
  answer: "सपनों को साकार करो",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_hi: "'वह तोड़ती है' कविता का मुख्य विचार क्या है?",
  question_en: "What is the main idea of the poem 'Woh Todti Hai'?",
  options_hi: ["नारी की स्वतंत्रता", "प्राकृतिक सौंदर्य", "समाज की बेड़ियाँ", "सत्य का सामना"],
  options_en: ["Woman's freedom", "Natural beauty", "Social shackles", "Confronting truth"],
  answer: "नारी की स्वतंत्रता",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_hi: "'नदी' कविता में नदी का क्या अर्थ है?",
  question_en: "What is the meaning of the river in the poem 'Nadi'?",
  options_hi: ["सपने", "जीवन", "संघर्ष", "शांति"],
  options_en: ["Dreams", "Life", "Struggle", "Peace"],
  answer: "जीवन",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_hi: "'भारत माता' कविता में किसे शक्ति के रूप में चित्रित किया गया है?",
  question_en: "In the poem 'Bharat Mata', who is depicted as a symbol of power?",
  options_hi: ["भारत", "माँ", "धर्म", "प्रकृति"],
  options_en: ["India", "Mother", "Religion", "Nature"],
  answer: "भारत",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_hi: "'सपने' कविता में लेखक ने किसे प्रेरित किया है?",
  question_en: "Whom does the poet inspire in the poem 'Sapne'?",
  options_hi: ["आत्मविश्वास", "सपने देखने", "धैर्य", "सकारात्मकता"],
  options_en: ["Self-confidence", "Dreaming", "Patience", "Positivity"],
  answer: "सपने देखने",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_hi: "'हरियाली' कविता में प्रकृति की क्या विशेषताएँ बताई गई हैं?",
  question_en: "What characteristics of nature are described in the poem 'Hariyali'?",
  options_hi: ["सुंदरता और शांति", "सर्दी और गर्मी", "वृष्टि और आंधी", "धीरज और संतुलन"],
  options_en: ["Beauty and peace", "Cold and heat", "Rain and storm", "Patience and balance"],
  answer: "सुंदरता और शांति",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_hi: "'नदी' कविता में नदी को क्या बताया गया है?",
  question_en: "What is the river described as in the poem 'Nadi'?",
  options_hi: ["निर्मल जल", "सपनों का प्रवाह", "संकट का प्रतीक", "जीवन का प्रवाह"],
  options_en: ["Pure water", "Flow of dreams", "Symbol of struggle", "Flow of life"],
  answer: "जीवन का प्रवाह",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_hi: "'वह तोड़ती है' कविता में नारी की किस भूमिका पर ध्यान केंद्रित किया गया है?",
  question_en: "What role of women is focused on in the poem 'Woh Todti Hai'?",
  options_hi: ["सामाजिक संघर्ष", "आर्थिक स्वतंत्रता", "नारी सशक्तिकरण", "परिवार में नेतृत्व"],
  options_en: ["Social struggle", "Economic independence", "Women's empowerment", "Leadership in family"],
  answer: "नारी सशक्तिकरण",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_hi: "'भारत माता' कविता में लेखक का दृष्टिकोण क्या है?",
  question_en: "What is the poet's perspective in the poem 'Bharat Mata'?",
  options_hi: ["भारत के महानता का सम्मान", "संस्कृति की रक्षा", "स्वतंत्रता संग्राम", "भारत माता की पूजा"],
  options_en: ["Respect for India's greatness", "Protection of culture", "Freedom struggle", "Worship of Bharat Mata"],
  answer: "भारत के महानता का सम्मान",
  attempted: false,
  selected: ""
}
  
      
 // Continue adding more questions up to 30
];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
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

    updateCircles();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateCircles();
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

function updateCircles() {
    const circleContainer = document.getElementById("circleContainer");
    circleContainer.innerHTML = "";
    const start = currentCirclePage * circlesPerPage;
    const end = Math.min(start + circlesPerPage, questions.length);

    for (let i = start; i < end; i++) {
        const q = questions[i];
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

function prevCirclePage() {
    if (currentCirclePage > 0) {
        currentCirclePage--;
        updateCircles();
    }
}

function nextCirclePage() {
    if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
        currentCirclePage++;
        updateCircles();
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0, notAttempted = 0, score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
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
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

window.onload = function () {
    startTimer();
    loadQuestion(currentQuestion);
};
