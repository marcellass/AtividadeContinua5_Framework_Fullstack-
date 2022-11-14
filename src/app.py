import os
from flask_cors import CORS
from flask import Flask, request, jsonify
 
app = Flask(__name__)
CORS(app)


@app.route('/cadastro', methods=['POST'])
def cadastro():
    json = request.get_json()
    nome = json['txtNome']
    return jsonify(nome=nome.upper())


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8888))
    app.run(host='0.0.0.0', port=port)