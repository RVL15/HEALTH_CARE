# 💙 MediMind AI Health Companion

MediMind AI is a premium, state-of-the-art AI-powered Health Companion web application designed to help users log daily wellness habits, calculate body mass indices, scan physical symptoms, and converse with an empathetic health assistant. 

Inspired by Apple Health, Google Fit, and ChatGPT, the application features a modern glassmorphic UI, fluent dark/light modes, and real-time Server-Sent Events (SSE) AI completions.

---

## 🚀 Key Features

*   **Premium Landing Page**: A responsive, bento-grid showcase with micro-animations highlighting the capabilities of the wellness suite.
*   **AI Health Chat**: A full-height ChatGPT-like streaming chat experience. It uses the ultra-fast `llama-3.1-8b-instant` Groq API model.
    *   *Instant First-Token*: First token displays under one second.
    *   *Prompt Compression*: Slices conversation histories to the last 5 messages, optimizing token payloads.
    *   *Input Focus Refs*: Keyboard focus automatically returns to the text box upon message submissions or suggestion clicks.
*   **Interactive Symptom Checker**: Select categories and physical discomforts, specify duration and severity parameters, and obtain immediate AI-generated reports mapping possible causes, general precautions, dietary advice, activity suggestions, and clinical warning thresholds.
*   **Health Dashboard**:
    *   *Interactive BMI Calculator*: Forms for Height and Weight inputs calculate indices, display colored status bars, position gauge pins, and save parameters in state/local storage.
    *   *Water Intake Cup*: Fills visually, tracks progress, and triggers confetti celebration once daily targets are reached.
    *   *Sleep Cycle Logger*: Range sliders track sleep duration and rating qualities.
    *   *Aggregated Health Score*: Computes a circular summary rating (0–100) based on active hydration progress, sleep sufficiency, and BMI ranges.
    *   *Tailored AI Wellness Tip*: Communicates with the backend Llama model to offer wellness recommendations matching your exact logged dashboard stats.

---

## 🛡️ Medical Safety & Privacy Guardrails

*   **Unrelated Inquiry Rejection**: The assistant will politely refuse questions unrelated to health, medicine, exercises, sleep, nutrition, or daily lifestyle habits.
*   **Emergency Interventions**: Detects severe symptom alerts and immediately warns users to contact local emergency services (911/ER).
*   **Clinical Consult Thresholds**: Symptom check reports suggest monitor-at-home versus seek-physician thresholds.
*   **Clinical Disclaimer**: Appends the mandatory medical disclaimer warning: *"This AI provides general wellness information and is not a substitute for professional medical advice."*
*   **Secure Backend Keys**: The browser never handles the Groq API Key. The browser issues calls to `/api/chat` and `/api/analyze-symptoms` backend endpoints, keeping credentials safe inside the `.env` file of the Node.js server.

---

## 🛠️ Technology Stack

*   **Frontend**: React (v18), Vite, React Router, Tailwind CSS, Framer Motion, Lucide icons, Canvas-Confetti.
*   **Backend**: Node.js, Express, Cors, Dotenv, Groq-SDK.
*   **Model**: Groq `llama-3.1-8b-instant`.

---

## ⚙️ Installation & Running Guide

### 1. Prerequisite API Key
Obtain a free Groq API key from the [Groq Console](https://console.groq.com/).

### 2. Configure Environment Variables
Create a file named `.env` in the project root directory (a template is available as [.env](file:///c:/Users/Admin/Desktop/PROJECTS/lenovo_app/.env)):
```env
GROQ_API_KEY=gsk_your_groq_api_key_here
PORT=5000
```

### 3. Install Dependencies
Open your command terminal in the project directory and run:
```bash
npm install
```

### 4. Boot Concurrent Development Server
To start both the Express backend (port 5000) and Vite frontend (port 3000) simultaneously under a single unified process, run:
```bash
npm run dev
```

Visit `http://localhost:3000` in your web browser.

---

## 🩺 Medical Disclaimer
MediMind AI is an interactive chatbot and lifestyle routine assistant. All assessments, results, and conversations are for informational and general educational purposes. They are not clinical diagnoses, treatments, or prescriptions. Always consult a certified healthcare professional or doctor for medical decisions.
