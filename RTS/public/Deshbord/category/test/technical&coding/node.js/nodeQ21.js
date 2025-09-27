const questions=[
  {
    "num": 1,
    "question_en": "What does Node.js primarily use to handle asynchronous operations?",
    "question_hi": "Node.js असिंक्रोनस ऑपरेशंस को मुख्य रूप से किस चीज़ से हैंडल करता है?",
    "options_en": ["Event Loop", "Threads", "Processes", "Timers"],
    "options_hi": ["इवेंट लूप", "थ्रेड्स", "प्रोसेसेस", "टाइमर्स"],
    "answer_en": "Event Loop",
    "answer_hi": "इवेंट लूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which company developed Node.js?",
    "question_hi": "Node.js किस कंपनी ने विकसित किया था?",
    "options_en": ["Google", "Microsoft", "Joyent", "IBM"],
    "options_hi": ["गूगल", "माइक्रोसॉफ्ट", "जॉयंट", "आईबीएम"],
    "answer_en": "Joyent",
    "answer_hi": "जॉयंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which module is used to create a web server in Node.js?",
    "question_hi": "Node.js में वेब सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["http", "fs", "url", "net"],
    "options_hi": ["http", "fs", "url", "net"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which method is used to read a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल को असिंक्रोनसली पढ़ने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["fs.readFile()", "fs.read()", "fs.open()", "fs.readFileSync()"],
    "options_hi": ["fs.readFile()", "fs.read()", "fs.open()", "fs.readFileSync()"],
    "answer_en": "fs.readFile()",
    "answer_hi": "fs.readFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which object contains information about the current process in Node.js?",
    "question_hi": "Node.js में वर्तमान प्रक्रिया की जानकारी किस ऑब्जेक्ट में होती है?",
    "options_en": ["process", "system", "runtime", "environment"],
    "options_hi": ["process", "system", "runtime", "environment"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which keyword is used to import modules in Node.js?",
    "question_hi": "Node.js में मॉड्यूल्स को इम्पोर्ट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["require", "import", "include", "load"],
    "options_hi": ["require", "import", "include", "load"],
    "answer_en": "require",
    "answer_hi": "require",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "How can you create a new buffer of size 10 in Node.js?",
    "question_hi": "Node.js में 10 साइज का नया बफर कैसे बनाया जाता है?",
    "options_en": ["Buffer.alloc(10)", "new Buffer(10)", "Buffer.create(10)", "Buffer.new(10)"],
    "options_hi": ["Buffer.alloc(10)", "new Buffer(10)", "Buffer.create(10)", "Buffer.new(10)"],
    "answer_en": "Buffer.alloc(10)",
    "answer_hi": "Buffer.alloc(10)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the default scope of variables declared with var in Node.js modules?",
    "question_hi": "Node.js मॉड्यूल्स में var से घोषित वेरिएबल का डिफॉल्ट स्कोप क्या होता है?",
    "options_en": ["Function scope", "Global scope", "Block scope", "Module scope"],
    "options_hi": ["फंक्शन स्कोप", "ग्लोबल स्कोप", "ब्लॉक स्कोप", "मॉड्यूल स्कोप"],
    "answer_en": "Function scope",
    "answer_hi": "फंक्शन स्कोप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method in the 'http' module starts a server to listen on a given port?",
    "question_hi": "'http' मॉड्यूल में कौन सा मेथड सर्वर को किसी पोर्ट पर सुनने के लिए शुरू करता है?",
    "options_en": ["server.listen()", "http.createServer()", "server.start()", "http.listen()"],
    "options_hi": ["server.listen()", "http.createServer()", "server.start()", "http.listen()"],
    "answer_en": "server.listen()",
    "answer_hi": "server.listen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which module provides utilities for inspecting objects in Node.js?",
    "question_hi": "Node.js में ऑब्जेक्ट्स का निरीक्षण करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["util", "inspect", "object", "debug"],
    "options_hi": ["util", "inspect", "object", "debug"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is true about Node.js?",
    "question_hi": "Node.js के बारे में निम्नलिखित में से कौन सा सही है?",
    "options_en": ["It is single-threaded", "It only runs in the browser", "It does not support asynchronous programming", "It is a database system"],
    "options_hi": ["यह सिंगल-थ्रेडेड है", "यह केवल ब्राउज़र में चलता है", "यह असिंक्रोनस प्रोग्रामिंग को सपोर्ट नहीं करता", "यह एक डेटाबेस सिस्टम है"],
    "answer_en": "It is single-threaded",
    "answer_hi": "यह सिंगल-थ्रेडेड है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which method is used to stop a timer started by setTimeout()?",
    "question_hi": "setTimeout() से शुरू किए गए टाइमर को रोकने के लिए कौन सा मेथड उपयोग किया जाता है?",
    "options_en": ["clearTimeout()", "stopTimeout()", "clearTimer()", "stopTimer()"],
    "options_hi": ["clearTimeout()", "stopTimeout()", "clearTimer()", "stopTimer()"],
    "answer_en": "clearTimeout()",
    "answer_hi": "clearTimeout()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does the __dirname variable in Node.js represent?",
    "question_hi": "Node.js में __dirname वेरिएबल क्या दर्शाता है?",
    "options_en": ["Directory name of the current module", "Name of the current file", "Name of the current function", "Current working directory"],
    "options_hi": ["वर्तमान मॉड्यूल का डायरेक्टरी नाम", "वर्तमान फ़ाइल का नाम", "वर्तमान फंक्शन का नाम", "वर्तमान वर्किंग डायरेक्टरी"],
    "answer_en": "Directory name of the current module",
    "answer_hi": "वर्तमान मॉड्यूल का डायरेक्टरी नाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which module is used to create TCP servers in Node.js?",
    "question_hi": "Node.js में TCP सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["net", "http", "tcp", "socket"],
    "options_hi": ["net", "http", "tcp", "socket"],
    "answer_en": "net",
    "answer_hi": "net",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the primary function of the 'cluster' module in Node.js?",
    "question_hi": "Node.js में 'cluster' मॉड्यूल का मुख्य कार्य क्या है?",
    "options_en": ["To create child processes for load balancing", "To manage database connections", "To create HTTP servers", "To handle file I/O"],
    "options_hi": ["लोड बैलेंसिंग के लिए चाइल्ड प्रोसेसेस बनाना", "डेटाबेस कनेक्शन्स प्रबंधित करना", "HTTP सर्वर बनाना", "फाइल I/O हैंडल करना"],
    "answer_en": "To create child processes for load balancing",
    "answer_hi": "लोड बैलेंसिंग के लिए चाइल्ड प्रोसेसेस बनाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which command is used to initialize a new Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट को इनिशियलाइज करने के लिए कौन सा कमांड उपयोग किया जाता है?",
    "options_en": ["npm init", "node init", "npm start", "node create"],
    "options_hi": ["npm init", "node init", "npm start", "node create"],
    "answer_en": "npm init",
    "answer_hi": "npm init",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "How do you import the 'fs' module in Node.js?",
    "question_hi": "Node.js में 'fs' मॉड्यूल को कैसे इम्पोर्ट करते हैं?",
    "options_en": ["const fs = require('fs')", "import fs from 'fs'", "include fs", "use fs"],
    "options_hi": ["const fs = require('fs')", "import fs from 'fs'", "include fs", "use fs"],
    "answer_en": "const fs = require('fs')",
    "answer_hi": "const fs = require('fs')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method writes data to a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल में डाटा असिंक्रोनसली लिखने के लिए कौन सा मेथड है?",
    "options_en": ["fs.writeFile()", "fs.write()", "fs.appendFile()", "fs.writeFileSync()"],
    "options_hi": ["fs.writeFile()", "fs.write()", "fs.appendFile()", "fs.writeFileSync()"],
    "answer_en": "fs.writeFile()",
    "answer_hi": "fs.writeFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which global object can be used to schedule a callback to be invoked on the next iteration of the event loop?",
    "question_hi": "अगली इवेंट लूप पुनरावृत्ति पर कॉलबैक को invoke करने के लिए कौन सा ग्लोबल ऑब्जेक्ट उपयोग किया जाता है?",
    "options_en": ["process.nextTick()", "setTimeout()", "setImmediate()", "process.invoke()"],
    "options_hi": ["process.nextTick()", "setTimeout()", "setImmediate()", "process.invoke()"],
    "answer_en": "process.nextTick()",
    "answer_hi": "process.nextTick()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which of these is NOT a core module in Node.js?",
    "question_hi": "इनमें से कौन सा Node.js का कोर मॉड्यूल नहीं है?",
    "options_en": ["http", "fs", "express", "os"],
    "options_hi": ["http", "fs", "express", "os"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method is used to stop a server in Node.js?",
    "question_hi": "Node.js में सर्वर को बंद करने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["server.close()", "server.stop()", "http.stop()", "server.shutdown()"],
    "options_hi": ["server.close()", "server.stop()", "http.stop()", "server.shutdown()"],
    "answer_en": "server.close()",
    "answer_hi": "server.close()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which property of the process object gives the platform of the Node.js process?",
    "question_hi": "process ऑब्जेक्ट की कौन सी प्रॉपर्टी Node.js प्रोसेस का प्लेटफ़ॉर्म देती है?",
    "options_en": ["process.platform", "process.env", "process.arch", "process.os"],
    "options_hi": ["process.platform", "process.env", "process.arch", "process.os"],
    "answer_en": "process.platform",
    "answer_hi": "process.platform",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is npm in Node.js?",
    "question_hi": "Node.js में npm क्या है?",
    "options_en": ["Node Package Manager", "Node Process Manager", "New Package Module", "Node Performance Monitor"],
    "options_hi": ["Node Package Manager", "Node Process Manager", "New Package Module", "Node Performance Monitor"],
    "answer_en": "Node Package Manager",
    "answer_hi": "Node Package Manager",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which module helps parse URL strings in Node.js?",
    "question_hi": "Node.js में URL स्ट्रिंग्स को पार्स करने में कौन सा मॉड्यूल मदद करता है?",
    "options_en": ["url", "querystring", "path", "http"],
    "options_hi": ["url", "querystring", "path", "http"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which module is used for DNS lookups in Node.js?",
    "question_hi": "Node.js में DNS लुकअप के लिए कौन सा मॉड्यूल उपयोग किया जाता है?",
    "options_en": ["dns", "net", "http", "os"],
    "options_hi": ["dns", "net", "http", "os"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method can be used to append data to a file asynchronously in Node.js?",
    "question_hi": "Node.js में फाइल में डाटा असिंक्रोनसली जोड़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["fs.appendFile()", "fs.writeFile()", "fs.append()", "fs.addFile()"],
    "options_hi": ["fs.appendFile()", "fs.writeFile()", "fs.append()", "fs.addFile()"],
    "answer_en": "fs.appendFile()",
    "answer_hi": "fs.appendFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which of the following is used to handle uncaught exceptions in Node.js?",
    "question_hi": "Node.js में uncaught exceptions को हैंडल करने के लिए क्या उपयोग होता है?",
    "options_en": ["process.on('uncaughtException')", "try-catch", "domain module", "All of the above"],
    "options_hi": ["process.on('uncaughtException')", "try-catch", "domain module", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method in the 'events' module adds a listener for a specific event?",
    "question_hi": "'events' मॉड्यूल में किसी विशेष इवेंट के लिए लिस्नर जोड़ने के लिए कौन सा मेथड है?",
    "options_en": ["on()", "emit()", "addListener()", "Both on() and addListener()"],
    "options_hi": ["on()", "emit()", "addListener()", "on() और addListener() दोनों"],
    "answer_en": "Both on() and addListener()",
    "answer_hi": "on() और addListener() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method in Node.js is used to read input from the command line?",
    "question_hi": "Node.js में कमांड लाइन से इनपुट पढ़ने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["process.stdin.on('data')", "process.stdout.write()", "console.read()", "input.read()"],
    "options_hi": ["process.stdin.on('data')", "process.stdout.write()", "console.read()", "input.read()"],
    "answer_en": "process.stdin.on('data')",
    "answer_hi": "process.stdin.on('data')",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 30,
    "question_en": "Which object provides information about environment variables in Node.js?",
    "question_hi": "Node.js में एनवायरनमेंट वेरिएबल्स की जानकारी कौन सा ऑब्जेक्ट देता है?",
    "options_en": ["process.env", "process.vars", "environment", "env"],
    "options_hi": ["process.env", "process.vars", "environment", "env"],
    "answer_en": "process.env",
    "answer_hi": "process.env",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which method in Node.js 'path' module joins path segments?",
    "question_hi": "Node.js के 'path' मॉड्यूल में कौन सा मेथड पाथ सेगमेंट्स को जोड़ता है?",
    "options_en": ["path.join()", "path.concat()", "path.combine()", "path.append()"],
    "options_hi": ["path.join()", "path.concat()", "path.combine()", "path.append()"],
    "answer_en": "path.join()",
    "answer_hi": "path.join()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Node.js module can be used to work with file and directory paths?",
    "question_hi": "Node.js में फाइल और डायरेक्टरी पाथ्स के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["path", "fs", "url", "http"],
    "options_hi": ["path", "fs", "url", "http"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What does the 'exports' object represent in Node.js?",
    "question_hi": "Node.js में 'exports' ऑब्जेक्ट क्या दर्शाता है?",
    "options_en": ["It exposes module functionalities", "It contains environment variables", "It is a global object", "It stores process info"],
    "options_hi": ["यह मॉड्यूल की कार्यक्षमताओं को एक्सपोज़ करता है", "यह एनवायरनमेंट वेरिएबल्स रखता है", "यह एक ग्लोबल ऑब्जेक्ट है", "यह प्रोसेस की जानकारी रखता है"],
    "answer_en": "It exposes module functionalities",
    "answer_hi": "यह मॉड्यूल की कार्यक्षमताओं को एक्सपोज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "How do you create a readable stream in Node.js?",
    "question_hi": "Node.js में रीडेबल स्ट्रीम कैसे बनाते हैं?",
    "options_en": ["fs.createReadStream()", "fs.readStream()", "fs.createStream()", "fs.streamRead()"],
    "options_hi": ["fs.createReadStream()", "fs.readStream()", "fs.createStream()", "fs.streamRead()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which event is emitted when a readable stream has no more data to read?",
    "question_hi": "जब रीडेबल स्ट्रीम में पढ़ने के लिए और डाटा न हो तो कौन सा इवेंट उत्पन्न होता है?",
    "options_en": ["end", "finish", "close", "done"],
    "options_hi": ["end", "finish", "close", "done"],
    "answer_en": "end",
    "answer_hi": "end",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which Node.js module allows you to perform cryptographic operations?",
    "question_hi": "Node.js में क्रिप्टोग्राफिक ऑपरेशंस करने के लिए कौन सा मॉड्यूल है?",
    "options_en": ["crypto", "security", "hash", "encrypt"],
    "options_hi": ["crypto", "security", "hash", "encrypt"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method in Node.js buffers converts a buffer object to a string?",
    "question_hi": "Node.js में बफर ऑब्जेक्ट को स्ट्रिंग में बदलने के लिए कौन सा मेथड है?",
    "options_en": ["buffer.toString()", "buffer.toStr()", "buffer.convert()", "buffer.stringify()"],
    "options_hi": ["buffer.toString()", "buffer.toStr()", "buffer.convert()", "buffer.stringify()"],
    "answer_en": "buffer.toString()",
    "answer_hi": "buffer.toString()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which method is used to execute a shell command asynchronously in Node.js?",
    "question_hi": "Node.js में शेल कमांड को असिंक्रोनसली execute करने के लिए कौन सा मेथड है?",
    "options_en": ["child_process.exec()", "child_process.spawn()", "child_process.run()", "child_process.execSync()"],
    "options_hi": ["child_process.exec()", "child_process.spawn()", "child_process.run()", "child_process.execSync()"],
    "answer_en": "child_process.exec()",
    "answer_hi": "child_process.exec()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which of the following is NOT a valid HTTP method supported by Node.js 'http' module?",
    "question_hi": "Node.js के 'http' मॉड्यूल द्वारा समर्थित निम्न में से कौन सा HTTP मेथड मान्य नहीं है?",
    "options_en": ["FETCH", "GET", "POST", "DELETE"],
    "options_hi": ["FETCH", "GET", "POST", "DELETE"],
    "answer_en": "FETCH",
    "answer_hi": "FETCH",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does the 'setImmediate()' function do in Node.js?",
    "question_hi": "Node.js में 'setImmediate()' फंक्शन क्या करता है?",
    "options_en": ["Executes a callback immediately after the current poll phase", "Delays execution by 1 second", "Schedules a callback at the next tick", "Stops the event loop"],
    "options_hi": ["वर्तमान पोल फेज़ के तुरंत बाद कॉलबैक execute करता है", "1 सेकंड के लिए एक्सेक्यूशन delay करता है", "अगले tick पर कॉलबैक शेड्यूल करता है", "इवेंट लूप को रोकता है"],
    "answer_en": "Executes a callback immediately after the current poll phase",
    "answer_hi": "वर्तमान पोल फेज़ के तुरंत बाद कॉलबैक execute करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which Node.js module helps in compressing data streams?",
    "question_hi": "Node.js में डेटा स्ट्रीम्स को कम्प्रेस करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["zlib", "compress", "stream", "buffer"],
    "options_hi": ["zlib", "compress", "stream", "buffer"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the 'cluster.fork()' method do in Node.js?",
    "question_hi": "Node.js में 'cluster.fork()' मेथड क्या करता है?",
    "options_en": ["Creates a new worker process", "Stops the cluster", "Restarts the cluster", "Creates a new thread"],
    "options_hi": ["नया वर्कर प्रोसेस बनाता है", "क्लस्टर रोकता है", "क्लस्टर को रीस्टार्ट करता है", "नया थ्रेड बनाता है"],
    "answer_en": "Creates a new worker process",
    "answer_hi": "नया वर्कर प्रोसेस बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which global object in Node.js is equivalent to the browser's 'window' object?",
    "question_hi": "Node.js में कौन सा ग्लोबल ऑब्जेक्ट ब्राउज़र के 'window' ऑब्जेक्ट के समान है?",
    "options_en": ["global", "process", "module", "exports"],
    "options_hi": ["global", "process", "module", "exports"],
    "answer_en": "global",
    "answer_hi": "global",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Node.js module helps to create child processes?",
    "question_hi": "Node.js में चाइल्ड प्रोसेसेस बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["child_process", "process", "cluster", "thread"],
    "options_hi": ["child_process", "process", "cluster", "thread"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method reads a directory contents asynchronously in Node.js?",
    "question_hi": "Node.js में डायरेक्टरी की सामग्री असिंक्रोनसली पढ़ने के लिए कौन सा मेथड है?",
    "options_en": ["fs.readdir()", "fs.readDirSync()", "fs.readDirectory()", "fs.listDir()"],
    "options_hi": ["fs.readdir()", "fs.readDirSync()", "fs.readDirectory()", "fs.listDir()"],
    "answer_en": "fs.readdir()",
    "answer_hi": "fs.readdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which of these Node.js core modules helps handle streams of data?",
    "question_hi": "Node.js के कौन से कोर मॉड्यूल डेटा स्ट्रीम्स को हैंडल करने में मदद करता है?",
    "options_en": ["stream", "fs", "path", "net"],
    "options_hi": ["stream", "fs", "path", "net"],
    "answer_en": "stream",
    "answer_hi": "stream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method in 'http' module is used to send a response back to the client?",
    "question_hi": "'http' मॉड्यूल में क्लाइंट को रिस्पॉन्स भेजने के लिए कौन सा मेथड उपयोग होता है?",
    "options_en": ["response.end()", "response.send()", "response.write()", "response.return()"],
    "options_hi": ["response.end()", "response.send()", "response.write()", "response.return()"],
    "answer_en": "response.end()",
    "answer_hi": "response.end()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which command installs a package locally in a Node.js project?",
    "question_hi": "Node.js प्रोजेक्ट में लोकली पैकेज इंस्टॉल करने के लिए कौन सा कमांड है?",
    "options_en": ["npm install <package>", "npm get <package>", "npm add <package>", "npm fetch <package>"],
    "options_hi": ["npm install <package>", "npm get <package>", "npm add <package>", "npm fetch <package>"],
    "answer_en": "npm install <package>",
    "answer_hi": "npm install <package>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which object is used to write output to the console in Node.js?",
    "question_hi": "Node.js में कंसोल पर आउटपुट लिखने के लिए कौन सा ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["console", "process.stdout", "print", "output"],
    "options_hi": ["console", "process.stdout", "print", "output"],
    "answer_en": "console",
    "answer_hi": "console",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What will the 'require()' function return if a module does not explicitly export anything?",
    "question_hi": "अगर कोई मॉड्यूल कुछ भी स्पष्ट रूप से एक्सपोर्ट नहीं करता तो 'require()' फंक्शन क्या लौटाएगा?",
    "options_en": ["An empty object", "Undefined", "Null", "Throws an error"],
    "options_hi": ["एक खाली ऑब्जेक्ट", "Undefined", "Null", "एरर फेंकता है"],
    "answer_en": "An empty object",
    "answer_hi": "एक खाली ऑब्जेक्ट",
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