from flask import Flask, request, jsonify
import json
from flask_cors import CORS
import ujson
import numpy as np

app = Flask(__name__)

CORS(app)

wtr_content_data = ujson.load(open('data/wtr_content.json'))
air_temps_data = ujson.load(open('data/air_temps.json'))
sea_level_data = ujson.load(open('data/sea_level_pressure.json'))
surface_pressure_data = ujson.load(open('data/surface_pressure.json'))
u_wind_data = ujson.load(open('data/u_wind.json'))
tropopause_data = ujson.load(open('data/tropopause_temp.json'))
lat_coords = np.load("data/lat_coords.npy")
lon_coords = np.load("data/lon_coords.npy")


@app.route('/data', methods=['GET'])
def get_data():
    print(request.form)
    return jsonify({"hi" : wtr_content_data["90.0_25.0"][0]})


@app.route('/data', methods=['POST'])
def process_data():
    print(eval(request.form["LonLatData"])[0])
    return jsonify({"your name is" : request.form["LonLatData"]})


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)