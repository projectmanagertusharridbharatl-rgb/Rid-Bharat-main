const questions = [
    {
        "num": 1,
        "question_en": "Which of the following is not a part of the business environment?",
        "question_hi": "निम्नलिखित में से कौन सा व्यापार पर्यावरण का हिस्सा नहीं है?",
        "options_en": ["Customers", "Suppliers", "Competitors", "None of the above"],
        "options_hi": ["ग्राहक", "आपूर्तिकर्ता", "प्रतिद्वंदी", "उपरोक्त में से कोई नहीं"],
        "answer": "None of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which of the following is not a component of specific forces of business environment?",
        "question_hi": "निम्नलिखित में से कौन सा व्यापार पर्यावरण के विशिष्ट बलों का हिस्सा नहीं है?",
        "options_en": ["Technological conditions", "Customers", "Employees", "Investors"],
        "options_hi": ["प्रौद्योगिकी की स्थिति", "ग्राहक", "कर्मचारी", "निवेशक"],
        "answer": "Technological conditions",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "The growing awareness about healthcare has led to an increase in the demand for healthcare products and services. This reflects which feature of the business environment?",
        "question_hi": "स्वास्थ्य देखभाल के बारे में बढ़ती जागरूकता ने स्वास्थ्य देखभाल उत्पादों और सेवाओं की मांग में वृद्धि की है। यह व्यापार पर्यावरण की कौन सी विशेषता को दर्शाता है?",
        "options_en": ["Dynamic nature", "Uncertainty", "Relativity", "Interrelatedness"],
        "options_hi": ["गतिकी स्वभाव", "असुरक्षा", "सापेक्षता", "आपसी संबंध"],
        "answer": "Interrelatedness",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which of the following is not a dimension of the business environment?",
        "question_hi": "निम्नलिखित में से कौन सा व्यापार पर्यावरण का आयाम नहीं है?",
        "options_en": ["Political", "Legal", "Technological", "Managerial"],
        "options_hi": ["राजनीतिक", "कानूनी", "प्रौद्योगिकीय", "प्रबंधकीय"],
        "answer": "Managerial",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "The term 'business environment' refers to:",
        "question_hi": "'व्यापार पर्यावरण' शब्द का तात्पर्य है:",
        "options_en": ["Internal environment", "External environment", "Both internal and external environment", "None of the above"],
        "options_hi": ["आंतरिक पर्यावरण", "बाहरी पर्यावरण", "आंतरिक और बाहरी पर्यावरण दोनों", "उपरोक्त में से कोई नहीं"],
        "answer": "Both internal and external environment",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which of the following is a component of the economic environment?",
        "question_hi": "निम्नलिखित में से कौन सा आर्थिक पर्यावरण का हिस्सा है?",
        "options_en": ["Inflation rates", "Political stability", "Social values", "Technological advancements"],
        "options_hi": ["मुद्रास्फीति दर", "राजनीतिक स्थिरता", "सामाजिक मूल्य", "प्रौद्योगिकीय नवाचार"],
        "answer": "Inflation rates",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which of the following is not a characteristic of the business environment?",
        "question_hi": "निम्नलिखित में से कौन व्यापार पर्यावरण की विशेषता नहीं है?",
        "options_en": ["Dynamic", "Uncertainty", "Relativity", "Static"],
        "options_hi": ["गतिकी", "असुरक्षा", "सापेक्षता", "स्थिर"],
        "answer": "Static",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which of the following is an example of a legal dimension of the business environment?",
        "question_hi": "निम्नलिखित में से कौन सा व्यापार पर्यावरण के कानूनी आयाम का उदाहरण है?",
        "options_en": ["Tax policies", "Social trends", "Technological innovations", "Cultural norms"],
        "options_hi": ["कर नीति", "सामाजिक प्रवृत्तियाँ", "प्रौद्योगिकीय नवाचार", "सांस्कृतिक मानदंड"],
        "answer": "Tax policies",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "Which of the following is not a part of the social environment?",
        "question_hi": "निम्नलिखित में से कौन सा सामाजिक पर्यावरण का हिस्सा नहीं है?",
        "options_en": ["Demographic trends", "Cultural norms", "Political stability", "Family structures"],
        "options_hi": ["जनसांख्यिकी प्रवृत्तियाँ", "सांस्कृतिक मानदंड", "राजनीतिक स्थिरता", "परिवार संरचनाएँ"],
        "answer": "Political stability",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "The term 'liberalization' refers to:",
        "question_hi": "'उदारवादीकरण' शब्द का तात्पर्य है:",
        "options_en": ["Reduction in government controls", "Increase in government controls", "Privatization of public enterprises", "Nationalization of private enterprises"],
        "options_hi": ["सरकारी नियंत्रण में कमी", "सरकारी नियंत्रण में वृद्धि", "सार्वजनिक उद्यमों का निजीकरण", "निजी उद्यमों का राष्ट्रीयकरण"],
        "answer": "Reduction in government controls",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "Which of the following is not a component of the technological environment?",
        "question_hi": "निम्नलिखित में से कौन सा प्रौद्योगिकीय पर्यावरण का हिस्सा नहीं है?",
        "options_en": ["Innovations", "Research and development", "Technological infrastructure", "Consumer preferences"],
        "options_hi": ["नवाचार", "अनुसंधान और विकास", "प्रौद्योगिकी आधारभूत संरचना", "उपभोक्ता प्राथमिकताएँ"],
        "answer": "Consumer preferences",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which of the following is an example of a political environment factor?",
        "question_hi": "निम्नलिखित में से कौन सा राजनीतिक पर्यावरण तत्व का उदाहरण है?",
        "options_en": ["Government policies", "Technological advancements", "Consumer behavior", "Market trends"],
        "options_hi": ["सरकारी नीतियाँ", "प्रौद्योगिकीय नवाचार", "उपभोक्ता व्यवहार", "बाजार प्रवृत्तियाँ"],
        "answer": "Government policies",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which of the following is not a characteristic of business environment?",
        "question_hi": "निम्नलिखित में से कौन व्यापार पर्यावरण की विशेषता नहीं है?",
        "options_en": ["Complexity", "Uncertainty", "Static", "Relativity"],
        "options_hi": ["जटिलता", "असुरक्षा", "स्थिर", "सापेक्षता"],
        "answer": "Static",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which of the following is a component of the political environment?",
        "question_hi": "निम्नलिखित में से कौन सा राजनीतिक पर्यावरण का हिस्सा है?",
        "options_en": ["Government policies", "Inflation rates", "Technological advancements", "Cultural norms"],
        "options_hi": ["सरकारी नीतियाँ", "मुद्रास्फीति दर", "प्रौद्योगिकीय नवाचार", "सांस्कृतिक मानदंड"],
        "answer": "Government policies",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which of the following is not a part of the economic environment?",
        "question_hi": "निम्नलिखित में से कौन सा आर्थिक पर्यावरण का हिस्सा नहीं है?",
        "options_en": ["Interest rates", "Inflation rates", "Cultural norms", "Unemployment rates"],
        "options_hi": ["ब्याज दरें", "मुद्रास्फीति दर", "सांस्कृतिक मानदंड", "बेरोज़गारी दर"],
        "answer": "Cultural norms",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "In which of the following basic categories can business environment be divided?",
        "question_hi": "निम्नलिखित में से व्यापार पर्यावरण को किस बुनियादी श्रेणी में विभाजित किया जा सकता है?",
        "options_en": ["Local and Regional", "Regional and National", "Internal and External", "Financial and Nonfinancial"],
        "options_hi": ["स्थानीय और क्षेत्रीय", "क्षेत्रीय और राष्ट्रीय", "आंतरिक और बाहरी", "वित्तीय और गैर-वित्तीय"],
        "answer": "Internal and External",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which of the following is not a component of the economic environment?",
        "question_hi": "निम्नलिखित में से कौन सा आर्थिक पर्यावरण का हिस्सा नहीं है?",
        "options_en": ["Interest rates", "Inflation rates", "Cultural norms", "Unemployment rates"],
        "options_hi": ["ब्याज दरें", "मुद्रास्फीति दर", "सांस्कृतिक मानदंड", "बेरोज़गारी दर"],
        "answer": "Cultural norms",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which of the following is not a part of the technological environment?",
        "question_hi": "निम्नलिखित में से कौन सा प्रौद्योगिकीय पर्यावरण का हिस्सा नहीं है?",
        "options_en": ["Innovations", "Research and development", "Technological infrastructure", "Consumer preferences"],
        "options_hi": ["नवाचार", "अनुसंधान और विकास", "प्रौद्योगिकी आधारभूत संरचना", "उपभोक्ता प्राथमिकताएँ"],
        "answer": "Consumer preferences",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "The term 'liberalization' refers to:",
        "question_hi": "'उदारवादीकरण' शब्द का तात्पर्य है:",
        "options_en": ["Reduction in government controls", "Increase in government controls", "Privatization of public enterprises", "Nationalization of private enterprises"],
        "options_hi": ["सरकारी नियंत्रण में कमी", "सरकारी नियंत्रण में वृद्धि", "सार्वजनिक उद्यमों का निजीकरण", "निजी उद्यमों का राष्ट्रीयकरण"],
        "answer": "Reduction in government controls",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which of the following is not a characteristic of business environment?",
        "question_hi": "निम्नलिखित में से कौन व्यापार पर्यावरण की विशेषता नहीं है?",
        "options_en": ["Dynamic", "Uncertainty", "Static", "Relativity"],
        "options_hi": ["गतिकी", "असुरक्षा", "स्थिर", "सापेक्षता"],
        "answer": "Static",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which of the following is an example of a legal dimension of the business environment?",
        "question_hi": "निम्नलिखित में से कौन सा व्यापार पर्यावरण के कानूनी आयाम का उदाहरण है?",
        "options_en": ["Tax policies", "Social trends", "Technological innovations", "Cultural norms"],
        "options_hi": ["कर नीति", "सामाजिक प्रवृत्तियाँ", "प्रौद्योगिकीय नवाचार", "सांस्कृतिक मानदंड"],
        "answer": "Tax policies",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which of the following is not a part of the social environment?",
        "question_hi": "निम्नलिखित में से कौन सा सामाजिक पर्यावरण का हिस्सा नहीं है?",
        "options_en": ["Demographic trends", "Cultural norms", "Political stability", "Family structures"],
        "options_hi": ["जनसांख्यिकी प्रवृत्तियाँ", "सांस्कृतिक मानदंड", "राजनीतिक स्थिरता", "परिवार संरचनाएँ"],
        "answer": "Political stability",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which of the following is not a part of the political environment?",
        "question_hi": "निम्नलिखित में से कौन सा राजनीतिक पर्यावरण का हिस्सा नहीं है?",
        "options_en": ["Government policies", "Political stability", "Cultural norms", "Legal framework"],
        "options_hi": ["सरकारी नीतियाँ", "राजनीतिक स्थिरता", "सांस्कृतिक मानदंड", "कानूनी ढांचा"],
        "answer": "Cultural norms",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which of the following is not a part of the economic environment?",
        "question_hi": "निम्नलिखित में से कौन सा आर्थिक पर्यावरण का हिस्सा नहीं है?",
        "options_en": ["Interest rates", "Inflation rates", "Cultural norms", "Unemployment rates"],
        "options_hi": ["ब्याज दरें", "मुद्रास्फीति दर", "सांस्कृतिक मानदंड", "बेरोज़गारी दर"],
        "answer": "Cultural norms",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "The term 'business environment' refers to:",
        "question_hi": "'व्यापार पर्यावरण' शब्द का तात्पर्य है:",
        "options_en": ["Internal environment", "External environment", "Both internal and external environment", "None of the above"],
        "options_hi": ["आंतरिक पर्यावरण", "बाहरी पर्यावरण", "आंतरिक और बाहरी पर्यावरण दोनों", "उपरोक्त में से कोई नहीं"],
        "answer": "Both internal and external environment",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "Which of the following is not a component of specific forces of business environment?",
        "question_hi": "निम्नलिखित में से कौन सा व्यापार पर्यावरण के विशिष्ट बलों का हिस्सा नहीं है?",
        "options_en": ["Technological conditions", "Customers", "Employees", "Investors"],
        "options_hi": ["प्रौद्योगिकी की स्थिति", "ग्राहक", "कर्मचारी", "निवेशक"],
        "answer": "Technological conditions",
        "attempted": false,
        "selected": ""
      },
        {
          "num": 27,
          "question_en": "Monetary policy in India is framed by the:",
          "question_hi": "भारत में मौद्रिक नीति तैयार की जाती है:",
          "options_en": ["Reserve Bank of India", "Ministry of Finance", "Planning Commission", "Securities and Exchange Board of India"],
          "options_hi": ["भारतीय रिज़र्व बैंक", "वित्त मंत्रालय", "योजना आयोग", "भारतीय प्रतिभूति और विनिमय बोर्ड"],
          "answer": "Reserve Bank of India",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 28,
          "question_en": "Which of the following is a method of privatization?",
          "question_hi": "निम्नलिखित में से कौन सा निजीकरण का एक तरीका है?",
          "options_en": ["Divestiture", "Nationalization", "Monopolization", "Centralization"],
          "options_hi": ["विक्री", "राष्ट्रीयकरण", "एकाधिकार", "केन्द्रीकरण"],
          "answer": "Divestiture",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 29,
          "question_en": "Which of the following is not a feature of liberalization?",
          "question_hi": "निम्नलिखित में से कौन सा उदारीकरण की विशेषता नहीं है?",
          "options_en": ["Abolishing industrial licensing", "Freedom in fixing prices", "Restriction on foreign investment", "Simplifying import-export procedures"],
          "options_hi": ["औद्योगिक लाइसेंसिंग की समाप्ति", "मूल्य निर्धारण में स्वतंत्रता", "विदेशी निवेश पर प्रतिबंध", "आयात-निर्यात प्रक्रियाओं को सरल बनाना"],
          "answer": "Restriction on foreign investment",
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
          "question_en": "Which of the following is not a characteristic of business environment?",
          "question_hi": "निम्नलिखित में से कौन व्यापार पर्यावरण की विशेषता नहीं है?",
          "options_en": ["Dynamic", "Uncertainty", "Static", "Relativity"],
          "options_hi": ["गतिकी", "असुरक्षा", "स्थिर", "सापेक्षता"],
          "answer": "Static",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 32,
          "question_en": "Which of the following is a component of the economic environment?",
          "question_hi": "निम्नलिखित में से कौन सा आर्थिक पर्यावरण का हिस्सा है?",
          "options_en": ["Inflation rates", "Political stability", "Social values", "Technological advancements"],
          "options_hi": ["मुद्रास्फीति दर", "राजनीतिक स्थिरता", "सामाजिक मूल्य", "प्रौद्योगिकीय नवाचार"],
          "answer": "Inflation rates",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 33,
          "question_en": "Which of the following is not a part of the technological environment?",
          "question_hi": "निम्नलिखित में से कौन सा प्रौद्योगिकीय पर्यावरण का हिस्सा नहीं है?",
          "options_en": ["Innovations", "Research and development", "Technological infrastructure", "Consumer preferences"],
          "options_hi": ["नवाचार", "अनुसंधान और विकास", "प्रौद्योगिकी आधारभूत संरचना", "उपभोक्ता प्राथमिकताएँ"],
          "answer": "Consumer preferences",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 34,
          "question_en": "Which of the following is an example of a political environment factor?",
          "question_hi": "निम्नलिखित में से कौन सा राजनीतिक पर्यावरण तत्व का उदाहरण है?",
          "options_en": ["Government policies", "Technological advancements", "Consumer behavior", "Market trends"],
          "options_hi": ["सरकारी नीतियाँ", "प्रौद्योगिकीय नवाचार", "उपभोक्ता व्यवहार", "बाजार प्रवृत्तियाँ"],
          "answer": "Government policies",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 35,
          "question_en": "Which of the following is not a part of the social environment?",
          "question_hi": "निम्नलिखित में से कौन सा सामाजिक पर्यावरण का हिस्सा नहीं है?",
          "options_en": ["Demographic trends", "Cultural norms", "Political stability", "Family structures"],
          "options_hi": ["जनसांख्यिकी प्रवृत्तियाँ", "सांस्कृतिक मानदंड", "राजनीतिक स्थिरता", "परिवार संरचनाएँ"],
          "answer": "Political stability",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 36,
          "question_en": "The term 'liberalization' refers to:",
          "question_hi": "'उदारवादीकरण' शब्द का तात्पर्य है:",
          "options_en": ["Reduction in government controls", "Increase in government controls", "Privatization of public enterprises", "Nationalization of private enterprises"],
          "options_hi": ["सरकारी नियंत्रण में कमी", "सरकारी नियंत्रण में वृद्धि", "सार्वजनिक उद्यमों का निजीकरण", "निजी उद्यमों का राष्ट्रीयकरण"],
          "answer": "Reduction in government controls",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 37,
          "question_en": "Which of the following is not a characteristic of business environment?",
          "question_hi": "निम्नलिखित में से कौन व्यापार पर्यावरण की विशेषता नहीं है?",
          "options_en": ["Complexity", "Uncertainty", "Static", "Relativity"],
          "options_hi": ["जटिलता", "असुरक्षा", "स्थिर", "सापेक्षता"],
          "answer": "Static",
          "attempted": false,
          "selected": ""
        },
        {
            "num": 38,
            "question_en": "Competition is beneficial to the competing firms besides benefiting the:",
            "question_hi": "प्रतिस्पर्धा प्रतिस्पर्धी फर्मों के लिए लाभकारी है इसके अलावा यह लाभकारी है:",
            "options_en": ["Producers", "Intermediaries", "Finances", "Consumers"],
            "options_hi": ["उत्पादक", "मध्यस्थ", "वित्त", "उपभोक्ता"],
            "answer": "Consumers",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 39,
            "question_en": "National Commission for Consumer Disputes Redressal was formed in the year:",
            "question_hi": "राष्ट्रीय उपभोक्ता विवाद निवारण आयोग की स्थापना वर्ष में हुई थी:",
            "options_en": ["1988", "1991", "1995", "2000"],
            "options_hi": ["1988", "1991", "1995", "2000"],
            "answer": "1988",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 40,
            "question_en": "IRDA Act was enacted in the year:",
            "question_hi": "IRDA अधिनियम वर्ष में लागू किया गया था:",
            "options_en": ["1999", "2000", "2002", "2005"],
            "options_hi": ["1999", "2000", "2002", "2005"],
            "answer": "1999",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 41,
            "question_en": "Business comprises all __________ seeking activities and enterprises that provide goods and services necessary to an economic system.",
            "question_hi": "व्यापार सभी __________ गतिविधियों और उद्यमों को शामिल करता है जो एक आर्थिक प्रणाली के लिए आवश्यक वस्तुओं और सेवाओं की आपूर्ति करते हैं।",
            "options_en": ["Profit", "Loss", "Production", "None of these"],
            "options_hi": ["लाभ", "हानि", "उत्पादन", "इनमें से कोई नहीं"],
            "answer": "Profit",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 42,
            "question_en": "__________ are the directives to the various government and non-government agencies and are fundamental in the governance of the country.",
            "question_hi": "__________ विभिन्न सरकारी और गैर-सरकारी एजेंसियों को निर्देश हैं और देश के शासन में मौलिक हैं।",
            "options_en": ["State policies", "Fundamental rights", "Directive principles", "Fundamental Rules"],
            "options_hi": ["राज्य नीतियाँ", "मूल अधिकार", "निर्देशात्मक सिद्धांत", "मूल नियम"],
            "answer": "Directive principles",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 43,
            "question_en": "The main objective of society and business is:",
            "question_hi": "समाज और व्यापार का मुख्य उद्देश्य है:",
            "options_en": ["Economic and social objective", "Cultural objective", "Technological objective", "Non objective"],
            "options_hi": ["आर्थिक और सामाजिक उद्देश्य", "सांस्कृतिक उद्देश्य", "प्रौद्योगिकीय उद्देश्य", "कोई उद्देश्य नहीं"],
            "answer": "Economic and social objective",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 44,
            "question_en": "Development banks are otherwise called as:",
            "question_hi": "विकास बैंकों को अन्यथा क्या कहा जाता है:",
            "options_en": ["LIC", "UTI", "DFI", "Barter"],
            "options_hi": ["LIC", "UTI", "DFI", "बार्टर"],
            "answer": "DFI",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 45,
            "question_en": "Today's business is not characterized by:",
            "question_hi": "आज के व्यापार की विशेषता नहीं है:",
            "options_en": ["Diversification", "Loss", "Fight", "Conflict"],
            "options_hi": ["विविधता", "हानि", "लड़ाई", "संघर्ष"],
            "answer": "Diversification",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 46,
            "question_en": "Competition is beneficial to the competing firms besides benefiting the:",
            "question_hi": "प्रतिस्पर्धा प्रतिस्पर्धी फर्मों के लिए लाभकारी है इसके अलावा यह लाभकारी है:",
            "options_en": ["Producers", "Intermediaries", "Finances", "Consumers"],
            "options_hi": ["उत्पादक", "मध्यस्थ", "वित्त", "उपभोक्ता"],
            "answer": "Consumers",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 47,
            "question_en": "Which of the following is not a part of the economic environment?",
            "question_hi": "निम्नलिखित में से कौन सा आर्थिक पर्यावरण का हिस्सा नहीं है?",
            "options_en": ["Inflation rates", "Interest rates", "Government policies", "Consumer preferences"],
            "options_hi": ["मुद्रास्फीति दर", "ब्याज दर", "सरकारी नीतियाँ", "उपभोक्ता प्राथमिकताएँ"],
            "answer": "Consumer preferences",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 48,
            "question_en": "Which of the following is not a part of the social environment?",
            "question_hi": "निम्नलिखित में से कौन सा सामाजिक पर्यावरण का हिस्सा नहीं है?",
            "options_en": ["Demographic trends", "Cultural norms", "Political stability", "Family structures"],
            "options_hi": ["जनसांख्यिकी प्रवृत्तियाँ", "सांस्कृतिक मानदंड", "राजनीतिक स्थिरता", "परिवार संरचनाएँ"],
            "answer": "Political stability",
            "attempted": false,
            "selected": ""
          },
          {
            "num": 49,
            "question_en": "Which of the following is not a part of the technological environment?",
            "question_hi": "निम्नलिखित में से कौन सा प्रौद्योगिकीय पर्यावरण का हिस्सा नहीं है?",
            "options_en": ["Innovations", "Research and development", "Technological infrastructure", "Consumer preferences"],
            "options_hi": ["नवाचार", "अनुसंधान और विकास", "प्रौद्योगिकी आधारभूत संरचना", "उपभोक्ता प्राथमिकताएँ"],
            "answer": "Consumer preferences",
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
