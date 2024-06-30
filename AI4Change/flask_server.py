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
humidity_data = ujson.load(open('data/relative_humidity.json'))
lat_coords = np.load("data/lat_coords.npy")
lon_coords = np.load("data/lon_coords.npy")

@app.route('/data', methods=['POST'])
def process_data():
    coords = eval(request.form["LonLatData"])

    lat_index = (np.abs(lat_coords - coords[0])).argmin()
    lon_index = (np.abs(lon_coords - coords[1])).argmin()

    search = f"{lat_coords[lat_index]}_{lon_coords[lon_index]}"

    data = {
        "Water Content" : wtr_content_data[search],
        "Air Temperature" : air_temps_data[search],
        "Sea Level" : [x / -10000 for x in sea_level_data[search]],
        "Surface Pressure" : surface_pressure_data[search],
        "U Wind" : u_wind_data[search],
        "Tropopause Temperature" : tropopause_data[search],
        "Relative Humidity" : humidity_data[search],
    }

    return jsonify(data)


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)