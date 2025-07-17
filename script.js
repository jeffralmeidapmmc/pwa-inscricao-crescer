
document.getElementById("inscricaoForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const curso = document.getElementById("curso").value;

const resposta = await fetch("https://script.google.com/macros/s/AKfycbwDsMqS1kv5E_Uv4h-IQUDnsiQxJsCV8JdJoL5rdEfSls4dWurl16PVIXSIOkTxvCze/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams({ nome, cpf, curso })
});


  document.getElementById("mensagem").textContent = "Inscrição enviada com sucesso!";
  document.getElementById("inscricaoForm").reset();
});
