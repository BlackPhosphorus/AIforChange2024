from flask import Flask, request, jsonify
import json
from flask_cors import CORS
import ujson

app = Flask(__name__)

CORS(app)

wtr_content_data = ujson.load(open('data/wtr_content.json'))
air_temps_data = ujson.load(open('data/air_temps.json'))
sea_level_data = ujson.load(open('data/sea_level_pressure.json'))
surface_pressure_data = ujson.load(open('data/surface_pressure.json'))
u_wind_data = ujson.load(open('data/u_wind.json'))
tropopause_data = ujson.load(open('data/tropopause_temp.json'))


@app.route('/data', methods=['GET'])
def get_data():
    return jsonify({"hi" : wtr_content_data["90.0_25.0"][0]})


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)