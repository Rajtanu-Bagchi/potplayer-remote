from flask import Flask, render_template
import pyautogui
import threading
import os
import signal


app = Flask(__name__)
PC_IP = "0.0.0.0"   # Listen on all network interface
PORT = 5000


@app.route('/')
def index():
    return render_template('index.html')    # Load the HTML file


@app.route('/playpause')
def playpause():
    pyautogui.press('space')
    return 'OK'


@app.route('/volup')
def volup():
    pyautogui.press('up')
    return 'OK'


@app.route('/voldown')
def voldown():
    pyautogui.press('down')
    return 'OK'


@app.route('/seekback')
def seekback():
    pyautogui.press('left')
    return 'OK'


@app.route('/seekforward')
def seekforward():
    pyautogui.press('right')
    return 'OK'


@app.route('/fullscreen')
def fullscreen():
    pyautogui.hotkey('ctrl', 'enter')  # PotPlayer's default fullscreen shortcut
    return 'OK'


@app.route('/mute')
def mute():
    pyautogui.press('m')  # Mute shortcut
    return 'OK'


@app.route('/shutdown')
def shutdown():
    print("Shutting Down Server...")
    os.kill(os.getpid(), signal.SIGINT)
    return "Server is Shutting Down..."


@app.route('/status')
def status():
    return 'OK', 200


def run_app():
    app.run(host=PC_IP, port=PORT, ssl_context=('cert.pem', 'key.pem'))


if __name__ == "__main__":
    print(f"Server running! Access from phone at: https://[YOUR_PC_IP]:{PORT}")
    print(f"To stop the server, visit: https://[YOUR_PC_IP]:{PORT}/shutdown")
    threading.Thread(target=run_app).start()