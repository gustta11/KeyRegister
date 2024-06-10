import express from 'express'
const app = express()
import cors from 'cors'
import {getAllProfessores, createProfessores, updateProfessores, deleteProfessores} from './controller/professorController.js'
import {getAllSalas, createSalas, updateSalas, deleteSalas} from './controller/salasController.js'
import {getAllTurmas, createTurmas, updateTurmas, deleteTurmas} from './controller/turmasController.js'
import {getAllDisciplinas, createDisciplinas, updateDisciplinas, deleteDisciplinas} from './controller/disciplinasController.js'

app.use(express.json())
app.use(cors())

app.get('/professores', getAllProfessores)
app.post('/professores', createProfessores)
app.put('/professores/:id',updateProfessores)
app.delete('/professores/:id', deleteProfessores)

app.get('/salas', getAllSalas)
app.post('/salas', createSalas)
app.put('/salas/:id',updateSalas)
app.delete('/salas/:id', deleteSalas)

app.get('/turmas', getAllTurmas)
app.post('/turmas', createTurmas)
app.put('/turmas/:id',updateTurmas)
app.delete('/turmas/:id', deleteTurmas)

app.get('/disciplinas', getAllDisciplinas)
app.post('/disciplinas', createDisciplinas)
app.put('/disciplinas/:id',updateDisciplinas)
app.delete('/disciplinas/:id', deleteDisciplinas)

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})