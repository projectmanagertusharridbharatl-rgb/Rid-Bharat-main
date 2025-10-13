const questions = [
  {
    num: 1,
    question_en: "The Maurya Empire was succeeded by which dynasty?",
    question_hi: "मौर्य साम्राज्य के बाद कौन सा वंश आया?",
    options_en: ["Shunga", "Gupta", "Maurya", "Satavahana"],
    options_hi: ["शुंग", "गुप्त", "मौर्य", "सातवाहन"],
    answer_en: "Shunga",
    answer_hi: "शुंग",
    answer: "Shunga",
    attempted: false,
    selected: ""
  },
   {
    num: 2,
    question_en: "What was the religion of Chandragupta Maurya later in life?",
    question_hi: "चंद्रगुप्त मौर्य का जीवन के अंत में कौन सा धर्म था?",
    options_en: ["Jainism", "Hinduism", "Buddhism", "Islam"],
    options_hi: ["जैन धर्म", "हिंदू धर्म", "बौद्ध धर्म", "इस्लाम"],
    answer_en: "Jainism",
    answer_hi: "जैन धर्म",
    answer: "Jainism",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Who was the father of Ashoka?",
    question_hi: "अशोक के पिता कौन थे?",
    options_en: ["Bindusara", "Chandragupta Maurya", "Samudragupta", "Harsha"],
    options_hi: ["बिंदुसार", "चंद्रगुप्त मौर्य", "समुद्रगुप्त", "हर्ष"],
    answer_en: "Bindusara",
    answer_hi: "बिंदुसार",
    answer: "Bindusara",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What was the capital of the Maurya Empire?",
    question_hi: "मौर्य साम्राज्य की राजधानी क्या थी?",
    options_en: ["Pataliputra", "Taxila", "Ujjain", "Kalinga"],
    options_hi: ["पाटलिपुत्र", "टैक्सिला", "उज्जैन", "कलिंग"],
    answer_en: "Pataliputra",
    answer_hi: "पाटलिपुत्र",
    answer: "Pataliputra",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which Mauryan ruler is known for the Kalinga War?",
    question_hi: "मौर्य शासक किस कलिंग युद्ध के लिए प्रसिद्ध हैं?",
    options_en: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"],
    options_hi: ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "बिंबिसार"],
    answer_en: "Ashoka",
    answer_hi: "अशोक",
    answer: "Ashoka",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "The Edicts of Ashoka were inscribed on which material?",
    question_hi: "अशोक के शिलालेख किस सामग्री पर लिखे गए थे?",
    options_en: ["Rocks and pillars", "Palm leaves", "Metal plates", "Paper"],
    options_hi: ["पत्थर और स्तंभ", "ताड़पत्र", "धातु की पट्टियाँ", "कागज"],
    answer_en: "Rocks and pillars",
    answer_hi: "पत्थर और स्तंभ",
    answer: "Rocks and pillars",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Who was the prime minister of Chandragupta Maurya?",
    question_hi: "चंद्रगुप्त मौर्य के प्रधान मंत्री कौन थे?",
    options_en: ["Chanakya", "Ashoka", "Bindusara", "Vishnugupta"],
    options_hi: ["चाणक्य", "अशोक", "बिंदुसार", "विष्णुगुप्त"],
    answer_en: "Chanakya",
    answer_hi: "चाणक्य",
    answer: "Chanakya",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which religion saw state patronage under Ashoka?",
    question_hi: "अशोक के शासनकाल में किस धर्म को राज्य का संरक्षण मिला?",
    options_en: ["Buddhism", "Jainism", "Hinduism", "Islam"],
    options_hi: ["बौद्ध धर्म", "जैन धर्म", "हिंदू धर्म", "इस्लाम"],
    answer_en: "Buddhism",
    answer_hi: "बौद्ध धर्म",
    answer: "Buddhism",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which Mauryan ruler is credited with unifying most of India?",
    question_hi: "किस मौर्य शासक को अधिकांश भारत को एकजुट करने का श्रेय दिया जाता है?",
    options_en: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
    options_hi: ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "समुद्रगुप्त"],
    answer_en: "Chandragupta Maurya",
    answer_hi: "चंद्रगुप्त मौर्य",
    answer: "Chandragupta Maurya",
    attempted: false,
    selected: ""
  },
 {
    num: 10,
    question_en: "Who was the first Emperor of the Maurya Dynasty?",
    question_hi: "मौर्य वंश के प्रथम सम्राट कौन थे?",
    options_en: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
    options_hi: ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "समुद्रगुप्त"],
    answer_en: "Chandragupta Maurya",
    answer_hi: "चंद्रगुप्त मौर्य",
    answer: "Chandragupta Maurya",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which Mauryan ruler sent emissaries to Hellenistic kingdoms?",
    question_hi: "किस मौर्य शासक ने हेल्लेनिस्टिक राज्यों को दूत भेजे थे?",
    options_en: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
    options_hi: ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "समुद्रगुप्त"],
    answer_en: "Chandragupta Maurya",
    answer_hi: "चंद्रगुप्त मौर्य",
    answer: "Chandragupta Maurya",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Ashoka’s famous inscription is known as?",
    question_hi: "अशोक की प्रसिद्ध शिलालेख को क्या कहा जाता है?",
    options_en: ["Edicts of Ashoka", "Manuscripts of Ashoka", "Chronicles of Ashoka", "Letters of Ashoka"],
    options_hi: ["अशोक के शिलालेख", "अशोक की पांडुलिपियाँ", "अशोक की इतिहासावली", "अशोक के पत्र"],
    answer_en: "Edicts of Ashoka",
    answer_hi: "अशोक के शिलालेख",
    answer: "Edicts of Ashoka",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which famous Buddhist monument was built by Ashoka?",
    question_hi: "अशोक ने कौन सा प्रसिद्ध बौद्ध स्मारक बनवाया?",
    options_en: ["Sanchi Stupa", "Nalanda University", "Ajanta Caves", "Ellora Caves"],
    options_hi: ["सांची स्तूप", "नालंदा विश्वविद्यालय", "अजंता गुफाएँ", "एलोरा गुफाएँ"],
    answer_en: "Sanchi Stupa",
    answer_hi: "सांची स्तूप",
    answer: "Sanchi Stupa",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Who wrote the Arthashastra, the treatise on statecraft?",
    question_hi: "राजनीति शास्त्र 'अर्थशास्त्र' किसने लिखा?",
    options_en: ["Chanakya", "Ashoka", "Vishnugupta", "Kautilya"],
    options_hi: ["चाणक्य", "अशोक", "विष्णुगुप्त", "कौटिल्य"],
    answer_en: "Chanakya",
    answer_hi: "चाणक्य",
    answer: "Chanakya",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Maurya Empire was founded in which century BCE?",
    question_hi: "मौर्य साम्राज्य किस शताब्दी ईसा पूर्व में स्थापित हुआ?",
    options_en: ["4th century BCE", "3rd century BCE", "5th century BCE", "2nd century BCE"],
    options_hi: ["4वीं शताब्दी ई.पू.", "3वीं शताब्दी ई.पू.", "5वीं शताब्दी ई.पू.", "2वीं शताब्दी ई.पू."],
    answer_en: "4th century BCE",
    answer_hi: "4वीं शताब्दी ई.पू.",
    answer: "4th century BCE",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which Mauryan ruler expanded the empire to its greatest extent?",
    question_hi: "किस मौर्य शासक ने साम्राज्य का सबसे अधिक विस्तार किया?",
    options_en: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"],
    options_hi: ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "समुद्रगुप्त"],
    answer_en: "Ashoka",
    answer_hi: "अशोक",
    answer: "Ashoka",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which of these was a major feature of Ashoka’s reign?",
    question_hi: "अशोक के शासनकाल की प्रमुख विशेषता क्या थी?",
    options_en: ["Promotion of Dharma", "Military conquest", "Building palaces", "Tax increase"],
    options_hi: ["धर्म का प्रचार", "सैन्य विजय", "महलों का निर्माण", "कर वृद्धि"],
    answer_en: "Promotion of Dharma",
    answer_hi: "धर्म का प्रचार",
    answer: "Promotion of Dharma",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which Mauryan ruler is associated with the rise of the Indian bureaucracy?",
    question_hi: "किस मौर्य शासक को भारतीय नौकरशाही के विकास से जोड़ा जाता है?",
    options_en: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
    options_hi: ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "समुद्रगुप्त"],
    answer_en: "Chandragupta Maurya",
    answer_hi: "चंद्रगुप्त मौर्य",
    answer: "Chandragupta Maurya",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which Mauryan emperor embraced Buddhism?",
    question_hi: "किस मौर्य सम्राट ने बौद्ध धर्म अपनाया?",
    options_en: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bharata"],
    options_hi: ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "भरत"],
    answer_en: "Ashoka",
    answer_hi: "अशोक",
    answer: "Ashoka",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which Mauryan capital was known for its advanced urban planning?",
    question_hi: "मौर्य राजधानी किसके लिए जानी जाती थी?",
    options_en: ["Pataliputra", "Taxila", "Ujjain", "Rajgir"],
    options_hi: ["पाटलिपुत्र", "टैक्सिला", "उज्जैन", "राजगीर"],
    answer_en: "Pataliputra",
    answer_hi: "पाटलिपुत्र",
    answer: "Pataliputra",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which Mauryan ruler was known for religious tolerance?",
    question_hi: "कौन सा मौर्य शासक धार्मिक सहिष्णुता के लिए जाना जाता है?",
    options_en: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"],
    options_hi: ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "बिंबिसार"],
    answer_en: "Ashoka",
    answer_hi: "अशोक",
    answer: "Ashoka",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What language were the Edicts of Ashoka primarily written in?",
    question_hi: "अशोक के शिलालेख मुख्य रूप से किस भाषा में लिखे गए थे?",
    options_en: ["Prakrit", "Sanskrit", "Pali", "Persian"],
    options_hi: ["प्राकृत", "संस्कृत", "पाली", "फारसी"],
    answer_en: "Prakrit",
    answer_hi: "प्राकृत",
    answer: "Prakrit",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which Mauryan ruler was succeeded by his son Bindusara?",
    question_hi: "किस मौर्य शासक के बाद उनके पुत्र बिंदुसार ने शासन संभाला?",
    options_en: ["Chandragupta Maurya", "Ashoka", "Samudragupta", "Bimbisara"],
    options_hi: ["चंद्रगुप्त मौर्य", "अशोक", "समुद्रगुप्त", "बिंबिसार"],
    answer_en: "Chandragupta Maurya",
    answer_hi: "चंद्रगुप्त मौर्य",
    answer: "Chandragupta Maurya",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which Mauryan emperor is credited with spreading Buddhism outside India?",
    question_hi: "किस मौर्य सम्राट को भारत के बाहर बौद्ध धर्म फैलाने का श्रेय दिया जाता है?",
    options_en: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"],
    options_hi: ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "समुद्रगुप्त"],
    answer_en: "Ashoka",
    answer_hi: "अशोक",
    answer: "Ashoka",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which text is considered the political handbook of the Mauryan Empire?",
    question_hi: "मौर्य साम्राज्य की राजनीतिक मार्गदर्शिका कौन सी है?",
    options_en: ["Arthashastra", "Mahabharata", "Ramayana", "Vedas"],
    options_hi: ["अर्थशास्त्र", "महाभारत", "रामायण", "वेद"],
    answer_en: "Arthashastra",
    answer_hi: "अर्थशास्त्र",
    answer: "Arthashastra",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "Who was the advisor and mentor of Chandragupta Maurya?",
    question_hi: "चन्द्रगुप्त मौर्य के सलाहकार और मार्गदर्शक कौन थे?",
    options_en: ["Chanakya", "Ashoka", "Bindusara", "Bimbisara"],
    options_hi: ["चाणक्य", "अशोक", "बिंदुसार", "बिम्बिसार"],
    answer: "Chanakya",
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "What was the capital of the Maurya Empire?",
    question_hi: "मौर्य साम्राज्य की राजधानी क्या थी?",
    options_en: ["Pataliputra", "Taxila", "Ujjain", "Kalinga"],
    options_hi: ["पाटलिपुत्र", "टक्सिला", "उज्जैन", "कलिंग"],
    answer: "Pataliputra",
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "Which Mauryan emperor embraced Buddhism and spread it?",
    question_hi: "किस मौर्य सम्राट ने बौद्ध धर्म स्वीकार किया और उसे फैलाया?",
    options_en: ["Ashoka", "Chandragupta", "Bindusara", "Samprati"],
    options_hi: ["अशोक", "चन्द्रगुप्त", "बिंदुसार", "सम्प्रति"],
    answer: "Ashoka",
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "The famous edicts of Ashoka were written on what material?",
    question_hi: "अशोक के प्रसिद्ध शिलालेख किस सामग्री पर लिखे गए थे?",
    options_en: ["Stone pillars", "Palm leaves", "Metal plates", "Clay tablets"],
    options_hi: ["पत्थर के स्तंभ", "ताड़ के पत्ते", "धातु की पट्टियाँ", "मिट्टी की तख्तियाँ"],
    answer: "Stone pillars",
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "Which battle led to Ashoka's conversion to Buddhism?",
    question_hi: "किस युद्ध ने अशोक के बौद्ध धर्म अपनाने में भूमिका निभाई?",
    options_en: ["Kalinga War", "Battle of Panipat", "Battle of Hydaspes", "Battle of Plassey"],
    options_hi: ["कलिंग युद्ध", "पनिपत का युद्ध", "हाइडास्पेस का युद्ध", "प्लासी का युद्ध"],
    answer: "Kalinga War",
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "Who succeeded Chandragupta Maurya as the emperor?",
    question_hi: "चन्द्रगुप्त मौर्य के बाद किसने सिंहासन संभाला?",
    options_en: ["Bindusara", "Ashoka", "Samprati", "Pushyamitra"],
    options_hi: ["बिंदुसार", "अशोक", "सम्प्रति", "पुष्यामित्र"],
    answer: "Bindusara",
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "Which ancient university flourished during the Mauryan period?",
    question_hi: "मौर्य काल में कौन सा प्राचीन विश्वविद्यालय फला-फूला?",
    options_en: ["Nalanda", "Takshashila", "Vikramshila", "Ujjain"],
    options_hi: ["नालंदा", "टक्षशिला", "विक्रमशिला", "उज्जैन"],
    answer: "Takshashila",
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "What was the official language of the Maurya Empire?",
    question_hi: "मौर्य साम्राज्य की आधिकारिक भाषा क्या थी?",
    options_en: ["Prakrit", "Sanskrit", "Pali", "Persian"],
    options_hi: ["प्राकृत", "संस्कृत", "पाली", "फ़ारसी"],
    answer: "Prakrit",
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "Which Mauryan ruler was known for promoting non-violence and welfare?",
    question_hi: "कौन सा मौर्य शासक अहिंसा और कल्याण को बढ़ावा देने के लिए जाना जाता था?",
    options_en: ["Ashoka", "Chandragupta", "Bindusara", "Samprati"],
    options_hi: ["अशोक", "चन्द्रगुप्त", "बिंदुसार", "सम्प्रति"],
    answer: "Ashoka",
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "Which foreign historian wrote about the Maurya Empire?",
    question_hi: "किस विदेशी इतिहासकार ने मौर्य साम्राज्य के बारे में लिखा?",
    options_en: ["Megasthenes", "Herodotus", "Plutarch", "Arrian"],
    options_hi: ["मेगास्थनीज", "हेरोडोटस", "प्लूटार्क", "एरियन"],
    answer: "Megasthenes",
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "The Arthashastra, a famous treatise on politics and economics, was authored by?",
    question_hi: "अर्थशास्त्र, राजनीति और अर्थव्यवस्था पर प्रसिद्ध ग्रंथ किसने लिखा था?",
    options_en: ["Chanakya", "Ashoka", "Kautilya", "Brahmagupta"],
    options_hi: ["चाणक्य", "अशोक", "कौटिल्य", "ब्रह्मगुप्त"],
    answer: "Chanakya",
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "Which Mauryan ruler is credited with unifying most of the Indian subcontinent?",
    question_hi: "किस मौर्य शासक को भारतीय उपमहाद्वीप के अधिकांश हिस्से को एकजुट करने का श्रेय दिया जाता है?",
    options_en: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samprati"],
    options_hi: ["चन्द्रगुप्त मौर्य", "अशोक", "बिंदुसार", "सम्प्रति"],
    answer: "Chandragupta Maurya",
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "Which religion was predominant in the Maurya Empire before Ashoka's conversion?",
    question_hi: "अशोक के धर्म परिवर्तन से पहले मौर्य साम्राज्य में प्रमुख धर्म कौन सा था?",
    options_en: ["Hinduism", "Buddhism", "Jainism", "Zoroastrianism"],
    options_hi: ["हिंदू धर्म", "बौद्ध धर्म", "जैन धर्म", "ज़ोरास्ट्रियन धर्म"],
    answer: "Hinduism",
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "Which Mauryan ruler is believed to have abdicated the throne and became a Jain ascetic?",
    question_hi: "कौन सा मौर्य शासक सिंहासन छोड़कर जैन साधु बन गया माना जाता है?",
    options_en: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samprati"],
    options_hi: ["चन्द्रगुप्त मौर्य", "अशोक", "बिंदुसार", "सम्प्रति"],
    answer: "Chandragupta Maurya",
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "What was the main purpose of Ashoka’s edicts?",
    question_hi: "अशोक के शिलालेखों का मुख्य उद्देश्य क्या था?",
    options_en: ["Promote Dharma and moral values", "Declare war", "Tax collection", "Trade regulation"],
    options_hi: ["धर्म और नैतिक मूल्यों को बढ़ावा देना", "युद्ध की घोषणा", "कर संग्रह", "व्यापार नियम"],
    answer: "Promote Dharma and moral values",
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "Which empire succeeded the Maurya Empire in India?",
    question_hi: "मौर्य साम्राज्य के बाद भारत में कौन सा साम्राज्य आया?",
    options_en: ["Gupta Empire", "Kushan Empire", "Satavahana Empire", "Mughal Empire"],
    options_hi: ["गुप्त साम्राज्य", "कुषाण साम्राज्य", "सातवाहन साम्राज्य", "मुगल साम्राज्य"],
    answer: "Gupta Empire",
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "Who was the last Mauryan emperor?",
    question_hi: "मौर्य साम्राज्य का अंतिम सम्राट कौन था?",
    options_en: ["Brihadratha", "Ashoka", "Samprati", "Bindusara"],
    options_hi: ["बृहद्रथ", "अशोक", "सम्प्रति", "बिंदुसार"],
    answer: "Brihadratha",
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "Which Mauryan emperor is also known for his policy of Dhamma?",
    question_hi: "कौन सा मौर्य सम्राट अपने धर्म नीति के लिए प्रसिद्ध है?",
    options_en: ["Ashoka", "Chandragupta", "Bindusara", "Samprati"],
    options_hi: ["अशोक", "चन्द्रगुप्त", "बिंदुसार", "सम्प्रति"],
    answer: "Ashoka",
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "The Mauryan administration was divided into how many provinces?",
    question_hi: "मौर्य प्रशासन कितने प्रांतों में विभाजित था?",
    options_en: ["4", "16", "8", "12"],
    options_hi: ["4", "16", "8", "12"],
    answer: "4",
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "Which Mauryan ruler's inscriptions were found at Dhauli and Girnar?",
    question_hi: "धौलि और गिरनार में किस मौर्य शासक के शिलालेख पाए गए?",
    options_en: ["Ashoka", "Chandragupta", "Bindusara", "Samprati"],
    options_hi: ["अशोक", "चन्द्रगुप्त", "बिंदुसार", "सम्प्रति"],
    answer: "Ashoka",
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "What was the main army strength of the Mauryan Empire?",
    question_hi: "मौर्य साम्राज्य की मुख्य सेना की शक्ति क्या थी?",
    options_en: ["Infantry, Cavalry, Elephants, Chariots", "Only Infantry", "Only Cavalry", "Only Elephants"],
    options_hi: ["पैदल सेना, घुड़सवार सेना, हाथी, रथ", "केवल पैदल सेना", "केवल घुड़सवार सेना", "केवल हाथी"],
    answer: "Infantry, Cavalry, Elephants, Chariots",
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "Which Mauryan ruler's death marked the start of the empire's decline?",
    question_hi: "किस मौर्य शासक की मृत्यु से साम्राज्य के पतन की शुरुआत हुई?",
    options_en: ["Ashoka", "Chandragupta", "Brihadratha", "Bindusara"],
    options_hi: ["अशोक", "चन्द्रगुप्त", "बृहद्रथ", "बिंदुसार"],
    answer: "Ashoka",
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "Which Mauryan ruler is known for construction of the Grand Road from Pataliputra to Taxila?",
    question_hi: "कौन सा मौर्य शासक पाटलिपुत्र से टक्सिला तक 'ग्रैंड रोड' का निर्माण करवाने के लिए जाना जाता है?",
    options_en: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samprati"],
    options_hi: ["चन्द्रगुप्त मौर्य", "अशोक", "बिंदुसार", "सम्प्रति"],
    answer: "Chandragupta Maurya",
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "Which Mauryan dynasty king was known for religious tolerance?",
    question_hi: "कौन सा मौर्य राजा धार्मिक सहिष्णुता के लिए जाना जाता था?",
    options_en: ["Ashoka", "Chandragupta", "Bindusara", "Samprati"],
    options_hi: ["अशोक", "चन्द्रगुप्त", "बिंदुसार", "सम्प्रति"],
    answer: "Ashoka",
    attempted: false,
    selected: null
  },
  {
    num: 50,
    question_en: "What was the main economic activity during the Maurya Empire?",
    question_hi: "मौर्य साम्राज्य के दौरान मुख्य आर्थिक गतिविधि क्या थी?",
    options_en: ["Agriculture", "Mining", "Trade", "Handicrafts"],
    options_hi: ["कृषि", "खनन", "व्यापार", "हस्तशिल्प"],
    answer: "Agriculture",
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
