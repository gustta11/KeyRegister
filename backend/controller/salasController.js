import {read, create, update, deleteSal} from '../model/pessoaModel.js'

export async function createSalas(req, res){
    const{nome_sala} = req.body
    console.log('Dados recebidos do frontend:', {nome_sala})

    create(nome_sala,(err, result) =>{
        if(err){
           res.status(500).json({error:err.message})
           return
        }
        res.status(201).json({mensagem: 'Professor registrado com sucesso!'})
    })
}

export async function getAllSalas(req, res){
    read((err, salas) => {
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.json(salas)
    })
}

export async function updateSalas(req,res){
    const{id} = req.params
    console.log('Dados recebidos do front', {id})
    const {nome_sala} = req.body
    update(nome_sala,id, (err, result) =>{
        if(err){
            res.status(500).json({error:err.message});
            return
        }
        res.send('Sala atualizada com sucesso')
    })
}

export async function deleteSalas(req,res){
    const {id} = req.params
    deleteSal(id,(err,result) =>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.send('Sala excluída com sucesso')
    })
}