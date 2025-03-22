// Data structure
const data = {
    "OWASP_Top_10": {
      "2015": {
        "attacks": [
          { "rank": 1, "attack": "Injection" },
          { "rank": 2, "attack": "Broken Authentication" },
          { "rank": 3, "attack": "Sensitive Data Exposure" },
          { "rank": 4, "attack": "XML External Entities (XXE)" },
          { "rank": 5, "attack": "Broken Access Control" },
          { "rank": 6, "attack": "Security Misconfiguration" },
          { "rank": 7, "attack": "Cross-Site Scripting (XSS)" },
          { "rank": 8, "attack": "Insecure Deserialization" },
          { "rank": 9, "attack": "Using Components with Known Vulnerabilities" },
          { "rank": 10, "attack": "Insufficient Logging & Monitoring" }
        ],
        "total_attacks": 4521,
        "total_threats": 15400,
        "active_threat_reports": 782,
        "intrusions_detected": 3250,
        "security_breaches": 112
      },
      "2017": {
        "attacks": [
          { "rank": 1, "attack": "Injection" },
          { "rank": 2, "attack": "Broken Authentication" },
          { "rank": 3, "attack": "Sensitive Data Exposure" },
          { "rank": 4, "attack": "XML External Entities (XXE)" },
          { "rank": 5, "attack": "Broken Access Control" },
          { "rank": 6, "attack": "Security Misconfiguration" },
          { "rank": 7, "attack": "Cross-Site Scripting (XSS)" },
          { "rank": 8, "attack": "Insecure Deserialization" },
          { "rank": 9, "attack": "Using Components with Known Vulnerabilities" },
          { "rank": 10, "attack": "Insufficient Logging & Monitoring" }
        ],
        "total_attacks": 5213,
        "total_threats": 17350,
        "active_threat_reports": 910,
        "intrusions_detected": 3689,
        "security_breaches": 135
      },
      "2021": {
        "attacks": [
          { "rank": 1, "attack": "Broken Access Control" },
          { "rank": 2, "attack": "Cryptographic Failures" },
          { "rank": 3, "attack": "Injection" },
          { "rank": 4, "attack": "Insecure Design" },
          { "rank": 5, "attack": "Security Misconfiguration" },
          { "rank": 6, "attack": "Vulnerable & Outdated Components" },
          { "rank": 7, "attack": "Identification & Authentication Failures" },
          { "rank": 8, "attack": "Software & Data Integrity Failures" },
          { "rank": 9, "attack": "Security Logging & Monitoring Failures" },
          { "rank": 10, "attack": "Server-Side Request Forgery (SSRF)" }
        ],
        "total_attacks": 6892,
        "total_threats": 19820,
        "active_threat_reports": 1025,
        "intrusions_detected": 4456,
        "security_breaches": 167
      },
      "2024": {
        "attacks": [
          { "rank": 1, "attack": "Broken Access Control" },
          { "rank": 2, "attack": "Cryptographic Failures" },
          { "rank": 3, "attack": "Injection" },
          { "rank": 4, "attack": "Insecure Design" },
          { "rank": 5, "attack": "Security Misconfiguration" },
          { "rank": 6, "attack": "Vulnerable & Outdated Components" },
          { "rank": 7, "attack": "Identification & Authentication Failures" },
          { "rank": 8, "attack": "Software & Data Integrity Failures" },
          { "rank": 9, "attack": "Security Logging & Monitoring Failures" },
          { "rank": 10, "attack": "Server-Side Request Forgery (SSRF)" }
        ],
        "total_attacks": 7315,
        "total_threats": 21450,
        "active_threat_reports": 1180,
        "intrusions_detected": 5073,
        "security_breaches": 192
      }
    }
  };
  
  // Function to update the stats dynamically
  function updateStats(year) {
    const yearData = data.OWASP_Top_10[year];
    
    // Update Total Threats
    document.getElementById("total-threats").innerText = yearData.total_threats.toLocaleString();
    
    // Update Intrusions Detected
    document.getElementById("intrusions-detected").innerText = yearData.intrusions_detected.toLocaleString();
    
    // Update Active Threat Reports
    document.getElementById("active-threat-reports").innerText = yearData.active_threat_reports.toLocaleString();
    
    // Update Security Breaches
    document.getElementById("security-breaches").innerText = yearData.security_breaches.toLocaleString();
  }
  
  // Event listener for year selection
  document.getElementById("year-selector").addEventListener("change", (event) => {
    updateStats(event.target.value);
  });
  
  // Set initial year (e.g., 2015)
  updateStats("2015");
  