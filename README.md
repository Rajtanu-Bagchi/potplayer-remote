# PotPlayer Remote 🎮📺

Control your PotPlayer from your phone! No more interruptions while watching anime, movies, or web series — stay relaxed and in control! 🛋️


## 🎯 Features

✅ Play/Pause
✅ Seek Forward / Backward
✅ Volume Up / Down
✅ Mute/Unmute
✅ Toggle Fullscreen


## How It Works

1. Run the Python server on your PC.
2. Open the provided URL on your phone.
3. Control PotPlayer directly from your phone browser.


## 🛠️ Setup Instructions

### 1️⃣ Install Python

1. Download and install Python from [python.org](https://www.python.org/).
2. Make sure to check "Add Python to PATH" during installation.

### 2️⃣ Install Dependencies

- Run ***install-requirements.bat*** to install the necessary Python modules.

### 3️⃣ Install Certificate

1. Since the app uses HTTPS, you need to install the provided ***cert.pem*** file.
2. Follow the instructions in [CERTIFICATE_SETUP.md](CERTIFICATE_SETUP.md) to install ***cert.pem***.

### 4️⃣ Start the Server

1. Open PotPlayer and pause your video.
2. Run ***start.bat*** to start the server.
3. The server console will display a URL (e.g., *https://192.168.x.x:5000*).

### 5️⃣ Use the App

1. Open the URL on your Android device.
2. Add the app to your home screen for quick access. *(Optional but Recommended)*
    - Adding the app to your home screen saves you from typing the URL every time.
3. Switch back to PotPlayer, ensuring it is the **active window**.
4. Enjoy full remote control! 🎉

### 6️⃣ Shutdown the Server

- Use the **Shutdown Server** button in the WebApp to stop the server when you're done.

## 📌 Notes

- Your PC and phone must be on the same WiFi network for this to work.
- The PotPlayer window must remain active (*active window*) while using the controls.