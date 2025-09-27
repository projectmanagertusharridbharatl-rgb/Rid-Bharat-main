
const questions = [

  {
    "num": 1,
    "question_en": "Who is considered the father of modern Punjabi poetry?",
    "question_pa": "ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਕਵਿਤਾ ਦੇ ਪਿਤਾ ਕਿਸਨੂੰ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?",
    "options_en": ["Bhai Vir Singh", "Shiv Kumar Batalvi", "Puran Singh", "Amrita Pritam"],
    "options_pa": ["ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਪੂਰਨ ਸਿੰਘ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
    "answer_en": "Puran Singh",
    "answer_pa": "ਪੂਰਨ ਸਿੰਘ"
  },
  {
    "num": 2,
    "question_en": "Which of these is a famous work by Amrita Pritam?",
    "question_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਦੀ ਮਸ਼ਹੂਰ ਰਚਨਾ ਕਿਹੜੀ ਹੈ?",
    "options_en": ["Pinjar", "Sundri", "Nanak Singh", "Heer Ranjha"],
    "options_pa": ["ਪਿੰਜਰ", "ਸੁੰਦਰੀ", "ਨਾਨਕ ਸਿੰਘ", "ਹੀਰ ਰਾਂਝਾ"],
    "answer_en": "Pinjar",
    "answer_pa": "ਪਿੰਜਰ"
  },
  {
    "num": 3,
    "question_en": "What is the correct plural form of 'ਪੁਸਤਕ' (book) in Punjabi?",
    "question_pa": "'ਪੁਸਤਕ' ਦਾ ਸਹੀ ਬਹੁਵਚਨ ਰੂਪ ਕੀ ਹੈ?",
    "options_en": ["ਪੁਸਤਕਾਂ", "ਪੁਸਤਕੇ", "ਪੁਸਤਕੀ", "ਪੁਸਤਕੋ"],
    "options_pa": ["ਪੁਸਤਕਾਂ", "ਪੁਸਤਕੇ", "ਪੁਸਤਕੀ", "ਪੁਸਤਕੋ"],
    "answer_en": "ਪੁਸਤਕਾਂ",
    "answer_pa": "ਪੁਸਤਕਾਂ"
  },
  {
    "num": 4,
    "question_en": "Which famous Punjabi folk dance is performed by men?",
    "question_pa": "ਮਰਦਾਂ ਦੁਆਰਾ ਕੀਤਾ ਜਾਣ ਵਾਲਾ ਮਸ਼ਹੂਰ ਪੰਜਾਬੀ ਲੋਕ ਨਾਚ ਕਿਹੜਾ ਹੈ?",
    "options_en": ["Giddha", "Bhangra", "Sammi", "Jhumar"],
    "options_pa": ["ਗਿੱਧਾ", "ਭੰਗੜਾ", "ਸੰਮੀ", "ਝੂਮਰ"],
    "answer_en": "Bhangra",
    "answer_pa": "ਭੰਗੜਾ"
  },
  {
    "num": 5,
    "question_en": "What is the feminine form of 'ਗਾਇਕ' (singer)?",
    "question_pa": "'ਗਾਇਕ' ਦਾ ਸਤਰੀ ਲਿੰਗ ਰੂਪ ਕੀ ਹੈ?",
    "options_en": ["ਗਾਇਕਾ", "ਗਾਇਕੀ", "ਗਾਇਕਨ", "ਗਾਇਕੇ"],
    "options_pa": ["ਗਾਇਕਾ", "ਗਾਇਕੀ", "ਗਾਇਕਨ", "ਗਾਇਕੇ"],
    "answer_en": "ਗਾਇਕਾ",
    "answer_pa": "ਗਾਇਕਾ"
  },
  {
    "num": 6,
    "question_en": "Who wrote the famous Punjabi poem 'Main Ek Pagal'?",
    "question_pa": "ਮਸ਼ਹੂਰ ਪੰਜਾਬੀ ਕਵਿਤਾ 'ਮੈਂ ਇੱਕ ਪਾਗਲ' ਕਿਸ ਨੇ ਲਿਖੀ?",
    "options_en": ["Pash", "Surjit Patar", "Shiv Kumar Batalvi", "Amrita Pritam"],
    "options_pa": ["ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
    "answer_en": "Pash",
    "answer_pa": "ਪਾਸ਼"
  },
  {
    "num": 7,
    "question_en": "Which of these is a traditional Punjabi musical instrument?",
    "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪਰੰਪਰਾਗਤ ਪੰਜਾਬੀ ਸੰਗੀਤ ਵਾਜਾ ਹੈ?",
    "options_en": ["Tumbi", "Sitar", "Tabla", "Harmonium"],
    "options_pa": ["ਤੂੰਬੀ", "ਸਿਤਾਰ", "ਤਬਲਾ", "ਹਾਰਮੋਨੀਅਮ"],
    "answer_en": "Tumbi",
    "answer_pa": "ਤੂੰਬੀ"
  },
  {
    "num": 8,
    "question_en": "What is the meaning of the Punjabi idiom 'ਹੱਥ ਖੰਭ ਹੋਣਾ'?",
    "question_pa": "ਮੁਹਾਵਰਾ 'ਹੱਥ ਖੰਭ ਹੋਣਾ' ਦਾ ਕੀ ਅਰਥ ਹੈ?",
    "options_en": ["To be very happy", "To be very tired", "To be very busy", "To be very rich"],
    "options_pa": ["ਬਹੁਤ ਖੁਸ਼ ਹੋਣਾ", "ਬਹੁਤ ਥੱਕ ਜਾਣਾ", "ਬਹੁਤ ਵਿਅਸਤ ਹੋਣਾ", "ਬਹੁਤ ਅਮੀਰ ਹੋਣਾ"],
    "answer_en": "To be very happy",
    "answer_pa": "ਬਹੁਤ ਖੁਸ਼ ਹੋਣਾ"
  },
  {
    "num": 9,
    "question_en": "Which tense is 'ਮੈਂ ਖਾਧਾ ਸੀ' in?",
    "question_pa": "'ਮੈਂ ਖਾਧਾ ਸੀ' ਕਿਹੜੇ ਕਾਲ ਵਿੱਚ ਹੈ?",
    "options_en": ["Past Perfect", "Present", "Future", "Continuous"],
    "options_pa": ["ਭੂਤ ਪੂਰਨ", "ਵਰਤਮਾਨ", "ਭਵਿੱਖ", "ਜਾਰੀ"],
    "answer_en": "Past Perfect",
    "answer_pa": "ਭੂਤ ਪੂਰਨ"
  },
  {
    "num": 10,
    "question_en": "Who is known as the 'Shakespeare of Punjabi'?",
    "question_pa": "ਕਿਸਨੂੰ 'ਪੰਜਾਬੀ ਦਾ ਸ਼ੇਕਸਪੀਅਰ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
    "options_en": ["Shiv Kumar Batalvi", "Amrita Pritam", "Bhai Vir Singh", "Puran Singh"],
    "options_pa": ["ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਪੂਰਨ ਸਿੰਘ"],
    "answer_en": "Shiv Kumar Batalvi",
    "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"
  },
  {
    "num": 11,
    "question_en": "What is the plural of 'ਫੁੱਲ' (flower) in Punjabi?",
    "question_pa": "'ਫੁੱਲ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
    "options_en": ["ਫੁੱਲਾਂ", "ਫੁੱਲੇ", "ਫੁੱਲੀ", "ਫੁੱਲੋ"],
    "options_pa": ["ਫੁੱਲਾਂ", "ਫੁੱਲੇ", "ਫੁੱਲੀ", "ਫੁੱਲੋ"],
    "answer_en": "ਫੁੱਲਾਂ",
    "answer_pa": "ਫੁੱਲਾਂ"
  },
  {
    "num": 12,
    "question_en": "Which of these is a famous Punjabi folk tale?",
    "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਮਸ਼ਹੂਰ ਪੰਜਾਬੀ ਲੋਕ ਕਥਾ ਹੈ?",
    "options_en": ["Heer Ranjha", "Ramayana", "Mahabharata", "Panchatantra"],
    "options_pa": ["ਹੀਰ ਰਾਂਝਾ", "ਰਾਮਾਇਣ", "ਮਹਾਭਾਰਤ", "ਪੰਚਤੰਤਰ"],
    "answer_en": "Heer Ranjha",
    "answer_pa": "ਹੀਰ ਰਾਂਝਾ"
  },
  {
    "num": 13,
    "question_en": "What is the feminine form of 'ਮਾਲੀ' (gardener)?",
    "question_pa": "'ਮਾਲੀ' ਦੀ ਸਤਰੀ ਲਿੰਗ ਰੂਪ ਕੀ ਹੈ?",
    "options_en": ["ਮਾਲਨ", "ਮਾਲਿਕਾ", "ਮਾਲਣ", "ਮਾਲੀਨ"],
    "options_pa": ["ਮਾਲਨ", "ਮਾਲਿਕਾ", "ਮਾਲਣ", "ਮਾਲੀਨ"],
    "answer_en": "ਮਾਲਣ",
    "answer_pa": "ਮਾਲਣ"
  },
  {
    "num": 14,
    "question_en": "Which Punjabi writer won the Jnanpith Award?",
    "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਲੇਖਕ ਨੇ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਜਿੱਤਿਆ?",
    "options_en": ["Amrita Pritam", "Nanak Singh", "Gurdial Singh", "Kartar Singh Duggal"],
    "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਨਾਨਕ ਸਿੰਘ", "ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ"],
    "answer_en": "Amrita Pritam",
    "answer_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"
  },
  {
    "num": 15,
    "question_en": "What is the meaning of 'ਸਹਿਣਸ਼ੀਲਤਾ' in English?",
    "question_pa": "'ਸਹਿਣਸ਼ੀਲਤਾ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
    "options_en": ["Patience", "Anger", "Happiness", "Courage"],
    "options_pa": ["ਧੀਰਜ", "ਗੁੱਸਾ", "ਖੁਸ਼ੀ", "ਹਿੰਮਤ"],
    "answer_en": "Patience",
    "answer_pa": "ਧੀਰਜ"
  },
  {
    "num": 16,
    "question_en": "Which tense is 'ਮੈਂ ਜਾਵਾਂਗਾ' in?",
    "question_pa": "'ਮੈਂ ਜਾਵਾਂਗਾ' ਕਿਹੜੇ ਕਾਲ ਵਿੱਚ ਹੈ?",
    "options_en": ["Future", "Present", "Past", "Continuous"],
    "options_pa": ["ਭਵਿੱਖ", "ਵਰਤਮਾਨ", "ਭੂਤ", "ਜਾਰੀ"],
    "answer_en": "Future",
    "answer_pa": "ਭਵਿੱਖ"
  },
  {
    "num": 17,
    "question_en": "Who wrote the Punjabi novel 'Marhi Da Deeva'?",
    "question_pa": "ਪੰਜਾਬੀ ਨਾਵਲ 'ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ' ਕਿਸ ਨੇ ਲਿਖਿਆ?",
    "options_en": ["Gurdial Singh", "Nanak Singh", "Kartar Singh Duggal", "Dalip Kaur Tiwana"],
    "options_pa": ["ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਨਾਨਕ ਸਿੰਘ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ"],
    "answer_en": "Gurdial Singh",
    "answer_pa": "ਗੁਰਦਿਆਲ ਸਿੰਘ"
  },
  {
    "num": 18,
    "question_en": "What is the plural of 'ਪੱਤਾ' (leaf)?",
    "question_pa": "'ਪੱਤਾ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
    "options_en": ["ਪੱਤੇ", "ਪੱਤਿਆਂ", "ਪੱਤਾਵਾਂ", "ਪੱਤੋ"],
    "options_pa": ["ਪੱਤੇ", "ਪੱਤਿਆਂ", "ਪੱਤਾਵਾਂ", "ਪੱਤੋ"],
    "answer_en": "ਪੱਤੇ",
    "answer_pa": "ਪੱਤੇ"
  },
  {
    "num": 19,
    "question_en": "Which Punjabi poet wrote 'Sab Ton Khatarnak'?",
    "question_pa": "'ਸਭ ਤੋਂ ਖਤਰਨਾਕ' ਕਿਸ ਕਵੀ ਦੀ ਰਚਨਾ ਹੈ?",
    "options_en": ["Pash", "Surjit Patar", "Shiv Kumar Batalvi", "Amrita Pritam"],
    "options_pa": ["ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
    "answer_en": "Pash",
    "answer_pa": "ਪਾਸ਼"
  },
  {
    "num": 20,
    "question_en": "What is the feminine form of 'ਮੁਕੱਦਮ' (lawyer)?",
    "question_pa": "'ਮੁਕੱਦਮ' ਦੀ ਸਤਰੀ ਲਿੰਗ ਰੂਪ ਕੀ ਹੈ?",
    "options_en": ["ਮੁਕੱਦਮਾ", "ਮੁਕੱਦਮੀ", "ਮੁਕੱਦਮਨ", "ਮੁਕੱਦਮੇ"],
    "options_pa": ["ਮੁਕੱਦਮਾ", "ਮੁਕੱਦਮੀ", "ਮੁਕੱਦਮਨ", "ਮੁਕੱਦਮੇ"],
    "answer_en": "ਮੁਕੱਦਮੀ",
    "answer_pa": "ਮੁਕੱਦਮੀ"
  },
  {
    "num": 21,
    "question_en": "Which of these is a Punjabi folk hero?",
    "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਨਾਇਕ ਹੈ?",
    "options_en": ["Dulla Bhatti", "Ashoka", "Akbar", "Shivaji"],
    "options_pa": ["ਦੁੱਲਾ ਭੱਟੀ", "ਅਸ਼ੋਕ", "ਅਕਬਰ", "ਸ਼ਿਵਾਜੀ"],
    "answer_en": "Dulla Bhatti",
    "answer_pa": "ਦੁੱਲਾ ਭੱਟੀ"
  },
  {
    "num": 22,
    "question_en": "What is the meaning of 'ਇਨਸਾਫ਼' in English?",
    "question_pa": "'ਇਨਸਾਫ਼' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
    "options_en": ["Justice", "Injustice", "Equality", "Freedom"],
    "options_pa": ["ਇਨਸਾਫ਼", "ਨਾਇੰਸਾਫ਼ੀ", "ਬਰਾਬਰੀ", "ਆਜ਼ਾਦੀ"],
    "answer_en": "Justice",
    "answer_pa": "ਇਨਸਾਫ਼"
  },
  {
    "num": 23,
    "question_en": "Which tense is 'ਮੈਂ ਲਿਖ ਰਿਹਾ ਹਾਂ' in?",
    "question_pa": "'ਮੈਂ ਲਿਖ ਰਿਹਾ ਹਾਂ' ਕਿਹੜੇ ਕਾਲ ਵਿੱਚ ਹੈ?",
    "options_en": ["Present Continuous", "Past", "Future", "Perfect"],
    "options_pa": ["ਵਰਤਮਾਨ ਜਾਰੀ", "ਭੂਤ", "ਭਵਿੱਖ", "ਪੂਰਨ"],
    "answer_en": "Present Continuous",
    "answer_pa": "ਵਰਤਮਾਨ ਜਾਰੀ"
  },
  {
    "num": 24,
    "question_en": "Who is the author of 'Pani Di Dhaar'?",
    "question_pa": "'ਪਾਣੀ ਦੀ ਧਾਰ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
    "options_en": ["Gurdial Singh", "Nanak Singh", "Kartar Singh Duggal", "Dalip Kaur Tiwana"],
    "options_pa": ["ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਨਾਨਕ ਸਿੰਘ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ"],
    "answer_en": "Gurdial Singh",
    "answer_pa": "ਗੁਰਦਿਆਲ ਸਿੰਘ"
  },
  {
    "num": 25,
    "question_en": "What is the plural of 'ਗੀਤ' (song)?",
    "question_pa": "'ਗੀਤ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
    "options_en": ["ਗੀਤਾਂ", "ਗੀਤੇ", "ਗੀਤੀ", "ਗੀਤੋ"],
    "options_pa": ["ਗੀਤਾਂ", "ਗੀਤੇ", "ਗੀਤੀ", "ਗੀਤੋ"],
    "answer_en": "ਗੀਤਾਂ",
    "answer_pa": "ਗੀਤਾਂ"
  },
  {
    "num": 26,
    "question_en": "Which Punjabi poet wrote 'Main Tere Naam Di Mehfil Wich'?",
    "question_pa": "'ਮੈਂ ਤੇਰੇ ਨਾਮ ਦੀ ਮਹਿਫਿਲ ਵਿਚ' ਕਿਸ ਕਵੀ ਦੀ ਰਚਨਾ ਹੈ?",
    "options_en": ["Surjit Patar", "Pash", "Shiv Kumar Batalvi", "Amrita Pritam"],
    "options_pa": ["ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
    "answer_en": "Surjit Patar",
    "answer_pa": "ਸੁਰਜੀਤ ਪਾਤਰ"
  },
  {
    "num": 27,
    "question_en": "What is the feminine form of 'ਗਾਇਕ' (singer)?",
    "question_pa": "'ਗਾਇਕ' ਦੀ ਸਤਰੀ ਲਿੰਗ ਰੂਪ ਕੀ ਹੈ?",
    "options_en": ["ਗਾਇਕਾ", "ਗਾਇਕੀ", "ਗਾਇਕਨ", "ਗਾਇਕੇ"],
    "options_pa": ["ਗਾਇਕਾ", "ਗਾਇਕੀ", "ਗਾਇਕਨ", "ਗਾਇਕੇ"],
    "answer_en": "ਗਾਇਕਾ",
    "answer_pa": "ਗਾਇਕਾ"
  },
  {
    "num": 28,
    "question_en": "Which of these is a Punjabi folk festival?",
    "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਤਿਉਹਾਰ ਹੈ?",
    "options_en": ["Lohri", "Diwali", "Holi", "Eid"],
    "options_pa": ["ਲੋਹੜੀ", "ਦੀਵਾਲੀ", "ਹੋਲੀ", "ਈਦ"],
    "answer_en": "Lohri",
    "answer_pa": "ਲੋਹੜੀ"
  },
  {
    "num": 29,
    "question_en": "What is the meaning of 'ਸ਼ਾਂਤੀ' in English?",
    "question_pa": "'ਸ਼ਾਂਤੀ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
    "options_en": ["Peace", "War", "Noise", "Chaos"],
    "options_pa": ["ਸ਼ਾਂਤੀ", "ਜੰਗ", "ਸ਼ੋਰ", "ਅਸ਼ਾਂਤੀ"],
    "answer_en": "Peace",
    "answer_pa": "ਸ਼ਾਂਤੀ"
  },
  {
    "num": 30,
    "question_en": "Which tense is 'ਮੈਂ ਜਾਵਾਂਗਾ' in?",
    "question_pa": "'ਮੈਂ ਜਾਵਾਂਗਾ' ਕਿਹੜੇ ਕਾਲ ਵਿੱਚ ਹੈ?",
    "options_en": ["Future", "Present", "Past", "Continuous"],
    "options_pa": ["ਭਵਿੱਖ", "ਵਰਤਮਾਨ", "ਭੂਤ", "ਜਾਰੀ"],
    "answer_en": "Future",
    "answer_pa": "ਭਵਿੱਖ"
  },
  {
    "num": 31,
    "question_en": "Who is the author of 'Adh Chanani Raat'?",
    "question_pa": "'ਅੱਧ ਛਨਿਆਣੀ ਰਾਤ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
    "options_en": ["Nanak Singh", "Kartar Singh Duggal", "Gurdial Singh", "Dalip Kaur Tiwana"],
    "options_pa": ["ਨਾਨਕ ਸਿੰਘ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ", "ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ"],
    "answer_en": "Nanak Singh",
    "answer_pa": "ਨਾਨਕ ਸਿੰਘ"
  },
  {
    "num": 32,
    "question_en": "What is the plural of 'ਫੁੱਲ' (flower)?",
    "question_pa": "'ਫੁੱਲ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
    "options_en": ["ਫੁੱਲਾਂ", "ਫੁੱਲੇ", "ਫੁੱਲੀ", "ਫੁੱਲੋ"],
    "options_pa": ["ਫੁੱਲਾਂ", "ਫੁੱਲੇ", "ਫੁੱਲੀ", "ਫੁੱਲੋ"],
    "answer_en": "ਫੁੱਲਾਂ",
    "answer_pa": "ਫੁੱਲਾਂ"
  },
  {
    "num": 33,
    "question_en": "Which Punjabi poet wrote 'Main Tere Naam Di Mehfil Wich'?",
    "question_pa": "'ਮੈਂ ਤੇਰੇ ਨਾਮ ਦੀ ਮਹਿਫਿਲ ਵਿਚ' ਕਿਸ ਕਵੀ ਦੀ ਰਚਨਾ ਹੈ?",
    "options_en": ["Surjit Patar", "Pash", "Shiv Kumar Batalvi", "Amrita Pritam"],
    "options_pa": ["ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
    "answer_en": "Surjit Patar",
    "answer_pa": "ਸੁਰਜੀਤ ਪਾਤਰ"
  },
  {
    "num": 34,
    "question_en": "What is the feminine form of 'ਡਾਕਟਰ' (doctor)?",
    "question_pa": "'ਡਾਕਟਰ' ਦੀ ਸਤਰੀ ਲਿੰਗ ਰੂਪ ਕੀ ਹੈ?",
    "options_en": ["ਡਾਕਟਰਾ", "ਡਾਕਟਰੀ", "ਡਾਕਟਰਨ", "ਡਾਕਟਰੇ"],
    "options_pa": ["ਡਾਕਟਰਾ", "ਡਾਕਟਰੀ", "ਡਾਕਟਰਨ", "ਡਾਕਟਰੇ"],
    "answer_en": "ਡਾਕਟਰਨ",
    "answer_pa": "ਡਾਕਟਰਨ"
  },
  {
    "num": 35,
    "question_en": "Which of these is a Punjabi folk game?",
    "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਖੇਡ ਹੈ?",
    "options_en": ["Kikli", "Cricket", "Football", "Badminton"],
    "options_pa": ["ਕਿੱਕਲੀ", "ਕ੍ਰਿਕਟ", "ਫੁੱਟਬਾਲ", "ਬੈਡਮਿੰਟਨ"],
    "answer_en": "Kikli",
    "answer_pa": "ਕਿੱਕਲੀ"
  },
  {
    "num": 36,
    "question_en": "What is the meaning of 'ਪਿਆਰਾ' in English?",
    "question_pa": "'ਪਿਆਰਾ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
    "options_en": ["Dear", "Hate", "Angry", "Sad"],
    "options_pa": ["ਪਿਆਰਾ", "ਨਫ਼ਰਤ", "ਗੁੱਸਾ", "ਉਦਾਸ"],
    "answer_en": "Dear",
    "answer_pa": "ਪਿਆਰਾ"
  },
  {
    "num": 37,
    "question_en": "Which tense is 'ਮੈਂ ਖਾਧਾ ਸੀ' in?",
    "question_pa": "'ਮੈਂ ਖਾਧਾ ਸੀ' ਕਿਹੜੇ ਕਾਲ ਵਿੱਚ ਹੈ?",
    "options_en": ["Past Perfect", "Present", "Future", "Continuous"],
    "options_pa": ["ਭੂਤ ਪੂਰਨ", "ਵਰਤਮਾਨ", "ਭਵਿੱਖ", "ਜਾਰੀ"],
    "answer_en": "Past Perfect",
    "answer_pa": "ਭੂਤ ਪੂਰਨ"
  },
  {
    "num": 38,
    "question_en": "Who is the author of 'Raat Pashmine Di'?",
    "question_pa": "'ਰਾਤ ਪਸ਼ਮੀਨੇ ਦੀ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
    "options_en": ["Amrita Pritam", "Shiv Kumar Batalvi", "Surjit Patar", "Pash"],
    "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼"],
    "answer_en": "Amrita Pritam",
    "answer_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"
  },
  {
    "num": 39,
    "question_en": "What is the plural of 'ਪੁਸਤਕ' (book)?",
    "question_pa": "'ਪੁਸਤਕ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
    "options_en": ["ਪੁਸਤਕਾਂ", "ਪੁਸਤਕੇ", "ਪੁਸਤਕੀ", "ਪੁਸਤਕੋ"],
    "options_pa": ["ਪੁਸਤਕਾਂ", "ਪੁਸਤਕੇ", "ਪੁਸਤਕੀ", "ਪੁਸਤਕੋ"],
    "answer_en": "ਪੁਸਤਕਾਂ",
    "answer_pa": "ਪੁਸਤਕਾਂ"
  },
  {
    "num": 40,
    "question_en": "Which Punjabi poet is called 'Punjab's Shakespeare'?",
    "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਕਵੀ ਨੂੰ 'ਪੰਜਾਬ ਦਾ ਸ਼ੇਕਸਪੀਅਰ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
    "options_en": ["Shiv Kumar Batalvi", "Bhai Vir Singh", "Amrita Pritam", "Puran Singh"],
    "options_pa": ["ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਪੂਰਨ ਸਿੰਘ"],
    "answer_en": "Shiv Kumar Batalvi",
    "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"
  },
  {
    "num": 41,
    "question_en": "What is the meaning of 'ਸੁਪਨਾ' in English?",
    "question_pa": "'ਸੁਪਨਾ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
    "options_en": ["Dream", "Sleep", "Night", "Hope"],
    "options_pa": ["ਸੁਪਨਾ", "ਨੀਂਦ", "ਰਾਤ", "ਆਸ"],
    "answer_en": "Dream",
    "answer_pa": "ਸੁਪਨਾ"
  },
  {
    "num": 42,
    "question_en": "Which of these is a Punjabi folk dance?",
    "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਨਾਚ ਹੈ?",
    "options_en": ["Giddha", "Kathak", "Bharatanatyam", "Odissi"],
    "options_pa": ["ਗਿੱਧਾ", "ਕਥਕ", "ਭਰਤਨਾਟਿਅਮ", "ਓਡੀਸੀ"],
    "answer_en": "Giddha",
    "answer_pa": "ਗਿੱਧਾ"
  },
  {
    "num": 43,
    "question_en": "Who composed the famous Punjabi song 'Maye Ni Maye'?",
    "question_pa": "ਮਸ਼ਹੂਰ ਪੰਜਾਬੀ ਗੀਤ 'ਮਾਏ ਨੀ ਮਾਏ' ਕਿਸ ਨੇ ਲਿਖਿਆ?",
    "options_en": ["Surjit Bindrakhia", "Kuldeep Manak", "Amar Singh Chamkila", "Gurdas Maan"],
    "options_pa": ["ਸੁਰਜੀਤ ਬਿੰਦਰਖੀਆ", "ਕੁਲਦੀਪ ਮਾਣਕ", "ਅਮਰ ਸਿੰਘ ਚਮਕੀਲਾ", "ਗੁਰਦਾਸ ਮਾਨ"],
    "answer_en": "Amar Singh Chamkila",
    "answer_pa": "ਅਮਰ ਸਿੰਘ ਚਮਕੀਲਾ"
  },
  {
    "num": 44,
    "question_en": "What is the opposite of 'ਚਾਲਾਕ' (clever)?",
    "question_pa": "'ਚਾਲਾਕ' ਦਾ ਉਲਟ ਕੀ ਹੈ?",
    "options_en": ["ਮੂਰਖ", "ਸ਼ਰਾਰਤੀ", "ਸੀਧਾ", "ਧੀਮਾ"],
    "options_pa": ["ਮੂਰਖ", "ਸ਼ਰਾਰਤੀ", "ਸੀਧਾ", "ਧੀਮਾ"],
    "answer_en": "ਮੂਰਖ",
    "answer_pa": "ਮੂਰਖ"
  },
  {
    "num": 45,
    "question_en": "Which of these is a traditional Punjabi sweet dish?",
    "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪਰੰਪਰਾਗਤ ਪੰਜਾਬੀ ਮਿੱਠਾ ਪਕਵਾਨ ਹੈ?",
    "options_en": ["Gajar ka Halwa", "Gulab Jamun", "Pinni", "Rasgulla"],
    "options_pa": ["ਗਾਜਰ ਦਾ ਹਲਵਾ", "ਗੁਲਾਬ ਜਾਮੁਨ", "ਪਿੰਨੀ", "ਰਸਗੁੱਲਾ"],
    "answer_en": "Pinni",
    "answer_pa": "ਪਿੰਨੀ"
  },
  {
    "num": 46,
    "question_en": "What is the meaning of 'ਮੁਹੱਬਤ' in English?",
    "question_pa": "'ਮੁਹੱਬਤ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
    "options_en": ["Love", "Hate", "Friendship", "Anger"],
    "options_pa": ["ਪਿਆਰ", "ਨਫ਼ਰਤ", "ਦੋਸਤੀ", "ਗੁੱਸਾ"],
    "answer_en": "Love",
    "answer_pa": "ਪਿਆਰ"
  },
  {
    "num": 47,
    "question_en": "Which tense is 'ਮੈਂ ਪੜ੍ਹਿਆ ਸੀ' in?",
    "question_pa": "'ਮੈਂ ਪੜ੍ਹਿਆ ਸੀ' ਕਿਹੜੇ ਕਾਲ ਵਿੱਚ ਹੈ?",
    "options_en": ["Past Perfect", "Present", "Future", "Continuous"],
    "options_pa": ["ਭੂਤ ਪੂਰਨ", "ਵਰਤਮਾਨ", "ਭਵਿੱਖ", "ਜਾਰੀ"],
    "answer_en": "Past Perfect",
    "answer_pa": "ਭੂਤ ਪੂਰਨ"
  },
  {
    "num": 48,
    "question_en": "Who is the author of 'Ik Mian Do Talwaran'?",
    "question_pa": "'ਇੱਕ ਮਿਆਂ ਦੋ ਤਲਵਾਰਾਂ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
    "options_en": ["Kartar Singh Duggal", "Nanak Singh", "Gurdial Singh", "Dalip Kaur Tiwana"],
    "options_pa": ["ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ", "ਨਾਨਕ ਸਿੰਘ", "ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ"],
    "answer_en": "Kartar Singh Duggal",
    "answer_pa": "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ"
  },
  {
    "num": 49,
    "question_en": "What is the plural of 'ਪੱਤਾ' (leaf)?",
    "question_pa": "'ਪੱਤਾ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
    "options_en": ["ਪੱਤੇ", "ਪੱਤਿਆਂ", "ਪੱਤਾਵਾਂ", "ਪੱਤੋ"],
    "options_pa": ["ਪੱਤੇ", "ਪੱਤਿਆਂ", "ਪੱਤਾਵਾਂ", "ਪੱਤੋ"],
    "answer_en": "ਪੱਤੇ",
    "answer_pa": "ਪੱਤੇ"
  },
  {
    "num": 50,
    "question_en": "Which Punjabi poet wrote 'Sab Ton Khatarnak'?",
    "question_pa": "'ਸਭ ਤੋਂ ਖਤਰਨਾਕ' ਕਿਸ ਕਵੀ ਦੀ ਰਚਨਾ ਹੈ?",
    "options_en": ["Pash", "Surjit Patar", "Shiv Kumar Batalvi", "Amrita Pritam"],
    "options_pa": ["ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
    "answer_en": "Pash",
    "answer_pa": "ਪਾਸ਼"
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