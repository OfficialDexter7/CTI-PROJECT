
# Cyber Threat Intelligence Platform

## Introduction

Cybersecurity threats are evolving rapidly, making it crucial for organizations and individuals to stay ahead of potential risks. The Cyber Threat Intelligence Platform (CTIP) is designed to educate cybersecurity students and developers about the OWASP Top 10 vulnerabilities, provide tools for threat detection, and enhance cybersecurity awareness.

This platform integrates multiple security tools, such as virus scanning, code security analysis, a chatbot powered by the GPT-4 model, and a quiz-based learning module. With an intuitive dashboard and real-time scanning capabilities, users can analyze files, code, and security threats efficiently, while also interacting with an AI-driven chatbot for cybersecurity insights and assistance.

## Features

### 1. User Login & Authentication

Secure authentication using Firebase.

User registration and login with email verification.

Secure session management.

### 2. Dashboard Design

Intuitive interface to access different security tools.

Displays analysis results and security recommendations.

### 3. Virus Scanner

Uses VirusTotal API to scan files for malware and threats.

Provides real-time threat detection reports.

### 4. Code Scanner

Analyzes source code for security vulnerabilities.

Detects safe and vulnerable code snippets.

Provides recommendations to improve security.

### 5. AI Chatbot (Powered by GPT-4)

Uses Chatbase.io API to provide AI-driven assistance.

Helps users understand vulnerabilities and security best practices.

Responds to cybersecurity-related queries.

### 6. Quiz Game

Interactive quizzes to assess cybersecurity knowledge.

Helps users learn about security threats and best practices.


## How It Works

#### The Cyber Threat Intelligence Platform follows a structured workflow:

User Authentication: Users log in using Firebase authentication.

Dashboard Access: The dashboard provides access to different security tools.

File Scanning: Users upload files to be scanned by the VirusTotal API.

Code Analysis: Users input source code to detect security vulnerabilities.

Learning Module: The quiz section tests and educates users on OWASP Top 10 vulnerabilities.

Secure Contact Forms: Uses Web3Forms API for secure form submissions.

AI Chatbot Assistance: Uses Chatbase.io API for chatbot interactions.

The results from each scan are displayed with recommendations to mitigate threats.

## Methodology

#### The platform follows a proactive threat intelligence methodology:

I) Data Collection: Gathers input from users (files, code, responses). 

II) Threat Detection: Uses APIs and custom logic to identify risks.

III) Analysis & Reporting: Displays results with security insights.

IV) Education & Awareness: Engages users through quizzes and recommendations.

V) Continuous Improvement: Updates security rules and scanning algorithms.

This approach ensures real-time threat detection and cybersecurity awareness.  


## Tech Stack

**Client:**   

* HTML, CSS, JavaScript – For frontend structure and interactivity.

* Bootstrap – For responsive UI design

* Live Server – For running the frontend locally.

**Server:** 

* Node.js & Express.js – For handling backend operations.

* Firebase Authentication – For secure user login and authentication.

* VirusTotal API – For virus and malware scanning.

* Code Scanner – For analyzing source code vulnerabilities.

**Database & Hosting:**  

* Firebase Firestore – For storing user data securely.

* GitHub – For version control and collaboration.

* VS Code – For development and testing.



## API Reference

## 1. Virus Total Scanner(File Scanning)

#### Scan a file

```http
  POST /api/scan-file
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `file` | `file` | **Required**. File to be scanned |
| `api_key` | `string` | **Required**. Your Virus Total API Key |

## 2.  Web3Forms API (Secure Form Submissions)

#### Submit a contact form  

```http
  POST /api/submit-form
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. User's name |
| `email`      | `string` | **Required**. User's email |
| `message`      | `string` | **Required**. User's message |

## 3.  Chatbase.io API (AI Chatbot Integration)

#### Send a message to chatbot 

```http
  POST /api/submit-form
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `message`      | `string` | **Required**. User's input message |
| `session_id`      | `string` | **Required**. Unique user session ID |







## Installation & Setup (Running from VS Code)

#### Prerequisites:

Install Visual Studio Code (VS Code).

Install Node.js and npm (for running JavaScript-based modules).

Install Python (if backend scripts require it).

## Running the Frontend

Open the project folder in VS Code.

Open the ```CTI-PROJECT/index.html``` file.

Right-click and select Open with Live Server (Ensure you have the Live Server extension installed in VS Code).

The frontend will open in your default web browser.

The frontend will be hosted locally at http://localhost:3000

## Running the Backend

Navigate to the backend folder:

Install dependencies:

```npm install node```

The backend API will be available at http://localhost:5500


## Deployment

To deploy code security scanner functionality

```bash
  Path - CTI-PROJECT/Functions/Code_Scanner/backend/
```
Start the server : ```node node.js```  

To deploy VirusTotal Scanner functionality

```bash
  Path - Functions/VirusTotalScanner/backend/
```

Start the server : ```node app.js```



## Screenshots

![Login-Signup]([https://raw.githubusercontent.com/username/repo/main/images/your-image.png](https://github.com/OfficialDexter7/CTI-PROJECT/blob/main/assets/images/Picture1.png))


https://github.com/OfficialDexter7/CTI-PROJECT/blob/main/assets/images/Picture1.png


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Feedback

If you have any feedback, please reach out to us at cyberthreatintelligence111@gmail.com



