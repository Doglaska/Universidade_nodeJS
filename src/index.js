require('dotenv/config');
const express = require("express");
const alunoRouter = require("./routes/alunoRouter");

const app = express();
app.use(express.json());

app.use("/alunos", alunoRouter);
// const PORT = 3000;

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
})