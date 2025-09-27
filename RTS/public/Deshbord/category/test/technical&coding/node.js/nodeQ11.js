const questions=[
  {
    "num": 1,
    "question_en": "Which method is used to read a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल को असिंक्रोनसली पढ़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which object is used to handle command line arguments in Node.js?",
    "question_hi": "Node.js में कमांड लाइन आर्गुमेंट्स को हैंडल करने के लिए कौन सा ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["process.argv", "process.args", "process.cmd", "process.params"],
    "options_hi": ["process.argv", "process.args", "process.cmd", "process.params"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "How do you import a built-in module in Node.js?",
    "question_hi": "Node.js में बिल्ट-इन मॉड्यूल को कैसे इम्पोर्ट करते हैं?",
    "options_en": ["require('module_name')", "import('module_name')", "include('module_name')", "use('module_name')"],
    "options_hi": ["require('module_name')", "import('module_name')", "include('module_name')", "use('module_name')"],
    "answer_en": "require('module_name')",
    "answer_hi": "require('module_name')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which method in the 'fs' module is used to write to a file synchronously?",
    "question_hi": "'fs' मॉड्यूल में फाइल को सिंक्रोनसली लिखने के लिए कौन सी विधि है?",
    "options_en": ["fs.writeFileSync()", "fs.writeFile()", "fs.appendFileSync()", "fs.appendFile()"],
    "options_hi": ["fs.writeFileSync()", "fs.writeFile()", "fs.appendFileSync()", "fs.appendFile()"],
    "answer_en": "fs.writeFileSync()",
    "answer_hi": "fs.writeFileSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Node.js module provides utilities for debugging?",
    "question_hi": "डिबगिंग के लिए Node.js में कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["util", "debug", "inspect", "logger"],
    "options_hi": ["util", "debug", "inspect", "logger"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following is a core module for networking in Node.js?",
    "question_hi": "Node.js में नेटवर्किंग के लिए कौन सा कोर मॉड्यूल है?",
    "options_en": ["net", "network", "socket", "connection"],
    "options_hi": ["net", "network", "socket", "connection"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does the 'require.cache' object store?",
    "question_hi": "'require.cache' ऑब्जेक्ट क्या स्टोर करता है?",
    "options_en": ["Cached modules", "Cached functions", "Cached variables", "Cached scripts"],
    "options_hi": ["Cached modules", "Cached functions", "Cached variables", "Cached scripts"],
    "answer_en": "Cached modules",
    "answer_hi": "Cached modules",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method returns the version of Node.js currently running?",
    "question_hi": "Node.js का वर्तमान संस्करण कौन सी विधि से पता चलता है?",
    "options_en": ["process.version", "process.versions", "node.version", "node.getVersion()"],
    "options_hi": ["process.version", "process.versions", "node.version", "node.getVersion()"],
    "answer_en": "process.version",
    "answer_hi": "process.version",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of the following is the default scope for variables declared with var in Node.js modules?",
    "question_hi": "Node.js मॉड्यूल में var से घोषित वेरिएबल का डिफ़ॉल्ट स्कोप क्या होता है?",
    "options_en": ["Function scope", "Global scope", "Block scope", "Module scope"],
    "options_hi": ["Function scope", "Global scope", "Block scope", "Module scope"],
    "answer_en": "Function scope",
    "answer_hi": "Function scope",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which event loop phase handles timers scheduled by setTimeout() and setInterval()?",
    "question_hi": "कौन सा इवेंट लूप फेज़ setTimeout() और setInterval() द्वारा शेड्यूल किए गए टाइमर को हैंडल करता है?",
    "options_en": ["Timers phase", "Poll phase", "Check phase", "Close callbacks phase"],
    "options_hi": ["Timers phase", "Poll phase", "Check phase", "Close callbacks phase"],
    "answer_en": "Timers phase",
    "answer_hi": "Timers phase",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What does the process.env object contain in Node.js?",
    "question_hi": "Node.js में process.env ऑब्जेक्ट में क्या होता है?",
    "options_en": ["Environment variables", "Process variables", "Node settings", "System variables"],
    "options_hi": ["Environment variables", "Process variables", "Node settings", "System variables"],
    "answer_en": "Environment variables",
    "answer_hi": "Environment variables",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to stop a running timer created by setTimeout()?",
    "question_hi": "setTimeout() द्वारा बनाए गए चल रहे टाइमर को रोकने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["clearTimeout()", "clearInterval()", "stopTimeout()", "cancelTimeout()"],
    "options_hi": ["clearTimeout()", "clearInterval()", "stopTimeout()", "cancelTimeout()"],
    "answer_en": "clearTimeout()",
    "answer_hi": "clearTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "How can you create a child process in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेस कैसे बनाते हैं?",
    "options_en": ["Using child_process module", "Using cluster module", "Using process.fork()", "Using process.spawn()"],
    "options_hi": ["Using child_process module", "Using cluster module", "Using process.fork()", "Using process.spawn()"],
    "answer_en": "Using child_process module",
    "answer_hi": "Using child_process module",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the default file encoding used by fs.readFile() if not specified?",
    "question_hi": "यदि निर्दिष्ट न हो तो fs.readFile() द्वारा उपयोग किया जाने वाला डिफ़ॉल्ट फाइल एनकोडिंग क्या है?",
    "options_en": ["Buffer (binary)", "utf-8", "ascii", "base64"],
    "options_hi": ["Buffer (binary)", "utf-8", "ascii", "base64"],
    "answer_en": "Buffer (binary)",
    "answer_hi": "Buffer (binary)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which core module provides utilities to work with file and directory paths?",
    "question_hi": "फाइल और डायरेक्टरी पाथ्स के साथ काम करने के लिए कौन सा कोर मॉड्यूल है?",
    "options_en": ["path", "fs", "url", "os"],
    "options_hi": ["path", "fs", "url", "os"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which of the following is used to create a TCP server in Node.js?",
    "question_hi": "Node.js में TCP सर्वर बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["net.createServer()", "http.createServer()", "tcp.createServer()", "server.create()"],
    "options_hi": ["net.createServer()", "http.createServer()", "tcp.createServer()", "server.create()"],
    "answer_en": "net.createServer()",
    "answer_hi": "net.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which of the following is true about process.nextTick()?",
    "question_hi": "process.nextTick() के बारे में कौन सा कथन सही है?",
    "options_en": ["It defers execution until after the current operation", "It executes immediately", "It schedules execution after setTimeout()", "It schedules execution after Promises"],
    "options_hi": ["It defers execution until after the current operation", "It executes immediately", "It schedules execution after setTimeout()", "It schedules execution after Promises"],
    "answer_en": "It defers execution until after the current operation",
    "answer_hi": "It defers execution until after the current operation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which of the following is NOT a valid event on a readable stream?",
    "question_hi": "नीचे में से कौन सा readable stream पर वैध इवेंट नहीं है?",
    "options_en": ["finish", "data", "end", "error"],
    "options_hi": ["finish", "data", "end", "error"],
    "answer_en": "finish",
    "answer_hi": "finish",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which npm command updates all packages to the latest version based on semver ranges?",
    "question_hi": "semver रेंज के आधार पर सभी पैकेज को नवीनतम संस्करण में अपडेट करने के लिए कौन सा npm कमांड है?",
    "options_en": ["npm update", "npm upgrade", "npm refresh", "npm install --latest"],
    "options_hi": ["npm update", "npm upgrade", "npm refresh", "npm install --latest"],
    "answer_en": "npm update",
    "answer_hi": "npm update",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does the 'eventEmitter.emit()' method do?",
    "question_hi": "'eventEmitter.emit()' विधि क्या करती है?",
    "options_en": ["Triggers an event", "Creates an event listener", "Removes an event listener", "Stops an event"],
    "options_hi": ["Triggers an event", "Creates an event listener", "Removes an event listener", "Stops an event"],
    "answer_en": "Triggers an event",
    "answer_hi": "Triggers an event",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which module is used to create an HTTPS server in Node.js?",
    "question_hi": "Node.js में HTTPS सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["https", "http", "tls", "net"],
    "options_hi": ["https", "http", "tls", "net"],
    "answer_en": "https",
    "answer_hi": "https",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 22,
    "question_en": "Which method is used to read environment variables in Node.js?",
    "question_hi": "Node.js में environment variables पढ़ने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["process.env", "env.get", "system.env", "readEnv"],
    "options_hi": ["process.env", "env.get", "system.env", "readEnv"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which module is used for file system operations in Node.js?",
    "question_hi": "Node.js में file system operations के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "file", "path", "os"],
    "options_hi": ["fs", "file", "path", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method is used to create a new directory in Node.js?",
    "question_hi": "Node.js में नया directory बनाने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.dir()"],
    "options_hi": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.dir()"],
    "answer_en": "fs.mkdir()",
    "answer_hi": "fs.mkdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function is used to execute a callback after a delay in Node.js?",
    "question_hi": "Node.js में delay के बाद callback execute करने के लिए कौन सा function उपयोग होता है?",
    "options_en": ["setTimeout()", "setInterval()", "delay()", "wait()"],
    "options_hi": ["setTimeout()", "setInterval()", "delay()", "wait()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which module is used to handle operating system-related operations in Node.js?",
    "question_hi": "Node.js में operating system से संबंधित operations के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["os", "system", "process", "fs"],
    "options_hi": ["os", "system", "process", "fs"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method is used to parse JSON data in Node.js?",
    "question_hi": "Node.js में JSON data को parse करने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["JSON.parse()", "JSON.decode()", "parseJSON()", "json.parse()"],
    "options_hi": ["JSON.parse()", "JSON.decode()", "parseJSON()", "json.parse()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which module is used to create a web server in Node.js?",
    "question_hi": "Node.js में web server बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["http", "https", "net", "web"],
    "options_hi": ["http", "https", "net", "web"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method is used to read a file asynchronously in Node.js?",
    "question_hi": "Node.js में file को asynchronous तरीके से पढ़ने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.readAsync()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.read()", "fs.readAsync()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which method is used to handle uncaught exceptions in Node.js?",
    "question_hi": "Node.js में uncaught exceptions को handle करने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["process.on('uncaughtException')", "try-catch", "error.handle()", "exception.catch()"],
    "options_hi": ["process.on('uncaughtException')", "try-catch", "error.handle()", "exception.catch()"],
    "answer_en": "process.on('uncaughtException')",
    "answer_hi": "process.on('uncaughtException')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the purpose of the `require()` function in Node.js?",
    "question_hi": "Node.js में `require()` function का उद्देश्य क्या है?",
    "options_en": ["To import modules", "To export modules", "To handle errors", "To create servers"],
    "options_hi": ["Modules को import करने के लिए", "Modules को export करने के लिए", "Errors को handle करने के लिए", "Servers बनाने के लिए"],
    "answer_en": "To import modules",
    "answer_hi": "Modules को import करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which module is used to handle file paths in Node.js?",
    "question_hi": "Node.js में file paths को handle करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["path", "fs", "os", "url"],
    "options_hi": ["path", "fs", "os", "url"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method is used to write data to a file asynchronously in Node.js?",
    "question_hi": "Node.js में file में data को asynchronous तरीके से लिखने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["fs.writeFile()", "fs.writeFileSync()", "fs.appendFile()", "fs.write()"],
    "options_hi": ["fs.writeFile()", "fs.writeFileSync()", "fs.appendFile()", "fs.write()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to check if a file exists in Node.js?",
    "question_hi": "Node.js में file के existence को check करने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["fs.existsSync()", "fs.checkFile()", "fs.fileExists()", "fs.exists()"],
    "options_hi": ["fs.existsSync()", "fs.checkFile()", "fs.fileExists()", "fs.exists()"],
    "answer_en": "fs.existsSync()",
    "answer_hi": "fs.existsSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method is used to delete a file in Node.js?",
    "question_hi": "Node.js में file को delete करने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.rm()"],
    "options_hi": ["fs.unlink()", "fs.delete()", "fs.remove()", "fs.rm()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which module is used to create child processes in Node.js?",
    "question_hi": "Node.js में child processes बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["child_process", "process", "worker_threads", "cluster"],
    "options_hi": ["child_process", "process", "worker_threads", "cluster"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method is used to spawn a new process in Node.js?",
    "question_hi": "Node.js में नया process spawn करने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["child_process.spawn()", "child_process.fork()", "child_process.exec()", "child_process.run()"],
    "options_hi": ["child_process.spawn()", "child_process.fork()", "child_process.exec()", "child_process.run()"],
    "answer_en": "child_process.spawn()",
    "answer_hi": "child_process.spawn()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to execute a shell command in Node.js?",
    "question_hi": "Node.js में shell command execute करने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["child_process.exec()", "child_process.spawn()", "child_process.run()", "child_process.cmd()"],
    "options_hi": ["child_process.exec()", "child_process.spawn()", "child_process.run()", "child_process.cmd()"],
    "answer_en": "child_process.exec()",
    "answer_hi": "child_process.exec()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which module is used to handle streams in Node.js?",
    "question_hi": "Node.js में streams को handle करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["stream", "fs", "buffer", "net"],
    "options_hi": ["stream", "fs", "buffer", "net"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which method is used to create a readable stream in Node.js?",
    "question_hi": "Node.js में readable stream बनाने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["fs.createReadStream()", "fs.readStream()", "stream.createReadable()", "stream.read()"],
    "options_hi": ["fs.createReadStream()", "fs.readStream()", "stream.createReadable()", "stream.read()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method is used to create a writable stream in Node.js?",
    "question_hi": "Node.js में writable stream बनाने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["fs.createWriteStream()", "fs.writeStream()", "stream.createWritable()", "stream.write()"],
    "options_hi": ["fs.createWriteStream()", "fs.writeStream()", "stream.createWritable()", "stream.write()"],
    "answer_en": "fs.createWriteStream()",
    "answer_hi": "fs.createWriteStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which module is used to handle buffers in Node.js?",
    "question_hi": "Node.js में buffers को handle करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["buffer", "fs", "stream", "data"],
    "options_hi": ["buffer", "fs", "stream", "data"],
    "answer_en": "buffer",
    "answer_hi": "buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which method is used to create a new buffer in Node.js?",
    "question_hi": "Node.js में नया buffer बनाने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["Buffer.alloc()", "Buffer.new()", "Buffer.create()", "Buffer()"],
    "options_hi": ["Buffer.alloc()", "Buffer.new()", "Buffer.create()", "Buffer()"],
    "answer_en": "Buffer.alloc()",
    "answer_hi": "Buffer.alloc()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method is used to convert a buffer to a string in Node.js?",
    "question_hi": "Node.js में buffer को string में convert करने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["buffer.toString()", "buffer.toStr()", "buffer.string()", "buffer.decode()"],
    "options_hi": ["buffer.toString()", "buffer.toStr()", "buffer.string()", "buffer.decode()"],
    "answer_en": "buffer.toString()",
    "answer_hi": "buffer.toString()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which module is used to handle HTTP requests in Node.js?",
    "question_hi": "Node.js में HTTP requests को handle करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["http", "https", "net", "request"],
    "options_hi": ["http", "https", "net", "request"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to make an HTTP GET request in Node.js?",
    "question_hi": "Node.js में HTTP GET request करने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["http.get()", "http.request()", "http.fetch()", "http.call()"],
    "options_hi": ["http.get()", "http.request()", "http.fetch()", "http.call()"],
    "answer_en": "http.get()",
    "answer_hi": "http.get()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which module is used to handle URL parsing in Node.js?",
    "question_hi": "Node.js में URL parsing के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["url", "querystring", "path", "http"],
    "options_hi": ["url", "querystring", "path", "http"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method is used to parse a URL in Node.js?",
    "question_hi": "Node.js में URL को parse करने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["url.parse()", "url.decode()", "url.split()", "url.resolve()"],
    "options_hi": ["url.parse()", "url.decode()", "url.split()", "url.resolve()"],
    "answer_en": "url.parse()",
    "answer_hi": "url.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which module is used to handle query strings in Node.js?",
    "question_hi": "Node.js में query strings को handle करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["querystring", "url", "http", "fs"],
    "options_hi": ["querystring", "url", "http", "fs"],
    "answer_en": "querystring",
    "answer_hi": "querystring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method is used to parse a query string in Node.js?",
    "question_hi": "Node.js में query string को parse करने के लिए कौन सी method उपयोग होती है?",
    "options_en": ["querystring.parse()", "querystring.decode()", "querystring.split()", "querystring.resolve()"],
    "options_hi": ["querystring.parse()", "querystring.decode()", "querystring.split()", "querystring.resolve()"],
    "answer_en": "querystring.parse()",
    "answer_hi": "querystring.parse()",
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