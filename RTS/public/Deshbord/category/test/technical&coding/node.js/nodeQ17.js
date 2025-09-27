const questions=[
  {
    "num": 1,
    "question_en": "Which method is used to create a new EventEmitter instance in Node.js?",
    "question_hi": "Node.js में नया EventEmitter इंस्टेंस बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["new events.EventEmitter()", "events.createEmitter()", "EventEmitter.init()", "new EventEmitter()"],
    "options_hi": ["new events.EventEmitter()", "events.createEmitter()", "EventEmitter.init()", "new EventEmitter()"],
    "answer_en": "new events.EventEmitter()",
    "answer_hi": "new events.EventEmitter()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which method is used to register an event listener in Node.js?",
    "question_hi": "Node.js में इवेंट लिसनर रजिस्टर करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["emitter.on()", "emitter.addListener()", "emitter.listen()", "Both A and B"],
    "options_hi": ["emitter.on()", "emitter.addListener()", "emitter.listen()", "A और B दोनों"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which module provides utilities for working with file and directory paths?",
    "question_hi": "फाइल और डायरेक्टरी पाथ के साथ काम करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["path", "fs", "os", "util"],
    "options_hi": ["path", "fs", "os", "util"],
    "answer_en": "path",
    "answer_hi": "path",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which method joins all given path segments together using the platform-specific separator?",
    "question_hi": "कौन सी मेथड प्लेटफॉर्म-स्पेसिफिक सेपरेटर का उपयोग करके सभी दिए गए पाथ सेगमेंट्स को जोड़ती है?",
    "options_en": ["path.join()", "path.resolve()", "path.normalize()", "path.concat()"],
    "options_hi": ["path.join()", "path.resolve()", "path.normalize()", "path.concat()"],
    "answer_en": "path.join()",
    "answer_hi": "path.join()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which method is used to schedule a callback to be called in the next iteration of the event loop?",
    "question_hi": "इवेंट लूप के अगले इटरेशन में कॉलबैक को कॉल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["process.nextTick()", "setImmediate()", "setTimeout()", "queueMicrotask()"],
    "options_hi": ["process.nextTick()", "setImmediate()", "setTimeout()", "queueMicrotask()"],
    "answer_en": "process.nextTick()",
    "answer_hi": "process.nextTick()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of these is NOT a built-in module in Node.js?",
    "question_hi": "निम्नलिखित में से कौन सा Node.js का बिल्ट-इन मॉड्यूल नहीं है?",
    "options_en": ["express", "http", "events", "stream"],
    "options_hi": ["express", "http", "events", "stream"],
    "answer_en": "express",
    "answer_hi": "express",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which method is used to create a readable stream in Node.js?",
    "question_hi": "Node.js में रीडेबल स्ट्रीम बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["fs.createReadStream()", "stream.Readable()", "new ReadableStream()", "Both A and B"],
    "options_hi": ["fs.createReadStream()", "stream.Readable()", "new ReadableStream()", "A और B दोनों"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the default encoding for Buffer.toString() in Node.js?",
    "question_hi": "Node.js में Buffer.toString() के लिए डिफ़ॉल्ट एन्कोडिंग क्या है?",
    "options_en": ["utf8", "ascii", "base64", "hex"],
    "options_hi": ["utf8", "ascii", "base64", "hex"],
    "answer_en": "utf8",
    "answer_hi": "utf8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which method is used to create a new Buffer from a string?",
    "question_hi": "स्ट्रिंग से नया बफर बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["Buffer.from()", "Buffer.alloc()", "Buffer.new()", "Buffer.create()"],
    "options_hi": ["Buffer.from()", "Buffer.alloc()", "Buffer.new()", "Buffer.create()"],
    "answer_en": "Buffer.from()",
    "answer_hi": "Buffer.from()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which module provides DNS resolution facilities in Node.js?",
    "question_hi": "Node.js में DNS रेजोल्यूशन सुविधाएँ कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["dns", "net", "http", "url"],
    "options_hi": ["dns", "net", "http", "url"],
    "answer_en": "dns",
    "answer_hi": "dns",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which method is used to resolve a hostname to an IP address in Node.js?",
    "question_hi": "Node.js में होस्टनेम को IP एड्रेस में रेजोल्व करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["dns.lookup()", "dns.resolve()", "dns.getHostByName()", "net.resolve()"],
    "options_hi": ["dns.lookup()", "dns.resolve()", "dns.getHostByName()", "net.resolve()"],
    "answer_en": "dns.lookup()",
    "answer_hi": "dns.lookup()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which module provides utilities for debugging in Node.js?",
    "question_hi": "Node.js में डिबगिंग के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["util", "debugger", "inspect", "console"],
    "options_hi": ["util", "debugger", "inspect", "console"],
    "answer_en": "util",
    "answer_hi": "util",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which method is used to inspect an object in Node.js?",
    "question_hi": "Node.js में ऑब्जेक्ट का इंस्पेक्शन करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["util.inspect()", "console.inspect()", "Object.inspect()", "debug.inspect()"],
    "options_hi": ["util.inspect()", "console.inspect()", "Object.inspect()", "debug.inspect()"],
    "answer_en": "util.inspect()",
    "answer_hi": "util.inspect()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which module provides zlib compression/decompression in Node.js?",
    "question_hi": "Node.js में zlib कम्प्रेशन/डिकम्प्रेशन कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["zlib", "compress", "gzip", "deflate"],
    "options_hi": ["zlib", "compress", "gzip", "deflate"],
    "answer_en": "zlib",
    "answer_hi": "zlib",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which method is used to create a Gzip stream in Node.js?",
    "question_hi": "Node.js में Gzip स्ट्रीम बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["zlib.createGzip()", "zlib.gzip()", "zlib.compress()", "gzip.create()"],
    "options_hi": ["zlib.createGzip()", "zlib.gzip()", "zlib.compress()", "gzip.create()"],
    "answer_en": "zlib.createGzip()",
    "answer_hi": "zlib.createGzip()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which module provides cluster capabilities in Node.js?",
    "question_hi": "Node.js में क्लस्टर क्षमताएँ कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["cluster", "child_process", "worker_threads", "multi"],
    "options_hi": ["cluster", "child_process", "worker_threads", "multi"],
    "answer_en": "cluster",
    "answer_hi": "cluster",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which method is used to fork a new worker process in the cluster module?",
    "question_hi": "क्लस्टर मॉड्यूल में नया वर्कर प्रोसेस फोर्क करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["cluster.fork()", "cluster.create()", "cluster.spawn()", "cluster.new()"],
    "options_hi": ["cluster.fork()", "cluster.create()", "cluster.spawn()", "cluster.new()"],
    "answer_en": "cluster.fork()",
    "answer_hi": "cluster.fork()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which module provides VM (Virtual Machine) capabilities in Node.js?",
    "question_hi": "Node.js में VM (वर्चुअल मशीन) क्षमताएँ कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["vm", "virtual_machine", "sandbox", "script"],
    "options_hi": ["vm", "virtual_machine", "sandbox", "script"],
    "answer_en": "vm",
    "answer_hi": "vm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which method is used to run code in a V8 virtual machine context?",
    "question_hi": "V8 वर्चुअल मशीन कॉन्टेक्स्ट में कोड रन करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["vm.runInContext()", "vm.execute()", "vm.run()", "vm.createContext()"],
    "options_hi": ["vm.runInContext()", "vm.execute()", "vm.run()", "vm.createContext()"],
    "answer_en": "vm.runInContext()",
    "answer_hi": "vm.runInContext()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which module provides performance measurement utilities in Node.js?",
    "question_hi": "Node.js में परफॉरमेंस मापन यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["perf_hooks", "performance", "benchmark", "timer"],
    "options_hi": ["perf_hooks", "performance", "benchmark", "timer"],
    "answer_en": "perf_hooks",
    "answer_hi": "perf_hooks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which method is used to mark the start of a performance measurement?",
    "question_hi": "परफॉरमेंस मापन की शुरुआत को मार्क करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["performance.mark()", "performance.start()", "performance.begin()", "performance.measure()"],
    "options_hi": ["performance.mark()", "performance.start()", "performance.begin()", "performance.measure()"],
    "answer_en": "performance.mark()",
    "answer_hi": "performance.mark()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which module provides access to the system's TLS/SSL implementation?",
    "question_hi": "सिस्टम की TLS/SSL इम्प्लीमेंटेशन तक पहुँच कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["tls", "ssl", "crypto", "https"],
    "options_hi": ["tls", "ssl", "crypto", "https"],
    "answer_en": "tls",
    "answer_hi": "tls",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which method is used to create a TLS server in Node.js?",
    "question_hi": "Node.js में TLS सर्वर बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["tls.createServer()", "tls.Server()", "tls.listen()", "tls.init()"],
    "options_hi": ["tls.createServer()", "tls.Server()", "tls.listen()", "tls.init()"],
    "answer_en": "tls.createServer()",
    "answer_hi": "tls.createServer()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which module provides REPL (Read-Eval-Print-Loop) functionality?",
    "question_hi": "REPL (रीड-ईवल-प्रिंट-लूप) फंक्शनैलिटी कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["repl", "console", "readline", "terminal"],
    "options_hi": ["repl", "console", "readline", "terminal"],
    "answer_en": "repl",
    "answer_hi": "repl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which method is used to start the Node.js REPL programmatically?",
    "question_hi": "Node.js REPL को प्रोग्रामेटिकली स्टार्ट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["repl.start()", "repl.init()", "repl.create()", "repl.run()"],
    "options_hi": ["repl.start()", "repl.init()", "repl.create()", "repl.run()"],
    "answer_en": "repl.start()",
    "answer_hi": "repl.start()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which module provides utilities for handling binary data?",
    "question_hi": "बाइनरी डेटा को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["buffer", "binary", "data", "stream"],
    "options_hi": ["buffer", "binary", "data", "stream"],
    "answer_en": "buffer",
    "answer_hi": "buffer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method is used to allocate a new Buffer of specified size?",
    "question_hi": "निर्दिष्ट साइज का नया बफर अलोकेट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["Buffer.alloc()", "Buffer.new()", "Buffer.create()", "Buffer(size)"],
    "options_hi": ["Buffer.alloc()", "Buffer.new()", "Buffer.create()", "Buffer(size)"],
    "answer_en": "Buffer.alloc()",
    "answer_hi": "Buffer.alloc()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which module provides utilities for handling query strings?",
    "question_hi": "क्वेरी स्ट्रिंग्स को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["querystring", "url", "http", "params"],
    "options_hi": ["querystring", "url", "http", "params"],
    "answer_en": "querystring",
    "answer_hi": "querystring",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which method is used to parse a query string into an object?",
    "question_hi": "क्वेरी स्ट्रिंग को ऑब्जेक्ट में पार्स करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["querystring.parse()", "querystring.decode()", "querystring.toObject()", "querystring.read()"],
    "options_hi": ["querystring.parse()", "querystring.decode()", "querystring.toObject()", "querystring.read()"],
    "answer_en": "querystring.parse()",
    "answer_hi": "querystring.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which module provides utilities for handling URLs?",
    "question_hi": "URLs को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["url", "http", "querystring", "uri"],
    "options_hi": ["url", "http", "querystring", "uri"],
    "answer_en": "url",
    "answer_hi": "url",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which method is used to parse a URL string into an object?",
    "question_hi": "URL स्ट्रिंग को ऑब्जेक्ट में पार्स करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["url.parse()", "url.decode()", "url.toObject()", "url.read()"],
    "options_hi": ["url.parse()", "url.decode()", "url.toObject()", "url.read()"],
    "answer_en": "url.parse()",
    "answer_hi": "url.parse()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which module provides utilities for handling operating system signals?",
    "question_hi": "ऑपरेटिंग सिस्टम सिग्नल्स को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["process", "os", "signal", "events"],
    "options_hi": ["process", "os", "signal", "events"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which method is used to handle SIGINT signal in Node.js?",
    "question_hi": "Node.js में SIGINT सिग्नल को हैंडल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["process.on('SIGINT')", "process.handleSignal()", "process.signal()", "process.interrupt()"],
    "options_hi": ["process.on('SIGINT')", "process.handleSignal()", "process.signal()", "process.interrupt()"],
    "answer_en": "process.on('SIGINT')",
    "answer_hi": "process.on('SIGINT')",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which module provides utilities for handling worker threads?",
    "question_hi": "वर्कर थ्रेड्स को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["worker_threads", "cluster", "child_process", "thread"],
    "options_hi": ["worker_threads", "cluster", "child_process", "thread"],
    "answer_en": "worker_threads",
    "answer_hi": "worker_threads",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which method is used to create a new worker thread?",
    "question_hi": "नया वर्कर थ्रेड बनाने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["new Worker()", "worker_threads.create()", "worker_threads.spawn()", "worker_threads.fork()"],
    "options_hi": ["new Worker()", "worker_threads.create()", "worker_threads.spawn()", "worker_threads.fork()"],
    "answer_en": "new Worker()",
    "answer_hi": "new Worker()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which module provides utilities for handling console output?",
    "question_hi": "कंसोल आउटपुट को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["console", "util", "stdout", "terminal"],
    "options_hi": ["console", "util", "stdout", "terminal"],
    "answer_en": "console",
    "answer_hi": "console",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which method is used to print to stdout without newline in Node.js?",
    "question_hi": "Node.js में न्यूलाइन के बिना stdout पर प्रिंट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["process.stdout.write()", "console.print()", "console.write()", "stdout.log()"],
    "options_hi": ["process.stdout.write()", "console.print()", "console.write()", "stdout.log()"],
    "answer_en": "process.stdout.write()",
    "answer_hi": "process.stdout.write()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which module provides utilities for handling assertions?",
    "question_hi": "असर्शन्स को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["assert", "test", "validation", "check"],
    "options_hi": ["assert", "test", "validation", "check"],
    "answer_en": "assert",
    "answer_hi": "assert",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which method is used to test if a value is truthy in assertions?",
    "question_hi": "असर्शन्स में यह टेस्ट करने के लिए कि कोई वैल्यू ट्रुथी है, कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["assert.ok()", "assert.true()", "assert.truthy()", "assert.valid()"],
    "options_hi": ["assert.ok()", "assert.true()", "assert.truthy()", "assert.valid()"],
    "answer_en": "assert.ok()",
    "answer_hi": "assert.ok()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which module provides utilities for handling timers?",
    "question_hi": "टाइमर्स को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["timers", "setTimeout", "global", "events"],
    "options_hi": ["timers", "setTimeout", "global", "events"],
    "answer_en": "timers",
    "answer_hi": "timers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which method is used to schedule repeated execution of a callback?",
    "question_hi": "कॉलबैक के रिपीटेड एक्जीक्यूशन को शेड्यूल करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["setInterval()", "setRepeat()", "setRecurring()", "repeat()"],
    "options_hi": ["setInterval()", "setRepeat()", "setRecurring()", "repeat()"],
    "answer_en": "setInterval()",
    "answer_hi": "setInterval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which module provides utilities for handling process-related operations?",
    "question_hi": "प्रोसेस-संबंधित ऑपरेशन्स को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["process", "os", "child_process", "worker"],
    "options_hi": ["process", "os", "child_process", "worker"],
    "answer_en": "process",
    "answer_hi": "process",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which property contains the command-line arguments in Node.js?",
    "question_hi": "Node.js में कमांड-लाइन आर्ग्युमेंट्स किस प्रॉपर्टी में होते हैं?",
    "options_en": ["process.argv", "process.args", "process.arguments", "process.params"],
    "options_hi": ["process.argv", "process.args", "process.arguments", "process.params"],
    "answer_en": "process.argv",
    "answer_hi": "process.argv",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which module provides utilities for handling operating system information?",
    "question_hi": "ऑपरेटिंग सिस्टम इन्फॉर्मेशन को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["os", "system", "process", "platform"],
    "options_hi": ["os", "system", "process", "platform"],
    "answer_en": "os",
    "answer_hi": "os",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which method returns the system uptime in seconds?",
    "question_hi": "सिस्टम अपटाइम को सेकंड्स में रिटर्न करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["os.uptime()", "os.boottime()", "os.runtime()", "os.systemUp()"],
    "options_hi": ["os.uptime()", "os.boottime()", "os.runtime()", "os.systemUp()"],
    "answer_en": "os.uptime()",
    "answer_hi": "os.uptime()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which module provides utilities for handling file system operations?",
    "question_hi": "फाइल सिस्टम ऑपरेशन्स को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["fs", "file", "path", "os"],
    "options_hi": ["fs", "file", "path", "os"],
    "answer_en": "fs",
    "answer_hi": "fs",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which method is used to rename a file in Node.js?",
    "question_hi": "Node.js में फाइल का नाम बदलने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["fs.rename()", "fs.move()", "fs.renameFile()", "fs.changeName()"],
    "options_hi": ["fs.rename()", "fs.move()", "fs.renameFile()", "fs.changeName()"],
    "answer_en": "fs.rename()",
    "answer_hi": "fs.rename()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which module provides utilities for handling HTTP requests?",
    "question_hi": "HTTP रिक्वेस्ट्स को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["http", "https", "request", "net"],
    "options_hi": ["http", "https", "request", "net"],
    "answer_en": "http",
    "answer_hi": "http",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which method is used to make an HTTP GET request in Node.js?",
    "question_hi": "Node.js में HTTP GET रिक्वेस्ट करने के लिए कौन सी मेथड उपयोग की जाती है?",
    "options_en": ["http.get()", "http.request()", "http.fetch()", "http.call()"],
    "options_hi": ["http.get()", "http.request()", "http.fetch()", "http.call()"],
    "answer_en": "http.get()",
    "answer_hi": "http.get()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which module provides utilities for handling HTTPS requests?",
    "question_hi": "HTTPS रिक्वेस्ट्स को हैंडल करने के लिए यूटिलिटीज कौन सा मॉड्यूल प्रदान करता है?",
    "options_en": ["https", "http", "tls", "ssl"],
    "options_hi": ["https", "http", "tls", "ssl"],
    "answer_en": "https",
    "answer_hi": "https",
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