from flask import Flask, request, render_template, url_for
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/gifts', methods=['GET', 'POST'])
def gifts():
    return render_template('gifts.html', index_url=url_for('index'))

@app.route('/SpeedUpsCalc', methods=['GET', 'POST'])
def SpeedUpsCalc():
    return render_template('SpeedUpsCalc.html',index_url=url_for('SpeedUpsCalc'))




@app.route('/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST' and 'file' in request.files and 'cdkey' in request.form:
        url = "https://lordsmobile.igg.com/project/gifts/ajax.php?game_id="
        payload = {
            "ac": "get_gifts",
            "type": "1",
            "iggid": "",
            "charname": "",
            "cdkey": "",
            "lang": "fr"
        }

        file = request.files['file']
        cdkey = request.form['cdkey']
        payload["cdkey"] = cdkey

        for line in file:
            payload["charname"] = line.strip()
            response = requests.post(url, data=payload)
            print(response.status_code)

        return 'File uploaded successfully'
    else:
        return 'Invalid request'


