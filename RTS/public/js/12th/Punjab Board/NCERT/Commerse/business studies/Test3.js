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
        window.location.href = "/RTS/Public/Deshbord/category/test/submit-test.html";
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
