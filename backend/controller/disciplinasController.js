import {read, create, update, deleteDiscip} from '../model/disciplinasModel.js'

export async function createDisciplinas(req, res){
    const{nome_disciplina} = req.body
    console.log('Dados recebidos do frontend:', {nome,matricula})

    create(nome_disciplina,(err, result) =>{
        if(err){
           res.status(500).json({error:err.message})
           return
        }
        res.status(201).json({mensagem: 'Disciplina registrada com sucesso!'})
    })
}

export async function getAllDisciplinas(req, res){
    read((err, disciplinas) => {
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.json(disciplinas)
    })
}

export async function updateDisciplinas(req,res){
    const{id} = req.params
    console.log('Dados recebidos do front', {id})
    const {nome_disciplinas} = req.body
    update(nome_disciplinas,id, (err, result) =>{
        if(err){
            res.status(500).json({error:err.message});
            return
        }
        res.send('Disciplina atualizada com sucesso')
    })
}

export async function deleteDisciplinas(req,res){
    const {id} = req.params
    deleteDiscip(id,(err,result) =>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.send('Disciplina excluído com sucesso')
    })
}