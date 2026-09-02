const express = require("express");

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/rota", (req, res) => {
    return res.send("<h1>Hello world</h1>");
});

app.post("/rota", (req, res) => {
    return res.status(200).json({message: "Hello World"})
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})