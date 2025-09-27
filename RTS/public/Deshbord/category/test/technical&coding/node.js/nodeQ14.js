const questions=[
  {
    "num": 1,
    "question_en": "Which of the following is a built-in module in Node.js?",
    "question_hi": "निम्नलिखित में से कौन सा Node.js में एक अंतर्निहित मॉड्यूल है?",
    "options_en": ["fs", "express", "mongoose", "cors"],
    "options_hi": ["fs", "express", "mongoose", "cors"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which function is used to include modules in Node.js?",
    "question_hi": "Node.js में मॉड्यूल्स को शामिल करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["require()", "import()", "include()", "use()"],
    "options_hi": ["require()", "import()", "include()", "use()"],
    "answer_en": "require()",
    "answer_hi": "require()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of the following is used to handle HTTP requests in Node.js?",
    "question_hi": "Node.js में HTTP अनुरोधों को संभालने के लिए निम्नलिखित में से कौन सा उपयोग होता है?",
    "options_en": ["http module", "fs module", "url module", "path module"],
    "options_hi": ["http मॉड्यूल", "fs मॉड्यूल", "url मॉड्यूल", "path मॉड्यूल"],
    "answer_en": "http module",
    "answer_hi": "http मॉड्यूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which method is used to create a new HTTP server in Node.js?",
    "question_hi": "Node.js में नया HTTP सर्वर बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["http.createServer()", "http.newServer()", "http.server()", "http.create()"],
    "options_hi": ["http.createServer()", "http.newServer()", "http.server()", "http.create()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which module is used to handle file operations in Node.js?",
    "question_hi": "Node.js में फाइल ऑपरेशन्स को संभालने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["fs", "path", "url", "querystring"],
    "options_hi": ["fs", "path", "url", "querystring"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which method is used to read a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल को असिंक्रोनसली पढ़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.readFile()", "fs.read()", "fs.open()", "fs.createReadStream()"],
    "options_hi": ["fs.readFile()", "fs.read()", "fs.open()", "fs.createReadStream()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which method is used to write data to a file in Node.js?",
    "question_hi": "Node.js में फाइल में डेटा लिखने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.writeFile()", "fs.write()", "fs.appendFile()", "fs.createWriteStream()"],
    "options_hi": ["fs.writeFile()", "fs.write()", "fs.appendFile()", "fs.createWriteStream()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used to delete a file in Node.js?",
    "question_hi": "Node.js में फाइल को डिलीट करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.removeFile()"],
    "options_hi": ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.removeFile()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method is used to rename a file in Node.js?",
    "question_hi": "Node.js में फाइल का नाम बदलने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.rename()", "fs.renameFile()", "fs.changeName()", "fs.move()"],
    "options_hi": ["fs.rename()", "fs.renameFile()", "fs.changeName()", "fs.move()"],
    "answer_en": "fs.rename()",
    "answer_hi": "fs.rename()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which method is used to check if a file exists in Node.js?",
    "question_hi": "Node.js में यह जांचने के लिए कौन सी विधि उपयोग होती है कि फाइल मौजूद है?",
    "options_en": ["fs.existsSync()", "fs.exists()", "fs.fileExists()", "fs.isFile()"],
    "options_hi": ["fs.existsSync()", "fs.exists()", "fs.fileExists()", "fs.isFile()"],
    "answer_en": "fs.existsSync()",
    "answer_hi": "fs.existsSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method is used to get the file status in Node.js?",
    "question_hi": "Node.js में फाइल की स्थिति प्राप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.stat()", "fs.status()", "fs.info()", "fs.fileInfo()"],
    "options_hi": ["fs.stat()", "fs.status()", "fs.info()", "fs.fileInfo()"],
    "answer_en": "fs.stat()",
    "answer_hi": "fs.stat()",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 12,
    "question_en": "Which module is used to handle HTTP requests in Node.js?",
    "question_hi": "Node.js में HTTP अनुरोधों को संभालने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["http", "fs", "url", "path"],
    "options_hi": ["http", "fs", "url", "path"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method is used to create a new HTTP server in Node.js?",
    "question_hi": "Node.js में नया HTTP सर्वर बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["http.createServer()", "http.newServer()", "http.server()", "http.create()"],
    "options_hi": ["http.createServer()", "http.newServer()", "http.server()", "http.create()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method is used to parse a JSON string into a JavaScript object?",
    "question_hi": "JavaScript ऑब्जेक्ट में JSON स्ट्रिंग को पार्स करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.decode()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.decode()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method is used to convert a JavaScript object into a JSON string?",
    "question_hi": "JavaScript ऑब्जेक्ट को JSON स्ट्रिंग में बदलने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.encode()"],
    "options_hi": ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.encode()"],
    "answer_en": "JSON.stringify()",
    "answer_hi": "JSON.stringify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to check if a file exists in Node.js?",
    "question_hi": "Node.js में यह जांचने के लिए कौन सी विधि उपयोग होती है कि फाइल मौजूद है?",
    "options_en": ["fs.existsSync()", "fs.exists()", "fs.fileExists()", "fs.isFile()"],
    "options_hi": ["fs.existsSync()", "fs.exists()", "fs.fileExists()", "fs.isFile()"],
    "answer_en": "fs.existsSync()",
    "answer_hi": "fs.existsSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method is used to read a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल को असिंक्रोनसली पढ़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.readFile()", "fs.read()", "fs.open()", "fs.createReadStream()"],
    "options_hi": ["fs.readFile()", "fs.read()", "fs.open()", "fs.createReadStream()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method is used to write data to a file in Node.js?",
    "question_hi": "Node.js में फाइल में डेटा लिखने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.writeFile()", "fs.write()", "fs.appendFile()", "fs.createWriteStream()"],
    "options_hi": ["fs.writeFile()", "fs.write()", "fs.appendFile()", "fs.createWriteStream()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method is used to delete a file in Node.js?",
    "question_hi": "Node.js में फाइल को डिलीट करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.removeFile()"],
    "options_hi": ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.removeFile()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method is used to rename a file in Node.js?",
    "question_hi": "Node.js में फाइल का नाम बदलने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.rename()", "fs.renameFile()", "fs.changeName()", "fs.move()"],
    "options_hi": ["fs.rename()", "fs.renameFile()", "fs.changeName()", "fs.move()"],
    "answer_en": "fs.rename()",
    "answer_hi": "fs.rename()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method is used to get the file status in Node.js?",
    "question_hi": "Node.js में फाइल की स्थिति प्राप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.stat()", "fs.status()", "fs.info()", "fs.fileInfo()"],
    "options_hi": ["fs.stat()", "fs.status()", "fs.info()", "fs.fileInfo()"],
    "answer_en": "fs.stat()",
    "answer_hi": "fs.stat()",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 22,
    "question_en": "Which method is used to read the contents of a directory in Node.js?",
    "question_hi": "Node.js में डायरेक्टरी की सामग्री पढ़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.readdir()", "fs.readDir()", "fs.listDir()", "fs.getDir()"],
    "options_hi": ["fs.readdir()", "fs.readDir()", "fs.listDir()", "fs.getDir()"],
    "answer_en": "fs.readdir()",
    "answer_hi": "fs.readdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which event is emitted when a stream has no more data to read?",
    "question_hi": "कौन सा इवेंट तब भेजा जाता है जब स्ट्रीम में पढ़ने के लिए और डेटा नहीं बचता?",
    "options_en": ["end", "close", "finish", "data"],
    "options_hi": ["end", "close", "finish", "data"],
    "answer_en": "end",
    "answer_hi": "end",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which module provides utilities for working with file and directory paths?",
    "question_hi": "फाइल और डायरेक्टरी पाथ के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["path", "fs", "os", "url"],
    "options_hi": ["path", "fs", "os", "url"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which module is used to create and manage child processes in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेस बनाने और प्रबंधित करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["child_process", "cluster", "process", "os"],
    "options_hi": ["child_process", "cluster", "process", "os"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method is used to execute a shell command asynchronously in Node.js?",
    "question_hi": "Node.js में शेल कमांड को असिंक्रोनसली चलाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["child_process.exec()", "child_process.spawn()", "child_process.fork()", "process.exec()"],
    "options_hi": ["child_process.exec()", "child_process.spawn()", "child_process.fork()", "process.exec()"],
    "answer_en": "child_process.exec()",
    "answer_hi": "child_process.exec()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which event is emitted when an uncaught exception occurs in Node.js?",
    "question_hi": "Node.js में जब अनकैच्ड एक्सेप्शन होता है तो कौन सा इवेंट जारी होता है?",
    "options_en": ["uncaughtException", "error", "exception", "uncaughtError"],
    "options_hi": ["uncaughtException", "error", "exception", "uncaughtError"],
    "answer_en": "uncaughtException",
    "answer_hi": "uncaughtException",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which module is used for encryption and decryption in Node.js?",
    "question_hi": "Node.js में एन्क्रिप्शन और डिक्रिप्शन के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["crypto", "tls", "https", "zlib"],
    "options_hi": ["crypto", "tls", "https", "zlib"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method is used to compress data using gzip in Node.js?",
    "question_hi": "Node.js में gzip का उपयोग करके डेटा को कम्प्रेस करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["zlib.gzip()", "zlib.compress()", "zlib.deflate()", "zlib.compressSync()"],
    "options_hi": ["zlib.gzip()", "zlib.compress()", "zlib.deflate()", "zlib.compressSync()"],
    "answer_en": "zlib.gzip()",
    "answer_hi": "zlib.gzip()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which method is used to get environment variables in Node.js?",
    "question_hi": "Node.js में एन्वायरनमेंट वेरिएबल प्राप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["process.env", "process.getEnv()", "process.environment", "process.variables"],
    "options_hi": ["process.env", "process.getEnv()", "process.environment", "process.variables"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
 
  {
    "num": 31,
    "question_en": "Which function is used to schedule a callback after a specified delay in Node.js?",
    "question_hi": "Node.js में निर्दिष्ट विलंब के बाद एक कॉलबैक शेड्यूल करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which function is used to repeatedly execute a callback at fixed intervals in Node.js?",
    "question_hi": "Node.js में निश्चित अंतराल पर कॉलबैक को बार-बार निष्पादित करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["setInterval()", "setTimeout()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setInterval()", "setTimeout()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method is used to stop a timer set by setTimeout() or setInterval()?",
    "question_hi": "Node.js में setTimeout() या setInterval() द्वारा सेट किए गए टाइमर को रोकने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["clearTimeout()", "clearInterval()", "stopTimer()", "cancelTimer()"],
    "options_hi": ["clearTimeout()", "clearInterval()", "stopTimer()", "cancelTimer()"],
    "answer_en": "clearTimeout() or clearInterval()",
    "answer_hi": "clearTimeout() या clearInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the purpose of process.nextTick() in Node.js?",
    "question_hi": "Node.js में process.nextTick() का उद्देश्य क्या है?",
    "options_en": [
      "To schedule a callback to be invoked in the next iteration of the event loop",
      "To execute a callback immediately",
      "To delay execution indefinitely",
      "To schedule a callback in the setTimeout queue"
    ],
    "options_hi": [
      "इवेंट लूप के अगले चक्र में कॉलबैक को निष्पादित करने के लिए शेड्यूल करना",
      "तुरंत कॉलबैक निष्पादित करना",
      "असीमित विलंब के लिए निष्पादन को स्थगित करना",
      "setTimeout कतार में कॉलबैक शेड्यूल करना"
    ],
    "answer_en": "To schedule a callback to be invoked in the next iteration of the event loop",
    "answer_hi": "इवेंट लूप के अगले चक्र में कॉलबैक को निष्पादित करने के लिए शेड्यूल करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which Node.js core module is used for creating readable and writable streams?",
    "question_hi": "पढ़ने योग्य और लिखने योग्य स्ट्रीम बनाने के लिए Node.js का कौन सा कोर मॉड्यूल उपयोग होता है?",
    "options_en": ["stream", "fs", "http", "net"],
    "options_hi": ["stream", "fs", "http", "net"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which method is used to pipe data from a readable stream to a writable stream?",
    "question_hi": "Node.js में पढ़ने योग्य स्ट्रीम से लिखने योग्य स्ट्रीम में डेटा भेजने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["pipe()", "write()", "send()", "transfer()"],
    "options_hi": ["pipe()", "write()", "send()", "transfer()"],
    "answer_en": "pipe()",
    "answer_hi": "pipe()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does the 'cluster' module in Node.js provide?",
    "question_hi": "Node.js में 'cluster' मॉड्यूल क्या प्रदान करता है?",
    "options_en": [
      "A way to create child processes that share server ports",
      "A tool for file system operations",
      "A module for cryptography",
      "A debugging utility"
    ],
    "options_hi": [
      "ऐसे चाइल्ड प्रोसेस बनाने का तरीका जो सर्वर पोर्ट साझा करते हैं",
      "फाइल सिस्टम ऑपरेशन्स के लिए टूल",
      "क्रिप्टोग्राफी के लिए मॉड्यूल",
      "डिबगिंग यूटिलिटी"
    ],
    "answer_en": "A way to create child processes that share server ports",
    "answer_hi": "ऐसे चाइल्ड प्रोसेस बनाने का तरीका जो सर्वर पोर्ट साझा करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method in the 'cluster' module is used to create a new worker process?",
    "question_hi": "'cluster' मॉड्यूल में नया वर्कर प्रोसेस बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["cluster.fork()", "cluster.spawn()", "cluster.create()", "cluster.start()"],
    "options_hi": ["cluster.fork()", "cluster.spawn()", "cluster.create()", "cluster.start()"],
    "answer_en": "cluster.fork()",
    "answer_hi": "cluster.fork()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which object provides information about the current Node.js process?",
    "question_hi": "वर्तमान Node.js प्रक्रिया के बारे में जानकारी कौन सा ऑब्जेक्ट प्रदान करता है?",
    "options_en": ["process", "os", "cluster", "global"],
    "options_hi": ["process", "os", "cluster", "global"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which property of 'process' provides the command-line arguments passed to the script?",
    "question_hi": "'process' की कौन सी प्रॉपर्टी स्क्रिप्ट को पास किए गए कमांड-लाइन आर्गुमेंट्स प्रदान करती है?",
    "options_en": ["process.argv", "process.args", "process.params", "process.commands"],
    "options_hi": ["process.argv", "process.args", "process.params", "process.commands"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method is used to exit a Node.js process with a status code?",
    "question_hi": "Node.js प्रक्रिया को एक स्टेटस कोड के साथ बंद करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["process.exit()", "process.stop()", "process.kill()", "process.end()"],
    "options_hi": ["process.exit()", "process.stop()", "process.kill()", "process.end()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which event is emitted when the process is about to exit?",
    "question_hi": "जब प्रक्रिया समाप्त होने वाली होती है तो कौन सा इवेंट जारी होता है?",
    "options_en": ["exit", "close", "end", "stop"],
    "options_hi": ["exit", "close", "end", "stop"],
    "answer_en": "exit",
    "answer_hi": "exit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which Node.js module provides operating system-related utility methods?",
    "question_hi": "Node.js में ऑपरेटिंग सिस्टम से संबंधित उपयोगिताएँ कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["os", "fs", "net", "path"],
    "options_hi": ["os", "fs", "net", "path"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 44,
    "question_en": "Which method returns the total system memory in bytes in Node.js?",
    "question_hi": "Node.js में कुल सिस्टम मेमोरी बाइट्स में प्राप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["os.totalmem()", "os.freemem()", "os.memory()", "os.systemmem()"],
    "options_hi": ["os.totalmem()", "os.freemem()", "os.memory()", "os.systemmem()"],
    "answer_en": "os.totalmem()",
    "answer_hi": "os.totalmem()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method returns the amount of free system memory in bytes?",
    "question_hi": "Node.js में मुफ्त सिस्टम मेमोरी बाइट्स में प्राप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["os.freemem()", "os.totalmem()", "os.free()", "os.memoryFree()"],
    "options_hi": ["os.freemem()", "os.totalmem()", "os.free()", "os.memoryFree()"],
    "answer_en": "os.freemem()",
    "answer_hi": "os.freemem()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which module is used to create TCP servers and clients in Node.js?",
    "question_hi": "Node.js में TCP सर्वर और क्लाइंट बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["net", "http", "tls", "socket"],
    "options_hi": ["net", "http", "tls", "socket"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method is used to create a new TCP server in Node.js?",
    "question_hi": "Node.js में नया TCP सर्वर बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["net.createServer()", "net.newServer()", "net.startServer()", "net.listen()"],
    "options_hi": ["net.createServer()", "net.newServer()", "net.startServer()", "net.listen()"],
    "answer_en": "net.createServer()",
    "answer_hi": "net.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method is used to start the TCP server and listen on a specific port?",
    "question_hi": "TCP सर्वर को शुरू करने और एक विशेष पोर्ट पर सुनने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["server.listen()", "server.start()", "server.open()", "server.create()"],
    "options_hi": ["server.listen()", "server.start()", "server.open()", "server.create()"],
    "answer_en": "server.listen()",
    "answer_hi": "server.listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which module provides support for handling URLs in Node.js?",
    "question_hi": "Node.js में URLs को हैंडल करने के लिए कौन सा मॉड्यूल समर्थन प्रदान करता है?",
    "options_en": ["url", "path", "http", "querystring"],
    "options_hi": ["url", "path", "http", "querystring"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which method parses a URL string into an object in Node.js?",
    "question_hi": "Node.js में URL स्ट्रिंग को ऑब्जेक्ट में पार्स करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["url.parse()", "url.format()", "url.resolve()", "url.build()"],
    "options_hi": ["url.parse()", "url.format()", "url.resolve()", "url.build()"],
    "answer_en": "url.parse()",
    "answer_hi": "url.parse()",
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