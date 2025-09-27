
const questions = [
        
                {
                  "num": 1,
                  "question_en": "Which of these is a famous Punjabi folk dance performed by women?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਨਾਚ ਔਰਤਾਂ ਦੁਆਰਾ ਕੀਤਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Giddha", "Bhangra", "Jhumar", "Sammi"],
                  "options_pa": ["ਗਿੱਧਾ", "ਭੰਗੜਾ", "ਝੂਮਰ", "ਸੰਮੀ"],
                  "answer_en": "Giddha",
                  "answer_pa": "ਗਿੱਧਾ"
                },
                {
                  "num": 2,
                  "question_en": "What is the feminine form of 'ਗੁਰੂ' (Teacher)?",
                  "question_pa": "'ਗੁਰੂ' ਦੀ ਸਤਰੀ ਲਿੰਗ ਰੂਪ ਕੀ ਹੈ?",
                  "options_en": ["ਗੁਰੂਆਣੀ", "ਗੁਰੂਮਾਤਾ", "ਗੁਰੂਬੇਨ", "ਗੁਰੂਜੀ"],
                  "options_pa": ["ਗੁਰੂਆਣੀ", "ਗੁਰੂਮਾਤਾ", "ਗੁਰੂਬੇਨ", "ਗੁਰੂਜੀ"],
                  "answer_en": "ਗੁਰੂਆਣੀ",
                  "answer_pa": "ਗੁਰੂਆਣੀ"
                },
                {
                  "num": 3,
                  "question_en": "Who is the author of the Punjabi novel 'Pinjar'?",
                  "question_pa": "ਪੰਜਾਬੀ ਨਾਵਲ 'ਪਿੰਜਰ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
                  "options_en": ["Amrita Pritam", "Nanak Singh", "Gurdial Singh", "Dalip Kaur Tiwana"],
                  "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਨਾਨਕ ਸਿੰਘ", "ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ"],
                  "answer_en": "Amrita Pritam",
                  "answer_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"
                },
                {
                  "num": 4,
                  "question_en": "What is the plural of 'ਪਾਣੀ' (Water) in Punjabi?",
                  "question_pa": "'ਪਾਣੀ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
                  "options_en": ["ਪਾਣੀਆਂ", "ਪਾਣੀ", "ਪਾਣੀਆ", "ਪਾਣੇ"],
                  "options_pa": ["ਪਾਣੀਆਂ", "ਪਾਣੀ", "ਪਾਣੀਆ", "ਪਾਣੇ"],
                  "answer_en": "ਪਾਣੀ",
                  "answer_pa": "ਪਾਣੀ"
                },
                {
                  "num": 5,
                  "question_en": "Which of these is a traditional Punjabi musical instrument?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪਰੰਪਰਾਗਤ ਪੰਜਾਬੀ ਸੰਗੀਤ ਵਾਜਾ ਹੈ?",
                  "options_en": ["Dhol", "Sitar", "Tabla", "Flute"],
                  "options_pa": ["ਢੋਲ", "ਸਿਤਾਰ", "ਤਬਲਾ", "ਬੰਸਰੀ"],
                  "answer_en": "Dhol",
                  "answer_pa": "ਢੋਲ"
                },
                {
                  "num": 6,
                  "question_en": "What is the meaning of the Punjabi idiom 'ਹੱਥ ਖੰਭ ਹੋਣਾ'?",
                  "question_pa": "ਮੁਹਾਵਰਾ 'ਹੱਥ ਖੰਭ ਹੋਣਾ' ਦਾ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["To be very happy", "To be very tired", "To be very busy", "To be very rich"],
                  "options_pa": ["ਬਹੁਤ ਖੁਸ਼ ਹੋਣਾ", "ਬਹੁਤ ਥੱਕ ਜਾਣਾ", "ਬਹੁਤ ਵਿਅਸਤ ਹੋਣਾ", "ਬਹੁਤ ਅਮੀਰ ਹੋਣਾ"],
                  "answer_en": "To be very happy",
                  "answer_pa": "ਬਹੁਤ ਖੁਸ਼ ਹੋਣਾ"
                },
                {
                  "num": 7,
                  "question_en": "Who wrote the famous Punjabi poem 'Main Ek Pagal'?",
                  "question_pa": "ਮਸ਼ਹੂਰ ਪੰਜਾਬੀ ਕਵਿਤਾ 'ਮੈਂ ਇੱਕ ਪਾਗਲ' ਕਿਸ ਨੇ ਲਿਖੀ?",
                  "options_en": ["Pash", "Surjit Patar", "Shiv Kumar Batalvi", "Amrita Pritam"],
                  "options_pa": ["ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
                  "answer_en": "Pash",
                  "answer_pa": "ਪਾਸ਼"
                },
                {
                  "num": 8,
                  "question_en": "Which of these is a Punjabi folk tale about tragic lovers?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਪੰਜਾਬੀ ਲੋਕ ਕਥਾ ਦੁਖਾਂਤ ਪ੍ਰੇਮੀਆਂ ਬਾਰੇ ਹੈ?",
                  "options_en": ["Mirza Sahiban", "Panchatantra", "Jataka Tales", "Hitopadesha"],
                  "options_pa": ["ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ", "ਪੰਚਤੰਤਰ", "ਜਾਤਕ ਕਥਾਵਾਂ", "ਹਿਤੋਪਦੇਸ਼"],
                  "answer_en": "Mirza Sahiban",
                  "answer_pa": "ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ"
                },
                {
                  "num": 9,
                  "question_en": "What is the opposite of 'ਸੁੰਦਰ' (Beautiful) in Punjabi?",
                  "question_pa": "'ਸੁੰਦਰ' ਦਾ ਉਲਟ ਕੀ ਹੈ?",
                  "options_en": ["ਬਦਸੂਰਤ", "ਵੱਡਾ", "ਛੋਟਾ", "ਪੁਰਾਣਾ"],
                  "options_pa": ["ਬਦਸੂਰਤ", "ਵੱਡਾ", "ਛੋਟਾ", "ਪੁਰਾਣਾ"],
                  "answer_en": "ਬਦਸੂਰਤ",
                  "answer_pa": "ਬਦਸੂਰਤ"
                },
                {
                  "num": 10,
                  "question_en": "Which Punjabi writer is known as the 'Grand Old Man of Punjabi Literature'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਲੇਖਕ ਨੂੰ 'ਪੰਜਾਬੀ ਸਾਹਿਤ ਦਾ ਗ੍ਰੈਂਡ ਓਲਡ ਮੈਨ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Bhai Vir Singh", "Nanak Singh", "Gurbaksh Singh Preetlari", "Kartar Singh Duggal"],
                  "options_pa": ["ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਨਾਨਕ ਸਿੰਘ", "ਗੁਰਬਖ਼ਸ਼ ਸਿੰਘ ਪ੍ਰੀਤਲੜੀ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ"],
                  "answer_en": "Nanak Singh",
                  "answer_pa": "ਨਾਨਕ ਸਿੰਘ"
                },
                {
                  "num": 11,
                  "question_en": "What is the correct spelling for 'Moon' in Punjabi?",
                  "question_pa": "'ਚੰਦ' ਦੀ ਸਹੀ ਸਪੈਲਿੰਗ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["ਚੰਦ", "ਚੰਦਿ", "ਚੰਦੀ", "ਚੰਦੇ"],
                  "options_pa": ["ਚੰਦ", "ਚੰਦਿ", "ਚੰਦੀ", "ਚੰਦੇ"],
                  "answer_en": "ਚੰਦ",
                  "answer_pa": "ਚੰਦ"
                },
                {
                  "num": 12,
                  "question_en": "Which of these is a traditional Punjabi embroidery style?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਪਰੰਪਰਾਗਤ ਪੰਜਾਬੀ ਕਢਾਈ ਸ਼ੈਲੀ ਹੈ?",
                  "options_en": ["Phulkari", "Zardozi", "Chikankari", "Kantha"],
                  "options_pa": ["ਫੁਲਕਾਰੀ", "ਜ਼ਰਦੋਜ਼ੀ", "ਚਿਕਨਕਾਰੀ", "ਕੰਥਾ"],
                  "answer_en": "Phulkari",
                  "answer_pa": "ਫੁਲਕਾਰੀ"
                },
                {
                  "num": 13,
                  "question_en": "Who composed the famous Punjabi song 'Challa'?",
                  "question_pa": "ਮਸ਼ਹੂਰ ਪੰਜਾਬੀ ਗੀਤ 'ਚੱਲਾ' ਕਿਸ ਨੇ ਲਿਖਿਆ?",
                  "options_en": ["Gurdas Maan", "Babbu Maan", "Harbhajan Maan", "Surjit Bindrakhia"],
                  "options_pa": ["ਗੁਰਦਾਸ ਮਾਨ", "ਬੱਬੂ ਮਾਨ", "ਹਰਭਜਨ ਮਾਨ", "ਸੁਰਜੀਤ ਬਿੰਦਰਖੀਆ"],
                  "answer_en": "Gurdas Maan",
                  "answer_pa": "ਗੁਰਦਾਸ ਮਾਨ"
                },
                {
                  "num": 14,
                  "question_en": "What is the meaning of 'ਸਾਕਾ' in Punjabi history?",
                  "question_pa": "ਪੰਜਾਬੀ ਇਤਿਹਾਸ ਵਿੱਚ 'ਸਾਕਾ' ਦਾ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Harvest festival", "Martyrdom", "Wedding ceremony", "New year"],
                  "options_pa": ["ਫਸਲ ਦਾ ਤਿਉਹਾਰ", "ਸ਼ਹੀਦੀ", "ਵਿਆਹ ਦਾ ਸਮਾਰੋਹ", "ਨਵਾਂ ਸਾਲ"],
                  "answer_en": "Martyrdom",
                  "answer_pa": "ਸ਼ਹੀਦੀ"
                },
                {
                  "num": 15,
                  "question_en": "Which tense is 'ਮੈਂ ਗਾਉਂਦਾ ਹਾਂ' in?",
                  "question_pa": "'ਮੈਂ ਗਾਉਂਦਾ ਹਾਂ' ਕਿਹੜੇ ਕਾਲ ਵਿੱਚ ਹੈ?",
                  "options_en": ["Present", "Past", "Future", "Continuous"],
                  "options_pa": ["ਵਰਤਮਾਨ", "ਭੂਤ", "ਭਵਿੱਖ", "ਜਾਰੀ"],
                  "answer_en": "Present",
                  "answer_pa": "ਵਰਤਮਾਨ"
                },
                {
                  "num": 16,
                  "question_en": "Who wrote the Punjabi novel 'Marhi Da Deeva'?",
                  "question_pa": "ਪੰਜਾਬੀ ਨਾਵਲ 'ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ' ਕਿਸ ਨੇ ਲਿਖਿਆ?",
                  "options_en": ["Gurdial Singh", "Nanak Singh", "Kartar Singh Duggal", "Dalip Kaur Tiwana"],
                  "options_pa": ["ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਨਾਨਕ ਸਿੰਘ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ"],
                  "answer_en": "Gurdial Singh",
                  "answer_pa": "ਗੁਰਦਿਆਲ ਸਿੰਘ"
                },
                {
                  "num": 17,
                  "question_en": "What is the plural of 'ਪੰਖਾ' (Fan)?",
                  "question_pa": "'ਪੰਖਾ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
                  "options_en": ["ਪੰਖੇ", "ਪੰਖਿਆਂ", "ਪੰਖਾਵਾਂ", "ਪੰਖੋ"],
                  "options_pa": ["ਪੰਖੇ", "ਪੰਖਿਆਂ", "ਪੰਖਾਵਾਂ", "ਪੰਖੋ"],
                  "answer_en": "ਪੰਖੇ",
                  "answer_pa": "ਪੰਖੇ"
                },
                {
                  "num": 18,
                  "question_en": "Which Punjabi poet wrote 'Main Tere Naam Di Mehfil Wich'?",
                  "question_pa": "'ਮੈਂ ਤੇਰੇ ਨਾਮ ਦੀ ਮਹਿਫਿਲ ਵਿਚ' ਕਿਸ ਕਵੀ ਦੀ ਰਚਨਾ ਹੈ?",
                  "options_en": ["Surjit Patar", "Pash", "Shiv Kumar Batalvi", "Amrita Pritam"],
                  "options_pa": ["ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
                  "answer_en": "Surjit Patar",
                  "answer_pa": "ਸੁਰਜੀਤ ਪਾਤਰ"
                },
                {
                  "num": 19,
                  "question_en": "What is the feminine form of 'ਮਾਲੀ' (Gardener)?",
                  "question_pa": "'ਮਾਲੀ' ਦੀ ਸਤਰੀ ਲਿੰਗ ਰੂਪ ਕੀ ਹੈ?",
                  "options_en": ["ਮਾਲਨ", "ਮਾਲਿਕਾ", "ਮਾਲਣ", "ਮਾਲੀਨ"],
                  "options_pa": ["ਮਾਲਨ", "ਮਾਲਿਕਾ", "ਮਾਲਣ", "ਮਾਲੀਨ"],
                  "answer_en": "ਮਾਲਣ",
                  "answer_pa": "ਮਾਲਣ"
                },
                {
                  "num": 20,
                  "question_en": "Which of these is a traditional Punjabi sweet dish?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪਰੰਪਰਾਗਤ ਪੰਜਾਬੀ ਮਿੱਠਾ ਪਕਵਾਨ ਹੈ?",
                  "options_en": ["Gajar ka Halwa", "Gulab Jamun", "Pinni", "Rasgulla"],
                  "options_pa": ["ਗਾਜਰ ਦਾ ਹਲਵਾ", "ਗੁਲਾਬ ਜਾਮੁਨ", "ਪਿੰਨੀ", "ਰਸਗੁੱਲਾ"],
                  "answer_en": "Pinni",
                  "answer_pa": "ਪਿੰਨੀ"
                },
                {
                  "num": 21,
                  "question_en": "What is the meaning of 'ਮੁਹੱਬਤ' in English?",
                  "question_pa": "'ਮੁਹੱਬਤ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Love", "Hate", "Friendship", "Anger"],
                  "options_pa": ["ਪਿਆਰ", "ਨਫ਼ਰਤ", "ਦੋਸਤੀ", "ਗੁੱਸਾ"],
                  "answer_en": "Love",
                  "answer_pa": "ਪਿਆਰ"
                },
                {
                  "num": 22,
                  "question_en": "Which tense is 'ਮੈਂ ਪੜ੍ਹਿਆ ਸੀ' in?",
                  "question_pa": "'ਮੈਂ ਪੜ੍ਹਿਆ ਸੀ' ਕਿਹੜੇ ਕਾਲ ਵਿੱਚ ਹੈ?",
                  "options_en": ["Past Perfect", "Present", "Future", "Continuous"],
                  "options_pa": ["ਭੂਤ ਪੂਰਨ", "ਵਰਤਮਾਨ", "ਭਵਿੱਖ", "ਜਾਰੀ"],
                  "answer_en": "Past Perfect",
                  "answer_pa": "ਭੂਤ ਪੂਰਨ"
                },
                {
                  "num": 23,
                  "question_en": "Who is the author of 'Ik Mian Do Talwaran'?",
                  "question_pa": "'ਇੱਕ ਮਿਆਂ ਦੋ ਤਲਵਾਰਾਂ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
                  "options_en": ["Kartar Singh Duggal", "Nanak Singh", "Gurdial Singh", "Dalip Kaur Tiwana"],
                  "options_pa": ["ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ", "ਨਾਨਕ ਸਿੰਘ", "ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ"],
                  "answer_en": "Kartar Singh Duggal",
                  "answer_pa": "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ"
                },
                {
                  "num": 24,
                  "question_en": "What is the plural of 'ਪੱਤਾ' (Leaf)?",
                  "question_pa": "'ਪੱਤਾ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
                  "options_en": ["ਪੱਤੇ", "ਪੱਤਿਆਂ", "ਪੱਤਾਵਾਂ", "ਪੱਤੋ"],
                  "options_pa": ["ਪੱਤੇ", "ਪੱਤਿਆਂ", "ਪੱਤਾਵਾਂ", "ਪੱਤੋ"],
                  "answer_en": "ਪੱਤੇ",
                  "answer_pa": "ਪੱਤੇ"
                },
                {
                  "num": 25,
                  "question_en": "Which Punjabi poet wrote 'Sab Ton Khatarnak'?",
                  "question_pa": "'ਸਭ ਤੋਂ ਖਤਰਨਾਕ' ਕਿਸ ਕਵੀ ਦੀ ਰਚਨਾ ਹੈ?",
                  "options_en": ["Pash", "Surjit Patar", "Shiv Kumar Batalvi", "Amrita Pritam"],
                  "options_pa": ["ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
                  "answer_en": "Pash",
                  "answer_pa": "ਪਾਸ਼"
                },
                {
                  "num": 26,
                  "question_en": "What is the feminine form of 'ਮੁਕੱਦਮ' (Lawyer)?",
                  "question_pa": "'ਮੁਕੱਦਮ' ਦੀ ਸਤਰੀ ਲਿੰਗ ਰੂਪ ਕੀ ਹੈ?",
                  "options_en": ["ਮੁਕੱਦਮਾ", "ਮੁਕੱਦਮੀ", "ਮੁਕੱਦਮਨ", "ਮੁਕੱਦਮੇ"],
                  "options_pa": ["ਮੁਕੱਦਮਾ", "ਮੁਕੱਦਮੀ", "ਮੁਕੱਦਮਨ", "ਮੁਕੱਦਮੇ"],
                  "answer_en": "ਮੁਕੱਦਮੀ",
                  "answer_pa": "ਮੁਕੱਦਮੀ"
                },
                {
                  "num": 27,
                  "question_en": "Which of these is a Punjabi folk hero?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਨਾਇਕ ਹੈ?",
                  "options_en": ["Dulla Bhatti", "Ashoka", "Akbar", "Shivaji"],
                  "options_pa": ["ਦੁੱਲਾ ਭੱਟੀ", "ਅਸ਼ੋਕ", "ਅਕਬਰ", "ਸ਼ਿਵਾਜੀ"],
                  "answer_en": "Dulla Bhatti",
                  "answer_pa": "ਦੁੱਲਾ ਭੱਟੀ"
                },
                {
                  "num": 28,
                  "question_en": "What is the meaning of 'ਇਨਸਾਫ਼' in English?",
                  "question_pa": "'ਇਨਸਾਫ਼' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Justice", "Injustice", "Equality", "Freedom"],
                  "options_pa": ["ਇਨਸਾਫ਼", "ਨਾਇੰਸਾਫ਼ੀ", "ਬਰਾਬਰੀ", "ਆਜ਼ਾਦੀ"],
                  "answer_en": "Justice",
                  "answer_pa": "ਇਨਸਾਫ਼"
                },
                {
                  "num": 29,
                  "question_en": "Which tense is 'ਮੈਂ ਲਿਖ ਰਿਹਾ ਹਾਂ' in?",
                  "question_pa": "'ਮੈਂ ਲਿਖ ਰਿਹਾ ਹਾਂ' ਕਿਹੜੇ ਕਾਲ ਵਿੱਚ ਹੈ?",
                  "options_en": ["Present Continuous", "Past", "Future", "Perfect"],
                  "options_pa": ["ਵਰਤਮਾਨ ਜਾਰੀ", "ਭੂਤ", "ਭਵਿੱਖ", "ਪੂਰਨ"],
                  "answer_en": "Present Continuous",
                  "answer_pa": "ਵਰਤਮਾਨ ਜਾਰੀ"
                },
                {
                  "num": 30,
                  "question_en": "Who is the author of 'Pani Di Dhaar'?",
                  "question_pa": "'ਪਾਣੀ ਦੀ ਧਾਰ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
                  "options_en": ["Gurdial Singh", "Nanak Singh", "Kartar Singh Duggal", "Dalip Kaur Tiwana"],
                  "options_pa": ["ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਨਾਨਕ ਸਿੰਘ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ"],
                  "answer_en": "Gurdial Singh",
                  "answer_pa": "ਗੁਰਦਿਆਲ ਸਿੰਘ"
                },
                {
                  "num": 31,
                  "question_en": "What is the plural of 'ਗੀਤ' (Song)?",
                  "question_pa": "'ਗੀਤ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
                  "options_en": ["ਗੀਤਾਂ", "ਗੀਤੇ", "ਗੀਤੀ", "ਗੀਤੋ"],
                  "options_pa": ["ਗੀਤਾਂ", "ਗੀਤੇ", "ਗੀਤੀ", "ਗੀਤੋ"],
                  "answer_en": "ਗੀਤਾਂ",
                  "answer_pa": "ਗੀਤਾਂ"
                },
                {
                  "num": 32,
                  "question_en": "Which Punjabi poet wrote 'Main Tere Naam Di Mehfil Wich'?",
                  "question_pa": "'ਮੈਂ ਤੇਰੇ ਨਾਮ ਦੀ ਮਹਿਫਿਲ ਵਿਚ' ਕਿਸ ਕਵੀ ਦੀ ਰਚਨਾ ਹੈ?",
                  "options_en": ["Surjit Patar", "Pash", "Shiv Kumar Batalvi", "Amrita Pritam"],
                  "options_pa": ["ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
                  "answer_en": "Surjit Patar",
                  "answer_pa": "ਸੁਰਜੀਤ ਪਾਤਰ"
                },
                {
                  "num": 33,
                  "question_en": "What is the feminine form of 'ਗਾਇਕ' (Singer)?",
                  "question_pa": "'ਗਾਇਕ' ਦੀ ਸਤਰੀ ਲਿੰਗ ਰੂਪ ਕੀ ਹੈ?",
                  "options_en": ["ਗਾਇਕਾ", "ਗਾਇਕੀ", "ਗਾਇਕਨ", "ਗਾਇਕੇ"],
                  "options_pa": ["ਗਾਇਕਾ", "ਗਾਇਕੀ", "ਗਾਇਕਨ", "ਗਾਇਕੇ"],
                  "answer_en": "ਗਾਇਕਾ",
                  "answer_pa": "ਗਾਇਕਾ"
                },
                {
                  "num": 34,
                  "question_en": "Which of these is a Punjabi folk festival?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਤਿਉਹਾਰ ਹੈ?",
                  "options_en": ["Lohri", "Diwali", "Holi", "Eid"],
                  "options_pa": ["ਲੋਹੜੀ", "ਦੀਵਾਲੀ", "ਹੋਲੀ", "ਈਦ"],
                  "answer_en": "Lohri",
                  "answer_pa": "ਲੋਹੜੀ"
                },
                {
                  "num": 35,
                  "question_en": "What is the meaning of 'ਸ਼ਾਂਤੀ' in English?",
                  "question_pa": "'ਸ਼ਾਂਤੀ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Peace", "War", "Noise", "Chaos"],
                  "options_pa": ["ਸ਼ਾਂਤੀ", "ਜੰਗ", "ਸ਼ੋਰ", "ਅਸ਼ਾਂਤੀ"],
                  "answer_en": "Peace",
                  "answer_pa": "ਸ਼ਾਂਤੀ"
                },
                {
                  "num": 36,
                  "question_en": "Which tense is 'ਮੈਂ ਜਾਵਾਂਗਾ' in?",
                  "question_pa": "'ਮੈਂ ਜਾਵਾਂਗਾ' ਕਿਹੜੇ ਕਾਲ ਵਿੱਚ ਹੈ?",
                  "options_en": ["Future", "Present", "Past", "Continuous"],
                  "options_pa": ["ਭਵਿੱਖ", "ਵਰਤਮਾਨ", "ਭੂਤ", "ਜਾਰੀ"],
                  "answer_en": "Future",
                  "answer_pa": "ਭਵਿੱਖ"
                },
                {
                  "num": 37,
                  "question_en": "Who is the author of 'Adh Chanani Raat'?",
                  "question_pa": "'ਅੱਧ ਛਨਿਆਣੀ ਰਾਤ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
                  "options_en": ["Nanak Singh", "Kartar Singh Duggal", "Gurdial Singh", "Dalip Kaur Tiwana"],
                  "options_pa": ["ਨਾਨਕ ਸਿੰਘ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ", "ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਦਲੀਪ ਕੌਰ ਤਿਵਾਣਾ"],
                  "answer_en": "Nanak Singh",
                  "answer_pa": "ਨਾਨਕ ਸਿੰਘ"
                },
                {
                  "num": 38,
                  "question_en": "What is the plural of 'ਫੁੱਲ' (Flower)?",
                  "question_pa": "'ਫੁੱਲ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
                  "options_en": ["ਫੁੱਲਾਂ", "ਫੁੱਲੇ", "ਫੁੱਲੀ", "ਫੁੱਲੋ"],
                  "options_pa": ["ਫੁੱਲਾਂ", "ਫੁੱਲੇ", "ਫੁੱਲੀ", "ਫੁੱਲੋ"],
                  "answer_en": "ਫੁੱਲਾਂ",
                  "answer_pa": "ਫੁੱਲਾਂ"
                },
                {
                  "num": 39,
                  "question_en": "Which Punjabi poet wrote 'Main Tere Naam Di Mehfil Wich'?",
                  "question_pa": "'ਮੈਂ ਤੇਰੇ ਨਾਮ ਦੀ ਮਹਿਫਿਲ ਵਿਚ' ਕਿਸ ਕਵੀ ਦੀ ਰਚਨਾ ਹੈ?",
                  "options_en": ["Surjit Patar", "Pash", "Shiv Kumar Batalvi", "Amrita Pritam"],
                  "options_pa": ["ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
                  "answer_en": "Surjit Patar",
                  "answer_pa": "ਸੁਰਜੀਤ ਪਾਤਰ"
                },
                {
                  "num": 40,
                  "question_en": "What is the feminine form of 'ਡਾਕਟਰ' (Doctor)?",
                  "question_pa": "'ਡਾਕਟਰ' ਦੀ ਸਤਰੀ ਲਿੰਗ ਰੂਪ ਕੀ ਹੈ?",
                  "options_en": ["ਡਾਕਟਰਾ", "ਡਾਕਟਰੀ", "ਡਾਕਟਰਨ", "ਡਾਕਟਰੇ"],
                  "options_pa": ["ਡਾਕਟਰਾ", "ਡਾਕਟਰੀ", "ਡਾਕਟਰਨ", "ਡਾਕਟਰੇ"],
                  "answer_en": "ਡਾਕਟਰਨ",
                  "answer_pa": "ਡਾਕਟਰਨ"
                },
                {
                  "num": 41,
                  "question_en": "Which of these is a Punjabi folk game?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਖੇਡ ਹੈ?",
                  "options_en": ["Kikli", "Cricket", "Football", "Badminton"],
                  "options_pa": ["ਕਿੱਕਲੀ", "ਕ੍ਰਿਕਟ", "ਫੁੱਟਬਾਲ", "ਬੈਡਮਿੰਟਨ"],
                  "answer_en": "Kikli",
                  "answer_pa": "ਕਿੱਕਲੀ"
                },
                {
                  "num": 42,
                  "question_en": "What is the meaning of 'ਪਿਆਰਾ' in English?",
                  "question_pa": "'ਪਿਆਰਾ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Dear", "Hate", "Angry", "Sad"],
                  "options_pa": ["ਪਿਆਰਾ", "ਨਫ਼ਰਤ", "ਗੁੱਸਾ", "ਉਦਾਸ"],
                  "answer_en": "Dear",
                  "answer_pa": "ਪਿਆਰਾ"
                },
                {
                  "num": 43,
                  "question_en": "Which tense is 'ਮੈਂ ਖਾਧਾ ਸੀ' in?",
                  "question_pa": "'ਮੈਂ ਖਾਧਾ ਸੀ' ਕਿਹੜੇ ਕਾਲ ਵਿੱਚ ਹੈ?",
                  "options_en": ["Past Perfect", "Present", "Future", "Continuous"],
                  "options_pa": ["ਭੂਤ ਪੂਰਨ", "ਵਰਤਮਾਨ", "ਭਵਿੱਖ", "ਜਾਰੀ"],
                  "answer_en": "Past Perfect",
                  "answer_pa": "ਭੂਤ ਪੂਰਨ"
                },
                {
                  "num": 44,
                  "question_en": "Who is the author of 'Raat Pashmine Di'?",
                  "question_pa": "'ਰਾਤ ਪਸ਼ਮੀਨੇ ਦੀ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
                  "options_en": ["Amrita Pritam", "Shiv Kumar Batalvi", "Surjit Patar", "Pash"],
                  "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼"],
                  "answer_en": "Amrita Pritam",
                  "answer_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"
                },
                {
                  "num": 45,
                  "question_en": "What is the plural of 'ਪੁਸਤਕ' (Book)?",
                  "question_pa": "'ਪੁਸਤਕ' ਦਾ ਬਹੁਵਚਨ ਕੀ ਹੈ?",
                  "options_en": ["ਪੁਸਤਕਾਂ", "ਪੁਸਤਕੇ", "ਪੁਸਤਕੀ", "ਪੁਸਤਕੋ"],
                  "options_pa": ["ਪੁਸਤਕਾਂ", "ਪੁਸਤਕੇ", "ਪੁਸਤਕੀ", "ਪੁਸਤਕੋ"],
                  "answer_en": "ਪੁਸਤਕਾਂ",
                  "answer_pa": "ਪੁਸਤਕਾਂ"
                },
                {
                  "num": 46,
                  "question_en": "Which Punjabi poet is called 'Punjab’s Shakespeare'?",
                  "question_pa": "ਕਿਸ ਪੰਜਾਬੀ ਕਵੀ ਨੂੰ 'ਪੰਜਾਬ ਦਾ ਸ਼ੇਕਸਪੀਅਰ' ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
                  "options_en": ["Shiv Kumar Batalvi", "Bhai Vir Singh", "Amrita Pritam", "Puran Singh"],
                  "options_pa": ["ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ", "ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਪੂਰਨ ਸਿੰਘ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਟਾਲਵੀ"
                },
                {
                  "num": 47,
                  "question_en": "What is the meaning of 'ਸੁਪਨਾ' in English?",
                  "question_pa": "'ਸੁਪਨਾ' ਦਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਕੀ ਅਰਥ ਹੈ?",
                  "options_en": ["Dream", "Sleep", "Night", "Hope"],
                  "options_pa": ["ਸੁਪਨਾ", "ਨੀਂਦ", "ਰਾਤ", "ਆਸ"],
                  "answer_en": "Dream",
                  "answer_pa": "ਸੁਪਨਾ"
                },
                {
                  "num": 48,
                  "question_en": "Which of these is a Punjabi folk dance?",
                  "question_pa": "ਇਹਨਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਪੰਜਾਬੀ ਲੋਕ ਨਾਚ ਹੈ?",
                  "options_en": ["Giddha", "Kathak", "Bharatanatyam", "Odissi"],
                  "options_pa": ["ਗਿੱਧਾ", "ਕਥਕ", "ਭਰਤਨਾਟਿਅਮ", "ਓਡੀਸੀ"],
                  "answer_en": "Giddha",
                  "answer_pa": "ਗਿੱਧਾ"
                },
                {
                  "num": 49,
                  "question_en": "Who composed the famous Punjabi song 'Maye Ni Maye'?",
                  "question_pa": "ਮਸ਼ਹੂਰ ਪੰਜਾਬੀ ਗੀਤ 'ਮਾਏ ਨੀ ਮਾਏ' ਕਿਸ ਨੇ ਲਿਖਿਆ?",
                  "options_en": ["Surjit Bindrakhia", "Kuldeep Manak", "Amar Singh Chamkila", "Gurdas Maan"],
                  "options_pa": ["ਸੁਰਜੀਤ ਬਿੰਦਰਖੀਆ", "ਕੁਲਦੀਪ ਮਾਣਕ", "ਅਮਰ ਸਿੰਘ ਚਮਕੀਲਾ", "ਗੁਰਦਾਸ ਮਾਨ"],
                  "answer_en": "Amar Singh Chamkila",
                  "answer_pa": "ਅਮਰ ਸਿੰਘ ਚਮਕੀਲਾ"
                },
                {
                  "num": 50,
                  "question_en": "What is the opposite of 'ਚਾਲਾਕ' (Clever)?",
                  "question_pa": "'ਚਾਲਾਕ' ਦਾ ਉਲਟ ਕੀ ਹੈ?",
                  "options_en": ["ਮੂਰਖ", "ਸ਼ਰਾਰਤੀ", "ਸੀਧਾ", "ਧੀਮਾ"],
                  "options_pa": ["ਮੂਰਖ", "ਸ਼ਰਾਰਤੀ", "ਸੀਧਾ", "ਧੀਮਾ"],
                  "answer_en": "ਮੂਰਖ",
                  "answer_pa": "ਮੂਰਖ"
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