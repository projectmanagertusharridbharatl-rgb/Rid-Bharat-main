const questions = [
    {
        "num": 1,
        "question_en": "What is the primary goal of business?",
        "question_hi": "व्यापार का मुख्य उद्देश्य क्या है?",
        "options_en": ["Profit maximization", "Customer satisfaction", "Social welfare", "Employee satisfaction"],
        "options_hi": ["लाभ अधिकतमकरण", "ग्राहक संतुष्टि", "सामाजिक कल्याण", "कर्मचारी संतुष्टि"],
        "answer": "Profit maximization",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which of the following is not a feature of a partnership?",
        "question_hi": "निम्नलिखित में से कौन सा साझेदारी की विशेषता नहीं है?",
        "options_en": ["Sharing of profit", "Mutual agency", "Limited liability", "Unlimited liability"],
        "options_hi": ["लाभ का वितरण", "सामूहिक एजेंसी", "सीमित देयता", "असीमित देयता"],
        "answer": "Limited liability",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "What is meant by the term 'business environment'?",
        "question_hi": "'व्यापार पर्यावरण' शब्द से क्या अभिप्रेत है?",
        "options_en": ["Economic factors", "Social and political factors", "Internal business factors", "All of the above"],
        "options_hi": ["आर्थिक कारक", "सामाजिक और राजनीतिक कारक", "आंतरिक व्यापार कारक", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which of the following is an example of a primary sector business activity?",
        "question_hi": "निम्नलिखित में से कौन सा एक प्राथमिक क्षेत्र व्यापार गतिविधि का उदाहरण है?",
        "options_en": ["Mining", "Banking", "Teaching", "Software development"],
        "options_hi": ["खनन", "बैंकिंग", "शिक्षण", "सॉफ़्टवेयर विकास"],
        "answer": "Mining",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "In a sole proprietorship, who is responsible for the business's debts?",
        "question_hi": "एकमात्र स्वामित्व में, व्यापार के कर्ज के लिए कौन जिम्मेदार होता है?",
        "options_en": ["The owner", "The government", "The creditors", "The partners"],
        "options_hi": ["स्वामी", "सरकार", "संपत्ति धारक", "साझेदार"],
        "answer": "The owner",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "What is the primary function of marketing?",
        "question_hi": "विपणन का मुख्य कार्य क्या है?",
        "options_en": ["Selling", "Advertising", "Research", "Creating customer satisfaction"],
        "options_hi": ["बेचना", "विज्ञापन", "अनुसंधान", "ग्राहक संतुष्टि बनाना"],
        "answer": "Creating customer satisfaction",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which of the following is the most important aspect of human resource management?",
        "question_hi": "मानव संसाधन प्रबंधन का सबसे महत्वपूर्ण पहलू कौन सा है?",
        "options_en": ["Recruitment", "Training", "Motivation", "Job satisfaction"],
        "options_hi": ["भर्ती", "प्रशिक्षण", "प्रेरणा", "रोजगार संतुष्टि"],
        "answer": "Motivation",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which of the following is an example of a secondary sector business?",
        "question_hi": "निम्नलिखित में से कौन सा एक द्वितीयक क्षेत्र व्यापार का उदाहरण है?",
        "options_en": ["Construction", "Agriculture", "Fishing", "Mining"],
        "options_hi": ["निर्माण", "कृषि", "मछली पकड़ना", "खनन"],
        "answer": "Construction",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "What does 'SWOT analysis' stand for?",
        "question_hi": "'SWOT विश्लेषण' का क्या अर्थ है?",
        "options_en": ["Strengths, Weaknesses, Opportunities, Threats", "Systematic Work Organization and Trends", "Sales, Workers, Opportunities, Trends", "Specialized Workforce Operations Technology"],
        "options_hi": ["स्ट्रेंथ, वीकनेस, अवसर, खतरे", "प्रणालीगत कार्य संगठन और प्रवृत्तियाँ", "बिक्री, श्रमिक, अवसर, प्रवृत्तियाँ", "विशेषीकृत कार्यबल संचालन प्रौद्योगिकी"],
        "answer": "Strengths, Weaknesses, Opportunities, Threats",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which of the following is an example of a tertiary sector business activity?",
        "question_hi": "निम्नलिखित में से कौन सा तृतीयक क्षेत्र व्यापार गतिविधि का उदाहरण है?",
        "options_en": ["Transportation", "Farming", "Mining", "Construction"],
        "options_hi": ["परिवहन", "कृषि", "खनन", "निर्माण"],
        "answer": "Transportation",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which of the following is a feature of a joint stock company?",
        "question_hi": "निम्नलिखित में से कौन सा एक संयुक्त स्टॉक कंपनी की विशेषता है?",
        "options_en": ["Limited liability", "Unlimited liability", "Voluntary association", "Ownership by a single person"],
        "options_hi": ["सीमित देयता", "असीमित देयता", "स्वैच्छिक संघ", "एक व्यक्ति द्वारा स्वामित्व"],
        "answer": "Limited liability",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "What is the main advantage of a partnership firm?",
        "question_hi": "साझेदारी फर्म का मुख्य लाभ क्या है?",
        "options_en": ["Shared responsibility", "Limited liability", "Independent decision-making", "Higher taxes"],
        "options_hi": ["साझा जिम्मेदारी", "सीमित देयता", "स्वतंत्र निर्णय-निर्माण", "उच्च कर"],
        "answer": "Shared responsibility",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "What does 'Economies of Scale' refer to?",
        "question_hi": "'स्केल की अर्थव्यवस्थाएं' से क्या अभिप्रेत है?",
        "options_en": ["Reduction in cost per unit due to increased production", "Increase in cost per unit due to increased production", "No change in cost with increase in production", "Increase in sales with reduced production"],
        "options_hi": ["उत्पादन बढ़ने के कारण प्रति इकाई लागत में कमी", "उत्पादन बढ़ने के कारण प्रति इकाई लागत में वृद्धि", "उत्पादन बढ़ने पर लागत में कोई परिवर्तन नहीं", "उत्पादन कम करने पर बिक्री में वृद्धि"],
        "answer": "Reduction in cost per unit due to increased production",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which of the following is the main function of management?",
        "question_hi": "प्रबंधन का मुख्य कार्य कौन सा है?",
        "options_en": ["Planning", "Controlling", "Staffing", "All of the above"],
        "options_hi": ["योजना बनाना", "नियंत्रण करना", "कर्मचारी नियुक्त करना", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "What is the process of organizing resources to achieve the business objectives called?",
        "question_hi": "व्यापार के उद्देश्यों को प्राप्त करने के लिए संसाधनों का आयोजन करने की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Management", "Coordination", "Control", "Planning"],
        "options_hi": ["प्रबंधन", "संगठन", "नियंत्रण", "योजना बनाना"],
        "answer": "Management",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What does 'centralization' refer to in a business organization?",
        "question_hi": "व्यापार संगठन में 'केंद्रीकरण' से क्या अभिप्रेत है?",
        "options_en": ["Decision-making is concentrated at the top", "Decisions are made at various levels", "Employees make all decisions", "Decisions are made by the government"],
        "options_hi": ["निर्णय-निर्माण शीर्ष पर केंद्रित होता है", "निर्णय विभिन्न स्तरों पर किए जाते हैं", "कर्मचारी सभी निर्णय लेते हैं", "निर्णय सरकार द्वारा लिए जाते हैं"],
        "answer": "Decision-making is concentrated at the top",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What is the role of a business in the economy?",
        "question_hi": "व्यापार की अर्थव्यवस्था में भूमिका क्या है?",
        "options_en": ["Providing goods and services", "Creating jobs", "Generating revenue", "All of the above"],
        "options_hi": ["सामान और सेवाएँ प्रदान करना", "रोजगार उत्पन्न करना", "राजस्व उत्पन्न करना", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "What is the term for the process of finding and retaining customers for a business?",
        "question_hi": "व्यापार के लिए ग्राहकों को खोजने और बनाए रखने की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Marketing", "Advertising", "Selling", "Branding"],
        "options_hi": ["विपणन", "विज्ञापन", "बिक्री", "ब्रांडिंग"],
        "answer": "Marketing",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "What is the primary source of finance for a new business?",
        "question_hi": "नए व्यापार के लिए प्राथमिक वित्त का स्रोत क्या है?",
        "options_en": ["Personal savings", "Bank loans", "Share capital", "Government grants"],
        "options_hi": ["व्यक्तिगत बचत", "बैंक ऋण", "शेयर पूंजी", "सरकारी अनुदान"],
        "answer": "Personal savings",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which of the following is an internal source of business finance?",
        "question_hi": "निम्नलिखित में से कौन सा व्यापार वित्त का आंतरिक स्रोत है?",
        "options_en": ["Sale of assets", "Issue of shares", "Loans from banks", "Public donations"],
        "options_hi": ["संपत्ति की बिक्री", "शेयरों की निर्गमन", "बैंकों से ऋण", "सार्वजनिक दान"],
        "answer": "Sale of assets",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "What is the primary function of a marketing manager?",
        "question_hi": "विपणन प्रबंधक का मुख्य कार्य क्या है?",
        "options_en": ["Planning marketing strategies", "Managing customer service", "Managing production", "Human resource management"],
        "options_hi": ["विपणन रणनीतियों की योजना बनाना", "ग्राहक सेवा का प्रबंधन करना", "निर्माण का प्रबंधन करना", "मानव संसाधन प्रबंधन"],
        "answer": "Planning marketing strategies",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which of the following is a non-financial objective of business?",
        "question_hi": "निम्नलिखित में से कौन सा व्यापार का एक गैर-वित्तीय उद्देश्य है?",
        "options_en": ["Customer satisfaction", "Profit maximization", "Revenue generation", "Capital formation"],
        "options_hi": ["ग्राहक संतुष्टि", "लाभ अधिकतमकरण", "राजस्व निर्माण", "पूंजी निर्माण"],
        "answer": "Customer satisfaction",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "What is the importance of a business plan?",
        "question_hi": "व्यापार योजना का महत्व क्या है?",
        "options_en": ["It helps in securing finance", "It helps in managing business activities", "It helps in setting objectives", "All of the above"],
        "options_hi": ["यह वित्त प्राप्त करने में मदद करता है", "यह व्यापार गतिविधियों का प्रबंधन करने में मदद करता है", "यह उद्देश्यों को स्थापित करने में मदद करता है", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "What is the primary disadvantage of a sole proprietorship?",
        "question_hi": "एकल स्वामित्व का प्रमुख नुकसान क्या है?",
        "options_en": ["Unlimited liability", "Limited control", "Difficult to raise capital", "Increased competition"],
        "options_hi": ["असीमित देयता", "सीमित नियंत्रण", "पूंजी जुटाना कठिन", "बढ़ी हुई प्रतिस्पर्धा"],
        "answer": "Unlimited liability",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "What is a 'franchise' in the context of business?",
        "question_hi": "व्यापार के संदर्भ में 'फ्रेंचाइजी' क्या है?",
        "options_en": ["A type of business ownership", "A business partnership", "A contract between two businesses", "A form of advertising"],
        "options_hi": ["व्यापार स्वामित्व का एक प्रकार", "व्यापार साझेदारी", "दो व्यवसायों के बीच अनुबंध", "विज्ञापन का एक रूप"],
        "answer": "A contract between two businesses",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "What does 'market segmentation' mean?",
        "question_hi": "'बाजार विभाजन' का क्या अर्थ है?",
        "options_en": ["Dividing a market into smaller segments", "Combining similar markets", "Expanding a market", "Changing the product price"],
        "options_hi": ["बाजार को छोटे हिस्सों में विभाजित करना", "समान बाजारों को जोड़ना", "बाजार का विस्तार करना", "उत्पाद मूल्य बदलना"],
        "answer": "Dividing a market into smaller segments",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Which of the following is a feature of a corporation?",
        "question_hi": "निम्नलिखित में से कौन सी एक निगम की विशेषता है?",
        "options_en": ["Limited liability", "Unlimited liability", "Only one owner", "Flexible management"],
        "options_hi": ["सीमित देयता", "असीमित देयता", "केवल एक मालिक", "लचीला प्रबंधन"],
        "answer": "Limited liability",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Which of the following is not a function of human resource management?",
        "question_hi": "निम्नलिखित में से कौन सा मानव संसाधन प्रबंधन का कार्य नहीं है?",
        "options_en": ["Recruitment", "Training", "Advertising", "Performance management"],
        "options_hi": ["भर्ती", "प्रशिक्षण", "विज्ञापन", "प्रदर्शन प्रबंधन"],
        "answer": "Advertising",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "What is the main characteristic of a public limited company?",
        "question_hi": "सार्वजनिक लिमिटेड कंपनी की मुख्य विशेषता क्या है?",
        "options_en": ["Shares are available to the public", "Management is centralized", "Ownership is restricted to one person", "No liability for the shareholders"],
        "options_hi": ["शेयर सार्वजनिक को उपलब्ध होते हैं", "प्रबंधन केंद्रीकृत होता है", "स्वामित्व एक व्यक्ति तक सीमित है", "शेयरधारकों के लिए कोई देयता नहीं"],
        "answer": "Shares are available to the public",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which of the following is an example of a capital good?",
        "question_hi": "निम्नलिखित में से कौन सा एक पूंजीगत वस्तु का उदाहरण है?",
        "options_en": ["Machine", "Bread", "Water", "Textbook"],
        "options_hi": ["मशीन", "रोटी", "पानी", "पाठ्यपुस्तक"],
        "answer": "Machine",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Which of the following is the primary purpose of an entrepreneur?",
        "question_hi": "एक उद्यमी का मुख्य उद्देश्य क्या है?",
        "options_en": ["Starting a business", "Managing a business", "Planning business activities", "Maximizing profits"],
        "options_hi": ["व्यापार शुरू करना", "व्यापार प्रबंधित करना", "व्यापार गतिविधियों की योजना बनाना", "लाभ अधिकतमकरण"],
        "answer": "Starting a business",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is 'profit maximization'?",
        "question_hi": "'लाभ अधिकतमकरण' क्या है?",
        "options_en": ["Achieving the highest possible profit", "Minimizing costs", "Increasing market share", "Reducing competition"],
        "options_hi": ["संभव लाभ प्राप्त करना", "लागत को न्यूनतम करना", "बाजार हिस्सेदारी बढ़ाना", "प्रतिस्पर्धा को कम करना"],
        "answer": "Achieving the highest possible profit",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "What is the concept of 'social responsibility' in business?",
        "question_hi": "व्यापार में 'सामाजिक जिम्मेदारी' की अवधारणा क्या है?",
        "options_en": ["Business should act in a way that benefits society", "Business should only focus on profits", "Business should avoid paying taxes", "Business should have no responsibility to society"],
        "options_hi": ["व्यापार को समाज को लाभ पहुंचाने वाले तरीके से कार्य करना चाहिए", "व्यापार को केवल लाभ पर ध्यान केंद्रित करना चाहिए", "व्यापार को करों का भुगतान करने से बचना चाहिए", "व्यापार का समाज के प्रति कोई जिम्मेदारी नहीं होनी चाहिए"],
        "answer": "Business should act in a way that benefits society",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "What is meant by 'business ethics'?",
        "question_hi": "'व्यापार नैतिकता' से क्या अभिप्रेत है?",
        "options_en": ["Moral principles that guide business behavior", "Laws that govern business operations", "Profit maximization", "Regulations that control markets"],
        "options_hi": ["नैतिक सिद्धांत जो व्यापार व्यवहार को मार्गदर्शित करते हैं", "व्यापार संचालन को नियंत्रित करने वाले कानून", "लाभ अधिकतमकरण", "जो बाजारों को नियंत्रित करते हैं ऐसे नियम"],
        "answer": "Moral principles that guide business behavior",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What is 'capital structure' in business?",
        "question_hi": "व्यापार में 'पूंजी संरचना' क्या है?",
        "options_en": ["The proportion of debt and equity used to finance the business", "The business location", "The business product mix", "The business marketing strategy"],
        "options_hi": ["व्यापार को वित्तीय करने के लिए उपयोग की गई ऋण और पूंजी का अनुपात", "व्यापार स्थान", "व्यापार उत्पाद मिश्रण", "व्यापार विपणन रणनीति"],
        "answer": "The proportion of debt and equity used to finance the business",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What is the 'break-even point'?",
        "question_hi": "'ब्रेक-इवन पॉइंट' क्या है?",
        "options_en": ["The point where total revenue equals total costs", "The point where the business starts making a profit", "The point where costs exceed revenue", "The point where a business shuts down"],
        "options_hi": ["वह बिंदु जहां कुल राजस्व कुल लागत के बराबर होता है", "वह बिंदु जहां व्यापार मुनाफा बनाना शुरू करता है", "वह बिंदु जहां लागत राजस्व से अधिक होती है", "वह बिंदु जहां व्यापार बंद हो जाता है"],
        "answer": "The point where total revenue equals total costs",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "What is the concept of 'market share'?",
        "question_hi": "'बाजार हिस्सेदारी' की अवधारणा क्या है?",
        "options_en": ["The percentage of total sales a company has in the market", "The number of products a company sells", "The amount of capital invested by a company", "The geographical area a company covers"],
        "options_hi": ["कुल बिक्री का प्रतिशत जो एक कंपनी के पास है", "कंपनी द्वारा बेचे गए उत्पादों की संख्या", "कंपनी द्वारा निवेश की गई पूंजी की मात्रा", "कंपनी द्वारा कवर किया गया भौगोलिक क्षेत्र"],
        "answer": "The percentage of total sales a company has in the market",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What is the 'economies of scale'?",
        "question_hi": "'आर्थिक पैमाने' क्या है?",
        "options_en": ["The cost advantage that arises with increased output", "The increase in market share", "The improvement in product quality", "The expansion of the business"],
        "options_hi": ["वह लागत लाभ जो उत्पादन बढ़ने पर उत्पन्न होता है", "बाजार हिस्सेदारी में वृद्धि", "उत्पाद की गुणवत्ता में सुधार", "व्यापार का विस्तार"],
        "answer": "The cost advantage that arises with increased output",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "What is the primary advantage of a partnership?",
        "question_hi": "साझेदारी का प्रमुख लाभ क्या है?",
        "options_en": ["Shared responsibility and resources", "Limited liability", "Easy to establish", "Unlimited liability"],
        "options_hi": ["साझा जिम्मेदारी और संसाधन", "सीमित देयता", "स्थापित करना आसान", "असीमित देयता"],
        "answer": "Shared responsibility and resources",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which of the following is an example of a service?",
        "question_hi": "निम्नलिखित में से कौन सा एक सेवा का उदाहरण है?",
        "options_en": ["Haircut", "Computer", "Pen", "Book"],
        "options_hi": ["बाल कटवाना", "कंप्यूटर", "कलम", "पुस्तक"],
        "answer": "Haircut",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "What does the term 'liquidity' refer to in business?",
        "question_hi": "व्यापार में 'तरलता' शब्द से क्या अभिप्रेत है?",
        "options_en": ["The ability to convert assets into cash quickly", "The amount of debt a company has", "The profitability of a company", "The number of shares in the market"],
        "options_hi": ["संपत्तियों को जल्दी नकद में बदलने की क्षमता", "कंपनी के पास ऋण की मात्रा", "कंपनी की लाभप्रदता", "बाजार में शेयरों की संख्या"],
        "answer": "The ability to convert assets into cash quickly",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Which of the following is a method of business financing?",
        "question_hi": "निम्नलिखित में से कौन सा व्यापार वित्तपोषण का एक तरीका है?",
        "options_en": ["Equity financing", "Debt financing", "Bank loans", "All of the above"],
        "options_hi": ["इक्विटी वित्तपोषण", "ऋण वित्तपोषण", "बैंक ऋण", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which of the following is not a source of revenue for a business?",
        "question_hi": "निम्नलिखित में से कौन सा व्यापार के लिए राजस्व का स्रोत नहीं है?",
        "options_en": ["Sales of goods", "Loans", "Interest income", "Dividends"],
        "options_hi": ["सामान्य बिक्री", "ऋण", "ब्याज आय", "लाभांश"],
        "answer": "Loans",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "What is the 'demand curve' in economics?",
        "question_hi": "अर्थशास्त्र में 'मांग वक्र' क्या है?",
        "options_en": ["A graphical representation of demand and price", "A representation of supply and price", "A curve showing the relationship between capital and labor", "A graph showing income distribution"],
        "options_hi": ["मांग और मूल्य का ग्राफिकल प्रतिनिधित्व", "आपूर्ति और मूल्य का प्रतिनिधित्व", "पूंजी और श्रम के बीच संबंध दिखाने वाला वक्र", "आय वितरण दिखाने वाला ग्राफ"],
        "answer": "A graphical representation of demand and price",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "What is the main advantage of a limited liability company?",
        "question_hi": "सीमित देयता वाली कंपनी का मुख्य लाभ क्या है?",
        "options_en": ["Limited liability for owners", "Unlimited liability", "High taxation", "Easier to raise funds"],
        "options_hi": ["मालिकों के लिए सीमित देयता", "असीमित देयता", "उच्च कराधान", "पूंजी जुटाना आसान"],
        "answer": "Limited liability for owners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "What does the 'law of demand' state?",
        "question_hi": "'मांग का नियम' क्या कहता है?",
        "options_en": ["As price increases, demand decreases", "As price decreases, demand decreases", "As price increases, demand increases", "Price does not affect demand"],
        "options_hi": ["जैसे-जैसे मूल्य बढ़ता है, मांग घटती है", "जैसे-जैसे मूल्य घटता है, मांग घटती है", "जैसे-जैसे मूल्य बढ़ता है, मांग बढ़ती है", "मूल्य मांग को प्रभावित नहीं करता"],
        "answer": "As price increases, demand decreases",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which of the following is an example of a tangible asset?",
        "question_hi": "निम्नलिखित में से कौन सा एक ठोस संपत्ति का उदाहरण है?",
        "options_en": ["Building", "Trademark", "Goodwill", "Patent"],
        "options_hi": ["भवन", "ट्रेडमार्क", "गुडविल", "पेटेंट"],
        "answer": "Building",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "What is a 'partnership deed'?",
        "question_hi": "'साझेदारी अनुबंध' क्या है?",
        "options_en": ["A legal document that outlines the terms of the partnership", "An agreement between an employee and employer", "A document for buying and selling goods", "A loan agreement"],
        "options_hi": ["एक कानूनी दस्तावेज जो साझेदारी की शर्तों को स्पष्ट करता है", "कर्मचारी और नियोक्ता के बीच एक समझौता", "सामान और सेवाओं की खरीद-फरोख्त के लिए दस्तावेज़", "ऋण अनुबंध"],
        "answer": "A legal document that outlines the terms of the partnership",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Which of the following is an example of an intangible asset?",
        "question_hi": "निम्नलिखित में से कौन सा अमूर्त संपत्ति का उदाहरण है?",
        "options_en": ["Goodwill", "Building", "Machinery", "Inventory"],
        "options_hi": ["गुडविल", "भवन", "यंत्र", "संग्रहण"],
        "answer": "Goodwill",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What is 'revenue recognition'?",
        "question_hi": "'राजस्व मान्यता' क्या है?",
        "options_en": ["The process of recording income when earned", "The process of accounting for costs", "The process of paying dividends", "The process of selling assets"],
        "options_hi": ["जब आय अर्जित हो तब उसे रिकॉर्ड करने की प्रक्रिया", "लागत के लिए लेखांकन की प्रक्रिया", "लाभांश भुगतान की प्रक्रिया", "संपत्तियों की बिक्री की प्रक्रिया"],
        "answer": "The process of recording income when earned",
        "attempted": false,
        "selected": ""
      }
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
