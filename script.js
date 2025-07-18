document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inscricaoForm");
  const mensagem = document.getElementById("mensagem");
  const btnEnviar = document.getElementById("btnEnviar");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Desabilita botão e altera texto para enviar...
    btnEnviar.disabled = true;
    btnEnviar.textContent = "Enviando...";

    const dados = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      telefoneWhatsapp: document.getElementById("telefoneWhatsapp").value,
      telefoneRecado: document.getElementById("telefoneRecado").value,
      nascimento: document.getElementById("nascimento").value,
      cpf: document.getElementById("cpf").value,
      bairro: document.getElementById("bairro").value,
      curso: document.getElementById("curso").value,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbz1cr2flYYWy3O47BBuzclguQNfVRieWYwwoGVzKEHMXG6B5BYooYFM5DkySuVmmtx2/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(dados),
      });

      mensagem.textContent = "Inscrição enviada com sucesso!";
      mensagem.classList.add("success");
      form.reset();
    } catch (error) {
      mensagem.textContent = "Erro ao enviar, tente novamente.";
      mensagem.classList.remove("success");
    } finally {
      btnEnviar.disabled = false;
      btnEnviar.textContent = "Enviar";
    }
  });
});
