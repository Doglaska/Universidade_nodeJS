const ApiError = require("./ApiError");

class AlunoNaoEncontradoError extends ApiError{
    constructor (message = "Aluno nbao encontrado", statusCode = 404){
        super(message, statusCode);
    }
}

module.exports = AlunoNaoEncontradoError;