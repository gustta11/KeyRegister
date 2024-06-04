import connection from "../config/Conecta.js";


export function read(callback){
    connection.query('SELECT * from disciplinas WHERE ACTIVO_DISCIPLINAS = 1', callback)
}
export function create(nome_disciplina,callback){
    connection.query('INSERT INTO disciplinas (NOME_DISCIPLINA, ACTIVO_DISCIPLINAS) VALUES(?,1)', [nome_disciplina], callback)
}
export function update(nome_disciplina,id, callback){
    connection.query('UPDATE disciplinas SET NOME_DISCIPLINA = ?, ACTIVO_DISCIPLINAS = 1 WHERE COD_DISCIPLINA = ?', [nome_disciplina,id], callback)
}
export function deleteDiscip(id, callback){
    connection.query('UPDATE  disciplinas SET ACTIVO_DISCIPLINAS = 0 WHERE COD_DISCIPLINA = ?', [id], callback)
}