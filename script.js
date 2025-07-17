
document.getElementById("inscricaoForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const curso = document.getElementById("curso").value;

  const resposta = await fetch("https://script.google.com/macros/s/AKfycbzTP-_i0fMcxGxszMbRN4ByD_dNylg82P-BdJo83MFRIq8-Sy-pM48Eg3w4YYvGlWvx/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ nome, cpf, curso }),
  });

  document.getElementById("mensagem").textContent = "Inscrição enviada com sucesso!";
  document.getElementById("inscricaoForm").reset();
});
