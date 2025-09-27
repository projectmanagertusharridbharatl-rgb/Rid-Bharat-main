const questions=[
  {
    "num": 1,
    "question_en": "Which module is used to create an HTTP server in Node.js?",
    "question_hi": "Node.js में HTTP सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["http", "fs", "url", "net"],
    "options_hi": ["http", "fs", "url", "net"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to read a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल को असिंक्रोनसली पढ़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    "options_hi": ["fs.readFile()", "fs.readFileSync()", "fs.open()", "fs.read()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the 'require' function do in Node.js?",
    "question_hi": "Node.js में 'require' फंक्शन क्या करता है?",
    "options_en": ["Imports a module", "Exports a module", "Deletes a module", "Creates a new module"],
    "options_hi": ["मॉड्यूल को इम्पोर्ट करता है", "मॉड्यूल को एक्सपोर्ट करता है", "मॉड्यूल को डिलीट करता है", "नया मॉड्यूल बनाता है"],
    "answer_en": "Imports a module",
    "answer_hi": "मॉड्यूल को इम्पोर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of the following is a core module in Node.js?",
    "question_hi": "निम्न में से कौन सा Node.js का कोर मॉड्यूल है?",
    "options_en": ["http", "express", "mongoose", "angular"],
    "options_hi": ["http", "express", "mongoose", "angular"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the default package manager for Node.js?",
    "question_hi": "Node.js के लिए डिफ़ॉल्ट पैकेज मैनेजर कौन सा है?",
    "options_en": ["npm", "yarn", "bower", "gulp"],
    "options_hi": ["npm", "yarn", "bower", "gulp"],
    "answer_en": "npm",
    "answer_hi": "npm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which method is used to create a new directory in Node.js?",
    "question_hi": "Node.js में नई डायरेक्ट्री बनाने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.addDir()"],
    "options_hi": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.addDir()"],
    "answer_en": "fs.mkdir()",
    "answer_hi": "fs.mkdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which module is used to handle streams in Node.js?",
    "question_hi": "Node.js में streams को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["stream", "buffer", "http", "events"],
    "options_hi": ["stream", "buffer", "http", "events"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which method is used to append data to a file in Node.js?",
    "question_hi": "Node.js में फाइल में डाटा जोड़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.appendFile()", "fs.writeFile()", "fs.createWriteStream()", "fs.append()"],
    "options_hi": ["fs.appendFile()", "fs.writeFile()", "fs.createWriteStream()", "fs.append()"],
    "answer_en": "fs.appendFile()",
    "answer_hi": "fs.appendFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method is used to delete a file in Node.js?",
    "question_hi": "Node.js में फाइल डिलीट करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.erase()"],
    "options_hi": ["fs.unlink()", "fs.remove()", "fs.delete()", "fs.erase()"],
    "answer_en": "fs.unlink()",
    "answer_hi": "fs.unlink()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which module is used to handle events in Node.js?",
    "question_hi": "Node.js में इवेंट्स को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["events", "emit", "observer", "signals"],
    "options_hi": ["events", "emit", "observer", "signals"],
    "answer_en": "events",
    "answer_hi": "events",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method is used to emit an event in Node.js?",
    "question_hi": "Node.js में इवेंट को emit करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["emitter.emit()", "emitter.trigger()", "emitter.fire()", "emitter.dispatch()"],
    "options_hi": ["emitter.emit()", "emitter.trigger()", "emitter.fire()", "emitter.dispatch()"],
    "answer_en": "emitter.emit()",
    "answer_hi": "emitter.emit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to listen for an event in Node.js?",
    "question_hi": "Node.js में इवेंट सुनने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["emitter.on()", "emitter.addListener()", "emitter.listen()", "emitter.subscribe()"],
    "options_hi": ["emitter.on()", "emitter.addListener()", "emitter.listen()", "emitter.subscribe()"],
    "answer_en": "emitter.on()",
    "answer_hi": "emitter.on()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method is used to remove an event listener in Node.js?",
    "question_hi": "Node.js में इवेंट लिस्नर को हटाने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["emitter.removeListener()", "emitter.off()", "emitter.remove()", "emitter.unsubscribe()"],
    "options_hi": ["emitter.removeListener()", "emitter.off()", "emitter.remove()", "emitter.unsubscribe()"],
    "answer_en": "emitter.removeListener()",
    "answer_hi": "emitter.removeListener()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method is used to create a new HTTP server in Node.js?",
    "question_hi": "Node.js में नया HTTP सर्वर बनाने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["http.createServer()", "http.newServer()", "http.server()", "http.create()"],
    "options_hi": ["http.createServer()", "http.newServer()", "http.server()", "http.create()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method is used to listen for incoming requests in Node.js?",
    "question_hi": "Node.js में आने वाले रिक्वेस्ट सुनने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["server.listen()", "server.start()", "server.run()", "server.wait()"],
    "options_hi": ["server.listen()", "server.start()", "server.run()", "server.wait()"],
    "answer_en": "server.listen()",
    "answer_hi": "server.listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to send a response in Node.js HTTP server?",
    "question_hi": "Node.js HTTP सर्वर में रिस्पांस भेजने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["res.end()", "res.write()", "res.send()", "res.response()"],
    "options_hi": ["res.end()", "res.write()", "res.send()", "res.response()"],
    "answer_en": "res.end()",
    "answer_hi": "res.end()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which module is used to work with file and directory paths in Node.js?",
    "question_hi": "Node.js में फाइल और डायरेक्ट्री के पाथ के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["path", "fs", "url", "http"],
    "options_hi": ["path", "fs", "url", "http"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method is used to join path segments in Node.js?",
    "question_hi": "Node.js में पाथ सेगमेंट्स को जोड़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["path.join()", "path.concat()", "path.combine()", "path.add()"],
    "options_hi": ["path.join()", "path.concat()", "path.combine()", "path.add()"],
    "answer_en": "path.join()",
    "answer_hi": "path.join()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which of the following is true about Node.js?",
    "question_hi": "Node.js के बारे में निम्न में से कौन सा सही है?",
    "options_en": ["It is JavaScript runtime", "It is a programming language", "It is a database", "It is a web browser"],
    "options_hi": ["यह एक जावास्क्रिप्ट रनटाइम है", "यह एक प्रोग्रामिंग भाषा है", "यह एक डेटाबेस है", "यह एक वेब ब्राउज़र है"],
    "answer_en": "It is JavaScript runtime",
    "answer_hi": "यह एक जावास्क्रिप्ट रनटाइम है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which object in Node.js is used to interact with the file system?",
    "question_hi": "Node.js में फाइल सिस्टम से इंटरैक्ट करने के लिए कौन सा ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["fs", "http", "os", "net"],
    "options_hi": ["fs", "http", "os", "net"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method is used to synchronously read a file in Node.js?",
    "question_hi": "Node.js में फाइल को सिंक्रोनसली पढ़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.readFileSync()", "fs.readFile()", "fs.openSync()", "fs.read()"],
    "options_hi": ["fs.readFileSync()", "fs.readFile()", "fs.openSync()", "fs.read()"],
    "answer_en": "fs.readFileSync()",
    "answer_hi": "fs.readFileSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which of the following modules can be used for cryptography in Node.js?",
    "question_hi": "Node.js में क्रिप्टोग्राफी के लिए निम्न में से कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["crypto", "fs", "http", "url"],
    "options_hi": ["crypto", "fs", "http", "url"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which global variable gives the directory name of the current module in Node.js?",
    "question_hi": "Node.js में वर्तमान मॉड्यूल का डायरेक्ट्री नाम कौन सा ग्लोबल वेरिएबल देता है?",
    "options_en": ["__dirname", "__filename", "process.dir", "module.dir"],
    "options_hi": ["__dirname", "__filename", "process.dir", "module.dir"],
    "answer_en": "__dirname",
    "answer_hi": "__dirname",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which module is used to parse URL strings in Node.js?",
    "question_hi": "Node.js में URL स्ट्रिंग्स को पार्स करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["url", "querystring", "path", "fs"],
    "options_hi": ["url", "querystring", "path", "fs"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 25,
    "question_en": "Which method is used to encode data into a URL query string in Node.js?",
    "question_hi": "Node.js में डेटा को URL क्वेरी स्ट्रिंग में एनकोड करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["querystring.stringify()", "querystring.parse()", "url.encode()", "url.parse()"],
    "options_hi": ["querystring.stringify()", "querystring.parse()", "url.encode()", "url.parse()"],
    "answer_en": "querystring.stringify()",
    "answer_hi": "querystring.stringify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which object in Node.js provides information about the current process?",
    "question_hi": "Node.js में वर्तमान प्रोसेस के बारे में जानकारी कौन सा ऑब्जेक्ट देता है?",
    "options_en": ["process", "os", "global", "module"],
    "options_hi": ["process", "os", "global", "module"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method is used to exit a Node.js process?",
    "question_hi": "Node.js प्रोसेस को बंद करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["process.exit()", "process.stop()", "process.end()", "process.quit()"],
    "options_hi": ["process.exit()", "process.stop()", "process.end()", "process.quit()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to get environment variables in Node.js?",
    "question_hi": "Node.js में एन्वायरनमेंट वेरिएबल्स प्राप्त करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["process.env", "process.env()", "process.vars", "process.variables"],
    "options_hi": ["process.env", "process.env()", "process.vars", "process.variables"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method is used to schedule a callback to be invoked after the current event loop phase?",
    "question_hi": "Node.js में वर्तमान इवेंट लूप फेज के बाद कॉलबैक को शेड्यूल करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["setImmediate()", "setTimeout()", "setInterval()", "process.nextTick()"],
    "options_hi": ["setImmediate()", "setTimeout()", "setInterval()", "process.nextTick()"],
    "answer_en": "process.nextTick()",
    "answer_hi": "process.nextTick()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which of these is NOT a Node.js built-in module?",
    "question_hi": "निम्न में से कौन सा Node.js का बिल्ट-इन मॉड्यूल नहीं है?",
    "options_en": ["express", "fs", "http", "path"],
    "options_hi": ["express", "fs", "http", "path"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does the __filename variable in Node.js represent?",
    "question_hi": "Node.js में __filename वेरिएबल क्या दर्शाता है?",
    "options_en": ["Full path of the current file", "Directory name of the current module", "Name of the current function", "Node.js version"],
    "options_hi": ["वर्तमान फाइल का पूरा पाथ", "वर्तमान मॉड्यूल का डायरेक्ट्री नाम", "वर्तमान फंक्शन का नाम", "Node.js का वर्शन"],
    "answer_en": "Full path of the current file",
    "answer_hi": "वर्तमान फाइल का पूरा पाथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which method is used to convert a Buffer to a string in Node.js?",
    "question_hi": "Node.js में Buffer को स्ट्रिंग में बदलने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["buffer.toString()", "buffer.toBuffer()", "buffer.convert()", "buffer.encode()"],
    "options_hi": ["buffer.toString()", "buffer.toBuffer()", "buffer.convert()", "buffer.encode()"],
    "answer_en": "buffer.toString()",
    "answer_hi": "buffer.toString()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which module allows you to work with operating system-related utility methods and properties in Node.js?",
    "question_hi": "Node.js में ऑपरेटिंग सिस्टम से संबंधित उपयोगिताओं और प्रॉपर्टीज के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["os", "fs", "path", "net"],
    "options_hi": ["os", "fs", "path", "net"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which module is used to create TCP servers and clients in Node.js?",
    "question_hi": "Node.js में TCP सर्वर और क्लाइंट बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["net", "http", "fs", "tls"],
    "options_hi": ["net", "http", "fs", "tls"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method in Node.js is used to read data from a readable stream?",
    "question_hi": "Node.js में readable stream से डेटा पढ़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["stream.read()", "stream.write()", "stream.emit()", "stream.push()"],
    "options_hi": ["stream.read()", "stream.write()", "stream.emit()", "stream.push()"],
    "answer_en": "stream.read()",
    "answer_hi": "stream.read()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which of the following is the correct way to import the 'fs' module in Node.js?",
    "question_hi": "Node.js में 'fs' मॉड्यूल को इम्पोर्ट करने का सही तरीका कौन सा है?",
    "options_en": ["const fs = require('fs');", "import fs from 'fs';", "const fs = import('fs');", "import fs = require('fs');"],
    "options_hi": ["const fs = require('fs');", "import fs from 'fs';", "const fs = import('fs');", "import fs = require('fs');"],
    "answer_en": "const fs = require('fs');",
    "answer_hi": "const fs = require('fs');",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the purpose of 'package.json' in a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट में 'package.json' का उद्देश्य क्या है?",
    "options_en": ["To manage project dependencies and metadata", "To store source code", "To configure the database", "To write application logic"],
    "options_hi": ["प्रोजेक्ट डिपेंडेंसी और मेटाडेटा को मैनेज करने के लिए", "सोर्स कोड स्टोर करने के लिए", "डेटाबेस को कॉन्फ़िगर करने के लिए", "एप्लीकेशन लॉजिक लिखने के लिए"],
    "answer_en": "To manage project dependencies and metadata",
    "answer_hi": "प्रोजेक्ट डिपेंडेंसी और मेटाडेटा को मैनेज करने के लिए",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 38,
    "question_en": "Which method is used to write data to a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल में असिंक्रोनसली डेटा लिखने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.writeFile()", "fs.writeFileSync()", "fs.appendFile()", "fs.open()"],
    "options_hi": ["fs.writeFile()", "fs.writeFileSync()", "fs.appendFile()", "fs.open()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which of the following is used to handle exceptions in asynchronous code in Node.js?",
    "question_hi": "Node.js में असिंक्रोनस कोड में एक्सेप्शन्स को हैंडल करने के लिए कौन सा उपयोग होता है?",
    "options_en": ["try...catch with async/await", "try...catch with callbacks", "process.on('uncaughtException')", "All of the above"],
    "options_hi": ["async/await के साथ try...catch", "callbacks के साथ try...catch", "process.on('uncaughtException')", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
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
    "num": 41,
    "question_en": "What is the default scope of variables declared with 'var' in Node.js?",
    "question_hi": "Node.js में 'var' के साथ घोषित वेरिएबल की डिफ़ॉल्ट स्कोप क्या होती है?",
    "options_en": ["Function scope", "Block scope", "Global scope", "Module scope"],
    "options_hi": ["फंक्शन स्कोप", "ब्लॉक स्कोप", "ग्लोबल स्कोप", "मॉड्यूल स्कोप"],
    "answer_en": "Function scope",
    "answer_hi": "फंक्शन स्कोप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to add event listeners to EventEmitter objects in Node.js?",
    "question_hi": "Node.js में EventEmitter ऑब्जेक्ट्स पर इवेंट लिस्नर जोड़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["on()", "addListener()", "once()", "All of the above"],
    "options_hi": ["on()", "addListener()", "once()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which command is used to install a Node.js package locally?",
    "question_hi": "Node.js पैकेज को लोकली इंस्टॉल करने के लिए कौन सा कमांड उपयोग होता है?",
    "options_en": ["npm install package-name", "npm get package-name", "npm update package-name", "npm add package-name"],
    "options_hi": ["npm install package-name", "npm get package-name", "npm update package-name", "npm add package-name"],
    "answer_en": "npm install package-name",
    "answer_hi": "npm install package-name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does 'callback hell' refer to in Node.js?",
    "question_hi": "Node.js में 'callback hell' का मतलब क्या है?",
    "options_en": [
      "Nested callbacks leading to hard-to-read code",
      "Error handling in callbacks",
      "Using callbacks with Promises",
      "None of the above"
    ],
    "options_hi": [
      "नेस्टेड कॉलबैक्स जो कोड को पढ़ने में मुश्किल बनाते हैं",
      "कॉलबैक्स में एरर हैंडलिंग",
      "Promises के साथ कॉलबैक्स का उपयोग",
      "उपरोक्त में से कोई नहीं"
    ],
    "answer_en": "Nested callbacks leading to hard-to-read code",
    "answer_hi": "नेस्टेड कॉलबैक्स जो कोड को पढ़ने में मुश्किल बनाते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which of the following is true about Node.js streams?",
    "question_hi": "Node.js streams के बारे में कौन सा कथन सही है?",
    "options_en": [
      "Streams allow efficient reading/writing of data",
      "Streams are not useful for large files",
      "Streams buffer all data in memory before processing",
      "Streams can only be used with HTTP requests"
    ],
    "options_hi": [
      "Streams डेटा पढ़ने/लिखने को कुशल बनाते हैं",
      "Streams बड़े फाइल्स के लिए उपयोगी नहीं हैं",
      "Streams प्रोसेसिंग से पहले सभी डेटा को मेमोरी में बफर करते हैं",
      "Streams केवल HTTP रिक्वेस्ट के साथ उपयोग किए जा सकते हैं"
    ],
    "answer_en": "Streams allow efficient reading/writing of data",
    "answer_hi": "Streams डेटा पढ़ने/लिखने को कुशल बनाते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to import modules in ES6 syntax in Node.js?",
    "question_hi": "Node.js में ES6 सिंटैक्स में मॉड्यूल्स इम्पोर्ट करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": [
      "import moduleName from 'module';",
      "const moduleName = require('module');",
      "module.import('module');",
      "require('module');"
    ],
    "options_hi": [
      "import moduleName from 'module';",
      "const moduleName = require('module');",
      "module.import('module');",
      "require('module');"
    ],
    "answer_en": "import moduleName from 'module';",
    "answer_hi": "import moduleName from 'module';",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Node.js module helps to parse JSON data?",
    "question_hi": "Node.js में JSON डेटा पार्स करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["JSON", "querystring", "fs", "url"],
    "options_hi": ["JSON", "querystring", "fs", "url"],
    "answer_en": "JSON",
    "answer_hi": "JSON",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which method is used to stop a timer created by setInterval() in Node.js?",
    "question_hi": "Node.js में setInterval() द्वारा बनाए गए टाईमर को रोकने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["clearInterval()", "clearTimeout()", "stopInterval()", "stopTimeout()"],
    "options_hi": ["clearInterval()", "clearTimeout()", "stopInterval()", "stopTimeout()"],
    "answer_en": "clearInterval()",
    "answer_hi": "clearInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which of the following is NOT a valid HTTP method?",
    "question_hi": "निम्न में से कौन सा HTTP मेथड सही नहीं है?",
    "options_en": ["FETCH", "POST", "GET", "DELETE"],
    "options_hi": ["FETCH", "POST", "GET", "DELETE"],
    "answer_en": "FETCH",
    "answer_hi": "FETCH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "In Node.js, which object provides access to command-line arguments?",
    "question_hi": "Node.js में कमांड-लाइन आर्गुमेंट्स तक पहुंच कौन सा ऑब्जेक्ट देता है?",
    "options_en": ["process.argv", "process.env", "process.args", "process.input"],
    "options_hi": ["process.argv", "process.env", "process.args", "process.input"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
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