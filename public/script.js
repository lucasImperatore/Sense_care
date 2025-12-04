// async function carregaDados() {
//   let pesquisa = document.getElementById("pesquisa").value.toLowerCase();
//   let url = `http://localhost:3000/enfermeiro`;
// const nome = document.getElementById("nome").value;
// const coren = document.getElementById("coren").value;
// const cpf = document.getElementById("cpf").value;
// const nascimento = document.getElementById("nascimento").value;
// const email = document.getElementById("email").value;

//   await fetch(url)
//     .then((Response) => {
//       return Response.json();
//     })
//     .then((data) => {
//       for (let i = 0; i < data.length; i++) {
//         if (data[i].classe.toLowerCase() == pesquisa) {
//           nome.innerHTML = `nome: ${data[i].nome}`;
//           coren.innerHTML = `coren: ${data[i].coren}`;
//           cpf.innerHTML = `cpf: ${data[i].cpf}`;
//           nascimento.innerHTML = `nascimento: ${data[i].nascimento}`;
//           email.innerHTML = `email: ${data[i].email}`;
          
//         } else {
//           // alert("sua pesquisa nao foi encontrada")
//         }
//       }
//     });
// }

// async function deletar() {
//   let deleta = document.getElementById("classDelete").value.toLowerCase();

//   const response = await fetch(`http://localhost:3000/characters/${deleta}`, {
//     method: "DELETE",
//   });

//   const result = await response.json();
//   alert(result.message);
// }

// Função para enviar novo enfermeiro
let form =document.getElementById("add")
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const coren = document.getElementById("coren").value;
  const cpf = document.getElementById("cpf").value;
  const nascimento = document.getElementById("nascimento").value;
 
  

  if (nome.trim() !== "") {
    try {
      const response = await fetch("/enfermeiro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          coren,
          cpf,
          dataNascimento: nascimento,
        }),
      });
      console.log(form)

      if (response.ok) {
        console.log("Enfermeiro cadastrado com sucesso!");
        form.reset(); // limpa os campos com a função nativa para tags form
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



// Função para enviar novo paciente
let form2 =document.getElementById("add2")
form2.addEventListener("submit", async (e) => {
  e.preventDefault();

  const cpf1 = document.getElementById("cpf1").value;
  const nome1 = document.getElementById("nome1").value;
  const nomeMae = document.getElementById("nomeMae").value;
  const nascimentop = document.getElementById("nascimentop").value;

  const idoso = document.getElementById("60+").checked;
  const gestante = document.getElementById("gestante").Checked;
  const neuro = document.getElementById("neuro").Checked;
  
  const alergias = document.getElementById("alergias").value;
  const medico = document.getElementById("medico").value;
  const leito = document.getElementById("leito").value;
  const deficiencia =document.getElementById("deficiencia").value

  

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
          idoso,
          gestante,
          neuro,
          alergias,
          medico,
          leito,
          deficiencia,
        }),
      });
      console.log(form2)

      if (response.ok) {
        console.log("paciente cadastrado com sucesso!");
        form.reset(); // limpa os campos com a função nativa para tags form
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