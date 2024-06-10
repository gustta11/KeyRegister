import connection from "../config/Conecta.js";


export function read(callback){
    connection.query('SELECT * from turmas WHERE ACTIVO_TURMAS = 1', callback)
}
export function create(nome_turma,callback){
    connection.query('INSERT INTO turmas (NOME_TURMA, ACTIVO_TURMAS) VALUES(?,1)', [nome_turma], callback)
}
export function update(nome_turma,id, callback){
    connection.query('UPDATE turmas SET NOME_TURMA = ?, ACTIVO_TURMAS = 1 WHERE COD_TURMA = ?', [nome_turma,id], callback)
}
export function deleteTurms(id, callback){
    connection.query('UPDATE  turmas SET ACTIVO_TURMAS = 0 WHERE COD_TURMA = ?', [id], callback)
}