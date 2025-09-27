const questions=[
  {
    "num": 1,
    "question_en": "What is Node.js primarily used for?",
    "question_hi": "Node.js का मुख्य उपयोग किस लिए किया जाता है?",
    "options_en": ["Server-side scripting", "Client-side scripting", "Database management", "Styling web pages"],
    "options_hi": ["सर्वर-साइड स्क्रिप्टिंग", "क्लाइंट-साइड स्क्रिप्टिंग", "डेटाबेस प्रबंधन", "वेब पेज स्टाइलिंग"],
    "answer_en": "Server-side scripting",
    "answer_hi": "सर्वर-साइड स्क्रिप्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which runtime environment does Node.js use?",
    "question_hi": "Node.js कौन सा रनटाइम एनवायरनमेंट उपयोग करता है?",
    "options_en": ["V8 JavaScript engine", "SpiderMonkey", "Java Runtime Environment", "Chakra"],
    "options_hi": ["V8 जावास्क्रिप्ट इंजन", "स्पाइडरमंकी", "जावा रनटाइम एनवायरनमेंट", "चक्र"],
    "answer_en": "V8 JavaScript engine",
    "answer_hi": "V8 जावास्क्रिप्ट इंजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which module is used to create web servers in Node.js?",
    "question_hi": "Node.js में वेब सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["http", "url", "fs", "path"],
    "options_hi": ["http", "url", "fs", "path"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the default scope of variables declared with 'var' in Node.js modules?",
    "question_hi": "Node.js मॉड्यूल में 'var' से घोषित वेरिएबल का डिफॉल्ट स्कोप क्या होता है?",
    "options_en": ["Function scope", "Global scope", "Block scope", "Module scope"],
    "options_hi": ["फंक्शन स्कोप", "ग्लोबल स्कोप", "ब्लॉक स्कोप", "मॉड्यूल स्कोप"],
    "answer_en": "Function scope",
    "answer_hi": "फंक्शन स्कोप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method is used to read a file synchronously in Node.js?",
    "question_hi": "Node.js में फाइल सिंक्रोनसली पढ़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.readFileSync()", "fs.readSync()", "fs.readFile()", "fs.read()"],
    "options_hi": ["fs.readFileSync()", "fs.readSync()", "fs.readFile()", "fs.read()"],
    "answer_en": "fs.readFileSync()",
    "answer_hi": "fs.readFileSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of these is NOT a core module in Node.js?",
    "question_hi": "इनमें से कौन सा Node.js का कोर मॉड्यूल नहीं है?",
    "options_en": ["express", "fs", "path", "events"],
    "options_hi": ["express", "fs", "path", "events"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "How do you import a module in Node.js?",
    "question_hi": "Node.js में किसी मॉड्यूल को कैसे इम्पोर्ट करते हैं?",
    "options_en": ["require()", "import()", "include()", "load()"],
    "options_hi": ["require()", "import()", "include()", "load()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method writes data to a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल में डाटा असिंक्रोनसली लिखने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.writeFile()", "fs.write()", "fs.writeSync()", "fs.appendFile()"],
    "options_hi": ["fs.writeFile()", "fs.write()", "fs.writeSync()", "fs.appendFile()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which global object provides information about the current Node.js process?",
    "question_hi": "Node.js प्रक्रिया के बारे में जानकारी कौन सा ग्लोबल ऑब्जेक्ट देता है?",
    "options_en": ["process", "global", "module", "exports"],
    "options_hi": ["process", "global", "module", "exports"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of the following is NOT a valid way to create a new Buffer in Node.js (v10+)?",
    "question_hi": "Node.js (v10+) में नया Buffer बनाने का कौन सा तरीका सही नहीं है?",
    "options_en": ["new Buffer(10)", "Buffer.alloc(10)", "Buffer.from('hello')", "Buffer.allocUnsafe(10)"],
    "options_hi": ["new Buffer(10)", "Buffer.alloc(10)", "Buffer.from('hello')", "Buffer.allocUnsafe(10)"],
    "answer_en": "new Buffer(10)",
    "answer_hi": "new Buffer(10)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method schedules a function to run on the next iteration of the event loop?",
    "question_hi": "Node.js में फंक्शन को इवेंट लूप की अगली iteration में चलाने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["process.nextTick()", "setTimeout()", "setImmediate()", "clearImmediate()"],
    "options_hi": ["process.nextTick()", "setTimeout()", "setImmediate()", "clearImmediate()"],
    "answer_en": "process.nextTick()",
    "answer_hi": "process.nextTick()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which module helps to work with URLs in Node.js?",
    "question_hi": "Node.js में URLs के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["url", "path", "http", "querystring"],
    "options_hi": ["url", "path", "http", "querystring"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What will 'console.log(typeof null)' output in Node.js?",
    "question_hi": "Node.js में 'console.log(typeof null)' क्या आउटपुट देगा?",
    "options_en": ["object", "null", "undefined", "boolean"],
    "options_hi": ["object", "null", "undefined", "boolean"],
    "answer_en": "object",
    "answer_hi": "object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which command initializes a new Node.js project and creates package.json?",
    "question_hi": "Node.js प्रोजेक्ट को इनिशियलाइज़ करने और package.json बनाने के लिए कौन सा कमांड है?",
    "options_en": ["npm init", "npm install", "npm start", "npm create"],
    "options_hi": ["npm init", "npm install", "npm start", "npm create"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the purpose of 'package.json' file in Node.js?",
    "question_hi": "Node.js में 'package.json' फाइल का उद्देश्य क्या है?",
    "options_en": ["Manage project dependencies", "Store environment variables", "List all JavaScript files", "Configure database connections"],
    "options_hi": ["प्रोजेक्ट डिपेंडेंसीज को मैनेज करना", "एनवायरनमेंट वेरिएबल्स रखना", "सभी JavaScript फाइल्स की लिस्ट बनाना", "डाटाबेस कनेक्शन्स को कॉन्फ़िगर करना"],
    "answer_en": "Manage project dependencies",
    "answer_hi": "प्रोजेक्ट डिपेंडेंसीज को मैनेज करना",
    "attempted": false,
    "selected": ""
  },
 
  {
    "num": 16,
    "question_en": "Which object is used to access command line arguments in Node.js?",
    "question_hi": "Node.js में कमांड लाइन आर्गुमेंट्स तक पहुँचने के लिए कौन सा ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["process.argv", "process.args", "argv.process", "args.process"],
    "options_hi": ["process.argv", "process.args", "argv.process", "args.process"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which module is used to work with file paths in Node.js?",
    "question_hi": "Node.js में फ़ाइल पाथ के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["path", "fs", "url", "http"],
    "options_hi": ["path", "fs", "url", "http"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which Node.js module is used for cryptographic functionality?",
    "question_hi": "Node.js में क्रिप्टोग्राफिक फंक्शनैलिटी के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["crypto", "tls", "net", "events"],
    "options_hi": ["crypto", "tls", "net", "events"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method is used to schedule a callback after a specified delay in Node.js?",
    "question_hi": "Node.js में निर्धारित विलंब के बाद कॉलबैक शेड्यूल करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method is used to schedule a callback repeatedly at fixed intervals in Node.js?",
    "question_hi": "Node.js में निश्चित अंतराल पर बार-बार कॉलबैक शेड्यूल करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["setInterval()", "setTimeout()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setInterval()", "setTimeout()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which event is emitted when a Node.js stream finishes writing?",
    "question_hi": "Node.js स्ट्रीम के लिखना पूरा करने पर कौन सा इवेंट इमिट होता है?",
    "options_en": ["finish", "end", "close", "data"],
    "options_hi": ["finish", "end", "close", "data"],
    "answer_en": "finish",
    "answer_hi": "finish",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which module in Node.js is used for networking and creating TCP servers?",
    "question_hi": "Node.js में नेटवर्किंग और TCP सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["net", "http", "tls", "dns"],
    "options_hi": ["net", "http", "tls", "dns"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of these is the default port used by HTTP servers in Node.js?",
    "question_hi": "Node.js HTTP सर्वर के लिए डिफ़ॉल्ट पोर्ट कौन सा होता है?",
    "options_en": ["80", "8080", "3000", "443"],
    "options_hi": ["80", "8080", "3000", "443"],
    "answer_en": "80",
    "answer_hi": "80",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method is used to close a server in Node.js?",
    "question_hi": "Node.js में सर्वर को बंद करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["server.close()", "server.stop()", "server.end()", "server.shutdown()"],
    "options_hi": ["server.close()", "server.stop()", "server.end()", "server.shutdown()"],
    "answer_en": "server.close()",
    "answer_hi": "server.close()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of the following is NOT a Node.js process property?",
    "question_hi": "इनमें से कौन Node.js process की property नहीं है?",
    "options_en": ["process.env", "process.argv", "process.id", "process.exit()"],
    "options_hi": ["process.env", "process.argv", "process.id", "process.exit()"],
    "answer_en": "process.id",
    "answer_hi": "process.id",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which module provides utilities for working with binary data?",
    "question_hi": "बाइनरी डाटा के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["buffer", "stream", "net", "dns"],
    "options_hi": ["buffer", "stream", "net", "dns"],
    "answer_en": "buffer",
    "answer_hi": "buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which module in Node.js allows compression of data streams?",
    "question_hi": "Node.js में डेटा स्ट्रीम को कम्प्रेस करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["zlib", "crypto", "fs", "net"],
    "options_hi": ["zlib", "crypto", "fs", "net"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "How do you create a new Buffer from a string in Node.js?",
    "question_hi": "Node.js में स्ट्रिंग से नया Buffer कैसे बनाते हैं?",
    "options_en": ["Buffer.from('string')", "new Buffer('string')", "Buffer.create('string')", "Buffer.new('string')"],
    "options_hi": ["Buffer.from('string')", "new Buffer('string')", "Buffer.create('string')", "Buffer.new('string')"],
    "answer_en": "Buffer.from('string')",
    "answer_hi": "Buffer.from('string')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which event indicates that there is an error in a Node.js stream?",
    "question_hi": "Node.js स्ट्रीम में त्रुटि होने पर कौन सा इवेंट होता है?",
    "options_en": ["error", "fail", "exception", "warning"],
    "options_hi": ["error", "fail", "exception", "warning"],
    "answer_en": "error",
    "answer_hi": "error",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the use of 'module.exports' in Node.js?",
    "question_hi": "Node.js में 'module.exports' का क्या उपयोग है?",
    "options_en": ["To export functions or objects from a module", "To import modules", "To create new modules", "To delete modules"],
    "options_hi": ["मॉड्यूल से फंक्शन या ऑब्जेक्ट्स को एक्सपोर्ट करने के लिए", "मॉड्यूल इम्पोर्ट करने के लिए", "नया मॉड्यूल बनाने के लिए", "मॉड्यूल डिलीट करने के लिए"],
    "answer_en": "To export functions or objects from a module",
    "answer_hi": "मॉड्यूल से फंक्शन या ऑब्जेक्ट्स को एक्सपोर्ट करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which module is used to provide TLS and SSL protocols in Node.js?",
    "question_hi": "Node.js में TLS और SSL प्रोटोकॉल के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["tls", "https", "net", "crypto"],
    "options_hi": ["tls", "https", "net", "crypto"],
    "answer_en": "tls",
    "answer_hi": "tls",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which command installs a package and adds it to package.json dependencies?",
    "question_hi": "कौन सा कमांड पैकेज इंस्टॉल करता है और इसे package.json dependencies में जोड़ता है?",
    "options_en": ["npm install package --save", "npm install package", "npm update package", "npm add package"],
    "options_hi": ["npm install package --save", "npm install package", "npm update package", "npm add package"],
    "answer_en": "npm install package --save",
    "answer_hi": "npm install package --save",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which global variable contains the directory name of the current module in Node.js?",
    "question_hi": "Node.js में वर्तमान मॉड्यूल का डायरेक्टरी नाम कौन सा ग्लोबल वेरिएबल रखता है?",
    "options_en": ["__dirname", "__filename", "process.cwd()", "module.path"],
    "options_hi": ["__dirname", "__filename", "process.cwd()", "module.path"],
    "answer_en": "__dirname",
    "answer_hi": "__dirname",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which function is used to parse query strings in Node.js?",
    "question_hi": "Node.js में क्वेरी स्ट्रिंग्स को पार्स करने के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["querystring.parse()", "url.parse()", "JSON.parse()", "http.parse()"],
    "options_hi": ["querystring.parse()", "url.parse()", "JSON.parse()", "http.parse()"],
    "answer_en": "querystring.parse()",
    "answer_hi": "querystring.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which event loop phase processes timers like setTimeout and setInterval callbacks?",
    "question_hi": "इवेंट लूप का कौन सा चरण setTimeout और setInterval के कॉलबैक्स को प्रोसेस करता है?",
    "options_en": ["timers phase", "poll phase", "check phase", "close callbacks phase"],
    "options_hi": ["timers phase", "poll phase", "check phase", "close callbacks phase"],
    "answer_en": "timers phase",
    "answer_hi": "timers phase",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which module is used for DNS lookups in Node.js?",
    "question_hi": "Node.js में DNS लुकअप के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["dns", "net", "http", "url"],
    "options_hi": ["dns", "net", "http", "url"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the use of 'process.exit()' in Node.js?",
    "question_hi": "Node.js में 'process.exit()' का उपयोग क्या है?",
    "options_en": ["To terminate the Node.js process", "To restart the server", "To pause the execution", "To reload modules"],
    "options_hi": ["Node.js प्रक्रिया को समाप्त करने के लिए", "सर्वर को रीस्टार्ट करने के लिए", "कार्य निष्पादन रोकने के लिए", "मॉड्यूल्स को पुनः लोड करने के लिए"],
    "answer_en": "To terminate the Node.js process",
    "answer_hi": "Node.js प्रक्रिया को समाप्त करने के लिए",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 38,
    "question_en": "Which property of 'process' contains the environment variables in Node.js?",
    "question_hi": "'process' की कौन सी प्रॉपर्टी में Node.js के एनवायरनमेंट वेरिएबल्स होते हैं?",
    "options_en": ["process.env", "process.envVariables", "process.variables", "process.envs"],
    "options_hi": ["process.env", "process.envVariables", "process.variables", "process.envs"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which of the following is used to create a readable stream from a file?",
    "question_hi": "फाइल से एक readable stream बनाने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.createReadStream()", "fs.readFile()", "fs.open()", "fs.readStream()"],
    "options_hi": ["fs.createReadStream()", "fs.readFile()", "fs.open()", "fs.readStream()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does 'npm' stand for?",
    "question_hi": "'npm' का पूरा नाम क्या है?",
    "options_en": ["Node Package Manager", "Node Programming Module", "New Project Manager", "Node Process Manager"],
    "options_hi": ["Node Package Manager", "Node Programming Module", "New Project Manager", "Node Process Manager"],
    "answer_en": "Node Package Manager",
    "answer_hi": "Node Package Manager",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which keyword is used to handle asynchronous operations in modern Node.js?",
    "question_hi": "आधुनिक Node.js में असिंक्रोनस ऑपरेशन को हैंडल करने के लिए कौन सा keyword उपयोग होता है?",
    "options_en": ["async/await", "try/catch", "then/catch", "defer"],
    "options_hi": ["async/await", "try/catch", "then/catch", "defer"],
    "answer_en": "async/await",
    "answer_hi": "async/await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Node.js module helps to create child processes?",
    "question_hi": "Node.js में child processes बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["child_process", "cluster", "process", "child"],
    "options_hi": ["child_process", "cluster", "process", "child"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What does the 'cluster' module in Node.js provide?",
    "question_hi": "Node.js में 'cluster' मॉड्यूल क्या प्रदान करता है?",
    "options_en": ["Support for creating child processes to handle load", "Support for database operations", "Support for HTTP servers", "Support for file system operations"],
    "options_hi": ["लोड संभालने के लिए child processes बनाने का सपोर्ट", "डेटाबेस ऑपरेशन का सपोर्ट", "HTTP सर्वर का सपोर्ट", "फाइल सिस्टम ऑपरेशन का सपोर्ट"],
    "answer_en": "Support for creating child processes to handle load",
    "answer_hi": "लोड संभालने के लिए child processes बनाने का सपोर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Node.js global variable gives the filename of the current module?",
    "question_hi": "Node.js का कौन सा ग्लोबल वेरिएबल वर्तमान मॉड्यूल का फाइलनाम देता है?",
    "options_en": ["__filename", "__dirname", "process.filename", "module.filename"],
    "options_hi": ["__filename", "__dirname", "process.filename", "module.filename"],
    "answer_en": "__filename",
    "answer_hi": "__filename",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method in the 'http' module is used to create a server in Node.js?",
    "question_hi": "Node.js में 'http' मॉड्यूल में सर्वर बनाने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["http.createServer()", "http.startServer()", "http.initServer()", "http.newServer()"],
    "options_hi": ["http.createServer()", "http.startServer()", "http.initServer()", "http.newServer()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which of the following is used to stop a timer started with setInterval?",
    "question_hi": "setInterval से शुरू हुए टाइमर को रोकने के लिए क्या उपयोग होता है?",
    "options_en": ["clearInterval()", "clearTimeout()", "stopInterval()", "stopTimer()"],
    "options_hi": ["clearInterval()", "clearTimeout()", "stopInterval()", "stopTimer()"],
    "answer_en": "clearInterval()",
    "answer_hi": "clearInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Node.js method is used to print formatted strings to the console?",
    "question_hi": "Node.js में फॉर्मेटेड स्ट्रिंग्स को console में प्रिंट करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["console.log()", "console.format()", "console.print()", "console.write()"],
    "options_hi": ["console.log()", "console.format()", "console.print()", "console.write()"],
    "answer_en": "console.log()",
    "answer_hi": "console.log()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Node.js module is useful for event-driven programming?",
    "question_hi": "Node.js में इवेंट-ड्रिवेन प्रोग्रामिंग के लिए कौन सा मॉड्यूल उपयोगी है?",
    "options_en": ["events", "fs", "http", "net"],
    "options_hi": ["events", "fs", "http", "net"],
    "answer_en": "events",
    "answer_hi": "events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the primary function of the 'fs' module in Node.js?",
    "question_hi": "Node.js में 'fs' मॉड्यूल का मुख्य कार्य क्या है?",
    "options_en": ["File system operations", "Network operations", "Creating servers", "Cryptography"],
    "options_hi": ["फ़ाइल सिस्टम ऑपरेशन", "नेटवर्क ऑपरेशन", "सर्वर बनाना", "क्रिप्टोग्राफी"],
    "answer_en": "File system operations",
    "answer_hi": "फ़ाइल सिस्टम ऑपरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which function is used to asynchronously read the contents of a file in Node.js?",
    "question_hi": "Node.js में फाइल की सामग्री को असिंक्रोनसली पढ़ने के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
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