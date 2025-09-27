const questions=[
  {
    "num": 1,
    "question_en": "Which function is used to schedule a function to run after a delay in Node.js?",
    "question_hi": "Node.js में देरी के बाद फ़ंक्शन चलाने के लिए कौन सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["setTimeout()", "setInterval()", "setDelay()", "setSchedule()"],
    "options_hi": ["setTimeout()", "setInterval()", "setDelay()", "setSchedule()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which object in Node.js provides information about the current process?",
    "question_hi": "Node.js में वर्तमान प्रक्रिया की जानकारी कौन सा ऑब्जेक्ट देता है?",
    "options_en": ["process", "os", "system", "runtime"],
    "options_hi": ["process", "os", "system", "runtime"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the 'path' module in Node.js help with?",
    "question_hi": "Node.js में 'path' मॉड्यूल किस चीज़ में मदद करता है?",
    "options_en": ["Handling file paths", "HTTP requests", "Buffer management", "Cryptography"],
    "options_hi": ["Handling file paths", "HTTP requests", "Buffer management", "Cryptography"],
    "answer_en": "Handling file paths",
    "answer_hi": "Handling file paths",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which event loop phase executes timers callbacks in Node.js?",
    "question_hi": "Node.js में कौन सा इवेंट लूप फेज़ टाइमर कॉलबैक को एक्सेक्यूट करता है?",
    "options_en": ["Timers phase", "Poll phase", "Check phase", "Close callbacks phase"],
    "options_hi": ["Timers phase", "Poll phase", "Check phase", "Close callbacks phase"],
    "answer_en": "Timers phase",
    "answer_hi": "Timers phase",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "How do you read environment variables in Node.js?",
    "question_hi": "Node.js में पर्यावरण चर (environment variables) कैसे पढ़ते हैं?",
    "options_en": ["process.env.VARIABLE_NAME", "env.get()", "process.getEnv()", "getEnv()"],
    "options_hi": ["process.env.VARIABLE_NAME", "env.get()", "process.getEnv()", "getEnv()"],
    "answer_en": "process.env.VARIABLE_NAME",
    "answer_hi": "process.env.VARIABLE_NAME",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which method is used to write data to a writable stream in Node.js?",
    "question_hi": "Node.js में writable stream में डेटा लिखने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["write()", "send()", "writeData()", "output()"],
    "options_hi": ["write()", "send()", "writeData()", "output()"],
    "answer_en": "write()",
    "answer_hi": "write()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which module is used for file system operations in Node.js?",
    "question_hi": "Node.js में फ़ाइल सिस्टम ऑपरेशन के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "file", "system", "path"],
    "options_hi": ["fs", "file", "system", "path"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used to send a response to the client in Express.js?",
    "question_hi": "Express.js में क्लाइंट को प्रतिक्रिया भेजने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["res.send()", "res.write()", "res.response()", "res.return()"],
    "options_hi": ["res.send()", "res.write()", "res.response()", "res.return()"],
    "answer_en": "res.send()",
    "answer_hi": "res.send()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which module is required to work with streams in Node.js?",
    "question_hi": "Node.js में streams के साथ काम करने के लिए कौन सा मॉड्यूल आवश्यक है?",
    "options_en": ["stream", "buffer", "fs", "net"],
    "options_hi": ["stream", "buffer", "fs", "net"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "How do you import a module in Node.js?",
    "question_hi": "Node.js में किसी मॉड्यूल को कैसे इम्पोर्ट करते हैं?",
    "options_en": ["require('module')", "import('module')", "include('module')", "load('module')"],
    "options_hi": ["require('module')", "import('module')", "include('module')", "load('module')"],
    "answer_en": "require('module')",
    "answer_hi": "require('module')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method reads a file synchronously in Node.js?",
    "question_hi": "Node.js में फाइल को सिंक्रोनसली पढ़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.readFileSync()", "fs.readFile()", "fs.openSync()", "fs.read()"],
    "options_hi": ["fs.readFileSync()", "fs.readFile()", "fs.openSync()", "fs.read()"],
    "answer_en": "fs.readFileSync()",
    "answer_hi": "fs.readFileSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does 'npm init' do?",
    "question_hi": "'npm init' क्या करता है?",
    "options_en": ["Creates a package.json file", "Installs packages", "Runs the application", "Updates npm"],
    "options_hi": ["Creates a package.json file", "Installs packages", "Runs the application", "Updates npm"],
    "answer_en": "Creates a package.json file",
    "answer_hi": "Creates a package.json file",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which global object provides access to the command-line arguments in Node.js?",
    "question_hi": "Node.js में कमांड-लाइन आर्गुमेंट्स एक्सेस करने के लिए कौन सा ग्लोबल ऑब्जेक्ट है?",
    "options_en": ["process.argv", "args", "commandLine", "argv.process"],
    "options_hi": ["process.argv", "args", "commandLine", "argv.process"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "How do you make a module export multiple functions in Node.js?",
    "question_hi": "Node.js में एक मॉड्यूल से कई फंक्शन एक्सपोर्ट कैसे करते हैं?",
    "options_en": ["module.exports = { func1, func2 }", "exports.func1 = func1", "exports = { func1, func2 }", "module.exportMultiple()"],
    "options_hi": ["module.exports = { func1, func2 }", "exports.func1 = func1", "exports = { func1, func2 }", "module.exportMultiple()"],
    "answer_en": "module.exports = { func1, func2 }",
    "answer_hi": "module.exports = { func1, func2 }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method is used to close a TCP server in Node.js?",
    "question_hi": "Node.js में TCP सर्वर को बंद करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["server.close()", "server.stop()", "server.end()", "server.shutdown()"],
    "options_hi": ["server.close()", "server.stop()", "server.end()", "server.shutdown()"],
    "answer_en": "server.close()",
    "answer_hi": "server.close()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which module provides operating system-related utility methods in Node.js?",
    "question_hi": "Node.js में ऑपरेटिंग सिस्टम से संबंधित उपयोगिता विधियाँ कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["os", "system", "process", "runtime"],
    "options_hi": ["os", "system", "process", "runtime"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Node.js global variable holds the current module's filename?",
    "question_hi": "Node.js में वर्तमान मॉड्यूल का फाइलनाम कौन सा ग्लोबल वैरिएबल रखता है?",
    "options_en": ["__filename", "__dirname", "module.filename", "process.filename"],
    "options_hi": ["__filename", "__dirname", "module.filename", "process.filename"],
    "answer_en": "__filename",
    "answer_hi": "__filename",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which module is used to create child processes in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेस बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["child_process", "cluster", "process", "fork"],
    "options_hi": ["child_process", "cluster", "process", "fork"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function creates a readable stream from a file in Node.js?",
    "question_hi": "Node.js में फाइल से readable stream बनाने के लिए कौन सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["fs.createReadStream()", "fs.readFile()", "fs.openReadStream()", "fs.readStream()"],
    "options_hi": ["fs.createReadStream()", "fs.readFile()", "fs.openReadStream()", "fs.readStream()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "How can you import a JSON file directly in Node.js?",
    "question_hi": "Node.js में JSON फाइल को सीधे कैसे इम्पोर्ट कर सकते हैं?",
    "options_en": ["require('./file.json')", "import JSON from './file.json'", "readFile('./file.json')", "fetch('./file.json')"],
    "options_hi": ["require('./file.json')", "import JSON from './file.json'", "readFile('./file.json')", "fetch('./file.json')"],
    "answer_en": "require('./file.json')",
    "answer_hi": "require('./file.json')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used to check if a path exists synchronously in Node.js?",
    "question_hi": "Node.js में यह जांचने के लिए कि पथ सिंक्रोनसली मौजूद है या नहीं, कौन सा फ़ंक्शन उपयोग होता है?",
    "options_en": ["fs.existsSync()", "fs.exists()", "fs.pathExistsSync()", "fs.checkPath()"],
    "options_hi": ["fs.existsSync()", "fs.exists()", "fs.pathExistsSync()", "fs.checkPath()"],
    "answer_en": "fs.existsSync()",
    "answer_hi": "fs.existsSync()",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 22,
    "question_en": "Which method is used to append data to a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल में असिंक्रोनसली डेटा जोड़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.appendFile()", "fs.writeFile()", "fs.addFile()", "fs.pushFile()"],
    "options_hi": ["fs.appendFile()", "fs.writeFile()", "fs.addFile()", "fs.pushFile()"],
    "answer_en": "fs.appendFile()",
    "answer_hi": "fs.appendFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which module is used for cryptographic functions in Node.js?",
    "question_hi": "Node.js में क्रिप्टोग्राफिक फ़ंक्शन के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["crypto", "secure", "hash", "cipher"],
    "options_hi": ["crypto", "secure", "hash", "cipher"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does the 'Buffer' class in Node.js represent?",
    "question_hi": "Node.js में 'Buffer' क्लास किस चीज़ का प्रतिनिधित्व करता है?",
    "options_en": ["Raw binary data", "String data", "JSON objects", "File paths"],
    "options_hi": ["Raw binary data", "String data", "JSON objects", "File paths"],
    "answer_en": "Raw binary data",
    "answer_hi": "Raw binary data",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which event is emitted when a stream finishes writing data?",
    "question_hi": "किस इवेंट को तब एमिट किया जाता है जब एक स्ट्रीम डेटा लिखना पूरा कर लेती है?",
    "options_en": ["finish", "end", "close", "done"],
    "options_hi": ["finish", "end", "close", "done"],
    "answer_en": "finish",
    "answer_hi": "finish",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method is used to parse a URL string in Node.js?",
    "question_hi": "Node.js में URL स्ट्रिंग पार्स करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["url.parse()", "url.decode()", "url.stringify()", "url.extract()"],
    "options_hi": ["url.parse()", "url.decode()", "url.stringify()", "url.extract()"],
    "answer_en": "url.parse()",
    "answer_hi": "url.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which module allows creation of HTTP servers in Node.js?",
    "question_hi": "Node.js में HTTP सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["http", "https", "net", "server"],
    "options_hi": ["http", "https", "net", "server"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to convert a Buffer to a string in Node.js?",
    "question_hi": "Node.js में Buffer को string में बदलने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["buffer.toString()", "buffer.toStr()", "buffer.convert()", "buffer.stringify()"],
    "options_hi": ["buffer.toString()", "buffer.toStr()", "buffer.convert()", "buffer.stringify()"],
    "answer_en": "buffer.toString()",
    "answer_hi": "buffer.toString()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method in Node.js reads the contents of a directory asynchronously?",
    "question_hi": "Node.js में डायरेक्टरी की सामग्री असिंक्रोनसली पढ़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.readdir()", "fs.readDirSync()", "fs.openDir()", "fs.listDir()"],
    "options_hi": ["fs.readdir()", "fs.readDirSync()", "fs.openDir()", "fs.listDir()"],
    "answer_en": "fs.readdir()",
    "answer_hi": "fs.readdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which command installs a package globally using npm?",
    "question_hi": "npm के साथ पैकेज को ग्लोबली इंस्टॉल करने के लिए कौन सा कमांड है?",
    "options_en": ["npm install -g package_name", "npm install package_name", "npm global add package_name", "npm add -g package_name"],
    "options_hi": ["npm install -g package_name", "npm install package_name", "npm global add package_name", "npm add -g package_name"],
    "answer_en": "npm install -g package_name",
    "answer_hi": "npm install -g package_name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which method can be used to stop a timer set by setInterval() in Node.js?",
    "question_hi": "Node.js में setInterval() द्वारा सेट किए गए टाइमर को रोकने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["clearInterval()", "clearTimeout()", "stopInterval()", "cancelInterval()"],
    "options_hi": ["clearInterval()", "clearTimeout()", "stopInterval()", "cancelInterval()"],
    "answer_en": "clearInterval()",
    "answer_hi": "clearInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "How do you create a Buffer of length 10 filled with zeros in Node.js?",
    "question_hi": "Node.js में 10 लंबाई का एक Buffer कैसे बनाते हैं जो ज़ीरो से भरा हो?",
    "options_en": ["Buffer.alloc(10)", "Buffer.from(10)", "new Buffer(10)", "Buffer.create(10)"],
    "options_hi": ["Buffer.alloc(10)", "Buffer.from(10)", "new Buffer(10)", "Buffer.create(10)"],
    "answer_en": "Buffer.alloc(10)",
    "answer_hi": "Buffer.alloc(10)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the default port for HTTP servers in Node.js if not specified?",
    "question_hi": "यदि HTTP सर्वर में पोर्ट निर्दिष्ट न हो तो Node.js में डिफ़ॉल्ट पोर्ट क्या होता है?",
    "options_en": ["80", "3000", "8080", "443"],
    "options_hi": ["80", "3000", "8080", "443"],
    "answer_en": "80",
    "answer_hi": "80",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which keyword is used to create an asynchronous function in Node.js?",
    "question_hi": "Node.js में असिंक्रोनस फ़ंक्शन बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["async", "await", "defer", "asyncFunc"],
    "options_hi": ["async", "await", "defer", "asyncFunc"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method sends JSON response in Express.js?",
    "question_hi": "Express.js में JSON प्रतिक्रिया भेजने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["res.json()", "res.sendJson()", "res.send()", "res.responseJson()"],
    "options_hi": ["res.json()", "res.sendJson()", "res.send()", "res.responseJson()"],
    "answer_en": "res.json()",
    "answer_hi": "res.json()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'cluster' module in Node.js?",
    "question_hi": "Node.js में 'cluster' मॉड्यूल का उद्देश्य क्या है?",
    "options_en": ["To create child processes to handle load", "To manage file system", "To handle network requests", "To encrypt data"],
    "options_hi": ["To create child processes to handle load", "To manage file system", "To handle network requests", "To encrypt data"],
    "answer_en": "To create child processes to handle load",
    "answer_hi": "To create child processes to handle load",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which event is emitted when an error occurs on a stream?",
    "question_hi": "स्ट्रीम पर त्रुटि होने पर कौन सा इवेंट एमिट होता है?",
    "options_en": ["error", "fail", "close", "end"],
    "options_hi": ["error", "fail", "close", "end"],
    "answer_en": "error",
    "answer_hi": "error",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to stop the Node.js process programmatically?",
    "question_hi": "Node.js प्रक्रिया को प्रोग्रामेटिकली रोकने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["process.exit()", "process.stop()", "process.end()", "process.quit()"],
    "options_hi": ["process.exit()", "process.stop()", "process.end()", "process.quit()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What type of module system is used by default in Node.js?",
    "question_hi": "Node.js में डिफ़ॉल्ट रूप से किस प्रकार का मॉड्यूल सिस्टम उपयोग होता है?",
    "options_en": ["CommonJS", "ES Modules", "AMD", "UMD"],
    "options_hi": ["CommonJS", "ES Modules", "AMD", "UMD"],
    "answer_en": "CommonJS",
    "answer_hi": "CommonJS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which method in Node.js streams can be used to pipe data from one stream to another?",
    "question_hi": "Node.js streams में डेटा एक स्ट्रीम से दूसरी स्ट्रीम में भेजने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["pipe()", "connect()", "link()", "transfer()"],
    "options_hi": ["pipe()", "connect()", "link()", "transfer()"],
    "answer_en": "pipe()",
    "answer_hi": "pipe()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method is used to get current working directory in Node.js?",
    "question_hi": "Node.js में वर्तमान कार्यशील निर्देशिका प्राप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["process.cwd()", "process.dir()", "process.currentDir()", "process.workDir()"],
    "options_hi": ["process.cwd()", "process.dir()", "process.currentDir()", "process.workDir()"],
    "answer_en": "process.cwd()",
    "answer_hi": "process.cwd()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "How do you handle exceptions in asynchronous code in Node.js?",
    "question_hi": "Node.js में असिंक्रोनस कोड में एक्सेप्शन कैसे हैंडल करते हैं?",
    "options_en": ["Using try-catch inside async functions", "Using catch blocks only", "Using error events", "No way to handle exceptions"],
    "options_hi": ["Using try-catch inside async functions", "Using catch blocks only", "Using error events", "No way to handle exceptions"],
    "answer_en": "Using try-catch inside async functions",
    "answer_hi": "Using try-catch inside async functions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which property contains the command line arguments passed to a Node.js script?",
    "question_hi": "Node.js स्क्रिप्ट को पास किए गए कमांड लाइन आर्गुमेंट्स कौन सी प्रॉपर्टी में होते हैं?",
    "options_en": ["process.argv", "process.args", "argv.process", "commandLine.args"],
    "options_hi": ["process.argv", "process.args", "argv.process", "commandLine.args"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does 'npm start' command do?",
    "question_hi": "'npm start' कमांड क्या करता है?",
    "options_en": ["Runs the start script defined in package.json", "Installs dependencies", "Runs all tests", "Builds the project"],
    "options_hi": ["Runs the start script defined in package.json", "Installs dependencies", "Runs all tests", "Builds the project"],
    "answer_en": "Runs the start script defined in package.json",
    "answer_hi": "Runs the start script defined in package.json",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method is used to read data from a readable stream in Node.js?",
    "question_hi": "Node.js में readable stream से डेटा पढ़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["stream.read()", "stream.get()", "stream.fetch()", "stream.consume()"],
    "options_hi": ["stream.read()", "stream.get()", "stream.fetch()", "stream.consume()"],
    "answer_en": "stream.read()",
    "answer_hi": "stream.read()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method in Express.js is used to define a route that handles all HTTP methods?",
    "question_hi": "Express.js में कौन सी विधि सभी HTTP मेथड्स को हैंडल करने वाले रूट को परिभाषित करती है?",
    "options_en": ["app.all()", "app.use()", "app.route()", "app.handle()"],
    "options_hi": ["app.all()", "app.use()", "app.route()", "app.handle()"],
    "answer_en": "app.all()",
    "answer_hi": "app.all()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which module is used to compress HTTP responses in Node.js?",
    "question_hi": "Node.js में HTTP प्रतिक्रियाओं को कम्प्रेस करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["zlib", "compress", "gzip", "http-compress"],
    "options_hi": ["zlib", "compress", "gzip", "http-compress"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "How can you make a function return a promise in Node.js?",
    "question_hi": "Node.js में किसी फ़ंक्शन को प्रॉमिस रिटर्न करने के लिए कैसे बनाते हैं?",
    "options_en": ["Wrap it in new Promise()", "Use async keyword only", "Use callback", "Return undefined"],
    "options_hi": ["Wrap it in new Promise()", "Use async keyword only", "Use callback", "Return undefined"],
    "answer_en": "Wrap it in new Promise()",
    "answer_hi": "Wrap it in new Promise()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method is used to stop listening on a port in an HTTP server?",
    "question_hi": "HTTP सर्वर में पोर्ट पर सुनना बंद करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["server.close()", "server.stop()", "server.end()", "server.shutdown()"],
    "options_hi": ["server.close()", "server.stop()", "server.end()", "server.shutdown()"],
    "answer_en": "server.close()",
    "answer_hi": "server.close()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the role of the 'package-lock.json' file?",
    "question_hi": "'package-lock.json' फ़ाइल की क्या भूमिका होती है?",
    "options_en": ["Locks the versions of installed packages", "Contains package scripts", "Lists dependencies without versions", "Defines project metadata"],
    "options_hi": ["Locks the versions of installed packages", "Contains package scripts", "Lists dependencies without versions", "Defines project metadata"],
    "answer_en": "Locks the versions of installed packages",
    "answer_hi": "Locks the versions of installed packages",
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