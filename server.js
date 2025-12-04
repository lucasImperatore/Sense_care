const express = require("express"); // Framework para criar servidor e rotas
const mysql = require("mysql2"); // Biblioteca para conectar no MySQL
const path = require("path"); // Módulo nativo do Node para lidar com caminhos

const app = express(); // Cria a aplicação Express

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Middleware para servir arquivos estáticos (HTML, CSS, JS da pasta public/)
app.use(express.static(path.join(__dirname, "public")));

// Conexão com o banco MySQL (via XAMPP)
const db = mysql.createConnection({
  host: "localhost", // Servidor do MySQL
  user: "root", // Usuário padrão do XAMPP
  password: "", // Senha (geralmente vazia no XAMPP)
  database: "senseCare", // Nome do banco que você criou
});

// ---------- ROTAS ----------

// GET /usuarios → retorna todos os usuários do banco
app.get("/enfermeiro", (req, res) => {
  db.query("SELECT * FROM enfermeiro", (err, results) => {
    if (err) throw err; // Se der erro na query, interrompe
    res.json(results); // Envia o resultado como JSON para o front
  });
});

// POST /usuarios → insere um novo usuário no banco
app.post("/enfermeiro", (req, res) => {
  const {
    nome,
    coren,
    cpf,
    dataNascimento,
    
    
  } = req.body; // Extrai os dados enviados pelo front
  db.query(
    "INSERT INTO enfermeiro (nome,cpf_Enfermeiro ,coren , dataNascimento) VALUES (?, ?, ?, ?)", // Query SQL com placeholders
    [nome, cpf, coren, dataNascimento], // Valores que substituem os "?"
    (err, result) => {
      if (err) throw err;
      res.json({ message: "adicionado(a) com sucesso!" }); // Retorno de sucesso
    }
  );
});

// GET /usuarios → retorna todos os usuários do banco
app.get("/paciente", (req, res) => {
  db.query("SELECT * FROM paciente", (err, results) => {
    if (err) throw err; // Se der erro na query, interrompe
    res.json(results); // Envia o resultado como JSON para o front
  });
});

// POST /usuarios → insere um novo usuário no banco
app.post("/paciente", (req, res) => {
  const {
    cpf1, // O nome do campo no front é 'cpf1', mas a coluna no DB é 'cpf_Paciente'
    nome1, // O nome do campo no front é 'nome1', mas a coluna no DB é 'Nome'
    nomeMae, // O nome do campo no front é 'nomeMae', mas a coluna no DB é 'Nome_Da_Mae'
    nascimentop, // O nome do campo no front é 'nascimentop', mas a coluna no DB é 'data_De_Nascimento'
    idoso,
    gestante,
    neuro,
    alergias,
    medico,
    leito,
    deficiencia,
  } = req.body; // Extrai os dados enviados pelo front 

const pacienteDeRisco = [];
if (idoso) pacienteDeRisco.push("'+60 anos'");
if (gestante) pacienteDeRisco.push("'gestante'");
if (neuro) pacienteDeRisco.push("'neuro divergente'");

let pacienteRiscoValue = null;
if (idoso == "true" || idoso == "on") {
  // Supondo que você use true/false ou 'on'/'off'
  pacienteRiscoValue = "+60 anos";
} else if (gestante == "true" || gestante == "on") {
  pacienteRiscoValue = "gestante";
} else if (neuro == "true" || neuro == "on") {
  pacienteRiscoValue = "neuro divergente";
}

  db.query(
    "INSERT INTO paciente (cpf_Paciente, Nome, Nome_Da_Mae, data_De_Nascimento, deficiencia, paciente_De_Risco, alergias, Nome_Do_Medico, Leito) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", // Query SQL com placeholders
    [
      cpf1, // -> cpf_Paciente
      nome1, // -> Nome
      nomeMae, // -> Nome_Da_Mae
      nascimentop, // -> data_De_Nascimento
      deficiencia, // -> deficiencia
      pacienteRiscoValue, // -> paciente_De_Risco (Valor único calculado ou null)
      alergias, // -> alergias
      medico, // -> Nome_Do_Medico
      leito, // -> Leito
    ], // Valores que substituem os "?"
    (err, result) => {
      if (err) throw err;
      res.json({ message: "adicionado(a) com sucesso!" }); // Retorno de sucesso
    }
  );
});

// app.delete("/characters/:classe", (req, res) => {
//   const classe = req.params.classe;

//   db.query(
//     "DELETE FROM characters WHERE classe = ?",
//     [classe],
//     (err, result) => {
//       if (err) throw err;

//       if (result.affectedRows === 0) {
//         return res.status(404).json({ message: "Classe não encontrada" });
//       }

//       res.json({ message: "Classe deletada com sucesso!" });
//     }
//   );
// });

// Inicia o servidor na porta 3000
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
