const questions = [
    {
        "num": 1,
        "question_en": "What is the basic objective of a producer?",
        "question_hi": "उत्पादक का मूल उद्देश्य क्या होता है?",
        "options_en": ["Minimize cost", "Maximize profit", "Maximize production", "Minimize losses"],
        "options_hi": ["लागत को न्यूनतम करना", "लाभ को अधिकतम करना", "उत्पादन को अधिकतम करना", "हानियों को न्यूनतम करना"],
        "answer": "Maximize profit",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "What is the relation between total product and marginal product when marginal product is increasing?",
        "question_hi": "जब सीमांत उत्पाद बढ़ रहा हो, तब कुल उत्पाद और सीमांत उत्पाद के बीच क्या संबंध होता है?",
        "options_en": ["TP decreases", "TP constant", "TP increases at increasing rate", "TP increases at decreasing rate"],
        "options_hi": ["कुल उत्पाद घटता है", "कुल उत्पाद स्थिर रहता है", "कुल उत्पाद बढ़ती दर से बढ़ता है", "कुल उत्पाद घटती दर से बढ़ता है"],
        "answer": "TP increases at increasing rate",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Which of the following is a variable factor in the short run?",
        "question_hi": "निम्नलिखित में से कौन-सा अल्पकाल में परिवर्ती कारक होता है?",
        "options_en": ["Land", "Building", "Labour", "Machinery"],
        "options_hi": ["भूमि", "भवन", "श्रम", "मशीनरी"],
        "answer": "Labour",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which cost is also known as overhead cost?",
        "question_hi": "कौन-सी लागत को अधिरोपित लागत भी कहा जाता है?",
        "options_en": ["Fixed cost", "Variable cost", "Total cost", "Marginal cost"],
        "options_hi": ["स्थिर लागत", "परिवर्ती लागत", "कुल लागत", "सीमांत लागत"],
        "answer": "Fixed cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "What happens to average fixed cost as output increases?",
        "question_hi": "जब उत्पादन बढ़ता है तो औसत स्थिर लागत का क्या होता है?",
        "options_en": ["Increases", "Remains constant", "Decreases", "Becomes zero"],
        "options_hi": ["बढ़ती है", "स्थिर रहती है", "घटती है", "शून्य हो जाती है"],
        "answer": "Decreases",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "What is marginal product?",
        "question_hi": "सीमांत उत्पाद क्या होता है?",
        "options_en": ["Total output", "Output per unit of input", "Additional output from one more unit of input", "Average output"],
        "options_hi": ["कुल उत्पादन", "प्रति इनपुट यूनिट पर उत्पादन", "एक अतिरिक्त इनपुट यूनिट से अतिरिक्त उत्पादन", "औसत उत्पादन"],
        "answer": "Additional output from one more unit of input",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which of the following is not a feature of supply?",
        "question_hi": "निम्नलिखित में से कौन-सा आपूर्ति की विशेषता नहीं है?",
        "options_en": ["Stock dependent", "Price dependent", "Time dependent", "Income dependent"],
        "options_hi": ["भंडार पर निर्भर", "मूल्य पर निर्भर", "समय पर निर्भर", "आय पर निर्भर"],
        "answer": "Income dependent",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which cost remains constant regardless of output?",
        "question_hi": "कौन-सी लागत उत्पादन की परवाह किए बिना स्थिर रहती है?",
        "options_en": ["Fixed cost", "Variable cost", "Marginal cost", "Total cost"],
        "options_hi": ["स्थिर लागत", "परिवर्ती लागत", "सीमांत लागत", "कुल लागत"],
        "answer": "Fixed cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "In which stage does marginal product become negative?",
        "question_hi": "किस चरण में सीमांत उत्पाद ऋणात्मक हो जाता है?",
        "options_en": ["Stage I", "Stage II", "Stage III", "None"],
        "options_hi": ["चरण I", "चरण II", "चरण III", "कोई नहीं"],
        "answer": "Stage III",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "What is the shape of marginal cost curve?",
        "question_hi": "सीमांत लागत वक्र का आकार कैसा होता है?",
        "options_en": ["U-shaped", "L-shaped", "Inverted U-shaped", "Straight line"],
        "options_hi": ["यू-आकार", "एल-आकार", "उल्टा यू-आकार", "सीधी रेखा"],
        "answer": "U-shaped",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "What does the law of variable proportions state?",
        "question_hi": "परिवर्ती अनुपात का नियम क्या कहता है?",
        "options_en": ["Product increases indefinitely", "Product remains constant", "Product increases then decreases", "None"],
        "options_hi": ["उत्पादन अनंत रूप से बढ़ता है", "उत्पादन स्थिर रहता है", "उत्पादन पहले बढ़ता है फिर घटता है", "कोई नहीं"],
        "answer": "Product increases then decreases",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "At which point is average product equal to marginal product?",
        "question_hi": "किस बिंदु पर औसत उत्पाद सीमांत उत्पाद के बराबर होता है?",
        "options_en": ["When AP is maximum", "When TP is maximum", "When MP is zero", "When TP is zero"],
        "options_hi": ["जब एपी अधिकतम होता है", "जब टीपी अधिकतम होता है", "जब एमपी शून्य होता है", "जब टीपी शून्य होता है"],
        "answer": "When AP is maximum",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "Which curve shows the minimum cost per unit?",
        "question_hi": "कौन-सा वक्र प्रति यूनिट न्यूनतम लागत को दर्शाता है?",
        "options_en": ["Average cost curve", "Marginal cost curve", "Fixed cost curve", "Total cost curve"],
        "options_hi": ["औसत लागत वक्र", "सीमांत लागत वक्र", "स्थिर लागत वक्र", "कुल लागत वक्र"],
        "answer": "Average cost curve",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "Which factor is considered fixed in the short run?",
        "question_hi": "अल्पकाल में किस कारक को स्थिर माना जाता है?",
        "options_en": ["Labour", "Raw material", "Capital", "Electricity"],
        "options_hi": ["श्रम", "कच्चा माल", "पूंजी", "बिजली"],
        "answer": "Capital",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which cost changes with level of output?",
        "question_hi": "कौन-सी लागत उत्पादन के स्तर के साथ बदलती है?",
        "options_en": ["Fixed cost", "Average fixed cost", "Variable cost", "Sunk cost"],
        "options_hi": ["स्थिर लागत", "औसत स्थिर लागत", "परिवर्ती लागत", "निवेश लागत"],
        "answer": "Variable cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Supply is a function of:",
        "question_hi": "आपूर्ति किसका फलन है?",
        "options_en": ["Income", "Price", "Utility", "Profit"],
        "options_hi": ["आय", "मूल्य", "उपयोगिता", "लाभ"],
        "answer": "Price",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which cost includes opportunity cost?",
        "question_hi": "कौन-सी लागत अवसर लागत को शामिल करती है?",
        "options_en": ["Fixed cost", "Implicit cost", "Accounting cost", "Sunk cost"],
        "options_hi": ["स्थिर लागत", "अप्रत्यक्ष लागत", "लेखा लागत", "निवेश लागत"],
        "answer": "Implicit cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "In economics, cost refers to:",
        "question_hi": "अर्थशास्त्र में लागत का तात्पर्य है:",
        "options_en": ["Only money spent", "Only implicit cost", "All expenses including opportunity cost", "None"],
        "options_hi": ["केवल खर्च की गई राशि", "केवल अप्रत्यक्ष लागत", "सभी खर्च जिनमें अवसर लागत शामिल है", "कोई नहीं"],
        "answer": "All expenses including opportunity cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "What happens to marginal cost when marginal product is rising?",
        "question_hi": "जब सीमांत उत्पाद बढ़ रहा होता है, तब सीमांत लागत का क्या होता है?",
        "options_en": ["Rises", "Falls", "Constant", "Zero"],
        "options_hi": ["बढ़ती है", "घटती है", "स्थिर", "शून्य"],
        "answer": "Falls",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which cost becomes zero when output is zero?",
        "question_hi": "जब उत्पादन शून्य होता है तो कौन-सी लागत शून्य हो जाती है?",
        "options_en": ["Fixed cost", "Variable cost", "Total cost", "Sunk cost"],
        "options_hi": ["स्थिर लागत", "परिवर्ती लागत", "कुल लागत", "निवेश लागत"],
        "answer": "Variable cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which curve is also known as the envelope curve?",
        "question_hi": "किस वक्र को लिफाफा वक्र भी कहा जाता है?",
        "options_en": ["Total cost", "Marginal cost", "Average cost", "Long-run average cost"],
        "options_hi": ["कुल लागत", "सीमांत लागत", "औसत लागत", "दीर्घकालिक औसत लागत"],
        "answer": "Long-run average cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Law of supply explains the relationship between:",
        "question_hi": "आपूर्ति का नियम किसके बीच संबंध को समझाता है?",
        "options_en": ["Price and demand", "Income and demand", "Price and supply", "Supply and cost"],
        "options_hi": ["मूल्य और माँग", "आय और माँग", "मूल्य और आपूर्ति", "आपूर्ति और लागत"],
        "answer": "Price and supply",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "The supply curve slopes:",
        "question_hi": "आपूर्ति वक्र की ढलान होती है:",
        "options_en": ["Downward", "Upward", "Vertical", "Horizontal"],
        "options_hi": ["नीचे की ओर", "ऊपर की ओर", "लंबवत", "क्षैतिज"],
        "answer": "Upward",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which factor causes movement along the supply curve?",
        "question_hi": "कौन-सा कारक आपूर्ति वक्र पर गति का कारण बनता है?",
        "options_en": ["Technology", "Input prices", "Price of commodity", "Tax"],
        "options_hi": ["प्रौद्योगिकी", "इनपुट कीमतें", "वस्तु का मूल्य", "कर"],
        "answer": "Price of commodity",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "Which of the following is not a determinant of supply?",
        "question_hi": "निम्नलिखित में से कौन-सा आपूर्ति का निर्धारक नहीं है?",
        "options_en": ["Technology", "Factor prices", "Tax", "Consumer income"],
        "options_hi": ["प्रौद्योगिकी", "कारक कीमतें", "कर", "उपभोक्ता की आय"],
        "answer": "Consumer income",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "When marginal cost is less than average cost, what happens to average cost?",
        "question_hi": "जब सीमांत लागत औसत लागत से कम होती है, तो औसत लागत का क्या होता है?",
        "options_en": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
        "options_hi": ["बढ़ती है", "घटती है", "स्थिर रहती है", "शून्य हो जाती है"],
        "answer": "Decreases",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "At what level of output does marginal cost curve intersect average cost curve?",
        "question_hi": "सीमांत लागत वक्र औसत लागत वक्र को किस स्तर पर काटता है?",
        "options_en": ["When AC is increasing", "When AC is decreasing", "At minimum point of AC", "None of these"],
        "options_hi": ["जब औसत लागत बढ़ रही हो", "जब औसत लागत घट रही हो", "औसत लागत के न्यूनतम बिंदु पर", "इनमें से कोई नहीं"],
        "answer": "At minimum point of AC",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "Which one is a cause for upward sloping supply curve?",
        "question_hi": "कौन-सा कारण आपूर्ति वक्र को ऊपर की ओर झुकाता है?",
        "options_en": ["Rising cost", "Falling revenue", "Decreasing cost", "None"],
        "options_hi": ["बढ़ती लागत", "घटती आय", "घटती लागत", "कोई नहीं"],
        "answer": "Rising cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "Supply curve of a perfectly competitive firm is:",
        "question_hi": "पूर्ण प्रतिस्पर्धी फर्म की आपूर्ति वक्र कैसा होता है?",
        "options_en": ["Horizontal", "Vertical", "MC curve above AVC", "AC curve"],
        "options_hi": ["क्षैतिज", "ऊर्ध्वाधर", "एवीसी के ऊपर एमसी वक्र", "एसी वक्र"],
        "answer": "MC curve above AVC",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which of these is not a determinant of supply?",
        "question_hi": "निम्नलिखित में से कौन आपूर्ति का निर्धारक नहीं है?",
        "options_en": ["Technology", "Input prices", "Tax", "Consumer income"],
        "options_hi": ["प्रौद्योगिकी", "इनपुट कीमतें", "कर", "उपभोक्ता आय"],
        "answer": "Consumer income",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "Change in quantity supplied is due to:",
        "question_hi": "आपूर्ति की मात्रा में परिवर्तन किस कारण होता है?",
        "options_en": ["Change in income", "Change in price of the good", "Change in taste", "Change in government policy"],
        "options_hi": ["आय में परिवर्तन", "वस्तु के मूल्य में परिवर्तन", "रुचि में परिवर्तन", "सरकारी नीति में परिवर्तन"],
        "answer": "Change in price of the good",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "If supply increases with increase in price, it is called:",
        "question_hi": "यदि मूल्य में वृद्धि के साथ आपूर्ति बढ़ती है, तो उसे क्या कहा जाता है?",
        "options_en": ["Decrease in supply", "Extension of supply", "Contraction of supply", "Increase in supply"],
        "options_hi": ["आपूर्ति में कमी", "आपूर्ति का विस्तार", "आपूर्ति में संकुचन", "आपूर्ति में वृद्धि"],
        "answer": "Extension of supply",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "If a firm produces 0 units, its total fixed cost will be:",
        "question_hi": "यदि कोई फर्म 0 यूनिट का उत्पादन करती है, तो उसकी कुल स्थिर लागत होगी:",
        "options_en": ["Zero", "Negative", "Positive", "Infinity"],
        "options_hi": ["शून्य", "ऋणात्मक", "धनात्मक", "अनंत"],
        "answer": "Positive",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Supply schedule shows:",
        "question_hi": "आपूर्ति अनुसूची क्या दर्शाती है?",
        "options_en": ["Price and income", "Price and supply", "Price and demand", "Cost and output"],
        "options_hi": ["मूल्य और आय", "मूल्य और आपूर्ति", "मूल्य और माँग", "लागत और उत्पादन"],
        "answer": "Price and supply",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Law of supply shows relationship between:",
        "question_hi": "आपूर्ति का नियम किनके बीच संबंध दिखाता है?",
        "options_en": ["Price and cost", "Cost and output", "Price and quantity supplied", "Income and supply"],
        "options_hi": ["मूल्य और लागत", "लागत और उत्पादन", "मूल्य और आपूर्ति मात्रा", "आय और आपूर्ति"],
        "answer": "Price and quantity supplied",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "When total product increases at a decreasing rate, marginal product is:",
        "question_hi": "जब कुल उत्पाद घटती दर से बढ़ता है, तब सीमांत उत्पाद होता है:",
        "options_en": ["Increasing", "Decreasing", "Zero", "Negative"],
        "options_hi": ["बढ़ रहा है", "घट रहा है", "शून्य", "ऋणात्मक"],
        "answer": "Decreasing",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Perfectly elastic supply curve is:",
        "question_hi": "पूर्णतः लचीली आपूर्ति वक्र कैसा होता है?",
        "options_en": ["Vertical", "Downward sloping", "Upward sloping", "Horizontal"],
        "options_hi": ["ऊर्ध्वाधर", "नीचे की ओर झुकता हुआ", "ऊपर की ओर झुकता हुआ", "क्षैतिज"],
        "answer": "Horizontal",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "In long run, all inputs are:",
        "question_hi": "दीर्घकाल में सभी इनपुट होते हैं:",
        "options_en": ["Fixed", "Variable", "Idle", "Constant"],
        "options_hi": ["स्थिर", "परिवर्ती", "निष्क्रिय", "स्थायी"],
        "answer": "Variable",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "Which is not a stage of the law of variable proportions?",
        "question_hi": "परिवर्ती अनुपात के नियम का कौन-सा चरण नहीं है?",
        "options_en": ["Stage I", "Stage II", "Stage III", "Stage IV"],
        "options_hi": ["चरण I", "चरण II", "चरण III", "चरण IV"],
        "answer": "Stage IV",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "The upward sloping portion of the MC curve implies:",
        "question_hi": "एमसी वक्र का ऊपर की ओर झुकता भाग दर्शाता है:",
        "options_en": ["Increasing returns", "Decreasing returns", "Constant returns", "Zero returns"],
        "options_hi": ["बढ़ती प्रतिफल", "घटती प्रतिफल", "स्थिर प्रतिफल", "शून्य प्रतिफल"],
        "answer": "Decreasing returns",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "The supply curve shifts due to:",
        "question_hi": "आपूर्ति वक्र में बदलाव किस कारण होता है?",
        "options_en": ["Change in price", "Change in demand", "Change in determinants of supply", "None"],
        "options_hi": ["मूल्य में बदलाव", "माँग में बदलाव", "आपूर्ति के निर्धारकों में बदलाव", "कोई नहीं"],
        "answer": "Change in determinants of supply",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Explicit cost refers to:",
        "question_hi": "प्रत्यक्ष लागत से तात्पर्य है:",
        "options_en": ["Non-cash payments", "Opportunity cost", "Cash payments", "Hidden cost"],
        "options_hi": ["गैर-नकद भुगतान", "अवसर लागत", "नकद भुगतान", "छिपी लागत"],
        "answer": "Cash payments",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "In economics, supply is always considered from the point of view of:",
        "question_hi": "अर्थशास्त्र में आपूर्ति को हमेशा किस दृष्टिकोण से देखा जाता है?",
        "options_en": ["Consumer", "Producer", "Government", "Market"],
        "options_hi": ["उपभोक्ता", "उत्पादक", "सरकार", "बाज़ार"],
        "answer": "Producer",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "When does law of supply not apply?",
        "question_hi": "कब आपूर्ति का नियम लागू नहीं होता?",
        "options_en": ["Agricultural goods", "Perishable goods", "Antique items", "All of the above"],
        "options_hi": ["कृषि उत्पाद", "नाशवान वस्तुएँ", "पुरातन वस्तुएँ", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which of the following represents cost of forgone alternatives?",
        "question_hi": "निम्नलिखित में से कौन छोड़े गए विकल्पों की लागत दर्शाता है?",
        "options_en": ["Explicit cost", "Implicit cost", "Sunk cost", "Fixed cost"],
        "options_hi": ["प्रत्यक्ष लागत", "अप्रत्यक्ष लागत", "निवेश लागत", "स्थिर लागत"],
        "answer": "Implicit cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "Which is the correct formula for Average Variable Cost?",
        "question_hi": "औसत परिवर्ती लागत का सही सूत्र क्या है?",
        "options_en": ["TVC ÷ Output", "TFC ÷ Output", "TC ÷ Output", "MC ÷ Output"],
        "options_hi": ["टीवीसी ÷ उत्पादन", "टीएफसी ÷ उत्पादन", "टीसी ÷ उत्पादन", "एमसी ÷ उत्पादन"],
        "answer": "TVC ÷ Output",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Average cost is equal to:",
        "question_hi": "औसत लागत किसके बराबर होती है?",
        "options_en": ["TC - TVC", "TFC ÷ Output", "TVC ÷ Output", "TC ÷ Output"],
        "options_hi": ["टीसी - टीवीसी", "टीएफसी ÷ उत्पादन", "टीवीसी ÷ उत्पादन", "टीसी ÷ उत्पादन"],
        "answer": "TC ÷ Output",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "The shape of Total Variable Cost curve is:",
        "question_hi": "कुल परिवर्ती लागत वक्र का आकार कैसा होता है?",
        "options_en": ["Horizontal", "Vertical", "Inverted U", "Inverted S"],
        "options_hi": ["क्षैतिज", "ऊर्ध्वाधर", "उल्टा यू", "उल्टा एस"],
        "answer": "Inverted S",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "Which of the following cost curves never touch the x-axis?",
        "question_hi": "निम्नलिखित में से कौन-सा लागत वक्र कभी x-अक्ष को नहीं छूता?",
        "options_en": ["AVC", "AFC", "MC", "AC"],
        "options_hi": ["एवीसी", "एएफसी", "एमसी", "एसी"],
        "answer": "AFC",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What does TFC curve look like?",
        "question_hi": "टीएफसी वक्र कैसा दिखता है?",
        "options_en": ["Upward sloping", "Downward sloping", "Horizontal straight line", "Vertical line"],
        "options_hi": ["ऊपर की ओर झुकता हुआ", "नीचे की ओर झुकता हुआ", "क्षैतिज सीधी रेखा", "ऊर्ध्वाधर रेखा"],
        "answer": "Horizontal straight line",
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
