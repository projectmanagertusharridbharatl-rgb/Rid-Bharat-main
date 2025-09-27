const questions=[
  {
    "num": 1,
    "question_en": "What is Node.js primarily used for?",
    "question_hi": "Node.js मुख्य रूप से किसके लिए उपयोग किया जाता है?",
    "options_en": ["Frontend development", "Backend development", "Mobile app development", "Game development"],
    "options_hi": ["फ्रंटएंड डेवलपमेंट", "बैकएंड डेवलपमेंट", "मोबाइल ऐप डेवलपमेंट", "गेम डेवलपमेंट"],
    "answer_en": "Backend development",
    "answer_hi": "बैकएंड डेवलपमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which module is used to handle file operations in Node.js?",
    "question_hi": "Node.js में फाइल ऑपरेशन्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["http", "fs", "path", "os"],
    "options_hi": ["http", "fs", "path", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the 'require()' function do in Node.js?",
    "question_hi": "Node.js में 'require()' फंक्शन क्या करता है?",
    "options_en": ["Exports a module", "Imports a module", "Deletes a module", "Runs a script"],
    "options_hi": ["मॉड्यूल को एक्सपोर्ट करता है", "मॉड्यूल को इम्पोर्ट करता है", "मॉड्यूल को डिलीट करता है", "स्क्रिप्ट को रन करता है"],
    "answer_en": "Imports a module",
    "answer_hi": "मॉड्यूल को इम्पोर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of the following is NOT a core module in Node.js?",
    "question_hi": "निम्नलिखित में से कौन सा Node.js का कोर मॉड्यूल नहीं है?",
    "options_en": ["http", "fs", "express", "path"],
    "options_hi": ["http", "fs", "express", "path"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the default port for a Node.js HTTP server?",
    "question_hi": "Node.js HTTP सर्वर के लिए डिफ़ॉल्ट पोर्ट क्या है?",
    "options_en": ["3000", "80", "8080", "5000"],
    "options_hi": ["3000", "80", "8080", "5000"],
    "answer_en": "3000",
    "answer_hi": "3000",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which method is used to create a new HTTP server in Node.js?",
    "question_hi": "Node.js में एक नया HTTP सर्वर बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["http.createServer()", "http.newServer()", "http.startServer()", "http.listen()"],
    "options_hi": ["http.createServer()", "http.newServer()", "http.startServer()", "http.listen()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which command is used to initialize a new Node.js project?",
    "question_hi": "एक नया Node.js प्रोजेक्ट इनिशियलाइज़ करने के लिए कौन सा कमांड उपयोग किया जाता है?",
    "options_en": ["npm init", "node init", "npm start", "node new"],
    "options_hi": ["npm init", "node init", "npm start", "node new"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does 'npm' stand for?",
    "question_hi": "'npm' का पूरा नाम क्या है?",
    "options_en": ["Node Package Manager", "Node Project Manager", "New Package Module", "Node Program Manager"],
    "options_hi": ["Node Package Manager", "Node Project Manager", "New Package Module", "Node Program Manager"],
    "answer_en": "Node Package Manager",
    "answer_hi": "Node Package Manager",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of the following is a popular Node.js framework?",
    "question_hi": "निम्नलिखित में से कौन सा एक प्रसिद्ध Node.js फ्रेमवर्क है?",
    "options_en": ["Django", "Flask", "Express", "Laravel"],
    "options_hi": ["Django", "Flask", "Express", "Laravel"],
    "answer_en": "Express",
    "answer_hi": "Express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the purpose of 'package.json' in a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट में 'package.json' का उद्देश्य क्या है?",
    "options_en": ["To store source code", "To manage dependencies", "To configure the server", "To define HTML templates"],
    "options_hi": ["सोर्स कोड स्टोर करने के लिए", "डिपेंडेंसी मैनेज करने के लिए", "सर्वर कॉन्फ़िगर करने के लिए", "HTML टेम्प्लेट्स डिफाइन करने के लिए"],
    "answer_en": "To manage dependencies",
    "answer_hi": "डिपेंडेंसी मैनेज करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method is used to read environment variables in Node.js?",
    "question_hi": "Node.js में एनवायरनमेंट वेरिएबल्स को पढ़ने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["process.getEnv()", "process.env", "env.get()", "config.env"],
    "options_hi": ["process.getEnv()", "process.env", "env.get()", "config.env"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'exports' keyword in Node.js?",
    "question_hi": "Node.js में 'exports' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["To import a module", "To export a module", "To delete a module", "To run a script"],
    "options_hi": ["मॉड्यूल इम्पोर्ट करने के लिए", "मॉड्यूल एक्सपोर्ट करने के लिए", "मॉड्यूल डिलीट करने के लिए", "स्क्रिप्ट रन करने के लिए"],
    "answer_en": "To export a module",
    "answer_hi": "मॉड्यूल एक्सपोर्ट करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method is used to install a package locally using npm?",
    "question_hi": "npm का उपयोग करके लोकली पैकेज इंस्टॉल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["npm install -g", "npm install", "npm add", "npm get"],
    "options_hi": ["npm install -g", "npm install", "npm add", "npm get"],
    "answer_en": "npm install",
    "answer_hi": "npm install",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the purpose of 'node_modules' folder in a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट में 'node_modules' फोल्डर का उद्देश्य क्या है?",
    "options_en": ["To store project source code", "To store installed packages", "To store configuration files", "To store test cases"],
    "options_hi": ["प्रोजेक्ट सोर्स कोड स्टोर करने के लिए", "इंस्टॉल किए गए पैकेज स्टोर करने के लिए", "कॉन्फ़िगरेशन फाइल्स स्टोर करने के लिए", "टेस्ट केसेस स्टोर करने के लिए"],
    "answer_en": "To store installed packages",
    "answer_hi": "इंस्टॉल किए गए पैकेज स्टोर करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method is used to handle asynchronous operations in Node.js?",
    "question_hi": "Node.js में एसिंक्रोनस ऑपरेशन्स को हैंडल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["Promises", "Callbacks", "Async/Await", "All of the above"],
    "options_hi": ["प्रॉमिसेस", "कॉलबैक्स", "Async/Await", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of 'middleware' in Express.js?",
    "question_hi": "Express.js में 'मिडलवेयर' का उद्देश्य क्या है?",
    "options_en": ["To handle HTTP requests", "To manage databases", "To style web pages", "To create APIs"],
    "options_hi": ["HTTP रिक्वेस्ट्स को हैंडल करने के लिए", "डेटाबेस मैनेज करने के लिए", "वेब पेज स्टाइल करने के लिए", "APIs बनाने के लिए"],
    "answer_en": "To handle HTTP requests",
    "answer_hi": "HTTP रिक्वेस्ट्स को हैंडल करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method is used to send a response in Express.js?",
    "question_hi": "Express.js में रिस्पॉन्स भेजने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["res.send()", "res.write()", "res.end()", "res.json()"],
    "options_hi": ["res.send()", "res.write()", "res.end()", "res.json()"],
    "answer_en": "res.send()",
    "answer_hi": "res.send()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which database is commonly used with Node.js?",
    "question_hi": "Node.js के साथ आमतौर पर कौन सा डेटाबेस उपयोग किया जाता है?",
    "options_en": ["MySQL", "MongoDB", "PostgreSQL", "All of the above"],
    "options_hi": ["MySQL", "MongoDB", "PostgreSQL", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the purpose of 'body-parser' in Express.js?",
    "question_hi": "Express.js में 'body-parser' का उद्देश्य क्या है?",
    "options_en": ["To parse JSON requests", "To handle file uploads", "To manage cookies", "To validate forms"],
    "options_hi": ["JSON रिक्वेस्ट्स को पार्स करने के लिए", "फाइल अपलोड हैंडल करने के लिए", "कुकीज़ मैनेज करने के लिए", "फॉर्म वैलिडेट करने के लिए"],
    "answer_en": "To parse JSON requests",
    "answer_hi": "JSON रिक्वेस्ट्स को पार्स करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method is used to connect to MongoDB in Node.js?",
    "question_hi": "Node.js में MongoDB से कनेक्ट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["mongoose.connect()", "mongo.connect()", "db.connect()", "mongodb.connect()"],
    "options_hi": ["mongoose.connect()", "mongo.connect()", "db.connect()", "mongodb.connect()"],
    "answer_en": "mongoose.connect()",
    "answer_hi": "mongoose.connect()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the purpose of 'cors' middleware in Express.js?",
    "question_hi": "Express.js में 'cors' मिडलवेयर का उद्देश्य क्या है?",
    "options_en": ["To handle cookies", "To enable Cross-Origin Resource Sharing", "To parse JSON data", "To authenticate users"],
    "options_hi": ["कुकीज़ हैंडल करने के लिए", "क्रॉस-ओरिजिन रिसोर्स शेयरिंग को सक्षम करने के लिए", "JSON डेटा पार्स करने के लिए", "यूज़र्स को ऑथेंटिकेट करने के लिए"],
    "answer_en": "To enable Cross-Origin Resource Sharing",
    "answer_hi": "क्रॉस-ओरिजिन रिसोर्स शेयरिंग को सक्षम करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method is used to define a route in Express.js?",
    "question_hi": "Express.js में रूट डिफाइन करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["app.get()", "app.route()", "app.define()", "app.set()"],
    "options_hi": ["app.get()", "app.route()", "app.define()", "app.set()"],
    "answer_en": "app.get()",
    "answer_hi": "app.get()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the purpose of 'nodemon' in Node.js?",
    "question_hi": "Node.js में 'nodemon' का उद्देश्य क्या है?",
    "options_en": ["To debug code", "To automatically restart the server on changes", "To manage dependencies", "To optimize performance"],
    "options_hi": ["कोड डीबग करने के लिए", "बदलाव पर सर्वर को स्वतः रीस्टार्ट करने के लिए", "डिपेंडेंसी मैनेज करने के लिए", "परफॉरमेंस ऑप्टिमाइज़ करने के लिए"],
    "answer_en": "To automatically restart the server on changes",
    "answer_hi": "बदलाव पर सर्वर को स्वतः रीस्टार्ट करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method is used to handle errors in Express.js?",
    "question_hi": "Express.js में एरर्स को हैंडल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["app.error()", "app.catch()", "app.use() with error middleware", "res.error()"],
    "options_hi": ["app.error()", "app.catch()", "एरर मिडलवेयर के साथ app.use()", "res.error()"],
    "answer_en": "app.use() with error middleware",
    "answer_hi": "एरर मिडलवेयर के साथ app.use()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the purpose of 'JWT' in Node.js?",
    "question_hi": "Node.js में 'JWT' का उद्देश्य क्या है?",
    "options_en": ["To handle file uploads", "To authenticate users", "To parse JSON data", "To manage databases"],
    "options_hi": ["फाइल अपलोड हैंडल करने के लिए", "यूज़र्स को ऑथेंटिकेट करने के लिए", "JSON डेटा पार्स करने के लिए", "डेटाबेस मैनेज करने के लिए"],
    "answer_en": "To authenticate users",
    "answer_hi": "यूज़र्स को ऑथेंटिकेट करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method is used to read query parameters in Express.js?",
    "question_hi": "Express.js में क्वेरी पैरामीटर्स को पढ़ने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["req.query", "req.params", "req.body", "req.get()"],
    "options_hi": ["req.query", "req.params", "req.body", "req.get()"],
    "answer_en": "req.query",
    "answer_hi": "req.query",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the purpose of 'multer' in Node.js?",
    "question_hi": "Node.js में 'multer' का उद्देश्य क्या है?",
    "options_en": ["To handle file uploads", "To parse JSON data", "To manage cookies", "To authenticate users"],
    "options_hi": ["फाइल अपलोड हैंडल करने के लिए", "JSON डेटा पार्स करने के लिए", "कुकीज़ मैनेज करने के लिए", "यूज़र्स को ऑथेंटिकेट करने के लिए"],
    "answer_en": "To handle file uploads",
    "answer_hi": "फाइल अपलोड हैंडल करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to set headers in Express.js?",
    "question_hi": "Express.js में हेडर्स सेट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["res.setHeader()", "res.headers()", "res.set()", "res.header()"],
    "options_hi": ["res.setHeader()", "res.headers()", "res.set()", "res.header()"],
    "answer_en": "res.set()",
    "answer_hi": "res.set()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the purpose of 'socket.io' in Node.js?",
    "question_hi": "Node.js में 'socket.io' का उद्देश्य क्या है?",
    "options_en": ["To handle HTTP requests", "To enable real-time communication", "To manage databases", "To parse JSON data"],
    "options_hi": ["HTTP रिक्वेस्ट्स को हैंडल करने के लिए", "रियल-टाइम कम्युनिकेशन को सक्षम करने के लिए", "डेटाबेस मैनेज करने के लिए", "JSON डेटा पार्स करने के लिए"],
    "answer_en": "To enable real-time communication",
    "answer_hi": "रियल-टाइम कम्युनिकेशन को सक्षम करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which object provides information about environment variables in Node.js?",
    "question_hi": "Node.js में एनवायरनमेंट वेरिएबल्स की जानकारी कौन सा ऑब्जेक्ट देता है?",
    "options_en": ["process.env", "process.vars", "environment", "env"],
    "options_hi": ["process.env", "process.vars", "environment", "env"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which method is used to create a new buffer in Node.js?",
    "question_hi": "Node.js में एक नया बफर बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["Buffer.new()", "Buffer.create()", "Buffer.from()", "Buffer.alloc()"],
    "options_hi": ["Buffer.new()", "Buffer.create()", "Buffer.from()", "Buffer.alloc()"],
    "answer_en": "Buffer.alloc()",
    "answer_hi": "Buffer.alloc()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of 'cluster' module in Node.js?",
    "question_hi": "Node.js में 'cluster' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle file operations", "To manage child processes", "To parse JSON data", "To optimize performance"],
    "options_hi": ["फाइल ऑपरेशन्स हैंडल करने के लिए", "चाइल्ड प्रोसेसेस मैनेज करने के लिए", "JSON डेटा पार्स करने के लिए", "परफॉरमेंस ऑप्टिमाइज़ करने के लिए"],
    "answer_en": "To manage child processes",
    "answer_hi": "चाइल्ड प्रोसेसेस मैनेज करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method is used to read a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल को एसिंक्रोनस तरीके से पढ़ने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.readAsync()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.readAsync()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the purpose of 'util' module in Node.js?",
    "question_hi": "Node.js में 'util' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle HTTP requests", "To provide utility functions", "To manage databases", "To parse JSON data"],
    "options_hi": ["HTTP रिक्वेस्ट्स को हैंडल करने के लिए", "यूटिलिटी फंक्शन्स प्रदान करने के लिए", "डेटाबेस मैनेज करने के लिए", "JSON डेटा पार्स करने के लिए"],
    "answer_en": "To provide utility functions",
    "answer_hi": "यूटिलिटी फंक्शन्स प्रदान करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method is used to create a directory in Node.js?",
    "question_hi": "Node.js में डायरेक्टरी बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.dir()"],
    "options_hi": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.dir()"],
    "answer_en": "fs.mkdir()",
    "answer_hi": "fs.mkdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of 'path' module in Node.js?",
    "question_hi": "Node.js में 'path' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle HTTP requests", "To manage file paths", "To parse JSON data", "To optimize performance"],
    "options_hi": ["HTTP रिक्वेस्ट्स को हैंडल करने के लिए", "फाइल पाथ्स मैनेज करने के लिए", "JSON डेटा पार्स करने के लिए", "परफॉरमेंस ऑप्टिमाइज़ करने के लिए"],
    "answer_en": "To manage file paths",
    "answer_hi": "फाइल पाथ्स मैनेज करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method is used to delete a file in Node.js?",
    "question_hi": "Node.js में फाइल डिलीट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["fs.delete()", "fs.remove()", "fs.unlink()", "fs.rm()"],
    "options_hi": ["fs.delete()", "fs.remove()", "fs.unlink()", "fs.rm()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the purpose of 'events' module in Node.js?",
    "question_hi": "Node.js में 'events' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle HTTP requests", "To manage event-driven programming", "To parse JSON data", "To optimize performance"],
    "options_hi": ["HTTP रिक्वेस्ट्स को हैंडल करने के लिए", "इवेंट-ड्रिवन प्रोग्रामिंग मैनेज करने के लिए", "JSON डेटा पार्स करने के लिए", "परफॉरमेंस ऑप्टिमाइज़ करने के लिए"],
    "answer_en": "To manage event-driven programming",
    "answer_hi": "इवेंट-ड्रिवन प्रोग्रामिंग मैनेज करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method is used to write to a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल को एसिंक्रोनस तरीके से लिखने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["fs.writeFile()", "fs.writeFileSync()", "fs.write()", "fs.writeAsync()"],
    "options_hi": ["fs.writeFile()", "fs.writeFileSync()", "fs.write()", "fs.writeAsync()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of 'os' module in Node.js?",
    "question_hi": "Node.js में 'os' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle HTTP requests", "To interact with the operating system", "To parse JSON data", "To optimize performance"],
    "options_hi": ["HTTP रिक्वेस्ट्स को हैंडल करने के लिए", "ऑपरेटिंग सिस्टम के साथ इंटरैक्ट करने के लिए", "JSON डेटा पार्स करने के लिए", "परफॉरमेंस ऑप्टिमाइज़ करने के लिए"],
    "answer_en": "To interact with the operating system",
    "answer_hi": "ऑपरेटिंग सिस्टम के साथ इंटरैक्ट करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method is used to check if a file exists in Node.js?",
    "question_hi": "Node.js में चेक करने के लिए कि क्या कोई फाइल मौजूद है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["fs.exists()", "fs.check()", "fs.existsSync()", "fs.isFile()"],
    "options_hi": ["fs.exists()", "fs.check()", "fs.existsSync()", "fs.isFile()"],
    "answer_en": "fs.existsSync()",
    "answer_hi": "fs.existsSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the purpose of 'stream' module in Node.js?",
    "question_hi": "Node.js में 'stream' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle HTTP requests", "To manage data streams", "To parse JSON data", "To optimize performance"],
    "options_hi": ["HTTP रिक्वेस्ट्स को हैंडल करने के लिए", "डेटा स्ट्रीम्स मैनेज करने के लिए", "JSON डेटा पार्स करने के लिए", "परफॉरमेंस ऑप्टिमाइज़ करने के लिए"],
    "answer_en": "To manage data streams",
    "answer_hi": "डेटा स्ट्रीम्स मैनेज करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method is used to rename a file in Node.js?",
    "question_hi": "Node.js में फाइल का नाम बदलने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["fs.rename()", "fs.move()", "fs.change()", "fs.update()"],
    "options_hi": ["fs.rename()", "fs.move()", "fs.change()", "fs.update()"],
    "answer_en": "fs.rename()",
    "answer_hi": "fs.rename()",
    "attempted": false,
    "selected": ""
  },
    {
    "num": 44,
    "question_en": "What is the purpose of the 'crypto' module in Node.js?",
    "question_hi": "Node.js में 'crypto' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle HTTP requests", "To perform cryptographic operations", "To manage file streams", "To connect to databases"],
    "options_hi": ["HTTP रिक्वेस्ट्स को हैंडल करने के लिए", "क्रिप्टोग्राफिक ऑपरेशन्स करने के लिए", "फाइल स्ट्रीम्स मैनेज करने के लिए", "डेटाबेस से कनेक्ट करने के लिए"],
    "answer_en": "To perform cryptographic operations",
    "answer_hi": "क्रिप्टोग्राफिक ऑपरेशन्स करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method is used to hash passwords securely in Node.js?",
    "question_hi": "Node.js में पासवर्ड्स को सुरक्षित रूप से हैश करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["crypto.encrypt()", "crypto.hash()", "bcrypt.hash()", "password.hash()"],
    "options_hi": ["crypto.encrypt()", "crypto.hash()", "bcrypt.hash()", "password.hash()"],
    "answer_en": "bcrypt.hash()",
    "answer_hi": "bcrypt.hash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the purpose of the 'child_process' module in Node.js?",
    "question_hi": "Node.js में 'child_process' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle HTTP requests", "To create and manage child processes", "To parse JSON data", "To optimize performance"],
    "options_hi": ["HTTP रिक्वेस्ट्स को हैंडल करने के लिए", "चाइल्ड प्रोसेसेस बनाने और मैनेज करने के लिए", "JSON डेटा पार्स करने के लिए", "परफॉरमेंस ऑप्टिमाइज़ करने के लिए"],
    "answer_en": "To create and manage child processes",
    "answer_hi": "चाइल्ड प्रोसेसेस बनाने और मैनेज करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method is used to execute shell commands in Node.js?",
    "question_hi": "Node.js में शेल कमांड्स को एक्जीक्यूट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["child_process.run()", "child_process.exec()", "child_process.spawn()", "child_process.cmd()"],
    "options_hi": ["child_process.run()", "child_process.exec()", "child_process.spawn()", "child_process.cmd()"],
    "answer_en": "child_process.exec()",
    "answer_hi": "child_process.exec()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of the 'zlib' module in Node.js?",
    "question_hi": "Node.js में 'zlib' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle HTTP requests", "To compress and decompress data", "To manage databases", "To parse JSON data"],
    "options_hi": ["HTTP रिक्वेस्ट्स को हैंडल करने के लिए", "डेटा को कंप्रेस और डीकंप्रेस करने के लिए", "डेटाबेस मैनेज करने के लिए", "JSON डेटा पार्स करने के लिए"],
    "answer_en": "To compress and decompress data",
    "answer_hi": "डेटा को कंप्रेस और डीकंप्रेस करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method is used to create a readable stream in Node.js?",
    "question_hi": "Node.js में रीडेबल स्ट्रीम बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["fs.createReadStream()", "fs.readStream()", "stream.createReadable()", "stream.read()"],
    "options_hi": ["fs.createReadStream()", "fs.readStream()", "stream.createReadable()", "stream.read()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the purpose of the 'net' module in Node.js?",
    "question_hi": "Node.js में 'net' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To handle HTTP requests", "To create TCP servers and clients", "To parse JSON data", "To manage file operations"],
    "options_hi": ["HTTP रिक्वेस्ट्स को हैंडल करने के लिए", "TCP सर्वर और क्लाइंट बनाने के लिए", "JSON डेटा पार्स करने के लिए", "फाइल ऑपरेशन्स मैनेज करने के लिए"],
    "answer_en": "To create TCP servers and clients",
    "answer_hi": "TCP सर्वर और क्लाइंट बनाने के लिए",
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