const alunos = require("../models/alunoModel");

class AlunoService{
    findMany(){
        return alunos;
    }

    create(aluno){
        const{nome, email, nota1, nota2} = aluno;

        if(!nome || !email || !nota1 || !nota2){
            return null;
        }

        const novoAluno = {
            id: alunos[alunos.length-1].id+1,
            nome, email, nota1, nota2
        }
        
        alunos.push(novoAluno);
        return novoAluno;
    }

    update(id, dados){
        const indexAluno = alunos.findIndex((a) => a.id === parseInt(id));

        if(indedxAluno === -1){
            return null
        }

        alunos[indexAluno] = {
            id: alunos[indexAluno].id,
            nome: dados.nome,
            email: dados.email,
            nota1: dados.nota1,
            nota2: dados.nota2
        }
        
        return alunos[indexAluno]
    }

    patch(id, dados){
        const indexAluno = alunos.findIndex((a) => a.id === parseInt(id));

        if(indexAluno === -1){
            return null
        }

        Object.assign(alunos[indexAluno], dados)

        return alunos[indexAluno];
    }

    delete(id){
        const indexAluno = alunos.findIndex((a) => a.id === parseInt(id));

        if(indexAluno === -1){
            return null;
        }

        const [aluno] = alunos.splice(indexAluno, 1)
        return aluno;
    }
}

module.exports = new AlunoService();