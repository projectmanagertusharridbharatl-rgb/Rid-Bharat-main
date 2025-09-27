const questions=[
  {
    "num": 1,
    "question_en": "What is the purpose of the 'package.json' file in a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट में 'package.json' फाइल का उद्देश्य क्या है?",
    "options_en": [
      "To manage project dependencies",
      "To store JavaScript code",
      "To run the server",
      "To configure the database"
    ],
    "options_hi": [
      "प्रोजेक्ट की निर्भरताओं का प्रबंधन करने के लिए",
      "जावास्क्रिप्ट कोड स्टोर करने के लिए",
      "सर्वर चलाने के लिए",
      "डेटाबेस को कॉन्फ़िगर करने के लिए"
    ],
    "answer_en": "To manage project dependencies",
    "answer_hi": "प्रोजेक्ट की निर्भरताओं का प्रबंधन करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which module is used to create TCP servers and clients in Node.js?",
    "question_hi": "Node.js में TCP सर्वर और क्लाइंट बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["net", "http", "tls", "dns"],
    "options_hi": ["net", "http", "tls", "dns"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which Node.js function is used to schedule code execution after a delay?",
    "question_hi": "Node.js में देरी के बाद कोड निष्पादित करने के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does the 'process.env' object provide in Node.js?",
    "question_hi": "Node.js में 'process.env' ऑब्जेक्ट क्या प्रदान करता है?",
    "options_en": [
      "Environment variables",
      "File system details",
      "Network settings",
      "Current user info"
    ],
    "options_hi": [
      "एनवायरनमेंट वेरिएबल्स",
      "फाइल सिस्टम विवरण",
      "नेटवर्क सेटिंग्स",
      "वर्तमान उपयोगकर्ता जानकारी"
    ],
    "answer_en": "Environment variables",
    "answer_hi": "एनवायरनमेंट वेरिएबल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method is used to write data to a file synchronously in Node.js?",
    "question_hi": "Node.js में फाइल में सिंक्रोनसली डेटा लिखने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.writeFileSync()", "fs.writeFile()", "fs.appendFile()", "fs.createWriteStream()"],
    "options_hi": ["fs.writeFileSync()", "fs.writeFile()", "fs.appendFile()", "fs.createWriteStream()"],
    "answer_en": "fs.writeFileSync()",
    "answer_hi": "fs.writeFileSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following is an event emitter method in Node.js?",
    "question_hi": "Node.js में निम्न में से कौन सा ईवेंट एमिटर मेथड है?",
    "options_en": ["on()", "emit()", "removeListener()", "All of the above"],
    "options_hi": ["on()", "emit()", "removeListener()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which core Node.js module provides cryptographic functionality?",
    "question_hi": "Node.js का कौन सा कोर मॉड्यूल क्रिप्टोग्राफिक कार्य प्रदान करता है?",
    "options_en": ["crypto", "tls", "net", "security"],
    "options_hi": ["crypto", "tls", "net", "security"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which of the following can be used to create a child process in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेस बनाने के लिए निम्न में से कौन सा उपयोग किया जा सकता है?",
    "options_en": ["child_process.fork()", "child_process.spawn()", "child_process.exec()", "All of the above"],
    "options_hi": ["child_process.fork()", "child_process.spawn()", "child_process.exec()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method is used to listen for HTTP server requests in Node.js?",
    "question_hi": "Node.js में HTTP सर्वर रिक्वेस्ट सुनने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["server.listen()", "server.start()", "server.onRequest()", "server.run()"],
    "options_hi": ["server.listen()", "server.start()", "server.onRequest()", "server.run()"],
    "answer_en": "server.listen()",
    "answer_hi": "server.listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which module can be used to compress files in Node.js?",
    "question_hi": "Node.js में फाइल्स को कंप्रेस करने के लिए कौन सा मॉड्यूल उपयोग किया जा सकता है?",
    "options_en": ["zlib", "fs", "crypto", "stream"],
    "options_hi": ["zlib", "fs", "crypto", "stream"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is NOT a valid way to import modules in Node.js?",
    "question_hi": "Node.js में मॉड्यूल इंपोर्ट करने का कौन सा तरीका सही नहीं है?",
    "options_en": ["require()", "import()", "include()", "All are valid"],
    "options_hi": ["require()", "import()", "include()", "सभी सही हैं"],
    "answer_en": "include()",
    "answer_hi": "include()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method parses a JSON string to an object in Node.js?",
    "question_hi": "Node.js में JSON स्ट्रिंग को ऑब्जेक्ट में पार्स करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.decode()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.decode()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which command is used to install a package using npm?",
    "question_hi": "npm का उपयोग करके पैकेज इंस्टॉल करने के लिए कौन सा कमांड उपयोग किया जाता है?",
    "options_en": ["npm install <package>", "npm add <package>", "npm get <package>", "npm fetch <package>"],
    "options_hi": ["npm install <package>", "npm add <package>", "npm get <package>", "npm fetch <package>"],
    "answer_en": "npm install <package>",
    "answer_hi": "npm install <package>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which module helps in creating web servers using Express.js?",
    "question_hi": "Express.js के साथ वेब सर्वर बनाने में कौन सा मॉड्यूल मदद करता है?",
    "options_en": ["express", "http", "fs", "url"],
    "options_hi": ["express", "http", "fs", "url"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 15,
    "question_en": "What is the purpose of 'callback' functions in Node.js?",
    "question_hi": "Node.js में 'callback' फ़ंक्शन का उद्देश्य क्या है?",
    "options_en": [
      "To handle asynchronous operations",
      "To declare variables",
      "To manage errors",
      "To create modules"
    ],
    "options_hi": [
      "असिंक्रोनस ऑपरेशंस को हैंडल करने के लिए",
      "वेरिएबल्स घोषित करने के लिए",
      "एरर मैनेज करने के लिए",
      "मॉड्यूल बनाने के लिए"
    ],
    "answer_en": "To handle asynchronous operations",
    "answer_hi": "असिंक्रोनस ऑपरेशंस को हैंडल करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which Node.js feature allows non-blocking I/O operations?",
    "question_hi": "Node.js की कौन सी विशेषता नॉन-ब्लॉकिंग I/O ऑपरेशंस की अनुमति देती है?",
    "options_en": [
      "Event Loop",
      "Threads",
      "Callbacks",
      "Synchronous programming"
    ],
    "options_hi": [
      "इवेंट लूप",
      "थ्रेड्स",
      "कॉलबैक्स",
      "सिंक्रोनस प्रोग्रामिंग"
    ],
    "answer_en": "Event Loop",
    "answer_hi": "इवेंट लूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method is used to create a readable stream in Node.js?",
    "question_hi": "Node.js में readable stream बनाने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": [
      "fs.createReadStream()",
      "fs.createWriteStream()",
      "stream.read()",
      "stream.write()"
    ],
    "options_hi": [
      "fs.createReadStream()",
      "fs.createWriteStream()",
      "stream.read()",
      "stream.write()"
    ],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What type of language is Node.js based on?",
    "question_hi": "Node.js किस प्रकार की भाषा पर आधारित है?",
    "options_en": [
      "JavaScript",
      "Python",
      "Java",
      "C++"
    ],
    "options_hi": [
      "जावास्क्रिप्ट",
      "पायथन",
      "जावा",
      "C++"
    ],
    "answer_en": "JavaScript",
    "answer_hi": "जावास्क्रिप्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which module is used to handle events in Node.js?",
    "question_hi": "Node.js में ईवेंट्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": [
      "events",
      "http",
      "fs",
      "stream"
    ],
    "options_hi": [
      "events",
      "http",
      "fs",
      "stream"
    ],
    "answer_en": "events",
    "answer_hi": "events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'npm' in Node.js?",
    "question_hi": "Node.js में 'npm' क्या है?",
    "options_en": [
      "Node Package Manager",
      "Node Programming Model",
      "New Programming Module",
      "Node Public Modules"
    ],
    "options_hi": [
      "Node Package Manager",
      "Node Programming Model",
      "New Programming Module",
      "Node Public Modules"
    ],
    "answer_en": "Node Package Manager",
    "answer_hi": "Node Package Manager",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which command installs all dependencies listed in 'package.json'?",
    "question_hi": "'package.json' में सूचीबद्ध सभी डिपेंडेंसीज़ को इंस्टॉल करने के लिए कौन सा कमांड है?",
    "options_en": [
      "npm install",
      "npm update",
      "npm start",
      "npm build"
    ],
    "options_hi": [
      "npm install",
      "npm update",
      "npm start",
      "npm build"
    ],
    "answer_en": "npm install",
    "answer_hi": "npm install",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which object allows you to read command line arguments in Node.js?",
    "question_hi": "Node.js में कमांड लाइन आर्गुमेंट्स पढ़ने के लिए कौन सा ऑब्जेक्ट है?",
    "options_en": [
      "process.argv",
      "process.env",
      "process.args",
      "process.input"
    ],
    "options_hi": [
      "process.argv",
      "process.env",
      "process.args",
      "process.input"
    ],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What will 'console.log(typeof null)' output in Node.js?",
    "question_hi": "Node.js में 'console.log(typeof null)' क्या आउटपुट देगा?",
    "options_en": [
      "'object'",
      "'null'",
      "'undefined'",
      "'boolean'"
    ],
    "options_hi": [
      "'object'",
      "'null'",
      "'undefined'",
      "'boolean'"
    ],
    "answer_en": "'object'",
    "answer_hi": "'object'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method is used to stop the Node.js process?",
    "question_hi": "Node.js प्रक्रिया को रोकने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": [
      "process.exit()",
      "process.stop()",
      "process.kill()",
      "process.pause()"
    ],
    "options_hi": [
      "process.exit()",
      "process.stop()",
      "process.kill()",
      "process.pause()"
    ],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which module in Node.js helps in DNS resolution?",
    "question_hi": "Node.js में DNS रिज़ॉल्यूशन के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": [
      "dns",
      "net",
      "http",
      "os"
    ],
    "options_hi": [
      "dns",
      "net",
      "http",
      "os"
    ],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "How do you create a new Buffer of length 10 in Node.js?",
    "question_hi": "Node.js में लंबाई 10 का नया Buffer कैसे बनाते हैं?",
    "options_en": [
      "Buffer.alloc(10)",
      "new Buffer(10)",
      "Buffer.create(10)",
      "Buffer.new(10)"
    ],
    "options_hi": [
      "Buffer.alloc(10)",
      "new Buffer(10)",
      "Buffer.create(10)",
      "Buffer.new(10)"
    ],
    "answer_en": "Buffer.alloc(10)",
    "answer_hi": "Buffer.alloc(10)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the default encoding for 'fs.readFile()' in Node.js?",
    "question_hi": "Node.js में 'fs.readFile()' के लिए डिफ़ॉल्ट एनकोडिंग क्या है?",
    "options_en": [
      "Buffer",
      "utf8",
      "ascii",
      "binary"
    ],
    "options_hi": [
      "Buffer",
      "utf8",
      "ascii",
      "binary"
    ],
    "answer_en": "Buffer",
    "answer_hi": "Buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Node.js global variable contains the current module's filename?",
    "question_hi": "Node.js में वर्तमान मॉड्यूल की फाइलनाम किस ग्लोबल वेरिएबल में होता है?",
    "options_en": [
      "__filename",
      "__dirname",
      "module.filename",
      "process.filename"
    ],
    "options_hi": [
      "__filename",
      "__dirname",
      "module.filename",
      "process.filename"
    ],
    "answer_en": "__filename",
    "answer_hi": "__filename",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 29,
    "question_en": "Which global object in Node.js provides information about the current process?",
    "question_hi": "Node.js में कौन सा ग्लोबल ऑब्जेक्ट वर्तमान प्रक्रिया की जानकारी प्रदान करता है?",
    "options_en": ["process", "global", "module", "exports"],
    "options_hi": ["process", "global", "module", "exports"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "How do you include external modules in Node.js?",
    "question_hi": "Node.js में बाहरी मॉड्यूल्स को कैसे शामिल किया जाता है?",
    "options_en": ["require()", "import()", "include()", "load()"],
    "options_hi": ["require()", "import()", "include()", "load()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which module helps in working with file and directory paths in Node.js?",
    "question_hi": "Node.js में फाइल और डायरेक्टरी पाथ के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["path", "fs", "os", "url"],
    "options_hi": ["path", "fs", "os", "url"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method would you use to append data to a file asynchronously?",
    "question_hi": "असिंक्रोनसली फाइल में डेटा जोड़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.appendFile()", "fs.writeFile()", "fs.readFile()", "fs.open()"],
    "options_hi": ["fs.appendFile()", "fs.writeFile()", "fs.readFile()", "fs.open()"],
    "answer_en": "fs.appendFile()",
    "answer_hi": "fs.appendFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What does the 'module.exports' object do in Node.js?",
    "question_hi": "Node.js में 'module.exports' ऑब्जेक्ट क्या करता है?",
    "options_en": [
      "Exports functions or variables from a module",
      "Imports a module",
      "Starts the server",
      "Handles errors"
    ],
    "options_hi": [
      "मॉड्यूल से फंक्शंस या वेरिएबल्स एक्सपोर्ट करता है",
      "मॉड्यूल इम्पोर्ट करता है",
      "सर्वर शुरू करता है",
      "एरर हैंडल करता है"
    ],
    "answer_en": "Exports functions or variables from a module",
    "answer_hi": "मॉड्यूल से फंक्शंस या वेरिएबल्स एक्सपोर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which of the following is NOT a built-in Node.js module?",
    "question_hi": "निम्नलिखित में से कौन सा Node.js का बिल्ट-इन मॉड्यूल नहीं है?",
    "options_en": ["express", "fs", "http", "path"],
    "options_hi": ["express", "fs", "http", "path"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which HTTP status code indicates a successful GET request?",
    "question_hi": "कौन सा HTTP स्टेटस कोड सफल GET रिक्वेस्ट दर्शाता है?",
    "options_en": ["200", "404", "500", "301"],
    "options_hi": ["200", "404", "500", "301"],
    "answer_en": "200",
    "answer_hi": "200",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "How do you import the 'http' module in Node.js?",
    "question_hi": "Node.js में 'http' मॉड्यूल को कैसे इम्पोर्ट करते हैं?",
    "options_en": [
      "const http = require('http')",
      "import http from 'http'",
      "include('http')",
      "use('http')"
    ],
    "options_hi": [
      "const http = require('http')",
      "import http from 'http'",
      "include('http')",
      "use('http')"
    ],
    "answer_en": "const http = require('http')",
    "answer_hi": "const http = require('http')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the role of 'express.Router()' in Express.js?",
    "question_hi": "Express.js में 'express.Router()' की भूमिका क्या है?",
    "options_en": [
      "To create modular route handlers",
      "To start the server",
      "To handle database queries",
      "To render HTML views"
    ],
    "options_hi": [
      "मॉड्यूलर रूट हैंडलर्स बनाने के लिए",
      "सर्वर शुरू करने के लिए",
      "डेटाबेस क्वेरीज हैंडल करने के लिए",
      "HTML व्यू रेंडर करने के लिए"
    ],
    "answer_en": "To create modular route handlers",
    "answer_hi": "मॉड्यूलर रूट हैंडलर्स बनाने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which of the following is a way to handle errors in asynchronous code in Node.js?",
    "question_hi": "Node.js में असिंक्रोनस कोड में एरर्स हैंडल करने का तरीका कौन सा है?",
    "options_en": [
      "Passing error as first argument in callback",
      "Using try-catch",
      "Using promises with catch()",
      "All of the above"
    ],
    "options_hi": [
      "कॉलबैक में पहला आर्गुमेंट एरर के रूप में पास करना",
      "try-catch का उपयोग",
      "promises के साथ catch() का उपयोग",
      "उपरोक्त सभी"
    ],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which module would you use to work with streams in Node.js?",
    "question_hi": "Node.js में स्ट्रीम्स के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["stream", "fs", "http", "net"],
    "options_hi": ["stream", "fs", "http", "net"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does the 'os' module provide in Node.js?",
    "question_hi": "Node.js में 'os' मॉड्यूल क्या प्रदान करता है?",
    "options_en": [
      "Operating system-related utility methods",
      "File system operations",
      "HTTP server utilities",
      "Network utilities"
    ],
    "options_hi": [
      "ऑपरेटिंग सिस्टम संबंधित उपयोगी मेथड्स",
      "फाइल सिस्टम ऑपरेशंस",
      "HTTP सर्वर उपयोगिताएँ",
      "नेटवर्क उपयोगिताएँ"
    ],
    "answer_en": "Operating system-related utility methods",
    "answer_hi": "ऑपरेटिंग सिस्टम संबंधित उपयोगी मेथड्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which event is emitted when a readable stream has no more data?",
    "question_hi": "जब एक readable stream में और डेटा नहीं होता है तो कौन सा ईवेंट इमिट होता है?",
    "options_en": ["end", "close", "finish", "error"],
    "options_hi": ["end", "close", "finish", "error"],
    "answer_en": "end",
    "answer_hi": "end",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which of these is true about Node.js architecture?",
    "question_hi": "Node.js आर्किटेक्चर के बारे में कौन सा कथन सही है?",
    "options_en": [
      "It uses a single-threaded event loop",
      "It is multi-threaded by default",
      "It blocks I/O operations",
      "It runs only in browsers"
    ],
    "options_hi": [
      "यह एक सिंगल-थ्रेडेड इवेंट लूप का उपयोग करता है",
      "यह डिफ़ॉल्ट रूप से मल्टी-थ्रेडेड है",
      "यह I/O ऑपरेशंस को ब्लॉक करता है",
      "यह केवल ब्राउज़र में चलता है"
    ],
    "answer_en": "It uses a single-threaded event loop",
    "answer_hi": "यह एक सिंगल-थ्रेडेड इवेंट लूप का उपयोग करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "How do you send a response to an HTTP request in Node.js?",
    "question_hi": "Node.js में HTTP रिक्वेस्ट को रिस्पॉन्स कैसे भेजते हैं?",
    "options_en": [
      "Using response.write() and response.end()",
      "Using console.log()",
      "Using process.send()",
      "Using res.sendFile()"
    ],
    "options_hi": [
      "response.write() और response.end() का उपयोग करके",
      "console.log() का उपयोग करके",
      "process.send() का उपयोग करके",
      "res.sendFile() का उपयोग करके"
    ],
    "answer_en": "Using response.write() and response.end()",
    "answer_hi": "response.write() और response.end() का उपयोग करके",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method is used to parse a URL string in Node.js?",
    "question_hi": "Node.js में URL स्ट्रिंग को पार्स करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": [
      "url.parse()",
      "URL.parse()",
      "url.resolve()",
      "url.read()"
    ],
    "options_hi": [
      "url.parse()",
      "URL.parse()",
      "url.resolve()",
      "url.read()"
    ],
    "answer_en": "url.parse()",
    "answer_hi": "url.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which property provides the directory name of the current module in Node.js?",
    "question_hi": "Node.js में वर्तमान मॉड्यूल का डायरेक्टरी नाम कौन सी प्रॉपर्टी प्रदान करती है?",
    "options_en": ["__dirname", "__filename", "module.dir", "process.dir"],
    "options_hi": ["__dirname", "__filename", "module.dir", "process.dir"],
    "answer_en": "__dirname",
    "answer_hi": "__dirname",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which Node.js module provides utilities to work with the file system?",
    "question_hi": "Node.js में फाइल सिस्टम के साथ काम करने के लिए कौन सा मॉड्यूल है?",
    "options_en": ["fs", "os", "path", "net"],
    "options_hi": ["fs", "os", "path", "net"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the default port number when you create a local HTTP server without specifying a port?",
    "question_hi": "जब आप लोकल HTTP सर्वर बिना पोर्ट नंबर दिए बनाते हैं तो डिफ़ॉल्ट पोर्ट नंबर क्या होता है?",
    "options_en": ["Undefined (must specify port)", "80", "3000", "8080"],
    "options_hi": ["अपरिभाषित (पोर्ट निर्दिष्ट करना आवश्यक)", "80", "3000", "8080"],
    "answer_en": "Undefined (must specify port)",
    "answer_hi": "अपरिभाषित (पोर्ट निर्दिष्ट करना आवश्यक)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "How do you stop a running HTTP server in Node.js?",
    "question_hi": "Node.js में चल रहे HTTP सर्वर को कैसे बंद करते हैं?",
    "options_en": ["server.close()", "server.stop()", "server.end()", "server.shutdown()"],
    "options_hi": ["server.close()", "server.stop()", "server.end()", "server.shutdown()"],
    "answer_en": "server.close()",
    "answer_hi": "server.close()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method in the 'child_process' module launches a new process and buffers the output?",
    "question_hi": "'child_process' मॉड्यूल में कौन सा मेथड नया प्रोसेस लॉन्च करता है और आउटपुट को बफर करता है?",
    "options_en": ["exec()", "spawn()", "fork()", "execFile()"],
    "options_hi": ["exec()", "spawn()", "fork()", "execFile()"],
    "answer_en": "exec()",
    "answer_hi": "exec()",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 50,
  "question_en": "Which of these are Node.js package managers besides npm?",
  "question_hi": "npm के अलावा कौन से Node.js पैकेज मैनेजर हैं?",
  "options_en": ["Yarn", "pnpm", "Bower", "All of the above"],
  "options_hi": ["Yarn", "pnpm", "Bower", "उपरोक्त सभी"],
  "answer_en": "All of the above",
  "answer_hi": "उपरोक्त सभी",
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