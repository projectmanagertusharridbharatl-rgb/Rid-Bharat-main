const questions=[
  {
    "num": 1,
    "question_en": "Which module provides utilities for handling HTTPS requests?",
    "question_hi": "HTTPS रिक्वेस्ट्स को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["https", "http", "tls", "ssl"],
    "options_hi": ["https", "http", "tls", "ssl"],
    "answer_en": "https",
    "answer_hi": "https",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which module is used to handle file system operations in Node.js?",
    "question_hi": "Node.js में फाइल सिस्टम ऑपरेशन्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "http", "path", "url"],
    "options_hi": ["fs", "http", "path", "url"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the 'require' function do in Node.js?",
    "question_hi": "Node.js में 'require' फंक्शन क्या करता है?",
    "options_en": ["Exports a module", "Imports a module", "Creates a new module", "Defines a module"],
    "options_hi": ["मॉड्यूल को एक्सपोर्ट करता है", "मॉड्यूल को इम्पोर्ट करता है", "नया मॉड्यूल बनाता है", "मॉड्यूल को परिभाषित करता है"],
    "answer_en": "Imports a module",
    "answer_hi": "मॉड्यूल को इम्पोर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which web application framework is commonly used with Node.js for building web servers and APIs?",
    "question_hi": "Node.js के साथ वेब सर्वर और APIs बनाने के लिए सामान्यतः कौन सा वेब एप्लिकेशन फ्रेमवर्क उपयोग होता है?",
    "options_en": ["Django", "Flask", "Express.js", "Ruby on Rails"],
    "options_hi": ["Django", "Flask", "Express.js", "Ruby on Rails"],
    "answer_en": "Express.js",
    "answer_hi": "Express.js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the purpose of streams in Node.js?",
    "question_hi": "Node.js में स्ट्रीम्स का उद्देश्य क्या है?",
    "options_en": ["Handle user input", "Efficiently handle large amounts of data", "Define middleware functions", "Manage asynchronous operations"],
    "options_hi": ["उपयोगकर्ता इनपुट को हैंडल करना", "बड़े डेटा को प्रभावी ढंग से हैंडल करना", "मिडलवेयर फंक्शन्स को परिभाषित करना", "एसिंक्रोनस ऑपरेशन्स को प्रबंधित करना"],
    "answer_en": "Efficiently handle large amounts of data",
    "answer_hi": "बड़े डेटा को प्रभावी ढंग से हैंडल करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does the term 'non-blocking I/O' mean in the context of Node.js?",
    "question_hi": "Node.js के संदर्भ में 'नॉन-ब्लॉकिंग I/O' का क्या अर्थ है?",
    "options_en": ["Node.js can only handle one I/O operation at a time", "Node.js can handle multiple I/O operations concurrently without waiting for the completion of one before starting another", "Node.js is limited to blocking I/O operations", "Node.js only supports synchronous I/O operations"],
    "options_hi": ["Node.js एक समय में केवल एक I/O ऑपरेशन को हैंडल कर सकता है", "Node.js एक के पूरा होने का इंतजार किए बिना एक साथ कई I/O ऑपरेशन्स को हैंडल कर सकता है", "Node.js केवल ब्लॉकिंग I/O ऑपरेशन्स तक सीमित है", "Node.js केवल सिंक्रोनस I/O ऑपरेशन्स का समर्थन करता है"],
    "answer_en": "Node.js can handle multiple I/O operations concurrently without waiting for the completion of one before starting another",
    "answer_hi": "Node.js एक के पूरा होने का इंतजार किए बिना एक साथ कई I/O ऑपरेशन्स को हैंडल कर सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which of the following is used to handle errors in asynchronous JavaScript code in Node.js?",
    "question_hi": "Node.js में असिंक्रोनस JavaScript कोड में त्रुटियों को हैंडल करने के लिए निम्नलिखित में से कौन सा उपयोग होता है?",
    "options_en": ["Callbacks", "Promises", "Event emitters", "try…catch statements"],
    "options_hi": ["कॉलबैक", "प्रॉमिसेस", "इवेंट इमिटर्स", "try…catch स्टेटमेंट्स"],
    "answer_en": "Promises",
    "answer_hi": "प्रॉमिसेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the 'process' object in Node.js?",
    "question_hi": "Node.js में 'process' ऑब्जेक्ट का उद्देश्य क्या है?",
    "options_en": ["To interact with the operating system", "To handle HTTP requests", "To manage global variables", "To communicate between different Node.js processes"],
    "options_hi": ["ऑपरेटिंग सिस्टम के साथ इंटरैक्ट करना", "HTTP रिक्वेस्ट्स को हैंडल करना", "वैश्विक वेरिएबल्स को प्रबंधित करना", "विभिन्न Node.js प्रोसेस के बीच संवाद करना"],
    "answer_en": "To interact with the operating system",
    "answer_hi": "ऑपरेटिंग सिस्टम के साथ इंटरैक्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which HTTP method is idempotent?",
    "question_hi": "निम्नलिखित में से कौन सा HTTP मेथड आइडेम्पोटेंट है?",
    "options_en": ["GET", "POST", "PUT", "DELETE"],
    "options_hi": ["GET", "POST", "PUT", "DELETE"],
    "answer_en": "GET",
    "answer_hi": "GET",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 10,
    "question_en": "Which method is used to read a file asynchronously in Node.js?",
    "question_hi": "Node.js में एक फ़ाइल को असिंक्रोनस रूप से पढ़ने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.readFile()", "fs.readSync()", "fs.openFile()", "fs.read()"],
    "options_hi": ["fs.readFile()", "fs.readSync()", "fs.openFile()", "fs.read()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which module is used to handle URL-related tasks in Node.js?",
    "question_hi": "Node.js में URL-संबंधित कार्यों को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["url", "path", "querystring", "request"],
    "options_hi": ["url", "path", "querystring", "request"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'Buffer' class in Node.js?",
    "question_hi": "Node.js में 'Buffer' क्लास का उद्देश्य क्या है?",
    "options_en": ["To store binary data", "To represent JSON objects", "To create streams", "To manage database connections"],
    "options_hi": ["बाइनरी डेटा को स्टोर करना", "JSON ऑब्जेक्ट्स का प्रतिनिधित्व करना", "स्ट्रीम्स बनाना", "डेटाबेस कनेक्शन्स को प्रबंधित करना"],
    "answer_en": "To store binary data",
    "answer_hi": "बाइनरी डेटा को स्टोर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which module is used to handle child processes in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेस को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["child_process", "process", "child", "os"],
    "options_hi": ["child_process", "process", "child", "os"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method is used to terminate a Node.js process?",
    "question_hi": "Node.js प्रोसेस को समाप्त करने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["process.exit()", "process.terminate()", "exit()", "terminate()"],
    "options_hi": ["process.exit()", "process.terminate()", "exit()", "terminate()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which module is used for DNS operations in Node.js?",
    "question_hi": "Node.js में DNS ऑपरेशन्स के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["dns", "net", "http", "url"],
    "options_hi": ["dns", "net", "http", "url"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to parse JSON data in Node.js?",
    "question_hi": "Node.js में JSON डेटा को पार्स करने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "JSON.parseSync()", "JSON.toObject()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "JSON.parseSync()", "JSON.toObject()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which module is used to handle HTTP requests in Node.js?",
    "question_hi": "Node.js में HTTP रिक्वेस्ट्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["http", "https", "net", "url"],
    "options_hi": ["http", "https", "net", "url"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method is used to create a server in Node.js?",
    "question_hi": "Node.js में सर्वर बनाने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["http.createServer()", "server.create()", "createServer()", "http.create()"],
    "options_hi": ["http.createServer()", "server.create()", "createServer()", "http.create()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method is used to send a response in Express.js?",
    "question_hi": "Express.js में प्रतिक्रिया भेजने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["res.send()", "response.send()", "send()", "res.response()"],
    "options_hi": ["res.send()", "response.send()", "send()", "res.response()"],
    "answer_en": "res.send()",
    "answer_hi": "res.send()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method is used to define a route in Express.js?",
    "question_hi": "Express.js में रूट परिभाषित करने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["app.get()", "app.route()", "app.use()", "app.define()"],
    "options_hi": ["app.get()", "app.route()", "app.use()", "app.define()"],
    "answer_en": "app.get()",
    "answer_hi": "app.get()",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 21,
    "question_en": "Which method is used to start a server in Node.js?",
    "question_hi": "Node.js में सर्वर शुरू करने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["listen()", "start()", "run()", "begin()"],
    "options_hi": ["listen()", "start()", "run()", "begin()"],
    "answer_en": "listen()",
    "answer_hi": "listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'npm' in Node.js?",
    "question_hi": "Node.js में 'npm' क्या है?",
    "options_en": ["Node Programming Module", "Node Package Manager", "New Package Module", "Node Process Manager"],
    "options_hi": ["Node Programming Module", "Node Package Manager", "New Package Module", "Node Process Manager"],
    "answer_en": "Node Package Manager",
    "answer_hi": "Node Package Manager",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which file is used to define project metadata and dependencies in a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट में प्रोजेक्ट मेटाडेटा और डिपेंडेंसी को परिभाषित करने के लिए कौन सी फ़ाइल उपयोग होती है?",
    "options_en": ["package.json", "project.json", "node.json", "dependencies.json"],
    "options_hi": ["package.json", "project.json", "node.json", "dependencies.json"],
    "answer_en": "package.json",
    "answer_hi": "package.json",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword is used to export a module in Node.js?",
    "question_hi": "Node.js में मॉड्यूल को एक्सपोर्ट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["exports", "export", "module.export", "module.exports"],
    "options_hi": ["exports", "export", "module.export", "module.exports"],
    "answer_en": "module.exports",
    "answer_hi": "module.exports",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which built-in module in Node.js helps in working with file and directory paths?",
    "question_hi": "Node.js में फाइल और डायरेक्टरी पाथ के साथ काम करने के लिए कौन सा इनबिल्ट मॉड्यूल मदद करता है?",
    "options_en": ["path", "url", "fs", "os"],
    "options_hi": ["path", "url", "fs", "os"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the use of the 'os' module in Node.js?",
    "question_hi": "Node.js में 'os' मॉड्यूल का उपयोग क्या है?",
    "options_en": ["To work with the operating system", "To open sockets", "To run scripts", "To manage HTTP requests"],
    "options_hi": ["ऑपरेटिंग सिस्टम के साथ काम करना", "सॉकेट खोलना", "स्क्रिप्ट चलाना", "HTTP रिक्वेस्ट प्रबंधित करना"],
    "answer_en": "To work with the operating system",
    "answer_hi": "ऑपरेटिंग सिस्टम के साथ काम करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which command is used to initialize a new Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट को इनिशियलाइज़ करने के लिए कौन सा कमांड उपयोग होता है?",
    "options_en": ["npm init", "node init", "npm create", "node start"],
    "options_hi": ["npm init", "node init", "npm create", "node start"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to append data to a file asynchronously?",
    "question_hi": "फाइल में असिंक्रोनस रूप से डेटा जोड़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.appendFile()", "fs.writeFile()", "fs.addData()", "fs.insert()"],
    "options_hi": ["fs.appendFile()", "fs.writeFile()", "fs.addData()", "fs.insert()"],
    "answer_en": "fs.appendFile()",
    "answer_hi": "fs.appendFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is middleware in Express.js?",
    "question_hi": "Express.js में मिडलवेयर क्या है?",
    "options_en": ["Function to handle requests", "Function to handle errors", "Function executed between request and response", "Function to define routes"],
    "options_hi": ["रिक्वेस्ट को हैंडल करने वाला फंक्शन", "एरर हैंडल करने वाला फंक्शन", "रिक्वेस्ट और रिस्पांस के बीच में चलने वाला फंक्शन", "रूट्स को परिभाषित करने वाला फंक्शन"],
    "answer_en": "Function executed between request and response",
    "answer_hi": "रिक्वेस्ट और रिस्पांस के बीच में चलने वाला फंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which method parses incoming request bodies in middleware?",
    "question_hi": "मिडलवेयर में इनकमिंग रिक्वेस्ट बॉडी को पार्स करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["bodyParser()", "json()", "urlencoded()", "parseRequest()"],
    "options_hi": ["bodyParser()", "json()", "urlencoded()", "parseRequest()"],
    "answer_en": "bodyParser()",
    "answer_hi": "bodyParser()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which method in the fs module deletes a file asynchronously?",
    "question_hi": "fs मॉड्यूल में कौन सा मेथड फाइल को असिंक्रोनस रूप से डिलीट करता है?",
    "options_en": ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.erase()"],
    "options_hi": ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.erase()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which of these is NOT a core module in Node.js?",
    "question_hi": "इनमें से कौन Node.js का कोर मॉड्यूल नहीं है?",
    "options_en": ["fs", "http", "express", "path"],
    "options_hi": ["fs", "http", "express", "path"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function is used to schedule code execution after a set time in Node.js?",
    "question_hi": "Node.js में निश्चित समय बाद कोड निष्पादित करने के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["setTimeout()", "setInterval()", "setImmediate()", "clearTimeout()"],
    "options_hi": ["setTimeout()", "setInterval()", "setImmediate()", "clearTimeout()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the default scope of variables in Node.js modules?",
    "question_hi": "Node.js मॉड्यूल में वेरिएबल्स का डिफ़ॉल्ट स्कोप क्या होता है?",
    "options_en": ["Global", "Module", "Local", "Function"],
    "options_hi": ["ग्लोबल", "मॉड्यूल", "लोकल", "फंक्शन"],
    "answer_en": "Module",
    "answer_hi": "मॉड्यूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which object is used to get the command-line arguments in Node.js?",
    "question_hi": "Node.js में कमांड-लाइन आर्ग्युमेंट्स प्राप्त करने के लिए कौन सा ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["process.argv", "console.args", "node.args", "cmd.argv"],
    "options_hi": ["process.argv", "console.args", "node.args", "cmd.argv"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which Node.js module provides compression functionality?",
    "question_hi": "कौन सा Node.js मॉड्यूल कम्प्रेशन की सुविधा प्रदान करता है?",
    "options_en": ["zlib", "zip", "compress", "buffer"],
    "options_hi": ["zlib", "zip", "compress", "buffer"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Express.js method handles POST requests?",
    "question_hi": "Express.js में POST रिक्वेस्ट को कौन सा मेथड हैंडल करता है?",
    "options_en": ["app.post()", "app.put()", "app.get()", "app.delete()"],
    "options_hi": ["app.post()", "app.put()", "app.get()", "app.delete()"],
    "answer_en": "app.post()",
    "answer_hi": "app.post()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "How do you install a Node.js package globally?",
    "question_hi": "Node.js पैकेज को ग्लोबली कैसे इंस्टॉल करते हैं?",
    "options_en": ["npm install -g <package>", "npm global <package>", "npm install <package> -global", "npm get <package>"],
    "options_hi": ["npm install -g <package>", "npm global <package>", "npm install <package> -global", "npm get <package>"],
    "answer_en": "npm install -g <package>",
    "answer_hi": "npm install -g <package>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which statement is used to include modules in Node.js?",
    "question_hi": "Node.js में मॉड्यूल को शामिल करने के लिए कौन सा स्टेटमेंट उपयोग होता है?",
    "options_en": ["require()", "include()", "import()", "load()"],
    "options_hi": ["require()", "include()", "import()", "load()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the file extension for a Node.js module?",
    "question_hi": "Node.js मॉड्यूल के लिए फ़ाइल एक्सटेंशन क्या है?",
    "options_en": [".js", ".node", ".json", ".mod"],
    "options_hi": [".js", ".node", ".json", ".mod"],
    "answer_en": ".js",
    "answer_hi": ".js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which keyword is used to handle errors in async/await?",
    "question_hi": "async/await में त्रुटियों को संभालने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try", "error", "catch", "throw"],
    "options_hi": ["try", "error", "catch", "throw"],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which is the entry point defined in package.json?",
    "question_hi": "package.json में परिभाषित एंट्री पॉइंट क्या होता है?",
    "options_en": ["main", "start", "entry", "begin"],
    "options_hi": ["main", "start", "entry", "begin"],
    "answer_en": "main",
    "answer_hi": "main",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which of the following handles routing in Express.js?",
    "question_hi": "Express.js में निम्न में से कौन रूटिंग को संभालता है?",
    "options_en": ["app.get()", "app.route()", "app.use()", "All of these"],
    "options_hi": ["app.get()", "app.route()", "app.use()", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the use of the crypto module in Node.js?",
    "question_hi": "Node.js में crypto मॉड्यूल का उपयोग क्या है?",
    "options_en": ["To encrypt and decrypt data", "To compress files", "To hash images", "To manage sessions"],
    "options_hi": ["डेटा को एन्क्रिप्ट और डिक्रिप्ट करना", "फाइल्स को कंप्रेस करना", "इमेज को हैश करना", "सेशंस को प्रबंधित करना"],
    "answer_en": "To encrypt and decrypt data",
    "answer_hi": "डेटा को एन्क्रिप्ट और डिक्रिप्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which module in Node.js is used to create TCP servers?",
    "question_hi": "Node.js में TCP सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["net", "tcp", "http", "stream"],
    "options_hi": ["net", "tcp", "http", "stream"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
 
  {
    "num": 46,
    "question_en": "Which Node.js method clears a timer set with setInterval()?",
    "question_hi": "setInterval() से सेट किए गए टाइमर को समाप्त करने के लिए कौन सा Node.js मेथड उपयोग होता है?",
    "options_en": ["clearInterval()", "clearTimer()", "stopInterval()", "cancelInterval()"],
    "options_hi": ["clearInterval()", "clearTimer()", "stopInterval()", "cancelInterval()"],
    "answer_en": "clearInterval()",
    "answer_hi": "clearInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which HTTP status code represents 'Not Found'?",
    "question_hi": "'Not Found' को दर्शाने वाला HTTP स्टेटस कोड कौन सा है?",
    "options_en": ["404", "200", "500", "302"],
    "options_hi": ["404", "200", "500", "302"],
    "answer_en": "404",
    "answer_hi": "404",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Express.js method is used to serve static files?",
    "question_hi": "Express.js में स्टैटिक फाइल्स को सर्व करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["express.static()", "app.static()", "app.serve()", "serve.static()"],
    "options_hi": ["express.static()", "app.static()", "app.serve()", "serve.static()"],
    "answer_en": "express.static()",
    "answer_hi": "express.static()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does the 'next' function do in Express.js middleware?",
    "question_hi": "Express.js मिडलवेयर में 'next' फंक्शन क्या करता है?",
    "options_en": ["Passes control to the next middleware", "Stops the request", "Ends the response", "Redirects to another route"],
    "options_hi": ["अगले मिडलवेयर को कंट्रोल देता है", "रिक्वेस्ट को रोकता है", "रिस्पॉन्स समाप्त करता है", "दूसरे रूट पर रीडायरेक्ट करता है"],
    "answer_en": "Passes control to the next middleware",
    "answer_hi": "अगले मिडलवेयर को कंट्रोल देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Node.js module is used to handle events?",
    "question_hi": "Node.js में इवेंट्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["events", "emit", "observer", "signals"],
    "options_hi": ["events", "emit", "observer", "signals"],
    "answer_en": "events",
    "answer_hi": "events",
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