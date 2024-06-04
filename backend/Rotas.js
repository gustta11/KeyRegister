import express from 'express'
const app = express()
import cors from 'cors'
import {getAllProfessores, createProfessores, updateProfessores, deleteProfessores} from './controller/professorController.js'
import {getAllSalas, createSalas, updateSalas, deleteSalas} from './controller/salasController.js'

app.use(express.json())
app.use(cors())

app.get('/professor', getAllProfessores)
app.post('/professor', createProfessores)
app.put('/professor/:id',updateProfessores)
app.delete('/professor/:id', deleteProfessores)

app.get('/salas', getAllSalas)
app.post('/salas', createSalas)
app.put('/salas/:id',updateSalas)
app.delete('/salas/:id', deleteSalas)

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})