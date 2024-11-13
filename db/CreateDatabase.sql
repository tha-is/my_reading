USE mybooks-db;

CREATE TABLE Livros (

    id interger not null auto_increment,
    title varchar(100),
    author varchar(100),
    category varchar(100),
    progress varchar(100),
    PRIMARY KEY (id)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

INSERT INTO Livros (title, author, progress) VALUES('Um homem de sorte', 'Nicholas Sparks', 'Romance', 'Lido');
INSERT INTO Livros (title, author, progress) VALUES('Brida', 'Nicholas Sparks', 'Romance','Lido');
INSERT INTO Livros (title, author, progress) VALUES('Corte de Rosas e Espinhos', 'Sarah J. Maas', 'Romance','Lido');