const questions=[
  {
    "num": 1,
    "question_en": "Which module is used to handle file system operations in Node.js?",
    "question_hi": "Node.js में फाइल सिस्टम ऑपरेशन्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["fs", "path", "http", "os"],
    "options_hi": ["fs", "path", "http", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to create a new HTTP server in Node.js?",
    "question_hi": "Node.js में एक नया HTTP सर्वर बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["http.createServer()", "http.newServer()", "http.server()", "http.initServer()"],
    "options_hi": ["http.createServer()", "http.newServer()", "http.server()", "http.initServer()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the default port for a local Node.js server?",
    "question_hi": "स्थानीय Node.js सर्वर के लिए डिफ़ॉल्ट पोर्ट क्या है?",
    "options_en": ["3000", "8080", "80", "5000"],
    "options_hi": ["3000", "8080", "80", "5000"],
    "answer_en": "3000",
    "answer_hi": "3000",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which global object in Node.js holds information about the current module?",
    "question_hi": "Node.js में कौन सा ग्लोबल ऑब्जेक्ट करंट मॉड्यूल के बारे में जानकारी रखता है?",
    "options_en": ["module", "exports", "require", "global"],
    "options_hi": ["module", "exports", "require", "global"],
    "answer_en": "module",
    "answer_hi": "module",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function is used to include external modules in Node.js?",
    "question_hi": "Node.js में एक्सटर्नल मॉड्यूल्स को इनक्लूड करने के लिए कौन सा फंक्शन उपयोग किया जाता है?",
    "options_en": ["require()", "import()", "include()", "use()"],
    "options_hi": ["require()", "import()", "include()", "use()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which method is used to read environment variables in Node.js?",
    "question_hi": "Node.js में एन्वायरनमेंट वेरिएबल्स को पढ़ने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["process.env", "env.get", "process.getEnv", "global.env"],
    "options_hi": ["process.env", "env.get", "process.getEnv", "global.env"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which module is used to create web applications in Node.js?",
    "question_hi": "Node.js में वेब एप्लिकेशन्स बनाने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["express", "http", "fs", "url"],
    "options_hi": ["express", "http", "fs", "url"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the `__dirname` variable in Node.js?",
    "question_hi": "Node.js में `__dirname` वेरिएबल का उद्देश्य क्या है?",
    "options_en": ["Returns the directory name of the current module", "Returns the filename of the current module", "Returns the global object", "Returns the process ID"],
    "options_hi": ["करंट मॉड्यूल का डायरेक्टरी नाम रिटर्न करता है", "करंट मॉड्यूल का फाइलनाम रिटर्न करता है", "ग्लोबल ऑब्जेक्ट रिटर्न करता है", "प्रोसेस ID रिटर्न करता है"],
    "answer_en": "Returns the directory name of the current module",
    "answer_hi": "करंट मॉड्यूल का डायरेक्टरी नाम रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method is used to execute a callback once the server starts listening?",
    "question_hi": "सर्वर के लिसनिंग शुरू करने पर कॉलबैक एक्जीक्यूट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["server.listen()", "server.start()", "server.on()", "server.init()"],
    "options_hi": ["server.listen()", "server.start()", "server.on()", "server.init()"],
    "answer_en": "server.listen()",
    "answer_hi": "server.listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of the following is NOT a core module in Node.js?",
    "question_hi": "निम्नलिखित में से कौन सा Node.js का कोर मॉड्यूल नहीं है?",
    "options_en": ["express", "fs", "path", "http"],
    "options_hi": ["express", "fs", "path", "http"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What does the `require.cache` object contain in Node.js?",
    "question_hi": "Node.js में `require.cache` ऑब्जेक्ट में क्या होता है?",
    "options_en": ["Cached modules", "Environment variables", "Event listeners", "Server instances"],
    "options_hi": ["कैश्ड मॉड्यूल्स", "एन्वायरनमेंट वेरिएबल्स", "इवेंट लिसनर्स", "सर्वर इंस्टेंसेस"],
    "answer_en": "Cached modules",
    "answer_hi": "कैश्ड मॉड्यूल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to read files asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल्स को एसिंक्रोनसली पढ़ने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.readAsync()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.readAsync()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which event is emitted when a new TCP connection is made in a Node.js server?",
    "question_hi": "Node.js सर्वर में नया TCP कनेक्शन बनने पर कौन सा इवेंट एमिट होता है?",
    "options_en": ["connection", "connect", "request", "newConnection"],
    "options_hi": ["connection", "connect", "request", "newConnection"],
    "answer_en": "connection",
    "answer_hi": "connection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which module is used to handle operating system-related operations in Node.js?",
    "question_hi": "Node.js में ऑपरेटिंग सिस्टम से संबंधित ऑपरेशन्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["os", "path", "fs", "process"],
    "options_hi": ["os", "path", "fs", "process"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the purpose of the `exports` object in Node.js?",
    "question_hi": "Node.js में `exports` ऑब्जेक्ट का उद्देश्य क्या है?",
    "options_en": ["To expose functions/variables to other modules", "To import external modules", "To handle events", "To manage file operations"],
    "options_hi": ["फंक्शन्स/वेरिएबल्स को अन्य मॉड्यूल्स में एक्सपोज़ करने के लिए", "एक्सटर्नल मॉड्यूल्स को इम्पोर्ट करने के लिए", "इवेंट्स को हैंडल करने के लिए", "फाइल ऑपरेशन्स को मैनेज करने के लिए"],
    "answer_en": "To expose functions/variables to other modules",
    "answer_hi": "फंक्शन्स/वेरिएबल्स को अन्य मॉड्यूल्स में एक्सपोज़ करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to parse JSON data in Node.js?",
    "question_hi": "Node.js में JSON डेटा को पार्स करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["JSON.parse()", "JSON.decode()", "JSON.stringify()", "JSON.read()"],
    "options_hi": ["JSON.parse()", "JSON.decode()", "JSON.stringify()", "JSON.read()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method is used to handle GET requests in Express.js?",
    "question_hi": "Express.js में GET रिक्वेस्ट्स को हैंडल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["app.get()", "app.use()", "app.post()", "app.handleGet()"],
    "options_hi": ["app.get()", "app.use()", "app.post()", "app.handleGet()"],
    "answer_en": "app.get()",
    "answer_hi": "app.get()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the purpose of the `next` parameter in Express.js middleware?",
    "question_hi": "Express.js मिडलवेयर में `next` पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["To pass control to the next middleware", "To end the request-response cycle", "To skip the current middleware", "To handle errors"],
    "options_hi": ["अगले मिडलवेयर को कंट्रोल पास करने के लिए", "रिक्वेस्ट-रिस्पॉन्स साइकल को समाप्त करने के लिए", "करंट मिडलवेयर को स्किप करने के लिए", "एरर्स को हैंडल करने के लिए"],
    "answer_en": "To pass control to the next middleware",
    "answer_hi": "अगले मिडलवेयर को कंट्रोल पास करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
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
    "num": 20,
    "question_en": "Which module is used to handle query strings in Node.js?",
    "question_hi": "Node.js में क्वेरी स्ट्रिंग्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["querystring", "url", "http", "path"],
    "options_hi": ["querystring", "url", "http", "path"],
    "answer_en": "querystring",
    "answer_hi": "querystring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
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
    "num": 22,
    "question_en": "Which method is used to delete a file in Node.js?",
    "question_hi": "Node.js में फाइल डिलीट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.rm()"],
    "options_hi": ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.rm()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which module is used to handle child processes in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेसेस को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["child_process", "process", "os", "worker_threads"],
    "options_hi": ["child_process", "process", "os", "worker_threads"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method is used to spawn a new process in Node.js?",
    "question_hi": "Node.js में नया प्रोसेस स्पॉन करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["child_process.spawn()", "child_process.fork()", "child_process.exec()", "child_process.run()"],
    "options_hi": ["child_process.spawn()", "child_process.fork()", "child_process.exec()", "child_process.run()"],
    "answer_en": "child_process.spawn()",
    "answer_hi": "child_process.spawn()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method is used to handle POST requests in Express.js?",
    "question_hi": "Express.js में POST रिक्वेस्ट्स को हैंडल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["app.post()", "app.get()", "app.use()", "app.handlePost()"],
    "options_hi": ["app.post()", "app.get()", "app.use()", "app.handlePost()"],
    "answer_en": "app.post()",
    "answer_hi": "app.post()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method is used to redirect a response in Express.js?",
    "question_hi": "Express.js में रिस्पॉन्स को रीडायरेक्ट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["res.redirect()", "res.send()", "res.forward()", "res.next()"],
    "options_hi": ["res.redirect()", "res.send()", "res.forward()", "res.next()"],
    "answer_en": "res.redirect()",
    "answer_hi": "res.redirect()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method is used to set HTTP headers in Express.js?",
    "question_hi": "Express.js में HTTP हेडर्स सेट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["res.set()", "res.header()", "res.writeHead()", "res.headers()"],
    "options_hi": ["res.set()", "res.header()", "res.writeHead()", "res.headers()"],
    "answer_en": "res.set()",
    "answer_hi": "res.set()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to read data from a stream in Node.js?",
    "question_hi": "Node.js में स्ट्रीम से डेटा पढ़ने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["stream.read()", "stream.on('data')", "stream.get()", "stream.pipe()"],
    "options_hi": ["stream.read()", "stream.on('data')", "stream.get()", "stream.pipe()"],
    "answer_en": "stream.on('data')",
    "answer_hi": "stream.on('data')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method is used to write data to a stream in Node.js?",
    "question_hi": "Node.js में स्ट्रीम में डेटा लिखने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["stream.write()", "stream.send()", "stream.emit()", "stream.push()"],
    "options_hi": ["stream.write()", "stream.send()", "stream.emit()", "stream.push()"],
    "answer_en": "stream.write()",
    "answer_hi": "stream.write()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which method is used to chain streams in Node.js?",
    "question_hi": "Node.js में स्ट्रीम्स को चेन करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["stream.pipe()", "stream.chain()", "stream.connect()", "stream.link()"],
    "options_hi": ["stream.pipe()", "stream.chain()", "stream.connect()", "stream.link()"],
    "answer_en": "stream.pipe()",
    "answer_hi": "stream.pipe()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which module is used to handle cryptographic operations in Node.js?",
    "question_hi": "Node.js में क्रिप्टोग्राफिक ऑपरेशन्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["crypto", "hash", "encrypt", "security"],
    "options_hi": ["crypto", "hash", "encrypt", "security"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method is used to create a hash in Node.js?",
    "question_hi": "Node.js में हैश बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["crypto.createHash()", "crypto.hash()", "crypto.generateHash()", "crypto.encrypt()"],
    "options_hi": ["crypto.createHash()", "crypto.hash()", "crypto.generateHash()", "crypto.encrypt()"],
    "answer_en": "crypto.createHash()",
    "answer_hi": "crypto.createHash()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method is used to handle errors in Express.js?",
    "question_hi": "Express.js में एरर्स को हैंडल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["app.use() with 4 parameters", "app.error()", "app.catch()", "app.handleError()"],
    "options_hi": ["app.use() with 4 parameters", "app.error()", "app.catch()", "app.handleError()"],
    "answer_en": "app.use() with 4 parameters",
    "answer_hi": "4 पैरामीटर्स के साथ app.use()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to set cookies in Express.js?",
    "question_hi": "Express.js में कुकीज़ सेट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["res.cookie()", "res.setCookie()", "res.addCookie()", "res.sendCookie()"],
    "options_hi": ["res.cookie()", "res.setCookie()", "res.addCookie()", "res.sendCookie()"],
    "answer_en": "res.cookie()",
    "answer_hi": "res.cookie()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method is used to parse incoming request bodies in Express.js?",
    "question_hi": "Express.js में इनकमिंग रिक्वेस्ट बॉडीज को पार्स करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["body-parser middleware", "express.json()", "req.parse()", "app.body()"],
    "options_hi": ["body-parser middleware", "express.json()", "req.parse()", "app.body()"],
    "answer_en": "body-parser middleware",
    "answer_hi": "body-parser मिडलवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which method is used to handle 404 errors in Express.js?",
    "question_hi": "Express.js में 404 एरर्स को हैंडल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["app.use() at the end", "app.error404()", "app.notFound()", "app.handle404()"],
    "options_hi": ["अंत में app.use()", "app.error404()", "app.notFound()", "app.handle404()"],
    "answer_en": "app.use() at the end",
    "answer_hi": "अंत में app.use()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method is used to create a middleware in Express.js?",
    "question_hi": "Express.js में मिडलवेयर बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["app.use()", "app.middleware()", "app.addMiddleware()", "app.handle()"],
    "options_hi": ["app.use()", "app.middleware()", "app.addMiddleware()", "app.handle()"],
    "answer_en": "app.use()",
    "answer_hi": "app.use()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to serve static files in Express.js?",
    "question_hi": "Express.js में स्टैटिक फाइल्स सर्व करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["express.static()", "express.files()", "express.serve()", "express.public()"],
    "options_hi": ["express.static()", "express.files()", "express.serve()", "express.public()"],
    "answer_en": "express.static()",
    "answer_hi": "express.static()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method is used to handle route parameters in Express.js?",
    "question_hi": "Express.js में रूट पैरामीटर्स को हैंडल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["req.params", "req.query", "req.body", "req.route"],
    "options_hi": ["req.params", "req.query", "req.body", "req.route"],
    "answer_en": "req.params",
    "answer_hi": "req.params",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which method is used to handle query parameters in Express.js?",
    "question_hi": "Express.js में क्वेरी पैरामीटर्स को हैंडल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["req.query", "req.params", "req.body", "req.search"],
    "options_hi": ["req.query", "req.params", "req.body", "req.search"],
    "answer_en": "req.query",
    "answer_hi": "req.query",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method is used to create a WebSocket server in Node.js?",
    "question_hi": "Node.js में WebSocket सर्वर बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["ws module", "http module", "socket.io", "net module"],
    "options_hi": ["ws module", "http module", "socket.io", "net module"],
    "answer_en": "ws module",
    "answer_hi": "ws मॉड्यूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to handle WebSocket connections in Node.js?",
    "question_hi": "Node.js में WebSocket कनेक्शन्स को हैंडल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["ws.on('connection')", "ws.connect()", "ws.open()", "ws.listen()"],
    "options_hi": ["ws.on('connection')", "ws.connect()", "ws.open()", "ws.listen()"],
    "answer_en": "ws.on('connection')",
    "answer_hi": "ws.on('connection')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method is used to send data over WebSocket in Node.js?",
    "question_hi": "Node.js में WebSocket पर डेटा भेजने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["ws.send()", "ws.write()", "ws.emit()", "ws.post()"],
    "options_hi": ["ws.send()", "ws.write()", "ws.emit()", "ws.post()"],
    "answer_en": "ws.send()",
    "answer_hi": "ws.send()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method is used to handle WebSocket messages in Node.js?",
    "question_hi": "Node.js में WebSocket मैसेजेस को हैंडल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["ws.on('message')", "ws.message()", "ws.onMessage()", "ws.listen()"],
    "options_hi": ["ws.on('message')", "ws.message()", "ws.onMessage()", "ws.listen()"],
    "answer_en": "ws.on('message')",
    "answer_hi": "ws.on('message')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method is used to close a WebSocket connection in Node.js?",
    "question_hi": "Node.js में WebSocket कनेक्शन को बंद करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["ws.close()", "ws.end()", "ws.terminate()", "ws.disconnect()"],
    "options_hi": ["ws.close()", "ws.end()", "ws.terminate()", "ws.disconnect()"],
    "answer_en": "ws.close()",
    "answer_hi": "ws.close()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which module is used to handle buffers in Node.js?",
    "question_hi": "Node.js में बफर्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["Buffer", "buffer", "stream", "data"],
    "options_hi": ["Buffer", "buffer", "stream", "data"],
    "answer_en": "Buffer",
    "answer_hi": "Buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method is used to create a buffer in Node.js?",
    "question_hi": "Node.js में बफर बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["Buffer.from()", "Buffer.create()", "Buffer.new()", "Buffer.alloc()"],
    "options_hi": ["Buffer.from()", "Buffer.create()", "Buffer.new()", "Buffer.alloc()"],
    "answer_en": "Buffer.from()",
    "answer_hi": "Buffer.from()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method is used to convert a buffer to a string in Node.js?",
    "question_hi": "Node.js में बफर को स्ट्रिंग में कन्वर्ट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["buffer.toString()", "buffer.toText()", "buffer.toJSON()", "buffer.string()"],
    "options_hi": ["buffer.toString()", "buffer.toText()", "buffer.toJSON()", "buffer.string()"],
    "answer_en": "buffer.toString()",
    "answer_hi": "buffer.toString()",
    "attempted": false,
    "selected": ""
  },
    {
    "num": 49,
    "question_en": "Which method is used to schedule the execution of a one-time callback function in Node.js?",
    "question_hi": "Node.js में एक बार के कॉलबैक फंक्शन को शेड्यूल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which module is used to create and handle HTTP/HTTPS requests in Node.js?",
    "question_hi": "Node.js में HTTP/HTTPS रिक्वेस्ट्स बनाने और हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["http/https", "request", "axios", "fetch"],
    "options_hi": ["http/https", "request", "axios", "fetch"],
    "answer_en": "http/https",
    "answer_hi": "http/https",
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