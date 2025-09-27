const questions=[
  {
    "num": 1,
    "question_en": "Which module is used to handle HTTP requests in Node.js?",
    "question_hi": "Node.js में HTTP अनुरोधों को संभालने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["http", "express", "fs", "url"],
    "options_hi": ["http", "express", "fs", "url"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to read a file asynchronously in Node.js?",
    "question_hi": "Node.js में एक फ़ाइल को असिंक्रोनस तरीके से पढ़ने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.readFile()", "fs.read()", "fs.open()", "fs.readSync()"],
    "options_hi": ["fs.readFile()", "fs.read()", "fs.open()", "fs.readSync()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the 'require' function do in Node.js?",
    "question_hi": "Node.js में 'require' फंक्शन क्या करता है?",
    "options_en": ["Exports a module", "Imports a module", "Creates a new module", "Deletes a module"],
    "options_hi": ["एक मॉड्यूल निर्यात करता है", "एक मॉड्यूल आयात करता है", "एक नया मॉड्यूल बनाता है", "एक मॉड्यूल हटाता है"],
    "answer_en": "Imports a module",
    "answer_hi": "एक मॉड्यूल आयात करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of the following is a core module in Node.js?",
    "question_hi": "निम्नलिखित में से कौन सा Node.js का एक कोर मॉड्यूल है?",
    "options_en": ["express", "mongoose", "http", "angular"],
    "options_hi": ["express", "mongoose", "http", "angular"],
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
    "question_hi": "Node.js में एक नया डायरेक्टरी बनाने के लिए कौन सा मेथड उपयोग किया जाता है?",
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
    "question_hi": "Node.js में स्ट्रीम्स को संभालने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
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
    "question_hi": "Node.js में एक फ़ाइल में डेटा जोड़ने के लिए कौन सा मेथड उपयोग किया जाता है?",
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
    "question_hi": "Node.js में एक फ़ाइल को हटाने के लिए कौन सा मेथड उपयोग किया जाता है?",
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
    "question_hi": "Node.js में एक इवेंट को उत्सर्जित करने के लिए कौन सा मेथड उपयोग किया जाता है?",
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
    "question_hi": "Node.js में किसी इवेंट को सुनने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["emitter.on()", "emitter.addListener()", "emitter.listen()", "emitter.subscribe()"],
    "options_hi": ["emitter.on()", "emitter.addListener()", "emitter.listen()", "emitter.subscribe()"],
    "answer_en": "emitter.on()",
    "answer_hi": "emitter.on()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method removes an event listener in Node.js?",
    "question_hi": "Node.js में इवेंट लिस्नर को हटाने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["emitter.removeListener()", "emitter.off()", "emitter.remove()", "emitter.unsubscribe()"],
    "options_hi": ["emitter.removeListener()", "emitter.off()", "emitter.remove()", "emitter.unsubscribe()"],
    "answer_en": "emitter.removeListener()",
    "answer_hi": "emitter.removeListener()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method creates a new HTTP server in Node.js?",
    "question_hi": "Node.js में नया HTTP सर्वर बनाने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["http.createServer()", "http.newServer()", "http.server()", "http.create()"],
    "options_hi": ["http.createServer()", "http.newServer()", "http.server()", "http.create()"],
    "answer_en": "http.createServer()",
    "answer_hi": "http.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method starts a server listening on a specific port?",
    "question_hi": "किस मेथड का उपयोग किसी सर्वर को एक निश्चित पोर्ट पर सुनने के लिए किया जाता है?",
    "options_en": ["server.listen()", "server.start()", "server.run()", "server.wait()"],
    "options_hi": ["server.listen()", "server.start()", "server.run()", "server.wait()"],
    "answer_en": "server.listen()",
    "answer_hi": "server.listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method sends a response to the client in Node.js?",
    "question_hi": "Node.js में क्लाइंट को रिस्पॉन्स भेजने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["res.send()", "res.write()", "res.end()", "res.response()"],
    "options_hi": ["res.send()", "res.write()", "res.end()", "res.response()"],
    "answer_en": "res.end()",
    "answer_hi": "res.end()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method parses JSON strings into objects in Node.js?",
    "question_hi": "Node.js में JSON स्ट्रिंग को ऑब्जेक्ट में बदलने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.encode()"],
    "options_hi": ["JSON.parse()", "JSON.stringify()", "JSON.decode()", "JSON.encode()"],
    "answer_en": "JSON.parse()",
    "answer_hi": "JSON.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method converts an object to a JSON string in Node.js?",
    "question_hi": "Node.js में ऑब्जेक्ट को JSON स्ट्रिंग में बदलने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["JSON.stringify()", "JSON.parse()", "JSON.encode()", "JSON.decode()"],
    "options_hi": ["JSON.stringify()", "JSON.parse()", "JSON.encode()", "JSON.decode()"],
    "answer_en": "JSON.stringify()",
    "answer_hi": "JSON.stringify()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which module is used to work with file paths in Node.js?",
    "question_hi": "Node.js में फाइल पाथ्स के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["path", "fs", "url", "http"],
    "options_hi": ["path", "fs", "url", "http"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method is used to join paths in Node.js?",
    "question_hi": "Node.js में पाथ्स को जोड़ने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["path.join()", "path.connect()", "path.merge()", "path.combine()"],
    "options_hi": ["path.join()", "path.connect()", "path.merge()", "path.combine()"],
    "answer_en": "path.join()",
    "answer_hi": "path.join()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method synchronously reads the contents of a directory?",
    "question_hi": "Node.js में किसी डायरेक्टरी की सामग्री को सिंक्रोनस तरीके से पढ़ने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.readdirSync()", "fs.readSync()", "fs.readFileSync()", "fs.readDir()"],
    "options_hi": ["fs.readdirSync()", "fs.readSync()", "fs.readFileSync()", "fs.readDir()"],
    "answer_en": "fs.readdirSync()",
    "answer_hi": "fs.readdirSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which of these is NOT a Node.js core module?",
    "question_hi": "इनमें से कौन सा Node.js का कोर मॉड्यूल नहीं है?",
    "options_en": ["http", "express", "fs", "path"],
    "options_hi": ["http", "express", "fs", "path"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which object provides information about the current Node.js process?",
    "question_hi": "Node.js में वर्तमान प्रोसेस की जानकारी कौन सा ऑब्जेक्ट देता है?",
    "options_en": ["process", "system", "os", "thread"],
    "options_hi": ["process", "system", "os", "thread"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method is used to stop the Node.js process?",
    "question_hi": "Node.js प्रोसेस को रोकने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["process.exit()", "process.stop()", "process.end()", "process.quit()"],
    "options_hi": ["process.exit()", "process.stop()", "process.end()", "process.quit()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which module helps in working with binary data in Node.js?",
    "question_hi": "Node.js में बाइनरी डेटा के साथ काम करने में कौन सा मॉड्यूल मदद करता है?",
    "options_en": ["buffer", "stream", "http", "events"],
    "options_hi": ["buffer", "stream", "http", "events"],
    "answer_en": "buffer",
    "answer_hi": "buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which global object contains the command line arguments in Node.js?",
    "question_hi": "Node.js में कमांड लाइन आर्गुमेंट्स किस ग्लोबल ऑब्जेक्ट में होते हैं?",
    "options_en": ["process.argv", "process.args", "process.cmd", "process.cli"],
    "options_hi": ["process.argv", "process.args", "process.cmd", "process.cli"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method synchronously writes data to a file in Node.js?",
    "question_hi": "Node.js में किसी फ़ाइल में डेटा सिंक्रोनस तरीके से लिखने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.writeFileSync()", "fs.writeFile()", "fs.appendFile()", "fs.write()"],
    "options_hi": ["fs.writeFileSync()", "fs.writeFile()", "fs.appendFile()", "fs.write()"],
    "answer_en": "fs.writeFileSync()",
    "answer_hi": "fs.writeFileSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which module allows interaction with the operating system in Node.js?",
    "question_hi": "Node.js में ऑपरेटिंग सिस्टम के साथ इंटरैक्शन के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["os", "fs", "http", "path"],
    "options_hi": ["os", "fs", "http", "path"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method creates a readable stream in Node.js?",
    "question_hi": "Node.js में रीडेबल स्ट्रीम बनाने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.createReadStream()", "fs.createWriteStream()", "stream.create()", "stream.read()"],
    "options_hi": ["fs.createReadStream()", "fs.createWriteStream()", "stream.create()", "stream.read()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which of these is used to manage dependencies in Node.js projects?",
    "question_hi": "Node.js प्रोजेक्ट्स में डिपेंडेंसी मैनेज करने के लिए क्या उपयोग किया जाता है?",
    "options_en": ["package.json", "index.js", "server.js", "app.js"],
    "options_hi": ["package.json", "index.js", "server.js", "app.js"],
    "answer_en": "package.json",
    "answer_hi": "package.json",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which method is used to install a package globally using npm?",
    "question_hi": "npm का उपयोग करके पैकेज को ग्लोबली इंस्टॉल करने के लिए कौन सा कमांड उपयोग किया जाता है?",
    "options_en": ["npm install -g packageName", "npm install packageName", "npm global install packageName", "npm install --global package"],
    "options_hi": ["npm install -g packageName", "npm install packageName", "npm global install packageName", "npm install --global package"],
    "answer_en": "npm install -g packageName",
    "answer_hi": "npm install -g packageName",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which file contains metadata about a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट के बारे में मेटाडाटा किस फाइल में होता है?",
    "options_en": ["package.json", "app.js", "index.js", "README.md"],
    "options_hi": ["package.json", "app.js", "index.js", "README.md"],
    "answer_en": "package.json",
    "answer_hi": "package.json",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which module is widely used as a web framework in Node.js?",
    "question_hi": "Node.js में वेब फ्रेमवर्क के रूप में सबसे अधिक उपयोग किया जाने वाला मॉड्यूल कौन सा है?",
    "options_en": ["express", "http", "url", "fs"],
    "options_hi": ["express", "http", "url", "fs"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which method is used to parse URL query strings in Node.js?",
    "question_hi": "Node.js में URL क्वेरी स्ट्रिंग को पार्स करने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["querystring.parse()", "url.parse()", "query.parse()", "url.query()"],
    "options_hi": ["querystring.parse()", "url.parse()", "query.parse()", "url.query()"],
    "answer_en": "querystring.parse()",
    "answer_hi": "querystring.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which command initializes a new Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट को नया शुरू करने के लिए कौन सा कमांड उपयोग किया जाता है?",
    "options_en": ["npm init", "npm start", "node init", "node start"],
    "options_hi": ["npm init", "npm start", "node init", "node start"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 36,
    "question_en": "Which Node.js method allows setting environment variables?",
    "question_hi": "Node.js में एनवायरनमेंट वेरिएबल सेट करने के लिए कौन सा तरीका है?",
    "options_en": ["process.env", "process.setEnv", "env.set", "set.env"],
    "options_hi": ["process.env", "process.setEnv", "env.set", "set.env"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method is used to execute a child process in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेस को execute करने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["child_process.exec()", "child_process.run()", "child_process.spawn()", "child_process.create()"],
    "options_hi": ["child_process.exec()", "child_process.run()", "child_process.spawn()", "child_process.create()"],
    "answer_en": "child_process.exec()",
    "answer_hi": "child_process.exec()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which module is used for working with file systems in Node.js?",
    "question_hi": "Node.js में फाइल सिस्टम के साथ काम करने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["fs", "path", "os", "net"],
    "options_hi": ["fs", "path", "os", "net"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which of these is NOT a valid Node.js callback error-first convention?",
    "question_hi": "इनमें से कौन सी Node.js callback एरर-फर्स्ट कन्वेंशन के अनुरूप नहीं है?",
    "options_en": ["function(err, data)", "function(error, result)", "function(data, err)", "function(err)"],
    "options_hi": ["function(err, data)", "function(error, result)", "function(data, err)", "function(err)"],
    "answer_en": "function(data, err)",
    "answer_hi": "function(data, err)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which global object in Node.js represents the current module?",
    "question_hi": "Node.js में वर्तमान मॉड्यूल को कौन सा ग्लोबल ऑब्जेक्ट दर्शाता है?",
    "options_en": ["module", "process", "exports", "__dirname"],
    "options_hi": ["module", "process", "exports", "__dirname"],
    "answer_en": "module",
    "answer_hi": "module",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method is used to export a module in Node.js?",
    "question_hi": "Node.js में मॉड्यूल को एक्सपोर्ट करने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["module.exports", "exports.module", "export.module", "module.export"],
    "options_hi": ["module.exports", "exports.module", "export.module", "module.export"],
    "answer_en": "module.exports",
    "answer_hi": "module.exports",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which Node.js module provides utilities for debugging?",
    "question_hi": "Node.js में डिबगिंग के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["util", "debug", "logger", "console"],
    "options_hi": ["util", "debug", "logger", "console"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which module is used for networking in Node.js?",
    "question_hi": "Node.js में नेटवर्किंग के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["net", "http", "fs", "dns"],
    "options_hi": ["net", "http", "fs", "dns"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which of the following is a way to handle asynchronous code in Node.js?",
    "question_hi": "Node.js में असिंक्रोनस कोड को हैंडल करने का कौन सा तरीका है?",
    "options_en": ["callbacks", "promises", "async/await", "all of the above"],
    "options_hi": ["callbacks", "promises", "async/await", "all of the above"],
    "answer_en": "all of the above",
    "answer_hi": "all of the above",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which event is emitted when a readable stream ends in Node.js?",
    "question_hi": "Node.js में जब रीडेबल स्ट्रीम समाप्त होती है तो कौन सा इवेंट जारी होता है?",
    "options_en": ["end", "close", "finish", "done"],
    "options_hi": ["end", "close", "finish", "done"],
    "answer_en": "end",
    "answer_hi": "end",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method reads environment variables in Node.js?",
    "question_hi": "Node.js में एनवायरनमेंट वेरिएबल पढ़ने के लिए कौन सा तरीका है?",
    "options_en": ["process.env.VARIABLE_NAME", "process.getEnv()", "env.get()", "process.variable"],
    "options_hi": ["process.env.VARIABLE_NAME", "process.getEnv()", "env.get()", "process.variable"],
    "answer_en": "process.env.VARIABLE_NAME",
    "answer_hi": "process.env.VARIABLE_NAME",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which of the following is NOT true about Node.js?",
    "question_hi": "Node.js के बारे में निम्नलिखित में से कौन सा सत्य नहीं है?",
    "options_en": ["It is single-threaded", "It uses event-driven architecture", "It can be used for frontend development", "It is built on Chrome's V8 engine"],
    "options_hi": ["यह सिंगल-थ्रेडेड है", "यह इवेंट-ड्रिवन आर्किटेक्चर उपयोग करता है", "इसे फ्रंटएंड डेवलपमेंट के लिए उपयोग किया जा सकता है", "यह क्रोम के V8 इंजन पर आधारित है"],
    "answer_en": "It can be used for frontend development",
    "answer_hi": "इसे फ्रंटएंड डेवलपमेंट के लिए उपयोग किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which object is used to handle HTTP request and response in Node.js?",
    "question_hi": "Node.js में HTTP रिक्वेस्ट और रिस्पॉन्स को हैंडल करने के लिए कौन सा ऑब्जेक्ट उपयोग किया जाता है?",
    "options_en": ["http.IncomingMessage and http.ServerResponse", "http.Request and http.Response", "http.ClientRequest and http.ServerRequest", "http.Connection and http.Transfer"],
    "options_hi": ["http.IncomingMessage और http.ServerResponse", "http.Request और http.Response", "http.ClientRequest और http.ServerRequest", "http.Connection और http.Transfer"],
    "answer_en": "http.IncomingMessage and http.ServerResponse",
    "answer_hi": "http.IncomingMessage और http.ServerResponse",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method in Node.js is used to schedule a function to run after a delay?",
    "question_hi": "Node.js में किसी फंक्शन को देरी के बाद चलाने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "options_hi": ["setTimeout()", "setInterval()", "setImmediate()", "process.nextTick()"],
    "answer_en": "setTimeout()",
    "answer_hi": "setTimeout()",
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
  },
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