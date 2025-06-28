# HEALIX
# 🩺 HEALIX – Real-Time Health Monitoring System

**HEALIX** is a full-stack web application designed to monitor and visualize critical human health metrics in real-time. Built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js), it supports secure, responsive, and scalable health tracking—ideal for individuals and healthcare professionals alike.

## 🚀 Overview

HEALIX leverages sensor data to track vitals such as:

- ❤️ Heart Rate
- 🩸 Blood Pressure
- 🔄 Pulse Rate
- 🔥 Calories Burned

It delivers **real-time visual feedback**, historical recordkeeping, and alerts when abnormal readings are detected.

---

## 🔑 Key Features

- **🔴 Real-time Vital Monitoring**  
  Continuous tracking via integrated IoT sensors (e.g., ESP32, NodeMCU)

- **📊 Data Visualization**  
  Line graphs and charts to monitor trends over time

- **🔐 User Authentication**  
  Secure login and registration system (JWT-based)

- **⚠️ Health Alerts**  
  Automatic warnings when vitals are outside healthy thresholds

- **📁 Data History**  
  Store and view previous health records for analysis

- **📱 Responsive Dashboard**  
  Clean React UI with full responsiveness and cross-device support

---

## 🧰 Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Frontend    | React.js, Redux, Chart.js     |
| Backend     | Node.js, Express.js           |
| Database    | MongoDB                       |
| APIs        | RESTful API (Axios, Fetch)    |
| Auth        | JSON Web Tokens (JWT)         |
| Optional IoT | NodeMCU / ESP32 + Sensors    |
| Deployment  | Heroku / Vercel / Render      |

---

## 📷 Screenshots

> Add your screenshots in a `screenshots/` directory
>
REGISTRATION
![image](https://github.com/user-attachments/assets/7058bd46-3c5b-47d0-8f6d-a97182d9b302)

SIGNIN/LOGIN PAGE
![image](https://github.com/user-attachments/assets/4b52c64b-19f6-4b47-a362-76abde24192c)

HOME
![image](https://github.com/user-attachments/assets/ce967d80-fbe0-4f37-907e-7a148940173e)

DASHBOARD
![image](https://github.com/user-attachments/assets/834a4750-8cee-4075-81c0-3c7927badd48)

HISTORY
![image](https://github.com/user-attachments/assets/8bfdde87-7725-4b9a-a37e-1b974c30c98c)


---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/HEALIX.git
cd HEALIX

# Backend Setup
cd backend
npm install
npm run dev

# Frontend Setup
cd ../frontend
npm install
npm start
