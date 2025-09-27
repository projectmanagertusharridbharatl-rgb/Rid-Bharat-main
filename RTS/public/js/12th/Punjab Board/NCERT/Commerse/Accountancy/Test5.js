const questions = [
    {
        "num": 1,
        "question_en": "What is the partnership deed?",
        "question_hi": "साझेदारी दस्तावेज़ क्या है?",
        "options_en": ["A written agreement between partners", "A verbal agreement between partners", "An agreement with the bank", "None of the above"],
        "options_hi": ["साझेदारों के बीच एक लिखित समझौता", "साझेदारों के बीच एक मौखिक समझौता", "बैंक के साथ एक समझौता", "इनमें से कोई नहीं"],
        "answer": "A written agreement between partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 2,
        "question_en": "What is the maximum number of partners in a partnership firm under the Indian Partnership Act?",
        "question_hi": "भारतीय साझेदारी अधिनियम के तहत साझेदारी फर्म में अधिकतम कितने साझेदार हो सकते हैं?",
        "options_en": ["10", "20", "50", "Unlimited"],
        "options_hi": ["10", "20", "50", "सीमित नहीं"],
        "answer": "20",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 3,
        "question_en": "In a partnership, if no agreement is made, how will the profits be shared?",
        "question_hi": "साझेदारी में, यदि कोई समझौता नहीं किया गया है, तो लाभ कैसे बाँटे जाएंगे?",
        "options_en": ["Equally", "In the ratio of capital", "In the ratio of work", "According to the number of partners"],
        "options_hi": ["समान रूप से", "पूंजी के अनुपात में", "काम के अनुपात में", "साझेदारों की संख्या के अनुसार"],
        "answer": "Equally",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 4,
        "question_en": "What is the capital of a partnership firm?",
        "question_hi": "साझेदारी फर्म की पूंजी क्या है?",
        "options_en": ["The total investment made by the partners", "The profit earned by the partnership", "The amount invested by the government", "None of the above"],
        "options_hi": ["साझेदारों द्वारा की गई कुल निवेश", "साझेदारी द्वारा कमाया गया लाभ", "सरकार द्वारा निवेश की गई राशि", "इनमें से कोई नहीं"],
        "answer": "The total investment made by the partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 5,
        "question_en": "What is the interest rate on capital in a partnership?",
        "question_hi": "साझेदारी में पूंजी पर ब्याज की दर क्या है?",
        "options_en": ["As agreed by the partners", "As per the market rate", "Fixed by the government", "None of the above"],
        "options_hi": ["साझेदारों द्वारा सहमति के अनुसार", "बाजार दर के अनुसार", "सरकार द्वारा निर्धारित", "इनमें से कोई नहीं"],
        "answer": "As agreed by the partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 6,
        "question_en": "In case of dissolution of partnership, who is responsible for the settlement of liabilities?",
        "question_hi": "साझेदारी की समाप्ति की स्थिति में, देनदारियों के निपटान के लिए कौन जिम्मेदार है?",
        "options_en": ["All the partners", "Only the partner who caused the dissolution", "The government", "None of the above"],
        "options_hi": ["सभी साझेदार", "केवल वह साझेदार जिसने समाप्ति की", "सरकार", "इनमें से कोई नहीं"],
        "answer": "All the partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 7,
        "question_en": "What is the partnership agreement?",
        "question_hi": "साझेदारी समझौता क्या है?",
        "options_en": ["A formal contract between partners", "A verbal understanding between partners", "An agreement between a firm and a customer", "None of the above"],
        "options_hi": ["साझेदारों के बीच एक औपचारिक अनुबंध", "साझेदारों के बीच एक मौखिक समझौता", "फर्म और ग्राहक के बीच एक समझौता", "इनमें से कोई नहीं"],
        "answer": "A formal contract between partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 8,
        "question_en": "What is the nature of a partnership firm?",
        "question_hi": "साझेदारी फर्म का स्वभाव क्या है?",
        "options_en": ["A separate legal entity", "An association of persons", "A corporation", "None of the above"],
        "options_hi": ["एक अलग कानूनी इकाई", "व्यक्तियों का एक संघ", "एक निगम", "इनमें से कोई नहीं"],
        "answer": "An association of persons",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 9,
        "question_en": "In a partnership, if no agreement regarding the sharing of losses is made, how will the losses be shared?",
        "question_hi": "साझेदारी में, यदि हानि को बाँटने के बारे में कोई समझौता नहीं किया गया है, तो हानि को कैसे बाँटा जाएगा?",
        "options_en": ["Equally", "In the ratio of capital", "In the ratio of profits", "According to the number of partners"],
        "options_hi": ["समान रूप से", "पूंजी के अनुपात में", "लाभ के अनुपात में", "साझेदारों की संख्या के अनुसार"],
        "answer": "Equally",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 10,
        "question_en": "What is the treatment of profit in a partnership?",
        "question_hi": "साझेदारी में लाभ का उपचार क्या है?",
        "options_en": ["Shared among the partners as per the agreement", "Given to the government as tax", "Not distributed", "None of the above"],
        "options_hi": ["समझौते के अनुसार साझेदारों में बाँटा जाता है", "सरकार को कर के रूप में दिया जाता है", "वितरित नहीं किया जाता", "इनमें से कोई नहीं"],
        "answer": "Shared among the partners as per the agreement",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 11,
        "question_en": "What is the method of recording the partnership firm's financial transactions?",
        "question_hi": "साझेदारी फर्म के वित्तीय लेन-देन को दर्ज करने का तरीका क्या है?",
        "options_en": ["Double entry system", "Single entry system", "Cash system", "None of the above"],
        "options_hi": ["डबल एंट्री प्रणाली", "सिंगल एंट्री प्रणाली", "नकद प्रणाली", "इनमें से कोई नहीं"],
        "answer": "Double entry system",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 12,
        "question_en": "What is the 'interest on capital' in a partnership?",
        "question_hi": "साझेदारी में 'पूंजी पर ब्याज' क्या है?",
        "options_en": ["The return on the capital invested by the partners", "The salary of the partners", "The payment made to creditors", "None of the above"],
        "options_hi": ["साझेदारों द्वारा निवेश की गई पूंजी पर प्राप्त लाभ", "साझेदारों की वेतन", "कर्जदाताओं को किया गया भुगतान", "इनमें से कोई नहीं"],
        "answer": "The return on the capital invested by the partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 13,
        "question_en": "In a partnership, how are profits and losses typically shared?",
        "question_hi": "साझेदारी में, लाभ और हानि को सामान्यत: कैसे बाँटा जाता है?",
        "options_en": ["According to the agreement", "Equally", "Based on capital contribution", "Based on the number of partners"],
        "options_hi": ["समझौते के अनुसार", "समान रूप से", "पूंजी योगदान के आधार पर", "साझेदारों की संख्या के आधार पर"],
        "answer": "According to the agreement",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 14,
        "question_en": "When a new partner is admitted, what happens to the existing partnership?",
        "question_hi": "जब एक नया साझेदार प्रवेश करता है, तो मौजूदा साझेदारी का क्या होता है?",
        "options_en": ["It continues as it is", "It is dissolved", "It is modified", "None of the above"],
        "options_hi": ["यह वैसे का वैसा चलता है", "यह समाप्त हो जाती है", "यह संशोधित होती है", "इनमें से कोई नहीं"],
        "answer": "It is modified",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 15,
        "question_en": "What is the treatment of goodwill when a partner retires?",
        "question_hi": "जब कोई साझेदार सेवानिवृत्त होता है, तो गुडविल का उपचार क्या होता है?",
        "options_en": ["It is written off", "It is transferred to the remaining partners", "It is divided among all the partners", "None of the above"],
        "options_hi": ["इसे समाप्त कर दिया जाता है", "इसे शेष साझेदारों को स्थानांतरित किया जाता है", "इसे सभी साझेदारों में बाँटा जाता है", "इनमें से कोई नहीं"],
        "answer": "It is transferred to the remaining partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 16,
        "question_en": "What is the term used for the distribution of profits and losses among partners?",
        "question_hi": "साझेदारों में लाभ और हानि का वितरण करने के लिए कौन सा शब्द प्रयोग किया जाता है?",
        "options_en": ["Profit and loss sharing ratio", "Capital ratio", "Fixed ratio", "None of the above"],
        "options_hi": ["लाभ और हानि वितरण अनुपात", "पूंजी अनुपात", "नियत अनुपात", "इनमें से कोई नहीं"],
        "answer": "Profit and loss sharing ratio",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 17,
        "question_en": "What is the method used for the valuation of goodwill in a partnership?",
        "question_hi": "साझेदारी में गुडविल के मूल्यांकन के लिए कौन सा तरीका उपयोग किया जाता है?",
        "options_en": ["Average profit method", "Capitalization method", "Super profit method", "All of the above"],
        "options_hi": ["औसत लाभ तरीका", "पूंजीकरण तरीका", "अतिरिक्त लाभ तरीका", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 18,
        "question_en": "What happens when a partner's capital is withdrawn?",
        "question_hi": "जब एक साझेदार की पूंजी निकाली जाती है, तो क्या होता है?",
        "options_en": ["The capital is transferred to the remaining partners", "The partnership is dissolved", "The partnership continues", "None of the above"],
        "options_hi": ["पूंजी शेष साझेदारों को स्थानांतरित कर दी जाती है", "साझेदारी समाप्त हो जाती है", "साझेदारी जारी रहती है", "इनमें से कोई नहीं"],
        "answer": "The capital is transferred to the remaining partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 19,
        "question_en": "What is the difference between a limited liability partnership and a general partnership?",
        "question_hi": "सीमित देनदारियों वाली साझेदारी और सामान्य साझेदारी में क्या अंतर है?",
        "options_en": ["In a limited liability partnership, partners have limited liability", "In a general partnership, partners have unlimited liability", "Both A and B", "None of the above"],
        "options_hi": ["सीमित देनदारियों वाली साझेदारी में, साझेदारों की देनदारी सीमित होती है", "सामान्य साझेदारी में, साझेदारों की देनदारी असीमित होती है", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer": "Both A and B",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 20,
        "question_en": "What is the capital ratio in a partnership firm?",
        "question_hi": "साझेदारी फर्म में पूंजी अनुपात क्या है?",
        "options_en": ["The ratio of capital invested by partners", "The ratio of profits earned by partners", "The ratio of work done by partners", "All of the above"],
        "options_hi": ["साझेदारों द्वारा निवेश की गई पूंजी का अनुपात", "साझेदारों द्वारा कमाए गए लाभ का अनुपात", "साझेदारों द्वारा किए गए काम का अनुपात", "इनमें से सभी"],
        "answer": "The ratio of capital invested by partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 21,
        "question_en": "What is the treatment of profit on revaluation of assets during the dissolution of partnership?",
        "question_hi": "साझेदारी की समाप्ति के दौरान संपत्तियों के पुनर्मूल्यांकन पर लाभ का उपचार क्या होता है?",
        "options_en": ["It is credited to the capital accounts of the partners", "It is paid to the creditors", "It is treated as revenue", "None of the above"],
        "options_hi": ["इसे साझेदारों के पूंजी खातों में जमा किया जाता है", "इसे कर्जदाताओं को भुगतान किया जाता है", "इसे राजस्व के रूप में माना जाता है", "इनमें से कोई नहीं"],
        "answer": "It is credited to the capital accounts of the partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 22,
        "question_en": "What is the treatment of goodwill on the admission of a new partner?",
        "question_hi": "नए साझेदार के प्रवेश पर गुडविल का उपचार क्या है?",
        "options_en": ["It is credited to the old partners' capital accounts", "It is paid to the new partner", "It is not recognized", "None of the above"],
        "options_hi": ["इसे पुराने साझेदारों के पूंजी खातों में जमा किया जाता है", "इसे नए साझेदार को भुगतान किया जाता है", "इसे पहचाना नहीं जाता", "इनमें से कोई नहीं"],
        "answer": "It is credited to the old partners' capital accounts",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 23,
        "question_en": "What is the journal entry for the revaluation of assets in partnership?",
        "question_hi": "साझेदारी में संपत्तियों के पुनर्मूल्यांकन के लिए जर्नल प्रविष्टि क्या होगी?",
        "options_en": ["Asset Account Debit, Revaluation Account Credit", "Revaluation Account Debit, Asset Account Credit", "Profit and Loss Account Debit, Revaluation Account Credit", "None of the above"],
        "options_hi": ["संपत्ति खाता डेबिट, पुनर्मूल्यांकन खाता क्रेडिट", "पुनर्मूल्यांकन खाता डेबिट, संपत्ति खाता क्रेडिट", "लाभ और हानि खाता डेबिट, पुनर्मूल्यांकन खाता क्रेडिट", "इनमें से कोई नहीं"],
        "answer": "Revaluation Account Debit, Asset Account Credit",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 24,
        "question_en": "What is the treatment of a partner’s loan during dissolution?",
        "question_hi": "समाप्ति के दौरान साझेदार के ऋण का उपचार क्या होता है?",
        "options_en": ["It is repaid to the partner", "It is written off", "It is paid to the creditors", "None of the above"],
        "options_hi": ["इसे साझेदार को चुकता किया जाता है", "इसे समाप्त कर दिया जाता है", "इसे कर्जदाताओं को भुगतान किया जाता है", "इनमें से कोई नहीं"],
        "answer": "It is repaid to the partner",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 25,
        "question_en": "What is the nature of the partnership agreement?",
        "question_hi": "साझेदारी समझौते का स्वभाव क्या है?",
        "options_en": ["It is legally binding", "It is a verbal agreement", "It is not a formal contract", "None of the above"],
        "options_hi": ["यह कानूनी रूप से बाध्यकारी है", "यह एक मौखिक समझौता है", "यह एक औपचारिक अनुबंध नहीं है", "इनमें से कोई नहीं"],
        "answer": "It is legally binding",
        "attempted": false,
        "selected": ""
      },
    {
        "num": 26,
        "question_en": "What is the treatment of a partner's loan in the partnership?",
        "question_hi": "साझेदारी में साझेदार के ऋण का उपचार कैसे किया जाता है?",
        "options_en": ["It is treated as capital", "It is treated as a liability", "It is ignored", "None of the above"],
        "options_hi": ["इसे पूंजी के रूप में माना जाता है", "इसे देनदारी के रूप में माना जाता है", "इसे नज़रअंदाज किया जाता है", "इनमें से कोई नहीं"],
        "answer": "It is treated as a liability",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 27,
        "question_en": "What is the purpose of a partnership deed?",
        "question_hi": "साझेदारी दस्तावेज़ का उद्देश्य क्या है?",
        "options_en": ["To record the capital of each partner", "To lay down the terms of partnership", "To record the liabilities of the firm", "None of the above"],
        "options_hi": ["प्रत्येक साझेदार की पूंजी रिकॉर्ड करने के लिए", "साझेदारी की शर्तों को निर्धारित करने के लिए", "फर्म की देनदारियों को रिकॉर्ड करने के लिए", "इनमें से कोई नहीं"],
        "answer": "To lay down the terms of partnership",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 28,
        "question_en": "In case of profit-sharing, what does the ratio represent?",
        "question_hi": "लाभ बाँटने के मामले में, अनुपात क्या दर्शाता है?",
        "options_en": ["Capital contributed by each partner", "The share of profit each partner is entitled to", "The time each partner contributes", "None of the above"],
        "options_hi": ["प्रत्येक साझेदार द्वारा योगदान की गई पूंजी", "लाभ का वह हिस्सा जिसे प्रत्येक साझेदार को प्राप्त होने का अधिकार है", "प्रत्येक साझेदार द्वारा योगदान किया गया समय", "इनमें से कोई नहीं"],
        "answer": "The share of profit each partner is entitled to",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 29,
        "question_en": "How is the partnership agreement signed?",
        "question_hi": "साझेदारी समझौता कैसे हस्ताक्षरित किया जाता है?",
        "options_en": ["Only by the managing partner", "By all the partners", "Only by the capital partners", "None of the above"],
        "options_hi": ["केवल प्रबंधक साझेदार द्वारा", "सभी साझेदारों द्वारा", "केवल पूंजी साझेदारों द्वारा", "इनमें से कोई नहीं"],
        "answer": "By all the partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 30,
        "question_en": "What is the treatment of goodwill in case of a partner's retirement?",
        "question_hi": "साझेदार की सेवानिवृत्ति के मामले में गुडविल का उपचार क्या होता है?",
        "options_en": ["It is transferred to the remaining partners", "It is written off", "It is divided equally among partners", "None of the above"],
        "options_hi": ["इसे शेष साझेदारों को स्थानांतरित किया जाता है", "इसे समाप्त कर दिया जाता है", "इसे साझेदारों में समान रूप से बाँटा जाता है", "इनमें से कोई नहीं"],
        "answer": "It is transferred to the remaining partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 31,
        "question_en": "In case of a partnership dissolution, how is the remaining amount to be distributed?",
        "question_hi": "साझेदारी समाप्ति के मामले में, शेष राशि कैसे वितरित की जाती है?",
        "options_en": ["Equally among partners", "According to capital contribution", "According to profit-sharing ratio", "None of the above"],
        "options_hi": ["साझेदारों के बीच समान रूप से", "पूंजी योगदान के अनुसार", "लाभ वितरण अनुपात के अनुसार", "इनमें से कोई नहीं"],
        "answer": "According to capital contribution",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 32,
        "question_en": "What is a limited liability partnership (LLP)?",
        "question_hi": "सीमित जिम्मेदारी साझेदारी (LLP) क्या है?",
        "options_en": ["A partnership where partners have unlimited liability", "A partnership where partners have limited liability", "A partnership without a written agreement", "None of the above"],
        "options_hi": ["एक साझेदारी जिसमें साझेदारों की असीमित जिम्मेदारी होती है", "एक साझेदारी जिसमें साझेदारों की सीमित जिम्मेदारी होती है", "एक साझेदारी जिसमें लिखित समझौता नहीं होता", "इनमें से कोई नहीं"],
        "answer": "A partnership where partners have limited liability",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 33,
        "question_en": "What is the treatment of a partner's drawings in the capital account?",
        "question_hi": "साझेदार के ड्रा का पूंजी खाते में उपचार कैसे किया जाता है?",
        "options_en": ["Added to the capital", "Deducted from the capital", "Ignored", "None of the above"],
        "options_hi": ["पूंजी में जोड़ा जाता है", "पूंजी से घटाया जाता है", "नज़रअंदाज किया जाता है", "इनमें से कोई नहीं"],
        "answer": "Deducted from the capital",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 34,
        "question_en": "What is the purpose of maintaining a separate capital account for each partner?",
        "question_hi": "प्रत्येक साझेदार के लिए अलग पूंजी खाता बनाए रखने का उद्देश्य क्या है?",
        "options_en": ["To show the individual capital contribution", "To calculate the total profit", "To determine the liabilities", "None of the above"],
        "options_hi": ["व्यक्तिगत पूंजी योगदान दिखाने के लिए", "कुल लाभ की गणना करने के लिए", "देयताओं को निर्धारित करने के लिए", "इनमें से कोई नहीं"],
        "answer": "To show the individual capital contribution",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 35,
        "question_en": "How is the revaluation of assets treated in case of partnership reconstitution?",
        "question_hi": "साझेदारी पुनर्गठन के मामले में संपत्तियों के मूल्यांकन का उपचार कैसे किया जाता है?",
        "options_en": ["Assets are revalued and the profit/loss is shared among partners", "Assets are revalued and the profit/loss is absorbed by the firm", "No revaluation is done", "None of the above"],
        "options_hi": ["संपत्तियों का पुनर्मूल्यांकन किया जाता है और लाभ/हानि साझेदारों के बीच बाँटा जाता है", "संपत्तियों का पुनर्मूल्यांकन किया जाता है और लाभ/हानि फर्म द्वारा अवशोषित की जाती है", "कोई पुनर्मूल्यांकन नहीं किया जाता", "इनमें से कोई नहीं"],
        "answer": "Assets are revalued and the profit/loss is shared among partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 36,
        "question_en": "What happens to the capital balance of a retiring partner?",
        "question_hi": "सेवानिवृत्त साझेदार की पूंजी शेष राशि के साथ क्या होता है?",
        "options_en": ["Transferred to the remaining partners", "Paid to the retiring partner", "Written off", "None of the above"],
        "options_hi": ["शेष साझेदारों को स्थानांतरित किया जाता है", "सेवानिवृत्त साझेदार को भुगतान किया जाता है", "समाप्त कर दिया जाता है", "इनमें से कोई नहीं"],
        "answer": "Paid to the retiring partner",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 37,
        "question_en": "What is the accounting treatment for the goodwill of a partnership firm?",
        "question_hi": "साझेदारी फर्म की गुडविल का लेखा उपचार क्या होता है?",
        "options_en": ["It is recorded in the books of accounts", "It is not recorded in the books of accounts", "It is transferred to the capital account", "None of the above"],
        "options_hi": ["इसे खाता पुस्तकों में दर्ज किया जाता है", "इसे खाता पुस्तकों में दर्ज नहीं किया जाता", "इसे पूंजी खाते में स्थानांतरित किया जाता है", "इनमें से कोई नहीं"],
        "answer": "It is recorded in the books of accounts",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 38,
        "question_en": "Which of the following is not an item that would appear in the partnership profit and loss account?",
        "question_hi": "निम्नलिखित में से कौन सी वस्तु साझेदारी लाभ और हानि खाते में नहीं आएगी?",
        "options_en": ["Interest on capital", "Salaries to partners", "Interest on drawings", "Capital gains"],
        "options_hi": ["पूंजी पर ब्याज", "साझेदारों को वेतन", "ड्रा पर ब्याज", "पूंजी लाभ"],
        "answer": "Capital gains",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 39,
        "question_en": "What happens when a partnership is reconstituted?",
        "question_hi": "जब साझेदारी पुनर्गठित होती है, तो क्या होता है?",
        "options_en": ["New partners join the firm", "Existing partners change the profit-sharing ratio", "Assets and liabilities are revalued", "All of the above"],
        "options_hi": ["नए साझेदार फर्म में शामिल होते हैं", "मौजूदा साझेदार लाभ वितरण अनुपात बदलते हैं", "संपत्तियाँ और देनदारियाँ पुनर्मूल्यांकित की जाती हैं", "इनमें से सभी"],
        "answer": "All of the above",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 40,
        "question_en": "In a partnership, if there is no agreement regarding the interest on capital, what will be the rate?",
        "question_hi": "साझेदारी में, यदि पूंजी पर ब्याज के संबंध में कोई समझौता नहीं है, तो ब्याज दर क्या होगी?",
        "options_en": ["5% p.a.", "6% p.a.", "7% p.a.", "8% p.a."],
        "options_hi": ["5% प्रति वर्ष", "6% प्रति वर्ष", "7% प्रति वर्ष", "8% प्रति वर्ष"],
        "answer": "6% p.a.",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 41,
        "question_en": "What is the accounting treatment for the goodwill of a new partner?",
        "question_hi": "नए साझेदार की गुडविल का लेखा उपचार क्या होता है?",
        "options_en": ["It is paid by the new partner to the existing partners", "It is shared equally among all partners", "It is added to the capital account", "None of the above"],
        "options_hi": ["इसे नए साझेदार द्वारा मौजूदा साझेदारों को भुगतान किया जाता है", "इसे सभी साझेदारों में समान रूप से बाँटा जाता है", "इसे पूंजी खाते में जोड़ा जाता है", "इनमें से कोई नहीं"],
        "answer": "It is paid by the new partner to the existing partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 42,
        "question_en": "In the event of the death of a partner, what happens to the partner's share of profit?",
        "question_hi": "साझेदार की मृत्यु के मामले में, साझेदार के लाभ का हिस्सा क्या होता है?",
        "options_en": ["It is distributed among the remaining partners", "It is paid to the legal heirs", "It is added to the capital account", "None of the above"],
        "options_hi": ["इसे शेष साझेदारों में वितरित किया जाता है", "इसे कानूनी उत्तराधिकारियों को भुगतान किया जाता है", "इसे पूंजी खाते में जोड़ा जाता है", "इनमें से कोई नहीं"],
        "answer": "It is paid to the legal heirs",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "What is the procedure if the partners have not agreed upon the interest on capital?",
        "question_hi": "यदि साझेदारों ने पूंजी पर ब्याज के बारे में सहमति नहीं दी है, तो प्रक्रिया क्या होगी?",
        "options_en": ["No interest will be allowed", "Interest will be paid at a fixed rate", "Interest will be calculated according to the firm's policy", "None of the above"],
        "options_hi": ["कोई ब्याज नहीं दिया जाएगा", "ब्याज एक निश्चित दर पर दिया जाएगा", "ब्याज फर्म की नीति के अनुसार गणना किया जाएगा", "इनमें से कोई नहीं"],
        "answer": "No interest will be allowed",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 43,
        "question_en": "What is the procedure if the partners have not agreed upon the interest on capital?",
        "question_hi": "यदि साझेदारों ने पूंजी पर ब्याज के बारे में सहमति नहीं दी है, तो प्रक्रिया क्या होगी?",
        "options_en": ["No interest will be allowed", "Interest will be paid at a fixed rate", "Interest will be calculated according to the firm's policy", "None of the above"],
        "options_hi": ["कोई ब्याज नहीं दिया जाएगा", "ब्याज एक निश्चित दर पर दिया जाएगा", "ब्याज फर्म की नीति के अनुसार गणना किया जाएगा", "इनमें से कोई नहीं"],
        "answer": "No interest will be allowed",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 44,
        "question_en": "How is the final settlement made between the partners during the dissolution of the partnership?",
        "question_hi": "साझेदारी की समाप्ति के दौरान साझेदारों के बीच अंतिम समझौता कैसे किया जाता है?",
        "options_en": ["Assets are sold and liabilities are settled", "Each partner takes their share of the assets", "Assets are divided equally", "None of the above"],
        "options_hi": ["संपत्तियाँ बेची जाती हैं और देनदारियाँ निपटाई जाती हैं", "प्रत्येक साझेदार अपनी संपत्ति का हिस्सा लेता है", "संपत्तियाँ समान रूप से बाँटी जाती हैं", "इनमें से कोई नहीं"],
        "answer": "Assets are sold and liabilities are settled",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 45,
        "question_en": "Which of the following is NOT a characteristic of a partnership?",
        "question_hi": "निम्नलिखित में से कौन सी साझेदारी की विशेषता नहीं है?",
        "options_en": ["It is formed by an agreement between two or more persons", "It is a separate legal entity", "It is formed for a business purpose", "Profits and losses are shared among the partners"],
        "options_hi": ["यह दो या दो से अधिक व्यक्तियों के बीच एक समझौते द्वारा बनती है", "यह एक अलग कानूनी इकाई है", "यह एक व्यापार उद्देश्य के लिए बनाई जाती है", "लाभ और हानि साझेदारों के बीच बाँटी जाती है"],
        "answer": "It is a separate legal entity",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 46,
        "question_en": "What is the treatment of revaluation of assets when a new partner is admitted?",
        "question_hi": "जब एक नया साझेदार प्रवेश करता है, तो संपत्तियों के पुनर्मूल्यांकन का उपचार क्या होता है?",
        "options_en": ["Revaluation profit or loss is shared among existing partners", "Revaluation profit is transferred to the new partner", "No revaluation is necessary", "None of the above"],
        "options_hi": ["पुनर्मूल्यांकन लाभ या हानि मौजूदा साझेदारों में बाँटी जाती है", "पुनर्मूल्यांकन लाभ नए साझेदार को स्थानांतरित किया जाता है", "किसी पुनर्मूल्यांकन की आवश्यकता नहीं है", "इनमें से कोई नहीं"],
        "answer": "Revaluation profit or loss is shared among existing partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "What happens if a partnership agreement does not specify the method for dividing profits?",
        "question_hi": "यदि साझेदारी समझौते में लाभ विभाजन के तरीके को निर्दिष्ट नहीं किया गया है, तो क्या होता है?",
        "options_en": ["The profit is divided equally among the partners", "The profit is divided based on capital contribution", "The profit is divided based on the work done by each partner", "None of the above"],
        "options_hi": ["लाभ साझेदारों के बीच समान रूप से बाँटा जाता है", "लाभ पूंजी योगदान के आधार पर बाँटा जाता है", "लाभ प्रत्येक साझेदार द्वारा किए गए काम के आधार पर बाँटा जाता है", "इनमें से कोई नहीं"],
        "answer": "The profit is divided equally among the partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "In the case of a partnership dissolution, how are the assets of the firm treated?",
        "question_hi": "साझेदारी की समाप्ति के मामले में, फर्म की संपत्तियों का उपचार कैसे किया जाता है?",
        "options_en": ["They are sold off to pay off the liabilities", "They are divided among the partners equally", "They are distributed based on the profit-sharing ratio", "None of the above"],
        "options_hi": ["इन्हें देनदारियों को चुकता करने के लिए बेचा जाता है", "इन्हें साझेदारों में समान रूप से बाँटा जाता है", "इन्हें लाभ वितरण अनुपात के आधार पर वितरित किया जाता है", "इनमें से कोई नहीं"],
        "answer": "They are sold off to pay off the liabilities",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "What is the treatment of the goodwill of a partnership when a partner retires?",
        "question_hi": "जब कोई साझेदार सेवानिवृत्त होता है, तो साझेदारी की गुडविल का उपचार क्या होता है?",
        "options_en": ["It is written off", "It is divided among the remaining partners", "It is transferred to the capital account of the retiring partner", "None of the above"],
        "options_hi": ["इसे समाप्त कर दिया जाता है", "इसे शेष साझेदारों में बाँटा जाता है", "इसे सेवानिवृत्त साझेदार के पूंजी खाते में स्थानांतरित किया जाता है", "इनमें से कोई नहीं"],
        "answer": "It is divided among the remaining partners",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "Which of the following is an example of a partnership with limited liability?",
        "question_hi": "निम्नलिखित में से कौन सीमित जिम्मेदारी वाली साझेदारी का उदाहरण है?",
        "options_en": ["Joint Hindu Family Business", "Limited Liability Partnership (LLP)", "Sole Proprietorship", "None of the above"],
        "options_hi": ["संयुक्त हिंदू परिवार व्यवसाय", "सीमित जिम्मेदारी साझेदारी (LLP)", "एकल स्वामित्व", "इनमें से कोई नहीं"],
        "answer": "Limited Liability Partnership (LLP)",
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
