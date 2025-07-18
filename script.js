document.getElementById("inscricaoForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const dados = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefoneWhatsapp").value,
    telefoneRecados: document.getElementById("telefoneRecado").value,
    nascimento: document.getElementById("nascimento").value,
    cpf: document.getElementById("cpf").value,
    bairro: document.getElementById("bairro").value,
    curso: document.getElementById("curso").value
  };

  await fetch("https://script.google.com/macros/s/AKfycbz1cr2flYYWy3O47BBuzclguQNfVRieWYwwoGVzKEHMXG6B5BYooYFM5DkySuVmmtx2/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(dados),
  });

  document.getElementById("mensagem").textContent = "Inscrição enviada com sucesso!";
  document.getElementById("inscricaoForm").reset();
});
