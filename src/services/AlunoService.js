const prisma = require("../databases/prisma");
const AlunoInvalidoError = require("../errors/AlunoInvalidoError");
const PaginacaoInvalidaError = require("../errors/PaginanacaoInvalidaError");
const AlunoNaoEncontradoError = require("../errors/AlunoNaoEncontradoError");

class AlunoService{
    async findMany(page, pageSize, orderBy = "id", order = "asc"){
        page = Number(page);
        pageSize = Number(pageSize);
        if(!page || page < 1 || !pageSize || pageSize < 1){
            throw new PaginacaoInvalidaError();
        }

        const direcaoOrdem = (order === "asc" || order === "desc") ? order : "asc";

        const alunos = await prisma.aluno.findMany({
            skip: (page -1)*pageSize,
            take: pageSize, orderBy: {[orderBy]: direcaoOrdem}
        })

        const total= await prisma.aluno.count();
        return {alunos, total};
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

    async findOne(id){
        const aluno = await prisma.aluno.findUnique({
            where:{ id: Number(id) }
        })
        if(!aluno){
            throw new AlunoNaoEncontradoError();
        }
        return aluno;
    }

    async update(id, dados){
        const idNumero = parseInt(id);

        const alunoExistente = await prisma.aluno.findUnique({
            where: {id: idNumero}
        });

        //O método AlunoNaoEncontradoError pode ser reutilizado por ser a mesma regra de negócio do findUnique.
        if(!alunoExistente){
            throw new AlunoNaoEncontradoError();
        }

        //O AlunoInvalidoError é reutilizado quando o campo vem vazio, dando o erro de bad request 400.
        if (!dados || Object.keys(dados).length === 0) {
            throw new AlunoInvalidoError("Nenhum dado válido fornecido para atualização");
        }

        const alunoAtualizado = await prisma.aluno.update({
            where: { id: idNumero },
            data: dados
        });

        return alunoAtualizado;
    }

    /**patch(id, dados){
        const indexAluno = alunos.findIndex((a) => a.id === parseInt(id));

        if(indexAluno === -1){
            return null
        }

        Object.assign(alunos[indexAluno], dados)

        return alunos[indexAluno];
    }**/

    async delete(id){
        const idNumero = parseInt(id);

        const alunoExistente = await prisma.aluno.findUnique({
            where: {id: idNumero}
        })

        if(!alunoExistente){
            throw new AlunoNaoEncontradoError();
        }

        const alunoDeletado = await prisma.aluno.delete({
            where: {id: idNumero}
        })
        return alunoDeletado;
    }
}

module.exports = new AlunoService();