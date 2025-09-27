const questions = [
        
                {
                  "num": 1,
                  "question_en": "Who is the author of 'Sohni Mahiwal'?",
                  "question_pa": "'ਸੋਹਣੀ ਮਾਹੀਵਾਲ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
                  "options_en": ["Warish Shah", "Bulleh Shah", "Guru Nanak Dev", "Shah Hussain"],
                  "options_pa": ["ਵਾਰਿਸ਼ ਸ਼ਾਹ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਗੁਰੂ ਨਾਨਕ ਦੇਵ", "ਸ਼ਾਹ ਹੁਸੈਨ"],
                  "answer_en": "Warish Shah",
                  "answer_pa": "ਵਾਰਿਸ਼ ਸ਼ਾਹ"
                },
                {
                  "num": 2,
                  "question_en": "Which poet wrote 'Mirza Sahiban'?",
                  "question_pa": "'ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ' ਦੀ ਰਚਨਾ ਕਿਸ ਕਵੀ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Piloo", "Hafiz Barkhurdar", "Amrita Pritam", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਪੀਲੂ", "ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ"],
                  "answer_en": "Hafiz Barkhurdar",
                  "answer_pa": "ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ"
                },
                {
                  "num": 3,
                  "question_en": "Who composed 'Heer Ranjha'?",
                  "question_pa": "'ਹੀਰ ਰਾਂਝਾ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Bulleh Shah", "Warish Shah", "Guru Nanak Dev", "Baba Farid"],
                  "options_pa": ["ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਵਾਰਿਸ਼ ਸ਼ਾਹ", "ਗੁਰੂ ਨਾਨਕ ਦੇਵ", "ਬਾਬਾ ਫ਼ਰੀਦ"],
                  "answer_en": "Warish Shah",
                  "answer_pa": "ਵਾਰਿਸ਼ ਸ਼ਾਹ"
                },
                {
                  "num": 4,
                  "question_en": "Which work is written by Amrita Pritam?",
                  "question_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਦੀ ਰਚਨਾ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["Pinjar", "Sohni Mahiwal", "Heer Ranjha", "Mirza Sahiban"],
                  "options_pa": ["ਪਿੰਜਰ", "ਸੋਹਣੀ ਮਾਹੀਵਾਲ", "ਹੀਰ ਰਾਂਝਾ", "ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ"],
                  "answer_en": "Pinjar",
                  "answer_pa": "ਪਿੰਜਰ"
                },
                {
                  "num": 5,
                  "question_en": "Who wrote 'Dulla Bhatti'?",
                  "question_pa": "'ਦੁੱਲਾ ਭੱਟੀ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Bulleh Shah", "Shiv Kumar Batalvi", "Piloo", "Guru Nanak Dev"],
                  "options_pa": ["ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ", "ਪੀਲੂ", "ਗੁਰੂ ਨਾਨਕ ਦੇਵ"],
                  "answer_en": "Piloo",
                  "answer_pa": "ਪੀਲੂ"
                },
                {
                  "num": 6,
                  "question_en": "Which poet is known for 'Loona'?",
                  "question_pa": "'ਲੂਣਾ' ਦੀ ਰਚਨਾ ਕਿਸ ਕਵੀ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Shiv Kumar Batalvi", "Amrita Pritam", "Bulleh Shah", "Warish Shah"],
                  "options_pa": ["ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਵਾਰਿਸ਼ ਸ਼ਾਹ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ"
                },
                {
                  "num": 7,
                  "question_en": "Who composed 'Ajj Din Chadheya Tariyan Wala'?",
                  "question_pa": "'ਅੱਜ ਦਿਨ ਚੜ੍ਹਿਆ ਤਾਰਿਆਂ ਵਾਲ਼ਾ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Amrita Pritam", "Mohan Singh", "Bulleh Shah", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਮੋਹਨ ਸਿੰਘ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ"],
                  "answer_en": "Mohan Singh",
                  "answer_pa": "ਮੋਹਨ ਸਿੰਘ"
                },
                {
                  "num": 8,
                  "question_en": "Which Sufi poet wrote 'Kafian'?",
                  "question_pa": "'ਕਾਫ਼ੀਆਂ' ਦੀ ਰਚਨਾ ਕਿਸ ਸੂਫੀ ਕਵੀ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Bulleh Shah", "Warish Shah", "Shah Hussain", "Baba Farid"],
                  "options_pa": ["ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਵਾਰਿਸ਼ ਸ਼ਾਹ", "ਸ਼ਾਹ ਹੁਸੈਨ", "ਬਾਬਾ ਫ਼ਰੀਦ"],
                  "answer_en": "Bulleh Shah",
                  "answer_pa": "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ"
                },
                {
                  "num": 9,
                  "question_en": "Who is the author of 'Saatvan Sur'?",
                  "question_pa": "'ਸਤਵਾਂ ਸੂਰ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
                  "options_en": ["Gurdial Singh", "Nanak Singh", "Kartar Singh Duggal", "Gurbaksh Singh Preetlari"],
                  "options_pa": ["ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਨਾਨਕ ਸਿੰਘ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ", "ਗੁਰਬਖ਼ਸ਼ ਸਿੰਘ ਪ੍ਰੀਤਲੜੀ"],
                  "answer_en": "Nanak Singh",
                  "answer_pa": "ਨਾਨਕ ਸਿੰਘ"
                },
                {
                  "num": 10,
                  "question_en": "Which poet wrote 'Main Teri Haan'?",
                  "question_pa": "'ਮੈਂ ਤੇਰੀ ਹਾਂ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Amrita Pritam", "Shiv Kumar Batalvi", "Pash", "Surjit Patar"],
                  "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ", "ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ"],
                  "answer_en": "Amrita Pritam",
                  "answer_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"
                },
                {
                  "num": 11,
                  "question_en": "Who composed 'Birha da Sultan'?",
                  "question_pa": "'ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Shiv Kumar Batalvi", "Bulleh Shah", "Warish Shah", "Amrita Pritam"],
                  "options_pa": ["ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਵਾਰਿਸ਼ ਸ਼ਾਹ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ"
                },
                {
                  "num": 12,
                  "question_en": "Which work is by Gurdial Singh?",
                  "question_pa": "ਗੁਰਦਿਆਲ ਸਿੰਘ ਦੀ ਰਚਨਾ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["Marhi Da Deeva", "Saatvan Sur", "Pinjar", "Dulla Bhatti"],
                  "options_pa": ["ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ", "ਸਤਵਾਂ ਸੂਰ", "ਪਿੰਜਰ", "ਦੁੱਲਾ ਭੱਟੀ"],
                  "answer_en": "Marhi Da Deeva",
                  "answer_pa": "ਮੜ੍ਹੀ ਦਾ ਦੀਵਾ"
                },
                {
                  "num": 13,
                  "question_en": "Who wrote 'Panth Prakash'?",
                  "question_pa": "'ਪੰਥ ਪ੍ਰਕਾਸ਼' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Ratan Singh Bhangu", "Giani Gurdit Singh", "Bhai Vir Singh", "Kahn Singh Nabha"],
                  "options_pa": ["ਰਤਨ ਸਿੰਘ ਭੰਗੂ", "ਗਿਆਨੀ ਗੁਰਦਿੱਤ ਸਿੰਘ", "ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਕਾਹਨ ਸਿੰਘ ਨਾਭਾ"],
                  "answer_en": "Ratan Singh Bhangu",
                  "answer_pa": "ਰਤਨ ਸਿੰਘ ਭੰਗੂ"
                },
                {
                  "num": 14,
                  "question_en": "Which poet is known for 'Ik Si Punjab'?",
                  "question_pa": "'ਇੱਕ ਸੀ ਪੰਜਾਬ' ਦੀ ਰਚਨਾ ਕਿਸ ਕਵੀ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Pash", "Surjit Patar", "Amrita Pritam", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ"],
                  "answer_en": "Pash",
                  "answer_pa": "ਪਾਸ਼"
                },
                {
                  "num": 15,
                  "question_en": "Who composed 'Main Tenu Phir Milangi'?",
                  "question_pa": "'ਮੈਂ ਤੈਨੂੰ ਫਿਰ ਮਿਲਾਂਗੀ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Amrita Pritam", "Shiv Kumar Batalvi", "Surjit Patar", "Bulleh Shah"],
                  "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ"],
                  "answer_en": "Amrita Pritam",
                  "answer_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"
                },
                {
                  "num": 16,
                  "question_en": "Which of these is a play by Balwant Gargi?",
                  "question_pa": "ਬਲਵੰਤ ਗਾਰਗੀ ਦਾ ਨਾਟਕ ਕਿਹੜਾ ਹੈ?",
                  "options_en": ["Loha Kut", "Sultan Razia", "Mirza Sahiban", "Heer Ranjha"],
                  "options_pa": ["ਲੋਹਾ ਕੁੱਟ", "ਸੁਲਤਾਨ ਰਜ਼ੀਆ", "ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ", "ਹੀਰ ਰਾਂਝਾ"],
                  "answer_en": "Loha Kut",
                  "answer_pa": "ਲੋਹਾ ਕੁੱਟ"
                },
                {
                  "num": 17,
                  "question_en": "Who wrote 'Punjabi Diyaan Maa Boliyaan'?",
                  "question_pa": "'ਪੰਜਾਬੀ ਦੀਆਂ ਮਾਂ ਬੋਲੀਆਂ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Dhani Ram Chatrik", "Bhai Vir Singh", "Puratan Singh", "Kartar Singh Duggal"],
                  "options_pa": ["ਧਨੀ ਰਾਮ ਚਾਤ੍ਰਿਕ", "ਭਾਈ ਵੀਰ ਸਿੰਘ", "ਪੁਰਾਤਨ ਸਿੰਘ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ"],
                  "answer_en": "Dhani Ram Chatrik",
                  "answer_pa": "ਧਨੀ ਰਾਮ ਚਾਤ੍ਰਿਕ"
                },
                {
                  "num": 18,
                  "question_en": "Which poet is associated with 'Kissa Kav'?",
                  "question_pa": "'ਕਿੱਸਾ ਕਾਵਿ' ਨਾਲ ਕਿਸ ਕਵੀ ਦਾ ਨਾਮ ਜੁੜਿਆ ਹੈ?",
                  "options_en": ["Warish Shah", "Bulleh Shah", "Guru Nanak Dev", "Baba Farid"],
                  "options_pa": ["ਵਾਰਿਸ਼ ਸ਼ਾਹ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਗੁਰੂ ਨਾਨਕ ਦੇਵ", "ਬਾਬਾ ਫ਼ਰੀਦ"],
                  "answer_en": "Warish Shah",
                  "answer_pa": "ਵਾਰਿਸ਼ ਸ਼ਾਹ"
                },
                {
                  "num": 19,
                  "question_en": "Who composed 'Shahnameh-e-Ishq'?",
                  "question_pa": "'ਸ਼ਾਹਨਾਮਾ-ਏ-ਇਸ਼ਕ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Qadir Yar", "Hafiz Barkhurdar", "Piloo", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਕਾਦਿਰਯਾਰ", "ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ", "ਪੀਲੂ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ"],
                  "answer_en": "Qadir Yar",
                  "answer_pa": "ਕਾਦਿਰਯਾਰ"
                },
                {
                  "num": 20,
                  "question_en": "Which work is by Bhai Vir Singh?",
                  "question_pa": "ਭਾਈ ਵੀਰ ਸਿੰਘ ਦੀ ਰਚਨਾ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["Sundri", "Saatvan Sur", "Pinjar", "Dulla Bhatti"],
                  "options_pa": ["ਸੁੰਦਰੀ", "ਸਤਵਾਂ ਸੂਰ", "ਪਿੰਜਰ", "ਦੁੱਲਾ ਭੱਟੀ"],
                  "answer_en": "Sundri",
                  "answer_pa": "ਸੁੰਦਰੀ"
                },
                {
                  "num": 21,
                  "question_en": "Who wrote 'Punjab Di Dharti'?",
                  "question_pa": "'ਪੰਜਾਬ ਦੀ ਧਰਤੀ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Dhani Ram Chatrik", "Amrita Pritam", "Shiv Kumar Batalvi", "Pash"],
                  "options_pa": ["ਧਨੀ ਰਾਮ ਚਾਤ੍ਰਿਕ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ", "ਪਾਸ਼"],
                  "answer_en": "Dhani Ram Chatrik",
                  "answer_pa": "ਧਨੀ ਰਾਮ ਚਾਤ੍ਰਿਕ"
                },
                {
                  "num": 22,
                  "question_en": "Which poet is known for 'Kafian Bulleh Shah'?",
                  "question_pa": "'ਕਾਫ਼ੀਆਂ ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Bulleh Shah", "Shah Hussain", "Sultan Bahu", "Baba Farid"],
                  "options_pa": ["ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਸ਼ਾਹ ਹੁਸੈਨ", "ਸੁਲਤਾਨ ਬਾਹੂ", "ਬਾਬਾ ਫ਼ਰੀਦ"],
                  "answer_en": "Bulleh Shah",
                  "answer_pa": "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ"
                },
                {
                  "num": 23,
                  "question_en": "Who composed 'Jangnama'?",
                  "question_pa": "'ਜੰਗਨਾਮਾ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Shah Mohammad", "Qadir Yar", "Hafiz Barkhurdar", "Piloo"],
                  "options_pa": ["ਸ਼ਾਹ ਮੁਹੰਮਦ", "ਕਾਦਿਰਯਾਰ", "ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ", "ਪੀਲੂ"],
                  "answer_en": "Shah Mohammad",
                  "answer_pa": "ਸ਼ਾਹ ਮੁਹੰਮਦ"
                },
                {
                  "num": 24,
                  "question_en": "Which work is by Kartar Singh Duggal?",
                  "question_pa": "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ ਦੀ ਰਚਨਾ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["Nawan Ghar", "Saatvan Sur", "Pinjar", "Dulla Bhatti"],
                  "options_pa": ["ਨਵਾਂ ਘਰ", "ਸਤਵਾਂ ਸੂਰ", "ਪਿੰਜਰ", "ਦੁੱਲਾ ਭੱਟੀ"],
                  "answer_en": "Nawan Ghar",
                  "answer_pa": "ਨਵਾਂ ਘਰ"
                },
                {
                  "num": 25,
                  "question_en": "Who wrote 'Mera Pind'?",
                  "question_pa": "'ਮੇਰਾ ਪਿੰਡ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Gurdial Singh", "Nanak Singh", "Kartar Singh Duggal", "Gurbaksh Singh Preetlari"],
                  "options_pa": ["ਗੁਰਦਿਆਲ ਸਿੰਘ", "ਨਾਨਕ ਸਿੰਘ", "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ", "ਗੁਰਬਖ਼ਸ਼ ਸਿੰਘ ਪ੍ਰੀਤਲੜੀ"],
                  "answer_en": "Gurdial Singh",
                  "answer_pa": "ਗੁਰਦਿਆਲ ਸਿੰਘ"
                },
                {
                  "num": 26,
                  "question_en": "Which poet is known for 'Main Ik Shikra Yaar Banaya'?",
                  "question_pa": "'ਮੈਂ ਇੱਕ ਸ਼ਿਕਰਾ ਯਾਰ ਬਣਾਇਆ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Bulleh Shah", "Shah Hussain", "Waris Shah", "Baba Farid"],
                  "options_pa": ["ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਸ਼ਾਹ ਹੁਸੈਨ", "ਵਾਰਿਸ਼ ਸ਼ਾਹ", "ਬਾਬਾ ਫ਼ਰੀਦ"],
                  "answer_en": "Bulleh Shah",
                  "answer_pa": "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ"
                },
                {
                  "num": 27,
                  "question_en": "Who composed 'Kissa Puran Bhagat'?",
                  "question_pa": "'ਕਿੱਸਾ ਪੂਰਨ ਭਗਤ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Qadir Yar", "Hafiz Barkhurdar", "Piloo", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਕਾਦਿਰਯਾਰ", "ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ", "ਪੀਲੂ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ"],
                  "answer_en": "Qadir Yar",
                  "answer_pa": "ਕਾਦਿਰਯਾਰ"
                },
                {
                  "num": 28,
                  "question_en": "Which work is by Shiv Kumar Batalvi?",
                  "question_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ ਦੀ ਰਚਨਾ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["Loona", "Sohni Mahiwal", "Heer Ranjha", "Mirza Sahiban"],
                  "options_pa": ["ਲੂਣਾ", "ਸੋਹਣੀ ਮਾਹੀਵਾਲ", "ਹੀਰ ਰਾਂਝਾ", "ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ"],
                  "answer_en": "Loona",
                  "answer_pa": "ਲੂਣਾ"
                },
                {
                  "num": 29,
                  "question_en": "Who wrote 'Kafian Shah Hussain'?",
                  "question_pa": "'ਕਾਫ਼ੀਆਂ ਸ਼ਾਹ ਹੁਸੈਨ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Shah Hussain", "Bulleh Shah", "Sultan Bahu", "Baba Farid"],
                  "options_pa": ["ਸ਼ਾਹ ਹੁਸੈਨ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਸੁਲਤਾਨ ਬਾਹੂ", "ਬਾਬਾ ਫ਼ਰੀਦ"],
                  "answer_en": "Shah Hussain",
                  "answer_pa": "ਸ਼ਾਹ ਹੁਸੈਨ"
                },
                {
                  "num": 30,
                  "question_en": "Which poet is known for 'Ajj Din Chadheya Tariyan Wala'?",
                  "question_pa": "'ਅੱਜ ਦਿਨ ਚੜ੍ਹਿਆ ਤਾਰਿਆਂ ਵਾਲ਼ਾ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Mohan Singh", "Amrita Pritam", "Shiv Kumar Batalvi", "Pash"],
                  "options_pa": ["ਮੋਹਨ ਸਿੰਘ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ", "ਪਾਸ਼"],
                  "answer_en": "Mohan Singh",
                  "answer_pa": "ਮੋਹਨ ਸਿੰਘ"
                },
                {
                  "num": 31,
                  "question_en": "Who composed 'Kissa Sohni Mahiwal'?",
                  "question_pa": "'ਕਿੱਸਾ ਸੋਹਣੀ ਮਾਹੀਵਾਲ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Hafiz Barkhurdar", "Qadir Yar", "Piloo", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ", "ਕਾਦਿਰਯਾਰ", "ਪੀਲੂ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ"],
                  "answer_en": "Hafiz Barkhurdar",
                  "answer_pa": "ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ"
                },
                {
                  "num": 32,
                  "question_en": "Which work is by Amrita Pritam?",
                  "question_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਦੀ ਰਚਨਾ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["Kagaz Te Canvas", "Saatvan Sur", "Pinjar", "Dulla Bhatti"],
                  "options_pa": ["ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ", "ਸਤਵਾਂ ਸੂਰ", "ਪਿੰਜਰ", "ਦੁੱਲਾ ਭੱਟੀ"],
                  "answer_en": "Kagaz Te Canvas",
                  "answer_pa": "ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ"
                },
                {
                  "num": 33,
                  "question_en": "Who wrote 'Kafian Sultan Bahu'?",
                  "question_pa": "'ਕਾਫ਼ੀਆਂ ਸੁਲਤਾਨ ਬਾਹੂ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Sultan Bahu", "Bulleh Shah", "Shah Hussain", "Baba Farid"],
                  "options_pa": ["ਸੁਲਤਾਨ ਬਾਹੂ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਸ਼ਾਹ ਹੁਸੈਨ", "ਬਾਬਾ ਫ਼ਰੀਦ"],
                  "answer_en": "Sultan Bahu",
                  "answer_pa": "ਸੁਲਤਾਨ ਬਾਹੂ"
                },
                {
                  "num": 34,
                  "question_en": "Which poet is known for 'Main Tenu Phir Milangi'?",
                  "question_pa": "'ਮੈਂ ਤੈਨੂੰ ਫਿਰ ਮਿਲਾਂਗੀ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Amrita Pritam", "Shiv Kumar Batalvi", "Surjit Patar", "Pash"],
                  "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼"],
                  "answer_en": "Amrita Pritam",
                  "answer_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"
                },
                {
                  "num": 35,
                  "question_en": "Who composed 'Kissa Heer Ranjha'?",
                  "question_pa": "'ਕਿੱਸਾ ਹੀਰ ਰਾਂਝਾ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Waris Shah", "Hafiz Barkhurdar", "Qadir Yar", "Piloo"],
                  "options_pa": ["ਵਾਰਿਸ਼ ਸ਼ਾਹ", "ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ", "ਕਾਦਿਰਯਾਰ", "ਪੀਲੂ"],
                  "answer_en": "Waris Shah",
                  "answer_pa": "ਵਾਰਿਸ਼ ਸ਼ਾਹ"
                },
                {
                  "num": 36,
                  "question_en": "Which work is by Nanak Singh?",
                  "question_pa": "ਨਾਨਕ ਸਿੰਘ ਦੀ ਰਚਨਾ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["Chitta Lahu", "Saatvan Sur", "Pinjar", "Dulla Bhatti"],
                  "options_pa": ["ਚਿੱਟਾ ਲਹੂ", "ਸਤਵਾਂ ਸੂਰ", "ਪਿੰਜਰ", "ਦੁੱਲਾ ਭੱਟੀ"],
                  "answer_en": "Chitta Lahu",
                  "answer_pa": "ਚਿੱਟਾ ਲਹੂ"
                },
                {
                  "num": 37,
                  "question_en": "Who wrote 'Kafian Baba Farid'?",
                  "question_pa": "'ਕਾਫ਼ੀਆਂ ਬਾਬਾ ਫ਼ਰੀਦ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Baba Farid", "Bulleh Shah", "Shah Hussain", "Sultan Bahu"],
                  "options_pa": ["ਬਾਬਾ ਫ਼ਰੀਦ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਸ਼ਾਹ ਹੁਸੈਨ", "ਸੁਲਤਾਨ ਬਾਹੂ"],
                  "answer_en": "Baba Farid",
                  "answer_pa": "ਬਾਬਾ ਫ਼ਰੀਦ"
                },
                {
                  "num": 38,
                  "question_en": "Which poet is known for 'Main Teri Haan'?",
                  "question_pa": "'ਮੈਂ ਤੇਰੀ ਹਾਂ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Amrita Pritam", "Shiv Kumar Batalvi", "Pash", "Surjit Patar"],
                  "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ", "ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ"],
                  "answer_en": "Amrita Pritam",
                  "answer_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"
                },
                {
                  "num": 39,
                  "question_en": "Who composed 'Kissa Mirza Sahiban'?",
                  "question_pa": "'ਕਿੱਸਾ ਮਿਰਜ਼ਾ ਸਾਹਿਬਾਂ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Piloo", "Hafiz Barkhurdar", "Qadir Yar", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਪੀਲੂ", "ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ", "ਕਾਦਿਰਯਾਰ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ"],
                  "answer_en": "Piloo",
                  "answer_pa": "ਪੀਲੂ"
                },
                {
                  "num": 40,
                  "question_en": "Which work is by Gurbaksh Singh Preetlari?",
                  "question_pa": "ਗੁਰਬਖ਼ਸ਼ ਸਿੰਘ ਪ੍ਰੀਤਲੜੀ ਦੀ ਰਚਨਾ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["Preet di Bhet", "Saatvan Sur", "Pinjar", "Dulla Bhatti"],
                  "options_pa": ["ਪ੍ਰੀਤ ਦੀ ਭੇਟ", "ਸਤਵਾਂ ਸੂਰ", "ਪਿੰਜਰ", "ਦੁੱਲਾ ਭੱਟੀ"],
                  "answer_en": "Preet di Bhet",
                  "answer_pa": "ਪ੍ਰੀਤ ਦੀ ਭੇਟ"
                },
                {
                  "num": 41,
                  "question_en": "Who wrote 'Kafian Bulleh Shah'?",
                  "question_pa": "'ਕਾਫ਼ੀਆਂ ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Bulleh Shah", "Shah Hussain", "Sultan Bahu", "Baba Farid"],
                  "options_pa": ["ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਸ਼ਾਹ ਹੁਸੈਨ", "ਸੁਲਤਾਨ ਬਾਹੂ", "ਬਾਬਾ ਫ਼ਰੀਦ"],
                  "answer_en": "Bulleh Shah",
                  "answer_pa": "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ"
                },
                {
                  "num": 42,
                  "question_en": "Which poet is known for 'Birha da Sultan'?",
                  "question_pa": "'ਬਿਰਹਾ ਦਾ ਸੁਲਤਾਨ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Shiv Kumar Batalvi", "Amrita Pritam", "Pash", "Surjit Patar"],
                  "options_pa": ["ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਪਾਸ਼", "ਸੁਰਜੀਤ ਪਾਤਰ"],
                  "answer_en": "Shiv Kumar Batalvi",
                  "answer_pa": "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ"
                },
                {
                  "num": 43,
                  "question_en": "Who composed 'Kissa Dulla Bhatti'?",
                  "question_pa": "'ਕਿੱਸਾ ਦੁੱਲਾ ਭੱਟੀ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Piloo", "Hafiz Barkhurdar", "Qadir Yar", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਪੀਲੂ", "ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ", "ਕਾਦਿਰਯਾਰ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ"],
                  "answer_en": "Piloo",
                  "answer_pa": "ਪੀਲੂ"
                },
                {
                  "num": 44,
                  "question_en": "Which work is by Kartar Singh Duggal?",
                  "question_pa": "ਕਰਤਾਰ ਸਿੰਘ ਦੁੱਗਲ ਦੀ ਰਚਨਾ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["Nawan Ghar", "Saatvan Sur", "Pinjar", "Dulla Bhatti"],
                  "options_pa": ["ਨਵਾਂ ਘਰ", "ਸਤਵਾਂ ਸੂਰ", "ਪਿੰਜਰ", "ਦੁੱਲਾ ਭੱਟੀ"],
                  "answer_en": "Nawan Ghar",
                  "answer_pa": "ਨਵਾਂ ਘਰ"
                },
                {
                  "num": 45,
                  "question_en": "Who wrote 'Kafian Shah Hussain'?",
                  "question_pa": "'ਕਾਫ਼ੀਆਂ ਸ਼ਾਹ ਹੁਸੈਨ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Shah Hussain", "Bulleh Shah", "Sultan Bahu", "Baba Farid"],
                  "options_pa": ["ਸ਼ਾਹ ਹੁਸੈਨ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਸੁਲਤਾਨ ਬਾਹੂ", "ਬਾਬਾ ਫ਼ਰੀਦ"],
                  "answer_en": "Shah Hussain",
                  "answer_pa": "ਸ਼ਾਹ ਹੁਸੈਨ"
                },
                {
                  "num": 46,
                  "question_en": "Which poet is known for 'Ajj Din Chadheya Tariyan Wala'?",
                  "question_pa": "'ਅੱਜ ਦਿਨ ਚੜ੍ਹਿਆ ਤਾਰਿਆਂ ਵਾਲ਼ਾ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Mohan Singh", "Amrita Pritam", "Shiv Kumar Batalvi", "Pash"],
                  "options_pa": ["ਮੋਹਨ ਸਿੰਘ", "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ", "ਪਾਸ਼"],
                  "answer_en": "Mohan Singh",
                  "answer_pa": "ਮੋਹਨ ਸਿੰਘ"
                },
                {
                  "num": 47,
                  "question_en": "Who composed 'Kissa Sohni Mahiwal'?",
                  "question_pa": "'ਕਿੱਸਾ ਸੋਹਣੀ ਮਾਹੀਵਾਲ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Hafiz Barkhurdar", "Qadir Yar", "Piloo", "Shiv Kumar Batalvi"],
                  "options_pa": ["ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ", "ਕਾਦਿਰਯਾਰ", "ਪੀਲੂ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ"],
                  "answer_en": "Hafiz Barkhurdar",
                  "answer_pa": "ਹਾਫ਼ਿਜ਼ ਬਰਖ਼ੁਰਦਾਰ"
                },
                {
                  "num": 48,
                  "question_en": "Which work is by Amrita Pritam?",
                  "question_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ ਦੀ ਰਚਨਾ ਕਿਹੜੀ ਹੈ?",
                  "options_en": ["Kagaz Te Canvas", "Saatvan Sur", "Pinjar", "Dulla Bhatti"],
                  "options_pa": ["ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ", "ਸਤਵਾਂ ਸੂਰ", "ਪਿੰਜਰ", "ਦੁੱਲਾ ਭੱਟੀ"],
                  "answer_en": "Kagaz Te Canvas",
                  "answer_pa": "ਕਾਗ਼ਜ਼ ਤੇ ਕੈਨਵਸ"
                },
                {
                  "num": 49,
                  "question_en": "Who wrote 'Kafian Sultan Bahu'?",
                  "question_pa": "'ਕਾਫ਼ੀਆਂ ਸੁਲਤਾਨ ਬਾਹੂ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Sultan Bahu", "Bulleh Shah", "Shah Hussain", "Baba Farid"],
                  "options_pa": ["ਸੁਲਤਾਨ ਬਾਹੂ", "ਬੁੱਲ੍ਹੇ ਸ਼ਾਹ", "ਸ਼ਾਹ ਹੁਸੈਨ", "ਬਾਬਾ ਫ਼ਰੀਦ"],
                  "answer_en": "Sultan Bahu",
                  "answer_pa": "ਸੁਲਤਾਨ ਬਾਹੂ"
                },
                {
                  "num": 50,
                  "question_en": "Which poet is known for 'Main Tenu Phir Milangi'?",
                  "question_pa": "'ਮੈਂ ਤੈਨੂੰ ਫਿਰ ਮਿਲਾਂਗੀ' ਦੀ ਰਚਨਾ ਕਿਸ ਨੇ ਕੀਤੀ?",
                  "options_en": ["Amrita Pritam", "Shiv Kumar Batalvi", "Surjit Patar", "Pash"],
                  "options_pa": ["ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ", "ਸ਼ਿਵ ਕੁਮਾਰ ਬਾਤਲਵੀ", "ਸੁਰਜੀਤ ਪਾਤਰ", "ਪਾਸ਼"],
                  "answer_en": "Amrita Pritam",
                  "answer_pa": "ਅਮ੍ਰਿਤਾ ਪ੍ਰੀਤਮ"
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