document.getElementById("inscricaoForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const cursosSelecionados = Array.from(document.getElementById("curso").selectedOptions).map(opt => opt.value).join(", ");

  const dados = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefoneWhatsapp").value,
    telefoneRecados: document.getElementById("telefoneRecado").value,
    nascimento: document.getElementById("nascimento").value,
    cpf: document.getElementById("cpf").value,
    bairro: document.getElementById("bairro").value,
    curso: cursosSelecionados
  };

  const cpf = dados.cpf;

  // Verifica inscrições anteriores
  const resposta = await fetch(`https://script.google.com/macros/s/AKfycbyOmajFTPCV5bbvDvKrr9YFGWI2d2xgarAMNBWs0u2rBaTkT0a_5R3YdWZtZdMaH6Sb/exec?cpf=${cpf}`);
  const conteudo = await resposta.json();

  let mensagem = "";

  if (conteudo.totalInscricoes > 0) {
    mensagem += `Este CPF já possui ${conteudo.totalInscricoes} inscrição(ões).`;
  }

  // Envia os dados
  await fetch("https://script.google.com/macros/s/AKfycbyOmajFTPCV5bbvDvKrr9YFGWI2d2xgarAMNBWs0u2rBaTkT0a_5R3YdWZtZdMaH6Sb/exec", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(dados),
  });

  document.getElementById("mensagem").textContent = mensagem + " Inscrição enviada com sucesso!";
  document.getElementById("inscricaoForm").reset();
});
