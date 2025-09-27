const questions=[
  {
    "num": 1,
    "question_en": "What is Node.js primarily used for?",
    "question_hi": "Node.js का मुख्य रूप से किस लिए उपयोग किया जाता है?",
    "options_en": ["Server-side scripting", "Client-side scripting", "Database management", "Designing web pages"],
    "options_hi": ["सर्वर-साइड स्क्रिप्टिंग", "क्लाइंट-साइड स्क्रिप्टिंग", "डेटाबेस प्रबंधन", "वेब पेज डिज़ाइन करना"],
    "answer_en": "Server-side scripting",
    "answer_hi": "सर्वर-साइड स्क्रिप्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which runtime environment does Node.js use?",
    "question_hi": "Node.js किस रनटाइम वातावरण का उपयोग करता है?",
    "options_en": ["V8 JavaScript engine", "SpiderMonkey", "Java Virtual Machine", "Chakra"],
    "options_hi": ["V8 JavaScript engine", "SpiderMonkey", "Java Virtual Machine", "Chakra"],
    "answer_en": "V8 JavaScript engine",
    "answer_hi": "V8 JavaScript engine",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which core module is used for file system operations in Node.js?",
    "question_hi": "Node.js में फ़ाइल सिस्टम ऑपरेशन्स के लिए कौन सा कोर मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "path", "http", "os"],
    "options_hi": ["fs", "path", "http", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which command initializes a new Node.js project with default settings?",
    "question_hi": "डिफ़ॉल्ट सेटिंग्स के साथ नया Node.js प्रोजेक्ट किस कमांड से शुरू होता है?",
    "options_en": ["npm init -y", "npm start", "node init", "npm install"],
    "options_hi": ["npm init -y", "npm start", "node init", "npm install"],
    "answer_en": "npm init -y",
    "answer_hi": "npm init -y",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which module is used to handle query strings in Node.js?",
    "question_hi": "Node.js में क्वेरी स्ट्रिंग्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["querystring", "url", "http", "path"],
    "options_hi": ["querystring", "url", "http", "path"],
    "answer_en": "querystring",
    "answer_hi": "querystring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which method is used to include external modules in a Node.js file?",
    "question_hi": "Node.js फ़ाइल में बाहरी मॉड्यूल शामिल करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["require()", "include()", "import()", "load()"],
    "options_hi": ["require()", "include()", "import()", "load()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the default port number for HTTP servers in Node.js examples?",
    "question_hi": "Node.js के उदाहरणों में HTTP सर्वर के लिए डिफ़ॉल्ट पोर्ट नंबर क्या होता है?",
    "options_en": ["3000", "80", "8080", "5000"],
    "options_hi": ["3000", "80", "8080", "5000"],
    "answer_en": "3000",
    "answer_hi": "3000",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which Node.js global object provides information about the current process?",
    "question_hi": "वर्तमान प्रोसेस के बारे में जानकारी देने वाला Node.js ग्लोबल ऑब्जेक्ट कौन सा है?",
    "options_en": ["process", "global", "__dirname", "module"],
    "options_hi": ["process", "global", "__dirname", "module"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "How can you read environment variables in Node.js?",
    "question_hi": "Node.js में एनवायरनमेंट वेरिएबल्स को कैसे पढ़ा जाता है?",
    "options_en": ["process.env.VAR_NAME", "process.VAR_NAME", "env.VAR_NAME", "process.environment.VAR_NAME"],
    "options_hi": ["process.env.VAR_NAME", "process.VAR_NAME", "env.VAR_NAME", "process.environment.VAR_NAME"],
    "answer_en": "process.env.VAR_NAME",
    "answer_hi": "process.env.VAR_NAME",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which method is used to write data to a file asynchronously in Node.js?",
    "question_hi": "Node.js में फ़ाइल में असिंक्रोनस रूप से डेटा लिखने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.writeFile()", "fs.writeFileSync()", "fs.appendFile()", "fs.createWriteStream()"],
    "options_hi": ["fs.writeFile()", "fs.writeFileSync()", "fs.appendFile()", "fs.createWriteStream()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which event is emitted when a readable stream has no more data to provide?",
    "question_hi": "जब एक readable stream के पास और डेटा नहीं होता तो कौन सा इवेंट उत्पन्न होता है?",
    "options_en": ["end", "close", "data", "finish"],
    "options_hi": ["end", "close", "data", "finish"],
    "answer_en": "end",
    "answer_hi": "end",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which module is commonly used to create web servers with more features than the default 'http' module?",
    "question_hi": "डिफ़ॉल्ट 'http' मॉड्यूल की तुलना में अधिक फीचर्स वाले वेब सर्वर बनाने के लिए कौन सा मॉड्यूल आमतौर पर उपयोग होता है?",
    "options_en": ["Express", "Koa", "Hapi", "Connect"],
    "options_hi": ["Express", "Koa", "Hapi", "Connect"],
    "answer_en": "Express",
    "answer_hi": "Express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "How do you install a package using npm?",
    "question_hi": "npm का उपयोग करके पैकेज कैसे इंस्टॉल करते हैं?",
    "options_en": ["npm install package_name", "npm get package_name", "npm fetch package_name", "npm download package_name"],
    "options_hi": ["npm install package_name", "npm get package_name", "npm fetch package_name", "npm download package_name"],
    "answer_en": "npm install package_name",
    "answer_hi": "npm install package_name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the purpose of the package.json file in a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट में package.json फाइल का उद्देश्य क्या है?",
    "options_en": ["Manage project metadata and dependencies", "Store source code", "Configure server settings", "Log errors"],
    "options_hi": ["प्रोजेक्ट मेटाडेटा और डिपेंडेंसीज को प्रबंधित करना", "सोर्स कोड स्टोर करना", "सर्वर सेटिंग्स कॉन्फ़िगर करना", "एरर लॉग करना"],
    "answer_en": "Manage project metadata and dependencies",
    "answer_hi": "प्रोजेक्ट मेटाडेटा और डिपेंडेंसीज को प्रबंधित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which module is used to work with file and directory paths in Node.js?",
    "question_hi": "Node.js में फ़ाइल और डायरेक्टरी पाथ के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["path", "fs", "url", "net"],
    "options_hi": ["path", "fs", "url", "net"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does the __dirname variable represent in Node.js?",
    "question_hi": "Node.js में __dirname वेरिएबल क्या दर्शाता है?",
    "options_en": ["Current directory of the executing script", "Current working directory", "Home directory", "Root directory"],
    "options_hi": ["चलाए जा रहे स्क्रिप्ट की वर्तमान डायरेक्टरी", "वर्तमान कार्यशील डायरेक्टरी", "होम डायरेक्टरी", "रूट डायरेक्टरी"],
    "answer_en": "Current directory of the executing script",
    "answer_hi": "चलाए जा रहे स्क्रिप्ट की वर्तमान डायरेक्टरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which of these is a Node.js framework built on Express and adds support for GraphQL?",
    "question_hi": "इनमें से कौन सा Node.js फ्रेमवर्क Express पर आधारित है और GraphQL सपोर्ट जोड़ता है?",
    "options_en": ["Apollo Server", "Koa", "NestJS", "Sails.js"],
    "options_hi": ["Apollo Server", "Koa", "NestJS", "Sails.js"],
    "answer_en": "Apollo Server",
    "answer_hi": "Apollo Server",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used to handle asynchronous operations in Node.js since ES6?",
    "question_hi": "Node.js में ES6 के बाद से असिंक्रोनस ऑपरेशन्स को संभालने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["async/await", "callback", "promise", "setTimeout"],
    "options_hi": ["async/await", "callback", "promise", "setTimeout"],
    "answer_en": "async/await",
    "answer_hi": "async/await",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which object in Node.js is used to handle file uploads in Express applications?",
    "question_hi": "Express एप्लीकेशंस में फ़ाइल अपलोड को संभालने के लिए Node.js में कौन सा ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["multer", "body-parser", "express-fileupload", "fs"],
    "options_hi": ["multer", "body-parser", "express-fileupload", "fs"],
    "answer_en": "multer",
    "answer_hi": "multer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of the following is a templating engine commonly used with Express?",
    "question_hi": "निम्नलिखित में से कौन सा Express के साथ सामान्यतः उपयोग किया जाने वाला टेम्प्लेटिंग इंजन है?",
    "options_en": ["EJS", "React", "Angular", "Vue"],
    "options_hi": ["EJS", "React", "Angular", "Vue"],
    "answer_en": "EJS",
    "answer_hi": "EJS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the default scope of variables declared with 'var' inside a function in Node.js?",
    "question_hi": "Node.js में 'var' से घोषित वेरिएबल्स की डिफ़ॉल्ट स्कोप क्या होती है?",
    "options_en": ["Function scope", "Block scope", "Global scope", "Module scope"],
    "options_hi": ["फंक्शन स्कोप", "ब्लॉक स्कोप", "ग्लोबल स्कोप", "मॉड्यूल स्कोप"],
    "answer_en": "Function scope",
    "answer_hi": "फंक्शन स्कोप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which event is emitted by an HTTP server in Node.js when a request is received?",
    "question_hi": "Node.js में HTTP सर्वर द्वारा कौन सा इवेंट उत्पन्न होता है जब कोई रिक्वेस्ट प्राप्त होती है?",
    "options_en": ["request", "connect", "data", "response"],
    "options_hi": ["request", "connect", "data", "response"],
    "answer_en": "request",
    "answer_hi": "request",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of these is a package manager alternative to npm in Node.js ecosystem?",
    "question_hi": "Node.js इकोसिस्टम में npm के विकल्प के रूप में कौन सा पैकेज मैनेजर है?",
    "options_en": ["Yarn", "Bower", "Grunt", "Gulp"],
    "options_hi": ["Yarn", "Bower", "Grunt", "Gulp"],
    "answer_en": "Yarn",
    "answer_hi": "Yarn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "How can you stop a Node.js server programmatically?",
    "question_hi": "Node.js सर्वर को प्रोग्रामेटिकली कैसे रोका जाता है?",
    "options_en": ["server.close()", "server.stop()", "process.exit()", "http.close()"],
    "options_hi": ["server.close()", "server.stop()", "process.exit()", "http.close()"],
    "answer_en": "server.close()",
    "answer_hi": "server.close()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method can be used to parse a JSON string into a JavaScript object in Node.js?",
    "question_hi": "Node.js में JSON स्ट्रिंग को JavaScript ऑब्जेक्ट में बदलने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method is used to convert a JavaScript object into a JSON string in Node.js?",
    "question_hi": "Node.js में JavaScript ऑब्जेक्ट को JSON स्ट्रिंग में बदलने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["JSON.stringify()", "JSON.parse()", "JSON.toString()", "JSON.convert()"],
    "options_hi": ["JSON.stringify()", "JSON.parse()", "JSON.toString()", "JSON.convert()"],
    "answer_en": "JSON.stringify()",
    "answer_hi": "JSON.stringify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which module helps in creating child processes in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेसेस बनाने में कौन सा मॉड्यूल मदद करता है?",
    "options_en": ["child_process", "cluster", "events", "process"],
    "options_hi": ["child_process", "cluster", "events", "process"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does the 'exports' object represent in Node.js modules?",
    "question_hi": "Node.js मॉड्यूल्स में 'exports' ऑब्जेक्ट क्या दर्शाता है?",
    "options_en": ["The public API of a module", "Internal variables", "Private functions", "The module loader"],
    "options_hi": ["मॉड्यूल का सार्वजनिक API", "आंतरिक वेरिएबल्स", "निजी फंक्शंस", "मॉड्यूल लोडर"],
    "answer_en": "The public API of a module",
    "answer_hi": "मॉड्यूल का सार्वजनिक API",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword is used to create a buffer in Node.js?",
    "question_hi": "Node.js में बफर बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["Buffer.alloc()", "Buffer.create()", "Buffer.new()", "Buffer.init()"],
    "options_hi": ["Buffer.alloc()", "Buffer.create()", "Buffer.new()", "Buffer.init()"],
    "answer_en": "Buffer.alloc()",
    "answer_hi": "Buffer.alloc()",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 30,
    "question_en": "Which module is used to create TCP servers in Node.js?",
    "question_hi": "Node.js में TCP सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["net", "http", "tcp", "dns"],
    "options_hi": ["net", "http", "tcp", "dns"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does the 'cluster' module in Node.js help with?",
    "question_hi": "Node.js में 'cluster' मॉड्यूल किस काम में मदद करता है?",
    "options_en": ["Creating child processes to handle load", "Database connections", "File operations", "HTTP requests"],
    "options_hi": ["लोड संभालने के लिए चाइल्ड प्रोसेसेस बनाना", "डेटाबेस कनेक्शन", "फाइल ऑपरेशन्स", "HTTP रिक्वेस्ट"],
    "answer_en": "Creating child processes to handle load",
    "answer_hi": "लोड संभालने के लिए चाइल्ड प्रोसेसेस बनाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which command updates all packages in the node_modules folder?",
    "question_hi": "node_modules फोल्डर में सभी पैकेजेस को अपडेट करने के लिए कौन सा कमांड है?",
    "options_en": ["npm update", "npm upgrade", "npm refresh", "npm install --update"],
    "options_hi": ["npm update", "npm upgrade", "npm refresh", "npm install --update"],
    "answer_en": "npm update",
    "answer_hi": "npm update",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method in Express.js is used to handle POST requests?",
    "question_hi": "Express.js में POST रिक्वेस्ट को हैंडल करने के लिए कौन सी मेथड है?",
    "options_en": ["app.post()", "app.get()", "app.put()", "app.delete()"],
    "options_hi": ["app.post()", "app.get()", "app.put()", "app.delete()"],
    "answer_en": "app.post()",
    "answer_hi": "app.post()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which middleware is used to parse JSON request bodies in Express?",
    "question_hi": "Express में JSON रिक्वेस्ट बॉडी को पार्स करने के लिए कौन सा मिडलवेयर उपयोग होता है?",
    "options_en": ["express.json()", "body-parser.urlencoded()", "express.static()", "cookie-parser()"],
    "options_hi": ["express.json()", "body-parser.urlencoded()", "express.static()", "cookie-parser()"],
    "answer_en": "express.json()",
    "answer_hi": "express.json()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the use of the 'next' parameter in Express middleware functions?",
    "question_hi": "Express मिडलवेयर फ़ंक्शन में 'next' पैरामीटर का उपयोग क्या है?",
    "options_en": ["To pass control to the next middleware", "To send response to client", "To log requests", "To handle errors"],
    "options_hi": ["अगले मिडलवेयर को कंट्रोल पास करने के लिए", "क्लाइंट को रिस्पॉन्स भेजने के लिए", "रिक्वेस्ट लॉग करने के लिए", "एरर हैंडल करने के लिए"],
    "answer_en": "To pass control to the next middleware",
    "answer_hi": "अगले मिडलवेयर को कंट्रोल पास करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which method is used to send a response back to the client in Express?",
    "question_hi": "Express में क्लाइंट को रिस्पॉन्स भेजने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["res.send()", "res.response()", "res.write()", "res.end()"],
    "options_hi": ["res.send()", "res.response()", "res.write()", "res.end()"],
    "answer_en": "res.send()",
    "answer_hi": "res.send()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the default file that npm looks for when installing packages?",
    "question_hi": "पैकेज इंस्टॉल करते समय npm डिफ़ॉल्ट रूप से कौन सी फाइल देखता है?",
    "options_en": ["package.json", "package-lock.json", "npm.json", "index.js"],
    "options_hi": ["package.json", "package-lock.json", "npm.json", "index.js"],
    "answer_en": "package.json",
    "answer_hi": "package.json",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Node.js module allows you to perform DNS lookups?",
    "question_hi": "Node.js में DNS लुकअप करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["dns", "net", "http", "os"],
    "options_hi": ["dns", "net", "http", "os"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method stops the execution of the current process immediately in Node.js?",
    "question_hi": "Node.js में वर्तमान प्रोसेस को तुरंत रोकने के लिए कौन सी मेथड है?",
    "options_en": ["process.exit()", "process.kill()", "process.stop()", "process.end()"],
    "options_hi": ["process.exit()", "process.kill()", "process.stop()", "process.end()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function can be used to schedule a function to run after a delay in Node.js?",
    "question_hi": "Node.js में किसी फंक्शन को देरी के बाद चलाने के लिए कौन सी फंक्शन उपयोग होती है?",
    "options_en": ["setTimeout()", "setInterval()", "process.nextTick()", "setImmediate()"],
    "options_hi": ["setTimeout()", "setInterval()", "process.nextTick()", "setImmediate()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which event loop phase handles I/O callbacks in Node.js?",
    "question_hi": "Node.js में I/O कॉलबैक्स को हैंडल करने वाला इवेंट लूप फेज कौन सा है?",
    "options_en": ["poll", "timers", "check", "close callbacks"],
    "options_hi": ["poll", "timers", "check", "close callbacks"],
    "answer_en": "poll",
    "answer_hi": "poll",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which module provides utilities to work with streams in Node.js?",
    "question_hi": "Node.js में स्ट्रीम्स के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["stream", "fs", "events", "buffer"],
    "options_hi": ["stream", "fs", "events", "buffer"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method is used to create a readable stream from a file in Node.js?",
    "question_hi": "Node.js में किसी फाइल से readable stream बनाने के लिए कौन सी मेथड है?",
    "options_en": ["fs.createReadStream()", "fs.readFile()", "fs.read()", "fs.open()"],
    "options_hi": ["fs.createReadStream()", "fs.readFile()", "fs.read()", "fs.open()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which module in Node.js can be used for cryptographic functionality?",
    "question_hi": "Node.js में क्रिप्टोग्राफिक फंक्शनैलिटी के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["crypto", "tls", "net", "dns"],
    "options_hi": ["crypto", "tls", "net", "dns"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method is used to listen for incoming connections in an HTTP server in Node.js?",
    "question_hi": "Node.js में HTTP सर्वर में आने वाले कनेक्शन्स को सुनने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["server.listen()", "server.start()", "http.listen()", "http.start()"],
    "options_hi": ["server.listen()", "server.start()", "http.listen()", "http.start()"],
    "answer_en": "server.listen()",
    "answer_hi": "server.listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to remove a listener from an EventEmitter in Node.js?",
    "question_hi": "Node.js में EventEmitter से लिस्नर हटाने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["removeListener()", "off()", "deleteListener()", "remove()"],
    "options_hi": ["removeListener()", "off()", "deleteListener()", "remove()"],
    "answer_en": "removeListener()",
    "answer_hi": "removeListener()",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 47,
    "question_en": "Which property holds the directory name of the current module in Node.js?",
    "question_hi": "Node.js में वर्तमान मॉड्यूल के डायरेक्टरी का नाम किस प्रॉपर्टी में होता है?",
    "options_en": ["__dirname", "__filename", "module.dir", "path.dirname"],
    "options_hi": ["__dirname", "__filename", "module.dir", "path.dirname"],
    "answer_en": "__dirname",
    "answer_hi": "__dirname",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method is used to add a new route handler in Express.js?",
    "question_hi": "Express.js में नया रूट हैंडलर जोड़ने के लिए कौन सी मेथड उपयोग होती है?",
    "options_en": ["app.use()", "app.add()", "app.route()", "app.handle()"],
    "options_hi": ["app.use()", "app.add()", "app.route()", "app.handle()"],
    "answer_en": "app.use()",
    "answer_hi": "app.use()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which environment variable is commonly used to set the port number for a Node.js server?",
    "question_hi": "Node.js सर्वर के लिए पोर्ट नंबर सेट करने के लिए आमतौर पर कौन सा एन्वायरनमेंट वेरिएबल उपयोग होता है?",
    "options_en": ["process.env.PORT", "process.env.HOST", "process.port", "env.port"],
    "options_hi": ["process.env.PORT", "process.env.HOST", "process.port", "env.port"],
    "answer_en": "process.env.PORT",
    "answer_hi": "process.env.PORT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which core Node.js module helps in working with file and directory paths?",
    "question_hi": "Node.js का कौन सा कोर मॉड्यूल फाइल और डायरेक्टरी पाथ्स के साथ काम करने में मदद करता है?",
    "options_en": ["path", "fs", "os", "url"],
    "options_hi": ["path", "fs", "os", "url"],
    "answer_en": "path",
    "answer_hi": "path",
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