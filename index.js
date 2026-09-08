const express = require("express");
const alunoRouter = require("./src/routes/alunoRouter");

const app = express();
app.use(express.json());

app.use("/api", alunoRouter);
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})