/* EXERCÍCIO 01 */
use biblioteca
db.createUser({
  user: "devAluno",
  pwd: "123456",
  roles: [{ role: "read", db: "biblioteca" }]
})

db.livros.insertMany([
  {
    "titulo": "Introdução ao MongoDB",
    "autor": "João da Silva",
    "ano_publicacao": 2021,
    "genero": "Tecnologia"
  },
  {
    "titulo": "Estruturas de Dados com JavaScript",
    "autor": "Maria Oliveira",
    "ano_publicacao": 2023,
    "genero": "Programação"
  }
])

/* EXERCÍCIO 02 */
"mongodb://devAluno:123456@localhost:27017/biblioteca"

/* EXERCÍCIO 03 */
"C:\Program Files\MongoDB\Server\8.0\bin\mongoexport.exe" --db=biblioteca --collection=livros --out="C:/Estudos/banco-dados-nao-relacional/user_devAluno/docs/livros.json"

/* EXERCÍCIO 04 */
use biblioteca
db.livros.drop()
"C:\Program Files\MongoDB\Server\8.0\bin\mongoimport.exe" --db=biblioteca --collection=livros --file="C:/Estudos/banco-dados-nao-relacional/user_devAluno/docs/livros.json"

/* EXERCÍCIO 05 */
/* EXECUTAR A APLICAÇÃO:
 cd user_devAluno
 npm install
 npm run dev
 */


