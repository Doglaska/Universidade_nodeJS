const ApiError = require("./ApiError");

class AlunoInvalidoError extends ApiError{
    constructor(message= "Nome e email sao obrigatorios", statusCode = 400){
        super(message, statusCode);
    }
}

module.exports = AlunoInvalidoError;