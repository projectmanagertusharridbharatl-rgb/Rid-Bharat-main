const questions = [
 {
    num: 1,
    question_en: "Who is the poet of 'My Mother at Sixty-six'?",
    question_hi: "'My Mother at Sixty-six' कविता के कवि कौन हैं?",
    options_en: ["Kamala Das", "Nissim Ezekiel", "Kamala Surayya", "A.K. Ramanujan"],
    options_hi: ["कमला दास", "निस्सिम एज़ेकियल", "कमला सुरय्या", "ए.के. रामानुजन"],
    answer_en: "Kamala Das",
    answer_hi: "कमला दास",
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "What is the central theme of the poem 'A Thing of Beauty'?",
    question_hi: "'A Thing of Beauty' कविता का मुख्य विषय क्या है?",
    options_en: ["Nature's beauty", "Love and loss", "War and peace", "Loneliness"],
    options_hi: ["प्रकृति की सुंदरता", "प्रेम और हानि", "युद्ध और शांति", "एकांत"],
    answer_en: "Nature's beauty",
    answer_hi: "प्रकृति की सुंदरता",
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "Who is the author of the story 'Lost Spring'?",
    question_hi: "'Lost Spring' कहानी के लेखक कौन हैं?",
    options_en: ["Amitav Ghosh", "Amitav Ghosh", "Amitav Ghosh", "Amitav Ghosh"],
    options_hi: ["अमिताव घोष", "अमिताव घोष", "अमिताव घोष", "अमिताव घोष"],
    answer_en: "Amitav Ghosh",
    answer_hi: "अमिताव घोष",
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "What does the 'lost spring' symbolize in the story?",
    question_hi: "कहानी में 'lost spring' क्या दर्शाता है?",
    options_en: ["Childhood innocence lost", "Seasonal change", "Spring festival", "New beginnings"],
    options_hi: ["बचपन की मासूमियत खो जाना", "ऋतु परिवर्तन", "बसंत उत्सव", "नई शुरुआत"],
    answer_en: "Childhood innocence lost",
    answer_hi: "बचपन की मासूमियत खो जाना",
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "Who wrote the story 'The Rattrap'?",
    question_hi: "'The Rattrap' कहानी किसने लिखी है?",
    options_en: ["Selma Lagerlöf", "Anton Chekhov", "O. Henry", "R.K. Narayan"],
    options_hi: ["सेल्मा लागेरलॉफ", "अंतोन चेखोव", "ओ. हेनरी", "आर.के. नारायण"],
    answer_en: "Selma Lagerlöf",
    answer_hi: "सेल्मा लागेरलॉफ",
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "What is the main message of the story 'The Rattrap'?",
    question_hi: "'The Rattrap' कहानी का मुख्य संदेश क्या है?",
    options_en: [
      "Compassion and redemption",
      "Greed and betrayal",
      "Justice and law",
      "Adventure and thrill"
    ],
    options_hi: [
      "दयालुता और मोक्ष",
      "लोभ और धोखा",
      "न्याय और कानून",
      "साहसिक और रोमांच"
    ],
    answer_en: "Compassion and redemption",
    answer_hi: "दयालुता और मोक्ष",
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "Who is the author of 'Deep Water'?",
    question_hi: "'Deep Water' कहानी के लेखक कौन हैं?",
    options_en: ["William Douglas", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
    options_hi: ["विलियम डगलस", "मार्क ट्वेन", "जे.के. रोलिंग", "अर्नेस्ट हेमिंगवे"],
    answer_en: "William Douglas",
    answer_hi: "विलियम डगलस",
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "What is the main theme of 'Deep Water'?",
    question_hi: "'Deep Water' कहानी का मुख्य विषय क्या है?",
    options_en: [
      "Fear and overcoming it",
      "Adventure and exploration",
      "Friendship and loyalty",
      "Love and sacrifice"
    ],
    options_hi: [
      "डर और उसे जीतना",
      "साहसिक और खोज",
      "मित्रता और वफादारी",
      "प्रेम और बलिदान"
    ],
    answer_en: "Fear and overcoming it",
    answer_hi: "डर और उसे जीतना",
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "Who wrote the poem 'The Road Not Taken'?",
    question_hi: "'The Road Not Taken' कविता किसने लिखी है?",
    options_en: ["Robert Frost", "Walt Whitman", "Emily Dickinson", "William Wordsworth"],
    options_hi: ["रॉबर्ट फ्रॉस्ट", "वॉल्ट व्हिटमैन", "एमिली डिकिन्सन", "विलियम वर्ड्सवर्थ"],
    answer_en: "Robert Frost",
    answer_hi: "रॉबर्ट फ्रॉस्ट",
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "What does the 'road not taken' symbolize in the poem?",
    question_hi: "कविता में 'road not taken' क्या दर्शाता है?",
    options_en: [
      "Choices and decisions",
      "Physical journey",
      "Friendship",
      "Nature's beauty"
    ],
    options_hi: [
      "चयन और निर्णय",
      "भौतिक यात्रा",
      "मित्रता",
      "प्रकृति की सुंदरता"
    ],
    answer_en: "Choices and decisions",
    answer_hi: "चयन और निर्णय",
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "Who is the author of 'Indigo'?",
    question_hi: "'Indigo' कहानी के लेखक कौन हैं?",
    options_en: ["Louis Fischer", "R.K. Narayan", "Mulk Raj Anand", "Rabindranath Tagore"],
    options_hi: ["लुईस फिशर", "आर.के. नारायण", "मुल्क राज आनंद", "रबींद्रनाथ टैगोर"],
    answer_en: "Louis Fischer",
    answer_hi: "लुईस फिशर",
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "What is the theme of the story 'Indigo'?",
    question_hi: "'Indigo' कहानी का विषय क्या है?",
    options_en: [
      "Exploitation of farmers",
      "Freedom struggle",
      "Childhood innocence",
      "Urban life"
    ],
    options_hi: [
      "किसानों का शोषण",
      "स्वतंत्रता संग्राम",
      "बचपन की मासूमियत",
      "शहरी जीवन"
    ],
    answer_en: "Exploitation of farmers",
    answer_hi: "किसानों का शोषण",
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "Who wrote the story 'Going Places'?",
    question_hi: "'Going Places' कहानी किसने लिखी है?",
    options_en: ["A.R. Barton", "Ruskin Bond", "Jhumpa Lahiri", "Katherine Mansfield"],
    options_hi: ["ए.आर. बार्टन", "रसकिन बॉन्ड", "झुम्पा लाहिरी", "कैथरीन मैनसफील्ड"],
    answer_en: "A.R. Barton",
    answer_hi: "ए.आर. बार्टन",
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "What is the protagonist's main ambition in 'Going Places'?",
    question_hi: "'Going Places' की मुख्य पात्र की मुख्य महत्वाकांक्षा क्या है?",
    options_en: [
      "To be famous",
      "To be rich",
      "To be a doctor",
      "To be a teacher"
    ],
    options_hi: [
      "प्रसिद्ध होना",
      "धनवान होना",
      "डॉक्टर बनना",
      "शिक्षक बनना"
    ],
    answer_en: "To be famous",
    answer_hi: "प्रसिद्ध होना",
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "Who wrote the poem 'Aunt Jennifer's Tigers'?",
    question_hi: "'Aunt Jennifer's Tigers' कविता किसने लिखी है?",
    options_en: ["Adrienne Rich", "Sylvia Plath", "Maya Angelou", "Carol Ann Duffy"],
    options_hi: ["एड्रियेन रिच", "सिल्विया प्लाथ", "माया एंजेलो", "कैरोल एन डफी"],
    answer_en: "Adrienne Rich",
    answer_hi: "एड्रियेन रिच",
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "What do the tigers symbolize in 'Aunt Jennifer's Tigers'?",
    question_hi: "'Aunt Jennifer's Tigers' में बाघ क्या प्रतीक हैं?",
    options_en: [
      "Freedom and strength",
      "Fear and weakness",
      "Love and peace",
      "War and violence"
    ],
    options_hi: [
      "स्वतंत्रता और शक्ति",
      "डर और कमजोरी",
      "प्रेम और शांति",
      "युद्ध और हिंसा"
    ],
    answer_en: "Freedom and strength",
    answer_hi: "स्वतंत्रता और शक्ति",
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "Who is the narrator in 'The Third Level'?",
    question_hi: "'The Third Level' कहानी में कथाकार कौन है?",
    options_en: [
      "Charley",
      "Sam",
      "Mr. Peters",
      "John"
    ],
    options_hi: [
      "चार्ली",
      "सैम",
      "मिस्टर पीटर्स",
      "जॉन"
    ],
    answer_en: "Sam",
    answer_hi: "सैम",
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "What is the main idea of 'The Third Level'?",
    question_hi: "'The Third Level' कहानी का मुख्य विचार क्या है?",
    options_en: [
      "Escape from reality",
      "Time travel",
      "Science fiction",
      "Adventure"
    ],
    options_hi: [
      "वास्तविकता से बचना",
      "समय यात्रा",
      "विज्ञान कथा",
      "साहसिक"
    ],
    answer_en: "Escape from reality",
    answer_hi: "वास्तविकता से बचना",
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "Who wrote the poem 'Keeping Quiet'?",
    question_hi: "'Keeping Quiet' कविता किसने लिखी है?",
    options_en: [
      "Pablo Neruda",
      "Rabindranath Tagore",
      "Walt Whitman",
      "Robert Frost"
    ],
    options_hi: [
      "पाब्लो नेरूदा",
      "रबींद्रनाथ टैगोर",
      "वॉल्ट व्हिटमैन",
      "रॉबर्ट फ्रॉस्ट"
    ],
    answer_en: "Pablo Neruda",
    answer_hi: "पाब्लो नेरूदा",
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "What is the central message of 'Keeping Quiet'?",
    question_hi: "'Keeping Quiet' कविता का मुख्य संदेश क्या है?",
    options_en: [
      "Peace and self-reflection",
      "War and conflict",
      "Nature's beauty",
      "Social injustice"
    ],
    options_hi: [
      "शांति और आत्म-चिंतन",
      "युद्ध और संघर्ष",
      "प्रकृति की सुंदरता",
      "सामाजिक अन्याय"
    ],
    answer_en: "Peace and self-reflection",
    answer_hi: "शांति और आत्म-चिंतन",
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "Who is the author of the story 'The Enemy'?",
    question_hi: "'The Enemy' कहानी के लेखक कौन हैं?",
    options_en: [
      "Pearl S. Buck",
      "Maya Angelou",
      "Alice Walker",
      "Toni Morrison"
    ],
    options_hi: [
      "पर्ल एस. बक",
      "माया एंजेलो",
      "ऐलिस वॉकर",
      "टोनी मॉरिसन"
    ],
    answer_en: "Pearl S. Buck",
    answer_hi: "पर्ल एस. बक",
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "What is the main theme of 'The Enemy'?",
    question_hi: "'The Enemy' कहानी का मुख्य विषय क्या है?",
    options_en: [
      "Humanity and compassion",
      "War and hatred",
      "Friendship and loyalty",
      "Freedom and justice"
    ],
    options_hi: [
      "मानवता और सहानुभूति",
      "युद्ध और घृणा",
      "मित्रता और वफादारी",
      "स्वतंत्रता और न्याय"
    ],
    answer_en: "Humanity and compassion",
    answer_hi: "मानवता और सहानुभूति",
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "Who wrote the poem 'A Photograph'?",
    question_hi: "'A Photograph' कविता किसने लिखी है?",
    options_en: [
      "Kamala Das",
      "Shiv K Kumar",
      "Nissim Ezekiel",
      "A.K. Ramanujan"
    ],
    options_hi: [
      "कमला दास",
      "शिव के कुमार",
      "निस्सिम एज़ेकियल",
      "ए.के. रामानुजन"
    ],
    answer_en: "Shiv K Kumar",
    answer_hi: "शिव के कुमार",
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "What is the main emotion expressed in 'A Photograph'?",
    question_hi: "'A Photograph' कविता में मुख्य भावना क्या है?",
    options_en: [
      "Nostalgia and longing",
      "Joy and celebration",
      "Fear and anxiety",
      "Anger and resentment"
    ],
    options_hi: [
      "स्मृति और लालसा",
      "खुशी और जश्न",
      "डर और चिंता",
      "गुस्सा और रोष"
    ],
    answer_en: "Nostalgia and longing",
    answer_hi: "स्मृति और लालसा",
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "Who is the author of the story 'The Interview'?",
    question_hi: "'The Interview' कहानी के लेखक कौन हैं?",
    options_en: [
      "James Thurber",
      "Saki",
      "O. Henry",
      "R.K. Narayan"
    ],
    options_hi: [
      "जेम्स थरबर",
      "साकी",
      "ओ. हेनरी",
      "आर.के. नारायण"
    ],
    answer_en: "James Thurber",
    answer_hi: "जेम्स थरबर",
    attempted: false,
    selected: null
  },
  {
  num: 26,
  question_en: "What kind of pain does the poet feel in 'My Mother at Sixty-six'?",
  question_hi: "'My Mother at Sixty-six' में कवि किस प्रकार का दर्द महसूस करती हैं?",
  options_en: ["Physical pain", "Spiritual pain", "Emotional pain", "Headache"],
  options_hi: ["शारीरिक दर्द", "आध्यात्मिक दर्द", "भावनात्मक दर्द", "सिरदर्द"],
  answer_en: "Emotional pain",
  answer_hi: "भावनात्मक दर्द",
  attempted: false,
  selected: null
},
{
  num: 27,
  question_en: "What poetic device is used in '…as a late winter’s moon'?",
  question_hi: "'…as a late winter’s moon' में कौन सा काव्य device प्रयुक्त हुआ है?",
  options_en: ["Metaphor", "Simile", "Alliteration", "Personification"],
  options_hi: ["रूपक", "उपमा", "अनुप्रास", "मानवीकरण"],
  answer_en: "Simile",
  answer_hi: "उपमा",
  attempted: false,
  selected: null
},
{
  num: 28,
  question_en: "What is the significance of 'young trees sprinting'?",
  question_hi: "'तेज़ी से दौड़ते हुए पेड़' का क्या महत्व है?",
  options_en: ["The trees are really moving", "It shows the poet's fast thoughts", "It contrasts the aging mother", "It shows the poet's happiness"],
  options_hi: ["पेड़ वास्तव में हिल रहे हैं", "यह कवि के तेज विचारों को दर्शाता है", "यह वृद्ध माँ के साथ विरोधाभास दर्शाता है", "यह कवि की खुशी दर्शाता है"],
  answer_en: "It contrasts the aging mother",
  answer_hi: "यह वृद्ध माँ के साथ विरोधाभास दर्शाता है",
  attempted: false,
  selected: null
},
{
  num: 29,
  question_en: "What does the mother's face being 'ashen like that of a corpse' signify?",
  question_hi: "'माँ का चेहरा शव की तरह राख के समान' होने का क्या तात्पर्य है?",
  options_en: ["She is tired", "She is unwell", "She is aging and near death", "She is angry"],
  options_hi: ["वह थकी हुई है", "वह बीमार है", "वह वृद्ध हो रही है और मृत्यु के करीब है", "वह गुस्से में है"],
  answer_en: "She is aging and near death",
  answer_hi: "वह वृद्ध हो रही है और मृत्यु के करीब है",
  attempted: false,
  selected: null
},
{
  num: 30,
  question_en: "Why does the poet smile at the end of the poem?",
  question_hi: "कविता के अंत में कवि मुस्कुराती क्यों है?",
  options_en: ["She is happy", "She is hiding her pain", "She is laughing", "She mocks her mother"],
  options_hi: ["वह खुश है", "वह अपने दर्द को छिपा रही है", "वह हँस रही है", "वह अपनी माँ का मज़ाक उड़ा रही है"],
  answer_en: "She is hiding her pain",
  answer_hi: "वह अपने दर्द को छिपा रही है",
  attempted: false,
  selected: null
},
{
  num: 31,
  question_en: "Where is the poet going in the poem?",
  question_hi: "कविता में कवि कहाँ जा रही है?",
  options_en: ["To a vacation", "To a friend's house", "To the airport", "To Cochin"],
  options_hi: ["छुट्टी पर", "दोस्त के घर", "हवाई अड्डे पर", "कोचीन"],
  answer_en: "To Cochin",
  answer_hi: "कोचीन",
  attempted: false,
  selected: null
},
{
  num: 32,
  question_en: "Which emotion dominates the poem?",
  question_hi: "कविता में किस भावना का प्रमुख रूप से चित्रण है?",
  options_en: ["Love", "Hate", "Fear of loss", "Joy"],
  options_hi: ["प्रेम", "घृणा", "हानि का भय", "आनंद"],
  answer_en: "Fear of loss",
  answer_hi: "हानि का भय",
  attempted: false,
  selected: null
},
{
  num: 33,
  question_en: "What do the 'merry children spilling out of their homes' symbolize?",
  question_hi: "'अपने घरों से बाहर निकलते हुए प्रसन्न बच्चे' किसका प्रतीक हैं?",
  options_en: ["Joy and energy", "Freedom", "Contrast to old age", "All of the above"],
  options_hi: ["खुशी और ऊर्जा", "स्वतंत्रता", "बुढ़ापे का विरोधाभास", "उपर्युक्त सभी"],
  answer_en: "All of the above",
  answer_hi: "उपर्युक्त सभी",
  attempted: false,
  selected: null
},
{
  num: 34,
  question_en: "What poetic device is used in 'spilling out of their homes'?",
  question_hi: "'spilling out of their homes' में कौन सा अलंकार प्रयोग हुआ है?",
  options_en: ["Alliteration", "Metaphor", "Personification", "Hyperbole"],
  options_hi: ["अनुप्रास", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
  answer_en: "Personification",
  answer_hi: "मानवीकरण",
  attempted: false,
  selected: null
},
{
  num: 35,
  question_en: "What is the tone of the poem?",
  question_hi: "कविता का स्वर (tone) कैसा है?",
  options_en: ["Playful", "Melancholic", "Angry", "Joyful"],
  options_hi: ["चंचल", "विषादपूर्ण", "क्रोधित", "प्रसन्न"],
  answer_en: "Melancholic",
  answer_hi: "विषादपूर्ण",
  attempted: false,
  selected: null
},
{
  num: 36,
  question_en: "The phrase 'wan, pale as a late winter’s moon' shows the mother is:",
  question_hi: "'wan, pale as a late winter’s moon' यह दर्शाता है कि माँ:",
  options_en: ["Cheerful", "Energetic", "Weak and aged", "Active"],
  options_hi: ["प्रसन्न", "ऊर्जावान", "कमजोर और वृद्ध", "सक्रिय"],
  answer_en: "Weak and aged",
  answer_hi: "कमजोर और वृद्ध",
  attempted: false,
  selected: null
},
{
  num: 37,
  question_en: "Which theme is NOT part of the poem?",
  question_hi: "निम्न में से कौन सी थीम कविता का हिस्सा नहीं है?",
  options_en: ["Aging", "Separation", "Joyful reunion", "Fear of death"],
  options_hi: ["बुढ़ापा", "वियोग", "प्रसन्न पुनर्मिलन", "मृत्यु का भय"],
  answer_en: "Joyful reunion",
  answer_hi: "प्रसन्न पुनर्मिलन",
  attempted: false,
  selected: null
},
{
  num: 38,
  question_en: "Why is the poet pained?",
  question_hi: "कवि को पीड़ा क्यों हो रही है?",
  options_en: ["She failed an exam", "She is leaving her aging mother", "She lost her job", "She is sick"],
  options_hi: ["वह परीक्षा में असफल हो गई", "वह अपनी वृद्ध माँ को छोड़ रही है", "उसकी नौकरी चली गई", "वह बीमार है"],
  answer_en: "She is leaving her aging mother",
  answer_hi: "वह अपनी वृद्ध माँ को छोड़ रही है",
  attempted: false,
  selected: null
},
{
  num: 39,
  question_en: "What does the poet do to hide her pain?",
  question_hi: "अपना दर्द छुपाने के लिए कवि क्या करती है?",
  options_en: ["Cries", "Hugs her mother", "Smiles", "Runs away"],
  options_hi: ["रोती है", "माँ को गले लगाती है", "मुस्कुराती है", "भाग जाती है"],
  answer_en: "Smiles",
  answer_hi: "मुस्कुराती है",
  attempted: false,
  selected: null
},
{
  num: 40,
  question_en: "What technique is used in describing children ‘spilling out’?",
  question_hi: "'बच्चों का बाहर गिर पड़ना' में कौन सी तकनीक है?",
  options_en: ["Metaphor", "Simile", "Imagery", "Irony"],
  options_hi: ["रूपक", "उपमा", "चित्रात्मकता", "विडंबना"],
  answer_en: "Imagery",
  answer_hi: "चित्रात्मकता",
  attempted: false,
  selected: null
},
{
  num: 41,
  question_en: "How old is the poet’s mother in the poem?",
  question_hi: "कविता में कवि की माँ की उम्र कितनी है?",
  options_en: ["Fifty", "Sixty-six", "Sixty", "Seventy"],
  options_hi: ["पचास", "सड़सठ", "साठ", "सत्तर"],
  answer_en: "Sixty-six",
  answer_hi: "सड़सठ",
  attempted: false,
  selected: null
},
{
  num: 42,
  question_en: "What does the title 'My Mother at Sixty-six' emphasize?",
  question_hi: "'My Mother at Sixty-six' शीर्षक किस पर ज़ोर देता है?",
  options_en: ["The poet's age", "A random number", "The mother’s aging", "A birthday party"],
  options_hi: ["कवि की उम्र", "एक यादृच्छिक संख्या", "माँ की वृद्धावस्था", "एक जन्मदिन की पार्टी"],
  answer_en: "The mother’s aging",
  answer_hi: "माँ की वृद्धावस्था",
  attempted: false,
  selected: null
},
{
  num: 43,
  question_en: "What is the poet’s relationship with her mother like?",
  question_hi: "कवि का अपनी माँ के साथ संबंध कैसा है?",
  options_en: ["Distant", "Loving and concerned", "Formal", "Resentful"],
  options_hi: ["दूरस्थ", "स्नेहपूर्ण और चिंतित", "औपचारिक", "नाराज़"],
  answer_en: "Loving and concerned",
  answer_hi: "स्नेहपूर्ण और चिंतित",
  attempted: false,
  selected: null
},
{
  num: 44,
  question_en: "What does 'corpse' signify in the poem?",
  question_hi: "कविता में 'शव' का क्या अर्थ है?",
  options_en: ["A dead animal", "A sleeping person", "Near death state", "An object"],
  options_hi: ["एक मरा हुआ जानवर", "एक सोता हुआ व्यक्ति", "मृत्यु के निकट अवस्था", "एक वस्तु"],
  answer_en: "Near death state",
  answer_hi: "मृत्यु के निकट अवस्था",
  attempted: false,
  selected: null
},
{
  num: 45,
  question_en: "What is the mood of the poem?",
  question_hi: "कविता का मूड क्या है?",
  options_en: ["Cheerful", "Humorous", "Wistful", "Joyous"],
  options_hi: ["प्रसन्न", "हास्यपूर्ण", "विरक्त", "आनंदमय"],
  answer_en: "Wistful",
  answer_hi: "विरक्त",
  attempted: false,
  selected: null
},
{
  num: 46,
  question_en: "What is the main setting of the poem?",
  question_hi: "कविता का मुख्य स्थान क्या है?",
  options_en: ["A hospital", "A market", "Inside a car", "A park"],
  options_hi: ["एक अस्पताल", "एक बाज़ार", "एक कार के अंदर", "एक पार्क"],
  answer_en: "Inside a car",
  answer_hi: "एक कार के अंदर",
  attempted: false,
  selected: null
},
{
  num: 47,
  question_en: "What do the children represent?",
  question_hi: "बच्चे किसका प्रतिनिधित्व करते हैं?",
  options_en: ["Old age", "Past memories", "Life, energy, youth", "Sadness"],
  options_hi: ["बुढ़ापा", "पुरानी यादें", "जीवन, ऊर्जा, युवा", "उदासी"],
  answer_en: "Life, energy, youth",
  answer_hi: "जीवन, ऊर्जा, युवा",
  attempted: false,
  selected: null
},
{
  num: 48,
  question_en: "How many characters are mentioned directly in the poem?",
  question_hi: "कविता में सीधे तौर पर कितने पात्रों का उल्लेख है?",
  options_en: ["One", "Two", "Three", "Four"],
  options_hi: ["एक", "दो", "तीन", "चार"],
  answer_en: "Two",
  answer_hi: "दो",
  attempted: false,
  selected: null
},
{
  num: 49,
  question_en: "What does the smile at the end indicate?",
  question_hi: "अंत में मुस्कान क्या दर्शाती है?",
  options_en: ["Inner joy", "Hidden fear and pain", "Satisfaction", "Peace"],
  options_hi: ["आंतरिक खुशी", "छिपा हुआ डर और दर्द", "संतोष", "शांति"],
  answer_en: "Hidden fear and pain",
  answer_hi: "छिपा हुआ डर और दर्द",
  attempted: false,
  selected: null
},
{
  num: 50,
  question_en: "What does the poem reflect upon?",
  question_hi: "कविता किस पर विचार करती है?",
  options_en: ["Old age and loss", "Love and marriage", "Education and work", "Dreams and success"],
  options_hi: ["बुढ़ापा और क्षति", "प्रेम और विवाह", "शिक्षा और कार्य", "सपने और सफलता"],
  answer_en: "Old age and loss",
  answer_hi: "बुढ़ापा और क्षति",
  attempted: false,
  selected: null
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
      const correctAnswer = language === "en" ? q.answer_en : q.answer_hi;
      if (q.attempted) {
          attempted++;
          if (q.selected === correctAnswer) score++;
      } else {
          notAttempted++;
      }
      results.push({ 
          question: language === "en" ? q.question_en : q.question_hi,
          selected: q.selected || "Not Answered", 
          correct: correctAnswer 
      });
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