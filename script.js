document.getElementById("inscricaoForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const checkboxes = document.querySelectorAll('input[name="curso"]:checked');
  const cursosSelecionados = Array.from(checkboxes).map(cb => cb.value).join(", ");

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

  document.getElementById("alerta").textContent = "Verificando inscrições anteriores...";
  document.getElementById("contador").textContent = "";

  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbz5ftZFA3rKNw_SVDWws6_sQ55PVeeKkQ7Zii4k086CCsoZ1gSgeSIemJXIRI9M5S9e/exec?cpf=" + encodeURIComponent(dados.cpf)
    );
    const json = await res.json();
    const totalInscricoes = json.total || 0;

    document.getElementById("alerta").textContent = "CPF já utilizado anteriormente.";
    document.getElementById("contador").textContent = "Total de inscrições anteriores: " + totalInscricoes;
  } catch (error) {
    document.getElementById("alerta").textContent = "";
    document.getElementById("contador").textContent = "";
  }

  await fetch("https://script.google.com/macros/s/AKfycbz5ftZFA3rKNw_SVDWws6_sQ55PVeeKkQ7Zii4k086CCsoZ1gSgeSIemJXIRI9M5S9e/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(dados),
  });

  document.getElementById("mensagem").textContent = "Inscrição enviada com sucesso!";
  document.getElementById("inscricaoForm").reset();
});
