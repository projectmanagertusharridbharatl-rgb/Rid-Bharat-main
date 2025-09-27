const questions = [
    {
        "num": 1,
        "question_en": "What is the definition of supply?",
        "question_hi": "आपूर्ति की परिभाषा क्या है?",
        "options_en": [
          "Desire to buy goods",
          "Quantity of goods a seller is willing to sell at a price",
          "Quantity of goods demanded by consumers",
          "Goods available in stock"
        ],
        "options_hi": [
          "वस्तुओं को खरीदने की इच्छा",
          "किसी मूल्य पर विक्रेता द्वारा बेची जाने वाली वस्तुओं की मात्रा",
          "उपभोक्ताओं द्वारा माँगी गई वस्तुओं की मात्रा",
          "भंडार में उपलब्ध वस्तुएँ"
        ],
        "answer": "Quantity of goods a seller is willing to sell at a price",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "Which of the following is a feature of supply?",
        "question_hi": "निम्नलिखित में से कौन आपूर्ति की विशेषता है?",
        "options_en": ["Depends on desire", "Depends on price", "Depends on population", "Depends on demand"],
        "options_hi": ["इच्छा पर निर्भर", "मूल्य पर निर्भर", "जनसंख्या पर निर्भर", "माँग पर निर्भर"],
        "answer": "Depends on price",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "What does the Law of Supply state?",
        "question_hi": "आपूर्ति का नियम क्या बताता है?",
        "options_en": [
          "Price and demand are inversely related",
          "Price and supply are directly related",
          "Price and cost are inversely related",
          "Price does not affect supply"
        ],
        "options_hi": [
          "मूल्य और माँग में विपरीत संबंध है",
          "मूल्य और आपूर्ति में सीधा संबंध है",
          "मूल्य और लागत में विपरीत संबंध है",
          "मूल्य का आपूर्ति पर कोई प्रभाव नहीं पड़ता"
        ],
        "answer": "Price and supply are directly related",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "Which of these is a factor affecting supply?",
        "question_hi": "इनमें से कौन-सा आपूर्ति को प्रभावित करने वाला कारक है?",
        "options_en": ["Consumer taste", "Technology", "Income", "Population"],
        "options_hi": ["उपभोक्ता की पसंद", "प्रौद्योगिकी", "आय", "जनसंख्या"],
        "answer": "Technology",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "What happens to supply if the price of the good increases?",
        "question_hi": "यदि वस्तु का मूल्य बढ़ता है तो आपूर्ति का क्या होता है?",
        "options_en": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
        "options_hi": ["बढ़ती है", "घटती है", "स्थिर रहती है", "शून्य हो जाती है"],
        "answer": "Increases",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "Which of the following is not a component of cost of production?",
        "question_hi": "निम्नलिखित में से कौन उत्पादन लागत का घटक नहीं है?",
        "options_en": ["Raw material", "Wages", "Advertising", "Transportation"],
        "options_hi": ["कच्चा माल", "वेतन", "विज्ञापन", "परिवहन"],
        "answer": "Advertising",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "What is Total Cost (TC)?",
        "question_hi": "कुल लागत (टीसी) क्या है?",
        "options_en": [
          "Fixed cost only",
          "Variable cost only",
          "Sum of fixed and variable cost",
          "Average cost"
        ],
        "options_hi": [
          "केवल स्थिर लागत",
          "केवल परिवर्ती लागत",
          "स्थिर और परिवर्ती लागत का योग",
          "औसत लागत"
        ],
        "answer": "Sum of fixed and variable cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "Which of the following is a short-run cost?",
        "question_hi": "निम्नलिखित में से कौन एक अल्पकालिक लागत है?",
        "options_en": ["Variable cost", "Total cost", "Fixed cost", "All of these"],
        "options_hi": ["परिवर्ती लागत", "कुल लागत", "स्थिर लागत", "उपरोक्त सभी"],
        "answer": "All of these",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "What is Marginal Cost (MC)?",
        "question_hi": "सीमांत लागत (MC) क्या होती है?",
        "options_en": [
          "Cost per unit",
          "Change in total cost for one more unit",
          "Total cost",
          "Fixed cost per unit"
        ],
        "options_hi": [
          "प्रति इकाई लागत",
          "एक अतिरिक्त इकाई के लिए कुल लागत में परिवर्तन",
          "कुल लागत",
          "प्रति इकाई स्थिर लागत"
        ],
        "answer": "Change in total cost for one more unit",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "What is the shape of a normal supply curve?",
        "question_hi": "सामान्य आपूर्ति वक्र का आकार कैसा होता है?",
        "options_en": ["Upward sloping", "Downward sloping", "Horizontal", "Vertical"],
        "options_hi": ["ऊपर की ओर झुका हुआ", "नीचे की ओर झुका हुआ", "क्षैतिज", "ऊर्ध्वाधर"],
        "answer": "Upward sloping",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "The law of supply is based on:",
        "question_hi": "आपूर्ति का नियम किस पर आधारित है?",
        "options_en": ["Law of diminishing marginal utility", "Law of increasing cost", "Profit motive", "Substitution effect"],
        "options_hi": ["सीमांत उपयोगिता की घटने का नियम", "लागत में वृद्धि का नियम", "लाभ प्रेरणा", "प्रतिस्थापन प्रभाव"],
        "answer": "Profit motive",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "Which cost remains constant in the short run?",
        "question_hi": "अल्पकाल में कौन-सी लागत स्थिर रहती है?",
        "options_en": ["Total cost", "Fixed cost", "Variable cost", "Marginal cost"],
        "options_hi": ["कुल लागत", "स्थिर लागत", "परिवर्ती लागत", "सीमांत लागत"],
        "answer": "Fixed cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "What does Average Cost (AC) mean?",
        "question_hi": "औसत लागत (AC) का क्या अर्थ है?",
        "options_en": [
          "Total cost divided by output",
          "Fixed cost per unit",
          "Cost of last unit",
          "Sum of all marginal costs"
        ],
        "options_hi": [
          "कुल लागत ÷ उत्पादन",
          "प्रति इकाई स्थिर लागत",
          "अंतिम इकाई की लागत",
          "सभी सीमांत लागतों का योग"
        ],
        "answer": "Total cost divided by output",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "In which situation will supply curve shift to the right?",
        "question_hi": "किस स्थिति में आपूर्ति वक्र दाएँ खिसकेगा?",
        "options_en": ["Increase in tax", "Improvement in technology", "Decrease in subsidy", "Fall in market price"],
        "options_hi": ["कर में वृद्धि", "प्रौद्योगिकी में सुधार", "सब्सिडी में कमी", "बाजार मूल्य में गिरावट"],
        "answer": "Improvement in technology",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "Which of the following shows inverse relation between inputs and outputs?",
        "question_hi": "निम्न में से कौन इनपुट और आउटपुट के बीच विपरीत संबंध दर्शाता है?",
        "options_en": ["Law of demand", "Law of variable proportion", "Law of returns to scale", "Law of marginal utility"],
        "options_hi": ["मांग का नियम", "परिवर्ती अनुपात का नियम", "पैमाने की प्रतिफल का नियम", "सीमांत उपयोगिता का नियम"],
        "answer": "Law of variable proportion",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "Which cost is also called overhead cost?",
        "question_hi": "किस लागत को अधिरोपित लागत भी कहा जाता है?",
        "options_en": ["Total cost", "Fixed cost", "Variable cost", "Marginal cost"],
        "options_hi": ["कुल लागत", "स्थिर लागत", "परिवर्ती लागत", "सीमांत लागत"],
        "answer": "Fixed cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "Which factor is not considered under law of supply?",
        "question_hi": "आपूर्ति के नियम में कौन-सा कारक नहीं आता?",
        "options_en": ["Price of the good", "Technology", "Cost of production", "Weather"],
        "options_hi": ["वस्तु का मूल्य", "प्रौद्योगिकी", "उत्पादन की लागत", "मौसम"],
        "answer": "Weather",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "Marginal cost cuts average cost at its:",
        "question_hi": "सीमांत लागत, औसत लागत को किस बिंदु पर काटती है?",
        "options_en": ["Maximum", "Minimum", "Midpoint", "Zero point"],
        "options_hi": ["अधिकतम", "न्यूनतम", "मध्य बिंदु", "शून्य बिंदु"],
        "answer": "Minimum",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "If total cost = ₹500 and output = 10 units, then AC is:",
        "question_hi": "यदि कुल लागत ₹500 और उत्पादन 10 यूनिट है, तो औसत लागत (AC) है:",
        "options_en": ["₹50", "₹5", "₹10", "₹100"],
        "options_hi": ["₹50", "₹5", "₹10", "₹100"],
        "answer": "₹50",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "Which is not a type of supply?",
        "question_hi": "निम्नलिखित में से कौन आपूर्ति का प्रकार नहीं है?",
        "options_en": ["Joint supply", "Composite supply", "Individual supply", "Negative supply"],
        "options_hi": ["संयुक्त आपूर्ति", "संयुक्त मिश्रित आपूर्ति", "व्यक्तिगत आपूर्ति", "ऋणात्मक आपूर्ति"],
        "answer": "Negative supply",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "Which of the following causes a movement along the supply curve?",
        "question_hi": "निम्न में से कौन आपूर्ति वक्र पर गति का कारण बनता है?",
        "options_en": ["Change in technology", "Change in price", "Change in input cost", "Government policy"],
        "options_hi": ["प्रौद्योगिकी में परिवर्तन", "मूल्य में परिवर्तन", "इनपुट लागत में परिवर्तन", "सरकारी नीति"],
        "answer": "Change in price",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "Which of the following costs becomes zero when output is zero?",
        "question_hi": "निम्न में से कौन-सी लागत तब शून्य हो जाती है जब उत्पादन शून्य हो?",
        "options_en": ["Fixed cost", "Variable cost", "Total cost", "Average cost"],
        "options_hi": ["स्थिर लागत", "परिवर्ती लागत", "कुल लागत", "औसत लागत"],
        "answer": "Variable cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "The vertical difference between TC and TVC gives:",
        "question_hi": "कुल लागत (TC) और कुल परिवर्ती लागत (TVC) के बीच का लंबवत अंतर दर्शाता है:",
        "options_en": ["Average cost", "Fixed cost", "Marginal cost", "Revenue"],
        "options_hi": ["औसत लागत", "स्थिर लागत", "सीमांत लागत", "राजस्व"],
        "answer": "Fixed cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "Total cost is the sum of:",
        "question_hi": "कुल लागत किसका योग है?",
        "options_en": ["AC + MC", "TFC + TVC", "TR + TC", "MC + AVC"],
        "options_hi": ["औसत लागत + सीमांत लागत", "TFC + TVC", "कुल आय + कुल लागत", "MC + AVC"],
        "answer": "TFC + TVC",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "At shutdown point, firm covers:",
        "question_hi": "शटडाउन बिंदु पर फर्म किस लागत को कवर करती है?",
        "options_en": ["Fixed cost only", "Variable cost only", "Total cost", "No cost"],
        "options_hi": ["केवल स्थिर लागत", "केवल परिवर्ती लागत", "कुल लागत", "कोई लागत नहीं"],
        "answer": "Variable cost only",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 26,
        "question_en": "What is marginal cost?",
        "question_hi": "सीमांत लागत क्या है?",
        "options_en": ["Cost of producing one additional unit", "Total cost of production", "Cost of raw materials", "Average cost of production"],
        "options_hi": ["एक अतिरिक्त इकाई का उत्पादन करने की लागत", "उत्पादन की कुल लागत", "कच्चे माल की लागत", "उत्पादन की औसत लागत"],
        "answer": "Cost of producing one additional unit",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "Which cost remains constant in the short run?",
        "question_hi": "लघु अवधि में कौन-सी लागत स्थिर रहती है?",
        "options_en": ["Variable Cost", "Fixed Cost", "Total Cost", "Marginal Cost"],
        "options_hi": ["परिवर्ती लागत", "स्थिर लागत", "कुल लागत", "सीमांत लागत"],
        "answer": "Fixed Cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "What is meant by returns to scale?",
        "question_hi": "मापन पर प्रतिफल का क्या अर्थ है?",
        "options_en": ["Change in output due to change in scale of inputs", "Change in cost", "Change in supply", "Change in demand"],
        "options_hi": ["इनपुट के पैमाने में बदलाव से उत्पादन में बदलाव", "लागत में बदलाव", "आपूर्ति में बदलाव", "माँग में बदलाव"],
        "answer": "Change in output due to change in scale of inputs",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "In which stage of production does the Law of Variable Proportion operate?",
        "question_hi": "उत्पादन की किस अवस्था में परिवर्तनशील अनुपात का नियम कार्य करता है?",
        "options_en": ["Long run", "Short run", "Initial stage", "Final stage"],
        "options_hi": ["दीर्घ अवधि", "लघु अवधि", "प्रारंभिक अवस्था", "अंतिम अवस्था"],
        "answer": "Short run",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "Which concept is used in producer's equilibrium using marginal approach?",
        "question_hi": "सीमांत दृष्टिकोण से उत्पादक संतुलन में किस अवधारणा का प्रयोग होता है?",
        "options_en": ["MR = MC", "AR = AC", "TR = TC", "MR > MC"],
        "options_hi": ["MR = MC", "AR = AC", "TR = TC", "MR > MC"],
        "answer": "MR = MC",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "What is average fixed cost?",
        "question_hi": "औसत स्थिर लागत क्या है?",
        "options_en": ["Total fixed cost divided by output", "Fixed cost per unit of output", "Total fixed cost", "Total cost divided by output"],
        "options_hi": ["कुल स्थिर लागत को उत्पादन से विभाजित करना", "प्रत्येक इकाई उत्पादन की स्थिर लागत", "कुल स्थिर लागत", "कुल लागत को उत्पादन से विभाजित करना"],
        "answer": "Total fixed cost divided by output",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is the law of diminishing marginal returns?",
        "question_hi": "सीमांत लाभ में घटती दर का नियम क्या है?",
        "options_en": ["Increase in output due to additional units of input", "Decrease in marginal product with additional units of input", "No change in output with additional units of input", "Increase in cost with increase in input"],
        "options_hi": ["इनपुट की अतिरिक्त इकाइयों के कारण उत्पादन में वृद्धि", "इनपुट की अतिरिक्त इकाइयों के साथ सीमांत उत्पाद में कमी", "इनपुट की अतिरिक्त इकाइयों के साथ उत्पादन में कोई बदलाव नहीं", "इनपुट में वृद्धि के साथ लागत में वृद्धि"],
        "answer": "Decrease in marginal product with additional units of input",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "What is the difference between total cost and total variable cost?",
        "question_hi": "कुल लागत और कुल परिवर्ती लागत में क्या अंतर है?",
        "options_en": ["Total cost includes both fixed and variable costs, while total variable cost includes only variable costs.", "Total cost is only variable costs, while total variable cost is the sum of fixed and variable costs.", "Total cost is the sum of fixed costs and total variable costs, while total variable cost includes only variable costs.", "There is no difference."],
        "options_hi": ["कुल लागत में स्थिर और परिवर्ती दोनों लागतें शामिल हैं, जबकि कुल परिवर्ती लागत में केवल परिवर्ती लागतें शामिल होती हैं।", "कुल लागत केवल परिवर्ती लागतें हैं, जबकि कुल परिवर्ती लागत स्थिर और परिवर्ती लागतों का योग है।", "कुल लागत में स्थिर लागत और कुल परिवर्ती लागत का योग होता है, जबकि कुल परिवर्ती लागत में केवल परिवर्ती लागतें शामिल होती हैं।", "कोई अंतर नहीं है।"],
        "answer": "Total cost includes both fixed and variable costs, while total variable cost includes only variable costs.",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "What is the formula for calculating average cost?",
        "question_hi": "औसत लागत की गणना का सूत्र क्या है?",
        "options_en": ["Total cost divided by output", "Fixed cost divided by output", "Variable cost divided by output", "Total cost divided by total fixed cost"],
        "options_hi": ["कुल लागत को उत्पादन से विभाजित करना", "स्थिर लागत को उत्पादन से विभाजित करना", "परिवर्ती लागत को उत्पादन से विभाजित करना", "कुल लागत को कुल स्थिर लागत से विभाजित करना"],
        "answer": "Total cost divided by output",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "What is the point of production where marginal cost equals marginal revenue?",
        "question_hi": "उत्पादन का वह बिंदु कहाँ है जहाँ सीमांत लागत सीमांत राजस्व के बराबर होती है?",
        "options_en": ["Profit maximization point", "Revenue maximization point", "Break-even point", "Shutdown point"],
        "options_hi": ["लाभ अधिकतमकरण बिंदु", "राजस्व अधिकतमकरण बिंदु", "ब्रेक-ईवन बिंदु", "शटडाउन बिंदु"],
        "answer": "Profit maximization point",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What is the point of production where average cost equals average revenue?",
        "question_hi": "उत्पादन का वह बिंदु कहाँ है जहाँ औसत लागत औसत राजस्व के बराबर होती है?",
        "options_en": ["Break-even point", "Profit maximization point", "Revenue maximization point", "Shutdown point"],
        "options_hi": ["ब्रेक-ईवन बिंदु", "लाभ अधिकतमकरण बिंदु", "राजस्व अधिकतमकरण बिंदु", "शटडाउन बिंदु"],
        "answer": "Break-even point",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "What is the condition for the producer's equilibrium in the short run?",
        "question_hi": "लघु अवधि में उत्पादक संतुलन की स्थिति क्या है?",
        "options_en": ["MR = MC", "AC = AR", "MC = ATC", "TR = TC"],
        "options_hi": ["MR = MC", "AC = AR", "MC = ATC", "TR = TC"],
        "answer": "MR = MC",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "What is the difference between total product and marginal product?",
        "question_hi": "कुल उत्पाद और सीमांत उत्पाद में क्या अंतर है?",
        "options_en": ["Total product is the total output, and marginal product is the change in output due to one additional unit of input.", "Total product is fixed, and marginal product is variable.", "Total product is the average output, and marginal product is the total output.", "Total product and marginal product are the same."],
        "options_hi": ["कुल उत्पाद कुल उत्पादन है, और सीमांत उत्पाद वह बदलाव है जो एक अतिरिक्त इकाई इनपुट के कारण होता है।", "कुल उत्पाद स्थिर है, और सीमांत उत्पाद परिवर्ती है।", "कुल उत्पाद औसत उत्पादन है, और सीमांत उत्पाद कुल उत्पादन है।", "कुल उत्पाद और सीमांत उत्पाद समान हैं।"],
        "answer": "Total product is the total output, and marginal product is the change in output due to one additional unit of input.",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "What happens to the marginal product when the law of diminishing marginal returns is in operation?",
        "question_hi": "जब सीमांत लाभ में घटती दर का नियम लागू होता है, तो सीमांत उत्पाद का क्या होता है?",
        "options_en": ["It increases", "It decreases", "It remains constant", "It becomes zero"],
        "options_hi": ["यह बढ़ता है", "यह घटता है", "यह स्थिर रहता है", "यह शून्य हो जाता है"],
        "answer": "It decreases",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "When does the firm reach the break-even point?",
        "question_hi": "फर्म ब्रेक-ईवन बिंदु पर कब पहुँचती है?",
        "options_en": ["When total revenue equals total cost", "When total revenue exceeds total cost", "When marginal cost exceeds marginal revenue", "When average cost equals average revenue"],
        "options_hi": ["जब कुल राजस्व कुल लागत के बराबर होता है", "जब कुल राजस्व कुल लागत से अधिक होता है", "जब सीमांत लागत सीमांत राजस्व से अधिक होती है", "जब औसत लागत औसत राजस्व के बराबर होती है"],
        "answer": "When total revenue equals total cost",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "What is the shape of the total cost curve?",
        "question_hi": "कुल लागत वक्र का आकार क्या है?",
        "options_en": ["Upward sloping", "Downward sloping", "Horizontal", "Vertical"],
        "options_hi": ["ऊपर की ओर झुका हुआ", "नीचे की ओर झुका हुआ", "क्षैतिज", "ऊर्ध्वाधर"],
        "answer": "Upward sloping",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "In the short run, which costs are considered variable?",
        "question_hi": "लघु अवधि में, कौन सी लागतें परिवर्ती मानी जाती हैं?",
        "options_en": ["Costs that change with the level of output", "Costs that do not change with output", "Costs that are fixed", "All costs are variable"],
        "options_hi": ["वह लागतें जो उत्पादन स्तर के साथ बदलती हैं", "वह लागतें जो उत्पादन के साथ नहीं बदलतीं", "वह लागतें जो स्थिर होती हैं", "सभी लागतें परिवर्ती हैं"],
        "answer": "Costs that change with the level of output",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "What does the total product curve show?",
        "question_hi": "कुल उत्पाद वक्र क्या दिखाता है?",
        "options_en": ["Relationship between inputs and output", "Marginal product of labor", "Total cost of production", "Total fixed costs"],
        "options_hi": ["इनपुट और उत्पादन के बीच संबंध", "श्रम का सीमांत उत्पाद", "उत्पादन की कुल लागत", "कुल स्थिर लागत"],
        "answer": "Relationship between inputs and output",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "Which of the following is true about the law of variable proportions?",
        "question_hi": "निम्नलिखित में से कौन सा परिवर्तनशील अनुपात के नियम के बारे में सही है?",
        "options_en": ["The total product increases at a diminishing rate", "The total product decreases", "The marginal product increases", "The total product remains constant"],
        "options_hi": ["कुल उत्पाद घटती दर से बढ़ता है", "कुल उत्पाद घटता है", "सीमांत उत्पाद बढ़ता है", "कुल उत्पाद स्थिर रहता है"],
        "answer": "The total product increases at a diminishing rate",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "What is the main focus of production theory?",
        "question_hi": "उत्पादन सिद्धांत का मुख्य ध्यान क्या है?",
        "options_en": ["To study the relationship between inputs and outputs", "To study consumer behavior", "To study government intervention", "To study the law of supply"],
        "options_hi": ["इनपुट और आउटपुट के बीच संबंध का अध्ययन करना", "उपभोक्ता व्यवहार का अध्ययन करना", "सरकारी हस्तक्षेप का अध्ययन करना", "आपूर्ति के नियम का अध्ययन करना"],
        "answer": "To study the relationship between inputs and outputs",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "In the long run, all costs are considered:",
        "question_hi": "दीर्घ अवधि में, सभी लागतों को किस रूप में माना जाता है?",
        "options_en": ["Variable costs", "Fixed costs", "Semi-variable costs", "Total costs"],
        "options_hi": ["परिवर्ती लागत", "स्थिर लागत", "आधिकारिक लागत", "कुल लागत"],
        "answer": "Variable costs",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "Which of the following is true for the average variable cost curve?",
        "question_hi": "निम्नलिखित में से कौन सा औसत परिवर्ती लागत वक्र के लिए सही है?",
        "options_en": ["It is U-shaped", "It is upward sloping", "It is downward sloping", "It is a straight line"],
        "options_hi": ["यह U-आकृति का होता है", "यह ऊपर की ओर झुका होता है", "यह नीचे की ओर झुका होता है", "यह एक सीधी रेखा होती है"],
        "answer": "It is U-shaped",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "The firm's supply curve in the short run is determined by:",
        "question_hi": "लघु अवधि में फर्म की आपूर्ति वक्र निर्धारित होती है:",
        "options_en": ["Marginal cost curve", "Average cost curve", "Total cost curve", "Average variable cost curve"],
        "options_hi": ["सीमांत लागत वक्र", "औसत लागत वक्र", "कुल लागत वक्र", "औसत परिवर्ती लागत वक्र"],
        "answer": "Marginal cost curve",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "The average product curve is always:",
        "question_hi": "औसत उत्पाद वक्र हमेशा किस प्रकार का होता है?",
        "options_en": ["U-shaped", "Downward sloping", "Horizontal", "Vertical"],
        "options_hi": ["U-आकृति का", "नीचे की ओर झुका हुआ", "क्षैतिज", "ऊर्ध्वाधर"],
        "answer": "U-shaped",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What happens when the marginal product of labor is less than the average product?",
        "question_hi": "जब श्रम का सीमांत उत्पाद औसत उत्पाद से कम होता है तो क्या होता है?",
        "options_en": ["The average product starts to decline", "The average product increases", "The marginal cost decreases", "The marginal cost increases"],
        "options_hi": ["औसत उत्पाद में गिरावट आनी शुरू हो जाती है", "औसत उत्पाद बढ़ता है", "सीमांत लागत में कमी आती है", "सीमांत लागत बढ़ती है"],
        "answer": "The average product starts to decline",
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
