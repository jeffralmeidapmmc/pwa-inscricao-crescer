document.getElementById("inscricaoForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const curso = document.getElementById("curso").value;

  const resposta = await fetch("https://script.google.com/macros/s/AKfycbydDtiGiDNhmxdfKQ6WGYs7pdiun26P_otrgs2ygv29sl9cpHJLnHVCiir4H4_0Ipg/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ nome, cpf, curso }),
  });

  document.getElementById("mensagem").textContent = "Inscrição enviada com sucesso!";
  document.getElementById("inscricaoForm").reset();
});
