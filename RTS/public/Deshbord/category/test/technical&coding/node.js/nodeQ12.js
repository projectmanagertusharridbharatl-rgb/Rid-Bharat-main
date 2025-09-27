const questions=[
  {
    "num": 1,
    "question_en": "What is Node.js primarily used for?",
    "question_hi": "Node.js मुख्य रूप से किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Frontend development", "Backend development", "Mobile app development", "Game development"],
    "options_hi": ["फ्रंटएंड डेवलपमेंट", "बैकएंड डेवलपमेंट", "मोबाइल ऐप डेवलपमेंट", "गेम डेवलपमेंट"],
    "answer_en": "Backend development",
    "answer_hi": "बैकएंड डेवलपमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which engine powers Node.js?",
    "question_hi": "Node.js को कौन सा इंजन पावर देता है?",
    "options_en": ["SpiderMonkey", "V8", "Chakra", "JavaScriptCore"],
    "options_hi": ["स्पाइडरमंकी", "V8", "चक्रा", "जावास्क्रिप्टकोर"],
    "answer_en": "V8",
    "answer_hi": "V8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the default package manager for Node.js?",
    "question_hi": "Node.js का डिफ़ॉल्ट पैकेज मैनेजर कौन सा है?",
    "options_en": ["Yarn", "npm", "pnpm", "Bower"],
    "options_hi": ["यार्न", "एनपीएम", "पीएनपीएम", "बावर"],
    "answer_en": "npm",
    "answer_hi": "एनपीएम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which command installs a package globally in Node.js?",
    "question_hi": "Node.js में ग्लोबली पैकेज इंस्टॉल करने के लिए कौन सा कमांड है?",
    "options_en": ["npm install", "npm install -g", "npm global add", "npm add --global"],
    "options_hi": ["एनपीएम इंस्टॉल", "एनपीएम इंस्टॉल -जी", "एनपीएम ग्लोबल ऐड", "एनपीएम ऐड --ग्लोबल"],
    "answer_en": "npm install -g",
    "answer_hi": "एनपीएम इंस्टॉल -जी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword is used to import a module in Node.js?",
    "question_hi": "Node.js में मॉड्यूल इम्पोर्ट करने के लिए कौन सा कीवर्ड प्रयोग होता है?",
    "options_en": ["import", "require", "include", "use"],
    "options_hi": ["इम्पोर्ट", "रिक्वायर", "इनक्लूड", "यूज़"],
    "answer_en": "require",
    "answer_hi": "रिक्वायर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the entry point file of a Node.js application?",
    "question_hi": "Node.js एप्लिकेशन की एंट्री पॉइंट फाइल कौन सी है?",
    "options_en": ["app.js", "main.js", "index.js", "server.js"],
    "options_hi": ["ऐप.जेएस", "मेन.जेएस", "इंडेक्स.जेएस", "सर्वर.जेएस"],
    "answer_en": "index.js",
    "answer_hi": "इंडेक्स.जेएस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which method is used to export a module in Node.js?",
    "question_hi": "Node.js में मॉड्यूल एक्सपोर्ट करने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["export", "module.exports", "exports", "return"],
    "options_hi": ["एक्सपोर्ट", "मॉड्यूल.एक्सपोर्ट्स", "एक्सपोर्ट्स", "रिटर्न"],
    "answer_en": "module.exports",
    "answer_hi": "मॉड्यूल.एक्सपोर्ट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which object provides information about the current process in Node.js?",
    "question_hi": "Node.js में करंट प्रोसेस की जानकारी कौन सा ऑब्जेक्ट प्रदान करता है?",
    "options_en": ["window", "global", "process", "this"],
    "options_hi": ["विंडो", "ग्लोबल", "प्रोसेस", "दिस"],
    "answer_en": "process",
    "answer_hi": "प्रोसेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method stops the event loop in Node.js?",
    "question_hi": "Node.js में इवेंट लूप को रोकने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["process.exit()", "event.stop()", "loop.exit()", "stopEventLoop()"],
    "options_hi": ["प्रोसेस.एग्ज़िट()", "इवेंट.स्टॉप()", "लूप.एग्ज़िट()", "स्टॉपइवेंटलूप()"],
    "answer_en": "process.exit()",
    "answer_hi": "प्रोसेस.एग्ज़िट()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does the `__dirname` variable return in Node.js?",
    "question_hi": "Node.js में `__dirname` वेरिएबल क्या रिटर्न करता है?",
    "options_en": ["Current filename", "Current directory name", "Parent directory name", "Root directory name"],
    "options_hi": ["करंट फाइलनेम", "करंट डायरेक्टरी नाम", "पैरेंट डायरेक्टरी नाम", "रूट डायरेक्टरी नाम"],
    "answer_en": "Current directory name",
    "answer_hi": "करंट डायरेक्टरी नाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which module is used to handle file paths in Node.js?",
    "question_hi": "Node.js में फाइल पाथ्स को हैंडल करने के लिए कौन सा मॉड्यूल प्रयोग होता है?",
    "options_en": ["fs", "path", "os", "util"],
    "options_hi": ["एफएस", "पाथ", "ओएस", "यूटिल"],
    "answer_en": "path",
    "answer_hi": "पाथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method joins multiple path segments in Node.js?",
    "question_hi": "Node.js में मल्टीपल पाथ सेगमेंट्स को जोड़ने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["path.concat()", "path.join()", "path.resolve()", "path.merge()"],
    "options_hi": ["पाथ.कॉन्कैट()", "पाथ.जॉइन()", "पाथ.रिज़ॉल्व()", "पाथ.मर्ज()"],
    "answer_en": "path.join()",
    "answer_hi": "पाथ.जॉइन()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which module is used to create an HTTP server in Node.js?",
    "question_hi": "Node.js में HTTP सर्वर बनाने के लिए कौन सा मॉड्यूल प्रयोग होता है?",
    "options_en": ["http", "https", "net", "web"],
    "options_hi": ["एचटीटीपी", "एचटीटीपीएस", "नेट", "वेब"],
    "answer_en": "http",
    "answer_hi": "एचटीटीपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method creates an HTTP server in Node.js?",
    "question_hi": "Node.js में HTTP सर्वर बनाने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["http.createServer()", "http.server()", "http.init()", "http.start()"],
    "options_hi": ["एचटीटीपी.क्रिएटसर्वर()", "एचटीटीपी.सर्वर()", "एचटीटीपी.इनिट()", "एचटीटीपी.स्टार्ट()"],
    "answer_en": "http.createServer()",
    "answer_hi": "एचटीटीपी.क्रिएटसर्वर()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method makes Node.js listen to a specific port?",
    "question_hi": "Node.js को किसी विशिष्ट पोर्ट पर लिसन कराने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["server.port()", "server.listen()", "server.start()", "server.bind()"],
    "options_hi": ["सर्वर.पोर्ट()", "सर्वर.लिसन()", "सर्वर.स्टार्ट()", "सर्वर.बाइंड()"],
    "answer_en": "server.listen()",
    "answer_hi": "सर्वर.लिसन()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the default port for an HTTP server in Node.js?",
    "question_hi": "Node.js में HTTP सर्वर का डिफ़ॉल्ट पोर्ट कौन सा है?",
    "options_en": ["3000", "80", "8080", "5000"],
    "options_hi": ["3000", "80", "8080", "5000"],
    "answer_en": "80",
    "answer_hi": "80",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which module is used to handle operating system-related operations in Node.js?",
    "question_hi": "Node.js में ऑपरेटिंग सिस्टम से संबंधित ऑपरेशन्स को हैंडल करने के लिए कौन सा मॉड्यूल प्रयोग होता है?",
    "options_en": ["os", "fs", "path", "system"],
    "options_hi": ["ओएस", "एफएस", "पाथ", "सिस्टम"],
    "answer_en": "os",
    "answer_hi": "ओएस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method returns the operating system's CPU architecture?",
    "question_hi": "ऑपरेटिंग सिस्टम की CPU आर्किटेक्चर रिटर्न करने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["os.arch()", "os.cpu()", "os.platform()", "os.type()"],
    "options_hi": ["ओएस.आर्क()", "ओएस.सीपीयू()", "ओएस.प्लेटफॉर्म()", "ओएस.टाइप()"],
    "answer_en": "os.arch()",
    "answer_hi": "ओएस.आर्क()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which module is used to handle child processes in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेसेस को हैंडल करने के लिए कौन सा मॉड्यूल प्रयोग होता है?",
    "options_en": ["child_process", "process", "worker", "thread"],
    "options_hi": ["चाइल्ड_प्रोसेस", "प्रोसेस", "वर्कर", "थ्रेड"],
    "answer_en": "child_process",
    "answer_hi": "चाइल्ड_प्रोसेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method spawns a new process in Node.js?",
    "question_hi": "Node.js में नया प्रोसेस स्पॉन करने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["child_process.spawn()", "child_process.fork()", "child_process.exec()", "child_process.run()"],
    "options_hi": ["चाइल्ड_प्रोसेस.स्पॉन()", "चाइल्ड_प्रोसेस.फोर्क()", "चाइल्ड_प्रोसेस.एग्ज़िक()", "चाइल्ड_प्रोसेस.रन()"],
    "answer_en": "child_process.spawn()",
    "answer_hi": "चाइल्ड_प्रोसेस.स्पॉन()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method executes a shell command in Node.js?",
    "question_hi": "Node.js में शेल कमांड एक्ज़िक्यूट करने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["child_process.exec()", "child_process.cmd()", "child_process.run()", "child_process.shell()"],
    "options_hi": ["चाइल्ड_प्रोसेस.एग्ज़िक()", "चाइल्ड_प्रोसेस.कमांड()", "चाइल्ड_प्रोसेस.रन()", "चाइल्ड_प्रोसेस.शेल()"],
    "answer_en": "child_process.exec()",
    "answer_hi": "चाइल्ड_प्रोसेस.एग्ज़िक()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which module is used to handle streams in Node.js?",
    "question_hi": "Node.js में स्ट्रीम्स को हैंडल करने के लिए कौन सा मॉड्यूल प्रयोग होता है?",
    "options_en": ["stream", "fs", "buffer", "data"],
    "options_hi": ["स्ट्रीम", "एफएस", "बफर", "डेटा"],
    "answer_en": "stream",
    "answer_hi": "स्ट्रीम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which method creates a readable stream in Node.js?",
    "question_hi": "Node.js में रीडेबल स्ट्रीम बनाने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["fs.createReadStream()", "fs.readStream()", "stream.createReadable()", "stream.read()"],
    "options_hi": ["एफएस.क्रिएटरीडस्ट्रीम()", "एफएस.रीडस्ट्रीम()", "स्ट्रीम.क्रिएटरीडेबल()", "स्ट्रीम.रीड()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "एफएस.क्रिएटरीडस्ट्रीम()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method creates a writable stream in Node.js?",
    "question_hi": "Node.js में राइटेबल स्ट्रीम बनाने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["fs.createWriteStream()", "fs.writeStream()", "stream.createWritable()", "stream.write()"],
    "options_hi": ["एफएस.क्रिएटराइटस्ट्रीम()", "एफएस.राइटस्ट्रीम()", "स्ट्रीम.क्रिएटराइटेबल()", "स्ट्रीम.राइट()"],
    "answer_en": "fs.createWriteStream()",
    "answer_hi": "एफएस.क्रिएटराइटस्ट्रीम()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which module is used to handle buffers in Node.js?",
    "question_hi": "Node.js में बफर्स को हैंडल करने के लिए कौन सा मॉड्यूल प्रयोग होता है?",
    "options_en": ["buffer", "fs", "stream", "data"],
    "options_hi": ["बफर", "एफएस", "स्ट्रीम", "डेटा"],
    "answer_en": "buffer",
    "answer_hi": "बफर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method creates a new buffer in Node.js?",
    "question_hi": "Node.js में नया बफर बनाने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["Buffer.alloc()", "Buffer.new()", "Buffer.create()", "Buffer()"],
    "options_hi": ["बफर.अलोक()", "बफर.न्यू()", "बफर.क्रिएट()", "बफर()"],
    "answer_en": "Buffer.alloc()",
    "answer_hi": "बफर.अलोक()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method converts a buffer to a string in Node.js?",
    "question_hi": "Node.js में बफर को स्ट्रिंग में कन्वर्ट करने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["buffer.toString()", "buffer.toStr()", "buffer.string()", "buffer.decode()"],
    "options_hi": ["बफर.टूस्ट्रिंग()", "बफर.टूस्ट्र()", "बफर.स्ट्रिंग()", "बफर.डिकोड()"],
    "answer_en": "buffer.toString()",
    "answer_hi": "बफर.टूस्ट्रिंग()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which module is used to handle HTTP requests in Node.js?",
    "question_hi": "Node.js में HTTP रिक्वेस्ट्स को हैंडल करने के लिए कौन सा मॉड्यूल प्रयोग होता है?",
    "options_en": ["http", "https", "net", "request"],
    "options_hi": ["एचटीटीपी", "एचटीटीपीएस", "नेट", "रिक्वेस्ट"],
    "answer_en": "http",
    "answer_hi": "एचटीटीपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method makes an HTTP GET request in Node.js?",
    "question_hi": "Node.js में HTTP GET रिक्वेस्ट करने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["http.get()", "http.request()", "http.fetch()", "http.call()"],
    "options_hi": ["एचटीटीपी.गेट()", "एचटीटीपी.रिक्वेस्ट()", "एचटीटीपी.फ़ेच()", "एचटीटीपी.कॉल()"],
    "answer_en": "http.get()",
    "answer_hi": "एचटीटीपी.गेट()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which module is used to handle URL parsing in Node.js?",
    "question_hi": "Node.js में URL पार्सिंग के लिए कौन सा मॉड्यूल प्रयोग होता है?",
    "options_en": ["url", "querystring", "path", "http"],
    "options_hi": ["यूआरएल", "क्वेरीस्ट्रिंग", "पाथ", "एचटीटीपी"],
    "answer_en": "url",
    "answer_hi": "यूआरएल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which method parses a URL in Node.js?",
    "question_hi": "Node.js में URL पार्स करने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["url.parse()", "url.decode()", "url.split()", "url.resolve()"],
    "options_hi": ["यूआरएल.पार्स()", "यूआरएल.डिकोड()", "यूआरएल.स्प्लिट()", "यूआरएल.रिज़ॉल्व()"],
    "answer_en": "url.parse()",
    "answer_hi": "यूआरएल.पार्स()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which module is used to handle query strings in Node.js?",
    "question_hi": "Node.js में क्वेरी स्ट्रिंग्स को हैंडल करने के लिए कौन सा मॉड्यूल प्रयोग होता है?",
    "options_en": ["querystring", "url", "http", "fs"],
    "options_hi": ["क्वेरीस्ट्रिंग", "यूआरएल", "एचटीटीपी", "एफएस"],
    "answer_en": "querystring",
    "answer_hi": "क्वेरीस्ट्रिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method parses a query string in Node.js?",
    "question_hi": "Node.js में क्वेरी स्ट्रिंग पार्स करने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["querystring.parse()", "querystring.decode()", "querystring.split()", "querystring.resolve()"],
    "options_hi": ["क्वेरीस्ट्रिंग.पार्स()", "क्वेरीस्ट्रिंग.डिकोड()", "क्वेरीस्ट्रिंग.स्प्लिट()", "क्वेरीस्ट्रिंग.रिज़ॉल्व()"],
    "answer_en": "querystring.parse()",
    "answer_hi": "क्वेरीस्ट्रिंग.पार्स()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which module is used to handle events in Node.js?",
    "question_hi": "Node.js में इवेंट्स को हैंडल करने के लिए कौन सा मॉड्यूल प्रयोग होता है?",
    "options_en": ["events", "event", "emitter", "eventEmitter"],
    "options_hi": ["इवेंट्स", "इवेंट", "एमिटर", "इवेंटएमिटर"],
    "answer_en": "events",
    "answer_hi": "इवेंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which class is used to create an event emitter in Node.js?",
    "question_hi": "Node.js में इवेंट एमिटर बनाने के लिए कौन सी क्लास प्रयोग होती है?",
    "options_en": ["EventEmitter", "Emitter", "Event", "Events"],
    "options_hi": ["इवेंटएमिटर", "एमिटर", "इवेंट", "इवेंट्स"],
    "answer_en": "EventEmitter",
    "answer_hi": "इवेंटएमिटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which method emits an event in Node.js?",
    "question_hi": "Node.js में इवेंट एमिट करने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["emit()", "trigger()", "fire()", "send()"],
    "options_hi": ["एमिट()", "ट्रिगर()", "फायर()", "सेंड()"],
    "answer_en": "emit()",
    "answer_hi": "एमिट()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method listens for an event in Node.js?",
    "question_hi": "Node.js में इवेंट सुनने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["on()", "listen()", "addListener()", "subscribe()"],
    "options_hi": ["ऑन()", "लिसन()", "ऐडलिसनर()", "सब्सक्राइब()"],
    "answer_en": "on()",
    "answer_hi": "ऑन()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which module is used to handle cryptographic operations in Node.js?",
    "question_hi": "Node.js में क्रिप्टोग्राफ़िक ऑपरेशन्स को हैंडल करने के लिए कौन सा मॉड्यूल प्रयोग होता है?",
    "options_en": ["crypto", "hash", "encrypt", "security"],
    "options_hi": ["क्रिप्टो", "हैश", "एन्क्रिप्ट", "सिक्योरिटी"],
    "answer_en": "crypto",
    "answer_hi": "क्रिप्टो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method creates a hash in Node.js?",
    "question_hi": "Node.js में हैश बनाने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["crypto.createHash()", "crypto.hash()", "crypto.generateHash()", "crypto.encrypt()"],
    "options_hi": ["क्रिप्टो.क्रिएटहैश()", "क्रिप्टो.हैश()", "क्रिप्टो.जनरेटहैश()", "क्रिप्टो.एन्क्रिप्ट()"],
    "answer_en": "crypto.createHash()",
    "answer_hi": "क्रिप्टो.क्रिएटहैश()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which module is used to handle file system operations in Node.js?",
    "question_hi": "Node.js में फाइल सिस्टम ऑपरेशन्स को हैंडल करने के लिए कौन सा मॉड्यूल प्रयोग होता है?",
    "options_en": ["fs", "file", "path", "os"],
    "options_hi": ["एफएस", "फाइल", "पाथ", "ओएस"],
    "answer_en": "fs",
    "answer_hi": "एफएस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method reads a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल को एसिंक्रोनसली पढ़ने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.readAsync()"],
    "options_hi": ["एफएस.रीडफाइल()", "एफएस.रीडफाइलसिंक()", "एफएस.रीड()", "एफएस.रीडऐसिंक()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "एफएस.रीडफाइल()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method writes to a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल में एसिंक्रोनसली लिखने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["fs.writeFile()", "fs.writeFileSync()", "fs.write()", "fs.writeAsync()"],
    "options_hi": ["एफएस.राइटफाइल()", "एफएस.राइटफाइलसिंक()", "एफएस.राइट()", "एफएस.राइटऐसिंक()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "एफएस.राइटफाइल()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method appends to a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल में एसिंक्रोनसली ऐपेंड करने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["fs.appendFile()", "fs.appendFileSync()", "fs.add()", "fs.append()"],
    "options_hi": ["एफएस.ऐपेंडफाइल()", "एफएस.ऐपेंडफाइलसिंक()", "एफएस.ऐड()", "एफएस.ऐपेंड()"],
    "answer_en": "fs.appendFile()",
    "answer_hi": "एफएस.ऐपेंडफाइल()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method deletes a file in Node.js?",
    "question_hi": "Node.js में फाइल डिलीट करने के लिए कौन सी मेथड प्रयोग होती है?",
    "options_en": ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.rm()"],
    "options_hi": ["एफएस.अनलिंक()", "एफएस.डिलीट()", "एफएस.रिमूव()", "एफएस.आरएम()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "एफएस.अनलिंक()",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 45,
    "question_en": "Which built-in module in Node.js provides information about the operating system?",
    "question_hi": "Node.js में ऑपरेटिंग सिस्टम की जानकारी प्रदान करने वाला बिल्ट-इन मॉड्यूल कौन सा है?",
    "options_en": ["os", "sys", "info", "process"],
    "options_hi": ["os", "sys", "info", "process"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to listen for HTTP requests in a Node.js server?",
    "question_hi": "Node.js सर्वर में HTTP अनुरोधों को सुनने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["server.listen()", "server.on()", "server.start()", "server.accept()"],
    "options_hi": ["server.listen()", "server.on()", "server.start()", "server.accept()"],
    "answer_en": "server.listen()",
    "answer_hi": "server.listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used to schedule code execution after a delay in Node.js?",
    "question_hi": "Node.js में देरी के बाद कोड निष्पादन शेड्यूल करने के लिए कौन सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["setTimeout()", "setInterval()", "setImmediate()", "delay()"],
    "options_hi": ["setTimeout()", "setInterval()", "setImmediate()", "delay()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "In Node.js, which method is used to send headers with an HTTP response?",
    "question_hi": "Node.js में HTTP प्रतिक्रिया के साथ हेडर भेजने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["response.writeHead()", "response.setHeader()", "response.headers()", "response.sendHeader()"],
    "options_hi": ["response.writeHead()", "response.setHeader()", "response.headers()", "response.sendHeader()"],
    "answer_en": "response.writeHead()",
    "answer_hi": "response.writeHead()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which command initializes a new Node.js project with default settings?",
    "question_hi": "कौन सा कमांड Node.js प्रोजेक्ट को डिफ़ॉल्ट सेटिंग्स के साथ इनिशियलाइज़ करता है?",
    "options_en": ["npm init -y", "npm start", "npm create", "npm install"],
    "options_hi": ["npm init -y", "npm start", "npm create", "npm install"],
    "answer_en": "npm init -y",
    "answer_hi": "npm init -y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Node.js module provides methods for working with URLs?",
    "question_hi": "URLs के साथ कार्य करने के लिए Node.js में कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["url", "http", "path", "querystring"],
    "options_hi": ["url", "http", "path", "querystring"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  }
];


let currentQuestion = 0;
let language = "en"; // Default English
let timeLeft = 10800; // 5-minute timer
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
        let confirmation = confirm("Are you sure you want to submit the test?");
        if (!confirmation) return;

        clearInterval(timerInterval);

        let attempted = 0, notAttempted = 0, score = 0;
        const results = [];

        questions.forEach(q => {
                if (q.attempted) {
                        attempted++;
                        if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                                score++;
                        }
                } else {
                        notAttempted++;
                }
                results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
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
        timeLeft = 180 * 60; // Convert 180 minutes to seconds (180 × 60)

        timerInterval = setInterval(() => {
                if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        alert("Time's up! Submitting the quiz automatically.");
                        submitQuiz();
                } else {
                        const hours = Math.floor(timeLeft / 3600);
                        const minutes = Math.floor((timeLeft % 3600) / 60);
                        const seconds = timeLeft % 60;

                        // Format as HH:MM:SS with leading zeros
                        timerElement.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                        timeLeft--;
                }
        }, 1000);
}
function updateNavigation() {
        const navElement = document.getElementById("circleContainer");
        navElement.innerHTML = "";

        questions.forEach((q, index) => {
                let color = "gray"; // Default not visited
                if (q.attempted) {
                        color = "green"; // Answered
                }
                if (q.selected === "") {
                        color = "gray"; // Not answered
                }
                if (index === currentQuestion) {
                        color = "blue"; // Current question
                }
                navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
        });
}

window.onload = function () {
        loadQuestion(currentQuestion);
        startTimer();
};