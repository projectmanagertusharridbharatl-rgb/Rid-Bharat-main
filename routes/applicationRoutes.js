const express = require("express");
const router = express.Router();
const controller = require("../controllers/applicationController");

// Apply for certificate
router.post("/apply", controller.applyCertificate);

// Download certificate
router.get("/download/:appId", controller.downloadCertificate);

module.exports = router;


