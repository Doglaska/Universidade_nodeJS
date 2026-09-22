const prisma = require("../databases/prisma");
const AlunoInvalidoError = require("../errors/AlunoInvalidoError");
const PaginacaoInvalidaError = require("../errors/PaginanacaoInvalidaError");

class AlunoService{
    async findMany(page, pageSize){
        page = Number(page);
        pageSize = Number(pageSize);
        if(!page || page < 1 || !pageSize || pageSize < 1){
            throw new PaginacaoInvalidaError();
        }
        const alunos = await prisma.aluno.findMany({
            skip: (page -1)*pageSize,
            take: Number(pageSize)
        })
        return alunos;
    }

    async create(aluno){
        const {nome, email} = aluno;
        if(!nome || !email){
            throw new AlunoInvalidoError();
        }
        //create = insert
        //update = update
        //delete = delete
        //findMany = select * from
        const novoAluno = await prisma.aluno.create({data:aluno});

        return novoAluno;
    }
}

module.exports = new AlunoService();


/** const alunos = require("../models/alunoModel");

class AlunoService{
    findMany(){
        return alunos;
    }

    create(aluno){
        const{nome, email, nota1, nota2} = aluno;

        if(!nome || !email || nota1 === undefined || nota2 === undefined){
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

module.exports = new AlunoService(); **/