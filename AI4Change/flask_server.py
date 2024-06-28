from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModel
import torch
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/data', methods=['GET'])
def get_data():
    data = {"message": "Hello from Flask!"}
    return jsonify(data)

@app.route('/data', methods=['POST'])
def post_data():
    received_data = request.json
    return jsonify({"received": received_data}), 201


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)