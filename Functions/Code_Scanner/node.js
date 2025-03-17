const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// 🔍 OWASP Top 10 Vulnerability Detection Patterns
const vulnerabilityPatterns = [
    {
        name: "SQL Injection (SQLi)",
        regex: /(['"]\s*(?:OR|AND)\s*['"]?\d+['"]?|(?:SELECT|INSERT|UPDATE|DELETE)\s+.*\s+FROM\s+\w+\s+WHERE\s+\w+\s*=\s*['"].*['"])/i,
        message: "❌ Potential SQL Injection detected! Use prepared statements."
    },
    {
        name: "Cross-Site Scripting (XSS)",
        regex: /(<script>|document\.write\(|innerHTML\s*=|onerror\s*=|javascript:|eval\(|alert\()/i,
        message: "❌ XSS detected! Use input sanitization and Content Security Policy (CSP)."
    },
    {
        name: "Insecure Deserialization",
        regex: /unserialize\s*\(.*\)/i,
        message: "❌ Insecure Deserialization detected! Validate serialized data before using it."
    },
    {
        name: "Broken Authentication",
        regex: /(password\s*=\s*['"].+['"]|session_start\(\))/i,
        message: "❌ Broken Authentication detected! Avoid hardcoded credentials and use strong authentication."
    },
    {
        name: "Sensitive Data Exposure",
        regex: /(apikey|api_key|secret|token|password|private_key)\s*=\s*['"].+['"]/i,
        message: "❌ Sensitive Data Exposure detected! Never store sensitive data in plain text."
    },
    {
        name: "Insecure File Upload",
        regex: /move_uploaded_file\s*\(.*\)/i,
        message: "❌ Insecure File Upload detected! Validate file types and store securely."
    },
    {
        name: "Server-Side Request Forgery (SSRF)",
        regex: /(file_get_contents\s*\(|curl_init\s*\()/i,
        secureCheck: /parse_url\s*\(|in_array\s*\(|allowed_domains/i,
        message: "❌ SSRF detected! Restrict external requests and validate URLs."
    },
    {
        name: "Security Misconfiguration",
        regex: /(ini_set\s*\(.*disable_functions.*\))/i,
        message: "❌ Security Misconfiguration detected! Review server settings."
    },
    {
        name: "Broken Access Control",
        regex: /\$_SESSION\['user_role'\]\s*(?:!==?|===?)\s*['"]\w+['"]/i, // Detect hardcoded role checks
        secureCheck: /in_array\s*\(\s*\$_SESSION\['user_role'\]\s*,\s*\[.*\]\)|http_response_code\s*\(\s*403\s*\)/i, // Detect secure practices
        message: "❌ Broken Access Control detected! Implement proper role-based access control."
    },
    {
        name: "XML External Entities (XXE)",
        regex: /<!ENTITY.*SYSTEM.*>/i,
        secureCheck: /libxml_disable_entity_loader\s*\(\s*true\s*\)/i,
        message: "❌ XXE detected! Disable external entity processing in XML parsers."
    },
    {
        name: "Cryptographic Failures",
        regex: /(md5\(|sha1\()/i,
        message: "❌ Cryptographic Failure detected! Use strong hashing algorithms like SHA-256 or bcrypt."
    },
    {
        name: "Command Injection",
        regex: /exec\s*\(\s*[^)]+\s*\)/i, // Match exec() with any argument
        secureCheck: /exec\s*\(\s*(?:escapeshellarg|escapeshellcmd)\s*\(/i, // Ensure sanitization is applied
        message: "❌ Command Injection detected! Avoid executing raw commands with user input."
    }
];

// 📌 Scan Code for Vulnerabilities
app.post("/scan", (req, res) => {
    try {
        const userCode = req.body.code;

        if (!userCode) {
            return res.json({ error: "Code input is empty!" });
        }

        // Limit input size to prevent abuse
        if (userCode.length > 10000) {
            return res.json({ error: "Input too large! Please limit your code to 10,000 characters." });
        }

        // Check for vulnerabilities
        let results = [];
        for (const pattern of vulnerabilityPatterns) {
            // Check if the code matches the vulnerable pattern
            if (pattern.regex.test(userCode)) {
                // Check if the code also matches the secure pattern
                if (pattern.secureCheck && pattern.secureCheck.test(userCode)) {
                    continue; // Skip if secure practice is detected
                }
                results.push(`${pattern.name}: ${pattern.message}`);
            }
        }

        if (results.length === 0) {
            results.push("✅ No vulnerabilities detected!");
        }

        res.json({ result: results.join("<br>") });
    } catch (error) {
        console.error("Error scanning code:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// 🚀 Start Server
app.listen(PORT, () => {
    console.log(`Scanner running at http://localhost:${PORT}`);
});