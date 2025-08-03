# 🌤️ React Weather App

A simple weather application built with **ReactJS** and the **OpenWeatherMap API**, allowing users to search for current weather in any city. It shows temperature, location, humidity, wind speed, and changes icons based on real-time weather conditions.

## 🔗 Live Demo

(https://weather-app-ou79.vercel.app/)

## 📸 Preview

<img width="386" height="683" alt="image" src="https://github.com/user-attachments/assets/c2377d30-fd66-4096-8d3c-23a3775ddb58" />


---

## ⚙️ Features

- 🌍 Search weather by city
- 🌡️ Temperature in Celsius
- 💧 Humidity and 🌬️ Wind Speed details
- 🌦️ Weather-based icons (Clear, Clouds, Rain, etc.)
- ⌨️ Press Enter to trigger search

---

## 🛠️ Tech Stack

- **ReactJS**
- **Vite**
- **CSS
- **OpenWeatherMap API**

---

## 🔧 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# 2. Install dependencies
npm install

# 3. Create a `.env` file in the root and add your API key
VITE_APP_ID=your_api_key_here

# 4. Start the dev server
npm run dev


src/
├── assets/              # Weather icons (PNG files)
├── components/
│   └── Weather.jsx      # Main Weather UI logic
├── App.jsx
├── main.jsx
├── Weather.css
.env


🌐 API Used
OpenWeatherMap API
→ https://openweathermap.org/current

You'll need a free API key. Sign up and paste your key in the .env file like this:

VITE_APP_ID=your_api_key_here
