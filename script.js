document.getElementById("inscricaoForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const dados = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    telefoneRecados: document.getElementById("telefoneRecados").value,
    nascimento: document.getElementById("nascimento").value,
    cpf: document.getElementById("cpf").value,
    bairro: document.getElementById("bairro").value,
    curso: document.getElementById("curso").value
  };

  await fetch("https://script.google.com/macros/s/AKfycbx83Hq90gecUSMcwJ1TB2t6TB039u2F7R9veOykqoU2c1iQDZkh1YNXlO3Niohzle05/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(dados),
  });

  document.getElementById("mensagem").textContent = "Inscrição enviada com sucesso!";
  document.getElementById("inscricaoForm").reset();
});
