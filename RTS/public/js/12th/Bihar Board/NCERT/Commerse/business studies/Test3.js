const questions = [
    {
        "num": 1,
        "question_en": "Which of the following is not a characteristic of an entrepreneur?",
        "question_hi": "निम्नलिखित में से कौन एक उद्यमी की विशेषता नहीं है?",
        "options_en": ["Risk-averse", "Innovative", "Leadership", "Initiative"],
        "options_hi": ["जोखिम से डरने वाला", "नवोन्मेषी", "नेतृत्व", "पहल"],
        "answer": "Risk-averse",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Management is considered a ______ because it involves systematic body of knowledge.",
        "question_hi": "प्रबंधन को ______ माना जाता है क्योंकि इसमें व्यवस्थित ज्ञान का निकाय शामिल होता है।",
        "options_en": ["Science", "Art", "Profession", "Skill"],
        "options_hi": ["विज्ञान", "कला", "पेशा", "कौशल"],
        "answer": "Science",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Which function of management involves setting objectives and determining a course of action?",
        "question_hi": "प्रबंधन का कौन सा कार्य उद्देश्य निर्धारित करने और कार्य योजना बनाने से संबंधित है?",
        "options_en": ["Planning", "Organizing", "Staffing", "Controlling"],
        "options_hi": ["योजना बनाना", "संगठित करना", "स्टाफिंग", "नियंत्रण"],
        "answer": "Planning",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Coordination is considered as the ______ of management.",
        "question_hi": "समन्वय को प्रबंधन का ______ माना जाता है।",
        "options_en": ["Essence", "Function", "Objective", "Process"],
        "options_hi": ["सार", "कार्य", "उद्देश्य", "प्रक्रिया"],
        "answer": "Essence",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Which level of management is responsible for implementing policies and plans?",
        "question_hi": "कौन सा प्रबंधन स्तर नीतियों और योजनाओं को लागू करने के लिए जिम्मेदार है?",
        "options_en": ["Top-level", "Middle-level", "Operational-level", "None of the above"],
        "options_hi": ["शीर्ष स्तर", "मध्य स्तर", "संचालन स्तर", "उपरोक्त में से कोई नहीं"],
        "answer": "Middle-level",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which of the following is not a function of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का कार्य नहीं है?",
        "options_en": ["Planning", "Organizing", "Cooperating", "Controlling"],
        "options_hi": ["योजना बनाना", "संगठित करना", "सहयोग करना", "नियंत्रण"],
        "answer": "Cooperating",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Management is a goal-oriented process because it aims at:",
        "question_hi": "प्रबंधन एक लक्ष्य-उन्मुख प्रक्रिया है क्योंकि इसका उद्देश्य है:",
        "options_en": ["Achieving personal goals", "Maximizing profits", "Achieving organizational objectives", "Improving employee satisfaction"],
        "options_hi": ["व्यक्तिगत लक्ष्यों को प्राप्त करना", "लाभ को अधिकतम करना", "संगठनात्मक उद्देश्यों को प्राप्त करना", "कर्मचारी संतुष्टि में सुधार"],
        "answer": "Achieving organizational objectives",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which of the following is not a designation related to top-level management?",
        "question_hi": "निम्नलिखित में से कौन शीर्ष स्तर के प्रबंधन से संबंधित पदनाम नहीं है?",
        "options_en": ["Chairman", "Vice-President", "Production Manager", "CEO"],
        "options_hi": ["अध्यक्ष", "उपाध्यक्ष", "उत्पादन प्रबंधक", "मुख्य कार्यकारी अधिकारी"],
        "answer": "Production Manager",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Which function of management ensures that actual activities conform to planned activities?",
        "question_hi": "प्रबंधन का कौन सा कार्य सुनिश्चित करता है कि वास्तविक गतिविधियाँ नियोजित गतिविधियों के अनुरूप हों?",
        "options_en": ["Planning", "Organizing", "Controlling", "Staffing"],
        "options_hi": ["योजना बनाना", "संगठित करना", "नियंत्रण", "स्टाफिंग"],
        "answer": "Controlling",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which of the following is not an objective of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का उद्देश्य नहीं है?",
        "options_en": ["Profit maximization", "Growth of the organization", "Employee satisfaction", "Elimination of competition"],
        "options_hi": ["लाभ अधिकतम करना", "संगठन की वृद्धि", "कर्मचारी संतुष्टि", "प्रतिस्पर्धा का उन्मूलन"],
        "answer": "Elimination of competition",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "The function of management that involves recruiting and training employees is:",
        "question_hi": "प्रबंधन का वह कार्य जिसमें कर्मचारियों की भर्ती और प्रशिक्षण शामिल है:",
        "options_en": ["Planning", "Organizing", "Staffing", "Controlling"],
        "options_hi": ["योजना बनाना", "संगठित करना", "स्टाफिंग", "नियंत्रण"],
        "answer": "Staffing",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which level of management is directly responsible for the performance of employees?",
        "question_hi": "कौन सा प्रबंधन स्तर कर्मचारियों के प्रदर्शन के लिए सीधे जिम्मेदार है?",
        "options_en": ["Top-level", "Middle-level", "Operational-level", "None of the above"],
        "options_hi": ["शीर्ष स्तर", "मध्य स्तर", "संचालन स्तर", "उपरोक्त में से कोई नहीं"],
        "answer": "Operational-level",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which of the following is not a function of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का कार्य नहीं है?",
        "options_en": ["Planning", "Organizing", "Cooperating", "Controlling"],
        "options_hi": ["योजना बनाना", "संगठित करना", "सहयोग करना", "नियंत्रण"],
        "answer": "Cooperating",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which function of management involves setting objectives and determining a course of action?",
        "question_hi": "प्रबंधन का कौन सा कार्य उद्देश्य निर्धारित करने और कार्य योजना बनाने से संबंधित है?",
        "options_en": ["Planning", "Organizing", "Staffing", "Controlling"],
        "options_hi": ["योजना बनाना", "संगठित करना", "स्टाफिंग", "नियंत्रण"],
        "answer": "Planning",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which level of management is responsible for implementing policies and plans?",
        "question_hi": "कौन सा प्रबंधन स्तर नीतियों और योजनाओं को लागू करने के लिए जिम्मेदार है?",
        "options_en": ["Top-level", "Middle-level", "Operational-level", "None of the above"],
        "options_hi": ["शीर्ष स्तर", "मध्य स्तर", "संचालन स्तर", "उपरोक्त में से कोई नहीं"],
        "answer": "Middle-level",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Which function of management ensures that actual activities conform to planned activities?",
        "question_hi": "प्रबंधन का कौन सा कार्य सुनिश्चित करता है कि वास्तविक गतिविधियाँ नियोजित गतिविधियों के अनुरूप हों?",
        "options_en": ["Planning", "Organizing", "Controlling", "Staffing"],
        "options_hi": ["योजना बनाना", "संगठित करना", "नियंत्रण", "स्टाफिंग"],
        "answer": "Controlling",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which of the following is not an objective of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का उद्देश्य नहीं है?",
        "options_en": ["Profit maximization", "Growth of the organization", "Employee satisfaction", "Elimination of competition"],
        "options_hi": ["लाभ अधिकतम करना", "संगठन की वृद्धि", "कर्मचारी संतुष्टि", "प्रतिस्पर्धा का उन्मूलन"],
        "answer": "Elimination of competition",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "The function of management that involves recruiting and training employees is:",
        "question_hi": "प्रबंधन का वह कार्य जिसमें कर्मचारियों की भर्ती और प्रशिक्षण शामिल है:",
        "options_en": ["Planning", "Organizing", "Staffing", "Controlling"],
        "options_hi": ["योजना बनाना", "संगठित करना", "स्टाफिंग", "नियंत्रण"],
        "answer": "Staffing",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which level of management is directly responsible for the performance of employees?",
        "question_hi": "कौन सा प्रबंधन स्तर कर्मचारियों के प्रदर्शन के लिए सीधे जिम्मेदार है?",
        "options_en": ["Top-level", "Middle-level", "Operational-level", "None of the above"],
        "options_hi": ["शीर्ष स्तर", "मध्य स्तर", "संचालन स्तर", "उपरोक्त में से कोई नहीं"],
        "answer": "Operational-level",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Management is considered a ______ because it involves systematic body of knowledge.",
        "question_hi": "प्रबंधन को ______ माना जाता है क्योंकि इसमें व्यवस्थित ज्ञान का निकाय शामिल होता है।",
        "options_en": ["Science", "Art", "Profession", "Skill"],
        "options_hi": ["विज्ञान", "कला", "पेशा", "कौशल"],
        "answer": "Science",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which function of management involves setting objectives and determining a course of action?",
        "question_hi": "प्रबंधन का कौन सा कार्य उद्देश्य निर्धारित करने और कार्य योजना बनाने से संबंधित है?",
        "options_en": ["Planning", "Organizing", "Staffing", "Controlling"],
        "options_hi": ["योजना बनाना", "संगठित करना", "स्टाफिंग", "नियंत्रण"],
        "answer": "Planning",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which of the following is not a designation related to top-level management?",
        "question_hi": "निम्नलिखित में से कौन शीर्ष स्तर के प्रबंधन से संबंधित पदनाम नहीं है?",
        "options_en": ["Chairman", "Vice-President", "Production Manager", "CEO"],
        "options_hi": ["अध्यक्ष", "उपाध्यक्ष", "उत्पादन प्रबंधक", "मुख्य कार्यकारी अधिकारी"],
        "answer": "Production Manager",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which function of management ensures that actual activities conform to planned activities?",
        "question_hi": "प्रबंधन का कौन सा कार्य सुनिश्चित करता है कि वास्तविक गतिविधियाँ नियोजित गतिविधियों के अनुरूप हों?",
        "options_en": ["Planning", "Organizing", "Controlling", "Staffing"],
        "options_hi": ["योजना बनाना", "संगठित करना", "नियंत्रण", "स्टाफिंग"],
        "answer": "Controlling",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which of the following is not an objective of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का उद्देश्य नहीं है?",
        "options_en": ["Profit maximization", "Growth of the organization", "Employee satisfaction", "Elimination of competition"],
        "options_hi": ["लाभ अधिकतम करना", "संगठन की वृद्धि", "कर्मचारी संतुष्टि", "प्रतिस्पर्धा का उन्मूलन"],
        "answer": "Elimination of competition",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which function of management involves recruiting and training employees?",
        "question_hi": "प्रबंधन का कौन सा कार्य कर्मचारियों की भर्ती और प्रशिक्षण से संबंधित है?",
        "options_en": ["Planning", "Organizing", "Staffing", "Controlling"],
        "options_hi": ["योजना बनाना", "संगठित करना", "स्टाफिंग", "नियंत्रण"],
        "answer": "Staffing",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Which level of management is responsible for implementing policies and plans?",
        "question_hi": "कौन सा प्रबंधन स्तर नीतियों और योजनाओं को लागू करने के लिए जिम्मेदार है?",
        "options_en": ["Top-level", "Middle-level", "Operational-level", "None of the above"],
        "options_hi": ["शीर्ष स्तर", "मध्य स्तर", "संचालन स्तर", "उपरोक्त में से कोई नहीं"],
        "answer": "Middle-level",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Which of the following is not a designation related to top-level management?",
        "question_hi": "निम्नलिखित में से कौन शीर्ष स्तर के प्रबंधन से संबंधित पदनाम नहीं है?",
        "options_en": ["Chairman", "Vice-President", "Production Manager", "CEO"],
        "options_hi": ["अध्यक्ष", "उपाध्यक्ष", "उत्पादन प्रबंधक", "मुख्य कार्यकारी अधिकारी"],
        "answer": "Production Manager",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Which function of management involves setting objectives and determining a course of action?",
        "question_hi": "प्रबंधन का कौन सा कार्य उद्देश्य निर्धारित करने और कार्य योजना बनाने से संबंधित है?",
        "options_en": ["Planning", "Organizing", "Staffing", "Controlling"],
        "options_hi": ["योजना बनाना", "संगठित करना", "स्टाफिंग", "नियंत्रण"],
        "answer": "Planning",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Management is considered a ______ because it involves a systematic body of knowledge.",
        "question_hi": "प्रबंधन को ______ माना जाता है क्योंकि इसमें व्यवस्थित ज्ञान का निकाय शामिल होता है।",
        "options_en": ["Science", "Art", "Profession", "Skill"],
        "options_hi": ["विज्ञान", "कला", "पेशा", "कौशल"],
        "answer": "Science",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which level of management is directly responsible for the performance of employees?",
        "question_hi": "कौन सा प्रबंधन स्तर कर्मचारियों के प्रदर्शन के लिए सीधे जिम्मेदार है?",
        "options_en": ["Top-level", "Middle-level", "Operational-level", "None of the above"],
        "options_hi": ["शीर्ष स्तर", "मध्य स्तर", "संचालन स्तर", "उपरोक्त में से कोई नहीं"],
        "answer": "Operational-level",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Management is a process of ______.",
        "question_hi": "प्रबंधन ______ की प्रक्रिया है।",
        "options_en": ["Planning", "Organizing", "Controlling", "All of the above"],
        "options_hi": ["योजना बनाना", "संगठित करना", "नियंत्रण", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "Which of the following is not a characteristic of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन की विशेषता नहीं है?",
        "options_en": ["Universal", "Continuous process", "Static", "Goal-oriented"],
        "options_hi": ["सार्वभौमिक", "निरंतर प्रक्रिया", "स्थिर", "लक्ष्य-उन्मुख"],
        "answer": "Static",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Management is a ______ because it involves a systematic body of knowledge.",
        "question_hi": "प्रबंधन ______ है क्योंकि इसमें व्यवस्थित ज्ञान का निकाय शामिल है।",
        "options_en": ["Science", "Art", "Profession", "Skill"],
        "options_hi": ["विज्ञान", "कला", "पेशा", "कौशल"],
        "answer": "Science",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Which of the following is a function of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का कार्य है?",
        "options_en": ["Planning", "Organizing", "Controlling", "All of the above"],
        "options_hi": ["योजना बनाना", "संगठित करना", "नियंत्रण", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Which level of management is responsible for the overall performance of the organization?",
        "question_hi": "कौन सा प्रबंधन स्तर संगठन के समग्र प्रदर्शन के लिए जिम्मेदार है?",
        "options_en": ["Top-level", "Middle-level", "Operational-level", "None of the above"],
        "options_hi": ["शीर्ष स्तर", "मध्य स्तर", "संचालन स्तर", "उपरोक्त में से कोई नहीं"],
        "answer": "Top-level",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Which of the following is not a characteristic of an entrepreneur?",
        "question_hi": "निम्नलिखित में से कौन एक उद्यमी की विशेषता नहीं है?",
        "options_en": ["Risk-averse", "Innovative", "Leadership", "Initiative"],
        "options_hi": ["जोखिम से डरने वाला", "नवोन्मेषी", "नेतृत्व", "पहल"],
        "answer": "Risk-averse",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Which of the following is not a function of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का कार्य नहीं है?",
        "options_en": ["Planning", "Organizing", "Controlling", "Directing"],
        "options_hi": ["योजना बनाना", "संगठित करना", "नियंत्रण", "निर्देशन"],
        "answer": "Directing",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Which of the following is a characteristic of a profession?",
        "question_hi": "निम्नलिखित में से कौन एक पेशे की विशेषता है?",
        "options_en": ["Systematic body of knowledge", "Formal education and training", "Code of conduct", "All of the above"],
        "options_hi": ["व्यवस्थित ज्ञान का निकाय", "औपचारिक शिक्षा और प्रशिक्षण", "आचार संहिता", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which of the following is not a type of plan?",
        "question_hi": "निम्नलिखित में से कौन एक प्रकार की योजना नहीं है?",
        "options_en": ["Strategic plan", "Tactical plan", "Operational plan", "Contingency plan"],
        "options_hi": ["रणनीतिक योजना", "सामरिक योजना", "संचालन योजना", "आपातकालीन योजना"],
        "answer": "Contingency plan",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which of the following is a principle of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का सिद्धांत है?",
        "options_en": ["Unity of command", "Unity of direction", "Subordination of individual interest to general interest", "All of the above"],
        "options_hi": ["आदेश की एकता", "दिशा की एकता", "व्यक्तिगत हितों को सामान्य हितों के अधीन करना", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Which of the following is a feature of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन की विशेषता है?",
        "options_en": ["Goal-oriented", "Continuous process", "Universal", "All of the above"],
        "options_hi": ["लक्ष्य-उन्मुख", "निरंतर प्रक्रिया", "सार्वभौमिक", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which of the following is not a feature of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन की विशेषता नहीं है?",
        "options_en": ["Universal applicability", "Continuous process", "Static", "Goal-oriented"],
        "options_hi": ["सार्वभौमिक प्रयोज्यता", "निरंतर प्रक्रिया", "स्थिर", "लक्ष्य-उन्मुख"],
        "answer": "Static",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which of the following is not a characteristic of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन की विशेषता नहीं है?",
        "options_en": ["Management is a process", "Management is an art", "Management is a science", "Management is a static function"],
        "options_hi": ["प्रबंधन एक प्रक्रिया है", "प्रबंधन एक कला है", "प्रबंधन एक विज्ञान है", "प्रबंधन एक स्थिर कार्य है"],
        "answer": "Management is a static function",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Which of the following is not a function of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का कार्य नहीं है?",
        "options_en": ["Controlling", "Planning", "Organizing", "Advertising"],
        "options_hi": ["नियंत्रण", "योजना बनाना", "संगठित करना", "विज्ञापन"],
        "answer": "Advertising",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which of the following is not a level of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का स्तर नहीं है?",
        "options_en": ["Top-level", "Middle-level", "Operational-level", "Functional-level"],
        "options_hi": ["शीर्ष स्तर", "मध्य स्तर", "संचालन स्तर", "कार्यात्मक स्तर"],
        "answer": "Functional-level",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Which of the following is not a principle of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का सिद्धांत नहीं है?",
        "options_en": ["Unity of command", "Unity of direction", "Equity", "Equality"],
        "options_hi": ["आदेश की एकता", "दिशा की एकता", "न्याय", "समानता"],
        "answer": "Equality",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which of the following is not a characteristic of an entrepreneur?",
        "question_hi": "निम्नलिखित में से कौन एक उद्यमी की विशेषता नहीं है?",
        "options_en": ["Risk-taking", "Innovative", "Leadership", "Risk-averse"],
        "options_hi": ["जोखिम उठाना", "नवोन्मेषी", "नेतृत्व", "जोखिम से डरना"],
        "answer": "Risk-averse",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which of the following is not a function of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का कार्य नहीं है?",
        "options_en": ["Planning", "Organizing", "Staffing", "Selling"],
        "options_hi": ["योजना बनाना", "संगठित करना", "स्टाफिंग", "बिक्री"],
        "answer": "Selling",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Which of the following is not a level of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का स्तर नहीं है?",
        "options_en": ["Top-level", "Middle-level", "Lower-level", "Functional-level"],
        "options_hi": ["शीर्ष स्तर", "मध्य स्तर", "निचला स्तर", "कार्यात्मक स्तर"],
        "answer": "Functional-level",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Which of the following is not a principle of management?",
        "question_hi": "निम्नलिखित में से कौन प्रबंधन का सिद्धांत नहीं है?",
        "options_en": ["Unity of command", "Unity of direction", "Equity", "Equality"],
        "options_hi": ["आदेश की एकता", "दिशा की एकता", "न्याय", "समानता"],
        "answer": "Equality",
        "attempted": false,
        "selected": ""
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
