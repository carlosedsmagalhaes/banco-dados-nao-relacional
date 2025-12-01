/* QUESTÃO 2 */
db.leituras.insertMany([
  {
    "carro": "GT-R",
    "sensor": "temperatura_motor",
    "valor": 95.8,
    "data_hora": ISODate("2025-11-30T10:05:00Z")
  },
  {
    "carro": "Mustang",
    "sensor": "pressao_oleo",
    "valor": 65.2,
    "data_hora": ISODate("2025-11-30T10:05:10Z")
  },
  {
    "carro": "GT-R",
    "sensor": "velocidade",
    "valor": 285,
    "data_hora": ISODate("2025-11-30T10:05:25Z")
  }
])

/* QUESTÃO 3 */
db.leituras.find({
  $and: [
    {
      $or: [
        { "sensor": "temperatura_motor" },
        { "sensor": "pressao_oleo" }
      ]
    },
    { "valor": { $gt: 90 } }
  ]
})

/* QUESTÃO 4 */
db.leituras.updateMany(
  { "carro": "GT-R" }, 
  {
    $set: {
      "status_sensor": "verificar" 
    },
    $unset: {
      "codigo_defeito": "" 
    }
  }
)

/* QUESTÃO 5 */
db.leituras.find(
  { "sensor": "velocidade" } 
)
.sort(
  { "data_hora": -1 } 
)
.skip(10) 
.limit(5) 

/* QUESTÃO 6 */
db.leituras.aggregate([
  {
    $match: {
      "sensor": "temperatura_motor" 
    }
  },
  {
    $group: {
      _id: "$carro", 
      media_temperatura: { $avg: "$valor" } 
    }
  },
  {
    $sort: {
      "media_temperatura": -1 
    }
  }
])

/* QUESTÃO 9 */
db.createUser({
  user: "engenheiroCorrida",
  pwd: "123", 
  roles: [
    { role: "read", db: "revisaoP3" } 
  ]
})

/* QUESTÃO 10 */
/* "C:\Program Files\MongoDB\Server\8.0\bin\mongodump.exe" --db revisaoP3 --out C:\Estudos\banco-dados-nao-relacional\revisaoP3\bkp */

