const questions = [

  {
    "num": 1,
    "question_en": "Who is the author of 'From the Diary of Anne Frank'?",
    "question_hi": "'फ्रॉम द डायरी ऑफ ऐनी फ्रैंक' की लेखिका कौन हैं?",
    "options_en": ["Jane Austen", "Emily Dickinson", "Anne Frank", "Virginia Woolf"],
    "options_hi": ["जेन ऑस्टेन", "एमिली डिकिंसन", "ऐनी फ्रैंक", "वर्जीनिया वुल्फ"],
    "answer_en": "Anne Frank",
    "answer_hi": "ऐनी फ्रैंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "In which city was Anne Frank born?",
    "question_hi": "ऐनी फ्रैंक का जन्म किस शहर में हुआ था?",
    "options_en": ["Amsterdam", "Berlin", "Frankfurt", "Vienna"],
    "options_hi": ["एम्स्टर्डम", "बर्लिन", "फ्रैंकफर्ट", "वियना"],
    "answer_en": "Frankfurt",
    "answer_hi": "फ्रैंकफर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What was the name of Anne Frank's diary?",
    "question_hi": "ऐनी फ्रैंक की डायरी का क्या नाम था?",
    "options_en": ["Kitty", "Judy", "Betty", "Daisy"],
    "options_hi": ["किट्टी", "जूडी", "बेटी", "डेज़ी"],
    "answer_en": "Kitty",
    "answer_hi": "किट्टी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Why did Anne Frank start writing a diary?",
    "question_hi": "ऐनी फ्रैंक ने डायरी लिखना क्यों शुरू किया?",
    "options_en": ["She had no close friends", "She was bored", "Her teacher asked her to", "She wanted to become a writer"],
    "options_hi": ["उसके कोई करीबी दोस्त नहीं थे", "वह ऊब गई थी", "उसके शिक्षक ने उसे ऐसा करने के लिए कहा", "वह एक लेखिका बनना चाहती थी"],
    "answer_en": "She had no close friends",
    "answer_hi": "उसके कोई करीबी दोस्त नहीं थे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Where did the Frank family go into hiding?",
    "question_hi": "फ्रैंक परिवार कहाँ छिप गया?",
    "options_en": ["In a forest", "In a hospital", "In the Secret Annex", "In a school"],
    "options_hi": ["एक जंगल में", "एक अस्पताल में", "गुप्त एनेक्स में", "एक स्कूल में"],
    "answer_en": "In the Secret Annex",
    "answer_hi": "गुप्त एनेक्स में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Who were the other people hiding with the Frank family?",
    "question_hi": "फ्रैंक परिवार के साथ और कौन लोग छिपे हुए थे?",
    "options_en": ["The Van Daans", "The Smiths", "The Jacksons", "The Williams"],
    "options_hi": ["वान डान्स", "स्मिथ्स", "जैकसंस", "विलियम्स"],
    "answer_en": "The Van Daans",
    "answer_hi": "वान डान्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What was Anne Frank's relationship with her mother?",
    "question_hi": "ऐनी फ्रैंक का अपनी माँ के साथ कैसा रिश्ता था?",
    "options_en": ["Very close", "Distant and strained", "Friendly", "Respectful"],
    "options_hi": ["बहुत करीबी", "दूर और तनावपूर्ण", "मैत्रीपूर्ण", "सम्मानजनक"],
    "answer_en": "Distant and strained",
    "answer_hi": "दूर और तनावपूर्ण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What was Anne Frank's relationship with her father?",
    "question_hi": "ऐनी फ्रैंक का अपने पिता के साथ कैसा रिश्ता था?",
    "options_en": ["Distant", "Very close and loving", "Formal", "Complicated"],
    "options_hi": ["दूर", "बहुत करीबी और प्यार भरा", "औपचारिक", "जटिल"],
    "answer_en": "Very close and loving",
    "answer_hi": "बहुत करीबी और प्यार भरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What subject was Anne Frank good at?",
    "question_hi": "ऐनी फ्रैंक किस विषय में अच्छी थी?",
    "options_en": ["Mathematics", "Science", "History", "Languages"],
    "options_hi": ["गणित", "विज्ञान", "इतिहास", "भाषाएँ"],
    "answer_en": "Languages",
    "answer_hi": "भाषाएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What did Anne Frank want to become when she grew up?",
    "question_hi": "ऐनी फ्रैंक बड़ी होकर क्या बनना चाहती थी?",
    "options_en": ["A teacher", "A doctor", "A writer", "A nurse"],
    "options_hi": ["एक शिक्षिका", "एक डॉक्टर", "एक लेखिका", "एक नर्स"],
    "answer_en": "A writer",
    "answer_hi": "एक लेखिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Who helped the Frank family while they were in hiding?",
    "question_hi": "जब फ्रैंक परिवार छिपा हुआ था तो उनकी मदद किसने की?",
    "options_en": ["Their neighbors", "The police", "Kind Dutch people", "Their relatives"],
    "options_hi": ["उनके पड़ोसी", "पुलिस", "दयालु डच लोग", "उनके रिश्तेदार"],
    "answer_en": "Kind Dutch people",
    "answer_hi": "दयालु डच लोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What were the restrictions imposed on Jews during the Nazi occupation?",
    "question_hi": "नाजी कब्जे के दौरान यहूदियों पर क्या प्रतिबंध लगाए गए थे?",
    "options_en": ["They could not travel", "They had to wear a yellow star", "They were not allowed to own businesses", "All of the above"],
    "options_hi": ["वे यात्रा नहीं कर सकते थे", "उन्हें एक पीला तारा पहनना पड़ता था", "उन्हें व्यवसाय करने की अनुमति नहीं थी", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What was the atmosphere like in the Secret Annex?",
    "question_hi": "गुप्त एनेक्स में माहौल कैसा था?",
    "options_en": ["Relaxed and peaceful", "Exciting and adventurous", "Tense and fearful", "Happy and joyful"],
    "options_hi": ["आरामदायक और शांतिपूर्ण", "रोमांचक और साहसिक", "तनावपूर्ण और भयभीत", "खुश और आनंदमय"],
    "answer_en": "Tense and fearful",
    "answer_hi": "तनावपूर्ण और भयभीत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does Anne Frank's diary reveal about her personality?",
    "question_hi": "ऐनी फ्रैंक की डायरी उनके व्यक्तित्व के बारे में क्या बताती है?",
    "options_en": ["She was shy and withdrawn", "She was optimistic, intelligent, and sensitive", "She was rude and selfish", "She was always depressed"],
    "options_hi": ["वह शर्मीली और अलग-थलग रहने वाली थी", "वह आशावादी, बुद्धिमान और संवेदनशील थी", "वह असभ्य और स्वार्थी थी", "वह हमेशा उदास रहती थी"],
    "answer_en": "She was optimistic, intelligent, and sensitive",
    "answer_hi": "वह आशावादी, बुद्धिमान और संवेदनशील थी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What was the fate of Anne Frank and her family?",
    "question_hi": "ऐनी फ्रैंक और उनके परिवार का क्या भाग्य हुआ?",
    "options_en": ["They escaped to Switzerland", "They survived the war", "They were discovered and sent to concentration camps", "They lived peacefully in hiding until the end of the war"],
    "options_hi": ["वे स्विट्जरलैंड भाग गए", "वे युद्ध में बच गए", "उन्हें खोज लिया गया और एकाग्रता शिविरों में भेज दिया गया", "वे युद्ध के अंत तक शांतिपूर्वक छिपकर रहे"],
    "answer_en": "They were discovered and sent to concentration camps",
    "answer_hi": "उन्हें खोज लिया गया और एकाग्रता शिविरों में भेज दिया गया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Who is the author of 'The Hundred Dresses-I'?",
    "question_hi": "'द हंड्रेड ड्रेसेस-I' की लेखिका कौन हैं?",
    "options_en": ["Eleanor Estes", "Beverly Cleary", "Judy Blume", "Lois Lowry"],
    "options_hi": ["एलेनोर एस्टेस", "बेवर्ली क्लीरी", "जूडी ब्लूम", "लोइस लोरी"],
    "answer_en": "Eleanor Estes",
    "answer_hi": "एलेनोर एस्टेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Who was Wanda Petronski?",
    "question_hi": "वांडा पेट्रोन्सकी कौन थी?",
    "options_en": ["The teacher", "The principal", "A quiet girl from Poland", "The class bully"],
    "options_hi": ["शिक्षिका", "प्रधानाचार्य", "पोलैंड की एक शांत लड़की", "कक्षा की धमकाने वाली"],
    "answer_en": "A quiet girl from Poland",
    "answer_hi": "पोलैंड की एक शांत लड़की",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Why did Wanda Petronski usually sit in the last row?",
    "question_hi": "वांडा पेट्रोन्सकी आमतौर पर आखिरी पंक्ति में क्यों बैठती थी?",
    "options_en": ["She was tall", "She liked to sleep", "Because her feet were usually caked with dry mud", "She was the smartest student"],
    "options_hi": ["वह लंबी थी", "उसे सोना पसंद था", "क्योंकि उसके पैर आमतौर पर सूखी मिट्टी से सने होते थे", "वह सबसे होशियार छात्र थी"],
    "answer_en": "Because her feet were usually caked with dry mud",
    "answer_hi": "क्योंकि उसके पैर आमतौर पर सूखी मिट्टी से सने होते थे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What did Peggy and Maddie usually ask Wanda?",
    "question_hi": "पेगी और मैडी आमतौर पर वांडा से क्या पूछते थे?",
    "options_en": ["About her family", "About her hobbies", "How many dresses she had", "Where she lived"],
    "options_hi": ["उसके परिवार के बारे में", "उसके शौक के बारे में", "उसके पास कितने कपड़े थे", "वह कहाँ रहती थी"],
    "answer_en": "How many dresses she had",
    "answer_hi": "उसके पास कितने कपड़े थे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Why did Peggy and Maddie tease Wanda about her dresses?",
    "question_hi": "पेगी और मैडी वांडा को उसके कपड़ों के बारे में क्यों चिढ़ाते थे?",
    "options_en": ["They were jealous of her", "They thought it was funny because she always said she had a hundred dresses but wore the same faded blue one", "They disliked her", "She had stolen their dresses"],
    "options_hi": ["वे उससे जलते थे", "उन्हें यह मज़ेदार लगता था क्योंकि वह हमेशा कहती थी कि उसके पास सौ कपड़े हैं लेकिन वह हमेशा वही फीका नीला रंग का पहनती थी", "वे उसे नापसंद करते थे", "उसने उनके कपड़े चुरा लिए थे"],
    "answer_en": "They thought it was funny because she always said she had a hundred dresses but wore the same faded blue one",
    "answer_hi": "उन्हें यह मज़ेदार लगता था क्योंकि वह हमेशा कहती थी कि उसके पास सौ कपड़े हैं लेकिन वह हमेशा वही फीका नीला रंग का पहनती थी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What was the result of the drawing contest?",
    "question_hi": "ड्राइंग प्रतियोगिता का क्या परिणाम था?",
    "options_en": ["Peggy won", "Maddie won", "Wanda won", "No one won"],
    "options_hi": ["पेगी जीती", "मैडी जीती", "वांडा जीती", "कोई नहीं जीता"],
    "answer_en": "Wanda won",
    "answer_hi": "वांडा जीती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What did Wanda draw in the contest?",
    "question_hi": "वांडा ने प्रतियोगिता में क्या बनाया था?",
    "options_en": ["Flowers", "Landscapes", "One hundred different designs of dresses", "Cars"],
    "options_hi": ["फूल", "परिदृश्य", "कपड़ों के सौ अलग-अलग डिज़ाइन", "कारें"],
    "answer_en": "One hundred different designs of dresses",
    "answer_hi": "कपड़ों के सौ अलग-अलग डिज़ाइन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Why was Miss Mason surprised by Wanda's drawings?",
    "question_hi": "मिस मेसन वांडा के चित्रों से हैरान क्यों थीं?",
    "options_en": ["They were very bad", "They were all the same", "They were exceptionally beautiful and talented", "They were not her own work"],
    "options_hi": ["वे बहुत बुरे थे", "वे सब एक जैसे थे", "वे असाधारण रूप से सुंदर और प्रतिभाशाली थे", "वे उसका अपना काम नहीं थे"],
    "answer_en": "They were exceptionally beautiful and talented",
    "answer_hi": "वे असाधारण रूप से सुंदर और प्रतिभाशाली थे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What did Peggy say after seeing Wanda's drawings?",
    "question_hi": "वांडा के चित्र देखने के बाद पेगी ने क्या कहा?",
    "options_en": ["She admitted that Wanda was talented", "She said the drawings were copied", "She ignored them", "She laughed at them"],
    "options_hi": ["उसने माना कि वांडा प्रतिभाशाली थी", "उसने कहा कि चित्र कॉपी किए गए थे", "उसने उन्हें अनदेखा कर दिया", "वह उन पर हँसी"],
    "answer_en": "She admitted that Wanda was talented",
    "answer_hi": "उसने माना कि वांडा प्रतिभाशाली थी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "How did Maddie feel about teasing Wanda?",
    "question_hi": "मैडी को वांडा को चिढ़ाने के बारे में कैसा महसूस हुआ?",
    "options_en": ["She enjoyed it", "She was indifferent", "She felt uncomfortable and guilty", "She encouraged Peggy"],
    "options_hi": ["उसने इसका आनंद लिया", "वह उदासीन थी", "उसने असहज और दोषी महसूस किया", "उसने पेगी को प्रोत्साहित किया"],
    "answer_en": "She felt uncomfortable and guilty",
    "answer_hi": "उसने असहज और दोषी महसूस किया",
    "attempted": false,
    "selected": ""
  },

  
    {
      "num": 26,
      "question_en": "What did Maddie decide to do?",
      "question_hi": "मैडी ने क्या करने का फैसला किया?",
      "options_en": ["To join in the teasing", "To ignore Wanda", "To tell Miss Mason about the teasing", "To never stand by and say nothing again"],
      "options_hi": ["चिढ़ाने में शामिल होने के लिए", "वांडा को अनदेखा करने के लिए", "मिस मेसन को चिढ़ाने के बारे में बताने के लिए", "फिर कभी चुपचाप खड़े न रहने के लिए"],
      "answer_en": "To never stand by and say nothing again",
      "answer_hi": "फिर कभी चुपचाप खड़े न रहने के लिए",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 27,
      "question_en": "What was the content of the letter from Wanda's father?",
      "question_hi": "वांडा के पिता के पत्र की सामग्री क्या थी?",
      "options_en": ["He thanked the school for the contest", "He complained about Wanda's low grades", "He informed the school that Wanda and her brother would not come to that school anymore", "He asked for a scholarship for Wanda"],
      "options_hi": ["उन्होंने प्रतियोगिता के लिए स्कूल को धन्यवाद दिया", "उन्होंने वांडा के कम ग्रेड के बारे में शिकायत की", "उन्होंने स्कूल को सूचित किया कि वांडा और उसका भाई अब उस स्कूल में नहीं आएंगे", "उन्होंने वांडा के लिए छात्रवृत्ति मांगी"],
      "answer_en": "He informed the school that Wanda and her brother would not come to that school anymore",
      "answer_hi": "उन्होंने स्कूल को सूचित किया कि वांडा और उसका भाई अब उस स्कूल में नहीं आएंगे",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 28,
      "question_en": "How did Miss Mason react to Wanda's father's letter?",
      "question_hi": "मिस मेसन ने वांडा के पिता के पत्र पर कैसी प्रतिक्रिया दी?",
      "options_en": ["She was angry", "She was sad and expressed her disapproval of the teasing", "She ignored it", "She was happy that Wanda left"],
      "options_hi": ["वह गुस्सा थी", "वह दुखी थी और उसने चिढ़ाने पर अपनी अस्वीकृति व्यक्त की", "उसने इसे अनदेखा कर दिया", "वह खुश थी कि वांडा चली गई"],
      "answer_en": "She was sad and expressed her disapproval of the teasing",
      "answer_hi": "वह दुखी थी और उसने चिढ़ाने पर अपनी अस्वीकृति व्यक्त की",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 29,
      "question_en": "What did Peggy and Maddie do after reading the letter?",
      "question_hi": "पत्र पढ़ने के बाद पेगी और मैडी ने क्या किया?",
      "options_en": ["They celebrated Wanda's departure", "They forgot about it", "They felt relieved", "They decided to go to Boggins Heights to find Wanda"],
      "options_hi": ["उन्होंने वांडा के जाने का जश्न मनाया", "वे इसके बारे में भूल गए", "उन्होंने राहत महसूस की", "उन्होंने वांडा को खोजने के लिए बोगिंस हाइट्स जाने का फैसला किया"],
      "answer_en": "They decided to go to Boggins Heights to find Wanda",
      "answer_hi": "उन्होंने वांडा को खोजने के लिए बोगिंस हाइट्स जाने का फैसला किया",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 30,
      "question_en": "Why did Peggy and Maddie want to see Wanda?",
      "question_hi": "पेगी और मैडी वांडा को क्यों देखना चाहती थीं?",
      "options_en": ["To tease her again", "To get her drawings", "To apologize for their behavior", "To ask her to come back to school"],
      "options_hi": ["उसे फिर से चिढ़ाने के लिए", "उसके चित्र प्राप्त करने के लिए", "अपने व्यवहार के लिए माफी मांगने के लिए", "उसे स्कूल वापस आने के लिए कहने के लिए"],
      "answer_en": "To apologize for their behavior",
      "answer_hi": "अपने व्यवहार के लिए माफी मांगने के लिए",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 31,
      "question_en": "Did Peggy and Maddie find Wanda in Boggins Heights?",
      "question_hi": "क्या पेगी और मैडी को बोगिंस हाइट्स में वांडा मिली?",
      "options_en": ["Yes", "No", "They found her brother", "They found her teacher"],
      "options_hi": ["हाँ", "नहीं", "उन्हें उसका भाई मिला", "उन्हें उसकी शिक्षिका मिली"],
      "answer_en": "No",
      "answer_hi": "नहीं",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 32,
      "question_en": "What did Peggy and Maddie do after they couldn't find Wanda?",
      "question_hi": "वांडा को न ढूंढ पाने के बाद पेगी और मैडी ने क्या किया?",
      "options_en": ["They gave up and went home", "They searched the whole town", "They wrote a letter to Wanda", "They informed the police"],
      "options_hi": ["उन्होंने हार मान ली और घर चले गए", "उन्होंने पूरे शहर की तलाशी ली", "उन्होंने वांडा को एक पत्र लिखा", "उन्होंने पुलिस को सूचित किया"],
      "answer_en": "They wrote a letter to Wanda",
      "answer_hi": "उन्होंने वांडा को एक पत्र लिखा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 33,
      "question_en": "What did they write in their letter to Wanda?",
      "question_hi": "उन्होंने वांडा को लिखे अपने पत्र में क्या लिखा?",
      "options_en": ["They complained about her leaving", "They asked her to send more drawings", "They apologized for teasing her and praised her drawings", "They asked her to sell them her dresses"],
      "options_hi": ["उन्होंने उसके जाने की शिकायत की", "उन्होंने उससे और चित्र भेजने के लिए कहा", "उन्होंने उसे चिढ़ाने के लिए माफी मांगी और उसके चित्रों की प्रशंसा की", "उन्होंने उससे अपने कपड़े बेचने के लिए कहा"],
      "answer_en": "They apologized for teasing her and praised her drawings",
      "answer_hi": "उन्होंने उसे चिढ़ाने के लिए माफी मांगी और उसके चित्रों की प्रशंसा की",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 34,
      "question_en": "Did Wanda reply to their letter?",
      "question_hi": "क्या वांडा ने उनके पत्र का जवाब दिया?",
      "options_en": ["Yes", "No", "She sent a drawing instead", "Her brother replied"],
      "options_hi": ["हाँ", "नहीं", "उसने बदले में एक चित्र भेजा", "उसके भाई ने जवाब दिया"],
      "answer_en": "Yes",
      "answer_hi": "हाँ",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 35,
      "question_en": "What did Wanda's letter say?",
      "question_hi": "वांडा के पत्र में क्या लिखा था?",
      "options_en": ["She was angry with them", "She missed her old school", "She forgave them and asked them to keep the drawings she had dedicated to them", "She asked for money"],
      "options_hi": ["वह उनसे गुस्सा थी", "उसे अपना पुराना स्कूल याद आ रहा था", "उसने उन्हें माफ कर दिया और उनसे उन चित्रों को रखने के लिए कहा जो उसने उन्हें समर्पित किए थे", "उसने पैसे मांगे"],
      "answer_en": "She forgave them and asked them to keep the drawings she had dedicated to them",
      "answer_hi": "उसने उन्हें माफ कर दिया और उनसे उन चित्रों को रखने के लिए कहा जो उसने उन्हें समर्पित किए थे",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 36,
      "question_en": "How did Peggy and Maddie feel after receiving Wanda's letter?",
      "question_hi": "वांडा का पत्र मिलने के बाद पेगी और मैडी को कैसा महसूस हुआ?",
      "options_en": ["They were happy and relieved", "They felt guilty but happy", "They were still confused", "They were angry at Wanda"],
      "options_hi": ["वे खुश और राहत महसूस कर रहे थे", "उन्होंने दोषी लेकिन खुश महसूस किया", "वे अभी भी भ्रमित थे", "वे वांडा पर गुस्सा थे"],
      "answer_en": "They felt guilty but happy",
      "answer_hi": "उन्होंने दोषी लेकिन खुश महसूस किया",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 37,
      "question_en": "What did Maddie keep thinking about?",
      "question_hi": "मैडी किसके बारे में सोचती रही?",
      "options_en": ["The drawing of the green dress", "The drawing of the blue dress", "Wanda's funny name", "The drawing of the hundred dresses and the fact that Wanda had forgiven them"],
      "options_hi": ["हरी पोशाक का चित्र", "नीली पोशाक का चित्र", "वांडा का मज़ेदार नाम", "सौ कपड़ों का चित्र और यह तथ्य कि वांडा ने उन्हें माफ कर दिया था"],
      "answer_en": "The drawing of the hundred dresses and the fact that Wanda had forgiven them",
      "answer_hi": "सौ कपड़ों का चित्र और यह तथ्य कि वांडा ने उन्हें माफ कर दिया था",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 38,
      "question_en": "What lesson did Maddie learn from the experience?",
      "question_hi": "मैडी ने इस अनुभव से क्या सबक सीखा?",
      "options_en": ["To be more careful about what she says and does and to never stand by silently when someone is being teased", "That teasing is harmless fun", "That she should always follow Peggy's lead", "That Wanda was just being dramatic"],
      "options_hi": ["वह जो कहती है और करती है उसके बारे में अधिक सावधान रहना और जब किसी को चिढ़ाया जा रहा हो तो कभी चुपचाप खड़े न रहना", "कि चिढ़ाना हानिरहित मज़ा है", "कि उसे हमेशा पेगी का नेतृत्व करना चाहिए", "कि वांडा सिर्फ नाटक कर रही थी"],
      "answer_en": "To be more careful about what she says and does and to never stand by silently when someone is being teased",
      "answer_hi": "वह जो कहती है और करती है उसके बारे में अधिक सावधान रहना और जब किसी को चिढ़ाया जा रहा हो तो कभी चुपचाप खड़े न रहना",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 39,
      "question_en": "Who is the author of 'Glimpses of India'?",
      "question_hi": "'ग्लिम्पसेस ऑफ इंडिया' के लेखक कौन हैं?",
      "options_en": ["Ruskin Bond, Lucia Rodrigues, Arup Kumar Datta", "R.K. Narayan, Mulk Raj Anand, Khushwant Singh", "Vikram Seth, Arundhati Roy, Kiran Desai", "Amitav Ghosh, Salman Rushdie, Chitra Banerjee Divakaruni"],
      "options_hi": ["रस्किन बॉन्ड, लूसिया रोड्रिग्स, अरूप कुमार दत्ता", "आर.के. नारायण, मुल्क राज आनंद, खुशवंत सिंह", "विक्रम सेठ, अरुंधति रॉय, किरण देसाई", "अमिताभ घोष, सलमान रुश्दी, चित्रा बनर्जी दिवाकरुनी"],
      "answer_en": "Ruskin Bond, Lucia Rodrigues, Arup Kumar Datta",
      "answer_hi": "रस्किन बॉन्ड, लूसिया रोड्रिग्स, अरूप कुमार दत्ता",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 40,
      "question_en": "What are the three stories in 'Glimpses of India'?",
      "question_hi": "'ग्लिम्पसेस ऑफ इंडिया' में तीन कहानियाँ कौन सी हैं?",
      "options_en": ["A Baker from Goa, Coorg, Tea from Assam", "The Lost Child, The Adventures of Toto, The Last Leaf", "The Thief's Story, Footprints Without Feet, The Making of a Scientist", "Bholi, The Necklace, The Hack Driver"],
      "options_hi": ["अ बेकर फ्रॉम गोवा, कूर्ग, टी फ्रॉम असम", "द लॉस्ट चाइल्ड, द एडवेंचर्स ऑफ टोटो, द लास्ट लीफ", "द थीफ्स स्टोरी, फुटप्रिंट्स विदाउट फीट, द मेकिंग ऑफ अ साइंटिस्ट", "भोली, द नेकलेस, द हैक ड्राइवर"],
      "answer_en": "A Baker from Goa, Coorg, Tea from Assam",
      "answer_hi": "अ बेकर फ्रॉम गोवा, कूर्ग, टी फ्रॉम असम",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 41,
      "question_en": "What is 'A Baker from Goa' about?",
      "question_hi": "'अ बेकर फ्रॉम गोवा' किस बारे में है?",
      "options_en": ["The history of Goa", "The importance of fishing in Goa", "The significance of bakers in Goan culture", "Goan architecture"],
      "options_hi": ["गोवा का इतिहास", "गोवा में मछली पकड़ने का महत्व", "गोवा की संस्कृति में बेकर्स का महत्व", "गोवा की वास्तुकला"],
      "answer_en": "The significance of bakers in Goan culture",
      "answer_hi": "गोवा की संस्कृति में बेकर्स का महत्व",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 42,
      "question_en": "What were the bakers in Goa known as?",
      "question_hi": "गोवा में बेकर्स को किस नाम से जाना जाता था?",
      "options_en": ["Powders", "Kabais", "Paders", "Thowkers"],
      "options_hi": ["पावडर्स", "कबाईस", "पाडर्स", "थोवकर्स"],
      "answer_en": "Paders",
      "answer_hi": "पाडर्स",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 43,
      "question_en": "What is 'Coorg' known for?",
      "question_hi": "'कूर्ग' किस लिए जाना जाता है?",
      "options_en": ["Its beaches", "Its tea plantations", "Its coffee plantations, rainforests, and spices", "Its historical monuments"],
      "options_hi": ["इसके समुद्र तट", "इसके चाय बागान", "इसके कॉफी बागान, वर्षावन और मसाले", "इसके ऐतिहासिक स्मारक"],
      "answer_en": "Its coffee plantations, rainforests, and spices",
      "answer_hi": "इसके कॉफी बागान, वर्षावन और मसाले",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 44,
      "question_en": "What kind of place is Coorg?",
      "question_hi": "कूर्ग किस प्रकार की जगह है?",
      "options_en": ["A bustling city", "A desert landscape", "A piece of heaven that must have drifted from the kingdom of God", "An industrial town"],
      "options_hi": ["एक हलचल भरा शहर", "एक रेगिस्तानी परिदृश्य", "स्वर्ग का एक टुकड़ा जो भगवान के राज्य से बहकर आया होगा", "एक औद्योगिक शहर"],
      "answer_en": "A piece of heaven that must have drifted from the kingdom of God",
      "answer_hi": "स्वर्ग का एक टुकड़ा जो भगवान के राज्य से बहकर आया होगा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 45,
      "question_en": "What is 'Tea from Assam' about?",
      "question_hi": "'टी फ्रॉम असम' किस बारे में है?",
      "options_en": ["The history of Assam", "The process of tea making", "A journey through the tea gardens of Assam and the legends associated with tea", "Assamese culture"],
      "options_hi": ["असम का इतिहास", "चाय बनाने की प्रक्रिया", "असम के चाय बागानों की यात्रा और चाय से जुड़ी किंवदंतियाँ", "असमिया संस्कृति"],
      "answer_en": "A journey through the tea gardens of Assam and the legends associated with tea",
      "answer_hi": "असम के चाय बागानों की यात्रा और चाय से जुड़ी किंवदंतियाँ",
      "attempted": false,
      "selected": ""
    },
  
    
      {
        "num": 46,
        "question_en": "Who are Rajvir and Mr. Barua?",
        "question_hi": "राजवीर और मिस्टर बरुआ कौन हैं?",
        "options_en": ["Tea planters", "Tourists", "School friends traveling to Assam", "Historians researching Assam"],
        "options_hi": ["चाय बागान मालिक", "पर्यटक", "असम की यात्रा कर रहे स्कूली दोस्त", "असम पर शोध कर रहे इतिहासकार"],
        "answer_en": "School friends traveling to Assam",
        "answer_hi": "असम की यात्रा कर रहे स्कूली दोस्त",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 47,
        "question_en": "What are the legends associated with the discovery of tea?",
        "question_hi": "चाय की खोज से जुड़ी किंवदंतियाँ क्या हैं?",
        "options_en": ["A Chinese emperor accidentally discovered it, and an Indian Buddhist ascetic cut off his eyelids which sprouted into tea plants", "It was discovered by a British explorer", "It grew wild in the forests", "It was a gift from the gods"],
        "options_hi": ["एक चीनी सम्राट ने गलती से इसकी खोज की, और एक भारतीय बौद्ध तपस्वी ने अपनी पलकें काट दीं जो चाय के पौधों के रूप में उग आईं", "यह एक ब्रिटिश खोजकर्ता द्वारा खोजा गया था", "यह जंगलों में जंगली रूप से उगा", "यह देवताओं का उपहार था"],
        "answer_en": "A Chinese emperor accidentally discovered it, and an Indian Buddhist ascetic cut off his eyelids which sprouted into tea plants",
        "answer_hi": "एक चीनी सम्राट ने गलती से इसकी खोज की, और एक भारतीय बौद्ध तपस्वी ने अपनी पलकें काट दीं जो चाय के पौधों के रूप में उग आईं",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 48,
        "question_en": "What does Rajvir see from the train?",
        "question_hi": "राजवीर ट्रेन से क्या देखता है?",
        "options_en": ["Crowded cities", "Barren land", "Vast tea gardens stretching as far as the eye could see", "Snow-capped mountains"],
        "options_hi": ["भीड़भाड़ वाले शहर", "बंजर भूमि", "दूर-दूर तक फैले विशाल चाय बागान", "बर्फ से ढके पहाड़"],
        "answer_en": "Vast tea gardens stretching as far as the eye could see",
        "answer_hi": "दूर-दूर तक फैले विशाल चाय बागान",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 49,
        "question_en": "What is the peak tea-plucking season in Assam?",
        "question_hi": "असम में चाय तोड़ने का चरम मौसम कब होता है?",
        "options_en": ["October to December", "May to July", "March to April", "January to February"],
        "options_hi": ["अक्टूबर से दिसंबर", "मई से जुलाई", "मार्च से अप्रैल", "जनवरी से फरवरी"],
        "answer_en": "May to July",
        "answer_hi": "मई से जुलाई",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 50,
        "question_en": "What excites Rajvir about visiting Assam?",
        "question_hi": "असम घूमने के बारे में राजवीर किस बात से उत्साहित है?",
        "options_en": ["The wildlife", "The historical sites", "The tea gardens and the opportunity to learn more about tea", "The adventure sports"],
        "options_hi": ["वन्यजीव", "ऐतिहासिक स्थल", "चाय बागान और चाय के बारे में अधिक जानने का अवसर", "साहसिक खेल"],
        "answer_en": "The tea gardens and the opportunity to learn more about tea",
        "answer_hi": "चाय बागान और चाय के बारे में अधिक जानने का अवसर",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 51,
        "question_en": "Who is the author of 'Amanda!'?",
        "question_hi": "'अमांडा!' के लेखक कौन हैं?",
        "options_en": ["Robin Klein", "Carol Ann Duffy", "Sylvia Plath", "Elizabeth Bishop"],
        "options_hi": ["रॉबिन क्लेन", "कैरोल एन डफी", "सिल्विया प्लाथ", "एलिजाबेथ बिशप"],
        "answer_en": "Robin Klein",
        "answer_hi": "रॉबिन क्लेन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 52,
        "question_en": "What is the poem 'Amanda!' about?",
        "question_hi": "कविता 'अमांडा!' किस बारे में है?",
        "options_en": ["A girl who loves to follow rules", "A boy who wants freedom", "A girl who fantasizes about escaping the constant nagging of her parents", "Parents who are very supportive"],
        "options_hi": ["एक लड़की जो नियमों का पालन करना पसंद करती है", "एक लड़का जो आज़ादी चाहता है", "एक लड़की जो अपने माता-पिता की लगातार डांट से बचने के बारे में कल्पना करती है", "माता-पिता जो बहुत सहायक हैं"],
        "answer_en": "A girl who fantasizes about escaping the constant nagging of her parents",
        "answer_hi": "एक लड़की जो अपने माता-पिता की लगातार डांट से बचने के बारे में कल्पना करती है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 53,
        "question_en": "What does Amanda imagine herself to be?",
        "question_hi": "अमांडा खुद को क्या होने की कल्पना करती है?",
        "options_en": ["A queen", "A teacher", "A mermaid, an orphan, Rapunzel", "A doctor"],
        "options_hi": ["एक रानी", "एक शिक्षिका", "एक जलपरी, एक अनाथ, रापुंजेल", "एक डॉक्टर"],
        "answer_en": "A mermaid, an orphan, Rapunzel",
        "answer_hi": ["एक जलपरी, एक अनाथ, रापुंजेल"],
        "attempted": false,
        "selected": ""
      },
      {
        "num": 54,
        "question_en": "Why does Amanda want to be a mermaid?",
        "question_hi": "अमांडा जलपरी क्यों बनना चाहती है?",
        "options_en": ["Because she loves water", "Because mermaids are powerful", "To drift blissfully in an emerald sea where she is the sole inhabitant", "Because she wants to sing"],
        "options_hi": ["क्योंकि उसे पानी पसंद है", "क्योंकि जलपरियां शक्तिशाली होती हैं", "एक पन्ना सागर में आनंदपूर्वक तैरने के लिए जहाँ वह एकमात्र निवासी है", "क्योंकि वह गाना चाहती है"],
        "answer_en": "To drift blissfully in an emerald sea where she is the sole inhabitant",
        "answer_hi": "एक पन्ना सागर में आनंदपूर्वक तैरने के लिए जहाँ वह एकमात्र निवासी है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 55,
        "question_en": "Why does Amanda want to be an orphan?",
        "question_hi": "अमांडा अनाथ क्यों बनना चाहती है?",
        "options_en": ["Because she hates her parents", "Because orphans have a lot of money", "To roam freely in the streets without anyone to instruct or scold her", "Because she wants to be adopted"],
        "options_hi": ["क्योंकि वह अपने माता-पिता से नफरत करती है", "क्योंकि अनाथों के पास बहुत पैसा होता है", "बिना किसी के निर्देश या डांटे सड़कों पर स्वतंत्र रूप से घूमने के लिए", "क्योंकि वह गोद लेना चाहती है"],
        "answer_en": "To roam freely in the streets without anyone to instruct or scold her",
        "answer_hi": "बिना किसी के निर्देश या डांटे सड़कों पर स्वतंत्र रूप से घूमने के लिए",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 56,
        "question_en": "Why does Amanda imagine herself as Rapunzel?",
        "question_hi": "अमांडा खुद को रापुंजेल के रूप में क्यों कल्पना करती है?",
        "options_en": ["Because she loves fairy tales", "Because Rapunzel had long hair", "To live peacefully in a tower where life is tranquil and she would never let down her bright hair", "Because she wants to meet a prince"],
        "options_hi": ["क्योंकि उसे परियों की कहानियाँ पसंद हैं", "क्योंकि रापुंजेल के लंबे बाल थे", "एक मीनार में शांति से रहने के लिए जहाँ जीवन शांत है और वह कभी भी अपने चमकीले बाल नीचे नहीं करेगी", "क्योंकि वह एक राजकुमार से मिलना चाहती है"],
        "answer_en": "To live peacefully in a tower where life is tranquil and she would never let down her bright hair",
        "answer_hi": "एक मीनार में शांति से रहने के लिए जहाँ जीवन शांत है और वह कभी भी अपने चमकीले बाल नीचे नहीं करेगी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 57,
        "question_en": "What is Amanda constantly being told not to do?",
        "question_hi": "अमांडा को लगातार क्या न करने के लिए कहा जा रहा है?",
        "options_en": ["To play outside", "To eat sweets", "To slouch, to bite her nails, to eat chocolate", "To talk to strangers"],
        "options_hi": ["बाहर खेलने के लिए", "मिठाई खाने के लिए", "झुकने के लिए, अपने नाखून चबाने के लिए, चॉकलेट खाने के लिए", "अजनबियों से बात करने के लिए"],
        "answer_en": "To slouch, to bite her nails, to eat chocolate",
        "answer_hi": ["झुकने के लिए, अपने नाखून चबाने के लिए, चॉकलेट खाने के लिए"],
        "attempted": false,
        "selected": ""
      },
      {
        "num": 58,
        "question_en": "How does Amanda react to the constant nagging?",
        "question_hi": "लगातार डांटने पर अमांडा कैसी प्रतिक्रिया देती है?",
        "options_en": ["She argues back", "She cries", "She sulks and doesn't pay attention, retreating into her own world of imagination", "She apologizes immediately"],
        "options_hi": ["वह पलटकर बहस करती है", "वह रोती है", "वह मुंह फुलाती है और ध्यान नहीं देती, अपनी कल्पना की दुनिया में चली जाती है", "वह तुरंत माफी मांगती है"],
        "answer_en": "She sulks and doesn't pay attention, retreating into her own world of imagination",
        "answer_hi": "वह मुंह फुलाती है और ध्यान नहीं देती, अपनी कल्पना की दुनिया में चली जाती है",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 59,
        "question_en": "What does the silence and freedom in her imagination contrast with?",
        "question_hi": "उसकी कल्पना में चुप्पी और स्वतंत्रता किसके विपरीत है?",
        "options_en": ["The loud noises outside", "The strict discipline and constant instructions she receives in reality", "The fun she has with her friends", "The stories she reads"],
        "options_hi": ["बाहर की तेज आवाजें", "सख्त अनुशासन और लगातार निर्देश जो उसे वास्तविकता में मिलते हैं", "मज़े जो वह अपने दोस्तों के साथ करती है", "कहानियाँ जो वह पढ़ती है"],
        "answer_en": "The strict discipline and constant instructions she receives in reality",
        "answer_hi": "सख्त अनुशासन और लगातार निर्देश जो उसे वास्तविकता में मिलते हैं",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 60,
        "question_en": "What does the poem 'Amanda!' convey about a child's desire for freedom?",
        "question_hi": "कविता 'अमांडा!' एक बच्चे की स्वतंत्रता की इच्छा के बारे में क्या बताती है?",
        "options_en": ["Children do not need freedom", "Children enjoy being constantly instructed", "Children often yearn for a world where they are free from constant nagging and have the space to be themselves", "Children are always rebellious"],
        "options_hi": ["बच्चों को स्वतंत्रता की आवश्यकता नहीं होती है", "बच्चों को लगातार निर्देश दिए जाने में आनंद आता है", "बच्चे अक्सर एक ऐसी दुनिया की लालसा रखते हैं जहाँ वे लगातार डांट से मुक्त हों और उनके पास खुद बनने की जगह हो", "बच्चे हमेशा विद्रोही होते हैं"],
        "answer_en": "Children often yearn for a world where they are free from constant nagging and have the space to be themselves",
        "answer_hi": "बच्चे अक्सर एक ऐसी दुनिया की लालसा रखते हैं जहाँ वे लगातार डांट से मुक्त हों और उनके पास खुद बनने की जगह हो",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 61,
        "question_en": "Who is the author of 'Animals'?",
        "question_hi": "'एनिमल्स' के लेखक कौन हैं?",
        "options_en": ["Walt Whitman", "Robert Frost", "William Wordsworth", "Alfred Tennyson"],
        "options_hi": ["वॉल्ट व्हिटमैन", "रॉबर्ट फ्रॉस्ट", "विलियम वर्ड्सवर्थ", "अल्फ्रेड टेनीसन"],
        "answer_en": "Walt Whitman",
        "answer_hi": "वॉल्ट व्हिटमैन",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 62,
        "question_en": "In the poem 'Animals', what qualities of animals does the poet admire?",
        "question_hi": "कविता 'एनिमल्स' में कवि जानवरों के किन गुणों की प्रशंसा करता है?",
        "options_en": ["Their intelligence and ability to use tools", "Their wealth and possessions", "Their placidity, self-containment, and lack of complaints about their condition", "Their ability to communicate with humans"],
        "options_hi": ["उनकी बुद्धिमत्ता और उपकरणों का उपयोग करने की क्षमता", "उनकी दौलत और संपत्ति", "उनकी शांति, आत्म-संयम और अपनी स्थिति के बारे में शिकायतों की कमी", "मनुष्यों के साथ संवाद करने की उनकी क्षमता"],
        "answer_en": "Their placidity, self-containment, and lack of complaints about their condition",
        "answer_hi": "उनकी शांति, आत्म-संयम और अपनी स्थिति के बारे में शिकायतों की कमी",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 63,
        "question_en": "What human qualities does the poet seem to have 'dropped' or lost?",
        "question_hi": "कवि ने किन मानवीय गुणों को 'छोड़' दिया है या खो दिया है?",
        "options_en": ["Kindness and generosity", "Greed, madness, and the tendency to complain about sins", "Intelligence and creativity", "The ability to love and care for others"],
        "options_hi": ["दयालुता और उदारता", "लालच, पागलपन और पापों के बारे में शिकायत करने की प्रवृत्ति", "बुद्धिमत्ता और रचनात्मकता", "दूसरों से प्यार करने और उनकी देखभाल करने की क्षमता"],
        "answer_en": "Greed, madness, and the tendency to complain about sins",
        "answer_hi": "लालच, पागलपन और पापों के बारे में शिकायत करने की प्रवृत्ति",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 64,
        "question_en": "What does the poet mean by 'Not one is respectable or unhappy over the whole earth'?",
        "question_hi": "कवि का 'पूरी पृथ्वी पर कोई भी सम्मानित या दुखी नहीं है' से क्या तात्पर्य है?",
        "options_en": ["Animals are all equal and content with their lives", "Humans are more respectable than animals", "Animals do not experience emotions", "The earth is a sad place"],
        "options_hi": ["सभी जानवर समान हैं और अपने जीवन से संतुष्ट हैं", "मनुष्य जानवरों से अधिक सम्मानित हैं", "जानवर भावनाओं का अनुभव नहीं करते हैं", "पृथ्वी एक दुखद जगह है"],
        "answer_en": "Animals are all equal and content with their lives",
        "answer_hi": "सभी जानवर समान हैं और अपने जीवन से संतुष्ट हैं",
        "attempted": false,
        "selected": ""
      },
      {
        "num": 65,
        "question_en": "What 'tokens' does the poet say that humans have dropped?",
        "question_hi": "कवि किन 'टोकन' के बारे में कहता है कि मनुष्य ने गिरा दिए हैं?",
        "options_en": ["Physical objects like money and jewelry", "Innocence, contentment, and a sense of belonging to the earth", "Their homes and families", "Their ability to speak and reason"],
        "options_hi": ["पैसे और गहनों जैसी भौतिक वस्तुएँ", "मासूमियत, संतोष और पृथ्वी से संबंधित होने की भावना", "उनके घर और परिवार", "बोलने और तर्क करने की उनकी क्षमता"],
        "answer_en": "Innocence, contentment, and a sense of belonging to the earth",
        "answer_hi": "मासूमियत, संतोष और पृथ्वी से संबंधित होने की भावना",
        "attempted": false,
        "selected": ""
      },
    
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