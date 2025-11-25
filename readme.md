#  SENSE CARE - Requisitos do Sistema

Este documento detalha os requisitos funcionais e de prioridade para o sistema SENSE CARE, uma plataforma voltada para o gerenciamento de pacientes e enfermeiros.

---

##  Página de Login (Prioridade: Média)

A página de login é o ponto de acesso inicial ao sistema.

* **Usuário:** O campo deve aceitar um endereço de e-mail (ex: `nomeusuario@gmail.com`).
* **Senha:** O campo deve exigir uma senha com o seguinte padrão: **8 dígitos** (mínimo) contendo pelo menos **um caractere especial** e **um número**.
* **Botão:** Um botão de envio para autenticação.

---

##  Painel Central (Prioridade: Alta)

O Painel Central é a interface principal para gerenciamento e navegação do sistema.

* **Acesso ao Painel do Enfermeiro:** Aba/link para visualizar o painel específico dos enfermeiros.
* **Acesso ao Painel do Paciente:** Aba/link para visualizar o painel específico dos pacientes.
* **Cadastro de Paciente:** Funcionalidade para **adicionar novos pacientes** ao sistema.
* **Cadastro de Enfermeiros:** Funcionalidade para **adicionar novos enfermeiros** ao sistema.

---

##  Cadastro de Paciente (Prioridade: Alta)

Formulário detalhado para registro de novos pacientes, incluindo informações clínicas e de segurança.

* **Dados Pessoais/Identificação:**
    * Nome
    * Nome da Mãe
    * Data de Nascimento
    * Sexo
* **Informações Clínicas/Especiais:**
    * Neuro Divergente (Sim/Não)
    * Gestante (Sim/Não)
    * Histórico Médico (Campo de texto livre/detalhado)
    * Alergias (Campo de texto livre/lista)
* **Informações de Localização/Segurança:**
    * Risco de Queda (Sim/Não)
    * Risco de Fuga (Sim/Não)
    * Leito (Identificação do leito)
* **Vínculo com Dispositivo:**
    * ID da pulseira paciente

---

##  Cadastro de Enfermeiro (Prioridade: Alta)

Formulário para registro de novos profissionais de enfermagem.

* **Campos Requeridos:**
    * Nome
    * Coren (Número de registro profissional)
    * CPF
    * Data de Nascimento
    * E-mail
    * Telefone

---

##  Painel do Enfermeiro (Prioridade: Alta)

Visão do enfermeiro contendo suas informações e pacientes associados.

* **Informações do Enfermeiro:** Exibição dos dados do formulário de cadastro (Nome, Coren, CPF, Data de Nascimento).
* **Pacientes Vinculados:** Lista de pacientes que estão sob os cuidados ou monitoramento deste enfermeiro.
* **Vínculo com Dispositivo:**
    * ID da pulseira Enfermeiro

---

##  Painel do Paciente (Prioridade: Alta)

Visão do paciente contendo seus dados e o profissional responsável.

* **Informações do Paciente:** Exibição dos dados do formulário de cadastro de paciente.
* **Enfermeiro Vinculado:** Identificação do enfermeiro responsável ou associado ao paciente.
* **Vínculo com Dispositivo:**
    * ID da pulseira Paciente