const AlunoService = require("../services/AlunoService")

class AlunoController{
    async findMany(req, res){
        try{
            let {page, pageSize} = req.query
            page ||= 1;
            pageSize ||= 10;
    
            const alunos = await AlunoService.findMany(page, pageSize);
            return res.status(200).json({alunos});
        }catch(e){
            return res.status(e.statusCode).json({error: e.message});
        }
    }

    async create(req, res){
        try{
            const aluno = await AlunoService.create(req.body);
            // if(!aluno){
            //     return res.status(400).json({error: "Campos nome, email, nota1 e nota2 são obrigatorios"});
            // }
            return res.status(201).json({aluno});
        }catch(e){
            return res.status(e.statusCode).json({error: e.message});
        }
    }

//     update(req, res) {
//         const { id } = req.params;
//         const aluno = AlunoService.update(id, req.body);

//         if (!aluno) {
//             return res.status(404).json({error: "Aluno não encontrado"});
//         }

//         return res.status(200).json({aluno});
//     }

//     patch(req, res) {
//         const { id } = req.params;
//         const aluno = AlunoService.patch(id, req.body);

//         if (!aluno) {
//             return res.status(404).json({error: "Aluno não encontrado"});
//         }

//         return res.status(200).json({aluno});
//     }

//     delete(req, res){
//         const {id} = req.params;
//         const aluno = AlunoService.delete(id);

//         if(!aluno){
//             return res.status(404).json({error: "Aluno não encontrado"});
//         }
//         return res.status(204).end();
//     }
}

module.exports = new AlunoController;