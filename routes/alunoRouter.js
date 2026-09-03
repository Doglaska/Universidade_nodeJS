const express = require("express");
const alunos = require("../models/alunoModel");

const router = express.Router();

router.get("/alunos", (req, res) => {
    return res.status(200).json({alunos});
})

router.post("/alunos", (req, res) =>{
    const {nome, email, nota1, nota2} = req.body;

    if(!nome || !email || !nota1 || !nota2){
        return response.status(400).json({error:"Campos nome, email, nota1 e nota2 são obrigatórios"});
    }

    const aluno = {
        id: alunos[alunos.lenght -1].id + 1,
        nome, email, nota1, nota2
    }
    alunos.push(aluno);
    return res.status(201).json({aluno});
});

router.delete("/alunos/:id", (req, res) => {
    const {id} = req.params;
    const indexAluno = alunos.findIndex((a) => a.id === parseInt(id));

    if(indexAluno === -1){
        return res.status(404).json({error: "Aluno não encontrado"});
    }

    alunos.splice(indexAluno, 1)
    return res.status(204).end();
})

module.exports = router;