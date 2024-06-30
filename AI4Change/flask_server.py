from flask import Flask, request, jsonify
import json
from flask_cors import CORS
import ujson

app = Flask(__name__)

CORS(app)

wtr_content_data = ujson.load(open('data/wtr_content.json'))
air_temps_data = ujson.load(open('data/wtr_content.json'))
wtr_content_data = ujson.load(open('data/wtr_content.json'))
wtr_content_data = ujson.load(open('data/wtr_content.json'))
wtr_content_data = ujson.load(open('data/wtr_content.json'))
wtr_content_data = ujson.load(open('data/wtr_content.json'))


@app.route('/data', methods=['GET'])
def get_data():
    
    return jsonify({"hi" : wtr_content_data["90.0_25.0"][0]})

@app.route('/data', methods=['POST'])
def post_data():
    received_data = request.json
    return jsonify({"received": received_data}), 201


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)