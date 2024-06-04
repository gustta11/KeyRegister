import {read, create, update, deleteProf} from '../model/professorModel.js'

export async function createProfessores(req, res){
    const{nome, matricula} = req.body
    console.log('Dados recebidos do frontend:', {nome,matricula})

    create(nome,matricula,(err, result) =>{
        if(err){
           res.status(500).json({error:err.message})
           return
        }
        res.status(201).json({mensagem: 'Professor registrado com sucesso!'})
    })
}

export async function getAllProfessores(req, res){
    read((err, professores) => {
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.json(professores)
    })
}

export async function updateProfessores(req,res){
    const{id} = req.params
    console.log('Dados recebidos do front', {id})
    const {nome,matricula} = req.body
    update(nome,matricula,id, (err, result) =>{
        if(err){
            res.status(500).json({error:err.message});
            return
        }
        res.send('Pessoa atualizada com sucesso')
    })
}

export async function deleteProfessores(req,res){
    const {id} = req.params
    deleteProf(id,(err,result) =>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.send('Professor excluído com sucesso')
    })
}