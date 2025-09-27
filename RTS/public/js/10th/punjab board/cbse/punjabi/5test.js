const questions = [
        
                {
                  "num": 1,
                  "question_en": "Which Punjabi poet is known as the 'Word Wizard'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਕਵੀ ਨੂੰ 'ਸ਼ਬਦ ਜਾਦੂਗਰ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Shiv Kumar Batalvi", "Surjit Patar", "Pash", "Amrita Pritam"],
                  "options_pa": ["ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
                  "answer_en": "Surjit Patar",
                  "answer_pa": "ਸੁਰਜੀਤ ਪਾਤਰ"
                },
                {
                  "num": 2,
                  "question_en": "What is the Punjabi word for 'butterfly'?",
                  "question_pa": "'ਤਿਤਲੀ' ਲਈ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਤੋਤਾ", "ਚਿੜੀ", "ਤਿਤਲੀ", "ਮੱਖੀ"],
                  "options_pa": ["ਤੋਤਾ", "ਚਿੜੀ", "ਤਿਤਲੀ", "ਮੱਖੀ"],
                  "answer_en": "ਤਿਤਲੀ",
                  "answer_pa": "ਤਿਤਲੀ"
                },
                {
                  "num": 3,
                  "question_en": "Which river is called the 'Lifeline of Punjab'?",
                  "question_pa": "ਕਿਸ ਨਦੀ ਨੂੰ 'ਪੰਜਾਬ ਦੀ ਜੀਵਨ ਰੇਖਾ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Yamuna", "Sutlej", "Ganga", "Kaveri"],
                  "options_pa": ["ਯਮੁਨਾ", "ਸਤਲੁਜ", "ਗੰਗਾ", "ਕਾਵੇਰੀ"],
                  "answer_en": "Sutlej",
                  "answer_pa": "ਸਤਲੁਜ"
                },
                {
                  "num": 4,
                  "question_en": "What is the traditional Punjabi embroidery called?",
                  "question_pa": "ਪਰੰਪਰਾਗਤ ਪੰਜਾਬੀ ਕਢਾਈ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?",
                  "options_en": ["Chikankari", "Phulkari", "Kantha", "Zardozi"],
                  "options_pa": ["ਚਿਕਨਕਾਰੀ", "ਫੁਲਕਾਰੀ", "ਕੰਥਾ", "ਜ਼ਰਦੋਜ਼ੀ"],
                  "answer_en": "Phulkari",
                  "answer_pa": "ਫੁਲਕਾਰੀ"
                },
                {
                  "num": 5,
                  "question_en": "Which Punjabi folk song is sung during weddings?",
                  "question_pa": "ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਗੀਤ ਵਿਆਹਾਂ ਦੇ ਮੌਕੇ ਗਾਇਆ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Jugni", "Mahiya", "Suhag", "Tappe"],
                  "options_pa": ["ਜੁਗਨੀ", "ਮਹੀਆ", "ਸੁਹਾਗ", "ਟੱਪੇ"],
                  "answer_en": "Suhag",
                  "answer_pa": "ਸੁਹਾਗ"
                },
                {
                  "num": 6,
                  "question_en": "What is the plural of 'ਪੁਸਤਕ' (Book) in Punjabi?",
                  "question_pa": "'ਪੁਸਤਕ' ਦਾ ਬਹੁ ਵਚਨ ਕੀ ਹੈ?",
                  "options_en": ["ਪੁਸਤਕਾਂ", "ਪੁਸਤਕੇ", "ਪੁਸਤਕੀਂ", "ਪੁਸਤਕੋ"],
                  "options_pa": ["ਪੁਸਤਕਾਂ", "ਪੁਸਤਕੇ", "ਪੁਸਤਕੀਂ", "ਪੁਸਤਕੋ"],
                  "answer_en": "ਪੁਸਤਕਾਂ",
                  "answer_pa": "ਪੁਸਤਕਾਂ"
                },
                {
                  "num": 7,
                  "question_en": "Which instrument accompanies traditional Punjabi 'Tappa' songs?",
                  "question_pa": "ਪਰੰਪਰਾਗਤ ਪੰਜਾਬੀ 'ਟੱਪਾ' ਗੀਤਾਂ ਨਾਲ ਕਿਹੜਾ ਵਾਦਯ ਵਜਾਇਆ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Tabla", "Dholak", "Chimta", "Algoza"],
                  "options_pa": ["ਤਬਲਾ", "ਢੋਲਕ", "ਚਿਮਟਾ", "ਅਲਗੋਜ਼ਾ"],
                  "answer_en": "Chimta",
                  "answer_pa": "ਚਿਮਟਾ"
                },
                {
                  "num": 8,
                  "question_en": "What is the meaning of 'ਬਾਬਾ' in English?",
                  "question_pa": "'ਬਾਬਾ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Father", "Grandfather", "Elderly man/Saint", "Uncle"],
                  "options_pa": ["ਪਿਤਾ", "ਦਾਦਾ", "ਬਜ਼ੁਰਗ ਵਿਅਕਤੀ/ਸੰਤ", "ਚਾਚਾ"],
                  "answer_en": "Elderly man/Saint",
                  "answer_pa": "ਬਜ਼ੁਰਗ ਵਿਅਕਤੀ/ਸੰਤ"
                },
                {
                  "num": 9,
                  "question_en": "Which Punjabi writer composed 'Panth Prakash'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਲੇਖਕ ਨੇ 'ਪੰਥ ਪ੍ਰਕਾਸ਼' ਦੀ ਰਚਨਾ ਕੀਤੀ?",
                  "options_en": ["Bhai Vir Singh", "Ratan Singh Bhangu", "Kahn Singh Nabha", "Giani Gian Singh"],
                  "options_pa": ["ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਰਤਨ ਸਿੰਘ ਭੰਗੂ", "ਕਾਨ੍ਹ ਸਿੰਘ ਨਾਭਾ", "ਗਿਆਨੀ ਗਿਆਨ ਸਿੰਘ"],
                  "answer_en": "Ratan Singh Bhangu",
                  "answer_pa": "ਰਤਨ ਸਿੰਘ ਭੰਗੂ"
                },
                {
                  "num": 10,
                  "question_en": "What is the feminine form of 'ਮੁੰਡਾ' (Boy) in Punjabi?",
                  "question_pa": "'ਮੁੰਡਾ' ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਮੁੰਡੀ", "ਕੁੜੀ", "ਧੀ", "ਪੋਤੀ"],
                  "options_pa": ["ਮੁੰਡੀ", "ਕੁੜੀ", "ਧੀ", "ਪੋਤੀ"],
                  "answer_en": "ਮੁੰਡੀ",
                  "answer_pa": "ਮੁੰਡੀ"
                },
                {
                  "num": 11,
                  "question_en": "Which Punjabi festival marks the harvest season?",
                  "question_pa": "ਕਿਹੜਾ ਪੰਜਾਬੀ ਤਿਉਹਾਰ ਫਸਲ ਦੀ ਕਟਾਈ ਨਾਲ ਸਬੰਧਤ ਹੈ?",
                  "options_en": ["Lohri", "Karva Chauth", "Teeyan", "Hola Mohalla"],
                  "options_pa": ["ਲੋਹੜੀ", "ਕਰਵਾ ਚੌਥ", "ਤੀਆਂ", "ਹੋਲਾ ਮਹੱਲਾ"],
                  "answer_en": "Lohri",
                  "answer_pa": "ਲੋਹੜੀ"
                },
                {
                  "num": 12,
                  "question_en": "What is the correct Punjabi translation of 'hospital'?",
                  "question_pa": "'ਹਸਪਤਾਲ' ਦਾ ਸਹੀ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਕੀ ਹੈ?",
                  "options_en": ["ਦਵਾਖ਼ਾਨਾ", "ਵਿਦਿਆਲਾ", "ਕਚਹਿਰੀ", "ਪੁਸਤਕਾਲਾ"],
                  "options_pa": ["ਦਵਾਖ਼ਾਨਾ", "ਵਿਦਿਆਲਾ", "ਕਚਹਿਰੀ", "ਪੁਸਤਕਾਲਾ"],
                  "answer_en": "ਦਵਾਖ਼ਾਨਾ",
                  "answer_pa": "ਦਵਾਖ਼ਾਨਾ"
                },
                {
                  "num": 13,
                  "question_en": "Which of these is a Punjabi folk tale?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਪੰਜਾਬੀ ਲੋਕ ਕਹਾਣੀ ਹੈ?",
                  "options_en": ["Heer Ranjha", "Panchatantra", "Akbar-Birbal", "Jataka Tales"],
                  "options_pa": ["ਹੀਰ ਰਾਂਝਾ", "ਪੰਚਤੰਤਰ", "ਅਕਬਰ-ਬੀਰਬਲ", "ਜਾਤਕ ਕਥਾਵਾਂ"],
                  "answer_en": "Heer Ranjha",
                  "answer_pa": "ਹੀਰ ਰਾਂਝਾ"
                },
                {
                  "num": 14,
                  "question_en": "What is the Punjabi word for 'sunflower'?",
                  "question_pa": "'ਸੂਰਜਮੁਖੀ' ਲਈ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਗੁਲਾਬ", "ਸੂਰਜਮੁਖੀ", "ਚਮੇਲੀ", "ਗੇਂਦਾ"],
                  "options_pa": ["ਗੁਲਾਬ", "ਸੂਰਜਮੁਖੀ", "ਚਮੇਲੀ", "ਗੇਂਦਾ"],
                  "answer_en": "ਸੂਰਜਮੁਖੀ",
                  "answer_pa": "ਸੂਰਜਮੁਖੀ"
                },
                {
                  "num": 15,
                  "question_en": "Which Punjabi poet wrote 'Loona'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਕਵੀ ਨੇ 'ਲੂਣਾ' ਲਿਖੀ?",
                  "options_en": ["Amrita Pritam", "Shiv Kumar Batalvi", "Pash", "Surjit Patar"],
                  "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"
                },
                {
                  "num": 16,
                  "question_en": "What is the meaning of 'ਸੱਚ' in English?",
                  "question_pa": "'ਸੱਚ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Lie", "Truth", "Story", "Promise"],
                  "options_pa": ["ਝੂਠ", "ਸੱਚ", "ਕਹਾਣੀ", "ਵਾਅਦਾ"],
                  "answer_en": "Truth",
                  "answer_pa": "ਸੱਚ"
                },
                {
                  "num": 17,
                  "question_en": "Which of these is a traditional Punjabi musical instrument?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਪਰੰਪਰਾਗਤ ਸੰਗੀਤ ਵਾਦਯ ਹੈ?",
                  "options_en": ["Sitar", "Sarangi", "Tumbi", "Veena"],
                  "options_pa": ["ਸਿਤਾਰ", "ਸਾਰੰਗੀ", "ਤੁੰਬੀ", "ਵੀਣਾ"],
                  "answer_en": "Tumbi",
                  "answer_pa": "ਤੁੰਬੀ"
                },
                {
                  "num": 18,
                  "question_en": "What is the correct Punjabi word for 'rainbow'?",
                  "question_pa": "'ਰੇਨਬੋ' ਲਈ ਸਹੀ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਬੱਦਲ", "ਇੰਦਰਧਨੁਸ਼", "ਝੜੀ", "ਧੁੱਪ"],
                  "options_pa": ["ਬੱਦਲ", "ਇੰਦਰਧਨੁਸ਼", "ਝੜੀ", "ਧੁੱਪ"],
                  "answer_en": "ਇੰਦਰਧਨੁਸ਼",
                  "answer_pa": "ਇੰਦਰਧਨੁਸ਼"
                },
                {
                  "num": 19,
                  "question_en": "Which Punjabi writer won the Sahitya Akademi Award for 'Marhi Da Deeva'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਲੇਖਕ ਨੇ 'ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ' ਲਈ ਸਾਹਿਤ ਅਕਾਦਮੀ ਪੁਰਸਕਾਰ ਜਿੱਤਿਆ?",
                  "options_en": ["Gurdial Singh", "Nanak Singh", "Dalip Kaur Tiwana", "Kartar Singh Duggal"],
                  "options_pa": ["ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਨਾਨਕ ਸਿੰਘ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ"],
                  "answer_en": "Gurdial Singh",
                  "answer_pa": "ਗੁਰਦਿਆਲ ਸਿੰਘ"
                },
                {
                  "num": 20,
                  "question_en": "What is the Punjabi word for 'cloud'?",
                  "question_pa": "'ਬੱਦਲ' ਲਈ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਬਾਰਿਸ਼", "ਬੱਦਲ", "ਝੀਂਗਰ", "ਧੁੱਪ"],
                  "options_pa": ["ਬਾਰਿਸ਼", "ਬੱਦਲ", "ਝੀਂਗਰ", "ਧੁੱਪ"],
                  "answer_en": "ਬੱਦਲ",
                  "answer_pa": "ਬੱਦਲ"
                },
                {
                  "num": 21,
                  "question_en": "Which of these is a Punjabi folk game?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਖੇਡ ਹੈ?",
                  "options_en": ["Kabaddi", "Cricket", "Football", "Badminton"],
                  "options_pa": ["ਕਬੱਡੀ", "ਕ੍ਰਿਕਟ", "ਫੁੱਟਬਾਲ", "ਬੈਡਮਿੰਟਨ"],
                  "answer_en": "Kabaddi",
                  "answer_pa": "ਕਬੱਡੀ"
                },
                {
                  "num": 22,
                  "question_en": "What is the meaning of 'ਪਿਆਰ' in English?",
                  "question_pa": "'ਪਿਆਰ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Hate", "Love", "Anger", "Joy"],
                  "options_pa": ["ਨਫ਼ਰਤ", "ਪਿਆਰ", "ਗੁੱਸਾ", "ਖੁਸ਼ੀ"],
                  "answer_en": "Love",
                  "answer_pa": "ਪਿਆਰ"
                },
                {
                  "num": 23,
                  "question_en": "Which Punjabi poet wrote 'Main ik shikra yaar banaya'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਕਵੀ ਨੇ 'ਮੈਂ ਇੱਕ ਸ਼ਿਕਰਾ ਯਾਰ ਬਣਾਇਆ' ਲਿਖੀ?",
                  "options_en": ["Bulleh Shah", "Waris Shah", "Baba Farid", "Sultan Bahu"],
                  "options_pa": ["ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਵਾਰਿਸ ਸ਼ਾਹ", "ਬਾਬਾ ਫਰੀਦ", "ਸੁਲਤਾਨ ਬਾਹੂ"],
                  "answer_en": "Bulleh Shah",
                  "answer_pa": "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ"
                },
                {
                  "num": 24,
                  "question_en": "What is the correct Punjabi word for 'teacher'?",
                  "question_pa": "'ਅਧਿਆਪਕ' ਲਈ ਸਹੀ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਗੁਰੂ", "ਚਾਚਾ", "ਮਾਸਟਰ", "ਪ੍ਰਿੰਸੀਪਲ"],
                  "options_pa": ["ਗੁਰੂ", "ਚਾਚਾ", "ਮਾਸਟਰ", "ਪ੍ਰਿੰਸੀਪਲ"],
                  "answer_en": "ਗੁਰੂ",
                  "answer_pa": "ਗੁਰੂ"
                },
                {
                  "num": 25,
                  "question_en": "Which of these is a traditional Punjabi bread?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਪੰਜਾਬੀ ਪਰੰਪਰਾਗਤ ਰੋਟੀ ਹੈ?",
                  "options_en": ["Naan", "Bhatura", "Missi Roti", "All of the above"],
                  "options_pa": ["ਨਾਨ", "ਭਟੂਰਾ", "ਮਿੱਸੀ ਰੋਟੀ", "ਸਾਰੇ ਉੱਪਰ ਵਾਲੇ"],
                  "answer_en": "All of the above",
                  "answer_pa": "ਸਾਰੇ ਉੱਪਰ ਵਾਲੇ"
                },
                {
                  "num": 26,
                  "question_en": "What is the feminine form of 'ਸ਼ੇਰ' (Lion) in Punjabi?",
                  "question_pa": "'ਸ਼ੇਰ' ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਸ਼ੇਰਨੀ", "ਬਿੱਲੀ", "ਕੁੱਤੀ", "ਚੂਹੀ"],
                  "options_pa": ["ਸ਼ੇਰਨੀ", "ਬਿੱਲੀ", "ਕੁੱਤੀ", "ਚੂਹੀ"],
                  "answer_en": "ਸ਼ੇਰਨੀ",
                  "answer_pa": "ਸ਼ੇਰਨੀ"
                },
                {
                  "num": 27,
                  "question_en": "Which Punjabi festival is celebrated with bonfires?",
                  "question_pa": "ਕਿਹੜਾ ਪੰਜਾਬੀ ਤਿਉਹਾਰ ਅੱਗ ਦੇ ਆਲੇ ਦੁਆਲੇ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Lohri", "Karva Chauth", "Teeyan", "Raksha Bandhan"],
                  "options_pa": ["ਲੋਹੜੀ", "ਕਰਵਾ ਚੌਥ", "ਤੀਆਂ", "ਰੱਖੜੀ"],
                  "answer_en": "Lohri",
                  "answer_pa": "ਲੋਹੜੀ"
                },
                {
                  "num": 28,
                  "question_en": "What is the meaning of 'ਧੰਨਵਾਦ' in English?",
                  "question_pa": "'ਧੰਨਵਾਦ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Sorry", "Thank You", "Welcome", "Goodbye"],
                  "options_pa": ["ਮਾਫ਼ ਕਰਨਾ", "ਧੰਨਵਾਦ", "ਸੁਆਗਤ ਹੈ", "ਅਲਵਿਦਾ"],
                  "answer_en": "Thank You",
                  "answer_pa": "ਧੰਨਵਾਦ"
                },
                {
                  "num": 29,
                  "question_en": "Which Punjabi folk dance is performed by women?",
                  "question_pa": "ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਨਾਚ ਔਰਤਾਂ ਦੁਆਰਾ ਕੀਤਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Bhangra", "Giddha", "Jhumar", "Sammi"],
                  "options_pa": ["ਭੰਗੜਾ", "ਗਿੱਧਾ", "ਝੂਮਰ", "ਸੰਮੀ"],
                  "answer_en": "Giddha",
                  "answer_pa": "ਗਿੱਧਾ"
                },
                {
                  "num": 30,
                  "question_en": "What is the Punjabi word for 'moon'?",
                  "question_pa": "'ਚੰਦ' ਲਈ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਸੂਰਜ", "ਤਾਰਾ", "ਚੰਦ", "ਧਰਤੀ"],
                  "options_pa": ["ਸੂਰਜ", "ਤਾਰਾ", "ਚੰਦ", "ਧਰਤੀ"],
                  "answer_en": "ਚੰਦ",
                  "answer_pa": "ਚੰਦ"
                },
                {
                  "num": 31,
                  "question_en": "Which of these is a Punjabi folk musical instrument?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਸੰਗੀਤ ਵਾਦਯ ਹੈ?",
                  "options_en": ["Harmonium", "Sarangi", "Algoza", "Veena"],
                  "options_pa": ["ਹਾਰਮੋਨੀਅਮ", "ਸਾਰੰਗੀ", "ਅਲਗੋਜ਼ਾ", "ਵੀਣਾ"],
                  "answer_en": "Algoza",
                  "answer_pa": "ਅਲਗੋਜ਼ਾ"
                },
                {
                  "num": 32,
                  "question_en": "What is the correct Punjabi translation of 'Happy Birthday'?",
                  "question_pa": "'ਹੈਪੀ ਬਰਥਡੇ' ਦਾ ਸਹੀ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਕੀ ਹੈ?",
                  "options_en": ["ਨਵੇਂ ਸਾਲ ਦੀਆਂ ਵਧਾਈਆਂ", "ਜਨਮਦਿਨ ਮੁਬਾਰਕ", "ਸ਼ੁਭਕਾਮਨਾਵਾਂ", "ਧੰਨਵਾਦ"],
                  "options_pa": ["ਨਵੇਂ ਸਾਲ ਦੀਆਂ ਵਧਾਈਆਂ", "ਜਨਮਦਿਨ ਮੁਬਾਰਕ", "ਸ਼ੁਭਕਾਮਨਾਵਾਂ", "ਧੰਨਵਾਦ"],
                  "answer_en": "ਜਨਮਦਿਨ ਮੁਬਾਰਕ",
                  "answer_pa": "ਜਨਮਦਿਨ ਮੁਬਾਰਕ"
                },
                {
                  "num": 33,
                  "question_en": "Which Punjabi writer is known for 'Suraj Prakash'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਲੇਖਕ ਨੂੰ 'ਸੂਰਜ ਪ੍ਰਕਾਸ਼' ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Bhai Santokh Singh", "Bhai Vir Singh", "Kahn Singh Nabha", "Giani Gian Singh"],
                  "options_pa": ["ਭਾਈ ਸੰਤੋਖ ਸਿੰਘ", "ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਕਾਨ੍ਹ ਸਿੰਘ ਨਾਭਾ", "ਗਿਆਨੀ ਗਿਆਨ ਸਿੰਘ"],
                  "answer_en": "Bhai Santokh Singh",
                  "answer_pa": "ਭਾਈ ਸੰਤੋਖ ਸਿੰਘ"
                },
                {
                  "num": 34,
                  "question_en": "What is the meaning of 'ਚੰਗਾ' in English?",
                  "question_pa": "'ਚੰਗਾ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Bad", "Good", "Small", "Big"],
                  "options_pa": ["ਮਾੜਾ", "ਚੰਗਾ", "ਛੋਟਾ", "ਵੱਡਾ"],
                  "answer_en": "Good",
                  "answer_pa": "ਚੰਗਾ"
                },
                {
                  "num": 35,
                  "question_en": "Which Punjabi poet is associated with 'Birha da Sultan'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਕਵੀ ਨੂੰ 'ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Shiv Kumar Batalvi", "Surjit Patar", "Pash", "Mohan Singh"],
                  "options_pa": ["ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼", "ਮੋਹਨ ਸਿੰਘ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"
                },
                {
                  "num": 36,
                  "question_en": "What is the Punjabi word for 'moon'?",
                  "question_pa": "'ਚੰਦ' ਲਈ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਸੂਰਜ", "ਤਾਰਾ", "ਚੰਦ", "ਧਰਤੀ"],
                  "options_pa": ["ਸੂਰਜ", "ਤਾਰਾ", "ਚੰਦ", "ਧਰਤੀ"],
                  "answer_en": "ਚੰਦ",
                  "answer_pa": "ਚੰਦ"
                },
                {
                  "num": 37,
                  "question_en": "Which of these is a traditional Punjabi dish?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਪਰੰਪਰਾਗਤ ਪਕਵਾਨ ਹੈ?",
                  "options_en": ["Idli", "Dosa", "Makki di Roti & Sarson da Saag", "Pongal"],
                  "options_pa": ["ਇਡਲੀ", "ਡੋਸਾ", "ਮੱਕੀ ਦੀ ਰੋਟੀ ਅਤੇ ਸਰੋਂ ਦਾ ਸਾਗ", "ਪੋਂਗਲ"],
                  "answer_en": "Makki di Roti & Sarson da Saag",
                  "answer_pa": "ਮੱਕੀ ਦੀ ਰੋਟੀ ਅਤੇ ਸਰੋਂ ਦਾ ਸਾਗ"
                },
                {
                  "num": 38,
                  "question_en": "What is the correct Punjabi word for 'teacher'?",
                  "question_pa": "'ਅਧਿਆਪਕ' ਲਈ ਸਹੀ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਗੁਰੂ", "ਚਾਚਾ", "ਦੋਸਤ", "ਪੜੋਸੀ"],
                  "options_pa": ["ਗੁਰੂ", "ਚਾਚਾ", "ਦੋਸਤ", "ਪੜੋਸੀ"],
                  "answer_en": "ਗੁਰੂ",
                  "answer_pa": "ਗੁਰੂ"
                },
                {
                  "num": 39,
                  "question_en": "Which Punjabi writer is known for 'Panth Prakash'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਲੇਖਕ ਨੂੰ 'ਪੰਥ ਪ੍ਰਕਾਸ਼' ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Bhai Vir Singh", "Ratan Singh Bhangu", "Kahn Singh Nabha", "Giani Gian Singh"],
                  "options_pa": ["ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਰਤਨ ਸਿੰਘ ਭੰਗੂ", "ਕਾਨ੍ਹ ਸਿੰਘ ਨਾਭਾ", "ਗਿਆਨੀ ਗਿਆਨ ਸਿੰਘ"],
                  "answer_en": "Ratan Singh Bhangu",
                  "answer_pa": "ਰਤਨ ਸਿੰਘ ਭੰਗੂ"
                },
                {
                  "num": 40,
                  "question_en": "What is the feminine form of 'ਸ਼ੇਰ' (Lion) in Punjabi?",
                  "question_pa": "'ਸ਼ੇਰ' ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਸ਼ੇਰਨੀ", "ਬਿੱਲੀ", "ਕੁੱਤੀ", "ਚੂਹੀ"],
                  "options_pa": ["ਸ਼ੇਰਨੀ", "ਬਿੱਲੀ", "ਕੁੱਤੀ", "ਚੂਹੀ"],
                  "answer_en": "ਸ਼ੇਰਨੀ",
                  "answer_pa": "ਸ਼ੇਰਨੀ"
                },
                {
                  "num": 41,
                  "question_en": "Which of these is a Punjabi folk drama?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਨਾਟਕ ਹੈ?",
                  "options_en": ["Nautanki", "Tamasha", "Swang", "Bhand Pather"],
                  "options_pa": ["ਨੌਟੰਕੀ", "ਤਮਾਸ਼ਾ", "ਸਵਾਂਗ", "ਭੰਡ ਪਥੇਰ"],
                  "answer_en": "Swang",
                  "answer_pa": "ਸਵਾਂਗ"
                },
                {
                  "num": 42,
                  "question_en": "What is the meaning of 'ਚੰਗਾ' in English?",
                  "question_pa": "'ਚੰਗਾ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Bad", "Good", "Small", "Big"],
                  "options_pa": ["ਮਾੜਾ", "ਚੰਗਾ", "ਛੋਟਾ", "ਵੱਡਾ"],
                  "answer_en": "Good",
                  "answer_pa": "ਚੰਗਾ"
                },
                {
                  "num": 43,
                  "question_en": "Which Punjabi poet is associated with 'Birha da Sultan'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਕਵੀ ਨੂੰ 'ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Shiv Kumar Batalvi", "Surjit Patar", "Pash", "Mohan Singh"],
                  "options_pa": ["ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼", "ਮੋਹਨ ਸਿੰਘ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"
                },
                {
                  "num": 44,
                  "question_en": "What is the Punjabi word for 'moon'?",
                  "question_pa": "'ਚੰਦ' ਲਈ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਸੂਰਜ", "ਤਾਰਾ", "ਚੰਦ", "ਧਰਤੀ"],
                  "options_pa": ["ਸੂਰਜ", "ਤਾਰਾ", "ਚੰਦ", "ਧਰਤੀ"],
                  "answer_en": "ਚੰਦ",
                  "answer_pa": "ਚੰਦ"
                },
                {
                  "num": 45,
                  "question_en": "Which of these is a traditional Punjabi dish?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਪਰੰਪਰਾਗਤ ਪਕਵਾਨ ਹੈ?",
                  "options_en": ["Idli", "Dosa", "Makki di Roti & Sarson da Saag", "Pongal"],
                  "options_pa": ["ਇਡਲੀ", "ਡੋਸਾ", "ਮੱਕੀ ਦੀ ਰੋਟੀ ਅਤੇ ਸਰੋਂ ਦਾ ਸਾਗ", "ਪੋਂਗਲ"],
                  "answer_en": "Makki di Roti & Sarson da Saag",
                  "answer_pa": "ਮੱਕੀ ਦੀ ਰੋਟੀ ਅਤੇ ਸਰੋਂ ਦਾ ਸਾਗ"
                },
                {
                  "num": 46,
                  "question_en": "What is the correct Punjabi word for 'teacher'?",
                  "question_pa": "'ਅਧਿਆਪਕ' ਲਈ ਸਹੀ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਗੁਰੂ", "ਚਾਚਾ", "ਦੋਸਤ", "ਪੜੋਸੀ"],
                  "options_pa": ["ਗੁਰੂ", "ਚਾਚਾ", "ਦੋਸਤ", "ਪੜੋਸੀ"],
                  "answer_en": "ਗੁਰੂ",
                  "answer_pa": "ਗੁਰੂ"
                },
                {
                  "num": 47,
                  "question_en": "Which Punjabi writer is known for 'Panth Prakash'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਲੇਖਕ ਨੂੰ 'ਪੰਥ ਪ੍ਰਕਾਸ਼' ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Bhai Vir Singh", "Ratan Singh Bhangu", "Kahn Singh Nabha", "Giani Gian Singh"],
                  "options_pa": ["ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਰਤਨ ਸਿੰਘ ਭੰਗੂ", "ਕਾਨ੍ਹ ਸਿੰਘ ਨਾਭਾ", "ਗਿਆਨੀ ਗਿਆਨ ਸਿੰਘ"],
                  "answer_en": "Ratan Singh Bhangu",
                  "answer_pa": "ਰਤਨ ਸਿੰਘ ਭੰਗੂ"
                },
                {
                  "num": 48,
                  "question_en": "What is the feminine form of 'ਸ਼ੇਰ' (Lion) in Punjabi?",
                  "question_pa": "'ਸ਼ੇਰ' ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਸ਼ੇਰਨੀ", "ਬਿੱਲੀ", "ਕੁੱਤੀ", "ਚੂਹੀ"],
                  "options_pa": ["ਸ਼ੇਰਨੀ", "ਬਿੱਲੀ", "ਕੁੱਤੀ", "ਚੂਹੀ"],
                  "answer_en": "ਸ਼ੇਰਨੀ",
                  "answer_pa": "ਸ਼ੇਰਨੀ"
                },
                {
                  "num": 49,
                  "question_en": "Which of these is a Punjabi folk drama?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਨਾਟਕ ਹੈ?",
                  "options_en": ["Nautanki", "Tamasha", "Swang", "Bhand Pather"],
                  "options_pa": ["ਨੌਟੰਕੀ", "ਤਮਾਸ਼ਾ", "ਸਵਾਂਗ", "ਭੰਡ ਪਥੇਰ"],
                  "answer_en": "Swang",
                  "answer_pa": "ਸਵਾਂਗ"
                },
                {
                  "num": 50,
                  "question_en": "What is the meaning of 'ਚੰਗਾ' in English?",
                  "question_pa": "'ਚੰਗਾ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Bad", "Good", "Small", "Big"],
                  "options_pa": ["ਮਾੜਾ", "ਚੰਗਾ", "ਛੋਟਾ", "ਵੱਡਾ"],
                  "answer_en": "Good",
                  "answer_pa": "ਚੰਗਾ"
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