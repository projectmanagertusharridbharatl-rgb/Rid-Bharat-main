
const questions = [
        [
                {
                  "num": 1,
                  "question_en": "The GST on an article is 18%. If the marked price is ₹2000, what is the total amount to be paid?",
                  "question_hi": "एक वस्तु पर जीएसटी 18% है। यदि अंकित मूल्य ₹2000 है, तो कुल भुगतान की जाने वाली राशि क्या है?",
                  "options_en": ["₹2360", "₹2200", "₹2180", "₹2400"],
                  "options_hi": ["₹2360", "₹2200", "₹2180", "₹2400"],
                  "answer_en": "₹2360",
                  "answer_hi": "₹2360",
                  "attempted": false
                },
                {
                  "num": 2,
                  "question_en": "A shopkeeper buys a product for ₹800 and sells it for ₹1000. If the GST rate is 12%, what is the CGST paid?",
                  "question_hi": "एक दुकानदार एक उत्पाद को ₹800 में खरीदता है और ₹1000 में बेचता है। यदि जीएसटी दर 12% है, तो भुगतान किया गया CGST क्या है?",
                  "options_en": ["₹60", "₹48", "₹120", "₹96"],
                  "options_hi": ["₹60", "₹48", "₹120", "₹96"],
                  "answer_en": "₹60",
                  "answer_hi": "₹60",
                  "attempted": false
                },
                {
                  "num": 3,
                  "question_en": "If a person invests ₹500 per month in a Recurring Deposit at 8% p.a. for 1 year, what is the maturity amount?",
                  "question_hi": "यदि एक व्यक्ति 8% वार्षिक ब्याज दर पर 1 वर्ष के लिए ₹500 प्रति माह आवर्ती जमा (RD) में निवेश करता है, तो परिपक्वता राशि क्या है?",
                  "options_en": ["₹6240", "₹6320", "₹6480", "₹6500"],
                  "options_hi": ["₹6240", "₹6320", "₹6480", "₹6500"],
                  "answer_en": "₹6320",
                  "answer_hi": "₹6320",
                  "attempted": false
                },
                {
                  "num": 4,
                  "question_en": "A man buys 100 shares of ₹50 each at a premium of 10%. What is his total investment?",
                  "question_hi": "एक आदमी ₹50 वाले 100 शेयर 10% प्रीमियम पर खरीदता है। उसका कुल निवेश क्या है?",
                  "options_en": ["₹5000", "₹5500", "₹6000", "₹4500"],
                  "options_hi": ["₹5000", "₹5500", "₹6000", "₹4500"],
                  "answer_en": "₹5500",
                  "answer_hi": "₹5500",
                  "attempted": false
                },
                {
                  "num": 5,
                  "question_en": "A company declares a dividend of 15%. If a shareholder has 200 shares of face value ₹10, what is his total dividend?",
                  "question_hi": "एक कंपनी 15% लाभांश घोषित करती है। यदि एक शेयरधारक के पास ₹10 अंकित मूल्य के 200 शेयर हैं, तो उसका कुल लाभांश क्या है?",
                  "options_en": ["₹300", "₹150", "₹450", "₹600"],
                  "options_hi": ["₹300", "₹150", "₹450", "₹600"],
                  "answer_en": "₹300",
                  "answer_hi": "₹300",
                  "attempted": false
                },
                {
                  "num": 6,
                  "question_en": "If the SGST on an article is ₹90, what is the CGST for the same article?",
                  "question_hi": "यदि किसी वस्तु पर SGST ₹90 है, तो उसी वस्तु पर CGST क्या होगा?",
                  "options_en": ["₹90", "₹180", "₹45", "₹0"],
                  "options_hi": ["₹90", "₹180", "₹45", "₹0"],
                  "answer_en": "₹90",
                  "answer_hi": "₹90",
                  "attempted": false
                },
                {
                  "num": 7,
                  "question_en": "A person invests ₹2000 per month in a RD for 2 years at 6% p.a. What is the interest earned?",
                  "question_hi": "एक व्यक्ति 6% वार्षिक ब्याज दर पर 2 वर्ष के लिए ₹2000 प्रति माह आवर्ती जमा (RD) में निवेश करता है। अर्जित ब्याज क्या है?",
                  "options_en": ["₹1560", "₹1800", "₹3120", "₹3600"],
                  "options_hi": ["₹1560", "₹1800", "₹3120", "₹3600"],
                  "answer_en": "₹1560",
                  "answer_hi": "₹1560",
                  "attempted": false
                },
                {
                  "num": 8,
                  "question_en": "A share of face value ₹100 is sold at a discount of 20%. What is the market price?",
                  "question_hi": "₹100 अंकित मूल्य वाला एक शेयर 20% की छूट पर बेचा जाता है। बाजार मूल्य क्या है?",
                  "options_en": ["₹80", "₹120", "₹100", "₹20"],
                  "options_hi": ["₹80", "₹120", "₹100", "₹20"],
                  "answer_en": "₹80",
                  "answer_hi": "₹80",
                  "attempted": false
                },
                {
                  "num": 9,
                  "question_en": "If the IGST on a product is ₹360, what is the SGST if it is an intra-state supply?",
                  "question_hi": "यदि किसी उत्पाद पर IGST ₹360 है, तो SGST क्या होगा यदि यह अंतर-राज्य आपूर्ति है?",
                  "options_en": ["₹180", "₹0", "₹360", "₹120"],
                  "options_hi": ["₹180", "₹0", "₹360", "₹120"],
                  "answer_en": "₹0",
                  "answer_hi": "₹0",
                  "attempted": false
                },
                {
                  "num": 10,
                  "question_en": "A company declares a dividend of ₹5 per share. If a person holds 150 shares, what is his total dividend?",
                  "question_hi": "एक कंपनी ₹5 प्रति शेयर लाभांश घोषित करती है। यदि एक व्यक्ति के पास 150 शेयर हैं, तो उसका कुल लाभांश क्या है?",
                  "options_en": ["₹750", "₹500", "₹1500", "₹300"],
                  "options_hi": ["₹750", "₹500", "₹1500", "₹300"],
                  "answer_en": "₹750",
                  "answer_hi": "₹750",
                  "attempted": false
                },
                {
                  "num": 11,
                  "question_en": "The marked price of an article is ₹1200. If a customer pays ₹1416 including GST, what is the GST rate?",
                  "question_hi": "एक वस्तु का अंकित मूल्य ₹1200 है। यदि एक ग्राहक जीएसटी सहित ₹1416 का भुगतान करता है, तो जीएसटी दर क्या है?",
                  "options_en": ["12%", "15%", "18%", "20%"],
                  "options_hi": ["12%", "15%", "18%", "20%"],
                  "answer_en": "18%",
                  "answer_hi": "18%",
                  "attempted": false
                },
                {
                  "num": 12,
                  "question_en": "A man invests ₹1000 per month in a RD for 3 years at 7.5% p.a. What is the maturity value?",
                  "question_hi": "एक व्यक्ति 7.5% वार्षिक ब्याज दर पर 3 वर्ष के लिए ₹1000 प्रति माह आवर्ती जमा (RD) में निवेश करता है। परिपक्वता मूल्य क्या है?",
                  "options_en": ["₹40,125", "₹41,250", "₹39,500", "₹42,000"],
                  "options_hi": ["₹40,125", "₹41,250", "₹39,500", "₹42,000"],
                  "answer_en": "₹40,125",
                  "answer_hi": "₹40,125",
                  "attempted": false
                },
                {
                  "num": 13,
                  "question_en": "If a share of face value ₹50 is quoted at ₹75, what is the premium percentage?",
                  "question_hi": "यदि ₹50 अंकित मूल्य वाला एक शेयर ₹75 पर उद्धृत है, तो प्रीमियम प्रतिशत क्या है?",
                  "options_en": ["25%", "50%", "75%", "100%"],
                  "options_hi": ["25%", "50%", "75%", "100%"],
                  "answer_en": "50%",
                  "answer_hi": "50%",
                  "attempted": false
                },
                {
                  "num": 14,
                  "question_en": "A company earns a profit of ₹10,00,000 and declares a dividend of 25%. If a shareholder owns 500 shares of ₹100 each, what is their dividend income?",
                  "question_hi": "एक कंपनी ₹10,00,000 का लाभ कमाती है और 25% लाभांश घोषित करती है। यदि एक शेयरधारक के पास ₹100 अंकित मूल्य के 500 शेयर हैं, तो उनकी लाभांश आय क्या है?",
                  "options_en": ["₹12,500", "₹25,000", "₹50,000", "₹1,00,000"],
                  "options_hi": ["₹12,500", "₹25,000", "₹50,000", "₹1,00,000"],
                  "answer_en": "₹12,500",
                  "answer_hi": "₹12,500",
                  "attempted": false
                },
                {
                  "num": 15,
                  "question_en": "If CGST is 9% and SGST is 9%, what is the equivalent IGST rate for inter-state supply?",
                  "question_hi": "यदि CGST 9% और SGST 9% है, तो अंतर-राज्य आपूर्ति के लिए समतुल्य IGST दर क्या है?",
                  "options_en": ["9%", "18%", "12%", "15%"],
                  "options_hi": ["9%", "18%", "12%", "15%"],
                  "answer_en": "18%",
                  "answer_hi": "18%",
                  "attempted": false
                },
                {
                  "num": 16,
                  "question_en": "A person buys 200 shares at ₹120 each and sells them at ₹150 each. What is the total profit?",
                  "question_hi": "एक व्यक्ति ₹120 प्रत्येक पर 200 शेयर खरीदता है और उन्हें ₹150 प्रत्येक पर बेचता है। कुल लाभ क्या है?",
                  "options_en": ["₹3000", "₹6000", "₹9000", "₹12,000"],
                  "options_hi": ["₹3000", "₹6000", "₹9000", "₹12,000"],
                  "answer_en": "₹6000",
                  "answer_hi": "₹6000",
                  "attempted": false
                },
                {
                  "num": 17,
                  "question_en": "A shopkeeper sells a product for ₹2360 including 18% GST. What is the price before GST?",
                  "question_hi": "एक दुकानदार एक उत्पाद को 18% जीएसटी सहित ₹2360 में बेचता है। जीएसटी से पहले कीमत क्या है?",
                  "options_en": ["₹2000", "₹2100", "₹2200", "₹2300"],
                  "options_hi": ["₹2000", "₹2100", "₹2200", "₹2300"],
                  "answer_en": "₹2000",
                  "answer_hi": "₹2000",
                  "attempted": false
                },
                {
                  "num": 18,
                  "question_en": "A Recurring Deposit of ₹800 per month at 6% p.a. for 2 years will earn how much interest?",
                  "question_hi": "6% वार्षिक ब्याज दर पर 2 वर्ष के लिए ₹800 प्रति माह की आवर्ती जमा (RD) पर कितना ब्याज मिलेगा?",
                  "options_en": ["₹576", "₹600", "₹624", "₹648"],
                  "options_hi": ["₹576", "₹600", "₹624", "₹648"],
                  "answer_en": "₹600",
                  "answer_hi": "₹600",
                  "attempted": false
                },
                {
                  "num": 19,
                  "question_en": "If a company declares a 10% dividend and a shareholder receives ₹5000, how many shares of ₹100 each does he own?",
                  "question_hi": "यदि एक कंपनी 10% लाभांश घोषित करती है और एक शेयरधारक को ₹5000 प्राप्त होते हैं, तो उसके पास ₹100 अंकित मूल्य के कितने शेयर हैं?",
                  "options_en": ["500", "1000", "1500", "2000"],
                  "options_hi": ["500", "1000", "1500", "2000"],
                  "answer_en": "500",
                  "answer_hi": "500",
                  "attempted": false
                },
                {
                  "num": 20,
                  "question_en": "If the IGST rate is 12%, what is the CGST rate for intra-state supply?",
                  "question_hi": "यदि IGST दर 12% है, तो अंतर-राज्य आपूर्ति के लिए CGST दर क्या है?",
                  "options_en": ["6%", "12%", "0%", "3%"],
                  "options_hi": ["6%", "12%", "0%", "3%"],
                  "answer_en": "6%",
                  "answer_hi": "6%",
                  "attempted": false
                },
                {
                  "num": 21,
                  "question_en": "A person invests ₹5000 in shares of ₹100 each at a premium of 20%. How many shares does he buy?",
                  "question_hi": "एक व्यक्ति ₹100 अंकित मूल्य के शेयरों में 20% प्रीमियम पर ₹5000 का निवेश करता है। वह कितने शेयर खरीदता है?",
                  "options_en": ["40", "50", "60", "25"],
                  "options_hi": ["40", "50", "60", "25"],
                  "answer_en": "40",
                  "answer_hi": "40",
                  "attempted": false
                },
                {
                  "num": 22,
                  "question_en": "A product costs ₹800 before GST. If the total GST paid is ₹144, what is the GST rate?",
                  "question_hi": "एक उत्पाद की कीमत जीएसटी से पहले ₹800 है। यदि भुगतान किया गया कुल जीएसटी ₹144 है, तो जीएसटी दर क्या है?",
                  "options_en": ["12%", "15%", "18%", "20%"],
                  "options_hi": ["12%", "15%", "18%", "20%"],
                  "answer_en": "18%",
                  "answer_hi": "18%",
                  "attempted": false
                },
                {
                  "num": 23,
                  "question_en": "A Recurring Deposit of ₹2000 per month at 8% p.a. for 1.5 years will have a maturity value of:",
                  "question_hi": "8% वार्षिक ब्याज दर पर 1.5 वर्ष के लिए ₹2000 प्रति माह की आवर्ती जमा (RD) का परिपक्वता मूल्य होगा:",
                  "options_en": ["₹38,880", "₹39,600", "₹40,000", "₹41,200"],
                  "options_hi": ["₹38,880", "₹39,600", "₹40,000", "₹41,200"],
                  "answer_en": "₹38,880",
                  "answer_hi": "₹38,880",
                  "attempted": false
                },
                {
                  "num": 24,
                  "question_en": "A company declares a dividend of ₹4 per share. If the market price is ₹80, what is the dividend yield?",
                  "question_hi": "एक कंपनी ₹4 प्रति शेयर लाभांश घोषित करती है। यदि बाजार मूल्य ₹80 है, तो लाभांश उपज क्या है?",
                  "options_en": ["5%", "10%", "15%", "20%"],
                  "options_hi": ["5%", "10%", "15%", "20%"],
                  "answer_en": "5%",
                  "answer_hi": "5%",
                  "attempted": false
                },
                {
                  "num": 25,
                  "question_en": "If SGST is ₹450 on an intra-state supply, what is the total GST paid?",
                  "question_hi": "यदि अंतर-राज्य आपूर्ति पर SGST ₹450 है, तो भुगतान की गई कुल जीएसटी क्या है?",
                  "options_en": ["₹450", "₹900", "₹675", "₹225"],
                  "options_hi": ["₹450", "₹900", "₹675", "₹225"],
                  "answer_en": "₹900",
                  "answer_hi": "₹900",
                  "attempted": false
                },
                {
                  "num": 26,
                  "question_en": "A man invests ₹10,000 in shares at ₹200 each. If the face value is ₹100, how many shares does he buy?",
                  "question_hi": "एक आदमी ₹200 प्रत्येक पर शेयरों में ₹10,000 का निवेश करता है। यदि अंकित मूल्य ₹100 है, तो वह कितने शेयर खरीदता है?",
                  "options_en": ["50", "100", "150", "200"],
                  "options_hi": ["50", "100", "150", "200"],
                  "answer_en": "50",
                  "answer_hi": "50",
                  "attempted": false
                },
                {
                  "num": 27,
                  "question_en": "A product is sold for ₹1180 including 18% GST. What is the price before GST?",
                  "question_hi": "एक उत्पाद को 18% जीएसटी सहित ₹1180 में बेचा जाता है। जीएसटी से पहले कीमत क्या है?",
                  "options_en": ["₹1000", "₹1100", "₹1050", "₹1150"],
                  "options_hi": ["₹1000", "₹1100", "₹1050", "₹1150"],
                  "answer_en": "₹1000",
                  "answer_hi": "₹1000",
                  "attempted": false
                },
                {
                  "num": 28,
                  "question_en": "A Recurring Deposit of ₹1500 per month at 7% p.a. for 3 years will earn interest of:",
                  "question_hi": "7% वार्षिक ब्याज दर पर 3 वर्ष के लिए ₹1500 प्रति माह की आवर्ती जमा (RD) पर ब्याज होगा:",
                  "options_en": ["₹3,465", "₹4,200", "₹5,000", "₹6,300"],
                  "options_hi": ["₹3,465", "₹4,200", "₹5,000", "₹6,300"],
                  "answer_en": "₹3,465",
                  "answer_hi": "₹3,465",
                  "attempted": false
                },
                {
                  "num": 29,
                  "question_en": "A company earns a profit of ₹5,00,000 and declares a dividend of 20%. If a shareholder owns 1000 shares of ₹50 each, what is their dividend income?",
                  "question_hi": "एक कंपनी ₹5,00,000 का लाभ कमाती है और 20% लाभांश घोषित करती है। यदि एक शेयरधारक के पास ₹50 अंकित मूल्य के 1000 शेयर हैं, तो उनकी लाभांश आय क्या है?",
                  "options_en": ["₹10,000", "₹20,000", "₹50,000", "₹1,00,000"],
                  "options_hi": ["₹10,000", "₹20,000", "₹50,000", "₹1,00,000"],
                  "answer_en": "₹10,000",
                  "answer_hi": "₹10,000",
                  "attempted": false
                },
                {
                  "num": 30,
                  "question_en": "If CGST is 6% and SGST is 6%, what is the total GST rate for intra-state supply?",
                  "question_hi": "यदि CGST 6% और SGST 6% है, तो अंतर-राज्य आपूर्ति के लिए कुल जीएसटी दर क्या है?",
                  "options_en": ["6%", "12%", "18%", "24%"],
                  "options_hi": ["6%", "12%", "18%", "24%"],
                  "answer_en": "12%",
                  "answer_hi": "12%",
                  "attempted": false
                },
                {
                  "num": 31,
                  "question_en": "A person buys 100 shares at ₹150 each and sells them at ₹180 each. What is the total profit?",
                  "question_hi": "एक व्यक्ति ₹150 प्रत्येक पर 100 शेयर खरीदता है और उन्हें ₹180 प्रत्येक पर बेचता है। कुल लाभ क्या है?",
                  "options_en": ["₹3000", "₹4500", "₹6000", "₹7500"],
                  "options_hi": ["₹3000", "₹4500", "₹6000", "₹7500"],
                  "answer_en": "₹3000",
                  "answer_hi": "₹3000",
                  "attempted": false
                },
                {
                  "num": 32,
                  "question_en": "A shopkeeper sells a product for ₹1416 including 18% GST. What is the price before GST?",
                  "question_hi": "एक दुकानदार एक उत्पाद को 18% जीएसटी सहित ₹1416 में बेचता है। जीएसटी से पहले कीमत क्या है?",
                  "options_en": ["₹1200", "₹1250", "₹1300", "₹1350"],
                  "options_hi": ["₹1200", "₹1250", "₹1300", "₹1350"],
                  "answer_en": "₹1200",
                  "answer_hi": "₹1200",
                  "attempted": false
                },
                {
                  "num": 33,
                  "question_en": "A Recurring Deposit of ₹1000 per month at 8% p.a. for 2 years will earn how much interest?",
                  "question_hi": "8% वार्षिक ब्याज दर पर 2 वर्ष के लिए ₹1000 प्रति माह की आवर्ती जमा (RD) पर कितना ब्याज मिलेगा?",
                  "options_en": ["₹1040", "₹1200", "₹1600", "₹2000"],
                  "options_hi": ["₹1040", "₹1200", "₹1600", "₹2000"],
                  "answer_en": "₹1040",
                  "answer_hi": "₹1040",
                  "attempted": false
                },
                {
                  "num": 34,
                  "question_en": "If a company declares a 15% dividend and a shareholder receives ₹7500, how many shares of ₹100 each does he own?",
                  "question_hi": "यदि एक कंपनी 15% लाभांश घोषित करती है और एक शेयरधारक को ₹7500 प्राप्त होते हैं, तो उसके पास ₹100 अंकित मूल्य के कितने शेयर हैं?",
                  "options_en": ["500", "1000", "1500", "2000"],
                  "options_hi": ["500", "1000", "1500", "2000"],
                  "answer_en": "500",
                  "answer_hi": "500",
                  "attempted": false
                },
                {
                  "num": 35,
                  "question_en": "If the IGST rate is 18%, what is the CGST rate for intra-state supply?",
                  "question_hi": "यदि IGST दर 18% है, तो अंतर-राज्य आपूर्ति के लिए CGST दर क्या है?",
                  "options_en": ["9%", "18%", "0%", "6%"],
                  "options_hi": ["9%", "18%", "0%", "6%"],
                  "answer_en": "9%",
                  "answer_hi": "9%",
                  "attempted": false
                },
                {
                  "num": 36,
                  "question_en": "A person invests ₹8000 in shares of ₹200 each at a premium of 25%. How many shares does he buy?",
                  "question_hi": "एक व्यक्ति ₹200 अंकित मूल्य के शेयरों में 25% प्रीमियम पर ₹8000 का निवेश करता है। वह कितने शेयर खरीदता है?",
                  "options_en": ["32", "40", "50", "64"],
                  "options_hi": ["32", "40", "50", "64"],
                  "answer_en": "32",
                  "answer_hi": "32",
                  "attempted": false
                },
                {
                  "num": 37,
                  "question_en": "A product costs ₹500 before GST. If the total GST paid is ₹90, what is the GST rate?",
                  "question_hi": "एक उत्पाद की कीमत जीएसटी से पहले ₹500 है। यदि भुगतान किया गया कुल जीएसटी ₹90 है, तो जीएसटी दर क्या है?",
                  "options_en": ["12%", "15%", "18%", "20%"],
                  "options_hi": ["12%", "15%", "18%", "20%"],
                  "answer_en": "18%",
                  "answer_hi": "18%",
                  "attempted": false
                },
                {
                  "num": 38,
                  "question_en": "A Recurring Deposit of ₹1200 per month at 6% p.a. for 2.5 years will have a maturity value of:",
                  "question_hi": "6% वार्षिक ब्याज दर पर 2.5 वर्ष के लिए ₹1200 प्रति माह की आवर्ती जमा (RD) का परिपक्वता मूल्य होगा:",
                  "options_en": ["₹38,880", "₹39,600", "₹40,000", "₹41,200"],
                  "options_hi": ["₹38,880", "₹39,600", "₹40,000", "₹41,200"],
                  "answer_en": "₹39,600",
                  "answer_hi": "₹39,600",
                  "attempted": false
                },
                {
                  "num": 39,
                  "question_en": "A company declares a dividend of ₹3 per share. If the market price is ₹60, what is the dividend yield?",
                  "question_hi": "एक कंपनी ₹3 प्रति शेयर लाभांश घोषित करती है। यदि बाजार मूल्य ₹60 है, तो लाभांश उपज क्या है?",
                  "options_en": ["5%", "10%", "15%", "20%"],
                  "options_hi": ["5%", "10%", "15%", "20%"],
                  "answer_en": "5%",
                  "answer_hi": "5%",
                  "attempted": false
                },
                {
                  "num": 40,
                  "question_en": "If SGST is ₹360 on an intra-state supply, what is the total GST paid?",
                  "question_hi": "यदि अंतर-राज्य आपूर्ति पर SGST ₹360 है, तो भुगतान की गई कुल जीएसटी क्या है?",
                  "options_en": ["₹360", "₹720", "₹540", "₹180"],
                  "options_hi": ["₹360", "₹720", "₹540", "₹180"],
                  "answer_en": "₹720",
                  "answer_hi": "₹720",
                  "attempted": false
                },
                {
                  "num": 41,
                  "question_en": "A man invests ₹15,000 in shares at ₹300 each. If the face value is ₹100, how many shares does he buy?",
                  "question_hi": "एक आदमी ₹300 प्रत्येक पर शेयरों में ₹15,000 का निवेश करता है। यदि अंकित मूल्य ₹100 है, तो वह कितने शेयर खरीदता है?",
                  "options_en": ["50", "100", "150", "200"],
                  "options_hi": ["50", "100", "150", "200"],
                  "answer_en": "50",
                  "answer_hi": "50",
                  "attempted": false
                },
                {
                  "num": 42,
                  "question_en": "A product is sold for ₹944 including 18% GST. What is the price before GST?",
                  "question_hi": "एक उत्पाद को 18% जीएसटी सहित ₹944 में बेचा जाता है। जीएसटी से पहले कीमत क्या है?",
                  "options_en": ["₹800", "₹850", "₹900", "₹950"],
                  "options_hi": ["₹800", "₹850", "₹900", "₹950"],
                  "answer_en": "₹800",
                  "answer_hi": "₹800",
                  "attempted": false
                },
                {
                  "num": 43,
                  "question_en": "A Recurring Deposit of ₹1800 per month at 7.5% p.a. for 2 years will earn interest of:",
                  "question_hi": "7.5% वार्षिक ब्याज दर पर 2 वर्ष के लिए ₹1800 प्रति माह की आवर्ती जमा (RD) पर ब्याज होगा:",
                  "options_en": ["₹3,240", "₹3,600", "₹4,000", "₹4,500"],
                  "options_hi": ["₹3,240", "₹3,600", "₹4,000", "₹4,500"],
                  "answer_en": "₹3,240",
                  "answer_hi": "₹3,240",
                  "attempted": false
                },
                {
                  "num": 44,
                  "question_en": "A company earns a profit of ₹8,00,000 and declares a dividend of 12.5%. If a shareholder owns 800 shares of ₹100 each, what is their dividend income?",
                  "question_hi": "एक कंपनी ₹8,00,000 का लाभ कमाती है और 12.5% लाभांश घोषित करती है। यदि एक शेयरधारक के पास ₹100 अंकित मूल्य के 800 शेयर हैं, तो उनकी लाभांश आय क्या है?",
                  "options_en": ["₹10,000", "₹20,000", "₹50,000", "₹1,00,000"],
                  "options_hi": ["₹10,000", "₹20,000", "₹50,000", "₹1,00,000"],
                  "answer_en": "₹10,000",
                  "answer_hi": "₹10,000",
                  "attempted": false
                },
                {
                  "num": 45,
                  "question_en": "If CGST is 5% and SGST is 5%, what is the total GST rate for intra-state supply?",
                  "question_hi": "यदि CGST 5% और SGST 5% है, तो अंतर-राज्य आपूर्ति के लिए कुल जीएसटी दर क्या है?",
                  "options_en": ["5%", "10%", "15%", "20%"],
                  "options_hi": ["5%", "10%", "15%", "20%"],
                  "answer_en": "10%",
                  "answer_hi": "10%",
                  "attempted": false
                },
                {
                  "num": 46,
                  "question_en": "A person buys 150 shares at ₹120 each and sells them at ₹150 each. What is the total profit?",
                  "question_hi": "एक व्यक्ति ₹120 प्रत्येक पर 150 शेयर खरीदता है और उन्हें ₹150 प्रत्येक पर बेचता है। कुल लाभ क्या है?",
                  "options_en": ["₹4500", "₹6000", "₹7500", "₹9000"],
                  "options_hi": ["₹4500", "₹6000", "₹7500", "₹9000"],
                  "answer_en": "₹4500",
                  "answer_hi": "₹4500",
                  "attempted": false
                },
                {
                  "num": 47,
                  "question_en": "A shopkeeper sells a product for ₹1650 including 10% GST. What is the price before GST?",
                  "question_hi": "एक दुकानदार एक उत्पाद को 10% जीएसटी सहित ₹1650 में बेचता है। जीएसटी से पहले कीमत क्या है?",
                  "options_en": ["₹1500", "₹1550", "₹1600", "₹1700"],
                  "options_hi": ["₹1500", "₹1550", "₹1600", "₹1700"],
                  "answer_en": "₹1500",
                  "answer_hi": "₹1500",
                  "attempted": false
                },
                {
                  "num": 48,
                  "question_en": "A Recurring Deposit of ₹2500 per month at 8% p.a. for 1 year will earn how much interest?",
                  "question_hi": "8% वार्षिक ब्याज दर पर 1 वर्ष के लिए ₹2500 प्रति माह की आवर्ती जमा (RD) पर कितना ब्याज मिलेगा?",
                  "options_en": ["₹1300", "₹1500", "₹1700", "₹2000"],
                  "options_hi": ["₹1300", "₹1500", "₹1700", "₹2000"],
                  "answer_en": "₹1300",
                  "answer_hi": "₹1300",
                  "attempted": false
                },
                {
                  "num": 49,
                  "question_en": "If a company declares a 20% dividend and a shareholder receives ₹4000, how many shares of ₹100 each does he own?",
                  "question_hi": "यदि एक कंपनी 20% लाभांश घोषित करती है और एक शेयरधारक को ₹4000 प्राप्त होते हैं, तो उसके पास ₹100 अंकित मूल्य के कितने शेयर हैं?",
                  "options_en": ["200", "400", "600", "800"],
                  "options_hi": ["200", "400", "600", "800"],
                  "answer_en": "200",
                  "answer_hi": "200",
                  "attempted": false
                },
                {
                  "num": 50,
                  "question_en": "If the IGST rate is 5%, what is the CGST rate for intra-state supply?",
                  "question_hi": "यदि IGST दर 5% है, तो अंतर-राज्य आपूर्ति के लिए CGST दर क्या है?",
                  "options_en": ["2.5%", "5%", "0%", "10%"],
                  "options_hi": ["2.5%", "5%", "0%", "10%"],
                  "answer_en": "2.5%",
                  "answer_hi": "2.5%",
                  "attempted": false
                }
              ]
      
        // Add 35 more MCQs following the same pattern...
      

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