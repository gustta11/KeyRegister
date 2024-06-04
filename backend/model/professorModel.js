import connection from "../config/Conecta.js";


export function read(callback){
    connection.query('SELECT * from professores where ACTIVO_PROFESSORES = 1', callback)
}
export function create(nome,matricula,callback){
    connection.query('INSERT INTO professores (NOME, MATRICULA, ACTIVO_PROFESSORES) VALUES(?,?,1)', [nome,matricula], callback)
}
export function update(nome,matricula, callback){
    connection.query('UPDATE professores SET NOME = ?, MATRICULA = ? , ACTIVO_PROFESSORES = 1 WHERE id = ?', [nome,matricula], callback)
}
export function deleteProf(id, callback){
    connection.query('UPDATE  professores SET ACTIVO_PROFESSORES = 0 WHERE id = ?', [id], callback)
}