// const express = require("express");
// const path = require("path");
// const router = express.Router();

// // Controllers import karen agar hain
// // const someController = require("../controllers/someController");

// // Home route
// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/main.html"));
// });

// // Test routes
// router.get("/test", (req, res) => {
//     res.send("Test category available");
// });

// // JEE category routes
// router.get("/test/jee", (req, res) => {
//     res.send("JEE test category available");
// });

// // MPPSC category routes
// router.get("/test/mppsc", (req, res) => {
//     res.send("MPPSC test category available");
// });

// // 10th & 12th category routes
// router.get("/test/10th", (req, res) => {
//     res.send("10th board test category available");
// });

// router.get("/test/12th", (req, res) => {
//     res.send("12th board test category available");
// });

// // Feedback
// router.get("/feedback", (req, res) => {
//     res.send("Feedback page");
// });

// // Logout
// router.get("/logout", (req, res) => {
//     res.send("Logout successful");
// });

// // Profile & purchases
// router.get("/my_profile", (req, res) => {
//     res.send("User profile");
// });

// router.get("/myPurchases", (req, res) => {
//     res.send("User purchases");
// });

// // Policies
// router.get("/privacyPolicy", (req, res) => {
//     res.send("Privacy Policy page");
// });

// router.get("/refundPolicy", (req, res) => {
//     res.send("Refund Policy page");
// });

// router.get("/terms", (req, res) => {
//     res.send("Terms and Conditions page");
// });

// // Category route
// router.get("/category", (req, res) => {
//     res.send("Category page");
// });





// // Routes for Group A
// app.get("/groupA/:file", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/GroupA", req.params.file));
// });

// // Routes for Group B
// app.get("/groupB/:file", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/GroupB", req.params.file));
// });

// // Routes for Group C
// app.get("/groupC/:file", (req, res) => {
//     res.sendFile(path.join(__dirname, "public/GroupC", req.params.file));
// });

// module.exports = router;








// const express = require("express");
// const path = require("path");
// const router = express.Router();

// // Home route
// router.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../public/main.html"));
// });


// router.get('/dashboard', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/deshbord/index.html'));
//   });
  
//   router.get('/dashboard/profile', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/deshbord/profile.html'));
//   });
 
// // Test routes
// router.get("/test", (req, res) => res.send("Test category available"));
// router.get("/test/jee", (req, res) => res.send("JEE test category available"));
// router.get("/test/mppsc", (req, res) => res.send("MPPSC test category available"));
// router.get("/test/10th", (req, res) => res.send("10th board test category available"));
// router.get("/test/12th", (req, res) => res.send("12th board test category available"));

// // Feedback & Logout
// router.get("/feedback", (req, res) => res.send("Feedback page"));
// router.get("/logout", (req, res) => res.send("Logout successful"));

// // User Profile & Purchases
// router.get("/my_profile", (req, res) => res.send("User profile"));
// router.get("/myPurchases", (req, res) => res.send("User purchases"));

// // Policies
// router.get("/privacyPolicy", (req, res) => res.send("Privacy Policy page"));
// router.get("/refundPolicy", (req, res) => res.send("Refund Policy page"));
// router.get("/terms", (req, res) => res.send("Terms and Conditions page"));

// // Category route
// router.get("/category", (req, res) => res.send("Category page"));

// // ✅ Serve all files inside GroupA (supports nested paths)
// router.get("/groupA/*", (req, res) => {
//     const filePath = req.params[0]; // Capture everything after /groupA/
//     res.sendFile(path.resolve(__dirname, `../public/GroupA/${filePath}`));
// });

// // ✅ Serve all files inside GroupB (supports nested paths)
// router.get("/groupB/*", (req, res) => {
//     const filePath = req.params[0];
//     res.sendFile(path.resolve(__dirname, `../public/GroupB/${filePath}`));
// });

// // ✅ Serve all files inside GroupC (supports nested paths)
// router.get("/groupC/*", (req, res) => {
//     const filePath = req.params[0];
//     res.sendFile(path.resolve(__dirname, `../public/GroupC/${filePath}`));
// });

// module.exports = router;







// const express = require("express");
// const path = require("path");

// const router = express.Router();

// // RTS Routes
// router.get("/rts", (req, res) => {
//   res.sendFile(path.join(__dirname, "../RTS", "public", "main.html"));
// });

// router.get("/rts/category/test", (req, res) => {
//   res.sendFile(path.join(__dirname, "../RTS", "public", "category", "test", "test.html"));
// });

// router.get("/rts/dashboard", (req, res) => {
//   res.sendFile(path.join(__dirname, "../RTS", "public", "Deshbord", "index.html"));
// });

// router.get("/rts/test", (req, res) => res.send("RTS Test category"));
// router.get("/rts/test/jee", (req, res) => res.send("RTS JEE test"));
// router.get("/rts/test/mppsc", (req, res) => res.send("RTS MPPSC test"));
// router.get("/rts/test/10th", (req, res) => res.send("RTS 10th test"));
// router.get("/rts/test/12th", (req, res) => res.send("RTS 12th test"));

// router.get("/rts/feedback", (req, res) => res.send("RTS Feedback"));
// router.get("/rts/logout", (req, res) => res.send("RTS Logout"));

// router.get("/rts/my_profile", (req, res) => res.send("RTS Profile"));
// router.get("/rts/myPurchases", (req, res) => res.send("RTS Purchases"));

// router.get("/rts/privacyPolicy", (req, res) => res.send("RTS Privacy Policy"));
// router.get("/rts/refundPolicy", (req, res) => res.send("RTS Refund Policy"));
// router.get("/rts/terms", (req, res) => res.send("RTS Terms"));

// router.get("/rts/groupA/*", (req, res) => {
//   const filePath = req.params[0];
//   res.sendFile(path.resolve(__dirname, `../RTS/public/GroupA/${filePath}`));
// });

// router.get("/rts/groupB/*", (req, res) => {
//   const filePath = req.params[0];
//   res.sendFile(path.resolve(__dirname, `../RTS/public/GroupB/${filePath}`));
// });

// router.get("/rts/groupC/*", (req, res) => {
//   const filePath = req.params[0];
//   res.sendFile(path.resolve(__dirname, `../RTS/public/GroupC/${filePath}`));
// });

// module.exports = router;
