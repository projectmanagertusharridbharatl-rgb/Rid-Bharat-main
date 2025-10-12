const questions = [
    {
        "num": 1,
        "question_en": "What is the basic objective of a producer?",
        "question_hi": "उत्पादक का मूल उद्देश्य क्या होता है?",
        "options_en": ["Minimize cost", "Maximize profit", "Maximize production", "Minimize losses"],
        "options_hi": ["लागत को न्यूनतम करना", "लाभ को अधिकतम करना", "उत्पादन को अधिकतम करना", "हानियों को न्यूनतम करना"],
        "answer_en": "Maximize profit",
        "answer_hi":"लागत को न्यूनतम करना",
        "attempted": false,
        "selected": ""
      },
       {
    "num": 2,
    "question_en": "What does the law of diminishing returns state?",
    "question_hi": "क्षीण प्रतिफल का नियम क्या कहता है?",
    "options_en": [
      "Output increases indefinitely with more input",
      "Beyond a point, additional input leads to less output",
      "Input and output have no relation",
      "Output decreases initially and then increases"
    ],
    "options_hi": [
      "अधिक इनपुट से उत्पादन अनिश्चित काल तक बढ़ता रहता है",
      "एक बिंदु के बाद अतिरिक्त इनपुट कम उत्पादन देता है",
      "इनपुट और आउटपुट का कोई संबंध नहीं है",
      "प्रारंभ में उत्पादन घटता है फिर बढ़ता है"
    ],
    "answer_en": "Beyond a point, additional input leads to less output",
    "answer_hi": "एक बिंदु के बाद अतिरिक्त इनपुट कम उत्पादन देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is fixed input?",
    "question_hi": "स्थिर इनपुट क्या है?",
    "options_en": [
      "Input that does not change with output",
      "Input that changes with output",
      "Only labour input",
      "None of the above"
    ],
    "options_hi": [
      "ऐसा इनपुट जो उत्पादन के अनुसार नहीं बदलता",
      "ऐसा इनपुट जो उत्पादन के अनुसार बदलता है",
      "केवल श्रम इनपुट",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Input that does not change with output",
    "answer_hi": "ऐसा इनपुट जो उत्पादन के अनुसार नहीं बदलता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the short run in production?",
    "question_hi": "उत्पादन में लघु अवधि क्या होती है?",
    "options_en": [
      "Period when all inputs are variable",
      "Period when some inputs are fixed",
      "Period when no inputs are fixed",
      "None of the above"
    ],
    "options_hi": [
      "ऐसी अवधि जब सभी इनपुट परिवर्तनीय होते हैं",
      "ऐसी अवधि जब कुछ इनपुट स्थिर होते हैं",
      "ऐसी अवधि जब कोई इनपुट स्थिर नहीं होता",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Period when some inputs are fixed",
    "answer_hi": "ऐसी अवधि जब कुछ इनपुट स्थिर होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the long run in production?",
    "question_hi": "उत्पादन में दीर्घ अवधि क्या होती है?",
    "options_en": [
      "Period when all inputs are fixed",
      "Period when all inputs are variable",
      "Period when some inputs are fixed",
      "None of the above"
    ],
    "options_hi": [
      "ऐसी अवधि जब सभी इनपुट स्थिर होते हैं",
      "ऐसी अवधि जब सभी इनपुट परिवर्तनीय होते हैं",
      "ऐसी अवधि जब कुछ इनपुट स्थिर होते हैं",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Period when all inputs are variable",
    "answer_hi": "ऐसी अवधि जब सभी इनपुट परिवर्तनीय होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does the production function show?",
    "question_hi": "उत्पादन फलन क्या दर्शाता है?",
    "options_en": [
      "Relationship between inputs and output",
      "Relationship between cost and revenue",
      "Relationship between income and expenditure",
      "None of the above"
    ],
    "options_hi": [
      "इनपुट और आउटपुट के बीच संबंध",
      "लागत और राजस्व के बीच संबंध",
      "आय और व्यय के बीच संबंध",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Relationship between inputs and output",
    "answer_hi": "इनपुट और आउटपुट के बीच संबंध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is total product?",
    "question_hi": "कुल उत्पाद क्या है?",
    "options_en": [
      "Output from all inputs combined",
      "Output from one input only",
      "Input used in production",
      "None of the above"
    ],
    "options_hi": [
      "सभी इनपुट का संयुक्त उत्पादन",
      "केवल एक इनपुट का उत्पादन",
      "उत्पादन में उपयोग किया गया इनपुट",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Output from all inputs combined",
    "answer_hi": "सभी इनपुट का संयुक्त उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is average product?",
    "question_hi": "औसत उत्पाद क्या है?",
    "options_en": [
      "Total product divided by quantity of input",
      "Total cost divided by output",
      "Total revenue divided by input",
      "None of the above"
    ],
    "options_hi": [
      "कुल उत्पाद को इनपुट की मात्रा से भाग देना",
      "कुल लागत को उत्पादन से भाग देना",
      "कुल राजस्व को इनपुट से भाग देना",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Total product divided by quantity of input",
    "answer_hi": "कुल उत्पाद को इनपुट की मात्रा से भाग देना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is marginal product?",
    "question_hi": "सीमांत उत्पाद क्या है?",
    "options_en": [
      "Change in total product due to one unit change in input",
      "Change in total cost due to one unit change in output",
      "Total product divided by input",
      "None of the above"
    ],
    "options_hi": [
      "एक इकाई इनपुट में बदलाव से कुल उत्पाद में बदलाव",
      "एक इकाई उत्पादन में बदलाव से कुल लागत में बदलाव",
      "कुल उत्पाद को इनपुट से भाग देना",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Change in total product due to one unit change in input",
    "answer_hi": "एक इकाई इनपुट में बदलाव से कुल उत्पाद में बदलाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What happens when marginal product becomes zero?",
    "question_hi": "जब सीमांत उत्पाद शून्य हो जाता है तो क्या होता है?",
    "options_en": [
      "Total product is maximum",
      "Total product is minimum",
      "Output stops",
      "None of the above"
    ],
    "options_hi": [
      "कुल उत्पाद अधिकतम होता है",
      "कुल उत्पाद न्यूनतम होता है",
      "उत्पादन बंद हो जाता है",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Total product is maximum",
    "answer_hi": "कुल उत्पाद अधिकतम होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the law of variable proportions?",
    "question_hi": "चर अनुपात का नियम क्या है?",
    "options_en": [
      "Output changes in fixed proportion to input",
      "Output changes in variable proportion to input",
      "Output increases infinitely",
      "Output decreases infinitely"
    ],
    "options_hi": [
      "उत्पादन इनपुट के स्थिर अनुपात में बदलता है",
      "उत्पादन इनपुट के चर अनुपात में बदलता है",
      "उत्पादन अनंत तक बढ़ता है",
      "उत्पादन अनंत तक घटता है"
    ],
    "answer_en": "Output changes in variable proportion to input",
    "answer_hi": "उत्पादन इनपुट के चर अनुपात में बदलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the primary objective of a producer?",
    "question_hi": "उत्पादक का मुख्य उद्देश्य क्या है?",
    "options_en": [
      "Maximize production",
      "Maximize profit",
      "Minimize cost",
      "Maximize sales"
    ],
    "options_hi": [
      "उत्पादन अधिकतम करना",
      "लाभ अधिकतम करना",
      "लागत न्यूनतम करना",
      "बिक्री अधिकतम करना"
    ],
    "answer_en": "Maximize profit",
    "answer_hi": "लाभ अधिकतम करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is opportunity cost?",
    "question_hi": "अवसर लागत क्या है?",
    "options_en": [
      "Cost of production",
      "Value of next best alternative foregone",
      "Total cost minus fixed cost",
      "None of the above"
    ],
    "options_hi": [
      "उत्पादन की लागत",
      "अगली श्रेष्ठ विकल्प का मूल्य जिसे त्याग दिया गया हो",
      "कुल लागत में से स्थिर लागत घटाना",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Value of next best alternative foregone",
    "answer_hi": "अगली श्रेष्ठ विकल्प का मूल्य जिसे त्याग दिया गया हो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the meaning of supply in Economics?",
    "question_hi": "अर्थशास्त्र में आपूर्ति का क्या अर्थ है?",
    "options_en": [
      "Quantity of goods available for sale",
      "Quantity of goods demanded",
      "Government's revenue",
      "None of the above"
    ],
    "options_hi": [
      "बिक्री के लिए उपलब्ध वस्तुओं की मात्रा",
      "माँग की गई वस्तुओं की मात्रा",
      "सरकार की आय",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Quantity of goods available for sale",
    "answer_hi": "बिक्री के लिए उपलब्ध वस्तुओं की मात्रा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the law of supply?",
    "question_hi": "आपूर्ति का नियम क्या है?",
    "options_en": [
      "Supply increases with price",
      "Supply decreases with price",
      "Supply is independent of price",
      "Supply is fixed"
    ],
    "options_hi": [
      "मूल्य के साथ आपूर्ति बढ़ती है",
      "मूल्य के साथ आपूर्ति घटती है",
      "आपूर्ति मूल्य से स्वतंत्र है",
      "आपूर्ति स्थिर है"
    ],
    "answer_en": "Supply increases with price",
    "answer_hi": "मूल्य के साथ आपूर्ति बढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is a supply schedule?",
    "question_hi": "आपूर्ति अनुसूची क्या है?",
    "options_en": [
      "Table showing price and quantity supplied",
      "Table showing price and quantity demanded",
      "List of available goods",
      "None of the above"
    ],
    "options_hi": [
      "मूल्य और आपूर्ति मात्रा दिखाने वाली तालिका",
      "मूल्य और माँग मात्रा दिखाने वाली तालिका",
      "उपलब्ध वस्तुओं की सूची",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Table showing price and quantity supplied",
    "answer_hi": "मूल्य और आपूर्ति मात्रा दिखाने वाली तालिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What causes a movement along the supply curve?",
    "question_hi": "आपूर्ति वक्र पर आंदोलन क्या कारण बनता है?",
    "options_en": [
      "Change in price",
      "Change in income",
      "Change in tastes",
      "None of the above"
    ],
    "options_hi": [
      "मूल्य में बदलाव",
      "आय में बदलाव",
      "रुचि में बदलाव",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Change in price",
    "answer_hi": "मूल्य में बदलाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What causes a shift in the supply curve?",
    "question_hi": "आपूर्ति वक्र में बदलाव क्या कारण बनता है?",
    "options_en": [
      "Change in cost of production",
      "Change in price of the product",
      "Change in quantity supplied",
      "None of the above"
    ],
    "options_hi": [
      "उत्पादन लागत में बदलाव",
      "उत्पाद के मूल्य में बदलाव",
      "आपूर्ति की मात्रा में बदलाव",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Change in cost of production",
    "answer_hi": "उत्पादन लागत में बदलाव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is meant by elasticity of supply?",
    "question_hi": "आपूर्ति की लोच क्या है?",
    "options_en": [
      "Responsiveness of supply to price changes",
      "Change in quantity demanded",
      "Change in income",
      "None of the above"
    ],
    "options_hi": [
      "मूल्य परिवर्तन के प्रति आपूर्ति की प्रतिक्रिया",
      "माँग की मात्रा में बदलाव",
      "आय में बदलाव",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Responsiveness of supply to price changes",
    "answer_hi": "मूल्य परिवर्तन के प्रति आपूर्ति की प्रतिक्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the formula for price elasticity of supply?",
    "question_hi": "मूल्य आपूर्ति लोच का सूत्र क्या है?",
    "options_en": [
      "Percentage change in quantity supplied / Percentage change in price",
      "Percentage change in demand / Percentage change in income",
      "Percentage change in supply / Percentage change in demand",
      "None of the above"
    ],
    "options_hi": [
      "आपूर्ति की मात्रा में प्रतिशत परिवर्तन / मूल्य में प्रतिशत परिवर्तन",
      "माँग में प्रतिशत परिवर्तन / आय में प्रतिशत परिवर्तन",
      "आपूर्ति में प्रतिशत परिवर्तन / माँग में प्रतिशत परिवर्तन",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Percentage change in quantity supplied / Percentage change in price",
    "answer_hi": "आपूर्ति की मात्रा में प्रतिशत परिवर्तन / मूल्य में प्रतिशत परिवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the effect of technological improvement on supply?",
    "question_hi": "प्रौद्योगिकी सुधार का आपूर्ति पर क्या प्रभाव होता है?",
    "options_en": [
      "Supply increases",
      "Supply decreases",
      "No effect on supply",
      "Supply becomes zero"
    ],
    "options_hi": [
      "आपूर्ति बढ़ती है",
      "आपूर्ति घटती है",
      "आपूर्ति पर कोई प्रभाव नहीं",
      "आपूर्ति शून्य हो जाती है"
    ],
    "answer_en": "Supply increases",
    "answer_hi": "आपूर्ति बढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What happens to supply when taxes on production increase?",
    "question_hi": "जब उत्पादन पर कर बढ़ता है तो आपूर्ति क्या होती है?",
    "options_en": [
      "Supply decreases",
      "Supply increases",
      "No change in supply",
      "Supply becomes infinite"
    ],
    "options_hi": [
      "आपूर्ति घटती है",
      "आपूर्ति बढ़ती है",
      "आपूर्ति में कोई बदलाव नहीं",
      "आपूर्ति अनंत हो जाती है"
    ],
    "answer_en": "Supply decreases",
    "answer_hi": "आपूर्ति घटती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is meant by market supply?",
    "question_hi": "बाजार आपूर्ति का क्या अर्थ है?",
    "options_en": [
      "Sum of all individual supplies",
      "Supply of a single firm",
      "Demand of all buyers",
      "None of the above"
    ],
    "options_hi": [
      "सभी व्यक्तिगत आपूर्ति का योग",
      "एक फर्म की आपूर्ति",
      "सभी खरीदारों की माँग",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Sum of all individual supplies",
    "answer_hi": "सभी व्यक्तिगत आपूर्ति का योग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which factor does NOT affect supply?",
    "question_hi": "कौन सा कारक आपूर्ति को प्रभावित नहीं करता?",
    "options_en": [
      "Price of the product",
      "Technology",
      "Consumer preference",
      "Cost of production"
    ],
    "options_hi": [
      "उत्पाद का मूल्य",
      "प्रौद्योगिकी",
      "उपभोक्ता की पसंद",
      "उत्पादन की लागत"
    ],
    "answer_en": "Consumer preference",
    "answer_hi": "उपभोक्ता की पसंद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What happens to supply when prices of inputs decrease?",
    "question_hi": "जब इनपुट की कीमतें घटती हैं तो आपूर्ति क्या होती है?",
    "options_en": [
      "Supply increases",
      "Supply decreases",
      "No change in supply",
      "Supply stops"
    ],
    "options_hi": [
      "आपूर्ति बढ़ती है",
      "आपूर्ति घटती है",
      "आपूर्ति में कोई बदलाव नहीं",
      "आपूर्ति बंद हो जाती है"
    ],
    "answer_en": "Supply increases",
    "answer_hi": "आपूर्ति बढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is meant by 'Elasticity of supply'?",
    "question_hi": "'आपूर्ति की लोच' का क्या अर्थ है?",
    "options_en": [
      "Responsiveness of supply to price changes",
      "Responsiveness of demand to price changes",
      "Total supply in market",
      "Cost of production"
    ],
    "options_hi": [
      "मूल्य परिवर्तन पर आपूर्ति की प्रतिक्रिया",
      "मूल्य परिवर्तन पर माँग की प्रतिक्रिया",
      "बाजार में कुल आपूर्ति",
      "उत्पादन की लागत"
    ],
    "answer_en": "Responsiveness of supply to price changes",
    "answer_hi": "मूल्य परिवर्तन पर आपूर्ति की प्रतिक्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which of the following indicates perfectly elastic supply?",
    "question_hi": "निम्नलिखित में से कौन पूर्णतः लोचदार आपूर्ति दर्शाता है?",
    "options_en": [
      "Horizontal supply curve",
      "Vertical supply curve",
      "Upward sloping supply curve",
      "Downward sloping supply curve"
    ],
    "options_hi": [
      "क्षैतिज आपूर्ति वक्र",
      "ऊर्ध्वाधर आपूर्ति वक्र",
      "ऊपर की ओर ढलान वाला आपूर्ति वक्र",
      "नीचे की ओर ढलान वाला आपूर्ति वक्र"
    ],
    "answer_en": "Horizontal supply curve",
    "answer_hi": "क्षैतिज आपूर्ति वक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the shape of the supply curve in the short run?",
    "question_hi": "लघु अवधि में आपूर्ति वक्र का आकार कैसा होता है?",
    "options_en": [
      "Upward sloping",
      "Downward sloping",
      "Horizontal",
      "Vertical"
    ],
    "options_hi": [
      "ऊपर की ओर ढलान वाला",
      "नीचे की ओर ढलान वाला",
      "क्षैतिज",
      "ऊर्ध्वाधर"
    ],
    "answer_en": "Upward sloping",
    "answer_hi": "ऊपर की ओर ढलान वाला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "When supply is perfectly inelastic, what happens to quantity supplied with price change?",
    "question_hi": "जब आपूर्ति पूरी तरह लोचहीन होती है, तो मूल्य परिवर्तन पर आपूर्ति की मात्रा क्या होती है?",
    "options_en": [
      "Quantity supplied remains constant",
      "Quantity supplied increases",
      "Quantity supplied decreases",
      "Quantity supplied becomes zero"
    ],
    "options_hi": [
      "आपूर्ति की मात्रा स्थिर रहती है",
      "आपूर्ति की मात्रा बढ़ती है",
      "आपूर्ति की मात्रा घटती है",
      "आपूर्ति की मात्रा शून्य हो जाती है"
    ],
    "answer_en": "Quantity supplied remains constant",
    "answer_hi": "आपूर्ति की मात्रा स्थिर रहती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What happens to supply in the long run?",
    "question_hi": "दीर्घ अवधि में आपूर्ति क्या होती है?",
    "options_en": [
      "All inputs are variable, so supply can increase",
      "Supply is fixed",
      "Only labour is variable",
      "Supply decreases"
    ],
    "options_hi": [
      "सभी इनपुट परिवर्तनीय होते हैं, इसलिए आपूर्ति बढ़ सकती है",
      "आपूर्ति स्थिर होती है",
      "केवल श्रम परिवर्तनीय है",
      "आपूर्ति घटती है"
    ],
    "answer_en": "All inputs are variable, so supply can increase",
    "answer_hi": "सभी इनपुट परिवर्तनीय होते हैं, इसलिए आपूर्ति बढ़ सकती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the producer's equilibrium condition?",
    "question_hi": "उत्पादक का संतुलन स्थिति क्या होती है?",
    "options_en": [
      "Marginal cost equals marginal revenue",
      "Total cost equals total revenue",
      "Average cost equals average revenue",
      "None of the above"
    ],
    "options_hi": [
      "सीमांत लागत सीमांत राजस्व के बराबर हो",
      "कुल लागत कुल राजस्व के बराबर हो",
      "औसत लागत औसत राजस्व के बराबर हो",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Marginal cost equals marginal revenue",
    "answer_hi": "सीमांत लागत सीमांत राजस्व के बराबर हो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is total cost?",
    "question_hi": "कुल लागत क्या है?",
    "options_en": [
      "Sum of fixed and variable cost",
      "Cost of raw materials only",
      "Wages paid to labour only",
      "None of the above"
    ],
    "options_hi": [
      "स्थिर और परिवर्तनीय लागत का योग",
      "केवल कच्चे माल की लागत",
      "केवल श्रम को दिया वेतन",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Sum of fixed and variable cost",
    "answer_hi": "स्थिर और परिवर्तनीय लागत का योग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which cost remains constant irrespective of output?",
    "question_hi": "कौन सी लागत उत्पादन की मात्रा से स्वतंत्र होती है?",
    "options_en": [
      "Fixed cost",
      "Variable cost",
      "Marginal cost",
      "Total cost"
    ],
    "options_hi": [
      "स्थिर लागत",
      "परिवर्तनीय लागत",
      "सीमांत लागत",
      "कुल लागत"
    ],
    "answer_en": "Fixed cost",
    "answer_hi": "स्थिर लागत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is variable cost?",
    "question_hi": "परिवर्तनीय लागत क्या है?",
    "options_en": [
      "Cost that varies with output",
      "Cost that remains constant",
      "Total cost minus fixed cost",
      "None of the above"
    ],
    "options_hi": [
      "उत्पादन के साथ बदलने वाली लागत",
      "जो लागत स्थिर रहती है",
      "कुल लागत में से स्थिर लागत घटाकर",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Cost that varies with output",
    "answer_hi": "उत्पादन के साथ बदलने वाली लागत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is marginal cost?",
    "question_hi": "सीमांत लागत क्या है?",
    "options_en": [
      "Cost of producing one more unit",
      "Total cost divided by output",
      "Sum of fixed and variable cost",
      "Cost of raw materials"
    ],
    "options_hi": [
      "एक अतिरिक्त इकाई का उत्पादन लागत",
      "कुल लागत को उत्पादन से भाग देना",
      "स्थिर और परिवर्तनीय लागत का योग",
      "कच्चे माल की लागत"
    ],
    "answer_en": "Cost of producing one more unit",
    "answer_hi": "एक अतिरिक्त इकाई का उत्पादन लागत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the relationship between marginal cost and marginal revenue at equilibrium?",
    "question_hi": "संतुलन में सीमांत लागत और सीमांत राजस्व के बीच क्या संबंध होता है?",
    "options_en": [
      "They are equal",
      "Marginal cost is greater",
      "Marginal revenue is greater",
      "No relation"
    ],
    "options_hi": [
      "वे बराबर होते हैं",
      "सीमांत लागत अधिक है",
      "सीमांत राजस्व अधिक है",
      "कोई संबंध नहीं"
    ],
    "answer_en": "They are equal",
    "answer_hi": "वे बराबर होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What happens to supply if government provides subsidies?",
    "question_hi": "यदि सरकार सब्सिडी देती है तो आपूर्ति क्या होती है?",
    "options_en": [
      "Supply increases",
      "Supply decreases",
      "No change",
      "Supply becomes zero"
    ],
    "options_hi": [
      "आपूर्ति बढ़ती है",
      "आपूर्ति घटती है",
      "कोई बदलाव नहीं",
      "आपूर्ति शून्य हो जाती है"
    ],
    "answer_en": "Supply increases",
    "answer_hi": "आपूर्ति बढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is meant by 'cost of production'?",
    "question_hi": "'उत्पादन लागत' का क्या अर्थ है?",
    "options_en": [
      "Total expenditure on production",
      "Revenue from selling goods",
      "Profit earned",
      "None of the above"
    ],
    "options_hi": [
      "उत्पादन पर कुल खर्च",
      "सामान बेचने से आय",
      "कमाई हुई लाभ",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "Total expenditure on production",
    "answer_hi": "उत्पादन पर कुल खर्च",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which of the following is NOT a factor affecting supply?",
    "question_hi": "निम्नलिखित में से कौन आपूर्ति को प्रभावित नहीं करता?",
    "options_en": [
      "Prices of other goods",
      "Expectation of future prices",
      "Government policies",
      "Consumer income"
    ],
    "options_hi": [
      "अन्य वस्तुओं के मूल्य",
      "भविष्य के मूल्य की अपेक्षा",
      "सरकारी नीतियाँ",
      "उपभोक्ता की आय"
    ],
    "answer_en": "Consumer income",
    "answer_hi": "उपभोक्ता की आय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "If supply increases due to price rise, what is the law called?",
    "question_hi": "मूल्य वृद्धि के कारण आपूर्ति बढ़ती है, इसे क्या कहा जाता है?",
    "options_en": [
      "Law of supply",
      "Law of demand",
      "Law of diminishing returns",
      "Law of equilibrium"
    ],
    "options_hi": [
      "आपूर्ति का नियम",
      "माँग का नियम",
      "घटती उपज का नियम",
      "संतुलन का नियम"
    ],
    "answer_en": "Law of supply",
    "answer_hi": "आपूर्ति का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is a supply schedule?",
    "question_hi": "आपूर्ति अनुसूची क्या है?",
    "options_en": [
      "A table showing price and quantity supplied",
      "A graph showing demand and supply",
      "A table showing cost and revenue",
      "None of the above"
    ],
    "options_hi": [
      "मूल्य और आपूर्ति मात्रा दिखाने वाली तालिका",
      "माँग और आपूर्ति दिखाने वाला ग्राफ",
      "लागत और राजस्व दिखाने वाली तालिका",
      "इनमें से कोई नहीं"
    ],
    "answer_en": "A table showing price and quantity supplied",
    "answer_hi": "मूल्य और आपूर्ति मात्रा दिखाने वाली तालिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which of the following is true about 'Supply curve'?",
    "question_hi": "'आपूर्ति वक्र' के बारे में कौन सा कथन सही है?",
    "options_en": [
      "It slopes upward",
      "It slopes downward",
      "It is horizontal",
      "It is vertical"
    ],
    "options_hi": [
      "यह ऊपर की ओर ढलान होता है",
      "यह नीचे की ओर ढलान होता है",
      "यह क्षैतिज होता है",
      "यह ऊर्ध्वाधर होता है"
    ],
    "answer_en": "It slopes upward",
    "answer_hi": "यह ऊपर की ओर ढलान होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What happens to supply if number of producers increases?",
    "question_hi": "यदि उत्पादकों की संख्या बढ़ती है तो आपूर्ति क्या होती है?",
    "options_en": [
      "Supply increases",
      "Supply decreases",
      "Supply remains unchanged",
      "Supply becomes zero"
    ],
    "options_hi": [
      "आपूर्ति बढ़ती है",
      "आपूर्ति घटती है",
      "आपूर्ति अपरिवर्तित रहती है",
      "आपूर्ति शून्य हो जाती है"
    ],
    "answer_en": "Supply increases",
    "answer_hi": "आपूर्ति बढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the main reason for supply curve to slope upward?",
    "question_hi": "आपूर्ति वक्र के ऊपर की ओर ढलान होने का मुख्य कारण क्या है?",
    "options_en": [
      "Higher price motivates producers to supply more",
      "Higher price reduces supply",
      "Fixed quantity supplied",
      "Consumer preference"
    ],
    "options_hi": [
      "अधिक मूल्य उत्पादकों को अधिक आपूर्ति के लिए प्रेरित करता है",
      "अधिक मूल्य आपूर्ति घटाता है",
      "स्थिर आपूर्ति मात्रा",
      "उपभोक्ता की पसंद"
    ],
    "answer_en": "Higher price motivates producers to supply more",
    "answer_hi": "अधिक मूल्य उत्पादकों को अधिक आपूर्ति के लिए प्रेरित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the role of profit in supply?",
    "question_hi": "आपूर्ति में लाभ की क्या भूमिका होती है?",
    "options_en": [
      "Profit motivates producers to supply more",
      "Profit reduces supply",
      "Profit has no effect",
      "Profit is irrelevant"
    ],
    "options_hi": [
      "लाभ उत्पादकों को अधिक आपूर्ति के लिए प्रेरित करता है",
      "लाभ आपूर्ति घटाता है",
      "लाभ का कोई प्रभाव नहीं",
      "लाभ अप्रासंगिक है"
    ],
    "answer_en": "Profit motivates producers to supply more",
    "answer_hi": "लाभ उत्पादकों को अधिक आपूर्ति के लिए प्रेरित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the term for cost that changes with output?",
    "question_hi": "उस लागत को क्या कहते हैं जो उत्पादन के साथ बदलती है?",
    "options_en": [
      "Variable cost",
      "Fixed cost",
      "Total cost",
      "Sunk cost"
    ],
    "options_hi": [
      "परिवर्तनीय लागत",
      "स्थिर लागत",
      "कुल लागत",
      "डूबी हुई लागत"
    ],
    "answer_en": "Variable cost",
    "answer_hi": "परिवर्तनीय लागत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What happens to supply if there is an increase in price of substitute goods?",
    "question_hi": "यदि विकल्प वस्तुओं की कीमत बढ़ती है तो आपूर्ति क्या होती है?",
    "options_en": [
      "Supply decreases",
      "Supply increases",
      "Supply remains same",
      "Supply becomes zero"
    ],
    "options_hi": [
      "आपूर्ति घटती है",
      "आपूर्ति बढ़ती है",
      "आपूर्ति अपरिवर्तित रहती है",
      "आपूर्ति शून्य हो जाती है"
    ],
    "answer_en": "Supply decreases",
    "answer_hi": "आपूर्ति घटती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does a vertical supply curve indicate?",
    "question_hi": "एक ऊर्ध्वाधर आपूर्ति वक्र क्या दर्शाता है?",
    "options_en": [
      "Quantity supplied is fixed",
      "Supply changes with price",
      "Supply is perfectly elastic",
      "Supply is zero"
    ],
    "options_hi": [
      "आपूर्ति की मात्रा स्थिर है",
      "मूल्य के साथ आपूर्ति बदलती है",
      "आपूर्ति पूरी तरह लोचदार है",
      "आपूर्ति शून्य है"
    ],
    "answer_en": "Quantity supplied is fixed",
    "answer_hi": "आपूर्ति की मात्रा स्थिर है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the effect of price ceiling on supply?",
    "question_hi": "मूल्य सीमा (प्राइस सीलिंग) का आपूर्ति पर क्या प्रभाव होता है?",
    "options_en": [
      "Supply decreases",
      "Supply increases",
      "Supply remains unchanged",
      "Supply becomes infinite"
    ],
    "options_hi": [
      "आपूर्ति घटती है",
      "आपूर्ति बढ़ती है",
      "आपूर्ति अपरिवर्तित रहती है",
      "आपूर्ति अनंत हो जाती है"
    ],
    "answer_en": "Supply decreases",
    "answer_hi": "आपूर्ति घटती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which curve shows the total quantity supplied at different prices?",
    "question_hi": "कौन सा वक्र विभिन्न मूल्यों पर कुल आपूर्ति की मात्रा दिखाता है?",
    "options_en": [
      "Market supply curve",
      "Demand curve",
      "Cost curve",
      "Revenue curve"
    ],
    "options_hi": [
      "बाजार आपूर्ति वक्र",
      "माँग वक्र",
      "लागत वक्र",
      "राजस्व वक्र"
    ],
    "answer_en": "Market supply curve",
    "answer_hi": "बाजार आपूर्ति वक्र",
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
