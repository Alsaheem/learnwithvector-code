from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def home():
    response = jsonify({"msg": "Welcome to LearnVithVector api"})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response, 200


@app.route("/health")
def health():
    response = jsonify({"Ready": True})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response, 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
