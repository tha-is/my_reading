import mysql.connector
from flask import Flask, make_response, jsonify, request
from bd import Livros

mydb = mysql.connector.connect (
    host='localhost',
    user='root',
    database='Livros'
)

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False

@app.route('/livros', methods=['GET'])
def get_livros():

    my_cursor = mydb.cursor()
    my_cursor.execute('SELECT * FROM Livros')
    
    return make_response(
        jsonify(
            mensagem='Lista de livros',
            dados=Livros
        )
    )

@app.route('/livros', methods=['POST'])
def create_livros():
    livro = request.json
    Livros.append(livro)
    return make_response(
        jsonify(
            mensagem='Novo livro adc...',
            dados=Livros
        )
    )

app.run()