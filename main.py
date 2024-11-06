from flask import Flask, make_response, jsonify, request
from bd import Livros

app = Flask(__name__)

@app.route('/livros', methods=['GET'])
def get_livros():
    return make_response(
        jsonify(Livros)
    )

@app.route('/livros', methods=['POST'])
def create_livros():
    livro = request.json
    return livro

app.run()