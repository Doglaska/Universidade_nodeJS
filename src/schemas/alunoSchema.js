const z = require("zod");
const alunoSchema = z.object({
    nome: z.string().trim().min(3, "Nome muito curto."),
    email: z.string().trim().email("E-mail Inválido.")
});

const idParamSchema = z.object({
    id: z.string().regex(/^\d+$/, "ID deve ser númerico")
})

module.exports = {alunoSchema, idParamSchema};