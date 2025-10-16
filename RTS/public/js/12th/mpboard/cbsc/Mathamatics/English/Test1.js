const questions = [
 {
    num: 1,
    question_en: "Who is the author of the story 'The Last Lesson'?",
    question_hi: "'द लास्ट लेसन' कहानी के लेखक कौन हैं?",
    options_en: ["Alphonse Daudet", "Louis Pasteur", "Victor Hugo", "Guy de Maupassant"],
    options_hi: ["अल्फोंस डोडे", "लुई पाश्चर", "विक्टर ह्यूगो", "गाय डी मोपासन"],
    answer_en: "Alphonse Daudet",
    answer_hi: "अल्फोंस डोडे",
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "What is the main theme of 'The Last Lesson'?",
    question_hi: "'द लास्ट लेसन' की मुख्य थीम क्या है?",
    options_en: ["Importance of language", "Importance of education", "French history", "German invasion"],
    options_hi: ["भाषा का महत्व", "शिक्षा का महत्व", "फ्रांसीसी इतिहास", "जर्मन आक्रमण"],
    answer_en: "Importance of language",
    answer_hi: "भाषा का महत्व",
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "Where is the story 'The Last Lesson' set?",
    question_hi: "'द लास्ट लेसन' कहानी किस जगह पर आधारित है?",
    options_en: ["Alsace", "Paris", "Berlin", "London"],
    options_hi: ["आलसास", "पेरिस", "बर्लिन", "लंदन"],
    answer_en: "Alsace",
    answer_hi: "आलसास",
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "Why was the French language lesson the last one?",
    question_hi: "फ्रेंच भाषा की कक्षा आखिरी क्यों थी?",
    options_en: ["Because Germans banned it", "Because the teacher retired", "Because school was closed", "Because students refused"],
    options_hi: ["क्योंकि जर्मनों ने इसे बंद कर दिया", "क्योंकि शिक्षक सेवानिवृत्त हुए", "क्योंकि स्कूल बंद हो गया", "क्योंकि छात्र मना कर दिए"],
    answer_en: "Because Germans banned it",
    answer_hi: "क्योंकि जर्मनों ने इसे बंद कर दिया",
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "Who is Franz in the story?",
    question_hi: "कहानी में फ्रांज कौन है?",
    options_en: ["The narrator and student", "The teacher", "The principal", "A German soldier"],
    options_hi: ["कथाकार और छात्र", "शिक्षक", "प्रिंसिपल", "एक जर्मन सैनिक"],
    answer_en: "The narrator and student",
    answer_hi: "कथाकार और छात्र",
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "What feeling does Franz have about school initially?",
    question_hi: "शुरुआत में फ्रांज को स्कूल के बारे में क्या महसूस होता है?",
    options_en: ["Excitement", "Fear", "Indifference", "Boredom"],
    options_hi: ["उत्साह", "डर", "उदासीनता", "उबाऊपन"],
    answer_en: "Boredom",
    answer_hi: "उबाऊपन",
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "Who is M. Hamel in the story?",
    question_hi: "कहानी में मि. हैमल कौन हैं?",
    options_en: ["The teacher", "The principal", "The narrator", "A German officer"],
    options_hi: ["शिक्षक", "प्रिंसिपल", "कथाकार", "एक जर्मन अधिकारी"],
    answer_en: "The teacher",
    answer_hi: "शिक्षक",
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "How does M. Hamel feel about teaching the last lesson?",
    question_hi: "मि. हैमल आखिरी पाठ पढ़ाने के बारे में कैसा महसूस करते हैं?",
    options_en: ["Sad", "Angry", "Happy", "Indifferent"],
    options_hi: ["दुखी", "गुस्सा", "खुश", "उदासीन"],
    answer_en: "Sad",
    answer_hi: "दुखी",
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "What does M. Hamel wear on the day of the last lesson?",
    question_hi: "आखिरी पाठ के दिन मि. हैमल क्या पहनते हैं?",
    options_en: ["Black coat", "Traditional Alsace costume", "Casual clothes", "School uniform"],
    options_hi: ["काला कोट", "पारंपरिक आलसास पोशाक", "साधारण कपड़े", "स्कूल यूनिफॉर्म"],
    answer_en: "Traditional Alsace costume",
    answer_hi: "पारंपरिक आलसास पोशाक",
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "Why do the villagers attend the last French lesson?",
    question_hi: "गाँव वाले आखिरी फ्रेंच कक्षा में क्यों शामिल होते हैं?",
    options_en: ["To support the teacher", "To learn French", "Because of curiosity", "To protest German rule"],
    options_hi: ["शिक्षक का समर्थन करने के लिए", "फ्रेंच सीखने के लिए", "जिज्ञासा के कारण", "जर्मन शासन का विरोध करने के लिए"],
    answer_en: "To support the teacher",
    answer_hi: "शिक्षक का समर्थन करने के लिए",
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "What message does 'The Last Lesson' convey about one’s mother tongue?",
    question_hi: "'द लास्ट लेसन' अपनी मातृभाषा के बारे में क्या संदेश देता है?",
    options_en: ["It is important to preserve it", "It should be replaced by English", "It is unimportant", "It should be forgotten"],
    options_hi: ["इसे संरक्षित करना महत्वपूर्ण है", "इसे अंग्रेजी से बदला जाना चाहिए", "यह महत्वहीन है", "इसे भूल जाना चाहिए"],
    answer_en: "It is important to preserve it",
    answer_hi: "इसे संरक्षित करना महत्वपूर्ण है",
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "Who gives the order to stop teaching French?",
    question_hi: "फ्रेंच पढ़ाने को रोकने का आदेश किसने दिया?",
    options_en: ["German authorities", "French government", "School principal", "M. Hamel"],
    options_hi: ["जर्मन अधिकारी", "फ्रेंच सरकार", "स्कूल प्रिंसिपल", "मि. हैमल"],
    answer_en: "German authorities",
    answer_hi: "जर्मन अधिकारी",
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "What is the tone of the story 'The Last Lesson'?",
    question_hi: "'द लास्ट लेसन' की भावनात्मक शैली क्या है?",
    options_en: ["Sad and regretful", "Joyful and happy", "Angry and rebellious", "Neutral"],
    options_hi: ["दुखी और पछतावा", "खुशी और आनंद", "गुस्सा और विद्रोही", "तटस्थ"],
    answer_en: "Sad and regretful",
    answer_hi: "दुखी और पछतावा",
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "What does the story teach us about patriotism?",
    question_hi: "यह कहानी देशभक्ति के बारे में हमें क्या सिखाती है?",
    options_en: ["To value our culture and language", "To ignore foreign influence", "To fight wars", "To migrate"],
    options_hi: ["हमारी संस्कृति और भाषा को महत्व देना", "विदेशी प्रभाव को नजरअंदाज करना", "युद्ध लड़ना", "प्रवास करना"],
    answer_en: "To value our culture and language",
    answer_hi: "हमारी संस्कृति और भाषा को महत्व देना",
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "How does Franz feel at the end of the story?",
    question_hi: "कहानी के अंत में फ्रांज कैसा महसूस करता है?",
    options_en: ["Regretful", "Indifferent", "Happy", "Angry"],
    options_hi: ["पछतावा", "उदासीन", "खुश", "गुस्सा"],
    answer_en: "Regretful",
    answer_hi: "पछतावा",
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "What is the significance of the setting of the story in Alsace?",
    question_hi: "आलसास में कहानी की पृष्ठभूमि का क्या महत्व है?",
    options_en: ["It shows German occupation", "It is a random place", "It is Franz’s hometown", "It is the capital city"],
    options_hi: ["यह जर्मन कब्जे को दर्शाता है", "यह एक यादृच्छिक जगह है", "यह फ्रांज का गृह नगर है", "यह राजधानी शहर है"],
    answer_en: "It shows German occupation",
    answer_hi: "यह जर्मन कब्जे को दर्शाता है",
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "What does M. Hamel say about learning languages?",
    question_hi: "मि. हैमल भाषाएँ सीखने के बारे में क्या कहते हैं?",
    options_en: ["They are important for freedom", "They are a waste of time", "Only French matters", "Languages are confusing"],
    options_hi: ["वे स्वतंत्रता के लिए महत्वपूर्ण हैं", "वे समय की बर्बादी हैं", "केवल फ्रेंच महत्वपूर्ण है", "भाषाएँ भ्रमित करती हैं"],
    answer_en: "They are important for freedom",
    answer_hi: "वे स्वतंत्रता के लिए महत्वपूर्ण हैं",
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "Why does Franz feel sorry during the last lesson?",
    question_hi: "आखिरी पाठ के दौरान फ्रांज को क्यों अफसोस होता है?",
    options_en: ["He did not learn French properly", "He missed school", "He wanted to learn German", "He disliked the teacher"],
    options_hi: ["उसने फ्रेंच ठीक से नहीं सीखी", "वह स्कूल से चूक गया", "वह जर्मन सीखना चाहता था", "उसे शिक्षक पसंद नहीं थे"],
    answer_en: "He did not learn French properly",
    answer_hi: "उसने फ्रेंच ठीक से नहीं सीखी",
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "What role does fear play in the story?",
    question_hi: "कहानी में डर की क्या भूमिका है?",
    options_en: ["Fear of losing language", "Fear of war", "Fear of teacher", "No role"],
    options_hi: ["भाषा खोने का डर", "युद्ध का डर", "शिक्षक का डर", "कोई भूमिका नहीं"],
    answer_en: "Fear of losing language",
    answer_hi: "भाषा खोने का डर",
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "How does the author evoke sympathy for the French language?",
    question_hi: "लेखक फ्रेंच भाषा के लिए सहानुभूति कैसे जगाते हैं?",
    options_en: ["By showing its forced ban", "By praising German", "By ignoring it", "By ridiculing it"],
    options_hi: ["इसके जबरन प्रतिबंध को दिखाकर", "जर्मन की प्रशंसा करके", "इसे नजरअंदाज करके", "इसका मज़ाक उड़ाकर"],
    answer_en: "By showing its forced ban",
    answer_hi: "इसके जबरन प्रतिबंध को दिखाकर",
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "What lesson can be learnt from 'The Last Lesson'?",
    question_hi: "'द लास्ट लेसन' से क्या सीख मिलती है?",
    options_en: ["Value your mother tongue", "Learn only foreign languages", "Ignore history", "Avoid school"],
    options_hi: ["अपनी मातृभाषा का सम्मान करें", "केवल विदेशी भाषाएँ सीखें", "इतिहास को नजरअंदाज करें", "स्कूल से बचें"],
    answer_en: "Value your mother tongue",
    answer_hi: "अपनी मातृभाषा का सम्मान करें",
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "What does Franz do after the last lesson?",
    question_hi: "आखिरी पाठ के बाद फ्रांज क्या करता है?",
    options_en: ["Keeps learning French", "Stops learning French", "Runs away", "Joins German army"],
    options_hi: ["फ्रेंच सीखना जारी रखता है", "फ्रेंच सीखना बंद कर देता है", "भाग जाता है", "जर्मन सेना में शामिल हो जाता है"],
    answer_en: "Keeps learning French",
    answer_hi: "फ्रेंच सीखना जारी रखता है",
    attempted: false,
    selected: null
  },
   {
    num: 22,
    question_en: "What does Franz do after the last lesson?",
    question_hi: "आखिरी पाठ के बाद फ्रांज क्या करता है?",
    options_en: [
      "He feels determined to learn French",
      "He leaves school forever",
      "He decides to learn German",
      "He forgets the lesson"
    ],
    options_hi: [
      "वह फ्रेंच सीखने के लिए दृढ़ संकल्पित होता है",
      "वह हमेशा के लिए स्कूल छोड़ देता है",
      "वह जर्मन सीखने का फैसला करता है",
      "वह पाठ भूल जाता है"
    ],
    answer_en: "He feels determined to learn French",
    answer_hi: "वह फ्रेंच सीखने के लिए दृढ़ संकल्पित होता है",
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "What was the reaction of villagers to the last French lesson?",
    question_hi: "आखिरी फ्रेंच कक्षा पर गांव वालों की प्रतिक्रिया क्या थी?",
    options_en: [
      "They attended to show respect",
      "They ignored it",
      "They protested against it",
      "They were indifferent"
    ],
    options_hi: [
      "सम्मान दिखाने के लिए आए",
      "उन्होंने इसे नजरअंदाज किया",
      "उन्होंने इसका विरोध किया",
      "वे उदासीन थे"
    ],
    answer_en: "They attended to show respect",
    answer_hi: "सम्मान दिखाने के लिए आए",
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "What is the significance of M. Hamel's farewell speech?",
    question_hi: "मि. हैमल के विदाई भाषण का क्या महत्व है?",
    options_en: [
      "It stresses importance of mother tongue",
      "It praises German language",
      "It criticizes students",
      "It announces school closure"
    ],
    options_hi: [
      "यह मातृभाषा के महत्व पर जोर देता है",
      "यह जर्मन भाषा की प्रशंसा करता है",
      "यह छात्रों की आलोचना करता है",
      "यह स्कूल बंद होने की घोषणा करता है"
    ],
    answer_en: "It stresses importance of mother tongue",
    answer_hi: "यह मातृभाषा के महत्व पर जोर देता है",
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "How does the story 'The Last Lesson' end?",
    question_hi: "'द लास्ट लेसन' कहानी कैसे खत्म होती है?",
    options_en: [
      "With Franz feeling regret",
      "With Germans leaving Alsace",
      "With a celebration",
      "With M. Hamel retiring"
    ],
    options_hi: [
      "फ्रांज पछताते हुए",
      "जर्मन आलसास छोड़ देते हैं",
      "एक उत्सव के साथ",
      "मि. हैमल सेवानिवृत्त होते हैं"
    ],
    answer_en: "With Franz feeling regret",
    answer_hi: "फ्रांज पछताते हुए",
    attempted: false,
    selected: null
  },
  {
    num: 26,
    question_en: "What does the school symbolize in the story?",
    question_hi: "कहानी में स्कूल क्या प्रतीक है?",
    options_en: [
      "Place of cultural identity",
      "Place of punishment",
      "Place to learn only German",
      "Place of indifference"
    ],
    options_hi: [
      "सांस्कृतिक पहचान का स्थान",
      "सज़ा का स्थान",
      "केवल जर्मन सीखने का स्थान",
      "उदासीनता का स्थान"
    ],
    answer_en: "Place of cultural identity",
    answer_hi: "सांस्कृतिक पहचान का स्थान",
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "Why does M. Hamel ask students to remember their lesson well?",
    question_hi: "मि. हैमल छात्रों से अपनी पाठ अच्छी तरह याद रखने को क्यों कहते हैं?",
    options_en: [
      "Because it may be the last French lesson",
      "Because exam is near",
      "Because he is strict",
      "Because German will replace French"
    ],
    options_hi: [
      "क्योंकि यह आखिरी फ्रेंच पाठ हो सकता है",
      "क्योंकि परीक्षा निकट है",
      "क्योंकि वह सख्त हैं",
      "क्योंकि जर्मन फ्रेंच की जगह लेगा"
    ],
    answer_en: "Because it may be the last French lesson",
    answer_hi: "क्योंकि यह आखिरी फ्रेंच पाठ हो सकता है",
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "What feeling does the story evoke about losing one's language?",
    question_hi: "अपनी भाषा खोने के बारे में कहानी कौन-सा भाव जगाती है?",
    options_en: [
      "Sadness and loss",
      "Joy and relief",
      "Anger and rebellion",
      "Indifference"
    ],
    options_hi: [
      "दुख और नुकसान",
      "खुशी और राहत",
      "गुस्सा और विद्रोह",
      "उदासीनता"
    ],
    answer_en: "Sadness and loss",
    answer_hi: "दुख और नुकसान",
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "Who is the narrator of 'The Last Lesson'?",
    question_hi: "'द लास्ट लेसन' का कथाकार कौन है?",
    options_en: [
      "Franz",
      "M. Hamel",
      "A German soldier",
      "The school principal"
    ],
    options_hi: [
      "फ्रांज",
      "मि. हैमल",
      "एक जर्मन सैनिक",
      "स्कूल प्रिंसिपल"
    ],
    answer_en: "Franz",
    answer_hi: "फ्रांज",
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "What does the story suggest about education and culture?",
    question_hi: "कहानी शिक्षा और संस्कृति के बारे में क्या सुझाव देती है?",
    options_en: [
      "Education helps preserve culture",
      "Education should be separate from culture",
      "Culture is irrelevant in education",
      "Only language matters in culture"
    ],
    options_hi: [
      "शिक्षा संस्कृति को संरक्षित करने में मदद करती है",
      "शिक्षा को संस्कृति से अलग होना चाहिए",
      "शिक्षा में संस्कृति अप्रासंगिक है",
      "संस्कृति में केवल भाषा महत्वपूर्ण है"
    ],
    answer_en: "Education helps preserve culture",
    answer_hi: "शिक्षा संस्कृति को संरक्षित करने में मदद करती है",
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "What happens to the teaching of French in Alsace after the story's events?",
    question_hi: "कहानी की घटनाओं के बाद आलसास में फ्रेंच पढ़ाई का क्या होता है?",
    options_en: [
      "It is banned by German authorities",
      "It becomes more popular",
      "It is made compulsory",
      "It is replaced by English"
    ],
    options_hi: [
      "यह जर्मन अधिकारियों द्वारा प्रतिबंधित हो जाती है",
      "यह अधिक लोकप्रिय हो जाती है",
      "यह अनिवार्य कर दी जाती है",
      "यह अंग्रेज़ी से बदल दी जाती है"
    ],
    answer_en: "It is banned by German authorities",
    answer_hi: "यह जर्मन अधिकारियों द्वारा प्रतिबंधित हो जाती है",
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "How does Franz change as a character by the end of the story?",
    question_hi: "कहानी के अंत तक फ्रांज चरित्र के रूप में कैसे बदलता है?",
    options_en: [
      "He becomes more aware and respectful of his language",
      "He stops caring about French",
      "He becomes rebellious against teachers",
      "He decides to leave school"
    ],
    options_hi: [
      "वह अपनी भाषा के प्रति अधिक जागरूक और सम्मानित हो जाता है",
      "वह फ्रेंच की परवाह करना बंद कर देता है",
      "वह शिक्षकों के खिलाफ विद्रोही हो जाता है",
      "वह स्कूल छोड़ने का फैसला करता है"
    ],
    answer_en: "He becomes more aware and respectful of his language",
    answer_hi: "वह अपनी भाषा के प्रति अधिक जागरूक और सम्मानित हो जाता है",
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "What is the mood of the classroom during the last lesson?",
    question_hi: "आखिरी पाठ के दौरान कक्षा का मूड कैसा था?",
    options_en: [
      "Serious and emotional",
      "Casual and relaxed",
      "Noisy and chaotic",
      "Happy and celebratory"
    ],
    options_hi: [
      "गंभीर और भावुक",
      "आरामदायक और आराम से",
      "शोरगुल और अराजक",
      "खुश और उत्सवमय"
    ],
    answer_en: "Serious and emotional",
    answer_hi: "गंभीर और भावुक",
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "Which language will replace French in Alsace as per the story?",
    question_hi: "कहानी के अनुसार फ्रेंच की जगह आलसास में कौन सी भाषा लेगी?",
    options_en: [
      "German",
      "English",
      "Spanish",
      "Italian"
    ],
    options_hi: [
      "जर्मन",
      "अंग्रेज़ी",
      "स्पेनिश",
      "इतालवी"
    ],
    answer_en: "German",
    answer_hi: "जर्मन",
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "How is M. Hamel portrayed in the story?",
    question_hi: "कहानी में मि. हैमल को कैसे दर्शाया गया है?",
    options_en: [
      "Dedicated and patriotic teacher",
      "Lazy and careless teacher",
      "Strict and harsh teacher",
      "Indifferent and unkind"
    ],
    options_hi: [
      "समर्पित और देशभक्त शिक्षक",
      "आलसी और लापरवाह शिक्षक",
      "सख्त और कठोर शिक्षक",
      "उदासीन और कठोर"
    ],
    answer_en: "Dedicated and patriotic teacher",
    answer_hi: "समर्पित और देशभक्त शिक्षक",
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "What lesson does 'The Last Lesson' teach us?",
    question_hi: "'द लास्ट लेसन' हमें क्या सिखाता है?",
    options_en: [
      "Value and preserve your mother tongue",
      "Learn only foreign languages",
      "Ignore cultural identity",
      "Avoid learning history"
    ],
    options_hi: [
      "अपनी मातृभाषा का सम्मान और संरक्षण करें",
      "केवल विदेशी भाषाएं सीखें",
      "सांस्कृतिक पहचान की उपेक्षा करें",
      "इतिहास सीखने से बचें"
    ],
    answer_en: "Value and preserve your mother tongue",
    answer_hi: "अपनी मातृभाषा का सम्मान और संरक्षण करें",
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "What does the story reveal about the effect of war on education?",
    question_hi: "कहानी युद्ध के शिक्षा पर प्रभाव के बारे में क्या बताती है?",
    options_en: [
      "War disrupts cultural education",
      "War improves schooling",
      "War has no effect on education",
      "War encourages learning new languages"
    ],
    options_hi: [
      "युद्ध सांस्कृतिक शिक्षा को बाधित करता है",
      "युद्ध स्कूलिंग को बेहतर बनाता है",
      "युद्ध का शिक्षा पर कोई असर नहीं",
      "युद्ध नई भाषाएं सीखने को प्रोत्साहित करता है"
    ],
    answer_en: "War disrupts cultural education",
    answer_hi: "युद्ध सांस्कृतिक शिक्षा को बाधित करता है",
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "How do students feel about their language before the last lesson?",
    question_hi: "आखिरी पाठ से पहले छात्र अपनी भाषा के बारे में कैसा महसूस करते थे?",
    options_en: [
      "They took it for granted",
      "They were proud",
      "They disliked it",
      "They were indifferent"
    ],
    options_hi: [
      "वे इसे सामान्य समझते थे",
      "वे इसके प्रति गर्व महसूस करते थे",
      "वे इसे नापसंद करते थे",
      "वे उदासीन थे"
    ],
    answer_en: "They took it for granted",
    answer_hi: "वे इसे सामान्य समझते थे",
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "What role does patriotism play in 'The Last Lesson'?",
    question_hi: "'द लास्ट लेसन' में देशभक्ति की क्या भूमिका है?",
    options_en: [
      "It motivates the teacher and students",
      "It is not mentioned",
      "It causes conflicts",
      "It discourages learning"
    ],
    options_hi: [
      "यह शिक्षक और छात्रों को प्रेरित करता है",
      "इसका उल्लेख नहीं है",
      "यह संघर्ष पैदा करता है",
      "यह सीखने को रोकता है"
    ],
    answer_en: "It motivates the teacher and students",
    answer_hi: "यह शिक्षक और छात्रों को प्रेरित करता है",
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "What is the tone of 'The Last Lesson'?",
    question_hi: "'द लास्ट लेसन' की भाषा कैसी है?",
    options_en: [
      "Melancholic and nostalgic",
      "Humorous and light",
      "Angry and harsh",
      "Indifferent and cold"
    ],
    options_hi: [
      "विषादपूर्ण और स्मरणीय",
      "हास्यपूर्ण और हल्का",
      "गुस्से वाला और कठोर",
      "उदासीन और ठंडा"
    ],
    answer_en: "Melancholic and nostalgic",
    answer_hi: "विषादपूर्ण और स्मरणीय",
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "Why is the story titled 'The Last Lesson'?",
    question_hi: "कहानी का शीर्षक 'द लास्ट लेसन' क्यों है?",
    options_en: [
      "Because it is the final French lesson",
      "Because school is closing permanently",
      "Because teacher is leaving",
      "Because no more lessons will be taught"
    ],
    options_hi: [
      "क्योंकि यह आखिरी फ्रेंच पाठ है",
      "क्योंकि स्कूल स्थायी रूप से बंद हो रहा है",
      "क्योंकि शिक्षक जा रहे हैं",
      "क्योंकि अब और पाठ नहीं पढ़ाए जाएंगे"
    ],
    answer_en: "Because it is the final French lesson",
    answer_hi: "क्योंकि यह आखिरी फ्रेंच पाठ है",
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "What does the story emphasize about losing one’s language?",
    question_hi: "अपनी भाषा खोने के बारे में कहानी क्या ज़ोर देती है?",
    options_en: [
      "It is like losing identity",
      "It is not important",
      "It is beneficial",
      "It should be accepted"
    ],
    options_hi: [
      "यह पहचान खोने जैसा है",
      "यह महत्वपूर्ण नहीं है",
      "यह लाभकारी है",
      "इससे सहमति होनी चाहिए"
    ],
    answer_en: "It is like losing identity",
    answer_hi: "यह पहचान खोने जैसा है",
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "How does the story portray the German occupation?",
    question_hi: "कहानी में जर्मन कब्जे को कैसे दिखाया गया है?",
    options_en: [
      "As suppressive and controlling",
      "As friendly and helpful",
      "As indifferent",
      "As liberating"
    ],
    options_hi: [
      "दबाव डालने वाला और नियंत्रित करने वाला",
      "मित्रवत और सहायक",
      "उदासीन",
      "मुक्तिदायक"
    ],
    answer_en: "As suppressive and controlling",
    answer_hi: "दबाव डालने वाला और नियंत्रित करने वाला",
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "What is the significance of the blackboard message in the story?",
    question_hi: "कहानी में ब्लैकबोर्ड पर लिखा संदेश क्या महत्व रखता है?",
    options_en: [
      "It announces the ban on French",
      "It welcomes German soldiers",
      "It lists homework",
      "It displays a poem"
    ],
    options_hi: [
      "यह फ्रेंच भाषा पर प्रतिबंध की घोषणा करता है",
      "यह जर्मन सैनिकों का स्वागत करता है",
      "यह होमवर्क सूचीबद्ध करता है",
      "यह एक कविता दिखाता है"
    ],
    answer_en: "It announces the ban on French",
    answer_hi: "यह फ्रेंच भाषा पर प्रतिबंध की घोषणा करता है",
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "What lesson can students learn from M. Hamel’s dedication?",
    question_hi: "मि. हैमल की समर्पण से छात्र क्या सीख सकते हैं?",
    options_en: [
      "Value your language and culture",
      "Only study foreign languages",
      "Teachers are unimportant",
      "Language is outdated"
    ],
    options_hi: [
      "अपनी भाषा और संस्कृति को महत्व दें",
      "केवल विदेशी भाषाएं पढ़ें",
      "शिक्षक महत्वपूर्ण नहीं हैं",
      "भाषा पुरानी हो गई है"
    ],
    answer_en: "Value your language and culture",
    answer_hi: "अपनी भाषा और संस्कृति को महत्व दें",
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "Why is the story still relevant today?",
    question_hi: "कहानी आज भी क्यों प्रासंगिक है?",
    options_en: [
      "Because preserving language is important",
      "Because wars are common",
      "Because schools are closing",
      "Because German is popular"
    ],
    options_hi: [
      "क्योंकि भाषा संरक्षण महत्वपूर्ण है",
      "क्योंकि युद्ध सामान्य हैं",
      "क्योंकि स्कूल बंद हो रहे हैं",
      "क्योंकि जर्मन लोकप्रिय है"
    ],
    answer_en: "Because preserving language is important",
    answer_hi: "क्योंकि भाषा संरक्षण महत्वपूर्ण है",
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "What does the phrase ‘our language is our identity’ mean in the story?",
    question_hi: "कहानी में ‘हमारी भाषा हमारी पहचान है’ का क्या अर्थ है?",
    options_en: [
      "Language defines who we are",
      "Language is just a tool",
      "Language is a barrier",
      "Language is unimportant"
    ],
    options_hi: [
      "भाषा यह निर्धारित करती है कि हम कौन हैं",
      "भाषा केवल एक उपकरण है",
      "भाषा एक बाधा है",
      "भाषा महत्वपूर्ण नहीं है"
    ],
    answer_en: "Language defines who we are",
    answer_hi: "भाषा यह निर्धारित करती है कि हम कौन हैं",
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "Who was in charge of the French lessons in the village?",
    question_hi: "गांव में फ्रेंच पाठ का प्रभार कौन संभालता था?",
    options_en: [
      "M. Hamel",
      "Franz",
      "The German officer",
      "The school principal"
    ],
    options_hi: [
      "मि. हैमल",
      "फ्रांज",
      "जर्मन अधिकारी",
      "स्कूल प्रिंसिपल"
    ],
    answer_en: "M. Hamel",
    answer_hi: "मि. हैमल",
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "What does Franz realize by the end of the story?",
    question_hi: "कहानी के अंत तक फ्रांज क्या समझता है?",
    options_en: [
      "The importance of his mother tongue",
      "That learning is useless",
      "That German is better",
      "That school is boring"
    ],
    options_hi: [
      "अपनी मातृभाषा का महत्व",
      "कि सीखना बेकार है",
      "कि जर्मन बेहतर है",
      "कि स्कूल उबाऊ है"
    ],
    answer_en: "The importance of his mother tongue",
    answer_hi: "अपनी मातृभाषा का महत्व",
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "Why do you think Franz regrets not paying attention earlier?",
    question_hi: "आपके अनुसार फ्रांज पहले ध्यान न देने पर पछताता है क्योंकि?",
    options_en: [
      "He realizes the value of learning",
      "He dislikes the teacher",
      "He prefers other subjects",
      "He wants to stop going to school"
    ],
    options_hi: [
      "उसे सीखने का मूल्य समझ आता है",
      "उसे शिक्षक पसंद नहीं हैं",
      "वह अन्य विषय पसंद करता है",
      "वह स्कूल जाना बंद करना चाहता है"
    ],
    answer_en: "He realizes the value of learning",
    answer_hi: "उसे सीखने का मूल्य समझ आता है",
    attempted: false,
    selected: null
  }
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
