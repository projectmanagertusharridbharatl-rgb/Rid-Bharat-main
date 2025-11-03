const questions = [
    {
        "num": 1,
        "question_en": "What does the production function show?",
        "question_hi": "उत्पादन फलन क्या दर्शाता है?",
        "options_en": ["Relationship between inputs and output", "Relationship between cost and revenue", "Relationship between income and expenditure", "None of the above"],
        "options_hi": ["इनपुट और आउटपुट के बीच संबंध", "लागत और राजस्व के बीच संबंध", "आय और व्यय के बीच संबंध", "इनमें से कोई नहीं"],
        "answer": "Relationship between inputs and output",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which of the following is a short-run production function?",
        "question_hi": "निम्नलिखित में से कौन-सा अल्पकालिक उत्पादन फलन है?",
        "options_en": ["All inputs are variable", "Some inputs are fixed", "All inputs are fixed", "None of the above"],
        "options_hi": ["सभी इनपुट परिवर्तनीय हैं", "कुछ इनपुट स्थिर हैं", "सभी इनपुट स्थिर हैं", "इनमें से कोई नहीं"],
        "answer": "Some inputs are fixed",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "Which law is also known as the Law of Diminishing Returns?",
        "question_hi": "कौन-सा नियम 'घटती उपज का नियम' के रूप में जाना जाता है?",
        "options_en": ["Law of increasing cost", "Law of variable proportions", "Law of constant returns", "Law of supply"],
        "options_hi": ["बढ़ती लागत का नियम", "चर अनुपात का नियम", "स्थिर प्रतिफल का नियम", "आपूर्ति का नियम"],
        "answer": "Law of variable proportions",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "In the law of variable proportions, which input is generally varied?",
        "question_hi": "चर अनुपात के नियम में सामान्यतः कौन-सा इनपुट परिवर्तित किया जाता है?",
        "options_en": ["Labour", "Capital", "Land", "Technology"],
        "options_hi": ["श्रम", "पूंजी", "भूमि", "प्रौद्योगिकी"],
        "answer": "Labour",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "Returns to scale apply to which run?",
        "question_hi": "प्रतिफल स्केल किस अवधि पर लागू होते हैं?",
        "options_en": ["Short run", "Long run", "Very short run", "Market period"],
        "options_hi": ["अल्पकाल", "दीर्घकाल", "अत्यल्पकाल", "बाजार अवधि"],
        "answer": "Long run",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Increasing returns to scale mean:",
        "question_hi": "बढ़ते प्रतिफल स्केल का अर्थ है:",
        "options_en": ["Output increases more than input", "Output increases less than input", "Output increases in same proportion", "None"],
        "options_hi": ["आउटपुट इनपुट से अधिक बढ़ता है", "आउटपुट इनपुट से कम बढ़ता है", "आउटपुट उसी अनुपात में बढ़ता है", "कोई नहीं"],
        "answer": "Output increases more than input",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "Which cost remains constant per unit in the long run?",
        "question_hi": "दीर्घकाल में प्रति यूनिट कौन-सी लागत स्थिर रहती है?",
        "options_en": ["Fixed cost", "Variable cost", "Average cost", "Marginal cost"],
        "options_hi": ["स्थिर लागत", "परिवर्ती लागत", "औसत लागत", "सीमांत लागत"],
        "answer": "Average cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which cost is also called overhead cost?",
        "question_hi": "कौन-सी लागत अधिरोपण लागत (ओवरहेड) कहलाती है?",
        "options_en": ["Variable cost", "Fixed cost", "Marginal cost", "Total cost"],
        "options_hi": ["परिवर्ती लागत", "स्थिर लागत", "सीमांत लागत", "कुल लागत"],
        "answer": "Fixed cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "What is Marginal Cost?",
        "question_hi": "सीमांत लागत क्या है?",
        "options_en": ["Cost per unit", "Change in total cost due to one more unit of output", "Total cost", "Fixed cost"],
        "options_hi": ["प्रति यूनिट लागत", "एक अतिरिक्त आउटपुट के कारण कुल लागत में परिवर्तन", "कुल लागत", "स्थिर लागत"],
        "answer": "Change in total cost due to one more unit of output",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "Which of the following is true about Average Fixed Cost (AFC)?",
        "question_hi": "निम्नलिखित में से कौन-सा औसत स्थिर लागत (AFC) के बारे में सही है?",
        "options_en": ["Increases with output", "Constant with output", "Decreases with output", "First increases then decreases"],
        "options_hi": ["उत्पादन के साथ बढ़ती है", "उत्पादन के साथ स्थिर रहती है", "उत्पादन के साथ घटती है", "पहले बढ़ती फिर घटती है"],
        "answer": "Decreases with output",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "At which point does marginal cost intersect average cost?",
        "question_hi": "सीमांत लागत किस बिंदु पर औसत लागत को प्रतिच्छेद करती है?",
        "options_en": ["At maximum of AC", "At minimum of AC", "At zero of AC", "Nowhere"],
        "options_hi": ["औसत लागत के अधिकतम पर", "औसत लागत के न्यूनतम पर", "औसत लागत के शून्य पर", "कहीं नहीं"],
        "answer": "At minimum of AC",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which of the following is not a feature of supply?",
        "question_hi": "निम्नलिखित में से कौन-सी आपूर्ति की विशेषता नहीं है?",
        "options_en": ["Desire to produce", "Quantity offered at price", "Time period", "Utility derived"],
        "options_hi": ["उत्पादन की इच्छा", "मूल्य पर दी गई मात्रा", "समय अवधि", "प्राप्त उपयोगिता"],
        "answer": "Utility derived",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "What is the shape of a supply curve under perfect competition?",
        "question_hi": "संपूर्ण प्रतियोगिता में आपूर्ति वक्र का आकार क्या होता है?",
        "options_en": ["Horizontal", "Vertical", "Upward sloping", "Downward sloping"],
        "options_hi": ["क्षैतिज", "ऊर्ध्वाधर", "ऊपर की ओर ढलान वाला", "नीचे की ओर ढलान वाला"],
        "answer": "Upward sloping",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "What does producer's equilibrium mean?",
        "question_hi": "उत्पादक की साम्यावस्था का क्या अर्थ है?",
        "options_en": ["Minimum cost", "Maximum cost", "Maximum profit", "Minimum output"],
        "options_hi": ["न्यूनतम लागत", "अधिकतम लागत", "अधिकतम लाभ", "न्यूनतम उत्पादन"],
        "answer": "Maximum profit",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "In marginal cost and marginal revenue approach, equilibrium is where:",
        "question_hi": "सीमांत लागत और सीमांत राजस्व दृष्टिकोण में साम्यावस्था कहाँ होती है?",
        "options_en": ["MC > MR", "MC < MR", "MC = MR", "None of these"],
        "options_hi": ["MC > MR", "MC < MR", "MC = MR", "इनमें से कोई नहीं"],
        "answer": "MC = MR",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Which of the following affects supply?",
        "question_hi": "निम्नलिखित में से क्या आपूर्ति को प्रभावित करता है?",
        "options_en": ["Technology", "Price of the good", "Taxation policy", "All of the above"],
        "options_hi": ["प्रौद्योगिकी", "वस्तु का मूल्य", "कर नीति", "उपरोक्त सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which cost curve is U-shaped in the short run?",
        "question_hi": "अल्पकाल में कौन-सा लागत वक्र U-आकार का होता है?",
        "options_en": ["TFC", "AFC", "MC", "TVC"],
        "options_hi": ["TFC", "AFC", "MC", "TVC"],
        "answer": "MC",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Which concept shows the responsiveness of quantity supplied to a change in price?",
        "question_hi": "कौन-सी अवधारणा मूल्य परिवर्तन के प्रति आपूर्ति की मात्रा की प्रतिक्रिया दर्शाती है?",
        "options_en": ["Price elasticity of demand", "Income elasticity", "Price elasticity of supply", "Cross elasticity"],
        "options_hi": ["मांग की मूल्य लोच", "आय लोच", "आपूर्ति की मूल्य लोच", "क्रॉस लोच"],
        "answer": "Price elasticity of supply",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "Which one is NOT a component of total cost?",
        "question_hi": "निम्नलिखित में से कौन-सा कुल लागत का घटक नहीं है?",
        "options_en": ["Fixed Cost", "Variable Cost", "Marginal Cost", "Total Cost"],
        "options_hi": ["स्थिर लागत", "परिवर्ती लागत", "सीमांत लागत", "कुल लागत"],
        "answer": "Marginal Cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "When TP increases at a diminishing rate, MP is:",
        "question_hi": "जब TP घटती दर से बढ़ता है, तब MP होता है:",
        "options_en": ["Rising", "Zero", "Falling", "Negative"],
        "options_hi": ["बढ़ता हुआ", "शून्य", "घटता हुआ", "नकारात्मक"],
        "answer": "Falling",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which of the following is not a factor of production?",
        "question_hi": "निम्नलिखित में से कौन उत्पादन का कारक नहीं है?",
        "options_en": ["Land", "Labour", "Money", "Capital"],
        "options_hi": ["भूमि", "श्रम", "पैसा", "पूंजी"],
        "answer": "Money",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "When marginal product is zero, total product is:",
        "question_hi": "जब सीमांत उत्पाद शून्य होता है, तब कुल उत्पाद होता है:",
        "options_en": ["Increasing", "Constant", "Maximum", "Zero"],
        "options_hi": ["बढ़ता हुआ", "स्थिर", "अधिकतम", "शून्य"],
        "answer": "Maximum",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "Which of the following statements is true?",
        "question_hi": "निम्नलिखित में से कौन-सा कथन सही है?",
        "options_en": ["AC = AFC + AVC", "MC = AC + AVC", "TC = TVC - TFC", "AVC = AC - AFC"],
        "options_hi": ["AC = AFC + AVC", "MC = AC + AVC", "TC = TVC - TFC", "AVC = AC - AFC"],
        "answer": "AC = AFC + AVC",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Which cost is ignored in decision making?",
        "question_hi": "निर्णय लेने में किस लागत की अनदेखी की जाती है?",
        "options_en": ["Explicit cost", "Implicit cost", "Fixed cost", "Sunk cost"],
        "options_hi": ["प्रत्यक्ष लागत", "अप्रत्यक्ष लागत", "स्थिर लागत", "डूबत लागत"],
        "answer": "Sunk cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "If TP is increasing at an increasing rate, then MP is:",
        "question_hi": "यदि TP बढ़ती दर से बढ़ रहा है, तो MP होता है:",
        "options_en": ["Decreasing", "Constant", "Increasing", "Negative"],
        "options_hi": ["घटता हुआ", "स्थिर", "बढ़ता हुआ", "नकारात्मक"],
        "answer": "Increasing",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "In the long run, all factors of production are:",
        "question_hi": "दीर्घकाल में, उत्पादन के सभी कारक होते हैं:",
        "options_en": ["Fixed", "Variable", "Semi-variable", "None of these"],
        "options_hi": ["स्थिर", "परिवर्ती", "अर्ध-परिवर्ती", "इनमें से कोई नहीं"],
        "answer": "Variable",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Which of the following is not a type of cost?",
        "question_hi": "निम्नलिखित में से कौन लागत का प्रकार नहीं है?",
        "options_en": ["Fixed cost", "Marginal cost", "Average product", "Variable cost"],
        "options_hi": ["स्थिर लागत", "सीमांत लागत", "औसत उत्पाद", "परिवर्ती लागत"],
        "answer": "Average product",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "The cost incurred on the purchase of raw materials is an example of:",
        "question_hi": "कच्चे माल की खरीद पर होने वाली लागत का उदाहरण है:",
        "options_en": ["Fixed cost", "Implicit cost", "Explicit cost", "Opportunity cost"],
        "options_hi": ["स्थिर लागत", "अप्रत्यक्ष लागत", "प्रत्यक्ष लागत", "अवसर लागत"],
        "answer": "Explicit cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "The supply curve slopes upward due to:",
        "question_hi": "आपूर्ति वक्र ऊपर की ओर ढलान करता है क्योंकि:",
        "options_en": ["Law of demand", "Law of increasing cost", "Law of diminishing returns", "Law of substitution"],
        "options_hi": ["मांग का नियम", "बढ़ती लागत का नियम", "घटती प्रतिफल का नियम", "प्रतिस्थापन का नियम"],
        "answer": "Law of increasing cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which cost remains constant in the short run?",
        "question_hi": "अल्पकाल में कौन-सी लागत स्थिर रहती है?",
        "options_en": ["Total variable cost", "Average variable cost", "Marginal cost", "Total fixed cost"],
        "options_hi": ["कुल परिवर्ती लागत", "औसत परिवर्ती लागत", "सीमांत लागत", "कुल स्थिर लागत"],
        "answer": "Total fixed cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "What is the shape of the Total Product curve in the initial stage?",
        "question_hi": "प्रारंभिक चरण में कुल उत्पाद वक्र का आकार कैसा होता है?",
        "options_en": ["Linear", "Concave", "Convex", "Vertical"],
        "options_hi": ["रैखिक", "अवक्र", "उल्टा वक्र", "लंबवत"],
        "answer": "Convex",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "When Marginal Product is zero, Total Product is:",
        "question_hi": "जब सीमांत उत्पाद शून्य होता है, तो कुल उत्पाद होता है:",
        "options_en": ["Increasing", "Constant", "Decreasing", "Negative"],
        "options_hi": ["बढ़ रहा है", "स्थिर", "घट रहा है", "ऋणात्मक"],
        "answer": "Constant",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "Average Fixed Cost curve is:",
        "question_hi": "औसत स्थिर लागत वक्र होता है:",
        "options_en": ["U-shaped", "L-shaped", "Horizontal", "Downward sloping"],
        "options_hi": ["यू-आकार", "एल-आकार", "क्षैतिज", "नीचे की ओर ढलान"],
        "answer": "Downward sloping",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "Which cost is derived from the Total Cost?",
        "question_hi": "कौन-सी लागत कुल लागत से प्राप्त होती है?",
        "options_en": ["Marginal cost", "Fixed cost", "Implicit cost", "Opportunity cost"],
        "options_hi": ["सीमांत लागत", "स्थिर लागत", "अप्रत्यक्ष लागत", "अवसर लागत"],
        "answer": "Marginal cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "Which cost curve is U-shaped due to the law of variable proportion?",
        "question_hi": "परिवर्ती अनुपात के नियम के कारण कौन-सा लागत वक्र यू-आकार का होता है?",
        "options_en": ["AFC", "AVC", "TC", "MC"],
        "options_hi": ["एएफसी", "एवीसी", "टीसी", "एमसी"],
        "answer": "AVC",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "Which concept explains the relationship between inputs and output?",
        "question_hi": "इनपुट और आउटपुट के बीच संबंध को कौन-सा सिद्धांत समझाता है?",
        "options_en": ["Production function", "Cost function", "Supply function", "Revenue function"],
        "options_hi": ["उत्पादन फलन", "लागत फलन", "आपूर्ति फलन", "राजस्व फलन"],
        "answer": "Production function",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "Returns to scale relate to:",
        "question_hi": "स्केल पर प्रतिफल संबंधित होता है:",
        "options_en": ["Short run", "Long run", "Both", "Neither"],
        "options_hi": ["अल्पकाल", "दीर्घकाल", "दोनों", "कोई नहीं"],
        "answer": "Long run",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Which of the following shows diminishing returns?",
        "question_hi": "निम्नलिखित में से कौन घटते प्रतिफल को दर्शाता है?",
        "options_en": ["TP increasing at increasing rate", "MP increasing", "MP decreasing", "AP increasing"],
        "options_hi": ["टीपी बढ़ती दर से बढ़ रहा है", "एमपी बढ़ रहा है", "एमपी घट रहा है", "एपी बढ़ रहा है"],
        "answer": "MP decreasing",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "If MC < AC, then AC will:",
        "question_hi": "यदि एमसी < एसी है, तो एसी:",
        "options_en": ["Increase", "Remain constant", "Decrease", "Become zero"],
        "options_hi": ["बढ़ेगा", "स्थिर रहेगा", "घटेगा", "शून्य हो जाएगा"],
        "answer": "Decrease",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "Which curve intersects both AVC and ATC at their minimum points?",
        "question_hi": "कौन-सा वक्र एवीसी और एटीसी दोनों को उनके न्यूनतम बिंदुओं पर काटता है?",
        "options_en": ["MC", "AFC", "MP", "AP"],
        "options_hi": ["एमसी", "एएफसी", "एमपी", "एपी"],
        "answer": "MC",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "Which revenue curve is a straight line parallel to the X-axis under perfect competition?",
        "question_hi": "पूर्ण प्रतिस्पर्धा में कौन-सा राजस्व वक्र X-अक्ष के समानांतर एक सीधी रेखा होता है?",
        "options_en": ["AR", "MR", "TR", "None"],
        "options_hi": ["एआर", "एमआर", "टीआर", "कोई नहीं"],
        "answer": "AR",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "Under which condition does producer's equilibrium occur when MR = MC?",
        "question_hi": "जब एमआर = एमसी हो, तब उत्पादक का संतुलन किस स्थिति में होता है?",
        "options_en": ["MC is rising", "MC is falling", "MC is constant", "None"],
        "options_hi": ["एमसी बढ़ रहा हो", "एमसी घट रहा हो", "एमसी स्थिर हो", "कोई नहीं"],
        "answer": "MC is rising",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "Which cost does not change with the change in output?",
        "question_hi": "कौन-सी लागत उत्पादन में परिवर्तन के साथ नहीं बदलती?",
        "options_en": ["Total variable cost", "Total cost", "Total fixed cost", "Marginal cost"],
        "options_hi": ["कुल परिवर्ती लागत", "कुल लागत", "कुल स्थिर लागत", "सीमांत लागत"],
        "answer": "Total fixed cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "What happens to marginal product when total product increases at a diminishing rate?",
        "question_hi": "जब कुल उत्पाद घटती दर से बढ़ता है, तब सीमांत उत्पाद का क्या होता है?",
        "options_en": ["Increases", "Constant", "Decreases", "Becomes zero"],
        "options_hi": ["बढ़ता है", "स्थिर रहता है", "घटता है", "शून्य हो जाता है"],
        "answer": "Decreases",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "What is the behavior of AVC when MP is rising?",
        "question_hi": "जब एमपी बढ़ रहा होता है, तो एवीसी का व्यवहार क्या होता है?",
        "options_en": ["Rising", "Falling", "Constant", "Zero"],
        "options_hi": ["बढ़ रहा है", "घट रहा है", "स्थिर", "शून्य"],
        "answer": "Falling",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "In economics, which cost includes both implicit and explicit costs?",
        "question_hi": "अर्थशास्त्र में, कौन-सी लागत प्रत्यक्ष और अप्रत्यक्ष दोनों लागतों को शामिल करती है?",
        "options_en": ["Accounting cost", "Economic cost", "Fixed cost", "Variable cost"],
        "options_hi": ["लेखा लागत", "आर्थिक लागत", "स्थिर लागत", "परिवर्ती लागत"],
        "answer": "Economic cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "What is the nature of the supply curve?",
        "question_hi": "आपूर्ति वक्र की प्रकृति क्या होती है?",
        "options_en": ["Downward sloping", "Upward sloping", "Horizontal", "Vertical"],
        "options_hi": ["नीचे की ओर ढलान", "ऊपर की ओर ढलान", "क्षैतिज", "लंबवत"],
        "answer": "Upward sloping",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "Which of the following statements is true about MC and MP?",
        "question_hi": "निम्नलिखित में से कौन-सा कथन एमसी और एमपी के बारे में सही है?",
        "options_en": ["When MP rises, MC rises", "When MP falls, MC falls", "When MP rises, MC falls", "No relation"],
        "options_hi": ["जब एमपी बढ़ता है, एमसी बढ़ता है", "जब एमपी घटता है, एमसी घटता है", "जब एमपी बढ़ता है, एमसी घटता है", "कोई संबंध नहीं"],
        "answer": "When MP rises, MC falls",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "The point where MC = MR is called:",
        "question_hi": "जहाँ एमसी = एमआर होता है उसे कहते हैं:",
        "options_en": ["Break-even point", "Shut down point", "Producer’s equilibrium", "None of these"],
        "options_hi": ["ब्रेक-ईवन बिंदु", "बंद बिंदु", "उत्पादक का संतुलन", "इनमें से कोई नहीं"],
        "answer": "Producer’s equilibrium",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "In perfect competition, marginal revenue is equal to:",
        "question_hi": "पूर्ण प्रतियोगिता में सीमांत राजस्व किसके बराबर होता है?",
        "options_en": ["Total revenue", "Average revenue", "Profit", "Price only"],
        "options_hi": ["कुल राजस्व", "औसत राजस्व", "लाभ", "केवल मूल्य"],
        "answer": "Average revenue",
        "attempted": false,
        "selected": ""
      }
];

// A
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
