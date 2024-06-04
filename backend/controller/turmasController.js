import {read, create, update, deleteTurms} from '../model/turmasModel.js'

export async function createTurmas(req, res){
    const{nome_turma, turno} = req.body
    console.log('Dados recebidos do frontend:', {nome_turma, turno})

    create(nome_turma,turno,(err, result) =>{
        if(err){
           res.status(500).json({error:err.message})
           return
        }
        res.status(201).json({mensagem: 'Turma registrada com sucesso!'})
    })
}

export async function getAllTurmas(req, res){
    read((err, turmas) => {
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.json(turmas)
    })
}

export async function updateTurmas(req,res){
    const{id} = req.params
    console.log('Dados recebidos do front', {id})
    const {nome_turma,turno} = req.body
    update(nome_turma,turno,id, (err, result) =>{
        if(err){
            res.status(500).json({error:err.message});
            return
        }
        res.send('Turma atualizada com sucesso')
    })
}

export async function deleteTurmas(req,res){
    const {id} = req.params
    deleteTurms(id,(err,result) =>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.send('Turma excluída com sucesso')
    })
}