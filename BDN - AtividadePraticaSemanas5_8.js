/* INSERTS */
use rede_games; 
db.produtos.insertMany([ 
{ nome: "Mouse Gamer X7", categoria: "Periféricos", preco: 250, estoque: 15 }, 
{ nome: "Teclado Mecânico K500", categoria: "Periféricos", preco: 450, estoque: 8 }, 
{ nome: "Monitor UltraWide", categoria: "Monitores", preco: 1800, estoque: 5 }, 
{ nome: "Console Zeta", categoria: "Consoles", preco: 3200, estoque: 3 }, 
{ nome: "Headset ProSound", categoria: "Áudio", preco: 600, estoque: 12 } 
]); 
db.clientes.insertMany([ 
{ nome: "Lucas", cidade: "São Paulo", idade: 25 }, 
{ nome: "Renan", cidade: "Fortaleza", idade: 30 }, 
{ nome: "Ana", cidade: "Rio de Janeiro", idade: 22 }, 
{ nome: "Marina", cidade: "Curitiba", idade: 28 } 
]); 
db.vendas.insertMany([ 
{ cliente: "Lucas", produto: "Mouse Gamer X7", quantidade: 2, data: ISODate("2025-05-01") }, 
{ cliente: "Renan", produto: "Console Zeta", quantidade: 1, data: ISODate("2025-05-02") }, 
{ cliente: "Ana", produto: "Teclado Mecânico K500", quantidade: 3, data: ISODate("2025-05-03") }, 
{ cliente: "Lucas", produto: "Headset ProSound", quantidade: 1, data: ISODate("2025-05-04") } 
]); 

/* EXERCÍCIO 01 */
db.produtos.find({$and: [{preco: {$gt: 300}}, {estoque: {$lt: 10}}, {categoria: "Periféricos"}]});

/* EXERCÍCIO 02 */
db.produtos.updateMany({}, { $set: { desconto: 0.00 } });
db.produtos.updateOne({nome: "Monitor UltraWide"},{$set: {desconto: 10}});
db.produtos.find({}, {_id: 0, nome: 1, desconto: 1});

/* EXERCÍCIO 03 */
db.produtos.updateMany({categoria: "Áudio"}, {$inc: {estoque: 3}});
db.produtos.find({}, {_id: 0, nome: 1, categoria:1estoque: 1});

/* EXERCÍCIO 04 */
db.produtos.replaceOne({ nome: "Console Zeta" },{ nome: "Console Zeta", preco: 3500.00, garantia: "2 anos", categoria: "Consoles", estoque: });
db.produtos.find({nome: "Console Zeta"});

/* EXERCÍCIO 05 */
db.produtos.deleteOne({estoque: {$lt: 5}});
db.produtos.find({estoque: {$lt: 5}});

/* EXERCÍCIO 06 */
db.produtos.aggregate([{$group: {_id: "$categoria",total_produtos: { $sum: 1 }}}]);

/* EXERCÍCIO 07 */
db.produtos.aggregate([{$group: {_id: "$categoria",preco_medio: { $avg: "$preco" }}},{$sort: { preco_medio: -1 }}]);

/* EXERCÍCIO 08 */
db.produtos.find().skip(2).limit(2);

/* EXERCÍCIO 09 */
db.produtos.createIndex({ categoria: 1 });
db.produtos.getIndexes();
db.produtos.find({ categoria: "Consoles" }).explain("executionStats");






