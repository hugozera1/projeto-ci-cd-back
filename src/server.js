import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// CORS liberado para qualquer front (ou coloque o domínio da Vercel depois)
app.use(
  cors({
    origin: "https://projeto-ci-cd-front-iota.vercel.app/",
  })
);

app.get("/", (req, res) => {
  res.json({ mensagem: "API online e integrada com CI/CD!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
