require("dotenv").config();
const express = require("express");
const multer = require("multer");
const axios = require("axios");
const cors = require("cors");
const FormData = require("form-data");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const upload = multer();
const VIRUSTOTAL_API_KEY = process.env.VIRUSTOTAL_API_KEY;

// Poll VirusTotal for analysis results
const waitForAnalysis = async (scanId) => {
    let retries = 20; // Increased retries (4 minutes total with 5-second intervals)
    while (retries > 0) {
        try {
            const reportResponse = await axios.get(`https://www.virustotal.com/api/v3/analyses/${scanId}`, {
                headers: { "x-apikey": VIRUSTOTAL_API_KEY }
            });

            const status = reportResponse.data.data.attributes.status;
            console.log("Analysis status:", status);

            if (status === "completed") {
                const stats = reportResponse.data.data.attributes.stats || {};

                // Calculate total scans
                const total = (stats.harmless || 0) + (stats.malicious || 0) + (stats.suspicious || 0) + (stats.undetected || 0);

                return { ...stats, total };
            }

            retries--;
            await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 seconds before retrying
        } catch (error) {
            console.error("Error during polling:", error.response ? error.response.data : error.message);
            retries--;
        }
    }

    throw new Error("Analysis report not ready after multiple retries");
};

// Scan File (Always Upload)
app.post("/scan-file", upload.single("file"), async (req, res) => {
    try {
        const fileBuffer = req.file.buffer;

        console.log("Uploading file to VirusTotal...");
        const formData = new FormData();
        formData.append("file", fileBuffer, req.file.originalname);

        const uploadResponse = await axios.post("https://www.virustotal.com/api/v3/files", formData, {
            headers: { "x-apikey": VIRUSTOTAL_API_KEY, ...formData.getHeaders() }
        });

        console.log("File upload response:", uploadResponse.data);

        const scanId = uploadResponse.data.data.id;
        if (!scanId) {
            return res.status(500).json({ error: "Failed to retrieve scanId from VirusTotal" });
        }

        console.log("Fetching analysis report for scanId:", scanId);
        const stats = await waitForAnalysis(scanId);

        res.json({ scanId, stats });
    } catch (error) {
        console.error("Error during file scan:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Failed to scan file" });
    }
});

// Scan URL
app.post("/scan-url", async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        console.log("Submitting URL for scanning:", url);

        // Submit the URL to VirusTotal
        const response = await axios.post(
            "https://www.virustotal.com/api/v3/urls",
            `url=${encodeURIComponent(url)}`,
            {
                headers: {
                    "x-apikey": VIRUSTOTAL_API_KEY,
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );

        const scanId = response.data.data.id;
        console.log("Scan ID for URL:", scanId);

        console.log("Fetching analysis report for scanId:", scanId);
        const stats = await waitForAnalysis(scanId);

        res.json(stats);
    } catch (error) {
        console.error("Error during URL scan:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Failed to scan URL" });
    }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));