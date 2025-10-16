const questions = [
    {
    num: 1,
    question_en: "Who helped the peddler realize his mistakes?",
    question_hi: "किसने पेडलर को उसकी गलतियों का एहसास कराया?",
    options_en: ["The blacksmith", "The ironmaster", "Edla Willmansson", "The farmer"],
    options_hi: ["लोहार", "आयरनमास्टर", "एडला विलमंसन", "किसान"],
    answer_en: "Edla Willmansson",
    answer_hi: "एडला विलमंसन",
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "What was the peddler’s philosophy about the world?",
    question_hi: "दुनिया के बारे में पेडलर का दर्शन क्या था?",
    options_en: ["It is a beautiful place", "It is a trap", "It is heaven", "It is full of good people"],
    options_hi: ["यह एक सुंदर जगह है", "यह एक जाल है", "यह स्वर्ग है", "यह अच्छे लोगों से भरी है"],
    answer_en: "It is a trap",
    answer_hi: "यह एक जाल है",
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "Where did the peddler take shelter during a cold evening?",
    question_hi: "ठंडी शाम में पेडलर ने कहां शरण ली?",
    options_en: ["At a police station", "At a farmhouse", "At the old man's cottage", "At a railway station"],
    options_hi: ["पुलिस स्टेशन में", "एक फार्महाउस में", "बूढ़े आदमी की झोपड़ी में", "रेलवे स्टेशन में"],
    answer_en: "At the old man's cottage",
    answer_hi: "बूढ़े आदमी की झोपड़ी में",
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "What hospitality did the old man offer to the peddler?",
    question_hi: "बूढ़े आदमी ने पेडलर को कौन-सी मेहमाननवाज़ी दी?",
    options_en: ["Bread", "Tea", "Supper and tobacco", "Money"],
    options_hi: ["रोटी", "चाय", "रात का खाना और तंबाकू", "पैसे"],
    answer_en: "Supper and tobacco",
    answer_hi: "रात का खाना और तंबाकू",
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "Why was the ironmaster surprised to see the peddler?",
    question_hi: "आयरनमास्टर पेडलर को देखकर क्यों हैरान था?",
    options_en: ["He thought he was a thief", "He recognized him as an old regimental comrade", "He looked rich", "He came unexpectedly"],
    options_hi: ["उसे लगा वह चोर है", "उसे वह पुराना रेजीमेंट का साथी लगा", "वह अमीर लग रहा था", "वह अचानक आ गया"],
    answer_en: "He recognized him as an old regimental comrade",
    answer_hi: "उसे वह पुराना रेजीमेंट का साथी लगा",
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "Why did Edla Willmansson invite the peddler home for Christmas?",
    question_hi: "एडला विलमंसन ने पेडलर को क्रिसमस पर घर क्यों बुलाया?",
    options_en: ["To punish him", "To reform him", "To enjoy his stories", "To serve him food"],
    options_hi: ["उसे सजा देने के लिए", "उसे सुधारने के लिए", "उसकी कहानियाँ सुनने के लिए", "उसे खाना खिलाने के लिए"],
    answer_en: "To reform him",
    answer_hi: "उसे सुधारने के लिए",
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "What gift did the peddler leave for Edla?",
    question_hi: "पेडलर ने एडला के लिए क्या उपहार छोड़ा?",
    options_en: ["A rattrap", "Money", "A book", "A letter and a rattrap"],
    options_hi: ["एक चूहेदानी", "पैसे", "एक किताब", "एक पत्र और एक चूहेदानी"],
    answer_en: "A letter and a rattrap",
    answer_hi: "एक पत्र और एक चूहेदानी",
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "What did the peddler sign the letter as?",
    question_hi: "पेडलर ने पत्र पर कैसे हस्ताक्षर किए?",
    options_en: ["Peddler", "Rattrap seller", "Captain von Stahle", "Thief"],
    options_hi: ["पेडलर", "चूहेदानी बेचने वाला", "कैप्टन वॉन स्टाहले", "चोर"],
    answer_en: "Captain von Stahle",
    answer_hi: "कैप्टन वॉन स्टाहले",
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "What transformation is seen in the peddler at the end?",
    question_hi: "कहानी के अंत में पेडलर में क्या बदलाव दिखता है?",
    options_en: ["He becomes richer", "He becomes kind and honest", "He becomes angry", "He disappears"],
    options_hi: ["वह अमीर हो जाता है", "वह दयालु और ईमानदार बन जाता है", "वह गुस्से में हो जाता है", "वह गायब हो जाता है"],
    answer_en: "He becomes kind and honest",
    answer_hi: "वह दयालु और ईमानदार बन जाता है",
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "What does the rattrap symbolize in the story?",
    question_hi: "कहानी में चूहेदानी किसका प्रतीक है?",
    options_en: ["Charity", "Hospitality", "The world’s temptations", "Christmas spirit"],
    options_hi: ["दान", "मेहमाननवाज़ी", "दुनिया के प्रलोभन", "क्रिसमस की भावना"],
    answer_en: "The world’s temptations",
    answer_hi: "दुनिया के प्रलोभन",
    attempted: false,
    selected: null
  
      },
       {
    num: 11,
    question_en: "How did the peddler feel after stealing the old man's money?",
    question_hi: "बूढ़े आदमी का पैसा चुराने के बाद पेडलर कैसा महसूस करता है?",
    options_en: ["Happy", "Guilty", "Excited", "Proud"],
    options_hi: ["खुश", "अपराधी", "उत्साहित", "गर्वित"],
    answer_en: "Guilty",
    answer_hi: "अपराधी",
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "What was the occupation of the old man?",
    question_hi: "बूढ़ा आदमी क्या काम करता था?",
    options_en: ["Teacher", "Ironmaster", "Crofter", "Soldier"],
    options_hi: ["शिक्षक", "आयरनमास्टर", "कृपण किसान", "सैनिक"],
    answer_en: "Crofter",
    answer_hi: "कृपण किसान",
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "Where did the crofter keep his money?",
    question_hi: "कृपण किसान ने अपने पैसे कहाँ रखे थे?",
    options_en: ["In a tin box on a shelf", "Under his pillow", "In his coat", "In the stable"],
    options_hi: ["शेल्फ पर टिन के डिब्बे में", "तकिये के नीचे", "अपने कोट में", "अस्थबल में"],
    answer_en: "In a tin box on a shelf",
    answer_hi: "शेल्फ पर टिन के डिब्बे में",
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "Why did the peddler not want to go to the manor house initially?",
    question_hi: "पेडलर शुरू में हवेली (मेनर हाउस) क्यों नहीं जाना चाहता था?",
    options_en: ["He was tired", "He feared getting caught", "He hated the ironmaster", "He wanted to return money first"],
    options_hi: ["वह थका हुआ था", "उसे पकड़े जाने का डर था", "वह आयरनमास्टर से नफरत करता था", "वह पहले पैसे लौटाना चाहता था"],
    answer_en: "He feared getting caught",
    answer_hi: "उसे पकड़े जाने का डर था",
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "What did Edla do differently from her father?",
    question_hi: "एडला ने अपने पिता से अलग क्या किया?",
    options_en: ["She ignored the peddler", "She treated him kindly and respectfully", "She scolded him", "She called the police"],
    options_hi: ["उसने पेडलर को नजरअंदाज किया", "उसने उसे दयालुता और सम्मान से व्यवहार किया", "उसने उसे डांटा", "उसने पुलिस को बुलाया"],
    answer_en: "She treated him kindly and respectfully",
    answer_hi: "उसने उसे दयालुता और सम्मान से व्यवहार किया",
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "How did the ironmaster react when he found out the peddler was not his friend?",
    question_hi: "जब आयरनमास्टर को पता चला कि पेडलर उसका दोस्त नहीं है, तो उसने कैसे प्रतिक्रिया दी?",
    options_en: ["He beat him", "He was furious and wanted to call the sheriff", "He gave him money", "He ignored him"],
    options_hi: ["उसने उसे पीटा", "वह गुस्से में था और शेरिफ को बुलाना चाहता था", "उसने उसे पैसे दिए", "उसने उसे नजरअंदाज किया"],
    answer_en: "He was furious and wanted to call the sheriff",
    answer_hi: "वह गुस्से में था और शेरिफ को बुलाना चाहता था",
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "Which day is celebrated in the story?",
    question_hi: "कहानी में कौन सा दिन मनाया जाता है?",
    options_en: ["New Year", "Thanksgiving", "Christmas Eve", "Easter"],
    options_hi: ["नया साल", "थैंक्सगिविंग", "क्रिसमस ईव", "ईस्टर"],
    answer_en: "Christmas Eve",
    answer_hi: "क्रिसमस ईव",
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "Why is the story titled 'The Rattrap'?",
    question_hi: "कहानी का नाम 'द रैट्रैप' क्यों रखा गया है?",
    options_en: ["Because of peddler's profession", "It symbolizes how people get trapped by temptations", "It’s about a real trap", "It was Christmas gift"],
    options_hi: ["क्योंकि पेडलर का पेशा है", "यह दर्शाता है कि लोग कैसे लालच में फँस जाते हैं", "यह एक असली चूहेदानी के बारे में है", "यह क्रिसमस का उपहार था"],
    answer_en: "It symbolizes how people get trapped by temptations",
    answer_hi: "यह दर्शाता है कि लोग कैसे लालच में फँस जाते हैं",
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "Who is the author of 'The Rattrap'?",
    question_hi: "'द रैट्रैप' के लेखक कौन हैं?",
    options_en: ["Selma Lagerlöf", "Leo Tolstoy", "Katherine Mansfield", "Anton Chekhov"],
    options_hi: ["सेल्मा लेगरलॉफ़", "लियो टॉलस्टॉय", "कैथरीन मैन्सफील्ड", "एंटन चेखव"],
    answer_en: "Selma Lagerlöf",
    answer_hi: "सेल्मा लेगरलॉफ़",
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "How did Edla react when the peddler left a gift?",
    question_hi: "जब पेडलर ने उपहार छोड़ा तो एडला ने कैसे प्रतिक्रिया दी?",
    options_en: ["She was angry", "She cried in joy", "She returned it", "She ignored it"],
    options_hi: ["वह गुस्से में थी", "वह खुशी से रो पड़ी", "उसने उसे लौटा दिया", "उसने उसे नजरअंदाज किया"],
    answer_en: "She cried in joy",
    answer_hi: "वह खुशी से रो पड़ी",
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "What does the peddler’s transformation teach us?",
    question_hi: "पेडलर के परिवर्तन से हमें क्या शिक्षा मिलती है?",
    options_en: ["Everyone deserves punishment", "Money is everything", "Kindness can change people", "Never trust strangers"],
    options_hi: ["हर किसी को सजा मिलनी चाहिए", "पैसा ही सब कुछ है", "दयालुता लोगों को बदल सकती है", "अजनबियों पर कभी भरोसा न करें"],
    answer_en: "Kindness can change people",
    answer_hi: "दयालुता लोगों को बदल सकती है",
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "What gift item symbolized the peddler’s transformation?",
    question_hi: "पेडलर के परिवर्तन का प्रतीक कौन-सी वस्तु थी?",
    options_en: ["Letter", "Money", "Rattrap", "Bible"],
    options_hi: ["पत्र", "पैसे", "चूहेदानी", "बाइबिल"],
    answer_en: "Rattrap",
    answer_hi: "चूहेदानी",
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "Why did the crofter show his money to the peddler?",
    question_hi: "कृपण किसान ने पेडलर को अपने पैसे क्यों दिखाए?",
    options_en: ["To lend it", "To boast", "To donate", "To count it"],
    options_hi: ["उधार देने के लिए", "घमंड करने के लिए", "दान करने के लिए", "गिनने के लिए"],
    answer_en: "To boast",
    answer_hi: "घमंड करने के लिए",
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "What did the peddler compare the world to?",
    question_hi: "पेडलर ने दुनिया की तुलना किससे की?",
    options_en: ["A trap for rats", "A battlefield", "A jail", "A circus"],
    options_hi: ["चूहों के जाल", "एक युद्ध क्षेत्र", "एक जेल", "एक सर्कस"],
    answer_en: "A trap for rats",
    answer_hi: "चूहों के जाल",
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "What is the tone of the story 'The Rattrap'?",
    question_hi: "'द रैट्रैप' कहानी का स्वर क्या है?",
    options_en: ["Comic", "Satirical", "Transformative and thoughtful", "Violent"],
    options_hi: ["हास्यपूर्ण", "व्यंग्यात्मक", "परिवर्तनकारी और विचारशील", "हिंसक"],
    answer_en: "Transformative and thoughtful",
    answer_hi: "परिवर्तनकारी और विचारशील",
    attempted: false,
    selected: null
  },
{
    num: 26,
    question_en: "What was the peddler’s real intention behind selling rattraps?",
    question_hi: "चूहा पकड़ने वाले जाल बेचने के पीछे पेडलर का असली मकसद क्या था?",
    options_en: ["To earn money honestly", "To trap people", "To survive by any means", "To cheat the villagers"],
    options_hi: ["ईमानदारी से पैसे कमाना", "लोगों को फंसाना", "किसी भी तरह से जीना", "गांव वालों को धोखा देना"],
    answer_en: "To survive by any means",
    answer_hi: "किसी भी तरह से जीना",
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "What did the peddler do when he was caught in the cold winter?",
    question_hi: "ठंड के मौसम में पेडलर ने क्या किया जब वह फंस गया था?",
    options_en: ["He begged for food", "He slept under a tree", "He sought shelter in a cottage", "He left the village"],
    options_hi: ["उसने खाना मांगा", "वह पेड़ के नीचे सोया", "वह एक झोपड़ी में शरण ली", "वह गांव छोड़ गया"],
    answer_en: "He sought shelter in a cottage",
    answer_hi: "वह एक झोपड़ी में शरण ली",
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "Who was the ironmaster in the story?",
    question_hi: "कहानी में आयरनमास्टर कौन था?",
    options_en: ["A wealthy man", "The owner of the cottage", "The village chief", "The peddler’s friend"],
    options_hi: ["एक अमीर आदमी", "झोपड़ी का मालिक", "गांव का मुखिया", "पेडलर का दोस्त"],
    answer_en: "The owner of the cottage",
    answer_hi: "झोपड़ी का मालिक",
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "Why did the ironmaster treat the peddler kindly?",
    question_hi: "आयरनमास्टर ने पेडलर के साथ अच्छा व्यवहार क्यों किया?",
    options_en: ["Because he knew him", "Because of his kindness", "Because the peddler was his relative", "Because the peddler was famous"],
    options_hi: ["क्योंकि वह उसे जानता था", "अपनी दया के कारण", "क्योंकि पेडलर उसका रिश्तेदार था", "क्योंकि पेडलर प्रसिद्ध था"],
    answer_en: "Because of his kindness",
    answer_hi: "अपनी दया के कारण",
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "What did the peddler realize at the end of the story?",
    question_hi: "कहानी के अंत में पेडलर ने क्या महसूस किया?",
    options_en: ["That life is a rattrap", "That he should steal more", "That people are unkind", "That he should leave the village"],
    options_hi: ["कि जीवन एक चूहा पकड़ने वाला जाल है", "कि उसे ज्यादा चोरी करनी चाहिए", "कि लोग दयालु नहीं हैं", "कि उसे गांव छोड़ देना चाहिए"],
    answer_en: "That life is a rattrap",
    answer_hi: "कि जीवन एक चूहा पकड़ने वाला जाल है",
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "Who forgave the peddler for his theft?",
    question_hi: "चोरी के लिए किसने पेडलर को माफ किया?",
    options_en: ["The ironmaster", "The blacksmith", "The farmer", "The village chief"],
    options_hi: ["आयरनमास्टर", "लोहार", "किसान", "गांव का मुखिया"],
    answer_en: "The ironmaster",
    answer_hi: "आयरनमास्टर",
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "What was the peddler’s reaction when he was forgiven?",
    question_hi: "जब उसे माफ किया गया तो पेडलर की प्रतिक्रिया क्या थी?",
    options_en: ["He felt ashamed", "He was happy", "He decided to run away", "He ignored the kindness"],
    options_hi: ["उसे शर्मिंदा महसूस हुआ", "वह खुश हुआ", "उसने भागने का फैसला किया", "उसने दया को नजरअंदाज किया"],
    answer_en: "He felt ashamed",
    answer_hi: "उसे शर्मिंदा महसूस हुआ",
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "What lesson does 'The Rattrap' teach us?",
    question_hi: "'द रैट्रैप' हमें क्या शिक्षा देता है?",
    options_en: ["Honesty is the best policy", "Life is full of traps", "Kindness can change lives", "All of the above"],
    options_hi: ["ईमानदारी सर्वोत्तम नीति है", "जीवन जाल से भरा है", "दयालुता जीवन बदल सकती है", "उपरोक्त सभी"],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "How did the peddler survive the harsh winter?",
    question_hi: "कठिन सर्दी में पेडलर ने कैसे जीवित रहा?",
    options_en: ["By stealing food", "By seeking help from the ironmaster", "By sleeping outside", "By begging in the village"],
    options_hi: ["खाना चुराकर", "आयरनमास्टर से मदद मांगकर", "बाहर सोकर", "गांव में भीख मांगकर"],
    answer_en: "By seeking help from the ironmaster",
    answer_hi: "आयरनमास्टर से मदद मांगकर",
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "Why is the story titled 'The Rattrap'?",
    question_hi: "कहानी का शीर्षक 'द रैट्रैप' क्यों है?",
    options_en: ["Because the peddler sold rattraps", "Because life traps people like a rattrap", "Because of the village setting", "Because of the ironmaster’s cottage"],
    options_hi: ["क्योंकि पेडलर चूहा पकड़ने वाले जाल बेचता था", "क्योंकि जीवन लोगों को जाल की तरह फंसाता है", "गांव के कारण", "आयरनमास्टर की झोपड़ी के कारण"],
    answer_en: "Because life traps people like a rattrap",
    answer_hi: "क्योंकि जीवन लोगों को जाल की तरह फंसाता है",
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "What kind of man was the peddler?",
    question_hi: "पेडलर किस तरह का आदमी था?",
    options_en: ["Honest", "Lazy", "A thief", "Kind-hearted"],
    options_hi: ["ईमानदार", "आलसी", "चोर", "दयालु"],
    answer_en: "A thief",
    answer_hi: "चोर",
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "How did the peddler feel about his life at the end?",
    question_hi: "अंत में पेडलर अपने जीवन के बारे में कैसा महसूस करता था?",
    options_en: ["Hopeful", "Hopeless", "Indifferent", "Confused"],
    options_hi: ["आशावादी", "निराश", "उदासीन", "संदिग्ध"],
    answer_en: "Hopeful",
    answer_hi: "आशावादी",
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "Who was Edla Willmansson in the story?",
    question_hi: "कहानी में एडला विलमंसन कौन थी?",
    options_en: ["The ironmaster's daughter", "The village teacher", "The peddler’s friend", "A stranger"],
    options_hi: ["आयरनमास्टर की बेटी", "गांव की शिक्षिका", "पेडलर की दोस्त", "अजनबी"],
    answer_en: "The ironmaster's daughter",
    answer_hi: "आयरनमास्टर की बेटी",
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "What did the peddler carry in his bag?",
    question_hi: "पेडलर अपनी थैली में क्या लेकर चलता था?",
    options_en: ["Rattraps", "Food", "Tools", "Books"],
    options_hi: ["चूहा पकड़ने वाले जाल", "खाना", "उपकरण", "किताबें"],
    answer_en: "Rattraps",
    answer_hi: "चूहा पकड़ने वाले जाल",
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "Why did the peddler pretend to be a poor man?",
    question_hi: "पेडलर गरीब होने का नाटक क्यों करता था?",
    options_en: ["To gain sympathy", "To avoid police", "To sell more rattraps", "To make friends"],
    options_hi: ["सहानुभूति पाने के लिए", "पुलिस से बचने के लिए", "ज्यादा जाल बेचने के लिए", "दोस्त बनाने के लिए"],
    answer_en: "To gain sympathy",
    answer_hi: "सहानुभूति पाने के लिए",
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "What is the main theme of 'The Rattrap'?",
    question_hi: "'द रैट्रैप' का मुख्य विषय क्या है?",
    options_en: ["Human nature and kindness", "Nature and environment", "War and peace", "Technology advancement"],
    options_hi: ["मानव स्वभाव और दया", "प्रकृति और पर्यावरण", "युद्ध और शांति", "प्रौद्योगिकी उन्नति"],
    answer_en: "Human nature and kindness",
    answer_hi: "मानव स्वभाव और दया",
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "What did the ironmaster give the peddler before he left?",
    question_hi: "आयरनमास्टर ने पेडलर को जाने से पहले क्या दिया?",
    options_en: ["Money and food", "A warm coat", "A rattrap", "Nothing"],
    options_hi: ["पैसे और खाना", "गर्म कोट", "चूहा पकड़ने वाला जाल", "कुछ नहीं"],
    answer_en: "Money and food",
    answer_hi: "पैसे और खाना",
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "Where did the peddler go after leaving the ironmaster's cottage?",
    question_hi: "आयरनमास्टर की झोपड़ी छोड़ने के बाद पेडलर कहाँ गया?",
    options_en: ["To the village", "To the forest", "To the city", "To the next village"],
    options_hi: ["गांव", "जंगल", "शहर", "अगला गांव"],
    answer_en: "To the city",
    answer_hi: "शहर",
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "What did the peddler do to make people believe he was honest?",
    question_hi: "पेडलर ने लोगों को ईमानदार होने के लिए क्या किया?",
    options_en: ["He showed his rattraps", "He told stories", "He pretended to be poor", "He helped the villagers"],
    options_hi: ["उसने अपने चूहा जाल दिखाए", "उसने कहानियां सुनाईं", "उसने गरीब होने का नाटक किया", "उसने गांव वालों की मदद की"],
    answer_en: "He pretended to be poor",
    answer_hi: "उसने गरीब होने का नाटक किया",
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "What does the peddler’s life symbolize in the story?",
    question_hi: "कहानी में पेडलर का जीवन क्या प्रतीक है?",
    options_en: ["Freedom", "Traps of life", "Success", "Adventure"],
    options_hi: ["स्वतंत्रता", "जीवन के जाल", "सफलता", "साहसिक"],
    answer_en: "Traps of life",
    answer_hi: "जीवन के जाल",
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "How did the story end?",
    question_hi: "कहानी का अंत कैसे हुआ?",
    options_en: ["The peddler was caught by police", "The peddler decided to live honestly", "The peddler died", "The peddler left the village"],
    options_hi: ["पेडलर को पुलिस ने पकड़ लिया", "पेडलर ने ईमानदारी से जीने का फैसला किया", "पेडलर की मृत्यु हो गई", "पेडलर ने गांव छोड़ दिया"],
    answer_en: "The peddler decided to live honestly",
    answer_hi: "पेडलर ने ईमानदारी से जीने का फैसला किया",
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "What did the peddler carry with him besides rattraps?",
    question_hi: "चूहा पकड़ने वाले जाल के अलावा पेडलर अपने साथ क्या लेकर चलता था?",
    options_en: ["Food and clothes", "Tools and money", "His diary", "Nothing else"],
    options_hi: ["खाना और कपड़े", "उपकरण और पैसे", "अपनी डायरी", "कुछ नहीं"],
    answer_en: "Nothing else",
    answer_hi: "कुछ नहीं",
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "What did the ironmaster believe about people?",
    question_hi: "आयरनमास्टर लोगों के बारे में क्या सोचता था?",
    options_en: ["Everyone is bad", "Everyone deserves kindness", "Everyone is selfish", "Everyone is dishonest"],
    options_hi: ["हर कोई बुरा है", "हर किसी को दया मिलनी चाहिए", "हर कोई स्वार्थी है", "हर कोई बेईमान है"],
    answer_en: "Everyone deserves kindness",
    answer_hi: "हर किसी को दया मिलनी चाहिए",
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "Why did the peddler write a letter at the end?",
    question_hi: "अंत में पेडलर ने पत्र क्यों लिखा?",
    options_en: ["To apologize", "To thank the ironmaster", "To ask for money", "To say goodbye"],
    options_hi: ["माफी मांगने के लिए", "आयरनमास्टर को धन्यवाद देने के लिए", "पैसे मांगने के लिए", "विदाई कहने के लिए"],
    answer_en: "To thank the ironmaster",
    answer_hi: "आयरनमास्टर को धन्यवाद देने के लिए",
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "What was the peddler’s real name?",
    question_hi: "पेडलर का असली नाम क्या था?",
    options_en: ["No name was given", "John", "Edward", "Michael"],
    options_hi: ["कोई नाम नहीं दिया गया", "जॉन", "एडवर्ड", "माइकल"],
    answer_en: "No name was given",
    answer_hi: "कोई नाम नहीं दिया गया",
    attempted: false,
    selected: null
  }
    // Continue adding more questions up to 30
];





// ========================== GLOBAL VARIABLES ==========================
let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
let timerInterval;

// ========================== QUIZ LOGIC ==========================
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

// ========================== QUESTION ATTEMPT LOGIC ==========================
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ========================== NAVIGATION CONTROLS ==========================
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

// ========================== SUBMIT & SCORE ==========================
function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0, notAttempted = 0, score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(`Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`);
}

// ========================== TIMER FUNCTION ==========================
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

// ========================== QUESTION NAVIGATION UI ==========================
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color};' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ========================== CAMERA & MOVEMENT LOGIC ==========================
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
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

    // ========================== RESIZE HANDLE ==========================
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

    // ========================== DRAG LOGIC ==========================
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

    // ========================== RESIZE LOGIC ==========================
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

    // ========================== CAMERA STREAM ==========================
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

// ========================== MOVEMENT DETECTION ==========================
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
                    alert("⚠️ Alert 1: Face not moving");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head not moving");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

// ========================== RESTART TEST ==========================
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

// ========================== PAGE LOAD ==========================
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); 
};
