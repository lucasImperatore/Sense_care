let url1 = `http://localhost:3000/enfermeiro`;
let url2 = `http://localhost:3000/paciente`;
const listaPaciente= document.getElementById("listaPaciente");
const listaEnfermeiro= document.getElementById("listaEnfermeiro")



async function carregarEnfermeiros() {
  
  if (listaEnfermeiro) {
    listaEnfermeiro.innerHTML = "";
  } else {
    console.error("Elemento 'listaEnfermeiro' não encontrado.");
    return;
  }

  try {
    
    const response = await fetch(url1);

    
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const enfermeiros = await response.json();

    
    enfermeiros.forEach((cpf_Enfermeiro) => {
     
      const listItem = document.createElement("li");

      
      listItem.innerHTML = `
                <div>
                    <strong>Nome:</strong> ${cpf_Enfermeiro.Nome || "N/A"}
                </div>
                <div>
                    <strong>CPF:</strong> ${cpf_Enfermeiro.cpf_Enfermeiro || "N/A"}
                </div>
                <div>
                    <strong>COREN:</strong> ${cpf_Enfermeiro.coren || "N/A"}
                </div>
                <div>
                    <strong>Data de Nascimento:</strong> ${cpf_Enfermeiro.dataNascimento || "N/A"}
                </div>
                <hr>
            `;

      
      listaEnfermeiro.appendChild(listItem);
    });
  } catch (error) {
    
    console.error("Não foi possível carregar os dados dos enfermeiros:", error);

    
    listaEnfermeiro.innerHTML = `<li>Erro ao carregar os dados. Detalhes: ${error.message}</li>`;
  }
}


carregarEnfermeiros();


async function carregarPacientes() {

  if (listaPaciente) {
    listaPaciente.innerHTML = "";
  } else {
    console.error("Elemento 'listaPaciente' não encontrado.");
    return;
  }

  try {
    const response = await fetch(url2);

    
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const pacientes = await response.json();

    
    pacientes.forEach((cpf_Paciente) => {
      
      const listItem = document.createElement("li");

      
      listItem.innerHTML = `
                <div>
                    <strong>Nome:</strong> ${cpf_Paciente.Nome || "N/A"}
                </div>
                <div>
                    <strong>CPF:</strong> ${cpf_Paciente.cpf_Paciente || "N/A"}
                </div>
                <div>
                    <strong>Nome da Mãe:</strong> ${ cpf_Paciente.Nome_Da_Mae || "N/A"}
                </div>
                <div>
                    <strong>Data de Nascimento:</strong> ${cpf_Paciente.data_De_Nascimento || "N/A"}
                </div>
                <div>
                    <strong>deficiencia:</strong> ${cpf_Paciente.deficiencia || "N/A"}
                </div>
                <div>
                    <strong>Paciente De Risco:</strong> ${cpf_Paciente.paciente_De_Risco || "N/A"}
                </div>
                <div>
                    <strong>Alergias:</strong> ${cpf_Paciente.alergias || "N/A"}
                </div>
                <div>
                    <strong>Médico Responsável:</strong> ${cpf_Paciente.Nome_Do_Medico || "N/A"}
                </div>
                <div>
                    <strong>Leito:</strong> ${cpf_Paciente.Leito || "N/A"}
                </div>
                <hr>
            `;

      
      listaPaciente.appendChild(listItem);
    });
  } catch (error) {
    
    console.error("Não foi possível carregar os dados dos pacientes:", error);

    
    listaPaciente.innerHTML = `<li>Erro ao carregar os dados. Detalhes: ${error.message}</li>`;
  }
}

carregarPacientes();