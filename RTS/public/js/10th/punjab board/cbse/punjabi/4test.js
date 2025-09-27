const questions = [
        
                {
                  "num": 1,
                  "question_en": "Who is known as the father of modern Punjabi poetry?",
                  "question_pa": "ਆਧੁਨਿਕ ਪੰਜਾਬੀ ਕਵਿਤਾ ਦੇ ਪਿਤਾ ਕਿਸਨੂੰ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Bhai Vir Singh", "Amrita Pritam", "Shiv Kumar Batalvi", "Puran Singh"],
                  "options_pa": ["ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਪੂਰਨ ਸਿੰਘ"],
                  "answer_en": "Bhai Vir Singh",
                  "answer_pa": "ਭਾਈ ਵੀਰ ਸਿੰਘ"
                },
                {
                  "num": 2,
                  "question_en": "Which of the following is a famous Punjabi folk dance?",
                  "question_pa": "ਹੇਠਾਂ ਦਿੱਤਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਨਾਚ ਹੈ?",
                  "options_en": ["Bhangra", "Kathak", "Bharatanatyam", "Garba"],
                  "options_pa": ["ਭੰਗੜਾ", "ਕਥਕ", "ਭਰਤਨਾਟਿਅਮ", "ਗਰਬਾ"],
                  "answer_en": "Bhangra",
                  "answer_pa": "ਭੰਗੜਾ"
                },
                {
                  "num": 3,
                  "question_en": "What is the meaning of the Punjabi word 'Pind'?",
                  "question_pa": "ਪੰਜਾਬੀ ਸ਼ਬਦ 'ਪਿੰਡ' ਦਾ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["City", "Village", "Market", "Temple"],
                  "options_pa": ["ਸ਼ਹਿਰ", "ਪਿੰਡ", "ਮਾਰਕੀਟ", "ਮੰਦਿਰ"],
                  "answer_en": "Village",
                  "answer_pa": "ਪਿੰਡ"
                },
                {
                  "num": 4,
                  "question_en": "Which Punjabi poet wrote 'Waris Shah Nu'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਕਵੀ ਨੇ 'ਵਾਰਿਸ ਸ਼ਾਹ ਨੂੰ' ਲਿਖੀ?",
                  "options_en": ["Amrita Pritam", "Surjit Patar", "Shiv Kumar Batalvi", "Mohan Singh"],
                  "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਮੋਹਨ ਸਿੰਘ"],
                  "answer_en": "Amrita Pritam",
                  "answer_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"
                },
                {
                  "num": 5,
                  "question_en": "What is the main theme of Heer Ranjha?",
                  "question_pa": "ਹੀਰ ਰਾਂਝਾ ਦਾ ਮੁੱਖ ਵਿਸ਼ਾ ਕੀ ਹੈ?",
                  "options_en": ["War", "Love", "Religion", "Politics"],
                  "options_pa": ["ਜੰਗ", "ਪਿਆਰ", "ਧਰਮ", "ਰਾਜਨੀਤੀ"],
                  "answer_en": "Love",
                  "answer_pa": "ਪਿਆਰ"
                },
                {
                  "num": 6,
                  "question_en": "Which of these is a Punjabi epic?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਮਹਾਂਕਾਵਿ ਹੈ?",
                  "options_en": ["Gitanjali", "Heer Ranjha", "Godan", "Meghdoot"],
                  "options_pa": ["ਗੀਤਾਂਜਲੀ", "ਹੀਰ ਰਾਂਝਾ", "ਗੋਦਾਨ", "ਮੇਘਦੂਤ"],
                  "answer_en": "Heer Ranjha",
                  "answer_pa": "ਹੀਰ ਰਾਂਝਾ"
                },
                {
                  "num": 7,
                  "question_en": "What is the correct Punjabi translation of 'Thank you'?",
                  "question_pa": "'ਥੈਂਕ ਯੂ' ਦਾ ਸਹੀ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਕੀ ਹੈ?",
                  "options_en": ["ਮਾਫ਼ ਕਰਨਾ", "ਸ਼ੁਕਰੀਆ", "ਨਮਸਤੇ", "ਅਲਵਿਦਾ"],
                  "options_pa": ["ਮਾਫ਼ ਕਰਨਾ", "ਸ਼ੁਕਰੀਆ", "ਨਮਸਤੇ", "ਅਲਵਿਦਾ"],
                  "answer_en": "ਸ਼ੁਕਰੀਆ",
                  "answer_pa": "ਸ਼ੁਕਰੀਆ"
                },
                {
                  "num": 8,
                  "question_en": "Which script is used to write Punjabi in India?",
                  "question_pa": "ਭਾਰਤ ਵਿੱਚ ਪੰਜਾਬੀ ਲਿਖਣ ਲਈ ਕਿਹੜੀ ਲਿਪੀ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
                  "options_en": ["Devanagari", "Gurmukhi", "Persian", "Latin"],
                  "options_pa": ["ਦੇਵਨਾਗਰੀ", "ਗੁਰਮੁਖੀ", "ਫਾਰਸੀ", "ਲਾਤੀਨੀ"],
                  "answer_en": "Gurmukhi",
                  "answer_pa": "ਗੁਰਮੁਖੀ"
                },
                {
                  "num": 9,
                  "question_en": "Which of these is a famous Punjabi festival?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਤਿਉਹਾਰ ਹੈ?",
                  "options_en": ["Diwali", "Baisakhi", "Eid", "Christmas"],
                  "options_pa": ["ਦੀਵਾਲੀ", "ਬੈਸਾਖੀ", "ਈਦ", "ਕ੍ਰਿਸਮਿਸ"],
                  "answer_en": "Baisakhi",
                  "answer_pa": "ਬੈਸਾਖੀ"
                },
                {
                  "num": 10,
                  "question_en": "What does 'Sat Sri Akal' mean?",
                  "question_pa": "'ਸਤ ਸ੍ਰੀ ਅਕਾਲ' ਦਾ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Good Morning", "Hello/God is Truth", "Thank You", "Goodbye"],
                  "options_pa": ["ਸ਼ੁਭ ਸਵੇਰ", "ਹੈਲੋ/ਪਰਮਾਤਮਾ ਸੱਚਾ ਹੈ", "ਧੰਨਵਾਦ", "ਅਲਵਿਦਾ"],
                  "answer_en": "Hello/God is Truth",
                  "answer_pa": "ਹੈਲੋ/ਪਰਮਾਤਮਾ ਸੱਚਾ ਹੈ"
                },
                {
                  "num": 11,
                  "question_en": "Which Punjabi writer is known for 'Pinjar'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਲੇਖਕ ਨੂੰ 'ਪਿੰਜਰ' ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Nanak Singh", "Amrita Pritam", "Gurdial Singh", "Kartar Singh Duggal"],
                  "options_pa": ["ਨਾਨਕ ਸਿੰਘ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ"],
                  "answer_en": "Amrita Pritam",
                  "answer_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"
                },
                {
                  "num": 12,
                  "question_en": "What is the plural of 'ਕਿਤਾਬ' (Book) in Punjabi?",
                  "question_pa": "'ਕਿਤਾਬ' ਦਾ ਬਹੁ ਵਚਨ ਕੀ ਹੈ?",
                  "options_en": ["ਕਿਤਾਬਾਂ", "ਕਿਤਾਬੇ", "ਕਿਤਾਬੀਂ", "ਕਿਤਾਬੋ"],
                  "options_pa": ["ਕਿਤਾਬਾਂ", "ਕਿਤਾਬੇ", "ਕਿਤਾਬੀਂ", "ਕਿਤਾਬੋ"],
                  "answer_en": "ਕਿਤਾਬਾਂ",
                  "answer_pa": "ਕਿਤਾਬਾਂ"
                },
                {
                  "num": 13,
                  "question_en": "Which of these is a Punjabi folk song genre?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਪੰਜਾਬੀ ਲੋਕ ਗੀਤ ਸ਼ੈਲੀ ਹੈ?",
                  "options_en": ["Ghazal", "Tappa", "Qawwali", "Bhajan"],
                  "options_pa": ["ਗ਼ਜ਼ਲ", "ਟੱਪਾ", "ਕੱਵਾਲੀ", "ਭਜਨ"],
                  "answer_en": "Tappa",
                  "answer_pa": "ਟੱਪਾ"
                },
                {
                  "num": 14,
                  "question_en": "What is the feminine form of 'ਮੁੰਡਾ' (Boy) in Punjabi?",
                  "question_pa": "'ਮੁੰਡਾ' ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਮੁੰਡੀ", "ਕੁੜੀ", "ਧੀ", "ਪੋਤੀ"],
                  "options_pa": ["ਮੁੰਡੀ", "ਕੁੜੀ", "ਧੀ", "ਪੋਤੀ"],
                  "answer_en": "ਮੁੰਡੀ",
                  "answer_pa": "ਮੁੰਡੀ"
                },
                {
                  "num": 15,
                  "question_en": "Who composed the famous Punjabi song 'Jugni'?",
                  "question_pa": "ਮਸ਼ਹੂਰ ਪੰਜਾਬੀ ਗੀਤ 'ਜੁਗਨੀ' ਕਿਸਨੇ ਲਿਖਿਆ?",
                  "options_en": ["Babu Singh Maan", "Arif Lohar", "Surjit Bindrakhia", "Kuldeep Manak"],
                  "options_pa": ["ਬਾਬੂ ਸਿੰਘ ਮਾਨ", "ਆਰਿਫ ਲੋਹਰ", "ਸੁਰਜੀਤ ਬਿੰਦਰਖੀਆ", "ਕੁਲਦੀਪ ਮਾਣਕ"],
                  "answer_en": "Arif Lohar",
                  "answer_pa": "ਆਰਿਫ ਲੋਹਰ"
                },
                {
                  "num": 16,
                  "question_en": "Which Punjabi newspaper is the oldest?",
                  "question_pa": "ਕਿਹੜਾ ਪੰਜਾਬੀ ਅਖਬਾਰ ਸਭ ਤੋਂ ਪੁਰਾਣਾ ਹੈ?",
                  "options_en": ["Ajit", "Jag Bani", "Punjab Kesari", "Rozana Spokesman"],
                  "options_pa": ["ਅਜੀਤ", "ਜਗ ਬਾਣੀ", "ਪੰਜਾਬ ਕੇਸਰੀ", "ਰੋਜ਼ਾਨਾ ਸਪੋਕਸਮੈਨ"],
                  "answer_en": "Ajit",
                  "answer_pa": "ਅਜੀਤ"
                },
                {
                  "num": 17,
                  "question_en": "What is the correct Punjabi word for 'Sun'?",
                  "question_pa": "'ਸੂਰਜ' ਲਈ ਸਹੀ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਚੰਦ", "ਸੂਰਜ", "ਤਾਰਾ", "ਚਾਨਣੀ"],
                  "options_pa": ["ਚੰਦ", "ਸੂਰਜ", "ਤਾਰਾ", "ਚਾਨਣੀ"],
                  "answer_en": "ਸੂਰਜ",
                  "answer_pa": "ਸੂਰਜ"
                },
                {
                  "num": 18,
                  "question_en": "Which of these is a Punjabi sweet dish?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਮਿੱਠਾ ਪਕਵਾਨ ਹੈ?",
                  "options_en": ["Dhokla", "Ghevar", "Pinni", "Rasgulla"],
                  "options_pa": ["ਢੋਕਲਾ", "ਘੇਵਰ", "ਪਿੰਨੀ", "ਰਸਗੁੱਲਾ"],
                  "answer_en": "Pinni",
                  "answer_pa": "ਪਿੰਨੀ"
                },
                {
                  "num": 19,
                  "question_en": "What is the meaning of 'ਬਹੁਤ ਸੋਹਣਾ' in English?",
                  "question_pa": "'ਬਹੁਤ ਸੋਹਣਾ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Very Ugly", "Very Beautiful", "Very Tall", "Very Short"],
                  "options_pa": ["ਬਹੁਤ ਬਦਸੂਰਤ", "ਬਹੁਤ ਸੁੰਦਰ", "ਬਹੁਤ ਲੰਬਾ", "ਬਹੁਤ ਛੋਟਾ"],
                  "answer_en": "Very Beautiful",
                  "answer_pa": "ਬਹੁਤ ਸੁੰਦਰ"
                },
                {
                  "num": 20,
                  "question_en": "Which Punjabi poet is called 'Bard of the Punjab'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਕਵੀ ਨੂੰ 'ਪੰਜਾਬ ਦਾ ਬਾਰਡ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Shiv Kumar Batalvi", "Surjit Patar", "Pash", "Mohan Singh"],
                  "options_pa": ["ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼", "ਮੋਹਨ ਸਿੰਘ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"
                },
                {
                  "num": 21,
                  "question_en": "What is the opposite of 'ਗਰਮ' (Hot) in Punjabi?",
                  "question_pa": "'ਗਰਮ' ਦਾ ਉਲਟ ਕੀ ਹੈ?",
                  "options_en": ["ਠੰਡਾ", "ਤਿੱਖਾ", "ਨਰਮ", "ਖ਼ੁਸ਼ਕ"],
                  "options_pa": ["ਠੰਡਾ", "ਤਿੱਖਾ", "ਨਰਮ", "ਖ਼ੁਸ਼ਕ"],
                  "answer_en": "ਠੰਡਾ",
                  "answer_pa": "ਠੰਡਾ"
                },
                {
                  "num": 22,
                  "question_en": "Which instrument is commonly used in Punjabi folk music?",
                  "question_pa": "ਪੰਜਾਬੀ ਲੋਕ ਸੰਗੀਤ ਵਿੱਚ ਕਿਹੜਾ ਵਾਦਯ ਪ੍ਰਚਲਿਤ ਹੈ?",
                  "options_en": ["Tabla", "Dhol", "Sitar", "Flute"],
                  "options_pa": ["ਤਬਲਾ", "ਢੋਲ", "ਸਿਤਾਰ", "ਬੰਸਰੀ"],
                  "answer_en": "Dhol",
                  "answer_pa": "ਢੋਲ"
                },
                {
                  "num": 23,
                  "question_en": "What is the correct Punjabi translation of 'School'?",
                  "question_pa": "'ਸਕੂਲ' ਦਾ ਸਹੀ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਕੀ ਹੈ?",
                  "options_en": ["ਵਿਦਿਆਲਾ", "ਕਾਲਜ", "ਯੂਨੀਵਰਸਿਟੀ", "ਪੁਸਤਕਾਲਾ"],
                  "options_pa": ["ਵਿਦਿਆਲਾ", "ਕਾਲਜ", "ਯੂਨੀਵਰਸਿਟੀ", "ਪੁਸਤਕਾਲਾ"],
                  "answer_en": "ਵਿਦਿਆਲਾ",
                  "answer_pa": "ਵਿਦਿਆਲਾ"
                },
                {
                  "num": 24,
                  "question_en": "Who wrote the famous Punjabi novel 'Malooka'?",
                  "question_pa": "ਮਸ਼ਹੂਰ ਪੰਜਾਬੀ ਨਾਵਲ 'ਮਲੂਕਾ' ਕਿਸਨੇ ਲਿਖਿਆ?",
                  "options_en": ["Gurdial Singh", "Nanak Singh", "Dalip Kaur Tiwana", "Kartar Singh Duggal"],
                  "options_pa": ["ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਨਾਨਕ ਸਿੰਘ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ"],
                  "answer_en": "Gurdial Singh",
                  "answer_pa": "ਗੁਰਦਿਆਲ ਸਿੰਘ"
                },
                {
                  "num": 25,
                  "question_en": "What is the primary crop of Punjab?",
                  "question_pa": "ਪੰਜਾਬ ਦੀ ਮੁੱਖ ਫਸਲ ਕੀ ਹੈ?",
                  "options_en": ["Rice", "Wheat", "Sugarcane", "Cotton"],
                  "options_pa": ["ਚਾਵਲ", "ਗੇਹੂੰ", "ਗੰਨਾ", "ਕਪਾਹ"],
                  "answer_en": "Wheat",
                  "answer_pa": "ਗੇਹੂੰ"
                },
                {
                  "num": 26,
                  "question_en": "Which of these is a Punjabi folk tale?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਪੰਜਾਬੀ ਲੋਕ ਕਹਾਣੀ ਹੈ?",
                  "options_en": ["Panchatantra", "Sassi Punnu", "Akbar-Birbal", "Tenali Rama"],
                  "options_pa": ["ਪੰਚਤੰਤਰ", "ਸੱਸੀ ਪੁੰਨੂੰ", "ਅਕਬਰ-ਬੀਰਬਲ", "ਤੇਨਾਲੀ ਰਾਮਾ"],
                  "answer_en": "Sassi Punnu",
                  "answer_pa": "ਸੱਸੀ ਪੁੰਨੂੰ"
                },
                {
                  "num": 27,
                  "question_en": "What is the meaning of 'ਮਿੱਠੀ ਬੋਲੀ' in English?",
                  "question_pa": "'ਮਿੱਠੀ ਬੋਲੀ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Sweet Language", "Bitter Words", "Loud Voice", "Silent Speech"],
                  "options_pa": ["ਮਿੱਠੀ ਭਾਸ਼ਾ", "ਕੌੜੇ ਸ਼ਬਦ", "ਉੱਚੀ ਅਵਾਜ਼", "ਚੁੱਪ ਭਾਸ਼ਣ"],
                  "answer_en": "Sweet Language",
                  "answer_pa": "ਮਿੱਠੀ ਭਾਸ਼ਾ"
                },
                {
                  "num": 28,
                  "question_en": "Which river is considered sacred in Punjab?",
                  "question_pa": "ਪੰਜਾਬ ਵਿੱਚ ਕਿਹੜੀ ਨਦੀ ਨੂੰ ਪਵਿੱਤਰ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Yamuna", "Ganga", "Beas", "Godavari"],
                  "options_pa": ["ਯਮੁਨਾ", "ਗੰਗਾ", "ਬਿਆਸ", "ਗੋਦਾਵਰੀ"],
                  "answer_en": "Beas",
                  "answer_pa": "ਬਿਆਸ"
                },
                {
                  "num": 29,
                  "question_en": "What is the Punjabi word for 'Mother'?",
                  "question_pa": "'ਮਾਂ' ਲਈ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਪਿਓ", "ਭੈਣ", "ਮਾਤਾ", "ਦਾਦੀ"],
                  "options_pa": ["ਪਿਓ", "ਭੈਣ", "ਮਾਤਾ", "ਦਾਦੀ"],
                  "answer_en": "ਮਾਤਾ",
                  "answer_pa": "ਮਾਤਾ"
                },
                {
                  "num": 30,
                  "question_en": "Which Punjabi writer won the Jnanpith Award?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਲੇਖਕ ਨੇ ਗਿਆਨਪੀਠ ਪੁਰਸਕਾਰ ਜਿੱਤਿਆ?",
                  "options_en": ["Amrita Pritam", "Gurdial Singh", "Nanak Singh", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਨਾਨਕ ਸਿੰਘ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"],
                  "answer_en": "Gurdial Singh",
                  "answer_pa": "ਗੁਰਦਿਆਲ ਸਿੰਘ"
                },
                {
                  "num": 31,
                  "question_en": "What is the correct Punjabi word for 'Friend'?",
                  "question_pa": "'ਦੋਸਤ' ਲਈ ਸਹੀ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਯਾਰ", "ਦੁਸ਼ਮਣ", "ਪੜੋਸੀ", "ਰਿਸ਼ਤੇਦਾਰ"],
                  "options_pa": ["ਯਾਰ", "ਦੁਸ਼ਮਣ", "ਪੜੋਸੀ", "ਰਿਸ਼ਤੇਦਾਰ"],
                  "answer_en": "ਯਾਰ",
                  "answer_pa": "ਯਾਰ"
                },
                {
                  "num": 32,
                  "question_en": "Which of these is a traditional Punjabi attire for men?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਪੁਰਸ਼ਾਂ ਦਾ ਪਰੰਪਰਾਗਤ ਪਹਿਰਾਵਾ ਹੈ?",
                  "options_en": ["Saree", "Salwar Kameez", "Kurta Pajama", "Dhoti"],
                  "options_pa": ["ਸਾੜੀ", "ਸਲਵਾਰ ਕਮੀਜ਼", "ਕੁੜਤਾ ਪਜਾਮਾ", "ਧੋਤੀ"],
                  "answer_en": "Kurta Pajama",
                  "answer_pa": "ਕੁੜਤਾ ਪਜਾਮਾ"
                },
                {
                  "num": 33,
                  "question_en": "What is the meaning of 'ਰੱਬ ਰਾਖਾ' in English?",
                  "question_pa": "'ਰੱਬ ਰਾਖਾ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["God Bless", "Good Luck", "Welcome", "Thank You"],
                  "options_pa": ["ਰੱਬ ਤੁਹਾਨੂੰ ਬਖ਼ਸ਼ੇ", "ਚੰਗੀ ਕਿਸਮਤ", "ਸੁਆਗਤ ਹੈ", "ਧੰਨਵਾਦ"],
                  "answer_en": "God Bless",
                  "answer_pa": "ਰੱਬ ਤੁਹਾਨੂੰ ਬਖ਼ਸ਼ੇ"
                },
                {
                  "num": 34,
                  "question_en": "Which Punjabi poet wrote 'Loona'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਕਵੀ ਨੇ 'ਲੂਣਾ' ਲਿਖੀ?",
                  "options_en": ["Shiv Kumar Batalvi", "Amrita Pritam", "Pash", "Surjit Patar"],
                  "options_pa": ["ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"
                },
                {
                  "num": 35,
                  "question_en": "What is the Punjabi word for 'Water'?",
                  "question_pa": "'ਪਾਣੀ' ਲਈ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਪਾਣੀ", "ਦੁੱਧ", "ਚਾਹ", "ਜੂਸ"],
                  "options_pa": ["ਪਾਣੀ", "ਦੁੱਧ", "ਚਾਹ", "ਜੂਸ"],
                  "answer_en": "ਪਾਣੀ",
                  "answer_pa": "ਪਾਣੀ"
                },
                {
                  "num": 36,
                  "question_en": "Which of these is a Punjabi folk instrument?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਵਾਦਯ ਹੈ?",
                  "options_en": ["Harmonium", "Sarangi", "Algoza", "Veena"],
                  "options_pa": ["ਹਾਰਮੋਨੀਅਮ", "ਸਾਰੰਗੀ", "ਅਲਗੋਜ਼ਾ", "ਵੀਣਾ"],
                  "answer_en": "Algoza",
                  "answer_pa": "ਅਲਗੋਜ਼ਾ"
                },
                {
                  "num": 37,
                  "question_en": "What is the correct Punjabi translation of 'Happy Birthday'?",
                  "question_pa": "'ਹੈਪੀ ਬਰਥਡੇ' ਦਾ ਸਹੀ ਪੰਜਾਬੀ ਅਨੁਵਾਦ ਕੀ ਹੈ?",
                  "options_en": ["ਨਵੇਂ ਸਾਲ ਦੀਆਂ ਵਧਾਈਆਂ", "ਜਨਮਦਿਨ ਮੁਬਾਰਕ", "ਸ਼ੁਭਕਾਮਨਾਵਾਂ", "ਧੰਨਵਾਦ"],
                  "options_pa": ["ਨਵੇਂ ਸਾਲ ਦੀਆਂ ਵਧਾਈਆਂ", "ਜਨਮਦਿਨ ਮੁਬਾਰਕ", "ਸ਼ੁਭਕਾਮਨਾਵਾਂ", "ਧੰਨਵਾਦ"],
                  "answer_en": "ਜਨਮਦਿਨ ਮੁਬਾਰਕ",
                  "answer_pa": "ਜਨਮਦਿਨ ਮੁਬਾਰਕ"
                },
                {
                  "num": 38,
                  "question_en": "Which Punjabi writer is known for 'Panth Prakash'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਲੇਖਕ ਨੂੰ 'ਪੰਥ ਪ੍ਰਕਾਸ਼' ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Bhai Vir Singh", "Ratan Singh Bhangu", "Giani Gurdit Singh", "Kahn Singh Nabha"],
                  "options_pa": ["ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਰਤਨ ਸਿੰਘ ਭੰਗੂ", "ਗਿਆਨੀ ਗੁਰਦਿੱਤ ਸਿੰਘ", "ਕਾਨ੍ਹ ਸਿੰਘ ਨਾਭਾ"],
                  "answer_en": "Ratan Singh Bhangu",
                  "answer_pa": "ਰਤਨ ਸਿੰਘ ਭੰਗੂ"
                },
                {
                  "num": 39,
                  "question_en": "What is the feminine form of 'ਸ਼ੇਰ' (Lion) in Punjabi?",
                  "question_pa": "'ਸ਼ੇਰ' ਦਾ ਇਸਤਰੀ ਲਿੰਗ ਕੀ ਹੈ?",
                  "options_en": ["ਸ਼ੇਰਨੀ", "ਬਿੱਲੀ", "ਕੁੱਤੀ", "ਚੂਹੀ"],
                  "options_pa": ["ਸ਼ੇਰਨੀ", "ਬਿੱਲੀ", "ਕੁੱਤੀ", "ਚੂਹੀ"],
                  "answer_en": "ਸ਼ੇਰਨੀ",
                  "answer_pa": "ਸ਼ੇਰਨੀ"
                },
                {
                  "num": 40,
                  "question_en": "Which of these is a Punjabi folk drama?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਨਾਟਕ ਹੈ?",
                  "options_en": ["Nautanki", "Tamasha", "Swang", "Bhand Pather"],
                  "options_pa": ["ਨੌਟੰਕੀ", "ਤਮਾਸ਼ਾ", "ਸਵਾਂਗ", "ਭੰਡ ਪਥੇਰ"],
                  "answer_en": "Swang",
                  "answer_pa": "ਸਵਾਂਗ"
                },
                {
                  "num": 41,
                  "question_en": "What is the meaning of 'ਚੰਗਾ' in English?",
                  "question_pa": "'ਚੰਗਾ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Bad", "Good", "Small", "Big"],
                  "options_pa": ["ਮਾੜਾ", "ਚੰਗਾ", "ਛੋਟਾ", "ਵੱਡਾ"],
                  "answer_en": "Good",
                  "answer_pa": "ਚੰਗਾ"
                },
                {
                  "num": 42,
                  "question_en": "Which Punjabi poet is associated with 'Birha da Sultan'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਕਵੀ ਨੂੰ 'ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Shiv Kumar Batalvi", "Surjit Patar", "Pash", "Mohan Singh"],
                  "options_pa": ["ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼", "ਮੋਹਨ ਸਿੰਘ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"
                },
                {
                  "num": 43,
                  "question_en": "What is the Punjabi word for 'Moon'?",
                  "question_pa": "'ਚੰਦ' ਲਈ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਸੂਰਜ", "ਤਾਰਾ", "ਚੰਦ", "ਧਰਤੀ"],
                  "options_pa": ["ਸੂਰਜ", "ਤਾਰਾ", "ਚੰਦ", "ਧਰਤੀ"],
                  "answer_en": "ਚੰਦ",
                  "answer_pa": "ਚੰਦ"
                },
                {
                  "num": 44,
                  "question_en": "Which of these is a traditional Punjabi dish?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਪਰੰਪਰਾਗਤ ਪਕਵਾਨ ਹੈ?",
                  "options_en": ["Idli", "Dosa", "Makki di Roti & Sarson da Saag", "Pongal"],
                  "options_pa": ["ਇਡਲੀ", "ਡੋਸਾ", "ਮੱਕੀ ਦੀ ਰੋਟੀ ਅਤੇ ਸਰੋਂ ਦਾ ਸਾਗ", "ਪੋਂਗਲ"],
                  "answer_en": "Makki di Roti & Sarson da Saag",
                  "answer_pa": "ਮੱਕੀ ਦੀ ਰੋਟੀ ਅਤੇ ਸਰੋਂ ਦਾ ਸਾਗ"
                },
                {
                  "num": 45,
                  "question_en": "What is the correct Punjabi word for 'Teacher'?",
                  "question_pa": "'ਅਧਿਆਪਕ' ਲਈ ਸਹੀ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?",
                  "options_en": ["ਗੁਰੂ", "ਚਾਚਾ", "ਦੋਸਤ", "ਪੜੋਸੀ"],
                  "options_pa": ["ਗੁਰੂ", "ਚਾਚਾ", "ਦੋਸਤ", "ਪੜੋਸੀ"],
                  "answer_en": "ਗੁਰੂ",
                  "answer_pa": "ਗੁਰੂ"
                },
                {
                  "num": 46,
                  "question_en": "Which Punjabi writer is known for 'Suraj Prakash'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਲੇਖਕ ਨੂੰ 'ਸੂਰਜ ਪ੍ਰਕਾਸ਼' ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Bhai Santokh Singh", "Bhai Vir Singh", "Kahn Singh Nabha", "Giani Gian Singh"],
                  "options_pa": ["ਭਾਈ ਸੰਤੋਖ ਸਿੰਘ", "ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਕਾਨ੍ਹ ਸਿੰਘ ਨਾਭਾ", "ਗਿਆਨੀ ਗਿਆਨ ਸਿੰਘ"],
                  "answer_en": "Bhai Santokh Singh",
                  "answer_pa": "ਭਾਈ ਸੰਤੋਖ ਸਿੰਘ"
                },
                {
                  "num": 47,
                  "question_en": "What is the meaning of 'ਧੰਨਵਾਦ' in English?",
                  "question_pa": "'ਧੰਨਵਾਦ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Sorry", "Thank You", "Welcome", "Goodbye"],
                  "options_pa": ["ਮਾਫ਼ ਕਰਨਾ", "ਧੰਨਵਾਦ", "ਸੁਆਗਤ ਹੈ", "ਅਲਵਿਦਾ"],
                  "answer_en": "Thank You",
                  "answer_pa": "ਧੰਨਵਾਦ"
                },
                {
                  "num": 48,
                  "question_en": "Which of these is a Punjabi folk hero?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਨਾਇਕ ਹੈ?",
                  "options_en": ["Raja Harishchandra", "Dulla Bhatti", "Prithviraj Chauhan", "Rana Pratap"],
                  "options_pa": ["ਰਾਜਾ ਹਰਿਸ਼ਚੰਦਰ", "ਦੁੱਲਾ ਭੱਟੀ", "ਪ੍ਰਿਥਵੀਰਾਜ ਚੌਹਾਨ", "ਰਾਣਾ ਪ੍ਰਤਾਪ"],
                  "answer_en": "Dulla Bhatti",
                  "answer_pa": "ਦੁੱਲਾ ਭੱਟੀ"
                },
                {
                  "num": 49,
                  "question_en": "What is the primary focus of Punjabi folk literature?",
                  "question_pa": "ਪੰਜਾਬੀ ਲੋਕ ਸਾਹਿਤ ਦਾ ਮੁੱਖ ਕੇਂਦਰ ਕੀ ਹੈ?",
                  "options_en": ["Love and Tradition", "War and Peace", "History and Philosophy", "Nature and Environment"],
                  "options_pa": ["ਪਿਆਰ ਅਤੇ ਪਰੰਪਰਾ", "ਯੁੱਧ ਅਤੇ ਸ਼ਾਂਤੀ", "ਇਤਿਹਾਸ ਅਤੇ ਦਰਸ਼ਨਸ਼ਾਸ਼ਤਰ", "ਕੁਦਰਤ ਅਤੇ ਵਾਤਾਵਰਣ"],
                  "answer_en": "Love and Tradition",
                  "answer_pa": "ਪਿਆਰ ਅਤੇ ਪਰੰਪਰਾ"
                },
                {
                  "num": 50,
                  "question_en": "Which Punjabi poet wrote 'Main ek shikra yaar banaya'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਕਵੀ ਨੇ 'ਮੈਂ ਇੱਕ ਸ਼ਿਕਰਾ ਯਾਰ ਬਣਾਇਆ' ਲਿਖੀ?",
                  "options_en": ["Baba Farid", "Bulleh Shah", "Waris Shah", "Sultan Bahu"],
                  "options_pa": ["ਬਾਬਾ ਫਰੀਦ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਵਾਰਿਸ ਸ਼ਾਹ", "ਸੁਲਤਾਨ ਬਾਹੂ"],
                  "answer_en": "Bulleh Shah",
                  "answer_pa": "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ"
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