const questions=[
  {
    "num": 1,
    "question_en": "Which of the following is used to handle asynchronous operations in Node.js?",
    "question_hi": "Node.js में असिंक्रोनस ऑपरेशन्स को हैंडल करने के लिए कौन सा उपयोग होता है?",
    "options_en": ["Callbacks", "Promises", "Async/Await", "All of the above"],
    "options_hi": ["Callbacks", "Promises", "Async/Await", "इनमें से सभी"],
    "answer_en": "All of the above",
    "answer_hi": "इनमें से सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which module is used to handle binary data in Node.js?",
    "question_hi": "Node.js में बाइनरी डेटा को हैंडल करने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["Buffer", "crypto", "dgram", "fs"],
    "options_hi": ["Buffer", "crypto", "dgram", "fs"],
    "answer_en": "Buffer",
    "answer_hi": "Buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which method is used to compare the placement of two nodes in the DOM hierarchy?",
    "question_hi": "DOM हाइरार्की में दो नोड्स की स्थिति की तुलना करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["cloneNode()", "compareDocumentPosition()", "getFeature()", "getUserData()"],
    "options_hi": ["cloneNode()", "compareDocumentPosition()", "getFeature()", "getUserData()"],
    "answer_en": "compareDocumentPosition()",
    "answer_hi": "compareDocumentPosition()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of the following is used to generate UUIDs in Node.js?",
    "question_hi": "Node.js में UUIDs उत्पन्न करने के लिए कौन सा उपयोग होता है?",
    "options_en": ["uuid()", "uuidv1()", "uuidv4()", "All of the above"],
    "options_hi": ["uuid()", "uuidv1()", "uuidv4()", "इनमें से सभी"],
    "answer_en": "All of the above",
    "answer_hi": "इनमें से सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of the following is used to encrypt data in Node.js?",
    "question_hi": "Node.js में डेटा को एन्क्रिप्ट करने के लिए कौन सा उपयोग होता है?",
    "options_en": ["crypto.createCipher()", "crypto.encrypt()", "crypto.hash()", "crypto.encode()"],
    "options_hi": ["crypto.createCipher()", "crypto.encrypt()", "crypto.hash()", "crypto.encode()"],
    "answer_en": "crypto.createCipher()",
    "answer_hi": "crypto.createCipher()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of the following is used to decrypt data in Node.js?",
    "question_hi": "Node.js में डेटा को डिक्रिप्ट करने के लिए कौन सा उपयोग होता है?",
    "options_en": ["crypto.createDecipher()", "crypto.decrypt()", "crypto.hash()", "crypto.encode()"],
    "options_hi": ["crypto.createDecipher()", "crypto.decrypt()", "crypto.hash()", "crypto.encode()"],
    "answer_en": "crypto.createDecipher()",
    "answer_hi": "crypto.createDecipher()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which of the following is used to generate secure passwords in Node.js?",
    "question_hi": "Node.js में सुरक्षित पासवर्ड उत्पन्न करने के लिए कौन सा उपयोग होता है?",
    "options_en": ["bcrypt", "md5", "sha256", "all of the above"],
    "options_hi": ["bcrypt", "md5", "sha256", "इनमें से सभी"],
    "answer_en": "bcrypt",
    "answer_hi": "bcrypt",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which of the following is used to manipulate dates and times in Node.js?",
    "question_hi": "Node.js में तिथियों और समयों को संशोधित करने के लिए कौन सा उपयोग होता है?",
    "options_en": ["moment.js", "date.js", "time.js", "datetime.js"],
    "options_hi": ["moment.js", "date.js", "time.js", "datetime.js"],
    "answer_en": "moment.js",
    "answer_hi": "moment.js",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of the following is used to send email in Node.js?",
    "question_hi": "Node.js में ईमेल भेजने के लिए कौन सा उपयोग होता है?",
    "options_en": ["nodemailer", "email.js", "sendmail", "all of the above"],
    "options_hi": ["nodemailer", "email.js", "sendmail", "इनमें से सभी"],
    "answer_en": "nodemailer",
    "answer_hi": "nodemailer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which of the following is used to handle errors in Node.js?",
    "question_hi": "Node.js में त्रुटियों को हैंडल करने के लिए कौन सा उपयोग होता है?",
    "options_en": ["try/catch", "throw", "assert", "all of the above"],
    "options_hi": ["try/catch", "throw", "assert", "इनमें से सभी"],
    "answer_en": "all of the above",
    "answer_hi": "इनमें से सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of the following is used to generate random numbers in Node.js?",
    "question_hi": "Node.js में रैंडम नंबर उत्पन्न करने के लिए कौन सा उपयोग होता है?",
    "options_en": ["Math.random()", "random()", "random.int()", "Math.random.int()"],
    "options_hi": ["Math.random()", "random()", "random.int()", "Math.random.int()"],
    "answer_en": "Math.random()",
    "answer_hi": "Math.random()",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 12,
    "question_en": "Which method is used to join multiple path segments into a single path in Node.js?",
    "question_hi": "Node.js में कई पथ खंडों को एकल पथ में जोड़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["path.join()", "path.combine()", "path.concat()", "path.merge()"],
    "options_hi": ["path.join()", "path.combine()", "path.concat()", "path.merge()"],
    "answer_en": "path.join()",
    "answer_hi": "path.join()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method is used to get the file extension in Node.js?",
    "question_hi": "Node.js में फाइल एक्सटेंशन प्राप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["path.extname()", "path.extension()", "path.getExt()", "path.fileExt()"],
    "options_hi": ["path.extname()", "path.extension()", "path.getExt()", "path.fileExt()"],
    "answer_en": "path.extname()",
    "answer_hi": "path.extname()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which method is used to get the directory name of a path in Node.js?",
    "question_hi": "Node.js में पथ का निर्देशिका नाम प्राप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["path.dirname()", "path.directory()", "path.getDir()", "path.dirName()"],
    "options_hi": ["path.dirname()", "path.directory()", "path.getDir()", "path.dirName()"],
    "answer_en": "path.dirname()",
    "answer_hi": "path.dirname()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method is used to get the base name of a file in Node.js?",
    "question_hi": "Node.js में फाइल का बेस नाम प्राप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["path.basename()", "path.base()", "path.getBaseName()", "path.fileName()"],
    "options_hi": ["path.basename()", "path.base()", "path.getBaseName()", "path.fileName()"],
    "answer_en": "path.basename()",
    "answer_hi": "path.basename()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which method is used to check if a path is absolute in Node.js?",
    "question_hi": "Node.js में यह जांचने के लिए कौन सी विधि उपयोग होती है कि पथ पूर्ण है या नहीं?",
    "options_en": ["path.isAbsolute()", "path.checkAbsolute()", "path.fullPath()", "path.isFull()"],
    "options_hi": ["path.isAbsolute()", "path.checkAbsolute()", "path.fullPath()", "path.isFull()"],
    "answer_en": "path.isAbsolute()",
    "answer_hi": "path.isAbsolute()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method is used to normalize a path in Node.js?",
    "question_hi": "Node.js में पथ को सामान्य बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["path.normalize()", "path.standardize()", "path.clean()", "path.format()"],
    "options_hi": ["path.normalize()", "path.standardize()", "path.clean()", "path.format()"],
    "answer_en": "path.normalize()",
    "answer_hi": "path.normalize()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which method is used to resolve a sequence of paths into an absolute path in Node.js?",
    "question_hi": "Node.js में पथों की एक श्रृंखला को पूर्ण पथ में हल करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["path.resolve()", "path.resolvePath()", "path.absolute()", "path.fullPath()"],
    "options_hi": ["path.resolve()", "path.resolvePath()", "path.absolute()", "path.fullPath()"],
    "answer_en": "path.resolve()",
    "answer_hi": "path.resolve()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method is used to check if a path exists in Node.js?",
    "question_hi": "Node.js में यह जांचने के लिए कौन सी विधि उपयोग होती है कि पथ मौजूद है या नहीं?",
    "options_en": ["fs.existsSync()", "fs.exists()", "fs.checkPath()", "fs.isExist()"],
    "options_hi": ["fs.existsSync()", "fs.exists()", "fs.checkPath()", "fs.isExist()"],
    "answer_en": "fs.existsSync()",
    "answer_hi": "fs.existsSync()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which method is used to read the contents of a directory in Node.js?",
    "question_hi": "Node.js में निर्देशिका की सामग्री पढ़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.readdir()", "fs.readDir()", "fs.listDir()", "fs.getDir()"],
    "options_hi": ["fs.readdir()", "fs.readDir()", "fs.listDir()", "fs.getDir()"],
    "answer_en": "fs.readdir()",
    "answer_hi": "fs.readdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method is used to create a new directory in Node.js?",
    "question_hi": "Node.js में नया निर्देशिका बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.makeDir()"],
    "options_hi": ["fs.mkdir()", "fs.createDir()", "fs.newDir()", "fs.makeDir()"],
    "answer_en": "fs.mkdir()",
    "answer_hi": "fs.mkdir()",
    "attempted": false,
    "selected": ""
  },
 
  {
    "num": 22,
    "question_en": "Which method is used to remove a directory in Node.js?",
    "question_hi": "Node.js में निर्देशिका हटाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.rmdir()", "fs.removeDir()", "fs.deleteDir()", "fs.removeDirectory()"],
    "options_hi": ["fs.rmdir()", "fs.removeDir()", "fs.deleteDir()", "fs.removeDirectory()"],
    "answer_en": "fs.rmdir()",
    "answer_hi": "fs.rmdir()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which method is used to rename a file or directory in Node.js?",
    "question_hi": "Node.js में फाइल या निर्देशिका का नाम बदलने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.rename()", "fs.renameFile()", "fs.changeName()", "fs.move()"],
    "options_hi": ["fs.rename()", "fs.renameFile()", "fs.changeName()", "fs.move()"],
    "answer_en": "fs.rename()",
    "answer_hi": "fs.rename()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which method is used to copy a file in Node.js?",
    "question_hi": "Node.js में फाइल की कॉपी करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.copyFile()", "fs.copy()", "fs.cloneFile()", "fs.duplicate()"],
    "options_hi": ["fs.copyFile()", "fs.copy()", "fs.cloneFile()", "fs.duplicate()"],
    "answer_en": "fs.copyFile()",
    "answer_hi": "fs.copyFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method is used to append data to a file in Node.js?",
    "question_hi": "Node.js में फाइल में डेटा जोड़ने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.appendFile()", "fs.addData()", "fs.writeFile()", "fs.insertData()"],
    "options_hi": ["fs.appendFile()", "fs.addData()", "fs.writeFile()", "fs.insertData()"],
    "answer_en": "fs.appendFile()",
    "answer_hi": "fs.appendFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which method is used to create a readable stream in Node.js?",
    "question_hi": "Node.js में पठनीय स्ट्रीम बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.createReadStream()", "fs.createStream()", "fs.readStream()", "fs.openRead()"],
    "options_hi": ["fs.createReadStream()", "fs.createStream()", "fs.readStream()", "fs.openRead()"],
    "answer_en": "fs.createReadStream()",
    "answer_hi": "fs.createReadStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method is used to create a writable stream in Node.js?",
    "question_hi": "Node.js में लेखनीय स्ट्रीम बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.createWriteStream()", "fs.writeStream()", "fs.createStream()", "fs.openWrite()"],
    "options_hi": ["fs.createWriteStream()", "fs.writeStream()", "fs.createStream()", "fs.openWrite()"],
    "answer_en": "fs.createWriteStream()",
    "answer_hi": "fs.createWriteStream()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which method is used to watch for changes in a file in Node.js?",
    "question_hi": "Node.js में फाइल में परिवर्तनों के लिए निगरानी रखने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.watch()", "fs.monitor()", "fs.watchFile()", "fs.observe()"],
    "options_hi": ["fs.watch()", "fs.monitor()", "fs.watchFile()", "fs.observe()"],
    "answer_en": "fs.watch()",
    "answer_hi": "fs.watch()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method is used to watch for changes in a file with more detailed information in Node.js?",
    "question_hi": "Node.js में फाइल में परिवर्तनों के लिए अधिक विस्तृत जानकारी के साथ निगरानी रखने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.watchFile()", "fs.watch()", "fs.monitorFile()", "fs.observeFile()"],
    "options_hi": ["fs.watchFile()", "fs.watch()", "fs.monitorFile()", "fs.observeFile()"],
    "answer_en": "fs.watchFile()",
    "answer_hi": "fs.watchFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which method is used to unwatch a file in Node.js?",
    "question_hi": "Node.js में फाइल की निगरानी को रोकने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.unwatchFile()", "fs.stopWatch()", "fs.removeWatch()", "fs.cancelWatch()"],
    "options_hi": ["fs.unwatchFile()", "fs.stopWatch()", "fs.removeWatch()", "fs.cancelWatch()"],
    "answer_en": "fs.unwatchFile()",
    "answer_hi": "fs.unwatchFile()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which method is used to get the real path of a file in Node.js?",
    "question_hi": "Node.js में फाइल का वास्तविक पथ प्राप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.realpath()", "fs.getRealPath()", "fs.absolutePath()", "fs.getPath()"],
    "options_hi": ["fs.realpath()", "fs.getRealPath()", "fs.absolutePath()", "fs.getPath()"],
    "answer_en": "fs.realpath()",
    "answer_hi": "fs.realpath()",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 32,
    "question_en": "Which method is used to get the stats of a file in Node.js?",
    "question_hi": "Node.js में फाइल की स्थिति प्राप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["fs.stat()", "fs.status()", "fs.info()", "fs.fileInfo()"],
    "options_hi": ["fs.stat()", "fs.status()", "fs.info()", "fs.fileInfo()"],
    "answer_en": "fs.stat()",
    "answer_hi": "fs.stat()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method is used to check if a given path is a directory in Node.js?",
    "question_hi": "Node.js में यह जांचने के लिए कौन सी विधि उपयोग होती है कि पथ एक निर्देशिका है?",
    "options_en": ["fs.stat().isDirectory()", "fs.isDir()", "fs.directory()", "fs.pathIsDir()"],
    "options_hi": ["fs.stat().isDirectory()", "fs.isDir()", "fs.directory()", "fs.pathIsDir()"],
    "answer_en": "fs.stat().isDirectory()",
    "answer_hi": "fs.stat().isDirectory()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which module is used to create a web server in Node.js?",
    "question_hi": "Node.js में वेब सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["http", "fs", "url", "querystring"],
    "options_hi": ["http", "fs", "url", "querystring"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method is used to send a response back to the client in an HTTP server?",
    "question_hi": "HTTP सर्वर में क्लाइंट को प्रतिक्रिया भेजने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["res.end()", "res.send()", "res.write()", "res.close()"],
    "options_hi": ["res.end()", "res.send()", "res.write()", "res.close()"],
    "answer_en": "res.end()",
    "answer_hi": "res.end()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which event is emitted when a stream ends in Node.js?",
    "question_hi": "Node.js में जब स्ट्रीम समाप्त होती है तो कौन सा इवेंट ट्रिगर होता है?",
    "options_en": ["end", "close", "finish", "terminate"],
    "options_hi": ["end", "close", "finish", "terminate"],
    "answer_en": "end",
    "answer_hi": "end",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which core module is used for compression in Node.js?",
    "question_hi": "Node.js में कंप्रेशन के लिए कौन सा कोर मॉड्यूल उपयोग होता है?",
    "options_en": ["zlib", "gzip", "compress", "archive"],
    "options_hi": ["zlib", "gzip", "compress", "archive"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which function is used to schedule a function call in the next event loop iteration?",
    "question_hi": "अगले इवेंट लूप इटरेशन में फंक्शन कॉल को शेड्यूल करने के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["setImmediate()", "setTimeout()", "process.nextTick()", "setInterval()"],
    "options_hi": ["setImmediate()", "setTimeout()", "process.nextTick()", "setInterval()"],
    "answer_en": "setImmediate()",
    "answer_hi": "setImmediate()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which global object is used to handle the current Node.js process?",
    "question_hi": "वर्तमान Node.js प्रोसेस को नियंत्रित करने के लिए कौन सा ग्लोबल ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["process", "global", "os", "module"],
    "options_hi": ["process", "global", "os", "module"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which method is used to exit a Node.js process?",
    "question_hi": "Node.js प्रोसेस से बाहर निकलने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["process.exit()", "process.kill()", "exit()", "terminate()"],
    "options_hi": ["process.exit()", "process.kill()", "exit()", "terminate()"],
    "answer_en": "process.exit()",
    "answer_hi": "process.exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which module provides operating system-related utility methods and properties?",
    "question_hi": "कौन सा मॉड्यूल ऑपरेटिंग सिस्टम से संबंधित यूटिलिटी मेथड और प्रॉपर्टीज प्रदान करता है?",
    "options_en": ["os", "fs", "process", "system"],
    "options_hi": ["os", "fs", "process", "system"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which method is used to get the hostname of the operating system in Node.js?",
    "question_hi": "Node.js में ऑपरेटिंग सिस्टम का होस्टनेम प्राप्त करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["os.hostname()", "os.getHostname()", "os.name()", "os.host()"],
    "options_hi": ["os.hostname()", "os.getHostname()", "os.name()", "os.host()"],
    "answer_en": "os.hostname()",
    "answer_hi": "os.hostname()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which module is used for cryptographic functionality in Node.js?",
    "question_hi": "Node.js में क्रिप्टोग्राफिक फंक्शनलिटी के लिए कौन सा मॉड्यूल उपयोग होता है?",
    "options_en": ["crypto", "cipher", "secure", "hash"],
    "options_hi": ["crypto", "cipher", "secure", "hash"],
    "answer_en": "crypto",
    "answer_hi": "crypto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which method is used to hash data using SHA256 in Node.js?",
    "question_hi": "Node.js में SHA256 का उपयोग करके डेटा हैश करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["crypto.createHash('sha256')", "crypto.sha256()", "crypto.hashSha256()", "crypto.digest('sha256')"],
    "options_hi": ["crypto.createHash('sha256')", "crypto.sha256()", "crypto.hashSha256()", "crypto.digest('sha256')"],
    "answer_en": "crypto.createHash('sha256')",
    "answer_hi": "crypto.createHash('sha256')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which core module is used to work with child processes in Node.js?",
    "question_hi": "Node.js में चाइल्ड प्रोसेस के साथ काम करने के लिए कौन सा कोर मॉड्यूल उपयोग होता है?",
    "options_en": ["child_process", "process", "worker", "os"],
    "options_hi": ["child_process", "process", "worker", "os"],
    "answer_en": "child_process",
    "answer_hi": "child_process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which method is used to execute a shell command in Node.js?",
    "question_hi": "Node.js में शेल कमांड को निष्पादित करने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["exec()", "run()", "spawn()", "command()"],
    "options_hi": ["exec()", "run()", "spawn()", "command()"],
    "answer_en": "exec()",
    "answer_hi": "exec()",
    "attempted": false,
    "selected": ""
  },
 {
  "num": 47,
  "question_en": "Which Node.js module is used to create secure HTTPS servers?",
  "question_hi": "Node.js में सुरक्षित HTTPS सर्वर बनाने के लिए कौन सा मॉड्यूल उपयोग होता है?",
  "options_en": ["https", "http", "tls", "crypto"],
  "options_hi": ["https", "http", "tls", "crypto"],
  "answer_en": "https",
  "answer_hi": "https",
  "attempted": false,
  "selected": ""
},

  {
    "num": 48,
    "question_en": "Which method is used to create a buffer from a string in Node.js?",
    "question_hi": "Node.js में किसी स्ट्रिंग से बफर बनाने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["Buffer.from()", "Buffer.create()", "Buffer.alloc()", "Buffer.make()"],
    "options_hi": ["Buffer.from()", "Buffer.create()", "Buffer.alloc()", "Buffer.make()"],
    "answer_en": "Buffer.from()",
    "answer_hi": "Buffer.from()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method is used to convert a buffer to string in Node.js?",
    "question_hi": "Node.js में बफर को स्ट्रिंग में बदलने के लिए कौन सी विधि उपयोग होती है?",
    "options_en": ["buffer.toString()", "buffer.stringify()", "buffer.convert()", "buffer.toText()"],
    "options_hi": ["buffer.toString()", "buffer.stringify()", "buffer.convert()", "buffer.toText()"],
    "answer_en": "buffer.toString()",
    "answer_hi": "buffer.toString()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which statement is true about Node.js?",
    "question_hi": "Node.js के बारे में कौन सा कथन सही है?",
    "options_en": [
      "It is single-threaded and non-blocking",
      "It is multi-threaded and blocking",
      "It runs in the browser",
      "It is only used for frontend development"
    ],
    "options_hi": [
      "यह सिंगल-थ्रेडेड और नॉन-ब्लॉकिंग है",
      "यह मल्टी-थ्रेडेड और ब्लॉकिंग है",
      "यह ब्राउज़र में चलता है",
      "यह केवल फ्रंटएंड विकास के लिए उपयोग किया जाता है"
    ],
    "answer_en": "It is single-threaded and non-blocking",
    "answer_hi": "यह सिंगल-थ्रेडेड और नॉन-ब्लॉकिंग है",
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