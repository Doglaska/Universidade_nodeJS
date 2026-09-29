const express = require("express");
const alunoController = require("../controllers/AlunoController");
const validarAluno = require("../middlewares/validarAluno");

const router = express.Router();

router.get("/", alunoController.findMany);
router.get("/:id", alunoController.findOne);
router.post("/", validarAluno, alunoController.create);
router.put("/:id", alunoController.update);
// router.patch("/:id", alunoController.patch);
router.delete("/:id", alunoController.delete);

module.exports = router;