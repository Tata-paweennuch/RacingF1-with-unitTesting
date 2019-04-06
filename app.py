import os.path
import random
from flask import Flask, jsonify, json, render_template, request

SRC_DIR = os.path.abspath(os.path.dirname(__file__))
DATA_DIR = os.path.join(SRC_DIR, 'data')

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    # return render_template("index.html")          #***Using render_template('index.html') will cause Flask to interpret your angular templates as jinja templates
    # Function used internally to send static files from the static folder to the browser.
    return app.send_static_file("index.html")

@app.route('/api/standings.json', methods=['GET'])
def standings():
    json_url = os.path.join(DATA_DIR, 'drivers.json')
    data = json.load(open(json_url, encoding='utf-8'))
    
    # if request.method == 'PUT':
    #     randomDriver = random.choice(data)
    #     print(randomDriver)
    #     randomDriver["points"] = randomDriver["points"] +1
    #     return randomDriver

    # if request.method == 'GET':
    return jsonify(data)
        # return {'status': 'success', 'data': jsonify(data)}, 200


"""     with open('./data/drivers.json', 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return json.dumps(file_data)
 """    # return jsonify({"standings": "hey hey"})


@app.route('/api/teams.json', methods=['GET'])
def teams():
    json_url = os.path.join(DATA_DIR, 'teams.json')
    data = json.load(open(json_url))
    return jsonify(data)


@app.route('/api/team/<int:team_id>.json', methods=['GET'])
def team_details(team_id):
    with open('./data/teams.json', 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    try:
        data = next(item for item in file_data if item["id"] == team_id)
        return jsonify(data)
    except Exception as error:
        return str(error)
    # return jsonify(file_data[team_id-1])


if __name__ == '__main__':
    app.run(debug=True, port=5000)



# @app.route('/api/standings.json', methods=['GET'])
# def standings():
#     json_url = os.path.join(DATA_DIR, 'drivers.json')
#     data = json.load(open(json_url))
#     return jsonify(data)
