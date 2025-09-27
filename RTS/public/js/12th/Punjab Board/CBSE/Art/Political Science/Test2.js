const questions = [
 {
    num: 1,
    question_en: "Who is the head of the State Government in India?",
    question_hi: "भारत में राज्य सरकार का प्रमुख कौन होता है?",
    options_en: ["President", "Governor", "Chief Minister", "Speaker"],
    options_hi: ["राष्ट्रपति", "राज्यपाल", "मुख्यमंत्री", "सभापति"],
    answer_en: "Chief Minister",
    answer_hi: "मुख्यमंत्री",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Who appoints the Governor of a State in India?",
    question_hi: "भारत में राज्यपाल की नियुक्ति कौन करता है?",
    options_en: ["Prime Minister", "President", "Chief Minister", "Speaker"],
    options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "मुख्यमंत्री", "सभापति"],
    answer_en: "President",
    answer_hi: "राष्ट्रपति",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "What is the term of the Legislative Assembly?",
    question_hi: "विधान सभा की अवधि कितनी होती है?",
    options_en: ["5 years", "6 years", "4 years", "3 years"],
    options_hi: ["5 वर्ष", "6 वर्ष", "4 वर्ष", "3 वर्ष"],
    answer_en: "5 years",
    answer_hi: "5 वर्ष",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which article of the Constitution deals with the appointment of the Governor?",
    question_hi: "संविधान के किस अनुच्छेद में राज्यपाल की नियुक्ति का प्रावधान है?",
    options_en: ["Article 152", "Article 153", "Article 154", "Article 155"],
    options_hi: ["अनुच्छेद 152", "अनुच्छेद 153", "अनुच्छेद 154", "अनुच्छेद 155"],
    answer_en: "Article 155",
    answer_hi: "अनुच्छेद 155",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Who presides over the meetings of the Legislative Assembly?",
    question_hi: "विधान सभा की बैठकों की अध्यक्षता कौन करता है?",
    options_en: ["Governor", "Chief Minister", "Speaker", "Deputy Speaker"],
    options_hi: ["राज्यपाल", "मुख्यमंत्री", "सभापति", "उपसभापति"],
    answer_en: "Speaker",
    answer_hi: "सभापति",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "The Council of Ministers is responsible to which of the following?",
    question_hi: "मंत्रिमंडल किसके प्रति जिम्मेदार होता है?",
    options_en: ["Governor", "Legislative Assembly", "Chief Minister", "President"],
    options_hi: ["राज्यपाल", "विधान सभा", "मुख्यमंत्री", "राष्ट्रपति"],
    answer_en: "Legislative Assembly",
    answer_hi: "विधान सभा",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "The Governor’s role is mostly:",
    question_hi: "राज्यपाल की भूमिका मुख्य रूप से होती है:",
    options_en: ["Executive", "Legislative", "Ceremonial", "Judicial"],
    options_hi: ["कार्यपालिका", "विधायी", "संवैधानिक", "न्यायिक"],
    answer_en: "Ceremonial",
    answer_hi: "संवैधानिक",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "How is the Chief Minister of a state appointed?",
    question_hi: "राज्य के मुख्यमंत्री की नियुक्ति कैसे होती है?",
    options_en: ["Elected by people", "Appointed by Governor", "Appointed by President", "Elected by Legislative Assembly"],
    options_hi: ["जनता द्वारा निर्वाचित", "राज्यपाल द्वारा नियुक्त", "राष्ट्रपति द्वारा नियुक्त", "विधान सभा द्वारा निर्वाचित"],
    answer_en: "Appointed by Governor",
    answer_hi: "राज्यपाल द्वारा नियुक्त",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "The State Legislature in India can be:",
    question_hi: "भारत में राज्य विधानमंडल हो सकता है:",
    options_en: ["Unicameral only", "Bicameral only", "Either unicameral or bicameral", "Tricameral"],
    options_hi: ["एक सदनीय ही", "दो सदनीय ही", "या तो एक सदनीय या दो सदनीय", "तीन सदनीय"],
    answer_en: "Either unicameral or bicameral",
    answer_hi: "या तो एक सदनीय या दो सदनीय",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "What is the maximum strength of a State Legislative Assembly as per the Constitution?",
    question_hi: "संविधान के अनुसार राज्य विधान सभा की अधिकतम संख्या कितनी हो सकती है?",
    options_en: ["200", "350", "500", "600"],
    options_hi: ["200", "350", "500", "600"],
    answer_en: "500",
    answer_hi: "500",
    attempted: false,
    selected: ""
  },
  {
    num: 11,
    question_en: "Which of the following is NOT a function of the Governor?",
    question_hi: "निम्नलिखित में से कौन राज्यपाल का कार्य नहीं है?",
    options_en: ["Summoning the state legislature", "Giving assent to bills", "Appointing the Chief Minister", "Passing laws"],
    options_hi: ["राज्य विधानमंडल को बुलाना", "कानूनों को मंजूरी देना", "मुख्यमंत्री नियुक्त करना", "कानून बनाना"],
    answer_en: "Passing laws",
    answer_hi: "कानून बनाना",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "The term of the Governor is:",
    question_hi: "राज्यपाल की अवधि होती है:",
    options_en: ["3 years", "4 years", "5 years", "6 years"],
    options_hi: ["3 वर्ष", "4 वर्ष", "5 वर्ष", "6 वर्ष"],
    answer_en: "5 years",
    answer_hi: "5 वर्ष",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Who can dissolve the Legislative Assembly before the completion of its term?",
    question_hi: "अपनी अवधि पूरी होने से पहले विधान सभा को कौन भंग कर सकता है?",
    options_en: ["Chief Minister", "Governor", "President", "Speaker"],
    options_hi: ["मुख्यमंत्री", "राज्यपाल", "राष्ट्रपति", "सभापति"],
    answer_en: "Governor",
    answer_hi: "राज्यपाल",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "The Chief Minister is responsible to:",
    question_hi: "मुख्यमंत्री किसके प्रति जिम्मेदार होता है?",
    options_en: ["Governor", "Legislative Assembly", "President", "Supreme Court"],
    options_hi: ["राज्यपाल", "विधान सभा", "राष्ट्रपति", "सर्वोच्च न्यायालय"],
    answer_en: "Legislative Assembly",
    answer_hi: "विधान सभा",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Who administers the oath of office to the Chief Minister?",
    question_hi: "मुख्यमंत्री को पद की शपथ कौन दिलाता है?",
    options_en: ["Governor", "President", "Chief Justice", "Prime Minister"],
    options_hi: ["राज्यपाल", "राष्ट्रपति", "मुख्य न्यायाधीश", "प्रधानमंत्री"],
    answer_en: "Governor",
    answer_hi: "राज्यपाल",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which Article of the Constitution mentions the Council of Ministers?",
    question_hi: "संविधान के किस अनुच्छेद में मंत्रिमंडल का उल्लेख है?",
    options_en: ["Article 163", "Article 154", "Article 170", "Article 175"],
    options_hi: ["अनुच्छेद 163", "अनुच्छेद 154", "अनुच्छेद 170", "अनुच्छेद 175"],
    answer_en: "Article 163",
    answer_hi: "अनुच्छेद 163",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Who is the permanent head of the state administration?",
    question_hi: "राज्य प्रशासन का स्थायी प्रमुख कौन होता है?",
    options_en: ["Governor", "Chief Minister", "Chief Secretary", "Speaker"],
    options_hi: ["राज्यपाल", "मुख्यमंत्री", "मुख्य सचिव", "सभापति"],
    answer_en: "Chief Secretary",
    answer_hi: "मुख्य सचिव",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "The salary and allowances of the Governor are charged on:",
    question_hi: "राज्यपाल का वेतन और भत्ते किस पर खर्च होते हैं?",
    options_en: ["State Revenue", "Union Budget", "Consolidated Fund of the State", "Contingency Fund of India"],
    options_hi: ["राज्य राजस्व", "केंद्र बजट", "राज्य के समेकित कोष", "भारत का आकस्मिक कोष"],
    answer_en: "Consolidated Fund of the State",
    answer_hi: "राज्य के समेकित कोष",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Who can recommend President’s Rule in a State?",
    question_hi: "राज्य में राष्ट्रपति शासन की सिफारिश कौन कर सकता है?",
    options_en: ["Governor", "Chief Minister", "State Assembly", "Speaker"],
    options_hi: ["राज्यपाल", "मुख्यमंत्री", "राज्य सभा", "सभापति"],
    answer_en: "Governor",
    answer_hi: "राज्यपाल",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "The State Legislative Council is also known as:",
    question_hi: "राज्य विधान परिषद को क्या भी कहा जाता है?",
    options_en: ["Upper House", "Lower House", "Joint House", "None"],
    options_hi: ["सर्वोच्च सदन", "निम्न सदन", "संयुक्त सदन", "कोई नहीं"],
    answer_en: "Upper House",
    answer_hi: "सर्वोच्च सदन",
    attempted: false,
    selected: ""
  },
  {
    num: 21,
    question_en: "Which of these states does NOT have a Legislative Council?",
    question_hi: "इनमें से किस राज्य में विधान परिषद नहीं है?",
    options_en: ["Bihar", "Tamil Nadu", "Uttar Pradesh", "Karnataka"],
    options_hi: ["बिहार", "तमिलनाडु", "उत्तर प्रदेश", "कर्नाटक"],
    answer_en: "Tamil Nadu",
    answer_hi: "तमिलनाडु",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Who is the ex-officio Chairman of the State Legislative Council?",
    question_hi: "राज्य विधान परिषद के पदेन अध्यक्ष कौन होते हैं?",
    options_en: ["Governor", "Chief Minister", "Deputy Chairman", "Lieutenant Governor"],
    options_hi: ["राज्यपाल", "मुख्यमंत्री", "उपाध्यक्ष", "लूफटेनेंट गवर्नर"],
    answer_en: "Governor",
    answer_hi: "राज्यपाल",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Who can remove the Speaker of the Legislative Assembly?",
    question_hi: "विधान सभा के सभापति को कौन हटा सकता है?",
    options_en: ["Governor", "Chief Minister", "Legislative Assembly", "President"],
    options_hi: ["राज्यपाल", "मुख्यमंत्री", "विधान सभा", "राष्ट्रपति"],
    answer_en: "Legislative Assembly",
    answer_hi: "विधान सभा",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "The Speaker of the Legislative Assembly is elected by:",
    question_hi: "विधान सभा के सभापति का चुनाव कौन करता है?",
    options_en: ["Legislative Assembly Members", "Governor", "Chief Minister", "President"],
    options_hi: ["विधान सभा के सदस्य", "राज्यपाल", "मुख्यमंत्री", "राष्ट्रपति"],
    answer_en: "Legislative Assembly Members",
    answer_hi: "विधान सभा के सदस्य",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "The Governor can reserve a bill for the consideration of the President under which Article?",
    question_hi: "राज्यपाल किस अनुच्छेद के तहत राष्ट्रपति के विचार के लिए विधेयक आरक्षित कर सकता है?",
    options_en: ["Article 200", "Article 201", "Article 202", "Article 203"],
    options_hi: ["अनुच्छेद 200", "अनुच्छेद 201", "अनुच्छेद 202", "अनुच्छेद 203"],
    answer_en: "Article 200",
    answer_hi: "अनुच्छेद 200",
    attempted: false,
    selected: ""
  },
   {
    num: 26,
    question_en: "What does Article 200 of the Constitution provide regarding state bills?",
    question_hi: "संविधान का अनुच्छेद 200 राज्य विधेयकों के संबंध में क्या प्रावधान करता है?",
    options_en: [
      "Governor can give assent",
      "Governor can withhold assent",
      "Governor can reserve bill for President's consideration",
      "All of the above"
    ],
    options_hi: [
      "राज्यपाल सहमति दे सकता है",
      "राज्यपाल सहमति रोक सकता है",
      "राज्यपाल विधेयक राष्ट्रपति के विचार के लिए आरक्षित कर सकता है",
      "उपरोक्त सभी"
    ],
    answer_en: "All of the above",
    answer_hi: "उपरोक्त सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "The Legislative Assembly of a state is also called:",
    question_hi: "राज्य की विधान सभा को क्या भी कहा जाता है?",
    options_en: ["Vidhan Sabha", "Rajya Sabha", "Lok Sabha", "Vidhan Parishad"],
    options_hi: ["विधान सभा", "राज्य सभा", "लोक सभा", "विधान परिषद"],
    answer_en: "Vidhan Sabha",
    answer_hi: "विधान सभा",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "The minimum age to become a member of the Legislative Assembly is:",
    question_hi: "विधान सभा का सदस्य बनने के लिए न्यूनतम आयु क्या है?",
    options_en: ["18 years", "21 years", "25 years", "30 years"],
    options_hi: ["18 वर्ष", "21 वर्ष", "25 वर्ष", "30 वर्ष"],
    answer_en: "25 years",
    answer_hi: "25 वर्ष",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Who has the power to summon the State Legislative Assembly?",
    question_hi: "राज्य विधान सभा को बुलाने का अधिकार किसके पास होता है?",
    options_en: ["Chief Minister", "Governor", "President", "Speaker"],
    options_hi: ["मुख्यमंत्री", "राज्यपाल", "राष्ट्रपति", "सभापति"],
    answer_en: "Governor",
    answer_hi: "राज्यपाल",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Who can dissolve the State Legislative Assembly?",
    question_hi: "राज्य विधान सभा को कौन भंग कर सकता है?",
    options_en: ["Chief Minister", "Governor", "President", "Legislative Assembly"],
    options_hi: ["मुख्यमंत्री", "राज्यपाल", "राष्ट्रपति", "विधान सभा"],
    answer_en: "Governor",
    answer_hi: "राज्यपाल",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "The State Legislative Council is a permanent body and cannot be dissolved. True or False?",
    question_hi: "राज्य विधान परिषद एक स्थायी निकाय है और इसे भंग नहीं किया जा सकता। सही या गलत?",
    options_en: ["True", "False"],
    options_hi: ["सही", "गलत"],
    answer_en: "True",
    answer_hi: "सही",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "The tenure of the Legislative Council members is:",
    question_hi: "विधान परिषद के सदस्यों की अवधि होती है:",
    options_en: ["6 years", "5 years", "4 years", "3 years"],
    options_hi: ["6 वर्ष", "5 वर्ष", "4 वर्ष", "3 वर्ष"],
    answer_en: "6 years",
    answer_hi: "6 वर्ष",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "How many types of sessions are held in the State Legislature annually?",
    question_hi: "राज्य विधानमंडल में प्रति वर्ष कितने प्रकार के सत्र होते हैं?",
    options_en: ["1", "2", "3", "4"],
    options_hi: ["1", "2", "3", "4"],
    answer_en: "3",
    answer_hi: "3",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Who can address the State Legislature from outside?",
    question_hi: "राज्य विधानमंडल के बाहर से कौन संबोधित कर सकता है?",
    options_en: ["Governor", "Chief Minister", "President", "Any citizen"],
    options_hi: ["राज्यपाल", "मुख्यमंत्री", "राष्ट्रपति", "कोई भी नागरिक"],
    answer_en: "Governor",
    answer_hi: "राज्यपाल",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "In which house does a Money Bill originate in the State Legislature?",
    question_hi: "राज्य विधानमंडल में धन विधेयक किस सदन में प्रारंभ होता है?",
    options_en: ["Legislative Assembly", "Legislative Council", "Both", "Neither"],
    options_hi: ["विधान सभा", "विधान परिषद", "दोनों", "कोई नहीं"],
    answer_en: "Legislative Assembly",
    answer_hi: "विधान सभा",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "The Leader of Opposition in the Legislative Assembly is appointed by:",
    question_hi: "विधान सभा में विपक्ष के नेता को कौन नियुक्त करता है?",
    options_en: [
      "Speaker",
      "Governor",
      "Chief Minister",
      "Members of the Opposition"
    ],
    options_hi: [
      "सभापति",
      "राज्यपाल",
      "मुख्यमंत्री",
      "विपक्ष के सदस्य"
    ],
    answer_en: "Members of the Opposition",
    answer_hi: "विपक्ष के सदस्य",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "The Chief Minister must be a member of which house?",
    question_hi: "मुख्यमंत्री किस सदन का सदस्य होना चाहिए?",
    options_en: ["Legislative Assembly", "Legislative Council", "Either", "Neither"],
    options_hi: ["विधान सभा", "विधान परिषद", "कोई भी", "कोई नहीं"],
    answer_en: "Either",
    answer_hi: "कोई भी",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which Article gives the Governor power to withhold assent to a bill?",
    question_hi: "कौन सा अनुच्छेद राज्यपाल को विधेयक की सहमति रोकने का अधिकार देता है?",
    options_en: ["Article 200", "Article 210", "Article 220", "Article 230"],
    options_hi: ["अनुच्छेद 200", "अनुच्छेद 210", "अनुच्छेद 220", "अनुच्छेद 230"],
    answer_en: "Article 200",
    answer_hi: "अनुच्छेद 200",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "The Governor can dissolve the Legislative Assembly on the advice of:",
    question_hi: "राज्यपाल किसकी सलाह पर विधान सभा को भंग कर सकता है?",
    options_en: ["Chief Minister", "President", "Speaker", "Legislative Council"],
    options_hi: ["मुख्यमंत्री", "राष्ट्रपति", "सभापति", "विधान परिषद"],
    answer_en: "Chief Minister",
    answer_hi: "मुख्यमंत्री",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the role of the Deputy Speaker in the Legislative Assembly?",
    question_hi: "विधान सभा में उपसभापति की भूमिका क्या होती है?",
    options_en: [
      "Presides over sessions in absence of Speaker",
      "Appoints Chief Minister",
      "Legislates laws",
      "Approves budget"
    ],
    options_hi: [
      "सभापति की अनुपस्थिति में सत्रों की अध्यक्षता करता है",
      "मुख्यमंत्री नियुक्त करता है",
      "कानून बनाता है",
      "बजट को मंजूरी देता है"
    ],
    answer_en: "Presides over sessions in absence of Speaker",
    answer_hi: "सभापति की अनुपस्थिति में सत्रों की अध्यक्षता करता है",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which state has a unicameral legislature?",
    question_hi: "किस राज्य में एक सदनीय विधानमंडल है?",
    options_en: ["Bihar", "West Bengal", "Uttar Pradesh", "Maharashtra"],
    options_hi: ["बिहार", "पश्चिम बंगाल", "उत्तर प्रदेश", "महाराष्ट्र"],
    answer_en: "West Bengal",
    answer_hi: "पश्चिम बंगाल",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Who decides the salary of the members of the State Legislature?",
    question_hi: "राज्य विधानमंडल के सदस्यों का वेतन कौन तय करता है?",
    options_en: [
      "Governor",
      "State Legislature itself",
      "President",
      "Chief Minister"
    ],
    options_hi: [
      "राज्यपाल",
      "स्वयं राज्य विधानमंडल",
      "राष्ट्रपति",
      "मुख्यमंत्री"
    ],
    answer_en: "State Legislature itself",
    answer_hi: "स्वयं राज्य विधानमंडल",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which of the following is NOT a function of the State Legislature?",
    question_hi: "निम्नलिखित में से कौन राज्य विधानमंडल का कार्य नहीं है?",
    options_en: [
      "Making laws",
      "Passing budget",
      "Appointing judges",
      "Discussing public issues"
    ],
    options_hi: [
      "कानून बनाना",
      "बजट पारित करना",
      "न्यायाधीश नियुक्त करना",
      "सार्वजनिक मुद्दों पर चर्चा करना"
    ],
    answer_en: "Appointing judges",
    answer_hi: "न्यायाधीश नियुक्त करना",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "The Speaker of the Legislative Assembly is elected by:",
    question_hi: "विधान सभा का सभापति किसके द्वारा निर्वाचित होता है?",
    options_en: [
      "Members of Legislative Assembly",
      "Governor",
      "Chief Minister",
      "President"
    ],
    options_hi: [
      "विधान सभा के सदस्य",
      "राज्यपाल",
      "मुख्यमंत्री",
      "राष्ट्रपति"
    ],
    answer_en: "Members of Legislative Assembly",
    answer_hi: "विधान सभा के सदस्य",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which house is called the 'House of People' at the state level?",
    question_hi: "राज्य स्तर पर किस सदन को 'जन सभा' कहा जाता है?",
    options_en: [
      "Legislative Assembly",
      "Legislative Council",
      "Rajya Sabha",
      "Lok Sabha"
    ],
    options_hi: [
      "विधान सभा",
      "विधान परिषद",
      "राज्य सभा",
      "लोक सभा"
    ],
    answer_en: "Legislative Assembly",
    answer_hi: "विधान सभा",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "The term of the Legislative Assembly is:",
    question_hi: "विधान सभा की अवधि होती है:",
    options_en: ["5 years", "6 years", "4 years", "3 years"],
    options_hi: ["5 वर्ष", "6 वर्ष", "4 वर्ष", "3 वर्ष"],
    answer_en: "5 years",
    answer_hi: "5 वर्ष",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which body can create or abolish a State Legislative Council?",
    question_hi: "कौन सा निकाय राज्य विधान परिषद का निर्माण या उन्मूलन कर सकता है?",
    options_en: ["Parliament of India", "State Assembly", "President", "Governor"],
    options_hi: ["भारत का संसद", "राज्य सभा", "राष्ट्रपति", "राज्यपाल"],
    answer_en: "Parliament of India",
    answer_hi: "भारत का संसद",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "A Money Bill can be introduced only in which house at the state level?",
    question_hi: "राज्य स्तर पर धन विधेयक केवल किस सदन में पेश किया जा सकता है?",
    options_en: ["Legislative Assembly", "Legislative Council", "Both", "Neither"],
    options_hi: ["विधान सभा", "विधान परिषद", "दोनों", "कोई नहीं"],
    answer_en: "Legislative Assembly",
    answer_hi: "विधान सभा",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Who appoints the members of the Legislative Council?",
    question_hi: "विधान परिषद के सदस्यों को कौन नियुक्त करता है?",
    options_en: [
      "Governor",
      "Chief Minister",
      "President",
      "Legislative Assembly"
    ],
    options_hi: [
      "राज्यपाल",
      "मुख्यमंत्री",
      "राष्ट्रपति",
      "विधान सभा"
    ],
    answer_en: "Governor",
    answer_hi: "राज्यपाल",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which Article of the Constitution deals with the composition of the State Legislative Assembly?",
    question_hi: "संविधान का कौन सा अनुच्छेद राज्य विधान सभा की संरचना से संबंधित है?",
    options_en: ["Article 170", "Article 200", "Article 356", "Article 123"],
    options_hi: ["अनुच्छेद 170", "अनुच्छेद 200", "अनुच्छेद 356", "अनुच्छेद 123"],
    answer_en: "Article 170",
    answer_hi: "अनुच्छेद 170",
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