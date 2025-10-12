const questions = [
  {
    num: 1,
    question_en: "Who is the author of 'The Last Lesson'?",
    question_hi: "'The Last Lesson' के लेखक कौन हैं?",
    options_en: ["Alphonse Daudet", "Louis Pasteur", "Victor Hugo", "Guy de Maupassant"],
    options_hi: ["अल्फॉन्स डोडे", "लुई पास्चर", "विक्टर ह्यूगो", "गाई डी मोपासन"],
    answer_en: "Alphonse Daudet",
    answer_hi: "अल्फॉन्स डोडे",
    attempted: false,
    selected: null
  },
  {
    num: 2,
    question_en: "Who wrote the story 'Lost Spring'?",
    question_hi: "'Lost Spring' कहानी किसने लिखी है?",
    options_en: ["Amitav Ghosh", "Rabindranath Tagore", "Amitav Ghosh", "Ruskin Bond"],
    options_hi: ["अमिताव घोष", "रबीन्द्रनाथ टैगोर", "अमिताव घोष", "रसकिन बॉन्ड"],
    answer_en: "Amitav Ghosh",
    answer_hi: "अमिताव घोष",
    attempted: false,
    selected: null
  },
  {
    num: 3,
    question_en: "Who is the author of 'Deep Water'?",
    question_hi: "'Deep Water' के लेखक कौन हैं?",
    options_en: ["William Douglas", "Mark Twain", "Charles Dickens", "Leo Tolstoy"],
    options_hi: ["विलियम डगलस", "मार्क ट्वेन", "चार्ल्स डिकेंस", "लियो टॉलस्टॉय"],
    answer_en: "William Douglas",
    answer_hi: "विलियम डगलस",
    attempted: false,
    selected: null
  },
  {
    num: 4,
    question_en: "Who wrote the story 'The Rattrap'?",
    question_hi: "'The Rattrap' कहानी किसने लिखी है?",
    options_en: ["Selma Lagerlof", "Jane Austen", "Charles Dickens", "Rabindranath Tagore"],
    options_hi: ["सेल्मा लागरलेफ", "जेन ऑस्टेन", "चार्ल्स डिकेंस", "रबीन्द्रनाथ टैगोर"],
    answer_en: "Selma Lagerlof",
    answer_hi: "सेल्मा लागरलेफ",
    attempted: false,
    selected: null
  },
  {
    num: 5,
    question_en: "Who is the author of the poem 'Aunt Jennifer's Tigers'?",
    question_hi: "'Aunt Jennifer's Tigers' कविता के लेखक कौन हैं?",
    options_en: ["Adrienne Rich", "Emily Dickinson", "Maya Angelou", "Sylvia Plath"],
    options_hi: ["एड्रिएन रिच", "एमिली डिकिंसन", "माया एंजेलो", "सिल्विया प्लेट"],
    answer_en: "Adrienne Rich",
    answer_hi: "एड्रिएन रिच",
    attempted: false,
    selected: null
  },
  {
    num: 6,
    question_en: "Who wrote the poem 'The Ball Poem'?",
    question_hi: "'The Ball Poem' कविता किसने लिखी है?",
    options_en: ["John Berryman", "Robert Frost", "William Wordsworth", "T.S. Eliot"],
    options_hi: ["जॉन बेरमैन", "रॉबर्ट फ्रॉस्ट", "विलियम वर्डस्वर्थ", "टी.एस. इलियट"],
    answer_en: "John Berryman",
    answer_hi: "जॉन बेरमैन",
    attempted: false,
    selected: null
  },
  {
    num: 7,
    question_en: "Who is the author of 'Indigo'?",
    question_hi: "'Indigo' कहानी के लेखक कौन हैं?",
    options_en: ["Louis Fischer", "R.K. Narayan", "Jhumpa Lahiri", "Arundhati Roy"],
    options_hi: ["लुई फिशर", "आर. के. नारायण", "झुम्पा लाहिरी", "अरुंधति रॉय"],
    answer_en: "Louis Fischer",
    answer_hi: "लुई फिशर",
    attempted: false,
    selected: null
  },
  {
    num: 8,
    question_en: "Who wrote 'Going Places'?",
    question_hi: "'Going Places' कहानी किसने लिखी है?",
    options_en: ["A.R. Barton", "Ruskin Bond", "Charles Dickens", "Oscar Wilde"],
    options_hi: ["ए.आर. बार्टन", "रसकिन बॉन्ड", "चार्ल्स डिकेंस", "ऑस्कर वाइल्ड"],
    answer_en: "A.R. Barton",
    answer_hi: "ए.आर. बार्टन",
    attempted: false,
    selected: null
  },
  {
    num: 9,
    question_en: "Who is the author of 'The Adventures of Toto'?",
    question_hi: "'The Adventures of Toto' कहानी के लेखक कौन हैं?",
    options_en: ["Ruskin Bond", "Ruskin Bond", "Roald Dahl", "J.K. Rowling"],
    options_hi: ["रसकिन बॉन्ड", "रसकिन बॉन्ड", "रोल्ड डाहल", "जे. के. राउलिंग"],
    answer_en: "Ruskin Bond",
    answer_hi: "रसकिन बॉन्ड",
    attempted: false,
    selected: null
  },
  {
    num: 10,
    question_en: "Who wrote the poem 'A Thing of Beauty'?",
    question_hi: "'A Thing of Beauty' कविता किसने लिखी है?",
    options_en: ["John Keats", "William Wordsworth", "P.B. Shelley", "Tennyson"],
    options_hi: ["जॉन कीट्स", "विलियम वर्डस्वर्थ", "पी.बी. शेली", "टेनीसन"],
    answer_en: "John Keats",
    answer_hi: "जॉन कीट्स",
    attempted: false,
    selected: null
  },
  {
    num: 11,
    question_en: "Who is the author of the story 'The Third Level'?",
    question_hi: "'The Third Level' कहानी के लेखक कौन हैं?",
    options_en: ["Jack Finney", "H.G. Wells", "Ernest Hemingway", "Mark Twain"],
    options_hi: ["जैक फिनी", "एच.जी. वेल्स", "अर्नेस्ट हेमिंग्वे", "मार्क ट्वेन"],
    answer_en: "Jack Finney",
    answer_hi: "जैक फिनी",
    attempted: false,
    selected: null
  },
  {
    num: 12,
    question_en: "Who wrote the story 'The Enemy'?",
    question_hi: "'The Enemy' कहानी किसने लिखी है?",
    options_en: ["Pearl S. Buck", "Stephen King", "Agatha Christie", "Roald Dahl"],
    options_hi: ["पर्ल एस. बक", "स्टीफन किंग", "अगाथा क्रिस्टी", "रोल्ड डाहल"],
    answer_en: "Pearl S. Buck",
    answer_hi: "पर्ल एस. बक",
    attempted: false,
    selected: null
  },
  {
    num: 13,
    question_en: "Who is the author of the poem 'My Mother at Sixty Six'?",
    question_hi: "'My Mother at Sixty Six' कविता के लेखक कौन हैं?",
    options_en: ["Kamala Das", "Rabindranath Tagore", "Sarojini Naidu", "Toru Dutt"],
    options_hi: ["कमला दास", "रबीन्द्रनाथ टैगोर", "सरोजिनी नायडू", "टोरू दत्त"],
    answer_en: "Kamala Das",
    answer_hi: "कमला दास",
    attempted: false,
    selected: null
  },
  {
    num: 14,
    question_en: "Who wrote the story 'The Hack Driver'?",
    question_hi: "'The Hack Driver' कहानी किसने लिखी है?",
    options_en: ["R.L. Stevenson", "Ruskin Bond", "O. Henry", "Ernest Hemingway"],
    options_hi: ["आर. एल. स्टीवनसन", "रसकिन बॉन्ड", "ओ. हेनरी", "अर्नेस्ट हेमिंग्वे"],
    answer_en: "R.L. Stevenson",
    answer_hi: "आर. एल. स्टीवनसन",
    attempted: false,
    selected: null
  },
  {
    num: 15,
    question_en: "Who is the author of 'The Voice of the Rain'?",
    question_hi: "'The Voice of the Rain' कविता के लेखक कौन हैं?",
    options_en: ["Henry Wadsworth Longfellow", "John Keats", "William Wordsworth", "T.S. Eliot"],
    options_hi: ["हेनरी वाड्सवर्थ लॉन्गफेलो", "जॉन कीट्स", "विलियम वर्डस्वर्थ", "टी.एस. इलियट"],
    answer_en: "Henry Wadsworth Longfellow",
    answer_hi: "हेनरी वाड्सवर्थ लॉन्गफेलो",
    attempted: false,
    selected: null
  },
  {
    num: 16,
    question_en: "Who wrote the story 'The Nightingale and the Rose'?",
    question_hi: "'The Nightingale and the Rose' कहानी किसने लिखी है?",
    options_en: ["Oscar Wilde", "Lewis Carroll", "Charles Dickens", "George Orwell"],
    options_hi: ["ऑस्कर वाइल्ड", "लुईस कैरोल", "चार्ल्स डिकेंस", "जॉर्ज ऑरवेल"],
    answer_en: "Oscar Wilde",
    answer_hi: "ऑस्कर वाइल्ड",
    attempted: false,
    selected: null
  },
  {
    num: 17,
    question_en: "Who is the author of the poem 'The Road Not Taken'?",
    question_hi: "'The Road Not Taken' कविता के लेखक कौन हैं?",
    options_en: ["Robert Frost", "William Blake", "T.S. Eliot", "Emily Dickinson"],
    options_hi: ["रॉबर्ट फ्रॉस्ट", "विलियम ब्लेक", "टी.एस. इलियट", "एमिली डिकिंसन"],
    answer_en: "Robert Frost",
    answer_hi: "रॉबर्ट फ्रॉस्ट",
    attempted: false,
    selected: null
  },
  {
    num: 18,
    question_en: "Who wrote the story 'The Bishop's Candlesticks'?",
    question_hi: "'The Bishop's Candlesticks' नाटक किसने लिखा है?",
    options_en: ["Norman McKinnel", "Oscar Wilde", "William Shakespeare", "George Bernard Shaw"],
    options_hi: ["नॉर्मन मैककिनेल", "ऑस्कर वाइल्ड", "विलियम शेक्सपियर", "जॉर्ज बर्नार्ड शॉ"],
    answer_en: "Norman McKinnel",
    answer_hi: "नॉर्मन मैककिनेल",
    attempted: false,
    selected: null
  },
  {
    num: 19,
    question_en: "Who is the author of 'The Duck and the Kangaroo'?",
    question_hi: "'The Duck and the Kangaroo' कविता के लेखक कौन हैं?",
    options_en: ["Edward Lear", "Lewis Carroll", "William Wordsworth", "John Keats"],
    options_hi: ["एडवर्ड लियर", "लुईस कैरोल", "विलियम वर्डस्वर्थ", "जॉन कीट्स"],
    answer_en: "Edward Lear",
    answer_hi: "एडवर्ड लियर",
    attempted: false,
    selected: null
  },
  {
    num: 20,
    question_en: "Who wrote the story 'The Fun They Had'?",
    question_hi: "'The Fun They Had' कहानी किसने लिखी है?",
    options_en: ["Isaac Asimov", "Arthur C. Clarke", "Jules Verne", "H.G. Wells"],
    options_hi: ["आइजैक असिमोव", "आर्थर सी. क्लार्क", "जूल्स वर्न", "एच.जी. वेल्स"],
    answer_en: "Isaac Asimov",
    answer_hi: "आइजैक असिमोव",
    attempted: false,
    selected: null
  },
  {
    num: 21,
    question_en: "Who is the author of the poem 'On Killing a Tree'?",
    question_hi: "'On Killing a Tree' कविता के लेखक कौन हैं?",
    options_en: ["Gieve Patel", "Kamala Das", "Rabindranath Tagore", "Sarojini Naidu"],
    options_hi: ["गिव पटेल", "कमला दास", "रबीन्द्रनाथ टैगोर", "सरोजिनी नायडू"],
    answer_en: "Gieve Patel",
    answer_hi: "गिव पटेल",
    attempted: false,
    selected: null
  },
  {
    num: 22,
    question_en: "Who wrote the story 'The Last Leaf'?",
    question_hi: "'The Last Leaf' कहानी किसने लिखी है?",
    options_en: ["O. Henry", "Ruskin Bond", "Charles Dickens", "Mark Twain"],
    options_hi: ["ओ. हेनरी", "रसकिन बॉन्ड", "चार्ल्स डिकेंस", "मार्क ट्वेन"],
    answer_en: "O. Henry",
    answer_hi: "ओ. हेनरी",
    attempted: false,
    selected: null
  },
  {
    num: 23,
    question_en: "Who is the author of the poem 'A Roadside Stand'?",
    question_hi: "'A Roadside Stand' कविता के लेखक कौन हैं?",
    options_en: ["A.D. Hope", "Robert Frost", "Emily Dickinson", "William Wordsworth"],
    options_hi: ["ए.डी. होप", "रॉबर्ट फ्रॉस्ट", "एमिली डिकिंसन", "विलियम वर्डस्वर्थ"],
    answer_en: "A.D. Hope",
    answer_hi: "ए.डी. होप",
    attempted: false,
    selected: null
  },
  {
    num: 24,
    question_en: "Who wrote the story 'The Man to Send Rain Clouds'?",
    question_hi: "'The Man to Send Rain Clouds' कहानी किसने लिखी है?",
    options_en: ["Leslie Marmon Silko", "Ernest Hemingway", "William Faulkner", "John Steinbeck"],
    options_hi: ["लेस्ली मारमोन सिल्को", "अर्नेस्ट हेमिंग्वे", "विलियम फॉल्कनर", "जॉन स्टीनबेक"],
    answer_en: "Leslie Marmon Silko",
    answer_hi: "लेस्ली मारमोन सिल्को",
    attempted: false,
    selected: null
  },
  {
    num: 25,
    question_en: "Who is the author of the poem 'Father to Son'?",
    question_hi: "'Father to Son' कविता के लेखक कौन हैं?",
    options_en: ["Elizabeth Jennings", "Sylvia Plath", "Kamala Das", "Adrienne Rich"],
    options_hi: ["एलिज़ाबेथ जेनिंग्स", "सिल्विया प्लेट", "कमला दास", "एड्रिएन रिच"],
    answer_en: "Elizabeth Jennings",
    answer_hi: "एलिज़ाबेथ जेनिंग्स",
    attempted: false,
    selected: null
  },
 {
    num: 26,
    question_en: "Who wrote the poem 'A Psalm of Life'?",
    question_hi: "'A Psalm of Life' कविता किसने लिखी है?",
    options_en: ["Henry Wadsworth Longfellow", "Walt Whitman", "Emily Dickinson", "Robert Frost"],
    options_hi: ["हेनरी वाड्सवर्थ लॉन्गफेलो", "वाल्ट व्हिटमैन", "एमिली डिकिंसन", "रॉबर्ट फ्रॉस्ट"],
    answer_en: "Henry Wadsworth Longfellow",
    answer_hi: "हेनरी वाड्सवर्थ लॉन्गफेलो",
    attempted: false,
    selected: null
  },
  {
    num: 27,
    question_en: "Who is the author of the story 'The Gift of the Magi'?",
    question_hi: "'The Gift of the Magi' कहानी के लेखक कौन हैं?",
    options_en: ["O. Henry", "Mark Twain", "Charles Dickens", "Ruskin Bond"],
    options_hi: ["ओ. हेनरी", "मार्क ट्वेन", "चार्ल्स डिकेंस", "रसकिन बॉन्ड"],
    answer_en: "O. Henry",
    answer_hi: "ओ. हेनरी",
    attempted: false,
    selected: null
  },
  {
    num: 28,
    question_en: "Who wrote the poem 'Daffodils'?",
    question_hi: "'Daffodils' कविता किसने लिखी है?",
    options_en: ["William Wordsworth", "John Keats", "Robert Browning", "Lord Tennyson"],
    options_hi: ["विलियम वर्डस्वर्थ", "जॉन कीट्स", "रॉबर्ट ब्राउनिंग", "लॉर्ड टेनीसन"],
    answer_en: "William Wordsworth",
    answer_hi: "विलियम वर्डस्वर्थ",
    attempted: false,
    selected: null
  },
  {
    num: 29,
    question_en: "Who is the author of the story 'The Selfish Giant'?",
    question_hi: "'The Selfish Giant' कहानी किसने लिखी है?",
    options_en: ["Oscar Wilde", "Lewis Carroll", "Charles Dickens", "George Orwell"],
    options_hi: ["ऑस्कर वाइल्ड", "लुईस कैरोल", "चार्ल्स डिकेंस", "जॉर्ज ऑरवेल"],
    answer_en: "Oscar Wilde",
    answer_hi: "ऑस्कर वाइल्ड",
    attempted: false,
    selected: null
  },
  {
    num: 30,
    question_en: "Who wrote the poem 'If'?",
    question_hi: "'If' कविता किसने लिखी है?",
    options_en: ["Rudyard Kipling", "William Blake", "Robert Frost", "John Milton"],
    options_hi: ["रुडयार्ड किपलिंग", "विलियम ब्लेक", "रॉबर्ट फ्रॉस्ट", "जॉन मिल्टन"],
    answer_en: "Rudyard Kipling",
    answer_hi: "रुडयार्ड किपलिंग",
    attempted: false,
    selected: null
  },
  {
    num: 31,
    question_en: "Who is the author of the story 'The Open Window'?",
    question_hi: "'The Open Window' कहानी किसने लिखी है?",
    options_en: ["Saki (H.H. Munro)", "Oscar Wilde", "Mark Twain", "R.K. Narayan"],
    options_hi: ["साकी (एच.एच. मुनरो)", "ऑस्कर वाइल्ड", "मार्क ट्वेन", "आर.के. नारायण"],
    answer_en: "Saki (H.H. Munro)",
    answer_hi: "साकी (एच.एच. मुनरो)",
    attempted: false,
    selected: null
  },
  {
    num: 32,
    question_en: "Who wrote the poem 'Ozymandias'?",
    question_hi: "'Ozymandias' कविता किसने लिखी है?",
    options_en: ["Percy Bysshe Shelley", "John Keats", "William Wordsworth", "Lord Byron"],
    options_hi: ["पर्सी बिशे शेली", "जॉन कीट्स", "विलियम वर्डस्वर्थ", "लॉर्ड बायरन"],
    answer_en: "Percy Bysshe Shelley",
    answer_hi: "पर्सी बिशे शेली",
    attempted: false,
    selected: null
  },
  {
    num: 33,
    question_en: "Who is the author of the story 'The Happy Prince'?",
    question_hi: "'The Happy Prince' कहानी किसने लिखी है?",
    options_en: ["Oscar Wilde", "Charles Dickens", "Lewis Carroll", "George Orwell"],
    options_hi: ["ऑस्कर वाइल्ड", "चार्ल्स डिकेंस", "लुईस कैरोल", "जॉर्ज ऑरवेल"],
    answer_en: "Oscar Wilde",
    answer_hi: "ऑस्कर वाइल्ड",
    attempted: false,
    selected: null
  },
  {
    num: 34,
    question_en: "Who wrote the poem 'The Tyger'?",
    question_hi: "'The Tyger' कविता किसने लिखी है?",
    options_en: ["William Blake", "William Wordsworth", "John Keats", "Robert Frost"],
    options_hi: ["विलियम ब्लेक", "विलियम वर्डस्वर्थ", "जॉन कीट्स", "रॉबर्ट फ्रॉस्ट"],
    answer_en: "William Blake",
    answer_hi: "विलियम ब्लेक",
    attempted: false,
    selected: null
  },
  {
    num: 35,
    question_en: "Who is the author of the story 'How Much Land Does a Man Need?'?",
    question_hi: "'How Much Land Does a Man Need?' कहानी किसने लिखी है?",
    options_en: ["Leo Tolstoy", "Anton Chekhov", "Fyodor Dostoevsky", "Ivan Turgenev"],
    options_hi: ["लियो टॉलस्टॉय", "एंटोन चेखव", "फ्योदोर दोस्तोएवस्की", "इवान टुर्गेनेव"],
    answer_en: "Leo Tolstoy",
    answer_hi: "लियो टॉलस्टॉय",
    attempted: false,
    selected: null
  },
  {
    num: 36,
    question_en: "Who wrote the poem 'The Charge of the Light Brigade'?",
    question_hi: "'The Charge of the Light Brigade' कविता किसने लिखी है?",
    options_en: ["Alfred Lord Tennyson", "William Wordsworth", "John Keats", "Robert Browning"],
    options_hi: ["अल्फ्रेड लॉर्ड टेनीसन", "विलियम वर्डस्वर्थ", "जॉन कीट्स", "रॉबर्ट ब्राउनिंग"],
    answer_en: "Alfred Lord Tennyson",
    answer_hi: "अल्फ्रेड लॉर्ड टेनीसन",
    attempted: false,
    selected: null
  },
  {
    num: 37,
    question_en: "Who is the author of the story 'The Necklace'?",
    question_hi: "'The Necklace' कहानी किसने लिखी है?",
    options_en: ["Guy de Maupassant", "O. Henry", "Charles Dickens", "Leo Tolstoy"],
    options_hi: ["गाय डे मॉपासन", "ओ. हेनरी", "चार्ल्स डिकेंस", "लियो टॉलस्टॉय"],
    answer_en: "Guy de Maupassant",
    answer_hi: "गाय डे मॉपासन",
    attempted: false,
    selected: null
  },
  {
    num: 38,
    question_en: "Who wrote the poem 'Jabberwocky'?",
    question_hi: "'Jabberwocky' कविता किसने लिखी है?",
    options_en: ["Lewis Carroll", "Edward Lear", "Dr. Seuss", "Shel Silverstein"],
    options_hi: ["लुईस कैरोल", "एडवर्ड लियर", "डॉ. सियस", "शेल सिल्वरस्टीन"],
    answer_en: "Lewis Carroll",
    answer_hi: "लुईस कैरोल",
    attempted: false,
    selected: null
  },
  {
    num: 39,
    question_en: "Who is the author of the story 'The Tell-Tale Heart'?",
    question_hi: "'The Tell-Tale Heart' कहानी किसने लिखी है?",
    options_en: ["Edgar Allan Poe", "Nathaniel Hawthorne", "Stephen King", "H.P. Lovecraft"],
    options_hi: ["एडगर एलन पो", "नाथनियल हौथॉर्न", "स्टीफन किंग", "एच.पी. लवक्राफ्ट"],
    answer_en: "Edgar Allan Poe",
    answer_hi: "एडगर एलन पो",
    attempted: false,
    selected: null
  },
  {
    num: 40,
    question_en: "Who wrote the poem 'Stopping by Woods on a Snowy Evening'?",
    question_hi: "'Stopping by Woods on a Snowy Evening' कविता किसने लिखी है?",
    options_en: ["Robert Frost", "Emily Dickinson", "Walt Whitman", "T.S. Eliot"],
    options_hi: ["रॉबर्ट फ्रॉस्ट", "एमिली डिकिंसन", "वाल्ट व्हिटमैन", "टी.एस. इलियट"],
    answer_en: "Robert Frost",
    answer_hi: "रॉबर्ट फ्रॉस्ट",
    attempted: false,
    selected: null
  },
  {
    num: 41,
    question_en: "Who is the author of the story 'The Monkey's Paw'?",
    question_hi: "'The Monkey's Paw' कहानी किसने लिखी है?",
    options_en: ["W.W. Jacobs", "Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe"],
    options_hi: ["डब्ल्यू.डब्ल्यू. जैकब्स", "अगाथा क्रिस्टी", "आर्थर कॉनन डॉयल", "एडगर एलन पो"],
    answer_en: "W.W. Jacobs",
    answer_hi: "डब्ल्यू.डब्ल्यू. जैकब्स",
    attempted: false,
    selected: null
  },
  {
    num: 42,
    question_en: "Who wrote the poem 'The Raven'?",
    question_hi: "'The Raven' कविता किसने लिखी है?",
    options_en: ["Edgar Allan Poe", "Emily Dickinson", "Robert Frost", "Walt Whitman"],
    options_hi: ["एडगर एलन पो", "एमिली डिकिंसन", "रॉबर्ट फ्रॉस्ट", "वाल्ट व्हिटमैन"],
    answer_en: "Edgar Allan Poe",
    answer_hi: "एडगर एलन पो",
    attempted: false,
    selected: null
  },
  {
    num: 43,
    question_en: "Who is the author of the story 'The Adventure of the Speckled Band'?",
    question_hi: "'The Adventure of the Speckled Band' कहानी किसने लिखी है?",
    options_en: ["Arthur Conan Doyle", "Agatha Christie", "Edgar Allan Poe", "Wilkie Collins"],
    options_hi: ["आर्थर कॉनन डॉयल", "अगाथा क्रिस्टी", "एडगर एलन पो", "विल्की कॉलिन्स"],
    answer_en: "Arthur Conan Doyle",
    answer_hi: "आर्थर कॉनन डॉयल",
    attempted: false,
    selected: null
  },
  {
    num: 44,
    question_en: "Who wrote the poem 'Kubla Khan'?",
    question_hi: "'Kubla Khan' कविता किसने लिखी है?",
    options_en: ["Samuel Taylor Coleridge", "William Wordsworth", "John Keats", "Percy Shelley"],
    options_hi: ["सैमुअल टेलर कोलरिज", "विलियम वर्डस्वर्थ", "जॉन कीट्स", "पर्सी शेली"],
    answer_en: "Samuel Taylor Coleridge",
    answer_hi: "सैमुअल टेलर कोलरिज",
    attempted: false,
    selected: null
  },
  {
    num: 45,
    question_en: "Who is the author of the story 'The Secret Garden'?",
    question_hi: "'The Secret Garden' कहानी किसने लिखी है?",
    options_en: ["Frances Hodgson Burnett", "Louisa May Alcott", "L.M. Montgomery", "J.M. Barrie"],
    options_hi: ["फ्रांसिस हौग्सन बर्नेट", "लुइसा मे ऑल्कॉट", "एल.एम. मॉन्टगोमेरी", "जे.एम. बैरी"],
    answer_en: "Frances Hodgson Burnett",
    answer_hi: "फ्रांसिस हौग्सन बर्नेट",
    attempted: false,
    selected: null
  },
  {
    num: 46,
    question_en: "Who wrote the poem 'Invictus'?",
    question_hi: "'Invictus' कविता किसने लिखी है?",
    options_en: ["William Ernest Henley", "Robert Frost", "Emily Dickinson", "Walt Whitman"],
    options_hi: ["विलियम अर्नेस्ट हेनली", "रॉबर्ट फ्रॉस्ट", "एमिली डिकिंसन", "वाल्ट व्हिटमैन"],
    answer_en: "William Ernest Henley",
    answer_hi: "विलियम अर्नेस्ट हेनली",
    attempted: false,
    selected: null
  },
  {
    num: 47,
    question_en: "Who is the author of the story 'The Little Prince'?",
    question_hi: "'The Little Prince' कहानी किसने लिखी है?",
    options_en: ["Antoine de Saint-Exupéry", "Jules Verne", "Hans Christian Andersen", "Aesop"],
    options_hi: ["अंतोनी डी सेंट-एक्जुपरी", "जूल्स वर्न", "हंस क्रिश्चियन एंडरसन", "ऐसोप"],
    answer_en: "Antoine de Saint-Exupéry",
    answer_hi: "अंतोनी डी सेंट-एक्जुपरी",
    attempted: false,
    selected: null
  },
  {
    num: 48,
    question_en: "Who wrote the poem 'The Lady of Shalott'?",
    question_hi: "'The Lady of Shalott' कविता किसने लिखी है?",
    options_en: ["Alfred Lord Tennyson", "William Wordsworth", "John Keats", "Robert Browning"],
    options_hi: ["अल्फ्रेड लॉर्ड टेनीसन", "विलियम वर्डस्वर्थ", "जॉन कीट्स", "रॉबर्ट ब्राउनिंग"],
    answer_en: "Alfred Lord Tennyson",
    answer_hi: "अल्फ्रेड लॉर्ड टेनीसन",
    attempted: false,
    selected: null
  },
  {
    num: 49,
    question_en: "Who is the author of the story 'The Lady, or the Tiger?'",
    question_hi: "'The Lady, or the Tiger?' कहानी किसने लिखी है?",
    options_en: ["Frank R. Stockton", "O. Henry", "Guy de Maupassant", "Nathaniel Hawthorne"],
    options_hi: ["फ्रैंक आर. स्टॉकटन", "ओ. हेनरी", "गाय डे मॉपासन", "नाथनियल हौथॉर्न"],
    answer_en: "Frank R. Stockton",
    answer_hi: "फ्रैंक आर. स्टॉकटन",
    attempted: false,
    selected: null
  },
  {
  num: 50,
  question_en: "Who is the author of the poem 'The Road Not Taken'?",
  question_hi: "'The Road Not Taken' कविता किसने लिखी है?",
  options_en: ["Robert Frost", "Walt Whitman", "Emily Dickinson", "T.S. Eliot"],
  options_hi: ["रॉबर्ट फ्रॉस्ट", "वाल्ट व्हिटमैन", "एमिली डिकिंसन", "टी.एस. इलियट"],
  answer_en: "Robert Frost",
  answer_hi: "रॉबर्ट फ्रॉस्ट",
  attempted: false,
  selected: null
}

];




let currentQuestion = 0; 
let language = "en";
let timeLeft = 180 * 60; // 180 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
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
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}

function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};
