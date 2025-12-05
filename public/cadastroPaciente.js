// Função para enviar novo paciente
let form2 = document.getElementById("add2");

form2.addEventListener("submit", async (e) => {
  e.preventDefault();

  const cpf1 = document.getElementById("cpf1").value;
  const nome1 = document.getElementById("nome1").value;
  const nomeMae = document.getElementById("nomeMae").value;
  const nascimentop = document.getElementById("nascimentoP").value;

  const idoso = document.getElementById("60+").checked;
  const gestante = document.getElementById("gestante").checked;
  const neuro = document.getElementById("neuro").checked;
  const alergias = document.getElementById("alergias").value;
  const medico = document.getElementById("medico").value;
  const leito = document.getElementById("leito").value;
  const deficiencia = document.getElementById("deficiencia").value;
  let pacienteRiscoValue = null;
  if (idoso) {
    // idoso já é um booleano (true/false)
    pacienteRiscoValue = "+60 anos";
  } else if (gestante) {
    // gestante já é um booleano (true/false)
    pacienteRiscoValue = "gestante";
  } else if (neuro) {
    // neuro já é um booleano (true/false)
    pacienteRiscoValue = "neuro divergente";
  } // ... (Restante do código JS)
  if (nome1.trim() !== "") {
    try {
      const response = await fetch("/paciente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cpf1,
          nome1,
          nomeMae,
          nascimentop,
          pacienteRiscoValue, // 💡 ENVIAR O VALOR ÚNICO
          alergias,
          medico,
          leito,
          deficiencia,
        }),
      });
      console.log(form2);

      if (response.ok) {
        alert("paciente cadastrado com sucesso!");
        form2.reset(); // limpa os campos com a função nativa para tags form
        // carregaDados(); // Se você precisa atualizar uma lista na tela
      } else {
        const errorData = await response.json();
        console.error("Erro ao cadastrar:", errorData);
        alert("Erro ao cadastrar enfermeiro.");
      }
    } catch (error) {
      console.error("Falha na requisição POST:", error);
    }
  } else {
    alert("O campo Nome não pode estar vazio.");
  }
});
