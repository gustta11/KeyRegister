import connection from "../config/Conecta.js";


export function read(callback){
    connection.query('SELECT * from salas where ACTIVO_SALAS = 1', callback)
}
export function create(nome_sala,callback){
    connection.query('INSERT INTO salas (NOME_SALA, ACTIVO_SALAS) VALUES(?,1)', [nome_sala], callback)
}
export function update(nome_sala,id, callback){
    connection.query('UPDATE salas SET NOME_SALA = ?, ACTIVO_SALAS = 1 WHERE COD_SALAS = ?', [nome_sala,id], callback)
}
export function deleteSal(id, callback){
    connection.query('UPDATE  salas SET ACTIVO_SALAS = 0 WHERE id = ?', [id], callback)
}