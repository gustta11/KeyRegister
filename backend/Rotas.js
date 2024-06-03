import express from 'express'
const app = express()
import cors from 'cors'
import {getAllProfessores, createProfessores, updateProfessores, deleteProfessores} from './controller/pessoaController.js'

app.use(express.json())
app.use(cors())

app.get('/pessoas', getAllProfessores)
app.post('/professor', createProfessores)
app.put('/pessoas/:id',updateProfessores)
app.delete('/pessoas/:id', deleteProfessores)

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})