const questions=[
  {
    "num": 1,
    "question_en": "What is the default module system used by Node.js?",
    "question_hi": "Node.js द्वारा उपयोग किया जाने वाला डिफ़ॉल्ट मॉड्यूल सिस्टम क्या है?",
    "options_en": ["CommonJS", "ES Modules", "AMD", "UMD"],
    "options_hi": ["CommonJS", "ES Modules", "AMD", "UMD"],
    "answer_en": "CommonJS",
    "answer_hi": "CommonJS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "How do you export a function from a module in Node.js?",
    "question_hi": "Node.js में किसी मॉड्यूल से फ़ंक्शन कैसे एक्सपोर्ट करते हैं?",
    "options_en": ["module.exports = functionName;", "exports = functionName;", "export functionName;", "module.export = functionName;"],
    "options_hi": ["module.exports = functionName;", "exports = functionName;", "export functionName;", "module.export = functionName;"],
    "answer_en": "module.exports = functionName;",
    "answer_hi": "module.exports = functionName;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which command is used to initialize a new Node.js project?",
    "question_hi": "नई Node.js प्रोजेक्ट शुरू करने के लिए कौन सा कमांड उपयोग किया जाता है?",
    "options_en": ["npm init", "node init", "npm start", "node new"],
    "options_hi": ["npm init", "node init", "npm start", "node new"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which method reads the contents of a file synchronously in Node.js?",
    "question_hi": "Node.js में फाइल की सामग्री को सिंक्रोनस तरीके से पढ़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.readFileSync()", "fs.readFile()", "fs.openSync()", "fs.open()"],
    "options_hi": ["fs.readFileSync()", "fs.readFile()", "fs.openSync()", "fs.open()"],
    "answer_en": "fs.readFileSync()",
    "answer_hi": "fs.readFileSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method reads the contents of a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल की सामग्री को असिंक्रोनस तरीके से पढ़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.openSync()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.openSync()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "How can you install a package globally using npm?",
    "question_hi": "npm का उपयोग करके पैकेज को ग्लोबली कैसे इंस्टॉल करते हैं?",
    "options_en": ["npm install -g packageName", "npm install packageName --global", "npm global add packageName", "npm add -g packageName"],
    "options_hi": ["npm install -g packageName", "npm install packageName --global", "npm global add packageName", "npm add -g packageName"],
    "answer_en": "npm install -g packageName",
    "answer_hi": "npm install -g packageName",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which command shows the installed npm packages and their versions?",
    "question_hi": "कौन सा कमांड इंस्टॉल किए गए npm पैकेज और उनके वर्शन दिखाता है?",
    "options_en": ["npm list", "npm show", "npm info", "npm version"],
    "options_hi": ["npm list", "npm show", "npm info", "npm version"],
    "answer_en": "npm list",
    "answer_hi": "npm list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the package.json file in a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट में package.json फ़ाइल का उद्देश्य क्या है?",
    "options_en": [
      "To manage project metadata and dependencies",
      "To compile the project",
      "To store environment variables",
      "To serve static files"
    ],
    "options_hi": [
      "प्रोजेक्ट मेटाडेटा और डिपेंडेंसीज को मैनेज करने के लिए",
      "प्रोजेक्ट को कम्पाइल करने के लिए",
      "एन्वायरनमेंट वेरिएबल्स को स्टोर करने के लिए",
      "स्टैटिक फाइल्स सर्व करने के लिए"
    ],
    "answer_en": "To manage project metadata and dependencies",
    "answer_hi": "प्रोजेक्ट मेटाडेटा और डिपेंडेंसीज को मैनेज करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method is used to create a readable stream from a file?",
    "question_hi": "Node.js में फाइल से रीडेबल स्ट्रीम बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.createReadStream()", "fs.readFile()", "fs.createStream()", "fs.openReadStream()"],
    "options_hi": ["fs.createReadStream()", "fs.readFile()", "fs.createStream()", "fs.openReadStream()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of the following is NOT a core Node.js module?",
    "question_hi": "नीचे दिए गए में से कौन सा Node.js का कोर मॉड्यूल नहीं है?",
    "options_en": ["express", "http", "fs", "path"],
    "options_hi": ["express", "http", "fs", "path"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the purpose of the 'Buffer' class in Node.js?",
    "question_hi": "Node.js में 'Buffer' क्लास का उद्देश्य क्या है?",
    "options_en": [
      "To handle binary data",
      "To manage database connections",
      "To create HTTP servers",
      "To handle environment variables"
    ],
    "options_hi": [
      "बाइनरी डेटा को संभालने के लिए",
      "डेटाबेस कनेक्शन को मैनेज करने के लिए",
      "HTTP सर्वर बनाने के लिए",
      "एन्वायरनमेंट वेरिएबल्स को हैंडल करने के लिए"
    ],
    "answer_en": "To handle binary data",
    "answer_hi": "बाइनरी डेटा को संभालने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method converts a Buffer to a string?",
    "question_hi": "Buffer को स्ट्रिंग में बदलने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["buffer.toString()", "buffer.toStr()", "buffer.convert()", "buffer.stringify()"],
    "options_hi": ["buffer.toString()", "buffer.toStr()", "buffer.convert()", "buffer.stringify()"],
    "answer_en": "buffer.toString()",
    "answer_hi": "buffer.toString()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method is used to listen for incoming HTTP requests in Node.js?",
    "question_hi": "Node.js में आने वाले HTTP रिक्वेस्ट को सुनने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["server.listen()", "http.createServer()", "http.listen()", "server.start()"],
    "options_hi": ["server.listen()", "http.createServer()", "http.listen()", "server.start()"],
    "answer_en": "server.listen()",
    "answer_hi": "server.listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does 'npm' stand for?",
    "question_hi": "'npm' का पूरा नाम क्या है?",
    "options_en": ["Node Package Manager", "Node Programming Model", "New Package Manager", "Node Production Manager"],
    "options_hi": ["Node Package Manager", "Node Programming Model", "New Package Manager", "Node Production Manager"],
    "answer_en": "Node Package Manager",
    "answer_hi": "Node Package Manager",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which module helps in creating HTTP clients and servers?",
    "question_hi": "HTTP क्लाइंट और सर्वर बनाने में कौन सा मॉड्यूल मदद करता है?",
    "options_en": ["http", "https", "net", "tls"],
    "options_hi": ["http", "https", "net", "tls"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
 
  {
    "num": 16,
    "question_en": "Which method is used to parse JSON strings in Node.js?",
    "question_hi": "Node.js में JSON स्ट्रिंग को पार्स करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method converts a JavaScript object into a JSON string?",
    "question_hi": "JavaScript ऑब्जेक्ट को JSON स्ट्रिंग में बदलने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toString()"],
    "options_hi": ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toString()"],
    "answer_en": "JSON.stringify()",
    "answer_hi": "JSON.stringify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which environment variable stores the port number in many Node.js applications?",
    "question_hi": "कई Node.js एप्लिकेशन में पोर्ट नंबर को स्टोर करने वाला एन्वायरनमेंट वेरिएबल कौन सा है?",
    "options_en": ["process.env.PORT", "process.env.PORT_NUMBER", "process.port", "env.PORT"],
    "options_hi": ["process.env.PORT", "process.env.PORT_NUMBER", "process.port", "env.PORT"],
    "answer_en": "process.env.PORT",
    "answer_hi": "process.env.PORT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which object in Node.js provides information about the current process?",
    "question_hi": "Node.js में वर्तमान प्रक्रिया के बारे में जानकारी कौन सा ऑब्जेक्ट देता है?",
    "options_en": ["process", "system", "os", "runtime"],
    "options_hi": ["process", "system", "os", "runtime"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which module is used to interact with the operating system in Node.js?",
    "question_hi": "Node.js में ऑपरेटिंग सिस्टम के साथ इंटरैक्ट करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["os", "fs", "net", "path"],
    "options_hi": ["os", "fs", "net", "path"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method synchronously writes data to a file in Node.js?",
    "question_hi": "Node.js में फाइल में डेटा को सिंक्रोनस तरीके से लिखने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.writeFileSync()", "fs.writeFile()", "fs.appendFileSync()", "fs.appendFile()"],
    "options_hi": ["fs.writeFileSync()", "fs.writeFile()", "fs.appendFileSync()", "fs.appendFile()"],
    "answer_en": "fs.writeFileSync()",
    "answer_hi": "fs.writeFileSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which method appends data to a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल में डेटा असिंक्रोनस तरीके से जोड़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.appendFile()", "fs.writeFileSync()", "fs.appendFileSync()", "fs.writeFile()"],
    "options_hi": ["fs.appendFile()", "fs.writeFileSync()", "fs.appendFileSync()", "fs.writeFile()"],
    "answer_en": "fs.appendFile()",
    "answer_hi": "fs.appendFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which module is commonly used for routing in Express.js?",
    "question_hi": "Express.js में राउटिंग के लिए आमतौर पर कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["express.Router", "http", "url", "path"],
    "options_hi": ["express.Router", "http", "url", "path"],
    "answer_en": "express.Router",
    "answer_hi": "express.Router",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which event is emitted when a Node.js server receives a new request?",
    "question_hi": "जब Node.js सर्वर को नया रिक्वेस्ट प्राप्त होता है तो कौन सा इवेंट इमिट होता है?",
    "options_en": ["'request'", "'connection'", "'data'", "'response'"],
    "options_hi": ["'request'", "'connection'", "'data'", "'response'"],
    "answer_en": "'request'",
    "answer_hi": "'request'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which module is used for cryptographic functions in Node.js?",
    "question_hi": "Node.js में क्रिप्टोग्राफिक फंक्शन के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["crypto", "security", "tls", "hash"],
    "options_hi": ["crypto", "security", "tls", "hash"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method is used to create a new Buffer of a specified size in Node.js?",
    "question_hi": "Node.js में दिए गए साइज का नया Buffer बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["Buffer.alloc(size)", "new Buffer(size)", "Buffer.create(size)", "Buffer.new(size)"],
    "options_hi": ["Buffer.alloc(size)", "new Buffer(size)", "Buffer.create(size)", "Buffer.new(size)"],
    "answer_en": "Buffer.alloc(size)",
    "answer_hi": "Buffer.alloc(size)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What does the 'require' function do in Node.js?",
    "question_hi": "Node.js में 'require' फंक्शन क्या करता है?",
    "options_en": [
      "Loads modules",
      "Executes code asynchronously",
      "Creates new processes",
      "Reads files"
    ],
    "options_hi": [
      "मॉड्यूल लोड करता है",
      "कोड को असिंक्रोनस रूप से चलाता है",
      "नई प्रक्रिया बनाता है",
      "फाइल पढ़ता है"
    ],
    "answer_en": "Loads modules",
    "answer_hi": "मॉड्यूल लोड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which module is used to work with file and directory paths in Node.js?",
    "question_hi": "Node.js में फाइल और डायरेक्टरी पाथ के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["path", "fs", "os", "url"],
    "options_hi": ["path", "fs", "os", "url"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method resolves a sequence of paths or path segments into an absolute path?",
    "question_hi": "कौन सी विधि पाथ या पाथ सेगमेंट की श्रृंखला को एक पूर्ण पाथ में बदलती है?",
    "options_en": ["path.resolve()", "path.join()", "path.normalize()", "path.absolute()"],
    "options_hi": ["path.resolve()", "path.join()", "path.normalize()", "path.absolute()"],
    "answer_en": "path.resolve()",
    "answer_hi": "path.resolve()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Node.js feature allows non-blocking I/O operations?",
    "question_hi": "Node.js की कौन सी विशेषता नॉन-ब्लॉकिंग I/O ऑपरेशंस की अनुमति देती है?",
    "options_en": ["Event Loop", "Callbacks", "Promises", "Threads"],
    "options_hi": ["इवेंट लूप", "कॉलबैक्स", "प्रॉमिसेज", "थ्रेड्स"],
    "answer_en": "Event Loop",
    "answer_hi": "इवेंट लूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which keyword is used to create a Promise in Node.js?",
    "question_hi": "Node.js में Promise बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["new Promise()", "Promise.create()", "Promise.new()", "createPromise()"],
    "options_hi": ["new Promise()", "Promise.create()", "Promise.new()", "createPromise()"],
    "answer_en": "new Promise()",
    "answer_hi": "new Promise()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which module provides utilities for debugging Node.js applications?",
    "question_hi": "Node.js एप्लिकेशन को डिबग करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["util", "debug", "inspect", "log"],
    "options_hi": ["util", "debug", "inspect", "log"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method schedules a callback function to be invoked on the next iteration of the event loop?",
    "question_hi": "Node.js में किसी callback function को event loop के अगले iteration पर चलाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["process.nextTick()", "setTimeout()", "setImmediate()", "setInterval()"],
    "options_hi": ["process.nextTick()", "setTimeout()", "setImmediate()", "setInterval()"],
    "answer_en": "process.nextTick()",
    "answer_hi": "process.nextTick()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to schedule a callback function to execute immediately after I/O events' callbacks?",
    "question_hi": "I/O इवेंट्स के callback के बाद तुरंत callback function चलाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["setImmediate()", "setTimeout()", "process.nextTick()", "setInterval()"],
    "options_hi": ["setImmediate()", "setTimeout()", "process.nextTick()", "setInterval()"],
    "answer_en": "setImmediate()",
    "answer_hi": "setImmediate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which object provides a way to handle uncaught exceptions in Node.js?",
    "question_hi": "Node.js में uncaught exceptions को हैंडल करने का तरीका कौन सा ऑब्जेक्ट प्रदान करता है?",
    "options_en": ["process", "error", "exception", "events"],
    "options_hi": ["process", "error", "exception", "events"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which event is emitted on the 'process' object when an uncaught exception occurs?",
    "question_hi": "जब uncaught exception होती है तो 'process' ऑब्जेक्ट पर कौन सा इवेंट इमिट होता है?",
    "options_en": ["'uncaughtException'", "'error'", "'exception'", "'throw'"],
    "options_hi": ["'uncaughtException'", "'error'", "'exception'", "'throw'"],
    "answer_en": "'uncaughtException'",
    "answer_hi": "'uncaughtException'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method is used to stop the Node.js process?",
    "question_hi": "Node.js प्रक्रिया को रोकने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["process.exit()", "process.stop()", "process.quit()", "process.end()"],
    "options_hi": ["process.exit()", "process.stop()", "process.quit()", "process.end()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which flag is used to run a Node.js script in debug mode?",
    "question_hi": "Node.js स्क्रिप्ट को डिबग मोड में चलाने के लिए कौन सा फ्लैग उपयोग होता है?",
    "options_en": ["--inspect", "--debug", "--trace", "--log"],
    "options_hi": ["--inspect", "--debug", "--trace", "--log"],
    "answer_en": "--inspect",
    "answer_hi": "--inspect",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which module is used to create child processes in Node.js?",
    "question_hi": "Node.js में child processes बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["child_process", "cluster", "process", "thread"],
    "options_hi": ["child_process", "cluster", "process", "thread"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
 
  {
    "num": 40,
    "question_en": "Which method is used to spawn a new process in Node.js?",
    "question_hi": "Node.js में नया प्रोसेस शुरू करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["child_process.spawn()", "child_process.exec()", "child_process.fork()", "child_process.create()"],
    "options_hi": ["child_process.spawn()", "child_process.exec()", "child_process.fork()", "child_process.create()"],
    "answer_en": "child_process.spawn()",
    "answer_hi": "child_process.spawn()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method runs a command in a shell and buffers the output in Node.js?",
    "question_hi": "Node.js में कमांड को शेल में चलाकर आउटपुट को बफर करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["child_process.exec()", "child_process.spawn()", "child_process.fork()", "child_process.run()"],
    "options_hi": ["child_process.exec()", "child_process.spawn()", "child_process.fork()", "child_process.run()"],
    "answer_en": "child_process.exec()",
    "answer_hi": "child_process.exec()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is specifically designed to spawn a new Node.js process?",
    "question_hi": "नया Node.js प्रोसेस शुरू करने के लिए विशेष रूप से कौन सी विधि डिजाइन की गई है?",
    "options_en": ["child_process.fork()", "child_process.spawn()", "child_process.exec()", "child_process.create()"],
    "options_hi": ["child_process.fork()", "child_process.spawn()", "child_process.exec()", "child_process.create()"],
    "answer_en": "child_process.fork()",
    "answer_hi": "child_process.fork()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which built-in module is used for stream handling in Node.js?",
    "question_hi": "Node.js में स्ट्रीम हैंडलिंग के लिए कौन सा बिल्ट-इन मॉड्यूल उपयोग होता है?",
    "options_en": ["stream", "fs", "http", "net"],
    "options_hi": ["stream", "fs", "http", "net"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which type of stream is used to read data in Node.js?",
    "question_hi": "Node.js में डेटा पढ़ने के लिए किस प्रकार का स्ट्रीम उपयोग होता है?",
    "options_en": ["Readable stream", "Writable stream", "Duplex stream", "Transform stream"],
    "options_hi": ["Readable stream", "Writable stream", "Duplex stream", "Transform stream"],
    "answer_en": "Readable stream",
    "answer_hi": "Readable stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which stream type can both read and write data in Node.js?",
    "question_hi": "Node.js में कौन सा स्ट्रीम प्रकार डेटा को पढ़ और लिख सकता है?",
    "options_en": ["Duplex stream", "Readable stream", "Writable stream", "Transform stream"],
    "options_hi": ["Duplex stream", "Readable stream", "Writable stream", "Transform stream"],
    "answer_en": "Duplex stream",
    "answer_hi": "Duplex stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which module in Node.js supports creation of HTTP servers and clients?",
    "question_hi": "Node.js में HTTP सर्वर और क्लाइंट बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["http", "https", "net", "express"],
    "options_hi": ["http", "https", "net", "express"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which module is used to create HTTPS servers in Node.js?",
    "question_hi": "Node.js में HTTPS सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["https", "http", "tls", "net"],
    "options_hi": ["https", "http", "tls", "net"],
    "answer_en": "https",
    "answer_hi": "https",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which module helps in creating TCP servers and clients in Node.js?",
    "question_hi": "Node.js में TCP सर्वर और क्लाइंट बनाने में कौन सा मॉड्यूल मदद करता है?",
    "options_en": ["net", "http", "tls", "socket"],
    "options_hi": ["net", "http", "tls", "socket"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Node.js function is used to read input from the standard input stream?",
    "question_hi": "Node.js में स्टैंडर्ड इनपुट स्ट्रीम से इनपुट पढ़ने के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["process.stdin.on('data', callback)", "process.stdout.write()", "readline.createInterface()", "process.stdin.read()"],
    "options_hi": ["process.stdin.on('data', callback)", "process.stdout.write()", "readline.createInterface()", "process.stdin.read()"],
    "answer_en": "process.stdin.on('data', callback)",
    "answer_hi": "process.stdin.on('data', callback)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which module provides an interface for reading data from a Readable stream one line at a time?",
    "question_hi": "कौन सा मॉड्यूल Readable stream से एक समय में एक लाइन डेटा पढ़ने के लिए इंटरफ़ेस प्रदान करता है?",
    "options_en": ["readline", "stream", "fs", "events"],
    "options_hi": ["readline", "stream", "fs", "events"],
    "answer_en": "readline",
    "answer_hi": "readline",
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